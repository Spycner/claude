"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[24558,49503],{65061:(e,t,r)=>{r.d(t,{IT:()=>s,_l:()=>i._l,n_:()=>i.n_,sw:()=>o.s});var a=r(692738),n=r(32121),i=r(141078),o=r(710283);let s=(e,t)=>{let r=(0,i.IT)(e,t);return!function(e,t){let r=(0,a.useRef)(0),{startPolling:i,stopPolling:o,error:s,networkStatus:u}=e;(0,a.useEffect)(()=>{if(!t||u&&u<n.pT.ready)return;if(s){let e=r.current+1,a=t*Math.pow(2,e);a<36e5?(i(a),r.current=e):(o(),r.current=0)}else r.current>0&&(i(t),r.current=0)},[s,t,i,o,u])}(r,t?.pollInterval),r}},123964:(e,t,r)=>{r.r(t),r.d(t,{TableDetailsPageProvider:()=>N,useTableDetailsPage:()=>R});var a=r(610435),n=r(692738),i=r(651139),o=r(342411),s=r(441535),u=r(747206),l=r(641760),c=r(800205),d=r(769e3),m=r(440509),f=r(428296),p=r(835146),h=r(835756),b=r(890014),v=r(101938),g=r(783254),_=r(929117),y=r(711489),w=r(412836),k=r(127910),E=r(743848),T=r(181440),P=r(589111),S=r(136012),C=r(345958);function L(e,t,r,a,n,i,o){try{var s=e[i](o),u=s.value}catch(e){r(e);return}s.done?t(u):Promise.resolve(u).then(a,n)}function I(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){L(i,a,n,o,s,"next",e)}function s(e){L(i,a,n,o,s,"throw",e)}o(void 0)})}}let $=n.createContext({activeTab:u.xh.OVERVIEW,onTabChange:()=>{},tableInfoRequest:{},tablePopularityRequest:{},isLoading:!1,isTableInfoReady:!1,refetchTableInfo:()=>Promise.resolve(),tableInfoError:void 0,catalog:"",schema:"",table:"",tableFullName:"",tableComment:void 0,owner:void 0,tableType:void 0,tableId:void 0,pipelineId:void 0,metricViewMaterializationSchedule:void 0,securableKind:void 0,securableType:void 0,dataSourceFormat:void 0,columns:[],metadata:{},browseOnly:void 0,viewDefinition:void 0,deltaSharingValidThroughTimestamp:void 0,createdAt:void 0,properties:void 0,provisioningInfo:void 0,rowFilter:void 0}),A={columns:[],metadata:{}};function N({catalog:e,schema:t,table:r,children:L}){let R=(0,s.W)("databricks.fe.ub.enableGragphqlGetTableJoinColTags",!1),F=[e,t,r].join("."),x=(0,S.QQ)(),D=(0,C.$)(),U=(0,o.tz)(),{isDataSourceReady:q,unifiedDataSource:O,isComputeUCSamplesCompatible:j}=(0,T.useDataExplorerDataSourceContext)(),M=(0,l.jN)({catalog:e}),W=(0,c.h)(e)&&j,z=M||W,B=(0,s.W)("databricks.fe.delta-sharing.enableReconciliationWarnings",!1),{getCurrentInteraction:J}=(0,v.XT)(),H=(0,n.useRef)(g.f.performanceNow()),Y=(0,n.useRef)(null),G=(0,n.useRef)(null),{activeTab:K}=(0,P.v)(),V=K??u.xh.OVERVIEW,{setActiveTab:Z,resetLineageFilters:X}=(0,P.y)(),[,Q]=(0,d.x)(),ee=(0,n.useRef)(!1),et=(0,n.useRef)(V),er=(0,n.useRef)(V),ea=(0,n.useRef)(!1);(0,n.useEffect)(()=>()=>{let e=et.current,t=er.current,r=y.Uz.SecurableEnum_SecurableType.TABLE;D("tab_which_user_first_selected",{securable_type:r,page_tab:e,time_to_action_millis:Y.current&&G.current?G.current-Y.current:void 0}),D("tab_when_leave",{securable_type:r,page_tab:t})},[D]);let en=(0,n.useRef)();function ei(a){return I(function*(){null===Y.current&&(Y.current=g.f.performanceNow());let n=a?.unityCatalogTableNameReference?.table?.managedCatalogTableInfo;if(n){let a=!0===n.browseOnly;if(!ea.current&&n.provisioningInfo?.state!=="FAILED"&&n.securableKind?.startsWith("TABLE_FOREIGN_")&&!(R?n.columnInfos?.firstPage?.length:n.columnInfos?.columns?.length)&&q&&O&&!a){ea.current=!0,D("foreign_table_empty_columns_refresh",{securable_kind:n.securableKind,operation_status:y.Uz.OperationStatusEnum_OperationStatus.ATTEMPTED});try{yield(0,m.Rz)({dataSource:O,catalog:e,schema:t,table:r}),yield en.current?.(),D("foreign_table_empty_columns_refresh",{securable_kind:n.securableKind,operation_status:y.Uz.OperationStatusEnum_OperationStatus.SUCCEEDED})}catch(e){D("foreign_table_empty_columns_refresh",{securable_kind:n.securableKind,operation_status:y.Uz.OperationStatusEnum_OperationStatus.FAILED,error_message:e instanceof Error?e.message:"Unknown error"})}}}})()}let eo=(0,f.WO)({catalog:e,schema:t,table:r,skip:!M||R,onCompleted:ei}),es=(0,f.pJ)({catalog:e,schema:t,table:r,skip:!M||!R,onCompleted:ei}),eu=R?es:eo;en.current=eu.refetch;let el=!eu.loading&&eu.data?.unityCatalogTableNameReference?.table===null,ec=eu.data?.unityCatalogTableNameReference?.table?.managedCatalogTableInfo,ed=ec?.securableKind==="TABLE_STREAMING_LIVE_TABLE"&&(0,p.d9)(),em=ed&&q&&!!O&&ec?.browseOnly!==!0,ef=(0,w.IT)({queryKey:["streamingTableJsonMetadata",e,t,r],queryFn:()=>I(function*(){let a=yield(0,k.ZG)(e,t,r,O);return JSON.parse(a?.length?a[0]?.json_metadata:"{}")})(),enabled:em}),ep=ef.data,eh=ef.isLoading,eb=(!M||el)&&(q||z),ev=(0,h.Vv)({dataSource:O,catalog:e,schema:t,table:r,fetchSamplesCatalogWithUC:W},{enabled:eb,keepPreviousData:!0,refetchOnWindowFocus:B,onSuccess:e=>{null===Y.current&&(Y.current=g.f.performanceNow()),!0===e.browse_only?x("visit_table_with_browse_permission"):!1===e.browse_only&&x("visit_table_with_select_permission"),e?.columns?.some(e=>!!e.foreignKeys?.length)&&x("visit_table_with_fk_constraint"),z?x("visit_table_details",{ucTableId:e.metadata?.table_id}):x("visit_table_details")},onError:e=>{(0,i.F0)(e)&&(e.response?.status===403?x("visit_table_without_permission"):e.response?.status===404&&x("visit_non_existing_table"))}}),eg=M&&!el?eu.loading:ev.isLoading,e_=!!(M?ec&&(!ed||!eh):ev.data),ey=M&&!el?eu.error:ev.error,ew=M?eu.refetch:ev.refetch,ek=M?ec?.comment??void 0:ev.data?.comment,eE=M?ec?.owner??void 0:ev.data?.metadata?.owner,eT=M?ec?.tableType??void 0:ev.data?.metadata?.type,eP=M?ec?.tableId??void 0:ev.data?.metadata?.table_id,eS=M?ec?.pipelineId??void 0:ev.data?.metadata?.pipeline_id,eC=M?ec?.securableKind??void 0:ev.data?.metadata?.securable_kind,eL=M?ec?.securableType??void 0:ev.data?.metadata?.securable_type,eI=M?ec?.dataSourceFormat??void 0:ev.data?.data_source_format,e$=M?ec?.browseOnly??void 0:ev.data?.browse_only,eA=M?ec?.viewDefinition:ev.data?.metadata?.view_query_text,eN=M?ec?.deltaSharingValidThroughTimestamp??void 0:ev.data?.metadata?.delta_sharing_valid_through_timestamp,eR=M?ec?.createdAt??void 0:ev.data?.metadata?.created_at,eF=M?ec?.propertiesPairs?._json?JSON.parse(ec.propertiesPairs._json)?.properties:void 0:ev.data?.metadata?.properties,ex=eF?.["metric_view.materialization.pipelineUuid"],eD=(()=>{try{return JSON.parse(eF?.["metric_view.materialization.schedule"])}catch(e){return}})(),eU=M?ec?.provisioningInfo??void 0:ev.data?.metadata?.provisioning_info,{functionName:eq,inputColumnNames:eO}=ec?.rowFilter??{},ej=M?{function_name:eq??void 0,input_column_names:eO??void 0}:ev.data?.metadata?.row_filter,{columns:eM,metadata:eW}=(0,n.useMemo)(()=>{if(M){let e=[];if(R){let t=ec?.columnInfos;e=e.concat((t?.firstPage??[]).map(e=>({...e,tags:e.tags??[]}))).concat((t?.followingPages??[]).map(e=>({...e,tags:null})))}else{let t=ec?.columnInfos;e=e.concat((t?.columns??[]).map(e=>({...e,tags:null})))}let t=(0,b.bJ)(ec,e),r=(0,b.qt)(t,U)??A;if(em&&ep)return{...r,metadata:{...r.metadata,properties:ep.table_properties}};return r}return ev.data??A},[M,U,ev.data,ec,R,em,ep]),ez=(0,E.sz)({scope:E.HX.TableList,tableNameList:[F],skip:!M,onCompleted(){J()?.addCompletedLoadingState(_.z.CATALOG_EXPLORER_TABLE_POPULARITY_FETCH,H.current,g.f.performanceNow())}});return(0,a.Y)($.Provider,{value:{activeTab:V,onTabChange:function({key:e,ucTableId:t}){ee.current||(ee.current=!0,et.current=e,G.current=g.f.performanceNow()),er.current=e,Z(e),Q(),X(),x(`switch_to_table_${e}_tab`,{ucTableId:t})},tableInfoRequest:ev,tablePopularityRequest:ez,isLoading:eg,isTableInfoReady:e_,refetchTableInfo:ew,tableInfoError:ey,catalog:e,schema:t,table:r,tableFullName:F,tableComment:ek,owner:eE,tableType:eT,tableId:eP,pipelineId:eS??ex,metricViewMaterializationSchedule:eD,securableKind:eC,securableType:eL,dataSourceFormat:eI,columns:eM,metadata:eW,browseOnly:e$,viewDefinition:eA,deltaSharingValidThroughTimestamp:eN,createdAt:eR,properties:eF,provisioningInfo:eU,rowFilter:ej},children:L})}let R=()=>(0,n.useContext)($)},127910:(e,t,r)=>{r.d(t,{B$:()=>c,ZG:()=>u,zr:()=>l});var a=r(988512),n=r(103341);function i(e,t,r,a,n,i,o){try{var s=e[i](o),u=s.value}catch(e){r(e);return}s.done?t(u):Promise.resolve(u).then(a,n)}function o(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var o=e.apply(t,r);function s(e){i(o,a,n,s,u,"next",e)}function u(e){i(o,a,n,s,u,"throw",e)}s(void 0)})}}function s(e,t,r,i){return o(function*(){if(!i||i.disableSystemQueries)return;let o=(0,a.y)(i).generateGetDescribeTableSql(e,t,r,!0,!1);return(0,n.M)({dataSource:i,queryString:o,queryName:"describe_table"})})()}function u(e,t,r,i){return o(function*(){if(!i||i.disableSystemQueries)return;let o=(0,a.y)(i).generateGetDescribeTableSql(e,t,r,!0,!0);return(0,n.M)({dataSource:i,queryString:o,queryName:"describe_table"})})()}function l(e,t,r,a,n=!1){return o(function*(){if(n){let n=yield u(e,t,r,a);try{return JSON.parse(n?.length?n[0]?.json_metadata:"{}")?.view_text}catch(e){}}let i=yield s(e,t,r,a);return i?.find(({col_name:e})=>"View Text"===e)?.data_type})()}function c(e,t,r,a){return o(function*(){let n=yield s(e,t,r,a);if(!n)return[];let i=[];for(let{col_name:e,comment:t}of n){if(""===e)break;i.push({name:e,comment:t})}return i})()}},290766:(e,t,r)=>{r.d(t,{T:()=>u});var a=r(65061),n=r(960718),i=r(141078);let o=(0,i.J1)`
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
  ${n.xz}
