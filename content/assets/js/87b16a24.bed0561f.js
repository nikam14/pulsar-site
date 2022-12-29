"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6607],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,m=u["".concat(p,".").concat(d)]||u[d]||f[d]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},91535:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={id:"reference-rest-api-overview",title:"Pulsar REST APIs",sidebar_label:"Pulsar REST APIs"},i=void 0,s={unversionedId:"reference-rest-api-overview",id:"version-2.6.1/reference-rest-api-overview",title:"Pulsar REST APIs",description:"A REST API (also known as RESTful API, REpresentational State Transfer Application Programming Interface) is a set of definitions and protocols for building and integrating application software, using HTTP requests to GET, PUT, POST, and DELETE data following the REST standards. In essence, REST API is a set of remote calls using standard methods to request and return data in a specific format between two systems.",source:"@site/versioned_docs/version-2.6.1/reference-rest-api-overview.md",sourceDirName:".",slug:"/reference-rest-api-overview",permalink:"/docs/2.6.1/reference-rest-api-overview",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/reference-rest-api-overview.md",tags:[],version:"2.6.1",frontMatter:{id:"reference-rest-api-overview",title:"Pulsar REST APIs",sidebar_label:"Pulsar REST APIs"},sidebar:"version-2.6.1/docsSidebar",previous:{title:"Pulsar Metrics",permalink:"/docs/2.6.1/reference-metrics"}},p={},l=[],c={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A REST API (also known as RESTful API, REpresentational State Transfer Application Programming Interface) is a set of definitions and protocols for building and integrating application software, using HTTP requests to GET, PUT, POST, and DELETE data following the REST standards. In essence, REST API is a set of remote calls using standard methods to request and return data in a specific format between two systems. "),(0,n.kt)("p",null,"Pulsar provides a variety of REST APIs that enable you to interact with Pulsar to retrieve information or perform an action. "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"REST API category"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/admin-rest-api/?version=master"},"Admin")),(0,n.kt)("td",{parentName:"tr",align:null},"REST APIs for administrative operations.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/functions-rest-api/?version=master"},"Functions")),(0,n.kt)("td",{parentName:"tr",align:null},"REST APIs for function-specific operations.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/source-rest-api/?version=master"},"Sources")),(0,n.kt)("td",{parentName:"tr",align:null},"REST APIs for source-specific operations.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/sink-rest-api/?version=master"},"Sinks")),(0,n.kt)("td",{parentName:"tr",align:null},"REST APIs for sink-specific operations.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/packages-rest-api/?version=master"},"Packages")),(0,n.kt)("td",{parentName:"tr",align:null},"REST APIs for package-specific operations. A package can be a group of functions, sources, and sinks.")))))}u.isMDXComponent=!0}}]);