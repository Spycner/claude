"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[98120],{47599:(e,t,r)=>{r.d(t,{AR:()=>h,UQ:()=>f});var i=r(692738),a=r(141078),n=r(886100),s=r(22191),o=r(747129),u=r(802558),l=r.n(u);function d(e,t){let r=(0,a.mK)(t?.client),[n,s]=(0,i.useState)({loading:!t?.skip,error:void 0,data:void 0,variables:t?.variables}),[o,u]=(0,i.useState)(()=>{if(t?.skip)return null;return r.subscribe({query:e,variables:t?.variables,fetchPolicy:t?.fetchPolicy,context:t?.context})}),d=(0,i.useRef)(!1);(0,i.useEffect)(()=>()=>{d.current=!0},[]);let c=(0,i.useRef)({client:r,subscription:e,options:t});return(0,i.useEffect)(()=>{let i=t?.shouldResubscribe;"function"==typeof i&&t&&(i=!!i(t)),t?.skip?(!t?.skip!=!c.current.options?.skip||d.current)&&(s({loading:!1,variables:t?.variables}),u(null),d.current=!1):(!1!==i&&(r!==c.current.client||e!==c.current.subscription||t?.fetchPolicy!==c.current.options?.fetchPolicy||!t?.skip!=!c.current.options?.skip||!l()(t?.variables,c.current.options?.variables))||d.current)&&(s({loading:!0,variables:t?.variables}),u(r.subscribe({query:e,variables:t?.variables,fetchPolicy:t?.fetchPolicy,context:t?.context})),d.current=!1),Object.assign(c.current,{client:r,subscription:e,options:t})},[r,e,t]),(0,i.useEffect)(()=>{if(!o)return;let e=o.subscribe({next(e){let i={loading:!1,data:e.data??void 0,error:void 0,variables:t?.variables};s(i),c.current.options?.onSubscriptionData?.({client:r,subscriptionData:i})},error(e){s({loading:!1,error:e,variables:t?.variables}),c.current.options?.onError?.(e)},complete(){c.current.options?.onSubscriptionComplete?.()}});return()=>{e.unsubscribe()}},[o]),n}var c=r(588520),p=r(919880),g=r(362075);let m=(0,a.J1)`
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
`,y=(0,a.J1)`
  subscription QueryHistoryStatementSubscription($id: String, $includePlans: Boolean)
  @component(name: "DBSQLX.QueryHistory") {
    queryHistoryStatementEvents(id: $id, includePlans: $includePlans) {
      ...HistoryStatement
    }
  }
  ${c.K}
