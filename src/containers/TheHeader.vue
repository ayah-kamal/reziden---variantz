<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$store.commit('toggleSidebarMobile')"
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$store.commit('toggleSidebarDesktop')"
    />
    <CHeaderBrand class="mx-auto d-lg-none" to="/">
    <!-- !this is the main logo! -->
      <!-- <CIcon name="logo" height="30" alt="Logo"/> -->
      <el-row :gutter="10" >
        <tr align = "center" >
      <CIcon src = "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1492809055/jufcxgwc0uvn43odpscl.png"
      size="custom-size"
        :height="150"
        viewBox="0 0 556 134"></CIcon>
        <!-- <h3 
        style=
        "color: rgba(19, 19, 82, 0.904);
         font-size: 25px; 
         font-weight: bold ;
         font-family: monospace; 
         font-style: italic;
         text-align: center">
        Smart Home UI</h3> -->
        </tr>
        </el-row>
    </CHeaderBrand>

    <CHeaderNav class="d-md-down-none mr-auto">
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/dashboard">
          Dashboard
        </CHeaderNavLink>
      </CHeaderNavItem>

      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/users" exact>
          Users
        </CHeaderNavLink>
      </CHeaderNavItem>

      <CHeaderNavItem class="px-3">
        <CHeaderNavLink>
          Settings
        </CHeaderNavLink>
      </CHeaderNavItem>

    </CHeaderNav>

    <CHeaderNav class="mr-4">
      <CHeaderNavItem class="d-md-down-none mx-1">
        

           <CDropdown
    inNav
    class="c-header-notif"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
          <CIcon name="cil-bell"/>

      </CHeaderNavLink>
    </template>

    <CDropdownItem disabled>06/07/2020</CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-bell-exclamation"/> New room added 'Guest Bedroom'
    </CDropdownItem>

    <CDropdownItem>
      <CIcon name="cil-bell-exclamation"/> New device added 'Diffuser' to 
      'Living Room'
    </CDropdownItem>
   
    <CDropdownItem>
      <CIcon name="cil-bell-exclamation"/>'Doorbell' used at 9:23PM 
    </CDropdownItem>

    <CDropdownItem>
      <CIcon name="cil-bell-exclamation"/>'Garage Door Opener' used at 7:34PM
    </CDropdownItem>

    <CDropdownItem>
      <CIcon name="cil-bell-exclamation"/>'Mudroom' renamed as 'Laundry Room'
    </CDropdownItem>

     <CDropdownDivider></CDropdownDivider>

     <CDropdownItem disabled>05/07/2020</CDropdownItem>
     <CDropdownItem>
      <CIcon name="cil-bell-exclamation"/> 'Temperature Sensor' registered new reading in 
      'Master Bedroom' - 21.5°C
    </CDropdownItem>

    <CDropdownItem>
      <CIcon name="cil-bell-exclamation"/> New login detected 
    </CDropdownItem>
   
    <CDropdownItem>
      <CIcon name="cil-bell-exclamation"/>'Coffee Machine' disabled in 'Kitchen' at 
      4:03PM 
    </CDropdownItem>

    <CDropdownItem>
      <CIcon name="cil-bell-exclamation"/>'Garage Door Opener' used at 8:14AM
    </CDropdownItem>


  </CDropdown>

      </CHeaderNavItem>

      <!-- <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <CIcon name="cil-list"/>
        </CHeaderNavLink>
      </CHeaderNavItem> -->

      <!-- <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <CIcon name="cil-envelope-open"/>
        </CHeaderNavLink>
      </CHeaderNavItem> -->

      <TheHeaderDropdownAccnt/>
    </CHeaderNav>
    <CSubheader class="px-3">
      <CBreadcrumbRouter class="border-0 mb-0"/>
    </CSubheader>
  </CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'

export default {
  name: 'TheHeader',
  components: {
    TheHeaderDropdownAccnt
  }
}
</script>




