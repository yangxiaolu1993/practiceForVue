<template>
  <div id="app">
    <div class="wrapper">
      <router-view />
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './assets/css/reset.scss';
</style>
<style>
html,body{
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body,html{
  padding: 0;
  margin: 0;
}
.wrapper{
  width: 100%;
  height: 100%;
  margin:auto;
  box-sizing:border-box;
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); */
}
</style>
