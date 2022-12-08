"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5879],{3905:(a,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>h});var r=t(67294);function i(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function l(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,r)}return t}function n(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){i(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function o(a,e){if(null==a)return{};var t,r,i=function(a,e){if(null==a)return{};var t,r,i={},l=Object.keys(a);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(i[t]=a[t]);return i}(a,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(i[t]=a[t])}return i}var s=r.createContext({}),u=function(a){var e=r.useContext(s),t=e;return a&&(t="function"==typeof a?a(e):n(n({},e),a)),t},p=function(a){var e=u(a.components);return r.createElement(s.Provider,{value:e},a.children)},c="mdxType",m={inlineCode:"code",wrapper:function(a){var e=a.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(a,e){var t=a.components,i=a.mdxType,l=a.originalType,s=a.parentName,p=o(a,["components","mdxType","originalType","parentName"]),c=u(t),k=i,h=c["".concat(s,".").concat(k)]||c[k]||m[k]||l;return t?r.createElement(h,n(n({ref:e},p),{},{components:t})):r.createElement(h,n({ref:e},p))}));function h(a,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var l=t.length,n=new Array(l);n[0]=k;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=a,o[c]="string"==typeof a?a:i,n[1]=o;for(var u=2;u<l;u++)n[u]=t[u];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},4142:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>n,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const l={id:"io-connectors",title:"Built-in connector",sidebar_label:"Built-in connector",original_id:"io-connectors"},n=void 0,o={unversionedId:"io-connectors",id:"version-2.8.x/io-connectors",title:"Built-in connector",description:"Pulsar distribution includes a set of common connectors that have been packaged and tested with the rest of Apache Pulsar. These connectors import and export data from some of the most commonly used data systems.",source:"@site/versioned_docs/version-2.8.x/io-connectors.md",sourceDirName:".",slug:"/io-connectors",permalink:"/docs/2.8.x/io-connectors",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/io-connectors.md",tags:[],version:"2.8.x",frontMatter:{id:"io-connectors",title:"Built-in connector",sidebar_label:"Built-in connector",original_id:"io-connectors"},sidebar:"version-2.8.x/docsSidebar",previous:{title:"Debug",permalink:"/docs/2.8.x/io-debug"},next:{title:"CDC connector",permalink:"/docs/2.8.x/io-cdc"}},s={},u=[{value:"Source connector",id:"source-connector",level:2},{value:"Canal",id:"canal",level:3},{value:"Debezium MySQL",id:"debezium-mysql",level:3},{value:"Debezium PostgreSQL",id:"debezium-postgresql",level:3},{value:"Debezium MongoDB",id:"debezium-mongodb",level:3},{value:"DynamoDB",id:"dynamodb",level:3},{value:"File",id:"file",level:3},{value:"Flume",id:"flume",level:3},{value:"Twitter firehose",id:"twitter-firehose",level:3},{value:"Kafka",id:"kafka",level:3},{value:"Kinesis",id:"kinesis",level:3},{value:"Netty",id:"netty",level:3},{value:"NSQ",id:"nsq",level:3},{value:"RabbitMQ",id:"rabbitmq",level:3},{value:"Sink connector",id:"sink-connector",level:2},{value:"Aerospike",id:"aerospike",level:3},{value:"Cassandra",id:"cassandra",level:3},{value:"ElasticSearch",id:"elasticsearch",level:3},{value:"Flume",id:"flume-1",level:3},{value:"HBase",id:"hbase",level:3},{value:"HDFS2",id:"hdfs2",level:3},{value:"HDFS3",id:"hdfs3",level:3},{value:"InfluxDB",id:"influxdb",level:3},{value:"JDBC ClickHouse",id:"jdbc-clickhouse",level:3},{value:"JDBC MariaDB",id:"jdbc-mariadb",level:3},{value:"JDBC PostgreSQL",id:"jdbc-postgresql",level:3},{value:"JDBC SQLite",id:"jdbc-sqlite",level:3},{value:"Kafka",id:"kafka-1",level:3},{value:"Kinesis",id:"kinesis-1",level:3},{value:"MongoDB",id:"mongodb",level:3},{value:"RabbitMQ",id:"rabbitmq-1",level:3},{value:"Redis",id:"redis",level:3},{value:"Solr",id:"solr",level:3}],p={toc:u};function c(a){let{components:e,...t}=a;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pulsar distribution includes a set of common connectors that have been packaged and tested with the rest of Apache Pulsar. These connectors import and export data from some of the most commonly used data systems. "),(0,i.kt)("p",null,"Using any of these connectors is as easy as writing a simple connector and running the connector locally or submitting the connector to a Pulsar Functions cluster."),(0,i.kt)("h2",{id:"source-connector"},"Source connector"),(0,i.kt)("p",null,"Pulsar has various source connectors, which are sorted alphabetically as below."),(0,i.kt)("h3",{id:"canal"},"Canal"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/2.8.x/io-canal-source#configuration"},"Configuration"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/2.8.x/io-canal-source#usage"},"Example"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/canal/src/main/java/org/apache/pulsar/io/canal/CanalStringSource.java"},"Java class")))),(0,i.kt)("h3",{id:"debezium-mysql"},"Debezium MySQL"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/2.8.x/io-debezium-source#configuration"},"Configuration"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/2.8.x/io-debezium-source#example-of-mysql"},"Example"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/debezium/mysql/src/main/java/org/apache/pulsar/io/debezium/mysql/DebeziumMysqlSource.java"},"Java class")))),(0,i.kt)("h3",{id:"debezium-postgresql"},"Debezium PostgreSQL"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/2.8.x/io-debezium-source#configuration"},"Configuration"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/2.8.x/io-debezium-source#example-of-postgresql"},"Example"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/debezium/postgres/src/main/java/org/apache/pulsar/io/debezium/postgres/DebeziumPostgresSource.java"},"Java class")))),(0,i.kt)("h3",{id:"debezium-mongodb"},"Debezium MongoDB"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/2.8.x/io-debezium-source#configuration"},"Configuration"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/2.8.x/io-debezium-source#example-of-mongodb"},"Example"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/debezium/mongodb/src/main/java/org/apache/pulsar/io/debezium/mongodb/DebeziumMongoDbSource.java"},"Java class")))),(0,i.kt)("h3",{id:"dynamodb"},"DynamoDB"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.8.x/io-dynamodb-source#configuration"},"Configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/dynamodb/src/main/java/org/apache/pulsar/io/dynamodb/DynamoDBSource.java"},"Java class"))),(0,i.kt)("h3",{id:"file"},"File"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/2.8.x/io-file-source#configuration"},"Configuration"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/2.8.x/io-file-source#usage"},"Example"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/file/src/main/java/org/apache/pulsar/io/file/FileSource.java"},"Java class")))),(0,i.kt)("h3",{id:"flume"},"Flume"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/2.8.x/io-flume-source#configuration"},"Configuration"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/flume/src/main/java/org/apache/pulsar/io/flume/FlumeConnector.java"},"Java class")))),(0,i.kt)("h3",{id:"twitter-firehose"},"Twitter firehose"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/2.8.x/io-twitter-source#configuration"},"Configuration"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/twitter/src/main/java/org/apache/pulsar/io/twitter/TwitterFireHose.java"},"Java class")))),(0,i.kt)("h3",{id:"kafka"},"Kafka"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/2.8.x/io-kafka-source#configuration"},"Configuration"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/2.8.x/io-kafka-source#usage"},"Example"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/kafka/src/main/java/org/apache/pulsar/io/kafka/KafkaAbstractSource.java"},"Java class")))),(0,i.kt)("h3",{id:"kinesis"},"Kinesis"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.8.x/io-kinesis-source#configuration"},"Configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/kinesis/src/main/java/org/apache/pulsar/io/kinesis/KinesisSource.java"},"Java class"))),(0,i.kt)("h3",{id:"netty"},"Netty"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/2.8.x/io-netty-source#configuration"},"Configuration"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/2.8.x/io-netty-source#tcp"},"Example of TCP"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/2.8.x/io-netty-source#http"},"Example of HTTP"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/netty/src/main/java/org/apache/pulsar/io/netty/NettySource.java"},"Java class")))),(0,i.kt)("h3",{id:"nsq"},"NSQ"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.8.x/io-nsq-source#configuration"},"Configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/nsq/src/main/java/org/apache/pulsar/io/nsq/NSQSource.java"},"Java class"))),(0,i.kt)("h3",{id:"rabbitmq"},"RabbitMQ"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.8.x/io-rabbitmq-source#configuration"},"Configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/rabbitmq/src/main/java/org/apache/pulsar/io/rabbitmq/RabbitMQSource.java"},"Java class"))),(0,i.kt)("h2",{id:"sink-connector"},"Sink connector"),(0,i.kt)("p",null,"Pulsar has various sink connectors, which are sorted alphabetically as below."),(0,i.kt)("h3",{id:"aerospike"},"Aerospike"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/2.8.x/io-aerospike-sink#configuration"},"Configuration"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/aerospike/src/main/java/org/apache/pulsar/io/aerospike/AerospikeStringSink.java"},"Java class")))),(0,i.kt)("h3",{id:"cassandra"},"Cassandra"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.8.x/io-cassandra-sink#configuration"},"Configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.8.x/io-cassandra-sink#usage"},"Example"),"  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/cassandra/src/main/java/org/apache/pulsar/io/cassandra/CassandraStringSink.java"},"Java class"))),(0,i.kt)("h3",{id:"elasticsearch"},"ElasticSearch"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.8.x/io-elasticsearch-sink#configuration"},"Configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/elastic-search/src/main/java/org/apache/pulsar/io/elasticsearch/ElasticSearchSink.java"},"Java class"))),(0,i.kt)("h3",{id:"flume-1"},"Flume"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.8.x/io-flume-sink#configuration"},"Configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/flume/src/main/java/org/apache/pulsar/io/flume/sink/StringSink.java"},"Java class"))),(0,i.kt)("h3",{id:"hbase"},"HBase"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.8.x/io-hbase-sink#configuration"},"Configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/hbase/src/main/java/org/apache/pulsar/io/hbase/HbaseAbstractConfig.java"},"Java class"))),(0,i.kt)("h3",{id:"hdfs2"},"HDFS2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.8.x/io-hdfs2-sink#configuration"},"Configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/hdfs2/src/main/java/org/apache/pulsar/io/hdfs2/AbstractHdfsConnector.java"},"Java class"))),(0,i.kt)("h3",{id:"hdfs3"},"HDFS3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.8.x/io-hdfs3-sink#configuration"},"Configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/hdfs3/src/main/java/org/apache/pulsar/io/hdfs3/AbstractHdfsConnector.java"},"Java class"))),(0,i.kt)("h3",{id:"influxdb"},"InfluxDB"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.8.x/io-influxdb-sink#configuration"},"Configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/influxdb/src/main/java/org/apache/pulsar/io/influxdb/InfluxDBGenericRecordSink.java"},"Java class"))),(0,i.kt)("h3",{id:"jdbc-clickhouse"},"JDBC ClickHouse"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.8.x/io-jdbc-sink#configuration"},"Configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.8.x/io-jdbc-sink#example-for-clickhouse"},"Example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/jdbc/clickhouse/src/main/java/org/apache/pulsar/io/jdbc/ClickHouseJdbcAutoSchemaSink.java"},"Java class"))),(0,i.kt)("h3",{id:"jdbc-mariadb"},"JDBC MariaDB"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.8.x/io-jdbc-sink#configuration"},"Configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.8.x/io-jdbc-sink#example-for-mariadb"},"Example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/jdbc/mariadb/src/main/java/org/apache/pulsar/io/jdbc/MariadbJdbcAutoSchemaSink.java"},"Java class"))),(0,i.kt)("h3",{id:"jdbc-postgresql"},"JDBC PostgreSQL"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.8.x/io-jdbc-sink#configuration"},"Configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.8.x/io-jdbc-sink#example-for-postgresql"},"Example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/jdbc/postgres/src/main/java/org/apache/pulsar/io/jdbc/PostgresJdbcAutoSchemaSink.java"},"Java class"))),(0,i.kt)("h3",{id:"jdbc-sqlite"},"JDBC SQLite"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.8.x/io-jdbc-sink#configuration"},"Configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.8.x/io-jdbc-sink#example-for-sqlite"},"Example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/jdbc/sqlite/src/main/java/org/apache/pulsar/io/jdbc/SqliteJdbcAutoSchemaSink.java"},"Java class"))),(0,i.kt)("h3",{id:"kafka-1"},"Kafka"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.8.x/io-kafka-sink#configuration"},"Configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/kafka/src/main/java/org/apache/pulsar/io/kafka/KafkaAbstractSink.java"},"Java class"))),(0,i.kt)("h3",{id:"kinesis-1"},"Kinesis"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.8.x/io-kinesis-sink#configuration"},"Configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/kinesis/src/main/java/org/apache/pulsar/io/kinesis/KinesisSink.java"},"Java class"))),(0,i.kt)("h3",{id:"mongodb"},"MongoDB"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.8.x/io-mongo-sink#configuration"},"Configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/mongo/src/main/java/org/apache/pulsar/io/mongodb/MongoSink.java"},"Java class"))),(0,i.kt)("h3",{id:"rabbitmq-1"},"RabbitMQ"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.8.x/io-rabbitmq-sink#configuration"},"Configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/rabbitmq/src/main/java/org/apache/pulsar/io/rabbitmq/RabbitMQSink.java"},"Java class"))),(0,i.kt)("h3",{id:"redis"},"Redis"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.8.x/io-redis-sink#configuration"},"Configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/redis/src/main/java/org/apache/pulsar/io/redis/RedisAbstractConfig.java"},"Java class"))),(0,i.kt)("h3",{id:"solr"},"Solr"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.8.x/io-solr-sink#configuration"},"Configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/solr/src/main/java/org/apache/pulsar/io/solr/SolrSinkConfig.java"},"Java class"))))}c.isMDXComponent=!0}}]);