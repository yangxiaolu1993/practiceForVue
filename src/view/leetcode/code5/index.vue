<template>
  <div class="leetcode leetcode-code5">
    <h3 class="leetcode-tip">LC 5：最长回文子串</h3>

    <div class="lc-chunk">
      <div class="chunk-title">描述</div>
      <div>给你一个字符串 s，找到 s 中最长的回文子串。</div>
    </div>

    <div class="lc-chunk">
      <div class="chunk-title">名词解释</div>
      <div>回文子串：字符串正序读的结果与倒序读的结果一样，例如“上海自来水来自海上”</div>
    </div>
    
    <div class="lc-chunk">
      <div class="chunk-title">知识点</div>
      <div>回文子串：字符串正序读的结果与倒序读的结果一样，例如“上海自来水来自海上”</div>
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
    let s = "babad";
    let s1 = "babadcbbd"
    // console.log(s.substring(1, 3));
    console.log(this.solve(s1));
  },
  methods: {
    solve(s) {
      if (s == '') return s;
      let n1 = 0;
      let n2 = 1;
      let maxL = s.substring(n1, 1);

      while (n1 < s.length) {
        if (s[n2] == s[n1]) {
          if (maxL.length < n2 - n1 + 1) {
            maxL = s.substring(n1, n2 + 1);
          }

          n1 += 1;
          n2 = n1 + 1;
        } else {
          if (n2 < s.length - 2) {
            n2 += 1;
          } else {
            n1 += 1;
            n2 = n1 + 1;
          }
        }
      }

      return maxL;
    },
  },
};
</script>

<style lang="scss">
@import "_scss/leetcode/index.scss";
</style>
