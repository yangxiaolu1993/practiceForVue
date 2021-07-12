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

          输入：n = 3, m = 3, broken = []
          输出：4
          解释：下图是其中一种可行的摆放方式

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
    /**
      * 限制
      * 1 <= n <= 8
      * 1 <= m <= 8
      * 0 <= b <= n * m
     */
    // let n = 2, m = 3, broken = [[1, 0], [1, 1]];
    // let n = 2, m = 3, broken = [[1, 1], [1, 2]];

    let n=8,m=8,broken = [[1, 0], [2, 5], [3, 1], [3, 2], [3, 4], [4, 0], [4, 3], [4, 6], [4, 7], [5, 3], [5, 5], [5, 6], [6, 3], [7, 2], [7, 7]]

    this.solve(n,m,broken)
  },
  methods: {
    solve(n, m, broken){
      // 将破损数组重新排列
      let tranBroken = new Set()

      broken.forEach(item=>{
        tranBroken.add(`${item[0]}&${item[1]}`)
      })
      
      let  compare = (n,m)=>{
        let group = new Set()
        let num = 0

         for(let i=0;i<n;i++){
        
            let j = 0
            while(j<m){
              let current = `${i}&${j}` 
              // console.log(current,group)
              let nextL = j+1<m?`${i}&${j+1}`:null  // 下一个  横向 
              let nextP = i+1<n?`${i+1}&${j}`:null  // 下一个  纵向

              if(tranBroken.has(current) || group.has(current)){
                ++j
              } else {
                // 优先比较横向
                if(nextL && !tranBroken.has(nextL) && !group.has(nextL)){
                  group.add(current)
                  group.add(nextL)
                  ++num
                } else {
                  if(nextP && !tranBroken.has(nextP)){
                    group.add(current)
                    group.add(nextP)
                    ++num
                  } 
                }
                j += 2

                
              }
            }
            console.log(i,j)
          }

          return num
      }

      console.log('最终结果',compare(n,m),compare(m,n))
    }
  }
};
</script>

<style lang="scss">
@import '_scss/leetcode/index.scss';
</style>
