"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[84904],{139321:(e,t,n)=>{n.d(t,{Y:()=>s});var r=n(591e3),a=n(209437);function o(e,t,n,r,a,o,s){try{var i=e[o](s),u=i.value}catch(e){n(e);return}i.done?t(u):Promise.resolve(u).then(r,a)}let s=(e,t,n=!0,s)=>{var i;return(i=function*(){let o=t?.[0],i=yield e.query({query:r.H,variables:{input:{statementId:o,minTaskDurationMs:void 0!==s?String(s):void 0}}}).catch(()=>void 0);if(!i?.data?.sqlgatewayHistoryListInsightsInternal)return[];let{res:u,configs:l}=i.data.sqlgatewayHistoryListInsightsInternal;return(0,a.Ly)(u,l,n,{})},function(){var e=this,t=arguments;return new Promise(function(n,r){var a=i.apply(e,t);function s(e){o(a,n,r,s,u,"next",e)}function u(e){o(a,n,r,s,u,"throw",e)}s(void 0)})})()}},256398:(e,t,n)=>{n.d(t,{Pt:()=>o,QP:()=>a});var r=n(923509);function a(e,t){let n=t.currentValue||"",a=function(e){switch(e.toString()){case"Range":return"Range";case"Date":return"Date";case"String":return"String";case"Decimal":return"Decimal";case"Integer":return"Integer";case"Timestamp":return"Timestamp";default:return"Unspecified Type"}}(t.typedWidgetInfo?.parameterDataType||"Unspecified Type");if(!e)return"";if(t.currentComplexValue?.valueType===r.vV.Range){let r=t.currentComplexValue.min||"",o=t.currentComplexValue.max||"";return`Parameter '${e}' (dataType: '${a}') = '${n}' with minValue='${r}' and maxValue='${o}'`}let o=t.typedWidgetInfo?.options;if(o&&"widgetDisplayType"in o&&o.widgetDisplayType===r.vZ.Dropdown){let t=o.choices.map(e=>`'${e}'`).join(", ");return`Parameter '${e}' (dataType: '${a}') = '${n}' with dropdown options: [${t}]`}return`Parameter '${e}' (dataType: '${a}') = '${n}'`}function o(e){let t=Object.entries(e);if(0===t.length)return"";return`# Databricks Parameters
Users can parameterize values by referencing them in a SQL query using either the curly-brace syntax
(e.g., {{param}}) or the colon syntax (e.g., :param). Note that the suggested syntax in the current
environment is :param, but you should default to the syntax used by the user. The values of the parameters
are replaced when the query/code is executed. When updating a query that is referencing a parameter,
make sure to keep the reference unless there is a clear issue. Note the current environment does not support
the dollar/curly brace syntax (e.g., \${param}), so if the user uses this syntax, you should use the colon syntax
instead. Here are the current user-specified parameters

