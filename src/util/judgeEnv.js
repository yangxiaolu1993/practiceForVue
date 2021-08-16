
/**
 * 获取当前环境
 */
 export default class CurrentEnv {
    constructor(userAgentKeys){
        this.uaKeys = userAgentKeys // 根据用户传入的 UA 判断当前环境
        this.env = '' // mini 微信小程序 h5 内嵌H5（包括：微信浏览器、各端浏览器、微信公众号）
    }
    // 获取客户端：安卓、ios、PC端
    getClient(){
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                return 'iOS'
        } else if (/(Android)/i.test(navigator.userAgent)) {
                return 'Android'
        } else {
                return 'PC'
        }
    }

    // 根据 UA 判断当前环境（终端） 
    getForUAKeys(){
        if(this.uaKeys) return false

        let _userAgent = navigator.userAgent

        if(~~(_userAgent.indexOf(this.uaKeys))){
            return true
        } else {
            return false
        }
    }   

    // 获取当前所在环境
    get(){
        let client = this.getClient()
        if(client.toLowerCase == 'pc'){
            return 'pc'
        }

        console.log(navigator.userAgent)

        const ua = navigator.userAgent.toLowerCase().match(/MicroMessenger/gi)

        return new Promise((resolve,reject)=>{

            //当前不是微信环境（微信小程序、微信公众号）
            if(ua && ua[0] === 'micromessenger'){
                this.isWeChatMiniprogram().then(res=>{
                    resolve({'scene':res})
                })
            } else {
                resolve({'scene':'h5'})
            }

        })
        
        
    }

    // 判断当前是否为小程序环境
    isWeChatMiniprogram(){
        return new Promise((resolve,rej)=>{
            if(window.wx && wx.miniProgram){
                wx.miniProgram.getEnv(res=> { 
                    try{
                        if(res && res.miniprogram){
                            console.log('微信小程序');
                            resolve('miniprogram')
                        }else{
                            resolve('WeChat')
                        }
                        
                    } catch(err) {
                        // 微信公众号中 wx.miniProgram.getEnv 无返回值
                        console.log('微信浏览器，及微信公众号')
                        resolve('WeChat')
                    }
                })
                
            } else {
                console.log('微信浏览器')
                resolve('WeChat')
            }
            
        })
    }
}
