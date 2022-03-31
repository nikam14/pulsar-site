"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[18391],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72394:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"io-redis-sink",title:"Redis sink connector",sidebar_label:"Redis sink connector"},s=void 0,p={unversionedId:"io-redis-sink",id:"io-redis-sink",title:"Redis sink connector",description:"The  Redis sink connector pulls messages from Pulsar topics and persists the messages to a Redis database.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/io-redis-sink.md",sourceDirName:".",slug:"/io-redis-sink",permalink:"/zh-TW/docs/next/io-redis-sink",editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/io-redis-sink.md",tags:[],version:"current",frontMatter:{id:"io-redis-sink",title:"Redis sink connector",sidebar_label:"Redis sink connector"}},d={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3},{value:"Usage",id:"usage",level:3}],m={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The  Redis sink connector pulls messages from Pulsar topics and persists the messages to a Redis database."),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"The configuration of the Redis sink connector has the following properties."),(0,l.kt)("h3",{id:"property"},"Property"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"redisHosts")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.kt)("td",{parentName:"tr",align:null},"A comma-separated list of Redis hosts to connect to.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"redisPassword")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.kt)("td",{parentName:"tr",align:null},"The password used to connect to Redis.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"redisDatabase")),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"The Redis database to connect to.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"clientMode")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Standalone"),(0,l.kt)("td",{parentName:"tr",align:null},"The client mode when interacting with Redis cluster. ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Below are the available options: ",(0,l.kt)("br",null),(0,l.kt)("li",null,"Standalone",(0,l.kt)("br",null)),(0,l.kt)("li",null,"Cluster "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"autoReconnect")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the Redis client automatically reconnect or not.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"requestQueue")),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"2147483647"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum number of queued requests to Redis.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tcpNoDelay")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to enable TCP with no delay or not.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keepAlive")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to enable a keepalive to Redis or not.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"connectTimeout")),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"10000"),(0,l.kt)("td",{parentName:"tr",align:null},"The time to wait before timing out when connecting in milliseconds.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"operationTimeout")),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"10000"),(0,l.kt)("td",{parentName:"tr",align:null},"The time before an operation is marked as timed out in milliseconds .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"batchTimeMs")),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"The Redis operation time in milliseconds.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"batchSize")),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"The batch size of writing to Redis database.")))),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("p",null,"Before using the Redis sink connector, you need to create a configuration file in the path you will start Pulsar service (i.e. ",(0,l.kt)("inlineCode",{parentName:"p"},"PULSAR_HOME"),") through one of the following methods."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"JSON"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n   "configs": {\n      "redisHosts": "localhost:6379",\n      "redisPassword": "mypassword",\n      "redisDatabase": "0",\n      "clientMode": "Standalone",\n      "operationTimeout": "2000",\n      "batchSize": "1",\n      "batchTimeMs": "1000",\n      "connectTimeout": "3000"\n   }\n}\n\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"YAML"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'\nconfigs:\n    redisHosts: "localhost:6379"\n    redisPassword: "mypassword"\n    redisDatabase: 0\n    clientMode: "Standalone"\n    operationTimeout: 2000\n    batchSize: 1\n    batchTimeMs: 1000\n    connectTimeout: 3000\n\n')))),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("p",null,"This example shows how to write records to a Redis database using the Pulsar Redis connector."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Start a Redis server."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ docker pull redis:5.0.5\n$ docker run -d -p 6379:6379 --name my-redis redis:5.0.5 --requirepass "mypassword"\n\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Start a Pulsar service locally in standalone mode."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar standalone\n\n")),(0,l.kt)("p",{parentName:"li"},"Make sure the NAR file is available at ",(0,l.kt)("inlineCode",{parentName:"p"},"connectors/pulsar-io-redis-@pulsar:version@.nar"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Start the Pulsar Redis connector in local run mode using one of the following methods."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use the ",(0,l.kt)("strong",{parentName:"p"},"JSON")," configuration file as shown previously."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ bin/pulsar-admin sinks localrun \\\n--archive connectors/pulsar-io-redis-@pulsar:version@.nar \\\n--tenant public \\\n--namespace default \\\n--name my-redis-sink \\\n--sink-config \'{"redisHosts": "localhost:6379","redisPassword": "mypassword","redisDatabase": "0","clientMode": "Standalone","operationTimeout": "3000","batchSize": "1"}\' \\\n--inputs my-redis-topic\n\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use the ",(0,l.kt)("strong",{parentName:"p"},"YAML")," configuration file as shown previously."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin sinks localrun \\\n--archive connectors/pulsar-io-redis-@pulsar:version@.nar \\\n--tenant public \\\n--namespace default \\\n--name my-redis-sink \\\n--sink-config-file redis-sink-config.yaml \\\n--inputs my-redis-topic\n\n"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Publish records to the topic."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ bin/pulsar-client produce \\\n    persistent://public/default/my-redis-topic \\\n    -k "streaming" \\\n    -m "Pulsar"\n\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Start a Redis client in Docker."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ docker exec -it my-redis redis-cli -a "mypassword"\n\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Check the key/value in Redis."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'\n127.0.0.1:6379> keys *\n1) "streaming"\n127.0.0.1:6379> get "streaming"\n"Pulsar"\n\n')))))}c.isMDXComponent=!0}}]);