`,s=(0,i.J1)`
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
`,u=(e,t)=>(0,a.IT)(t?s:o,{fetchPolicy:"cache-and-network",...e})},349297:(e,t,r)=>{r.d(t,{A:()=>l,e:()=>c});var a=r(536717),n=r.n(a),i=r(692738),o=r(801938),s=r(497937),u=r(341300);function l(e,t){if(e.defaultPrevented)return;let r=function(e){for(;e;){if(e instanceof HTMLAnchorElement)return e;e=e?.parentNode}return null}(e.target instanceof Node?e.target:null),a=r&&r.getAttribute("href");if(!r||!a||r.hasAttribute("download")||r.dataset.skiprouter||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return;let i=r.getAttribute("target");if(n()(i)&&"_blank"===i.toLowerCase())return;e.preventDefault(),t(a)}function c(e){let{appRoot:t,portalContainer:r}=(0,o.Xd)(),a=(0,s.Zp)();(0,i.useEffect)(()=>{if(!e)return;let n=new Set([t,r]);function i(e){return e.defaultPrevented||(0,u.$G)("global_navigation_intent"),l(e,a)}return n.forEach(e=>{e.addEventListener("click",i,!1)}),()=>{n.forEach(e=>{e.removeEventListener("click",i,!1)})}},[t,r,e,a])}},497937:(e,t,r)=>{r.d(t,{Zp:()=>d});var a=r(692738),n=r(923305),i=r(591105),o=r(794938),s=r(6e4),u=r(681695),l=r(488655);function c(e,t,r,a,n,i,o){try{var s=e[i](o),u=s.value}catch(e){r(e);return}s.done?t(u):Promise.resolve(u).then(a,n)}let d=(0,s.CV)()?l.Zp:function(){return(0,a.useCallback)((e,{replace:t=!1,state:r={}}={})=>{((e,t=!1)=>{var r;return(r=function*(){yield(0,i.y)(10);let r="boolean"==typeof t?{replace:t,triggerRouteChange:!1,noBasePath:!1}:t,a=(0,n.Eq)(e),l=window.location.origin,c=!a||e===l||e.startsWith(`${l}/`);if(a||e.startsWith("/"),!c){window.location.href=e;return}a||r.noBasePath||(e=(0,n.Hi)(e));let d=new URL(e=o.y.adjustUrl(e),window.location.origin);if(u.GZ.isAvailable())return void(yield u.GZ.call({href:`${d.pathname}${d.search}${d.hash}`,replace:r.replace}));if(!(0,n.U0)(d.pathname)){window.location.href=e;return}s.Ay.update({path:d.pathname,search:d.search,hash:d.hash},r.replace,{triggerRouteChange:r.triggerRouteChange})},function(){var e=this,t=arguments;return new Promise(function(a,n){var i=r.apply(e,t);function o(e){c(i,a,n,o,s,"next",e)}function s(e){c(i,a,n,o,s,"throw",e)}o(void 0)})})()})(e,{replace:t,noBasePath:!0,...r})},[])}},566825:(e,t,r)=>{r.d(t,{Ay:()=>_,Ns:()=>b,ZC:()=>g,r:()=>v});var a=r(987962),n=r.n(a),i=r(623576),o=r.n(i),s=r(189219),u=r.n(s),l=r(923305),c=r(651139),d=r(949313),m=r(670943),f=r(924636),p=r(984741),h=r(885364);function b(e){return n()(e,"job.id")?(0,d.Ec)(e.job.id,1e3):e}let v=["get-data-sources"],g=(0,p.to)("sql/images/db-logos"),_={query:()=>(0,m.Ym)()?c.pY.get(f.bI).then(e=>e?.data_sources||[]):c.pY.get((0,l.Hi)("api/data_sources")),get:({id:e})=>c.pY.get((0,l.Hi)(`api/data_sources/${e}`)),types:()=>c.pY.get((0,l.Hi)("api/data_sources/types")),create:e=>c.pY.post((0,l.Hi)("api/data_sources"),e),save:e=>c.pY.post((0,l.Hi)(`api/data_sources/${e.id}`),e),test:e=>c.pY.post((0,l.Hi)(`api/data_sources/${e.id}/test`)),delete:({id:e})=>c.pY.delete((0,l.Hi)(`api/data_sources/${e}`)),fetchSchema:(e,t=!1)=>{let r={};return t&&(r.refresh=!0),c.pY.get((0,l.Hi)(`api/data_sources/${e.id}/schema`),{params:r}).then(e=>{if(n()(e,"job"))return(0,d.Ec)(e.job.id).catch(t=>1===t.code?[]:Promise.reject(Error(e.job.error)));return n()(e,"schema")?e.schema:Promise.reject()}).then(e=>o()(e,e=>{var t;return{...e,columns:(t=e.columns,o()(t,e=>u()(e)?e:{name:e})),type:e.type}}))},fetchColumns:(e,t,r)=>c.pY.get((0,l.Hi)(`api/data_sources/${e}/${t}/columns/${r}`)).then(b).then((0,h.g)("DataSource.fetchColumns"))}},572382:(e,t,r)=>{r.d(t,{CU:()=>s,U1:()=>u,iC:()=>o,kc:()=>n,sT:()=>i});var a=r(32121);function n(e){return e?.edges.map(e=>e.node)}function i({networkStatus:e}){return e===a.pT.fetchMore}function o({networkStatus:e}){return e===a.pT.refetch}function s({networkStatus:e}){return e===a.pT.poll}function u({__typename:e,...t}){return t}},591105:(e,t,r)=>{r.d(t,{y:()=>a});let a=(e=0)=>new Promise(t=>setTimeout(t,e))},662874:(e,t,r)=>{r.d(t,{DK:()=>c,Go:()=>l,WL:()=>s,t2:()=>u});var a=r(610435),n=r(692738),i=r(745444),o=r(962179);let s=n.createContext(()=>void 0);function u({children:e}){let{lakehouseMap:t}=(0,i.j)(),r=(0,n.useCallback)(e=>t[e],[t]);return(0,a.Y)(s.Provider,{value:r,children:e})}function l(e){let t=(0,n.useContext)(s);return(0,n.useMemo)(()=>e.map(e=>{if(!(0,o.PG)(e))return e;let r=t(e.endpoint_id??"");return{...e,lakehouse:r}}),[e,t])}function c(e){let t=(0,n.useContext)(s);return(0,n.useMemo)(()=>{if(e){let r=t(e.endpoint_id??"");return{...e,lakehouse:r}}},[e,t])}},710283:(e,t,r)=>{r.d(t,{s:()=>s});var a=r(650003),n=r(692738),i=r(141078),o=r(940912);function s(e,t){let r=(0,i.mK)(t?.client),[s,u]=(0,n.useState)(()=>{if(t?.skip)return null;return r.subscribe({query:e,variables:t?.variables,fetchPolicy:t?.fetchPolicy,context:{...t?.context,currentImplicitContext:(0,o.yB)()}})}),l=(0,n.useRef)(!1);(0,n.useEffect)(()=>()=>{l.current=!0},[]);let c=(0,n.useRef)({client:r,subscription:e,options:t});(0,n.useEffect)(()=>{let n=t?.shouldResubscribe;"function"==typeof n&&(n=!!n(t)),t?.skip?(!t?.skip!=!c.current.options?.skip||l.current)&&(u(null),l.current=!1):(!1!==n&&(r!==c.current.client||e!==c.current.subscription||t?.fetchPolicy!==c.current.options?.fetchPolicy||!t?.skip!=!c.current.options?.skip||!(0,a.L)(t?.variables,c.current.options?.variables))||l.current)&&(u(r.subscribe({query:e,variables:t?.variables,fetchPolicy:t?.fetchPolicy,context:{...t?.context,currentImplicitContext:(0,o.yB)()}})),l.current=!1),Object.assign(c.current,{client:r,subscription:e,options:t})},[r,e,t,l.current]),(0,n.useEffect)(()=>{if(!s)return;let e=s.subscribe({next(e){let a={loading:!1,data:e.data,error:void 0,variables:t?.variables};c.current.options?.onSubscriptionData?.({client:r,subscriptionData:a})},error(e){c.current.options?.onError?.(e)},complete(){c.current.options?.onSubscriptionComplete?.()}});return()=>{e.unsubscribe()}},[s])}},733052:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(610435);r(692738);var n=r(802582);function i({primary:e=!1,srSilent:t=!1,children:r,placement:o,title:s,dataTestId:u,arrowPointAtCenter:l,...c}){return(0,a.Y)(n.p,{silenceScreenReader:t,useAsLabel:e,placement:o,title:s,dataTestId:u,arrowPointAtCenter:l,...c,children:r})}},743848:(e,t,r)=>{r.d(t,{HX:()=>o,sz:()=>u});var a,n=r(65061),i=r(141078),o=((a={}).TableList="TableList",a.Metastore="Metastore",a);let s=(0,i.J1)`
  query getPopularTablesQuery($scope: String, $tableNameList: [String!], $limitSize: Int)
  @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverGetPopularTables(
      input: { scope: $scope, tableNameList: $tableNameList, limitSize: $limitSize }
    ) {
      tablePopularityList {
        catalogName
        schemaName
        tableName
        bucket
        queryCount
      }
    }
  }
