<template>
  <div class="leetcode">

    <h3 class="title">LeetCode 解题练习</h3>

    <div class="mainList">
      <template v-for="(item,index) in list">
          <nut-cell  :key='index' :title="item.title" :desc="item.desc || '描述文字'" :to="item.route"></nut-cell>
      </template>
    </div>
    
  </div>
</template>

<script>
import LeetCodeList from '../../../configToLC/config'
export default {
  name: 'LeetCode',
  data () {
    return {
      list:LeetCodeList
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
