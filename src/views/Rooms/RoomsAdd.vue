<template>
     <div>
        <h3 class = "device">Room Settings</h3>
      <hr>

      <CCard>
        <CCardBody>
      <div class="roomContainer">
      <CCol>
          <!-- <br> -->
<!-- <label class="textStyle" for="rooms">Choose a room:</label>


<select class="rooms" >
  <option disabled value="" selected>-Choose a Room-</option>
  <option value= '1'>Living Room</option>
  <option value= '2'>Bedroom</option>
  <option value= '3'>Kitchen</option>
  <option value= '4'>Bathroom</option>
  <option value= '5'>Other</option>
</select> -->
  
<br>
  <label>Enter room name:</label>
  <input placeholder="Enter room name" type="text" id="roomName">
  <br>
   <button  onclick="showMessage">add</button>


      </CCol>
      </div>
        </CCardBody>

          <!-- <CButton 
      @click="collapse = !collapse" 
      color="primary"
      class="mb-2"
    >
      Submit
    </CButton>
    <CCollapse :show="collapse">
      <CCard body-wrapper>
        <p v-if="rooms='1'">
          Living Room
        <living-room/>
        </p>

        <p v-else-if="rooms='2'">
          Bedroom
          <bedroom/>
          </p> -->

              <CCardFooter>   
                <p id= "printhere"></p>      
        <CButton  
          @click="innerCollapse = !innerCollapse" 
          size="sm" 
          color="secondary"
        >
          Add New Device
        </CButton>
        <CCollapse :show="innerCollapse" class="mt-2">
          <CCard body-wrapper>
            
            <device-add/>
          </CCard>
        </CCollapse>
          </CCardFooter>
      </CCard>

    <!-- </CCollapse> -->
      <!-- </CCard> -->

    </div>
</template>

<script>
var roomSelect = document.getElementById("rooms");

import livingRoom from "../Rooms/LivingRoom.vue"
import kitchen from "../Rooms/Kitchen.vue"
import bedroom from "../Rooms/MasterBedroom.vue"
import deviceAdd from "../Rooms/DeviceAdd.vue"


//export {roomSelect}

export default {
    name: "RoomsAdd",
    components: {
        'living-room': livingRoom,
        deviceAdd,
        kitchen,
        bedroom
        },
    methods:{
    /*submitButton: function(){
        var roomSelect = document.getElementById("rooms");
        var roomSelectIndex = roomSelect[roomSelect.selectedIndex].value;

        if (roomSelectIndex==='1'){
          document.getElementById("dispRoom").append(livingRoom);
        }
        else if(roomSelectIndex==='2'){
           document.getElementById("dispRoom").innerHTML= "hello";
        }

        this.$router.push("../rooms/device-add");
    },*/
    showMessage: function(){     
    var roomName = document.getElementById("roomName").value;
    document.getElementById("printhere").innerHTML = roomName;
    },   
},
data () {
    return {
      collapse: false,
      innerCollapse: false,
      rooms: {
        
      },
    }
  }
};
</script>
