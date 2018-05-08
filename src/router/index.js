import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Detail from '@/components/Detail'
import VueFirst from '@/pages/VueFirst'
import Run from '@/pages/sport/run'
import Basketball from '@/pages/sport/basketball'
import About from '@/pages/About'
import Haha from '@/pages/Haha'
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
      component: VueFirst,
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
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/haha',
      name: 'haha',
      component: Haha
    },
    {
      path: '/error',
      name: 'error',
      component: Error
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User
    }
  ]
})
