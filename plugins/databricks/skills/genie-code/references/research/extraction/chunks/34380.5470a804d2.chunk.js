(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[34380],{63687:(e,t,r)=>{"use strict";r.d(t,{Ue:()=>h,Xx:()=>p,Yi:()=>f,pd:()=>d,y3:()=>l});var n,i,a,s=r(928516),o=r.n(s),u=r(90114),c=r.n(u),l=((n={}).SQL_EDITOR="sqlEditor",n.DASHBOARD_UI="dashboardUI",n.VIZ_EDITOR_UI="vizEditorUI",n.ALERT_UI="alertUI",n.ALERT_V2_UI="alertV2UI",n.DATA_EXPLORER_UI="dataExplorerUI",n.SMALL_FILE_UPLOAD_UI="smallFileUploadUI",n.EXTERNAL_LOCATION_FILE_UPLOAD_UI="externalLocationFileUploadUI",n.LAKEVIEW_DASHBOARD_UI="lakeviewDashboardUI",n.STANDALONE_ALERTS="standaloneAlerts",n.EXCEL_ADD_IN="excelAddIn",n),d=((i={}).INTERACTIVE="interactive",i.MANUAL="manual",i),h=((a={}).RUN_BUTTON="runButton",a.APPLY_PARAMETERS="applyParameters",a.REFRESH_PARAMETERS="refreshParameters",a.QUICK_FILTERS="quickFilters",a.SCHEMA_BROWSER_UI="schemaBrowserUI",a.REFRESH_BUTTON="refreshButton",a.WIDGET_REFRESH="widgetRefresh",a.INGESTION_PREVIEW_TABLE="ingestionPreviewTable",a.INGESTION_CREATE_TABLE="ingestionCreateTable",a.SAMPLE_DATA_EXPLORER="sampleDataExplorer",a.NONE="none",a);function f(e){return e&&{"X-Databricks-Dbsql-Trigger-Source":e.triggerSource,"X-Databricks-Dbsql-Trigger-Execution-Type":e.executionType,"X-Databricks-Dbsql-Trigger-Execution-Detail":e.executionDetail||"none"}}function p(e){if(e){let t={dbsqlTriggerSource:e.triggerSource,dbsqlTriggerExecutionType:e.executionType,dbsqlTriggerExecutionDetail:e.executionDetail||"none"};return{"X-Databricks-Dbsql-Attribution-Flags":JSON.stringify(c()(t,o()))}}}},65061:(e,t,r)=>{"use strict";r.d(t,{IT:()=>o,_l:()=>a._l,n_:()=>a.n_,sw:()=>s.s});var n=r(692738),i=r(32121),a=r(141078),s=r(710283);let o=(e,t)=>{let r=(0,a.IT)(e,t);return!function(e,t){let r=(0,n.useRef)(0),{startPolling:a,stopPolling:s,error:o,networkStatus:u}=e;(0,n.useEffect)(()=>{if(!t||u&&u<i.pT.ready)return;if(o){let e=r.current+1,n=t*Math.pow(2,e);n<36e5?(a(n),r.current=e):(s(),r.current=0)}else r.current>0&&(a(t),r.current=0)},[o,t,a,s,u])}(r,t?.pollInterval),r}},99183:(e,t,r)=>{"use strict";r.r(t),r.d(t,{MAX_RETRY_COUNT:()=>n.a_,QueryClient:()=>n.E1,QueryClientProvider:()=>n.Ht,QueryObserver:()=>n.$x,ReactQueryAppError:()=>a.pJ,ReactQueryFetchError:()=>a.AC,SECRET_FLAG_TO_DISABLE_LOGGING:()=>n.xq,SharedQueryClientProvider:()=>n.q$,createQueryClientV3:()=>i.j,createWrappedV3UseMutation:()=>n.fi,createWrappedV3UseQuery:()=>n.ak,isCancelledError:()=>n.wm,patchReactQueryHooks:()=>n.ms,queryClientByWorkspace:()=>n.aH,setupMutationCacheAlerting:()=>a.jI,setupQueryCacheAlerting:()=>a.sY,sharedQueryClientDefaultOptions:()=>n.CH,testOnlyResetUseMutationHook:()=>n.xU,useInfiniteQuery:()=>n.qu,useIsFetching:()=>n.Cq,useMutation:()=>n.n_,useQueries:()=>n.En,useQueriesStable:()=>n.zE,useQuery:()=>n.IT,useQueryClient:()=>n.jE,useStableUseQueriesResult:()=>s.L});var n=r(412836),i=r(614127),a=r(224692),s=r(979551)},101913:(e,t,r)=>{"use strict";r.d(t,{BX:()=>i,Iz:()=>n,Mb:()=>a,yC:()=>s});let n=(e,t)=>{t&&(e.fields_to_update=Object.keys(t))};function i(e){if(e)try{return{serialized_parameters:JSON.stringify(e)}}catch(e){}return{}}function a(e){if(e)try{return{serialized_query_plan:JSON.stringify(e)}}catch(e){}return{}}function s(e){return{filters:e.map(e=>({id:e.id,values:e.values.map(e=>({kind:e.kind,type:e.type.toUpperCase(),value:e.value})),type:e.type}))}}},143857:(e,t,r)=>{"use strict";r.d(t,{N:()=>u});var n=r(840114),i=r(651139),a=r(6e4);function s(e,t,r,n,i,a,s){try{var o=e[a](s),u=o.value}catch(e){r(e);return}o.done?t(u):Promise.resolve(u).then(n,i)}let o={Login:"login",LoginNextParameter:"next"},u={setLoginUrl(e,t=o.LoginNextParameter){o.Login=e,o.LoginNextParameter=t},login(){window.location.href=(0,n.$6)(a.Ay.url)},logout:()=>{var e;return(e=function*(){i.pY.get("/account/logout").then(e=>{window.location=e.redirectUrl})},function(){var t=this,r=arguments;return new Promise(function(n,i){var a=e.apply(t,r);function o(e){s(a,n,i,o,u,"next",e)}function u(e){s(a,n,i,o,u,"throw",e)}o(void 0)})})()}}},197459:(e,t,r)=>{"use strict";r.d(t,{c:()=>u});var n=r(610435),i=r(944464),a=r.n(i);r(692738);var s=r(342411),o=r(735919);let u=a()(()=>new Promise((e,t)=>{o.k.confirm({title:(0,n.Y)(s.sA,{id:"Q69qbJ",defaultMessage:"Session expiring"}),body:(0,n.Y)(s.sA,{id:"Q2jwxA",defaultMessage:"The STS session for your IAM role is about to expire. Please click here to get a new session."}),okText:(0,n.Y)(s.sA,{id:"gY/Rhz",defaultMessage:"Confirm"}),cancelText:(0,n.Y)(s.sA,{id:"QoX+L+",defaultMessage:"Cancel"}),onOk:()=>{let e=btoa(window.location.pathname+window.location.search),t=btoa(window.location.hash);window.location.replace(`/saml/auth?hash=${t}&next_url=${e}`)},onCancel:()=>t()})}),5e3,{trailing:!1})},290766:(e,t,r)=>{"use strict";r.d(t,{T:()=>u});var n=r(65061),i=r(960718),a=r(141078);let s=(0,a.J1)`
  query LakehouseStatesForRedash @component(name: "DBSQLX.WareHouseUI") {
    lakehouses {
      edges {
        node {
          ...LakehouseListStateFragment
        }
        cursor
      }
    }
  }
  ${i.xz}
`,o=(0,a.J1)`
  query LakehouseMinimalStatesForRedash @component(name: "DBSQLX.WareHouseUI") {
    lakehouses {
      edges {
        node {
          id
          size
          state
          disableUnityCatalog
          health {
            status
          }
          enableDatabricksCompute
          warehouseType
        }
        cursor
      }
    }
  }
`,u=(e,t)=>(0,n.IT)(t?o:s,{fetchPolicy:"cache-and-network",...e})},338418:(e,t,r)=>{"use strict";r.d(t,{I:()=>o,p:()=>s});var n=r(886100),i=r(22191),a=r(747129);function s(e,t){n.iT.sev2BurnRate(i.Es.RedashCore,"http://go/redash/fe/alert/redash.fe.executionStatus.apiError",a.i1.P999,a.Ip.Min10,!e,{...t,error:e})}function o(e,t){n.iT.sev2BurnRate(i.Es.RedashCore,"http://go/redash/fe/alert/redash.fe.executionResult.apiError",a.i1.P999,a.Ip.Min10,!e,{...t,error:e})}},423085:(e,t,r)=>{"use strict";let n;r.d(t,{e:()=>o});var i=r(692738),a=r(42213),s=r(583075);let o=e=>{(0,i.useEffect)(()=>(n&&e&&(0,s.sT)("databricks.fe.enableRedashQueryClientHydration",!1)&&((0,a.Q)(e,n),n=void 0),()=>{e&&(0,s.sT)("databricks.fe.enableRedashQueryClientHydration",!1)&&(n=(0,a.h)(e))}),[e])}},497937:(e,t,r)=>{"use strict";r.d(t,{Zp:()=>d});var n=r(692738),i=r(923305),a=r(591105),s=r(794938),o=r(6e4),u=r(681695),c=r(488655);function l(e,t,r,n,i,a,s){try{var o=e[a](s),u=o.value}catch(e){r(e);return}o.done?t(u):Promise.resolve(u).then(n,i)}let d=(0,o.CV)()?c.Zp:function(){return(0,n.useCallback)((e,{replace:t=!1,state:r={}}={})=>{((e,t=!1)=>{var r;return(r=function*(){yield(0,a.y)(10);let r="boolean"==typeof t?{replace:t,triggerRouteChange:!1,noBasePath:!1}:t,n=(0,i.Eq)(e),c=window.location.origin,l=!n||e===c||e.startsWith(`${c}/`);if(n||e.startsWith("/"),!l){window.location.href=e;return}n||r.noBasePath||(e=(0,i.Hi)(e));let d=new URL(e=s.y.adjustUrl(e),window.location.origin);if(u.GZ.isAvailable())return void(yield u.GZ.call({href:`${d.pathname}${d.search}${d.hash}`,replace:r.replace}));if(!(0,i.U0)(d.pathname)){window.location.href=e;return}o.Ay.update({path:d.pathname,search:d.search,hash:d.hash},r.replace,{triggerRouteChange:r.triggerRouteChange})},function(){var e=this,t=arguments;return new Promise(function(n,i){var a=r.apply(e,t);function s(e){l(a,n,i,s,o,"next",e)}function o(e){l(a,n,i,s,o,"throw",e)}s(void 0)})})()})(e,{replace:t,noBasePath:!0,...r})},[])}},566825:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>E,Ns:()=>m,ZC:()=>v,r:()=>b});var n=r(987962),i=r.n(n),a=r(623576),s=r.n(a),o=r(189219),u=r.n(o),c=r(923305),l=r(651139),d=r(949313),h=r(670943),f=r(924636),p=r(984741),g=r(885364);function m(e){return i()(e,"job.id")?(0,d.Ec)(e.job.id,1e3):e}let b=["get-data-sources"],v=(0,p.to)("sql/images/db-logos"),E={query:()=>(0,h.Ym)()?l.pY.get(f.bI).then(e=>e?.data_sources||[]):l.pY.get((0,c.Hi)("api/data_sources")),get:({id:e})=>l.pY.get((0,c.Hi)(`api/data_sources/${e}`)),types:()=>l.pY.get((0,c.Hi)("api/data_sources/types")),create:e=>l.pY.post((0,c.Hi)("api/data_sources"),e),save:e=>l.pY.post((0,c.Hi)(`api/data_sources/${e.id}`),e),test:e=>l.pY.post((0,c.Hi)(`api/data_sources/${e.id}/test`)),delete:({id:e})=>l.pY.delete((0,c.Hi)(`api/data_sources/${e}`)),fetchSchema:(e,t=!1)=>{let r={};return t&&(r.refresh=!0),l.pY.get((0,c.Hi)(`api/data_sources/${e.id}/schema`),{params:r}).then(e=>{if(i()(e,"job"))return(0,d.Ec)(e.job.id).catch(t=>1===t.code?[]:Promise.reject(Error(e.job.error)));return i()(e,"schema")?e.schema:Promise.reject()}).then(e=>s()(e,e=>{var t;return{...e,columns:(t=e.columns,s()(t,e=>u()(e)?e:{name:e})),type:e.type}}))},fetchColumns:(e,t,r)=>l.pY.get((0,c.Hi)(`api/data_sources/${e}/${t}/columns/${r}`)).then(m).then((0,g.g)("DataSource.fetchColumns"))}},572382:(e,t,r)=>{"use strict";r.d(t,{CU:()=>o,U1:()=>u,iC:()=>s,kc:()=>i,sT:()=>a});var n=r(32121);function i(e){return e?.edges.map(e=>e.node)}function a({networkStatus:e}){return e===n.pT.fetchMore}function s({networkStatus:e}){return e===n.pT.refetch}function o({networkStatus:e}){return e===n.pT.poll}function u({__typename:e,...t}){return t}},582153:(e,t,r)=>{"use strict";r.d(t,{EL:()=>c,cN:()=>g});var n,i=r(886100),a=r(22191),s=r(747129),o=r(488655),u=r(201927),c=((n={}).NOT_EMBEDDED="Not embedded",n.SESSION="Session",n.TOKEN="Token",n);class l{hideRefreshButton=!1;hideDatabricksLogo=!1;hasLoggedOriginError=!1;referrerOrigin;constructor(){try{this.referrerOrigin=document.referrer?new URL(document.referrer).origin:null}catch{this.referrerOrigin=null}}handleNavigation(e){let{dashboardId:t,pageId:r}=e;if(!t)throw Error("Dashboard ID not found in the navigation message. If this problem persists, report it to Databricks.");let n=`/embed/dashboardsv3/${t}`,i=r?`${n}/pages/${r}`:n;(0,o.oo)(i,{replace:!1})}handleSetConfig(e){let t=!0;1===e.version?(this.hideRefreshButton=!1,this.hideDatabricksLogo=e.hideDatabricksLogo??!1):t=!1,i.iT.sev2BurnRate(a.Es.Lakeview,"https://go/lvalert/lakeview.dashboard.embed.unknown-config-version",s.i1.P999,s.Ip.Min100,t,{data:{config:e}})}validateOrigin(e){let t;try{t=new URL(e.origin).origin}catch{return this.hasLoggedOriginError||(console.error("Cannot determine the origin of the event. Ignoring. If this is unexpected, ensure that the origin is visible to the AI / BI dashboard."),this.hasLoggedOriginError=!0),!1}if(!this.referrerOrigin)return this.hasLoggedOriginError||(console.error("Cannot determine the referrer origin. Ignoring message. If this is unexpected, ensure that the referrer is visible to the AI / BI dashboard."),this.hasLoggedOriginError=!0),!1;if(t!==this.referrerOrigin)return!1;return!0}}class d extends l{contextType="Token";token;constructor(){super();const e=window.location.hash.split("token=")[1]||new URLSearchParams(window.location.search).get("token");if(!e)throw Error("Token not found in the URL query parameters, but initialized with token context. If this problem persists, report it to Databricks.");this.token=e,this.initializeCommunicationWithParent()}initializeCommunicationWithParent(){window.addEventListener("message",e=>{if(!this.validateOrigin(e))return;switch(e.data.type){case"DATABRICKS_SET_CONFIG":this.handleSetConfig(e.data.config);break;case"DATABRICKS_SET_TOKEN":this.token=e.data.token;break;case"DATABRICKS_NAVIGATE":this.handleNavigation({dashboardId:e.data.dashboardId,pageId:e.data.pageId})}}),this.referrerOrigin&&window.parent.postMessage({type:"DATABRICKS_EMBED_READY"},this.referrerOrigin)}getToken(){return this.token}getHideRefreshButton(){return this.hideRefreshButton}getHideDatabricksLogo(){return this.hideDatabricksLogo}}class h extends l{contextType="Session";constructor(){super(),this.initializeCommunicationWithParent()}initializeCommunicationWithParent(){window.addEventListener("message",e=>{if(!this.validateOrigin(e))return;switch(e.data.type){case"DATABRICKS_SET_CONFIG":this.handleSetConfig(e.data.config);break;case"DATABRICKS_NAVIGATE":this.handleNavigation({dashboardId:e.data.dashboardId,pageId:e.data.pageId})}}),this.referrerOrigin&&window.parent.postMessage({type:"DATABRICKS_EMBED_READY"},this.referrerOrigin)}getHideRefreshButton(){return this.hideRefreshButton}getHideDatabricksLogo(){return this.hideDatabricksLogo}}class f extends l{contextType="Not embedded"}let p=null;function g(e){if(p||(p=(0,u.G)()?window.location.hash.includes("token=")||new URLSearchParams(window.location.search).get("token")?new d:new h:new f),e&&p.contextType!==e)throw Error(`Context type mismatch. Expected ${e} but got ${p.contextType}. If this problem persists, report it to Databricks.`);return p}},584570:(e,t,r)=>{"use strict";r.d(t,{f:()=>u,o:()=>c});var n=r(342411),i=r(886100),a=r(22191),s=r(976988);function o(e,t,r,n,i,a,s){try{var o=e[a](s),u=o.value}catch(e){r(e);return}o.done?t(u):Promise.resolve(u).then(n,i)}function u(e){var t;return(t=function*(){if(e===n.Xn)return Promise.resolve({});try{return(yield r(920096)(`./${e}.json`)).default}catch{return console.warn(`Unable to load locale: '${e}'`),{}}},function(){var e=this,r=arguments;return new Promise(function(n,i){var a=t.apply(e,r);function s(e){o(a,n,i,s,u,"next",e)}function u(e){o(a,n,i,s,u,"throw",e)}s(void 0)})})()}let c=()=>{if(!((0,s.yz)()||(0,s.Nu)())){let e=Error("[i18n]: Attempted to use intl hooks or components outside of a React tree with an i18nProvider. Please fix the underlying issue and make sure i18n context is available");i.iT.log(a.Es.UiInfra,"i18n-provider-error",e)}}},591105:(e,t,r)=>{"use strict";r.d(t,{y:()=>n});let n=(e=0)=>new Promise(t=>setTimeout(t,e))},662874:(e,t,r)=>{"use strict";r.d(t,{DK:()=>l,Go:()=>c,WL:()=>o,t2:()=>u});var n=r(610435),i=r(692738),a=r(745444),s=r(962179);let o=i.createContext(()=>void 0);function u({children:e}){let{lakehouseMap:t}=(0,a.j)(),r=(0,i.useCallback)(e=>t[e],[t]);return(0,n.Y)(o.Provider,{value:r,children:e})}function c(e){let t=(0,i.useContext)(o);return(0,i.useMemo)(()=>e.map(e=>{if(!(0,s.PG)(e))return e;let r=t(e.endpoint_id??"");return{...e,lakehouse:r}}),[e,t])}function l(e){let t=(0,i.useContext)(o);return(0,i.useMemo)(()=>{if(e){let r=t(e.endpoint_id??"");return{...e,lakehouse:r}}},[e,t])}},670943:(e,t,r)=>{"use strict";r.d(t,{Ad:()=>o,F9:()=>p,G$:()=>E,H7:()=>f,MD:()=>h,X7:()=>w,Ym:()=>y,aE:()=>u,gK:()=>v,gk:()=>b,n3:()=>d,oI:()=>c,p5:()=>l,qD:()=>g,qL:()=>m,zp:()=>k});var n=r(905971),i=r(441535);function a(e,t=99){try{let t=e.replaceAll("-","");return Number(BigInt(`0x${t}`)%BigInt(100))}catch{return t}}let s=()=>!(0,i.W)("databricks.fe.redash.v2.scalaExecutionBlocked",!1),o=()=>!!(0,i.W)("databricks.fe.redash.v2.queries",!1)&&s(),u=()=>!!(0,i.W)("databricks.fe.redash.v2.queries.List",!1),c=()=>!!(0,i.W)("databricks.fe.redash.v2.visualizations",!1),l=()=>s(),d=()=>!!(0,i.W)("databricks.fe.redash.v2.executionPolling",!1)&&s(),h=()=>s(),f=()=>!!(0,i.W)("databricks.fe.redash.v2.dropdown",!1)&&s(),p=()=>!!(0,i.W)("databricks.fe.redash.v2.dropdown.associated",!1)&&s(),g=e=>{if(s())return(e?a(e):99)<(0,i.W)("databricks.fe.redash.v2.interactiveExecutionPercentage",0);return!1},m=e=>{if(s())return(e?a(e):99)<(0,i.W)("databricks.fe.redash.v2.widgetQueryExecutionPercentage",0);return!1},b=e=>{if(s())return((0,n.wF)(e)?a((0,n.A8)(e)):99)<(0,i.W)("databricks.fe.redash.v2.getExecutionResultsPercentage",0);return!1},v=e=>{if(s())return((0,n.wF)(e)?a((0,n.A8)(e)):99)<(0,i.W)("databricks.fe.redash.v2.getWidgetQueryExecutionResultsPercentage",0);return!1},E=()=>!!(0,i.W)("databricks.fe.redash.v2.alerts.evaluations",!1),k=()=>!!(0,i.W)("databricks.redashv2.enableAlertsV2EvaluationDetails",!1),y=()=>!(0,i.W)("databricks.fe.redash.enableExternalDataSources",!1),w=()=>!!(0,i.W)("databricks.fe.redash.v2.clientConfig",!1)},702465:(e,t,r)=>{"use strict";r.d(t,{GF:()=>f,p6:()=>h,qQ:()=>d});var n=r(610435),i=r(692738),a=r(994393),s=r(423085),o=r(221884),u=r(518726),c=r(998752);let l=null,d={get current(){return l?.getActiveValue()??null}};function h(e){return new a.QueryClient({defaultOptions:{queries:{retry:(e,t)=>{if(t?.response?.status===429&&e<5)return!0;return!1}},...e}})}let f=({queryClientDefaultOptions:e={},children:t})=>{let[r]=(0,i.useState)(()=>(0,u.T)(()=>h(e)));return(0,s.e)(r.getActiveValue()),(0,i.useEffect)(()=>(null!==l&&console.warn("A global react-query accessor has already been initialized. Please check for <AppProviders> being rendered twice."),l=r,()=>{l=null}),[r]),(0,n.Y)(u.Q,{provider:a.QueryClientProvider,clientAccessor:r,children:(0,n.Y)(o.d$,{children:(0,n.Y)(c.M,{children:t})})})}},710283:(e,t,r)=>{"use strict";r.d(t,{s:()=>o});var n=r(650003),i=r(692738),a=r(141078),s=r(940912);function o(e,t){let r=(0,a.mK)(t?.client),[o,u]=(0,i.useState)(()=>{if(t?.skip)return null;return r.subscribe({query:e,variables:t?.variables,fetchPolicy:t?.fetchPolicy,context:{...t?.context,currentImplicitContext:(0,s.yB)()}})}),c=(0,i.useRef)(!1);(0,i.useEffect)(()=>()=>{c.current=!0},[]);let l=(0,i.useRef)({client:r,subscription:e,options:t});(0,i.useEffect)(()=>{let i=t?.shouldResubscribe;"function"==typeof i&&(i=!!i(t)),t?.skip?(!t?.skip!=!l.current.options?.skip||c.current)&&(u(null),c.current=!1):(!1!==i&&(r!==l.current.client||e!==l.current.subscription||t?.fetchPolicy!==l.current.options?.fetchPolicy||!t?.skip!=!l.current.options?.skip||!(0,n.L)(t?.variables,l.current.options?.variables))||c.current)&&(u(r.subscribe({query:e,variables:t?.variables,fetchPolicy:t?.fetchPolicy,context:{...t?.context,currentImplicitContext:(0,s.yB)()}})),c.current=!1),Object.assign(l.current,{client:r,subscription:e,options:t})},[r,e,t,c.current]),(0,i.useEffect)(()=>{if(!o)return;let e=o.subscribe({next(e){let n={loading:!1,data:e.data,error:void 0,variables:t?.variables};l.current.options?.onSubscriptionData?.({client:r,subscriptionData:n})},error(e){l.current.options?.onError?.(e)},complete(){l.current.options?.onSubscriptionComplete?.()}});return()=>{e.unsubscribe()}},[o])}},745444:(e,t,r)=>{"use strict";r.d(t,{j:()=>l});var n=r(298280),i=r.n(n),a=r(692738),s=r(919505),o=r(290766),u=r(572382),c=r(441535);function l({enableLiveUpdates:e=!0,fetchPolicy:t="cache-and-network",useMinimalQuery:r=!1,isEnabled:n=!0}={}){let d=(0,c.W)("databricks.fe.redash.listPollingInterval",5e3),[h,f]=(0,a.useState)(()=>(0,c.W)("databricks.fe.redash.enableWarehouseEventSubscription",!1)),p=e&&h&&!r,{data:g,loading:m,refetch:b}=(0,o.T)({pollInterval:e&&!p?d:0,fetchPolicy:t,nextFetchPolicy:p?"cache-first":void 0,skip:!n},r);return(0,s.A)({skip:!p||!n,refetchLakehouseStates:b,setEnableSubscription:f}),{loaded:!m,lakehouseMap:(0,a.useMemo)(()=>i()((0,u.kc)(g?.lakehouses),e=>e?.id),[g?.lakehouses])}}},794938:(e,t,r)=>{"use strict";r.d(t,{E:()=>c,y:()=>s});var n=r(514503),i=r.n(n),a=r(923305);let s={adjustUrl:r(93353).WI},o=new Set,u=new Set;function c(e,t){let r=(0,a.Eq)(e),n=window.location.origin;if(!(!r||e===n||e.startsWith(`${n}/`)))return e;return t||r||(e=(0,a.Hi)(e)),e=s.adjustUrl(e)}i()(()=>{console.warn(`[Deprecation warning] Relative hrefs in <Link> are deprecated. Prefix hrefs with '/', e.g. <Link href="/dashboards">.
The following URLs were called as relative:
`,[...u].map(e=>`- ${e}`).join("\n")),u.forEach(e=>o.add(e)),u.clear()},3e3)},840114:(e,t,r)=>{"use strict";r.d(t,{$6:()=>i,C3:()=>a}),r(93353);var n=r(737358);function i(e,t){let r=e?`?next_url=${encodeURIComponent(e)}`:"",n=t?`#${t}`:"";return`/login.html${r}${n}`}function a(e="",t){let r="string"==typeof e?(0,n.Rr)(e):e,i=new URLSearchParams(r.search);for(let[e,r]of Object.entries(t))r?i.set(e,r.toString()):i.delete(e);let s=i.toString(),o=(0,n.AO)({...r,search:s});return(0,n.Rr)(o)}},856747:(e,t,r)=>{"use strict";r.d(t,{EL:()=>n.EL,cN:()=>n.cN});var n=r(582153)},885364:(e,t,r)=>{"use strict";r.d(t,{g:()=>s,u:()=>a});var n=r(987962),i=r.n(n);class a extends Error{__initiatorStack;errorCode;constructor(e,t,...r){super(t,...r),Error.captureStackTrace&&Error.captureStackTrace(this,a),this.name="SchemaLoadError",this.errorCode=e}isWaitingForEndpoint(){return 3===this.errorCode}}function s(e){return t=>{if(i()(t,"error")){let r=new a(t.error.code,`${t.error.message} (${e})`);return r.__initiatorStack=Error().stack,Promise.reject(r)}return t}}},919505:(e,t,r)=>{"use strict";r.d(t,{A:()=>g});var n=r(514503),i=r.n(n),a=r(692738),s=r(200356),o=r(65061),u=r(960718),c=r(441535),l=r(141078),d=r(886100),h=r(22191),f=r(278983);let p=(0,l.J1)`
  subscription WarehouseEventSubscription($ignoreScaledEvent: Boolean) @component(name: "DBSQLX.WareHouseUI") {
    warehouseEvent(ignoreScaledEvent: $ignoreScaledEvent) {
      warehouseId
      eventName
      eventTimeMs
    }
  }
`;function g({skip:e,refetchLakehouseStates:t,setEnableSubscription:r}){let n=(0,a.useMemo)(()=>{let e=(0,c.W)("databricks.fe.redash.warehouses.event.debounceWait",1e3)+Math.floor(500*Math.random());return i()(t,e)},[t]),l=(0,a.useRef)(!1);return(0,o.sw)(p,{variables:{ignoreScaledEvent:!0},shouldResubscribe:!0,skip:e,onSubscriptionData({subscriptionData:e,client:i}){if(e?.data?.warehouseEvent){let{warehouseId:r}=e.data.warehouseEvent;"0"!==r||l.current?"0"===r?t():function(e,t,r){let{warehouseId:n,eventName:i}=t;(i||"undefined")in s.tXm&&e.cache.updateFragment({fragment:u.xz,id:e.cache.identify({__typename:"Lakehouse",id:n})},e=>{if(e)return{...e,state:i,health:null}})||r()}(i,e.data.warehouseEvent,n):l.current=!0}else d.iT.sev2(h.Es.RedashCore,"warehouseEvent.subscription.onSubscriptionData.unexpectedData",{subscriptionData:e}),r(!1)},onError(e){(function(e){if(e?.[0]){let t=e[0],r=t.code??"unknown",n=t instanceof CloseEvent?"CloseEvent":t.type??"unknown";(0,f.y)("clientsideEvent",{eventName:"warehouse_subscription_error",eventType:`warehouse_subscription_error_${n}`,errorCode:r})}else d.iT.sev2(h.Es.RedashCore,"warehouseEvent.subscription.onUnexpectedError",{rawError:e})})(e),r(!1)}})}},920096:(e,t,r)=>{var n={"./de-DE.json":[617838,17838],"./dev.json":[974628,74628],"./es-ES.json":[10968,10968],"./fr-FR.json":[48708,48708],"./it-IT.json":[113246,13246],"./ja-JP.json":[481213,81213],"./ko-KR.json":[17807,17807],"./pt-BR.json":[663800,63800],"./pt-PT.json":[830184,30184],"./zh-CN.json":[752859,52859],"./zh-HK.json":[788195,88195],"./zh-TW.json":[333091,33091]};function i(e){if(!r.o(n,e))return Promise.resolve().then(()=>{var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],i=t[0];return r.e(t[1]).then(()=>r.t(i,19))}i.keys=()=>Object.keys(n),i.id=920096,e.exports=i},960718:(e,t,r)=>{"use strict";r.d(t,{MS:()=>d,SN:()=>h,vP:()=>l,xz:()=>f});var n=r(141078);let i=(0,n.J1)`
  fragment PrincipalNameFragment on PrincipalName {
    __typename
    ... on UserName {
      userName
    }
    ... on GroupName {
      groupName
    }
    ... on ServicePrincipalName {
      servicePrincipalName
    }
  }
`,a=(0,n.J1)`
  fragment PermissionFragment on Permission {
    inheritedFromObject
    permissionLevel
    inherited
  }
`,s=(0,n.J1)`
  fragment AccessControlFragment on AccessControl {
    principalName {
      ...PrincipalNameFragment
    }
    allPermissions {
      ...PermissionFragment
    }
  }
  ${i}
  ${a}
`,o=(0,n.J1)`
  fragment LakehousePermissionsFragment on Lakehouse {
    permissions @include(if: $withPermissions)
    effectivePermissions @include(if: $withPermissions) {
      objectId
      objectType
      accessControlList {
        ...AccessControlFragment
      }
    }
  }
  ${s}
`,u=(0,n.J1)`
  fragment LakehouseBasicAttributesFragment on Lakehouse {
    id
    name
    size
    state
    # TODO(LF-940) use enableServerlessCompute instead
    enableDatabricksCompute
    warehouseType
    numClusters
    numActiveClusters @include(if: $withActiveClusters)
    maxNumClusters
    creator {
      name
    }
    aclPrincipal {
      id
      displayName
      uniqueName
      kind
    }
    health {
      status
      summary
      details
    }
  }
`,c=(0,n.J1)`
  fragment LakehouseAdvancedAttributesFragment on Lakehouse {
    minNumClusters
    numActiveSessions
    autoStopMins
    instanceProfileArn
    spotInstancePolicy
    disableUnityCatalog
    enablePhoton
    jdbcUrl
    odbcParams {
      hostname
      path
      port
      protocol
    }
    tags {
      customTags {
        key
        value
      }
    }
  }
`,l=(0,n.J1)`
  fragment FullLakehouseFragment on Lakehouse {
    ...LakehouseBasicAttributesFragment
    ...LakehouseAdvancedAttributesFragment
    ...LakehousePermissionsFragment
    channel {
      dbsqlVersion
      name
    }
    budgetPolicy @include(if: $withBudgetPolicy) {
      id
    }
    effectiveBudgetPolicy @include(if: $withBudgetPolicy) {
      id
    }
  }
  ${u}
  ${c}
  ${o}
`,d=(0,n.J1)`
  fragment LakehouseListFragment on Lakehouse {
    ...LakehouseBasicAttributesFragment
    permissions @include(if: $withPermissions)
  }
  ${u}
`,h=(0,n.J1)`
  fragment LakehouseForMutationFragment on Lakehouse {
    ...LakehouseBasicAttributesFragment
    ...LakehouseAdvancedAttributesFragment
    permissions @include(if: $withPermissions)
  }
  ${u}
  ${c}
`,f=(0,n.J1)`
  fragment LakehouseListStateFragment on Lakehouse {
    id
    name
    size
    state
    enableDatabricksCompute
    warehouseType
    health {
      status
      summary
      details
    }
  }
`},962179:(e,t,r)=>{"use strict";function n(e){return"databricks_internal"===e.type}function i(e){return"databricks_cluster"===e.type||"cluster"===e.type}function a(e){return"statements"in e}r.d(t,{PG:()=>n,n9:()=>a,y0:()=>i})},994393:(e,t,r)=>{let n=r(845893),{parseQueryArgs:i,parseMutationArgs:a}=r(301476),{createWrappedV3UseQuery:s,createWrappedV3UseMutation:o}=r(99183);e.exports={...n,useQuery:s(n.useQuery,i),useInfiniteQuery:s(n.useInfiniteQuery,i),useMutation:o(n.useMutation,a)}},998752:(e,t,r)=>{"use strict";r.d(t,{M:()=>g});var n=r(610435),i=r(376718),a=r(692738),s=r(801938),o=r(621954),u=r(39790),c=r(429608),l=r(846986),d=r(342411),h=r(435305),f=r(205048),p=r(929117);let g=({children:e})=>{let[t,r]=(0,a.useState)(),{portalContainer:g}=(0,s.Xd)();if((0,a.useEffect)(()=>{(0,o.k)().then(e=>{r(e)})},[!0]),null==t)return(0,n.Y)(f.R,{loading:!0,description:p.z.APP_INTL_PROVIDER});return(0,n.Y)(n.FK,{children:(0,n.Y)(d.Mm,{children:(0,n.Y)(u.V,{enabled:!0,children:(0,n.Y)(h.V,{children:(0,n.FD)(c.bW,{zIndexBase:2e3,getPopupContainer:()=>g,children:[(0,n.Y)(l.qz,{}),(0,n.Y)(i.Ay,{locale:t?.antdMessages,getPopupContainer:()=>g,children:e})]})})})})})}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/34380.5470a804d2.chunk.js.map