<template>
    <div class="demo">
        
        <div class="box"> 
            <span>经度 {{getLongitude}}</span>
            <span>纬度 {{getLatitude}}</span>
        </div>
       
        <!-- H5 获取经纬度 -->
        <iframe id="mainIframe" src="javascript:(function(){if(window.navigator.geolocation){window.navigator.geolocation.getCurrentPosition(function(position){window.getLongitude = position.coords.longitude;window.getLatitude = position.coords.latitude;window.top.postMessage('success','*')},function(err){console.log('不支持');window.top.postMessage('error','*')},{enableHighAccuracy : true, maximumAge : 30000, timeout :12000})}})()" style="display:none;"></iframe>
     
    </div>
</template>

<script>

export default {
  name: 'H5',
  data () {
    return {
        getLongitude : 0, // 经纬度
        getLatitude : 0 // 经纬度    
    }
  },
  mounted(){ 
      // 监听 iframe postmessage传值
    window.addEventListener('message', this.handleIframeMessage);
  },
  methods:{
    // 用于监听浏览器弹起的位置授权，用户点击完成
    handleIframeMessage (e) {
        
        if(e.data == 'success'){
            let iframeWin = window.frames['mainIframe'].contentWindow
            this.getLongitude = iframeWin.getLongitude
            this.getLatitude = iframeWin.getLatitude
        } 
    }
  }
}

</script>

<style lang="scss" scoped>
.demo{
    padding: 20px;
    .box{
        display: flex;
        flex-direction: column;
        font-weight: bold;
        font-size: 16px;
    }
}
</style>