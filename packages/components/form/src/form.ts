import { ExtractPropTypes, PropType } from "vue";
import { FormItemContent, FormItemRule } from "./form-item";

export const formProps = {
  model: {
    type: Object,
  },
  // :rules = "{
  //   username: [{ required: true, message: '请输入用户名', trigger: 'blur' }]
  // }"
  rules: {
    type: Object as PropType<Record<string, FormItemRule[]>>,
  },
} as const;

export type FormProps = Partial<ExtractPropTypes<typeof formProps>>;

// 向子组件传递
export interface FormContent extends FormProps {
  // 收集子组件
  addField: (field: FormItemContent) => void;
}
