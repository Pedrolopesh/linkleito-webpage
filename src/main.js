import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css' //Vuesax styles
import router from './router'
import store from './store'
import './registerServiceWorker';
import './assets/scss/index.scss';
import vuetify from './plugins/vuetify';
import axios from 'axios'

Vue.prototype.$http = axios
Vue.prototype.$url = process.env.VUE_APP_PROD_URL

Vue.use(Vuesax, {
  // options here
  colors: {
    primary:'#5b3cc4',
    success:'rgb(23, 201, 100)',
    danger:'rgb(242, 19, 93)',
    warning:'rgb(255, 130, 0)',
    dark:'rgb(36, 33, 69)'
  }

});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')

export { axios }