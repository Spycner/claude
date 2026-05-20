"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[14133,27704],{63837:(e,t,r)=>{r.d(t,{Z:()=>l,q:()=>i});var a=r(610435),n=r(692738);class s{all=new Map;subscribers=new Set;set(e,t){this.all.set(e,t),this.notifyChange()}remove(e){this.all.delete(e),this.notifyChange()}subscribe(e){return this.subscribers.add(e),()=>{this.subscribers.delete(e)}}notifyChange(){for(let e of this.subscribers)e(this.all)}}let i=new s,o=n.createContext(null),l=({children:e})=>{let[,t]=(0,n.useState)({}),r=()=>t({});return(0,n.useEffect)(()=>{i.all.size&&r();let e=i.subscribe(()=>{r()});return()=>{e()}},[]),(0,a.FD)(o.Provider,{value:i.all,children:[(0,a.Y)(d,{}),e]})},d=()=>{let e=(()=>{let e=(0,n.useContext)(o);if(!e)throw Error("Must wrap application in ModalProvider");return e})();return(0,a.Y)(a.FK,{children:[...e.entries()].map(([e,t])=>(0,a.Y)(n.Fragment,{children:t},e))})}},176304:(e,t,r)=>{r.d(t,{P0:()=>n,Vw:()=>s});var a=r(441535);function n(){return!!((0,a.W)("alerts_v2",null)??(0,a.W)("databricks.alerts.v2.preview.enabled",!1))}function s(){return n()&&!!((0,a.W)("alertv2_job_task",null)??((0,a.W)("databricks.fe.alerts.enableAlertV2TasksInJobs",!1)&&(0,a.W)("databricks.redashv2.enableAlertV2JobTask",!1)))}},258182:(e,t,r)=>{r.d(t,{Close:()=>y,Description:()=>g,Provider:()=>D,Root:()=>R,Title:()=>L,Viewport:()=>O});var a=r(610435),n=r(956935),s=r(593932),i=r(692738),o=r(79128),l=r(224098),d=r(429608),c=r(497895),u=r(658345),S=r(40894),_=r(705639),p=r(639712),E=r(53333),I=r(123252),T=r(661748),h=r(99206);let m=e=>e.preventDefault(),f=(0,n.i7)({from:{opacity:1},to:{opacity:0}}),A=(0,n.i7)({from:{transform:"translateX(calc(100% + 12px))"},to:{transform:"translateX(0)"}}),b=(0,n.i7)({from:{transform:"translateX(var(--radix-toast-swipe-end-x))"},to:{transform:"translateX(calc(100% + 12px))"}}),R=(0,i.forwardRef)(function({children:e,severity:t="info",componentId:r,analyticsEvents:o=[l.s7.OnView],...d},u){let{theme:R,classNamePrefix:L}=(0,c.wn)(),g=(0,i.useMemo)(()=>o,[o]),y=(0,l.ei)({componentType:l.v_.Notification,componentId:r,componentSubType:l.Ie[t],analyticsEvents:g,shouldStartInteraction:!1}),{elementRef:D}=(0,E.z)({onView:y.onView});return(0,a.Y)(s.bL,{ref:u,role:"listitem",css:(0,n.AH)({"&&":{position:"relative",display:"grid",background:R.colors.backgroundPrimary,padding:12,columnGap:4,boxShadow:R.shadows.lg,borderRadius:(0,h.S)(_.c.POPOVER_BORDER_RADIUS,R.borders.borderRadiusSm),lineHeight:"20px",borderColor:`1px solid ${R.colors.border}`,gridTemplateRows:"[header] auto [content] auto",gridTemplateColumns:"[icon] auto [content] 1fr [close] auto",...(0,p.WO)(R)},[`.${L}-notification-severity-icon`]:{gridRow:"header / content",gridColumn:"icon / icon",display:"inline-flex",alignItems:"center"},[`.${L}-btn`]:{display:"inline-flex",alignItems:"center",justifyContent:"center"},[`.${L}-notification-info-icon`]:{color:R.colors.textSecondary},[`.${L}-notification-success-icon`]:{color:R.colors.textValidationSuccess},[`.${L}-notification-warning-icon`]:{color:R.colors.textValidationWarning},[`.${L}-notification-error-icon`]:{color:R.colors.textValidationDanger},'&&[data-state="open"]':{animation:`${A} 300ms cubic-bezier(0.16, 1, 0.3, 1)`},'&[data-state="closed"]':{animation:`${f} 100ms ease-in`},'&[data-swipe="move"]':{transform:"translateX(var(--radix-toast-swipe-move-x))"},'&[data-swipe="cancel"]':{transform:"translateX(0)",transition:"transform 200ms ease-out"},'&[data-swipe="end"]':{animation:`${b} 100ms ease-out`}}),...d,...(0,I.VG)(),...(0,T.W)("databricks.fe.designsystem.notification.disableSwipeToClose",!1)?{onSwipeMove:m,onSwipeEnd:m}:{},children:(0,a.FD)("span",{role:"status","aria-live":"polite","aria-atomic":"true",style:{display:"contents"},children:[(0,a.Y)(S.z,{className:`${L}-notification-severity-icon ${L}-notification-${t}-icon`,severity:t,ref:D}),e]})})}),L=(0,i.forwardRef)(function({children:e,...t},r){let{theme:i}=(0,c.wn)();return(0,a.Y)(s.hE,{ref:r,css:(0,n.AH)({fontWeight:i.typography.typographyBoldFontWeight,color:i.colors.textPrimary,gridRow:"header / header",gridColumn:"content / content",userSelect:"text"}),...t,children:e})}),g=(0,i.forwardRef)(function({children:e,...t},r){let{theme:i}=(0,c.wn)();return(0,a.Y)(s.VY,{ref:r,css:(0,n.AH)({marginTop:4,color:i.colors.textPrimary,gridRow:"content / content",gridColumn:"content / content",userSelect:"text",wordBreak:"break-word"}),...t,children:e})}),y=(0,i.forwardRef)(function(e,t){let{theme:r}=(0,c.wn)(),{closeLabel:i,componentId:l,analyticsEvents:d,...S}=e;return(0,a.Y)("div",{style:{gridColumn:"close / close",gridRow:"header / content",width:20},children:(0,a.Y)(s.bm,{ref:t,css:(0,n.AH)({color:r.colors.textSecondary,position:"absolute",right:6,top:6}),...S,asChild:!0,children:(0,a.Y)(o.$n,{componentId:l||"codegen_design-system_src_design-system_notification_notification.tsx_224",analyticsEvents:d,icon:(0,a.Y)(u.A,{}),"aria-label":i??S["aria-label"]??"Close notification"})})})}),D=({children:e,...t})=>(0,a.Y)(s.Kq,{...t,children:e}),O=e=>{let{theme:t}=(0,c.wn)();return(0,a.Y)(s.LM,{className:d.Nb,style:{position:"fixed",top:0,right:0,display:"flex",flexDirection:"column",padding:12,gap:12,width:440,listStyle:"none",zIndex:t.options.zIndexBase+100,outline:"none",maxWidth:`calc(100% - ${t.spacing.lg}px)`},...e})}},295244:(e,t,r)=>{r.d(t,{X:()=>en,w:()=>ea});var a=r(883171),n=r(817148),s=r(176304),i=r(986784),o=r(22191),l=r(87221),d=r(774540),c=r(771994),u=r(828140),S=r(837898),_=r(403286),p=r(670943);let E=()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(36993),r.e(67590),r.e(59276),r.e(54511),r.e(159),r.e(20556),r.e(74767),r.e(20806),r.e(47404),r.e(78756),r.e(47589),r.e(30140),r.e(49136),r.e(84227),r.e(99918),r.e(42934),r.e(40249),r.e(11798),r.e(87828),r.e(10740),r.e(19259),r.e(18408),r.e(7222),r.e(59043),r.e(35669)]).then(r.bind(r,885277));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(885277,"./alert/AlertPageWrapper","lazy",e);return e()})(),I={access:n.g3.ALERTS,pageId:_.YW.ALERTS_VIEW,path:_.Qf[_.YW.ALERTS_VIEW],element:(0,d.e)(E),esComponent:o.Es.RedashCore,observability:{productEntityChain:[{productEntityType:l.Lm.ALERT,routeParamId:"alertId"}]}},T={access:n.g3.ALERTS,pageId:_.YW.ALERTS_EDIT,path:_.Qf[_.YW.ALERTS_EDIT],element:(0,d.e)(E),esComponent:o.Es.RedashCore,observability:{productEntityChain:[{productEntityType:l.Lm.ALERT,routeParamId:"alertId"}]}},h={access:n.g3.ALERTS,pageId:_.YW.ALERTS_NEW,path:_.Qf[_.YW.ALERTS_NEW],element:(0,d.e)(E),esComponent:o.Es.RedashCore},m={access:n.g3.ALERTS,pageId:_.YW.ALERTS_LIST,path:_.Qf[_.YW.ALERTS_LIST],element:(0,d.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(59276),r.e(159),r.e(74767),r.e(20806),r.e(47404),r.e(47589),r.e(30140),r.e(42934),r.e(40249),r.e(87828),r.e(19259),r.e(23440),r.e(7222),r.e(82826),r.e(13874)]).then(r.bind(r,463605));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(463605,"./alerts/AlertsPage","lazy",e);return e()})()),esComponent:o.Es.RedashCore},f={access:n.g3.ALERTS,pageId:_.YW.ALERTS_LIST_MY,path:_.Qf[_.YW.ALERTS_LIST_MY],element:(0,d.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(59276),r.e(159),r.e(74767),r.e(20806),r.e(47404),r.e(47589),r.e(30140),r.e(42934),r.e(40249),r.e(87828),r.e(19259),r.e(23440),r.e(7222),r.e(82826),r.e(13874)]).then(r.bind(r,463605));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(463605,"./alerts/AlertsPage","lazy",e);return e()})()),esComponent:o.Es.RedashCore},A={access:n.g3.ALERTS,pageId:_.YW.ALERTS_LIST_ALL,path:_.Qf[_.YW.ALERTS_LIST_ALL],element:(0,d.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(59276),r.e(159),r.e(74767),r.e(20806),r.e(47404),r.e(47589),r.e(30140),r.e(42934),r.e(40249),r.e(87828),r.e(19259),r.e(23440),r.e(7222),r.e(82826),r.e(13874)]).then(r.bind(r,463605));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(463605,"./alerts/AlertsPage","lazy",e);return e()})()),esComponent:o.Es.RedashCore},b={access:n.g3.ALERTS,pageId:_.YW.ALERTS_LIST_ADMIN,path:_.Qf[_.YW.ALERTS_LIST_ADMIN],element:(0,d.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(59276),r.e(159),r.e(74767),r.e(20806),r.e(47404),r.e(47589),r.e(30140),r.e(42934),r.e(40249),r.e(87828),r.e(19259),r.e(23440),r.e(7222),r.e(82826),r.e(13874)]).then(r.bind(r,463605));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(463605,"./alerts/AlertsPage","lazy",e);return e()})()),esComponent:o.Es.RedashCore},R={access:n.g3.ALERTS,pageId:_.YW.ALERTS_V2_LIST_ALL,path:_.Qf[_.YW.ALERTS_V2_LIST_ALL],element:(0,d.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(59276),r.e(159),r.e(74767),r.e(20806),r.e(47404),r.e(47589),r.e(30140),r.e(42934),r.e(40249),r.e(87828),r.e(19259),r.e(23440),r.e(7222),r.e(82826),r.e(13874)]).then(r.bind(r,463605));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(463605,"./alerts/AlertsPage","lazy",e);return e()})()),esComponent:o.Es.RedashCore},L={access:n.g3.ALERTS,pageId:_.YW.ALERTS_V2_LIST_MY,path:_.Qf[_.YW.ALERTS_V2_LIST_MY],element:(0,d.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(59276),r.e(159),r.e(74767),r.e(20806),r.e(47404),r.e(47589),r.e(30140),r.e(42934),r.e(40249),r.e(87828),r.e(19259),r.e(23440),r.e(7222),r.e(82826),r.e(13874)]).then(r.bind(r,463605));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(463605,"./alerts/AlertsPage","lazy",e);return e()})()),esComponent:o.Es.RedashCore},g={access:n.g3.ALERTS,pageId:_.YW.ALERTS_V2_VIEW,path:_.Qf[_.YW.ALERTS_V2_VIEW],element:(0,d.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(36993),r.e(67590),r.e(61951),r.e(29143),r.e(54511),r.e(159),r.e(32828),r.e(40972),r.e(74767),r.e(89263),r.e(4600),r.e(21424),r.e(72287),r.e(99918),r.e(5830),r.e(83750),r.e(92480),r.e(42934),r.e(70510),r.e(68569),r.e(40249),r.e(17293),r.e(87828),r.e(10740),r.e(67464),r.e(26878),r.e(59043),r.e(82826),r.e(40921)]).then(r.bind(r,715257));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(715257,"./alerts-v2/routes/AlertsV2Page","lazy",e);return e()})()),esComponent:o.Es.RedashCore,observability:{productEntityChain:[{productEntityType:l.Lm.ALERT,routeParamId:"alertId"}]}},y={access:n.g3.ALERTS,pageId:_.YW.ALERTS_V2_NEW,path:_.Qf[_.YW.ALERTS_V2_NEW],element:(0,d.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(54497),r.e(36993),r.e(67590),r.e(6932),r.e(18294),r.e(5033),r.e(59276),r.e(99406),r.e(78580),r.e(21234),r.e(44004),r.e(54511),r.e(159),r.e(20556),r.e(95470),r.e(74767),r.e(97421),r.e(20806),r.e(37072),r.e(47404),r.e(60675),r.e(20805),r.e(47589),r.e(17258),r.e(4256),r.e(22249),r.e(63116),r.e(9185),r.e(25556),r.e(62215),r.e(89489),r.e(42797),r.e(49029),r.e(10133),r.e(43927),r.e(18650),r.e(87122),r.e(12674),r.e(4828),r.e(44341),r.e(8089),r.e(70510),r.e(11577),r.e(62707),r.e(96931),r.e(2602),r.e(79547),r.e(84056),r.e(73306),r.e(83537),r.e(50621),r.e(43057),r.e(17456),r.e(79579),r.e(61399),r.e(61149),r.e(89231),r.e(29277),r.e(39943),r.e(94132),r.e(94277),r.e(36257),r.e(67464),r.e(77322),r.e(26878),r.e(49118)]).then(r.bind(r,71874));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(71874,"./alerts-v2/routes/AlertsV2EditCreatePageWrapper","lazy",e);return e()})()),esComponent:o.Es.RedashCore},D={access:n.g3.ALERTS,pageId:_.YW.ALERTS_V2_EDIT,path:_.Qf[_.YW.ALERTS_V2_EDIT],element:(0,d.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(54497),r.e(36993),r.e(67590),r.e(6932),r.e(18294),r.e(5033),r.e(59276),r.e(99406),r.e(78580),r.e(21234),r.e(44004),r.e(54511),r.e(159),r.e(20556),r.e(95470),r.e(74767),r.e(97421),r.e(20806),r.e(37072),r.e(47404),r.e(60675),r.e(20805),r.e(47589),r.e(17258),r.e(4256),r.e(22249),r.e(63116),r.e(9185),r.e(25556),r.e(62215),r.e(89489),r.e(42797),r.e(49029),r.e(10133),r.e(43927),r.e(18650),r.e(87122),r.e(12674),r.e(4828),r.e(44341),r.e(8089),r.e(70510),r.e(11577),r.e(62707),r.e(96931),r.e(2602),r.e(79547),r.e(84056),r.e(73306),r.e(83537),r.e(50621),r.e(43057),r.e(17456),r.e(79579),r.e(61399),r.e(61149),r.e(89231),r.e(29277),r.e(39943),r.e(94132),r.e(94277),r.e(36257),r.e(67464),r.e(77322),r.e(26878),r.e(49118)]).then(r.bind(r,71874));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(71874,"./alerts-v2/routes/AlertsV2EditCreatePageWrapper","lazy",e);return e()})()),esComponent:o.Es.RedashCore,observability:{productEntityChain:[{productEntityType:l.Lm.ALERT,routeParamId:"alertId"}]}},O={access:n.g3.ALERTS,pageId:_.YW.ALERTS_V2_EVALUATION_DETAILS,path:_.Qf[_.YW.ALERTS_V2_EVALUATION_DETAILS],element:(0,d.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(54497),r.e(36993),r.e(67590),r.e(6932),r.e(18294),r.e(1291),r.e(59276),r.e(99406),r.e(21234),r.e(1990),r.e(44004),r.e(78632),r.e(39676),r.e(31813),r.e(51362),r.e(26881),r.e(54511),r.e(159),r.e(74767),r.e(97421),r.e(20806),r.e(37072),r.e(47404),r.e(60675),r.e(47589),r.e(17258),r.e(4256),r.e(22249),r.e(63116),r.e(62215),r.e(62477),r.e(21424),r.e(68775),r.e(11022),r.e(43927),r.e(18650),r.e(87122),r.e(12674),r.e(4828),r.e(90489),r.e(64666),r.e(30259),r.e(13962),r.e(22831),r.e(80086),r.e(51818),r.e(87385),r.e(58415),r.e(79637),r.e(62762),r.e(48898),r.e(84056),r.e(73306),r.e(43057),r.e(79579),r.e(61149),r.e(89231),r.e(29277),r.e(39943),r.e(94132),r.e(94277),r.e(36257),r.e(17902),r.e(28157)]).then(r.bind(r,855979));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(855979,"./alerts-v2/routes/AlertsV2EvaluationDetailsPage","lazy",e);return e()})()),esComponent:o.Es.RedashCore,observability:{productEntityChain:[{productEntityType:l.Lm.ALERT,routeParamId:"alertId"}]}},q={access:n.g3.DASHBOARDS,pageId:_.YW.DASHBOARDS_LIST_DEFAULT,path:_.Qf[_.YW.DASHBOARDS_LIST_DEFAULT],element:(0,d.e)(()=>(0,i.i)()&&(0,u.H)()?(()=>{let e=()=>Promise.all([r.e(62280),r.e(54497),r.e(33764),r.e(78277),r.e(36993),r.e(67590),r.e(6932),r.e(18294),r.e(59276),r.e(55616),r.e(37797),r.e(44004),r.e(54511),r.e(159),r.e(32828),r.e(20556),r.e(40972),r.e(92922),r.e(74767),r.e(97421),r.e(78756),r.e(11136),r.e(64898),r.e(81318),r.e(47589),r.e(70419),r.e(46184),r.e(14243),r.e(47017),r.e(24436),r.e(84221),r.e(44341),r.e(83750),r.e(92480),r.e(47323),r.e(92792),r.e(63121),r.e(79832),r.e(71046),r.e(71713),r.e(36176),r.e(46822),r.e(36921),r.e(70510),r.e(37140),r.e(82031),r.e(42272),r.e(13915),r.e(4340),r.e(81166),r.e(26895),r.e(40290),r.e(76654),r.e(62508),r.e(25742),r.e(34768),r.e(92677),r.e(17497),r.e(52659),r.e(95956),r.e(48951),r.e(23820)]).then(r.bind(r,142807));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(142807,"./dashboards/DashboardsListUnifiedRoute","lazy",e);return e()})():(()=>{let e=()=>Promise.all([r.e(62280),r.e(54497),r.e(33764),r.e(78277),r.e(36993),r.e(67590),r.e(6932),r.e(5033),r.e(59276),r.e(78580),r.e(55616),r.e(44004),r.e(54511),r.e(159),r.e(32828),r.e(20556),r.e(40972),r.e(92922),r.e(74767),r.e(97421),r.e(20806),r.e(47404),r.e(78756),r.e(11136),r.e(64898),r.e(81318),r.e(47589),r.e(70419),r.e(46184),r.e(14243),r.e(24436),r.e(78565),r.e(42797),r.e(49029),r.e(10133),r.e(83750),r.e(92480),r.e(47323),r.e(92792),r.e(63121),r.e(79832),r.e(71046),r.e(71713),r.e(36176),r.e(46822),r.e(36921),r.e(70510),r.e(11577),r.e(37140),r.e(62707),r.e(96931),r.e(82031),r.e(42272),r.e(13915),r.e(4340),r.e(19259),r.e(34768),r.e(23440),r.e(46596),r.e(17497),r.e(26861),r.e(95956),r.e(45657),r.e(36638)]).then(r.bind(r,561750));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(561750,"./dashboards/DashboardsListRoute","lazy",e);return e()})()),esComponent:o.Es.Lakeview,prefetchQueries:(0,S._p)({lockedSearchTypeGroup:c.An.DASHBOARD})},W={access:n.g3.DASHBOARDS,pageId:_.YW.DASHBOARDS_VIEW_EDIT,path:_.Qf[_.YW.DASHBOARDS_VIEW_EDIT],element:(0,d.e)(()=>(()=>{let e=()=>r.e(16775).then(r.bind(r,916775));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(916775,"./dashboards/LegacyDashboardRedirectRoute","lazy",e);return e()})()),esComponent:o.Es.Lakeview},k={access:n.g3.DASHBOARDS_CREATE,pageId:_.YW.DASHBOARDS_SAMPLE_DASHBOARDS,path:_.Qf[_.YW.DASHBOARDS_SAMPLE_DASHBOARDS],element:(0,d.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(67590),r.e(5033),r.e(78580),r.e(54511),r.e(46184),r.e(49136),r.e(56982),r.e(42797),r.e(49029),r.e(10133),r.e(99918),r.e(5830),r.e(3341),r.e(73208),r.e(42934),r.e(70510),r.e(11577),r.e(62707),r.e(96931),r.e(49934),r.e(25230),r.e(2118),r.e(40249),r.e(11798),r.e(46596),r.e(54665)]).then(r.bind(r,160353));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(160353,"./dashboards/DashboardsSampleDashboardsRoute","lazy",e);return e()})()),esComponent:o.Es.Lakeview},M={pageId:_.YW.DESTINATIONS_LIST,path:_.Qf[_.YW.DESTINATIONS_LIST],element:(0,d.e)(()=>(()=>{let e=()=>r.e(21619).then(r.bind(r,821619));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(821619,"./destinations/DestinationsRedirectRoute","lazy",e);return e()})()),esComponent:o.Es.RedashCore},C={pageId:_.YW.DESTINATIONS_NEW,path:_.Qf[_.YW.DESTINATIONS_NEW],element:(0,d.e)(()=>(()=>{let e=()=>r.e(21619).then(r.bind(r,821619));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(821619,"./destinations/DestinationsRedirectRoute","lazy",e);return e()})()),esComponent:o.Es.RedashCore},U={pageId:_.YW.DESTINATIONS_EDIT,path:_.Qf[_.YW.DESTINATIONS_EDIT],element:(0,d.e)(()=>(()=>{let e=()=>r.e(21619).then(r.bind(r,821619));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(821619,"./destinations/DestinationsRedirectRoute","lazy",e);return e()})()),esComponent:o.Es.RedashCore},Y={pageId:_.YW.QUERIES_LIST,path:_.Qf[_.YW.QUERIES_LIST],element:(0,d.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(20806),r.e(47404),r.e(30140),r.e(42934),r.e(40249),r.e(19259),r.e(23440),r.e(89572)]).then(r.bind(r,109239));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(109239,"./queries-list/QueriesPage","lazy",e);return e()})()),esComponent:o.Es.RedashCore},v={pageId:_.YW.QUERIES_LIST_MY,path:_.Qf[_.YW.QUERIES_LIST_MY],element:(0,d.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(20806),r.e(47404),r.e(30140),r.e(42934),r.e(40249),r.e(19259),r.e(23440),r.e(89572)]).then(r.bind(r,109239));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(109239,"./queries-list/QueriesPage","lazy",e);return e()})()),esComponent:o.Es.RedashCore},N={pageId:_.YW.QUERIES_LIST_ALL,path:_.Qf[_.YW.QUERIES_LIST_ALL],element:(0,d.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(20806),r.e(47404),r.e(30140),r.e(42934),r.e(40249),r.e(19259),r.e(23440),r.e(89572)]).then(r.bind(r,109239));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(109239,"./queries-list/QueriesPage","lazy",e);return e()})()),esComponent:o.Es.RedashCore},P={pageId:_.YW.QUERIES_LIST_ADMIN,path:_.Qf[_.YW.QUERIES_LIST_ADMIN],element:(0,d.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(20806),r.e(47404),r.e(30140),r.e(42934),r.e(40249),r.e(19259),r.e(23440),r.e(89572)]).then(r.bind(r,109239));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(109239,"./queries-list/QueriesPage","lazy",e);return e()})()),esComponent:o.Es.RedashCore},w={pageId:_.YW.QUERIES_LIST_FAVORITES,path:_.Qf[_.YW.QUERIES_LIST_FAVORITES],element:(0,d.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(20806),r.e(47404),r.e(30140),r.e(42934),r.e(40249),r.e(19259),r.e(23440),r.e(89572)]).then(r.bind(r,109239));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(109239,"./queries-list/QueriesPage","lazy",e);return e()})()),esComponent:o.Es.RedashCore},Q={pageId:_.YW.EDITOR_NEW,path:_.Qf[_.YW.EDITOR_NEW],element:(0,d.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(54497),r.e(33764),r.e(78277),r.e(36993),r.e(67590),r.e(6932),r.e(18294),r.e(5033),r.e(1291),r.e(59276),r.e(99406),r.e(78580),r.e(55616),r.e(11184),r.e(1990),r.e(44004),r.e(78632),r.e(52426),r.e(39676),r.e(31813),r.e(22886),r.e(54511),r.e(159),r.e(86412),r.e(32828),r.e(20556),r.e(40972),r.e(92922),r.e(95470),r.e(97421),r.e(20806),r.e(37072),r.e(47404),r.e(60675),r.e(78756),r.e(11136),r.e(64898),r.e(20805),r.e(81318),r.e(70419),r.e(46184),r.e(14243),r.e(4256),r.e(22249),r.e(63116),r.e(29488),r.e(24325),r.e(62215),r.e(24436),r.e(39373),r.e(42797),r.e(68775),r.e(11022),r.e(49029),r.e(10133),r.e(43927),r.e(18650),r.e(87122),r.e(12674),r.e(4828),r.e(84283),r.e(44341),r.e(43587),r.e(8089),r.e(23197),r.e(62621),r.e(19604),r.e(13962),r.e(22831),r.e(87385),r.e(17292),r.e(54894),r.e(79331),r.e(83750),r.e(92480),r.e(47323),r.e(92792),r.e(63121),r.e(79832),r.e(71046),r.e(71713),r.e(36176),r.e(46822),r.e(36921),r.e(62762),r.e(70510),r.e(11577),r.e(37140),r.e(62707),r.e(96931),r.e(82031),r.e(42272),r.e(13915),r.e(4340),r.e(2602),r.e(79547),r.e(84056),r.e(73306),r.e(83537),r.e(50621),r.e(43057),r.e(17456),r.e(79579),r.e(57512),r.e(80060),r.e(61399),r.e(65620),r.e(38544),r.e(61149),r.e(89231),r.e(29277),r.e(39943),r.e(94132),r.e(19259),r.e(94277),r.e(23440),r.e(17497),r.e(67464),r.e(77322),r.e(18408),r.e(90664)]).then(r.bind(r,966971));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(966971,"./sql-editor/EditorPageSelector","lazy",e);return e()})()),esComponent:o.Es.QueryEditor},$={pageId:_.YW.EDITOR_ROOT,path:_.Qf[_.YW.EDITOR_ROOT],element:(0,d.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(54497),r.e(33764),r.e(78277),r.e(36993),r.e(67590),r.e(6932),r.e(18294),r.e(5033),r.e(1291),r.e(59276),r.e(99406),r.e(78580),r.e(55616),r.e(11184),r.e(1990),r.e(44004),r.e(78632),r.e(52426),r.e(39676),r.e(31813),r.e(22886),r.e(54511),r.e(159),r.e(86412),r.e(32828),r.e(20556),r.e(40972),r.e(92922),r.e(95470),r.e(97421),r.e(20806),r.e(37072),r.e(47404),r.e(60675),r.e(78756),r.e(11136),r.e(64898),r.e(20805),r.e(81318),r.e(70419),r.e(46184),r.e(14243),r.e(4256),r.e(22249),r.e(63116),r.e(29488),r.e(24325),r.e(62215),r.e(24436),r.e(39373),r.e(42797),r.e(68775),r.e(11022),r.e(49029),r.e(10133),r.e(43927),r.e(18650),r.e(87122),r.e(12674),r.e(4828),r.e(84283),r.e(44341),r.e(43587),r.e(8089),r.e(23197),r.e(62621),r.e(19604),r.e(13962),r.e(22831),r.e(87385),r.e(17292),r.e(54894),r.e(79331),r.e(83750),r.e(92480),r.e(47323),r.e(92792),r.e(63121),r.e(79832),r.e(71046),r.e(71713),r.e(36176),r.e(46822),r.e(36921),r.e(62762),r.e(70510),r.e(11577),r.e(37140),r.e(62707),r.e(96931),r.e(82031),r.e(42272),r.e(13915),r.e(4340),r.e(2602),r.e(79547),r.e(84056),r.e(73306),r.e(83537),r.e(50621),r.e(43057),r.e(17456),r.e(79579),r.e(57512),r.e(80060),r.e(61399),r.e(65620),r.e(38544),r.e(61149),r.e(89231),r.e(29277),r.e(39943),r.e(94132),r.e(19259),r.e(94277),r.e(23440),r.e(17497),r.e(67464),r.e(77322),r.e(18408),r.e(90664)]).then(r.bind(r,966971));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(966971,"./sql-editor/EditorPageSelector","lazy",e);return e()})()),esComponent:o.Es.QueryEditor},V={pageId:_.YW.EDITOR_SET_TAB,path:_.Qf[_.YW.EDITOR_SET_TAB],element:(0,d.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(54497),r.e(33764),r.e(78277),r.e(36993),r.e(67590),r.e(6932),r.e(18294),r.e(5033),r.e(1291),r.e(59276),r.e(99406),r.e(78580),r.e(55616),r.e(11184),r.e(1990),r.e(44004),r.e(78632),r.e(52426),r.e(39676),r.e(31813),r.e(22886),r.e(54511),r.e(159),r.e(86412),r.e(32828),r.e(20556),r.e(40972),r.e(92922),r.e(95470),r.e(97421),r.e(20806),r.e(37072),r.e(47404),r.e(60675),r.e(78756),r.e(11136),r.e(64898),r.e(20805),r.e(81318),r.e(70419),r.e(46184),r.e(14243),r.e(4256),r.e(22249),r.e(63116),r.e(29488),r.e(24325),r.e(62215),r.e(24436),r.e(39373),r.e(42797),r.e(68775),r.e(11022),r.e(49029),r.e(10133),r.e(43927),r.e(18650),r.e(87122),r.e(12674),r.e(4828),r.e(84283),r.e(44341),r.e(43587),r.e(8089),r.e(23197),r.e(62621),r.e(19604),r.e(13962),r.e(22831),r.e(87385),r.e(17292),r.e(54894),r.e(79331),r.e(83750),r.e(92480),r.e(47323),r.e(92792),r.e(63121),r.e(79832),r.e(71046),r.e(71713),r.e(36176),r.e(46822),r.e(36921),r.e(62762),r.e(70510),r.e(11577),r.e(37140),r.e(62707),r.e(96931),r.e(82031),r.e(42272),r.e(13915),r.e(4340),r.e(2602),r.e(79547),r.e(84056),r.e(73306),r.e(83537),r.e(50621),r.e(43057),r.e(17456),r.e(79579),r.e(57512),r.e(80060),r.e(61399),r.e(65620),r.e(38544),r.e(61149),r.e(89231),r.e(29277),r.e(39943),r.e(94132),r.e(19259),r.e(94277),r.e(23440),r.e(17497),r.e(67464),r.e(77322),r.e(18408),r.e(90664)]).then(r.bind(r,966971));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(966971,"./sql-editor/EditorPageSelector","lazy",e);return e()})()),esComponent:o.Es.QueryEditor,observability:{productEntityChain:[{productEntityType:l.Lm.QUERY,routeParamId:"queryId"}]}},F={pageId:_.YW.LEGACY_EDITOR_QUERY,path:_.Qf[_.YW.LEGACY_EDITOR_QUERY],element:(0,d.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(54497),r.e(33764),r.e(78277),r.e(36993),r.e(67590),r.e(6932),r.e(18294),r.e(5033),r.e(1291),r.e(59276),r.e(99406),r.e(78580),r.e(55616),r.e(11184),r.e(1990),r.e(44004),r.e(78632),r.e(52426),r.e(39676),r.e(31813),r.e(22886),r.e(54511),r.e(159),r.e(86412),r.e(32828),r.e(20556),r.e(40972),r.e(92922),r.e(95470),r.e(97421),r.e(20806),r.e(37072),r.e(47404),r.e(60675),r.e(78756),r.e(11136),r.e(64898),r.e(20805),r.e(81318),r.e(70419),r.e(46184),r.e(14243),r.e(4256),r.e(22249),r.e(63116),r.e(29488),r.e(24325),r.e(62215),r.e(24436),r.e(39373),r.e(42797),r.e(68775),r.e(11022),r.e(49029),r.e(10133),r.e(43927),r.e(18650),r.e(87122),r.e(12674),r.e(4828),r.e(84283),r.e(44341),r.e(43587),r.e(8089),r.e(23197),r.e(62621),r.e(19604),r.e(13962),r.e(22831),r.e(87385),r.e(17292),r.e(54894),r.e(79331),r.e(83750),r.e(92480),r.e(47323),r.e(92792),r.e(63121),r.e(79832),r.e(71046),r.e(71713),r.e(36176),r.e(46822),r.e(36921),r.e(62762),r.e(70510),r.e(11577),r.e(37140),r.e(62707),r.e(96931),r.e(82031),r.e(42272),r.e(13915),r.e(4340),r.e(2602),r.e(79547),r.e(84056),r.e(73306),r.e(83537),r.e(50621),r.e(43057),r.e(17456),r.e(79579),r.e(57512),r.e(80060),r.e(61399),r.e(65620),r.e(38544),r.e(61149),r.e(89231),r.e(29277),r.e(39943),r.e(94132),r.e(19259),r.e(94277),r.e(23440),r.e(17497),r.e(67464),r.e(77322),r.e(18408),r.e(90664)]).then(r.bind(r,966971));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(966971,"./sql-editor/EditorPageSelector","lazy",e);return e()})()),esComponent:o.Es.QueryEditor},H={pageId:_.YW.LEGACY_EDITOR_SOURCE,path:_.Qf[_.YW.LEGACY_EDITOR_SOURCE],element:(0,d.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(54497),r.e(33764),r.e(78277),r.e(36993),r.e(67590),r.e(6932),r.e(18294),r.e(5033),r.e(1291),r.e(59276),r.e(99406),r.e(78580),r.e(55616),r.e(11184),r.e(1990),r.e(44004),r.e(78632),r.e(52426),r.e(39676),r.e(31813),r.e(22886),r.e(54511),r.e(159),r.e(86412),r.e(32828),r.e(20556),r.e(40972),r.e(92922),r.e(95470),r.e(97421),r.e(20806),r.e(37072),r.e(47404),r.e(60675),r.e(78756),r.e(11136),r.e(64898),r.e(20805),r.e(81318),r.e(70419),r.e(46184),r.e(14243),r.e(4256),r.e(22249),r.e(63116),r.e(29488),r.e(24325),r.e(62215),r.e(24436),r.e(39373),r.e(42797),r.e(68775),r.e(11022),r.e(49029),r.e(10133),r.e(43927),r.e(18650),r.e(87122),r.e(12674),r.e(4828),r.e(84283),r.e(44341),r.e(43587),r.e(8089),r.e(23197),r.e(62621),r.e(19604),r.e(13962),r.e(22831),r.e(87385),r.e(17292),r.e(54894),r.e(79331),r.e(83750),r.e(92480),r.e(47323),r.e(92792),r.e(63121),r.e(79832),r.e(71046),r.e(71713),r.e(36176),r.e(46822),r.e(36921),r.e(62762),r.e(70510),r.e(11577),r.e(37140),r.e(62707),r.e(96931),r.e(82031),r.e(42272),r.e(13915),r.e(4340),r.e(2602),r.e(79547),r.e(84056),r.e(73306),r.e(83537),r.e(50621),r.e(43057),r.e(17456),r.e(79579),r.e(57512),r.e(80060),r.e(61399),r.e(65620),r.e(38544),r.e(61149),r.e(89231),r.e(29277),r.e(39943),r.e(94132),r.e(19259),r.e(94277),r.e(23440),r.e(17497),r.e(67464),r.e(77322),r.e(18408),r.e(90664)]).then(r.bind(r,966971));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(966971,"./sql-editor/EditorPageSelector","lazy",e);return e()})()),esComponent:o.Es.QueryEditor},x={pageId:_.YW.LAKEHOUSES_EDIT,path:_.Qf[_.YW.LAKEHOUSES_EDIT],element:(0,d.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(36993),r.e(67590),r.e(54511),r.e(159),r.e(74767),r.e(14174),r.e(99918),r.e(5830),r.e(30908),r.e(40249),r.e(11798),r.e(87828),r.e(57958),r.e(61149),r.e(21410),r.e(10458),r.e(70297),r.e(79382)]).then(r.bind(r,566779));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(566779,"../extensions/edge/lakehouse/pages/LakehouseEdit/LakehouseEdit","lazy",e);return e()})()),esComponent:o.Es.WarehouseUI},B={pageId:_.YW.LAKEHOUSES_VIEW,path:_.Qf[_.YW.LAKEHOUSES_VIEW],element:(0,d.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(54497),r.e(33764),r.e(78277),r.e(36993),r.e(67590),r.e(6932),r.e(18294),r.e(59276),r.e(99406),r.e(55616),r.e(44004),r.e(54511),r.e(159),r.e(32828),r.e(40972),r.e(92922),r.e(74767),r.e(97421),r.e(20806),r.e(37072),r.e(47404),r.e(60675),r.e(11136),r.e(64898),r.e(81318),r.e(47589),r.e(86107),r.e(4256),r.e(63116),r.e(62215),r.e(59299),r.e(42797),r.e(49029),r.e(10133),r.e(43927),r.e(18650),r.e(87122),r.e(12674),r.e(4828),r.e(83750),r.e(92480),r.e(47323),r.e(92792),r.e(63121),r.e(79832),r.e(71046),r.e(71713),r.e(36176),r.e(46822),r.e(37140),r.e(30908),r.e(13915),r.e(4340),r.e(79579),r.e(6870),r.e(61149),r.e(21410),r.e(89231),r.e(29277),r.e(39943),r.e(94132),r.e(70297),r.e(25125),r.e(64244)]).then(r.bind(r,106153));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(106153,"../extensions/edge/lakehouse/pages/LakehouseView/LakehouseView","lazy",e);return e()})()),esComponent:o.Es.WarehouseUI},z={pageId:_.YW.LAKEHOUSES_VIEW_TAB,path:_.Qf[_.YW.LAKEHOUSES_VIEW_TAB],element:(0,d.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(54497),r.e(33764),r.e(78277),r.e(36993),r.e(67590),r.e(6932),r.e(18294),r.e(59276),r.e(99406),r.e(55616),r.e(44004),r.e(54511),r.e(159),r.e(32828),r.e(40972),r.e(92922),r.e(74767),r.e(97421),r.e(20806),r.e(37072),r.e(47404),r.e(60675),r.e(11136),r.e(64898),r.e(81318),r.e(47589),r.e(86107),r.e(4256),r.e(63116),r.e(62215),r.e(59299),r.e(42797),r.e(49029),r.e(10133),r.e(43927),r.e(18650),r.e(87122),r.e(12674),r.e(4828),r.e(83750),r.e(92480),r.e(47323),r.e(92792),r.e(63121),r.e(79832),r.e(71046),r.e(71713),r.e(36176),r.e(46822),r.e(37140),r.e(30908),r.e(13915),r.e(4340),r.e(79579),r.e(6870),r.e(61149),r.e(21410),r.e(89231),r.e(29277),r.e(39943),r.e(94132),r.e(70297),r.e(25125),r.e(64244)]).then(r.bind(r,106153));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(106153,"../extensions/edge/lakehouse/pages/LakehouseView/LakehouseView","lazy",e);return e()})()),esComponent:o.Es.WarehouseUI},G={pageId:_.YW.LAKEHOUSES_LIST,path:_.Qf[_.YW.LAKEHOUSES_LIST],element:(0,d.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(67590),r.e(54511),r.e(159),r.e(74767),r.e(99918),r.e(5830),r.e(30908),r.e(40249),r.e(11798),r.e(87828),r.e(57958),r.e(61149),r.e(21410),r.e(10458),r.e(70297),r.e(33470),r.e(96712)]).then(r.bind(r,594150));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(594150,"../extensions/edge/lakehouse/pages/LakehousesList","lazy",e);return e()})()),esComponent:o.Es.WarehouseUI},K={pageId:_.YW.LAKEHOUSES_NEW,path:_.Qf[_.YW.LAKEHOUSES_NEW],element:(0,d.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(67590),r.e(54511),r.e(159),r.e(74767),r.e(99918),r.e(5830),r.e(30908),r.e(40249),r.e(11798),r.e(87828),r.e(57958),r.e(61149),r.e(21410),r.e(10458),r.e(70297),r.e(33470),r.e(96712)]).then(r.bind(r,594150));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(594150,"../extensions/edge/lakehouse/pages/LakehousesList","lazy",e);return e()})()),esComponent:o.Es.WarehouseUI},J={pageId:_.YW.LAKEHOUSE_SETTINGS,path:_.Qf[_.YW.LAKEHOUSE_SETTINGS],element:(0,d.e)(()=>(()=>{let e=()=>r.e(1434).then(r.bind(r,201434));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(201434,"../extensions/edge/lakehouse/pages/Settings","lazy",e);return e()})()),esComponent:o.Es.WarehouseUI},X={pageId:_.YW.PAT_SETTINGS,path:_.Qf[_.YW.PAT_SETTINGS],element:(0,d.e)(()=>(()=>{let e=()=>r.e(94130).then(r.bind(r,494130));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(494130,"./personal-access-tokens/PersonalAccessTokens","lazy",e);return e()})()),esComponent:o.Es.RedashCore},j={pageId:_.YW.QUERY_SNIPPETS,path:"/sql/query-snippets",element:(0,d.e)(()=>(()=>{let e=()=>Promise.resolve().then(r.bind(r,883171));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(883171,"./query-snippets/QuerySnippets","eager",e);return e()})()),esComponent:o.Es.RedashCore},Z={pageId:_.YW.SQL_SETTINGS_EDGE,path:_.Qf[_.YW.SQL_SETTINGS_EDGE],element:(0,d.e)(()=>(()=>{let e=()=>r.e(70946).then(r.bind(r,270946));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(270946,"./settings/GeneralSettings","lazy",e);return e()})()),esComponent:o.Es.RedashCore},ee={pageId:_.YW.USER_ACCOUNT_SETTINGS,path:_.Qf[_.YW.USER_ACCOUNT_SETTINGS],element:(0,d.e)(()=>(()=>{let e=()=>r.e(11988).then(r.bind(r,211988));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(211988,"./user-account/Account","lazy",e);return e()})()),esComponent:o.Es.RedashCore},et={pageId:_.YW.SQL_SETTINGS_FLAGS,path:_.Qf[_.YW.SQL_SETTINGS_FLAGS],element:(0,d.e)(()=>(()=>{let e=()=>r.e(72526).then(r.bind(r,72526));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(72526,"./settings/Flags","lazy",e);return e()})()),esComponent:o.Es.DbsqlUi},er={pageId:_.YW.SQL_SETTINGS_FLAG_PREVIEW,path:_.Qf[_.YW.SQL_SETTINGS_FLAG_PREVIEW],element:(0,d.e)(()=>(()=>{let e=()=>r.e(72526).then(r.bind(r,72526));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(72526,"./settings/Flags","lazy",e);return e()})()),esComponent:o.Es.DbsqlUi},ea=[R,L];function en(){let e=(0,i.i)();return[I,T,h,m,f,A,b,...(0,s.P0)()?[y,g,D,...(0,p.zp)()?[O]:[],...ea]:[],...e?[q,k,W]:[],M,C,U,er,et,x,G,K,J,B,z,X,Y,v,N,P,w,...(0,a.isQuerySnippetsEnabled)()?[j]:[],Z,ee,Q,$,V,F,H]}},374821:(e,t,r)=>{r.d(t,{A:()=>s});var a=r(441535),n=r(707076);function s(){return(0,n.Kt)()&&(0,a.W)("databricks.fe.search.unifiedListPageEnabledGenieSpaces",!1)}},403286:(e,t,r)=>{r.d(t,{CN:()=>i,Qf:()=>u,R6:()=>o,VZ:()=>s,YW:()=>c,eE:()=>n,x6:()=>l,yO:()=>a});let a={ALERTS_LIST:"dbsql.alerts_list.index",ALERTS_LIST_ALL:"dbsql.alerts_list.all",ALERTS_LIST_MY:"dbsql.alerts_list.my",ALERTS_LIST_ADMIN:"dbsql.alerts_list.admin"},n={ALERTS_NEW:"dbsql.alerts.new",ALERTS_VIEW:"dbsql.alerts.view",ALERTS_EDIT:"dbsql.alerts.edit"},s={ALERTS_V2_LIST_ALL:"dbsql.alerts_v2_list.all",ALERTS_V2_LIST_FAVORITES:"dbsql.alerts_v2_list.favorites",ALERTS_V2_LIST_MY:"dbsql.alerts_v2_list.my"},i={EDITOR_NEW:"dbsql.editor.new",EDITOR_ROOT:"dbsql.editor.index",EDITOR_SET_TAB:"dbsql.editor.query"},o={LEGACY_EDITOR_QUERY:"dbsql.editor_legacy.redirect.query",LEGACY_EDITOR_SOURCE:"dbsql.editor_legacy.redirect.source"},l={QUERIES_LIST:"dbsql.queries_list.index",QUERIES_LIST_ALL:"dbsql.queries_list.all",QUERIES_LIST_MY:"dbsql.queries_list.my",QUERIES_LIST_ADMIN:"dbsql.queries_list.admin",QUERIES_LIST_FAVORITES:"dbsql.queries_list.favorites"},d={...o,DATA_SOURCES_LIST:"dbsql.data_sources_list.index",DATA_SOURCES_NEW:"dbsql.data_sources_list.new",DATA_SOURCES_EDIT:"dbsql.data_sources.edit",DESTINATIONS_LIST:"dbsql.destinations_list.redirect.index",DESTINATIONS_NEW:"dbsql.destinations_list.redirect.new",DESTINATIONS_EDIT:"dbsql.destinations.redirect.edit",PAT_SETTINGS:"dbsql.settings.pat_list.redirect",SQL_SETTINGS_EDGE:"dbsql.settings.edge_general_settings.redirect",USER_ACCOUNT_SETTINGS:"dbsql.settings.user_account.redirect"},c={LAKEHOUSE_SETTINGS:"dbsql.warehouses.mfe_settings",QUERY_SNIPPETS:"dbsql.query_snippets",...a,...n,...s,ALERTS_V2_NEW:"dbsql.alerts_v2.new",ALERTS_V2_VIEW:"dbsql.alerts_v2.view",ALERTS_V2_EDIT:"dbsql.alerts_v2.edit",ALERTS_V2_EVALUATION_DETAILS:"dbsql.alerts_v2.evaluation_details",...i,LAKEHOUSES_LIST:"dbsql.warehouses_list.index",LAKEHOUSES_NEW:"dbsql.warehouses_list.new",LAKEHOUSES_EDIT:"dbsql.warehouses.edit",LAKEHOUSES_VIEW:"dbsql.warehouses.view.index",LAKEHOUSES_VIEW_TAB:"dbsql.warehouses.view.tab",...l,...d,SQL_SETTINGS_FLAGS:"dbsql.dev_settings.flags.all",SQL_SETTINGS_FLAG_PREVIEW:"dbsql.dev_settings.flags.single",DASHBOARDS_LIST_DEFAULT:"dbsql.dashboards.list",DASHBOARDS_LIST_ALL:"dbsql.dashboards.all",DASHBOARDS_LIST_FAVORITES:"dbsql.dashboards.favorites",DASHBOARDS_LIST_MY:"dbsql.dashboards.my",DASHBOARDS_LIST_ADMIN:"dbsql.dashboards.admin",DASHBOARDS_NEW:"dbsql.dashboards.new",DASHBOARDS_VIEW_EDIT:"dbsql.dashboards.view_edit",DASHBOARDS_SAMPLE_DASHBOARDS:"dbsql.dashboards.samples",UNSUBSCRIBE:"dbsql.subscriptions.unsubscribe"},u={[c.ALERTS_LIST]:"/sql/alerts",[c.ALERTS_LIST_ALL]:"/sql/alerts/all",[c.ALERTS_LIST_MY]:"/sql/alerts/my",[c.ALERTS_LIST_ADMIN]:"/sql/alerts/admin",[c.ALERTS_NEW]:"/sql/alerts/new",[c.ALERTS_VIEW]:"/sql/alerts/:alertId",[c.ALERTS_EDIT]:"/sql/alerts/:alertId/edit",[c.ALERTS_V2_LIST_ALL]:"/sql/alerts-v2/all",[c.ALERTS_V2_LIST_FAVORITES]:"/sql/alerts-v2/all?view=favorites",[c.ALERTS_V2_LIST_MY]:"/sql/alerts-v2",[c.ALERTS_V2_NEW]:"/sql/alerts-v2/new",[c.ALERTS_V2_VIEW]:"/sql/alerts-v2/:alertId",[c.ALERTS_V2_EDIT]:"/sql/alerts-v2/:alertId/edit",[c.ALERTS_V2_EVALUATION_DETAILS]:"/sql/alerts-v2/:alertId/evaluations/:taskRunId",[c.DASHBOARDS_VIEW_EDIT]:"/sql/dashboards/:dashboardId",[c.DASHBOARDS_LIST_DEFAULT]:"/sql/dashboards",[c.DASHBOARDS_LIST_ALL]:"/sql/dashboards/all",[c.DASHBOARDS_LIST_FAVORITES]:"/sql/dashboards/favorites",[c.DASHBOARDS_LIST_MY]:"/sql/dashboards/my",[c.DASHBOARDS_LIST_ADMIN]:"/sql/dashboards/admin",[c.DASHBOARDS_NEW]:"/sql/dashboards/new",[c.DASHBOARDS_SAMPLE_DASHBOARDS]:"/sql/dashboards/samples",[c.DATA_SOURCES_LIST]:"/sql/data_sources",[c.DATA_SOURCES_NEW]:"/sql/data_sources/new",[c.DATA_SOURCES_EDIT]:"/sql/data_sources/:dataSourceId",[c.DESTINATIONS_LIST]:"/sql/destinations",[c.DESTINATIONS_NEW]:"/sql/destinations/new",[c.DESTINATIONS_EDIT]:"/sql/destinations/:destinationId",[c.EDITOR_NEW]:"/sql/editor/new",[c.EDITOR_ROOT]:"/sql/editor",[c.EDITOR_SET_TAB]:"/sql/editor/:queryId",[c.LAKEHOUSE_SETTINGS]:"/sql/settings/warehouses",[c.LAKEHOUSES_EDIT]:"/sql/warehouses/:id/edit",[c.LAKEHOUSES_LIST]:"/sql/warehouses",[c.LAKEHOUSES_NEW]:"/sql/warehouses/new",[c.LAKEHOUSES_VIEW]:"/sql/warehouses/:id",[c.LAKEHOUSES_VIEW_TAB]:"/sql/warehouses/:id/:tab",[c.LEGACY_EDITOR_QUERY]:"/sql/queries/:queryId",[c.LEGACY_EDITOR_SOURCE]:"/sql/queries/:queryId/source",[c.PAT_SETTINGS]:"/sql/personal_access_tokens",[c.SQL_SETTINGS_EDGE]:"/sql/settings/general",[c.SQL_SETTINGS_FLAGS]:"/sql/settings/flags",[c.SQL_SETTINGS_FLAG_PREVIEW]:"/sql/settings/preview",[c.QUERIES_LIST]:"/sql/queries",[c.QUERIES_LIST_ALL]:"/sql/queries/all",[c.QUERIES_LIST_MY]:"/sql/queries/my",[c.QUERIES_LIST_ADMIN]:"/sql/queries/admin",[c.QUERIES_LIST_FAVORITES]:"/sql/queries/favorites",[c.QUERY_SNIPPETS]:"/sql/query-snippets",[c.USER_ACCOUNT_SETTINGS]:"/sql/account",[c.UNSUBSCRIBE]:"/sql/unsubscribe/:subscriptionId"}},646216:(e,t,r)=>{var a=r(610435),n=r(322435),s=r(500710),i=r.n(s),o=r(63837);["info","success","error","warn","warning","confirm"].forEach(e=>{n.A[e]=t=>{let r=i()(),{onCancel:s,onOk:l,content:d,...c}=t,u={onOk:(...e)=>{l?.(...e),S()},onCancel:(...e)=>{s?.(...e),S()},visible:!0,cancelButtonProps:{...c.cancelButtonProps,..."confirm"!==e&&{style:{display:"none"}}},children:d},S=()=>{o.q.set(r,(0,a.Y)(n.A,{...c,...u,visible:!1,afterClose:()=>{o.q.remove(r)}}))};return o.q.set(r,(0,a.Y)(n.A,{...c,...u})),{destroy:S,update:e=>{o.q.set(r,(0,a.Y)(n.A,{...c,...e,...u}))}}}})},667048:(e,t,r)=>{r.d(t,{AV:()=>d,BC:()=>S,KF:()=>i,Lh:()=>o,Z6:()=>u,ao:()=>l,cz:()=>c,nQ:()=>_});var a=r(483588),n=r(141078),s=r(919681);let i=["name"],o=(0,n.J1)`
  query SearchPageSearch(
    $pageToken: String
    $query: SearchmidtierSearchUnifiedQueryInput
    $filters: SearchmidtierSearchUnifiedFiltersInput
    $exclusionFilters: SearchmidtierSearchUnifiedFiltersInput
    $sortOrder: SearchmidtierSearchUnifiedSortOrderInput
    $pageSize: Int
    $searchId: String
    $context: SearchmidtierSearchUnifiedContextInput
    $uiMode: ThumbnailsThumbnailUiMode
    $featureFlags: SearchmidtierSearchUnifiedFeatureFlagsInput
  ) @component(name: "DBSQLX.SearchUI") {
    searchmidtierSearchUnifiedSearch(
      input: {
        pageToken: $pageToken
        query: $query
        filters: $filters
        exclusionFilters: $exclusionFilters
        sortOrder: $sortOrder
        pageSize: $pageSize
        searchId: $searchId
        context: $context
        sourceInfo: { sourceId: FULL_PAGE_SEARCH }
        featureFlags: $featureFlags
      }
    ) {
      apiError {
        message
        code
      }
      nextPageToken
      results {
        ...SearchResultDataWebapp
      }
      partialFailures {
        failureType
      }
    }
  }
  ${s.zB}
