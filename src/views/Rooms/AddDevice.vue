<template>
<div>
    <h3 class="device">Add Default Devices</h3>

   <div class="input-group" style="margin-left: 10px">
      <input type="text" class="form-control" placeholder="Search for a device..." aria-label="Search for a device...">
    <span class="input-group-btn">
        <button class="btn btn-secondary" type="button">Search</button>
      </span>
    </div>

    <CButton  class="addDevicebtn"
       @click="warningModal = true">
         Add New Device</CButton>
         
    <CModal
      title="Add a New Device"
      color="secondary"
      :show.sync="warningModal"
    >
      <div>
        <h5>Manually:</h5>
        <label for="deviceName">Device Name:</label>
        <input id="deviceName" type="text" placeholder="Enter name of device"
        style="margin-left: 40px; width: 200px" required/>

        <br>

        <label for="limitPower">Model Number:</label>
        <input id="limitPower" type="number" placeholder="Enter the model number"
        min="1"
        style="margin-left: 29px; width: 200px" required/>

        <h5 style="margin-top:15px; margin-bottom: -4px">Automatically:</h5>
        <CButton  class="addDevicebtn" style="padding: 5px 10px">
         Scan</CButton>

      

        </div>
    </CModal>

    <br>

    <CRow style="margin-left: 10px">
        <CCard>
            <CCardHeader>
            <button class="buttons" id = "btn2" 
            >Add</button>
            </CCardHeader>
      <lighting />
      </CCard>

       <CCard>
       <CCardHeader>
            <button class="buttons" id = "btn3" 
            >Add</button>
            </CCardHeader>
      <curtains/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn4" 
            >Add</button>
            </CCardHeader>
      <airConditioning/>
      </CCard>

     <CCard> 
         <CCardHeader>
            <button class = "buttons" id = "btn5"
            >Add</button>
            </CCardHeader>
      <diffuser/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn6"
            >Add</button>
            </CCardHeader>
      <TV/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn7" 
            >Add</button>
            </CCardHeader>
      <soundSystem/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn8" 
            >Add</button>
            </CCardHeader>
      <showerHead/>
      </CCard>

    <CCard>
    <CCardHeader>
            <button class = "buttons" id = "btn9" 
            >Add</button>
            </CCardHeader>
      <heater/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn10"
            >Add</button>
            </CCardHeader>
      <vanityMirror/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn11"
            >Add</button>
            </CCardHeader>
      <scaler/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn12"
            >Add</button>
            </CCardHeader>
      <alarm/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn13" 
            >Add</button>
            </CCardHeader>
      <CoffeeMachine/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn14" 
            >Add</button>
            </CCardHeader>
      <fridge/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn15" 
            >Add</button>
            </CCardHeader>
      <microwave/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn16"
            >Add</button>
            </CCardHeader>
      <kitchenScale/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn17" 
            >Add</button>
            </CCardHeader>
      <airFryer/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn18"
            >Add</button>
            </CCardHeader>
   <toaster/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn19" 
            >Add</button>
            </CCardHeader>
       <iceMaker/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn20"
            >Add</button>
            </CCardHeader>
       <stoveAndOven/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn21"
            >Add</button>
            </CCardHeader>
   <dishwasher/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn22"
            >Add</button>
            </CCardHeader>
        <kettle/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn23" 
            >Add</button>
            </CCardHeader>
       <kitchenHood/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn24" 
            >Add</button>
            </CCardHeader>
          <washingMachine/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn25" 
            >Add</button>
            </CCardHeader>
        <Dryer/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn26"
            >Add</button>
            </CCardHeader>
    <clothingCareSystem/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn27"
            >Add</button>
            </CCardHeader>
    <homeSecuirtyCamera/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn28"
            >Add</button>
            </CCardHeader>
      <safetyBox/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn29"
            >Add</button>
            </CCardHeader>
         <doorLock/>
      </CCard>

       <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn30"
            >Add</button>
            </CCardHeader>
           <SecurityAlarm/>
      </CCard>

       <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn31"
            >Add</button>
            </CCardHeader>
      <tempretureSensor/>
      </CCard>

       <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn32" 
            >Add</button>
            </CCardHeader>
      <smokeDetector/>
      </CCard>

       <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn33"
            >Add</button>
            </CCardHeader>
      <SOS/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn34"
            >Add</button>
            </CCardHeader>
      <modem/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons" id = "btn35"
            >Add</button>
            </CCardHeader>
      <airPurifiers/>
      </CCard>

    </CRow>
