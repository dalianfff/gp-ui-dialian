import { PropType } from "vue";

export type triggerType = "hover" | "click";
export const dropdownProps = {
  trigger: {
    type: String as PropType<triggerType>,
    default: "hover",
  },
};