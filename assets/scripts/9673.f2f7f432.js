(self.webpackChunkrap=self.webpackChunkrap||[]).push([[9673],{95929:function(e,n,t){"use strict";const l=(0,t(2804).cn)({key:"bannersState",default:[]});n.Z=l},32975:function(e,n,t){"use strict";var l=t(18394),o=t.n(l);const a=(0,t(2804).cn)({key:"notificationsState",default:[],effects_UNSTABLE:[({onSet:e})=>{e((e=>{if(!Array.isArray(e))throw new Error;0!==e.length?o().add():o().remove()}))}]});n.Z=a},99673:function(e,n,t){"use strict";t.d(n,{D:function(){return an}});var l=t(67294),o=t(66037),a=t(55517),r=t(41120),s=t(8920),c=t(94184),i=t.n(c),p=t(2804);var u=(0,p.cn)({key:"bannerOpenState",default:!1}),m=t(49527),d=t(78607),g=t(93379),E=t.n(g),A=t(94403),f={insert:"head",singleton:!1},h=(E()(A.Z,f),A.Z.locals||{});const Z=(0,r.Z)({CollapseContainer:{top:({topAppbarHeight:e})=>e}});var v=({topAppbarHeight:e})=>{const n=(0,p.sJ)(d.Z),[t,r]=(0,p.FV)(u),c=Z({topAppbarHeight:e}),g=(0,l.useMemo)((()=>i()(c.CollapseContainer,h.CollapseContainer)),[c]),[E,A]=(0,l.useState)(null),f=(0,s.Z)();return(0,l.useEffect)((()=>{(async()=>{null!==n?(null!==E&&n.key!==E.key&&(r(!1),await(0,m.Z)(f.transitions.duration.standard)),A(n),r(!0)):(r(!1),await(0,m.Z)(f.transitions.duration.standard),A(null))})()}),[n,E,f]),l.createElement(o.Z,{in:t,mountOnEnter:!0,unmountOnExit:!0,classes:{container:g}},l.createElement("div",null,null==E?void 0:E.banner,l.createElement(a.Z,null)))};class C extends l.Component{constructor(...e){super(...e),this.state={hasError:!1}}render(){const{renderError:e,children:n}=this.props,{hasError:t,error:l}=this.state;return t?e(l,n):n}}C.getDerivedStateFromError=e=>({hasError:!0,error:e});var b=C,T=t(16787),S=t(25818),k=t(67154),L=t.n(k),_=t(96834),y=t(43927),B=t(85699),I=t(87248),w=t(31958),N=t(17812),P=t(62822),O=t(46869),M=t(95757),R=t(96837),D=t(94775),x=t(92448),U=t(18362),F=t(24960),W=t(48884),H=t(9969),z=t(79313),j=t(97127),G=t(46121),J=t(50998),X=t(89659),q=t(5513),$=t(43587);const Y=(0,$.jt)((0,$.gB)("initial","inherit","primary","secondary","textPrimary","textSecondary","error")),V=l.forwardRef(((e,n)=>l.createElement(q.rU,L()({innerRef:n},e))));class K extends l.Component{render(){const{color:e,...n}=this.props;return Y(e)?l.createElement(X.Z,L()({component:V,color:e},n)):(console.warn(S.Z`${e} is not a Material-UI Typography color.`),l.createElement(X.Z,L()({component:V},n)))}}var Q=l.forwardRef((({to:e,button:n,innerRef:t,...o},a)=>{const r=l.forwardRef(((e,n)=>l.createElement(K,L()({ref:n,innerRef:t,color:"inherit",underline:"none"},e))));return l.createElement(J.Z,L()({button:!0,component:r,to:e,ref:a},o))})),ee=t(99676),ne=t(70043),te={insert:"head",singleton:!1},le=(E()(ne.Z,te),ne.Z.locals||{}),oe=t(85315),ae=(0,oe.vU)({home:{id:"src.components.PageTemplate.Nav.home",defaultMessage:"Home"},components:{id:"src.components.PageTemplate.Nav.components",defaultMessage:"Components"},formControls:{id:"src.components.PageTemplate.Nav.formControls",defaultMessage:"Form controls"},apps:{id:"src.components.PageTemplate.Nav.apps",defaultMessage:"Apps"},chess:{id:"src.components.PageTemplate.Nav.chess",defaultMessage:"Chess"},clock:{id:"src.components.PageTemplate.Nav.clock",defaultMessage:"Clock"},counter:{id:"src.components.PageTemplate.Nav.counter",defaultMessage:"Counter"},info:{id:"src.components.PageTemplate.Nav.info",defaultMessage:"Info"},paint:{id:"src.components.PageTemplate.Nav.paint",defaultMessage:"Paint"},reminder:{id:"src.components.PageTemplate.Nav.reminder",defaultMessage:"Reminder"},settings:{id:"src.components.PageTemplate.Nav.settings",defaultMessage:"Settings"}});const re=(0,r.Z)((e=>({DrawerHeader:{...e.mixins.gutters(),height:({topAppbarHeight:e})=>void 0!==e?S.Z`${e}px`:void 0,display:"grid",alignItems:"center",justifyContent:"start"}})),{name:"Nav"}),se=({style:e,...n})=>{if(void 0===e)return l.createElement(F.Z,L()({style:{transform:"scaleX(-1)"}},n));const{transform:t,...o}=e;if(void 0!==t)throw new Error;return l.createElement(F.Z,L()({style:{transform:"scaleX(-1)",...o}},n))};var ce=l.forwardRef((({open:e,onClose:n,topAppbarHeight:t},o)=>{const{dir:r}=(0,l.useContext)(ee.Z),s=(0,l.useMemo)((()=>{switch((0,G.s)(r),r){case"ltr":return F.Z;case"rtl":return se}}),[r]),c=re({topAppbarHeight:t});return l.createElement(w.ZP,{anchor:"left",open:e,onClose:n,PaperProps:{ref:o}},l.createElement("div",{className:c.DrawerHeader},l.createElement(N.Z,{edge:"start",color:"inherit",onClick:n},l.createElement(W.Z,null))),l.createElement(a.Z,null),l.createElement(P.Z,{className:le.List},l.createElement(Q,{to:"/",onClick:n},l.createElement(O.Z,null,l.createElement(x.Z,null)),l.createElement(M.Z,null,l.createElement(j.Z,ae.home))),l.createElement(R.Z,{disableSticky:!0},l.createElement(j.Z,ae.components)),l.createElement(Q,{to:"/form-controls",onClick:n},l.createElement(O.Z,null,l.createElement(z.Z,null)),l.createElement(M.Z,null,l.createElement(j.Z,ae.formControls))),l.createElement(R.Z,{disableSticky:!0},l.createElement(j.Z,ae.apps)),l.createElement(Q,{to:"/chess",onClick:n},l.createElement(O.Z,null,l.createElement(I.JO,{icon:_.Z,width:"24",height:"24"})),l.createElement(M.Z,null,l.createElement(j.Z,ae.chess))),l.createElement(Q,{to:"/clock",onClick:n},l.createElement(O.Z,null,l.createElement(I.JO,{icon:y.Z,width:"24",height:"24"})),l.createElement(M.Z,null,l.createElement(j.Z,ae.clock))),l.createElement(Q,{to:"/counter",onClick:n},l.createElement(O.Z,null,l.createElement(I.JO,{icon:B.Z,width:"24",height:"24"})),l.createElement(M.Z,null,l.createElement(j.Z,ae.counter))),l.createElement(Q,{to:"/info",onClick:n},l.createElement(O.Z,null,l.createElement(U.Z,null)),l.createElement(M.Z,null,l.createElement(j.Z,ae.info))),l.createElement(Q,{to:"/paint",onClick:n},l.createElement(O.Z,null,l.createElement(D.Z,null)),l.createElement(M.Z,null,l.createElement(j.Z,ae.paint))),l.createElement(Q,{to:"/reminder",onClick:n},l.createElement(O.Z,null,l.createElement(s,null)),l.createElement(M.Z,null,l.createElement(j.Z,ae.reminder))),l.createElement(Q,{to:"/settings",onClick:n},l.createElement(O.Z,null,l.createElement(H.Z,null)),l.createElement(M.Z,null,l.createElement(j.Z,ae.settings)))))})),ie=t(45258),pe=t(59009),ue=t(28889),me=t(52387),de=t(28358),ge=t(3380),Ee=t(48825),Ae=t(32975),fe=t(59446),he=t(64436),Ze=t(38799),ve=t(96394),Ce=t(85639),be=t(66718),Te=t(110),Se=t(61867),ke=t(44586),Le=JSON.parse('{"en":"English","he":"עברית","ja":"日本語"}');var _e=t(53638),ye=t(44974),Be={insert:"head",singleton:!1},Ie=(E()(ye.Z,Be),ye.Z.locals||{}),we=(0,oe.vU)({language:{id:"src.components.LocaleSelect.language",defaultMessage:"Language"}});const Ne=(0,r.Z)({Select:{minWidth:({selectMinWidth:e})=>e}}),Pe={selectLocale:_e.fN};var Oe=(0,Se.$j)((({localeSelector:{locale:e}})=>({locale:e})),Pe)((({classes:e,FormControlProps:n,locale:t,selectLocale:o})=>{var a,r;const[c,p]=(0,l.useState)(null),[u,m]=(0,l.useState)(null),d=(0,l.useMemo)(ke.Z,[]),g=(0,s.Z)(),{dir:E}=(0,l.useContext)(ee.Z),A=Ne({selectMinWidth:null!=u?u:void 0}),f=(0,l.useMemo)((()=>{var e,t,l,o;return null!==(e=null!==(t=null==n?void 0:n.variant)&&void 0!==t?t:null==g||null===(l=g.props)||void 0===l||null===(o=l.MuiFormControl)||void 0===o?void 0:o.variant)&&void 0!==e?e:"standard"}),[null==n?void 0:n.variant,null==g||null===(a=g.props)||void 0===a||null===(r=a.MuiFormControl)||void 0===r?void 0:r.variant]),h=(0,l.useMemo)((()=>i()(null==e?void 0:e.root,null==n?void 0:n.className)),[null==e?void 0:e.root,null==n?void 0:n.className]),Z=(0,l.useMemo)((()=>i()(null==e?void 0:e.label,Ie.InputLabel)),[null==e?void 0:e.label]),v=(0,l.useMemo)((()=>i()(A.Select,Ie.Select)),[A.Select]),C=(0,l.useMemo)((()=>i()(null==e?void 0:e.input)),[null==e?void 0:e.input]),b=(0,l.useMemo)((()=>i()(null==e?void 0:e.selectIcon)),[null==e?void 0:e.selectIcon]),T=(0,l.useMemo)((()=>i()(null==e?void 0:e.inputUnderline)),[null==e?void 0:e.inputUnderline]),S=(0,l.useRef)(null),k=(0,l.useRef)(null);(0,l.useEffect)((()=>{if(null===S.current)return;if(p(S.current.offsetWidth),null===k.current)return;const e=k.current.querySelector(`:scope > .${Ie.Select}`);if(null===e||!(e instanceof HTMLDivElement))return;const n=S.current.getBoundingClientRect(),t=globalThis.getComputedStyle(e),l=parseFloat("ltr"===E?t.paddingLeft:t.paddingRight),o=parseFloat("ltr"===E?t.paddingRight:t.paddingLeft);m(n.width+l-o)}),[t,E]);const _=(0,l.useCallback)((e=>{var n;"string"==typeof(n=e.target.value)&&n in Le&&o(e.target.value)}),[o]),{availableLocales:y}=(0,l.useContext)(ee.Z);return l.createElement(he.Z,L()({},n,{className:h}),l.createElement(ve.Z,{className:Z,ref:S,htmlFor:d},l.createElement(j.Z,we.language)),l.createElement(Te.Z,{classes:{select:v,icon:b},ref:k,labelWidth:null!=c?c:void 0,value:t,onChange:_,id:d,inputProps:{"data-testid":"localeSelect"},input:{standard:l.createElement(Ze.Z,{className:C,classes:{underline:T}}),outlined:l.createElement(be.Z,{className:C,labelWidth:null!=c?c:void 0}),filled:l.createElement(fe.Z,{className:C})}[f]},null==y?void 0:y.map(((e,n)=>l.createElement(Ce.Z,{key:n,value:e},Le[e])))))}));var Me=(0,p.cn)({key:"notificationsSortState",default:{by:"timestamp",in:"descending"}});var Re=(0,p.nZ)({key:"sortedNotificationsState",get({get:e}){const n=e(Ae.Z),t=e(Me),l=n.map((e=>({notification:e,by:e[t.by]}))).sort((({by:e},{by:n})=>e-n)).map((({notification:e})=>e));return"descending"===t.in&&l.reverse(),l}}),De=t(81860),xe=t(28428);var Ue=({notification:e})=>{const n=(0,l.useCallback)((()=>{e.close()}),[e]);return l.createElement(J.Z,null,l.createElement(M.Z,{primary:e.title,secondary:l.createElement(oe.qN,{value:e.timestamp,format:"medium"})}),l.createElement(De.Z,null,l.createElement(N.Z,{edge:"end",onClick:n},l.createElement(xe.Z,null))))};var Fe=()=>{const e=(0,p.sJ)(Re);return l.createElement(P.Z,null,e.map((e=>l.createElement(Ue,{key:e.timestamp,notification:e}))))},We=t(31826),He=t(73521),ze=t(3320),je=t(10850),Ge=t(44901),Je=t(46328),Xe={insert:"head",singleton:!1},qe=(E()(Je.Z,Xe),Je.Z.locals||{}),$e=(0,oe.vU)({toggleLightDarkTheme:{id:"src.components.ToggleDarkButton.toggleLightDarkTheme",defaultMessage:"Toggle light/dark theme"}});var Ye=()=>{const[e,n]=(0,p.FV)(je.Z),{defaultDark:t}=(0,l.useContext)(Ge.Z);(0,G.s)(t);const o=(0,l.useCallback)((()=>{n(!0)}),[]),a=(0,l.useCallback)((()=>{n(!1)}),[]);return l.createElement(ge.ZP,{title:l.createElement(j.Z,$e.toggleLightDarkTheme)},l.createElement("span",{className:qe.TooltipWrapper},(null!=e?e:t)?l.createElement(N.Z,{onClick:a},l.createElement(ze.Z,null)):l.createElement(N.Z,{onClick:o,color:"inherit"},l.createElement(He.Z,null))))},Ve=t(17326),Ke=t(20284),Qe={insert:"head",singleton:!1},en=(E()(Ke.Z,Qe),Ke.Z.locals||{}),nn=(0,oe.vU)({showNotifications:{id:"src.components.PageTemplate.TopAppbar.showNotifications",defaultMessage:"Show notifications"}});const tn=(0,r.Z)({Offset:{height:({topAppbarHeight:e})=>e}});var ln=l.forwardRef((({onMenuIconButtonClick:e},n)=>{const{width:t}=(0,T.Z)(),{dir:o}=(0,l.useContext)(ee.Z),[a,r]=(0,l.useState)(null),s=(0,l.useCallback)((e=>{if(null===t)return;const n=null==e?void 0:e.getBoundingClientRect();void 0!==n&&r(n.height)}),[t]),c=(0,Ve.Z)(n,s),i=tn({topAppbarHeight:null!=a?a:void 0}),[u]=(0,p.FV)(Ae.Z),[m,d]=(0,l.useState)(!1),g=l.useRef(null),E=(0,l.useCallback)((()=>{0!==u.length&&d(!0)}),[u]),A=(0,l.useCallback)((()=>{d(!1)}),[]);return(0,l.useEffect)((()=>{0===u.length&&d(!1)}),[u]),l.createElement(l.Fragment,null,l.createElement(ie.Z,{position:"fixed",ref:c},l.createElement(de.Z,null,l.createElement(N.Z,{edge:"start",color:"inherit",onClick:e},l.createElement(W.Z,null)),l.createElement(We.Z,null),l.createElement(ue.Z,{mx:1},l.createElement(Ye,null),"Notification"in globalThis&&l.createElement(l.Fragment,null,l.createElement(ge.ZP,{title:l.createElement(j.Z,nn.showNotifications),disableFocusListener:0===u.length,disableHoverListener:0===u.length,disableTouchListener:0===u.length},l.createElement("span",{className:en.TooltipWrapper},l.createElement(N.Z,{color:"inherit",onClick:E,ref:g,disabled:0===u.length},l.createElement(pe.Z,{color:"secondary",badgeContent:u.length},l.createElement(Ee.Z,null))))),0!==u.length&&l.createElement(me.ZP,{open:m,onClose:A,anchorEl:g.current,anchorOrigin:{horizontal:"ltr"===o?"right":"left",vertical:"bottom"},transformOrigin:{horizontal:"ltr"===o?"right":"left",vertical:"top"}},l.createElement(Fe,null)))),l.createElement(Oe,{classes:{label:en.LocaleSelectLabel,input:en.LocaleSelectInput,selectIcon:en.LocaleSelectSelectIcon,inputUnderline:en.LocaleSelectInputUnderline},FormControlProps:{variant:"filled"}}))),l.createElement("div",{className:i.Offset}))}));const on=({children:e})=>{const n=(0,l.useCallback)((e=>{if(e instanceof Error)return S.Z`${String(e)}`;throw new TypeError(S.Z`${String(e)} is not an error.`)}),[]),[t,o]=(0,l.useState)(!1),a=(0,l.useRef)(null),{width:r}=(0,T.Z)(),[s,c]=(0,l.useState)(null),i=(0,l.useCallback)((e=>{if(null===r)return;const n=null==e?void 0:e.getBoundingClientRect();void 0!==n&&c(n.height)}),[r]),p=(0,l.useCallback)((()=>{o(!0)}),[]),u=(0,l.useCallback)((()=>{o(!1)}),[]);return l.createElement(l.Fragment,null,l.createElement(ln,{ref:i,onMenuIconButtonClick:p}),l.createElement(v,{topAppbarHeight:null!=s?s:void 0}),l.createElement(ce,{ref:a,open:t,onClose:u,topAppbarHeight:null!=s?s:void 0}),l.createElement(b,{renderError:n},e))},an=e=>n=>l.createElement(on,null,l.createElement(e,n))},31826:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var l=t(67294),o=t(93379),a=t.n(o),r=t(30894),s={insert:"head",singleton:!1},c=(a()(r.Z,s),r.Z.locals||{});var i=()=>l.createElement("div",{className:c.Spacer})},43587:function(e,n,t){"use strict";t.d(n,{gB:function(){return l},jt:function(){return o}});const l=(...e)=>n=>e.some((e=>e===n)),o=e=>n=>void 0===n||e(n)},17326:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var l=t(67294);function o(...e){return(0,l.useCallback)((n=>{for(const t of e)if(null!==t)if("function"==typeof t)t(n);else{t.current=n}}),[e])}},16787:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var l=t(67294);function o(){const[e,n]=(0,l.useState)(null),[t,o]=(0,l.useState)(null),[a,r]=(0,l.useState)(null),s=(0,l.useCallback)((()=>{n(globalThis.innerWidth),o(globalThis.innerHeight)}),[]),c=(0,l.useCallback)((()=>{r(globalThis.devicePixelRatio)}),[]);return(0,l.useEffect)((()=>(s(),c(),globalThis.addEventListener("resize",s),globalThis.addEventListener("change",c),()=>{globalThis.removeEventListener("resize",s),globalThis.removeEventListener("change",c)})),[s,c]),{width:e,height:t,dpr:a}}},78607:function(e,n,t){"use strict";var l=t(2804),o=t(95929);const a=(0,l.nZ)({key:"currentBannerState",get({get:e}){const n=e(o.Z);return n.length>=1?n[0]:null},set({get:e,set:n},t){if(t instanceof l.nY)throw new Error("DefaultValue not supported.");n(o.Z,(n=>{if(null===t){const[e,...t]=n;return t}{const l=e(a),o=(()=>{if(null!==l&&l.replaceable){const e=n.findIndex((e=>e.key===l.key));return[...n.slice(0,e),...n.slice(e+1)]}return n})(),r=o.findIndex((e=>e.key===t.key));return-1!==r?[t,...o.slice(0,r),...o.slice(r+1)]:[t,...o]}}))}});n.Z=a},94403:function(e,n,t){"use strict";var l=t(94015),o=t.n(l),a=t(23645),r=t.n(a)()(o());r.push([e.id,".src-components-BannerContainer-classes__CollapseContainer--1XRJF {\n  position: sticky;\n  z-index: 1075; /* NOTE: Behind an app bar, ahead speed dials; cf. https://material-ui.com/customization/z-index/ */\n}\n","",{version:3,sources:["webpack://./src/components/BannerContainer/classes.css"],names:[],mappings:"AAAA;EACE,gBAAgB;EAChB,aAAa,EAAE,mGAAmG;AACpH",sourcesContent:[".CollapseContainer {\n  position: sticky;\n  z-index: 1075; /* NOTE: Behind an app bar, ahead speed dials; cf. https://material-ui.com/customization/z-index/ */\n}\n"],sourceRoot:""}]),r.locals={CollapseContainer:"src-components-BannerContainer-classes__CollapseContainer--1XRJF"},n.Z=r},44974:function(e,n,t){"use strict";var l=t(94015),o=t.n(l),a=t(23645),r=t.n(a)()(o());r.push([e.id,".src-components-LocaleSelect-classes__InputLabel--2e4qL {\n  white-space: nowrap;\n}\n\n.src-components-LocaleSelect-classes__Select--2XRfO {\n  /* Silence is golden. */\n}\n","",{version:3,sources:["webpack://./src/components/LocaleSelect/classes.css"],names:[],mappings:"AAAA;EACE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB",sourcesContent:[".InputLabel {\n  white-space: nowrap;\n}\n\n.Select {\n  /* Silence is golden. */\n}\n"],sourceRoot:""}]),r.locals={InputLabel:"src-components-LocaleSelect-classes__InputLabel--2e4qL",Select:"src-components-LocaleSelect-classes__Select--2XRfO"},n.Z=r},70043:function(e,n,t){"use strict";var l=t(94015),o=t.n(l),a=t(23645),r=t.n(a)()(o());r.push([e.id,".src-components-PageTemplate-Nav-classes__List--Wtuz2 {\n  overflow-y: auto;\n}\n","",{version:3,sources:["webpack://./src/components/PageTemplate/Nav/classes.css"],names:[],mappings:"AAAA;EACE,gBAAgB;AAClB",sourcesContent:[".List {\n  overflow-y: auto;\n}\n"],sourceRoot:""}]),r.locals={List:"src-components-PageTemplate-Nav-classes__List--Wtuz2"},n.Z=r},20284:function(e,n,t){"use strict";var l=t(94015),o=t.n(l),a=t(23645),r=t.n(a)()(o());r.push([e.id,".src-components-PageTemplate-TopAppbar-classes__LocaleSelectLabel--1RjUX.src-components-PageTemplate-TopAppbar-classes__LocaleSelectLabel--1RjUX {\n  color: currentColor\n}\n\n.src-components-PageTemplate-TopAppbar-classes__LocaleSelectLabel--1RjUX.src-components-PageTemplate-TopAppbar-classes__LocaleSelectLabel--1RjUX.Mui-focused {\n    opacity: 0.618;\n    color: currentColor;\n  }\n\n.src-components-PageTemplate-TopAppbar-classes__LocaleSelectInput--1iMs0.src-components-PageTemplate-TopAppbar-classes__LocaleSelectInput--1iMs0 {\n  color: currentColor;\n}\n\n.src-components-PageTemplate-TopAppbar-classes__LocaleSelectSelectIcon--2tFO9.src-components-PageTemplate-TopAppbar-classes__LocaleSelectSelectIcon--2tFO9 {\n  color: currentColor;\n}\n\n.src-components-PageTemplate-TopAppbar-classes__LocaleSelectInputUnderline--2c5cm.src-components-PageTemplate-TopAppbar-classes__LocaleSelectInputUnderline--2c5cm::before,\n  .src-components-PageTemplate-TopAppbar-classes__LocaleSelectInputUnderline--2c5cm.src-components-PageTemplate-TopAppbar-classes__LocaleSelectInputUnderline--2c5cm:hover:not(.Mui-disabled)::before,\n  .src-components-PageTemplate-TopAppbar-classes__LocaleSelectInputUnderline--2c5cm.src-components-PageTemplate-TopAppbar-classes__LocaleSelectInputUnderline--2c5cm::after {\n    border-bottom-color: currentColor;\n  }\n\n/* TODO: Remove */\n/* NOTE: https://material-ui.com/components/tooltips/#disabled-elements のように <span> を差し込む場合、ツールチップの位置を <span> が無い場合と揃えるために <span> の高さを保持する。 */\n/* NOTE: <Tooltip> の親の内側のレイアウトが flex な場合も <span> の高さが保持されるので、 <InputAdornment> 等で使う場合はこのルールセットは不要。 */\n.src-components-PageTemplate-TopAppbar-classes__TooltipWrapper--TkZN7 {\n  display: inline flow-root;\n  display: inline-block; /* TODO: Delete this line */\n}\n","",{version:3,sources:["webpack://./src/components/PageTemplate/TopAppbar/classes.css"],names:[],mappings:"AAAA;EACE;AAMF;;AAJE;IACE,cAAc;IACd,mBAAmB;EACrB;;AAGF;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAGE;;;IAGE,iCAAiC;EACnC;;AAGF,iBAAiB;AACjB,6IAA6I;AAC7I,oGAAoG;AACpG;EACE,yBAAyB;EACzB,qBAAqB,EAAE,2BAA2B;AACpD",sourcesContent:[".LocaleSelectLabel.LocaleSelectLabel {\n  color: currentColor;\n\n  &:global(.Mui-focused) {\n    opacity: 0.618;\n    color: currentColor;\n  }\n}\n\n.LocaleSelectInput.LocaleSelectInput {\n  color: currentColor;\n}\n\n.LocaleSelectSelectIcon.LocaleSelectSelectIcon {\n  color: currentColor;\n}\n\n.LocaleSelectInputUnderline.LocaleSelectInputUnderline {\n  &::before,\n  &:hover:not(:global(.Mui-disabled))::before,\n  &::after {\n    border-bottom-color: currentColor;\n  }\n}\n\n/* TODO: Remove */\n/* NOTE: https://material-ui.com/components/tooltips/#disabled-elements のように <span> を差し込む場合、ツールチップの位置を <span> が無い場合と揃えるために <span> の高さを保持する。 */\n/* NOTE: <Tooltip> の親の内側のレイアウトが flex な場合も <span> の高さが保持されるので、 <InputAdornment> 等で使う場合はこのルールセットは不要。 */\n.TooltipWrapper {\n  display: inline flow-root;\n  display: inline-block; /* TODO: Delete this line */\n}\n"],sourceRoot:""}]),r.locals={LocaleSelectLabel:"src-components-PageTemplate-TopAppbar-classes__LocaleSelectLabel--1RjUX",LocaleSelectInput:"src-components-PageTemplate-TopAppbar-classes__LocaleSelectInput--1iMs0",LocaleSelectSelectIcon:"src-components-PageTemplate-TopAppbar-classes__LocaleSelectSelectIcon--2tFO9",LocaleSelectInputUnderline:"src-components-PageTemplate-TopAppbar-classes__LocaleSelectInputUnderline--2c5cm",TooltipWrapper:"src-components-PageTemplate-TopAppbar-classes__TooltipWrapper--TkZN7"},n.Z=r},30894:function(e,n,t){"use strict";var l=t(94015),o=t.n(l),a=t(23645),r=t.n(a)()(o());r.push([e.id,".src-components-Spacer-classes__Spacer--3cheZ {\n  flex-grow: 1;\n}\n","",{version:3,sources:["webpack://./src/components/Spacer/classes.css"],names:[],mappings:"AAAA;EACE,YAAY;AACd",sourcesContent:[".Spacer {\n  flex-grow: 1;\n}\n"],sourceRoot:""}]),r.locals={Spacer:"src-components-Spacer-classes__Spacer--3cheZ"},n.Z=r},46328:function(e,n,t){"use strict";var l=t(94015),o=t.n(l),a=t(23645),r=t.n(a)()(o());r.push([e.id,"/* TODO: Remove */\n/* NOTE: https://material-ui.com/components/tooltips/#disabled-elements のように <span> を差し込む場合、ツールチップの位置を <span> が無い場合と揃えるために <span> の高さを保持する。 */\n/* NOTE: <Tooltip> の親の内側のレイアウトが flex な場合も <span> の高さが保持されるので、 <InputAdornment> 等で使う場合はこのルールセットは不要。 */\n.src-components-ToggleDarkButton-classes__TooltipWrapper--J9IIY {\n  display: inline flow-root;\n  display: inline-block; /* TODO: Delete this line */\n}\n","",{version:3,sources:["webpack://./src/components/ToggleDarkButton/classes.css"],names:[],mappings:"AAAA,iBAAiB;AACjB,6IAA6I;AAC7I,oGAAoG;AACpG;EACE,yBAAyB;EACzB,qBAAqB,EAAE,2BAA2B;AACpD",sourcesContent:["/* TODO: Remove */\n/* NOTE: https://material-ui.com/components/tooltips/#disabled-elements のように <span> を差し込む場合、ツールチップの位置を <span> が無い場合と揃えるために <span> の高さを保持する。 */\n/* NOTE: <Tooltip> の親の内側のレイアウトが flex な場合も <span> の高さが保持されるので、 <InputAdornment> 等で使う場合はこのルールセットは不要。 */\n.TooltipWrapper {\n  display: inline flow-root;\n  display: inline-block; /* TODO: Delete this line */\n}\n"],sourceRoot:""}]),r.locals={TooltipWrapper:"src-components-ToggleDarkButton-classes__TooltipWrapper--J9IIY"},n.Z=r}}]);
//# sourceMappingURL=9673.f2f7f432.js.map