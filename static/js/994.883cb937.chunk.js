"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[994],{2994:function(n,e,t){t.r(e),t.d(e,{default:function(){return V}});var r=t(2791),i=t(9434),o=t(4270),a="NOT_FOUND";var c=function(n,e){return n===e};function u(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,i=void 0===r?c:r,o=t.maxSize,u=void 0===o?1:o,s=t.resultEqualityCheck,l=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,i=0;i<r;i++)if(!n(e[i],t[i]))return!1;return!0}}(i),f=1===u?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:a},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return a}return{get:r,put:function(e,i){r(e)===a&&(t.unshift({key:e,value:i}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(u,l);function p(){var e=f.get(arguments);if(e===a){if(e=n.apply(null,arguments),s){var t=f.getEntries(),r=t.find((function(n){return s(n.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return p.clearCache=function(){return f.clear()},p}function s(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function l(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o,a=0,c={memoizeOptions:void 0},u=r.pop();if("object"===typeof u&&(c=u,u=r.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var l=c,f=l.memoizeOptions,p=void 0===f?t:f,d=Array.isArray(p)?p:[p],x=s(r),b=n.apply(void 0,[function(){return a++,u.apply(null,arguments)}].concat(d)),m=n((function(){for(var n=[],e=x.length,t=0;t<e;t++)n.push(x[t].apply(null,arguments));return o=b.apply(null,n)}));return Object.assign(m,{resultFunc:u,memoizedResultFunc:b,dependencies:x,lastResult:function(){return o},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),m};return i}var f,p,d,x=l(u),b=function(n){return n.contacts.items},m=function(n){return n.contacts.isLoading},h=function(n){return n.contacts.error},g=function(n){return n.filters},v=x([b,g],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),y=t(9439),j=t(3634),w=t(168),Z=t(6444),k=Z.ZP.li(f||(f=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  /* gap: 200px; */\n  background: #2ee59d;\n\n  p {\n    font-family: inherit;\n    font-size: 14px;\n    font-weight: 700;\n  }\n\n  span {\n    margin-left: 10px;\n  }\n\n  button {\n    border: none;\n    border-radius: 4px;\n    min-width: 45px;\n\n    background-color: #2196f3;\n    color: #ffffff;\n\n    font-family: inherit;\n    font-size: 12px;\n\n    text-align: center;\n\n    cursor: pointer;\n\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n      color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover,\n    &:focus {\n      background-color: #2196f3;\n      color: #ffffff;\n      box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1),\n        0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);\n    }\n  }\n"]))),z=t(184);function C(n){var e=n.id,t=n.name,o=n.number,a=(0,i.I0)(),c=(0,r.useState)(!1),u=(0,y.Z)(c,2),s=u[0],l=u[1];return(0,z.jsxs)(k,{children:[(0,z.jsx)("p",{children:t}),(0,z.jsx)("p",{children:o}),(0,z.jsx)("button",{type:"button",onClick:function(){l(!0),a((0,j.GK)(e))},disabled:s&&"disabled",children:s?"Deleting...":"Delete"})]})}var A=Z.ZP.ul(p||(p=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),P=Z.ZP.h1(d||(d=(0,w.Z)(["\n  display: flex;\n  justify-content: center;\n"])));function F(){var n=(0,i.v9)(v);return 0===n.length?(0,z.jsx)(P,{children:"\u26a0\ufe0f There is not any contacts. \u26a0\ufe0f"}):(0,z.jsx)(A,{children:n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,z.jsx)(C,{id:e,name:t,number:r},e)}))})}var E,N,S=t(7762),q=Z.ZP.form(E||(E=(0,w.Z)(["\n  /* width: 100px; */\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  gap: 10px;\n  background: transparent;\n\n  label {\n    display: block;\n    margin-bottom: 5px;\n    font-size: 20px;\n  }\n  input {\n    width: 250px;\n\n    font-size: 14px;\n\n    border: 1px solid rgba(33, 33, 33, 0.2);\n    border-radius: 4px;\n    background-color: transparent;\n    padding: 5px;\n    outline: none;\n    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:focus {\n      border-color: #2196f3;\n    }\n  }\n  button {\n    padding: 6px 5px;\n    border: none;\n    border-radius: 4px;\n    min-width: 90px;\n    /* height: 50px; */\n\n    background-color: #2196f3;\n    color: #ffffff;\n    font-family: inherit;\n    font-weight: 500;\n    font-size: 14px;\n\n    text-align: center;\n\n    cursor: pointer;\n\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n      color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover,\n    &:focus {\n      background-color: #2196f3;\n      color: #ffffff;\n      box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1),\n        0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);\n    }\n  }\n"])));function I(){var n=(0,r.useState)(""),e=(0,y.Z)(n,2),t=e[0],o=e[1],a=(0,r.useState)(""),c=(0,y.Z)(a,2),u=c[0],s=c[1],l=(0,i.v9)(b),f=(0,i.I0)(),p=function(){o(""),s("")},d=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":o(r);break;case"number":s(r)}};return(0,z.jsxs)(q,{onSubmit:function(n){n.preventDefault();var e,r={name:t,number:u},i=(0,S.Z)(l);try{for(i.s();!(e=i.n()).done;){var o=e.value;if(r.name.toLowerCase()===o.name.toLowerCase())return alert("".concat(r.name," is already in contacts")),void p()}}catch(a){i.e(a)}finally{i.f()}f((0,j.uK)(r)),p()},children:[(0,z.jsxs)("div",{children:[(0,z.jsx)("label",{children:"Name"}),(0,z.jsx)("input",{value:t,onChange:d,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,z.jsxs)("div",{children:[(0,z.jsx)("label",{children:"Number"}),(0,z.jsx)("input",{value:u,onChange:d,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,z.jsx)("button",{type:"submit",children:"Add contact"})]})}var L=Z.ZP.div(N||(N=(0,w.Z)(["\n  margin-right: 10px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 5px;\n  /* margin-top: 50px; */\n  /* margin-bottom: 20px; */\n\n  label {\n    display: block;\n    margin-bottom: 5px;\n    font-size: 20px;\n  }\n  input {\n    width: 250px;\n\n    font-size: 14px;\n\n    border: 1px solid rgba(33, 33, 33, 0.2);\n    border-radius: 4px;\n    background-color: transparent;\n    padding: 5px;\n    outline: none;\n    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:focus {\n      border-color: #2196f3;\n    }\n  }\n"]))),O=t(1634);function _(){var n=(0,i.I0)(),e=(0,i.v9)(g);return(0,z.jsx)(L,{children:(0,z.jsxs)("div",{children:[(0,z.jsx)("label",{htmlFor:e,children:"Find contacts by name"}),(0,z.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(e){return n((0,O.T)(e.target.value))}})]})})}var D,R,T,K,B,G=t(7793),J=Z.ZP.div(D||(D=(0,w.Z)([""]))),M=Z.ZP.div(R||(R=(0,w.Z)(["\n  display: flex;\n  margin-bottom: 10px;\n"]))),U=Z.ZP.p(T||(T=(0,w.Z)(["\n  font-weight: 900;\n  letter-spacing: 1.5px;\n  color: #333;\n  font-size: 23px;\n  text-transform: uppercase;\n  &:not(:first-child) {\n    padding-left: 350px;\n  }\n"]))),$=Z.ZP.p(K||(K=(0,w.Z)(["\n  display: flex;\n  justify-content: center;\n  font-weight: 900;\n  letter-spacing: 1.5px;\n  color: #333;\n  font-size: 23px;\n  text-transform: uppercase;\n  margin: 0;\n"]))),H=Z.ZP.section(B||(B=(0,w.Z)(["\n  display: flex;\n  /* max-width: 992px; */\n  /* flex-wrap: wrap; */\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  padding: 10px;\n  margin-bottom: 20px;\n"]))),Q=function(){var n=(0,i.v9)(m),e=(0,i.v9)(h),t=(0,i.v9)(b);return(0,z.jsxs)(J,{children:[(0,z.jsx)($,{children:"add new contact:"}),(0,z.jsxs)(H,{children:[t.length>0&&(0,z.jsx)(_,{}),(0,z.jsx)(I,{}),n&&!e&&(0,z.jsx)(G.Z,{})]}),t.length>0&&(0,z.jsxs)(M,{children:[(0,z.jsx)(U,{children:"Name"}),(0,z.jsx)(U,{children:"Number"})]})]})};function V(){var n=(0,i.I0)();return(0,r.useEffect)((function(){n((0,j.yF)())}),[n]),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(o.q,{children:(0,z.jsx)("title",{children:"Contacts"})}),(0,z.jsx)(Q,{}),(0,z.jsx)(F,{})]})}}}]);
//# sourceMappingURL=994.883cb937.chunk.js.map