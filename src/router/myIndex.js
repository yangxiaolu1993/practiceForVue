import Vue from 'vue'
import myRouter from '../plugins/myRouter/install'

import Home from '../view/myRouter/view/home'
import Cart from '../view/myRouter/view/cart'
import Classify from '../view/myRouter/view/classify'
import My from '../view/myRouter/view/my'

Vue.use(myRouter)

const routes = [
    { path: '/home',name: 'home',component: Home,meta:{title:'首页'} }, // 首页
    { path: '/cart',name: 'cart',component: Cart,meta:{title:'首页'} }, // 购物车
    { path: '/classify',name: 'classify',component: Classify,meta:{title:'首页'} }, // 分类
    { path: '/my/:userId',name: 'my',component: My,meta:{title:'首页'} }, // 我的
]

const router = new myRouter({
    routes
})

export default router