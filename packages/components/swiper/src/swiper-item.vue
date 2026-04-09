<template>
  <div :class="bem.e('item')">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { createNamespace } from "../../../utils/create";

defineOptions({
  name: "GP-swiper-item",
});
const bem = createNamespace("swiper");
</script>
