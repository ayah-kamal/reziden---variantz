<template>
<div>
    <h2 class="mainTitle">Energy Consumption</h2>

    <div class="d-flex flex-wrap">
    <div class="EnergyConsumptionContainer">

    <CTabs variant="tabs" :active-tab="1">
    <CTab title="Hourly">
        <h5 class="graphTabTitles">Day: 16/08/2020</h5>
    
      <CChartLine
    style="height:300px;
    width: 600px"
    :datasets="[
      {
        data: [12, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12,
        10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12],
        backgroundColor: 'rgb(252, 249, 110)',
        label: 'Energy Consumption Level',
      }
    ]"
    labels="indexes"
    :options="{ maintainAspectRatio: false }"
  />
    
    </CTab>
    <CTab title="Daily">
        <h5 class="graphTabTitles">Month: August</h5>
        <h5>Week: 3</h5>
    <CChartLine
    style="height:300px;
    width: 600px"
    :datasets="[
      {
        data: [13, 18, 22, 32, 48, 70, 78],
        backgroundColor: 'rgb(252, 249, 110)',
        label: 'Energy Consumption Level',
      }
    ]"
    :labels="['Mon','Tue','Wed','Thu','Fri','Sat','Sun']"
    :options="{ maintainAspectRatio: false }"
  />
    </CTab>
    <CTab title="Monthly">
        <h5 class="graphTabTitles">Year: 2019</h5>
         <CChartLine
    style="height:300px;
    width: 600px"
    :datasets="[
      {
        data: [13, 18, 22, 32, 48, 70, 78, 89, 92, 78, 34, 12],
        backgroundColor: 'rgb(252, 249, 110)',
        label: 'Energy Consumption Level',
      }
    ]"
    labels="months"
    :options="{ maintainAspectRatio: false }"
  />
    </CTab>
  </CTabs>
   </div>


    <div class="devicesEnergy">
      <h4 style="margin-left: 2vw">Devices:</h4>
      <h6 style="margin-left: 2vw"><i>(per year: 2019)</i></h6>
      <br>
      <CCol>
      <CRow class="devicesTiles">
      <CWidgetSimple class="deviceWidgets" header="Lighting" text="1,105
      kWh">
        <CProgress
          animated
          color="warning"
          height="0.8rem"
          :value="60"
        />
      </CWidgetSimple>
   
      <CWidgetSimple class="deviceWidgets" header="Air Conditioning" text="7,123
      kWh">
        <CProgress
          animated
          color="danger"
          height="0.8rem"
          :value="80"
        />
      </CWidgetSimple>
      <CWidgetSimple class="deviceWidgets" header="'Living Room' TV" text="90
      kWh">
        <CProgress
          animated
          color="success"
          height="0.8rem"
          :value="20"
        />
      </CWidgetSimple>

      <CWidgetSimple class="deviceWidgets" header="Washing Machine" text="180
      kWh">
        <CProgress
          animated
          color="success"
          height="0.8rem"
          :value="27"
        />
      </CWidgetSimple>
      </CRow>
      <CRow class="devicesTiles">
      <CWidgetSimple class="deviceWidgets" header="Dryer" text="200
      kWh">
        <CProgress
          animated
          color="success"
          height="0.8rem"
          :value="37"
        />
      </CWidgetSimple>
   
      <CWidgetSimple class="deviceWidgets" header="Dishwasher" text="220
      kWh">
        <CProgress
          animated
          color="success"
          height="0.8rem"
          :value="45"
        />
      </CWidgetSimple>
      <CWidgetSimple class="deviceWidgets" header="Fridge" text="190
      kWh">
        <CProgress
          animated
          color="success"
          height="0.8rem"
          :value="30"
        />
      </CWidgetSimple>
      </CRow>
      </CCol>
      <label style="margin-left: 2vw;
      font-size: 10px"
      >Last Updated: <i>9:29PM 17/08/2020</i></label>
    </div>

    </div>

    
    

     <br>

    <CAlert color="danger" closeButton fade
    style="width: 750px">
    <CIcon name="cilBellExclamation" style="float: left"/>
    <h6>Monthly Report:</h6>
    There is a noticable rise in energy consumption during summer months.<br>
       Main source of energy drain is <b><i>Air Conditioner</i></b><br>
       <br>
       <u><b>Recommended Action:</b></u> 
       <CLink  class="text-white bg-danger px-2"
       @click="warningModal = true"
       style="font-size: 15px;
       margin-left: 10px;">
         Set Energy Limit</CLink>
  </CAlert>

  <CAlert color="warning" closeButton fade
    style="width: 750px">
    <CIcon name="cilBellExclamation" style="float: left"/>
    <h6>Hourly Report:</h6>
    You can decrease <i><b>Lighting</b></i> energy consumption 
    by automating lights to turn off while <i>away from home</i><br>
    <br>
       <u><b>Recommended Action:</b></u> 
       <CLink  class="text-white bg-warning px-2"
       @click='routeToSettings()'
       style="font-size: 15px;
       margin-left: 10px;">
         Add 'Away from Home' Master Control</CLink>
  </CAlert>

   <CModal
      title="Set Energy Limit"
      color="secondary"
      :show.sync="warningModal"
    >
      <div>
        <label for="limitMonth">Select Month: </label>
        <input id="limitMonth" type="month"
        style="margin-left: 40px" required/>

        <br>

        <label for="limitPower">Enter Limit: </label>
        <input id="limitPower" type="number"
        min="1" max="450"
        style="margin-left: 56px" required/>
        <span style="margin-left:5px;">kWh</span>

        </div>
    </CModal>



    </div>
</template>


<script>
export default {
  data() {
    return{
      warningModal: false
    }
  },
  methods: {
    routeToSettings: function () {
      this.$router.push('./pages/Settings');
    }
  }
  
}
</script>

<style scoped>
.mainTitle{
    background-color: rgb(78, 99, 128);
    color: rgb(210, 224, 230);
    padding: 10px;
    max-width: 67vw;
    margin-bottom: 30px;
}

.EnergyConsumptionContainer{
    display: inline-block;
    background-color: rgb(255, 255, 255);
    max-width: 70vw;
    padding: 20px;
    margin-right: 33px;
    margin-bottom: 20px;
}

.graphTabTitles{
    margin-top: 20px;
}

.devicesEnergy{
  display: inline-block;
  background-color: rgb(255, 255, 255);
  min-width: 640px;
  padding: 20px;
  margin-bottom: 20px;
}

.devicesTiles{
  margin-left: 1vw;
}

.deviceWidgets{
  margin-right: 40px;
  width: 130px;
  background-color: rgb(210, 224, 230);
}

</style>