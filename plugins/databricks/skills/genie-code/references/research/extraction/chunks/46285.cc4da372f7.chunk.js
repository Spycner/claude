"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[46285],{39584:(e,t,a)=>{a.d(t,{X:()=>l});var n=a(692738),d=a(919459),i=a(580766);function l(e){let{data:t,loading:a,error:l,refetch:o,startPolling:r,stopPolling:s}=(0,d.G)(e),u=(0,n.useMemo)(()=>(t?.cdp_syncRuns?.syncRuns??[]).filter(e=>e.syncRunId&&e.syncId&&e.state).map(e=>({syncRunId:e.syncRunId,syncId:e.syncId,state:e.state,startTimeMillis:e.startTimeMillis??null,endTimeMillis:e.endTimeMillis??null,errorMessage:e.errorMessage??null,successCount:e.successCount??null,failureCount:e.failureCount??null,totalSyncCount:e.totalSyncCount??null,jobRunId:e.jobRunId??null,stateTransitions:e.stateTransitions?.flatMap(e=>e.state&&e.timestampMillis?[{state:e.state,timestampMillis:e.timestampMillis}]:[]),triggerSource:e.triggerSource??void 0,runLogPath:e.runLogPath??void 0,metadata:e.metadata?{version:e.metadata.version?Number(e.metadata.version):null,createTimeMillis:e.metadata.createTimeMillis??null,updateTimeMillis:e.metadata.updateTimeMillis??null,createdBy:e.metadata.createdBy?{userId:e.metadata.createdBy.userId??null}:null,updatedBy:e.metadata.updatedBy?{userId:e.metadata.updatedBy.userId??null}:null}:null})),[t]);return(0,n.useEffect)(()=>{if(e?.pollInterval===void 0||e?.syncId===void 0)return;u.some(t=>t.syncId===e.syncId&&i.Tw.has(t.state))?r(e.pollInterval):s()},[u,e?.pollInterval,e?.syncId,r,s]),{syncRuns:u,loading:a,error:l,nextPageToken:t?.cdp_syncRuns?.nextPageToken,refetch:o}}},46285:(e,t,a)=>{a.d(t,{i:()=>m,x:()=>p});var n=a(692738),d=a(263550),i=a(418442),l=a(175698),o=a(675653),r=a(39584),s=a(135221),u=a(529868),c=a(993533);let p=1e3;function m(e){let{searchQuery:t,skip:a,pollInterval:m}=e??{},{dataModelId:I}=(0,s.$)(),{data:g,loading:y,error:M}=(0,i.N)({skip:a,pageSize:p,pollInterval:m}),{connectors:f,loading:T}=(0,o.m)(),{audiences:C,loading:v}=(0,l.b)(),{syncRuns:R,loading:b}=(0,r.X)(),{data:k,loading:S}=(0,d.q)(),N=(0,n.useMemo)(()=>new Map((k?.cdp_connectorRules?.connectorRules??[]).map(u.n).filter(e=>null!==e).map(e=>[e.id,e])),[k]),$=(0,n.useMemo)(()=>{let e=new Map;for(let t of R)e.has(t.syncId)||e.set(t.syncId,t);return e},[R]);return{syncs:(0,n.useMemo)(()=>{let e=(g?.cdp_syncs?.syncs??[]).filter(e=>e.syncId&&e.name&&(!I||e.dataModelId===I)).map(e=>({syncId:e.syncId,connectorId:e.connectorId,audienceId:e.audienceId,name:e.name,description:e.description??null,schedule:e.schedule?.cronString?{cronString:e.schedule.cronString,timeZone:e.schedule.timeZone??"UTC"}:null,latestRunId:e.latestRunId??null,state:e.state??c.z$0.STATE_UNSPECIFIED,dataModelId:e.dataModelId,assetName:e.assetName,subassetName:e.subassetName,metadata:e.metadata?{version:e.metadata.version?Number(e.metadata.version):null,createTimeMillis:e.metadata.createTimeMillis??null,updateTimeMillis:e.metadata.updateTimeMillis??null,createdBy:e.metadata.createdBy?{userId:e.metadata.createdBy.userId??null}:null,updatedBy:e.metadata.updatedBy?{userId:e.metadata.updatedBy.userId??null}:null}:void 0,latestRun:$.get(e.syncId)??null,useMatchBoosting:e.useMatchBoosting??!1,fieldMappings:(e.attributeMappings??[]).filter(e=>e.attributeId&&e.destinationFieldName).map(e=>({id:`${e.attributeId}:${e.destinationFieldName}`,attributeId:e.attributeId,destinationFieldName:e.destinationFieldName})),inputValues:Object.fromEntries((e.inputValues??[]).filter(e=>e.inputId).flatMap(e=>{let t=function(e){if(null!==e.stringValue&&void 0!==e.stringValue)return{type:"free-text",value:e.stringValue};if(null!==e.numberValue&&void 0!==e.numberValue)return{type:"number",value:e.numberValue};if(null!==e.boolValue&&void 0!==e.boolValue)return{type:"boolean",value:e.boolValue};if(null!==e.optionIdValue&&void 0!==e.optionIdValue)return{type:"select",value:e.optionIdValue};if(e.foreignKeyValue)return{type:"foreign-key",attributeId:e.foreignKeyValue?.attributeId??"",destinationFieldName:e.foreignKeyValue?.destinationFieldName??""}}(e);return t?[[e.inputId,t]]:[]})),sourceDefinitionPath:e.sourceDefinitionPath??void 0,syncedRecordsPath:e.syncedRecordsPath??void 0,destinationLink:e.destinationLink??void 0,connectorRuleId:e.connectorRuleId??void 0,connector:f.find(t=>t.id===e.connectorId)??null,audience:C.find(t=>t.id===e.audienceId)??null,connectorRule:e.connectorRuleId?N.get(e.connectorRuleId)??null:null}));if(!t)return e;let a=t.trim().toLowerCase();return e.filter(e=>e.name.toLowerCase().includes(a))},[g,t,I,f,C,$,N]),loading:y||T||v||b||S,error:M}}},175171:(e,t,a)=>{a.d(t,{h:()=>r});var n=a(692738),d=a(984741),i=a(141078),l=a(135221);let o=(0,i.J1)`
  query CdpDestinationConfigsQuery($cdpId: String!) @component(name: "BryantPark.Core") {
    cdp_destinationConfigs(cdpId: $cdpId) {
      destinationConfigs {
        name
        iconFilename
        displayName
        setupDocUrl
      }
    }
  }
