<script setup>
import { DriveFolderUploadOutlined } from '@vicons/material'
import { reactive } from 'vue'
const emits = defineEmits(['on-change'])
const fileList = reactive([])
const customRequest = ({
  file,
  data,
  headers,
  withCredentials,
  action,
  onFinish,
  onError,
  onProgress
}) => {
  fileList.push(file)
  emits('on-change', fileList)
  onFinish()
}
</script>

<template>
  <n-upload multiple directory-dnd :max="10" :custom-request="customRequest">
    <n-upload-dragger>
      <div style="margin-bottom: 12px">
        <n-icon size="48" :component="DriveFolderUploadOutlined" />
      </div>
      <n-text style="font-size: 16px">
        点击或者拖动文件到该区域来上传
      </n-text>
      <n-p depth="3" style="margin: 8px 0 0 0">
        请不要上传敏感数据，比如你的银行卡号和密码，信用卡号有效期和安全码
      </n-p>
    </n-upload-dragger>
  </n-upload>
</template>

<style scoped>
</style>
