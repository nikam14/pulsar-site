"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3952],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>m});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),d=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=d(e.components);return t.createElement(l.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},h=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return n?t.createElement(m,o(o({ref:a},c),{},{components:n})):t.createElement(m,o({ref:a},c))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}h.displayName="MDXCreateElement"},30896:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var t=n(87462),r=(n(67294),n(3905));const i={id:"administration-load-balance",title:"Pulsar load balance",sidebar_label:"Load balance",original_id:"administration-load-balance"},o=void 0,s={unversionedId:"administration-load-balance",id:"version-2.3.1/administration-load-balance",title:"Pulsar load balance",description:"Load balance across Pulsar brokers",source:"@site/versioned_docs/version-2.3.1/administration-load-balance.md",sourceDirName:".",slug:"/administration-load-balance",permalink:"/docs/2.3.1/administration-load-balance",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/administration-load-balance.md",tags:[],version:"2.3.1",frontMatter:{id:"administration-load-balance",title:"Pulsar load balance",sidebar_label:"Load balance",original_id:"administration-load-balance"},sidebar:"version-2.3.1/docsSidebar",previous:{title:"Pulsar statistics",permalink:"/docs/2.3.1/administration-stats"},next:{title:"Pulsar proxy",permalink:"/docs/2.3.1/administration-proxy"}},l={},d=[{value:"Load balance across Pulsar brokers",id:"load-balance-across-pulsar-brokers",level:2},{value:"Pulsar load manager architecture",id:"pulsar-load-manager-architecture",level:2},{value:"Dynamic assignment of topics to brokers",id:"dynamic-assignment-of-topics-to-brokers",level:3},{value:"Assignment granularity",id:"assignment-granularity",level:3},{value:"Creating namespaces and bundles",id:"creating-namespaces-and-bundles",level:3},{value:"Unloading topics and bundles",id:"unloading-topics-and-bundles",level:3},{value:"Namespace bundles splitting",id:"namespace-bundles-splitting",level:3},{value:"Automatic load shedding",id:"automatic-load-shedding",level:3},{value:"Broker overload thresholds",id:"broker-overload-thresholds",level:4}],c={toc:d};function u(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"load-balance-across-pulsar-brokers"},"Load balance across Pulsar brokers"),(0,r.kt)("p",null,"Pulsar is an horizontally scalable messaging system, so it is a core requirement that the traffic\nin a logical cluster must be spread across all the available Pulsar brokers, as evenly as possible."),(0,r.kt)("p",null,"In most cases, this is true out of the box and one shouldn't worry about it. There are, though,\nmultiple settings and tools to control the traffic distribution and they require a bit of\ncontext to understand how the traffic is managed in Pulsar."),(0,r.kt)("h2",{id:"pulsar-load-manager-architecture"},"Pulsar load manager architecture"),(0,r.kt)("h3",{id:"dynamic-assignment-of-topics-to-brokers"},"Dynamic assignment of topics to brokers"),(0,r.kt)("p",null,"Topics are dynamically assigned to brokers based on the load conditions of all brokers in the\ncluster."),(0,r.kt)("p",null,"When a client starts using new topics that are not assigned to any broker, a\nprocess is triggered to choose the best suited broker to acquire ownership\nof these topics according to the load conditions. "),(0,r.kt)("p",null,'In case of partitioned topics, different partitions are assigned to different brokers. Here "topic" means either a non-partitioned topic or one partition of a topic.'),(0,r.kt)("p",null,'The assignment is "dynamic" because it changes quickly. For example, if the broker owning\nthe topic crashes, the topic will be reassigned immediately to another broker. Another scenario is\nthat the broker owning the topic becomes overloaded. In this case, the topic is\nreassigned to a less loaded broker.'),(0,r.kt)("p",null,"The dynamic assignment is made possible by the stateless nature of brokers, so you can\nquickly expand or shrink the cluster based on usage."),(0,r.kt)("h3",{id:"assignment-granularity"},"Assignment granularity"),(0,r.kt)("p",null,"The assignment of topics/partitions to brokers is not done at the topics/partitions level, but done at the Bundle level (a higher level). The reason is to amortize the amount of information that you need to keep track. Based on CPU, memory, traffic load and other indexes, topics are assigned to a particular broker dynamically. "),(0,r.kt)("p",null,'Instead of individual topic/partition assignment, each broker takes ownership of a subset of the\ntopics for a namespace. This subset is called a "',(0,r.kt)("em",{parentName:"p"},"bundle"),"\" and effectively it's a sharding\nmechanism."),(0,r.kt)("p",null,'The namespace is the "administrative" unit: many config knobs or operations are done at the\nnamespace level.'),(0,r.kt)("p",null,'For assignment, a namespaces is sharded into a list of "bundles", with each bundle comprising\na portion of overall hash range of the namespace.'),(0,r.kt)("p",null,"Topics are assigned to a particular bundle by taking the hash of the topic name and seeing in which\nbundle the hash falls into."),(0,r.kt)("p",null,"Each bundle is independent of the others and thus is independently assigned to different brokers."),(0,r.kt)("h3",{id:"creating-namespaces-and-bundles"},"Creating namespaces and bundles"),(0,r.kt)("p",null,"When creating a new namespace, it will set to use the default number of bundles. This is set in\n",(0,r.kt)("inlineCode",{parentName:"p"},"conf/broker.conf"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"\n# When a namespace is created without specifying the number of bundle, this\n# value will be used as the default\ndefaultNumberOfNamespaceBundles=4\n\n")),(0,r.kt)("p",null,"One can either change the system default, or override it when creating a new namespace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin namespaces create my-tenant/my-namespace --clusters us-west --bundles 16\n\n")),(0,r.kt)("p",null,"With this command, we're creating a namespace with 16 initial bundles. Therefore the topics for\nthis namespaces can immediately be spread across up to 16 brokers."),(0,r.kt)("p",null,"In general, if the expected traffic and number of topics is known in advance, it's a good idea to\nstart with a reasonable number of bundles instead of waiting for the system to auto-correct the\ndistribution."),(0,r.kt)("p",null,"On a same note, it is normally beneficial to start with more bundles than number of brokers,\nprimarily because of the hashing nature of the distribution of topics into bundles. For example,\nfor a namespace with 1000 topics, using something like 64 bundles will achieve a good distribution\nof traffic across 16 brokers."),(0,r.kt)("h3",{id:"unloading-topics-and-bundles"},"Unloading topics and bundles"),(0,r.kt)("p",null,'In Pulsar there is an admin operation of "unloading" a topic. Unloading means to close the topics,\nrelease ownership and reassign the topics to a new broker, based on current load.'),(0,r.kt)("p",null,"When unload happens, the client will experience a small latency blip, typically in the order of\ntens of milliseconds, while the topic is reassigned."),(0,r.kt)("p",null,"Unloading is the mechanism used by the load-manager to perform the load shedding, but it can\nalso be triggered manually, for example to correct the assignments and redistribute traffic\neven before having any broker overloaded."),(0,r.kt)("p",null,"Unloading a topic has no effect on the assignment, but it will just close and reopen the\nparticular topic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\npulsar-admin topics unload persistent://tenant/namespace/topic\n\n")),(0,r.kt)("p",null,"To unload all topics for a namespace and trigger reassignments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\npulsar-admin namespaces unload tenant/namespace\n\n")),(0,r.kt)("h3",{id:"namespace-bundles-splitting"},"Namespace bundles splitting"),(0,r.kt)("p",null,"Since the load for the topics in a bundle might change over time, or could just be hard to predict\nupfront, bundles can be split in 2 by brokers. The new smaller bundles can then be reassigned\nto different brokers."),(0,r.kt)("p",null,"The splitting happens based on some tunable thresholds. Any existing bundle that exceeds any\nof the threshold is a candidate to be split. By default the newly split bundles are also\nimmediately offloaded to other brokers, to facilitate the traffic distribution."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"\n# enable/disable namespace bundle auto split\nloadBalancerAutoBundleSplitEnabled=true\n\n# enable/disable automatic unloading of split bundles\nloadBalancerAutoUnloadSplitBundlesEnabled=true\n\n# maximum topics in a bundle, otherwise bundle split will be triggered\nloadBalancerNamespaceBundleMaxTopics=1000\n\n# maximum sessions (producers + consumers) in a bundle, otherwise bundle split will be triggered\nloadBalancerNamespaceBundleMaxSessions=1000\n\n# maximum msgRate (in + out) in a bundle, otherwise bundle split will be triggered\nloadBalancerNamespaceBundleMaxMsgRate=30000\n\n# maximum bandwidth (in + out) in a bundle, otherwise bundle split will be triggered\nloadBalancerNamespaceBundleMaxBandwidthMbytes=100\n\n# maximum number of bundles in a namespace (for auto-split)\nloadBalancerNamespaceMaximumBundles=128\n\n")),(0,r.kt)("h3",{id:"automatic-load-shedding"},"Automatic load shedding"),(0,r.kt)("p",null,"In Pulsar's load manager there is support for automatic load shedding. This means that whenever\nthe system recognized a particular broker is overloaded, it will force some traffic to be\nreassigned to less loaded brokers."),(0,r.kt)("p",null,'When a broker is identifies as overloaded, it will force to "unload" a subset of the bundles, the\nones with higher traffic, that make up for the overload percentage.'),(0,r.kt)("p",null,"For example, the default threshold is 85% and if a broker is over quota at 95% CPU usage, then\nit will unload the percent difference plus a 5% margin: ",(0,r.kt)("inlineCode",{parentName:"p"},"(95% - 85%) + 5% = 15%"),"."),(0,r.kt)("p",null,"Given the selection of bundles to offload is based on traffic (as a proxy measure for cpu, network\nand memory), broker will unload bundles for at least 15% of traffic."),(0,r.kt)("p",null,"The automatic load shedding is enabled by default and can be disabled with this setting:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"\n# Enable/disable automatic bundle unloading for load-shedding\nloadBalancerSheddingEnabled=true\n\n")),(0,r.kt)("p",null,"There are additional settings that apply to shedding:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"\n# Load shedding interval. Broker periodically checks whether some traffic should be offload from\n# some over-loaded broker to other under-loaded brokers\nloadBalancerSheddingIntervalMinutes=1\n\n# Prevent the same topics to be shed and moved to other brokers more that once within this timeframe\nloadBalancerSheddingGracePeriodMinutes=30\n\n")),(0,r.kt)("h4",{id:"broker-overload-thresholds"},"Broker overload thresholds"),(0,r.kt)("p",null,"The determinations of when a broker is overloaded is based on threshold of CPU, network and\nmemory usage. Whenever either of those metrics reaches the threshold, it will trigger the shedding\n(if enabled)."),(0,r.kt)("p",null,"By default, overload threshold is set at 85%:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"\n# Usage threshold to determine a broker as over-loaded\nloadBalancerBrokerOverloadedThresholdPercentage=85\n\n")),(0,r.kt)("p",null,"The usage stats are gathered by Pulsar from the system metrics."),(0,r.kt)("p",null,"In case of network utilization, in some cases the network interface speed reported by Linux is\nnot correct and needs to be manually overridden. This is the case in AWS EC2 instances with 1Gbps\nNIC speed for which the OS report 10Gbps speed."),(0,r.kt)("p",null,"Because of the incorrect max speed, the Pulsar load manager might think the broker has not\nreached the NIC capacity, while in fact it's already using all the bandwidth and the traffic is\nbeing slowed down."),(0,r.kt)("p",null,"There is a setting to correct the max NIC speed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"\n# Override the auto-detection of the network interfaces max speed.\n# This option is useful in some environments (eg: EC2 VMs) where the max speed\n# reported by Linux is not reflecting the real bandwidth available to the broker.\n# Since the network usage is employed by the load manager to decide when a broker\n# is overloaded, it is important to make sure the info is correct or override it\n# with the right value here. The configured value can be a double (eg: 0.8) and that\n# can be used to trigger load-shedding even before hitting on NIC limits.\nloadBalancerOverrideBrokerNicSpeedGbps=\n\n")),(0,r.kt)("p",null,"When the value is empty, Pulsar will use the value reported by the OS."))}u.isMDXComponent=!0}}]);