import{_ as s}from"./Title.vue.a3ff4f39.js";import i from"./Header.a8e2351a.js";import l from"./ContentRenderer.c0425a2d.js";import u from"./index.2d4d5b4a.js";import{_ as f}from"./Error.vue.5ec69c53.js";import d from"./ContentDoc.c3eb49be.js";import{f as y,o as x,i as g,w as t,b as e,a as $,t as h}from"./entry.85ce1877.js";const v=y({__name:"Doc",props:{emptyTip:{type:String,required:!1,default:"This page is empty"}},setup(n){return(w,C)=>{const _=s,a=i,m=l,r=u,c=f,p=d;return x(),g(p,null,{default:t(({doc:o})=>[e(a,null,{default:t(()=>[e(_,{text:o.title},null,8,["text"])]),_:2},1024),e(r,null,{default:t(()=>[e(m,{value:o},null,8,["value"])]),_:2},1024)]),empty:t(()=>[$("h1",null,h(n.emptyTip),1)]),"not-found":t(()=>[e(c,{code:404,wrap:""})]),_:1})}}});export{v as _};
