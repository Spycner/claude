"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[83147],{27292:(e,a,t)=>{t.d(a,{r:()=>l});var n=t(141078);let r=(0,n.J1)`
  fragment ExternalLineageRelationshipObjectFragment on MetadatalineageapiserverExternalLineageRelationshipObject {
    externalMetadata {
      name
    }
    modelVersion {
      name
      version
    }
    path {
      url
    }
    table {
      name
    }
  }
`,s=(0,n.J1)`
  fragment ExternalLineageRelationshipInfoFragment on MetadatalineageapiserverExternalLineageInfo {
    tableInfo {
      name
      schemaName
      catalogName
      eventTime
    }
    modelInfo {
      modelName
      version
      eventTime
    }
    fileInfo {
      path
      storageLocation
      securableName
      securableType
      eventTime
    }
    externalLineageInfo {
      id
      query
      source {
        ...ExternalLineageRelationshipObjectFragment
      }
      target {
        ...ExternalLineageRelationshipObjectFragment
      }
      properties {
        key
        value
      }
      columns {
        source
        target
      }
    }
    externalMetadataInfo {
      entityType
      systemType
      eventTime
      name
    }
  }
  ${r}
`,i=(0,n.J1)`
  fragment LineageInfoFragment on MetadatalineageapiserverLineageInfo {
    tableInfo {
      name
      schemaName
      catalogName
      hasPermission
      tableType
      lineageTimestamp
    }
    modelInfo {
      modelName
      version
      lineageTimestamp
      mlflowModelId
    }
    functionInfo {
      functionName
      lineageTimestamp
    }
    fileInfo {
      path
      hasPermission
      storageLocation
      securableName
      securableType
      lineageTimestamp
    }
    pipelineInfos {
      pipelineId
      updateId
      workspaceId
      lineageTimestamp
    }
    jobInfos {
      jobId
      workspaceId
      lineageTimestamp
    }
    notebookInfos {
      notebookId
      workspaceId
      lineageTimestamp
    }
    dashboardInfos {
      dashboardId
      dashboardType
      internalName
      workspaceId
      lineageTimestamp
    }
    dashboardV3Infos {
      dashboardId
      dashboardType
      internalName
      workspaceId
      lineageTimestamp
    }
    queryInfos {
      queryId
      workspaceId
      lineageTimestamp
    }
    servingEndpointInfos {
      servingEndpointId
      servedEntityId
      workspaceId
      lineageTimestamp
    }
    alertInfos {
      alertId
      workspaceId
      lineageTimestamp
    }
    genieSpaceInfos {
      genieSpaceId
      workspaceId
      lineageTimestamp
    }
    functionInfos {
      functionId
      functionName
      lineageTimestamp
    }
    lineageTimestamp
  }
`,o=(0,n.J1)`
  fragment LineageEntityFragment on MetadatalineageapiserverEntityInfoPaginated {
    dashboardInfo {
      dashboardId
      dashboardType
      internalName
      workspaceId
      lineageTimestamp
    }
    jobInfo {
      jobId
      workspaceId
      lineageTimestamp
    }
    notebookInfo {
      notebookId
      workspaceId
      lineageTimestamp
    }
    queryInfo {
      queryId
      workspaceId
      lineageTimestamp
    }
    pipelineInfo {
      pipelineId
      updateId
      lineageId
      workspaceId
      lineageTimestamp
    }
    servingEndpointInfo {
      servingEndpointId
      servedEntityId
      workspaceId
      lineageTimestamp
    }
    genieSpaceInfo {
      genieSpaceId
      workspaceId
      lineageTimestamp
    }
    alertInfo {
      alertId
      workspaceId
      lineageTimestamp
    }
  }
`;(0,n.J1)`
  query getPathOrTableLineageQuery(
    $tableName: String
    $path: String
    $includeEntityLineage: Boolean = true
    $includeUpstream: Boolean = true
    $includeDownstream: Boolean = true
    $includeFileLineage: Boolean = true
    $startTimestamp: String
  ) @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverGetTableEntityLineage(
      input: {
        path: $path
        tableName: $tableName
        includeEntityLineage: $includeEntityLineage
        includeFileLineage: $includeFileLineage
        startTimestamp: $startTimestamp
      }
    ) {
      upstreams @include(if: $includeUpstream) {
        ...LineageInfoFragment
      }
      downstreams @include(if: $includeDownstream) {
        ...LineageInfoFragment
      }
    }
  }
  ${i}
`;let l=(0,n.J1)`
  query ListSecurableBySecurable(
    $securableType: MetadatalineageapiserverSecurableType!
    $securableFullName: String!
    $subsecurableId: String
    $lineageDirection: MetadatalineageapiserverLineageDirection!
    $startTimestamp: String
    $pageSize: Int
    $pageToken: String
    $securableResponseFilter: MetadatalineageapiserverSecurableType
  ) @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverListSecurableLineagesBySecurable(
      input: {
        securableType: $securableType
        securableFullName: $securableFullName
        subsecurableId: $subsecurableId
        lineageDirection: $lineageDirection
        startTimestamp: $startTimestamp
        pageSize: $pageSize
        pageToken: $pageToken
        securableResponseFilter: $securableResponseFilter
      }
    ) {
      lineages {
        ...LineageInfoFragment
      }
      nextPageToken
      areEntitiesTruncated
    }
  }
  ${i}
`;(0,n.J1)`
  query ListEntityBySecurable(
    $securableType: MetadatalineageapiserverSecurableType!
    $securableFullName: String!
    $subsecurableId: String
    $lineageDirection: MetadatalineageapiserverLineageDirection!
    $startTimestamp: String
    $pageSize: Int
    $pageToken: String
    $entityResponseFilter: MetadatalineageapiserverEntityType
  ) @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverListEntityLineagesBySecurable(
      input: {
        securableType: $securableType
        securableFullName: $securableFullName
        subsecurableId: $subsecurableId
        lineageDirection: $lineageDirection
        startTimestamp: $startTimestamp
        pageSize: $pageSize
        pageToken: $pageToken
        entityResponseFilter: $entityResponseFilter
      }
    ) {
      lineages {
        ...LineageEntityFragment
      }
      nextPageToken
    }
  }
  ${o}
