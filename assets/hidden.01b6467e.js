import{a as h,o as m,u as A,H as L}from"./open-closed.ca44c22a.js";import{k as N,x as F,ac as b,l as P,f as x}from"./entry.930a9958.js";var S=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(S||{});function M(e){if(h.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=m(e);if(t)return t.ownerDocument}return document}let E=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var D=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(D||{}),O=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(O||{}),T=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(T||{});function H(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(E)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var g=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(g||{});function I(e,t=0){var n;return e===((n=M(e))==null?void 0:n.body)?!1:A(t,{0(){return e.matches(E)},1(){let r=e;for(;r!==null;){if(r.matches(E))return!0;r=r.parentElement}return!1}})}var U=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(U||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let _=["textarea","input"].join(",");function $(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,_))!=null?n:!1}function k(e,t=n=>n){return e.slice().sort((n,r)=>{let l=t(n),o=t(r);if(l===null||o===null)return 0;let a=l.compareDocumentPosition(o);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function W(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:l=[]}={}){var o;let a=(o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?o:document,u=Array.isArray(e)?n?k(e):e:H(e);l.length>0&&u.length>1&&(u=u.filter(d=>!l.includes(d))),r=r??a.activeElement;let w=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,u.indexOf(r))-1;if(t&4)return Math.max(0,u.indexOf(r))+1;if(t&8)return u.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),i=t&32?{preventScroll:!0}:{},v=0,f=u.length,c;do{if(v>=f||v+f<=0)return 0;let d=s+v;if(t&16)d=(d+f)%f;else{if(d<0)return 3;if(d>=f)return 1}c=u[d],c==null||c.focus(i),v+=w}while(c!==a.activeElement);return t&6&&$(c)&&c.select(),2}function y(e,t){if(e)return e;let n=t??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function j(e,t){let n=N(y(e.value.type,e.value.as));return F(()=>{n.value=y(e.value.type,e.value.as)}),b(()=>{var r;n.value||m(t)&&m(t)instanceof HTMLButtonElement&&!((r=m(t))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}function p(e,t,n){h.isServer||b(r=>{document.addEventListener(e,t,n),r(()=>document.removeEventListener(e,t,n))})}function R(e,t,n){h.isServer||b(r=>{window.addEventListener(e,t,n),r(()=>window.removeEventListener(e,t,n))})}function B(e,t,n=P(()=>!0)){function r(o,a){if(!n.value||o.defaultPrevented)return;let u=a(o);if(u===null||!u.getRootNode().contains(u))return;let w=function s(i){return typeof i=="function"?s(i()):Array.isArray(i)||i instanceof Set?i:[i]}(e);for(let s of w){if(s===null)continue;let i=s instanceof HTMLElement?s:m(s);if(i!=null&&i.contains(u)||o.composed&&o.composedPath().includes(i))return}return!I(u,g.Loose)&&u.tabIndex!==-1&&o.preventDefault(),t(o,u)}let l=N(null);p("pointerdown",o=>{var a,u;n.value&&(l.value=((u=(a=o.composedPath)==null?void 0:a.call(o))==null?void 0:u[0])||o.target)},!0),p("mousedown",o=>{var a,u;n.value&&(l.value=((u=(a=o.composedPath)==null?void 0:a.call(o))==null?void 0:u[0])||o.target)},!0),p("click",o=>{l.value&&(r(o,()=>l.value),l.value=null)},!0),p("touchend",o=>r(o,()=>o.target instanceof HTMLElement?o.target:null),!0),R("blur",o=>r(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var C=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(C||{});let V=x({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{let{features:r,...l}=e,o={"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return L({ourProps:o,theirProps:l,slot:{},attrs:n,slots:t,name:"Hidden"})}}});export{H as E,D as N,k as O,W as P,O as T,C as a,j as b,I as c,V as f,g as h,M as m,S as o,R as w,B as y};
