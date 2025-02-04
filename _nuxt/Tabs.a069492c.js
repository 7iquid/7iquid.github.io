import{_ as h}from"./client-only.15130ffe.js";import{f as y,a2 as x,v as c,D as g,m,a5 as w,A as k,o as f,c as p,b as I,w as C,a as o,F as $,r as T,j as b,a0 as B,ah as S,t as z,y as A}from"./entry.ea9777ff.js";const M={class:"tabs-header relative overflow-hidden flex space-x-6 text-sm font-bold text-gray-300 bg-primary-700 rounded-t-lg px-5 py-3"},D=["onClick"],E=o("span",{class:"flex-1 bg-gray-500/40 rounded-lg"},null,-1),F=[E],H={class:"tabs-body relative text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-800 shadow rounded-b-lg"},j=y({__name:"Tabs",emits:["click"],setup(L){const v=x(),r=c(),l=c(),d=c([]),a=c();g("activeTab",a);const u=()=>{if(!r.value||!l.value)return;const e=l.value,s=d.value.findIndex(({name:_})=>_===a.value),t=r.value.querySelectorAll(".tabs-header-item")[s];if(!t)return;const n=24,i=30;e.style.width=`${t.offsetWidth+i}px`,e.style.left=`${t.offsetLeft-n-i/2}px`};return m(d,()=>u()),m(a,()=>u()),w(()=>{v.default&&v.default().forEach((e,s)=>{const t=e.props;d.value.push(t),s===0&&(a.value=t.name)})}),k(()=>{(async()=>{for(;typeof l.value>"u"||typeof r.value>"u";)await new Promise(e=>setTimeout(e,10));setTimeout(()=>{u()},350)})()}),(e,s)=>{const t=h;return f(),p("div",{ref_key:"tabs",ref:r,class:"tabs"},[I(t,null,{default:C(()=>[o("div",M,[(f(!0),p($,null,T(b(d),n=>(f(),p("div",{key:n.name,class:B({"tabs-header-item":!0,"text-white":b(a)===n.name}),style:{zIndex:2},onClick:i=>a.value=n.name},[o("a",{href:"#",onClick:s[0]||(s[0]=S(i=>e.$emit("click"),["prevent"]))},z(n.title),1)],10,D))),128)),o("span",{ref_key:"tabHeaderIndicator",ref:l,class:"absolute flex h-full top-0 left-0 p-1 py-1.5 overflow-hidden transition-all duration-300",style:{zIndex:1}},F,512)])]),_:1}),o("div",H,[A(e.$slots,"default")])],512)}}});export{j as default};
