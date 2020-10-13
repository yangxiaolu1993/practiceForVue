<template>
  <div class="regular">
    <div class="title">正则表达式</div>
    <p class="desc">正则表达式有表达式和子表达式的区分，使用()标记子表达式的开始和结束。【】标记中括号表达式</p>

    <div class="group">
      <div class="sub-title">一、区分参数 g（global）,i（ignore）,m()</div>
      <div class="sub-desc">
        <p>参数 g :主要影响 3 个方法</p>
        <p>1、影响 exec、match 方法</p>
        g:global
        若不指定 g，则：每次调用 exec 都只返回第一个匹配；match 也是只返回第一个匹配。</br>
        若指定 g，则：每次调用 exec 都从上一个匹配之后查找新的匹配；match 则是返回所有的匹配

        <p>2、影响 string 的 replace 方法，指定 g 表示全局替换。</p>

        let str = 'spac00sdacsdbfac' </br>
        let reg1 = /(ac)/g </br>
        let reg2 = /(ac)/ </br>
        console.log(str.match(reg1)) // ['ac','ac','ac'] </br>
        console.log(str.replace(reg2,'$1+')) // spac+00sdacsdbfac

        <p>参数 i :是否忽略大小写</p>
        let str = 'sapdb0SAP00'  </br>
        console.log(str.replace(/(sap)/gi,'$1++')) // sap++db0SAP++00 </br>
        console.log(str.replace(/(sap)/g,'$1++')) // sap++db0SAP00 </br>
      </div>
    </div>
    <div class="group">
      <div class="sub-title">集合：[] 定义</div>
      <div class="sub-title">区间：- 定义</div>
      <div class="sub-title">捕获组与非捕获组</div>
      捕获组与非捕获组主要的是用在子表达式中(),子表达式有一个特点：在字符串中匹配到子表达式中的内容后，那么就捕获到了子表达式中的内容，之后的匹配可以再使用。这就是捕获组的概念。

      非捕获组就是与其相反的，当在字符串中捕获到子表达式的内容后，并不保存在内容中，之后的匹配是无法使用的。

      非捕获组跟匹配没啥关系，只是为了提高效果，减少内存浪费。
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      parseFlags:{
        HH: [/\d\d?/, function (d, v) {
            d.hour = v;
        }],
        mm: [/\d\d?/, function (d, v) {
            d.minute = v;
        }],
        ss: [/\d\d?/, function (d, v) {
            d.second = v;
        }],
      }
    }
  },
  mounted(){
    // 参数 g
    this.divide()
    // 区分大小写
    this.letter()

    // * 和 + 
    this.greed()
    // 实例分析
    // this.liveExam()

    this.parseTime()
  },
  methods:{
    
    // 分组
    divide(){
      let str = 'spac00sdacsdbfac'
      let reg1 = /(ac)/g
      let reg2 = /(ac)/
      console.log(str.match(reg1)) // ['ac','ac','ac']
      console.log(str.replace(reg2,'$1+')) // spac+00sdacsdbfac
    },
    // 区分大小写
    letter(){
      let str1 = 'sapdb0SAP00'
      console.log(str1.replace(/(sap)/gi,'$1++'))

      var str = 'scq000'
      console.log(str.replace(/(scq00)(?:0)/, '$1,$2'))
    },
    // 实例解析
    liveExam(){
      // 1、获取 URL 参数
      /**
       * 应用场景：
       */
      let name= 'cookie'
      let reg1 = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
      
      // 2、字符串截取前4个字，之后省略号代替
      let str = '打死发你j'
      let reg = new RegExp(/^(.{4})(?:.+)$/)
      console.log(str.replace(reg,'$1....'))

      // 3、转化成驼峰命名
      let str3 = 'get-element-bu-id'

      console.log(str3.replace(/-\w/g,'$0'))

      console.log(str3.replace(/(-\w)/g,'$1'))

      console.log(str3.replace(/-\w/g,function($0){
        console.log($0)
        return $0.slice(1).toUpperCase()
      }))

      console.log(str3.replace(/(-\w)/g,function($1){
        console.log($1)
        return $1.slice(1).toUpperCase()
      }))

      /**
       * 4、非0的十进制数
       * 
       * 解析为：至少有一个数字，但是不能以0开头
       */
      let str4 = '800'
      let reg4 = new RegExp(/^[1-9][0-9]*$/g)
      console.log(reg4.test(str4))

      /**
       * 5、分割数字 - 每三个以一个逗号划分
       */

      let str5 = '132784437erew5357'
      
      let reg5 = new RegExp(/(.{3})/g)  // 字符串
      // let reg5 = new RegExp(/(\d{3})/g) // 数字

      console.log(str5.match(reg5))
      console.log(str5.replace(reg5,'$1,'))
    },
    //限定符 * 和 + 是贪婪的
    greed(){
      // let str = 'sdiavavbav'
      // let reg1 = /(av)+?/g

      let str = '<span>Hello</span>'
      let reg1 = /<.*?>/g

      console.log('贪婪匹配')
      console.log(str.match(reg1))
    },
    
   
    parseTime(){
     const that = this
      var token = /d{1,4}|M{1,4}|yy(?:yy)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
      let str = '03秒09'
      let format = 'mm:ss'
      let dateInfo = {}

  
      
      format.replace(token,function($0){
        var info = that.parseFlags[$0]
        var index = str.search(info[0])
        str.replace(info[0], function (result) {
            console.log(result)
            info[1](dateInfo, result);
            str = str.substr(index + result.length);
            return result;
        });
        return $0
      })

      console.log(dateInfo)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/regular/regular.scss';
</style>