`,(0,n.J1)`
  query ListExternalLineage(
    $lineageDirection: MetadatalineageapiserverDirectionLineageDirection!
    $pageSize: Int
    $pageToken: String
    $securableResponseFilter: MetadatalineageapiserverListExternalLineageRelationshipsRequestExternalLineageType
    $objectInfo: MetadatalineageapiserverExternalLineageRelationshipObjectInput!
  ) @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverListExternalLineageRelationships(
      input: {
        objectInfo: $objectInfo
        lineageDirection: $lineageDirection
        pageToken: $pageToken
        pageSize: $pageSize
        securableResponseFilter: $securableResponseFilter
      }
    ) {
      externalLineageRelationships {
        ...ExternalLineageRelationshipInfoFragment
      }
      apiError {
        code
        message
      }
      nextPageToken
    }
  }
  ${s}
`,(0,n.J1)`
  query ListColumnLineage(
    $tableName: String!
    $acceptedTables: [String!]!
    $lineageDirection: MetadatalineageapiserverLineageDirection!
    $columnName: String!
    $startTimestamp: String
  ) @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverListColumnLineages(
      input: {
        acceptedTables: $acceptedTables
        lineageDirection: $lineageDirection
        tableName: $tableName
        startTimestamp: $startTimestamp
        columnName: $columnName
      }
    ) {
      lineages {
        catalogName
        schemaName
        tableName
        tableType
        workspaceId
        path
        name
        lineageTimestamp
        hasPermission
      }
    }
  }
`},159517:(e,a,t)=>{t.d(a,{n:()=>p,x:()=>m});var n,r=t(200356),s=t(27292);function i(e,a,t,n,r,s,i){try{var o=e[s](i),l=o.value}catch(e){t(e);return}o.done?a(l):Promise.resolve(l).then(n,r)}function o(e){return function(){var a=this,t=arguments;return new Promise(function(n,r){var s=e.apply(a,t);function o(e){i(s,n,r,o,l,"next",e)}function l(e){i(s,n,r,o,l,"throw",e)}o(void 0)})}}var l=((n=l||{}).UPSTREAM="upstream",n.DOWNSTREAM="downstream",n.BOTH="both",n);let u={type:"function",function:{description:"Only call this tool for questions asking for lineages and to search for upstream and downstream table lineages",parameters:{type:"object",properties:{userMessage:{type:"string",description:"User input message, place the entire query here UNMODIFIED"},direction:{type:"string",enum:Object.values(l),description:"For the direction parameter, determine if the search query asks for upstream lineages/downstream lineages, or both.If the query indicates that they do not want 'upstream' lineages, the response should be 'downstream', and if the query indicates that they do not want 'downstream' lineages, the response should be 'upstream'.Phrases like 'no upstream', 'do not show upstream', 'not upstream', etc. should be considered as 'downstream'for instance, and vice versa where replacing 'upstream' with 'downstream' yields a response of 'upstream'.Phrases like 'upstream lineages', 'only upstream', 'show upstream', etc. should be considered as 'upstream'for instance, and vice versa where replacing 'upstream' with 'downstream' yields a response of 'downstream'.Direction must solely and exclusively be one of enums 'upstream', 'downstream', or 'both'. Use 'both' if nothing relevant is specified."},startTimestamp:{type:"string",description:"For the startTimestamp parameter, if the query indicates a timestamp to start querying lineages from, pass the timestamp in as a string.For example, if the query is 'lineages after July 4th', pass 'yyyy-07-04T00:00:00Z' into startTimestamp.Regardless of how much information in the date is provided, the startTimestamp in the case of a date MUST ALWAYS be in the format of 'yyyy-MM-ddTHH:mm:ssZ'with as much information as possible filled in. However, always assume time is 00:00:00 unless one is specified. No other startTimestamp values are acceptable besides the emptystring for no dates. DO NOT assume a year, month, or date if none are provided, fill in yyyy, MM, and dd respectively.If the query does not specify a timestamp in relation to receiving table lineages starting from that time, pass the empty string '' into startTimestamp.Overall, for example, a query like 'some upstreams from the 17th', startTimestamp is 'yyyy-MM-17T00:00:00Z'.A query like 'lineages from june' should have startTimestamp as 'yyyy-06-ddT00:00:00Z'.A query like 'some downstreams' should have startTimestamp as ''."}},required:["userMessage","direction","startTimestamp"]}}},m={...u,function:{...u.function,name:"getTableLineages"}},p=(e,a,t,n)=>{let i=(i,l,u,m)=>o(function*(){let o,p,d=i.split(" "),c=`${a}.${t}.${n}`;for(let e in d)if(d[e].startsWith("table:")){c=d[e].substring(6);break}if(20===u.length){let e=new Date,a=e.getFullYear().toString(),t=u.includes("y")?(e.getMonth()+1).toString().padStart(2,"0"):"01";u.includes("y")&&(u=u.replace("yyyy",a)),u.includes("M")&&(u=u.replace("MM",t)),u.includes("d")&&(u=u.replace("dd","01"))}let g="upstream"===l||"both"===l,h="downstream"===l||"both"===l,b=20===u.length?new Date(u).getTime().toString():new Date("2023-01-01T00:00:00Z").getTime().toString();if(h){let{data:a}=yield e.query({query:s.r,variables:{securableType:r.osA.TABLE_TYPE,securableFullName:c,lineageDirection:r.W73.DOWNSTREAM,securableResponseFilter:r.osA.TABLE_TYPE,startTimestamp:b,pageSize:m}});o=a}if(g){let{data:a}=yield e.query({query:s.r,variables:{securableType:r.osA.TABLE_TYPE,securableFullName:c,lineageDirection:r.W73.UPSTREAM,securableResponseFilter:r.osA.TABLE_TYPE,startTimestamp:b,pageSize:m}});p=a}let f=o?.metadatalineageapiserverListSecurableLineagesBySecurable?.lineages?o?.metadatalineageapiserverListSecurableLineagesBySecurable?.lineages.map(e=>({...e,lineageDirection:"downstream"})):[],y=p?.metadatalineageapiserverListSecurableLineagesBySecurable?.lineages?p?.metadatalineageapiserverListSecurableLineagesBySecurable?.lineages.map(e=>({...e,lineageDirection:"upstream"})):[],T=f.concat(y).sort((e,a)=>{let t=e?.tableInfo?.lineageTimestamp,n=a?.tableInfo?.lineageTimestamp;if(null==t)return 1;if(null==n)return -1;return new Date(n).getTime()-new Date(t).getTime()}).slice(0,5);return{lineagesData:h&&g?T:g?y:f,queriedTable:c.replace(/\./g,"/")}})();return{name:"getTableLineages",label:"Search Table Lineages",run:e=>o(function*(){if((!a||!t||!n)&&!e.includes("table:"))return{toolResponses:"",shortcutLLMResponse:"Please specify a object, or visit a valid table page and try again."};try{let a=JSON.parse(e).userMessage,t=JSON.parse(e).direction,n=JSON.parse(e).startTimestamp,{lineagesData:r,queriedTable:s}=yield i(a,t,n,5);return{shortcutLLMResponse:"",toolResponses:JSON.stringify({tables:JSON.stringify(r),queriedTable:s})}}catch(e){return Promise.resolve(`{ type: 'error', message: '${e instanceof Error?e.message:"unknown error"}' }`)}})()}}},290766:(e,a,t)=>{t.d(a,{T:()=>l});var n=t(65061),r=t(960718),s=t(141078);let i=(0,s.J1)`
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
  ${r.xz}
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
`,l=(e,a)=>(0,n.IT)(a?o:i,{fetchPolicy:"cache-and-network",...e})},362366:(e,a,t)=>{t.d(a,{N:()=>r});var n=t(441535);function r(){return(0,n.W)("databricks.fe.discovery.disableTopUsersInsights",!1)}},366898:(e,a,t)=>{t.d(a,{AB:()=>o,H7:()=>l,bK:()=>m,cs:()=>i});var n=t(65061),r=t(441535),s=t(141078);function i(){return(0,r.W)("databricks.metadatalineageapiserver.frequentJoinIncludeColumns",!0)}let o=(0,s.J1)`
  query getTableInsightsQuery(
    $tableName: String
    $longLimitSize: Long
    $longStringLimitSize: LongString
    $intLimitSize: Int
    $includeColumns: Boolean!
    $skipTopUserInsights: Boolean!
  ) @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverGetFrequentlyJoinedTablesWithColumns: metadatalineageapiserverGetFrequentlyJoinedTables(
      input: { tableName: $tableName, limitSize: $longStringLimitSize }
    ) @include(if: $includeColumns) {
      frequentlyJoinedTables {
        catalogName
        schemaName
        tableName
        joinKeys {
          joinedTableColumn
          requestedTableColumn
        }
      }
    }
    metadatalineageapiserverGetFrequentlyJoinedTablesWithoutColumns: metadatalineageapiserverGetFrequentlyJoinedTables(
      input: { tableName: $tableName, limitSize: $longStringLimitSize, includeColumns: false }
    ) @skip(if: $includeColumns) {
      frequentlyJoinedTables {
        catalogName
        schemaName
        tableName
        joinKeys {
          joinedTableColumn
          requestedTableColumn
        }
      }
    }
    metadatalineageapiserverGetPopularEntities(
      input: { scope: "TableName", tableName: $tableName, limitSize: $intLimitSize }
    ) {
      notebooks {
        workspaceId
        notebookId
        lineageTimestamp
      }
      dashboards {
        workspaceId
        dashboardId
        dashboardType
        internalName
        lineageTimestamp
      }
      queries {
        workspaceId
        queryId
        lineageTimestamp
      }
      jobs {
        workspaceId
        jobId
        lineageTimestamp
      }
      pipelines {
        pipelineId
        updateId
        lineageTimestamp
        lineageId
      }
      alerts {
        workspaceId
        alertId
        lineageTimestamp
      }
      genieSpaces {
        workspaceId
        genieSpaceId
        lineageTimestamp
      }
    }
    metadatalineageapiserverGetTableUserLineage(input: { tableName: $tableName, limitSize: $longLimitSize })
      @skip(if: $skipTopUserInsights) {
      userInfoList {
        userId
        userFrequency
        userName
        userEmail
      }
    }
    metadatalineageapiserverGetFrequentQueryByTable(input: { sourceTableName: $tableName, limitSize: $longLimitSize }) {
      querySnapshotList {
        entitySnapshotId
        entityId
        queryFrequency
      }
    }
  }
