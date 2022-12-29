"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[7213],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>y});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,y=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return t?a.createElement(y,o(o({ref:n},d),{},{components:t})):a.createElement(y,o({ref:n},d))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2202:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=t(87462),r=(t(67294),t(3905));const l={id:"sql-getting-started",title:"Query data with Pulsar SQL",sidebar_label:"Query data",original_id:"sql-getting-started"},o=void 0,i={unversionedId:"sql-getting-started",id:"version-2.7.0/sql-getting-started",title:"Query data with Pulsar SQL",description:"Before querying data in Pulsar, you need to install Pulsar and built-in connectors.",source:"@site/versioned_docs/version-2.7.0/sql-getting-started.md",sourceDirName:".",slug:"/sql-getting-started",permalink:"/docs/2.7.0/sql-getting-started",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/sql-getting-started.md",tags:[],version:"2.7.0",frontMatter:{id:"sql-getting-started",title:"Query data with Pulsar SQL",sidebar_label:"Query data",original_id:"sql-getting-started"},sidebar:"version-2.7.0/docsSidebar",previous:{title:"Overview",permalink:"/docs/2.7.0/sql-overview"},next:{title:"Configuration and deployment",permalink:"/docs/2.7.0/sql-deployment-configurations"}},s={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Query data in Pulsar",id:"query-data-in-pulsar",level:2},{value:"Query your own data",id:"query-your-own-data",level:2}],d={toc:u};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Before querying data in Pulsar, you need to install Pulsar and built-in connectors. "),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.7.0/getting-started-standalone#install-pulsar-standalone"},"Pulsar"),"."),(0,r.kt)("li",{parentName:"ol"},"Install Pulsar ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.7.0/getting-started-standalone#install-builtin-connectors-optional"},"built-in connectors"),".")),(0,r.kt)("h2",{id:"query-data-in-pulsar"},"Query data in Pulsar"),(0,r.kt)("p",null,"To query data in Pulsar with Pulsar SQL, complete the following steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start a Pulsar standalone cluster.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n./bin/pulsar standalone\n\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Start a Pulsar SQL worker.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n./bin/pulsar sql-worker run\n\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"After initializing Pulsar standalone cluster and the SQL worker, run SQL CLI.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n./bin/pulsar sql\n\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Test with SQL commands.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\npresto> show catalogs;\n Catalog \n---------\n pulsar  \n system  \n(2 rows)\n\nQuery 20180829_211752_00004_7qpwh, FINISHED, 1 node\nSplits: 19 total, 19 done (100.00%)\n0:00 [0 rows, 0B] [0 rows/s, 0B/s]\n\n\npresto> show schemas in pulsar;\n        Schema         \n-----------------------\n information_schema    \n public/default        \n public/functions      \n sample/standalone/ns1 \n(4 rows)\n\nQuery 20180829_211818_00005_7qpwh, FINISHED, 1 node\nSplits: 19 total, 19 done (100.00%)\n0:00 [4 rows, 89B] [21 rows/s, 471B/s]\n\n\npresto> show tables in pulsar."public/default";\n Table \n-------\n(0 rows)\n\nQuery 20180829_211839_00006_7qpwh, FINISHED, 1 node\nSplits: 19 total, 19 done (100.00%)\n0:00 [0 rows, 0B] [0 rows/s, 0B/s]\n\n')),(0,r.kt)("p",null,"Since there is no data in Pulsar, no records is returned. "),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Start the built-in connector ",(0,r.kt)("em",{parentName:"li"},"DataGeneratorSource")," and ingest some mock data.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n./bin/pulsar-admin sources create --name generator --destinationTopicName generator_test --source-type data-generator\n\n")),(0,r.kt)("p",null,'And then you can query a topic in the namespace "public/default".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\npresto> show tables in pulsar."public/default";\n     Table      \n----------------\n generator_test \n(1 row)\n\nQuery 20180829_213202_00000_csyeu, FINISHED, 1 node\nSplits: 19 total, 19 done (100.00%)\n0:02 [1 rows, 38B] [0 rows/s, 17B/s]\n\n')),(0,r.kt)("p",null,'You can now query the data within the topic "generator_test".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\npresto> select * from pulsar."public/default".generator_test;\n\n  firstname  | middlename  |  lastname   |              email               |   username   | password | telephonenumber | age |                 companyemail                  | nationalidentitycardnumber | \n-------------+-------------+-------------+----------------------------------+--------------+----------+-----------------+-----+-----------------------------------------------+----------------------------+\n Genesis     | Katherine   | Wiley       | genesis.wiley@gmail.com          | genesisw     | y9D2dtU3 | 959-197-1860    |  71 | genesis.wiley@interdemconsulting.eu           | 880-58-9247                |   \n Brayden     |             | Stanton     | brayden.stanton@yahoo.com        | braydens     | ZnjmhXik | 220-027-867     |  81 | brayden.stanton@supermemo.eu                  | 604-60-7069                |   \n Benjamin    | Julian      | Velasquez   | benjamin.velasquez@yahoo.com     | benjaminv    | 8Bc7m3eb | 298-377-0062    |  21 | benjamin.velasquez@hostesltd.biz              | 213-32-5882                |   \n Michael     | Thomas      | Donovan     | donovan@mail.com                 | michaeld     | OqBm9MLs | 078-134-4685    |  55 | michael.donovan@memortech.eu                  | 443-30-3442                |   \n Brooklyn    | Avery       | Roach       | brooklynroach@yahoo.com          | broach       | IxtBLafO | 387-786-2998    |  68 | brooklyn.roach@warst.biz                      | 085-88-3973                |   \n Skylar      |             | Bradshaw    | skylarbradshaw@yahoo.com         | skylarb      | p6eC6cKy | 210-872-608     |  96 | skylar.bradshaw@flyhigh.eu                    | 453-46-0334                |    \n.\n.\n.\n\n')),(0,r.kt)("p",null,"You can query the mock data."),(0,r.kt)("h2",{id:"query-your-own-data"},"Query your own data"),(0,r.kt)("p",null,"If you want to query your own data, you need to ingest your own data first. You can write a simple producer and write custom defined data to Pulsar. The following is an example. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\npublic class TestProducer {\n\n    public static class Foo {\n        private int field1 = 1;\n        private String field2;\n        private long field3;\n\n        public Foo() {\n        }\n\n        public int getField1() {\n            return field1;\n        }\n\n        public void setField1(int field1) {\n            this.field1 = field1;\n        }\n\n        public String getField2() {\n            return field2;\n        }\n\n        public void setField2(String field2) {\n            this.field2 = field2;\n        }\n\n        public long getField3() {\n            return field3;\n        }\n\n        public void setField3(long field3) {\n            this.field3 = field3;\n        }\n    }\n\n    public static void main(String[] args) throws Exception {\n        PulsarClient pulsarClient = PulsarClient.builder().serviceUrl("pulsar://localhost:6650").build();\n        Producer<Foo> producer = pulsarClient.newProducer(AvroSchema.of(Foo.class)).topic("test_topic").create();\n\n        for (int i = 0; i < 1000; i++) {\n            Foo foo = new Foo();\n            foo.setField1(i);\n            foo.setField2("foo" + i);\n            foo.setField3(System.currentTimeMillis());\n            producer.newMessage().value(foo).send();\n        }\n        producer.close();\n        pulsarClient.close();\n    }\n}\n\n')))}c.isMDXComponent=!0}}]);