<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
    <n-layout position="absolute">
      <n-layout-header style="height: 64px; padding: 24px">
        <Theme v-model:value="isDark" />
      </n-layout-header>
      <n-layout :has-sider="!hideSider" position="absolute" style="top: 64px; bottom: 64px">
        <n-layout-sider v-if="!hideSider" content-style="padding: 24px;">
          <slot name="sider">Sider</slot>
        </n-layout-sider>
        <n-layout content-style="padding: 24px;">
          <n-message-provider>
            <router-view />
          </n-message-provider>
        </n-layout>
      </n-layout>
      <n-layout-footer position="absolute" style="height: 64px; padding: 24px">
        designed by yizixu
      </n-layout-footer>
    </n-layout>
    <n-global-style />
  </n-config-provider>
</template>

<script setup>
import { ref } from 'vue'
import { darkTheme } from 'naive-ui'
import Theme from '@/components/Theme.vue'
import { useRoute } from 'vue-router'

defineProps({
  hasSider: {
    type: Boolean,
    default: true
  }
})

const route = useRoute()

const lightThemeOverrides = {
  common: {
    primaryColor: '#02DF79'
  }
  // ...
}

const darkThemeOverrides = {
  common: {
    primaryColor: '#02DF79'
  }
  // ...
}

const isDark = ref(false)

const theme = computed(() => {
  return isDark.value ? darkTheme : null
})

const themeOverrides = computed(() => {
  return isDark.value ? darkThemeOverrides : lightThemeOverrides
})

const { hideSider } = route.meta
</script>

<style lang="scss" scoped>
</style>
