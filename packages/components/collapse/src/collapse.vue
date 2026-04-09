<template>
  <div :class="bem.b()">
    <ul :class="bem.e('ul')">
      <li v-for="item in props.posts" :key="item.id" :class="bem.e('li')">
        <div :class="bem.e('header')">
          <span :class="bem.e('title')">{{ item.title }}</span>
          <span
            :class="[
              bem.e('icon'),
              arr.includes(item.id) ? 'icon-select' : 'icon-unselect',
            ]"
            @click="handleClick(item.id)"
            >></span
          >
        </div>
        <transition name="GP-collapse1">
          <div :class="bem.e('content')" v-if="arr.includes(item.id)">
            {{ item.body }}
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { createNamespace } from "../../../utils/create";
import "../../../theme-chalk/src/collapes.scss";
import { collapseProps, postType } from "./collapse";
import { ref } from "vue";

defineOptions({
  name: "GP-collapse",
});

const bem = createNamespace("collapse");
const props = defineProps(collapseProps);
const arr = ref<Array<string | number>>([]);

const handleClick = (id: number | string) => {
  let newArr = [...arr.value];
  if (arr.value.includes(id)) {
    newArr = arr.value.filter((i) => i !== id);
  } else {
    if (props.types) {
      // 能展开多个
      newArr.push(id);
    } else {
      newArr = [];
      newArr.push(id);
    }
  }
  arr.value = newArr;
};
</script>
