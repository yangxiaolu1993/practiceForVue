
import MyRouter from './myRouter'

MyRouter.install = function(Vue,options){
    Vue.myGlobalMethod = function () {
       console.log('全局方法')
    }
    Vue.prototype.$myMethod = function (methodOptions) {
        return '自定义方法'
    }
}

export default MyRouter