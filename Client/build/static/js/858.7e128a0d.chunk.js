(self.webpackChunkecommerce_app=self.webpackChunkecommerce_app||[]).push([[858],{377:function(e,t,n){"use strict";n.d(t,{E9:function(){return u},WK:function(){return i},UY:function(){return l},Mw:function(){return p},LV:function(){return f},uI:function(){return d}});var r=n(5861),o=n(7757),a=n.n(o),c=n(4569),s=n.n(c),u=function(){var e=(0,r.Z)(a().mark((function e(t,n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s().post("http://localhost:8000/api/user/cart",{cart:t},{headers:{authtoken:n}}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s().get("http://localhost:8000/api/user/cart",{headers:{authtoken:t}}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s().delete("http://localhost:8000/api/user/cart",{headers:{authtoken:t}}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t,n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s().post("http://localhost:8000/api/user/address",{address:n},{headers:{authtoken:t}}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t,n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s().post("http://localhost:8000/api/user/order",{stripeResponse:t},{headers:{authtoken:n}}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("http://localhost:8000/api/user/orders",{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},5858:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var r=n(2791),o="https://js.stripe.com/v3",a=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,c="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",s=null,u=function(e){return null!==s||(s=new Promise((function(t,n){if("undefined"!==typeof window)if(window.Stripe&&e&&console.warn(c),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(o,'"]')),t=0;t<e.length;t++){var n=e[t];if(a.test(n.src))return n}return null}();r&&e?console.warn(c):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(o).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(s){return void n(s)}else t(null)}))),s},i=function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.32.0",startTime:t})}(r,n),r},l=Promise.resolve().then((function(){return u(null)})),p=!1;l.catch((function(e){p||console.warn(e)}));var f=n(5764),d=n(5861),m=n(9439),h=n(1413),y=n(7757),v=n.n(y),b=n(4466),g=n(4569),w=n.n(g),E=function(){var e=(0,d.Z)(v().mark((function e(t){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("hey"),e.next=3,w().post("http://localhost:8000/api/create-payment-intent",{},{headers:{authtoken:t}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=n(377),x=n(8343),S=n(1447),k=n(2080),O=n(8823),C=n(184),P=function(){var e=(0,b.I0)(),t=(0,b.v9)((function(e){return(0,h.Z)({},e)})).user,n=(0,r.useState)(!1),o=(0,m.Z)(n,2),a=o[0],c=o[1],s=(0,r.useState)(null),u=(0,m.Z)(s,2),i=u[0],l=u[1],p=(0,r.useState)(!1),y=(0,m.Z)(p,2),g=y[0],w=y[1],P=(0,r.useState)(!0),A=(0,m.Z)(P,2),Z=A[0],_=A[1],N=(0,r.useState)(""),T=(0,m.Z)(N,2),R=T[0],B=T[1],I=(0,r.useState)(0),L=(0,m.Z)(I,2),D=L[0],F=L[1],M=(0,r.useState)(0),W=(0,m.Z)(M,2),U=W[0],q=W[1],z=(0,f.useStripe)(),V=(0,f.useElements)();(0,r.useEffect)((function(){E(t.token).then((function(e){console.log("hey"),console.log("create payment intent",e),B(e.data.clientSecret),F(e.data.cartTotal),q(e.data.cartTotal)}))}),[]);var Y=function(){var n=(0,d.Z)(v().mark((function n(r){var o;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),w(!0),n.next=4,z.confirmCardPayment(R,{payment_method:{card:V.getElement(f.CardElement),billing_details:{name:r.target.name.value}}});case 4:(o=n.sent).error?(l("Payment failed ".concat(o.error.message)),w(!1)):((0,j.LV)(o,t.token).then((function(n){n.data.ok&&("undefined"!==typeof window&&localStorage.removeItem("cart"),e({type:"ADD_TO_CART",payload:[]}),(0,j.UY)(t.token))})),console.log(JSON.stringify(o,null,4)),l(null),w(!1),c(!0));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),G=function(){var e=(0,d.Z)(v().mark((function e(t){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_(t.empty),l(t.error?t.error.message:"");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("div",{className:"text-center pb-5",children:(0,C.jsx)(x.Z,{cover:(0,C.jsx)("img",{src:O,style:{height:"200px",objectFit:"contain",marginBottom:"-50px"}}),actions:[(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(S.Z,{className:"text-info"})," ",(0,C.jsx)("br",{}),"Cart Total: Rs.",D]}),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(k.Z,{className:"text-info"})," ",(0,C.jsx)("br",{})," Total Payable : Rs.",U]})]})}),(0,C.jsxs)("form",{id:"payment-form",className:"stripe-form",onSubmit:Y,children:[(0,C.jsx)(f.CardElement,{id:"card-element",options:{style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},onChange:G}),(0,C.jsx)("button",{className:"stripe-button",disabled:g||a||Z,children:(0,C.jsx)("span",{id:"button-text",children:g?(0,C.jsx)("div",{className:"spinner",id:"spinner"}):"Pay"})}),i&&(0,C.jsx)("div",{className:"card-error",role:"alert",children:i})]})]})},A=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];p=!0;var r=Date.now();return l.then((function(e){return i(e,t,r)}))}("pk_test_51LGNsuSGibpL3rGjI6Qwjiaoahs28Ozu2YPNqULY92tIw7HIGDao1vOC63vXlWsBlcyUmRjQPjfEoS1Vmdg10D2P00oiJ6bCWW"),Z=function(){return(0,C.jsxs)("div",{className:"container p-5 text-center",children:[(0,C.jsx)("h4",{children:"Complete your Purchase"}),(0,C.jsx)(f.Elements,{stripe:A,children:(0,C.jsx)("div",{className:"col-md-8 offset-md-2",children:(0,C.jsx)("p",{children:(0,C.jsx)(P,{})})})})]})}},5764:function(e,t,n){!function(e,t){"use strict";function n(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function o(){}function a(){}a.resetWarningCache=o;var c=function(){function e(e,t,n,o,a,c){if(c!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n},s=n((function(e){e.exports=c()}));function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){return d(e)||m(e,t)||h(e,t)||v()}function d(e){if(Array.isArray(e))return e}function m(e,t){var n=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],c=!0,s=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);c=!0);}catch(u){s=!0,o=u}finally{try{c||null==n.return||n.return()}finally{if(s)throw o}}return a}}function h(e,t){if(e){if("string"===typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var b=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},g=function(e){return null!==e&&"object"===l(e)},w=function(e){return g(e)&&"function"===typeof e.then},E=function(e){return g(e)&&"function"===typeof e.elements&&"function"===typeof e.createToken&&"function"===typeof e.createPaymentMethod&&"function"===typeof e.confirmCardPayment},j="[object Object]",x=function e(t,n){if(!g(t)||!g(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var o=Object.prototype.toString.call(t)===j;if(o!==(Object.prototype.toString.call(n)===j))return!1;if(!o&&!r)return t===n;var a=Object.keys(t),c=Object.keys(n);if(a.length!==c.length)return!1;for(var s={},u=0;u<a.length;u+=1)s[a[u]]=!0;for(var i=0;i<c.length;i+=1)s[c[i]]=!0;var l=Object.keys(s);if(l.length!==a.length)return!1;var p=t,f=n,d=function(t){return e(p[t],f[t])};return l.every(d)},S=function(e,t,n){return g(e)?Object.keys(e).reduce((function(r,o){var a=!g(t)||!x(e[o],t[o]);return n.includes(o)?(a&&console.warn("Unsupported prop change: options.".concat(o," is not a mutable property.")),r):a?i(i({},r||{}),{},p({},o,e[o])):r}),null):null},k="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",O=function(e){if(null===e||E(e))return e;throw new Error(k)},C=function(e){if(w(e))return{tag:"async",stripePromise:Promise.resolve(e).then(O)};var t=O(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},P=t.createContext(null);P.displayName="ElementsContext";var A=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},Z=function(e){var n=e.stripe,r=e.options,o=e.children,a=t.useMemo((function(){return C(n)}),[n]),c=f(t.useState((function(){return{stripe:"sync"===a.tag?a.stripe:null,elements:"sync"===a.tag?a.stripe.elements(r):null}})),2),s=c[0],u=c[1];t.useEffect((function(){var e=!0,t=function(e){u((function(t){return t.stripe?t:{stripe:e,elements:e.elements(r)}}))};return"async"!==a.tag||s.stripe?"sync"!==a.tag||s.stripe||t(a.stripe):a.stripePromise.then((function(n){n&&e&&t(n)})),function(){e=!1}}),[a,s,r]);var i=b(n);t.useEffect((function(){null!==i&&i!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")}),[i,n]);var l=b(r);return t.useEffect((function(){if(s.elements){var e=S(r,l,["clientSecret","fonts"]);e&&s.elements.update(e)}}),[r,l,s.elements]),t.useEffect((function(){var e=s.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"1.9.0"}),e.registerAppInfo({name:"react-stripe-js",version:"1.9.0",url:"https://stripe.com/docs/stripe-js/react"}))}),[s.stripe]),t.createElement(P.Provider,{value:s},o)};Z.propTypes={stripe:s.any,options:s.object};var _=function(e){var n=t.useContext(P);return A(n,e)},N=function(){return _("calls useElements()").elements},T=function(){return _("calls useStripe()").stripe},R=function(e){return(0,e.children)(_("mounts <ElementsConsumer>"))};R.propTypes={children:s.func.isRequired};var B=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),function(){n.current&&n.current.apply(n,arguments)}},I=function(){},L=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},D=function(e,n){var r="".concat(L(e),"Element"),o=n?function(e){_("mounts <".concat(r,">"));var n=e.id,o=e.className;return t.createElement("div",{id:n,className:o})}:function(n){var o=n.id,a=n.className,c=n.options,s=void 0===c?{}:c,u=n.onBlur,i=void 0===u?I:u,l=n.onFocus,p=void 0===l?I:l,f=n.onReady,d=void 0===f?I:f,m=n.onChange,h=void 0===m?I:m,y=n.onEscape,v=void 0===y?I:y,g=n.onClick,w=void 0===g?I:g,E=n.onLoadError,j=void 0===E?I:E,x=_("mounts <".concat(r,">")).elements,k=t.useRef(null),O=t.useRef(null),C=B(d),P=B(i),A=B(p),Z=B(w),N=B(h),T=B(v),R=B(j);t.useLayoutEffect((function(){if(null==k.current&&x&&null!=O.current){var t=x.create(e,s);k.current=t,t.mount(O.current),t.on("ready",(function(){return C(t)})),t.on("change",N),t.on("blur",P),t.on("focus",A),t.on("escape",T),t.on("loaderror",R),t.on("click",Z)}}));var L=b(s);return t.useEffect((function(){if(k.current){var e=S(s,L,["paymentRequest"]);e&&k.current.update(e)}}),[s,L]),t.useLayoutEffect((function(){return function(){k.current&&(k.current.destroy(),k.current=null)}}),[]),t.createElement("div",{id:o,className:a,ref:O})};return o.propTypes={id:s.string,className:s.string,onChange:s.func,onBlur:s.func,onFocus:s.func,onReady:s.func,onClick:s.func,onLoadError:s.func,options:s.object},o.displayName=r,o.__elementType=e,o},F="undefined"===typeof window,M=D("auBankAccount",F),W=D("card",F),U=D("cardNumber",F),q=D("cardExpiry",F),z=D("cardCvc",F),V=D("fpxBank",F),Y=D("iban",F),G=D("idealBank",F),H=D("p24Bank",F),J=D("epsBank",F),Q=D("payment",F),$=D("paymentRequestButton",F),K=D("linkAuthentication",F),X=D("shippingAddress",F),ee=D("affirmMessage",F),te=D("afterpayClearpayMessage",F);e.AffirmMessageElement=ee,e.AfterpayClearpayMessageElement=te,e.AuBankAccountElement=M,e.CardCvcElement=z,e.CardElement=W,e.CardExpiryElement=q,e.CardNumberElement=U,e.Elements=Z,e.ElementsConsumer=R,e.EpsBankElement=J,e.FpxBankElement=V,e.IbanElement=Y,e.IdealBankElement=G,e.LinkAuthenticationElement=K,e.P24BankElement=H,e.PaymentElement=Q,e.PaymentRequestButtonElement=$,e.ShippingAddressElement=X,e.useElements=N,e.useStripe=T,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(2791))},2080:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(618),o=n(2791),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},c=n(1163),s=function(e,t){return o.createElement(c.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:a}))};s.displayName="CheckOutlined";var u=o.forwardRef(s)},1447:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(618),o=n(2791),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z"}}]},name:"dollar",theme:"outlined"},c=n(1163),s=function(e,t){return o.createElement(c.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:a}))};s.displayName="DollarOutlined";var u=o.forwardRef(s)},8823:function(e,t,n){"use strict";e.exports=n.p+"static/media/laptop.00efca79d04f6275b91d.png"}}]);
//# sourceMappingURL=858.7e128a0d.chunk.js.map