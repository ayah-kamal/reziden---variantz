
<template>
  <div>
      <h3 class = "device">Devices</h3>
      <hr>
      <CRow >

<lighting/>
<curtains/>
<airConditioning/>
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
import lighting from '../devices/lighting'
import curtains from '../devices/curtains'
import airConditioning from '../devices/airConditioning'
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


       
  }
}
</script>
<style>


  @import '../../assets/scss/pageStyle.css';
</style>