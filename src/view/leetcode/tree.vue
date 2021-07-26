

<template>
  <div class="linked leetcode">
    <h3 class="leetcode-tip">树</h3>

    <div>
        <p>回溯算法</p>
      
      <ul>
          <li>回溯树</li>
          <li>决策树</li>
      </ul>

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
    Array.prototype.remove = function(val) { 
        var index = this.indexOf(val); 
        if (index > -1) { 
        this.splice(index, 1); 
        } 
    };
    
    let a = ['A','B','C','D']

    console.log(this.backTrack(a))
  },
  methods: {

    /**
     * 回溯算法
     * 输出全排列(回溯算法)
     * 思路：
     */
    
    backTrack(list){
        var fullArrange = []
        let bt = (p,list)=>{
            if(p.length == 4){
                fullArrange.push([].concat(p))
            } else {
                for(let j=0;j<list.length;j++){
                    p.push(list[j])
                    let l = list.filter(item=>item!=list[j])
                    bt(p,l)
                    p.remove(list[j])
                }
            }
        }
        
        // for(let i=0;i<list.length;i++){
        //     console.log('循环:',i)
        //     let path = [list[i]]
        //     let chooseList = list.filter(item=>item!=list[i])
        //     bt(path,chooseList)
        // }

        // 将上面注释的代码简化为

        bt([],list)

        return fullArrange
    },
  },
};
</script>

<style lang="scss">
@import '_scss/leetcode/index.scss';
</style>