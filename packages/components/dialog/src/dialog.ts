import { ExtractPropTypes } from "vue";

export const dialogProps = {
  title: {
    type: String,
    default: "提示",
  },
  width: {
    type: String,
    default: "50%",
  },
  top: {
    type: String,
    default: "15hv",
  },
  visible: {
    type: Boolean,
    default: false,
  },
} as const;

export type DialogProps = ExtractPropTypes<typeof dialogProps>;

export const dialogEmits = {
  confirm: (e: MouseEvent) => e instanceof MouseEvent,
  cancel: (e: MouseEvent) => e instanceof MouseEvent,
} as const;
