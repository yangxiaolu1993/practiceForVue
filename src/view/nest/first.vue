<template>
  <div class="nest">
      二级路由
      <div @click="goSecond">跳转三级路由</div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'nest',
  data () {
    return {
    }
  },
  mounted(){
   console.log(this.$route)
  },
  methods:{
    goSecond(){
      this.$router.push({
        name:'second'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/nest/nest.scss';
</style>
