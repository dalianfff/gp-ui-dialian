# Form 表单

表单内包含用户输入组件。使用表单，可以收集 提交 验证数据

## 基础用法

在每一个 form 组件中，你需要一个 form-item 字段作为输入项的容器，用于获取值与验证值。
你可以输入rules来制定要校验的规则。

<ClientOnly>
<GP-form :model="state" ref="formRef" :rules="{username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],}">
  <GP-form-item prop="username" label="姓名" :rules="[{min: 6,max: 10,message: '用户名6-10位',trigger: ['change', 'blur'],},]">
    <GP-input placeholder="请输入用户名111" v-model="state.username"></GP-input>
  </GP-form-item>
  <GP-form-item prop="passward" label="密码" :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
    <GP-input placeholder="请输入密码" v-model="state.passward" type="password"></GP-input>
  </GP-form-item>
  <GP-button type="primary" @click="validateForm">校验</GP-button>
</GP-form>
</ClientOnly>

<details style="cursor: pointer">
  <summary>展开查看</summary>
  
  ```vue
  <template>
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

  </template>
  <script lang="ts" setup>
    import { reactive, ref } from "vue";

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

  </script>
   ```
</details>

<script lang="ts" setup>
  import { reactive, ref } from "vue";

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
</script>
