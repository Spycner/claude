"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[75787],{63837:(e,t,r)=>{r.d(t,{Z:()=>l,q:()=>s});var n=r(610435),a=r(692738);class i{all=new Map;subscribers=new Set;set(e,t){this.all.set(e,t),this.notifyChange()}remove(e){this.all.delete(e),this.notifyChange()}subscribe(e){return this.subscribers.add(e),()=>{this.subscribers.delete(e)}}notifyChange(){for(let e of this.subscribers)e(this.all)}}let s=new i,o=a.createContext(null),l=({children:e})=>{let[,t]=(0,a.useState)({}),r=()=>t({});return(0,a.useEffect)(()=>{s.all.size&&r();let e=s.subscribe(()=>{r()});return()=>{e()}},[]),(0,n.FD)(o.Provider,{value:s.all,children:[(0,n.Y)(d,{}),e]})},d=()=>{let e=(()=>{let e=(0,a.useContext)(o);if(!e)throw Error("Must wrap application in ModalProvider");return e})();return(0,n.Y)(n.FK,{children:[...e.entries()].map(([e,t])=>(0,n.Y)(a.Fragment,{children:t},e))})}},65061:(e,t,r)=>{r.d(t,{IT:()=>o,_l:()=>i._l,n_:()=>i.n_,sw:()=>s.s});var n=r(692738),a=r(32121),i=r(141078),s=r(710283);let o=(e,t)=>{let r=(0,i.IT)(e,t);return!function(e,t){let r=(0,n.useRef)(0),{startPolling:i,stopPolling:s,error:o,networkStatus:l}=e;(0,n.useEffect)(()=>{if(!t||l&&l<a.pT.ready)return;if(o){let e=r.current+1,n=t*Math.pow(2,e);n<36e5?(i(n),r.current=e):(s(),r.current=0)}else r.current>0&&(i(t),r.current=0)},[o,t,i,s,l])}(r,t?.pollInterval),r}},186694:(e,t,r)=>{r.d(t,{I:()=>s,T:()=>i});var n=r(692738),a=r(65061);function i(e,t){let[r,i]=(0,n.useState)(),{error:s,...l}=(0,a.IT)(e,{...t,onCompleted(r){let n=o({data:r,document:e});n?(i(n),t?.onError?.(n)):t?.onCompleted?.(r)}});return{error:s||r,...l}}function s(e,t){let[r,i]=(0,n.useState)(),[s,{error:l,...d}]=(0,a.n_)(e,{...t,onCompleted(r){let n=o({data:r,document:e});n?(i(n),t?.onError?.(n)):t?.onCompleted?.(r)}});return[(0,n.useCallback)(t=>{i(void 0);let r={...t};return r.onCompleted=r=>{let n=o({data:r,document:e});n?t?.onError?.(n):t?.onCompleted?.(r)},s(r)},[s,e]),{error:l||r,...d}]}function o({data:e,document:t}){let r,n,{apiError:a}=e["string"!=typeof(n="OperationDefinition"===(r=t.definitions[0]).kind?r.selectionSet.selections[0]:"")&&"Field"===n.kind?n.name.value:""]??{};return a}},227320:(e,t,r)=>{r.d(t,{_:()=>s,k:()=>o});var n=r(141078),a=r(186694),i=r(488690);let s=(0,n.J1)`
  query MarketplaceGetProviderState @component(name: "LakehouseCollaboration.Marketplace") {
    marketplaceGetProviderState(input: {}) {
      providerVisibility
      acceptedTerms
      canSeeProviderOnboarding
      apiError {
        ...ApiErrorFragment
      }
    }
  }
  ${i.vi}