`,l=(0,n.J1)`
  query DashboardListingPageSearch(
    $pageToken: String
    $query: SearchmidtierSearchUnifiedQueryInput
    $filters: SearchmidtierSearchUnifiedFiltersInput
    $exclusionFilters: SearchmidtierSearchUnifiedFiltersInput
    $sortOrder: SearchmidtierSearchUnifiedSortOrderInput
    $pageSize: Int
    $searchId: String
    $context: SearchmidtierSearchUnifiedContextInput
    $uiMode: ThumbnailsThumbnailUiMode
    $featureFlags: SearchmidtierSearchUnifiedFeatureFlagsInput
    $sourceInfo: LoggingSearchmidtierSourceInfoInput!
  ) @component(name: "DBSQLX.SearchUI") {
    searchmidtierSearchUnifiedSearch(
      input: {
        pageToken: $pageToken
        query: $query
        filters: $filters
        exclusionFilters: $exclusionFilters
        sortOrder: $sortOrder
        pageSize: $pageSize
        searchId: $searchId
        context: $context
        sourceInfo: $sourceInfo
        featureFlags: $featureFlags
      }
    ) {
      apiError {
        message
        code
      }
      nextPageToken
      results {
        ...SearchResultDataWebapp
      }
      partialFailures {
        failureType
      }
    }
  }
  ${s.zB}
