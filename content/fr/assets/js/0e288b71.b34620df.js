"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[59014],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return b}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),l=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(r),b=n,d=m["".concat(u,".").concat(b)]||m[b]||p[b]||o;return r?a.createElement(d,c(c({ref:t},s),{},{components:r})):a.createElement(d,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},310:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),c=["components"],i={id:"io-cdc",title:"CDC connector",sidebar_label:"CDC connector"},u=void 0,l={unversionedId:"io-cdc",id:"io-cdc",title:"CDC connector",description:"CDC source connectors capture log changes of databases (such as MySQL, MongoDB, and PostgreSQL) into Pulsar.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/io-cdc.md",sourceDirName:".",slug:"/io-cdc",permalink:"/fr/docs/next/io-cdc",editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/io-cdc.md",tags:[],version:"current",frontMatter:{id:"io-cdc",title:"CDC connector",sidebar_label:"CDC connector"},sidebar:"docsSidebar",previous:{title:"Built-in connector",permalink:"/fr/docs/next/io-connectors"},next:{title:"Develop",permalink:"/fr/docs/next/io-develop"}},s={},p=[],m={toc:p};function b(e){var t=e.components,r=(0,n.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"CDC source connectors capture log changes of databases (such as MySQL, MongoDB, and PostgreSQL) into Pulsar."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"CDC source connectors are built on top of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/canal"},"Canal")," and ",(0,o.kt)("a",{parentName:"p",href:"https://debezium.io/"},"Debezium")," and store all data into Pulsar cluster in a persistent, replicated, and partitioned way.")),(0,o.kt)("p",null,"Currently, Pulsar has the following CDC connectors."),(0,o.kt)("p",null,"Name|Java Class |---|--- ",(0,o.kt)("a",{parentName:"p",href:"io-canal-source"},"Canal source connector"),"|",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/canal/src/main/java/org/apache/pulsar/io/canal/CanalStringSource.java"},"org.apache.pulsar.io.canal.CanalStringSource.java")," ",(0,o.kt)("a",{parentName:"p",href:"io-cdc-debezium"},"Debezium source connector"),"|",(0,o.kt)("li",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/debezium/core/src/main/java/org/apache/pulsar/io/debezium/DebeziumSource.java"},"org.apache.pulsar.io.debezium.DebeziumSource.java"),(0,o.kt)("br",null)),(0,o.kt)("li",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/debezium/mysql/src/main/java/org/apache/pulsar/io/debezium/mysql/DebeziumMysqlSource.java"},"org.apache.pulsar.io.debezium.mysql.DebeziumMysqlSource.java"),(0,o.kt)("br",null)),(0,o.kt)("li",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/debezium/postgres/src/main/java/org/apache/pulsar/io/debezium/postgres/DebeziumPostgresSource.java"},"org.apache.pulsar.io.debezium.postgres.DebeziumPostgresSource.java"))),(0,o.kt)("p",null,"For more information about Canal and Debezium, see the information below."),(0,o.kt)("p",null,"Subject | Reference |---|--- How to use Canal source connector with MySQL|",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/canal/wiki"},"Canal guide")," How does Canal work | ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/canal/wiki"},"Canal tutorial")," How to use Debezium source connector with MySQL | ",(0,o.kt)("a",{parentName:"p",href:"https://debezium.io/docs/connectors/mysql/"},"Debezium guide")," How does Debezium work | ",(0,o.kt)("a",{parentName:"p",href:"https://debezium.io/docs/tutorial/"},"Debezium tutorial")))}b.isMDXComponent=!0}}]);