`;function l({fullTableName:e,limitSize:a,skipTopUserInsights:t=!1},r){return(0,n.IT)(o,{...r,variables:{tableName:e,longLimitSize:a,longStringLimitSize:a.toString(),intLimitSize:a,includeColumns:i(),skipTopUserInsights:t},skip:!e||r?.skip,errorPolicy:"all"})}let u=(0,s.J1)`
  query getTableInsightsQueryGraph($tableName: String) @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverGetTablePopularityByDate(input: { tableName: $tableName }) {
      tablePopularityByDateList {
        date
        queryCount
      }
    }
  }
`;function m({fullTableName:e},a){return(0,n.IT)(u,{variables:{tableName:e},...a,skip:!e||a?.skip})}},545165:(e,a,t)=>{t.d(a,{A:()=>u});var n=t(692738),r=t(935963),s=t(267647),i=t(141078),o=t(665574),l=t(279402);let u=()=>{let e=(0,r.f)(),a=(0,i.mK)(),{catalog:t,schema:u,table:m}=(0,l.useDataExplorerContext)();return(0,n.useMemo)(()=>({agent:{name:"getTableInsightsAgent",instructions:()=>"You are the Databricks AI Assistant. The Databricks AI Assistant determines the tool most related to the user's question and responds according to the instructions;Match any query asking about insights or specific types of insights to the agent and pass the query into the userMessage parameter.For the insightTypes parameter, determine if the search query asks for 'frequentUsers', 'frequentDashboards', 'frequentNotebooks', 'frequentlyJoinedTables', or 'frequentQueries',or any combination of the above. If the query does not specify or if the query is empty, return an comma seperated list of all of them, otherwise return an comma seperated list of at least one upto all of themPhrases like 'frequent users', 'show frequent users', 'get frequent users', etc. should be considered as 'frequentUsers' for instance,Phrases like 'frequent dashboards', 'show frequent dashboards', 'get frequent dashboards', etc. should be considered as 'frequentDashboards' for instance,Phrases like 'frequent notebooks', 'show frequent notebooks', 'get frequent notebooks', etc. should be considered as 'frequentNotebooks' for instance,Phrases like 'frequently joined tables', 'show frequently joined tables', 'get frequently joined tables', etc. should be considered as 'frequentlyJoinedTables' for instance,Phrases like 'frequent queries', 'show frequent queries', 'get frequent queries', etc. should be considered as 'frequentQueries' for instance,frequentUsers represents information about users who frequently access the table, and how often they query it.frequentDashboards represents information about dashboards that use the table.frequentNotebooks represents information about notebooks that involve the table.frequentlyJoinedTables represents information about tables that are frequently joined with the table.frequentQueries represents information about SQL queries that are run on the table.For example, a query like 'i want users who frequently query this table and the most frequent queries on itwould return the entire query in the userMessage parameter, and 'frequentUsers,frequentQueries' in the insightTypes parameter.A simple query like 'i want table insights' would return the entire query in the userMessage parameter, and 'frequentUsers,frequentDashboards,frequentNotebooks,frequentlyJoinedTables,frequentQueries' in the insightTypes parameter.Remember that the response for insightTypes must solely and exclusively be an string type comma seperated list with no spaces of AT LEAST one upto all of 'frequentUsers', 'frequentDashboards', 'frequentNotebooks', 'frequentlyJoinedTables', 'frequentQueries'.No matter what, always match table insights related questions to the API, and NEVER ask for more information or print out the user input.",makeContext:(0,s.x)({makeContext:()=>Promise.resolve({prompt:""}),agentName:"getTableInsightsAgent"}),userMessageMatchesAgent:e=>e.startsWith("/getTableInsights"),extractHistory:e=>e,model:e,getTools:()=>[o.U]},tools:[(0,o.K)(a,t??"",u??"",m??"")]}),[e,a,t,u,m])}},566825:(e,a,t)=>{t.d(a,{Ay:()=>T,Ns:()=>b,ZC:()=>y,r:()=>f});var n=t(987962),r=t.n(n),s=t(623576),i=t.n(s),o=t(189219),l=t.n(o),u=t(923305),m=t(651139),p=t(949313),d=t(670943),c=t(924636),g=t(984741),h=t(885364);function b(e){return r()(e,"job.id")?(0,p.Ec)(e.job.id,1e3):e}let f=["get-data-sources"],y=(0,g.to)("sql/images/db-logos"),T={query:()=>(0,d.Ym)()?m.pY.get(c.bI).then(e=>e?.data_sources||[]):m.pY.get((0,u.Hi)("api/data_sources")),get:({id:e})=>m.pY.get((0,u.Hi)(`api/data_sources/${e}`)),types:()=>m.pY.get((0,u.Hi)("api/data_sources/types")),create:e=>m.pY.post((0,u.Hi)("api/data_sources"),e),save:e=>m.pY.post((0,u.Hi)(`api/data_sources/${e.id}`),e),test:e=>m.pY.post((0,u.Hi)(`api/data_sources/${e.id}/test`)),delete:({id:e})=>m.pY.delete((0,u.Hi)(`api/data_sources/${e}`)),fetchSchema:(e,a=!1)=>{let t={};return a&&(t.refresh=!0),m.pY.get((0,u.Hi)(`api/data_sources/${e.id}/schema`),{params:t}).then(e=>{if(r()(e,"job"))return(0,p.Ec)(e.job.id).catch(a=>1===a.code?[]:Promise.reject(Error(e.job.error)));return r()(e,"schema")?e.schema:Promise.reject()}).then(e=>i()(e,e=>{var a;return{...e,columns:(a=e.columns,i()(a,e=>l()(e)?e:{name:e})),type:e.type}}))},fetchColumns:(e,a,t)=>m.pY.get((0,u.Hi)(`api/data_sources/${e}/${a}/columns/${t}`)).then(b).then((0,h.g)("DataSource.fetchColumns"))}},572382:(e,a,t)=>{t.d(a,{CU:()=>o,U1:()=>l,iC:()=>i,kc:()=>r,sT:()=>s});var n=t(32121);function r(e){return e?.edges.map(e=>e.node)}function s({networkStatus:e}){return e===n.pT.fetchMore}function i({networkStatus:e}){return e===n.pT.refetch}function o({networkStatus:e}){return e===n.pT.poll}function l({__typename:e,...a}){return a}},655290:(e,a,t)=>{t.d(a,{j:()=>u});var n=t(692738),r=t(935963),s=t(267647),i=t(141078),o=t(159517),l=t(279402);let u=()=>{let e=(0,r.f)(),a=(0,i.mK)(),{catalog:t,schema:u,table:m}=(0,l.useDataExplorerContext)();return(0,n.useMemo)(()=>({agent:{name:"getTableLineagesAgent",instructions:()=>"You are the Databricks AI Assistant. The Databricks AI Assistant determines the tool most related to the user's question and responds according to the instructions;Match ALL queries asking about table lineages to get lineages for a table.Pass the query into the userMessage parameter, the direction of the lineage search into the direction parameter, and the starttimestamp, if the query indicates one, as a string into the startTimestamp parameter.For the direction parameter, determine if the search query asks for upstream lineages/downstream lineages, or both.If the query indicates that they do not want 'upstream' lineages, the response should be 'downstream', and if the query indicates that they do not want 'downstream' lineages, the response should be 'upstream'.Phrases like 'no upstream', 'do not show upstream', 'not upstream', etc. should be considered as 'downstream'for instance, and vice versa where replacing 'upstream' with 'downstream' yields a response of 'upstream'.Phrases like 'upstream lineages', 'only upstream', 'show upstream', etc. should be considered as 'upstream'for instance, and vice versa where replacing 'upstream' with 'downstream' yields a response of 'downstream'.Direction must solely and exclusively be one of enums 'upstream', 'downstream', or 'both'. Use 'both' if nothing relevant is specified, or if the query is empty.For the startTimestamp parameter, if the query indicates a timestamp to start querying lineages from, pass the timestamp in as a string.For example, if the query is 'lineages after July 4th', pass 'yyyy-07-04T00:00:00Z' into startTimestamp.Regardless of how much information in the date is provided, the startTimestamp in the case of a date MUST ALWAYS be in the format of 'yyyy-MM-ddTHH:mm:ssZ'with as much information as possible filled in. However, always assume time is 00:00:00 unless one is specified. No other startTimestamp values are acceptable besides the emptystring for no dates. DO NOT assume a year, month, or date if none are provided, fill in yyyy, MM, and dd respectively.If the query does not specify a timestamp in relation to receiving table lineages starting from that time, pass the empty string '' into startTimestamp.Overall, for example, a query like 'some upstreams from the 17th', pass direction as 'upstream' and startTimestamp as 'yyyy-MM-17T00:00:00Z'.A query like 'some upstreams' should have direction as 'upstream' and startTimestamp as ''.No matter what, never print out the query in the response, only the results, and even if userMessage is blank, always match to the API, and never ask for more information.This means that for 'i want table lineages', the userMessage parameter should be an 'i want table lineages', the direction parameter should be 'both', and startTimestamp is an empty string.",makeContext:(0,s.x)({makeContext:()=>Promise.resolve({prompt:""}),agentName:"getTableLineagesAgent"}),userMessageMatchesAgent:e=>e.startsWith("/getTableLineages"),extractHistory:e=>e,model:e,getTools:()=>[o.x]},tools:[(0,o.n)(a,t??"",u??"",m??"")]}),[e,a,t,u,m])}},662874:(e,a,t)=>{t.d(a,{DK:()=>m,Go:()=>u,WL:()=>o,t2:()=>l});var n=t(610435),r=t(692738),s=t(745444),i=t(962179);let o=r.createContext(()=>void 0);function l({children:e}){let{lakehouseMap:a}=(0,s.j)(),t=(0,r.useCallback)(e=>a[e],[a]);return(0,n.Y)(o.Provider,{value:t,children:e})}function u(e){let a=(0,r.useContext)(o);return(0,r.useMemo)(()=>e.map(e=>{if(!(0,i.PG)(e))return e;let t=a(e.endpoint_id??"");return{...e,lakehouse:t}}),[e,a])}function m(e){let a=(0,r.useContext)(o);return(0,r.useMemo)(()=>{if(e){let t=a(e.endpoint_id??"");return{...e,lakehouse:t}}},[e,a])}},665574:(e,a,t)=>{t.d(a,{K:()=>d,U:()=>p});var n=t(200356),r=t(366898),s=t(178777),i=t(167173),o=t(362366);function l(e,a,t,n,r,s,i){try{var o=e[s](i),l=o.value}catch(e){t(e);return}o.done?a(l):Promise.resolve(l).then(n,r)}function u(e){return function(){var a=this,t=arguments;return new Promise(function(n,r){var s=e.apply(a,t);function i(e){l(s,n,r,i,o,"next",e)}function o(e){l(s,n,r,i,o,"throw",e)}i(void 0)})}}let m={type:"function",function:{description:"Only call this tool for questions asking about insights, or SPECIFIC QUESTIONS related to any or all of the following available insights: users, dashboards, notebooks, joined tables, or queries.",parameters:{type:"object",properties:{userMessage:{type:"string",description:"User input message, place the entire query here UNMODIFIED."},insightTypes:{type:"string",description:"Determine if the search query asks for 'frequentUsers', 'frequentDashboards', 'frequentNotebooks', 'frequentlyJoinedTables', or 'frequentQueries',or any combination of the above. If the query does not specify any related information, return an comma seperated list of all of them, otherwise return an comma seperated list of at least one upto all of themPhrases like 'frequent users', 'show frequent users', 'get frequent users', etc. should be considered towards 'frequentUsers' for instance,Phrases like 'frequent dashboards', 'show frequent dashboards', 'get frequent dashboards', etc. should be considered towards 'frequentDashboards' for instance,Phrases like 'frequent notebooks', 'show frequent notebooks', 'get frequent notebooks', etc. should be considered towards 'frequentNotebooks' for instance,Phrases like 'frequently joined tables', 'show frequently joined tables', 'get frequently joined tables', etc. should be considered towards 'frequentlyJoinedTables' for instance,Phrases like 'frequent queries', 'show frequent queries', 'get frequent queries', etc. should be considered towards 'frequentQueries' for instance,frequentUsers represents information about users who frequently access the table, and how often they query it.frequentDashboards represents information about dashboards that use the table.frequentNotebooks represents information about notebooks that involve the table.frequentlyJoinedTables represents information about tables that are frequently joined with the table.frequentQueries represents information about SQL queries that are run on the table.For example, a query like 'i want users who frequently query this table and the most frequent queries on itwould return 'frequentUsers,frequentQueries' in the insightTypes parameter.A simple query like 'i want table insights' would return 'frequentUsers,frequentDashboards,frequentNotebooks,frequentlyJoinedTables,frequentQueries' in the insightTypes parameter.Remember that the response for insightTypes must solely and exclusively be an string type comma seperated list with no spaces of AT LEAST one upto all of 'frequentUsers', 'frequentDashboards', 'frequentNotebooks', 'frequentlyJoinedTables', 'frequentQueries'.The default value for insightTypes is 'frequentUsers,frequentDashboards,frequentNotebooks,frequentlyJoinedTables,frequentQueries' and NEVER pass an empty string."}},required:["userMessage","insightTypes"]}}},p={...m,function:{...m.function,name:"getTableInsights"}},d=(e,a,t,l)=>{let m=(m,p)=>u(function*(){var d,c,g;let h=(0,o.N)(),b=m.split(" "),f=`${a}.${t}.${l}`;for(let e in b)if(b[e].startsWith("table:")){f=b[e].substring(6);break}let{data:y}=yield e.query({query:r.AB,variables:{tableName:f,longLimitSize:p,longStringLimitSize:p.toString(),intLimitSize:p,includeColumns:(0,r.cs)(),skipTopUserInsights:h}}),T=h?[]:y.metadatalineageapiserverGetTableUserLineage?.userInfoList??[],I=y.metadatalineageapiserverGetPopularEntities?.dashboards??[],{data:v}=yield(d=(I??[]).map(e=>({dashboardId:e.dashboardId})),u(function*(){return{data:(yield Promise.all(d.map(({dashboardId:e})=>u(function*(){try{let a={__typename:"MetadatalineageapiserverEntityInfoPaginated",dashboardInfo:{dashboardId:e,dashboardType:null,internalName:null,workspaceId:"",lineageTimestamp:null,__typename:"MetadatalineageapiserverDashboardInfo"},lineageTimestamp:null,direction:n.W73.DOWNSTREAM,jobInfo:null,notebookInfo:null,pipelineInfo:null,queryInfo:null,servingEndpointInfo:null,genieSpaceInfo:null,alertInfo:null};return{data:yield i.Oy.getDashboardInfo(a)}}catch(e){}})()))).map(e=>{let a=e?.data;if(!a)return null;return a}).filter(s.hq)}})()),q=y.metadatalineageapiserverGetPopularEntities?.notebooks??[],{data:k}=yield(c=(q??[]).map(e=>({notebookId:e.notebookId})),u(function*(){return{data:(yield Promise.all(c.map(({notebookId:e})=>u(function*(){try{let a=yield(0,s.oG)(e);return{notebookId:e,data:a}}catch(e){}})()))).map(e=>{let a=e?.data;if(!a)return null;return a}).filter(s.hq)}})()),L=(0,r.cs)()?y.metadatalineageapiserverGetFrequentlyJoinedTablesWithColumns?.frequentlyJoinedTables??[]:y.metadatalineageapiserverGetFrequentlyJoinedTablesWithoutColumns?.frequentlyJoinedTables??[],S=y.metadatalineageapiserverGetFrequentQueryByTable?.querySnapshotList??[],{data:$}=yield(g=S.map(e=>({queryId:e.entityId})),u(function*(){return{data:(yield Promise.all(g.map(({queryId:e})=>u(function*(){try{let a=yield(0,s.LJ)(e);return{queryId:e,data:a}}catch(e){}})()))).map(e=>{let a=e?.data;if(!a)return null;return a}).filter(s.hq)}})());return{frequentUsers:T,frequentDashboards:v,frequentNotebooks:k,frequentlyJoinedTables:L,frequentQueries:$,queriedTable:f.replace(/\./g,"/")}})();return{name:"getTableInsights",label:"Get Table Insights",run:e=>u(function*(){if((!a||!t||!l)&&!e.includes("table:"))return{toolResponses:"",shortcutLLMResponse:"Please specify a object, or visit a valid table page and try again."};try{let a=JSON.parse(e).userMessage,t=JSON.parse(e).insightTypes;""===t&&(t="frequentUsers,frequentDashboards,frequentNotebooks,frequentlyJoinedTables,frequentQueries");let{frequentUsers:n,frequentDashboards:r,frequentNotebooks:s,frequentlyJoinedTables:i,frequentQueries:o,queriedTable:l}=yield m(a,5);return{shortcutLLMResponse:"",toolResponses:JSON.stringify({frequentUsers:n,frequentDashboards:r,frequentNotebooks:s,frequentlyJoinedTables:i,frequentQueries:o,queriedTable:l,userDesiredInsights:t.split(",")})}}catch(e){return Promise.resolve(`{ type: 'error', message: '${e instanceof Error?e.message:"unknown error"}' }`)}})()}}},733052:(e,a,t)=>{t.d(a,{A:()=>s});var n=t(610435);t(692738);var r=t(802582);function s({primary:e=!1,srSilent:a=!1,children:t,placement:i,title:o,dataTestId:l,arrowPointAtCenter:u,...m}){return(0,n.Y)(r.p,{silenceScreenReader:a,useAsLabel:e,placement:i,title:o,dataTestId:l,arrowPointAtCenter:u,...m,children:t})}},745444:(e,a,t)=>{t.d(a,{j:()=>m});var n=t(298280),r=t.n(n),s=t(692738),i=t(919505),o=t(290766),l=t(572382),u=t(441535);function m({enableLiveUpdates:e=!0,fetchPolicy:a="cache-and-network",useMinimalQuery:t=!1,isEnabled:n=!0}={}){let p=(0,u.W)("databricks.fe.redash.listPollingInterval",5e3),[d,c]=(0,s.useState)(()=>(0,u.W)("databricks.fe.redash.enableWarehouseEventSubscription",!1)),g=e&&d&&!t,{data:h,loading:b,refetch:f}=(0,o.T)({pollInterval:e&&!g?p:0,fetchPolicy:a,nextFetchPolicy:g?"cache-first":void 0,skip:!n},t);return(0,i.A)({skip:!g||!n,refetchLakehouseStates:f,setEnableSubscription:c}),{loaded:!b,lakehouseMap:(0,s.useMemo)(()=>r()((0,l.kc)(h?.lakehouses),e=>e?.id),[h?.lakehouses])}}},840924:(e,a,t)=>{t.d(a,{v:()=>f});var n=t(483588),r=t(441535),s=t(141078);let i=(0,s.J1)`
  fragment LineageSecurableRelationshipInfoFragment on MetadatalineageapiserverLineageInfo {
    tableInfo {
      name
      schemaName
      catalogName
      hasPermission
      tableType
      lineageTimestamp
    }
    modelInfo {
      modelName
      version
      lineageTimestamp
      mlflowModelId
    }
    functionInfo {
      functionName
      lineageTimestamp
    }
    functionInfos {
      functionId
      functionName
      lineageTimestamp
    }
    fileInfo {
      path
      hasPermission
      storageLocation
      securableName
      securableType
      lineageTimestamp
    }
    pipelineInfos {
      pipelineId
      updateId
      workspaceId
      lineageTimestamp
    }
    jobInfos {
      jobId
      workspaceId
      lineageTimestamp
    }
    notebookInfos {
      notebookId
      workspaceId
      lineageTimestamp
    }
    dashboardInfos {
      dashboardId
      dashboardType
      internalName
      workspaceId
      lineageTimestamp
    }
    dashboardV3Infos {
      dashboardId
      dashboardType
      internalName
      workspaceId
      lineageTimestamp
    }
    queryInfos {
      queryId
      workspaceId
      lineageTimestamp
    }
    servingEndpointInfos {
      servingEndpointId
      servedEntityId
      workspaceId
      lineageTimestamp
    }
    alertInfos {
      alertId
      workspaceId
      lineageTimestamp
    }
    genieSpaceInfos {
      genieSpaceId
      workspaceId
      lineageTimestamp
    }
    lineageTimestamp
  }
