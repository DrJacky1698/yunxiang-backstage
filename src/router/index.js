import Vue from 'vue'
import VueRouter from 'vue-router'

import SideMenu from '@/layout/SideMenu.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export const routes = [
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
  path: '',
  component: SideMenu,
  children: [{
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/pagemaking',
      name: 'Pagemaking',
      component: () => import('@/views/page'),
    },
    {
      path: '/membermanage/membermanage',
      name: 'Membermanage',
      component: () => import('@/views/member/membermanage.vue'),
    },
    {
      path: '/membermanage/basicinfo',
      name: 'Basicinfo',
      component: () => import('@/views/member/basicinfo.vue'),
    },
    {
      path: '/commodymanage/commodymanage',
      name: 'Commodymanage',
      component: () => import('@/views/commody/commodymanage.vue'),
    },
    {
      path: '/commodymanage/newcommody',
      name: 'Newcommody',
      component: () => import('@/views/commody/newcommody.vue'),
    },
    {
      path: '/commodymanage/commodydetail',
      name: 'Commodydetail',
      component: () => import('@/views/commody/commodydetail.vue'),
    },
    {
      path: '/wearingmanage/wearingmanage',
      name: 'Wearingmanage',
      component: () => import('@/views/wearing/wearingmanage.vue'),
    },
    {
      path: '/wearingmanage/newwearing',
      name: 'Newwearing',
      component: () => import('@/views/wearing/newwearing.vue'),
    },
    {
      path: '/articlemanage/articlemanage',
      name: 'Articlemanage',
      component: () => import('@/views/article/articlemanage.vue'),
    },
    {
      path: '/articlemanage/newarticle',
      name: 'Newarticle',
      component: () => import('@/views/article/newarticle.vue'),
    },
    {
      path: '/settings/settings',
      name: 'Settings',
      component: () => import('@/views/settings/settings.vue')
    },
    {
      path: '/settings/profile',
      name: 'Profile',
      component: () => import('@/views/settings/profile.vue')
    },
    {
      path: '/settings/newuser',
      name: 'Newuser',
      component: () => import('@/views/settings/newuser.vue')
    },
    {
      path: '/settings/permission',
      name: 'Permission',
      component: () => import('@/views/settings/permission.vue')
    },
  ]
}]

const createRouter = () => new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router