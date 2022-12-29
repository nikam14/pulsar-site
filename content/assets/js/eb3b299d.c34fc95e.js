"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5139],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>k});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var r=n.createContext({}),p=function(e){var a=n.useContext(r),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(r.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(t),u=l,k=c["".concat(r,".").concat(u)]||c[u]||d[u]||i;return t?n.createElement(k,s(s({ref:a},m),{},{components:t})):n.createElement(k,s({ref:a},m))}));function k(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=t.length,s=new Array(i);s[0]=u;var o={};for(var r in a)hasOwnProperty.call(a,r)&&(o[r]=a[r]);o.originalType=e,o[c]="string"==typeof e?e:l,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},85162:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(67294),l=t(86010);const i="tabItem_Ymn6";function s(e){let{children:a,hidden:t,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,s),hidden:t},a)}},65488:(e,a,t)=>{t.d(a,{Z:()=>u});var n=t(87462),l=t(67294),i=t(86010),s=t(72389),o=t(67392),r=t(7094),p=t(12466);const m="tabList__CuJ",c="tabItem_LNqP";function d(e){const{lazy:a,block:t,defaultValue:s,values:d,groupId:u,className:k}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??g.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),b=(0,o.l)(h,((e,a)=>e.value===a.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===s?s:s??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==v&&!h.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:y}=(0,r.U)(),[N,T]=(0,l.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=u){const e=f[u];null!=e&&e!==N&&h.some((a=>a.value===e))&&T(e)}const I=e=>{const a=e.currentTarget,t=w.indexOf(a),n=h[t].value;n!==N&&(x(a),T(n),null!=u&&y(u,String(n)))},E=e=>{let a=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;a=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;a=w[t]??w[w.length-1];break}}a?.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},k)},h.map((e=>{let{value:a,label:t,attributes:s}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,key:a,ref:e=>w.push(e),onKeyDown:E,onClick:I},s,{className:(0,i.Z)("tabs__item",c,s?.className,{"tabs__item--active":N===a})}),t??a)}))),a?(0,l.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==N})))))}function u(e){const a=(0,s.Z)();return l.createElement(d,(0,n.Z)({key:String(a)},e))}},11558:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=t(87462),l=(t(67294),t(3905)),i=t(65488),s=t(85162);const o={id:"cookbooks-retention-expiry",title:"Message retention and expiry",sidebar_label:"Message retention and expiry"},r=void 0,p={unversionedId:"cookbooks-retention-expiry",id:"version-2.4.1/cookbooks-retention-expiry",title:"Message retention and expiry",description:"Pulsar brokers are responsible for handling messages that pass through Pulsar, including persistent storage of messages. By default, for each topic, brokers only retain messages that are in at least one backlog. A backlog is the set of unacknowledged messages for a particular subscription. As a topic can have multiple subscriptions, a topic can have multiple backlogs.",source:"@site/versioned_docs/version-2.4.1/cookbooks-retention-expiry.md",sourceDirName:".",slug:"/cookbooks-retention-expiry",permalink:"/docs/2.4.1/cookbooks-retention-expiry",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/cookbooks-retention-expiry.md",tags:[],version:"2.4.1",frontMatter:{id:"cookbooks-retention-expiry",title:"Message retention and expiry",sidebar_label:"Message retention and expiry"},sidebar:"version-2.4.1/docsSidebar",previous:{title:"Partitioned Topics",permalink:"/docs/2.4.1/cookbooks-partitioned"},next:{title:"Encryption ",permalink:"/docs/2.4.1/cookbooks-encryption"}},m={},c=[{value:"Retention policies",id:"retention-policies",level:2},{value:"Defaults",id:"defaults",level:3},{value:"Set retention policy",id:"set-retention-policy",level:3},{value:"Get retention policy",id:"get-retention-policy",level:3},{value:"Example",id:"example",level:5},{value:"Backlog quotas",id:"backlog-quotas",level:2},{value:"Set size/time thresholds and backlog retention policies",id:"set-sizetime-thresholds-and-backlog-retention-policies",level:3},{value:"Example",id:"example-1",level:5},{value:"Get backlog threshold and backlog retention policy",id:"get-backlog-threshold-and-backlog-retention-policy",level:3},{value:"Remove backlog quotas",id:"remove-backlog-quotas",level:3},{value:"Clear backlog",id:"clear-backlog",level:3},{value:"pulsar-admin",id:"pulsar-admin",level:4},{value:"Example",id:"example-2",level:5},{value:"Time to live (TTL)",id:"time-to-live-ttl",level:2},{value:"Set the TTL for a namespace",id:"set-the-ttl-for-a-namespace",level:3},{value:"Example",id:"example-3",level:5},{value:"Get the TTL configuration for a namespace",id:"get-the-ttl-configuration-for-a-namespace",level:3},{value:"Example",id:"example-4",level:5},{value:"Remove the TTL configuration for a namespace",id:"remove-the-ttl-configuration-for-a-namespace",level:3},{value:"Example",id:"example-5",level:5},{value:"Delete messages from namespaces",id:"delete-messages-from-namespaces",level:2}],d={toc:c};function u(e){let{components:a,...o}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Pulsar brokers are responsible for handling messages that pass through Pulsar, including ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.4.1/concepts-architecture-overview#persistent-storage"},"persistent storage")," of messages. By default, for each topic, brokers only retain messages that are in at least one backlog. A backlog is the set of unacknowledged messages for a particular subscription. As a topic can have multiple subscriptions, a topic can have multiple backlogs."),(0,l.kt)("p",null,"As a consequence, no messages are retained (by default) on a topic that has not had any subscriptions created for it."),(0,l.kt)("p",null,"(Note that messages that are no longer being stored are not necessarily immediately deleted, and may in fact still be accessible until the next ledger rollover. Because clients cannot predict when rollovers may happen, it is not wise to rely on a rollover not happening at an inconvenient point in time.)"),(0,l.kt)("p",null,"In Pulsar, you can modify this behavior, with namespace granularity, in two ways:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You can persistently store messages that are not within a backlog (because they've been acknowledged by on every existing subscription, or because there are no subscriptions) by setting ",(0,l.kt)("a",{parentName:"li",href:"#retention-policies"},"retention policies"),"."),(0,l.kt)("li",{parentName:"ul"},"Messages that are not acknowledged within a specified timeframe can be automatically acknowledged, by specifying the ",(0,l.kt)("a",{parentName:"li",href:"#time-to-live-ttl"},"time to live")," (TTL).")),(0,l.kt)("p",null,"Pulsar's ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.4.1/admin-api-overview"},"admin interface")," enables you to manage both retention policies and TTL with namespace granularity (and thus within a specific tenant and either on a specific cluster or in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.4.1/concepts-architecture-overview#global-cluster"},(0,l.kt)("inlineCode",{parentName:"a"},"global"))," cluster)."),(0,l.kt)("blockquote",null,(0,l.kt)("h4",{parentName:"blockquote",id:"retention-and-ttl-solve-two-different-problems"},"Retention and TTL solve two different problems"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"Message retention: Keep the data for at least X hours (even if acknowledged)"),(0,l.kt)("li",{parentName:"ul"},"Time-to-live: Discard data after some time (by automatically acknowledging)")),(0,l.kt)("p",{parentName:"blockquote"},"Most applications will want to use at most one of these.")),(0,l.kt)("h2",{id:"retention-policies"},"Retention policies"),(0,l.kt)("p",null,"By default, when a Pulsar message arrives at a broker, the message is stored until it has been acknowledged on all subscriptions, at which point it is marked for deletion. You can override this behavior and retain messages that have already been acknowledged on all subscriptions by setting a ",(0,l.kt)("em",{parentName:"p"},"retention policy")," for all topics in a given namespace. Retention is based on both a ",(0,l.kt)("em",{parentName:"p"},"size limit")," and a ",(0,l.kt)("em",{parentName:"p"},"time limit"),"."),(0,l.kt)("p",null,"The diagram below illustrates the concept of message retention.\n",(0,l.kt)("img",{src:t(10567).Z,width:"920",height:"581"})),(0,l.kt)("p",null,"Retention policies are useful when you use the Reader interface. The Reader interface does not use acknowledgements, and messages do not exist within backlogs. It is required to configure retention for Reader-only use cases."),(0,l.kt)("p",null,"When you set a retention policy on topics in a namespace, you must set ",(0,l.kt)("strong",{parentName:"p"},"both")," a ",(0,l.kt)("em",{parentName:"p"},"size limit")," (via ",(0,l.kt)("inlineCode",{parentName:"p"},"defaultRetentionSizeInMB"),") and a ",(0,l.kt)("em",{parentName:"p"},"time limit")," (via ",(0,l.kt)("inlineCode",{parentName:"p"},"defaultRetentionTimeInMinutes"),") . You can refer to the following table to set retention policies in ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-admin")," and Java."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Time limit"),(0,l.kt)("th",{parentName:"tr",align:null},"Size limit"),(0,l.kt)("th",{parentName:"tr",align:null},"Message retention"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"Infinite retention")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},">0"),(0,l.kt)("td",{parentName:"tr",align:null},"Based on the size limit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},">0"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"Based on the time limit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Disable message retention (by default)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},">0"),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},">0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},">0"),(0,l.kt)("td",{parentName:"tr",align:null},">0"),(0,l.kt)("td",{parentName:"tr",align:null},"Acknowledged messages or messages with no active subscription will not be retained when either time or size reaches the limit.")))),(0,l.kt)("p",null,"The retention settings apply to all messages on topics that do not have any subscriptions, or to messages that have been acknowledged by all subscriptions. The retention policy settings do not affect unacknowledged messages on topics with subscriptions. The unacknowledged messages are controlled by the backlog quota."),(0,l.kt)("p",null,"When a retention limit on a topic is exceeded, the oldest message is marked for deletion until the set of retained messages falls within the specified limits again."),(0,l.kt)("h3",{id:"defaults"},"Defaults"),(0,l.kt)("p",null,"You can set message retention at instance level with the following two parameters: ",(0,l.kt)("inlineCode",{parentName:"p"},"defaultRetentionTimeInMinutes")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"defaultRetentionSizeInMB"),". Both parameters are set to ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," by default. "),(0,l.kt)("p",null,"For more information of the two parameters, refer to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-configuration#broker"},(0,l.kt)("inlineCode",{parentName:"a"},"broker.conf"))," configuration file."),(0,l.kt)("h3",{id:"set-retention-policy"},"Set retention policy"),(0,l.kt)("p",null,"You can set a retention policy for a namespace by specifying the namespace, a size limit and a time limit in ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-admin"),", REST API and Java."),(0,l.kt)(i.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"You can use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#namespaces-set-retention"},(0,l.kt)("inlineCode",{parentName:"a"},"set-retention"))," subcommand and specify a namespace, a size limit using the ",(0,l.kt)("inlineCode",{parentName:"p"},"-s"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"--size")," flag, and a time limit using the ",(0,l.kt)("inlineCode",{parentName:"p"},"-t"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"--time")," flag. "),(0,l.kt)("p",null,"In the following example, the size limit is set to 10 GB and the time limit is set to 3 hours for each topic within the ",(0,l.kt)("inlineCode",{parentName:"p"},"my-tenant/my-ns")," namespace. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When the size of messages reaches 10 GB on a topic within 3 hours, the acknowledged messages will not be retained. "),(0,l.kt)("li",{parentName:"ul"},"After 3 hours, even if the message size is less than 10 GB, the acknowledged messages will not be retained. ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-retention my-tenant/my-ns \\\n  --size 10G \\\n  --time 3h\n\n")),(0,l.kt)("p",null,"In the following example, the time is not limited and the size limit is set to 1 TB. The size limit determines the retention."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-retention my-tenant/my-ns \\\n  --size 1T \\\n  --time -1\n\n")),(0,l.kt)("p",null,"In the following example, the size is not limited and the time limit is set to 3 hours. The time limit determines the retention."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-retention my-tenant/my-ns \\\n  --size -1 \\\n  --time 3h\n\n")),(0,l.kt)("p",null,"To achieve infinite retention, set both values to ",(0,l.kt)("inlineCode",{parentName:"p"},"-1"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-retention my-tenant/my-ns \\\n  --size -1 \\\n  --time -1\n\n")),(0,l.kt)("p",null,"To disable the retention policy, set both values to ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-retention my-tenant/my-ns \\\n  --size 0 \\\n  --time 0\n\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.4.1&apiversion=v2#operation/setRetention"},"POST /admin/v2/namespaces/:tenant/:namespace/retention")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"To disable the retention policy, you need to set both the size and time limit to ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),". Set either size or time limit to ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," is invalid."))),(0,l.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nint retentionTime = 10; // 10 minutes\nint retentionSize = 500; // 500 megabytes\nRetentionPolicies policies = new RetentionPolicies(retentionTime, retentionSize);\nadmin.namespaces().setRetention(namespace, policies);\n\n")))),(0,l.kt)("h3",{id:"get-retention-policy"},"Get retention policy"),(0,l.kt)("p",null,"You can fetch the retention policy for a namespace by specifying the namespace. The output will be a JSON object with two keys: ",(0,l.kt)("inlineCode",{parentName:"p"},"retentionTimeInMinutes")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"retentionSizeInMB"),"."),(0,l.kt)(i.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#namespaces"},(0,l.kt)("inlineCode",{parentName:"a"},"get-retention"))," subcommand and specify the namespace."),(0,l.kt)("h5",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin namespaces get-retention my-tenant/my-ns\n{\n  "retentionTimeInMinutes": 10,\n  "retentionSizeInMB": 500\n}\n\n'))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.4.1&apiversion=v2#operation/getRetention"},"GET /admin/v2/namespaces/:tenant/:namespace/retention"))),(0,l.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().getRetention(namespace);\n\n")))),(0,l.kt)("h2",{id:"backlog-quotas"},"Backlog quotas"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Backlogs")," are sets of unacknowledged messages for a topic that have been stored by bookies. Pulsar stores all unacknowledged messages in backlogs until they are processed and acknowledged."),(0,l.kt)("p",null,"You can control the allowable size and/or time of backlogs, at the namespace level, using ",(0,l.kt)("em",{parentName:"p"},"backlog quotas"),". Pulsar uses a quota to enforce a hard limit on the logical size of the backlogs in a topic. Backlog quota triggers an alert policy (for example, producer exception) once the quota limit is reached."),(0,l.kt)("p",null,"The diagram below illustrates the concept of backlog quota.\n",(0,l.kt)("img",{src:t(31597).Z,width:"1465",height:"907"})),(0,l.kt)("p",null,"Setting a backlog quota involves setting:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"an allowable ",(0,l.kt)("em",{parentName:"li"},"size and/or time threshold")," for each topic in the namespace"),(0,l.kt)("li",{parentName:"ul"},"a ",(0,l.kt)("em",{parentName:"li"},"retention policy")," that determines which action the ",(0,l.kt)("a",{parentName:"li",href:"/docs/2.4.1/reference-terminology#broker"},"broker")," takes if the threshold is exceeded.")),(0,l.kt)("p",null,"The following retention policies are available:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Policy"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Action"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"producer_request_hold")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The broker will hold and not persist produce request payload")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"producer_exception")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The broker will disconnect from the client by throwing an exception")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"consumer_backlog_eviction")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The broker will begin discarding backlog messages")))),(0,l.kt)("blockquote",null,(0,l.kt)("h4",{parentName:"blockquote",id:"beware-the-distinction-between-retention-policy-types"},"Beware the distinction between retention policy types"),(0,l.kt)("p",{parentName:"blockquote"},'As you may have noticed, there are two definitions of the term "retention policy" in Pulsar, one that applies to persistent storage of messages not in backlogs, and one that applies to messages within backlogs.')),(0,l.kt)("p",null,"Backlog quotas are handled at the namespace level. They can be managed via:"),(0,l.kt)("h3",{id:"set-sizetime-thresholds-and-backlog-retention-policies"},"Set size/time thresholds and backlog retention policies"),(0,l.kt)("p",null,"You can set a size and/or time threshold and backlog retention policy for all of the topics in a ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-terminology#namespace"},"namespace")," by specifying the namespace, a size limit and/or a time limit in second, and a policy by name."),(0,l.kt)(i.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#namespaces"},(0,l.kt)("inlineCode",{parentName:"a"},"set-backlog-quota"))," subcommand and specify a namespace, a size limit using the ",(0,l.kt)("inlineCode",{parentName:"p"},"-l"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"--limit")," , ",(0,l.kt)("inlineCode",{parentName:"p"},"-lt"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"--limitTime")," flag to limit backlog, a retention policy using the ",(0,l.kt)("inlineCode",{parentName:"p"},"-p"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"--policy")," flag and a policy type using ",(0,l.kt)("inlineCode",{parentName:"p"},"-t"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"--type")," (default is destination_storage)."),(0,l.kt)("h5",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-backlog-quota my-tenant/my-ns \\\n  --limit 2G \\\n  --policy producer_request_hold\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-backlog-quota my-tenant/my-ns/my-topic \\\n--limitTime 3600 \\\n--policy producer_request_hold \\\n--type message_age\n\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.4.1&apiversion=v2#operation/getBacklogQuotaMap"},"POST /admin/v2/namespaces/:tenant/:namespace/backlogQuota"))),(0,l.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nlong sizeLimit = 2147483648L;\nBacklogQuota.RetentionPolicy policy = BacklogQuota.RetentionPolicy.producer_request_hold;\nBacklogQuota quota = new BacklogQuota(sizeLimit, policy);\nadmin.namespaces().setBacklogQuota(namespace, quota);\n\n")))),(0,l.kt)("h3",{id:"get-backlog-threshold-and-backlog-retention-policy"},"Get backlog threshold and backlog retention policy"),(0,l.kt)("p",null,"You can see which size threshold and backlog retention policy has been applied to a namespace."),(0,l.kt)(i.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#pulsar-admin-namespaces-get-backlog-quotas"},(0,l.kt)("inlineCode",{parentName:"a"},"get-backlog-quotas"))," subcommand and specify a namespace. Here's an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin namespaces get-backlog-quotas my-tenant/my-ns\n{\n  "destination_storage": {\n    "limit" : 2147483648,\n    "policy" : "producer_request_hold"\n  }\n}\n\n'))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.4.1&apiversion=v2#operation/getBacklogQuotaMap"},"GET /admin/v2/namespaces/:tenant/:namespace/backlogQuotaMap"))),(0,l.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nMap<BacklogQuota.BacklogQuotaType,BacklogQuota> quotas =\n  admin.namespaces().getBacklogQuotas(namespace);\n\n")))),(0,l.kt)("h3",{id:"remove-backlog-quotas"},"Remove backlog quotas"),(0,l.kt)(i.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#pulsar-admin-namespaces-remove-backlog-quota"},(0,l.kt)("inlineCode",{parentName:"a"},"remove-backlog-quota"))," subcommand and specify a namespace, use ",(0,l.kt)("inlineCode",{parentName:"p"},"t"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"--type")," to specify backlog type to remove(default is destination_storage). Here's an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces remove-backlog-quota my-tenant/my-ns\n\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.4.1&apiversion=v2#operation/removeBacklogQuota"},"DELETE /admin/v2/namespaces/:tenant/:namespace/backlogQuota"))),(0,l.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().removeBacklogQuota(namespace);\n\n")))),(0,l.kt)("h3",{id:"clear-backlog"},"Clear backlog"),(0,l.kt)("h4",{id:"pulsar-admin"},"pulsar-admin"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.4.1/reference-pulsar-admin#pulsar-admin-namespaces-clear-backlog"},(0,l.kt)("inlineCode",{parentName:"a"},"clear-backlog"))," subcommand."),(0,l.kt)("h5",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces clear-backlog my-tenant/my-ns\n\n")),(0,l.kt)("p",null,"By default, you will be prompted to ensure that you really want to clear the backlog for the namespace. You can override the prompt using the ",(0,l.kt)("inlineCode",{parentName:"p"},"-f"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"--force")," flag."),(0,l.kt)("h2",{id:"time-to-live-ttl"},"Time to live (TTL)"),(0,l.kt)("p",null,"By default, Pulsar stores all unacknowledged messages forever. This can lead to heavy disk space usage in cases where a lot of messages are going unacknowledged. If disk space is a concern, you can set a time to live (TTL) that determines how long unacknowledged messages will be retained."),(0,l.kt)("p",null,"The TTL parameter is like a stopwatch attached to each message that defines the amount of time a message is allowed to stay in the unacknowledged state. When the TTL expires, Pulsar automatically moves the message to the acknowledged state (and thus makes it ready for deletion)."),(0,l.kt)("p",null,"The diagram below illustrates the concept of TTL.\n",(0,l.kt)("img",{src:t(34309).Z,width:"1100",height:"581"})),(0,l.kt)("h3",{id:"set-the-ttl-for-a-namespace"},"Set the TTL for a namespace"),(0,l.kt)(i.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#pulsar-admin-namespaces-set-message-ttl"},(0,l.kt)("inlineCode",{parentName:"a"},"set-message-ttl"))," subcommand and specify a namespace and a TTL (in seconds) using the ",(0,l.kt)("inlineCode",{parentName:"p"},"-ttl"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"--messageTTL")," flag."),(0,l.kt)("h5",{id:"example-3"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-message-ttl my-tenant/my-ns \\\n  --messageTTL 120 # TTL of 2 minutes\n\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.4.1&apiversion=v2#operation/setNamespaceMessageTTL"},"POST /admin/v2/namespaces/:tenant/:namespace/messageTTL"))),(0,l.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().setNamespaceMessageTTL(namespace, ttlInSeconds);\n\n")))),(0,l.kt)("h3",{id:"get-the-ttl-configuration-for-a-namespace"},"Get the TTL configuration for a namespace"),(0,l.kt)(i.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#pulsar-admin-namespaces-get-message-ttl"},(0,l.kt)("inlineCode",{parentName:"a"},"get-message-ttl"))," subcommand and specify a namespace."),(0,l.kt)("h5",{id:"example-4"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces get-message-ttl my-tenant/my-ns\n60\n\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.4.1&apiversion=v2#operation/getNamespaceMessageTTL"},"GET /admin/v2/namespaces/:tenant/:namespace/messageTTL"))),(0,l.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().getNamespaceMessageTTL(namespace)\n\n")))),(0,l.kt)("h3",{id:"remove-the-ttl-configuration-for-a-namespace"},"Remove the TTL configuration for a namespace"),(0,l.kt)(i.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#pulsar-admin-namespaces-remove-message-ttl"},(0,l.kt)("inlineCode",{parentName:"a"},"remove-message-ttl"))," subcommand and specify a namespace."),(0,l.kt)("h5",{id:"example-5"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces remove-message-ttl my-tenant/my-ns\n\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.4.1&apiversion=v2#operation/removeNamespaceMessageTTL"},"DELETE /admin/v2/namespaces/:tenant/:namespace/messageTTL"))),(0,l.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().removeNamespaceMessageTTL(namespace)\n\n")))),(0,l.kt)("h2",{id:"delete-messages-from-namespaces"},"Delete messages from namespaces"),(0,l.kt)("p",null,"When it comes to the physical storage size, message expiry and retention are just like two sides of the same coin."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The backlog quota and TTL parameters prevent disk size from growing indefinitely, as Pulsar\u2019s default behaviour is to persist unacknowledged messages. "),(0,l.kt)("li",{parentName:"ul"},"The retention policy allocates storage space to accommodate the messages that are supposed to be deleted by Pulsar by default.")),(0,l.kt)("p",null,"As a conclusion, the size of your physical storage should accommodate the sum of the backlog quota and the retention size. "),(0,l.kt)("p",null,"The message deletion rate (releasing rate of disk space) can be determined by multiple factors. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Segment rollover period"),": basically, the segment rollover period is how often a new segment is created. Once a new segment is created, the old segment will be deleted. By default, this happens either when you have written 50,000 entries (messages) or have waited 240 minutes. You can tune this in your broker.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Entry log rollover period"),": multiple ledgers in BookKeeper are interleaved into an ",(0,l.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org/docs/4.11.1/getting-started/concepts/#entry-logs"},"entry log"),". In order for a ledger that has been deleted, the entry log must all be rolled over.\nThe entry log rollover period is configurable, but is purely based on the entry log size. For details, see ",(0,l.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org/docs/4.11.1/reference/config/#entry-log-settings"},"here"),". Once the entry log is rolled over, the entry log can be garbage collected.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Garbage collection interval"),": because entry logs have interleaved ledgers, to free up space, the entry logs need to be rewritten. The garbage collection interval is how often BookKeeper performs garbage collection. which is related to minor compaction and major compaction of entry logs. For details, see ",(0,l.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org/docs/4.11.1/reference/config/#entry-log-compaction-settings"},"here"),"."))),(0,l.kt)("p",null,"The diagram below illustrates one of the cases that the consumed storage size is larger than the given limits for backlog and retention. Messages over the retention limit are kept because other messages in the same segment are still within retention period.\n",(0,l.kt)("img",{src:t(84307).Z,width:"1159",height:"614"})),(0,l.kt)("p",null,"If you do not have any retention period and that you never have much of a backlog, the upper limit for retained messages, which are acknowledged, equals to the Pulsar segment rollover period + entry log rollover period + (garbage collection interval * garbage collection ratios)."))}u.isMDXComponent=!0},31597:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/backlog-quota-8b858faef29b4f2a73479d396ec5b59f.svg"},84307:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/retention-storage-size-4c7f0e9aa49ebd431dae787dd13b60ba.svg"},10567:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/retention-1dfff1bb477b98049ae06fcd16a51fda.svg"},34309:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/ttl-7605af453040d419a432d79d41b23830.svg"}}]);