`,o=(0,s.J1)`
  fragment LineageEntityRelationshipInfoFragment on MetadatalineageapiserverEntityInfoPaginated {
    dashboardInfo {
      dashboardId
      dashboardType
      internalName
      workspaceId
      lineageTimestamp
    }
    jobInfo {
      jobId
      workspaceId
      lineageTimestamp
    }
    notebookInfo {
      notebookId
      workspaceId
      lineageTimestamp
    }
    queryInfo {
      queryId
      workspaceId
      lineageTimestamp
    }
    pipelineInfo {
      pipelineId
      updateId
      lineageId
      workspaceId
      lineageTimestamp
    }
    servingEndpointInfo {
      servingEndpointId
      servedEntityId
      workspaceId
      lineageTimestamp
    }
    genieSpaceInfo {
      genieSpaceId
      workspaceId
      lineageTimestamp
    }
    alertInfo {
      alertId
      workspaceId
      lineageTimestamp
    }
  }
`,l=(0,s.J1)`
  fragment ExternalLineageRelationshipObjectFragment on MetadatalineageapiserverExternalLineageRelationshipObject {
    externalMetadata {
      name
    }
    modelVersion {
      name
      version
    }
    path {
      url
    }
    table {
      name
    }
  }
`,u=(0,s.J1)`
  fragment ExternalLineageRelationshipInfoFragment on MetadatalineageapiserverExternalLineageInfo {
    tableInfo {
      name
      schemaName
      catalogName
      eventTime
    }
    modelInfo {
      modelName
      version
      eventTime
    }
    fileInfo {
      path
      storageLocation
      securableName
      securableType
      eventTime
    }
    externalLineageInfo {
      id
      query
      source {
        ...ExternalLineageRelationshipObjectFragment
      }
      target {
        ...ExternalLineageRelationshipObjectFragment
      }
      properties {
        key
        value
      }
      columns {
        source
        target
      }
    }
    externalMetadataInfo {
      entityType
      systemType
      eventTime
      name
    }
  }
  ${l}
