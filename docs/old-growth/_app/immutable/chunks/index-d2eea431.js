function b(){}const ot=t=>t;function lt(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function W(){return Object.create(null)}function x(t){t.forEach(K)}function F(t){return typeof t=="function"}function Tt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function Lt(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function ut(t){return Object.keys(t).length===0}function at(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function zt(t,e,n){t.$$.on_destroy.push(at(e,n))}function Bt(t,e,n,i){if(t){const s=Q(t,e,n,i);return t[0](s)}}function Q(t,e,n,i){return t[1]&&i?lt(n.ctx.slice(),t[1](i(e))):n.ctx}function Ft(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function Ht(t,e,n,i,s,l){if(s){const r=Q(e,n,i,l);t.p(r,s)}}function It(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Wt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Gt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Jt(t){return t&&F(t.destroy)?t.destroy:b}const U=typeof window<"u";let ft=U?()=>window.performance.now():()=>Date.now(),H=U?t=>requestAnimationFrame(t):b;const $=new Set;function V(t){$.forEach(e=>{e.c(t)||($.delete(e),e.f())}),$.size!==0&&H(V)}function _t(t){let e;return $.size===0&&H(V),{promise:new Promise(n=>{$.add(e={c:t,f:n})}),abort(){$.delete(e)}}}let q=!1;function dt(){q=!0}function ht(){q=!1}function mt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function pt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=u?s+1:mt(1,s,a=>e[n[a]].claim_order,u))-1;i[c]=n[_]+1;const f=_+1;n[f]=c,s=Math.max(f,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<r.length;c++){for(;u<l.length&&r[c].claim_order>=l[u].claim_order;)u++;const _=u<l.length?l[u]:null;t.insertBefore(r[c],_)}}function yt(t,e){t.appendChild(e)}function X(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function gt(t){const e=Y("style");return $t(X(t),e),e.sheet}function $t(t,e){yt(t.head||t,e)}function bt(t,e){if(q){for(pt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Kt(t,e,n){q&&!n?bt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function xt(t){t.parentNode.removeChild(t)}function Qt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function wt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function I(t){return document.createTextNode(t)}function Ut(){return I(" ")}function Vt(){return I("")}function Xt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Z(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Yt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:Z(t,i,e[i])}function Zt(t,e){for(const n in e)Z(t,n,e[n])}function te(t){return t===""?null:+t}function vt(t){return Array.from(t.childNodes)}function Et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function tt(t,e,n,i,s=!1){Et(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function et(t,e,n,i){return tt(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ee(t,e,n){return et(t,e,n,Y)}function ne(t,e,n){return et(t,e,n,wt)}function kt(t,e){return tt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>I(e),!0)}function ie(t){return kt(t," ")}function re(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function se(t,e){t.value=e==null?"":e}function ce(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function oe(t,e,n){t.classList[n?"add":"remove"](e)}function nt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function le(t,e=document.body){return Array.from(e.querySelectorAll(t))}const M=new Map;let O=0;function At(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Nt(t,e){const n={stylesheet:gt(e),rules:{}};return M.set(t,n),n}function G(t,e,n,i,s,l,r,o=0){const c=16.666/i;let u=`{
`;for(let p=0;p<=1;p+=c){const g=e+(n-e)*l(p);u+=p*100+`%{${r(g,1-g)}}
`}const _=u+`100% {${r(n,1-n)}}
}`,f=`__svelte_${At(_)}_${o}`,a=X(t),{stylesheet:d,rules:h}=M.get(a)||Nt(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${i}ms linear ${s}ms 1 both`,O+=1,f}function St(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),O-=s,O||jt())}function jt(){H(()=>{O||(M.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),M.clear())})}let A;function k(t){A=t}function w(){if(!A)throw new Error("Function called outside component initialization");return A}function ue(t){w().$$.on_mount.push(t)}function ae(t){w().$$.after_update.push(t)}function fe(t){w().$$.on_destroy.push(t)}function _e(){const t=w();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=nt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}function de(t,e){return w().$$.context.set(t,e),e}function he(t){return w().$$.context.get(t)}function me(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const E=[],J=[],C=[],z=[],it=Promise.resolve();let B=!1;function rt(){B||(B=!0,it.then(st))}function pe(){return rt(),it}function P(t){C.push(t)}function ye(t){z.push(t)}const T=new Set;let j=0;function st(){const t=A;do{for(;j<E.length;){const e=E[j];j++,k(e),Ct(e.$$)}for(k(null),E.length=0,j=0;J.length;)J.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];T.has(n)||(T.add(n),n())}C.length=0}while(E.length);for(;z.length;)z.pop()();B=!1,T.clear(),k(t)}function Ct(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}let v;function Dt(){return v||(v=Promise.resolve(),v.then(()=>{v=null})),v}function L(t,e,n){t.dispatchEvent(nt(`${e?"intro":"outro"}${n}`))}const D=new Set;let m;function ge(){m={r:0,c:[],p:m}}function $e(){m.r||x(m.c),m=m.p}function Mt(t,e){t&&t.i&&(D.delete(t),t.i(e))}function be(t,e,n,i){if(t&&t.o){if(D.has(t))return;D.add(t),m.c.push(()=>{D.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Ot={duration:0};function xe(t,e,n,i){let s=e(t,n),l=i?0:1,r=null,o=null,c=null;function u(){c&&St(t,c)}function _(a,d){const h=a.b-l;return d*=Math.abs(h),{a:l,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:y=ot,tick:p=b,css:g}=s||Ot,R={start:ft()+d,b:a};a||(R.group=m,m.r+=1),r||o?o=R:(g&&(u(),c=G(t,l,a,h,d,y,g)),a&&p(0,1),r=_(R,h),P(()=>L(t,a,"start")),_t(N=>{if(o&&N>o.start&&(r=_(o,h),o=null,L(t,r.b,"start"),g&&(u(),c=G(t,l,r.b,r.duration,0,y,s.css))),r){if(N>=r.end)p(l=r.b,1-l),L(t,r.b,"end"),o||(r.b?u():--r.group.r||x(r.group.c)),r=null;else if(N>=r.start){const ct=N-r.start;l=r.a+r.d*y(ct/r.duration),p(l,1-l)}}return!!(r||o)}))}return{run(a){F(s)?Dt().then(()=>{s=s(),f(a)}):f(a)},end(){u(),r=o=null}}}function we(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const r=t[l],o=e[l];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[l]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function ve(t){return typeof t=="object"&&t!==null?t:{}}function Ee(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function ke(t){t&&t.c()}function Ae(t,e){t&&t.l(e)}function Pt(t,e,n,i){const{fragment:s,on_mount:l,on_destroy:r,after_update:o}=t.$$;s&&s.m(e,n),i||P(()=>{const c=l.map(K).filter(F);r?r.push(...c):x(c),t.$$.on_mount=[]}),o.forEach(P)}function qt(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Rt(t,e){t.$$.dirty[0]===-1&&(E.push(t),rt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ne(t,e,n,i,s,l,r,o=[-1]){const c=A;k(t);const u=t.$$={fragment:null,ctx:null,props:l,update:b,not_equal:s,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:W(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return u.ctx&&s(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),_&&Rt(t,f)),a}):[],u.update(),_=!0,x(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){dt();const f=vt(e.target);u.fragment&&u.fragment.l(f),f.forEach(xt)}else u.fragment&&u.fragment.c();e.intro&&Mt(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),ht(),st()}k(c)}class Se{$destroy(){qt(this,1),this.$destroy=b}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!ut(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Wt as $,ve as A,qt as B,lt as C,pe as D,b as E,Bt as F,Ht as G,It as H,Ft as I,bt as J,le as K,Jt as L,Xt as M,F as N,x as O,se as P,Qt as Q,te as R,Se as S,Lt as T,wt as U,ne as V,Zt as W,oe as X,Yt as Y,Gt as Z,fe as _,Ut as a,me as a0,J as a1,_e as a2,he as a3,zt as a4,Ee as a5,ye as a6,P as a7,xe as a8,Kt as b,ie as c,$e as d,Vt as e,Mt as f,ge as g,xt as h,Ne as i,de as j,ae as k,Y as l,ee as m,vt as n,ue as o,Z as p,ce as q,I as r,Tt as s,be as t,kt as u,re as v,ke as w,Ae as x,Pt as y,we as z};