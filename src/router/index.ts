// 引入vue router
import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from 'vue-router'

// 引入页面
import Login from '@/pages/login/index.vue'
import Home from '@/pages/home/index.vue'

import { RoutePaths } from '@/router/RoutePaths'

// 定义路由数组
const routes: RouteRecordRaw[] = [
  {
    path: RoutePaths.login,
    component: Login,
  },
  {
    path: RoutePaths.root,
    alias: [RoutePaths.home],
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

export default router