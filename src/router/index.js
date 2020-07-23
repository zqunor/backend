// 1.引入vue-router
import Vue from "vue";
import VueRouter from "vue-router";

// 2. 执行VueRouter
Vue.use(VueRouter);

const routes = [
  // 设置路由配置
  {
    // 设置 URL
    path: "/home",
    // 设置对应组件
    component: () => import("../components/common/Home.vue"),
    children: [
        {
            // 要注意，以 / 开头的嵌套路径会被当作根路径。 使用嵌套组件无须设置嵌套的路径。
            path: "child",
            component: () => import("../components/page/Children.vue"),
        },
        {
            path: "child1",
            component: () => import("../components/page/Children1.vue"),
        },
        {
            path: "child2",
            component: () => import("../components/page/Children2.vue"),
        },
        {
            path: "child3",
            component: () => import("../components/page/Children3.vue"),
        },
        {
          path: "first",
          component: () => import("../components/page/First.vue"),
        },
        {
          path: "second",
          component: () => import("../components/page/Second.vue"),
        },
    ]
  },
  {
    path: "/login",
    component: () => import("../components/page/Login.vue"),
    meta: {
      title: "Login组件",
    },
  },
  {
    path: "/demo",
    component: () => import("../components/page/EleDemo.vue"),
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