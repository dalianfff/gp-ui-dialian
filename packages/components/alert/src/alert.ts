import { PropType } from "vue";

export type alertType = "error" | "success" | "info" | "warning";
export const alertProps = {
  type: {
    type: String as PropType<alertType>,
    default: "info",
  },
  title: {
    type: String,
    default: "请绑定title",
  },
  showIcon: {
    type: Boolean,
    default: false,
  },
  closeable: {
    type: Boolean,
    default: false,
  },
  content: {
    type: String,
    default: "",
  },
};
