(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1003:function(e,n,t){var r=t(892),a=t(1004);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var c={insert:"head",singleton:!1},o=(r(a,c),a.locals?a.locals:{});e.exports=o},1004:function(e,n,t){(n=t(893)(!1)).push([e.i,".src-components-Reminder-TaskListItem-classes__TaskListItemContainer--3F5ef.src-components-Reminder-TaskListItem-classes__Dragging--1TtFC {\n  opacity: 0;\n}\n\n.src-components-Reminder-TaskListItem-classes__ListItemSecondaryAction--3QycB {\n  padding-right: 72px; /* TODO */\n}\n",""]),n.locals={TaskListItemContainer:"src-components-Reminder-TaskListItem-classes__TaskListItemContainer--3F5ef",Dragging:"src-components-Reminder-TaskListItem-classes__Dragging--1TtFC",ListItemSecondaryAction:"src-components-Reminder-TaskListItem-classes__ListItemSecondaryAction--3QycB"},e.exports=n},1021:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),c=t(239),o=t.n(c),l=t(236),s=t(108),i=function(e){return function(n){return function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return e.apply(void 0,[n].concat(r))}}},u=t(3),d=t(918),m=t(233),f=t(895),v=t.n(f),p=Object(l.defineMessages)({add:{id:"src.components.Reminder.AddTaskButton.add",defaultMessage:"add"}}),g=function(e){var n=e.addTask;return(a.a.createElement(v.a,{onClick:n,variant:"contained",color:"secondary"},a.a.createElement(l.FormattedMessage,p.add)))},b=t(932),h=t.n(b),E=function(e){var n=e.children;return(a.a.createElement(h.a,null,n))},k=t(110),O=t.n(k),j=t(22),L=t.n(j),_=t(24),y=t.n(_),S=t(1002),C=t.n(S),M=t(176),I=t.n(M),T=t(136),N=t(1008),w=t.n(N),F=t(935),x=t.n(F),R=t(1005),D=t.n(R),A=t(1017),U=t.n(A),B=t(1013),W=t.n(B),P=t(1007),V=t.n(P),J=t(887),Q=t(898),q=t.n(Q),z=t(1019),G=t.n(z),H=function(e){var n=e.onClick;return(a.a.createElement(q.a,{onClick:n},a.a.createElement(G.a,null)))},K=t(1003),X=t.n(K),Y=Object(l.defineMessages)({asBoundedLengthStringErrorMessage:{id:"src.components.Reminder.TaskListItem.asBoundedLengthStringErrorMessage",defaultMessage:"{ name } must be 0-{ upperBound } characters."}}),Z=function(e){var n=e.value,t=e.index,c=e.onChange,o=e.onDelete,s=e.validate,i=Object(T.useDrag)({item:{type:"TaskListItem",value:n,index:t},isDragging:function(e){var t=e.getItem();return n.isIdenticalTo(t.value)},collect:function(e){return{dragging:e.isDragging()}}}),u=y()(i,3),d=u[0].dragging,m=u[1],f=u[2],v=Object(r.useMemo)((function(){return I()(X.a.TaskListItemContainer,L()({},X.a.Dragging,d))}),[d]),p=Object(r.useCallback)((function(e){c({content:e.target.value})}),[c]),g=Object(r.useCallback)((function(e,n){c({done:e.target.checked})}),[c]),b=Object(l.useIntl)(),h=b.formatMessage,E=b.locale,k=Object(r.useMemo)((function(){return s(n)}),[n,s]),j=Object(r.useMemo)((function(){return Object.values(k).some((function(e){return void 0!==e}))}),[k]),_=Object(r.useMemo)((function(){if(void 0===k.content)return null;if(J.a.apply(void 0,O()(Object.keys(Y)))(k.content.key)){var e=h(Y[k.content.key],k.content.values);switch(E){case"en":return C.a.sentence(e);case"ja":return e;default:throw new Error}}return null}),[E,h,k.content]);return a.a.createElement("div",{ref:f},a.a.createElement(x.a,{classes:{container:v,secondaryAction:X.a.ListItemSecondaryAction}},a.a.createElement(D.a,null,a.a.createElement("div",{ref:m},a.a.createElement(V.a,null))),a.a.createElement(D.a,null,a.a.createElement(w.a,{checked:n.done,onChange:g})),a.a.createElement(W.a,{fullWidth:!0,value:n.content,onChange:p,disabled:n.done,error:j,helperText:_}),a.a.createElement(U.a,null,a.a.createElement(H,{onClick:o}))))},$=t(916),ee=function(e){var n=e.children,t=e.index,c=e.moveTask,o=Object(r.useRef)(null),l=Object(T.useDrop)({accept:"TaskListItem",hover:function(e,n){if(Object($.b)(o.current),e.index!==t){var r=n.getClientOffset();Object($.b)(r);var a=o.current.getBoundingClientRect(),l=r.y-a.top,s=(a.bottom-a.top)/2;e.index<t&&l<s||e.index>t&&l>s||(c(e.index,t),e.index=t)}}});return(0,y()(l,2)[1])(o),a.a.createElement("div",{ref:o},n)},ne=Object(u.b)("a Task for presentation",(function(e){return{content:Object(u.e)(Object(u.f)("content",Object(d.a)({upperBound:140})))(e.content),done:Object(u.e)(u.a)(e.done)}})),te={getTasks:m.f,addTask:m.a,changeTaskContent:m.b,markTaskAsDone:m.g,markTaskAsUndone:m.h,deleteTask:m.e,moveTask:m.i},re=Object(s.connect)((function(e){return{tasks:e.reminder.tasks}}),te)((function(e){var n=e.tasks,t=e.getTasks,c=e.addTask,o=e.changeTaskContent,l=e.markTaskAsDone,s=e.markTaskAsUndone,u=e.deleteTask,d=e.moveTask;Object(r.useEffect)((function(){t()}),[t]);var m=Object(r.useCallback)((function(e,n){var t=n.content,r=n.done;void 0!==t&&o(e,t),void 0!==r&&(r?l(e):s(e))}),[o,l,s]);return(a.a.createElement(a.a.Fragment,null,a.a.createElement(E,null,n.map((function(e,n){return a.a.createElement(ee,{key:n,index:n,moveTask:d},a.a.createElement(Z,{key:e.id.value,value:e,index:n,onChange:i(m)(e.id),onDelete:i(u)(e.id),validate:ne}))})).toArray()),a.a.createElement(g,{addTask:c})))})),ae=t(891),ce=Object(l.defineMessages)({reminder:{id:"src.components.App.ReminderPage.reminder",defaultMessage:"reminder"}});n.default=Object(ae.a)((function(){var e=Object(l.useIntl)().formatMessage;return(a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{title:e(ce.reminder)}),a.a.createElement(re,null)))}))},887:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return a}));var r=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.some((function(n){return n===e}))}},a=function(e){return function(n){return void 0===n||e(n)}}},888:function(e,n,t){var r=t(892),a=t(889);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var c={insert:"head",singleton:!1},o=(r(a,c),a.locals?a.locals:{});e.exports=o},889:function(e,n,t){(n=t(893)(!1)).push([e.i,".src-components-Nav-classes__Spacer--36ovl {\n  flex-grow: 1;\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV {\n  color: currentColor\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV.Mui-focused {\n    opacity: 0.618;\n    color: currentColor;\n  }\n\n.src-components-Nav-classes__LocaleSelectInput--3oNu1.src-components-Nav-classes__LocaleSelectInput--3oNu1 {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx:hover:not(.Mui-disabled)::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::after {\n    border-bottom-color: currentColor;\n  }\n",""]),n.locals={Spacer:"src-components-Nav-classes__Spacer--36ovl",LocaleSelectLabel:"src-components-Nav-classes__LocaleSelectLabel--3h3DV",LocaleSelectInput:"src-components-Nav-classes__LocaleSelectInput--3oNu1",LocaleSelectSelectIcon:"src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk",LocaleSelectInputUnderline:"src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx"},e.exports=n},890:function(e){e.exports=JSON.parse('{"ja":"日本語","en":"English"}')},891:function(e,n,t){"use strict";t.d(n,"a",(function(){return Te}));var r=t(9),a=t.n(r),c=t(1),o=t.n(c),l=t(24),s=t.n(l),i=t(236),u=t(906),d=t.n(u),m=t(898),f=t.n(m),v=t(911),p=t.n(v),g=t(907),b=t.n(g),h=t(908),E=t.n(h),k=t(909),O=t.n(k),j=t(237),L=function(){var e=Object(c.useContext)(j.a),n=e.dark,t=e.setDark;if(null==n||null==t)throw new Error;var r=Object(c.useCallback)((function(e,n){t(n)}),[t]);return(o.a.createElement(O.a,{checked:n,onChange:r}))},_=t(7),y=t.n(_),S=t(176),C=t.n(S),M=t(108),I=t(135),T=t(899),N=t.n(T),w=t(894),F=t.n(w),x=t(896),R=t.n(x),D=t(901),A=t.n(D),U=t(900),B=t.n(U),W=t(902),P=t.n(W),V=t(134),J=t(238),Q=t(890);var q=t(177),z=Object(i.defineMessages)({languages:{id:"src.components.LocaleSelect.languages",defaultMessage:"Languages"}}),G={selectLocale:q.c},H=Object(M.connect)((function(e){return{locale:e.localeSelector.locale}}),G)((function(e){var n,t,r=e.classes,a=e.FormControlProps,l=e.locale,u=e.selectLocale,d=Object(c.useState)(0),m=s()(d,2),f=m[0],v=m[1],p=Object(c.useMemo)(I.v4,[]),g=Object(V.useTheme)(),b=Object(c.useMemo)((function(){var e,n,t,r;return null!==(e=null!==(n=null==a?void 0:a.variant)&&void 0!==n?n:null==g?void 0:null===(t=g.props)||void 0===t?void 0:null===(r=t.MuiFormControl)||void 0===r?void 0:r.variant)&&void 0!==e?e:"standard"}),[null==a?void 0:a.variant,null==g?void 0:null===(n=g.props)||void 0===n?void 0:null===(t=n.MuiFormControl)||void 0===t?void 0:t.variant]),h=Object(c.useMemo)((function(){return C()(null==r?void 0:r.root,null==a?void 0:a.className)}),[null==r?void 0:r.root,null==a?void 0:a.className]),E=Object(c.useMemo)((function(){return C()(null==r?void 0:r.label)}),[null==r?void 0:r.label]),k=Object(c.useMemo)((function(){return C()(null==r?void 0:r.input)}),[null==r?void 0:r.input]),O=Object(c.useMemo)((function(){return C()(null==r?void 0:r.selectIcon)}),[null==r?void 0:r.selectIcon]),j=Object(c.useMemo)((function(){return C()(null==r?void 0:r.inputUnderline)}),[null==r?void 0:r.inputUnderline]),L=Object(c.useCallback)((function(e){null!==e&&v(e.offsetWidth)}),[]),_=Object(c.useCallback)((function(e){var n;"string"==typeof(n=e.target.value)&&n in Q&&u(e.target.value)}),[u]),S=Object(c.useContext)(J.a).availableLocales;return o.a.createElement(F.a,y()({},a,{className:h}),o.a.createElement(A.a,{className:E,ref:L,htmlFor:p},o.a.createElement(i.FormattedMessage,z.languages)),o.a.createElement(P.a,{classes:{icon:O},native:!0,labelWidth:f,value:l,onChange:_,id:p,inputProps:{"data-testid":"localeSelect"},input:{standard:o.a.createElement(R.a,{className:k,classes:{underline:j}}),outlined:o.a.createElement(B.a,{className:k,labelWidth:f}),filled:o.a.createElement(N.a,{className:k})}[b]},null==S?void 0:S.map((function(e,n){return o.a.createElement("option",{key:n,value:e},Q[e])}))))})),K=t(28),X=t.n(K),Y=t(913),Z=t.n(Y),$=t(11),ee=t.n($),ne=t(17),te=t.n(ne),re=t(25),ae=t.n(re),ce=t(12),oe=t.n(ce),le=t(26),se=t.n(le),ie=t(912),ue=t(903),de=t.n(ue),me=t(887),fe=t(10);function ve(){var e=a()([""," is not a Material-UI Typography color."]);return ve=function(){return e},e}function pe(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var ge=Object(me.b)(Object(me.a)("initial","inherit","primary","secondary","textPrimary","textSecondary","error")),be=o.a.forwardRef((function(e,n){return o.a.createElement(ie.Link,y()({innerRef:n},e))})),he=function(e){se()(r,e);var n,t=(n=r,function(){var e,t=oe()(n);if(pe()){var r=oe()(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return ae()(this,e)});function r(){return ee()(this,r),t.apply(this,arguments)}return te()(r,[{key:"render",value:function(){var e=this.props,n=e.color,t=X()(e,["color"]);return ge(n)?o.a.createElement(de.a,y()({component:be,color:n},t)):(console.warn(Object(fe.a)(ve(),n)),o.a.createElement(de.a,y()({component:be},t)))}}]),r}(o.a.Component),Ee=c.forwardRef((function(e,n){var t=e.to,r=(e.button,e.innerRef),a=X()(e,["to","button","innerRef"]),o=c.forwardRef((function(e,n){return c.createElement(he,y()({ref:n,innerRef:r,color:"inherit",underline:"none"},e))}));return c.createElement(Z.a,y()({button:!0,component:o,to:t,ref:n},a))})),ke=t(888),Oe=t.n(ke),je=Object(i.defineMessages)({home:{id:"src.components.Nav.home",defaultMessage:"home"},chess:{id:"src.components.Nav.chess",defaultMessage:"chess"},counter:{id:"src.components.Nav.counter",defaultMessage:"counter"},info:{id:"src.components.Nav.info",defaultMessage:"info"},paint:{id:"src.components.Nav.paint",defaultMessage:"paint"},reminder:{id:"src.components.Nav.reminder",defaultMessage:"reminder"}}),Le=function(){var e=Object(c.useState)(null),n=s()(e,2),t=n[0],r=n[1],a=Object(c.useCallback)((function(e){r(e.currentTarget)}),[]),l=Object(c.useCallback)((function(){r(null)}),[]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{position:"sticky"},o.a.createElement(b.a,null,o.a.createElement(f.a,{edge:"start",color:"inherit",onClick:a},o.a.createElement(E.a,null)),o.a.createElement("div",{className:Oe.a.Spacer}),o.a.createElement(L,null),o.a.createElement(H,{classes:{label:Oe.a.LocaleSelectLabel,input:Oe.a.LocaleSelectInput,selectIcon:Oe.a.LocaleSelectSelectIcon,inputUnderline:Oe.a.LocaleSelectInputUnderline},FormControlProps:{variant:"filled"}}))),o.a.createElement(p.a,{open:null!==t,anchorEl:t,onClose:l},o.a.createElement(Ee,{to:"/",onClick:l},o.a.createElement(i.FormattedMessage,je.home)),o.a.createElement(Ee,{to:"/chess",onClick:l},o.a.createElement(i.FormattedMessage,je.chess)),o.a.createElement(Ee,{to:"/counter",onClick:l},o.a.createElement(i.FormattedMessage,je.counter)),o.a.createElement(Ee,{to:"/info",onClick:l},o.a.createElement(i.FormattedMessage,je.info)),o.a.createElement(Ee,{to:"/paint",onClick:l},o.a.createElement(i.FormattedMessage,je.paint)),o.a.createElement(Ee,{to:"/reminder",onClick:l},o.a.createElement(i.FormattedMessage,je.reminder))))};function _e(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var ye=function(e){se()(r,e);var n,t=(n=r,function(){var e,t=oe()(n);if(_e()){var r=oe()(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return ae()(this,e)});function r(){var e;ee()(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1},e}return te()(r,[{key:"render",value:function(){var e=this.props,n=e.renderError,t=e.children,r=this.state,a=r.hasError,c=r.error;return a?n(c,t):t}}]),r}(o.a.Component);ye.getDerivedStateFromError=function(e){return{hasError:!0,error:e}};var Se=ye;function Ce(){var e=a()([""," is not an error."]);return Ce=function(){return e},e}function Me(){var e=a()(["",""]);return Me=function(){return e},e}var Ie=function(e){var n=e.children,t=Object(c.useCallback)((function(e){if(e instanceof Error)return Object(fe.a)(Me(),String(e));throw new TypeError(Object(fe.a)(Ce(),String(e)))}),[]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(Le,null),o.a.createElement(Se,{renderError:t},n))},Te=function(e){return function(n){return o.a.createElement(Ie,null,o.a.createElement(e,n))}}},916:function(e,n,t){"use strict";function r(e){if(null==e)throw new Error}function a(e){if(null!=e)throw new Error}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}))},918:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(9),a=t.n(r),c=t(244),o=t(10),l=t(36),s=t(3);function i(){var e=a()([""," is not a URL."]);return i=function(){return e},e}function u(){var e=a()([""," is not between "," and "," characters."]);return u=function(){return e},e}var d=function(e){var n=e.lowerBound,t=void 0===n?-1/0:n,r=e.upperBound,a=void 0===r?1/0:r;return function(e){var n=Object(s.c)(e);if(t<=n.length&&n.length<=a)return n;throw new l.a(Object(o.a)(u(),n,t,a),"asBoundedLengthStringErrorMessage",{input:n.length,lowerBound:t,upperBound:a})}};function m(e){var n=Object(s.c)(e);if(!Object(c.a)(n))throw new l.a(Object(o.a)(i(),n));return n}}}]);
//# sourceMappingURL=reminder~21833f8f.fabc1e04.js.map