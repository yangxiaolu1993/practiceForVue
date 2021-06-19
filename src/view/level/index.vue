<template>
  <div class="home">
    <h2>自定义npm引用</h2>

    <div>
      数据结构常用的类型：数组、栈、队列、链表、树、图、堆、散列标
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      arr:[1,2,3,4]
    }
  },
  mounted(){
    let nums = [-1,-1,-1,-1,-1,-1]

    let res = this.pivotIndex(nums)
    console.log(res)

  },

  methods:{
    pivotIndex (nums) {
      let res = -1
      let prevNum = 0
      for(let i=0;i<nums.length;i++){
          if(i>0) prevNum += nums[i-1]
          
          let lasetNum = 0
          for(let x = i+1;x<nums.length;x++){
              lasetNum += nums[x]
              if(lasetNum == prevNum){
                  res = i
                  break;
              } 
          }
      }

      return res
  },

    
  }

}
</script>

<style lang="scss" scoped>
@import '@/assets/css/algorithm/algorithm.scss';
</style>


<style scoped>
h2{
  margin: 10px 0;
}
</style>