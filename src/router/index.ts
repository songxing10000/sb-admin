// 引入vue router
import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from 'vue-router'

// 引入页面
import Login from '@/pages/login/index.vue'
import Home from '@/pages/home/index.vue'

// 定义路由数组
const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/",
    alias: ['/home'],
    component: Home,
  },
  // {
  //   path: "*",
  //   redirect: '/',
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;