`;function u({scope:e,tableNameList:t,onCompleted:r,onError:a,skip:i=!1,limitSize:o}){return(0,n.IT)(s,{variables:{scope:e,tableNameList:t,limitSize:o},skip:i||"TableList"===e&&0===t.length,onCompleted:r,onError:a})}},745444:(e,t,r)=>{r.d(t,{j:()=>c});var a=r(298280),n=r.n(a),i=r(692738),o=r(919505),s=r(290766),u=r(572382),l=r(441535);function c({enableLiveUpdates:e=!0,fetchPolicy:t="cache-and-network",useMinimalQuery:r=!1,isEnabled:a=!0}={}){let d=(0,l.W)("databricks.fe.redash.listPollingInterval",5e3),[m,f]=(0,i.useState)(()=>(0,l.W)("databricks.fe.redash.enableWarehouseEventSubscription",!1)),p=e&&m&&!r,{data:h,loading:b,refetch:v}=(0,s.T)({pollInterval:e&&!p?d:0,fetchPolicy:t,nextFetchPolicy:p?"cache-first":void 0,skip:!a},r);return(0,o.A)({skip:!p||!a,refetchLakehouseStates:v,setEnableSubscription:f}),{loaded:!b,lakehouseMap:(0,i.useMemo)(()=>n()((0,u.kc)(h?.lakehouses),e=>e?.id),[h?.lakehouses])}}},794938:(e,t,r)=>{r.d(t,{E:()=>l,y:()=>o});var a=r(514503),n=r.n(a),i=r(923305);let o={adjustUrl:r(93353).WI},s=new Set,u=new Set;function l(e,t){let r=(0,i.Eq)(e),a=window.location.origin;if(!(!r||e===a||e.startsWith(`${a}/`)))return e;return t||r||(e=(0,i.Hi)(e)),e=o.adjustUrl(e)}n()(()=>{console.warn(`[Deprecation warning] Relative hrefs in <Link> are deprecated. Prefix hrefs with '/', e.g. <Link href="/dashboards">.
The following URLs were called as relative:
`,[...u].map(e=>`- ${e}`).join("\n")),u.forEach(e=>s.add(e)),u.clear()},3e3)},885364:(e,t,r)=>{r.d(t,{g:()=>o,u:()=>i});var a=r(987962),n=r.n(a);class i extends Error{__initiatorStack;errorCode;constructor(e,t,...r){super(t,...r),Error.captureStackTrace&&Error.captureStackTrace(this,i),this.name="SchemaLoadError",this.errorCode=e}isWaitingForEndpoint(){return 3===this.errorCode}}function o(e){return t=>{if(n()(t,"error")){let r=new i(t.error.code,`${t.error.message} (${e})`);return r.__initiatorStack=Error().stack,Promise.reject(r)}return t}}},913573:(e,t,r)=>{r.d(t,{A:()=>h});var a=r(610435),n=r(692738),i=r(923305),o=r(794938),s=r(6e4),u=r(497937),l=r(497895),c=r(79128),d=r(846007),m=r(217985),f=r(349297);let p=n.forwardRef(({noBasePath:e=!1,children:t,onClick:r,href:c,to:p,componentId:h,...b},v)=>{let g,_=(0,u.Zp)(),y=(0,s.CV)(),{theme:w}=(0,l.wn)(),k=(0,n.useCallback)(e=>{r&&r(e),e.defaultPrevented||(0,f.A)(e,_)},[r,_]);if(p&&!y){if("string"==typeof p&&(0,i.Eq)(p))throw Error("<Link to={...}> format does not accept absolute URLs. Please <ExternalLink> instead.");let{pathname:e,search:t,hash:r}=(0,d.t4)(p);g=`${e??"/"}${t??""}${r??""}`}else if(c){let t=c.startsWith("/#");g=(0,o.E)(c,e||t)}let E={color:w.colors.actionTertiaryTextDefault,textDecoration:"none",...b.style};return y&&p?(0,a.Y)(m.N,{to:p,onClick:r,componentId:h,...b,ref:v,style:E,asAnchorTag:!0,children:t}):(0,a.Y)("a",{...b,href:g,ref:v,onClick:k,style:E,children:t})});p.Button=function({children:e,noBasePath:t=!1,onClick:r,...i}){i.href&&(i={...i,href:(0,o.E)(i.href,t)});let s=(0,u.Zp)(),l=(0,n.useCallback)(e=>{r&&r(e),e.defaultPrevented||(0,f.A)(e,s)},[r,s]);return(0,a.Y)(c.$n,{...i,onClick:l,children:e})};let h=p},919505:(e,t,r)=>{r.d(t,{A:()=>h});var a=r(514503),n=r.n(a),i=r(692738),o=r(200356),s=r(65061),u=r(960718),l=r(441535),c=r(141078),d=r(886100),m=r(22191),f=r(278983);let p=(0,c.J1)`
  subscription WarehouseEventSubscription($ignoreScaledEvent: Boolean) @component(name: "DBSQLX.WareHouseUI") {
    warehouseEvent(ignoreScaledEvent: $ignoreScaledEvent) {
      warehouseId
      eventName
      eventTimeMs
    }
  }
