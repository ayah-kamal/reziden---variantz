<template>
<div>
    <h3>Device Energy Consumption Settings:</h3>
    <CCard>
  <CCardBody>
    <CDataTable
      :items="items"
      :fields="fields"
      table-filter
      items-per-page-select
      :items-per-page="5"
      hover
      sorter
      stripped
      pagination
    >

      <template #show_details="{item, index}">
        <td class="py-2">
          <CButton
            color="primary"
            variant="outline"
            square
            size="sm"
            @click="toggleDetails(item, index)"
          >
            {{Boolean(item._toggled) ? 'Save' : 'Edit'}}
          </CButton>
        </td>
      </template>

      <template #details="{item}">
        <CCollapse :show="Boolean(item._toggled)" :duration="collapseDuration">
          <CCardBody style="background-color: rgb(210, 224, 230)">
            <label for="status"
            style="margin-right: 20px;
            font-weight: bold">Change Status:</label>
            <select name="status" id="status">
            <option value="ON">Remain ON when energy reaches limit</option>
            <option value="OFF">Turn OFF when energy exceeds limit</option>
            </select>
            <br>
            <label for="limit"
            style="margin-right: 55px;
            font-weight: bold">Set Limit:</label>
            <input class="limit" id="limit" type="number" min="1" max="1000">
          </CCardBody>
        </CCollapse>
      </template>

    </CDataTable>
  </CCardBody>
    </CCard>
</div>
</template>

<script>
const items = [
  { appliance: 'Air Conditioning', status: 'Remain ON when energy reaches limit', limit: 'Active'},
    { appliance: 'Curtains', status: 'Remain ON when energy reaches limit', limit: 'Active'},
    { appliance: 'Lighting', status: 'Turn OFF when energy exceeds limit', limit: 'Inactive'},
    { appliance: 'Washing Machine', status: 'Turn OFF when energy exceeds limit', limit: 'Active'},
    { appliance: 'Television', status: 'Turn OFF when energy exceeds limit', limit: 'Pending'},
    { appliance: 'Fridge', status: 'Remain ON when energy reaches limit', limit: 'Pending'},
    { appliance: 'Air Fryer', status: 'Turn OFF when energy exceeds limit', limit: 'Pending'},
    { appliance: 'Coffee Machine', status: 'Turn OFF when energy exceeds limit', limit: 'Pending'},
    { appliance: 'Dryer', status: 'Turn OFF when energy exceeds limit', limit: 'Pending'},
    { appliance: 'Heater', status: 'Remain ON when energy reaches limit', limit: 'Pending'},
    { appliance: 'Stove', status: 'Turn OFF when energy exceeds limit', limit: 'Pending'},
    { appliance: 'Modem', status: 'Remain ON when energy reaches limit', limit: 'Pending'},
]

const fields = [
  { key: 'appliance', _style:'width:30%' },
  { key: 'status', _style:'width:40%;' },
  { key: 'limit', label: 'Limit (kWh)', _style:'width:20%;' },
  { 
    key: 'show_details', 
    label: '', 
    _style: 'width:1%', 
    sorter: false, 
    filter: false
  }
]

export default {
  name: 'AdvancedTables',
  data () {
    return {
      items: items.map((item, id) => { return {...item, id}}),
      fields,
      details: [],
      collapseDuration: 0
    }
  },
  methods: {
    getBadge (status) {
      switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: 'primary'
      }
    },
    toggleDetails (item) {
      this.$set(this.items[item.id], '_toggled', !item._toggled)
      this.collapseDuration = 300
      this.$nextTick(() => { this.collapseDuration = 0})
    }
  }
}
</script>


<style scoped>

h3{
    margin-bottom: 30px;
    background-color: rgb(78, 99, 128);
    color: rgb(210, 224, 230);
    padding: 10px;
    max-width: 100%;
}

</style>