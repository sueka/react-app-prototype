(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1021:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),c=t(139),l=t.n(c),o=t(238),s=t(23),u=t.n(s),i=t(900),f=t.n(i),m=t(999),v=t.n(m),d=t(928),p=t.n(d),h=t(939),b=t.n(h),E=t(936),g=t.n(E),C=t(7),y=t.n(C),O=t(919),j=t(10),S=t.n(j),_=t(14),k=t.n(_),x=t(26),L=t.n(x),N=t(27),M=t.n(N),w=t(12),R=t.n(w);function F(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=R()(e);if(n){var r=R()(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return M()(this,t)}}var I=function(e){L()(t,e);var n=F(t);function t(e){var a,r=e.red,c=e.green,l=e.blue,o=e.alpha;return S()(this,t),(a=n.call(this)).red=r,a.green=c,a.blue=l,a.alpha=o,a}return k()(t,[{key:"hashCode",value:function(){var e=0;return e=31*(e=31*(e=31*(e=31*e+this.red.hashCode())+this.green.hashCode())+this.blue.hashCode())+this.alpha.hashCode()}}]),t}(t(107).a);function D(e,n){var t=e.x,a=e.y,r=n.getImageData(t,a,1,1),c=u()(r.data,4),l=c[0],o=c[1],s=c[2],i=c[3];return new I({red:l,green:o,blue:s,alpha:i})}var P=t(988),U=t.n(P),W=function(e){var n=e.width,t=e.height,c=e.lineWidth,l=e.innerRef,o=e.context,s=e.tool,i=Object(a.useState)(!1),f=u()(i,2),m=f[0],v=f[1],d=Object(a.useState)(null),p=u()(d,2),h=p[0],b=p[1],E=Object(a.useCallback)((function(e){"pen"===s&&(Object(O.a)(h),v(!0),b({x:e.nativeEvent.offsetX,y:e.nativeEvent.offsetY}))}),[s,h]),g=Object(a.useCallback)((function(e){m&&(Object(O.b)(o),Object(O.b)(h),o.lineWidth=c*e.pressure,o.lineJoin="round",o.beginPath(),o.moveTo(h.x,h.y),o.lineTo(e.nativeEvent.offsetX,e.nativeEvent.offsetY),o.stroke(),b({x:e.nativeEvent.offsetX,y:e.nativeEvent.offsetY}))}),[c,o,m,h]),C=Object(a.useCallback)((function(){v(!1),b(null)}),[]),y=Object(a.useCallback)((function(){v(!1),b(null)}),[]),j=Object(a.useCallback)((function(e){"bucket"===s&&(Object(O.b)(o),function(e,n,t,a){Object(O.b)(a);var r=[],c=D(e,a);for(r.push(e);0!==r.length;){var l=r.shift();Object(O.b)(l);var o=D(l,a);c.equals(o)&&(a.fillRect(l.x,l.y,1,1),l.x>0&&r.push({x:l.x-1,y:l.y}),l.y>0&&r.push({x:l.x,y:l.y-1}),l.x<n-1&&r.push({x:l.x+1,y:l.y}),l.y<t-1&&r.push({x:l.x,y:l.y+1}))}}({x:e.nativeEvent.offsetX,y:e.nativeEvent.offsetY},n,t,o))}),[n,t,o,s]);return r.a.createElement("canvas",{ref:l,className:U.a.Canvas,width:n,height:t,onPointerDown:E,onPointerMove:g,onPointerUp:C,onPointerLeave:y,onClick:j})},T=Object(a.forwardRef)((function(e,n){return r.a.createElement(W,y()({innerRef:n},e))})),A=t(899),V=t.n(A),q=function(e){var n=e.children,t=e.width,c=e.height,l=e.context,o=Object(a.useCallback)((function(){null==l||l.clearRect(0,0,t,c)}),[l,t,c]);return r.a.createElement(V.a,{onClick:o},n)},J=t(997),X=t.n(J),Y=t(998),z=t.n(Y),B=function(e){var n=e.value,t=e.onChange;return r.a.createElement(f.a,null,r.a.createElement(g.a,{name:"tool",value:n,onChange:t},r.a.createElement(b.a,{icon:r.a.createElement(X.a,null),checkedIcon:r.a.createElement(X.a,null),value:"pen"}),r.a.createElement(b.a,{icon:r.a.createElement(z.a,null),checkedIcon:r.a.createElement(z.a,null),value:"bucket"})))},G=t(891),H=Object(o.defineMessages)({clear:{id:"src.components.Paint.clear",defaultMessage:"clear"}}),K=Object(G.a)("butt","round","square"),Q=Object(G.a)("pen","bucket"),Z=function(){var e=Object(a.useState)(),n=u()(e,2),t=n[0],c=n[1],l=Object(a.useState)("round"),s=u()(l,2),i=s[0],m=s[1],d=Object(a.useState)("pen"),h=u()(d,2),E=h[0],C=h[1],y=Object(a.useCallback)((function(e){c(null==e?void 0:e.getContext("2d"))}),[]),O=Object(a.useCallback)((function(e,n){Q(n)&&C(n)}),[]),j=Object(a.useCallback)((function(e){K(e.target.value)&&m(e.target.value)}),[]);return Object(a.useEffect)((function(){null!=t&&(t.lineCap=i)}),[t,i]),r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{width:320,height:320,lineWidth:10,ref:y,context:t,tool:E}),r.a.createElement(q,{width:320,height:320,context:t},r.a.createElement(o.FormattedMessage,H.clear)),r.a.createElement(B,{value:E,onChange:O}),r.a.createElement(f.a,{disabled:"pen"!==E},r.a.createElement(p.a,null,"line cap"),r.a.createElement(g.a,{name:"lineCap",value:i,onChange:j},r.a.createElement(v.a,{value:"butt",label:"butt",control:r.a.createElement(b.a,null)}),r.a.createElement(v.a,{value:"round",label:"round",control:r.a.createElement(b.a,null)}),r.a.createElement(v.a,{value:"square",label:"square",control:r.a.createElement(b.a,null)}))))},$=t(896),ee=Object(o.defineMessages)({paint:{id:"src.components.App.PaintPage.paint",defaultMessage:"paint"}});n.default=Object($.a)((function(){var e=Object(o.useIntl)().formatMessage;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:e(ee.paint)}),r.a.createElement(Z,null))}))},891:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return r}));var a=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.some((function(n){return n===e}))}},r=function(e){return function(n){return void 0===n||e(n)}}},893:function(e,n,t){var a=t(897),r=t(894);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var c={insert:"head",singleton:!1};a(r,c);e.exports=r.locals||{}},894:function(e,n,t){(n=t(898)(!1)).push([e.i,".src-components-Nav-classes__Spacer--36ovl {\n  flex-grow: 1;\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV {\n  color: currentColor\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV.Mui-focused {\n    opacity: 0.618;\n    color: currentColor;\n  }\n\n.src-components-Nav-classes__LocaleSelectInput--3oNu1.src-components-Nav-classes__LocaleSelectInput--3oNu1 {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx:hover:not(.Mui-disabled)::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::after {\n    border-bottom-color: currentColor;\n  }\n",""]),n.locals={Spacer:"src-components-Nav-classes__Spacer--36ovl",LocaleSelectLabel:"src-components-Nav-classes__LocaleSelectLabel--3h3DV",LocaleSelectInput:"src-components-Nav-classes__LocaleSelectInput--3oNu1",LocaleSelectSelectIcon:"src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk",LocaleSelectInputUnderline:"src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx"},e.exports=n},895:function(e){e.exports=JSON.parse('{"ja":"日本語","en":"English","he":"עברית"}')},896:function(e,n,t){"use strict";t.d(n,"a",(function(){return Me}));var a=t(8),r=t.n(a),c=t(1),l=t.n(c),o=t(23),s=t.n(o),u=t(238),i=t(912),f=t.n(i),m=t(904),v=t.n(m),d=t(917),p=t.n(d),h=t(913),b=t.n(h),E=t(914),g=t.n(E),C=t(915),y=t.n(C),O=t(239),j=function(){var e=Object(c.useContext)(O.a),n=e.dark,t=e.setDark;if(null==n||null==t)throw new Error;var a=Object(c.useCallback)((function(e,n){t(n)}),[t]);return l.a.createElement(y.a,{checked:n,onChange:a})},S=t(7),_=t.n(S),k=t(901),x=t.n(k),L=t(110),N=t(140),M=t(905),w=t.n(M),R=t(900),F=t.n(R),I=t(902),D=t.n(I),P=t(907),U=t.n(P),W=t(892),T=t.n(W),A=t(906),V=t.n(A),q=t(908),J=t.n(q),X=t(97),Y=t(137),z=t(895);var B=t(178),G=Object(u.defineMessages)({languages:{id:"src.components.LocaleSelect.languages",defaultMessage:"Languages"}}),H={selectLocale:B.c},K=Object(L.connect)((function(e){return{locale:e.localeSelector.locale}}),H)((function(e){var n,t,a=e.classes,r=e.FormControlProps,o=e.locale,i=e.selectLocale,f=Object(c.useState)(0),m=s()(f,2),v=m[0],d=m[1],p=Object(c.useMemo)(N.v4,[]),h=Object(X.useTheme)(),b=Object(c.useMemo)((function(){var e,n,t,a;return null!==(e=null!==(n=null==r?void 0:r.variant)&&void 0!==n?n:null==h||null===(t=h.props)||void 0===t||null===(a=t.MuiFormControl)||void 0===a?void 0:a.variant)&&void 0!==e?e:"standard"}),[null==r?void 0:r.variant,null==h||null===(n=h.props)||void 0===n||null===(t=n.MuiFormControl)||void 0===t?void 0:t.variant]),E=Object(c.useMemo)((function(){return x()(null==a?void 0:a.root,null==r?void 0:r.className)}),[null==a?void 0:a.root,null==r?void 0:r.className]),g=Object(c.useMemo)((function(){return x()(null==a?void 0:a.label)}),[null==a?void 0:a.label]),C=Object(c.useMemo)((function(){return x()(null==a?void 0:a.input)}),[null==a?void 0:a.input]),y=Object(c.useMemo)((function(){return x()(null==a?void 0:a.selectIcon)}),[null==a?void 0:a.selectIcon]),O=Object(c.useMemo)((function(){return x()(null==a?void 0:a.inputUnderline)}),[null==a?void 0:a.inputUnderline]),j=Object(c.useCallback)((function(e){null!==e&&d(e.offsetWidth)}),[]),S=Object(c.useCallback)((function(e){var n;"string"==typeof(n=e.target.value)&&n in z&&i(e.target.value)}),[i]),k=Object(c.useContext)(Y.a).availableLocales;return l.a.createElement(F.a,_()({},r,{className:E}),l.a.createElement(U.a,{className:g,ref:j,htmlFor:p},l.a.createElement(u.FormattedMessage,G.languages)),l.a.createElement(J.a,{classes:{icon:y},labelWidth:v,value:o,onChange:S,id:p,inputProps:{"data-testid":"localeSelect"},input:{standard:l.a.createElement(D.a,{className:C,classes:{underline:O}}),outlined:l.a.createElement(V.a,{className:C,labelWidth:v}),filled:l.a.createElement(w.a,{className:C})}[b]},null==k?void 0:k.map((function(e,n){return l.a.createElement(T.a,{key:n,value:e},z[e])}))))})),Q=t(30),Z=t.n(Q),$=t(10),ee=t.n($),ne=t(14),te=t.n(ne),ae=t(26),re=t.n(ae),ce=t(27),le=t.n(ce),oe=t(12),se=t.n(oe),ue=t(918),ie=t(909),fe=t.n(ie),me=t(891),ve=t(9);function de(){var e=r()([""," is not a Material-UI Typography color."]);return de=function(){return e},e}function pe(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=se()(e);if(n){var r=se()(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return le()(this,t)}}var he=Object(me.b)(Object(me.a)("initial","inherit","primary","secondary","textPrimary","textSecondary","error")),be=l.a.forwardRef((function(e,n){return l.a.createElement(ue.Link,_()({innerRef:n},e))})),Ee=function(e){re()(t,e);var n=pe(t);function t(){return ee()(this,t),n.apply(this,arguments)}return te()(t,[{key:"render",value:function(){var e=this.props,n=e.color,t=Z()(e,["color"]);return he(n)?l.a.createElement(fe.a,_()({component:be,color:n},t)):(console.warn(Object(ve.a)(de(),n)),l.a.createElement(fe.a,_()({component:be},t)))}}]),t}(l.a.Component),ge=c.forwardRef((function(e,n){var t=e.to,a=(e.button,e.innerRef),r=Z()(e,["to","button","innerRef"]),l=c.forwardRef((function(e,n){return c.createElement(Ee,_()({ref:n,innerRef:a,color:"inherit",underline:"none"},e))}));return c.createElement(T.a,_()({button:!0,component:l,to:t,ref:n},r))})),Ce=t(893),ye=t.n(Ce),Oe=Object(u.defineMessages)({home:{id:"src.components.Nav.home",defaultMessage:"home"},chess:{id:"src.components.Nav.chess",defaultMessage:"chess"},counter:{id:"src.components.Nav.counter",defaultMessage:"counter"},info:{id:"src.components.Nav.info",defaultMessage:"info"},paint:{id:"src.components.Nav.paint",defaultMessage:"paint"},reminder:{id:"src.components.Nav.reminder",defaultMessage:"reminder"}}),je=function(){var e=Object(c.useState)(null),n=s()(e,2),t=n[0],a=n[1],r=Object(c.useCallback)((function(e){a(e.currentTarget)}),[]),o=Object(c.useCallback)((function(){a(null)}),[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{position:"sticky"},l.a.createElement(b.a,null,l.a.createElement(v.a,{edge:"start",color:"inherit",onClick:r},l.a.createElement(g.a,null)),l.a.createElement("div",{className:ye.a.Spacer}),l.a.createElement(j,null),l.a.createElement(K,{classes:{label:ye.a.LocaleSelectLabel,input:ye.a.LocaleSelectInput,selectIcon:ye.a.LocaleSelectSelectIcon,inputUnderline:ye.a.LocaleSelectInputUnderline},FormControlProps:{variant:"filled"}}))),l.a.createElement(p.a,{open:null!==t,anchorEl:t,onClose:o},l.a.createElement(ge,{to:"/",onClick:o},l.a.createElement(u.FormattedMessage,Oe.home)),l.a.createElement(ge,{to:"/chess",onClick:o},l.a.createElement(u.FormattedMessage,Oe.chess)),l.a.createElement(ge,{to:"/counter",onClick:o},l.a.createElement(u.FormattedMessage,Oe.counter)),l.a.createElement(ge,{to:"/info",onClick:o},l.a.createElement(u.FormattedMessage,Oe.info)),l.a.createElement(ge,{to:"/paint",onClick:o},l.a.createElement(u.FormattedMessage,Oe.paint)),l.a.createElement(ge,{to:"/reminder",onClick:o},l.a.createElement(u.FormattedMessage,Oe.reminder))))};function Se(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=se()(e);if(n){var r=se()(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return le()(this,t)}}var _e=function(e){re()(t,e);var n=Se(t);function t(){var e;ee()(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).state={hasError:!1},e}return te()(t,[{key:"render",value:function(){var e=this.props,n=e.renderError,t=e.children,a=this.state,r=a.hasError,c=a.error;return r?n(c,t):t}}]),t}(l.a.Component);_e.getDerivedStateFromError=function(e){return{hasError:!0,error:e}};var ke=_e;function xe(){var e=r()([""," is not an error."]);return xe=function(){return e},e}function Le(){var e=r()(["",""]);return Le=function(){return e},e}var Ne=function(e){var n=e.children,t=Object(c.useCallback)((function(e){if(e instanceof Error)return Object(ve.a)(Le(),String(e));throw new TypeError(Object(ve.a)(xe(),String(e)))}),[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(je,null),l.a.createElement(ke,{renderError:t},n))},Me=function(e){return function(n){return l.a.createElement(Ne,null,l.a.createElement(e,n))}}},919:function(e,n,t){"use strict";function a(e){if(null==e)throw new Error}function r(e){if(null!=e)throw new Error}t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return r}))},988:function(e,n,t){var a=t(897),r=t(989);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var c={insert:"head",singleton:!1};a(r,c);e.exports=r.locals||{}},989:function(e,n,t){(n=t(898)(!1)).push([e.i,".src-components-Canvas-classes__Canvas--_x96R {\n  background-color: white; /* TODO */\n}\n",""]),n.locals={Canvas:"src-components-Canvas-classes__Canvas--_x96R"},e.exports=n}}]);
//# sourceMappingURL=paint~21833f8f.bbf4ccb6.js.map