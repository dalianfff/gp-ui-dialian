import type { ExtractPropTypes, PropType, VNode } from "vue";

// 定义通知类型
export type NotificationType = "info" | "success" | "warning" | "error";

export const messProps = {
  message: {
    type: String,
    required: true,
    default: "",
  },
  type: {
    type: String as PropType<NotificationType>,
    default: "info",
  },
  // 自动关闭的时间
  duration: {
    type: Number,
    default: 3000,
  },
  closeable: {
    type: Boolean,
    default: false,
  },
} as const;

export type MessProps = ExtractPropTypes<typeof messProps>;

// 定义通知实例
export interface NotificationInstance {
  id: number;
  container: HTMLDivElement; //承载这个通知的真实 DOM 容器
}
