import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import { currency } from './util'

Vue.config.productionTip = false
Vue.filter('currency', currency)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
