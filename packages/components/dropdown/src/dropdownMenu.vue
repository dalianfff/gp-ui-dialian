<template>
  <transition name="GP-transition">
    <ul :class="bem.b()" v-if="state">
      <slot></slot>
    </ul>
  </transition>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { createNamespace } from "../../../utils/create";
import mitt from "../src/emitter";

defineOptions({
  name: "GP-dropdown-menu",
});
const bem = createNamespace("dropdown-Menu");
const state = ref(false);

onMounted(() => {
  mitt.on("Mouseenter", (value) => {
    if (typeof value === "boolean") {
      state.value = value;
    }
  });
  mitt.on("mouseleave", (value) => {
    if (typeof value === "boolean") {
      state.value = value;
    }
  });
});
</script>
