import Vue from 'vue'
import App from './App.vue'

import { makeRouter } from './router'

Vue.config.productionTip = false

export default App

new Vue({
  router: makeRouter(),
  render: h => h(App),
}).$mount('#app-remote2')