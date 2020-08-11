<template>
    
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

            <h4>More Options:</h4>
            <hr>
 
<label class = "editLabel" for="customRange2">Speed:</label>
<input type="range" class="slider" min="0" max="5" id="customRange2">

<hr>
<label class = "editLabel" >Mode:</label>

<div class="btn-group" role="group" aria-label="Basic example">
  <button type="radio" class="buttons">Cool</button>
  <button type="radio" class="buttons">Dry</button>
  <button type="radio" class="buttons">Fan</button>
  <button type="radio" class="buttons">Hot</button>
</div>

<hr>

<div>
<label class="editLabel">Temperature:</label>
<input style="padding-right:20px; text-align:right; width: 50px;margin-left:10px;border: none;border-bottom: 1px solid black">
<span style="margin-left:-20px;">°C</span>
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
export default{
data () {
    return {
      innerCollapse: false,
    }
},
  mounted(){
  $('.buttons').click(function(){
  $(".buttons").removeClass("blue");
    $(this).addClass("blue");
});
$('.optBtn').click(function(){
  $(this).toggleClass('green');
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