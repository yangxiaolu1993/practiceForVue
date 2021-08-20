<template>
  <div class="home-page">
    <h3>开始你的表演吧！</h3>
    <div class="group">
      <div
        class="group-list"
        v-for="(item, i) in list"
        :key="i"
        @click="jump(item)"
      >
        <div class="img">
          <img :src="require(`../assets/image/${item.icon}`)" alt="" />
        </div>
        <div class="content">
          <div class="title">{{ item.title }}</div>
          <div class="desc">{{ item.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CurrentEnv from "../util/judgeEnv";
import connectData from "../util/cycle";
export default {
  name: "HelloWorld",
  data() {
    return {
      list: [
        {
          id: "6",
          title: "hash 路由",
          desc: "手写路由 ",
          route: "hashRouter",
          icon: "6.jpg",
        },
      ],
      demo: {
        title: "商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名",
        price: "199",
        linePrice: "499",
        image:
          "https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png",
      },

      data1: {
        next: {
          HotRecommendSku01: {
            name: "商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名",
            price: "199",
            linePrice: "499",
            image:
              "https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png",
          },
          HotRecommendSku02: {
            name: "商品名称商品名称商品名称商品名商品名称商品名称商品名称商品名",
            price: "199",
            linePrice: "499",
            image:
              "https://img13.360buyimg.com/imagetools/jfs/t1/187069/1/12933/53695/60ebdc8fE7eb3f940/025a9af6e3289dd0.png",
          },
        },
      },
    };
  },
  mounted() {
    this.dealDate();
  },
  methods: {
    jump(obj) {
      if (obj.route != "") {
        this.$router.push({
          name: obj.route,
        });
      }
    },

    // getEnv
    getEnv() {
      let currentEnv = new CurrentEnv();

      currentEnv.get().then((scene) => {
        // console.log('当前场景:',scene)
      });
    },

    // 进行数据处理
    dealDate() {
      //查找对象属性
      var obj2 = { class: { teacher: { name: "Li" } } };
      //Li
      console.log(this.find(this.data1, "next.HotRecommendSku01.name"), obj2);
    
      // console.log(
      //   "处理后的数据",
      //   connectData(this.data1, { cName: ["next.HotRecommendSku01.name"] })
      // );

      const a = "next.HotRecommendSku01"

      let b = new Map()
      b.set(next.HotRecommendSku01,true)
      // console.log()
      for(let key of b.keys()){
        console.log(key)
        console.log(this.data1.hasOwnProperty(key))
      }
    },

    find(object, path) {
      var props = path.split(".");
      for (var i = 0; i < props.length; i++) {
        var p = props[i];
        if (object && object.hasOwnProperty(p)) {
          object = object[p];
        } else {
          return undefined;
        }
      }
      return object;
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../../src/assets/css/home/home.scss";
</style>

