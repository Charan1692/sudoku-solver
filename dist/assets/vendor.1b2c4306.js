const pe=(e,t)=>e===t,H={equals:pe};let ne=ie;const P={},A=1,G=2,se={owned:null,cleanups:null,context:null,owner:null};var d=null;let O=null,g=null,k=null,p=null,m=null,W=0;function v(e,t){const n=g,s=d,r=e.length===0?se:{owned:null,cleanups:null,context:null,owner:t||s};d=r,g=null;try{return q(()=>e(()=>K(r)),!0)}finally{g=n,d=s}}function ye(e,t){t=t?Object.assign({},H,t):H;const n={value:e,observers:null,observerSlots:null,pending:P,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(r=r(n.pending!==P?n.pending:n.value)),X(n,r));return[re.bind(n),s]}function B(e,t,n){const s=Y(e,t,!1,A);R(s)}function Ue(e,t,n){ne=Se;const s=Y(e,t,!1,A);s.user=!0,m?m.push(s):queueMicrotask(()=>R(s))}function we(e,t,n){n=n?Object.assign({},H,n):H;const s=Y(e,t,!0,0);return s.pending=P,s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,R(s),re.bind(s)}function be(e){if(k)return e();let t;const n=k=[];try{t=e()}finally{k=null}return q(()=>{for(let s=0;s<n.length;s+=1){const r=n[s];if(r.pending!==P){const o=r.pending;r.pending=P,X(r,o)}}},!1),t}function F(e){let t,n=g;return g=null,t=e(),g=n,t}function me(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function re(){const e=O;if(this.sources&&(this.state||e)){const t=p;p=null,this.state===A||e?R(this):z(this),p=t}if(g){const t=this.observers?this.observers.length:0;g.sources?(g.sources.push(this),g.sourceSlots.push(t)):(g.sources=[this],g.sourceSlots=[t]),this.observers?(this.observers.push(g),this.observerSlots.push(g.sources.length-1)):(this.observers=[g],this.observerSlots=[g.sources.length-1])}return this.value}function X(e,t,n){if(e.comparator&&e.comparator(e.value,t))return t;if(k)return e.pending===P&&k.push(e),e.pending=t,t;let s=!1;return e.value=t,e.observers&&e.observers.length&&q(()=>{for(let r=0;r<e.observers.length;r+=1){const o=e.observers[r];s&&O.disposed.has(o),o.pure?p.push(o):m.push(o),o.observers&&(s&&!o.tState||!s&&!o.state)&&le(o),s||(o.state=A)}if(p.length>1e6)throw p=[],new Error},!1),t}function R(e){if(!e.fn)return;K(e);const t=d,n=g,s=W;g=d=e,Ee(e,e.value,s),g=n,d=t}function Ee(e,t,n){let s;try{s=e.fn(t)}catch(r){oe(r)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?X(e,s):e.value=s,e.updatedAt=n)}function Y(e,t,n,s=A,r){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:d,context:null,pure:n};return d===null||d!==se&&(d.owned?d.owned.push(o):d.owned=[o]),o}function M(e){const t=O;if(e.state!==A)return e.state=0;if(e.suspense&&F(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<W);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===A||t)R(e);else if(e.state===G||t){const r=p;p=null,z(e,n[0]),p=r}}function q(e,t){if(p)return e();let n=!1;t||(p=[]),m?n=!0:m=[],W++;try{return e()}catch(s){oe(s)}finally{Ae(n)}}function Ae(e){p&&(ie(p),p=null),!e&&(m.length?be(()=>{ne(m),m=null}):m=null)}function ie(e){for(let t=0;t<e.length;t++)M(e[t])}function Se(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:M(r)}const s=e.length;for(t=0;t<n;t++)M(e[t]);for(t=s;t<e.length;t++)M(e[t])}function z(e,t){e.state=0;const n=O;for(let s=0;s<e.sources.length;s+=1){const r=e.sources[s];r.sources&&(r.state===A||n?r!==t&&M(r):(r.state===G||n)&&z(r,t))}}function le(e){const t=O;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=G,s.pure?p.push(s):m.push(s),s.observers&&le(s))}}function K(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const o=r.pop(),i=n.observerSlots.pop();s<r.length&&(o.sourceSlots[i]=s,r[s]=o,n.observerSlots[s]=i)}}if(e.owned){for(t=0;t<e.owned.length;t++)K(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function oe(e){throw e}const xe=Symbol("fallback");function J(e){for(let t=0;t<e.length;t++)e[t]()}function Ce(e,t,n={}){let s=[],r=[],o=[],i=0,l=t.length>1?[]:null;return me(()=>J(o)),()=>{let u=e()||[],a,f;return F(()=>{let h=u.length,y,S,L,D,I,w,b,E,C;if(h===0)i!==0&&(J(o),o=[],s=[],r=[],i=0,l&&(l=[])),n.fallback&&(s=[xe],r[0]=v(de=>(o[0]=de,n.fallback())),i=1);else if(i===0){for(r=new Array(h),f=0;f<h;f++)s[f]=u[f],r[f]=v(c);i=h}else{for(L=new Array(h),D=new Array(h),l&&(I=new Array(h)),w=0,b=Math.min(i,h);w<b&&s[w]===u[w];w++);for(b=i-1,E=h-1;b>=w&&E>=w&&s[b]===u[E];b--,E--)L[E]=r[b],D[E]=o[b],l&&(I[E]=l[b]);for(y=new Map,S=new Array(E+1),f=E;f>=w;f--)C=u[f],a=y.get(C),S[f]=a===void 0?-1:a,y.set(C,f);for(a=w;a<=b;a++)C=s[a],f=y.get(C),f!==void 0&&f!==-1?(L[f]=r[a],D[f]=o[a],l&&(I[f]=l[a]),f=S[f],y.set(C,f)):o[a]();for(f=w;f<h;f++)f in L?(r[f]=L[f],o[f]=D[f],l&&(l[f]=I[f],l[f](f))):r[f]=v(c);r=r.slice(0,i=h),s=u.slice(0)}return r});function c(h){if(o[f]=h,l){const[y,S]=ye(f);return l[f]=S,t(u[f],y)}return t(u[f])}}}function Be(e,t){return F(()=>e(t))}function _e(e){const t="fallback"in e&&{fallback:()=>e.fallback};return we(Ce(()=>e.each,e.children,t||void 0))}function Te(e,t,n){let s=n.length,r=t.length,o=s,i=0,l=0,u=t[r-1].nextSibling,a=null;for(;i<r||l<o;){if(t[i]===n[l]){i++,l++;continue}for(;t[r-1]===n[o-1];)r--,o--;if(r===i){const f=o<s?l?n[l-1].nextSibling:n[o-l]:u;for(;l<o;)e.insertBefore(n[l++],f)}else if(o===l)for(;i<r;)(!a||!a.has(t[i]))&&t[i].remove(),i++;else if(t[i]===n[o-1]&&n[l]===t[r-1]){const f=t[--r].nextSibling;e.insertBefore(n[l++],t[i++].nextSibling),e.insertBefore(n[--o],f),t[r]=n[o]}else{if(!a){a=new Map;let c=l;for(;c<o;)a.set(n[c],c++)}const f=a.get(t[i]);if(f!=null)if(l<f&&f<o){let c=i,h=1,y;for(;++c<r&&c<o&&!((y=a.get(t[c]))==null||y!==f+h);)h++;if(h>f-l){const S=t[i];for(;l<f;)e.insertBefore(n[l++],S)}else e.replaceChild(n[l++],t[i++])}else i++;else t[i++].remove()}}}const Z="_$DX_DELEGATE";function Ve(e,t,n){let s;return v(r=>{s=r,t===document?e():Ne(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function $e(e,t,n){const s=document.createElement("template");s.innerHTML=e;let r=s.content.firstChild;return n&&(r=r.firstChild),r}function Ge(e,t=window.document){const n=t[Z]||(t[Z]=new Set);for(let s=0,r=e.length;s<r;s++){const o=e[s];n.has(o)||(n.add(o),t.addEventListener(o,Pe))}}function We(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Ne(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return U(e,t,s,n);B(r=>U(e,t(),r,n),s)}function Pe(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n!==null;){const s=n[t];if(s&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?s(r,e):s(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function U(e,t,n,s,r){for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,i=s!==void 0;if(e=i&&n[0]&&n[0].parentNode||e,o==="string"||o==="number")if(o==="number"&&(t=t.toString()),i){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=T(e,n,s,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||o==="boolean")n=T(e,n,s);else{if(o==="function")return B(()=>{let l=t();for(;typeof l=="function";)l=l();n=U(e,l,n,s)}),()=>n;if(Array.isArray(t)){const l=[];if(_(l,t,r))return B(()=>n=U(e,l,n,s,!0)),()=>n;if(l.length===0){if(n=T(e,n,s),i)return n}else Array.isArray(n)?n.length===0?ee(e,l,s):Te(e,n,l):(n&&T(e),ee(e,l));n=l}else if(t instanceof Node){if(Array.isArray(n)){if(i)return n=T(e,n,s,t);T(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function _(e,t,n){let s=!1;for(let r=0,o=t.length;r<o;r++){let i=t[r],l;if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))s=_(e,i)||s;else if((l=typeof i)=="string")e.push(document.createTextNode(i));else if(l==="function")if(n){for(;typeof i=="function";)i=i();s=_(e,Array.isArray(i)?i:[i])||s}else e.push(i),s=!0;else e.push(document.createTextNode(i.toString()))}return s}function ee(e,t,n){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function T(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let o=!1;for(let i=t.length-1;i>=0;i--){const l=t[i];if(r!==l){const u=l.parentNode===e;!o&&!i?u?e.replaceChild(r,l):e.insertBefore(r,n):u&&l.remove()}else o=!0}}else e.insertBefore(r,n);return[r]}const fe=Symbol("Comlink.proxy"),Le=Symbol("Comlink.endpoint"),ke=Symbol("Comlink.releaseProxy"),V=Symbol("Comlink.thrown"),ae=e=>typeof e=="object"&&e!==null||typeof e=="function",Me={canHandle:e=>ae(e)&&e[fe],serialize(e){const{port1:t,port2:n}=new MessageChannel;return ce(e,t),[n,[n]]},deserialize(e){return e.start(),De(e)}},Oe={canHandle:e=>ae(e)&&V in e,serialize({value:e}){let t;return e instanceof Error?t={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:t={isError:!1,value:e},[t,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.value}},ue=new Map([["proxy",Me],["throw",Oe]]);function ce(e,t=self){t.addEventListener("message",function n(s){if(!s||!s.data)return;const{id:r,type:o,path:i}=Object.assign({path:[]},s.data),l=(s.data.argumentList||[]).map(x);let u;try{const a=i.slice(0,-1).reduce((c,h)=>c[h],e),f=i.reduce((c,h)=>c[h],e);switch(o){case"GET":u=f;break;case"SET":a[i.slice(-1)[0]]=x(s.data.value),u=!0;break;case"APPLY":u=f.apply(a,l);break;case"CONSTRUCT":{const c=new f(...l);u=ve(c)}break;case"ENDPOINT":{const{port1:c,port2:h}=new MessageChannel;ce(e,h),u=je(c,[c])}break;case"RELEASE":u=void 0;break;default:return}}catch(a){u={value:a,[V]:0}}Promise.resolve(u).catch(a=>({value:a,[V]:0})).then(a=>{const[f,c]=Q(a);t.postMessage(Object.assign(Object.assign({},f),{id:r}),c),o==="RELEASE"&&(t.removeEventListener("message",n),he(t))})}),t.start&&t.start()}function Re(e){return e.constructor.name==="MessagePort"}function he(e){Re(e)&&e.close()}function De(e,t){return $(e,[],t)}function j(e){if(e)throw new Error("Proxy has been released and is not useable")}function $(e,t=[],n=function(){}){let s=!1;const r=new Proxy(n,{get(o,i){if(j(s),i===ke)return()=>N(e,{type:"RELEASE",path:t.map(l=>l.toString())}).then(()=>{he(e),s=!0});if(i==="then"){if(t.length===0)return{then:()=>r};const l=N(e,{type:"GET",path:t.map(u=>u.toString())}).then(x);return l.then.bind(l)}return $(e,[...t,i])},set(o,i,l){j(s);const[u,a]=Q(l);return N(e,{type:"SET",path:[...t,i].map(f=>f.toString()),value:u},a).then(x)},apply(o,i,l){j(s);const u=t[t.length-1];if(u===Le)return N(e,{type:"ENDPOINT"}).then(x);if(u==="bind")return $(e,t.slice(0,-1));const[a,f]=te(l);return N(e,{type:"APPLY",path:t.map(c=>c.toString()),argumentList:a},f).then(x)},construct(o,i){j(s);const[l,u]=te(i);return N(e,{type:"CONSTRUCT",path:t.map(a=>a.toString()),argumentList:l},u).then(x)}});return r}function Ie(e){return Array.prototype.concat.apply([],e)}function te(e){const t=e.map(Q);return[t.map(n=>n[0]),Ie(t.map(n=>n[1]))]}const ge=new WeakMap;function je(e,t){return ge.set(e,t),e}function ve(e){return Object.assign(e,{[fe]:!0})}function Q(e){for(const[t,n]of ue)if(n.canHandle(e)){const[s,r]=n.serialize(e);return[{type:"HANDLER",name:t,value:s},r]}return[{type:"RAW",value:e},ge.get(e)||[]]}function x(e){switch(e.type){case"HANDLER":return ue.get(e.name).deserialize(e.value);case"RAW":return e.value}}function N(e,t,n){return new Promise(s=>{const r=He();e.addEventListener("message",function o(i){!i.data||!i.data.id||i.data.id!==r||(e.removeEventListener("message",o),s(i.data))}),e.start&&e.start(),e.postMessage(Object.assign({id:r},t),n)})}function He(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}export{_e as F,B as a,ye as b,Be as c,Ge as d,Ue as e,Ne as i,Ve as r,We as s,$e as t,De as w};
