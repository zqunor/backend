// 1.引入vue-router
import Vue from "vue";
import VueRouter from "vue-router";
// 3. 设置路由配置并引入对应的组件
import vHome from "../components/common/Home.vue";
import vLogin from "../components/page/Login.vue";
import vChild from "../components/page/Children.vue";

// 2. 执行VueRouter
Vue.use(VueRouter);

const routes = [
  // 设置路由配置
  {
    // 设置 URL
    path: "/home",
    // 设置对应组件
    component: vHome,
    // 设置相应元信息
    meta: {
      title: "Home组件",
    },
    children: [
        {
            // 要注意，以 / 开头的嵌套路径会被当作根路径。 使用嵌套组件无须设置嵌套的路径。
            path: "child",
            component: vChild,
        }
    ]
  },
  {
    path: "/login",
    component: vLogin,
    meta: {
      title: "Login组件",
    },
  },
];

// 4. 实例化VueRouter, 并将路由配置文件传递到VueRouter实例上
export default new VueRouter({
    routes,
});

// 5. 将 VueRouter 挂载到 Vue 实例中
// 在main.js写入以下代码
// 引入 VueRouter
// import router from "./router";

// // 实例化 Vue
// new Vue({
//   router,
//   render: (h) => h(App),
// }).$mount("#app");