function Ri(t,n){return t==null||n==null?NaN:n<t?-1:n>t?1:n>=t?0:NaN}class Ti extends Map{constructor(n,e=Lt){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),n!=null)for(const[r,i]of n)this.set(r,i)}get(n){return super.get(at(this,n))}has(n){return super.has(at(this,n))}set(n,e){return super.set(Pt(this,n),e)}delete(n){return super.delete(Dt(this,n))}}class Ii extends Set{constructor(n,e=Lt){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),n!=null)for(const r of n)this.add(r)}has(n){return super.has(at(this,n))}add(n){return super.add(Pt(this,n))}delete(n){return super.delete(Dt(this,n))}}function at({_intern:t,_key:n},e){const r=n(e);return t.has(r)?t.get(r):e}function Pt({_intern:t,_key:n},e){const r=n(e);return t.has(r)?t.get(r):(t.set(r,e),e)}function Dt({_intern:t,_key:n},e){const r=n(e);return t.has(r)&&(e=t.get(r),t.delete(r)),e}function Lt(t){return t!==null&&typeof t=="object"?t.valueOf():t}function _t(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function Vt(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function L(){}var q=.7,J=1/q,C="\\s*([+-]?\\d+)\\s*",O="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",v="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",_n=/^#([0-9a-f]{3,8})$/,gn=new RegExp(`^rgb\\(${C},${C},${C}\\)$`),yn=new RegExp(`^rgb\\(${v},${v},${v}\\)$`),wn=new RegExp(`^rgba\\(${C},${C},${C},${O}\\)$`),xn=new RegExp(`^rgba\\(${v},${v},${v},${O}\\)$`),vn=new RegExp(`^hsl\\(${O},${v},${v}\\)$`),mn=new RegExp(`^hsla\\(${O},${v},${v},${O}\\)$`),Nt={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};_t(L,P,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:At,formatHex:At,formatHex8:bn,formatHsl:Nn,formatRgb:kt,toString:kt});function At(){return this.rgb().formatHex()}function bn(){return this.rgb().formatHex8()}function Nn(){return Yt(this).formatHsl()}function kt(){return this.rgb().formatRgb()}function P(t){var n,e;return t=(t+"").trim().toLowerCase(),(n=_n.exec(t))?(e=n[1].length,n=parseInt(n[1],16),e===6?$t(n):e===3?new g(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1):e===8?B(n>>24&255,n>>16&255,n>>8&255,(n&255)/255):e===4?B(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|n&240,((n&15)<<4|n&15)/255):null):(n=gn.exec(t))?new g(n[1],n[2],n[3],1):(n=yn.exec(t))?new g(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=wn.exec(t))?B(n[1],n[2],n[3],n[4]):(n=xn.exec(t))?B(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=vn.exec(t))?Ct(n[1],n[2]/100,n[3]/100,1):(n=mn.exec(t))?Ct(n[1],n[2]/100,n[3]/100,n[4]):Nt.hasOwnProperty(t)?$t(Nt[t]):t==="transparent"?new g(NaN,NaN,NaN,0):null}function $t(t){return new g(t>>16&255,t>>8&255,t&255,1)}function B(t,n,e,r){return r<=0&&(t=n=e=NaN),new g(t,n,e,r)}function An(t){return t instanceof L||(t=P(t)),t?(t=t.rgb(),new g(t.r,t.g,t.b,t.opacity)):new g}function ut(t,n,e,r){return arguments.length===1?An(t):new g(t,n,e,r??1)}function g(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}_t(g,ut,Vt(L,{brighter(t){return t=t==null?J:Math.pow(J,t),new g(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?q:Math.pow(q,t),new g(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new g(E(this.r),E(this.g),E(this.b),Q(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Et,formatHex:Et,formatHex8:kn,formatRgb:St,toString:St}));function Et(){return`#${$(this.r)}${$(this.g)}${$(this.b)}`}function kn(){return`#${$(this.r)}${$(this.g)}${$(this.b)}${$((isNaN(this.opacity)?1:this.opacity)*255)}`}function St(){const t=Q(this.opacity);return`${t===1?"rgb(":"rgba("}${E(this.r)}, ${E(this.g)}, ${E(this.b)}${t===1?")":`, ${t})`}`}function Q(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function E(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function $(t){return t=E(t),(t<16?"0":"")+t.toString(16)}function Ct(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new y(t,n,e,r)}function Yt(t){if(t instanceof y)return new y(t.h,t.s,t.l,t.opacity);if(t instanceof L||(t=P(t)),!t)return new y;if(t instanceof y)return t;t=t.rgb();var n=t.r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),s=Math.max(n,e,r),o=NaN,a=s-i,u=(s+i)/2;return a?(n===s?o=(e-r)/a+(e<r)*6:e===s?o=(r-n)/a+2:o=(n-e)/a+4,a/=u<.5?s+i:2-s-i,o*=60):a=u>0&&u<1?0:o,new y(o,a,u,t.opacity)}function $n(t,n,e,r){return arguments.length===1?Yt(t):new y(t,n,e,r??1)}function y(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}_t(y,$n,Vt(L,{brighter(t){return t=t==null?J:Math.pow(J,t),new y(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?q:Math.pow(q,t),new y(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new g(st(t>=240?t-240:t+120,i,r),st(t,i,r),st(t<120?t+240:t-120,i,r),this.opacity)},clamp(){return new y(Mt(this.h),z(this.s),z(this.l),Q(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=Q(this.opacity);return`${t===1?"hsl(":"hsla("}${Mt(this.h)}, ${z(this.s)*100}%, ${z(this.l)*100}%${t===1?")":`, ${t})`}`}}));function Mt(t){return t=(t||0)%360,t<0?t+360:t}function z(t){return Math.max(0,Math.min(1,t||0))}function st(t,n,e){return(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)*255}const Bt=t=>()=>t;function En(t,n){return function(e){return t+e*n}}function Sn(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}function Cn(t){return(t=+t)==1?zt:function(n,e){return e-n?Sn(n,e,t):Bt(isNaN(n)?e:n)}}function zt(t,n){var e=n-t;return e?En(t,e):Bt(isNaN(t)?n:t)}const Rt=function t(n){var e=Cn(n);function r(i,s){var o=e((i=ut(i)).r,(s=ut(s)).r),a=e(i.g,s.g),u=e(i.b,s.b),f=zt(i.opacity,s.opacity);return function(l){return i.r=o(l),i.g=a(l),i.b=u(l),i.opacity=f(l),i+""}}return r.gamma=t,r}(1);function A(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}var ft=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ot=new RegExp(ft.source,"g");function Mn(t){return function(){return t}}function Rn(t){return function(n){return t(n)+""}}function Tn(t,n){var e=ft.lastIndex=ot.lastIndex=0,r,i,s,o=-1,a=[],u=[];for(t=t+"",n=n+"";(r=ft.exec(t))&&(i=ot.exec(n));)(s=i.index)>e&&(s=n.slice(e,s),a[o]?a[o]+=s:a[++o]=s),(r=r[0])===(i=i[0])?a[o]?a[o]+=i:a[++o]=i:(a[++o]=null,u.push({i:o,x:A(r,i)})),e=ot.lastIndex;return e<n.length&&(s=n.slice(e),a[o]?a[o]+=s:a[++o]=s),a.length<2?u[0]?Rn(u[0].x):Mn(n):(n=u.length,function(f){for(var l=0,c;l<n;++l)a[(c=u[l]).i]=c.x(f);return a.join("")})}var Tt=180/Math.PI,lt={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Ut(t,n,e,r,i,s){var o,a,u;return(o=Math.sqrt(t*t+n*n))&&(t/=o,n/=o),(u=t*e+n*r)&&(e-=t*u,r-=n*u),(a=Math.sqrt(e*e+r*r))&&(e/=a,r/=a,u/=a),t*r<n*e&&(t=-t,n=-n,u=-u,o=-o),{translateX:i,translateY:s,rotate:Math.atan2(n,t)*Tt,skewX:Math.atan(u)*Tt,scaleX:o,scaleY:a}}var U;function In(t){const n=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return n.isIdentity?lt:Ut(n.a,n.b,n.c,n.d,n.e,n.f)}function Fn(t){return t==null||(U||(U=document.createElementNS("http://www.w3.org/2000/svg","g")),U.setAttribute("transform",t),!(t=U.transform.baseVal.consolidate()))?lt:(t=t.matrix,Ut(t.a,t.b,t.c,t.d,t.e,t.f))}function Kt(t,n,e,r){function i(f){return f.length?f.pop()+" ":""}function s(f,l,c,h,p,d){if(f!==c||l!==h){var _=p.push("translate(",null,n,null,e);d.push({i:_-4,x:A(f,c)},{i:_-2,x:A(l,h)})}else(c||h)&&p.push("translate("+c+n+h+e)}function o(f,l,c,h){f!==l?(f-l>180?l+=360:l-f>180&&(f+=360),h.push({i:c.push(i(c)+"rotate(",null,r)-2,x:A(f,l)})):l&&c.push(i(c)+"rotate("+l+r)}function a(f,l,c,h){f!==l?h.push({i:c.push(i(c)+"skewX(",null,r)-2,x:A(f,l)}):l&&c.push(i(c)+"skewX("+l+r)}function u(f,l,c,h,p,d){if(f!==c||l!==h){var _=p.push(i(p)+"scale(",null,",",null,")");d.push({i:_-4,x:A(f,c)},{i:_-2,x:A(l,h)})}else(c!==1||h!==1)&&p.push(i(p)+"scale("+c+","+h+")")}return function(f,l){var c=[],h=[];return f=t(f),l=t(l),s(f.translateX,f.translateY,l.translateX,l.translateY,c,h),o(f.rotate,l.rotate,c,h),a(f.skewX,l.skewX,c,h),u(f.scaleX,f.scaleY,l.scaleX,l.scaleY,c,h),f=l=null,function(p){for(var d=-1,_=h.length,k;++d<_;)c[(k=h[d]).i]=k.x(p);return c.join("")}}}var Hn=Kt(In,"px, ","px)","deg)"),Xn=Kt(Fn,", ",")",")"),qn={value:()=>{}};function Gt(){for(var t=0,n=arguments.length,e={},r;t<n;++t){if(!(r=arguments[t]+"")||r in e||/[\s.]/.test(r))throw new Error("illegal type: "+r);e[r]=[]}return new K(e)}function K(t){this._=t}function On(t,n){return t.trim().split(/^|\s+/).map(function(e){var r="",i=e.indexOf(".");if(i>=0&&(r=e.slice(i+1),e=e.slice(0,i)),e&&!n.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:r}})}K.prototype=Gt.prototype={constructor:K,on:function(t,n){var e=this._,r=On(t+"",e),i,s=-1,o=r.length;if(arguments.length<2){for(;++s<o;)if((i=(t=r[s]).type)&&(i=Pn(e[i],t.name)))return i;return}if(n!=null&&typeof n!="function")throw new Error("invalid callback: "+n);for(;++s<o;)if(i=(t=r[s]).type)e[i]=It(e[i],t.name,n);else if(n==null)for(i in e)e[i]=It(e[i],t.name,null);return this},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new K(t)},call:function(t,n){if((i=arguments.length-2)>0)for(var e=new Array(i),r=0,i,s;r<i;++r)e[r]=arguments[r+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(s=this._[t],r=0,i=s.length;r<i;++r)s[r].value.apply(n,e)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,s=r.length;i<s;++i)r[i].value.apply(n,e)}};function Pn(t,n){for(var e=0,r=t.length,i;e<r;++e)if((i=t[e]).name===n)return i.value}function It(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=qn,t=t.slice(0,r).concat(t.slice(r+1));break}return e!=null&&t.push({name:n,value:e}),t}var ct="http://www.w3.org/1999/xhtml";const Ft={svg:"http://www.w3.org/2000/svg",xhtml:ct,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function et(t){var n=t+="",e=n.indexOf(":");return e>=0&&(n=t.slice(0,e))!=="xmlns"&&(t=t.slice(e+1)),Ft.hasOwnProperty(n)?{space:Ft[n],local:t}:t}function Dn(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===ct&&n.documentElement.namespaceURI===ct?n.createElement(t):n.createElementNS(e,t)}}function Ln(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Wt(t){var n=et(t);return(n.local?Ln:Dn)(n)}function Vn(){}function gt(t){return t==null?Vn:function(){return this.querySelector(t)}}function Yn(t){typeof t!="function"&&(t=gt(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var s=n[i],o=s.length,a=r[i]=new Array(o),u,f,l=0;l<o;++l)(u=s[l])&&(f=t.call(u,u.__data__,l,s))&&("__data__"in u&&(f.__data__=u.__data__),a[l]=f);return new w(r,this._parents)}function Bn(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function zn(){return[]}function Jt(t){return t==null?zn:function(){return this.querySelectorAll(t)}}function Un(t){return function(){return Bn(t.apply(this,arguments))}}function Kn(t){typeof t=="function"?t=Un(t):t=Jt(t);for(var n=this._groups,e=n.length,r=[],i=[],s=0;s<e;++s)for(var o=n[s],a=o.length,u,f=0;f<a;++f)(u=o[f])&&(r.push(t.call(u,u.__data__,f,o)),i.push(u));return new w(r,i)}function Qt(t){return function(){return this.matches(t)}}function Zt(t){return function(n){return n.matches(t)}}var Gn=Array.prototype.find;function Wn(t){return function(){return Gn.call(this.children,t)}}function Jn(){return this.firstElementChild}function Qn(t){return this.select(t==null?Jn:Wn(typeof t=="function"?t:Zt(t)))}var Zn=Array.prototype.filter;function jn(){return Array.from(this.children)}function te(t){return function(){return Zn.call(this.children,t)}}function ne(t){return this.selectAll(t==null?jn:te(typeof t=="function"?t:Zt(t)))}function ee(t){typeof t!="function"&&(t=Qt(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var s=n[i],o=s.length,a=r[i]=[],u,f=0;f<o;++f)(u=s[f])&&t.call(u,u.__data__,f,s)&&a.push(u);return new w(r,this._parents)}function jt(t){return new Array(t.length)}function re(){return new w(this._enter||this._groups.map(jt),this._parents)}function Z(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}Z.prototype={constructor:Z,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function ie(t){return function(){return t}}function se(t,n,e,r,i,s){for(var o=0,a,u=n.length,f=s.length;o<f;++o)(a=n[o])?(a.__data__=s[o],r[o]=a):e[o]=new Z(t,s[o]);for(;o<u;++o)(a=n[o])&&(i[o]=a)}function oe(t,n,e,r,i,s,o){var a,u,f=new Map,l=n.length,c=s.length,h=new Array(l),p;for(a=0;a<l;++a)(u=n[a])&&(h[a]=p=o.call(u,u.__data__,a,n)+"",f.has(p)?i[a]=u:f.set(p,u));for(a=0;a<c;++a)p=o.call(t,s[a],a,s)+"",(u=f.get(p))?(r[a]=u,u.__data__=s[a],f.delete(p)):e[a]=new Z(t,s[a]);for(a=0;a<l;++a)(u=n[a])&&f.get(h[a])===u&&(i[a]=u)}function ae(t){return t.__data__}function ue(t,n){if(!arguments.length)return Array.from(this,ae);var e=n?oe:se,r=this._parents,i=this._groups;typeof t!="function"&&(t=ie(t));for(var s=i.length,o=new Array(s),a=new Array(s),u=new Array(s),f=0;f<s;++f){var l=r[f],c=i[f],h=c.length,p=fe(t.call(l,l&&l.__data__,f,r)),d=p.length,_=a[f]=new Array(d),k=o[f]=new Array(d),dn=u[f]=new Array(h);e(l,c,_,k,dn,p,n);for(var T=0,Y=0,mt,bt;T<d;++T)if(mt=_[T]){for(T>=Y&&(Y=T+1);!(bt=k[Y])&&++Y<d;);mt._next=bt||null}}return o=new w(o,r),o._enter=a,o._exit=u,o}function fe(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function le(){return new w(this._exit||this._groups.map(jt),this._parents)}function ce(t,n,e){var r=this.enter(),i=this,s=this.exit();return typeof t=="function"?(r=t(r),r&&(r=r.selection())):r=r.append(t+""),n!=null&&(i=n(i),i&&(i=i.selection())),e==null?s.remove():e(s),r&&i?r.merge(i).order():i}function he(t){for(var n=t.selection?t.selection():t,e=this._groups,r=n._groups,i=e.length,s=r.length,o=Math.min(i,s),a=new Array(i),u=0;u<o;++u)for(var f=e[u],l=r[u],c=f.length,h=a[u]=new Array(c),p,d=0;d<c;++d)(p=f[d]||l[d])&&(h[d]=p);for(;u<i;++u)a[u]=e[u];return new w(a,this._parents)}function pe(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r=t[n],i=r.length-1,s=r[i],o;--i>=0;)(o=r[i])&&(s&&o.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(o,s),s=o);return this}function de(t){t||(t=_e);function n(c,h){return c&&h?t(c.__data__,h.__data__):!c-!h}for(var e=this._groups,r=e.length,i=new Array(r),s=0;s<r;++s){for(var o=e[s],a=o.length,u=i[s]=new Array(a),f,l=0;l<a;++l)(f=o[l])&&(u[l]=f);u.sort(n)}return new w(i,this._parents).order()}function _e(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function ge(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function ye(){return Array.from(this)}function we(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,s=r.length;i<s;++i){var o=r[i];if(o)return o}return null}function xe(){let t=0;for(const n of this)++t;return t}function ve(){return!this.node()}function me(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i=n[e],s=0,o=i.length,a;s<o;++s)(a=i[s])&&t.call(a,a.__data__,s,i);return this}function be(t){return function(){this.removeAttribute(t)}}function Ne(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Ae(t,n){return function(){this.setAttribute(t,n)}}function ke(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function $e(t,n){return function(){var e=n.apply(this,arguments);e==null?this.removeAttribute(t):this.setAttribute(t,e)}}function Ee(t,n){return function(){var e=n.apply(this,arguments);e==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function Se(t,n){var e=et(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((n==null?e.local?Ne:be:typeof n=="function"?e.local?Ee:$e:e.local?ke:Ae)(e,n))}function tn(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function Ce(t){return function(){this.style.removeProperty(t)}}function Me(t,n,e){return function(){this.style.setProperty(t,n,e)}}function Re(t,n,e){return function(){var r=n.apply(this,arguments);r==null?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function Te(t,n,e){return arguments.length>1?this.each((n==null?Ce:typeof n=="function"?Re:Me)(t,n,e??"")):M(this.node(),t)}function M(t,n){return t.style.getPropertyValue(n)||tn(t).getComputedStyle(t,null).getPropertyValue(n)}function Ie(t){return function(){delete this[t]}}function Fe(t,n){return function(){this[t]=n}}function He(t,n){return function(){var e=n.apply(this,arguments);e==null?delete this[t]:this[t]=e}}function Xe(t,n){return arguments.length>1?this.each((n==null?Ie:typeof n=="function"?He:Fe)(t,n)):this.node()[t]}function nn(t){return t.trim().split(/^|\s+/)}function yt(t){return t.classList||new en(t)}function en(t){this._node=t,this._names=nn(t.getAttribute("class")||"")}en.prototype={add:function(t){var n=this._names.indexOf(t);n<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function rn(t,n){for(var e=yt(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function sn(t,n){for(var e=yt(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function qe(t){return function(){rn(this,t)}}function Oe(t){return function(){sn(this,t)}}function Pe(t,n){return function(){(n.apply(this,arguments)?rn:sn)(this,t)}}function De(t,n){var e=nn(t+"");if(arguments.length<2){for(var r=yt(this.node()),i=-1,s=e.length;++i<s;)if(!r.contains(e[i]))return!1;return!0}return this.each((typeof n=="function"?Pe:n?qe:Oe)(e,n))}function Le(){this.textContent=""}function Ve(t){return function(){this.textContent=t}}function Ye(t){return function(){var n=t.apply(this,arguments);this.textContent=n??""}}function Be(t){return arguments.length?this.each(t==null?Le:(typeof t=="function"?Ye:Ve)(t)):this.node().textContent}function ze(){this.innerHTML=""}function Ue(t){return function(){this.innerHTML=t}}function Ke(t){return function(){var n=t.apply(this,arguments);this.innerHTML=n??""}}function Ge(t){return arguments.length?this.each(t==null?ze:(typeof t=="function"?Ke:Ue)(t)):this.node().innerHTML}function We(){this.nextSibling&&this.parentNode.appendChild(this)}function Je(){return this.each(We)}function Qe(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Ze(){return this.each(Qe)}function je(t){var n=typeof t=="function"?t:Wt(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})}function tr(){return null}function nr(t,n){var e=typeof t=="function"?t:Wt(t),r=n==null?tr:typeof n=="function"?n:gt(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})}function er(){var t=this.parentNode;t&&t.removeChild(this)}function rr(){return this.each(er)}function ir(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function sr(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function or(t){return this.select(t?sr:ir)}function ar(t){return arguments.length?this.property("__data__",t):this.node().__data__}function ur(t){return function(n){t.call(this,n,this.__data__)}}function fr(t){return t.trim().split(/^|\s+/).map(function(n){var e="",r=n.indexOf(".");return r>=0&&(e=n.slice(r+1),n=n.slice(0,r)),{type:n,name:e}})}function lr(t){return function(){var n=this.__on;if(n){for(var e=0,r=-1,i=n.length,s;e<i;++e)s=n[e],(!t.type||s.type===t.type)&&s.name===t.name?this.removeEventListener(s.type,s.listener,s.options):n[++r]=s;++r?n.length=r:delete this.__on}}}function cr(t,n,e){return function(){var r=this.__on,i,s=ur(n);if(r){for(var o=0,a=r.length;o<a;++o)if((i=r[o]).type===t.type&&i.name===t.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=s,i.options=e),i.value=n;return}}this.addEventListener(t.type,s,e),i={type:t.type,name:t.name,value:n,listener:s,options:e},r?r.push(i):this.__on=[i]}}function hr(t,n,e){var r=fr(t+""),i,s=r.length,o;if(arguments.length<2){var a=this.node().__on;if(a){for(var u=0,f=a.length,l;u<f;++u)for(i=0,l=a[u];i<s;++i)if((o=r[i]).type===l.type&&o.name===l.name)return l.value}return}for(a=n?cr:lr,i=0;i<s;++i)this.each(a(r[i],n,e));return this}function on(t,n,e){var r=tn(t),i=r.CustomEvent;typeof i=="function"?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function pr(t,n){return function(){return on(this,t,n)}}function dr(t,n){return function(){return on(this,t,n.apply(this,arguments))}}function _r(t,n){return this.each((typeof n=="function"?dr:pr)(t,n))}function*gr(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,s=r.length,o;i<s;++i)(o=r[i])&&(yield o)}var yr=[null];function w(t,n){this._groups=t,this._parents=n}function V(){return new w([[document.documentElement]],yr)}function wr(){return this}w.prototype=V.prototype={constructor:w,select:Yn,selectAll:Kn,selectChild:Qn,selectChildren:ne,filter:ee,data:ue,enter:re,exit:le,join:ce,merge:he,selection:wr,order:pe,sort:de,call:ge,nodes:ye,node:we,size:xe,empty:ve,each:me,attr:Se,style:Te,property:Xe,classed:De,text:Be,html:Ge,raise:Je,lower:Ze,append:je,insert:nr,remove:rr,clone:or,datum:ar,on:hr,dispatch:_r,[Symbol.iterator]:gr};var R=0,F=0,I=0,an=1e3,j,H,tt=0,S=0,rt=0,D=typeof performance=="object"&&performance.now?performance:Date,un=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function wt(){return S||(un(xr),S=D.now()+rt)}function xr(){S=0}function nt(){this._call=this._time=this._next=null}nt.prototype=fn.prototype={constructor:nt,restart:function(t,n,e){if(typeof t!="function")throw new TypeError("callback is not a function");e=(e==null?wt():+e)+(n==null?0:+n),!this._next&&H!==this&&(H?H._next=this:j=this,H=this),this._call=t,this._time=e,ht()},stop:function(){this._call&&(this._call=null,this._time=1/0,ht())}};function fn(t,n,e){var r=new nt;return r.restart(t,n,e),r}function vr(){wt(),++R;for(var t=j,n;t;)(n=S-t._time)>=0&&t._call.call(void 0,n),t=t._next;--R}function Ht(){S=(tt=D.now())+rt,R=F=0;try{vr()}finally{R=0,br(),S=0}}function mr(){var t=D.now(),n=t-tt;n>an&&(rt-=n,tt=t)}function br(){for(var t,n=j,e,r=1/0;n;)n._call?(r>n._time&&(r=n._time),t=n,n=n._next):(e=n._next,n._next=null,n=t?t._next=e:j=e);H=t,ht(r)}function ht(t){if(!R){F&&(F=clearTimeout(F));var n=t-S;n>24?(t<1/0&&(F=setTimeout(Ht,t-D.now()-rt)),I&&(I=clearInterval(I))):(I||(tt=D.now(),I=setInterval(mr,an)),R=1,un(Ht))}}function Xt(t,n,e){var r=new nt;return n=n==null?0:+n,r.restart(i=>{r.stop(),t(i+n)},n,e),r}var Nr=Gt("start","end","cancel","interrupt"),Ar=[],ln=0,qt=1,pt=2,G=3,Ot=4,dt=5,W=6;function it(t,n,e,r,i,s){var o=t.__transition;if(!o)t.__transition={};else if(e in o)return;kr(t,e,{name:n,index:r,group:i,on:Nr,tween:Ar,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:ln})}function xt(t,n){var e=x(t,n);if(e.state>ln)throw new Error("too late; already scheduled");return e}function m(t,n){var e=x(t,n);if(e.state>G)throw new Error("too late; already running");return e}function x(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}function kr(t,n,e){var r=t.__transition,i;r[n]=e,e.timer=fn(s,0,e.time);function s(f){e.state=qt,e.timer.restart(o,e.delay,e.time),e.delay<=f&&o(f-e.delay)}function o(f){var l,c,h,p;if(e.state!==qt)return u();for(l in r)if(p=r[l],p.name===e.name){if(p.state===G)return Xt(o);p.state===Ot?(p.state=W,p.timer.stop(),p.on.call("interrupt",t,t.__data__,p.index,p.group),delete r[l]):+l<n&&(p.state=W,p.timer.stop(),p.on.call("cancel",t,t.__data__,p.index,p.group),delete r[l])}if(Xt(function(){e.state===G&&(e.state=Ot,e.timer.restart(a,e.delay,e.time),a(f))}),e.state=pt,e.on.call("start",t,t.__data__,e.index,e.group),e.state===pt){for(e.state=G,i=new Array(h=e.tween.length),l=0,c=-1;l<h;++l)(p=e.tween[l].value.call(t,t.__data__,e.index,e.group))&&(i[++c]=p);i.length=c+1}}function a(f){for(var l=f<e.duration?e.ease.call(null,f/e.duration):(e.timer.restart(u),e.state=dt,1),c=-1,h=i.length;++c<h;)i[c].call(t,l);e.state===dt&&(e.on.call("end",t,t.__data__,e.index,e.group),u())}function u(){e.state=W,e.timer.stop(),delete r[n];for(var f in r)return;delete t.__transition}}function $r(t,n){var e=t.__transition,r,i,s=!0,o;if(e){n=n==null?null:n+"";for(o in e){if((r=e[o]).name!==n){s=!1;continue}i=r.state>pt&&r.state<dt,r.state=W,r.timer.stop(),r.on.call(i?"interrupt":"cancel",t,t.__data__,r.index,r.group),delete e[o]}s&&delete t.__transition}}function Er(t){return this.each(function(){$r(this,t)})}function Sr(t,n){var e,r;return function(){var i=m(this,t),s=i.tween;if(s!==e){r=e=s;for(var o=0,a=r.length;o<a;++o)if(r[o].name===n){r=r.slice(),r.splice(o,1);break}}i.tween=r}}function Cr(t,n,e){var r,i;if(typeof e!="function")throw new Error;return function(){var s=m(this,t),o=s.tween;if(o!==r){i=(r=o).slice();for(var a={name:n,value:e},u=0,f=i.length;u<f;++u)if(i[u].name===n){i[u]=a;break}u===f&&i.push(a)}s.tween=i}}function Mr(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r=x(this.node(),e).tween,i=0,s=r.length,o;i<s;++i)if((o=r[i]).name===t)return o.value;return null}return this.each((n==null?Sr:Cr)(e,t,n))}function vt(t,n,e){var r=t._id;return t.each(function(){var i=m(this,r);(i.value||(i.value={}))[n]=e.apply(this,arguments)}),function(i){return x(i,r).value[n]}}function cn(t,n){var e;return(typeof n=="number"?A:n instanceof P?Rt:(e=P(n))?(n=e,Rt):Tn)(t,n)}function Rr(t){return function(){this.removeAttribute(t)}}function Tr(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Ir(t,n,e){var r,i=e+"",s;return function(){var o=this.getAttribute(t);return o===i?null:o===r?s:s=n(r=o,e)}}function Fr(t,n,e){var r,i=e+"",s;return function(){var o=this.getAttributeNS(t.space,t.local);return o===i?null:o===r?s:s=n(r=o,e)}}function Hr(t,n,e){var r,i,s;return function(){var o,a=e(this),u;return a==null?void this.removeAttribute(t):(o=this.getAttribute(t),u=a+"",o===u?null:o===r&&u===i?s:(i=u,s=n(r=o,a)))}}function Xr(t,n,e){var r,i,s;return function(){var o,a=e(this),u;return a==null?void this.removeAttributeNS(t.space,t.local):(o=this.getAttributeNS(t.space,t.local),u=a+"",o===u?null:o===r&&u===i?s:(i=u,s=n(r=o,a)))}}function qr(t,n){var e=et(t),r=e==="transform"?Xn:cn;return this.attrTween(t,typeof n=="function"?(e.local?Xr:Hr)(e,r,vt(this,"attr."+t,n)):n==null?(e.local?Tr:Rr)(e):(e.local?Fr:Ir)(e,r,n))}function Or(t,n){return function(e){this.setAttribute(t,n.call(this,e))}}function Pr(t,n){return function(e){this.setAttributeNS(t.space,t.local,n.call(this,e))}}function Dr(t,n){var e,r;function i(){var s=n.apply(this,arguments);return s!==r&&(e=(r=s)&&Pr(t,s)),e}return i._value=n,i}function Lr(t,n){var e,r;function i(){var s=n.apply(this,arguments);return s!==r&&(e=(r=s)&&Or(t,s)),e}return i._value=n,i}function Vr(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(n==null)return this.tween(e,null);if(typeof n!="function")throw new Error;var r=et(t);return this.tween(e,(r.local?Dr:Lr)(r,n))}function Yr(t,n){return function(){xt(this,t).delay=+n.apply(this,arguments)}}function Br(t,n){return n=+n,function(){xt(this,t).delay=n}}function zr(t){var n=this._id;return arguments.length?this.each((typeof t=="function"?Yr:Br)(n,t)):x(this.node(),n).delay}function Ur(t,n){return function(){m(this,t).duration=+n.apply(this,arguments)}}function Kr(t,n){return n=+n,function(){m(this,t).duration=n}}function Gr(t){var n=this._id;return arguments.length?this.each((typeof t=="function"?Ur:Kr)(n,t)):x(this.node(),n).duration}function Wr(t,n){if(typeof n!="function")throw new Error;return function(){m(this,t).ease=n}}function Jr(t){var n=this._id;return arguments.length?this.each(Wr(n,t)):x(this.node(),n).ease}function Qr(t,n){return function(){var e=n.apply(this,arguments);if(typeof e!="function")throw new Error;m(this,t).ease=e}}function Zr(t){if(typeof t!="function")throw new Error;return this.each(Qr(this._id,t))}function jr(t){typeof t!="function"&&(t=Qt(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var s=n[i],o=s.length,a=r[i]=[],u,f=0;f<o;++f)(u=s[f])&&t.call(u,u.__data__,f,s)&&a.push(u);return new N(r,this._parents,this._name,this._id)}function ti(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,s=Math.min(r,i),o=new Array(r),a=0;a<s;++a)for(var u=n[a],f=e[a],l=u.length,c=o[a]=new Array(l),h,p=0;p<l;++p)(h=u[p]||f[p])&&(c[p]=h);for(;a<r;++a)o[a]=n[a];return new N(o,this._parents,this._name,this._id)}function ni(t){return(t+"").trim().split(/^|\s+/).every(function(n){var e=n.indexOf(".");return e>=0&&(n=n.slice(0,e)),!n||n==="start"})}function ei(t,n,e){var r,i,s=ni(n)?xt:m;return function(){var o=s(this,t),a=o.on;a!==r&&(i=(r=a).copy()).on(n,e),o.on=i}}function ri(t,n){var e=this._id;return arguments.length<2?x(this.node(),e).on.on(t):this.each(ei(e,t,n))}function ii(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}function si(){return this.on("end.remove",ii(this._id))}function oi(t){var n=this._name,e=this._id;typeof t!="function"&&(t=gt(t));for(var r=this._groups,i=r.length,s=new Array(i),o=0;o<i;++o)for(var a=r[o],u=a.length,f=s[o]=new Array(u),l,c,h=0;h<u;++h)(l=a[h])&&(c=t.call(l,l.__data__,h,a))&&("__data__"in l&&(c.__data__=l.__data__),f[h]=c,it(f[h],n,e,h,f,x(l,e)));return new N(s,this._parents,n,e)}function ai(t){var n=this._name,e=this._id;typeof t!="function"&&(t=Jt(t));for(var r=this._groups,i=r.length,s=[],o=[],a=0;a<i;++a)for(var u=r[a],f=u.length,l,c=0;c<f;++c)if(l=u[c]){for(var h=t.call(l,l.__data__,c,u),p,d=x(l,e),_=0,k=h.length;_<k;++_)(p=h[_])&&it(p,n,e,_,h,d);s.push(h),o.push(l)}return new N(s,o,n,e)}var ui=V.prototype.constructor;function fi(){return new ui(this._groups,this._parents)}function li(t,n){var e,r,i;return function(){var s=M(this,t),o=(this.style.removeProperty(t),M(this,t));return s===o?null:s===e&&o===r?i:i=n(e=s,r=o)}}function hn(t){return function(){this.style.removeProperty(t)}}function ci(t,n,e){var r,i=e+"",s;return function(){var o=M(this,t);return o===i?null:o===r?s:s=n(r=o,e)}}function hi(t,n,e){var r,i,s;return function(){var o=M(this,t),a=e(this),u=a+"";return a==null&&(u=a=(this.style.removeProperty(t),M(this,t))),o===u?null:o===r&&u===i?s:(i=u,s=n(r=o,a))}}function pi(t,n){var e,r,i,s="style."+n,o="end."+s,a;return function(){var u=m(this,t),f=u.on,l=u.value[s]==null?a||(a=hn(n)):void 0;(f!==e||i!==l)&&(r=(e=f).copy()).on(o,i=l),u.on=r}}function di(t,n,e){var r=(t+="")=="transform"?Hn:cn;return n==null?this.styleTween(t,li(t,r)).on("end.style."+t,hn(t)):typeof n=="function"?this.styleTween(t,hi(t,r,vt(this,"style."+t,n))).each(pi(this._id,t)):this.styleTween(t,ci(t,r,n),e).on("end.style."+t,null)}function _i(t,n,e){return function(r){this.style.setProperty(t,n.call(this,r),e)}}function gi(t,n,e){var r,i;function s(){var o=n.apply(this,arguments);return o!==i&&(r=(i=o)&&_i(t,o,e)),r}return s._value=n,s}function yi(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(n==null)return this.tween(r,null);if(typeof n!="function")throw new Error;return this.tween(r,gi(t,n,e??""))}function wi(t){return function(){this.textContent=t}}function xi(t){return function(){var n=t(this);this.textContent=n??""}}function vi(t){return this.tween("text",typeof t=="function"?xi(vt(this,"text",t)):wi(t==null?"":t+""))}function mi(t){return function(n){this.textContent=t.call(this,n)}}function bi(t){var n,e;function r(){var i=t.apply(this,arguments);return i!==e&&(n=(e=i)&&mi(i)),n}return r._value=t,r}function Ni(t){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;return this.tween(n,bi(t))}function Ai(){for(var t=this._name,n=this._id,e=pn(),r=this._groups,i=r.length,s=0;s<i;++s)for(var o=r[s],a=o.length,u,f=0;f<a;++f)if(u=o[f]){var l=x(u,n);it(u,t,e,f,o,{time:l.time+l.delay+l.duration,delay:0,duration:l.duration,ease:l.ease})}return new N(r,this._parents,t,e)}function ki(){var t,n,e=this,r=e._id,i=e.size();return new Promise(function(s,o){var a={value:o},u={value:function(){--i===0&&s()}};e.each(function(){var f=m(this,r),l=f.on;l!==t&&(n=(t=l).copy(),n._.cancel.push(a),n._.interrupt.push(a),n._.end.push(u)),f.on=n}),i===0&&s()})}var $i=0;function N(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function pn(){return++$i}var b=V.prototype;N.prototype={constructor:N,select:oi,selectAll:ai,selectChild:b.selectChild,selectChildren:b.selectChildren,filter:jr,merge:ti,selection:fi,transition:Ai,call:b.call,nodes:b.nodes,node:b.node,size:b.size,empty:b.empty,each:b.each,on:ri,attr:qr,attrTween:Vr,style:di,styleTween:yi,text:vi,textTween:Ni,remove:si,tween:Mr,delay:zr,duration:Gr,ease:Jr,easeVarying:Zr,end:ki,[Symbol.iterator]:b[Symbol.iterator]};function Ei(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var Si={time:null,delay:0,duration:250,ease:Ei};function Ci(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))throw new Error(`transition ${n} not found`);return e}function Mi(t){var n,e;t instanceof N?(n=t._id,t=t._name):(n=pn(),(e=Si).time=wt(),t=t==null?null:t+"");for(var r=this._groups,i=r.length,s=0;s<i;++s)for(var o=r[s],a=o.length,u,f=0;f<a;++f)(u=o[f])&&it(u,t,n,f,o,e||Ci(u,n));return new N(r,this._parents,t,n)}V.prototype.interrupt=Er;V.prototype.transition=Mi;function X(t,n,e){this.k=t,this.x=n,this.y=e}X.prototype={constructor:X,scale:function(t){return t===1?this:new X(this.k*t,this.x,this.y)},translate:function(t,n){return t===0&n===0?this:new X(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};X.prototype;export{L as C,Ti as I,g as R,w as S,Ii as a,_t as b,Bt as c,Ri as d,Vt as e,P as f,Rt as g,Tn as h,A as i,ut as j,yr as k,zt as n,An as r};
