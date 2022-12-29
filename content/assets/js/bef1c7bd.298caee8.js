"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8025],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>k});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return t?n.createElement(k,o(o({ref:a},u),{},{components:t})):n.createElement(k,o({ref:a},u))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},83495:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=t(87462),r=(t(67294),t(3905));const l={id:"standalone",title:"Setting up a local standalone cluster",sidebar_label:"Run Pulsar locally",original_id:"standalone"},o=void 0,i={unversionedId:"standalone",id:"version-2.3.1/standalone",title:"Setting up a local standalone cluster",description:"For the purposes of local development and testing, you can run Pulsar in standalone mode on your own machine. Standalone mode includes a Pulsar broker as well as the necessary ZooKeeper and BookKeeper components running inside of a single Java Virtual Machine (JVM) process.",source:"@site/versioned_docs/version-2.3.1/standalone.md",sourceDirName:".",slug:"/standalone",permalink:"/docs/2.3.1/standalone",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/standalone.md",tags:[],version:"2.3.1",frontMatter:{id:"standalone",title:"Setting up a local standalone cluster",sidebar_label:"Run Pulsar locally",original_id:"standalone"}},s={},p=[{value:"Run Pulsar Standalone Manually",id:"run-pulsar-standalone-manually",level:2},{value:"System requirements",id:"system-requirements",level:3},{value:"Installing Pulsar",id:"installing-pulsar",level:3},{value:"What your package contains",id:"what-your-package-contains",level:3},{value:"Installing Builtin Connectors (optional)",id:"installing-builtin-connectors-optional",level:3},{value:"Installing Tiered Storage Offloaders (optional)",id:"installing-tiered-storage-offloaders-optional",level:2},{value:"Starting the cluster",id:"starting-the-cluster",level:3},{value:"Run Pulsar Standalone in Docker",id:"run-pulsar-standalone-in-docker",level:2},{value:"Testing your cluster setup",id:"testing-your-cluster-setup",level:2},{value:"Using Pulsar clients locally",id:"using-pulsar-clients-locally",level:2}],u={toc:p};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For the purposes of local development and testing, you can run Pulsar in standalone mode on your own machine. Standalone mode includes a Pulsar broker as well as the necessary ZooKeeper and BookKeeper components running inside of a single Java Virtual Machine (JVM) process."),(0,r.kt)("blockquote",null,(0,r.kt)("h4",{parentName:"blockquote",id:"pulsar-in-production"},"Pulsar in production?"),(0,r.kt)("p",{parentName:"blockquote"},"If you're looking to run a full production Pulsar installation, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.1/deploy-bare-metal"},"Deploying a Pulsar instance")," guide.")),(0,r.kt)("h2",{id:"run-pulsar-standalone-manually"},"Run Pulsar Standalone Manually"),(0,r.kt)("h3",{id:"system-requirements"},"System requirements"),(0,r.kt)("p",null,"Currently, Pulsar is available for 64-bit ",(0,r.kt)("strong",{parentName:"p"},"macOS"),", ",(0,r.kt)("strong",{parentName:"p"},"Linux"),", and ",(0,r.kt)("strong",{parentName:"p"},"Windows"),". To use Pulsar, you need to install 64-bit JRE/JDK 8 or later versions."),(0,r.kt)("h3",{id:"installing-pulsar"},"Installing Pulsar"),(0,r.kt)("p",null,"To get started running Pulsar, download a binary tarball release in one of the following ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"by clicking the link below and downloading the release from an Apache mirror:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://archive.apache.org/dist/pulsar/pulsar-2.3.1/apache-pulsar-2.3.1-bin.tar.gz",download:!0},"Pulsar 2.3.1 binary release")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"from the Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/download"},"downloads page"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"from the Pulsar ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/releases/latest"},"releases page"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"using ",(0,r.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.3.1/apache-pulsar-2.3.1-bin.tar.gz\n\n")))),(0,r.kt)("p",null,"Once the tarball is downloaded, untar it and ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," into the resulting directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ tar xvfz apache-pulsar-2.3.1-bin.tar.gz\n$ cd apache-pulsar-2.3.1\n\n")),(0,r.kt)("h3",{id:"what-your-package-contains"},"What your package contains"),(0,r.kt)("p",null,"The Pulsar binary package initially contains the following directories:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Directory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Contains"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bin")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Pulsar's command-line tools, such as ",(0,r.kt)("a",{parentName:"td",href:"/docs/2.3.1/reference-cli-tools#pulsar"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar"))," and ",(0,r.kt)("a",{parentName:"td",href:"/docs/2.3.1/reference-pulsar-admin"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"conf")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Configuration files for Pulsar, including for ",(0,r.kt)("a",{parentName:"td",href:"/docs/2.3.1/reference-configuration#broker"},"broker configuration"),", ",(0,r.kt)("a",{parentName:"td",href:"/docs/2.3.1/reference-configuration#zookeeper"},"ZooKeeper configuration"),", and more")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"examples")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A Java JAR file containing example ",(0,r.kt)("a",{parentName:"td",href:"/docs/2.3.1/functions-overview"},"Pulsar Functions"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"lib")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ",(0,r.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/JAR_(file_format)"},"JAR")," files used by Pulsar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"licenses")),(0,r.kt)("td",{parentName:"tr",align:"left"},"License files, in ",(0,r.kt)("inlineCode",{parentName:"td"},".txt")," form, for various components of the Pulsar ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar"},"codebase"))))),(0,r.kt)("p",null,"These directories will be created once you begin running Pulsar:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Directory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Contains"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The data storage directory used by ZooKeeper and BookKeeper")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"instances")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Artifacts created for ",(0,r.kt)("a",{parentName:"td",href:"/docs/2.3.1/functions-overview"},"Pulsar Functions"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"logs")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Logs created by the installation")))),(0,r.kt)("h3",{id:"installing-builtin-connectors-optional"},"Installing Builtin Connectors (optional)"),(0,r.kt)("p",null,"Since release ",(0,r.kt)("inlineCode",{parentName:"p"},"2.1.0-incubating"),", Pulsar releases a separate binary distribution, containing all the ",(0,r.kt)("inlineCode",{parentName:"p"},"builtin")," connectors.\nIf you would like to enable those ",(0,r.kt)("inlineCode",{parentName:"p"},"builtin")," connectors, you can download the connectors tarball release in one of the following ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"by clicking the link below and downloading the release from an Apache mirror:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://archive.apache.org/dist/pulsar/pulsar-2.3.1/connectors",download:!0},"Pulsar IO Connectors 2.3.1 release")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"from the Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/download"},"downloads page"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"from the Pulsar ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/releases/latest"},"releases page"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"using ",(0,r.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.3.1/connectors/{connector}-2.3.1.nar\n\n")))),(0,r.kt)("p",null,"Once the nar file is downloaded, copy the file to directory ",(0,r.kt)("inlineCode",{parentName:"p"},"connectors")," in the pulsar directory,\nfor example, if the connector file ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-io-aerospike-2.3.1.nar")," is downloaded:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ mkdir connectors\n$ mv pulsar-io-aerospike-2.3.1.nar connectors\n\n$ ls connectors\npulsar-io-aerospike-2.3.1.nar\n...\n\n")),(0,r.kt)("blockquote",null,(0,r.kt)("h4",{parentName:"blockquote",id:"notes"},"NOTES"),(0,r.kt)("p",{parentName:"blockquote"},"If you are running Pulsar in a bare metal cluster, you need to make sure ",(0,r.kt)("inlineCode",{parentName:"p"},"connectors")," tarball is unzipped in every broker's pulsar directory\n(or in every function-worker's pulsar directory if you are running a separate worker cluster for Pulsar functions)."),(0,r.kt)("p",{parentName:"blockquote"},"If you are ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.1/getting-started-docker"},"running Pulsar in Docker")," or deploying Pulsar using a docker image (e.g. ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.1/deploy-kubernetes"},"K8S")," or ",(0,r.kt)("a",{parentName:"p",href:"https://dcos.io/"},"DC/OS"),"),\nyou can use ",(0,r.kt)("inlineCode",{parentName:"p"},"apachepulsar/pulsar-all")," image instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"apachepulsar/pulsar")," image. ",(0,r.kt)("inlineCode",{parentName:"p"},"apachepulsar/pulsar-all")," image has already bundled ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.1/io-overview#working-with-connectors"},"all builtin connectors"),".")),(0,r.kt)("h2",{id:"installing-tiered-storage-offloaders-optional"},"Installing Tiered Storage Offloaders (optional)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Since release ",(0,r.kt)("inlineCode",{parentName:"p"},"2.2.0"),", Pulsar releases a separate binary distribution, containing the tiered storage offloaders.\nIf you would like to enable tiered storage feature, you can follow the instructions as below; otherwise you can\nskip this section for now.")),(0,r.kt)("p",null,"To get started using ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.1/concepts-tiered-storage"},"tiered storage offloaders"),", you'll need to download the offloaders tarball release on every broker node in\none of the following ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"by clicking the link below and downloading the release from an Apache mirror:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://archive.apache.org/dist/pulsar/pulsar-2.3.1/apache-pulsar-offloaders-2.3.1-bin.tar.gz",download:!0},"Pulsar Tiered Storage Offloaders 2.3.1 release")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"from the Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/download"},"downloads page"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"from the Pulsar ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/releases/latest"},"releases page"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"using ",(0,r.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.3.1/apache-pulsar-offloaders-2.3.1-bin.tar.gz\n\n")))),(0,r.kt)("p",null,"Once the tarball is downloaded, in the pulsar directory, untar the offloaders package and copy the offloaders as ",(0,r.kt)("inlineCode",{parentName:"p"},"offloaders"),"\nin the pulsar directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ tar xvfz apache-pulsar-offloaders-2.3.1-bin.tar.gz\n\n// you will find a directory named `apache-pulsar-offloaders-2.3.1` in the pulsar directory\n// then copy the offloaders\n\n$ mv apache-pulsar-offloaders-2.3.1/offloaders offloaders\n\n$ ls offloaders\ntiered-storage-jcloud-2.3.1.nar\n\n")),(0,r.kt)("p",null,"For more details of how to configure tiered storage feature, you could reference this ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.1/cookbooks-tiered-storage"},"Tiered storage cookbook")),(0,r.kt)("blockquote",null,(0,r.kt)("h4",{parentName:"blockquote",id:"notes-1"},"NOTES"),(0,r.kt)("p",{parentName:"blockquote"},"If you are running Pulsar in a bare metal cluster, you need to make sure ",(0,r.kt)("inlineCode",{parentName:"p"},"offloaders")," tarball is unzipped in every broker's pulsar directory"),(0,r.kt)("p",{parentName:"blockquote"},"If you are ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.1/getting-started-docker"},"running Pulsar in Docker")," or deploying Pulsar using a docker image (e.g. ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.1/deploy-kubernetes"},"K8S")," or ",(0,r.kt)("a",{parentName:"p",href:"https://dcos.io/"},"DC/OS"),"),\nyou can use ",(0,r.kt)("inlineCode",{parentName:"p"},"apachepulsar/pulsar-all")," image instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"apachepulsar/pulsar")," image. ",(0,r.kt)("inlineCode",{parentName:"p"},"apachepulsar/pulsar-all")," image has already bundled tiered storage offloaders.")),(0,r.kt)("h3",{id:"starting-the-cluster"},"Starting the cluster"),(0,r.kt)("p",null,"Once you have an up-to-date local copy of the release, you can start up a local cluster using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.1/reference-cli-tools#pulsar"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar"))," command, which is stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"bin")," directory, and specifying that you want to start up Pulsar in standalone mode:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar standalone\n\n")),(0,r.kt)("p",null,"If Pulsar has been successfully started, you should see ",(0,r.kt)("inlineCode",{parentName:"p"},"INFO"),"-level log messages like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n2017-06-01 14:46:29,192 - INFO  - [main:WebSocketService@95] - Configuration Store cache started\n2017-06-01 14:46:29,192 - INFO  - [main:AuthenticationService@61] - Authentication is disabled\n2017-06-01 14:46:29,192 - INFO  - [main:WebSocketService@108] - Pulsar WebSocket Service started\n\n")),(0,r.kt)("blockquote",null,(0,r.kt)("h4",{parentName:"blockquote",id:"automatically-created-namespace"},"Automatically created namespace"),(0,r.kt)("p",{parentName:"blockquote"},"When you start a local standalone cluster, Pulsar will automatically create a ",(0,r.kt)("inlineCode",{parentName:"p"},"public/default")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.1/concepts-messaging#namespaces"},"namespace")," that you can use for development purposes. All Pulsar topics are managed within namespaces. For more info, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.1/concepts-messaging#topics"},"Topics"),".")),(0,r.kt)("h2",{id:"run-pulsar-standalone-in-docker"},"Run Pulsar Standalone in Docker"),(0,r.kt)("p",null,"Alternatively, you can run pulsar standalone locally in docker."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\ndocker run -it -p 80:80 -p 8080:8080 -p 6650:6650 apachepulsar/pulsar-standalone\n\n")),(0,r.kt)("p",null,"The command forwards following port to localhost:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"80: the port for pulsar dashboard"),(0,r.kt)("li",{parentName:"ul"},"8080: the http service url for pulsar service"),(0,r.kt)("li",{parentName:"ul"},"6650: the binary protocol service url for pulsar service")),(0,r.kt)("p",null,"After the docker container is running, you can access the dashboard under http://localhost ."),(0,r.kt)("h2",{id:"testing-your-cluster-setup"},"Testing your cluster setup"),(0,r.kt)("p",null,"Pulsar provides a CLI tool called ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.1/reference-cli-tools#pulsar-client"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-client"))," that enables you to do things like send messages to a Pulsar topic in a running cluster. This command will send a simple message saying ",(0,r.kt)("inlineCode",{parentName:"p"},"hello-pulsar")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"my-topic")," topic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ bin/pulsar-client produce my-topic --messages "hello-pulsar"\n\n')),(0,r.kt)("p",null,"If the message has been successfully published to the topic, you should see a confirmation like this in the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-client")," logs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n13:09:39.356 [main] INFO  org.apache.pulsar.client.cli.PulsarClientTool - 1 messages successfully produced\n\n")),(0,r.kt)("blockquote",null,(0,r.kt)("h4",{parentName:"blockquote",id:"no-need-to-explicitly-create-new-topics"},"No need to explicitly create new topics"),(0,r.kt)("p",{parentName:"blockquote"},"You may have noticed that we did not explicitly create the ",(0,r.kt)("inlineCode",{parentName:"p"},"my-topic")," topic to which we sent the ",(0,r.kt)("inlineCode",{parentName:"p"},"hello-pulsar")," message. If you attempt to write a message to a topic that does not yet exist, Pulsar will automatically create that topic for you.")),(0,r.kt)("h2",{id:"using-pulsar-clients-locally"},"Using Pulsar clients locally"),(0,r.kt)("p",null,"Pulsar currently offers client libraries for ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.1/client-libraries-java"},"Java"),",  ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.1/client-libraries-go"},"Go"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.1/client-libraries-python"},"Python")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.1/client-libraries-cpp"},"C++"),". If you're running a local standalone cluster, you can use one of these root URLs for interacting with your cluster:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:8080")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pulsar://localhost:6650"))),(0,r.kt)("p",null,"Here's an example producer for a Pulsar topic using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.1/client-libraries-java"},"Java")," client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nString localClusterUrl = "pulsar://localhost:6650";\n\nPulsarClient client = PulsarClient.builder().serviceUrl(localClusterUrl).build();\nProducer<byte[]> producer = client.newProducer().topic("my-topic").create();\n\n')),(0,r.kt)("p",null,"Here's an example ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.1/client-libraries-python"},"Python")," producer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nproducer = client.create_producer('my-topic')\n\n")),(0,r.kt)("p",null,"Finally, here's an example ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.1/client-libraries-cpp"},"C++")," producer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'\nClient client("pulsar://localhost:6650");\nProducer producer;\nResult result = client.createProducer("my-topic", producer);\nif (result != ResultOk) {\n    LOG_ERROR("Error creating producer: " << result);\n    return -1;\n}\n\n')))}c.isMDXComponent=!0}}]);