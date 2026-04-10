# Input 输入框

通过鼠标或键盘输入字符。

## 基础用法

<ClientOnly>
<GP-input v-model="inputVal" placeholder="请输入内容"></GP-input>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-input v-model="inputVal" placeholder="请输入内容"></GP-input>
  </template>
  <script lang="ts" setup>
    import { ref } from "vue";

    const inputVal = ref("");

  </script>
   ```
</details>

## 禁用状态

通过 `disabled` 来指定是否禁用input组件

<ClientOnly>
<GP-input v-model="inputVal" disabled></GP-input>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-input v-model="inputVal" disabled></GP-input>
  </template>
  <script lang="ts" setup>
    import { ref } from "vue";

    const inputVal = ref("");

  </script>
   ```
</details>

## 一键清空

用 `clearable` 属性，可以得到一个一键清空的输入框。

<ClientOnly>
<GP-input v-model="inputVal" placeholder="请输入内容" clearable></GP-input>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-input v-model="inputVal" placeholder="请输入内容" clearable></GP-input>
  </template>
  <script lang="ts" setup>
    import { ref } from "vue";

    const inputVal = ref("");

  </script>
   ```
</details>

## 密码框

当 `type = "password` 时，输入框的类型为密码框。
用 `show-password`属性时，会得到一个可以控制显示隐藏的密码框。

<ClientOnly>
<GP-input v-model="inputVal" type="password" placeholder="请输入内容" showPassword></GP-input>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-input 
      v-model="inputVal" 
      type="password" 
      placeholder="请输入内容" 
      showPassword
    ></GP-input>
  </template>
  <script lang="ts" setup>
    import { ref } from "vue";

    const inputVal = ref("");

  </script>
   ```
</details>

<script lang="ts" setup>
  import { ref } from "vue";
  const inputVal = ref("");
</script>
