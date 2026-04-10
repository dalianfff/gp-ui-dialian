# Checkbox 多选框

在一组备选项中进行多选。

## 基础用法

<ClientOnly>
<GP-checkbox v-model1="checkbox1">复选框</GP-checkbox>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-checkbox v-model1="checkbox">复选框</GP-checkbox>
  </template>
  <script lang="ts" setup>
    import { ref } from 'vue';

    const checked1 = ref(true);

  </script>
   ```
</details>

## 禁用状态

多选框不可用状态
<ClientOnly>
<GP-checkbox disabled>Disabled</GP-checkbox>
<GP-checkbox v-model1="checkbox1">Not Disabled</GP-checkbox>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-checkbox disabled>Disabled</GP-checkbox>
    <GP-checkbox v-model1="checkbox1">Not Disabled</GP-checkbox>
  </template>
  <script lang="ts" setup>
    import { ref } from 'vue';

    const checked1 = ref(true);

  </script>
   ```
</details>

## 多选框组

适用于多个勾选框绑定到同一个数组的情景。

<ClientOnly>
<GP-checkbox v-for="(item, index) in showList" :key="index" :label="item"></GP-checkbox>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-checkbox 
      v-for="(item, index) in showList" 
      :key="index" 
      :label="item"
    ></GP-checkbox>
  </template>
  <script lang="ts" setup>
    let showList = ref(['OptionA', 'OptionB', 'OptionC', 'OptionD']);
  </script>
   ```
</details>

## 事件回调

<ClientOnly>
<GP-checkbox v-model1="checkbox1" @change="handleChange">事件回调</GP-checkbox>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-checkbox v-model1="checkbox1" @change="handleChange">
      事件回调
    <GP-checkbox>
  </template>
  <script lang="ts" setup>
    import { ref } from 'vue';
    import {GPMessage} from "GP-UI"
    
    const checked1 = ref(true);
    const handleChange = ()=>{
      GPMessage.info({
        message:"checked change"
      })
    }
  </script>
   ```
</details>

<script setup lang="ts">
  import { ref } from 'vue';
  import {GPMessage} from "../../../packages/components/message/src/MessageT.ts";

  const checked1 = ref(true);
  const checked2 = ref(false);
  let showList = ref(['OptionA', 'OptionB', 'OptionC', 'OptionD']);
  const handleChange = ()=>{
    GPMessage.info({
      message:"checked change"
    })
  }
</script>
