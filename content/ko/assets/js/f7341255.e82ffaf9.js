"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[30794],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(87462),r=a(67294),o=a(72389),i=a(5979),l=a(86010),c="tabItem_LplD";function s(e){var t,a,o,s=e.lazy,p=e.block,u=e.defaultValue,m=e.values,d=e.groupId,h=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.lx)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===u?u:null!=(t=null!=u?u:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=k[0])?void 0:o.props.value;if(null!==f&&!g.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.UB)(),b=N.tabGroupChoices,y=N.setTabGroupChoices,w=(0,r.useState)(f),S=w[0],j=w[1],C=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var x=b[d];null!=x&&x!==S&&g.some((function(e){return e.value===x}))&&j(x)}var P=function(e){var t=e.currentTarget,a=C.indexOf(t),n=g[a].value;n!==S&&(O(t),j(n),null!=d&&y(d,n))},I=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=C.indexOf(e.currentTarget)+1;a=C[n]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;a=C[r]||C[C.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},h)},g.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return C.push(e)},onKeyDown:I,onFocus:P,onClick:P},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":S===t})}),null!=a?a:t)}))),s?(0,r.cloneElement)(k.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function p(e){var t=(0,o.Z)();return r.createElement(s,(0,n.Z)({key:String(t)},e))}},88359:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=a(9877),l=a(58215),c=["components"],s={id:"io-develop",title:"How to develop Pulsar connectors",sidebar_label:"Develop"},p=void 0,u={unversionedId:"io-develop",id:"io-develop",title:"How to develop Pulsar connectors",description:"This guide describes how to develop Pulsar connectors to move data between Pulsar and other systems.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/io-develop.md",sourceDirName:".",slug:"/io-develop",permalink:"/ko/docs/next/io-develop",editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/io-develop.md",tags:[],version:"current",frontMatter:{id:"io-develop",title:"How to develop Pulsar connectors",sidebar_label:"Develop"},sidebar:"docsSidebar",previous:{title:"CDC connector",permalink:"/ko/docs/next/io-cdc"},next:{title:"CLI",permalink:"/ko/docs/next/io-cli"}},m={},d=[{value:"Develop",id:"develop",level:2},{value:"Source",id:"source",level:3},{value:"Handle schema information",id:"handle-schema-information",level:2},{value:"Sink",id:"sink",level:3},{value:"Handling Schema information",id:"handling-schema-information",level:2},{value:"Test",id:"test",level:2},{value:"Unit test",id:"unit-test",level:3},{value:"Integration test",id:"integration-test",level:3},{value:"Package",id:"package",level:2},{value:"NAR",id:"nar",level:3},{value:"Uber JAR",id:"uber-jar",level:3},{value:"Monitor",id:"monitor",level:2}],h={toc:d};function k(e){var t=e.components,a=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide describes how to develop Pulsar connectors to move data between Pulsar and other systems."),(0,o.kt)("p",null,"Pulsar connectors are special ",(0,o.kt)("a",{parentName:"p",href:"functions-overview"},"Pulsar Functions"),", so creating a Pulsar connector is similar to creating a Pulsar function."),(0,o.kt)("p",null,"Pulsar connectors come in two types:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java"},"Source"),"|Import data from another system to Pulsar.|"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"io-rabbitmq"},"RabbitMQ source connector")," imports the messages of a RabbitMQ queue to a Pulsar topic.\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java"},"Sink"),"|Export data from Pulsar to another system.|",(0,o.kt)("a",{parentName:"p",href:"io-kinesis"},"Kinesis sink connector")," exports the messages of a Pulsar topic to a Kinesis stream."),(0,o.kt)("h2",{id:"develop"},"Develop"),(0,o.kt)("p",null,"You can develop Pulsar source connectors and sink connectors."),(0,o.kt)("h3",{id:"source"},"Source"),(0,o.kt)("p",null,"Developing a source connector is to implement the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java"},"Source")," interface, which means you need to implement the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java"},"open")," method and the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java"},"read")," method."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Implement the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java"},"open")," method."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\n/**\n* Open connector with configuration\n*\n* @param config initialization config\n* @param sourceContext\n* @throws Exception IO type exceptions when opening a connector\n*/\nvoid open(final Map<String, Object> config, SourceContext sourceContext) throws Exception;\n\n")),(0,o.kt)("p",{parentName:"li"},"This method is called when the source connector is initialized."),(0,o.kt)("p",{parentName:"li"},"In this method, you can retrieve all connector specific settings through the passed-in ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," parameter and initialize all necessary resources."),(0,o.kt)("p",{parentName:"li"},"For example, a Kafka connector can create a Kafka client in this ",(0,o.kt)("inlineCode",{parentName:"p"},"open")," method."),(0,o.kt)("p",{parentName:"li"},"Besides, Pulsar runtime also provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"SourceContext")," for the connector to access runtime resources for tasks like collecting metrics. The implementation can save the ",(0,o.kt)("inlineCode",{parentName:"p"},"SourceContext")," for future use.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Implement the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java"},"read")," method."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\n    /**\n    * Reads the next message from source.\n    * If source does not have any new messages, this call should block.\n    * @return next message from source.  The return result should never be null\n    * @throws Exception\n    */\n    Record<T> read() throws Exception;\n\n")),(0,o.kt)("p",{parentName:"li"},"If nothing to return, the implementation should be blocking rather than returning ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("p",{parentName:"li"},"The returned ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-functions/api-java/src/main/java/org/apache/pulsar/functions/api/Record.java"},"Record")," should encapsulate the following information, which is needed by Pulsar IO runtime."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-functions/api-java/src/main/java/org/apache/pulsar/functions/api/Record.java"},"Record")," should provide the following variables:"),(0,o.kt)("table",{parentName:"li"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Variable"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"TopicName"),"|No|Pulsar topic name from which the record is originated from. ",(0,o.kt)("inlineCode",{parentName:"p"},"Key"),"|No| Messages can optionally be tagged with keys.",(0,o.kt)("br",null),(0,o.kt)("br",null),"For more information, see ",(0,o.kt)("a",{parentName:"p",href:"/ko/docs/next/concepts-messaging#routing-modes"},"Routing modes"),".| ",(0,o.kt)("inlineCode",{parentName:"p"},"Value"),"|Yes|Actual data of the record. ",(0,o.kt)("inlineCode",{parentName:"p"},"EventTime"),"|No|Event time of the record from the source. ",(0,o.kt)("inlineCode",{parentName:"p"},"PartitionId"),"|No| If the record is originated from a partitioned source, it returns its ",(0,o.kt)("inlineCode",{parentName:"p"},"PartitionId"),". ",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"p"},"PartitionId")," is used as a part of the unique identifier by Pulsar IO runtime to deduplicate messages and achieve exactly-once processing guarantee. ",(0,o.kt)("inlineCode",{parentName:"p"},"RecordSequence"),"|No|If the record is originated from a sequential source, it returns its ",(0,o.kt)("inlineCode",{parentName:"p"},"RecordSequence"),".",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"p"},"RecordSequence")," is used as a part of the unique identifier by Pulsar IO runtime to deduplicate messages and achieve exactly-once processing guarantee. ",(0,o.kt)("inlineCode",{parentName:"p"},"Properties")," |No| If the record carries user-defined properties, it returns those properties. ",(0,o.kt)("inlineCode",{parentName:"p"},"DestinationTopic"),"|No|Topic to which message should be written. ",(0,o.kt)("inlineCode",{parentName:"p"},"Message"),"|No|A class which carries data sent by users.",(0,o.kt)("br",null),(0,o.kt)("br",null),"For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-api/src/main/java/org/apache/pulsar/client/api/Message.java"},"Message.java"),".|")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-functions/api-java/src/main/java/org/apache/pulsar/functions/api/Record.java"},"Record")," should provide the following methods:"),(0,o.kt)("p",{parentName:"li"}," Method|Description |---|--- ",(0,o.kt)("inlineCode",{parentName:"p"},"ack")," |Acknowledge that the record is fully processed. ",(0,o.kt)("inlineCode",{parentName:"p"},"fail"),"|Indicate that the record fails to be processed."))))),(0,o.kt)("h2",{id:"handle-schema-information"},"Handle schema information"),(0,o.kt)("p",null,"Pulsar IO automatically handles the schema and provides a strongly typed API based on Java generics. If you know the schema type that you are producing, you can declare the Java class relative to that type in your sink declaration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\npublic class MySource implements Source<String> {\n    public Record<String> read() {}\n}\n\n")),(0,o.kt)("p",null,"If you want to implement a source that works with any schema, you can go with ",(0,o.kt)("inlineCode",{parentName:"p"},"byte[]")," (of ",(0,o.kt)("inlineCode",{parentName:"p"},"ByteBuffer"),") and use Schema.AUTO_PRODUCE_BYTES()."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\npublic class MySource implements Source<byte[]> {\n    public Record<byte[]> read() {\n\n        Schema wantedSchema = ....\n        Record<byte[]> myRecord = new MyRecordImplementation(); \n        ....\n    }\n    class MyRecordImplementation implements Record<byte[]> {\n         public byte[] getValue() {\n            return ....encoded byte[]...that represents the value \n         }\n         public Schema<byte[]> getSchema() {\n             return Schema.AUTO_PRODUCE_BYTES(wantedSchema);\n         }\n    }\n}\n\n")),(0,o.kt)("p",null,"To handle the ",(0,o.kt)("inlineCode",{parentName:"p"},"KeyValue")," type properly, follow the guidelines for your record implementation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It must implement ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/tree/master//pulsar-functions/api-java/src/main/java/org/apache/pulsar/functions/api/KVRecord.java"},"Record")," interface and implement ",(0,o.kt)("inlineCode",{parentName:"li"},"getKeySchema"),",",(0,o.kt)("inlineCode",{parentName:"li"},"getValueSchema"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"getKeyValueEncodingType")),(0,o.kt)("li",{parentName:"ul"},"It must return a ",(0,o.kt)("inlineCode",{parentName:"li"},"KeyValue")," object as ",(0,o.kt)("inlineCode",{parentName:"li"},"Record.getValue()")),(0,o.kt)("li",{parentName:"ul"},"It may return null in ",(0,o.kt)("inlineCode",{parentName:"li"},"Record.getSchema()"))),(0,o.kt)("p",null,"When Pulsar IO runtime encounters a ",(0,o.kt)("inlineCode",{parentName:"p"},"KVRecord"),", it brings the following changes automatically:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set properly the ",(0,o.kt)("inlineCode",{parentName:"li"},"KeyValueSchema")),(0,o.kt)("li",{parentName:"ul"},"Encode the Message Key and the Message Value according to the ",(0,o.kt)("inlineCode",{parentName:"li"},"KeyValueEncoding")," (SEPARATED or INLINE)")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more information about ",(0,o.kt)("strong",{parentName:"p"},"how to create a source connector"),", see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/kafka/src/main/java/org/apache/pulsar/io/kafka/KafkaAbstractSource.java"},"KafkaSource"),"."))),(0,o.kt)("h3",{id:"sink"},"Sink"),(0,o.kt)("p",null,"Developing a sink connector ",(0,o.kt)("strong",{parentName:"p"},"is similar to")," developing a source connector, that is, you need to implement the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java"},"Sink")," interface, which means implementing the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java"},"open")," method and the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java"},"write")," method."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Implement the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java"},"open")," method."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\n    /**\n    * Open connector with configuration\n    *\n    * @param config initialization config\n    * @param sinkContext\n    * @throws Exception IO type exceptions when opening a connector\n    */\n    void open(final Map<String, Object> config, SinkContext sinkContext) throws Exception;\n\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Implement the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java"},"write")," method."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\n    /**\n    * Write a message to Sink\n    * @param record record to write to sink\n    * @throws Exception\n    */\n    void write(Record<T> record) throws Exception;\n\n")),(0,o.kt)("p",{parentName:"li"},"During the implementation, you can decide how to write the ",(0,o.kt)("inlineCode",{parentName:"p"},"Value")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Key")," to the actual source, and leverage all the provided information such as ",(0,o.kt)("inlineCode",{parentName:"p"},"PartitionId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"RecordSequence")," to achieve different processing guarantees."),(0,o.kt)("p",{parentName:"li"},"You also need to ack records (if messages are sent successfully) or fail records (if messages fail to send)."))),(0,o.kt)("h2",{id:"handling-schema-information"},"Handling Schema information"),(0,o.kt)("p",null,"Pulsar IO handles automatically the Schema and provides a strongly typed API based on Java generics. If you know the Schema type that you are consuming from you can declare the Java class relative to that type in your Sink declaration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\npublic class MySink implements Sink<String> {\n    public void write(Record<String> record) {}\n}\n\n")),(0,o.kt)("p",null,"If you want to implement a sink that works with any schema, you can you go with the special GenericObject interface."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\npublic class MySink implements Sink<GenericObject> {\n    public void write(Record<GenericObject> record) {\n        Schema schema = record.getSchema();\n        GenericObject genericObject = record.getValue();\n        if (genericObject != null) {\n            SchemaType type = genericObject.getSchemaType();\n            Object nativeObject = genericObject.getNativeObject();\n            ...\n        }\n        ....\n    }\n}\n\n")),(0,o.kt)("p",null,"In the case of AVRO, JSON, and Protobuf records (schemaType=AVRO,JSON,PROTOBUF_NATIVE), you can cast the ",(0,o.kt)("inlineCode",{parentName:"p"},"genericObject")," variable to ",(0,o.kt)("inlineCode",{parentName:"p"},"GenericRecord")," and use ",(0,o.kt)("inlineCode",{parentName:"p"},"getFields()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"getField()")," API. You are able to access the native AVRO record using  ",(0,o.kt)("inlineCode",{parentName:"p"},"genericObject.getNativeObject()"),"."),(0,o.kt)("p",null,"In the case of KeyValue type, you can access both the schema for the key and the schema for the value using this code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\npublic class MySink implements Sink<GenericObject> {\n    public void write(Record<GenericObject> record) {\n        Schema schema = record.getSchema();\n        GenericObject genericObject = record.getValue();\n        SchemaType type = genericObject.getSchemaType();\n        Object nativeObject = genericObject.getNativeObject();\n        if (type == SchemaType.KEY_VALUE) {\n            KeyValue keyValue = (KeyValue) nativeObject;\n            Object key = keyValue.getKey();\n            Object value = keyValue.getValue();\n\n            KeyValueSchema keyValueSchema = (KeyValueSchema) schema;\n            Schema keySchema = keyValueSchema.getKeySchema();\n            Schema valueSchema = keyValueSchema.getValueSchema();\n        }\n        ....\n    }\n}\n\n")),(0,o.kt)("h2",{id:"test"},"Test"),(0,o.kt)("p",null,"Testing connectors can be challenging because Pulsar IO connectors interact with two systems that may be difficult to mock\u2014Pulsar and the system to which the connector is connecting."),(0,o.kt)("p",null,"It is recommended writing special tests to test the connector functionalities as below while mocking the external service."),(0,o.kt)("h3",{id:"unit-test"},"Unit test"),(0,o.kt)("p",null,"You can create unit tests for your connector."),(0,o.kt)("h3",{id:"integration-test"},"Integration test"),(0,o.kt)("p",null,"Once you have written sufficient unit tests, you can add separate integration tests to verify end-to-end functionality."),(0,o.kt)("p",null,"Pulsar uses ",(0,o.kt)("a",{parentName:"p",href:"https://www.testcontainers.org/"},"testcontainers")," ",(0,o.kt)("strong",{parentName:"p"},"for all integration tests"),"."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more information about ",(0,o.kt)("strong",{parentName:"p"},"how to create integration tests for Pulsar connectors"),", see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//tests/integration/src/test/java/org/apache/pulsar/tests/integration/io"},"IntegrationTests"),"."))),(0,o.kt)("h2",{id:"package"},"Package"),(0,o.kt)("p",null,"Once you've developed and tested your connector, you need to package it so that it can be submitted to a ",(0,o.kt)("a",{parentName:"p",href:"functions-overview"},"Pulsar Functions")," cluster."),(0,o.kt)("p",null,"There are two methods to work with Pulsar Functions' runtime, that is, ",(0,o.kt)("a",{parentName:"p",href:"#nar"},"NAR")," and ",(0,o.kt)("a",{parentName:"p",href:"#uber-jar"},"uber JAR"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you plan to package and distribute your connector for others to use, you are obligated to"))),(0,o.kt)("p",null,"license and copyright your own code properly. Remember to add the license and copyright to all libraries your code uses and to your distribution. >"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you use the ",(0,o.kt)("a",{parentName:"p",href:"#nar"},"NAR")," method, the NAR plugin automatically creates a ",(0,o.kt)("inlineCode",{parentName:"p"},"DEPENDENCIES")," file in the generated NAR package, including the proper licensing and copyrights of all libraries of your connector.")),(0,o.kt)("h3",{id:"nar"},"NAR"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NAR")," stands for NiFi Archive, which is a custom packaging mechanism used by Apache NiFi, to provide a bit of Java ClassLoader isolation."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more information about ",(0,o.kt)("strong",{parentName:"p"},"how NAR works"),", see ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/hashmapinc/nifi-nar-files-explained-14113f7796fd"},"here"),"."))),(0,o.kt)("p",null,"Pulsar uses the same mechanism for packaging ",(0,o.kt)("strong",{parentName:"p"},"all")," ",(0,o.kt)("a",{parentName:"p",href:"io-connectors"},"built-in connectors"),"."),(0,o.kt)("p",null,"The easiest approach to package a Pulsar connector is to create a NAR package using ",(0,o.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/org.apache.nifi/nifi-nar-maven-plugin"},"nifi-nar-maven-plugin"),"."),(0,o.kt)("p",null,"Include this ",(0,o.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/org.apache.nifi/nifi-nar-maven-plugin"},"nifi-nar-maven-plugin")," in your maven project for your connector as below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\n<plugins>\n  <plugin>\n    <groupId>org.apache.nifi</groupId>\n    <artifactId>nifi-nar-maven-plugin</artifactId>\n    <version>1.2.0</version>\n  </plugin>\n</plugins>\n\n")),(0,o.kt)("p",null,"You must also create a ",(0,o.kt)("inlineCode",{parentName:"p"},"resources/META-INF/services/pulsar-io.yaml")," file with the following contents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"\nname: connector name\ndescription: connector description\nsourceClass: fully qualified class name (only if source connector)\nsinkClass: fully qualified class name (only if sink connector)\n\n")),(0,o.kt)("p",null,"For Gradle users, there is a ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.gradle.org/plugin/io.github.lhotari.gradle-nar-plugin"},"Gradle Nar plugin available on the Gradle Plugin Portal"),"."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more information about an ",(0,o.kt)("strong",{parentName:"p"},"how to use NAR for Pulsar connectors"),", see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/twitter/pom.xml"},"TwitterFirehose"),"."))),(0,o.kt)("h3",{id:"uber-jar"},"Uber JAR"),(0,o.kt)("p",null,"An alternative approach is to create an ",(0,o.kt)("strong",{parentName:"p"},"uber JAR")," that contains all of the connector's JAR files and other resource files. No directory internal structure is necessary."),(0,o.kt)("p",null,"You can use ",(0,o.kt)("a",{parentName:"p",href:"https://maven.apache.org/plugins/maven-shade-plugin/examples/includes-excludes.html"},"maven-shade-plugin")," to create a uber JAR as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\n<plugin>\n  <groupId>org.apache.maven.plugins</groupId>\n  <artifactId>maven-shade-plugin</artifactId>\n  <version>3.1.1</version>\n  <executions>\n    <execution>\n      <phase>package</phase>\n      <goals>\n        <goal>shade</goal>\n      </goals>\n      <configuration>\n        <filters>\n          <filter>\n            <artifact>*:*</artifact>\n          </filter>\n        </filters>\n      </configuration>\n    </execution>\n  </executions>\n</plugin>\n\n")),(0,o.kt)("h2",{id:"monitor"},"Monitor"),(0,o.kt)("p",null,"Pulsar connectors enable you to move data in and out of Pulsar easily. It is important to ensure that the running connectors are healthy at any time. You can monitor Pulsar connectors that have been deployed with the following methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Check the metrics provided by Pulsar."),(0,o.kt)("p",{parentName:"li"},"Pulsar connectors expose the metrics that can be collected and used for monitoring the health of ",(0,o.kt)("strong",{parentName:"p"},"Java")," connectors. You can check the metrics by following the ",(0,o.kt)("a",{parentName:"p",href:"deploy-monitoring"},"monitoring")," guide.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set and check your customized metrics."),(0,o.kt)("p",{parentName:"li"},"In addition to the metrics provided by Pulsar, Pulsar allows you to customize metrics for ",(0,o.kt)("strong",{parentName:"p"},"Java")," connectors. Function workers collect user-defined metrics to Prometheus automatically and you can check them in Grafana."))),(0,o.kt)("p",null,"Here is an example of how to customize metrics for a Java connector."),(0,o.kt)(i.Z,{defaultValue:"Java",values:[{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\npublic class TestMetricSink implements Sink<String> {\n\n        @Override\n        public void open(Map<String, Object> config, SinkContext sinkContext) throws Exception {\n            sinkContext.recordMetric("foo", 1);\n        }\n\n        @Override\n        public void write(Record<String> record) throws Exception {\n\n        }\n\n        @Override\n        public void close() throws Exception {\n\n        }\n    }\n\n')))))}k.isMDXComponent=!0}}]);