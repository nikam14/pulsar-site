"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6640],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=o(a),u=r,g=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(g,s(s({ref:t},d),{},{components:a})):n.createElement(g,s({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,s[1]=l;for(var o=2;o<i;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},11980:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const i={id:"admin-api-partitioned-topics",title:"Managing partitioned topics",sidebar_label:"Partitioned topics",original_id:"admin-api-partitioned-topics"},s=void 0,l={unversionedId:"admin-api-partitioned-topics",id:"version-2.6.3/admin-api-partitioned-topics",title:"Managing partitioned topics",description:"You can use Pulsar's admin API to create and manage partitioned topics.",source:"@site/versioned_docs/version-2.6.3/admin-api-partitioned-topics.md",sourceDirName:".",slug:"/admin-api-partitioned-topics",permalink:"/docs/2.6.3/admin-api-partitioned-topics",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/admin-api-partitioned-topics.md",tags:[],version:"2.6.3",frontMatter:{id:"admin-api-partitioned-topics",title:"Managing partitioned topics",sidebar_label:"Partitioned topics",original_id:"admin-api-partitioned-topics"},sidebar:"version-2.6.3/docsSidebar",previous:{title:"Non-Persistent topics",permalink:"/docs/2.6.3/admin-api-non-persistent-topics"},next:{title:"Non-Partitioned topics",permalink:"/docs/2.6.3/admin-api-non-partitioned-topics"}},p={},o=[{value:"Partitioned topics resources",id:"partitioned-topics-resources",level:2},{value:"Create",id:"create",level:3},{value:"pulsar-admin",id:"pulsar-admin",level:4},{value:"REST API",id:"rest-api",level:4},{value:"Java",id:"java",level:4},{value:"Create missed partitions",id:"create-missed-partitions",level:3},{value:"pulsar-admin",id:"pulsar-admin-1",level:4},{value:"REST API",id:"rest-api-1",level:4},{value:"Java",id:"java-1",level:4},{value:"Get metadata",id:"get-metadata",level:3},{value:"pulsar-admin",id:"pulsar-admin-2",level:4},{value:"REST API",id:"rest-api-2",level:4},{value:"Java",id:"java-2",level:4},{value:"Update",id:"update",level:3},{value:"pulsar-admin",id:"pulsar-admin-3",level:4},{value:"REST API",id:"rest-api-3",level:4},{value:"Java",id:"java-3",level:4},{value:"Delete",id:"delete",level:3},{value:"pulsar-admin",id:"pulsar-admin-4",level:4},{value:"REST API",id:"rest-api-4",level:4},{value:"Java",id:"java-4",level:4},{value:"List",id:"list",level:3},{value:"pulsar-admin",id:"pulsar-admin-5",level:4},{value:"REST API",id:"rest-api-5",level:4},{value:"Java",id:"java-5",level:4},{value:"Stats",id:"stats",level:3},{value:"pulsar-admin",id:"pulsar-admin-6",level:4},{value:"REST API",id:"rest-api-6",level:4},{value:"Java",id:"java-6",level:4},{value:"Internal stats",id:"internal-stats",level:3},{value:"pulsar-admin",id:"pulsar-admin-7",level:4},{value:"REST API",id:"rest-api-7",level:4},{value:"Java",id:"java-7",level:4}],d={toc:o};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can use Pulsar's ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/admin-api-overview"},"admin API")," to create and manage partitioned topics."),(0,r.kt)("p",null,"In all of the instructions and commands below, the topic name structure is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\npersistent://tenant/namespace/topic\n\n")),(0,r.kt)("h2",{id:"partitioned-topics-resources"},"Partitioned topics resources"),(0,r.kt)("h3",{id:"create"},"Create"),(0,r.kt)("p",null,"Partitioned topics in Pulsar must be explicitly created. When creating a new partitioned topic you\nneed to provide a name for the topic as well as the desired number of partitions."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"By default, after 60 seconds of creation, topics are considered inactive and deleted automatically to prevent from generating trash data.\nTo disable this feature, set ",(0,r.kt)("inlineCode",{parentName:"p"},"brokerDeleteInactiveTopicsEnabled"),"  to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),".\nTo change the frequency of checking inactive topics, set ",(0,r.kt)("inlineCode",{parentName:"p"},"brokerDeleteInactiveTopicsFrequencySeconds")," to your desired value.\nFor more information about these two parameters, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-configuration#broker"},"here"),".")),(0,r.kt)("h4",{id:"pulsar-admin"},"pulsar-admin"),(0,r.kt)("p",null,"You can create partitioned topics using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-pulsar-admin#create-partitioned-topic"},(0,r.kt)("inlineCode",{parentName:"a"},"create-partitioned-topic")),"\ncommand and specifying the topic name as an argument and the number of partitions using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-p")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--partitions")," flag."),(0,r.kt)("p",null,"Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin topics create-partitioned-topic \\\n  persistent://my-tenant/my-namespace/my-topic \\\n  --partitions 4\n\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If there already exists a non partitioned topic with suffix '-partition-' followed by numeric value like\n'xyz-topic-partition-10', then you can not create partitioned topic with name 'xyz-topic' as the partitions\nof the partitioned topic could override the existing non partitioned topic. You have to delete that non\npartitioned topic first then create the partitioned topic.")),(0,r.kt)("h4",{id:"rest-api"},"REST API"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.3&apiversion=v2#operation/createPartitionedTopic"},"PUT /admin/v2/:schema/:tenant/:namespace/:topic/partitions")),(0,r.kt)("h4",{id:"java"},"Java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nString topicName = "persistent://my-tenant/my-namespace/my-topic";\nint numPartitions = 4;\nadmin.persistentTopics().createPartitionedTopic(topicName, numPartitions);\n\n')),(0,r.kt)("h3",{id:"create-missed-partitions"},"Create missed partitions"),(0,r.kt)("p",null,"Try to create partitions for partitioned topic. The partitions of partition topic has to be created,\ncan be used by repair partitions when topic auto creation is disabled"),(0,r.kt)("h4",{id:"pulsar-admin-1"},"pulsar-admin"),(0,r.kt)("p",null,"You can create missed partitions using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-pulsar-admin#create-missed-partitions"},(0,r.kt)("inlineCode",{parentName:"a"},"create-missed-partitions")),"\ncommand and specifying the topic name as an argument."),(0,r.kt)("p",null,"Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin topics create-missed-partitions \\\n  persistent://my-tenant/my-namespace/my-topic \\\n\n")),(0,r.kt)("h4",{id:"rest-api-1"},"REST API"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.3&apiversion=v2#operation/createMissedPartitions"},"POST /admin/v2/:schema/:tenant/:namespace/:topic")),(0,r.kt)("h4",{id:"java-1"},"Java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nString topicName = "persistent://my-tenant/my-namespace/my-topic";\nadmin.persistentTopics().createMissedPartitions(topicName);\n\n')),(0,r.kt)("h3",{id:"get-metadata"},"Get metadata"),(0,r.kt)("p",null,"Partitioned topics have metadata associated with them that you can fetch as a JSON object.\nThe following metadata fields are currently available:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"partitions")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of partitions into which the topic is divided")))),(0,r.kt)("h4",{id:"pulsar-admin-2"},"pulsar-admin"),(0,r.kt)("p",null,"You can see the number of partitions in a partitioned topic using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-pulsar-admin#get-partitioned-topic-metadata"},(0,r.kt)("inlineCode",{parentName:"a"},"get-partitioned-topic-metadata")),"\nsubcommand. Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin topics get-partitioned-topic-metadata \\\n  persistent://my-tenant/my-namespace/my-topic\n{\n  "partitions": 4\n}\n\n')),(0,r.kt)("h4",{id:"rest-api-2"},"REST API"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.3&apiversion=v2#operation/getPartitionedMetadata"},"GET /admin/v2/:schema/:tenant/:namespace/:topic/partitions")),(0,r.kt)("h4",{id:"java-2"},"Java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nString topicName = "persistent://my-tenant/my-namespace/my-topic";\nadmin.persistentTopics().getPartitionedTopicMetadata(topicName);\n\n')),(0,r.kt)("h3",{id:"update"},"Update"),(0,r.kt)("p",null,"You can update the number of partitions on an existing partitioned topic\n",(0,r.kt)("em",{parentName:"p"},"if")," the topic is non-global. To update, the new number of partitions must be greater\nthan the existing number."),(0,r.kt)("p",null,"Decrementing the number of partitions would deleting the topic, which is not supported in Pulsar."),(0,r.kt)("p",null,"Already created partitioned producers and consumers will automatically find the newly created partitions."),(0,r.kt)("h4",{id:"pulsar-admin-3"},"pulsar-admin"),(0,r.kt)("p",null,"Partitioned topics can be updated using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-pulsar-admin#update-partitioned-topic"},(0,r.kt)("inlineCode",{parentName:"a"},"update-partitioned-topic"))," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin topics update-partitioned-topic \\\n  persistent://my-tenant/my-namespace/my-topic \\\n  --partitions 8\n\n")),(0,r.kt)("h4",{id:"rest-api-3"},"REST API"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.3&apiversion=v2#operation/updatePartitionedTopic"},"POST /admin/v2/:schema/:tenant/:cluster/:namespace/:destination/partitions")),(0,r.kt)("h4",{id:"java-3"},"Java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.persistentTopics().updatePartitionedTopic(persistentTopic, numPartitions);\n\n")),(0,r.kt)("h3",{id:"delete"},"Delete"),(0,r.kt)("h4",{id:"pulsar-admin-4"},"pulsar-admin"),(0,r.kt)("p",null,"Partitioned topics can be deleted using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-pulsar-admin#delete-partitioned-topic"},(0,r.kt)("inlineCode",{parentName:"a"},"delete-partitioned-topic"))," command, specifying the topic by name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin topics delete-partitioned-topic \\\n  persistent://my-tenant/my-namespace/my-topic\n\n")),(0,r.kt)("h4",{id:"rest-api-4"},"REST API"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.3&apiversion=v2#operation/deletePartitionedTopic"},"DELETE /admin/v2/:schema/:topic/:namespace/:destination/partitions")),(0,r.kt)("h4",{id:"java-4"},"Java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.persistentTopics().delete(persistentTopic);\n\n")),(0,r.kt)("h3",{id:"list"},"List"),(0,r.kt)("p",null,"It provides a list of persistent topics existing under a given namespace.  "),(0,r.kt)("h4",{id:"pulsar-admin-5"},"pulsar-admin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin topics list tenant/namespace\npersistent://tenant/namespace/topic1\npersistent://tenant/namespace/topic2\n\n")),(0,r.kt)("h4",{id:"rest-api-5"},"REST API"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.3&apiversion=v2#operation/getPartitionedTopicList"},"GET /admin/v2/:schema/:tenant/:namespace")),(0,r.kt)("h4",{id:"java-5"},"Java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.persistentTopics().getList(namespace);\n\n")),(0,r.kt)("h3",{id:"stats"},"Stats"),(0,r.kt)("p",null,"It shows current statistics of a given partitioned topic. Here's an example payload:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "msgRateIn": 4641.528542257553,\n  "msgThroughputIn": 44663039.74947473,\n  "msgRateOut": 0,\n  "msgThroughputOut": 0,\n  "averageMsgSize": 1232439.816728665,\n  "storageSize": 135532389160,\n  "publishers": [\n    {\n      "msgRateIn": 57.855383881403576,\n      "msgThroughputIn": 558994.7078932219,\n      "averageMsgSize": 613135,\n      "producerId": 0,\n      "producerName": null,\n      "address": null,\n      "connectedSince": null\n    }\n  ],\n  "subscriptions": {\n    "my-topic_subscription": {\n      "msgRateOut": 0,\n      "msgThroughputOut": 0,\n      "msgBacklog": 116632,\n      "type": null,\n      "msgRateExpired": 36.98245516804671,\n      "consumers": []\n    }\n  },\n  "replication": {}\n}\n\n')),(0,r.kt)("p",null,"The following stats are available:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Stat"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgRateIn"),(0,r.kt)("td",{parentName:"tr",align:null},"The sum of all local and replication publishers\u2019 publish rates in messages per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgThroughputIn"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as msgRateIn but in bytes per second instead of messages per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgRateOut"),(0,r.kt)("td",{parentName:"tr",align:null},"The sum of all local and replication consumers\u2019 dispatch rates in messages per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgThroughputOut"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as msgRateOut but in bytes per second instead of messages per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"averageMsgSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Average message size, in bytes, from this publisher within the last interval")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storageSize"),(0,r.kt)("td",{parentName:"tr",align:null},"The sum of the ledgers\u2019 storage size for this topic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"publishers"),(0,r.kt)("td",{parentName:"tr",align:null},"The list of all local publishers into the topic. There can be anywhere from zero to thousands.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"producerId"),(0,r.kt)("td",{parentName:"tr",align:null},"Internal identifier for this producer on this topic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"producerName"),(0,r.kt)("td",{parentName:"tr",align:null},"Internal identifier for this producer, generated by the client library")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"IP address and source port for the connection of this producer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connectedSince"),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp this producer was created or last reconnected")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subscriptions"),(0,r.kt)("td",{parentName:"tr",align:null},"The list of all local subscriptions to the topic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"my-subscription"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of this subscription (client defined)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgBacklog"),(0,r.kt)("td",{parentName:"tr",align:null},"The count of messages in backlog for this subscription")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgBacklogNoDelayed"),(0,r.kt)("td",{parentName:"tr",align:null},"The count of messages in backlog without delayed messages for this subscription")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"This subscription type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgRateExpired"),(0,r.kt)("td",{parentName:"tr",align:null},"The rate at which messages were discarded instead of dispatched from this subscription due to TTL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consumers"),(0,r.kt)("td",{parentName:"tr",align:null},"The list of connected consumers for this subscription")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consumerName"),(0,r.kt)("td",{parentName:"tr",align:null},"Internal identifier for this consumer, generated by the client library")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"availablePermits"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of messages this consumer has space for in the client library\u2019s listen queue. A value of 0 means the client library\u2019s queue is full and receive() isn\u2019t being called. A nonzero value means this consumer is ready to be dispatched messages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replication"),(0,r.kt)("td",{parentName:"tr",align:null},"This section gives the stats for cross-colo replication of this topic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replicationBacklog"),(0,r.kt)("td",{parentName:"tr",align:null},"The outbound replication backlog in messages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connected"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the outbound replicator is connected")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replicationDelayInSeconds"),(0,r.kt)("td",{parentName:"tr",align:null},"How long the oldest message has been waiting to be sent through the connection, if connected is true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inboundConnection"),(0,r.kt)("td",{parentName:"tr",align:null},"The IP and port of the broker in the remote cluster\u2019s publisher connection to this broker")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inboundConnectedSince"),(0,r.kt)("td",{parentName:"tr",align:null},"The TCP connection being used to publish messages to the remote cluster. If there are no local publishers connected, this connection is automatically closed after a minute.")))),(0,r.kt)("h4",{id:"pulsar-admin-6"},"pulsar-admin"),(0,r.kt)("p",null,"The stats for the partitioned topic and its connected producers and consumers can be fetched by using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-pulsar-admin#partitioned-stats"},(0,r.kt)("inlineCode",{parentName:"a"},"partitioned-stats"))," command, specifying the topic by name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin topics partitioned-stats \\\n  persistent://test-tenant/namespace/topic \\\n  --per-partition\n\n")),(0,r.kt)("h4",{id:"rest-api-6"},"REST API"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.3&apiversion=v2#operation/getPartitionedStats"},"GET /admin/v2/:schema/:tenant/:namespace/:topic/partitioned-stats")),(0,r.kt)("h4",{id:"java-6"},"Java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.topics().getPartitionedStats(persistentTopic, true /* per partition */, false /* is precise backlog */);\n\n")),(0,r.kt)("h3",{id:"internal-stats"},"Internal stats"),(0,r.kt)("p",null,"It shows detailed statistics of a topic."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Stat"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entriesAddedCounter"),(0,r.kt)("td",{parentName:"tr",align:null},"Messages published since this broker loaded this topic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"numberOfEntries"),(0,r.kt)("td",{parentName:"tr",align:null},"Total number of messages being tracked")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"totalSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Total storage size in bytes of all messages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"currentLedgerEntries"),(0,r.kt)("td",{parentName:"tr",align:null},"Count of messages written to the ledger currently open for writing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"currentLedgerSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Size in bytes of messages written to ledger currently open for writing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lastLedgerCreatedTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"Time when last ledger was created")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lastLedgerCreationFailureTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"time when last ledger was failed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"waitingCursorsCount"),(0,r.kt)("td",{parentName:"tr",align:null},"How many cursors are caught up and waiting for a new message to be published")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pendingAddEntriesCount"),(0,r.kt)("td",{parentName:"tr",align:null},"How many messages have (asynchronous) write requests we are waiting on completion")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lastConfirmedEntry"),(0,r.kt)("td",{parentName:"tr",align:null},"The ledgerid:entryid of the last message successfully written. If the entryid is -1, then the ledger has been opened or is currently being opened but has no entries written yet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},"The state of the cursor ledger. Open means we have a cursor ledger for saving updates of the markDeletePosition.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ledgers"),(0,r.kt)("td",{parentName:"tr",align:null},"The ordered list of all ledgers for this topic holding its messages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cursors"),(0,r.kt)("td",{parentName:"tr",align:null},"The list of all cursors on this topic. There will be one for every subscription you saw in the topic stats.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"markDeletePosition"),(0,r.kt)("td",{parentName:"tr",align:null},"The ack position: the last message the subscriber acknowledged receiving")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readPosition"),(0,r.kt)("td",{parentName:"tr",align:null},"The latest position of subscriber for reading message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"waitingReadOp"),(0,r.kt)("td",{parentName:"tr",align:null},"This is true when the subscription has read the latest message published to the topic and is waiting on new messages to be published.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pendingReadOps"),(0,r.kt)("td",{parentName:"tr",align:null},"The counter for how many outstanding read requests to the BookKeepers we have in progress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"messagesConsumedCounter"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of messages this cursor has acked since this broker loaded this topic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cursorLedger"),(0,r.kt)("td",{parentName:"tr",align:null},"The ledger being used to persistently store the current markDeletePosition")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cursorLedgerLastEntry"),(0,r.kt)("td",{parentName:"tr",align:null},"The last entryid used to persistently store the current markDeletePosition")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"individuallyDeletedMessages"),(0,r.kt)("td",{parentName:"tr",align:null},"If Acks are being done out of order, shows the ranges of messages Acked between the markDeletePosition and the read-position")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lastLedgerSwitchTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"The last time the cursor ledger was rolled over")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "entriesAddedCounter": 20449518,\n  "numberOfEntries": 3233,\n  "totalSize": 331482,\n  "currentLedgerEntries": 3233,\n  "currentLedgerSize": 331482,\n  "lastLedgerCreatedTimestamp": "2016-06-29 03:00:23.825",\n  "lastLedgerCreationFailureTimestamp": null,\n  "waitingCursorsCount": 1,\n  "pendingAddEntriesCount": 0,\n  "lastConfirmedEntry": "324711539:3232",\n  "state": "LedgerOpened",\n  "ledgers": [\n    {\n      "ledgerId": 324711539,\n      "entries": 0,\n      "size": 0\n    }\n  ],\n  "cursors": {\n    "my-subscription": {\n      "markDeletePosition": "324711539:3133",\n      "readPosition": "324711539:3233",\n      "waitingReadOp": true,\n      "pendingReadOps": 0,\n      "messagesConsumedCounter": 20449501,\n      "cursorLedger": 324702104,\n      "cursorLedgerLastEntry": 21,\n      "individuallyDeletedMessages": "[(324711539:3134\u2025324711539:3136], (324711539:3137\u2025324711539:3140], ]",\n      "lastLedgerSwitchTimestamp": "2016-06-29 01:30:19.313",\n      "state": "Open"\n    }\n  }\n}\n\n')),(0,r.kt)("h4",{id:"pulsar-admin-7"},"pulsar-admin"),(0,r.kt)("p",null,"The internal stats for the partitioned topic can be fetched by using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-pulsar-admin#stats-internal"},(0,r.kt)("inlineCode",{parentName:"a"},"stats-internal"))," command, specifying the topic by name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin topics stats-internal \\\n  persistent://test-tenant/namespace/topic\n\n")),(0,r.kt)("h4",{id:"rest-api-7"},"REST API"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.3&apiversion=v2#operation/getInternalStats"},"GET /admin/v2/:schema/:tenant/:namespace/:topic/internalStats")),(0,r.kt)("h4",{id:"java-7"},"Java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.persistentTopics().getInternalStats(persistentTopic);\n\n")))}m.isMDXComponent=!0}}]);