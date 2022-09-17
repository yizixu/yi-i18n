<script setup>
import { ref, reactive, toRefs } from 'vue'
import { useMessage } from 'naive-ui'
import { useRouter } from 'vue-router'

const router = useRouter()
const message = useMessage()
const data = reactive({
  form: {
    account: '323',
    password: ''
  },
  rules: {
    account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
  }
})
const formRef = ref(null)
const { form, rules } = toRefs(data)
const login = () => {
  console.log(data.form)
  formRef.value.validate(error => {
    if (error) return
    message.success('登录成功')
    router.replace({ name: 'I18nHome' })
  })
}
</script>

<template>
  <n-card class="card-login" title="欢迎登录" :bordered="false">
    <n-form ref="formRef" :label-width="80" :model="form" :rules="rules">
      <n-form-item label="账号" path="account">
        <n-input v-model:value="form.account" type="text" placeholder="账号" />
      </n-form-item>
      <n-form-item label="密码" path="password">
        <n-input v-model:value="form.password" type="password" placeholder="密码" />
      </n-form-item>
      <n-button type="primary" block @click="login">登录</n-button>
    </n-form>
  </n-card>
</template>

<style lang="scss" scoped>
.card-login {
  width: 400px;
}
</style>
