<template>
    <div class="leetcode-code1">
      <h3>leetcode code1 </h3>
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
    /**
     * leetcode 1:两数之和
     * 哈希表（散列表）
     */
    solve(nums,target){
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
    },
    
  }
};
</script>

<style lang="scss"></style>
