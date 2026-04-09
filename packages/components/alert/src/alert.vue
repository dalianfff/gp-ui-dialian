<template>
  <Transition name="GP-alert-fade">
    <div :class="[bem.b(), bem.e(props.type)]" v-if="isshow">
      <span v-if="props.showIcon" :class="bem.e('icon')">{{
        icons[props.type]
      }}</span>
      <div :class="bem.e('content')">
        <h3 :class="[bem.e('title'), bem.e('global-ellipsis')]">
          {{ props.title }}
        </h3>
        <p :class="[bem.e('desc'), bem.e('global-ellipsis')]">
          {{ props.content }}
        </p>
        <div
          @click="handleClickClose"
          v-if="closeable"
          :class="bem.e('close-btn')"
        >
          X
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { createNamespace } from "../../../utils/create";
import "../../../theme-chalk/src/alert.scss";
import { alertProps } from "./alert";
import { ref } from "vue";

const icons = {
  info: "ℹ️",
  success: "✅",
  warning: "⚠️",
  error: "❌",
};
const isshow = ref<boolean>(true);

defineOptions({
  name: "GP-alert",
});

const bem = createNamespace("alert");
const props = defineProps(alertProps);

const handleClickClose = () => {
  isshow.value = false;
};
</script>
