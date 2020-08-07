<template>
    <div class="demo">
        
        <div id="gaode"></div>
    </div>
</template>

<script>

export default {
  name: 'GaoDe',
  data () {
    return {
        getLongitude : 0, // 经纬度
        getLatitude : 0 // 经纬度    
    }
  },
  mounted(){ 
    this.getCurrentPosition()
  },
  methods:{
    getCurrentPosition(){
        let mapObj = new AMap.Map('gaode', {})
        let geolocation;
        mapObj.plugin(['AMap.Geolocation'], function () {
            geolocation = new AMap.Geolocation({
                enableHighAccuracy: true,//是否使用高精度定位，默认:true
                timeout: 60000,          //超过10秒后停止定位，默认：无穷大
                maximumAge: 0,           //定位结果缓存0毫秒，默认：0
                convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
                showButton: false,        //显示定位按钮，默认：true
                buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
                buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                showMarker: false,        //定位成功后在定位到的位置显示点标记，默认：true
                showCircle: false,        //定位成功后用圆圈表示定位精度范围，默认：true
                panToLocation: false,     //定位成功后将定位到的位置作为地图中心点，默认：true
                zoomToAccuracy:false,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                useNative:true
            });
            mapObj.addControl(geolocation);
            geolocation.getCurrentPosition();
            AMap.event.addListener(geolocation, 'complete', function(res){
                console.log(res)
            });//返回定位信息
            AMap.event.addListener(geolocation, 'error', function(err){
                console.log(err)
            });      //返回定位出错信息
        })
    }
  }
}

</script>

<style lang="scss" scoped>
.demo{
    #gaode{
        width: 100%;
        height: 300px;
    }
}
</style>