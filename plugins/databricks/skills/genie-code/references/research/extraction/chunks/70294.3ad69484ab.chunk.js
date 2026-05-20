"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[70294],{65061:(e,t,r)=>{r.d(t,{IT:()=>o,_l:()=>s._l,n_:()=>s.n_,sw:()=>i.s});var a=r(692738),n=r(32121),s=r(141078),i=r(710283);let o=(e,t)=>{let r=(0,s.IT)(e,t);return!function(e,t){let r=(0,a.useRef)(0),{startPolling:s,stopPolling:i,error:o,networkStatus:u}=e;(0,a.useEffect)(()=>{if(!t||u&&u<n.pT.ready)return;if(o){let e=r.current+1,a=t*Math.pow(2,e);a<36e5?(s(a),r.current=e):(i(),r.current=0)}else r.current>0&&(s(t),r.current=0)},[o,t,s,i,u])}(r,t?.pollInterval),r}},71135:(e,t,r)=>{r.d(t,{U:()=>n.U,w:()=>a.w});var a=r(457428);r(434542);var n=r(437178)},108437:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(190656),n=r(516031),s=r(612732);let i=function(){let e=(0,a.f)();return{withPermissions:e,withActiveClusters:(0,n.c)(),withBudgetPolicy:(0,s.E)()}}},121143:(e,t,r)=>{r.d(t,{Q8:()=>h,_j:()=>m,ez:()=>f,r2:()=>d,yz:()=>c});var a=r(610435),n=r(692738),s=r(464991),i=r(993533),o=r(281063),u=r(927174),l=r(598987);let c="000000000000000d",d=(0,n.createContext)(void 0);function h({children:e}){let[t,r]=(0,o.B)("selected-warehouse",void 0),{data:f,isPending:m}=(0,l.h)(),{data:v,loading:p}=(0,s.CK)({enableLiveUpdates:!0}),g=m||p,b=(0,n.useMemo)(()=>{let e=v?.lakehouses?.edges?.filter(e=>e.node.id!==c),r=e?.find(e=>e.node.id===t)?.node,a=e?.find(e=>e.node.id===f?.spec.defaultSQLWarehouse)?.node,n=e?.find(e=>e.node.state===i.tXm.RUNNING)?.node;return r??a??n},[v,f?.spec.defaultSQLWarehouse,t]),{isAutoStarted:y}=(0,u.q)(b),k=(0,n.useMemo)(()=>({currentWarehouse:b?{id:b.id,name:b.name,autoStarted:y,state:b.state||void 0,health:b.health?.status||void 0}:void 0,setCurrentWarehouseId:r,loading:g}),[b,y,r,g]);return(0,a.Y)(d.Provider,{value:k,children:e})}function f(){let e=(0,n.useContext)(d);if(!e)throw Error("useWarehouseContext must be used within a WarehouseContextProvider");return e}function m(){let{currentWarehouse:e}=f();return e?.state===i.tXm.RUNNING?{currentWarehouse:e}:{currentWarehouse:void 0}}},170294:(e,t,r)=>{r.r(t),r.d(t,{RouteComponent:()=>v});var a=r(610435),n=r(692738),s=r(342411),i=r(268334),o=r(648782),u=r(113832),l=r(639408),c=r(121143),d=r(916421),h=r(427558),f=r(4223);let m=()=>{try{(0,d.$)()}catch(e){}return null},v=()=>{let{formatMessage:e}=(0,s.tz)(),{navigateWithinLakewatch:t}=(0,h.UQ)(),{shouldSkipOnboarding:r,isLoading:d,hasError:v,lakewatchIsNotEnabled:p}=(0,u.M)();if((0,n.useEffect)(()=>{if(d||v||p)return;r||t("/onboarding/setup",{replace:!0})},[d,r,v,p,t]),d)return(0,a.Y)(i.WL,{});if(p)return(0,a.Y)(f.M,{children:(0,a.Y)(l.K,{componentId:"lakewatch.onboarding.not-enabled",title:e({id:"+15aHY",defaultMessage:"Lakewatch not enabled"})})});if(v)return(0,a.Y)(f.M,{children:(0,a.Y)(l.K,{componentId:"lakewatch.onboarding.config-load-error",title:e({id:"5oHqn7",defaultMessage:"Something went wrong"}),description:e({id:"PGMGKw",defaultMessage:"Something went wrong while loading Lakewatch. Please try refreshing the page."})})});if(!r)return(0,a.Y)(i.WL,{});return(0,a.FD)(c.Q8,{children:[(0,a.Y)(m,{}),(0,a.Y)(o.sv,{})]})}},190656:(e,t,r)=>{r.d(t,{f:()=>n});var a=r(936985);function n(){let e=(0,a.mJ)()||{};if(!e.enableClusterAclsByTier||!1===e.enableClusterAclsConfig)return!1;return!0}},232169:(e,t,r)=>{r.d(t,{Z:()=>u,q:()=>o});var a=r(743166),n=r(692738),s=r(252176);function i(e,t,r,a,n,s,i){try{var o=e[s](i),u=o.value}catch(e){r(e);return}o.done?t(u):Promise.resolve(u).then(a,n)}function o(e){let t=(0,s.N)(),r=(0,n.useCallback)((...t)=>{var r;return(r=function*(){return yield e.queryFn?.(...t)},function(){var e=this,t=arguments;return new Promise(function(a,n){var s=r.apply(e,t);function o(e){i(s,a,n,o,u,"next",e)}function u(e){i(s,a,n,o,u,"throw",e)}o(void 0)})})()},[e.queryFn]);return(0,a.q)({...e,queryFn:r,refetchOnWindowFocus:e.refetchOnWindowFocus??(e=>{if("error"===e.state.status)return!0;return!1}),refetchOnMount:e.refetchOnMount??!0,retry:e.retry??t,throwOnError:e.throwOnError??!0})}let u=e=>{let t=e[0];return[{...t,query:{...t.query,cursor:void 0}}]}},281063:(e,t,r)=>{r.d(t,{B:()=>i});var a=r(692738),n=r(682785),s=r(288840);let i=(e,t,r=s.wt)=>{let i=(0,a.useMemo)(()=>Array.isArray(e)?e:[e],[e]),[o,u]=(0,a.useState)(()=>(0,s.Oi)(i,t,r)),l=(0,n._6)((0,a.useCallback)(e=>{(0,s.G_)(i,e,r)},[i,r]),1);return(0,a.useEffect)(()=>{l(o)},[o,l]),[o,u]}},288840:(e,t,r)=>{r.d(t,{G_:()=>u,Oi:()=>o,Wh:()=>i,wt:()=>s});var a=r(722381),n=r(845690);let s=1,i=(e,t=s,r=!0)=>{let n=Array.isArray(e)?e:[e],i=`lakewatch/${n.join("-")}`;return(0,a.FL)(i,t,r)},o=(e,t,r=s,a=!0)=>{let o=i(e,r);return(0,n._S)(o,r,a,t)},u=(e,t,r=s,a=!0)=>{let o=i(e,r,a);(0,n.AP)(o,r,a,t)}},334017:(e,t,r)=>{r.d(t,{F_:()=>i,ed:()=>o,m8:()=>n,p6:()=>s});var a=r(697453);let n=20;function s(e,t,r){a.ds.isAvailable()&&a.ds.call({title:{value:e},description:{value:t},root:{componentId:"dbsql.edge.form.error_notification",severity:"error",isCloseable:!0,duration:(r?.duration??8)*1e3}})}function i(e){let t=e?.map(e=>e?.message).filter(Boolean);return t?.length?t.join(" "):void 0}function o(e,t,r){let a=i(t);a&&s(e,a,r)}},398915:(e,t,r)=>{r.d(t,{bA:()=>d,qK:()=>h,wi:()=>f});var a=r(65061),n=r(960718),s=r(441535),i=r(141078),o=r(748592),u=r(108437);let l=(0,o.W)(()=>(0,s.W)("databricks.fe.warehouses.useSlimLakehousesQueryForList",!1)?(0,i.J1)`
        query LakehousesForRedashBasic @component(name: "DBSQLX.WareHouseUI") {
          lakehouses(view: BASIC) {
            edges {
              node {
                id
                name
              }
              cursor
            }
          }
        }
      `:(0,i.J1)`
        query LakehousesForRedashBasicBulk @component(name: "DBSQLX.WareHouseUI") {
          lakehouses {
            edges {
              node {
                id
                name
              }
              cursor
            }
          }
        }
      `),c=(0,o.W)(()=>(0,s.W)("databricks.fe.warehouses.useSlimLakehousesQueryForList",!1)?(0,i.J1)`
        query LakehousesForRedashSlim($withPermissions: Boolean!, $withActiveClusters: Boolean!)
        @component(name: "DBSQLX.WareHouseUI") {
          lakehouses(view: UI) {
            edges {
              node {
                ...LakehouseListFragment
              }
              cursor
            }
          }
        }
        ${n.MS}
      `:(0,i.J1)`
        query LakehousesForRedash($withPermissions: Boolean!, $withActiveClusters: Boolean!)
        @component(name: "DBSQLX.WareHouseUI") {
          lakehouses {
            edges {
              node {
                ...LakehouseForMutationFragment
              }
              cursor
            }
          }
        }
        ${n.SN}
      `),d=()=>c.getActiveValue(),h=e=>(0,a.IT)(l.getActiveValue(),{fetchPolicy:"cache-and-network",...e,variables:{...e?.variables}}),f=e=>{let t=(0,u.A)();return(0,a.IT)(d(),{fetchPolicy:"cache-and-network",...e,variables:{...e?.variables,...t}})}},411056:(e,t,r)=>{r.d(t,{a:()=>d,f:()=>h});var a=r(692738),n=r(65061),s=r(334017),i=r(342411),o=r(141078);function u(e,t,r,a,n,s,i){try{var o=e[s](i),u=o.value}catch(e){r(e);return}o.done?t(u):Promise.resolve(u).then(a,n)}function l(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var s=e.apply(t,r);function i(e){u(s,a,n,i,o,"next",e)}function o(e){u(s,a,n,i,o,"throw",e)}i(void 0)})}}let c=(0,o.J1)`
  mutation startCluster($input: ClusterStartInput!) @component(name: "DBSQLX.CatalogExplorer") {
    clusterStart(input: $input) {
      errors {
        code
        message
      }
      entity {
        id
        state
      }
    }
  }
