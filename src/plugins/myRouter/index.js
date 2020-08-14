
import MyRouter from './myRouter'
import MyRouterLink from './routerLink'
import MyRouterLinkT from './routerView/routerLink.vue'

MyRouter.install = function(Vue,options){

    Vue.mixin({
        beforeCreate(){
            // console.log('全局混入 beforeCreate')
            if (this.$options && this.$options.myRouter){ 
                // 如果是根组件
                this._myRouter = this.$options.myRouter;
            }else { 
                //如果是子组件
                this._myRouter= this.$parent && this.$parent._myRouter
            }
            
            // 利用 Vue defineReactive 监听当前路由的变化
            Vue.util.defineReactive(this._myRouter,'current')
            
            // 为当前实例添加 $route 属性
            Object.defineProperty(this,'$myRoute',{
                get(){
                    
                    let current = this._myRouter.current
                    let currentRouter = this._myRouter.routes.filter(item=>{ 
                        return item.path == current
                    })
                   
                    return currentRouter[0]
                }
            })
        }
    })

    // 自定义组件 - <my-router-view>
    Vue.component("MyRouterView",{
        render(h){
          
            let currentRoute = this._self._myRouter.current
            let routesMap = this._self._myRouter.routesMap
            return h(routesMap[currentRoute])
        }
    })
    // 自定义组件 - <my-router-link>
    Vue.component(MyRouterLink.name, MyRouterLink)

    // template 形式
    // Vue.component(MyRouterLink.name, {
    //     functional: true,
    //     attrs: {
    //         to: {
    //             type: String,
    //             required: true
    //         }
    //     },
    //     render(createElement, { data, children }) {
    //         data.attrs.to = `#/${data.attrs.to}`
    //         return createElement( MyRouterLinkT, data, children );
    //     }
    // })
}

export default MyRouter