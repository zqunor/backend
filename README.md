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

使用 Vue Router 一共需要五步：

1. 引入 vue-router
2. 执行 VueRouter
3. 设置路由配置并引入对应的组件
4. 实例化 VueRouter，并将路由配置文件传递到 VueRouter 实例上
5. 将 VueRouter 挂载到 Vue 实例中

