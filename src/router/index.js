import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import indexPage from '@/components/view/indexPage'
import server from '@/components/view/server'
import google from '@/components/view/google'
import newsList from '@/components/view/newsList'
import newsDetail from '@/components/view/newsDetail'
import test from '@/components/view/test'
import about from '@/components/view/about'
import contact from '@/components/view/contact'
import casesDetail from '@/components/view/casesDetail'
import casesList from '@/components/view/casesList'

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
          path: '/newsList',
          name: 'newsList',
          component: newsList
        },
        {
          path: '/news/:id',
          name: 'newsDetail',
          component: newsDetail
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
          path: '/casesList',
          name: 'casesList',
          component: casesList
        },
        {
          path: '/cases/:id',
          name: 'casesDetail',
          component: casesDetail
        },
        {
          path: '/contact',
          name: 'contact',
          component: contact
        }
      ]
    },

  ]
})
