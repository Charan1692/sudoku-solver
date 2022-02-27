import{t as m,d as _,s as N,i as f,c as a,a as w,F as h,b as p,S as y,w as C,e as $,f as I,r as j}from"./vendor.af46c117.js";const D=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}};D();function L(){return new Worker("/sudoku-solver/dist/assets/worker.c03fd0d4.js",{type:"module"})}const M=m('<input type="number" min="1" max="9">'),O=e=>{(e.key==="e"||e.key==="0")&&e.preventDefault()},P=e=>{Number.isNaN(+e.target.value)?e.target.value="":+e.target.value>9&&(e.target.value=+e.target.value.slice(-1))},V=({value:e="",i:r,j:s,highlight:n})=>(()=>{const t=M.cloneNode(!0);return t.$$input=P,t.$$keydown=O,t.className="h-8 w-8 p-2.5 text-base outline-1 outline outline-gray-400"+(n?" bg-blue-200":""),N(t,"data-i",r),N(t,"data-j",s),t.value=e,t})();_(["keydown","input"]);const q=m('<div class="relative"><div></div><div id="userBoard"></div></div>'),F=m("<div></div>"),R=({board:e,userBoard:r,size:s,boxSize:n})=>(()=>{const t=q.cloneNode(!0),o=t.firstChild,i=o.nextSibling;return f(o,a(h,{get each(){return e()},children:()=>(()=>{const l=F.cloneNode(!0);return w(()=>l.className=`h-${n()[0]*8} w-${n()[1]*8} border border-black`),l})()})),f(i,a(h,{get each(){return e()},children:(l,d)=>a(h,{each:l,children:(c,b)=>a(V,{value:c,get i(){return d()},get j(){return b()},get highlight(){return!!r()[d()]?.[b()]}})})})),w(l=>{const d=`inline-grid absolute pointer-events-none grid-rows-${n()[1]} grid-cols-${n()[0]}`,c=`inline-grid grid-rows-${s()} grid-cols-${s()}`;return d!==l._v$&&(o.className=l._v$=d),c!==l._v$2&&(i.className=l._v$2=c),l},{_v$:void 0,_v$2:void 0}),t})(),W=m('<header class="mb-4"><button>4 x 4</button><button>6 x 6</button><button>8 x 8</button><button>9 x 9</button></header>'),U=({setSize:e,size:r})=>(()=>{const s=W.cloneNode(!0),n=s.firstChild,t=n.nextSibling,o=t.nextSibling,i=o.nextSibling;return n.$$click=e,n.$$clickData=4,t.$$click=e,t.$$clickData=6,o.$$click=e,o.$$clickData=8,i.$$click=e,i.$$clickData=9,w(l=>{const d="px-4 py-1 rounded-md mx-2 border-2 border-blue-700"+(r()===4?" bg-blue-800 text-white":""),c="px-4 py-1 rounded-md	 mx-2 border-2 border-blue-700"+(r()===6?" bg-blue-800 text-white":""),b="px-4 py-1 rounded-md mx-2 border-2 border-blue-700"+(r()===8?" bg-blue-800 text-white":""),g="px-4 py-1 rounded-md mx-2 border-2 border-blue-700"+(r()===9?" bg-blue-800 text-white":"");return d!==l._v$&&(n.className=l._v$=d),c!==l._v$2&&(t.className=l._v$2=c),b!==l._v$3&&(o.className=l._v$3=b),g!==l._v$4&&(i.className=l._v$4=g),l},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),s})();_(["click"]);const x=e=>Array.from(new Array(e),()=>Array.from(new Array(e),()=>"")),G=e=>{const r=x(e),s=document.getElementById("userBoard");for(let n of s.children)r[+n.dataset.i][+n.dataset.j]=+n.value||"";return r},H=(e,r,s)=>{for(let n in e){const t=K(e,n);if(new Set(t).size!==t.length)return!1}for(let n in e){const t=z(e,n);if(new Set(t).size!==t.length)return!1}debugger;for(let n=0;n<e.length;n+=r)for(let t=0;t<e.length;t+=s){const o=J(e,n,t,r,s);if(new Set(o).size!==o.length)return!1}return!0},K=(e,r)=>e[r].filter(s=>s),z=(e,r)=>e.map(s=>s[r]).filter(s=>s),J=(e,r,s,n,t)=>{const o=Math.floor(r/n)*n,i=Math.floor(s/t)*t,l=[];for(let d=o;d<o+n;d++)for(let c=i;c<i+t;c++)e[d][c]&&l.push(e[d][c]);return l},S=e=>{const r=Array.from(new Array(e),()=>Array.from(new Array(e),()=>""));return r[3][0]=7,r[5][0]=1,r[7][1]=8,r[8][1]=5,r[2][3]=6,r[4][3]=4,r[6][3]=1,r[1][4]=3,r[6][4]=2,r[1][5]=5,r[3][6]=3,r[4][6]=8,r[8][6]=6,r[0][7]=1,r[2][7]=7,r[7][7]=4,r[0][8]=2,r},Q=m('<div style="border-top-color:transparent" class="w-6 h-6 border-4 border-blue-400 border-solid rounded-full animate-spin"></div>'),T=m('<div class="flex justify-center"><button class="px-4 py-1 rounded-md m-3 border-2 border-blue-700">Reset</button><button class="flex justify-center px-4 py-1 rounded-md m-3 bg-blue-800 border-2 border-blue-700 text-white w-20 disabled"></button><button class="px-4 py-1 rounded-md m-3 border-2 border-blue-700">Clear</button></div>'),X=({resetBoard:e,findSolution:r,clearBoard:s,inProgress:n})=>(()=>{const t=T.cloneNode(!0),o=t.firstChild,i=o.nextSibling,l=i.nextSibling;return p(o,"click",e,!0),p(i,"click",r,!0),f(i,a(y,{get when(){return!n()},children:"Search"}),null),f(i,a(y,{get when(){return n()},get children(){return Q.cloneNode(!0)}}),null),p(l,"click",s,!0),t})();_(["click"]);const Y=m('<div class="text-red-500">Invalid Board Input</div>'),Z=m('<div class="text-center"><h1 class="text-3xl m-5">Sudoku Solver</h1></div>'),ee=new L,te=C(ee),re=()=>{const[e,r]=$(9),[s,n]=$([]),[t,o]=$([]),[i,l]=$([]),[d,c]=$(!0),[b,g]=$(!1),B=async()=>{const u=G(e());l(u);const v=H(u,s()[0],s()[1]);if(c(v),!v)return;g(!0);const k=await new te(u);await k.search(),o(await k.solution[0]),g(!1)};I(()=>{o(S(e()));const u=Math.floor(Math.sqrt(e())),v=e()/u;n([u,v]),l(S(e()))});const A=()=>{o(i())},E=()=>{l(x(e())),o(x(e()))};return(()=>{const u=Z.cloneNode(!0);return u.firstChild,f(u,a(U,{setSize:r,size:e}),null),f(u,a(R,{board:t,userBoard:i,size:e,boxSize:s}),null),f(u,a(X,{resetBoard:E,findSolution:B,clearBoard:A,inProgress:b}),null),f(u,a(y,{get when(){return!d()},get children(){return Y.cloneNode(!0)}}),null),u})()};j(()=>a(re,{}),document.getElementById("root"));