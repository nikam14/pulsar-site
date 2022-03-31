"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[15726],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},34435:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return c}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],p={id:"adaptors-storm",title:"Pulsar adaptor for Apache Storm",sidebar_label:"Apache Storm"},l=void 0,i={unversionedId:"adaptors-storm",id:"adaptors-storm",title:"Pulsar adaptor for Apache Storm",description:"Pulsar Storm is an adaptor for integrating with Apache Storm topologies. It provides core Storm implementations for sending and receiving data.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/adaptors-storm.md",sourceDirName:".",slug:"/adaptors-storm",permalink:"/zh-TW/docs/next/adaptors-storm",editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/adaptors-storm.md",tags:[],version:"current",frontMatter:{id:"adaptors-storm",title:"Pulsar adaptor for Apache Storm",sidebar_label:"Apache Storm"},sidebar:"docsSidebar",previous:{title:"Apache Spark",permalink:"/zh-TW/docs/next/adaptors-spark"},next:{title:"Topic compaction",permalink:"/zh-TW/docs/next/cookbooks-compaction"}},u={},c=[{value:"Using the Pulsar Storm Adaptor",id:"using-the-pulsar-storm-adaptor",level:2},{value:"Pulsar Spout",id:"pulsar-spout",level:2},{value:"Pulsar Bolt",id:"pulsar-bolt",level:2}],d={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pulsar Storm is an adaptor for integrating with ",(0,o.kt)("a",{parentName:"p",href:"http://storm.apache.org/"},"Apache Storm")," topologies. It provides core Storm implementations for sending and receiving data."),(0,o.kt)("p",null,"An application can inject data into a Storm topology via a generic Pulsar spout, as well as consume data from a Storm topology via a generic Pulsar bolt."),(0,o.kt)("h2",{id:"using-the-pulsar-storm-adaptor"},"Using the Pulsar Storm Adaptor"),(0,o.kt)("p",null,"Include dependency for Pulsar Storm Adaptor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\n<dependency>\n  <groupId>org.apache.pulsar</groupId>\n  <artifactId>pulsar-storm</artifactId>\n  <version>${pulsar.version}</version>\n</dependency>\n\n")),(0,o.kt)("h2",{id:"pulsar-spout"},"Pulsar Spout"),(0,o.kt)("p",null,"The Pulsar Spout allows for the data published on a topic to be consumed by a Storm topology. It emits a Storm tuple based on the message received and the ",(0,o.kt)("inlineCode",{parentName:"p"},"MessageToValuesMapper")," provided by the client."),(0,o.kt)("p",null,"The tuples that fail to be processed by the downstream bolts will be re-injected by the spout with an exponential backoff, within a configurable timeout (the default is 60 seconds) or a configurable number of retries, whichever comes first, after which it is acknowledged by the consumer. Here's an example construction of a spout:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\nMessageToValuesMapper messageToValuesMapper = new MessageToValuesMapper() {\n\n    @Override\n    public Values toValues(Message msg) {\n        return new Values(new String(msg.getData()));\n    }\n\n    @Override\n    public void declareOutputFields(OutputFieldsDeclarer declarer) {\n        // declare the output fields\n        declarer.declare(new Fields("string"));\n    }\n};\n\n// Configure a Pulsar Spout\nPulsarSpoutConfiguration spoutConf = new PulsarSpoutConfiguration();\nspoutConf.setServiceUrl("pulsar://broker.messaging.usw.example.com:6650");\nspoutConf.setTopic("persistent://my-property/usw/my-ns/my-topic1");\nspoutConf.setSubscriptionName("my-subscriber-name1");\nspoutConf.setMessageToValuesMapper(messageToValuesMapper);\n\n// Create a Pulsar Spout\nPulsarSpout spout = new PulsarSpout(spoutConf);\n\n')),(0,o.kt)("p",null,"For a complete example, click ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-adapters/blob/master/pulsar-storm/src/test/java/org/apache/pulsar/storm/PulsarSpoutTest.java"},"here"),"."),(0,o.kt)("h2",{id:"pulsar-bolt"},"Pulsar Bolt"),(0,o.kt)("p",null,"The Pulsar bolt allows data in a Storm topology to be published on a topic. It publishes messages based on the Storm tuple received and the ",(0,o.kt)("inlineCode",{parentName:"p"},"TupleToMessageMapper")," provided by the client."),(0,o.kt)("p",null,"A partitioned topic can also be used to publish messages on different topics. In the implementation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"TupleToMessageMapper"),', a "key" will need to be provided in the message which will send the messages with the same key to the same topic. Here\'s an example bolt:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\nTupleToMessageMapper tupleToMessageMapper = new TupleToMessageMapper() {\n\n    @Override\n    public TypedMessageBuilder<byte[]> toMessage(TypedMessageBuilder<byte[]> msgBuilder, Tuple tuple) {\n        String receivedMessage = tuple.getString(0);\n        // message processing\n        String processedMsg = receivedMessage + "-processed";\n        return msgBuilder.value(processedMsg.getBytes());\n    }\n\n    @Override\n    public void declareOutputFields(OutputFieldsDeclarer declarer) {\n        // declare the output fields\n    }\n};\n\n// Configure a Pulsar Bolt\nPulsarBoltConfiguration boltConf = new PulsarBoltConfiguration();\nboltConf.setServiceUrl("pulsar://broker.messaging.usw.example.com:6650");\nboltConf.setTopic("persistent://my-property/usw/my-ns/my-topic2");\nboltConf.setTupleToMessageMapper(tupleToMessageMapper);\n\n// Create a Pulsar Bolt\nPulsarBolt bolt = new PulsarBolt(boltConf);\n\n')))}m.isMDXComponent=!0}}]);