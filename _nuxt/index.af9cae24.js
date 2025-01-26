import{_ as Ie}from"./Title.vue.000d479f.js";import Ee from"./Header.eaa59b03.js";import{_ as De}from"./index.vue.2692afa7.js";import{_ as Pe}from"./index.vue.7962a47d.js";import Be from"./ContentList.5f13863a.js";import Re from"./index.66b2a612.js";import $e from"./Wrapper.30daaaaa.js";import{m as Ve,f as le,n as u,q as j,s as A,v as ze,x as Xe,y as Ue,h as be,z as Y,A as we,B as g,C as m,F as ae,i as ye,w as y,o as P,b as T,j as B,c as oe,r as ke,a as b,t as Ae,p as Ye,e as He}from"./entry.8a372d38.js";import{_ as We}from"./_plugin-vue_export-helper.c27b6911.js";import"./nuxt-link.85411488.js";import"./ContentQuery.7b409d1d.js";import"./query.9da0ece6.js";import"./preview.9b11eecc.js";const Fe=()=>Ve("color-mode").value;/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const v={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},Te={itemsToShow:{default:v.itemsToShow,type:Number},itemsToScroll:{default:v.itemsToScroll,type:Number},wrapAround:{default:v.wrapAround,type:Boolean},throttle:{default:v.throttle,type:Number},snapAlign:{default:v.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:v.transition,type:Number},breakpoints:{default:v.breakpoints,type:Object},autoplay:{default:v.autoplay,type:Number},pauseAutoplayOnHover:{default:v.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:v.mouseDrag,type:Boolean},touchDrag:{default:v.touchDrag,type:Boolean},dir:{default:v.dir,validator(e){return["rtl","ltr"].includes(e)}},i18n:{default:v.i18n,type:Object},settings:{default(){return{}},type:Object}};function Ge({config:e,slidesCount:n}){const{snapAlign:t,wrapAround:s,itemsToShow:r=1}=e;if(s)return Math.max(n-1,0);let i;switch(t){case"start":i=n-r;break;case"end":i=n-1;break;case"center":case"center-odd":i=n-Math.ceil((r-.5)/2);break;case"center-even":i=n-Math.ceil(r/2);break;default:i=0;break}return Math.max(i,0)}function qe({config:e,slidesCount:n}){const{wrapAround:t,snapAlign:s,itemsToShow:r=1}=e;let i=0;if(t||r>n)return i;switch(s){case"start":i=0;break;case"end":i=r-1;break;case"center":case"center-odd":i=Math.floor((r-1)/2);break;case"center-even":i=Math.floor((r-2)/2);break;default:i=0;break}return i}function ie({val:e,max:n,min:t}){return n<t?e:Math.min(Math.max(e,t),n)}function Je({config:e,currentSlide:n,slidesCount:t}){const{snapAlign:s,wrapAround:r,itemsToShow:i=1}=e;let f=n;switch(s){case"center":case"center-odd":f-=(i-1)/2;break;case"center-even":f-=(i-2)/2;break;case"end":f-=i-1;break}return r?f:ie({val:f,max:t-i,min:0})}function Ce(e){return e?e.reduce((n,t)=>{var s;return t.type===ae?[...n,...Ce(t.children)]:((s=t.type)===null||s===void 0?void 0:s.name)==="CarouselSlide"?[...n,t]:n},[]):[]}function H({val:e,max:n,min:t=0}){return e>n?H({val:e-(n+1),max:n,min:t}):e<t?H({val:e+(n+1),max:n,min:t}):e}function Ke(e,n){let t;return n?function(...s){const r=this;t||(e.apply(r,s),t=!0,setTimeout(()=>t=!1,n))}:e}function Qe(e,n){let t;return function(...s){t&&clearTimeout(t),t=setTimeout(()=>{e(...s),t=null},n)}}function je(e="",n={}){return Object.entries(n).reduce((t,[s,r])=>t.replace(`{${s}}`,String(r)),e)}var Ze=le({name:"ARIA",setup(){const e=m("config",j(Object.assign({},v))),n=m("currentSlide",u(0)),t=m("slidesCount",u(0));return()=>g("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},je(e.i18n.itemXofY,{currentSlide:n.value+1,slidesCount:t.value}))}}),et=le({name:"Carousel",props:Te,setup(e,{slots:n,emit:t,expose:s}){var r;const i=u(null),f=u([]),c=u(0),d=u(0),a=j(Object.assign({},v));let h=Object.assign({},v),S;const l=u((r=e.modelValue)!==null&&r!==void 0?r:0),w=u(0),R=u(0),C=u(0),I=u(0);let O,W;A("config",a),A("slidesCount",d),A("currentSlide",l),A("maxSlide",C),A("minSlide",I),A("slideWidth",c);function F(){S=Object.assign({},e.breakpoints),h=Object.assign(Object.assign(Object.assign({},h),e),{i18n:Object.assign(Object.assign({},h.i18n),e.i18n),breakpoints:void 0}),ue(h)}function $(){if(!S||!Object.keys(S).length)return;const o=Object.keys(S).map(p=>Number(p)).sort((p,k)=>+k-+p);let _=Object.assign({},h);o.some(p=>{const k=window.matchMedia(`(min-width: ${p}px)`).matches;return k&&(_=Object.assign(Object.assign({},_),S[p])),k}),ue(_)}function ue(o){Object.entries(o).forEach(([_,p])=>a[_]=p)}const ce=Qe(()=>{$(),E()},16);function E(){if(!i.value)return;const o=i.value.getBoundingClientRect();c.value=o.width/a.itemsToShow}function G(){d.value<=0||(R.value=Math.ceil((d.value-1)/2),C.value=Ge({config:a,slidesCount:d.value}),I.value=qe({config:a,slidesCount:d.value}),a.wrapAround||(l.value=ie({val:l.value,max:C.value,min:I.value})))}ze(()=>{Xe(()=>E()),setTimeout(()=>E(),1e3),$(),pe(),window.addEventListener("resize",ce,{passive:!0}),t("init")}),Ue(()=>{W&&clearTimeout(W),O&&clearInterval(O),window.removeEventListener("resize",ce,{passive:!0})});let x=!1;const V={x:0,y:0},z={x:0,y:0},L=j({x:0,y:0}),X=u(!1),q=u(!1),Me=()=>{X.value=!0},Ne=()=>{X.value=!1};function de(o){["INPUT","TEXTAREA","SELECT"].includes(o.target.tagName)||(x=o.type==="touchstart",x||o.preventDefault(),!(!x&&o.button!==0||M.value)&&(V.x=x?o.touches[0].clientX:o.clientX,V.y=x?o.touches[0].clientY:o.clientY,document.addEventListener(x?"touchmove":"mousemove",ve,!0),document.addEventListener(x?"touchend":"mouseup",fe,!0)))}const ve=Ke(o=>{q.value=!0,z.x=x?o.touches[0].clientX:o.clientX,z.y=x?o.touches[0].clientY:o.clientY;const _=z.x-V.x,p=z.y-V.y;L.y=p,L.x=_},a.throttle);function fe(){const o=a.dir==="rtl"?-1:1,_=Math.sign(L.x)*.4,p=Math.round(L.x/c.value+_)*o;if(p&&!x){const k=Z=>{Z.stopPropagation(),window.removeEventListener("click",k,!0)};window.addEventListener("click",k,!0)}N(l.value-p),L.x=0,L.y=0,q.value=!1,document.removeEventListener(x?"touchmove":"mousemove",ve,!0),document.removeEventListener(x?"touchend":"mouseup",fe,!0)}function pe(){!a.autoplay||a.autoplay<=0||(O=setInterval(()=>{a.pauseAutoplayOnHover&&X.value||U()},a.autoplay))}function me(){O&&(clearInterval(O),O=null),pe()}const M=u(!1);function N(o){const _=a.wrapAround?o:ie({val:o,max:C.value,min:I.value});l.value===_||M.value||(t("slide-start",{slidingToIndex:o,currentSlideIndex:l.value,prevSlideIndex:w.value,slidesCount:d.value}),M.value=!0,w.value=l.value,l.value=_,W=setTimeout(()=>{if(a.wrapAround){const p=H({val:_,max:C.value,min:0});p!==l.value&&(l.value=p,t("loop",{currentSlideIndex:l.value,slidingToIndex:o}))}t("update:modelValue",l.value),t("slide-end",{currentSlideIndex:l.value,prevSlideIndex:w.value,slidesCount:d.value}),M.value=!1,me()},a.transition))}function U(){N(l.value+a.itemsToScroll)}function J(){N(l.value-a.itemsToScroll)}const _e={slideTo:N,next:U,prev:J};A("nav",_e),A("isSliding",M);const ge=be(()=>Je({config:a,currentSlide:l.value,slidesCount:d.value}));A("slidesToScroll",ge);const Oe=be(()=>{const o=a.dir==="rtl"?-1:1,_=ge.value*c.value*o;return{transform:`translateX(${L.x-_}px)`,transition:`${M.value?a.transition:0}ms`,margin:a.wrapAround?`0 -${d.value*c.value}px`:"",width:"100%"}});function he(){F(),$(),G(),E(),me()}Object.keys(Te).forEach(o=>{["modelValue"].includes(o)||Y(()=>e[o],he)}),Y(()=>e.modelValue,o=>{o!==l.value&&N(Number(o))}),Y(d,G),t("before-init"),F();const Se={config:a,slidesCount:d,slideWidth:c,next:U,prev:J,slideTo:N,currentSlide:l,maxSlide:C,minSlide:I,middleSlide:R};s({updateBreakpointsConfigs:$,updateSlidesData:G,updateSlideWidth:E,initDefaultConfigs:F,restartCarousel:he,slideTo:N,next:U,prev:J,nav:_e,data:Se});const K=n.default||n.slides,Q=n.addons,xe=j(Se);return()=>{const o=Ce(K==null?void 0:K(xe)),_=(Q==null?void 0:Q(xe))||[];o.forEach((ee,te)=>ee.props.index=te);let p=o;if(a.wrapAround){const ee=o.map((ne,D)=>we(ne,{index:-o.length+D,isClone:!0,key:`clone-before-${D}`})),te=o.map((ne,D)=>we(ne,{index:o.length+D,isClone:!0,key:`clone-after-${D}`}));p=[...ee,...o,...te]}f.value=o,d.value=Math.max(o.length,1);const k=g("ol",{class:"carousel__track",style:Oe.value,onMousedownCapture:a.mouseDrag?de:null,onTouchstartPassiveCapture:a.touchDrag?de:null},p),Z=g("div",{class:"carousel__viewport"},k);return g("section",{ref:i,class:{carousel:!0,"is-sliding":M.value,"is-dragging":q.value,"is-hover":X.value,"carousel--rtl":a.dir==="rtl"},dir:a.dir,"aria-label":a.i18n.ariaGallery,tabindex:"0",onMouseenter:Me,onMouseleave:Ne},[Z,_,g(Ze)])}}}),re;(function(e){e.arrowUp="arrowUp",e.arrowDown="arrowDown",e.arrowRight="arrowRight",e.arrowLeft="arrowLeft"})(re||(re={}));const tt={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function nt(e){return e in re}const se=e=>{const n=m("config",j(Object.assign({},v))),t=String(e.name),s=`icon${t.charAt(0).toUpperCase()+t.slice(1)}`;if(!t||typeof t!="string"||!nt(t))return;const r=tt[t],i=g("path",{d:r}),f=n.i18n[s]||e.title||t,c=g("title",f);return g("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":f},[c,i])};se.props={name:String,title:String};const ot=(e,{slots:n,attrs:t})=>{const{next:s,prev:r}=n||{},i=m("config",j(Object.assign({},v))),f=m("maxSlide",u(1)),c=m("minSlide",u(1)),d=m("currentSlide",u(1)),a=m("nav",{}),{dir:h,wrapAround:S,i18n:l}=i,w=h==="rtl",R=g("button",{type:"button",class:["carousel__prev",!S&&d.value<=c.value&&"carousel__prev--disabled",t==null?void 0:t.class],"aria-label":l.ariaPreviousSlide,onClick:a.prev},(r==null?void 0:r())||g(se,{name:w?"arrowRight":"arrowLeft"})),C=g("button",{type:"button",class:["carousel__next",!S&&d.value>=f.value&&"carousel__next--disabled",t==null?void 0:t.class],"aria-label":l.ariaNextSlide,onClick:a.next},(s==null?void 0:s())||g(se,{name:w?"arrowLeft":"arrowRight"}));return[R,C]},at=()=>{const e=m("config",j(Object.assign({},v))),n=m("maxSlide",u(1)),t=m("minSlide",u(1)),s=m("currentSlide",u(1)),r=m("nav",{}),i=c=>H({val:s.value,max:n.value,min:0})===c,f=[];for(let c=t.value;c<n.value+1;c++){const d=g("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":i(c)},"aria-label":je(e.i18n.ariaNavigateToSlide,{slideNumber:c+1}),onClick:()=>r.slideTo(c)}),a=g("li",{class:"carousel__pagination-item",key:c},d);f.push(a)}return g("ol",{class:"carousel__pagination"},f)};var it=le({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:n}){const t=m("config",j(Object.assign({},v))),s=m("currentSlide",u(0)),r=m("slidesToScroll",u(0)),i=m("isSliding",u(!1)),f=()=>e.index===s.value,c=()=>e.index===s.value-1,d=()=>e.index===s.value+1,a=()=>{const h=Math.floor(r.value),S=Math.ceil(r.value+t.itemsToShow-1);return e.index>=h&&e.index<=S};return()=>{var h;return g("li",{style:{width:`${100/t.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":a(),"carousel__slide--active":f(),"carousel__slide--prev":c(),"carousel__slide--next":d(),"carousel__slide--sliding":i.value},"aria-hidden":!a()},(h=n.default)===null||h===void 0?void 0:h.call(n))}}});const Le=e=>(Ye("data-v-e7ee729a"),e=e(),He(),e),rt={class:"container mx-auto lg:flex lg:justify-evenly"},st={class:"px-[5%]"},lt={autoplay:"",loop:"",muted:"",playsinline:"",class:"video-element h-auto w-fit"},ut=["src"],ct={class:"info-container block px-2 lg:hidden"},dt=Le(()=>b("div",{class:"info-header px-4 sm:px-0"},[b("h3",{class:"text-lg font-bold leading-7"}," Project Information ")],-1)),vt={class:"detail-list divide-y"},ft={class:"detail-item grid grid-cols-2 px-1 py-2"},pt={class:"flex items-end justify-end text-sm font-medium leading-6"},mt={class:"flex justify-start pl-5 text-sm leading-6"},_t=Le(()=>b("div",{class:"not-found-message"},"Oops! Content not found.",-1)),gt={__name:"index",setup(e){const n=u("light");return Y(()=>Fe().value,t=>{n.value=t||"dark"},{immediate:!0}),(t,s)=>{const r=Ie,i=Ee,f=De,c=Pe,d=Be,a=Re,h=$e;return P(),ye(h,null,{default:y(()=>[T(i,null,{default:y(()=>[T(r,{text:"Project Completed",class:"capitalize"})]),_:1}),T(a,null,{default:y(()=>[T(d,{path:"/work"},{default:y(({list:S})=>[T(B(et),{"items-to-show":1,autoplay:1e4,"wrap-around":!0,class:"carousel-container","data-theme":B(n)||"dark"},{addons:y(()=>[T(B(ot)),T(B(at))]),default:y(()=>[(P(!0),oe(ae,null,ke(S,l=>(P(),ye(B(it),{key:l._path},{default:y(()=>[b("div",rt,[b("div",st,[T(c,{class:"video-container my-auto px-2",newtab:"",href:l.site},{default:y(()=>[T(f,{style:{border:"0"}},{default:y(()=>[b("video",lt,[b("source",{src:l.src,type:"video/mp4"},null,8,ut)])]),_:2},1024)]),_:2},1032,["href"])]),b("div",ct,[dt,(P(!0),oe(ae,null,ke(l.tech_stack,w=>(P(),oe("div",{key:w.name},[b("dl",vt,[b("div",ft,[b("dt",pt,Ae(w.name),1),b("dd",mt,Ae(w.value),1)])])]))),128))])])]),_:2},1024))),128))]),_:2},1032,["data-theme"])]),"not-found":y(()=>[_t]),_:1})]),_:1})]),_:1})}}},Nt=We(gt,[["__scopeId","data-v-e7ee729a"]]);export{Nt as default};
