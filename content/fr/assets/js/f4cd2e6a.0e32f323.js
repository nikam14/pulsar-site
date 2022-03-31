"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[63392],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),h=n,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},30755:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],s={author:"Matteo Merli, Sijie Guo",title:"Apache Pulsar 2.8.0"},l="An Overview of the 2.8.0 Release",u={permalink:"/fr/blog/2021/06/12/Apache-Pulsar-2-8-0",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/blog/2021-06-12-Apache-Pulsar-2-8-0.md",source:"@site/i18n/fr/docusaurus-plugin-content-blog/2021-06-12-Apache-Pulsar-2-8-0.md",title:"Apache Pulsar 2.8.0",description:"We are very glad to see the Apache Pulsar community has successfully released the 2.8.0 version, which includes a number of exciting upgrades and enhancements. This blog provides a deep dive into the updates from the 2.8.0 release as well as a detailed look at the major Pulsar developments that have helped it evolve into the unified messaging and streaming platform it is today.",date:"2021-06-12T00:00:00.000Z",formattedDate:"12 juin 2021",tags:[],readingTime:13.47,truncated:!0,authors:[{name:"Matteo Merli, Sijie Guo"}],frontMatter:{author:"Matteo Merli, Sijie Guo",title:"Apache Pulsar 2.8.0"},prevItem:{title:"Apache Pulsar 2.7.3",permalink:"/fr/blog/2021/08/11/Apache-Pulsar-2-7-3"},nextItem:{title:"Apache Pulsar 2.7.2",permalink:"/fr/blog/2021/05/13/Apache-Pulsar-2-7-2"}},c={authorsImageUrls:[void 0]},d=[{value:"Exclusive Producer",id:"exclusive-producer",level:2},{value:"Package Management API",id:"package-management-api",level:2},{value:"Simplified Client Memory Limit Settings",id:"simplified-client-memory-limit-settings",level:2},{value:"Broker Entry Metadata",id:"broker-entry-metadata",level:2},{value:"New Protobuf Code Generator",id:"new-protobuf-code-generator",level:2},{value:"Transactions",id:"transactions",level:2},{value:"The Evolution of Apache Pulsar",id:"the-evolution-of-apache-pulsar",level:2},{value:"Step 1: A scalable storage for streams of data",id:"step-1-a-scalable-storage-for-streams-of-data",level:2},{value:"Step 2: A multi-layered architecture that separates compute from storage.",id:"step-2-a-multi-layered-architecture-that-separates-compute-from-storage",level:2},{value:"Step 3: Unified messaging model and API",id:"step-3-unified-messaging-model-and-api",level:2},{value:"Step 4: Schema API",id:"step-4-schema-api",level:2},{value:"Step 5: Functions and IO API",id:"step-5-functions-and-io-api",level:2},{value:"Step 6: Infinite storage for Pulsar via Tiered Storage",id:"step-6-infinite-storage-for-pulsar-via-tiered-storage",level:2},{value:"Step 7: Protocol Handler",id:"step-7-protocol-handler",level:2},{value:"Step 8: Transaction API for exactly-once stream processing",id:"step-8-transaction-api-for-exactly-once-stream-processing",level:2}],p={toc:d};function h(e){var t=e.components,s=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We are very glad to see the Apache Pulsar community has successfully released the 2.8.0 version, which includes a number of exciting upgrades and enhancements. This blog provides a deep dive into the updates from the 2.8.0 release as well as a detailed look at the major Pulsar developments that have helped it evolve into the unified messaging and streaming platform it is today."),(0,i.kt)("p",null,"Note: The Pulsar community typically releases a major release every 3 months, but it has been 6 months since the release of 2.7.0. We spent more time on 2.8.0 in order to make the transaction API generally available to the Pulsar community."),(0,i.kt)("h1",{id:"release-28-overview"},"Release 2.8 Overview"),(0,i.kt)("p",null,"The key features and updates in this release are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Exclusive Producer"),(0,i.kt)("li",{parentName:"ul"},"Package Management API"),(0,i.kt)("li",{parentName:"ul"},"Simplified Client Memory Limit Settings"),(0,i.kt)("li",{parentName:"ul"},"Broker Entry Metadata"),(0,i.kt)("li",{parentName:"ul"},"New Protobuf Code Generator"),(0,i.kt)("li",{parentName:"ul"},"Transactions")),(0,i.kt)("h2",{id:"exclusive-producer"},"Exclusive Producer"),(0,i.kt)("p",null,"By default, the Pulsar producer API provides a \u201cmulti-writer\u201d semantic to append messages to a topic. However, there are several use cases that require exclusive access for a single writer, such as ensuring a linear non-interleaved history of messages or providing a mechanism for leader election."),(0,i.kt)("p",null,"This new feature allows applications to require exclusive producer access in order to achieve a \u201csingle-writer\u201d situation. It guarantees that there should be 1 single writer in any combination of errors. If the producer loses its exclusive access, no more messages from it can be published on the topic."),(0,i.kt)("p",null,"One use case for this feature is the metadata controller in Pulsar Functions. In order to write a single linear history of all the functions metadata updates, the metadata controller requires to elect one leader and that all the \u201cdecisions\u201d made by this leader be written on the metadata topic. By leveraging the exclusive producer feature, Pulsar guarantees that the metadata topic contains different segments of updates, one per each successive leader, and there is no interleaving across different leaders. See \u201c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/wiki/PIP-68%3A-Exclusive-Producer"},"PIP-68: Exclusive Producer"),"\u201d for more details."),(0,i.kt)("h2",{id:"package-management-api"},"Package Management API"),(0,i.kt)("p",null,"Since its introduction in version 2.0, the Functions API has become hugely popular among Pulsar users. While it offers many benefits, there are a number of ways to improve the user experience. For example, today, if a function is deployed multiple times, the function package ends up being uploaded multiple times. Also, there is no version management in Pulsar for Functions and IO connectors. The newly introduced package management API provides an easier way to manage the packages for Functions and IO connectors and significantly simplifies the upgrade and rollback processes. Read \u201c",(0,i.kt)("a",{parentName:"p",href:"http://pulsar.apache.org/docs/en/admin-api-packages/"},"Package Management API"),"\u201d for more details."),(0,i.kt)("h2",{id:"simplified-client-memory-limit-settings"},"Simplified Client Memory Limit Settings"),(0,i.kt)("p",null,"Prior to 2.8, there are multiple settings in producers and consumers that allow controlling the sizes of the internal message queues. These settings ultimately control the amount of memory the Pulsar client uses. However, there are few issues with this approach that make it complicated to select an overall configuration that controls the total usage of memory."),(0,i.kt)("p",null,"For example, the settings are based on the \u201cnumber of messages\u201d, so the expected message size must be adjusted per producer or consumer. If an application has a large (or unknown) number of producers or consumers, it\u2019s very difficult to select an appropriate value for queue sizes. The same is true for topics that have many partitions."),(0,i.kt)("p",null,"In 2.8, we introduced a new API to set the memory limit. This single ",(0,i.kt)("inlineCode",{parentName:"p"},"memoryLimit")," setting specifies a maximum amount of memory on a given Pulsar client. The producers and consumers compete for the memory assigned. It ensures the memory used by the Pulsar client will not go beyond the set limit. Read \u201c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/wiki/PIP-74%3A-Pulsar-client-memory-limits"},"PIP-74: Pulsar client memory limits"),"\u201d for more details."),(0,i.kt)("h2",{id:"broker-entry-metadata"},"Broker Entry Metadata"),(0,i.kt)("p",null,"Pulsar messages define a very comprehensive set of metadata properties. However, to add a new property, the ",(0,i.kt)("inlineCode",{parentName:"p"},"MessageMetadata")," definition in Pulsar protocol must change to inform both broker and client of the newly introduced property."),(0,i.kt)("p",null,"But in certain cases, this metadata property might need to be added from the broker side, or need to be retrieved by the broker at a very low cost. To prevent deserializing these properties from the message metadata, we introduced \u201cBroker Entry Metadata\u201d in 2.8.0 to provide a lightweight approach to add additional metadata properties without serializing and deserializing the protobuf-encoded ",(0,i.kt)("inlineCode",{parentName:"p"},"MessageMetadata"),"."),(0,i.kt)("p",null,"This feature unblocks a new set of capabilities for Pulsar. For example, we can leverage broker entry metadata to generate broker publish time for the messages appended to the Pulsar topic. The other example is to generate a monotonically increasing sequence-id for messages produced to a Pulsar topic. We use this feature in Kafka-on-Pulsar to implement Kafka offset."),(0,i.kt)("h2",{id:"new-protobuf-code-generator"},"New Protobuf Code Generator"),(0,i.kt)("p",null,"Pulsar uses Google Protobuf in order to perform serialization and deserialization of the commands that are exchanged between clients and brokers. Because of the overhead involved with the regular Protobuf implementation, we have been using a modified version of Protobuf 2.4.1. The modifications were done to ensure a more efficient serialization code that used thread local cache for the objects used in the process."),(0,i.kt)("p",null,"This approach introduced a few issues. For example, the patch to the Protobuf code generator is only based on Protobuf version 2.4.1 and cannot be upgraded to the newer Protobuf versions. In 2.8, we switched the patched Protobuf 2.4.1 to Splunk LightProto as the code generator. The new code generator generates the fastest possible Java code for Protobuf SerDe, is 100% compatible with proto2 definition and wire protocol, and provides zero-copy deserialization using Netty ByteBuf."),(0,i.kt)("h2",{id:"transactions"},"Transactions"),(0,i.kt)("p",null,"Prior to Pulsar 2.8, Pulsar only supported exactly-once semantics on single topic through Idempotent Producer. While powerful, Idempotent producer only solves a narrow scope of challenges for exactly-once semantics. For example, there is no ",(0,i.kt)("inlineCode",{parentName:"p"},"atomicity")," when a producer attempts to produce messages to multiple topics. A publish error can occur when the broker serving one of the topics crashes. If the producer doesn\u2019t retry publishing the message again, it results in some messages being persisted once and others being lost. If the producer retries, it results in some messages being persisted multiple times."),(0,i.kt)("p",null,"In order to address the remaining challenges described above, we\u2019ve strengthened the Pulsar\u2019s delivery semantics by introducing a Pulsar Transaction API to support atomic writes and acknowledgements across multiple topics. The addition of the Transaction API to Apache Pulsar completes our vision of making Pulsar a complete unified messaging and streaming platform."),(0,i.kt)("p",null,"Pulsar PMC member, Penghui Li, goes over this functionality in great detail in his recent blog, Exactly-once Semantics with Transactions in Pulsar. You can read it to learn more about the ",(0,i.kt)("a",{parentName:"p",href:"https://streamnative.io/en/blog/release/2021-06-14-exactly-once-semantics-with-transactions-in-pulsar"},"exactly-once semantics support in Pulsar"),"."),(0,i.kt)("h1",{id:"building-a-unified-messaging-and-streaming-platform-with-apache-pulsar"},"Building a Unified Messaging and Streaming Platform with Apache Pulsar"),(0,i.kt)("h2",{id:"the-evolution-of-apache-pulsar"},"The Evolution of Apache Pulsar"),(0,i.kt)("p",null,"Apache Pulsar is widely adopted by hundreds of companies across the globe, including Splunk, Tencent, Verizon, and Yahoo! JAPAN, just to name a few. Born as a cloud-native distributed messaging system, Apache Pulsar has evolved into a complete messaging and streaming platform for publishing and subscribing, storing, and processing streams of data at scale and in real-time."),(0,i.kt)("p",null,"Back in 2012 the Yahoo! team was looking for a global, geo-replicated infrastructure that could manage all of Yahoo!\u2019s messaging data. After vetting the messaging and streaming landscape it became clear that existing technologies were not able to serve the need for an event-driven organization. As a result, the team at Yahoo! set out to build its own."),(0,i.kt)("p",null,"At the time, there were generally two types of systems to handle in-motion data: message queues that handled mission-critical business events in real-time, and streaming systems that handled scalable data pipelines at scale. Companies had to limit their capabilities to one or the other, or they had to adopt multiple different technologies. If they chose multiple technologies, they would end up with a complex infrastructure that often resulted in data segregation and data silos, with one silo for message queues used to build application services and the other silo for streaming systems used to build data services. The figure below illustrates what this can look like."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(53674).Z,width:"1508",height:"1060"})),(0,i.kt)("p",null,"However, with the diversity of data that companies need to process beyond operational data (like log data, click events, etc), coupled with the increase in the number of downstream systems that need access to combined business data and operational data, the system would need to support message queueing and streaming."),(0,i.kt)("p",null,"Beyond that, companies need an infrastructure platform that would allow them to build all of their applications on top of it, and then have those applications handle in-motion data (messaging and streaming data) by default. This way real-time data infrastructure could be significantly simplified, as illustrated in the diagram below."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(97037).Z,width:"1240",height:"892"})),(0,i.kt)("p",null,"With that vision, the Yahoo! team started working on building a unified messaging and streaming platform for in-motion data. Below is an overview of the key milestones on the Pulsar journey, from inception to today."),(0,i.kt)("h2",{id:"step-1-a-scalable-storage-for-streams-of-data"},"Step 1: A scalable storage for streams of data"),(0,i.kt)("p",null,"The journey of Pulsar began with Apache BookKeeper. Apache BookKeeper implements a log-like abstraction for continuous streams and provides the ability to run it at internet-scale with simple write-read log APIs. A log provides a great abstraction for building distributed systems, such as distributed databases and pub-sub messaging. The write APIs are in the form of appends to the log. And the read APIs are in the form of continuous read from a starting offset defined by the readers. The implementation of BookKeeper created the foundation - a scalable log-backed messaging and streaming system."),(0,i.kt)("h2",{id:"step-2-a-multi-layered-architecture-that-separates-compute-from-storage"},"Step 2: A multi-layered architecture that separates compute from storage."),(0,i.kt)("p",null,"On top of the scalable log storage, a stateless serving layer was introduced which runs stateless brokers for publishing and consuming messages. This multi-layered architecture separates serving/compute from storage, allowing Pulsar to manage serving and storage in separate layers."),(0,i.kt)("p",null,"This architecture also ensures instant scalability and higher availability. Both of these factors are extremely important and make Pulsar well-suited for building mission-critical services, such as billing platforms for financial use cases, transaction processing systems for e-commerce and retailers, and real-time risk control systems for financial institutions."),(0,i.kt)("h2",{id:"step-3-unified-messaging-model-and-api"},"Step 3: Unified messaging model and API"),(0,i.kt)("p",null,"In a modern data architecture, the real-time use cases can typically be categorized into two categories: queueing and streaming. Queueing is typically used for building core business application services while streaming is typically used for building real-time data services such as data pipelines."),(0,i.kt)("p",null,"To provide one platform able to serve both application and data services required a unified messaging model that integrates queuing and streaming semantics. The Pulsar topics become the source of truth for consumption. Messages can be stored only once on topics, but can be consumed in different ways via different subscriptions. Such unification significantly reduces the complexity of managing and developing messaging and streaming applications."),(0,i.kt)("h2",{id:"step-4-schema-api"},"Step 4: Schema API"),(0,i.kt)("p",null,"Next, a new Pulsar schema registry and a new type-safe producer & consumer API were added. The built-in schema registry enables message producers and consumers on Pulsar topics to coordinate on the structure of the topic\u2019s data through the Pulsar broker itself, without needing an external coordination mechanism. With data schemas, every single piece of data traveling through Pulsar is completely discoverable, enabling you to build systems that can easily adapt as the data changes."),(0,i.kt)("p",null,"Furthermore, the schema registry keeps track of data compatibility between versions of the schema. As the new schemas are uploaded the registry ensures that new schema versions are able to be read by old consumers. This ensures that Producers cannot break Consumers."),(0,i.kt)("h2",{id:"step-5-functions-and-io-api"},"Step 5: Functions and IO API"),(0,i.kt)("p",null,"The next step was to build APIs that made it easy to get data in and out of Pulsar and process it. The goal was to make it easy to build event-driven applications and real-time data pipelines with Apache Pulsar, so you can then process those events when they arrive, no matter where they originated from."),(0,i.kt)("p",null,"The Pulsar IO API allows you to build real-time streaming data pipelines by plugging various source connectors to get data from external systems into Pulsar and sink connectors to get data from Pulsar into external systems. Today, Pulsar provides several built-in connectors that you can use."),(0,i.kt)("p",null,"Additionally, StreamNative Hub (a registry of Pulsar connectors) provides dozens of connectors integrated with popular data systems. If the IO API is for building streaming data pipelines, the Functions API is for building event-driven applications and real-time stream processors."),(0,i.kt)("p",null,"The serverless function concepts were adopted into stream processing and then built the Functions API as a lightweight serverless library that you can write any event processing logic using any language you like. The underlying motivation was to enable your engineering team to write stream processing logic without the operational complexity of running and maintaining yet another cluster."),(0,i.kt)("h2",{id:"step-6-infinite-storage-for-pulsar-via-tiered-storage"},"Step 6: Infinite storage for Pulsar via Tiered Storage"),(0,i.kt)("p",null,"As adoption of Apache Pulsar continued and the amount of data stored in Pulsar increased, users eventually hit a \u201cretention cliff\u201d, at which point it became significantly more expensive to store, manage, and retrieve data in Apache BookKeeper. To work around this, operators and application developers typically use an external store like AWS S3 as a sink for long-term storage. This means you lose most of the benefits of Pulsar\u2019s immutable stream and ordering semantics, and instead end up having to manage two different systems with different access patterns."),(0,i.kt)("p",null,"The introduction of Tiered Storage allows Pulsar to offload the majority of the data to a remote cloud-native storage. This cheaper form of storage readily scales with the volume of data. More importantly, with the addition of Tiered Storage, Pulsar provides the batch storage capabilities needed to support batch processing when integrating with a unified batch and stream processor like Flink. The unified batch and stream processing capabilities integrated with Pulsar enable companies to query real-time streams with historical context quickly and easily, unlocking a unique competitive advantage."),(0,i.kt)("h2",{id:"step-7-protocol-handler"},"Step 7: Protocol Handler"),(0,i.kt)("p",null,"After introducing tiered storage, Pulsar evolved from a Pub/Sub messaging system into a scalable stream data system that can ingest, store, and process streams of data. However, existing applications written using other messaging protocols such as Kafka, AMQP, MQTT, etc had to be rewritten to adopt Pulsar\u2019s messaging protocol."),(0,i.kt)("p",null,"The Protocol Handler API  further reduces the overhead of adopting Pulsar for building messaging and streaming applications, and allows developers to extend Pulsar capabilities to other messaging domains by leveraging all the benefits provided by Pulsar architecture. This resulted in major collaborations between Pulsar and other industry leaders to develop popular protocol handlers including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hub.streamnative.io/protocol-handlers/kop/0.2.0"},"Kafka-on-Pulsar (KoP)"),", which was ",(0,i.kt)("a",{parentName:"li",href:"https://streamnative.io/en/blog/tech/2020-03-24-bring-native-kafka-protocol-support-to-apache-pulsar"},"launched in March 2020")," by OVHCloud and StreamNative."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hub.streamnative.io/protocol-handlers/aop/0.1.0"},"AMQP-on-Pulsar (AoP)"),", which was ",(0,i.kt)("a",{parentName:"li",href:"https://streamnative.io/en/blog/tech/2020-06-15-announcing-aop-on-pulsar"},"announced in June 2020")," by China Mobile and StreamNative."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hub.streamnative.io/protocol-handlers/mop/0.2.0"},"MQTT-on-Pulsar (MoP)"),", which was ",(0,i.kt)("a",{parentName:"li",href:"https://streamnative.io/en/blog/tech/2020-09-28-announcing-mqtt-on-pulsar"},"announced in August 2020")," by StreamNative."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/streamnative/rop"},"RocketMQ-on-Pulsar (RoP)"),", which was launched in May 2021 by Tencent Cloud and StreamNative.")),(0,i.kt)("h2",{id:"step-8-transaction-api-for-exactly-once-stream-processing"},"Step 8: Transaction API for exactly-once stream processing"),(0,i.kt)("p",null,"More recently, transactions were added to Apache Pulsar to enable exactly-once semantics for stream processing. This is a fundamental feature that provides a strong guarantee for streaming data transformations, making it easy to build scalable, fault-tolerant, stateful messaging and streaming applications that process streams of data."),(0,i.kt)("p",null,"Furthermore, the transaction API capabilities are not limited to a given language client. Pulsar\u2019s support for transactional messaging and streaming is primarily a protocol-level capability that can be presented in any language. Such protocol-level capability can be leveraged in all kinds of applications."),(0,i.kt)("h1",{id:"building-an-ecosystem-for-unified-messaging-and-streaming"},"Building an ecosystem for unified messaging and streaming"),(0,i.kt)("p",null,"In addition to contributing to the Pulsar technology, the community is also working to build a robust ecosystem to support it. Pulsar\u2019s ability to support a rich ecosystem of pub-sub libraries, connectors, functions, protocol handlers, and integrations with popular query engines will enable Pulsar adopters to streamline workflows and achieve new use cases."),(0,i.kt)("h1",{id:"what-is-next"},"What is Next?"),(0,i.kt)("p",null,"If you are interested in learning more about Pulsar 2.8.0, you can ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/en/versions/"},"download 2.8.0")," and try it out today!"),(0,i.kt)("p",null,"If you want to learn more about how companies have adopted Pulsar, you can ",(0,i.kt)("a",{parentName:"p",href:"https://hopin.com/events/pulsar-summit-north-america-2021"},"sign up")," for Pulsar Summit NA 2021!"),(0,i.kt)("p",null,"For more information about the Apache Pulsar project and the progress, please visit the official website at ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org"},"https://pulsar.apache.org")," and follow the project on Twitter ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/apache_pulsar"},"@apache_pulsar"),"."))}h.isMDXComponent=!0},53674:function(e,t,a){t.Z=a.p+"assets/images/280-1-98d0691de155a939f53568aa08a2bac4.png"},97037:function(e,t,a){t.Z=a.p+"assets/images/280-2-10c31765a2c1024630b6c7bcce3dcc23.png"}}]);