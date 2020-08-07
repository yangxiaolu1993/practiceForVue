import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'
import Rgba from '@/components/regular'
import Canvas from '@/components/canvas'
import Algorithm from '@/components/algorithm/algorithm.vue'
import Position from '@/components/position/index.vue'
import H5 from '@/components/position/h5.vue'
import GaoDe from '@/components/position/gaode.vue'

Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {path: '/',name: 'Home',component: Home,meta:{title:'首页'}}, // 首页
    {path: '/rgba',name: 'rgba',component: Rgba,meta:{title:'正则表达式'}}, // 正则表达式
    {path: '/canvas',name: 'canvas',component: Canvas,meta:{title:'canvas'}},  // canvas
    {path: '/algorithm',name: 'algorithm',component: Algorithm,meta:{title:'排列组合'}},  // canvas
    {
      path: '/position',
      name: 'position',
      component: Position,
      meta:{title:'位置信息'},
      children:[{
        path: 'h5',
        name: 'h5',
        component: H5,
        meta:{title:'H5 获取位置信息'}
      },{
        path: 'gaode',
        name: 'gaode',
        component: GaoDe,
        meta:{title:'高德 位置信息'}
      }]
    },  // 位置信息
  ]
})

router.beforeEach((to,from,next)=>{
  
  document.title = to.meta.title
  next()
  
})

export default router