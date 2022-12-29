"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1265],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(n),d=o,m=l["".concat(s,".").concat(d)]||l[d]||h[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={id:"concepts-authentication",title:"Authentication and Authorization",sidebar_label:"Authentication and Authorization"},i=void 0,c={unversionedId:"concepts-authentication",id:"version-2.2.1/concepts-authentication",title:"Authentication and Authorization",description:"Pulsar supports a pluggable authentication mechanism which can be configured at the proxy and/or the broker. Pulsar also supports a pluggable authorization mechanism. These mechanisms work together to identify the client and its access rights on topics, namespaces and tenants.",source:"@site/versioned_docs/version-2.2.1/concepts-authentication.md",sourceDirName:".",slug:"/concepts-authentication",permalink:"/docs/2.2.1/concepts-authentication",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/concepts-authentication.md",tags:[],version:"2.2.1",frontMatter:{id:"concepts-authentication",title:"Authentication and Authorization",sidebar_label:"Authentication and Authorization"},sidebar:"version-2.2.1/docsSidebar",previous:{title:"Multi Tenancy",permalink:"/docs/2.2.1/concepts-multi-tenancy"},next:{title:"Topic Compaction",permalink:"/docs/2.2.1/concepts-topic-compaction"}},s={},p=[],u={toc:p};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pulsar supports a pluggable ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.2.1/security-overview"},"authentication")," mechanism which can be configured at the proxy and/or the broker. Pulsar also supports a pluggable ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.2.1/security-authorization"},"authorization")," mechanism. These mechanisms work together to identify the client and its access rights on topics, namespaces and tenants."))}l.isMDXComponent=!0}}]);