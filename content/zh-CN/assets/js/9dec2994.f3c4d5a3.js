"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[42679],{3905:function(e,a,n){n.d(a,{Zo:function(){return c},kt:function(){return d}});var t=n(67294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),u=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},c=function(e){var a=u(e.components);return t.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?t.createElement(f,i(i({ref:a},c),{},{components:n})):t.createElement(f,i({ref:a},c))}));function d(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(67294);function o(e){var a=e.children,n=e.hidden,o=e.className;return t.createElement("div",{role:"tabpanel",hidden:n,className:o},a)}},9877:function(e,a,n){n.d(a,{Z:function(){return c}});var t=n(87462),o=n(67294),r=n(72389),i=n(5979),l=n(86010),s="tabItem_LplD";function u(e){var a,n,r,u=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,k=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:k.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),v=(0,i.lx)(h,(function(e,a){return e.value===a.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(a=null!=p?p:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?a:null==(r=k[0])?void 0:r.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),y=g.tabGroupChoices,N=g.setTabGroupChoices,w=(0,o.useState)(b),P=w[0],T=w[1],I=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var C=y[d];null!=C&&C!==P&&h.some((function(e){return e.value===C}))&&T(C)}var E=function(e){var a=e.currentTarget,n=I.indexOf(a),t=h[n].value;t!==P&&(x(a),T(t),null!=d&&N(d,t))},O=function(e){var a,n=null;switch(e.key){case"ArrowRight":var t=I.indexOf(e.currentTarget)+1;n=I[t]||I[0];break;case"ArrowLeft":var o=I.indexOf(e.currentTarget)-1;n=I[o]||I[I.length-1]}null==(a=n)||a.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},h.map((function(e){var a=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,t.Z)({role:"tab",tabIndex:P===a?0:-1,"aria-selected":P===a,key:a,ref:function(e){return I.push(e)},onKeyDown:O,onFocus:E,onClick:E},r,{className:(0,l.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":P===a})}),null!=n?n:a)}))),u?(0,o.cloneElement)(k.filter((function(e){return e.props.value===P}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},k.map((function(e,a){return(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==P})}))))}function c(e){var a=(0,r.Z)();return o.createElement(u,(0,t.Z)({key:String(a)},e))}},69883:function(e,a,n){n.r(a),n.d(a,{assets:function(){return m},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var t=n(87462),o=n(63366),r=(n(67294),n(3905)),i=n(9877),l=n(58215),s=["components"],u={id:"administration-isolation",title:"Pulsar isolation",sidebar_label:"Pulsar isolation"},c=void 0,p={unversionedId:"administration-isolation",id:"administration-isolation",title:"Pulsar isolation",description:"In an organization, a Pulsar instance provides services to multiple teams. When organizing the resources across multiple teams, you want to make a suitable isolation plan to avoid the resource competition between different teams and applications and provide high-quality messaging service. In this case, you need to take resource isolation into consideration and weigh your intended actions against expected and unexpected consequences.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/administration-isolation.md",sourceDirName:".",slug:"/administration-isolation",permalink:"/zh-CN/docs/next/administration-isolation",editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/administration-isolation.md",tags:[],version:"current",frontMatter:{id:"administration-isolation",title:"Pulsar isolation",sidebar_label:"Pulsar isolation"},sidebar:"docsSidebar",previous:{title:"Upgrade",permalink:"/zh-CN/docs/next/administration-upgrade"},next:{title:"Overview",permalink:"/zh-CN/docs/next/security-overview"}},m={},d=[{value:"Broker isolation",id:"broker-isolation",level:2},{value:"Bookie isolation",id:"bookie-isolation",level:2}],f={toc:d};function k(e){var a=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,t.Z)({},f,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In an organization, a Pulsar instance provides services to multiple teams. When organizing the resources across multiple teams, you want to make a suitable isolation plan to avoid the resource competition between different teams and applications and provide high-quality messaging service. In this case, you need to take resource isolation into consideration and weigh your intended actions against expected and unexpected consequences."),(0,r.kt)("p",null,"To enforce resource isolation, you can use the Pulsar isolation policy, which allows you to allocate resources (",(0,r.kt)("strong",{parentName:"p"},"broker")," and ",(0,r.kt)("strong",{parentName:"p"},"bookie"),") for the namespace."),(0,r.kt)("h2",{id:"broker-isolation"},"Broker isolation"),(0,r.kt)("p",null,"In Pulsar, when namespaces (more specifically, namespace bundles) are assigned dynamically to brokers, the namespace isolation policy limits the set of brokers that can be used for assignment. Before topics are assigned to brokers, you can set the namespace isolation policy with a primary or a secondary regex to select desired brokers."),(0,r.kt)("p",null,"You can set a namespace isolation policy for a cluster using one of the following methods."),(0,r.kt)(i.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java admin API",value:"Java admin API"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\npulsar-admin ns-isolation-policy set options\n\n")),(0,r.kt)("p",null,"For more information about the command ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin ns-isolation-policy set options"),", see ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin ns-isolation-policy set \\\n--auto-failover-policy-type min_available \\\n--auto-failover-policy-params min_limit=1,usage_threshold=80 \\\n--namespaces my-tenant/my-namespace \\\n--primary 10.193.216.*  my-cluster policy-name\n\n"))),(0,r.kt)(l.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api/?version=master&apiversion=v2#operation/createNamespace"},"PUT /admin/v2/namespaces/{tenant}/{namespace}"))),(0,r.kt)(l.Z,{value:"Java admin API",mdxType:"TabItem"},(0,r.kt)("p",null,"For how to set namespace isolation policy using Java admin API, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin/src/main/java/org/apache/pulsar/client/admin/internal/NamespacesImpl.java#L251"},"here"),"."))),(0,r.kt)("h2",{id:"bookie-isolation"},"Bookie isolation"),(0,r.kt)("p",null,"A namespace can be isolated into user-defined groups of bookies, which guarantees all the data that belongs to the namespace is stored in desired bookies. The bookie affinity group uses the BookKeeper ",(0,r.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org/docs/latest/api/javadoc/org/apache/bookkeeper/client/EnsemblePlacementPolicy.html"},"rack-aware placement policy")," and it is a way to feed rack information which is stored as JSON format in znode.\nYou can set a bookie affinity group using one of the following methods."),(0,r.kt)(i.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java admin API",value:"Java admin API"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\npulsar-admin namespaces set-bookie-affinity-group options\n\n")),(0,r.kt)("p",null,"For more information about the command ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin namespaces set-bookie-affinity-group options"),", see ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin bookies set-bookie-rack \\\n--bookie 127.0.0.1:3181 \\\n--hostname 127.0.0.1:3181 \\\n--group group-bookie1 \\\n--rack rack1\n\nbin/pulsar-admin namespaces set-bookie-affinity-group public/default \\\n--primary-group group-bookie1\n\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Do not set a bookie rack name to slash (",(0,r.kt)("inlineCode",{parentName:"li"},"/"),") or an empty string (",(0,r.kt)("inlineCode",{parentName:"li"},'""'),") if you use Pulsar earlier than 2.7.5, 2.8.3, and 2.9.2. If you use Pulsar 2.7.5, 2.8.3, 2.9.2 or later versions, it falls back to ",(0,r.kt)("inlineCode",{parentName:"li"},"/default-rack")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"/default-region/default-rack"),"."),(0,r.kt)("li",{parentName:"ul"},"When ",(0,r.kt)("inlineCode",{parentName:"li"},"RackawareEnsemblePlacementPolicy")," is enabled, the rack name is not allowed to contain slash (",(0,r.kt)("inlineCode",{parentName:"li"},"/"),") except for the beginning and end of the rack name string. For example, rack name like ",(0,r.kt)("inlineCode",{parentName:"li"},"/rack0")," is okay, but ",(0,r.kt)("inlineCode",{parentName:"li"},"/rack/0")," is not allowed."),(0,r.kt)("li",{parentName:"ul"},"When ",(0,r.kt)("inlineCode",{parentName:"li"},"RegionawareEnsemblePlacementPolicy")," is enabled, the rack name can only contain one slash (",(0,r.kt)("inlineCode",{parentName:"li"},"/"),") except for the beginning and end of the rack name string. For example, rack name like ",(0,r.kt)("inlineCode",{parentName:"li"},"/region0/rack0")," is okay, but ",(0,r.kt)("inlineCode",{parentName:"li"},"/region0rack0")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"/region0/rack/0")," are not allowed.\nFor the bookie rack name restrictions, see ",(0,r.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/tools/pulsar-admin/"},"pulsar-admin bookies set-bookie-rack"),"."))))),(0,r.kt)(l.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api/?version=master&apiversion=v2#operation/setBookieAffinityGroup"},"POST /admin/v2/namespaces/{tenant}/{namespace}/persistence/bookieAffinity"))),(0,r.kt)(l.Z,{value:"Java admin API",mdxType:"TabItem"},(0,r.kt)("p",null,"For how to set bookie affinity group for a namespace using Java admin API, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin/src/main/java/org/apache/pulsar/client/admin/internal/NamespacesImpl.java#L1164"},"here"),"."))))}k.isMDXComponent=!0}}]);