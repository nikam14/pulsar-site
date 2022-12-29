"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[7502],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19570:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const s={id:"concepts-clients",title:"Pulsar Clients",sidebar_label:"Clients",original_id:"concepts-clients"},i=void 0,o={unversionedId:"concepts-clients",id:"version-2.7.0/concepts-clients",title:"Pulsar Clients",description:"Pulsar exposes a client API with language bindings for Java, Go, Python, C++ and C#. The client API optimizes and encapsulates Pulsar's client-broker communication protocol and exposes a simple and intuitive API for use by applications.",source:"@site/versioned_docs/version-2.7.0/concepts-clients.md",sourceDirName:".",slug:"/concepts-clients",permalink:"/docs/2.7.0/concepts-clients",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/concepts-clients.md",tags:[],version:"2.7.0",frontMatter:{id:"concepts-clients",title:"Pulsar Clients",sidebar_label:"Clients",original_id:"concepts-clients"},sidebar:"version-2.7.0/docsSidebar",previous:{title:"Architecture",permalink:"/docs/2.7.0/concepts-architecture-overview"},next:{title:"Geo Replication",permalink:"/docs/2.7.0/concepts-replication"}},c={},l=[{value:"Client setup phase",id:"client-setup-phase",level:2},{value:"Reader interface",id:"reader-interface",level:2}],p={toc:l};function d(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pulsar exposes a client API with language bindings for ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.0/client-libraries-java"},"Java"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.0/client-libraries-go"},"Go"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.0/client-libraries-python"},"Python"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.0/client-libraries-cpp"},"C++")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.0/client-libraries-dotnet"},"C#"),". The client API optimizes and encapsulates Pulsar's client-broker communication protocol and exposes a simple and intuitive API for use by applications."),(0,r.kt)("p",null,"Under the hood, the current official Pulsar client libraries support transparent reconnection and/or connection failover to brokers, queuing of messages until acknowledged by the broker, and heuristics such as connection retries with backoff."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Custom client libraries"),"\nIf you'd like to create your own client library, we recommend consulting the documentation on Pulsar's custom ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.0/developing-binary-protocol"},"binary protocol"),".")),(0,r.kt)("h2",{id:"client-setup-phase"},"Client setup phase"),(0,r.kt)("p",null,"Before an application creates a producer/consumer, the Pulsar client library needs to initiate a setup phase including two steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The client attempts to determine the owner of the topic by sending an HTTP lookup request to the broker. The request could reach one of the active brokers which, by looking at the (cached) zookeeper metadata knows who is serving the topic or, in case nobody is serving it, tries to assign it to the least loaded broker."),(0,r.kt)("li",{parentName:"ol"},"Once the client library has the broker address, it creates a TCP connection (or reuse an existing connection from the pool) and authenticates it. Within this connection, client and broker exchange binary commands from a custom protocol. At this point the client sends a command to create producer/consumer to the broker, which will comply after having validated the authorization policy.")),(0,r.kt)("p",null,"Whenever the TCP connection breaks, the client immediately re-initiates this setup phase and keeps trying with exponential backoff to re-establish the producer or consumer until the operation succeeds."),(0,r.kt)("h2",{id:"reader-interface"},"Reader interface"),(0,r.kt)("p",null,'In Pulsar, the "standard" ',(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.0/concepts-messaging#consumers"},"consumer interface")," involves using consumers to listen on ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.0/reference-terminology#topic"},"topics"),", process incoming messages, and finally acknowledge those messages when they are processed. Whenever a new subscription is created, it is initially positioned at the end of the topic (by default), and consumers associated with that subscription begin reading with the first message created afterwards.  Whenever a consumer connects to a topic using a pre-existing subscription, it begins reading from the earliest message un-acked within that subscription. In summary, with the consumer interface, subscription cursors are automatically managed by Pulsar in response to ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.0/concepts-messaging#acknowledgement"},"message acknowledgements"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"reader interface")," for Pulsar enables applications to manually manage cursors. When you use a reader to connect to a topic---rather than a consumer---you need to specify ",(0,r.kt)("em",{parentName:"p"},"which")," message the reader begins reading from when it connects to a topic. When connecting to a topic, the reader interface enables you to begin with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"earliest")," available message in the topic"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"latest")," available message in the topic"),(0,r.kt)("li",{parentName:"ul"},'Some other message between the earliest and the latest. If you select this option, you\'ll need to explicitly provide a message ID. Your application will be responsible for "knowing" this message ID in advance, perhaps fetching it from a persistent data store or cache.')),(0,r.kt)("p",null,'The reader interface is helpful for use cases like using Pulsar to provide effectively-once processing semantics for a stream processing system. For this use case, it\'s essential that the stream processing system be able to "rewind" topics to a specific message and begin reading there. The reader interface provides Pulsar clients with the low-level abstraction necessary to "manually position" themselves within a topic.'),(0,r.kt)("p",null,"Internally, the reader interface is implemented as a consumer using an exclusive, non-durable subscription to the topic with a randomly-allocated name."),(0,r.kt)("p",null,"[ ",(0,r.kt)("strong",{parentName:"p"},"IMPORTANT")," ]"),(0,r.kt)("p",null,"Unlike subscription/consumer, readers are non-durable in nature and does not prevent data in a topic from being deleted, thus it is ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"strongly"))," advised that ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.0/cookbooks-retention-expiry"},"data retention")," be configured. If data retention for a topic is not configured for an adequate amount of time, messages that the reader has not yet read might be deleted .  This causes the readers to essentially skip messages. Configuring the data retention for a topic guarantees the reader with a certain duration to read a message."),(0,r.kt)("p",null,'Please also note that a reader can have a "backlog", but the metric is only used for users to know how behind the reader is. The metric is not considered for any backlog quota calculations. '),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The Pulsar consumer and reader interfaces",src:a(93296).Z,width:"1289",height:"1720"})),(0,r.kt)("p",null,"Here's a Java example that begins reading from the earliest available message on a topic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nimport org.apache.pulsar.client.api.Message;\nimport org.apache.pulsar.client.api.MessageId;\nimport org.apache.pulsar.client.api.Reader;\n\n// Create a reader on a topic and for a specific message (and onward)\nReader<byte[]> reader = pulsarClient.newReader()\n    .topic("reader-api-test")\n    .startMessageId(MessageId.earliest)\n    .create();\n\nwhile (true) {\n    Message message = reader.readNext();\n\n    // Process the message\n}\n\n')),(0,r.kt)("p",null,"To create a reader that reads from the latest available message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nReader<byte[]> reader = pulsarClient.newReader()\n    .topic(topic)\n    .startMessageId(MessageId.latest)\n    .create();\n\n")),(0,r.kt)("p",null,"To create a reader that reads from some message between the earliest and the latest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nbyte[] msgIdBytes = // Some byte array\nMessageId id = MessageId.fromByteArray(msgIdBytes);\nReader<byte[]> reader = pulsarClient.newReader()\n    .topic(topic)\n    .startMessageId(id)\n    .create();\n\n")))}d.isMDXComponent=!0},93296:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pulsar-reader-consumer-interfaces-4c838d3fa1b811f2c074087d44b991ea.png"}}]);