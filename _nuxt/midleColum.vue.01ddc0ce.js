import{_ as p}from"./Wrapper.vue.f7a46816.js";import{n as v,m as h,s as x,x as w,f as N,g as b,h as y,j as c,o as l,c as _,a as C,F as k,r as B,i as L,X as S,k as W}from"./entry.7d828d92.js";const f={sm:640,md:768,lg:1024,xl:1280},z=()=>{const s=v({width:0,height:0}),r=h("sm"),t=e=>{e===void 0&&(e=s.width);const{sm:n,md:i,lg:u,xl:d}=f;return e<Number(n)?"sm":e<Number(i)?"md":e<Number(u)?"lg":(e<Number(d),"xl")},o=()=>{const{innerWidth:e,innerHeight:n}=window;s.width=e,s.height=n,r.value=t()},a=(e,n)=>{const{sm:i,md:u,lg:d,xl:g}=f,m=f[n||r.value];return e==="sm"?m>=Number(i):e==="md"?m>=Number(u):e==="lg"?m>=Number(d):e==="xl"?m>=Number(g):!1};return x(()=>{typeof window>"u"||(window.addEventListener("resize",o),r.value=t(window.innerWidth))}),w(()=>{typeof window>"u"||window.removeEventListener("resize",o)}),{getSize:t,screenSize:s,current:r,higherThan:a}},E={class:"flex space-x-4 items-center my-auto"},M=N({__name:"midleColum",setup(s){const r=z(),{awesome:t}=b(),o=y(()=>{var a,e,n;return((n=(e=(a=t==null?void 0:t.layout)==null?void 0:a.page)==null?void 0:e.navbar)==null?void 0:n.menus)||[]});return(a,e)=>{const n=p;return c(r).higherThan("md",c(r).current.value)?(l(),_("div",{key:0,class:S(["flex space-x-4 items-center",{"divide-x divide-gray-500":c(o).length>0}])},[C("div",E,[(l(!0),_(k,null,B(c(o),(i,u)=>(l(),L(n,{key:u,menu:i},null,8,["menu"]))),128))])],2)):W("",!0)}}});export{M as _,z as u};
