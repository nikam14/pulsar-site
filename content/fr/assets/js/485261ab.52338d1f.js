"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[58836],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var p=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,p)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,p,r=function(e,t){if(null==e)return{};var a,p,r={},n=Object.keys(e);for(p=0;p<n.length;p++)a=n[p],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(p=0;p<n.length;p++)a=n[p],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=p.createContext({}),s=function(e){var t=p.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return p.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},h=p.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=s(a),m=r,k=h["".concat(o,".").concat(m)]||h[m]||c[m]||n;return a?p.createElement(k,l(l({ref:t},u),{},{components:a})):p.createElement(k,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=h;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<n;s++)l[s]=a[s];return p.createElement.apply(null,l)}return p.createElement.apply(null,a)}h.displayName="MDXCreateElement"},45004:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var p=a(87462),r=a(63366),n=(a(67294),a(3905)),l=["components"],i={id:"pulsar-2.8.1",title:"Apache Pulsar 2.8.1",sidebar_label:"Apache Pulsar 2.8.1"},o=void 0,s={unversionedId:"versioned/pulsar-2.8.1",id:"versioned/pulsar-2.8.1",title:"Apache Pulsar 2.8.1",description:"security",source:"@site/release-notes/versioned/pulsar-2.8.1.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.8.1",permalink:"/fr/release-notes/versioned/pulsar-2.8.1",tags:[],version:"current",frontMatter:{id:"pulsar-2.8.1",title:"Apache Pulsar 2.8.1",sidebar_label:"Apache Pulsar 2.8.1"}},u={},c=[{value:"security",id:"security",level:2},{value:"broker",id:"broker",level:2},{value:"build",id:"build",level:2},{value:"admin",id:"admin",level:2},{value:"dependency",id:"dependency",level:2},{value:"metrics",id:"metrics",level:2},{value:"function",id:"function",level:2},{value:"topic-policy",id:"topic-policy",level:2},{value:"bookkeeper",id:"bookkeeper",level:2},{value:"test",id:"test",level:2},{value:"transaction",id:"transaction",level:2},{value:"storage",id:"storage",level:2},{value:"tieredstorage",id:"tieredstorage",level:2},{value:"stats",id:"stats",level:2},{value:"connector",id:"connector",level:2},{value:"compaction",id:"compaction",level:2},{value:"config",id:"config",level:2},{value:"tool",id:"tool",level:2}],h={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,n.kt)("wrapper",(0,p.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"security"},"security"),(0,n.kt)("p",null,"Forbid to read other topic's data in managedLedger layer ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11912"},"#11912"),(0,n.kt)("br",{parentName:"p"}),"\n","[Security]"," Upgrade commons-compress to 1.21 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11345"},"#11345"),(0,n.kt)("br",{parentName:"p"}),"\n","[Security]"," Bump Netty version to 4.1.66.Final ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11344"},"#11344"),(0,n.kt)("br",{parentName:"p"}),"\n","[broker]"," fix ",(0,n.kt)("inlineCode",{parentName:"p"},"GetTopicsOfNamespace")," with binary lookup service not check auth ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11172"},"#11172"),(0,n.kt)("br",{parentName:"p"}),"\n","[Security]"," Use ubuntu:20.04 base image for Pulsar docker images ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11026"},"#11026"),"  "),(0,n.kt)("h2",{id:"broker"},"broker"),(0,n.kt)("p",null,"[Broker]"," Refine topic level backlog quota policies warning log ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11863"},"#11863"),(0,n.kt)("br",{parentName:"p"}),"\n","Fix all web threads will get stuck when deleting the namespace ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11596"},"#11596"),(0,n.kt)("br",{parentName:"p"}),"\n","[broker]"," Improve error logs in BacklogQuotaManager ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11469"},"#11469"),(0,n.kt)("br",{parentName:"p"}),"\n","[issue #13351]"," Solving precise rate limiting does not takes effect ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11446"},"#11446"),(0,n.kt)("br",{parentName:"p"}),"\n","[Broker]"," Fix replicated subscriptions direct memory leak ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11396"},"#11396"),(0,n.kt)("br",{parentName:"p"}),"\n","expose broker entry metadata and deliverAtTime to peekMessages/getMes\u2026 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11279"},"#11279"),(0,n.kt)("br",{parentName:"p"}),"\n","[Issue-11270]"," Change ContextClassLoader to NarClassLoader in ProtocolHandler ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11276"},"#11276"),(0,n.kt)("br",{parentName:"p"}),"\n","Allow null to be set as namespace level subscription TTL ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11253"},"#11253"),(0,n.kt)("br",{parentName:"p"}),"\n","[Ledger]"," Fix ledger rollover scheduled task ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11116"},"#11116"),(0,n.kt)("br",{parentName:"p"}),"\n","fix publish_time not set error when broker entry metadata enable without AppendBrokerTimestampMetadataInterceptor ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11014"},"#11014"),(0,n.kt)("br",{parentName:"p"}),"\n","fix parseMessageMetadata error cause by not skip broker entry metadata ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10968"},"#10968"),(0,n.kt)("br",{parentName:"p"}),"\n","[broker]"," Fix issue where Key_Shared consumers could get stuck ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10920"},"#10920"),"  "),(0,n.kt)("h2",{id:"build"},"build"),(0,n.kt)("p",null,"Source tarball: apply executable file permissions to shell scripts (fixes #10917)  ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11858"},"#11858"),(0,n.kt)("br",{parentName:"p"}),"\n","fix java_test_functions build failed ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11829"},"#11829"),(0,n.kt)("br",{parentName:"p"}),"\n","fix generate javadoc for kafka-connect-adaptor failed ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11807"},"#11807"),(0,n.kt)("br",{parentName:"p"}),"\n","Fix unnecessary user interactions when building pulsar-standalone image ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11623"},"#11623"),"  "),(0,n.kt)("h2",{id:"admin"},"admin"),(0,n.kt)("p",null,"[Issue 11814]"," fix pulsar admin method:getMessageById. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11852"},"#11852"),(0,n.kt)("br",{parentName:"p"}),"\n","[pulsar-admin]"," allow create functions with package URL ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11666"},"#11666"),(0,n.kt)("br",{parentName:"p"}),"\n","Add compacted topic metrics for TopicStats in CLI ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11564"},"#11564"),(0,n.kt)("br",{parentName:"p"}),"\n","Fix time based backlog quota. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11509"},"#11509"),(0,n.kt)("br",{parentName:"p"}),"\n","[Issue 11440]",". Add complete metadata for admin.topics().examineMessages ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11443"},"#11443"),(0,n.kt)("br",{parentName:"p"}),"\n","Remove duplicate check for replicationClusterSet ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11429"},"#11429"),(0,n.kt)("br",{parentName:"p"}),"\n","[Issue 11339]"," Pulsar Admin List Subscription lists only subscriptions created for Partition-0 when partition specific subscriptions are created ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11355"},"#11355"),(0,n.kt)("br",{parentName:"p"}),"\n","[admin]"," Enable peeking encrypted batch messages ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11244"},"#11244"),(0,n.kt)("br",{parentName:"p"}),"\n","[Broker]"," Fix async response filter ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11052"},"#11052"),"  "),(0,n.kt)("h2",{id:"dependency"},"dependency"),(0,n.kt)("p",null,"Upgrade bk version to resolve the BouncyCatle issue ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11759"},"#11759"),"  "),(0,n.kt)("h2",{id:"metrics"},"metrics"),(0,n.kt)("p",null,"Expose compaction metrics to Prometheus ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11739"},"#11739"),(0,n.kt)("br",{parentName:"p"}),"\n","Fix missing replicator metrics ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11264"},"#11264"),"  "),(0,n.kt)("h2",{id:"function"},"function"),(0,n.kt)("p",null,"[Functions]","Support protobuf schema for pulsar function ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11709"},"#11709"),(0,n.kt)("br",{parentName:"p"}),"\n","Fix: Cast exception occurs if function/source/sink type is ByteBuffer ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11611"},"#11611"),(0,n.kt)("br",{parentName:"p"}),"\n","[pulsar-io]"," fix source stats exposing empty exceptions list ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11478"},"#11478"),(0,n.kt)("br",{parentName:"p"}),"\n","[pulsar function]"," set exposePulsarAdmin to true if enabled ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11417"},"#11417"),(0,n.kt)("br",{parentName:"p"}),"\n","[pulsar function]"," add instanceId and fqn into log message properties ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11399"},"#11399"),"  "),(0,n.kt)("h2",{id:"topic-policy"},"topic-policy"),(0,n.kt)("p",null,"Avoid redundant calls for getting the offload policies from the offloader ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11629"},"#11629"),(0,n.kt)("br",{parentName:"p"}),"\n","Fix some topic policy operation without backoff ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11560"},"#11560"),(0,n.kt)("br",{parentName:"p"}),"\n","Make getTopicPoliciesAsyncWithRetry as a default method ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11518"},"#11518"),(0,n.kt)("br",{parentName:"p"}),"\n","Add backoff for setting for getting topic policies. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11487"},"#11487"),(0,n.kt)("br",{parentName:"p"}),"\n","Disable replicate system topic across clusters. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11376"},"#11376"),(0,n.kt)("br",{parentName:"p"}),"\n","When delete a topic, delete the topic policy together. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11316"},"#11316"),(0,n.kt)("br",{parentName:"p"}),"\n","Fix using partitioned topic name to get Policy ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11294"},"#11294"),(0,n.kt)("br",{parentName:"p"}),"\n","fix replay topic policy message not work ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11136"},"#11136"),(0,n.kt)("br",{parentName:"p"}),"\n","Fix race condition of the SystemTopicBasedTopicPoliciesService ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11097"},"#11097"),(0,n.kt)("br",{parentName:"p"}),"\n","fix retention policy in topic policy not work ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11021"},"#11021"),(0,n.kt)("br",{parentName:"p"}),"\n","Fix potential data lost on the system topic when topic compaction have not triggered yet ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11003"},"#11003"),"  "),(0,n.kt)("h2",{id:"bookkeeper"},"bookkeeper"),(0,n.kt)("p",null,"fix getPreviousPosition npe ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11621"},"#11621"),"  "),(0,n.kt)("h2",{id:"test"},"test"),(0,n.kt)("p",null,"[Tests]"," Fix cpp build not failing when tests fail ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11575"},"#11575"),(0,n.kt)("br",{parentName:"p"}),"\n","add test for auto-created partitioned system topic ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11545"},"#11545"),(0,n.kt)("br",{parentName:"p"}),"\n","[Tests]"," Reduce integration test memory usage in CI ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11414"},"#11414"),(0,n.kt)("br",{parentName:"p"}),"\n","fix flaky test in AdminApiOffloadTest ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11028"},"#11028"),(0,n.kt)("br",{parentName:"p"}),"\n","[Tests]"," Fix the flaky test in the ManagedLedgerTest ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11016"},"#11016"),(0,n.kt)("br",{parentName:"p"}),"\n","Make Metadata ZKSessionTest less Flaky ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10955"},"#10955"),(0,n.kt)("br",{parentName:"p"}),"\n","Fix the unit tests for the websocket and run tests under websocket group ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10921"},"#10921"),"  "),(0,n.kt)("h2",{id:"transaction"},"transaction"),(0,n.kt)("p",null,"Pending ack set managed ledger config true ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11494"},"#11494"),(0,n.kt)("br",{parentName:"p"}),"\n","Add getTxnID method in Transaction.java ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11438"},"#11438"),(0,n.kt)("br",{parentName:"p"}),"\n","[Transaction]"," Fix direct memory leak related to commit and abort markers ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11407"},"#11407"),(0,n.kt)("br",{parentName:"p"}),"\n","[Transaction]"," Fix transaction buffer client handle endTxn op when topic or sub have been deleted. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11304"},"#11304"),(0,n.kt)("br",{parentName:"p"}),"\n","[Transaction]"," Fix the transaction marker doe not deleted as expect. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11126"},"#11126"),(0,n.kt)("br",{parentName:"p"}),"\n","[Transaction]"," Fix delete sub then delete pending ack. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11023"},"#11023"),(0,n.kt)("br",{parentName:"p"}),"\n","[Transaction]"," Fix broker init transaction related topic. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11022"},"#11022"),(0,n.kt)("br",{parentName:"p"}),"\n","[Transactions]"," Prevent NPE in case of closeAsync() without a successful execution of startAsync() ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/10948"},"#10948"),"  "),(0,n.kt)("h2",{id:"storage"},"storage"),(0,n.kt)("p",null,"[ManagedLedger]"," Compress managed ledger info ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11490"},"#11490"),"  "),(0,n.kt)("h2",{id:"tieredstorage"},"tieredstorage"),(0,n.kt)("p",null,"Add offload ledger info for admin topics stats ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11465"},"#11465"),(0,n.kt)("br",{parentName:"p"}),"\n","[fix]"," OffloadPoliciesImplBuilder missing method and not implements OffloadPolicies.Builder ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11453"},"#11453"),(0,n.kt)("br",{parentName:"p"}),"\n","Remove unused listener to reduce creating executor pool ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11215"},"#11215"),"  "),(0,n.kt)("h2",{id:"stats"},"stats"),(0,n.kt)("p",null,"[stats]"," Do not expose meaningless stats for publisher ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11454"},"#11454"),(0,n.kt)("br",{parentName:"p"}),"\n","Add metrics ",(0,n.kt)("inlineCode",{parentName:"p"},"storageLogicalSize")," for the TopicStats and NamespaceStats ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11430"},"#11430"),"  "),(0,n.kt)("h2",{id:"connector"},"connector"),(0,n.kt)("p",null,"[pulsar io]"," make KafkaSourceRecord ack() non-blocking to avoid deadlock ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11435"},"#11435"),(0,n.kt)("br",{parentName:"p"}),"\n","Pulsar IO: allow Sinks to use native AVRO and JSON ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11322"},"#11322"),(0,n.kt)("br",{parentName:"p"}),"\n","[pulsar-io]"," Refine the key in redis sink when key is null ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11192"},"#11192"),"  "),(0,n.kt)("h2",{id:"compaction"},"compaction"),(0,n.kt)("p",null,"Fixed retention of keys in compaction ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11287"},"#11287"),"  "),(0,n.kt)("h2",{id:"config"},"config"),(0,n.kt)("p",null,"remove duplicated configuration ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11283"},"#11283"),"  "),(0,n.kt)("h2",{id:"tool"},"tool"),(0,n.kt)("p",null,"Print message metadata when getting message by id ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11092"},"#11092")))}m.isMDXComponent=!0}}]);