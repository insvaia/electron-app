import { createRouter, createWebHistory } from 'vue-router'
import { AppRoutes } from './routes'
import { beforeEach, afterEach } from './grauds'

const router = createRouter({
  history: createWebHistory(),
  routes: AppRoutes
})

// 前置路由守卫
router.beforeEach(beforeEach)

// 后置路由守卫
router.afterEach(afterEach)

export default router
