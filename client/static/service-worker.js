if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,t)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return c;default:return e(r)}})).then(e=>{const r=t(...e);return s.default||(s.default=r),s})}))}}define("./service-worker.js",["./workbox-7b6376f1"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/index.html",revision:"c49662878fb1dc8f4084b2623133b3f2"},{url:"/static/css/main.10d65f01.chunk.css",revision:"43b39a9b1ee4c5b616bda1f9f4f8a6c0"},{url:"/static/js/2.80186b4e.chunk.js",revision:"974b8f7a9d8f1d5d5b52f03b3c6a20e6"},{url:"/static/js/2.80186b4e.chunk.js.LICENSE.txt",revision:"dd3bc270f31e89e6f942743193a38f1a"},{url:"/static/js/3.1cbe8952.chunk.js",revision:"553b3fbe55daf8a0ae0080ba17da6a55"},{url:"/static/js/main.ad3fe7f5.chunk.js",revision:"a60dd87a22b91a585ba62058f867da7c"},{url:"/static/js/runtime-main.90432c2f.js",revision:"e49e3cd1d3d513d01114f3ea8cf1530e"}],{})}));
//# sourceMappingURL=service-worker.js.map
