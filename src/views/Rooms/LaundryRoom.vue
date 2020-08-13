<template>
  <div>
<CAlert class="notifInfo" color="warning" closeButton>
   

      <h3 style="margin-bottom: 30px;  background-color: rgba(240, 214, 68, 0.705); color: warning; padding: 5px">Notifications</h3>
      

      <CRow>
      <CCard class="laundryNotif" style="margin-left: 10px">
      <h5 style="margin-bottom: 20px; font-weight: bolder">Current Cycle:</h5>
      <div class="currentCycle">
      <p>Washing Machine:</p>
      <label class="currentCycleLabel">ON</label>
      </div>
      <div class="currentCycle">
      <p>Start Time:</p>
      <label class="currentCycleLabel">2:10PM</label>
      </div>
      <div class="currentCycle">
      <p>Cycle Mode:</p>
      <label class="currentCycleLabel">Cotton</label>
      </div>
      <div class="currentCycle">
      <p>Load:</p>
      <label class="currentCycleLabel">12kg</label>
      </div>
      

      <div>
      <CProgress
      :value="counter"
      color="success"
      animated
      show-value
      show-percentage
      style="height:20px;
      width: 30vw"
      class="mt-1"
    />
    <label>Time Remaining: 18 Minutes</label>
    </div>

    </CCard>


    <CCard class="laundryNotif" style="margin-left: 10px">
      <h5 style="margin-bottom: 20px; font-weight: bolder">Weather:</h5>
      <CCard class="weatherCard">
        <CRow style="margin-left: 10px">
        <img src="https://img.icons8.com/cotton/2x/rain.png"
        style="
        width: 100px;"/>
        <CCol>
        <label>Friday</label>
        <br>
        <label>Temperature:</label>
        <label style="
        margin-left: 20px;
        font-weight: bold">
        29°C</label>
        <br>
        <label>Humidity: </label>
        <label style="
        margin-left: 43px;
        font-weight: bold">
        40%</label>
        </CCol>
        </CRow>
      </CCard>

      <CAlert color="danger" closeButton fade>
        <b>It is Rainy.</b>
        <br>
        Not recommended to dry laundry outside today.
        <br>
        <i>Friday 4:11PM</i>

      </CAlert>
    </CCard>
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

      <hr>
      <CRow>
   <lighting/>
   <curtains/>
   <airConditioning/>
   <Dryer/>
   <clothingCareSystem/>
<washingMachine/>
 </CRow>

 <CCard>

   </CCard>
      

  </div>
</template>


<script>
import lighting from '../devices/Lighting'
import curtains from '../devices/Curtains'
import airConditioning from '../devices/AirConditioning'
import washingMachine  from '../devices/washingMachine'
import Dryer from '../devices/Dryer'
import clothingCareSystem from '../devices/clothingCareSystem'



export default {
  name: 'LaundryRoom',
  components: {
      lighting,
      curtains,
      airConditioning ,
  washingMachine,
   Dryer,
   clothingCareSystem,   
  },
  data () {
    return {
      innerCollapse: false,
      counter: 86
    }
  }
}
</script>

<style>
  @import '../../assets/scss/pageStyle.css';

.notifInfo{
  width: 70vw;
  padding: 20px;
}

.currentCycle{
  display: flex;
}

.currentCycleLabel{
  margin-left: 10px;
  font-weight: bold;
}

.laundryNotif{
  width: 31vw;
  background-color: rgb(240, 239, 239);
  border-radius: 20px;
  padding: 10px;
}

.weatherCard{
  border-radius: 20px;
  padding: 5px;
}



</style>