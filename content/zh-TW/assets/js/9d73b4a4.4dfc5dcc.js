"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5125],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57911:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"io-jdbc-sink",title:"JDBC sink connector",sidebar_label:"JDBC sink connector",original_id:"io-jdbc-sink"},s=void 0,p={unversionedId:"io-jdbc-sink",id:"version-2.9.1/io-jdbc-sink",title:"JDBC sink connector",description:"The JDBC sink connectors allow pulling messages from Pulsar topics and persists the messages to ClickHouse, MariaDB, PostgreSQL, and SQLite.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-2.9.1/io-jdbc-sink.md",sourceDirName:".",slug:"/io-jdbc-sink",permalink:"/zh-TW/docs/io-jdbc-sink",editUrl:"https://github.com/apache/pulsar/edit/master/site2/versioned_docs/version-2.9.1/io-jdbc-sink.md",tags:[],version:"2.9.1",frontMatter:{id:"io-jdbc-sink",title:"JDBC sink connector",sidebar_label:"JDBC sink connector",original_id:"io-jdbc-sink"}},c={},d=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example for ClickHouse",id:"example-for-clickhouse",level:3},{value:"Example for MariaDB",id:"example-for-mariadb",level:3},{value:"Example for PostgreSQL",id:"example-for-postgresql",level:3},{value:"Example for SQLite",id:"example-for-sqlite",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The JDBC sink connectors allow pulling messages from Pulsar topics and persists the messages to ClickHouse, MariaDB, PostgreSQL, and SQLite."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Currently, INSERT, DELETE and UPDATE operations are supported.")),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"The configuration of all JDBC sink connectors has the following properties."),(0,l.kt)("h3",{id:"property"},"Property"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"userName")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.kt)("td",{parentName:"tr",align:null},"The username used to connect to the database specified by ",(0,l.kt)("inlineCode",{parentName:"td"},"jdbcUrl"),".",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Note: ",(0,l.kt)("inlineCode",{parentName:"strong"},"userName")," is case-sensitive."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"password")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.kt)("td",{parentName:"tr",align:null},"The password used to connect to the database specified by ",(0,l.kt)("inlineCode",{parentName:"td"},"jdbcUrl"),". ",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Note: ",(0,l.kt)("inlineCode",{parentName:"strong"},"password")," is case-sensitive."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"jdbcUrl")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.kt)("td",{parentName:"tr",align:null},"The JDBC URL of the database to which the connector connects.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tableName")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the table to which the connector writes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"nonKey")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.kt)("td",{parentName:"tr",align:null},"A comma-separated list contains the fields used in updating events.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"key")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.kt)("td",{parentName:"tr",align:null},"A comma-separated list contains the fields used in ",(0,l.kt)("inlineCode",{parentName:"td"},"where")," condition of updating and deleting events.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timeoutMs")),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"500"),(0,l.kt)("td",{parentName:"tr",align:null},"The JDBC operation timeout in milliseconds.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"batchSize")),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"The batch size of updates made to the database.")))),(0,l.kt)("h3",{id:"example-for-clickhouse"},"Example for ClickHouse"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"JSON"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n    "userName": "clickhouse",\n    "password": "password",\n    "jdbcUrl": "jdbc:clickhouse://localhost:8123/pulsar_clickhouse_jdbc_sink",\n    "tableName": "pulsar_clickhouse_jdbc_sink"\n}\n\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"YAML"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'\ntenant: "public"\nnamespace: "default"\nname: "jdbc-clickhouse-sink"\ntopicName: "persistent://public/default/jdbc-clickhouse-topic"\nsinkType: "jdbc-clickhouse"    \nconfigs:\n    userName: "clickhouse"\n    password: "password"\n    jdbcUrl: "jdbc:clickhouse://localhost:8123/pulsar_clickhouse_jdbc_sink"\n    tableName: "pulsar_clickhouse_jdbc_sink"\n\n')))),(0,l.kt)("h3",{id:"example-for-mariadb"},"Example for MariaDB"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"JSON"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n    "userName": "mariadb",\n    "password": "password",\n    "jdbcUrl": "jdbc:mariadb://localhost:3306/pulsar_mariadb_jdbc_sink",\n    "tableName": "pulsar_mariadb_jdbc_sink"\n}\n\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"YAML"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'\ntenant: "public"\nnamespace: "default"\nname: "jdbc-mariadb-sink"\ntopicName: "persistent://public/default/jdbc-mariadb-topic"\nsinkType: "jdbc-mariadb"    \nconfigs:\n    userName: "mariadb"\n    password: "password"\n    jdbcUrl: "jdbc:mariadb://localhost:3306/pulsar_mariadb_jdbc_sink"\n    tableName: "pulsar_mariadb_jdbc_sink"\n\n')))),(0,l.kt)("h3",{id:"example-for-postgresql"},"Example for PostgreSQL"),(0,l.kt)("p",null,"Before using the JDBC PostgreSQL sink connector, you need to create a configuration file through one of the following methods."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"JSON"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n    "userName": "postgres",\n    "password": "password",\n    "jdbcUrl": "jdbc:postgresql://localhost:5432/pulsar_postgres_jdbc_sink",\n    "tableName": "pulsar_postgres_jdbc_sink"\n}\n\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"YAML"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'\ntenant: "public"\nnamespace: "default"\nname: "jdbc-postgres-sink"\ntopicName: "persistent://public/default/jdbc-postgres-topic"\nsinkType: "jdbc-postgres"    \nconfigs:\n    userName: "postgres"\n    password: "password"\n    jdbcUrl: "jdbc:postgresql://localhost:5432/pulsar_postgres_jdbc_sink"\n    tableName: "pulsar_postgres_jdbc_sink"\n\n')))),(0,l.kt)("p",null,"For more information on ",(0,l.kt)("strong",{parentName:"p"},"how to use this JDBC sink connector"),", see ",(0,l.kt)("a",{parentName:"p",href:"/zh-TW/docs/io-quickstart#connect-pulsar-to-postgresql"},"connect Pulsar to PostgreSQL"),"."),(0,l.kt)("h3",{id:"example-for-sqlite"},"Example for SQLite"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"JSON"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n    "jdbcUrl": "jdbc:sqlite:db.sqlite",\n    "tableName": "pulsar_sqlite_jdbc_sink"\n}\n\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"YAML"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'\ntenant: "public"\nnamespace: "default"\nname: "jdbc-sqlite-sink"\ntopicName: "persistent://public/default/jdbc-sqlite-topic"\nsinkType: "jdbc-sqlite"    \nconfigs:\n    jdbcUrl: "jdbc:sqlite:db.sqlite"\n    tableName: "pulsar_sqlite_jdbc_sink"\n\n')))))}m.isMDXComponent=!0}}]);