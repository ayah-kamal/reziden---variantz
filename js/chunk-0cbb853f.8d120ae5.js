(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0cbb853f"],{"686c":function(t,e,a){},d3b8:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"mainTitle"},[t._v("Energy Consumption")]),a("div",{staticClass:"main-container"},[a("div",{staticClass:"MainEnergyConsumptionContainer"},[a("div",{staticClass:"EnergyConsumptionContainer"},[a("CTabs",{attrs:{variant:"tabs","active-tab":1}},[a("CTab",{attrs:{title:"Hourly"}},[a("h5",{staticClass:"graphTabTitles"},[t._v("Day: 16/08/2020")]),a("CChartLine",{staticStyle:{height:"300px","max-width":"500px"},attrs:{datasets:[{data:[12,22,24,36,48,50,36,33,35,48,24,20,25,22,29,36,48,54,36,31,35,58,44,22],backgroundColor:"rgb(235, 182, 36)",label:"Energy Consumption Level"}],labels:"indexes",options:{maintainAspectRatio:!1}}})],1),a("CTab",{attrs:{title:"Daily"}},[a("h5",{staticClass:"graphTabTitles"},[t._v("Month: August")]),a("h5",[t._v("Week: 3")]),a("CChartLine",{staticStyle:{height:"300px","max-width":"500px"},attrs:{datasets:[{data:[20,21,19,20,25,30,32],backgroundColor:"rgb(235, 182, 36)",label:"Energy Consumption Level"}],labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],options:{maintainAspectRatio:!1}}})],1),a("CTab",{attrs:{title:"Monthly"}},[a("h5",{staticClass:"graphTabTitles"},[t._v("Year: 2019")]),a("CChartLine",{staticStyle:{height:"300px","max-width":"500px"},attrs:{datasets:[{data:[612,603,696,764,806,967,1050,1104,1003,932,887,732],backgroundColor:"rgb(235, 182, 36)",label:"Energy Consumption Level"}],labels:"months",options:{maintainAspectRatio:!1}}})],1)],1),a("div",{staticClass:"monthEnergy"},[a("CWidgetProgress",{staticClass:"monthEnergyWidget",attrs:{header:"July",text:"Limit Set: 800kWh",footer:"Power Usage: 793kWh",color:"secondary",value:89}}),a("CWidgetProgress",{staticClass:"monthEnergyWidget",attrs:{header:"June",text:"Limit Set: 795kWh",footer:"Power Usage: 706kWh",color:"secondary",value:75}})],1),t._m(0)],1),a("div",{staticClass:"devicesEnergy"},[a("h4",{staticStyle:{"margin-left":"2vw"}},[t._v("Devices:")]),t._m(1),a("br"),a("div",{staticClass:"devicesGrid"},[a("CWidgetSimple",{staticClass:"deviceWidgets",attrs:{header:"Air Conditioning"}},[a("label",{staticClass:"deviceText"},[t._v("5,180"),a("br"),t._v("kWh")]),a("CProgress",{attrs:{animated:"",color:"danger",height:"0.8rem",value:80}})],1),a("CWidgetSimple",{staticClass:"deviceWidgets",attrs:{header:"'Living Room' TV"}},[a("label",{staticClass:"deviceText"},[t._v("90"),a("br"),t._v("kWh")]),a("CProgress",{attrs:{animated:"",color:"success",height:"0.8rem",value:20}})],1),a("CWidgetSimple",{staticClass:"deviceWidgets",attrs:{header:"Washing Machine"}},[a("label",{staticClass:"deviceText"},[t._v("180"),a("br"),t._v("kWh")]),a("CProgress",{attrs:{animated:"",color:"success",height:"0.8rem",value:27}})],1),a("CWidgetSimple",{staticClass:"deviceWidgets",attrs:{header:"Dishwasher"}},[a("label",{staticClass:"deviceText"},[t._v("220"),a("br"),t._v("kWh")]),a("CProgress",{attrs:{animated:"",color:"success",height:"0.8rem",value:45}})],1),a("CWidgetSimple",{staticClass:"deviceWidgets",attrs:{header:"Fridge"}},[a("label",{staticClass:"deviceText"},[t._v("190"),a("br"),t._v("kWh")]),a("CProgress",{attrs:{animated:"",color:"success",height:"0.8rem",value:30}})],1),a("CWidgetSimple",{staticClass:"deviceWidgets",attrs:{header:"Lighting"}},[a("label",{staticClass:"deviceText"},[t._v("1,105"),a("br"),t._v("kWh")]),a("CProgress",{attrs:{animated:"",color:"warning",height:"0.8rem",value:60}})],1)],1),t._m(2),a("br"),a("CButton",{staticClass:"settingBtn",on:{click:function(e){return t.routeToEnergySettings()}}},[a("CIcon",{staticStyle:{"margin-right":"10px"},attrs:{name:"cil-settings"}}),t._v("Settings")],1)],1)]),a("br"),a("CAlert",{staticStyle:{width:"100%"},attrs:{color:"danger",closeButton:"",fade:""}},[a("CIcon",{staticStyle:{float:"left"},attrs:{name:"cilBellExclamation"}}),a("h6",[t._v("Monthly Report:")]),t._v(" There is a noticable rise in energy consumption during summer months."),a("br"),t._v(" Main source of energy drain is "),a("b",[a("i",[t._v("Air Conditioner")])]),a("br"),a("br"),a("u",[a("b",[t._v("Recommended Action:")])]),a("CLink",{staticClass:"text-white bg-danger px-2",staticStyle:{"font-size":"15px","margin-left":"10px"},on:{click:function(e){t.warningModal=!0}}},[t._v(" Set Energy Limit")])],1),a("CAlert",{staticStyle:{width:"100%"},attrs:{color:"warning",closeButton:"",fade:""}},[a("CIcon",{staticStyle:{float:"left"},attrs:{name:"cilBellExclamation"}}),a("h6",[t._v("Hourly Report:")]),t._v(" You can decrease "),a("i",[a("b",[t._v("Lighting")])]),t._v(" energy consumption by automating lights to turn off while "),a("i",[t._v("away from home")]),a("br"),a("br"),a("u",[a("b",[t._v("Recommended Action:")])]),a("CLink",{staticClass:"text-white bg-warning px-2",staticStyle:{"font-size":"15px","margin-left":"10px"},on:{click:function(e){return t.routeToSettings()}}},[t._v(" Add 'Away from Home' Master Control")])],1),a("CModal",{attrs:{title:"Set Energy Limit",color:"secondary",show:t.warningModal},on:{"update:show":function(e){t.warningModal=e}}},[a("div",[a("label",{attrs:{for:"limitMonth"}},[t._v("Select Month: ")]),a("input",{staticStyle:{"margin-left":"40px"},attrs:{id:"limitMonth",type:"month",required:""}}),a("br"),a("label",{attrs:{for:"limitPower"}},[t._v("Enter Limit: ")]),a("input",{staticStyle:{"margin-left":"56px"},attrs:{id:"limitPower",type:"number",min:"1",max:"450",required:""}}),a("span",{staticStyle:{"margin-left":"5px"}},[t._v("kWh")])])])],1),a("h2",{staticClass:"mainTitle"})])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticStyle:{"margin-left":"2vw","font-size":"10px"}},[t._v("Last Updated: "),a("i",[t._v("9:29PM 17/08/2020")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h6",{staticStyle:{"margin-left":"2vw"}},[a("i",[t._v("(per year: 2019)")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticStyle:{"margin-left":"2vw","font-size":"10px"}},[t._v("Last Updated: "),a("i",[t._v("9:29PM 17/08/2020")])])}],r={data:function(){return{warningModal:!1}},methods:{routeToSettings:function(){this.$router.push("../pages/Settings")},routeToEnergySettings:function(){this.$router.push("./device-energy-settings")}}},n=r,l=(a("d7ab"),a("2877")),o=Object(l["a"])(n,i,s,!1,null,"3b4fb4f6",null);e["default"]=o.exports},d7ab:function(t,e,a){"use strict";var i=a("686c"),s=a.n(i);s.a}}]);
//# sourceMappingURL=chunk-0cbb853f.8d120ae5.js.map