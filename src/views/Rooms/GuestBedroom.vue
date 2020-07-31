<template>
  <div>
    <h3 class="device">Devices</h3>
    <hr />
    <CRow>
      <lighting />
      <curtains />
      <airConditioning />

      <TV />

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

export default {
  name: "GuestBedroom",
  components: {
    lighting,
    curtains,
    airConditioning,
    alarm,
    TV,
    diffuser
  }
};
</script>


<style>

  @import '../../assets/scss/pageStyle.css';
</style>