`,d=(0,n.J1)`
  query GenericUlpSearch(
    $pageToken: String
    $query: SearchmidtierSearchUnifiedQueryInput
    $filters: SearchmidtierSearchUnifiedFiltersInput
    $exclusionFilters: SearchmidtierSearchUnifiedFiltersInput
    $sortOrder: SearchmidtierSearchUnifiedSortOrderInput
    $pageSize: Int
    $searchId: String
    $context: SearchmidtierSearchUnifiedContextInput
    $uiMode: ThumbnailsThumbnailUiMode
    $featureFlags: SearchmidtierSearchUnifiedFeatureFlagsInput
    $sourceInfo: LoggingSearchmidtierSourceInfoInput!
  ) @component(name: "DBSQLX.SearchUI") {
    searchmidtierSearchUnifiedSearch(
      input: {
        pageToken: $pageToken
        query: $query
        filters: $filters
        exclusionFilters: $exclusionFilters
        sortOrder: $sortOrder
        pageSize: $pageSize
        searchId: $searchId
        context: $context
        sourceInfo: $sourceInfo
        featureFlags: $featureFlags
      }
    ) {
      apiError {
        message
        code
      }
      nextPageToken
      results {
        ...SearchResultDataWebapp
      }
      partialFailures {
        failureType
      }
    }
  }
  ${s.zB}
