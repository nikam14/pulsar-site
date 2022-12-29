"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5867],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,m=p["".concat(u,".").concat(d)]||p[d]||h[d]||r;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={id:"security-oauth2",title:"Client authentication using OAuth 2.0 access tokens",sidebar_label:"Authentication using OAuth 2.0 access tokens",original_id:"security-oauth2"},l=void 0,o={unversionedId:"security-oauth2",id:"version-2.7.0/security-oauth2",title:"Client authentication using OAuth 2.0 access tokens",description:'Pulsar supports authenticating clients using OAuth 2.0 access tokens. You can use OAuth 2.0 access tokens to identify a Pulsar client and associate the Pulsar client with some "principal" (or "role"), which is permitted to do some actions, such as publishing messages to a topic or consume messages from a topic.',source:"@site/versioned_docs/version-2.7.0/security-oauth2.md",sourceDirName:".",slug:"/security-oauth2",permalink:"/docs/2.7.0/security-oauth2",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/security-oauth2.md",tags:[],version:"2.7.0",frontMatter:{id:"security-oauth2",title:"Client authentication using OAuth 2.0 access tokens",sidebar_label:"Authentication using OAuth 2.0 access tokens",original_id:"security-oauth2"},sidebar:"version-2.7.0/docsSidebar",previous:{title:"Authentication using Kerberos",permalink:"/docs/2.7.0/security-kerberos"},next:{title:"Authentication using HTTP basic",permalink:"/docs/2.7.0/security-basic-auth"}},u={},s=[{value:"Authentication provider configuration",id:"authentication-provider-configuration",level:2},{value:"Authentication types",id:"authentication-types",level:3},{value:"Note",id:"note",level:4},{value:"Client credentials",id:"client-credentials",level:4},{value:"Typical original OAuth2 request mapping",id:"typical-original-oauth2-request-mapping",level:3},{value:"Client Configuration",id:"client-configuration",level:2},{value:"Java",id:"java",level:3},{value:"C++ client",id:"c-client",level:3},{value:"Go client",id:"go-client",level:3},{value:"Python client",id:"python-client",level:3},{value:"CLI configuration",id:"cli-configuration",level:2},{value:"pulsar-admin",id:"pulsar-admin",level:3},{value:"pulsar-client",id:"pulsar-client",level:3},{value:"pulsar-perf",id:"pulsar-perf",level:3}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Pulsar supports authenticating clients using OAuth 2.0 access tokens. You can use OAuth 2.0 access tokens to identify a Pulsar client and associate the Pulsar client with some "principal" (or "role"), which is permitted to do some actions, such as publishing messages to a topic or consume messages from a topic.'),(0,i.kt)("p",null,"This module is used to support the Pulsar client authentication plugin for OAuth 2.0. After communicating with the Oauth 2.0 server, the Pulsar client gets an ",(0,i.kt)("inlineCode",{parentName:"p"},"access token")," from the Oauth 2.0 server, and passes this ",(0,i.kt)("inlineCode",{parentName:"p"},"access token")," to the Pulsar broker to do the authentication. The broker can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.broker.authentication.AuthenticationProviderToken"),". Or, you can add your own ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthenticationProvider")," to make it with this module."),(0,i.kt)("h2",{id:"authentication-provider-configuration"},"Authentication provider configuration"),(0,i.kt)("p",null,"This library allows you to authenticate the Pulsar client by using an access token that is obtained from an OAuth 2.0 authorization service, which acts as a ",(0,i.kt)("em",{parentName:"p"},"token issuer"),"."),(0,i.kt)("h3",{id:"authentication-types"},"Authentication types"),(0,i.kt)("p",null,"The authentication type determines how to obtain an access token through an OAuth 2.0 authorization flow."),(0,i.kt)("h4",{id:"note"},"Note"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Currently, the Pulsar Java client only supports the ",(0,i.kt)("inlineCode",{parentName:"p"},"client_credentials")," authentication type.")),(0,i.kt)("h4",{id:"client-credentials"},"Client credentials"),(0,i.kt)("p",null,"The following table lists parameters supported for the ",(0,i.kt)("inlineCode",{parentName:"p"},"client credentials")," authentication type."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"),(0,i.kt)("th",{parentName:"tr",align:null},"Required or not"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:null},"Oauth 2.0 authentication type."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"client_credentials")," (default)"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"issuerUrl")),(0,i.kt)("td",{parentName:"tr",align:null},"URL of the authentication provider which allows the Pulsar client to obtain an access token"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://accounts.google.com")),(0,i.kt)("td",{parentName:"tr",align:null},"Required")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"privateKey")),(0,i.kt)("td",{parentName:"tr",align:null},"URL to a JSON credentials file"),(0,i.kt)("td",{parentName:"tr",align:null},"Support the following pattern formats: ",(0,i.kt)("br",null)," ",(0,i.kt)("li",null," ",(0,i.kt)("inlineCode",{parentName:"td"},"file:///path/to/file")," "),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"file:/path/to/file")," "),(0,i.kt)("li",null," ",(0,i.kt)("inlineCode",{parentName:"td"},"data:application/json;base64,<base64-encoded value>")," ")),(0,i.kt)("td",{parentName:"tr",align:null},"Required")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"audience")),(0,i.kt)("td",{parentName:"tr",align:null},'An OAuth 2.0 "resource server" identifier for the Pulsar cluster'),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://broker.example.com")),(0,i.kt)("td",{parentName:"tr",align:null},"Required")))),(0,i.kt)("p",null,"The credentials file contains service account credentials used with the client authentication type. The following shows an example of a credentials file ",(0,i.kt)("inlineCode",{parentName:"p"},"credentials_file.json"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "type": "client_credentials",\n  "client_id": "d9ZyX97q1ef8Cr81WHVC4hFQ64vSlDK3",\n  "client_secret": "on1uJ...k6F6R",\n  "client_email": "1234567890-abcdefghijklmnopqrstuvwxyz@developer.gserviceaccount.com",\n  "issuer_url": "https://accounts.google.com"\n}\n\n')),(0,i.kt)("p",null,"In the above example, the authentication type is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"client_credentials"),' by default. And the fields "client_id" and "client_secret" are required.'),(0,i.kt)("h3",{id:"typical-original-oauth2-request-mapping"},"Typical original OAuth2 request mapping"),(0,i.kt)("p",null,"The following shows a typical original OAuth2 request, which is used to obtain the access token from the OAuth2 server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\ncurl --request POST \\\n  --url https://dev-kt-aa9ne.us.auth0.com/oauth/token \\\n  --header \'content-type: application/json\' \\\n  --data \'{\n  "client_id":"Xd23RHsUnvUlP7wchjNYOaIfazgeHd9x",\n  "client_secret":"rT7ps7WY8uhdVuBTKWZkttwLdQotmdEliaM5rLfmgNibvqziZ-g07ZH52N_poGAb",\n  "audience":"https://dev-kt-aa9ne.us.auth0.com/api/v2/",\n  "grant_type":"client_credentials"}\'\n\n')),(0,i.kt)("p",null,"In the above example, the mapping relationship is shown as below."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"issuerUrl")," parameter in this plugin is mapped to ",(0,i.kt)("inlineCode",{parentName:"li"},"--url https://dev-kt-aa9ne.us.auth0.com"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"privateKey")," file parameter in this plugin should at least contains the ",(0,i.kt)("inlineCode",{parentName:"li"},"client_id")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"client_secret")," fields."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"audience")," parameter in this plugin is mapped to  ",(0,i.kt)("inlineCode",{parentName:"li"},'"audience":"https://dev-kt-aa9ne.us.auth0.com/api/v2/"'),".")),(0,i.kt)("h2",{id:"client-configuration"},"Client Configuration"),(0,i.kt)("p",null,"You can use the OAuth2 authentication provider with the following Pulsar clients."),(0,i.kt)("h3",{id:"java"},"Java"),(0,i.kt)("p",null,"You can use the factory method to configure authentication for Pulsar Java client."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nimport org.apache.pulsar.client.impl.auth.oauth2.AuthenticationFactoryOAuth2; \n\nString issuerUrl = "https://dev-kt-aa9ne.us.auth0.com";\nString credentialsUrl = "file:///path/to/KeyFile.json";\nString audience = "https://dev-kt-aa9ne.us.auth0.com/api/v2/";\n\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://broker.example.com:6650/")\n    .authentication(\n        AuthenticationFactoryOAuth2.clientCredentials(issuerUrl, credentialsUrl, audience))\n    .build();\n\n')),(0,i.kt)("p",null,"In addition, you can also use the encoded parameters to configure authentication for Pulsar Java client."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nAuthentication auth = AuthenticationFactory\n    .create(AuthenticationOAuth2.class.getName(), "{"type":"client_credentials","privateKey":"./key/path/..","issuerUrl":"...","audience":"..."}");\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://broker.example.com:6650/")\n    .authentication(auth)\n    .build();\n\n')),(0,i.kt)("h3",{id:"c-client"},"C++ client"),(0,i.kt)("p",null,"The C++ client is similar to the Java client. You need to provide parameters of ",(0,i.kt)("inlineCode",{parentName:"p"},"issuerUrl"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"private_key")," (the credentials file path), and the audience."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},'\n#include <pulsar/Client.h>\n\npulsar::ClientConfiguration config;\nstd::string params = R"({\n    "issuer_url": "https://dev-kt-aa9ne.us.auth0.com",\n    "private_key": "../../pulsar-broker/src/test/resources/authentication/token/cpp_credentials_file.json",\n    "audience": "https://dev-kt-aa9ne.us.auth0.com/api/v2/"})";\n    \nconfig.setAuth(pulsar::AuthOauth2::create(params));\n\npulsar::Client client("pulsar://broker.example.com:6650/", config);\n\n')),(0,i.kt)("h3",{id:"go-client"},"Go client"),(0,i.kt)("p",null,"To enable OAuth2 authentication in Go client, you need to configure OAuth2 authentication.\nThis example shows how to configure OAuth2 authentication in Go client. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'\noauth := pulsar.NewAuthenticationOAuth2(map[string]string{\n        "type":       "client_credentials",\n        "issuerUrl":  "https://dev-kt-aa9ne.us.auth0.com",\n        "audience":   "https://dev-kt-aa9ne.us.auth0.com/api/v2/",\n        "privateKey": "/path/to/privateKey",\n        "clientId":   "0Xx...Yyxeny",\n    })\nclient, err := pulsar.NewClient(pulsar.ClientOptions{\n        URL:              "pulsar://my-cluster:6650",\n        Authentication:   oauth,\n})\n\n')),(0,i.kt)("h3",{id:"python-client"},"Python client"),(0,i.kt)("p",null,"To enable OAuth2 authentication in Python client, you need to configure OAuth2 authentication.\nThis example shows how to configure OAuth2 authentication in Python client."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'\nfrom pulsar import Client, AuthenticationOauth2\n\nparams = \'\'\'\n{\n    "issuer_url": "https://dev-kt-aa9ne.us.auth0.com",\n    "private_key": "/path/to/privateKey",\n    "audience": "https://dev-kt-aa9ne.us.auth0.com/api/v2/"\n}\n\'\'\'\n\nclient = Client("pulsar://my-cluster:6650", authentication=AuthenticationOauth2(params))\n\n')),(0,i.kt)("h2",{id:"cli-configuration"},"CLI configuration"),(0,i.kt)("p",null,"This section describes how to use Pulsar CLI tools to connect a cluster through OAuth2 authentication plugin."),(0,i.kt)("h3",{id:"pulsar-admin"},"pulsar-admin"),(0,i.kt)("p",null,"This example shows how to use pulsar-admin to connect to a cluster through OAuth2 authentication plugin."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'\nbin/pulsar-admin --admin-url https://streamnative.cloud:443 \\\n--auth-plugin org.apache.pulsar.client.impl.auth.oauth2.AuthenticationOAuth2 \\\n--auth-params \'{"privateKey":"file:///path/to/key/file.json",\n    "issuerUrl":"https://dev-kt-aa9ne.us.auth0.com",\n    "audience":"https://dev-kt-aa9ne.us.auth0.com/api/v2/"}\' \\\ntenants list\n\n')),(0,i.kt)("p",null,"Set the ",(0,i.kt)("inlineCode",{parentName:"p"},"admin-url")," parameter to the Web service URL. A Web service URLis a combination of the protocol, hostname and port ID, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"pulsar://localhost:6650"),".\nSet the ",(0,i.kt)("inlineCode",{parentName:"p"},"privateKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"issuerUrl"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"audience")," parameters to the values based on the configuration in the key file. For details, see ",(0,i.kt)("a",{parentName:"p",href:"#authentication-types"},"authentication types"),"."),(0,i.kt)("h3",{id:"pulsar-client"},"pulsar-client"),(0,i.kt)("p",null,"This example shows how to use pulsar-client to connect to a cluster through OAuth2 authentication plugin."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'\nbin/pulsar-client \\\n--url SERVICE_URL \\\n--auth-plugin org.apache.pulsar.client.impl.auth.oauth2.AuthenticationOAuth2 \\\n--auth-params \'{"privateKey":"file:///path/to/key/file.json",\n    "issuerUrl":"https://dev-kt-aa9ne.us.auth0.com",\n    "audience":"https://dev-kt-aa9ne.us.auth0.com/api/v2/"}\' \\\nproduce test-topic -m "test-message" -n 10\n\n')),(0,i.kt)("p",null,"Set the ",(0,i.kt)("inlineCode",{parentName:"p"},"admin-url")," parameter to the Web service URL. A Web service URLis a combination of the protocol, hostname and port ID, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"pulsar://localhost:6650"),".\nSet the ",(0,i.kt)("inlineCode",{parentName:"p"},"privateKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"issuerUrl"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"audience")," parameters to the values based on the configuration in the key file. For details, see ",(0,i.kt)("a",{parentName:"p",href:"#authentication-types"},"authentication types"),"."),(0,i.kt)("h3",{id:"pulsar-perf"},"pulsar-perf"),(0,i.kt)("p",null,"This example shows how to use pulsar-perf to connect to a cluster through OAuth2 authentication plugin."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'\nbin/pulsar-perf produce --service-url pulsar+ssl://streamnative.cloud:6651 \\\n--auth_plugin org.apache.pulsar.client.impl.auth.oauth2.AuthenticationOAuth2 \\\n--auth-params \'{"privateKey":"file:///path/to/key/file.json",\n    "issuerUrl":"https://dev-kt-aa9ne.us.auth0.com",\n    "audience":"https://dev-kt-aa9ne.us.auth0.com/api/v2/"}\' \\\n-r 1000 -s 1024 test-topic\n\n')),(0,i.kt)("p",null,"Set the ",(0,i.kt)("inlineCode",{parentName:"p"},"admin-url")," parameter to the Web service URL. A Web service URLis a combination of the protocol, hostname and port ID, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"pulsar://localhost:6650"),".\nSet the ",(0,i.kt)("inlineCode",{parentName:"p"},"privateKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"issuerUrl"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"audience")," parameters to the values based on the configuration in the key file. For details, see ",(0,i.kt)("a",{parentName:"p",href:"#authentication-types"},"authentication types"),"."))}p.isMDXComponent=!0}}]);