`,m=(0,s.J1)`
  query ListSecurableLineagesBySecurable(
    $securableType: MetadatalineageapiserverSecurableType!
    $securableFullName: String!
    $subsecurableId: String
    $lineageDirection: MetadatalineageapiserverLineageDirection!
    $startTimestamp: String
    $pageSize: Int
    $pageToken: String
    $securableResponseFilter: MetadatalineageapiserverSecurableType
  ) @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverListSecurableLineagesBySecurable(
      input: {
        securableType: $securableType
        securableFullName: $securableFullName
        subsecurableId: $subsecurableId
        lineageDirection: $lineageDirection
        startTimestamp: $startTimestamp
        pageSize: $pageSize
        pageToken: $pageToken
        securableResponseFilter: $securableResponseFilter
      }
    ) {
      lineages {
        ...LineageSecurableRelationshipInfoFragment
      }
      nextPageToken
      areEntitiesTruncated
    }
  }
  ${i}
`,p=(0,s.J1)`
  query ListEntityLineagesBySecurable(
    $securableType: MetadatalineageapiserverSecurableType!
    $securableFullName: String!
    $subsecurableId: String
    $lineageDirection: MetadatalineageapiserverLineageDirection!
    $startTimestamp: String
    $pageSize: Int
    $pageToken: String
    $entityResponseFilter: MetadatalineageapiserverEntityType
  ) @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverListEntityLineagesBySecurable(
      input: {
        securableType: $securableType
        securableFullName: $securableFullName
        subsecurableId: $subsecurableId
        lineageDirection: $lineageDirection
        startTimestamp: $startTimestamp
        pageSize: $pageSize
        pageToken: $pageToken
        entityResponseFilter: $entityResponseFilter
      }
    ) {
      lineages {
        ...LineageEntityRelationshipInfoFragment
      }
      nextPageToken
    }
  }
  ${o}
