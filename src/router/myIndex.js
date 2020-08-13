import Vue from 'vue'
import myRouter from '../components/myRouter'

import Home from '../view/myRouter/view/home'
import Cart from '../view/myRouter/view/cart'
import Classify from '../view/myRouter/view/classify'
import My from '../view/myRouter/view/my'

Vue.use(myRouter)

const routes = [
    { path: '/home',name: 'Home',component: Home,meta:{title:'首页'} }, // 首页
    { path: '/cart',name: 'Cart',component: Cart,meta:{title:'首页'} }, // 购物车
    { path: '/classify',name: 'Classify',component: Classify,meta:{title:'首页'} }, // 分类
    { path: '/my',name: 'My',component: My,meta:{title:'首页'} }, // 我的
]

const router = new myRouter({
    routes
})

export default router