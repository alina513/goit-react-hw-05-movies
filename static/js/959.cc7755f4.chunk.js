"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[959],{4321:function(e,r,t){t.d(r,{a:function(){return i}});var n=t(3920),a=t(184),i=function(){return(0,a.jsx)(n.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}},6094:function(e,r,t){t.d(r,{BG:function(){return u},LI:function(){return o},cd:function(){return p},kK:function(){return l},vw:function(){return c}});var n=t(5861),a=t(7757),i=t.n(a),s=t(5294),c=function(){var e=(0,n.Z)(i().mark((function e(){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=10f26a336fa68ad762f04ca1fe287bdc");case 2:return r=e.sent,t=r.data.results,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/search/movie?api_key=10f26a336fa68ad762f04ca1fe287bdc&query=".concat(r,"&language=en-US&page=1"));case 2:return t=e.sent,n=t.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=10f26a336fa68ad762f04ca1fe287bdc"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=10f26a336fa68ad762f04ca1fe287bdc"));case 2:return t=e.sent,n=t.data.cast,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=10f26a336fa68ad762f04ca1fe287bdc"));case 2:return t=e.sent,n=t.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},7959:function(e,r,t){t.r(r),t.d(r,{default:function(){return j}});var n=t(5861),a=t(9439),i=t(7757),s=t.n(i),c=t(6094),o=t(2791),u=t(7689),l=t(1087),p=t(4321),f=t(3402),d="MovieDetailPages_container__9klDo",v="MovieDetailPages_film__jCXJn",h="MovieDetailPages_title__Dw0qj",m="MovieDetailPages_view__iuJok",_="MovieDetailPages_overview__e7kVr",x="MovieDetailPages_description__PJBLW",g="MovieDetailPages_link__T62TQ",b="MovieDetailPages_genres__eC706",w="MovieDetailPages_information__6gq3b",k=t(184);function j(){var e,r,t=(0,o.useState)(null),i=(0,a.Z)(t,2),j=i[0],y=i[1],Z=(0,o.useState)(!1),P=(0,a.Z)(Z,2),D=P[0],N=P[1],M=(0,u.UO)().movieId,U=(0,u.TH)(),C=(0,o.useRef)(U);return(0,o.useEffect)((function(){function e(){return(e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(M){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,N(!0),e.next=6,(0,c.BG)(M);case 6:r=e.sent,y(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),f.ZP.error("Please, try loading page again");case 13:return e.prev=13,N(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[M]),(0,k.jsxs)("div",{className:d,children:[(0,k.jsx)(l.rU,{to:null!==(e=null===(r=C.current.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/",children:"Go back"}),D&&(0,k.jsx)(p.a,{}),j&&(0,k.jsxs)("div",{className:v,children:[(0,k.jsx)("img",{src:j.poster_path?"https://image.tmdb.org/t/p/w500/".concat(j.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:250,alt:"poster"}),(0,k.jsxs)("div",{children:[(0,k.jsxs)("h1",{className:h,children:[j.title,"(",parseInt(j.release_date),")"]}),(0,k.jsxs)("p",{className:m,children:["User score:",parseInt(j.popularity),"%"]}),(0,k.jsx)("h2",{className:_,children:"Overview"}),(0,k.jsx)("p",{className:x,children:j.overview}),(0,k.jsx)("h3",{className:b,children:"Genres"}),(0,k.jsx)("ul",{className:g,children:j.genres&&j.genres.map((function(e){return(0,k.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,k.jsxs)("div",{children:[(0,k.jsx)("h2",{className:w,children:"Additional information"}),(0,k.jsxs)("ul",{children:[(0,k.jsx)("li",{children:(0,k.jsx)(l.rU,{to:"cast",children:"Cast"})}),(0,k.jsx)("li",{children:(0,k.jsx)(l.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,k.jsx)(u.j3,{})]})}}}]);
//# sourceMappingURL=959.cc7755f4.chunk.js.map