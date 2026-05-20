"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[23237],{222006:(e,t,r)=>{r.d(t,{Bc:()=>T});var i=r(660618),n=r(278983),a=r(388735),o=r(267647),s=r(169750),l=r(517546),u=r(141078),c=r(707076),d=r(483588);function h(e,t,r,i,n,a,o){try{var s=e[a](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(i,n)}let m=(0,u.J1)`
  query UnifiedNotebookSearchForAssistant(
    $query: SearchmidtierSearchUnifiedQueryInput
    $filters: SearchmidtierSearchUnifiedFiltersInput
    $pageSize: Int
    $sortOrder: SearchmidtierSearchUnifiedSortOrderInput
    $featureFlags: SearchmidtierSearchUnifiedFeatureFlagsInput
  ) @component(name: "Workspace.Assistant") {
    searchmidtierSearchUnifiedSearch(
      input: {
        query: $query
        filters: $filters
        pageSize: $pageSize
        sortOrder: $sortOrder
        featureFlags: $featureFlags
      }
    ) {
      apiError {
        message
        code
      }
      nextPageToken
      results {
        ...SearchResultNotebookCommandData
        userActivityInfo {
          assetType
          assetId
          isFavorite
        }
      }
    }
  }

  fragment SearchResultNotebookCommandData on SearchmidtierSearchUnifiedResult {
    id
    resultType
    name
    highlighting {
      codeFragments {
        content
        childId
        id
        language
      }
    }
  }
`;var g=r(441535),f=r(570512);function S(e,t){let r=[],i=0;for(let n of e){if(!n.commandHighlight)continue;let e=`Notebook name: ${n.name}
${(0,f.Ty)(n.commandHighlight)}
`;if(i+e.length>t){let a=t-i;r.push({...n,commandHighlight:e.slice(0,a)+"..."});break}r.push({...n,commandHighlight:e}),i+=e.length}return r}var p=r(259660);function y(e,t,r,i,n,a,o){try{var s=e[a](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(i,n)}function E(e){return function(){var t=this,r=arguments;return new Promise(function(i,n){var a=e.apply(t,r);function o(e){y(a,i,n,o,s,"next",e)}function s(e){y(a,i,n,o,s,"throw",e)}o(void 0)})}}let T=(0,o.N)(s.E.NOTEBOOK_CELLS,e=>E(function*(){return yield E(function*(){let{userId:t,apolloClient:r,getTablesInAllCodeBlocks:o,contextObject:s,agentName:u,citations:g,isVectorSearchEnabled:f,...S}=e,{currentCodeBlock:y,catalog:T,schema:A,notebookId:N}=s;if(!r||!o||!y)return{};T&&A||((0,n.y)("clientsideEvent",{eventName:"missing-catalog-or-schema",eventType:"assistant-error",source:`${e.agentName}-userNotebookCellsContext`}),(0,a.Km)({event_type:a.FS.ASSISTANT_ERROR,event_name:a.ih.MISSING_CATALOG_OR_SCHEMA,source:`${e.agentName}-userNotebookCellsContext`}));let b=yield(0,p.A3)({codeBlocks:[y],getTablesInAllCodeBlocks:o,activeCatalog:T??i.UQ,activeSchema:A??i.E2,defaultSchemaForCatalogs:i.E2,options:{},apolloClient:r,source:u??"",...S}),v=[N?.toString()??""],I=[];return yield Promise.all(b.slice(0,4).map(e=>E(function*(){var i,n;let a=`${e.catalog}.${e.schema}.${e.entity}`,{processedNotebookCellsResult:o}=yield(i={userId:t,query:a,limit:2,isVectorSearchEnabled:f},(n=function*(){if(!(0,c.Kt)())return{processedNotebookCellsResult:[],rawNotebookResult:[]};let{data:e}=yield r.query({query:m,variables:{query:{query:i.query,searchMode:i.searchMode?i.searchMode:d.YD3.HYBRID},filters:{resultTypes:[d.iId.NOTEBOOK],ownerIds:i.userId?[String(i.userId)]:[]},sortOrder:{criteria:d.noI.UPDATED_AT},pageSize:i.limit,featureFlags:i.isVectorSearchEnabled?{enableNotebookVectorSearch:!0,enableNotebookChunkVectorSearch:!0,includeChunkBodyInNotebookChunkVectorSearch:!0}:{}}}).catch(()=>({data:void 0})),t=e?.searchmidtierSearchUnifiedSearch?.results?.filter(e=>!!e.highlighting?.codeFragments?.[0]?.childId);return{processedNotebookCellsResult:t?.flatMap(e=>({type:e.resultType,name:e.name,id:e.id,commandId:e.highlighting?.codeFragments?.[0]?.childId,commandHighlight:e.highlighting?.codeFragments?.[0]?.content?.replaceAll("<dbtag1>","").replaceAll("</dbtag1>",""),notebookId:e.userActivityInfo?.assetId,language:e.highlighting?.codeFragments?.[0]?.language,citationUrl:`/editor/notebooks/${e.userActivityInfo?.assetId}#command/${e.highlighting?.codeFragments?.[0]?.childId}`}))??[],rawNotebookResult:e?.searchmidtierSearchUnifiedSearch?.results??[]}},function(){var e=this,t=arguments;return new Promise(function(r,i){var a=n.apply(e,t);function o(e){h(a,r,i,o,s,"next",e)}function s(e){h(a,r,i,o,s,"throw",e)}o(void 0)})})()),s=o.filter(e=>e.notebookId&&e.commandId&&e.commandHighlight&&!v.includes(e.notebookId));I=I.concat(s)})())),{userNotebookCells:I.map(e=>({...e,citationIndex:(0,l.fZ)({url:e.citationUrl,name:e.name??e.citationUrl},g)}))}})()})(),e=>{let{userNotebookCells:t}=e;return{notebookDocsNum:t?.length??0}},(e,t={isCompletion:!1})=>{let{userNotebookCells:r}=e;if(!r||0===r.length)return"";return((e,t=!1)=>{let r="",i=e.filter(e=>e.notebookId&&e.commandId&&e.commandHighlight);if(e.length)if((0,g.W)("databricks.editor.assistantContextNotebookCodeCitation",!1)&&!t){let e=S(i,3e3).map(e=>`PASSAGE_START:
SOURCE_START:
${e.citationUrl}
SOURCE_END
CONTENT_START:
${e.commandHighlight}
CONTENT_END
PASSAGE_END`).join("\n");r=`Notebook Search: Below are some notebook code passages that were retrieved from the existing code base. Some of the code fragments may be related to the user's question or error they face. If some of the information in the passages appears relevant to the user's question or error, please use that relevant information in your final response. It's possible that the information in the passages is incomplete; if you know of a good solution please provide it regardless of what is present in the passages. It's also possible the information is for a different language (e.g. SQL vs python) or different workflow (e.g. notebook vs CLI), so remember this to ensure your response is useful to the user.

