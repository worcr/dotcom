import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/thanks',
      name: 'Thanks',
      component: () => import(/* webpackChunkName: "thanks" */ './views/Thanks.vue')
    },
    {
      path: '/cancelled',
      name: 'Cancelled',
      component: () => import(/* webpackChunkName: "cancelled" */ './views/Cancelled.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
