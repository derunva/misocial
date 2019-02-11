import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Pricing from './components/Pricing.vue'
import Page from './components/Page.vue'
import NewUser from './components/NewUser.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing
    },
    {
      path: '/users',
      name: 'users',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/Users.vue')
    },
    {
      path: '/users/signup',
      name: 'signup',

      component: NewUser
    },
    {
      path: '/users/:userId',
      name: 'users',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/User.vue')
    },
    {
      path: '/about',
      name: 'about',

      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    
    
    {
      path: '**',
      component : () => import(/* webpackChunkName: "404" */ './views/404.vue')
    }
  ]
})