`;function r(){let{data:e,loading:t,error:a}=function(){let{cdpId:e}=(0,l.$)(),t=!!e;return(0,i.IT)(o,{...void 0,variables:{cdpId:e??""},skip:!t||void 0})}();return{destinationConfigs:(0,n.useMemo)(()=>(e?.cdp_destinationConfigs?.destinationConfigs??[]).map(e=>{var t;return{name:e.name??"",iconSrc:e.iconFilename?(t=e.iconFilename,(0,d.to)(`cdp/destination-assets/${t}`)):"",displayName:e.displayName??"",setupDocUrl:e.setupDocUrl??""}}),[e]),loading:t,error:a}}},263550:(e,t,a)=>{a.d(t,{Z:()=>l,q:()=>o});var n=a(141078),d=a(612459),i=a(33080);let l=(0,n.J1)`
  query CdpConnectorRulesQuery($cdpId: String!, $dataModelId: String!) @component(name: "BryantPark.Core") {
    cdp_connectorRules(cdpId: $cdpId, dataModelId: $dataModelId) {
      connectorRules {
        id
        name
        filterMode
        audienceId
        dataModelId
        description
        metadata {
          createTimeMillis
          createdBy {
            userId
          }
        }
      }
    }
  }
`,o=e=>{let t=(0,d.r)();return(0,i.R)(l,{...e,skip:e?.skip||!t})}},418442:(e,t,a)=>{a.d(t,{N:()=>o,g:()=>l});var n=a(141078),d=a(546869),i=a(135221);let l=(0,n.J1)`
  query CdpSyncsQuery($cdpId: String!, $pageSize: Int, $pageToken: String) @component(name: "BryantPark.Core") {
    cdp_syncs(cdpId: $cdpId, pageSize: $pageSize, pageToken: $pageToken) {
      syncs {
        syncId
        connectorId
        audienceId
        name
        description
        schedule {
          cronString
          timeZone
        }
        latestRunId
        state
        dataModelId
        assetName
        subassetName
        useMatchBoosting
        attributeMappings {
          attributeId
          destinationFieldName
        }
        inputValues {
          inputId
          stringValue
          numberValue
          boolValue
          optionIdValue
          foreignKeyValue {
            attributeId
            destinationFieldName
          }
        }
        metadata {
          ...CdpResourceMetadataFragment
        }
        sourceDefinitionPath
        syncedRecordsPath
        destinationLink
        connectorRuleId @includeSafex(name: "databricks.cdp.sync.enableConnectorRules", defaultValue: false)
      }
      nextPageToken
    }
  }
  ${d.Cb}
