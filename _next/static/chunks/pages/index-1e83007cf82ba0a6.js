(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(1960)}])},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a=(i=r(7294))&&i.__esModule?i:{default:i},c=r(1003),l=r(880),s=r(9246);function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f={};function d(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[t+"%"+r+(o?"%"+o:"")]=!0}}var _=a.default.forwardRef((function(e,t){var r,n=e.legacyBehavior,i=void 0===n?!0!==Boolean(!1):n,_=e.href,h=e.as,v=e.children,p=e.prefetch,m=e.passHref,x=e.replace,y=e.shallow,j=e.scroll,b=e.locale,g=e.onClick,N=e.onMouseEnter,A=u(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=v,i&&"string"===typeof r&&(r=a.default.createElement("a",null,r));var k,P=!1!==p,w=l.useRouter(),C=a.default.useMemo((function(){var e=o(c.resolveHref(w,_,!0),2),t=e[0],r=e[1];return{href:t,as:h?c.resolveHref(w,h):r||t}}),[w,_,h]),S=C.href,M=C.as,E=a.default.useRef(S),O=a.default.useRef(M);i&&(k=a.default.Children.only(r));var I=i?k&&"object"===typeof k&&k.ref:t,L=o(s.useIntersection({rootMargin:"200px"}),3),R=L[0],W=L[1],H=L[2],T=a.default.useCallback((function(e){O.current===M&&E.current===S||(H(),O.current=M,E.current=S),R(e),I&&("function"===typeof I?I(e):"object"===typeof I&&(I.current=e))}),[M,I,S,H,R]);a.default.useEffect((function(){var e=W&&P&&c.isLocalURL(S),t="undefined"!==typeof b?b:w&&w.locale,r=f[S+"%"+M+(t?"%"+t:"")];e&&!r&&d(w,S,M,{locale:t})}),[M,S,W,b,P,w]);var B={ref:T,onClick:function(e){i||"function"!==typeof g||g(e),i&&k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,i,a,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:i,locale:l,scroll:a}))}(e,w,S,M,x,y,j,b)},onMouseEnter:function(e){i||"function"!==typeof N||N(e),i&&k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),c.isLocalURL(S)&&d(w,S,M,{priority:!0})}};if(!i||m||"a"===k.type&&!("href"in k.props)){var U="undefined"!==typeof b?b:w&&w.locale,K=w&&w.isLocaleDomain&&c.getDomainLocale(M,U,w&&w.locales,w&&w.domainLocales);B.href=K||c.addBasePath(c.addLocale(M,U,w&&w.defaultLocale))}return i?a.default.cloneElement(k,B):a.default.createElement("a",Object.assign({},A,B),r)}));t.default=_,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!c,u=i.useRef(),f=o(i.useState(!1),2),d=f[0],_=f[1],h=o(i.useState(t?t.current:null),2),v=h[0],p=h[1],m=i.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||d||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=s.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=l.get(n):(t=l.get(r),s.push(r));if(t)return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(r,t={id:r,observer:i,elements:o}),t}(r),o=n.id,i=n.observer,a=n.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),l.delete(o);var t=s.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&_(e)}),{root:v,rootMargin:r}))}),[n,v,r,d]),x=i.useCallback((function(){_(!1)}),[]);return i.useEffect((function(){if(!c&&!d){var e=a.requestIdleCallback((function(){return _(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),i.useEffect((function(){t&&p(t.current)}),[t]),[m,d,x]};var i=r(7294),a=r(4686),c="undefined"!==typeof IntersectionObserver;var l=new Map,s=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},1960:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return N}});var n=r(5893);function o(e){var t,r,n="";if("string"===typeof e||"number"===typeof e)n+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=o(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function i(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=o(e))&&(n&&(n+=" "),n+=t);return n}var a=r(1664),c=r.n(a),l=r(4957),s=r.n(l);function u(e){var t=e.toMainClick,r=e.toAboutClick,o=e.toProjectsClick;return(0,n.jsxs)("div",{className:i(s().root),children:[(0,n.jsx)("div",{className:i(s().icon)}),(0,n.jsxs)("div",{className:i(s().card),children:[(0,n.jsx)("div",{className:i(s().card_name),children:"\u0421\u0442\u0430\u043d\u0438\u0441\u043b\u0430\u0432 \u0424\u0430\u0442\u044c\u044f\u043d\u043e\u0432"}),(0,n.jsx)("div",{className:i(s().card_status),children:"Front-end \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a"})]}),(0,n.jsxs)("div",{className:i(s().menu),children:[(0,n.jsx)("div",{className:i(s().menu_item),onClick:t,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),(0,n.jsx)("div",{className:i(s().menu_item),onClick:r,children:"\u0411\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u044f"}),(0,n.jsx)("div",{className:i(s().menu_item),onClick:o,children:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b"}),(0,n.jsx)("div",{className:i(s().menu_item),children:(0,n.jsx)(c(),{href:"https://github.com/AintInsane",children:"GitHub"})})]})]})}var f=r(4300),d=r.n(f),_=r(7294),h=r(319),v=r.n(h);function p(){return(0,n.jsx)("div",{className:i(v().root),children:(0,n.jsx)("div",{className:i(v().overlay),children:(0,n.jsxs)("div",{className:i(v().overlay_text),children:[(0,n.jsx)("a",{style:{color:"red"},children:"\u0418\u0429\u0423"})," \u0420\u0410\u0411\u041e\u0422\u0423"]})})})}var m=r(4709),x=r.n(m);function y(e){return(0,n.jsx)("div",{className:i(x().root),children:(0,n.jsxs)("div",{className:i(x().overlay),children:[(0,n.jsx)("div",{className:i(x().About_title),children:"\u0411\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u044f"}),(0,n.jsxs)("div",{className:i(x().sectionWithPhoto),children:[(0,n.jsx)("div",{className:i(x().sectionWithPhoto_image)}),(0,n.jsxs)("div",{className:i(x().sectionWithPhoto_text),children:[(0,n.jsx)("div",{className:i(x().sectionWithPhoto_text_title),children:"\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435. \u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u0421\u0442\u0430\u0441, \u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0439 \u0444\u0440\u043e\u043d\u0442-\u044d\u043d\u0434 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a."}),(0,n.jsx)("p",{}),(0,n.jsxs)("div",{className:i(x().sectionWithPhoto_text_text),children:[(0,n.jsx)("div",{style:{color:"red"},children:" \u0412 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u043d\u0430\u0445\u043e\u0436\u0443\u0441\u044c \u0432 \u043f\u043e\u0438\u0441\u043a\u0435 \u0440\u0430\u0431\u043e\u0442\u044b."}),(0,n.jsx)("p",{}),"\u0418\u043c\u0435\u044e \u043e\u043f\u044b\u0442 \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0430 React.JS, JS, Next.Js, Strapi CMS.\u0417\u043d\u0430\u044e \u0447\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0411\u042d\u041c, \u0438 \u043f\u0440\u0438\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0441\u044c \u0435\u0433\u043e.",(0,n.jsx)("p",{}),"\u041d\u0430 \u043f\u0440\u043e\u0442\u044f\u0436\u0435\u043d\u0438\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u0433\u043e\u0434\u0430, \u043f\u043e\u0434 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u043c ",(0,n.jsx)(c(),{href:"https://career.habr.com/tehfreak",children:(0,n.jsx)("a",{style:{color:"red"},children:"\u043c\u0435\u043d\u0442\u043e\u0440\u0430"})}),", \u0438\u0437\u0443\u0447\u0430\u043b \u0440\u0430\u0431\u043e\u0442\u0443 \u043d\u0430 React.JS.",(0,n.jsx)("p",{}),"\u0417\u0430\u043d\u0438\u043c\u0430\u043b\u0441\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u043e\u0439 \u043a\u043e\u043c\u043c\u0435\u0440\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. Front-end: Next.js. Back-end: Strapi.",(0,n.jsx)("p",{}),"\u0414\u043e \u0442\u043e\u0433\u043e \u043a\u0430\u043a \u0437\u0430\u043d\u044f\u043b\u0441\u044f \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u0435\u043c \u0432\u044d\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u043b \u0438\u043d\u0436\u0435\u043d\u0435\u0440\u043e\u043c \u043e\u0442\u0434\u0435\u043b\u0430 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u043e\u0442\u0435\u0440\u044c \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u044d\u043d\u0435\u0440\u0433\u0438\u0438 \u0432 \u044d\u043b\u0435\u043a\u0442\u0440\u043e-\u0441\u0435\u0442\u0435\u0432\u043e\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438. \u0417\u0430\u043d\u0438\u043c\u0430\u043b\u0441\u044f \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043a\u043e\u043c\u043c\u0435\u0440\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0443\u0447\u0451\u0442\u0430 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u044d\u043d\u0435\u0440\u0433\u0438\u0438."]}),(0,n.jsx)("p",{}),(0,n.jsx)("hr",{}),(0,n.jsx)("p",{}),(0,n.jsxs)("div",{className:i(x().info),children:[(0,n.jsx)("div",{children:"\u0438\u043c\u044f: \u0421\u0442\u0430\u043d\u0438\u0441\u043b\u0430\u0432 \u0424\u0430\u0442\u044c\u044f\u043d\u043e\u0432"}),(0,n.jsx)("div",{children:"\u0432\u043e\u0437\u0440\u0430\u0441\u0442: 35"}),(0,n.jsx)("div",{children:"email: dogmastring@gmail.com"}),(0,n.jsx)("div",{children:"telegram: @aint_insane"}),(0,n.jsx)("div",{children:"discord: MY SPACE#9825"}),(0,n.jsx)("div",{children:"\u0433\u043e\u0440\u043e\u0434: \u041d\u043e\u0432\u043e\u043c\u043e\u0441\u043a\u043e\u0432\u0441\u043a. \u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"})]})]})]})]})})}var j=r(5194),b=r.n(j);function g(){return(0,n.jsxs)("div",{className:i(b().root),children:[(0,n.jsx)("div",{className:i(b().title),children:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b"}),(0,n.jsx)("div",{className:i(b().text),children:"\u0421\u043a\u043e\u0440\u043e \u0442\u0443\u0442 \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f"})]})}function N(){var e=(0,_.useRef)(),t=(0,_.useRef)(),r=(0,_.useRef)();return(0,n.jsxs)("div",{className:i(d().root),children:[(0,n.jsx)(u,{toMainClick:function(){t.current.scrollIntoView()},toAboutClick:function(){e.current.scrollIntoView()},toProjectsClick:function(){r.current.scrollIntoView()}}),(0,n.jsx)("div",{ref:t}),(0,n.jsx)(p,{}),(0,n.jsx)("div",{ref:e}),(0,n.jsx)(y,{}),(0,n.jsx)("div",{ref:r}),(0,n.jsx)(g,{})]})}},4709:function(e){e.exports={root:"About_root__Mvxgf",About_title:"About_About_title__nGoVT",sectionWithPhoto:"About_sectionWithPhoto__b1LBx",sectionWithPhoto_image:"About_sectionWithPhoto_image__iLkXl",sectionWithPhoto_title:"About_sectionWithPhoto_title__46OTw",sectionWithPhoto_text:"About_sectionWithPhoto_text__vlTHx",sectionWithPhoto_text_title:"About_sectionWithPhoto_text_title__Lnkrz",sectionWithPhoto_text_text:"About_sectionWithPhoto_text_text__GKG2C",info:"About_info__OaM73",overlay:"About_overlay__zgI9s"}},319:function(e){e.exports={root:"Hero_root__kiruE",overlay:"Hero_overlay__F1HaL",overlay_text:"Hero_overlay_text__JyK6C",name:"Hero_name__6X57k"}},5194:function(e){e.exports={root:"Projects_root__w0DL2",text:"Projects_text__bZZ_r",title:"Projects_title__VXNMe"}},4957:function(e){e.exports={root:"Sidebar_root__uGcB5",icon:"Sidebar_icon__DI1BY",card:"Sidebar_card__tvU_M",card_name:"Sidebar_card_name__nTfxO",card_status:"Sidebar_card_status__19khV",menu:"Sidebar_menu__ZN0wR",menu_item:"Sidebar_menu_item__FRfcH"}},4300:function(e){e.exports={root:"Home_root__8zB_p"}},1664:function(e,t,r){e.exports=r(1551)}},function(e){e.O(0,[774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);