"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[96886],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||l;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88677:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"pulsar-client-node-1.3.1",title:"Pulsar Client Node",sidebar_label:"Pulsar Client Node"},u=void 0,p={unversionedId:"versioned/pulsar-client-node-1.3.1",id:"versioned/pulsar-client-node-1.3.1",title:"Pulsar Client Node",description:"1.3.1 &mdash; 2021-09-17",source:"@site/release-notes/versioned/pulsar-client-node-1.3.1.md",sourceDirName:"versioned",slug:"/versioned/pulsar-client-node-1.3.1",permalink:"/ko/release-notes/versioned/pulsar-client-node-1.3.1",tags:[],version:"current",frontMatter:{id:"pulsar-client-node-1.3.1",title:"Pulsar Client Node",sidebar_label:"Pulsar Client Node"}},c={},s=[{value:'1.3.1 \u2014 2021-09-17 <a id="1.3.1"></a>',id:"131--2021-09-17-",level:3},{value:"Fixes",id:"fixes",level:4}],d={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"131--2021-09-17-"},"1.3.1 ","\u2014"," 2021-09-17 ",(0,l.kt)("a",{id:"1.3.1"})),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/pulsar-client/v/1.3.1"},"https://www.npmjs.com/package/pulsar-client/v/1.3.1")),(0,l.kt)("h4",{id:"fixes"},"Fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use Buffer::Copy instead of Buffer::New ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/163"},"https://github.com/apache/pulsar-client-node/pull/163")),(0,l.kt)("li",{parentName:"ul"},"Fix leak at MessageId::Serialize ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/160"},"https://github.com/apache/pulsar-client-node/pull/160")),(0,l.kt)("li",{parentName:"ul"},"Fix Leak in MessageId::ToString  ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/159"},"https://github.com/apache/pulsar-client-node/pull/159")),(0,l.kt)("li",{parentName:"ul"},"Upgrade package that has security vulnerabilities  ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/166"},"https://github.com/apache/pulsar-client-node/pull/166")," , ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/172"},"https://github.com/apache/pulsar-client-node/pull/172"))))}f.isMDXComponent=!0}}]);