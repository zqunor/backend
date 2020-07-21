<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
  @import "./assets/css/main.css";
  @import "./assets/css/color-dark.css"; /*深色主题*/
  /*@import "./assets/css/theme-green/color-green.css";   浅绿色主题*/
</style>
