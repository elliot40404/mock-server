(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["update"],{2333:function(e,t,n){},"2e8c":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c=Object(a["C"])("data-v-49433a16");Object(a["q"])("data-v-49433a16");var o={class:"container"},r=Object(a["e"])("h1",null,"UPDATE RESPONSE",-1),s={class:"form-group"},i=Object(a["e"])("label",{for:"route"},"ENDPOINT",-1),u={class:"form-group"},l=Object(a["e"])("label",{for:"userid"},"USER-ID",-1),b={class:"form-group"},d=Object(a["e"])("label",{class:"res",for:"response"},"RESPONSE",-1),O=Object(a["e"])("div",{class:"form-group"},[Object(a["e"])("label"),Object(a["e"])("button",{type:"submit"},"SAVE")],-1);Object(a["o"])();var j=c((function(e,t,n,c,j,f){var p=Object(a["u"])("Sidebar");return Object(a["n"])(),Object(a["d"])("div",o,[Object(a["e"])(p),Object(a["e"])("main",null,[r,Object(a["e"])("section",null,[Object(a["e"])("form",{onSubmit:t[2]||(t[2]=Object(a["B"])((function(){return f.save&&f.save.apply(f,arguments)}),["prevent"]))},[Object(a["e"])("div",s,[i,Object(a["e"])("input",{type:"text",class:"inp",id:"route",readonly:"",value:e.$route.params.route},null,8,["value"])]),Object(a["e"])("div",u,[l,Object(a["e"])("input",{type:"text",class:"inp",id:"userid",readonly:"",value:f.token},null,8,["value"])]),Object(a["e"])("div",b,[d,Object(a["A"])(Object(a["e"])("textarea",{required:"",placeholder:"Paste JSON here",class:"xl","onUpdate:modelValue":t[1]||(t[1]=function(e){return j.data=e})},"\r\n            ",512),[[a["y"],j.data]])]),O],32)])])])})),f=(n("d3b7"),n("5ea5")),p={name:"Update",components:{Sidebar:f["a"]},data:function(){return{data:""}},computed:{token:function(){return this.$store.getters.token}},methods:{save:function(){var e=this,t={id:this.token,route:this.$route.params.route,response:JSON.parse(this.data)};fetch("".concat("/","routes/update"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){e.$router.push({name:"Dashboard"})}))}}};n("5c41");p.render=j,p.__scopeId="data-v-49433a16";t["default"]=p},"3b60":function(e,t,n){"use strict";n("64c8")},"5c41":function(e,t,n){"use strict";n("2333")},"5ea5":function(e,t,n){"use strict";var a=n("7a23"),c=n("cf05"),o=n.n(c),r=Object(a["C"])("data-v-317e00b0");Object(a["q"])("data-v-317e00b0");var s={class:"container"},i=Object(a["e"])("img",{class:"logo",src:o.a,alt:""},null,-1);Object(a["o"])();var u=r((function(e,t,n,c,o,r){var u=Object(a["u"])("ion-icon");return Object(a["n"])(),Object(a["d"])("div",s,[i,Object(a["e"])("nav",null,[Object(a["e"])("ul",null,[Object(a["e"])("li",{"data-label":"Dashboard",onClick:t[1]||(t[1]=function(e){return r.nav("Dashboard")})},["dash"===n.active?(Object(a["n"])(),Object(a["d"])(u,{key:0,style:{color:"#ff026c"},name:"grid"})):(Object(a["n"])(),Object(a["d"])(u,{key:1,style:{color:"#ff026c"},name:"grid-outline"}))]),Object(a["e"])("li",{"data-label":"API-Client",onClick:t[2]||(t[2]=function(e){return r.nav("Query")})},["query"===n.active?(Object(a["n"])(),Object(a["d"])(u,{key:0,style:{color:"#02c2ff"},name:"flash"})):(Object(a["n"])(),Object(a["d"])(u,{key:1,style:{color:"#02c2ff"},name:"flash-outline"}))]),Object(a["e"])("li",{"data-label":"Settings",onClick:t[3]||(t[3]=function(e){return r.nav("Settings")})},["settings"===n.active?(Object(a["n"])(),Object(a["d"])(u,{key:0,style:{color:"#62db93"},name:"settings"})):(Object(a["n"])(),Object(a["d"])(u,{key:1,style:{color:"#62db93"},name:"settings-outline"}))])])])])})),l={name:"Sidebar",props:["active"],methods:{nav:function(e){this.$router.push({name:e})}}};n("3b60");l.render=u,l.__scopeId="data-v-317e00b0";t["a"]=l},"64c8":function(e,t,n){}}]);
//# sourceMappingURL=update.73fb4102.js.map