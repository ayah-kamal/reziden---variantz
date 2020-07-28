<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <img
            src="https://cdn2.iconfinder.com/data/icons/lucid-generic/24/User_person_avtar_profile_picture_dp-512.png"
            class="c-avatar-img"
            style="height: 50px; width: 50px"
          />
        </div>
      </CHeaderNavLink>
    </template>

    <CDropdownItem v-on:click= "logoutMethod">
      <CIcon name="cil-user" /> Profile
    </CDropdownItem>

    <CDropdownItem v-on:click= "logoutMethod">
      <CIcon name="cil-settings" /> Settings
    </CDropdownItem>
   
    <CDropdownItem  v-on:click= "logoutMethod">
      <CIcon name="cil-lock-locked"/>Logout
    </CDropdownItem>

  </CDropdown>
</template>

<script>
export default {
  name: 'TheHeaderDropdownAccnt',
  data () {
    return { 
      itemsCount: 42
    }
  },
  methods:{
    logoutMethod: function(){
      this.$router.push("../pages/Login");
    }
  }
}

</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>