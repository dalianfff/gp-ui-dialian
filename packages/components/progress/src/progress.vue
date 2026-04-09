<template>
  <div :class="bem.b()" v-if="props.select === 'on'">
    <!-- 条形进度条 -->
    <!-- 文字嵌入 -->
    <div :class="bem.e('line')" v-if="props.type === 'in'">
      <div
        :class="[bem.e('textLine'), bem.e('ttext')]"
        :style="'background:' + props.color + ';width:' + props.percent + '%;'"
      >
        {{ props.percent }}%
      </div>
    </div>
    <!-- 文字在外面 -->
    <div :class="bem.e('line')" v-else>
      <div
        :class="bem.e('textLine')"
        :style="'background:' + props.color + ';width:' + props.percent + '%;'"
      ></div>
    </div>

    <!-- 状态图 -->
    <div :class="bem.e('status')" v-if="props.status">
      <GP-icon v-if="props.status === 'warning'">⚠️</GP-icon>
      <GP-icon v-else>✅</GP-icon>
    </div>

    <!-- 文字 -->
    <div :class="bem.e('content')" v-else-if="props.percent === 100">满</div>
    <div :class="bem.e('content')" v-else-if="props.type !== 'in'">
      {{ props.percent }}%
    </div>
  </div>

  <div :class="bem.e('circle')" v-else>
    <!-- svg环形进度条 -->
    <svg
      viewBox="0 0 96 96"
      :class="bem.e('svg')"
      style="width: 96px; height: 96px"
    >
      <!-- 背景 -->
      <circle
        r="40"
        cx="48"
        cy="48"
        fill="none"
        stroke-miterlimit="20"
        stroke-width="10"
        :class="bem.e('svg-progress')"
        style="stroke-dasharray: 275, 279.602; stroke: #eee"
      ></circle>
      <!-- 进度 -->
      <circle
        r="40"
        cx="48"
        cy="48"
        fill="none"
        stroke-miterlimit="20"
        stroke-width="10"
        :class="bem.e('svg-progress')"
        :style="`stroke-dasharray: ${(props.percent / 100) * 250}, 279.602;stroke:${props.color};`"
      ></circle>
    </svg>
    <!-- 图标 -->
    <div :class="bem.e('mark')" v-if="props.status">
      <GP-icon v-if="props.status === 'warning'">⚠️</GP-icon>
      <GP-icon v-else>✅</GP-icon>
    </div>
    <!-- 文字 -->
    <div :class="bem.e('mark')" v-else>{{ props.percent }}%</div>
  </div>
</template>

<script lang="ts" setup>
import { createNamespace } from "../../../utils/create";
import { progressProps } from "./progress";
import GPIcon from "../../Icon";
import "../../../theme-chalk/src/progress.scss";

defineOptions({
  name: "GP-progress",
});
const bem = createNamespace("progress");
const props = defineProps(progressProps);
</script>
