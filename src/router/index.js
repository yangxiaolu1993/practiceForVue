import Vue from 'vue'
import Vueg  from 'vueg'
import Router from 'vue-router'

import Rgba from '@/view/regular'
import Nest from '@/view/nest'
import NestFirst from '@/view/nest/first.vue'
import NestSecond from '@/view/nest/second.vue'
import Algorithm from '@/view/algorithm/algorithm.vue'
import Position from '@/view/position/index.vue'
import H5 from '@/view/position/h5.vue'
import GaoDe from '@/view/position/gaode.vue'
import HashRouter from '@/view/myRouter/hashRouter.vue'
import HeaderNav from '@/view/nest/headerNav.vue'

import Home from '@/view/home'
import Level from '@/view/level/index.vue'
import Bar from '@/view/level/bar'
import Canvas from '@/view/canvas-dev/index.vue'

import leetCodeRoutes from './leetcode'
import Vant from '@/view/vant/index.vue'
import Animation from '@/view/animation/index.vue'
import HandPromise from '@/view/promise/index.vue'

Vue.use(Router)


let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
      level:1,
      transitionName:''
    }
  },
  {
    path: '/rgba',
    name: 'rgba',
    component: Rgba,
    meta: {
      title: '正则表达式',
      level:2,
      transitionName:''
    }
  },
  {
    path: '/nest',
    name: 'nest',
    component: Nest,

    meta: {
      title: '嵌套路由',
      level:2,
      transitionName:''
    },
    children: [{
      path: 'first',
      name: 'first',
      components: {
        headernav: HeaderNav,
        nest: NestFirst
      },
      children: [{
        path: 'second',
        name: 'second',
        component: NestSecond,
      }]
    }]
  },
  {
    path: '/algorithm',
    name: 'algorithm',
    component: Algorithm,
    meta: {
      title: '排列组合'
    }
  },
  {
    path: '/position',
    name: 'position',
    component: Position,
    meta: {
      title: '位置信息'
    },
    children: [{
      path: 'h5',
      name: 'h5',
      component: H5,
      meta: {
        title: 'H5 获取位置信息'
      }
    }, {
      path: 'gaode',
      name: 'gaode',
      component: GaoDe,
      meta: {
        title: '高德 位置信息'
      }
    }]
  },
  {
    path: '/hashRouter',
    name: 'hashRouter',
    component: HashRouter,
    meta: {
      title: '手写 hash 路由'
    }
  },

  {
    path: '/canvas',
    name:'Canvas',
    component: Canvas,
    meta: {
      title: 'Canvas'
    }
  },{
    path: '/handpromise',
    name:'HandPromise',
    component: HandPromise,
    meta: {
      title: 'HandPromise'
    }
  },{
    path: '/level',
    name:'Level',
    components: {
      default: Level,
      a: Bar,
    }
  },
  {
    path: '/vant',
    name: 'vant',
    component: Vant,
    meta: {
      title: 'Vant 测试',
      level:2,
      transitionName:''
    }
  },

  {
    path: '/animation',
    name: 'animation',
    component: Animation,
    meta: {
      title: 'Vant 测试',
      level:2,
      transitionName:''
    }
  },
]

routes = routes.concat(leetCodeRoutes)


const router = new Router({
  mode: 'history',
  routes
})

  
// Vue.use(Vueg,router,Voptions)


router.beforeEach((to, from, next) => {

  document.title = to.meta.title
  next()

})

export default router
