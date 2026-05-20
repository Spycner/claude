"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[49503],{65061:(e,t,r)=>{r.d(t,{IT:()=>o,_l:()=>s._l,n_:()=>s.n_,sw:()=>i.s});var n=r(692738),a=r(32121),s=r(141078),i=r(710283);let o=(e,t)=>{let r=(0,s.IT)(e,t);return!function(e,t){let r=(0,n.useRef)(0),{startPolling:s,stopPolling:i,error:o,networkStatus:u}=e;(0,n.useEffect)(()=>{if(!t||u&&u<a.pT.ready)return;if(o){let e=r.current+1,n=t*Math.pow(2,e);n<36e5?(s(n),r.current=e):(i(),r.current=0)}else r.current>0&&(s(t),r.current=0)},[o,t,s,i,u])}(r,t?.pollInterval),r}},290766:(e,t,r)=>{r.d(t,{T:()=>u});var n=r(65061),a=r(960718),s=r(141078);let i=(0,s.J1)`
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
`,o=(0,s.J1)`
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
`,u=(e,t)=>(0,n.IT)(t?o:i,{fetchPolicy:"cache-and-network",...e})},349297:(e,t,r)=>{r.d(t,{A:()=>c,e:()=>l});var n=r(536717),a=r.n(n),s=r(692738),i=r(801938),o=r(497937),u=r(341300);function c(e,t){if(e.defaultPrevented)return;let r=function(e){for(;e;){if(e instanceof HTMLAnchorElement)return e;e=e?.parentNode}return null}(e.target instanceof Node?e.target:null),n=r&&r.getAttribute("href");if(!r||!n||r.hasAttribute("download")||r.dataset.skiprouter||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return;let s=r.getAttribute("target");if(a()(s)&&"_blank"===s.toLowerCase())return;e.preventDefault(),t(n)}function l(e){let{appRoot:t,portalContainer:r}=(0,i.Xd)(),n=(0,o.Zp)();(0,s.useEffect)(()=>{if(!e)return;let a=new Set([t,r]);function s(e){return e.defaultPrevented||(0,u.$G)("global_navigation_intent"),c(e,n)}return a.forEach(e=>{e.addEventListener("click",s,!1)}),()=>{a.forEach(e=>{e.removeEventListener("click",s,!1)})}},[t,r,e,n])}},497937:(e,t,r)=>{r.d(t,{Zp:()=>d});var n=r(692738),a=r(923305),s=r(591105),i=r(794938),o=r(6e4),u=r(681695),c=r(488655);function l(e,t,r,n,a,s,i){try{var o=e[s](i),u=o.value}catch(e){r(e);return}o.done?t(u):Promise.resolve(u).then(n,a)}let d=(0,o.CV)()?c.Zp:function(){return(0,n.useCallback)((e,{replace:t=!1,state:r={}}={})=>{((e,t=!1)=>{var r;return(r=function*(){yield(0,s.y)(10);let r="boolean"==typeof t?{replace:t,triggerRouteChange:!1,noBasePath:!1}:t,n=(0,a.Eq)(e),c=window.location.origin,l=!n||e===c||e.startsWith(`${c}/`);if(n||e.startsWith("/"),!l){window.location.href=e;return}n||r.noBasePath||(e=(0,a.Hi)(e));let d=new URL(e=i.y.adjustUrl(e),window.location.origin);if(u.GZ.isAvailable())return void(yield u.GZ.call({href:`${d.pathname}${d.search}${d.hash}`,replace:r.replace}));if(!(0,a.U0)(d.pathname)){window.location.href=e;return}o.Ay.update({path:d.pathname,search:d.search,hash:d.hash},r.replace,{triggerRouteChange:r.triggerRouteChange})},function(){var e=this,t=arguments;return new Promise(function(n,a){var s=r.apply(e,t);function i(e){l(s,n,a,i,o,"next",e)}function o(e){l(s,n,a,i,o,"throw",e)}i(void 0)})})()})(e,{replace:t,noBasePath:!0,...r})},[])}},566825:(e,t,r)=>{r.d(t,{Ay:()=>k,Ns:()=>b,ZC:()=>g,r:()=>v});var n=r(987962),a=r.n(n),s=r(623576),i=r.n(s),o=r(189219),u=r.n(o),c=r(923305),l=r(651139),d=r(949313),h=r(670943),f=r(924636),p=r(984741),m=r(885364);function b(e){return a()(e,"job.id")?(0,d.Ec)(e.job.id,1e3):e}let v=["get-data-sources"],g=(0,p.to)("sql/images/db-logos"),k={query:()=>(0,h.Ym)()?l.pY.get(f.bI).then(e=>e?.data_sources||[]):l.pY.get((0,c.Hi)("api/data_sources")),get:({id:e})=>l.pY.get((0,c.Hi)(`api/data_sources/${e}`)),types:()=>l.pY.get((0,c.Hi)("api/data_sources/types")),create:e=>l.pY.post((0,c.Hi)("api/data_sources"),e),save:e=>l.pY.post((0,c.Hi)(`api/data_sources/${e.id}`),e),test:e=>l.pY.post((0,c.Hi)(`api/data_sources/${e.id}/test`)),delete:({id:e})=>l.pY.delete((0,c.Hi)(`api/data_sources/${e}`)),fetchSchema:(e,t=!1)=>{let r={};return t&&(r.refresh=!0),l.pY.get((0,c.Hi)(`api/data_sources/${e.id}/schema`),{params:r}).then(e=>{if(a()(e,"job"))return(0,d.Ec)(e.job.id).catch(t=>1===t.code?[]:Promise.reject(Error(e.job.error)));return a()(e,"schema")?e.schema:Promise.reject()}).then(e=>i()(e,e=>{var t;return{...e,columns:(t=e.columns,i()(t,e=>u()(e)?e:{name:e})),type:e.type}}))},fetchColumns:(e,t,r)=>l.pY.get((0,c.Hi)(`api/data_sources/${e}/${t}/columns/${r}`)).then(b).then((0,m.g)("DataSource.fetchColumns"))}},572382:(e,t,r)=>{r.d(t,{CU:()=>o,U1:()=>u,iC:()=>i,kc:()=>a,sT:()=>s});var n=r(32121);function a(e){return e?.edges.map(e=>e.node)}function s({networkStatus:e}){return e===n.pT.fetchMore}function i({networkStatus:e}){return e===n.pT.refetch}function o({networkStatus:e}){return e===n.pT.poll}function u({__typename:e,...t}){return t}},591105:(e,t,r)=>{r.d(t,{y:()=>n});let n=(e=0)=>new Promise(t=>setTimeout(t,e))},662874:(e,t,r)=>{r.d(t,{DK:()=>l,Go:()=>c,WL:()=>o,t2:()=>u});var n=r(610435),a=r(692738),s=r(745444),i=r(962179);let o=a.createContext(()=>void 0);function u({children:e}){let{lakehouseMap:t}=(0,s.j)(),r=(0,a.useCallback)(e=>t[e],[t]);return(0,n.Y)(o.Provider,{value:r,children:e})}function c(e){let t=(0,a.useContext)(o);return(0,a.useMemo)(()=>e.map(e=>{if(!(0,i.PG)(e))return e;let r=t(e.endpoint_id??"");return{...e,lakehouse:r}}),[e,t])}function l(e){let t=(0,a.useContext)(o);return(0,a.useMemo)(()=>{if(e){let r=t(e.endpoint_id??"");return{...e,lakehouse:r}}},[e,t])}},710283:(e,t,r)=>{r.d(t,{s:()=>o});var n=r(650003),a=r(692738),s=r(141078),i=r(940912);function o(e,t){let r=(0,s.mK)(t?.client),[o,u]=(0,a.useState)(()=>{if(t?.skip)return null;return r.subscribe({query:e,variables:t?.variables,fetchPolicy:t?.fetchPolicy,context:{...t?.context,currentImplicitContext:(0,i.yB)()}})}),c=(0,a.useRef)(!1);(0,a.useEffect)(()=>()=>{c.current=!0},[]);let l=(0,a.useRef)({client:r,subscription:e,options:t});(0,a.useEffect)(()=>{let a=t?.shouldResubscribe;"function"==typeof a&&(a=!!a(t)),t?.skip?(!t?.skip!=!l.current.options?.skip||c.current)&&(u(null),c.current=!1):(!1!==a&&(r!==l.current.client||e!==l.current.subscription||t?.fetchPolicy!==l.current.options?.fetchPolicy||!t?.skip!=!l.current.options?.skip||!(0,n.L)(t?.variables,l.current.options?.variables))||c.current)&&(u(r.subscribe({query:e,variables:t?.variables,fetchPolicy:t?.fetchPolicy,context:{...t?.context,currentImplicitContext:(0,i.yB)()}})),c.current=!1),Object.assign(l.current,{client:r,subscription:e,options:t})},[r,e,t,c.current]),(0,a.useEffect)(()=>{if(!o)return;let e=o.subscribe({next(e){let n={loading:!1,data:e.data,error:void 0,variables:t?.variables};l.current.options?.onSubscriptionData?.({client:r,subscriptionData:n})},error(e){l.current.options?.onError?.(e)},complete(){l.current.options?.onSubscriptionComplete?.()}});return()=>{e.unsubscribe()}},[o])}},733052:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(610435);r(692738);var a=r(802582);function s({primary:e=!1,srSilent:t=!1,children:r,placement:i,title:o,dataTestId:u,arrowPointAtCenter:c,...l}){return(0,n.Y)(a.p,{silenceScreenReader:t,useAsLabel:e,placement:i,title:o,dataTestId:u,arrowPointAtCenter:c,...l,children:r})}},745444:(e,t,r)=>{r.d(t,{j:()=>l});var n=r(298280),a=r.n(n),s=r(692738),i=r(919505),o=r(290766),u=r(572382),c=r(441535);function l({enableLiveUpdates:e=!0,fetchPolicy:t="cache-and-network",useMinimalQuery:r=!1,isEnabled:n=!0}={}){let d=(0,c.W)("databricks.fe.redash.listPollingInterval",5e3),[h,f]=(0,s.useState)(()=>(0,c.W)("databricks.fe.redash.enableWarehouseEventSubscription",!1)),p=e&&h&&!r,{data:m,loading:b,refetch:v}=(0,o.T)({pollInterval:e&&!p?d:0,fetchPolicy:t,nextFetchPolicy:p?"cache-first":void 0,skip:!n},r);return(0,i.A)({skip:!p||!n,refetchLakehouseStates:v,setEnableSubscription:f}),{loaded:!b,lakehouseMap:(0,s.useMemo)(()=>a()((0,u.kc)(m?.lakehouses),e=>e?.id),[m?.lakehouses])}}},794938:(e,t,r)=>{r.d(t,{E:()=>c,y:()=>i});var n=r(514503),a=r.n(n),s=r(923305);let i={adjustUrl:r(93353).WI},o=new Set,u=new Set;function c(e,t){let r=(0,s.Eq)(e),n=window.location.origin;if(!(!r||e===n||e.startsWith(`${n}/`)))return e;return t||r||(e=(0,s.Hi)(e)),e=i.adjustUrl(e)}a()(()=>{console.warn(`[Deprecation warning] Relative hrefs in <Link> are deprecated. Prefix hrefs with '/', e.g. <Link href="/dashboards">.
The following URLs were called as relative:
`,[...u].map(e=>`- ${e}`).join("\n")),u.forEach(e=>o.add(e)),u.clear()},3e3)},885364:(e,t,r)=>{r.d(t,{g:()=>i,u:()=>s});var n=r(987962),a=r.n(n);class s extends Error{__initiatorStack;errorCode;constructor(e,t,...r){super(t,...r),Error.captureStackTrace&&Error.captureStackTrace(this,s),this.name="SchemaLoadError",this.errorCode=e}isWaitingForEndpoint(){return 3===this.errorCode}}function i(e){return t=>{if(a()(t,"error")){let r=new s(t.error.code,`${t.error.message} (${e})`);return r.__initiatorStack=Error().stack,Promise.reject(r)}return t}}},913573:(e,t,r)=>{r.d(t,{A:()=>m});var n=r(610435),a=r(692738),s=r(923305),i=r(794938),o=r(6e4),u=r(497937),c=r(497895),l=r(79128),d=r(846007),h=r(217985),f=r(349297);let p=a.forwardRef(({noBasePath:e=!1,children:t,onClick:r,href:l,to:p,componentId:m,...b},v)=>{let g,k=(0,u.Zp)(),y=(0,o.CV)(),{theme:w}=(0,c.wn)(),P=(0,a.useCallback)(e=>{r&&r(e),e.defaultPrevented||(0,f.A)(e,k)},[r,k]);if(p&&!y){if("string"==typeof p&&(0,s.Eq)(p))throw Error("<Link to={...}> format does not accept absolute URLs. Please <ExternalLink> instead.");let{pathname:e,search:t,hash:r}=(0,d.t4)(p);g=`${e??"/"}${t??""}${r??""}`}else if(l){let t=l.startsWith("/#");g=(0,i.E)(l,e||t)}let C={color:w.colors.actionTertiaryTextDefault,textDecoration:"none",...b.style};return y&&p?(0,n.Y)(h.N,{to:p,onClick:r,componentId:m,...b,ref:v,style:C,asAnchorTag:!0,children:t}):(0,n.Y)("a",{...b,href:g,ref:v,onClick:P,style:C,children:t})});p.Button=function({children:e,noBasePath:t=!1,onClick:r,...s}){s.href&&(s={...s,href:(0,i.E)(s.href,t)});let o=(0,u.Zp)(),c=(0,a.useCallback)(e=>{r&&r(e),e.defaultPrevented||(0,f.A)(e,o)},[r,o]);return(0,n.Y)(l.$n,{...s,onClick:c,children:e})};let m=p},919505:(e,t,r)=>{r.d(t,{A:()=>m});var n=r(514503),a=r.n(n),s=r(692738),i=r(200356),o=r(65061),u=r(960718),c=r(441535),l=r(141078),d=r(886100),h=r(22191),f=r(278983);let p=(0,l.J1)`
  subscription WarehouseEventSubscription($ignoreScaledEvent: Boolean) @component(name: "DBSQLX.WareHouseUI") {
    warehouseEvent(ignoreScaledEvent: $ignoreScaledEvent) {
      warehouseId
      eventName
      eventTimeMs
    }
  }
