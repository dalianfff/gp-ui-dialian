# Icon 图标

常用的操作图标。

## 基础用法

<!-- ✅ 直接写组件，会渲染成真实按钮 -->

<GP-icon><AccessibilitySharp></AccessibilitySharp></GP-icon>
<GP-icon color="green"><AccessibilitySharp></AccessibilitySharp></GP-icon>
<GP-icon color="red" size="30"><AccessibilitySharp></AccessibilitySharp></GP-icon>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <div>
      <GP-icon><AccessibilitySharp></AccessibilitySharp></GP-icon>
      <GP-icon color="green"><AccessibilitySharp></AccessibilitySharp></GP-icon>
      <GP-icon color="red" size="30"><AccessibilitySharp></AccessibilitySharp></GP-icon>
      <!-- AccessibilitySharp 是引入的icon图库 -->
    </div>
  </template>
   ```
</details>
