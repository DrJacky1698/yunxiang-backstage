import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout'
import Home from '../views/Home.vue'
import Topsubmenu from '@/layout/components/Topsubmenu.vue'

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
  path: '/',
  component: Layout,
  children: [{
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/pagemaking',
      component: Topsubmenu,
      children:[{
          path: '/pagemaking/pagemaking',
          name: 'Pagemaking',
          component: () => import('@/views/page'),
        }
      ]
    },
    {
      path: '/membermanage',
      component: Topsubmenu,
      children:[{
          path: '/membermanage/basicinfo',
          name: 'Basicinfo',
          component: () => import('@/views/member/basicinfo.vue'),
        }
      ]
    },
    {
      path: '/commodymanage',
      component: Topsubmenu,
      children:[{
          path: '/commodymanage/newcommody',
          name: 'Newcommody',
          component: () => import('@/views/commody/newcommody.vue'),
        },
        {
          path: '/commodymanage/commodydetail',
          name: 'commodydetail',
          component: () => import('@/views/commody/commodydetail.vue'),
        }
      ]
    },
    {
      path: '/wearingmanage',
      component: Topsubmenu,
      children:[{
          path: '/wearingmanage/newwearing',
          name: 'Newwearing',
          component: () => import('@/views/wearing/newwearing.vue'),
        }
      ]
    },
    {
      path: '/articlemanage',
      component: Topsubmenu,
      children:[{
          path: '/articlemanage/newarticle',
          name: 'Newarticle',
          component: () => import('@/views/article/newarticle.vue'),
        }
      ]
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('@/views/settings')
    },
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