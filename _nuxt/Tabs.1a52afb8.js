import{f as m,k as i,x as _,c as p,Q as k,ab as x,P as h,a2 as w,o as b,b as T,w as I,a as f,F as C,r as $,m as v,n as S,ae as B,t as z,i as A}from"./entry.a06282a2.js";const M=m({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(y,{slots:l,attrs:r}){const o=i(!1);return _(()=>{o.value=!0}),t=>{var n;if(o.value)return(n=l.default)==null?void 0:n.call(l);const a=l.fallback||l.placeholder;if(a)return a();const c=t.fallback||t.placeholder||"",e=t.fallbackTag||t.placeholderTag||"span";return p(e,r,c)}}}),E={class:"tabs-header relative overflow-hidden flex space-x-6 text-sm font-bold text-gray-300 bg-primary-700 rounded-t-lg px-5 py-3"},F=["onClick"],H=f("span",{class:"flex-1 bg-gray-500/40 rounded-lg"},null,-1),L=[H],N={class:"tabs-body relative text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-800 shadow rounded-b-lg"},P=m({__name:"Tabs",emits:["click"],setup(y){const l=k(),r=i(),o=i(),t=i([]),a=i();x("activeTab",a);const c=()=>{if(!r.value||!o.value)return;const e=o.value,n=t.value.findIndex(({name:g})=>g===a.value),s=r.value.querySelectorAll(".tabs-header-item")[n];if(!s)return;const d=24,u=30;e.style.width=`${s.offsetWidth+u}px`,e.style.left=`${s.offsetLeft-d-u/2}px`};return h(t,()=>c()),h(a,()=>c()),w(()=>{l.default&&l.default().forEach((e,n)=>{const s=e.props;t.value.push(s),n===0&&(a.value=s.name)})}),_(()=>{(async()=>{for(;typeof o.value>"u"||typeof r.value>"u";)await new Promise(e=>setTimeout(e,10));setTimeout(()=>{c()},350)})()}),(e,n)=>{const s=M;return b(),p("div",{ref_key:"tabs",ref:r,class:"tabs"},[T(s,null,{default:I(()=>[f("div",E,[(b(!0),p(C,null,$(v(t),d=>(b(),p("div",{key:d.name,class:S({"tabs-header-item":!0,"text-white":v(a)===d.name}),style:{zIndex:2},onClick:u=>a.value=d.name},[f("a",{href:"#",onClick:n[0]||(n[0]=B(u=>e.$emit("click"),["prevent"]))},z(d.title),1)],10,F))),128)),f("span",{ref_key:"tabHeaderIndicator",ref:o,class:"absolute flex h-full top-0 left-0 p-1 py-1.5 overflow-hidden transition-all duration-300",style:{zIndex:1}},L,512)])]),_:1}),f("div",N,[A(e.$slots,"default")])],512)}}});export{P as default};
