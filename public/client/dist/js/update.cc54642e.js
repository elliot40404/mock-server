(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["update"],{"2e8c":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c=Object(a["C"])("data-v-66bf846e");Object(a["q"])("data-v-66bf846e");var r={class:"container"},o=Object(a["e"])("h1",null,"UPDATE RESPONSE",-1),i={class:"form-group"},u=Object(a["e"])("label",{for:"route"},"ENDPOINT",-1),s={class:"form-group"},l=Object(a["e"])("label",{for:"userid"},"USER-ID",-1),b={class:"form-group"},d=Object(a["e"])("label",{class:"res",for:"response"},"RESPONSE",-1),f=Object(a["e"])("div",{class:"form-group"},[Object(a["e"])("label"),Object(a["e"])("button",{type:"submit"},"SAVE")],-1);Object(a["o"])();var O=c((function(e,t,n,c,O,j){var p=Object(a["u"])("Sidebar");return Object(a["n"])(),Object(a["d"])("div",r,[Object(a["e"])(p),Object(a["e"])("main",null,[o,Object(a["e"])("section",null,[Object(a["e"])("form",{onSubmit:t[2]||(t[2]=Object(a["B"])((function(){return j.save&&j.save.apply(j,arguments)}),["prevent"]))},[Object(a["e"])("div",i,[u,Object(a["e"])("input",{type:"text",class:"inp",id:"route",readonly:"",value:e.$route.params.route},null,8,["value"])]),Object(a["e"])("div",s,[l,Object(a["e"])("input",{type:"text",class:"inp",id:"userid",readonly:"",value:j.token},null,8,["value"])]),Object(a["e"])("div",b,[d,Object(a["A"])(Object(a["e"])("textarea",{required:"",placeholder:"Paste JSON here",class:"xl","onUpdate:modelValue":t[1]||(t[1]=function(e){return O.data=e})},"\r\n            ",512),[[a["y"],O.data]])]),f],32)])])])})),j=(n("498a"),n("d3b7"),n("5ea5")),p={name:"Update",components:{Sidebar:j["a"]},data:function(){return{data:"",newData:null}},computed:{token:function(){return this.$store.getters.token},route:function(){return this.$route.params.route}},watch:{data:function(){this.newData=JSON.parse(this.data.trim())}},methods:{save:function(){var e=this,t={id:this.token,route:this.route,response:this.newData};fetch("".concat("/","routes/update"),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){e.$router.push({name:"Dashboard"})})).catch((function(e){console.log(e)}))}}};n("f15c");p.render=O,p.__scopeId="data-v-66bf846e";t["default"]=p},"3b60":function(e,t,n){"use strict";n("64c8")},"498a":function(e,t,n){"use strict";var a=n("23e7"),c=n("58a8").trim,r=n("c8d2");a({target:"String",proto:!0,forced:r("trim")},{trim:function(){return c(this)}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var a=n("1d80"),c=n("5899"),r="["+c+"]",o=RegExp("^"+r+r+"*"),i=RegExp(r+r+"*$"),u=function(e){return function(t){var n=String(a(t));return 1&e&&(n=n.replace(o,"")),2&e&&(n=n.replace(i,"")),n}};e.exports={start:u(1),end:u(2),trim:u(3)}},"5ea5":function(e,t,n){"use strict";var a=n("7a23"),c=n("cf05"),r=n.n(c),o=Object(a["C"])("data-v-317e00b0");Object(a["q"])("data-v-317e00b0");var i={class:"container"},u=Object(a["e"])("img",{class:"logo",src:r.a,alt:""},null,-1);Object(a["o"])();var s=o((function(e,t,n,c,r,o){var s=Object(a["u"])("ion-icon");return Object(a["n"])(),Object(a["d"])("div",i,[u,Object(a["e"])("nav",null,[Object(a["e"])("ul",null,[Object(a["e"])("li",{"data-label":"Dashboard",onClick:t[1]||(t[1]=function(e){return o.nav("Dashboard")})},["dash"===n.active?(Object(a["n"])(),Object(a["d"])(s,{key:0,style:{color:"#ff026c"},name:"grid"})):(Object(a["n"])(),Object(a["d"])(s,{key:1,style:{color:"#ff026c"},name:"grid-outline"}))]),Object(a["e"])("li",{"data-label":"API-Client",onClick:t[2]||(t[2]=function(e){return o.nav("Query")})},["query"===n.active?(Object(a["n"])(),Object(a["d"])(s,{key:0,style:{color:"#02c2ff"},name:"flash"})):(Object(a["n"])(),Object(a["d"])(s,{key:1,style:{color:"#02c2ff"},name:"flash-outline"}))]),Object(a["e"])("li",{"data-label":"Settings",onClick:t[3]||(t[3]=function(e){return o.nav("Settings")})},["settings"===n.active?(Object(a["n"])(),Object(a["d"])(s,{key:0,style:{color:"#62db93"},name:"settings"})):(Object(a["n"])(),Object(a["d"])(s,{key:1,style:{color:"#62db93"},name:"settings-outline"}))])])])])})),l={name:"Sidebar",props:["active"],methods:{nav:function(e){this.$router.push({name:e})}}};n("3b60");l.render=s,l.__scopeId="data-v-317e00b0";t["a"]=l},"64c8":function(e,t,n){},"75c3":function(e,t,n){},c8d2:function(e,t,n){var a=n("d039"),c=n("5899"),r="​᠎";e.exports=function(e){return a((function(){return!!c[e]()||r[e]()!=r||c[e].name!==e}))}},f15c:function(e,t,n){"use strict";n("75c3")}}]);
//# sourceMappingURL=update.cc54642e.js.map