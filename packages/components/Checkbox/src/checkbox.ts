// 禁用状态 disabled
// 多选框组 label
// @change 时间回调

import { PropType } from "vue";

export const checkboxProps = {
  disabled: {
    type: Boolean,
    default: false,
  },
  label: String,
  modelValue: {
    type: [Boolean, String, Number] as PropType<boolean | string | number>,
  },
};

export const checkboxEmits = {
  "update:modelValue": (value: boolean | string | number) =>
    typeof value === "boolean",
  change: (value: boolean) => typeof value === "boolean",
};
