(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{302:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return r}));var a=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.some((function(n){return n===e}))}},r=function(e){return function(n){return void 0===n||e(n)}}},303:function(e,n,t){var a=t(307),r=t(304);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var c={insert:"head",singleton:!1},l=(a(r,c),r.locals?r.locals:{});e.exports=l},304:function(e,n,t){(n=t(308)(!1)).push([e.i,".src-components-Nav-classes__Spacer--36ovl {\n  flex-grow: 1;\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV {\n  color: currentColor\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV.Mui-focused {\n    opacity: 0.618;\n    color: currentColor;\n  }\n\n.src-components-Nav-classes__LocaleSelectInput--3oNu1.src-components-Nav-classes__LocaleSelectInput--3oNu1 {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx:hover:not(.Mui-disabled)::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::after {\n    border-bottom-color: currentColor;\n  }\n",""]),n.locals={Spacer:"src-components-Nav-classes__Spacer--36ovl",LocaleSelectLabel:"src-components-Nav-classes__LocaleSelectLabel--3h3DV",LocaleSelectInput:"src-components-Nav-classes__LocaleSelectInput--3oNu1",LocaleSelectSelectIcon:"src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk",LocaleSelectInputUnderline:"src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx"},e.exports=n},305:function(e){e.exports=JSON.parse('{"ja":"日本語","en":"English"}')},306:function(e,n,t){"use strict";t.d(n,"a",(function(){return Ee}));var a=t(9),r=t.n(a),c=t(0),l=t.n(c),o=t(18),u=t.n(o),s=t(343),i=t(394),f=t(396),v=t(378),d=t(395),m=t(317),p=t.n(m),h=t(397),b=t(124),E=function(){var e=Object(c.useContext)(b.a),n=e.dark,t=e.setDark;if(null==n||null==t)throw new Error;var a=Object(c.useCallback)((function(e,n){t(n)}),[t]);return(l.a.createElement(h.a,{checked:n,onChange:a}))},g=t(45),C=t.n(g),y=t(98),O=t.n(y),j=t(59),S=t(301),_=t(402),k=t(398),x=t(401),L=t(399),N=t(426),w=t(417),R=t(55),I=t(125),M=t(305);var F=t(100),D=t(276),P=Object(D.d)({languages:{id:"src.components.LocaleSelect.languages",defaultMessage:"Languages"}}),U={selectLocale:F.c},W=Object(j.c)((function(e){return{locale:e.localeSelector.locale}}),U)((function(e){var n,t,a=e.classes,r=e.FormControlProps,o=e.locale,i=e.selectLocale,f=Object(c.useState)(0),v=u()(f,2),d=v[0],m=v[1],p=Object(c.useMemo)(S.a,[]),h=Object(R.a)(),b=Object(c.useMemo)((function(){var e,n,t,a;return null!==(e=null!==(n=null==r?void 0:r.variant)&&void 0!==n?n:null==h?void 0:null===(t=h.props)||void 0===t?void 0:null===(a=t.MuiFormControl)||void 0===a?void 0:a.variant)&&void 0!==e?e:"standard"}),[null==r?void 0:r.variant,null==h?void 0:null===(n=h.props)||void 0===n?void 0:null===(t=n.MuiFormControl)||void 0===t?void 0:t.variant]),E=Object(c.useMemo)((function(){return O()(null==a?void 0:a.root,null==r?void 0:r.className)}),[null==a?void 0:a.root,null==r?void 0:r.className]),g=Object(c.useMemo)((function(){return O()(null==a?void 0:a.label)}),[null==a?void 0:a.label]),y=Object(c.useMemo)((function(){return O()(null==a?void 0:a.input)}),[null==a?void 0:a.input]),j=Object(c.useMemo)((function(){return O()(null==a?void 0:a.selectIcon)}),[null==a?void 0:a.selectIcon]),F=Object(c.useMemo)((function(){return O()(null==a?void 0:a.inputUnderline)}),[null==a?void 0:a.inputUnderline]),D=Object(c.useCallback)((function(e){null!==e&&m(e.offsetWidth)}),[]),U=Object(c.useCallback)((function(e){var n;"string"==typeof(n=e.target.value)&&n in M&&i(e.target.value)}),[i]),W=Object(c.useContext)(I.a).availableLocales;return l.a.createElement(k.a,C()({},r,{className:E}),l.a.createElement(L.a,{className:g,ref:D,htmlFor:p},l.a.createElement(s.a,P.languages)),l.a.createElement(w.a,{classes:{icon:j},native:!0,labelWidth:d,value:o,onChange:U,id:p,inputProps:{"data-testid":"localeSelect"},input:{standard:l.a.createElement(x.a,{className:y,classes:{underline:F}}),outlined:l.a.createElement(N.a,{className:y,labelWidth:d}),filled:l.a.createElement(_.a,{className:y})}[b]},null==W?void 0:W.map((function(e,n){return l.a.createElement("option",{key:n,value:e},M[e])}))))})),A=t(46),T=t.n(A),V=t(405),q=t(12),J=t.n(q),X=t(17),Y=t.n(X),z=t(19),B=t.n(z),G=t(14),H=t.n(G),K=t(20),Q=t.n(K),Z=t(318),$=t(404),ee=t(302),ne=t(10);function te(){var e=r()([""," is not a Material-UI Typography color."]);return te=function(){return e},e}function ae(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var re=Object(ee.b)(Object(ee.a)("initial","inherit","primary","secondary","textPrimary","textSecondary","error")),ce=l.a.forwardRef((function(e,n){return l.a.createElement(Z.a,C()({innerRef:n},e))})),le=function(e){Q()(a,e);var n,t=(n=a,function(){var e,t=H()(n);if(ae()){var a=H()(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return B()(this,e)});function a(){return J()(this,a),t.apply(this,arguments)}return Y()(a,[{key:"render",value:function(){var e=this.props,n=e.color,t=T()(e,["color"]);return re(n)?l.a.createElement($.a,C()({component:ce,color:n},t)):(console.warn(Object(ne.a)(te(),n)),l.a.createElement($.a,C()({component:ce},t)))}}]),a}(l.a.Component),oe=c.forwardRef((function(e,n){var t=e.to,a=(e.button,e.innerRef),r=T()(e,["to","button","innerRef"]),l=c.forwardRef((function(e,n){return c.createElement(le,C()({ref:n,innerRef:a,color:"inherit",underline:"none"},e))}));return c.createElement(V.a,C()({button:!0,component:l,to:t,ref:n},r))})),ue=t(303),se=t.n(ue),ie=Object(D.d)({home:{id:"src.components.Nav.home",defaultMessage:"home"},chess:{id:"src.components.Nav.chess",defaultMessage:"chess"},counter:{id:"src.components.Nav.counter",defaultMessage:"counter"},info:{id:"src.components.Nav.info",defaultMessage:"info"},paint:{id:"src.components.Nav.paint",defaultMessage:"paint"},reminder:{id:"src.components.Nav.reminder",defaultMessage:"reminder"}}),fe=function(){var e=Object(c.useState)(null),n=u()(e,2),t=n[0],a=n[1],r=Object(c.useCallback)((function(e){a(e.currentTarget)}),[]),o=Object(c.useCallback)((function(){a(null)}),[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{position:"sticky"},l.a.createElement(d.a,null,l.a.createElement(f.a,{edge:"start",color:"inherit",onClick:r},l.a.createElement(p.a,null)),l.a.createElement("div",{className:se.a.Spacer}),l.a.createElement(E,null),l.a.createElement(W,{classes:{label:se.a.LocaleSelectLabel,input:se.a.LocaleSelectInput,selectIcon:se.a.LocaleSelectSelectIcon,inputUnderline:se.a.LocaleSelectInputUnderline},FormControlProps:{variant:"filled"}}))),l.a.createElement(v.a,{open:null!==t,anchorEl:t,onClose:o},l.a.createElement(oe,{to:"/",onClick:o},l.a.createElement(s.a,ie.home)),l.a.createElement(oe,{to:"/chess",onClick:o},l.a.createElement(s.a,ie.chess)),l.a.createElement(oe,{to:"/counter",onClick:o},l.a.createElement(s.a,ie.counter)),l.a.createElement(oe,{to:"/info",onClick:o},l.a.createElement(s.a,ie.info)),l.a.createElement(oe,{to:"/paint",onClick:o},l.a.createElement(s.a,ie.paint)),l.a.createElement(oe,{to:"/reminder",onClick:o},l.a.createElement(s.a,ie.reminder))))};function ve(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var de=function(e){Q()(a,e);var n,t=(n=a,function(){var e,t=H()(n);if(ve()){var a=H()(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return B()(this,e)});function a(){var e;J()(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e}return Y()(a,[{key:"render",value:function(){var e=this.props,n=e.renderError,t=e.children,a=this.state,r=a.hasError,c=a.error;return r?n(c,t):t}}]),a}(l.a.Component);de.getDerivedStateFromError=function(e){return{hasError:!0,error:e}};var me=de;function pe(){var e=r()([""," is not an error."]);return pe=function(){return e},e}function he(){var e=r()(["",""]);return he=function(){return e},e}var be=function(e){var n=e.children,t=Object(c.useCallback)((function(e){if(e instanceof Error)return Object(ne.a)(he(),String(e));throw new TypeError(Object(ne.a)(pe(),String(e)))}),[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(fe,null),l.a.createElement(me,{renderError:t},n))},Ee=function(e){return function(n){return l.a.createElement(be,null,l.a.createElement(e,n))}}},332:function(e,n,t){"use strict";function a(e){if(null==e)throw new Error}function r(e){if(null!=e)throw new Error}t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return r}))},369:function(e,n,t){var a=t(307),r=t(370);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var c={insert:"head",singleton:!1},l=(a(r,c),r.locals?r.locals:{});e.exports=l},370:function(e,n,t){(n=t(308)(!1)).push([e.i,".src-components-Canvas-classes__Canvas--_x96R {\n  background-color: white; /* TODO */\n}\n",""]),n.locals={Canvas:"src-components-Canvas-classes__Canvas--_x96R"},e.exports=n},413:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(126),l=t.n(c),o=t(326),u=t(18),s=t.n(u),i=t(343),f=t(398),v=t(407),d=t(400),m=t(419),p=t(424),h=t(45),b=t.n(h),E=t(12),g=t.n(E),C=t(17),y=t.n(C),O=t(19),j=t.n(O),S=t(14),_=t.n(S),k=t(20),x=t.n(k);function L(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var N=function(e){x()(a,e);var n,t=(n=a,function(){var e,t=_()(n);if(L()){var a=_()(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return j()(this,e)});function a(e){var n,r=e.red,c=e.green,l=e.blue,o=e.alpha;return g()(this,a),(n=t.call(this)).red=r,n.green=c,n.blue=l,n.alpha=o,n}return y()(a,[{key:"hashCode",value:function(){var e=0;return e=31*(e=31*(e=31*(e=31*e+this.red.hashCode())+this.green.hashCode())+this.blue.hashCode())+this.alpha.hashCode()}}]),a}(t(68).a),w=t(332),R=t(369),I=t.n(R);function M(e,n){var t=e.x,a=e.y,r=n.getImageData(t,a,1,1),c=s()(r.data,4),l=c[0],o=c[1],u=c[2],i=c[3];return new N({red:l,green:o,blue:u,alpha:i})}var F=function(e){var n=e.width,t=e.height,c=e.lineWidth,l=e.innerRef,o=e.context,u=e.tool,i=Object(a.useState)(!1),f=s()(i,2),v=f[0],d=f[1],m=Object(a.useState)(null),p=s()(m,2),h=p[0],b=p[1],E=Object(a.useCallback)((function(e){"pen"===u&&(Object(w.a)(h),d(!0),b({x:e.nativeEvent.offsetX,y:e.nativeEvent.offsetY}))}),[u,h]),g=Object(a.useCallback)((function(e){v&&(Object(w.b)(o),Object(w.b)(h),o.lineWidth=c*e.pressure,o.lineJoin="round",o.beginPath(),o.moveTo(h.x,h.y),o.lineTo(e.nativeEvent.offsetX,e.nativeEvent.offsetY),o.stroke(),b({x:e.nativeEvent.offsetX,y:e.nativeEvent.offsetY}))}),[c,o,v,h]),C=Object(a.useCallback)((function(){d(!1),b(null)}),[]),y=Object(a.useCallback)((function(){d(!1),b(null)}),[]),O=Object(a.useCallback)((function(e){"bucket"===u&&(Object(w.b)(o),function(e,n,t,a){Object(w.b)(a);var r=[],c=M(e,a);for(r.push(e);0!==r.length;){var l=r.shift();Object(w.b)(l);var o=M(l,a);c.equals(o)&&(a.fillRect(l.x,l.y,1,1),l.x>0&&r.push({x:l.x-1,y:l.y}),l.y>0&&r.push({x:l.x,y:l.y-1}),l.x<n-1&&r.push({x:l.x+1,y:l.y}),l.y<t-1&&r.push({x:l.x,y:l.y+1}))}}({x:e.nativeEvent.offsetX,y:e.nativeEvent.offsetY},n,t,o))}),[n,t,o,u]);return r.a.createElement("canvas",{ref:l,className:I.a.Canvas,width:n,height:t,onPointerDown:E,onPointerMove:g,onPointerUp:C,onPointerLeave:y,onClick:O})},D=Object(a.forwardRef)((function(e,n){return r.a.createElement(F,b()({innerRef:n},e))})),P=t(334),U=function(e){var n=e.children,t=e.width,c=e.height,l=e.context,o=Object(a.useCallback)((function(){null==l||l.clearRect(0,0,t,c)}),[null==l?void 0:l.clearRect,t,c]);return r.a.createElement(P.a,{onClick:o},n)},W=t(371),A=t.n(W),T=t(372),V=t.n(T),q=function(e){var n=e.value,t=e.onChange;return(r.a.createElement(f.a,null,r.a.createElement(p.a,{name:"tool",value:n,onChange:t},r.a.createElement(m.a,{icon:r.a.createElement(A.a,null),checkedIcon:r.a.createElement(A.a,null),value:"pen"}),r.a.createElement(m.a,{icon:r.a.createElement(V.a,null),checkedIcon:r.a.createElement(V.a,null),value:"bucket"}))))},J=t(302),X=t(276),Y=Object(X.d)({clear:{id:"src.components.Paint.clear",defaultMessage:"clear"}}),z=Object(J.a)("butt","round","square"),B=Object(J.a)("pen","bucket"),G=function(){var e=Object(a.useState)(),n=s()(e,2),t=n[0],c=n[1],l=Object(a.useState)("round"),o=s()(l,2),u=o[0],h=o[1],b=Object(a.useState)("pen"),E=s()(b,2),g=E[0],C=E[1],y=Object(a.useCallback)((function(e){c(null==e?void 0:e.getContext("2d"))}),[]),O=Object(a.useCallback)((function(e,n){B(n)&&C(n)}),[]),j=Object(a.useCallback)((function(e){z(e.target.value)&&h(e.target.value)}),[]);return Object(a.useEffect)((function(){null!=t&&(t.lineCap=u)}),[t,u]),r.a.createElement(r.a.Fragment,null,r.a.createElement(D,{width:320,height:320,lineWidth:10,ref:y,context:t,tool:g}),r.a.createElement(U,{width:320,height:320,context:t},r.a.createElement(i.a,Y.clear)),r.a.createElement(q,{value:g,onChange:O}),r.a.createElement(f.a,{disabled:"pen"!==g},r.a.createElement(d.a,null,"line cap"),r.a.createElement(p.a,{name:"lineCap",value:u,onChange:j},r.a.createElement(v.a,{value:"butt",label:"butt",control:r.a.createElement(m.a,null)}),r.a.createElement(v.a,{value:"round",label:"round",control:r.a.createElement(m.a,null)}),r.a.createElement(v.a,{value:"square",label:"square",control:r.a.createElement(m.a,null)}))))},H=t(306),K=Object(X.d)({paint:{id:"src.components.App.PaintPage.paint",defaultMessage:"paint"}});n.default=Object(H.a)((function(){var e=Object(o.a)().formatMessage;return(r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:e(K.paint)}),r.a.createElement(G,null)))}))}}]);
//# sourceMappingURL=paint~21833f8f.26670f05.js.map