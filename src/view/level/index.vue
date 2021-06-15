<template>
  <div class="home">
    1234
    
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      data:[
           
        ]
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
  }
  }
  

}
</script>

<style lang="scss" scoped>
@import '@/assets/css/algorithm/algorithm.scss';
</style>
