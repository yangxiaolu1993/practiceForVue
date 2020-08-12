<template>
  <div class="home-page">
    <h3>位置信息</h3>
    <div class="group">
        <div class="group-list" v-for="(item,i) in list" :key="i" @click="jump(item)">
            <div class="img"><img :src="require(`../../assets/image/${item.icon}`)" alt=""></div>
            <div class="content">
                <div class="title">{{item.title}}</div>
                <div class="desc">{{item.desc}}</div>
            </div>  
        </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      list:[
        {id:'1',title:'高德地图 JS API',desc:'高德地图 JS API',route:'gaode',icon:'1.jpg'},
        {id:'2',title:'H5 原生 ',desc:'window.navigator.geolocation',route:'h5',icon:'2.jpg'}
      ]
    }
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
@import '../../../src/assets/css/home/home.scss';
</style>

