# Breadcrumb 面包屑

显示当前页面的路径，可以快速返回之前页面

## 基础用法

在 GP-breadcrumb 中使用 GP-breadcrumb-item 标签表示从首页开始的每一级。

<GP-breadcrumb>
  <GP-breadcrumb-item :to="{ path: '/' }">home</GP-breadcrumb-item>
  <GP-breadcrumb-item>home 内容</GP-breadcrumb-item>
  <GP-breadcrumb-item to="/">list</GP-breadcrumb-item>
  <GP-breadcrumb-item>list 内容</GP-breadcrumb-item>
</GP-breadcrumb>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-breadcrumb>
      <GP-breadcrumb-item :to="{ path: '/' }">home</GP-breadcrumb-item>
      <GP-breadcrumb-item>home 内容</GP-breadcrumb-item>
      <GP-breadcrumb-item to="/">list</GP-breadcrumb-item>
      <GP-breadcrumb-item>list 内容</GP-breadcrumb-item>
    </GP-breadcrumb>
  </template>
   ```
</details>

## 分隔符样式

通过设置GP-breadcrumb中参数`separator`来设置分隔符的样式

<GP-breadcrumb separator="🐱">
  <GP-breadcrumb-item :to="{ path: '/' }">home</GP-breadcrumb-item>
  <GP-breadcrumb-item>home 内容</GP-breadcrumb-item>
  <GP-breadcrumb-item to="/">list</GP-breadcrumb-item>
  <GP-breadcrumb-item>list 内容</GP-breadcrumb-item>
</GP-breadcrumb>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-breadcrumb separator="🐱">
      <GP-breadcrumb-item :to="{ path: '/' }">home</GP-breadcrumb-item>
      <GP-breadcrumb-item>home 内容</GP-breadcrumb-item>
      <GP-breadcrumb-item to="/">list</GP-breadcrumb-item>
      <GP-breadcrumb-item>list 内容</GP-breadcrumb-item>
    </GP-breadcrumb>
  </template>
   ```
</details>
