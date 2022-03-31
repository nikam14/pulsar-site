"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[26023],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(r),h=n,d=m["".concat(l,".").concat(h)]||m[h]||s[h]||p;return r?a.createElement(d,i(i({ref:t},u),{},{components:r})):a.createElement(d,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,i=new Array(p);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<p;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80178:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var a=r(87462),n=r(63366),p=(r(67294),r(3905)),i=["components"],o={id:"client-java-2.8.2",title:"Client Java 2.8.2",sidebar_label:"Client Java 2.8.2"},l=void 0,c={unversionedId:"versioned/client-java-2.8.2",id:"versioned/client-java-2.8.2",title:"Client Java 2.8.2",description:"Java Client] Fix producer data race to get cnx [#13176",source:"@site/release-notes/versioned/client-java-2.8.2.md",sourceDirName:"versioned",slug:"/versioned/client-java-2.8.2",permalink:"/zh-TW/release-notes/versioned/client-java-2.8.2",tags:[],version:"current",frontMatter:{id:"client-java-2.8.2",title:"Client Java 2.8.2",sidebar_label:"Client Java 2.8.2"}},u={},s=[],m={toc:s};function h(e){var t=e.components,r=(0,n.Z)(e,i);return(0,p.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"[Java Client]"," Fix producer data race to get cnx ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/13176"},"#13176"),(0,p.kt)("br",{parentName:"p"}),"\n","[Java Client]"," Send CloseProducer on timeout ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/13161"},"#13161"),(0,p.kt)("br",{parentName:"p"}),"\n","[Java Client]"," Let producer reconnect for state RegisteringSchema ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12781"},"#12781"),(0,p.kt)("br",{parentName:"p"}),"\n","[Java Client]"," Use epoch to version producer's cnx to prevent early delivery of messages ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12779"},"#12779"),(0,p.kt)("br",{parentName:"p"}),"\n","Pulsar Client: restore SchemaInfo.builder() API ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12673"},"#12673"),(0,p.kt)("br",{parentName:"p"}),"\n","[Java Client]"," Remove invalid call to Thread.currentThread().interrupt(); ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12652"},"#12652"),(0,p.kt)("br",{parentName:"p"}),"\n","Add additional error handling in auto partition update task MultiTopicsConsumerImpl ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12620"},"#12620"),(0,p.kt)("br",{parentName:"p"}),"\n","Fix invalid firstSentAt in log message when timeout first time ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12588"},"#12588"),(0,p.kt)("br",{parentName:"p"}),"\n","Update producer stats when producer close ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12500"},"#12500"),(0,p.kt)("br",{parentName:"p"}),"\n","Fix a typo in UnAckedMessageTracker ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12467"},"#12467"),(0,p.kt)("br",{parentName:"p"}),"\n","Fix the retry topic's ",(0,p.kt)("inlineCode",{parentName:"p"},"REAL_TOPIC")," & ",(0,p.kt)("inlineCode",{parentName:"p"},"ORIGIN_MESSAGE_ID")," property ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12451"},"#12451"),(0,p.kt)("br",{parentName:"p"}),"\n","Change the producer fence error log to debug level ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12447"},"#12447"),(0,p.kt)("br",{parentName:"p"}),"\n","[ISSUE-12291][Client]","  'StartMessageId' and 'RollbackDuration' not working in MultiTopicsReader for non-partitioned topics ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12308"},"#12308"),(0,p.kt)("br",{parentName:"p"}),"\n","[Java Client]"," Use failPendingMessages to ensure proper cleanup ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12259"},"#12259"),(0,p.kt)("br",{parentName:"p"}),"\n","[Java Client]"," Fixed the producer OOM if got exception while add message to batch container ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12170"},"#12170"),(0,p.kt)("br",{parentName:"p"}),"\n","[Client]"," Fix endless receiveAsync loop in MultiTopicsConsumer ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12044"},"#12044"),(0,p.kt)("br",{parentName:"p"}),"\n","[Java Client]"," Make Audience Field Optional in OAuth2 Client Credentials ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11988"},"#11988"),(0,p.kt)("br",{parentName:"p"}),"\n","Forget to update memory usage on producer close ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11906"},"#11906"),(0,p.kt)("br",{parentName:"p"}),"\n","[Client]"," Fix ConcurrentModificationException in sendAsync ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11884"},"#11884"),(0,p.kt)("br",{parentName:"p"}),"\n","fix seek at batchIndex level receive duplicated messages ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11826"},"#11826"),(0,p.kt)("br",{parentName:"p"}),"\n","[Client]"," Reduce redundant FLOW requests for non-durable multi-topics consumer ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11802"},"#11802")))}h.isMDXComponent=!0}}]);