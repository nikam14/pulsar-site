"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1398],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},34393:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={id:"concepts-overview",title:"Pulsar Overview",sidebar_label:"Overview",original_id:"concepts-overview"},o=void 0,s={unversionedId:"concepts-overview",id:"version-2.8.x/concepts-overview",title:"Pulsar Overview",description:"Pulsar is a multi-tenant, high-performance solution for server-to-server messaging. Originally developed by Yahoo, Pulsar is under the stewardship of the Apache Software Foundation.",source:"@site/versioned_docs/version-2.8.x/concepts-overview.md",sourceDirName:".",slug:"/concepts-overview",permalink:"/docs/2.8.x/concepts-overview",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/concepts-overview.md",tags:[],version:"2.8.x",frontMatter:{id:"concepts-overview",title:"Pulsar Overview",sidebar_label:"Overview",original_id:"concepts-overview"},sidebar:"version-2.8.x/docsSidebar",previous:{title:"Run Pulsar in Kubernetes",permalink:"/docs/2.8.x/getting-started-helm"},next:{title:"Messaging",permalink:"/docs/2.8.x/concepts-messaging"}},l={},c=[{value:"Contents",id:"contents",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Pulsar is a multi-tenant, high-performance solution for server-to-server messaging. Originally developed by Yahoo, Pulsar is under the stewardship of the ",(0,n.kt)("a",{parentName:"p",href:"https://www.apache.org/"},"Apache Software Foundation"),"."),(0,n.kt)("p",null,"Key features of Pulsar are listed below:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Native support for multiple clusters in a Pulsar instance, with seamless ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.8.x/administration-geo"},"geo-replication")," of messages across clusters."),(0,n.kt)("li",{parentName:"ul"},"Very low publish and end-to-end latency."),(0,n.kt)("li",{parentName:"ul"},"Seamless scalability to over a million topics."),(0,n.kt)("li",{parentName:"ul"},"A simple ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.8.x/concepts-clients"},"client API")," with bindings for ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.8.x/client-libraries-java"},"Java"),", ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.8.x/client-libraries-go"},"Go"),", ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.8.x/client-libraries-python"},"Python")," and ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.8.x/client-libraries-cpp"},"C++"),"."),(0,n.kt)("li",{parentName:"ul"},"Multiple ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.8.x/concepts-messaging#subscription-types"},"subscription types")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/2.8.x/concepts-messaging#exclusive"},"exclusive"),", ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.8.x/concepts-messaging#shared"},"shared"),", and ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.8.x/concepts-messaging#failover"},"failover"),") for topics."),(0,n.kt)("li",{parentName:"ul"},"Guaranteed message delivery with ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.8.x/concepts-architecture-overview#persistent-storage"},"persistent message storage")," provided by ",(0,n.kt)("a",{parentName:"li",href:"http://bookkeeper.apache.org/"},"Apache BookKeeper"),"."),(0,n.kt)("li",{parentName:"ul"},"A serverless light-weight computing framework ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.8.x/functions-overview"},"Pulsar Functions")," offers the capability for stream-native data processing."),(0,n.kt)("li",{parentName:"ul"},"A serverless connector framework ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.8.x/io-overview"},"Pulsar IO"),", which is built on Pulsar Functions, makes it easier to move data in and out of Apache Pulsar."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/2.8.x/concepts-tiered-storage"},"Tiered Storage")," offloads data from hot/warm storage to cold/long-term storage (such as S3 and GCS) when the data is aging out.")),(0,n.kt)("h2",{id:"contents"},"Contents"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/2.8.x/concepts-messaging"},"Messaging Concepts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/2.8.x/concepts-architecture-overview"},"Architecture Overview")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/2.8.x/concepts-clients"},"Pulsar Clients")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/2.8.x/concepts-replication"},"Geo Replication")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/2.8.x/concepts-multi-tenancy"},"Multi Tenancy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/2.8.x/concepts-authentication"},"Authentication and Authorization")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/2.8.x/concepts-topic-compaction"},"Topic Compaction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/2.8.x/concepts-tiered-storage"},"Tiered Storage"))))}u.isMDXComponent=!0}}]);