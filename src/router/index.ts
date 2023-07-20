import { createRouter, createWebHashHistory, createWebHistory , RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import Home from '@/views/home/index.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [{ path: '', component: Home }],
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  }
]
//导入生成的路由数据
const router = createRouter({
  history: createWebHistory(),
  routes : routes,
})
export default router
