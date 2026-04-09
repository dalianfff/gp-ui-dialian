<script setup lang="ts">
import { AccessibilitySharp } from "@vicons/ionicons5";
import { GPMessage } from "../../packages/components/message/src/MessageT";
import { reactive, ref, watch } from "vue";

let visible = ref(false);
const handleClick = () => {
  console.log("点击了");
};
// dialog
const handleConfirmButton = () => {
  console.log("点击确定了");
  visible.value = !visible.value;
};
const handleCancelButton = () => {
  console.log("点击取消了");
  visible.value = !visible.value;
};
const dialogClick = () => {
  visible.value = !visible.value;
};
// message
const showMsg = () => {
  GPMessage.info({
    message: "111",
    duration: 1000,
  });
};
// input
const input = ref("123");
watch(input, (val) => {
  console.log("当前值：", val);
});
// checkbox
const checkbox = ref(false);
watch(checkbox, (val) => {
  console.log("checkbox ", val);
});
// switch
const Switch = ref(false);
watch(Switch, (val) => {
  console.log("Switch ", val);
});
// collapse
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
// upload
// 上传更新文件，第一个参数为当前上传文件，第二个参数为上传之后的文件列表
const changeUpload = (file: any, fileList: any) => {
  console.log(file, fileList);
};
// 删除更新文件，第一个参数为当前删除文件，第二个参数为上传之后的文件列表
const deleteUpload = (file: any, fileList: any) => {
  console.log(file, fileList);
};
const dropUpload = (files: any, fileList: any) => {
  console.log(files, fileList);
};

// form
const state = reactive({
  username: "",
  passward: "",
});

const formRef = ref();

const validateForm = () => {
  const form = formRef.value;
  form?.validate((valid: any, errors: any) => {
    console.log(valid, errors);
  });
};

// swiper
const swiper = ref(0);
watch(swiper, (val) => {
  console.log("swiper ", val);
});
// pagination
const changePage = (page: number) => {
  console.log(page);
};
</script>

