"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[79761],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=l(t),d=a,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||o;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var p={};for(var u in r)hasOwnProperty.call(r,u)&&(p[u]=r[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},32997:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],p={id:"pulsar-2.6.4",title:"Apache Pulsar 2.6.4",sidebar_label:"Apache Pulsar 2.6.4"},u=void 0,l={unversionedId:"versioned/pulsar-2.6.4",id:"versioned/pulsar-2.6.4",title:"Apache Pulsar 2.6.4",description:"security",source:"@site/release-notes/versioned/pulsar-2.6.4.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.6.4",permalink:"/zh-TW/release-notes/versioned/pulsar-2.6.4",tags:[],version:"current",frontMatter:{id:"pulsar-2.6.4",title:"Apache Pulsar 2.6.4",sidebar_label:"Apache Pulsar 2.6.4"}},c={},s=[{value:"security",id:"security",level:2},{value:"tieredstorage",id:"tieredstorage",level:2},{value:"broker",id:"broker",level:2}],f={toc:s};function d(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"security"},"security"),(0,o.kt)("p",null,"[Branch-2.6]","Forbid to read other topic's data in managedLedger layer ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11917"},"#11917"),(0,o.kt)("br",{parentName:"p"}),"\n","Forbid to read other topic's data in managedLedger layer ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11912"},"#11912"),(0,o.kt)("br",{parentName:"p"}),"\n","Disallow parsing of token with none signature in authenticateToken ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9172"},"#9172"),(0,o.kt)("br",{parentName:"p"}),"\n","Upgrade Bouncy castle to newest version ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8047"},"#8047"),"  "),(0,o.kt)("h2",{id:"tieredstorage"},"tieredstorage"),(0,o.kt)("p",null,"[tiered-storage]"," Allow AWS credentials to be refreshed ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9387"},"#9387"),"  "),(0,o.kt)("h2",{id:"broker"},"broker"),(0,o.kt)("p",null,"Issue 9082: Broker expires messages one at a time after topic unload ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9083"},"#9083")))}d.isMDXComponent=!0}}]);