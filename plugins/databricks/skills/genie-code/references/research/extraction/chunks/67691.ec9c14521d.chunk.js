"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[49503,67691],{65061:(e,t,r)=>{r.d(t,{IT:()=>i,_l:()=>o._l,n_:()=>o.n_,sw:()=>s.s});var n=r(692738),a=r(32121),o=r(141078),s=r(710283);let i=(e,t)=>{let r=(0,o.IT)(e,t);return!function(e,t){let r=(0,n.useRef)(0),{startPolling:o,stopPolling:s,error:i,networkStatus:u}=e;(0,n.useEffect)(()=>{if(!t||u&&u<a.pT.ready)return;if(i){let e=r.current+1,n=t*Math.pow(2,e);n<36e5?(o(n),r.current=e):(s(),r.current=0)}else r.current>0&&(o(t),r.current=0)},[i,t,o,s,u])}(r,t?.pollInterval),r}},290766:(e,t,r)=>{r.d(t,{T:()=>u});var n=r(65061),a=r(960718),o=r(141078);let s=(0,o.J1)`
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
  ${a.xz}
`,i=(0,o.J1)`
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
`,u=(e,t)=>(0,n.IT)(t?i:s,{fetchPolicy:"cache-and-network",...e})},349297:(e,t,r)=>{r.d(t,{A:()=>c,e:()=>l});var n=r(536717),a=r.n(n),o=r(692738),s=r(801938),i=r(497937),u=r(341300);function c(e,t){if(e.defaultPrevented)return;let r=function(e){for(;e;){if(e instanceof HTMLAnchorElement)return e;e=e?.parentNode}return null}(e.target instanceof Node?e.target:null),n=r&&r.getAttribute("href");if(!r||!n||r.hasAttribute("download")||r.dataset.skiprouter||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return;let o=r.getAttribute("target");if(a()(o)&&"_blank"===o.toLowerCase())return;e.preventDefault(),t(n)}function l(e){let{appRoot:t,portalContainer:r}=(0,s.Xd)(),n=(0,i.Zp)();(0,o.useEffect)(()=>{if(!e)return;let a=new Set([t,r]);function o(e){return e.defaultPrevented||(0,u.$G)("global_navigation_intent"),c(e,n)}return a.forEach(e=>{e.addEventListener("click",o,!1)}),()=>{a.forEach(e=>{e.removeEventListener("click",o,!1)})}},[t,r,e,n])}},452765:(e,t,r)=>{r.r(t),r.d(t,{ComputeModalContextProvider:()=>y,useComputeModal:()=>C});var n=r(610435),a=r(452137),o=r.n(a),s=r(692738),i=r(79128),u=r(342411),c=r(441535),l=r(181440),d=r(136012),h=r(694762),p=r(623124),m=r(411056),f=r(478137),g=r(558026),v=r(962179);let b=({hideModal:e,visible:t})=>{let r=(0,u.tz)(),a=(0,d.QQ)(),{dataSourceId:o,onDataSourceSelected:s,mergedDataSources:i,dataSourcesLoaded:c,clustersLoaded:b,lakehouseLoaded:k,refetchClusters:y,isDataSourceDormant:C,lakehouseMap:_,UnifiedComputeSelector:w}=(0,l.useDataExplorerDataSourceContext)(),P=(0,f.yZ)(i,o),[E]=(0,g.A)(P?.endpoint_id??""),[L]=(0,m.a)(P?.endpoint_id??""),S=P&&(0,v.y0)(P),$=C?r.formatMessage({id:"+ToD1o",defaultMessage:"Start and Close"}):r.formatMessage({id:"9pF2fQ",defaultMessage:"Close"});return(0,n.Y)(h.aF,{componentId:"codegen_redash_app_src_app_pages_data_computeselectmodal.tsx_50",title:r.formatMessage({id:"h+6gr5",defaultMessage:"Attach to an existing compute resource"}),visible:t,okText:$,okButtonProps:{disabled:!P},onOk:()=>{C&&(S?(a("start_cluster_from_modal"),L()):(a("start_warehouse_from_modal"),E())),e()},onCancel:e,children:w?(0,n.Y)(w,{componentId:"catalog_explorer.sidebar.compute_selector_modal.unified_compute_selector"}):(0,n.Y)(p.Lj,{onDropdownVisibleChange:e=>{e&&(a("click_compute_dropdown_open_in_modal_from_catalog_explorer_sidebar"),y?.())},dataSources:i,dataSourcesLoaded:c&&b&&k,dataSourceId:o,onDataSourceSelected:s,lakehouseMap:_},"endpoint-selector")})},k=(0,s.createContext)(void 0),y=({children:e})=>{let[t,r]=(0,s.useState)(!1),{isDataSourceReady:a}=(0,l.useDataExplorerDataSourceContext)(),o=(0,c.W)("databricks.fe.discovery.tableDetailsComputeModalTrigger",!1),h=(0,d.QQ)(),p=(0,s.useCallback)(e=>o&&(e.overrideShow||!a||e.isForeignData)?(0,n.Y)(i.$n,{componentId:e.componentId,onClick:()=>r(!0),children:(0,n.Y)(u.sA,{id:"jdqfF6",defaultMessage:"Select compute"})}):null,[o,a]);return(0,n.Y)(k.Provider,{value:{ComputeOpener:p,computeModal:(0,n.Y)(b,{visible:t,hideModal:()=>r(!1)}),openComputeModal:e=>{h(e),r(!0)}},children:e})};function C(){let e=(0,s.useContext)(k);if(o()(null!=e,"Must wrap child in ComputeModalContextProvider"),void 0===e)throw Error("useComputeModal must be used within a ComputeModalContextProvider");return e}},497937:(e,t,r)=>{r.d(t,{Zp:()=>d});var n=r(692738),a=r(923305),o=r(591105),s=r(794938),i=r(6e4),u=r(681695),c=r(488655);function l(e,t,r,n,a,o,s){try{var i=e[o](s),u=i.value}catch(e){r(e);return}i.done?t(u):Promise.resolve(u).then(n,a)}let d=(0,i.CV)()?c.Zp:function(){return(0,n.useCallback)((e,{replace:t=!1,state:r={}}={})=>{((e,t=!1)=>{var r;return(r=function*(){yield(0,o.y)(10);let r="boolean"==typeof t?{replace:t,triggerRouteChange:!1,noBasePath:!1}:t,n=(0,a.Eq)(e),c=window.location.origin,l=!n||e===c||e.startsWith(`${c}/`);if(n||e.startsWith("/"),!l){window.location.href=e;return}n||r.noBasePath||(e=(0,a.Hi)(e));let d=new URL(e=s.y.adjustUrl(e),window.location.origin);if(u.GZ.isAvailable())return void(yield u.GZ.call({href:`${d.pathname}${d.search}${d.hash}`,replace:r.replace}));if(!(0,a.U0)(d.pathname)){window.location.href=e;return}i.Ay.update({path:d.pathname,search:d.search,hash:d.hash},r.replace,{triggerRouteChange:r.triggerRouteChange})},function(){var e=this,t=arguments;return new Promise(function(n,a){var o=r.apply(e,t);function s(e){l(o,n,a,s,i,"next",e)}function i(e){l(o,n,a,s,i,"throw",e)}s(void 0)})})()})(e,{replace:t,noBasePath:!0,...r})},[])}},566825:(e,t,r)=>{r.d(t,{Ay:()=>k,Ns:()=>g,ZC:()=>b,r:()=>v});var n=r(987962),a=r.n(n),o=r(623576),s=r.n(o),i=r(189219),u=r.n(i),c=r(923305),l=r(651139),d=r(949313),h=r(670943),p=r(924636),m=r(984741),f=r(885364);function g(e){return a()(e,"job.id")?(0,d.Ec)(e.job.id,1e3):e}let v=["get-data-sources"],b=(0,m.to)("sql/images/db-logos"),k={query:()=>(0,h.Ym)()?l.pY.get(p.bI).then(e=>e?.data_sources||[]):l.pY.get((0,c.Hi)("api/data_sources")),get:({id:e})=>l.pY.get((0,c.Hi)(`api/data_sources/${e}`)),types:()=>l.pY.get((0,c.Hi)("api/data_sources/types")),create:e=>l.pY.post((0,c.Hi)("api/data_sources"),e),save:e=>l.pY.post((0,c.Hi)(`api/data_sources/${e.id}`),e),test:e=>l.pY.post((0,c.Hi)(`api/data_sources/${e.id}/test`)),delete:({id:e})=>l.pY.delete((0,c.Hi)(`api/data_sources/${e}`)),fetchSchema:(e,t=!1)=>{let r={};return t&&(r.refresh=!0),l.pY.get((0,c.Hi)(`api/data_sources/${e.id}/schema`),{params:r}).then(e=>{if(a()(e,"job"))return(0,d.Ec)(e.job.id).catch(t=>1===t.code?[]:Promise.reject(Error(e.job.error)));return a()(e,"schema")?e.schema:Promise.reject()}).then(e=>s()(e,e=>{var t;return{...e,columns:(t=e.columns,s()(t,e=>u()(e)?e:{name:e})),type:e.type}}))},fetchColumns:(e,t,r)=>l.pY.get((0,c.Hi)(`api/data_sources/${e}/${t}/columns/${r}`)).then(g).then((0,f.g)("DataSource.fetchColumns"))}},572382:(e,t,r)=>{r.d(t,{CU:()=>i,U1:()=>u,iC:()=>s,kc:()=>a,sT:()=>o});var n=r(32121);function a(e){return e?.edges.map(e=>e.node)}function o({networkStatus:e}){return e===n.pT.fetchMore}function s({networkStatus:e}){return e===n.pT.refetch}function i({networkStatus:e}){return e===n.pT.poll}function u({__typename:e,...t}){return t}},591105:(e,t,r)=>{r.d(t,{y:()=>n});let n=(e=0)=>new Promise(t=>setTimeout(t,e))},662874:(e,t,r)=>{r.d(t,{DK:()=>l,Go:()=>c,WL:()=>i,t2:()=>u});var n=r(610435),a=r(692738),o=r(745444),s=r(962179);let i=a.createContext(()=>void 0);function u({children:e}){let{lakehouseMap:t}=(0,o.j)(),r=(0,a.useCallback)(e=>t[e],[t]);return(0,n.Y)(i.Provider,{value:r,children:e})}function c(e){let t=(0,a.useContext)(i);return(0,a.useMemo)(()=>e.map(e=>{if(!(0,s.PG)(e))return e;let r=t(e.endpoint_id??"");return{...e,lakehouse:r}}),[e,t])}function l(e){let t=(0,a.useContext)(i);return(0,a.useMemo)(()=>{if(e){let r=t(e.endpoint_id??"");return{...e,lakehouse:r}}},[e,t])}},710283:(e,t,r)=>{r.d(t,{s:()=>i});var n=r(650003),a=r(692738),o=r(141078),s=r(940912);function i(e,t){let r=(0,o.mK)(t?.client),[i,u]=(0,a.useState)(()=>{if(t?.skip)return null;return r.subscribe({query:e,variables:t?.variables,fetchPolicy:t?.fetchPolicy,context:{...t?.context,currentImplicitContext:(0,s.yB)()}})}),c=(0,a.useRef)(!1);(0,a.useEffect)(()=>()=>{c.current=!0},[]);let l=(0,a.useRef)({client:r,subscription:e,options:t});(0,a.useEffect)(()=>{let a=t?.shouldResubscribe;"function"==typeof a&&(a=!!a(t)),t?.skip?(!t?.skip!=!l.current.options?.skip||c.current)&&(u(null),c.current=!1):(!1!==a&&(r!==l.current.client||e!==l.current.subscription||t?.fetchPolicy!==l.current.options?.fetchPolicy||!t?.skip!=!l.current.options?.skip||!(0,n.L)(t?.variables,l.current.options?.variables))||c.current)&&(u(r.subscribe({query:e,variables:t?.variables,fetchPolicy:t?.fetchPolicy,context:{...t?.context,currentImplicitContext:(0,s.yB)()}})),c.current=!1),Object.assign(l.current,{client:r,subscription:e,options:t})},[r,e,t,c.current]),(0,a.useEffect)(()=>{if(!i)return;let e=i.subscribe({next(e){let n={loading:!1,data:e.data,error:void 0,variables:t?.variables};l.current.options?.onSubscriptionData?.({client:r,subscriptionData:n})},error(e){l.current.options?.onError?.(e)},complete(){l.current.options?.onSubscriptionComplete?.()}});return()=>{e.unsubscribe()}},[i])}},733052:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(610435);r(692738);var a=r(802582);function o({primary:e=!1,srSilent:t=!1,children:r,placement:s,title:i,dataTestId:u,arrowPointAtCenter:c,...l}){return(0,n.Y)(a.p,{silenceScreenReader:t,useAsLabel:e,placement:s,title:i,dataTestId:u,arrowPointAtCenter:c,...l,children:r})}},745444:(e,t,r)=>{r.d(t,{j:()=>l});var n=r(298280),a=r.n(n),o=r(692738),s=r(919505),i=r(290766),u=r(572382),c=r(441535);function l({enableLiveUpdates:e=!0,fetchPolicy:t="cache-and-network",useMinimalQuery:r=!1,isEnabled:n=!0}={}){let d=(0,c.W)("databricks.fe.redash.listPollingInterval",5e3),[h,p]=(0,o.useState)(()=>(0,c.W)("databricks.fe.redash.enableWarehouseEventSubscription",!1)),m=e&&h&&!r,{data:f,loading:g,refetch:v}=(0,i.T)({pollInterval:e&&!m?d:0,fetchPolicy:t,nextFetchPolicy:m?"cache-first":void 0,skip:!n},r);return(0,s.A)({skip:!m||!n,refetchLakehouseStates:v,setEnableSubscription:p}),{loaded:!g,lakehouseMap:(0,o.useMemo)(()=>a()((0,u.kc)(f?.lakehouses),e=>e?.id),[f?.lakehouses])}}},794938:(e,t,r)=>{r.d(t,{E:()=>c,y:()=>s});var n=r(514503),a=r.n(n),o=r(923305);let s={adjustUrl:r(93353).WI},i=new Set,u=new Set;function c(e,t){let r=(0,o.Eq)(e),n=window.location.origin;if(!(!r||e===n||e.startsWith(`${n}/`)))return e;return t||r||(e=(0,o.Hi)(e)),e=s.adjustUrl(e)}a()(()=>{console.warn(`[Deprecation warning] Relative hrefs in <Link> are deprecated. Prefix hrefs with '/', e.g. <Link href="/dashboards">.
The following URLs were called as relative:
`,[...u].map(e=>`- ${e}`).join("\n")),u.forEach(e=>i.add(e)),u.clear()},3e3)},885364:(e,t,r)=>{r.d(t,{g:()=>s,u:()=>o});var n=r(987962),a=r.n(n);class o extends Error{__initiatorStack;errorCode;constructor(e,t,...r){super(t,...r),Error.captureStackTrace&&Error.captureStackTrace(this,o),this.name="SchemaLoadError",this.errorCode=e}isWaitingForEndpoint(){return 3===this.errorCode}}function s(e){return t=>{if(a()(t,"error")){let r=new o(t.error.code,`${t.error.message} (${e})`);return r.__initiatorStack=Error().stack,Promise.reject(r)}return t}}},913573:(e,t,r)=>{r.d(t,{A:()=>f});var n=r(610435),a=r(692738),o=r(923305),s=r(794938),i=r(6e4),u=r(497937),c=r(497895),l=r(79128),d=r(846007),h=r(217985),p=r(349297);let m=a.forwardRef(({noBasePath:e=!1,children:t,onClick:r,href:l,to:m,componentId:f,...g},v)=>{let b,k=(0,u.Zp)(),y=(0,i.CV)(),{theme:C}=(0,c.wn)(),_=(0,a.useCallback)(e=>{r&&r(e),e.defaultPrevented||(0,p.A)(e,k)},[r,k]);if(m&&!y){if("string"==typeof m&&(0,o.Eq)(m))throw Error("<Link to={...}> format does not accept absolute URLs. Please <ExternalLink> instead.");let{pathname:e,search:t,hash:r}=(0,d.t4)(m);b=`${e??"/"}${t??""}${r??""}`}else if(l){let t=l.startsWith("/#");b=(0,s.E)(l,e||t)}let w={color:C.colors.actionTertiaryTextDefault,textDecoration:"none",...g.style};return y&&m?(0,n.Y)(h.N,{to:m,onClick:r,componentId:f,...g,ref:v,style:w,asAnchorTag:!0,children:t}):(0,n.Y)("a",{...g,href:b,ref:v,onClick:_,style:w,children:t})});m.Button=function({children:e,noBasePath:t=!1,onClick:r,...o}){o.href&&(o={...o,href:(0,s.E)(o.href,t)});let i=(0,u.Zp)(),c=(0,a.useCallback)(e=>{r&&r(e),e.defaultPrevented||(0,p.A)(e,i)},[r,i]);return(0,n.Y)(l.$n,{...o,onClick:c,children:e})};let f=m},919505:(e,t,r)=>{r.d(t,{A:()=>f});var n=r(514503),a=r.n(n),o=r(692738),s=r(200356),i=r(65061),u=r(960718),c=r(441535),l=r(141078),d=r(886100),h=r(22191),p=r(278983);let m=(0,l.J1)`
  subscription WarehouseEventSubscription($ignoreScaledEvent: Boolean) @component(name: "DBSQLX.WareHouseUI") {
    warehouseEvent(ignoreScaledEvent: $ignoreScaledEvent) {
      warehouseId
      eventName
      eventTimeMs
    }
  }
