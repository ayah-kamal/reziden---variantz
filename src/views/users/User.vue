<template>
<div>
  <CCard class= "profile">
    <div class="d-flex justify-content-center">
          <img
            src="https://cdn2.iconfinder.com/data/icons/lucid-generic/24/User_person_avtar_profile_picture_dp-512.png"
            class="c-avatar-img-custom"
            style="height: 100px; width: 100px"
          />
        </div>
        <label class="username" id="username">Elizabeth Smith</label>
        <label class="email" id="email">elizabethSmith@email.com</label>
  </CCard>

  <CCard class="profile-body">
    <label class="profileHeaders">Phone</label>
    <br>
    <label class="profileInfo" id="profileInfoPhone">(186)-379-4936</label>
    <hr>
    <label class="profileHeaders">Gender</label>
    <br>
    <label class="profileInfo" id="profileInfoGender">Female</label>
    <hr>
     <label class="profileHeaders">Date of Birth</label>
     <br>
    <label class="profileInfo" id="profileInfoBirth">03/11/72</label>
     <hr>
     <label class="profileHeaders">Nationality</label>
     <br>
    <label class="profileInfo" id="profileInfoNation">American</label>
    <br>
    <br>
  </CCard>

  <CButton
  @click="innerCollapse = !innerCollapse" 
          size="sm" 
          color="secondary" 
  class="editProfilebtn">
    Edit</CButton>

     <CCollapse :show="innerCollapse" class="mt-2">
          <CCard body-wrapper>
            <h2 class="editProfileTitle">Edit Profile</h2>
            <hr>
            <div class="edit-body">
            <label 
            style="font-size: 15px;
            margin-left: 15px; 
            font-weight: bold;
            font-size: 18px;"
            for="usernameEdit">
            Username:</label>
             <input type="text" id="usernameEdit" class="usernameEdit"
             name="usernameEdit">

             <br>

             <label 
            style="font-size: 15px;
            margin-left: 15px; 
            font-weight: bold;
            font-size: 18px;"
            for="emailEdit">
            Email:</label>
             <input type="text" id="emailEdit" class="emailEdit"
             name="emailEdit">

            <br>

            <label 
            style="font-size: 15px;
            margin-left: 15px; 
            font-weight: bold;
            font-size: 18px;"
            for="phoneEdit">
            Phone:</label>
             <input type= "number" id="phoneEdit" class="phoneEdit"
             name="phoneEdit">

             <br>

             <label 
            style="font-size: 15px;
            margin-left: 15px; 
            font-weight: bold;
            font-size: 18px;"
            for="genderEdit">
            Gender:</label>
             <input type="text" id="genderEdit" class="genderEdit"
             name="genderEdit">

            <br>

            <label 
            style="font-size: 15px;
            margin-left: 15px; 
            font-weight: bold;
            font-size: 18px;"
            for="dobEdit">
            Date of Birth:</label>
             <input placeholder="dd/mm/yyyy" type="text" id="dobEdit" class="dobEdit"
             name="dobEdit">

             <br>

             <label 
            style="font-size: 15px;
            margin-left: 15px; 
            font-weight: bold;
            font-size: 18px;"
            for="nationEdit">
            Nationality:</label>
             <input type="text" id="nationEdit" class="nationEdit"
             name="nationEdit">

             <br>

             <CButton 
             class="savebtn"
             v-on:click="editProfile()">Save Changes</CButton>
            </div>
          </CCard>
        </CCollapse>

</div>
</template>


<script>

export default {
    name: "User",
    methods:{
      editProfile: function(){
       var userName = document.getElementById("usernameEdit").value;
       document.getElementById("username").innerHTML = userName;

       var email = document.getElementById("emailEdit").value;
       document.getElementById("email").innerHTML = email;

       var phone = document.getElementById("phoneEdit").value;
       document.getElementById("profileInfoPhone").innerHTML = phone;

       var gender = document.getElementById("genderEdit").value;
       document.getElementById("profileInfoGender").innerHTML = gender;

       var dob = document.getElementById("dobEdit").value;
       document.getElementById("profileInfoBirth").innerHTML = dob;

       var nationality = document.getElementById("nationEdit").value;
       document.getElementById("profileInfoNation").innerHTML = nationality;

        }
    },
    data () {
    return {
      innerCollapse: false,
    }
  },
};
</script>

<style scoped>

.profile{
width: 20cm;
height: auto;
display: block;
margin-left: auto;
margin-right: auto;
}
.username{
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  color:  rgb(32, 40, 129);
}

.email{
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 15px;
  color:  black;
  padding-bottom: 15px;
}

.profile-body{
  background-color: rgb(82, 103, 146);
  width: 20cm;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.profileHeaders{
  color: rgb(196, 196, 196);
  font-size: 18px;
  margin-left: 100px;
  padding-top: 10px;
}

.profileInfo{
  color: white;
  font-size: 20px;
  margin-left: 100px;

}

.editProfilebtn {
	background-color:#b8b8b8;
	border-radius:15px;
	cursor:pointer;
	color:black;
	font-family:Arial;
	font-size:16px;
  font-weight: bold;
	padding:14px;
  padding-top: 10px;
  padding-bottom: 10px;
	text-decoration:none;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.editProfileTitle{
  margin-left: 15px;
}

/* .label,input{
  float: right;
} */

.edit-body{
  display: grid;
}

.savebtn{
	background-color:#4e8658;
	border-radius:8px;
	display:inline-block;
	cursor:pointer;
	color:white;
	font-family:Arial;
	font-size:16px;
	padding:10px;
  padding-top: 5px;
  padding-bottom: 5px;
	text-decoration:none;
  text-align: center;
  margin-left: 20px;
  margin-bottom: 15px;
  margin-top: 15px;
}

.mt-2{
    width: 20cm;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>
