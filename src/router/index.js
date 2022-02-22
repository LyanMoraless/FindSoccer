import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/quadras',
      name: 'quadras',
      component: () => import('../views/QuadrasView.vue')
    }
  ]
})

export default router
