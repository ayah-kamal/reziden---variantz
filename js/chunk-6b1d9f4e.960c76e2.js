(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b1d9f4e"],{7210:function(e,t,i){},"7c40":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h3",[e._v("Device Energy Consumption Settings:")]),i("CCard",[i("CCardBody",[i("CDataTable",{attrs:{items:e.items,fields:e.fields,"table-filter":"","items-per-page-select":"","items-per-page":5,hover:"",sorter:"",stripped:"",pagination:""},scopedSlots:e._u([{key:"show_details",fn:function(t){var n=t.item,a=t.index;return[i("td",{staticClass:"py-2"},[i("CButton",{attrs:{color:"primary",variant:"outline",square:"",size:"sm"},on:{click:function(t){return e.toggleDetails(n,a)}}},[e._v(" "+e._s(Boolean(n._toggled)?"Save":"Edit")+" ")])],1)]}},{key:"details",fn:function(t){var n=t.item;return[i("CCollapse",{attrs:{show:Boolean(n._toggled),duration:e.collapseDuration}},[i("CCardBody",{staticStyle:{"background-color":"rgb(210, 224, 230)"}},[i("label",{staticStyle:{"margin-right":"20px","font-weight":"bold"},attrs:{for:"status"}},[e._v("Change Status:")]),i("select",{attrs:{name:"status",id:"status"}},[i("option",{attrs:{value:"ON"}},[e._v("Remain ON when energy reaches limit")]),i("option",{attrs:{value:"OFF"}},[e._v("Turn OFF when energy exceeds limit")])]),i("br"),i("label",{staticStyle:{"margin-right":"55px","font-weight":"bold"},attrs:{for:"limit"}},[e._v("Set Limit:")]),i("input",{staticClass:"limit",attrs:{id:"limit",type:"number",min:"1",max:"1000"}}),i("span",{staticStyle:{"margin-left":"10px"}},[e._v("kWh")])])],1)]}}])})],1)],1)],1)},a=[];function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var c=[{appliance:"Air Conditioning",status:"Remain ON when energy reaches limit",limit:"320"},{appliance:"Curtains",status:"Remain ON when energy reaches limit",limit:"-"},{appliance:"Lighting",status:"Turn OFF when energy exceeds limit",limit:"-"},{appliance:"Washing Machine",status:"Turn OFF when energy exceeds limit",limit:"150"},{appliance:"Television",status:"Turn OFF when energy exceeds limit",limit:"190"},{appliance:"Fridge",status:"Remain ON when energy reaches limit",limit:"-"},{appliance:"Air Fryer",status:"Turn OFF when energy exceeds limit",limit:"320"},{appliance:"Coffee Machine",status:"Turn OFF when energy exceeds limit",limit:"320"},{appliance:"Dryer",status:"Turn OFF when energy exceeds limit",limit:"150"},{appliance:"Heater",status:"Remain ON when energy reaches limit",limit:"190"},{appliance:"Stove",status:"Turn OFF when energy exceeds limit",limit:"320"},{appliance:"Modem",status:"Remain ON when energy reaches limit",limit:"-"}],o=[{key:"appliance",_style:"width:30%"},{key:"status",_style:"width:40%;"},{key:"limit",label:"Limit (kWh)",_style:"width:20%;"},{key:"show_details",label:"",_style:"width:1%",sorter:!1,filter:!1}],u={name:"AdvancedTables",data:function(){return{items:c.map((function(e,t){return s(s({},e),{},{id:t})})),fields:o,details:[],collapseDuration:0}},methods:{getBadge:function(e){switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:}},toggleDetails:function(e){var t=this;this.$set(this.items[e.id],"_toggled",!e._toggled),this.collapseDuration=300,this.$nextTick((function(){t.collapseDuration=0}))}}},p=u,m=(i("e255"),i("2877")),d=Object(m["a"])(p,n,a,!1,null,"1f04e1b6",null);t["default"]=d.exports},e255:function(e,t,i){"use strict";var n=i("7210"),a=i.n(n);a.a}}]);
//# sourceMappingURL=chunk-6b1d9f4e.960c76e2.js.map