`;function o(e={}){let{data:t,...r}=(0,a.T)(s,e);return{...t?.marketplaceGetProviderState??{acceptedTerms:[],providerVisibility:[],canSeeProviderOnboarding:!1},...r}}},258182:(e,t,r)=>{r.d(t,{Close:()=>v,Description:()=>h,Provider:()=>y,Root:()=>A,Title:()=>R,Viewport:()=>q});var n=r(610435),a=r(956935),i=r(593932),s=r(692738),o=r(79128),l=r(224098),d=r(429608),c=r(497895),u=r(658345),p=r(40894),E=r(705639),_=r(639712),S=r(53333),m=r(123252),I=r(661748),b=r(99206);let T=e=>e.preventDefault(),f=(0,a.i7)({from:{opacity:1},to:{opacity:0}}),g=(0,a.i7)({from:{transform:"translateX(calc(100% + 12px))"},to:{transform:"translateX(0)"}}),L=(0,a.i7)({from:{transform:"translateX(var(--radix-toast-swipe-end-x))"},to:{transform:"translateX(calc(100% + 12px))"}}),A=(0,s.forwardRef)(function({children:e,severity:t="info",componentId:r,analyticsEvents:o=[l.s7.OnView],...d},u){let{theme:A,classNamePrefix:R}=(0,c.wn)(),h=(0,s.useMemo)(()=>o,[o]),v=(0,l.ei)({componentType:l.v_.Notification,componentId:r,componentSubType:l.Ie[t],analyticsEvents:h,shouldStartInteraction:!1}),{elementRef:y}=(0,S.z)({onView:v.onView});return(0,n.Y)(i.bL,{ref:u,role:"listitem",css:(0,a.AH)({"&&":{position:"relative",display:"grid",background:A.colors.backgroundPrimary,padding:12,columnGap:4,boxShadow:A.shadows.lg,borderRadius:(0,b.S)(E.c.POPOVER_BORDER_RADIUS,A.borders.borderRadiusSm),lineHeight:"20px",borderColor:`1px solid ${A.colors.border}`,gridTemplateRows:"[header] auto [content] auto",gridTemplateColumns:"[icon] auto [content] 1fr [close] auto",...(0,_.WO)(A)},[`.${R}-notification-severity-icon`]:{gridRow:"header / content",gridColumn:"icon / icon",display:"inline-flex",alignItems:"center"},[`.${R}-btn`]:{display:"inline-flex",alignItems:"center",justifyContent:"center"},[`.${R}-notification-info-icon`]:{color:A.colors.textSecondary},[`.${R}-notification-success-icon`]:{color:A.colors.textValidationSuccess},[`.${R}-notification-warning-icon`]:{color:A.colors.textValidationWarning},[`.${R}-notification-error-icon`]:{color:A.colors.textValidationDanger},'&&[data-state="open"]':{animation:`${g} 300ms cubic-bezier(0.16, 1, 0.3, 1)`},'&[data-state="closed"]':{animation:`${f} 100ms ease-in`},'&[data-swipe="move"]':{transform:"translateX(var(--radix-toast-swipe-move-x))"},'&[data-swipe="cancel"]':{transform:"translateX(0)",transition:"transform 200ms ease-out"},'&[data-swipe="end"]':{animation:`${L} 100ms ease-out`}}),...d,...(0,m.VG)(),...(0,I.W)("databricks.fe.designsystem.notification.disableSwipeToClose",!1)?{onSwipeMove:T,onSwipeEnd:T}:{},children:(0,n.FD)("span",{role:"status","aria-live":"polite","aria-atomic":"true",style:{display:"contents"},children:[(0,n.Y)(p.z,{className:`${R}-notification-severity-icon ${R}-notification-${t}-icon`,severity:t,ref:y}),e]})})}),R=(0,s.forwardRef)(function({children:e,...t},r){let{theme:s}=(0,c.wn)();return(0,n.Y)(i.hE,{ref:r,css:(0,a.AH)({fontWeight:s.typography.typographyBoldFontWeight,color:s.colors.textPrimary,gridRow:"header / header",gridColumn:"content / content",userSelect:"text"}),...t,children:e})}),h=(0,s.forwardRef)(function({children:e,...t},r){let{theme:s}=(0,c.wn)();return(0,n.Y)(i.VY,{ref:r,css:(0,a.AH)({marginTop:4,color:s.colors.textPrimary,gridRow:"content / content",gridColumn:"content / content",userSelect:"text",wordBreak:"break-word"}),...t,children:e})}),v=(0,s.forwardRef)(function(e,t){let{theme:r}=(0,c.wn)(),{closeLabel:s,componentId:l,analyticsEvents:d,...p}=e;return(0,n.Y)("div",{style:{gridColumn:"close / close",gridRow:"header / content",width:20},children:(0,n.Y)(i.bm,{ref:t,css:(0,a.AH)({color:r.colors.textSecondary,position:"absolute",right:6,top:6}),...p,asChild:!0,children:(0,n.Y)(o.$n,{componentId:l||"codegen_design-system_src_design-system_notification_notification.tsx_224",analyticsEvents:d,icon:(0,n.Y)(u.A,{}),"aria-label":s??p["aria-label"]??"Close notification"})})})}),y=({children:e,...t})=>(0,n.Y)(i.Kq,{...t,children:e}),q=e=>{let{theme:t}=(0,c.wn)();return(0,n.Y)(i.LM,{className:d.Nb,style:{position:"fixed",top:0,right:0,display:"flex",flexDirection:"column",padding:12,gap:12,width:440,listStyle:"none",zIndex:t.options.zIndexBase+100,outline:"none",maxWidth:`calc(100% - ${t.spacing.lg}px)`},...e})}},368728:(e,t,r)=>{r.d(t,{CT:()=>c,N$:()=>l,Qt:()=>d,WL:()=>u});var n=r(692738),a=r(65061),i=r(141078),s=r(742500),o=r(488690);let l=(0,i.J1)`
  query MarketplaceGetListing($input: MarketplaceGetListingInput!, $includeUnpublishReason: Boolean = false)
  @component(name: "LakehouseCollaboration.Marketplace") {
    marketplaceGetListing(input: $input) {
      listing {
        ...ProviderListingFragment
      }
      apiError {
        ...ApiErrorFragment
      }
    }
  }
  ${s.AJ}
  ${o.vi}
