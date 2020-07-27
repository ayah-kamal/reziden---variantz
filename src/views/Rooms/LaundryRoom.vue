<template>
  <div>
      <h3 class = "device">Devices</h3>
      <hr>
      <CRow>
   <lighting/>
   <curtains/>
   <airConditioning/>
   <Dryer/>
   <clothingCareSystem/>
   
<washingMachine/>


 </CRow>
      

  </div>
</template>


<script>
import lighting from '../devices/lighting'
import curtains from '../devices/curtains'
import airConditioning from '../devices/airConditioning'
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
 

       
  }
}
</script>

<style>


  @import '../../assets/scss/pageStyle.css';
</style>