"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[7924],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>b});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return t?a.createElement(b,s(s({ref:n},u),{},{components:t})):a.createElement(b,s({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},31093:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const i={id:"transactions-api",title:"Transactions API (Developer Preview)",sidebar_label:"Transactions API",original_id:"transactions-api"},s=void 0,o={unversionedId:"transactions-api",id:"version-2.7.2/transactions-api",title:"Transactions API (Developer Preview)",description:"All messages in a transaction is available only to consumers after the transaction is committed. If a transaction is aborted, all the writes and acknowledgments in this transaction rollback.",source:"@site/versioned_docs/version-2.7.2/transactions-api.md",sourceDirName:".",slug:"/transactions-api",permalink:"/docs/2.7.2/transactions-api",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/transactions-api.md",tags:[],version:"2.7.2",frontMatter:{id:"transactions-api",title:"Transactions API (Developer Preview)",sidebar_label:"Transactions API",original_id:"transactions-api"},sidebar:"version-2.7.2/docsSidebar",previous:{title:"Transactions Guarantee",permalink:"/docs/2.7.2/transactions-guarantee"},next:{title:"Overview",permalink:"/docs/2.7.2/helm-overview"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Initialize Pulsar client",id:"initialize-pulsar-client",level:2},{value:"Start transactions",id:"start-transactions",level:2},{value:"Produce transaction messages",id:"produce-transaction-messages",level:2},{value:"Acknowledge the messages with the transaction",id:"acknowledge-the-messages-with-the-transaction",level:2},{value:"Commit transactions",id:"commit-transactions",level:2},{value:"Abort transaction",id:"abort-transaction",level:2},{value:"Example",id:"example",level:3},{value:"Enable batch messages in transactions",id:"enable-batch-messages-in-transactions",level:2}],u={toc:l};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"All messages in a transaction is available only to consumers after the transaction is committed. If a transaction is aborted, all the writes and acknowledgments in this transaction rollback. "),(0,r.kt)("p",null,"Currently, Pulsar transaction is a developer preview feature. It is disabled by default. You can enable the feature and use transactions in your application in development environment."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"To enable transactions in Pulsar, you need to configure the parameter in the ",(0,r.kt)("inlineCode",{parentName:"li"},"broker.conf")," file.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\ntransactionCoordinatorEnabled=true\n\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Initialize transaction coordinator metadata, so the transaction coordinators can leverage advantages of the partitioned topic, such as load balance.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nbin/pulsar initialize-transaction-coordinator-metadata -cs 127.0.0.1:2181 -c standalone\n\n")),(0,r.kt)("p",null,"After initializing transaction coordinator metadata, you can use the transactions API. The following APIs are available."),(0,r.kt)("h2",{id:"initialize-pulsar-client"},"Initialize Pulsar client"),(0,r.kt)("p",null,"You can enable transaction for transaction client and initialize transaction coordinator client."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\nPulsarClient pulsarClient = PulsarClient.builder()\n        .serviceUrl("pulsar://localhost:6650")\n        .enableTransaction(true)\n        .build();\n\n')),(0,r.kt)("h2",{id:"start-transactions"},"Start transactions"),(0,r.kt)("p",null,"You can start transaction in the following way."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nTransaction txn = pulsarClient\n        .newTransaction()\n        .withTransactionTimeout(5, TimeUnit.MINUTES)\n        .build()\n        .get();\n\n")),(0,r.kt)("h2",{id:"produce-transaction-messages"},"Produce transaction messages"),(0,r.kt)("p",null,"A transaction parameter is required when producing new transaction messages. The semantic of the transaction messages in Pulsar is ",(0,r.kt)("inlineCode",{parentName:"p"},"read-committed"),", so the consumer cannot receive the ongoing transaction messages before the transaction is committed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\nproducer.newMessage(txn).value("Hello Pulsar Transaction".getBytes()).sendAsync();\n\n')),(0,r.kt)("h2",{id:"acknowledge-the-messages-with-the-transaction"},"Acknowledge the messages with the transaction"),(0,r.kt)("p",null,"The transaction acknowledgement requires a transaction parameter. The transaction acknowledgement marks the messages state to pending-ack state. When the transaction is committed, the pending-ack state becomes ack state. If the transaction is aborted, the pending-ack state becomes unack state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nMessage<byte[]> message = consumer.receive();\nconsumer.acknowledgeAsync(message.getMessageId(), txn);\n\n")),(0,r.kt)("h2",{id:"commit-transactions"},"Commit transactions"),(0,r.kt)("p",null,"When the transaction is committed, consumers receive the transaction messages and the pending-ack state becomes ack state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\ntxn.commit().get();\n\n")),(0,r.kt)("h2",{id:"abort-transaction"},"Abort transaction"),(0,r.kt)("p",null,"When the transaction is aborted, the transaction acknowledgement is canceled and the pending-ack messages are redelivered."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\ntxn.abort().get();\n\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"The following example shows how messages are processed in transaction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\nPulsarClient pulsarClient = PulsarClient.builder()\n        .serviceUrl(getPulsarServiceList().get(0).getBrokerServiceUrl())\n        .statsInterval(0, TimeUnit.SECONDS)\n        .enableTransaction(true)\n        .build();\n\nString sourceTopic = "public/default/source-topic";\nString sinkTopic = "public/default/sink-topic";\n\nProducer<String> sourceProducer = pulsarClient\n        .newProducer(Schema.STRING)\n        .topic(sourceTopic)\n        .create();\nsourceProducer.newMessage().value("hello pulsar transaction").sendAsync();\n\nConsumer<String> sourceConsumer = pulsarClient\n        .newConsumer(Schema.STRING)\n        .topic(sourceTopic)\n        .subscriptionName("test")\n        .subscriptionType(SubscriptionType.Shared)\n        .subscriptionInitialPosition(SubscriptionInitialPosition.Earliest)\n        .subscribe();\n\nProducer<String> sinkProducer = pulsarClient\n        .newProducer(Schema.STRING)\n        .topic(sinkTopic)\n        .sendTimeout(0, TimeUnit.MILLISECONDS)\n        .create();\n\nTransaction txn = pulsarClient\n        .newTransaction()\n        .withTransactionTimeout(5, TimeUnit.MINUTES)\n        .build()\n        .get();\n\n// source message acknowledgement and sink message produce belong to one transaction,\n// they are combined into an atomic operation.\nMessage<String> message = sourceConsumer.receive();\nsourceConsumer.acknowledgeAsync(message.getMessageId(), txn);\nsinkProducer.newMessage(txn).value("sink data").sendAsync();\n\ntxn.commit().get();\n\n')),(0,r.kt)("h2",{id:"enable-batch-messages-in-transactions"},"Enable batch messages in transactions"),(0,r.kt)("p",null,"To enable batch messages in transactions, you need to enable the batch index acknowledgement feature. The transaction acks check whether the batch index acknowledgement conflicts."),(0,r.kt)("p",null,"To enable batch index acknowledgement, you need to set ",(0,r.kt)("inlineCode",{parentName:"p"},"acknowledgmentAtBatchIndexLevelEnabled")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"standalone.conf")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nacknowledgmentAtBatchIndexLevelEnabled=true\n\n")),(0,r.kt)("p",null,"And then you need to call the ",(0,r.kt)("inlineCode",{parentName:"p"},"enableBatchIndexAcknowledgment(true)")," method in the consumer builder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\nConsumer<byte[]> sinkConsumer = pulsarClient\n        .newConsumer()\n        .topic(transferTopic)\n        .subscriptionName("sink-topic")\n        .subscriptionInitialPosition(SubscriptionInitialPosition.Earliest)\n        .subscriptionType(SubscriptionType.Shared)\n        .enableBatchIndexAcknowledgment(true) // enable batch index acknowledgement\n        .subscribe();\n\n')))}p.isMDXComponent=!0}}]);