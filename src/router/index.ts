import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/idea',
      name: 'idea',
      component: () => import('../views/IdeaView.vue')
    },
    {
      path: '/sign_up',
      name: 'sign_up',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/log_in',
      name: 'log_in',
      component: () => import('../views/LogIn.vue')
    },
  ]
})

export default router
