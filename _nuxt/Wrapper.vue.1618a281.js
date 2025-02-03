import{_ as me}from"./Item.vue.5e8b44b5.js";import be from"./Icon.72b51963.js";import{a as ye,o as l,u as C,c as ge,l as A,H as X,t as O,p as Pe,N as ee}from"./open-closed.fc3d3879.js";import{c as he,m as G,a as V,f as K,E as Y,y as Se,w as we,h as Ee,b as ke,P as _,N as T,o as N,T as U}from"./hidden.14497eba.js";import{a1 as W,l as $,D as I,_ as q,f as M,X as Z,h as x,F as z,m as oe,T as re,ae as $e,x as xe,o as D,i as Q,w as R,b as j,a as te,Q as ne,j as le,t as Fe,ai as Ie,c as Te,r as Be,k as Ne}from"./entry.924d1443.js";import{u as _e}from"./use-navbar-parser.1a6841d0.js";function Ce(t,u,b,P){ye.isServer||W(n=>{t=t??window,t.addEventListener(u,b,P),n(()=>t.removeEventListener(u,b,P))})}var F=(t=>(t[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t))(F||{});function ue(){let t=$(0);return he("keydown",u=>{u.key==="Tab"&&(t.value=u.shiftKey?1:0)}),t}function Oe({defaultContainers:t=[],portals:u,mainTreeNodeRef:b}={}){let P=$(null),n=G(P);function e(){var s;let r=[];for(let i of t)i!==null&&(i instanceof HTMLElement?r.push(i):"value"in i&&i.value instanceof HTMLElement&&r.push(i.value));if(u!=null&&u.value)for(let i of u.value)r.push(i);for(let i of(s=n==null?void 0:n.querySelectorAll("html > *, body > *"))!=null?s:[])i!==document.body&&i!==document.head&&i instanceof HTMLElement&&i.id!=="headlessui-portal-root"&&(i.contains(l(P))||r.some(h=>i.contains(h))||r.push(i));return r}return{resolveContainers:e,contains(s){return e().some(r=>r.contains(s))},mainTreeNodeRef:P,MainTreeNode(){return b!=null?null:I(K,{features:V.Hidden,ref:P})}}}let ae=Symbol("PortalParentContext");function Me(){let t=q(ae,null),u=$([]);function b(e){return u.value.push(e),t&&t.register(e),()=>P(e)}function P(e){let s=u.value.indexOf(e);s!==-1&&u.value.splice(s,1),t&&t.unregister(e)}let n={register:b,unregister:P,portals:u};return[u,M({name:"PortalWrapper",setup(e,{slots:s}){return Z(ae,n),()=>{var r;return(r=s.default)==null?void 0:r.call(s)}}})]}var Le=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(Le||{});let se=Symbol("PopoverContext");function J(t){let u=q(se,null);if(u===null){let b=new Error(`<${t} /> is missing a parent <${ve.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(b,J),b}return u}let He=Symbol("PopoverGroupContext");function ie(){return q(He,null)}let ce=Symbol("PopoverPanelContext");function De(){return q(ce,null)}let ve=M({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:u,attrs:b,expose:P}){var n;let e=$(null);P({el:e,$el:e});let s=$(1),r=$(null),i=$(null),h=$(null),p=$(null),w=x(()=>G(e)),E=x(()=>{var a,c;if(!l(r)||!l(p))return!1;for(let H of document.querySelectorAll("body > *"))if(Number(H==null?void 0:H.contains(l(r)))^Number(H==null?void 0:H.contains(l(p))))return!0;let d=Y(),k=d.indexOf(l(r)),L=(k+d.length-1)%d.length,de=(k+1)%d.length,pe=d[L],fe=d[de];return!((a=l(p))!=null&&a.contains(pe))&&!((c=l(p))!=null&&c.contains(fe))}),y={popoverState:s,buttonId:$(null),panelId:$(null),panel:p,button:r,isPortalled:E,beforePanelSentinel:i,afterPanelSentinel:h,togglePopover(){s.value=C(s.value,{0:1,1:0})},closePopover(){s.value!==1&&(s.value=1)},close(a){y.closePopover();let c=(()=>a?a instanceof HTMLElement?a:a.value instanceof HTMLElement?l(a):l(y.button):l(y.button))();c==null||c.focus()}};Z(se,y),ge(x(()=>C(s.value,{0:A.Open,1:A.Closed})));let B={buttonId:y.buttonId,panelId:y.panelId,close(){y.closePopover()}},S=ie(),f=S==null?void 0:S.registerPopover,[g,v]=Me(),o=Oe({mainTreeNodeRef:S==null?void 0:S.mainTreeNodeRef,portals:g,defaultContainers:[r,p]});function m(){var a,c,d,k;return(k=S==null?void 0:S.isFocusWithinPopoverGroup())!=null?k:((a=w.value)==null?void 0:a.activeElement)&&(((c=l(r))==null?void 0:c.contains(w.value.activeElement))||((d=l(p))==null?void 0:d.contains(w.value.activeElement)))}return W(()=>f==null?void 0:f(B)),Ce((n=w.value)==null?void 0:n.defaultView,"focus",a=>{var c,d;a.target!==window&&a.target instanceof HTMLElement&&s.value===0&&(m()||r&&p&&(o.contains(a.target)||(c=l(y.beforePanelSentinel))!=null&&c.contains(a.target)||(d=l(y.afterPanelSentinel))!=null&&d.contains(a.target)||y.closePopover()))},!0),Se(o.resolveContainers,(a,c)=>{var d;y.closePopover(),we(c,Ee.Loose)||(a.preventDefault(),(d=l(r))==null||d.focus())},x(()=>s.value===0)),()=>{let a={open:s.value===0,close:y.close};return I(z,[I(v,{},()=>X({theirProps:{...t,...b},ourProps:{ref:e},slot:a,slots:u,attrs:b,name:"Popover"})),I(o.MainTreeNode)])}}}),Re=M({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-popover-button-${O()}`}},inheritAttrs:!1,setup(t,{attrs:u,slots:b,expose:P}){let n=J("PopoverButton"),e=x(()=>G(n.button));P({el:n.button,$el:n.button}),oe(()=>{n.buttonId.value=t.id}),re(()=>{n.buttonId.value=null});let s=ie(),r=s==null?void 0:s.closeOthers,i=De(),h=x(()=>i===null?!1:i.value===n.panelId.value),p=$(null),w=`headlessui-focus-sentinel-${O()}`;h.value||W(()=>{n.button.value=p.value});let E=ke(x(()=>({as:t.as,type:u.type})),p);function y(o){var m,a,c,d,k;if(h.value){if(n.popoverState.value===1)return;switch(o.key){case N.Space:case N.Enter:o.preventDefault(),(a=(m=o.target).click)==null||a.call(m),n.closePopover(),(c=l(n.button))==null||c.focus();break}}else switch(o.key){case N.Space:case N.Enter:o.preventDefault(),o.stopPropagation(),n.popoverState.value===1&&(r==null||r(n.buttonId.value)),n.togglePopover();break;case N.Escape:if(n.popoverState.value!==0)return r==null?void 0:r(n.buttonId.value);if(!l(n.button)||(d=e.value)!=null&&d.activeElement&&!((k=l(n.button))!=null&&k.contains(e.value.activeElement)))return;o.preventDefault(),o.stopPropagation(),n.closePopover();break}}function B(o){h.value||o.key===N.Space&&o.preventDefault()}function S(o){var m,a;t.disabled||(h.value?(n.closePopover(),(m=l(n.button))==null||m.focus()):(o.preventDefault(),o.stopPropagation(),n.popoverState.value===1&&(r==null||r(n.buttonId.value)),n.togglePopover(),(a=l(n.button))==null||a.focus()))}function f(o){o.preventDefault(),o.stopPropagation()}let g=ue();function v(){let o=l(n.panel);if(!o)return;function m(){C(g.value,{[F.Forwards]:()=>_(o,T.First),[F.Backwards]:()=>_(o,T.Last)})===U.Error&&_(Y().filter(a=>a.dataset.headlessuiFocusGuard!=="true"),C(g.value,{[F.Forwards]:T.Next,[F.Backwards]:T.Previous}),{relativeTo:l(n.button)})}m()}return()=>{let o=n.popoverState.value===0,m={open:o},{id:a,...c}=t,d=h.value?{ref:p,type:E.value,onKeydown:y,onClick:S}:{ref:p,id:a,type:E.value,"aria-expanded":n.popoverState.value===0,"aria-controls":l(n.panel)?n.panelId.value:void 0,disabled:t.disabled?!0:void 0,onKeydown:y,onKeyup:B,onClick:S,onMousedown:f};return I(z,[X({ourProps:d,theirProps:{...u,...c},slot:m,attrs:u,slots:b,name:"PopoverButton"}),o&&!h.value&&n.isPortalled.value&&I(K,{id:w,features:V.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:v})])}}}),je=M({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-popover-panel-${O()}`}},inheritAttrs:!1,setup(t,{attrs:u,slots:b,expose:P}){let{focus:n}=t,e=J("PopoverPanel"),s=x(()=>G(e.panel)),r=`headlessui-focus-sentinel-before-${O()}`,i=`headlessui-focus-sentinel-after-${O()}`;P({el:e.panel,$el:e.panel}),oe(()=>{e.panelId.value=t.id}),re(()=>{e.panelId.value=null}),Z(ce,e.panelId),W(()=>{var f,g;if(!n||e.popoverState.value!==0||!e.panel)return;let v=(f=s.value)==null?void 0:f.activeElement;(g=l(e.panel))!=null&&g.contains(v)||_(l(e.panel),T.First)});let h=Pe(),p=x(()=>h!==null?(h.value&A.Open)===A.Open:e.popoverState.value===0);function w(f){var g,v;switch(f.key){case N.Escape:if(e.popoverState.value!==0||!l(e.panel)||s.value&&!((g=l(e.panel))!=null&&g.contains(s.value.activeElement)))return;f.preventDefault(),f.stopPropagation(),e.closePopover(),(v=l(e.button))==null||v.focus();break}}function E(f){var g,v,o,m,a;let c=f.relatedTarget;c&&l(e.panel)&&((g=l(e.panel))!=null&&g.contains(c)||(e.closePopover(),((o=(v=l(e.beforePanelSentinel))==null?void 0:v.contains)!=null&&o.call(v,c)||(a=(m=l(e.afterPanelSentinel))==null?void 0:m.contains)!=null&&a.call(m,c))&&c.focus({preventScroll:!0})))}let y=ue();function B(){let f=l(e.panel);if(!f)return;function g(){C(y.value,{[F.Forwards]:()=>{var v;_(f,T.First)===U.Error&&((v=l(e.afterPanelSentinel))==null||v.focus())},[F.Backwards]:()=>{var v;(v=l(e.button))==null||v.focus({preventScroll:!0})}})}g()}function S(){let f=l(e.panel);if(!f)return;function g(){C(y.value,{[F.Forwards]:()=>{let v=l(e.button),o=l(e.panel);if(!v)return;let m=Y(),a=m.indexOf(v),c=m.slice(0,a+1),d=[...m.slice(a+1),...c];for(let k of d.slice())if(k.dataset.headlessuiFocusGuard==="true"||o!=null&&o.contains(k)){let L=d.indexOf(k);L!==-1&&d.splice(L,1)}_(d,T.First,{sorted:!1})},[F.Backwards]:()=>{var v;_(f,T.Previous)===U.Error&&((v=l(e.button))==null||v.focus())}})}g()}return()=>{let f={open:e.popoverState.value===0,close:e.close},{id:g,focus:v,...o}=t,m={ref:e.panel,id:g,onKeydown:w,onFocusout:n&&e.popoverState.value===0?E:void 0,tabIndex:-1};return X({ourProps:m,theirProps:{...u,...o},attrs:u,slot:f,slots:{...b,default:(...a)=>{var c;return[I(z,[p.value&&e.isPortalled.value&&I(K,{id:r,ref:e.beforePanelSentinel,features:V.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:B}),(c=b.default)==null?void 0:c.call(b,...a),p.value&&e.isPortalled.value&&I(K,{id:i,ref:e.afterPanelSentinel,features:V.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:S})])]}},features:ee.RenderStrategy|ee.Static,visible:p.value,name:"PopoverPanel"})}}});const Ae={class:"grid grid-cols-1"},Qe=M({__name:"Wrapper",props:{menu:{type:Object,required:!0}},setup(t){const u=$e();xe();const{parseMenuRoute:b,parseMenuTitle:P}=_e(),n=t,e=x(()=>{var r,i,h,p;if(!((r=n.menu)!=null&&r.children))return!1;const s=((i=n.menu)==null?void 0:i.children)||[];for(const w of s){const E=b(w.to);if(typeof E=="string"&&E===u.path||(p=u.name)!=null&&p.toString().includes((h=E.name)==null?void 0:h.toString()))return!0}return!1});return(s,r)=>{const i=me,h=be,p=Re,w=je,E=ve;return t.menu.type!=="dropdown"?(D(),Q(i,{key:0,menu:t.menu},null,8,["menu"])):t.menu.children&&t.menu.children.length>0?(D(),Q(E,{key:1},{default:R(({open:y})=>[j(p,{class:"flex items-center transition-all duration-300 text-gray-900 dark:text-gray-100"},{default:R(()=>[te("span",{class:ne([le(e)?"font-bold":""])},Fe(le(P)(t.menu.title)),3),j(h,{name:"carbon:chevron-down",class:ne(["ml-1",[y?"transform rotate-180":""]])},null,8,["class"])]),_:2},1024),j(Ie,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"translate-y-1 opacity-0","enter-to-class":"translate-y-0 opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"translate-y-0 opacity-100","leave-to-class":"translate-y-1 opacity-0"},{default:R(()=>[j(w,{class:"absolute z-10 px-2 py-2 rounded-lg min-w-[150px] bg-gray-50 border-gray-300 dark:bg-gray-900 border dark:border-gray-600"},{default:R(()=>[te("div",Ae,[(D(!0),Te(z,null,Be(t.menu.children,(B,S)=>(D(),Q(i,{key:S,menu:B,"is-dropdown":""},null,8,["menu"]))),128))])]),_:1})]),_:1})]),_:1})):Ne("",!0)}}});export{Qe as _};
