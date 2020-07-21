<template>
  <div id="app">
    <!-- 使用Home组件 -->
    <v-home></v-home>
  </div>
</template>

<script>
  // 加载引入Home组件
  import vHome from "./components/common/Home.vue";

  export default {
    components: {
      // 挂载Home组件
      vHome,
    },
  };
</script>

<style>
  @import "./assets/css/main.css";
  @import "./assets/css/color-dark.css"; /*深色主题*/
  /*@import "./assets/css/theme-green/color-green.css";   浅绿色主题*/
</style>
