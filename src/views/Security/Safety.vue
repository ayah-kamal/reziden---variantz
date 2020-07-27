<template>
  <div>
    <h3 class="device">Devices</h3>
    <hr />
    <CRow>
<safetyBox/>
<doorLock/>
<tempretureSensor/>
<SecurityAlarm/>
<smokeDetector/>
<SOS/>
    </CRow>
  </div>
</template>


<script>
import  safetyBox from "../devices/safetyBox";
import  doorLock from "../devices/doorLock";
import  SecurityAlarm from "../devices/SecurityAlarm";
import  tempretureSensor from "../devices/tempretureSensor";
import  smokeDetector from "../devices/smokeDetector";
import  SOS from "../devices/SOS";

export default {
  name: "Safety",
  components: {
safetyBox,
doorLock,
tempretureSensor,
SecurityAlarm,
smokeDetector,
SOS,
  }
};
</script>
<style>
@import "../../assets/scss/pageStyle.css";
</style>