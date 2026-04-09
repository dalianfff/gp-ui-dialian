<template>
  <!-- wrap -->
  <div
    :class="[
      bem.b(),
      props.anim === 'updown' ? bem.e('vertical') : '',
      `indicator-${props.indicator}`,
    ]"
    :style="{ width: `${props.width}px`, height: `${props.height}px` }"
    ref="oWrap"
  >
    <!-- 图片列表 -->
    <div :class="bem.e('img-list')" ref="ImgList">
      <slot></slot>
    </div>
    <!-- 小箭头 -->
    <div :class="bem.e('arrow')">
      <a
        href="javascript:;"
        :class="[bem.e('left'), props.anim === 'updown' ? bem.e('up') : '']"
        @click="handleLeft"
        >{{ props.anim === "default" ? "<" : "↑" }}</a
      >
      <a
        href="javascript:;"
        :class="[bem.e('right'), props.anim === 'updown' ? bem.e('down') : '']"
        @click="handleRight"
        >{{ props.anim === "default" ? ">" : "↓" }}</a
      >
    </div>
    <!-- 小圆点 -->
    <ul :class="bem.e('circle-list')">
      <li
        v-for="(item, ind) in items"
        :key="ind"
        :class="[bem.e('circle'), ind === index ? bem.e('active') : '']"
        @click="handleCircle(ind as number)"
      ></li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { createNamespace } from "../../../utils/create";
import "../../../theme-chalk/src/swiper.scss";
import { swiperEmits, swiperProps } from "./swiper";
import { computed, onMounted, onUnmounted, ref, useSlots, watch } from "vue";

defineOptions({
  name: "GP-swiper",
});
const bem = createNamespace("swiper");
const props = defineProps(swiperProps);
const emits = defineEmits(swiperEmits);

// 插槽内容
const items = computed(() => {
  const slots = useSlots();
  return slots.default?.() || [];
});

// 点击左右切换
let index = ref(props.modelValue);
let ImgList = ref<HTMLElement | null>(null);
let oWrap = ref<HTMLElement | null>(null);

onMounted(() => {
  ImgList.value!.style[props.anim === "updown" ? "top" : "left"] =
    -props.modelValue * (props.anim === "updown" ? props.height : props.width) +
    "px";
  let cloneImg =
    ImgList.value!.querySelector(".GP-swiper__item")?.cloneNode(true);
  ImgList.value!.appendChild(cloneImg!);

  handleAutoPlay();
});

// 节流
let lock = ref(true);

// 向左
const handleLeft = () => {
  if (!lock.value) return;
  if (!ImgList) return;
  index.value--;
  if (index.value === -1) {
    index.value = items.value.length; //假图片
    ImgList.value!.style[props.anim === "updown" ? "top" : "left"] =
      -index.value * (props.anim === "updown" ? props.height : props.width) +
      "px";
    ImgList.value!.style.transition = "none";
    setTimeout(() => {
      // 异步
      index.value--;
      emits("update:modelValue", index.value);
      ImgList.value!.style[props.anim === "updown" ? "top" : "left"] =
        -index.value * (props.anim === "updown" ? props.height : props.width) +
        "px";
      ImgList.value!.style.transition = "0.5s ease";
    }, 0);
  } else {
    emits("update:modelValue", index.value);
    ImgList.value!.style[props.anim === "updown" ? "top" : "left"] =
      -index.value * (props.anim === "updown" ? props.height : props.width) +
      "px";
    ImgList.value!.style.transition = "0.5s ease";
  }

  lock.value = false;
  setTimeout(() => {
    lock.value = true;
  }, 500);
};
// 向右
const handleRight = () => {
  if (!lock.value) return;
  if (!ImgList) return;
  index.value++;
  if (index.value !== items.value.length) {
    emits("update:modelValue", index.value);
  }
  ImgList.value!.style[props.anim === "updown" ? "top" : "left"] =
    -index.value * (props.anim === "updown" ? props.height : props.width) +
    "px";
  ImgList.value!.style.transition = "0.5s ease";
  if (index.value === items.value.length) {
    index.value = 0;
    setTimeout(() => {
      emits("update:modelValue", index.value);
      ImgList.value!.style[props.anim === "updown" ? "top" : "left"] = 0 + "px";
      ImgList.value!.style.transition = "none";
    }, 500);
  }

  lock.value = false;
  setTimeout(() => {
    lock.value = true;
  }, 500);
};
// 点击圆点
const handleCircle = (ind: number) => {
  index.value = ind;
  ImgList.value!.style[props.anim === "updown" ? "top" : "left"] =
    -index.value * (props.anim === "updown" ? props.height : props.width) +
    "px";
};

// 自动播放
let t: any = null;
const handleAutoPlay = () => {
  if (t) clearInterval(t);
  if (props.autoplay) {
    if (t) clearInterval(t);
    t = setInterval(handleRight, props.autoplayTime);
    oWrap.value!.addEventListener("mouseenter", () => {
      if (t) clearInterval(t);
    });
    oWrap.value!.addEventListener("mouseleave", () => {
      if (t) clearInterval(t);
      t = setInterval(handleRight, props.autoplayTime);
    });
  } else {
    if (t) {
      clearInterval(t);
    }
  }
};

// 根据autoplay实时变化
watch(
  () => props.autoplay,
  () => {
    handleAutoPlay();
  },
);
onUnmounted(() => {
  if (t) {
    clearInterval(t);
    t = null;
  }
});
</script>