`,d=e=>{let t=(0,i.tz)(),[r,o]=(0,n.n_)(c,{variables:{input:{id:e}}});return[(0,a.useCallback)(()=>l(function*(){let e=t.formatMessage({id:"YHEFlQ",defaultMessage:"Error while starting cluster."});try{let{data:t,errors:a}=yield r(),n=[...a||[],...t?.clusterStart?.errors||[]];return(0,s.ed)(e,n),o}catch(t){(0,s.ed)(e,[t])}})(),[t,r,o]),o]},h=()=>{let e=(0,i.tz)(),[t,r]=(0,n.n_)(c);return[(0,a.useCallback)(a=>l(function*(){let n=e.formatMessage({id:"YHEFlQ",defaultMessage:"Error while starting cluster."});try{let{data:e,errors:i}=yield t({variables:{input:{id:a}}}),o=[...i||[],...e?.clusterStart?.errors||[]];return(0,s.ed)(n,o),r}catch(e){(0,s.ed)(n,[e])}})(),[e,t,r]),r]}},434542:()=>{},437178:(e,t,r)=>{r.d(t,{A:()=>n,U:()=>a});let a=r(692738).createContext({loaded:!1}),n=a},457428:(e,t,r)=>{r.d(t,{w:()=>a});let a=new Map;[{id:"AWS",name:"Amazon Web Services",vendor:"Amazon",helpBaseUrl:"https://docs.databricks.com"},{id:"Azure",name:"Microsoft Azure",vendor:"Microsoft",helpBaseUrl:"https://learn.microsoft.com/azure/databricks"},{id:"GCP",name:"Google Cloud",vendor:"Google",helpBaseUrl:"https://docs.gcp.databricks.com"}].forEach(e=>{a.set(e.id,e)})},516031:(e,t,r)=>{r.d(t,{c:()=>n});var a=r(441535);function n(){let e=(0,a.W)("databricks.fe.redash.warehouseMonitorStatsNewApi",!1),t=(0,a.W)("databricks.sqlgateway.proxy.getWarehouseStatsInternal.enabled",!1);return e&&t}},558026:(e,t,r)=>{r.d(t,{A:()=>v,J:()=>m});var a=r(813342),n=r.n(a),s=r(692738),i=r(65061),o=r(334017),u=r(342411),l=r(141078),c=r(398915),d=r(108437),h=r(960718);function f(e,t,r,a,n,s,i){try{var o=e[s](i),u=o.value}catch(e){r(e);return}o.done?t(u):Promise.resolve(u).then(a,n)}let m=(0,l.J1)`
  mutation startLakehouseForRedash(
    $input: LakehouseStartInput!
    $withPermissions: Boolean!
    $withActiveClusters: Boolean!
    $withBudgetPolicy: Boolean = false
  ) @component(name: "DBSQLX.WareHouseUI") {
    lakehouseStart(input: $input) {
      entity {
        ...FullLakehouseFragment
      }
      errors {
        message
        code
        helpUrl
        traceId
      }
    }
  }
  ${h.vP}
