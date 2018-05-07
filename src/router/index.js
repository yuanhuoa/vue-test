import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Detail from '@/components/Detail'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Haha from '@/pages/Haha'
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
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/home',
      name: 'home',
      component: Home
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
    }
  ]
})
