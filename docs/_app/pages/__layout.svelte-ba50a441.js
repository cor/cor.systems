import{D as W,S as J,i as K,s as U,e as m,t as $,k,c as w,a as u,g as B,d as e,n as L,b as s,E as S,f as T,F as n,G as Y,H as X,I as Z,j as tt,J as ft,m as nt,o as ot,K as at,L as et,M as rt,x as O,u as Q,v as lt}from"../chunks/vendor-1b69a701.js";const st=()=>{const a=W("__svelte__");return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},session:a.session}},it={subscribe(a){return st().page.subscribe(a)}};function ct(a){let f,i,v,r,l,_,y,h,c,o,t,g,x,E,P,j,z,p,b,R;return{c(){f=m("header"),i=m("h1"),v=$("Cor Pruijs"),r=k(),l=m("h2"),_=$("Software Engineer"),y=k(),h=m("nav"),c=m("ul"),o=m("li"),t=m("a"),g=$("About"),x=k(),E=m("li"),P=m("a"),j=$("Projects"),z=k(),p=m("li"),b=m("a"),R=$("Contact"),this.h()},l(d){f=w(d,"HEADER",{class:!0});var A=u(f);i=w(A,"H1",{class:!0});var C=u(i);v=B(C,"Cor Pruijs"),C.forEach(e),r=L(A),l=w(A,"H2",{class:!0});var H=u(l);_=B(H,"Software Engineer"),H.forEach(e),y=L(A),h=w(A,"NAV",{});var D=u(h);c=w(D,"UL",{class:!0});var I=u(c);o=w(I,"LI",{class:!0});var q=u(o);t=w(q,"A",{"sveltekit:prefetch":!0,href:!0});var M=u(t);g=B(M,"About"),M.forEach(e),q.forEach(e),x=L(I),E=w(I,"LI",{class:!0});var N=u(E);P=w(N,"A",{"sveltekit:prefetch":!0,href:!0});var V=u(P);j=B(V,"Projects"),V.forEach(e),N.forEach(e),z=L(I),p=w(I,"LI",{class:!0});var F=u(p);b=w(F,"A",{"sveltekit:prefetch":!0,href:!0});var G=u(b);R=B(G,"Contact"),G.forEach(e),F.forEach(e),I.forEach(e),D.forEach(e),A.forEach(e),this.h()},h(){s(i,"class","text-6xl font-bold mt-8 svelte-1ymwzyf"),s(l,"class",""),s(t,"sveltekit:prefetch",""),s(t,"href","/"),s(o,"class","svelte-1ymwzyf"),S(o,"text-green-500",a[0].path==="/"),s(P,"sveltekit:prefetch",""),s(P,"href","/projects"),s(E,"class","svelte-1ymwzyf"),S(E,"text-green-500",a[0].path==="/projects"),s(b,"sveltekit:prefetch",""),s(b,"href","/contact"),s(p,"class","svelte-1ymwzyf"),S(p,"text-green-500",a[0].path==="/contact"),s(c,"class","flex justify-center gap-4 font-bold underline svelte-1ymwzyf"),s(f,"class","text-center svelte-1ymwzyf")},m(d,A){T(d,f,A),n(f,i),n(i,v),n(f,r),n(f,l),n(l,_),n(f,y),n(f,h),n(h,c),n(c,o),n(o,t),n(t,g),n(c,x),n(c,E),n(E,P),n(P,j),n(c,z),n(c,p),n(p,b),n(b,R)},p(d,[A]){A&1&&S(o,"text-green-500",d[0].path==="/"),A&1&&S(E,"text-green-500",d[0].path==="/projects"),A&1&&S(p,"text-green-500",d[0].path==="/contact")},i:Y,o:Y,d(d){d&&e(f)}}}function mt(a,f,i){let v;return X(a,it,r=>i(0,v=r)),[v]}class wt extends J{constructor(f){super();K(this,f,mt,ct,U,{})}}function ut(a){let f,i,v,r,l,_,y,h;l=new wt({});const c=a[1].default,o=Z(c,a,a[0],null);return{c(){f=m("style"),i=$(`@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPEExtrathinItalic/font.woff2') format('woff2'),
  			url('/fonts/AvertaPEExtrathinItalic/font.woff') format('woff');
  font-weight: 100;
  font-style: italic;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPEBold/font.woff2') format('woff2'),
  			url('/fonts/AvertaPEBold/font.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPEExtrabold/font.woff2') format('woff2'),
  			url('/fonts/AvertaPEExtrabold/font.woff') format('woff');
  font-weight: 800;
  font-style: normal;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPERegularItalic/font.woff2') format('woff2'),
  			url('/fonts/AvertaPERegularItalic/font.woff') format('woff');
  font-weight: normal;
  font-style: italic;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPEThin/font.woff2') format('woff2'),
  			url('/fonts/AvertaPEThin/font.woff') format('woff');
  font-weight: 200;
  font-style: normal;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPEThinItalic/font.woff2') format('woff2'),
  			url('/fonts/AvertaPEThinItalic/font.woff') format('woff');
  font-weight: 200;
  font-style: italic;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPEExtraboldItalic/font.woff2') format('woff2'),
  			url('/fonts/AvertaPEExtraboldItalic/font.woff') format('woff');
  font-weight: 800;
  font-style: italic;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPELight/font.woff2') format('woff2'),
  			url('/fonts/AvertaPELight/font.woff') format('woff');
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPEBlack/font.woff2') format('woff2'),
  			url('/fonts/AvertaPEBlack/font.woff') format('woff');
  font-weight: 900;
  font-style: normal;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPESemiboldItalic/font.woff2') format('woff2'),
  			url('/fonts/AvertaPESemiboldItalic/font.woff') format('woff');
  font-weight: 600;
  font-style: italic;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPERegular/font.woff2') format('woff2'),
  			url('/fonts/AvertaPERegular/font.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPEExtrathin/font.woff2') format('woff2'),
  			url('/fonts/AvertaPEExtrathin/font.woff') format('woff');
  font-weight: 100;
  font-style: normal;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPEBoldItalic/font.woff2') format('woff2'),
  			url('/fonts/AvertaPEBoldItalic/font.woff') format('woff');
  font-weight: 700;
  font-style: italic;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPESemibold/font.woff2') format('woff2'),
  			url('/fonts/AvertaPESemibold/font.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPEBlackItalic/font.woff2') format('woff2'),
  			url('/fonts/AvertaPEBlackItalic/font.woff') format('woff');
  font-weight: 900;
  font-style: italic;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPELightItalic/font.woff2') format('woff2'),
  			url('/fonts/AvertaPELightItalic/font.woff') format('woff');
  font-weight: 300;
  font-style: italic;
}
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*, *:before, *:after {
  box-sizing: inherit;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.max-w-2xl {
  max-width: 42rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgba(17, 24, 39, var(--tw-text-opacity));
}`),v=k(),r=m("div"),tt(l.$$.fragment),_=k(),y=m("main"),o&&o.c(),this.h()},l(t){const g=ft('[data-svelte="svelte-1hsr2gf"]',document.head);f=w(g,"STYLE",{"windi:inject":!0});var x=u(f);i=B(x,`@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPEExtrathinItalic/font.woff2') format('woff2'),
  			url('/fonts/AvertaPEExtrathinItalic/font.woff') format('woff');
  font-weight: 100;
  font-style: italic;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPEBold/font.woff2') format('woff2'),
  			url('/fonts/AvertaPEBold/font.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPEExtrabold/font.woff2') format('woff2'),
  			url('/fonts/AvertaPEExtrabold/font.woff') format('woff');
  font-weight: 800;
  font-style: normal;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPERegularItalic/font.woff2') format('woff2'),
  			url('/fonts/AvertaPERegularItalic/font.woff') format('woff');
  font-weight: normal;
  font-style: italic;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPEThin/font.woff2') format('woff2'),
  			url('/fonts/AvertaPEThin/font.woff') format('woff');
  font-weight: 200;
  font-style: normal;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPEThinItalic/font.woff2') format('woff2'),
  			url('/fonts/AvertaPEThinItalic/font.woff') format('woff');
  font-weight: 200;
  font-style: italic;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPEExtraboldItalic/font.woff2') format('woff2'),
  			url('/fonts/AvertaPEExtraboldItalic/font.woff') format('woff');
  font-weight: 800;
  font-style: italic;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPELight/font.woff2') format('woff2'),
  			url('/fonts/AvertaPELight/font.woff') format('woff');
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPEBlack/font.woff2') format('woff2'),
  			url('/fonts/AvertaPEBlack/font.woff') format('woff');
  font-weight: 900;
  font-style: normal;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPESemiboldItalic/font.woff2') format('woff2'),
  			url('/fonts/AvertaPESemiboldItalic/font.woff') format('woff');
  font-weight: 600;
  font-style: italic;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPERegular/font.woff2') format('woff2'),
  			url('/fonts/AvertaPERegular/font.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPEExtrathin/font.woff2') format('woff2'),
  			url('/fonts/AvertaPEExtrathin/font.woff') format('woff');
  font-weight: 100;
  font-style: normal;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPEBoldItalic/font.woff2') format('woff2'),
  			url('/fonts/AvertaPEBoldItalic/font.woff') format('woff');
  font-weight: 700;
  font-style: italic;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPESemibold/font.woff2') format('woff2'),
  			url('/fonts/AvertaPESemibold/font.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPEBlackItalic/font.woff2') format('woff2'),
  			url('/fonts/AvertaPEBlackItalic/font.woff') format('woff');
  font-weight: 900;
  font-style: italic;
}
@font-face {
  font-family: 'AvertaPE';
  src: url('/fonts/AvertaPELightItalic/font.woff2') format('woff2'),
  			url('/fonts/AvertaPELightItalic/font.woff') format('woff');
  font-weight: 300;
  font-style: italic;
}
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*, *:before, *:after {
  box-sizing: inherit;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.max-w-2xl {
  max-width: 42rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgba(17, 24, 39, var(--tw-text-opacity));
}`),x.forEach(e),g.forEach(e),v=L(t),r=w(t,"DIV",{class:!0});var E=u(r);nt(l.$$.fragment,E),_=L(E),y=w(E,"MAIN",{class:!0});var P=u(y);o&&o.l(P),P.forEach(e),E.forEach(e),this.h()},h(){s(f,"windi:inject",""),s(y,"class","max-w-2xl mx-auto px-4 svelte-yp255d"),s(r,"class","text-gray-900 svelte-yp255d")},m(t,g){n(document.head,f),n(f,i),T(t,v,g),T(t,r,g),ot(l,r,null),n(r,_),n(r,y),o&&o.m(y,null),h=!0},p(t,[g]){o&&o.p&&(!h||g&1)&&at(o,c,t,t[0],h?rt(c,t[0],g,null):et(t[0]),null)},i(t){h||(O(l.$$.fragment,t),O(o,t),h=!0)},o(t){Q(l.$$.fragment,t),Q(o,t),h=!1},d(t){e(f),t&&e(v),t&&e(r),lt(l),o&&o.d(t)}}}function vt(a,f,i){let{$$slots:v={},$$scope:r}=f;return a.$$set=l=>{"$$scope"in l&&i(0,r=l.$$scope)},[r,v]}class ht extends J{constructor(f){super();K(this,f,vt,ut,U,{})}}export{ht as default};
