import{o as y,u as $,c as se,l as H,K as de,H as A,T as pe,t as U,p as ve,N as W}from"./open-closed.ca44c22a.js";import{y as ce,c as fe,h as be,f as me,a as ge,b as xe,O as ye,o as g}from"./hidden.01b6467e.js";import{k as S,l as x,f as B,U as D,ab as he,x as K,P as ae,C as X,F as q,a3 as ke,ac as Oe,T as F,ad as Se,a1 as Le,o as _,c as N,m as Y,h as E,w as V,b as I,d as G,a as j,r as J,n as we,q as z,t as Z,ag as De,ah as Re}from"./entry.930a9958.js";import Te from"./Icon.52289842.js";import{_ as _e}from"./index.vue.d609aa4b.js";function $e(t){throw new Error("Unexpected object: "+t)}var h=(t=>(t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing",t))(h||{});function Pe(t,a){let l=a.resolveItems();if(l.length<=0)return null;let u=a.resolveActiveIndex(),e=u??-1,r=(()=>{switch(t.focus){case 0:return l.findIndex(i=>!a.resolveDisabled(i));case 1:{let i=l.slice().reverse().findIndex((p,m,o)=>e!==-1&&o.length-m-1>=e?!1:!a.resolveDisabled(p));return i===-1?i:l.length-1-i}case 2:return l.findIndex((i,p)=>p<=e?!1:!a.resolveDisabled(i));case 3:{let i=l.slice().reverse().findIndex(p=>!a.resolveDisabled(p));return i===-1?i:l.length-1-i}case 4:return l.findIndex(i=>a.resolveId(i)===t.id);case 5:return null;default:$e(t)}})();return r===-1?u:r}function oe(t={},a=null,l=[]){for(let[u,e]of Object.entries(t))re(l,ne(a,u),e);return l}function ne(t,a){return t?t+"["+a+"]":a}function re(t,a,l){if(Array.isArray(l))for(let[u,e]of l.entries())re(t,ne(a,u.toString()),e);else l instanceof Date?t.push([a,l.toISOString()]):typeof l=="boolean"?t.push([a,l?"1":"0"]):typeof l=="string"?t.push([a,l]):typeof l=="number"?t.push([a,`${l}`]):l==null?t.push([a,""]):oe(l,a,t)}function Ie(t,a,l){let u=S(l==null?void 0:l.value),e=x(()=>t.value!==void 0);return[x(()=>e.value?t.value:u.value),function(r){return e.value||(u.value=r),a==null?void 0:a(r)}]}function ee(t){return[t.screenX,t.screenY]}function Fe(){let t=S([-1,-1]);return{wasMoved(a){let l=ee(a);return t.value[0]===l[0]&&t.value[1]===l[1]?!1:(t.value=l,!0)},update(a){t.value=ee(a)}}}let te=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function le(t){var a,l;let u=(a=t.innerText)!=null?a:"",e=t.cloneNode(!0);if(!(e instanceof HTMLElement))return u;let r=!1;for(let p of e.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))p.remove(),r=!0;let i=r?(l=e.innerText)!=null?l:"":u;return te.test(i)&&(i=i.replace(te,"")),i}function Ve(t){let a=t.getAttribute("aria-label");if(typeof a=="string")return a.trim();let l=t.getAttribute("aria-labelledby");if(l){let u=l.split(" ").map(e=>{let r=document.getElementById(e);if(r){let i=r.getAttribute("aria-label");return typeof i=="string"?i.trim():le(r).trim()}return null}).filter(Boolean);if(u.length>0)return u.join(", ")}return le(t).trim()}function Be(t){let a=S(""),l=S("");return()=>{let u=y(t);if(!u)return"";let e=u.innerText;if(a.value===e)return l.value;let r=Ve(u).trim().toLowerCase();return a.value=e,l.value=r,r}}function Me(t,a){return t===a}var Ae=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(Ae||{}),Ce=(t=>(t[t.Single=0]="Single",t[t.Multi=1]="Multi",t))(Ce||{}),Ne=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(Ne||{});function Ee(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let ie=Symbol("ListboxContext");function C(t){let a=Se(ie,null);if(a===null){let l=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,C),l}return a}let je=B({name:"Listbox",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>Me},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(t,{slots:a,attrs:l,emit:u}){let e=S(1),r=S(null),i=S(null),p=S(null),m=S([]),o=S(""),n=S(null),L=S(1);function w(s=d=>d){let d=n.value!==null?m.value[n.value]:null,c=ye(s(m.value.slice()),O=>y(O.dataRef.domRef)),b=d?c.indexOf(d):null;return b===-1&&(b=null),{options:c,activeOptionIndex:b}}let v=x(()=>t.multiple?1:0),[R,P]=Ie(x(()=>t.modelValue),s=>u("update:modelValue",s),x(()=>t.defaultValue)),T=x(()=>R.value===void 0?$(v.value,{1:[],0:void 0}):R.value),f={listboxState:e,value:T,mode:v,compare(s,d){if(typeof t.by=="string"){let c=t.by;return(s==null?void 0:s[c])===(d==null?void 0:d[c])}return t.by(s,d)},orientation:x(()=>t.horizontal?"horizontal":"vertical"),labelRef:r,buttonRef:i,optionsRef:p,disabled:x(()=>t.disabled),options:m,searchQuery:o,activeOptionIndex:n,activationTrigger:L,closeListbox(){t.disabled||e.value!==1&&(e.value=1,n.value=null)},openListbox(){t.disabled||e.value!==0&&(e.value=0)},goToOption(s,d,c){if(t.disabled||e.value===1)return;let b=w(),O=Pe(s===h.Specific?{focus:h.Specific,id:d}:{focus:s},{resolveItems:()=>b.options,resolveActiveIndex:()=>b.activeOptionIndex,resolveId:M=>M.id,resolveDisabled:M=>M.dataRef.disabled});o.value="",n.value=O,L.value=c??1,m.value=b.options},search(s){if(t.disabled||e.value===1)return;let d=o.value!==""?0:1;o.value+=s.toLowerCase();let c=(n.value!==null?m.value.slice(n.value+d).concat(m.value.slice(0,n.value+d)):m.value).find(O=>O.dataRef.textValue.startsWith(o.value)&&!O.dataRef.disabled),b=c?m.value.indexOf(c):-1;b===-1||b===n.value||(n.value=b,L.value=1)},clearSearch(){t.disabled||e.value!==1&&o.value!==""&&(o.value="")},registerOption(s,d){let c=w(b=>[...b,{id:s,dataRef:d}]);m.value=c.options,n.value=c.activeOptionIndex},unregisterOption(s){let d=w(c=>{let b=c.findIndex(O=>O.id===s);return b!==-1&&c.splice(b,1),c});m.value=d.options,n.value=d.activeOptionIndex,L.value=1},theirOnChange(s){t.disabled||P(s)},select(s){t.disabled||P($(v.value,{0:()=>s,1:()=>{let d=D(f.value.value).slice(),c=D(s),b=d.findIndex(O=>f.compare(c,D(O)));return b===-1?d.push(c):d.splice(b,1),d}}))}};ce([i,p],(s,d)=>{var c;f.closeListbox(),fe(d,be.Loose)||(s.preventDefault(),(c=y(i))==null||c.focus())},x(()=>e.value===0)),he(ie,f),se(x(()=>$(e.value,{0:H.Open,1:H.Closed})));let k=x(()=>{var s;return(s=y(i))==null?void 0:s.closest("form")});return K(()=>{ae([k],()=>{if(!k.value||t.defaultValue===void 0)return;function s(){f.theirOnChange(t.defaultValue)}return k.value.addEventListener("reset",s),()=>{var d;(d=k.value)==null||d.removeEventListener("reset",s)}},{immediate:!0})}),()=>{let{name:s,modelValue:d,disabled:c,form:b,...O}=t,M={open:e.value===0,disabled:c,value:T.value};return X(q,[...s!=null&&T.value!=null?oe({[s]:T.value}).map(([Q,ue])=>X(me,de({features:ge.Hidden,key:Q,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:b,name:Q,value:ue}))):[],A({ourProps:{},theirProps:{...l,...pe(O,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:M,slots:a,attrs:l,name:"Listbox"})])}}}),He=B({name:"ListboxLabel",props:{as:{type:[Object,String],default:"label"},id:{type:String,default:()=>`headlessui-listbox-label-${U()}`}},setup(t,{attrs:a,slots:l}){let u=C("ListboxLabel");function e(){var r;(r=y(u.buttonRef))==null||r.focus({preventScroll:!0})}return()=>{let r={open:u.listboxState.value===0,disabled:u.disabled.value},{id:i,...p}=t,m={id:i,ref:u.labelRef,onClick:e};return A({ourProps:m,theirProps:p,slot:r,attrs:a,slots:l,name:"ListboxLabel"})}}}),Ue=B({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-listbox-button-${U()}`}},setup(t,{attrs:a,slots:l,expose:u}){let e=C("ListboxButton");u({el:e.buttonRef,$el:e.buttonRef});function r(o){switch(o.key){case g.Space:case g.Enter:case g.ArrowDown:o.preventDefault(),e.openListbox(),F(()=>{var n;(n=y(e.optionsRef))==null||n.focus({preventScroll:!0}),e.value.value||e.goToOption(h.First)});break;case g.ArrowUp:o.preventDefault(),e.openListbox(),F(()=>{var n;(n=y(e.optionsRef))==null||n.focus({preventScroll:!0}),e.value.value||e.goToOption(h.Last)});break}}function i(o){switch(o.key){case g.Space:o.preventDefault();break}}function p(o){e.disabled.value||(e.listboxState.value===0?(e.closeListbox(),F(()=>{var n;return(n=y(e.buttonRef))==null?void 0:n.focus({preventScroll:!0})})):(o.preventDefault(),e.openListbox(),Ee(()=>{var n;return(n=y(e.optionsRef))==null?void 0:n.focus({preventScroll:!0})})))}let m=xe(x(()=>({as:t.as,type:a.type})),e.buttonRef);return()=>{var o,n;let L={open:e.listboxState.value===0,disabled:e.disabled.value,value:e.value.value},{id:w,...v}=t,R={ref:e.buttonRef,id:w,type:m.value,"aria-haspopup":"listbox","aria-controls":(o=y(e.optionsRef))==null?void 0:o.id,"aria-expanded":e.listboxState.value===0,"aria-labelledby":e.labelRef.value?[(n=y(e.labelRef))==null?void 0:n.id,w].join(" "):void 0,disabled:e.disabled.value===!0?!0:void 0,onKeydown:r,onKeyup:i,onClick:p};return A({ourProps:R,theirProps:v,slot:L,attrs:a,slots:l,name:"ListboxButton"})}}}),ze=B({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-listbox-options-${U()}`}},setup(t,{attrs:a,slots:l,expose:u}){let e=C("ListboxOptions"),r=S(null);u({el:e.optionsRef,$el:e.optionsRef});function i(o){switch(r.value&&clearTimeout(r.value),o.key){case g.Space:if(e.searchQuery.value!=="")return o.preventDefault(),o.stopPropagation(),e.search(o.key);case g.Enter:if(o.preventDefault(),o.stopPropagation(),e.activeOptionIndex.value!==null){let n=e.options.value[e.activeOptionIndex.value];e.select(n.dataRef.value)}e.mode.value===0&&(e.closeListbox(),F(()=>{var n;return(n=y(e.buttonRef))==null?void 0:n.focus({preventScroll:!0})}));break;case $(e.orientation.value,{vertical:g.ArrowDown,horizontal:g.ArrowRight}):return o.preventDefault(),o.stopPropagation(),e.goToOption(h.Next);case $(e.orientation.value,{vertical:g.ArrowUp,horizontal:g.ArrowLeft}):return o.preventDefault(),o.stopPropagation(),e.goToOption(h.Previous);case g.Home:case g.PageUp:return o.preventDefault(),o.stopPropagation(),e.goToOption(h.First);case g.End:case g.PageDown:return o.preventDefault(),o.stopPropagation(),e.goToOption(h.Last);case g.Escape:o.preventDefault(),o.stopPropagation(),e.closeListbox(),F(()=>{var n;return(n=y(e.buttonRef))==null?void 0:n.focus({preventScroll:!0})});break;case g.Tab:o.preventDefault(),o.stopPropagation();break;default:o.key.length===1&&(e.search(o.key),r.value=setTimeout(()=>e.clearSearch(),350));break}}let p=ve(),m=x(()=>p!==null?(p.value&H.Open)===H.Open:e.listboxState.value===0);return()=>{var o,n,L,w;let v={open:e.listboxState.value===0},{id:R,...P}=t,T={"aria-activedescendant":e.activeOptionIndex.value===null||(o=e.options.value[e.activeOptionIndex.value])==null?void 0:o.id,"aria-multiselectable":e.mode.value===1?!0:void 0,"aria-labelledby":(w=(n=y(e.labelRef))==null?void 0:n.id)!=null?w:(L=y(e.buttonRef))==null?void 0:L.id,"aria-orientation":e.orientation.value,id:R,onKeydown:i,role:"listbox",tabIndex:0,ref:e.optionsRef};return A({ourProps:T,theirProps:P,slot:v,attrs:a,slots:l,features:W.RenderStrategy|W.Static,visible:m.value,name:"ListboxOptions"})}}}),Ke=B({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-listbox.option-${U()}`}},setup(t,{slots:a,attrs:l,expose:u}){let e=C("ListboxOption"),r=S(null);u({el:r,$el:r});let i=x(()=>e.activeOptionIndex.value!==null?e.options.value[e.activeOptionIndex.value].id===t.id:!1),p=x(()=>$(e.mode.value,{0:()=>e.compare(D(e.value.value),D(t.value)),1:()=>D(e.value.value).some(f=>e.compare(D(f),D(t.value)))})),m=x(()=>$(e.mode.value,{1:()=>{var f;let k=D(e.value.value);return((f=e.options.value.find(s=>k.some(d=>e.compare(D(d),D(s.dataRef.value)))))==null?void 0:f.id)===t.id},0:()=>p.value})),o=Be(r),n=x(()=>({disabled:t.disabled,value:t.value,get textValue(){return o()},domRef:r}));K(()=>e.registerOption(t.id,n)),ke(()=>e.unregisterOption(t.id)),K(()=>{ae([e.listboxState,p],()=>{e.listboxState.value===0&&p.value&&$(e.mode.value,{1:()=>{m.value&&e.goToOption(h.Specific,t.id)},0:()=>{e.goToOption(h.Specific,t.id)}})},{immediate:!0})}),Oe(()=>{e.listboxState.value===0&&i.value&&e.activationTrigger.value!==0&&F(()=>{var f,k;return(k=(f=y(r))==null?void 0:f.scrollIntoView)==null?void 0:k.call(f,{block:"nearest"})})});function L(f){if(t.disabled)return f.preventDefault();e.select(t.value),e.mode.value===0&&(e.closeListbox(),F(()=>{var k;return(k=y(e.buttonRef))==null?void 0:k.focus({preventScroll:!0})}))}function w(){if(t.disabled)return e.goToOption(h.Nothing);e.goToOption(h.Specific,t.id)}let v=Fe();function R(f){v.update(f)}function P(f){v.wasMoved(f)&&(t.disabled||i.value||e.goToOption(h.Specific,t.id,0))}function T(f){v.wasMoved(f)&&(t.disabled||i.value&&e.goToOption(h.Nothing))}return()=>{let{disabled:f}=t,k={active:i.value,selected:p.value,disabled:f},{id:s,value:d,disabled:c,...b}=t,O={id:s,ref:r,role:"option",tabIndex:f===!0?void 0:-1,"aria-disabled":f===!0?!0:void 0,"aria-selected":p.value,disabled:void 0,onClick:L,onFocus:w,onPointerenter:R,onMouseenter:R,onPointermove:P,onMousemove:P,onPointerleave:T,onMouseleave:T};return A({ourProps:O,theirProps:b,slot:k,attrs:l,slots:a,name:"ListboxOption"})}}});const qe={class:"flex items-center"},Qe={class:"flex justify-center items-center dark:hidden"},We={class:"justify-center items-center hidden dark:flex"},Xe={class:"text-sm mr-2 flex items-center"},Ye=["value"],lt=B({__name:"ThemeSwitcher",props:{type:{type:String,default:"dropdown-right-top"}},setup(t){const l=Le(t,"type"),u=[{key:"light",text:"Light"},{key:"dark",text:"Dark"},{key:"system",text:"System"}];return(e,r)=>{const i=He,p=Te,m=_e,o=Ue,n=Ke,L=ze,w=je;return _(),N("div",qe,[Y(l)==="dropdown-right-top"?(_(),E(w,{key:0,modelValue:e.$colorMode.preference,"onUpdate:modelValue":r[0]||(r[0]=v=>e.$colorMode.preference=v),as:"div",class:"relative flex items-center"},{default:V(()=>[I(i,{class:"sr-only"},{default:V(()=>[G("Theme")]),_:1}),I(o,{type:"template"},{default:V(()=>[I(m,{class:"dark:text-gray-400 text-gray-600"},{default:V(()=>[j("span",Qe,[I(p,{name:"uil:sun"})]),j("span",We,[I(p,{name:"uil:moon"})])]),_:1})]),_:1}),I(L,{class:"p-1 absolute z-50 origin-top-right top-full right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300"},{default:V(()=>[(_(),N(q,null,J(u,v=>I(n,{key:v.key,value:v.key,class:we({"py-2 px-2 flex items-center cursor-pointer":!0,"text-sky-500 bg-gray-100 dark:bg-gray-600/30":e.$colorMode.preference===v.key,"hover:bg-gray-50 dark:hover:bg-gray-700/30":e.$colorMode.preference!==v.key})},{default:V(()=>[j("span",Xe,[v.key==="light"?(_(),E(p,{key:0,name:"uil:sun"})):v.key==="dark"?(_(),E(p,{key:1,name:"uil:moon"})):v.key==="system"?(_(),E(p,{key:2,name:"uil:laptop"})):z("",!0)]),G(" "+Z(v.text),1)]),_:2},1032,["value","class"])),64))]),_:1})]),_:1},8,["modelValue"])):z("",!0),Y(l)==="select-box"?De((_(),N("select",{key:1,"onUpdate:modelValue":r[1]||(r[1]=v=>e.$colorMode.preference=v),class:"w-full px-2 pr-3 py-1 outline-none rounded border bg-transparent text-gray-700 dark:text-gray-300 border-gray-900/10 dark:border-gray-50/[0.2]"},[(_(),N(q,null,J(u,v=>j("option",{key:v.key,value:v.key},Z(v.text),9,Ye)),64))],512)),[[Re,e.$colorMode.preference]]):z("",!0)])}}});export{lt as _};
