(this["webpackJsonphooks-admin"]=this["webpackJsonphooks-admin"]||[]).push([[4],{171:function(e,n,t){e.exports=t(293)},172:function(e,n,t){},293:function(e,n,t){"use strict";t.r(n);t(172),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=t(0),r=t.n(a),c=t(74),o=t(119),l=t(19),u=t.n(l),i=t(55),d=t(33),m=function(){return r.a.createElement("div",{className:"ui-vw-100 ui-vh-100 flex just-center align-center",style:{background:"transparent",zIndex:999}},r.a.createElement(d.b,{loading:!0,fill:"none",style:{fontSize:36}}))},s=t(81),h=t(41),f=t(117),b=t(118),p="add_count",E="del_count",v="add_async_count";var w={name:"\u5317\u4eac"};var g=Object(h.combineReducers)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9;switch((arguments.length>1?arguments[1]:void 0).type){case p:return e+1;case E:return e-1;default:return e}},homeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case v:return n.data;default:return e}}}),y=Object(h.createStore)(g,Object(f.composeWithDevTools)(Object(h.applyMiddleware)(b.a)));u.a.render(r.a.createElement(o.a,{store:y},r.a.createElement((function(){return console.log("client:",Object(s.b)()),r.a.createElement(c.a,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(m,null)},r.a.createElement(i.b,null)))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},55:function(e,n,t){"use strict";t.d(n,"c",(function(){return h})),t.d(n,"b",(function(){return f})),t.d(n,"a",(function(){return b}));var a=t(294),r=t(295),c=t(296),o=t(297),l=t(298),u=t(0),i=t.n(u),d=t(8),m=t(33),s=t(80),h=[{path:"/home/index",title:"\u9996\u9875",icon:i.a.createElement(a.a,null),badge:m.a.dot,show:!0,component:Object(u.lazy)((function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,305))}))},{path:"/home/study",title:"\u6211\u7684\u5b66\u4e60",icon:i.a.createElement(r.a,null),show:!0,badge:"5",component:Object(u.lazy)((function(){return t.e(9).then(t.bind(null,299))}))},{path:"/home/message",title:"\u6211\u7684\u6d88\u606f",icon:function(e){return e?i.a.createElement(c.a,null):i.a.createElement(o.a,null)},badge:"99+",show:!0,component:Object(u.lazy)((function(){return t.e(6).then(t.bind(null,300))}))},{path:"/home/personal",title:"\u4e2a\u4eba\u4e2d\u5fc3",icon:i.a.createElement(l.a,null),show:!0,component:Object(u.lazy)((function(){return t.e(7).then(t.bind(null,301))}))}],f=Object(d.j)((function(){return i.a.createElement(d.d,null,i.a.createElement(d.b,{path:"/course/subject/:id",component:Object(u.lazy)((function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,304))}))}),i.a.createElement(d.b,{path:"/login",component:Object(u.lazy)((function(){return t.e(3).then(t.bind(null,302))}))}),i.a.createElement(s.a,null,i.a.createElement(d.b,{path:"/",render:function(){return i.a.createElement(d.d,null,i.a.createElement(d.a,{exact:!0,from:"/",to:"/home/index"}),i.a.createElement(d.b,{path:"/home",component:Object(u.lazy)((function(){return t.e(1).then(t.bind(null,303))}))}))}})),i.a.createElement(d.b,{path:"*",render:function(){return i.a.createElement("div",null,"404\u5168\u5c40")}}))})),b=Object(d.j)((function(){return i.a.createElement(d.d,null,h.map((function(e,n){return i.a.createElement(d.b,{key:e.path,path:e.path,exact:e.exact,render:function(n){return i.a.createElement(e.component,Object.assign({},n,{router:e.routes}))}})})),i.a.createElement(d.b,{path:"*",render:function(){return i.a.createElement("div",null,"404\u83dc\u5355")}}))}))},80:function(e,n,t){"use strict";var a=t(8),r=t(0),c=t.n(r),o=t(33),l=t(55);n.a=function(e){var n=Object(a.g)(),t=Object(a.h)();return c.a.createElement("div",{className:"layout-wrap"},c.a.createElement("div",{className:"flex-1 ui-ovy-a"},e.children),c.a.createElement("div",{className:"menu-list"},c.a.createElement(o.q,{safeArea:!0,activeKey:t.pathname,onChange:function(e){n.push(e)}},l.c.map((function(e){return e.show?c.a.createElement(o.q.Item,{key:e.path,icon:e.icon,title:e.title}):null})))))}},81:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return r})),t.d(n,"d",(function(){return c})),t.d(n,"c",(function(){return o}));var a=function(){return navigator.userAgent.match(/phone|pad|pod|iPhone|iPod|ios|iPad|Anddroid|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/)?"Mobile":"PC"},r=function(e){return(e.match(/([^?=&]+)(=([^&]*))/g)||[]).reduce((function(e,n){var t=decodeURIComponent(n.slice(n.indexOf("=")+1));return e[n.slice(0,n.indexOf("="))]=t,e}),{})},c=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:120,t=Date.now();return function(){var a=Date.now();if(a-t>=n){for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];e.call.apply(e,[null].concat(c)),t=Date.now()}}},o=function(e,n){return parseInt(Math.random()*(e-n+1)+n)}}},[[171,8,10]]]);
//# sourceMappingURL=main.8abf9d39.chunk.js.map