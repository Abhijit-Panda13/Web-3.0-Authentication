(this["webpackJsonpweb-auth"]=this["webpackJsonpweb-auth"]||[]).push([[0],{174:function(e,t){},175:function(e,t){},195:function(e,t){},197:function(e,t){},207:function(e,t){},209:function(e,t){},241:function(e,t){},242:function(e,t){},272:function(e,t){},273:function(e,t,n){},356:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(29),i=n.n(c),s=n(3),o=n(10),u=n(2),l=n.n(u),d=n(155),j=n(48),f=(n(273),n(90)),b=n(161),p=n(160),h=n.n(p),v=n(88),O=n(89),x=n(162),g=n(6),m=[{loginProvider:"google",id:"0"},{loginProvider:"facebook",id:"1"}];var k=function(){var e=Object(r.useState)(!0),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),i=Object(o.a)(c,2),u=i[0],p=i[1],k=Object(r.useState)(!1),w=Object(o.a)(k,2),y=w[0],S=w[1],P=Object(r.useState)(),E=Object(o.a)(P,2),N=E[0],C=E[1],L=Object(r.useState)(),B=Object(o.a)(L,2),I=B[0],K=B[1],U=Object(r.useState)(),_=Object(o.a)(U,2),A=_[0],J=(_[1],{loginProvider:"google",clientId:"BDEZMlXEtCPU0_sfOO22To8ZnFS8ppSJs_yBNBxiMWhdAmPJSUk4jlCI3ykKBHO2cl1iDEu_M6UDVFAqALmZPto",redirectUrl:"http://localhost:3000/"});Object(r.useEffect)((function(){S(h.a.isEmail(u))}),[u]);var M=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.prev=1,t=new d.a({clientId:J.clientId,network:"mainnet"}),C(t),e.next=6,t.init();case 6:K(t.privKey);case 7:return e.prev=7,a(!1),e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[1,,7,10]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m.filter((function(e){return e.id===t.target.id})).map((function(e){return J.loginProvider=e.loginProvider})),console.log(J),!n&&!I&&N){e.next=4;break}return e.abrupt("return");case 4:return a(!0),e.prev=5,e.next=8,N.login(J);case 8:K(N.privKey);case 9:return e.prev=9,a(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[5,,9,12]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n&&!I&&N){e.next=2;break}return e.abrupt("return");case 2:return a(!0),e.prev=3,e.next=6,N.login({extraLoginOptions:{login_hint:u},loginProvider:"email_passwordless",redirectUrl:"http://localhost:3000/"});case 6:K(N.privKey);case 7:return e.prev=7,a(!1),e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[3,,7,10]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n&&N){e.next=2;break}return e.abrupt("return");case 2:return a(!0),e.prev=3,e.next=6,N.logout();case 6:K(N.privKey);case 7:return e.prev=7,a(!1),e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[3,,7,10]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){M()}),[]),n?Object(g.jsx)("div",{className:"central",children:"Loading..."}):I?Object(g.jsxs)("div",{className:"central",children:[Object(g.jsxs)("h1",{children:["Welcome ",A]}),Object(g.jsxs)("p",{children:["Logged in with private key: ",I]}),Object(g.jsx)("p",{children:"Store the private key generated in localStorage"}),Object(g.jsx)("p",{children:"Then you can now use the private key for authentication across different pages"}),Object(g.jsx)(j.a,{variant:"outline-dark",onClick:F,children:"Logout"})]}):Object(g.jsx)("div",{className:"central",children:Object(g.jsxs)(b.a,{fluid:!0,children:[Object(g.jsx)(v.a,{className:"head",children:Object(g.jsx)("h1",{className:"neon",children:"Passwordless Login"})}),Object(g.jsxs)(v.a,{children:[Object(g.jsx)(O.a,{sm:4}),Object(g.jsx)(O.a,{sm:4,children:Object(g.jsxs)("form",{noValidate:!0,children:[Object(g.jsx)(x.a,{label:"Email Address",id:"typeEmail",type:"email",size:"lg",value:u,onChange:function(e){return p(e.target.value)}}),Object(g.jsx)(j.a,{className:"loginbutton",disabled:!y,variant:"dark",onClick:D,children:"Login"})]})})]}),Object(g.jsxs)(j.a,{className:"fg .hover-zoom",variant:"outline-dark",id:"0",onClick:z,children:["Google ",Object(g.jsx)(f.b,{})]}),Object(g.jsxs)(j.a,{className:"fg .hover-zoom",variant:"outline-dark",id:"1",onClick:z,children:["Facebook ",Object(g.jsx)(f.a,{})]})]})})};n(355);i.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(k,{})}),document.getElementById("root"))}},[[356,1,2]]]);
//# sourceMappingURL=main.1b0cc07e.chunk.js.map