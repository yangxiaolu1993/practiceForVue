

<template>
  <div class="linked leetcode">
    <h3 class="leetcode-tip">图论</h3>

    <div>
        <p>
        二部图（又称二分图）：可以将顶点集 V 划分为2个集合 V1，V2，使得在 V1 中任取两个不同的顶点，之间无边，在V2 中任取两个不同的顶点之间无边，且在V1 中任取一个顶点，在V2 中任取一个顶点，之间有边。
        </p>
      
      <ul>
          <li>图的表示有2中方式：</li>
          <li>1、邻接矩阵：一个二维数组来表示顶点之间的连接，两顶点之间有链接则值为1，反之为0</li>
          <li>2、邻接表：由图中每个顶点的相邻顶点列表组成</li>
      </ul>

      <p>
          判断一个图是否为二分图：染色法，记忆化递归。深度优先遍历(或广度优先遍历)所有顶点并保存前一个顶点的状态pre，对于当前顶点cur，如果cur已经染色且与pre的颜色相同则说明这不是无向图。如果cur未被染色，pre为无色则将cur染成红色否则将cur染成与其不同的颜色。遍历正常结束时说明是无向图。
      </p>
      
    </div>

    
  </div>
</template>

<script>
export default {
  name: "Graph",
  data() {
    return {
      data: [],
    };
  },
  mounted() {
      let vertex = ['A','B','C','D','E','F','G','H','I']
      let edgeGroup = [['A','B'],['A','C'],['A','D'],['C','D'],['C','G'],['D','G'],['D','H'],['B','E'],['B','F'],['E','I']]
      this.createGraph(vertex,edgeGroup)
  },
  methods: {

    /**
     * 使用 JavaScript 存储无向图
     * 
     * 方案一，使用数组存储无向图顶点
     * 使用 Map()
     * 
     * params:vertex 顶点
     * params:edge 边 二维数组
     * 
     * 可以使用 class 类创建
     */
    
    createGraph(vertex,edge){
        let edgeList = new Map()

        for(let i=0;i<vertex.length;i++){
            edgeList.set(vertex[i],[])
        }

        for(let i=0;i<edge.length;i++){
            let v = edge[i][0]
            let w = edge[i][1]

            edgeList.get(v).push(w)
            edgeList.get(w).push(v)  // 因为是无向图，所以也要反过来添加
        }

        console.log(edgeList)
    },
  },
};
</script>

<style lang="scss">
@import '_scss/leetcode/index.scss';
</style>