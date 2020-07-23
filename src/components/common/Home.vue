<template>
  <div class="home-wrap">
    <span>Home组件</span>
    <v-fir></v-fir>
    <v-sec></v-sec>
  </div>
</template>

<script>
  import vFir from "../page/First";
  import vSec from "../page/Second";
  export default {
    components: {
      vFir,
      vSec,
    },
  };
</script>