`,d=(0,s.J1)`
  query ListExternalLineagesBySecurable(
    $lineageDirection: MetadatalineageapiserverDirectionLineageDirection!
    $pageSize: Int
    $pageToken: String
    $securableResponseFilter: MetadatalineageapiserverListExternalLineageRelationshipsRequestExternalLineageType
    $objectInfo: MetadatalineageapiserverExternalLineageRelationshipObjectInput!
  ) @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverListExternalLineageRelationships(
      input: {
        objectInfo: $objectInfo
        lineageDirection: $lineageDirection
        pageToken: $pageToken
        pageSize: $pageSize
        securableResponseFilter: $securableResponseFilter
      }
    ) {
      externalLineageRelationships {
        ...ExternalLineageRelationshipInfoFragment
      }
      apiError {
        code
        message
      }
      nextPageToken
    }
  }
  ${u}
`,c=(0,s.J1)`
  query ListColumnLineagesByColumn(
    $tableName: String!
    $acceptedTables: [String!]!
    $lineageDirection: MetadatalineageapiserverLineageDirection!
    $columnName: String!
    $startTimestamp: String
  ) @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverListColumnLineages(
      input: {
        acceptedTables: $acceptedTables
        lineageDirection: $lineageDirection
        tableName: $tableName
        startTimestamp: $startTimestamp
        columnName: $columnName
      }
    ) {
      lineages {
        catalogName
        schemaName
        tableName
        tableType
        workspaceId
        path
        name
        lineageTimestamp
        hasPermission
      }
    }
  }
