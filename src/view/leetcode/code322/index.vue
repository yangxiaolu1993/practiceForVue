<template>
    <div class="leetcode leetcode-code322">
      <h3 class="leetcode-tip">LC 322:零钱兑换</h3>

      <div class="lc-chunk">
        <div class="chunk-title">描述</div>
        <div>
            给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。</br>

            你可以认为每种硬币的数量是无限的。
        </div>

        <div class="chunk-title">示例</div>
        <div>
          输入：coins = [1, 2, 5], amount = 11  </br>
          输出：3 
        </div>

        <div class="chunk-title">参考链接</div>
        <div>
          https://blog.csdn.net/qq_37479128/article/details/89178058
        </div>


        <div class="chunk-title">延伸</div>

        <div>深度优先遍历：采用堆栈的形式，先进后出</div>
        <div>广度优先遍历：采用队列的形式，先进先出</div>
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
    
    // 实例一
    let coins1 = [83,186,419,408]
    let amount1 = 6249

    // 实例二
    let coins = [1, 2, 5]
    let amount = 11

    let res = this.dpFun(coins1,amount1)

    console.log(res)
  },
  methods: {
    /**
     * 方案一：LeetCode 通过，但结果并不好
     * 思路：参考【https://blog.csdn.net/qq_37479128/article/details/89178058】
     */
    getAllWays(coins,amount){
      let T = []
      for(let i=0;i<coins.length;i++){
          T[i] = []
        for(let j=0;j<=amount;j++){

          if(j==0){
            T[i][j] = 0
            continue;
          }
          
          if(i == 0){
            if(coins[i] > j){
                T[i][j] = -1
            } else{
              let a = j/coins[i]
              T[i][j] = Math.round(a) == a?a:-1
            }
            
          } else {
            if(j<coins[i]){
              T[i][j] = T[i-1][j]
            }else{
              if(T[i-1][j] != -1 && T[i][j-coins[i]] != -1){
                T[i][j] = Math.min(T[i-1][j],T[i][j-coins[i]]+1)
              } else {
                if(T[i-1][j] == -1) T[i][j] = T[i][j-coins[i]]+1

                if(T[i][j-coins[i]] == -1) T[i][j] = T[i-1][j]
              }
            }
          }
        }
      }
      const result = T[coins.length-1][amount]
      return result
    },
    /**
     * 方案二：在方案一的基础上加入’缓存策略‘，这种技巧成为记忆化
     * 思路：参考【https://blog.csdn.net/qq_37479128/article/details/89178058】
     */
    getAllWaysCache(coins,amount){
      let T = []

      let cache = []
      
      for(let i=0;i<coins.length;i++){
          T[i] = []
        for(let j=0;j<=amount;j++){

          if(j==0){
            T[i][j] = 0
            continue;
          }
          
          if(i == 0){
            if(coins[i] > j){
                T[i][j] = -1
            } else{
              let a = j/coins[i]
              T[i][j] = Math.round(a) == a?a:-1
            }
            
          } else {
            if(j<coins[i]){
              T[i][j] = T[i-1][j]
            }else{
              if(T[i-1][j] != -1 && T[i][j-coins[i]] != -1){
                T[i][j] = Math.min(T[i-1][j],T[i][j-coins[i]]+1)
              } else {
                if(T[i-1][j] == -1) T[i][j] = T[i][j-coins[i]]+1

                if(T[i][j-coins[i]] == -1) T[i][j] = T[i-1][j]
              }
            }
          }
        }
      }
      const result = T[coins.length-1][amount]
      return result
    },

    /**
     * 方案三：动态规划
     */
    dpFun(coins, amount){
      let dp = new Array( amount + 1 ).fill( Infinity );
        dp[0] = 0;
        
        for (let i = 1; i <= amount; i++) {
          for (let coin of coins) {
            if (i - coin >= 0) {
              dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
          }
        }
        
        return dp[amount] === Infinity ? -1 : dp[amount];
    }
  }
};
</script>

<style lang="scss">
@import '_scss/leetcode/index.scss';
</style>
