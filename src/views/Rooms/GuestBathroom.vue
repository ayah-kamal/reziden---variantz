<template>
  <div>
    <h3 class="device">Devices</h3>
    <hr />
    <CRow>
      <lighting />

      <curtains />
      <showerHead />

      <vanityMirror />
      <heater />
      <soundSystem />

      <scaler />
      <!--  
<CRow class="rowStyle">
        <CCard>
          <h4 class = "title">Speaker</h4>
        <img  class = "deviceImage" src="Speaker.jpg" alt="">
  
   <div class="onoffswitch">
    <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch6" tabindex="0" checked>
    <label class="onoffswitch-label" for="myonoffswitch6">
        <span class="onoffswitch-inner"></span>
        <span class="onoffswitch-switch"></span>
    </label>

</div>

</CCard>
      </CRow>-->
    </CRow>
  </div>
</template>


<script>
import lighting from "../devices/lighting";
import curtains from "../devices/curtains";
import showerHead from "../devices/showerHead";
import heater from "../devices/heater";
import vanityMirror from "../devices/vanityMirror";
import soundSystem from "../devices/soundSystem";
import scaler from "../devices/scaler";

export default {
  name: "MasterBathroom",
  components: {
    lighting,
    curtains,
    showerHead,
    heater,
    vanityMirror,
    soundSystem,
    scaler
  }
};
</script>

<style>


  @import '../../assets/scss/pageStyle.css';
</style>