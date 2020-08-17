<template>
<div class="main-container">
    <h2 class="mainTitle">Energy Consumption</h2>

    <!-- <div class="d-flex flex-wrap"> -->
    <div class="MainEnergyConsumptionContainer">
    <div class="EnergyConsumptionContainer">

    <CTabs variant="tabs" :active-tab="1">
    <CTab title="Hourly">
        <h5 class="graphTabTitles">Day: 16/08/2020</h5>
    
      <CChartLine
    style="height:300px;
    max-width: 500px"
    :datasets="[
      {
        data: [12, 22, 34, 46, 58, 70, 46, 43, 45, 78, 34, 30,
        35, 32, 39, 46, 58, 70, 46, 41, 45, 78, 34, 12],
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
    max-width: 500px"
    :datasets="[
      {
        data: [200, 210, 190, 200, 250, 300, 320],
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
    max-width: 500px"
    :datasets="[
      {
        data: [612, 603, 696, 764, 806, 967, 1050, 1104, 1003, 932, 887, 732],
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

        <div class="devicesGrid">
      <CWidgetSimple class="deviceWidgets" header="Air Conditioning">
      <label class="deviceText">5,180<br>kWh</label>
        <CProgress
          animated
          color="danger"
          height="0.8rem"
          :value="80"
        />
      </CWidgetSimple>
      <CWidgetSimple class="deviceWidgets" header="'Living Room' TV">
      <label class="deviceText">90<br>kWh</label>
        <CProgress
          animated
          color="success"
          height="0.8rem"
          :value="20"
        />
      </CWidgetSimple>

      <CWidgetSimple class="deviceWidgets" header="Washing Machine">
      <label class="deviceText">180<br>kWh</label>
        <CProgress
          animated
          color="success"
          height="0.8rem"
          :value="27"
        />
      </CWidgetSimple>

      <CWidgetSimple class="deviceWidgets" header="Dishwasher">
      <label class="deviceText">220<br>kWh</label>
        <CProgress
          animated
          color="success"
          height="0.8rem"
          :value="45"
        />
      </CWidgetSimple>
      <CWidgetSimple class="deviceWidgets" header="Fridge">
      <label class="deviceText">190<br>kWh</label>
        <CProgress
          animated
          color="success"
          height="0.8rem"
          :value="30"
        />
      </CWidgetSimple>
      <CWidgetSimple class="deviceWidgets" header="Lighting">
      <label class="deviceText">1,105<br>kWh</label>
        <CProgress
          animated
          color="warning"
          height="0.8rem"
          :value="60"
        />
      </CWidgetSimple>
      </div>

      <label style="margin-left: 2vw;
      font-size: 10px"
      >Last Updated: <i>9:29PM 17/08/2020</i></label>
    </div>

    </div>

    
    

     <br>

    <CAlert color="danger" closeButton fade
    style="width: 80vw">
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
    style="width: 80vw">
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

   <h2 class="mainTitle"></h2>


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
.main-container{
justify-content: center;
width: fit-content;
height: auto;
}

.mainTitle{
    background-color: rgb(78, 99, 128);
    color: rgb(210, 224, 230);
    padding: 10px;
    max-width: 75vw;
    margin-bottom: 30px;
}

.MainEnergyConsumptionContainer{
  display: inline-flex;
  flex-wrap: wrap;
  width: 75vw;
  height: auto;
}

.EnergyConsumptionContainer{
    display: inline-block;
    background-color: rgb(255, 255, 255);
    min-width: 33vw;
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
  padding: 20px;
  min-width: 33vw;
  margin-bottom: 20px;
}

.devicesTiles{
  margin-left: 1vw;
}

.deviceWidgets{
  margin-right: 40px;
  width: 112px;
  background-color: rgb(210, 224, 230);
  font-size: smaller;
}

.deviceText{
  font-weight: bolder;
  font-size: 15px;
  margin-top: 5px;
}

.devicesGrid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 3px;

}

</style>