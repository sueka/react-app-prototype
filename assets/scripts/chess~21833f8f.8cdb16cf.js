(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{302:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return r}));var a=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.some((function(n){return n===e}))}},r=function(e){return function(n){return void 0===n||e(n)}}},303:function(e,n,t){var a=t(307),r=t(304);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var s={insert:"head",singleton:!1},c=(a(r,s),r.locals?r.locals:{});e.exports=c},304:function(e,n,t){(n=t(308)(!1)).push([e.i,".src-components-Nav-classes__Spacer--36ovl {\n  flex-grow: 1;\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV {\n  color: currentColor\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV.Mui-focused {\n    opacity: 0.618;\n    color: currentColor;\n  }\n\n.src-components-Nav-classes__LocaleSelectInput--3oNu1.src-components-Nav-classes__LocaleSelectInput--3oNu1 {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx:hover:not(.Mui-disabled)::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::after {\n    border-bottom-color: currentColor;\n  }\n",""]),n.locals={Spacer:"src-components-Nav-classes__Spacer--36ovl",LocaleSelectLabel:"src-components-Nav-classes__LocaleSelectLabel--3h3DV",LocaleSelectInput:"src-components-Nav-classes__LocaleSelectInput--3oNu1",LocaleSelectSelectIcon:"src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk",LocaleSelectInputUnderline:"src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx"},e.exports=n},305:function(e){e.exports=JSON.parse('{"ja":"日本語","en":"English"}')},306:function(e,n,t){"use strict";t.d(n,"a",(function(){return ge}));var a=t(9),r=t.n(a),s=t(0),c=t.n(s),o=t(18),l=t.n(o),i=t(343),u=t(394),m=t(396),d=t(378),f=t(395),p=t(317),h=t.n(p),v=t(397),b=t(124),g=function(){var e=Object(s.useContext)(b.a),n=e.dark,t=e.setDark;if(null==n||null==t)throw new Error;var a=Object(s.useCallback)((function(e,n){t(n)}),[t]);return(c.a.createElement(v.a,{checked:n,onChange:a}))},_=t(45),C=t.n(_),E=t(98),k=t.n(E),S=t(59),O=t(301),j=t(402),y=t(398),N=t(401),L=t(399),M=t(426),w=t(417),x=t(55),I=t(125),T=t(305);var D=t(100),F=t(276),R=Object(F.d)({languages:{id:"src.components.LocaleSelect.languages",defaultMessage:"Languages"}}),q={selectLocale:D.c},W=Object(S.c)((function(e){return{locale:e.localeSelector.locale}}),q)((function(e){var n,t,a=e.classes,r=e.FormControlProps,o=e.locale,u=e.selectLocale,m=Object(s.useState)(0),d=l()(m,2),f=d[0],p=d[1],h=Object(s.useMemo)(O.a,[]),v=Object(x.a)(),b=Object(s.useMemo)((function(){var e,n,t,a;return null!==(e=null!==(n=null==r?void 0:r.variant)&&void 0!==n?n:null==v?void 0:null===(t=v.props)||void 0===t?void 0:null===(a=t.MuiFormControl)||void 0===a?void 0:a.variant)&&void 0!==e?e:"standard"}),[null==r?void 0:r.variant,null==v?void 0:null===(n=v.props)||void 0===n?void 0:null===(t=n.MuiFormControl)||void 0===t?void 0:t.variant]),g=Object(s.useMemo)((function(){return k()(null==a?void 0:a.root,null==r?void 0:r.className)}),[null==a?void 0:a.root,null==r?void 0:r.className]),_=Object(s.useMemo)((function(){return k()(null==a?void 0:a.label)}),[null==a?void 0:a.label]),E=Object(s.useMemo)((function(){return k()(null==a?void 0:a.input)}),[null==a?void 0:a.input]),S=Object(s.useMemo)((function(){return k()(null==a?void 0:a.selectIcon)}),[null==a?void 0:a.selectIcon]),D=Object(s.useMemo)((function(){return k()(null==a?void 0:a.inputUnderline)}),[null==a?void 0:a.inputUnderline]),F=Object(s.useCallback)((function(e){null!==e&&p(e.offsetWidth)}),[]),q=Object(s.useCallback)((function(e){var n;"string"==typeof(n=e.target.value)&&n in T&&u(e.target.value)}),[]),W=Object(s.useContext)(I.a).availableLocales;return c.a.createElement(y.a,C()({},r,{className:g}),c.a.createElement(L.a,{className:_,ref:F,htmlFor:h},c.a.createElement(i.a,R.languages)),c.a.createElement(w.a,{classes:{icon:S},native:!0,labelWidth:f,value:o,onChange:q,id:h,inputProps:{"data-testid":"localeSelect"},input:{standard:c.a.createElement(N.a,{className:E,classes:{underline:D}}),outlined:c.a.createElement(M.a,{className:E,labelWidth:f}),filled:c.a.createElement(j.a,{className:E})}[b]},null==W?void 0:W.map((function(e,n){return c.a.createElement("option",{key:n,value:e},T[e])}))))})),P=t(46),U=t.n(P),A=t(405),B=t(12),V=t.n(B),H=t(17),Y=t.n(H),z=t(19),J=t.n(z),X=t(14),G=t.n(X),Q=t(20),Z=t.n(Q),K=t(318),$=t(404),ee=t(302),ne=t(10);function te(){var e=r()([""," is not a Material-UI Typography color."]);return te=function(){return e},e}function ae(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var re=Object(ee.b)(Object(ee.a)("initial","inherit","primary","secondary","textPrimary","textSecondary","error")),se=c.a.forwardRef((function(e,n){return c.a.createElement(K.a,C()({innerRef:n},e))})),ce=function(e){Z()(a,e);var n,t=(n=a,function(){var e,t=G()(n);if(ae()){var a=G()(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return J()(this,e)});function a(){return V()(this,a),t.apply(this,arguments)}return Y()(a,[{key:"render",value:function(){var e=this.props,n=e.color,t=U()(e,["color"]);return re(n)?c.a.createElement($.a,C()({component:se,color:n},t)):(console.warn(Object(ne.a)(te(),n)),c.a.createElement($.a,C()({component:se},t)))}}]),a}(c.a.Component),oe=s.forwardRef((function(e,n){var t=e.to,a=(e.button,e.innerRef),r=U()(e,["to","button","innerRef"]),c=s.forwardRef((function(e,n){return s.createElement(ce,C()({ref:n,innerRef:a,color:"inherit",underline:"none"},e))}));return s.createElement(A.a,C()({button:!0,component:c,to:t,ref:n},r))})),le=t(303),ie=t.n(le),ue=Object(F.d)({home:{id:"src.components.Nav.home",defaultMessage:"home"},chess:{id:"src.components.Nav.chess",defaultMessage:"chess"},counter:{id:"src.components.Nav.counter",defaultMessage:"counter"},info:{id:"src.components.Nav.info",defaultMessage:"info"},paint:{id:"src.components.Nav.paint",defaultMessage:"paint"},reminder:{id:"src.components.Nav.reminder",defaultMessage:"reminder"}}),me=function(){var e=Object(s.useState)(null),n=l()(e,2),t=n[0],a=n[1],r=Object(s.useCallback)((function(e){a(e.currentTarget)}),[]),o=Object(s.useCallback)((function(){a(null)}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{position:"sticky"},c.a.createElement(f.a,null,c.a.createElement(m.a,{edge:"start",color:"inherit",onClick:r},c.a.createElement(h.a,null)),c.a.createElement("div",{className:ie.a.Spacer}),c.a.createElement(g,null),c.a.createElement(W,{classes:{label:ie.a.LocaleSelectLabel,input:ie.a.LocaleSelectInput,selectIcon:ie.a.LocaleSelectSelectIcon,inputUnderline:ie.a.LocaleSelectInputUnderline},FormControlProps:{variant:"filled"}}))),c.a.createElement(d.a,{open:null!==t,anchorEl:t,onClose:o},c.a.createElement(oe,{to:"/",onClick:o},c.a.createElement(i.a,ue.home)),c.a.createElement(oe,{to:"/chess",onClick:o},c.a.createElement(i.a,ue.chess)),c.a.createElement(oe,{to:"/counter",onClick:o},c.a.createElement(i.a,ue.counter)),c.a.createElement(oe,{to:"/info",onClick:o},c.a.createElement(i.a,ue.info)),c.a.createElement(oe,{to:"/paint",onClick:o},c.a.createElement(i.a,ue.paint)),c.a.createElement(oe,{to:"/reminder",onClick:o},c.a.createElement(i.a,ue.reminder))))};function de(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var fe=function(e){Z()(a,e);var n,t=(n=a,function(){var e,t=G()(n);if(de()){var a=G()(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return J()(this,e)});function a(){var e;V()(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e}return Y()(a,[{key:"render",value:function(){var e=this.props,n=e.renderError,t=e.children,a=this.state,r=a.hasError,s=a.error;return r?n(s,t):t}}]),a}(c.a.Component);fe.getDerivedStateFromError=function(e){return{hasError:!0,error:e}};var pe=fe;function he(){var e=r()([""," is not an error."]);return he=function(){return e},e}function ve(){var e=r()(["",""]);return ve=function(){return e},e}var be=function(e){var n=e.children,t=Object(s.useCallback)((function(e){if(e instanceof Error)return Object(ne.a)(ve(),String(e));throw new TypeError(Object(ne.a)(he(),String(e)))}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(me,null),c.a.createElement(pe,{renderError:t},n))},ge=function(e){return function(n){return c.a.createElement(be,null,c.a.createElement(e,n))}}},360:function(e,n,t){var a=t(307),r=t(361);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var s={insert:"head",singleton:!1},c=(a(r,s),r.locals?r.locals:{});e.exports=c},361:function(e,n,t){(n=t(308)(!1)).push([e.i,".src-components-Chessboard-classes__ChessboardTable--1YTjE {\n  border-collapse: collapse;\n}\n\n.src-components-Chessboard-classes__ChessboardTd--3hHrO {\n  padding: 0;\n}\n",""]),n.locals={ChessboardTable:"src-components-Chessboard-classes__ChessboardTable--1YTjE",ChessboardTd:"src-components-Chessboard-classes__ChessboardTd--3hHrO"},e.exports=n},362:function(e,n,t){var a=t(307),r=t(363);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var s={insert:"head",singleton:!1},c=(a(r,s),r.locals?r.locals:{});e.exports=c},363:function(e,n,t){(n=t(308)(!1)).push([e.i,".src-components-Chessboard-Square-classes__Square--3eloU {\n  height: 32px;\n  width: 32px;\n  font-size: 20px; /* of chessman; FIXME */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  --white-square-color: white;\n  --black-square-color: #c0c0c0\n\n  /* TODO: consider Nav */\n}\n\n@media screen and (orientation: portrait) {\n\n.src-components-Chessboard-Square-classes__Square--3eloU {\n    height: 12.5vw;\n    width: 12.5vw;\n    font-size: 7.8125vw\n}\n  }\n\n.src-components-Chessboard-Square-classes__White--7ZYQX {\n  background-color: var(--white-square-color);\n}\n\n.src-components-Chessboard-Square-classes__Black--3wDR_ {\n  background-color: var(--black-square-color);\n}\n\n.src-components-Chessboard-Square-classes__Target--11gMT {\n  -webkit-filter: sepia(100%);\n          filter: sepia(100%);\n}\n",""]),n.locals={Square:"src-components-Chessboard-Square-classes__Square--3eloU",White:"src-components-Chessboard-Square-classes__White--7ZYQX",Black:"src-components-Chessboard-Square-classes__Black--3wDR_",Target:"src-components-Chessboard-Square-classes__Target--11gMT"},e.exports=n},364:function(e,n,t){var a=t(307),r=t(365);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var s={insert:"head",singleton:!1},c=(a(r,s),r.locals?r.locals:{});e.exports=c},365:function(e,n,t){(n=t(308)(!1)).push([e.i,'.src-components-Chessboard-Chessman-classes__Chessman--1H9tu {\n  font-family: "Apple Symbols", sans-serif;\n  color: #222;\n}\n\n.src-components-Chessboard-Chessman-classes__Dragging--3Wg1a {\n  opacity: 0.5;\n}\n\n.src-components-Chessboard-Chessman-classes__Picking--11tdl:not(.src-components-Chessboard-Chessman-classes__Dragging--3Wg1a) {\n  color: teal;\n}\n\n/* TODO: in a little more normal way */\n.src-components-Chessboard-Chessman-classes__Preview--2T3_G {\n  position: absolute;\n  z-index: -1;\n}\n',""]),n.locals={Chessman:"src-components-Chessboard-Chessman-classes__Chessman--1H9tu",Dragging:"src-components-Chessboard-Chessman-classes__Dragging--3Wg1a",Picking:"src-components-Chessboard-Chessman-classes__Picking--11tdl",Preview:"src-components-Chessboard-Chessman-classes__Preview--2T3_G"},e.exports=n},412:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),s=t(126),c=t.n(s),o=t(326),l=t(59),i=Object(a.createContext)({picking:null,targets:null,halfMove:null,pickChessman:null,releaseChessman:null}),u=t(15),m=t(89),d=t(21),f=t.n(d),p=t(18),h=t.n(p),v=t(98),b=t.n(v),g=t(421);function _(e,n){return e.file===n.file&&e.rank===n.rank}var C=t(150),E=t(364),k=t.n(E),S=function(e){var n=e.chessman,t=e.coord,s=Object(a.useContext)(i),c=s.picking,o=s.pickChessman,l=Object(g.a)({item:{type:"Chessman"},collect:function(e){return{dragging:e.isDragging()}},begin:function(){null==o||o(n,t)}}),u=h()(l,3),m=u[0].dragging,d=u[1],p=u[2],v=Object(a.useMemo)((function(){var e;return b()(k.a.Chessman,(e={},f()(e,k.a.Dragging,m),f()(e,k.a.Picking,null!=c&&_(t,c.source)&&Object(C.a)(n,c.chessman)),e))}),[m,t,null==c?void 0:c.source]),E=Object(a.useMemo)((function(){return b()(k.a.Chessman,k.a.Preview)}),[]),S=Object(a.useCallback)((function(){null==c&&(null==o||o(n,t))}),[c,o,n,t]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{ref:p,className:E},n.symbol),r.a.createElement("span",{ref:d,className:v,onClick:S},n.symbol))},O=t(420);var j=t(362),y=t.n(j),N=function(e){var n=e.children,t=e.coord,s=Object(a.useContext)(i),c=s.picking,o=s.targets,l=s.halfMove,u=s.releaseChessman,m=Object(a.useMemo)((function(){var e;return null!==(e=null==o?void 0:o.some((function(e){return _(t,e)})))&&void 0!==e&&e}),[o]),d=Object(O.a)({accept:"Chessman",drop:function(){null!=c&&(m?null==l||l(c.chessman,c.source,t):null==u||u())}}),p=h()(d,2)[1],v=Object(a.useMemo)((function(){return function(e){return e.file%2==e.rank%2?"black":"white"}(t)}),[t]),g=Object(a.useMemo)((function(){var e;return b()(y.a.Square,(e={},f()(e,y.a.White,"white"===v),f()(e,y.a.Black,"black"===v),f()(e,y.a.Target,m),e))}),[m]),C=Object(a.useCallback)((function(){null!=c&&(m?null==l||l(c.chessman,c.source,t):null==u||u())}),[l,c,t,u]);return r.a.createElement("div",{ref:p,className:g,onClick:C},n)},L=t(360),M=t.n(L),w=[1,2,3,4,5,6,7,8],x=[8,7,6,5,4,3,2,1],I={resetBoard:m.g,halfMove:m.d,pickChessman:m.e,releaseChessman:m.f},T=Object(l.c)((function(e){var n=e.chess;return{board:n.board,picking:n.picking,targets:n.targets}}),I)((function(e){var n=e.board,t=e.picking,s=e.targets,c=e.resetBoard,o=e.halfMove,l=e.pickChessman,m=e.releaseChessman;return Object(a.useEffect)((function(){c()}),[]),r.a.createElement(i.Provider,{value:{picking:t,targets:s,halfMove:o,pickChessman:l,releaseChessman:m}},r.a.createElement("table",{className:M.a.ChessboardTable},r.a.createElement("tbody",null,x.map((function(e){return r.a.createElement("tr",{key:e},w.map((function(t){var a=new u.a({file:t,rank:e}),s=n.chessmen.get(a);return r.a.createElement("td",{key:t,className:M.a.ChessboardTd},r.a.createElement(N,{coord:a},void 0!==s?r.a.createElement(S,{chessman:s,coord:a}):null))})))})))))})),D=t(306),F=t(276),R=Object(F.d)({chess:{id:"src.components.App.ChessPage.chess",defaultMessage:"chess"}});n.default=Object(D.a)((function(){var e=Object(o.a)().formatMessage;return(r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{title:e(R.chess)}),r.a.createElement(T,null)))}))}}]);
//# sourceMappingURL=chess~21833f8f.8cdb16cf.js.map