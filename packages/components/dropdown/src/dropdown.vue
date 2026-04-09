<template>
  <div
    :class="bem.b()"
    @mouseenter="handleMouseenter"
    @click="handleClick"
    @mouseleave="handleMouseleave"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { createNamespace } from "../../../utils/create";
import { dropdownProps } from "./dropdown";
import mitt from "../src/emitter";
import "../../../theme-chalk/src/dropdown.scss";
import { ref } from "vue";

defineOptions({
  name: "GP-dropdown",
});
const bem = createNamespace("dropdown");
const props = defineProps(dropdownProps);

const clickVal = ref(false);

const handleMouseenter = () => {
  if (props.trigger === "hover") {
    mitt.emit("Mouseenter", true);
  }
};
const handleClick = () => {
  if (props.trigger === "click") {
    mitt.emit("Click", !clickVal.value);
    clickVal.value = !clickVal.value;
  }
};
const handleMouseleave = () => {
  if (props.trigger === "hover") {
    mitt.emit("mouseleave", false);
  }
};
</script>
