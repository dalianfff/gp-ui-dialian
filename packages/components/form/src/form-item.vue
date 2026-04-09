<template>
  <div :class="[bem.b()]">
    <label :class="bem.e('label')">
      {{ props.label }}
    </label>
    <div :class="bem.e('content')">
      <slot></slot>
      <div v-show="validateState === 'error'" :class="bem.e('error')">
        {{ validateMessage }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject, onMounted, provide, ref } from "vue";
import { createNamespace } from "../../../utils/create";
import {
  FormItemContent,
  formItemProps,
  FormItemRule,
  formItemValidateState,
} from "./form-item";
import { FormContent } from "./form";
import AsyncValidator from "async-validator";
import "../../../theme-chalk/src/form.scss";

defineOptions({
  name: "GP-form-item",
});

const validateState = ref<formItemValidateState>(""); //校验状态
const validateMessage = ref(""); // 错误信息

const bem = createNamespace("form-item");
const props = defineProps(formItemProps);
const formContext: FormContent = inject("FormContentKey")!;

// 合并rules
const _rules = computed(() => {
  const rules = props.rules || [];
  const formRules = formContext.rules;
  if (formRules && props.prop) {
    if (formRules[props.prop]) {
      rules?.push(...formRules[props.prop]!);
    }
  }
  return rules;
});

// 筛选包含trigger的rules
const getTriggerRules = (trigger: string) => {
  const rules = _rules;
  // 筛选
  return rules.value.filter((rule) => {
    // 在filter中，return的true就是保留
    if (!rule.trigger || !trigger) return true;
    if (Array.isArray(rule.trigger)) {
      return rule.trigger.includes(trigger);
    } else {
      return rule.trigger === trigger;
    }
  });
};

const validates = async (trigger: string, callback?: any) => {
  const rules = getTriggerRules(trigger);
  // 创建校验器
  const validator = new AsyncValidator({
    [props.prop as string]: rules,
  });
  // 校验
  return validator
    .validate({
      // 传入 校验的字段 + 校验的值
      [props.prop as string]: formContext?.model?.[props.prop!],
    })
    .then(() => {
      // 成功
      validateState.value = "success";
      validateMessage.value = "";
    })
    .catch((error) => {
      validateState.value = "error";
      validateMessage.value = error.errors[0].message;
      return Promise.reject(error);
    });
};

const context: FormItemContent = {
  ...props,
  validates,
};
// 向父组件传信
provide("formItemContext", context);

onMounted(() => {
  formContext.addField(context);
});
</script>
