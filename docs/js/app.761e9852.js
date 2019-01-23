(function(t){function e(e){for(var o,i,c=e[0],s=e[1],u=e[2],p=0,f=[];p<c.length;p++)i=c[p],r[i]&&f.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0210":function(t,e,n){},"0ed7":function(t,e,n){"use strict";var o=n("d990"),r=n.n(o);r.a},"38b9":function(t,e,n){"use strict";var o=n("ced1"),r=n.n(o);r.a},"4c20":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("app-header"),n("app-content",[n("router-view")],1),n("app-footer")],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-header"},[n("h1",[t._v("CorCoder")]),n("span",{staticClass:"subtitle"},[t._v("Developer")]),n("navigation")],1)},c=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation"},[n("router-link",{attrs:{to:"/"}},[t._v("home")]),n("router-link",{attrs:{to:"/about"}},[t._v("about")]),n("router-link",{attrs:{to:"/cv"}},[t._v("cv")]),n("router-link",{attrs:{to:"/contact"}},[t._v("contact")])],1)},u=[],l={},p=l,f=(n("38b9"),n("2877")),v=Object(f["a"])(p,s,u,!1,null,"3215b93b",null);v.options.__file="Navigation.vue";var d=v.exports,_={name:"AppHeader",components:{Navigation:d}},m=_,b=(n("ac99"),Object(f["a"])(m,i,c,!1,null,"1fb33335",null));b.options.__file="AppHeader.vue";var h=b.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-content"},[t._t("default")],2)},j=[],w={},y=w,x=(n("d026"),Object(f["a"])(y,g,j,!1,null,"398d0446",null));x.options.__file="AppContent.vue";var C=x.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"app-footer"},[n("p",[t._v("© "+t._s(t.year)+" Cor Pruijs")])])])},P=[],A={name:"AppFooter",data:function(){return{year:(new Date).getFullYear()}}},T=A,k=(n("b7b0"),Object(f["a"])(T,O,P,!1,null,"49cd3f4c",null));k.options.__file="AppFooter.vue";var E=k.exports,$={name:"App",components:{AppHeader:h,AppContent:C,AppFooter:E}},S=$,H=(n("5c0b"),Object(f["a"])(S,r,a,!1,null,null,null));H.options.__file="App.vue";var I=H.exports,F=n("8c4f"),M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("text-page",[n("h2",[t._v("About me")]),n("p",[t._v("I'm a 19 year old developer who focuses mainly on building web SPA's using Vue.js, but likes doing (almost) every kind of programming.")]),n("p",[t._v("My interest in programming started when I was 11 years old. My dad thaught me how write basic command line programs in C, and since then I've done lot's of programming in multiple languages, made a lot of projects, and worked professionally as a web developer and designer for a few clients.")])])},J=[],V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-page"},[n("div",{staticClass:"text-page-content"},[t._t("default")],2)])},D=[],G=(n("f9f9"),{}),L=Object(f["a"])(G,V,D,!1,null,"204bef27",null);L.options.__file="TextPage.vue";var N=L.exports,q={name:"Home",components:{TextPage:N}},W=q,Y=Object(f["a"])(W,M,J,!1,null,null,null);Y.options.__file="Home.vue";var z=Y.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("text-page",[n("h2",[t._v("Projects")]),n("p",[t._v("This page is still in production, all other projects will be added shortly.")]),t._l(t.projects,function(t){return n("project-info",{key:t.title,attrs:{project:t}})})],2)},K=[],Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project-info"},[n("h3",[t._v(t._s(t.project.title))]),n("p",{staticClass:"project-date"},[t._v(t._s(t.project.date))]),n("p",{staticClass:"project-description"},[t._v(t._s(t.project.description)+" ")]),n("p",[n("a",{attrs:{href:t.projectLink}},[t._v("View on GitHub")])])])},R=[],U={props:["project"],computed:{projectLink:function(){return"https://github.com/".concat(this.project.githubPage)}}},X=U,Z=(n("6353"),Object(f["a"])(X,Q,R,!1,null,"51862a18",null));Z.options.__file="ProjectInfo.vue";var tt=Z.exports,et=n("d4bf"),nt={name:"About",components:{TextPage:N,ProjectInfo:tt},data:function(){return{projects:et}}},ot=nt,rt=(n("0ed7"),Object(f["a"])(ot,B,K,!1,null,"51bd0ae2",null));rt.options.__file="About.vue";var at=rt.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("text-page",[n("h2",[t._v("Curriculum Vitae")]),n("p",[t._v("Will be published shortly.")])])},ct=[],st={name:"About",components:{TextPage:N}},ut=st,lt=Object(f["a"])(ut,it,ct,!1,null,null,null);lt.options.__file="Cv.vue";var pt=lt.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("text-page",[n("h2",[t._v("Contact")]),n("p",[t._v("Feel free to contact me if you would like to work with me, or if you have any questions.")]),n("p",[t._v("Email me at "),n("a",{attrs:{href:"mailto:cor@pruijs.nl"}},[t._v("cor@pruijs.nl")])])])},vt=[],dt={name:"Contact",components:{TextPage:N}},_t=dt,mt=Object(f["a"])(_t,ft,vt,!1,null,null,null);mt.options.__file="Contact.vue";var bt=mt.exports;o["a"].use(F["a"]);var ht=new F["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:z},{path:"/about",name:"about",component:at},{path:"/cv",name:"cv",component:pt},{path:"/contact",name:"contact",component:bt}]}),gt=n("2f62");o["a"].use(gt["a"]);var jt=new gt["a"].Store({state:{},mutations:{},actions:{}});o["a"].config.productionTip=!1,new o["a"]({router:ht,store:jt,render:function(t){return t(I)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("5e27"),r=n.n(o);r.a},"5e27":function(t,e,n){},6353:function(t,e,n){"use strict";var o=n("af35"),r=n.n(o);r.a},"669f":function(t,e,n){},ac99:function(t,e,n){"use strict";var o=n("4c20"),r=n.n(o);r.a},af35:function(t,e,n){},b7b0:function(t,e,n){"use strict";var o=n("cb5c"),r=n.n(o);r.a},cb5c:function(t,e,n){},ced1:function(t,e,n){},d026:function(t,e,n){"use strict";var o=n("0210"),r=n.n(o);r.a},d4bf:function(t){t.exports=[{title:"swift-canvas",date:"June 2014",description:"A small drawing program written in Swift playgrounds that uses emoji to render simple geometric drawings.",githubPage:"cor/swift-canvas"},{title:"TicTacoToe",date:"February 2014",description:"This is my oldest project on GitHub, and thus the first project I made using a source control system. It's a console based Tic Tac Toe game written in Java.",githubPage:"cor/tictacotoe"}]},d990:function(t,e,n){},f9f9:function(t,e,n){"use strict";var o=n("669f"),r=n.n(o);r.a}});
//# sourceMappingURL=app.761e9852.js.map