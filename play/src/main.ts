import { createApp } from "vue";
import App from "./App.vue";
import Button from "../../packages/components/Button";
import Icon from "../../packages/components/Icon";
import Dialog from "../../packages/components/dialog";
import Alert from "../../packages/components/alert";
import Input from "../../packages/components/input";
import Checkbox from "../../packages/components/Checkbox";
import Switch from "../../packages/components/switch";
import Collapse from "../../packages/components/collapse";
import Upload from "../../packages/components/upload";
import { Form, FormItem } from "../../packages/components/form";
import {
  Breadcrumb,
  BreadcrumbItem,
} from "../../packages/components/breadcrumb";
import { Swiper, SwiperItem } from "../../packages/components/swiper";
import Progress from "../../packages/components/progress";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownMenuClick,
} from "../../packages/components/dropdown";
import Pagination from "../../packages/components/pagination";
import "../../packages/theme-chalk/src/index.scss";

const app = createApp(App);

const plugins = [
  Button,
  Icon,
  Dialog,
  Alert,
  Input,
  Checkbox,
  Switch,
  Collapse,
  Upload,
  Form,
  FormItem,
  Breadcrumb,
  BreadcrumbItem,
  Swiper,
  SwiperItem,
  Progress,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownMenuClick,
  Pagination,
];

plugins.forEach((p) => app.use(p));

app.mount("#app");
