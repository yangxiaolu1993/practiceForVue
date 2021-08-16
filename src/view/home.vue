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
import CurrentEnv from '../util/judgeEnv'
export default {
  name: 'HelloWorld',
  data () {
    return {
      list:[
        {id:'6',title:'hash 路由',desc:'手写路由 ',route:'hashRouter',icon:'6.jpg'}
      ]
    }
  },
  mounted(){
    let currentEnv = new CurrentEnv()

    currentEnv.get().then(scene=>{
      console.log('当前场景:',scene)
    })
    //  console.log('当前场景:',scene)
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

