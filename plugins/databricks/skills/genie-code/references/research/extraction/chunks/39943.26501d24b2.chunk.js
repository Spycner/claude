"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[39943],{47599:(e,t,r)=>{r.d(t,{AR:()=>g,UQ:()=>h});var i=r(692738),a=r(141078),n=r(886100),o=r(22191),s=r(747129),l=r(802558),d=r.n(l);function u(e,t){let r=(0,a.mK)(t?.client),[n,o]=(0,i.useState)({loading:!t?.skip,error:void 0,data:void 0,variables:t?.variables}),[s,l]=(0,i.useState)(()=>{if(t?.skip)return null;return r.subscribe({query:e,variables:t?.variables,fetchPolicy:t?.fetchPolicy,context:t?.context})}),u=(0,i.useRef)(!1);(0,i.useEffect)(()=>()=>{u.current=!0},[]);let c=(0,i.useRef)({client:r,subscription:e,options:t});return(0,i.useEffect)(()=>{let i=t?.shouldResubscribe;"function"==typeof i&&t&&(i=!!i(t)),t?.skip?(!t?.skip!=!c.current.options?.skip||u.current)&&(o({loading:!1,variables:t?.variables}),l(null),u.current=!1):(!1!==i&&(r!==c.current.client||e!==c.current.subscription||t?.fetchPolicy!==c.current.options?.fetchPolicy||!t?.skip!=!c.current.options?.skip||!d()(t?.variables,c.current.options?.variables))||u.current)&&(o({loading:!0,variables:t?.variables}),l(r.subscribe({query:e,variables:t?.variables,fetchPolicy:t?.fetchPolicy,context:t?.context})),u.current=!1),Object.assign(c.current,{client:r,subscription:e,options:t})},[r,e,t]),(0,i.useEffect)(()=>{if(!s)return;let e=s.subscribe({next(e){let i={loading:!1,data:e.data??void 0,error:void 0,variables:t?.variables};o(i),c.current.options?.onSubscriptionData?.({client:r,subscriptionData:i})},error(e){o({loading:!1,error:e,variables:t?.variables}),c.current.options?.onError?.(e)},complete(){c.current.options?.onSubscriptionComplete?.()}});return()=>{e.unsubscribe()}},[s]),n}var c=r(588520),p=r(919880),m=r(362075);let y=(0,a.J1)`
  subscription QueryHistorySubscription(
    $context: LakehouseQueryContext!
    $first: Int
    $after: String
    $userId: ID
    $orderBy: ListQueriesByContextOrderBy
  ) @component(name: "DBSQLX.QueryHistory") {
    queryHistoryContextEvents(context: $context, first: $first, after: $after, userId: $userId, orderBy: $orderBy) {
      edges {
        node {
          ...HistoryStatement
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
      errors {
        code
        message
      }
    }
  }
  ${c.K}
`,f=(0,a.J1)`
  subscription QueryHistoryStatementSubscription($id: String, $includePlans: Boolean)
  @component(name: "DBSQLX.QueryHistory") {
    queryHistoryStatementEvents(id: $id, includePlans: $includePlans) {
      ...HistoryStatement
    }
  }
  ${c.K}
`,h=(e,t)=>{let{skip:r}=t||{},a=(0,m.yk)();return(0,i.useEffect)(()=>{a&&e&&!r&&(0,p.an)(p.rc.COMPONENT_RENDER,"qh-statement-gql-sub-init-mount")},[e]),u(f,{variables:{id:e,includePlans:!0},skip:!a||r||!e,shouldResubscribe:!0,onSubscriptionComplete(){(0,p.an)(p.rc.API_SUCCESS,"qh-statement-gql-sub-complete")},onError(t){(0,p.an)(p.rc.API_ERROR,"qh-statement-gql-sub-error",{queryId:e,error:t.message}),n.iT.sev2BurnRate(o.Es.QueryHistory,"QI_GetQueryGqlSubscription",s.i1.P99,s.Ip.Min10,!1,"GetQuery graphql subscription error",!1,!0)}})},g=(e,t)=>{let{skip:r}=t||{},a=(0,m.yk)(),l=Object.values(e.context).every(e=>Array.isArray(e)?0===e.length:null==e);return(0,i.useEffect)(()=>{!a||l||r||(0,p.an)(p.rc.COMPONENT_RENDER,"qh-context-gql-sub-init-mount")},[l]),u(y,{variables:e,skip:!a||r||l,shouldResubscribe:!0,onSubscriptionComplete(){(0,p.an)(p.rc.API_SUCCESS,"qh-context-gql-sub-complete")},onError(t){(0,p.an)(p.rc.API_ERROR,"qh-context-gql-sub-error",{error:t.message,...e.context}),n.iT.sev2BurnRate(o.Es.QueryHistory,"QI_ListQueriesByContextGqlSubscription",s.i1.P99,s.Ip.Min10,!1,`ListQueriesByContext graphql subscription error. Context params: ${JSON.stringify(e.context)}`,!1,!0)}})}},54262:(e,t,r)=>{r.d(t,{q:()=>d,u:()=>s});var i=r(946705),a=r(822464),n=r(342411),o=r(94567);function s(e){return!!(e&&"LakehouseSqlQuery"===e.__typename)}class l extends Error{constructor(e){super(e),this.name="InvalidQueryImportFormatError"}}function d(e,t){let r=(0,n.tz)(),d=(0,a.W)();return function(){(0,i.Lj)(i=>{try{let t=JSON.parse(i);if(!s(t)&&!(0,o.QB)(t))throw new l(r.formatMessage({id:"qHDlr1",defaultMessage:"The imported file is not a valid query. Please download and try to import again or contact Databricks support."}));e(t)}catch(e){if(e instanceof Error)d({name:e.name,message:e.message},{title:e.name,message:e.message}),t&&t();else throw e;return}})}}},76995:(e,t,r)=>{r.d(t,{A:()=>s});var i=r(544004),a=r.n(i),n=r(536717),o=r.n(n);a().setConfig({ADD_ATTR:["target"]}),a().addHook("afterSanitizeAttributes",function(e){let t=e.getAttribute("target");o()(t)&&"_blank"===t.toLowerCase()?e.setAttribute("rel","noopener noreferrer"):e.removeAttribute("target")});let s=a().sanitize},105026:(e,t,r)=>{r.d(t,{GF:()=>d,OX:()=>s,_Z:()=>o,_j:()=>u,ed:()=>l,fZ:()=>c});var i=r(886137),a=r.n(i),n=r(441535);let o=a()(()=>{let e=(0,n.W)("databricks.fe.editor.cacheFlags.maxCacheSize",1e7);if("number"==typeof e)return e;return 1e7}),s=a()(()=>(0,n.W)("databricks.fe.editor.cacheFlags.disableActiveStatementCache",!1)),l=a()(()=>(0,n.W)("databricks.fe.editor.cacheFlags.enableSqlStatementsParserWrapperCacheV2",!1)),d=a()(()=>(0,n.W)("databricks.fe.editor.cacheFlags.enableEditorSqlGlobalContextStoreCacheV2",!1)),u=a()(()=>(0,n.W)("databricks.fe.editor.cacheFlags.enableGhostTextTrackerCacheV2",!1)),c=a()(()=>{let e=(0,n.W)("databricks.fe.editor.cacheFlags.maxWorkerCacheSize",5e7);if("number"==typeof e)return e;return 5e7})},150405:(e,t,r)=>{r.d(t,{AM:()=>u,Vd:()=>d,ei:()=>l,xM:()=>s});var i=r(916599),a=r.n(i),n=r(720097),o=r.n(n);function s(e){return o()(e)&&a()(e)}function l(e){return o()(e)&&a()(e)&&e>0}function d(...e){return e.every(s)}function u(...e){return e.some(s)}},308365:(e,t,r)=>{r.d(t,{i:()=>E,r:()=>f});var i=r(610435),a=r(956935),n=r(797421),o=r(692738),s=r(429608),l=r(497895),d=r(705639),u=r(123252),c=r(99206);let p=e=>({zIndex:e.options.zIndexBase+50});function m(){var e;let t,r,i,n,o,{theme:s,getPrefixedClassName:u}=(0,l.wn)();return e=u("picker"),t=`.${e}-focused`,r=`.${e}-active-bar`,i=`.${e}-separator`,n=`.${e}-suffix`,o={height:32,borderRadius:(0,c.S)(d.c.POPOVER_BORDER_RADIUS,s.borders.borderRadiusSm),borderColor:s.colors.border,color:s.colors.textPrimary,transition:"border 0s, box-shadow 0s",[`&${t},:hover`]:{borderColor:s.colors.actionDefaultBorderHover},"&:active":{borderColor:s.colors.actionDefaultBorderPress},[`&${t}`]:{boxShadow:"none !important",outline:`${s.colors.actionDefaultBorderFocus} solid 2px !important`,outlineOffset:"-2px !important",borderColor:"transparent !important"},[`& ${r}`]:{background:`${s.colors.actionDefaultBorderPress} !important`},[`& input::placeholder, & ${i}, & ${n}`]:{color:s.colors.textPrimary}},(0,a.AH)(o)}let y=({children:e,ariaLive:t="assertive",...r})=>{let{theme:a}=(0,l.wn)(),n=(0,o.useRef)(null);return(0,o.useEffect)(()=>{n.current&&(a.isDarkMode?n.current.querySelectorAll(".du-bois-dark-picker-input > input"):n.current.querySelectorAll(".du-bois-light-picker-input > input")).forEach(e=>e.setAttribute("aria-live",t))},[n,t,a.isDarkMode]),(0,i.Y)("div",{...r,ref:n,children:e})},f=(0,o.forwardRef)((e,t)=>{let r=m(),{theme:a}=(0,l.wn)(),{ariaLive:o,wrapperDivProps:d,...c}=e;return(0,i.Y)(s.wC,{children:(0,i.Y)(y,{...(0,u.VG)(),...d,ariaLive:o,children:(0,i.Y)(n.A,{css:r,ref:t,...c,popupStyle:{...p(a),...e.popupStyle||{}}})})})}),h=(0,o.forwardRef)((e,t)=>{let r=m(),{theme:a}=(0,l.wn)(),{ariaLive:o,wrapperDivProps:d,...c}=e;return(0,i.Y)(s.wC,{children:(0,i.Y)(y,{...d,ariaLive:o,children:(0,i.Y)(n.A.RangePicker,{...(0,u.VG)(),css:r,...c,ref:t,popupStyle:{...p(a),...e.popupStyle||{}}})})})}),g=(0,o.forwardRef)((e,t)=>{let r=m(),{theme:a}=(0,l.wn)(),{ariaLive:o,wrapperDivProps:d,...c}=e;return(0,i.Y)(s.wC,{children:(0,i.Y)(y,{...(0,u.VG)(),...d,ariaLive:o,children:(0,i.Y)(n.A.TimePicker,{css:r,...c,ref:t,popupStyle:{...p(a),...e.popupStyle||{}}})})})}),v=(0,o.forwardRef)((e,t)=>{let r=m(),{theme:a}=(0,l.wn)(),{ariaLive:o,wrapperDivProps:d,...c}=e;return(0,i.Y)(s.wC,{children:(0,i.Y)(y,{...(0,u.VG)(),...d,ariaLive:o,children:(0,i.Y)(n.A.QuarterPicker,{css:r,...c,ref:t,popupStyle:{...p(a),...e.popupStyle||{}}})})})}),S=(0,o.forwardRef)((e,t)=>{let r=m(),{theme:a}=(0,l.wn)(),{ariaLive:o,wrapperDivProps:d,...c}=e;return(0,i.Y)(s.wC,{children:(0,i.Y)(y,{...(0,u.VG)(),...d,ariaLive:o,children:(0,i.Y)(n.A.WeekPicker,{css:r,...c,ref:t,popupStyle:{...p(a),...e.popupStyle||{}}})})})}),E=Object.assign(f,{RangePicker:h,TimePicker:g,QuarterPicker:v,WeekPicker:S,MonthPicker:(0,o.forwardRef)((e,t)=>{let r=m(),{theme:a}=(0,l.wn)(),{ariaLive:o,wrapperDivProps:d,...c}=e;return(0,i.Y)(s.wC,{children:(0,i.Y)(y,{...(0,u.VG)(),...d,ariaLive:o,children:(0,i.Y)(n.A.MonthPicker,{css:r,...c,ref:t,popupStyle:{...p(a),...e.popupStyle||{}}})})})}),YearPicker:(0,o.forwardRef)((e,t)=>{let r=m(),{theme:a}=(0,l.wn)(),{ariaLive:o,wrapperDivProps:d,...c}=e;return(0,i.Y)(s.wC,{children:(0,i.Y)(y,{...(0,u.VG)(),...d,ariaLive:o,children:(0,i.Y)(n.A.YearPicker,{css:r,...c,ref:t,popupStyle:{...p(a),...e.popupStyle||{}}})})})})})},362075:(e,t,r)=>{r.d(t,{BA:()=>p,HY:()=>v,KX:()=>S,Kx:()=>g,QV:()=>o,S:()=>s,YZ:()=>h,aV:()=>l,d5:()=>y,dN:()=>n,ie:()=>f,o6:()=>m,qI:()=>c,us:()=>d,yk:()=>u});var i=r(441535),a=r(845690);let n=()=>(0,i.W)("databricks.fe.queryInsights.isVerboseModeDisabledForServerless",!1),o=()=>(0,i.W)("databricks.fe.queryInsights.isTaskProgressEnabled",!1),s=()=>(0,a.Mj)({key:"query-profile-revamp-preview-enabled",version:1,initialValue:!0,scoped:!0}),l=(e=!1)=>!0,d=()=>(0,i.W)("history_for_dlt",null)??(0,i.W)("databricks.deltapipelines.enableDLTExecutionsInHistory",!1),u=()=>!!(0,i.W)("databricks.fe.queryInsights.enableStatementEventGqlSubscription",!1),c=()=>!!(0,i.W)("databricks.fe.queryInsights.isNewMicrobatchUIEnabled",!1),p=()=>!!(0,i.W)("databricks.fe.queryInsights.isSparkUILinkEnabled",!0),m=()=>!!(0,i.W)("databricks.fe.queryInsights.isStatementsTableV2Enabled",!1),y=()=>!!(0,i.W)("query_perf_insights",!1),f=()=>(0,i.W)("databricks.fe.queryInsights.pageSizeForPipelineQueryHistory",1e3),h=()=>(0,i.W)("databricks.fe.queryInsights.serverlessRateLimitPollIntervalMs",1e4),g=()=>(0,i.W)("databricks.fe.queryInsights.serverlessRateLimitPageSize",50),v=()=>(0,i.W)("databricks.fe.queryInsights.queryProfileDrawer.detailsPollingInterval",5e3),S=()=>!!(0,i.W)("databricks.fe.queryInsights.isStatementSourceFilterEnabled",!1)},392912:(e,t,r)=>{r.d(t,{YC:()=>g,wL:()=>f});var i=r(610435),a=r(34116),n=r.n(a),o=r(692738),s=r(54262),l=r(458572),d=r(362075),u=r(94567),c=r(674037),p=r(426857),m=r(430790),y=r(490871);let f=({referrer:e,active:t,onDisplayModeChange:r,query:a,children:n,displayMode:c,isVisible:f})=>{let{state:g,setDrawerVisible:v,setDisplayMode:S,setQueryKeys:E,setQueryOverrides:b,setActiveQueryIndex:_,setImportedQueryProfile:I}=(0,y.y)();!1===t&&g.drawerVisible&&v(!1);let{queryKeys:T,activeQueryIndex:k,queryOverrides:C}=g,R=f??g.drawerVisible,x=(0,d.aV)(),w=T?.[k],A=(0,l.m)(w?.queryId,w?.queryStartTimeMs,x||!T?.[k]||!R),P=a??C?.[k]??A.query,q=c??g.displayMode,V=(0,o.useCallback)(e=>{let t=e??p.U;t!==q&&(S(t),r?.(t))},[q,r,S]),N=(0,o.useCallback)(()=>v(!R),[v,R]),M=(0,o.useCallback)(e=>{(0,s.u)(e)?b([e]):(0,u.QB)(e)?I(e):(I(void 0),b(void 0))},[I,b]),L=C?.length??T?.length??0,O=A.loading,D=!!(C&&C.length),$=(0,m.Z)({query:P,isImported:D}),Q=(0,o.useMemo)(()=>({...g,drawerVisible:f??g.drawerVisible,displayMode:q,activeQuery:P,setActiveQueryIndex:_,setQueryKeys:E,setDrawerVisible:v,toggleDrawerVisible:N,setDisplayMode:V,numberQueries:L,isLoading:O,isImported:D,capabilities:$,importQueryProfile:M,referrer:e}),[g,f,q,P,_,E,v,N,V,L,O,D,$,M,e]);return(0,i.Y)(h.Provider,{value:Q,children:n})},h=(0,o.createContext)({...y.n,setDrawerVisible:n(),toggleDrawerVisible:n(),setDisplayMode:n(),setQueryKeys:n(),setActiveQueryIndex:n(),isLoading:!1,isImported:!1,capabilities:void 0,importQueryProfile:n(),numberQueries:0,referrer:c.N.Unknown});function g(){return(0,o.useContext)(h)}},417469:(e,t,r)=>{r.d(t,{A:()=>l});var i=r(610435),a=r(692738),n=r(375214);function o(e){return(0,i.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,i.Y)("path",{fill:"currentColor",d:"m5.5 2 1.06 1.06-3.53 3.531L1 4.561 2.06 3.5l.97.97zM15.03 4.53h-7v-1.5h7zM1.03 14.53v-1.5h14v1.5zM8.03 9.53h7v-1.5h-7zM6.56 8.06 5.5 7 3.03 9.47l-.97-.97L1 9.56l2.03 2.031z"})})}let s=(0,a.forwardRef)((e,t)=>(0,i.Y)(n.I,{ref:t,...e,component:o}));s.displayName="ChecklistIcon";let l=s},426857:(e,t,r)=>{function i(e){return"ONLY_OVERVIEW"!==e}r.d(t,{U:()=>a,z:()=>i});let a="ONLY_OVERVIEW"},430790:(e,t,r)=>{r.d(t,{Z:()=>c});var i=r(200356),a=r(936985),n=r(441535),o=r(686560),s=r(535014),l=r(362075),d=r(142744),u=r(936036);let c=({query:e,isImported:t})=>{let r=e?.endpointId,c=(0,s.ac)(r||null),p=(0,n.W)("databricks.fe.history.enableServerlessCancel",!1),m=(0,l.BA)(),y=(0,s.wj)(r||null),f=(0,o.d)("userId",-1),h=(0,o.d)("isAdmin",!1),g=(0,o.d)("isDbAdmin",!1),v=(0,a.Ay)("deploymentMode"),S="development"===v||"staging"===v,{data:E}=(0,u.DJ)({variables:{id:r||""},skip:c||!r}),b=E?.lakehouse||void 0,_=(0,d.V)(b,i.fFV.CAN_MANAGE),I=!!e?.sparkUiUrl,T=b?.warehouseType===i.IB9.CLASSIC||b?.warehouseType===i.IB9.PRO&&!b?.enableDatabricksCompute,k=b?.warehouseType===i.IB9.PRO&&b?.enableDatabricksCompute,C=!1;I&&(T||k&&m)?C=!!(h||_):I&&(C=g||S);let R=!1;if(e&&!y&&(!c||p)){let r=e.user?.id===`${f}`;R=!t&&!!(r||h||_)}let x=!1;e&&(0,l.dN)()?x=g:e&&(x=!0);let w=!t&&!!e,A=!t&&S&&C&&!!e?.sparkUiUrl;return{downloadEnabled:w,verboseModeEnabled:x,sparkUIEnabled:C,cancelEnabled:R,driverLogsEnabled:A}}},433961:(e,t,r)=>{r.d(t,{K:()=>x});var i=r(610435),a=r(956935),n=r(557832),o=r.n(n),s=r(254292),l=r.n(s),d=r(465129),u=r.n(d),c=r(324844),p=r.n(c),m=r(692738),y=r(497895),f=r(445929),h=r(79128),g=r(955210),v=r(943844),S=r(382908),E=r(802582),b=r(513820),_=r(658345),I=r(806932);let T=new(r.n(I)()),k=T.renderer.rules.link_open||function(e,t,r,i,a){return a.renderToken(e,t,r)};T.renderer.rules.link_open=function(e,t,r,i,a){let n=e[t].attrIndex("target");if(n<0)e[t].attrPush(["target","_blank"]);else{let r=e[t].attrs;r&&(r[n][1]="_blank")}return k(e,t,r,i,a)};var C=r(754275),R=r(449929);let x=({message:e,messageInMarkdown:t=!1,compact:r=!1,copyTooltip:n="Copy",copyTextFunc:s,clearTooltip:d="Close",clearFunc:c,"data-testid":I,styles:k={},otherActions:x=[],otherActionsSize:w=0})=>{let A=(0,C.B)(),[P,q]=(0,m.useState)(!0),{theme:V,getPrefixedClassName:N}=(0,y.wn)(),M=N("typography"),[L,O]=(0,m.useState)(!0),D=u()(p()(o()([s,c],l())))+1,$=V.spacing.xs,Q=(0,m.useMemo)(()=>{let t=e.trim();if(r&&P)return t.split(/\r?\n/)[0];return t},[e,r,P]),U=(0,m.useCallback)(t=>{null!=t&&O(t.parentElement.offsetWidth<t.parentElement.scrollWidth||e.trim()!==Q)},[e,Q]),F={display:"flex",alignItems:"center",justifyContent:"center"},Y={fontFamily:"monospace","::first-letter":{textTransform:"capitalize"},paddingBottom:V.spacing.sm},B={background:V.colors.backgroundSecondary,border:`solid 1px ${V.colors.border}`,borderRadius:V.legacyBorders.borderRadiusMd,padding:`${V.spacing.sm}px ${V.spacing.sm}px 0`,display:"flex",overflowY:"auto",flexWrap:"wrap"};return(0,i.FD)("div",{css:(0,a.AH)({...B,...k}),role:"alert","aria-labelledby":A,"data-testid":I,children:[(0,i.Y)(f.A,{css:(0,a.AH)("font-size:",20,"px;margin-right:",$,"px;color:",V.colors.textValidationDanger,";")}),(0,i.FD)("div",{css:(0,a.AH)("flex:1 1;transition:width 0.5s;.",M,"{margin-bottom:0;}width:",`calc(100% - ${(24+$)*(1+D)}px - ${w}px)`,";"),children:[r&&L&&(0,i.Y)(h.$n,{componentId:"codegen_web-shared_src_error-message_errormessage.tsx_126",css:(0,a.AH)({...F,marginRight:$,float:"left"}),icon:P?(0,i.Y)(g.A,{}):(0,i.Y)(v.A,{}),"aria-label":P?"Expand":"Collapse",onClick:()=>{q(!P)},size:"small"})," ",(0,i.Y)(S.o,{children:r&&P?(0,i.Y)(S.o.Text,{id:A,ellipsis:!0,css:(0,a.AH)({...Y,width:`calc(100% - ${24+$}px)`}),children:(0,i.Y)("span",{ref:U,children:t?(0,i.Y)(R.P,{children:T.renderInline(Q)}):Q})}):(0,i.Y)(S.o.Paragraph,{id:A,css:(0,a.AH)({...Y,whiteSpace:"break-spaces"}),children:t?(0,i.Y)(R.P,{children:T.renderInline(Q)}):Q})})]}),x,s&&(0,i.Y)(E.p,{title:n,children:(0,i.Y)(h.$n,{componentId:"codegen_web-shared_src_error-message_errormessage.tsx_156",css:(0,a.AH)({...F,marginLeft:$}),icon:(0,i.Y)(b.A,{css:(0,a.AH)("color:",V.colors.textSecondary,";")}),onClick:s,"aria-label":"Copy",size:"small"})}),c&&(0,i.Y)(E.p,{title:d,children:(0,i.Y)(h.$n,{componentId:"codegen_web-shared_src_error-message_errormessage.tsx_176",css:(0,a.AH)({...F,marginLeft:$}),icon:(0,i.Y)(_.A,{css:(0,a.AH)("color:",V.colors.textSecondary,";")}),onClick:c,"aria-label":"Close",size:"small"})})]})}},449929:(e,t,r)=>{r.d(t,{P:()=>s});var i=r(610435),a=r(692738),n=r(497895),o=r(76995);let s=a.memo(a.forwardRef(function({children:e,compact:t=!1,css:r,...a},s){let{theme:l}=(0,n.wn)(),d={"h1, h2, h3, h4, h5, h6":{color:l.colors.textPrimary},blockquote:{padding:`${l.spacing.sm}px ${l.spacing.md}px`,margin:`0 0 ${l.spacing.md}px`,borderLeft:`5px solid ${l.colors.grey100}`,"& p:last-child, & ul:last-child, & ol:last-child":{marginBottom:0}}},u={"*:first-child":{marginTop:0},"*:last-child":{marginBottom:0},h1:{fontSize:l.typography.fontSizeMd,lineHeight:l.typography.lineHeightMd,fontWeight:l.typography.typographyBoldFontWeight,color:l.colors.textSecondary},"h2, h3, h4, h5, h6":{fontSize:l.typography.fontSizeSm,lineHeight:l.typography.lineHeightSm,fontWeight:l.typography.typographyBoldFontWeight,color:l.colors.textSecondary},"p, span, ul, ol":{fontSize:l.typography.fontSizeSm,lineHeight:l.typography.lineHeightSm,color:l.colors.textSecondary}};return(0,i.Y)("div",{...a,ref:s,css:{...d,...t?u:{},...r},dangerouslySetInnerHTML:{__html:(0,o.A)(e)}})}))},458572:(e,t,r)=>{r.d(t,{m:()=>u,O:()=>c});var i=r(6e4),a=r(919880),n=r(667941),o=r(65061),s=r(141078),l=r(994643),d=r(917705);let u=(e,t,r=!1)=>{let s,u=(s={queryId:e,queryStartTimeMs:t,skip:r,fetchPolicy:"cache-and-network"},(0,o.IT)(l.GG,{skip:!s.queryId||s.skip,variables:{id:s.queryId,queryStartTimeMs:s.queryStartTimeMs},errorPolicy:"all",fetchPolicy:s.fetchPolicy})),{startPolling:c,stopPolling:p,loading:m,error:y}=u;if((0,d.A)(y,!0),y){let t=y?.networkError;(0,a.BN)(a.rc.API_ERROR,"query-id-load-failure",{error:("string"==typeof t?.result?t?.result:t?.result?.errors?.[0]?.message)||y.name,queryId:e,http_status:t?.statusCode,path:i.Ay.path})}let f=u?.data?.lakehouseSqlQuery??null;return(0,n.NJ)(c,p,r||!(0,n.XS)(f)),{query:f,loading:m}};function c(e){var t;let[r,{loading:i,data:a}]=(t={queryId:e,fetchPolicy:"cache-and-network"},(0,s._l)(l.GG,{variables:{id:t.queryId,queryStartTimeMs:t.queryStartTimeMs},errorPolicy:"all",fetchPolicy:t.fetchPolicy}));return{getQueryLazy:r,loading:i,data:a}}},490137:(e,t,r)=>{r.d(t,{K:()=>p});var i=r(247066),a=r(886100),n=r(22191),o=r(748592),s=r(57403),l=r(221095),d=r(105026);let u=new i.q({max:1e3,ttl:36e5}),c=(0,o.W)(()=>new i.q({max:1e3,ttl:36e5,maxSize:(0,d._Z)(),sizeCalculation:l.$}),!0);function p(e,{countTrailingCommentsAsStatement:t=!1}={}){try{let r=(0,d.ed)()?c.getActiveValue():u,i=r.get(e);if(i)return i;let a=s.A.parse(e);return t||function(e){if(e.length>1){var t;let r=e[e.length-1],i=e[e.length-2];t=r.statement,""===t.replace(/\/\*[\s\S]*?\*\//g,"").replace(/--[^\n]*/g,"").trim()&&(i.statement+=r.statement,i.location={first_line:i.location.first_line,first_column:i.location.first_column,last_line:r.location.last_line,last_column:r.location.last_column},e.pop())}}(a),r.set(e,a),a}catch(e){return a.iT.log(n.Es.Editor,"SqlStatementsParseError",{error:e}),[]}}},490871:(e,t,r)=>{r.d(t,{n:()=>u,y:()=>c});var i,a=r(802558),n=r.n(a),o=r(692738),s=r(426857),l=((i=l||{}).SET_QUERIES="SET_QUERIES",i.SET_DRAWER_VISIBLE="SET_DRAWER_VISIBLE",i.SET_DISPLAY_MODE="SET_DISPLAY_MODE",i.SET_ACTIVE_QUERY_INDEX="SET_ACTIVE_QUERY_INDEX",i.SET_IMPORTED_QUERY_PROFILE="SET_IMPORTED_QUERY_PROFILE",i);function d(e,t){let{type:r,payload:i}=t;switch(r){case"SET_QUERIES":{let{queryOverrides:t,queryKeys:r}=i,a=r?[...r]:void 0;if(!(!n()(t,e.queryOverrides)||!n()(a,e.queryKeys)))return e;let o=(t?.length??a?.length??1)-1;return{...e,queryOverrides:t,queryKeys:a,activeQueryIndex:o}}case"SET_DRAWER_VISIBLE":return e.drawerVisible===i.isVisible?e:{...e,drawerVisible:i.isVisible};case"SET_DISPLAY_MODE":let a=i.displayMode??s.U;return e.displayMode===a?e:{...e,displayMode:a};case"SET_ACTIVE_QUERY_INDEX":return e.activeQueryIndex===i.activeIndex?e:{...e,activeQueryIndex:i.activeIndex};case"SET_IMPORTED_QUERY_PROFILE":return{...e,importedQueryProfile:i.importedQueryProfile};default:return e}}let u={queryKeys:void 0,queryOverrides:void 0,activeQueryIndex:0,drawerVisible:!1,displayMode:s.U,currentSparkUiUrl:void 0,importedQueryProfile:void 0},c=()=>{let[e,t]=(0,o.useReducer)(d,u),r=e=>!e||e&&0===e.length?void 0:e,i=(0,o.useCallback)(e=>t({type:"SET_QUERIES",payload:{queryKeys:r(e)}}),[]),a=(0,o.useCallback)(e=>t({type:"SET_QUERIES",payload:{queryOverrides:r(e)}}),[]),n=(0,o.useCallback)(e=>t({type:"SET_ACTIVE_QUERY_INDEX",payload:{activeIndex:e}}),[]),s=(0,o.useCallback)(e=>t({type:"SET_DRAWER_VISIBLE",payload:{isVisible:e}}),[]);return{state:e,setQueryKeys:i,setQueryOverrides:a,setActiveQueryIndex:n,setDrawerVisible:s,setDisplayMode:(0,o.useCallback)(e=>t({type:"SET_DISPLAY_MODE",payload:{displayMode:e}}),[]),setImportedQueryProfile:(0,o.useCallback)(e=>t({type:"SET_IMPORTED_QUERY_PROFILE",payload:{importedQueryProfile:e}}),[])}}},535014:(e,t,r)=>{r.d(t,{H6:()=>i,NE:()=>s,ac:()=>n,df:()=>a,wj:()=>o});let i="0000000000000000",a="0000000000000001",n=e=>e===i,o=e=>e===a,s=300},588520:(e,t,r)=>{r.d(t,{K:()=>d});var i=r(141078);let a=(0,i.J1)`
  fragment HistoryStatementMetrics on LakehouseQueryMetrics {
    totalTimeMs
    readBytes
    rowsProducedCount
    compilationTimeMs
    executionTimeMs
    queuedProvisioningTimeMs
    queuedOverloadTimeMs
    readRemoteBytes
    writeRemoteBytes
    readCacheBytes
    spillToDiskBytes
    taskTotalTimeMs
    readFilesCount
    totalFilesCount
    readPartitionsCount
    totalPartitionsCount
    photonTotalTimeMs
    rowsReadCount
    resultFetchTimeMs
    networkSentBytes
    resultFromCache
    prunedBytes
    prunedFilesCount
    provisioningQueueStartTimestamp
    overloadingQueueStartTimestamp
    queryCompilationStartTimestamp
    planningTimeMs
    queryExecutionTimeMs
    metadataTimeMs
    bytesReadFromCachePercentage
    planningPhases {
      phase
      durationMs
    }
    writeRemoteFiles
    writeRemoteRows
    taskTimeOverTimeRange {
      entries {
        taskCompletedTimeMs
      }
      interval
    }
    projectedRemainingWallclockTimeMs
    projectedRemainingTaskTotalTimeMs
    queueEndTimeMs
    taskProgress {
      plannedTaskCount
      activeTaskCount
      completedTaskCount
      completedPartitionCount
      pendingTaskCount
      failedTaskCount
    }
  }
`,n=(0,i.J1)`
  fragment HistoryStatementLiteral on LakehouseLiteral {
    dataType {
      typeName
      typeDdl
      redactedTypeDdl
    }
    intValue
    longValue
    doubleValue
    floatValue
    byteValue
    shortValue
    stringValue
    booleanValue
    decimalValue {
      value
      precision
      scale
    }
    binaryValue
    timestampValue
    timestampNtzValue
    dateValue
    calendarIntervalValue {
      months
      days
      microseconds
    }
    dayTimeIntervalValue
    yearMonthIntervalValue
  }
`,o=(0,i.J1)`
  fragment HistoryStatementExpressionNode on LakehouseExpressionNode {
    id
    tag
    dataType {
      typeName
      typeDdl
      redactedTypeDdl
    }
    literal {
      ...HistoryStatementLiteral
    }
    seqExpression {
      children
    }
    function {
      functionName
      arguments
    }
    alias {
      expr
      name
      metadata
    }
    sortOrder {
      child
      direction
      nullOrdering
    }
    lambdaFunction {
      function
      arguments {
        nameParts
      }
    }
    window {
      windowFunction
      partitionSpec
      orderSpec
    }
    unresolvedExtractValue {
      child
      extraction
    }
    updateFields {
      structExpression
      fieldName
      valueExpression
    }
    unresolvedNamedLambdaVariable {
      nameParts
    }
    namedArgumentExpression {
      key
      value
    }
  }
  ${n}
`,s=(0,i.J1)`
  fragment HistoryStatementQueryParameters on LakehouseQueryParameters {
    namedParameters {
      namedQueryParametersEntries {
        name
        value {
          exprs {
            ...HistoryStatementExpressionNode
          }
        }
      }
    }
    posParameters {
      posQueryParameters {
        exprs {
          ...HistoryStatementExpressionNode
        }
      }
    }
    isTruncated
  }
  ${o}
`,l=(0,i.J1)`
  fragment HistoryStatementQuerySource on LakehouseSqlQuerySource {
    driverInfo {
      driverName
      versionNumber
      simbaBrandingVendor
      biToolEntry
    }
    clientCallContext {
      lineNumber
    }
    scheduledBy
    sourceQueryId
    dashboardId
    alertId
    alertV2Id
    jobId
    runId
    notebookId
    commandId
    commandRunId
    runnableCommandId
    isDatabricksSqlExecApi
    entryPoint
    dashboardV3Id
    genieSpaceId
    pipelineId
    pipelineUpdateId
    dbsqlSessionId
  }
`,d=(0,i.J1)`
  fragment HistoryStatement on LakehouseSqlQuery {
    id
    status
    queryText
    queryStartTimeMs
    queryEndTimeMs
    user {
      id
      name
      displayName
    }
    executedAsUser {
      id
      name
      displayName
    }
    sparkUiUrl
    endpointId
    errorMessage
    lookupKey
    isFinal
    metrics {
      ...HistoryStatementMetrics
    }
    channelUsed {
      name
      dbsqlVersion
    }
    internalQuerySource {
      ...HistoryStatementQuerySource
    }
    statementType
    canSubscribeToLiveQuery
    plansState
    queryMetadata {
      queryParameters {
        ...HistoryStatementQueryParameters
      }
      isStreaming
      writeDataset
      usagePolicyMetadata {
        effectiveUsagePolicyId
        usagePolicyId
        effectiveMaxSlots
        isExecutionEffectiveUsagePolicyLimited
      }
      triggeredPipelineInfo {
        triggeredPipelineId
        triggeredUpdateId
      }
      maxInsightTaskDurationMs
    }
    canManageEndpoint
    isCancelable
    cacheQueryId
    queryTags {
      key
      value
    }
  }
  ${a}
  ${l}
  ${s}
`},645787:(e,t,r)=>{r.d(t,{F5:()=>f,FM:()=>m,Lt:()=>p,fr:()=>s,pX:()=>y,qQ:()=>c});var i=r(409989),a=r(844760);function n(e,t,r,i,a,n,o){try{var s=e[n](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(i,a)}function o(e){return function(){var t=this,r=arguments;return new Promise(function(i,a){var o=e.apply(t,r);function s(e){n(o,i,a,s,l,"next",e)}function l(e){n(o,i,a,s,l,"throw",e)}s(void 0)})}}let s=e=>e.split("/").map(encodeURIComponent).join("/"),l=e=>`/ajax-api/2.0/workspace-files${s(e)}`,d="x-databricks-editor-type",u="notebook-file",c=(e,t="notebook")=>o(function*(){let r=l(e),i={};"notebook"!==t&&(i[d]=u);let n=yield(0,a.S)(r,{headers:i}),o=yield n.text(),s=n.headers.get("Etag"),c=n.headers.get("content-type"),{ok:p,status:m}=n;return{data:o,sha:s,httpError:!p,contentType:c,status:m}})(),p=(e,t,r,i="notebook")=>o(function*(){let n=l(e),o={};void 0!==r&&(o["If-Match"]=r),"notebook"!==i&&(o[d]=u);let s=yield(0,a.S)(n,{method:"POST",body:t,headers:o}),c=s.headers.get("Etag"),{status:p,statusText:m,ok:y}=s;return{sha:c,content:t,status:p,statusText:m,httpError:!y}})(),m=e=>o(function*(){let t=e.startsWith("/Workspace")?e:`/Workspace${e}`,r=`/ajax-api/2.0/workspace/list?path=${encodeURIComponent(t)}`,i=yield(0,a.S)(r);if(!i.ok)return[];let n=null;try{n=yield i.json()}catch{return[]}return(n?.objects??[]).map(e=>{let t;return{...e,path:(t=e.path).startsWith("/Workspace/")?t.slice(10):t}})})(),y=()=>(0,i.TC)(`${window.location.origin}/ajax-api/2.0/`);function f(e,t=!0){return o(function*(){return y().post("workspace/delete",{path:e,move_to_trash:t})})()}},820894:(e,t,r)=>{r.d(t,{Av:()=>E,BA:()=>b,GZ:()=>C,KE:()=>l,MM:()=>I,Os:()=>g,PO:()=>o,R1:()=>c,Uc:()=>S,Wo:()=>s,Wr:()=>v,XV:()=>k,YY:()=>n,_B:()=>_,_r:()=>p,mW:()=>f,n8:()=>m,pZ:()=>h,pr:()=>y,s$:()=>T,t6:()=>u,y0:()=>d});var i=r(699406),a=r(443927);let n=a.M.DEFAULT_TOKEN_CHANNEL,o=a.M.channelNames.indexOf("COMMENTS"),s=a.M.channelNames.indexOf("WHITESPACE"),l=",",d=".",u=" ",c="(",p=")",m=i.LX.line,y=i.LX.softline,f=e=>e.disableHardlines?i.LX.line:i.LX.hardline,h=i.LX.indent,g=i.LX.group,v=e=>t=>h(g(t,{id:e})),S=e=>[m,g(e)],E=i.LX.breakParent,b=i.LX.ifBreak,_=i.LX.lineSuffix,I=i.LX.align;class T extends Error{constructor(){super("Encountered SetConfigurationContext in a formatting context. This context cannot be formatted due to bad grammar structure. Just default back to old formatter for this case.")}}class k extends Error{constructor(){super("Encountered ResetConfigurationContext in a formatting context. This context cannot be formatted due to bad grammar structure. Just default back to old formatter for this case.")}}let C={printWidth:100,indentationWidth:2,indentationStyle:"spaces",numNewLinesBetweenClauses:0,numNewLinesBetweenStatements:1,commaPosition:"end",keywordCasing:"none",identifierCasing:"none",functionNameCasing:"none",shouldExpandCommaLists:!0,shouldExpandExpressions:!0,shouldExpandCaseStatements:!0,shouldExpandInStatements:!1,shouldExpandBetweenConditions:!1,shouldBreakOnJoinSections:!0}},835481:(e,t,r)=>{r.d(t,{$j:()=>l,NT:()=>o,Rt:()=>d,l9:()=>u});var i=r(720097),a=r.n(i),n=r(688789);let o="-",s={value:o,unit:"",divisor:1};function l(e){return a()(e)?(0,n.SF)(e,2):s}function d(e){if(!a()(e))return o;let t=2*!Number.isInteger(e);return e.toLocaleString(void 0,{minimumFractionDigits:t,maximumFractionDigits:t})}function u(e,t,{includePercentSign:r=!0,roundingFunctionName:i="round"}={}){if(!a()(e)||!a()(t)||!t)return o;return(0,Math[i])(e/t*100)+(r?"%":"")}},888708:(e,t,r)=>{r.d(t,{s:()=>m});var i=r(250912),a=r.n(i),n=r(441535),o=r(689017),s=r(886100),l=r(22191),d=r(711489),u=r(587122),c=r(44772);let p=/AS\s+\$\$(.*?)\$\$/gis;function m(e){let t=(0,n.W)("databricks.fe.editor.formatter.enableNewSqlFormatter",!1),r="{{"+(0,c.A)()+"}}",i=a()(e),o=[],d=p.exec(i);if(!t){for(;d;)o.push(d[1]),d=p.exec(i);i=i.replace(p,r)}if(i=(0,u.G)(i),t||!o)return y(!1),i;if(!t){let t=0;for(;i.match(r)&&t<o.length;){let e=o[t];i=i.replace(r,t=>"AS $$"+e+"$$"),t++}if(t!==o.length){var m;return m="FormatEmbeddedLangaugeError",s.iT.log(l.Es.Editor,"SqlFormatter",m),e}}return y(!0),i}function y(e){(0,o.wi)({editor_event_log:{editor_formatter_format_sql_log:{event_name:e?d.J5.EditorFormatterFormatSqlEventName.EDITOR_FORMATTER_FORMAT_SQL_EVENT_NAME_FORMAT_SQL_WITH_EMBEDDED_CODE:d.J5.EditorFormatterFormatSqlEventName.EDITOR_FORMATTER_FORMAT_SQL_EVENT_NAME_FORMAT_SQL_NO_EMBEDDED_CODE}}})}},919880:(e,t,r)=>{r.d(t,{BN:()=>c,Nr:()=>m,Qc:()=>p,an:()=>u,rc:()=>s});var i,a=r(278983),n=r(689017),o=r(711489),s=((i={}).COMPONENT_RENDER="component-render",i.COMPONENT_RENDER_ERROR="component-render-error",i.USER_CLICK="user-click",i.USER_UPDATE="user-update",i.USER_FOCUS="user-focus",i.API_SUCCESS="api-success",i.API_ERROR="api-error",i.ACTION_SUCCESS="action-success",i.ACTION_ERROR="action-error",i);let l={"component-render":o.$U.QueryInsightsActionType_Type.COMPONENT_RENDER,"component-render-error":o.$U.QueryInsightsActionType_Type.COMPONENT_RENDER_ERROR,"user-click":o.$U.QueryInsightsActionType_Type.USER_CLICK,"user-update":o.$U.QueryInsightsActionType_Type.USER_UPDATE,"user-focus":o.$U.QueryInsightsActionType_Type.USER_FOCUS,"api-success":o.$U.QueryInsightsActionType_Type.API_SUCCESS,"api-error":o.$U.QueryInsightsActionType_Type.API_ERROR,"action-success":o.$U.QueryInsightsActionType_Type.ACTION_SUCCESS,"action-error":o.$U.QueryInsightsActionType_Type.ACTION_ERROR};function d(e,...t){let[r,i,o]=t;(0,a.y)("clientsideEvent",{eventName:`${e}-${i}`,eventType:r,...o}),(0,n.wi)({legacy_clientside_event:{event_name:`${e}-${i}`,event_type:r,query_id:o?.queryId!==void 0?String(o.queryId):void 0,error_code:o?.error!==void 0?String(o.error):void 0,http_status_code:o?.http_status!==void 0||o?.httpStatusCode!==void 0?String(o.http_status??o.httpStatusCode??""):void 0,source:o?.source!==void 0?String(o.source):void 0,status:o?.status!==void 0?String(o.status):void 0}}),(0,n.wi)({query_insights_event_log:{event_name:`${e}-${i}`,event_type:l[r],query_id:o?.queryId!==void 0?String(o.queryId):void 0,source:o?.source!==void 0?String(o.source).toUpperCase():void 0,warehouse_type:o?.warehouseType!==void 0?String(o.warehouseType).toUpperCase().replace(/ /g,"_"):void 0,is_visible:o?.isVisible!==void 0?!!o.isVisible:void 0,runnable_command_id:o?.runnableCommandId!==void 0?String(o.runnableCommandId):void 0,query_start_time_to_access_time_duration:o?.queryStartTimeToAccessTimeDuration!==void 0?Number(o.queryStartTimeToAccessTimeDuration):void 0,referrer_name:o?.referrerName!==void 0?String(o.referrerName):void 0,is_admin:o?.isAdmin!==void 0?!!o.isAdmin:void 0,status:o?.status!==void 0?String(o.status):void 0,has_user_filter:o?.hasUserFilter!==void 0?!!o.hasUserFilter:void 0,has_duration_filter:o?.hasDurationFilter!==void 0?!!o.hasDurationFilter:void 0,has_status_filter:o?.hasStatusFilter!==void 0?!!o.hasStatusFilter:void 0,has_warehouse_filter:o?.hasWarehouseFilter!==void 0?!!o.hasWarehouseFilter:void 0,has_statement_filter:o?.hasStatementFilter!==void 0?!!o.hasStatementFilter:void 0,duration_sort:o?.durationSort!==void 0?String(o.durationSort):void 0,time_range_in_weeks:o?.timeRangeInWeeks!==void 0?Number(o.timeRangeInWeeks):void 0,estimated_tasks_enabled:o?.estimatedTasksEnabled!==void 0?!!o.estimatedTasksEnabled:void 0,task_progress_valid:o?.taskProgressValid!==void 0?!!o.taskProgressValid:void 0}})}function u(...e){d("query-history",...e)}function c(...e){d("query-profile",...e)}function p(e){u("user-click",`statement-source-filter-${e}`)}let m=e=>`query-profile-drawer-${e}`},946705:(e,t,r)=>{function i(e,t,r,i,a,n,o){try{var s=e[n](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(i,a)}r.d(t,{Lj:()=>c,TA:()=>p,UZ:()=>d,dq:()=>u,hF:()=>l,ny:()=>n});let a=/^(con|prn|aux|nul|com[0-9]|lpt[0-9])$|([<>:"/\\|?*])|(\.|\s)$/gi;function n(e,t){u(t,e,{fileExtension:"json",mimeType:"text/json"})}var o,s,l=((o={})[o.SUCCESS=0]="SUCCESS",o[o.FAILURE=1]="FAILURE",o[o.CANCELLED=2]="CANCELLED",o),d=((s={}).DBDASH="dbdash",s.LVDASH_JSON="lvdash.json",s);function u(e,t){var r;return(r=function*(e,t,{fileExtension:r="json",mimeType:i="text/json",charset:n="utf-8"}={}){let o=e.replace(a,"_"),s=`data:${i};charset=${n},`+encodeURIComponent(t),l=document.createElement("a");return l.href=s,l.download=`${o}.${r}`,l.click(),0},function(){var e=this,t=arguments;return new Promise(function(a,n){var o=r.apply(e,t);function s(e){i(o,a,n,s,l,"next",e)}function l(e){i(o,a,n,s,l,"throw",e)}s(void 0)})}).apply(this,arguments)}function c(e){p(({contents:t})=>{e(t)},{accept:"*"})}function p(e,t){let r=document.createElement("input");r.type="file",r.accept=t?.accept??".json",r.max="1",r.onchange=t=>{let r=t.target,i=new FileReader;i.onload=t=>{t.target?.result&&e({name:r?.files?.[0].name,contents:t.target.result.toString()})},i.readAsText(r?.files?.[0])},r.click()}},987229:(e,t,r)=>{r.d(t,{H5:()=>S,NQ:()=>b,Zh:()=>g,fd:()=>_,wG:()=>C,wg:()=>R});var i=r(46487),a=r.n(i),n=r(453471),o=r.n(n),s=r(692738),l=r(645787),d=r(686560),u=r(689017),c=r(886100),p=r(22191),m=r(711489),y=r(820894);function f(e,t,r,i,a,n,o){try{var s=e[n](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(i,a)}let h=a()({strict:!0,storeAsString:!0}),g=".dbsql-formatter-config.json",v=!1,S=()=>v,E=y.GZ,b=()=>o()(E),_=e=>{E={...E,...e}},I=["none","uppercase","lowercase"],T=e=>I.includes(e),k={printWidth:{typeValidation:e=>"number"==typeof e,valueValidation:e=>0<=e&&Number.isInteger(e)},indentationWidth:{typeValidation:e=>"number"==typeof e,valueValidation:e=>0<=e&&e<=99&&Number.isInteger(e)},indentationStyle:{typeValidation:e=>"spaces"===e||"tabs"===e,valueValidation:e=>"spaces"===e||"tabs"===e},numNewLinesBetweenClauses:{typeValidation:e=>"number"==typeof e,valueValidation:e=>0<=e&&e<=99&&Number.isInteger(e)},numNewLinesBetweenStatements:{typeValidation:e=>"number"==typeof e,valueValidation:e=>0<=e&&e<=99&&Number.isInteger(e)},commaPosition:{typeValidation:e=>"beginning"===e||"end"===e,valueValidation:e=>"beginning"===e||"end"===e},keywordCasing:{typeValidation:T,valueValidation:e=>["none","uppercase","lowercase"].includes(e)},identifierCasing:{typeValidation:T,valueValidation:e=>["none","uppercase","lowercase"].includes(e)},functionNameCasing:{typeValidation:T,valueValidation:e=>["none","uppercase","lowercase"].includes(e)},shouldExpandCommaLists:{typeValidation:e=>"boolean"==typeof e,valueValidation:e=>!0},shouldExpandExpressions:{typeValidation:e=>"boolean"==typeof e,valueValidation:e=>!0},shouldExpandCaseStatements:{typeValidation:e=>"boolean"==typeof e,valueValidation:e=>!0},shouldExpandInStatements:{typeValidation:e=>"boolean"==typeof e,valueValidation:e=>!0},shouldExpandBetweenConditions:{typeValidation:e=>"boolean"==typeof e,valueValidation:e=>!0},shouldBreakOnJoinSections:{typeValidation:e=>"boolean"==typeof e,valueValidation:e=>!0}},C=(e,t)=>{let r=k[e];return r.typeValidation(t)&&r.valueValidation(t)},R=({enabled:e=!0,memoizedCallback:t})=>{(0,s.useEffect)(()=>{var r,i;e&&(r=t??(()=>{}),(i=function*(){if(v)return;v=!0;try{let e=(0,d.d)("user_new",""),t=yield(0,l.qQ)(`/Users/${e}/${g}`);if(!t.httpError){let e=h.parse(t.data),r=(e=>{let t={};for(let r of Object.keys(k)){if(!(r in e))continue;let i=e[r];C(r,i)&&(t[r]=i)}return t})(e);E={...E,...r}}r()}catch(e){e instanceof SyntaxError?((0,u.wi)({editor_event_log:{new_sql_formatter_log:{event_name:m.J5.NewSqlFormatterEventName.NEW_SQL_FORMATTER_EVENT_NAME_INVALID_JSON}}}),c.iT.log(p.Es.Editor,"NewSqlFormatterInvalidJsonConfig",{error:e})):(0,u.wi)({editor_event_log:{new_sql_formatter_log:{event_name:m.J5.NewSqlFormatterEventName.NEW_SQL_FORMATTER_EVENT_NAME_ERROR_FETCHING_OPTIONS}}})}},function(){var e=this,t=arguments;return new Promise(function(r,a){var n=i.apply(e,t);function o(e){f(n,r,a,o,s,"next",e)}function s(e){f(n,r,a,o,s,"throw",e)}o(void 0)})})())},[t,e])}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/39943.26501d24b2.chunk.js.map