`,o=e=>{let{cdpId:t}=(0,i.$)();return(0,n.IT)(l,{variables:{cdpId:t??"",pageSize:e?.pageSize,pageToken:e?.pageToken},skip:!t||e?.skip,pollInterval:e?.pollInterval})}},529868:(e,t,a)=>{a.d(t,{E:()=>d,n:()=>i});var n=a(993533);function d(e){switch(e){case n.e7.FILTER_MODE_INTERSECTION:return"FILTER_MODE_INTERSECTION";case n.e7.FILTER_MODE_EXCEPT:return"FILTER_MODE_EXCEPT";case n.e7.FILTER_MODE_UNSPECIFIED:case null:case void 0:return null}}function i(e){if(!e?.id||!e.name||!e.audienceId||!e.dataModelId)return null;let t=d(e.filterMode);if(!t)return null;return{id:e.id,name:e.name,filterMode:t,audienceId:e.audienceId,dataModelId:e.dataModelId,description:e.description??null,metadata:e.metadata??void 0}}},675653:(e,t,a)=>{a.d(t,{m:()=>l});var n=a(692738),d=a(903412),i=a(175171);function l(e){let{searchQuery:t}=e??{},{data:a,loading:l,error:o}=(0,d.b)({pageSize:e?.pageSize,pageToken:e?.pageToken,pollInterval:e?.pollInterval}),{destinationConfigs:r,loading:s}=(0,i.h)(),u=(0,n.useMemo)(()=>Object.fromEntries(r.map(e=>[e.name,e])),[r]),c=a?.cdp_connectors?.connectors??[],p=a?.cdp_connectors?.nextPageToken??null;return{connectors:c.filter(e=>e.connectorId&&e.name).map(e=>({id:e.connectorId,name:e.name,description:e.description??null,destinationName:e.destinationName??"",destinationIconSrc:u[e.destinationName??""]?.iconSrc??"",destinationDisplayName:u[e.destinationName??""]?.displayName??"",ucConnectionName:e.ucConnectionName,attachedConnectorRules:(e.attachedConnectorRules??[]).filter(e=>!!e.dataModelId&&!!e.connectorRuleId).map(e=>({dataModelId:e.dataModelId,connectorRuleId:e.connectorRuleId})),metadata:e.metadata?{version:e.metadata.version?Number(e.metadata.version):null,createTimeMillis:e.metadata.createTimeMillis??null,updateTimeMillis:e.metadata.updateTimeMillis??null,createdBy:e.metadata.createdBy?{userId:e.metadata.createdBy.userId??null}:null,updatedBy:e.metadata.updatedBy?{userId:e.metadata.updatedBy.userId??null}:null}:null})).filter(e=>!t||e.name.toLowerCase().includes(t.trim().toLowerCase())),loading:l||s,nextPageToken:p,error:o}}},903412:(e,t,a)=>{a.d(t,{a:()=>l,b:()=>o});var n=a(141078),d=a(546869),i=a(135221);let l=(0,n.J1)`
  query CdpConnectorsQuery($cdpId: String!, $pageSize: Int, $pageToken: String) @component(name: "BryantPark.Core") {
    cdp_connectors(cdpId: $cdpId, pageSize: $pageSize, pageToken: $pageToken) {
      connectors {
        connectorId
        name
        description
        ucConnectionName
        destinationName
        attachedConnectorRules @includeSafex(name: "databricks.cdp.sync.enableConnectorRules", defaultValue: false) {
          dataModelId
          connectorRuleId
        }
        metadata {
          ...CdpResourceMetadataFragment
        }
      }
      nextPageToken
    }
  }
  ${d.Cb}
`;function o(e){let{cdpId:t}=(0,i.$)(),a=!!t;return(0,n.IT)(l,{...e,variables:{cdpId:t??"",pageSize:e?.pageSize,pageToken:e?.pageToken},skip:!a||e?.skip})}},919459:(e,t,a)=>{a.d(t,{G:()=>o,M:()=>l});var n=a(141078),d=a(546869),i=a(135221);let l=(0,n.J1)`
  query CdpSyncRunsQuery($cdpId: String!, $pageSize: Int, $pageToken: String) @component(name: "BryantPark.Core") {
    cdp_syncRuns(cdpId: $cdpId, pageSize: $pageSize, pageToken: $pageToken) {
      syncRuns {
        syncRunId
        syncId
        state
        startTimeMillis
        endTimeMillis
        errorMessage
        successCount
        failureCount
        totalSyncCount
        jobRunId
        stateTransitions {
          state
          timestampMillis
        }
        triggerSource
        runLogPath
        metadata {
          ...CdpResourceMetadataFragment
        }
      }
      nextPageToken
    }
  }
  ${d.Cb}
`,o=e=>{let{cdpId:t}=(0,i.$)();return(0,n.IT)(l,{variables:{cdpId:t??"",pageSize:e?.pageSize,pageToken:e?.pageToken},skip:!t||e?.skip,pollInterval:e?.pollInterval})}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/46285.cc4da372f7.chunk.js.map