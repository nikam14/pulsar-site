"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1242],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||l;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29167:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=["components"],o={id:"pulsar-client-node-1.6.2",title:"Pulsar Client Node",sidebar_label:"Pulsar Client Node"},u=void 0,s={unversionedId:"versioned/pulsar-client-node-1.6.2",id:"versioned/pulsar-client-node-1.6.2",title:"Pulsar Client Node",description:"1.6.2 &mdash; 2022-03-10",source:"@site/release-notes/versioned/pulsar-client-node-1.6.2.md",sourceDirName:"versioned",slug:"/versioned/pulsar-client-node-1.6.2",permalink:"/zh-CN/release-notes/versioned/pulsar-client-node-1.6.2",tags:[],version:"current",frontMatter:{id:"pulsar-client-node-1.6.2",title:"Pulsar Client Node",sidebar_label:"Pulsar Client Node"}},c={},p=[{value:'1.6.2 \u2014 2022-03-10 <a id="1.6.2"></a>',id:"162--2022-03-10-",level:3},{value:"Features",id:"features",level:4},{value:"Fixes",id:"fixes",level:4}],d={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"162--2022-03-10-"},"1.6.2 ","\u2014"," 2022-03-10 ",(0,l.kt)("a",{id:"1.6.2"})),(0,l.kt)("h4",{id:"features"},"Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Feature support oauth2 for node client ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/190"},"#190"))),(0,l.kt)("h4",{id:"fixes"},"Fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Upgrade libraries with security vulnerabilities ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/198"},"#198")),(0,l.kt)("li",{parentName:"ul"},"Do not add license header to tarball file ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/197"},"#197")),(0,l.kt)("li",{parentName:"ul"},"Fixed pulsar client node mac install script ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/196"},"#196")),(0,l.kt)("li",{parentName:"ul"},"Fixed windows install client ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/194"},"#194"))),(0,l.kt)("p",null,"For a complete list of issues fixed, see\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-node/issues?q=label%3Arelease%2Fv1.6.2+is%3Aclosed"},"https://github.com/apache/pulsar-client-node/issues?q=label%3Arelease%2Fv1.6.2+is%3Aclosed")))}f.isMDXComponent=!0}}]);