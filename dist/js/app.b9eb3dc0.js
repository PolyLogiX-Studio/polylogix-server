(function(t){function e(e){for(var r,i,u=e[0],c=e[1],s=e[2],l=0,f=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a=[];function i(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-2d0e5e97":"7125bbf6"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(t);var s=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("d299"),n("099a"),n("0b67"),n("5f41");var r=n("7c54"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("v-app-bar",{attrs:{app:"",absolute:"",color:"#fcb69f",dark:"","shrink-on-scroll":"",src:n("b2f3"),"scroll-target":"#scrolling-techniques-2"},scopedSlots:t._u([{key:"img",fn:function(e){var n=e.props;return[r("v-img",t._b({attrs:{gradient:"to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"}},"v-img",n,!1))]}}])},[r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),r("v-toolbar-title",{attrs:{to:"Home"}},[t._v(" PolyLogiX "),r("span",{attrs:{"v-if":!t.$vuetify.breakpoint.mobile}},[t._v("Studio")])]),r("v-spacer"),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-magnify")])],1),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-dots-vertical")])],1)],1),r("v-navigation-drawer",{attrs:{"clipped-left":"",fixed:"",app:""},scopedSlots:t._u([{key:"append",fn:function(){return[r("div",{staticClass:"pa-2"},[r("v-btn",{attrs:{block:""}},[t._v("Logout")])],1)]},proxy:!0}]),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list")],1),r("v-main",[r("v-container",{attrs:{fluid:""}},[r("router-view")],1)],1),r("v-footer",{attrs:{app:""}})],1)},a=[],i={name:"App",components:{},data:function(){return{drawer:!1}}},u=i,c=n("040c"),s=n("8f70"),l=n.n(s),p=n("0bc3"),f=n("1583"),v=n("414e"),d=n("d9f5"),b=n("ee9c"),m=n("e98b"),h=n("003f"),g=n("5a2c"),y=n("d0d6"),_=n("102c"),w=n("4a2a"),k=n("f1d7"),O=n("7a4b"),j=Object(c["a"])(u,o,a,!1,null,null,null),x=j.exports;l()(j,{VApp:p["a"],VAppBar:f["a"],VAppBarNavIcon:v["a"],VBtn:d["a"],VContainer:b["a"],VFooter:m["a"],VIcon:h["a"],VImg:g["a"],VList:y["a"],VMain:_["a"],VNavigationDrawer:w["a"],VSpacer:k["a"],VToolbarTitle:O["a"]});n("90c8");var V=n("1c7e"),L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("h1",[t._v("Oh hi,")]),n("p",[t._v("The site is not ready yet, but will be coming soon!")])])}],A={},S=Object(c["a"])(A,L,P,!1,null,null,null),T=S.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")]),n("ApiList")],1)},$=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h2",[t._v("API Test")]),n("ul",t._l(t.apiLinks,(function(e){return n("li",{key:e},[n("a",{attrs:{href:"/api/"+e}},[t._v(t._s(e))])])})),0)])},I=[],M={name:"ApiList",data:function(){return{apiLinks:[]}},methods:{setList:function(t){this.apiLinks=t}},created:function(){var t=this;fetch("/api",{method:"OPTIONS"}).then((function(t){return t.json()})).then((function(e){console.log(e),t.setList(e)}))}},B=M,N=Object(c["a"])(B,C,I,!1,null,null,null),q=N.exports;l()(N,{VContainer:b["a"]});var H={name:"About",components:{ApiList:q}},J=H,D=Object(c["a"])(J,E,$,!1,null,null,null),F=D.exports;r["a"].use(V["a"]);var X=[{path:"/",name:"Home",component:T},{path:"/about",name:"About",component:F},{path:"*",name:"404",component:function(){return n.e("chunk-2d0e5e97").then(n.bind(null,"9703"))}}],z=new V["a"]({mode:"history",base:"/",routes:X}),G=z,K=n("6392");r["a"].use(K["a"]);var Q=new K["a"].Store({state:{},mutations:{},actions:{},modules:{}}),R=n("800f");r["a"].use(R["a"]);var U=new R["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:G,store:Q,vuetify:U,render:function(t){return t(x)}}).$mount("#app")},b2f3:function(t,e,n){t.exports=n.p+"img/cover.c1c4f021.jpg"}});
//# sourceMappingURL=app.b9eb3dc0.js.map