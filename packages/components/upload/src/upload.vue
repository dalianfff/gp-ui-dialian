<template>
  <div :class="bem.b()">
    <!-- 拖拽上传 -->
    <div
      :class="bem.e('drop')"
      :style="
        isDrag ? { background: '#F2F9FF', border: ' 1px dashed #409eff' } : {}
      "
      v-if="props.drop"
      ref="drag"
    >
      <div :class="bem.e('drop-icon')"><GP-icon>📁</GP-icon></div>
      <div :class="bem.e('drop-word')">
        <span :class="bem.e('word1')">拖拽到此上传，或</span>
        <span :class="bem.e('word2')" @click="beginUpload">点击上传</span>
      </div>
    </div>
    <!-- 普通上传 -->
    <GP-button v-else type="primary" @click="beginUpload">点击上传</GP-button>
    <!-- 文件列表 -->
    <div :class="bem.e('file')" v-for="(v, i) in fileList" :key="i">
      <span>{{ v.name }}</span>
      <GP-button @click="deleteUpload(i)" type="danger">删除</GP-button>
    </div>
    <!-- 隐藏文件选择框 -->
    <input ref="inputRef" @change="submitUpload" type="file" multiple />
  </div>
</template>

<script lang="ts" setup>
import { createNamespace } from "../../../utils/create";
import GPButton from "../../Button";
import GPIcon from "../../Icon";
import "../../../theme-chalk/src/upload.scss";
import { uploadEmits, uploadProps } from "./upload";
import { onMounted, ref } from "vue";

defineOptions({
  name: "GP-upload",
});

const isDrag = ref(false);
const fileList = ref<any>([]);
const inputRef = ref<HTMLElement | null>(null);
const drag = ref<HTMLElement | null>(null);

const bem = createNamespace("upload");
const props = defineProps(uploadProps);
const emits = defineEmits(uploadEmits);

// 开始上传
const beginUpload = () => {
  inputRef.value?.click(); //模拟点击上传
};

// 上传成功
const submitUpload = (e: any) => {
  const files = e.target.files;
  console.log(files);
  for (let i = 0; i < files.length; i++) {
    const rawFile = files[i]; // 上传文件
    fileList.value.push({
      name: rawFile.name,
      file: rawFile,
    });
    emits("changeUpload", rawFile, fileList.value);
  }
};

// 删除文件
const deleteUpload = (i: any) => {
  let file = fileList.value[i];
  fileList.value.splice(i, 1);
  emits("deleteUpload", file, fileList.value);
};

// 拖入文件
const handleDrop = (e: any) => {
  e.preventDefault();
  isDrag.value = false;
  for (let i = 0; i < e.dataTransfer.files.length; i++) {
    fileList.value.push({
      name: e.dataTransfer.files[i].name,
      file: e.dataTransfer.files[i],
    });
  }
  emits("dropUpload", e.dataTransfer.files, fileList.value);
};

onMounted(() => {
  // 放下文件
  drag.value?.addEventListener("drop", handleDrop);
  // 离开目标区域
  drag.value?.addEventListener("dragleave", () => {
    isDrag.value = false;
  });
  // 在目标区域移动
  drag.value?.addEventListener("dragover", (e) => {
    e.preventDefault(); // 阻止默认行为
    isDrag.value = true;
  });
  //  第一次进入目标区域
  drag.value?.addEventListener("dragenter", (e) => {
    e.preventDefault();
    isDrag.value = true;
  });
});
</script>
