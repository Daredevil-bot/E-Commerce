"use strict";(self.webpackChunkecommerce_app=self.webpackChunkecommerce_app||[]).push([[813],{7813:function(e,t,n){n.r(t);var a=n(9439),r=n(5861),s=n(1413),i=n(7757),o=n.n(i),c=n(2791),u=n(8953),l=(n(577),n(4466)),p=(n(5462),n(6871)),d=n(4569),m=n.n(d),f=n(184);t.default=function(){var e=(0,l.v9)((function(e){return(0,s.Z)({},e)})).user;(0,c.useEffect)((function(){e&&e.token&&b("/")}),[e]);var t=(0,l.I0)(),n=function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m().post("http://localhost:8000/api/create-and-update-user",{},{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=(0,c.useState)(""),d=(0,a.Z)(i,2),x=d[0],h=d[1],v=(0,c.useState)(""),g=(0,a.Z)(v,2),w=g[0],k=g[1];(0,c.useEffect)((function(){h(window.localStorage.getItem("emailRegistration"))}),[]);var b=(0,p.s0)(),y=function(){var e=(0,r.Z)(o().mark((function e(a){var r,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.preventDefault(),e.next=4,u.I.signInWithEmailLink(x,window.location.href);case 4:if(!e.sent.user.emailVerified){e.next=13;break}return window.localStorage.removeItem("emailRegistration"),r=u.I.currentUser,e.next=10,r.updatePassword(w);case 10:s=r.getIdTokenResult(),n(s.token).then((function(e){return t({type:"LOGGED_IN_USER",payload:{name:e.data.name,email:e.data.email,token:s.token,role:e.data.role,_id:e.data._id}})})),b("/");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}();return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{className:"container p-5 ",style:{margin:"0px 400px 100px"},children:[(0,f.jsx)("h4",{children:"Complete Registration"}),(0,f.jsx)("div",{className:"row",children:(0,f.jsx)("div",{className:"col-mid-3 offset col-mid-6",children:(0,f.jsxs)("form",{onSubmit:y,children:[(0,f.jsx)("input",{type:"email",className:"form-control",style:{width:"600px",margin:"10px 0px 0px 0px"},value:x,disabled:!0}),(0,f.jsx)("input",{type:"password",className:"form-control",style:{width:"600px",margin:"10px 0px 0px 0px"},value:w,onChange:function(e){k(e.target.value)},autoFocus:!0}),(0,f.jsx)("button",{type:"submit",value:"submit",className:"btn btn-raised",style:{margin:"20px 0px 0px 0px"},children:"Sign in"})]})})})]})})}},5462:function(){}}]);
//# sourceMappingURL=813.29bf12cb.chunk.js.map