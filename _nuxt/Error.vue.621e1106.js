import l from"./Wrapper.75bec83f.js";import{_ as m}from"./index.vue.ce24fcc9.js";import{f as _,h as d,o as f,i as u,w as x,a as t,t as n,j as s,b as h,E as b,Z as w}from"./entry.92acd38e.js";const g={class:"text-center mb-6 leading-3"},B={class:"font-bold text-8xl block"},k={class:"block italic"},E=_({__name:"Error",props:{code:{type:Number,default:400},wrap:{type:Boolean,default:!1}},setup(r){const c=l,e=r,p={400:"Bad Request",401:"Unauthorized",403:"Forbidden",404:"Not Found"},a=d(()=>{const{code:o}=e;return{code:o,message:p[o.toString()]||"Unknown Error"}});return(o,y)=>{const i=m;return f(),u(w(e.wrap?s(c):"div"),{class:b(e.wrap?"flex flex-col items-center justify-center":"")},{default:x(()=>[t("h1",g,[t("span",B,n(s(a).code),1),t("span",k,n(s(a).message),1)]),h(i,{text:"Home",to:"/",size:"sm"})]),_:1},8,["class"])}}});export{E as _};
