"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[94701],{4223:(e,t,r)=>{r.d(t,{M:()=>i});var a=r(610435),n=r(497895),s=r(797580);let i=({children:e,style:t})=>{let{theme:r}=(0,n.wn)();return(0,a.Y)("div",{css:{display:"flex",flexDirection:"column",height:"calc(100vh - 78px)",paddingLeft:r.spacing.md,paddingRight:r.spacing.md,paddingTop:r.spacing.md,...(0,s.V)(r.colors.actionDefaultBackgroundHover,r.colors.backgroundSecondary,r.colors.backgroundPrimary)},style:t,children:e})}},65061:(e,t,r)=>{r.d(t,{IT:()=>o,_l:()=>s._l,n_:()=>s.n_,sw:()=>i.s});var a=r(692738),n=r(32121),s=r(141078),i=r(710283);let o=(e,t)=>{let r=(0,s.IT)(e,t);return!function(e,t){let r=(0,a.useRef)(0),{startPolling:s,stopPolling:i,error:o,networkStatus:l}=e;(0,a.useEffect)(()=>{if(!t||l&&l<n.pT.ready)return;if(o){let e=r.current+1,a=t*Math.pow(2,e);a<36e5?(s(a),r.current=e):(i(),r.current=0)}else r.current>0&&(s(t),r.current=0)},[o,t,s,i,l])}(r,t?.pollInterval),r}},71135:(e,t,r)=>{r.d(t,{U:()=>n.U,w:()=>a.w});var a=r(457428);r(434542);var n=r(437178)},108437:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(190656),n=r(516031),s=r(612732);let i=function(){let e=(0,a.f)();return{withPermissions:e,withActiveClusters:(0,n.c)(),withBudgetPolicy:(0,s.E)()}}},121143:(e,t,r)=>{r.d(t,{Q8:()=>f,_j:()=>h,ez:()=>m,r2:()=>d,yz:()=>c});var a=r(610435),n=r(692738),s=r(464991),i=r(993533),o=r(281063),l=r(927174),u=r(598987);let c="000000000000000d",d=(0,n.createContext)(void 0);function f({children:e}){let[t,r]=(0,o.B)("selected-warehouse",void 0),{data:m,isPending:h}=(0,u.h)(),{data:p,loading:v}=(0,s.CK)({enableLiveUpdates:!0}),b=h||v,g=(0,n.useMemo)(()=>{let e=p?.lakehouses?.edges?.filter(e=>e.node.id!==c),r=e?.find(e=>e.node.id===t)?.node,a=e?.find(e=>e.node.id===m?.spec.defaultSQLWarehouse)?.node,n=e?.find(e=>e.node.state===i.tXm.RUNNING)?.node;return r??a??n},[p,m?.spec.defaultSQLWarehouse,t]),{isAutoStarted:y}=(0,l.q)(g),k=(0,n.useMemo)(()=>({currentWarehouse:g?{id:g.id,name:g.name,autoStarted:y,state:g.state||void 0,health:g.health?.status||void 0}:void 0,setCurrentWarehouseId:r,loading:b}),[g,y,r,b]);return(0,a.Y)(d.Provider,{value:k,children:e})}function m(){let e=(0,n.useContext)(d);if(!e)throw Error("useWarehouseContext must be used within a WarehouseContextProvider");return e}function h(){let{currentWarehouse:e}=m();return e?.state===i.tXm.RUNNING?{currentWarehouse:e}:{currentWarehouse:void 0}}},190656:(e,t,r)=>{r.d(t,{f:()=>n});var a=r(936985);function n(){let e=(0,a.mJ)()||{};if(!e.enableClusterAclsByTier||!1===e.enableClusterAclsConfig)return!1;return!0}},281063:(e,t,r)=>{r.d(t,{B:()=>i});var a=r(692738),n=r(682785),s=r(288840);let i=(e,t,r=s.wt)=>{let i=(0,a.useMemo)(()=>Array.isArray(e)?e:[e],[e]),[o,l]=(0,a.useState)(()=>(0,s.Oi)(i,t,r)),u=(0,n._6)((0,a.useCallback)(e=>{(0,s.G_)(i,e,r)},[i,r]),1);return(0,a.useEffect)(()=>{u(o)},[o,u]),[o,l]}},288840:(e,t,r)=>{r.d(t,{G_:()=>l,Oi:()=>o,Wh:()=>i,wt:()=>s});var a=r(722381),n=r(845690);let s=1,i=(e,t=s,r=!0)=>{let n=Array.isArray(e)?e:[e],i=`lakewatch/${n.join("-")}`;return(0,a.FL)(i,t,r)},o=(e,t,r=s,a=!0)=>{let o=i(e,r);return(0,n._S)(o,r,a,t)},l=(e,t,r=s,a=!0)=>{let o=i(e,r,a);(0,n.AP)(o,r,a,t)}},334017:(e,t,r)=>{r.d(t,{F_:()=>i,ed:()=>o,m8:()=>n,p6:()=>s});var a=r(697453);let n=20;function s(e,t,r){a.ds.isAvailable()&&a.ds.call({title:{value:e},description:{value:t},root:{componentId:"dbsql.edge.form.error_notification",severity:"error",isCloseable:!0,duration:(r?.duration??8)*1e3}})}function i(e){let t=e?.map(e=>e?.message).filter(Boolean);return t?.length?t.join(" "):void 0}function o(e,t,r){let a=i(t);a&&s(e,a,r)}},398915:(e,t,r)=>{r.d(t,{bA:()=>d,qK:()=>f,wi:()=>m});var a=r(65061),n=r(960718),s=r(441535),i=r(141078),o=r(748592),l=r(108437);let u=(0,o.W)(()=>(0,s.W)("databricks.fe.warehouses.useSlimLakehousesQueryForList",!1)?(0,i.J1)`
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
      `),d=()=>c.getActiveValue(),f=e=>(0,a.IT)(u.getActiveValue(),{fetchPolicy:"cache-and-network",...e,variables:{...e?.variables}}),m=e=>{let t=(0,l.A)();return(0,a.IT)(d(),{fetchPolicy:"cache-and-network",...e,variables:{...e?.variables,...t}})}},411056:(e,t,r)=>{r.d(t,{a:()=>d,f:()=>f});var a=r(692738),n=r(65061),s=r(334017),i=r(342411),o=r(141078);function l(e,t,r,a,n,s,i){try{var o=e[s](i),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(a,n)}function u(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var s=e.apply(t,r);function i(e){l(s,a,n,i,o,"next",e)}function o(e){l(s,a,n,i,o,"throw",e)}i(void 0)})}}let c=(0,o.J1)`
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
`,d=e=>{let t=(0,i.tz)(),[r,o]=(0,n.n_)(c,{variables:{input:{id:e}}});return[(0,a.useCallback)(()=>u(function*(){let e=t.formatMessage({id:"YHEFlQ",defaultMessage:"Error while starting cluster."});try{let{data:t,errors:a}=yield r(),n=[...a||[],...t?.clusterStart?.errors||[]];return(0,s.ed)(e,n),o}catch(t){(0,s.ed)(e,[t])}})(),[t,r,o]),o]},f=()=>{let e=(0,i.tz)(),[t,r]=(0,n.n_)(c);return[(0,a.useCallback)(a=>u(function*(){let n=e.formatMessage({id:"YHEFlQ",defaultMessage:"Error while starting cluster."});try{let{data:e,errors:i}=yield t({variables:{input:{id:a}}}),o=[...i||[],...e?.clusterStart?.errors||[]];return(0,s.ed)(n,o),r}catch(e){(0,s.ed)(n,[e])}})(),[e,t,r]),r]}},427558:(e,t,r)=>{r.d(t,{HD:()=>o,UQ:()=>u});var a=r(692738),n=r(737358),s=r(846007),i=r(488655);let o=e=>(0,n.AO)((0,s.t4)(e)),l=e=>o(`/lakewatch${e}`),u=()=>{let e=(0,i.Zp)(),t=(0,a.useCallback)((t,r)=>{e(l(t),r)},[e]),r=(0,a.useCallback)(e=>l(e),[]),n=(0,a.useCallback)(e=>o(`/editor/notebooks/${e}`),[]),s=(0,a.useCallback)((t,r)=>{e(o(t),r)},[e]);return{navigate:e,navigateWithinLakewatch:t,navigateWithinDatabricks:s,generateLakewatchRoute:r,generateNotebookUrl:n}}},434542:()=>{},437178:(e,t,r)=>{r.d(t,{A:()=>n,U:()=>a});let a=r(692738).createContext({loaded:!1}),n=a},457428:(e,t,r)=>{r.d(t,{w:()=>a});let a=new Map;[{id:"AWS",name:"Amazon Web Services",vendor:"Amazon",helpBaseUrl:"https://docs.databricks.com"},{id:"Azure",name:"Microsoft Azure",vendor:"Microsoft",helpBaseUrl:"https://learn.microsoft.com/azure/databricks"},{id:"GCP",name:"Google Cloud",vendor:"Google",helpBaseUrl:"https://docs.gcp.databricks.com"}].forEach(e=>{a.set(e.id,e)})},516031:(e,t,r)=>{r.d(t,{c:()=>n});var a=r(441535);function n(){let e=(0,a.W)("databricks.fe.redash.warehouseMonitorStatsNewApi",!1),t=(0,a.W)("databricks.sqlgateway.proxy.getWarehouseStatsInternal.enabled",!1);return e&&t}},558026:(e,t,r)=>{r.d(t,{A:()=>p,J:()=>h});var a=r(813342),n=r.n(a),s=r(692738),i=r(65061),o=r(334017),l=r(342411),u=r(141078),c=r(398915),d=r(108437),f=r(960718);function m(e,t,r,a,n,s,i){try{var o=e[s](i),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(a,n)}let h=(0,u.J1)`
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
  ${f.vP}
