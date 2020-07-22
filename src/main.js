import Vue from 'vue'
import App from './App.vue'
// 引入 VueRouter
import router from "./router";
// 引入 Element UI
import ElementUI from "element-ui";
// 单独引入样式文件
import "element-ui/lib/theme-chalk/index.css";

// 执行 ElementUI
Vue.use(ElementUI, { size: "small", zIndex: 3000 });

Vue.config.productionTip = false

// 实例化 Vue
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
