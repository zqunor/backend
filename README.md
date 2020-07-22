# Vue.js 和 Element UI 开发管理后台

## 创建 Vue 项目

1、安装node和npm

2、安装vue

```bash
npm install -g @vue/cli
```

3、创建项目

```bash
vue create vue-manage-system
```

4、安装插件

package.json文件

```json
{
  "name": "vue-manage-system",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  "dependencies": {
    "axios": "^0.19.2",
    "babel-polyfill": "^6.26.0",
    "core-js": "^3.6.5",
    "element-ui": "^2.13.2",
    "mavon-editor": "^2.9.0",
    "vue": "^2.6.11",
    "vue-cropperjs": "^4.1.0",
    "vue-i18n": "^8.18.2",
    "vue-quill-editor": "^3.0.6",
    "vue-router": "^3.3.4",
    "vue-schart": "^2.0.0",
    "vuedraggable": "^2.24.0"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^4.4.0",
    "@vue/cli-plugin-eslint": "^4.4.0",
    "@vue/cli-service": "^4.4.0",
    "babel-eslint": "^10.1.0",
    "eslint": "^6.7.2",
    "eslint-plugin-vue": "^6.2.2",
    "vue-template-compiler": "^2.6.11"
  },
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    "parserOptions": {
      "parser": "babel-eslint"
    },
    "rules": {}
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead"
  ]
}
```

5、初始化项目目录

```info
node-modules/ : 项目开发依赖的模块
public/： 不会经过weback，需要用绝对路径引用
-- index.html
src/ : 项目源码位置
-- api/： 新建接口模块并使用 axios 实例
-- assets/： 模块资源目录。会被 webpack处理
-- components/： 模块组件
-- router/：路由配置目录(去中心化后的)
-- utils/： 项目公用的js文件
-- App.vue：主应用程序组件，项目的根组件
-- main.js：项目的核心入口文件
static/  : 资源目录。样式文件、字体文件、图片文件等
package.json： 项目配置文件，包含引入的插件的配置信息和一些与项目有关的配置
```

## 创建组件配置路由

### 使用路由

使用 Vue Router 一共需要五步：

1. 引入 vue-router
2. 执行 VueRouter
3. 设置路由配置并引入对应的组件
4. 实例化 VueRouter，并将路由配置文件传递到 VueRouter 实例上
5. 将 VueRouter 挂载到 Vue 实例中

### 嵌套路由

vue 通过 ` <router-view></router-view> ` 作为组件的出口。

其中`src/App.vue` 中的` <router-view></router-view> `是所有组件的根出口，通过路由调控的组件都会被渲染到这个出口位置。
在某个组件中继续使用组件，那增加的组件就是这个组件的子组件，父子组件之前也是通过` <router-view></router-view> `进行渲染的。而父组件是如何知道该子组件具体是哪个组件的？

这就需要在路由配置文件中配置：

```javascript
{
    // 设置 URL
    path: "/home",
    // 设置对应组件
    component: vHome,
    // 设置相应元信息
    meta: {
      title: "Home组件",
    },
    // 设置子组件
    children: [
        {
            // 要注意，以 / 开头的嵌套路径会被当作根路径。 使用嵌套组件无须设置嵌套的路径。
            path: "child",
            component: vChild,
        }
    ]
},
```

### 路由配置简化

原先的写法：

```javascript
// 先导入
import vHome from "../components/common/Home.vue";
import vChild1 from "../components/page/Children1.vue";
import vChild2 from "../components/page/Children2.vue";

// 再使用
{
    path: "/home",
    component: vHome,
     children: [
        {
            path: "child1",
            component: vChild1,
        },
        {
            path: "child2",
            component: vChild2,
        },
    ]
  },
```

实际可以简化成：

```javascript
{
    path: "/home",
    component: () => import("../components/page/Home.vue"),
    children: [
        {
            path: "child1",
            component: () => import("../components/page/Children1.vue"),
        },
        {
            path: "child2",
            component: () => import("../components/page/Children2.vue"),
        },
    ]
  },
```

## Element UI 框架

### 按需引入

根据需求对 Element UI 里的组件单独引入。

- 优点：体积小
- 缺点：增加了手动引入的工作量；代码繁杂紊乱。

1、安装 babel-plugin-component 插件（实现按需引入）

```bash
npm install  babel-plugin-component -D
```

2、修改项目中的 `babel.config.js` 文件

```js
module.exports = {
  presets: ["@vue/app", ["@babel/preset-env", { modules: false }]],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
  ],
};
```

3、引入并加载组件

```js
// 在 main.js 中 import App from './App.vue' 下方添加以下代码
// 引入所需样式组件
import { Button, Select, Option } from "element-ui";

// 执行引入的样式组件
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 * Vue.use(Option)
 */
```

全局配置：

```js
// main.js
Vue.prototype.$ELEMENT = { size: "small", zIndex: 3000 };
```

- size：用于改变组件的默认尺寸，默认尺寸为 "small"。
- zIndex：用于设置弹框的初始 z-index（默认为 2000)。
