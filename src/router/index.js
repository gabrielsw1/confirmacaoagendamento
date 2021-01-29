import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/Login'
import Main from '@/views/Main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/Main',
    component: Main
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
