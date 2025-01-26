import{A as C,B as S,F as k,C as E,s as P}from"./entry.7dfce0e8.js";function v(e,t,...n){if(e in t){let r=t[e];return typeof r=="function"?r(...n):r}let l=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,v),l}var T=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(T||{}),x=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(x||{});function M({visible:e=!0,features:t=0,ourProps:n,theirProps:l,...r}){var a;let s=O(l,n),u=Object.assign(r,{props:s});if(e||t&2&&s.static)return m(u);if(t&1){let f=(a=s.unmount)==null||a?0:1;return v(f,{0(){return null},1(){return m({...r,props:{...s,hidden:!0,style:{display:"none"}}})}})}return m(u)}function m({props:e,attrs:t,slots:n,slot:l,name:r}){var a,s;let{as:u,...f}=A(e,["unmount","static"]),o=(a=n.default)==null?void 0:a.call(n,l),g={};if(l){let p=!1,h=[];for(let[d,c]of Object.entries(l))typeof c=="boolean"&&(p=!0),c===!0&&h.push(d);p&&(g["data-headlessui-state"]=h.join(" "))}if(u==="template"){if(o=j(o??[]),Object.keys(f).length>0||Object.keys(t).length>0){let[p,...h]=o??[];if(!H(p)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${r} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(f).concat(Object.keys(t)).map(i=>i.trim()).filter((i,y,$)=>$.indexOf(i)===y).sort((i,y)=>i.localeCompare(y)).map(i=>`  - ${i}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(i=>`  - ${i}`).join(`
`)].join(`
`));let d=O((s=p.props)!=null?s:{},f),c=C(p,d);for(let i in d)i.startsWith("on")&&(c.props||(c.props={}),c.props[i]=d[i]);return c}return Array.isArray(o)&&o.length===1?o[0]:o}return S(u,Object.assign({},f,g),{default:()=>o})}function j(e){return e.flatMap(t=>t.type===k?j(t.children):[t])}function O(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let l of e)for(let r in l)r.startsWith("on")&&typeof l[r]=="function"?(n[r]!=null||(n[r]=[]),n[r].push(l[r])):t[r]=l[r];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(l=>[l,void 0])));for(let l in n)Object.assign(t,{[l](r,...a){let s=n[l];for(let u of s){if(r instanceof Event&&r.defaultPrevented)return;u(r,...a)}}});return t}function V(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function A(e,t=[]){let n=Object.assign({},e);for(let l of t)l in n&&delete n[l];return n}function H(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let I=0;function N(){return++I}function Y(){return N()}function q(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}var R=Object.defineProperty,F=(e,t,n)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t,n)=>(F(e,typeof t!="symbol"?t+"":t,n),n);class U{constructor(){b(this,"current",this.detect()),b(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let z=new U,w=Symbol("Context");var W=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(W||{});function D(){return B()!==null}function B(){return E(w,null)}function G(e){P(w,e)}export{D as C,M as H,V as K,T as N,x as S,A as T,z as a,G as c,W as l,q as o,B as p,Y as t,v as u};
