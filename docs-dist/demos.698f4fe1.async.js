"use strict";(self.webpackChunkreact_admin_components=self.webpackChunkreact_admin_components||[]).push([[433,907],{29577:function(_,i,e){e.r(i);var l=e(27424),o=e.n(l),a=e(67294),s=e(60907),u=e(85893),v=function(){var Y=(0,a.useState)((0,s.formatTime)(Date.now(),"YYYY\u5E74MM\u6708DD\u65E5 hh:mm:ss")),d=o()(Y,2),M=d[0],F=d[1],P=(0,a.useState)(),f=o()(P,2),E=f[0],h=f[1];(0,a.useEffect)(function(){var n=1673850986e3,t=(0,s.formatTime)(n);h(t)},[]),(0,a.useEffect)(function(){var n=setInterval(function(){var t=Date.now(),r=(0,s.formatTime)(t,"YYYY\u5E74MM\u6708DD\u65E5 hh:mm:ss");F(r)},1e3);return function(){clearInterval(n)}},[]);var D=a.createRef(),m=function(){var t,r=(t=D.current)===null||t===void 0?void 0:t.value;if(r){var c=(0,s.formatTime)(Number(r),"YYYY\u5E74MM\u6708DD\u65E5 hh:mm:ss");h(c)}};return(0,u.jsxs)(u.Fragment,{children:["\u5F53\u524D\u65F6\u95F4\uFF1A",M,(0,u.jsx)("hr",{}),"\u6307\u5B9A\u65F6\u95F4\u8F6C\u6362\uFF1A",(0,u.jsx)("input",{type:"number",ref:D,defaultValue:1673850986e3}),"\xA0",(0,u.jsx)("button",{type:"button",onClick:m,children:"\u8F6C\u6362"}),"\xA0",E]})};i.default=v},60907:function(_,i,e){e.r(i),e.d(i,{Button:function(){return E},Foo:function(){return s},PrimaryButton:function(){return P},formatTime:function(){return D}});var l=e(67294),o=e(85893),a=function(n){return(0,o.jsx)("h4",{children:n.title})},s=a,u=e(42122),v=e.n(u),C=e(70215),Y=e.n(C),d=e(58262),M=["children"],F=function(n){var t=n.children,r=Y()(n,M);return(0,o.jsx)(d.ZP,v()(v()({},r),{},{type:"primary",children:t}))},P=(0,l.memo)(F),f=function(n){var t=n.type,r=t===void 0?"default":t,c=n.children,y=n.onClick;return(0,o.jsx)("button",{type:"button",className:"dumi-btn ".concat(r?"dumi-btn-"+r:""),onClick:y,children:c})},E=(0,l.memo)(f);function h(m){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"YYYY-MM-DD hh:mm:ss",t=new Date(m),r=t.getFullYear(),c=("0"+(t.getMonth()+1)).slice(-2),y=("0"+t.getDate()).slice(-2),g=("0"+t.getHours()).slice(-2),j=("0"+t.getMinutes()).slice(-2),p=("0"+t.getSeconds()).slice(-2),A={YYYY:String(r),MM:c,DD:y,hh:g,mm:j,ss:p};return n.replace(/YYYY|MM|DD|hh|mm|ss/g,function(B){return A[B]})}var D=h}}]);
