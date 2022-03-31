"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3536],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(a),h=n,f=m["".concat(o,".").concat(h)]||m[h]||u[h]||p;return a?r.createElement(f,i(i({ref:t},l),{},{components:a})):r.createElement(f,i({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<p;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},98849:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=a(87462),n=a(63366),p=(a(67294),a(3905)),i=["components"],s={id:"client-java-2.5.1",title:"Client Java 2.5.1",sidebar_label:"Client Java 2.5.1"},o=void 0,c={unversionedId:"versioned/client-java-2.5.1",id:"versioned/client-java-2.5.1",title:"Client Java 2.5.1",description:"Issue 8294Some errors on the official website document of Pulsar Java client #8294 #8296",source:"@site/release-notes/versioned/client-java-2.5.1.md",sourceDirName:"versioned",slug:"/versioned/client-java-2.5.1",permalink:"/zh-CN/release-notes/versioned/client-java-2.5.1",tags:[],version:"current",frontMatter:{id:"client-java-2.5.1",title:"Client Java 2.5.1",sidebar_label:"Client Java 2.5.1"}},l={},u=[],m={toc:u};function h(e){var t=e.components,a=(0,n.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"[Issue 8294][docs]","Some errors on the official website document of Pulsar Java client #8294 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8296"},"#8296"),(0,p.kt)("br",{parentName:"p"}),"\n","[python client]","Support generate pulsar-client for python3.8 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6741"},"#6741"),(0,p.kt)("br",{parentName:"p"}),"\n","Fixed avro schema decode error in functions ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6662"},"#6662"),(0,p.kt)("br",{parentName:"p"}),"\n","Fix send get raw schema request ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6650"},"#6650"),(0,p.kt)("br",{parentName:"p"}),"\n","Fix admin getLastMessageId return batchIndex ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6511"},"#6511"),(0,p.kt)("br",{parentName:"p"}),"\n","[pulsar-client-cpp]"," Fix Redelivery of Messages on UnackedMessageTracker When Ack Messages . ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6498"},"#6498"),(0,p.kt)("br",{parentName:"p"}),"\n","[pulsar-client]"," remove duplicate cnx method ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6490"},"#6490"),(0,p.kt)("br",{parentName:"p"}),"\n","[pulsar-client]"," fix deadlock on send failure ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6488"},"#6488"),(0,p.kt)("br",{parentName:"p"}),"\n","Pulsar Java client: Use System.nanoTime() instead of System.currentTimeMillis() to measure elapsed time ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6454"},"#6454"),(0,p.kt)("br",{parentName:"p"}),"\n","[Java client]"," MultiTopics discovery is broken due to discovery task scheduled twice instead of pendingBatchRecei\u2026 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6407"},"#6407"),(0,p.kt)("br",{parentName:"p"}),"\n","[Issue 3762][Schema]"," Fix wrong avro schema ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6406"},"#6406"),(0,p.kt)("br",{parentName:"p"}),"\n","Issue-6403: Consumer received duplicated deplayed messages upon restart ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6404"},"#6404"),(0,p.kt)("br",{parentName:"p"}),"\n","Seek to the first one >= timestamp ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6393"},"#6393"),(0,p.kt)("br",{parentName:"p"}),"\n","[Reader]"," Should set either start message id or start message from roll back duration. ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6392"},"#6392"),(0,p.kt)("br",{parentName:"p"}),"\n","[Issue 6168]"," Fix Unacked Message Tracker by Using Time Partition on C++ ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6391"},"#6391"),(0,p.kt)("br",{parentName:"p"}),"\n","fix duplicate key to send propertys ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6390"},"#6390"),(0,p.kt)("br",{parentName:"p"}),"\n","Independent schema is set for each consumer generated by topic ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6356"},"#6356"),(0,p.kt)("br",{parentName:"p"}),"\n","[Java Reader Client]"," Start reader inside batch result in read first message in batch. ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6345"},"#6345"),(0,p.kt)("br",{parentName:"p"}),"\n","client: make SubscriptionMode a member of ConsumerConfigurationData ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6337"},"#6337"),(0,p.kt)("br",{parentName:"p"}),"\n","[Fix-6273]"," Flush the potential duplicated message when add messages to a batch. ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6326"},"#6326"),(0,p.kt)("br",{parentName:"p"}),"\n","Fix get schema version in HttpLookupService. ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6193"},"#6193"),(0,p.kt)("br",{parentName:"p"}),"\n","Fix available permits may be greater than 1 even though queue size is 0. ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6106"},"#6106"),(0,p.kt)("br",{parentName:"p"}),"\n","Fix zero queue consumer message redelivery ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6076"},"#6076"),(0,p.kt)("br",{parentName:"p"}),"\n","[minor]"," make acker in BatchMessageIdImpl transient ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/6064"},"#6064")))}h.isMDXComponent=!0}}]);