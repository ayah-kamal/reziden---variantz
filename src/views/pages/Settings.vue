<template>
    <div>
<CCard class="main-card">
    <CCardHeader>
    <h2>Settings</h2>
    <hr>
    <div class="d-flex justify-content-start">
          <img
            src="https://cdn2.iconfinder.com/data/icons/lucid-generic/24/User_person_avtar_profile_picture_dp-512.png"
            class="c-avatar-img-custom"
            style="height: 90px; width: 90px"
          />

          <label class="align-self-center"
          style="font-weight: bold;
                font-size: 20px;
               color:  black;
               margin-left: 25px">
            Elizabeth Smith</label>

            <CHeaderNavLink to="/users/user">
          <CIcon name="cil-pencil" />
        <span class="editLabel">Edit Profile</span>
        </CHeaderNavLink>
        </div>
    </CCardHeader>

    <CCardBody class="settings-body">
        <CCard class="settings-control-innerbody">
            <h3 class="master-control">Master Control</h3>
            <br>
            <CRow>
            <CCard class="control-cards">
                <img class="light" src="https://cdn.onlinewebfonts.com/svg/img_452541.png"/>
                <br>
                <label>All Lights Off</label>
                <span class="indicator-light"></span>

            </CCard>
            <CCard class="control-cards">
                <img class="sleep" src="https://cdn.onlinewebfonts.com/svg/img_39469.png"/>
                <br>
                <label>Sleep Mode</label>
                <span class="indicator-light"></span>

            </CCard>
            <CCard class="control-cards">
                <img class="visitor" src="https://cdn.onlinewebfonts.com/svg/img_348165.png"/>
                <br>
                <label>Visitors</label>
                <span class="indicator-light"></span>

            </CCard>
            <CCard class="control-cards">
                <img class="plus" src="https://image.flaticon.com/icons/png/512/32/32339.png"/>
                <br>
                <label>Add Master Control Option</label>
            </CCard>
            </CRow>
        </CCard>
     
        <CCard class="settings-main-innerbody">
            <div>
            <label class="settings-headers">Weather Settings</label>
             <CIcon name="cil-arrow-right" style="margin-left: 505px"/>
            </div>
            <hr>
            <div>
            <label class="settings-headers">Notifications</label>
            <CIcon name="cil-arrow-right" style="margin-left: 535px"/>
            </div>
            <hr>
            <div>
            <label class="settings-headers">Display</label>
             <CIcon name="cil-arrow-right" style="margin-left: 572px"/>
            </div>
            <hr>
            <div>
            <label class="settings-headers">Members Access</label>
            <CIcon name="cil-arrow-right" style="margin-left: 508px"/>
            </div>
        </CCard>

        <CCard class="settings-account-innerbody">
            <div>
            <label class="settings-headers">Change Password</label>
             <CIcon name="cil-arrow-right" style="margin-left: 500px"/>
            </div>
            <hr>
            <div>
            <label class="settings-headers">About</label>
            <CIcon name="cil-arrow-right" style="margin-left: 573px"/>
            </div>
            <hr>
            <div>
            <label class="settings-headers">Support</label>
            <CIcon name="cil-arrow-right" style="margin-left: 562px"/>
            </div>
        </CCard>
    </CCardBody>
</CCard>
    </div>
</template>

<script>
export default {
    mounted(){
  $('.control-cards').click(function(){
  $(this).find('span').toggleClass('greenIndicator');
});
    },
    data(){
        return{
           
        };
    }
}
</script>

<style scoped>
.main-card{
width: 20cm;
height: auto;
display: block;
margin-left: auto;
margin-right: auto;
}

.settings-body{
    background-color: rgb(109, 125, 156);
}

.editLabel{
    margin-left: 5px;
    color: rgb(14, 14, 226);
}

.settings-control-innerbody, .settings-main-innerbody,
 .settings-account-innerbody{
    padding: 15px;
    border-radius: 40px;
}

.master-control{
    color: black;
}

.control-cards{
    padding: 10px;
    width: 150px;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    border: none;
    background-color: rgb(114, 144, 185);
    color: white;
    font-weight: bold;
    border-radius: 30px;
}

.control-cards:hover{
    background-color: rgb(149, 180, 224);
}

.light,.plus{
    width: 50px;
    height: auto;
    margin-bottom: 10px;
}

.sleep{
    width: 65px;
    height: auto;
    margin-bottom: 10px;
}

.visitor{
   width: 80px;
    height: auto;
    margin-bottom: 10px; 
}

 .indicator-light {
  display: block;
  width: 8px;
  height: 8px;
  background-color: rgb(226,0,0);
  box-shadow: inset 0px 1px 0px 0px rgba(250,250,250,0.5),
        0px 0px 3px 2px rgba(226,0,0,0.5);
  border-radius: 4px;
  clear: both;
margin-left: auto;
margin-right: auto;
}

.greenIndicator{
     background-color: rgb(135,187,83);
     box-shadow: inset 0px 1px 0px 0px rgba(250,250,250,0.5),
        0px 0px 3px 2px rgb(89, 133, 45);
}

.settings-headers{
    font-size: 15px;
    margin-left: 15px;
}


</style>