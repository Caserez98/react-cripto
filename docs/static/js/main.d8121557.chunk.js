(this["webpackJsonpcripomonedas-app"]=this["webpackJsonpcripomonedas-app"]||[]).push([[0],{25:function(n,e,t){},49:function(n,e,t){"use strict";t.r(e);var a,r,c,o,i,s,l,d,u,p,b,j,m=t(1),f=t(18),O=t.n(f),x=(t(25),t(6)),h=t.n(x),g=t(7),v=t(5),y=t(2),F=t(3),w=t.p+"static/media/cryptomonedas.51f1d2ed.png",k=t(0),E=F.a.label(a||(a=Object(y.a)(["\n    font-family: 'Bebas Neue',cursive;\n    color: #FFF;\n    text-transform:uppercase;\n    font-weight:bold;\n    font-size: 2.4rem;\n    margin-top:2rem;\n    display:block;\n"]))),C=F.a.select(r||(r=Object(y.a)(["\n    width:100%;\n    display:block;\n    padding:1rem;\n    -webkit-appearance:none;\n    border-radius:10px;\n    border:none;\n    font-size:1.2rem;\n"]))),S=function(n,e,t){var a=Object(m.useState)(e),r=Object(v.a)(a,2),c=r[0],o=r[1];return[c,function(){return Object(k.jsxs)(m.Fragment,{children:[Object(k.jsx)(E,{children:n}),Object(k.jsxs)(C,{onChange:function(n){return o(n.target.value)},value:c,children:[Object(k.jsx)("option",{value:"",children:"--Selecionnar--"}),t.map((function(n){return Object(k.jsxs)("option",{value:n.codigo,children:[n.nombre," "]},n.codigo)}))]})]})},o]},z=F.a.label(c||(c=Object(y.a)(["\n    font-family: 'Bebas Neue',cursive;\n    color: #FFF;\n    text-transform:uppercase;\n    font-weight:bold;\n    font-size: 2.4rem;\n    margin-top:2rem;\n    display:block;\n"]))),A=F.a.select(o||(o=Object(y.a)(["\n    width:100%;\n    display:block;\n    padding:1rem;\n    -webkit-appearance:none;\n    border-radius:10px;\n    border:none;\n    font-size:1.2rem;\n"]))),D=function(n,e,t){var a=Object(m.useState)(e),r=Object(v.a)(a,2),c=r[0],o=r[1];return[c,function(){return Object(k.jsxs)(m.Fragment,{children:[Object(k.jsx)(z,{children:n}),Object(k.jsxs)(A,{onChange:function(n){return o(n.target.value)},value:c,children:[Object(k.jsx)("option",{value:"",children:"--Selecionnar--"}),t.map((function(n){return Object(k.jsxs)("option",{value:n.CoinInfo.Name,children:[n.CoinInfo.FullName," "]},n.CoinInfo.Id)}))]})]})},o]},I=t(8),N=t.n(I),U=F.a.p(i||(i=Object(y.a)(["\n    background-color: #b7322c;\n    padding:1rem;\n    color:#FFF;\n    font-size:30px;\n    text-transform:uppercase;\n    font-weight:bold;\n    text-align:center;\n    font-family: 'Bebas Neue',cursive;\n"]))),B=function(n){var e=n.mensaje;return Object(k.jsx)(U,{children:e})},P=F.a.input(s||(s=Object(y.a)(["\n    margin-top:20px;\n    font-weight:bold;\n    font-size:20px;\n    padding:10px;\n    background-color: #66A2FE;\n    border: none;\n    width: 100px;\n    border-radius: 10px;\n    color: #FFF;\n    transition: background-color .3s ease;\n    &:hover {\n        background-color: #326Ac0;\n        cursor:pointer;\n    }\n"]))),H=function(n){var e=n.guardarMoneda,t=n.guardarCripto,a=Object(m.useState)([]),r=Object(v.a)(a,2),c=r[0],o=r[1],i=Object(m.useState)(!1),s=Object(v.a)(i,2),l=s[0],d=s[1],u=S("Elije tu moneda","",[{codigo:"USD",nombre:"Dolar de Estados Unidos"},{codigo:"MXN",nombre:"Peso Mexicano"},{codigo:"EUR",nombre:"Euro"},{codigo:"GBP",nombre:"Libra Esterlina"}]),p=Object(v.a)(u,2),b=p[0],j=p[1],f=D("Elije tu Cryptomoneda","",c),O=Object(v.a)(f,2),x=O[0],y=O[1];Object(m.useEffect)((function(){(function(){var n=Object(g.a)(h.a.mark((function n(){var e;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD",n.next=3,N.a.get("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD");case 3:e=n.sent,o(e.data.Data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]);return Object(k.jsxs)("form",{onSubmit:function(n){n.preventDefault(),""!==b&&""!==x?(d(!1),e(b),t(x)):d(!0)},children:[l?Object(k.jsx)(B,{mensaje:"Todos los campos son obligatorios"}):null,Object(k.jsx)(j,{}),Object(k.jsx)(y,{}),Object(k.jsx)(P,{type:"submit",value:"Calcular"})]})},L=F.a.div(l||(l=Object(y.a)(["\n    color:#FFF;\n    font-family:Arial,Helvetica,sans-serif;\n"]))),M=F.a.p(d||(d=Object(y.a)(["\n    font-size:18px;\n    span{\n        font-weight:bold;\n    }\n"]))),T=F.a.p(u||(u=Object(y.a)(["\n    font-size:30px;\n"]))),G=function(n){var e=n.resultado;return 0===Object.keys(e).length?null:Object(k.jsxs)(L,{children:[Object(k.jsxs)(T,{children:["El precio es: ",Object(k.jsx)("span",{children:e.PRICE})]}),Object(k.jsxs)(M,{children:["El precio mas alto del dia es: ",Object(k.jsx)("span",{children:e.HIGHDAY})]}),Object(k.jsxs)(M,{children:["El precio mas bajo del dia es: ",Object(k.jsx)("span",{children:e.LOWDAY})]}),Object(k.jsxs)(M,{children:["Variacion ultimas 24 hrs: ",Object(k.jsx)("span",{children:e.CHANGEPCT24HOUR})]}),Object(k.jsxs)(M,{children:["Ultima Actualizacion: ",Object(k.jsx)("span",{children:e.LASTUPDATE})]})]})},R=F.a.div(p||(p=Object(y.a)(["\n    max-width:900px;\n    margin: 0 auto;\n    @media (min-width:992px){\n        display:grid;\n        grid-template-columns: repeat(2,1fr);\n        column-gap: 2rem;\n    }\n"]))),Y=F.a.img(b||(b=Object(y.a)(["\n    max-width: 100%;\n    margin-top: 5rem;\n"]))),J=F.a.h1(j||(j=Object(y.a)(["\n    font-family: 'Bebas Neue', cursive;\n    color: #FFF;\n    text-align:left;\n    font-wigth:700;\n    font-size:50px;\n    margin-bottom: 50px;\n    margin-top: 80px;\n\n    &::after {\n        content:'';\n        width:100px;\n        height:6px;\n        background-color: #66A2FE;\n        display:block\n    }\n"])));function V(){var n=Object(m.useState)(""),e=Object(v.a)(n,2),t=e[0],a=e[1],r=Object(m.useState)(""),c=Object(v.a)(r,2),o=c[0],i=c[1],s=Object(m.useState)({}),l=Object(v.a)(s,2),d=l[0],u=l[1];return Object(m.useEffect)((function(){(function(){var n=Object(g.a)(h.a.mark((function n(){var e,a;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==t){n.next=2;break}return n.abrupt("return");case 2:return e="https://min-api.cryptocompare.com/data/pricemultifull?fsyms=".concat(o,"&tsyms=").concat(t),n.next=5,N.a.get(e);case 5:a=n.sent,u(a.data.DISPLAY[o][t]);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[t,o]),Object(k.jsxs)(R,{children:[Object(k.jsx)("div",{children:Object(k.jsx)(Y,{src:w,alt:"Imagen de Criptomonedas"})}),Object(k.jsxs)("div",{children:[Object(k.jsx)(J,{children:"Cotizador de Criptomonedas"}),Object(k.jsx)(H,{guardarMoneda:a,guardarCripto:i}),Object(k.jsx)(G,{resultado:d})]})]})}O.a.render(Object(k.jsx)(V,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.d8121557.chunk.js.map