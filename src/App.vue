<template>
  <div id="app">
    <div class="wrapper">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

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
.wrapper{
  width: 100%;
  height: 100%;
  margin:auto;
  padding: 10px;
  box-sizing:border-box;
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); */
}
</style>
