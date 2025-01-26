import{n as x,a9 as y,aa as h,x as k,z as T,ab as S,ac as b,ad as m}from"./entry.bf47e341.js";const d=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function E(e,r){if(typeof e!="string")throw new TypeError("argument str must be a string");const i={},a=(r||{}).decode||I;let s=0;for(;s<e.length;){const o=e.indexOf("=",s);if(o===-1)break;let n=e.indexOf(";",s);if(n===-1)n=e.length;else if(n<o){s=e.lastIndexOf(";",o-1)+1;continue}const u=e.slice(s,o).trim();if(i[u]===void 0){let c=e.slice(o+1,n).trim();c.codePointAt(0)===34&&(c=c.slice(1,-1)),i[u]=A(c,a)}s=n+1}return i}function w(e,r,i){const t=i||{},a=t.encode||P;if(typeof a!="function")throw new TypeError("option encode is invalid");if(!d.test(e))throw new TypeError("argument name is invalid");const s=a(r);if(s&&!d.test(s))throw new TypeError("argument val is invalid");let o=e+"="+s;if(t.maxAge!==void 0&&t.maxAge!==null){const n=t.maxAge-0;if(Number.isNaN(n)||!Number.isFinite(n))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(n)}if(t.domain){if(!d.test(t.domain))throw new TypeError("option domain is invalid");o+="; Domain="+t.domain}if(t.path){if(!d.test(t.path))throw new TypeError("option path is invalid");o+="; Path="+t.path}if(t.expires){if(!C(t.expires)||Number.isNaN(t.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+t.expires.toUTCString()}if(t.httpOnly&&(o+="; HttpOnly"),t.secure&&(o+="; Secure"),t.priority)switch(typeof t.priority=="string"?t.priority.toLowerCase():t.priority){case"low":o+="; Priority=Low";break;case"medium":o+="; Priority=Medium";break;case"high":o+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(t.sameSite)switch(typeof t.sameSite=="string"?t.sameSite.toLowerCase():t.sameSite){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o}function C(e){return Object.prototype.toString.call(e)==="[object Date]"||e instanceof Date}function A(e,r){try{return r(e)}catch{return e}}function I(e){return e.includes("%")?decodeURIComponent(e):e}function P(e){return encodeURIComponent(e)}const O={path:"/",watch:!0,decode:e=>b(decodeURIComponent(e)),encode:e=>encodeURIComponent(typeof e=="string"?e:JSON.stringify(e))};function l(e,r){var u;const i={...O,...r},t=R(i)||{};let a;i.maxAge!==void 0?a=i.maxAge*1e3:i.expires&&(a=i.expires.getTime()-Date.now());const s=a!==void 0&&a<=0,o=s?void 0:t[e]??((u=i.default)==null?void 0:u.call(i)),n=a&&!s?L(o,a):x(o);{const c=typeof BroadcastChannel>"u"?null:new BroadcastChannel(`nuxt:cookies:${e}`),f=()=>{N(e,n.value,i),c==null||c.postMessage(i.encode(n.value))};let p=!1;y()&&h(()=>{p=!0,f(),c==null||c.close()}),c&&(c.onmessage=v=>{p=!0,n.value=i.decode(v.data),k(()=>{p=!1})}),i.watch?T(n,()=>{p||f()},{deep:i.watch!=="shallow"}):f()}return n}function R(e={}){return E(document.cookie,e)}function D(e,r,i={}){return r==null?w(e,r,{...i,maxAge:-1}):w(e,r,i)}function N(e,r,i={}){document.cookie=D(e,r,i)}const g=2147483647;function L(e,r){let i,t=0;return y()&&h(()=>{clearTimeout(i)}),S((a,s)=>{function o(){clearTimeout(i);const n=r-t,u=n<g?n:g;i=setTimeout(()=>{if(t+=u,t<r)return o();e=void 0,s()},u)}return{get(){return a(),e},set(n){o(),e=n,s()}}})}const U=()=>({isEnabled:()=>{const t=m().query;return Object.prototype.hasOwnProperty.call(t,"preview")&&!t.preview?!1:!!(t.preview||l("previewToken").value||sessionStorage.getItem("previewToken"))},getPreviewToken:()=>l("previewToken").value||sessionStorage.getItem("previewToken")||void 0,setPreviewToken:t=>{l("previewToken").value=t,m().query.preview=t||"",t?sessionStorage.setItem("previewToken",t):sessionStorage.removeItem("previewToken"),window.location.reload()}});export{U as u};
