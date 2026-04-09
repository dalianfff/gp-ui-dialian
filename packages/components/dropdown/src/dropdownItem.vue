<template>
  <div :class="bem.b()">
    <a>
      <slot></slot>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, useSlots } from "vue";
import { createNamespace } from "../../../utils/create";
import mitt from "../src/emitter";

defineOptions({
  name: "GP-dropdown-item",
});
const bem = createNamespace("dropdown-item");
</script>
