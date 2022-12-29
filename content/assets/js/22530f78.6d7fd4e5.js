"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8042],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>m});var t=n(67294);function s(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){s(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=t.createContext({}),c=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(o.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},k=t.forwardRef((function(e,a){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),k=s,m=u["".concat(o,".").concat(k)]||u[k]||d[k]||r;return n?t.createElement(m,l(l({ref:a},p),{},{components:n})):t.createElement(m,l({ref:a},p))}));function m(e,a){var n=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=n.length,l=new Array(r);l[0]=k;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[u]="string"==typeof e?e:s,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}k.displayName="MDXCreateElement"},68347:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=n(87462),s=(n(67294),n(3905));const r={id:"io-quickstart",title:"Tutorial: Connecting Pulsar with Apache Cassandra",sidebar_label:"Getting started",original_id:"io-quickstart"},l=void 0,i={unversionedId:"io-quickstart",id:"version-2.3.2/io-quickstart",title:"Tutorial: Connecting Pulsar with Apache Cassandra",description:"This tutorial provides a hands-on look at how you can move data out of Pulsar without writing a single line of code.",source:"@site/versioned_docs/version-2.3.2/io-quickstart.md",sourceDirName:".",slug:"/io-quickstart",permalink:"/docs/2.3.2/io-quickstart",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/io-quickstart.md",tags:[],version:"2.3.2",frontMatter:{id:"io-quickstart",title:"Tutorial: Connecting Pulsar with Apache Cassandra",sidebar_label:"Getting started",original_id:"io-quickstart"},sidebar:"version-2.3.2/docsSidebar",previous:{title:"Overview",permalink:"/docs/2.3.2/io-overview"},next:{title:"Managing Connectors",permalink:"/docs/2.3.2/io-managing"}},o={},c=[{value:"Installing Pulsar",id:"installing-pulsar",level:2},{value:"Installing Builtin Connectors",id:"installing-builtin-connectors",level:2},{value:"Start Pulsar Service",id:"start-pulsar-service",level:2},{value:"Connect Pulsar to Apache Cassandra",id:"connect-pulsar-to-apache-cassandra",level:2},{value:"Setup the Cassandra Cluster",id:"setup-the-cassandra-cluster",level:3},{value:"Start a Cassandra Cluster",id:"start-a-cassandra-cluster",level:4},{value:"Create keyspace and table",id:"create-keyspace-and-table",level:4},{value:"Create keyspace <code>pulsar_test_keyspace</code>",id:"create-keyspace-pulsar_test_keyspace",level:5},{value:"Create table <code>pulsar_test_table</code>",id:"create-table-pulsar_test_table",level:4},{value:"Configure a Cassandra Sink",id:"configure-a-cassandra-sink",level:3},{value:"Submit a Cassandra Sink",id:"submit-a-cassandra-sink",level:3},{value:"Note",id:"note",level:4},{value:"Inspect the Cassandra Sink",id:"inspect-the-cassandra-sink",level:3},{value:"Retrieve Sink Info",id:"retrieve-sink-info",level:4},{value:"Check Sink Running Status",id:"check-sink-running-status",level:4},{value:"Verify the Cassandra Sink",id:"verify-the-cassandra-sink",level:3},{value:"Delete the Cassandra Sink",id:"delete-the-cassandra-sink",level:3}],p={toc:c};function u(e){let{components:a,...n}=e;return(0,s.kt)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This tutorial provides a hands-on look at how you can move data out of Pulsar without writing a single line of code.\nIt is helpful to review the ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.3.2/io-overview"},"concepts")," for Pulsar I/O in tandem with running the steps in this guide\nto gain a deeper understanding. At the end of this tutorial, you will be able to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Connect your Pulsar cluster with your Cassandra cluster")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("ol",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ol"},"These instructions assume you are running Pulsar in ",(0,s.kt)("a",{parentName:"li",href:"/docs/2.3.2/getting-started-standalone"},"standalone mode"),". However all\nthe commands used in this tutorial should be able to be used in a multi-nodes Pulsar cluster without any changes."),(0,s.kt)("li",{parentName:"ol"},"All the instructions are assumed to run at the root directory of a Pulsar binary distribution."))),(0,s.kt)("h2",{id:"installing-pulsar"},"Installing Pulsar"),(0,s.kt)("p",null,"To get started running Pulsar, download a binary tarball release in one of the following ways:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"by clicking the link below and downloading the release from an Apache mirror:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{href:"https://archive.apache.org/dist/pulsar/pulsar-2.3.2/apache-pulsar-2.3.2-bin.tar.gz",download:!0},"Pulsar 2.3.2 binary release")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"from the Pulsar ",(0,s.kt)("a",{parentName:"p",href:"/download"},"downloads page"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"from the Pulsar ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/releases/latest"},"releases page"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"using ",(0,s.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget"),":"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.3.2/apache-pulsar-2.3.2-bin.tar.gz\n\n")))),(0,s.kt)("p",null,"Once the tarball is downloaded, untar it and ",(0,s.kt)("inlineCode",{parentName:"p"},"cd")," into the resulting directory:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ tar xvfz apache-pulsar-2.3.2-bin.tar.gz\n$ cd apache-pulsar-2.3.2\n\n")),(0,s.kt)("h2",{id:"installing-builtin-connectors"},"Installing Builtin Connectors"),(0,s.kt)("p",null,"Since release ",(0,s.kt)("inlineCode",{parentName:"p"},"2.3.0"),", Pulsar releases all the ",(0,s.kt)("inlineCode",{parentName:"p"},"builtin")," connectors as individual archives.\nIf you would like to enable those ",(0,s.kt)("inlineCode",{parentName:"p"},"builtin"),' connectors, you can download the connectors "NAR"\narchives and from the Pulsar ',(0,s.kt)("a",{parentName:"p",href:"/download"},"downloads page"),"."),(0,s.kt)("p",null,"After downloading the desired builtin connectors, these archives should be places under\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"connectors")," directory where you have unpacked the Pulsar distribution."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\n# Unpack regular Pulsar tarball and copy connectors NAR archives\n$ tar xvfz /path/to/apache-pulsar-2.3.2-bin.tar.gz\n$ cd apache-pulsar-2.3.2\n$ mkdir connectors\n$ cp -r /path/to/downloaded/connectors/*.nar ./connectors\n\n$ ls connectors\npulsar-io-aerospike-2.3.2.nar\npulsar-io-cassandra-2.3.2.nar\npulsar-io-kafka-2.3.2.nar\npulsar-io-kinesis-2.3.2.nar\npulsar-io-rabbitmq-2.3.2.nar\npulsar-io-twitter-2.3.2.nar\n...\n\n")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"You can also use the Docker image ",(0,s.kt)("inlineCode",{parentName:"p"},"apachepulsar/pulsar-all:2.3.2")," which already\ncomes with all the available builtin connectors.")),(0,s.kt)("h2",{id:"start-pulsar-service"},"Start Pulsar Service"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar standalone\n\n")),(0,s.kt)("p",null,"All the components of a Pulsar service will start in order. You can curl those pulsar service endpoints to make sure Pulsar service is up running correctly."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Check pulsar binary protocol port.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\ntelnet localhost 6650\n\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Check pulsar function cluster")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\ncurl -s http://localhost:8080/admin/v2/worker/cluster\n\n")),(0,s.kt)("p",null,"Example output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'\n[{"workerId":"c-standalone-fw-localhost-6750","workerHostname":"localhost","port":6750}]\n\n')),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Make sure public tenant and default namespace exist")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\ncurl -s http://localhost:8080/admin/v2/namespaces/public\n\n")),(0,s.kt)("p",null,"Example outoupt:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'\n["public/default","public/functions"]\n\n')),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"All builtin connectors should be listed as available.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\ncurl -s http://localhost:8080/admin/v2/functions/connectors\n\n")),(0,s.kt)("p",null,"Example output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'\n[{"name":"aerospike","description":"Aerospike database sink","sinkClass":"org.apache.pulsar.io.aerospike.AerospikeStringSink"},{"name":"cassandra","description":"Writes data into Cassandra","sinkClass":"org.apache.pulsar.io.cassandra.CassandraStringSink"},{"name":"kafka","description":"Kafka source and sink connector","sourceClass":"org.apache.pulsar.io.kafka.KafkaStringSource","sinkClass":"org.apache.pulsar.io.kafka.KafkaBytesSink"},{"name":"kinesis","description":"Kinesis sink connector","sinkClass":"org.apache.pulsar.io.kinesis.KinesisSink"},{"name":"rabbitmq","description":"RabbitMQ source connector","sourceClass":"org.apache.pulsar.io.rabbitmq.RabbitMQSource"},{"name":"twitter","description":"Ingest data from Twitter firehose","sourceClass":"org.apache.pulsar.io.twitter.TwitterFireHose"}]\n\n')),(0,s.kt)("p",null,"If an error occurred while starting Pulsar service, you may be able to seen exception at the terminal you are running ",(0,s.kt)("inlineCode",{parentName:"p"},"pulsar/standalone"),",\nor you can navigate the ",(0,s.kt)("inlineCode",{parentName:"p"},"logs")," directory under the Pulsar directory to view the logs."),(0,s.kt)("h2",{id:"connect-pulsar-to-apache-cassandra"},"Connect Pulsar to Apache Cassandra"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Make sure you have docker available at your laptop. If you don't have docker installed, you can follow the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-mac/install/"},"instructions"),".")),(0,s.kt)("p",null,"We are using ",(0,s.kt)("inlineCode",{parentName:"p"},"cassandra")," docker image to start a single-node cassandra cluster in Docker."),(0,s.kt)("h3",{id:"setup-the-cassandra-cluster"},"Setup the Cassandra Cluster"),(0,s.kt)("h4",{id:"start-a-cassandra-cluster"},"Start a Cassandra Cluster"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\ndocker run -d --rm --name=cassandra -p 9042:9042 cassandra\n\n")),(0,s.kt)("p",null,"Before moving to next steps, make sure the cassandra cluster is up running."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Make sure the docker process is running.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\ndocker ps\n\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Check the cassandra logs to make sure cassandra process is running as expected.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\ndocker logs cassandra\n\n")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Check the cluster status")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\ndocker exec cassandra nodetool status\n\n")),(0,s.kt)("p",null,"Example output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\nDatacenter: datacenter1\n=======================\nStatus=Up/Down\n|/ State=Normal/Leaving/Joining/Moving\n--  Address     Load       Tokens       Owns (effective)  Host ID                               Rack\nUN  172.17.0.2  103.67 KiB  256          100.0%            af0e4b2f-84e0-4f0b-bb14-bd5f9070ff26  rack1\n\n")),(0,s.kt)("h4",{id:"create-keyspace-and-table"},"Create keyspace and table"),(0,s.kt)("p",null,"We are using ",(0,s.kt)("inlineCode",{parentName:"p"},"cqlsh")," to connect to the cassandra cluster to create keyspace and table."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ docker exec -ti cassandra cqlsh localhost\nConnected to Test Cluster at localhost:9042.\n[cqlsh 5.0.1 | Cassandra 3.11.2 | CQL spec 3.4.4 | Native protocol v4]\nUse HELP for help.\ncqlsh>\n\n")),(0,s.kt)("p",null,"All the following commands are executed in ",(0,s.kt)("inlineCode",{parentName:"p"},"cqlsh"),"."),(0,s.kt)("h5",{id:"create-keyspace-pulsar_test_keyspace"},"Create keyspace ",(0,s.kt)("inlineCode",{parentName:"h5"},"pulsar_test_keyspace")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\ncqlsh> CREATE KEYSPACE pulsar_test_keyspace WITH replication = {'class':'SimpleStrategy', 'replication_factor':1};\n\n")),(0,s.kt)("h4",{id:"create-table-pulsar_test_table"},"Create table ",(0,s.kt)("inlineCode",{parentName:"h4"},"pulsar_test_table")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\ncqlsh> USE pulsar_test_keyspace;\ncqlsh:pulsar_test_keyspace> CREATE TABLE pulsar_test_table (key text PRIMARY KEY, col text);\n\n")),(0,s.kt)("h3",{id:"configure-a-cassandra-sink"},"Configure a Cassandra Sink"),(0,s.kt)("p",null,"Now that we have a Cassandra cluster running locally. In this section, we will configure a Cassandra sink connector.\nThe Cassandra sink connector will read messages from a Pulsar topic and write the messages into a Cassandra table."),(0,s.kt)("p",null,"In order to run a Cassandra sink connector, you need to prepare a yaml config file including informations that Pulsar IO\nruntime needs to know. For example, how Pulsar IO can find the cassandra cluster, what is the keyspace and table that\nPulsar IO will be using for writing Pulsar messages to."),(0,s.kt)("p",null,"Create a file ",(0,s.kt)("inlineCode",{parentName:"p"},"examples/cassandra-sink.yml")," and edit it to fill in following content:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'\nconfigs:\n    roots: "localhost:9042"\n    keyspace: "pulsar_test_keyspace"\n    columnFamily: "pulsar_test_table"\n    keyname: "key"\n    columnName: "col"\n\n')),(0,s.kt)("p",null,"To learn more about Cassandra Connector, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.3.2/io-cassandra"},"Cassandra Connector"),"."),(0,s.kt)("h3",{id:"submit-a-cassandra-sink"},"Submit a Cassandra Sink"),(0,s.kt)("p",null,"Pulsar provides the ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.3.2/reference-cli-tools"},"CLI")," for running and managing Pulsar I/O connectors."),(0,s.kt)("p",null,"We can run following command to sink a sink connector with type ",(0,s.kt)("inlineCode",{parentName:"p"},"cassandra")," and config file ",(0,s.kt)("inlineCode",{parentName:"p"},"examples/cassandra-sink.yml"),"."),(0,s.kt)("h4",{id:"note"},"Note"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The ",(0,s.kt)("inlineCode",{parentName:"p"},"sink-type")," parameter of the currently built-in connectors is determined by the setting of the ",(0,s.kt)("inlineCode",{parentName:"p"},"name")," parameter specified in the pulsar-io.yaml file.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin sink create \\\n    --tenant public \\\n    --namespace default \\\n    --name cassandra-test-sink \\\n    --sink-type cassandra \\\n    --sink-config-file examples/cassandra-sink.yml \\\n    --inputs test_cassandra\n\n")),(0,s.kt)("p",null,"Once the command is executed, Pulsar will create a sink connector named ",(0,s.kt)("inlineCode",{parentName:"p"},"cassandra-test-sink")," and the sink connector will be running\nas a Pulsar Function and write the messages produced in topic ",(0,s.kt)("inlineCode",{parentName:"p"},"test_cassandra")," to Cassandra table ",(0,s.kt)("inlineCode",{parentName:"p"},"pulsar_test_table"),"."),(0,s.kt)("h3",{id:"inspect-the-cassandra-sink"},"Inspect the Cassandra Sink"),(0,s.kt)("p",null,"You can use ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.3.2/reference-pulsar-admin#sink"},"sink CLI")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.3.2/reference-pulsar-admin#source"},"source CLI"),"\nfor inspecting and managing the IO connectors."),(0,s.kt)("h4",{id:"retrieve-sink-info"},"Retrieve Sink Info"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin sink get \\\n    --tenant public \\\n    --namespace default \\\n    --name cassandra-test-sink\n\n")),(0,s.kt)("p",null,"Example output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'\n{\n  "tenant": "public",\n  "namespace": "default",\n  "name": "cassandra-test-sink",\n  "className": "org.apache.pulsar.io.cassandra.CassandraStringSink",\n  "inputSpecs": {\n    "test_cassandra": {\n      "isRegexPattern": false\n    }\n  },\n  "configs": {\n    "roots": "localhost:9042",\n    "keyspace": "pulsar_test_keyspace",\n    "columnFamily": "pulsar_test_table",\n    "keyname": "key",\n    "columnName": "col"\n  },\n  "parallelism": 1,\n  "processingGuarantees": "ATLEAST_ONCE",\n  "retainOrdering": false,\n  "autoAck": true,\n  "archive": "builtin://cassandra"\n}\n\n')),(0,s.kt)("h4",{id:"check-sink-running-status"},"Check Sink Running Status"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin sink status \\\n    --tenant public \\\n    --namespace default \\\n    --name cassandra-test-sink\n\n")),(0,s.kt)("p",null,"Example output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'\n{\n  "numInstances" : 1,\n  "numRunning" : 1,\n  "instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n      "running" : true,\n      "error" : "",\n      "numRestarts" : 0,\n      "numReadFromPulsar" : 0,\n      "numSystemExceptions" : 0,\n      "latestSystemExceptions" : [ ],\n      "numSinkExceptions" : 0,\n      "latestSinkExceptions" : [ ],\n      "numWrittenToSink" : 0,\n      "lastReceivedTime" : 0,\n      "workerId" : "c-standalone-fw-localhost-8080"\n    }\n  } ]\n}\n\n')),(0,s.kt)("h3",{id:"verify-the-cassandra-sink"},"Verify the Cassandra Sink"),(0,s.kt)("p",null,"Now lets produce some messages to the input topic of the Cassandra sink ",(0,s.kt)("inlineCode",{parentName:"p"},"test_cassandra"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'\nfor i in {0..9}; do bin/pulsar-client produce -m "key-$i" -n 1 test_cassandra; done\n\n')),(0,s.kt)("p",null,"Inspect the sink running status again. You should be able to see 10 messages are processed by the Cassandra sink."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin sink status \\\n    --tenant public \\\n    --namespace default \\\n    --name cassandra-test-sink\n\n")),(0,s.kt)("p",null,"Example output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'\n{\n  "numInstances" : 1,\n  "numRunning" : 1,\n  "instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n      "running" : true,\n      "error" : "",\n      "numRestarts" : 0,\n      "numReadFromPulsar" : 10,\n      "numSystemExceptions" : 0,\n      "latestSystemExceptions" : [ ],\n      "numSinkExceptions" : 0,\n      "latestSinkExceptions" : [ ],\n      "numWrittenToSink" : 10,\n      "lastReceivedTime" : 1551685489136,\n      "workerId" : "c-standalone-fw-localhost-8080"\n    }\n  } ]\n}\n\n')),(0,s.kt)("p",null,"Finally, lets inspect the results in Cassandra using ",(0,s.kt)("inlineCode",{parentName:"p"},"cqlsh")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\ndocker exec -ti cassandra cqlsh localhost\n\n")),(0,s.kt)("p",null,"Select the rows from the Cassandra table ",(0,s.kt)("inlineCode",{parentName:"p"},"pulsar_test_table"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\ncqlsh> use pulsar_test_keyspace;\ncqlsh:pulsar_test_keyspace> select * from pulsar_test_table;\n\n key    | col\n--------+--------\n  key-5 |  key-5\n  key-0 |  key-0\n  key-9 |  key-9\n  key-2 |  key-2\n  key-1 |  key-1\n  key-3 |  key-3\n  key-6 |  key-6\n  key-7 |  key-7\n  key-4 |  key-4\n  key-8 |  key-8\n\n")),(0,s.kt)("h3",{id:"delete-the-cassandra-sink"},"Delete the Cassandra Sink"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin sink delete \\\n    --tenant public \\\n    --namespace default \\\n    --name cassandra-test-sink\n\n")))}u.isMDXComponent=!0}}]);