
<template>
    <CRow class="rowStyle">
        <CCard style="border: none">
            
          <h4 class = "title">Sound System</h4>

          <Button  class="optBtn"
          @click="innerCollapse = !innerCollapse; showMessage()" 
          size="sm" 
          color="secondary"> 
          <CIcon name="cil-settings" style="margin-right: 5px"/>
         More Options
        </Button>
          

        <img  class = "deviceImage" src="soundSystem.jpeg" alt="">

         <CCollapse :show="innerCollapse" class="mt-2">
          <CCard body-wrapper>

            <h4>More Options:</h4>
            <hr>
 
 <div class="volumeContainer">
<label class = "editLabel" for="volume-slider">Volume:</label>
<input id="volume-slider" type="range" class="slider" min="0" max="1" step="0.1" value="0.5">
<button id="mute" class="muteButton"><CIcon name="cilVolumeOff"/></button>
 </div>

 <hr>
 
<label class = "editLabel" for="customRange2">Mode:</label>
<br>
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="radio" class="buttons">Normal</button>
  <button type="radio" class="buttons">Sport</button>
  <button type="radio" class="buttons">Music</button>
  <button type="radio" class="buttons">Movie</button>
</div>

          </CCard>
        </CCollapse>
  
   <div class="onoffswitch">
    <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch6" tabindex="0" checked>
    <label class="onoffswitch-label" for="myonoffswitch6">
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
methods:{
      mute: function(){
      document.getElementsByClassName("slider").value = 0;
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

const audio = { volume : 0 }
let lastVolume
const slider = $("#volume-slider").on("change", function() {
  var val = +this.value;
  audio.volume = val
  if (val) lastVolume = val
  console.log(audio.volume)
}).change();

$("#mute").on("click", function () {
  var val = audio.volume === 0 ? (lastVolume || 0.5) : 0
  slider.val(val).change()
});
},
  
}
</script>


<style scoped>
.optBtn {
  background-color:#4F7FBF;
  color: white;
  text-align: center;
  float: right;
  font-size: 10px;
  border: none;
}

h4{
    display: inline-block;
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

.volumeContainer{
    display: flex;
    justify-content: center;
}

.muteButton{
    background-color: white;
    border: none;
}

</style>




