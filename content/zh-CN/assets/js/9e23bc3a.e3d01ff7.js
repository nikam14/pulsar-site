"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[66104],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),i=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=i(r),m=n,f=h["".concat(u,".").concat(m)]||h[m]||c[m]||p;return r?a.createElement(f,o(o({ref:t},s),{},{components:r})):a.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var i=2;i<p;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},22363:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c}});var a=r(87462),n=r(63366),p=(r(67294),r(3905)),o=["components"],l={id:"pulsar-2.6.3",title:"Apache Pulsar 2.6.3",sidebar_label:"Apache Pulsar 2.6.3"},u=void 0,i={unversionedId:"versioned/pulsar-2.6.3",id:"versioned/pulsar-2.6.3",title:"Apache Pulsar 2.6.3",description:"security",source:"@site/release-notes/versioned/pulsar-2.6.3.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.6.3",permalink:"/zh-CN/release-notes/versioned/pulsar-2.6.3",tags:[],version:"current",frontMatter:{id:"pulsar-2.6.3",title:"Apache Pulsar 2.6.3",sidebar_label:"Apache Pulsar 2.6.3"}},s={},c=[{value:"security",id:"security",level:2},{value:"proxy",id:"proxy",level:2},{value:"connector",id:"connector",level:2},{value:"storm",id:"storm",level:2},{value:"build",id:"build",level:2},{value:"broker",id:"broker",level:2},{value:"stats",id:"stats",level:2},{value:"function",id:"function",level:2},{value:"tieredstorage",id:"tieredstorage",level:2},{value:"admin",id:"admin",level:2}],h={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,p.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"security"},"security"),(0,p.kt)("p",null,"[Authentication]"," Support chained authentication with same auth method name ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9094"},"#9094"),(0,p.kt)("br",{parentName:"p"}),"\n","[docs]"," Add config info in security jwt ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8482"},"#8482"),"  "),(0,p.kt)("h2",{id:"proxy"},"proxy"),(0,p.kt)("p",null,"Fix Proxy Config bindAddress does not working for servicePort  ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9068"},"#9068"),(0,p.kt)("br",{parentName:"p"}),"\n","Support enable WebSocket on Pulsar Proxy. ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8613"},"#8613"),(0,p.kt)("br",{parentName:"p"}),"\n","[Pulsar Proxy]"," Add error log for pulsar proxy starter ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8451"},"#8451"),(0,p.kt)("br",{parentName:"p"}),"\n","[Pulsar-Proxy]"," Fix request.getContentLength() to return 0 if it is less than 0 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8448"},"#8448"),"  "),(0,p.kt)("h2",{id:"connector"},"connector"),(0,p.kt)("p",null,"[connector]","fix debezium-connector error log ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9063"},"#9063"),(0,p.kt)("br",{parentName:"p"}),"\n","Pulsar IO: Make Source topic Schema information available to downstream Sinks ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8854"},"#8854"),"  "),(0,p.kt)("h2",{id:"storm"},"storm"),(0,p.kt)("p",null,"[ISSUE]"," DOCS-8994 fix the links of examples ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9062"},"#9062"),"  "),(0,p.kt)("h2",{id:"build"},"build"),(0,p.kt)("p",null,"[docs]"," Generate the whole doc set for 2.6.3 release ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9027"},"#9027"),"  "),(0,p.kt)("h2",{id:"broker"},"broker"),(0,p.kt)("p",null,"Improve error handling when broker doesn't trust client certificates ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8998"},"#8998"),(0,p.kt)("br",{parentName:"p"}),"\n","Intercept beforeSendMessage calls ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8932"},"#8932"),(0,p.kt)("br",{parentName:"p"}),"\n","[pulsar-broker]"," capture stats with precise backlog ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8928"},"#8928"),(0,p.kt)("br",{parentName:"p"}),"\n","[Issue 8783][pulsar-broker]"," Execute removing non-persistent subscription of topic from different thread to avoid deadlock when removing inactive subscriptions ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8820"},"#8820"),(0,p.kt)("br",{parentName:"p"}),"\n","[broker]"," Close topics that remain fenced forcefully ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8561"},"#8561"),(0,p.kt)("br",{parentName:"p"}),"\n","[pulsar-broker]"," Refresh ZooKeeper-data cache in background to avoid d\u2026 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8304"},"#8304"),(0,p.kt)("br",{parentName:"p"}),"\n","[pulsar-broker]"," fix: use correct configuration for zk-cache expire time ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8302"},"#8302"),"  "),(0,p.kt)("h2",{id:"stats"},"stats"),(0,p.kt)("p",null,"remove duplicated broker prometheus metrics type ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8995"},"#8995"),(0,p.kt)("br",{parentName:"p"}),"\n","Monitor if a cursor moves its mark-delete position ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8930"},"#8930"),(0,p.kt)("br",{parentName:"p"}),"\n","Export Prometheus metric for messageTTL ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8871"},"#8871"),"  "),(0,p.kt)("h2",{id:"function"},"function"),(0,p.kt)("p",null,"Fix single-quotes added to user-conf ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8780"},"#8780"),(0,p.kt)("br",{parentName:"p"}),"\n","[Issue #8268][Pulsar Function]"," k8s runtime with go functions support ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8352"},"#8352"),(0,p.kt)("br",{parentName:"p"}),"\n","[component/functions|component/go]"," Propagate user-config parameter into instances of Golang pulsar functions ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8132"},"#8132"),"  "),(0,p.kt)("h2",{id:"tieredstorage"},"tieredstorage"),(0,p.kt)("p",null,"[Tiered Storage]"," Offload manager initialization once ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8739"},"#8739"),"  "),(0,p.kt)("h2",{id:"admin"},"admin"),(0,p.kt)("p",null,"Issue 8677: Cannot get lastMessageId for an empty topic due to message retention ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8725"},"#8725")))}m.isMDXComponent=!0}}]);