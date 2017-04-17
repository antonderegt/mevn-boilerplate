import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './components/App.vue'

import store from './store'

Vue.use(VueRouter)
import Counter from './components/Counter.vue'
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/counter', component: Counter }
  ]
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
