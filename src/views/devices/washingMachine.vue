<template>
    <CRow class="rowStyle">
        <CCard style="border: none">
          <h4 class = "title">Washing Machine</h4>

           <Button  class="optBtn"
          @click="innerCollapse = !innerCollapse; showMessage()" 
          size="sm" 
          color="secondary"> 
          <CIcon name="cil-settings" style="margin-right: 5px"/>
         More Options
        </Button>

        <img  class = "deviceImage" src="https://devicebase.net/products/218/teaser-lg.jpg" alt="">
   
   <CCollapse :show="innerCollapse" class="mt-2">
          <CCard body-wrapper>

            <h4>More Options:</h4>
            <hr>
            <h5 style="margin-left: 5px; margin-bottom: 10px">Set Wash Cycle:</h5>


<label class = "editLabel">Start Time:</label>
<input type="time" style="margin-left: 15px" required>

<hr>

<label class = "editLabel" for="customRange2">Cycle:</label>
<br>
<div style="display: grid">
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="radio" class="buttons">Cotton</button>
  <button type="radio" class="buttons">Speed Wash</button>
  <button type="radio" class="buttons">Sports Wear</button>
</div>
<br>
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="radio" class="buttons">Wool</button>
  <button type="radio" class="buttons">Rinse+Spin</button>
  <button type="radio" class="buttons">Bedding Care</button>
</div>
<br>
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="radio" class="buttons">Baby Care</button>
   <button type="radio" class="buttons">Duvet</button>
    <button type="radio" class="buttons">Single Shirt</button>
</div>
</div>


          </CCard>
        </CCollapse>

   <div class="onoffswitch">
    <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch4" tabindex="0" checked>
    <label class="onoffswitch-label" for="myonoffswitch4">
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
    border-radius: 20px;
    margin-right: 5px;
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

</style>
