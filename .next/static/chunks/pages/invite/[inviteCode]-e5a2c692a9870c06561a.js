(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[48],{7946:function(e,n,r){"use strict";r.d(n,{Z:function(){return c}});var t=r(6010),s=r(628),o=r.n(s),i=r(5893);function c(e){var n=e.className,r=(0,t.Z)(o().wrap,n);return(0,i.jsx)("div",{className:r,children:(0,i.jsx)("div",{className:o().spinner})})}},2087:function(e,n,r){"use strict";var t=r(6010),s=r(3577),o=r(8087),i=r(5223),c=r(1120),a=r(1317),u=r(5893);n.Z=function(e){var n=e.type,r=void 0===n?"default":n,l=e.children,f=e.className,d=e.icon,p=e.onClose,v={success:(0,u.jsx)(a.Z,{className:"flex text-success-500",icon:(0,u.jsx)(s.Z,{size:14})}),info:(0,u.jsx)(a.Z,{className:"flex text-success-500",icon:(0,u.jsx)(c.Z,{size:14})}),error:(0,u.jsx)(a.Z,{className:"flex text-primary-500",icon:(0,u.jsx)(i.Z,{size:14})}),warning:(0,u.jsx)(a.Z,{className:"flex text-warning-500",icon:(0,u.jsx)(o.Z,{size:14})})},h=null!==d&&void 0!==d?d:v[r],j=(0,t.Z)("ui-message",{"ui-message--success":"success"===r,"ui-message--error":"error"===r,"ui-message--warning":"warning"===r},f);return(0,u.jsxs)("div",{className:j,children:[h&&(0,u.jsx)("div",{className:"ui-message__icon",children:h}),(0,u.jsx)("div",{className:"ui-message__content",children:l}),p&&(0,u.jsx)("div",{className:"ui-message__close",onClick:p,children:(0,u.jsx)(i.Z,{size:20})})]})}},1120:function(e,n,r){"use strict";r.d(n,{Z:function(){return u}});var t=r(4942),s=r(5987),o=r(5893),i=["size"];function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e){var n=e.size,r=void 0===n?14:n,t=(0,s.Z)(e,i);return(0,o.jsxs)("svg",a(a({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,fill:"none",viewBox:"0 0 32 32"},t),{},{children:[(0,o.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",d:"M16 28c6.628 0 12-5.373 12-12S22.628 4 16 4C9.373 4 4 9.373 4 16s5.373 12 12 12z"}),(0,o.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",d:"M15 15h1v7h1"}),(0,o.jsx)("path",{fill:"currentColor",d:"M16 12a2 2 0 100-4 2 2 0 000 4z"})]}))}},8087:function(e,n,r){"use strict";r.d(n,{Z:function(){return u}});var t=r(4942),s=r(5987),o=r(5893),i=["size"];function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e){var n=e.size,r=void 0===n?14:n,t=(0,s.Z)(e,i);return(0,o.jsxs)("svg",a(a({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,fill:"none",viewBox:"0 0 32 32"},t),{},{children:[(0,o.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",d:"M16 12v5M14.27 4.998l-10.998 19a2 2 0 001.731 3.001h21.994a2 2 0 001.731-3.002L17.731 4.998a2 2 0 00-3.462 0v0z"}),(0,o.jsx)("path",{fill:"currentColor",d:"M16 24a2 2 0 100-4 2 2 0 000 4z"})]}))}},2167:function(e,n,r){"use strict";var t=r(3038);n.default=void 0;var s,o=(s=r(7294))&&s.__esModule?s:{default:s},i=r(1063),c=r(4651),a=r(7426);var u={};function l(e,n,r,t){if(e&&i.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var s=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;u[n+"%"+r+(s?"%"+s:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,s=c.useRouter(),f=o.default.useMemo((function(){var n=i.resolveHref(s,e.href,!0),r=t(n,2),o=r[0],c=r[1];return{href:o,as:e.as?i.resolveHref(s,e.as):c||o}}),[s,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,j=e.shallow,g=e.scroll,m=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var x=(n=o.default.Children.only(v))&&"object"===typeof n&&n.ref,y=a.useIntersection({rootMargin:"200px"}),b=t(y,2),w=b[0],O=b[1],_=o.default.useCallback((function(e){w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,w]);o.default.useEffect((function(){var e=O&&r&&i.isLocalURL(d),n="undefined"!==typeof m?m:s&&s.locale,t=u[d+"%"+p+(n?"%"+n:"")];e&&!t&&l(s,d,p,{locale:n})}),[p,d,O,m,r,s]);var k={ref:_,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,s,o,c,a){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==c&&t.indexOf("#")>=0&&(c=!1),n[s?"replace":"push"](r,t,{shallow:o,locale:a,scroll:c}))}(e,s,d,p,h,j,g,m)},onMouseEnter:function(e){i.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),l(s,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var N="undefined"!==typeof m?m:s&&s.locale,P=s&&s.isLocaleDomain&&i.getDomainLocale(p,N,s&&s.locales,s&&s.domainLocales);k.href=P||i.addBasePath(i.addLocale(p,N,s&&s.defaultLocale))}return o.default.cloneElement(n,k)};n.default=f},7426:function(e,n,r){"use strict";var t=r(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!i,a=s.useRef(),u=s.useState(!1),l=t(u,2),f=l[0],d=l[1],p=s.useCallback((function(e){a.current&&(a.current(),a.current=void 0),r||f||e&&e.tagName&&(a.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=c.get(n);if(r)return r;var t=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return c.set(n,r={id:n,observer:s,elements:t}),r}(r),s=t.id,o=t.observer,i=t.elements;return i.set(e,n),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),c.delete(s))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,f]);return s.useEffect((function(){if(!i&&!f){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),[p,f]};var s=r(7294),o=r(3447),i="undefined"!==typeof IntersectionObserver;var c=new Map},4499:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return f}});var t=r(7946),s=r(2087),o=r(2982),i=r(7068),c=r(1163),a=r(7294),u=r(1664),l=r(5893);function f(){var e=(0,i.a)(),n=e.user,r=e.isLoading,f=(0,a.useState)(!0),d=f[0],p=f[1],v=(0,a.useState)(null),h=v[0],j=v[1],g=(0,c.useRouter)(),m=g.query.inviteCode;return(0,a.useEffect)((function(){d||n?!r&&n&&m&&o.Z.joinTeamByInvite(m).then((function(e){g.push("/my-account/teams/".concat(e.id))})).catch((function(e){return j(e.message)})).finally((function(){return p(!1)})):g.push("/signin")}),[n,d,m]),(0,l.jsxs)("div",{className:"min-h-screen flex justify-center items-center",children:[(r||d)&&(0,l.jsx)(t.Z,{}),h&&(0,l.jsxs)("div",{children:[(0,l.jsx)(s.Z,{children:h}),(0,l.jsx)("div",{className:"text-center mt-2",children:(0,l.jsx)(u.default,{href:"/",children:(0,l.jsx)("a",{className:"text-primary-500 underline",children:"Home page"})})})]})]})}},2679:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/invite/[inviteCode]",function(){return r(4499)}])},628:function(e){e.exports={wrap:"spinner_wrap__2GU6t",spinner:"spinner_spinner__1CPhb"}},1664:function(e,n,r){e.exports=r(2167)}},function(e){e.O(0,[9774,2888,179],(function(){return n=2679,e(e.s=n);var n}));var n=e.O();_N_E=n}]);