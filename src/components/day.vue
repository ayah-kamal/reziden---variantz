<template>
    <div class="day">
        <p class="day-name" style="color: rgb(51, 51, 51);">
            {{ name }}
        </p>

        <img width="35" height="35" :src="iconPath" :alt="icon + ' Icon'">
        <p class="high-temp" style="color: rgb(51, 51, 51);">{{ highTemp }}˚</p>
        <p class="low-temp" style="color: rgb(199, 199, 199);">{{ lowTemp }}˚</p>
    </div>
</template>

<script>
    export default {
        name: "Day",

        props: [
            'name',
            'icon',
            'highTemp',
            'lowTemp'
        ],

        computed: {
            iconPath: function () {
                return require("../assets/images/weather-icons/" + this.icon + ".png");
            }
        }
    }
</script>

<style scoped>
    .day {
        padding: 5px 15px;
        font-size: 1.5em;
        text-align: center;
    }

    .day-name {
        font-weight: bold;
        font-size: .5em;
    }

    .day canvas {
        width: 26px;
        height: 26px;
    }

    .day p {
        margin: 0;
    }

    .day p:last-child {
        margin-top: -3px;
        /*color: #c7c7c7;*/
    }

    @media screen and (max-width: 600px) {
        .day {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 1.5em;
            padding: 0;
            margin: 0 8%;

        }

        .day .high-temp, .day .low-temp {
            min-width: 30px;
        }

        .day-name {
            width: 3em;
        }

        .day canvas {
            /* width: 45px; */
            /* height: 45px; */
        }
    }

    @media screen and (max-width: 250px) {
        .day {
            margin: 0 5%;
        }

        .day canvas {
            width: 40px;
            height: 40px;
        }
    }

    @media screen and (max-width: 600px) and (max-height: 380px) {
        #daily .day:first-child {
            /* margin: 0; */
        }

        .day p.day-name {
            margin-right: -10px;
        }

        .day p.low-temp {
            margin-top: 0;
            margin-left: -15px;
        }

        #daily .day:first-child {
            /* margin: 0; */
        }
    }

    @media screen and (max-width: 600px) and (max-height: 300px) {
        .day {
            display: none;
        }

        .day:first-child {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 1.5em;
            padding: 0;
            margin: 0 1%;
        }
    }

    @media (max-width: 320px) {
        .day p.day-name {
            margin-right: -10px;
        }

        .day p.low-temp {
            margin-top: 0;
            margin-left: -15px;
        }
    }
</style>