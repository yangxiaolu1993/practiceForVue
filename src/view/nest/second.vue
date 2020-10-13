<template>
  <div class="nest">
      三级路由
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
   
   let matched = this.$route.matched
   
   let componentsMap = matched.map(m=>{
     return m.components
   })

   Object.keys(componentsMap[0]).map(key=>{
     
     console.log(componentsMap[0][key].options)
   })
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/nest/nest.scss';
</style>
