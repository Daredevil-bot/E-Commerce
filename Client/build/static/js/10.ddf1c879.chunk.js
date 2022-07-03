"use strict";(self.webpackChunkecommerce_app=self.webpackChunkecommerce_app||[]).push([[10],{8189:function(t,e,n){var r=n(9439),a=n(1413),c=n(2791),u=n(8343),s=n(8303),o=n(8823),i=n(9186),p=n(2801),l=n(3504),h=n(763),f=n.n(h),d=n(4466),x=n(184),g=u.Z.Meta;e.Z=function(t){var e=t.product,n=(0,d.I0)(),h=(0,d.v9)((function(t){return(0,a.Z)({},t)})),m=(h.user,h.cart,(0,c.useState)("Click to add")),v=(0,r.Z)(m,2),b=v[0],j=v[1],Z=e.title,y=e.description,k=e.images,w=e.slug,S=e.price;return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(u.Z,{cover:(0,x.jsx)("img",{src:k&&k.length?k[0].url:o,style:{height:"350px",objectFit:"contain"},className:"p-1"}),actions:[(0,x.jsxs)(l.rU,{to:"/product/".concat(w),children:[(0,x.jsx)(i.Z,{className:"text-warning"}),(0,x.jsx)("br",{}),"View Product "]}),(0,x.jsxs)(s.Z,{title:b,children:[(0,x.jsxs)("a",{onClick:function(){var t=[];if("undefined"!==typeof window){localStorage.getItem("cart")&&(t=JSON.parse(localStorage.getItem("cart"))),t.push((0,a.Z)((0,a.Z)({},e),{},{count:1}));var r=f().uniqWith(t,f().isEqual);localStorage.setItem("cart",JSON.stringify(r)),n({type:"ADD_TO_CART",payload:r}),n({type:"SET_VISIBLE",payload:!0}),j("Added")}},children:[(0,x.jsx)(p.Z,{className:"text-danger"}),(0,x.jsx)("br",{}),"Add to Cart"]}),","]})],className:"mb-2",children:(0,x.jsx)(g,{title:"".concat(Z,"-Rs").concat(S),description:"".concat(y&&y.substring(0,40),"...")})})})}},6729:function(t,e,n){n.d(e,{CP:function(){return o},n3:function(){return i},uu:function(){return p},k4:function(){return l},yr:function(){return h},Gu:function(){return f}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),s=n.n(u),o=function(){var t=(0,r.Z)(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("http://localhost:8000/api/categories");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("http://localhost:8000/api/category/".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e,n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().delete("http://localhost:8000/api/category/".concat(e),{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e,n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("hey"),t.next=3,s().post("http://localhost:8000/api/category",e,{headers:{authtoken:n}});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e,n,r){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().put("http://localhost:8000/api/category/".concat(e),n,{headers:{authtoken:r}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("http://localhost:8000/api/category/subs/".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},7027:function(t,e,n){n.d(e,{ry:function(){return o},_3:function(){return i},kh:function(){return p},wv:function(){return l},Xp:function(){return h},Y2:function(){return f},Ej:function(){return d},cE:function(){return x},oo:function(){return g}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),s=n.n(u),o=function(){var t=(0,r.Z)(c().mark((function t(e,n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().post("http://localhost:8000/api/product",e,{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("http://localhost:8000/api/products/".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e,n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().delete("http://localhost:8000/api/product/".concat(e),{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("http://localhost:8000/api/product/".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e,n,r){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("in"),console.log(r),t.next=4,s().post("http://localhost:8000/api/products",{sort:e,order:n,page:r});case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("http://localhost:8000/api/products/total");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(e,n,r){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().put("http://localhost:8000/api/product/star/".concat(e),{star:n},{headers:{authtoken:r}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),x=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("rel"),t.next=3,s().get("http://localhost:8000/api/product/related/".concat(e));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().post("http://localhost:8000/api/search/filters",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},3818:function(t,e,n){n.d(e,{kL:function(){return o},cy:function(){return i},Xy:function(){return p},Gt:function(){return l}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),s=n.n(u),o=function(){var t=(0,r.Z)(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("http://localhost:8000/api/subs");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("inaxi"),t.next=3,s().get("http://localhost:8000/api/sub/".concat(e));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e,n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().delete("http://localhost:8000/api/sub/".concat(e),{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e,n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("hey"),t.next=3,s().post("http://localhost:8000/api/sub",e,{headers:{authtoken:n}});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},9010:function(t,e,n){n.r(e);var r=n(3433),a=n(1413),c=n(9439),u=n(2791),s=n(7027),o=n(4466),i=n(8189),p=n(1303),l=n(8300),h=n(5236),f=n(8229),d=n(1447),x=n(8616),g=n(6729),m=n(3818),v=n(184);e.default=function(){var t=(0,u.useState)([]),e=(0,c.Z)(t,2),n=e[0],b=e[1],j=(0,u.useState)(!1),Z=(0,c.Z)(j,2),y=Z[0],k=Z[1],w=(0,u.useState)([0,0]),S=(0,c.Z)(w,2),N=S[0],C=S[1],E=(0,u.useState)([]),_=(0,c.Z)(E,2),R=_[0],A=_[1],Y=(0,u.useState)([]),P=(0,c.Z)(Y,2),U=P[0],H=P[1],I=(0,u.useState)(!1),Q=(0,c.Z)(I,2),T=Q[0],B=Q[1],L=(0,u.useState)([]),O=(0,c.Z)(L,2),F=O[0],q=O[1],D=(0,u.useState)(""),M=(0,c.Z)(D,2),G=(M[0],M[1]),J=(0,u.useState)(["Apple","Lenovo","ASUS","Dell","HP","Microsoft","Samsung"]),V=(0,c.Z)(J,2),W=V[0],X=(V[1],(0,u.useState)("")),K=(0,c.Z)(X,2),z=K[0],$=K[1],tt=(0,u.useState)(["Black","Brown","Silver","White","Blue","Red"]),et=(0,c.Z)(tt,2),nt=et[0],rt=(et[1],(0,u.useState)("")),at=(0,c.Z)(rt,2),ct=at[0],ut=at[1],st=(0,u.useState)(""),ot=(0,c.Z)(st,2),it=ot[0],pt=ot[1],lt=(0,o.v9)((function(t){return(0,a.Z)({},t)})).search.text,ht=(0,o.I0)();(0,u.useEffect)((function(){ft(),(0,g.CP)().then((function(t){A(t.data),console.log(t.data)})),(0,m.kL)().then((function(t){return q(t.data)}))}),[]),(0,u.useEffect)((function(){var t=setTimeout((function(){dt({query:lt}),lt||ft()}),300);return function(){return clearTimeout(t)}}),[lt]);var ft=function(){(0,s._3)(10).then((function(t){k(!0),b(t.data),console.log(t.data),k(!1)}))},dt=function(t){(0,s.oo)(t).then((function(t){b(t.data)}))};(0,u.useEffect)((function(){dt({price:N})}),[T]);var xt=function(t){ht({type:"SEARCH_QUERY",payload:{text:""}}),C([0,0]),G(""),$(""),pt("");var e=(0,r.Z)(U),n=t.target.value,a=e.indexOf(n);-1===a?e.push(n):e.splice(a,1),console.log(e),H(e),dt({category:e})},gt=function(t){G(""),pt(""),ht({type:"SEARCH_QUERY",payload:{text:""}}),C([0,0]),H([]),$(t.target.value),dt({brand:t.target.value})},mt=function(t){G(""),ht({type:"SEARCH_QUERY",payload:{text:""}}),pt(""),C([0,0]),H([]),$(""),ut(t.target.value),dt({color:t.target.value})},vt=function(t){G(""),ht({type:"SEARCH_QUERY",payload:{text:""}}),C([0,0]),H([]),$(""),ut(""),pt(t.target.value),dt({shipping:t.target.value})},bt=p.Z.SubMenu;return(0,v.jsx)("div",{className:"container-fluid",children:(0,v.jsxs)("div",{className:"row",children:[(0,v.jsxs)("div",{className:"col-3",children:[(0,v.jsx)("h4",{children:"Search/Filter"}),(0,v.jsx)("hr",{}),(0,v.jsxs)(p.Z,{defaultOpenKeys:["1","2","3","4","5","6"],mode:"inline",children:[(0,v.jsx)(bt,{title:(0,v.jsxs)("span",{className:"h6",children:[(0,v.jsx)(d.Z,{})," Price"]}),children:(0,v.jsx)("div",{children:(0,v.jsx)(l.Z,{className:"ml-4 mr-4",tipFormatter:function(t){return"Rs".concat(t)},range:!0,value:N,onChange:function(t){ht({type:"SEARCH_QUERY",payload:{text:""}}),H([]),G(""),C(t),$(""),pt(""),setTimeout((function(){B(!T)}),300)},max:"150000"})})},"1"),(0,v.jsx)(bt,{title:(0,v.jsxs)("span",{className:"h6",children:[(0,v.jsx)(x.Z,{})," Catgories"]}),children:(0,v.jsx)("div",{style:{margin:"10px"},children:R.map((function(t){return(0,v.jsx)("div",{children:(0,v.jsx)(h.Z,{onChange:xt,className:" m-1 pl-4 pr-4 pb-2 badge bg-light block",value:t._id,name:"category",checked:U.includes(t._id),children:t.name})},t._id)}))})},"2"),(0,v.jsx)(bt,{title:(0,v.jsxs)("span",{className:"h6",children:[(0,v.jsx)(x.Z,{})," Sub-Catgories"]}),children:(0,v.jsx)("div",{children:F.map((function(t){return(0,v.jsx)("div",{style:{margin:"10px"},children:(0,v.jsx)(h.Z,{onChange:function(){return function(t){G(t),$(""),pt(""),ht({type:"SEARCH_QUERY",payload:{text:""}}),C([0,0]),H([]),dt({sub:t})}(t)},className:" m-1 pl-4 pr-4 pb-2 badge bg-light block ",value:t._id,name:"category",children:t.name})},t._id)}))})},"3"),(0,v.jsx)(bt,{title:(0,v.jsxs)("span",{className:"h6",children:[(0,v.jsx)(x.Z,{})," Brands"]}),children:(0,v.jsx)("div",{children:W.map((function(t){return(0,v.jsx)("div",{style:{margin:"10px"},children:(0,v.jsx)(f.ZP,{onChange:gt,className:"  m-1 pl-4 pr-4 pb-2 badge bg-light block ",value:t,name:"brand",checked:t===z,children:t})},t)}))})},"4"),(0,v.jsx)(bt,{title:(0,v.jsxs)("span",{className:"h6",children:[(0,v.jsx)(x.Z,{})," Colors"]}),children:(0,v.jsx)("div",{children:nt.map((function(t){return(0,v.jsx)("div",{style:{margin:"10px"},children:(0,v.jsx)(f.ZP,{onChange:mt,className:"  m-1 pl-6 pr-4 pb-2 badge bg-light block",value:t,name:"color",checked:t===ct,children:t})},t)}))})},"5"),(0,v.jsxs)(bt,{title:(0,v.jsxs)("span",{className:"h6",children:[(0,v.jsx)(x.Z,{})," Shipping"]}),children:[(0,v.jsx)(h.Z,{onChange:vt,className:" m-3 pl-4 pr-4 pb-2 badge bg-light block ",value:"Yes",checked:"Yes"===it,children:"Yes"}),(0,v.jsx)(h.Z,{onChange:vt,className:" m-3 pl-4 pr-4 pb-2 badge bg-light  ",value:"No",checked:"No"===it,children:"No"})]},"6")]})]}),(0,v.jsxs)("div",{className:"col-9",children:[y?(0,v.jsx)("h4",{className:"text-danger",children:"Loading.."}):(0,v.jsx)("h4",{className:"text-danger",children:"Products"}),n.length<1&&(0,v.jsx)("p",{children:"No Products found"}),(0,v.jsx)("div",{className:"row",children:n.map((function(t){return(0,v.jsx)("div",{className:"col-4 mt-5",children:(0,v.jsx)(i.Z,{product:t})},t._id)}))})]})]})})}},8823:function(t,e,n){t.exports=n.p+"static/media/laptop.00efca79d04f6275b91d.png"}}]);
//# sourceMappingURL=10.ddf1c879.chunk.js.map