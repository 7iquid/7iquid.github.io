import{f as m,ao as f,g as _,l as a,o as d,c as I,O as v}from"./entry.a06282a2.js";import{r as x}from"./index.b8fe2cb5.js";import{_ as S}from"./_plugin-vue_export-helper.c27b6911.js";const y=m({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){f(e=>({efdb04fa:p.value}));const o=_(),t=u,l=a(()=>{var e,n;return(n=(e=o.nuxtIcon)==null?void 0:e.aliases)!=null&&n[t.name]?o.nuxtIcon.aliases[t.name]:t.name}),c=a(()=>x(l.value)),p=a(()=>{var s,r;const e=(r=(s=o.nuxtIcon)==null?void 0:s.iconifyApiOptions)==null?void 0:r.url;if(e)try{new URL(e)}catch{console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");return}return`url('${e||"https://api.iconify.design"}/${c.value.prefix}/${c.value.name}.svg')`}),i=a(()=>{var n,s,r;if(!t.size&&typeof((n=o.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((s=o.nuxtIcon)!=null&&s.size))return;const e=t.size||((r=o.nuxtIcon)==null?void 0:r.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,n)=>(d(),I("span",{style:v({width:i.value,height:i.value})},null,4))}});const U=S(y,[["__scopeId","data-v-41e8d397"]]);export{U as default};
