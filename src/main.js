import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import axios from 'axios';
Vue.config.productionTip = false

Vue.prototype.$http = axios

new Vue({
  vuetify,
  axios,
  VueRouter,
  render: h => h(App)
}).$mount('#app')

