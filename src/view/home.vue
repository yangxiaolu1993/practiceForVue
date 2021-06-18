<template>
  <div class="home-page">
    <h3>开始你的表演吧！</h3>
    <div class="group">
        <div class="group-list" v-for="(item,i) in list" :key="i" @click="jump(item)">
            <div class="img"><img :src="require(`../assets/image/${item.icon}`)" alt=""></div>
            <div class="content">
                <div class="title">{{item.title}}</div>
                <div class="desc">{{item.desc}}</div>
            </div>  
        </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      list:[
        {id:'6',title:'hash 路由',desc:'手写路由 ',route:'hashRouter',icon:'6.jpg'},
        {id:'7',title:'LeetCode',desc:'LeetCode 刷题记录',route:'LeetCode',icon:'1.jpg'},
        {id:'1',title:'Typescript',desc:'TypeScript 在 Vue 中的应用',route:'',icon:'1.jpg'},
        {id:'2',title:'正则表达式',desc:'正则表达式的测试与笔记',route:'rgba',icon:'2.jpg'},
        {id:'3',title:'嵌套路由&&单页面多路由',desc:'嵌套路由：<router-view/> 存在层级关系</br> 单页面多路由：<router-view/> 是并排关系，没有层级关系',route:'nest',icon:'3.jpg'},
        {id:'4',title:'位置信息',desc:'使用第三方 JS api 或者 H5 实现位置经纬度的获取',route:'position',icon:'5.jpg'},
        {id:'5',title:'排列组合',desc:'排列组合，数组',route:'algorithm',icon:'6.jpg'},
        
      ]
    }
  },
  mounted(){
  },
  methods:{

    jump(obj){
      
      if(obj.route != ''){
        this.$router.push({
          name:obj.route
        })
      }
      
    }
  }
}
</script>


<style lang="scss" scoped>
@import '../../src/assets/css/home/home.scss';
</style>

