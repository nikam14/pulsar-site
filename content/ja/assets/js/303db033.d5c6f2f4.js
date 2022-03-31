"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[13073],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=p(n),m=r,d=k["".concat(s,".").concat(m)]||k[m]||c[m]||l;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},79504:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"io-kafka-sink",title:"Kafka sink connector",sidebar_label:"Kafka sink connector"},s=void 0,p={unversionedId:"io-kafka-sink",id:"io-kafka-sink",title:"Kafka sink connector",description:"The Kafka sink connector pulls messages from Pulsar topics and persists the messages to Kafka topics.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/io-kafka-sink.md",sourceDirName:".",slug:"/io-kafka-sink",permalink:"/ja/docs/next/io-kafka-sink",editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/io-kafka-sink.md",tags:[],version:"current",frontMatter:{id:"io-kafka-sink",title:"Kafka sink connector",sidebar_label:"Kafka sink connector"}},u={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3}],k={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Kafka sink connector pulls messages from Pulsar topics and persists the messages to Kafka topics."),(0,l.kt)("p",null,"This guide explains how to configure and use the Kafka sink connector."),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"The configuration of the Kafka sink connector has the following parameters."),(0,l.kt)("h3",{id:"property"},"Property"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bootstrapServers")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.kt)("td",{parentName:"tr",align:null},"A comma-separated list of host and port pairs for establishing the initial connection to the Kafka cluster.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"acks")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.kt)("td",{parentName:"tr",align:null},"The number of acknowledgments that the producer requires the leader to receive before a request completes. ",(0,l.kt)("br",null),"This controls the durability of the sent records.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"batchsize")),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"16384L"),(0,l.kt)("td",{parentName:"tr",align:null},"The batch size that a Kafka producer attempts to batch records together before sending them to brokers.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"maxRequestSize")),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"1048576L"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum size of a Kafka request in bytes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"topic")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.kt)("td",{parentName:"tr",align:null},"The Kafka topic which receives messages from Pulsar.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyDeserializationClass")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.kafka.common.serialization.StringSerializer"),(0,l.kt)("td",{parentName:"tr",align:null},"The serializer class for Kafka producers to serialize keys.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"valueDeserializationClass")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.kafka.common.serialization.ByteArraySerializer"),(0,l.kt)("td",{parentName:"tr",align:null},"The serializer class for Kafka producers to serialize values.",(0,l.kt)("br",null),(0,l.kt)("br",null),"The serializer is set by a specific implementation of ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/kafka/src/main/java/org/apache/pulsar/io/kafka/KafkaAbstractSink.java"},(0,l.kt)("inlineCode",{parentName:"a"},"KafkaAbstractSink")),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"producerConfigProperties")),(0,l.kt)("td",{parentName:"tr",align:null},"Map"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.kt)("td",{parentName:"tr",align:null},"The producer configuration properties to be passed to producers. ",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Note:  other properties specified in the connector configuration file take precedence over this configuration"),".")))),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("p",null,"Before using the Kafka sink connector, you need to create a configuration file through one of the following methods."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"JSON"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n   "configs": {\n      "bootstrapServers": "localhost:6667",\n      "topic": "test",\n      "acks": "1",\n      "batchSize": "16384",\n      "maxRequestSize": "1048576",\n      "producerConfigProperties": {\n         "client.id": "test-pulsar-producer",\n         "security.protocol": "SASL_PLAINTEXT",\n         "sasl.mechanism": "GSSAPI",\n         "sasl.kerberos.service.name": "kafka",\n         "acks": "all" \n      }\n   }\n}\n\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"YAML"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"")))),(0,l.kt)("p",null,'yaml configs: bootstrapServers: "localhost:6667" topic: "test" acks: "1" batchSize: "16384" maxRequestSize: "1048576" producerConfigProperties: client.id: "test-pulsar-producer" security.protocol: "SASL_PLAINTEXT" sasl.mechanism: "GSSAPI" sasl.kerberos.service.name: "kafka" acks: "all"   '),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"")))}m.isMDXComponent=!0}}]);