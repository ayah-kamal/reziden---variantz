<template>
  <div>
      <h3 class = "device">Devices</h3>
      <hr>
      <CRow>
    <CRow class="rowStyle">
        <CCard>
          <h4 class = "title">Lighting</h4>
        <img class = "deviceImage" src="https://www.lightology.com/img/prod/original/71xx-install1.jpg" alt="">
  
   <div class="onoffswitch">
    <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch1" tabindex="0" checked>
    <label class="onoffswitch-label" for="myonoffswitch1">
        <span class="onoffswitch-inner"></span>
        <span class="onoffswitch-switch"></span>
    </label>
</div>

</CCard>
</CRow>

<CRow class="rowStyle">
        <CCard>
          <h4 class = "title">Air Conditioning</h4>
        <img  class = "deviceImage" src="https://www.tristar.eu/product/image/medium/ac-5408_0.jpg" alt="">
  
   <div class="onoffswitch">
    <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch2" tabindex="0" unchecked>
    <label class="onoffswitch-label" for="myonoffswitch2">
        <span class="onoffswitch-inner"></span>
        <span class="onoffswitch-switch"></span>
    </label>

</div>

</CCard>
</CRow>
     

      

<CRow class="rowStyle">
        <CCard>
          <h4 class = "title">Curtains</h4>
        <img  class = "deviceImage" src="https://ak1.ostkcdn.com/images/products/14333387/Maytex-Smart-Curtains-Sheridan-100-Percent-Blackout-84-Inch-Window-Panel-fa7c8b46-7cf4-43f5-89fa-2c3ab28c7a80.jpg" alt="">
  
   <div class="onoffswitch">
    <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch3" tabindex="0" checked>
    <label class="onoffswitch-label" for="myonoffswitch3">
        <span class="onoffswitch-inner"></span>
        <span class="onoffswitch-switch"></span>
    </label>

</div>

</CCard>
</CRow>
<CRow class="rowStyle">
        <CCard>
          <h4 class = "title">Washing Machine</h4>
        <img  class = "deviceImage" src="https://devicebase.net/products/218/teaser-lg.jpg" alt="">
  
   <div class="onoffswitch">
    <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch4" tabindex="0" checked>
    <label class="onoffswitch-label" for="myonoffswitch4">
        <span class="onoffswitch-inner"></span>
        <span class="onoffswitch-switch"></span>
    </label>

</div>

</CCard>
</CRow>

<CRow class="rowStyle">
        <CCard>
          <h4 class = "title">Dryer</h4>
        <img  class = "deviceImage" src="https://outletappliancescenter.com/wp-content/uploads/2020/07/DLE3500W-1.jpg" alt="">
  
   <div class="onoffswitch">
    <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch5" tabindex="0" checked>
    <label class="onoffswitch-label" for="myonoffswitch5">
        <span class="onoffswitch-inner"></span>
        <span class="onoffswitch-switch"></span>
    </label>

</div>

</CCard>
</CRow>

<CRow class="rowStyle">
        <CCard>
          <h4 class = "title">Clothing Care System</h4>
        <img  class = "deviceImage" src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026539&itemId=1269958-894&recipeName=680" alt="">
  
   <div class="onoffswitch">
    <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch6" tabindex="0" unchecked>
    <label class="onoffswitch-label" for="myonoffswitch6">
        <span class="onoffswitch-inner"></span>
        <span class="onoffswitch-switch"></span>
    </label>

</div>

</CCard>
</CRow>
      
 </CRow>
      

  </div>
</template>


<script>
export default {
  name: 'LivingRoom',
  components: {
  }
  }
</script>

<script>
export default {
  
}
</script>


<style scoped>
.device{
    margin-left: 15px;
}

.onoffswitch {
    position: relative; width: 81px; margin-left: 75px; margin-top: 5px;
    -webkit-user-select:none; -moz-user-select:none; -ms-user-select: none;
}
.onoffswitch-checkbox {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.onoffswitch-label {
    display: block; overflow: hidden; cursor: pointer;
    border: 2px solid #999999; border-radius: 16px;
}
.onoffswitch-inner {
    display: block; width: 200%; margin-left: -100%;
    transition: margin 0.3s ease-in 0s;
}
.onoffswitch-inner:before, .onoffswitch-inner:after {
    display: block; float: left; width: 50%; height: 31px; padding: 0; line-height: 31px;
    font-size: 11px; color: white; font-family: Trebuchet, Arial, sans-serif; font-weight: bold;
    box-sizing: border-box;
}
.onoffswitch-inner:before {
    content: "ON";
    padding-left: 10px;
    background-color: #4F7FBF; color: #FFFFFF;
}
.onoffswitch-inner:after {
    content: "OFF";
    padding-right: 10px;
    background-color: #EEEEEE; color: #999999;
    text-align: right;
}
.onoffswitch-switch {
    display: block; width: 26px; height: 26px; margin: 9px;
    background: #FFFFFF;
    position: absolute; top: -4px; bottom: 4px;
    right: 46px; 
    border: 2px solid #999999; border-radius: 16px;
    transition: all 0.3s ease-in 0s; 
}
.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {
    margin-left: 0px;
}
.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {
    right: 0px; 
}

.title{
  font-family: Trebuchet, Arial, sans-serif; font-weight: bold;
  font-size: 18px;
  text-align: center;
  margin-top: 7px;
  color: #6f92d1;
}

.rowStyle{
    padding: 10px;
    margin-right: 15px;
    margin-left: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
    }

.deviceImage{
    width: 250px;
    height: 250px;
    /* border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    border-color: #6f92d1; */
    }

</style>