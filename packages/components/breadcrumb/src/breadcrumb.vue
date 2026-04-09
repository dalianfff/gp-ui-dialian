<template>
  <div :class="bem.b()">
    <template v-for="(item, index) in items" :key="index">
      <component :is="item" />
      <span v-if="index < items.length - 1" :class="bem.e('separator')">
        {{ props.separator }}
      </span>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from "vue";
import { createNamespace } from "../../../utils/create";
import { breadcrumbProps } from "./breadcrumb";
import "../../../theme-chalk/src/breadcrumb.scss";

defineOptions({
  name: "GP-breadcrumb",
});
const bem = createNamespace("breadcrumb");
const props = defineProps(breadcrumbProps);

const items = computed(() => {
  const slots = useSlots();
  return slots.default?.() || []; // 默认插槽调用，拿到真实的 VNode 节点数组
});
</script>
