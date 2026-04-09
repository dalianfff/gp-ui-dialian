import form from "./src/form.vue";
import formitem from "./src/form-item.vue";
import { withInstall } from "../../utils/withInstall";

export const Form = withInstall(form);
export const FormItem = withInstall(formitem);
export type FormInstance = InstanceType<typeof Form>;
