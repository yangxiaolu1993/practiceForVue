<template>
    <div class="leetcode leetcode-LCP07">
      <h3 class="leetcode-tip">LCP 07:传递信息</h3>

      <div class="lc-chunk">
        <div class="chunk-title">描述</div>
        <div>
          小朋友 A 在和 ta 的小伙伴们玩传信息游戏，游戏规则如下：</br>

          1、有 n 名玩家，所有玩家编号分别为 0 ～ n-1，其中小朋友 A 的编号为 0 </br>
          2、每个玩家都有固定的若干个可传信息的其他玩家（也可能没有）。传信息的关系是单向的（比如 A 可以向 B 传信息，但 B 不能向 A 传信息）。</br>
          3、每轮信息必须需要传递给另一个人，且信息可重复经过同一个人</br>
          给定总玩家数 n，以及按 [玩家编号,对应可传递玩家编号] 关系组成的二维数组 relation。返回信息从小 A (编号 0 ) 经过 k 轮传递到编号为 n-1 的小伙伴处的方案数；若不能到达，返回 0。
        </div>

         <div class="chunk-title">示例</div>
        <div>
          输入：n = 5, relation = [[0,2],[2,1],[3,4],[2,3],[1,4],[2,0],[0,4]], k = 3 </br>
 
          输出：3 </br>

          解释：信息从小 A 编号 0 处开始，经 3 轮传递，到达编号 4。共有 3 种方案，分别是 0->2->0->4， 0->2->1->4， 0->2->3->4。 </br>

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
  mounted() {},
  methods: {
    solve(n, relation, k){
      for(let i = 0;i<n;i++){

        
      }
    }
  }
};
</script>

<style lang="scss">
@import '_scss/leetcode/index.scss';
</style>
