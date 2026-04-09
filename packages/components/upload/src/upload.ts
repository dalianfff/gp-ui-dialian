export const uploadProps = {
  drop: {
    type: Boolean,
    default: false,
  },
} as const;

export const uploadEmits = {
  // 上传更新文件，第一个参数为当前上传文件，第二个参数为上传之后的文件列表
  changeUpload: (file: any, fileList: any) => {},
  // 删除更新文件
  deleteUpload: (file: any, fileList: any) => {},
  // 拖拽文件
  dropUpload: (file: any, fileList: any) => {},
};
