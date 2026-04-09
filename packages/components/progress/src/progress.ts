// color 颜色
// percent 百分比
// select on条形 circle圆形
// status 图标 warning success
// type 内容写里面 in
// width height

import { PropType } from "vue";

export type selectType = "on" | "circle";
export type statusType = "warning" | "success" | "";
export type typeType = "in" | "";

export const progressProps = {
  color: {
    type: String,
    default: "aquamarine",
  },
  percent: {
    type: Number,
    default: 0,
  },
  select: {
    type: String as PropType<selectType>,
    default: "on",
  },
  status: {
    type: String as PropType<statusType>,
    default: "",
  },
  type: {
    type: String as PropType<typeType>,
    default: "",
  },
};
