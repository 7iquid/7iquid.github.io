import{l as a,m as i,T as u,o as f,c as m,s as d}from"./entry.924d1443.js";const v=(c,r,s=()=>{},o=!0,n={threshold:1})=>{const t=new IntersectionObserver(([e])=>{e&&e.isIntersecting?(r(e.target),o&&t.unobserve(e.target)):s()},n);return t.observe(c),t},b={__name:"intersec",emits:["enter","exit"],setup(c,{emit:r}){const s=a({}),o=a({}),n=r,t=()=>{n("enter")},e=()=>{n("exit")};return i(()=>{s.value=v(o.value,t,e,!1,{threshold:.8})}),u(()=>{s.value.disconnect()}),(l,_)=>(f(),m("section",{ref_key:"scrollRef",ref:o},[d(l.$slots,"default")],512))}};export{b as default};
