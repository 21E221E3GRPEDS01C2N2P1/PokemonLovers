import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import App from './App.vue'
import firebase from "firebase/app";
import store from './store';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

import './components/style.css';
import router from './router'

Vue.config.productionTip = false;

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

const firebaseConfig = {
  apiKey: "AIzaSyDigjYrc1x-aYIa0cYTKPZwosEZyIV75N0",
  authDomain: "pokemon-lovers-cc3d7.firebaseapp.com",
  projectId: "pokemon-lovers-cc3d7",
  storageBucket: "pokemon-lovers-cc3d7.appspot.com",
  messagingSenderId: "130647182285",
  appId: "1:130647182285:web:b591f67d75efcfad169284"
}

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
