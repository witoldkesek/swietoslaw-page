(function(){"use strict";var a={9708:function(a,t,n){var e=n(9242),r=n(3396);const o={class:"container-fluid"};function i(a,t,n,e,i,s){const l=(0,r.up)("AppHeader"),c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l),(0,r._)("div",o,[(0,r.Wm)(c,{class:"main-content container"})])],64)}var s=n.p+"img/logo_black_white_50px.ad6e8ba0.png",l=n.p+"img/list.a6582b65.svg",c=n.p+"img/instagram.c11880eb.svg",u=n.p+"img/twitter.612c2c70.svg",p=n.p+"img/facebook.fd87dfc7.svg";const d=a=>((0,r.dD)("data-v-8130f728"),a=a(),(0,r.Cn)(),a),v={class:"navbar navbar-expand-lg bg-body-tertiary"},f={class:"container"},g=d((()=>(0,r._)("img",{width:"100",height:"100",alt:"Świętosław",src:s},null,-1))),b=d((()=>(0,r._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,r._)("img",{src:l,alt:"Instagram",width:"32",height:"32"})],-1))),m={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},w={class:"navbar-nav"},h=(0,r.Uk)("Home"),k=d((()=>(0,r._)("a",{class:"nav-link",href:"#"},"Historia",-1))),y=(0,r.Uk)(" Gdzie kupić "),_=d((()=>(0,r._)("a",{class:"nav-link",href:"#"},"Kontakt",-1))),O=(0,r.uE)('<div style="margin-left:auto;" id="social_links" data-v-8130f728><div class="navbar-nav" data-v-8130f728><a class="nav-link" href="https://www.instagram.com/browarswietoslaw" target="_blank" data-v-8130f728><img src="'+c+'" alt="Instagram" width="32" height="32" data-v-8130f728></a><a class="nav-link" href="https://www.twitter.com/browarswietoslaw" target="_blank" data-v-8130f728><img src="'+u+'" alt="Twitter" width="32" height="32" data-v-8130f728></a><a class="nav-link" href="https://www.facebook.com/browarswietoslaw" target="_blank" data-v-8130f728><img src="'+p+'" alt="Facebook" width="32" height="32" data-v-8130f728></a></div></div>',1),A=d((()=>(0,r._)("div",{style:{"background-color":"black"},class:"color-bar"},null,-1)));function z(a,t,n,e,o,i){const s=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",v,[(0,r._)("div",f,[(0,r.Wm)(s,{to:"/",class:"navbar-brand"},{default:(0,r.w5)((()=>[g])),_:1}),b,(0,r._)("div",m,[(0,r._)("div",w,[(0,r.Wm)(s,{to:"/",class:"nav-link"},{default:(0,r.w5)((()=>[h])),_:1}),k,(0,r.Wm)(s,{to:"/mapa",class:"nav-link"},{default:(0,r.w5)((()=>[y])),_:1}),_]),O])])]),A],64)}var M={name:"AppHeader"},S=n(89);const j=(0,S.Z)(M,[["render",z],["__scopeId","data-v-8130f728"]]);var x=j,D={name:"App",components:{AppHeader:x}};const H=(0,S.Z)(D,[["render",i]]);var T=H,P=(n(7024),n(5654),n(2483));const C={style:{height:"100px","background-color":"aquamarine"}};function N(a,t,n,e,o,i){return(0,r.wg)(),(0,r.iD)("div",C)}var W={name:"App"};const E=(0,S.Z)(W,[["render",N]]);var Z=E;const I=(0,r._)("div",{class:"row justify-content-center",style:{width:"100%","min-height":"60rem","background-color":"lightgray"}},[(0,r._)("div",{class:"col-11",style:{"margin-top":"3rem","margin-bottom":"3rem"}},[(0,r._)("h1",null," Mapa punktów sprzedaży naszych piw"),(0,r._)("div",{id:"nodesMap",style:{height:"38rem","background-color":"burlywood"}})])],-1),K=[I];function L(a,t,n,e,o,i){return(0,r.wg)(),(0,r.iD)("div",null,K)}var U=n(3153),$=n.n(U);function F(a){var t=0,n=0;return a.forEach((a=>{n+=a.latitude,t+=a.longitude})),[n/a.length,t/a.length]}var R=JSON.parse('[{"name":"Al Capone","address":"ul. Rzeszowska 62, <br> 39-200 Dębica","latitude":50.05293494304941,"longitude":21.41732648713387,"url":"https://alejacapone.pl/"},{"name":"Pappas Dębica","address":"ul. Stefana Batorego 11, <br> 39-200 Dębica","latitude":50.0487316724549,"longitude":21.410803058945294,"url":"https://pappas.pl/"},{"name":"Karczma Rzym","address":"Kościuszki 44,<br>39-200 Dębica","latitude":50.064409548868795,"longitude":21.405539513586,"url":"http://www.karczmarzymdebica.pl/"}]'),Y={name:"App",methods:{setupLeafletMap:function(a){const t=$().map("nodesMap").setView(F(a),14);$().tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(t),a.forEach((a=>{$().marker([a.latitude,a.longitude],{icon:$().icon({iconUrl:"marker_green.png",iconSize:[30,30],iconAnchor:[15,30],popupAnchor:[0,-30]})}).addTo(t).bindPopup(`<p><b>Nazwa:</b><br>${a.name}</p>\n                      <p><b>Adres:</b><br>${a.address}</p>\n                      <a href="${a.url}">Strona lokalu</a>`)}))}},async mounted(){this.setupLeafletMap(R)}};const q=(0,S.Z)(Y,[["render",L]]);var B=q;const G=[{path:"/",redirect:{name:"Home"}},{path:"/swietoslaw-page/",name:"Home",component:Z},{path:"/swietoslaw-page/mapa",name:"Mapa",component:B}],J=(0,P.p7)({linkActiveClass:"active",history:(0,P.PO)("/swietoslaw-page/"),routes:G});var V=J;(0,e.ri)(T).use(V).mount("#app")}},t={};function n(e){var r=t[e];if(void 0!==r)return r.exports;var o=t[e]={exports:{}};return a[e].call(o.exports,o,o.exports,n),o.exports}n.m=a,function(){var a=[];n.O=function(t,e,r,o){if(!e){var i=1/0;for(u=0;u<a.length;u++){e=a[u][0],r=a[u][1],o=a[u][2];for(var s=!0,l=0;l<e.length;l++)(!1&o||i>=o)&&Object.keys(n.O).every((function(a){return n.O[a](e[l])}))?e.splice(l--,1):(s=!1,o<i&&(i=o));if(s){a.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=a.length;u>0&&a[u-1][2]>o;u--)a[u]=a[u-1];a[u]=[e,r,o]}}(),function(){n.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return n.d(t,{a:t}),t}}(),function(){n.d=function(a,t){for(var e in t)n.o(t,e)&&!n.o(a,e)&&Object.defineProperty(a,e,{enumerable:!0,get:t[e]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){n.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){n.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){n.p="/swietoslaw-page/"}(),function(){var a={143:0};n.O.j=function(t){return 0===a[t]};var t=function(t,e){var r,o,i=e[0],s=e[1],l=e[2],c=0;if(i.some((function(t){return 0!==a[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(l)var u=l(n)}for(t&&t(e);c<i.length;c++)o=i[c],n.o(a,o)&&a[o]&&a[o][0](),a[o]=0;return n.O(u)},e=self["webpackChunkSwietoslaw"]=self["webpackChunkSwietoslaw"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=n.O(void 0,[998],(function(){return n(9708)}));e=n.O(e)})();
//# sourceMappingURL=app.b552a58f.js.map