`,c=25,u=3,S={sourceId:a.nZp.DASHBOARD_LISTING_PAGE},_={}},675298:(e,t,r)=>{r.d(t,{E:()=>o,L:()=>i});var a=r(610435),n=r(692738);let s=n.createContext(!0);function i({required:e,children:t}){return(0,a.Y)(s.Provider,{value:e,children:t})}function o(){return(0,n.useContext)(s)}},772383:(e,t,r)=>{r.r(t),r.d(t,{commitHash:()=>S.u});var a=r(610435),n=r(22191),s=r(726977),i=r(237241),o=r(956578),l=r(295244);let d="databricks-dbsql";class c extends i.N{static get observedAttributes(){return[...super.observedAttributes]}static connectedInstance=null;constructor(){super({cacheKey:d,renderRootComponent:()=>(0,a.Y)(o.l,{routes:[...(0,l.X)()]}),enablePanelBoundary:!0,esComponent:n.Es.DbsqlUi,errorBoundaryId:s.s.DbsqlRoot})}connectedCallback(){c.connectedInstance&&console.error(`There is already an existing <${d} /> instance, which hasn't been disconnected. This is not supported and may cause issues.`),c.connectedInstance=this,super.connectedCallback()}disconnectedCallback(){if(super.disconnectedCallback(),c.connectedInstance!==this)return;c.connectedInstance=null}}customElements.define(d,c);var u=r(724221),S=r(229079);(0,u.K)(!0)},828140:(e,t,r)=>{r.d(t,{H:()=>s});var a=r(441535),n=r(707076);function s(){return(0,n.Kt)()&&(0,a.W)("databricks.fe.search.unifiedListPageEnabled",!1)}},837898:(e,t,r)=>{r.d(t,{_p:()=>u});var a=r(483588),n=r(986784),s=r(771994),i=r(667048),o=r(993533),l=r(828140),d=r(374821);let c={[a.iId.ALERT]:s.An.ALERT,[a.iId.ALERT_V2]:s.An.ALERT_V2,[a.iId.DASHBOARD_LAKEVIEW]:s.An.DASHBOARD,[a.iId.DASHBOARD_REDASH]:s.An.DASHBOARD,[a.iId.FILE]:s.An.FILE,[a.iId.FOLDER]:s.An.FOLDER,[a.iId.JOB]:s.An.JOB,[a.iId.PIPELINE]:s.An.PIPELINE,[a.iId.LIBRARY]:s.An.LIBRARY,[a.iId.MARKETPLACE]:s.An.MARKETPLACE,[a.iId.ML_ENDPOINT]:s.An.ENDPOINT,[a.iId.ML_MODEL]:s.An.MODEL,[a.iId.FUNCTION]:s.An.FUNCTION,[a.iId.MLFLOW_EXPERIMENT]:s.An.EXPERIMENT,[a.iId.NOTEBOOK]:s.An.NOTEBOOK,[a.iId.DESIGNER_FILE]:s.An.DESIGNER_FILE,[a.iId.PARTNER]:s.An.PARTNER,[a.iId.PROJECT]:s.An.REPO,[a.iId.QUERY]:s.An.QUERY,[a.iId.TABLE]:s.An.TABLE,[a.iId.VOLUME]:s.An.VOLUME,[a.iId.DATA_ROOM]:s.An.DATA_ROOM,[a.iId.APP]:s.An.APP};function u(e){var t;let{lockedSearchTypeGroup:r,prefetchEnabledFlag:u="databricks.fe.search.searchPrefetchEnabled"}=e,S=function(e){switch(e){case s.An.DASHBOARD:if((0,n.i)()&&(0,l.H)())return{query:i.ao,sourceInfo:i.BC,searchFields:i.KF};break;case s.An.DATA_ROOM:if((0,d.A)())return{query:i.AV,sourceInfo:i.nQ,searchFields:i.KF}}return{query:i.Lh}}(r),_=e.query??S.query,p=e.sourceInfo??S.sourceInfo,E=e.searchFields??S.searchFields,I=(t=[r],Object.values(a.iId).filter(e=>{if(e===a.iId.DASHBOARD_REDASH)return!1;let r=c[e];return void 0!==r&&t.includes(r)})),T={query:"",searchMode:o.YD3.HYBRID};return E&&(T.searchFields=E),[{query:_,variables:{pageSize:i.cz,query:T,filters:{resultTypes:I},...void 0!==p?{sourceInfo:p}:{}},prefetchEnabledFlag:u}]}},883171:(e,t,r)=>{r.r(t),r.d(t,{RouteComponent:()=>h,isQuerySnippetsEnabled:()=>m});var a=r(610435);r(692738);var n=r(990670),s=r(429608),i=r(342411),o=r(435305),l=r(441535),d=r(829339),c=r(805287),u=r(696046),S=r(499348),_=r(811747),p=r(357403),E=r(801938);let I=()=>{let e=(0,i.tz)().formatMessage({id:"vrHI2U",defaultMessage:"SQL Query Snippets"});return(0,a.Y)(S.A,{children:(0,a.Y)(n.M,{title:e,style:{height:"100%",display:"flex",flexDirection:"column"},children:(0,a.Y)(u.$,{})})})},T=()=>{let{portalContainer:e}=(0,E.Xd)();return(0,a.Y)(p.RequireDatabricksSession,{children:(0,a.Y)(o.V,{children:(0,a.Y)(s.bW,{getPopupContainer:()=>e,children:(0,a.Y)(I,{})})})})},h=()=>{let e=(0,i.tz)().formatMessage({id:"4IZWdQ",defaultMessage:"SQL query snippets"});return(0,d.r)({title:e}),(0,a.Y)(_.g,{children:(0,a.Y)(S.A,{resetPageScroll:!1,children:(0,a.Y)(T,{})})})},m=()=>{if(!(0,l.W)("databricks.fe.monolith.enableMigratedSqlQuerySnippetsLocation",!1))return!1;return(0,c.HB)()}},919681:(e,t,r)=>{r.d(t,{aE:()=>p,it:()=>T,qE:()=>_,zB:()=>b});var a=r(141078);let n=(0,a.J1)`
  fragment SearchResultTitleData on SearchmidtierSearchUnifiedResult {
    name
    highlighting {
      name
    }
  }
