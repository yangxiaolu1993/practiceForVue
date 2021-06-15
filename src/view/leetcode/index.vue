<template>
  <div class="leetcode">
    <h3>LeetCode 解题练习</h3>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'LeetCode',
  data () {
    return {
      data:[
           
        ]
    }
  },
  mounted(){
    let res = this.code20('{[]}')
    // console.log(res)
  },
  methods:{
      /** 提号 20 */
    code20(s){
        // 数组如果是基数的话，直接返回false
        if(s.length % 2 == 1) return false  
        let valid = []
        for(let i=0;i<s.length;i++){
            const custom = s[i]
            const prev = valid[valid.length-1]
            if(custom == '(' || custom=='{' || custom=='['){
                valid.push(custom)
            } else if(
                (custom == ')' && prev == '(') || 
                (prev == '{' && custom=='}') || 
                (prev == '[' && custom==']')
                ){
                valid.pop()
            } else {
                return false
            }
        }

        return valid.length == 0

    }
  }
  

}
</script>

<style lang="scss" scoped>
@import '@/assets/css/algorithm/algorithm.scss';
</style>


<style lang="scss">
    .leetcode{
        padding: 10px;
    }
</style>