

<template>
  <div class="linked">
    <h3>链表</h3>
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