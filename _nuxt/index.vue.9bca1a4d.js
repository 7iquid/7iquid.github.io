import{_ as x}from"./ItemButton.vue.ff3546ac.js";import h from"./Group.b5670478.js";import{S as y}from"./transition.69d3e30d.js";import{f as C,n as v,v as w,o as i,i as r,b as f,w as m,a as p,D as k,k as B,j as b,al as S}from"./entry.bf47e341.js";const g={class:"flex flex-col overflow-hidden relative"},T={class:"action-sheet-container flex-1 overflow-y-auto space-y-1 justify-end px-4 pb-2 pt-4"},L=C({__name:"index",props:{closeButton:{type:Boolean,default:!0},closeButtonText:{type:String,default:"Cancel"}},emits:["close"],setup(n,{emit:u}){const d=u,t=v(!1),a=e=>{t.value=!1,setTimeout(()=>d("close",e),300)},_=e=>{const c=["action-sheet","action-sheet-container"],o=e.target.classList;for(const s of c)if(o.contains(s)){a(e);break}};return w(()=>{t.value=!0}),(e,c)=>{const l=x,o=h,s=y;return i(),r(S,{to:"body"},[f(s,{show:b(t),class:"action-sheet fixed z-50 top-0 left-0 w-screen h-screen max-h-screen max-w-full flex flex-col justify-end bg-black/[0.5]",enter:"transition-opacity duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity duration-300","leave-from":"opacity-100","leave-to":"opacity-0",onClick:_},{default:m(()=>[p("div",g,[p("div",T,[k(e.$slots,"default"),n.closeButton?(i(),r(o,{key:0},{default:m(()=>[f(l,{class:"text-red-500 font-bold",text:n.closeButtonText,onClick:a},null,8,["text"])]),_:1})):B("",!0)])])]),_:3},8,["show"])])}}});export{L as _};
