/*! For license information please see 224.bff5f529.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkecommerce_app=self.webpackChunkecommerce_app||[]).push([[224],{4929:function(e,n,t){var r=t(5634);n.Z=function(e,n,t){(0,r.ZP)(e,"[antd: ".concat(n,"] ").concat(t))}},5713:function(e,n,t){t.d(n,{V:function(){return oe},Z:function(){return ue}});var r=t(7199),o=t(618),u=t(1008),i=t(9546),a=t(2791),c=t(6966),f=t(2527),s=t(2763),l=t.n(s),v=t(6422);function d(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit".concat(e)]="webkit".concat(n),t["Moz".concat(e)]="moz".concat(n),t["ms".concat(e)]="MS".concat(n),t["O".concat(e)]="o".concat(n.toLowerCase()),t}var m=function(e,n){var t={animationend:d("Animation","AnimationEnd"),transitionend:d("Transition","TransitionEnd")};return e&&("AnimationEvent"in n||delete t.animationend.animation,"TransitionEvent"in n||delete t.transitionend.transition),t}((0,v.Z)(),"undefined"!==typeof window?window:{}),p={};if((0,v.Z)()){var y=document.createElement("div");p=y.style}var Z={};function E(e){if(Z[e])return Z[e];var n=m[e];if(n)for(var t=Object.keys(n),r=t.length,o=0;o<r;o+=1){var u=t[o];if(Object.prototype.hasOwnProperty.call(n,u)&&u in p)return Z[e]=n[u],Z[e]}return""}var h=E("animationend"),b=E("transitionend"),k=!(!h||!b),S=h||"animationend",g=b||"transitionend";function L(e,n){return e?"object"===(0,i.Z)(e)?e[n.replace(/-\w/g,(function(e){return e[1].toUpperCase()}))]:"".concat(e,"-").concat(n):null}var w="none",A="appear",C="enter",R="leave",P="none",N="prepare",O="start",j="active",M="end";function T(e){var n=(0,a.useRef)(!1),t=(0,a.useState)(e),r=(0,u.Z)(t,2),o=r[0],i=r[1];return(0,a.useEffect)((function(){return function(){n.current=!0}}),[]),[o,function(e){n.current||i(e)}]}var _=(0,v.Z)()?a.useLayoutEffect:a.useEffect,V=t(7166),x=[N,O,j,M];function D(e){return e===j||e===M}var $=function(e,n){var t=a.useState(P),r=(0,u.Z)(t,2),o=r[0],i=r[1],c=function(){var e=a.useRef(null);function n(){V.Z.cancel(e.current)}return a.useEffect((function(){return function(){n()}}),[]),[function t(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;n();var u=(0,V.Z)((function(){o<=1?r({isCanceled:function(){return u!==e.current}}):t(r,o-1)}));e.current=u},n]}(),f=(0,u.Z)(c,2),s=f[0],l=f[1];return _((function(){if(o!==P&&o!==M){var e=x.indexOf(o),t=x[e+1],r=n(o);false===r?i(t):s((function(e){function n(){e.isCanceled()||i(t)}!0===r?n():Promise.resolve(r).then(n)}))}}),[e,o]),a.useEffect((function(){return function(){l()}}),[]),[function(){i(N)},o]};function z(e,n,t,i){var c=i.motionEnter,f=void 0===c||c,s=i.motionAppear,l=void 0===s||s,v=i.motionLeave,d=void 0===v||v,m=i.motionDeadline,p=i.motionLeaveImmediately,y=i.onAppearPrepare,Z=i.onEnterPrepare,E=i.onLeavePrepare,h=i.onAppearStart,b=i.onEnterStart,k=i.onLeaveStart,L=i.onAppearActive,P=i.onEnterActive,M=i.onLeaveActive,V=i.onAppearEnd,x=i.onEnterEnd,z=i.onLeaveEnd,F=i.onVisibleChanged,H=T(),I=(0,u.Z)(H,2),K=I[0],Q=I[1],U=T(w),W=(0,u.Z)(U,2),Y=W[0],q=W[1],B=T(null),G=(0,u.Z)(B,2),J=G[0],X=G[1],ee=(0,a.useRef)(!1),ne=(0,a.useRef)(null),te=(0,a.useRef)(!1),re=(0,a.useRef)(null);function oe(){return t()||re.current}var ue=(0,a.useRef)(!1);function ie(e){var n,t=oe();e&&!e.deadline&&e.target!==t||(Y===A&&ue.current?n=null===V||void 0===V?void 0:V(t,e):Y===C&&ue.current?n=null===x||void 0===x?void 0:x(t,e):Y===R&&ue.current&&(n=null===z||void 0===z?void 0:z(t,e)),!1===n||te.current||(q(w),X(null)))}var ae=function(e){var n=(0,a.useRef)(),t=(0,a.useRef)(e);t.current=e;var r=a.useCallback((function(e){t.current(e)}),[]);function o(e){e&&(e.removeEventListener(g,r),e.removeEventListener(S,r))}return a.useEffect((function(){return function(){o(n.current)}}),[]),[function(e){n.current&&n.current!==e&&o(n.current),e&&e!==n.current&&(e.addEventListener(g,r),e.addEventListener(S,r),n.current=e)},o]}(ie),ce=(0,u.Z)(ae,1)[0],fe=a.useMemo((function(){var e,n,t;switch(Y){case"appear":return e={},(0,r.Z)(e,N,y),(0,r.Z)(e,O,h),(0,r.Z)(e,j,L),e;case"enter":return n={},(0,r.Z)(n,N,Z),(0,r.Z)(n,O,b),(0,r.Z)(n,j,P),n;case"leave":return t={},(0,r.Z)(t,N,E),(0,r.Z)(t,O,k),(0,r.Z)(t,j,M),t;default:return{}}}),[Y]),se=$(Y,(function(e){if(e===N){var n=fe.prepare;return!!n&&n(oe())}var t;de in fe&&X((null===(t=fe[de])||void 0===t?void 0:t.call(fe,oe(),null))||null);return de===j&&(ce(oe()),m>0&&(clearTimeout(ne.current),ne.current=setTimeout((function(){ie({deadline:!0})}),m))),true})),le=(0,u.Z)(se,2),ve=le[0],de=le[1],me=D(de);ue.current=me,_((function(){Q(n);var t,r=ee.current;(ee.current=!0,e)&&(!r&&n&&l&&(t=A),r&&n&&f&&(t=C),(r&&!n&&d||!r&&p&&!n&&d)&&(t=R),t&&(q(t),ve()))}),[n]),(0,a.useEffect)((function(){(Y===A&&!l||Y===C&&!f||Y===R&&!d)&&q(w)}),[l,f,d]),(0,a.useEffect)((function(){return function(){clearTimeout(ne.current),te.current=!0}}),[]),(0,a.useEffect)((function(){void 0!==K&&Y===w&&(null===F||void 0===F||F(K))}),[K,Y]);var pe=J;return fe.prepare&&de===O&&(pe=(0,o.Z)({transition:"none"},pe)),[Y,de,pe,null!==K&&void 0!==K?K:n]}var F=t(2904),H=t(8947),I=t(586),K=t(2213),Q=function(e){(0,I.Z)(t,e);var n=(0,K.Z)(t);function t(){return(0,F.Z)(this,t),n.apply(this,arguments)}return(0,H.Z)(t,[{key:"render",value:function(){return this.props.children}}]),t}(a.Component),U=Q;var W=function(e){var n=e;function t(e){return!(!e.motionName||!n)}"object"===(0,i.Z)(e)&&(n=e.transitionSupport);var s=a.forwardRef((function(e,n){var i=e.visible,s=void 0===i||i,v=e.removeOnLeave,d=void 0===v||v,m=e.forceRender,p=e.children,y=e.motionName,Z=e.leavedClassName,E=e.eventProps,h=t(e),b=(0,a.useRef)(),k=(0,a.useRef)();var S=z(h,s,(function(){try{return(0,c.Z)(b.current||k.current)}catch(e){return null}}),e),g=(0,u.Z)(S,4),A=g[0],C=g[1],R=g[2],P=g[3],j=a.useRef(P);P&&(j.current=!0);var M=(0,a.useRef)(n);M.current=n;var T,_=a.useCallback((function(e){b.current=e,(0,f.mH)(M.current,e)}),[]),V=(0,o.Z)((0,o.Z)({},E),{},{visible:s});if(p)if(A!==w&&t(e)){var x,$;C===N?$="prepare":D(C)?$="active":C===O&&($="start"),T=p((0,o.Z)((0,o.Z)({},V),{},{className:l()(L(y,A),(x={},(0,r.Z)(x,L(y,"".concat(A,"-").concat($)),$),(0,r.Z)(x,y,"string"===typeof y),x)),style:R}),_)}else T=P?p((0,o.Z)({},V),_):!d&&j.current?p((0,o.Z)((0,o.Z)({},V),{},{className:Z}),_):m?p((0,o.Z)((0,o.Z)({},V),{},{style:{display:"none"}}),_):null;else T=null;return a.createElement(U,{ref:k},T)}));return s.displayName="CSSMotion",s}(k),Y=t(517),q=t(7109),B="add",G="keep",J="remove",X="removed";function ee(e){var n;return n=e&&"object"===(0,i.Z)(e)&&"key"in e?e:{key:e},(0,o.Z)((0,o.Z)({},n),{},{key:String(n.key)})}function ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map(ee)}function te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=[],r=0,u=n.length,i=ne(e),a=ne(n);i.forEach((function(e){for(var n=!1,i=r;i<u;i+=1){var c=a[i];if(c.key===e.key){r<i&&(t=t.concat(a.slice(r,i).map((function(e){return(0,o.Z)((0,o.Z)({},e),{},{status:B})}))),r=i),t.push((0,o.Z)((0,o.Z)({},c),{},{status:G})),r+=1,n=!0;break}}n||t.push((0,o.Z)((0,o.Z)({},e),{},{status:J}))})),r<u&&(t=t.concat(a.slice(r).map((function(e){return(0,o.Z)((0,o.Z)({},e),{},{status:B})}))));var c={};t.forEach((function(e){var n=e.key;c[n]=(c[n]||0)+1}));var f=Object.keys(c).filter((function(e){return c[e]>1}));return f.forEach((function(e){(t=t.filter((function(n){var t=n.key,r=n.status;return t!==e||r!==J}))).forEach((function(n){n.key===e&&(n.status=G)}))})),t}var re=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];var oe=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:W,t=function(e){(0,I.Z)(r,e);var t=(0,K.Z)(r);function r(){var e;return(0,F.Z)(this,r),(e=t.apply(this,arguments)).state={keyEntities:[]},e.removeKey=function(n){e.setState((function(e){return{keyEntities:e.keyEntities.map((function(e){return e.key!==n?e:(0,o.Z)((0,o.Z)({},e),{},{status:X})}))}}))},e}return(0,H.Z)(r,[{key:"render",value:function(){var e=this,t=this.state.keyEntities,r=this.props,o=r.component,u=r.children,i=r.onVisibleChanged,c=(0,q.Z)(r,["component","children","onVisibleChanged"]),f=o||a.Fragment,s={};return re.forEach((function(e){s[e]=c[e],delete c[e]})),delete c.keys,a.createElement(f,c,t.map((function(t){var r=t.status,o=(0,q.Z)(t,["status"]),c=r===B||r===G;return a.createElement(n,(0,Y.Z)({},s,{key:o.key,visible:c,eventProps:o,onVisibleChanged:function(n){null===i||void 0===i||i(n,{key:o.key}),n||e.removeKey(o.key)}}),u)})))}}],[{key:"getDerivedStateFromProps",value:function(e,n){var t=e.keys,r=n.keyEntities,o=ne(t);return{keyEntities:te(r,o).filter((function(e){var n=r.find((function(n){var t=n.key;return e.key===t}));return!n||n.status!==X||e.status!==J}))}}}]),r}(a.Component);return t.defaultProps={component:"div"},t}(k),ue=W},6966:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(4164);function o(e){return e instanceof HTMLElement?e:r.findDOMNode(e)}},1315:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(2791);function o(e,n,t){var o=r.useRef({});return"value"in o.current&&!t(o.current.condition,n)||(o.current.value=e(),o.current.condition=n),o.current.value}},2527:function(e,n,t){t.d(n,{mH:function(){return i},sQ:function(){return a},x1:function(){return c},Yr:function(){return f}});var r=t(9546),o=t(2358),u=t(1315);function i(e,n){"function"===typeof e?e(n):"object"===(0,r.Z)(e)&&e&&"current"in e&&(e.current=n)}function a(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=n.filter((function(e){return e}));return r.length<=1?r[0]:function(e){n.forEach((function(n){i(n,e)}))}}function c(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,u.Z)((function(){return a.apply(void 0,n)}),n,(function(e,n){return e.length===n.length&&e.every((function(e,t){return e===n[t]}))}))}function f(e){var n,t,r=(0,o.isMemo)(e)?e.type.type:e.type;return!("function"===typeof r&&!(null===(n=r.prototype)||void 0===n?void 0:n.render))&&!("function"===typeof e&&!(null===(t=e.prototype)||void 0===t?void 0:t.render))}},584:function(e,n){var t="function"===typeof Symbol&&Symbol.for,r=t?Symbol.for("react.element"):60103,o=t?Symbol.for("react.portal"):60106,u=t?Symbol.for("react.fragment"):60107,i=t?Symbol.for("react.strict_mode"):60108,a=t?Symbol.for("react.profiler"):60114,c=t?Symbol.for("react.provider"):60109,f=t?Symbol.for("react.context"):60110,s=t?Symbol.for("react.async_mode"):60111,l=t?Symbol.for("react.concurrent_mode"):60111,v=t?Symbol.for("react.forward_ref"):60112,d=t?Symbol.for("react.suspense"):60113,m=t?Symbol.for("react.suspense_list"):60120,p=t?Symbol.for("react.memo"):60115,y=t?Symbol.for("react.lazy"):60116,Z=t?Symbol.for("react.block"):60121,E=t?Symbol.for("react.fundamental"):60117,h=t?Symbol.for("react.responder"):60118,b=t?Symbol.for("react.scope"):60119;function k(e){if("object"===typeof e&&null!==e){var n=e.$$typeof;switch(n){case r:switch(e=e.type){case s:case l:case u:case a:case i:case d:return e;default:switch(e=e&&e.$$typeof){case f:case v:case y:case p:case c:return e;default:return n}}case o:return n}}}function S(e){return k(e)===l}n.isFragment=function(e){return k(e)===u},n.isMemo=function(e){return k(e)===p}},2358:function(e,n,t){e.exports=t(584)}}]);
//# sourceMappingURL=224.bff5f529.chunk.js.map