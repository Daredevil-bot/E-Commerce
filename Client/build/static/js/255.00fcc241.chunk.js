"use strict";(self.webpackChunkecommerce_app=self.webpackChunkecommerce_app||[]).push([[255],{7834:function(n,t,e){e(2791);var r=e(3504),c=e(184);t.Z=function(){return(0,c.jsx)("nav",{children:(0,c.jsxs)("ul",{className:"nav flex-column  ",children:[(0,c.jsx)("li",{className:"nav-item",style:{display:"inline"},children:(0,c.jsx)(r.rU,{to:"/admin/dashboard",className:"nav-link",style:{display:"inline-block",margin:"10px 0px 0px 0px "},children:(0,c.jsx)("span",{children:"DASHBOARD"})})}),(0,c.jsx)("li",{className:"nav-item",style:{display:"inline"},children:(0,c.jsx)(r.rU,{to:"/admin/product",className:"nav-link",style:{display:"inline-block",margin:"10px 0px 0px 0px "},children:"PRODUCT"})}),(0,c.jsx)("li",{className:"nav-item",style:{display:"inline"},children:(0,c.jsx)("span",{children:(0,c.jsx)(r.rU,{to:"/admin/products",className:"nav-link",style:{display:"inline-block",margin:"10px 0px 0px 0px "},children:"PROUCTS"})})}),(0,c.jsx)("li",{className:"nav-item",style:{display:"inline"},children:(0,c.jsx)(r.rU,{to:"/admin/category",className:"nav-link",style:{display:"inline-block",margin:"10px 0px 0px 0px "},children:"CATEGORY"})}),(0,c.jsx)("li",{className:"nav-item",style:{display:"inline"},children:(0,c.jsx)(r.rU,{to:"/admin/sub",className:"nav-link",style:{display:"inline-block",margin:"10px 0px 0px 0px "},children:"SUB_CATEGORY"})}),(0,c.jsx)("li",{className:"nav-item",style:{display:"inline"},children:(0,c.jsx)(r.rU,{to:"/user/password",className:"nav-link",style:{display:"inline-block",margin:"10px 0px 0px 0px "},children:"PASSWORD"})})]})})}},7027:function(n,t,e){e.d(t,{ry:function(){return o},_3:function(){return u},kh:function(){return l},wv:function(){return p},Xp:function(){return d},Y2:function(){return h},Ej:function(){return f},cE:function(){return x},oo:function(){return m}});var r=e(5861),c=e(7757),a=e.n(c),s=e(4569),i=e.n(s),o=function(){var n=(0,r.Z)(a().mark((function n(t,e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().post("http://localhost:8000/api/product",t,{headers:{authtoken:e}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("http://localhost:8000/api/products/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t,e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().delete("http://localhost:8000/api/product/".concat(t),{headers:{authtoken:e}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("http://localhost:8000/api/product/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(t,e,r){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("in"),console.log(r),n.next=4,i().post("http://localhost:8000/api/products",{sort:t,order:e,page:r});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("http://localhost:8000/api/products/total");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t,e,r){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().put("http://localhost:8000/api/product/star/".concat(t),{star:e},{headers:{authtoken:r}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("rel"),n.next=3,i().get("http://localhost:8000/api/product/related/".concat(t));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),m=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().post("http://localhost:8000/api/search/filters",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},255:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r=e(1413),c=e(9439),a=e(2791),s=e(7834),i=e(7027),o=e(8343),u=e(8823),l=e(2674),p=e(9700),d=e(3504),h=e(184),f=o.Z.Meta,x=function(n){var t=n.product,e=n.handleRemove,r=t.title,c=t.description,a=t.images,s=t.slug;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{children:console.log("Hey")}),(0,h.jsx)(o.Z,{cover:(0,h.jsx)("img",{src:a&&a.length?a[0].url:u,style:{height:"350px",objectFit:"contain"},className:"p-1"}),actions:[(0,h.jsx)(d.rU,{to:"/admin/product/".concat(s),children:(0,h.jsx)(l.Z,{className:"text-warning"})}),(0,h.jsx)(p.Z,{className:"text-danger",onClick:function(){console.log("clicked"),e(s)}})],className:"mb-2",children:(0,h.jsx)(f,{title:r,description:"".concat(c&&c.substring(0,40),"...")})})]})},m=e(577),v=e(4466),y=function(){var n=(0,a.useState)([]),t=(0,c.Z)(n,2),e=t[0],o=t[1],u=(0,v.v9)((function(n){return(0,r.Z)({},n)})).user;(0,a.useEffect)((function(){l()}),[]);var l=function(){(0,i._3)(10).then((function(n){o(n.data)})).catch((function(n){console.log(n)}))},p=function(n){window.confirm("Delete?")&&(0,i.kh)(n,u.token).then((function(n){l(),m.Am.error("".concat(n.data.title," is deleted"))})).catch((function(n){console.log(n)}))};return(0,h.jsx)("div",{className:"container-fluid",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col",children:(0,h.jsx)(s.Z,{})}),(0,h.jsxs)("div",{className:"col-10",children:[(0,h.jsx)("h4",{children:"All Products "}),(0,h.jsx)("div",{className:"row",children:e.map((function(n){return(0,h.jsx)("div",{className:"col-3",children:(0,h.jsx)(x,{product:n,handleRemove:p})},n._id)}))})]})]})})}},9700:function(n,t,e){e.d(t,{Z:function(){return o}});var r=e(618),c=e(2791),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},s=e(1163),i=function(n,t){return c.createElement(s.Z,(0,r.Z)((0,r.Z)({},n),{},{ref:t,icon:a}))};i.displayName="DeleteOutlined";var o=c.forwardRef(i)},2674:function(n,t,e){e.d(t,{Z:function(){return o}});var r=e(618),c=e(2791),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},s=e(1163),i=function(n,t){return c.createElement(s.Z,(0,r.Z)((0,r.Z)({},n),{},{ref:t,icon:a}))};i.displayName="EditOutlined";var o=c.forwardRef(i)},8823:function(n,t,e){n.exports=e.p+"static/media/laptop.00efca79d04f6275b91d.png"}}]);
//# sourceMappingURL=255.00fcc241.chunk.js.map