<template>
  <div id="app">
    <!-- 这个 <router-view></router-view> 便是我们最顶层的出口，通过路由调控的组件都会被渲染到这个出口位置。 -->
    <router-view></router-view>
  </div>
</template>

<style>
  @import "./assets/css/main.css";
  @import "./assets/css/color-dark.css"; /*深色主题*/
  /*@import "./assets/css/theme-green/color-green.css";   浅绿色主题*/
</style>
