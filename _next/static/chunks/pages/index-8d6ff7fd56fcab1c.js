(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3678)}])},8418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var o,i=(o=t(7294))&&o.__esModule?o:{default:o},a=t(6273),c=t(387),l=t(7190);var u={};function s(e,n,t,r){if(e&&a.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=c.useRouter(),f=i.default.useMemo((function(){var n=r(a.resolveHref(o,e.href,!0),2),t=n[0],i=n[1];return{href:t,as:e.as?a.resolveHref(o,e.as):i||t}}),[o,e.href,e.as]),d=f.href,v=f.as,h=e.children,p=e.replace,y=e.shallow,m=e.scroll,_=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var b=(n=i.default.Children.only(h))&&"object"===typeof n&&n.ref,w=r(l.useIntersection({rootMargin:"200px"}),2),x=w[0],E=w[1],j=i.default.useCallback((function(e){x(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,x]);i.default.useEffect((function(){var e=E&&t&&a.isLocalURL(d),n="undefined"!==typeof _?_:o&&o.locale,r=u[d+"%"+v+(n?"%"+n:"")];e&&!r&&s(o,d,v,{locale:n})}),[v,d,E,_,t,o]);var g={ref:j,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,i,c,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),n[o?"replace":"push"](t,r,{shallow:i,locale:l,scroll:c}))}(e,o,d,v,p,y,m,_)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),a.isLocalURL(d)&&s(o,d,v,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var L="undefined"!==typeof _?_:o&&o.locale,k=o&&o.isLocaleDomain&&a.getDomainLocale(v,L,o&&o.locales,o&&o.domainLocales);g.href=k||a.addBasePath(a.addLocale(v,L,o&&o.defaultLocale))}return i.default.cloneElement(n,g)};n.default=f},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,l=o.useRef(),u=r(o.useState(!1),2),s=u[0],f=u[1],d=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),t||s||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,i=r.observer,a=r.elements;return a.set(e,n),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,s]);return o.useEffect((function(){if(!a&&!s){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=t(7294),i=t(9311),a="undefined"!==typeof IntersectionObserver;var c=new Map},3678:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var r=t(5893),o=t(7294),i=t(9008),a=t(1664),c=t(214),l=t.n(c);function u(){var e=function(){document.getElementById("intro").style.display="none"};return(0,o.useEffect)((function(){return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}})),(0,r.jsxs)("div",{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"nicole lindner"}),(0,r.jsx)("meta",{name:"description",content:"Nicole Lindner"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:l().main,children:[(0,r.jsx)("div",{id:"intro",className:l().intro,onClick:e,children:(0,r.jsx)("h1",{className:l().title,children:"nicole lindner"})}),(0,r.jsx)("div",{className:l().home,children:(0,r.jsxs)("nav",{className:l().nav,children:[(0,r.jsx)(a.default,{href:"/about",children:"About"}),(0,r.jsx)(a.default,{href:"/about",children:"Conversations"}),(0,r.jsx)(a.default,{href:"/exhibitions",children:"Exhibitions"}),(0,r.jsx)(a.default,{href:"/projects",children:"Projects"})]})})]})]})}},214:function(e){e.exports={main:"Home_main__nLjiQ",intro:"Home_intro__S0DUI",title:"Home_title__T09hD",home:"Home_home__V_V4i",nav:"Home_nav__vYbrQ"}},9008:function(e,n,t){e.exports=t(5443)},1664:function(e,n,t){e.exports=t(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);