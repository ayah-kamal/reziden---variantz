<template>
    
<CRow class="rowStyle">
        <CCard>
          <h4 class = "title">Air Conditioning</h4>
        <img  class = "deviceImage" src="https://www.tristar.eu/product/image/medium/ac-5408_0.jpg" alt="">
  
   <div class="onoffswitch">
    <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch2" tabindex="0" checked>
    <label class="onoffswitch-label" for="myonoffswitch2">
        <span class="onoffswitch-inner"></span>
        <span class="onoffswitch-switch"></span>
    </label>

</div>

</CCard>
</CRow>
</template><template>
    
<CRow class="rowStyle">
        <CCard>

         <h4 class = "title" >Air Conditioning</h4>
                
        <Button  class="optBtn"
          @click="innerCollapse = !innerCollapse; showMessage()" 
          size="sm" 
          color="secondary"> <!--<img src="moreOption.png" style= "width:30%" alt="">
     -->
     more options
        </Button>

    <img  class = "deviceImage" src="https://www.tristar.eu/product/image/medium/ac-5408_0.jpg" alt="">
  
        <CCollapse :show="innerCollapse" class="mt-2">
          <CCard body-wrapper>

            <h4>more options:</h4>
            <hr>
 
<label class = "editLabel" for="customRange2">Speed:</label>
<input type="range" class="slider" min="0" max="5" id="customRange2">

<hr>
<select class="form-select">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
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
export default{
data () {
    return {
      innerCollapse: false,
    }
}


}

function range(id){
    
  
getElementById(id).ionRangeSlider({
    min: 100,
    max: 1000,
    from: 550
  });
  }
</script>



<style>
.optBtn {
  background-color: #4CAF50;
  border: none;
  color: white;
  width:50%;
  height: 50%;
  text-align: center;
  display: inline-block;
  font-size: 10px;


 
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