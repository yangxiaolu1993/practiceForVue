<template>
  <div class="nutui">
    <!-- <nutcat-button radius borderColor="#E8220E" color="#E8220E">满199减100</nutcat-button>
    <nutcat-button radius bgColor="#E8220E">商品名称</nutcat-button>
    <nutcat-button radius bgColor="#E8220E" afterIcon="arrow-normal">商品名称</nutcat-button> -->

  <!-- <nutcat-tag type="red-light"><span slot="preSlot">满减</span></nutcat-tag> -->
  
  <textA></textA>

  </div>
</template>

<script>

export default {
  name: 'cat',
  data () {
    return {
      data2: [
        {
          name: '迪奥(Dior)烈艳蓝金唇膏口唇膏口红唇膏口红红红',
          nameRow: '2',
          tag: '源头好物',
          pricePre: '狂欢价',
          linePrice: '2999',
          price: '1999',
          src:
            'https://img10.360buyimg.com/imagetools/jfs/t1/177558/37/13589/47060/60eac554E50949465/6a4f3843f4b7f2bd.png'
        }
      ]
    }
  },

  mounted(){
      
      
  },

  methods:{
      onAddCartClicked() {
        Toast('save');
      },
      onBuyClicked() {
        Toast('delete');
      },
    
  }

}
</script>


