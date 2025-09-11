// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  // {
  //   path:'/resources',
  //   component: () => import('@/views/Resources.vue')
  // },
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
    path:"/team",
    component: () => import('@/views/Team.vue')
  },
  {
    path:"/about",
    component: () => import('@/views/About.vue')
  },
  {
    path:"/publications",
    component: () => import('@/views/Publications.vue')
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
