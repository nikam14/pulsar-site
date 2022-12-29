"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[2553],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=o,d=p["".concat(l,".").concat(u)]||p[u]||h[u]||n;return a?r.createElement(d,i(i({ref:t},m),{},{components:a})):r.createElement(d,i({ref:t},m))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},13230:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(87462),o=(a(67294),a(3905));const n={id:"develop-schema",title:"Custom schema storage",sidebar_label:"Custom schema storage",original_id:"develop-schema"},i=void 0,s={unversionedId:"develop-schema",id:"version-2.7.1/develop-schema",title:"Custom schema storage",description:"By default, Pulsar stores data type schemas in Apache BookKeeper (which is deployed alongside Pulsar). You can, however, use another storage system if you wish. This doc walks you through creating your own schema storage implementation.",source:"@site/versioned_docs/version-2.7.1/develop-schema.md",sourceDirName:".",slug:"/develop-schema",permalink:"/docs/2.7.1/develop-schema",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/develop-schema.md",tags:[],version:"2.7.1",frontMatter:{id:"develop-schema",title:"Custom schema storage",sidebar_label:"Custom schema storage",original_id:"develop-schema"},sidebar:"version-2.7.1/docsSidebar",previous:{title:"Binary protocol",permalink:"/docs/2.7.1/developing-binary-protocol"},next:{title:"Modular load manager",permalink:"/docs/2.7.1/develop-load-manager"}},l={},c=[{value:"SchemaStorage interface",id:"schemastorage-interface",level:2},{value:"SchemaStorageFactory interface",id:"schemastoragefactory-interface",level:2},{value:"Deployment",id:"deployment",level:2}],m={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, Pulsar stores data type ",(0,o.kt)("a",{parentName:"p",href:"concepts-schema-registry.md"},"schemas")," in ",(0,o.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org"},"Apache BookKeeper")," (which is deployed alongside Pulsar). You can, however, use another storage system if you wish. This doc walks you through creating your own schema storage implementation."),(0,o.kt)("p",null,"In order to use a non-default (i.e. non-BookKeeper) storage system for Pulsar schemas, you need to implement two Java interfaces: ",(0,o.kt)("a",{parentName:"p",href:"#schemastorage-interface"},(0,o.kt)("inlineCode",{parentName:"a"},"SchemaStorage"))," and ",(0,o.kt)("a",{parentName:"p",href:"#schemastoragefactory-interface"},(0,o.kt)("inlineCode",{parentName:"a"},"SchemaStorageFactory")),"."),(0,o.kt)("h2",{id:"schemastorage-interface"},"SchemaStorage interface"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"SchemaStorage")," interface has the following methods:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\npublic interface SchemaStorage {\n    // How schemas are updated\n    CompletableFuture<SchemaVersion> put(String key, byte[] value, byte[] hash);\n\n    // How schemas are fetched from storage\n    CompletableFuture<StoredSchema> get(String key, SchemaVersion version);\n\n    // How schemas are deleted\n    CompletableFuture<SchemaVersion> delete(String key);\n\n    // Utility method for converting a schema version byte array to a SchemaVersion object\n    SchemaVersion versionFromBytes(byte[] version);\n\n    // Startup behavior for the schema storage client\n    void start() throws Exception;\n\n    // Shutdown behavior for the schema storage client\n    void close() throws Exception;\n}\n\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For a full-fledged example schema storage implementation, see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker/src/main/java/org/apache/pulsar/broker/service/schema/BookkeeperSchemaStorage.java"},(0,o.kt)("inlineCode",{parentName:"a"},"BookKeeperSchemaStorage"))," class.")),(0,o.kt)("h2",{id:"schemastoragefactory-interface"},"SchemaStorageFactory interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\npublic interface SchemaStorageFactory {\n    @NotNull\n    SchemaStorage create(PulsarService pulsar) throws Exception;\n}\n\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For a full-fledged example schema storage factory implementation, see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker/src/main/java/org/apache/pulsar/broker/service/schema/BookkeeperSchemaStorageFactory.java"},(0,o.kt)("inlineCode",{parentName:"a"},"BookKeeperSchemaStorageFactory"))," class.")),(0,o.kt)("h2",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"In order to use your custom schema storage implementation, you'll need to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Package the implementation in a ",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/deployment/jar/basicsindex.html"},"JAR")," file."),(0,o.kt)("li",{parentName:"ol"},"Add that jar to the ",(0,o.kt)("inlineCode",{parentName:"li"},"lib")," folder in your Pulsar ",(0,o.kt)("a",{parentName:"li",href:"/docs/2.7.1/getting-started-standalone#installing-pulsar"},"binary or source distribution"),"."),(0,o.kt)("li",{parentName:"ol"},"Change the ",(0,o.kt)("inlineCode",{parentName:"li"},"schemaRegistryStorageClassName")," configuration in ",(0,o.kt)("a",{parentName:"li",href:"/docs/2.7.1/reference-configuration#broker"},(0,o.kt)("inlineCode",{parentName:"a"},"broker.conf"))," to your custom factory class (i.e. the ",(0,o.kt)("inlineCode",{parentName:"li"},"SchemaStorageFactory")," implementation, not the ",(0,o.kt)("inlineCode",{parentName:"li"},"SchemaStorage")," implementation)."),(0,o.kt)("li",{parentName:"ol"},"Start up Pulsar.")))}p.isMDXComponent=!0}}]);