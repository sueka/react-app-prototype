(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1025:function(e,t,n){"use strict";n.r(t);var a,o,r,c=n(1),l=n.n(c),i=n(139),s=n.n(i),u=n(238),d=n(985),f=n.n(d),p=n(10),m=n.n(p),h=n(14),b=n.n(h),v=n(163),g=n.n(v),y=n(26),S=n.n(y),x=n(27),E=n.n(x),k=n(12),C=n.n(k),N=n(986),L=n.n(N),O=(n(987),n(72)),_=n(310),w=n(899),j=n.n(w),M=n(909),I=n.n(M),R=n(910),z=n.n(R),F=Object(u.defineMessages)({fetchData:{id:"src.components.Info.fetchData",defaultMessage:"Fetch data"},fetching:{id:"src.components.Info.fetching",defaultMessage:"Fetching…"},fetchingNotStarted:{id:"src.components.Info.fetchingNotStarted",defaultMessage:"Fetching not started."},fetchingDoneSuccessfully:{id:"src.components.Info.fetchingDoneSuccessfully",defaultMessage:"Fetching done successfully."},fetchingFailed:{id:"src.components.Info.fetchingFailed",defaultMessage:"Fetching failed."}});function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=C()(e);if(t){var o=C()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return E()(this,n)}}var P=(a=Object(_.resolve)("GetRepo"),o=function(e){S()(n,e);var t=D(n);function n(){var e;m()(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return e=t.call.apply(t,[this].concat(o)),f()(e,"getRepo",r,g()(e)),e.state={successful:!0,fetching:!1},e.handleClick=function(){e.setState({fetching:!0}),e.getRepo.apply({owner:"sueka",repo:"react-app-prototype"}).then((function(t){t.successful?e.setState({successful:!0,fetching:!1,repo:Object(O.right)(t.response.body)}):e.setState({successful:!1,fetching:!1,repo:Object(O.left)(new Error(t.response.body.message))})}),(function(t){console.error(t),e.setState({successful:!1,fetching:!1,repo:null})}))},e}return b()(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(j.a,{onClick:this.handleClick,disabled:this.state.fetching,variant:"contained",color:"secondary"},l.a.createElement(u.FormattedMessage,F.fetchData)),l.a.createElement(z.a,null,this.statusText),null!=this.info&&l.a.createElement(z.a,{component:"span"},this.info))}},{key:"statusText",get:function(){var e=this.props.intl.formatMessage,t=this.state,n=(t.successful,t.fetching),a=t.repo;return n?e(F.fetching):null==a?e(F.fetchingNotStarted):Object(O.isRight)(a)?e(F.fetchingDoneSuccessfully):e(F.fetchingFailed)}},{key:"info",get:function(){var e=this.state.repo;return null==e?e:Object(O.isLeft)(e)?e.toString():l.a.createElement(I.a,{href:e.right.html_url},e.right.full_name)}}]),n}(l.a.Component),r=L()(o.prototype,"getRepo",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),o),T=Object(u.injectIntl)(P),W=n(896),U=Object(u.defineMessages)({info:{id:"src.components.App.InfoPage.info",defaultMessage:"info"}});t.default=Object(W.a)((function(){var e=Object(u.useIntl)().formatMessage;return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{title:e(U.info)}),l.a.createElement(T,null))}))},891:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.some((function(t){return t===e}))}},o=function(e){return function(t){return void 0===t||e(t)}}},893:function(e,t,n){var a=n(897),o=n(894);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};a(o,r);e.exports=o.locals||{}},894:function(e,t,n){(t=n(898)(!1)).push([e.i,".src-components-Nav-classes__Spacer--36ovl {\n  flex-grow: 1;\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV {\n  color: currentColor\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV.Mui-focused {\n    opacity: 0.618;\n    color: currentColor;\n  }\n\n.src-components-Nav-classes__LocaleSelectInput--3oNu1.src-components-Nav-classes__LocaleSelectInput--3oNu1 {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx:hover:not(.Mui-disabled)::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::after {\n    border-bottom-color: currentColor;\n  }\n",""]),t.locals={Spacer:"src-components-Nav-classes__Spacer--36ovl",LocaleSelectLabel:"src-components-Nav-classes__LocaleSelectLabel--3h3DV",LocaleSelectInput:"src-components-Nav-classes__LocaleSelectInput--3oNu1",LocaleSelectSelectIcon:"src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk",LocaleSelectInputUnderline:"src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx"},e.exports=t},895:function(e){e.exports=JSON.parse('{"ja":"日本語","en":"English","he":"עברית"}')},896:function(e,t,n){"use strict";n.d(t,"a",(function(){return je}));var a=n(8),o=n.n(a),r=n(1),c=n.n(r),l=n(23),i=n.n(l),s=n(238),u=n(912),d=n.n(u),f=n(904),p=n.n(f),m=n(917),h=n.n(m),b=n(913),v=n.n(b),g=n(914),y=n.n(g),S=n(915),x=n.n(S),E=n(239),k=function(){var e=Object(r.useContext)(E.a),t=e.dark,n=e.setDark;if(null==t||null==n)throw new Error;var a=Object(r.useCallback)((function(e,t){n(t)}),[n]);return c.a.createElement(x.a,{checked:t,onChange:a})},C=n(7),N=n.n(C),L=n(901),O=n.n(L),_=n(110),w=n(140),j=n(905),M=n.n(j),I=n(900),R=n.n(I),z=n(902),F=n.n(z),D=n(907),P=n.n(D),T=n(892),W=n.n(T),U=n(906),V=n.n(U),$=n(908),A=n.n($),B=n(97),J=n(137),G=n(895);var q=n(178),H=Object(s.defineMessages)({languages:{id:"src.components.LocaleSelect.languages",defaultMessage:"Languages"}}),K={selectLocale:q.c},Q=Object(_.connect)((function(e){return{locale:e.localeSelector.locale}}),K)((function(e){var t,n,a=e.classes,o=e.FormControlProps,l=e.locale,u=e.selectLocale,d=Object(r.useState)(0),f=i()(d,2),p=f[0],m=f[1],h=Object(r.useMemo)(w.v4,[]),b=Object(B.useTheme)(),v=Object(r.useMemo)((function(){var e,t,n,a;return null!==(e=null!==(t=null==o?void 0:o.variant)&&void 0!==t?t:null==b||null===(n=b.props)||void 0===n||null===(a=n.MuiFormControl)||void 0===a?void 0:a.variant)&&void 0!==e?e:"standard"}),[null==o?void 0:o.variant,null==b||null===(t=b.props)||void 0===t||null===(n=t.MuiFormControl)||void 0===n?void 0:n.variant]),g=Object(r.useMemo)((function(){return O()(null==a?void 0:a.root,null==o?void 0:o.className)}),[null==a?void 0:a.root,null==o?void 0:o.className]),y=Object(r.useMemo)((function(){return O()(null==a?void 0:a.label)}),[null==a?void 0:a.label]),S=Object(r.useMemo)((function(){return O()(null==a?void 0:a.input)}),[null==a?void 0:a.input]),x=Object(r.useMemo)((function(){return O()(null==a?void 0:a.selectIcon)}),[null==a?void 0:a.selectIcon]),E=Object(r.useMemo)((function(){return O()(null==a?void 0:a.inputUnderline)}),[null==a?void 0:a.inputUnderline]),k=Object(r.useCallback)((function(e){null!==e&&m(e.offsetWidth)}),[]),C=Object(r.useCallback)((function(e){var t;"string"==typeof(t=e.target.value)&&t in G&&u(e.target.value)}),[u]),L=Object(r.useContext)(J.a).availableLocales;return c.a.createElement(R.a,N()({},o,{className:g}),c.a.createElement(P.a,{className:y,ref:k,htmlFor:h},c.a.createElement(s.FormattedMessage,H.languages)),c.a.createElement(A.a,{classes:{icon:x},labelWidth:p,value:l,onChange:C,id:h,inputProps:{"data-testid":"localeSelect"},input:{standard:c.a.createElement(F.a,{className:S,classes:{underline:E}}),outlined:c.a.createElement(V.a,{className:S,labelWidth:p}),filled:c.a.createElement(M.a,{className:S})}[v]},null==L?void 0:L.map((function(e,t){return c.a.createElement(W.a,{key:t,value:e},G[e])}))))})),X=n(30),Y=n.n(X),Z=n(10),ee=n.n(Z),te=n(14),ne=n.n(te),ae=n(26),oe=n.n(ae),re=n(27),ce=n.n(re),le=n(12),ie=n.n(le),se=n(918),ue=n(909),de=n.n(ue),fe=n(891),pe=n(9);function me(){var e=o()([""," is not a Material-UI Typography color."]);return me=function(){return e},e}function he(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=ie()(e);if(t){var o=ie()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return ce()(this,n)}}var be=Object(fe.b)(Object(fe.a)("initial","inherit","primary","secondary","textPrimary","textSecondary","error")),ve=c.a.forwardRef((function(e,t){return c.a.createElement(se.Link,N()({innerRef:t},e))})),ge=function(e){oe()(n,e);var t=he(n);function n(){return ee()(this,n),t.apply(this,arguments)}return ne()(n,[{key:"render",value:function(){var e=this.props,t=e.color,n=Y()(e,["color"]);return be(t)?c.a.createElement(de.a,N()({component:ve,color:t},n)):(console.warn(Object(pe.a)(me(),t)),c.a.createElement(de.a,N()({component:ve},n)))}}]),n}(c.a.Component),ye=r.forwardRef((function(e,t){var n=e.to,a=(e.button,e.innerRef),o=Y()(e,["to","button","innerRef"]),c=r.forwardRef((function(e,t){return r.createElement(ge,N()({ref:t,innerRef:a,color:"inherit",underline:"none"},e))}));return r.createElement(W.a,N()({button:!0,component:c,to:n,ref:t},o))})),Se=n(893),xe=n.n(Se),Ee=Object(s.defineMessages)({home:{id:"src.components.Nav.home",defaultMessage:"home"},chess:{id:"src.components.Nav.chess",defaultMessage:"chess"},counter:{id:"src.components.Nav.counter",defaultMessage:"counter"},info:{id:"src.components.Nav.info",defaultMessage:"info"},paint:{id:"src.components.Nav.paint",defaultMessage:"paint"},reminder:{id:"src.components.Nav.reminder",defaultMessage:"reminder"}}),ke=function(){var e=Object(r.useState)(null),t=i()(e,2),n=t[0],a=t[1],o=Object(r.useCallback)((function(e){a(e.currentTarget)}),[]),l=Object(r.useCallback)((function(){a(null)}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{position:"sticky"},c.a.createElement(v.a,null,c.a.createElement(p.a,{edge:"start",color:"inherit",onClick:o},c.a.createElement(y.a,null)),c.a.createElement("div",{className:xe.a.Spacer}),c.a.createElement(k,null),c.a.createElement(Q,{classes:{label:xe.a.LocaleSelectLabel,input:xe.a.LocaleSelectInput,selectIcon:xe.a.LocaleSelectSelectIcon,inputUnderline:xe.a.LocaleSelectInputUnderline},FormControlProps:{variant:"filled"}}))),c.a.createElement(h.a,{open:null!==n,anchorEl:n,onClose:l},c.a.createElement(ye,{to:"/",onClick:l},c.a.createElement(s.FormattedMessage,Ee.home)),c.a.createElement(ye,{to:"/chess",onClick:l},c.a.createElement(s.FormattedMessage,Ee.chess)),c.a.createElement(ye,{to:"/counter",onClick:l},c.a.createElement(s.FormattedMessage,Ee.counter)),c.a.createElement(ye,{to:"/info",onClick:l},c.a.createElement(s.FormattedMessage,Ee.info)),c.a.createElement(ye,{to:"/paint",onClick:l},c.a.createElement(s.FormattedMessage,Ee.paint)),c.a.createElement(ye,{to:"/reminder",onClick:l},c.a.createElement(s.FormattedMessage,Ee.reminder))))};function Ce(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=ie()(e);if(t){var o=ie()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return ce()(this,n)}}var Ne=function(e){oe()(n,e);var t=Ce(n);function n(){var e;ee()(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={hasError:!1},e}return ne()(n,[{key:"render",value:function(){var e=this.props,t=e.renderError,n=e.children,a=this.state,o=a.hasError,r=a.error;return o?t(r,n):n}}]),n}(c.a.Component);Ne.getDerivedStateFromError=function(e){return{hasError:!0,error:e}};var Le=Ne;function Oe(){var e=o()([""," is not an error."]);return Oe=function(){return e},e}function _e(){var e=o()(["",""]);return _e=function(){return e},e}var we=function(e){var t=e.children,n=Object(r.useCallback)((function(e){if(e instanceof Error)return Object(pe.a)(_e(),String(e));throw new TypeError(Object(pe.a)(Oe(),String(e)))}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(ke,null),c.a.createElement(Le,{renderError:n},t))},je=function(e){return function(t){return c.a.createElement(we,null,c.a.createElement(e,t))}}},899:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=a(n(903))},903:function(e,t,n){"use strict";var a=n(25),o=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=o(n(30)),c=o(n(7)),l=a(n(1)),i=(o(n(16)),o(n(73))),s=o(n(74)),u=n(176),d=o(n(911)),f=o(n(135)),p=function(e){return{root:(0,c.default)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:(0,u.fade)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,u.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,u.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat((0,u.fade)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:(0,u.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat((0,u.fade)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:(0,u.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}};t.styles=p;var m=l.forwardRef((function(e,t){var n=e.children,a=e.classes,o=e.className,s=e.color,u=void 0===s?"default":s,p=e.component,m=void 0===p?"button":p,h=e.disabled,b=void 0!==h&&h,v=e.disableElevation,g=void 0!==v&&v,y=e.disableFocusRipple,S=void 0!==y&&y,x=e.endIcon,E=e.focusVisibleClassName,k=e.fullWidth,C=void 0!==k&&k,N=e.size,L=void 0===N?"medium":N,O=e.startIcon,_=e.type,w=void 0===_?"button":_,j=e.variant,M=void 0===j?"text":j,I=(0,r.default)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),R=O&&l.createElement("span",{className:(0,i.default)(a.startIcon,a["iconSize".concat((0,f.default)(L))])},O),z=x&&l.createElement("span",{className:(0,i.default)(a.endIcon,a["iconSize".concat((0,f.default)(L))])},x);return l.createElement(d.default,(0,c.default)({className:(0,i.default)(a.root,a[M],o,"inherit"===u?a.colorInherit:"default"!==u&&a["".concat(M).concat((0,f.default)(u))],"medium"!==L&&[a["".concat(M,"Size").concat((0,f.default)(L))],a["size".concat((0,f.default)(L))]],g&&a.disableElevation,b&&a.disabled,C&&a.fullWidth),component:m,disabled:b,focusRipple:!S,focusVisibleClassName:(0,i.default)(a.focusVisible,E),ref:t,type:w},I),l.createElement("span",{className:a.label},R,n,z))})),h=(0,s.default)(p,{name:"MuiButton"})(m);t.default=h},985:function(e,t){e.exports=function(e,t,n,a){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(a):void 0})}},986:function(e,t){e.exports=function(e,t,n,a,o){var r={};return Object.keys(a).forEach((function(e){r[e]=a[e]})),r.enumerable=!!r.enumerable,r.configurable=!!r.configurable,("value"in r||r.initializer)&&(r.writable=!0),r=n.slice().reverse().reduce((function(n,a){return a(e,t,n)||n}),r),o&&void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(o):void 0,r.initializer=void 0),void 0===r.initializer&&(Object.defineProperty(e,t,r),r=null),r}},987:function(e,t){e.exports=function(e,t){throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.")}}}]);
//# sourceMappingURL=info~31ecd969.bbf4ccb6.js.map