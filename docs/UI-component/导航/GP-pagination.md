# Pagination 分页

当数据量过多时，使用分页分解数据。

## 基础用法

`total`表示总条目数，`pagesize`用于设置每页显示的页码数量，`pag`e默认起始页

<ClientOnly>
<GP-pagination @change-page="changePage" :pagesize="2" :total="6" :page="1"></GP-pagination>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-pagination 
      @change-page="changePage" 
      :pagesize="2" 
      :total="6" 
      :page="1"
    ></GP-pagination>
  </template>
  <script setup lang="ts">
    const changePage = (page: number) => {};
  </script>
   ```
</details>

## 设置最大页码按钮数

当总页数超过一定数量时，Pagination 会折叠多余的页码按钮。

<ClientOnly>
<GP-pagination @change-page="changePage" :pagesize="8" :total="80" :page="1"></GP-pagination>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-pagination 
      @change-page="changePage" 
      :pagesize="8" 
      :total="80" 
      :page="1"
    ></GP-pagination>
  </template>
  <script setup lang="ts">
    const changePage = (page: number) => {};
  </script>
   ```
</details>

<script setup lang="ts">
  const changePage = (page: number) => {};
</script>
