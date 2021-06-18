<template>
  <div class="leetcode">

    <h3 class="title">LeetCode 解题练习</h3>

    <div class="mainList">
      <nut-cell title="题号 20" desc="描述文字" to="/code20"></nut-cell>
      <nut-cell title="题号 20" desc="描述文字" to="/code20"></nut-cell>
      <nut-cell title="题号 20" desc="描述文字" to="/code20"></nut-cell>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'LeetCode',
  data () {
    return {
      data:[
           
        ]
    }
  },
  mounted(){
  },
  methods:{
      
  }
}
</script>

<style lang="scss" scoped>
.leetcode{
    padding: 10px;
    .title{
      text-align: center;
    }
    .mainList{
      margin-top: 10px;
    }
}
</style>
