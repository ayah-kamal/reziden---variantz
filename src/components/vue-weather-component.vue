<template>
    <div id="main">
        <div id="body" class="forecast" style="max-width: 100%;">
            <div class="vert-align">
                <div class="dark-sky-widget default-embed" data-name="default">
                    <div class="widget-container">
                        <div id="header" style="color: rgb(51, 51, 51); border-bottom: 2px solid rgb(51, 51, 51);">
                            <p id="location" style="color: rgb(51, 51, 51);">{{ title }}</p>
                            <div v-if="enableCredits" style="margin-bottom: 7px;">
                                <a id="default-attribution" target="_blank" href="https://darksky.net/forecast/42.360082,-71.05888/us12/en">
                                    More at Dark Sky
                                </a>
                                <svg class="widget-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"
                                     style="width: 18px; margin-top: 5px;">
                                    <path fill="#444"
                                          d="M 485 165 C 526 154 568 149 597 147 545 68 512 18 496 0 496 0 493 61 371 210 393 198 438 177 485 165 Z"></path>
                                    <path fill="#444"
                                          d="M 460 868 C 434 800 427 722 427 722 L 387 745 C 387 745 368 680 361 614 354 550 361 486 361 486 L 308 507 C 308 507 304 430 317 356 325 307 340 261 349 236 348 238 346 240 344 242 236 367 144 491 144 644 144 841 303 1000 499 1000 509 1000 519 1000 529 999 513 974 481 923 460 868 Z"></path>
                                    <path fill="#444"
                                          d="M 643 216 C 631 198 620 181 610 166 590 187 561 222 537 259 502 312 482 370 482 370 L 560 346 C 560 346 519 417 499 491 480 555 482 624 482 624 L 536 599 C 536 599 512 688 510 792 508 883 526 965 535 998 714 980 853 829 855 644 856 484 739 359 643 216 Z"></path>
                                </svg>
                            </div>
                            <p v-else></p> <!-- Needed because title font size changes otherwise -->
                        </div>
                        <div class="container">
                            <div class="current">
                                <img width="84" height="84" :src="currentDayIcon" :alt="currentDay.icon + ' Icon'">
                                <div class="current-temp" style="color: rgb(51, 51, 51);">
                                    <strong>{{ currentDay.temp }}˚</strong>
                                    <br>
                                    <span>Wind: {{ currentDay.windSpeed }} {{ windUnit }}</span>
                                </div>
                                <div id="current-summary" style="color: rgb(51, 51, 51);">
                                    <p> {{ currentDay.currentSummary }} </p>
                                    <p>
                                        {{ currentDay.hourlySummary }}
                                    </p>
                                </div>
                            </div>

                            <div id="daily">
                                <day v-for="day in forecast" :name="day.name" :icon="day.icon" :high-temp="day.highTemp" :low-temp="day.lowTemp"></day>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Day from './day';

    export default {
        name: 'vue-weather-component',

        components: {
            Day
        },

        props: {
            title: {
                type: String,
                default: 'Full Forecast'
            },

            enableCredits: {
                type: Boolean,
                default: true
            },

            units: {
                type: String,
                default: "ca",
                validator: function (value) {
                    return ['ca', 'uk2', 'us', 'si'].indexOf(value) !== -1;
                }
            },

            currentDay: {
                type: Object,
                default: function () {
                    return {
                        icon: 'clear-night',
                        temp: '23',
                        currentSummary: 'Clear.',
                        hourlySummary: 'Partly cloudy throughout the night.',
                        windSpeed: 5
                    }
                }
            },

            forecast: {
                type: Array,
                default: function () {
                    return [{
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
        },

        computed: {
            currentDayIcon: function () {
                return require("../assets/images/weather-icons/" + this.currentDay.icon + ".png")
            },

            windUnit: function () {
                switch (this.units) {
                    case "si":
                        return "mps";
                    case "ca":
                        return "kph";
                    case "uk2":
                        return "mph";
                    case "us":
                        return "mph";
                }
            }
        },

        data: function () {
            return {}
        }
    }
</script>

<style scoped>
    /* Set overall properties to border box */
    #main {
        box-sizing: border-box;
        font-size: 16px;
        height: 100%;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    /* Default settings */
    #body {
        max-width: 500px;
        margin: 0 auto;
        padding: 0;
        font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
        overflow: hidden;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    a {
        color: inherit;
    }

    #default-attribution {
        font-size: 0.8em;
        text-decoration: underline;
    }

    /* Header settings */
    #header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        border-bottom: 2px solid #333333;
        /*visibility: hidden;*/
    }

    #header p {
        margin-bottom: 7px;
    }

    #header p:first-child {
        font-size: 1.2em;
        font-weight: bold;
        padding-left: 15px;
    }

    #header p:last-child {
        font-size: .8em;
        padding-right: 15px;
    }

    #loading {
        font-size: 3em;
    }

    /* Container settings */
    #container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        margin: 0 3px;
        padding: 5px 0;
    }

    #current {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;

    }

    #current-temp {
        margin: 0 5%;
        font-size: 3.5em;
    }

    #current-temp span {
        display: block;
        text-align: left;
        font-size: .25em;
    }

    #current-temp span:first-child {
        margin-top: -12px;
    }

    #current-temp span:last-child {
        font-size: .20em;
        margin-top: 5px;
    }

    #current canvas {
        width: 80px;
        height: 80px;
    }

    #current-summary {
        font-size: 1em;
    }

    #current-summary p:first-child {
        font-weight: bold;
    }

    #current-summary p:last-child {
        font-size: .8em;
        margin-top: -12px;
    }

    #daily {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        margin-top: 10px;
    }

    /* Customization page styles */

    #body {
        max-width: 100%;
        height: auto;
        overflow: visible;
    }

    .header {
        display: flex;
        flex-direction: column;
        background-color: #F1F1F1;
        margin-bottom: 50px;
        /*padding-bottom: 100px;*/
    }

    .header .section-header {
        display: flex;
        justify-content: flex-end;
        color: #FFFFFF;
        background-color: #333333;
    }

    .header .section-header p {
        margin-right: 5%;
        font-size: 1em;
        font-weight: 400;
    }

    .header .section-header p a {
        color: #ffffff;
        text-decoration: underline;
        font-size: 1em;
    }

    .header .section-header p a:hover {
        text-decoration: none;
    }

    .main-container {
        padding: 150px;
        /*border-bottom: 1px solid grey;*/
        /*background: url(../images/bg_2.jpg) no-repeat center center fixed;*/
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    h1, h3 {
        text-align: center;
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        font-size: 3em;
        /*margin: 0;*/
        padding: 0;
        color: #FFFFFF;
    }

    h3 {
        font-weight: 400;
        font-size: 2em;
    }

    .embed-name {
        text-align: center;
        font-size: 1.5em;
    }

    #header {
        visibility: visible;
    }

    #header p a {
        color: #333;
    }

    .dark-sky-widget {
        margin: 0 auto;
        /*margin: 150px 0;*/
    }

    hr {
        margin: 75px 10%;
    }

    .dark-sky-widget .widget-container {
        max-width: 500px;
        /*min-height: 300px;*/
        margin: 0 auto;
    }

    .selected {
        background-color: #EEEEEE;
    }

    #customize-container {
        display: flex;
        flex-direction: column;
    }

    #custom-tools {
        display: flex;
        flex-direction: column;
    }

    #custom-controls {
        display: flex;
        justify-content: space-around;
        width: 60%;
        margin: 0 auto;
    }

    #custom-map {
        /*margin: 0 auto;*/
        display: flex;
        justify-content: center;
    }

    .content-container {
        text-align: center;
        margin: 25px 0;
        display: none;
    }

    .content-container input {
        box-sizing: content-box;
        width: 75%;
        height: 20px;
        padding: 3px 3px;
        border-radius: 3px;
        border: 2px solid #C7C7C7;
    }

    .column p, form p {
        padding: 0 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .column p span input, form p span input:not(#submit) {
        padding: 5px 3px;
        border-radius: 3px;
        border: 1px solid grey;
    }

    #gmaps p span input {
        margin: 0 15px;
    }

    .column p:hover, form p:hover {
        background-color: #EEE;
    }

    form p:nth-child(4):hover {
        background-color: #FFFFFF;
    }

    .column p span:first-child {
        margin-right: 5px;
    }

    .description {
        margin: 0 auto;
        width: 60%;
    }

    button, #submit {
        /*transition: .3s;*/
        background-color: #228FFF;
        color: white;
        font-size: 14px;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        border: 2px solid #1F8CFD;
        border-radius: 3px;
        padding: 3px 12px;
        text-transform: uppercase
    }

    button:hover {
        /*transition: .3s;*/
        cursor: pointer;
        font-weight: 400;
        /*padding: 5px 15px;*/
        /*font-size: 1.6em;*/
    }

    .show-hide-map {
        margin: 0 auto;
    }

    #submit, .show-hide-map button {
        transition: .3s;
        font-size: 1em;
    }

    #submit:hover, .show-hide-map button:hover {
        cursor: pointer;
        font-weight: 400;
        /*background-color: #0C4075;*/
        /*font-size: 1em;*/
        /*padding: 3px 12px;*/
    }

    .button-generate, .button-reset {
        margin: 10px 0;
        text-align: center;
        height: 50px;
    }

    .reset {
        display: none;
    }

    footer {
        min-height: 175px;
        width: 80%;
        margin: 20px auto;
        border: 25px solid grey;
    }

    footer p {
        padding: 0 5px;
    }

    footer p code {
        word-wrap: break-word;
    }

    #custom-tools, footer {
        display: none;
    }

    /* Container settings */
    .container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        /*border-top: 2px solid #333333;*/
        margin: 0 3px;
        padding: 5px 0;
    }

    .current {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;

    }

    .current-temp {
        margin: 0 5%;
        font-size: 3.5em;
        text-align: center;
    }

    .current-temp span {
        display: block;
        text-align: left;
        font-size: .25em;
    }

    .current-temp span:nth-child(2) {
        position: relative;
        margin-top: -10px;
    }

    .current-temp span:last-child {
        font-size: .2em;
    }

    .current canvas {
        width: 80px;
        height: 80px;
    }

    .current-summary {
        font-size: 1em;
    }

    .current-summary p:first-child {
        font-weight: bold;
    }

    .current-summary p:last-child {
        font-size: .8em;
        margin-top: -12px;
    }

    #map-canvas {
        width: 350px;
        height: 250px;
    }

    .widget-logo {
        position: relative;
        vertical-align: unset;
        width: 18px;
        height: 18px;
        top: 3px;
        left: 2px;
    }

    /* Media query for mobile devices */

    @media screen and (max-width: 740px) {
        .main-container {
            padding: 5%;
            width: auto;
        }

        #container {
            flex-direction: column;
            /*text-align: center;*/
        }

        .widget-description-container {
            flex-direction: column;
        }

        .widget-iframe-container {
            width: auto;
            min-width: 100%;
        }


        .widget-container-description {
            width: auto;
            position: static;
            margin: 0 3%;
        }

        .widget-description-body {
            margin: 0 auto;
        }

        .widget-description-title, .button-generate {
            text-align: center;
        }
    }

    @media screen and (max-width: 600px) {

        .main-container h1 {
            font-size: 1.7em;
        }

        .main-container h3 {
            font-size: 1.2em;
        }

        #header p:first-child {
            padding-left: 0;
            max-width: 75px;
            margin-right: 5px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 12px;
        }

        #header p:last-child {
            padding-right: 0;
        }

        .default-embed #current, .default-embed .current {
            justify-content: space-around;
        }

        #current-temp {
            margin: 0;
            font-size: 2.5em;
        }

        #current-temp span {
            font-size: .3em;
        }

        #daily {
            width: 100%;
            flex-direction: column;
            flex-wrap: nowrap;
        }

        .daily-hide {
            display: none;
        }

        .description {
            width: 80%;
        }

        /* Customization Controls */
        #gmaps {
            margin: 0 auto;
            width: 80%;
        }

        #gmaps p:nth-child(4) {
            padding: 0;
        }

        #gmaps p:nth-child(4) span {
            margin: 0 auto;
        }

        #custom-map {
            flex-direction: column;
        }

        #map-canvas {
            margin: 0 auto;
            width: 70%;
        }

        .show-hide-map p {
            text-align: center;
        }
    }

    @media screen and (max-width: 450px) {
        #current canvas, .current canvas {
            width: 60px;
            height: 60px;
        }

        #current-summary p:first-child {
            margin-bottom: 0;
        }

        #current-summary p:nth-child(2) {
            margin-top: 0;
        }

        #custom-controls {
            flex-direction: column;
            width: 80%;
        }
    }

    @media screen and (max-width: 250px) {
        #main {
            font-size: 14px;
        }

        #current canvas, .current canvas {
            width: 60px;
            height: 60px;
        }

        #current-temp {
            font-size: 2em;
        }
    }

    @media screen and (max-width: 600px) and (max-height: 380px) {
        #current, .current {
            display: none;
        }

        #daily .day:first-child {
            /* margin: 0; */
        }

        #daily .day:first-child {
            /* margin: 0; */
        }
    }

    @media screen and (max-height: 300px) {
        #current, .current {
            display: none;
        }

        #header {
            font-size: .8em;
        }
    }

    @media screen and (max-width: 600px) and (max-height: 300px) {
        #current, .current {
            display: none;
        }
    }

    @media (max-width: 695px) {
        nav {
            font-size: 15px;
        }

        nav a {
            padding: 2%;
        }
    }

    @media (max-width: 425px) {
        nav a {
            padding: 1%;
        }

        #header h1 {
            font-size: 2.2em;
        }

        #header h2 {
            font-size: 1.2em;
        }

        .questions-container {
            width: 95%;
        }

        .answers h2, .help .question a {
            font-size: 1.1em;
        }

        .answers a {
            font-size: 1.0em;
        }

        .question .answer {
            font-size: .9em;
        }

        #wufoo-z1tfajhs1y01cw1, #wufoo-rmdmcxh07e9wk8 {
            width: 100%;
        }
    }

    @media (max-width: 320px) {
        nav > .inner {
            width: 90%;
        }

        nav p {
            padding: 10px 5px;
        }
    }

    /* Mobile styles for nav */
    @media (max-width: 695px) {
        nav {
            font-size: 15px;
        }

        nav a {
            padding: 2%;
        }
    }

    @media (max-width: 500px) {

        nav > .inner {
            width: auto;
        }

        .low-temp {
            margin-top: 0;
        }

        #footer #footer-links {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        #footer #footer-links li {
            margin: 15px 0;
        }


        #footer #footer-links {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        #footer #footer-links li {
            margin: 10px 0;
        }
    }

    @media (max-width: 335px) {
        nav .inner a {
            padding: 1%;
        }
    }
</style>