`,s=(0,a.J1)`
  fragment SearchResultOwnerData on SearchmidtierSearchUnifiedResult {
    owner {
      id
      fullname
      email
    }
    ownerPrincipal {
      id
      displayName
      uniqueName
      kind
    }
  }
`,i=(0,a.J1)`
  fragment SearchResultDescriptionData on SearchmidtierSearchUnifiedResult {
    description
    highlighting {
      description
    }
    ucEntityMetadata {
      comments
    }
    dataRoom {
      description
    }
  }
`,o=(0,a.J1)`
  fragment SearchResultPopularityData on SearchmidtierSearchUnifiedResult {
    popularity {
      bucket
      count
    }
    liveUsageInfo {
      bucket
      count
    }
    resultType
  }
`,l=(0,a.J1)`
  fragment SearchResultIconData on SearchmidtierSearchUnifiedResult {
    resultType
    ucEntityMetadata {
      securableKind
    }
    partnerEntityMetadata {
      partnerId
    }
    browseOnly
    treeNode {
      ... on ParentTreeNode {
        projectAttributes {
          __typename
        }
      }
    }
  }
`,d=(0,a.J1)`
  fragment SearchResultRunStatusData on SearchmidtierSearchUnifiedResult {
    job {
      activeRuns(first: 1) {
        edges {
          node {
            status
          }
        }
      }
      completedRuns(first: 1) {
        edges {
          node {
            status
          }
        }
      }
    }
  }
