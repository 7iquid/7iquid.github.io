import _ from"./intersec.51ec77e3.js";import{g as p,m as d,s as f,D as h,o as v,i as g,w as y,a as e,t as n,d as m}from"./entry.fa7b6064.js";const w={class:"text-center drop-shadow-xl text-6xl sm:text-8xl md:text-8xl lg:text-8xl 2xl:text-8xl block font-black uppercase"},b={class:"relative"},C={id:"first",class:"absolute",style:"--animation-name: anim-fg-1"},k={class:"relative"},A={id:"second",class:"absolute",style:"--animation-name: anim-fg-2"},$=e("h1",{class:"thirds relative"},[e("span",{class:"absolute",style:"--animation-name: anim-fg-3"})],-1),D={__name:"index",props:{titles:{type:Array,required:!0,validator:t=>t.every(o=>typeof o=="string")}},setup(t){const{awesome:o}=p(),i=o.author.title,l=d(!0);d("Freelance");let a=0;f(()=>{r("Freelance")});const r=c=>{const s=h.to(".thirds",{duration:2,text:c,stagger:{onComplete:()=>{s.reverse()},onReverseComplete:()=>{r(`${i[a]}`)}}});a+=1,a>=i.length&&(a=0)};return(c,s)=>{const x=_;return v(),g(x,{onExit:s[0]||(s[0]=u=>l.value=!1),onEnter:s[1]||(s[1]=u=>l.value=!0)},{default:y(()=>[e("div",w,[e("h1",b,[e("span",C,n(t.titles[0]),1),m(" "+n(t.titles[0]),1)]),e("h1",k,[e("span",A,n(t.titles[1]),1),m(" "+n(t.titles[1]),1)]),$])]),_:1})}}};export{D as default};
