# Alert 提示

用于页面中展示重要信息

## 基础用法

Alert 组件不属于浮层元素，不会自动消失或关闭。

Alert 组件提供四种类型，分别是 [`error` `success` `info` `warning`]

<ClientOnly>
<GP-alert type="info" title="info"></GP-alert>
<GP-alert type="error" title="error"></GP-alert>
<GP-alert type="success" title="success"></GP-alert>
<GP-alert type="warning" title="warning"></GP-alert>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-alert type="info" title="info"></GP-alert>
    <GP-alert type="error" title="error"></GP-alert>
    <GP-alert type="success" title="success"></GP-alert>
    <GP-alert type="warning" title="warning"></GP-alert>
  </template>
   ```
</details>

## 自定义关闭按钮

你可以设置Alert状态是否为可关闭状态

<ClientOnly>
<GP-alert type="info" title="info" :closeable="true"></GP-alert>
<GP-alert type="error" title="error" :closeable="true"></GP-alert>
<GP-alert type="success" title="success" :closeable="true"></GP-alert>
<GP-alert type="warning" title="warning" :closeable="true"></GP-alert>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-alert type="info" title="info" :closeable="true"></GP-alert>
    <GP-alert type="error" title="error" :closeable="true"></GP-alert>
    <GP-alert type="success" title="success" :closeable="true"></GP-alert>
    <GP-alert type="warning" title="warning" :closeable="true"></GP-alert>
  </template>
   ```
</details>

## 使用图标

你可以通过为 Alert 组件添加图标来提高可读性

<ClientOnly>
<GP-alert type="info" title="info" :showIcon="true"></GP-alert>
<GP-alert type="error" title="error" :showIcon="true"></GP-alert>
<GP-alert type="success" title="success" :showIcon="true"></GP-alert>
<GP-alert type="warning" title="warning" :showIcon="true"></GP-alert>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-alert type="info" title="info" :showIcon="true"></GP-alert>
    <GP-alert type="error" title="error" :showIcon="true"></GP-alert>
    <GP-alert type="success" title="success" :showIcon="true"></GP-alert>
    <GP-alert type="warning" title="warning" :showIcon="true"></GP-alert>
  </template>
   ```
</details>

## 文字描述

为 Alert 组件添加一个更加详细的描述来使用户了解更多信息。

<ClientOnly>
<GP-alert type="info" title="info" :showIcon="true" content="添加一个更加详细的描述"></GP-alert>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-alert type="info" title="info" :showIcon="true" content="添加一个更加详细的描述"></GP-alert>
  </template>
   ```
</details>
