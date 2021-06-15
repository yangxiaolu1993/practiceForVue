<template>
  <div class="component">
    <h3>Canvas 小例子</h3>

    <!-- 水印 demo -->
    <div>
      <div class="desc">离屏技术：将一个 canvas 对象绘制到另一个 canvas 对象上。</div>
      <ul>
        <li>注意事项：</li>
        <li>1、需要离屏处理，被渲染的 canvas 需要隐藏，即 display:none</li>
        <li>2、注意两个 canvas 的层级关系，即 html 中的先后关系</li>
      </ul>
      
    </div>
    <div class="watermark">
        <canvas ref="watermark-canvas" class="watermark-canvas" style="display:none"></canvas>
        <canvas ref="main-canvas" class="main-canvas"></canvas>
    </div>

  </div>
</template>

<script>
export default {
  name: 'canvas-dev',
  data () {
    return {
    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.init()
    })
  },
  methods:{
    init(){
      const canvas = this.$refs['main-canvas']
      const wmCanvas = this.$refs['watermark-canvas']

      var ctx = canvas.getContext('2d')
      var wmCtx = wmCanvas.getContext("2d")

      /** 为 watermark-canvas 获取的 Context 对象添加水印 */

      /** 设置水印画布的大小 */
      wmCanvas.width = 300
      wmCanvas.height = 100

      wmCtx.font = 'bold 20px Arial'
      wmCtx.lineWidth = '2'
      wmCtx.fillStyle = 'rgba(0 , 0 , 0,0.5)'
      wmCtx.fillText(' --- yangxiaolu ---',50, 50)

      /** 设置 canvas 的图片 */
      var img = new Image()
      img.src = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdnimg103.lizhi.fm%2Faudio_cover%2F2016%2F11%2F18%2F2568884987086251527_580x580.jpg&refer=http%3A%2F%2Fcdnimg103.lizhi.fm&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616921721&t=d8b5c70d4ce88465e8498e9f485367e3'

      img.onload = function () {
        
        canvas.width = img.width
        canvas.height = img.height

        ctx.drawImage(img,0,0)

        ctx.drawImage(wmCanvas,img.width-300,img.height-100)
      }

        
    }

  }
}
</script>


<style lang="scss" scoped>

.component{
  font-size: 14px;
  padding: 10px;

  .desc{
    margin-top: 10px;
  }
  ul{
    li{
      font-size: 12px;
      margin-top: 10px;
    }
  }

}

.watermark{
  margin-top: 10px;

  .main-canvas{
      width: 200px;
      height: 200px;
      border-radius: 10px;
  }

}


</style>

