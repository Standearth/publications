var Q=Object.defineProperty;var T=(t,e,n)=>e in t?Q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var M=(t,e,n)=>T(t,typeof e!="symbol"?e+"":e,n);import{n as x,N as W,O as X,f as B,r as v,i as z,P as j,Q as Y,R as Z,S as I,b as k,T as q,U as G,V as H,W as J,X as U,Y as K,Z as tt,_ as et,$ as nt,a0 as st}from"./scheduler.CVWExS9G.js";const D=typeof window<"u";let it=D?()=>window.performance.now():()=>Date.now(),A=D?t=>requestAnimationFrame(t):x;const y=new Set;function F(t){y.forEach(e=>{e.c(t)||(y.delete(e),e.f())}),y.size!==0&&A(F)}function rt(t){let e;return y.size===0&&A(F),{promise:new Promise(n=>{y.add(e={c:t,f:n})}),abort(){y.delete(e)}}}const E=new Map;let O=0;function at(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function ot(t,e){const n={stylesheet:X(e),rules:{}};return E.set(t,n),n}function V(t,e,n,s,c,f,l,i=0){const u=16.666/s;let r=`{
`;for(let d=0;d<=1;d+=u){const g=e+(n-e)*f(d);r+=d*100+`%{${l(g,1-g)}}
`}const $=r+`100% {${l(n,1-n)}}
}`,o=`__svelte_${at($)}_${i}`,m=W(t),{stylesheet:p,rules:a}=E.get(m)||ot(m,t);a[o]||(a[o]=!0,p.insertRule(`@keyframes ${o} ${$}`,p.cssRules.length));const _=t.style.animation||"";return t.style.animation=`${_?`${_}, `:""}${o} ${s}ms linear ${c}ms 1 both`,O+=1,o}function ft(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?f=>f.indexOf(e)<0:f=>f.indexOf("__svelte")===-1),c=n.length-s.length;c&&(t.style.animation=s.join(", "),O-=c,O||ut())}function ut(){A(()=>{O||(E.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&B(e)}),E.clear())})}let w;function lt(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function N(t,e,n){t.dispatchEvent(Y(`${e?"intro":"outro"}${n}`))}const S=new Set;let h;function yt(){h={r:0,c:[],p:h}}function wt(){h.r||v(h.c),h=h.p}function ct(t,e){t&&t.i&&(S.delete(t),t.i(e))}function xt(t,e,n,s){if(t&&t.o){if(S.has(t))return;S.add(t),h.c.push(()=>{S.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const dt={duration:0};function vt(t,e,n,s){let f=e(t,n,{direction:"both"}),l=s?0:1,i=null,u=null,r=null,$;function o(){r&&ft(t,r)}function m(a,_){const d=a.b-l;return _*=Math.abs(d),{a:l,b:a.b,d,duration:_,start:a.start,end:a.start+_,group:a.group}}function p(a){const{delay:_=0,duration:d=300,easing:g=Z,tick:P=x,css:R}=f||dt,C={start:it()+_,b:a};a||(C.group=h,h.r+=1),"inert"in t&&(a?$!==void 0&&(t.inert=$):($=t.inert,t.inert=!0)),i||u?u=C:(R&&(o(),r=V(t,l,a,d,_,g,R)),a&&P(0,1),i=m(C,d),j(()=>N(t,a,"start")),rt(b=>{if(u&&b>u.start&&(i=m(u,d),u=null,N(t,i.b,"start"),R&&(o(),r=V(t,l,i.b,i.duration,0,g,f.css))),i){if(b>=i.end)P(l=i.b,1-l),N(t,i.b,"end"),u||(i.b?o():--i.group.r||v(i.group.c)),i=null;else if(b>=i.start){const L=b-i.start;l=i.a+i.d*g(L/i.duration),P(l,1-l)}}return!!(i||u)}))}return{run(a){z(f)?lt().then(()=>{f=f({direction:a?"in":"out"}),p(a)}):p(a)},end(){o(),i=u=null}}}function bt(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function St(t){t&&t.c()}function Et(t,e){t&&t.l(e)}function _t(t,e,n){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),j(()=>{const f=t.$$.on_mount.map(K).filter(z);t.$$.on_destroy?t.$$.on_destroy.push(...f):v(f),t.$$.on_mount=[]}),c.forEach(j)}function $t(t,e){const n=t.$$;n.fragment!==null&&(H(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ht(t,e){t.$$.dirty[0]===-1&&(tt.push(t),et(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ot(t,e,n,s,c,f,l=null,i=[-1]){const u=J;U(t);const r=t.$$={fragment:null,ctx:[],props:f,update:x,not_equal:c,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:I(),dirty:i,skip_bound:!1,root:e.target||u.$$.root};l&&l(r.root);let $=!1;if(r.ctx=n?n(t,e.props||{},(o,m,...p)=>{const a=p.length?p[0]:m;return r.ctx&&c(r.ctx[o],r.ctx[o]=a)&&(!r.skip_bound&&r.bound[o]&&r.bound[o](a),$&&ht(t,o)),m}):[],r.update(),$=!0,v(r.before_update),r.fragment=s?s(r.ctx):!1,e.target){if(e.hydrate){nt();const o=k(e.target);r.fragment&&r.fragment.l(o),o.forEach(B)}else r.fragment&&r.fragment.c();e.intro&&ct(t.$$.fragment),_t(t,e.target,e.anchor),st(),q()}U(u)}class Pt{constructor(){M(this,"$$");M(this,"$$set")}$destroy(){$t(this,1),this.$destroy=x}$on(e,n){if(!z(n))return x;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const c=s.indexOf(n);c!==-1&&s.splice(c,1)}}$set(e){this.$$set&&!G(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const mt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(mt);export{Pt as S,xt as a,Et as b,St as c,$t as d,wt as e,bt as f,yt as g,vt as h,Ot as i,rt as l,_t as m,it as n,ct as t};
