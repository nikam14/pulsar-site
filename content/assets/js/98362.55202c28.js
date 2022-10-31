"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[98362],{95286:(e,t,n)=>{n.d(t,{Z:()=>s});var l=n(87462),r=n(67294),o=n(99962),u=n(30067),a=n(30437);function s(e){const{disabled:t=!1,focusableWhenDisabled:n,href:s,ref:c,tabIndex:i,to:d,type:f}=e,v=r.useRef(),[y,p]=r.useState(!1),{isFocusVisibleRef:b,onFocus:m,onBlur:Z,ref:g}=(0,o.Z)(),[w,h]=r.useState(!1);t&&!n&&w&&h(!1),r.useEffect((()=>{b.current=w}),[w,b]);const[k,T]=r.useState(""),N=e=>t=>{var n;w&&t.preventDefault(),null==(n=e.onMouseLeave)||n.call(e,t)},S=e=>t=>{var n;Z(t),!1===b.current&&h(!1),null==(n=e.onBlur)||n.call(e,t)},E=e=>t=>{var n,l;(v.current||(v.current=t.currentTarget),m(t),!0===b.current)&&(h(!0),null==(l=e.onFocusVisible)||l.call(e,t));null==(n=e.onFocus)||n.call(e,t)},P=()=>{const e=v.current;return"BUTTON"===k||"INPUT"===k&&["button","submit","reset"].includes(null==e?void 0:e.type)||"A"===k&&(null==e?void 0:e.href)},x=e=>n=>{var l;t||(null==(l=e.onClick)||l.call(e,n))},C=e=>n=>{var l;n.target!==n.currentTarget||t||p(!0),null==(l=e.onMouseDown)||l.call(e,n)},D=e=>t=>{var n;t.target===t.currentTarget&&p(!1),null==(n=e.onMouseUp)||n.call(e,t)},F=e=>n=>{var l,r;(null==(l=e.onKeyDown)||l.call(e,n),n.defaultPrevented)||(n.target!==n.currentTarget||P()||" "!==n.key||n.preventDefault(),n.target!==n.currentTarget||" "!==n.key||t||p(!0),n.target!==n.currentTarget||P()||"Enter"!==n.key||t||(null==(r=e.onClick)||r.call(e,n),n.preventDefault()))},R=e=>n=>{var l,r;(n.target===n.currentTarget&&p(!1),null==(l=e.onKeyUp)||l.call(e,n),n.target!==n.currentTarget||P()||t||" "!==n.key||n.defaultPrevented)||(null==(r=e.onClick)||r.call(e,n))},O=r.useCallback((e=>{var t;T(null!=(t=null==e?void 0:e.tagName)?t:"")}),[]),U=(0,u.Z)(O,c,g,v),K={};"BUTTON"===k?(K.type=null!=f?f:"button",n?K["aria-disabled"]=t:K.disabled=t):""!==k&&(s||d||(K.role="button",K.tabIndex=null!=i?i:0),t&&(K["aria-disabled"]=t,K.tabIndex=n?null!=i?i:0:-1));return{getRootProps:(t={})=>{const n=(0,a.Z)(e),r=(0,l.Z)({},n,t);return delete r.onFocusVisible,(0,l.Z)({type:f},r,K,{onBlur:S(r),onClick:x(r),onFocus:E(r),onKeyDown:F(r),onKeyUp:R(r),onMouseDown:C(r),onMouseLeave:N(r),onMouseUp:D(r),ref:U})},focusVisible:w,setFocusVisible:h,disabled:t,active:y}}},30437:(e,t,n)=>{function l(e,t=[]){if(void 0===e)return{};const n={};return Object.keys(e).filter((n=>n.match(/^on[A-Z]/)&&"function"==typeof e[n]&&!t.includes(n))).forEach((t=>{n[t]=e[t]})),n}n.d(t,{Z:()=>l})},78987:(e,t,n)=>{n.d(t,{Z:()=>d});var l=n(87462),r=n(63366),o=n(30067);const u=function(e){return"string"==typeof e};var a=n(86010),s=n(30437);function c(e){if(void 0===e)return{};const t={};return Object.keys(e).filter((t=>!(t.match(/^on[A-Z]/)&&"function"==typeof e[t]))).forEach((n=>{t[n]=e[n]})),t}const i=["elementType","externalSlotProps","ownerState"];function d(e){var t;const{elementType:n,externalSlotProps:d,ownerState:f}=e,v=(0,r.Z)(e,i),y=function(e,t){return"function"==typeof e?e(t):e}(d,f),{props:p,internalRef:b}=function(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:o,className:u}=e;if(!t){const e=(0,a.Z)(null==o?void 0:o.className,null==r?void 0:r.className,u,null==n?void 0:n.className),t=(0,l.Z)({},null==n?void 0:n.style,null==o?void 0:o.style,null==r?void 0:r.style),s=(0,l.Z)({},n,o,r);return e.length>0&&(s.className=e),Object.keys(t).length>0&&(s.style=t),{props:s,internalRef:void 0}}const i=(0,s.Z)((0,l.Z)({},o,r)),d=c(r),f=c(o),v=t(i),y=(0,a.Z)(null==v?void 0:v.className,null==n?void 0:n.className,u,null==o?void 0:o.className,null==r?void 0:r.className),p=(0,l.Z)({},null==v?void 0:v.style,null==n?void 0:n.style,null==o?void 0:o.style,null==r?void 0:r.style),b=(0,l.Z)({},v,n,f,d);return y.length>0&&(b.className=y),Object.keys(p).length>0&&(b.style=p),{props:b,internalRef:v.ref}}((0,l.Z)({},v,{externalSlotProps:y})),m=(0,o.Z)(b,null==y?void 0:y.ref,null==(t=e.additionalProps)?void 0:t.ref),Z=function(e,t,n){return u(e)?t:(0,l.Z)({},t,{ownerState:(0,l.Z)({},t.ownerState,n)})}(n,(0,l.Z)({},p,{ref:m}),f);return Z}},57094:(e,t,n)=>{function l(e){return e&&e.ownerDocument||document}n.d(t,{Z:()=>l})},7960:(e,t,n)=>{function l(e,t){"function"==typeof e?e(t):e&&(e.current=t)}n.d(t,{Z:()=>l})},8925:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(67294);function r({controlled:e,default:t,name:n,state:r="value"}){const{current:o}=l.useRef(void 0!==e),[u,a]=l.useState(t);return[o?e:u,l.useCallback((e=>{o||a(e)}),[])]}},30067:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(67294),r=n(7960);function o(...e){return l.useMemo((()=>e.every((e=>null==e))?null:t=>{e.forEach((e=>{(0,r.Z)(e,t)}))}),e)}},57579:(e,t,n)=>{var l;n.d(t,{Z:()=>a});var r=n(67294);let o=0;const u=(l||(l=n.t(r,2))).useId;function a(e){if(void 0!==u){const t=u();return null!=e?e:t}return function(e){const[t,n]=r.useState(e),l=e||t;return r.useEffect((()=>{null==t&&(o+=1,n(`mui-${o}`))}),[t]),l}(e)}},99962:(e,t,n)=>{n.d(t,{Z:()=>f});var l=n(67294);let r,o=!0,u=!1;const a={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function s(e){e.metaKey||e.altKey||e.ctrlKey||(o=!0)}function c(){o=!1}function i(){"hidden"===this.visibilityState&&u&&(o=!0)}function d(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(n){}return o||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!a[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}function f(){const e=l.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",s,!0),t.addEventListener("mousedown",c,!0),t.addEventListener("pointerdown",c,!0),t.addEventListener("touchstart",c,!0),t.addEventListener("visibilitychange",i,!0))}),[]),t=l.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!d(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(u=!0,window.clearTimeout(r),r=window.setTimeout((()=>{u=!1}),100),t.current=!1,!0)},ref:e}}}}]);