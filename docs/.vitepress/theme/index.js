// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import GPButton from "../../../packages/components/Button/src/button.vue";
import GPIcon from "../../../packages/components/Icon/src/icon.vue";
import GPDialog from "../../../packages/components/dialog/src/dialog.vue";
import GPAlert from "../../../packages/components/alert/src/alert.vue";
import GPInput from "../../../packages/components/input/src/input.vue";
import GPCheckbox from "../../../packages/components/Checkbox/src/chexkbox.vue";
import GPSwitch from "../../../packages/components/switch/src/switch.vue";
import GPCollapse from "../../../packages/components/collapse/src/collapse.vue";
import GPUpload from "../../../packages/components/upload/src/upload.vue";
import { Form, FormItem } from "../../../packages/components/form";
import {
  Breadcrumb,
  BreadcrumbItem,
} from "../../../packages/components/breadcrumb";
import { Swiper, SwiperItem } from "../../../packages/components/swiper";
import GPProgress from "../../../packages/components/progress/src/progress.vue";
import { AccessibilitySharp } from "@vicons/ionicons5";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownMenuClick,
} from "../../../packages/components/dropdown";
import GPPagination from "../../../packages/components/pagination/src/pagination.vue";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app }) {
    app.component("GP-button", GPButton);
    app.component("GPIcon", GPIcon);
    app.component("GPDialog", GPDialog);
    app.component("GPAlert", GPAlert);
    app.component("GPInput", GPInput);
    app.component("GPCheckbox", GPCheckbox);
    app.component("GPSwitch", GPSwitch);
    app.component("GPCollapse", GPCollapse);
    app.component("GPUpload", GPUpload);
    app.component("AccessibilitySharp", AccessibilitySharp);
    app.component("GPForm", Form);
    app.component("GPFormItem", FormItem);
    app.component("GPBreadcrumb", Breadcrumb);
    app.component("GPBreadcrumbItem", BreadcrumbItem);
    app.component("GPSwiper", Swiper);
    app.component("GPSwiperItem", SwiperItem);
    app.component("GPProgress", GPProgress);
    app.component("GPDropdown", Dropdown);
    app.component("GPDropdownItem", DropdownItem);
    app.component("GPDropdownMenu", DropdownMenu);
    app.component("GPDropdownMenuClick", DropdownMenuClick);
    app.component("GPPagination", GPPagination);
  },
};
