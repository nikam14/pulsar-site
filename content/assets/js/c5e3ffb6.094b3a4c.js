"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[60174],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var r=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=l(a),m=s,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||n;return a?r.createElement(d,i(i({ref:t},h),{},{components:a})):r.createElement(d,i({ref:t},h))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,i=new Array(n);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:s,i[1]=o;for(var l=2;l<n;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},15263:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var r=a(87462),s=(a(67294),a(3905));const n={id:"schema-overview",title:"Overview",sidebar_label:"Overview"},i=void 0,o={unversionedId:"schema-overview",id:"schema-overview",title:"Overview",description:"This section introduces the following content:",source:"@site/docs/schema-overview.md",sourceDirName:".",slug:"/schema-overview",permalink:"/docs/next/schema-overview",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/schema-overview.md",tags:[],version:"current",frontMatter:{id:"schema-overview",title:"Overview",sidebar_label:"Overview"},sidebar:"docsSidebar",previous:{title:"Multiple advertised listeners",permalink:"/docs/next/concepts-multiple-advertised-listeners"},next:{title:"Understand schema",permalink:"/docs/next/schema-understand"}},c={},l=[{value:"What is Pulsar Schema",id:"what-is-pulsar-schema",level:2},{value:"Why use it",id:"why-use-it",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Producer side",id:"producer-side",level:3},{value:"Consumer side",id:"consumer-side",level:3},{value:"Use case",id:"use-case",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],h={toc:l};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This section introduces the following content:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#what-is-pulsar-schema"},"What is Pulsar Schema")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#why-use-it"},"Why use it")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#how-it-works"},"How it works")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#use-case"},"Use case")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#whats-next"},"What's next?"))),(0,s.kt)("h2",{id:"what-is-pulsar-schema"},"What is Pulsar Schema"),(0,s.kt)("p",null,"Pulsar messages are stored as unstructured byte arrays and the data structure (as known as schema) is applied to this data only when it's read. So both the producer and consumer need to agree upon the data structure of the messages, including the fields and their associated types."),(0,s.kt)("p",null,"Pulsar schema is the metadata that defines how to translate the raw message bytes into a more formal structure type, serving as a protocol between the applications that generate messages and the applications that consume them. It serializes data into raw bytes before they are published to a topic and deserializes the raw bytes before they are delivered to consumers."),(0,s.kt)("p",null,"Pulsar uses a schema registry as a central repository to store the registered schema information, which enables producers/consumers to coordinate the schema of a topic\u2019s messages through brokers."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Pulsar schema",src:a(4356).Z,width:"1954",height:"1014"})),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Currently, Pulsar schema is available for ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/client-libraries-java"},"Java clients"),", ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/client-libraries-go"},"Go clients"),", ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/client-libraries-python"},"Python clients"),", ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/client-libraries-cpp"},"C++ clients"),", and ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/client-libraries-dotnet"},"C# clients"),".")),(0,s.kt)("h2",{id:"why-use-it"},"Why use it"),(0,s.kt)("p",null,"Type safety is extremely important in any application built around a messaging and streaming system. Raw bytes are flexible for data transfer, but the flexibility and neutrality come with a cost: you have to overlay data type checking and serialization/deserialization to ensure that the bytes fed into the system can be read and successfully consumed. In other words, you need to make sure the data is intelligible and usable to applications."),(0,s.kt)("p",null,"Pulsar schema resolves the pain points with the following capabilities:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'enforces the data type safety when a topic has a schema defined. As a result, producers/consumers are only allowed to connect if they are using a "compatible" schema.'),(0,s.kt)("li",{parentName:"ul"},"provides a central location for storing information about the schemas used within your organization, in turn greatly simplifies the sharing of this information across application teams."),(0,s.kt)("li",{parentName:"ul"},"serves as a single source of truth for all the message schemas used across all your services and development teams, which makes it easier for them to collaborate."),(0,s.kt)("li",{parentName:"ul"},"keeps data compatibility on-track between schema versions. When new schemas are uploaded, the new versions can be read by old consumers. "),(0,s.kt)("li",{parentName:"ul"},"stored in the existing storage layer BookKeeper, without additional system required.")),(0,s.kt)("h2",{id:"how-it-works"},"How it works"),(0,s.kt)("p",null,"Pulsar schemas are applied and enforced at the ",(0,s.kt)("strong",{parentName:"p"},"topic")," level. Producers and consumers can upload schemas to brokers, so Pulsar schemas work on both sides."),(0,s.kt)("h3",{id:"producer-side"},"Producer side"),(0,s.kt)("p",null,"This diagram illustrates how Pulsar schema works on the Producer side."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"How Pulsar schema works on the producer side",src:a(5590).Z,width:"1592",height:"915"})),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"The application uses a schema instance to construct a producer instance.\nThe schema instance defines the schema for the data being produced using the producer instance. Take Avro as an example, Pulsar extracts the schema definition from the POJO class and constructs the ",(0,s.kt)("inlineCode",{parentName:"p"},"SchemaInfo"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"The producer requests to connect to the broker with the ",(0,s.kt)("inlineCode",{parentName:"p"},"SchemaInfo")," extracted from the passed-in schema instance.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"The broker looks up the schema registry to check if it is a registered schema. "),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"If the schema is registered, the broker returns the schema version to the producer."),(0,s.kt)("li",{parentName:"ul"},"Otherwise, go to step 4."))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"The broker checks whether the schema can be auto-updated. "),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"If it\u2019s not allowed to be auto-updated, then the schema cannot be registered, and the broker rejects the producer."),(0,s.kt)("li",{parentName:"ul"},"Otherwise, go to step 5."))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"The broker performs the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/schema-understand#schema-compatibility-check"},"schema compatibility check")," defined for the topic."),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"If the schema passes the compatibility check, the broker stores it in the schema registry and returns the schema version to the producer. All the messages produced by this producer are tagged with the schema version. "),(0,s.kt)("li",{parentName:"ul"},"Otherwise, the broker rejects the producer.")))),(0,s.kt)("h3",{id:"consumer-side"},"Consumer side"),(0,s.kt)("p",null,"This diagram illustrates how schema works on the consumer side. "),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"How Pulsar schema works on the consumer side",src:a(42980).Z,width:"1548",height:"908"})),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"The application uses a schema instance to construct a consumer instance.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"The consumer connects to the broker with the ",(0,s.kt)("inlineCode",{parentName:"p"},"SchemaInfo")," extracted from the passed-in schema instance.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"The broker checks if the topic is in use (has at least one of the objects: schema, data, active producer or consumer)."),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"If a topic has at least one of the above objects, go to step 5."),(0,s.kt)("li",{parentName:"ul"},"Otherwise, go to step 4."))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"The broker checks whether the schema can be auto-updated."),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"If the schema can be auto-updated, the broker registers the schema and connects the consumer."),(0,s.kt)("li",{parentName:"ul"},"Otherwise, the broker rejects the consumer."))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"The broker performs the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/schema-understand#schema-compatibility-check"},"schema compatibility check"),"."),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"If the schema passes the compatibility check, the broker connects the consumer."),(0,s.kt)("li",{parentName:"ul"},"Otherwise, the broker rejects the consumer. ")))),(0,s.kt)("h2",{id:"use-case"},"Use case"),(0,s.kt)("p",null,"You can use language-specific types of data when constructing and handling messages from simple data types like ",(0,s.kt)("inlineCode",{parentName:"p"},"string")," to more complex application-specific types."),(0,s.kt)("p",null,"For example, you are using the ",(0,s.kt)("em",{parentName:"p"},"User")," class to define the messages sent to Pulsar topics."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"public class User {\n   public String name;\n   public int age;\n   \n   User() {}\n   \n   User(String name, int age) {\n      this.name = name;\n      this.age = age;\n   }\n}\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Without a schema")),(0,s.kt)("p",null,"If you construct a producer without specifying a schema, then the producer can only produce messages of type ",(0,s.kt)("inlineCode",{parentName:"p"},"byte[]"),". If you have a POJO class, you need to serialize the POJO into bytes before sending messages."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'Producer<byte[]> producer = client.newProducer()\n        .topic(topic)\n        .create();\nUser user = new User("Tom", 28);\nbyte[] message = \u2026 // serialize the `user` by yourself;\nproducer.send(message);\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"With a schema")),(0,s.kt)("p",null,"This example constructs a producer with the ",(0,s.kt)("em",{parentName:"p"},"JSONSchema"),", and you can send the ",(0,s.kt)("em",{parentName:"p"},"User")," class to topics directly without worrying about how to serialize POJOs into bytes."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'// send with json schema\nProducer<User> producer = client.newProducer(JSONSchema.of(User.class))\n        .topic(topic)\n        .create();\nUser user = new User("Tom", 28);\nproducer.send(user);\n\n// receive with json schema\nConsumer<User> consumer = client.newConsumer(JSONSchema.of(User.class))\n   .topic(schemaTopic)\n   .subscriptionInitialPosition(SubscriptionInitialPosition.Earliest)\n   .subscriptionName("schema-sub")\n   .subscribe();\nMessage<User> message = consumer.receive();\nUser user = message.getValue();\nassert user.age == 28 && user.name.equals("Tom");\n')),(0,s.kt)("h2",{id:"whats-next"},"What's next?"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/schema-understand"},"Understand schema concepts")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/schema-get-started"},"Get started with schema")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/admin-api-schemas"},"Manage schema"))))}p.isMDXComponent=!0},42980:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/schema-consumer-67cb670626412e11b3a683b2523cc1e8.svg"},5590:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/schema-producer-be1ab7ded68e21097ff3f0a61af747db.svg"},4356:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/schema-7934d91a412bb38af633d76079ccaa58.svg"}}]);