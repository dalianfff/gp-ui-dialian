<template>
  <div :class="bem.b()">
    <a v-if="props.to" :class="bem.e('a')" @click="handleClick">
      <slot></slot>
    </a>
    <span v-else><slot></slot></span>
  </div>
</template>

<script lang="ts" setup>
import { createNamespace } from "../../../utils/create";
import { breadcrumbItemProps } from "./breadcrumb-item";
import { useRouter } from "vue-router";
import "../../../theme-chalk/src/breadcrumb.scss";

defineOptions({
  name: "GP-breadcrumb-item",
});
const bem = createNamespace("breadcrumb-item");
const props = defineProps(breadcrumbItemProps);
const router = useRouter();

const handleClick = () => {
  if (!props.to) return;
  router.push(props.to);
};
</script>
