(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3014],{5318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},8633:function(e,t,n){"use strict";var r=n(4155),a=n(5318),o=n(8);t.zB=S,t.w7=O;var u=a(n(7757)),c=a(n(9713)),s=a(n(8926)),i=a(n(3038)),l=n(7294),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!==typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var c=a?Object.getOwnPropertyDescriptor(e,u):null;c&&(c.get||c.set)?Object.defineProperty(r,u,c):r[u]=e[u]}r.default=e,n&&n.set(e,r);return r}(n(8016)),d=a(n(5831));function p(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,c.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={baseUrl:(0,d.default)(r.env.NEXTAUTH_URL||r.env.VERCEL_URL).baseUrl,basePath:(0,d.default)(r.env.NEXTAUTH_URL).basePath,baseUrlServer:(0,d.default)(r.env.NEXTAUTH_URL_INTERNAL||r.env.NEXTAUTH_URL||r.env.VERCEL_URL).baseUrl,basePathServer:(0,d.default)(r.env.NEXTAUTH_URL_INTERNAL||r.env.NEXTAUTH_URL).basePath,keepAlive:0,clientMaxAge:0,_clientLastSync:0,_clientSyncTimer:null,_eventListenersAdded:!1,_clientSession:void 0,_getSession:function(){}},g=(0,f.proxyLogger)(f.default,b.basePath),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"nextauth.message";return{receive:function(t){"undefined"!==typeof window&&window.addEventListener("storage",function(){var n=(0,s.default)(u.default.mark((function n(r){var a;return u.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.key===e){n.next=2;break}return n.abrupt("return");case 2:if("session"===(null===(a=JSON.parse(r.newValue))||void 0===a?void 0:a.event)&&null!==a&&void 0!==a&&a.data){n.next=5;break}return n.abrupt("return");case 5:t(a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())},post:function(t){"undefined"!==typeof localStorage&&localStorage.setItem(e,JSON.stringify(h(h({},t),{},{timestamp:A()})))}}}();"undefined"===typeof window||b._eventListenersAdded||(b._eventListenersAdded=!0,w.receive((function(){return b._getSession({event:"storage"})})),document.addEventListener("visibilitychange",(function(){!document.hidden&&b._getSession({event:"visibilitychange"})}),!1));var y=(0,l.createContext)();function x(e){var t=(0,l.useContext)(y);return t||function(e){var t=(0,l.useState)(e),n=(0,i.default)(t,2),r=n[0],a=n[1],o=(0,l.useState)(!r),c=(0,i.default)(o,2),f=c[0],d=c[1];return(0,l.useEffect)((function(){b._getSession=(0,s.default)(u.default.mark((function e(){var t,n,r,o,c,s,i,l,f,p,v=arguments;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=v.length>0&&void 0!==v[0]?v[0]:{},n=t.event,r=void 0===n?null:n,e.prev=1,o=null!==r,c="storage"===r,s=b.clientMaxAge,i=parseInt(b._clientLastSync),l=A(),f=b._clientSession,c||void 0===f){e.next=19;break}if(0!==s||!0===o){e.next=13;break}return e.abrupt("return");case 13:if(!(s>0&&null===f)){e.next=17;break}return e.abrupt("return");case 17:if(!(s>0&&l<i+s)){e.next=19;break}return e.abrupt("return");case 19:return void 0===f&&(b._clientSession=null),b._clientLastSync=A(),e.next=23,k({triggerEvent:!c});case 23:p=e.sent,b._clientSession=p,a(p),d(!1),e.next=33;break;case 29:e.prev=29,e.t0=e.catch(1),g.error("CLIENT_USE_SESSION_ERROR",e.t0),d(!1);case 33:case"end":return e.stop()}}),e,null,[[1,29]])}))),b._getSession()})),[r,f]}(e)}function k(e){return _.apply(this,arguments)}function _(){return(_=(0,s.default)(u.default.mark((function e(t){var n,r;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("session",t);case 2:return r=e.sent,(null===(n=null===t||void 0===t?void 0:t.triggerEvent)||void 0===n||n)&&w.post({event:"session",data:{trigger:"getSession"}}),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return L.apply(this,arguments)}function L(){return(L=(0,s.default)(u.default.mark((function e(t){var n;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("csrf",t);case 2:if(e.t1=n=e.sent,e.t0=null===e.t1,e.t0){e.next=6;break}e.t0=void 0===n;case 6:if(!e.t0){e.next=10;break}e.t2=void 0,e.next=11;break;case 10:e.t2=n.csrfToken;case 11:return e.abrupt("return",e.t2);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){return E.apply(this,arguments)}function E(){return(E=(0,s.default)(u.default.mark((function e(){return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("providers");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return T.apply(this,arguments)}function T(){return(T=(0,s.default)(u.default.mark((function e(t){var n,r,a,o,c,s,i,l,f,d,p,v,g,w,y,x,k,_,L=arguments;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=L.length>1&&void 0!==L[1]?L[1]:{},r=L.length>2&&void 0!==L[2]?L[2]:{},a=n.callbackUrl,o=void 0===a?window.location.href:a,c=n.redirect,s=void 0===c||c,i=N(),e.next=6,U();case 6:if(l=e.sent){e.next=9;break}return e.abrupt("return",window.location.replace("".concat(i,"/error")));case 9:if(t in l){e.next=11;break}return e.abrupt("return",window.location.replace("".concat(i,"/signin?callbackUrl=").concat(encodeURIComponent(o))));case 11:return f="credentials"===l[t].type,d="email"===l[t].type,p=f||d,v=f?"".concat(i,"/callback/").concat(t):"".concat(i,"/signin/").concat(t),g="".concat(v,"?").concat(new URLSearchParams(r)),e.t0=fetch,e.t1=g,e.t2={"Content-Type":"application/x-www-form-urlencoded"},e.t3=URLSearchParams,e.t4=h,e.t5=h({},n),e.t6={},e.next=25,m();case 25:return e.t7=e.sent,e.t8=o,e.t9={csrfToken:e.t7,callbackUrl:e.t8,json:!0},e.t10=(0,e.t4)(e.t5,e.t6,e.t9),e.t11=new e.t3(e.t10),e.t12={method:"post",headers:e.t2,body:e.t11},e.next=33,(0,e.t0)(e.t1,e.t12);case 33:return w=e.sent,e.next=36,w.json();case 36:if(y=e.sent,!s&&p){e.next=42;break}return k=null!==(x=y.url)&&void 0!==x?x:o,window.location.replace(k),k.includes("#")&&window.location.reload(),e.abrupt("return");case 42:if(_=new URL(y.url).searchParams.get("error"),!w.ok){e.next=46;break}return e.next=46,b._getSession({event:"storage"});case 46:return e.abrupt("return",{error:_,status:w.status,ok:w.ok,url:_?null:y.url});case 47:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return P.apply(this,arguments)}function P(){return(P=(0,s.default)(u.default.mark((function e(){var t,n,r,a,o,c,s,i,l,f,d,p=arguments;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.length>0&&void 0!==p[0]?p[0]:{},n=t.callbackUrl,r=void 0===n?window.location.href:n,a=t.redirect,o=void 0===a||a,c=N(),e.t0={"Content-Type":"application/x-www-form-urlencoded"},e.t1=URLSearchParams,e.next=7,m();case 7:return e.t2=e.sent,e.t3=r,e.t4={csrfToken:e.t2,callbackUrl:e.t3,json:!0},e.t5=new e.t1(e.t4),s={method:"post",headers:e.t0,body:e.t5},e.next=14,fetch("".concat(c,"/signout"),s);case 14:return i=e.sent,e.next=17,i.json();case 17:if(l=e.sent,w.post({event:"session",data:{trigger:"signout"}}),!o){e.next=24;break}return d=null!==(f=l.url)&&void 0!==f?f:r,window.location.replace(d),d.includes("#")&&window.location.reload(),e.abrupt("return");case 24:return e.next=26,b._getSession({event:"storage"});case 26:return e.abrupt("return",l);case 27:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.baseUrl,n=e.basePath,r=e.clientMaxAge,a=e.keepAlive;if(t&&(b.baseUrl=t),n&&(b.basePath=n),r&&(b.clientMaxAge=r),a){if(b.keepAlive=a,"undefined"===typeof window)return;null!==b._clientSyncTimer&&clearTimeout(b._clientSyncTimer),b._clientSyncTimer=setTimeout((0,s.default)(u.default.mark((function e(){return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b._clientSession){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,b._getSession({event:"timer"});case 4:case"end":return e.stop()}}),e)}))),1e3*a)}}function j(e){var t=e.children,n=e.session;return R(e.options),(0,l.createElement)(y.Provider,{value:x(n)},t)}function C(e){return M.apply(this,arguments)}function M(){return(M=(0,s.default)(u.default.mark((function e(t){var n,r,a,o,c,s,i,l,f=arguments;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.length>1&&void 0!==f[1]?f[1]:{},r=n.ctx,a=n.req,o=void 0===a?null===r||void 0===r?void 0:r.req:a,e.prev=1,e.next=4,N();case 4:return c=e.sent,s=o?{headers:{cookie:o.headers.cookie}}:{},e.next=8,fetch("".concat(c,"/").concat(t),s);case 8:return i=e.sent,e.next=11,i.json();case 11:if(l=e.sent,i.ok){e.next=14;break}throw l;case 14:return e.abrupt("return",Object.keys(l).length>0?l:null);case 17:return e.prev=17,e.t0=e.catch(1),g.error("CLIENT_FETCH_ERROR",t,e.t0),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[1,17]])})))).apply(this,arguments)}function N(){return"undefined"===typeof window?(r.env.NEXTAUTH_URL||g.warn("NEXTAUTH_URL","NEXTAUTH_URL environment variable not set"),"".concat(b.baseUrlServer).concat(b.basePathServer)):b.basePath}function A(){return Math.floor(Date.now()/1e3)}},8016:function(e,t,n){"use strict";var r=n(4155);Object.defineProperty(t,"__esModule",{value:!0}),t.setLogger=function(e={}){e.error&&(a.error=e.error);e.warn&&(a.warn=e.warn);e.debug&&(a.debug=e.debug)},t.proxyLogger=function(e=a,t){try{if("undefined"===typeof window)return e;const n={};for(const r in e)n[r]=(e,...n)=>{a[r](e,...n);const o=`${t}/_log`,u=new URLSearchParams({level:r,code:e,message:JSON.stringify(n.map((e=>e instanceof Error?{name:e.name,message:e.message,stack:e.stack}:e)))});return navigator.sendBeacon?navigator.sendBeacon(o,u):fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:u})};return n}catch(n){return a}},t.default=void 0;const a={error(e,...t){console.error(`[next-auth][error][${e.toLowerCase()}]`,`\nhttps://next-auth.js.org/errors#${e.toLowerCase()}`,...t)},warn(e,...t){console.warn(`[next-auth][warn][${e.toLowerCase()}]`,`\nhttps://next-auth.js.org/warnings#${e.toLowerCase()}`,...t)},debug(e,...t){var n,a;null!==(n=r)&&void 0!==r&&null!==(a=n.env)&&void 0!==a&&a._NEXTAUTH_DEBUG&&console.log(`[next-auth][debug][${e.toLowerCase()}]`,...t)}};var o=a;t.default=o},5831:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t="http://localhost:3000",n="/api/auth";e||(e=`${t}/api/auth`);const r=e.startsWith("http:")?"http":"https";e=e.replace(/^https?:\/\//,"").replace(/\/$/,"");const[a,...o]=e.split("/"),u=a?`${r}://${a}`:t,c=o.length>0?`/${o.join("/")}`:n;return{baseUrl:u,basePath:c}}},2167:function(e,t,n){"use strict";var r=n(3038);t.default=void 0;var a,o=(a=n(7294))&&a.__esModule?a:{default:a},u=n(1063),c=n(4651),s=n(7426);var i={};function l(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,a=c.useRouter(),f=o.default.useMemo((function(){var t=u.resolveHref(a,e.href,!0),n=r(t,2),o=n[0],c=n[1];return{href:o,as:e.as?u.resolveHref(a,e.as):c||o}}),[a,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,b=e.shallow,g=e.scroll,w=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var y=(t=o.default.Children.only(v))&&"object"===typeof t&&t.ref,x=s.useIntersection({rootMargin:"200px"}),k=r(x,2),_=k[0],m=k[1],L=o.default.useCallback((function(e){_(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,_]);o.default.useEffect((function(){var e=m&&n&&u.isLocalURL(d),t="undefined"!==typeof w?w:a&&a.locale,r=i[d+"%"+p+(t?"%"+t:"")];e&&!r&&l(a,d,p,{locale:t})}),[p,d,m,w,n,a]);var U={ref:L,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[a?"replace":"push"](n,r,{shallow:o,locale:s,scroll:c}))}(e,a,d,p,h,b,g,w)},onMouseEnter:function(e){u.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(a,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof w?w:a&&a.locale,S=a&&a.isLocaleDomain&&u.getDomainLocale(p,E,a&&a.locales,a&&a.domainLocales);U.href=S||u.addBasePath(u.addLocale(p,E,a&&a.defaultLocale))}return o.default.cloneElement(t,U)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,s=a.useRef(),i=a.useState(!1),l=r(i,2),f=l[0],d=l[1],p=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,u=r.elements;return u.set(e,t),o.observe(e),function(){u.delete(e),o.unobserve(e),0===u.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return a.useEffect((function(){if(!u&&!f){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),[p,f]};var a=n(7294),o=n(3447),u="undefined"!==typeof IntersectionObserver;var c=new Map},1664:function(e,t,n){e.exports=n(2167)}}]);