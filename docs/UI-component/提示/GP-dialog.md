# Dialog 对话框

常用的对话框。

## 基础用法

<GP-button type="primary" @click="changeView">dialog</Gp-button>
<GP-dialog :visible="visible" @confirm="handleConfirmButton" @cancel="handleCancelButton"> </GP-dialog>

<script lang="ts" setup>
  import { ref } from 'vue';
  let visible = ref(false);
  const changeView = () => {
    visible.value = !visible.value;
  };
  const handleCancelButton = () => {
    visible.value = !visible.value;
  };
  const handleConfirmButton = () => {
    visible.value = !visible.value;
  };

  let visible1 = ref(false);
  const changeView1 = () => {
    visible1.value = !visible1.value;
  };
  const handleCancelButton1 = () => {
    visible1.value = !visible1.value;
  };
  const handleConfirmButton1 = () => {
    visible1.value = !visible1.value;
  };
</script>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-button type="primary" @click="changeView">dialog</Gp-button>
    <GP-dialog 
      :visible="visible" 
      @confirm="handleConfirmButton" 
      @cancel="handleCancelButton"
    > </GP-dialog>
  </template>
  <script lang="ts" setup>
    import { ref } from 'vue';
    let visible = ref(false);
    const changeView = () => {
      visible.value = !visible.value;
    };
    const handleCancelButton = () => {
      visible.value = !visible.value;
    };
    const handleConfirmButton = () => {
      visible.value = !visible.value;
    };
  </script>
   ```
</details>

## 自定义内容

通过 `title` `width` 和 `top` 来自定义内容。

<GP-button type="primary" @click="changeView1">自定义</GP-button>
<GP-dialog title="自定义标题" width="60%" top="200px" :visible="visible1" @confirm="handleConfirmButton1" @cancel="handleCancelButton1"><li>1</li><li>2</li><li>3</li></GP-dialog>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-button type="primary" @click="changeView1">自定义</GP-button>
    <GP-dialog 
      title="自定义标题" 
      width="60%" 
      top="200px" 
      :visible="visible" 
      @confirm="handleConfirmButton" 
      @cancel="handleCancelButton"
    >
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </GP-dialog>
  </template>
  <script lang="ts" setup>
    import { ref } from 'vue';
    let visible = ref(false);
    const changeView = () => {
      visible.value = !visible.value;
    };
    const handleCancelButton = () => {
      visible.value = !visible.value;
    };
    const handleConfirmButton = () => {
      visible.value = !visible.value;
    };
  </script>
   ```
</details>
