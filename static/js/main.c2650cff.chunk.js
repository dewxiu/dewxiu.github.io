(this["webpackJsonphooks-admin"]=this["webpackJsonphooks-admin"]||[]).push([[4],{189:function(e,t,n){e.exports=n(302)},190:function(e,t,n){},302:function(e,t,n){"use strict";n.r(t);n(190),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),c=n(83),l=n(128),o=n(18),u=n.n(o),i=n(60),m=n(30),s=function(){return r.a.createElement("div",{className:"ui-vw-100 ui-vh-100 flex just-center align-center",style:{background:"transparent",zIndex:999}},r.a.createElement(m.b,{loading:!0,fill:"none",style:{fontSize:36}}))},d=n(43),h=n(126),p=n(127),b="add_count",f="del_count",E="add_async_count";var v={name:"\u5317\u4eac"};var y=Object(d.combineReducers)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9;switch((arguments.length>1?arguments[1]:void 0).type){case b:return e+1;case f:return e-1;default:return e}},homeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return t.data;default:return e}}}),g=Object(d.createStore)(y,Object(h.composeWithDevTools)(Object(d.applyMiddleware)(p.a)));u.a.render(r.a.createElement(l.a,{store:g},r.a.createElement((function(){return r.a.createElement(c.a,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(s,null)},r.a.createElement(i.b,null)))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},60:function(e,t,n){"use strict";n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return b}));var a=n(303),r=n(304),c=n(305),l=n(306),o=n(307),u=n(0),i=n.n(u),m=n(7),s=n(30),d=n(92),h=[{path:"/home/index",title:"\u9996\u9875",icon:i.a.createElement(a.a,null),badge:s.a.dot,show:!0,component:Object(u.lazy)((function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,308))}))},{path:"/home/study",title:"\u6211\u7684\u5b66\u4e60",icon:i.a.createElement(r.a,null),show:!0,badge:"5",component:Object(u.lazy)((function(){return n.e(9).then(n.bind(null,309))}))},{path:"/home/message",title:"\u6211\u7684\u6d88\u606f",icon:function(e){return e?i.a.createElement(c.a,null):i.a.createElement(l.a,null)},badge:"99+",show:!0,component:Object(u.lazy)((function(){return n.e(6).then(n.bind(null,310))}))},{path:"/home/personal",title:"\u4e2a\u4eba\u4e2d\u5fc3",icon:i.a.createElement(o.a,null),show:!0,component:Object(u.lazy)((function(){return n.e(7).then(n.bind(null,311))}))}],p=Object(m.j)((function(){return i.a.createElement(m.d,null,i.a.createElement(m.b,{path:"/marx/chapter/:id",component:Object(u.lazy)((function(){return Promise.all([n.e(11),n.e(0),n.e(5)]).then(n.bind(null,314))}))}),i.a.createElement(m.b,{path:"/login",component:Object(u.lazy)((function(){return n.e(3).then(n.bind(null,312))}))}),i.a.createElement(d.a,null,i.a.createElement(m.b,{path:"/",render:function(){return i.a.createElement(m.d,null,i.a.createElement(m.a,{exact:!0,from:"/",to:"/home/index"}),i.a.createElement(m.b,{path:"/home",component:Object(u.lazy)((function(){return n.e(1).then(n.bind(null,313))}))}))}})),i.a.createElement(m.b,{path:"*",render:function(){return i.a.createElement("div",null,"404\u5168\u5c40")}}))})),b=Object(m.j)((function(){return i.a.createElement(m.d,null,h.map((function(e,t){return i.a.createElement(m.b,{key:e.path,path:e.path,exact:e.exact,render:function(t){return i.a.createElement(e.component,Object.assign({},t,{router:e.routes}))}})})),i.a.createElement(m.b,{path:"*",render:function(){return i.a.createElement("div",null,"404\u83dc\u5355")}}))}))},92:function(e,t,n){"use strict";var a=n(7),r=n(0),c=n.n(r),l=n(30),o=n(60);t.a=function(e){var t=Object(a.g)(),n=Object(a.h)();return c.a.createElement("div",{className:"layout-wrap"},c.a.createElement("div",{className:"flex-1 ui-ovy-a"},e.children),c.a.createElement("div",{className:"menu-list"},c.a.createElement(l.i,{safeArea:!0,activeKey:n.pathname,onChange:function(e){t.push(e)}},o.c.map((function(e){return e.show?c.a.createElement(l.i.Item,{key:e.path,icon:e.icon,title:e.title}):null})))))}}},[[189,8,10]]]);
//# sourceMappingURL=main.c2650cff.chunk.js.map