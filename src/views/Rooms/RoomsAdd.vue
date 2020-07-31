<template>
     <div>
        <h3 class = "device">Room Settings</h3>
      <hr>
      <div class="roomContainer">
      <CCol>
          <br>
<label class="textStyle" for="rooms">Choose a room:</label>


<select id="rooms" >
  <option>-Choose a Room-</option>
  <option value= '1'>Living Room</option>
  <option value= '2'>Bedroom</option>
  <option value= '3'>Kitchen</option>
  <option value= '4'>Bathroom</option>
  <option value= '5'>Other</option>
</select>
  
<br>
  <label>Enter room name:</label>

  <input placeholder="Enter room name" type="text" id="roomName" required>

<br>
  <input type="button" value="Submit" v-on:click = "submitButton">

      </CCol>
      </div>

      <!-- <div>
      <div id="dispRoom"></div>
      <button  v-on:click="deviceRoute">Add New Device</button>
      </div> -->

      <component v-bind:is='living-room'></component>

          <!-- <component v-bind:is= "living-room"></component> -->
          <!-- <living-room></living-room> -->

     

    </div>
</template>

<script>
import livingRoom from "../Rooms/LivingRoom.vue"


//export {roomSelect}

export default {
    name: "RoomsAdd",
    components: {
        'living-room': livingRoom,
        },
    methods:{
    submitButton: function(){
        var roomSelect = document.getElementById("rooms");
        var roomSelectIndex = roomSelect[roomSelect.selectedIndex].value;

        if (roomSelectIndex==='1'){
          document.getElementById("dispRoom").append(livingRoom);
        }
        else if(roomSelectIndex==='2'){
           document.getElementById("dispRoom").innerHTML= "hello";
        }

        //this.$router.push("../rooms/device-add");
    },
    deviceRoute: function(){
        this.$router.push("../rooms/device-add");
    }
},
};
</script>
