import dropdown from "./src/dropdown.vue";
import dropdownItem from "./src/dropdownItem.vue";
import dropdownMenu from "./src/dropdownMenu.vue";
import dropdownMenuClick from "./src/dropdownMenuClick.vue";
import { withInstall } from "../../utils/withInstall";

export const Dropdown = withInstall(dropdown);
export const DropdownItem = withInstall(dropdownItem);
export const DropdownMenu = withInstall(dropdownMenu);
export const DropdownMenuClick = withInstall(dropdownMenuClick);
