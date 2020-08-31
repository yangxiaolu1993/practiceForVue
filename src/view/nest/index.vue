<template>
  <div class="nest">
      一级路由
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
   
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/nest/nest.scss';
</style>
