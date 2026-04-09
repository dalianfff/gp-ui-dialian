import { defineConfig } from "vitepress";
import { set_sidebar } from "./utils/auto_sidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GreenPaw UI Component",
  description: "A VitePress Site",
  vite: {},
  themeConfig: {
    logo: "/蓝猫.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "指南", link: "/quickly-start" },
      { text: "组件", link: "/UI-component" },
    ],

    sidebar: {
      "/quickly-start": set_sidebar("quickly-start"),
      "/UI-component": set_sidebar("UI-component"),
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    //底部配置
    footer: {
      copyright: "Copyright@ 2026 wfff666",
    },
    //搜索框
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  },
});
