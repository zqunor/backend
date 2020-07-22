import Vue from 'vue'
import App from './App.vue'
// 引入 VueRouter
import router from "./router";
import { Button, Select, Option } from "element-ui";

// Vue.config.productionTip = false

// 执行引入的样式组件
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 * Vue.use(Option)
 */

// 实例化 Vue
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
