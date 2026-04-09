# Message 消息提示

常用的系统通知提醒。

## 基础用法

从顶部出现，3秒后消失

<GP-button round type="primary" @click="showMsg1">showMsg</GP-button>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-button round type="primary" @click="showMsg">showMsg</GP-button>
  </template>
  <script lang="ts" setup>
    import {GPMessage} from "GP-UI";
    import { ref } from "vue";

    const showMsg = () => {
      GPMessage.info({
        message:"this is message"
      })
    };

  </script>
   ```
</details>

## 各种样式

用来显示 [成功 警告 消息 错误] 的操作反馈

<GP-button round type="success" @click="showMsg2" style="margin: 0 12px 12px 0 ">success</GP-button>
<GP-button round type="warning" @click="showMsg3" style="margin: 0 12px 12px 0 ">warning</GP-button>
<GP-button round type="primary" @click="showMsg1" style="margin: 0 12px 12px 0 ">info</GP-button>
<GP-button round type="danger" @click="showMsg4" style="margin: 0 12px 12px 0 ">error</GP-button>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-button round type="success" @click="showMsg2">success</GP-button>
    <GP-button round type="warning" @click="showMsg3">warning</GP-button>
    <GP-button round type="primary" @click="showMsg1">info</GP-button>
    <GP-button round type="danger" @click="showMsg4">error</GP-button>
  </template>
  <script lang="ts" setup>
    import {GPMessage} from "gp-ui-dialian";
    import { ref } from "vue";

    const showMsg1 = () => {
      GPMessage.info({
        message:"this is info message"
      })
    };
    const showMsg2 = () => {
      GPMessage.success({
        message:"this is success message"
      })
    };
    const showMsg3 = () => {
      GPMessage.warning({
        message:"this is warning message"
      })
    };
    const showMsg4 = () => {
      GPMessage.error({
        message:"this is error message"
      })

  </script>
   ```
</details>

## 控制自动关闭时间

可以自由设置自动关闭时间

<GP-button round type="primary" @click="showMsg5">time</GP-button>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-button round type="primary" @click="showMsg">time</GP-button>
  </template>
  <script lang="ts" setup>
    import {GPMessage} from "GP-UI";
    import { ref } from "vue";

    const showMsg5 = () => {
      GPMessage.info({
        message:"this is time message",
        duration:1000
      })
    };

  </script>
   ```
</details>

## 可关闭的消息提示

可以添加关闭按钮

<GP-button round type="success" @click="showMsg22" style="margin: 0 12px 12px 0 ">success</GP-button>
<GP-button round type="warning" @click="showMsg33" style="margin: 0 12px 12px 0 ">warning</GP-button>
<GP-button round type="primary" @click="showMsg11" style="margin: 0 12px 12px 0 ">info</GP-button>
<GP-button round type="danger" @click="showMsg44" style="margin: 0 12px 12px 0 ">error</GP-button>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-button round type="success" @click="showMsg2">success</GP-button>
    <GP-button round type="warning" @click="showMsg3">warning</GP-button>
    <GP-button round type="primary" @click="showMsg1">info</GP-button>
    <GP-button round type="danger" @click="showMsg4">error</GP-button>
  </template>
  <script lang="ts" setup>
    import {GPMessage} from "GP-UI";
    import { ref } from "vue";

    const showMsg1 = () => {
    GPMessage.info({
        message:"this is info message"
      })
    };
    const showMsg2 = () => {
      GPMessage.success({
        message:"this is success message"
      })
    };
    const showMsg3 = () => {
      GPMessage.warning({
        message:"this is warning message"
      })
    };
    const showMsg4 = () => {
      GPMessage.error({
        message:"this is error message"
      })
    };

  </script>
   ```
</details>

<script lang="ts" setup>
  import {GPMessage} from "../../../packages/components/message/src/MessageT.ts";
  import { ref } from "vue";

  const showMsg1 = () => {
    GPMessage.info({
      message:"this is info message"
    })
  };
  const showMsg2 = () => {
    GPMessage.success({
      message:"this is success message"
    })
  };
  const showMsg3 = () => {
    GPMessage.warning({
      message:"this is warning message"
    })
  };
  const showMsg4 = () => {
    GPMessage.error({
      message:"this is error message"
    })
  };
  const showMsg5 = () => {
    GPMessage.info({
      message:"this is info message",
      duration:1000
    })
  };
  const showMsg11 = () => {
    GPMessage.info({
      message:"this is info message",
      closeable:true
    })
  };
  const showMsg22 = () => {
    GPMessage.success({
      message:"this is success message",
      closeable:true
    })
  };
  const showMsg33 = () => {
    GPMessage.warning({
      message:"this is warning message",
      closeable:true
    })
  };
  const showMsg44 = () => {
    GPMessage.error({
      message:"this is error message",
      closeable:true
    })
  };
</script>
