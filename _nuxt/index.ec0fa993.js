import d from"./intersec.2401588c.js";import{g as p,m as n,s as f,D as x,o as v,i as g,w as h,a as e,t as o,d as m}from"./entry.e6564fab.js";const y={class:"mt-[-10rem] flex min-h-screen items-center justify-center text-center text-6xl font-black uppercase drop-shadow-xl sm:text-8xl md:text-8xl lg:text-8xl 2xl:text-8xl"},w={class:"relative"},b={id:"first",class:"absolute",style:"--animation-name: anim-fg-1"},C={class:"relative"},$={id:"second",class:"absolute",style:"--animation-name: anim-fg-2"},k=e("span",{class:"relative"},[e("h1",{class:"bg-title"}),e("h1",{id:"third",class:"fg-title",style:"--animation-name: anim-fg-3"})],-1),A={__name:"index",setup(B){const{awesome:u}=p(),r=u.author.title,c=n(!0),a=n(["Portfolio","Tavie","",""]);n(null),n("Freelance"),f(()=>{l("Freelance",".fg-title"),l("Freelance",".bg-title")});const l=(_,t,s=0)=>{const i=x.to(t,{duration:2.4,text:_,stagger:{onComplete:()=>{i.reverse()},onReverseComplete:()=>{s+=1,s>=r.length&&(s=0),l(`${r[s]}`,t,s)}}})};return(_,t)=>{const s=d;return v(),g(s,{onExit:t[0]||(t[0]=i=>c.value=!1),onEnter:t[1]||(t[1]=i=>c.value=!0)},{default:h(()=>[e("div",y,[e("div",null,[e("h1",w,[e("span",b,o(a.value[0]),1),m(" "+o(a.value[0]),1)]),e("h1",C,[e("span",$,o(a.value[1]),1),m(" "+o(a.value[1]),1)]),k])])]),_:1})}}},T=A;export{T as default};
