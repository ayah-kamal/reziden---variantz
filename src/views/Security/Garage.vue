<template>
  <div>
    <h3 class="device">Devices</h3>
    <hr />
    <CRow>
<garage/>
    </CRow>
  </div>
</template>


<script>
import  garage from "../devices/garage";
export default {
  name: "Garage",
  components: {
garage,
  }
};
</script>
<style>
@import "../../assets/scss/pageStyle.css";
</style>