`;function d(e,t){return(0,a.IT)(l,{fetchPolicy:"cache-and-network",variables:{input:{id:e},includeUnpublishReason:!0},...t})}function c(){return(0,i._l)(l,{fetchPolicy:"cache-and-network"})}function u(e){let t=(0,i.mK)().readQuery({query:l,variables:{input:{id:e}}});return(0,n.useMemo)(()=>t?.marketplaceGetListing?.listing??null,[t])}},403286:(e,t,r)=>{r.d(t,{CN:()=>s,Qf:()=>u,R6:()=>o,VZ:()=>i,YW:()=>c,eE:()=>a,x6:()=>l,yO:()=>n});let n={ALERTS_LIST:"dbsql.alerts_list.index",ALERTS_LIST_ALL:"dbsql.alerts_list.all",ALERTS_LIST_MY:"dbsql.alerts_list.my",ALERTS_LIST_ADMIN:"dbsql.alerts_list.admin"},a={ALERTS_NEW:"dbsql.alerts.new",ALERTS_VIEW:"dbsql.alerts.view",ALERTS_EDIT:"dbsql.alerts.edit"},i={ALERTS_V2_LIST_ALL:"dbsql.alerts_v2_list.all",ALERTS_V2_LIST_FAVORITES:"dbsql.alerts_v2_list.favorites",ALERTS_V2_LIST_MY:"dbsql.alerts_v2_list.my"},s={EDITOR_NEW:"dbsql.editor.new",EDITOR_ROOT:"dbsql.editor.index",EDITOR_SET_TAB:"dbsql.editor.query"},o={LEGACY_EDITOR_QUERY:"dbsql.editor_legacy.redirect.query",LEGACY_EDITOR_SOURCE:"dbsql.editor_legacy.redirect.source"},l={QUERIES_LIST:"dbsql.queries_list.index",QUERIES_LIST_ALL:"dbsql.queries_list.all",QUERIES_LIST_MY:"dbsql.queries_list.my",QUERIES_LIST_ADMIN:"dbsql.queries_list.admin",QUERIES_LIST_FAVORITES:"dbsql.queries_list.favorites"},d={...o,DATA_SOURCES_LIST:"dbsql.data_sources_list.index",DATA_SOURCES_NEW:"dbsql.data_sources_list.new",DATA_SOURCES_EDIT:"dbsql.data_sources.edit",DESTINATIONS_LIST:"dbsql.destinations_list.redirect.index",DESTINATIONS_NEW:"dbsql.destinations_list.redirect.new",DESTINATIONS_EDIT:"dbsql.destinations.redirect.edit",PAT_SETTINGS:"dbsql.settings.pat_list.redirect",SQL_SETTINGS_EDGE:"dbsql.settings.edge_general_settings.redirect",USER_ACCOUNT_SETTINGS:"dbsql.settings.user_account.redirect"},c={LAKEHOUSE_SETTINGS:"dbsql.warehouses.mfe_settings",QUERY_SNIPPETS:"dbsql.query_snippets",...n,...a,...i,ALERTS_V2_NEW:"dbsql.alerts_v2.new",ALERTS_V2_VIEW:"dbsql.alerts_v2.view",ALERTS_V2_EDIT:"dbsql.alerts_v2.edit",ALERTS_V2_EVALUATION_DETAILS:"dbsql.alerts_v2.evaluation_details",...s,LAKEHOUSES_LIST:"dbsql.warehouses_list.index",LAKEHOUSES_NEW:"dbsql.warehouses_list.new",LAKEHOUSES_EDIT:"dbsql.warehouses.edit",LAKEHOUSES_VIEW:"dbsql.warehouses.view.index",LAKEHOUSES_VIEW_TAB:"dbsql.warehouses.view.tab",...l,...d,SQL_SETTINGS_FLAGS:"dbsql.dev_settings.flags.all",SQL_SETTINGS_FLAG_PREVIEW:"dbsql.dev_settings.flags.single",DASHBOARDS_LIST_DEFAULT:"dbsql.dashboards.list",DASHBOARDS_LIST_ALL:"dbsql.dashboards.all",DASHBOARDS_LIST_FAVORITES:"dbsql.dashboards.favorites",DASHBOARDS_LIST_MY:"dbsql.dashboards.my",DASHBOARDS_LIST_ADMIN:"dbsql.dashboards.admin",DASHBOARDS_NEW:"dbsql.dashboards.new",DASHBOARDS_VIEW_EDIT:"dbsql.dashboards.view_edit",DASHBOARDS_SAMPLE_DASHBOARDS:"dbsql.dashboards.samples",UNSUBSCRIBE:"dbsql.subscriptions.unsubscribe"},u={[c.ALERTS_LIST]:"/sql/alerts",[c.ALERTS_LIST_ALL]:"/sql/alerts/all",[c.ALERTS_LIST_MY]:"/sql/alerts/my",[c.ALERTS_LIST_ADMIN]:"/sql/alerts/admin",[c.ALERTS_NEW]:"/sql/alerts/new",[c.ALERTS_VIEW]:"/sql/alerts/:alertId",[c.ALERTS_EDIT]:"/sql/alerts/:alertId/edit",[c.ALERTS_V2_LIST_ALL]:"/sql/alerts-v2/all",[c.ALERTS_V2_LIST_FAVORITES]:"/sql/alerts-v2/all?view=favorites",[c.ALERTS_V2_LIST_MY]:"/sql/alerts-v2",[c.ALERTS_V2_NEW]:"/sql/alerts-v2/new",[c.ALERTS_V2_VIEW]:"/sql/alerts-v2/:alertId",[c.ALERTS_V2_EDIT]:"/sql/alerts-v2/:alertId/edit",[c.ALERTS_V2_EVALUATION_DETAILS]:"/sql/alerts-v2/:alertId/evaluations/:taskRunId",[c.DASHBOARDS_VIEW_EDIT]:"/sql/dashboards/:dashboardId",[c.DASHBOARDS_LIST_DEFAULT]:"/sql/dashboards",[c.DASHBOARDS_LIST_ALL]:"/sql/dashboards/all",[c.DASHBOARDS_LIST_FAVORITES]:"/sql/dashboards/favorites",[c.DASHBOARDS_LIST_MY]:"/sql/dashboards/my",[c.DASHBOARDS_LIST_ADMIN]:"/sql/dashboards/admin",[c.DASHBOARDS_NEW]:"/sql/dashboards/new",[c.DASHBOARDS_SAMPLE_DASHBOARDS]:"/sql/dashboards/samples",[c.DATA_SOURCES_LIST]:"/sql/data_sources",[c.DATA_SOURCES_NEW]:"/sql/data_sources/new",[c.DATA_SOURCES_EDIT]:"/sql/data_sources/:dataSourceId",[c.DESTINATIONS_LIST]:"/sql/destinations",[c.DESTINATIONS_NEW]:"/sql/destinations/new",[c.DESTINATIONS_EDIT]:"/sql/destinations/:destinationId",[c.EDITOR_NEW]:"/sql/editor/new",[c.EDITOR_ROOT]:"/sql/editor",[c.EDITOR_SET_TAB]:"/sql/editor/:queryId",[c.LAKEHOUSE_SETTINGS]:"/sql/settings/warehouses",[c.LAKEHOUSES_EDIT]:"/sql/warehouses/:id/edit",[c.LAKEHOUSES_LIST]:"/sql/warehouses",[c.LAKEHOUSES_NEW]:"/sql/warehouses/new",[c.LAKEHOUSES_VIEW]:"/sql/warehouses/:id",[c.LAKEHOUSES_VIEW_TAB]:"/sql/warehouses/:id/:tab",[c.LEGACY_EDITOR_QUERY]:"/sql/queries/:queryId",[c.LEGACY_EDITOR_SOURCE]:"/sql/queries/:queryId/source",[c.PAT_SETTINGS]:"/sql/personal_access_tokens",[c.SQL_SETTINGS_EDGE]:"/sql/settings/general",[c.SQL_SETTINGS_FLAGS]:"/sql/settings/flags",[c.SQL_SETTINGS_FLAG_PREVIEW]:"/sql/settings/preview",[c.QUERIES_LIST]:"/sql/queries",[c.QUERIES_LIST_ALL]:"/sql/queries/all",[c.QUERIES_LIST_MY]:"/sql/queries/my",[c.QUERIES_LIST_ADMIN]:"/sql/queries/admin",[c.QUERIES_LIST_FAVORITES]:"/sql/queries/favorites",[c.QUERY_SNIPPETS]:"/sql/query-snippets",[c.USER_ACCOUNT_SETTINGS]:"/sql/account",[c.UNSUBSCRIBE]:"/sql/unsubscribe/:subscriptionId"}},488690:(e,t,r)=>{r.d(t,{FO:()=>s,XE:()=>i,vi:()=>a});var n=r(141078);let a=(0,n.J1)`
  fragment ApiErrorFragment on ApiError {
    code
    message
    helpUrl
    traceId
  }
