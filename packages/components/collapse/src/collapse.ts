import { PropType } from "vue";

export type postType = {
  title: string;
  body: string;
  id: number | string;
};

export const collapseProps = {
  types: {
    type: Boolean, //true 是能展开多个，false展开一个
    default: true,
  },
  posts: {
    type: Array as PropType<postType[]>,
    default: [],
  },
};
