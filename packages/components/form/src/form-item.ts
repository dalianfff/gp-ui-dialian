import { RuleItem } from "async-validator";
import { ExtractPropTypes, PropType } from "vue";

export type formItemValidateState = "success" | "error" | "";

// rule的类型
// username: [{ required: true, message: '请输入用户名', trigger: 'blur' }]
export interface FormItemRule extends RuleItem {
  trigger?: string | string[];
}

export const formItemProps = {
  // form.model中字段名
  prop: {
    type: String,
  },
  label: {
    type: String,
  },
  rules: {
    type: Array as PropType<FormItemRule[]>,
  },
} as const;

export type FormItemProps = Partial<ExtractPropTypes<typeof formItemProps>>;

// 向父组件传递
export interface FormItemContent extends FormItemProps {
  validates: (
    tigger: string,
    callback?: (isValue: boolean) => void,
  ) => Promise<void>;
}
