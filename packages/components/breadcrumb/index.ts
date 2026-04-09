import breadcrumb from "./src/breadcrumb.vue";
import breadcrumbItem from "./src/breadcrumb-item.vue";
import { withInstall } from "../../utils/withInstall";

export const Breadcrumb = withInstall(breadcrumb);
export const BreadcrumbItem = withInstall(breadcrumbItem);
