import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import PreTest from '../views/PreTest.vue'
import PersonalityTest from '../views/PersonalityTest.vue'
import Dashboard from '../views/Dashboard.vue'
import MockTest from '../views/MockTest.vue'
/*import {ifAuthenticated} from "../scripts/authentication";*/

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Sign-Up',
    component: Signup
  },
  {
    path: '/quiz-info',
    name: 'PreTest',
    component: PreTest
  },
  {
    path: '/personalitytest',
    name: 'PersonalityTest',
    component: PersonalityTest
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    /*beforeEnter: ifAuthenticated*/
  },
  {
    path: '/mocktest',
    name: 'MockTest',
    component: MockTest,
    /*beforeEnter: ifAuthenticated*/
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
