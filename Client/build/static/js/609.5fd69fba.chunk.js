"use strict";(self.webpackChunkecommerce_app=self.webpackChunkecommerce_app||[]).push([[609],{8664:function(r,n,t){t(2791);var e=t(3504),s=t(184);n.Z=function(){return(0,s.jsx)("nav",{children:(0,s.jsxs)("ul",{className:"nav flex-column",children:[(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(e.rU,{to:"/user/history",className:"nav-link",children:"History"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(e.rU,{to:"/user/password",className:"nav-link",children:"Password"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)(e.rU,{to:"/user/wishlist",className:"nav-link",children:"Wishlist"})})]})})}},377:function(r,n,t){t.d(n,{E9:function(){return o},WK:function(){return i},UY:function(){return l},Mw:function(){return p},LV:function(){return h},uI:function(){return f}});var e=t(5861),s=t(7757),a=t.n(s),u=t(4569),c=t.n(u),o=function(){var r=(0,e.Z)(a().mark((function r(n,t){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",c().post("http://localhost:8000/api/user/cart",{cart:n},{headers:{authtoken:t}}));case 1:case"end":return r.stop()}}),r)})));return function(n,t){return r.apply(this,arguments)}}(),i=function(){var r=(0,e.Z)(a().mark((function r(n){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",c().get("http://localhost:8000/api/user/cart",{headers:{authtoken:n}}));case 1:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),l=function(){var r=(0,e.Z)(a().mark((function r(n){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",c().delete("http://localhost:8000/api/user/cart",{headers:{authtoken:n}}));case 1:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(a().mark((function r(n,t){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",c().post("http://localhost:8000/api/user/address",{address:t},{headers:{authtoken:n}}));case 1:case"end":return r.stop()}}),r)})));return function(n,t){return r.apply(this,arguments)}}(),h=function(){var r=(0,e.Z)(a().mark((function r(n,t){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",c().post("http://localhost:8000/api/user/order",{stripeResponse:n},{headers:{authtoken:t}}));case 1:case"end":return r.stop()}}),r)})));return function(n,t){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(a().mark((function r(n){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c().get("http://localhost:8000/api/user/orders",{headers:{authtoken:n}});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}()},2609:function(r,n,t){t.r(n),t.d(n,{default:function(){return p}});var e=t(1413),s=t(2791),a=t(4466),u=t(9439),c=t(8664),o=t(377),i=(t(577),t(184)),l=function(){var r=(0,s.useState)([]),n=(0,u.Z)(r,2),t=(n[0],n[1]),l=(0,a.v9)((function(r){return(0,e.Z)({},r)})).user;(0,s.useEffect)((function(){p()}),[]);var p=function(){(0,o.uI)(l.token).then((function(r){console.log(JSON.stringify(r.data,null,4)),console.log("cecking"),t(r.data)}))};return(0,i.jsx)("div",{className:"container-fluid",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-2",children:(0,i.jsx)(c.Z,{})}),(0,i.jsx)("div",{className:"col",children:"User history page"})]})})},p=function(){var r=(0,a.v9)((function(r){return(0,e.Z)({},r)})).user;return r&&r.token?(0,i.jsx)(l,{}):(0,i.jsx)("h1",{children:"Loading"})}}}]);
//# sourceMappingURL=609.5fd69fba.chunk.js.map