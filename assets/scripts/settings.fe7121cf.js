(self.webpackChunkrap=self.webpackChunkrap||[]).push([[5571],{94010:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var a=n(33901),s=n(282),c=n(41749),r=n(62822),l=n(50998),o=n(81860),i=n(95757),d=n(96837),u=n(9570),m=n(81019),p=n(15659),g=n(67294),f=n(64593),Z=n(31753),E=n(97127),A=n(2804),k=n(46121),h=n(86572),y=n(10850);var C=(0,A.cn)({key:"fullScreenState",default:!1,effects_UNSTABLE:[({onSet:e})=>{e((e=>{if(e instanceof A.nY)throw new Error;e?document.documentElement.requestFullscreen():document.exitFullscreen()}))}]}),S=n(23010),v=n(98253),x=n(99673),w=n(44901),b=n(60661),I=n(79388),T=n(14069),P=n(52210),M=n(93379),R=n.n(M),F=n(32638),B={insert:"head",singleton:!1},U=(R()(F.Z,B),F.Z.locals||{}),_=(0,n(85315).vU)({settings:{id:"src.components.App.SettingsPage.settings",defaultMessage:"Settings"},appearance:{id:"src.components.App.SettingsPage.appearance",defaultMessage:"Appearance"},darkTheme:{id:"src.components.App.SettingsPage.darkTheme",defaultMessage:"Dark theme"},fullScreen:{id:"src.components.App.SettingsPage.fullScreen",defaultMessage:"Full screen"},securityAndPrivacy:{id:"src.components.App.SettingsPage.securityAndPrivacy",defaultMessage:"Security and privacy"},acceptCookies:{id:"src.components.App.SettingsPage.acceptCookies",defaultMessage:"Accept cookies"},aPageReloadIsRequiredForTheConfigurationChangesToTakeEffect:{id:"src.components.App.SettingsPage.aPageReloadIsRequiredForTheConfigurationChangesToTakeEffect",defaultMessage:"A page reload is required for the configuration changes to take effect."},reload:{id:"src.components.App.SettingsPage.reload",defaultMessage:"Reload"},dontReload:{id:"src.components.App.SettingsPage.dontReload",defaultMessage:"Don't reload"}});var L=(0,x.D)((()=>{const{formatMessage:e}=(0,Z.Z)(),t=(0,p.useInjection)("EnvVarConfig").get("GTM_CONTAINER_ID"),n=(0,P.Z)(),x=(0,T.Z)(),[M,R]=(0,A.FV)(y.Z),[F,B]=(0,A.FV)(C),[L,D]=(0,A.FV)(h.Z),{defaultDark:O}=(0,g.useContext)(w.Z);(0,k.s)(O);const q=(0,g.useCallback)(((e,t)=>{R(t)}),[]),G=(0,g.useCallback)(((e,t)=>{B(t)}),[]),N=(0,g.useCallback)((()=>{location.reload()}),[]),z=(0,g.useCallback)((()=>{x.hide({key:I.Z})}),[x]),V=(0,g.useCallback)(((e,c)=>{D(c),c?(void 0!==t&&n.install(t),x.hide({key:b.Z,safe:!0}),x.hide({key:I.Z,safe:!0})):x.show(g.createElement(S.Z,{leading:g.createElement(a.Z,null,g.createElement(m.Z,null)),text:g.createElement(E.Z,_.aPageReloadIsRequiredForTheConfigurationChangesToTakeEffect),actions:g.createElement(g.Fragment,null,g.createElement(s.Z,{variant:"text",color:"primary",onClick:N},g.createElement(E.Z,_.reload)),g.createElement(s.Z,{variant:"text",color:"primary",onClick:z},g.createElement(E.Z,_.dontReload)))}),{key:I.Z})}),[n,t,x,N,z]);return g.createElement(g.Fragment,null,g.createElement(f.Z,{title:e(_.settings)}),g.createElement(c.Z,{container:!0},g.createElement(c.Z,{item:!0,xs:12,sm:6,md:4,lg:3,xl:2},g.createElement(r.Z,{subheader:g.createElement(d.Z,null,g.createElement(E.Z,_.appearance))},g.createElement(l.Z,{classes:{secondaryAction:U.ListItemSecondaryActionIsSwitch}},g.createElement(i.Z,{primary:g.createElement(E.Z,_.darkTheme)}),g.createElement(o.Z,null,g.createElement(u.Z,{checked:null!=M?M:O,onChange:q}))),g.createElement(l.Z,{classes:{secondaryAction:U.ListItemSecondaryActionIsSwitch}},g.createElement(i.Z,{primary:g.createElement(E.Z,_.fullScreen)}),g.createElement(o.Z,null,g.createElement(u.Z,{checked:F,onChange:G}))))),g.createElement(c.Z,{item:!0,xs:12,sm:6,md:4,lg:3,xl:2},g.createElement(r.Z,{subheader:g.createElement(d.Z,null,g.createElement(E.Z,_.securityAndPrivacy))},g.createElement(l.Z,{classes:{secondaryAction:U.ListItemSecondaryActionIsSwitch}},g.createElement(i.Z,{primary:g.createElement(E.Z,_.acceptCookies),secondary:g.createElement(E.Z,v.Z.weUseCookiesToAnalyzeOurTraffic)}),g.createElement(o.Z,null,g.createElement(u.Z,{checked:L,onChange:V,disabled:void 0===t})))))))}))},23010:function(e,t,n){"use strict";var a=n(28889),s=n(79895),c=n(22318),r=n(51206),l=n.n(r),o=n(67294),i=n(31826);const d=l().getParser(navigator.userAgent).is("Mobile");t.Z=({leading:e,text:t,actions:n})=>o.createElement(s.Z,{square:!0,elevation:0},o.createElement(a.Z,{display:"flex",flexWrap:"nowrap",alignItems:d?"flex-start":"center"},void 0!==e&&o.createElement(a.Z,{my:d?3:2,ml:2},e),o.createElement(a.Z,{alignSelf:"stretch",display:"flex",flexGrow:1,alignItems:d?"flex-start":"center",flexWrap:d?"wrap":void 0,gridColumnGap:(d?36:90)-16,gridRowGap:d?(void 0!==e?20:12)-10:void 0},o.createElement(a.Z,{mt:d?3:2,mb:d?void 0:2,ml:d?2:3,mr:1},o.createElement(c.Z,{variant:"body2"},t)),o.createElement(a.Z,{alignSelf:"flex-end",display:"flex",flexGrow:1},o.createElement(i.Z,null),o.createElement(a.Z,{mt:d?1.25:1,mx:1,mb:1,display:"flex",gridColumnGap:8},n)))))},98253:function(e,t,n){"use strict";var a=n(85315);t.Z=(0,a.vU)({weUseCookiesToAnalyzeOurTraffic:{id:"src.components.ObtainCookieConsentBanner.weUseCookiesToAnalyzeOurTraffic",defaultMessage:"We use cookies to analyze our traffic."},agree:{id:"src.components.ObtainCookieConsentBanner.agree",defaultMessage:"Agree"},cancel:{id:"src.components.ObtainCookieConsentBanner.cancel",defaultMessage:"Cancel"}})},60661:function(e,t,n){"use strict";const a=(0,n(44586).Z)();t.Z=a},79388:function(e,t,n){"use strict";const a=(0,n(44586).Z)();t.Z=a},14069:function(e,t,n){"use strict";var a=n(2804),s=n(44586),c=n(95929),r=n(78607);t.Z=()=>({show:(0,a._8)((({set:e})=>(t,n)=>{var a,c;const l=null!==(a=null==n?void 0:n.key)&&void 0!==a?a:(0,s.Z)(),o=null!==(c=null==n?void 0:n.replaceable)&&void 0!==c&&c;return e(r.Z,{banner:t,key:l,replaceable:o}),l})),hide:(0,a._8)((({set:e})=>t=>{var n;const a=null==t?void 0:t.key,s=null!==(n=null==t?void 0:t.safe)&&void 0!==n&&n;void 0===a?e(r.Z,(e=>{if(null===e&&!s)throw new Error("No banner found.");return null})):e(c.Z,(e=>{const t=e.findIndex((e=>e.key===a));if(-1===t&&!s)throw new Error("No banner found.");return-1!==t?[...e.slice(0,t),...e.slice(t+1)]:e}))}))})},32638:function(e,t,n){"use strict";var a=n(94015),s=n.n(a),c=n(23645),r=n.n(c)()(s());r.push([e.id,".src-components-App-SettingsPage-classes__ListItemSecondaryActionIsSwitch--1pbgU {\n  -webkit-padding-end: 64px;\n          padding-inline-end: 64px; /* 元々の値 (48px) + Switch の幅 (58px) - Checkbox の幅 (42px) */\n}\n","",{version:3,sources:["webpack://./src/components/App/SettingsPage/classes.css"],names:[],mappings:"AAAA;EACE,yBAAwB;UAAxB,wBAAwB,EAAE,wDAAwD;AACpF",sourcesContent:[".ListItemSecondaryActionIsSwitch {\n  padding-inline-end: 64px; /* 元々の値 (48px) + Switch の幅 (58px) - Checkbox の幅 (42px) */\n}\n"],sourceRoot:""}]),r.locals={ListItemSecondaryActionIsSwitch:"src-components-App-SettingsPage-classes__ListItemSecondaryActionIsSwitch--1pbgU"},t.Z=r}}]);
//# sourceMappingURL=settings.fe7121cf.js.map