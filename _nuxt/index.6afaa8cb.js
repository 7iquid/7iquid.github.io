import d from"./intersec.a375c0cb.js";import{g as p,n as a,v as f,E as v,o as x,i as g,w as h,a as e,t as o,d as m}from"./entry.bf1c3874.js";const y={class:"mt-[-10rem] flex min-h-screen items-center justify-center text-center text-6xl font-black uppercase drop-shadow-xl sm:text-8xl md:text-8xl lg:text-8xl 2xl:text-8xl"},w={class:"relative"},b={id:"first",class:"absolute",style:"--animation-name: anim-fg-1"},C={class:"relative"},$={id:"second",class:"absolute",style:"--animation-name: anim-fg-2"},k=e("span",{class:"relative"},[e("h1",{class:"bg-title"}),e("h1",{id:"third",class:"fg-title",style:"--animation-name: anim-fg-3"})],-1),A={__name:"index",setup(B){const{awesome:u}=p(),r=u.author.title,c=a(!0),n=a(["Portfolio","Tavie","",""]);a(null),a("Freelance"),f(()=>{l("Freelance",".fg-title"),l("Freelance",".bg-title")});const l=(_,t,s=0)=>{const i=v.to(t,{duration:2.4,text:_,stagger:{onComplete:()=>{i.reverse()},onReverseComplete:()=>{s+=1,s>=r.length&&(s=0),l(`${r[s]}`,t,s)}}})};return(_,t)=>{const s=d;return x(),g(s,{onExit:t[0]||(t[0]=i=>c.value=!1),onEnter:t[1]||(t[1]=i=>c.value=!0)},{default:h(()=>[e("div",y,[e("div",null,[e("h1",w,[e("span",b,o(n.value[0]),1),m(" "+o(n.value[0]),1)]),e("h1",C,[e("span",$,o(n.value[1]),1),m(" "+o(n.value[1]),1)]),k])])]),_:1})}}},S=A;export{S as default};
