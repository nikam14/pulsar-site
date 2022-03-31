"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[95669],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=u(r),d=i,f=h["".concat(c,".").concat(d)]||h[d]||p[d]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},12592:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],s={id:"security-overview",title:"Pulsar security overview",sidebar_label:"Overview",original_id:"security-overview"},c=void 0,u={unversionedId:"security-overview",id:"version-2.9.1/security-overview",title:"Pulsar security overview",description:"As the central message bus for a business, Apache Pulsar is frequently used for storing mission-critical data. Therefore, enabling security features in Pulsar is crucial.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-2.9.1/security-overview.md",sourceDirName:".",slug:"/security-overview",permalink:"/fr/docs/security-overview",editUrl:"https://github.com/apache/pulsar/edit/master/site2/versioned_docs/version-2.9.1/security-overview.md",tags:[],version:"2.9.1",frontMatter:{id:"security-overview",title:"Pulsar security overview",sidebar_label:"Overview",original_id:"security-overview"},sidebar:"version-2.9.1/docsSidebar",previous:{title:"Pulsar isolation",permalink:"/fr/docs/administration-isolation"},next:{title:"Transport Encryption using TLS",permalink:"/fr/docs/security-tls-transport"}},l={},p=[{value:"Role tokens",id:"role-tokens",level:2},{value:"Authentication providers",id:"authentication-providers",level:2}],h={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As the central message bus for a business, Apache Pulsar is frequently used for storing mission-critical data. Therefore, enabling security features in Pulsar is crucial."),(0,o.kt)("p",null,"By default, Pulsar configures no encryption, authentication, or authorization. Any client can communicate to Apache Pulsar via plain text service URLs. So we must ensure that Pulsar accessing via these plain text service URLs is restricted to trusted clients only. In such cases, you can use Network segmentation and/or authorization ACLs to restrict access to trusted IPs. If you use neither, the state of cluster is wide open and anyone can access the cluster."),(0,o.kt)("p",null,"Pulsar supports a pluggable authentication mechanism. And Pulsar clients use this mechanism to authenticate with brokers and proxies. You can also configure Pulsar to support multiple authentication sources."),(0,o.kt)("p",null,'The Pulsar broker validates the authentication credentials when a connection is established. After the initial connection is authenticated, the "principal" token is stored for authorization though the connection is not re-authenticated. The broker periodically checks the expiration status of every ',(0,o.kt)("inlineCode",{parentName:"p"},"ServerCnx")," object. You can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"authenticationRefreshCheckSeconds")," on the broker to control the frequency to check the expiration status. By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"authenticationRefreshCheckSeconds")," is set to 60s. When the authentication is expired, the broker forces to re-authenticate the connection. If the re-authentication fails, the broker disconnects the client."),(0,o.kt)("p",null,"The broker supports learning whether a particular client supports authentication refreshing. If a client supports authentication refreshing and the credential is expired, the authentication provider calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"refreshAuthentication")," method to initiate the refreshing process. If a client does not support authentication refreshing and the credential is expired, the broker disconnects the client."),(0,o.kt)("p",null,"You had better secure the service components in your Apache Pulsar deployment."),(0,o.kt)("h2",{id:"role-tokens"},"Role tokens"),(0,o.kt)("p",null,"In Pulsar, a ",(0,o.kt)("em",{parentName:"p"},"role")," is a string, like ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"app1"),", which can represent a single client or multiple clients. You can use roles to control permission for clients to produce or consume from certain topics, administer the configuration for tenants, and so on."),(0,o.kt)("p",null,"Apache Pulsar uses a ",(0,o.kt)("a",{parentName:"p",href:"#authentication-providers"},"Authentication Provider")," to establish the identity of a client and then assign a ",(0,o.kt)("em",{parentName:"p"},"role token")," to that client. This role token is then used for ",(0,o.kt)("a",{parentName:"p",href:"security-authorization"},"Authorization and ACLs")," to determine what the client is authorized to do."),(0,o.kt)("h2",{id:"authentication-providers"},"Authentication providers"),(0,o.kt)("p",null,"Currently Pulsar supports the following authentication providers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"security-tls-authentication"},"TLS Authentication")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"security-athenz"},"Athenz")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"security-kerberos"},"Kerberos")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"security-jwt"},"JSON Web Token Authentication"))))}d.isMDXComponent=!0}}]);