`,c=(0,a.J1)`
  fragment SearchResultCodeHighlightData on SearchmidtierSearchUnifiedResult {
    ...SearchResultUrlData
    highlighting {
      codeFragments {
        content
        childId
        id
        language
      }
    }
  }
`,u=(0,a.J1)`
  fragment SearchResultFavoriteStatusData on SearchmidtierSearchUnifiedResult {
    userActivityInfo {
      assetType
      assetId
      isFavorite
    }
  }
`,S=(0,a.J1)`
  fragment SearchResultUpdatedAtData on SearchmidtierSearchUnifiedResult {
    updatedAt
  }
`,_=(0,a.J1)`
  fragment SearchResultTableLocationData on SearchmidtierSearchUnifiedResult {
    ucEntityMetadata {
      catalogName
      schemaName
    }
  }
`,p=(0,a.J1)`
  fragment SearchResultWorkspaceFullPathData on SearchmidtierSearchUnifiedResult {
    treeNode {
      fullPath
      isDeleted
      id
      parent {
        id
      }
    }
  }
`,E=(0,a.J1)`
  fragment SearchResultTagsData on SearchmidtierSearchUnifiedResult {
    tags {
      name
      value
    }
    marketplaceEntityMetadata {
      categories
    }
  }
`,I=(0,a.J1)`
  fragment SearchResultLastViewedAtData on SearchmidtierSearchUnifiedResult {
    userActivityInfo {
      assetType
      assetId
      lastViewedByUserAt
    }
  }
