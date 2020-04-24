import Vue from 'vue'
/*global Vue*/
import Router from 'vue-router'
import login from '@/views/loginPage/login'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },


  ]
})
