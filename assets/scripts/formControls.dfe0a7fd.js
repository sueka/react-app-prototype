(self.webpackChunkreact_app_prototype=self.webpackChunkreact_app_prototype||[]).push([[7],{77920:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ke}});var r,l=t(63038),o=t.n(l),s=t(66283),i=t(62822),a=t(50998),c=t(95757),u=t(8286),d=t(41120),p=t(67294),f=t(64593),m=t(31753),A=t(97127),v=t(67154),h=t.n(v),E=t(59713),b=t.n(E),g=t(28655),C=t.n(g),B=t(6479),y=t.n(B),k=t(94184),Z=t.n(k),w=t(77869),P=t.n(w),x=t(2804),F=t(10850),O=t(44901),S=t(17109),_=t(75778),M=t(66557),T=t(53331),j=t(93379),R=t.n(j),U=t(30964),W={insert:"head",singleton:!1},I=(R()(U.Z,W),U.Z.locals||{});function L(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?L(Object(t),!0).forEach((function(n){b()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var N=(0,d.Z)({Pre:{"&$Pre":{direction:"ltr",width:function(e){var n=e.startAdornmentWidth,t=e.endAdornmentWidth;return"calc(100% - ".concat((null!=n?n:0)+(null!=t?t:0),"px)")},marginLeft:function(e){var n=e.direction,t=e.startAdornmentWidth,r=e.endAdornmentWidth;return"rtl"===n?r:t},marginRight:function(e){var n=e.direction,t=e.startAdornmentWidth,r=e.endAdornmentWidth;return"rtl"===n?t:r}}},TextArea:{"&$TextArea":{direction:"ltr"}}},{flip:!1});function q(e){if(null==e)return null;var n=globalThis.getComputedStyle(e),t=n.marginInlineStart,r=n.marginInlineEnd;return e.offsetWidth+parseFloat(t)+parseFloat(r)}var H=function(e){var n=e.lightTheme,t=void 0===n?"atom-one-light":n,l=e.darkTheme,s=void 0===l?"atom-one-dark":l,i=e.className,a=e.InputProps,c=(a=void 0===a?{}:a).classes,d=a.ref,m=y()(a,["classes","ref"]),A=e.inputProps,v=(A=void 0===A?{}:A).spellCheck,E=A.ref,b=y()(A,["spellCheck","ref"]),g=e.preProps,B=e.value,k=e.onChange,w=y()(e,["lightTheme","darkTheme","className","InputProps","inputProps","preProps","value","onChange"]),j=null!=c?c:{},R=j.inputMultiline,U=y()(j,["inputMultiline"]),W=(0,p.useContext)(_.Z).dir,L=(0,x.FV)(F.Z),H=o()(L,1)[0],z=(0,p.useContext)(O.Z).defaultDark,Y=(0,p.useState)(null),V=o()(Y,2),$=V[0],X=V[1],G=(0,p.useState)(null),J=o()(G,2),K=J[0],Q=J[1],ee=(0,p.useState)(null),ne=o()(ee,2),te=ne[0],re=ne[1],le=N({direction:null!=W?W:void 0,startAdornmentWidth:null!=K?K:void 0,endAdornmentWidth:null!=te?te:void 0}),oe=(0,p.useMemo)((function(){return Z()(i,I.Container)}),[i]),se=(0,p.useMemo)((function(){return Z()(le.TextArea,I.TextArea,R)}),[le.TextArea,R]),ie=(0,p.useMemo)((function(){return Z()(le.Pre,I.Pre,null==g?void 0:g.className)}),[le.Pre,null==g?void 0:g.className]),ae=(0,p.useRef)(null),ce=(0,M.Z)(null!=d?d:null,ae),ue=(0,p.useRef)(null),de=(0,M.Z)(null!=E?E:null,ue);(0,p.useEffect)((function(){var e,n,t=null===(e=ae.current)||void 0===e?void 0:e.querySelector(':scope > [class*="MuiInputAdornment-positionStart"]'),r=null===(n=ae.current)||void 0===n?void 0:n.querySelector(':scope > [class*="MuiInputAdornment-positionEnd"]');Q(q(t)),re(q(r))}),[ae]),(0,p.useEffect)((function(){var e,n;X(P().highlightAuto(null!==(e=null===(n=ue.current)||void 0===n?void 0:n.value)&&void 0!==e?e:"").value)}),[ue]);var pe=(0,p.useCallback)((function(e){var n;null==k||k(e),X(P().highlightAuto(null!==(n=void 0===k?B:void 0)&&void 0!==n?n:e.target.value).value)}),[B,k]);return(0,S.s)(z),p.createElement("div",{className:oe},p.createElement(f.q,null,p.createElement("link",{rel:"stylesheet",href:(0,T.Z)(r||(r=C()(["/assets/stylesheets/highlight.js/styles/",".css"])),(null!=H?H:z)?s:t)})),p.createElement("pre",{className:ie,dangerouslySetInnerHTML:{__html:null!=$?$:""}}),p.createElement(u.Z,h()({fullWidth:!0,multiline:!0,value:B,onChange:pe,InputProps:D({classes:D({inputMultiline:se},U),ref:ce},m),inputProps:D({spellCheck:null!=v&&v,ref:de},b)},w)))},z=t(72152),Y=t(17812),V=t(6447),$=t(92680),X=t(20640),G=t.n(X),J=t(94433),K=t(85315),Q=(0,K.vU)({textCopied:{id:"src.lib.components.CopyTextButton.textCopied",defaultMessage:"Text copied."},copyText:{id:"src.lib.components.CopyTextButton.copyText",defaultMessage:"Copy text"}});function ee(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ne(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ee(Object(t),!0).forEach((function(n){b()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ee(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var te=function(e){var n=e.style,t=y()(e,["style"]);if(void 0===n)return p.createElement($.Z,h()({style:{transform:"scaleY(-1)"}},t));var r=n.transform,l=y()(n,["transform"]);if(void 0!==r)throw new Error;return p.createElement($.Z,h()({style:ne({transform:"scaleY(-1)"},l)},t))},re=function(e){var n=e.inputFor,t=(0,m.Z)().formatMessage,r=(0,J.Ds)().enqueueSnackbar,l=(0,p.useCallback)((function(){(0,S.s)(n.current),""!==n.current.value&&(G()(n.current.value),r(p.createElement(A.Z,Q.textCopied)))}),[r,n]),s=(0,p.useState)(!0),i=o()(s,2),a=i[0],c=i[1];return(0,p.useEffect)((function(){c(null===n.current||""===n.current.value||n.current.disabled)})),a?p.createElement(Y.Z,{onClick:l,disabled:!0},p.createElement(te,null)):p.createElement(V.ZP,{title:t(Q.copyText)},p.createElement(Y.Z,{onClick:l},p.createElement(te,null)))},le=t(282),oe=t(96019),se=t(76376),ie={insert:"head",singleton:!1},ae=(R()(se.Z,ie),se.Z.locals||{}),ce=(0,K.vU)({browse:{id:"src.lib.components.FileUpload.browse",defaultMessage:"Browse…"},noFileSelected:{id:"src.lib.components.FileUpload.noFileSelected",defaultMessage:"No file selected."},nFilesSelected:{id:"src.lib.components.FileUpload.nFilesSelected",defaultMessage:"{ n } files selected."}}),ue=function(e){var n=e.className,t=e.disabled,r=e.multiple,l=e.onClick,s=e.onChange,i=e.buttonLabel,a=void 0===i?p.createElement(A.Z,ce.browse):i,c=e.renderResultMessage,u=void 0===c?function(e){if(null===e||0===e.length)return p.createElement(A.Z,ce.noFileSelected);switch(e.length){case 1:return e[0].name;default:return p.createElement(A.Z,h()({},ce.nFilesSelected,{values:{n:e.length}}))}}:c,d=e.classes,f=e.component,m=void 0===f?oe.Z:f,v=e.ButtonProps,E=y()(e,["className","disabled","multiple","onClick","onChange","buttonLabel","renderResultMessage","classes","component","ButtonProps"]),b=(0,p.useState)(null),g=o()(b,2),C=g[0],B=g[1],k=(0,p.useMemo)((function(){return Z()(n,null==d?void 0:d.root,ae.FileUpload)}),[n,null==d?void 0:d.root]),w=(0,p.useMemo)((function(){return Z()(null==d?void 0:d.button,ae.Button,null==v?void 0:v.className)}),[null==d?void 0:d.button,null==v?void 0:v.className]),P=(0,p.useMemo)((function(){return u(C)}),[u,C]),x=(0,p.useRef)(null),F=(0,p.useCallback)((function(e){null==s||s(e),B(null!==e.target.files?Array.from(e.target.files):e.target.files)}),[s]),O=(0,p.useCallback)((function(){(0,S.s)(x.current),x.current.dispatchEvent(new MouseEvent("click"))}),[x]),_=(0,p.useCallback)((function(e){null==l||l(e),e.isDefaultPrevented()||O(e)}),[l,O]);return p.createElement(m,{className:k,tabIndex:0},p.createElement(le.Z,h()({disabled:t,onClick:_},v,{className:w,tabIndex:-1}),a),P,p.createElement("input",h()({className:ae.Input,type:"file",disabled:t,multiple:r,onChange:F,ref:x},E)))},de=t(13258),pe=t(65031),fe=t(34428),me=t(276),Ae=(0,K.vU)({typeWithYourVoice:{id:"src.lib.components.MicSwitch.typeWithYourVoice",defaultMessage:"Type with your voice…"},stop:{id:"src.lib.components.MicSwitch.stop",defaultMessage:"Stop"},speechRecognitionErrorOccurred:{id:"src.lib.components.MicSwitch.speechRecognitionErrorOccurred",defaultMessage:"Speech recognition error occurred: { error }"}}),ve=function(e){var n=e.inputFor,t=e.onResult,r=e.fallback,l=(0,m.Z)().formatMessage,s=(0,me.v9)((function(e){return e.localeSelector.locale})),i=(0,p.useState)(!1),a=o()(i,2),c=a[0],u=a[1],d=(0,p.useMemo)((function(){return"SpeechRecognition"in globalThis?new SpeechRecognition:null}),[]),f=(0,p.useMemo)((function(){return l(c?Ae.stop:Ae.typeWithYourVoice)}),[c,l]),v=(0,J.Ds)().enqueueSnackbar,E=(0,p.useCallback)((function(){u(!0)}),[]),b=(0,p.useCallback)((function(){u(!1)}),[]),g=(0,p.useCallback)((function(e){v(p.createElement(A.Z,h()({},Ae.speechRecognitionErrorOccurred,{values:{error:e.error}})),{variant:"error"})}),[v]),C=(0,p.useCallback)((function(e){t(e,Array.from(e.results).map((function(e){return e[0].transcript})).join(""))}),[t]);(0,p.useEffect)((function(){return function(){null==d||d.stop()}}),[d]),(0,p.useEffect)((function(){if(null!==d)return d.continuous=!0,d.interimResults=!0,d.maxAlternatives=1,d.addEventListener("start",E),d.addEventListener("end",b),d.addEventListener("error",g),d.addEventListener("result",C),function(){d.removeEventListener("start",E),d.removeEventListener("end",b),d.removeEventListener("error",g),d.removeEventListener("result",C)}}),[d,E,b,g,C]),(0,p.useEffect)((function(){null!==d&&(d.stop(),d.lang=s)}),[d,s]);var B=(0,p.useCallback)((function(e,n){null!==d&&(u(n),n?d.start():d.stop())}),[d]),y=(0,p.useState)(!0),k=o()(y,2),Z=k[0],w=k[1];return(0,p.useEffect)((function(){w(null===n.current||n.current.disabled)})),(0,p.useEffect)((function(){null!==d&&Z&&d.abort()}),[Z,d]),null===d&&void 0!==r?r:p.createElement(V.ZP,{title:f},p.createElement(de.Z,{disabled:Z,color:"default",icon:p.createElement(fe.Z,null),checkedIcon:p.createElement(pe.Z,null),checked:c,onChange:B}))},he=t(88001),Ee=(0,K.vU)({formControls:{id:"src.components.App.FormControlsPage.formControls",defaultMessage:"Form controls"}}),be=function(){var e=(0,p.useState)(""),n=o()(e,2),t=n[0],r=n[1],l=(0,p.useRef)(null),i=(0,p.useCallback)((function(e){r(e.target.value)}),[]);return p.createElement(u.Z,{label:"label",value:t,onChange:i,inputRef:l,InputProps:{endAdornment:p.createElement(s.Z,{position:"end"},p.createElement(re,{inputFor:l}))}})},ge=function(){var e,n,t,r,l=(0,p.useContext)(_.Z).dir,i=(0,p.useState)(""),a=o()(i,2),c=a[0],d=a[1],f=(0,p.useRef)(null),m=(0,p.useCallback)((function(e){d(e.target.value)}),[]),A=(0,p.useCallback)((function(e,n){if(null!==f.current)switch(d(n),f.current.scrollTop=f.current.scrollHeight-f.current.offsetHeight,l){case"ltr":f.current.scrollLeft=f.current.scrollWidth-f.current.offsetWidth;break;case"rtl":f.current.scrollLeft=-(f.current.scrollWidth-f.current.offsetWidth)}}),[l,f,null===(e=f.current)||void 0===e?void 0:e.scrollWidth,null===(n=f.current)||void 0===n?void 0:n.scrollHeight,null===(t=f.current)||void 0===t?void 0:t.offsetWidth,null===(r=f.current)||void 0===r?void 0:r.offsetHeight]);return p.createElement(u.Z,{label:"label",value:c,onChange:m,inputRef:f,InputProps:{endAdornment:p.createElement(s.Z,{position:"end"},p.createElement(ve,{inputFor:f,onResult:A,fallback:null}))}})},Ce=function(){var e,n,t,r,l=(0,p.useContext)(_.Z).dir,i=(0,p.useState)(""),a=o()(i,2),c=a[0],d=a[1],f=(0,p.useRef)(null),m=(0,p.useCallback)((function(e){d(e.target.value)}),[]),A=(0,p.useCallback)((function(e,n){if(null!==f.current)switch(d(n),f.current.scrollTop=f.current.scrollHeight-f.current.offsetHeight,l){case"ltr":f.current.scrollLeft=f.current.scrollWidth-f.current.offsetWidth;break;case"rtl":f.current.scrollLeft=-(f.current.scrollWidth-f.current.offsetWidth)}}),[l,f,null===(e=f.current)||void 0===e?void 0:e.scrollWidth,null===(n=f.current)||void 0===n?void 0:n.scrollHeight,null===(t=f.current)||void 0===t?void 0:t.offsetWidth,null===(r=f.current)||void 0===r?void 0:r.offsetHeight]);return p.createElement(u.Z,{label:"label",value:c,onChange:m,inputRef:f,InputProps:{endAdornment:p.createElement(s.Z,{position:"end"},p.createElement(ve,{inputFor:f,onResult:A,fallback:null}),p.createElement(re,{inputFor:f}))}})},Be=(0,d.Z)({Image:{maxWidth:function(e){var n=e.width;return null!==n?n/2:void 0},maxHeight:function(e){var n=e.height;return null!==n?n/2:void 0}}}),ye=function(e){var n=e.file,t=(0,p.useState)(null),r=o()(t,2),l=r[0],s=r[1],i=(0,p.useMemo)((function(){return new FileReader}),[]),a=(0,he.Z)(),c=a.width,u=a.height,d=Be({width:c,height:u}),f=(0,p.useCallback)((function(e){var n;if(null!=(null===(n=e.target)||void 0===n?void 0:n.result)){if(e.target.result instanceof ArrayBuffer)throw new Error;s(e.target.result)}}),[]);return(0,p.useEffect)((function(){return i.addEventListener("load",f),function(){i.removeEventListener("load",f)}}),[i,f]),(0,p.useEffect)((function(){if(!/^image\/[0-9A-Za-z][!#$&+-.0-9A-Z^_a-z]*$/.test(n.type))throw new Error;i.readAsDataURL(n)}),[n,i]),p.createElement("img",{src:null!=l?l:void 0,className:d.Image})},ke=(0,z.D)((function(){var e=(0,m.Z)().formatMessage,n=(0,p.useCallback)((function(e){return null===e||0===e.length?p.createElement(A.Z,ce.noFileSelected):Array.from(e).map((function(e,n){return p.createElement(ye,{key:n,file:e})}))}),[]),t=(0,p.useState)(""),r=o()(t,2),l=r[0],u=r[1],d=(0,p.useCallback)((function(e){var n;u(null===(n=e.target)||void 0===n?void 0:n.value)}),[]),v=(0,p.useRef)(null);return p.createElement(p.Fragment,null,p.createElement(f.Z,{title:e(Ee.formControls)}),p.createElement(i.Z,null,p.createElement(a.Z,null,p.createElement(c.Z,null,p.createElement(ue,{accept:"image/*",multiple:!0,renderResultMessage:n}))),p.createElement(a.Z,null,p.createElement(c.Z,null,p.createElement(be,null))),p.createElement(a.Z,null,p.createElement(c.Z,null,p.createElement(ge,null))),p.createElement(a.Z,null,p.createElement(c.Z,null,p.createElement(Ce,null))),p.createElement(a.Z,null,p.createElement(c.Z,null,p.createElement(H,{label:"code",value:l,onChange:d,InputProps:{endAdornment:p.createElement(s.Z,{position:"end"},p.createElement(re,{inputFor:v}))},inputProps:{ref:v}})))))}))},30964:function(e,n,t){"use strict";var r=t(94015),l=t.n(r),o=t(23645),s=t.n(o)()(l());s.push([e.id,".src-components-CodeField-classes__Container--nU10n {\n  position: relative;\n}\n\n.src-components-CodeField-classes__Pre--3c2a_ {\n  /* font-family: monospace; */\n  font-size: 16px;\n  line-height: 1.1876em;\n  margin: 0;\n  padding: 18.5px 14px;\n  position: absolute;\n  text-align: left;\n  white-space: pre-wrap;\n  /* width: 100%; */\n  word-break: break-word;\n}\n\n.src-components-CodeField-classes__TextArea--ZPHX8 {\n  font-family: monospace;\n  font-size: 16px;\n  /* line-height: 1.1876em; */\n  /* margin: 0; */\n  -webkit-text-fill-color: transparent;\n  white-space: pre-wrap;\n  /* width: 100%; */\n  /* word-break: break-word; */\n}\n","",{version:3,sources:["webpack://./src/components/CodeField/classes.css"],names:[],mappings:"AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,4BAA4B;EAC5B,eAAe;EACf,qBAAqB;EACrB,SAAS;EACT,oBAAoB;EACpB,kBAAkB;EAClB,gBAAgB;EAChB,qBAAqB;EACrB,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,eAAe;EACf,2BAA2B;EAC3B,eAAe;EACf,oCAAoC;EACpC,qBAAqB;EACrB,iBAAiB;EACjB,4BAA4B;AAC9B",sourcesContent:[".Container {\n  position: relative;\n}\n\n.Pre {\n  /* font-family: monospace; */\n  font-size: 16px;\n  line-height: 1.1876em;\n  margin: 0;\n  padding: 18.5px 14px;\n  position: absolute;\n  text-align: left;\n  white-space: pre-wrap;\n  /* width: 100%; */\n  word-break: break-word;\n}\n\n.TextArea {\n  font-family: monospace;\n  font-size: 16px;\n  /* line-height: 1.1876em; */\n  /* margin: 0; */\n  -webkit-text-fill-color: transparent;\n  white-space: pre-wrap;\n  /* width: 100%; */\n  /* word-break: break-word; */\n}\n"],sourceRoot:""}]),s.locals={Container:"src-components-CodeField-classes__Container--nU10n",Pre:"src-components-CodeField-classes__Pre--3c2a_",TextArea:"src-components-CodeField-classes__TextArea--ZPHX8"},n.Z=s},76376:function(e,n,t){"use strict";var r=t(94015),l=t.n(r),o=t(23645),s=t.n(o)()(l());s.push([e.id,".src-lib-components-FileUpload-classes__FileUpload--89hPZ {\n  display: inline-block; /* TODO: polyfill */\n  display: inline flow-root;\n  cursor: pointer;\n}\n\n.src-lib-components-FileUpload-classes__Button--3uZU-.src-lib-components-FileUpload-classes__Button--3uZU- {\n  text-transform: none;\n  cursor: unset;\n}\n\n.src-lib-components-FileUpload-classes__Input--b4BE6 {\n  display: none;\n}\n","",{version:3,sources:["webpack://./src/lib/components/FileUpload/classes.css"],names:[],mappings:"AAAA;EACE,qBAAqB,EAAE,mBAAmB;EAC1C,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,aAAa;AACf;;AAEA;EACE,aAAa;AACf",sourcesContent:[".FileUpload {\n  display: inline-block; /* TODO: polyfill */\n  display: inline flow-root;\n  cursor: pointer;\n}\n\n.Button.Button {\n  text-transform: none;\n  cursor: unset;\n}\n\n.Input {\n  display: none;\n}\n"],sourceRoot:""}]),s.locals={FileUpload:"src-lib-components-FileUpload-classes__FileUpload--89hPZ",Button:"src-lib-components-FileUpload-classes__Button--3uZU-",Input:"src-lib-components-FileUpload-classes__Input--b4BE6"},n.Z=s}}]);
//# sourceMappingURL=formControls.dfe0a7fd.js.map