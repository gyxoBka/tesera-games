<template>
  <div>
    <nav-bar></nav-bar>
    <Nuxt />
  </div>
</template>
<script>
import NavBar from '../components/NavBar.vue';
export default {
  components: {
    NavBar
  }
}
</script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  background: #F9F9FB;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}


</style>
