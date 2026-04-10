# Collapse 折叠面板

通过折叠面板收纳内容区域

## 基础用法

可以展开多个面板

<ClientOnly>
<GP-collapse :posts="list"></GP-collapse>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-collapse :posts="list"></GP-collapse>
  </template>
  <script lang="ts" setup>
    import {ref} from 'vue'
    const list = ref([
    {
      title: "标题1",
      body: "贴合现实场景：遵循现实生活的流程与逻辑，符合大众的语言习惯和使用场景，提升用户的熟悉感和接受度",
      id: 1,
    },
    {
      title: "标题2",
      body: "操作反馈明确：通过样式更新、交互提示等方式，让用户清晰感知到自己的操作结果，避免操作迷茫",
      id: 2,
    },
    {
      title: "标题3",
      body: "简化操作流程：保持操作过程简洁直观，避免冗余步骤；意图明确清晰，让用户能快速理解并完成操作",
      id: 3,
    },
    {
      title: "标题4",
      body: "尊重用户决策：可提供操作建议，但不替用户做出决定；结果可控，确保用户能掌握操作带来的所有后果",
      id: 4,
    },
  ]);
  </script>
   ```
</details>

## 手风琴效果

每次只能展开一个面板

<ClientOnly>
<GP-collapse :posts="list" :types="false"></GP-collapse>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-collapse :posts="list"></GP-collapse>
  </template>
  <script lang="ts" setup>
    import {ref} from 'vue'
    const list = ref([
    {
      title: "标题1",
      body: "贴合现实场景：遵循现实生活的流程与逻辑，符合大众的语言习惯和使用场景，提升用户的熟悉感和接受度",
      id: 1,
    },
    {
      title: "标题2",
      body: "操作反馈明确：通过样式更新、交互提示等方式，让用户清晰感知到自己的操作结果，避免操作迷茫",
      id: 2,
    },
    {
      title: "标题3",
      body: "简化操作流程：保持操作过程简洁直观，避免冗余步骤；意图明确清晰，让用户能快速理解并完成操作",
      id: 3,
    },
    {
      title: "标题4",
      body: "尊重用户决策：可提供操作建议，但不替用户做出决定；结果可控，确保用户能掌握操作带来的所有后果",
      id: 4,
    },
  ]);
  </script>
   ```
</details>

<script lang="ts" setup>
  import {ref} from 'vue'
  const list = ref([
  {
    title: "标题1",
    body: "贴合现实场景：遵循现实生活的流程与逻辑，符合大众的语言习惯和使用场景，提升用户的熟悉感和接受度",
    id: 1,
  },
  {
    title: "标题2",
    body: "操作反馈明确：通过样式更新、交互提示等方式，让用户清晰感知到自己的操作结果，避免操作迷茫",
    id: 2,
  },
  {
    title: "标题3",
    body: "简化操作流程：保持操作过程简洁直观，避免冗余步骤；意图明确清晰，让用户能快速理解并完成操作",
    id: 3,
  },
  {
    title: "标题4",
    body: "尊重用户决策：可提供操作建议，但不替用户做出决定；结果可控，确保用户能掌握操作带来的所有后果",
    id: 4,
  },
]);
</script>
