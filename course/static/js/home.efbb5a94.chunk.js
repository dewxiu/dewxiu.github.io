(this["webpackJsonphooks-admin"]=this["webpackJsonphooks-admin"]||[]).push([[0],{298:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"h",(function(){return a})),n.d(t,"f",(function(){return s})),n.d(t,"d",(function(){return f})),n.d(t,"i",(function(){return l})),n.d(t,"g",(function(){return d})),n.d(t,"b",(function(){return p})),n.d(t,"e",(function(){return g})),n.d(t,"a",(function(){return _}));n(10);var r=n(38),o=n(5);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=function(){return JSON.parse(localStorage.getItem("__userinfo__")||"{}")},a=function(e){var t=u();localStorage.setItem("__userinfo__",JSON.stringify(i({},t,{},e)))},s=function(){return localStorage.removeItem("__userinfo__")},f=function(e){var t=JSON.parse(localStorage.getItem("__view_pos__")||"{}");return e?t[e]:t},l=function(e){var t=e.id,n=e.pos,c=e.name,u=e.percent,a=Object(r.a)(e,["id","pos","name","percent"]),s=f(),l=s.percent||0;u>l&&(l=u);var d=i({},s,Object(o.a)({},t,i({pos:n,name:c},a,{percent:l})));localStorage.setItem("__view_pos__",JSON.stringify(d))},d=function(e){var t=f();delete t[e],localStorage.setItem("__view_pos__",JSON.stringify(t))},p=function(){return JSON.parse(localStorage.getItem("__history__")||"[]")},g=function(e){var t=p().filter((function(t){return t.id!==e}));return localStorage.setItem("__history__",JSON.stringify(t)),t},_=function(){return localStorage.removeItem("__history__")}},299:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return u}));var r=function(){return navigator.userAgent.match(/phone|pad|pod|iPhone|iPod|ios|iPad|Anddroid|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/)?"Mobile":"PC"},o=function(e){return(e.match(/([^?=&]+)(=([^&]*))/g)||[]).reduce((function(e,t){var n=decodeURIComponent(t.slice(t.indexOf("=")+1));return e[t.slice(0,t.indexOf("="))]=n,e}),{})},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:120,n=Date.now();return function(){var r=Date.now();if(r-n>=t){for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];e.call.apply(e,[null].concat(c)),n=Date.now()}}},i=function(e,t){return parseInt(Math.random()*(e-t+1)+t)},u=function(e,t){var n=new Date(e),r=function(e){return(e+="").replace(/^(\d)$/,"0$1")},o={yyyy:n.getFullYear(),yy:n.getFullYear().toString().substring(2),M:r(n.getMonth()+1),MM:r(n.getMonth()+1),d:r(n.getDate()),dd:r(n.getDate()),hh:r(n.getHours()),mm:r(n.getMinutes()),ss:r(n.getSeconds())};return t||(t="yyyy-MM-dd hh:mm:ss"),t.replace(/([a-z])(\1)*/gi,(function(e){return o[e]}))}},300:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(298),o=n(34),c=n(0),i=n.n(c),u=n(299),a=n(13),s=function(){var e=Object(a.g)();return i.a.useEffect((function(){Object(r.h)({device:Object(u.c)()});var t=Object(r.c)();t.username&&t.password||o.d.alert({content:"\u8bf7\u5148\u767b\u5f55!"}).then((function(){e.replace("/login")}))}),[e]),[]}},308:function(e,t,n){"use strict";n.r(t);var r=n(108),o=n(0),c=n.n(o),i=n(300);t.default=function(){return Object(i.a)(),c.a.createElement(r.a,null)}}}]);
//# sourceMappingURL=home.efbb5a94.chunk.js.map