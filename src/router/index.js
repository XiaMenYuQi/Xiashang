import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import indexPage from '@/components/view/indexPage'
import server1 from '@/components/view/server/server1'

Vue.use(Router);

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/',
          name: 'indexPage',
          component: indexPage
        },
        {
          path: '/server1',
          name: 'server1',
          component: server1
        }
      ]
    },

  ]
})
