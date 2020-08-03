<template>
<div>
    <h3 class="device">Add a Device</h3>
    <hr/>

    <CRow>
        <CCard>
            <CCardHeader>
            <button>+ Add</button>
            </CCardHeader>
      <lighting />
      </CCard>
      <curtains/>
      <airconditioning/>
      <diffuser/>
      <TV/>
      <soundSystem/>
      <showerHead/>
      <heater/>
      <vanityMirror/>
      <scaler/>
      <alarm/>
      <CoffeeMachine/>
      <fridge/>
      <microwave/>
      <kitchenScale/>
      <airFryer/>
      <toaster/>
      <stoveAndOven/>
      <dishwasher/>
      <kettle/>
      <iceMaker/>
      <kitchenHood/>
      <washingMachine/>
      <Dryer/>
      <clothingCareSystem/>
      <homeSecuirtyCamera/>
      <safetyBox/>
      <doorLock/>
      <SecurityAlarm/>
      <temperatureSensor/>
      <smokeDetector/>
      <SOS/>

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
    } 
}
</script>


<style scoped>

</style>