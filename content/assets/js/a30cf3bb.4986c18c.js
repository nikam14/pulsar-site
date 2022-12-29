"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5906],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),d=l,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},49837:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),l=(r(67294),r(3905));const a={id:"helm-install",title:"Install Apache Pulsar using Helm",sidebar_label:"Install",original_id:"helm-install"},o=void 0,i={unversionedId:"helm-install",id:"version-2.7.4/helm-install",title:"Install Apache Pulsar using Helm",description:"Install Apache Pulsar on Kubernetes with the official Pulsar Helm chart.",source:"@site/versioned_docs/version-2.7.4/helm-install.md",sourceDirName:".",slug:"/helm-install",permalink:"/docs/2.7.4/helm-install",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/helm-install.md",tags:[],version:"2.7.4",frontMatter:{id:"helm-install",title:"Install Apache Pulsar using Helm",sidebar_label:"Install",original_id:"helm-install"},sidebar:"version-2.7.4/docsSidebar",previous:{title:"Prepare",permalink:"/docs/2.7.4/helm-prepare"},next:{title:"Deployment",permalink:"/docs/2.7.4/helm-deploy"}},s={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Environment setup",id:"environment-setup",level:2},{value:"Tools",id:"tools",level:3},{value:"Cloud cluster preparation",id:"cloud-cluster-preparation",level:2},{value:"Pulsar deployment",id:"pulsar-deployment",level:2},{value:"Pulsar upgrade",id:"pulsar-upgrade",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Install Apache Pulsar on Kubernetes with the official Pulsar Helm chart."),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("p",null,"To deploy Apache Pulsar on Kubernetes, the followings are required."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"kubectl 1.14 or higher, compatible with your cluster (",(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#before-you-begin"},"+/- 1 minor release from your cluster"),")"),(0,l.kt)("li",{parentName:"ul"},"Helm v3 (3.0.2 or higher)"),(0,l.kt)("li",{parentName:"ul"},"A Kubernetes cluster, version 1.14 or higher")),(0,l.kt)("h2",{id:"environment-setup"},"Environment setup"),(0,l.kt)("p",null,"Before deploying Pulsar, you need to prepare your environment."),(0,l.kt)("h3",{id:"tools"},"Tools"),(0,l.kt)("p",null,"Install ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.7.4/helm-tools"},(0,l.kt)("inlineCode",{parentName:"a"},"helm"))," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.7.4/helm-tools"},(0,l.kt)("inlineCode",{parentName:"a"},"kubectl"))," on your computer."),(0,l.kt)("h2",{id:"cloud-cluster-preparation"},"Cloud cluster preparation"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Kubernetes 1.14 or higher is required.")),(0,l.kt)("p",null,"To create and connect to the Kubernetes cluster, follow the instructions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/2.7.4/helm-prepare#google-kubernetes-engine"},"Google Kubernetes Engine"))),(0,l.kt)("h2",{id:"pulsar-deployment"},"Pulsar deployment"),(0,l.kt)("p",null,"Once the environment is set up and configuration is generated, you can now proceed to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.7.4/helm-deploy"},"deployment of Pulsar"),"."),(0,l.kt)("h2",{id:"pulsar-upgrade"},"Pulsar upgrade"),(0,l.kt)("p",null,"To upgrade an existing Kubernetes installation, follow the ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.7.4/helm-upgrade"},"upgrade documentation"),"."))}c.isMDXComponent=!0}}]);