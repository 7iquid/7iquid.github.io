import{_ as V}from"./nuxt-link.23ac652d.js";import _ from"./Icon.d9ea5e64.js";import{_ as z}from"./index.vue.409c02d5.js";import{f as E,m as I,o as a,i as m,w as h,a as u,E as C,t as i,j as t,c as D,b as S,aj as q,am as H,k as L}from"./entry.fa7b6064.js";import{u as O}from"./use-navbar-parser.49d9376d.js";const P={key:0,class:"relative"},R={key:1},K=E({__name:"Item",props:{menu:{type:Object,required:!0},isDropdown:{type:Boolean,default:!1}},setup(e){const{parseMenuRoute:r,parseMenuTitle:l}=O(),c=I(!1),d=y=>{c.value=y};return(y,o)=>{var x,k,g,v,b,w;const f=V,M=_,$=z;return((x=e.menu)==null?void 0:x.type)==="link"&&e.isDropdown?(a(),m(f,{key:0,to:t(r)((k=e.menu)==null?void 0:k.to)},{default:h(({isActive:s})=>{var n;return[u("div",{class:C(["transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg w-full",s?"text-gray-900 dark:text-gray-100 font-bold":"text-gray-700 dark:text-gray-300"])},i(t(l)((n=e.menu)==null?void 0:n.title)),3)]}),_:1},8,["to"])):((g=e.menu)==null?void 0:g.type)==="link"?(a(),m(f,{key:1,to:t(r)((v=e.menu)==null?void 0:v.to)},{default:h(({isActive:s})=>{var n,p,B,N;return[u("span",{class:C({"text-gray-900 dark:text-gray-100 font-bold":s,"text-gray-700 dark:text-gray-300":!s})},[(n=e.menu)!=null&&n.icon?(a(),D("div",P,[S(M,{name:(p=e.menu)==null?void 0:p.icon,class:"ml-1 text-2xl",onMouseover:o[0]||(o[0]=j=>d(!0)),onMouseleave:o[1]||(o[1]=j=>d(!1))},null,8,["name"]),q(u("span",{class:"absolute"},i((B=e.menu)==null?void 0:B.title),513),[[H,t(c)]])])):(a(),D("div",R,i(t(l)((N=e.menu)==null?void 0:N.title)),1))],2)]}),_:1},8,["to"])):((b=e.menu)==null?void 0:b.type)==="button"?(a(),m($,{key:2,text:t(l)((w=e.menu)==null?void 0:w.title),size:"xs",to:t(r)(e.menu.to)},null,8,["text","to"])):L("",!0)}}});export{K as _};
