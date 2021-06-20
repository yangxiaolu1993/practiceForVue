var nameLc = 'test';
var demoModel = function (nameLc) {
  var temp = {
    vue: `<template>
    <div class="leetcode leetcode-${nameLc}">
      <h3>leetcode ${nameLc} </h3>
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
    
  }
};
</script>

<style lang="scss">
@import '_scss/leetcode/index.scss';
</style>
`
};

  return temp;
};
module.exports = demoModel;