`,p=e=>{let t,r=(0,l.tz)(),[a,u]=(t=(0,d.A)(),(0,i.n_)(h,{variables:{input:{id:e},...t},refetchQueries:[{query:(0,c.bA)(),variables:t}]}));return[(0,s.useCallback)(()=>{var e;return(e=function*(){let e=r.formatMessage({id:"EEt+YV",defaultMessage:"Error while starting SQL warehouse."});try{let t=yield a(),r=n()(t)?[]:[...t.errors??[],...t.data?.lakehouseStart?.errors??[]];return(0,o.ed)(e,r,{duration:o.m8}),t}catch(t){(0,o.ed)(e,[t],{duration:o.m8})}},function(){var t=this,r=arguments;return new Promise(function(a,n){var s=e.apply(t,r);function i(e){m(s,a,n,i,o,"next",e)}function o(e){m(s,a,n,i,o,"throw",e)}i(void 0)})})()},[a,r]),u]}},595615:(e,t,r)=>{r.d(t,{AO:()=>d,Ox:()=>m,RK:()=>p,ic:()=>v,rA:()=>h,uV:()=>f});var a=r(692738),n=r(160603),s=r(441535),i=r(412836),o=r(425373);function l(e,t,r,a,n,s,i){try{var o=e[s](i),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(a,n)}(0,n.setLogger)({log:console.log,warn:console.warn,error:()=>{}});let u={retry:!1,refetchOnWindowFocus:!1,staleTime:3e5},c=new Map;function d(e){let t=(0,s.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),r={...u,...e,enabled:e?.enabled!==!1&&t},a={...u,...e,enabled:e?.enabled!==!1&&!t};c.set(JSON.stringify(e.queryKey),e.queryKey);let o=(0,i.IT)(r),l=(0,n.useQuery)(a);return t?o:l}function f({queries:e}){let t=(0,s.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),r=e.map(e=>({...u,...e,enabled:e?.enabled!==!1&&t})),a=e.map(e=>({...u,...e,enabled:e?.enabled!==!1&&!t}));e.forEach(e=>c.set(JSON.stringify(e.queryKey),e.queryKey));let i=(0,o.E)({queries:r}),l=(0,n.useQueries)(a);return t?i:l}function m({queryFn:e}){let t=(0,s.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),r=(0,n.useQueryClient)(),o=e();return(0,a.useCallback)((e,a={})=>t?i.aH.getActiveValue().fetchQuery({...a,...o(e)},u):r.fetchQuery({...a,...o(e)},u),[o,t,r])}function h(){let[e,t]=(0,a.useState)(0),r=(0,n.useQueryClient)(),o=(0,s.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1);return{invalidate:(e,a)=>{var n;return(n=function*(){t(e=>e+1);try{if(e)yield o?i.aH.getActiveValue().invalidateQueries(e):r.invalidateQueries(e),c.delete(JSON.stringify(e));else{let e=Array.from(c.values()).filter(e=>{if(!Array.isArray(e))return!1;if(!a)return!0;return e.some(e=>"string"==typeof e&&e.includes(a))}).filter(e=>void 0!==e).map(e=>o?i.aH.getActiveValue().invalidateQueries(e):r.invalidateQueries(e));yield Promise.allSettled(e),c=new Map}}finally{t(e=>e-1)}},function(){var e=this,t=arguments;return new Promise(function(r,a){var s=n.apply(e,t);function i(e){l(s,r,a,i,o,"next",e)}function o(e){l(s,r,a,i,o,"throw",e)}i(void 0)})})()},isLoadingInvalidation:e>0}}function p(e){for(let t of e){let e=t.isIdle??void 0;if(!v({isIdle:e,status:t.status??void 0,fetchStatus:t.fetchStatus??void 0}))return!1}return!0}function v(e){let t=(0,s.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),r=e.isIdle??!1;if(t)return"fetchStatus"in e&&"loading"===e.status&&"idle"===e.fetchStatus;return r}},598987:(e,t,r)=>{r.d(t,{h:()=>i,n:()=>o});var a=r(553200),n=r(526157),s=r(382953);let i=({refetchInterval:e=!1,enabled:t=!0,throwOnError:r,refetchOnWindowFocus:s}={})=>(0,n.I)({...(0,a.XWh)(),refetchInterval:e,enabled:t,...void 0!==r?{throwOnError:r}:{},...void 0!==s?{refetchOnWindowFocus:s}:{}}),o=()=>{let e=(0,s.jE)();return t=>{e.setQueryData((0,a.eic)(),t)}}},612732:(e,t,r)=>{r.d(t,{E:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.warehouses.budgetPolicyEnabledForWarehouses",!1)}},710283:(e,t,r)=>{r.d(t,{s:()=>o});var a=r(650003),n=r(692738),s=r(141078),i=r(940912);function o(e,t){let r=(0,s.mK)(t?.client),[o,l]=(0,n.useState)(()=>{if(t?.skip)return null;return r.subscribe({query:e,variables:t?.variables,fetchPolicy:t?.fetchPolicy,context:{...t?.context,currentImplicitContext:(0,i.yB)()}})}),u=(0,n.useRef)(!1);(0,n.useEffect)(()=>()=>{u.current=!0},[]);let c=(0,n.useRef)({client:r,subscription:e,options:t});(0,n.useEffect)(()=>{let n=t?.shouldResubscribe;"function"==typeof n&&(n=!!n(t)),t?.skip?(!t?.skip!=!c.current.options?.skip||u.current)&&(l(null),u.current=!1):(!1!==n&&(r!==c.current.client||e!==c.current.subscription||t?.fetchPolicy!==c.current.options?.fetchPolicy||!t?.skip!=!c.current.options?.skip||!(0,a.L)(t?.variables,c.current.options?.variables))||u.current)&&(l(r.subscribe({query:e,variables:t?.variables,fetchPolicy:t?.fetchPolicy,context:{...t?.context,currentImplicitContext:(0,i.yB)()}})),u.current=!1),Object.assign(c.current,{client:r,subscription:e,options:t})},[r,e,t,u.current]),(0,n.useEffect)(()=>{if(!o)return;let e=o.subscribe({next(e){let a={loading:!1,data:e.data,error:void 0,variables:t?.variables};c.current.options?.onSubscriptionData?.({client:r,subscriptionData:a})},error(e){c.current.options?.onError?.(e)},complete(){c.current.options?.onSubscriptionComplete?.()}});return()=>{e.unsubscribe()}},[o])}},758242:(e,t,r)=>{r.d(t,{H:()=>b});var a=r(692738),n=r(257861),s=r(411056),i=r(813342),o=r.n(i),l=r(65061),u=r(334017),c=r(342411),d=r(108437),f=r(558026),m=r(398915);function h(e,t,r,a,n,s,i){try{var o=e[s](i),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(a,n)}var p=r(962179);let v=["TERMINATED","TERMINATING","UNKNOWN"];function b(){let[e]=(()=>{let e=(0,c.tz)(),t=(0,d.A)(),[r,n]=(0,l.n_)(f.J);return[(0,a.useCallback)(a=>{var n;return(n=function*(){let n=e.formatMessage({id:"EEt+YV",defaultMessage:"Error while starting SQL warehouse."});try{let e={input:{id:a},...t},s={refetchQueries:[{query:(0,m.bA)(),variables:t}]},i=yield r({variables:e,...s}),l=o()(i)?[]:[...i.errors??[],...i.data?.lakehouseStart?.errors??[]];return(0,u.ed)(n,l,{duration:u.m8}),i}catch(e){(0,u.ed)(n,[e],{duration:u.m8})}},function(){var e=this,t=arguments;return new Promise(function(r,a){var s=n.apply(e,t);function i(e){h(s,r,a,i,o,"next",e)}function o(e){h(s,r,a,i,o,"throw",e)}i(void 0)})})()},[r,e,t]),n]})(),[t]=(0,s.f)();return{startEndpoint:(0,a.useCallback)(r=>{if(!r)return;let a=r?.endpoint_id??"";if((0,p.y0)(r))return t(a);return e(a)},[t,e]),startUnifiedPickerEndpoint:(0,a.useCallback)(r=>{if(!r)return;let a=r?.id??"";if(r.type!==n.Q.CLUSTER)return e(a);if(r.compute.state&&v.includes(r.compute.state))return t(a)},[t,e])}}},797580:(e,t,r)=>{r.d(t,{V:()=>a});let a=(e,t,r)=>({scrollbarColor:`${e} transparent`,"&::-webkit-scrollbar":{width:"0.5rem",height:"0.5rem"},"&::-webkit-scrollbar-thumb":{borderRadius:"0.25rem",backgroundColor:e},"&::-webkit-scrollbar-track":{borderRadius:"0.25rem",backgroundColor:t},"&::-webkit-scrollbar-corner":{backgroundColor:r}})},798030:(e,t,r)=>{r.d(t,{z:()=>u});var a=r(610435),n=r(497895),s=r(814510),i=r(382908),o=r(829339),l=r(217985);let u=({title:e,documentTitle:t,breadcrumbs:r,actions:u})=>{let{theme:c}=(0,n.wn)(),d=t??("string"==typeof e?e:void 0);return(0,o.r)({title:d,skip:!d}),(0,a.FD)("div",{css:{display:"flex",gap:c.spacing.sm,alignItems:"flex-start",justifyContent:"space-between",paddingBottom:c.spacing.sm},children:[(0,a.FD)("div",{css:{flex:1,overflow:"hidden"},children:[r&&(0,a.Y)(s.Q,{children:r.map(e=>(0,a.Y)(s.Q.Item,{children:(0,a.Y)(l.N,{componentId:"lakewatch.page-header.breadcrumb-link",asTypographyLink:!0,to:e.to,children:e.label})},e.to))}),e&&(0,a.Y)(i.o.Title,{level:3,css:{marginTop:0},children:e})]}),(0,a.Y)("div",{css:{display:"flex",gap:c.spacing.sm,alignItems:"center"},children:u})]})}},814510:(e,t,r)=>{let a;r.d(t,{Q:()=>d});var n=r(610435),s=r(956935),i=r(930125),o=r(429608),l=r(497895),u=r(955210),c=r(123252);let d=((a=({dangerouslySetAntdProps:e,includeTrailingCaret:t=!0,...r})=>{let{theme:d,classNamePrefix:f}=(0,l.wn)(),m=`.${f}-breadcrumb-separator`,h=(0,s.AH)({"span:last-child a":{color:d.colors.primary,":hover, :focus":{color:"#2272B4"}},a:{"&:focus-visible":{outlineColor:`${d.colors.actionDefaultBorderFocus} !important`,outlineStyle:"auto !important"}},[m]:{fontSize:d.general.iconFontSize,"& .anticon":{fontSize:13}},"& > span":{display:"inline-flex",alignItems:"center"}});return(0,n.Y)(o.wC,{children:(0,n.FD)(i.A,{...(0,c.VG)(),separator:(0,n.Y)(u.A,{}),...r,...e,css:(0,s.AH)((0,o.Cx)(d.options.enableAnimation),h),children:[r.children,t&&r.children&&(0,n.Y)(a.Item,{children:" "})]})})}).Item=i.A.Item,a.Separator=i.A.Separator,a)},927174:(e,t,r)=>{r.d(t,{q:()=>o});var a=r(692738),n=r(758242),s=r(257861),i=r(993533);function o(e){let{startUnifiedPickerEndpoint:t}=(0,n.H)(),r=(0,a.useRef)(new Set);return(0,a.useEffect)(()=>{e&&(e.state===i.tXm.STOPPED||null===e.state)?r.current.has(e.id)||(r.current.add(e.id),t({type:s.Q.SQL_WAREHOUSE,id:e.id,compute:e})):e?.state===i.tXm.RUNNING&&r.current.delete(e.id)},[e,t]),{isAutoStarted:void 0!==e&&r.current.has(e.id)}}},936985:(e,t,r)=>{r.d(t,{Ay:()=>f,mJ:()=>c,wy:()=>d});var a=r(323598),n=r.n(a),s=r(692738),i=r(71135),o=r(22191),l=r(886100),u=r(570321);function c(){return s.useContext(i.U).settings}function d(e,t){let r=c(),a=null,s=!1;u.e.isAvailable()&&(a=u.e.call({flagName:e,defaultValue:null}),s=u.e.call({flagName:"databricks.fe.redash.useGetFlagValueSyncRpcForUseConf",defaultValue:!1}));let i=n()(r,[e]);if(s||l.iT.log(o.Es.GqlInfra,"useConfLegacyFallback",`confKey=${e}`),s)if(null!==a)return a;else return void 0!==i&&l.iT.sev2(o.Es.GqlInfra,"useConf: flagValue is empty and sessionConfigValue is defined",`confKey=${e}, sessionConfigValue=${i}, flagValue=${a}`),t;if(void 0===i)return t;return i}let f=d},960718:(e,t,r)=>{r.d(t,{MS:()=>d,SN:()=>f,vP:()=>c,xz:()=>m});var a=r(141078);let n=(0,a.J1)`
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
`,l=(0,a.J1)`
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
`,u=(0,a.J1)`
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
  ${l}
  ${u}
  ${o}
`,d=(0,a.J1)`
  fragment LakehouseListFragment on Lakehouse {
    ...LakehouseBasicAttributesFragment
    permissions @include(if: $withPermissions)
  }
  ${l}
`,f=(0,a.J1)`
  fragment LakehouseForMutationFragment on Lakehouse {
    ...LakehouseBasicAttributesFragment
    ...LakehouseAdvancedAttributesFragment
    permissions @include(if: $withPermissions)
  }
  ${l}
  ${u}
`,m=(0,a.J1)`
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
`},962179:(e,t,r)=>{function a(e){return"databricks_internal"===e.type}function n(e){return"databricks_cluster"===e.type||"cluster"===e.type}function s(e){return"statements"in e}r.d(t,{PG:()=>a,n9:()=>s,y0:()=>n})}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/94701.9aa5165a02.chunk.js.map