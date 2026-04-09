import { ExtractPropTypes, PropType } from "vue";

// 主要 成功  警告  危险 中性
export type Type = "primary" | "success" | "warning" | "danger" | "info";

export const buttonProps = {
  type: {
    type: String as PropType<Type>,
  },
  round: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
  },
} as const;

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;

export const buttonEmits = {
  click: (e: MouseEvent) => e instanceof MouseEvent,
};
