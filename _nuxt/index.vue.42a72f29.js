import{_ as g}from"./nuxt-link.60fee907.js";import{f as x,_ as c,j as e,o,i as k,w as m,D as r,d as n,t as s,X as l,c as h}from"./entry.bf1c3874.js";const y=["target"],_=["target","href"],p=x({__name:"index",props:{text:{type:String,default:""},to:{type:[String,Object],default:void 0},newtab:{type:Boolean,default:!1},href:{type:String,default:""}},setup(t){const i=t,d=c(i,"href"),f=c(i,"to");return(a,v)=>{const u=g;return e(f)?(o(),k(u,{key:0,tag:"a",to:e(f),target:t.newtab?"_blank":"_self",class:l("transition-colors duration-300 hover:text-gray-900 hover:underline dark:hover:text-white")},{default:m(()=>[r(a.$slots,"default",{},()=>[n(s(t.text),1)])]),_:3},8,["to","target"])):e(d)?(o(),h("a",{key:2,class:l("transition-colors duration-300 hover:text-gray-900 hover:underline dark:hover:text-white"),target:t.newtab?"_blank":"_self",href:e(d)},[r(a.$slots,"default",{},()=>[n(s(t.text),1)])],8,_)):(o(),h("a",{key:1,class:l("transition-colors duration-300 hover:text-gray-900 hover:underline dark:hover:text-white"),target:t.newtab?"_blank":"_self",href:"#"},[r(a.$slots,"default",{},()=>[n(s(t.text),1)])],8,y))}}});export{p as _};
