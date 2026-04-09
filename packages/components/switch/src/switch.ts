// v-model：modelValue  update:modelValue
// 事件回调 @change
// disabled
// onswitch-text 和 unswitch-text 修改描述
// 尺寸 size：lg md sm xs(从大到小)

import { PropType } from "vue";

export type sizeType = "lg" | "md" | "sm" | "xs";
export const switchProps = {
  modelValue: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  onswitchText: {
    type: String,
    default: "",
  },
  unswitchText: {
    type: String,
    default: "",
  },
  size: {
    type: String as PropType<sizeType>,
    default: "lg",
  },
};

export const switchEmits = {
  "update:modelValue": (value: string | boolean) => {
    return typeof value === "boolean" || typeof value === "string";
  },
  change: (value: string | boolean) => {
    return typeof value === "boolean" || typeof value === "string";
  },
};