## User Defined Parameters
`+t.map(([e,t])=>a(e,t)).join("\n")}},335245:(e,t,n)=>{n.d(t,{mY:()=>i});var r=n(267647),a=n(169750),o=n(722510);function s(e,t,n,r,a,o,s){try{var i=e[o](s),u=i.value}catch(e){n(e);return}i.done?t(u):Promise.resolve(u).then(r,a)}let i=(0,r.N)(a.E.SQL_EDITOR_CONTENT,e=>{var t;return(t=function*(){return(e=>{let{contextObject:t}=e,n=t.allCodeBlocks?.[0]?.code??"",r=t.allCodeBlocks?.[0]?.id,a=t.parsedSqlStatements??[],s=a.map((e,t)=>({statement:e.statement,index:t+1,firstToken:e.firstToken,location:e.location})),i=(0,o.fq)(n,4),u=function(e,t){if(!t)return;let n=e.findIndex(e=>e.location.first_line<=t.first_line&&e.location.last_line>=t.first_line);return n>=0?n+1:void 0}(a,t.activeStatement?.location),l=t.isRunAllStatements?"all":"single",d=t.autoLimitEnabled??!1,c=t.catalog,m=t.schema,g=t.errorMessage;return{traceId:e.lakesenseTraceId,queryText:n,cellId:r,statements:s,statementCount:s.length,activeStatementIndex:u,runMode:l,autoLimitEnabled:d,catalog:c,schema:m,errorMessage:g,exceedsTokenBudget:i>1e4}})(e)},function(){var e=this,n=arguments;return new Promise(function(r,a){var o=t.apply(e,n);function i(e){s(o,r,a,i,u,"next",e)}function u(e){s(o,r,a,i,u,"throw",e)}i(void 0)})})()},e=>({statementCount:e.statementCount??0,hasActiveStatement:(e.activeStatementIndex??0)>0,hasRunModeAll:"all"===e.runMode,autoLimitEnabled:e.autoLimitEnabled??!1,exceedsTokenBudget:e.exceedsTokenBudget??!1}),e=>{let{cellId:t,statements:n,statementCount:r,activeStatementIndex:a,runMode:o,autoLimitEnabled:s,catalog:i,schema:u,errorMessage:l,exceedsTokenBudget:d}=e,c=[];t&&c.push(`- Cell GUID: \`${t}\``),c.push(`- Run Mode: ${"all"===o?"Run all statements":"Run single statement"}`),c.push(`- Auto-limit (LIMIT 1000): ${s?"Enabled":"Disabled"}`),i&&c.push(`- Catalog: \`${i}\``),u&&c.push(`- Schema: \`${u}\``),c.push(`- Total Statements: ${r}`),void 0!==a&&c.push(`- Cursor on Statement: ${a}`),l&&c.push(`- <errorMessage>${l}</errorMessage>`);let m=c.join("\n"),g=d?"This is a large query. Use the `queryRead` tool to read the contents of the query.":(n??[]).map(e=>`<statement index="${e.index}">
${e.statement}
</statement>`).join("\n");return`## SQL Query

The user is working in the Databricks SQL Editor with the following SQL query:

${m}

<sql_query>
${g}
</sql_query>

To see the execution output(s) of this query, use the \`getCellResults\` tool to fetch the results.
  `})},356068:(e,t,n)=>{n.d(t,{Fq:()=>i});var r=n(267647),a=n(169750),o=n(797500);function s(e,t,n,r,a,o,s){try{var i=e[o](s),u=i.value}catch(e){n(e);return}i.done?t(u):Promise.resolve(u).then(r,a)}let i=(0,r.N)(a.E.NOTEBOOK_SPECIFIC,e=>{var t;return(t=function*(){return(e=>{let{contextObject:t}=e;if(!t.currentCodeBlock)return{};return{notebookVariables:t.simplifiedVariableTypes,language:t.currentCodeBlock?.language}})(e)},function(){var e=this,n=arguments;return new Promise(function(r,a){var o=t.apply(e,n);function i(e){s(o,r,a,i,u,"next",e)}function u(e){s(o,r,a,i,u,"throw",e)}i(void 0)})})()},e=>{let{notebookVariables:t=[],language:n}=e;return{includeSimplifiedVariableTypes:!!t?.length&&void 0!==n}},e=>{let{notebookVariables:t=[],language:n}=e;if(!n)return"";return[(0,o.ui)(n,t)].filter(e=>""!==e.trim()).join("\n")})},588520:(e,t,n)=>{n.d(t,{K:()=>l});var r=n(141078);let a=(0,r.J1)`
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
`,o=(0,r.J1)`
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
`,s=(0,r.J1)`
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
  ${o}
`,i=(0,r.J1)`
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
`,u=(0,r.J1)`
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
`,l=(0,r.J1)`
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
  ${i}
`},731261:(e,t,n)=>{n.r(t),n.d(t,{ContextType:()=>r.E,GITHUB_MCP_CONFIG_FILE_NAME:()=>T.Lm,LightweightSizeTracker:()=>s.Kt,LightweightTokenTracker:()=>s.Sy,MAX_INSTRUCTIONS_CHARACTERS:()=>f.uW,USER_INSTRUCTIONS_FILE_EVENT_TYPE:()=>f.je,WORKSPACE_ASSISTANT_INSTRUCTIONS_FILE_NAME:()=>f.m6,WORKSPACE_GENIE_INSTRUCTIONS_FILE_NAME:()=>f.GE,WORKSPACE_INSTRUCTIONS_FILE_EVENT_TYPE:()=>f.dZ,addLineNumbers:()=>$.ye,availableTools:()=>s.rK,buildPromptForNotebookAgentContent:()=>N.dJ,buildPromptForReferenceObject:()=>I.gc,enableAssistantPlaygroundTools:()=>s.Y4,enableAssistantToolApi:()=>s.Kq,enableInstructionsOverride:()=>s.Vl,fetchAssistantInstructions:()=>f.Ul,fetchGithubMcpConfig:()=>T.Qw,getAgentsMdContext:()=>a.bk,getAgentsMdToolHint:()=>o.T,getAssistantInstructionsContext:()=>h.lx,getComputeResourceContext:()=>M.fW,getCurrentCodeContext:()=>p.O_,getDocSearchContext:()=>m.ar,getEnvironmentContext:()=>u.NZ,getExecutionErrorContext:()=>d.yN,getFileAgentContentContext:()=>$.y9,getGithubMcpConfigContext:()=>T.V_,getHasUserInstructionsFile:()=>f.$H,getInstructionsFilePath:()=>f.bS,getMemoryContext:()=>B.Fp,getMerlinSupportContext:()=>R.yn,getNeighborCodeContext:()=>g.lX,getNotebookAgentContentContext:()=>N.vE,getNotebookFullCodeCellsContextContext:()=>P,getNotebookSpecificContext:()=>v.Fq,getParameterSubstitutionPrompt:()=>U.Pt,getPromptTemplateForTools:()=>s.rF,getQueryInsightsContext:()=>D,getQueryParameterContext:()=>w.bi,getQueryProfileContext:()=>A.nP,getReferenceObjectContext:()=>I.wS,getRelevantTableContext:()=>c.TN,getSqlEditorContentContext:()=>_.mY,getTableSearchContext:()=>x.IB,getTruncationForNotebookAgentContentContext:()=>N.vO,getUserAssistantInstructions:()=>f.hO,getUserAssistantInstructionsFileName:()=>f.cf,getUserNotebookCellsContext:()=>C.Bc,getUserQueriesContext:()=>y.$O,makeContextWrapper:()=>i.x,registerProjectInstructionsGetter:()=>h.Lk,saveGithubMcpConfig:()=>T.Dm,setGithubMcpEnabled:()=>T.Jw,setHasUserInstructionsFile:()=>f.Rw,setUserAssistantInstructions:()=>f.vP,shouldUseToolAPIToIncludeContext:()=>s.Tg,trimStackTrace:()=>l.OG,updateCitation:()=>s.fZ,useFetchAssistantInstructions:()=>f.bf});var r=n(169750),a=n(409818),o=n(941443),s=n(517546),i=n(267647),u=n(82012),l=n(848068),d=n(749155),c=n(21994),m=n(880797),g=n(976698),p=n(230311),y=n(667936),h=n(149264),f=n(131469),T=n(795346),C=n(222006),I=n(761543),v=n(356068),x=n(737243),S=n(518638),b=n(204892),k=n(157817);function E(e,t,n,r,a,o,s){try{var i=e[o](s),u=i.value}catch(e){n(e);return}i.done?t(u):Promise.resolve(u).then(r,a)}let P=(0,i.N)(r.E.NOTEBOOK_FULL_CODE_CELLS,e=>{var t;return(t=function*(){return(e=>{let{contextObject:t}=e,n=new s.Kt(7340032),r=[];for(let a of t.allCodeBlocks??[])try{n.add(a.code),r.push(a)}catch(t){(0,b.P)(413,"NotebookFullCodeCellsContextContext size limit exceeded",k.Wx.ASSISTANT_EDIT,`Cell code size: ${a.code.length}, total size: ${n.sizeInBytes} bytes`,e.lakesenseTraceId,S.p_.CELL_EDIT_ERROR);break}return{allCells:t.allCodeBlocks,notebookId:t.notebookId,cells:r}})(e)},function(){var e=this,n=arguments;return new Promise(function(r,a){var o=t.apply(e,n);function s(e){E(o,r,a,s,i,"next",e)}function i(e){E(o,r,a,s,i,"throw",e)}s(void 0)})})()},e=>({totalCells:e.allCells?.length??0,cells:e.cells?.length??0}),e=>{let{cells:t,notebookId:n=""}=e;return"Here is the notebook code:\n"+t?.map(e=>`
<file_path>${n}/${e.id}</file_path>
<display_name>${e.name}</display_name>
\`\`\`${e.language}
${e.code}
\`\`\`
`).join("\n")});var N=n(508938),$=n(197951),_=n(335245),M=n(649552),w=n(817150),R=n(360217),A=n(371971),q=n(25259),L=n(383253),Q=n(139321),O=n(909735);function V(e,t,n,r,a,o,s){try{var i=e[o](s),u=i.value}catch(e){n(e);return}i.done?t(u):Promise.resolve(u).then(r,a)}function F(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function s(e){V(o,r,a,s,i,"next",e)}function i(e){V(o,r,a,s,i,"throw",e)}s(void 0)})}}let D=(0,i.N)(r.E.QUERY_INSIGHTS,e=>F(function*(){return yield F(function*(){let{statementIds:t,citations:n,apolloClient:r,minInsightTaskDurationMs:a}=e;if(!r)return{insights:[]};let o=Array.isArray(t)&&t.length>0?t[0]:void 0,i=a??(o?q.A.getState().getMinInsightTaskDurationMs(o):void 0);return{insights:yield(0,Q.Y)(r,t,!0,i),citationIndex:(0,s.fZ)({url:(0,L.ZJ)({statementId:o,isInsights:!0}),name:(0,L.sz)(o,!0)},n)}})()})(),e=>{let{insights:t}=e;return{insightsNum:t?.length??0}},e=>{if(!e?.insights)return"No Query Insights available.";return(0,O.g)(e.insights,e.citationIndex)});var U=n(256398),B=n(886770)},817150:(e,t,n)=>{n.d(t,{bi:()=>u});var r=n(689017),a=n(267647),o=n(256398),s=n(169750);function i(e,t,n,r,a,o,s){try{var i=e[o](s),u=i.value}catch(e){n(e);return}i.done?t(u):Promise.resolve(u).then(r,a)}let u=(0,a.N)(s.E.QUERY_PARAMETERS,e=>{var t;return(t=function*(){return(e=>{let{contextObject:t}=e,n=t.inputWidgets,a=n?Object.keys(n).length:0;if(a>0){let t=e.agentName?.includes("sqlEditor")?"sql_editor":"notebook";(0,r.wi)({assistant_log:{common_tags:{event_type:"globalAssistantQueryParameters",event_name:`parameterCount_${t}`,lakesense_trace_id:e.lakesenseTraceId??""},assistant_context:{context_size:a}}})}return{traceId:e.lakesenseTraceId,queryParameters:n}})(e)},function(){var e=this,n=arguments;return new Promise(function(r,a){var o=t.apply(e,n);function s(e){i(o,r,a,s,u,"next",e)}function u(e){i(o,r,a,s,u,"throw",e)}s(void 0)})})()},e=>{let t=e.queryParameters?Object.keys(e.queryParameters).length:0,n=Math.min(t,5);return{parameterCount:t,includedParameterCount:n,parametersTruncated:t>5}},e=>{let{queryParameters:t}=e;if(!t||0===Object.keys(t).length)return"";let n=Object.entries(t),r=n.length,a=n.slice(0,5),s=r-a.length,i=a.map(([e,t])=>(0,o.QP)(e,t)).join("\n"),u=s>0?` (${s} more omitted)`:"";return`## Query Parameters
**⚠️ MANDATORY**: Load the \`query-parameters\` skill before ANY work involving these parameters.
Active parameters:${u}
${i}`})},909735:(e,t,n)=>{n.d(t,{g:()=>r});let r=(e,t)=>{if(!e?.length)return"No Query Insights available.";return`${t?`{${t}} `:""}Query Insights:
`+e.map(e=>{let t=[],n=e.bodyUntruncated??e.body;return n&&t.push(n),e.recommendation&&t.push(`Recommendation: ${e.recommendation}`),t.join("\n")}).filter(e=>e).join("\n\n")}},976932:(e,t,n)=>{n.d(t,{d:()=>o});var r=n(141078),a=n(588520);let o=(0,r.J1)`
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
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/84904.fe40327383.chunk.js.map