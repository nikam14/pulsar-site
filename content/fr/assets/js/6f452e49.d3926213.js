"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[89433],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63886:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={id:"pulsar-cs-2.2.0",title:"Pulsar DotPulsar",sidebar_label:"Pulsar DotPulsar"},u=void 0,c={unversionedId:"versioned/pulsar-cs-2.2.0",id:"versioned/pulsar-cs-2.2.0",title:"Pulsar DotPulsar",description:"Added",source:"@site/release-notes/versioned/pulsar-cs-2.2.0.md",sourceDirName:"versioned",slug:"/versioned/pulsar-cs-2.2.0",permalink:"/fr/release-notes/versioned/pulsar-cs-2.2.0",tags:[],version:"current",frontMatter:{id:"pulsar-cs-2.2.0",title:"Pulsar DotPulsar",sidebar_label:"Pulsar DotPulsar"}},s={},p=[{value:"Added",id:"added",level:2},{value:"Changed",id:"changed",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"added"},"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Extension methods for IConsumerBuilder, IProducerBuilder, and IReaderBuilder for setting a StateChangedHandler without a cancellation token")),(0,a.kt)("h2",{id:"changed"},"Changed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The following internal exceptions are now public",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ChannelNotReadyException (should be ignored when logging exceptions)"),(0,a.kt)("li",{parentName:"ul"},"ConsumerNotFoundException (from the broker, but indicates an internal problem)"),(0,a.kt)("li",{parentName:"ul"},"ServiceNotReadyException (the broker is not ready)"),(0,a.kt)("li",{parentName:"ul"},"TooManyRequestsException (the broker is getting too many requests)")))))}f.isMDXComponent=!0}}]);