<template>
  <div :class="bem.b()">
    <input
      :class="bem.e('input')"
      ref="input"
      type="checkbox"
      :disabled="props.disabled"
      :style="disabled ? { cursor: 'not-allowed' } : ''"
      :modelValue="props.modelValue"
      @input="handleInput"
      @change="handleChange"
    />
    <div :class="bem.e('content')">
      <span :class="bem.e('slot')"><slot></slot></span>
      <div :class="bem.e('label')" v-if="props.label">{{ props.label }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { createNamespace } from "../../../utils/create";
import { checkboxEmits, checkboxProps } from "./checkbox";
import "../../../theme-chalk/src/checkbox.scss";
import { onMounted } from "vue";
import { ref } from "vue";

defineOptions({
  name: "GP-checkbox",
});
const bem = createNamespace("checkbox");
const props = defineProps(checkboxProps);
const emits = defineEmits(checkboxEmits);
const input = ref<HTMLInputElement | null>(null);
const handleInput = (e: Event) => {
  emits("update:modelValue", (e.target as HTMLInputElement).checked);
};
const handleChange = (e: Event) => {
  emits("change", (e.target as HTMLInputElement).checked);
};
const setInput = () => {
  if (!input.value) return;
  input.value.checked = Boolean(props.modelValue);
};
onMounted(() => {
  setInput();
});
</script>