`,T=(0,a.J1)`
  fragment SearchResultUrlData on SearchmidtierSearchUnifiedResult {
    id
    resultType
    name
    ucEntityMetadata {
      catalogName
      schemaName
    }
    partnerEntityMetadata {
      partnerId
    }
    treeNode {
      ... on Repo {
        projectAttributes {
          __typename
        }
      }
      ... on Directory {
        projectAttributes {
          __typename
        }
      }
    }
  }
`,h=(0,a.J1)`
  fragment SearchResultColumnHighlightData on SearchmidtierSearchUnifiedResult {
    resultType
    highlighting {
      textFragments {
        childId
        content
        title
      }
    }
  }
`,m=(0,a.J1)`
  fragment SearchResultThumbnailData on SearchmidtierSearchUnifiedResult {
    id
    name
    resultType
    thumbnailUrl(uiMode: $uiMode)
  }
`,f=(0,a.J1)`
  fragment SearchResultMarketplaceProviderData on SearchmidtierSearchUnifiedResult {
    marketplaceEntityMetadata {
      providerId
      providerName
    }
  }
`,A=(0,a.J1)`
  fragment SearchResultAppsMetadataData on SearchmidtierSearchUnifiedResult {
    appsMetadata {
      statusState
      appsCreator {
        id
        email
        fullname
      }
    }
  }
