<template>
  <div>
    <welcomeMessage/>

   <div  id = "slide">
   <CCarousel
    arrows
    indicators
    animate = true
    interval = "6000"
    height="100%"
  >
    <CCarouselItem
      captionHeader="Home"
      image="https://images.adsttc.com/media/images/5be9/fd5c/08a5/e5a5/8c00/008f/large_jpg/CARLES_FAUS_ARQUITECTURA_-_CARMEN_HOUSE_(2).jpg?1542061390"
      style="width:450px; height:250px;"
    />
    <CCarouselItem
      captionHeader="Living Room"
      image="https://media.architecturaldigest.com/photos/560c37dd7da26e3235ad995e/16:9/w_1280,c_limit/gray-living-room-01.jpg"
      style="width:450px; height:250px;;"
      captionText = "6 Active Devices"
    />
    <CCarouselItem
      captionHeader="Kitchen"
      image="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/4/23/1/HUHH2018-Curb-Appeal_Seattle-WA_11.jpg.rend.hgtvcom.966.644.suffix/1524514638493.jpeg"
      style="width:450px; height:250px;"
      captionText = "13 Active Devices"
    />
    <CCarouselItem
     captionHeader="Master Bedroom"
     image="https://assets.blog.hgtv.ca/wp-content/uploads/2019/10/28123144/celeb-bedroom-justin-bieber2.jpg"
     style="width:450px; height:250px;"
     captionText = "6 Active Devices"
    />
  </CCarousel>
</div>
<br>

<h4>Overview</h4>
<div class="overviewContainer">
  
<div class="energyContainer">
<CChartLine
    style="height:350px;
    width: 480px"
    :datasets="[
      {
        data: [600, 610, 654, 697, 700, 706, 793, , , , , , ,],
        fill: false,
        borderColor: 'rgb(235, 182, 36)',
        label: 'Energy Consumption Level',
      },
      {
        data: [ , , , , , ,793,800, 850, 790, 750, 700, 690],
         fill: false,
         borderColor: 'lightblue',
         borderDash: [10],
        label: 'Predicted Energy Consumption Level',
      }
    ]"
    labels="months"
    :options="{ maintainAspectRatio: false }"
  />
   <h7>Year: 2020</h7>
  </div>

<div class="monthEnergyContainer">
  <CWidgetProgress
        class="monthEnergyWidget"
        header="July"
        text="Limit Set: 800kWh"
        footer="Power Usage: 793kWh"
        color="secondary"
        :value="89"
      />
      <CWidgetProgress
        class="monthEnergyWidget"
        header="June"
        text="Limit Set: 795kWh"
        footer="Power Usage: 706kWh"
        color="secondary"
        :value="75"
      />
   </div>

</div>

<h4></h4>
<br>

<weatherWidget/>
</div>
</template>



<script>
import MainChartExample from './charts/MainChartExample'
import WidgetsDropdown from './widgets/WidgetsDropdown'
import WidgetsBrand from './widgets/WidgetsBrand'
import welcomeMessage from './Welcome/WelcomeMessage'
import houseImage from './Welcome/HouseImage'
import weatherWidget from '../components/weather'


export default {
  name: 'Dashboard',
  components: {
    MainChartExample,
    WidgetsDropdown,
    WidgetsBrand,
    welcomeMessage,
    houseImage,
    weatherWidget,
  },
  mounted(){
  $('.card').click(function(){
  $(this).toggleClass('flipped');
});


  },
  methods: {
    
  },
   data () {
    return {
      modes: [
        {},
        { size: 'lg'},
        { variant: '3d' },
        { shape: 'pill' },
      ],
      colors: ['dark']
    }
  }
}
</script>


<style scoped>
.slide{
  width: 450px;
  height: 250px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.CCarouselItem{
  text-emphasis-color: black;
}

h4{
    color: white;
    text-align: center;
    padding: 10px;
    background-color: rgb(82, 110, 163);
    margin-bottom: 0;
}

h5{
  color: white;
    text-align: center;
    padding: 10px;
    background-color: rgb(82, 110, 163);
}

.status{
  width: 100px;
  height: 100px;
}

.overviewContainer{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 5px;
  margin-bottom: 20px;
}

.energyContainer{
padding: 10px;
height: 43vh;
margin-top: 20px;
background-color: #dee8f0;
}

.monthEnergyWidget{
  min-width: 15vw;
  max-width: 17.5vw;
  max-height: 250px;
  background-color: rgb(195, 220, 236);
  margin-left: 10px;
  margin-right: 10px;
}


.monthEnergyContainer{
  margin-top:20px;
  display: flex;
  flex-flow: column wrap;
}



</style>
