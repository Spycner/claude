"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[79579],{21255:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),i=r(692738),n=r(375214);function s(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M5.5 6a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5z",clipRule:"evenodd"})})}let o=(0,i.forwardRef)((e,t)=>(0,a.Y)(n.I,{ref:t,...e,component:s}));o.displayName="StopCircleIcon";let l=o},25259:(e,t,r)=>{r.d(t,{A:()=>a});let a=(0,r(759458).Ay)()((e,t)=>({minInsightTaskDurationMs:{},setMinInsightTaskDurationMs:(r,a)=>{let i=t().minInsightTaskDurationMs;void 0===i[r]&&e({minInsightTaskDurationMs:{...i,[r]:a}})},getMinInsightTaskDurationMs:e=>t().minInsightTaskDurationMs[e]}))},69626:(e,t,r)=>{r.d(t,{KY:()=>en,zp:()=>es});var a=r(610435),i=r(692738),n=r(759458),s=r(102876),o=r(22191),l=r(886100),d=r(978679),u=r(823419),c=r(483588),m=r(440470);let p=e=>{let t=e.nodes?.map(I).filter(d.zz)??[],r=e.edges?.filter(e=>null!==e.fromId&&null!==e.toId).map(e=>({fromId:e.fromId,toId:e.toId}))??[],a=e.stageData?.map(M).filter(d.zz)??void 0,i=e.photonExplain?.map(y)??void 0;return{nodes:t,edges:r,stageData:a,errorMessage:h(e.errorMessage),missingReason:g(e.missingReason),executionId:h(e.executionId),sparkUiUrl:h(e.sparkUiUrl),timeSubmittedMs:f(e.timeSubmittedMs),timeCompletedMs:f(e.timeCompletedMs),photonExplain:i}},g=e=>e?m.gp[c.Oog[e]]:void 0,y=e=>({sparkPlanId:h(e.sparkPlanId),exprId:h(e.exprId),reason:h(e.reason),params:e.params?.map(e=>({paramName:h(e.paramName),paramValue:h(e.paramValue)}))}),h=e=>null===e?void 0:e,f=e=>null===e||Number.isNaN(parseInt(e))?void 0:parseInt(e),I=e=>{if(!e.id||!e.name)return;let t=e.metaData?.filter(e=>null!==e.key).map(e=>({key:e.key,label:h(e.label),value:h(e.value),values:h(e.values),hidden:h(e.hidden),insightIds:h(e.insightIds),metaValues:h(e.metaValues)?.map(e=>({value:h(e.value),insightIds:h(e.insightIds)}))??h(e.values?.map(e=>({value:e})))}))??void 0,r=e.metrics?.filter(e=>null!==e.label&&null!==e.key).map(e=>({label:e.label,key:v(e.key),metricType:S(e.metricType),value:f(e.value),hidden:h(e.hidden),insightTypes:h(e.insightTypes)}))??void 0,a=e.keyMetrics?{rowsNum:f(e.keyMetrics.rowsNum),durationMs:f(e.keyMetrics.durationMs),peakMemoryBytes:f(e.keyMetrics.peakMemoryBytes)}:void 0,i=e.externalDataSourceData?{externalSqlQueryText:h(e.externalDataSourceData.externalSqlQueryText),externalSqlQueryTextIsTruncated:h(e.externalDataSourceData.externalSqlQueryTextIsTruncated),externalSqlQueryUntruncatedTextLength:h(e.externalDataSourceData.externalSqlQueryUntruncatedTextLength)}:void 0;return{id:e.id,name:e.name,tag:h(e.tag),metadata:t,metrics:r,hidden:h(e.hidden),collapsed:h(e.collapsed),keyMetrics:a,stageLinks:h(e.stageLinks),subgraphParent:h(e.subgraphParent),externalDataSourceData:i,insightIds:h(e.insightIds)}},M=e=>{if(!e.stageId||!e.startTimeMs||!e.endTimeMs)return;return{stageId:e.stageId,startTimeMs:parseInt(e.startTimeMs),endTimeMs:parseInt(e.endTimeMs),keyMetrics:{rowsNum:f(e.keyMetrics?.rowsNum??null),durationMs:f(e.keyMetrics?.durationMs??null),peakMemoryBytes:f(e.keyMetrics?.peakMemoryBytes??null)},status:T(e.status),attemptId:h(e.attemptId),numTasks:h(e.numTasks),numActiveTasks:h(e.numActiveTasks),numCompleteTasks:h(e.numCompleteTasks),numFailedTasks:h(e.numFailedTasks),numKilledTasks:h(e.numKilledTasks),numCompletedIndices:h(e.numCompletedIndices),submissionTime:f(e.submissionTime),firstTaskLaunchedTime:f(e.firstTaskLaunchedTime),completionTime:f(e.completionTime),failureReason:h(e.failureReason),name:h(e.name),description:h(e.description),details:h(e.details),schedulingPool:h(e.schedulingPool),wastedTimeMs:f(e.wastedTimeMs??null),lostTaskTimeMs:f(e.lostTaskTimeMs??null),executorRunTimeMs:f(e.executorRunTimeMs??null),diskBytesSpilled:f(e.diskBytesSpilled??null),remoteBytesRead:f(e.remoteBytesRead??null)}},v=e=>{if(null===e)return m.cj.UNKNOWN_KEY;return m.cj[c.Yhl[e]]},S=e=>{if(null===e)return m.vj.UNKNOWN_TYPE;return m.vj[c.bDN[e]]},T=e=>e&&e.toUpperCase()in m.T0?m.T0[e.toUpperCase()]:m.T0.UNDEFINED;var E=r(273625),_=r(94567),N=r(441535),w=r(686560),P=r(689262),k=r(419374),q=r(535014),b=r(362075),C=r(368398),D=r(927615),A=r(940409),x=r(141078),R=r(591e3),L=r(25259);let U=(0,x.J1)`
  fragment Edge on SqlgatewayHistoryExecutionGraphEdge {
    fromId
    toId
  }
`,Y=(0,x.J1)`
  fragment KeyMetrics on SqlgatewayHistoryExecutionGraphKeyMetrics {
    durationMs
    peakMemoryBytes
    rowsNum
  }
`,O=(0,x.J1)`
  fragment GraphExpression on SqlgatewayHistoryExecutionGraphExpression {
    errorMessage
    sql
    tag
    insightIds
  }
`,F=(0,x.J1)`
  fragment NodeMetrics on SqlgatewayHistoryExecutionGraphMetric {
    hidden
    key
    label
    maxValue
    medValue
    metricType
    minValue
    value
    insightTypes
  }
`,Q=(0,x.J1)`
  fragment NodeMetadata on SqlgatewayHistoryExecutionGraphMeta {
    hidden
    key
    label
    value
    values
    insightIds
    metaValues {
      value
      insightIds
    }
  }
`,B=(0,x.J1)`
  fragment NodeExternalDataSource on SqlgatewayHistoryExternalDataSourceData {
    externalSqlQueryText
    externalSqlQueryTextIsTruncated
    externalSqlQueryUntruncatedTextLength
  }
`,H=(0,x.J1)`
  fragment Node on SqlgatewayHistoryExecutionGraphNode {
    collapsed
    expressions {
      ...GraphExpression
    }
    externalDataSourceData {
      ...NodeExternalDataSource
    }
    hidden
    id
    keyMetrics {
      ...KeyMetrics
    }
    metaData {
      ...NodeMetadata
    }
    metrics {
      ...NodeMetrics
    }
    name
    stageLinks
    subgraphParent
    tag
    insightIds
  }
  ${Y}
  ${O}
  ${F}
  ${Q}
  ${B}
`,$=(0,x.J1)`
  fragment StageData on SqlgatewayHistoryStageData {
    attemptId
    completionTime
    description
    details
    diskBytesSpilled
    endTimeMs
    executorRunTimeMs
    failureReason
    firstTaskLaunchedTime
    keyMetrics {
      ...KeyMetrics
    }
    lostTaskTimeMs
    name
    numActiveTasks
    numCompleteTasks
    numCompletedIndices
    numFailedTasks
    numKilledTasks
    numTasks
    remoteBytesRead
    schedulingPool
    stageId
    startTimeMs
    status
    submissionTime
    wastedTimeMs
  }
  ${Y}
`,z=(0,x.J1)`
  fragment PhotonExplain on SqlgatewayHistoryPhotonExplainGraphNode {
    category
    exprId
    params {
      paramName
      paramValue
    }
    reason
    sparkPlanId
  }
`,G=(0,x.J1)`
  fragment ExecutionGraph on SqlgatewayHistoryExecutionGraph {
    edges {
      ...Edge
    }
    errorMessage
    executionId
    missingReason
    nodes {
      ...Node
    }
    photonExplain {
      ...PhotonExplain
    }
    source
    sparkUiUrl
    stageData {
      ...StageData
    }
    timeCompletedMs
    timeSubmittedMs
  }
  ${U}
  ${H}
  ${$}
  ${z}
`,K=(0,x.J1)`
  query HistoryStatementPlanById($input: SqlgatewayHistoryGetQueryPlanInput!) @component(name: "DBSQLX.QueryHistory") {
    sqlgatewayHistoryGetQueryPlan(input: $input) {
      apiError {
        code
        message
        helpUrl
        traceId
      }
      plans {
        ...ExecutionGraph
      }
    }
  }
  ${G}
`;var W=r(667941),V=r(994643),j=r(915145),J=r(108578),X=r(766461),Z=r(550540),ee=r(209437),et=r(245734),er=r(216301);let ea={..._.Z1,isLoading:!0,isPlanLoading:!0,displayMode:et.xT,activeQueryIndex:0,leftSidebarWidth:er.Xg,rightDetailsWidth:400},ei=i.createContext({store:void 0}),en=({children:e,queryKeys:t,importedQueryProfile:r,queryTextFormatter:m,defaultPlanId:g,defaultTreeId:y,defaultPanelId:h,referrer:f})=>{let I=(e=>{var t,r,a,m;let g,y,h,[f]=(0,J.M)(er.Xg),[I]=(0,J.v)(400),M=(0,i.useRef)((g={leftSidebarWidth:f,rightDetailsWidth:I},(0,n.y$)((t,r)=>({...ea,...e,...g,switchActivePlan:e=>{if(r().activePlanId===e)return;let{download:a,planMetadatas:i,queryKeys:n,activeQueryIndex:s,syncQueryPlan:o}=r(),l=i?.find(t=>t.id===e),d=n?.[s]?.queryId;l&&d&&(i?.length??0)===j.p4&&(0,j.sv)(d,l),t({activePlanId:e,activeTreeId:void 0,activeTree:void 0,trees:void 0,graphs:void 0,selectedNodeId:void 0,highlightedNodeIds:void 0,currentSparkUiUrl:void 0,selectedSqlScriptRowId:e}),a&&e===a.activePlanId&&o(!1,{raw:a.graphs})},syncCapabilities(e){t({capabilities:e})},syncQuery:(e,r,a)=>{t({isLoading:e,query:r,error:a})},syncPlanMetadatas:(e,a,i,n)=>{let s=r().activePlanId,o=s?a?.find(e=>e.id===s):a?.[0],{queryKeys:l,activeQueryIndex:d}=r(),u=l?.[d]?.queryId;u&&o&&(a?.length??0)===j.p4&&(0,j.sv)(u,o),t({activePlanId:s||a?.[0]?.id||void 0,isPlanMetadataLoading:e,hasPlanMetadatasNextPage:i??!1,planMetadatas:a,fetchMorePlanMetadatas:n})},setPlanMetadatasPageToken:e=>{t({planMetadatasNextPageToken:e})},syncQueryPlan:(e,a,i)=>{let{trees:n,isSimpleMode:s}=r();if(a?.newApi||a?.raw||a?.oldApi){let e=[];try{e=[].concat(a.newApi?.map(p)??[]).concat(a.oldApi?.map(E.E).filter(d.zz)??[]).concat(a.raw??[]).filter(d.zz)}catch(e){l.iT.sev3(o.Es.QueryProfile,"QueryProfile: Error parsing graphs into trees",e)}let c=(0,u.o)({graphs:e,isSimpleMode:s});if(n&&0!==n.size){let a=r().activeTreeId,n=a&&c.get(a)||r().activeTree;t({graphs:e,trees:c,activeTree:n,planError:i,currentSparkUiUrl:n?.sparkUiUrl,isPlanLoading:!1,highlightedNodeIds:void 0})}else{let a=r().activeTreeId,n=a&&c.get(a)||(0,u.Z)(c);t({graphs:e,trees:c,activeTreeId:n?.id,activeTree:n,currentSparkUiUrl:n?.sparkUiUrl,isPlanLoading:!1,planError:i,highlightedNodeIds:void 0})}}else t({isPlanLoading:e,planError:i})},syncInsights:(e,r,a)=>{t({isInsightsLoading:e,insights:r??void 0,insightsConfig:a??void 0})},toggleActiveInsightId:e=>{let{activeTree:a,activeInsightId:i}=r();if(!e||i===e)return void t({activeInsightId:void 0,highlightedNodeIds:void 0});let n=e?Array.from(a?.nodes.values()??[]).filter(t=>(0,ee.lu)(t,[e])).map(e=>e.node.id):void 0;t({activeInsightId:e,highlightedNodeIds:n})},setInsightIdToFilterMetrics:e=>{t({insightIdToFilterMetrics:e})},toggleSimpleMode:()=>{t(e=>({isSimpleMode:!e.isSimpleMode}));let e=r().graphs;if(e){r().syncQueryPlan(!1,{raw:e},void 0);let a=r().activeTree,i=r().selectedNodeId,n=i&&a?.nodes.has(i);i&&!n&&t({selectedNodeId:void 0})}},openTopOperators:()=>{let{keyMetricType:e}=r();t({displayMode:"QUERY_PROFILE",openPanelId:X.I.Operators,keyMetricType:e??"duration"})},openQueryText:e=>{t({displayMode:"QUERY_PROFILE",openPanelId:X.I.Text,showParametersOnOpen:e?.showParameters??!1})},openInsights:()=>{t({displayMode:"QUERY_PROFILE",openPanelId:X.I.Insights})},openBatches:()=>{t({displayMode:"QUERY_PROFILE",openPanelId:X.I.Batches})},switchActiveQuery:e=>{t({activeQueryIndex:e,query:void 0,planMetadatas:void 0,activePlanId:void 0,trees:void 0,graphs:void 0,activeTreeId:void 0,selectedNodeId:void 0,highlightedNodeIds:void 0,activeInsightId:void 0})},openQueryPlan:()=>{t({displayMode:"QUERY_PROFILE",keyMetricType:"duration",selectedNodeId:void 0,selectedChildNodeId:void 0,activeInsightId:void 0})},closeQueryPlan:()=>{t({displayMode:"ONLY_OVERVIEW",keyMetricType:void 0,selectedNodeId:void 0,selectedChildNodeId:void 0,activeInsightId:void 0})},switchActiveTree:e=>{let{trees:a}=r(),i=a?.get(e);i&&t({activeTreeId:e,activeTree:i,keyMetricType:"duration",selectedNodeId:void 0,selectedChildNodeId:void 0,highlightedNodeIds:void 0,currentSparkUiUrl:i.sparkUiUrl})},selectTreeNode:e=>{let{highlightedNodeIds:a}=r();t({selectedNodeId:e,selectedChildNodeId:void 0,highlightedNodeIds:e&&a?.includes(e)?a:void 0,activeInsightId:void 0})},selectChildTreeNode:e=>{t({selectedChildNodeId:e})},hoverTreeNode:e=>{t({hoveredNodeId:e})},highlightTreeNodes:e=>{t({highlightedNodeIds:e,activeInsightId:void 0})},selectSqlScriptRow:e=>{t({selectedSqlScriptRowId:e})},resizeLeftSidebar:e=>{t({leftSidebarWidth:e})},resizeRightDetails:e=>{t({rightDetailsWidth:e})},setOpenPanelId:e=>{t({openPanelId:e})},setKeyMetric:e=>{if(!e)return;t({keyMetricType:e})},downloadQueryProfile:()=>{let e=(0,_.aB)(r());if(!e)return;(0,Z.sT)(e)}})))).current,{activeIndex:v,queryKeys:S,query:T,isImported:U,syncQuery:Y,syncCapabilities:O,syncQueryPlan:F,activePlanId:Q,syncPlanMetadatas:B,syncInsights:H,planMetadatasNextPageToken:$,setPlanMetadatasPageToken:z}=(0,n.Pj)(M,e=>({activeIndex:e.activeQueryIndex||0,queryKeys:e.queryKeys,query:e.query,isImported:e.isImported,syncQuery:e.syncQuery,syncCapabilities:e.syncCapabilities,syncQueryPlan:e.syncQueryPlan,activePlanId:e.activePlanId,syncPlanMetadatas:e.syncPlanMetadatas,syncInsights:e.syncInsights,planMetadatasNextPageToken:e.planMetadatasNextPageToken,setPlanMetadatasPageToken:e.setPlanMetadatasPageToken}),s.x),G=S?.[v],{queryId:et,queryStartTimeMs:ei}=G??{},en=T?.queryMetadata?.isStreaming===!1,{isPolling:es,queryResult:eo,isLoading:el,error:ed}=(0,W.kn)(G,!et||U),eu=!et||U,ec=(t={queryId:et??"",queryStartTimeMs:ei},r={skip:eu,orderBy:en?"query_start_time_ms asc":"query_start_time_ms desc",pageToken:$??void 0,shouldKeepPolling:e=>!eu&&(0,W.Qt)(eo,e)},y=(0,x.IT)(V.qn,{fetchPolicy:"cache-and-network",variables:{metadataInput:{queryId:t.queryId,orderBy:r?.orderBy??"query_start_time_ms desc",pageToken:r?.pageToken,maxResults:j.p4,queryStartTimeMs:void 0!==t.queryStartTimeMs?String(t.queryStartTimeMs):void 0}},...r}),(0,i.useEffect)(()=>{r?.shouldKeepPolling&&(r.shouldKeepPolling(y.data)?y.startPolling((0,b.HY)()):y.stopPolling())},[r?.shouldKeepPolling,y.data]),y),em=(a={id:Q,queryStartTimeMs:eo?.queryStartTimeMs||ei?String(eo?.queryStartTimeMs||ei):void 0},m={skip:!et||U||!Q},h=(0,x.IT)(K,{...m,fetchPolicy:"cache-and-network",variables:{input:{id:a?.id,queryStartTimeMs:a?.queryStartTimeMs,includeRawPlans:a?.includeRawPlans??!1}}}),(0,i.useEffect)(()=>{let e=(0,N.W)("databricks.fe.queryInsights.queryProfileDrawer.plansPollingInterval",5e3);es?h.startPolling(e):h.stopPolling()},[es,h]),h),ep=(0,b.d5)(),eg=!et||U||!ep,ey=(({statementId:e,queryStartTimeMs:t,pageToken:r,options:a})=>{let n=(0,L.A)(t=>e?t.getMinInsightTaskDurationMs(e):void 0),s=(0,x.IT)(R.H,{variables:{input:{statementId:e,pageToken:r,queryStartTimeMs:void 0!==t?String(t):void 0,minTaskDurationMs:void 0!==n?String(n):void 0}},fetchPolicy:"cache-and-network",...a});return(0,i.useEffect)(()=>{a?.shouldKeepPolling&&(a.shouldKeepPolling(s.data)?s.startPolling((0,b.HY)()):s.stopPolling())},[a?.shouldKeepPolling,s.data]),s})({statementId:et,queryStartTimeMs:ei,options:{skip:eg,shouldKeepPolling:()=>!eg&&(0,W.XS)(eo)}});(0,i.useEffect)(()=>{H(ey.loading,ey.data?.sqlgatewayHistoryListInsightsInternal?.res??void 0,ey.data?.sqlgatewayHistoryListInsightsInternal?.configs??void 0)},[ey.data,ey.loading,H]);let eh=(({query:e,isImported:t})=>{let r=e?.endpointId,a=(0,q.ac)(r||null),i=(0,N.W)("databricks.fe.history.enableServerlessCancel",!1),n=(0,b.BA)(),s=(0,q.wj)(r||null),o=(0,w.d)("userId",-1),l=(0,w.d)("isAdmin",!1),d=(0,P.b)("isDbAdmin",(0,w.d)("isDbAdmin",!1),()=>(0,w.d)("isDbAdmin_new",!1)),u=(0,P.b)("deploymentMode",(0,w.d)("deploymentMode","unknown"),k.p.deploymentMode),m="development"===u||"staging"===u,{data:p}=(0,D.j)({variables:{id:r||""},skip:a||!r}),g=p?.lakehouse||void 0,y=g?.warehouseType===c.IB9.CLASSIC||g?.warehouseType===c.IB9.PRO&&!g?.enableDatabricksCompute,h=g?.warehouseType===c.IB9.PRO&&g?.enableDatabricksCompute,[f,I]=function(e,t){if(!(0,C.f)())return t.map(()=>!0);if(e&&e.permissions){let r=e.permissions;return t.map(e=>r.includes(e))}}(g,[c.fFV.CAN_MANAGE,c.fFV.CAN_USE])||[!1,!1],M=!1;M=y||h&&n?!!(l||f):d||m;let v=!1;t||s?v=!1:e?.queryMetadata?.isStreaming&&e?.isCancelable&&a?v=!0:e&&a?v=!!(e.isCancelable&&i):e&&(v=!!(e.user?.id===`${o}`&&I||l||f));let S=!1;e&&(0,b.dN)()?S=d:e&&(S=!0);let T=!t&&!!e,E=!t&&m&&M&&!!e?.sparkUiUrl;return{downloadEnabled:T,verboseModeEnabled:S,sparkUIEnabled:M,cancelEnabled:v,driverLogsEnabled:E}})({query:T,isImported:U});return(0,i.useEffect)(()=>{Y(el,eo||void 0,ed?.message)},[ed?.message,el,eo,Y]),(0,i.useEffect)(()=>{let{data:e}=ec,t=(0,A.Wz)(M.getState().planMetadatas,e?.sqlgatewayHistoryListQueryPlanMetadatas?.queryPlanMetadatas);B(ec.loading,t,e?.sqlgatewayHistoryListQueryPlanMetadatas?.hasNextPage,()=>{e?.sqlgatewayHistoryListQueryPlanMetadatas?.nextPageToken&&z(e.sqlgatewayHistoryListQueryPlanMetadatas.nextPageToken)})},[ec,B,z,et,M]),(0,i.useEffect)(()=>{O(eh)},[eh,O]),(0,i.useEffect)(()=>{let{loading:e,data:t,error:r}=em;F(e,{newApi:t?.sqlgatewayHistoryGetQueryPlan?.plans??void 0},r?.message)},[em,F]),M})({queryKeys:t,activeQueryIndex:0,referrer:f,formatQueryText:m,isImported:!!r,activeTreeId:y,activePlanId:g,openPanelId:h??X.I.Details,displayMode:h?"QUERY_PROFILE":"ONLY_OVERVIEW"});return(0,i.useEffect)(()=>{r&&((0,_.QB)(r)?(I.setState({activePlanId:r.activePlanId,download:r}),I.getState().syncQuery(!1,r.query),I.getState().syncQueryPlan(!1,{raw:r.graphs}),I.getState().syncPlanMetadatas(!1,r.planMetadatas),I.getState().syncInsights(!1,r.insights,r.insightsConfig)):(I.getState().syncQuery(!1,r),I.getState().syncQueryPlan(!1,{oldApi:r.graphs??void 0})))},[r,I]),(0,a.Y)(ei.Provider,{value:{store:I},children:e})},es=(e,t)=>{let{store:r}=eo();if(!r)throw Error("`store` is not initialized in QueryProfileDrawerContext");return(0,n.Pj)(r,e,t)},eo=()=>(0,i.useContext)(ei)},94567:(e,t,r)=>{function a(e){return!!(e&&e.version)}r.d(t,{QB:()=>a,Z1:()=>i,aB:()=>n});let i={isSimpleMode:!0};function n(e){let{query:t,graphs:r,planMetadatas:a,activePlanId:i,insights:n,insightsConfig:s}=e;if(!t)return;return{version:"1.3",query:t,planMetadatas:a,graphs:r,activePlanId:i,insights:n,insightsConfig:s}}},108578:(e,t,r)=>{r.d(t,{M:()=>i,v:()=>n});var a=r(845690);let i=(e=0)=>(0,a.Mj)({key:"com.databricks.queryInsights.QueryProfileDrawer.leftPanelWidth",version:1,initialValue:e}),n=(e=0)=>(0,a.Mj)({key:"com.databricks.queryInsights.QueryProfileDrawer.rightPanelWidth",version:1,initialValue:e})},124430:(e,t,r)=>{r.d(t,{j:()=>S});var a=r(610435);r(692738);var i=r(379045),n=r(642148),s=r(742557),o=r(21255),l=r(623749),d=r(68925),u=r(793480),c=r(802627),m=r(445929),p=r(473026),g=r(404991),y=r(497895),h=r(79570),f=r(978679),I=r(535014);let M={RECYCLE:"fa-recycle"},v={SPINNER:i.A,EXECUTING:n.A,CHECK:s.A,STOP:o.A,DELETED:l.A,FAILED:d.A,TRASH:u.A,QUEUED:c.A,WARNING:m.A,SKIPPED:p.A,UNKNOWN:g.A};function S({iconType:e,accessibilityLabel:t,tooltip:r,color:i,className:n,isSpinning:s=!1}){let o,{theme:l}=(0,y.wn)(),d={SUCCESS:l.colors.textValidationSuccess,ERROR:l.colors.textValidationDanger,INACTIVE:l.colors.textValidationInfo,INFO:l.colors.actionTertiaryTextDefault,WARNING:l.colors.textValidationWarning}[i];if("RECYCLE"!==e){let r=v.hasOwnProperty(e)?v[e]:v.UNKNOWN;o=(0,a.Y)(r,{role:"img","aria-label":t,style:{color:d,cursor:"default"},"data-testid":`StateIcon${e}`,spin:"SPINNER"===e||"EXECUTING"===e,className:n,css:{color:d},"aria-hidden":"false"})}else{let r=[n,"fa",M[e],s&&"fa-spin"].filter(f.zz).join(" ");o=(0,a.Y)("i",{role:"img","aria-label":t,className:r,style:{color:d,cursor:"default"},"data-testid":`StateIcon${e}`})}if(r)return(0,a.Y)(h.m,{componentId:"codegen_web-shared_src_query-insights_components_common_stateicon.tsx_135",side:"bottom",content:r,delayDuration:I.NE,children:o});return o}},163365:(e,t,r)=>{r.d(t,{M:()=>l,q:()=>o});var a=r(692738),i=r(141078),n=r(994643),s=r(362075);let o=e=>{let t=(0,i.IT)(n.Co,{fetchPolicy:"cache-and-network",...e});return(0,a.useEffect)(()=>{e?.shouldKeepPolling&&(e.shouldKeepPolling(t.data)?t.startPolling((0,s.HY)()):t.stopPolling())},[e?.shouldKeepPolling,t.data]),t},l=e=>(0,i._l)(n.Co,{fetchPolicy:"cache-and-network",...e})},209437:(e,t,r)=>{r.d(t,{Cp:()=>m,E9:()=>g,Io:()=>u,Ly:()=>I,Qg:()=>p,dB:()=>d,gx:()=>f,lu:()=>l,n4:()=>c,wo:()=>h});var a=r(483588),i=r(689262),n=r(686560),s=r(441535),o=r(25259);let l=(e,t)=>d(e).some(e=>t.includes(e)),d=e=>[...e.insightIds??[],...e.fusedSubGraphChildren?.flatMap(e=>e.node.insightIds)??[]].filter(e=>void 0!==e),u=e=>{let t=e.insight?.context;return t?.tableContext?.tableName||t?.tableKeysContext?.tableName||t?.tableStatsContext?.tableName||t?.concurrentWriteContext?.tableName||void 0},c=e=>{let t=e.insight?.context;return t?.taskSkewContext?.operatorName||t?.photonExplanationContext?.operatorName||t?.concurrentWriteContext?.operationName||(t?.tableKeysContext?"Scan":void 0)||(t?.explodingJoinContext?.joinType?`${t.explodingJoinContext.joinType} join`:void 0)||(t?.explodingJoinContext?"Join":void 0)||(t?.tableStatsContext?"Scan":void 0)||void 0},m=(e,t)=>Array.from(new Set(e?.map(e=>{let r=t?.find(t=>t.type?.insightEnum===e.insight?.type?.insightEnum);if((e.visibility??r?.visibility)===a.DoK.INSIGHT_VISIBILITY_DATA_OWNER)return u(e);return null}).filter(e=>!!e)||[])),p=e=>{let t=e.queryMetadata?.maxInsightTaskDurationMs,r=e.metrics?.taskTotalTimeMs,a=e.id;if(a&&void 0!==o.A.getState().getMinInsightTaskDurationMs(a))return!0;if(!t)return!1;let i=t>(0,s.W)("databricks.sqlgateway.history.insights.minimumTaskDurationPct",0)/100*(r??0);return i&&a&&o.A.getState().setMinInsightTaskDurationMs(a,t),i},g=e=>e.filter(p).sort((e,t)=>(t.queryMetadata?.maxInsightTaskDurationMs??0)-(e.queryMetadata?.maxInsightTaskDurationMs??0))[0],y=(e,t)=>t?.find(t=>t.type?.insightEnum===e.insight?.type?.insightEnum),h=(e,t)=>{let r=y(e,t);return r?.insightCategory===a.v2J.INSIGHT_CATEGORY_INFORMATIONAL?"informational":"recommendation"},f=(e,t)=>{let r={queryRecommendations:[],tableRecommendations:[],informational:[]};return e.forEach(e=>{let i=y(e,t);if(i?.insightCategory===a.v2J.INSIGHT_CATEGORY_INFORMATIONAL)return void r.informational.push(e);if((e.visibility??i?.visibility)===a.DoK.INSIGHT_VISIBILITY_DATA_OWNER)return void r.tableRecommendations.push(e);r.queryRecommendations.push(e)}),r},I=(e,t,r,s)=>e?.filter(e=>{let s=t?.find(t=>t.type?.insightEnum===e.insight?.type?.insightEnum);if(!s)return!1;let o=e.visibility??s.visibility;if(o===a.DoK.INSIGHT_VISIBILITY_ALL)return!0;if(o&&[a.DoK.INSIGHT_VISIBILITY_INTERNAL,a.DoK.INSIGHT_VISIBILITY_UNSPECIFIED].includes(o))return!r;if(o===a.DoK.INSIGHT_VISIBILITY_DATA_OWNER)return!0;if(o===a.DoK.INSIGHT_VISIBILITY_DB_ADMIN)return(0,i.b)("isDbAdmin",(0,n.d)("isDbAdmin",!1),()=>(0,n.d)("isDbAdmin_new",!1));return!1})||[]},216301:(e,t,r)=>{r.d(t,{Tt:()=>d,Xg:()=>i,ir:()=>o,o1:()=>n});var a=r(956935);let i=520,n=45,s=(0,a.i7)("0%{background-position:0 0;}100%{background-position:-122.1px 0;}"),o=(e,t)=>(({color1:e,color2:t,durationSec:r})=>(0,a.AH)(`
  background-image:
    repeating-linear-gradient(
      -55deg,
      ${e},
      ${e} 10px,
      ${t} 10px,
      ${t} 20px
    );
  background-size: 366.3px 300%;
`,(0,a.AH)("animation:",s," ",r/10,"s linear infinite reverse;")))({color1:e.colors.blue800,color2:e.colors.blue600,...t}),l=(0,a.i7)("0%{opacity:1;}25%{opacity:1;}75%{opacity:0.5;}100%{opacity:1;}"),d=(e=2)=>(0,a.AH)("animation:",l," ",e,"s infinite ease-in-out;")},273625:(e,t,r)=>{r.d(t,{E:()=>p});var a=r(928516),i=r.n(a),n=r(958115),s=r.n(n),o=r(189219),l=r.n(o),d=r(95894),u=r.n(d),c=r(762090);let m=e=>u()(e,(e,t,r,a)=>{e[s()(a)?r:i()(r)]=l()(t)?m(t):t});function p(e){try{let t=JSON.parse(e);t.nodes=t.nodes?.map(e=>({...e,metadata:e.meta_data,meta_data:void 0}))??[];let r=m(t);return r.stageData=r.stageData?.map(e=>({...e,stageId:e.stageId.toString()})),r.nodes=r.nodes??[],r.edges=r.edges??[],(0,c.DY)(r)||r?.errorMessage||(r.errorMessage="Invalid graph format."),r}catch(e){throw console.error(e),e}}},289905:(e,t,r)=>{r.d(t,{MY:()=>h,NT:()=>o,Zj:()=>p,a3:()=>y,gl:()=>I,i1:()=>f,mE:()=>d,oj:()=>m,oz:()=>g,pk:()=>l}),r(778529);var a=r(720097),i=r.n(a),n=r(377063),s=r.n(n);let o="-",l={value:o,unit:"",divisor:1},d=2,u="0".repeat(d);function c(e){if(Math.round(e)===e)return e.toString();let t=e.toFixed(d),[r,a]=t.split(".");if(a===u)return r;return t}function m(e){let t=s().duration(e);if(t.asHours()>=1)return{value:c(t.asHours()),unit:"h"};if(t.asMinutes()>=1)return{value:c(t.asMinutes()),unit:"m"};if(t.asSeconds()>=1)return{value:c(t.asSeconds()),unit:"s"};return{value:c(t.asMilliseconds()),unit:"ms"}}function p(e,t,r,a){if(t<=0)return"0 ms";let i=s().duration(t),n=[];if(i.asDays()>=1){let e=Math.floor(i.asDays());n.push({value:String(e),unit:"d"}),i=i.subtract(e,"d")}if(i.asHours()>=1){let e=Math.floor(i.asHours());n.push({value:String(e),unit:"h"}),i=i.subtract(e,"h")}if(i.asMinutes()>=1){let e=Math.floor(i.asMinutes());n.push({value:String(e),unit:"m"}),i=i.subtract(e,"m")}if(i.asSeconds()>=1){let e=Math.floor(i.asSeconds());n.push({value:String(e),unit:"s"}),i=i.subtract(e,"s")}if(r&&n.length<2&&(!n.length||"s"===n[0].unit)&&i.asMilliseconds()>0&&n.push({value:String(Math.floor(i.asMilliseconds())),unit:"ms"}),!n.length)return"0 ms";return(void 0!==a?n.slice(0,a):n).map(t=>{if("ms"===t.unit)return e.formatMessage({id:"sSC2Aq",defaultMessage:"{number} ms"},{number:t.value});if("s"===t.unit)return e.formatMessage({id:"IvKvrW",defaultMessage:"{number} s"},{number:t.value});if("m"===t.unit)return e.formatMessage({id:"GSfrow",defaultMessage:"{number} min"},{number:t.value});if("h"===t.unit)return e.formatMessage({id:"pQIkeE",defaultMessage:"{number} h"},{number:t.value});if("d"===t.unit)return e.formatMessage({id:"DKpro0",defaultMessage:"{number} d"},{number:t.value});if("w"===t.unit)return e.formatMessage({id:"r9mGcF",defaultMessage:"{number} w"},{number:t.value});return""}).join(" ")}function g(e){if(e<=0)return"0";let{value:t,unit:r}=m(e);return`${t} ${r}`}function y(e){return i()(e)?m(e):l}let h=1e3,f=6e4,I=36e5},339300:(e,t,r)=>{r.d(t,{R:()=>u});var a=r(610435);r(692738);var i=r(497895),n=r(79570),s=r(342411),o=r(124430),l=r(535014),d=r(245734);function u({status:e,hideLabel:t}){let r=(0,s.tz)(),{theme:m}=(0,i.wn)(),p=r.formatMessage(d.BU[e]),{iconType:g,color:y}=c[e]||{iconType:"UNKNOWN",color:"INACTIVE"},h=(0,a.Y)(o.j,{iconType:g,color:y});if(t)return(0,a.Y)(n.m,{componentId:"codegen_web-shared_src_query-insights_components_common_querystatus.tsx_28",side:"bottom",content:p,delayDuration:l.NE,children:(0,a.Y)("span",{children:h})});return(0,a.FD)("span",{css:{display:"inline-flex",alignItems:"center",columnGap:m.spacing.xs,lineHeight:`${m.spacing.md}px`},children:[h," ",p]})}let c={STARTED:{color:"INFO",iconType:"EXECUTING"},QUEUED:{color:"INACTIVE",iconType:"QUEUED"},COMPILED:{color:"INACTIVE",iconType:"EXECUTING"},RUNNING:{color:"INFO",iconType:"EXECUTING"},FINISHED:{color:"SUCCESS",iconType:"CHECK"},FAILED:{color:"ERROR",iconType:"FAILED"},CANCELED:{color:"INACTIVE",iconType:"DELETED"}}},368398:(e,t,r)=>{r.d(t,{f:()=>n});var a=r(13451),i=r(441535);function n(){let e=(0,i.W)("databricks.webapp.tierFlags.enableClusterAclsByTier",!0),t=(0,a.e)("enableClusterAclsConfig","false");return e&&"true"===t}},404991:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),i=r(692738),n=r(375214);function s(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m2.207-10.189a2.25 2.25 0 0 1-1.457 2.56V9h-1.5V7.75A.75.75 0 0 1 8 7a.75.75 0 1 0-.75-.75h-1.5a2.25 2.25 0 0 1 4.457-.439M7.25 10.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0",clipRule:"evenodd"})})}let o=(0,i.forwardRef)((e,t)=>(0,a.Y)(n.I,{ref:t,...e,component:s}));o.displayName="QuestionMarkFillIcon";let l=o},440470:(e,t,r)=>{r.d(t,{T0:()=>c,cj:()=>o,fb:()=>u,gp:()=>d,vj:()=>l});var a,i,n,s,o=((a={}).CUMULATIVE_TIME="CUMULATIVE_TIME",a.DURATION="DURATION",a.EXCLUSIVE_TIME="EXCLUSIVE_TIME",a.NUMBER_OUTPUT_ROWS="NUMBER_OUTPUT_ROWS",a.PEAK_MEMORY_USAGE="PEAK_MEMORY_USAGE",a.SCAN_TIME="SCAN_TIME",a.UNKNOWN_KEY="UNKNOWN_KEY",a),l=((i={}).UNKNOWN_TYPE="UNKNOWN_TYPE",i.SUM_METRIC="SUM_METRIC",i.SIZE_METRIC_BYTES="SIZE_METRIC_BYTES",i.TIMING_METRIC_MS="TIMING_METRIC_MS",i.TIMING_METRIC_NS="TIMING_METRIC_NS",i.AVERAGE_METRIC="AVERAGE_METRIC",i),d=((n={}).QUERY_PLAN_MISSING_REASON_UNSPECIFIED="QUERY_PLAN_MISSING_REASON_UNSPECIFIED",n.QUERY_PLAN_ERROR_UNKNOWN="QUERY_PLAN_ERROR_UNKNOWN",n.SIZE_TOO_LARGE="SIZE_TOO_LARGE",n.DURATION_TOO_SMALL="DURATION_TOO_SMALL",n.COMMAND="COMMAND",n.COMMAND_RESULT="COMMAND_RESULT",n.OPTIMIZATION_DELTA="OPTIMIZATION_DELTA",n.STORAGE_UPLOAD_FAILED="STORAGE_UPLOAD_FAILED",n.DELTA_METADATA="DELTA_METADATA",n.EXECUTED_PLAN_FAILED="EXECUTED_PLAN_FAILED",n.SQL_EXECUTION_LIMIT_REACHED="SQL_EXECUTION_LIMIT_REACHED",n.RAW_QUERY_PLAN_TRUNCATED="RAW_QUERY_PLAN_TRUNCATED",n.EXECUTION_GRAPH_BUILD_FAILURE="EXECUTION_GRAPH_BUILD_FAILURE",n.DBFS_PERMANENT_STORAGE_EXCEPTION="DBFS_PERMANENT_STORAGE_EXCEPTION",n.DBFS_DOWNLOAD_FAILURE_UNSPECIFIED="DBFS_DOWNLOAD_FAILURE_UNSPECIFIED",n.REYDEN_BACKPRESSURE="REYDEN_BACKPRESSURE",n);let u=new Set(["EXECUTED_PLAN_FAILED","COMMAND","COMMAND_RESULT","OPTIMIZATION_DELTA","DELTA_METADATA"]);var c=((s={}).ACTIVE="ACTIVE",s.COMPLETE="COMPLETE",s.PENDING="PENDING",s.SKIPPED="SKIPPED",s.FAILED="FAILED",s.UNDEFINED="UNDEFINED",s)},473026:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),i=r(692738),n=r(375214);function s(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.06 1 2 2.06l5.97 5.97L2 14l1.06 1.06 7.031-7.03zm10.47 14.03h1.5v-14h-1.5z",clipRule:"evenodd"})})}let o=(0,i.forwardRef)((e,t)=>(0,a.Y)(n.I,{ref:t,...e,component:s}));o.displayName="PageLastIcon";let l=o},550540:(e,t,r)=>{r.d(t,{dq:()=>s,sT:()=>o});var a=r(919880);function i(e,t,r,a,i,n,s){try{var o=e[n](s),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(a,i)}let n=/^(con|prn|aux|nul|com[0-9]|lpt[0-9])$|([<>:"/\\|?*])|(\.|\s)$/gi;function s(e,t){var r;return(r=function*(e,t,{fileExtension:r="json",mimeType:a="text/json",charset:i="utf-8"}={}){let s=e.replace(n,"_"),o=`data:${a};charset=${i},`+encodeURIComponent(t),l=document.createElement("a");return l.href=o,l.download=`${s}.${r}`,l.click(),0},function(){var e=this,t=arguments;return new Promise(function(a,n){var s=r.apply(e,t);function o(e){i(s,a,n,o,l,"next",e)}function l(e){i(s,a,n,o,l,"throw",e)}o(void 0)})}).apply(this,arguments)}function o(e){if(!e?.query?.id)return;(0,a.BN)(a.rc.USER_CLICK,"download-profile-button");let t=JSON.stringify(e);s(`query-profile_${e.query.id}`,t,{fileExtension:"json",mimeType:"text/json"})}},552567:(e,t,r)=>{r.d(t,{j:()=>ey});var a=r(610435),i=r(692738),n=r(497895),s=r(338422),o=r(12414),l=r(342411),d=r(433961),u=r(726977),c=r(22191),m=r(929117),p=r(863708),g=r(959240),y=r(102876),h=r(382908),f=r(210556),I=r(465946),M=r(752634),v=r(79570),S=r(79128),T=r(658345),E=r(338308),_=r(26446),N=r(978679),w=r(69626),P=r(34116),k=r.n(P),q=r(328842),b=r(687828),C=r(241393),D=r(566512),A=r(579578),x=r(301182);function R({onClick:e,...t}){return(0,a.Y)(S.$n,{componentId:"codegen_redash_app_src_query-profile_components_actions_queryprofilecopyurlbutton.tsx_29",onClick:e,...t,children:(0,a.Y)(l.sA,{id:"mu0DmP",defaultMessage:"Copy URL"})})}function L({onDownloadClick:e,loading:t,...r}){return(0,a.Y)(S.$n,{componentId:"codegen_redash_app_src_query-profile_components_actions_queryprofiledownloadbutton.tsx_14",onClick:e,loading:t,...r,children:(0,a.Y)(l.sA,{id:"gkO9o2",defaultMessage:"Download"})})}var U=r(294675),Y=r(126927),O=r(124185),F=r(605945),Q=r(919880);function B({sparkUiUrl:e}){let t,r,i,n=function(e){try{let t=new URL(e).pathname.split("/"),r=t.indexOf("sparkui");if(-1!==r&&r+1<t.length)return t[r+1]}catch{}return null}(e);if(!n)return null;return(0,a.Y)(b.Item,{componentId:"codegen_web-shared_src_query-insights_components_queryprofiledrawer_actions_clusterlogsmenuitem.tsx_23",asChild:!0,onClick:()=>(0,Q.BN)(Q.rc.USER_CLICK,"view-driver-logs-dropdown-menu"),children:(0,a.FD)(h.o.Link,{componentId:"codegen_web-shared_src_query-insights_components_queryprofiledrawer_actions_clusterlogsmenuitem.tsx_30",href:(t=window.location.origin,r=(0,O.m)(),i=(0,F.Iq)()??"",`${t}/driver-logs/${n}/download/log4j-active.log?csrf=${r}&o=${i}`),rel:"noopener noreferrer",target:"_blank",children:[(0,a.Y)(l.sA,{id:"3+h6Hl",defaultMessage:"View driver logs"}),(0,a.Y)(U.C,{children:(0,a.Y)(Y.A,{})})]})},"view_driver_logs")}function H({sparkUiUrl:e}){return(0,a.Y)(b.Item,{componentId:"codegen_redash_app_src_query-profile_components_actions_sparkuimenuitem.tsx_26",asChild:!0,onClick:()=>(0,Q.BN)(Q.rc.USER_CLICK,"open-spark-ui-dropdown-menu"),children:(0,a.FD)(h.o.Link,{componentId:"codegen_redash_app_src_query-profile_components_actions_sparkuimenuitem.tsx_31",href:function(e){try{let t=new URL(e);return t.hostname=window.location.hostname,t.toString()}catch{return e}}(e),rel:"noopener noreferrer",target:"_blank",children:[(0,a.Y)(l.sA,{id:"Kqaw+i",defaultMessage:"Open in Spark UI"}),(0,a.Y)(U.C,{children:(0,a.Y)(Y.A,{})})]})},"open_spark_ui")}var $=r(321807),z=r(766461),G=r(915145),K=r(973922);function W(e){if(e)return(0,a.Y)(l.sA,{id:"xqO9FS",defaultMessage:"Enable verbose mode"});return(0,a.Y)(l.sA,{id:"LxzKnT",defaultMessage:"Disable verbose mode"})}let V=({onDropdownOpen:e,buttonCss:t,children:r})=>{let i=(0,l.tz)();return(0,a.FD)(b.Root,{modal:!1,onOpenChange:e,children:[(0,a.Y)(b.Trigger,{asChild:!0,children:(0,a.Y)(S.$n,{componentId:"codegen_web-shared_src_query-insights_components_queryprofile_actions_querydetailsactions.tsx_67","aria-label":i.formatMessage({id:"DyOeB9",defaultMessage:"More"}),icon:(0,a.Y)(C.A,{}),size:"small",css:t})}),(0,a.Y)(b.Content,{children:r})]})};function j({className:e}){let{theme:t}=(0,n.wn)(),r=(0,l.tz)(),{query:s,isSimpleMode:o,displayMode:d,capabilities:u,toggleSimpleMode:m,currentSparkUiUrl:p,downloadQueryProfile:g}=(0,w.zp)(e=>({query:e.query,displayMode:e.displayMode,capabilities:e.capabilities,isSimpleMode:e.isSimpleMode,toggleSimpleMode:e.toggleSimpleMode,currentSparkUiUrl:e.currentSparkUiUrl,downloadQueryProfile:e.downloadQueryProfile}),y.x),{verboseModeEnabled:h,sparkUIEnabled:f,downloadEnabled:I,driverLogsEnabled:M}=u||{},v=(0,q.useClipboard)(),[S,T]=(0,D.o)(),E=(()=>{let{query:e,planMetadatas:t,activePlanId:r,activeTreeId:a,trees:n}=(0,w.zp)(e=>({query:e.query,planMetadatas:e.planMetadatas,activePlanId:e.activePlanId,activeTreeId:e.activeTreeId,trees:e.trees}),y.x),s=new URLSearchParams;(n?.size??0)>1&&a&&s.append("defaultTreeId",a),e?.id&&s.append("queryId",e.id);let o=[...t||[],...(0,i.useMemo)(()=>e?.id?(0,G.Y_)(e.id):[],[e?.id])],l=o.find(e=>e.id===r);return o.length>1&&l&&l.queryStartTimeMs&&l.durationMs&&l.id&&(s.append("defaultPlanId",l.id),s.append("planMetadataStartTimeMs",l.queryStartTimeMs.toString()),s.append("planMetadataDurationMs",l.durationMs.toString()),s.append("defaultPanelId",String(z.I.Batches))),(0,$.R)(`/sql/history?${s.toString()}`)})(),_=(0,x.c)(),P=()=>{(0,Q.BN)(Q.rc.USER_CLICK,"drawer-copy-link-button"),v.copy(E),S.info({message:r.formatMessage({id:"ADNod/",defaultMessage:"URL copied to the clipboard"}),placement:"bottomRight"})},C=s?()=>{(0,Q.BN)(Q.rc.USER_CLICK,"drawer-download-query"),g()}:k(),U=e=>{(0,Q.BN)(Q.rc.USER_CLICK,`drawer-actions-dropdown-${e?"open":"close"}`),e&&O(W(o))},[Y,O]=(0,i.useState)(()=>W(o)),F=(0,K.z)(d),J=(0,a.Y)(b.Item,{componentId:"codegen_web-shared_src_query-insights_components_queryprofile_actions_querydetailsactions.tsx_131",onClick:C,css:{[`@media (min-width: ${t.responsive.breakpoints.lg}px)`]:{display:"none !important"}},children:(0,a.Y)(l.sA,{id:"QyGCMF",defaultMessage:"Download"})},"download"),X=(0,a.Y)(b.Item,{componentId:"codegen_web-shared_src_query-insights_components_queryprofile_actions_querydetailsactions.tsx_145",onClick:P,css:{[`@media (min-width: ${t.responsive.breakpoints.lg}px)`]:{display:"none !important"}},children:(0,a.Y)(l.sA,{id:"sMqkJy",defaultMessage:"Copy URL"})},"copy-url-menu"),Z=p??s?.sparkUiUrl,ee=[F&&h&&(0,a.Y)(b.Item,{componentId:"codegen_web-shared_src_query-insights_components_queryprofile_actions_querydetailsactions.tsx_162",onClick:()=>{(0,Q.BN)(Q.rc.USER_CLICK,`drawer-verbose-mode-${o?"enable":"disable"}-dropdown-menu`),m()},children:Y},"toggle_verbose_mode"),f&&Z&&(0,a.Y)(H,{sparkUiUrl:Z},"spark-ui-menu"),M&&Z&&(0,a.Y)(B,{sparkUiUrl:Z},"driver-logs-menu"),!F&&I&&(0,a.Y)(b.Item,{componentId:"codegen_web-shared_src_query-insights_components_queryprofile_actions_querydetailsactions.tsx_172",onClick:C,children:(0,a.Y)(l.sA,{id:"QyGCMF",defaultMessage:"Download"})},"download"),_&&(0,a.Y)(A.g,{componentId:"query-profile-drawer-feedback",parentUi:c.Es.QueryProfile,origin:"query-profile"},"feedback")].filter(N.zz),et=ee.length>0;return F&&ee.push(J,X),s?(0,a.FD)("div",{css:{marginLeft:"auto",gap:t.spacing.sm,display:"flex"},className:e,"data-testid":"QueryDetailsActions",children:[F&&(0,a.FD)(a.FK,{children:[(0,a.Y)(R,{onClick:P,css:{[`@media (max-width: ${t.responsive.breakpoints.lg}px)`]:{display:"none !important"}},size:"small"}),I&&(0,a.Y)(L,{onDownloadClick:C,loading:!1,css:{[`@media (max-width: ${t.responsive.breakpoints.lg}px)`]:{display:"none !important"}},size:"small"})]}),!et&&F?(0,a.FD)(V,{onDropdownOpen:U,buttonCss:{[`@media (min-width: ${t.responsive.breakpoints.lg}px)`]:{display:"none !important"}},children:[I&&J,X]}):et&&(0,a.Y)(V,{onDropdownOpen:U,children:ee}),T]}):null}function J({children:e}){let t=(0,a.Y)(l.sA,{id:"ip5wf6",defaultMessage:"This query was retrieved from the cache"});return(0,a.Y)(v.m,{componentId:"codegen_web-shared_src_query-insights_components_queryprofiledrawer_common_queryresultsfromcachetooltip.tsx_16",maxWidth:320,side:"top",align:"end",content:t,children:e})}function X({className:e}){return(0,a.Y)(J,{children:(0,a.Y)(I.v,{componentId:"codegen_redash_app_src_query-profile_components_common_queryresultsfromcachetag.tsx_13",className:e,children:(0,a.Y)(l.sA,{id:"Vim1DM",defaultMessage:"Cache"})})})}var Z=r(141078);let ee=(0,Z.J1)`
  fragment BudgetPolicyEnforcementStatusFragment on BudgetpolicyBudgetPolicy {
    currentLimitEnforcementActivation {
      state
    }
  }
`,et=(0,Z.J1)`
  query GetBudgetPolicyQueryForQueryProfile($input: BudgetpolicyGetBudgetPolicyRequestInput!)
  @component(name: "MoneyInfra.CostManagement") {
    serverlesspolicyGetBudgetPolicy(input: $input) {
      customTags {
        key
        value
      }
      policyId
      policyName
      ...BudgetPolicyEnforcementStatusFragment
      creatorUserName
      apiError {
        code
        message
        helpUrl
        traceId
      }
    }
  }
  ${ee}
`,er=({usagePolicyMetadata:e})=>{let{data:t,error:r}=((e,t=!1,r,a)=>(0,Z.IT)(et,{...r,variables:{input:{policyId:e,requireStrongConsistency:t,...a?{impersonatedIdentity:a}:{}}}}))(e.effectiveUsagePolicyId??"",!1,{skip:!e.effectiveUsagePolicyId});if(r||!t?.serverlesspolicyGetBudgetPolicy?.policyName)return null;let i=(0,a.Y)(l.sA,{id:"Qx/qH1",defaultMessage:"Serverless usage policies can limit execution speed based on policy size"}),n=(e=>{if(null==e||isNaN(e))return null;if(e<=128)return"S";if(e<=256)return"M";if(e<=512)return"L";if(e<=1024)return"XL";return"XXL"})(e.effectiveMaxSlots);return(0,a.Y)(v.m,{content:i,componentId:"usage-policy-label-tooltip",children:(0,a.Y)("span",{children:(0,a.Y)(h.o.Text,{color:"secondary",children:(0,a.FD)(a.FK,{children:[t?.serverlesspolicyGetBudgetPolicy?.policyName,n&&` (${n})`]})})})})};var ea=r(483588),ei=r(217985),en=r(535014);let es=({lakehouse:e,target:t,stopPropagation:r})=>{let i=(0,l.tz)();if(!e){let e=i.formatMessage({id:"muFGP6",defaultMessage:"The SQL warehouse of this query has been deleted or you no longer have access to it."});return(0,a.Y)(v.m,{componentId:"codegen_web-shared_src_query-insights_components_common_sqlwarehouselink.tsx_30",content:e,children:(0,a.Y)("span",{children:(0,a.Y)(l.sA,{id:"luto1/",defaultMessage:"N/A"})})})}let n=i.formatMessage({id:"X0n5lI",defaultMessage:"Open {warehouseName} page"},{warehouseName:e.name});if(e.id===en.H6)return(0,a.Y)(v.m,{componentId:"codegen_web-shared_src_query-insights_components_common_sqlwarehouselink.tsx_57",content:(0,a.Y)(l.sA,{id:"mbDYQ2","data-testid":"Lakehouse.Row.Name.SERVERLESS",defaultMessage:"For Notebooks and Jobs"}),children:(0,a.Y)("span",{children:(0,a.Y)(l.sA,{id:"270NWl","data-testid":"Lakehouse.Row.Name.SERVERLESS",defaultMessage:"Serverless compute"})})});if(e.id===en.df)return(0,a.Y)(l.sA,{id:"+FAygf","data-testid":"Lakehouse.Row.Name.DLT",defaultMessage:"Pipeline compute"});return(0,a.Y)(ei.N,{to:`/sql/warehouses/${e.id}`,onClick:e=>{(0,Q.BN)(Q.rc.USER_CLICK,"drawer-sql-warehouse-link"),r&&e.stopPropagation()},componentId:"codegen_web-shared_src_query-insights_components_sqlwarehouselink.tsx_67",asAnchorTag:!0,openInNewTab:!0,asChild:!0,"data-testid":"SqlWarehouseLink","data-link-key":e.id,title:n,...t?{target:t}:{},children:e.name})};var eo=r(927615),el=r(886688);let ed=({computeId:e})=>{let t,r=!!(e&&(0,en.ac)(e)),i=!!(e&&(0,en.wj)(e)),n=(0,el.u)(),s=(0,l.tz)(),d=(0,eo.j)({variables:{id:e||""},skip:!e||r||i||!n});if(d.error&&d.updateQuery(e=>({lakehouse:null})),d.loading)return(0,a.Y)(o.y,{size:"small"});return t=r?{id:e,name:s.formatMessage({id:"gUcVIt",defaultMessage:"Serverless compute"})}:i?{id:e,name:s.formatMessage({id:"De5Ny1",defaultMessage:"Pipeline compute"})}:d.data?.lakehouse,(0,a.Y)(es,{lakehouse:t,stopPropagation:!0,target:"_blank"})};var eu=r(339300);function ec({onClose:e}){let t=(0,l.tz)(),{theme:r}=(0,n.wn)(),{displayMode:s,isImported:o,query:d}=(0,w.zp)(e=>({displayMode:e.displayMode,isImported:e.isImported,query:e.query,isLoading:e.isLoading}),y.x),u=(0,K.z)(s),{metrics:c,user:m,status:p,endpointId:g,channelUsed:P,executedAsUser:k,internalQuerySource:q,queryMetadata:b}=d??{},{usagePolicyMetadata:C}=b??{},D=q?.scheduledBy===ea.PHS.SCHEDULED,A=(0,l.YK)({closeQueryDetails:{id:"ttZCH0",defaultMessage:"Close query details panel"}}),x=(0,i.useMemo)(()=>[[m&&(0,a.Y)(E.P,{"data-testid":"QueryDetailsHeader.User",subject:(0,_.M8)({uniqueName:m?.name,id:m?.id,kind:(0,_.xB)(m?.name),displayName:m?.displayName}),defaultLabel:m?.name,showIcon:!1,tooltipPlacement:"bottomRight",textProps:{color:"secondary"}},"query-overview-list-0"),k&&m&&k.id!==m.id&&u&&(0,a.Y)(h.o.Text,{color:"secondary",css:{display:"flex",gap:r.spacing.xs},children:(0,a.Y)(l.sA,{id:"8S0UZk",defaultMessage:"Run as {user}",values:{user:(0,a.Y)(E.P,{"data-testid":"QueryDetailsHeader.RunAsUser",subject:(0,_.M8)({uniqueName:k?.name,id:k.id,kind:(0,_.xB)(k?.name),displayName:k?.displayName}),defaultLabel:k?.name,showIcon:!1,tooltipPlacement:"bottomRight",textProps:{color:"secondary"}})}})},"query-overview-list-1")],[g&&(0,a.Y)(h.o.Text,{color:"secondary",children:(0,a.Y)(ed,{computeId:g})},"query-overview-list-2"),P?.dbsqlVersion&&(0,a.Y)(h.o.Text,{color:"secondary","data-testid":"QueryDetailsHeader.DbsqlVersion",children:u?(0,a.Y)(l.sA,{id:"KgLQjb",defaultMessage:"Run on DBSQL v {dbsqlVersion}",values:{dbsqlVersion:P.dbsqlVersion}}):(0,a.Y)(l.sA,{id:"B4hVOW",defaultMessage:"Run on DBSQL"})},"query-overview-list-3")],[C&&(0,a.Y)(er,{usagePolicyMetadata:C},"query-overview-list-4")]].map(e=>{let t=e.filter(N.zz);return t.length?t:null}).filter(e=>e),[m,k,u,r.spacing.xs,g,P?.dbsqlVersion,C]),R=x.reduce((e,t)=>e+(t?.length??0),0),L=(0,i.useCallback)((e,t)=>(0,a.Y)(f.f,{css:{padding:`0 ${r.spacing.xs}px`,display:"flex","> *:before":{content:'"\xb7"',color:r.colors.textSecondary,padding:`0 0 0 ${r.spacing.xs}px`,fontSize:r.typography.fontSizeBase,fontWeight:r.typography.typographyRegularFontWeight},"> *":{display:"flex",gap:`${r.spacing.xs}px !important`},flexWrap:"wrap",marginLeft:t?`-${r.spacing.sm}px`:`-${3*r.spacing.xs}px`},children:e},e?.toString()),[r]);return(0,a.FD)("div",{css:{display:"grid",gap:r.spacing.xs,gridTemplateColumns:u?"1fr auto":"1fr",gridTemplateRows:"auto auto",gridTemplateAreas:u?`
              "title actions"
              "description actions"
            `:`
              "title actions"
              "description description"
            `,alignItems:"center"},role:"heading","aria-level":2,"data-testid":"History.QueryDetails.Header",children:[(0,a.FD)("div",{css:{gridArea:"title",padding:0,gap:r.spacing.md,display:"flex",alignItems:"center",marginLeft:0,marginTop:2*!!u,[`@container query-profile-header (min-width: ${r.responsive.breakpoints.lg}px)`]:{marginTop:0}},children:[p&&(0,a.Y)(h.o.Text,{css:{height:r.spacing.md,lineHeight:`${r.spacing.md}px`},bold:!0,"data-testid":"QueryDetailsHeader.Status",children:(0,a.Y)(eu.R,{status:p})}),(c?.resultFromCache||D||o)&&(0,a.FD)("div",{css:{display:"flex"},children:[c?.resultFromCache&&(0,a.Y)(X,{}),D&&(0,a.Y)(I.v,{componentId:"codegen_redash_app_src_query-profile_components_querydetailsheader.tsx_287",children:(0,a.Y)(l.sA,{id:"iCHb5h",defaultMessage:"Scheduled"})}),o&&(0,a.Y)(I.v,{componentId:"codegen_redash_app_src_query-profile_components_querydetailsheader.tsx_295",color:"lemon",children:(0,a.Y)(l.sA,{id:"6+3MqE",defaultMessage:"Imported"})})]})]}),(0,a.Y)(M.f,{css:{gridArea:"description",lineHeight:r.typography.lineHeightBase},children:u||R<3?L(x.flat()):x.map(L)}),(0,a.FD)("div",{css:{display:"flex",gridArea:"actions",gap:u?r.spacing.sm:r.spacing.xs},children:[(0,a.Y)(j,{css:{justifyContent:"flex-end"}}),(0,a.Y)(v.m,{componentId:"codegen_web-shared_src_query-insights_components_queryprofiledrawer_querydetailsheader.tsx_312",content:t.formatMessage(A.closeQueryDetails),side:"bottom",align:"start",children:(0,a.Y)(S.$n,{componentId:"codegen_redash_app_src_query-profile_components_querydetailsheader.tsx_240","aria-label":t.formatMessage(A.closeQueryDetails),icon:(0,a.Y)(T.A,{}),onClick:()=>{(0,Q.BN)(Q.rc.USER_CLICK,"drawer-close"),e?.()},size:"small"})})]})]})}var em=r(245734),ep=r(216301);let eg=(0,i.lazy)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(67590),r.e(20022),r.e(18294),r.e(59276),r.e(59794),r.e(95470),r.e(20806),r.e(37072),r.e(47404),r.e(60675),r.e(47589),r.e(17258),r.e(63116),r.e(98437),r.e(25642),r.e(36525),r.e(30140),r.e(89650),r.e(63584),r.e(99918),r.e(2118),r.e(70426),r.e(29277),r.e(28432)]).then(r.bind(r,89821));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(89821,"./DrawerContent","lazy",e);return e()})().then(e=>({default:e.DrawerContent}))),ey=({queryKeys:e,importedQueryProfile:t,isOpen:r,referrer:n,defaultPanel:s,defaultPlanId:o,defaultTreeId:l,planMetadataStartTimeMs:d,planMetadataDurationMs:m,defaultPanelId:g,onOpenChange:y,queryTextFormatter:h,onInteractOutside:f})=>((0,i.useEffect)(()=>{let t=e?.[0].queryId;d&&t&&o&&(0,G.sv)(t,{id:o,queryId:t,queryStartTimeMs:d,durationMs:m??null,metrics:null,statusId:null,queryTextAndError:null,callStack:null,__typename:"SqlgatewayHistoryQueryPlanMetaData"})},[d,e,o,m]),(0,a.Y)(p.JR,{esComponent:c.Es.QueryProfile,errorBoundaryId:u.s.QueryProfileDrawerRevamp,fallback:(0,a.Y)(a.FK,{}),children:(0,a.Y)(w.KY,{queryKeys:e,importedQueryProfile:t,queryTextFormatter:h,defaultPlanId:o,defaultTreeId:l,defaultPanelId:g,referrer:n,children:(0,a.Y)(eh,{isOpen:r,onOpenChange:y,defaultPanel:s,onInteractOutside:f})})})),eh=({isOpen:e,onOpenChange:t,defaultPanel:r,onInteractOutside:y})=>{let h=(0,l.tz)(),{theme:f}=(0,n.wn)(),I=(0,w.zp)(e=>e.displayMode),M=(0,w.zp)(e=>e.setOpenPanelId),v=(0,w.zp)(e=>e.openQueryPlan),S=h.formatMessage({id:"x5bxJW",defaultMessage:"There was an error rendering the query profile"}),T=(0,em.zg)(I)?"calc(100vw - 100px)":ep.Xg;return(0,i.useEffect)(()=>{e&&r&&(v(),M(r))},[r,e,v,M]),(0,a.Y)(s.Root,{modal:!1,open:e,onOpenChange:t,children:(0,a.Y)(s.Content,{componentId:"codegen_web-shared_src_query-insights_components_queryprofiledrawer_queryprofiledrawer.tsx_55","data-testid":"QueryProfile",title:(0,a.Y)(ec,{onClose:()=>t?.(!1)}),width:T,expandContentToFullHeight:!0,disableOpenAutoFocus:!0,useCustomScrollBehavior:!0,hideClose:!0,onInteractOutside:e=>{y?.(e),"dismissableLayer.focusOutside"===e.type&&e.preventDefault()},size:"small",children:(0,a.Y)(p.JR,{esComponent:c.Es.QueryProfile,errorBoundaryId:u.s.QueryProfileDrawerRevamp,fallback:(0,a.Y)(d.K,{message:S,styles:{marginRight:f.spacing.md}}),children:(0,a.Y)(g.t,{description:m.z.QUERY_PROFILE_LOADING_DRAWER_CONTENT,fallback:(0,a.Y)("div",{css:{display:"flex",justifyContent:"center",height:"100%",alignItems:"center"},children:(0,a.Y)(o.y,{size:"large"})}),children:(0,a.Y)(eg,{})})})})})}},579578:(e,t,r)=>{r.d(t,{g:()=>d});var a=r(610435),i=r(687828),n=r(407075),s=r(342411),o=r(729450),l=r(301182);function d({"aria-describedby":e,children:t,componentId:r,...u}){let c=(0,l.c)(),m=(0,o.O)();if(!c)return null;return(0,a.FD)(i.Item,{componentId:r,"aria-describedby":e,onClick:()=>m({parentUi:u.parentUi,origin:u.origin}),children:[(0,a.Y)(i.IconWrapper,{children:(0,a.Y)(n.A,{})}),t||(0,a.Y)(s.sA,{id:"jDVEiy",defaultMessage:"Send feedback to Databricks"})]},r)}},591e3:(e,t,r)=>{r.d(t,{H:()=>o});var a=r(141078);let i=(0,a.J1)`
  fragment HistoryStatementInsightType on SqlgatewayHistoryInsightTypeVersion {
    insightEnum
    version
  }
`,n=(0,a.J1)`
  fragment HistoryStatementInsightConfig on SqlgatewayHistoryInsightConfig {
    type {
      ...HistoryStatementInsightType
    }
    visibility
    insightCategory
  }
  ${i}
`,s=(0,a.J1)`
  fragment HistoryStatementInsight on SqlgatewayHistoryInsightWithConfig {
    body
    bodyUntruncated
    recommendation
    simplifiedRecommendation
    docUrl
    typeName
    visibility
    insight {
      id
      type {
        ...HistoryStatementInsightType
      }
      context {
        tableContext {
          tableName
        }
        tableKeysContext {
          tableName
          keys
          tableLayout
        }
        tableStatsContext {
          tableName
          statsType
          statsStatus
        }
        photonExplanationContext {
          reason
          operatorName
          expressionName
          message
        }
        taskSkewContext {
          operatorName
          operatorDetail
        }
        concurrentWriteContext {
          tableName
          operationName
        }
        explodingJoinContext {
          joinCondition
          joinType
        }
        incrementalizationContext {
          isIncremental
          issues {
            description
          }
        }
      }
      creationTimeMs
      mutable {
        updateTimeMs
        taskDurationMs
      }
    }
  }
  ${i}
`,o=(0,a.J1)`
  query HistoryStatementInsights($input: SqlgatewayHistoryListInsightsInternalInput!)
  @component(name: "DBSQLX.QueryHistory") {
    sqlgatewayHistoryListInsightsInternal(input: $input) {
      res {
        ...HistoryStatementInsight
      }
      configs {
        ...HistoryStatementInsightConfig
      }
      hasPageToken
      nextPageToken
      apiError {
        code
        message
        helpUrl
        traceId
        errorDetails {
          ... on ErrorDetailErrorInfo {
            reason
            domain
            metadata
          }
          ... on ErrorDetailRequestInfo {
            requestId
            servingData
          }
        }
      }
    }
  }
  ${s}
  ${n}
`},623749:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),i=r(692738),n=r(375214);function s(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("path",{fill:"currentColor",d:"M4.5 8.75v-1.5h7v1.5z"}),(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13",clipRule:"evenodd"})]})}let o=(0,i.forwardRef)((e,t)=>(0,a.Y)(n.I,{ref:t,...e,component:s}));o.displayName="MinusCircleIcon";let l=o},667941:(e,t,r)=>{r.d(t,{NJ:()=>c,Qt:()=>p,XS:()=>m,kn:()=>u});var a=r(483588),i=r(441535),n=r(163365),s=r(47599),o=r(919880),l=r(915145),d=r(362075);let u=(e,t)=>{let r=!e||t,a=(0,d.yk)(),i=(0,s.UQ)(e?.queryId??"",{skip:r||!e?.queryId||!a}),l=(0,n.q)({variables:{id:e?.queryId??"",queryStartTimeMs:e?.queryStartTimeMs},skip:r||!e?.queryId||a&&!i.error,shouldKeepPolling:e=>!r&&!a&&m(e?.lakehouseSqlQuery)}),{error:u,loading:c}=a?i:l,p=i.data?.queryHistoryStatementEvents??l.data?.lakehouseSqlQuery;if(u){let t=u?.networkError;(0,o.BN)(o.rc.API_ERROR,"query-details-load-failure",{error:("string"==typeof t?.result?t?.result:t?.result?.errors?.[0]?.message)||u.name,queryId:e?.queryId,http_status:t?.statusCode,path:"/"===window.location.pathname?window.location.hash:window.location.pathname})}return{queryResult:p,isPolling:!!(!r&&m(p)),isLoading:c,error:u}},c=(e,t,r)=>{let a=(0,d.HY)();r?t():e(a)},m=e=>{if(!e)return!1;if(!e.isFinal)return!0;if(e?.status===a.IPM.FINISHED&&e?.queryEndTimeMs&&!e?.metrics?.resultFromCache){let t=(0,i.W)("databricks.fe.queryHistory.queryProfileLoadTimeout",12e4);return Date.now()-e.queryEndTimeMs<t}return!1},p=(e,t)=>{let r=t?.sqlgatewayHistoryListQueryPlanMetadatas?.queryPlanMetadatas,i=r?.length;if(i){let e=r?.filter(e=>!!e.queryTextAndError)??[],t=e.length>0&&e.every(e=>e.statusId===a.tSc.FINISHED||e.statusId===a.tSc.FAILED||e.statusId===a.tSc.CANCELED);if(i===l.p4&&t)return!1}return m(e)}},674037:(e,t,r)=>{r.d(t,{N:()=>i,f:()=>s});var a,i=((a={}).Alert="alert",a.SqlEditor="sql_editor",a.UnifiedSqlEditor="unified_sql_editor",a.SqlHistory="sql_history",a.SqlWarehouseMonitoring="sql_warehouse_monitoring",a.Notebook="notebook",a.JobNotebook="job_notebook",a.JobGantt="job_gantt",a.Unknown="unknown",a.PipelineDetails="pipeline_details",a.Assistant="assistant",a.LakeviewEditor="lakeview_editor",a);let n=new Set(["notebook","job_notebook"]),s=e=>void 0!==e&&n.has(e)},762090:(e,t,r)=>{r.d(t,{$X:()=>d,DY:()=>u,Dv:()=>l,Ji:()=>c,PO:()=>g,au:()=>s,hf:()=>o,oV:()=>m,xD:()=>p});var a=r(441535),i=r(978679),n=r(440470);let s={nodes:new Map,edges:new Map,rootNodeId:void 0,maxStats:{rows:0,duration:0,memory:0},totalStats:{rows:0,duration:0,memory:0}};function o(e){let t=e.metadata?.find(e=>"IS_PHOTON"===e.key);return t?.value==="true"}function l(e){let t=e.metadata?.find(e=>"IS_DELTA"===e.key);return t?.value==="true"}function d(e){return e===n.T0.ACTIVE}function u(e){if(e.errorMessage)return!1;if(e?.edges?.length===0&&e?.nodes?.length===0)return!0;return e?.edges&&e?.nodes&&e.nodes.length>0||e?.nodes?.length===1&&!e?.edges}let c=e=>{let t=(0,a.W)("databricks.fe.queryInsights.queryProfile.maxNodeSize",1e3);return(e?.nodes?.size||0)>t};function m(e){let t=parseInt(e||"0");return isNaN(t)?0:t}function p(e){return(0,i.zz)(e)&&Object.values(n.T0).includes(e)}let g=e=>e?.timeCompletedMs&&e?.timeSubmittedMs?e.timeCompletedMs-e.timeSubmittedMs:void 0},766461:(e,t,r)=>{r.d(t,{I:()=>i,w:()=>n});var a,i=((a={})[a.Details=0]="Details",a[a.Operators=1]="Operators",a[a.Insights=2]="Insights",a[a.Batches=3]="Batches",a[a.Text=4]="Text",a[a.SqlScripting=5]="SqlScripting",a);function n(e){let t=parseInt(e,10);return!isNaN(t)&&t in i}},802627:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),i=r(692738),n=r(375214);function s(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.FD)("g",{fill:"currentColor",clipPath:"url(#DotsCircleIcon_svg__a)",children:[(0,a.Y)("path",{d:"M6 8a.75.75 0 1 1-1.5 0A.75.75 0 0 1 6 8M8 8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M10.75 8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"}),(0,a.Y)("path",{fillRule:"evenodd",d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0",clipRule:"evenodd"})]}),(0,a.Y)("defs",{children:(0,a.Y)("clipPath",{children:(0,a.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let o=(0,i.forwardRef)((e,t)=>(0,a.Y)(n.I,{ref:t,...e,component:s}));o.displayName="DotsCircleIcon";let l=o},823419:(e,t,r)=>{r.d(t,{Z:()=>T,o:()=>S});var a=r(773345),i=r.n(a),n=r(139259),s=r.n(n),o=r(978679),l=r(440470),d=r(762090),u=r(839447),c=r(289905);let m=(e,t,r,a)=>{if(a.every(e=>!t.has(e))||0===t.size)return a;let i=[];return a.forEach(r=>{t.has(r)?i.push(...m(e,t,r,e.get(r)||[])):i.push(r)}),i},p=e=>{let t=new Map;if(!e)return t;for(let r of e)r.fromId&&r.toId&&(t.get(r.fromId)||t.set(r.fromId,[]),t.get(r.fromId)?.push(r.toId));return t},g=function*(e,t,r=new Set){if(r.has(t))return;for(let a of(r.add(t),yield t,e.get(t)||[]))yield*g(e,a,r)},y=(e,t)=>{let r=t.keyMetrics;return{duration:I(e.duration)?{...r.duration,inheritedFromNodeName:t.node.name??void 0}:e.duration,rows:I(e.rows)?{...r.rows,inheritedFromNodeName:t.node.name??void 0}:e.rows,memory:I(e.memory)?{...r.memory,inheritedFromNodeName:t.node.name??void 0}:e.memory}},h=(e,t)=>{let r=t?e:e.filter(e=>!e.inheritedFromNodeName),a=i()(r,e=>e.keyMetrics?.peakMemoryBytes);return{...M(a?.keyMetrics?.peakMemoryBytes??0),inheritedFromNodeName:a?.inheritedFromNodeName}},f=(e,t,r)=>{let a=e.stageLinks?.flatMap(e=>t.get(e.toString())).filter(o.zz)||[];if(a.length>0)return a;return(r?.parent?.stageLinks||[]).flatMap(e=>(t.get(e.toString())||[]).map(e=>({...e,inheritedFromNodeName:r?.parent?.name}))).filter(o.zz)};function I(e){return!e.rawValue}function M(e){let{value:t,unit:r}=(0,u.$j)(e);return{percentageOfMax:void 0,percentageOfTotal:void 0,rawValue:e,value:t,unit:r}}let v=(e,t)=>(0,d.oV)(e.executionId)-(0,d.oV)(t.executionId),S=({graphs:e,isSimpleMode:t})=>{let r=e.sort(v),a=new Map,i=1;return r.forEach((e,r)=>{let n=`graph-${e.executionId||r}`;if(e.errorMessage){let t=String(i++);a.set(n,{...d.au,id:n,name:t,error:e.errorMessage,missingReason:l.gp.QUERY_PLAN_ERROR_UNKNOWN,timeCompletedMs:e.timeCompletedMs,timeSubmittedMs:e.timeSubmittedMs,sparkUiUrl:e.sparkUiUrl})}else{let r=String(i++),v=function(e,t){var r,a,i;let n,v,S;if(!(0,d.DY)(e))return d.au;let T=e.nodes,{edges:E,rootNodeId:_}=((e,t,r)=>{let a,i=p(e);if(!r)return{edges:i,rootNodeId:e?.[0]?.fromId??t?.[0]?.id??void 0};let n=new Set;t?.forEach(e=>{e.hidden&&r&&e.id&&n.add(e.id)});let s=new Map;for(let[e,t]of i.entries()){if(n.has(e))continue;let r=m(i,n,e,t);void 0===a&&(a=e),s.set(e,r)}return{edges:s,rootNodeId:a}})(e.edges,T,t),N=(r=T,a=t,n=new Map,v=new Map(r?.map(e=>[e.id,e])),r?.forEach(e=>{if(void 0!==e.subgraphParent){let t=n.get(e.subgraphParent)??{parent:v.get(e.subgraphParent),children:[],isFused:!1};t.children.push(e),n.set(e.subgraphParent,t)}}),n.forEach(e=>{let t=e.children.filter(e=>!e.hidden||!a),r=t.some(e=>{var t;return!(t=e.keyMetrics)||!t.durationMs||!t.peakMemoryBytes||!t.rowsNum}),i=e.parent&&(0,d.hf)(e.parent)||t.every(d.hf);e.isFused=r&&t.length>1&&!i}),n),{edges:w,rootNodeId:P}=((e,t,r)=>{let a,i=new Map;for(let[e,t]of r)if(t.isFused)for(let r of t.children)r.id&&i.set(r.id,e);let n=new Map;for(let[t,r]of e){let e=i.get(t)??t,s=new Set;r.forEach(t=>{let r=i.get(t)??t;e!==r&&s.add(r)});let o=Array.from(s);if(o.length>0){if(n.has(e)){let t=(n.get(e)||[]).concat(o).sort();n.set(e,t)}else n.set(e,o);void 0===a&&(a=e)}}return{edges:n,rootNodeId:a??t}})(E,_,N),{nodes:k,edges:q,rootNodeId:b}=((e,t,r,a)=>{if(0===t.size){let t=Array.from(e.values()).find(e=>{let t;return t=e.node,!t.hidden||!a}),r=new Map;t&&t.node.id&&r.set(t.node.id,t);let i=t?.node.id;return{nodes:r,edges:new Map,rootNodeId:i??void 0}}let i=new Set;for(let[e,r]of t.entries())i.add(e),r.forEach(e=>i.add(e));return{nodes:new Map(Array.from(e).filter(([e])=>i.has(e))),edges:t,rootNodeId:r}})((({nodes:e,subGraphs:t,stageMapping:r,isSimpleMode:a,executionGraphStatus:i})=>{let n=new Map,m=e?.length===1&&(!e[0].stageLinks||0===e[0].stageLinks.length);return e?.forEach(e=>{var a,o,p,g;let y,h=e.id?t.get(e.id):void 0,I=e.subgraphParent?t.get(e.subgraphParent):void 0,v=s()(f(e,r,I),["stageId","attemptId"],["desc","desc"]),S=m?i:(a=v,y=a[0]?.status??l.T0.UNDEFINED,(0,d.xD)(y)?y:l.T0.UNDEFINED),T=(o=v,o[0]?.failureReason),E={node:e,userFriendlyId:"",name:e.name??void 0,description:"",isSubGraphParent:!!h,isFusedSubGraphParent:!1,fusedSubGraphChildren:[],isInSubGraph:!!I,keyMetrics:{duration:function(e){let t=e.keyMetrics?.durationMs??0,{value:r,unit:a}=(0,c.oj)(t);return{percentageOfMax:void 0,percentageOfTotal:void 0,rawValue:t,value:r,unit:a}}(p=e),memory:(g=p,M(g.keyMetrics?.peakMemoryBytes??0)),rows:function(e){let t,r=e.keyMetrics?.rowsNum??0,a=r.toString();if(r>0){let e=(0,u.sz)(r);a=e.value,t=e.unit}return{percentageOfMax:void 0,percentageOfTotal:void 0,rawValue:r,value:a,unit:t}}(p)},stagesData:v,status:S,errorMessage:T,insightIds:e.insightIds};e.id&&n.set(e.id,E)}),Array.from(n.values()).forEach(e=>{let r=e.node.id?t.get(e.node.id):void 0;r?.isFused&&(e.fusedSubGraphChildren=r.children.map(e=>e.id?n.get(e.id):void 0).filter(o.zz).filter(e=>{let t;return t=e.node,!t.hidden||!a}).reverse(),e.isFusedSubGraphParent=!0,e.name=e.fusedSubGraphChildren.map(e=>e.node.name).join(", "));let i=e.node.subgraphParent?n.get(e.node.subgraphParent):void 0,s=i?.node.id?t.get(i.node.id):void 0,l=!!(s&&!s.isFused&&!(0,d.hf)(e.node));i&&l&&(e.keyMetrics=y(e.keyMetrics,i)),I(e.keyMetrics.memory)&&(e.keyMetrics.memory=h(e.stagesData,l))}),n})({nodes:T,subGraphs:N,stageMapping:(i=e.stageData||[],S=new Map,i.forEach(e=>{if(e.stageId){let t=S.get(e.stageId)||[];t.push(e),S.set(e.stageId,t)}}),S),isSimpleMode:t,executionGraphStatus:(e=>{if(void 0===e.timeCompletedMs)return l.T0.UNDEFINED;if(e.timeCompletedMs>0)return l.T0.COMPLETE;if(e.timeCompletedMs<0)return l.T0.ACTIVE;return l.T0.UNDEFINED})(e)}),w,P,t);if(0===k.size)return d.au;((e,t,r)=>{if(!e.size)return;let a=1;if(void 0===r)return e.forEach(e=>{e.userFriendlyId=a.toString(),a+=1});for(let i of g(t,r)){let t=e.get(i);t&&(t.userFriendlyId=a.toString(),a+=1)}})(k,q,b);let C=(e=>{if(0===e.size)return{rows:0,duration:0,memory:0};let t=Array.from(e.values());return["duration","rows","memory"].reduce((e,r)=>(e[r]=Math.max(...t.map(e=>e.keyMetrics[r].rawValue??0)),e),{})})(k),D=(e=>{if(0===e.size)return{rows:0,duration:0,memory:0};let t=Array.from(e.values());return["duration","rows","memory"].reduce((e,r)=>(e[r]=t.reduce((e,t)=>e+(t.keyMetrics[r].rawValue??0),0),e),{})})(k);return k.forEach(e=>{["duration","rows","memory"].forEach(t=>{e.keyMetrics[t].percentageOfMax=e.keyMetrics[t].rawValue/C[t],e.keyMetrics[t].percentageOfTotal=e.keyMetrics[t].rawValue/D[t],e.fusedSubGraphChildren.forEach(e=>{e.keyMetrics[t].percentageOfMax=Math.min(1,e.keyMetrics[t].rawValue/C[t]),e.keyMetrics[t].percentageOfTotal=Math.min(1,e.keyMetrics[t].rawValue/D[t])})})}),{nodes:k,edges:q,rootNodeId:b,maxStats:C,totalStats:D}}(e,t)||d.au;a.set(n,{id:n,name:r,error:e.errorMessage??void 0,missingReason:e.missingReason??void 0,timeCompletedMs:e.timeCompletedMs,timeSubmittedMs:e.timeSubmittedMs,sparkUiUrl:e.sparkUiUrl,...v})}}),a},T=e=>{let t=Array.from(e.values());return t.reduce((e,t)=>(e||(e=t),t.nodes.size>e.nodes.size?e=t:t.nodes.size===e.nodes.size&&(t.maxStats.memory>e.maxStats.memory||t.maxStats.duration>e.maxStats.duration||t.maxStats.rows>e.maxStats.rows)&&(e=t),e),t[0])}},839447:(e,t,r)=>{r.d(t,{$j:()=>l,Rt:()=>u,SF:()=>o,YC:()=>s,l9:()=>d,sz:()=>c});var a=r(720097),i=r.n(a),n=r(289905);function s(e,t,r=[],a){let i=Number(e);if(isNaN(i)||!isFinite(i))return{value:"",numericValue:void 0,unit:"",divisor:1};let n=0,o=1;for(;i>=t&&n<r.length-1;)i/=t,o*=t,n+=1;return{value:function(e,t=3){return Math.round(e)!==e?e.toFixed(t):e.toString()}(i,a),numericValue:i,unit:r[n],divisor:o}}function o(e,t){return s(e,1024,["bytes","KB","MB","GB","TB","PB"],t)}function l(e){return i()(e)?o(e,n.mE):n.pk}function d(e,t,{includePercentSign:r=!0,roundingFunctionName:a="round"}={}){if(!i()(e)||!i()(t)||!t)return n.NT;return Math.max(0,(0,Math[a])(e/t*100))+(r?"%":"")}function u(e){if(!i()(e))return n.NT;let t=Number.isInteger(e)?0:n.mE;return e.toLocaleString(void 0,{minimumFractionDigits:t,maximumFractionDigits:t})}let c=e=>s(e,1e3,["","K","M","B","T","Qd"],2)},915145:(e,t,r)=>{r.d(t,{Y_:()=>d,p4:()=>n,sC:()=>u,sv:()=>l});var a=r(845690);let i="query-insights-plan-metadatas",n=10,s=()=>(0,a._S)(i,1,!0,{}),o=e=>{(0,a.AP)(i,1,!0,e)},l=(e,t)=>{let r=s(),a=r[e]||[],i=!!(t.durationMs&&t.queryStartTimeMs);!a.some(e=>e.id===t.id)&&i&&a.push(t),a.sort((e,t)=>{let r=e.queryStartTimeMs?parseInt(e.queryStartTimeMs):0;return(t.queryStartTimeMs?parseInt(t.queryStartTimeMs):0)-r}),o({...r,[e]:a.slice(0,100)})},d=e=>s()[e]||[],u=()=>{let e=s(),t=Date.now()-2592e6;o(Object.fromEntries(Object.entries(e).filter(([e,r])=>r.some(e=>(e.queryStartTimeMs?parseInt(e.queryStartTimeMs):0)>t)).map(([e,r])=>[e,r.filter(e=>(e.queryStartTimeMs?parseInt(e.queryStartTimeMs):0)>t)])))}},927615:(e,t,r)=>{r.d(t,{j:()=>p});var a=r(141078);let i=(0,a.J1)`
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
`,n=(0,a.J1)`
  fragment PermissionFragment on Permission {
    inheritedFromObject
    permissionLevel
    inherited
  }
`,s=(0,a.J1)`
  fragment AccessControlFragment on AccessControl {
    principalName {
      ...PrincipalNameFragment
    }
    allPermissions {
      ...PermissionFragment
    }
  }
  ${i}
  ${n}
`,o=(0,a.J1)`
  fragment SqlWarehousePermissionsFragment on Lakehouse {
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
`,l=(0,a.J1)`
  fragment SqlWarehouseAttributesFragment on Lakehouse {
    id
    name
    size
    minNumClusters
    maxNumClusters
    numClusters
    numActiveClusters @include(if: $withActiveClusters)
    numActiveSessions
    autoStopMins
    state
    jdbcUrl
    instanceProfileArn
    spotInstancePolicy
    enablePhoton
    # TODO(LF-940) use enableServerlessCompute instead
    enableDatabricksCompute
    disableUnityCatalog
    warehouseType
    creator {
      name
    }
    aclPrincipal {
      id
      displayName
      uniqueName
    }
    odbcParams {
      hostname
      path
      port
      protocol
    }
    health {
      status
      summary
      details
    }
    tags {
      customTags {
        key
        value
      }
    }
  }
`,d=(0,a.J1)`
  fragment FullSqlWarehouseFragment on Lakehouse {
    ...SqlWarehouseAttributesFragment
    ...SqlWarehousePermissionsFragment
    channel {
      dbsqlVersion
      name
    }
  }
  ${l}
  ${o}
`;(0,a.J1)`
  fragment SqlWarehouseListFragment on Lakehouse {
    ...SqlWarehouseAttributesFragment
    permissions @include(if: $withPermissions)
  }
  ${l}
`,(0,a.J1)`
  fragment SqlWarehouseListStateFragment on Lakehouse {
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
`;var u=r(368398),c=r(441535);let m=(0,a.J1)`
  query SqlWarehouseDetailsForQueryInsights($id: ID!, $withPermissions: Boolean!, $withActiveClusters: Boolean!)
  @component(name: "DBSQLX.QueryProfile") {
    lakehouse(id: $id) {
      ...FullSqlWarehouseFragment
    }
  }
  ${d}
`,p=e=>{let t,r,i={withPermissions:(0,u.f)(),withActiveClusters:(t=(0,c.W)("databricks.fe.redash.warehouseMonitorStatsNewApi",!1),r=(0,c.W)("databricks.sqlgateway.proxy.getWarehouseStatsInternal.enabled",!1),t&&r)};return(0,a.IT)(m,{...e,variables:{...i,...e.variables}})}},940409:(e,t,r)=>{r.d(t,{I9:()=>s,Ov:()=>n,Wz:()=>o,vf:()=>i});var a=r(483588);let i=e=>e&&e.length>1&&e.every(e=>!e.queryTextAndError),n=e=>e&&e?.some(e=>!!e?.queryTextAndError),s=e=>{if(e===a.tSc.FINISHED)return a.IPM.FINISHED;if(e===a.tSc.FAILED)return a.IPM.FAILED;if(e===a.tSc.CANCELED)return a.IPM.CANCELED;if(e===a.tSc.RUNNING)return a.IPM.RUNNING;if(e===a.tSc.QUEUED)return a.IPM.QUEUED;else if(e===a.tSc.STARTED)return a.IPM.STARTED;return null},o=(e,t)=>{let r=t||[],a=new Set(r.map(e=>e.id));return[...(e||[]).filter(e=>!a.has(e.id)),...r]}},973922:(e,t,r)=>{r.d(t,{z:()=>a});function a(e){return"ONLY_OVERVIEW"!==e}},994643:(e,t,r)=>{r.d(t,{Co:()=>o,GG:()=>s,qn:()=>u});var a=r(141078),i=r(588520);let n=(0,a.J1)`
  fragment HistoryStatementWithPlans on LakehouseSqlQuery {
    ...HistoryStatement
    graphs
  }
  ${i.K}
`,s=(0,a.J1)`
  query HistoryStatementByIdWithPlans($id: ID!, $queryStartTimeMs: Long) @component(name: "DBSQLX.QueryHistory") {
    lakehouseSqlQuery(id: $id, queryStartTimeMs: $queryStartTimeMs) {
      ...HistoryStatementWithPlans
    }
  }
  ${n}
`,o=(0,a.J1)`
  query HistoryStatementById($id: ID!, $queryStartTimeMs: Long) @component(name: "DBSQLX.QueryHistory") {
    lakehouseSqlQuery(id: $id, queryStartTimeMs: $queryStartTimeMs) {
      ...HistoryStatement
    }
  }
  ${i.K}
`,l=(0,a.J1)`
  fragment QueryPlanMetadataMetrics on SqlgatewayHistoryQueryPlanMetrics {
    readBytes
    rowsReadCount
    totalTimeMs
    microbatchDurationBreakdown {
      triggerExecutionMs
      addBatchMs
      getBatchMs
      latestOffsetMs
      queryPlanningMs
      commitOffsetsMs
      walCommitMs
      commitBatchMs
    }
    streamingBacklogMetrics {
      sourceName
      backlogBytes
      backlogFiles
      backlogSeconds
    }
  }
`,d=(0,a.J1)`
  fragment QueryPlanMetadata on SqlgatewayHistoryQueryPlanMetaData {
    id
    queryId
    queryStartTimeMs
    durationMs
    metrics {
      ...QueryPlanMetadataMetrics
    }
    queryTextAndError {
      # Text of a sub-statement present when executing a SQL script
      queryText
      errorMessage
    }
    callStack {
      callStackEntries {
        frameType
        procedureIdentifier
        lineNumber
        procedureCallId
      }
    }
    statusId
  }
  ${l}
`;(0,a.J1)`
  query HistoryStatementByIdWithPlanMetadata(
    $id: ID!
    $metadataInput: SqlgatewayHistoryListQueryPlanMetadatasInput!
    $queryStartTimeMs: Long
  ) @component(name: "DBSQLX.QueryHistory") {
    lakehouseSqlQuery(id: $id, queryStartTimeMs: $queryStartTimeMs) {
      ...HistoryStatement
    }
    sqlgatewayHistoryListQueryPlanMetadatas(input: $metadataInput) {
      apiError {
        code
        message
        helpUrl
        traceId
      }
      hasNextPage
      nextPageToken
      queryPlanMetadatas {
        ...QueryPlanMetadata
      }
    }
  }
  ${i.K}
  ${d}
`;let u=(0,a.J1)`
  query HistoryStatementPlanMetadata($metadataInput: SqlgatewayHistoryListQueryPlanMetadatasInput!)
  @component(name: "DBSQLX.QueryHistory") {
    sqlgatewayHistoryListQueryPlanMetadatas(input: $metadataInput) {
      apiError {
        code
        message
        helpUrl
        traceId
      }
      hasNextPage
      nextPageToken
      queryPlanMetadatas {
        ...QueryPlanMetadata
      }
    }
  }
  ${d}
`}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/79579.d8222e306f.chunk.js.map