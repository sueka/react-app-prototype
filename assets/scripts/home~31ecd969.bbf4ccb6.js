(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1022:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(139),c=n.n(r),l=n(238),i=n(910),s=n.n(i),u=n(110),d=n(7),p=n.n(d),m=function(e){return o.a.createElement(l.FormattedTime,p()({},e,{weekday:void 0,era:void 0,year:void 0,month:void 0,day:void 0}))},f=Object(u.connect)((function(e){return{now:e.io.now}}))((function(e){var t=e.now;return o.a.createElement(s.a,null,o.a.createElement(m,{value:t,format:"medium"}))})),b=n(899),v=n.n(b),h=n(223),g=Object(l.defineMessages)({authenticateAUserWithGitHub:{id:"src.components.GitHubAuthnButton.authenticateAUserWithGitHub",defaultMessage:"Authenticate a user with GitHub"}}),y=function(){var e=Object(u.useDispatch)(),t=Object(a.useCallback)((function(){e(Object(h.c)())}),[e]);return o.a.createElement(v.a,{onClick:t},o.a.createElement(l.FormattedMessage,g.authenticateAUserWithGitHub))},S=n(226),E=Object(l.defineMessages)({setTheClock:{id:"src.components.SetClockButton.setTheClock",defaultMessage:"Set the clock"}}),x={updateNow:S.c},C=Object(u.connect)(null,x)((function(e){var t=e.updateNow;return o.a.createElement(v.a,{onClick:t},o.a.createElement(l.FormattedMessage,E.setTheClock))})),k=Object(u.connect)((function(e){return{now:e.io.now}}))((function(e){var t=e.now;return o.a.createElement(s.a,null,o.a.createElement(l.FormattedDate,{value:t,format:"medium"}))})),N=n(896),w=Object(l.defineMessages)({home:{id:"src.components.App.HomePage.home",defaultMessage:"home"},helloWorld:{id:"src.components.App.HomePage.helloWorld",defaultMessage:"Hello, world!"}});t.default=Object(N.a)((function(){var e=Object(l.useIntl)().formatMessage;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{title:e(w.home)}),o.a.createElement(s.a,null,o.a.createElement(l.FormattedMessage,w.helloWorld)),o.a.createElement(s.a,null,o.a.createElement(l.FormattedNumber,{format:"usd",value:100})),o.a.createElement(k,null),o.a.createElement(f,null),o.a.createElement(C,null),o.a.createElement(y,null))}))},891:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.some((function(t){return t===e}))}},o=function(e){return function(t){return void 0===t||e(t)}}},893:function(e,t,n){var a=n(897),o=n(894);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};a(o,r);e.exports=o.locals||{}},894:function(e,t,n){(t=n(898)(!1)).push([e.i,".src-components-Nav-classes__Spacer--36ovl {\n  flex-grow: 1;\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV {\n  color: currentColor\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV.Mui-focused {\n    opacity: 0.618;\n    color: currentColor;\n  }\n\n.src-components-Nav-classes__LocaleSelectInput--3oNu1.src-components-Nav-classes__LocaleSelectInput--3oNu1 {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx:hover:not(.Mui-disabled)::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::after {\n    border-bottom-color: currentColor;\n  }\n",""]),t.locals={Spacer:"src-components-Nav-classes__Spacer--36ovl",LocaleSelectLabel:"src-components-Nav-classes__LocaleSelectLabel--3h3DV",LocaleSelectInput:"src-components-Nav-classes__LocaleSelectInput--3oNu1",LocaleSelectSelectIcon:"src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk",LocaleSelectInputUnderline:"src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx"},e.exports=t},895:function(e){e.exports=JSON.parse('{"ja":"日本語","en":"English","he":"עברית"}')},896:function(e,t,n){"use strict";n.d(t,"a",(function(){return Me}));var a=n(8),o=n.n(a),r=n(1),c=n.n(r),l=n(23),i=n.n(l),s=n(238),u=n(912),d=n.n(u),p=n(904),m=n.n(p),f=n(917),b=n.n(f),v=n(913),h=n.n(v),g=n(914),y=n.n(g),S=n(915),E=n.n(S),x=n(239),C=function(){var e=Object(r.useContext)(x.a),t=e.dark,n=e.setDark;if(null==t||null==n)throw new Error;var a=Object(r.useCallback)((function(e,t){n(t)}),[n]);return c.a.createElement(E.a,{checked:t,onChange:a})},k=n(7),N=n.n(k),w=n(901),L=n.n(w),O=n(110),_=n(140),M=n(905),j=n.n(M),I=n(900),F=n.n(I),R=n(902),z=n.n(R),W=n(907),T=n.n(W),U=n(892),D=n.n(U),P=n(906),A=n.n(P),V=n(908),$=n.n(V),H=n(97),B=n(137),G=n(895);var J=n(178),q=Object(s.defineMessages)({languages:{id:"src.components.LocaleSelect.languages",defaultMessage:"Languages"}}),K={selectLocale:J.c},Q=Object(O.connect)((function(e){return{locale:e.localeSelector.locale}}),K)((function(e){var t,n,a=e.classes,o=e.FormControlProps,l=e.locale,u=e.selectLocale,d=Object(r.useState)(0),p=i()(d,2),m=p[0],f=p[1],b=Object(r.useMemo)(_.v4,[]),v=Object(H.useTheme)(),h=Object(r.useMemo)((function(){var e,t,n,a;return null!==(e=null!==(t=null==o?void 0:o.variant)&&void 0!==t?t:null==v||null===(n=v.props)||void 0===n||null===(a=n.MuiFormControl)||void 0===a?void 0:a.variant)&&void 0!==e?e:"standard"}),[null==o?void 0:o.variant,null==v||null===(t=v.props)||void 0===t||null===(n=t.MuiFormControl)||void 0===n?void 0:n.variant]),g=Object(r.useMemo)((function(){return L()(null==a?void 0:a.root,null==o?void 0:o.className)}),[null==a?void 0:a.root,null==o?void 0:o.className]),y=Object(r.useMemo)((function(){return L()(null==a?void 0:a.label)}),[null==a?void 0:a.label]),S=Object(r.useMemo)((function(){return L()(null==a?void 0:a.input)}),[null==a?void 0:a.input]),E=Object(r.useMemo)((function(){return L()(null==a?void 0:a.selectIcon)}),[null==a?void 0:a.selectIcon]),x=Object(r.useMemo)((function(){return L()(null==a?void 0:a.inputUnderline)}),[null==a?void 0:a.inputUnderline]),C=Object(r.useCallback)((function(e){null!==e&&f(e.offsetWidth)}),[]),k=Object(r.useCallback)((function(e){var t;"string"==typeof(t=e.target.value)&&t in G&&u(e.target.value)}),[u]),w=Object(r.useContext)(B.a).availableLocales;return c.a.createElement(F.a,N()({},o,{className:g}),c.a.createElement(T.a,{className:y,ref:C,htmlFor:b},c.a.createElement(s.FormattedMessage,q.languages)),c.a.createElement($.a,{classes:{icon:E},labelWidth:m,value:l,onChange:k,id:b,inputProps:{"data-testid":"localeSelect"},input:{standard:c.a.createElement(z.a,{className:S,classes:{underline:x}}),outlined:c.a.createElement(A.a,{className:S,labelWidth:m}),filled:c.a.createElement(j.a,{className:S})}[h]},null==w?void 0:w.map((function(e,t){return c.a.createElement(D.a,{key:t,value:e},G[e])}))))})),X=n(30),Y=n.n(X),Z=n(10),ee=n.n(Z),te=n(14),ne=n.n(te),ae=n(26),oe=n.n(ae),re=n(27),ce=n.n(re),le=n(12),ie=n.n(le),se=n(918),ue=n(909),de=n.n(ue),pe=n(891),me=n(9);function fe(){var e=o()([""," is not a Material-UI Typography color."]);return fe=function(){return e},e}function be(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=ie()(e);if(t){var o=ie()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return ce()(this,n)}}var ve=Object(pe.b)(Object(pe.a)("initial","inherit","primary","secondary","textPrimary","textSecondary","error")),he=c.a.forwardRef((function(e,t){return c.a.createElement(se.Link,N()({innerRef:t},e))})),ge=function(e){oe()(n,e);var t=be(n);function n(){return ee()(this,n),t.apply(this,arguments)}return ne()(n,[{key:"render",value:function(){var e=this.props,t=e.color,n=Y()(e,["color"]);return ve(t)?c.a.createElement(de.a,N()({component:he,color:t},n)):(console.warn(Object(me.a)(fe(),t)),c.a.createElement(de.a,N()({component:he},n)))}}]),n}(c.a.Component),ye=r.forwardRef((function(e,t){var n=e.to,a=(e.button,e.innerRef),o=Y()(e,["to","button","innerRef"]),c=r.forwardRef((function(e,t){return r.createElement(ge,N()({ref:t,innerRef:a,color:"inherit",underline:"none"},e))}));return r.createElement(D.a,N()({button:!0,component:c,to:n,ref:t},o))})),Se=n(893),Ee=n.n(Se),xe=Object(s.defineMessages)({home:{id:"src.components.Nav.home",defaultMessage:"home"},chess:{id:"src.components.Nav.chess",defaultMessage:"chess"},counter:{id:"src.components.Nav.counter",defaultMessage:"counter"},info:{id:"src.components.Nav.info",defaultMessage:"info"},paint:{id:"src.components.Nav.paint",defaultMessage:"paint"},reminder:{id:"src.components.Nav.reminder",defaultMessage:"reminder"}}),Ce=function(){var e=Object(r.useState)(null),t=i()(e,2),n=t[0],a=t[1],o=Object(r.useCallback)((function(e){a(e.currentTarget)}),[]),l=Object(r.useCallback)((function(){a(null)}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{position:"sticky"},c.a.createElement(h.a,null,c.a.createElement(m.a,{edge:"start",color:"inherit",onClick:o},c.a.createElement(y.a,null)),c.a.createElement("div",{className:Ee.a.Spacer}),c.a.createElement(C,null),c.a.createElement(Q,{classes:{label:Ee.a.LocaleSelectLabel,input:Ee.a.LocaleSelectInput,selectIcon:Ee.a.LocaleSelectSelectIcon,inputUnderline:Ee.a.LocaleSelectInputUnderline},FormControlProps:{variant:"filled"}}))),c.a.createElement(b.a,{open:null!==n,anchorEl:n,onClose:l},c.a.createElement(ye,{to:"/",onClick:l},c.a.createElement(s.FormattedMessage,xe.home)),c.a.createElement(ye,{to:"/chess",onClick:l},c.a.createElement(s.FormattedMessage,xe.chess)),c.a.createElement(ye,{to:"/counter",onClick:l},c.a.createElement(s.FormattedMessage,xe.counter)),c.a.createElement(ye,{to:"/info",onClick:l},c.a.createElement(s.FormattedMessage,xe.info)),c.a.createElement(ye,{to:"/paint",onClick:l},c.a.createElement(s.FormattedMessage,xe.paint)),c.a.createElement(ye,{to:"/reminder",onClick:l},c.a.createElement(s.FormattedMessage,xe.reminder))))};function ke(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=ie()(e);if(t){var o=ie()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return ce()(this,n)}}var Ne=function(e){oe()(n,e);var t=ke(n);function n(){var e;ee()(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={hasError:!1},e}return ne()(n,[{key:"render",value:function(){var e=this.props,t=e.renderError,n=e.children,a=this.state,o=a.hasError,r=a.error;return o?t(r,n):n}}]),n}(c.a.Component);Ne.getDerivedStateFromError=function(e){return{hasError:!0,error:e}};var we=Ne;function Le(){var e=o()([""," is not an error."]);return Le=function(){return e},e}function Oe(){var e=o()(["",""]);return Oe=function(){return e},e}var _e=function(e){var t=e.children,n=Object(r.useCallback)((function(e){if(e instanceof Error)return Object(me.a)(Oe(),String(e));throw new TypeError(Object(me.a)(Le(),String(e)))}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(Ce,null),c.a.createElement(we,{renderError:n},t))},Me=function(e){return function(t){return c.a.createElement(_e,null,c.a.createElement(e,t))}}},899:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=a(n(903))},903:function(e,t,n){"use strict";var a=n(25),o=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=o(n(30)),c=o(n(7)),l=a(n(1)),i=(o(n(16)),o(n(73))),s=o(n(74)),u=n(176),d=o(n(911)),p=o(n(135)),m=function(e){return{root:(0,c.default)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:(0,u.fade)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,u.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,u.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat((0,u.fade)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:(0,u.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat((0,u.fade)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:(0,u.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}};t.styles=m;var f=l.forwardRef((function(e,t){var n=e.children,a=e.classes,o=e.className,s=e.color,u=void 0===s?"default":s,m=e.component,f=void 0===m?"button":m,b=e.disabled,v=void 0!==b&&b,h=e.disableElevation,g=void 0!==h&&h,y=e.disableFocusRipple,S=void 0!==y&&y,E=e.endIcon,x=e.focusVisibleClassName,C=e.fullWidth,k=void 0!==C&&C,N=e.size,w=void 0===N?"medium":N,L=e.startIcon,O=e.type,_=void 0===O?"button":O,M=e.variant,j=void 0===M?"text":M,I=(0,r.default)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),F=L&&l.createElement("span",{className:(0,i.default)(a.startIcon,a["iconSize".concat((0,p.default)(w))])},L),R=E&&l.createElement("span",{className:(0,i.default)(a.endIcon,a["iconSize".concat((0,p.default)(w))])},E);return l.createElement(d.default,(0,c.default)({className:(0,i.default)(a.root,a[j],o,"inherit"===u?a.colorInherit:"default"!==u&&a["".concat(j).concat((0,p.default)(u))],"medium"!==w&&[a["".concat(j,"Size").concat((0,p.default)(w))],a["size".concat((0,p.default)(w))]],g&&a.disableElevation,v&&a.disabled,k&&a.fullWidth),component:f,disabled:v,focusRipple:!S,focusVisibleClassName:(0,i.default)(a.focusVisible,x),ref:t,type:_},I),l.createElement("span",{className:a.label},F,n,R))})),b=(0,s.default)(m,{name:"MuiButton"})(f);t.default=b}}]);
//# sourceMappingURL=home~31ecd969.bbf4ccb6.js.map