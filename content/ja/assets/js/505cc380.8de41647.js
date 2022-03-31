"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[84220],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},49606:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],d={id:"pulsar-cs-0.10.0",title:"Pulsar DotPulsar",sidebar_label:"Pulsar DotPulsar"},l=void 0,s={unversionedId:"versioned/pulsar-cs-0.10.0",id:"versioned/pulsar-cs-0.10.0",title:"Pulsar DotPulsar",description:"Added",source:"@site/release-notes/versioned/pulsar-cs-0.10.0.md",sourceDirName:"versioned",slug:"/versioned/pulsar-cs-0.10.0",permalink:"/ja/release-notes/versioned/pulsar-cs-0.10.0",tags:[],version:"current",frontMatter:{id:"pulsar-cs-0.10.0",title:"Pulsar DotPulsar",sidebar_label:"Pulsar DotPulsar"}},u={},c=[{value:"Added",id:"added",level:2},{value:"Changed",id:"changed",level:2},{value:"Fixed",id:"fixed",level:2}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"added"},"Added"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added performance improvements when receiving data"),(0,o.kt)("li",{parentName:"ul"},"Added the IHandleStateChanged\\<TStateChanged",">"," interface for easier state monitoring"),(0,o.kt)("li",{parentName:"ul"},"Added StateChangedHandler methods on ConsumerBuilder, ReaderBuilder, and ProducerBuilder for easier state monitoring"),(0,o.kt)("li",{parentName:"ul"},"Added StateChangedHandler property on ConsumerOptions, ReaderOptions, and ProducerOptions for easier state monitoring"),(0,o.kt)("li",{parentName:"ul"},"Added four new DotPulsarExceptions: InvalidTransactionStatusException, NotAllowedException, TransactionConflictException and TransactionCoordinatorNotFoundException"),(0,o.kt)("li",{parentName:"ul"},"Added properties on Message to read EventTime and PublishTime as DateTime"),(0,o.kt)("li",{parentName:"ul"},"Added methods on the IMessageBuilder to set EventTime and DeliverAt using DateTime"),(0,o.kt)("li",{parentName:"ul"},"Added properties on MessageMetadata to set EventTime and DeliverAtTime using DateTime"),(0,o.kt)("li",{parentName:"ul"},"Added seeking by MessageId on the Reader"),(0,o.kt)("li",{parentName:"ul"},"Added seeking by message publish time on the Consumer and Reader"),(0,o.kt)("li",{parentName:"ul"},"Added GetLastMessageId on the Reader")),(0,o.kt)("h2",{id:"changed"},"Changed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The protobuf-net dependency is upgraded from 2.4.6 to 3.0.73 to get support for ReadOnlySequence\\<byte",">")),(0,o.kt)("h2",{id:"fixed"},"Fixed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reconnection issues when seeking")))}m.isMDXComponent=!0}}]);