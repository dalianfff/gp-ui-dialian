/// <reference types="vite/client" />

// 声明 Vue 单文件组件模块，让 TypeScript 识别 .vue 文件
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // 泛型参数：Props 类型、Emits 类型、组件实例类型
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// 可选：补充 Vite 环境变量的类型声明（如果需要）
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // 可以添加更多自定义环境变量类型
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
