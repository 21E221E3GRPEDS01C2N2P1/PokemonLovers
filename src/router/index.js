import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Faq from '../views/Faq.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import PersonalityTest from '../views/PersonalityTest.vue'
import Dashboard from '../views/Dashboard.vue'
import UserCreate from '../views/UserCreate.vue'
import UserEdit from '../views/UserEdit.vue'
import MockTest from '../views/MockTest.vue'
import firebase from "firebase/app";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/signup',
    name: 'Sign-Up',
    component: Signup,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/personalitytest',
    name: 'PersonalityTest',
    component: PersonalityTest,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/usercreate',
    name: 'UserCreate',
    component: UserCreate,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/useredit',
    name: 'UserEdit',
    component: UserEdit,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/mocktest',
    name: 'MockTest',
    component: MockTest,
    meta: {
      requiresAuth: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !await firebase.getCurrentUser()){
    next('login');
  }else{
    next();
  }
});

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
          unsubscribe();
          resolve(user);
      }, reject);
  })
};

export default router
