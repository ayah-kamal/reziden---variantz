<template>
  <div>
    <h3 class="device">Devices</h3>
    <hr />
    <CRow>
      <lighting />
      <airConditiong />
      <curtains />
      <TV />
      <diffuser />
      <soundSystem />
    </CRow>
  </div>
</template>


<script>
import lighting from "../devices/lighting";
import curtains from "../devices/curtains";
import airConditioning from "../devices/airConditioning";
import diffuser from "../devices/diffuser";
import TV from "../devices/TV";
import soundSystem from "../devices/soundSystem";
export default {
  name: "GuestBedroom",
  components: {
    lighting,
    curtains,
    airConditioning,
    TV,
    diffuser,
    soundSystem
  }
};
</script>

<style>
@import "../../assets/scss/pageStyle.css";
</style>