<template>
  <div :class="bem.e('wrapper')" v-if="visible">
    <div :class="bem.b()" :style="style">
      <div :class="bem.e('header')">
        <span :class="bem.e('title')"> {{ title }}</span>
        <GP-button :class="bem.e('headerbtn')" @click="clickHandleconfirm">
          X
        </GP-button>
      </div>
      <div :class="bem.e('body')">
        <slot v-if="$slots.default"></slot>
        <span v-else>这是一段信息</span>
      </div>
      <div :class="bem.e('footer')">
        <GP-button @click="clickHandleconfirm">取消</GP-button>
        <GP-button @click="clickHandlecancel" type="primary">确定</GP-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { createNamespace } from "../../../utils/create";
import GPButton from "../../Button/index";
import { dialogEmits, dialogProps } from "./dialog";
import "../../../theme-chalk/src/dialog.scss";
import { ref } from "process";

defineOptions({
  name: "GP-dialog",
});

const bem = createNamespace("dialog");
const props = defineProps(dialogProps);
const emit = defineEmits(dialogEmits);

const style = computed(() => ({
  width: props.width,
  marginTop: props.top,
}));

const clickHandleconfirm = (e: MouseEvent) => {
  emit("cancel", e);
};
const clickHandlecancel = (e: MouseEvent) => {
  emit("confirm", e);
};
</script>
