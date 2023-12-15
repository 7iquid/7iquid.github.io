import{_ as x}from"./ItemButton.vue.c2436576.js";import h from"./Group.24bbd271.js";import{S as y}from"./transition.d00f11c5.js";import{f as C,k as w,x as v,o as i,h as r,b as f,w as m,a as p,i as k,q as B,m as b,ai as S}from"./entry.07a5d6c1.js";const g={class:"flex flex-col overflow-hidden relative"},T={class:"action-sheet-container flex-1 overflow-y-auto space-y-1 justify-end px-4 pb-2 pt-4"},L=C({__name:"index",props:{closeButton:{type:Boolean,default:!0},closeButtonText:{type:String,default:"Cancel"}},emits:["close"],setup(n,{emit:u}){const d=u,t=w(!1),a=e=>{t.value=!1,setTimeout(()=>d("close",e),300)},_=e=>{const c=["action-sheet","action-sheet-container"],o=e.target.classList;for(const s of c)if(o.contains(s)){a(e);break}};return v(()=>{t.value=!0}),(e,c)=>{const l=x,o=h,s=y;return i(),r(S,{to:"body"},[f(s,{show:b(t),class:"action-sheet fixed z-50 top-0 left-0 w-screen h-screen max-h-screen max-w-full flex flex-col justify-end bg-black/[0.5]",enter:"transition-opacity duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity duration-300","leave-from":"opacity-100","leave-to":"opacity-0",onClick:_},{default:m(()=>[p("div",g,[p("div",T,[k(e.$slots,"default"),n.closeButton?(i(),r(o,{key:0},{default:m(()=>[f(l,{class:"text-red-500 font-bold",text:n.closeButtonText,onClick:a},null,8,["text"])]),_:1})):B("",!0)])])]),_:3},8,["show"])])}}});export{L as _};
