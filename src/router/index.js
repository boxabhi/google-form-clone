import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta : {auth : true}
  },
  {
    path: '/forms/d/:form_code/edit',
    name: 'EditForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditForm.vue'),
  
    meta : {auth : true}
  },
  {
    path: '/forms/:form_code/submit',
    name: 'EditForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/SubmitForm.vue'),
    meta : {auth : true}
  
  },
  {
    path: '/success',
    name: 'success',
    component: () => import(/* webpackChunkName: "about" */ '../views/Success.vue'),
    meta : {auth : true}
  
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta : {auth : false}
  
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue'),
    meta : {auth : false}
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue'),
    meta : {auth : false}
  
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to , from ,next)=>{

  var auth_token = localStorage.getItem('auth_token')

  if(to.meta.auth && auth_token){
    next()
  }else if(to.meta.auth && auth_token == null){
      next('/login')
  }

  next()


})

export default router
