# Dropdown 下拉菜单

将动作或菜单折叠到下拉菜单中。

## 基本用法

### hover 触发

<ClientOnly>
<GP-dropdown trigger="hover" :style="{'margin':'20px'}">
  <button class="GP-dropdown__button">
    <span class="GP-dropdown__link">
      下拉菜单
      <GP-icon style="margin-left: 10px">∨</GP-icon>
    </span>
  </button>
  <GP-dropdown-menu>
    <GP-dropdown-item>星期一</GP-dropdown-item>
    <GP-dropdown-item>星期二</GP-dropdown-item>
    <GP-dropdown-item>星期三</GP-dropdown-item>
    <GP-dropdown-item>星期四</GP-dropdown-item>
  </GP-dropdown-menu>
</GP-dropdown>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-dropdown trigger="hover">
      <button class="GP-dropdown__button">
        <span class="GP-dropdown__link">
          下拉菜单
          <GP-icon style="margin-left: 10px">∨</GP-icon>
        </span>
      </button>
      <GP-dropdown-menu>
        <GP-dropdown-item>星期一</GP-dropdown-item>
        <GP-dropdown-item>星期二</GP-dropdown-item>
        <GP-dropdown-item>星期三</GP-dropdown-item>
        <GP-dropdown-item>星期四</GP-dropdown-item>
      </GP-dropdown-menu>
    </GP-dropdown>
  </template>
   ```
</details>

### click 触发

<ClientOnly>
<GP-dropdown trigger="click" :style="{'margin':'20px'}">
  <button class="GP-dropdown__button">
    <span class="GP-dropdown__link">
      下拉菜单
      <GP-icon style="margin-left: 10px">∨</GP-icon>
    </span>
  </button>
  <GP-dropdown-menu-click>
    <GP-dropdown-item>星期一</GP-dropdown-item>
    <GP-dropdown-item>星期二</GP-dropdown-item>
    <GP-dropdown-item>星期三</GP-dropdown-item>
    <GP-dropdown-item>星期四</GP-dropdown-item>
  </GP-dropdown-menu-click>
</GP-dropdown>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
    <GP-dropdown trigger="click">
      <button class="GP-dropdown__button">
        <span class="GP-dropdown__link">
          下拉菜单
          <GP-icon style="margin-left: 10px">∨</GP-icon>
        </span>
      </button>
      <GP-dropdown-menu-click>
        <GP-dropdown-item>星期一</GP-dropdown-item>
        <GP-dropdown-item>星期二</GP-dropdown-item>
        <GP-dropdown-item>星期三</GP-dropdown-item>
        <GP-dropdown-item>星期四</GP-dropdown-item>
      </GP-dropdown-menu-click>
    </GP-dropdown>
  </template>
   ```
</details>
