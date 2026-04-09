<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { createNamespace } from "../../../utils/create";
import { iconProps } from "./icon";
import "../../../theme-chalk/src/icon.scss";

defineOptions({
  name: "GP-icon",
});

const bem = createNamespace("icon");
const props = defineProps(iconProps);

const style = computed(() => {
  if (!props.color && !props.size) {
    return [];
  }
  return {
    ...(props.size ? { "font-size": props.size + "px" } : {}),
    ...(props.size ? { width: props.size + "px" } : {}),
    ...(props.size ? { height: props.size + "px" } : {}),
    ...(props.color ? { color: props.color } : {}),
  };
});
</script>
