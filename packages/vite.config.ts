import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "path";

const assetFileNames = (assetInfo: any) => {
  if (assetInfo.name === "style.css") return "style.css";
  return assetInfo.name;
};

export default defineConfig({
  plugins: [
    vue(),
    dts({
      outDir: "dist",
      tsconfigPath: "./tsconfig.json",
    }),
  ],

  build: {
    outDir: "dist",
    emptyOutDir: true,

    lib: {
      entry: resolve(__dirname, "index.ts"),
      name: "GPUI",
      fileName: (format: string) => `gp-ui.${format}.js`,
    },

    rollupOptions: {
      external: ["vue"],

      output: {
        globals: {
          vue: "Vue",
        },
        assetFileNames,
        exports: "named",
      },
    },
  },

  resolve: {
    alias: {
      "@": resolve(__dirname, "./"),
    },
  },
});
