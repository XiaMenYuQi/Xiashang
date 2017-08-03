import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import indexPage from '@/components/view/indexPage'
import server from '@/components/view/server'
import google from '@/components/view/google'
import test from '@/components/view/test'
import about from '@/components/view/about'
import cases from '@/components/view/cases'

Vue.use(Router);

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect : '/index',
      children: [
        {
          path: '/index',
          name: 'indexPage',
          component: indexPage
        },
        {
          path: '/server/:id',
          name: 'server',
          component: server
        },
        {
          path: '/google/:id',
          name: 'google',
          component: google
        },
        {
          path: '/test',
          name: 'test',
          component: test
        },
        {
          path: '/about/:id',
          name: 'about',
          component: about
        },
        {
          path: '/cases/:id',
          name: 'cases',
          component: cases
        }
      ]
    },

  ]
})
