(function(e){function t(t){for(var o,i,s=t[0],c=t[1],u=t[2],p=0,f=[];p<s.length;p++)i=s[p],a[i]&&f.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0210":function(e,t,n){},"38b9":function(e,t,n){"use strict";var o=n("ced1"),a=n.n(o);a.a},"4c20":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("app-header"),n("app-content",[n("router-view")],1),n("app-footer")],1)},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-header"},[n("h1",[e._v("CorCoder")]),n("span",{staticClass:"subtitle"},[e._v("Developer")]),n("navigation")],1)},s=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navigation"},[n("router-link",{attrs:{to:"/"}},[e._v("home")]),n("router-link",{attrs:{to:"/about"}},[e._v("about")]),n("router-link",{attrs:{to:"/cv"}},[e._v("cv")]),n("router-link",{attrs:{to:"/contact"}},[e._v("contact")])],1)},u=[],l={},p=l,f=(n("38b9"),n("2877")),v=Object(f["a"])(p,c,u,!1,null,"3215b93b",null);v.options.__file="Navigation.vue";var d=v.exports,m={name:"AppHeader",components:{Navigation:d}},_=m,b=(n("ac99"),Object(f["a"])(_,i,s,!1,null,"1fb33335",null));b.options.__file="AppHeader.vue";var h=b.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-content"},[e._t("default")],2)},w=[],y={},j=y,x=(n("d026"),Object(f["a"])(j,g,w,!1,null,"398d0446",null));x.options.__file="AppContent.vue";var C=x.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"app-footer"},[n("p",[e._v("© "+e._s(e.year)+" Cor Pruijs")])])])},A=[],T={name:"AppFooter",data:function(){return{year:(new Date).getFullYear()}}},P=T,k=(n("b7b0"),Object(f["a"])(P,O,A,!1,null,"49cd3f4c",null));k.options.__file="AppFooter.vue";var E=k.exports,$={name:"App",components:{AppHeader:h,AppContent:C,AppFooter:E}},H=$,S=(n("5c0b"),Object(f["a"])(H,a,r,!1,null,null,null));S.options.__file="App.vue";var F=S.exports,M=n("8c4f"),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("text-page",[n("h2",[e._v("About me")]),n("p",[e._v("I'm a 19 year old developer who focuses mainly on building web SPA's using Vue.js, but likes doing (almost) every kind of programming.")]),n("p",[e._v("My interest in programming started when I was 11 years old. My dad thaught me how write basic command line programs in C, and since then I've done lot's of programming in multiple languages, made a lot of projects, and worked professionally as a web developer and designer for a few clients.")])])},J=[],V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-page"},[n("div",{staticClass:"text-page-content"},[e._t("default")],2)])},G=[],D=(n("f9f9"),{}),N=Object(f["a"])(D,V,G,!1,null,"204bef27",null);N.options.__file="TextPage.vue";var q=N.exports,W={name:"Home",components:{TextPage:q}},Y=W,z=Object(f["a"])(Y,I,J,!1,null,null,null);z.options.__file="Home.vue";var B=z.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("text-page",[n("h2",[e._v("Projects")]),n("p",[e._v("This page is still in production, all other projects will be added shortly.")]),n("h3",[e._v("swift-canvas")]),n("p",{staticClass:"project-date"},[e._v("June 2014")]),n("p",[e._v("A small drawing program written in Swift playgrounds that uses emoji to render simple geometric drawings.")]),n("p",[n("a",{attrs:{href:"https://github.com/cor/swift-canvas"}},[e._v("View on GitHub")])]),n("h3",[e._v("TicTacoToe")]),n("p",{staticClass:"project-date"},[e._v("February 2014")]),n("p",[e._v("This is my oldest project on GitHub, and thus the first project I made using a source control system. It's a console based Tic Tac Toe game written in Java.")]),n("p",[n("a",{attrs:{href:"https://github.com/cor/tictacotoe"}},[e._v("View on GitHub")])])])},L=[],Q={name:"About",components:{TextPage:q}},R=Q,U=(n("864e"),Object(f["a"])(R,K,L,!1,null,"e180c084",null));U.options.__file="About.vue";var X=U.exports,Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("text-page",[n("h2",[e._v("Curriculum Vitae")]),n("p",[e._v("Will be published shortly.")])])},ee=[],te={name:"About",components:{TextPage:q}},ne=te,oe=Object(f["a"])(ne,Z,ee,!1,null,null,null);oe.options.__file="Cv.vue";var ae=oe.exports,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("text-page",[n("h2",[e._v("Contact")]),n("p",[e._v("Feel free to contact me if you would like to work with me, or if you have any questions.")]),n("p",[e._v("Email me at "),n("a",{attrs:{href:"mailto:cor@pruijs.nl"}},[e._v("cor@pruijs.nl")])])])},ie=[],se={name:"Contact",components:{TextPage:q}},ce=se,ue=Object(f["a"])(ce,re,ie,!1,null,null,null);ue.options.__file="Contact.vue";var le=ue.exports;o["a"].use(M["a"]);var pe=new M["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:B},{path:"/about",name:"about",component:X},{path:"/cv",name:"cv",component:ae},{path:"/contact",name:"contact",component:le}]}),fe=n("2f62");o["a"].use(fe["a"]);var ve=new fe["a"].Store({state:{},mutations:{},actions:{}});o["a"].config.productionTip=!1,new o["a"]({router:pe,store:ve,render:function(e){return e(F)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("5e27"),a=n.n(o);a.a},"5e27":function(e,t,n){},"669f":function(e,t,n){},"864e":function(e,t,n){"use strict";var o=n("b6d0"),a=n.n(o);a.a},ac99:function(e,t,n){"use strict";var o=n("4c20"),a=n.n(o);a.a},b6d0:function(e,t,n){},b7b0:function(e,t,n){"use strict";var o=n("cb5c"),a=n.n(o);a.a},cb5c:function(e,t,n){},ced1:function(e,t,n){},d026:function(e,t,n){"use strict";var o=n("0210"),a=n.n(o);a.a},f9f9:function(e,t,n){"use strict";var o=n("669f"),a=n.n(o);a.a}});
//# sourceMappingURL=app.f46f738d.js.map