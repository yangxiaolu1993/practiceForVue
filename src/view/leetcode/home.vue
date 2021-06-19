<template>
  <div class="leetcode">
    <h3 class="title">LeetCode 解题练习</h3>

    <div class="desc">
      数据结构常用的类型：数组、栈、队列、链表、树、图、堆、散列标
    </div>

    <div class="mainList">
      <template v-for="(item, index) in list">
        <nut-cell
          :key="index"
          :title="item.title"
          :desc="item.desc || '描述文字'"
          :to="item.route"
        >
          <div slot="sub-title">
            <nut-rate
              :size="10"
              :spacing="2"
              value="0"
              :total="item.difficulty"
              :readOnly="true"
            >
            </nut-rate>
          </div>
        </nut-cell>
      </template>
    </div>
  </div>
</template>

<script>
import LeetCodeList from "../../../configToLC/config";
export default {
  name: "LeetCode",
  data() {
    return {
      list: LeetCodeList,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.leetcode {
  padding: 10px;
  .desc {
    margin-top: 10px;
    font-size: 12px;
  }
  .title {
    text-align: center;
  }
  .mainList {
    margin-top: 10px;
  }
}
</style>