`;function f({skip:e,refetchLakehouseStates:t,setEnableSubscription:r}){let n=(0,o.useMemo)(()=>{let e=(0,c.W)("databricks.fe.redash.warehouses.event.debounceWait",1e3)+Math.floor(500*Math.random());return a()(t,e)},[t]),l=(0,o.useRef)(!1);return(0,i.sw)(m,{variables:{ignoreScaledEvent:!0},shouldResubscribe:!0,skip:e,onSubscriptionData({subscriptionData:e,client:a}){if(e?.data?.warehouseEvent){let{warehouseId:r}=e.data.warehouseEvent;"0"!==r||l.current?"0"===r?t():function(e,t,r){let{warehouseId:n,eventName:a}=t;(a||"undefined")in s.tXm&&e.cache.updateFragment({fragment:u.xz,id:e.cache.identify({__typename:"Lakehouse",id:n})},e=>{if(e)return{...e,state:a,health:null}})||r()}(a,e.data.warehouseEvent,n):l.current=!0}else d.iT.sev2(h.Es.RedashCore,"warehouseEvent.subscription.onSubscriptionData.unexpectedData",{subscriptionData:e}),r(!1)},onError(e){(function(e){if(e?.[0]){let t=e[0],r=t.code??"unknown",n=t instanceof CloseEvent?"CloseEvent":t.type??"unknown";(0,p.y)("clientsideEvent",{eventName:"warehouse_subscription_error",eventType:`warehouse_subscription_error_${n}`,errorCode:r})}else d.iT.sev2(h.Es.RedashCore,"warehouseEvent.subscription.onUnexpectedError",{rawError:e})})(e),r(!1)}})}},960718:(e,t,r)=>{r.d(t,{MS:()=>d,SN:()=>h,vP:()=>l,xz:()=>p});var n=r(141078);let a=(0,n.J1)`
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
`,o=(0,n.J1)`
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
  ${a}
  ${o}
`,i=(0,n.J1)`
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
  ${i}
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
`,p=(0,n.J1)`
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
`},962179:(e,t,r)=>{function n(e){return"databricks_internal"===e.type}function a(e){return"databricks_cluster"===e.type||"cluster"===e.type}function o(e){return"statements"in e}r.d(t,{PG:()=>n,n9:()=>o,y0:()=>a})}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/67691.ec9c14521d.chunk.js.map