The passages below are delimited using BEGIN_RELATED_PASSAGES and END_RELATED_PASSAGES. The beginning/end of each individual passage are delimited by \`PASSAGE_START:\` and \`PASSAGE_END\`. Inside, each passage has a source delimited by \`SOURCE_START:\` and \`SOURCE_END\` and a content by \`CONTENT_START:\` and \`CONTENT_END\`. Only use the content of the passage in your response.

BEGIN_RELATED_PASSAGES
${e}
END_RELATED_PASSAGES`}else r=(0,g.W)("databricks.fe.editor.enableCitationV2",!1)?`
- These are notebook code fragments user wrote: 
`+S(i,3e3).map(e=>(e.citationIndex?`{${e.citationIndex}} `:"")+e.commandHighlight).join("\n"):`
- These are notebook code fragments user wrote: 
`+S(i,3e3).map(e=>e.commandHighlight).join("\n");return r})(r,t?.isCompletion)})},446576:(e,t,r)=>{r.d(t,{m:()=>s});var i=r(141078),n=r(707076),a=r(483588);function o(e,t,r,i,n,a,o){try{var s=e[a](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(i,n)}let s=(e,t)=>{var r;return(r=function*(){if(!(0,n.Kt)())return[];let{data:r}=yield e.query({query:l,variables:{query:{query:t.query},filters:{resultTypes:[a.iId.QUERY],ownerIds:t.userId?[String(t.userId)]:[]},pageSize:t.limit,sortOrder:{criteria:a.noI.UPDATED_AT}}}).catch(()=>({data:void 0}));return r?.searchmidtierSearchUnifiedSearch?.results??[]},function(){var e=this,t=arguments;return new Promise(function(i,n){var a=r.apply(e,t);function s(e){o(a,i,n,s,l,"next",e)}function l(e){o(a,i,n,s,l,"throw",e)}s(void 0)})})()},l=(0,i.J1)`
  query UnifiedQuerySearchForAssistantContextRelevantQueries(
    $query: SearchmidtierSearchUnifiedQueryInput
    $filters: SearchmidtierSearchUnifiedFiltersInput
    $pageSize: Int
    $sortOrder: SearchmidtierSearchUnifiedSortOrderInput
    $featureFlags: SearchmidtierSearchUnifiedFeatureFlagsInput
  ) @component(name: "Workspace.Assistant") {
    searchmidtierSearchUnifiedSearch(
      input: {
        query: $query
        filters: $filters
        pageSize: $pageSize
        sortOrder: $sortOrder
        featureFlags: $featureFlags
      }
    ) {
      apiError {
        message
        code
      }
      nextPageToken
      results {
        ...SearchResultQueryData
      }
    }
  }

  fragment SearchResultQueryData on SearchmidtierSearchUnifiedResult {
    id
    resultType
    name
    highlighting {
      codeFragments {
        content
      }
    }
  }
`},667936:(e,t,r)=>{r.d(t,{$O:()=>g});var i=r(660618),n=r(278983),a=r(388735),o=r(267647),s=r(169750),l=r(517546),u=r(446576),c=r(810620),d=r(259660);function h(e,t,r,i,n,a,o){try{var s=e[a](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(i,n)}function m(e){return function(){var t=this,r=arguments;return new Promise(function(i,n){var a=e.apply(t,r);function o(e){h(a,i,n,o,s,"next",e)}function s(e){h(a,i,n,o,s,"throw",e)}o(void 0)})}}let g=(0,o.N)(s.E.USER_QUERIES,e=>m(function*(){return yield m(function*(){let{userId:t,singleQuery:r,boost:o,limit:s,apolloClient:c,getTablesInAllCodeBlocks:h,contextObject:g,agentName:f,citations:S,...p}=e,{currentCodeBlock:y,catalog:E,schema:T,queryId:A}=g;if(!c||!h||!y||"sql"!==y.language)return{};E&&T||((0,n.y)("clientsideEvent",{eventName:"missing-catalog-or-schema",eventType:"assistant-error",source:`${e.agentName}-userQueriesContext`}),(0,a.Km)({event_type:a.FS.ASSISTANT_ERROR,event_name:a.ih.MISSING_CATALOG_OR_SCHEMA,source:`${e.agentName}-userQueriesContext`}));let N=(yield(0,d.A3)({codeBlocks:[y],getTablesInAllCodeBlocks:h,activeCatalog:E??i.UQ,activeSchema:T??i.E2,defaultSchemaForCatalogs:i.E2,options:{},apolloClient:c,source:f??"",...p})).map(e=>`${e.catalog}.${e.schema}.${e.entity}`),b=[A??""],v=[],I=[],_=s??3;return I=r?[N.join(" ")]:N,o&&(I=I.map(e=>`${e} ${o}`)),yield Promise.all(I.slice(0,4).map(e=>m(function*(){let r=(yield(0,u.m)(c,{userId:t,query:e,limit:_})).filter(e=>e.id&&e.highlighting?.codeFragments&&!b.includes(e.id)).map(e=>({queryId:e.id||"",queryName:e.name||"",queryFragment:e.highlighting?.codeFragments?.[0]?.content||"",citationUrl:`/sql/editor/${e.id}`,citationIndex:(0,l.fZ)({url:`/sql/editor/${e.id}`,name:e.name??`/sql/editor/${e.id}`},S)}));v=v.concat(r)})())),{userQueries:v}})()})(),e=>{let{userQueries:t}=e;return{queryDocsNum:t?.length??0}},(e,t={isCompletion:!1})=>{if(!e.userQueries||0===e.userQueries.length)return"";return(0,c.TG)(e.userQueries,t.isCompletion)})},810620:(e,t,r)=>{r.d(t,{TG:()=>a});var i=r(441535),n=r(570512);let a=(e,t=!1)=>{let r="";if(e.length){let n=e.filter(e=>e.queryId&&e.queryFragment);if(t)r=(0,i.W)("databricks.fe.editor.enableCitationV2",!1)?`
- These are some past SQL queries fragments the user wrote before: 
`+o(n,3e3).map(e=>(e.citationIndex?`{${e.citationIndex}} `:"")+e.queryFragment).join("\n"):`
- These are some past SQL queries fragments the user wrote before: 
`+o(n,3e3).map(e=>e.queryFragment).join("\n");else{let e=o(n,3e3).map(e=>`PASSAGE_START:
SOURCE_START:
/sql/editor/${e.queryId}
SOURCE_END
CONTENT_START:
${e.queryFragment}
CONTENT_END
PASSAGE_END`).join("\n");r=`Query Search: Below are some SQL queries passages that were retrieved from the existing code base. Some of the SQL fragments may be related to the user's question or error they face. If some of the information in the passages appears relevant to the user's question or error, please use that relevant information in your final response. It's possible that the information in the passages is incomplete; if you know of a good solution please provide it regardless of what is present in the passages. It's also possible the information is for a different language (e.g. SQL vs python) or different workflow (e.g. notebook vs CLI), so remember this to ensure your response is useful to the user.

The passages below are delimited using BEGIN_RELATED_PASSAGES and END_RELATED_PASSAGES. The beginning/end of each individual passage are delimited by \`PASSAGE_START:\` and \`PASSAGE_END\`. Inside, each passage has a source delimited by \`SOURCE_START:\` and \`SOURCE_END\` and a content by \`CONTENT_START:\` and \`CONTENT_END\`. Only use the content of the passage in your response.

BEGIN_RELATED_PASSAGES
${e}
END_RELATED_PASSAGES`}}return r};function o(e,t){let r=[],i=0;for(let n of e){if(!n.queryFragment)continue;let e=s(n);if(i+e.length>t){let a=t-i;r.push({...n,queryFragment:e.slice(0,a)+"..."});break}r.push({...n,queryFragment:e}),i+=e.length}return r}let s=e=>`Query name: ${e.queryName?.replaceAll("<dbtag1>","")}
${(0,n.Ty)(e.queryFragment?.replaceAll("<dbtag1>",""))}
`}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/23237.50bb0ae3c9.chunk.js.map