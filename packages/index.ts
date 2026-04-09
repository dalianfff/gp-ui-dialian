// 1. 导入所有组件（从 components 目录）
import Alert from "./components/alert/src/alert.vue";
import Breadcrumb from "./components/breadcrumb/src/breadcrumb.vue";
import BreadcrumbItem from "./components/breadcrumb/src/breadcrumb-item.vue";
import Button from "./components/Button/src/button.vue";
import Checkbox from "./components/Checkbox/src/chexkbox.vue";
import Collapse from "./components/collapse/src/collapse.vue";
import Dialog from "./components/dialog/src/dialog.vue";
import Dropdown from "./components/dropdown/src/dropdown.vue";
import DropdownItem from "./components/dropdown/src/dropdownItem.vue";
import DropdownMenu from "./components/dropdown/src/dropdownMenu.vue";
import DropdownMenuClick from "./components/dropdown/src/dropdownMenuClick.vue";
import Form from "./components/form/src/form.vue";
import FormItem from "./components/form/src/form-item.vue";
import Icon from "./components/Icon/src/icon.vue";
import Input from "./components/input/src/input.vue";
import Pagination from "./components/pagination/src/pagination.vue";
import Progress from "./components/progress/src/progress.vue";
import Swiper from "./components/swiper/src/swiper.vue";
import SwiperItem from "./components/swiper/src/swiper-item.vue";
import Switch from "./components/switch/src/switch.vue";
import Upload from "./components/upload/src/upload.vue";

// 2. 单独导入 Message（函数式组件）
import { GPMessage } from "./components/message/src/MessageT.js";

// 4. 普通组件列表（用于全局注册）
const components = [
  Alert,
  Breadcrumb,
  Button,
  Checkbox,
  Collapse,
  Dialog,
  Dropdown,
  Form,
  Icon,
  Input,
  Pagination,
  Progress,
  Swiper,
  Switch,
  Upload,
  BreadcrumbItem,
  DropdownItem,
  DropdownMenu,
  DropdownMenuClick,
  FormItem,
  SwiperItem,
];

// 5. 安装函数（Vue 全局注册 + 挂载 Message）
import type { App } from "vue";
const install = (app: App) => {
  // 注册所有普通组件
  components.forEach((component) => {
    // ✅ 修复：加 // @ts-ignore 忽略 name 类型报错
    // @ts-ignore
    if (component.name) {
      // @ts-ignore
      app.component(component.name, component);
    }
  });
  // 全局挂载 Message
  app.config.globalProperties.$message = GPMessage;
};

// 6. 导出所有内容（支持按需导入）
export {
  Alert,
  Breadcrumb,
  Button,
  Checkbox,
  Collapse,
  Dialog,
  Dropdown,
  Form,
  Icon,
  Input,
  Pagination,
  Progress,
  Swiper,
  Switch,
  Upload,
  GPMessage,
};

// 7. 默认导出（用于 app.use() 全局注册）
export default {
  install,
  GPMessage,
  // ✅ 修复：加 // @ts-ignore 解决 map(c => c.name) 报错
  // @ts-ignore
  ...Object.fromEntries(components.map((c) => [c.name, c])),
};
