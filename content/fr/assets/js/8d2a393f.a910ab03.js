"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[80522],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(a),h=n,f=m["".concat(l,".").concat(h)]||m[h]||s[h]||p;return a?r.createElement(f,i(i({ref:t},u),{},{components:a})):r.createElement(f,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<p;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},34047:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var r=a(87462),n=a(63366),p=(a(67294),a(3905)),i=["components"],o={id:"client-java-2.7.1",title:"Client Java 2.7.1",sidebar_label:"Client Java 2.7.1"},l=void 0,c={unversionedId:"versioned/client-java-2.7.1",id:"versioned/client-java-2.7.1",title:"Client Java 2.7.1",description:"Add original info when publishing message to dead letter topic #9655",source:"@site/release-notes/versioned/client-java-2.7.1.md",sourceDirName:"versioned",slug:"/versioned/client-java-2.7.1",permalink:"/fr/release-notes/versioned/client-java-2.7.1",tags:[],version:"current",frontMatter:{id:"client-java-2.7.1",title:"Client Java 2.7.1",sidebar_label:"Client Java 2.7.1"}},u={},s=[],m={toc:s};function h(e){var t=e.components,a=(0,n.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Add original info when publishing message to dead letter topic ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9655"},"#9655"),(0,p.kt)("br",{parentName:"p"}),"\n","Fixed hasMessageAvailable() with empty topic ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9652"},"#9652"),(0,p.kt)("br",{parentName:"p"}),"\n","[client]"," Add BouncyCastleProvider as security provider to prevent NPE ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9601"},"#9601"),(0,p.kt)("br",{parentName:"p"}),"\n","[Issue 9495][c++ client]"," add 'encrypted' option in commands.newproducer() ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9542"},"#9542"),(0,p.kt)("br",{parentName:"p"}),"\n","[Issue9507][testclient]"," add --batch-index-ack for the pulsar-perf ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9521"},"#9521"),(0,p.kt)("br",{parentName:"p"}),"\n","[client]"," Cleanup consumer on multitopic subscribe failure ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9419"},"#9419"),(0,p.kt)("br",{parentName:"p"}),"\n","Compression must be applied during deferred schema preparation and enableBatching is enabled ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9396"},"#9396"),(0,p.kt)("br",{parentName:"p"}),"\n","[client]"," Add default implementation of CryptoKeyReader ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9379"},"#9379"),(0,p.kt)("br",{parentName:"p"}),"\n","Fix locking for ConsumerImpl when creating deadLetterProducer. ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9166"},"#9166"),(0,p.kt)("br",{parentName:"p"}),"\n","[Issue 9155][build]","Fixing the mac build if you use a different openssl ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9165"},"#9165"),(0,p.kt)("br",{parentName:"p"}),"\n","Fix NPE when MultiTopicsConsumerImpl receives null value messages ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9113"},"#9113"),(0,p.kt)("br",{parentName:"p"}),"\n","[feature][cpp-client]","Expose cpp end to end encryption interface ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9074"},"#9074"),(0,p.kt)("br",{parentName:"p"}),"\n","[DOCS]",' Update 271 "concept-client" ',(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9065"},"#9065"),(0,p.kt)("br",{parentName:"p"}),"\n","[DOCS]"," Refine reader interface for Pulsar client ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9050"},"#9050"),(0,p.kt)("br",{parentName:"p"}),"\n","[pulsar-client-api]"," Fix Unavailable Hash Range Condition ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/9041"},"#9041"),(0,p.kt)("br",{parentName:"p"}),"\n","Add more information in send timeout exception ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8931"},"#8931"),(0,p.kt)("br",{parentName:"p"}),"\n","[C++]"," Add consumer's configs for reader ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8905"},"#8905"),(0,p.kt)("br",{parentName:"p"}),"\n","[Issue 8787][C++]"," Add reader internal subscription name setter. ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8823"},"#8823"),(0,p.kt)("br",{parentName:"p"}),"\n","[docs]"," Update Websocket content ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8762"},"#8762"),(0,p.kt)("br",{parentName:"p"}),"\n","[C++]"," fix cpp client do AcknowledgeCumulative not clean up previous message ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8606"},"#8606"),(0,p.kt)("br",{parentName:"p"}),"\n","always remove message data size ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8566"},"#8566")))}h.isMDXComponent=!0}}]);