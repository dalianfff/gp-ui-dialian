import { ExtractPropTypes, PropType } from "vue";

export type inputType = "text" | "password";
export const inputProps = {
  type: {
    type: String as PropType<inputType>,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  showPassword: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: "",
  },
} as const;

export type InputProps = ExtractPropTypes<typeof inputProps>;

export const inputEmits = {
  "update:modelValue": (value: string) => value as string,
  blur: (e: FocusEvent) => e instanceof FocusEvent,
  change: (value: string) => value as string,
  focus: (e: FocusEvent) => e instanceof FocusEvent,
};
