"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[71056],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(r),d=a,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1757:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={id:"client-java-2.7.3",title:"Client Java 2.7.3",sidebar_label:"Client Java 2.7.3"},l=void 0,p={unversionedId:"versioned/client-java-2.7.3",id:"versioned/client-java-2.7.3",title:"Client Java 2.7.3",description:"fix non-persistent topic get partitioned metadata error on discovery #10806",source:"@site/release-notes/versioned/client-java-2.7.3.md",sourceDirName:"versioned",slug:"/versioned/client-java-2.7.3",permalink:"/zh-CN/release-notes/versioned/client-java-2.7.3",tags:[],version:"current",frontMatter:{id:"client-java-2.7.3",title:"Client Java 2.7.3",sidebar_label:"Client Java 2.7.3"}},u={},s=[],f={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"fix non-persistent topic get partitioned metadata error on discovery ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10806"},"#10806"),(0,o.kt)("br",{parentName:"p"}),"\n","MINOR: Add error message to setMaxPendingMessagesAcrossPartitions ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10709"},"#10709"),(0,o.kt)("br",{parentName:"p"}),"\n","Fix hasMessageAvailable return true but can't read message ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10414"},"#10414")))}d.isMDXComponent=!0}}]);