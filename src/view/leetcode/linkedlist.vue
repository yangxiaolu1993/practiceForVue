

<template>
  <div class="linked">
    <h3>链表</h3>

    <div>
      字符串有很多比较经典的算法问题，例如：
        LIS（最长递增子序列）、
        LCS（最长公共子序列、最长公共子串）、
        LCP（最长公共前缀）、
        LPS（最长回文子序列、最长回文子串）、
        ED（最小编辑距离，也叫 “Levenshtein 距离”）、 
        KMP（一种字符串匹配的高效算法）。
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
    this.linked();
  },
  methods: {
    /**
     * 使用 对象 模拟链表的操作
     */
    linked() {
      let a = { val: "a" };
      let b = { val: "b" };
      let c = { val: "c" };

      a.next = b;
      b.next = c;
        // 输出链表
      console.log(a);

      // 反转链表

        b.next = a

        console.log(b)
        console.log(a)
    },
  },
};
</script>