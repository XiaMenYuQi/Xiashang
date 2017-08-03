import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import indexPage from '@/components/view/indexPage'
import server from '@/components/view/server'
import test from '@/components/view/test'

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
          path: '/test',
          name: 'test',
          component: test
        }
      ]
    },

  ]
})
