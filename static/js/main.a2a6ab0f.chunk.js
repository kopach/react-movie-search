(this["webpackJsonpmovies-search"]=this["webpackJsonpmovies-search"]||[]).push([[0],{147:function(e,a,t){"use strict";t.r(a);var n,r,l,c,m,o,u,i,s,p=t(0),E=t.n(p),b=t(39),d=t.n(b),f=(t(93),t(94),t(55)),h=t(8),v=t(31),g=t(14),y=t(15),x=t(82),j=t.n(x),O=y.a.div(n||(n=Object(g.a)(["\n  background: #2b3e50 url(./background.jpg) no-repeat center 0;\n  background-attachment: fixed;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  opacity: 0.5;\n"]))),k=Object(y.a)(j.a).attrs({parallaxRate:50,color:"rgba(122, 229, 114, 0.87)"})(r||(r=Object(g.a)([""]))),w=y.a.div(l||(l=Object(g.a)(["\n  opacity: 0.6;\n"]))),R=function(){return E.a.createElement(E.a.Fragment,null,E.a.createElement(O,null),E.a.createElement(w,null,E.a.createElement(k,null)))},N=t(43),T=t(44),I=Object(y.a)(N.a).attrs({icon:T.a,color:"rgba(122, 229, 114, 0.87)",className:"fa-spin fa-10x "})(c||(c=Object(g.a)([""]))),L=y.a.div.attrs({className:"text-center"})(m||(m=Object(g.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n"]))),F=y.a.div.attrs({className:"w-100 h-100"})(o||(o=Object(g.a)(["\n  position: fixed;\n"]))),S=function(){return E.a.createElement(L,null,E.a.createElement(F,null,E.a.createElement("div",{className:"row h-100"},E.a.createElement("div",{className:"col-sm-12 my-auto"},E.a.createElement(I,null)))))},B=t(21),U=t(25),C=t(58),Y=function(e){var a=e.title,t=e.year;return E.a.createElement(B.a,null,E.a.createElement(B.a.Body,null,E.a.createElement(U.a,{action:"/search",method:"get",autoComplete:"off"},E.a.createElement(U.a.Group,{controlId:"movieTitle"},E.a.createElement(U.a.Label,null,"Title"),E.a.createElement(U.a.Control,{name:"t",type:"text",placeholder:"Title",defaultValue:a})),E.a.createElement(U.a.Group,{controlId:"movieYear"},E.a.createElement(U.a.Label,null,"Year"),E.a.createElement(U.a.Control,{name:"y",type:"number",placeholder:"Year",defaultValue:t})),E.a.createElement(C.a,{variant:"outline-primary",type:"submit",block:!0},"Search"),E.a.createElement(C.a,{variant:"outline-secondary",type:"button",block:!0,disabled:!0},"I'm Feeling Lucky"))))},P=y.a.h1.attrs({className:"text-center"})(u||(u=Object(g.a)(["\n  color: ",";\n  margin-top: -3rem;\n"])),"rgba(122, 229, 114, 0.87)"),G=Object(y.a)(N.a).attrs({icon:T.b,color:"rgba(122, 229, 114, 0.87)"})(i||(i=Object(g.a)(["\n  opacity: 0.3;\n"]))),J=function(){return E.a.createElement("div",{className:"text-center"},E.a.createElement("span",{className:"fa-stack fa-7x"},E.a.createElement(G,{className:"fa-stack-1x"})))},M=y.a.div(s||(s=Object(g.a)(["\n  width: 20rem;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  top: 5rem;\n"]))),V=function(){return E.a.createElement(M,null,E.a.createElement(J,null),E.a.createElement(P,null,"Movie Search"),E.a.createElement(Y,null))},A=t(87),D=t(45),_=t(24),q=t(46),z=function(e){return E.a.createElement(q.a.Item,null,E.a.createElement(D.a,null,E.a.createElement(_.a,{xs:!0,sm:12,md:5,lg:4},E.a.createElement(B.a,null,E.a.createElement(B.a.Img,{src:e.posterURL}))),E.a.createElement(_.a,{xs:!0,sm:"12",md:"7",lg:"8"},E.a.createElement(B.a,null,E.a.createElement(B.a.Body,null,E.a.createElement(B.a.Title,null,e.movieTitle),E.a.createElement(B.a.Text,null,e.children))))))},H=t(29),K=t(7),Q=t(4);var W=t(16),X=t.n(W),Z=t(42),$=t(86),ee=t.n($),ae=Object(v.b)({key:"getMoviesByTitle",get:function(e){var a=e.t,t=e.y;return Object(Z.a)(X.a.mark((function e(){var n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://www.omdbapi.com/?apikey=2cd19c6b&type=movie",e.next=4,ee()({url:"https://www.omdbapi.com/?apikey=2cd19c6b&type=movie",method:"get",params:{s:a,y:t}});case 4:if("False"!==(n=e.sent).data.Response){e.next=7;break}return e.abrupt("return",{Search:[],totalResults:"0",Response:"False"});case 7:return e.abrupt("return",n.data);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",{Search:[],totalResults:"0",Response:"False"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))}}),te=function(){var e=function(){var e=new URLSearchParams(Object(h.f)().search);return Array.from(e).reduce((function(e,a){var t=Object(Q.a)(a,2),n=t[0],r=t[1];return Object(K.a)(Object(K.a)({},e),{},Object(H.a)({},n,r))}),{})}(),a=e.y,t=e.t,n=Object(v.c)(ae({y:a,t:t})).Search;return E.a.createElement(E.a.Fragment,null,E.a.createElement(A.a,{fluid:"xl"},E.a.createElement(D.a,null,E.a.createElement(_.a,{xs:!0,sm:"12",md:"4",lg:"3"},E.a.createElement(Y,{title:t,year:a})),E.a.createElement(_.a,null,n.map((function(e){var a=e.Title,t=e.imdbID,n=e.Poster,r=e.Year;return E.a.createElement(q.a,{key:t},E.a.createElement(z,{posterURL:n,movieTitle:a},r))}))))))},ne=function(){return E.a.createElement(E.a.Fragment,null,E.a.createElement(R,null),E.a.createElement(f.a,{basename:"%PUBLIC_URL%"},E.a.createElement(v.a,null,E.a.createElement(p.Suspense,{fallback:E.a.createElement(S,null)},E.a.createElement(h.c,null,E.a.createElement(h.a,{exact:!0,path:"/",component:V}),E.a.createElement(h.a,{exact:!0,path:"/search",component:te}))))))};d.a.render(E.a.createElement(ne,null),document.getElementById("root"))},88:function(e,a,t){e.exports=t(147)},93:function(e,a,t){},94:function(e,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.a2a6ab0f.chunk.js.map