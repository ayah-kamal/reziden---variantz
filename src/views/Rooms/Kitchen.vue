
<template>
  <div>
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
      <CRow >

<lighting/>
<curtains/>
<airConditioning/>
<airPurifier/>
<CoffeeMachine/>
<fridge/>
<microwave/>
<kitchenScale/>
<toaster/>
<stoveAndOven/>
<kettle/>
<dishwasher/>
<iceMaker/>
<kitchenHood/>


 </CRow>
      

  </div>
</template>


<script>
import lighting from '../devices/Lighting'
import curtains from '../devices/Curtains'
import airConditioning from '../devices/AirConditioning'
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
import airPurifier from '../devices/AirPurifier'



export default {
  name: 'Kitchen',
  components: {
      lighting,
      curtains,
      airConditioning ,
CoffeeMachine,
  fridge,
microwave,
kitchenScale,
 airFryer,
toaster,
stoveAndOven,
dishwasher,
kettle,
iceMaker,
kitchenHood,  
airPurifier,    
  },
  data () {
    return {
      innerCollapse: false,
    }
  }
}
</script>
<style>


  @import '../../assets/scss/pageStyle.css';
</style>