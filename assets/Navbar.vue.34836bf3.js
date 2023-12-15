import ce from"./Icon.52289842.js";import{_ as ie}from"./nuxt-link.f1f71cb6.js";import{_ as de}from"./Wrapper.vue.0f15b2ce.js";import{_ as pe}from"./ThemeSwitcher.vue.680e0e11.js";import{_ as fe}from"./index.vue.d609aa4b.js";import{_ as me}from"./HeaderTitle.vue.fb429721.js";import _e from"./Header.ddbf8eda.js";import{_ as ve}from"./index.vue.37490582.js";import{b as xe,o as N}from"./hidden.01b6467e.js";import{t as X,u as Y,o as D,c as ye,l as T,H as z,p as be,N as J}from"./open-closed.ca44c22a.js";import{f as O,k as g,ab as Q,l as $,x as K,a3 as V,ac as ge,ad as Z,j as he,g as we,o as m,c as b,a as v,i as ke,b as p,w as _,t as B,m as c,n as S,F as I,r as L,h,ae as Se,q as P,af as De}from"./entry.930a9958.js";import Ce from"./Item.34e95162.js";import Ne from"./Group.30d7ec2b.js";import{_ as Pe}from"./ItemButton.vue.cc4b9911.js";import{_ as $e}from"./index.vue.30ce7a1d.js";import{u as Ae}from"./use-navbar-parser.7d2bf287.js";var Be=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(Be||{});let ee=Symbol("DisclosureContext");function W(t){let r=Z(ee,null);if(r===null){let f=new Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(f,W),f}return r}let te=Symbol("DisclosurePanelContext");function Ie(){return Z(te,null)}let Te=O({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(t,{slots:r,attrs:f}){let u=g(t.defaultOpen?0:1),e=g(null),n=g(null),s={buttonId:g(`headlessui-disclosure-button-${X()}`),panelId:g(`headlessui-disclosure-panel-${X()}`),disclosureState:u,panel:e,button:n,toggleDisclosure(){u.value=Y(u.value,{0:1,1:0})},closeDisclosure(){u.value!==1&&(u.value=1)},close(o){s.closeDisclosure();let a=(()=>o?o instanceof HTMLElement?o:o.value instanceof HTMLElement?D(o):D(s.button):D(s.button))();a==null||a.focus()}};return Q(ee,s),ye($(()=>Y(u.value,{0:T.Open,1:T.Closed}))),()=>{let{defaultOpen:o,...a}=t,i={open:u.value===0,close:s.close};return z({theirProps:a,ourProps:{},slot:i,slots:r,attrs:f,name:"Disclosure"})}}}),Oe=O({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(t,{attrs:r,slots:f,expose:u}){let e=W("DisclosureButton"),n=Ie(),s=$(()=>n===null?!1:n.value===e.panelId.value);K(()=>{s.value||t.id!==null&&(e.buttonId.value=t.id)}),V(()=>{s.value||(e.buttonId.value=null)});let o=g(null);u({el:o,$el:o}),s.value||ge(()=>{e.button.value=o.value});let a=xe($(()=>({as:t.as,type:r.type})),o);function i(){var d;t.disabled||(s.value?(e.toggleDisclosure(),(d=D(e.button))==null||d.focus()):e.toggleDisclosure())}function x(d){var w;if(!t.disabled)if(s.value)switch(d.key){case N.Space:case N.Enter:d.preventDefault(),d.stopPropagation(),e.toggleDisclosure(),(w=D(e.button))==null||w.focus();break}else switch(d.key){case N.Space:case N.Enter:d.preventDefault(),d.stopPropagation(),e.toggleDisclosure();break}}function y(d){switch(d.key){case N.Space:d.preventDefault();break}}return()=>{var d;let w={open:e.disclosureState.value===0},{id:E,...j}=t,H=s.value?{ref:o,type:a.value,onClick:i,onKeydown:x}:{id:(d=e.buttonId.value)!=null?d:E,ref:o,type:a.value,"aria-expanded":e.disclosureState.value===0,"aria-controls":e.disclosureState.value===0||D(e.panel)?e.panelId.value:void 0,disabled:t.disabled?!0:void 0,onClick:i,onKeydown:x,onKeyup:y};return z({ourProps:H,theirProps:j,slot:w,attrs:r,slots:f,name:"DisclosureButton"})}}}),Ee=O({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(t,{attrs:r,slots:f,expose:u}){let e=W("DisclosurePanel");K(()=>{t.id!==null&&(e.panelId.value=t.id)}),V(()=>{e.panelId.value=null}),u({el:e.panel,$el:e.panel}),Q(te,e.panelId);let n=be(),s=$(()=>n!==null?(n.value&T.Open)===T.Open:e.disclosureState.value===0);return()=>{var o;let a={open:e.disclosureState.value===0,close:e.close},{id:i,...x}=t,y={id:(o=e.panelId.value)!=null?o:i,ref:e.panel};return z({ourProps:y,theirProps:x,slot:a,attrs:r,slots:f,features:J.RenderStrategy|J.Static,visible:s.value,name:"DisclosurePanel"})}}});const M={sm:640,md:768,lg:1024,xl:1280},je=()=>{const t=he({width:0,height:0}),r=g("sm"),f=n=>{n===void 0&&(n=t.width);const{sm:s,md:o,lg:a,xl:i}=M;return n<Number(s)?"sm":n<Number(o)?"md":n<Number(a)?"lg":(n<Number(i),"xl")},u=()=>{const{innerWidth:n,innerHeight:s}=window;t.width=n,t.height=s,r.value=f()},e=(n,s)=>{const{sm:o,md:a,lg:i,xl:x}=M,y=M[s||r.value];return n==="sm"?y>=Number(o):n==="md"?y>=Number(a):n==="lg"?y>=Number(i):n==="xl"?y>=Number(x):!1};return K(()=>{typeof window>"u"||(window.addEventListener("resize",u),r.value=f(window.innerWidth))}),V(()=>{typeof window>"u"||window.removeEventListener("resize",u)}),{getSize:f,screenSize:t,current:r,higherThan:e}},He={class:"flex fixed backdrop-filter backdrop-blur-md top-0 z-40 w-full flex-none transition-colors duration-300 lg:z-50"},Le={class:"flex-1 flex items-center justify-between max-w-screen-2xl mx-auto px-4"},Me={class:"capitalize"},ze={class:"flex space-x-4 text-sm items-center"},Ke={class:"pl-4 flex space-x-3 text-xl"},Ve={class:"pl-4 flex space-x-3 text-xl"},We={class:"flex flex-col text-sm items-center divide-y divide-gray-400 dark:divide-gray-700 text-center"},Re={class:"pb-2"},Fe=v("div",{class:"mt-2 mb-2 text-sm font-bold capitalize"}," Change Theme ",-1),Ge=v("span",{class:"text-sm"},"Github",-1),ct=O({__name:"Navbar",setup(t){const{awesome:r}=we(),{parseMenuRoute:f,parseMenuTitle:u}=Ae(),e=je(),n=$(()=>{var o,a,i;return((i=(a=(o=r==null?void 0:r.layout)==null?void 0:o.page)==null?void 0:a.navbar)==null?void 0:i.menus)||[]}),s=g(!1);return(o,a)=>{var G,U,q;const i=ce,x=ie,y=de,d=pe,w=fe,E=me,j=_e,H=ve,ne=Oe,se=Ee,oe=Te,R=Ce,F=Ne,le=Pe,ae=$e;return m(),b("header",He,[v("div",Le,[v("div",null,[ke(o.$slots,"title",{},()=>[p(x,{to:"/",class:"font-bold text-lg text-primary-500"},{default:_(()=>[p(i,{name:"simple-icons:nuxtdotjs",class:"font-black text-xl font-mono mr-2 inline-block"}),v("span",Me,B(c(r).name),1)]),_:1})])]),c(e).higherThan("md",c(e).current.value)?(m(),b("div",{key:0,class:S(["flex space-x-4 items-center",{"divide-x divide-gray-500":c(n).length>0}])},[v("div",ze,[(m(!0),b(I,null,L(c(n),(l,k)=>(m(),h(y,{key:k,menu:l},null,8,["menu"]))),128))]),v("div",Ke,[p(d)])],2)):(m(),b("div",{key:1,class:S(["flex space-x-4 items-center",{"divide-x divide-gray-500":c(n).length>0}])},[v("div",Ve,[(q=(U=(G=c(r))==null?void 0:G.project)==null?void 0:U.links)!=null&&q.github?(m(),h(w,{key:0,class:"text-gray-400 hover:text-gray-100",onClick:a[0]||(a[0]=Se(()=>s.value=!c(s),["prevent"]))},{default:_(()=>[p(i,{name:"heroicons:bars-3-bottom-right-20-solid"})]),_:1})):P("",!0)])],2))]),!c(e).higherThan("md",c(e).current.value)&&c(s)?(m(),h(ae,{key:0,onClose:a[1]||(a[1]=()=>s.value=!1)},{default:_(()=>[p(F,null,{default:_(()=>[p(j,null,{default:_(()=>[p(E,{text:"Menu"})]),_:1}),p(R,null,{default:_(()=>[v("div",We,[(m(!0),b(I,null,L(c(n),(l,k)=>(m(),b(I,null,[(l==null?void 0:l.type)==="link"?(m(),h(x,{key:k,to:c(f)(l.to),class:"w-full py-2"},{default:_(({isActive:C})=>[v("span",{class:S({"text-gray-900 dark:text-gray-100 font-bold":C,"text-gray-700 dark:text-gray-300":!C})},B(c(u)(l==null?void 0:l.title)),3)]),_:2},1032,["to"])):P("",!0),(l==null?void 0:l.type)==="button"?(m(),h(H,{key:k,text:c(u)(l==null?void 0:l.title),size:"sm",to:c(f)(l.to),class:"w-full"},null,8,["text","to"])):P("",!0),(l==null?void 0:l.type)==="dropdown"?(m(),b("div",{key:k,class:"w-full"},[p(oe,null,{default:_(({open:C})=>[(m(),h(ne,{key:k,class:S(["text-gray-700 dark:text-gray-300 w-full py-2 flex items-center justify-center duration-300 transition-all",C?"font-bold":""])},{default:_(()=>[v("span",null,B(c(u)(l==null?void 0:l.title)),1),p(i,{name:"carbon:chevron-right",class:S(["ml-1",[C?"duration-300 transition-all transform rotate-90":"rotate-0"]])},null,8,["class"])]),_:2},1032,["class"])),p(De,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-out","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:_(()=>[p(se,{class:"text-gray-500 pb-2"},{default:_(()=>[(m(!0),b(I,null,L((l==null?void 0:l.children)||[],(A,re)=>(m(),h(x,{key:re,to:c(f)(A.to),class:"w-full py-2"},{default:_(({isActive:ue})=>[v("span",{class:S([ue?"text-gray-900 dark:text-gray-100 font-bold":"text-gray-700 dark:text-gray-300"])},B(c(u)(A==null?void 0:A.title)),3)]),_:2},1032,["to"]))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024)])):P("",!0)],64))),256))])]),_:1}),p(R,{class:"flex flex-col"},{default:_(()=>[v("div",Re,[Fe,p(d,{type:"select-box"})])]),_:1})]),_:1}),p(F,null,{default:_(()=>[p(le,{class:"flex justify-center items-center text-base space-x-2"},{default:_(()=>[p(i,{name:"mdi:github-face",class:"text-lg font-bold"}),Ge]),_:1})]),_:1})]),_:1})):P("",!0)])}}});export{ct as _};
