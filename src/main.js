import Vue from 'vue'
import App from './App.vue'
// 引入 VueRouter
import router from "./router";

// Vue.config.productionTip = false

// 实例化 Vue
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