`,b=(0,a.J1)`
  fragment SearchResultDataWebapp on SearchmidtierSearchUnifiedResult {
    id
    ...SearchResultTitleData
    ...SearchResultOwnerData
    ...SearchResultDescriptionData
    ...SearchResultPopularityData
    ...SearchResultIconData
    ...SearchResultRunStatusData
    ...SearchResultCodeHighlightData
    ...SearchResultFavoriteStatusData
    ...SearchResultUpdatedAtData
    ...SearchResultTableLocationData
    ...SearchResultWorkspaceFullPathData
    ...SearchResultTagsData
    ...SearchResultLastViewedAtData
    ...SearchResultUrlData
    ...SearchResultColumnHighlightData
    ...SearchResultThumbnailData
    ...SearchResultMarketplaceProviderData
    ...SearchResultAppsMetadataData
  }
  ${n}
  ${s}
  ${i}
  ${o}
  ${l}
  ${d}
  ${c}
  ${u}
  ${S}
  ${_}
  ${p}
  ${E}
  ${I}
  ${T}
  ${h}
  ${m}
  ${f}
  ${A}
`},943336:(e,t,r)=>{r.d(t,{R:()=>d});var a=r(692738),n=r(441535),s=r(940912),i=r(967166),o=r(87221),l=r(327152);let d=e=>{let t=e?.ref,r=e?.disabled,d=(0,i.hG)(),c=(0,a.useCallback)(e=>t=>{var r;t.stopPropagation();let{pageId:a,pageViewId:s}=(0,l.t)()??{pageId:"",pageViewId:""},[i,c]=(0,n.W)("databricks.fe.observability.enableClipboardAnalyticsParentWalk",!0)?function(e){let t=e,r=0;for(;t&&r<50;){let e=t.dataset?.componentType,a=t.dataset?.componentId;if(e&&a)return[e,a];t=t.parentElement,r++}return[void 0,void 0]}(t.target):(r=t.target,[r?.dataset?.componentType,r?.dataset?.componentId]);(0,o.s_)(d,{eventType:e,eventPayload:{interactionSubject:!0,referrerEntity:i&&c?{entityType:"component",entitySubType:i,entityId:c}:void 0},eventEntity:{entityType:"page",entitySubType:void 0,entityId:a,entityViewId:s},eventClientSource:"unified_router"})},[d]);(0,a.useEffect)(()=>{if(r)return;if(t&&!t.current)throw Error("useSetupClipboardObserver was called with an empty ref");let e=t?.current??document,a=(0,s.yB)(),n=a.wrap(c("page_clipboard_cut"));e.addEventListener("cut",n);let i=a.wrap(c("page_clipboard_copy"));e.addEventListener("copy",i);let o=a.wrap(c("page_clipboard_paste"));return e.addEventListener("paste",o),()=>{e.removeEventListener("cut",n),e.removeEventListener("copy",i),e.removeEventListener("paste",o)}},[c,d,t,r])}},956578:(e,t,r)=>{r.d(t,{l:()=>R});var a=r(610435);r(111671),r(646216);var n=r(692738),s=r(923305),i=r(403286),o=r(6e4),l=r(402217),d=r(258182),c=r(441535),u=r(943336),S=r(110253),_=r(959240),p=r(535936),E=r(984251),I=r(702465),T=r(464782),h=r(624704);let m={init(){window.addEventListener("offline",()=>{h.A.warning("Please check your Internet connection",null,{key:"connectionNotification",duration:null}),window.addEventListener("online",function e(){h.A.close("connectionNotification"),window.removeEventListener("online",e)})})}};function f({basePrefix:e,enableNavigationIntent:t,legacyRoutes:r,routes:s,updateRouterMetadata:i,routerMetadata:o}){return(0,n.useEffect)(()=>{m.init()},[]),(0,a.Y)(I.GF,{children:(0,a.Y)(T.x,{basePrefix:e,enableNavigationIntent:t,legacyRoutes:r,routes:s,updateRouterMetadata:i,routerMetadata:o})})}let A=n.lazy(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(54497),r.e(33764),r.e(78277),r.e(36993),r.e(59276),r.e(59794),r.e(44004),r.e(159),r.e(20556),r.e(74767),r.e(78756),r.e(89187),r.e(81318),r.e(47589),r.e(70419),r.e(46184),r.e(14243),r.e(88591),r.e(47323),r.e(92792),r.e(63121),r.e(79832),r.e(36921),r.e(37140),r.e(82031),r.e(42272),r.e(11798),r.e(87828),r.e(83885)]).then(r.bind(r,887496));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(887496,"@databricks/dbsql/src/app/config","lazy",e);return e()})().then(()=>({default:()=>null})));function b({children:e}){if((0,c.W)("databricks.fe.dbsqlx.skipConfigLoading",!1))return(0,a.Y)(a.FK,{children:e});return(0,a.FD)(_.t,{fallback:null,children:[(0,a.Y)(A,{}),e]})}function R({basePrefix:e=(0,s.DT)(),enableNavigationIntent:t,legacyRoutes:r=l.Ay,routes:c=[]}){let _=(0,E.i)(e,c,r.items),I=(0,n.useCallback)((e,{pageId:t})=>{let r=e?.pageId,a=e=>Object.values(i.CN).includes(e);if(void 0!==r&&a(r)&&a(t))return!1;return!0},[]),{routerInteraction:T,updateRouterMetadata:h,routerMetadata:m}=(0,p.q)(_,o.b6,I);return(0,u.R)(),(0,a.Y)(b,{children:(0,a.Y)(d.Provider,{children:(0,a.FD)("div",{id:"dbsql-app-root",className:"dbsql-ui-container","data-heap-redact-attributes":"aria-label,data-testid,title",children:[(0,a.Y)(S.ci,{interaction:T,enabled:!0,children:(0,a.Y)(f,{basePrefix:e,enableNavigationIntent:t,legacyRoutes:r,routes:c,updateRouterMetadata:h,routerMetadata:m})}),(0,a.Y)(d.Viewport,{})]})})})}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/27704.2dd5cf571b.chunk.js.map