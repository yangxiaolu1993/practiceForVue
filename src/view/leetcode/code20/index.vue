<template>
  <div class="leetcode leetcode-code20">
    <h3>leetcode code20</h3>
  </div>
</template>
<script>
import {margeArray} from './demo'
export default {
  name: "LeetCode",
  data() {
    return {
      scoreMap: [],
    };
  },
  mounted() {
    /**
     * 合并２个数组相同的数据，代码在 demo.js 中
     */
    margeArray()
  },
  methods: {
    solve(){

    }
  },
};
</script>
  
<style lang="scss">
@import '_scss/leetcode/index.scss';
</style>
  