# Swiper 轮播图

在有限空间内，循环播放同一类型的图片、文字等内容

## 基础用法

<ClientOnly>
<GP-swiper v-model="swiper" :width="600">
  <GP-swiper-item>
    <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #c1e1b9;">一</div>
  </GP-swiper-item>
  <GP-swiper-item>
    <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #abf185;">二</div>
  </GP-swiper-item>
  <GP-swiper-item>
    <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #cdfb9f;">三</div>
  </GP-swiper-item>
  <GP-swiper-item>
    <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #d1fc6b;">四</div>
  </GP-swiper-item>
</GP-swiper>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-swiper v-model="swiper" :width="600">
      <GP-swiper-item>
        <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #c1e1b9;">一</div>
      </GP-swiper-item>
      <GP-swiper-item>
        <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #abf185;">二</div>
      </GP-swiper-item>
      <GP-swiper-item>
        <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #cdfb9f;">三</div>
      </GP-swiper-item>
      <GP-swiper-item>
        <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #d1fc6b;">四</div>
      </GP-swiper-item>
    </GP-swiper>
  </template>
  <script lang="ts" setup>
    import { ref } from 'vue'
    const swiper = ref(0)
  </script>
   ```
</details>

## 自动播放

通过`autoplay`控制是否自动播放，`autoplayTime`控制自动播放的时间

<ClientOnly>
<GP-swiper v-model="swiper1" :width="600" autoplay :autoplayTime="3000">
  <GP-swiper-item>
    <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #c1e1b9;">一</div>
  </GP-swiper-item>
  <GP-swiper-item>
    <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #abf185;">二</div>
  </GP-swiper-item>
  <GP-swiper-item>
    <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #cdfb9f;">三</div>
  </GP-swiper-item>
  <GP-swiper-item>
    <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #d1fc6b;">四</div>
  </GP-swiper-item>
</GP-swiper>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-swiper v-model="swiper" :width="600" autoplay :autoplayTime="3000">
      <GP-swiper-item>
        <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #c1e1b9;">一</div>
      </GP-swiper-item>
      <GP-swiper-item>
        <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #abf185;">二</div>
      </GP-swiper-item>
      <GP-swiper-item>
        <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #cdfb9f;">三</div>
      </GP-swiper-item>
      <GP-swiper-item>
        <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #d1fc6b;">四</div>
      </GP-swiper-item>
    </GP-swiper>
  </template>
  <script lang="ts" setup>
    import { ref } from 'vue'
    const swiper = ref(0)
  </script>
   ```
</details>

## 不同方向的切换

通过 anim 属性来控制切换的放向，支持 default左右切换(默认)、updown上线切换

<ClientOnly>
<div style="display:flex;flex-wrap:wrap; margin:20px">
  <GP-swiper v-model="swiper2" :width="300">
    <GP-swiper-item>
      <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #b3ec9c;">一</div>
    </GP-swiper-item>
    <GP-swiper-item>
      <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #abf185;">二</div>
    </GP-swiper-item>
    <GP-swiper-item>
      <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #acce8a;">三</div>
    </GP-swiper-item>
    <GP-swiper-item>
      <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #c0e764;">四</div>
    </GP-swiper-item>
  </GP-swiper>
  <GP-swiper anim="updown" v-model="swiper3" :width="300">
    <GP-swiper-item>
      <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #f0dbee;">一</div>
    </GP-swiper-item>
    <GP-swiper-item>
      <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #d892f3;">二</div>
    </GP-swiper-item>
    <GP-swiper-item>
      <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #99f6e0;">三</div>
    </GP-swiper-item>
    <GP-swiper-item>
      <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #3de2da;">四</div>
    </GP-swiper-item>
  </GP-swiper>
</div>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <div style="display:flex;flex-wrap:wrap; margin:20px">
      <GP-swiper v-model="swiper1" :width="300">
        <GP-swiper-item>
          <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #b3ec9c;">一</div>
        </GP-swiper-item>
        <GP-swiper-item>
          <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #abf185;">二</div>
        </GP-swiper-item>
        <GP-swiper-item>
          <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #acce8a;">三</div>
        </GP-swiper-item>
        <GP-swiper-item>
          <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #c0e764;">四</div>
        </GP-swiper-item>
      </GP-swiper>
      <GP-swiper anim="updown" v-model="swiper2" :width="300">
        <GP-swiper-item>
          <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 300px; background-color: #f0dbee;">一</div>
        </GP-swiper-item>
        <GP-swiper-item>
          <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 300px; background-color: #d892f3;">二</div>
        </GP-swiper-item>
        <GP-swiper-item>
          <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 300px; background-color: #99f6e0;">三</div>
        </GP-swiper-item>
        <GP-swiper-item>
          <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 300px; background-color: #3de2da;">四</div>
        </GP-swiper-item>
      </GP-swiper>
    </div>
  </template>
  <script lang="ts" setup>
    import { ref } from 'vue'
    const swiper1 = ref(0)
    const swiper2 = ref(0)
  </script>
   ```
</details>

## 控制器的位置

通过indicator属性决定控制器位置，inside:内部(默认) outside:外部 none:不显示

<ClientOnly>
<GP-swiper v-model="swiper4" :width="600" indicator="outside">
  <GP-swiper-item>
    <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #c1e1b9;">一</div>
  </GP-swiper-item>
  <GP-swiper-item>
    <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #abf185;">二</div>
  </GP-swiper-item>
  <GP-swiper-item>
    <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #cdfb9f;">三</div>
  </GP-swiper-item>
  <GP-swiper-item>
    <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #d1fc6b;">四</div>
  </GP-swiper-item>
</GP-swiper>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-swiper v-model="swiper" :width="600" indicator="outside">
      <GP-swiper-item>
        <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #c1e1b9;">一</div>
      </GP-swiper-item>
      <GP-swiper-item>
        <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #abf185;">二</div>
      </GP-swiper-item>
      <GP-swiper-item>
        <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #cdfb9f;">三</div>
      </GP-swiper-item>
      <GP-swiper-item>
        <div style="color: #474444; text-align: center; width: 100%; height: 100%; line-height: 260px; background-color: #d1fc6b;">四</div>
      </GP-swiper-item>
    </GP-swiper>
  </template>
  <script lang="ts" setup>
    import { ref } from 'vue'
    const swiper = ref(0)
  </script>
   ```
</details>

<script lang="ts" setup>
  import { ref } from 'vue'
  const swiper = ref(0)
  const swiper1 = ref(0)
  const swiper2 = ref(0)
  const swiper3 = ref(0)
  const swiper4 = ref(0)
</script>
