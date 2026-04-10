# Progress 进度条

用于展示操作进度，告知用户当前状态和预期。

## 基础用法

通过`color`和`percent`控制颜色和百分比

<ClientOnly>
<GP-progress color="#b9ecac" :percent="30"></GP-progress>
<GP-progress color="#94f37c" :percent="50"></GP-progress>
<GP-progress color="#caed9c" :percent="100"></GP-progress>
<GP-progress color="#e2f0a2" :percent="70" status="warning"></GP-progress>
<GP-progress color="#d9e17c" :percent="20" status="success"></GP-progress>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-progress color="#b9ecac" :percent="30"></GP-progress>
    <GP-progress color="#94f37c" :percent="50"></GP-progress>
    <GP-progress color="#caed9c" :percent="100"></GP-progress>
    <GP-progress color="#e2f0a2" :percent="70"></GP-progress>
    <GP-progress color="#d9e17c" :percent="20"></GP-progress>
  </template>
   ```
</details>

## 行内显示百分比

百分比不占用额外控件，适用于文件上传等场景。

<ClientOnly>
<GP-progress color="#b9ecac" :percent="30" type="in"></GP-progress>
<GP-progress color="#94f37c" :percent="50" type="in"></GP-progress>
<GP-progress color="#caed9c" :percent="100" type="in"></GP-progress>
<GP-progress color="#e2f0a2" :percent="70" type="in"></GP-progress>
<GP-progress color="#d9e17c" :percent="20" type="in"></GP-progress>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-progress color="#b9ecac" :percent="30" type="in"></GP-progress>
    <GP-progress color="#94f37c" :percent="50" type="in"></GP-progress>
    <GP-progress color="#caed9c" :percent="100" type="in"></GP-progress>
    <GP-progress color="#e2f0a2" :percent="70" type="in"></GP-progress>
    <GP-progress color="#d9e17c" :percent="20" type="in"></GP-progress>
  </template>
   ```
</details>

## 环形进度条

通过`select`来控制显示是否是环形进度条

<ClientOnly>
<GP-progress select="circle" color="#b9ecac" :percent="30" :style="{margin: '0 40px'}"></GP-progress>
<GP-progress select="circle" color="#94f37c" :percent="70" :style="{margin: '0 40px'}"></GP-progress>
<GP-progress select="circle" color="#d9e17c" :percent="50" status="success" :style="{margin: '0 40px'}"></GP-progress>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-progress select="circle" color="#b9ecac" :percent="30"></GP-progress>
    <GP-progress select="circle" color="#94f37c" :percent="70"></GP-progress>
    <GP-progress select="circle" color="#d9e17c" :percent="50" status="success"></GP-progress>
  </template>
   ```
</details>