<hr>
    <CButton class="saveBtn" v-on:click="saveChanges()">Save</CButton>

</div>
</template>


<script>
import lighting from "../devices/Lighting"
import curtains from "../devices/Curtains"
import airConditioning from "../devices/AirConditioning"
import diffuser from "../devices/diffuser"
import TV from "../devices/TV"
import soundSystem from "../devices/soundSystem"
import showerHead from "../devices/showerHead"
import heater from "../devices/heater"
import vanityMirror from "../devices/vanityMirror"
import scaler from "../devices/scaler"
import alarm from "../devices/alarm"
import CoffeeMachine  from '../devices/CoffeeMachine'
import fridge from '../devices/fridge'
import microwave from '../devices/microwave'
import kitchenScale from '../devices/kitchenScale'
import airFryer from '../devices/airFryer'
import toaster from '../devices/toaster'
import stoveAndOven from '../devices/stoveAndOven'
import dishwasher from '../devices/dishwasher'
import kettle from '../devices/kettle'
import iceMaker from '../devices/iceMaker'
import kitchenHood from '../devices/kitchenHood'
import washingMachine  from '../devices/washingMachine'
import Dryer from '../devices/Dryer'
import clothingCareSystem from '../devices/clothingCareSystem'
import  homeSecuirtyCamera from "../devices/homeSecuirtyCamera"
import  safetyBox from "../devices/safetyBox"
import  doorLock from "../devices/doorLock"
import  SecurityAlarm from "../devices/SecurityAlarm"
import  tempretureSensor from "../devices/tempretureSensor"
import  smokeDetector from "../devices/smokeDetector"
import  SOS from "../devices/SOS"
import modem from "../devices/modem"
import airPurifiers from '../devices/AirPurifier'


export default {
    name: "Device Add",
    components:{
    lighting,
    curtains,
    airConditioning,
    alarm,
    airFryer,
    stoveAndOven,
    SecurityAlarm,
    safetyBox,
    clothingCareSystem,
    CoffeeMachine,
    homeSecuirtyCamera,
    diffuser,
    dishwasher,
    doorLock,
    smokeDetector,
    fridge,
    heater,
    showerHead,
    kitchenHood,
    scaler,
    SOS,
    iceMaker,
    toaster,
    tempretureSensor,
    TV,
    kitchenScale,
    kettle,
    microwave,
    vanityMirror,
    washingMachine,
    soundSystem,
    Dryer,
    modem,
    airPurifiers,
    },
    data () {
    return {
      warningModal: false
    }
  },
    mounted(){
  $('.buttons').click(function(){
  $(this).toggleClass('green');
  $(this).text($(this).text() == 'Add' ? 
  'Added' : 'Add')
});

},
}
</script>


<style scoped>

.buttons{
  margin-left: 80px;
  background-color: rgb(7, 75, 131);
  border: none;
  color: white;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 12px;
  font-size: 16px;
}

.green{
  background-color:rgb(54, 107, 72);
  }

.saveBtn{
  margin-left: 250px;
  background-color: rgb(190, 54, 54);
  border: none;
  color: white;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  border-radius: 12px;
  font-size: 16px;
}

.addDevicebtn {
	background:linear-gradient(to bottom, #525d72 5%, #383e52 100%);
	background-color:#495368;
	border-radius:10px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:12px;
	padding: 10px 10px;
  text-decoration:none;
  margin-left: 10px;
  margin-bottom: 15px;
  margin-top: 15px;
}
.addDevicebtn:hover {
	background:linear-gradient(to bottom, #2d4385 5%, #1c366b 100%);
	background-color:#2d4385;
}
.addDevicebtn:active {
	position:relative;
	top:1px;
}





</style>