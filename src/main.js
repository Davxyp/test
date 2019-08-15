import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import store from 'store'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')