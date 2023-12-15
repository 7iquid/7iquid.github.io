import S from"./Icon.5907414d.js";import{h as $,S as C}from"./transition.6a7ad100.js";import{f as B,j as p,k as N,l as d,o as l,h as i,w as u,b as x,m as e,a as t,n as r,i as y,q as m,d as f,t as k}from"./entry.449dc449.js";import"./index.b8fe2cb5.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./open-closed.fb626d81.js";const V={class:"flex items-center justify-center"},T={class:"flex-1"},j={class:"text-gray-700 dark:text-gray-100"},G=B({__name:"AlertBanner",props:{title:{type:String,default:void 0},text:{type:String,default:void 0},type:{type:String,default:"primary"}},setup(v){const s=v,h=p({primary:"",success:"dark:from-green-500/50 via-gray-200 to-gray-200 dark:via-gray-900 dark:to-gray-900",warning:"dark:from-yellow-500/50 via-gray-200 to-gray-200 dark:via-gray-900 dark:to-gray-900",danger:"dark:from-red-500/50 via-gray-200 to-gray-200 dark:via-gray-900 dark:to-gray-900"}),_=p({primary:"text-black dark:text-white",success:"text-green-500",warning:"text-orange-500",danger:"text-red-500"}),g=N(!1),a=d(()=>["primary","success","warning","danger"].includes(s.type)?s.type:"primary"),w=d(()=>h[a.value]),o=d(()=>_[a.value]),b=()=>{g.value=!0};return(c,D)=>{const n=S;return l(),i(e(C),{show:!e(g),appear:""},{default:u(()=>[x(e($),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-300 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:u(()=>[t("div",{class:r(`bg-gray-200 dark:bg-gray-800 bg-gradient-to-r shadow-white/50 dark:shadow-gray-950/50 px-6 py-6 rounded-md shadow-lg flex space-x-6 ${e(w)}`)},[t("div",V,[y(c.$slots,"icon",{},()=>[e(a)==="success"?(l(),i(n,{key:0,name:"mdi:check-circle",class:r(`text-2xl ${e(o)}`)},null,8,["class"])):m("",!0),e(a)==="danger"?(l(),i(n,{key:1,name:"icon-clarity:times-circle-solid",class:r(`text-2xl ${e(o)}`)},null,8,["class"])):m("",!0),e(a)==="warning"?(l(),i(n,{key:2,name:"icon-bi:exclamation-circle-fill",class:r(`text-2xl ${e(o)}`)},null,8,["class"])):m("",!0)])]),t("div",T,[t("div",{class:r(`font-bold text-lg mb-0.5 ${e(o)}`)},[y(c.$slots,"title",{},()=>[f(k(s.title),1)])],2),t("div",j,[y(c.$slots,"title",{},()=>[f(k(s.text),1)])])]),t("div",null,[t("button",{class:"text-gray-600 hover:text-red-500 dark:text-gray-400 font-bold",onClick:b},[x(n,{name:"clarity:times-line"})])])],2)]),_:3})]),_:3},8,["show"])}}});export{G as default};
