"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8806],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>k});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),p=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=p(e.components);return r.createElement(l.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=n,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(k,s(s({ref:a},c),{},{components:t})):r.createElement(k,s({ref:a},c))}));function k(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=d;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[u]="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},94071:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=t(87462),n=(t(67294),t(3905));const i={id:"io-overview",title:"Pulsar IO Overview",sidebar_label:"Overview",original_id:"io-overview"},s=void 0,o={unversionedId:"io-overview",id:"version-2.2.0/io-overview",title:"Pulsar IO Overview",description:"Messaging systems are most powerful when you can easily use them in conjunction with external systems like databases and other messaging systems. Pulsar IO is a feature of Pulsar that enables you to easily create, deploy, and manage Pulsar connectors that interact with external systems, such as Apache Cassandra, Aerospike, and many others.",source:"@site/versioned_docs/version-2.2.0/io-overview.md",sourceDirName:".",slug:"/io-overview",permalink:"/docs/2.2.0/io-overview",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/io-overview.md",tags:[],version:"2.2.0",frontMatter:{id:"io-overview",title:"Pulsar IO Overview",sidebar_label:"Overview",original_id:"io-overview"},sidebar:"version-2.2.0/docsSidebar",previous:{title:"Metrics",permalink:"/docs/2.2.0/functions-metrics"},next:{title:"Getting started",permalink:"/docs/2.2.0/io-quickstart"}},l={},p=[{value:"Sources and sinks",id:"sources-and-sinks",level:2},{value:"Working with connectors",id:"working-with-connectors",level:2}],c={toc:p};function u(e){let{components:a,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Messaging systems are most powerful when you can easily use them in conjunction with external systems like databases and other messaging systems. ",(0,n.kt)("strong",{parentName:"p"},"Pulsar IO")," is a feature of Pulsar that enables you to easily create, deploy, and manage Pulsar ",(0,n.kt)("strong",{parentName:"p"},"connectors")," that interact with external systems, such as ",(0,n.kt)("a",{parentName:"p",href:"https://cassandra.apache.org"},"Apache Cassandra"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.aerospike.com"},"Aerospike"),", and many others."),(0,n.kt)("blockquote",null,(0,n.kt)("h4",{parentName:"blockquote",id:"pulsar-io-and-pulsar-functions"},"Pulsar IO and Pulsar Functions"),(0,n.kt)("p",{parentName:"blockquote"},"Under the hood, Pulsar IO connectors are specialized ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.2.0/functions-overview"},"Pulsar Functions")," purpose-built to interface with external systems. The ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.2.0/io-quickstart"},"administrative interface")," for Pulsar IO is, in fact, quite similar to that of Pulsar Functions.")),(0,n.kt)("h2",{id:"sources-and-sinks"},"Sources and sinks"),(0,n.kt)("p",null,"Pulsar IO connectors come in two types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Sources")," feed data ",(0,n.kt)("em",{parentName:"li"},"into"),' Pulsar from other systems. Common sources include other messaging systems and "firehose"-style data pipeline APIs.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Sinks")," are fed data ",(0,n.kt)("em",{parentName:"li"},"from")," Pulsar. Common sinks include other messaging systems and SQL and NoSQL databases.")),(0,n.kt)("p",null,"This diagram illustrates the relationship between sources, sinks, and Pulsar:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Pulsar IO diagram",src:t(71752).Z,title:"Pulsar IO connectors (sources and sinks)",width:"1758",height:"352"})),(0,n.kt)("h2",{id:"working-with-connectors"},"Working with connectors"),(0,n.kt)("p",null,"Pulsar IO connectors can be managed via the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.2.0/reference-pulsar-admin"},(0,n.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," CLI tool, in particular the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.2.0/reference-pulsar-admin#source"},(0,n.kt)("inlineCode",{parentName:"a"},"source"))," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.2.0/reference-pulsar-admin#sink"},(0,n.kt)("inlineCode",{parentName:"a"},"sink"))," commands."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For a guide to managing connectors in your Pulsar installation, see the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.2.0/io-quickstart"},"Getting started with Pulsar IO"))),(0,n.kt)("p",null,"The following connectors are currently available for Pulsar:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Java Class"),(0,n.kt)("th",{parentName:"tr",align:null},"Documentation"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.aerospike.com/"},"Aerospike sink")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/aerospike/src/main/java/org/apache/pulsar/io/aerospike/AerospikeStringSink.java"},(0,n.kt)("inlineCode",{parentName:"a"},"org.apache.pulsar.io.aerospike.AerospikeSink"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/2.2.0/io-aerospike"},"Documentation"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://cassandra.apache.org"},"Cassandra sink")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/cassandra/src/main/java/org/apache/pulsar/io/cassandra/CassandraStringSink.java"},(0,n.kt)("inlineCode",{parentName:"a"},"org.apache.pulsar.io.cassandra.CassandraSink"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/2.2.0/io-cassandra"},"Documentation"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://kafka.apache.org"},"Kafka source")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/kafka/src/main/java/org/apache/pulsar/io/kafka/KafkaStringSource.java"},(0,n.kt)("inlineCode",{parentName:"a"},"org.apache.pulsar.io.kafka.KafkaSource"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/2.2.0/io-kafka#source"},"Documentation"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://kafka.apache.org"},"Kafka sink")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/kafka/src/main/java/org/apache/pulsar/io/kafka/KafkaStringSink.java"},(0,n.kt)("inlineCode",{parentName:"a"},"org.apache.pulsar.io.kafka.KafkaSink"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/2.2.0/io-kafka#sink"},"Documentation"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://aws.amazon.com/kinesis/"},"Kinesis sink")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/kinesis/src/main/java/org/apache/pulsar/io/kinesis/KinesisSink.java"},(0,n.kt)("inlineCode",{parentName:"a"},"org.apache.pulsar.io.kinesis.KinesisSink"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/2.2.0/io-kinesis#sink"},"Documentation"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.rabbitmq.com"},"RabbitMQ source")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/rabbitmq/src/main/java/org/apache/pulsar/io/rabbitmq/RabbitMQSource.java"},(0,n.kt)("inlineCode",{parentName:"a"},"org.apache.pulsar.io.rabbitmq.RabbitMQSource"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/2.2.0/io-rabbitmq#sink"},"Documentation"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://developer.twitter.com/en/docs"},"Twitter Firehose source")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/twitter/src/main/java/org/apache/pulsar/io/twitter/TwitterFireHose.java"},(0,n.kt)("inlineCode",{parentName:"a"},"org.apache.pulsar.io.twitter.TwitterFireHose"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/2.2.0/io-twitter#source"},"Documentation"))))))}u.isMDXComponent=!0},71752:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/pulsar-io-8e834df5eaed9d5b0a7e0ffa162e850a.png"}}]);