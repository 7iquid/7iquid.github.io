import{N as oe,C as ue,t as se,S as g,u as x,o as W,c as de,a as fe,H as Y,p as ve,T as pe,l as p}from"./open-closed.11c1f8ea.js";import{f as Z,k as b,C as _,l as w,x as E,a3 as G,ac as A,P as ce,ab as H,n as me,ad as j}from"./entry.79f1c460.js";function he(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function ge(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function q(){let e=[],t={addEventListener(n,r,i,a){return n.addEventListener(r,i,a),t.add(()=>n.removeEventListener(r,i,a))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let r=setTimeout(...n);t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return he(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,i){let a=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:i}),this.add(()=>{Object.assign(n.style,{[r]:a})})},group(n){let r=q();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let i of e.splice(r,1))i()}},dispose(){for(let n of e.splice(0))n()}};return t}function O(e,...t){e&&t.length>0&&e.classList.add(...t)}function F(e,...t){e&&t.length>0&&e.classList.remove(...t)}var P=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(P||{});function be(e,t){let n=q();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(e),[a,l]=[r,i].map(o=>{let[u=0]=o.split(",").filter(Boolean).map(s=>s.includes("ms")?parseFloat(s):parseFloat(s)*1e3).sort((s,d)=>d-s);return u});return a!==0?n.setTimeout(()=>t("finished"),a+l):t("finished"),n.add(()=>t("cancelled")),n.dispose}function X(e,t,n,r,i,a){let l=q(),o=a!==void 0?ge(a):()=>{};return F(e,...i),O(e,...t,...n),l.nextFrame(()=>{F(e,...n),O(e,...r),l.add(be(e,u=>(F(e,...r,...t),O(e,...i),o(u))))}),l.add(()=>F(e,...t,...n,...r,...i)),l.add(()=>o("cancelled")),l.dispose}function h(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let M=Symbol("TransitionContext");var ye=(e=>(e.Visible="visible",e.Hidden="hidden",e))(ye||{});function Ee(){return j(M,null)!==null}function Se(){let e=j(M,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Te(){let e=j(D,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let D=Symbol("NestingContext");function C(e){return"children"in e?C(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function J(e){let t=b([]),n=b(!1);E(()=>n.value=!0),G(()=>n.value=!1);function r(a,l=g.Hidden){let o=t.value.findIndex(({id:u})=>u===a);o!==-1&&(x(l,{[g.Unmount](){t.value.splice(o,1)},[g.Hidden](){t.value[o].state="hidden"}}),!C(t)&&n.value&&(e==null||e()))}function i(a){let l=t.value.find(({id:o})=>o===a);return l?l.state!=="visible"&&(l.state="visible"):t.value.push({id:a,state:"visible"}),()=>r(a,g.Unmount)}return{children:t,register:i,unregister:r}}let K=oe.RenderStrategy,Le=Z({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:r,expose:i}){let a=b(0);function l(){a.value|=p.Opening,t("beforeEnter")}function o(){a.value&=~p.Opening,t("afterEnter")}function u(){a.value|=p.Closing,t("beforeLeave")}function s(){a.value&=~p.Closing,t("afterLeave")}if(!Ee()&&ue())return()=>_(we,{...e,onBeforeEnter:l,onAfterEnter:o,onBeforeLeave:u,onAfterLeave:s},r);let d=b(null),S=w(()=>e.unmount?g.Unmount:g.Hidden);i({el:d,$el:d});let{show:c,appear:U}=Se(),{register:k,unregister:B}=Te(),f=b(c.value?"visible":"hidden"),N={value:!0},y=se(),T={value:!1},R=J(()=>{!T.value&&f.value!=="hidden"&&(f.value="hidden",B(y),s())});E(()=>{let v=k(y);G(v)}),A(()=>{if(S.value===g.Hidden&&y){if(c.value&&f.value!=="visible"){f.value="visible";return}x(f.value,{hidden:()=>B(y),visible:()=>k(y)})}});let V=h(e.enter),I=h(e.enterFrom),ee=h(e.enterTo),z=h(e.entered),te=h(e.leave),ne=h(e.leaveFrom),re=h(e.leaveTo);E(()=>{A(()=>{if(f.value==="visible"){let v=W(d);if(v instanceof Comment&&v.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function ae(v){let $=N.value&&!U.value,m=W(d);!m||!(m instanceof HTMLElement)||$||(T.value=!0,c.value&&l(),c.value||u(),v(c.value?X(m,V,I,ee,z,L=>{T.value=!1,L===P.Finished&&o()}):X(m,te,ne,re,z,L=>{T.value=!1,L===P.Finished&&(C(R)||(f.value="hidden",B(y),s()))})))}return E(()=>{ce([c],(v,$,m)=>{ae(m),N.value=!1},{immediate:!0})}),H(D,R),de(w(()=>x(f.value,{visible:p.Open,hidden:p.Closed})|a.value)),()=>{let{appear:v,show:$,enter:m,enterFrom:L,enterTo:Ae,entered:Ce,leave:Be,leaveFrom:$e,leaveTo:Oe,...Q}=e,le={ref:d},ie={...Q,...U.value&&c.value&&fe.isServer?{class:me([n.class,Q.class,...V,...I])}:{}};return Y({theirProps:ie,ourProps:le,slot:{},slots:r,attrs:n,features:K,visible:f.value==="visible",name:"TransitionChild"})}}}),Fe=Le,we=Z({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:r}){let i=ve(),a=w(()=>e.show===null&&i!==null?(i.value&p.Open)===p.Open:e.show);A(()=>{if(![!0,!1].includes(a.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let l=b(a.value?"visible":"hidden"),o=J(()=>{l.value="hidden"}),u=b(!0),s={show:a,appear:w(()=>e.appear||!u.value)};return E(()=>{A(()=>{u.value=!1,a.value?l.value="visible":C(o)||(l.value="hidden")})}),H(D,o),H(M,s),()=>{let d=pe(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),S={unmount:e.unmount};return Y({ourProps:{...S,as:"template"},theirProps:{},slot:{},slots:{...r,default:()=>[_(Fe,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...S,...d},r.default)]},attrs:{},features:K,visible:l.value==="visible",name:"Transition"})}}});export{we as S,Le as h};
