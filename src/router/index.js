import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/view/home'
import Rgba from '@/view/regular'
import Nest from '@/view/nest'
import NestFirst from '@/view/nest/first.vue'
import NestSecond from '@/view/nest/second.vue'
import NestThird from '@/view/nest/third.vue'
import Algorithm from '@/view/algorithm/algorithm.vue'
import Position from '@/view/position/index.vue'
import H5 from '@/view/position/h5.vue'
import GaoDe from '@/view/position/gaode.vue'
import HashRouter from '@/view/myRouter/hashRouter.vue'
import HeaderNav from '@/view/nest/headerNav.vue'

Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {path: '/',name: 'Home',component: Home,meta:{title:'首页'}}, // 首页
    {path: '/rgba',name: 'rgba',component: Rgba,meta:{title:'正则表达式'}}, // 正则表达式
    {
      path: '/nest',
      name: 'nest',
      component: Nest,
      
      meta:{title:'嵌套路由'},
      children:[{
        path:'first',
        name:'first',
        // component:NestFirst,
        components: {
          headernav:HeaderNav,
          nest:NestFirst
        },
        children:[{
          path:'second',
          name:'second',
          component:NestSecond,
        }]
      }]
    },  // 嵌套路由
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
    {path: '/hashRouter',name: 'hashRouter',component: HashRouter,meta:{title:'hash 路由'}},  // 手写路由 hash
  ]
})

router.beforeEach((to,from,next)=>{
  
  document.title = to.meta.title
  next()
  
})

export default router