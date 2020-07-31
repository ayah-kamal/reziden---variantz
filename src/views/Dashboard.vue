<template>
  <div>
    <welcomeMessage/>

    <div  id = "slide">
   <CCarousel
    arrows
    indicators
    animate
    height="350px"
  >
    <CCarouselItem
      captionHeader="Home"
      image="https://images.adsttc.com/media/images/5be9/fd5c/08a5/e5a5/8c00/008f/large_jpg/CARLES_FAUS_ARQUITECTURA_-_CARMEN_HOUSE_(2).jpg?1542061390"
      style="width:550px; height:350px;"
    />
    <CCarouselItem
      captionHeader="Living Room"
      image="https://media.architecturaldigest.com/photos/560c37dd7da26e3235ad995e/16:9/w_1280,c_limit/gray-living-room-01.jpg"
      style="width:550px; height:350px;"
    />
    <CCarouselItem
      captionHeader="Kitchen"
      image="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/4/23/1/HUHH2018-Curb-Appeal_Seattle-WA_11.jpg.rend.hgtvcom.966.644.suffix/1524514638493.jpeg"
      style="width:550px; height:350px;"
    />
    <CCarouselItem
     captionHeader="Master Bedroom"
     image="https://assets.blog.hgtv.ca/wp-content/uploads/2019/10/28123144/celeb-bedroom-justin-bieber2.jpg"
     style="width:550px; height:350px;"
    />
  </CCarousel>
</div>
   
    <!-- <vue-weather api-key="<your-dark-sky-api-key>" units="uk" />
      <weather title="Weather" units="ca" :currentDay="currentDay" :forecast="forecast">
    </weather> -->
    <!-- <div>
    <a class="weatherwidget-io" href="https://forecast7.com/en/40d71n74d01/new-york/" data-label_1="NEW YORK" data-label_2="WEATHER" data-theme="original" >NEW YORK WEATHER</a>
    </div> -->
    <!-- <button v-on:click="newDevice">Add New Device</button> -->
  
  </div>
</template>


<script>
import MainChartExample from './charts/MainChartExample'
import WidgetsDropdown from './widgets/WidgetsDropdown'
import WidgetsBrand from './widgets/WidgetsBrand'
import welcomeMessage from './Welcome/WelcomeMessage'
import houseImage from './Welcome/HouseImage'
/*import VueWeatherWidget from "vue-weather-widget/src/VueWeatherWidget.vue";
import VueWeatherComponent from 'vue-weather-component';*/

export default {
  name: 'Dashboard',
  components: {
    MainChartExample,
    WidgetsDropdown,
    WidgetsBrand,
    welcomeMessage,
    houseImage,
    //VueWeatherWidget,
   // VueWeatherComponent,
  },
 
  methods: {
    color (value) {
      let $color
      if (value <= 25) {
        $color = 'info'
      } else if (value > 25 && value <= 50) {
        $color = 'success'
      } else if (value > 50 && value <= 75) {
        $color = 'warning'
      } else if (value > 75 && value <= 100) {
        $color = 'danger'
      }
      return $color
    },

    newDevice: function(){
      this.$router.push("../Rooms/DeviceAdd");
    },
    /*data() {
        return {
            currentDay: {
                icon: 'fog',
                temp: '17',
                currentSummary: 'Fog.',
                hourlySummary: 'Partly cloudy throughout the day.',
                windSpeed: 6
            },

            forecast: [{
                name: 'Today',
                icon: 'clear-day',
                highTemp: '37',
                lowTemp: '32'
            }, {
                name: 'Wed',
                icon: 'fog',
                highTemp: '34',
                lowTemp: '29'
            }, {
                name: 'Thu',
                icon: 'cloudy',
                highTemp: '35',
                lowTemp: '30'
            }, {
                name: 'Fri',
                icon: 'rain',
                highTemp: '32',
                lowTemp: '24'
            }, {
                name: 'Sat',
                icon: 'snow',
                highTemp: '-7',
                lowTemp: '-18'
            }, {
                name: 'Sun',
                icon: 'wind',
                highTemp: '23',
                lowTemp: '18'
            }, {
                name: 'Mon',
                icon: 'sleet',
                highTemp: '-1',
                lowTemp: '-6'
            }, {
                name: 'Tue',
                icon: 'clear-day',
                highTemp: '13',
                lowTemp: '7'
            }]
        }
    }*/
  }
}
</script>


<style scoped>
.slide{
  width: 550px;
  height: 355px;
  display: block;
  margin-left: auto;
  margin-right: auto;

}

</style>
