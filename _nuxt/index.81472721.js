import d from"./intersec.25a85f12.js";import{g as p,m as o,s as f,D as v,o as x,i as g,w as h,a as e,t as n,d as m}from"./entry.a1ee4244.js";const b={class:"text-center drop-shadow-xl text-6xl sm:text-8xl md:text-8xl lg:text-8xl 2xl:text-8xl block font-black uppercase"},w={class:"relative"},y={id:"first",class:"absolute",style:"--animation-name: anim-fg-1"},C={class:"relative"},k={id:"second",class:"absolute",style:"--animation-name: anim-fg-2"},$=e("span",{class:"relative"},[e("h1",{class:"bg-title"}),e("h1",{id:"third",class:"fg-title",style:"--animation-name: anim-fg-3"})],-1),S={__name:"index",setup(A){const{awesome:u}=p(),r=u.author.title,c=o(!0),a=o(["Portfolio","Tavie","",""]);o(null),o("Freelance"),f(()=>{l("Freelance",".fg-title"),l("Freelance",".bg-title")});const l=(_,t,s=0)=>{const i=v.to(t,{duration:2.4,text:_,stagger:{onComplete:()=>{i.reverse()},onReverseComplete:()=>{s+=1,s>=r.length&&(s=0),l(`${r[s]}`,t,s)}}})};return(_,t)=>{const s=d;return x(),g(s,{onExit:t[0]||(t[0]=i=>c.value=!1),onEnter:t[1]||(t[1]=i=>c.value=!0)},{default:h(()=>[e("div",b,[e("h1",w,[e("span",y,n(a.value[0]),1),m(" "+n(a.value[0]),1)]),e("h1",C,[e("span",k,n(a.value[1]),1),m(" "+n(a.value[1]),1)]),$])]),_:1})}}};export{S as default};
