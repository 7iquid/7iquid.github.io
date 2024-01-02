import{_ as Oe}from"./Title.vue.fc24cef3.js";import Ee from"./Header.2cfe47f6.js";import Ie from"./ContentList.9cff65c0.js";import De from"./index.3ecd412d.js";import Pe from"./Wrapper.75bec83f.js";import{f as se,m as u,n as T,q as y,s as Be,v as Re,x as Ve,h as xe,y as ne,z as we,A as _,B as p,F as ae,u as $e,i as ye,w as j,o as P,b as N,j as H,c as oe,r as Ae,a as S,t as Te}from"./entry.92acd38e.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./ContentQuery.3abb0d3c.js";import"./query.72b0c383.js";import"./preview.b59d5637.js";/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const v={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},ke={itemsToShow:{default:v.itemsToShow,type:Number},itemsToScroll:{default:v.itemsToScroll,type:Number},wrapAround:{default:v.wrapAround,type:Boolean},throttle:{default:v.throttle,type:Number},snapAlign:{default:v.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:v.transition,type:Number},breakpoints:{default:v.breakpoints,type:Object},autoplay:{default:v.autoplay,type:Number},pauseAutoplayOnHover:{default:v.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:v.mouseDrag,type:Boolean},touchDrag:{default:v.touchDrag,type:Boolean},dir:{default:v.dir,validator(e){return["rtl","ltr"].includes(e)}},i18n:{default:v.i18n,type:Object},settings:{default(){return{}},type:Object}};function ze({config:e,slidesCount:n}){const{snapAlign:t,wrapAround:r,itemsToShow:l=1}=e;if(r)return Math.max(n-1,0);let i;switch(t){case"start":i=n-l;break;case"end":i=n-1;break;case"center":case"center-odd":i=n-Math.ceil((l-.5)/2);break;case"center-even":i=n-Math.ceil(l/2);break;default:i=0;break}return Math.max(i,0)}function Xe({config:e,slidesCount:n}){const{wrapAround:t,snapAlign:r,itemsToShow:l=1}=e;let i=0;if(t||l>n)return i;switch(r){case"start":i=0;break;case"end":i=l-1;break;case"center":case"center-odd":i=Math.floor((l-1)/2);break;case"center-even":i=Math.floor((l-2)/2);break;default:i=0;break}return i}function ie({val:e,max:n,min:t}){return n<t?e:Math.min(Math.max(e,t),n)}function He({config:e,currentSlide:n,slidesCount:t}){const{snapAlign:r,wrapAround:l,itemsToShow:i=1}=e;let f=n;switch(r){case"center":case"center-odd":f-=(i-1)/2;break;case"center-even":f-=(i-2)/2;break;case"end":f-=i-1;break}return l?f:ie({val:f,max:t-i,min:0})}function Ce(e){return e?e.reduce((n,t)=>{var r;return t.type===ae?[...n,...Ce(t.children)]:((r=t.type)===null||r===void 0?void 0:r.name)==="CarouselSlide"?[...n,t]:n},[]):[]}function U({val:e,max:n,min:t=0}){return e>n?U({val:e-(n+1),max:n,min:t}):e<t?U({val:e+(n+1),max:n,min:t}):e}function Ue(e,n){let t;return n?function(...r){const l=this;t||(e.apply(l,r),t=!0,setTimeout(()=>t=!1,n))}:e}function Ye(e,n){let t;return function(...r){t&&clearTimeout(t),t=setTimeout(()=>{e(...r),t=null},n)}}function Le(e="",n={}){return Object.entries(n).reduce((t,[r,l])=>t.replace(`{${r}}`,String(l)),e)}var We=se({name:"ARIA",setup(){const e=p("config",T(Object.assign({},v))),n=p("currentSlide",u(0)),t=p("slidesCount",u(0));return()=>_("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Le(e.i18n.itemXofY,{currentSlide:n.value+1,slidesCount:t.value}))}}),Fe=se({name:"Carousel",props:ke,setup(e,{slots:n,emit:t,expose:r}){var l;const i=u(null),f=u([]),s=u(0),c=u(0),a=T(Object.assign({},v));let h=Object.assign({},v),x;const d=u((l=e.modelValue)!==null&&l!==void 0?l:0),M=u(0),B=u(0),A=u(0),E=u(0);let O,Y;y("config",a),y("slidesCount",c),y("currentSlide",d),y("maxSlide",A),y("minSlide",E),y("slideWidth",s);function W(){x=Object.assign({},e.breakpoints),h=Object.assign(Object.assign(Object.assign({},h),e),{i18n:Object.assign(Object.assign({},h.i18n),e.i18n),breakpoints:void 0}),ue(h)}function R(){if(!x||!Object.keys(x).length)return;const o=Object.keys(x).map(m=>Number(m)).sort((m,w)=>+w-+m);let g=Object.assign({},h);o.some(m=>{const w=window.matchMedia(`(min-width: ${m}px)`).matches;return w&&(g=Object.assign(Object.assign({},g),x[m])),w}),ue(g)}function ue(o){Object.entries(o).forEach(([g,m])=>a[g]=m)}const ce=Ye(()=>{R(),I()},16);function I(){if(!i.value)return;const o=i.value.getBoundingClientRect();s.value=o.width/a.itemsToShow}function F(){c.value<=0||(B.value=Math.ceil((c.value-1)/2),A.value=ze({config:a,slidesCount:c.value}),E.value=Xe({config:a,slidesCount:c.value}),a.wrapAround||(d.value=ie({val:d.value,max:A.value,min:E.value})))}Be(()=>{Re(()=>I()),setTimeout(()=>I(),1e3),R(),me(),window.addEventListener("resize",ce,{passive:!0}),t("init")}),Ve(()=>{Y&&clearTimeout(Y),O&&clearInterval(O),window.removeEventListener("resize",ce,{passive:!0})});let b=!1;const V={x:0,y:0},$={x:0,y:0},k=T({x:0,y:0}),z=u(!1),G=u(!1),je=()=>{z.value=!0},Ne=()=>{z.value=!1};function de(o){["INPUT","TEXTAREA","SELECT"].includes(o.target.tagName)||(b=o.type==="touchstart",b||o.preventDefault(),!(!b&&o.button!==0||C.value)&&(V.x=b?o.touches[0].clientX:o.clientX,V.y=b?o.touches[0].clientY:o.clientY,document.addEventListener(b?"touchmove":"mousemove",ve,!0),document.addEventListener(b?"touchend":"mouseup",fe,!0)))}const ve=Ue(o=>{G.value=!0,$.x=b?o.touches[0].clientX:o.clientX,$.y=b?o.touches[0].clientY:o.clientY;const g=$.x-V.x,m=$.y-V.y;k.y=m,k.x=g},a.throttle);function fe(){const o=a.dir==="rtl"?-1:1,g=Math.sign(k.x)*.4,m=Math.round(k.x/s.value+g)*o;if(m&&!b){const w=Q=>{Q.stopPropagation(),window.removeEventListener("click",w,!0)};window.addEventListener("click",w,!0)}L(d.value-m),k.x=0,k.y=0,G.value=!1,document.removeEventListener(b?"touchmove":"mousemove",ve,!0),document.removeEventListener(b?"touchend":"mouseup",fe,!0)}function me(){!a.autoplay||a.autoplay<=0||(O=setInterval(()=>{a.pauseAutoplayOnHover&&z.value||X()},a.autoplay))}function pe(){O&&(clearInterval(O),O=null),me()}const C=u(!1);function L(o){const g=a.wrapAround?o:ie({val:o,max:A.value,min:E.value});d.value===g||C.value||(t("slide-start",{slidingToIndex:o,currentSlideIndex:d.value,prevSlideIndex:M.value,slidesCount:c.value}),C.value=!0,M.value=d.value,d.value=g,Y=setTimeout(()=>{if(a.wrapAround){const m=U({val:g,max:A.value,min:0});m!==d.value&&(d.value=m,t("loop",{currentSlideIndex:d.value,slidingToIndex:o}))}t("update:modelValue",d.value),t("slide-end",{currentSlideIndex:d.value,prevSlideIndex:M.value,slidesCount:c.value}),C.value=!1,pe()},a.transition))}function X(){L(d.value+a.itemsToScroll)}function q(){L(d.value-a.itemsToScroll)}const ge={slideTo:L,next:X,prev:q};y("nav",ge),y("isSliding",C);const he=xe(()=>He({config:a,currentSlide:d.value,slidesCount:c.value}));y("slidesToScroll",he);const Me=xe(()=>{const o=a.dir==="rtl"?-1:1,g=he.value*s.value*o;return{transform:`translateX(${k.x-g}px)`,transition:`${C.value?a.transition:0}ms`,margin:a.wrapAround?`0 -${c.value*s.value}px`:"",width:"100%"}});function _e(){W(),R(),F(),I(),pe()}Object.keys(ke).forEach(o=>{["modelValue"].includes(o)||ne(()=>e[o],_e)}),ne(()=>e.modelValue,o=>{o!==d.value&&L(Number(o))}),ne(c,F),t("before-init"),W();const be={config:a,slidesCount:c,slideWidth:s,next:X,prev:q,slideTo:L,currentSlide:d,maxSlide:A,minSlide:E,middleSlide:B};r({updateBreakpointsConfigs:R,updateSlidesData:F,updateSlideWidth:I,initDefaultConfigs:W,restartCarousel:_e,slideTo:L,next:X,prev:q,nav:ge,data:be});const J=n.default||n.slides,K=n.addons,Se=T(be);return()=>{const o=Ce(J==null?void 0:J(Se)),g=(K==null?void 0:K(Se))||[];o.forEach((Z,ee)=>Z.props.index=ee);let m=o;if(a.wrapAround){const Z=o.map((te,D)=>we(te,{index:-o.length+D,isClone:!0,key:`clone-before-${D}`})),ee=o.map((te,D)=>we(te,{index:o.length+D,isClone:!0,key:`clone-after-${D}`}));m=[...Z,...o,...ee]}f.value=o,c.value=Math.max(o.length,1);const w=_("ol",{class:"carousel__track",style:Me.value,onMousedownCapture:a.mouseDrag?de:null,onTouchstartPassiveCapture:a.touchDrag?de:null},m),Q=_("div",{class:"carousel__viewport"},w);return _("section",{ref:i,class:{carousel:!0,"is-sliding":C.value,"is-dragging":G.value,"is-hover":z.value,"carousel--rtl":a.dir==="rtl"},dir:a.dir,"aria-label":a.i18n.ariaGallery,tabindex:"0",onMouseenter:je,onMouseleave:Ne},[Q,g,_(We)])}}}),re;(function(e){e.arrowUp="arrowUp",e.arrowDown="arrowDown",e.arrowRight="arrowRight",e.arrowLeft="arrowLeft"})(re||(re={}));const Ge={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function qe(e){return e in re}const le=e=>{const n=p("config",T(Object.assign({},v))),t=String(e.name),r=`icon${t.charAt(0).toUpperCase()+t.slice(1)}`;if(!t||typeof t!="string"||!qe(t))return;const l=Ge[t],i=_("path",{d:l}),f=n.i18n[r]||e.title||t,s=_("title",f);return _("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":f},[s,i])};le.props={name:String,title:String};const Je=(e,{slots:n,attrs:t})=>{const{next:r,prev:l}=n||{},i=p("config",T(Object.assign({},v))),f=p("maxSlide",u(1)),s=p("minSlide",u(1)),c=p("currentSlide",u(1)),a=p("nav",{}),{dir:h,wrapAround:x,i18n:d}=i,M=h==="rtl",B=_("button",{type:"button",class:["carousel__prev",!x&&c.value<=s.value&&"carousel__prev--disabled",t==null?void 0:t.class],"aria-label":d.ariaPreviousSlide,onClick:a.prev},(l==null?void 0:l())||_(le,{name:M?"arrowRight":"arrowLeft"})),A=_("button",{type:"button",class:["carousel__next",!x&&c.value>=f.value&&"carousel__next--disabled",t==null?void 0:t.class],"aria-label":d.ariaNextSlide,onClick:a.next},(r==null?void 0:r())||_(le,{name:M?"arrowLeft":"arrowRight"}));return[B,A]},Ke=()=>{const e=p("config",T(Object.assign({},v))),n=p("maxSlide",u(1)),t=p("minSlide",u(1)),r=p("currentSlide",u(1)),l=p("nav",{}),i=s=>U({val:r.value,max:n.value,min:0})===s,f=[];for(let s=t.value;s<n.value+1;s++){const c=_("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":i(s)},"aria-label":Le(e.i18n.ariaNavigateToSlide,{slideNumber:s+1}),onClick:()=>l.slideTo(s)}),a=_("li",{class:"carousel__pagination-item",key:s},c);f.push(a)}return _("ol",{class:"carousel__pagination"},f)};var Qe=se({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:n}){const t=p("config",T(Object.assign({},v))),r=p("currentSlide",u(0)),l=p("slidesToScroll",u(0)),i=p("isSliding",u(!1)),f=()=>e.index===r.value,s=()=>e.index===r.value-1,c=()=>e.index===r.value+1,a=()=>{const h=Math.floor(l.value),x=Math.ceil(l.value+t.itemsToShow-1);return e.index>=h&&e.index<=x};return()=>{var h;return _("li",{style:{width:`${100/t.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":a(),"carousel__slide--active":f(),"carousel__slide--prev":s(),"carousel__slide--next":c(),"carousel__slide--sliding":i.value},"aria-hidden":!a()},(h=n.default)===null||h===void 0?void 0:h.call(n))}}});const Ze={class:"container mx-auto sm:justify-evenly sm:flex"},et={class:"container my-auto px-2"},tt={autoplay:"",loop:"",muted:"",playsinline:"",class:"container h-3/6"},nt=["src"],ot={class:"container px-2"},at=S("div",{class:"px-4 sm:px-0"},[S("h3",{class:"text-base text-left font-semibold leading-7"}," Project Information ")],-1),it={class:"mt-2 border-t"},rt={class:"divide-y divide-{color:gray}"},lt={class:"px-1 py-2 columns-2"},st={class:"text-left text-sm font-medium leading-6"},ut={class:"text-left mt-1 text-sm leading-6"},St={__name:"index",setup(e){return $e({title:"Work"}),(n,t)=>{const r=Oe,l=Ee,i=Ie,f=De,s=Pe;return P(),ye(s,null,{default:j(()=>[N(l,null,{default:j(()=>[N(r,{text:"Project Completed",class:"capitalize"})]),_:1}),N(f,null,{default:j(()=>[N(i,{path:"/work"},{default:j(({list:c})=>[N(H(Fe),{"items-to-show":1,autoplay:1e4,wrapAround:!0},{addons:j(()=>[N(H(Je),{class:"text-slate-50 bg-slate-50"}),N(H(Ke))]),default:j(()=>[(P(!0),oe(ae,null,Ae(c,a=>(P(),ye(H(Qe),{key:a._path},{default:j(()=>[S("div",Ze,[S("div",et,[S("video",tt,[S("source",{src:a.src,type:"video/mp4"},null,8,nt)])]),S("div",ot,[S("div",null,[at,(P(!0),oe(ae,null,Ae(a.tech_stack,h=>(P(),oe("div",it,[S("dl",rt,[S("div",lt,[S("dt",st,Te(h.name),1),S("dd",ut,Te(h.value),1)])])]))),256))])])])]),_:2},1024))),128))]),_:2},1024)]),_:1})]),_:1})]),_:1})}}};export{St as default};
