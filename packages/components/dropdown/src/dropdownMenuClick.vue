<template>
  <transition name="GP-transition">
    <ul :class="bem.b()" v-if="stateClick">
      <slot></slot>
    </ul>
  </transition>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { createNamespace } from "../../../utils/create";
import mitt from "../src/emitter";

defineOptions({
  name: "GP-dropdown-menu-click",
});
const bem = createNamespace("dropdown-Menu");
const stateClick = ref(false);

onMounted(() => {
  mitt.on("Click", (value) => {
    if (typeof value === "boolean") {
      stateClick.value = value;
    }
  });
});
</script>
