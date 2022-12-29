"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[2840],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92580:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={id:"io-cdc",title:"CDC Connector",sidebar_label:"CDC Connector",original_id:"io-cdc"},i=void 0,c={unversionedId:"io-cdc",id:"version-2.3.1/io-cdc",title:"CDC Connector",description:"Source",source:"@site/versioned_docs/version-2.3.1/io-cdc.md",sourceDirName:".",slug:"/io-cdc",permalink:"/docs/2.3.1/io-cdc",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/io-cdc.md",tags:[],version:"2.3.1",frontMatter:{id:"io-cdc",title:"CDC Connector",sidebar_label:"CDC Connector",original_id:"io-cdc"},sidebar:"version-2.3.1/docsSidebar",previous:{title:"Developing Connectors",permalink:"/docs/2.3.1/io-develop"},next:{title:"Overview",permalink:"/docs/2.3.1/sql-overview"}},l={},s=[{value:"Source",id:"source",level:2}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"source"},"Source"),(0,o.kt)("p",null,"The CDC Source connector is used to capture change log of existing databases like MySQL, MongoDB, PostgreSQL into Pulsar."),(0,o.kt)("p",null,"The CDC Source connector is built on top of ",(0,o.kt)("a",{parentName:"p",href:"https://debezium.io/"},"Debezium")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/canal"},"Canal"),". This connector stores all data into Pulsar Cluster in a persistent, replicated and partitioned way.\nThis CDC Source is tested by using MySQL, and you could get more information regarding how it works at ",(0,o.kt)("a",{parentName:"p",href:"https://debezium.io/docs/connectors/mysql/"},"this Debezium link")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/canal/wiki"},"this canal link"),".\nRegarding how Debezium works, please reference to ",(0,o.kt)("a",{parentName:"p",href:"https://debezium.io/docs/tutorial/"},"Debezium tutorial"),". Regarding how Canal works, please reference to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/canal/wiki"},"Canal tutorial"),". It is recommended that you go through this tutorial first."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/2.3.1/io-cdc-debezium"},"Debezium Connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/2.3.1/io-cdc-canal"},"Alibaba Canal Connector"))))}p.isMDXComponent=!0}}]);