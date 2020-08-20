<template>
    
<CRow class="rowStyle">
        <CCard style="border: none">

         <h4 class = "title" >Curtains</h4>
                
        <Button  class="optBtn"
          @click="innerCollapse = !innerCollapse; showMessage()" 
          size="sm" 
          color="secondary"> 
          <CIcon name="cil-settings" style="margin-right: 5px"/>
         More Options
        </Button>

    <img  class = "deviceImage" src="curtains.jpeg" alt="">
  
        <CCollapse :show="innerCollapse" class="mt-2">
          <CCard body-wrapper>

            <h4>More Options:</h4>
            <hr>
 
<label class = "editLabel" for="customRange2">Mode:</label>
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="radio" class="buttons">Morning</button>
  <button type="radio" class="buttons">Night</button>
</div>

<hr>

<label class = "editLabel">Mode Timers:</label>
<div>
<label class="modeLabel" style="margin-left: 5px;margin-left: 5px">Morning Mode:</label>
<br>
<label style="margin-right: 5px">Start</label>
<input type="time" required>
<label style="margin-left: 10px; margin-right: 5px">End</label>
<input type="time" required>

<br>

<label class="modeLabel" style="margin-left: 5px; padding-top: 20px">Night Mode:</label>
<br>
<label style="margin-left: 5px; margin-right: 5px">Start</label>
<input type="time" required>
<label style="margin-left: 10px; margin-right: 5px">End</label>
<input type="time" required>
</div>

          </CCard>
        </CCollapse>

   <div class="onoffswitch">
    <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch3" tabindex="0" checked>
    <label class="onoffswitch-label" for="myonoffswitch3">
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

.modeLabel{
  margin-left: 5px;
    margin-right :5px;
    margin-top:10px;
  font-family: Trebuchet, Arial, sans-serif; font-weight: bold;
  font-size: 14px;
  text-align: center;
  margin-top: 7px;
  color: #4F7FBF;
}

input{
  width: 60px;
}

</style>

