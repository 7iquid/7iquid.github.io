import{n as a,v as i,y as u,o as f,c as m,D as v}from"./entry.78f70462.js";const d=(c,r,s=()=>{},n=!0,o={threshold:1})=>{const t=new IntersectionObserver(([e])=>{e&&e.isIntersecting?(r(e.target),n&&t.unobserve(e.target)):s()},o);return t.observe(c),t},b={__name:"intersec",emits:["enter","exit"],setup(c,{emit:r}){const s=a({}),n=a({}),o=r,t=()=>{o("enter")},e=()=>{o("exit")};return i(()=>{s.value=d(n.value,t,e,!1,{threshold:.8})}),u(()=>{s.value.disconnect()}),(l,_)=>(f(),m("section",{ref_key:"scrollRef",ref:n},[v(l.$slots,"default")],512))}};export{b as default};
