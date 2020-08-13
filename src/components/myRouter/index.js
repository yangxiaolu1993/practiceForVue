
import MyRouter from './myRouter'
import MyRouterView from './routerView'
import MyRouterLink from './routerLink'

MyRouter.install = function(Vue,options){

    

    Vue.mixin({
        beforeCreate(){
            
            if (this.$options && this.$options.myRouter){ // 如果是根组件
                // this._root = this; //把当前实例挂载到_root上
                this._myRouter = this.$options.myRouter;
            }else { //如果是子组件
                this._myRouter= this.$parent && this.$parent._myRouter
            }
            
            Vue.util.defineReactive(this._myRouter,'current')
            // Object.defineProperty(this,'$router',{
            //     get(){
            //         return this._root._router
            //     }
            // })
        }
    })

    Vue.component("MyRouterView",{
        render(h){
            console.log(this._self._myRouter)
            let currentRoute = this._self._myRouter.current
            let routesMap = this._self._myRouter.routesMap
            return h(routesMap[currentRoute])
        }
    })

    Vue.component('MyRouterLink',{
        props: {
            to: {
              type: String,
              required: true
            }
        },
        render(h){
            return h('a',{
                attrs: {
                    href: `#/${this.to}`
                }
            },this.$slots.default)
        }
    })
}

export default MyRouter