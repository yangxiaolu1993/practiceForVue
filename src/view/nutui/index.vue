<template>
  <div class="nutui">
    <nut-searchbar
        v-model="val"
        placeText="ERP/姓名/邮箱"
        ref="searchBar"
    ></nut-searchbar>

    <div>
        <Banner>This is @jd Banner</Banner>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bar',
  data () {
    return {
      val:'cesi',
    }
  },
  mounted(){
      this.$nextTick(()=>{
          this.$refs.searchBar.$refs.searchInput.parentElement.action = 'javascript:return true'
      })
      
  },

}
</script>

<style lang="scss" scoped>
@import '@/assets/css/algorithm/algorithm.scss';
</style>
