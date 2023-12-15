import{s as _,f as q,l as b,v as k,k as x,x as A,y as L,z as T,A as B,B as E,C,D as N,E as w,G as U,H as I,I as j,J as O,K as V,L as D,M as P,N as z}from"./entry.009f1888.js";async function R(a,n=_()){const{path:u,matched:e}=n.resolve(a);if(!e.length||(n._routePreloaded||(n._routePreloaded=new Set),n._routePreloaded.has(u)))return;const r=n._preloadPromises=n._preloadPromises||[];if(r.length>4)return Promise.all(r).then(()=>R(a,n));n._routePreloaded.add(u);const i=e.map(s=>{var t;return(t=s.components)==null?void 0:t.default}).filter(s=>typeof s=="function");for(const s of i){const t=Promise.resolve(s()).catch(()=>{}).finally(()=>r.splice(r.indexOf(t)));r.push(t)}await Promise.all(r)}const M=(...a)=>a.find(n=>n!==void 0),F="noopener noreferrer";/*! @__NO_SIDE_EFFECTS__ */function H(a){const n=a.componentName||"NuxtLink",u=(e,r)=>{if(!e||a.trailingSlash!=="append"&&a.trailingSlash!=="remove")return e;const i=a.trailingSlash==="append"?O:V;if(typeof e=="string")return i(e,!0);const s="path"in e?e.path:r(e).path;return{...e,name:void 0,path:i(s,!0)}};return q({name:n,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:r}){const i=_(),s=D(),t=b(()=>{const l=e.to||e.href||"";return u(l,i.resolve)}),d=b(()=>typeof t.value=="string"&&k(t.value,{acceptRelative:!0})),v=b(()=>e.external||e.target&&e.target!=="_self"?!0:typeof t.value=="object"?!1:t.value===""||d.value),y=x(!1),h=x(null),S=l=>{var f;h.value=e.custom?(f=l==null?void 0:l.$el)==null?void 0:f.nextElementSibling:l==null?void 0:l.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!G()){const f=P();let m,o=null;A(()=>{const p=$();L(()=>{m=T(()=>{var g;(g=h==null?void 0:h.value)!=null&&g.tagName&&(o=p.observe(h.value,async()=>{o==null||o(),o=null;const c=typeof t.value=="string"?t.value:i.resolve(t.value).fullPath;await Promise.all([f.hooks.callHook("link:prefetch",c).catch(()=>{}),!v.value&&R(t.value,i).catch(()=>{})]),y.value=!0}))})})}),B(()=>{m&&E(m),o==null||o(),o=null})}return()=>{var p,g;if(!v.value){const c={ref:S,to:t.value,activeClass:e.activeClass||a.activeClass,exactActiveClass:e.exactActiveClass||a.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(y.value&&(c.class=e.prefetchedClass||a.prefetchedClass),c.rel=e.rel),C(N("RouterLink"),c,r.default)}const l=typeof t.value=="object"?((p=i.resolve(t.value))==null?void 0:p.href)??null:t.value&&!e.external&&!d.value?u(w(s.app.baseURL,t.value),i.resolve):t.value||null,f=e.target||null,m=e.noRel?null:M(e.rel,a.externalRelAttribute,l?F:"")||null,o=()=>z(l,{replace:e.replace});return e.custom?r.default?r.default({href:l,navigate:o,get route(){if(!l)return;const c=U(l);return{path:c.pathname,fullPath:c.pathname,get query(){return I(c.search)},hash:c.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:l}},rel:m,target:f,isExternal:v.value,isActive:!1,isExactActive:!1}):null:C("a",{ref:h,href:l,rel:m,target:f},(g=r.default)==null?void 0:g.call(r))}}})}const K=H(j);function $(){const a=P();if(a._observer)return a._observer;let n=null;const u=new Map,e=(i,s)=>(n||(n=new IntersectionObserver(t=>{for(const d of t){const v=u.get(d.target);(d.isIntersecting||d.intersectionRatio>0)&&v&&v()}})),u.set(i,s),n.observe(i),()=>{u.delete(i),n.unobserve(i),u.size===0&&(n.disconnect(),n=null)});return a._observer={observe:e}}function G(){const a=navigator.connection;return!!(a&&(a.saveData||/2g/.test(a.effectiveType)))}export{K as _};
