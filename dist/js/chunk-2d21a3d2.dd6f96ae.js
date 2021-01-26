(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a3d2"],{bb51:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"page-title"},[r("h3",[e._v(e._s(e._f("localize")("Home_bill")))]),r("button",{staticClass:"btn waves-effect waves-light btn-small",on:{click:e.refresh}},[r("i",{staticClass:"material-icons"},[e._v("refresh")])])]),e.loading?r("Loader"):r("div",{staticClass:"row"},[r("HomeBill",{attrs:{rates:e.currency.rates}}),r("HomeCurrency",{attrs:{rates:e.currency.rates,date:e.currency.date}})],1)],1)},a=[],s=(r("d3b7"),r("96cf"),r("1da1")),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col s12 m6 l4"},[r("div",{staticClass:"card light-blue bill-card"},[r("div",{staticClass:"card-content white-text"},[r("span",{staticClass:"card-title"},[e._v(e._s(e._f("localize")("Home_billv")))]),e._l(e.currencies,(function(t){return r("p",{key:t,staticClass:"currency-line"},[r("span",[e._v(" "+e._s(e._f("currency")(e.getCurrency(t),t))+" ")])])}))],2)])])},i=[],l={props:["rates"],data:function(){return{currencies:["KZT","RUB","USD","EUR"]}},computed:{base:function(){return this.$store.getters.info.bill/(this.rates["KZT"]/this.rates["EUR"])}},methods:{getCurrency:function(e){return Math.floor(this.base*this.rates[e])}}},o=l,u=r("2877"),d=Object(u["a"])(o,c,i,!1,null,null,null),f=d.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col s12 m6 l8"},[r("div",{staticClass:"card orange darken-3 bill-card"},[r("div",{staticClass:"card-content white-text"},[r("div",{staticClass:"card-header"},[r("span",{staticClass:"card-title"},[e._v(e._s(e._f("localize")("Home_cur")))])]),r("table",[r("thead",[r("tr",[r("th",[e._v(e._s(e._f("localize")("Home_cur_val")))]),r("th",[e._v(e._s(e._f("localize")("Home_cur_kurs")))]),r("th",[e._v(e._s(e._f("localize")("Home_cur_date")))])])]),r("tbody",e._l(e.currencies,(function(t){return r("tr",{key:t},[r("td",[e._v(e._s(t))]),r("td",[e._v(e._s(e.rates[t].toFixed(5)))]),r("td",[e._v(e._s(e._f("date")(e.date,"date")))])])})),0)])])])])},h=[],p={props:["rates","date"],data:function(){return{currencies:["KZT","RUB","USD","EUR"]}}},v=p,m=Object(u["a"])(v,_,h,!1,null,null,null),b=m.exports,g={name:"home",data:function(){return{loading:!0,currency:null}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("fetchCurrency");case 2:e.currency=t.sent,e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},methods:{getData:function(){return Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={method:"GET","Content-Type":"application/json"},e.next=3,fetch("https://reqres.in/api/register",t).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log("error",e)}));case 3:r=e.sent,console.log(r);case 5:case"end":return e.stop()}}),e)})))()},refresh:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$store.dispatch("fetchCurrency");case 3:e.currency=t.sent,e.loading=!1;case 5:case"end":return t.stop()}}),t)})))()}},components:{HomeBill:f,HomeCurrency:b}},C=g,w=Object(u["a"])(C,n,a,!1,null,null,null);t["default"]=w.exports}}]);
//# sourceMappingURL=chunk-2d21a3d2.dd6f96ae.js.map