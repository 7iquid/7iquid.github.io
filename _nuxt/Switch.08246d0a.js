import{u as h}from"./use-sync-props.b7a371cd.js";import{f as b,m as c,s as g,o as m,c as _,a as d,j as e,C as k}from"./entry.85ce1877.js";const y=["for"],v=["for"],w=["id","checked"],S=["for"],B=b({__name:"Switch",props:{modelValue:{type:Boolean,default:!1},on:{type:Boolean,default:!1},id:{type:String,default:void 0}},emits:["update:modelValue"],setup(i,{emit:u}){const t=i,r=u,f=()=>Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),o=c(t.id||f()),a=c(),n=h(t,"modelValue",r),p=s=>{const l=s.target;n.value=l.checked,r("update:modelValue",l.checked)};return g(()=>{t.on&&(n.value=!0,r("update:modelValue",!0),a.value&&(a.value.checked=!0))}),(s,l)=>(m(),_("label",{for:e(o),class:"flex cursor-pointer"},[d("label",{for:e(o),class:"relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"},[d("input",{id:e(o),ref_key:"input",ref:a,type:"checkbox",class:"switch-checkbox absolute block w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-600 appearance-none cursor-pointer",checked:e(n),onChange:p},null,40,w),d("label",{for:e(o),class:"switch-label block overflow-hidden h-6 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer border border-gray-300 dark:border-gray-500"},null,8,S)],8,v),k(s.$slots,"default")],8,y))}});export{B as default};
