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
    let nums = [1,1,2]
    let len = this.code26(nums)
    console.log('长度',len)
    for(let i = 0;i<len;i++){
      console.log(nums[i])
    }
  },

  methods:{
    /**
     * leetcode 26:删除有序数组中的重复项
     * 结题思路：双指针
     */
    code26(nums){
      if(nums.length == 0|| nums.length == 1) return nums.length

      let pi = 0
      let pj = 0
      while(pj < nums.length){
        console.log(nums[pi],nums[pj])
        if(nums[pi] != nums[pj]){
          pi += 1
          nums[pi] = nums[pj] 
        } 
        pj += 1
      }


      return pi+1
    },
    /**
     * leetcode 1:两数之和
     * 哈希表（散列表）
     */
    code1(nums,target){
      let pi = 0
      let pj = 1

      while(pi < nums.length){
        if(nums[pi]+nums[pj] == target){
          return [pi,pj]
        }

        if(pj < nums.length){
          pj+=1
        } else {
          pi += 1
          pj = pi +1
        }

      }

      return []
    }
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