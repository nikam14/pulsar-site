"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6151],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={id:"concepts-multi-tenancy",title:"Multi Tenancy",sidebar_label:"Multi Tenancy",original_id:"concepts-multi-tenancy"},o=void 0,c={unversionedId:"concepts-multi-tenancy",id:"version-2.6.0/concepts-multi-tenancy",title:"Multi Tenancy",description:"Pulsar was created from the ground up as a multi-tenant system. To support multi-tenancy, Pulsar has a concept of tenants. Tenants can be spread across clusters and can each have their own authentication and authorization scheme applied to them. They are also the administrative unit at which storage quotas, message TTL, and isolation policies can be managed.",source:"@site/versioned_docs/version-2.6.0/concepts-multi-tenancy.md",sourceDirName:".",slug:"/concepts-multi-tenancy",permalink:"/docs/2.6.0/concepts-multi-tenancy",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/concepts-multi-tenancy.md",tags:[],version:"2.6.0",frontMatter:{id:"concepts-multi-tenancy",title:"Multi Tenancy",sidebar_label:"Multi Tenancy",original_id:"concepts-multi-tenancy"},sidebar:"version-2.6.0/docsSidebar",previous:{title:"Geo Replication",permalink:"/docs/2.6.0/concepts-replication"},next:{title:"Authentication and Authorization",permalink:"/docs/2.6.0/concepts-authentication"}},s={},l=[{value:"Tenants",id:"tenants",level:2},{value:"Namespaces",id:"namespaces",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pulsar was created from the ground up as a multi-tenant system. To support multi-tenancy, Pulsar has a concept of tenants. Tenants can be spread across clusters and can each have their own ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.0/security-overview"},"authentication and authorization")," scheme applied to them. They are also the administrative unit at which storage quotas, ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.0/cookbooks-retention-expiry#time-to-live-ttl"},"message TTL"),", and isolation policies can be managed."),(0,r.kt)("p",null,"The multi-tenant nature of Pulsar is reflected mostly visibly in topic URLs, which have this structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"\npersistent://tenant/namespace/topic\n\n")),(0,r.kt)("p",null,"As you can see, the tenant is the most basic unit of categorization for topics (more fundamental than the namespace and topic name)."),(0,r.kt)("h2",{id:"tenants"},"Tenants"),(0,r.kt)("p",null,"To each tenant in a Pulsar instance you can assign:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.6.0/security-authorization"},"authorization")," scheme"),(0,r.kt)("li",{parentName:"ul"},"The set of ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.6.0/reference-terminology#cluster"},"clusters")," to which the tenant's configuration applies")),(0,r.kt)("h2",{id:"namespaces"},"Namespaces"),(0,r.kt)("p",null,"Tenants and namespaces are two key concepts of Pulsar to support multi-tenancy."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pulsar is provisioned for specified tenants with appropriate capacity allocated to the tenant."),(0,r.kt)("li",{parentName:"ul"},"A namespace is the administrative unit nomenclature within a tenant. The configuration policies set on a namespace apply to all the topics created in that namespace. A tenant may create multiple namespaces via self-administration using the REST API and the ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.6.0/reference-pulsar-admin"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," CLI tool. For instance, a tenant with different applications can create a separate namespace for each application.")),(0,r.kt)("p",null,"Names for topics in the same namespace will look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"\npersistent://tenant/app1/topic-1\n\npersistent://tenant/app1/topic-2\n\npersistent://tenant/app1/topic-3\n\n")))}u.isMDXComponent=!0}}]);