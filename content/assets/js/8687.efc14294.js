"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8687],{98801:(e,t,n)=>{n.d(t,{Z:()=>h});var o=n(87462),r=n(63366),i=n(67294),l=n(30067),a=n(94780),s=n(32289),u=n(80085),c=n(78987),p=n(85893);const d=["children","component","disabled","label","slotProps","slots","value"];const f=i.forwardRef((function(e,t){const{children:n,component:f,disabled:h,label:v,slotProps:g={},slots:m={},value:b}=e,y=(0,r.Z)(e,d),x=i.useContext(s.j);if(!x)throw new Error("OptionUnstyled must be used within a SelectUnstyled");const w=f||m.root||"li",O={value:b,label:v||n,disabled:h},P=x.getOptionState(O),V=x.getOptionProps(O),Z=x.listboxRef,S=(0,o.Z)({},e,P),E=i.useRef(null),D=(0,l.Z)(t,E);i.useEffect((()=>{if(P.highlighted){if(!Z.current||!E.current)return;const e=Z.current.getBoundingClientRect(),t=E.current.getBoundingClientRect();t.top<e.top?Z.current.scrollTop-=e.top-t.top:t.bottom>e.bottom&&(Z.current.scrollTop+=t.bottom-e.bottom)}}),[P.highlighted,Z]);const C=function(e){const{disabled:t,highlighted:n,selected:o}=e,r={root:["root",t&&"disabled",n&&"highlighted",o&&"selected"]};return(0,a.Z)(r,u.u,{})}(S),k=(0,c.Z)({elementType:w,externalSlotProps:g.root,externalForwardedProps:y,additionalProps:(0,o.Z)({},V,{ref:D}),className:C.root,ownerState:S});return(0,p.jsx)(w,(0,o.Z)({},k,{children:n}))})),h=i.memo(f)},80085:(e,t,n)=>{n.d(t,{Z:()=>i,u:()=>r});var o=n(34867);function r(e){return(0,o.Z)("MuiOption",e)}const i=(0,n(1588).Z)("MuiOption",["root","disabled","selected","highlighted"])},95754:(e,t,n)=>{n.d(t,{Z:()=>Le});var o=n(87462),r=n(63366),i=n(67294),l=n(30067),a=n(16600),s=n(57094);function u(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function c(e){return e instanceof u(e).Element||e instanceof Element}function p(e){return e instanceof u(e).HTMLElement||e instanceof HTMLElement}function d(e){return"undefined"!=typeof ShadowRoot&&(e instanceof u(e).ShadowRoot||e instanceof ShadowRoot)}var f=Math.max,h=Math.min,v=Math.round;function g(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function m(){return!/^((?!chrome|android).)*safari/i.test(g())}function b(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var o=e.getBoundingClientRect(),r=1,i=1;t&&p(e)&&(r=e.offsetWidth>0&&v(o.width)/e.offsetWidth||1,i=e.offsetHeight>0&&v(o.height)/e.offsetHeight||1);var l=(c(e)?u(e):window).visualViewport,a=!m()&&n,s=(o.left+(a&&l?l.offsetLeft:0))/r,d=(o.top+(a&&l?l.offsetTop:0))/i,f=o.width/r,h=o.height/i;return{width:f,height:h,top:d,right:s+f,bottom:d+h,left:s,x:s,y:d}}function y(e){var t=u(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function x(e){return e?(e.nodeName||"").toLowerCase():null}function w(e){return((c(e)?e.ownerDocument:e.document)||window.document).documentElement}function O(e){return b(w(e)).left+y(e).scrollLeft}function P(e){return u(e).getComputedStyle(e)}function V(e){var t=P(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function Z(e,t,n){void 0===n&&(n=!1);var o,r,i=p(t),l=p(t)&&function(e){var t=e.getBoundingClientRect(),n=v(t.width)/e.offsetWidth||1,o=v(t.height)/e.offsetHeight||1;return 1!==n||1!==o}(t),a=w(t),s=b(e,l,n),c={scrollLeft:0,scrollTop:0},d={x:0,y:0};return(i||!i&&!n)&&(("body"!==x(t)||V(a))&&(c=(o=t)!==u(o)&&p(o)?{scrollLeft:(r=o).scrollLeft,scrollTop:r.scrollTop}:y(o)),p(t)?((d=b(t,!0)).x+=t.clientLeft,d.y+=t.clientTop):a&&(d.x=O(a))),{x:s.left+c.scrollLeft-d.x,y:s.top+c.scrollTop-d.y,width:s.width,height:s.height}}function S(e){var t=b(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function E(e){return"html"===x(e)?e:e.assignedSlot||e.parentNode||(d(e)?e.host:null)||w(e)}function D(e){return["html","body","#document"].indexOf(x(e))>=0?e.ownerDocument.body:p(e)&&V(e)?e:D(E(e))}function C(e,t){var n;void 0===t&&(t=[]);var o=D(e),r=o===(null==(n=e.ownerDocument)?void 0:n.body),i=u(o),l=r?[i].concat(i.visualViewport||[],V(o)?o:[]):o,a=t.concat(l);return r?a:a.concat(C(E(l)))}function k(e){return["table","td","th"].indexOf(x(e))>=0}function R(e){return p(e)&&"fixed"!==P(e).position?e.offsetParent:null}function j(e){for(var t=u(e),n=R(e);n&&k(n)&&"static"===P(n).position;)n=R(n);return n&&("html"===x(n)||"body"===x(n)&&"static"===P(n).position)?t:n||function(e){var t=/firefox/i.test(g());if(/Trident/i.test(g())&&p(e)&&"fixed"===P(e).position)return null;var n=E(e);for(d(n)&&(n=n.host);p(n)&&["html","body"].indexOf(x(n))<0;){var o=P(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(e)||t}var M="top",A="bottom",L="right",T="left",H="auto",B=[M,A,L,T],W="start",I="end",U="viewport",F="popper",N=B.reduce((function(e,t){return e.concat([t+"-"+W,t+"-"+I])}),[]),q=[].concat(B,[H]).reduce((function(e,t){return e.concat([t,t+"-"+W,t+"-"+I])}),[]),K=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function z(e){var t=new Map,n=new Set,o=[];function r(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var o=t.get(e);o&&r(o)}})),o.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),o}var _={placement:"bottom",modifiers:[],strategy:"absolute"};function X(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Y(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,o=void 0===n?[]:n,r=t.defaultOptions,i=void 0===r?_:r;return function(e,t,n){void 0===n&&(n=i);var r,l,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},_,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],u=!1,p={state:a,setOptions:function(n){var r="function"==typeof n?n(a.options):n;d(),a.options=Object.assign({},i,a.options,r),a.scrollParents={reference:c(e)?C(e):e.contextElement?C(e.contextElement):[],popper:C(t)};var l=function(e){var t=z(e);return K.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(o,a.options.modifiers)));return a.orderedModifiers=l.filter((function(e){return e.enabled})),a.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,o=void 0===n?{}:n,r=e.effect;if("function"==typeof r){var i=r({state:a,name:t,instance:p,options:o}),l=function(){};s.push(i||l)}})),p.update()},forceUpdate:function(){if(!u){var e=a.elements,t=e.reference,n=e.popper;if(X(t,n)){a.rects={reference:Z(t,j(n),"fixed"===a.options.strategy),popper:S(n)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(e){return a.modifiersData[e.name]=Object.assign({},e.data)}));for(var o=0;o<a.orderedModifiers.length;o++)if(!0!==a.reset){var r=a.orderedModifiers[o],i=r.fn,l=r.options,s=void 0===l?{}:l,c=r.name;"function"==typeof i&&(a=i({state:a,options:s,name:c,instance:p})||a)}else a.reset=!1,o=-1}}},update:(r=function(){return new Promise((function(e){p.forceUpdate(),e(a)}))},function(){return l||(l=new Promise((function(e){Promise.resolve().then((function(){l=void 0,e(r())}))}))),l}),destroy:function(){d(),u=!0}};if(!X(e,t))return p;function d(){s.forEach((function(e){return e()})),s=[]}return p.setOptions(n).then((function(e){!u&&n.onFirstUpdate&&n.onFirstUpdate(e)})),p}}var $={passive:!0};function G(e){return e.split("-")[0]}function J(e){return e.split("-")[1]}function Q(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ee(e){var t,n=e.reference,o=e.element,r=e.placement,i=r?G(r):null,l=r?J(r):null,a=n.x+n.width/2-o.width/2,s=n.y+n.height/2-o.height/2;switch(i){case M:t={x:a,y:n.y-o.height};break;case A:t={x:a,y:n.y+n.height};break;case L:t={x:n.x+n.width,y:s};break;case T:t={x:n.x-o.width,y:s};break;default:t={x:n.x,y:n.y}}var u=i?Q(i):null;if(null!=u){var c="y"===u?"height":"width";switch(l){case W:t[u]=t[u]-(n[c]/2-o[c]/2);break;case I:t[u]=t[u]+(n[c]/2-o[c]/2)}}return t}var te={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ne(e){var t,n=e.popper,o=e.popperRect,r=e.placement,i=e.variation,l=e.offsets,a=e.position,s=e.gpuAcceleration,c=e.adaptive,p=e.roundOffsets,d=e.isFixed,f=l.x,h=void 0===f?0:f,g=l.y,m=void 0===g?0:g,b="function"==typeof p?p({x:h,y:m}):{x:h,y:m};h=b.x,m=b.y;var y=l.hasOwnProperty("x"),x=l.hasOwnProperty("y"),O=T,V=M,Z=window;if(c){var S=j(n),E="clientHeight",D="clientWidth";if(S===u(n)&&"static"!==P(S=w(n)).position&&"absolute"===a&&(E="scrollHeight",D="scrollWidth"),r===M||(r===T||r===L)&&i===I)V=A,m-=(d&&S===Z&&Z.visualViewport?Z.visualViewport.height:S[E])-o.height,m*=s?1:-1;if(r===T||(r===M||r===A)&&i===I)O=L,h-=(d&&S===Z&&Z.visualViewport?Z.visualViewport.width:S[D])-o.width,h*=s?1:-1}var C,k=Object.assign({position:a},c&&te),R=!0===p?function(e){var t=e.x,n=e.y,o=window.devicePixelRatio||1;return{x:v(t*o)/o||0,y:v(n*o)/o||0}}({x:h,y:m}):{x:h,y:m};return h=R.x,m=R.y,s?Object.assign({},k,((C={})[V]=x?"0":"",C[O]=y?"0":"",C.transform=(Z.devicePixelRatio||1)<=1?"translate("+h+"px, "+m+"px)":"translate3d("+h+"px, "+m+"px, 0)",C)):Object.assign({},k,((t={})[V]=x?m+"px":"",t[O]=y?h+"px":"",t.transform="",t))}const oe={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.offset,i=void 0===r?[0,0]:r,l=q.reduce((function(e,n){return e[n]=function(e,t,n){var o=G(e),r=[T,M].indexOf(o)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,l=i[0],a=i[1];return l=l||0,a=(a||0)*r,[T,L].indexOf(o)>=0?{x:a,y:l}:{x:l,y:a}}(n,t.rects,i),e}),{}),a=l[t.placement],s=a.x,u=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=u),t.modifiersData[o]=l}};var re={left:"right",right:"left",bottom:"top",top:"bottom"};function ie(e){return e.replace(/left|right|bottom|top/g,(function(e){return re[e]}))}var le={start:"end",end:"start"};function ae(e){return e.replace(/start|end/g,(function(e){return le[e]}))}function se(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&d(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function ue(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ce(e,t,n){return t===U?ue(function(e,t){var n=u(e),o=w(e),r=n.visualViewport,i=o.clientWidth,l=o.clientHeight,a=0,s=0;if(r){i=r.width,l=r.height;var c=m();(c||!c&&"fixed"===t)&&(a=r.offsetLeft,s=r.offsetTop)}return{width:i,height:l,x:a+O(e),y:s}}(e,n)):c(t)?function(e,t){var n=b(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):ue(function(e){var t,n=w(e),o=y(e),r=null==(t=e.ownerDocument)?void 0:t.body,i=f(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),l=f(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-o.scrollLeft+O(e),s=-o.scrollTop;return"rtl"===P(r||n).direction&&(a+=f(n.clientWidth,r?r.clientWidth:0)-i),{width:i,height:l,x:a,y:s}}(w(e)))}function pe(e,t,n,o){var r="clippingParents"===t?function(e){var t=C(E(e)),n=["absolute","fixed"].indexOf(P(e).position)>=0&&p(e)?j(e):e;return c(n)?t.filter((function(e){return c(e)&&se(e,n)&&"body"!==x(e)})):[]}(e):[].concat(t),i=[].concat(r,[n]),l=i[0],a=i.reduce((function(t,n){var r=ce(e,n,o);return t.top=f(r.top,t.top),t.right=h(r.right,t.right),t.bottom=h(r.bottom,t.bottom),t.left=f(r.left,t.left),t}),ce(e,l,o));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function de(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function fe(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function he(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=void 0===o?e.placement:o,i=n.strategy,l=void 0===i?e.strategy:i,a=n.boundary,s=void 0===a?"clippingParents":a,u=n.rootBoundary,p=void 0===u?U:u,d=n.elementContext,f=void 0===d?F:d,h=n.altBoundary,v=void 0!==h&&h,g=n.padding,m=void 0===g?0:g,y=de("number"!=typeof m?m:fe(m,B)),x=f===F?"reference":F,O=e.rects.popper,P=e.elements[v?x:f],V=pe(c(P)?P:P.contextElement||w(e.elements.popper),s,p,l),Z=b(e.elements.reference),S=ee({reference:Z,element:O,strategy:"absolute",placement:r}),E=ue(Object.assign({},O,S)),D=f===F?E:Z,C={top:V.top-D.top+y.top,bottom:D.bottom-V.bottom+y.bottom,left:V.left-D.left+y.left,right:D.right-V.right+y.right},k=e.modifiersData.offset;if(f===F&&k){var R=k[r];Object.keys(C).forEach((function(e){var t=[L,A].indexOf(e)>=0?1:-1,n=[M,A].indexOf(e)>=0?"y":"x";C[e]+=R[n]*t}))}return C}function ve(e,t,n){return f(e,h(t,n))}const ge={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,i=void 0===r||r,l=n.altAxis,a=void 0!==l&&l,s=n.boundary,u=n.rootBoundary,c=n.altBoundary,p=n.padding,d=n.tether,v=void 0===d||d,g=n.tetherOffset,m=void 0===g?0:g,b=he(t,{boundary:s,rootBoundary:u,padding:p,altBoundary:c}),y=G(t.placement),x=J(t.placement),w=!x,O=Q(y),P="x"===O?"y":"x",V=t.modifiersData.popperOffsets,Z=t.rects.reference,E=t.rects.popper,D="function"==typeof m?m(Object.assign({},t.rects,{placement:t.placement})):m,C="number"==typeof D?{mainAxis:D,altAxis:D}:Object.assign({mainAxis:0,altAxis:0},D),k=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,R={x:0,y:0};if(V){if(i){var H,B="y"===O?M:T,I="y"===O?A:L,U="y"===O?"height":"width",F=V[O],N=F+b[B],q=F-b[I],K=v?-E[U]/2:0,z=x===W?Z[U]:E[U],_=x===W?-E[U]:-Z[U],X=t.elements.arrow,Y=v&&X?S(X):{width:0,height:0},$=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=$[B],te=$[I],ne=ve(0,Z[U],Y[U]),oe=w?Z[U]/2-K-ne-ee-C.mainAxis:z-ne-ee-C.mainAxis,re=w?-Z[U]/2+K+ne+te+C.mainAxis:_+ne+te+C.mainAxis,ie=t.elements.arrow&&j(t.elements.arrow),le=ie?"y"===O?ie.clientTop||0:ie.clientLeft||0:0,ae=null!=(H=null==k?void 0:k[O])?H:0,se=F+re-ae,ue=ve(v?h(N,F+oe-ae-le):N,F,v?f(q,se):q);V[O]=ue,R[O]=ue-F}if(a){var ce,pe="x"===O?M:T,de="x"===O?A:L,fe=V[P],ge="y"===P?"height":"width",me=fe+b[pe],be=fe-b[de],ye=-1!==[M,T].indexOf(y),xe=null!=(ce=null==k?void 0:k[P])?ce:0,we=ye?me:fe-Z[ge]-E[ge]-xe+C.altAxis,Oe=ye?fe+Z[ge]+E[ge]-xe-C.altAxis:be,Pe=v&&ye?function(e,t,n){var o=ve(e,t,n);return o>n?n:o}(we,fe,Oe):ve(v?we:me,fe,v?Oe:be);V[P]=Pe,R[P]=Pe-fe}t.modifiersData[o]=R}},requiresIfExists:["offset"]};const me={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,o=e.name,r=e.options,i=n.elements.arrow,l=n.modifiersData.popperOffsets,a=G(n.placement),s=Q(a),u=[T,L].indexOf(a)>=0?"height":"width";if(i&&l){var c=function(e,t){return de("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:fe(e,B))}(r.padding,n),p=S(i),d="y"===s?M:T,f="y"===s?A:L,h=n.rects.reference[u]+n.rects.reference[s]-l[s]-n.rects.popper[u],v=l[s]-n.rects.reference[s],g=j(i),m=g?"y"===s?g.clientHeight||0:g.clientWidth||0:0,b=h/2-v/2,y=c[d],x=m-p[u]-c[f],w=m/2-p[u]/2+b,O=ve(y,w,x),P=s;n.modifiersData[o]=((t={})[P]=O,t.centerOffset=O-w,t)}},effect:function(e){var t=e.state,n=e.options.element,o=void 0===n?"[data-popper-arrow]":n;null!=o&&("string"!=typeof o||(o=t.elements.popper.querySelector(o)))&&se(t.elements.popper,o)&&(t.elements.arrow=o)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function be(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ye(e){return[M,L,A,T].some((function(t){return e[t]>=0}))}var xe=Y({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,i=void 0===r||r,l=o.resize,a=void 0===l||l,s=u(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,$)})),a&&s.addEventListener("resize",n.update,$),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,$)})),a&&s.removeEventListener("resize",n.update,$)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=ee({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=void 0===o||o,i=n.adaptive,l=void 0===i||i,a=n.roundOffsets,s=void 0===a||a,u={placement:G(t.placement),variation:J(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ne(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:s})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ne(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},r=t.elements[e];p(r)&&x(r)&&(Object.assign(r.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],r=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});p(o)&&x(o)&&(Object.assign(o.style,i),Object.keys(r).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]},oe,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,i=void 0===r||r,l=n.altAxis,a=void 0===l||l,s=n.fallbackPlacements,u=n.padding,c=n.boundary,p=n.rootBoundary,d=n.altBoundary,f=n.flipVariations,h=void 0===f||f,v=n.allowedAutoPlacements,g=t.options.placement,m=G(g),b=s||(m===g||!h?[ie(g)]:function(e){if(G(e)===H)return[];var t=ie(e);return[ae(e),t,ae(t)]}(g)),y=[g].concat(b).reduce((function(e,n){return e.concat(G(n)===H?function(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=n.boundary,i=n.rootBoundary,l=n.padding,a=n.flipVariations,s=n.allowedAutoPlacements,u=void 0===s?q:s,c=J(o),p=c?a?N:N.filter((function(e){return J(e)===c})):B,d=p.filter((function(e){return u.indexOf(e)>=0}));0===d.length&&(d=p);var f=d.reduce((function(t,n){return t[n]=he(e,{placement:n,boundary:r,rootBoundary:i,padding:l})[G(n)],t}),{});return Object.keys(f).sort((function(e,t){return f[e]-f[t]}))}(t,{placement:n,boundary:c,rootBoundary:p,padding:u,flipVariations:h,allowedAutoPlacements:v}):n)}),[]),x=t.rects.reference,w=t.rects.popper,O=new Map,P=!0,V=y[0],Z=0;Z<y.length;Z++){var S=y[Z],E=G(S),D=J(S)===W,C=[M,A].indexOf(E)>=0,k=C?"width":"height",R=he(t,{placement:S,boundary:c,rootBoundary:p,altBoundary:d,padding:u}),j=C?D?L:T:D?A:M;x[k]>w[k]&&(j=ie(j));var I=ie(j),U=[];if(i&&U.push(R[E]<=0),a&&U.push(R[j]<=0,R[I]<=0),U.every((function(e){return e}))){V=S,P=!1;break}O.set(S,U)}if(P)for(var F=function(e){var t=y.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return V=t,"break"},K=h?3:1;K>0;K--){if("break"===F(K))break}t.placement!==V&&(t.modifiersData[o]._skip=!0,t.placement=V,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},ge,me,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,l=he(t,{elementContext:"reference"}),a=he(t,{altBoundary:!0}),s=be(l,o),u=be(a,r,i),c=ye(s),p=ye(u);t.modifiersData[n]={referenceClippingOffsets:s,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":p})}}]}),we=n(94780),Oe=n(73935),Pe=n(7960),Ve=n(85893);const Ze=i.forwardRef((function(e,t){const{children:n,container:o,disablePortal:r=!1}=e,[s,u]=i.useState(null),c=(0,l.Z)(i.isValidElement(n)?n.ref:null,t);return(0,a.Z)((()=>{r||u(function(e){return"function"==typeof e?e():e}(o)||document.body)}),[o,r]),(0,a.Z)((()=>{if(s&&!r)return(0,Pe.Z)(t,s),()=>{(0,Pe.Z)(t,null)}}),[t,s,r]),r?i.isValidElement(n)?i.cloneElement(n,{ref:c}):n:(0,Ve.jsx)(i.Fragment,{children:s?Oe.createPortal(n,s):s})}));var Se=n(34867);function Ee(e){return(0,Se.Z)("MuiPopperUnstyled",e)}(0,n(1588).Z)("MuiPopperUnstyled",["root"]);var De=n(78987);const Ce=["anchorEl","children","component","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","slotProps","slots","TransitionProps"],ke=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function Re(e){return"function"==typeof e?e():e}function je(e){return void 0!==e.nodeType}const Me={},Ae=i.forwardRef((function(e,t){var n;const{anchorEl:s,children:u,component:c,direction:p,disablePortal:d,modifiers:f,open:h,ownerState:v,placement:g,popperOptions:m,popperRef:b,slotProps:y={},slots:x={},TransitionProps:w}=e,O=(0,r.Z)(e,Ce),P=i.useRef(null),V=(0,l.Z)(P,t),Z=i.useRef(null),S=(0,l.Z)(Z,b),E=i.useRef(S);(0,a.Z)((()=>{E.current=S}),[S]),i.useImperativeHandle(b,(()=>Z.current),[]);const D=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(g,p),[C,k]=i.useState(D),[R,j]=i.useState(Re(s));i.useEffect((()=>{Z.current&&Z.current.forceUpdate()})),i.useEffect((()=>{s&&j(Re(s))}),[s]),(0,a.Z)((()=>{if(!R||!h)return;let e=[{name:"preventOverflow",options:{altBoundary:d}},{name:"flip",options:{altBoundary:d}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:e})=>{k(e.placement)}}];null!=f&&(e=e.concat(f)),m&&null!=m.modifiers&&(e=e.concat(m.modifiers));const t=xe(R,P.current,(0,o.Z)({placement:D},m,{modifiers:e}));return E.current(t),()=>{t.destroy(),E.current(null)}}),[R,d,f,h,m,D]);const M={placement:C};null!==w&&(M.TransitionProps=w);const A=(0,we.Z)({root:["root"]},Ee,{}),L=null!=(n=null!=c?c:x.root)?n:"div",T=(0,De.Z)({elementType:L,externalSlotProps:y.root,externalForwardedProps:O,additionalProps:{role:"tooltip",ref:V},ownerState:(0,o.Z)({},e,v),className:A.root});return(0,Ve.jsx)(L,(0,o.Z)({},T,{children:"function"==typeof u?u(M):u}))})),Le=i.forwardRef((function(e,t){const{anchorEl:n,children:l,container:a,direction:u="ltr",disablePortal:c=!1,keepMounted:p=!1,modifiers:d,open:f,placement:h="bottom",popperOptions:v=Me,popperRef:g,style:m,transition:b=!1,slotProps:y={},slots:x={}}=e,w=(0,r.Z)(e,ke),[O,P]=i.useState(!0);if(!p&&!f&&(!b||O))return null;let V;if(a)V=a;else if(n){const e=Re(n);V=e&&je(e)?(0,s.Z)(e).body:(0,s.Z)(null).body}const Z=f||!p||b&&!O?void 0:"none",S=b?{in:f,onEnter:()=>{P(!1)},onExited:()=>{P(!0)}}:void 0;return(0,Ve.jsx)(Ze,{disablePortal:c,container:V,children:(0,Ve.jsx)(Ae,(0,o.Z)({anchorEl:n,direction:u,disablePortal:c,modifiers:d,ref:t,open:b?!O:f,placement:h,popperOptions:v,popperRef:g,slotProps:y,slots:x},w,{style:(0,o.Z)({position:"fixed",top:0,left:0,display:Z},m),TransitionProps:S,children:l}))})}))},37371:(e,t,n)=>{n.d(t,{Z:()=>L});var o=n(87462),r=n(63366),i=n(67294),l=n(8925),a=n(30067);function s(e){if(null==e)return[];const t=[];return i.Children.forEach(e,(e=>{var n,o,r;const i=null==e||null==(n=e.props)?void 0:n.children;if(void 0===(null==e||null==(o=e.props)?void 0:o.value)){if(null!=i){var l;const n=e,o={options:s(i),label:n.props.label,disabled:null!=(l=n.props.disabled)&&l};t.push(o)}return}const a=e,u={value:a.props.value,label:a.props.label||a.props.children,disabled:null!=(r=a.props.disabled)&&r};t.push(u)})),null!=t?t:[]}function u(e,t=!1){let n=[];return e.forEach((e=>{e.options?n=n.concat(u(e.options,e.disabled)):n.push((0,o.Z)({},e,{disabled:t||e.disabled}))})),n}var c,p=n(57579),d=n(95286);!function(e){e.blur="blur",e.focus="focus",e.keyDown="keyDown",e.optionClick="optionClick",e.optionHover="optionHover",e.optionsChange="optionsChange",e.setValue="setValue",e.setHighlight="setHighlight",e.textNavigation="textNagivation"}(c||(c={}));function f(e,t,n,o,r,i,l,a){var s;const u=e.length-1;let c;const p=null==t?-1:e.findIndex((e=>a(e,t)));if("reset"===n)return null;if("start"===n)c=0;else if("end"===n)c=u;else{const e=p+n;c=e<0?!l&&-1!==p||Math.abs(n)>1?0:u:e>u?!l||Math.abs(n)>1?u:0:e}const d=function(e,t,n,o,r,i){if(0===n.length||n.every(((e,t)=>r(e,t))))return-1;let l=e;for(;;){if(!i&&"next"===t&&l===n.length||!i&&"previous"===t&&-1===l)return-1;if(o||!r(n[l],l))return l;l+="next"===t?1:-1,i&&(l=(l+n.length)%n.length)}}(c,o,e,r,i,l);return null!=(s=e[d])?s:null}function h(e,t,n){const{multiple:o,optionComparer:r=((e,t)=>e===t),isOptionDisabled:i=(()=>!1)}=n,{selectedValue:l}=t,a=n.options.findIndex((t=>n.optionComparer(e,t)));if(i(e,a))return t;if(o){var s,u;return{selectedValue:(null!=(s=l)?s:[]).some((t=>r(t,e)))?l.filter((t=>!r(t,e))):[...null!=(u=l)?u:[],e],highlightedValue:e}}return null!=l&&r(e,l)?t:{selectedValue:e,highlightedValue:e}}const v=(e,t,n)=>{var o;const r=null==(o=n(e))?void 0:o.trim().toLowerCase();return!(!r||0===r.length)&&0===r.indexOf(t)};function g(e,t){const{type:n}=t;switch(n){case c.keyDown:return function(e,t,n){const{options:r,isOptionDisabled:i,disableListWrap:l,disabledItemsFocusable:a,optionComparer:s}=n,u=(e,n,o)=>f(r,t.highlightedValue,e,n,null!=a&&a,null!=i?i:()=>!1,o,s);switch(e.key){case"Home":return(0,o.Z)({},t,{highlightedValue:u("start","next",!1)});case"End":return(0,o.Z)({},t,{highlightedValue:u("end","previous",!1)});case"PageUp":return(0,o.Z)({},t,{highlightedValue:u(-5,"previous",!1)});case"PageDown":return(0,o.Z)({},t,{highlightedValue:u(5,"next",!1)});case"ArrowUp":return(0,o.Z)({},t,{highlightedValue:u(-1,"previous",!(null!=l&&l))});case"ArrowDown":return(0,o.Z)({},t,{highlightedValue:u(1,"next",!(null!=l&&l))});case"Enter":case" ":return null===t.highlightedValue?t:h(t.highlightedValue,t,n)}return t}(t.event,e,t.props);case c.optionClick:return h(t.option,e,t.props);case c.blur:return function(e){return(0,o.Z)({},e,{highlightedValue:null})}(e);case c.setValue:return(0,o.Z)({},e,{selectedValue:t.value});case c.setHighlight:return(0,o.Z)({},e,{highlightedValue:t.highlight});case c.textNavigation:return function(e,t,n){const{options:r,isOptionDisabled:i,disableListWrap:l,disabledItemsFocusable:a,optionComparer:s,optionStringifier:u}=n,c=e=>f(r,e,1,"next",null!=a&&a,null!=i?i:()=>!1,!(null!=l&&l),s),p=t.length>1;let d=p?e.highlightedValue:c(e.highlightedValue);for(let f=0;f<r.length;f+=1){if(!d||!p&&e.highlightedValue===d)return e;if(v(d,t,u)&&(!i(d,r.indexOf(d))||a))return(0,o.Z)({},e,{highlightedValue:d});d=c(d)}return e}(e,t.searchString,t.props);case c.optionsChange:return function(e,t,n,o){var r,i;const{multiple:l,optionComparer:a}=o,s=null==n.highlightedValue?null:null!=(r=e.find((e=>a(e,n.highlightedValue))))?r:null;var u;return l?{highlightedValue:s,selectedValue:(null!=(u=n.selectedValue)?u:[]).filter((t=>e.some((e=>a(e,t)))))}:{highlightedValue:s,selectedValue:null!=(i=e.find((e=>a(e,n.selectedValue))))?i:null}}(t.options,t.previousOptions,e,t.props);default:return e}}function m(e,t,n=((e,t)=>e===t)){return e.length===t.length&&e.every(((e,o)=>n(e,t[o])))}function b(e,t){return void 0!==t.value?(0,o.Z)({},e,{selectedValue:t.value}):e}function y(e,t,n){return e===t||null!==e&&null!==t&&n(e,t)}function x(e,t,n){var o;const{value:r,defaultValue:l}=n,a=i.useRef(n);a.current=n;const s=i.useRef(null),u={highlightedValue:null,selectedValue:null!=(o=void 0===r?l:r)?o:n.multiple?[]:null},c=i.useCallback(((n,o)=>(s.current=o,t?t(b(n,a.current),o):e(b(n,a.current),o))),[t,e,a]),[p,d]=i.useReducer(c,u),f=i.useRef(u);return i.useEffect((()=>{f.current=p}),[f,p]),function(e,t,n,o){i.useEffect((()=>{if(!n.current||null===o.current)return;const r=b(t,n.current),{multiple:i,optionComparer:l}=n.current;if(i){var a;const t=null!=(a=null==r?void 0:r.selectedValue)?a:[],i=e.selectedValue,s=n.current.onChange;m(i,t,l)||null==s||s(o.current.event,i)}else{const t=null==r?void 0:r.selectedValue,i=e.selectedValue,a=n.current.onChange;y(i,t,l)||null==a||a(o.current.event,i)}var s,u;y(t.highlightedValue,e.highlightedValue,n.current.optionComparer)||null==(s=n.current)||null==(u=s.onHighlightChange)||u.call(s,o.current.event,e.highlightedValue),o.current=null}),[e.selectedValue,e.highlightedValue,t,n,o])}(p,f.current,a,s),[b(p,a.current),d]}const w=(e,t)=>e===t,O=()=>!1,P=e=>"string"==typeof e?e:String(e);const V=e=>{const{label:t,value:n}=e;return"string"==typeof t?t:"string"==typeof n?n:String(e)};const Z=function(e){const{buttonRef:t,defaultValue:n,disabled:r=!1,listboxId:s,listboxRef:u,multiple:f=!1,onChange:h,onOpenChange:v,open:b=!1,options:y,optionStringifier:Z=V,value:S}=e,E=i.useRef(null),D=(0,a.Z)(t,E),C=i.useRef(null),k=(0,p.Z)(s),[R,j]=(0,l.Z)({controlled:S,default:n,name:"SelectUnstyled",state:"value"}),M=i.useRef(!1),A=i.useRef(!1),[L,T]=i.useState(!1),H=i.useCallback((()=>{L&&null!=C.current&&(C.current.focus(),T(!1))}),[L]),B=(0,a.Z)(u,C,H);i.useEffect((()=>{H()}),[H]),i.useEffect((()=>{T(b)}),[b]);const W=e=>t=>{var n;null==e||null==(n=e.onMouseDown)||n.call(e,t),!t.defaultPrevented&&b&&(A.current=!0)},I=e=>t=>{var n;null==e||null==(n=e.onClick)||n.call(e,t),t.defaultPrevented||A.current||null==v||v(!b),A.current=!1},U=e=>t=>{var n;null==e||null==(n=e.onKeyDown)||n.call(e,t),t.defaultPrevented||("Enter"===t.key&&(M.current=!0),"ArrowDown"!==t.key&&"ArrowUp"!==t.key||(t.preventDefault(),null==v||v(!0)))},F=e=>t=>{var n;if(null==e||null==(n=e.onKeyUp)||n.call(e,t),t.defaultPrevented)return;const o=f?["Escape"]:["Escape","Enter"," "];var r;b&&!M.current&&o.includes(t.key)&&(null==E||null==(r=E.current)||r.focus());M.current=!1},N=e=>t=>{var n;null==e||null==(n=e.onClick)||n.call(e,t),t.defaultPrevented||f||null==v||v(!1)},q=e=>t=>{var n;null==e||null==(n=e.onBlur)||n.call(e,t),t.defaultPrevented||null==v||v(!1)},K=(e,t)=>{const n=g(e,t);return t.type!==c.keyDown||b||"ArrowUp"!==t.event.key&&"ArrowDown"!==t.event.key?t.type===c.blur||t.type===c.setValue||t.type===c.optionsChange?(0,o.Z)({},n,{highlightedValue:n.selectedValue}):n:(0,o.Z)({},n,{selectedValue:n.highlightedValue})},{getRootProps:z,active:_,focusVisible:X}=(0,d.Z)({disabled:r,ref:D}),Y=i.useMemo((()=>{var t;return e.multiple?e.options.filter((e=>R.includes(e.value))):null!=(t=e.options.find((e=>e.value===R)))?t:null}),[e.multiple,e.options,R]);let $;if(e.multiple){const e=h;$={id:k,isOptionDisabled:e=>{var t;return null!=(t=null==e?void 0:e.disabled)&&t},optionComparer:(e,t)=>(null==e?void 0:e.value)===(null==t?void 0:t.value),listboxRef:B,multiple:!0,onChange:(t,n)=>{const o=n.map((e=>e.value));j(o),null==e||e(t,o)},options:y,optionStringifier:Z,value:Y}}else{const e=h;$={id:k,isOptionDisabled:e=>{var t;return null!=(t=null==e?void 0:e.disabled)&&t},optionComparer:(e,t)=>(null==e?void 0:e.value)===(null==t?void 0:t.value),listboxRef:B,multiple:!1,onChange:(t,n)=>{var o,r;j(null!=(o=null==n?void 0:n.value)?o:null),null==e||e(t,null!=(r=null==n?void 0:n.value)?r:null)},options:y,optionStringifier:Z,stateReducer:K,value:Y}}const{getRootProps:G,getOptionProps:J,getOptionState:Q,highlightedOption:ee,selectedOption:te}=function(e){var t,n;const{disabledItemsFocusable:r=!1,disableListWrap:l=!1,focusManagement:s="activeDescendant",id:u,isOptionDisabled:d=O,listboxRef:f,multiple:h=!1,optionComparer:v=w,optionStringifier:b=P,options:y,stateReducer:V}=e,Z=(0,p.Z)(u),S=null!=(t=e.optionIdGenerator)?t:function(e,t){return`${Z}-option-${t}`},E=(0,o.Z)({},e,{disabledItemsFocusable:r,disableListWrap:l,focusManagement:s,isOptionDisabled:d,multiple:h,optionComparer:v,optionStringifier:b}),D=i.useRef(null),C=(0,a.Z)(f,D),k=i.useRef({searchString:"",lastTime:null}),[{highlightedValue:R,selectedValue:j},M]=x(g,V,E),A=i.useMemo((()=>null==R?-1:y.findIndex((e=>v(e,R)))),[R,y,v]),L=i.useRef([]);i.useEffect((()=>{m(L.current,y,v)||(M({type:c.optionsChange,event:null,options:y,previousOptions:L.current,props:E}),L.current=y)}),[y,v,M]);const T=i.useCallback((e=>{M({type:c.setValue,event:null,value:e})}),[M]),H=i.useCallback((e=>{M({type:c.setHighlight,event:null,highlight:e})}),[M]),B=(e,t)=>n=>{var o;null==(o=t.onClick)||o.call(t,n),n.defaultPrevented||(n.preventDefault(),M({type:c.optionClick,option:e,event:n,props:E}))},W=(e,t)=>n=>{var o;null==(o=t.onMouseOver)||o.call(t,n),n.defaultPrevented||M({type:c.optionHover,option:e,event:n,props:E})},I=e=>t=>{var n;if(null==(n=e.onKeyDown)||n.call(e,t),t.defaultPrevented)return;const o=["ArrowUp","ArrowDown","Home","End","PageUp","PageDown"];if("activeDescendant"===s&&o.push(" ","Enter"),o.includes(t.key)&&t.preventDefault(),M({type:c.keyDown,event:t,props:E}),1===t.key.length&&" "!==t.key){const e=k.current,n=t.key.toLowerCase(),o=performance.now();e.searchString.length>0&&e.lastTime&&o-e.lastTime>500?e.searchString=n:1===e.searchString.length&&n===e.searchString||(e.searchString+=n),e.lastTime=o,M({type:c.textNavigation,event:t,searchString:e.searchString,props:E})}},U=e=>{let t;const n=y.findIndex((t=>v(t,e)));var o;return t=h?(null!=(o=j)?o:[]).some((t=>null!=t&&v(e,t))):v(e,j),{selected:t,disabled:d(e,n),highlighted:A===n}},F=e=>{if("activeDescendant"!==s)return e.highlighted?e.disabled&&!r?-1:0:-1};return i.useDebugValue({highlightedOption:y[A],selectedOption:j}),{getRootProps:(e={})=>{return(0,o.Z)({},e,{"aria-activedescendant":"activeDescendant"===s&&null!=R?S(R,A):void 0,id:Z,onBlur:(t=e,e=>{var n,o;null==(n=t.onBlur)||n.call(t,e),e.defaultPrevented||null!=(o=D.current)&&o.contains(document.activeElement)||M({type:c.blur,event:e,props:E})}),onKeyDown:I(e),role:"listbox",tabIndex:"DOM"===s?-1:0,ref:C});var t},getOptionProps:(e,t={})=>{const n=U(e),r=y.findIndex((t=>v(t,e)));return(0,o.Z)({},t,{"aria-disabled":n.disabled||void 0,"aria-selected":n.selected,id:S(e,r),onClick:B(e,t),onPointerOver:W(e,t),role:"option",tabIndex:F(n)})},getOptionState:U,highlightedOption:null!=(n=y[A])?n:null,selectedOption:j,setSelectedValue:T,setHighlightedValue:H}}($);return i.useDebugValue({selectedOption:te,highlightedOption:ee,open:b}),{buttonActive:_,buttonFocusVisible:X,disabled:r,getButtonProps:(e={})=>(0,o.Z)({},z((0,o.Z)({},e,{onClick:I(e),onMouseDown:W(e),onKeyDown:U(e)})),{role:"combobox","aria-expanded":b,"aria-haspopup":"listbox","aria-controls":k}),getListboxProps:(e={})=>G((0,o.Z)({},e,{onBlur:q(e),onKeyUp:F(e)})),getOptionProps:(e,t={})=>J(e,(0,o.Z)({},t,{onClick:N(t)})),getOptionState:Q,open:b,value:R}};var S=n(78987),E=n(95754),D=n(32289),C=n(94780),k=n(49349),R=n(85893);const j=["autoFocus","children","component","defaultValue","defaultListboxOpen","disabled","getSerializedValue","listboxId","listboxOpen","name","onChange","onListboxOpenChange","optionStringifier","renderValue","slotProps","slots","value"];function M(e){var t;return null!=(t=null==e?void 0:e.label)?t:""}function A(e){return null==(null==e?void 0:e.value)?"":"string"==typeof e.value||"number"==typeof e.value?e.value:JSON.stringify(e.value)}const L=i.forwardRef((function(e,t){var n,c,p;const{autoFocus:d,children:f,component:h,defaultValue:v,defaultListboxOpen:g=!1,disabled:m,getSerializedValue:b=A,listboxId:y,listboxOpen:x,name:w,onChange:O,onListboxOpenChange:P,optionStringifier:L=V,renderValue:T,slotProps:H={},slots:B={},value:W}=e,I=(0,r.Z)(e,j),U=null!=T?T:M,[F,N]=i.useState([]),q=i.useMemo((()=>u(F)),[F]),[K,z]=(0,l.Z)({controlled:x,default:g,name:"SelectUnstyled",state:"listboxOpen"});i.useEffect((()=>{N(s(f))}),[f]);const[_,X]=i.useState(!1),Y=i.useRef(null),$=i.useRef(null),G=null!=(n=null!=h?h:B.root)?n:"button",J=null!=(c=B.listbox)?c:"ul",Q=null!=(p=B.popper)?p:E.Z,ee=i.useCallback((e=>{X(null!=e)}),[]),te=(0,a.Z)(t,Y,ee);i.useEffect((()=>{d&&Y.current.focus()}),[d]);const{buttonActive:ne,buttonFocusVisible:oe,disabled:re,getButtonProps:ie,getListboxProps:le,getOptionProps:ae,getOptionState:se,value:ue}=Z({buttonRef:te,defaultValue:v,disabled:m,listboxId:y,multiple:!1,onChange:O,onOpenChange:e=>{z(e),null==P||P(e)},open:K,options:q,optionStringifier:L,value:W}),ce=(0,o.Z)({},e,{active:ne,defaultListboxOpen:g,disabled:re,focusVisible:oe,open:K,renderValue:U,value:ue}),pe=function(e){const{active:t,disabled:n,open:o,focusVisible:r}=e,i={root:["root",n&&"disabled",r&&"focusVisible",t&&"active",o&&"expanded"],listbox:["listbox",n&&"disabled"],popper:["popper"]};return(0,C.Z)(i,k.l,{})}(ce),de=i.useMemo((()=>{var e;return null!=(e=q.find((e=>ue===e.value)))?e:null}),[q,ue]),fe=(0,S.Z)({elementType:G,getSlotProps:ie,externalSlotProps:H.root,externalForwardedProps:I,ownerState:ce,className:pe.root}),he=(0,S.Z)({elementType:J,getSlotProps:le,externalSlotProps:H.listbox,additionalProps:{ref:$},ownerState:ce,className:pe.listbox}),ve=(0,S.Z)({elementType:Q,externalSlotProps:H.popper,additionalProps:{anchorEl:Y.current,disablePortal:!0,open:K,placement:"bottom-start",role:void 0},ownerState:ce,className:pe.popper}),ge=i.useMemo((()=>({getOptionProps:ae,getOptionState:se,listboxRef:$})),[ae,se]);return(0,R.jsxs)(i.Fragment,{children:[(0,R.jsx)(G,(0,o.Z)({},fe,{children:U(de)})),_&&(0,R.jsx)(Q,(0,o.Z)({},ve,{children:(0,R.jsx)(J,(0,o.Z)({},he,{children:(0,R.jsx)(D.j.Provider,{value:ge,children:f})}))})),w&&(0,R.jsx)("input",{type:"hidden",name:w,value:b(de)})]})}))},32289:(e,t,n)=>{n.d(t,{j:()=>o});const o=n(67294).createContext(void 0)},49349:(e,t,n)=>{n.d(t,{Z:()=>i,l:()=>r});var o=n(34867);function r(e){return(0,o.Z)("MuiSelect",e)}const i=(0,n(1588).Z)("MuiSelect",["root","button","listbox","popper","active","expanded","disabled","focusVisible"])},13264:(e,t,n)=>{n.d(t,{Z:()=>o});const o=(0,n(91901).ZP)()},16600:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(67294);const r="undefined"!=typeof window?o.useLayoutEffect:o.useEffect}}]);