<template>
  <div :class="bem.b()">
    <input
      ref="input1"
      :class="[bem.e('inner')]"
      :type="props.showPassword ? (PassShow ? 'text' : 'password') : props.type"
      :placeholder="placeholder"
      :disabled="disabled"
      :style="disabled ? { cursor: 'not-allowed', opacity: 0.6 } : {}"
      :modelValue="props.modelValue"
      @input="handleInput"
      @blur="handleBlur"
      @change="handleChange"
      @focus="handleFocus"
    />
    <!-- 密码切换图标 -->
    <span
      v-if="showPassIcon"
      :style="props.clearable ? { right: '30px' } : {}"
      :class="bem.e('suffix')"
      @click="handleShowEyes"
    >
      <!-- 闭眼 -->
      <svg
        v-if="!PassShow"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M21.5 12c0 .3-.2.5-.5.5H3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h18c.3 0 .5.2.5.5zM8.5 12c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5zM12 12c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5zM15.5 12c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5zM5.5 12c-.3 0-.5.2-.5.5v1.5c0 .3.2.5.5.5s.5-.2.5-.5V12.5c0-.3-.2-.5-.5-.5zM18.5 12c-.3 0-.5.2-.5.5v1.5c0 .3.2.5.5.5s.5-.2.5-.5V12.5c0-.3-.2-.5-.5-.5z"
        />
      </svg>
      <!-- 睁眼 -->
      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6zm0-2C7 4 2.73 7.11 1 12c1.73 4.89 6 8 11 8s9.27-3.11 11-8c-1.73-4.89-6-8-11-8zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
        />
      </svg>
    </span>

    <!-- 清空按钮 -->
    <span v-if="handleClearable" :class="bem.e('suffix')" @click="handleClose">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        />
      </svg>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject, onMounted, ref } from "vue";
import { inputEmits, inputProps } from "./input";
import { createNamespace } from "../../../utils/create";
import "../../../theme-chalk/src/input.scss";
import { watch } from "fs";
import type { FormItemContent } from "../../form/src/form-item";

defineOptions({
  name: "GP-input",
});
const bem = createNamespace("input");
const props = defineProps(inputProps);
const emits = defineEmits(inputEmits);

const input1 = ref<HTMLInputElement | null>(null);

const PassShow = ref(false);
const showPassIcon = computed(() => {
  return props.showPassword && props.modelValue && !props.disabled;
});
const handleShowEyes = () => {
  PassShow.value = !PassShow.value;
};

const handleClearable = computed(() => {
  return props.clearable && props.modelValue && !props.disabled;
});

const FormItemContent: FormItemContent = inject("formItemContext")!;

const handleInput = (e: Event) => {
  emits("update:modelValue", (e.target as HTMLInputElement).value);
};
const handleBlur = (e: FocusEvent) => {
  FormItemContent.validates("blur");
  emits("blur", e);
};
const handleFocus = (e: FocusEvent) => {
  emits("focus", e);
};
const handleChange = (e: Event) => {
  FormItemContent.validates("change");
  emits("change", (e.target as HTMLInputElement).value);
};

const handleClose = () => {
  input1.value!.value = "";
  emits("update:modelValue", "");
  input1.value?.focus();
};

const setNativeInputValue = () => {
  if (!input1.value) {
    return;
  }
  input1.value.value = String(props.modelValue);
};
onMounted(() => {
  setNativeInputValue();
});
</script>
