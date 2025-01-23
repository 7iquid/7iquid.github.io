import{f as B,_ as w,n as m,h as s,o as l,c as d,j as e,X as o,C as u,k as c,a as g,aj as C,ao as _,ap as E}from"./entry.ae74da9a.js";import{u as P}from"./use-sync-props.a3cdde6d.js";const j={class:o("text-input-container relative flex")},D={class:"text-input-wrapper relative flex flex-1"},N=["type","placeholder"],I=B({__name:"TextInput",props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},size:{type:String,default:"md"},type:{type:String,default:"default"}},emits:["update:modelValue"],setup(a,{emit:S}){const n=a,b=S,t=w(),f=m({xs:"px-1 py-0.5",sm:"px-2 py-1.5",md:"px-4 py-2",lg:"px-5 py-3"}),y=m({xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg"}),i=P(n,"modelValue",b),v=s(()=>typeof t.prefix<"u"||typeof t["prefix-disabled"]<"u"),$=s(()=>typeof t.suffix<"u"),r=s(()=>"border-gray-900/10 dark:border-gray-50/[0.2]"),h=s(()=>"dark:focus:border-white focus:border-gray-900"),k=s(()=>f[n.size]||f.md),V=s(()=>y[n.size]||y.md);return(p,x)=>(l(),d("div",j,[e(t)["prefix-disabled"]?(l(),d("div",{key:0,class:o(`duration-300 transition-colors flex rounded-l bg-gray-100 dark:bg-gray-800 text-gray-500 border ${e(r)}`)},[u(p.$slots,"prefix-disabled")],2)):c("",!0),e(t).prefix?(l(),d("div",{key:1,class:o(`flex rounded-l border ${e(r)}`)},[u(p.$slots,"prefix")],2)):c("",!0),g("div",D,[C(g("input",{"onUpdate:modelValue":x[0]||(x[0]=z=>E(i)?i.value=z:null),class:o(`duration-300 transition-colors text-input w-full flex-1 bg-transparent outline-none border ${e(v)?"":"rounded-l"} ${e($)?"":"rounded-r"} ${e(r)} ${e(h)} ${e(k)} ${e(V)}`),type:a.type,placeholder:a.placeholder},null,10,N),[[_,e(i)]])]),e(t).suffix?(l(),d("div",{key:2,class:o(`flex rounded-r border ${e(r)}`)},[u(p.$slots,"suffix")],2)):c("",!0)]))}});export{I as default};
