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
      <airConditioning />
      <TV/>
      <airPurifiers/>
      <diffuser />
      <alarm />
    </CRow>
  </div>
</template>





<script>
import lighting from "../devices/Lighting";
import curtains from "../devices/Curtains";
import airConditioning from "../devices/AirConditioning";
import alarm from "../devices/alarm";
import diffuser from "../devices/diffuser";
import TV from "../devices/TV";
import airPurifiers from "../devices/AirPurifier"

export default {
  name: "GuestBedroom",
  components: {
    lighting,
    curtains,
    airConditioning,
    alarm,
    TV,
    diffuser,
    airPurifiers
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