`;function g(e,a,t,n,r,s,i){try{var o=e[s](i),l=o.value}catch(e){t(e);return}o.done?a(l):Promise.resolve(l).then(n,r)}function h(e,a,t,n,r,s,i){try{var o=e[s](i),l=o.value}catch(e){t(e);return}o.done?a(l):Promise.resolve(l).then(n,r)}function b(e){var a;return(a=function*({query:e,client:a,extractResponse:t,extractToken:n,extractContinueFetching:s,extractMetadata:i,variables:o,maxResults:l,maxPages:u}){let m=[],p=o.pageToken??null,d=0,c=null,g=(0,r.W)("databricks.fe.data.defaultLineagePaginationSize",100),h=o.pageSize??g,b=l??1e3,f=u&&u>0&&Number.isFinite(u)?u:1/0,y=!0,T=0;do try{let{data:r}=yield a.query({query:e,variables:{...o,pageSize:h,pageToken:p},fetchPolicy:"network-only"});if(!r)break;let l=t(r);l&&m.push(...l),p=n(r),d=m.length,y=!s||s(r),c=i?i(c,r):c,T++}catch(e){throw e}while(p&&d<b&&T<f&&y);return{response:m,pageToken:p,metadata:c}},function(){var e=this,t=arguments;return new Promise(function(n,r){var s=a.apply(e,t);function i(e){h(s,n,r,i,o,"next",e)}function o(e){h(s,n,r,i,o,"throw",e)}i(void 0)})}).apply(this,arguments)}let f={listSecurableBySecurable:(e,a,t)=>{let s=Math.max((0,r.W)("databricks.fe.discovery.pagesToFetchAllAssets",2),1),i=a.securableResponseFilter===n.osA.ALL_ASSETS_FLATTENED?s:void 0;return b({client:e,query:m,variables:a,extractResponse:e=>e.metadatalineageapiserverListSecurableLineagesBySecurable?.lineages??[],extractToken:e=>e.metadatalineageapiserverListSecurableLineagesBySecurable?.nextPageToken??null,maxResults:i?1/0:t,maxPages:i})},listEntityBySecurable:(e,a,t)=>b({client:e,query:p,variables:a,extractResponse:e=>e.metadatalineageapiserverListEntityLineagesBySecurable?.lineages??[],extractToken:e=>e.metadatalineageapiserverListEntityLineagesBySecurable?.nextPageToken??null,maxResults:t}),listColumnLineage:(e,a)=>(function(e){var a;return(a=function*({query:e,client:a,variables:t,extractResponse:n}){try{let{data:r}=yield a.query({query:e,variables:t,fetchPolicy:"network-only"});return n(r)}catch(e){throw e}},function(){var e=this,t=arguments;return new Promise(function(n,r){var s=a.apply(e,t);function i(e){g(s,n,r,i,o,"next",e)}function o(e){g(s,n,r,i,o,"throw",e)}i(void 0)})}).apply(this,arguments)})({client:e,query:c,variables:a,extractResponse:e=>e?.metadatalineageapiserverListColumnLineages?.lineages??[]}),listExternalLineage:(e,a,t)=>b({client:e,query:d,variables:a,extractResponse:e=>e?.metadatalineageapiserverListExternalLineageRelationships?.externalLineageRelationships??[],extractToken:e=>e.metadatalineageapiserverListExternalLineageRelationships?.nextPageToken??null,maxResults:t})}},885364:(e,a,t)=>{t.d(a,{g:()=>i,u:()=>s});var n=t(987962),r=t.n(n);class s extends Error{__initiatorStack;errorCode;constructor(e,a,...t){super(a,...t),Error.captureStackTrace&&Error.captureStackTrace(this,s),this.name="SchemaLoadError",this.errorCode=e}isWaitingForEndpoint(){return 3===this.errorCode}}function i(e){return a=>{if(r()(a,"error")){let t=new s(a.error.code,`${a.error.message} (${e})`);return t.__initiatorStack=Error().stack,Promise.reject(t)}return a}}},919505:(e,a,t)=>{t.d(a,{A:()=>h});var n=t(514503),r=t.n(n),s=t(692738),i=t(200356),o=t(65061),l=t(960718),u=t(441535),m=t(141078),p=t(886100),d=t(22191),c=t(278983);let g=(0,m.J1)`
  subscription WarehouseEventSubscription($ignoreScaledEvent: Boolean) @component(name: "DBSQLX.WareHouseUI") {
    warehouseEvent(ignoreScaledEvent: $ignoreScaledEvent) {
      warehouseId
      eventName
      eventTimeMs
    }
  }
