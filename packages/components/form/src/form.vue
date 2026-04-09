<template>
  <form :class="bem.b()">
    <slot></slot>
  </form>
</template>

<script lang="ts" setup>
import { provide, ref } from "vue";
import { createNamespace } from "../../../utils/create";
import { formProps } from "./form";
import { FormItemContent } from "./form-item";
import { Values } from "async-validator";
import "../../../theme-chalk/src/form.scss";

defineOptions({
  name: "GP-form",
});

const bem = createNamespace("form");
const props = defineProps(formProps);

// 子表单的上下文
const fields = ref<FormItemContent[]>([]);

const addField = (context: FormItemContent) => {
  fields.value.push(context);
};

const context = {
  ...props,
  addField,
};
// 向子组件传信
provide("FormContentKey", context);

// 表单全局校验方法（暴露给用户，通过ref调用）
const validate = async (
  callback?: (valid: boolean, fields?: Values) => void,
) => {
  let errors = {};
  for (const field of fields.value) {
    try {
      await field?.validates("");
    } catch (error) {
      errors = {
        ...errors,
        error,
      };
    }
  }
  // 无错误：回调返回true
  if (Object.keys(errors).length === 0) {
    return callback?.(true);
  } else {
    // 有错误：回调返回false+错误信息；无回调则reject
    if (callback) {
      callback(false, errors);
    } else {
      return Promise.reject(errors);
    }
  }
};
// 暴露方法，用ref调用
defineExpose({
  validate,
});
</script>
