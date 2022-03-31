"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[36367],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(r),h=n,f=m["".concat(s,".").concat(h)]||m[h]||u[h]||p;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<p;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77112:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var a=r(87462),n=r(63366),p=(r(67294),r(3905)),o=["components"],i={id:"client-java-2.6.2",title:"Client Java 2.6.2",sidebar_label:"Client Java 2.6.2"},s=void 0,l={unversionedId:"versioned/client-java-2.6.2",id:"versioned/client-java-2.6.2",title:"Client Java 2.6.2",description:"C++] Fix message id error when subscribing a single partition [#8341",source:"@site/release-notes/versioned/client-java-2.6.2.md",sourceDirName:"versioned",slug:"/versioned/client-java-2.6.2",permalink:"/zh-CN/release-notes/versioned/client-java-2.6.2",tags:[],version:"current",frontMatter:{id:"client-java-2.6.2",title:"Client Java 2.6.2",sidebar_label:"Client Java 2.6.2"}},c={},u=[],m={toc:u};function h(e){var t=e.components,r=(0,n.Z)(e,o);return(0,p.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"[C++]"," Fix message id error when subscribing a single partition ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8341"},"#8341"),(0,p.kt)("br",{parentName:"p"}),"\n","Increasing timeout for pulsar client io threads to shutdown ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8316"},"#8316"),(0,p.kt)("br",{parentName:"p"}),"\n","[Issue 8294][docs]","Some errors on the official website document of Pulsar Java client #8294 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8296"},"#8296"),(0,p.kt)("br",{parentName:"p"}),"\n","[C++]"," Fix some pending requests may never complete when broker's down ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8232"},"#8232"),(0,p.kt)("br",{parentName:"p"}),"\n","[Client]","Fix AutoUpdatePartitionsInterval setting problem ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8227"},"#8227"),(0,p.kt)("br",{parentName:"p"}),"\n","add epoch for C++ client HandleBase to handle create producer timeout ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8191"},"#8191"),(0,p.kt)("br",{parentName:"p"}),"\n","[client]"," Fix issue where paused consumer receives new message when reconnecting ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8165"},"#8165"),(0,p.kt)("br",{parentName:"p"}),"\n","[Issue 8138][pulsar-client]"," Improve timeout handling in ClientCnx to cover all remaining request types (GetLastMessageId, GetTopics, GetSchema, GetOrCreateSchema) ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8149"},"#8149"),(0,p.kt)("br",{parentName:"p"}),"\n","[pulsar-client]"," Fix: avoid resolving address for sni-host + thread-safe connection creation ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8062"},"#8062"),(0,p.kt)("br",{parentName:"p"}),"\n","pulsar-perf support setting message key ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7989"},"#7989"),(0,p.kt)("br",{parentName:"p"}),"\n","[Client]","Add autoPartitionsUpdateInterval for producer and consumer ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7840"},"#7840"),(0,p.kt)("br",{parentName:"p"}),"\n","[pulsar-client]"," Avoid subscribing the same topic again ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7823"},"#7823"),(0,p.kt)("br",{parentName:"p"}),"\n","Implement toString() method for TopicMessageIdImpl class ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7807"},"#7807"),(0,p.kt)("br",{parentName:"p"}),"\n","[pulsar-client]"," support input-stream for trustStore cert ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7442"},"#7442"),(0,p.kt)("br",{parentName:"p"}),"\n","[C++]"," Wait for all seek operations completed ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7216"},"#7216"),(0,p.kt)("br",{parentName:"p"}),"\n","[Issue 6282][Issue 2793]","[Doc]","--add schema example to Cgo and CPP clients docs. ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7191"},"#7191")))}h.isMDXComponent=!0}}]);