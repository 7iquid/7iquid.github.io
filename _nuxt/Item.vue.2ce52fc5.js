import{_ as V}from"./nuxt-link.356dc9c0.js";import _ from"./Icon.70e45704.js";import{_ as z}from"./index.vue.65a4de51.js";import{f as I,v as S,o as n,i as u,w as N,a as i,a0 as C,t as m,j as t,c as D,b as q,aj as E,am as H,k as L}from"./entry.ea9777ff.js";import{u as O}from"./use-navbar-parser.30ffdda6.js";const P={key:0,class:"relative"},R={key:1,class:"whitespace-nowrap"},K=I({__name:"Item",props:{menu:{type:Object,required:!0},isDropdown:{type:Boolean,default:!1}},setup(e){const{parseMenuRoute:r,parseMenuTitle:l}=O(),c=S(!1),d=y=>{c.value=y};return(y,o)=>{var x,k,v,g,w,p;const f=V,M=_,$=z;return((x=e.menu)==null?void 0:x.type)==="link"&&e.isDropdown?(n(),u(f,{key:0,to:t(r)((k=e.menu)==null?void 0:k.to)},{default:N(({isActive:s})=>{var a;return[i("div",{class:C(["w-full rounded-lg px-4 py-2 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800",s?"font-bold text-gray-900 dark:text-gray-100":"text-gray-700 dark:text-gray-300"])},m(t(l)((a=e.menu)==null?void 0:a.title)),3)]}),_:1},8,["to"])):((v=e.menu)==null?void 0:v.type)==="link"?(n(),u(f,{key:1,to:t(r)((g=e.menu)==null?void 0:g.to)},{default:N(({isActive:s})=>{var a,b,h,B;return[i("span",{class:C({"font-bold text-gray-900 dark:text-gray-100":s,"text-gray-700 dark:text-gray-300":!s})},[(a=e.menu)!=null&&a.icon?(n(),D("div",P,[q(M,{name:(b=e.menu)==null?void 0:b.icon,class:"ml-1 text-2xl",onMouseover:o[0]||(o[0]=j=>d(!0)),onMouseleave:o[1]||(o[1]=j=>d(!1))},null,8,["name"]),E(i("span",{class:"absolute whitespace-nowrap"},m((h=e.menu)==null?void 0:h.title),513),[[H,t(c)]])])):(n(),D("div",R,m(t(l)((B=e.menu)==null?void 0:B.title)),1))],2)]}),_:1},8,["to"])):((w=e.menu)==null?void 0:w.type)==="button"?(n(),u($,{key:2,class:"whitespace-nowrap",text:t(l)((p=e.menu)==null?void 0:p.title),size:"xs",to:t(r)(e.menu.to)},null,8,["text","to"])):L("",!0)}}});export{K as _};
