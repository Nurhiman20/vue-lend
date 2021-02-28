import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import './assets/scss/main.scss';

Vue.config.productionTip = false;

window.addEventListener('message', function(e) {
  if (e.data.message && e.data.message.action == "setAccount") {
    console.log("setAccount event", e.data.message)
    console.log("current address:", e.data.message.data.address)
    store.commit('SET_ADDRESS', null);
  }
})

var obj = setInterval(async () => {
  if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
    clearInterval(obj)
    store.commit('SET_ADDRESS', window.tronWeb.defaultAddress.base58);
    store.commit('SET_TRONWEB', window.tronWeb);
  }
}, 10)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
