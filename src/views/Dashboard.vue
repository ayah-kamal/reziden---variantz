<template>
  <div>
    <welcomeMessage/>

   <div  id = "slide">
   <CCarousel
    arrows
    indicators
    animate = true
    interval = "6000"
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
      captionText = "6 Active Devices"
    />
    <CCarouselItem
      captionHeader="Kitchen"
      image="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/4/23/1/HUHH2018-Curb-Appeal_Seattle-WA_11.jpg.rend.hgtvcom.966.644.suffix/1524514638493.jpeg"
      style="width:550px; height:350px;"
      captionText = "13 Active Devices"
    />
    <CCarouselItem
     captionHeader="Master Bedroom"
     image="https://assets.blog.hgtv.ca/wp-content/uploads/2019/10/28123144/celeb-bedroom-justin-bieber2.jpg"
     style="width:550px; height:350px;"
     captionText = "6 Active Devices"
    />
  </CCarousel>
</div>
<br>

<h4>Status</h4>
  <div class="wrapper cards">
  <div class="container">
    <div class="card">
      <div class="front">
        <img class="status" src="https://cdn3.iconfinder.com/data/icons/domestic-2/68/door_open_entrance_wall_enter_2-512.png"/>
        <h5>Back Home</h5>
        </div>
      <div class="back">
          <img class="status" src="https://cdn3.iconfinder.com/data/icons/domestic-2/68/door_open_entrance_wall_enter_exit-512.png"/>
          <h5>Away Home</h5>
      </div>
    </div>
  </div>
</div>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
  
     <!-- <CElementCover 
        :boundaries="[{ sides: ['top', 'left'], query: '.media-body' }]"
        :opacity="0.8" :center = true
      >
        <h1 class="d-inline">Loading... </h1><CSpinner size="5xl" color="success"/>
      </CElementCover> -->
    </div>
</template>





<script>
import MainChartExample from './charts/MainChartExample'
import WidgetsDropdown from './widgets/WidgetsDropdown'
import WidgetsBrand from './widgets/WidgetsBrand'
import welcomeMessage from './Welcome/WelcomeMessage'
import houseImage from './Welcome/HouseImage'


export default {
  name: 'Dashboard',
  components: {
    MainChartExample,
    WidgetsDropdown,
    WidgetsBrand,
    welcomeMessage,
    houseImage,
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
  width: 550px;
  height: 355px;
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

@import url(https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700);

body {
  font-family: 'Roboto Slab', serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.4em;
  color: #333;
  background: #eee;
}

input,
button {
  font-family: 'Roboto Slab', serif;
  font-weight: 300;
  font-size: 16px;
  border: 0;
  padding: 3px 5px;
  border-radius: 3px;
}

h1 {
  margin: 0.5em 0 1em 0;
  font-size: 1.8em;
  font-weight: 700;
  color: #096AA3;
}

h2, h3 {
  font-weight: bold;
}

p {
  margin-bottom: 1em;
}

.animation {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.wrapper {
  width: 80%;
  padding: 4%;
  margin: 20px auto;
  background: #fff;
}

.wrapper.cards {
  background: 0;
  width: 88%;
  padding: 20px 0 0 0;
}

.container {
  position: relative;
  float: left;
  width: 48%;
  height: 260px;
  margin: 10px 0 10px 4%;
  background: rgba(255, 255, 255, 0);
  
  
  /* Set the depth of the elements */
  -webkit-perspective: 800px;
  -moz-perspective: 800px;
  -o-perspective: 800px;
  perspective: 800px;
}

.container:first-child {
  margin-left: 0;
}

.card {
  width: 100%;
  height: 100%;
  position: center;
  cursor: pointer;

    left: 55%;

  /* Set the transition effects */
  -webkit-transition: -webkit-transform 0.4s;
  -moz-transition: -moz-transform 0.4s;
  -o-transition: -o-transform 0.4s;
  transition: transform 0.4s;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.card.flipped {
  -webkit-transform: rotateY( 180deg );
  -moz-transform: rotateY( 180deg );
  -o-transform: rotateY( 180deg );
  transform: rotateY( 180deg );
}

.card .front,
.card .back {
  display: block;
  height: 100%;
  width: 100%;
  line-height: 260px;
  color: white;
  text-align: center;
  font-size: 4em;
  position: absolute;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  
  box-shadow: 3px 5px 20px 2px rgba(0, 0, 0, 0.25);
}


.card .front {
  background: #222222;
}

.card .back {
  background: #444444;
  -webkit-transform: rotateY( 180deg );
  -moz-transform: rotateY( 180deg );
  -o-transform: rotateY( 180deg );
  transform: rotateY( 180deg );
}

.container:first-child .card .front {
  background: #94999c;
}

.container:first-child .card .back {
  background: #b8bfc4;
}

.cardTitle {
  font-size: 1.4em;
  line-height: 1.2em;
  margin: 0;
}

.content {
  padding: 4%;
  font-weight: 100;
  text-align: left;
}

button.btnSend {
  display: inline-block;
  min-width: 100px;
  padding: 3px 5px;
  margin-top: 10px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  color: #03446A;
  background: #fff;
  border: 0;
  border-radius: 3;
}

</style>
