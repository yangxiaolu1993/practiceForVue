<template>
  <div class="nav">
    <ul>
        <li>首页</li>
        <li>购物车</li>
        <li>导航</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'headerNav',
  data () {
    return {
    }
  },
  mounted(){
   console.log('222')
  },
  beforeRouteUpdate(to, from, next){
    console.log('当前路由更新')
    console.log(to,from)
    next()
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
ul{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 5px;
    margin-bottom: 20px;
    font-size: 12px;

    li{
        // font-size: 14px;
    }
}
</style>
