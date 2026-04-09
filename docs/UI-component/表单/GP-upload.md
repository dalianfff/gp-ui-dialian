# Upload 上传

点击 / 拖拽 上传文件

## 基础用法

通过点击上传文件

<GP-upload @changeUpload="changeUpload" @deleteUpload="deleteUpload"></GP-upload>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-upload @changeUpload="changeUpload" @deleteUpload="deleteUpload"></GP-upload>
  </template>
  <script lang="ts" setup>
    // 第一个参数->当前上传文件，第二个参数->上传之后的文件列表
    // 上传更新文件
    const changeUpload = (file: any, fileList: any) => {
      console.log(file, fileList);
    };
    // 删除更新文件
    const deleteUpload = (file: any, fileList: any) => {
      console.log(file, fileList);
    };
  </script>
   ```
</details>

## 拖拽上传

通过点击/拖拽上传文件

<GP-upload :drop="true" @dropUpload="dropUpload" @deleteUpload="deleteUpload"></GP-upload>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-upload @changeUpload="changeUpload" @deleteUpload="deleteUpload"></GP-upload>
  </template>
  <script lang="ts" setup>
    // 第一个参数->当前上传文件，第二个参数->上传之后的文件列表
    // 拖拽文件
    const dropUpload = (files: any, fileList: any) => {
      console.log(files, fileList);
    };
    // 删除更新文件
    const deleteUpload = (file: any, fileList: any) => {
      console.log(file, fileList);
    };
  </script>
   ```
</details>

<script lang="ts" setup>
  const changeUpload = (file: any, fileList: any) => {
  console.log(file, fileList);
  };
  const deleteUpload = (file: any, fileList: any) => {
    console.log(file, fileList);
  };
  const dropUpload = (files: any, fileList: any) => {
    console.log(files, fileList);
  };
</script>
