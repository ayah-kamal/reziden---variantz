<template>
  <div>
    <div style="display: flex; justify-content: space-between">
      <h3 class = "device">Devices</h3>
      <button
      @click="innerCollapse = !innerCollapse"
      class="editRoombtn"
      >Edit Room Name</button>
      </div>

      <CCollapse :show="innerCollapse" class="mt-2">
          <CCard body-wrapper>
            <h2 id="main" class="printRoomName"></h2>
         <input 
         placeholder="Enter new room name" 
         type="text" 
         id="roomName" class="roomNaming">
          </CCard>
        </CCollapse>
    <hr>
    <CRow>
      <lighting />

      <curtains />
      <showerHead />

      <vanityMirror />
      <heater />
      <soundSystem />

      <scaler />
    </CRow>
  </div>
</template>


<script>
import lighting from "../devices/Lighting";
import curtains from "../devices/Curtains";
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
  },
  data () {
    return {
      innerCollapse: false,
    }
  }
};
</script>

<style>


  @import '../../assets/scss/pageStyle.css';
</style>