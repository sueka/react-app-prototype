(self.webpackChunkrap=self.webpackChunkrap||[]).push([[7],{77920:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Fe}});var r,l=t(63038),o=t.n(l),s=t(66283),i=t(62822),a=t(50998),c=t(95757),u=t(8286),d=t(41120),p=t(67294),f=t(64593),m=t(31753),A=t(97127),v=t(67154),h=t.n(v),E=t(59713),b=t.n(E),g=t(28655),C=t.n(g),B=t(6479),Z=t.n(B),k=t(94184),y=t.n(k),w=t(77869),F=t.n(w),P=t(2804),S=t(10850),x=t(44901),O=t(17109),_=t(75778),M=t(66557),U=t(53331),T=t(93379),R=t.n(T),j=t(30964),L={insert:"head",singleton:!1},W=(R()(j.Z,L),j.Z.locals||{});function I(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?I(Object(t),!0).forEach((function(n){b()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var N=(0,d.Z)({Pre:{"&$Pre":{direction:"ltr",width:function(e){var n=e.startAdornmentWidth,t=e.endAdornmentWidth;return"calc(100% - ".concat((null!=n?n:0)+(null!=t?t:0),"px)")},marginLeft:function(e){var n=e.direction,t=e.startAdornmentWidth,r=e.endAdornmentWidth;return"rtl"===n?r:t},marginRight:function(e){var n=e.direction,t=e.startAdornmentWidth,r=e.endAdornmentWidth;return"rtl"===n?t:r}}},TextArea:{"&$TextArea":{direction:"ltr"}}},{flip:!1});function H(e){if(null==e)return null;var n=globalThis.getComputedStyle(e),t=n.marginLeft,r=n.marginRight;return e.offsetWidth+parseFloat(t)+parseFloat(r)}var q=function(e){var n=e.lightTheme,t=void 0===n?"atom-one-light":n,l=e.darkTheme,s=void 0===l?"atom-one-dark":l,i=e.className,a=e.InputProps,c=(a=void 0===a?{}:a).classes,d=a.ref,m=Z()(a,["classes","ref"]),A=e.inputProps,v=(A=void 0===A?{}:A).spellCheck,E=A.ref,b=Z()(A,["spellCheck","ref"]),g=e.preProps,B=e.value,k=e.onChange,w=Z()(e,["lightTheme","darkTheme","className","InputProps","inputProps","preProps","value","onChange"]),T=null!=c?c:{},R=T.inputMultiline,j=Z()(T,["inputMultiline"]),L=(0,p.useContext)(_.Z).dir,I=(0,P.FV)(S.Z),q=o()(I,1)[0],z=(0,p.useContext)(x.Z).defaultDark,Y=(0,p.useState)(null),V=o()(Y,2),$=V[0],X=V[1],G=(0,p.useState)(null),J=o()(G,2),K=J[0],Q=J[1],ee=(0,p.useState)(null),ne=o()(ee,2),te=ne[0],re=ne[1],le=N({direction:null!=L?L:void 0,startAdornmentWidth:null!=K?K:void 0,endAdornmentWidth:null!=te?te:void 0}),oe=(0,p.useMemo)((function(){return y()(i,W.Container)}),[i]),se=(0,p.useMemo)((function(){return y()(le.TextArea,W.TextArea,R)}),[le.TextArea,R]),ie=(0,p.useMemo)((function(){return y()(le.Pre,W.Pre,null==g?void 0:g.className)}),[le.Pre,null==g?void 0:g.className]),ae=(0,p.useRef)(null),ce=(0,M.Z)(null!=d?d:null,ae),ue=(0,p.useRef)(null),de=(0,M.Z)(null!=E?E:null,ue);(0,p.useEffect)((function(){var e,n,t=null===(e=ae.current)||void 0===e?void 0:e.querySelector(':scope > [class*="MuiInputAdornment-positionStart"]'),r=null===(n=ae.current)||void 0===n?void 0:n.querySelector(':scope > [class*="MuiInputAdornment-positionEnd"]');Q(H(t)),re(H(r))}),[ae]),(0,p.useEffect)((function(){var e,n;X(F().highlightAuto(null!==(e=null===(n=ue.current)||void 0===n?void 0:n.value)&&void 0!==e?e:"").value)}),[ue]);var pe=(0,p.useCallback)((function(e){var n;null==k||k(e),X(F().highlightAuto(null!==(n=void 0===k?B:void 0)&&void 0!==n?n:e.target.value).value)}),[B,k]);return(0,O.s)(z),p.createElement("div",{className:oe},p.createElement(f.q,null,p.createElement("link",{rel:"stylesheet",href:(0,U.Z)(r||(r=C()(["/assets/stylesheets/highlight.js/styles/",".css"])),(null!=q?q:z)?s:t)})),p.createElement("pre",{className:ie,dangerouslySetInnerHTML:{__html:null!=$?$:""}}),p.createElement(u.Z,h()({fullWidth:!0,multiline:!0,value:B,onChange:pe,InputProps:D({classes:D({inputMultiline:se},j),ref:ce},m),inputProps:D({spellCheck:null!=v&&v,ref:de},b)},w)))},z=t(17754),Y=t(17812),V=t(6447),$=t(92680),X=t(20640),G=t.n(X),J=t(94433),K=t(85315),Q=(0,K.vU)({textCopied:{id:"src.lib.components.CopyTextButton.textCopied",defaultMessage:"Text copied."},copyText:{id:"src.lib.components.CopyTextButton.copyText",defaultMessage:"Copy text"}});function ee(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ne(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ee(Object(t),!0).forEach((function(n){b()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ee(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var te=function(e){var n=e.style,t=Z()(e,["style"]);if(void 0===n)return p.createElement($.Z,h()({style:{transform:"scaleY(-1)"}},t));var r=n.transform,l=Z()(n,["transform"]);if(void 0!==r)throw new Error;return p.createElement($.Z,h()({style:ne({transform:"scaleY(-1)"},l)},t))},re=function(e){var n=e.inputFor,t=(0,m.Z)().formatMessage,r=(0,J.Ds)().enqueueSnackbar,l=(0,p.useCallback)((function(){(0,O.s)(n.current),""!==n.current.value&&(G()(n.current.value),r(p.createElement(A.Z,Q.textCopied)))}),[r,n]),s=(0,p.useState)(!0),i=o()(s,2),a=i[0],c=i[1];return(0,p.useEffect)((function(){c(null===n.current||""===n.current.value||n.current.disabled)})),p.createElement(V.ZP,{title:t(Q.copyText),disableFocusListener:a,disableHoverListener:a,disableTouchListener:a},p.createElement("span",null,p.createElement(Y.Z,{onClick:l,disabled:a},p.createElement(te,null))))},le=t(282),oe=t(96019),se=t(51206),ie=t.n(se),ae=t(76376),ce={insert:"head",singleton:!1},ue=(R()(ae.Z,ce),ae.Z.locals||{}),de=(0,K.vU)({browse:{id:"src.lib.components.FileUpload.browse",defaultMessage:"Browse…"},noFileSelected:{id:"src.lib.components.FileUpload.noFileSelected",defaultMessage:"No file selected."},nFilesSelected:{id:"src.lib.components.FileUpload.nFilesSelected",defaultMessage:"{ n } files selected."}}),pe=ie().getParser(navigator.userAgent).is("Safari"),fe=function(e){var n=e.className,t=e.disabled,r=e.multiple,l=e.onClick,s=e.onChange,i=e.buttonLabel,a=void 0===i?p.createElement(A.Z,de.browse):i,c=e.renderResultMessage,u=void 0===c?function(e){if(null===e||0===e.length)return p.createElement(A.Z,de.noFileSelected);switch(e.length){case 1:return e[0].name;default:return p.createElement(A.Z,h()({},de.nFilesSelected,{values:{n:e.length}}))}}:c,d=e.classes,f=e.component,m=void 0===f?oe.Z:f,v=e.ButtonProps,E=Z()(e,["className","disabled","multiple","onClick","onChange","buttonLabel","renderResultMessage","classes","component","ButtonProps"]),g=(0,p.useState)(null),C=o()(g,2),B=C[0],k=C[1],w=(0,p.useMemo)((function(){return y()(n,null==d?void 0:d.root,ue.FileUpload,b()({},ue.Safari,pe))}),[n,null==d?void 0:d.root]),F=(0,p.useMemo)((function(){return y()(null==d?void 0:d.button,ue.Button,null==v?void 0:v.className)}),[null==d?void 0:d.button,null==v?void 0:v.className]),P=(0,p.useMemo)((function(){return u(B)}),[u,B]),S=(0,p.useRef)(null),x=(0,p.useCallback)((function(e){null==s||s(e),k(null!==e.target.files?Array.from(e.target.files):e.target.files)}),[s]),_=(0,p.useCallback)((function(){(0,O.s)(S.current),S.current.dispatchEvent(new MouseEvent("click"))}),[S]),M=(0,p.useCallback)((function(e){null==l||l(e),e.isDefaultPrevented()||_(e)}),[l,_]);return p.createElement(m,{className:w,tabIndex:pe?-1:0},p.createElement(le.Z,h()({disabled:t,onClick:M},v,{className:F,tabIndex:-1}),a),P,p.createElement("input",h()({className:ue.Input,type:"file",disabled:t,multiple:r,onChange:x,ref:S},E)))},me=t(13258),Ae=t(65031),ve=t(34428),he=t(276),Ee=(0,K.vU)({typeWithYourVoice:{id:"src.lib.components.MicSwitch.typeWithYourVoice",defaultMessage:"Type with your voice…"},stop:{id:"src.lib.components.MicSwitch.stop",defaultMessage:"Stop"},speechRecognitionErrorOccurred:{id:"src.lib.components.MicSwitch.speechRecognitionErrorOccurred",defaultMessage:"Speech recognition error occurred: { error }"}}),be=function(e){var n=e.inputFor,t=e.onResult,r=e.fallback,l=(0,m.Z)().formatMessage,s=(0,he.v9)((function(e){return e.localeSelector.locale})),i=(0,p.useState)(!1),a=o()(i,2),c=a[0],u=a[1],d=(0,p.useMemo)((function(){return"SpeechRecognition"in globalThis?new SpeechRecognition:null}),[]),f=(0,p.useMemo)((function(){return l(c?Ee.stop:Ee.typeWithYourVoice)}),[c,l]),v=(0,J.Ds)().enqueueSnackbar,E=(0,p.useCallback)((function(){u(!0)}),[]),b=(0,p.useCallback)((function(){u(!1)}),[]),g=(0,p.useCallback)((function(e){v(p.createElement(A.Z,h()({},Ee.speechRecognitionErrorOccurred,{values:{error:e.error}})),{variant:"error"})}),[v]),C=(0,p.useCallback)((function(e){t(e,Array.from(e.results).map((function(e){return e[0].transcript})).join(""))}),[t]);(0,p.useEffect)((function(){return function(){null==d||d.stop()}}),[d]),(0,p.useEffect)((function(){if(null!==d)return d.continuous=!0,d.interimResults=!0,d.maxAlternatives=1,d.addEventListener("start",E),d.addEventListener("end",b),d.addEventListener("error",g),d.addEventListener("result",C),function(){d.removeEventListener("start",E),d.removeEventListener("end",b),d.removeEventListener("error",g),d.removeEventListener("result",C)}}),[d,E,b,g,C]),(0,p.useEffect)((function(){null!==d&&(d.stop(),d.lang=s)}),[d,s]);var B=(0,p.useCallback)((function(e,n){null!==d&&(u(n),n?d.start():d.stop())}),[d]),Z=(0,p.useState)(!0),k=o()(Z,2),y=k[0],w=k[1];return(0,p.useEffect)((function(){w(null===n.current||n.current.disabled)})),(0,p.useEffect)((function(){null!==d&&y&&d.abort()}),[y,d]),null===d&&void 0!==r?r:p.createElement(V.ZP,{title:f,disableFocusListener:y,disableHoverListener:y,disableTouchListener:y},p.createElement("span",null,p.createElement(me.Z,{disabled:y,color:"default",icon:p.createElement(ve.Z,null),checkedIcon:p.createElement(Ae.Z,null),checked:c,onChange:B})))},ge=t(88001),Ce=(0,K.vU)({formControls:{id:"src.components.App.FormControlsPage.formControls",defaultMessage:"Form controls"}}),Be=function(){var e=(0,p.useState)(""),n=o()(e,2),t=n[0],r=n[1],l=(0,p.useRef)(null),i=(0,p.useCallback)((function(e){r(e.target.value)}),[]);return p.createElement(u.Z,{label:"label",value:t,onChange:i,inputRef:l,InputProps:{endAdornment:p.createElement(s.Z,{position:"end"},p.createElement(re,{inputFor:l}))}})},Ze=function(){var e,n,t,r,l=(0,p.useContext)(_.Z).dir,i=(0,p.useState)(""),a=o()(i,2),c=a[0],d=a[1],f=(0,p.useRef)(null),m=(0,p.useCallback)((function(e){d(e.target.value)}),[]),A=(0,p.useCallback)((function(e,n){if(null!==f.current)switch(d(n),f.current.scrollTop=f.current.scrollHeight-f.current.offsetHeight,l){case"ltr":f.current.scrollLeft=f.current.scrollWidth-f.current.offsetWidth;break;case"rtl":f.current.scrollLeft=-(f.current.scrollWidth-f.current.offsetWidth)}}),[l,f,null===(e=f.current)||void 0===e?void 0:e.scrollWidth,null===(n=f.current)||void 0===n?void 0:n.scrollHeight,null===(t=f.current)||void 0===t?void 0:t.offsetWidth,null===(r=f.current)||void 0===r?void 0:r.offsetHeight]);return p.createElement(u.Z,{label:"label",value:c,onChange:m,inputRef:f,InputProps:{endAdornment:p.createElement(s.Z,{position:"end"},p.createElement(be,{inputFor:f,onResult:A,fallback:null}))}})},ke=function(){var e,n,t,r,l=(0,p.useContext)(_.Z).dir,i=(0,p.useState)(""),a=o()(i,2),c=a[0],d=a[1],f=(0,p.useRef)(null),m=(0,p.useCallback)((function(e){d(e.target.value)}),[]),A=(0,p.useCallback)((function(e,n){if(null!==f.current)switch(d(n),f.current.scrollTop=f.current.scrollHeight-f.current.offsetHeight,l){case"ltr":f.current.scrollLeft=f.current.scrollWidth-f.current.offsetWidth;break;case"rtl":f.current.scrollLeft=-(f.current.scrollWidth-f.current.offsetWidth)}}),[l,f,null===(e=f.current)||void 0===e?void 0:e.scrollWidth,null===(n=f.current)||void 0===n?void 0:n.scrollHeight,null===(t=f.current)||void 0===t?void 0:t.offsetWidth,null===(r=f.current)||void 0===r?void 0:r.offsetHeight]);return p.createElement(u.Z,{label:"label",value:c,onChange:m,inputRef:f,InputProps:{endAdornment:p.createElement(s.Z,{position:"end"},p.createElement(be,{inputFor:f,onResult:A,fallback:null}),p.createElement(re,{inputFor:f}))}})},ye=(0,d.Z)({Image:{maxWidth:function(e){var n=e.width;return null!==n?n/2:void 0},maxHeight:function(e){var n=e.height;return null!==n?n/2:void 0}}}),we=function(e){var n=e.file,t=(0,p.useState)(null),r=o()(t,2),l=r[0],s=r[1],i=(0,p.useMemo)((function(){return new FileReader}),[]),a=(0,ge.Z)(),c=a.width,u=a.height,d=ye({width:c,height:u}),f=(0,p.useCallback)((function(e){var n;if(null!=(null===(n=e.target)||void 0===n?void 0:n.result)){if(e.target.result instanceof ArrayBuffer)throw new Error;s(e.target.result)}}),[]);return(0,p.useEffect)((function(){return i.addEventListener("load",f),function(){i.removeEventListener("load",f)}}),[i,f]),(0,p.useEffect)((function(){if(!/^image\/[0-9A-Za-z][!#$&+-.0-9A-Z^_a-z]*$/.test(n.type))throw new Error;i.readAsDataURL(n)}),[n,i]),p.createElement("img",{src:null!=l?l:void 0,className:d.Image})},Fe=(0,z.D)((function(){var e=(0,m.Z)().formatMessage,n=(0,p.useCallback)((function(e){return null===e||0===e.length?p.createElement(A.Z,de.noFileSelected):Array.from(e).map((function(e,n){return p.createElement(we,{key:n,file:e})}))}),[]),t=(0,p.useState)(""),r=o()(t,2),l=r[0],u=r[1],d=(0,p.useCallback)((function(e){var n;u(null===(n=e.target)||void 0===n?void 0:n.value)}),[]),v=(0,p.useRef)(null);return p.createElement(p.Fragment,null,p.createElement(f.Z,{title:e(Ce.formControls)}),p.createElement(i.Z,null,p.createElement(a.Z,null,p.createElement(c.Z,null,p.createElement(fe,{accept:"image/*",multiple:!0,renderResultMessage:n}))),p.createElement(a.Z,null,p.createElement(c.Z,null,p.createElement(Be,null))),p.createElement(a.Z,null,p.createElement(c.Z,null,p.createElement(Ze,null))),p.createElement(a.Z,null,p.createElement(c.Z,null,p.createElement(ke,null))),p.createElement(a.Z,null,p.createElement(c.Z,null,p.createElement(q,{label:"code",value:l,onChange:d,InputProps:{endAdornment:p.createElement(s.Z,{position:"end"},p.createElement(re,{inputFor:v}))},inputProps:{ref:v}})))))}))},30964:function(e,n,t){"use strict";var r=t(94015),l=t.n(r),o=t(23645),s=t.n(o)()(l());s.push([e.id,".src-components-CodeField-classes__Container--nU10n {\n  position: relative;\n}\n\n.src-components-CodeField-classes__Pre--3c2a_ {\n  /* font-family: monospace; */\n  font-size: 16px;\n  line-height: 1.1876em;\n  margin: 0;\n  padding: 18.5px 14px;\n  position: absolute;\n  text-align: left;\n  white-space: pre-wrap;\n  /* width: 100%; */\n  word-break: break-word;\n}\n\n.src-components-CodeField-classes__TextArea--ZPHX8 {\n  font-family: monospace;\n  font-size: 16px;\n  /* line-height: 1.1876em; */\n  /* margin: 0; */\n  -webkit-text-fill-color: transparent;\n  white-space: pre-wrap;\n  /* width: 100%; */\n  /* word-break: break-word; */\n}\n","",{version:3,sources:["webpack://./src/components/CodeField/classes.css"],names:[],mappings:"AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,4BAA4B;EAC5B,eAAe;EACf,qBAAqB;EACrB,SAAS;EACT,oBAAoB;EACpB,kBAAkB;EAClB,gBAAgB;EAChB,qBAAqB;EACrB,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,eAAe;EACf,2BAA2B;EAC3B,eAAe;EACf,oCAAoC;EACpC,qBAAqB;EACrB,iBAAiB;EACjB,4BAA4B;AAC9B",sourcesContent:[".Container {\n  position: relative;\n}\n\n.Pre {\n  /* font-family: monospace; */\n  font-size: 16px;\n  line-height: 1.1876em;\n  margin: 0;\n  padding: 18.5px 14px;\n  position: absolute;\n  text-align: left;\n  white-space: pre-wrap;\n  /* width: 100%; */\n  word-break: break-word;\n}\n\n.TextArea {\n  font-family: monospace;\n  font-size: 16px;\n  /* line-height: 1.1876em; */\n  /* margin: 0; */\n  -webkit-text-fill-color: transparent;\n  white-space: pre-wrap;\n  /* width: 100%; */\n  /* word-break: break-word; */\n}\n"],sourceRoot:""}]),s.locals={Container:"src-components-CodeField-classes__Container--nU10n",Pre:"src-components-CodeField-classes__Pre--3c2a_",TextArea:"src-components-CodeField-classes__TextArea--ZPHX8"},n.Z=s},76376:function(e,n,t){"use strict";var r=t(94015),l=t.n(r),o=t(23645),s=t.n(o)()(l());s.push([e.id,".src-lib-components-FileUpload-classes__FileUpload--89hPZ {\n  display: inline-block; /* TODO: polyfill */\n  display: inline flow-root;\n  cursor: pointer;\n}\n\n.src-lib-components-FileUpload-classes__FileUpload--89hPZ.src-lib-components-FileUpload-classes__Safari--3_8iF:focus {\n  outline: none;\n}\n\n.src-lib-components-FileUpload-classes__Button--3uZU-.src-lib-components-FileUpload-classes__Button--3uZU- {\n  text-transform: none;\n  cursor: unset;\n}\n\n.src-lib-components-FileUpload-classes__Input--b4BE6 {\n  display: none;\n}\n","",{version:3,sources:["webpack://./src/lib/components/FileUpload/classes.css"],names:[],mappings:"AAAA;EACE,qBAAqB,EAAE,mBAAmB;EAC1C,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,oBAAoB;EACpB,aAAa;AACf;;AAEA;EACE,aAAa;AACf",sourcesContent:[".FileUpload {\n  display: inline-block; /* TODO: polyfill */\n  display: inline flow-root;\n  cursor: pointer;\n}\n\n.FileUpload.Safari:focus {\n  outline: none;\n}\n\n.Button.Button {\n  text-transform: none;\n  cursor: unset;\n}\n\n.Input {\n  display: none;\n}\n"],sourceRoot:""}]),s.locals={FileUpload:"src-lib-components-FileUpload-classes__FileUpload--89hPZ",Safari:"src-lib-components-FileUpload-classes__Safari--3_8iF",Button:"src-lib-components-FileUpload-classes__Button--3uZU-",Input:"src-lib-components-FileUpload-classes__Input--b4BE6"},n.Z=s}}]);
//# sourceMappingURL=formControls.cd6b0b3b.js.map