`,f=(e,t)=>{let{skip:r}=t||{},a=(0,g.yk)();return(0,i.useEffect)(()=>{a&&e&&!r&&(0,p.an)(p.rc.COMPONENT_RENDER,"qh-statement-gql-sub-init-mount")},[e]),d(y,{variables:{id:e,includePlans:!0},skip:!a||r||!e,shouldResubscribe:!0,onSubscriptionComplete(){(0,p.an)(p.rc.API_SUCCESS,"qh-statement-gql-sub-complete")},onError(t){(0,p.an)(p.rc.API_ERROR,"qh-statement-gql-sub-error",{queryId:e,error:t.message}),n.iT.sev2BurnRate(s.Es.QueryHistory,"QI_GetQueryGqlSubscription",o.i1.P99,o.Ip.Min10,!1,"GetQuery graphql subscription error",!1,!0)}})},h=(e,t)=>{let{skip:r}=t||{},a=(0,g.yk)(),u=Object.values(e.context).every(e=>Array.isArray(e)?0===e.length:null==e);return(0,i.useEffect)(()=>{!a||u||r||(0,p.an)(p.rc.COMPONENT_RENDER,"qh-context-gql-sub-init-mount")},[u]),d(m,{variables:e,skip:!a||r||u,shouldResubscribe:!0,onSubscriptionComplete(){(0,p.an)(p.rc.API_SUCCESS,"qh-context-gql-sub-complete")},onError(t){(0,p.an)(p.rc.API_ERROR,"qh-context-gql-sub-error",{error:t.message,...e.context}),n.iT.sev2BurnRate(s.Es.QueryHistory,"QI_ListQueriesByContextGqlSubscription",o.i1.P99,o.Ip.Min10,!1,`ListQueriesByContext graphql subscription error. Context params: ${JSON.stringify(e.context)}`,!1,!0)}})}},200323:(e,t,r)=>{r.d(t,{Y:()=>a});var i=r(441535);let a=()=>(0,i.W)("pipeline_parameters",!1)},245734:(e,t,r)=>{r.d(t,{BU:()=>h,SF:()=>g,TP:()=>d,b6:()=>y,co:()=>p,fd:()=>f,hy:()=>c,xO:()=>m,xT:()=>u,zg:()=>o});var i,a=r(342411),n=r(483588),s=r(535014);function o(e){return"ONLY_OVERVIEW"!==e}let u="ONLY_OVERVIEW",l=[n.IPM.STARTED,n.IPM.QUEUED,n.IPM.COMPILED,n.IPM.RUNNING];function d(e){return!!(e&&l.includes(e))}function c(e){return!!(e&&[n.IPM.STARTED,n.IPM.QUEUED].includes(e))}function p(e){return!!(e&&[n.IPM.COMPILED,n.IPM.RUNNING].includes(e))}function g(e){return!!e?.length&&e.every(e=>e.isFinal)}function m(e){return!(0,s.ac)(e.endpointId)&&!(0,s.wj)(e.endpointId)}var y=((i={})[i.Provisioning=0]="Provisioning",i[i.Overloading=1]="Overloading",i[i.Optimizing=2]="Optimizing",i[i.Executing=3]="Executing",i);let f=e=>{if(c(e.status)){let{provisioningQueueStartTimestamp:t,overloadingQueueStartTimestamp:r,queryCompilationStartTimestamp:i}=e.metrics||{};if(t&&!r&&!i)return 0;if(r&&!i)return 1}if(p(e.status)){let{queryCompilationStartTimestamp:t,compilationTimeMs:r,resultFetchTimeMs:i,totalTimeMs:a}=e.metrics||{};if(t&&r===a)return 2;if(r&&!i)return 3}return null},h=(0,a.YK)({[n.IPM.FINISHED]:{id:"u0L48W",defaultMessage:"Finished"},[n.IPM.RUNNING]:{id:"g/TELo",defaultMessage:"Running"},[n.IPM.FAILED]:{id:"CfiPVk",defaultMessage:"Failed"},[n.IPM.CANCELED]:{id:"QdV0nI",defaultMessage:"Canceled"},[n.IPM.QUEUED]:{id:"Eeo6r8",defaultMessage:"Queued"},[n.IPM.STARTED]:{id:"Kx9FmL",defaultMessage:"Started"},[n.IPM.COMPILED]:{id:"qYbJuK",defaultMessage:"Compiled"}})},362075:(e,t,r)=>{r.d(t,{BA:()=>p,HY:()=>b,KX:()=>v,Kx:()=>h,QV:()=>s,S:()=>o,YZ:()=>f,aV:()=>u,d5:()=>m,dN:()=>n,ie:()=>y,o6:()=>g,qI:()=>c,us:()=>l,yk:()=>d});var i=r(441535),a=r(845690);let n=()=>(0,i.W)("databricks.fe.queryInsights.isVerboseModeDisabledForServerless",!1),s=()=>(0,i.W)("databricks.fe.queryInsights.isTaskProgressEnabled",!1),o=()=>(0,a.Mj)({key:"query-profile-revamp-preview-enabled",version:1,initialValue:!0,scoped:!0}),u=(e=!1)=>!0,l=()=>(0,i.W)("history_for_dlt",null)??(0,i.W)("databricks.deltapipelines.enableDLTExecutionsInHistory",!1),d=()=>!!(0,i.W)("databricks.fe.queryInsights.enableStatementEventGqlSubscription",!1),c=()=>!!(0,i.W)("databricks.fe.queryInsights.isNewMicrobatchUIEnabled",!1),p=()=>!!(0,i.W)("databricks.fe.queryInsights.isSparkUILinkEnabled",!0),g=()=>!!(0,i.W)("databricks.fe.queryInsights.isStatementsTableV2Enabled",!1),m=()=>!!(0,i.W)("query_perf_insights",!1),y=()=>(0,i.W)("databricks.fe.queryInsights.pageSizeForPipelineQueryHistory",1e3),f=()=>(0,i.W)("databricks.fe.queryInsights.serverlessRateLimitPollIntervalMs",1e4),h=()=>(0,i.W)("databricks.fe.queryInsights.serverlessRateLimitPageSize",50),b=()=>(0,i.W)("databricks.fe.queryInsights.queryProfileDrawer.detailsPollingInterval",5e3),v=()=>!!(0,i.W)("databricks.fe.queryInsights.isStatementSourceFilterEnabled",!1)},511555:(e,t,r)=>{r.d(t,{q:()=>function e(t,r){if(!Array.isArray(t)&&!a()(t))return t;return s()(t,(t,i,n)=>{if((Array.isArray(i)||a()(i))&&(i=e(i,r)),!r(i,n))return;Array.isArray(t)?t.push(i):t[n]=i})}});var i=r(22937),a=r.n(i),n=r(95894),s=r.n(n)},535014:(e,t,r)=>{r.d(t,{H6:()=>i,NE:()=>o,ac:()=>n,df:()=>a,wj:()=>s});let i="0000000000000000",a="0000000000000001",n=e=>e===i,s=e=>e===a,o=300},537711:(e,t,r)=>{r.d(t,{z:()=>E,O:()=>P});var i=r(631377),a=r.n(i),n=r(802558),s=r.n(n),o=r(692738);let u=new Map,l=(e,t,r)=>{let i;return JSON.stringify({...(i={},Object.keys(e).sort().forEach(t=>{i[t]=(e=>{if(Array.isArray(e))return e.sort();return e})(e[t])}),i),orderBy:t,first:r})};var d=r(141078),c=r(976932);let p=e=>(0,d.IT)(c.d,{fetchPolicy:"cache-and-network",...e});var g=r(47599),m=r(441535),y=r(726977),f=r(22191),h=r(549761),b=r(679360),v=r(362075),S=r(245734);let E=(e,t,{preventPolling:r,defaultPageIndex:i}={})=>{let n=(0,o.useRef)(0),{uiDeployableId:d}=(0,b.K8)(),{currentPage:c,getCursor:m,getNextPage:y,getPreviousPage:f,handlePageInfo:h}=((e,t,r,i)=>{let a=(0,o.useCallback)(i=>{if(!e)return;let a=l(e,t,r),n=u.get(a);return n?.get(i)?.cursor},[e,r,t]),n=!!i&&a(i),[s,d]=(0,o.useState)(n&&i?i:0),c=(0,o.useRef)(l(e||{},t,r)),p=c.current!==l(e||{},t,r);(0,o.useEffect)(()=>{p&&(d(n&&i?i:0),c.current=l(e||{},t,r))},[i,e,p,n,r,t]);let g=(0,o.useCallback)(i=>{let a=e&&l(e,t,r);if(!a||!i)return;let n=u.get(a)||new Map,o=n.get(s);n.set(s,{page:s,hasNextPage:i.hasNextPage,cursor:o?.cursor});let d=n.get(s+1);n.set(s+1,{page:s+1,hasNextPage:d?.hasNextPage,cursor:i.endCursor||void 0}),u.set(a,n)},[e,s,r,t]);return{currentPage:s,getCursor:a,getNextPage:()=>{if(!e)return;let i=l(e,t,r),a=u.get(i)?.get(s);a?.hasNextPage&&d(s+1)},getPreviousPage:()=>{s>0&&d(s-1)},resetPagination:()=>{if(!e)return;let i=l(e,t,r);u.set(i,new Map),d(0)},handlePageInfo:g}})(e.variables?.context,e.variables?.orderBy??void 0,e.variables?.first??void 0,i),S=(0,v.yk)(),[E,P]=(0,o.useState)(!0),{variables:T,pollInterval:x,skip:C,...R}=e,M=(0,o.useRef)(a()(T)),A=!s()(M.current,T);(0,o.useEffect)(()=>{A&&(P(!0),M.current=a()(T))},[A]);let N=(0,g.AR)({context:T?.context||{},first:T?.first||void 0,after:T?.after||m(c)||void 0},{skip:C||!S}),L=p({variables:{...T,after:T?.after||m(c),context:{...T?.context}},...R,skip:C||S&&!N.error,notifyOnNetworkStatusChange:!0,onCompleted:i=>{n.current+=1;let a=i.lakehouseQueriesByContext?.edges.map(e=>e.node);try{_(e,t,a)||r?D?.():O?.(I(x||1e3,n.current,t))}catch(e){k(e,d)}}}),q=S&&!N.error?N.data?.queryHistoryContextEvents?.pageInfo:L.data?.lakehouseQueriesByContext?.pageInfo;(0,o.useEffect)(()=>{h(q)},[q,c,h]);let U=function({queryHistoryResult:e,subscriptionData:t}){let r,{error:i}=e,a=(0,v.yk)()&&!!t?.data?.queryHistoryContextEvents,n=!1,s=[],o=!1;if(a){let e=t?.data?.queryHistoryContextEvents;n=t?.loading||!1,e?.edges&&(s=e.edges.map(e=>e.node).filter(Boolean),o=!!e.pageInfo?.hasNextPage,r=e.errors??void 0)}else n=e.loading,s=(e.data?.lakehouseQueriesByContext?.edges||[]).map(e=>e.node)||[],o=!!e.data?.lakehouseQueriesByContext?.pageInfo?.hasNextPage,r=e.data?.lakehouseQueriesByContext?.errors??void 0;return{statements:s,loading:n,hasNextPage:o,error:i,apiErrors:r}}({queryHistoryResult:L,subscriptionData:N});(0,o.useEffect)(()=>{U.loading||P(!1)},[U.loading]);let{startPolling:O,stopPolling:D}=L;(0,o.useEffect)(()=>{n.current=0},[t]);let w=_(e,t,U.statements);return(0,o.useEffect)(()=>{C||r||w?D?.():O?.(I(x,n.current,t))},[r]),{...U,currentPageIndex:c,initialLoading:E,requestNextPage:()=>{P(!0),y()},requestPrevPage:()=>{c>0&&(P(!0),f())},startPolling:L?.startPolling,stopPolling:L?.stopPolling,isUsingSubscription:S&&!N.error,refetch:S?void 0:L.refetch,isPollingCompleted:w}},P=(e,t,r,i,a,n,u)=>{let l=(0,o.useRef)(0),d=(0,o.useRef)(u),[c,g]=(0,o.useState)(!0),{uiDeployableId:m}=(0,b.K8)(),{variables:y,pollInterval:f,skip:h,...v}=e,S=p({variables:{...y,context:{...y?.context},after:i(t)},...v,skip:h,notifyOnNetworkStatusChange:!0,onCompleted:t=>{l.current+=1;let r=t.lakehouseQueriesByContext?.edges.map(e=>e.node);try{_(e,u,r)?R?.():C?.(I(f||1e3,l.current,u))}catch(e){k(e,m)}}});(0,o.useEffect)(()=>{S.loading||g(!1)},[S.loading]);let E=S.data?.lakehouseQueriesByContext?.pageInfo?.endCursor;(0,o.useEffect)(()=>{E&&a(t+1,E)},[E,a,t]);let P=s()(d.current,u);(0,o.useEffect)(()=>{P||(n(),r(0),d.current=u)},[P,u,n,r]);let T=(S.data?.lakehouseQueriesByContext?.edges||[]).map(e=>e.node)||[],x=!!S.data?.lakehouseQueriesByContext?.pageInfo?.hasNextPage,{startPolling:C,stopPolling:R}=S;(0,o.useEffect)(()=>{l.current=0},[u]);let M=_(e,u,T);return(0,o.useEffect)(()=>{h||M?R?.():C?.(I(f,l.current,u))},[]),{...S,initialLoading:c,statements:T,hasNextPage:x,isPollingCompleted:M,requestPrevPage:()=>{t>0&&(g(!0),r(t-1))},requestNextPage:()=>{g(!0),r(t+1)}}},I=(e=2e3,t,r)=>(r?2:1)*e*(Math.min(Math.floor(t/5),9)+1),_=(e,t,r)=>{let i=(e?.variables?.context.statementIds?.length??0)>0?null!==t:T(t),a=r?.length===0;return((0,S.SF)(r)||a)&&i},T=e=>{let t=(0,m.W)("databricks.fe.queryHistory.sparkStatementsPollTimeoutCompletedMs",5e3);return!!e&&Date.now()-e>t},k=(e,t)=>{let r=e instanceof Error?e:Error("Unknown error in useQueryHistoryPollUntilCompletion's onCompleted");(0,h.n8)(r,r.stack||"useQueryHistoryPollUntilCompletion",y.s.QueryHistorySparkPerformance,f.Es.QueryHistory,t,!1)}},588520:(e,t,r)=>{r.d(t,{K:()=>l});var i=r(141078);let a=(0,i.J1)`
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
`,s=(0,i.J1)`
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
`,o=(0,i.J1)`
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
  ${s}
