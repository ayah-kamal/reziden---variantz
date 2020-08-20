<template>
    
<CRow class="rowStyle">
        <CCard style="border: none">

         <h4 class = "title" >Air Purifier</h4>
                
        <Button  class="optBtn"
          @click="innerCollapse = !innerCollapse; showMessage()" 
          size="sm" 
          color="secondary"> 
          <CIcon name="cil-settings" style="margin-right: 5px"/>
         More Options
        </Button>

    <img  class = "deviceImage" src="https://www.philips.sa/c-dam/b2c/category-pages/Household/air/gb/air-purifiers-small-medium-large-rooms/AC2889-air-purifier-humidifier-large-medium-small-rooms-image.jpg" alt="">
  
        <CCollapse :show="innerCollapse" class="mt-2">
          <CCard body-wrapper>

            <h4>More Options:</h4>
            <hr>
 
<label class = "editLabel" for="customRange2">Speed:</label>
<input type="range" class="slider" min="0" max="5" id="customRange2">

<hr>
<label class = "editLabel" >Mode:</label>

<div class="btn-group" role="group" aria-label="Basic example">
  <button type="radio" class="buttons">Dust</button>
  <button type="radio" class="buttons">Eco</button>
  <button type="radio" class="buttons">Fan</button>
  <button type="radio" class="buttons">Auto</button>
</div>

<hr>

<label class = "editLabel">Timer:</label>
<div>
<label style="margin-right: 5px">Start</label>
<input type="time" required>
<label style="margin-left: 10px; margin-right: 5px">End</label>
<input type="time" required>
</div>

          </CCard>
        </CCollapse>
   <div class="onoffswitch">
    <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch2" tabindex="0" checked>
    <label class="onoffswitch-label" for="myonoffswitch2">
        <span class="onoffswitch-inner"></span>
        <span class="onoffswitch-switch"></span>
    </label>

</div>

</CCard>
</CRow>
</template>

<script>
export default {
    data () {
    return {
      innerCollapse: false,
    }
},
 mounted(){
   $('.optBtn').click(function(){
  $(this).toggleClass('green');

  $('.buttons').click(function(){
  $(".buttons").removeClass("blue");
    $(this).addClass("blue");
});
});
  },

}
</script>



<style scoped>
.optBtn {
  background-color:#4F7FBF;
  color: white;
  text-align: center;
  display: inline-block;
  font-size: 10px;
  border: none;
}

.green{
  background-color:rgb(54, 107, 72);
  }

.buttons{
    border: none;
    background-color: rgb(216, 216, 216);
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
}

.blue{
    background-color: rgb(91, 150, 238);
}
 
.editLabel{
    margin-left: 5px;
    margin-right :5px;
    margin-top:10px;
  font-family: Trebuchet, Arial, sans-serif; font-weight: bold;
  font-size: 15px;
  text-align: center;
  margin-top: 7px;
}


.slider{
vertical-align: middle;
}


</style>