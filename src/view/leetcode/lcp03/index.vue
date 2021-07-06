<template>
    <div class="leetcode leetcode-LCP03">
      <h3 class="leetcode-tip">LCP03:机器人大冒险</h3>

      <div class="lc-chunk">
        <div class="chunk-title">描述</div>
        <div>
          力扣团队买了一个可编程机器人，机器人初始位置在原点(0, 0)。小伙伴事先给机器人输入一串指令command，机器人就会无限循环这条指令的步骤进行移动。指令有两种：<br/>

          U: 向y轴正方向移动一格 <br/>
          R: 向x轴正方向移动一格。<br/>
          不幸的是，在 xy 平面上还有一些障碍物，他们的坐标用obstacles表示。机器人一旦碰到障碍物就会被损毁。 <br/>

          给定终点坐标(x, y)，返回机器人能否完好地到达终点。如果能，返回true；否则返回false。 <br/>
        </div>

        <div class="chunk-title">示例</div>
        <div>
          输入：command = "URR", obstacles = [], x = 3, y = 2<br/>
          输出：true<br/>
          解释：U(0, 1) -> R(1, 1) -> R(2, 1) -> U(2, 2) -> R(3, 2)。<br/>
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
    // "RUUR"
    // [[10, 5], [1, 6], [6, 10], [3, 0], [0, 3], [0, 10], [6, 2]]
    // 7856
    // 9033
    
    let command = "URR", obstacles = [], x = 3, y = 2;
    
    console.log(this.solve(command,obstacles, x, y))
  },
  methods: {
    solve(command, obstacles, x, y){

      let cir = 0
      let s = [0,0]
      let nc = [...command]

      while(!(cir > nc.length)){

        s[nc[cir] == 'U'?1:0] += 1
     

        let isDes = obstacles.filter(item=>{
          return s.toString() == item.toString()
        })
        if(isDes.length){
          return false
        }else if(s[0]==x &&s[1]==y){
          return true
        }else{
          cir = cir == nc.length-1?0:cir+1
        }
      }
    }


  }
};
</script>

<style lang="scss">
@import '_scss/leetcode/index.scss';
</style>