`,i=(0,n.J1)`
  fragment FileInfoFragment on MarketplaceFileInfo {
    id
    downloadLink
    displayName
    fileParent {
      fileParentType
      parentId
    }
    marketplaceFileType
    mimeType
    updatedAt
    createdAt
  }
`,s=(0,n.J1)`
  fragment ProviderIconFragment on MarketplaceProviderIcon {
    providerId
    encodedIcon
  }
`},509695:(e,t,r)=>{r.d(t,{h:()=>c,p:()=>d});var n=r(610435),a=r(452137),i=r.n(a),s=r(692738),o=r(566512);let l=(0,s.createContext)(void 0),d=({children:e})=>{let[t,r]=(0,o.o)();return(0,n.FD)(l.Provider,{value:t,children:[e,r]})},c=()=>{let e=(0,s.useContext)(l);return i()(null!=e,"Must wrap child in NotificationProvider"),e}},559706:(e,t,r)=>{r.d(t,{Ei:()=>o,Me:()=>a,Pj:()=>s,UC:()=>i,Yq:()=>u,hf:()=>c,kV:()=>d,tA:()=>p,vt:()=>l});var n=r(441535);let a=e=>{if(e)return!0;return(0,n.W)("com.databricks.marketplace.enableMcpListing",!1)},i=()=>(0,n.W)("databricks.fe.marketplace.enableApps",!1),s=()=>(0,n.W)("com.databricks.marketplace.allowPublishingMcp",!1),o=()=>(0,n.W)("databricks.fe.marketplace.mcpRedirectToTools",!1),l=()=>(0,n.W)("databricks.fe.marketplace.enableClosedSourceAppConsumption",!1),d=()=>(0,n.W)("databricks.fe.marketplace.appInstallEnabled",!1),c=()=>(0,n.W)("databricks.fe.marketplace.enableClosedSourceAppPublishing",!1)||(0,n.W)("publish_closed_source_apps",!1),u=()=>c()||l(),p=()=>(0,n.W)("databricks.fe.marketplace.enableEmbeddedMarkdown",!0)},581509:(e,t,r)=>{r.d(t,{$n:()=>d,cq:()=>c,ll:()=>l});var n=r(692738),a=r(141078),i=r(186694),s=r(488690),o=r(559706);let l=(0,a.J1)`
  query MarketplaceListListingResourcesForProvider(
    $input: MarketplaceListListingResourceForProviderRequestInput!
    $includeClosedSourceAppFields: Boolean = false
  ) @component(name: "LakehouseCollaboration.Marketplace") {
    marketplaceListListingResourcesForProvider(input: $input) {
      resource {
        snapshot {
          id
          app {
            sourceCodeVisibility
            appId @include(if: $includeClosedSourceAppFields)
            sourceCodeGit {
              gitUrl
              directory
              tag
            }
            networkPolicy @include(if: $includeClosedSourceAppFields) {
              allowedInternetDestinations {
                destination
                internetDestinationType
              }
            }
            manifest @include(if: $includeClosedSourceAppFields) {
              name
              description
              userApiScopes
              resourceSpecs {
                name
                description
                sqlWarehouseSpec {
                  permission
                }
                servingEndpointSpec {
                  permission
                }
                jobSpec {
                  permission
                }
                secretSpec {
                  permission
                }
                ucSecurableSpec {
                  securableType
                  permission
                }
                databaseInstanceSpec {
                  name
                  databaseName
                  permission
                }
                databaseSpec {
                  instanceName
                  databaseName
                  permission
                }
                genieSpaceSpec {
                  name
                  permission
                }
                experimentSpec {
                  permission
                }
                appSpec {
                  name
                  permission
                }
                postgresSpec {
                  branch
                  database
                  permission
                }
              }
            }
          }
          ucHttpConnection @includeSafex(name: "com.databricks.marketplace.allowPublishingMcp", defaultValue: false) {
            host
            port
            basePath
            isMcp
            credentials {
              credentialType
              tokenEndpoint
              authorizationEndpoint
              oauthScope
              oauthCredentialExchangeMethod
            }
          }
          versionInfo {
            versionLabel
            versionReleaseNote
          }
        }
      }
      apiError {
        ...ApiErrorFragment
      }
    }
  }
  ${s.vi}
