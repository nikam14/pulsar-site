"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[7427],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(a),h=n,f=s["".concat(o,".").concat(h)]||s[h]||m[h]||i;return a?r.createElement(f,l(l({ref:t},c),{},{components:a})):r.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:n,l[1]=p;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},89883:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const i={id:"client-java-2.8.4",title:"Client Java 2.8.4",sidebar_label:"Client Java 2.8.4"},l=void 0,p={unversionedId:"versioned/client-java-2.8.4",id:"versioned/client-java-2.8.4",title:"Client Java 2.8.4",description:"- improve Improve consumer listener logic 13273",source:"@site/release-notes/versioned/client-java-2.8.4.md",sourceDirName:"versioned",slug:"/versioned/client-java-2.8.4",permalink:"/release-notes/versioned/client-java-2.8.4",draft:!1,tags:[],version:"current",frontMatter:{id:"client-java-2.8.4",title:"Client Java 2.8.4",sidebar_label:"Client Java 2.8.4"}},o={},u=[],c={toc:u};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[improve][java]"," Improve consumer listener logic ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13273"},"13273")),(0,n.kt)("li",{parentName:"ul"},"[fix][java]"," Fix ConsumerBuilderImpl#subscribeAsync blocks calling thread ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14614"},"14614")),(0,n.kt)("li",{parentName:"ul"},"[fix][java]"," Fix partitionsAutoUpdateFuture never completes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14625"},"14625")),(0,n.kt)("li",{parentName:"ul"},"[fix][java]"," Fix race condition in consumer redelivery ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14687"},"14687")),(0,n.kt)("li",{parentName:"ul"},"[improve][java]"," Process maxRedeliverCount is 0 of DeadLetterPolicy ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14706"},"14706")),(0,n.kt)("li",{parentName:"ul"},"[improve][java]"," Avoid timer task run before previous subscribe complete ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14818"},"14818")),(0,n.kt)("li",{parentName:"ul"},"[fix][java]"," Fix potentially unfinished CompletableFuture in doReconsumeLater ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14947"},"14947")),(0,n.kt)("li",{parentName:"ul"},"[fix][java]"," ConsumerBuilderImpl can not set null to deadLetterPolicy. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14980"},"14980")),(0,n.kt)("li",{parentName:"ul"},"[improve][java]"," Add test to ensure the message order in listener callbacks ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15049"},"15049")),(0,n.kt)("li",{parentName:"ul"},"[fix][java]"," Fix performance regression with message listener ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15162"},"15162")),(0,n.kt)("li",{parentName:"ul"},"[fix][java]"," Fix wrong behavior of deduplication for key based batching ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15413"},"15413")),(0,n.kt)("li",{parentName:"ul"},"[improve][java]"," improve logic when ACK grouping tracker checks duplicated message id ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15465"},"15465")),(0,n.kt)("li",{parentName:"ul"},"[fix][java]"," Remove consumer when close consumer command is received ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15761"},"15761")),(0,n.kt)("li",{parentName:"ul"},"[fix][java]"," Fix conversion of ",(0,n.kt)("inlineCode",{parentName:"li"},"TimestampMillisConversion")," has no effect when Jsr310Conversion is enabled ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15863"},"15863")),(0,n.kt)("li",{parentName:"ul"},"[fix][java]"," Remove producer when close producer command is received ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16028"},"16028")),(0,n.kt)("li",{parentName:"ul"},"[fix][java]"," Fix thread safety issue of ",(0,n.kt)("inlineCode",{parentName:"li"},"LastCumulativeAck")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16072"},"16072")),(0,n.kt)("li",{parentName:"ul"},"[improve][java]"," Send CloseConsumer on client timeout ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16616"},"16616")),(0,n.kt)("li",{parentName:"ul"},"[fix][java]"," Fix ReconsumeLater will hang up if retryLetterProducer exception ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16655"},"16655")),(0,n.kt)("li",{parentName:"ul"},"[fix][java]"," Fix load trust certificate ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16789"},"16789")),(0,n.kt)("li",{parentName:"ul"},"[fix][java]"," Remove redundant check for chunked message TotalChunkMsgSize in ConsumerImpl ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16797"},"16797")),(0,n.kt)("li",{parentName:"ul"},"[fix][java]"," Forget to update memory usage when message is invalid ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16835"},"16835")),(0,n.kt)("li",{parentName:"ul"},"[fix][java]"," Fix PatternTopicsChangedListener blocked when topic removed ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16842"},"16842")),(0,n.kt)("li",{parentName:"ul"},"[fix][java]"," Fix MaxQueueSize semaphore release leak in createOpSendMsg ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16915"},"16915"))))}s.isMDXComponent=!0}}]);