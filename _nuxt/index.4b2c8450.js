import{_ as Me}from"./Title.vue.6984074b.js";import Ee from"./Header.fa8ebd5b.js";import Ie from"./ContentList.bdb025b9.js";import De from"./index.f3015d2e.js";import Pe from"./Wrapper.23b8d443.js";import{f as se,m as u,n as k,q as y,s as Be,v as Re,x as Ve,h as Se,y as ne,z as we,A as h,B as m,F as ae,u as $e,i as ye,w as T,o as P,b as N,j as H,c as oe,r as Ae,a as b,t as Te}from"./entry.7ec3a196.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./ContentQuery.10f5cd4f.js";import"./query.08ad0b4f.js";import"./preview.8ea1c223.js";/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const v={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},ke={itemsToShow:{default:v.itemsToShow,type:Number},itemsToScroll:{default:v.itemsToScroll,type:Number},wrapAround:{default:v.wrapAround,type:Boolean},throttle:{default:v.throttle,type:Number},snapAlign:{default:v.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:v.transition,type:Number},breakpoints:{default:v.breakpoints,type:Object},autoplay:{default:v.autoplay,type:Number},pauseAutoplayOnHover:{default:v.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:v.mouseDrag,type:Boolean},touchDrag:{default:v.touchDrag,type:Boolean},dir:{default:v.dir,validator(e){return["rtl","ltr"].includes(e)}},i18n:{default:v.i18n,type:Object},settings:{default(){return{}},type:Object}};function ze({config:e,slidesCount:n}){const{snapAlign:t,wrapAround:r,itemsToShow:l=1}=e;if(r)return Math.max(n-1,0);let i;switch(t){case"start":i=n-l;break;case"end":i=n-1;break;case"center":case"center-odd":i=n-Math.ceil((l-.5)/2);break;case"center-even":i=n-Math.ceil(l/2);break;default:i=0;break}return Math.max(i,0)}function Xe({config:e,slidesCount:n}){const{wrapAround:t,snapAlign:r,itemsToShow:l=1}=e;let i=0;if(t||l>n)return i;switch(r){case"start":i=0;break;case"end":i=l-1;break;case"center":case"center-odd":i=Math.floor((l-1)/2);break;case"center-even":i=Math.floor((l-2)/2);break;default:i=0;break}return i}function ie({val:e,max:n,min:t}){return n<t?e:Math.min(Math.max(e,t),n)}function He({config:e,currentSlide:n,slidesCount:t}){const{snapAlign:r,wrapAround:l,itemsToShow:i=1}=e;let f=n;switch(r){case"center":case"center-odd":f-=(i-1)/2;break;case"center-even":f-=(i-2)/2;break;case"end":f-=i-1;break}return l?f:ie({val:f,max:t-i,min:0})}function Ce(e){return e?e.reduce((n,t)=>{var r;return t.type===ae?[...n,...Ce(t.children)]:((r=t.type)===null||r===void 0?void 0:r.name)==="CarouselSlide"?[...n,t]:n},[]):[]}function U({val:e,max:n,min:t=0}){return e>n?U({val:e-(n+1),max:n,min:t}):e<t?U({val:e+(n+1),max:n,min:t}):e}function Ue(e,n){let t;return n?function(...r){const l=this;t||(e.apply(l,r),t=!0,setTimeout(()=>t=!1,n))}:e}function Ye(e,n){let t;return function(...r){t&&clearTimeout(t),t=setTimeout(()=>{e(...r),t=null},n)}}function Le(e="",n={}){return Object.entries(n).reduce((t,[r,l])=>t.replace(`{${r}}`,String(l)),e)}var We=se({name:"ARIA",setup(){const e=m("config",k(Object.assign({},v))),n=m("currentSlide",u(0)),t=m("slidesCount",u(0));return()=>h("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Le(e.i18n.itemXofY,{currentSlide:n.value+1,slidesCount:t.value}))}}),Fe=se({name:"Carousel",props:ke,setup(e,{slots:n,emit:t,expose:r}){var l;const i=u(null),f=u([]),s=u(0),c=u(0),a=k(Object.assign({},v));let g=Object.assign({},v),S;const d=u((l=e.modelValue)!==null&&l!==void 0?l:0),O=u(0),B=u(0),A=u(0),E=u(0);let M,Y;y("config",a),y("slidesCount",c),y("currentSlide",d),y("maxSlide",A),y("minSlide",E),y("slideWidth",s);function W(){S=Object.assign({},e.breakpoints),g=Object.assign(Object.assign(Object.assign({},g),e),{i18n:Object.assign(Object.assign({},g.i18n),e.i18n),breakpoints:void 0}),ue(g)}function R(){if(!S||!Object.keys(S).length)return;const o=Object.keys(S).map(p=>Number(p)).sort((p,w)=>+w-+p);let _=Object.assign({},g);o.some(p=>{const w=window.matchMedia(`(min-width: ${p}px)`).matches;return w&&(_=Object.assign(Object.assign({},_),S[p])),w}),ue(_)}function ue(o){Object.entries(o).forEach(([_,p])=>a[_]=p)}const ce=Ye(()=>{R(),I()},16);function I(){if(!i.value)return;const o=i.value.getBoundingClientRect();s.value=o.width/a.itemsToShow}function F(){c.value<=0||(B.value=Math.ceil((c.value-1)/2),A.value=ze({config:a,slidesCount:c.value}),E.value=Xe({config:a,slidesCount:c.value}),a.wrapAround||(d.value=ie({val:d.value,max:A.value,min:E.value})))}Be(()=>{Re(()=>I()),setTimeout(()=>I(),1e3),R(),pe(),window.addEventListener("resize",ce,{passive:!0}),t("init")}),Ve(()=>{Y&&clearTimeout(Y),M&&clearInterval(M),window.removeEventListener("resize",ce,{passive:!0})});let x=!1;const V={x:0,y:0},$={x:0,y:0},C=k({x:0,y:0}),z=u(!1),G=u(!1),je=()=>{z.value=!0},Ne=()=>{z.value=!1};function de(o){["INPUT","TEXTAREA","SELECT"].includes(o.target.tagName)||(x=o.type==="touchstart",x||o.preventDefault(),!(!x&&o.button!==0||L.value)&&(V.x=x?o.touches[0].clientX:o.clientX,V.y=x?o.touches[0].clientY:o.clientY,document.addEventListener(x?"touchmove":"mousemove",ve,!0),document.addEventListener(x?"touchend":"mouseup",fe,!0)))}const ve=Ue(o=>{G.value=!0,$.x=x?o.touches[0].clientX:o.clientX,$.y=x?o.touches[0].clientY:o.clientY;const _=$.x-V.x,p=$.y-V.y;C.y=p,C.x=_},a.throttle);function fe(){const o=a.dir==="rtl"?-1:1,_=Math.sign(C.x)*.4,p=Math.round(C.x/s.value+_)*o;if(p&&!x){const w=Q=>{Q.stopPropagation(),window.removeEventListener("click",w,!0)};window.addEventListener("click",w,!0)}j(d.value-p),C.x=0,C.y=0,G.value=!1,document.removeEventListener(x?"touchmove":"mousemove",ve,!0),document.removeEventListener(x?"touchend":"mouseup",fe,!0)}function pe(){!a.autoplay||a.autoplay<=0||(M=setInterval(()=>{a.pauseAutoplayOnHover&&z.value||X()},a.autoplay))}function me(){M&&(clearInterval(M),M=null),pe()}const L=u(!1);function j(o){const _=a.wrapAround?o:ie({val:o,max:A.value,min:E.value});d.value===_||L.value||(t("slide-start",{slidingToIndex:o,currentSlideIndex:d.value,prevSlideIndex:O.value,slidesCount:c.value}),L.value=!0,O.value=d.value,d.value=_,Y=setTimeout(()=>{if(a.wrapAround){const p=U({val:_,max:A.value,min:0});p!==d.value&&(d.value=p,t("loop",{currentSlideIndex:d.value,slidingToIndex:o}))}t("update:modelValue",d.value),t("slide-end",{currentSlideIndex:d.value,prevSlideIndex:O.value,slidesCount:c.value}),L.value=!1,me()},a.transition))}function X(){j(d.value+a.itemsToScroll)}function q(){j(d.value-a.itemsToScroll)}const ge={slideTo:j,next:X,prev:q};y("nav",ge),y("isSliding",L);const _e=Se(()=>He({config:a,currentSlide:d.value,slidesCount:c.value}));y("slidesToScroll",_e);const Oe=Se(()=>{const o=a.dir==="rtl"?-1:1,_=_e.value*s.value*o;return{transform:`translateX(${C.x-_}px)`,transition:`${L.value?a.transition:0}ms`,margin:a.wrapAround?`0 -${c.value*s.value}px`:"",width:"100%"}});function he(){W(),R(),F(),I(),me()}Object.keys(ke).forEach(o=>{["modelValue"].includes(o)||ne(()=>e[o],he)}),ne(()=>e.modelValue,o=>{o!==d.value&&j(Number(o))}),ne(c,F),t("before-init"),W();const be={config:a,slidesCount:c,slideWidth:s,next:X,prev:q,slideTo:j,currentSlide:d,maxSlide:A,minSlide:E,middleSlide:B};r({updateBreakpointsConfigs:R,updateSlidesData:F,updateSlideWidth:I,initDefaultConfigs:W,restartCarousel:he,slideTo:j,next:X,prev:q,nav:ge,data:be});const J=n.default||n.slides,K=n.addons,xe=k(be);return()=>{const o=Ce(J==null?void 0:J(xe)),_=(K==null?void 0:K(xe))||[];o.forEach((Z,ee)=>Z.props.index=ee);let p=o;if(a.wrapAround){const Z=o.map((te,D)=>we(te,{index:-o.length+D,isClone:!0,key:`clone-before-${D}`})),ee=o.map((te,D)=>we(te,{index:o.length+D,isClone:!0,key:`clone-after-${D}`}));p=[...Z,...o,...ee]}f.value=o,c.value=Math.max(o.length,1);const w=h("ol",{class:"carousel__track",style:Oe.value,onMousedownCapture:a.mouseDrag?de:null,onTouchstartPassiveCapture:a.touchDrag?de:null},p),Q=h("div",{class:"carousel__viewport"},w);return h("section",{ref:i,class:{carousel:!0,"is-sliding":L.value,"is-dragging":G.value,"is-hover":z.value,"carousel--rtl":a.dir==="rtl"},dir:a.dir,"aria-label":a.i18n.ariaGallery,tabindex:"0",onMouseenter:je,onMouseleave:Ne},[Q,_,h(We)])}}}),re;(function(e){e.arrowUp="arrowUp",e.arrowDown="arrowDown",e.arrowRight="arrowRight",e.arrowLeft="arrowLeft"})(re||(re={}));const Ge={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function qe(e){return e in re}const le=e=>{const n=m("config",k(Object.assign({},v))),t=String(e.name),r=`icon${t.charAt(0).toUpperCase()+t.slice(1)}`;if(!t||typeof t!="string"||!qe(t))return;const l=Ge[t],i=h("path",{d:l}),f=n.i18n[r]||e.title||t,s=h("title",f);return h("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":f},[s,i])};le.props={name:String,title:String};const Je=(e,{slots:n,attrs:t})=>{const{next:r,prev:l}=n||{},i=m("config",k(Object.assign({},v))),f=m("maxSlide",u(1)),s=m("minSlide",u(1)),c=m("currentSlide",u(1)),a=m("nav",{}),{dir:g,wrapAround:S,i18n:d}=i,O=g==="rtl",B=h("button",{type:"button",class:["carousel__prev",!S&&c.value<=s.value&&"carousel__prev--disabled",t==null?void 0:t.class],"aria-label":d.ariaPreviousSlide,onClick:a.prev},(l==null?void 0:l())||h(le,{name:O?"arrowRight":"arrowLeft"})),A=h("button",{type:"button",class:["carousel__next",!S&&c.value>=f.value&&"carousel__next--disabled",t==null?void 0:t.class],"aria-label":d.ariaNextSlide,onClick:a.next},(r==null?void 0:r())||h(le,{name:O?"arrowLeft":"arrowRight"}));return[B,A]},Ke=()=>{const e=m("config",k(Object.assign({},v))),n=m("maxSlide",u(1)),t=m("minSlide",u(1)),r=m("currentSlide",u(1)),l=m("nav",{}),i=s=>U({val:r.value,max:n.value,min:0})===s,f=[];for(let s=t.value;s<n.value+1;s++){const c=h("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":i(s)},"aria-label":Le(e.i18n.ariaNavigateToSlide,{slideNumber:s+1}),onClick:()=>l.slideTo(s)}),a=h("li",{class:"carousel__pagination-item",key:s},c);f.push(a)}return h("ol",{class:"carousel__pagination"},f)};var Qe=se({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:n}){const t=m("config",k(Object.assign({},v))),r=m("currentSlide",u(0)),l=m("slidesToScroll",u(0)),i=m("isSliding",u(!1)),f=()=>e.index===r.value,s=()=>e.index===r.value-1,c=()=>e.index===r.value+1,a=()=>{const g=Math.floor(l.value),S=Math.ceil(l.value+t.itemsToShow-1);return e.index>=g&&e.index<=S};return()=>{var g;return h("li",{style:{width:`${100/t.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":a(),"carousel__slide--active":f(),"carousel__slide--prev":s(),"carousel__slide--next":c(),"carousel__slide--sliding":i.value},"aria-hidden":!a()},(g=n.default)===null||g===void 0?void 0:g.call(n))}}});const Ze={class:"container mx-auto lg:justify-evenly lg:flex"},et={class:"container my-auto px-2"},tt={autoplay:"",loop:"",muted:"",playsinline:"",class:"container h-3/6"},nt=["src"],ot={class:"container px-2"},at=b("div",{class:"px-4 sm:px-0"},[b("h3",{class:"text-base text-left font-semibold leading-7"}," Project Information ")],-1),it={class:"divide-y divide-{color:gray}"},rt={class:"px-1 py-2 columns-2"},lt={class:"text-left text-sm font-medium leading-6"},st={class:"text-left mt-1 text-sm leading-6"},ut=b("div",null,"Oops! Content not found.",-1),xt={__name:"index",setup(e){return $e({title:"Work"}),(n,t)=>{const r=Me,l=Ee,i=Ie,f=De,s=Pe;return P(),ye(s,null,{default:T(()=>[N(l,null,{default:T(()=>[N(r,{text:"Project Completed",class:"capitalize"})]),_:1}),N(f,null,{default:T(()=>[N(i,{path:"/work"},{default:T(({list:c})=>[N(H(Fe),{"items-to-show":1,autoplay:1e4,"wrap-around":!0},{addons:T(()=>[N(H(Je),{class:"text-slate-50 bg-slate-50"}),N(H(Ke))]),default:T(()=>[(P(!0),oe(ae,null,Ae(c,a=>(P(),ye(H(Qe),{key:a._path},{default:T(()=>[b("div",Ze,[b("div",et,[b("video",tt,[b("source",{src:a.src,type:"video/mp4"},null,8,nt)])]),b("div",ot,[b("div",null,[at,(P(!0),oe(ae,null,Ae(a.tech_stack,g=>(P(),oe("div",{key:g.name,class:"mt-2 border-t"},[b("dl",it,[b("div",rt,[b("dt",lt,Te(g.name),1),b("dd",st,Te(g.value),1)])])]))),128))])])])]),_:2},1024))),128))]),_:2},1024)]),"not-found":T(()=>[ut]),_:1})]),_:1})]),_:1})}}};export{xt as default};