`,u=(0,i.J1)`
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
`,l=(0,i.J1)`
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
  ${u}
  ${o}
`},679955:(e,t,r)=>{r.d(t,{Ag:()=>N,BL:()=>T,Cn:()=>v,DZ:()=>V,Hk:()=>L,Mk:()=>A,Mr:()=>S,NJ:()=>F,PZ:()=>I,V$:()=>x,_N:()=>D,aW:()=>B,cc:()=>U,dD:()=>_,dE:()=>b,dx:()=>w,fr:()=>O,hk:()=>C,j7:()=>q,jo:()=>h,mB:()=>P,se:()=>k,uO:()=>M,xB:()=>E,xD:()=>Q,yM:()=>R});var i=r(956935),a=r(342411),n=r(115957),s=r(817148),o=r(236560),u=r(326081),l=r(441535),d=r(889885),c=r(807091),p=r(190401),g=r(258214),m=r(329099),y=r(814796),f=r(440608);function h(e,t,r){if("file"===(0,f.o)(t)&&e){let t=(0,y.in)(e);if((0,l.W)("databricks.fe.notebook.newSqlFocusedMode",!1)){if(t!==m.Eu.SQL&&t!==m.Eu.Python)return!1}else if(t!==m.Eu.Python)return!1}if((0,o.Du)(r))return!1;return!(0,u.G)()}function b(){return!(0,u.G)()&&(0,d.Nm)("enablePipelinesUi",()=>(0,c.dx)())&&(0,n.zl)(s.g3.PIPELINES)}let v={CREATE_DLT:"notebookCreatePipeline",START_DLT:"notebookStartPipeline",VALIDATE_DLT:"notebookValidatePipeline",STOP_DLT:"notebookStopPipeline",REMOVE_DLT:"notebookRemovePipeline",FAIL_CREATE_DLT:"notebookFailCreatePipeline",FAIL_START_DLT:"notebookFailStartPipeline",FAIL_VALIDATE_DLT:"notebookFailValidatePipeline",FAIL_STOP_DLT:"notebookFailStopPipeline",FAIL_REMOVE_DLT:"notebookFailRemovePipeline",SUCCESS_CREATE_JOB:"notebookSuccessCreateJob",SUCCESS_UPDATE_JOB:"notebookSuccessUpdateJob",SUCCESS_RUN_JOB:"notebookSuccessRunJob",SUCCESS_UNPAUSE_JOB:"notebookSuccessUnpauseJob",SUCCESS_PAUSE_JOB:"notebookSuccessPauseJob",SUCCESS_DELETE_JOB:"notebookSuccessDeleteJob",SUCCESS_CLONE_JOB:"notebookSuccessCloneJob",FAIL_CREATE_JOB:"notebookFailCreateJob",FAIL_UPDATE_JOB:"notebookFailUpdateJob",FAIL_CREATE_JOB_VALIDATION:"notebookFailCreateJobValidation",FAIL_UPDATE_JOB_VALIDATION:"notebookFailUpdateJobValidation",FAIL_RUN_JOB:"notebookFailRunJob",FAIL_UNPAUSE_JOB:"notebookFailUnpauseJob",FAIL_PAUSE_JOB:"notebookFailPauseJob",FAIL_DELETE_JOB:"notebookFailDeleteJob",FAIL_CLONE_JOB:"notebookFailCloneJob",LIST_JOBS:"notebookListJobs",LIST_JOBS_BY_PATH:"notebookListJobsByPath",FILE_EDITOR_JOBS_BY_PATH:"notebookFileEditorJobsByPath"},S=4,E=24,P=12,I=(0,i.AH)({width:830,overflowX:"hidden","@media (max-width: 830px)":{maxWidth:"calc(100vw - 20px)"},"@media (max-height: 600px)":{maxHeight:"calc(100vh - 150px)"}});function _(e){return(0,i.AH)({[`& .${e("form-item-label")} > label`]:{height:"32px"}})}let T={marginTop:"4px"},k={borderTopWidth:1,borderBottomWidth:0,borderTopStyle:"solid",borderTopColor:p.Ug,borderBottomStyle:"none"},x={maxHeight:"410px",overflowY:"auto",overflowX:"hidden","::-webkit-scrollbar":{"-webkit-appearance":"none",width:7},"::-webkit-scrollbar-thumb":{borderRadius:4,backgroundColor:"rgba(0, 0, 0, .5)","-webkit-box-shadow":"0 0 1px rgba(255, 255, 255, .5)"}},C=e=>(0,i.AH)({...x,[e.responsive.mediaQueries.xs]:{maxHeight:"none",overflowY:"hidden"}}),R=(0,i.AH)({width:"100%",minWidth:"600px","@media (max-width: 600px)":{maxWidth:"calc(100vw - 20px)",overflowY:"auto",overflowX:"hidden",minWidth:0},"@media (max-height: 600px)":{maxHeight:"calc(100vh - 150px)",overflowY:"auto",overflowX:"hidden"}}),M={width:"100%",height:30,textAlign:"center"},A=e=>(0,i.AH)({...x,margin:"16px 20px",[e.responsive.mediaQueries.xs]:{maxHeight:"none",overflowY:"hidden",margin:e.spacing.sm}}),N={maxWidth:400,width:"100%"},L=e=>(0,i.AH)({padding:"4px 0px 4px 16px",[e.responsive.mediaQueries.xs]:{padding:4}}),q=e=>(0,i.AH)({display:"flex",justifyContent:"end",alignItems:"center",gap:e.spacing.sm}),U={marginRight:g.hZ,padding:"4px 0px"},O={width:"100%",maxWidth:580},D={height:"34px",...O},w={...D,width:"180px"},Q={padding:0,marginLeft:g.Pf},B={margin:"unset",padding:"16px"},F={margin:"unset",padding:"16px"},V=(0,a.YK)({startPipeline:{id:"ba1jwE",defaultMessage:"Start"},runningPipeline:{id:"WxmnF+",defaultMessage:"Running"},startPipelineRegularTooltip:{id:"uDV6ce",defaultMessage:"Runs all files configured as pipeline source code and updates all datasets"},stopPipelineUpdateTooltip:{id:"g+X4Bg",defaultMessage:"Stops the current running update for the connected pipeline"},startPipelineMismatchedPipelineTooltip:{id:"hvzZRc",defaultMessage:"Cannot start the connected pipeline because this notebook is no longer associated with it"},stopPipelineValidationTooltip:{id:"QerppA",defaultMessage:"Stops the validation for the connected pipeline"},validatePipelineRegularTooltip:{id:"1s5p7m",defaultMessage:"Validates the connected pipeline"},validatePipelineMismatchedPipelineTooltip:{id:"mHkptE",defaultMessage:"Cannot validate the connected pipeline because this notebook is no longer associated with it"},viewPipelineLogs:{id:"4nSUbP",defaultMessage:"View logs"},viewPipelineLogsAndGraph:{id:"IhiGjU",defaultMessage:"View logs and graph"},eventLog:{id:"WdtAC5",defaultMessage:"event log"},graph:{id:"jQt8Th",defaultMessage:"graph"},queryHistory:{id:"xFsUGj",defaultMessage:"query history"},eventLogAndGraph:{id:"wlwKkH",defaultMessage:"event log and graph"},validatePipeline:{id:"P9LNVX",defaultMessage:"Validate"},validatingPipeline:{id:"6ejilH",defaultMessage:"Validating"},validatePipelineTooltip:{id:"/ytusr",defaultMessage:"Validate is an update that does not write changes to any tables"},stopPipeline:{id:"vjVDzP",defaultMessage:"Stop"},stoppingPipeline:{id:"FDbOTu",defaultMessage:"Stopping"}})},735587:(e,t,r)=>{r.d(t,{IL:()=>n,Vy:()=>u,ev:()=>l,iQ:()=>s,kq:()=>d,mD:()=>o});var i=r(441535),a=r(255844);function n(){return(0,a.zs)()}function s({isContinuousPipeline:e}={}){if(e)return!1;if(n())return!0;return null}function o(){return!!s()}function u(){return(0,i.W)("databricks.fe.deltapipelines.showRunDetailsDevelopmentMode",!0)}function l(){return(0,i.W)("databricks.fe.lakeflow.useNewDevModeSection",!1)&&(0,a.zs)()}function d({isContinuousPipeline:e}={}){if(e)return!1;if(l())return!0;return null}},841264:(e,t,r)=>{r.d(t,{p:()=>a});var i=r(511555);function a(e){return(0,i.q)(e,(e,t)=>"__typename"!==t)}},919880:(e,t,r)=>{r.d(t,{BN:()=>c,Nr:()=>g,Qc:()=>p,an:()=>d,rc:()=>o});var i,a=r(278983),n=r(689017),s=r(711489),o=((i={}).COMPONENT_RENDER="component-render",i.COMPONENT_RENDER_ERROR="component-render-error",i.USER_CLICK="user-click",i.USER_UPDATE="user-update",i.USER_FOCUS="user-focus",i.API_SUCCESS="api-success",i.API_ERROR="api-error",i.ACTION_SUCCESS="action-success",i.ACTION_ERROR="action-error",i);let u={"component-render":s.$U.QueryInsightsActionType_Type.COMPONENT_RENDER,"component-render-error":s.$U.QueryInsightsActionType_Type.COMPONENT_RENDER_ERROR,"user-click":s.$U.QueryInsightsActionType_Type.USER_CLICK,"user-update":s.$U.QueryInsightsActionType_Type.USER_UPDATE,"user-focus":s.$U.QueryInsightsActionType_Type.USER_FOCUS,"api-success":s.$U.QueryInsightsActionType_Type.API_SUCCESS,"api-error":s.$U.QueryInsightsActionType_Type.API_ERROR,"action-success":s.$U.QueryInsightsActionType_Type.ACTION_SUCCESS,"action-error":s.$U.QueryInsightsActionType_Type.ACTION_ERROR};function l(e,...t){let[r,i,s]=t;(0,a.y)("clientsideEvent",{eventName:`${e}-${i}`,eventType:r,...s}),(0,n.wi)({legacy_clientside_event:{event_name:`${e}-${i}`,event_type:r,query_id:s?.queryId!==void 0?String(s.queryId):void 0,error_code:s?.error!==void 0?String(s.error):void 0,http_status_code:s?.http_status!==void 0||s?.httpStatusCode!==void 0?String(s.http_status??s.httpStatusCode??""):void 0,source:s?.source!==void 0?String(s.source):void 0,status:s?.status!==void 0?String(s.status):void 0}}),(0,n.wi)({query_insights_event_log:{event_name:`${e}-${i}`,event_type:u[r],query_id:s?.queryId!==void 0?String(s.queryId):void 0,source:s?.source!==void 0?String(s.source).toUpperCase():void 0,warehouse_type:s?.warehouseType!==void 0?String(s.warehouseType).toUpperCase().replace(/ /g,"_"):void 0,is_visible:s?.isVisible!==void 0?!!s.isVisible:void 0,runnable_command_id:s?.runnableCommandId!==void 0?String(s.runnableCommandId):void 0,query_start_time_to_access_time_duration:s?.queryStartTimeToAccessTimeDuration!==void 0?Number(s.queryStartTimeToAccessTimeDuration):void 0,referrer_name:s?.referrerName!==void 0?String(s.referrerName):void 0,is_admin:s?.isAdmin!==void 0?!!s.isAdmin:void 0,status:s?.status!==void 0?String(s.status):void 0,has_user_filter:s?.hasUserFilter!==void 0?!!s.hasUserFilter:void 0,has_duration_filter:s?.hasDurationFilter!==void 0?!!s.hasDurationFilter:void 0,has_status_filter:s?.hasStatusFilter!==void 0?!!s.hasStatusFilter:void 0,has_warehouse_filter:s?.hasWarehouseFilter!==void 0?!!s.hasWarehouseFilter:void 0,has_statement_filter:s?.hasStatementFilter!==void 0?!!s.hasStatementFilter:void 0,duration_sort:s?.durationSort!==void 0?String(s.durationSort):void 0,time_range_in_weeks:s?.timeRangeInWeeks!==void 0?Number(s.timeRangeInWeeks):void 0,estimated_tasks_enabled:s?.estimatedTasksEnabled!==void 0?!!s.estimatedTasksEnabled:void 0,task_progress_valid:s?.taskProgressValid!==void 0?!!s.taskProgressValid:void 0}})}function d(...e){l("query-history",...e)}function c(...e){l("query-profile",...e)}function p(e){d("user-click",`statement-source-filter-${e}`)}let g=e=>`query-profile-drawer-${e}`},976932:(e,t,r)=>{r.d(t,{d:()=>n});var i=r(141078),a=r(588520);let n=(0,i.J1)`
  query HistoryStatementsByContext(
    $first: Int
    $after: String
    $userId: ID
    $warehouseId: ID
    $context: LakehouseQueryContext!
    $orderBy: ListQueriesByContextOrderBy
  ) @component(name: "DBSQLX.QueryHistory") {
    lakehouseQueriesByContext(
      first: $first
      after: $after
      userId: $userId
      warehouseId: $warehouseId
      context: $context
      orderBy: $orderBy
    ) {
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
  ${a.K}
`}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/98120.129f29645e.chunk.js.map