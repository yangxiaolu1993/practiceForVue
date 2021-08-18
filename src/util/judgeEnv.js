/**
 * 获取当前环境
 * 
 * return {}
 * 场景 scene : mini - 微信小程序  h5 - 浏览器内嵌H5（包括：微信浏览器、各端浏览器、微信公众号）  ua - 自定义 UA 判断
 * 客户端 client : pc ios android
 * 额外字段 extras : {}  browser WeChat 微信浏览器  
 * 
 */
 export default class CurrentEnv {
    constructor(userAgentKeys) {
      this.uaKeys = userAgentKeys // 根据用户传入的 UA 判断当前环境
      this.env = {
          scene: '',
          client: this.getClient(),
          extras: {
            browser: ''
          }
        },
        this.browser = {}
    }
  
    browserInfo() {
      var u = navigator.userAgent;
      return {
        trident: u.indexOf('Trident') > -1, //IE内核
        presto: u.indexOf('Presto') > -1, //opera内核
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko: u.indexOf('Firefox') > -1, //火狐内核Gecko
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android
        iPhone: u.indexOf('iPhone') > -1, //iPhone
        iPad: u.indexOf('iPad') > -1, //iPad
        webApp: u.indexOf('Safari') > -1 //Safari
      };
    }
    // 获取客户端：安卓、ios、PC端
    getClient() {
        this.browser = this.browserInfo()
      let isPhone = this.browser.mobile || this.browser.ios || this.browser.android || this.browser.iPhone || this.browser.iPad
      if (isPhone) {
        return this.browser.ios?'ios':'android'
      } else {
        return 'pc'
      }
    }
  
    // 根据 UA 判断当前环境（终端） 
    getForUAKeys() {
      if (this.uaKeys) return false
  
      let _userAgent = navigator.userAgent
  
      if (~~(_userAgent.indexOf(this.uaKeys))) {
        return true
      } else {
        return false
      }
    }
  
    // 获取当前所在环境
    get() {
  
      let client = this.getClient()
      let ua = navigator.userAgent
      console.log(ua)
  
      return new Promise((resolve, reject) => {

        if (client.toLowerCase == 'pc') {
            this.env.scene = 'h5'
            return this.env
          }
          
          const uaWeChat = ua.toLowerCase().match(/MicroMessenger/gi)
  
        //当前不是微信环境（微信小程序、微信公众号）
        if (uaWeChat && uaWeChat[0] === 'micromessenger') {
          this.isWeChatMiniprogram().then(res => {
            resolve(this.env)
          })
        } else {
          this.env.scene = 'h5'
          resolve(this.env)
        }
  
      })
  
  
    }
  
    // 判断当前是否为小程序环境
    isWeChatMiniprogram() {
      return new Promise((resolve, rej) => {
        if (window.wx && wx.miniProgram) {
          wx.miniProgram.getEnv(res => {
            try {
              if (res && res.miniprogram) {
                console.log('微信小程序');
                this.env.scene = 'mini'
                this.env.extras.browser = 'miniprogram'
                resolve(true)
              } else {
                this.env.scene = 'h5'
                this.env.extras.browser = 'WeChat'
                resolve(true)
              }
  
            } catch (err) {
              // 微信公众号中 wx.miniProgram.getEnv 无返回值
              console.log('微信浏览器，及微信公众号')
              this.env.scene = 'h5'
              this.env.extras.browser = 'WeChat official account'
              resolve(true)
            }
          })
  
        } else {
          console.log('微信浏览器')
          this.env.scene = 'h5'
          this.env.extras.browser = 'WeChat'
          resolve(true)
        }
  
      })
    }
  }
  