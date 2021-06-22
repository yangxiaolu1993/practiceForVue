<template>
    <div class="leetcode leetcode-code5">
      <h3> leetcode code5：最长回文子串</h3>
      <div>
        描述：
      </div>
      <div>给你一个字符串 s，找到 s 中最长的回文子串。</div>
    </div>
</template>
<script>
export default {
  name: "LeetCode",
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    let s = "babad"
    console.log(this.solve(s))
  },
  methods: {
    solve(s){
      let n1 = 0
      let n2 = 1
      let maxL = 0
      let x = 0
      while(n1<s.length && x<50){
        console.log(s[n2],s[n1],n2,n1)
        if(s[n2] == s[n1]){
          maxL = Math.max(n2 - n1+1,maxL)
          n1 += 1
          n2 = n1+1

        } else {
          if(n2 < s.length - 2){
            n2 += 1
          } else {
            n1 += 1
            n2 = n1+1
          }
          
        }


        x+=1
      }

      return maxL
    }
  }
};
</script>

<style lang="scss">
@import '_scss/leetcode/index.scss';
</style>
