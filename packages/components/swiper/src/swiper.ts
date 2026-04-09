import { PropType } from "vue";

export type animType = "default" | "updown";
export type indicatorType = "inside" | "outside" | "none";
export const swiperProps = {
  modelValue: {
    type: Number as PropType<number>,
    default: 0,
  },
  // 不同方向
  anim: {
    type: String as PropType<animType>,
    default: "default",
  },
  // 是否自动播放
  autoplay: {
    type: Boolean,
    default: false,
  },
  // 自动播放时间
  autoplayTime: {
    type: Number,
    default: 3000,
  },
  // 控制器的位置
  indicator: {
    type: String,
    default: "inside",
  },
  width: {
    type: Number,
    default: 800,
  },
  height: {
    type: Number,
    default: 300,
  },
};

export const swiperEmits = {
  "update:modelValue": (value: string | number) => value as string | number,
};
