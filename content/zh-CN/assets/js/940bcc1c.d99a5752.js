"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3028],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var u={};for(var s in r)hasOwnProperty.call(r,s)&&(u[s]=r[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},46864:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],u={id:"pulsar-cs-0.9.6",title:"Pulsar DotPulsar",sidebar_label:"Pulsar DotPulsar"},s=void 0,l={unversionedId:"versioned/pulsar-cs-0.9.6",id:"versioned/pulsar-cs-0.9.6",title:"Pulsar DotPulsar",description:"Fixed",source:"@site/release-notes/versioned/pulsar-cs-0.9.6.md",sourceDirName:"versioned",slug:"/versioned/pulsar-cs-0.9.6",permalink:"/zh-CN/release-notes/versioned/pulsar-cs-0.9.6",tags:[],version:"current",frontMatter:{id:"pulsar-cs-0.9.6",title:"Pulsar DotPulsar",sidebar_label:"Pulsar DotPulsar"}},c={},p=[{value:"Fixed",id:"fixed",level:2}],f={toc:p};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"fixed"},"Fixed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed missing metadata properties in batched messages containing only one message"),(0,a.kt)("li",{parentName:"ul"},"Fixed potential torn reads in EventCounters")))}d.isMDXComponent=!0}}]);