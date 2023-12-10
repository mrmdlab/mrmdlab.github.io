// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    path:'/service',
    component: () => import('@/views/Service.vue')
  },
  {
    path:"/pricing",
    component: () => import('@/views/Pricing.vue')
  },
  {
    path:"/contact",
    component: () => import('@/views/Contact.vue')
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('@/views/NotFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