`;function d(e,t={}){let{data:r,...a}=(0,i.T)(l,{variables:{input:{listingId:e},includeClosedSourceAppFields:(0,o.hf)()},fetchPolicy:"cache-and-network",...t});return{resource:(0,n.useMemo)(()=>r?.marketplaceListListingResourcesForProvider?.resource?.[0]??null,[r]),...a}}function c(e){let t=(0,a.mK)().readQuery({query:l,variables:{input:{listingId:e},includeClosedSourceAppFields:(0,o.hf)()}});return(0,n.useMemo)(()=>t?.marketplaceListListingResourcesForProvider?.resource?.[0]??null,[t])}},646216:(e,t,r)=>{var n=r(610435),a=r(322435),i=r(500710),s=r.n(i),o=r(63837);["info","success","error","warn","warning","confirm"].forEach(e=>{a.A[e]=t=>{let r=s()(),{onCancel:i,onOk:l,content:d,...c}=t,u={onOk:(...e)=>{l?.(...e),p()},onCancel:(...e)=>{i?.(...e),p()},visible:!0,cancelButtonProps:{...c.cancelButtonProps,..."confirm"!==e&&{style:{display:"none"}}},children:d},p=()=>{o.q.set(r,(0,n.Y)(a.A,{...c,...u,visible:!1,afterClose:()=>{o.q.remove(r)}}))};return o.q.set(r,(0,n.Y)(a.A,{...c,...u})),{destroy:p,update:e=>{o.q.set(r,(0,n.Y)(a.A,{...c,...e,...u}))}}}})},675298:(e,t,r)=>{r.d(t,{E:()=>o,L:()=>s});var n=r(610435),a=r(692738);let i=a.createContext(!0);function s({required:e,children:t}){return(0,n.Y)(i.Provider,{value:e,children:t})}function o(){return(0,a.useContext)(i)}},710283:(e,t,r)=>{r.d(t,{s:()=>o});var n=r(650003),a=r(692738),i=r(141078),s=r(940912);function o(e,t){let r=(0,i.mK)(t?.client),[o,l]=(0,a.useState)(()=>{if(t?.skip)return null;return r.subscribe({query:e,variables:t?.variables,fetchPolicy:t?.fetchPolicy,context:{...t?.context,currentImplicitContext:(0,s.yB)()}})}),d=(0,a.useRef)(!1);(0,a.useEffect)(()=>()=>{d.current=!0},[]);let c=(0,a.useRef)({client:r,subscription:e,options:t});(0,a.useEffect)(()=>{let a=t?.shouldResubscribe;"function"==typeof a&&(a=!!a(t)),t?.skip?(!t?.skip!=!c.current.options?.skip||d.current)&&(l(null),d.current=!1):(!1!==a&&(r!==c.current.client||e!==c.current.subscription||t?.fetchPolicy!==c.current.options?.fetchPolicy||!t?.skip!=!c.current.options?.skip||!(0,n.L)(t?.variables,c.current.options?.variables))||d.current)&&(l(r.subscribe({query:e,variables:t?.variables,fetchPolicy:t?.fetchPolicy,context:{...t?.context,currentImplicitContext:(0,s.yB)()}})),d.current=!1),Object.assign(c.current,{client:r,subscription:e,options:t})},[r,e,t,d.current]),(0,a.useEffect)(()=>{if(!o)return;let e=o.subscribe({next(e){let n={loading:!1,data:e.data,error:void 0,variables:t?.variables};c.current.options?.onSubscriptionData?.({client:r,subscriptionData:n})},error(e){c.current.options?.onError?.(e)},complete(){c.current.options?.onSubscriptionComplete?.()}});return()=>{e.unsubscribe()}},[o])}},713618:(e,t,r)=>{var n=r(610435),a=r(22191),i=r(726977),s=r(237241);r(111671);var o=r(509695),l=r(817148),d=r(690056),c=r(87221),u=r(774540),p=r(352954),E=r(227320),_=r(368728),S=r(581509);let m={access:l.g3.MARKETPLACE,pageId:d.zL.HOME,path:d.w8.getPaths()[d.zL.HOME],element:(0,u.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(67590),r.e(6932),r.e(20022),r.e(44004),r.e(54511),r.e(159),r.e(74767),r.e(72031),r.e(79901),r.e(99918),r.e(2118),r.e(11798),r.e(87828),r.e(93877),r.e(26546),r.e(63760),r.e(2922),r.e(51758),r.e(94835),r.e(40066),r.e(25688),r.e(11970),r.e(30209)]).then(r.bind(r,114943));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(114943,"../homepage/Marketplace","lazy",e);return e()})()),esComponent:a.Es.Marketplace},I={access:l.g3.MARKETPLACE,pageId:d.zL.PROVIDER,path:d.w8.getPaths()[d.zL.PROVIDER],element:(0,u.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(36993),r.e(67590),r.e(6932),r.e(20022),r.e(5033),r.e(59276),r.e(59794),r.e(78580),r.e(44004),r.e(54511),r.e(159),r.e(74767),r.e(47589),r.e(54872),r.e(33163),r.e(473),r.e(42797),r.e(49029),r.e(10133),r.e(99918),r.e(5830),r.e(3341),r.e(73208),r.e(42934),r.e(70510),r.e(11577),r.e(62707),r.e(96931),r.e(49649),r.e(93877),r.e(63760),r.e(2922),r.e(94835),r.e(40066),r.e(63566),r.e(16665),r.e(73227),r.e(3358)]).then(r.bind(r,242040));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(242040,"../provider/Provider","lazy",e);return e()})()),esComponent:a.Es.Marketplace},b={access:l.g3.MARKETPLACE,pageId:d.zL.PROVIDER_LISTING_DETAILS,path:d.w8.getPaths()[d.zL.PROVIDER_LISTING_DETAILS],element:(0,u.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(36993),r.e(67590),r.e(6932),r.e(20022),r.e(5033),r.e(59276),r.e(44004),r.e(54511),r.e(159),r.e(92922),r.e(74767),r.e(10596),r.e(97786),r.e(47589),r.e(47017),r.e(20689),r.e(83552),r.e(67403),r.e(54872),r.e(72031),r.e(79901),r.e(12447),r.e(30585),r.e(99918),r.e(2118),r.e(87828),r.e(93877),r.e(63760),r.e(2922),r.e(51758),r.e(94835),r.e(40066),r.e(95961),r.e(63566),r.e(9751),r.e(66659)]).then(r.bind(r,853205));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(853205,"../provider/listings/ListingDetails","lazy",e);return e()})()),esComponent:a.Es.Marketplace},T={access:l.g3.MARKETPLACE,pageId:d.zL.PROVIDER_CREATE_LISTING,path:d.w8.getPaths()[d.zL.PROVIDER_CREATE_LISTING],element:(0,u.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(36993),r.e(67590),r.e(6932),r.e(20022),r.e(5033),r.e(59276),r.e(78580),r.e(44004),r.e(54511),r.e(159),r.e(92922),r.e(74767),r.e(97421),r.e(37072),r.e(10596),r.e(97786),r.e(47589),r.e(47017),r.e(20689),r.e(83552),r.e(67403),r.e(17258),r.e(64864),r.e(54872),r.e(72031),r.e(79901),r.e(12447),r.e(30585),r.e(42797),r.e(49029),r.e(10133),r.e(70510),r.e(11577),r.e(62707),r.e(96931),r.e(49649),r.e(93877),r.e(63760),r.e(2922),r.e(13546),r.e(51758),r.e(94835),r.e(40066),r.e(95961),r.e(52070),r.e(14050),r.e(63566),r.e(16665),r.e(9751),r.e(63409),r.e(63804)]).then(r.bind(r,863804));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(863804,"../provider/listings/CreateListing","lazy",e);return e()})()),esComponent:a.Es.Marketplace},f={access:l.g3.MARKETPLACE,pageId:d.zL.PROVIDER_EDIT_LISTING,path:d.w8.getPaths()[d.zL.PROVIDER_EDIT_LISTING],element:(0,u.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(36993),r.e(67590),r.e(6932),r.e(20022),r.e(5033),r.e(59276),r.e(78580),r.e(44004),r.e(54511),r.e(159),r.e(92922),r.e(74767),r.e(97421),r.e(37072),r.e(10596),r.e(97786),r.e(47589),r.e(47017),r.e(20689),r.e(83552),r.e(67403),r.e(17258),r.e(64864),r.e(54872),r.e(72031),r.e(79901),r.e(12447),r.e(30585),r.e(42797),r.e(49029),r.e(10133),r.e(70510),r.e(11577),r.e(62707),r.e(96931),r.e(49649),r.e(93877),r.e(63760),r.e(2922),r.e(13546),r.e(51758),r.e(94835),r.e(40066),r.e(95961),r.e(52070),r.e(14050),r.e(63566),r.e(16665),r.e(9751),r.e(63409),r.e(58308)]).then(r.bind(r,158308));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(158308,"../provider/listings/EditListing","lazy",e);return e()})()),esComponent:a.Es.Marketplace,prefetchEnabledFlag:"databricks.fe.marketplace.enableCreateListingWizard",prefetchQueries:[{query:E._},{query:_.N$,variables:{input:{id:(0,p.tR)("listingId")},includeUnpublishReason:!0}},{query:S.ll,variables:{input:{listingId:(0,p.tR)("listingId")}}}]},g={access:l.g3.MARKETPLACE,pageId:d.zL.PROVIDER_EXCHANGE,path:d.w8.getPaths()[d.zL.PROVIDER_EXCHANGE],element:(0,u.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(36993),r.e(67590),r.e(6932),r.e(20022),r.e(5033),r.e(59276),r.e(44004),r.e(54511),r.e(159),r.e(74767),r.e(47589),r.e(54872),r.e(33163),r.e(99918),r.e(2118),r.e(87828),r.e(93877),r.e(63760),r.e(23739)]).then(r.bind(r,830879));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(830879,"../provider/exchanges/ExchangeDetails","lazy",e);return e()})()),esComponent:a.Es.Marketplace},L={access:l.g3.MARKETPLACE,pageId:d.zL.PROVIDER_CREATE_PROFILE,path:d.w8.getPaths()[d.zL.PROVIDER_CREATE_PROFILE],element:(0,u.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(36993),r.e(67590),r.e(6932),r.e(44004),r.e(45854),r.e(54511),r.e(54872),r.e(66436),r.e(99918),r.e(2118),r.e(93877),r.e(63760),r.e(5553),r.e(5385)]).then(r.bind(r,727766));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(727766,"../provider/profile/CreateProfile","lazy",e);return e()})()),esComponent:a.Es.Marketplace},A={access:l.g3.MARKETPLACE,pageId:d.zL.PROVIDER_EDIT_PROFILE,path:d.w8.getPaths()[d.zL.PROVIDER_EDIT_PROFILE],element:(0,u.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(36993),r.e(67590),r.e(6932),r.e(44004),r.e(45854),r.e(54511),r.e(54872),r.e(66436),r.e(99918),r.e(2118),r.e(93877),r.e(63760),r.e(5553),r.e(58871)]).then(r.bind(r,758871));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(758871,"../provider/profile/EditProfile","lazy",e);return e()})()),esComponent:a.Es.Marketplace},R={access:l.g3.MARKETPLACE,pageId:d.zL.CONSUMER_PROVIDERS,path:d.w8.getPaths()[d.zL.CONSUMER_PROVIDERS],element:(0,u.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(36993),r.e(67590),r.e(6932),r.e(44004),r.e(54511),r.e(54872),r.e(21674),r.e(99918),r.e(2118),r.e(11798),r.e(93877),r.e(26546),r.e(63760),r.e(25688),r.e(73278)]).then(r.bind(r,348195));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(348195,"../consumer/ProvidersList/ProvidersList","lazy",e);return e()})()),esComponent:a.Es.Marketplace},h={access:l.g3.MARKETPLACE,pageId:d.zL.CONSUMER_PROVIDER_DETAILS,path:d.w8.getPaths()[d.zL.CONSUMER_PROVIDER_DETAILS],element:(0,u.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(36993),r.e(67590),r.e(6932),r.e(20022),r.e(44004),r.e(54511),r.e(159),r.e(74767),r.e(54872),r.e(72031),r.e(79901),r.e(99918),r.e(2118),r.e(11798),r.e(87828),r.e(93877),r.e(26546),r.e(63760),r.e(2922),r.e(51758),r.e(94835),r.e(40066),r.e(25688),r.e(90331)]).then(r.bind(r,80187));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(80187,"../consumer/ProviderDetails/ProviderDetails","lazy",e);return e()})()),esComponent:a.Es.Marketplace},v={access:l.g3.MARKETPLACE,pageId:d.zL.CONSUMER,path:d.w8.getPaths()[d.zL.CONSUMER],element:(0,u.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(36993),r.e(67590),r.e(6932),r.e(20022),r.e(5033),r.e(59276),r.e(59794),r.e(44004),r.e(54511),r.e(159),r.e(74767),r.e(47589),r.e(54872),r.e(33163),r.e(99918),r.e(2118),r.e(11798),r.e(87828),r.e(93877),r.e(26546),r.e(63760),r.e(25688),r.e(73227),r.e(29047)]).then(r.bind(r,913925));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(913925,"../consumer/Consumer","lazy",e);return e()})()),esComponent:a.Es.Marketplace},y={access:l.g3.MARKETPLACE,pageId:d.zL.CONSUMER_LISTING_DETAILS,path:d.w8.getPaths()[d.zL.CONSUMER_LISTING_DETAILS],element:(0,u.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(54497),r.e(33764),r.e(78277),r.e(36993),r.e(67590),r.e(6932),r.e(20022),r.e(5033),r.e(59276),r.e(59794),r.e(78580),r.e(44004),r.e(54511),r.e(159),r.e(20556),r.e(92922),r.e(74767),r.e(37072),r.e(10596),r.e(78756),r.e(89187),r.e(81318),r.e(97786),r.e(47589),r.e(70419),r.e(46184),r.e(14243),r.e(86107),r.e(47017),r.e(20689),r.e(67403),r.e(72031),r.e(42797),r.e(49029),r.e(10133),r.e(47323),r.e(92792),r.e(63121),r.e(79832),r.e(36921),r.e(70510),r.e(11577),r.e(37140),r.e(62707),r.e(96931),r.e(82031),r.e(42272),r.e(30908),r.e(93877),r.e(26546),r.e(63760),r.e(6870),r.e(2922),r.e(68005),r.e(51758),r.e(21018),r.e(91050),r.e(94835),r.e(40066),r.e(21410),r.e(25688),r.e(10458),r.e(95961),r.e(14050),r.e(79119),r.e(27551),r.e(85108),r.e(6877)]).then(r.bind(r,536753));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(536753,"../consumer/ListingDetails/ListingDetails","lazy",e);return e()})()),esComponent:a.Es.Marketplace,observability:{productEntityChain:[{productEntityType:c.Lm.MARKETPLACE_CONSUMER_LISTING,routeParamId:"listingId"}]}},q={access:l.g3.MARKETPLACE,pageId:d.zL.CONSUMER_PARTNERCONNECT,path:d.w8.getPaths()[d.zL.CONSUMER_PARTNERCONNECT],element:(0,u.e)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(36993),r.e(67590),r.e(6932),r.e(20022),r.e(5033),r.e(78580),r.e(44004),r.e(54511),r.e(159),r.e(74767),r.e(54872),r.e(72031),r.e(79901),r.e(92869),r.e(42797),r.e(49029),r.e(10133),r.e(99918),r.e(5830),r.e(3341),r.e(73208),r.e(42934),r.e(70510),r.e(11577),r.e(62707),r.e(96931),r.e(49934),r.e(25230),r.e(93877),r.e(26546),r.e(63760),r.e(2922),r.e(51758),r.e(94835),r.e(40066),r.e(25688),r.e(85108),r.e(85862)]).then(r.bind(r,660786));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(660786,"../consumer/PartnerConnect/PartnerConnectPage/PartnerConnectPage","lazy",e);return e()})()),esComponent:a.Es.Marketplace};var P=r(956578),k=r(692738),D=r(675298);let C=k.createContext({isDbsql:!0,requireSqlService:!0});function O({value:e,children:t}){return(0,n.Y)(C.Provider,{value:e,children:(0,n.Y)(D.L,{required:e.requireSqlService,children:t})})}function M(){return(0,n.Y)(O,{value:{isDbsql:!1,requireSqlService:!1},children:(0,n.Y)(o.p,{children:(0,n.Y)(P.l,{basePrefix:"/",enableNavigationIntent:!1,routes:[m,I,T,f,b,v,q,R,h,y,g,L,A]})})})}let w="databricks-marketplace";class N extends s.N{static get observedAttributes(){return[...super.observedAttributes]}constructor(){super({cacheKey:w,renderRootComponent:()=>(0,n.Y)(M,{}),enablePanelBoundary:!0,esComponent:a.Es.Marketplace,errorBoundaryId:i.s.MarketplaceRoot})}}customElements.define(w,N),(0,r(724221).K)(!0)},742500:(e,t,r)=>{r.d(t,{$c:()=>o,AJ:()=>i,D7:()=>s,VZ:()=>l,zp:()=>d});var n=r(141078),a=r(488690);let i=(0,n.J1)`
  fragment ProviderListingFragment on MarketplaceListing {
    id
    unpublishReason @include(if: $includeUnpublishReason)
    detail {
      description
      documentationLink
      termsOfService
      privacyPolicyLink
      license
      collectionDateStart
      collectionDateEnd
      collectionGranularity {
        unit
        interval
      }
      cost
      dataSource
      geographicalCoverage
      size
      assets
      tags {
        tagName
        tagValues
      }
      updateFrequency {
        unit
        interval
      }
      embeddedNotebookFileInfos {
        ...FileInfoFragment
      }
    }
    summary {
      categories
      providerRegion {
        cloud
        region
      }
      listingType
      createdAt
      createdBy
      name
      providerId
      publishedAt
      publishedBy
      setting {
        filters {
          filterType
          filterValue
        }
        visibility
      }
      gitRepo {
        gitRepoUrl
      }
      share {
        name
        type
      }
      status
      subtitle
      updatedAt
      updatedBy
      exchangeIds
    }
  }
  ${a.XE}