`;function h({skip:e,refetchLakehouseStates:t,setEnableSubscription:r}){let a=(0,i.useMemo)(()=>{let e=(0,l.W)("databricks.fe.redash.warehouses.event.debounceWait",1e3)+Math.floor(500*Math.random());return n()(t,e)},[t]),c=(0,i.useRef)(!1);return(0,s.sw)(p,{variables:{ignoreScaledEvent:!0},shouldResubscribe:!0,skip:e,onSubscriptionData({subscriptionData:e,client:n}){if(e?.data?.warehouseEvent){let{warehouseId:r}=e.data.warehouseEvent;"0"!==r||c.current?"0"===r?t():function(e,t,r){let{warehouseId:a,eventName:n}=t;(n||"undefined")in o.tXm&&e.cache.updateFragment({fragment:u.xz,id:e.cache.identify({__typename:"Lakehouse",id:a})},e=>{if(e)return{...e,state:n,health:null}})||r()}(n,e.data.warehouseEvent,a):c.current=!0}else d.iT.sev2(m.Es.RedashCore,"warehouseEvent.subscription.onSubscriptionData.unexpectedData",{subscriptionData:e}),r(!1)},onError(e){(function(e){if(e?.[0]){let t=e[0],r=t.code??"unknown",a=t instanceof CloseEvent?"CloseEvent":t.type??"unknown";(0,f.y)("clientsideEvent",{eventName:"warehouse_subscription_error",eventType:`warehouse_subscription_error_${a}`,errorCode:r})}else d.iT.sev2(m.Es.RedashCore,"warehouseEvent.subscription.onUnexpectedError",{rawError:e})})(e),r(!1)}})}},960718:(e,t,r)=>{r.d(t,{MS:()=>d,SN:()=>m,vP:()=>c,xz:()=>f});var a=r(141078);let n=(0,a.J1)`
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
`,i=(0,a.J1)`
  fragment PermissionFragment on Permission {
    inheritedFromObject
    permissionLevel
    inherited
  }
`,o=(0,a.J1)`
  fragment AccessControlFragment on AccessControl {
    principalName {
      ...PrincipalNameFragment
    }
    allPermissions {
      ...PermissionFragment
    }
  }
  ${n}
  ${i}
`,s=(0,a.J1)`
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
  ${o}
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
  ${s}
`,d=(0,a.J1)`
  fragment LakehouseListFragment on Lakehouse {
    ...LakehouseBasicAttributesFragment
    permissions @include(if: $withPermissions)
  }
  ${u}
`,m=(0,a.J1)`
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
`},962179:(e,t,r)=>{function a(e){return"databricks_internal"===e.type}function n(e){return"databricks_cluster"===e.type||"cluster"===e.type}function i(e){return"statements"in e}r.d(t,{PG:()=>a,n9:()=>i,y0:()=>n})}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/24558.7f646dd9e2.chunk.js.map