`;function h({skip:e,refetchLakehouseStates:a,setEnableSubscription:t}){let n=(0,s.useMemo)(()=>{let e=(0,u.W)("databricks.fe.redash.warehouses.event.debounceWait",1e3)+Math.floor(500*Math.random());return r()(a,e)},[a]),m=(0,s.useRef)(!1);return(0,o.sw)(g,{variables:{ignoreScaledEvent:!0},shouldResubscribe:!0,skip:e,onSubscriptionData({subscriptionData:e,client:r}){if(e?.data?.warehouseEvent){let{warehouseId:t}=e.data.warehouseEvent;"0"!==t||m.current?"0"===t?a():function(e,a,t){let{warehouseId:n,eventName:r}=a;(r||"undefined")in i.tXm&&e.cache.updateFragment({fragment:l.xz,id:e.cache.identify({__typename:"Lakehouse",id:n})},e=>{if(e)return{...e,state:r,health:null}})||t()}(r,e.data.warehouseEvent,n):m.current=!0}else p.iT.sev2(d.Es.RedashCore,"warehouseEvent.subscription.onSubscriptionData.unexpectedData",{subscriptionData:e}),t(!1)},onError(e){(function(e){if(e?.[0]){let a=e[0],t=a.code??"unknown",n=a instanceof CloseEvent?"CloseEvent":a.type??"unknown";(0,c.y)("clientsideEvent",{eventName:"warehouse_subscription_error",eventType:`warehouse_subscription_error_${n}`,errorCode:t})}else p.iT.sev2(d.Es.RedashCore,"warehouseEvent.subscription.onUnexpectedError",{rawError:e})})(e),t(!1)}})}},960718:(e,a,t)=>{t.d(a,{MS:()=>p,SN:()=>d,vP:()=>m,xz:()=>c});var n=t(141078);let r=(0,n.J1)`
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
  ${r}
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
`,l=(0,n.J1)`
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
`,u=(0,n.J1)`
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
`,m=(0,n.J1)`
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
`,p=(0,n.J1)`
  fragment LakehouseListFragment on Lakehouse {
    ...LakehouseBasicAttributesFragment
    permissions @include(if: $withPermissions)
  }
  ${l}
`,d=(0,n.J1)`
  fragment LakehouseForMutationFragment on Lakehouse {
    ...LakehouseBasicAttributesFragment
    ...LakehouseAdvancedAttributesFragment
    permissions @include(if: $withPermissions)
  }
  ${l}
  ${u}
`,c=(0,n.J1)`
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
`},962179:(e,a,t)=>{function n(e){return"databricks_internal"===e.type}function r(e){return"databricks_cluster"===e.type||"cluster"===e.type}function s(e){return"statements"in e}t.d(a,{PG:()=>n,n9:()=>s,y0:()=>r})}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/83147.4dec152d14.chunk.js.map