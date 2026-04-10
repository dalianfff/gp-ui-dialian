# Switch 开关

开关选择器, 需要表示开关状态/两种状态之间的切换。

## 基础用法

<ClientOnly>
<GP-switch v-model="Switch"></GP-switch>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-switch v-model="Switch"></GP-switch>
  </template>
  <script lang="ts" setup>
    import { ref } from "vue";
    const Switch = ref(false);
  </script>
   ```
</details>

## 禁用状态

<ClientOnly>
<GP-switch disabled v-model="Switchd"></GP-switch>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-switch disabled v-model="Switch"></GP-switch>
  </template>
  <script lang="ts" setup>
    import { ref } from "vue";
    const Switch = ref(false);
  </script>
   ```
</details>

## 事件回调

<ClientOnly>
<GP-switch v-model="Switch1" @change="handleChange"></GP-switch>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-switch v-model="Switch" @change="handleChange"></GP-switch>
  </template>
  <script lang="ts" setup>
    import { ref } from "vue";
    import {GPMessage} from "GP-UI";

    const Switch = ref(false);
    const handleChange = ()=>{
      GPMessage.info({
        message:"switch change"
      })
    }

  </script>
   ```
</details>

## 修改描述

通过 onswitch-text 与 unswitch-text 属性, 设置不同状态的描述文字。

<ClientOnly>
<GP-switch v-model="Switch2" onswitch-text="开" unswitch-text="关"></GP-switch>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-switch v-model="Switch" onswitch-text="开" unswitch-text="关"></GP-switch>
  </template>
  <script lang="ts" setup>
    import { ref } from "vue";
    const Switch = ref(false);
  </script>
   ```
</details>

## 尺寸

通过size属性，设置尺寸。(`lg`,`md`,`sm`,`xs`)

<ClientOnly>
<GP-switch size="lg" v-model="Switch3"></GP-switch>
<GP-switch size="md" v-model="Switch3"></GP-switch>
<GP-switch size="sm" v-model="Switch3"></GP-switch>
<GP-switch size="xs" v-model="Switch3"></GP-switch>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-switch size="lg" v-model="Switch"></GP-switch>
    <GP-switch size="md" v-model="Switch"></GP-switch>
    <GP-switch size="sm" v-model="Switch"></GP-switch>
    <GP-switch size="xs" v-model="Switch"></GP-switch>
  </template>
  <script lang="ts" setup>
    import { ref } from "vue";
    const Switch = ref(false);
  </script>
   ```
</details>

<script lang="ts" setup>
  import { ref } from "vue";
  import {GPMessage} from "../../../packages/components/message/src/MessageT.ts";

  const Switch = ref(false);
  const Switchd = ref(false);
  const Switch1 = ref(false);
  const Switch2 = ref(true);
  const Switch3 = ref(true);

  const handleChange = ()=>{
    GPMessage.info({
      message:"switch change"
    })
  }
</script>
