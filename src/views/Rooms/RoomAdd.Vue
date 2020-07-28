<template>
  

    <div>
        <h3 class = "device">Room Settings</h3>
      <hr>
      <div class="roomContainer">
      <CCol>
          <br>
<label class="textStyle" for="rooms">Choose a room:</label>

<select id="rooms" >
  <option value="0">-Choose a Room-</option>
  <option value="1">Living Room</option>
  <option value="2">Bedroom</option>
  <option value="3">Kitchen</option>
  <option value="4">Bathroom</option>
  <option value="5">Other</option>
</select>
  
<br>
  <label>Enter room name:</label>
  <input type="text" id="roomName" required>

<br>
  <input type="button" value="Submit" v-on:click = "submitButton">

      </CCol>
      </div>

    </div>
    </template>



<style>
  .textStyle{
   margin-right: 40px,
  }
</style>




