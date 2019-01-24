import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Require the main Sass manifest file
require('./styles/main.scss');

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
