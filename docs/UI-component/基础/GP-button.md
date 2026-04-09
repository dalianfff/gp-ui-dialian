# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type`、`round` 和 `circle` 来定义按钮的样式。

<!-- ✅ 直接写组件，会渲染成真实按钮 -->

<GP-button>默认按钮</GP-button>
<GP-button type="primary" style="margin: 0 12px 12px 0 ">主要按钮</GP-button>
<GP-button type="success" style="margin: 0 12px 12px 0 ">成功按钮</GP-button>
<GP-button type="info" style="margin: 0 12px 12px 0 ">信息按钮</GP-button>
<GP-button type="warning" style="margin: 0 12px 12px 0 ">警告按钮</GP-button>
<GP-button type="danger" style="margin: 0 12px 12px 0 ">危险按钮</GP-button>

<br>

<GP-button>圆角按钮</GP-button>
<GP-button type="primary" round style="margin: 0 12px 12px 0 ">主要按钮</GP-button>
<GP-button type="success" round style="margin: 0 12px 12px 0 ">成功按钮</GP-button>
<GP-button type="info" round style="margin: 0 12px 12px 0 ">信息按钮</GP-button>
<GP-button type="warning" round style="margin: 0 12px 12px 0 ">警告按钮</GP-button>
<GP-button type="danger" round style="margin: 0 12px 12px 0 ">危险按钮</GP-button>

<br>

<GP-button>圆形按钮</GP-button>
<GP-button type="primary" circle style="margin: 0 12px 12px 0 ">主要</GP-button>
<GP-button type="success" circle style="margin: 0 12px 12px 0 ">成功</GP-button>
<GP-button type="info" circle style="margin: 0 12px 12px 0 ">信息</GP-button>
<GP-button type="warning" circle style="margin: 0 12px 12px 0 ">警告</GP-button>
<GP-button type="danger" circle style="margin: 0 12px 12px 0 ">危险</GP-button>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <div>
      <!-- 默认按钮 -->
      <GP-button>默认按钮</GP-button>
      <GP-button type="primary">主要按钮</GP-button>
      <GP-button type="success">成功按钮</GP-button>
      <GP-button type="info">信息按钮</GP-button>
      <GP-button type="warning">警告按钮</GP-button>
      <GP-button type="danger">危险按钮</GP-button>

      <br>
      <br>

      <!-- 圆角按钮 -->
      <GP-button round>圆角按钮</GP-button>
      <GP-button type="primary" round>主要按钮</GP-button>
      <GP-button type="success" round>成功按钮</GP-button>
      <GP-button type="info" round>信息按钮</GP-button>
      <GP-button type="danger" round>危险按钮</GP-button>

      <br>
      <br>

      <!-- 朴素按钮 -->
      <GP-button plain>朴素按钮</GP-button>
      <GP-button type="primary" circle>主要按钮</GP-button>
      <GP-button type="success" circle>成功按钮</GP-button>
      <GP-button type="info" circle>信息按钮</GP-button>
      <GP-button type="warning" circle>警告按钮</GP-button>
      <GP-button type="danger" circle>危险按钮</GP-button>

    </div>

  </template>
   ```
</details>

## 禁用状态

<GP-button disabled>禁用按钮</GP-button>
<GP-button disabled type="primary" style="margin: 0 12px 12px 0 ">主要按钮</GP-button>
<GP-button disabled type="success" style="margin: 0 12px 12px 0 ">成功按钮</GP-button>
<GP-button disabled type="info" style="margin: 0 12px 12px 0 ">信息按钮</GP-button>
<GP-button disabled type="warning" style="margin: 0 12px 12px 0 ">警告按钮</GP-button>
<GP-button disabled type="danger" style="margin: 0 12px 12px 0 ">危险按钮</GP-button>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <div>
      <GP-button disabled>禁用按钮</GP-button>
      <GP-button disabled type="primary">主要按钮</GP-button>
      <GP-button disabled type="success">成功按钮</GP-button>
      <GP-button disabled type="info">信息按钮</GP-button>
      <GP-button disabled type="warning">警告按钮</GP-button>
      <GP-button disabled type="danger">危险按钮</GP-button>
    </div>
  </template>
   ```
</details>

## 加入图标

<GP-button icon="AccessibilitySharp" type="primary" style="margin: 0 12px 12px 0 ">主要按钮</GP-button>
<GP-button icon="AccessibilitySharp" type="success" style="margin: 0 12px 12px 0 ">成功按钮</GP-button>
<GP-button icon="AccessibilitySharp" type="info" style="margin: 0 12px 12px 0 ">信息按钮</GP-button>
<GP-button icon="AccessibilitySharp" type="warning" style="margin: 0 12px 12px 0 ">警告按钮</GP-button>
<GP-button icon="AccessibilitySharp" type="danger" style="margin: 0 12px 12px 0 ">危险按钮</GP-button>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <div>
      <GP-button icon="AccessibilitySharp" type="primary">主要按钮</GP-button>
      <GP-button icon="AccessibilitySharp" type="success">成功按钮</GP-button>
      <GP-button icon="AccessibilitySharp" type="info">信息按钮</GP-button>
      <GP-button icon="AccessibilitySharp" type="warning">警告按钮</GP-button>
      <GP-button icon="AccessibilitySharp" type="danger">危险按钮</GP-button>
    </div>
  </template>
   ```
</details>