`,v=e=>{let t,r=(0,u.tz)(),[a,l]=(t=(0,d.A)(),(0,i.n_)(m,{variables:{input:{id:e},...t},refetchQueries:[{query:(0,c.bA)(),variables:t}]}));return[(0,s.useCallback)(()=>{var e;return(e=function*(){let e=r.formatMessage({id:"EEt+YV",defaultMessage:"Error while starting SQL warehouse."});try{let t=yield a(),r=n()(t)?[]:[...t.errors??[],...t.data?.lakehouseStart?.errors??[]];return(0,o.ed)(e,r,{duration:o.m8}),t}catch(t){(0,o.ed)(e,[t],{duration:o.m8})}},function(){var t=this,r=arguments;return new Promise(function(a,n){var s=e.apply(t,r);function i(e){f(s,a,n,i,o,"next",e)}function o(e){f(s,a,n,i,o,"throw",e)}i(void 0)})})()},[a,r]),l]}},612732:(e,t,r)=>{r.d(t,{E:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.warehouses.budgetPolicyEnabledForWarehouses",!1)}},710283:(e,t,r)=>{r.d(t,{s:()=>o});var a=r(650003),n=r(692738),s=r(141078),i=r(940912);function o(e,t){let r=(0,s.mK)(t?.client),[o,u]=(0,n.useState)(()=>{if(t?.skip)return null;return r.subscribe({query:e,variables:t?.variables,fetchPolicy:t?.fetchPolicy,context:{...t?.context,currentImplicitContext:(0,i.yB)()}})}),l=(0,n.useRef)(!1);(0,n.useEffect)(()=>()=>{l.current=!0},[]);let c=(0,n.useRef)({client:r,subscription:e,options:t});(0,n.useEffect)(()=>{let n=t?.shouldResubscribe;"function"==typeof n&&(n=!!n(t)),t?.skip?(!t?.skip!=!c.current.options?.skip||l.current)&&(u(null),l.current=!1):(!1!==n&&(r!==c.current.client||e!==c.current.subscription||t?.fetchPolicy!==c.current.options?.fetchPolicy||!t?.skip!=!c.current.options?.skip||!(0,a.L)(t?.variables,c.current.options?.variables))||l.current)&&(u(r.subscribe({query:e,variables:t?.variables,fetchPolicy:t?.fetchPolicy,context:{...t?.context,currentImplicitContext:(0,i.yB)()}})),l.current=!1),Object.assign(c.current,{client:r,subscription:e,options:t})},[r,e,t,l.current]),(0,n.useEffect)(()=>{if(!o)return;let e=o.subscribe({next(e){let a={loading:!1,data:e.data,error:void 0,variables:t?.variables};c.current.options?.onSubscriptionData?.({client:r,subscriptionData:a})},error(e){c.current.options?.onError?.(e)},complete(){c.current.options?.onSubscriptionComplete?.()}});return()=>{e.unsubscribe()}},[o])}},743166:(e,t,r)=>{r.d(t,{q:()=>o});var a=r(36119),n=r(518739),s=class extends a.${constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e){super.setOptions({...e,behavior:(0,n.PL)()})}getOptimisticResult(e){return e.behavior=(0,n.PL)(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){let{state:r}=e,a=super.createResult(e,t),{isFetching:s,isRefetching:i,isError:o,isRefetchError:u}=a,l=r.fetchMeta?.fetchMore?.direction,c=o&&"forward"===l,d=s&&"forward"===l,h=o&&"backward"===l,f=s&&"backward"===l;return{...a,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:(0,n.rB)(t,r.data),hasPreviousPage:(0,n.RQ)(t,r.data),isFetchNextPageError:c,isFetchingNextPage:d,isFetchPreviousPageError:h,isFetchingPreviousPage:f,isRefetchError:u&&!c&&!h,isRefetching:i&&!d&&!f}}},i=r(629308);function o(e,t){return(0,i.t)(e,s,t)}},758242:(e,t,r)=>{r.d(t,{H:()=>g});var a=r(692738),n=r(257861),s=r(411056),i=r(813342),o=r.n(i),u=r(65061),l=r(334017),c=r(342411),d=r(108437),h=r(558026),f=r(398915);function m(e,t,r,a,n,s,i){try{var o=e[s](i),u=o.value}catch(e){r(e);return}o.done?t(u):Promise.resolve(u).then(a,n)}var v=r(962179);let p=["TERMINATED","TERMINATING","UNKNOWN"];function g(){let[e]=(()=>{let e=(0,c.tz)(),t=(0,d.A)(),[r,n]=(0,u.n_)(h.J);return[(0,a.useCallback)(a=>{var n;return(n=function*(){let n=e.formatMessage({id:"EEt+YV",defaultMessage:"Error while starting SQL warehouse."});try{let e={input:{id:a},...t},s={refetchQueries:[{query:(0,f.bA)(),variables:t}]},i=yield r({variables:e,...s}),u=o()(i)?[]:[...i.errors??[],...i.data?.lakehouseStart?.errors??[]];return(0,l.ed)(n,u,{duration:l.m8}),i}catch(e){(0,l.ed)(n,[e],{duration:l.m8})}},function(){var e=this,t=arguments;return new Promise(function(r,a){var s=n.apply(e,t);function i(e){m(s,r,a,i,o,"next",e)}function o(e){m(s,r,a,i,o,"throw",e)}i(void 0)})})()},[r,e,t]),n]})(),[t]=(0,s.f)();return{startEndpoint:(0,a.useCallback)(r=>{if(!r)return;let a=r?.endpoint_id??"";if((0,v.y0)(r))return t(a);return e(a)},[t,e]),startUnifiedPickerEndpoint:(0,a.useCallback)(r=>{if(!r)return;let a=r?.id??"";if(r.type!==n.Q.CLUSTER)return e(a);if(r.compute.state&&p.includes(r.compute.state))return t(a)},[t,e])}}},916421:(e,t,r)=>{r.d(t,{$:()=>i});var a=r(553200),n=r(970559),s=r(232169);let i=({search:e,tags:t,limit:r=50}={})=>(0,s.q)({...(0,a.Ak1)({...(0,n.KQ)(),query:{limit:r,search:e,tags:t}}),getNextPageParam:e=>e.metadata?.cursor})},927174:(e,t,r)=>{r.d(t,{q:()=>o});var a=r(692738),n=r(758242),s=r(257861),i=r(993533);function o(e){let{startUnifiedPickerEndpoint:t}=(0,n.H)(),r=(0,a.useRef)(new Set);return(0,a.useEffect)(()=>{e&&(e.state===i.tXm.STOPPED||null===e.state)?r.current.has(e.id)||(r.current.add(e.id),t({type:s.Q.SQL_WAREHOUSE,id:e.id,compute:e})):e?.state===i.tXm.RUNNING&&r.current.delete(e.id)},[e,t]),{isAutoStarted:void 0!==e&&r.current.has(e.id)}}},936985:(e,t,r)=>{r.d(t,{Ay:()=>h,mJ:()=>c,wy:()=>d});var a=r(323598),n=r.n(a),s=r(692738),i=r(71135),o=r(22191),u=r(886100),l=r(570321);function c(){return s.useContext(i.U).settings}function d(e,t){let r=c(),a=null,s=!1;l.e.isAvailable()&&(a=l.e.call({flagName:e,defaultValue:null}),s=l.e.call({flagName:"databricks.fe.redash.useGetFlagValueSyncRpcForUseConf",defaultValue:!1}));let i=n()(r,[e]);if(s||u.iT.log(o.Es.GqlInfra,"useConfLegacyFallback",`confKey=${e}`),s)if(null!==a)return a;else return void 0!==i&&u.iT.sev2(o.Es.GqlInfra,"useConf: flagValue is empty and sessionConfigValue is defined",`confKey=${e}, sessionConfigValue=${i}, flagValue=${a}`),t;if(void 0===i)return t;return i}let h=d},960718:(e,t,r)=>{r.d(t,{MS:()=>d,SN:()=>h,vP:()=>c,xz:()=>f});var a=r(141078);let n=(0,a.J1)`
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
`,s=(0,a.J1)`
  fragment PermissionFragment on Permission {
    inheritedFromObject
    permissionLevel
    inherited
  }
