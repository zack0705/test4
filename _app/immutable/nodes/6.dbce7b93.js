import{f as ce,P as ie,g as L}from"../chunks/params.495770cd.js";import{s as fe,a as P,f as j,c as S,g as x,h as D,d as _,j as E,i as T,u as v,r as le,x as ne,l as F,m as G,n as H,v as X}from"../chunks/scheduler.295d690e.js";import{S as ue,i as pe,b as y,d as M,m as B,t as w,c as q,a as b,e as O,g as Y}from"../chunks/index.98f641ac.js";import{e as J}from"../chunks/each.6632f390.js";import{C as me}from"../chunks/CardLogo.e4beb12d.js";import{M as $e}from"../chunks/MainTitle.1ffc1260.js";import"../chunks/paths.427b185d.js";import{B as _e,M as de}from"../chunks/Banner.d238472e.js";import{T as he}from"../chunks/TabTitle.d9bba9ed.js";import{C as se}from"../chunks/Chip.00ee5417.js";import{U as K}from"../chunks/UIcon.ed501374.js";import{C as ae}from"../chunks/CardDivider.4320b2d6.js";function ge({params:i}){if(i.slug)return{project:ce.find(r=>r.slug===i.slug)}}const Ue=Object.freeze(Object.defineProperty({__proto__:null,load:ge},Symbol.toStringTag,{value:"Module"}));function Z(i,e,r){const t=i.slice();return t[4]=e[r],t}function ee(i,e,r){const t=i.slice();return t[4]=e[r],t}function ve(i){let e,r,t,l,n,c,a,s,u,o,g;r=new _e({props:{img:L(i[0].project.logo),$$slots:{default:[xe]},$$scope:{ctx:i}}});const V=[Ce,Ee],C=[];function z(d,k){return d[0].project.description?0:1}return c=z(i),a=C[c]=V[c](i),o=new ae({}),{c(){e=j("div"),y(r.$$.fragment),t=P(),l=j("div"),n=j("div"),a.c(),s=P(),u=j("div"),y(o.$$.fragment),this.h()},l(d){e=x(d,"DIV",{class:!0});var k=D(e);M(r.$$.fragment,k),t=S(k),l=x(k,"DIV",{class:!0});var $=D(l);n=x($,"DIV",{class:!0});var N=D(n);a.l(N),N.forEach(_),s=S($),u=x($,"DIV",{class:!0});var A=D(u);M(o.$$.fragment,A),A.forEach(_),$.forEach(_),k.forEach(_),this.h()},h(){E(n,"class","px-10px m-y-5"),E(u,"class","w-100% m-t-8"),E(l,"class","pt-3 pb-1 overflow-x-hidden w-full"),E(e,"class","flex flex-col items-center overflow-x-hidden")},m(d,k){T(d,e,k),B(r,e,null),v(e,t),v(e,l),v(l,n),C[c].m(n,null),v(l,s),v(l,u),B(o,u,null),g=!0},p(d,k){const $={};k&1&&($.img=L(d[0].project.logo)),k&513&&($.$$scope={dirty:k,ctx:d}),r.$set($);let N=c;c=z(d),c===N?C[c].p(d,k):(Y(),w(C[N],1,1,()=>{C[N]=null}),q(),a=C[c],a?a.p(d,k):(a=C[c]=V[c](d),a.c()),b(a,1),a.m(n,null))},i(d){g||(b(r.$$.fragment,d),b(a),b(o.$$.fragment,d),g=!0)},o(d){w(r.$$.fragment,d),w(a),w(o.$$.fragment,d),g=!1},d(d){d&&_(e),O(r),C[c].d(),O(o)}}}function be(i){let e,r,t,l,n="Could not load project data...",c;return r=new K({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){e=j("div"),y(r.$$.fragment),t=P(),l=j("p"),l.textContent=n,this.h()},l(a){e=x(a,"DIV",{class:!0});var s=D(e);M(r.$$.fragment,s),t=S(s),l=x(s,"P",{class:!0,"data-svelte-h":!0}),le(l)!=="svelte-18mwztv"&&(l.textContent=n),s.forEach(_),this.h()},h(){E(l,"class","font-300"),E(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]")},m(a,s){T(a,e,s),B(r,e,null),v(e,t),v(e,l),c=!0},p:ne,i(a){c||(b(r.$$.fragment,a),c=!0)},o(a){w(r.$$.fragment,a),c=!1},d(a){a&&_(e),O(r)}}}function ke(i){let e=i[0].project.name+"",r;return{c(){r=F(e)},l(t){r=G(t,e)},m(t,l){T(t,r,l)},p(t,l){l&1&&e!==(e=t[0].project.name+"")&&H(r,e)},d(t){t&&_(r)}}}function we(i){let e,r,t,l,n=i[4].label+"",c,a,s;return r=new K({props:{icon:"i-carbon-link"}}),{c(){e=j("div"),y(r.$$.fragment),t=P(),l=j("span"),c=F(n),a=P(),this.h()},l(u){e=x(u,"DIV",{class:!0});var o=D(e);M(r.$$.fragment,o),t=S(o),l=x(o,"SPAN",{});var g=D(l);c=G(g,n),g.forEach(_),o.forEach(_),a=S(u),this.h()},h(){E(e,"class","row-center gap-2")},m(u,o){T(u,e,o),B(r,e,null),v(e,t),v(e,l),v(l,c),T(u,a,o),s=!0},p(u,o){(!s||o&1)&&n!==(n=u[4].label+"")&&H(c,n)},i(u){s||(b(r.$$.fragment,u),s=!0)},o(u){w(r.$$.fragment,u),s=!1},d(u){u&&(_(e),_(a)),O(r)}}}function te(i){let e,r;return e=new se({props:{href:i[4].to,$$slots:{default:[we]},$$scope:{ctx:i}}}),{c(){y(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){B(e,t,l),r=!0},p(t,l){const n={};l&1&&(n.href=t[4].to),l&513&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){O(e,t)}}}function je(i){let e,r,t,l=i[4].name+"",n,c,a;return e=new me({props:{src:L(i[4].logo),alt:i[4].name,radius:"0px",size:15,classes:"mr-2"}}),{c(){y(e.$$.fragment),r=P(),t=j("span"),n=F(l),c=P(),this.h()},l(s){M(e.$$.fragment,s),r=S(s),t=x(s,"SPAN",{class:!0});var u=D(t);n=G(u,l),u.forEach(_),c=S(s),this.h()},h(){E(t,"class","text-[0.9em]")},m(s,u){B(e,s,u),T(s,r,u),T(s,t,u),v(t,n),T(s,c,u),a=!0},p(s,u){const o={};u&1&&(o.src=L(s[4].logo)),u&1&&(o.alt=s[4].name),e.$set(o),(!a||u&1)&&l!==(l=s[4].name+"")&&H(n,l)},i(s){a||(b(e.$$.fragment,s),a=!0)},o(s){w(e.$$.fragment,s),a=!1},d(s){s&&(_(r),_(t),_(c)),O(e,s)}}}function re(i){let e,r;return e=new se({props:{classes:"inline-flex flex-row items-center justify-center",href:"",$$slots:{default:[je]},$$scope:{ctx:i}}}),{c(){y(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){B(e,t,l),r=!0},p(t,l){const n={};l&513&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){O(e,t)}}}function xe(i){let e,r,t,l,n,c=i[0].project.type+"",a,s,u,o,g,V,C,z,d;t=new $e({props:{$$slots:{default:[ke]},$$scope:{ctx:i}}}),o=new ae({});let k=J(i[0].project.links),$=[];for(let f=0;f<k.length;f+=1)$[f]=te(ee(i,k,f));const N=f=>w($[f],1,1,()=>{$[f]=null});let A=J(i[0].project.skills),h=[];for(let f=0;f<A.length;f+=1)h[f]=re(Z(i,A,f));const oe=f=>w(h[f],1,1,()=>{h[f]=null});return{c(){e=j("div"),r=j("div"),y(t.$$.fragment),l=P(),n=j("p"),a=F(c),s=P(),u=j("div"),y(o.$$.fragment),g=P(),V=j("div");for(let f=0;f<$.length;f+=1)$[f].c();C=P(),z=j("div");for(let f=0;f<h.length;f+=1)h[f].c();this.h()},l(f){e=x(f,"DIV",{class:!0});var p=D(e);r=x(p,"DIV",{class:!0});var I=D(r);M(t.$$.fragment,I),I.forEach(_),l=S(p),n=x(p,"P",{class:!0});var m=D(n);a=G(m,c),m.forEach(_),s=S(p),u=x(p,"DIV",{class:!0});var R=D(u);M(o.$$.fragment,R),R.forEach(_),g=S(p),V=x(p,"DIV",{class:!0});var Q=D(V);for(let U=0;U<$.length;U+=1)$[U].l(Q);Q.forEach(_),C=S(p),z=x(p,"DIV",{class:!0});var W=D(z);for(let U=0;U<h.length;U+=1)h[U].l(W);W.forEach(_),p.forEach(_),this.h()},h(){E(r,"class","text-0.9em"),E(n,"class","font-300 text-center text-[var(--tertiary-text)] m-y-2"),E(u,"class","w-75%"),E(V,"class","row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2"),E(z,"class","row-center flex-wrap m-b-2"),E(e,"class","col-center p-y-20")},m(f,p){T(f,e,p),v(e,r),B(t,r,null),v(e,l),v(e,n),v(n,a),v(e,s),v(e,u),B(o,u,null),v(e,g),v(e,V);for(let I=0;I<$.length;I+=1)$[I]&&$[I].m(V,null);v(e,C),v(e,z);for(let I=0;I<h.length;I+=1)h[I]&&h[I].m(z,null);d=!0},p(f,p){const I={};if(p&513&&(I.$$scope={dirty:p,ctx:f}),t.$set(I),(!d||p&1)&&c!==(c=f[0].project.type+"")&&H(a,c),p&1){k=J(f[0].project.links);let m;for(m=0;m<k.length;m+=1){const R=ee(f,k,m);$[m]?($[m].p(R,p),b($[m],1)):($[m]=te(R),$[m].c(),b($[m],1),$[m].m(V,null))}for(Y(),m=k.length;m<$.length;m+=1)N(m);q()}if(p&1){A=J(f[0].project.skills);let m;for(m=0;m<A.length;m+=1){const R=Z(f,A,m);h[m]?(h[m].p(R,p),b(h[m],1)):(h[m]=re(R),h[m].c(),b(h[m],1),h[m].m(z,null))}for(Y(),m=A.length;m<h.length;m+=1)oe(m);q()}},i(f){if(!d){b(t.$$.fragment,f),b(o.$$.fragment,f);for(let p=0;p<k.length;p+=1)b($[p]);for(let p=0;p<A.length;p+=1)b(h[p]);d=!0}},o(f){w(t.$$.fragment,f),w(o.$$.fragment,f),$=$.filter(Boolean);for(let p=0;p<$.length;p+=1)w($[p]);h=h.filter(Boolean);for(let p=0;p<h.length;p+=1)w(h[p]);d=!1},d(f){f&&_(e),O(t),O(o),X($,f),X(h,f)}}}function Ee(i){let e,r,t,l,n="No description",c;return r=new K({props:{icon:"i-carbon-text-font",classes:"text-3.5em"}}),{c(){e=j("div"),y(r.$$.fragment),t=P(),l=j("p"),l.textContent=n,this.h()},l(a){e=x(a,"DIV",{class:!0});var s=D(e);M(r.$$.fragment,s),t=S(s),l=x(s,"P",{class:!0,"data-svelte-h":!0}),le(l)!=="svelte-1ugej71"&&(l.textContent=n),s.forEach(_),this.h()},h(){E(l,"class","font-300"),E(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(a,s){T(a,e,s),B(r,e,null),v(e,t),v(e,l),c=!0},p:ne,i(a){c||(b(r.$$.fragment,a),c=!0)},o(a){w(r.$$.fragment,a),c=!1},d(a){a&&_(e),O(r)}}}function Ce(i){let e,r;return e=new de({props:{content:i[0].project.description}}),{c(){y(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){B(e,t,l),r=!0},p(t,l){const n={};l&1&&(n.content=t[0].project.description),e.$set(n)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){O(e,t)}}}function De(i){let e,r,t,l,n,c;e=new he({props:{title:i[1]}});const a=[be,ve],s=[];function u(o,g){return o[0].project===void 0?0:1}return l=u(i),n=s[l]=a[l](i),{c(){y(e.$$.fragment),r=P(),t=j("div"),n.c(),this.h()},l(o){M(e.$$.fragment,o),r=S(o),t=x(o,"DIV",{class:!0});var g=D(t);n.l(g),g.forEach(_),this.h()},h(){E(t,"class","pb-10 overflow-x-hidden col flex-1")},m(o,g){B(e,o,g),T(o,r,g),T(o,t,g),s[l].m(t,null),c=!0},p(o,[g]){const V={};g&2&&(V.title=o[1]),e.$set(V);let C=l;l=u(o),l===C?s[l].p(o,g):(Y(),w(s[C],1,1,()=>{s[C]=null}),q(),n=s[l],n?n.p(o,g):(n=s[l]=a[l](o),n.c()),b(n,1),n.m(t,null))},i(o){c||(b(e.$$.fragment,o),b(n),c=!0)},o(o){w(e.$$.fragment,o),w(n),c=!1},d(o){o&&(_(r),_(t)),O(e,o),s[l].d()}}}function Ie(i,e,r){var c;let t,{data:l}=e;const{title:n}=ie;return(c=l.project)==null||c.screenshots,i.$$set=a=>{"data"in a&&r(0,l=a.data)},i.$$.update=()=>{i.$$.dirty&1&&r(1,t=l.project?`${l.project.name} - ${n}`:n)},[l,t]}class Je extends ue{constructor(e){super(),pe(this,e,Ie,De,fe,{data:0})}}export{Je as component,Ue as universal};
