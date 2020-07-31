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
      <modem/>
    </CRow>
  </div>
</template>


<script>
import lighting from "../devices/Lighting"
import curtains from "../devices/Curtains"
import airConditioning from "../devices/AirConditioning"
import diffuser from "../devices/diffuser"
import TV from "../devices/TV"
import soundSystem from "../devices/soundSystem"
import modem from '../devices/modem'

export default {
  name: "GuestBedroom",
  components: {
    lighting,
    curtains,
    airConditioning,
    TV,
    diffuser,
    soundSystem,
    modem
  }
};
</script>

<style>
@import "../../assets/scss/pageStyle.css";
</style>