`,s=(0,n.J1)`
  fragment ProviderPersonalizationRequestFragment on MarketplacePersonalizationRequest {
    comment
    consumerRegion {
      cloud
      region
    }
    contactInfo {
      email
      lastName
      firstName
      company
    }
    id
    metastoreId
    createdAt
    intendedUse
    listingId
    providerId
    recipientType
    share {
      name
      type
    }
    status
    statusMessage
    updatedAt
  }
`,o=(0,n.J1)`
  fragment ProviderExchangeFilterFragment on MarketplaceExchangeFilter {
    id
    exchangeId
    name
    filterValue
    filterType
    createdAt
  }
`,l=(0,n.J1)`
  fragment ProviderExchangeListingFragment on MarketplaceExchangeListing {
    id
    createdAt
    createdBy
    exchangeId
    exchangeName
    listingId
    listingName
  }
`,d=(0,n.J1)`
  fragment ProviderExchangeFragment on MarketplaceExchange {
    id
    filters {
      ...ProviderExchangeFilterFragment
    }
    linkedListings {
      ...ProviderExchangeListingFragment
    }
    name
    createdBy
    updatedAt
  }
  ${o}
  ${l}
`},917950:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(513384);function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?Object(arguments[t]):{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&a.push.apply(a,Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),a.forEach(function(t){(0,n.A)(e,t,r[t])})}return e}},943336:(e,t,r)=>{r.d(t,{R:()=>d});var n=r(692738),a=r(441535),i=r(940912),s=r(967166),o=r(87221),l=r(327152);let d=e=>{let t=e?.ref,r=e?.disabled,d=(0,s.hG)(),c=(0,n.useCallback)(e=>t=>{var r;t.stopPropagation();let{pageId:n,pageViewId:i}=(0,l.t)()??{pageId:"",pageViewId:""},[s,c]=(0,a.W)("databricks.fe.observability.enableClipboardAnalyticsParentWalk",!0)?function(e){let t=e,r=0;for(;t&&r<50;){let e=t.dataset?.componentType,n=t.dataset?.componentId;if(e&&n)return[e,n];t=t.parentElement,r++}return[void 0,void 0]}(t.target):(r=t.target,[r?.dataset?.componentType,r?.dataset?.componentId]);(0,o.s_)(d,{eventType:e,eventPayload:{interactionSubject:!0,referrerEntity:s&&c?{entityType:"component",entitySubType:s,entityId:c}:void 0},eventEntity:{entityType:"page",entitySubType:void 0,entityId:n,entityViewId:i},eventClientSource:"unified_router"})},[d]);(0,n.useEffect)(()=>{if(r)return;if(t&&!t.current)throw Error("useSetupClipboardObserver was called with an empty ref");let e=t?.current??document,n=(0,i.yB)(),a=n.wrap(c("page_clipboard_cut"));e.addEventListener("cut",a);let s=n.wrap(c("page_clipboard_copy"));e.addEventListener("copy",s);let o=n.wrap(c("page_clipboard_paste"));return e.addEventListener("paste",o),()=>{e.removeEventListener("cut",a),e.removeEventListener("copy",s),e.removeEventListener("paste",o)}},[c,d,t,r])}},956578:(e,t,r)=>{r.d(t,{l:()=>A});var n=r(610435);r(111671),r(646216);var a=r(692738),i=r(923305),s=r(403286),o=r(6e4),l=r(402217),d=r(258182),c=r(441535),u=r(943336),p=r(110253),E=r(959240),_=r(535936),S=r(984251),m=r(702465),I=r(464782),b=r(624704);let T={init(){window.addEventListener("offline",()=>{b.A.warning("Please check your Internet connection",null,{key:"connectionNotification",duration:null}),window.addEventListener("online",function e(){b.A.close("connectionNotification"),window.removeEventListener("online",e)})})}};function f({basePrefix:e,enableNavigationIntent:t,legacyRoutes:r,routes:i,updateRouterMetadata:s,routerMetadata:o}){return(0,a.useEffect)(()=>{T.init()},[]),(0,n.Y)(m.GF,{children:(0,n.Y)(I.x,{basePrefix:e,enableNavigationIntent:t,legacyRoutes:r,routes:i,updateRouterMetadata:s,routerMetadata:o})})}let g=a.lazy(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(54497),r.e(33764),r.e(78277),r.e(36993),r.e(59276),r.e(59794),r.e(44004),r.e(159),r.e(20556),r.e(74767),r.e(78756),r.e(89187),r.e(81318),r.e(47589),r.e(70419),r.e(46184),r.e(14243),r.e(88591),r.e(47323),r.e(92792),r.e(63121),r.e(79832),r.e(36921),r.e(37140),r.e(82031),r.e(42272),r.e(11798),r.e(87828),r.e(83885)]).then(r.bind(r,887496));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(887496,"@databricks/dbsql/src/app/config","lazy",e);return e()})().then(()=>({default:()=>null})));function L({children:e}){if((0,c.W)("databricks.fe.dbsqlx.skipConfigLoading",!1))return(0,n.Y)(n.FK,{children:e});return(0,n.FD)(E.t,{fallback:null,children:[(0,n.Y)(g,{}),e]})}function A({basePrefix:e=(0,i.DT)(),enableNavigationIntent:t,legacyRoutes:r=l.Ay,routes:c=[]}){let E=(0,S.i)(e,c,r.items),m=(0,a.useCallback)((e,{pageId:t})=>{let r=e?.pageId,n=e=>Object.values(s.CN).includes(e);if(void 0!==r&&n(r)&&n(t))return!1;return!0},[]),{routerInteraction:I,updateRouterMetadata:b,routerMetadata:T}=(0,_.q)(E,o.b6,m);return(0,u.R)(),(0,n.Y)(L,{children:(0,n.Y)(d.Provider,{children:(0,n.FD)("div",{id:"dbsql-app-root",className:"dbsql-ui-container","data-heap-redact-attributes":"aria-label,data-testid,title",children:[(0,n.Y)(p.ci,{interaction:I,enabled:!0,children:(0,n.Y)(f,{basePrefix:e,enableNavigationIntent:t,legacyRoutes:r,routes:c,updateRouterMetadata:b,routerMetadata:T})}),(0,n.Y)(d.Viewport,{})]})})})}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/75787.db8f0364ed.chunk.js.map