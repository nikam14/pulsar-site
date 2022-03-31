"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[82347],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66949:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={id:"pulsar-client-node-1.3.0",title:"Pulsar Client Node",sidebar_label:"Pulsar Client Node"},u=void 0,s={unversionedId:"versioned/pulsar-client-node-1.3.0",id:"versioned/pulsar-client-node-1.3.0",title:"Pulsar Client Node",description:"1.3.0 &mdash; 2021-03-18",source:"@site/release-notes/versioned/pulsar-client-node-1.3.0.md",sourceDirName:"versioned",slug:"/versioned/pulsar-client-node-1.3.0",permalink:"/zh-TW/release-notes/versioned/pulsar-client-node-1.3.0",tags:[],version:"current",frontMatter:{id:"pulsar-client-node-1.3.0",title:"Pulsar Client Node",sidebar_label:"Pulsar Client Node"}},p={},c=[{value:'1.3.0 \u2014 2021-03-18 <a id="1.3.0"></a>',id:"130--2021-03-18-",level:3},{value:"Enhancements",id:"enhancements",level:4},{value:"Features",id:"features",level:4}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"130--2021-03-18-"},"1.3.0 ","\u2014"," 2021-03-18 ",(0,l.kt)("a",{id:"1.3.0"})),(0,l.kt)("p",null,"This is the fourth release of the Pulsar Node.js client.\n",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/pulsar-client/v/1.3.0"},"https://www.npmjs.com/package/pulsar-client/v/1.3.0")),(0,l.kt)("h4",{id:"enhancements"},"Enhancements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Added type definitions for TypeScript ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/140"},"#140")),(0,l.kt)("li",{parentName:"ul"},"Producer#send returns the message ID as a Promise ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/137"},"#137"))),(0,l.kt)("h4",{id:"features"},"Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Added unsubscribe method to Consumer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/120"},"#120")),(0,l.kt)("li",{parentName:"ul"},"ZSTD and SNAPPY compression formats are supported ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/121"},"#121")),(0,l.kt)("li",{parentName:"ul"},"Producer#send supports deliverAt and deliverAfter ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/123"},"#123")),(0,l.kt)("li",{parentName:"ul"},"Added getProducerName and getTopic methods to Producer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/126"},"#126")),(0,l.kt)("li",{parentName:"ul"},"Enabled specifying topics that Consumer subscribes to in a pattern ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/125"},"#125")),(0,l.kt)("li",{parentName:"ul"},"Enabled specifying an array of topics that Consumer subscribes to ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/130"},"#130"))),(0,l.kt)("p",null,"For a complete list of issues fixed, see\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-node/milestone/5?closed=1"},"https://github.com/apache/pulsar-client-node/milestone/5?closed=1")))}m.isMDXComponent=!0}}]);