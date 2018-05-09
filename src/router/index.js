import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Detail from '@/components/Detail'
import VueFirst from '@/pages/VueFirst'
import Run from '@/pages/sport/run'
import Basketball from '@/pages/sport/basketball'
import VIf from '@/pages/VIf'
import VFor from '@/pages/VFor'
import User from '@/pages/User'
import Error from '@/pages/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vuefirst',
      name: 'VueFirst',
      component: VueFirst
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/VIf',
      name: 'VIf',
      component: VIf
    },
    {
      path: '/VFor',
      name: 'VFor',
      component: VFor
    },
    {
      path: '/error',
      name: 'error',
      component: Error
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User,
      // 子路由
      children: [
        {
          path: 'run',
          component: Run
        },
        {
          path: 'basketball',
          component: Basketball
        }
      ]
    }
  ]
})
