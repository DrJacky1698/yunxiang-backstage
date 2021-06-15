import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/session/login'),
    hidden: true
  },
  {
    path: '/register',
    component: () => import('@/views/session/register'),
    hidden: true
  },
  {
  path: '/',
  component: Layout,
  children: [{
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/users',
      name: 'Users',
      component: () => import('@/views/Users.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('@/views/profile/index.vue')
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('@/views/settings/index.vue')
    }
  ]
}]

const createRouter = () => new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router