<template>
  <div>
    <h3 class="device">Devices</h3>
    <hr />
    <CRow>

<CRow class="rowStyle">
        <CCard>
          <h4 class = "title">Doorbell</h4>
        <img  class = "deviceImage" src="doorbell.jpg" alt="">
  
   <div class="onoffswitch">
    <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch1" tabindex="0" unchecked>
    <label class="onoffswitch-label" for="myonoffswitch1">
        <span class="onoffswitch-inner"></span>
        <span class="onoffswitch-switch"></span>
    </label>

</div>

</CCard>
</CRow>

<homeSecuirtyCamera/>

    </CRow>
  </div>
</template>


<script>
import  homeSecuirtyCamera from "../devices/homeSecuirtyCamera";
export default {
  name: "Cameras",
  components: {
homeSecuirtyCamera,
  }
};
</script>
<style>
@import "../../assets/scss/pageStyle.css";
</style>