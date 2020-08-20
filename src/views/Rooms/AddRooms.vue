<template>
     <div>

        <h3 class = "device">Room Settings</h3>
      <hr>

      <CCard>
        <CCardBody>
      <div class="roomContainer">
      <CCol>

<br>
  <label class="choose" for="roomName">Choose the name for your new room:</label>
  <br>
  <br>
  <input placeholder="Enter room name" type="text" id="roomName" class="roomNaming">

      </CCol>
      </div>
        </CCardBody>
        <CCardFooter>   
                  
        <CButton  
          @click="innerCollapse = !innerCollapse; showMessage()" 
          size="sm" 
          color="secondary"
          class="addDevicebtn"
        >
          Add New Device
        </CButton>

        <CCollapse :show="innerCollapse" class="mt-2">
          <CCard body-wrapper>
            <h2 id="main" class="printRoomName"></h2>
            <hr>
            <device-add/>
          </CCard>
        </CCollapse>
          </CCardFooter>
      </CCard>

    </div>
</template>

<script>
var roomSelect = document.getElementById("rooms");

import livingRoom from "../Rooms/LivingRoom.vue"
import kitchen from "../Rooms/Kitchen.vue"
import bedroom from "../Rooms/MasterBedroom.vue"
import deviceAdd from "../Rooms/AddDevice.vue"


export default {
    name: "RoomsAdd",
    components: {
        deviceAdd,
        },
    methods:{
    showMessage: function(){     
    var roomName = document.getElementById("roomName").value;
    document.getElementById("main").innerHTML = roomName;
    },  
},

data () {
    return {
      innerCollapse: false,
    }
  }
};
</script>

<style scoped>
.printRoomName{
  margin-left: 15px;
  color: rgb(32, 40, 129);
}

.choose{
  margin-left: 15px;
  font-weight: bold;
  font-size: 20px;
  color:  rgb(32, 40, 129);
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  /* font-size: 1rem; */
}

.roomNaming{
  margin-left: 15px;
  width: 320px;
  border: none;
  border-bottom: 2px solid rgba(146, 136, 136, 0.849);
  padding-top: 5px;
  padding-bottom: 5px;
  outline: none;
  font-family: inherit;
  font-size: 1.1rem;
  padding: 7px 0;
  background: transparent;
}

.addDevicebtn {
	background:linear-gradient(to bottom, #1c366b 5%, #2d4385 100%);
	background-color:#1c366b;
	border-radius:10px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	padding:12px 25px;
  text-decoration:none;
  margin-left: 25px;
  margin-bottom: 15px;
  margin-top: 15px;
}
.addDevicebtn:hover {
	background:linear-gradient(to bottom, #2d4385 5%, #1c366b 100%);
	background-color:#2d4385;
}
.addDevicebtn:active {
	position:relative;
	top:1px;
}



</style>

