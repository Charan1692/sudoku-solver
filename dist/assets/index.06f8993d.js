import{t as v,d as y,s as w,i as p,c as b,a as x,F as h,w as N,b as g,e as B,r as S}from"./vendor.1b2c4306.js";const A=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}};A();function E(){return new Worker("/sudoku-solver/dist/assets/worker.e9bd4d94.js",{type:"module"})}const D=v('<input type="number" min="1" max="9">'),C=e=>{(e.key==="e"||e.key==="0")&&e.preventDefault()},L=e=>{Number.isNaN(+e.target.value)?e.target.value="":+e.target.value>9&&(e.target.value=+e.target.value.slice(-1))},O=({value:e="",i:l,j:s,highlight:o})=>(()=>{const t=D.cloneNode(!0);return t.$$input=L,t.$$keydown=C,t.className="h-8 w-8 p-2.5 text-base outline-1 outline outline-gray-400"+(o?" bg-blue-200":""),w(t,"data-i",l),w(t,"data-j",s),t.value=e,t})();y(["keydown","input"]);const j=v('<div class="relative"><div></div><div id="userBoard"></div></div>'),q=v("<div></div>"),F=({board:e,userBoard:l,size:s,boxSize:o})=>(()=>{const t=j.cloneNode(!0),r=t.firstChild,a=r.nextSibling;return p(r,b(h,{get each(){return e()},children:()=>(()=>{const n=q.cloneNode(!0);return x(()=>n.className=`h-${o()[0]*8} w-${o()[1]*8} border border-black`),n})()})),p(a,b(h,{get each(){return e()},children:(n,i)=>b(h,{each:n,children:(c,u)=>b(O,{value:c,get i(){return i()},get j(){return u()},get highlight(){return!!l()[i()]?.[u()]}})})})),x(n=>{const i=`inline-grid absolute pointer-events-none grid-rows-${o()[1]} grid-cols-${o()[0]}`,c=`inline-grid grid-rows-${s()} grid-cols-${s()}`;return i!==n._v$&&(r.className=n._v$=i),c!==n._v$2&&(a.className=n._v$2=c),n},{_v$:void 0,_v$2:void 0}),t})(),I=v('<header class="mb-4"><button>4 x 4</button><button>6 x 6</button><button>8 x 8</button><button>9 x 9</button></header>'),M=({setSize:e,size:l})=>(()=>{const s=I.cloneNode(!0),o=s.firstChild,t=o.nextSibling,r=t.nextSibling,a=r.nextSibling;return o.$$click=e,o.$$clickData=4,t.$$click=e,t.$$clickData=6,r.$$click=e,r.$$clickData=8,a.$$click=e,a.$$clickData=9,x(n=>{const i="px-4 py-1 rounded-md mx-2 border-2 border-blue-700"+(l()===4?" bg-blue-800 text-white":""),c="px-4 py-1 rounded-md	 mx-2 border-2 border-blue-700"+(l()===6?" bg-blue-800 text-white":""),u="px-4 py-1 rounded-md mx-2 border-2 border-blue-700"+(l()===8?" bg-blue-800 text-white":""),d="px-4 py-1 rounded-md mx-2 border-2 border-blue-700"+(l()===9?" bg-blue-800 text-white":"");return i!==n._v$&&(o.className=n._v$=i),c!==n._v$2&&(t.className=n._v$2=c),u!==n._v$3&&(r.className=n._v$3=u),d!==n._v$4&&(a.className=n._v$4=d),n},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),s})();y(["click"]);const m=e=>Array.from(new Array(e),()=>Array.from(new Array(e),()=>"")),W=e=>{const l=m(e),s=document.getElementById("userBoard");for(let o of s.children)l[+o.dataset.i][+o.dataset.j]=+o.value;return l},P=v('<div class="text-center"><h1 class="text-3xl m-5">Sudoku Solver</h1><button class="px-4 py-1 rounded-md m-3 border-2 border-blue-700">Clear</button><button class="px-4 py-1 rounded-md m-3 border-2 bg-blue-800 text-white">Search</button><button class="px-4 py-1 rounded-md m-3 border-2 border-blue-700">Reset</button></div>'),R=new E,U=N(R),G=()=>{const[e,l]=g(9),[s,o]=g([]),[t,r]=g([]),[a,n]=g([]),i=async()=>{const d=W(e());n(d);const $=await new U(d);await $.search(),r(await $.solution[0])};B(()=>{r(m(e()));const d=Math.floor(Math.sqrt(e())),$=e()/d;o([d,$]),n(m(e()))});const c=()=>{r(a())},u=()=>{r(m(e())),n(m(e()))};return(()=>{const d=P.cloneNode(!0),$=d.firstChild,f=$.nextSibling,_=f.nextSibling,k=_.nextSibling;return p(d,b(M,{setSize:l,size:e}),f),p(d,b(F,{board:t,userBoard:a,size:e,boxSize:s}),f),f.$$click=c,_.$$click=i,k.$$click=u,d})()};y(["click"]);S(()=>b(G,{}),document.getElementById("root"));
