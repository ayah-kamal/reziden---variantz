<template>
    <weather title="Weather" units="ca" :currentDay="currentDay" :forecast="forecast">
    </weather>
</template>
 
<script>
import VueWeatherComponent from 'vue-weather-component';
 
export default {
    components: {
        'weather': VueWeatherComponent
    },
 
    data() {
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
    }
}
</script> 