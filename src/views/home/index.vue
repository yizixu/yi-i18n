<script setup>
import { reactive } from 'vue'
import { useMessage } from 'naive-ui'
import UploadFile from './components/UploadFile.vue'

const render = new FileReader()
const message = useMessage()

const state = reactive({
  leftList: {},
  rightList: {},
  fileList: []
})

const fileListChange = async list => {
  state.fileList = list
  console.log(state.fileList)
  // if (fileList.value && fileList.value.length) {
  //   leftList = await readFile(fileList.value[0].file)
  // }
  // if (fileList.value && fileList.value.length > 1) {
  //   rightList = await readFile(fileList.value[1].file)
  // }
  console.log(state.fileList.length)
}
const readFile = file => {
  return new Promise((resolve, reject) => {
    render.readAsText(file)
    render.onload = () => {
      resolve(render.result)
    }
    render.onerror = () => {
      reject(render.error)
    }
  })
}
const onLeftChange = async value => {
  const { file, type } = state.fileList.find(item => item.id === value)
  console.log(file, type)
  const content = await readFile(file)
  state.leftList = handleFileString(content, type)
}
const handleFileString = (string, type) => {
  const afterString = string
    .replace(/(^module.exports[\s]*=[\s]*)/g, '') // 去掉js导出语句
    .replace(/\/\/[\s]*[\u4E00-\u9FA5\w]*/g, '') // 去掉备注
    .replace(/([\n\r\f]+)[\s]*([\w]*):/g, '$1"$2":') // 给key添加双引号
    .replace(/,([\s\r\n\f]*)(}|])/g, '$1$2') // 去掉结尾逗号
    .replace(/([\u4E00-\u9FA5\w]+)"([\u4E00-\u9FA5\w]+)/g, "$1'$2") // 替换单引号
    .replace(/'([\S\s]*)',/g, '"$1",') // 替换单引号
  console.log(afterString)
  switch (type) {
    case 'text/javascript':
      return JSON.parse(afterString)
    case 'text/json':
      return JSON.parse(string)
    default:
      message.error('暂时无法处理该文件类型')
      break
  }
}
</script>

<template>
  <UploadFile @on-change="fileListChange" />
  <n-grid x-gap="12" :cols="2">
    <n-gi>
      <n-list bordered>
        <template #header>
          <n-p>选择文件</n-p>
          <n-select :options="state.fileList" label-field="name" value-field="id" @update:value="onLeftChange" />
        </template>
        <n-list-item v-for="item in state.leftList" :key="item.key">
          {{ item.label }}
        </n-list-item>
      </n-list>
    </n-gi>
    <n-gi>
      <n-list bordered>
        <n-list-item v-for="item in state.rightList" :key="item.key">
          {{ item.label }}
        </n-list-item>
      </n-list>
    </n-gi>
  </n-grid>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
