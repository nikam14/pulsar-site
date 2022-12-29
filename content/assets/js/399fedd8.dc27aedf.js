"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[188],{3905:(n,t,e)=>{e.d(t,{Zo:()=>p,kt:()=>g});var a=e(67294);function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function l(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?l(Object(e),!0).forEach((function(t){i(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function r(n,t){if(null==n)return{};var e,a,i=function(n,t){if(null==n)return{};var e,a,i={},l=Object.keys(n);for(a=0;a<l.length;a++)e=l[a],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)e=l[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var u=a.createContext({}),s=function(n){var t=a.useContext(u),e=t;return n&&(e="function"==typeof n?n(t):o(o({},t),n)),e},p=function(n){var t=s(n.components);return a.createElement(u.Provider,{value:t},n.children)},c="mdxType",m={inlineCode:"code",wrapper:function(n){var t=n.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(n,t){var e=n.components,i=n.mdxType,l=n.originalType,u=n.parentName,p=r(n,["components","mdxType","originalType","parentName"]),c=s(e),d=i,g=c["".concat(u,".").concat(d)]||c[d]||m[d]||l;return e?a.createElement(g,o(o({ref:t},p),{},{components:e})):a.createElement(g,o({ref:t},p))}));function g(n,t){var e=arguments,i=t&&t.mdxType;if("string"==typeof n||i){var l=e.length,o=new Array(l);o[0]=d;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=n,r[c]="string"==typeof n?n:i,o[1]=r;for(var s=2;s<l;s++)o[s]=e[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,e)}d.displayName="MDXCreateElement"},80355:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var a=e(87462),i=(e(67294),e(3905));const l={id:"functions-debug",title:"Debug Pulsar Functions",sidebar_label:"How-to: Debug",original_id:"functions-debug"},o=void 0,r={unversionedId:"functions-debug",id:"version-2.6.2/functions-debug",title:"Debug Pulsar Functions",description:"You can use the following methods to debug Pulsar Functions:",source:"@site/versioned_docs/version-2.6.2/functions-debug.md",sourceDirName:".",slug:"/functions-debug",permalink:"/docs/2.6.2/functions-debug",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/functions-debug.md",tags:[],version:"2.6.2",frontMatter:{id:"functions-debug",title:"Debug Pulsar Functions",sidebar_label:"How-to: Debug",original_id:"functions-debug"},sidebar:"version-2.6.2/docsSidebar",previous:{title:"How-to: Develop",permalink:"/docs/2.6.2/functions-develop"},next:{title:"How-to: Deploy",permalink:"/docs/2.6.2/functions-deploy"}},u={},s=[{value:"Captured stderr",id:"captured-stderr",level:2},{value:"Use unit test",id:"use-unit-test",level:2},{value:"Debug with localrun mode",id:"debug-with-localrun-mode",level:2},{value:"Use log topic",id:"use-log-topic",level:2},{value:"Use Functions CLI",id:"use-functions-cli",level:2},{value:"<code>get</code>",id:"get",level:3},{value:"<code>status</code>",id:"status",level:3},{value:"<code>stats</code>",id:"stats",level:3},{value:"<code>list</code>",id:"list",level:3},{value:"<code>trigger</code>",id:"trigger",level:3}],p={toc:s};function c(n){let{components:t,...l}=n;return(0,i.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can use the following methods to debug Pulsar Functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.6.2/functions-debug#captured-stderr"},"Captured stderr")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.6.2/functions-debug#use-unit-test"},"Use unit test")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.6.2/functions-debug#debug-with-localrun-mode"},"Debug with localrun mode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.6.2/functions-debug#use-log-topic"},"Use log topic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.6.2/functions-debug#use-functions-cli"},"Use Functions CLI"))),(0,i.kt)("h2",{id:"captured-stderr"},"Captured stderr"),(0,i.kt)("p",null,"Function startup information and captured stderr output is written to ",(0,i.kt)("inlineCode",{parentName:"p"},"logs/functions/<tenant>/<namespace>/<function>/<function>-<instance>.log")),(0,i.kt)("p",null,"This is useful for debugging why a function fails to start."),(0,i.kt)("h2",{id:"use-unit-test"},"Use unit test"),(0,i.kt)("p",null,"A Pulsar Function is a function with inputs and outputs, you can test a Pulsar Function in a similar way as you test any function."),(0,i.kt)("p",null,"For example, if you have the following Pulsar Function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nimport java.util.function.Function;\n\npublic class JavaNativeExclamationFunction implements Function<String, String> {\n   @Override\n   public String apply(String input) {\n       return String.format("%s!", input);\n   }\n}\n\n')),(0,i.kt)("p",null,"You can write a simple unit test to test Pulsar Function."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Pulsar uses testng for testing.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\n@Test\npublic void testJavaNativeExclamationFunction() {\n   JavaNativeExclamationFunction exclamation = new JavaNativeExclamationFunction();\n   String output = exclamation.apply("foo");\n   Assert.assertEquals(output, "foo!");\n}\n\n')),(0,i.kt)("p",null,"The following Pulsar Function implements the ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.functions.api.Function")," interface."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nimport org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\n\npublic class ExclamationFunction implements Function<String, String> {\n   @Override\n   public String process(String input, Context context) {\n       return String.format("%s!", input);\n   }\n}\n\n')),(0,i.kt)("p",null,"In this situation, you can write a unit test for this function as well. Remember to mock the ",(0,i.kt)("inlineCode",{parentName:"p"},"Context")," parameter. The following is an example."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Pulsar uses testng for testing.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\n@Test\npublic void testExclamationFunction() {\n   ExclamationFunction exclamation = new ExclamationFunction();\n   String output = exclamation.process("foo", mock(Context.class));\n   Assert.assertEquals(output, "foo!");\n}\n\n')),(0,i.kt)("h2",{id:"debug-with-localrun-mode"},"Debug with localrun mode"),(0,i.kt)("p",null,"When you run a Pulsar Function in localrun mode, it launches an instance of the Function on your local machine as a thread."),(0,i.kt)("p",null,"In this mode, a Pulsar Function consumes and produces actual data to a Pulsar cluster, and mirrors how the function actually runs in a Pulsar cluster."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Currently, debugging with localrun mode is only supported by Pulsar Functions written in Java. You need Pulsar version 2.4.0 or later to do the following. Even though localrun is available in versions earlier than Pulsar 2.4.0, you cannot debug with localrun mode programmatically or run Functions as threads.")),(0,i.kt)("p",null,"You can launch your function in the following manner."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nFunctionConfig functionConfig = new FunctionConfig();\nfunctionConfig.setName(functionName);\nfunctionConfig.setInputs(Collections.singleton(sourceTopic));\nfunctionConfig.setClassName(ExclamationFunction.class.getName());\nfunctionConfig.setRuntime(FunctionConfig.Runtime.JAVA);\nfunctionConfig.setOutput(sinkTopic);\n\nLocalRunner localRunner = LocalRunner.builder().functionConfig(functionConfig).build();\nlocalRunner.start(true);\n\n")),(0,i.kt)("p",null,"So you can debug functions using an IDE easily. Set breakpoints and manually step through a function to debug with real data."),(0,i.kt)("p",null,"The following example illustrates how to programmatically launch a function in localrun mode."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\npublic class ExclamationFunction implements Function<String, String> {\n\n   @Override\n   public String process(String s, Context context) throws Exception {\n       return s + "!";\n   }\n\npublic static void main(String[] args) throws Exception {\n    FunctionConfig functionConfig = new FunctionConfig();\n    functionConfig.setName("exclamation");\n    functionConfig.setInputs(Collections.singleton("input"));\n    functionConfig.setClassName(ExclamationFunction.class.getName());\n    functionConfig.setRuntime(FunctionConfig.Runtime.JAVA);\n    functionConfig.setOutput("output");\n\n    LocalRunner localRunner = LocalRunner.builder().functionConfig(functionConfig).build();\n    localRunner.start(false);\n}\n\n')),(0,i.kt)("p",null,"To use localrun mode programmatically, add the following dependency."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\n<dependency>\n   <groupId>org.apache.pulsar</groupId>\n   <artifactId>pulsar-functions-local-runner</artifactId>\n   <version>${pulsar.version}</version>\n</dependency>\n\n")),(0,i.kt)("p",null,"For complete code samples, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jerrypeng/pulsar-functions-demos/tree/master/debugging"},"here"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Debugging with localrun mode for Pulsar Functions written in other languages will be supported soon.")),(0,i.kt)("h2",{id:"use-log-topic"},"Use log topic"),(0,i.kt)("p",null,"In Pulsar Functions, you can generate log information defined in functions to a specified log topic. You can configure consumers to consume messages from a specified log topic to check the log information."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Pulsar Functions core programming model",src:e(51571).Z,width:"1712",height:"1049"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nimport org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\nimport org.slf4j.Logger;\n\npublic class LoggingFunction implements Function<String, Void> {\n    @Override\n    public void apply(String input, Context context) {\n        Logger LOG = context.getLogger();\n        String messageId = new String(context.getMessageId());\n\n        if (input.contains("danger")) {\n            LOG.warn("A warning was received in message {}", messageId);\n        } else {\n            LOG.info("Message {} received\\nContent: {}", messageId, input);\n        }\n\n        return null;\n    }\n}\n\n')),(0,i.kt)("p",null,"As shown in the example above, you can get the logger via ",(0,i.kt)("inlineCode",{parentName:"p"},"context.getLogger()")," and assign the logger to the ",(0,i.kt)("inlineCode",{parentName:"p"},"LOG")," variable of ",(0,i.kt)("inlineCode",{parentName:"p"},"slf4j"),", so you can define your desired log information in a function using the ",(0,i.kt)("inlineCode",{parentName:"p"},"LOG")," variable. Meanwhile, you need to specify the topic to which the log information is produced."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions create \\\n  --log-topic persistent://public/default/logging-function-logs \\\n  # Other function configs\n\n")),(0,i.kt)("h2",{id:"use-functions-cli"},"Use Functions CLI"),(0,i.kt)("p",null,"With ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.2/reference-pulsar-admin#functions"},"Pulsar Functions CLI"),", you can debug Pulsar Functions with the following subcommands:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"get")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stats")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"list")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"trigger"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"For complete commands of ",(0,i.kt)("strong",{parentName:"p"},"Pulsar Functions CLI"),", see ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.2/reference-pulsar-admin#functions"},"here"),"\u3002")),(0,i.kt)("h3",{id:"get"},(0,i.kt)("inlineCode",{parentName:"h3"},"get")),(0,i.kt)("p",null,"Get information about a Pulsar Function."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ pulsar-admin functions get options\n\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Options")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Flag"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--fqfn")),(0,i.kt)("td",{parentName:"tr",align:null},"The Fully Qualified Function Name (FQFN) of a Pulsar Function.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--name")),(0,i.kt)("td",{parentName:"tr",align:null},"The name of a Pulsar Function.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--namespace")),(0,i.kt)("td",{parentName:"tr",align:null},"The namespace of a Pulsar Function.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--tenant")),(0,i.kt)("td",{parentName:"tr",align:null},"The tenant of a Pulsar Function.")))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"--fqfn")," consists of ",(0,i.kt)("inlineCode",{parentName:"p"},"--name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--namespace")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--tenant"),", so you can specify either ",(0,i.kt)("inlineCode",{parentName:"p"},"--fqfn")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"--name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--namespace")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--tenant"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")," "),(0,i.kt)("p",null,"You can specify ",(0,i.kt)("inlineCode",{parentName:"p"},"--fqfn")," to get information about a Pulsar Function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ ./bin/pulsar-admin functions get public/default/ExclamationFunctio6\n\n")),(0,i.kt)("p",null,"Optionally, you can specify ",(0,i.kt)("inlineCode",{parentName:"p"},"--name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--namespace")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--tenant")," to get information about a Pulsar Function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ ./bin/pulsar-admin functions get \\\n    --tenant public \\\n    --namespace default \\\n    --name ExclamationFunctio6\n\n")),(0,i.kt)("p",null,"As shown below, the ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," command shows input, output, runtime, and other information about the ",(0,i.kt)("em",{parentName:"p"},"ExclamationFunctio6")," function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "tenant": "public",\n  "namespace": "default",\n  "name": "ExclamationFunctio6",\n  "className": "org.example.test.ExclamationFunction",\n  "inputSpecs": {\n    "persistent://public/default/my-topic-1": {\n      "isRegexPattern": false\n    }\n  },\n  "output": "persistent://public/default/test-1",\n  "processingGuarantees": "ATLEAST_ONCE",\n  "retainOrdering": false,\n  "userConfig": {},\n  "runtime": "JAVA",\n  "autoAck": true,\n  "parallelism": 1\n}\n\n')),(0,i.kt)("h3",{id:"status"},(0,i.kt)("inlineCode",{parentName:"h3"},"status")),(0,i.kt)("p",null,"Check the current status of a Pulsar Function."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ pulsar-admin functions status options\n\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Options")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Flag"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--fqfn")),(0,i.kt)("td",{parentName:"tr",align:null},"The Fully Qualified Function Name (FQFN) of a Pulsar Function.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--instance-id")),(0,i.kt)("td",{parentName:"tr",align:null},"The instance ID of a Pulsar Function ",(0,i.kt)("br",null),"If the ",(0,i.kt)("inlineCode",{parentName:"td"},"--instance-id")," is not specified, it gets the IDs of all instances.",(0,i.kt)("br",null))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--name")),(0,i.kt)("td",{parentName:"tr",align:null},"The name of a Pulsar Function.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--namespace")),(0,i.kt)("td",{parentName:"tr",align:null},"The namespace of a Pulsar Function.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--tenant")),(0,i.kt)("td",{parentName:"tr",align:null},"The tenant of a Pulsar Function.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ ./bin/pulsar-admin functions status \\\n    --tenant public \\\n    --namespace default \\\n    --name ExclamationFunctio6 \\\n\n")),(0,i.kt)("p",null,"As shown below, the ",(0,i.kt)("inlineCode",{parentName:"p"},"status")," command shows the number of instances, running instances, the instance running under the ",(0,i.kt)("em",{parentName:"p"},"ExclamationFunctio6")," function, received messages, successfully processed messages, system exceptions, the average latency and so on."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "numInstances" : 1,\n  "numRunning" : 1,\n  "instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n      "running" : true,\n      "error" : "",\n      "numRestarts" : 0,\n      "numReceived" : 1,\n      "numSuccessfullyProcessed" : 1,\n      "numUserExceptions" : 0,\n      "latestUserExceptions" : [ ],\n      "numSystemExceptions" : 0,\n      "latestSystemExceptions" : [ ],\n      "averageLatency" : 0.8385,\n      "lastInvocationTime" : 1557734137987,\n      "workerId" : "c-standalone-fw-23ccc88ef29b-8080"\n    }\n  } ]\n}\n\n')),(0,i.kt)("h3",{id:"stats"},(0,i.kt)("inlineCode",{parentName:"h3"},"stats")),(0,i.kt)("p",null,"Get the current stats of a Pulsar Function."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ pulsar-admin functions stats options\n\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Options")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Flag"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--fqfn")),(0,i.kt)("td",{parentName:"tr",align:null},"The Fully Qualified Function Name (FQFN) of a Pulsar Function.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--instance-id")),(0,i.kt)("td",{parentName:"tr",align:null},"The instance ID of a Pulsar Function. ",(0,i.kt)("br",null),"If the ",(0,i.kt)("inlineCode",{parentName:"td"},"--instance-id")," is not specified, it gets the IDs of all instances.",(0,i.kt)("br",null))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--name")),(0,i.kt)("td",{parentName:"tr",align:null},"The name of a Pulsar Function.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--namespace")),(0,i.kt)("td",{parentName:"tr",align:null},"The namespace of a Pulsar Function.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--tenant")),(0,i.kt)("td",{parentName:"tr",align:null},"The tenant of a Pulsar Function.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ ./bin/pulsar-admin functions stats \\\n    --tenant public \\\n    --namespace default \\\n    --name ExclamationFunctio6 \\\n\n")),(0,i.kt)("p",null,"The output is shown as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "receivedTotal" : 1,\n  "processedSuccessfullyTotal" : 1,\n  "systemExceptionsTotal" : 0,\n  "userExceptionsTotal" : 0,\n  "avgProcessLatency" : 0.8385,\n  "1min" : {\n    "receivedTotal" : 0,\n    "processedSuccessfullyTotal" : 0,\n    "systemExceptionsTotal" : 0,\n    "userExceptionsTotal" : 0,\n    "avgProcessLatency" : null\n  },\n  "lastInvocation" : 1557734137987,\n  "instances" : [ {\n    "instanceId" : 0,\n    "metrics" : {\n      "receivedTotal" : 1,\n      "processedSuccessfullyTotal" : 1,\n      "systemExceptionsTotal" : 0,\n      "userExceptionsTotal" : 0,\n      "avgProcessLatency" : 0.8385,\n      "1min" : {\n        "receivedTotal" : 0,\n        "processedSuccessfullyTotal" : 0,\n        "systemExceptionsTotal" : 0,\n        "userExceptionsTotal" : 0,\n        "avgProcessLatency" : null\n      },\n      "lastInvocation" : 1557734137987,\n      "userMetrics" : { }\n    }\n  } ]\n}\n\n')),(0,i.kt)("h3",{id:"list"},(0,i.kt)("inlineCode",{parentName:"h3"},"list")),(0,i.kt)("p",null,"List all Pulsar Functions running under a specific tenant and namespace."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ pulsar-admin functions list options\n\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Options")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Flag"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--namespace")),(0,i.kt)("td",{parentName:"tr",align:null},"The namespace of a Pulsar Function.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--tenant")),(0,i.kt)("td",{parentName:"tr",align:null},"The tenant of a Pulsar Function.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ ./bin/pulsar-admin functions list \\\n    --tenant public \\\n    --namespace default\n\n")),(0,i.kt)("p",null,"As shown below, the ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," command returns three functions running under the ",(0,i.kt)("em",{parentName:"p"},"public")," tenant and the ",(0,i.kt)("em",{parentName:"p"},"default")," namespace."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\nExclamationFunctio1\nExclamationFunctio2\nExclamationFunctio3\n\n")),(0,i.kt)("h3",{id:"trigger"},(0,i.kt)("inlineCode",{parentName:"h3"},"trigger")),(0,i.kt)("p",null,"Trigger a specified Pulsar Function with a supplied value. This command simulates the execution process of a Pulsar Function and verifies it."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ pulsar-admin functions trigger options\n\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Options")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Flag"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--fqfn")),(0,i.kt)("td",{parentName:"tr",align:null},"The Fully Qualified Function Name (FQFN) of a Pulsar Function.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--name")),(0,i.kt)("td",{parentName:"tr",align:null},"The name of a Pulsar Function.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--namespace")),(0,i.kt)("td",{parentName:"tr",align:null},"The namespace of a Pulsar Function.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--tenant")),(0,i.kt)("td",{parentName:"tr",align:null},"The tenant of a Pulsar Function.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--topic")),(0,i.kt)("td",{parentName:"tr",align:null},"The topic name that a Pulsar Function consumes from.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--trigger-file")),(0,i.kt)("td",{parentName:"tr",align:null},"The path to a file that contains the data to trigger a Pulsar Function.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--trigger-value")),(0,i.kt)("td",{parentName:"tr",align:null},"The value to trigger a Pulsar Function.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ ./bin/pulsar-admin functions trigger \\\n    --tenant public \\\n    --namespace default \\\n    --name ExclamationFunctio6 \\\n    --topic persistent://public/default/my-topic-1 \\\n    --trigger-value "hello pulsar functions"\n\n')),(0,i.kt)("p",null,"As shown below, the ",(0,i.kt)("inlineCode",{parentName:"p"},"trigger")," command returns the following result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\nThis is my function!\n\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You must specify the ",(0,i.kt)("a",{parentName:"p",href:"getting-started-pulsar.md#topic-names"},"entire topic name")," when using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--topic")," option. Otherwise, the following error occurs."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\nFunction in trigger function has unidentified topic\nReason: Function in trigger function has unidentified topic\n\n"))))}c.isMDXComponent=!0},51571:(n,t,e)=>{e.d(t,{Z:()=>a});const a=e.p+"assets/images/pulsar-functions-overview-9d39ad7e0ec566e6ed2ee7cdf9717963.png"}}]);