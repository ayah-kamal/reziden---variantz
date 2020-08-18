<template>
<div>
    <h2 class="mainTitle">Energy Consumption</h2>

<div class="main-container">
   

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
        data: [12, 22, 24, 36, 48, 50, 36, 33, 35, 48, 24, 20,
        25, 22, 29, 36, 48, 54, 36, 31, 35, 58, 44, 22],
        backgroundColor: 'rgb(235, 182, 36)',
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
        data: [20, 21, 19, 20, 25, 30, 32],
        backgroundColor: 'rgb(235, 182, 36)',
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
        backgroundColor: 'rgb(235, 182, 36)',
        label: 'Energy Consumption Level',
      }
    ]"
    labels="months"
    :options="{ maintainAspectRatio: false }"
  />
    </CTab>
  </CTabs>

   <div class="monthEnergy">
  <CWidgetProgress
        class="monthEnergyWidget"
        header="July"
        text="Limit Set: 800kWh"
        footer=""
        color="secondary"
        :value="89"
      />
      <CWidgetProgress
        class="monthEnergyWidget"
        header="June"
        text="Limit Set: 795kWh"
        footer=""
        color="secondary"
        :value="75"
      />
   </div>
   <label style="margin-left: 2vw;
      font-size: 10px"
      >Last Updated: <i>9:29PM 17/08/2020</i></label>
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
      <br>
      <CButton class="settingBtn" @click="routeToEnergySettings()"><CIcon name="cil-settings" 
      style="margin-right: 10px"/>Settings</CButton>
    </div>

      
    </div>

    
    

     <br>

    <CAlert color="danger" closeButton fade
    style="width: 100%">
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
    style="width: 100%">
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
    },
    routeToEnergySettings: function(){
      this.$router.push('./device-energy-settings');
    }
  }
  
}
</script>

<style scoped>
.main-container{
display: inline-flex;
justify-content: space-between;
align-items: flex-start;
flex-direction: column;
}

.mainTitle{
    background-color: rgb(78, 99, 128);
    color: rgb(210, 224, 230);
    padding: 10px;
    max-width: 100%;
    margin-bottom: 30px;
}

.MainEnergyConsumptionContainer{
  display: inline-flex;
  /* flex-wrap: wrap; */
  overflow: auto;
  width: 100%;
  height: auto;
}

.EnergyConsumptionContainer{
    background-color: rgb(255, 255, 255);
    width: 50%;
    padding: 20px;
    margin-right: 33px;
    margin-bottom: 20px;
}

.graphTabTitles{
    margin-top: 20px;
}

.devicesEnergy{
  /* display: inline-block; */
  background-color: rgb(255, 255, 255);
  padding: 20px;
  width: 40vw;
  margin-bottom: 20px;
}

.devicesTiles{
  margin-left: 1vw;
}

.deviceWidgets{
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

.monthEnergy{
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.monthEnergyWidget{
  min-width: 15vw;
  max-width: 17.5vw;
  background-color: rgb(195, 220, 236);
  margin-left: 10px;
  margin-right: 10px;
}

.settingBtn{
  margin-left: 2vw;
  margin-top: 20px;
  background-color: rgb(235, 182, 36);
  padding: 5px;
  color: white;
  
}



</style>