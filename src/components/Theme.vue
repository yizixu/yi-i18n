<template>
  <n-switch class="theme-switch" v-model:value="isDark" size="large">
    <template #checked-icon>
      <n-icon :component="LightModeOutlined" />
    </template>
    <template #unchecked-icon>
      <n-icon :component="NightlightOutlined" />
    </template>
  </n-switch>
</template>

<script setup>
import { computed } from 'vue'
import { LightModeOutlined, NightlightOutlined } from '@vicons/material'
const props = defineProps({
  value: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['update:value'])
const isDark = computed({
  get() {
    return props.value
  },
  set(val) {
    emits('update:value', val)
  }
})
</script>

<style lang="scss" scoped>
</style>
