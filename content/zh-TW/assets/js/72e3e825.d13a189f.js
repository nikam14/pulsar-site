"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[31901],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),f=o,k=m["".concat(u,".").concat(f)]||m[f]||s[f]||a;return t?r.createElement(k,i(i({ref:n},c),{},{components:t})):r.createElement(k,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},31003:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={id:"io-flume-sink",title:"Flume sink connector",sidebar_label:"Flume sink connector",original_id:"io-flume-sink"},u=void 0,p={unversionedId:"io-flume-sink",id:"version-2.9.1/io-flume-sink",title:"Flume sink connector",description:"The Flume sink connector pulls messages from Pulsar topics to logs.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-2.9.1/io-flume-sink.md",sourceDirName:".",slug:"/io-flume-sink",permalink:"/zh-TW/docs/io-flume-sink",editUrl:"https://github.com/apache/pulsar/edit/master/site2/versioned_docs/version-2.9.1/io-flume-sink.md",tags:[],version:"2.9.1",frontMatter:{id:"io-flume-sink",title:"Flume sink connector",sidebar_label:"Flume sink connector",original_id:"io-flume-sink"}},c={},s=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3}],m={toc:s};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Flume sink connector pulls messages from Pulsar topics to logs."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The configuration of the Flume sink connector has the following properties."),(0,a.kt)("h3",{id:"property"},"Property"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"name"),'|String|true|"" (empty string)|The name of the agent. ',(0,a.kt)("inlineCode",{parentName:"p"},"confFile"),'|String|true|"" (empty string)|The configuration file. ',(0,a.kt)("inlineCode",{parentName:"p"},"noReloadConf"),"|Boolean|false|false|Whether to reload configuration file if changed. ",(0,a.kt)("inlineCode",{parentName:"p"},"zkConnString"),'|String|true|"" (empty string)|The ZooKeeper connection. ',(0,a.kt)("inlineCode",{parentName:"p"},"zkBasePath"),'|String|true|"" (empty string)|The base path in ZooKeeper for agent configuration.'),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"Before using the Flume sink connector, you need to create a configuration file through one of the following methods."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For more information about the ",(0,a.kt)("inlineCode",{parentName:"p"},"sink.conf")," in the example below, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/flume/src/main/resources/flume/sink.conf"},"here"),".")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"JSON"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n    "name": "a1",\n    "confFile": "sink.conf",\n    "noReloadConf": "false",\n    "zkConnString": "",\n    "zkBasePath": ""\n}\n\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"YAML"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'\nconfigs:\n    name: a1\n    confFile: sink.conf\n    noReloadConf: false\n    zkConnString: ""\n    zkBasePath: ""\n\n')))))}f.isMDXComponent=!0}}]);