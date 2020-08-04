<template>
    <div>
<CCard>
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


    </CCardBody>
</CCard>
    </div>
</template>

<script>
export default {
    data(){
        return{
           
        };
    }
}
</script>

<style scoped>
.settings-body{
    background-color: rgb(82, 103, 146);
}

.editLabel{
    margin-left: 5px;
    color: rgb(14, 14, 226);
}

</style>