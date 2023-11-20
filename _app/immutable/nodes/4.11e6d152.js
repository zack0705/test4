import{M as ve,E as xe,g as W,b as ie}from"../chunks/params.495770cd.js";import{s as be,a as y,f as w,c as P,g as E,h as I,d as $,j as C,i as T,u as _,r as _e,x as $e,l as A,m as R,n as G,v as ce}from"../chunks/scheduler.295d690e.js";import{S as ke,i as we,b as S,d as M,m as N,t as k,c as Z,a as b,e as j,g as ee}from"../chunks/index.98f641ac.js";import{e as Q}from"../chunks/each.6632f390.js";import{C as Ee}from"../chunks/CardLogo.e4beb12d.js";import{M as Ce}from"../chunks/MainTitle.1ffc1260.js";import"../chunks/paths.427b185d.js";import{B as Ie,M as De}from"../chunks/Banner.d238472e.js";import{T as Ve}from"../chunks/TabTitle.d9bba9ed.js";import{C as de}from"../chunks/Chip.00ee5417.js";import{U as ne}from"../chunks/UIcon.ed501374.js";import{C as ye}from"../chunks/CardDivider.4320b2d6.js";function Pe({params:i}){if(i.slug)return{experience:ve.find(r=>r.slug===i.slug)}}const Ze=Object.freeze(Object.defineProperty({__proto__:null,load:Pe},Symbol.toStringTag,{value:"Module"}));function fe(i,e,r){const t=i.slice();return t[3]=e[r],t}function ue(i,e,r){const t=i.slice();return t[3]=e[r],t}function Te(i){let e,r,t,l,n,f,s,a;r=new Ie({props:{img:W(i[0].experience.logo),$$slots:{default:[Be]},$$scope:{ctx:i}}});const m=[Re,Ae],o=[];function x(d,v){return d[0].experience.description?0:1}return f=x(i),s=o[f]=m[f](i),{c(){e=w("div"),S(r.$$.fragment),t=y(),l=w("div"),n=w("div"),s.c(),this.h()},l(d){e=E(d,"DIV",{class:!0});var v=I(e);M(r.$$.fragment,v),t=P(v),l=E(v,"DIV",{class:!0});var B=I(l);n=E(B,"DIV",{class:!0});var V=I(n);s.l(V),V.forEach($),B.forEach($),v.forEach($),this.h()},h(){C(n,"class","px-10px m-y-5"),C(l,"class","pt-3 pb-1 overflow-x-hidden w-full"),C(e,"class","flex flex-col items-center overflow-x-hidden")},m(d,v){T(d,e,v),N(r,e,null),_(e,t),_(e,l),_(l,n),o[f].m(n,null),a=!0},p(d,v){const B={};v&1&&(B.img=W(d[0].experience.logo)),v&257&&(B.$$scope={dirty:v,ctx:d}),r.$set(B);let V=f;f=x(d),f===V?o[f].p(d,v):(ee(),k(o[V],1,1,()=>{o[V]=null}),Z(),s=o[f],s?s.p(d,v):(s=o[f]=m[f](d),s.c()),b(s,1),s.m(n,null))},i(d){a||(b(r.$$.fragment,d),b(s),a=!0)},o(d){k(r.$$.fragment,d),k(s),a=!1},d(d){d&&$(e),j(r),o[f].d()}}}function Se(i){let e,r,t,l,n="Could not load experience data...",f;return r=new ne({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){e=w("div"),S(r.$$.fragment),t=y(),l=w("p"),l.textContent=n,this.h()},l(s){e=E(s,"DIV",{class:!0});var a=I(e);M(r.$$.fragment,a),t=P(a),l=E(a,"P",{class:!0,"data-svelte-h":!0}),_e(l)!=="svelte-1o82fhi"&&(l.textContent=n),a.forEach($),this.h()},h(){C(l,"class","font-300"),C(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]")},m(s,a){T(s,e,a),N(r,e,null),_(e,t),_(e,l),f=!0},p:$e,i(s){f||(b(r.$$.fragment,s),f=!0)},o(s){k(r.$$.fragment,s),f=!1},d(s){s&&$(e),j(r)}}}function Me(i){let e=i[0].experience.name+"",r;return{c(){r=A(e)},l(t){r=R(t,e)},m(t,l){T(t,r,l)},p(t,l){l&1&&e!==(e=t[0].experience.name+"")&&G(r,e)},d(t){t&&$(r)}}}function Ne(i){let e,r,t,l,n=i[3].label+"",f,s,a;return r=new ne({props:{icon:"i-carbon-link"}}),{c(){e=w("div"),S(r.$$.fragment),t=y(),l=w("span"),f=A(n),s=y(),this.h()},l(m){e=E(m,"DIV",{class:!0});var o=I(e);M(r.$$.fragment,o),t=P(o),l=E(o,"SPAN",{});var x=I(l);f=R(x,n),x.forEach($),o.forEach($),s=P(m),this.h()},h(){C(e,"class","row-center gap-2")},m(m,o){T(m,e,o),N(r,e,null),_(e,t),_(e,l),_(l,f),T(m,s,o),a=!0},p(m,o){(!a||o&1)&&n!==(n=m[3].label+"")&&G(f,n)},i(m){a||(b(r.$$.fragment,m),a=!0)},o(m){k(r.$$.fragment,m),a=!1},d(m){m&&($(e),$(s)),j(r)}}}function pe(i){let e,r;return e=new de({props:{href:i[3].to,$$slots:{default:[Ne]},$$scope:{ctx:i}}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){N(e,t,l),r=!0},p(t,l){const n={};l&1&&(n.href=t[3].to),l&257&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function je(i){let e,r,t,l=i[3].name+"",n,f,s;return e=new Ee({props:{src:W(i[3].logo),alt:i[3].name,radius:"0px",size:15,classes:"mr-2"}}),{c(){S(e.$$.fragment),r=y(),t=w("span"),n=A(l),f=y(),this.h()},l(a){M(e.$$.fragment,a),r=P(a),t=E(a,"SPAN",{class:!0});var m=I(t);n=R(m,l),m.forEach($),f=P(a),this.h()},h(){C(t,"class","text-[0.9em]")},m(a,m){N(e,a,m),T(a,r,m),T(a,t,m),_(t,n),T(a,f,m),s=!0},p(a,m){const o={};m&1&&(o.src=W(a[3].logo)),m&1&&(o.alt=a[3].name),e.$set(o),(!s||m&1)&&l!==(l=a[3].name+"")&&G(n,l)},i(a){s||(b(e.$$.fragment,a),s=!0)},o(a){k(e.$$.fragment,a),s=!1},d(a){a&&($(r),$(t),$(f)),j(e,a)}}}function me(i){let e,r;return e=new de({props:{classes:"inline-flex flex-row items-center justify-center",href:"",$$slots:{default:[je]},$$scope:{ctx:i}}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){N(e,t,l),r=!0},p(t,l){const n={};l&257&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function Be(i){let e,r,t,l,n,f=i[0].experience.company+"",s,a,m=i[0].experience.location+"",o,x,d=i[0].experience.type+"",v,B,V,J=ie(i[0].experience.period.from,i[0].experience.period.to)+"",K,te,H,L,re,O,le,X,U;t=new Ce({props:{$$slots:{default:[Me]},$$scope:{ctx:i}}}),L=new ye({});let q=Q(i[0].experience.links),h=[];for(let c=0;c<q.length;c+=1)h[c]=pe(ue(i,q,c));const he=c=>k(h[c],1,1,()=>{h[c]=null});let Y=Q(i[0].experience.skills),g=[];for(let c=0;c<Y.length;c+=1)g[c]=me(fe(i,Y,c));const ge=c=>k(g[c],1,1,()=>{g[c]=null});return{c(){e=w("div"),r=w("div"),S(t.$$.fragment),l=y(),n=w("p"),s=A(f),a=A(" · "),o=A(m),x=A(" · "),v=A(d),B=y(),V=w("p"),K=A(J),te=y(),H=w("div"),S(L.$$.fragment),re=y(),O=w("div");for(let c=0;c<h.length;c+=1)h[c].c();le=y(),X=w("div");for(let c=0;c<g.length;c+=1)g[c].c();this.h()},l(c){e=E(c,"DIV",{class:!0});var u=I(e);r=E(u,"DIV",{class:!0});var D=I(r);M(t.$$.fragment,D),D.forEach($),l=P(u),n=E(u,"P",{class:!0});var p=I(n);s=R(p,f),a=R(p," · "),o=R(p,m),x=R(p," · "),v=R(p,d),p.forEach($),B=P(u),V=E(u,"P",{class:!0});var z=I(V);K=R(z,J),z.forEach($),te=P(u),H=E(u,"DIV",{class:!0});var ae=I(H);M(L.$$.fragment,ae),ae.forEach($),re=P(u),O=E(u,"DIV",{class:!0});var se=I(O);for(let F=0;F<h.length;F+=1)h[F].l(se);se.forEach($),le=P(u),X=E(u,"DIV",{class:!0});var oe=I(X);for(let F=0;F<g.length;F+=1)g[F].l(oe);oe.forEach($),u.forEach($),this.h()},h(){C(r,"class","text-0.9em"),C(n,"class","font-300 text-[var(--tertiary-text)] m-y-2 text-center"),C(V,"class","font-300 text-0.9em text-[var(--tertiary-text)] m-y-2 text-center"),C(H,"class","w-75%"),C(O,"class","row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2"),C(X,"class","row-center flex-wrap m-b-2"),C(e,"class","col-center p-y-20")},m(c,u){T(c,e,u),_(e,r),N(t,r,null),_(e,l),_(e,n),_(n,s),_(n,a),_(n,o),_(n,x),_(n,v),_(e,B),_(e,V),_(V,K),_(e,te),_(e,H),N(L,H,null),_(e,re),_(e,O);for(let D=0;D<h.length;D+=1)h[D]&&h[D].m(O,null);_(e,le),_(e,X);for(let D=0;D<g.length;D+=1)g[D]&&g[D].m(X,null);U=!0},p(c,u){const D={};if(u&257&&(D.$$scope={dirty:u,ctx:c}),t.$set(D),(!U||u&1)&&f!==(f=c[0].experience.company+"")&&G(s,f),(!U||u&1)&&m!==(m=c[0].experience.location+"")&&G(o,m),(!U||u&1)&&d!==(d=c[0].experience.type+"")&&G(v,d),(!U||u&1)&&J!==(J=ie(c[0].experience.period.from,c[0].experience.period.to)+"")&&G(K,J),u&1){q=Q(c[0].experience.links);let p;for(p=0;p<q.length;p+=1){const z=ue(c,q,p);h[p]?(h[p].p(z,u),b(h[p],1)):(h[p]=pe(z),h[p].c(),b(h[p],1),h[p].m(O,null))}for(ee(),p=q.length;p<h.length;p+=1)he(p);Z()}if(u&1){Y=Q(c[0].experience.skills);let p;for(p=0;p<Y.length;p+=1){const z=fe(c,Y,p);g[p]?(g[p].p(z,u),b(g[p],1)):(g[p]=me(z),g[p].c(),b(g[p],1),g[p].m(X,null))}for(ee(),p=Y.length;p<g.length;p+=1)ge(p);Z()}},i(c){if(!U){b(t.$$.fragment,c),b(L.$$.fragment,c);for(let u=0;u<q.length;u+=1)b(h[u]);for(let u=0;u<Y.length;u+=1)b(g[u]);U=!0}},o(c){k(t.$$.fragment,c),k(L.$$.fragment,c),h=h.filter(Boolean);for(let u=0;u<h.length;u+=1)k(h[u]);g=g.filter(Boolean);for(let u=0;u<g.length;u+=1)k(g[u]);U=!1},d(c){c&&$(e),j(t),j(L),ce(h,c),ce(g,c)}}}function Ae(i){let e,r,t,l,n="No description...",f;return r=new ne({props:{icon:"i-carbon-text-font",classes:"text-3.5em"}}),{c(){e=w("div"),S(r.$$.fragment),t=y(),l=w("p"),l.textContent=n,this.h()},l(s){e=E(s,"DIV",{class:!0});var a=I(e);M(r.$$.fragment,a),t=P(a),l=E(a,"P",{class:!0,"data-svelte-h":!0}),_e(l)!=="svelte-kl0ixf"&&(l.textContent=n),a.forEach($),this.h()},h(){C(l,"class","font-300"),C(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(s,a){T(s,e,a),N(r,e,null),_(e,t),_(e,l),f=!0},p:$e,i(s){f||(b(r.$$.fragment,s),f=!0)},o(s){k(r.$$.fragment,s),f=!1},d(s){s&&$(e),j(r)}}}function Re(i){let e,r;return e=new De({props:{content:i[0].experience.description??"This place is yet to be filled..."}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){N(e,t,l),r=!0},p(t,l){const n={};l&1&&(n.content=t[0].experience.description??"This place is yet to be filled..."),e.$set(n)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function Ue(i){let e,r,t,l,n,f;e=new Ve({props:{title:i[1]}});const s=[Se,Te],a=[];function m(o,x){return o[0].experience===void 0?0:1}return l=m(i),n=a[l]=s[l](i),{c(){S(e.$$.fragment),r=y(),t=w("div"),n.c(),this.h()},l(o){M(e.$$.fragment,o),r=P(o),t=E(o,"DIV",{class:!0});var x=I(t);n.l(x),x.forEach($),this.h()},h(){C(t,"class","pb-10 overflow-x-hidden col flex-1")},m(o,x){N(e,o,x),T(o,r,x),T(o,t,x),a[l].m(t,null),f=!0},p(o,[x]){const d={};x&2&&(d.title=o[1]),e.$set(d);let v=l;l=m(o),l===v?a[l].p(o,x):(ee(),k(a[v],1,1,()=>{a[v]=null}),Z(),n=a[l],n?n.p(o,x):(n=a[l]=s[l](o),n.c()),b(n,1),n.m(t,null))},i(o){f||(b(e.$$.fragment,o),b(n),f=!0)},o(o){k(e.$$.fragment,o),k(n),f=!1},d(o){o&&($(r),$(t)),j(e,o),a[l].d()}}}function ze(i,e,r){let t,{data:l}=e;const{title:n}=xe;return i.$$set=f=>{"data"in f&&r(0,l=f.data)},i.$$.update=()=>{i.$$.dirty&1&&r(1,t=l.experience?`${l.experience.name} - ${n}`:n)},[l,t]}class et extends ke{constructor(e){super(),we(this,e,ze,Ue,be,{data:0})}}export{et as component,Ze as universal};