`;function m({skip:e,refetchLakehouseStates:t,setEnableSubscription:r}){let n=(0,s.useMemo)(()=>{let e=(0,c.W)("databricks.fe.redash.warehouses.event.debounceWait",1e3)+Math.floor(500*Math.random());return a()(t,e)},[t]),l=(0,s.useRef)(!1);return(0,o.sw)(p,{variables:{ignoreScaledEvent:!0},shouldResubscribe:!0,skip:e,onSubscriptionData({subscriptionData:e,client:a}){if(e?.data?.warehouseEvent){let{warehouseId:r}=e.data.warehouseEvent;"0"!==r||l.current?"0"===r?t():function(e,t,r){let{warehouseId:n,eventName:a}=t;(a||"undefined")in i.tXm&&e.cache.updateFragment({fragment:u.xz,id:e.cache.identify({__typename:"Lakehouse",id:n})},e=>{if(e)return{...e,state:a,health:null}})||r()}(a,e.data.warehouseEvent,n):l.current=!0}else d.iT.sev2(h.Es.RedashCore,"warehouseEvent.subscription.onSubscriptionData.unexpectedData",{subscriptionData:e}),r(!1)},onError(e){(function(e){if(e?.[0]){let t=e[0],r=t.code??"unknown",n=t instanceof CloseEvent?"CloseEvent":t.type??"unknown";(0,f.y)("clientsideEvent",{eventName:"warehouse_subscription_error",eventType:`warehouse_subscription_error_${n}`,errorCode:r})}else d.iT.sev2(h.Es.RedashCore,"warehouseEvent.subscription.onUnexpectedError",{rawError:e})})(e),r(!1)}})}},960718:(e,t,r)=>{r.d(t,{MS:()=>d,SN:()=>h,vP:()=>l,xz:()=>f});var n=r(141078);let a=(0,n.J1)`
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
`,s=(0,n.J1)`
  fragment PermissionFragment on Permission {
    inheritedFromObject
    permissionLevel
    inherited
  }
`,i=(0,n.J1)`
  fragment AccessControlFragment on AccessControl {
    principalName {
      ...PrincipalNameFragment
    }
    allPermissions {
      ...PermissionFragment
    }
  }
  ${a}
  ${s}
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
  ${i}
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
`},962179:(e,t,r)=>{function n(e){return"databricks_internal"===e.type}function a(e){return"databricks_cluster"===e.type||"cluster"===e.type}function s(e){return"statements"in e}r.d(t,{PG:()=>n,n9:()=>s,y0:()=>a})}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/49503.89045d0eeb.chunk.js.map