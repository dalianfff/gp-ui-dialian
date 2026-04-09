<template>
  <div :class="bem.b()">
    <a
      @click="onChangePage(false)"
      href="javascript:;"
      :class="{ disabled: currentPage === 1 }"
      >上一页</a
    >
    <span v-if="currentPage > 3 && pages > 5">...</span>
    <a
      @click="onChangePage(item)"
      href="javascript:;"
      :class="{ active: item === currentPage }"
      v-for="item in list"
      :key="item"
      >{{ item }}</a
    >
    <span v-if="currentPage < pages - 2 && pages > 5">...</span>
    <a
      @click="onChangePage(true)"
      href="javascript:;"
      :class="{ disabled: currentPage === pages }"
      >下一页</a
    >
  </div>
</template>

<script lang="ts" setup>
import { createNamespace } from "../../../utils/create";
import { paginationEmits, paginationProps } from "./pagination";
import "../../../theme-chalk/src/pagination.scss";
import { computed, ref } from "vue";

defineOptions({
  name: "GP-pagination",
});
const bem = createNamespace("pagination");
const props = defineProps(paginationProps);
const emits = defineEmits(paginationEmits);

// 一共的页数
let pages = computed(() => Math.ceil(props.total / props.pagesize));
// 当前页
const currentPage = ref(1);

// 页码数列表
const list = computed(() => {
  const list1 = [];
  if (pages.value <= 5) {
    // 总数<=5
    for (let i = 1; i <= pages.value; i++) {
      list1.push(i);
    }
  } else {
    // 总数>5
    if (currentPage.value <= 2) {
      for (let i = 1; i <= 5; i++) {
        list1.push(i);
      }
    } else if (currentPage.value >= pages.value - 1) {
      for (let i = pages.value - 4; i <= pages.value; i++) {
        list1.push(i);
      }
    } else {
      for (let i = currentPage.value - 2; i <= currentPage.value + 2; i++) {
        list1.push(i);
      }
    }
  }
  return list1;
});

// 点击页码
const onChangePage = (type: any) => {
  if (type === false) {
    // 上一页
    if (currentPage.value === 1) return;
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  } else if (type === true) {
    // 下一页
    if (currentPage.value === pages.value) return;
    if (currentPage.value < pages.value) {
      currentPage.value++;
    }
  } else {
    currentPage.value = type;
  }
  emits("changePage", currentPage.value);
};
</script>
