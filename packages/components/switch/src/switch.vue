<template>
  <div
    :class="[bem.b(), bem.is('disabled', disabled), bem.m(size)]"
    :style="{
      backgroundColor: switchCase ? '#77b349' : '#ccc',
      padding: onswitchText || unswitchText ? '0 4px' : '',
    }"
    @click="switchVal"
  >
    <span
      :class="bem.e('label')"
      v-if="switchCase && props.onswitchText"
      :style="{ color: '#fff', left: '6px' }"
      >{{ props.onswitchText }}</span
    >
    <div :class="[bem.e('radio'), switchCase ? bem.e('check') : '']"></div>
    <span
      :class="bem.e('label')"
      v-if="!switchCase && props.unswitchText"
      :style="{ color: '#444', right: '6px' }"
      >{{ props.unswitchText }}</span
    >
  </div>
</template>

<script lang="ts" setup>
import { createNamespace } from "../../../utils/create";
import "../../../theme-chalk/src/switch.scss";
import { switchEmits, switchProps } from "./switch";
import { ref, watch } from "vue";

defineOptions({
  name: "GP-switch",
});
const bem = createNamespace("switch");
const props = defineProps(switchProps);
const emits = defineEmits(switchEmits);

const switchCase = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newVal) => {
    switchCase.value = newVal;
  },
);

const switchVal = () => {
  if (props.disabled) return;
  switchCase.value = !switchCase.value;
  emits("update:modelValue", switchCase.value);
  emits("change", switchCase.value);
};
</script>
