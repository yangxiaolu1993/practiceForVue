<template>
    <div class="leetcode leetcode-LCP01">
      <h3 class="leetcode-tip">LCP01:猜数字</h3>

      <div class="lc-chunk">
        <div class="chunk-title">描述</div>
        <div>
          小A 和 小B 在玩猜数字。小B 每次从 1, 2, 3 中随机选择一个，小A 每次也从 1, 2, 3 中选择一个猜。他们一共进行三次这个游戏，请返回 小A 猜对了几次？<br/>

          输入的guess数组为 小A 每次的猜测，answer数组为 小B 每次的选择。guess和answer的长度都等于3。<br/>

        </div>

        <div class="chunk-title">示例</div>
        <div>
          输入：guess = [1,2,3], answer = [1,2,3]<br/>
          输出：3 <br/>
          解释：小A 每次都猜对了。<br/>

        </div>
      </div>
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
   console.log(this.solveFilter([1,2,3],[1,2,3])) 
  },
  methods: {
    solve(guess, answer){
      let nums = 0
      for(let i=0;i<3;i++){
        if(guess[i] == answer[i]) nums += 1
      }

      return nums
    },

    solveFilter(guess, answer){
      return guess.filter((item,i)=>item==answer[i]).length
    }
  }
};
</script>

<style lang="scss">
@import '_scss/leetcode/index.scss';
</style>
