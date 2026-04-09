// @change-page回调
// pagesize 每页显示的数量
// total 总数
// page 默认起始页

export const paginationProps = {
  pagesize: {
    type: Number,
    default: 8,
  },
  total: {
    type: Number,
    default: 80,
  },
  page: {
    type: Number,
    default: 1,
  },
} as const;

export const paginationEmits = {
  changePage: (value: Number) => {},
};