<template>
  <!-- button -->
  <GP-button type="primary" :disabled="true" @click="handleClick"
    >按钮组件</GP-button
  >
  <GP-button type="success" :disabled="true" icon="AccessibilitySharp"
    >按钮组件</GP-button
  >
  <GP-button type="warning">按钮组件</GP-button>
  <GP-button type="danger">按钮组件</GP-button>
  <GP-button type="info">按钮组件</GP-button>
  <div>-------------------------------</div>
  <!-- icon -->
  <GP-icon color="red" size="50">
    <AccessibilitySharp></AccessibilitySharp>
  </GP-icon>
  <div>---------------------------------</div>
  <!-- dialog -->
  <GP-button @click="dialogClick">dialog</GP-button>
  <GP-dialog
    title="xixi"
    width="60%"
    top="200px"
    :visible="visible"
    @confirm="handleConfirmButton"
    @cancel="handleCancelButton"
  >
    <li>1</li>
    <li>1</li>
    <li>3</li>
  </GP-dialog>
  <div>---------------------------------</div>
  <!-- message -->
  <GP-button @click="showMsg">showMsg</GP-button>
  <div>---------------------------------</div>
  <!-- alert -->
  <GP-alert
    title="111"
    content="2222222"
    :closeable="true"
    :showIcon="true"
  ></GP-alert>
  <GP-alert type="error" :closeable="true" :showIcon="true"></GP-alert>
  <GP-alert type="success" :closeable="true" :showIcon="true"></GP-alert>
  <GP-alert type="warning" :closeable="true" :showIcon="true"></GP-alert>
  <div>----------------------------------</div>
  <!-- input -->
  <GP-input
    type="password"
    :showPassword="true"
    :clearable="true"
    placeholder="111"
    v-model="input"
    @change="() => console.log(input)"
    @blur="console.log('blur')"
    @focus="console.log('focus')"
  ></GP-input>
  <div>-------------------------------</div>
  <!-- chexkbox -->
  <GP-checkbox
    label="222"
    @change="console.log('checkbox change')"
    v-model="checkbox"
  ></GP-checkbox>
  <div>-------------------------------</div>
  <!-- switch -->
  <GP-switch
    v-model="Switch"
    @change="console.log('Switch change')"
    onswitchText="111"
    unswitchText="222"
  ></GP-switch>
  <GP-switch size="lg" v-model="Switch"></GP-switch>
  <GP-switch size="md" v-model="Switch"></GP-switch>
  <GP-switch size="sm" v-model="Switch"></GP-switch>
  <GP-switch size="xs" v-model="Switch"></GP-switch>
  <div>--------------------------------------</div>
  <GP-collapse :posts="list" :types="false"></GP-collapse>
  <div>--------------------------------</div>
  <GP-upload :drop="true" @dropUpload="dropUpload"></GP-upload>
  <GP-upload
    @changeUpload="changeUpload"
    @deleteUpload="deleteUpload"
  ></GP-upload>
  <div>---------------------------------</div>
  <!-- 表单-->
  <GP-form
    :model="state"
    ref="formRef"
    :rules="{
      username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    }"
  >
    <GP-form-item
      prop="username"
      label="姓名"
      :rules="[
        {
          min: 6,
          max: 10,
          message: '用户名6-10位',
          trigger: ['change', 'blur'],
        },
      ]"
    >
      <GP-input
        placeholder="请输入用户名111"
        v-model="state.username"
      ></GP-input>
    </GP-form-item>

    <GP-form-item
      prop="passward"
      label="密码"
      :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]"
    >
      <GP-input
        placeholder="请输入密码"
        v-model="state.passward"
        type="password"
      ></GP-input>
    </GP-form-item>
    <GP-button type="primary" @click="validateForm">校验</GP-button>
  </GP-form>
  <div>-------------------------------</div>
  <!-- breadcrumb -->
  <GP-breadcrumb>
    <GP-breadcrumb-item :to="{ path: '/home' }">home</GP-breadcrumb-item>
    <GP-breadcrumb-item>home 内容</GP-breadcrumb-item>
    <GP-breadcrumb-item to="/">list</GP-breadcrumb-item>
    <GP-breadcrumb-item>list 内容</GP-breadcrumb-item>
  </GP-breadcrumb>
  <div>-------------------------------</div>
  <!-- ↑ ↓ ← → swiper -->
  <GP-swiper :width="600" anim="updown" indicator="outside" v-model="swiper">
    <GP-swiper-item>
      <div
        style="
          color: #474444;
          text-align: center;
          width: 100%;
          height: 100%;
          line-height: 260px;
          background-color: #7cf05f;
        "
      >
        一
      </div>
    </GP-swiper-item>
    <GP-swiper-item>
      <div
        style="
          color: #474444;
          text-align: center;
          width: 100%;
          height: 100%;
          line-height: 260px;
          background-color: #abf185;
        "
      >
        二
      </div>
    </GP-swiper-item>
    <GP-swiper-item>
      <div
        style="
          color: #474444;
          text-align: center;
          width: 100%;
          height: 100%;
          line-height: 260px;
          background-color: #cdfb9f;
        "
      >
        三
      </div>
    </GP-swiper-item>
    <GP-swiper-item>
      <div
        style="
          color: #474444;
          text-align: center;
          width: 100%;
          height: 100%;
          line-height: 260px;
          background-color: #d1fc6b;
        "
      >
        四
      </div>
    </GP-swiper-item>
  </GP-swiper>
  <!-- progress -->
  <GP-progress color="#7cf05f" :percent="30"></GP-progress>
  <GP-progress color="#7cf05f" :percent="30" status="success"></GP-progress>
  <GP-progress color="#7cf05f" :percent="50" type="in"></GP-progress>
  <GP-progress color="#7cf05f" :percent="60" select="circle"></GP-progress>
  <!-- dropdowwn -->
  <GP-dropdown trigger="click">
    <button class="GP-dropdown__button">
      <span class="GP-dropdown__link">
        下拉菜单
        <GP-icon style="margin-left: 10px">∨</GP-icon>
      </span>
    </button>
    <GP-dropdown-menu-click>
      <GP-dropdown-item>北京市</GP-dropdown-item>
      <GP-dropdown-item>上海市</GP-dropdown-item>
      <GP-dropdown-item>杭州市</GP-dropdown-item>
      <GP-dropdown-item>厦门市</GP-dropdown-item>
    </GP-dropdown-menu-click>
  </GP-dropdown>
  <!-- pagination -->
  <GP-pagination
    @change-page="changePage"
    :pagesize="8"
    :total="80"
    :page="1"
  ></GP-pagination>
</template>
