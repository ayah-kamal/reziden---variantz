<template>
<div>
    <h3 class="device">Add a Device</h3>
    <br>

    <CRow>
        <CCard>
            <CCardHeader>
            <button 
            v-bind:class = "{'buttons': !clicked,'unbuttons':clicked}"
            v-on:click = "clicked=!clicked">Add</button>
            </CCardHeader>
      <lighting />
      </CCard>

       <CCard>
       <CCardHeader>
            <button class = "buttons" id ="buttons" on:click= 'colorChange'>Add</button>
            </CCardHeader>
      <curtains/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
      <airConditioning/>
      </CCard>

     <CCard> 
         <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
      <diffuser/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
      <TV/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
      <soundSystem/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
      <showerHead/>
      </CCard>

    <CCard>
    <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
      <heater/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
      <vanityMirror/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
      <scaler/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
      <alarm/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
      <CoffeeMachine/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
      <fridge/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
      <microwave/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
      <kitchenScale/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
      <airFryer/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
   <toaster/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
       <iceMaker/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
       <stoveAndOven/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
   <dishwasher/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
        <kettle/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
       <kitchenHood/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
          <washingMachine/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
        <Dryer/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
    <clothingCareSystem/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
    <homeSecuirtyCamera/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
      <safetyBox/>
      </CCard>

      <CCard>
          <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
         <doorLock/>
      </CCard>

       <CCard>
          <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
           <SecurityAlarm/>
      </CCard>

       <CCard>
          <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
      <tempretureSensor/>
      </CCard>

       <CCard>
          <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
      <smokeDetector/>
      </CCard>

       <CCard>
          <CCardHeader>
            <button class = "buttons">Add</button>
            </CCardHeader>
      <SOS/>
      </CCard>


    
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
    Dryer 
    },
    methods:{
        colorChange1: function() {     
             var box  = document.getElementsByID("buttons");   
             box.style.backgroundColor= "green"; 
             }

    },
    data: {
        clicked: false
    }
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

.buttons :focus{

}

.unbuttons{
margin-left: 80px;
  background-color: rgb(35, 156, 55);
  border: none;
  color: white;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 12px;
  font-size: 16px;
}

</style>