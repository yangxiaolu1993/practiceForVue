<template>
  <div>
    <router-view name="headernav"></router-view>
    <div class="nest">
        一级路由
        <router-view name="nest"></router-view>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'nest',
  data () {
    return {
    }
  },
  components:{},
  mounted(){
   console.log('111')
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/nest/nest.scss';
</style>