`,i=(0,a.J1)`
  fragment AccessControlFragment on AccessControl {
    principalName {
      ...PrincipalNameFragment
    }
    allPermissions {
      ...PermissionFragment
    }
  }
  ${n}
  ${s}
`,o=(0,a.J1)`
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
`,u=(0,a.J1)`
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
`,l=(0,a.J1)`
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
`,c=(0,a.J1)`
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
  ${l}
  ${o}
`,d=(0,a.J1)`
  fragment LakehouseListFragment on Lakehouse {
    ...LakehouseBasicAttributesFragment
    permissions @include(if: $withPermissions)
  }
  ${u}
`,h=(0,a.J1)`
  fragment LakehouseForMutationFragment on Lakehouse {
    ...LakehouseBasicAttributesFragment
    ...LakehouseAdvancedAttributesFragment
    permissions @include(if: $withPermissions)
  }
  ${u}
  ${l}
`,f=(0,a.J1)`
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
`},962179:(e,t,r)=>{function a(e){return"databricks_internal"===e.type}function n(e){return"databricks_cluster"===e.type||"cluster"===e.type}function s(e){return"statements"in e}r.d(t,{PG:()=>a,n9:()=>s,y0:()=>n})},970559:(e,t,r)=>{r.d(t,{$e:()=>o,KQ:()=>s,_O:()=>n});var a=r(383810);let n=e=>{e.metadata||(e.metadata={version:0,name:""}),e.metadata.version=(e.metadata?.version||0)+1},s=()=>({client:a.Sn,withCredentials:!0}),i="lakewatch-web";function o(e){if(!e.metadata)return{...e,metadata:{name:"",clientOfOrigin:i}};return{...e,metadata:{...e.metadata,clientOfOrigin:i}}}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/70294.3ad69484ab.chunk.js.map