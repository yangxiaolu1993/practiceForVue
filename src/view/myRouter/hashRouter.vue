<template>
  <div class="hash-router">
      
    <my-router-view></my-router-view>
    <div class="footer">
        <my-router-link to="home">首页</my-router-link>
        <my-router-link to='classify'>分类</my-router-link>
        <my-router-link to='cart'>购物车</my-router-link>
        <my-router-link to='my'>我的</my-router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HashRouter',
  data () {
    return {
      
    }
  },
  beforeCreate(){
    console.log('hash router  beforeCreate')
  },
  mounted(){
   console.log(this.$myRoute)
  },
  methods:{

   
  }
}
</script>


<style lang="scss" scoped>
.hash-router{
    width: 100%;
    height: 100%;
    background:rgba(242,243,243,1);
}
.footer{
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 50px;
    background: #fff;
}
</style>

