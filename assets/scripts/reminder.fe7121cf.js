(self.webpackChunkrap=self.webpackChunkrap||[]).push([[2954],{79756:function(e,n,t){"use strict";var r=t(95318),a=t(20862);n.Z=void 0;var s=a(t(67294)),o=(0,r(t(2108)).default)(s.createElement("path",{d:"M20 9H4v2h16V9zM4 15h16v-2H4v2z"}),"DragHandle");n.Z=o},50153:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return K}});var r=t(67294),a=t(64593),s=t(31753),o=t(99673),c=t(61867);var i=e=>n=>(...t)=>e(n,...t),l=t(30305),d=t(13665),u=t(53390),m=t(282),g=t(97127),k=t(85315),p=(0,k.vU)({add:{id:"src.components.Reminder.AddTaskButton.add",defaultMessage:"Add"}});var v=({addTask:e})=>r.createElement(m.Z,{onClick:e,variant:"contained",color:"secondary"},r.createElement(g.Z,p.add)),f=t(62822);var h=({children:e})=>r.createElement(f.Z,null,e),T=t(13258),E=t(17812),C=t(50998),Z=t(46869),I=t(81860),L=t(8286),A=t(28428),x=t(79756),D=t(94184),M=t.n(D),R=t(5200),w=t(93379),b=t.n(w),B=t(80627),U={insert:"head",singleton:!1},y=(b()(B.Z,U),B.Z.locals||{}),_=(0,k.vU)({enterInUpperBoundCharactersOrLess:{id:"src.components.Reminder.TaskListItem.enterInUpperBoundCharactersOrLess",defaultMessage:"Enter in { upperBound } characters or less."}});var O=({value:e,index:n,onChange:t,onDelete:a,validate:o})=>{const[{dragging:c},i,l]=(0,R.c)({type:"TaskListItem",item:{value:e,index:n},isDragging:n=>{const t=n.getItem();return e.isIdenticalTo(t.value)},collect:e=>({dragging:e.isDragging()})}),d=(0,r.useMemo)((()=>M()(y.TaskListItemContainer,{[y.Dragging]:c})),[c]),u=(0,r.useCallback)((e=>{t({content:e.target.value})}),[t]),m=(0,r.useCallback)(((e,n)=>{t({done:e.target.checked})}),[t]),{formatMessage:g}=(0,s.Z)(),k=(0,r.useMemo)((()=>o(e)),[e,o]),p=(0,r.useMemo)((()=>Object.values(k).some((e=>void 0!==e))),[k]),v=(0,r.useMemo)((()=>{var e;if(void 0===k.content)return null;const n=/.* is not between -Infinity and (?<upperBound>\d+) characters\./.exec(k.content.message);return null!==n&&void 0!==(null===(e=n.groups)||void 0===e?void 0:e.upperBound)?g(_.enterInUpperBoundCharactersOrLess,n.groups):null}),[g,k.content]);return r.createElement("div",{ref:l},r.createElement(C.Z,{classes:{container:d}},r.createElement(Z.Z,null,r.createElement("div",{ref:i},r.createElement(x.Z,null))),r.createElement(Z.Z,null,r.createElement(T.Z,{color:"primary",checked:e.done,onChange:m})),r.createElement(L.Z,{variant:"standard",fullWidth:!0,value:e.content,onChange:u,disabled:e.done,error:p,helperText:v}),r.createElement(I.Z,null,r.createElement(E.Z,{onClick:a,edge:"end"},r.createElement(A.Z,null)))))},$=t(59240),j=t(46121);var H=({children:e,index:n,moveTask:t})=>{const a=(0,r.useRef)(null),[,s]=(0,$.L)({accept:"TaskListItem",hover(e,r){if((0,j.s)(a.current),e.index===n)return;const s=r.getClientOffset();(0,j.s)(s);const o=a.current.getBoundingClientRect(),c=s.y-o.top,i=(o.bottom-o.top)/2;e.index<n&&c<i||e.index>n&&c>i||(t(e.index,n),e.index=n)}});return s(a),r.createElement("div",{ref:a},e)};const X=(0,d.su)((e=>({content:(0,d.LI)((0,u.rx)({upperBound:140}))(e.content),done:(0,d.LI)(d.jK)(e.done)}))),z={getTasks:l.j9,addTask:l.fv,changeTaskContent:l.Zn,markTaskAsDone:l.BM,markTaskAsUndone:l.fX,deleteTask:l.nu,moveTask:l.bf};var F=(0,c.$j)((({reminder:{tasks:e}})=>({tasks:e})),z)((({tasks:e,getTasks:n,addTask:t,changeTaskContent:a,markTaskAsDone:s,markTaskAsUndone:o,deleteTask:c,moveTask:l})=>{(0,r.useEffect)((()=>{n()}),[n]);const d=(0,r.useCallback)(((e,{content:n,done:t})=>{void 0!==n&&a(e,n),void 0!==t&&(t?s(e):o(e))}),[a,s,o]);return r.createElement(r.Fragment,null,r.createElement(h,null,e.map(((e,n)=>r.createElement(H,{key:n,index:n,moveTask:l},r.createElement(O,{key:e.id.value,value:e,index:n,onChange:i(d)(e.id),onDelete:i(c)(e.id),validate:X})))).toArray()),r.createElement(v,{addTask:t}))})),G=(0,k.vU)({reminder:{id:"src.components.App.ReminderPage.reminder",defaultMessage:"Reminder"}});var K=(0,o.D)((()=>{const{formatMessage:e}=(0,s.Z)();return r.createElement(r.Fragment,null,r.createElement(a.Z,{title:e(G.reminder)}),r.createElement(F,null))}))},53390:function(e,n,t){"use strict";t.d(n,{rx:function(){return s},_z:function(){return c},j5:function(){return o}});var r=t(25818),a=t(13665);const s=({lowerBound:e=-1/0,upperBound:n=1/0})=>t=>{const s=(0,a.XC)(t);if(e<=s.length&&s.length<=n)return s;throw new Error(r.Z`${s} is not between ${e} and ${n} characters.`)};function o(e){const n=(0,a.XC)(e);if(!function(e){try{return new URL(e),!0}catch(e){return!1}}(n))throw new Error(r.Z`${n} is not a URL.`);return n}function c(e){const n=(0,a.XC)(e);if(!function(e){return/^GTM-.*$/.test(e)}(n))throw new Error("It does not seem like a GTM container ID.");return n}},80627:function(e,n,t){"use strict";var r=t(94015),a=t.n(r),s=t(23645),o=t.n(s)()(a());o.push([e.id,".src-components-Reminder-TaskListItem-classes__TaskListItemContainer--3OHhp.src-components-Reminder-TaskListItem-classes__Dragging--2_mhr {\n  opacity: 0;\n}\n","",{version:3,sources:["webpack://./src/components/Reminder/TaskListItem/classes.css"],names:[],mappings:"AAAA;EACE,UAAU;AACZ",sourcesContent:[".TaskListItemContainer.Dragging {\n  opacity: 0;\n}\n"],sourceRoot:""}]),o.locals={TaskListItemContainer:"src-components-Reminder-TaskListItem-classes__TaskListItemContainer--3OHhp",Dragging:"src-components-Reminder-TaskListItem-classes__Dragging--2_mhr"},n.Z=o}}]);
//# sourceMappingURL=reminder.fe7121cf.js.map