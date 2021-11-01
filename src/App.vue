<template>
  <div id="app">
    <div class="wrapper">
      <transition :name='transitionName'>
          <!-- <keep-alive> -->
            <router-view class="child-view"></router-view>
          <!-- </keep-alive> -->
        
      </transition>

    </div>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  
  data(){
    return {
      transitionName: "slide-left"
    }
  },
  watch:{
    $route: function (to, from) {
     console.log(to,from)
    if(to.meta.level > from.meta.level){
      this.transitionName = 'slide-left';
    } else {
      this.transitionName = 'slide-right'
    }
    }
  },

  mounted(){

  }
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


.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 2s;
  width: 100%;
  position: absolute;
  z-index: 99;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
