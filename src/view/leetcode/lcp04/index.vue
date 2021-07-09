<template>
    <div class="leetcode leetcode-LCP04">
      <h3 class="leetcode-tip">LCP04:覆盖</h3>

      <div class="lc-chunk">
        <div class="chunk-title">描述</div>
        <div>
          你有一块棋盘，棋盘上有一些格子已经坏掉了。你还有无穷块大小为1 * 2的多米诺骨牌，你想把这些骨牌不重叠地覆盖在完好的格子上，请找出你最多能在棋盘上放多少块骨牌？这些骨牌可以横着或者竖着放。<br/>

          输入：n, m代表棋盘的大小；broken是一个b * 2的二维数组，其中每个元素代表棋盘上每一个坏掉的格子的位置。<br/>

          输出：一个整数，代表最多能在棋盘上放的骨牌数。<br/>
        </div>

        <div class="chunk-title">示例</div>
        <div>
          输入：n = 2, m = 3, broken = [[1, 0], [1, 1]] <br/>
          输出：2 <br/>
          解释：我们最多可以放两块骨牌：[[0, 0], [0, 1]]以及[[0, 2], [1, 2]]。（见下图） <br/>

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
    
  }
};
</script>

<style lang="scss">
@import '_scss/leetcode/index.scss';
</style>
