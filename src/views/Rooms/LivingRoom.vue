<template>
  <div>
    <CAlert class="notifInfo" color="warning" closeButton>
   

      <h3 style="margin-bottom: 30px;  background-color: rgba(240, 214, 68, 0.705); color: warning; padding: 5px">Notifications</h3>

      <CRow>
      <CCard class="livingNotif" style="margin-left: 10px">
        <h5 style="margin-bottom: 20px; font-weight: bolder">
          Smart TV Reminders:</h5>

          <CAlert color="primary" closeButton fade>
        <b>The Crown S03E04</b>
        <br>
        New episode release in 30 minutes on <i>Netflix</i>
        <br>
        <i>Friday 8:30PM</i>
      </CAlert>

      <CAlert color="primary" closeButton fade>
        <b>Copa del Rey . Semi-final</b>
        <br>
        <b><i>Barcelona vs Real Madrid</i></b>
        <br>
        Match starts in 15 minutes <br> on <i>iTV Sports</i>
        <br>
        <i>Thursday 6:45PM</i>
      </CAlert> 
     </CCard>
      
      <CCol class="mainReminders">
      <CAlert color="info" closeButton fade>
        <b>Sound System</b>
        <br>
        Sync <i>Movie</i> mode with <i>Smart TV</i>
        <br>
        <i> On Friday 9:00PM</i>
      </CAlert>

      <CAlert color="info" closeButton fade>
        <b>Lighting</b>
        <br>
        Set mode to <i>Movie</i>
        <br>
        <i> On Friday 9:00PM</i>
      </CAlert>

      <CAlert color="info" closeButton fade>
        <b>Air Conditioner</b>
        <br>
        Temperature set to <i>22°C</i>
        <br>
        <i> On Friday 12:00PM</i>
      </CAlert>


      </CCol>
      

     </CRow>

     </CAlert>

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
    <hr />

    <CRow>
      <lighting />
      <airConditioning/>
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
  },
  data () {
    return {
      innerCollapse: false,
    }
  }
};
</script>

<style>
@import "../../assets/scss/pageStyle.css";

.notifInfo{
  min-width: 70vw;
  padding: 20px;
}

.livingNotif{
  min-width: 31vw;
  background-color: rgb(240, 239, 239);
  border-radius: 20px;
  padding: 10px;
}

.weatherCard{
  border-radius: 20px;
  padding: 5px;
}

.mainReminders{
  min-width: 30vw;
}

</style>