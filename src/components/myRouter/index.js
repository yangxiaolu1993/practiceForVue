
import MyRouter from './myRouter'
import MyRouterView from './routerView'
import MyRouterLink from './routerLink'

MyRouter.install = function(Vue,options){

    Vue.component(MyRouterView.name,MyRouterView)

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