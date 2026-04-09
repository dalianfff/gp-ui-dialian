<template>
  <button
    :class="[
      bem.b(),
      bem.e(type),
      bem.is('round', round),
      bem.is('circle', circle),
      bem.is('disabled', disabled),
    ]"
    @click="handleClick"
    type="button"
  >
    <i v-if="icon"
      ><GP-icon
        ><!-- 动态渲染图标组件：把 icon 字符串转为实际组件 -->
        <component :is="getIconComponent(icon)" /></GP-icon
    ></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts" setup>
import { createNamespace } from "../../../utils/create";
import { buttonEmits, buttonProps } from "./button";
import "../../../theme-chalk/src/button.scss";
import GPIcon from "../../Icon/index";
import * as IonIcons from "@vicons/ionicons5";

defineOptions({
  name: "GP-button",
});

const bem = createNamespace("button");

const props = defineProps(buttonProps);
const emit = defineEmits(buttonEmits);
const handleClick = (e: MouseEvent) => {
  emit("click", e);
};

const getIconComponent = (iconName: string) => {
  return IonIcons[iconName as keyof typeof IonIcons];
};
</script>
