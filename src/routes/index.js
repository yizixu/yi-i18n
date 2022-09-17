import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
const routes = [
  {
    path: '/',
    redirect: '/i18n'
  },
  {
    path: '/i18n',
    redirect: '/i18n/login',
    component: Layout,
    meta: {
      hideSider: true
    },
    children: [
      {
        path: 'login',
        name: 'I18nLogin',
        component: () => import('@/views/login/index.vue')
      },
      {
        path: 'home',
        name: 'I18nHome',
        component: () => import('@/views/home/index.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
