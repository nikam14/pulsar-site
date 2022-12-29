"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4450],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(a),f=r,c=m["".concat(s,".").concat(f)]||m[f]||u[f]||l;return a?n.createElement(c,o(o({ref:t},d),{},{components:a})):n.createElement(c,o({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(87462),r=a(67294),l=a(86010),o=a(72389),i=a(67392),s=a(7094),p=a(12466);const d="tabList__CuJ",m="tabItem_LNqP";function u(e){const{lazy:t,block:a,defaultValue:o,values:u,groupId:f,className:c}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=u??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,i.l)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===o?o:o??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==N&&!k.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:b}=(0,s.U)(),[v,w]=(0,r.useState)(N),S=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=f){const e=y[f];null!=e&&e!==v&&k.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,a=S.indexOf(t),n=k[a].value;n!==v&&(O(t),w(n),null!=f&&b(f,String(n)))},P=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const a=S.indexOf(e.currentTarget)+1;t=S[a]??S[0];break}case"ArrowLeft":{const a=S.indexOf(e.currentTarget)-1;t=S[a]??S[S.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},c)},k.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>S.push(e),onKeyDown:P,onClick:T},o,{className:(0,l.Z)("tabs__item",m,o?.className,{"tabs__item--active":v===t})}),a??t)}))),t?(0,r.cloneElement)(h.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function f(e){const t=(0,o.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},57540:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=a(65488),o=a(85162);const i={id:"tiered-storage-filesystem",title:"Use filesystem offloader with Pulsar",sidebar_label:"Filesystem offloader",original_id:"tiered-storage-filesystem"},s=void 0,p={unversionedId:"tiered-storage-filesystem",id:"version-2.7.1/tiered-storage-filesystem",title:"Use filesystem offloader with Pulsar",description:"This chapter guides you through every step of installing and configuring the filesystem offloader and using it with Pulsar.",source:"@site/versioned_docs/version-2.7.1/tiered-storage-filesystem.md",sourceDirName:".",slug:"/tiered-storage-filesystem",permalink:"/docs/2.7.1/tiered-storage-filesystem",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/tiered-storage-filesystem.md",tags:[],version:"2.7.1",frontMatter:{id:"tiered-storage-filesystem",title:"Use filesystem offloader with Pulsar",sidebar_label:"Filesystem offloader",original_id:"tiered-storage-filesystem"},sidebar:"version-2.7.1/docsSidebar",previous:{title:"GCS offloader",permalink:"/docs/2.7.1/tiered-storage-gcs"},next:{title:"Azure BlobStore offloader",permalink:"/docs/2.7.1/tiered-storage-azure"}},d={},m=[{value:"Installation",id:"installation",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Step",id:"step",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Configure filesystem offloader driver",id:"configure-filesystem-offloader-driver",level:3},{value:"Run filesystem offloader automatically",id:"run-filesystem-offloader-automatically",level:3},{value:"Example",id:"example",level:4},{value:"Run filesystem offloader manually",id:"run-filesystem-offloader-manually",level:3},{value:"Example",id:"example-1",level:4},{value:"Tutorial",id:"tutorial",level:2},{value:"Step 1: Prepare the HDFS environment",id:"step-1-prepare-the-hdfs-environment",level:3},{value:"Step 2: Install the filesystem offloader",id:"step-2-install-the-filesystem-offloader",level:3},{value:"Step 3: Configure the filesystem offloader",id:"step-3-configure-the-filesystem-offloader",level:3},{value:"Step 1: Install the filesystem offloader",id:"step-1-install-the-filesystem-offloader",level:3},{value:"Step 2: Mont your NFS to your local filesystem",id:"step-2-mont-your-nfs-to-your-local-filesystem",level:3},{value:"Step 3: Configure the filesystem offloader driver",id:"step-3-configure-the-filesystem-offloader-driver",level:3},{value:"Step 4: Offload data from BookKeeper to filesystem",id:"step-4-offload-data-from-bookkeeper-to-filesystem",level:3}],u={toc:m};function f(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This chapter guides you through every step of installing and configuring the filesystem offloader and using it with Pulsar."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"This section describes how to install the filesystem offloader."),(0,r.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pulsar: 2.4.2 or higher versions")),(0,r.kt)("h3",{id:"step"},"Step"),(0,r.kt)("p",null,"This example uses Pulsar 2.5.1."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the Pulsar tarball using one of the following ways:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download the Pulsar tarball from the ",(0,r.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.1/apache-pulsar-2.5.1-bin.tar.gz"},"Apache mirror"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download the Pulsar tarball from the Pulsar ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/download"},"download page"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget")," command to dowload the Pulsar tarball."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nwget https://archive.apache.org/dist/pulsar/pulsar-2.5.1/apache-pulsar-2.5.1-bin.tar.gz\n\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download and untar the Pulsar offloaders package. "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nwget https://downloads.apache.org/pulsar/pulsar-2.5.1/apache-pulsar-offloaders-2.5.1-bin.tar.gz\n\ntar xvfz apache-pulsar-offloaders-2.5.1-bin.tar.gz\n\n")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"If you run Pulsar in a bare metal cluster, ensure that the ",(0,r.kt)("inlineCode",{parentName:"li"},"offloaders")," tarball is unzipped in every broker's Pulsar directory."),(0,r.kt)("li",{parentName:"ul"},"If you run Pulsar in Docker or deploying Pulsar using a Docker image (such as K8S and DCOS), you can use the ",(0,r.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image. The ",(0,r.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image has already bundled tiered storage offloaders.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the Pulsar offloaders as ",(0,r.kt)("inlineCode",{parentName:"p"},"offloaders")," in the Pulsar directory."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\nmv apache-pulsar-offloaders-2.5.1/offloaders apache-pulsar-2.5.1/offloaders\n\nls offloaders\n\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\ntiered-storage-file-system-2.5.1.nar\ntiered-storage-jcloud-2.5.1.nar\n\n")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"If you run Pulsar in a bare metal cluster, ensure that ",(0,r.kt)("inlineCode",{parentName:"li"},"offloaders")," tarball is unzipped in every broker's Pulsar directory."),(0,r.kt)("li",{parentName:"ul"},"If you run Pulsar in Docker or deploying Pulsar using a Docker image (such as K8s and DCOS), you can use the ",(0,r.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image. The ",(0,r.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image has already bundled tiered storage offloaders."))))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before offloading data from BookKeeper to filesystem, you need to configure some properties of the filesystem offloader driver. ")),(0,r.kt)("p",null,"Besides, you can also configure the filesystem offloader to run it automatically or trigger it manually."),(0,r.kt)("h3",{id:"configure-filesystem-offloader-driver"},"Configure filesystem offloader driver"),(0,r.kt)("p",null,"You can configure the filesystem offloader driver in the ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"standalone.conf")," configuration file."),(0,r.kt)(l.Z,{defaultValue:"HDFS",values:[{label:"HDFS",value:"HDFS"},{label:"NFS",value:"NFS"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"HDFS",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Required")," configurations are as below."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadDriver")),(0,r.kt)("td",{parentName:"tr",align:null},"Offloader driver name, which is case-insensitive."),(0,r.kt)("td",{parentName:"tr",align:null},"filesystem")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fileSystemURI")),(0,r.kt)("td",{parentName:"tr",align:null},"Connection address, which is the URI to access the default Hadoop distributed file system."),(0,r.kt)("td",{parentName:"tr",align:null},"hdfs://127.0.0.1:9000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"offloadersDirectory")),(0,r.kt)("td",{parentName:"tr",align:null},"Offloader directory"),(0,r.kt)("td",{parentName:"tr",align:null},"offloaders")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fileSystemProfilePath")),(0,r.kt)("td",{parentName:"tr",align:null},"Hadoop profile path. The configuration file is stored in the Hadoop profile path. It contains various settings for Hadoop performance tuning."),(0,r.kt)("td",{parentName:"tr",align:null},"conf/filesystem_offload_core_site.xml"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Optional")," configurations are as below."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"managedLedgerMinLedgerRolloverTimeMinutes")),(0,r.kt)("td",{parentName:"tr",align:null},"Minimum time between ledger rollover for a topic. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Note"),": it is not recommended to set this parameter in the production environment."),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"managedLedgerMaxEntriesPerLedger")),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of entries to append to a ledger before triggering a rollover.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Note"),": it is not recommended to set this parameter in the production environment."),(0,r.kt)("td",{parentName:"tr",align:null},"5000"))))))),(0,r.kt)(o.Z,{value:"NFS",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Required")," configurations are as below."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadDriver")),(0,r.kt)("td",{parentName:"tr",align:null},"Offloader driver name, which is case-insensitive."),(0,r.kt)("td",{parentName:"tr",align:null},"filesystem")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"offloadersDirectory")),(0,r.kt)("td",{parentName:"tr",align:null},"Offloader directory"),(0,r.kt)("td",{parentName:"tr",align:null},"offloaders")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fileSystemProfilePath")),(0,r.kt)("td",{parentName:"tr",align:null},"NFS profile path. The configuration file is stored in the NFS profile path. It contains various settings for performance tuning."),(0,r.kt)("td",{parentName:"tr",align:null},"conf/filesystem_offload_core_site.xml"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Optional")," configurations are as below."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"managedLedgerMinLedgerRolloverTimeMinutes")),(0,r.kt)("td",{parentName:"tr",align:null},"Minimum time between ledger rollover for a topic. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Note"),": it is not recommended to set this parameter in the production environment."),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"managedLedgerMaxEntriesPerLedger")),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of entries to append to a ledger before triggering a rollover.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Note"),": it is not recommended to set this parameter in the production environment."),(0,r.kt)("td",{parentName:"tr",align:null},"5000")))))))),(0,r.kt)("h3",{id:"run-filesystem-offloader-automatically"},"Run filesystem offloader automatically"),(0,r.kt)("p",null,"You can configure the namespace policy to offload data automatically once a threshold is reached. The threshold is based on the size of data that a topic has stored on a Pulsar cluster. Once the topic storage reaches the threshold, an offload operation is triggered automatically. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Threshold value"),(0,r.kt)("th",{parentName:"tr",align:null},"Action"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"> 0"),(0,r.kt)("td",{parentName:"tr",align:null},"It triggers the offloading operation if the topic storage reaches its threshold.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"= 0"),(0,r.kt)("td",{parentName:"tr",align:null},"It causes a broker to offload data as soon as possible.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"< 0"),(0,r.kt)("td",{parentName:"tr",align:null},"It disables automatic offloading operation.")))),(0,r.kt)("p",null,"Automatic offload runs when a new segment is added to a topic log. If you set the threshold on a namespace, but few messages are being produced to the topic, the filesystem offloader does not work until the current segment is full."),(0,r.kt)("p",null,"You can configure the threshold using CLI tools, such as pulsar-admin."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("p",null,"This example sets the filesystem offloader threshold to 10 MB using pulsar-admin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\npulsar-admin namespaces set-offload-threshold --size 10M my-tenant/my-namespace\n\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin namespaces set-offload-threshold options")," command, including flags, descriptions, default values, and shorthands, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.1/reference-pulsar-admin#set-offload-threshold"},"here"),". ")),(0,r.kt)("h3",{id:"run-filesystem-offloader-manually"},"Run filesystem offloader manually"),(0,r.kt)("p",null,"For individual topics, you can trigger the filesystem offloader manually using one of the following methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use the REST endpoint.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use CLI tools (such as pulsar-admin). "))),(0,r.kt)("p",null,"To manually trigger the filesystem offloader via CLI tools, you need to specify the maximum amount of data (threshold) that should be retained on a Pulsar cluster for a topic. If the size of the topic data on the Pulsar cluster exceeds this threshold, segments from the topic are offloaded to the filesystem until the threshold is no longer exceeded. Older segments are offloaded first."),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This example manually run the filesystem offloader using pulsar-admin."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\npulsar-admin topics offload --size-threshold 10M persistent://my-tenant/my-namespace/topic1\n\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nOffload triggered for persistent://my-tenant/my-namespace/topic1 for messages before 2:0:-1\n\n")),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics offload options")," command, including flags, descriptions, default values, and shorthands, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.1/reference-pulsar-admin#offload"},"here"),". "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This example checks filesystem offloader status using pulsar-admin."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\npulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nOffload is currently running\n\n")),(0,r.kt)("p",{parentName:"li"},"To wait for the filesystem to complete the job, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"-w")," flag."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\npulsar-admin topics offload-status -w persistent://my-tenant/my-namespace/topic1\n\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\nOffload was a success\n\n")),(0,r.kt)("p",{parentName:"li"},"If there is an error in the offloading operation, the error is propagated to the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics offload-status")," command."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\npulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\nError in offload\nnull\n\nReason: Error offloading: org.apache.bookkeeper.mledger.ManagedLedgerException: java.util.concurrent.CompletionException: com.amazonaws.services.s3.model.AmazonS3Exception: Anonymous users cannot initiate multipart uploads.  Please authenticate. (Service: Amazon S3; Status Code: 403; Error Code: AccessDenied; Request ID: 798758DE3F1776DF; S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=), S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=\n\n")),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics offload-status options")," command, including flags, descriptions, default values, and shorthands, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.7.1/reference-pulsar-admin#offload-status"},"here"),". ")))),(0,r.kt)("h2",{id:"tutorial"},"Tutorial"),(0,r.kt)("p",null,"This section provides step-by-step instructions on how to use the filesystem offloader to move data from Pulsar to Hadoop Distributed File System (HDFS) or Network File system (NFS)."),(0,r.kt)(l.Z,{defaultValue:"HDFS",values:[{label:"HDFS",value:"HDFS"},{label:"NFS",value:"NFS"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"HDFS",mdxType:"TabItem"},(0,r.kt)("p",null,"To move data from Pulsar to HDFS, follow these steps."),(0,r.kt)("h3",{id:"step-1-prepare-the-hdfs-environment"},"Step 1: Prepare the HDFS environment"),(0,r.kt)("p",null,"This tutorial sets up a Hadoop single node cluster and uses Hadoop 3.2.1."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For details about how to set up a Hadoop single node cluster, see ",(0,r.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/SingleCluster.html"},"here"),".")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download and uncompress Hadoop 3.2.1. "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\nwget https://mirrors.bfsu.edu.cn/apache/hadoop/common/hadoop-3.2.1/hadoop-3.2.1.tar.gz  \n\ntar -zxvf hadoop-3.2.1.tar.gz -C $HADOOP_HOME\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure Hadoop."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\n# $HADOOP_HOME/etc/hadoop/core-site.xml\n<configuration>\n    <property>\n        <name>fs.defaultFS</name>\n        <value>hdfs://localhost:9000</value>\n    </property>\n</configuration>\n\n# $HADOOP_HOME/etc/hadoop/hdfs-site.xml\n<configuration>\n    <property>\n        <name>dfs.replication</name>\n        <value>1</value>\n    </property>\n</configuration>\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set passphraseless ssh."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\n# Now check that you can ssh to the localhost without a passphrase:\n$ ssh localhost\n# If you cannot ssh to localhost without a passphrase, execute the following commands\n$ ssh-keygen -t rsa -P '' -f ~/.ssh/id_rsa\n$ cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys\n$ chmod 0600 ~/.ssh/authorized_keys\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start HDFS."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\n# don't execute this command repeatedly, repeat execute will cauld the clusterId of the datanode is not consistent with namenode\n$HADOOP_HOME/bin/hadoop namenode -format\n$HADOOP_HOME/sbin/start-dfs.sh\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to the ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:9870/"},"HDFS website"),"."),(0,r.kt)("p",{parentName:"li"},"You can see the ",(0,r.kt)("strong",{parentName:"p"},"Overview")," page."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(80563).Z,width:"2396",height:"1668"})),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"At the top navigation bar, click ",(0,r.kt)("strong",{parentName:"p"},"Datanodes")," to check DataNode information."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(7579).Z,width:"2452",height:"1638"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"HTTP Address")," to get more detailed information about localhost:9866."),(0,r.kt)("p",{parentName:"li"},"As can be seen below, the size of ",(0,r.kt)("strong",{parentName:"p"},"Capacity Used")," is 4 KB, which is the initial value."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(35583).Z,width:"2392",height:"1504"})))))),(0,r.kt)("h3",{id:"step-2-install-the-filesystem-offloader"},"Step 2: Install the filesystem offloader"),(0,r.kt)("p",null,"For details, see ",(0,r.kt)("a",{parentName:"p",href:"#installation"},"installation"),"."),(0,r.kt)("h3",{id:"step-3-configure-the-filesystem-offloader"},"Step 3: Configure the filesystem offloader"),(0,r.kt)("p",null,"As indicated in the ",(0,r.kt)("a",{parentName:"p",href:"#configuration"},"configuration")," section, you need to configure some properties for the filesystem offloader driver before using it. This tutorial assumes that you have configured the filesystem offloader driver as below and run Pulsar in ",(0,r.kt)("strong",{parentName:"p"},"standalone")," mode."),(0,r.kt)("p",null,"Set the following configurations in the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/standalone.conf")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"\nmanagedLedgerOffloadDriver=filesystem\nfileSystemURI=hdfs://127.0.0.1:9000\nfileSystemProfilePath=conf/filesystem_offload_core_site.xml\n\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For testing purposes, you can set the following two configurations to speed up ledger rollover, but it is not recommended that you set them in the production environment.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nmanagedLedgerMinLedgerRolloverTimeMinutes=1\nmanagedLedgerMaxEntriesPerLedger=100\n\n"))),(0,r.kt)(o.Z,{value:"NFS",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In this section, it is assumed that you have enabled NFS service and set the shared path of your NFS service. In this section, ",(0,r.kt)("inlineCode",{parentName:"p"},"/Users/test")," is used as the shared path of NFS service.")),(0,r.kt)("p",null,"To offload data to NFS, follow these steps."),(0,r.kt)("h3",{id:"step-1-install-the-filesystem-offloader"},"Step 1: Install the filesystem offloader"),(0,r.kt)("p",null,"For details, see ",(0,r.kt)("a",{parentName:"p",href:"#installation"},"installation"),"."),(0,r.kt)("h3",{id:"step-2-mont-your-nfs-to-your-local-filesystem"},"Step 2: Mont your NFS to your local filesystem"),(0,r.kt)("p",null,"This example mounts mounts ",(0,r.kt)("em",{parentName:"p"},"/Users/pulsar_nfs")," to ",(0,r.kt)("em",{parentName:"p"},"/Users/test"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nmount -e 192.168.0.103:/Users/test/Users/pulsar_nfs\n\n")),(0,r.kt)("h3",{id:"step-3-configure-the-filesystem-offloader-driver"},"Step 3: Configure the filesystem offloader driver"),(0,r.kt)("p",null,"As indicated in the ",(0,r.kt)("a",{parentName:"p",href:"#configuration"},"configuration")," section, you need to configure some properties for the filesystem offloader driver before using it. This tutorial assumes that you have configured the filesystem offloader driver as below and run Pulsar in ",(0,r.kt)("strong",{parentName:"p"},"standalone")," mode."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the following configurations in the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/standalone.conf")," file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"\nmanagedLedgerOffloadDriver=filesystem\nfileSystemProfilePath=conf/filesystem_offload_core_site.xml\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify the ",(0,r.kt)("em",{parentName:"p"},"filesystem_offload_core_site.xml")," as follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\n<property>\n    <name>fs.defaultFS</name>\n    <value>file:///</value>\n</property>\n\n<property>\n    <name>hadoop.tmp.dir</name>\n    <value>file:///Users/pulsar_nfs</value>\n</property>\n\n<property>\n    <name>io.file.buffer.size</name>\n    <value>4096</value>\n</property>\n\n<property>\n    <name>io.seqfile.compress.blocksize</name>\n    <value>1000000</value>\n</property>\n<property>\n\n    <name>io.seqfile.compression.type</name>\n    <value>BLOCK</value>\n</property>\n\n<property>\n    <name>io.map.index.interval</name>\n    <value>128</value>\n</property>\n\n")))))),(0,r.kt)("h3",{id:"step-4-offload-data-from-bookkeeper-to-filesystem"},"Step 4: Offload data from BookKeeper to filesystem"),(0,r.kt)("p",null,"Execute the following commands in the repository where you download Pulsar tarball. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"~/path/to/apache-pulsar-2.5.1"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start Pulsar standalone."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\nbin/pulsar standalone -a 127.0.0.1\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To ensure the data generated is not deleted immediately, it is recommended to set the ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/en/next/cookbooks-retention-expiry/#retention-policies"},"retention policy"),", which can be either a ",(0,r.kt)("strong",{parentName:"p"},"size")," limit or a ",(0,r.kt)("strong",{parentName:"p"},"time")," limit. The larger value you set for the retention policy, the longer the data can be retained."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\nbin/pulsar-admin namespaces set-retention public/default --size 100M --time 2d\n\n")),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsarctl namespaces set-retention options")," command, including flags, descriptions, default values, and shorthands, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.streamnative.io/pulsarctl/v2.7.0.6/#-em-set-retention-em-"},"here"),". "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Produce data using pulsar-client."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'\nbin/pulsar-client produce -m "Hello FileSystem Offloader" -n 1000 public/default/fs-test\n\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The offloading operation starts after a ledger rollover is triggered. To ensure offload data successfully, it is recommended that you wait until several ledger rollovers are triggered. In this case, you might need to wait for a second. You can check the ledger status using pulsarctl."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\nbin/pulsar-admin topics stats-internal public/default/fs-test\n\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("p",{parentName:"li"},"The data of the ledger 696 is not offloaded."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'\n{\n"version": 1,\n"creationDate": "2020-06-16T21:46:25.807+08:00",\n"modificationDate": "2020-06-16T21:46:25.821+08:00",\n"ledgers": [\n{\n    "ledgerId": 696,\n    "isOffloaded": false\n}\n],\n"cursors": {}\n}\n\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Wait a second and send more messages to the topic."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'\nbin/pulsar-client produce -m "Hello FileSystem Offloader" -n 1000 public/default/fs-test\n\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the ledger status using pulsarctl."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\nbin/pulsar-admin topics stats-internal public/default/fs-test\n\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("p",{parentName:"li"},"The ledger 696 is rolled over."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'\n{\n"version": 2,\n"creationDate": "2020-06-16T21:46:25.807+08:00",\n"modificationDate": "2020-06-16T21:48:52.288+08:00",\n"ledgers": [\n{\n    "ledgerId": 696,\n    "entries": 1001,\n    "size": 81695,\n    "isOffloaded": false\n},\n{\n    "ledgerId": 697,\n    "isOffloaded": false\n}\n],\n"cursors": {}\n}\n\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Trigger the offloading operation manually using pulsarctl."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\nbin/pulsar-admin topics offload -s 0 public/default/fs-test\n\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("p",{parentName:"li"},"Data in ledgers before the ledge 697 is offloaded."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\n# offload info, the ledgers before 697 will be offloaded\nOffload triggered for persistent://public/default/fs-test3 for messages before 697:0:-1\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the ledger status using pulsarctl."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\nbin/pulsar-admin topics stats-internal public/default/fs-test\n\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("p",{parentName:"li"},"The data of the ledger 696 is offloaded."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'\n{\n"version": 4,\n"creationDate": "2020-06-16T21:46:25.807+08:00",\n"modificationDate": "2020-06-16T21:52:13.25+08:00",\n"ledgers": [\n{\n    "ledgerId": 696,\n    "entries": 1001,\n    "size": 81695,\n    "isOffloaded": true\n},\n{\n    "ledgerId": 697,\n    "isOffloaded": false\n}\n],\n"cursors": {}\n}\n\n')),(0,r.kt)("p",{parentName:"li"},"And the ",(0,r.kt)("strong",{parentName:"p"},"Capacity Used")," is changed from 4 KB to 116.46 KB."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(95435).Z,width:"2422",height:"1498"})))))}f.isMDXComponent=!0},80563:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/FileSystem-1-8fba41a03bedc3e2d89a0fccf0b80f0f.png"},7579:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/FileSystem-2-e35ac7fd0ad15579667dde0f831eaa02.png"},35583:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/FileSystem-3-0c94a33a238a8753b06d8e9e99fc31fc.png"},95435:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/FileSystem-8-679ffa9ebb34e9242170e98af24d67d6.png"}}]);