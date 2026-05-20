"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[51818],{17150:(e,t,n)=>{n.a(e,async(e,o)=>{try{n.d(t,{E:()=>v,F:()=>A});var i=n(483588),a=n(836075),r=n(441535),s=n(109445),l=n(354809),c=n(475654),u=n(886100),d=n(22191),m=n(689017),p=n(747129),f=n(409989),h=n(711489),g=n(844949),T=n(758166),E=n(287342),b=n(405269),y=n(449633),S=n(61652),L=e([y]);function C(e,t,n,o,i,a,r){try{var s=e[a](r),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(o,i)}y=(L.then?(await L)():L)[0];let A=5,v=({prompt:e,language:t,lakesenseTraceId:n,clientId:o,proxyErrorHandler:L,cacheKey:A,moduleName:v="Unknown",promptBuildingContent:x,cellContentsHistory:N})=>{var _;return(_=function*(){let C;(0,T.xn)().logAttempt({moduleName:v,language:t,lakesenseTraceId:n}),E.LT.ghost_text_call_queue.addToQueue(Math.floor(Date.now()/1e3));let _=`${o??"no_client_id"}/${n??"unknown"}`,k=(0,E.Jt)();if(e)C=e;else{let e=x?.chunks??[];if(!(0,r.W)("databricks.fe.editor.ghostText.disableCodeCacheKeyOnly",!1)){let t=[i.aAD.CODE_CELLS_BEFORE,i.aAD.CODE_CELLS_AFTER,i.aAD.CODE_PREFIX,i.aAD.CODE_SUFFIX];e=e.filter(e=>e?.retrieverType&&t.includes(e.retrieverType))}C=JSON.stringify(e)}let I=(0,E.G$)(C,t),w=k.getAttempt(I);if(w){let e=w.response;return{completions:e.choices.map(({text:e})=>e),model:e.model??"",scores:[1],metadata:{fromCache:!0},updatedLakesenseTraceId:n,objectType:e.object_type}}if(A&&(A.prefix||A.suffix)){let e=k.getPreviousCompletion(A.prefix,A.suffix);if(e){let{response:t,lakesenseTraceId:n}=e;return{completions:t.response_split?.length?[t.response_split[0]]:t.choices.map(({text:e})=>e),model:t.model??"",scores:[1],metadata:{fromCache:!0},updatedLakesenseTraceId:n,objectType:t.object_type}}}let D=(0,s.BH)(l.X.MEASUREMENT,c.o.GHOST_TEXT_PROXY_RESPONSE,{lakesenseTraceId:_}),P=(0,r.W)("databricks.fe.editor.sendNextEditPayload",!1),M=P?N?.map(e=>({...e,language:(0,a.ev)(e.language),timestamp:String(Math.floor(e.timestamp/1e3))})):void 0,F=(M??[]).some(e=>null==e.content);if(!(0,r.W)("databricks.fe.assistant.nextEditDebugLoggingKillswitch",!1)&&(F||null==e))return F&&null==e?u.iT.log(d.Es.Assistant,"Suppressing ghost text request: null content and null prompt",{lakesenseTraceId:_}):F?u.iT.log(d.Es.Assistant,"Suppressing ghost text request: null content in snapshot(s)",{lakesenseTraceId:_}):null==e&&u.iT.log(d.Es.Assistant,"Suppressing ghost text request: null prompt",{lakesenseTraceId:_}),{completions:[],model:"",scores:[],metadata:{fromCache:!1},objectType:b.Q.EMPTY};let U={modelServingProxyRequest:{modelName:"GhostText",modelServingParams:{prompt:e,maxTokens:50,temperature:.05,stop:[...y.pK,...y.yW.get(t)??[]],n:1,clientRequestId:_},proxyMetadata:{clientId:"inline-completion",maxWaitTimeSeconds:(0,r.W)("databricks.fe.editor.ghostText.maxWaitTimeSeconds",5)}},cellSnapshots:M,forceRunNextEdit:(0,r.W)("databricks.fe.editor.forceRunNextEditDebug",!1),nextEditPastActions:P?{pastAccepts:{eventList:{event:E.LT.nes_accept_queue.convertToArr()}},pastShows:{eventList:{event:E.LT.nes_show_queue.convertToArr()}},pastInvocations:{eventList:{event:E.LT.nes_invoke_queue.convertToArr()}}}:void 0,pastActions:{pastShows:{eventList:{event:E.LT.ghost_text_show_queue.convertToArr().map(e=>({...e,time:String(e.time)}))}},pastAccepts:{eventList:{event:E.LT.ghost_text_accept_queue.convertToArr().map(e=>({...e,time:String(e.time)}))}},pastCalls:{eventList:{event:E.LT.ghost_text_call_queue.convertToArr().map(e=>({...e,time:String(e.time)}))}},userTimestamp:String(Math.floor(Date.now()/1e3))},promptBuildingContent:x,skipPreAcceptance:(0,r.W)("databricks.fe.editor.enableAssistantPromptDebug",!1)};try{let{data:e}=yield f.pY.post("/ajax-api/2.0/conversation-v2/ghost-text",(0,g.d)(U));(0,r.W)("databricks.fe.editor.enableAssistantPromptDebug",!1)&&console.log("Response:",JSON.stringify(e));let o=R(e,_,D,t);if(o)return o;(0,s.z$)(D,l.T.SUCCESSFUL),(0,m.wi)({editor_event_log:{auto_inline_suggestion_interaction_log:{proxy_event:{event_name:h.J5.GhostTextProxyEventName.GHOST_TEXT_PROXY_EVENT_NAME_SUCCESS,language:(0,S.fU)(t),lakesense_trace_id:_}}}}),k.addAttempt(I,e,n);let i=O(e,t,n);if(A&&k.updatePreviousCompletion(A.prefix,A.suffix,e,n,i?.response_split),i)return i;return{completions:e.choices.map(({text:e})=>e),objectType:e.object_type,model:e.model??"",scores:[1],metadata:{fromCache:!1},updatedLakesenseTraceId:_}}catch(e){return e&&e.response&&(429===e.response.status&&L?L.responseCode=429:403===e.response.status&&(L&&(L.responseCode=403),k.cleanAttempt(),k.deletePreviousCompletion())),[/Failed to fetch/,/permission to access/,/expired user session/,/exceeds the maximum queries per second/,/A network error occured/,/Load failed/].some(t=>t.test(e.message))||u.iT.sev2BurnRate(d.Es.Assistant,"retrieveAutoInlineSuggestion-proxy",p.i1.P95,p.Ip.Min10,!1,e),(0,s.z$)(D,l.T.FAILED),{completions:[],model:"",scores:[],metadata:{fromCache:!1},objectType:b.Q.EMPTY}}},function(){var e=this,t=arguments;return new Promise(function(n,o){var i=_.apply(e,t);function a(e){C(i,n,o,a,r,"next",e)}function r(e){C(i,n,o,a,r,"throw",e)}a(void 0)})})()},R=(e,t,n,o)=>{if(!e?.choices||0===e.choices.length){try{let n=JSON.parse(e.response_metadata_json??"");if(n.length>0){let e=n.find(e=>"ghost_text_pre_acceptance"===e.name);e&&e.postprocessor_changed_output&&(0,m.wi)({editor_event_log:{auto_inline_suggestion_interaction_log:{proxy_event:{event_name:h.J5.GhostTextProxyEventName.GHOST_TEXT_PROXY_EVENT_NAME_PREPROCESS,language:(0,S.fU)(o),lakesense_trace_id:t}}}})}}catch(e){}return(0,s.z$)(n,l.T.SUCCESSFUL),{completions:[],model:"",scores:[],metadata:{fromCache:!1},objectType:b.Q.EMPTY}}},O=(e,t,n)=>{try{let t=JSON.parse(e.response_metadata_json??"[]");if(t.length>0){let o=t.find(e=>"response_split"===e.name);if(o&&o.value&&o.value.length>0&&o.value[0].text){let t=o.value.map(e=>e.text);return{completions:[t[0]],model:e.model??"",scores:[1],metadata:{fromCache:!1},updatedLakesenseTraceId:n,response_split:t,objectType:e.object_type}}}return}catch(e){(0,T.vV)(e,`${t}-responseSplit`,n,t),u.iT.log(d.Es.Assistant,"AutoInlineSuggestionInteraction",e)}};o()}catch(e){o(e)}})},25125:(e,t,n)=>{function o(e,t,n,o,i,a,r){try{var s=e[a](r),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(o,i)}function i(e){return function(){var t=this,n=arguments;return new Promise(function(i,a){var r=e.apply(t,n);function s(e){o(r,i,a,s,l,"next",e)}function l(e){o(r,i,a,s,l,"throw",e)}s(void 0)})}}n(297768),n(631377),n(572293),n(580086),n(78926),n(642617),n(276093),n(878453),n(90458),n(144781);let a=({node:e})=>{let t={inScopeLocations:{},outOfScopeLocations:{}},n=null,o=e.identifierList(),i=e.strictIdentifier();if(i){let e=findNamedNode({node:i,nodeToFind:TerminalNode})[0],t=nameFromTerminalNode({node:e});n={type:"table",location:locationFromTerminalNode({node:e}),value:t}}if(o&&n){let e=[],i=[];for(let t of findNamedNode({node:o,nodeToFind:IdentifierContext}).flatMap(e=>findNamedNode({node:e,nodeToFind:TerminalNode}))){let n=nameFromTerminalNode({node:t}),o=locationFromTerminalNode({node:t});e.push(n),i.push({type:"column",value:n,location:o})}n.columnDefinitionList=e.map(e=>({name:e,type:ColumnDefinitionType.SIMPLE})),addLocationsToAntlrLocationMap({map:t.outOfScopeLocations,locations:i})}return n&&addLocationsToAntlrLocationMap({map:t.inScopeLocations,locations:[n]}),t},r=({tableNameNode:e,cteLocations:t,context:n,primaryTableLocation:o})=>i(function*(){let i,r={inScopeLocations:{},outOfScopeLocations:{}},[s,l]=findNamedNodes({node:e,nodesToFind:[MultipartIdentifierContext,TableAliasContext]}),c=(i=s.length>0?yield m({node:s[0],cteLocations:t,context:n,primaryTableLocation:o}):[{type:"table",value:""}])[i.length-1],u=null;if(l.length>0){let e=a({node:l[0]});Object.keys(e.inScopeLocations).length>0&&(u=e.inScopeLocations[Object.keys(e.inScopeLocations)[0]][0]),r.outOfScopeLocations=mergeAntlrLocationMaps(e.outOfScopeLocations,r.outOfScopeLocations);let t=c.columnDefinitionList;u&&!u?.columnDefinitionList?u.columnDefinitionList=t:u?.columnDefinitionList&&t&&(u.columnDefinitionList=mergeColumnDefinitionListsIfNeeded(u.columnDefinitionList,t))}return u?(c.identifierChain&&!u.columnDefinitionList&&(u.identifierChain=c.identifierChain),addLocationsToAntlrLocationMap({map:r.inScopeLocations,locations:[u]}),addLocationsToAntlrLocationMap({map:r.outOfScopeLocations,locations:i})):addLocationsToAntlrLocationMap({map:r.inScopeLocations,locations:i}),r})(),s=({aliasedQueryNode:e,context:t,cteLocations:n})=>i(function*(){let o={inScopeLocations:{},outOfScopeLocations:{}},[i,r]=findNamedNodes({node:e,nodesToFind:[QueryContext,TableAliasContext]});if(i.length>0){let{locations:e,columnDefinitionList:s}=yield v({queryNode:i[0],context:t,tableContextLocations:{cteLocations:n,correlatedSubqueryTableLocations:{}}});o.outOfScopeLocations=e;let l=null;if(r.length>0){let e=a({node:r[0]});Object.keys(e.inScopeLocations).length>0&&(l=e.inScopeLocations[Object.keys(e.inScopeLocations)[0]][0]),o.outOfScopeLocations=mergeAntlrLocationMaps(e.outOfScopeLocations,o.outOfScopeLocations),l&&!l?.columnDefinitionList?l.columnDefinitionList=s:l?.columnDefinitionList&&s&&(l.columnDefinitionList=mergeColumnDefinitionListsIfNeeded(l.columnDefinitionList,s))}l?addLocationsToAntlrLocationMap({map:o.inScopeLocations,locations:[l]}):addLocationsToAntlrLocationMap({map:o.inScopeLocations,locations:[{type:"table",columnDefinitionList:s,value:""}]})}return o})(),l=({tableValuedFunctionNode:e,context:t})=>i(function*(){let n={inScopeLocations:{},outOfScopeLocations:{}},[o,i,r]=findNamedNodes({node:e,nodesToFind:[FunctionNameContext,FunctionTableArgumentContext,TableAliasContext]});if(o.length>0&&addLocationsToAntlrLocationMap({map:n.outOfScopeLocations,locations:yield L({node:o[0],context:t})}),o.length>0&&i.length>0){let e=y({node:o[0]}),a=e.length>0?nameFromTerminalNode({node:e[e.length-1]}):"";if(t.enableAutocompleteVolumes&&PATH_ACCEPTING_TVFS.has(a)){let e=yield h({argNode:i[0],context:t});n.outOfScopeLocations=mergeAntlrLocationMaps(n.outOfScopeLocations,e)}}let s=null;if(r.length>0){let e=a({node:r[0]});Object.keys(e.inScopeLocations).length>0&&(s=e.inScopeLocations[Object.keys(e.inScopeLocations)[0]][0]),n.outOfScopeLocations=mergeAntlrLocationMaps(e.outOfScopeLocations,n.outOfScopeLocations)}return s?addLocationsToAntlrLocationMap({map:n.inScopeLocations,locations:[s]}):addLocationsToAntlrLocationMap({map:n.inScopeLocations,locations:[{type:"table",value:""}]}),n})(),c=({inlineTableNode:e,context:t,tableContextLocations:n,tableLocations:o})=>i(function*(){let i={inScopeLocations:{},outOfScopeLocations:{}},r=e?.tableAlias(),s=e?.rowValue()??[],l=e?.expression(0)??null,c=null;if(r){let e=a({node:r});Object.keys(e.inScopeLocations).length>0&&(c=e.inScopeLocations[Object.keys(e.inScopeLocations)[0]]?.[0]??null),i.outOfScopeLocations=mergeAntlrLocationMaps(e.outOfScopeLocations,i.outOfScopeLocations)}let u=s.length>0?Array.from({length:s[0]?.expression()?.length??0},(e,t)=>({type:ColumnDefinitionType.SIMPLE,name:`col${t+1}`})):(e=>{if(!e)return[];let t=e.booleanExpression(),n=t instanceof PredicatedContext?t.valueExpression():null,o=n instanceof ValueExpressionDefaultContext?n.primaryExpression():null;return Array.from({length:o instanceof RowConstructorContext?o.namedExpression().length:1},(e,t)=>({type:ColumnDefinitionType.SIMPLE,name:`col${t+1}`}))})(l);c?(!c.columnDefinitionList&&u.length>0&&(c.columnDefinitionList=u),addLocationsToAntlrLocationMap({map:i.inScopeLocations,locations:[c]})):u.length>0&&addLocationsToAntlrLocationMap({map:i.inScopeLocations,locations:[{type:"table",value:"",columnDefinitionList:u}]});let d=[...e.expression?.()??[],...s.flatMap(e=>e.expression?.()??[])],m=o??{};for(let e of d){let{locations:o}=yield E({expressionNode:e,context:t,tableContextLocations:{cteLocations:n.cteLocations,correlatedSubqueryTableLocations:n.correlatedSubqueryTableLocations,tableLocations:m,columnLocations:{}}});i=mergeAntlrLocations(o,i)}return{locations:i,columnDefinitionList:c?.columnDefinitionList??u}})(),u=({inlineTableDefault2Node:e,context:t,tableContextLocations:n,tableLocations:o})=>i(function*(){let i=e?.inlineTable();if(!i)return{inScopeLocations:{},outOfScopeLocations:{}};let{locations:a}=yield c({inlineTableNode:i,context:t,tableContextLocations:n,tableLocations:o});return a})(),d=({streamRelationNode:e,context:t,cteLocations:n})=>i(function*(){let o={inScopeLocations:{},outOfScopeLocations:{}},i=e?.streamRelationPrimary();if(!(i instanceof DatabricksStreamRelationContext))return o;let r=i?.streamRelationEdge();if(r instanceof StreamTableValuedFunctionContext){let e=r?.tableFunctionCall()?.functionName();if(e){addLocationsToAntlrLocationMap({map:o.outOfScopeLocations,locations:yield L({node:e,context:t})});let n=r?.tableAlias(),i=null;if(n){let e=a({node:n});Object.keys(e.inScopeLocations).length>0&&(i=e.inScopeLocations[Object.keys(e.inScopeLocations)[0]][0]),o.outOfScopeLocations=mergeAntlrLocationMaps(e.outOfScopeLocations,o.outOfScopeLocations)}i?addLocationsToAntlrLocationMap({map:o.inScopeLocations,locations:[i]}):addLocationsToAntlrLocationMap({map:o.inScopeLocations,locations:[{type:"table",value:""}]})}}else if(r instanceof StreamTableNameEdgeContext){let e=r?.multipartIdentifier();if(e){let i=yield m({node:e,cteLocations:n,context:t}),s=r?.tableAlias(),l=null;if(s){let e=a({node:s});Object.keys(e.inScopeLocations).length>0&&(l=e.inScopeLocations[Object.keys(e.inScopeLocations)[0]][0]),o.outOfScopeLocations=mergeAntlrLocationMaps(e.outOfScopeLocations,o.outOfScopeLocations)}if(l){let e=i[i.length-1];e.identifierChain&&!l.columnDefinitionList&&(l.identifierChain=e.identifierChain),addLocationsToAntlrLocationMap({map:o.inScopeLocations,locations:[l]}),addLocationsToAntlrLocationMap({map:o.outOfScopeLocations,locations:i})}else addLocationsToAntlrLocationMap({map:o.inScopeLocations,locations:i})}}return o})(),m=({node:e,cteLocations:t,context:n,validateFinalEntry:o=!0,primaryTableLocation:a})=>i(function*(){let i=findNamedNode({node:e,nodeToFind:IdentifierContext}).flatMap(e=>findNamedNode({node:e,nodeToFind:TerminalNode})).slice(0,3);if(hasAutocompleteRequest(n)){let e=searchForCursorInTerminalNodes({terminalNodes:i,relativeCursorPosition:n.autocompleteRequest.relativeCursorPosition});if("number"==typeof e){let o=yield generateTableAutoCompleteSuggestions({terminalNodes:i,cteLocations:t,context:n,primaryTableLocation:a,foundIndex:e});throw n.autocompleteRequest.suggestions=o,new RequestAutocompleteEarlyReturnError}}if(1===i.length){let e=nameFromTerminalNode({node:i[0]}),o=(t[e]??[]).filter(e=>"table"===e.type);if(o.length>0)return[{type:"table",location:locationFromTerminalNode({node:i[0]}),value:e,columnDefinitionList:o[0].columnDefinitionList}];if(n.tempTableOrViewNames.includes(e))return[{type:"table",location:locationFromTerminalNode({node:i[0]}),value:e,unknown:!0,verificationStatus:"TempTableOrViewOverride"}]}if(2===i.length){let e=nameFromTerminalNode({node:i[0]}),t=nameFromTerminalNode({node:i[1]});if(FILE_ACCESS_IDENTIFIERS.has(e)&&t.includes("/")){let o=locationFromTerminalNode({node:i[1]}),a={type:"fileFormat",location:locationFromTerminalNode({node:i[0]}),value:e};if(n.enableAutocompleteVolumes){let e=yield f({pathText:t,pathLocation:o,context:n});if(e)return[a,...e]}return[a,{type:"table",location:o,value:"",unknown:!0,verificationStatus:"FilePathUnknown"}]}}return T({identifierTypes:["catalog","database","table"],identifierTerminalNodes:i,context:n,validateFinalEntry:o})})(),p=(e,t,n,o)=>{if("volume"===e)return checkVolumeIdentifierValidity({parentIdentifierChain:t,name:n,context:o});return checkIdentifierValidity({parentIdentifierChain:t,name:n,context:o})},f=({pathText:e,pathLocation:t,context:n})=>i(function*(){let o=parseVolumePath(e);if(!o)return;let{extractedPathText:i,catalog:a,schema:r,volume:s,stringifiedIdentifierChain:l}=o,c={type:"table",location:t,value:"",unknown:!0};if(!a||!r||!s)return[{type:"volume",location:t,value:i,invalid:!0,verificationStatus:"VolumePathUnknown"},c];let u={type:"volume",location:t,value:i,identifierChain:[{name:a},{name:r},{name:s}]};if(n.createdOrRenamedVolumes.some(e=>e.toLowerCase()===l))return u.unknown=!0,u.verificationStatus="CreatedOrRenamedVolumeOverride",[u,c];let{catalogEntries:d}=yield n.catalogEntryApi.fetchVolumeChildren([a,r],n.timerTracker);if(null===d)return u.verificationStatus="VolumePathUnknown",[u,c];return d.some(e=>e.name.toLowerCase()===s.toLowerCase())?u.additionalTypeInfo="volume":(u.invalid=!0,u.verificationStatus="VolumePathMatchNotFound"),[u,c]})(),h=({argNode:e,context:t})=>i(function*(){let n={};if(!e)return n;let o=e instanceof StringLitContext?e:findNamedNode({node:e,nodeToFind:StringLitContext})[0];if(!o)return n;let i=o.singleStringLit(0)?.singleStringLitWithoutMarker()??o.singleStringLitWithoutMarker(0);if(!i)return n;let a=findNamedNode({node:i,nodeToFind:TerminalNode}).find(e=>e.symbol?.type===SqlBaseLexer.STRING_LITERAL||e.symbol?.type===SqlBaseLexer.DOUBLEQUOTED_STRING);if(!a)return n;let r=(a.symbol?.text??"").slice(1,-1).toLowerCase(),s=locationFromTerminalNode({node:a});if(r.startsWith(VOLUMES_PATH_PREFIX_LOWER)){let e=yield f({pathText:r,pathLocation:s,context:t});e&&addLocationsToAntlrLocationMap({map:n,locations:e})}return n})(),g=(e,t,n)=>{e.forEach(e=>{e.invalid&&e.type===t&&(e.invalid=void 0,e.unknown=!0,e.suggestions=void 0,e.verificationStatus=n)})},T=({identifierTypes:e,identifierTerminalNodes:t,context:n,validateFinalEntry:o=!0})=>i(function*(){if(1===t.length){let e=nameFromTerminalNode({node:t[0]});if("_sqldf"===e)return[{type:"table",location:locationFromTerminalNode({node:t[0]}),value:e,verificationStatus:"_sqldfSkip",unknown:!0}]}let i=[],a=[{name:n.currentCatalog},{name:n.currentDatabase},{name:"placeholder"}];for(let e=t.length-1,n=2;e>=0;e--,n--)a[n]=t[e];let r=!1,s=!1,l=[];for(let t=0;t<a.length;t++){let c=a[t];if(c instanceof TerminalNode){let u=nameFromTerminalNode({node:c});l.push({name:u});let d={type:e[t],location:locationFromTerminalNode({node:c}),identifierChain:cloneDeep(l),value:u,invalidCatalogOrSchemaParent:r},m=!o&&t===a.length-1;if(!r&&!s&&"function"!==e[t]&&n.catalogEntryApi&&!m){if(d.location)for(let e of Object.values(n.params))isRangeInsideRange(e.location,d.location)&&(s=!0,d.unknown=!0,d.verificationStatus="Param");if(!s){let o=l.slice(0,l.length-1),{invalid:i,suggestions:a,verificationStatus:c,unknown:m,additionalTypeInfo:f}=yield p(e[t],o,u,n);d.verificationStatus=c,d.additionalTypeInfo=f,i&&(r=!0,d.invalid=!0,d.suggestions=generateOptimalSuggestion(a,u)),m&&(s=!0,d.unknown=!0)}}i.push(d)}else l.push(c)}if(r&&2===t.length&&"live"===nameFromTerminalNode({node:t[0]}))return[{type:"liveSchema",location:locationFromTerminalNode({node:t[0]}),value:nameFromTerminalNode({node:t[0]})},{type:"table",location:locationFromTerminalNode({node:t[1]}),value:nameFromTerminalNode({node:t[1]}),unknown:!0,verificationStatus:"LiveSchemaUnknown"}];if(r){let e=l.map(e=>e.name).join(".");n.createdTablesOrViews.includes(e)&&g(i,"table","CreatedTableOrViewOverride"),n.enableAutocompleteVolumeNames&&n.createdOrRenamedVolumes.includes(e)&&g(i,"volume","CreatedOrRenamedVolumeOverride")}return i})(),E=({expressionNode:e,context:t,tableContextLocations:n,scopedOverrides:o={allowALLColumn:!1}})=>i(function*(){let a={inScopeLocations:{},outOfScopeLocations:{}},r={type:ColumnDefinitionType.COMPLEX},s=null,[l,c,u,d,m,p,f,h,g,T,b]=findNamedNodes({node:e,nodesToFind:[CastContext,CollateClauseContext,ColumnReferenceContext,ConstantDefaultContext,ExtractContext,FunctionCallContext,LambdaContext,QueryContext,StarContext,WindowSpecContext,TimestampaddContext]}),C=e=>{};return yield i(function*(){for(let e of l){let o=e.CAST(),i=e.expression();if(o&&i){let{locations:e}=yield E({expressionNode:i,context:t,tableContextLocations:n}),r={type:"function",location:locationFromTerminalNode({node:o}),value:nameFromTerminalNode({node:o})};addLocationsToAntlrLocationMap({map:(a=mergeAntlrLocations(e,a)).outOfScopeLocations,locations:[r]})}}})(),yield i(function*(){for(let e of b){let o=e.DATEADD()??e.DATE_ADD()??e.TIMESTAMPADD(),i=e.valueExpression();if(o&&i){for(let e of i){let{locations:o}=yield E({expressionNode:e,context:t,tableContextLocations:n});a.outOfScopeLocations=mergeAntlrLocationMaps(o.inScopeLocations,o.outOfScopeLocations,a.outOfScopeLocations)}let e={type:"function",location:locationFromTerminalNode({node:o}),value:nameFromTerminalNode({node:o})};addLocationsToAntlrLocationMap({map:a.outOfScopeLocations,locations:[e]})}}})(),C(c),C(c),yield i(function*(){for(let e of p){let o=e.functionName();addLocationsToAntlrLocationMap({map:a.outOfScopeLocations,locations:yield L({node:o,context:t})});let[i]=findNamedNodes({node:e,nodesToFind:[ExpressionContext]});for(let e of i){let{locations:o}=yield E({expressionNode:e,context:t,tableContextLocations:n});a=mergeAntlrLocations(o,a)}}})(),yield i(function*(){for(let e of h){let o={cteLocations:n.cteLocations,correlatedSubqueryTableLocations:n.tableLocations},i=yield v({queryNode:e,context:t,tableContextLocations:o});a.outOfScopeLocations=mergeAntlrLocationMaps(a.outOfScopeLocations,i.locations)}})(),yield i(function*(){if(1===g.length){let e=g[0],o=e.qualifiedName();if(!o){let t=Object.values(n.tableLocations).flat().filter(e=>"table"===e.type&&e.identifierChain),o={type:"asterisk",value:"*",location:locationFromTerminalNode({node:e.ASTERISK()}),tables:t.map(e=>({identifierChain:e.identifierChain??[]})),asteriskIdentifierChain:[{name:"*",asterisk:!0}]};addLocationsToAntlrLocationMap({map:a.outOfScopeLocations,locations:[o]})}if(r.type=ColumnDefinitionType.ASTERISK,o){let i=yield S({terminalNodes:[...extractColumnPathFromQualifiedNameContext({node:o}),e.ASTERISK()],locationsContext:n.tableLocations,context:t});if(i.length>1&&"*"===i[i.length-1].value){let e=i.slice(0,-1);addLocationsToAntlrLocationMap({map:a.outOfScopeLocations,locations:e});let t=e[e.length-1],o="table"===t.type,s="column"===t.type||"complex"===t.type;t.unknown||t.invalid?r.unknown=!0:o?r.tableLevelAsterisk={sources:(n.tableLocations[t.value]??[]).filter(e=>"table"===e.type&&e.value&&(e.identifierChain||e.columnDefinitionList))}:s?r.columnOrFieldLevelAsterisk={asteriskParentLocation:t}:r.unknown=!0}}else{let e;for(let t of(r.tableLevelAsterisk={sources:[]},Object.values(n.tableLocations).flat().filter(e=>"table"===e.type)))t.unknown||t.invalid?e=!0:t.identifierChain||t.columnDefinitionList?r.tableLevelAsterisk.sources.push(t):e=!0;r.unknown=e}let i=e?.exceptClause()?.multipartIdentifierList()?.multipartIdentifier();if(i)if(o){let e=extractColumnPathFromQualifiedNameContext({node:o});for(let o of i){let i=y({node:o}),r=yield S({terminalNodes:[...e,...i],locationsContext:n.tableLocations,context:t});addLocationsToAntlrLocationMap({map:a.outOfScopeLocations,locations:r.slice(e.length)})}}else for(let e of i){let o=y({node:e}),i=yield S({terminalNodes:o,locationsContext:n.tableLocations,context:t});addLocationsToAntlrLocationMap({map:a.outOfScopeLocations,locations:i})}}})(),yield i(function*(){for(let e of u){let i=mergeAntlrLocationMaps(n.tableLocations,n.correlatedSubqueryTableLocations,n.columnLocations),l=extractColumnPathFromColumnReferenceNode({node:e}),c=yield S({terminalNodes:l,locationsContext:i,context:t,allowALLColumn:o.allowALLColumn});if(o.allowALLColumn&&1===c.length&&"all"===c[0].value.toLowerCase()&&c[0].invalid&&(c[0]={value:c[0].value,location:c[0].location,type:"column"}),addLocationsToAntlrLocationMap({map:a.outOfScopeLocations,locations:c}),0===p.length&&1===u.length&&0===h.length){let e=c[c.length-1];s=e,r.name=e.value,r.type=ColumnDefinitionType.SIMPLE,e.identifierChain&&(r.simpleColumnPath=e.identifierChain.map(e=>e.name))}}})(),{locations:a,columnDefinition:r,simpleExpressionFinalLocation:s}})(),b=({node:e,context:t,tableContextLocations:n})=>i(function*(){let o={inScopeLocations:{},outOfScopeLocations:{}},[i,a]=findNamedNodes({node:e,nodesToFind:[ExpressionContext,IdentifierContext]}),r={type:ColumnDefinitionType.COMPLEX};if(i.length>0){let e=i[0],{locations:s,columnDefinition:l,simpleExpressionFinalLocation:c}=yield E({expressionNode:e,tableContextLocations:n,context:t});if(o=s,r=cloneDeep(l),a.length>0){let e=findNamedNode({node:a[0],nodeToFind:TerminalNode})[0];if(e&&e?.symbol){let t=nameFromTerminalNode({node:e}),n={type:"column",location:locationFromTerminalNode({node:e}),value:t};c&&(n.identifierChain=c.identifierChain,n.type=c.type,n.complexObjectDef=c.complexObjectDef),addLocationsToAntlrLocationMap({map:o.inScopeLocations,locations:[n]}),r.name=t}}}return{locations:o,columnDefinition:r}})(),y=({node:e})=>findNamedNode({node:e,nodeToFind:IdentifierContext}).flatMap(e=>findNamedNode({node:e,nodeToFind:TerminalNode})),S=({terminalNodes:e,locationsContext:t,context:n,allowALLColumn:o=!1})=>i(function*(){let a=((e,t)=>{let n={},o=!1,i=!1,a=!1,r=!1;for(let[s,l]of Object.entries(e)){let e={},c=[];for(let n of l){if(n.identifierChain){let t=n.identifierChain.map(e=>e.name).join(".");e[t]||(e[t]=!0,c.push(n))}else c.push(n);o||"catalog"!==n.type||n.value!==t.currentCatalog||(o=!0),i||"database"!==n.type||n.identifierChain?.[0].name!==t.currentCatalog||n.identifierChain?.[1].name!==t.currentDatabase||(i=!0),a||"table"!==n.type||n.identifierChain?.[0].name!==t.currentCatalog||(a=!0),r||"table"!==n.type||n.identifierChain?.[0].name!==t.currentCatalog||n.identifierChain?.[1].name!==t.currentDatabase||(r=!0)}n[s]=c}return!o&&a&&addLocationsToAntlrLocationMap({map:n,locations:[{value:t.currentCatalog,identifierChain:[{name:t.currentCatalog}],type:"catalog"}]}),!i&&r&&addLocationsToAntlrLocationMap({map:n,locations:[{value:t.currentDatabase,identifierChain:[{name:t.currentCatalog},{name:t.currentDatabase}],type:"database"}]}),n})(t,n);if(hasAutocompleteRequest(n)){let t=searchForCursorInTerminalNodes({terminalNodes:e,relativeCursorPosition:n.autocompleteRequest.relativeCursorPosition});if("number"==typeof t){let i=yield generateColumnAutoCompleteSuggestions({terminalNodes:e,locationContext:a,context:n,allowALLColumn:o,foundIndex:t});throw n.autocompleteRequest.suggestions=i,new RequestAutocompleteEarlyReturnError}}let r={catalog:"database",database:"table",table:"column",column:"complex",complex:"complex"},s=["catalog","database","table","column","complex"],l=(e,t)=>{let n=r[t],o=[];for(let t of e)o.push({value:nameFromTerminalNode({node:t}),location:locationFromTerminalNode({node:t}),type:n}),n=r[n];return o};if(!n.catalogEntryApi){let t=Math.max(4-e.length,0);return l(e,s[t])}let c={catalog:[],database:[],table:[]},u=Object.values(a).flat().filter(e=>!e.invalid),d=[];for(let e of u)"catalog"===e.type?c.catalog.push(e.value):"database"===e.type?c.database.push(e.value):"table"===e.type&&(c.table.push(e.value),d.push(e));let m=(t,o,s)=>i(function*(){if(t===e.length)return[o];let i=e[t],u=nameFromTerminalNode({node:i}),p={value:u,location:locationFromTerminalNode({node:i}),type:s},f=(a[u]??[]).filter(e=>e.type===s);if(p.location){for(let i of Object.values(n.params))if(isRangeInsideRange(i.location,p.location))return p.unknown=!0,p.verificationStatus="Param",[[...o,p,...l(e.slice(t+1),s)]]}if(0===f.length){if("catalog"===s||"database"===s||"table"===s)return p.invalid=!0,p.suggestions=generateOptimalSuggestion(c[s],p.value),[[...o,p,...l(e.slice(t+1),s)]];if(o.length>0){let i=o[o.length-1];if(i.unknown)p.unknown=!0;else if(i.identifierChain&&i.identifierChain.length<=4)if("complex"===s){let e=identiferChainToPath(i.identifierChain,"antlrFetchStructDefinition");if(!e)return[];let{columnType:a}=yield n.catalogEntryApi.getColumnDetails(e,n.timerTracker);if("array"===a||"map"===a||"unknown"===a)return p.unknown=!0,m(t+1,[...o,p],r[s]);if("primitive"===a)p.suggestions=[""],p.invalid=!0;else{let e=getMatchingStructField(a,u);if(e)return p.complexObjectDef=e,p.identifierChain=[...i.identifierChain,{name:u}],m(t+1,[...o,p],r[s]);p.suggestions=generateOptimalSuggestion(Object.keys(a),p.value),p.invalid=!0}}else{let{invalid:a,suggestions:c,verificationStatus:d,unknown:f,additionalTypeInfo:h}=yield checkIdentifierValidity({parentIdentifierChain:i.identifierChain,name:u,context:n});if(p.verificationStatus=d,p.additionalTypeInfo=h,f)return p.unknown=!0,[[...o,p,...l(e.slice(t+1),s)]];if(!a)return p.identifierChain=[...i.identifierChain,{name:u}],m(t+1,[...o,p],r[s]);p.invalid=!0,p.suggestions=generateOptimalSuggestion(c,u)}else if(i.columnDefinitionList){let e=yield evaluateColumnDefinitionList(i.columnDefinitionList,n),a=e.locations.find(e=>e.value.toLowerCase()===u);if(a)return p.identifierChain=a.identifierChain,p.complexObjectDef=a.complexObjectDef,m(t+1,[...o,p],r[s]);e.unknown?p.unknown=!0:(p.invalid=!0,p.suggestions=generateOptimalSuggestion(e.locations.map(e=>e.value),p.value))}else if(i.complexObjectDef&&"string"!=typeof i.complexObjectDef){let e=getMatchingStructField(i.complexObjectDef,u);if(e)return p.complexObjectDef=e,i.identifierChain&&(p.identifierChain=[...i.identifierChain,{name:u}]),m(t+1,[...o,p],r[s]);p.invalid=!0,p.suggestions=generateOptimalSuggestion(Object.keys(i.complexObjectDef),p.value)}else"primitive"===i.complexObjectDef?(p.invalid=!0,p.suggestions=[""]):p.unknown=!0;return[[...o,p,...l(e.slice(t+1),s)]]}let i=[],a=[];if("column"===s){for(let c of d)if(r[c.type]===s)if(c.identifierChain){let{invalid:d,suggestions:f,verificationStatus:h,unknown:g,additionalTypeInfo:T}=yield checkIdentifierValidity({parentIdentifierChain:c.identifierChain,name:u,context:n});if(a.push(...f),g){let n={...p,unknown:!0,verificationStatus:h};i.push([...o,n,...l(e.slice(t+1),s)])}else if(!d){let e={...p,identifierChain:[...c.identifierChain,{name:u}],verificationStatus:h,additionalTypeInfo:T};i.push(...yield m(t+1,[...o,e],r[s]))}}else if(c.columnDefinitionList){let d=yield evaluateColumnDefinitionList(c.columnDefinitionList,n);a.push(...d.locations.map(e=>e.value));let f=d.locations.find(e=>e.value.toLowerCase()===u);f?(p.identifierChain=f.identifierChain,p.complexObjectDef=f.complexObjectDef,i.push(...yield m(t+1,[...o,p],r[s]))):d.unknown&&(p.unknown=!0,i.push([...o,p,...l(e.slice(t+1),s)]))}else{let n={...p,unknown:!0};i.push([...o,n,...l(e.slice(t+1),s)])}}if(0===i.length)return p.invalid=!0,p.suggestions=generateOptimalSuggestion(a,p.value),[[...o,p,...l(e.slice(t+1),s)]];return i}let h=[];for(let e of f){let n={...p,identifierChain:e.identifierChain,columnDefinitionList:e.columnDefinitionList,complexObjectDef:e.complexObjectDef};h.push(...yield m(t+1,[...o,n],r[s]))}return h})(),p=[],f=e.length;for(let e of s.slice(-1*(f+1)))p.push(...yield m(0,[],e));for(let t=0;t<e.length&&1!==p.length;t++){let e=p.filter(e=>!0!==e[t].invalid);if(e.length>0){let n=e.filter(e=>!0!==e[t].unknown);p=n.length>0?n:e}else p=[p[0]]}let h=p[0].some(e=>e.invalid);if(h&&1===e.length&&null.includes(nameFromTerminalNode({node:e[0]})))return[{value:nameFromTerminalNode({node:e[0]}),location:locationFromTerminalNode({node:e[0]}),type:"column",verificationStatus:"__aibi_external_valueSkip"}];if(h&&n.tempVariableNames.length>0){let t=getTempVariableConsumedParts(e.slice(0,3).map(e=>nameFromTerminalNode({node:e})),n.tempVariableNames);if(t>0){let o=C({qualifierNodes:e.slice(0,t),context:n,shouldValidate:!1}),i=e.slice(t);return o.push(...l(i,"column").map(e=>({...e,unknown:!0}))),o}}return p[0]})(),L=({node:e,context:t})=>i(function*(){let n=findNamedNode({node:e,nodeToFind:IdentifierContext}).flatMap(e=>findNamedNode({node:e,nodeToFind:TerminalNode})).slice(0,3);if(1===n.length)return[{type:"function",location:locationFromTerminalNode({node:n[0]}),value:nameFromTerminalNode({node:n[0]})}];return T({identifierTypes:["catalog","database","function"],identifierTerminalNodes:n,context:t})})(),C=({qualifierNodes:e,context:t,shouldValidate:n})=>{let o=[];if(0===e.length)return o;let i=e.map(e=>nameFromTerminalNode({node:e})),a=e[e.length-1],r=nameFromTerminalNode({node:a})??"",s=isTempVariableNameParts(i)&&t.tempVariableNames.includes(r),l=({namespace:t,index:o,unknown:a=!1})=>{let r=e[o],s=i[o].toLowerCase()===t;return{type:VARIABLE_NAMESPACE_TYPES[t],value:nameFromTerminalNode({node:r}),location:locationFromTerminalNode({node:r}),...a?{unknown:!0}:{},...n&&!s?{invalid:!0,suggestions:[t]}:{}}},c=3===i.length;c&&o.push({...l({namespace:VARIABLE_NAMESPACE.SYSTEM,index:0}),identifierChain:[{name:i[0]}]}),i.length>=2&&o.push(l({namespace:VARIABLE_NAMESPACE.SESSION,index:+!!c,unknown:!n}));let u=n&&!t.tempVariableNames.includes(r);return o.push({type:"column",value:r,location:locationFromTerminalNode({node:a}),unknown:!0,...n?{invalid:!s}:{},...s?{verificationStatus:"TempVariableOverride"}:{},...u?{suggestions:t.tempVariableNames}:{}}),o},A=({node:e,context:t,tableContextLocations:n})=>i(function*(){let[o,a,m,p,f,h]=findNamedNodes({node:e,nodesToFind:[FromClauseContext,WhereClauseContext,AggregationClauseContext,HavingClauseContext,SelectClauseContext,SubqueryContext]}),g=e.queryPrimary(),T={inScopeLocations:{},outOfScopeLocations:{}},y={locations:{inScopeLocations:{},outOfScopeLocations:{}},columnDefinitionList:[]},S=g instanceof InlineTableDefault1Context&&0===o.length&&0===f.length;if(S){let e=yield c({inlineTableNode:g.inlineTable(),context:t,tableContextLocations:n});T=e.locations,y={locations:{inScopeLocations:{},outOfScopeLocations:{}},columnDefinitionList:e.columnDefinitionList}}!S&&o.length>0&&(T=yield(({node:e,context:t,tableContextLocations:n})=>i(function*(){let o=findNamedNode({node:e,nodeToFind:RelationContext}),i={inScopeLocations:{},outOfScopeLocations:{}};for(let e of o){let o=null,[a,c,m,p,f]=findNamedNodes({node:e,nodesToFind:[TableNameContext,AliasedQueryContext,TableValuedFunctionContext,StreamRelationContext,RelationExtensionContext]});a.length>0&&(i=mergeAntlrLocations((yield r({tableNameNode:a[0],context:t,cteLocations:n.cteLocations})),i),o=Object.values(i.inScopeLocations).flat().filter(e=>"table"===e.type)?.[0]),c.length>0&&(i=mergeAntlrLocations((yield s({aliasedQueryNode:c[0],context:t,cteLocations:n.cteLocations})),i)),m.length>0&&(i=mergeAntlrLocations((yield l({tableValuedFunctionNode:m[0],context:t})),i));let h=e.relationPrimary();for(let e of(h instanceof InlineTableDefault2Context&&(i=mergeAntlrLocations((yield u({inlineTableDefault2Node:h,context:t,tableContextLocations:n,tableLocations:i.inScopeLocations})),i)),p.length>0&&(i=mergeAntlrLocations((yield d({streamRelationNode:p[0],cteLocations:n.cteLocations,context:t})),i)),f)){let[a,c,m,p,f,h]=findNamedNodes({node:e,nodesToFind:[TableNameContext,AliasedQueryContext,TableValuedFunctionContext,StreamRelationContext,JoinCriteriaContext,InlineTableDefault2Context]});if(a.length>0&&(i=mergeAntlrLocations((yield r({tableNameNode:a[0],context:t,cteLocations:n.cteLocations,primaryTableLocation:o})),i)),c.length>0&&(i=mergeAntlrLocations((yield s({aliasedQueryNode:c[0],context:t,cteLocations:n.cteLocations})),i)),m.length>0&&(i=mergeAntlrLocations((yield l({tableValuedFunctionNode:m[0],context:t})),i)),h.length>0&&(i=mergeAntlrLocations((yield u({inlineTableDefault2Node:h[0],context:t,tableContextLocations:n,tableLocations:i.inScopeLocations})),i)),p.length>0&&(i=mergeAntlrLocations((yield d({streamRelationNode:p[0],cteLocations:n.cteLocations,context:t})),i)),f.length>0){let e=f[0],o={cteLocations:n.cteLocations,correlatedSubqueryTableLocations:n.correlatedSubqueryTableLocations,tableLocations:i.inScopeLocations,columnLocations:{}},a=e.booleanExpression();if(a){let{locations:e}=yield E({expressionNode:a,context:t,tableContextLocations:o});i=mergeAntlrLocations(e,i)}}}}return i})())({node:o[0],context:t,tableContextLocations:n}));let L={...n,tableLocations:T.inScopeLocations},C={inScopeLocations:{},outOfScopeLocations:{}};a.length>0&&(C=yield(({whereClauseNode:e,context:t,tableContextLocations:n})=>i(function*(){let o={inScopeLocations:{},outOfScopeLocations:{}},i={...n,tableLocations:n.tableLocations,columnLocations:{}},a=e.booleanExpression();if(a){let{locations:e}=yield E({expressionNode:a,context:t,tableContextLocations:i});o=mergeAntlrLocations(e,o)}return o})())({whereClauseNode:a[0],context:t,tableContextLocations:L})),f.length>0&&(y=yield(({node:e,context:t,tableContextLocations:n})=>i(function*(){let o={inScopeLocations:{},outOfScopeLocations:{}},i=[];for(let a of findNamedNode({node:e,nodeToFind:NamedExpressionContext})){let e={...n,columnLocations:o.inScopeLocations},{locations:r,columnDefinition:s}=yield b({node:a,context:t,tableContextLocations:e});i.push(s),o=mergeAntlrLocations(r,o)}return{locations:o,columnDefinitionList:i}})())({node:f[0],context:t,tableContextLocations:L}));let A={...L,columnLocations:S?T.inScopeLocations:y.locations.inScopeLocations},R={inScopeLocations:{},outOfScopeLocations:{}};m.length>0&&(R=yield(({aggregationClauseNode:e,context:t,tableContextLocations:n})=>i(function*(){let o={inScopeLocations:{},outOfScopeLocations:{}};for(let i of findNamedNode({node:e,nodeToFind:ExpressionContext})){let{locations:e}=yield E({expressionNode:i,context:t,tableContextLocations:n,scopedOverrides:{allowALLColumn:!0}});o=mergeAntlrLocations(e,o)}return{inScopeLocations:{},outOfScopeLocations:mergeAntlrLocationMaps(o.inScopeLocations,o.outOfScopeLocations)}})())({aggregationClauseNode:m[0],context:t,tableContextLocations:A}));let O={inScopeLocations:{},outOfScopeLocations:{}};p.length>0&&(O=yield(({havingClauseNode:e,context:t,tableContextLocations:n})=>i(function*(){let o={inScopeLocations:{},outOfScopeLocations:{}},i=e.booleanExpression();if(i){let{locations:e}=yield E({expressionNode:i,context:t,tableContextLocations:n});o=mergeAntlrLocations(e,o)}return o})())({havingClauseNode:p[0],context:t,tableContextLocations:A}));let x={inScopeLocations:{},outOfScopeLocations:{}};if(h.length>0){let e=h[0].query();e&&(x.outOfScopeLocations=(yield v({queryNode:e,context:t,tableContextLocations:{cteLocations:A.cteLocations,correlatedSubqueryTableLocations:A.tableLocations}})).locations)}return{locations:mergeAntlrLocations(T,C,R,O,y.locations,x),columnDefinitionList:y.columnDefinitionList}})(),v=({queryNode:e,context:t,tableContextLocations:n})=>i(function*(){let o=e?.ctes(),a={inScopeLocations:{},outOfScopeLocations:{}};o&&(a=yield(({node:e,context:t,tableContextLocations:n})=>i(function*(){let o=e.namedQuery(),i={inScopeLocations:{},outOfScopeLocations:{}};for(let e of o){let o=mergeAntlrLocationMaps(i.inScopeLocations,n.cteLocations),a=e.errorCapturingIdentifier(),r=e.identifierList(),s=e.query();if(s){let{locations:e,columnDefinitionList:n}=yield v({queryNode:s,context:t,tableContextLocations:{cteLocations:o,correlatedSubqueryTableLocations:{}}});i.outOfScopeLocations=mergeAntlrLocationMaps(i.outOfScopeLocations,e);let l=findNamedNode({node:a,nodeToFind:TerminalNode})[0],c={type:"table",location:locationFromTerminalNode({node:l}),value:nameFromTerminalNode({node:l})};if(r){let e=[],t=findNamedNode({node:r,nodeToFind:IdentifierContext}).flatMap(e=>findNamedNode({node:e,nodeToFind:TerminalNode})),o=[];for(let n of t){let t=nameFromTerminalNode({node:n});e.push(t),o.push({type:"column",value:t,location:locationFromTerminalNode({node:n})})}addLocationsToAntlrLocationMap({map:i.outOfScopeLocations,locations:o});let a=e.map(e=>({name:e,type:ColumnDefinitionType.SIMPLE}));n?c.columnDefinitionList=mergeColumnDefinitionListsIfNeeded(a,n):c.columnDefinitionList=a}else c.columnDefinitionList=n;(i.inScopeLocations[c.value]??[]).filter(e=>"table"===e.type).length>0&&(c.invalid=!0,c.suggestions=[`${c.value}_1`]),addLocationsToAntlrLocationMap({map:i.inScopeLocations,locations:[c]})}}return i})())({node:o,context:t,tableContextLocations:n}));let r=e?.queryNoWith();if(!r||!(r instanceof NoWithQueryContext))return{locations:mergeAntlrLocationMaps(a.inScopeLocations,a.outOfScopeLocations),columnDefinitionList:void 0};let s=r?.queryTerm();if(s instanceof QueryTermDefaultContext||s instanceof SetOperationContext){let e=r?.queryOrganization(),[o]=findNamedNodes({node:r,nodesToFind:[QueryTermDefaultContext]}),s=mergeAntlrLocationMaps(a.inScopeLocations,n.cteLocations),l={...n,cteLocations:s},c={inScopeLocations:{},outOfScopeLocations:{}},u={locations:{inScopeLocations:{},outOfScopeLocations:{}},columnDefinitionList:[]};for(let e=0;e<o.length;e++){let n=yield A({node:o[e],context:t,tableContextLocations:l});0===e&&(u=n),c=mergeAntlrLocations(n.locations,c)}let d={inScopeLocations:{},outOfScopeLocations:{}};e&&(d=yield(({queryOrganizationNode:e,context:t,tableContextLocations:n})=>i(function*(){let o={inScopeLocations:{},outOfScopeLocations:{}};for(let i of findNamedNode({node:e,nodeToFind:ExpressionContext})){let{locations:e}=yield E({expressionNode:i,tableContextLocations:n,context:t,scopedOverrides:{allowALLColumn:!0}});o=mergeAntlrLocations(e,o)}return{inScopeLocations:{},outOfScopeLocations:mergeAntlrLocationMaps(o.inScopeLocations,o.outOfScopeLocations)}})())({queryOrganizationNode:e,context:t,tableContextLocations:{...n,tableLocations:u.locations.inScopeLocations,columnLocations:{}}}));let m=mergeAntlrLocations(a,d,c);return{locations:mergeAntlrLocationMaps(m.inScopeLocations,m.outOfScopeLocations),columnDefinitionList:u.columnDefinitionList}}if(s instanceof OperatorPipeStatementContext){let e=yield(({operatorPipeStatementNode:e,context:t,cteLocations:n})=>i(function*(){let o=extractPipeRightSideNodesInOrderFromTopLevelOperatorPipeStatementNode(e);if(!o)return{inScopeLocations:{},outOfScopeLocations:{}};return(yield A({node:o.queryTermDefaultNode,context:t,tableContextLocations:{cteLocations:n,correlatedSubqueryTableLocations:{}}})).locations})())({operatorPipeStatementNode:s,context:t,cteLocations:a.inScopeLocations}),n=mergeAntlrLocations(a,e);return{locations:mergeAntlrLocationMaps(n.inScopeLocations,n.outOfScopeLocations),columnDefinitionList:void 0}}return{locations:{},columnDefinitionList:void 0}})()},40051:(e,t,n)=>{n.d(t,{Z:()=>o});function o(e){let t={sparkSql:0,scikit:0,mlflow:0,pandas:0,pysparkPandas:0,pandasBrackets:0,dlt:0,sparkTable:0,dltRead:0,sqldf:0,dataFrame:0,hasSqlDataFramePandas:0};for(let[n,o]of Object.entries({sparkSql:/spark\.sql\(/i,scikit:/import scikit/i,mlflow:/import mlflow/i,pandas:/import pandas/i,pysparkPandas:/import pyspark\.pandas/i,pandasBrackets:/\[\[/,dlt:/import dlt|@dlt/i,sparkTable:/spark\.table\(/i,dltRead:/dlt\.read\(/i,sqldf:/_sqldf/i,dataFrame:/\.(select|withColumn|withColumnRenamed|filter|groupBy|agg|where|join|drop)\(/}))t[n]=(e.match(o)||[]).length;return t.hasSqlDataFramePandas=+(t.sparkSql+t.dataFrame+t.pysparkPandas>0),t}},90458:(e,t,n)=>{n.d(t,{Ol:()=>s,Vh:()=>o});let o="/Volumes/",i=o.toLowerCase(),a="[^. /\\x00-\\x1F\\x7F'\"`]",r=RegExp(`^(?:${a}+(?:/${a}+)*/?)?$`),s=e=>{let t=e.toLowerCase().lastIndexOf(i);if(-1===t)return null;let n=e.substring(t+o.length);return r.test(n)?n:null}},122748:(e,t,n)=>{n.d(t,{N:()=>l});var o=n(90458),i=n(228091);let a=[o.Vh,"/FileStore/","/mnt/","/databricks-datasets/","/Workspace/","/user/","/tmp/"],r=a.map(e=>e.toLowerCase()),s=RegExp("(['\"`])([^. \\x00-\\x1F\\x7F'\"`]*)$"),l=(e,t)=>{if(!(0,i.M)()||e.isDisposed())return null;let n=e.getLineContent(t.lineNumber),o=t.column-1,l=n.slice(0,o),c=s.exec(l);if(!c)return null;let u=c[2].toLowerCase();if(r.some(e=>u.includes(e)))return null;let d=c.index+1;return{prefixes:a,range:{startLineNumber:t.lineNumber,endLineNumber:t.lineNumber,startColumn:d+1,endColumn:t.column}}}},129514:(e,t,n)=>{n.r(t),n.d(t,{doc:()=>i,header:()=>o});let o="INSERT",i=`

Inserts new rows into a table and optionally truncates the table or partitions. You specify the inserted rows by value expressions or the result of a query.

Databricks SQL supports this statement only for <Delta> tables.

## Syntax

\`\`\`
INSERT { OVERWRITE | INTO } [ TABLE ] table_name
    [ PARTITION clause ]
    [ ( column_name [, ...] ) | BY NAME ]
    query
    
INSERT INTO [ TABLE ] table_name 
    REPLACE WHERE predicate
    query
\`\`\`


## Parameters

- **\`INTO\` or \`OVERWRITE\`**

    If you specify \`OVERWRITE\` the following applies:

    - Without a \`partition_spec\` the table is truncated before inserting the first row.
    - Otherwise, all partitions matching the \`partition_spec\` are truncated before inserting the first row.

    If you specify \`INTO\` all rows inserted are additive to the existing rows.

- **table_name**

    Identifies the table to be inserted to. The name must not include a temporal specification.
    If the table cannot be found Databricks SQL raises a TABLE_OR_VIEW_NOT_FOUND error.

    \`table_name\` must not be a foreign table.

- **PARTITION clause**

    An optional parameter that specifies a target partition for the insert. You may also only partially specify the partition.

    When specifying a static partition \`column = value\` this column must not be repeated in the insert column list.

- **( column_name [, ...] )**

    An optional list of columns in the table. The insert command may specify any particular column from the table at most once.


    - If this command omits a column, Databricks SQL assigns the corresponding default value instead.
    - If the target table schema does not define any default value for the inserted column, Databricks SQL assigns \`NULL\` if the column is nullable. Otherwise, Databricks SQL raises an error.

    Providing no column list is equivalent to specifying all columns, except for those with assigned values in the \`PARTITION\` clause, in the order defined in the table.

- **\`BY NAME\`**


    When this clause is used instead of an explicit column list, the command uses the exposed column names of \`query\` to produce the column list in the order of \`query\`.
    As with an explicit column list, each column must exist in the target table, and must not be duplicated.
    If a column present in \`table_name\` is not part of the implied column list the \`DEFAULT\` value is used instead.

    \`BY NAME\` also matches attributes of structs by name.

    No column in \`query\` may match a column specified in the \`PARTITION\` clause or any column that is generated.

- **REPLACE WHERE boolean_expression**


    If \`table_name\` is a <Delta> table, delete rows matching \`boolean_expression\` before inserting any rows matching \`boolean-expression\` specified in \`query\`. Rows  in \`query\` which do not match \`boolean_expression\` are ignored.

    \`boolean_expression\` can be any expression that evaluates to a result type \`BOOLEAN\`.
    
    See _.
    
- **query**

    A query that produces the rows to be inserted.

    You must match the number of columns returned by the query with the specified or implied insert column list.

    If a data type cannot be safely cast to the matching column data type, a runtime exception is thrown.


    - If \`query\` consists of a VALUES clause the \`expression\` can be \`DEFAULT\`. 
    - If \`query\` consists of a SELECT clause the \`named_expression\` can be \`DEFAULT\`.
    - \`DEFAULT\` will insert the explicitly defined \`DEFAULT\` expression of the corresponding column in \`table_name\`, or \`NULL\` if none is defined.

    If schema evolution is enabled, new columns can exist as the last columns of your schema (or nested columns) for the schema to evolve.

## Examples

  :local:
  :depth: 1

### INSERT INTO

#### INSERT using VALUES

\`\`\`sql
> CREATE TABLE students (name VARCHAR(64), address VARCHAR(64) DEFAULT 'unknown', student_id INT)
  PARTITIONED BY (student_id);

-- Single row insert using a \`VALUES\` clause specifying all columns.
> INSERT INTO students VALUES
    ('Amy Smith', '123 Park Ave, San Jose', 111111);

-- Single row insert using an implicit default for address
> INSERT INTO students(name, student_id) VALUES('Grayson Miller', 222222);

-- Single row insert using an explicit DEFAULT keyword for address
> INSERT INTO students VALUES('Youna Kim', DEFAULT, 333333);

--  Multi-row insert using a \`VALUES\` clause
> INSERT INTO students VALUES
    ('Bob Brown', '456 Taylor St, Cupertino', 444444),
    ('Cathy Johnson', '789 Race Ave, Palo Alto', 555555);

-- Multi-row insert using a mix of DEFAULT and literals
> INSERT INTO students VALUES
    ('Gwyneth Zhao', '120 Main St, Rockport', 666666),
    ('Jackson Peterson', DEFAULT, 777777);

> SELECT * FROM students;
            name                  address student_id
 ---------------- ------------------------ ----------
        Amy Smith   123 Park Ave, San Jose     111111
   Grayson Miller                  unknown     222222
        Youna Kim                  unknown     333333
        Bob Brown 456 Taylor St, Cupertino     444444
    Cathy Johnson  789 Race Ave, Palo Alto     555555
     Gwyneth Zhao    120 Main St, Rockport     666666
 Jackson Peterson                  unknown     777777
\`\`\`

#### Insert using a subquery

\`\`\`sql
-- Assuming the persons table has already been created and populated.
> SELECT * FROM persons;
          name                   address       ssn
 ------------- ------------------------- ---------
 Dora Williams 134 Forest Ave, Melo Park 123456789
   Eddie Davis   245 Market St, Milpitas 345678901

> INSERT INTO students PARTITION (student_id = 444444)
    SELECT name, address FROM persons WHERE name = "Dora Williams";

> SELECT * FROM students;
          name                   address student_id
 ------------- ------------------------- ----------
     Amy Smith    123 Park Ave, San Jose     111111
     Bob Brown  456 Taylor St, Cupertino     222222
 Cathy Johnson   789 Race Ave, Palo Alto     333333
 Dora Williams 134 Forest Ave, Melo Park     444444
\`\`\`

#### Insert using a \`TABLE\` clause

\`\`\`sql
-- Assuming the visiting_students table has already been created and populated.
> SELECT * FROM visiting_students;
          name               address student_id
 ------------- --------------------- ----------
 Fleur Laurent 345 Copper St, London     777777
 Gordon Martin  779 Lake Ave, Oxford     888888

> INSERT INTO students TABLE visiting_students;

> SELECT * FROM students;
          name                   address student_id
 ------------- ------------------------- ----------
     Amy Smith     123 Park Ave,San Jose     111111
     Bob Brown  456 Taylor St, Cupertino     222222
 Cathy Johnson   789 Race Ave, Palo Alto     333333
 Dora Williams 134 Forest Ave, Melo Park     444444
 Fleur Laurent     345 Copper St, London     777777
 Gordon Martin      779 Lake Ave, Oxford     888888
\`\`\`

#### Insert into a directory

\`\`\`sql
> CREATE TABLE students (name VARCHAR(64), address VARCHAR(64), student_id INT)
    PARTITIONED BY (student_id)
    LOCATION "/path/to/students_table";

> INSERT INTO delta.\`/path/to/students_table\` VALUES
    ('Amy Smith', '123 Park Ave, San Jose', 111111);
> SELECT * FROM students;
          name                   address student_id
 ------------- ------------------------- ----------
     Amy Smith    123 Park Ave, San Jose     111111
\`\`\`

### Insert with a column list

\`\`\`sql
> INSERT INTO students (address, name, student_id) VALUES
    ('Hangzhou, China', 'Kent Yao', 11215016);
> SELECT * FROM students WHERE name = 'Kent Yao';
      name                address student_id
 --------- ---------------------- ----------
 Kent Yao         Hangzhou, China   11215016
\`\`\`

### Insert with both a partition spec and a column list

\`\`\`sql
> INSERT INTO students PARTITION (student_id = 11215017) (address, name) VALUES
    ('Hangzhou, China', 'Kent Yao Jr.');
> SELECT * FROM students WHERE student_id = 11215017;
         name                address student_id
 ------------ ---------------------- ----------
 Kent Yao Jr.        Hangzhou, China   11215017
\`\`\`

### INSERT using the BY NAME clause

\`\`\`sql
> CREATE TABLE target(n INT, text STRING, s STRUCT<a INT, b INT>);
> INSERT INTO target BY NAME SELECT named_struct('b', 2, 'a', 1) AS s, 0 AS n, 'data' AS text;
> SELECT * FROM target;
  0  data  {"a":1,"b":2}

> CREATE OR REPLACE TABLE target(n INT, arr ARRAY<STRUCT<a INT, b INT>>);
> INSERT INTO target BY NAME SELECT array(named_struct('b', 2, 'a', 1)) AS arr, 0 AS n;
> INSERT INTO target BY NAME SELECT array(named_struct('b', 2, 'a', 1)) AS arr;
> SELECT * FROM target;
  0     [{"a":1,"b":2}]
  NULL  [{"a":1,"b":2}]

> INSERT INTO target BY NAME SELECT array(named_struct('b', 2, 'a', 1)) AS arr, 0 AS badname;
Error

> INSERT INTO target BY NAME SELECT array(named_struct('b', 2, 'a', 1)) AS arr, 0 AS n, 1 AS n;
 Error: INSERT_COLUMN_ARITY_MISMATCH.TOO_MANY_DATA_COLUMNS
\`\`\`

### REPLACE WHERE

\`\`\`sql
> CREATE TABLE sales(tx_date DATE, amount INTEGER);
> INSERT INTO sales VALUES
   (DATE'2022-10-01', 1234),
   (DATE'2022-10-02', 2345),
   (DATE'2022-10-03', 3456),
   (DATE'2022-11-01', 3214);

-- Replace any rows with a transaction date in October 2022.
> INSERT INTO sales REPLACE WHERE tx_date BETWEEN '2022-10-01' AND '2022-10-31' 
   VALUES (DATE'2022-10-01', 1237),
          (DATE'2022-10-02', 2378),
          (DATE'2022-10-04', 2456),
          (DATE'2022-10-05', 6328);
> SELECT * FROM sales ORDER BY  tx_date;
 tx_date    amount
 ---------- ------
 2022-10-01   1237
 2022-10-02   2378
 2022-10-04   2456
 2022-10-05   6328
 2022-11-01   3214   
\`\`\`

### INSERT OVERWRITE

#### Insert using a \`VALUES\` clause

\`\`\`sql
-- Assuming the students table has already been created and populated.
> SELECT * FROM students;
          name                   address student_id
 ------------- ------------------------- ----------
     Amy Smith    123 Park Ave, San Jose     111111
     Bob Brown  456 Taylor St, Cupertino     222222
 Cathy Johnson   789 Race Ave, Palo Alto     333333
 Dora Williams 134 Forest Ave, Melo Park     444444
 Fleur Laurent     345 Copper St, London     777777
 Gordon Martin      779 Lake Ave, Oxford     888888
   Helen Davis 469 Mission St, San Diego     999999
    Jason Wang     908 Bird St, Saratoga     121212

> INSERT OVERWRITE students VALUES
    ('Ashua Hill', '456 Erica Ct, Cupertino', 111111),
    ('Brian Reed', '723 Kern Ave, Palo Alto', 222222);

> SELECT * FROM students;
       name                 address student_id
 ---------- ----------------------- ----------
 Ashua Hill 456 Erica Ct, Cupertino     111111
 Brian Reed 723 Kern Ave, Palo Alto     222222
\`\`\`

#### Insert using a subquery

\`\`\`sql
-- Assuming the persons table has already been created and populated.
> SELECT * FROM persons;
          name                   address       ssn
 ------------- ------------------------- ---------
 Dora Williams 134 Forest Ave, Melo Park 123456789
   Eddie Davis    245 Market St,Milpitas 345678901

> INSERT OVERWRITE students PARTITION (student_id = 222222)
    SELECT name, address FROM persons WHERE name = "Dora Williams";

> SELECT * FROM students;
          name                   address student_id
 ------------- ------------------------- ----------
    Ashua Hill   456 Erica Ct, Cupertino     111111
 Dora Williams 134 Forest Ave, Melo Park     222222
\`\`\`

#### Insert using a \`TABLE\` clause

\`\`\`sql
-- Assuming the visiting_students table has already been created and populated.
> SELECT * FROM visiting_students;
          name               address student_id
 ------------- --------------------- ----------
 Fleur Laurent 345 Copper St, London     777777
 Gordon Martin  779 Lake Ave, Oxford     888888

> INSERT OVERWRITE students TABLE visiting_students;

> SELECT * FROM students;
          name               address student_id
 ------------- --------------------- ----------
 Fleur Laurent 345 Copper St, London     777777
 Gordon Martin  779 Lake Ave, Oxford     888888
\`\`\`

#### Insert overwrite a directory

\`\`\`sql
> CREATE TABLE students (name VARCHAR(64), address VARCHAR(64), student_id INT)
    PARTITIONED BY (student_id)
    LOCATION "/path/to/students_table";

> INSERT OVERWRITE delta.\`/path/to/students_table\` VALUES
    ('Amy Smith', '123 Park Ave, San Jose', 111111);
> SELECT * FROM students;
          name                   address student_id
 ------------- ------------------------- ----------
     Amy Smith    123 Park Ave, San Jose     111111
\`\`\`

`},130388:(e,t,n)=>{n.d(t,{iA:()=>o,lt:()=>i});let o=(e,t)=>({lineNumber:t.lineNumber-e.first_line+1,column:t.column-(e.first_line===t.lineNumber?e.first_column:0)}),i=(e,t)=>{let n=1===e.startLineNumber;return{startLineNumber:t.first_line+e.startLineNumber-1,endLineNumber:t.first_line+e.endLineNumber-1,startColumn:(n?t.first_column:0)+e.startColumn,endColumn:(n?t.first_column:0)+e.endColumn}}},133562:(e,t,n)=>{n.a(e,async(e,o)=>{try{n.d(t,{El:()=>a.El,GD:()=>r.GD,KE:()=>i.KE,gn:()=>i.gn,iH:()=>a.iH,wr:()=>r.wr});var i=n(998518),a=n(652892),r=n(347054),s=e([i,a,r]);[i,a,r]=s.then?(await s)():s,o()}catch(e){o(e)}})},134779:(e,t,n)=>{function o(e){let t={};for(let n in e)if(e.hasOwnProperty(n)){let o=e[n]?.chunks||[],i=o.length,a=o.reduce((e,t)=>{if(t.content.columns)return e+JSON.stringify(t.content).length;if(t.content.code)return e+t.content.code.length;return e+String(t.content).length},0);t[n]={chunkCount:i,charCount:a}}return t}function i(e,t){let n={};for(let o in e)if(e.hasOwnProperty(o)){let i=e[o],a=t[o]||{chunkCount:0,charCount:0},r=a.chunkCount-i.chunkCount,s=a.charCount-i.charCount;(0!==r||0!==s)&&(n[o]={chunkCount:r,charCount:s})}return n}n.d(t,{A:()=>i,W:()=>o})},145226:(e,t,n)=>{n.d(t,{A:()=>o});let o=e=>{let t=e?.replaceAll(" ","").replace(/^struct(.*)/,"$1");if(!t)return[];return[...new Set(t.replace(/</g,",").replace(/>/g,",").split(",").filter(Boolean).map(e=>e.split(":")[0]))]}},152296:(e,t,n)=>{n.d(t,{e:()=>c});var o=n(483588),i=n(441535),a=n(629356);let r={text:o.ZfP.LANGUAGE_UNSPECIFIED,sql:o.ZfP.SQL,python:o.ZfP.PYTHON};o.ZfP.LANGUAGE_UNSPECIFIED,o.ZfP.SQL,o.ZfP.PYTHON,o.ZfP.SCALA,o.ZfP.SHELL,o.ZfP.R,o.ZfP.MARKDOWN;let s={cell:o.TUv.CODE,query:o.TUv.CODE,variable:o.TUv.CODE,python:o.TUv.CODE,table:o.TUv.TABLE,text:o.TUv.TEXT};o.TUv.CHUNK_TYPE_UNSPECIFIED,o.TUv.CODE,o.TUv.TABLE,o.TUv.TEXT;let l={user_queries:o.aAD.USER_QUERIES,relevant_table:o.aAD.RELEVANT_TABLE,notebook_specific:o.aAD.NOTEBOOK_SPECIFIC,notebook_cells:o.aAD.NOTEBOOK_CELLS,environment_context:o.aAD.ENVIRONMENT_CONTEXT,favorite_table:o.aAD.FAVORITE_TABLE,neighbor_code_table:o.aAD.NEIGHBOR_CODE_TABLE,neighbor_code:o.aAD.RETRIEVER_TYPE_UNSPECIFIED,autocomplete:o.aAD.RETRIEVER_TYPE_UNSPECIFIED,manual:o.aAD.MANUAL,errors:o.aAD.ERRORS,codePrefix:o.aAD.CODE_PREFIX,codeSuffix:o.aAD.CODE_SUFFIX,codeCellsBefore:o.aAD.CODE_CELLS_BEFORE,codeCellsAfter:o.aAD.CODE_CELLS_AFTER};function c(e){let t=[];for(let n in e)if(e.hasOwnProperty(n)){let c=e[n];c&&c.chunks.filter(e=>!(0,i.W)("databricks.fe.editor.ghostText.enableSkipChunks",!1)||!e.toSkip).forEach(e=>{let i={chunkType:s[e.documentType]||o.TUv.CHUNK_TYPE_UNSPECIFIED,retrieverType:l[e.retrieverType]||o.aAD.RETRIEVER_TYPE_UNSPECIFIED};"codeCellsBefore"===n||"codeCellsAfter"===n||"codePrefix"===n||"codeSuffix"===n||"user_queries"===n||"notebook_cells"===n||"autocomplete"===n&&"table"!==e.documentType||"relevant_table"===n&&"table"!==e.documentType?(i.retrieverType=l[n],i.codeBlock={code:e.content,language:r[e.contentType]||o.ZfP.LANGUAGE_UNSPECIFIED}):"table"===e.documentType?i.textRepresentation=new a.F().format(e):i.textRepresentation=e.content,t.push(i)})}return{chunks:t}}o.aAD.USER_QUERIES,o.aAD.RELEVANT_TABLE,o.aAD.NOTEBOOK_SPECIFIC,o.aAD.NOTEBOOK_CELLS,o.aAD.PERSONALIZED_CODE,o.aAD.LAKEVIEW_DATASETS,o.aAD.ENVIRONMENT_CONTEXT,o.aAD.FAVORITE_TABLE,o.aAD.NEIGHBOR_CODE_TABLE,o.aAD.RETRIEVER_TYPE_UNSPECIFIED,o.aAD.MANUAL,o.aAD.ERRORS,o.aAD.CODE_PREFIX,o.aAD.CODE_SUFFIX,o.aAD.CODE_CELLS_BEFORE,o.aAD.CODE_CELLS_AFTER},156753:(e,t,n)=>{n.d(t,{H:()=>o});function o(e,t){let n,o;return{tables:(n=[],(o=e.match(/from\s+([a-zA-Z_][a-zA-Z0-9_]*)(\s|;|$)/i))&&n.push(o[1]),n),currentClause:function(e,t){let n=e.toLowerCase(),o=["select","from","where","group by","order by","limit"];for(let e=o.length-1;e>=0;e--){let i=o[e],a=n.lastIndexOf(i);if(-1!==a&&a<t)return i.toUpperCase()}return"UNKNOWN"}(e,t)}}},173685:(e,t,n)=>{n.d(t,{Ak:()=>a}),n(733871);var o,i=n(118650);n(572293),n(25125),n(642617),n(878453);var a=((o={}).IdentifierReference="identifierReference",o.TableAlias="tableAlias",o.FunctionName="functionName",o.FunctionArgument="functionArgument",o.Identifier="identifier",o.InlineTable="inlineTable",o.ValueExpression="valueExpression",o.MultipartIdentifier="multipartIdentifier",o.NamedQuery="namedQuery",o.FunctionTable="functionTable",o.StrictIdentifier="strictIdentifier",o);i.h0$.RULE_identifierReference,i.h0$.RULE_tableAlias,i.h0$.RULE_functionName,i.h0$.RULE_functionArgument,i.h0$.RULE_identifier,i.h0$.RULE_inlineTable,i.h0$.RULE_valueExpression,i.h0$.RULE_multipartIdentifier,i.h0$.RULE_namedQuery,i.h0$.RULE_tableFunctionCall,i.h0$.RULE_strictIdentifier,i.h0$.RULE_identifier,i.h0$.RULE_strictIdentifier,i.h0$.RULE_valueExpression,i.h0$.RULE_tableFunctionCall},180452:(e,t,n)=>{n.d(t,{K:()=>l});var o=n(692738),i=n(141078),a=n(162539);function r(e,t,n,o,i,a,r){try{var s=e[a](r),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(o,i)}let s=(0,i.J1)`
  query NotebookVolumesSearch(
    $query: String!
    $filters: SearchmidtierSearchUnifiedFiltersInput
    $sortOrder: SearchmidtierSearchUnifiedSortOrderInput
    $enableCrossRanking: Boolean!
    $pageSize: Int!
    $pageToken: String
  ) @component(name: "Notebook.Notebooks") {
    searchmidtierSearchUnifiedSearch(
      input: {
        query: { query: $query, searchMode: SEARCH_AS_YOU_TYPE, enableCrossRanking: $enableCrossRanking }
        filters: $filters
        sortOrder: $sortOrder
        pageSize: $pageSize
        pageToken: $pageToken
      }
    ) {
      results {
        id
        name
        description
        resultType
        ucEntityMetadata {
          catalogName
          securableKind
          schemaName
        }
        browseOnly
      }
      apiError {
        message
        code
      }
      nextPageToken
    }
  }
`;function l(){let e=(0,i.mK)();return(0,o.useCallback)(t=>{var n;return(n=function*(){return(yield(0,a.o)(e,{query:t,excludeBrowseOnly:!0,pageSize:100,fetchPolicy:"cache-first",queryDocument:s})).results},function(){var e=this,t=arguments;return new Promise(function(o,i){var a=n.apply(e,t);function s(e){r(a,o,i,s,l,"next",e)}function l(e){r(a,o,i,s,l,"throw",e)}s(void 0)})})()},[e])}},187770:(e,t,n)=>{function o(){return[[/\{/,"delimiter.bracket","@fStringBracketCounting"],[/\}/,"delimiter.bracket","@pop"],[/:=?[<^>#+,]?(?:(\d*\.\d+)|(\d+))?[bdefns%]?(?=})/,"constant.numeric"],[/#[^}]*/,"invalid.illegal"],{include:"@root"},[/:[^\\}]*/,"invalid.illegal"]]}function i(e){e.tokenizer.whitespace=[[/\s+/,"white"],[/(^#.*$)/,"comment"],[/'''/,"string.quoted","@endDocString"],[/"""/,"string.quoted","@endDblDocString"]],e.tokenizer.endDocString=[[/[^']+/,"string.quoted"],[/\\'/,"string.quoted"],[/'''/,"string.quoted","@pop"],[/'/,"string.quoted"]],e.tokenizer.endDblDocString=[[/[^"]+/,"string.quoted"],[/\\"/,"string.quoted"],[/"""/,"string.quoted","@pop"],[/"/,"string.quoted"]],e.tokenizer.strings=[[/'$/,"string.escape","@popall"],[/'/,"string.escape","@stringBody"],[/(f)(""")/,{token:"string.escape",next:"tripleDoubleFStringBody"}],[/(f)(''')/,{token:"string.escape",next:"tripleSingleFStringBody"}],[/(f)(")/,{token:"string.escape",next:"doubleFStringBody"}],[/(f)(')/,{token:"string.escape",next:"fStringBody"}],[/"$/,"string.escape","@popall"],[/"/,"string.escape","@dblStringBody"]],e.tokenizer.stringBody=[[/[^\\']+$/,"string","@popall"],[/[^\\']+/,"string"],[/\\./,"string"],[/'/,"string.escape","@pop"],[/\\$/,"string"]],e.tokenizer.dblStringBody=[[/[^\\"]+$/,"string","@popall"],[/[^\\"]+/,"string"],[/\\./,"string"],[/"/,"string.escape","@pop"],[/\\$/,"string"]],e.tokenizer.fStringBody=[[/[^\\']+$/,"string.quoted","@pop"],[/{{/,"string.quoted"],[/{/,"delimiter.bracket","@fStringBracketCounting"],[/[^\\'|{]+/,"string.quoted"],[/\\./,"string.quoted"],[/'/,"string.escape","@pop"],[/\\$/,"string.quoted"]],e.tokenizer.doubleFStringBody=[[/[^\\"]+$/,"string.quoted","@pop"],[/{{/,"string.quoted"],[/{/,"delimiter.bracket","@doubleFStringBracketCounting"],[/[^\\"|{]+/,"string.quoted"],[/\\./,"string.quoted"],[/"/,"string.escape","@pop"],[/\\$/,"string.quoted"]],e.tokenizer.tripleDoubleFStringBody=[[/{{/,"string.quoted"],[/{/,"delimiter.bracket","@tripleDoubleFStringBracketCounting"],[/[^"{]+/,"string.quoted"],[/"""/,"string.escape","@pop"]],e.tokenizer.tripleSingleFStringBody=[[/{{/,"string.quoted"],[/{/,"delimiter.bracket","@tripleSingleFStringBracketCounting"],[/[^'{]+/,"string.quoted"],[/'''/,"string.escape","@pop"]],e.tokenizer.numbers=[[/-?(0x[abcdefABCDEF\d]+[lL])/,"invalid.illegal.name"],[/-?(0x)([abcdefABCDEF\d]+)/,["storage.type.number","constant.numeric.hex"]],[/-?(\d*\.)?(\d+(_\d+)*)([eE][+-]?\d+)?[jJ]?[lL]?/,"constant.numeric"]],e.tokenizer.fStringBracketCounting=[[/'/,"@rematch","@pop"],...o()],e.tokenizer.doubleFStringBracketCounting=[[/"/,"@rematch","@pop"],...o()],e.tokenizer.tripleDoubleFStringBracketCounting=[[/"""/,"@rematch","@pop"],...o()],e.tokenizer.tripleSingleFStringBracketCounting=[[/'''/,"@rematch","@pop"],...o()]}n.d(t,{P:()=>i})},192010:(e,t,n)=>{n.d(t,{n:()=>N});var o=n(192568),i=n.n(o),a=n(342411),r=n(853762),s=n(641760),l=n(520640),c=n(124235),u=n(583741),d=n(354184),m=n(777229),p=n(22191);function f({icon:e,label:t,description:n}){return`<code><strong>${e} ${t}</strong></code>

<i>${n}</i>`}var h=n(215011);function g(e,t,n,o,i,a,r){try{var s=e[a](r),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(o,i)}let T=e=>{if(!e)return"";let t=0,n=[];for(e=(0,d.G7)(e);t<3&&e;){let o,i=e.slice(0,70).indexOf("\n\n");-1===i?o=Math.min(70,e.length):o=i+2,0===i?n.push("\n\n"):(t++,n.push(e.slice(0,o))),e=e.slice(o)}return i()(n)?.endsWith("\n")&&(i()(n)?.endsWith("\n\n")?n[n.length-1]=n[n.length-1].slice(0,-2):n[n.length-1]=n[n.length-1].slice(0,-1)),e&&n.push("..."),n.join("")};var E=n(214076),b=n(360771),y=n(769487);function S(e,t,n,o,i,a,r){try{var s=e[a](r),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(o,i)}function L(e){return function(){var t=this,n=arguments;return new Promise(function(o,i){var a=e.apply(t,n);function r(e){S(a,o,i,r,s,"next",e)}function s(e){S(a,o,i,r,s,"throw",e)}r(void 0)})}}let C=(0,a.YK)({table:{id:"CNJA54",defaultMessage:"table"},view:{id:"eKHYZK",defaultMessage:"view"},streaming_table:{id:"FrmbdW",defaultMessage:"streaming table"},materialized_view:{id:"N0fF65",defaultMessage:"materialized view"},managed:{id:"EWW6Se",defaultMessage:"managed table"},vector_search_index:{id:"cmnigP",defaultMessage:"vector search index"},table_or_view:{id:"tTNut5",defaultMessage:"table or view"}});function A(e,t,n,o,i,a,r){try{var s=e[a](r),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(o,i)}var v=n(880272),R=n(708113),O=n(228091);function x(e,t,n,o,i,a,r){try{var s=e[a](r),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(o,i)}let N=({value:e,details:t,catalog:n,schema:o,baseUrl:a,panelType:S,connector:N,intl:_,includeJumpToTableLink:k})=>{var I;return(I=function*(){if("discoveryJoin"===t.detailsType||"fkJoin"===t.detailsType||"fkJoinCondition"===t.detailsType)return(0,v.Gj)(t,e);if("function"===t.detailsType){let i={type:"function",function:t.name};return(0,d.pd)(e,i,n,o,N,R.default)}if("dataCatalog"===t.detailsType)return(({value:e,details:t,connector:n,baseUrl:o,panelType:a,intl:S,includeJumpToTableLink:A})=>L(function*(){try{let _,k,I,w,D=(e=>{if(e.tables)return e.tables[0].identifierChain.map(({name:e})=>e).concat(e.path);return e.path})(t),P=(0,d.dG)(t.parseType),M=yield(0,b.aE)(D.slice(0,4),n.catalogApi.value,!0);if(!M)return{error:`No entry found for path ${t.path.join(".")}`};if(M===b.ck)return{error:`Invalid parent path length of ${t.path.length}`};let F=(_=t,k=D,I=e,w=M,"complex"===_.parseType?i()(k)??I:w.name),U=((e,t,n)=>{if("complex"!==t.parseType)return n.type;if(!n.fields)return"struct field";return(0,E.Zm)(n,e.slice(4))})(D,t,M);if(P){var L,v,R,O,x,N;let e,t,n,o,i=U?.toLowerCase(),E=(L=M,e=L.metadata?.securable_kind,"string"==typeof e?e:void 0);(0,s.qB)(E)&&(i="vector_search_index");let b=(v=M,t=v.metadata?.owner||v.metadata?.Owner,"string"==typeof t?t:void 0),_=(R=M,n=R.describeDetail?.lastModified,"string"==typeof n?n:void 0),k=_?(0,r.Z)({date:new Date(_),intl:S}):void 0,{bytes:I,files:w}=(0,l.fQ)(M.describeDetail)??{},P=(0,y.j)(M)?M.catalogVirtualTableType:void 0;return(({name:e,path:t,lowerEntryType:n,translatedEntryType:o,comment:i,owner:a,lastUpdated:r,bytes:s,files:l,panelType:E,intl:b,includeJumpToTableLink:y,securableKind:S,catalogVirtualTableType:L})=>{var C;return(C=function*(){var g,S,C,A;let v,R,O=(n?u.Om[n]:void 0)??u.Om.table,x="&nbsp;".repeat(3),N=((e,t,n)=>{let o=Number(t);if(!e&&!o)return"";return e&&o?n.formatMessage({id:"GrAA0j",defaultMessage:"{bytes}, {numFiles, plural, =1 {# file} other {# files}}"},{bytes:e,numFiles:o}):e||n.formatMessage({id:"RIS6bp",defaultMessage:"{numFiles, plural, =1 {# file} other {# files}}"},{numFiles:o})})(s,l,b),_=T(i),k=L?function({catalogVirtualTableType:e,intl:t}){switch(e){case"pipeline.private":return f({icon:"\uD83D\uDD12",label:t.formatMessage({id:"abfKCU",defaultMessage:"PRIVATE"}),description:t.formatMessage({id:"7qthQO",defaultMessage:"This dataset is marked as private and is only accessible within the pipeline"})});case"pipeline.temporary":return f({icon:"◇",label:t.formatMessage({id:"JLnzyT",defaultMessage:"TEMPORARY"}),description:t.formatMessage({id:"TGVYG0",defaultMessage:"This is a temporary view only accessible within the pipeline"})});case"pipeline.pending":return f({icon:"⏳",label:t.formatMessage({id:"JHHLcr",defaultMessage:"PENDING"}),description:t.formatMessage({id:"AK+6Ph",defaultMessage:"This dataset is defined but not yet materialized — run the pipeline to create it"})});default:return(0,m.F)(e,{eventId:"editor.getCatalogVirtualTableTag",esComponent:p.Es.WorkflowsAuthoring}),f({icon:"⬚",label:t.formatMessage({id:"E/Zqjs",defaultMessage:"VIRTUAL"}),description:t.formatMessage({id:"SNX8ot",defaultMessage:"This dataset is not present in Unity Catalog"})})}}({catalogVirtualTableType:L,intl:b}):void 0,I=a||r||N||_,w=(0,c.f8)()?"⌘":"ctrl",D=!L&&3===t.length&&y?(g=b.formatMessage({id:"yaJiR9",defaultMessage:"View details ({cmdOrCtrl} + click)"},{cmdOrCtrl:w}),S=h.Rp,C=[...t,E],A=b.formatMessage({id:"1dlSUR",defaultMessage:"Open {tableName} in side panel"},{tableName:t[2]}),v=encodeURIComponent(JSON.stringify(C)),`[${g}](command:${S}?${v} "${A}")`):"",{ownerLabel:P,lastUpdatedLabel:M,sizeLabel:F}={ownerLabel:(R=b).formatMessage({id:"18LtUd",defaultMessage:"Owner"}),lastUpdatedLabel:R.formatMessage({id:"EQsDAv",defaultMessage:"Last updated"}),sizeLabel:R.formatMessage({id:"R5VnJw",defaultMessage:"Size"})},U=`
${(0,d.$S)(e,o,t,O)}

<hr>

${k??""}

${k&&I?"<hr>":""}

<table>
  ${a?`
  <tr>
    <td><strong>${P}</strong>: ${x}</td>
    <td>${a}</td>
  </tr>`.trim():""}
  ${r?`
  <tr>
    <td><strong>${M}</strong>: ${x}</td>
    <td><span title="${r.tooltipTitle}">${r.displayText}</span></td>
  </tr>`.trim():""}
  ${N?`
  <tr>
    <td><strong>${F}</strong>: ${x}</td>
    <td>${N}</td>
  </tr>`.trim():""}
</table>

${_}

${D}
`;return(0,d.G7)(U)},function(){var e=this,t=arguments;return new Promise(function(n,o){var i=C.apply(e,t);function a(e){g(i,n,o,a,r,"next",e)}function r(e){g(i,n,o,a,r,"throw",e)}a(void 0)})})()})({name:F,path:D,lowerEntryType:i,translatedEntryType:(O=i,x=S,N=C,o=(O?N[O]:void 0)??N.table_or_view,x.formatMessage(o)),comment:M.comment??void 0,owner:b,lastUpdated:k,bytes:I,files:w,panelType:a,intl:S,includeJumpToTableLink:A,securableKind:E,catalogVirtualTableType:P})}let B="column"===t.parseType?((e,t)=>{if(e.primaryKey)return t.formatMessage({id:"kAyhM7",defaultMessage:"Primary key"});if(e.foreignKeys)return t.formatMessage({id:"uFsBa5",defaultMessage:"Foreign key"});if(e.partition)return t.formatMessage({id:"bFoaoZ",defaultMessage:"Partition key"});if(e.clusterby)return t.formatMessage({id:"yQZqkG",defaultMessage:"Clustered key"})})(M,S):void 0;return yield(0,d.QP)({name:F,path:D,entryType:U,parseType:t.parseType,comment:M.comment??void 0,baseUrl:o,keyType:B,maybeTranslatedOpenCatalog:S.formatMessage({id:"J6lCRK",defaultMessage:"Open in Catalog Explorer"}),enableV2:!0})}catch(e){return{error:`Error fetching catalog suggestion details simplified: ${e?.message??e}`}}})())({value:e,details:t,connector:N,baseUrl:a,panelType:S,intl:_,includeJumpToTableLink:k});if("view"===t.detailsType)return(0,d.uk)(t);if("querySnippet"===t.detailsType){var x;return(x=function*(){let e=u.Om.query_snippet,n=T(t.description);return`
<div>
  <table>
    <tr>
      <td>
        <img src="data:image/svg+xml;base64,${e}"
            title="query snippet" alt="query snippet" width="30" height="30" />
        &nbsp;
      </td>
      <td>
        <h5>${t.name}</h5>
      </td>
    </tr>
  </table>
  
  <blockquote>
    <pre><code>${t.snippet}</code></pre>
  </blockquote>

  <table>
    <tr>
      <td>${n}</td>
    </tr>
  </table>

</div>
`.trim()},function(){var e=this,t=arguments;return new Promise(function(n,o){var i=x.apply(e,t);function a(e){A(i,n,o,a,r,"next",e)}function r(e){A(i,n,o,a,r,"throw",e)}a(void 0)})})()}if("volume"===t.detailsType&&((0,O.M)()||(0,O.k)()))return(({details:e,connector:t,baseUrl:n,intl:o})=>L(function*(){try{let i,[a,r,s]=e.path;if(e.prefetched)i=e.prefetched?.comment;else{let e=t.catalogApi.value.getVolumeDetails;if(!e)return{error:"Volume details not available"};i=(yield e(a,r,s)).comment}return(0,d.QP)({name:s,path:e.path,entryType:"volume",parseType:"volume",comment:i,baseUrl:n,maybeTranslatedOpenCatalog:o.formatMessage({id:"J6lCRK",defaultMessage:"Open in Catalog Explorer"}),enableV2:!0})}catch{return{error:"Error fetching volume details."}}})())({details:t,connector:N,baseUrl:a,intl:_});return{error:"Unknown suggestion details type"}},function(){var e=this,t=arguments;return new Promise(function(n,o){var i=I.apply(e,t);function a(e){x(i,n,o,a,r,"next",e)}function r(e){x(i,n,o,a,r,"throw",e)}a(void 0)})})()}},192072:(e,t,n)=>{n.d(t,{p:()=>h});var o=n(886100),i=n(22191),a=n(169750),r=n(719785);class s{key=a.E.ENVIRONMENT;convert(e){let t=[],{cloudId:n,sparkVersion:o}=e[this.key]?.rawContext||{},i=[n?`User's cloud is ${n}`:"",o?`Attached cluster spark version is ${o}`:""];return t.push(new r.y({name:"environment",content:i.filter(e=>e).join(". "),type:"text",retriever:"environment_context"})),t}}class l{key=a.E.NEIGHBOR_CODE;convert(e){let t=[];return t.push(new r.y({name:"previousCodeBlocks",content:e[this.key]?.rawContext?.previousCodeBlocks||[],type:"cell",retriever:"neighbor_code"})),t.push(new r.y({name:"followingCodeBlocks",content:e[this.key]?.rawContext?.followingCodeBlocks||[],type:"cell",retriever:"neighbor_code"})),t}}class c{userContext;key=a.E.NOTEBOOK_CELLS;constructor(e){this.userContext=e}convert(e){let t=[],n=e[this.key]?.rawContext?.userNotebookCells?.filter(e=>e.notebookId&&e.commandId&&e.commandHighlight&&e.language===this.userContext.language);return n?.forEach(e=>{t.push(new r.y({name:e.name??"",content:e.commandHighlight??"",type:"python"===e.language?"python":"query",retriever:"notebook_cells"}))}),t}}class u{key=a.E.NOTEBOOK_SPECIFIC;convert(e){let t=[];return e[this.key]?.rawContext?.notebookDatasetsInfos?.forEach(e=>{let n={typeStr:e.typeStr,name:e.name,columns:e.schema.fields.map(e=>({name:e.name,type:"string"==typeof e.type?e.type:e.type.type}))},o=`${n.typeStr.includes("pandas")?"Pandas":"Spark"} DataFrame '${n.name}', columns = [${n.columns.map(e=>`'${e.name}': ${e.type}`).join(", ")}]`;t.push(new r.y({name:n.name??"",content:o,type:"variable",retriever:"notebook_specific"}))}),t}}class d{key=a.E.RELEVANT_TABLE;convert(e){let t=[];return e[this.key]?.rawContext?.CurrentCodeTableMap?t.push(...m(e[this.key]?.rawContext?.CurrentCodeTableMap||{},"relevant_table")):e[this.key]?.rawContext?.favoriteTableMap?t.push(...m(e[this.key]?.rawContext?.favoriteTableMap||{},"favorite_table")):e[this.key]?.rawContext?.NeighborCodeTableMap&&t.push(...m(e[this.key]?.rawContext?.NeighborCodeTableMap||{},"neighbor_code_table")),t}}function m(e,t){let n=[];for(let o in e)if(e.hasOwnProperty(o)){let{table:i}=function(e){let{catalog:t,schema:n,entity:o,metadata:i,columns:a}=e,r=a.length<=30,s=100-a.length,l=a.length-100,c=0,u=0,d=a.slice(0,100).map(e=>{if(e.detailedColumnInfo?.fields?.length>1){s-=e.detailedColumnInfo.fields.length-1;let t=e.detailedColumnInfo.fields.length-s;t>0&&(u+=t)}let t=s>0&&e.detailedColumnInfo?.type_text||e.type,n=e.name,o=r&&(e.comment?.length??0)>200;o&&c++;let i=o?`${e.comment?.slice(0,200)}...`:e.comment;return{name:n,type:t,comment:r&&i||"",tags:e.tags}}),m=a.filter(e=>e.partition).map(e=>`${e.name}`),p=(i.comment?.length??0)>300,f=i.comment?p?`${i.comment.slice(0,300)}...`:i.comment:"";return{table:{catalog:t,schema:n,entity:o,columns:d,comment:f,partitions:m,foreignKeys:e.foreignKeysInfo?.map(e=>{let t=e.columns.slice(0,10),n=e.toTableColumns.slice(0,10);return{name:e.name,columns:t,toTable:e.toTable,toTableColumns:n}})},profile:{hasIncludeComments:!0,hasComments:(i.comment?.length??0)>0,columnCount:a.length,hasTruncatedTableComment:p,truncatedColumnsCount:l,truncatedColumnCommentsCount:c,truncatedNestedColumnsCount:u}}}(e[o]);n.push(new r.y({name:"table schema",content:i,type:"table",retriever:t}));let a=function(e,t,n){let{topQueries:o}=e;return o.filter(e=>e.content).map(e=>{let{content:o}=e;return new r.y({name:`Popular Queries run on table ${n.catalog}.${n.schema}.${n.entity} before`,content:o,type:"query",retriever:t})})}(e[o],t,i);for(let s of(n.push(...a),e[o].topJoins)){let{catalogName:e,schemaName:o,tableName:a}=s,l=`${i.catalog}.${i.schema}.${i.entity} JOIN ${e}.${o}.${a}`;n.push(new r.y({name:`Popular join on ${i.catalog}.${i.schema}.${i.entity} before`,content:l,type:"query",retriever:t}))}}return n}class p{userContext;key=a.E.AUTOCOMPLETE;constructor(e){this.userContext=e}convert(e){let t=[],n=e[this.key]?.rawContext?.sqlFunction;if(n&&this.userContext.editorFunctions[n]){let e=this.userContext.editorFunctions[n],o=(e.examples??[]).join("\n").replace(/^```sql\s*/,"").replace(/```$/,"");t.push(new r.y({name:e.name??"",content:o.slice(0,1e3),retriever:"autocomplete",type:"query"}))}return t}}class f{key=a.E.USER_QUERIES;convert(e){let t=[];return e[this.key]?.rawContext?.userQueries?.forEach(e=>{t.push(new r.y({name:e.queryName,content:e.queryFragment.replace(/<dbtag1>/g,""),type:"query",retriever:"user_queries"}))}),t}}function h(e,t,n){let a=[];for(let n in e)if(e.hasOwnProperty(n)){let o={autocomplete:new p(t),user_queries:new f,neighbor_code:new l,notebook_specific:new u,relevant_table:new d,environment_context:new s,notebook_cells:new c(t)}[n],i=o?.convert(e)||[];a.push(...i)}else o.iT.sev3(i.Es.Assistant,"ContextComposer flatten() issue : arg contextBuildingResults raws",{context:JSON.stringify(e[n]?.rawContext),key:n});return a}},205602:(e,t,n)=>{n.d(t,{E:()=>o});class o{userContext;constructor(e){this.userContext=e}optimize(e){let t={name:"QueryTrimmerNoActiveTable",optimizations:[]},n=e=>{let t=[],n=[];return e.chunks.forEach(e=>{let o="string"==typeof e.content?e.content:JSON.stringify(e.content);0===Object.keys(this.userContext.activeCellTables).length||Object.values(this.userContext.activeCellTables).some(e=>o.toLowerCase().includes(e.entity.toLowerCase()))?n.push(e):t.push(e)}),{keptChunks:n,filteredChunks:t}};if(e.query){let{keptChunks:o,filteredChunks:i}=n(e.query);e.query.chunks=o,i.length>0&&t.optimizations?.push({name:"QueryTrimmerNoActiveTable",rerank:i.map(e=>e.name)})}return t}}},207462:(e,t,n)=>{n.a(e,async(e,o)=>{try{n.d(t,{$:()=>s});var i=n(655473),a=n(449633),r=e([a]);a=(r.then?(await r)():r)[0];class s{optimize(e){let t=a.VU,n=[];Object.keys(e).forEach(t=>{e[t]&&n.push(e[t])});let o=new i.O(t,{user_queries:.5,relevant_table:.4}).optimize(n);return Object.assign(o.profile,{fittedChunks:o.fittedChunks.map(e=>e.chunks.map(t=>`${t.name} - ${t.contentType} / ${t.retrieverType} (${e.chunks.length})`)),nonFittedChunks:o.nonFittedChunks.map(e=>e.chunks.map(t=>`${t.name} - ${t.contentType} / ${t.retrieverType} (${e.chunks.length})`))}),{name:"SimplePacker",summary:o.profile}}}o()}catch(e){o(e)}})},208410:(e,t,n)=>{n.a(e,async(e,o)=>{try{n.d(t,{$5:()=>r.$5,$9:()=>s.$9,$T:()=>u.$T,$r:()=>s.$r,A3:()=>L.A3,B4:()=>s.B4,Bj:()=>u.Bj,Cn:()=>u.Cn,D8:()=>u.D8,DV:()=>r.DV,De:()=>c.De,Dp:()=>m.Dp,Ei:()=>E.E,El:()=>l.El,FB:()=>r.FB,GD:()=>l.GD,Gc:()=>r.Gc,Gj:()=>s.Gj,Gv:()=>s.Gv,H8:()=>s.H8,I0:()=>s.I0,IV:()=>p.I,Ix:()=>r.Ix,JE:()=>s.JE,KE:()=>l.KE,KR:()=>f.K,Ko:()=>u.Ko,L0:()=>s.L0,LT:()=>r.LT,Lh:()=>r.Lh,Lo:()=>u.Lo,MH:()=>C.MH,Md:()=>m.tS,NC:()=>u.NC,NF:()=>g.NF,NL:()=>g.NL,Nq:()=>g.Nq,O3:()=>u.O3,Om:()=>r.Om,PM:()=>T.PM,Q7:()=>r.Q7,Qj:()=>r.Qj,SJ:()=>r.SJ,Sf:()=>r.Sf,Sz:()=>r.Sz,T7:()=>r.T7,T8:()=>m.T8,U9:()=>i.U9,V$:()=>i.V$,VC:()=>s.VC,VK:()=>a.VK,VN:()=>s.VN,VO:()=>c.VO,Vo:()=>m.Vo,X4:()=>r.X4,XH:()=>u.XH,XV:()=>u.XV,XX:()=>i.XX,ZU:()=>s.ZU,Zn:()=>b.Zn,aA:()=>i.aA,aG:()=>i.aG,aJ:()=>s.aJ,an:()=>i.an,bC:()=>r.bC,c5:()=>s.c5,ce:()=>T.ce,ck:()=>L.Ju,d0:()=>i.d0,dJ:()=>p.d,dg:()=>s.dg,fk:()=>i.fk,fo:()=>h.f,gP:()=>c.gP,gn:()=>l.gn,iH:()=>l.iH,iI:()=>g.iI,ih:()=>L.vA,ir:()=>h.i,j2:()=>c.j2,jC:()=>i.jC,k$:()=>r.k$,kG:()=>b.kG,lv:()=>T.lv,m8:()=>d.m,mm:()=>r.mm,ms:()=>g.ms,mx:()=>r.mx,n7:()=>g.n7,o$:()=>m.o$,oH:()=>r.oH,oN:()=>r.oN,oY:()=>i.oY,oq:()=>a.oq,rU:()=>m.rU,rX:()=>i.rX,r_:()=>S.r_,rq:()=>a.rq,sL:()=>a.sL,so:()=>s.so,sz:()=>r.sz,t2:()=>s.t2,tS:()=>r.tS,v5:()=>b.v5,wU:()=>a.wU,wr:()=>l.wr,xQ:()=>s.xQ,xh:()=>m.xh,y4:()=>s.y4,yq:()=>s.yq,yx:()=>i.yx,zA:()=>r.zA,zE:()=>y.z,zW:()=>r.zW});var i=n(153851),a=n(215011),r=n(195703),s=n(179049),l=n(133562),c=n(673100),u=n(248604),d=n(867854),m=n(460868),p=n(596185),f=n(799620),h=n(984470),g=n(833019),T=n(739757),E=n(495507),b=n(598472),y=n(967968),S=n(383576),L=n(648877),C=n(158138),A=e([i,r,s,l,c,u,d,m,f,T,b,y,S,C]);[i,r,s,l,c,u,d,m,f,T,b,y,S,C]=A.then?(await A)():A,o()}catch(e){o(e)}})},234722:(e,t,n)=>{n.d(t,{O:()=>o});class o{userContext;MAX_TABLE_COMMENT_LENGTH=100;MAX_COLUMN_COMMENT_LENGTH=45;constructor(e){this.userContext=e}optimize(e){let t={name:"TableSchemasCommentTrimmer",optimizations:[]},n=[];return e.table?.chunks.forEach(e=>{if(e.content.columns){let t=e.content;t.comment.length>this.MAX_TABLE_COMMENT_LENGTH&&(t.comment=t.comment.slice(0,this.MAX_TABLE_COMMENT_LENGTH)+"...",n.push(t.entity)),t.columns.forEach(e=>{e.comment.length>this.MAX_COLUMN_COMMENT_LENGTH&&(e.comment=e.comment.slice(0,this.MAX_COLUMN_COMMENT_LENGTH)+"...",n.includes(t.entity)||n.push(t.entity))})}}),n.length>0&&t.optimizations?.push({name:"TableSchemasCommentTrimmer",rerank:n}),t}}},246123:(e,t,n)=>{n.a(e,async(e,o)=>{try{n.d(t,{l:()=>r});var i=n(449633),a=e([i]);i=(a.then?(await a)():a)[0];class r{codeblockLimit;allLanguages;constructor({codeblockLimit:e=2,allLanguages:t=!1}={}){this.codeblockLimit=e,this.allLanguages=t}optimize(e){let t=Math.max(i.VU-Object.keys(e).filter(t=>"codePrefix"!==t&&"codeSuffix"!==t&&"codeCellsBefore"!==t&&"codeCellsAfter"!==t&&e[t]&&e[t].chunks.length>0).reduce((t,n)=>t+(e[n]?.format().length??0),0),0),n=Math.floor((i.zS+t)*(100-i.YB)/100),o=i.zS+t-n,a=e.codePrefix?.chunks[0].contentType||"python",r=[],c=e.codeCellsBefore?.chunks||[],{previousCodeBlocks:u,prefixText:d,remainingBuffer:m}=s(e.codePrefix?.format()||"",c.filter(e=>"string"==typeof e.content),n);c.forEach((e,t)=>{u.find(t=>t===e)||r.push(`Cell ${t+1}`)});let p=e.codeCellsAfter?.chunks||[],{followingCodeBlocks:f,suffixText:h,remainingBuffer:g}=l(e.codeSuffix?.format()||"",p.filter(e=>"string"==typeof e.content),m+o);return p.forEach((e,t)=>{f.find(t=>t===e)||r.push(`Cell ${t+1}`)}),e.codePrefix&&e.codePrefix.chunks[0]&&(e.codePrefix.chunks[0].content=d),e.codeSuffix&&e.codeSuffix.chunks[0]&&(e.codeSuffix.chunks[0].content=h),e.codeCellsBefore&&(e.codeCellsBefore.chunks=u.filter(e=>this.allLanguages||e.contentType===a).filter(e=>"string"==typeof e.content&&e.content.trim().length>0).slice(-this.codeblockLimit).map(e=>({name:e.name||"",content:e.content,contentType:e.contentType,retrieverType:e.retrieverType,documentType:e.documentType}))),e.codeCellsAfter&&(e.codeCellsAfter.chunks=f.filter(e=>this.allLanguages||e.contentType===a).filter(e=>"string"==typeof e.content&&e.content.trim().length>0).slice(0,this.codeblockLimit).map(e=>({name:e.name||"",content:e.content,contentType:e.contentType,retrieverType:e.retrieverType,documentType:e.documentType}))),{name:"CodeCellsTruncater",summary:{codeQuotaRemaining:g,codeQuotaLimit:n+o,ragQuotaLimit:i.VU},optimizations:r.length>0?[{name:"filteredOutCells",rerank:r}]:[]}}}let s=(e,t,n)=>{if(e.length>=n)return{previousCodeBlocks:[],prefixText:e.substring(e.length-n),remainingBuffer:0};let o=[],i=e.length;for(let e=t.length-1;e>=0;e--){let a=t[e].content.trim().length;if(0!==a)if(i+a<=n)o.unshift(t[e]),i+=a;else{let r=n-i,s=t[e].content.slice(a-r);""!==s.trim()&&o.unshift({name:t[e].name,content:s,contentType:t[e].contentType,retrieverType:t[e].retrieverType,documentType:t[e].documentType}),i+=r;break}}return{previousCodeBlocks:o,prefixText:e,remainingBuffer:n-i}},l=(e,t,n)=>{if(e.trimEnd().length>=n)return{followingCodeBlocks:[],suffixText:e.substring(0,n),remainingBuffer:0};let o=[],i=e.trimEnd().length;for(let e=0;e<t.length;e++){let a=t[e].content.trim().length;if(0!==a)if(i+a<=n)o.push(t[e]),i+=a;else{let a=n-i,r=t[e].content.slice(0,a);""!==r.trim()&&o.push({name:t[e].name,content:r,contentType:t[e].contentType,retrieverType:t[e].retrieverType,documentType:t[e].documentType}),i+=a;break}}return{followingCodeBlocks:o,suffixText:e.trimEnd(),remainingBuffer:n-i}};o()}catch(e){o(e)}})},266289:(e,t,n)=>{n.d(t,{X:()=>o});function o(e){return{getOptions:()=>({guides:e})}}},307543:(e,t,n)=>{function o(e,t,n,o,i,a,r){try{var s=e[a](r),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(o,i)}function i(e){return function(){var t=this,n=arguments;return new Promise(function(i,a){var r=e.apply(t,n);function s(e){o(r,i,a,s,l,"next",e)}function l(e){o(r,i,a,s,l,"throw",e)}s(void 0)})}}n.d(t,{M:()=>r,y:()=>a});let a=(e,t,n,o)=>i(function*(){let{catalog:i,schema:a,table:r,fullname:s}=e,{schema:l}=(yield n()?.getTableColumns?.(i,a,r))||{schema:[]},{metadata:c}=(yield n()?.getTableMetadata?.(i,a,r))||{metadata:{}};Array.from(new Set(JSON.parse(c?.properties?.clusteringColumns||"[]").map(e=>Array.isArray(e)?e.join("."):String(e)).flat())).forEach(e=>{l.forEach(t=>{t.name===e&&(t.clusterby=!0)})});let u=l.filter(e=>e.originalColumnData?.partition_index!==void 0||e.partition||e.clusterby),d=[];return u?.forEach(n=>{t.push(s+"."+n.name),e.alias&&t.push(e.alias.fullname+"."+n.name),d.push(n)}),(!o.current[s]||0===o.current[s].length&&d.length>0)&&(o.current[s]=[...d],e.alias&&(o.current[e.alias.fullname]=[...d])),t})(),r=(e,t,n,o)=>i(function*(){let i=e();if(!i||""===t||""===n)return[];return o.current=i.getDatabaseDetails?yield i.getDatabaseDetails(t,n):{},[]})()},329619:(e,t,n)=>{n.d(t,{F:()=>o,P:()=>a});let o=/\r\n|\n|\r/g,i=/^\s+/,a=e=>{let t=0,n=e.statement.match(i);if(n){let e=n[0].match(o);e&&(t=e.length)}return t}},330459:(e,t,n)=>{n.d(t,{D:()=>i});var o=n(956935);function i(e,t){let n=t?t(e):e?"databricks-unified-dark":"databricks-unified-light";return{getOptions:()=>({theme:n}),getCss:()=>(0,o.AH)("& .monaco-editor.vs-dark .suggest-details code{color:var(--vscode-editorSuggestWidget-foreground);opacity:0.7;}")}}},335233:(e,t,n)=>{n.a(e,async(e,o)=>{try{n.d(t,{S:()=>h});var i=n(441535),a=n(886100),r=n(22191),s=n(192072),l=n(749379),c=n(134779),u=n(812686),d=n(152296),m=n(40051),p=n(156753),f=e([l]);l=(f.then?(await f)():f)[0];class h{userContext;contextPlan;contextBuildingResults;constructor({userContext:e,contextPlan:t,contextBuildingResults:n}){this.userContext=e,this.contextPlan=t,this.contextBuildingResults=n}build(){let e="",t={chunks:{},profile:{plan:this.contextPlan,summary:{language:this.userContext.language,didUseDataflowContext:this.userContext.didUseDataflowContext},optimizations:[]},apiChunks:{chunks:[]}};try{this.getIntent(t.profile);let n=this.flatten(),o=this.getContextPlan(this.contextPlan);t.chunks=this.chunkDocuments(n,o),this.compile(t.chunks,o,t.profile),e=o.formatters[0].format(t.chunks,t.profile),t.apiChunks=this.getProfile(t.chunks)}catch(e){(0,i.W)("databricks.fe.editor.enableAssistantPromptDebug",!1)&&console.log("ContextComposer build() issue",e)}return{prompt:e,rerank:t}}getContextPlan(e="originalPlan"){let t=(0,l.K)(this.userContext);return t[e]||(a.iT.sev3(r.Es.Assistant,"ContextComposer getContextPlan() issue",`ContextPlan ${e} not found`),e="originalPlan"),t[e]}compile(e,t,n){n.summary.preOptimizationChunks=(0,c.W)(e);try{t.optimizers.forEach(t=>{let o=t.optimize(e);o.summary&&Object.assign(n.summary,o.summary),o.optimizations&&o.optimizations.length>0&&n.optimizations.push(o)})}catch(e){a.iT.sev3(r.Es.Assistant,"ContextComposer compile() issue",e)}n.summary.postOptimizationChunks=(0,c.W)(e),n.summary.postOptimizationChunksDiff=(0,c.A)(n.summary.preOptimizationChunks,n.summary.postOptimizationChunks)}chunkDocuments(e,t){return t.chunkers.chunk(e,this.userContext)}flatten(){return(0,s.p)(this.contextBuildingResults,this.userContext,this.contextPlan)}dump(){let e=`arg userContext: ${JSON.stringify(this.userContext)}
`;for(let t in this.contextBuildingResults)this.contextBuildingResults.hasOwnProperty(t)&&(e+=`arg contextBuildingResults raws for ${t}: ${JSON.stringify(this.contextBuildingResults[t]?.rawContext)}
arg contextBuildingResults print for ${t}: ${JSON.stringify(this.contextBuildingResults[t]?.prompt)}
`);return e}getIntent(e){let{language:t,codePrefix:n,codeSuffix:o}=this.userContext;if("sql"===t){let t=(0,p.H)(n+o,n.length);e.summary.sqlIdentifiers=t}else{let t=(0,m.Z)(n+o);e.summary.pythonIdentifiers=t}return e}getProfile(e){(0,u.k)(e);let t=JSON.parse(JSON.stringify(e));return(0,d.e)(t)}}o()}catch(e){o(e)}})},336312:(e,t,n)=>{n.d(t,{B:()=>a});class o{time;count;next=null;prev=null;constructor(e,t){this.time=e,this.count=t}}class i{head=null;tail=null;_size=0;pushBack(e,t){let n=new o(e,t);this.tail?(this.tail.next=n,n.prev=this.tail,this.tail=n):(this.tail=n,this.head=this.tail),this._size++}popFront(){if(!this.head)return null;let e=this.head;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this._size--,e}peekFront(){return this.head}peekBack(){return this.tail}size(){return this._size}}class a{_queue=new i;_maxSize;constructor(e){this._maxSize=60*e}addToQueue(e){let t=this._queue.peekBack();for(t&&t.time===e?t.count++:this._queue.pushBack(e,1);this._queue.size()>this._maxSize;)this._queue.popFront()}getTotalCounts(e){let t=Math.floor(Date.now()/1e3),n=0;for(;this._queue.peekFront()&&t-this._queue.peekFront().time>e;)this._queue.popFront();let o=this._queue.peekFront();for(;o;)n+=o.count,o=o.next;return n}convertToArr(e=600){let t=Math.floor(Date.now()/1e3);for(;this._queue.peekFront()&&t-this._queue.peekFront().time>e;)this._queue.popFront();let n=[],o=this._queue.peekFront();for(;o;)n.push({time:o.time,count:o.count}),o=o.next;return n}}},342254:(e,t,n)=>{n.a(e,async(e,o)=>{try{n.d(t,{CE:()=>u,L$:()=>c,aL:()=>l,cf:()=>s});var i=n(214056),a=n(799620),r=e([i,a]);[i,a]=r.then?(await r)():r;let c="editor.action.optimizeTable",u="editor.action.optimizeTable.ignore",d=(e,t,n)=>(0,i.Q)().getModelMarkers({owner:`${n}.optimize`}).some(t=>t.startColumn===e.startColumn&&t.startLineNumber===e.startLineNumber&&t.endColumn===e.endColumn&&t.endLineNumber===e.endLineNumber)?[{title:"Optimize",kind:"quickfix",command:{id:c,title:"Optimize",arguments:[e,t,"sql","Fix-Optimize-Table"]}},{title:"Ignore optimization",kind:"quickfix",command:{id:u,title:"Ignore optimization",arguments:[e,t,"sql","Ignore-Optimize-Table"]}}]:[];function s(){return(0,a.K)("registerCodeActionProvider","sql",e=>({provideCodeActions:(t,n)=>{let o=e(t);if(!o||!t)return;let{language:i,modelId:a,moduleName:r,editorId:s}=o,l=t.isDisposed()||t.id!==a;if(l||l||i!==t.getLanguageId())return{actions:[],dispose:()=>{}};return{actions:d(n,r,s),dispose:()=>{}}}}))}function l(){return(0,a.K)("registerCodeActionProvider","dbsql",e=>({provideCodeActions:(t,n)=>{let o=e(t);if(!o||!t)return;let{language:i,modelId:a,moduleName:r,editorId:s}=o,l=t.isDisposed()||t.id!==a;if(l||l||i!==t.getLanguageId())return{actions:[],dispose:()=>{}};return{actions:d(n,r,s),dispose:()=>{}}}}))}o()}catch(e){o(e)}})},345652:(e,t,n)=>{n.a(e,async(e,o)=>{try{n.d(t,{fn:()=>g,k$:()=>T,pY:()=>E,sn:()=>p});var i=n(410268),a=n(441535),r=n(335233),s=n(449633),l=n(708113),c=n(214056),u=e([r,s,c]);function d(e,t,n,o,i,a,r){try{var s=e[a](r),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(o,i)}[r,s,c]=u.then?(await u)():u;let m=[" ","\n","	","(",")","[","]","{","}",",",";","'",'"',"`"],p=({position:e,context:t,model:n})=>{let o=n.getWordUntilPosition(e),a=(0,c.Q)().makeRange(e.lineNumber,o.startColumn,e.lineNumber,o.endColumn),r=t.selectedSuggestionInfo?.range,l=r?(0,c.Q)().makePosition(r.startLineNumber,r.startColumn):e,u=r?(0,c.Q)().makePosition(r.endLineNumber,r.endColumn):e,d=n.getValueInRange((0,c.Q)().makeRange(l.lineNumber,1,l.lineNumber,l.column)),m=n.getValueInRange((0,c.Q)().makeRange(1,1,l.lineNumber,l.column)),p=(0,i.Ko)(u.lineNumber,n.getLineCount())?n.getValueInRange((0,c.Q)().makeRange(u.lineNumber,u.column,u.lineNumber,n.getLineLength(u.lineNumber)+1)):"",g=n.getValueInRange((0,c.Q)().makeRange(u.lineNumber,u.column,n.getLineCount(),n.getLineLength(n.getLineCount())+1)),T=t.selectedSuggestionInfo?.text??"",E=n.getWordUntilPosition(l).word;return{shouldSuggest:(f(m,T,n.getValue())||t.triggerKind===(0,c.Q)().InlineCompletionTriggerKind.Explicit)&&""!==n.getValue()&&void 0!==h(p),preCursorLineText:(0,s.r1)(d),preCursorText:(0,s.r1)(m),postCursorLineText:p,postCursorText:g,completionPrefix:E,wordToReplace:o.word,currentWidgetCompletion:T,rangeToReplace:a}},f=(e,t,n)=>{let o=e.trim();if(o.length<20&&(o=(0,s.r1)(o).trim()),""===(o+t).trim())return!1;let i=n.trim();if(i.length<20&&(i=(0,s.r1)(i).trim()),""===i)return!1;return!0},h=e=>{if(""===e.trim())return!1;if(m.includes(e[0]))return!0},g=({ctx:e,prefixText:t,suffixText:n,source:o,lakesenseTraceId:i,model:c,currentWidgetCompletion:u,position:m})=>{var p;return(p=function*(){let d={tablePrompt:"",userQueriesPrompt:"",userNotebookCellsPrompt:"",notebookSpecificPrompt:"",previousCodeBlocks:[],followingCodeBlocks:[],contextObject:{},didUseDataflowContext:!1,contextBuildingResults:{}},p="dbsql"===e.language?"sql":e.language,f=(0,s.qM)(t,p),{message:h}=yield(0,s.gQ)({text:f,language:p,source:o,ctx:e}),g={code:c.getValue(),language:p},T={cursorLine:m.lineNumber,cursorColumn:m.column};if(e.getGhostTextContextRef&&e.getGhostTextContextRef.current){let t=yield e.getGhostTextContextRef.current(i,h,""!==f&&"python"===p?{code:f,language:"sql"}:g,T,u);Object.assign(d,t)}let E=yield l.default.getBuiltInFunctions("dbsql"),b=d.contextBuildingResults.relevant_table?.rawContext?.CurrentCodeTableMap||{},y={language:p,codePrefix:t,codeSuffix:n,didUseDataflowContext:d.didUseDataflowContext,activeCellTables:b,contextObject:d.contextObject,editorFunctions:E},{rerank:S}=new r.S({userContext:y,contextPlan:"originalPlanStructuredOnly",contextBuildingResults:d.contextBuildingResults}).build(),L=S.apiChunks;return(0,a.W)("databricks.fe.editor.enableAssistantPromptDebug",!1)&&(console.log(`Profile:
${JSON.stringify(S.profile,null,2)}`),console.log("Prompt:\n")),{prompt:"",didUseDataflowContext:d.didUseDataflowContext,prefix:"",suffix:"",contextMetadata:{activeCellPrompt:0,remainingBuffer:0,trimmedPrefixText:0,trimmedSuffixText:0},promptBuildingContent:L}},function(){var e=this,t=arguments;return new Promise(function(n,o){var i=p.apply(e,t);function a(e){d(i,n,o,a,r,"next",e)}function r(e){d(i,n,o,a,r,"throw",e)}a(void 0)})})()},T=(e,t,n)=>{if(e.length>=n)return{previousCodeBlocks:[],prefixText:e.substring(e.length-n),remainingBuffer:0};let o=[],i=e.length;for(let e=t.length-1;e>=0;e--){let a=t[e].code.trim().length;if(0!==a)if(i+a<=n)o.unshift(t[e]),i+=a;else{let r=n-i,s=t[e].code.slice(a-r);""!==s.trim()&&o.unshift({code:s,language:t[e].language});break}}return{previousCodeBlocks:o,prefixText:e,remainingBuffer:n-i}},E=(e,t,n)=>{if(e.trimEnd().length>=n)return{followingCodeBlocks:[],suffixText:e.substring(0,n),remainingBuffer:0};let o=[],i=e.trimEnd().length;for(let e=0;e<t.length;e++){let a=t[e].code.trim().length;if(0!==a)if(i+a<=n)o.push(t[e]),i+=a;else{let a=n-i,r=t[e].code.slice(0,a);""!==r.trim()&&o.push({code:r,language:t[e].language}),i+=a;break}}return{followingCodeBlocks:o,suffixText:e.trimEnd(),remainingBuffer:n-i}};o()}catch(e){o(e)}})},347054:(e,t,n)=>{n.a(e,async(e,o)=>{try{n.d(t,{GD:()=>c,wr:()=>l});var i=n(214056),a=n(788899),r=e([i]);function s(e,t,n,o,i,a,r){try{var s=e[a](r),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(o,i)}i=(r.then?(await r)():r)[0];let u=a.language,d=a.conf;function l(e=!1){let t=(0,i.Q)().getLanguages().some(e=>"sql"===e.id);t||((0,i.Q)().register({id:"sql",extensions:[".sql"],aliases:["SQL"]}),(0,i.Q)().setMonarchTokensProvider("sql",u),(0,i.Q)().setLanguageConfiguration("sql",d)),(!t||e)&&((0,i.Q)().setMonarchTokensProvider("sql",u),(0,i.Q)().setLanguageConfiguration("sql",d))}function c(e=!1){return{setup:()=>{var t;return(t=function*(){l(e)},function(){var e=this,n=arguments;return new Promise(function(o,i){var a=t.apply(e,n);function r(e){s(a,o,i,r,l,"next",e)}function l(e){s(a,o,i,r,l,"throw",e)}r(void 0)})})()}}}o()}catch(e){o(e)}})},365937:(e,t,n)=>{n.d(t,{w:()=>r});var o=n(328622);function i(e,t,n,o,i,a,r){try{var s=e[a](r),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(o,i)}let a=null,r=e=>{var t;return(t=function*(){let t=null;try{let i=(a||(a=new Worker(new URL("/"+n.u(33927),n.b),{name:"metric-views-autocomplete"})),a),{request:r,dispose:s}=(0,o.S)({worker:i,methodHandlers:{},workerType:"MetricViewsAutocomplete"});return t=s,yield r({method:"getAutocompleteResults",params:[e]})}catch(e){throw e}finally{t?.()}},function(){var e=this,n=arguments;return new Promise(function(o,a){var r=t.apply(e,n);function s(e){i(r,o,a,s,l,"next",e)}function l(e){i(r,o,a,s,l,"throw",e)}s(void 0)})})()}},385344:(e,t,n)=>{function o(e,t,n,o,i,a,r){try{var s=e[a](r),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(o,i)}function i(){var e;return(e=function*(){yield(()=>{let e=()=>n.e(89815).then(n.bind(n,489815));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(489815,"monaco-sql-languages/esm/languages/pgsql/pgsql.contribution","lazy",e);return e()})()},function(){var t=this,n=arguments;return new Promise(function(i,a){var r=e.apply(t,n);function s(e){o(r,i,a,s,l,"next",e)}function l(e){o(r,i,a,s,l,"throw",e)}s(void 0)})})()}n.d(t,{_:()=>i})},387897:(e,t,n)=>{n.a(e,async(e,o)=>{try{n.d(t,{Q:()=>r});var i=n(449633),a=e([i]);i=(a.then?(await a)():a)[0];class r{context;constructor(e){this.context=e}format(e,t){let{trimmedContextPrompt:n,remainingBuffer:o}=this.getTrimmedContextPrompt(`<jupyter_text>
`+Object.keys(e).filter(t=>"codePrefix"!==t&&"codeSuffix"!==t&&"codeCellsBefore"!==t&&"codeCellsAfter"!==t&&e[t]&&e[t].chunks.length>0).map(t=>`${e[t].format()}`).join("\n").split("\n").filter(e=>""!==e.trim()).map(e=>`${i.uM.get(this.context.language)??""}${e}`).join("\n"));t.summary.ragQuotaRemaining=o;let a=new Map([["header","<fim_prefix><jupyter_start><db_notebook>"],["source",`${i.uM.get(e.codePrefix.chunks[0].contentType??"")} Databricks notebook source`],["ragPrompt",`${n}`!=`<jupyter_text>
`?n:""],["codeCellsBefore",`${e.codeCellsBefore.chunks.map(e=>`<jupyter_code><db_${e.contentType}>${e.content}`).join("\n")}`],["codePrefixSuffix",`<jupyter_code><db_${e.codePrefix.chunks[0].contentType??"python"}>${e.codePrefix.format()}<fim_suffix>${e.codeSuffix.format()}`],["codeCellsAfter",`${e.codeCellsAfter.chunks.map(e=>`<jupyter_code><db_${e.contentType}>${e.content}`).join("\n")}`]]);return Array.from(a.values()).filter(e=>""!==e.trim()).join("\n")+"<fim_middle>"}getTrimmedContextPrompt=e=>{let t=e.trim();return{trimmedContextPrompt:t=t.substring(0,i.VU),remainingBuffer:i.VU-t.length}}}o()}catch(e){o(e)}})},394411:(e,t,n)=>{n.d(t,{U:()=>l});var o=n(668014),i=n(409331);let a={query:"These are some past SQL queries fragments used before:",table:"Here are the schemas of some existing tables:",variable:"Here are some DataFrames in the session:",python:"Here are some similar Notebook code cells:",text:"Here is the environment context:"};class r{format(e){let t=["relevant_table","favorite_table","neighbor_code_table"],n=e.chunks.filter(e=>"table"===e.documentType&&t.includes(e.retrieverType)),o=e.chunks.filter(e=>"table"!==e.documentType&&!t.includes(e.retrieverType));return`
## ${a[e.documents[0]?.type]??"Unknown Type"}

${n.map(e=>`- ${e.name}
\`\`\`${"text"===e.contentType?"":`${e.contentType}
`}
${new i.Q().format(e)}
\`\`\``).join(`

`)}

${o.map(e=>`- ${e.name}
\`\`\`${"text"===e.contentType?"":`${e.contentType}
`}
${"string"==typeof e.content?e.content.trim():e.content}
\`\`\``).join(`

`)}
`}}var s=n(719785);class l{chunk(e,t){let n,i,a={},l=(0,o.Kf)(t);l&&(a.errors=l);let c=["errors","environment_context","table","query","variable"];for(let t of(e.sort((e,t)=>{let n=c.indexOf(e.type),o=c.indexOf(t.type);return(-1===n?c.length:n)-(-1===o?c.length:o)}),e)){if("neighbor_code"===t.retriever){"followingCodeBlocks"===t.name?n=t:"previousCodeBlocks"===t.name&&(i=t);continue}if(!a[t.type]){let e=new r;a[t.type]=new s.v({name:t.type,document:t,formatter:e})}Array.isArray(t.content)||a[t.type]?.add({name:t.name,content:t.content,contentType:"variable"===t.type?"text":"sql",document:t})}let u=(0,o.Hl)(t,n,i);return a.codePrefix=u[0],a.codeSuffix=u[1],a.codeCellsBefore=u[2],a.codeCellsAfter=u[3],a}}},405269:(e,t,n)=>{n.d(t,{Q:()=>i});var o,i=((o={}).TEXT_COMPLETION="text_completion",o.NEXT_EDIT="next_edit",o.EMPTY="empty",o)},409331:(e,t,n)=>{n.d(t,{Q:()=>o});class o{format(e){let t=e.content,n=t.columns.map(e=>`\`${e.name}\` ${e.type}${e.comment?` COMMENT '${e.comment}'`:""}${e.tags.length>0?`(Tags: [${e.tags.join(",")})]`:""}`),o=t.comment?`COMMENT '${t.comment}'`:"",i=t.partitions.length?`PARTITIONED BY (${t.partitions.map(e=>`\`${e}\``).join(", ")})`:"",a=t.foreignKeys?.map(e=>{let t=e.columns.slice(0,5),n=e.toTableColumns.slice(0,5);return`CONSTRAINT \`${e.name}\` FOREIGN KEY (${t.join(", ")}) REFERENCES \`${e.toTable}\`(${n.join(", ")})`});return`
CREATE TABLE \`${t.catalog}\`.\`${t.schema}\`.\`${t.entity}\` (
  ${n.join(", ")}
  ${a?.join(",\n  ")}
)
${o}
${i};
`.trim()}}},412218:(e,t,n)=>{n.d(t,{l:()=>i});var o=n(845690);class i{_disabledTime=3e5;_lastStats={eventTime:0,responseCode:200};constructor(e){const t=(0,o._S)("ghost-text-proxy-error",1,!0,{eventTime:0,responseCode:200});this._disabledTime=e,this._lastStats=t}get responseCode(){return this._lastStats.responseCode}set responseCode(e){let t={eventTime:Date.now(),responseCode:e};this._lastStats=t,(0,o.AP)("ghost-text-proxy-error",1,!0,t)}isDisabled(){let{eventTime:e,responseCode:t}=this._lastStats;return Date.now()-e<this._disabledTime&&[429,403].includes(t)}}},424375:(e,t,n)=>{n.r(t),n.d(t,{doc:()=>i,header:()=>o});let o="LIST",i=`


Lists the objects immediately contained at the URL.

## Syntax

\`\`\`
LIST url [ WITH ( CREDENTIAL credential_name ) ] [ LIMIT limit ]
\`\`\`

## Parameters

- **url**

  A \`STRING\` literal with the location of the cloud storage described as an absolute URL.

- **credential_name**

  An optional named credential used to access this URL.
  If you supply a credential it must be sufficient to access the URL.
  If you do not supply a credential the URL must be contained in an external location to to which you have access.

- **limit**

  An optional \`INTEGER\` constant used to limit the number of objects returned.

  In Databricks Runtime 10.4 LTS the default limit is \`1001\` and only values between 1 and 1001 are supported.

## Examples


  \`\`\`sql
  > LIST 's3://us-east-1-dev/some_dir' WITH (CREDENTIAL aws_some_dir) LIMIT 2
    path                               name   size modification_time
    ---------------------------------- ------ ---- -----------------
    s3://us-east-1-dev/some_dir/table1 table1 0    ...
    s3://us-east-1-dev/some_dir/table1 table1 0    ...
  \`\`\`


  \`\`\`sql
  > LIST 'abfss://container@storageaccount.dfs.core.windows.net/some_dir' WITH (CREDENTIAL azure_some_dir) LIMIT 2
    path                                                                  name   size modification_time
    --------------------------------------------------------------------- ------ ---- -----------------
    abfss://container@storageaccount.dfs.core.windows.net/some_dir/table1 table1 0    ...
    abfss://container@storageaccount.dfs.core.windows.net/some_dir/table1 table1 0    ...
  \`\`\`


  \`\`\`sql
  > LIST 'gs://us-east-1-dev/some_dir' WITH (CREDENTIAL aws_some_dir) LIMIT 2
    path                               name   size modification_time
    ---------------------------------- ------ ---- -----------------
    gs://us-east-1-dev/some_dir/table1 table1 0    ...
    gs://us-east-1-dev/some_dir/table1 table1 0    ...
  \`\`\`

`},448116:(e,t,n)=>{n.d(t,{p:()=>b});var o=n(689017),i=n(886100),a=n(22191),r=n(747129),s=n(109445),l=n(354809),c=n(475654),u=n(711489),d=n(572293),m=n(617411);let p=null;var f=n(609367),h=n(642617),g=n(328622);function T(e,t,n,o,i,a,r){try{var s=e[a](r),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(o,i)}let E=null,b=({statement:e,position:t,connector:b,queryContext:y,statementId:S})=>{var L;return(L=function*(){let T=(0,f.F8)(b);if(E||(e=>{let{request:t}=(0,g.S)({worker:(p||(p=(0,m.W)(new Worker(new URL("/"+n.u(27077),n.b),{name:"antlr-autocomplete"}),a.Es.Editor,"antlrDbsqlAutoComplete")),p),methodHandlers:e,workerType:"antlrDbsqlAutoComplete"});E=t})(T),!E)return(0,o.wi)({editor_event_log:{antlr_auto_complete_lib_log:{event_name:u.J5.AntlrAutoCompleteLibEventName.ANTLR_AUTO_COMPLETE_LIB_EVENT_NAME_GET_AUTO_COMPLETE_CANDIDATES_WORKER_INIT}}}),i.iT.sev2BurnRate(a.Es.Editor,"AntlrGetAutoCompleteCandidates",r.i1.P99,r.Ip.Min10,!1,"auto complete worker setup error"),{status:h.IZ.ERROR,loggingInfo:{timerTracker:(0,d.A5)(),totalDuration:0}};let L=(0,s.BH)(l.X.MEASUREMENT,c.o.EDITOR_ANTLR_AUTO_COMPLETE_CANDIDATES);try{let n=yield E({method:"collectCandidates",params:[{statement:e,position:t,queryContext:y,statementId:S}]});return(0,s.z$)(L,l.T.SUCCESSFUL),i.iT.sev2BurnRate(a.Es.Editor,"AntlrGetAutoCompleteCandidates",r.i1.P99,r.Ip.Min10,!0),n}catch(e){return(0,s.z$)(L,l.T.FAILED),i.iT.sev2BurnRate(a.Es.Editor,"AntlrGetAutoCompleteCandidates",r.i1.P99,r.Ip.Min10,!1,e),(0,o.wi)({editor_event_log:{antlr_auto_complete_lib_log:{event_name:u.J5.AntlrAutoCompleteLibEventName.ANTLR_AUTO_COMPLETE_LIB_EVENT_NAME_GET_AUTO_COMPLETE_CANDIDATES_WORKER_INIT}}}),{status:h.IZ.ERROR,loggingInfo:{timerTracker:(0,d.A5)(),totalDuration:0}}}},function(){var e=this,t=arguments;return new Promise(function(n,o){var i=L.apply(e,t);function a(e){T(i,n,o,a,r,"next",e)}function r(e){T(i,n,o,a,r,"throw",e)}a(void 0)})})()}},449633:(e,t,n)=>{n.a(e,async(e,o)=>{try{n.d(t,{Ad:()=>g,K$:()=>E,Ll:()=>L,VU:()=>y,YB:()=>S,gQ:()=>h,iL:()=>O,nv:()=>m,pK:()=>v,qM:()=>f,r1:()=>p,uM:()=>A,yW:()=>R,yq:()=>T,zS:()=>b});var i=n(886100),a=n(22191),r=n(711489),s=n(758166),l=n(287342),c=n(598472),u=e([c]);function d(e,t,n,o,i,a,r){try{var s=e[a](r),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(o,i)}c=(u.then?(await u)():u)[0];let b=3600,y=2544,S=15,L=["editor.action.inlineSuggest.acceptNextLine","editor.action.inlineSuggest.toggleAlwaysShowToolbar"],C=/^\s*%([\w-]+)(\s|$)/,A=new Map([["python","#"],["sql","--"],["markdown","#"]]),v=["\n","<jupyter_code>","<jupyter_text>","<jupyter_start>","</jupyter_code>","</jupyter_text>","</jupyter_start>","<db","</db"],R=new Map([["python",["#","\\","'''","<db_python>","</db_python>"]],["sql",["--","/*",";\n",",\n","\n ",",","<db_sql>","</db_sql>"]],["dbsql",["--","/*",";\n",",\n","\n ",",","<db_sql>","</db_sql>"]],["text",[",",".","!","?","_","(",")","[","]","{","}","=","==","!=",">",">=","<","<=","/","*","+","-","^",'"',"'",'"""',"'''",'"""',"'''"]]]);function m({model:e,cancellationToken:t}){if(e.isDisposed()||t?.isCancellationRequested)return!0;return!1}function p(e){return e.replace(C,e=>e.split("\n").map(e=>Array(e.length+1).join(" ")).join("\n"))}function f(e,t){if("sql"===t);else if("python"===t&&e.length>0){let t=e.lastIndexOf("sql(");if(-1===t)return"";let n=e.substring(t);if(n.length>1e4||n.match(/sql\((['"]+)((?:(?!\1)[\s\S])*)\1\)/))return"";return n.substring(4).replace(/^['"]+/,"")}return e}function h(e){var t;return(t=function*({text:e,language:t,source:n,ctx:o}){let[i,a]=[o.getCatalog(),o.getSchema()];if(!i||!a)return{message:"",possibleTables:[]};let r=[];if("sql"===t&&e.length>0){let t="."===e[e.length-1]?e.slice(0,-1):e;r=yield(0,c.v5)({text:t,activeCatalog:i,activeSchema:a,defaultSchemaForCatalogs:o.defaultSchemaForCatalogs,filterErrorTables:!1,source:n})}else if("python"===t&&e.length>0){let t=e.length>0&&"."===e[e.length-1]?e.slice(0,-1):e;r=yield(0,c.v5)({text:t,activeCatalog:i,activeSchema:a,defaultSchemaForCatalogs:o.defaultSchemaForCatalogs,filterErrorTables:!1,source:n})}if(r.length>0){let e=r[r.length-1];return{message:`${e.catalog}.${e.schema}.${e.entity}`,possibleTables:r}}return{message:"",possibleTables:r}},function(){var e=this,n=arguments;return new Promise(function(o,i){var a=t.apply(e,n);function r(e){d(a,o,i,r,s,"next",e)}function s(e){d(a,o,i,r,s,"throw",e)}r(void 0)})}).apply(this,arguments)}function g(e,t,n){let o=t.command?.arguments;if(!o)return;let i=Math.floor(Date.now()/1e3);l.LT.ghost_text_show_queue.addToQueue(i);let{moduleName:a,language:c,modelType:u,requestId:d,withAutoComplete:m,didUseDataflowContext:p}=o[0],f=(0,l.Jt)();f.session_id=d,f.session_with_autocomplete=m,(0,s.ke)({interaction:s.wL.Show,language:c,moduleName:a,withAutoComplete:m,lakesenseTraceId:d,modelType:u,suggestionCodeLength:n.length,resultState:p?r.J5.GhostTextResultState.GHOST_TEXT_RESULT_STATE_DATAFLOW:r.J5.GhostTextResultState.GHOST_TEXT_RESULT_STATE_PROXIMITY})}function T(e,t,n){let o=t.command?.arguments;if(!o)return;let{moduleName:i,language:a,modelType:c,didUseDataflowContext:u}=o[0],d=(0,l.Jt)(),m=d.session_id,p=d.session_with_autocomplete;(0,s.ke)({interaction:s.wL.PartialAccept,language:a,moduleName:i,withAutoComplete:p,lakesenseTraceId:m,modelType:c,suggestionCodeLength:n,resultState:u?r.J5.GhostTextResultState.GHOST_TEXT_RESULT_STATE_DATAFLOW:r.J5.GhostTextResultState.GHOST_TEXT_RESULT_STATE_PROXIMITY,lakesenseAuthoringGhostTextGenerated:n})}function E(e,t,n){if(!n||n.isDisposed())return;try{let o=n.getOffsetAt(e),i=Math.max(0,o-t),a=Math.min(n.getValueLength(),o+t);return n.getValue().substring(i,a)}catch(e){return i.iT.sev2(a.Es.Assistant,"AutoInlineSuggestionInteraction",e),""}}let O=e=>e?.message?.includes?.("Model is disposed!")||e?.stack?.includes?.("Model is disposed!");o()}catch(e){o(e)}})},489773:(e,t,n)=>{n.r(t),n.d(t,{doc:()=>i,header:()=>o});let o="UPDATE",i=`

Updates the column values for the rows that match a predicate. When no predicate is provided, update the column values for all rows.

This statement is only supported for <Delta> tables.

## Syntax

\`\`\`
UPDATE table_name [table_alias] 
   SET  { { column_name | field_name }  = [ expr | DEFAULT } [, ...] 
   [WHERE clause]
\`\`\`

## Parameters

- **table_name**

  Identifies table to be updated. The table name must not use a temporal specification.

  \`table_name\` must not be a foreign table.

- **table_alias**

  Define an alias for the table. The alias must not include a column list.

- **column_name**

  A reference to a column in the table. You may reference each column at most once.

- **field_name**

  A reference to field within a column of type STRUCT. You may reference each field at most once.

- **expr**

  An arbitrary expression. If you reference \`table_name\` columns they represent the state of the row prior the update.

- **DEFAULT**


  The \`DEFAULT\` expression for the column if one is defined, NULL otherwise.

- **WHERE**

  Filter rows by predicate. The \`WHERE\` clause may include subqueries with the following exceptions:

  - Nested subqueries, that is, a subquery inside another subquery
  - A \`NOT IN\` subquery inside an \`OR\`, for example, \`a = 3 OR b NOT IN (SELECT c from t)\`

  In most cases, you can rewrite \`NOT IN\` subqueries using \`NOT EXISTS\`. You should use
  \`NOT EXISTS\` whenever possible, as \`UPDATE\` with \`NOT IN\` subqueries can be slow.

## Examples

\`\`\`sql
> UPDATE events SET eventType = 'click' WHERE eventType = 'clk'

> UPDATE all_events
     SET session_time = 0, ignored = true
   WHERE session_time < (SELECT min(session_time) FROM good_events)

> UPDATE orders AS t1
     SET order_status = 'returned'
   WHERE EXISTS (SELECT oid FROM returned_orders WHERE t1.oid = oid)

> UPDATE events
     SET category = 'undefined'
   WHERE category NOT IN (SELECT category FROM events2 WHERE date > '2001-01-01')

> UPDATE events 
     SET ignored = DEFAULT
  WHERE eventType = 'unknown'
\`\`\`

`},495507:(e,t,n)=>{n.d(t,{E:()=>o});let o=(e,t=!1)=>({alwaysConsumeMouseWheel:!1,handleMouseWheel:t||e,vertical:e?"visible":"hidden",horizontal:"auto",verticalScrollbarSize:8,horizontalScrollbarSize:8})},511406:(e,t,n)=>{n.d(t,{y:()=>o});let o="inlineSuggestionVisible && !suggestWidgetVisible"},514107:(e,t,n)=>{n.d(t,{F:()=>o});class o{userContext;constructor(e){this.userContext=e}optimize(e){let t={name:"DataFramesTrimmer",optimizations:[]},n=Object.values(this.userContext.activeCellTables).map(e=>e.entity.toLowerCase());if((e.notebook_specific||e.variable)&&"sql"===this.userContext.language){let o=e.variable?.chunks.filter(e=>!n.some(t=>t.includes(e.name.toLowerCase()))).map(e=>e.name)||e.notebook_specific?.chunks.filter(e=>!n.some(t=>t.includes(e.name.toLowerCase()))).map(e=>e.name)||[];t.optimizations?.push({name:"DataFramesTrimmer",rerank:o}),e.variable?.chunks&&(e.variable.chunks=e.variable.chunks.filter(e=>!o.includes(e.name))),e.notebook_specific&&(e.notebook_specific.chunks=e.notebook_specific.chunks.filter(e=>!o.includes(e.name)))}return t}}},523738:(e,t,n)=>{n.r(t),n.d(t,{doc:()=>i,header:()=>o});let o="SET",i=`

Sets a Databricks SQL parameter at the session level,
returns the value of an existing parameter or returns all parameters with value and meaning. When using Databricks Runtime, parameters are known as SQL Conf properties.

To set a SQL variable use SET VARIABLE.

## Syntax

\`\`\`
SET
\`\`\`
\`\`\`
SET [ -v ]
\`\`\`
\`\`\`
SET parameter_key [ = parameter_value ]
\`\`\`

## Parameters

- **(none)**


  Outputs the key and value of changed Databricks SQL parameters.

- **-v**

  Outputs the key, value and meaning of existing parameters.

- **parameter_key**

  Returns the value of the specified parameter.

- **parameter_key = parameter_value**

  Sets the value for a given parameter. If an old value exists for a given parameter, then it gets overridden by the new value.

## Databricks SQL Examples

\`\`\`sql
-- Set a property.
> SET ansi_mode = true;

-- List all configuration parameters with their value and description.
> SET -v;

-- List all configuration parameters with a set value for the current session.
> SET;

-- List the value of specified property key.
> SET ansi_mode;
  key        value
  ---------  -----
  ansi_mode  true

-- Use SET VARIABLE to set SQL variables
> DECLARE var INT;
> SET var = 5;
Error: UNSUPPORTED_FEATURE.SET_VARIABLE_USING_SET
> SET VAR var = 5;
> SELECT var;
  5
\`\`\`

## Databricks Runtime Examples

\`\`\`sql
-- Set a property.
> SET spark.sql.variable.substitute=false;

-- List all SQLConf properties with value and meaning.
> SET -v;

-- List all SQLConf properties with value for current session.
> SET;

-- List the value of specified property key.
> SET spark.sql.variable.substitute;
                           key value 
 ----------------------------- -----
 spark.sql.variable.substitute false
\`\`\`

`},524108:(e,t,n)=>{n.d(t,{U:()=>o});class o{userContext;constructor(e){this.userContext=e}optimize(e){let t={name:"TableColumnsTrimmer",optimizations:[]},n=[];return 0===Object.keys(this.userContext.activeCellTables).length&&e.table&&e.table.chunks.forEach(e=>{if(e.content.columns){let t=e.content;t.columns=[],t.partitions=[],n.push(t.entity)}}),n.length>0&&t.optimizations?.push({name:"TableColumnsTrimmer",rerank:n}),t}}},562398:(e,t,n)=>{n.d(t,{m:()=>o});function o(e){return{getOptions:()=>({readOnly:!!e})}}},571824:(e,t,n)=>{n.d(t,{G:()=>o});function o(e){return{getOptions:()=>({lineNumbers:e?"on":"off",lineNumbersMinChars:5,lineDecorationsWidth:10})}}},629356:(e,t,n)=>{n.d(t,{F:()=>o});class o{format(e){let t=e.content,n=t.columns.map(e=>{let n=e.comment?` (${e.comment})`:"",o=t.partitions.includes(e.name)?" (partition)":"";return`\`${e.name}\`: ${e.type}${n}${o}`}),o=t.comment?` (${t.comment})`:"";return`Table name: ${t.catalog}.${t.schema}.${t.entity}${o}, columns = [${n.join(", ")}]`.trim()}}},634865:(e,t,n)=>{n.a(e,async(e,o)=>{try{n.d(t,{Qr:()=>E,br:()=>d});var i=n(502451),a=n(665514),r=n(214056),s=n(215011),l=n(799620),c=e([r,l]);function u(e,t,n,o,i,a,r){try{var s=e[a](r),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(o,i)}[r,l]=c.then?(await c)():c;let d=e=>`${e.startColumn}:${e.endColumn}-${e.startLineNumber}:${e.endLineNumber}`,m=(e,t,n,o,r,s=!0)=>{let l=t[e];if(!l)return;let c=e.split(".");l.tagsPromise||(l.tagsPromise=new Promise(e=>{var t;return(t=function*(){if(3!==c.length)return void e([]);let t=yield n.catalogApi.value.getTableMetadata(c[0],c[1],c[2]);if(t.error)e(void 0);else{let o=(0,i.N)()?(yield n.catalogApi.value.getIsTableDeprecated?.(c[0],c[1],c[2]))??!1:(yield n.catalogApi.value.getTablesWithDeprecatedTag?.(c[0],c[1]))?.some(e=>e.entity===c[2])??!1,r=(0,a.Ng)(t.metadata)||o;e(r?[a.ET]:[])}},function(){var e=this,n=arguments;return new Promise(function(o,i){var a=t.apply(e,n);function r(e){u(a,o,i,r,s,"next",e)}function s(e){u(a,o,i,r,s,"throw",e)}r(void 0)})})()})),l.tagsPromise?.then(i=>{if(void 0===i){s&&(l.tagsPromise=void 0,setTimeout(()=>m(e,t,n,o,r,!1),500));return}(0,a._x)(i)&&(l.tags=i,f(l,!0,o,r))})},p=e=>{let t=e.parseLocation;return t?.type==="table"&&!!t.identifierChain},f=(e,t,n,o)=>{n&&!n.isDisposed()&&e.ranges.forEach(i=>{(0,r.Q)().setModelMarkers(n,o+e.key+d(i),[{endColumn:i.endColumn,endLineNumber:i.endLineNumber,message:"Object has been tagged as deprecated.",relatedInformation:[],severity:e.isTable&&t?(0,r.Q)().MarkerSeverity.Warning:(0,r.Q)().MarkerSeverity.Hint,source:"DBSQL",code:"table",startColumn:i.startColumn,startLineNumber:i.startLineNumber,tags:[(0,r.Q)().MarkerTag.Deprecated]}])})},h=["sql","dbsql","python"],g=(0,l.K)("registerCodeActionProvider",h,e=>({provideCodeActions:(t,n)=>{let o=e(t);if(!o||!t)return;let{language:i,editorId:a,modelId:r,enableChatWindow:l,moduleName:c}=o,u=E.tokenMaps.get(a)??{},m=t.isDisposed()||!l||t.id!==r;if(m||m||i!==t.getLanguageId())return{actions:[],dispose:()=>{}};return{actions:Object.values(u).filter(({isTable:e,tags:t})=>t&&e).flatMap(e=>e.ranges).filter(e=>d(e)===d(n.toJSON())).map(()=>({title:"Fix Deprecated",kind:"quickfix",command:{id:s.oq,title:"Fix Deprecated Table",arguments:[c,"sql","Fix-Deprecated-Table"]}})),dispose:()=>{}}}})),T={dispose(){}};class E{static tokenMaps=new Map;editor;connector;moduleName;language;constructor(e,t,n,o){this.editor=e,this.connector=t,this.moduleName=n,this.language=o,E.tokenMaps.set(e.getId(),{})}updateTokensWithTags=e=>{((e,t,n,o={},i)=>{var a,s,l;let c=e.filter(p),u=c.reduce((e,t)=>{if(!t.parseLocation.tables){let n=t.parseLocation.identifierChain.map(e=>e.name).join(".");((e={},t,n)=>{if(e[n])e[n].ranges.find(e=>d(t.range)===d(e))||e[n].ranges.push(t.range);else{let o=t.parseLocation?.identifierChain,i=o?.[o.length-1]?.name??t.value;e[n]={value:i,key:n,ranges:[t.range],isTable:t.parseLocation?.type==="table"}}})(e,t,n)}return e},o);Object.keys(u).forEach(e=>{u[e].tags?f(u[e],!0,n,i):m(e,u,t,n,i)}),a=u,s=n,l=i,Object.keys(a).forEach(e=>{let t=[];a[e].ranges.forEach(n=>{let o,i,c=s?.getValueInRange(n),u=a[e].value;if(c!==u||(i=Object.keys(a).filter(e=>o?.includes(e)),o&&0===i.length))return void(0,r.Q)().removeAllMarkers(l+a[e].key+d(n));t.push(n)}),0===t.length?delete a[e]:a[e].ranges=t})})(e,this.connector,this.editor.getModel(),E.tokenMaps.get(this.editor.getId()),this.editor.getId())};createDeprecatedTokenActionProvider=e=>((e,t,n,o,i)=>{if(!e)return T;if(!h.includes(o))throw Error(`Unsupported language: ${o}; Please add it to ALL_SUPPORTED_LANGUAGES.`);let a={language:o,editorId:t,moduleName:n,enableChatWindow:i,modelId:e.id};return g.register(e,a)})(this.editor.getModel(),this.editor.getId(),this.moduleName,this.language,e)}o()}catch(e){o(e)}})},642412:(e,t,n)=>{n.d(t,{w:()=>o});class o{userContext;constructor(e){this.userContext=e}optimize(e){let t={name:"CodeCellsTrimmerNoActiveTable",optimizations:[]},n=e=>{let t=[],n=[];return e.chunks.forEach(e=>{let o="string"==typeof e.content?e.content:JSON.stringify(e.content);0===Object.keys(this.userContext.activeCellTables).length||Object.values(this.userContext.activeCellTables).some(e=>o.toLowerCase().includes(e.entity.toLowerCase()))?n.push(e):t.push(e)}),{keptChunks:n,filteredChunks:t}};if(e.codeCellsBefore){let{keptChunks:o,filteredChunks:i}=n(e.codeCellsBefore);e.codeCellsBefore.chunks=o,i.length>0&&t.optimizations?.push({name:"codeCellsBefore",rerank:i.map(e=>e.name)})}if(e.codeCellsAfter){let{keptChunks:o,filteredChunks:i}=n(e.codeCellsAfter);e.codeCellsAfter.chunks=o,i.length>0&&t.optimizations?.push({name:"codeCellsAfter",rerank:i.map(e=>e.name)})}return t}}},650287:(e,t,n)=>{n.r(t),n.d(t,{doc:()=>i,header:()=>o});let o="SELECT",i=`

Composes a result set from one or more table references.
The \`SELECT\` clause can be part of a query which also includes common table expressions (CTE), set operations, and various other clauses.

## Syntax

\`\`\`
SELECT [ hints ] [ ALL | DISTINCT ] { named_expression | star_clause } [, ...]
  FROM table_reference [, ...]
  [ LATERAL VIEW clause ]
  [ WHERE clause ]
  [ GROUP BY clause ]
  [ HAVING clause]
  [ QUALIFY clause ]

named_expression
   expression [ column_alias ]

star_clause
   [ { table_name | view_name } . ] * [ except_clause ]

except_clause
   EXCEPT ( { column_name | field_name } [, ...] )
\`\`\`

## Parameters

- **hints**

    Hints help the Databricks SQL optimizer make better planning decisions.
    Databricks SQL supports hints that influence selection of join strategies and repartitioning of the data.

- **ALL**

    Select all matching rows from the table references. Enabled by default.

- **DISTINCT**

    Select all matching rows from the table references after removing duplicates in results.

- **named_expression**

    An expression with an optional assigned name.

    - **expression**

      A combination of one or more values, operators, and SQL functions that evaluates to a value.

    - **column_alias**

      An optional column identifier naming the expression result.
      If no \`column_alias\` is provided Databricks SQL derives one.

- **star_clause**

    A shorthand to name all the referenceable columns in the \`FROM\` clause or a specific table reference's columns or fields in the \`FROM\` clause.

- **table_reference**

    A source of input for the \`SELECT\`. This input reference can be turned into a streaming reference by using the \`STREAM\` keyword prior to the reference.

- **LATERAL VIEW**

  Used in conjunction with generator functions such as \`EXPLODE\`, which generates a virtual table containing one or more rows. \`LATERAL VIEW\` applies the rows to each original output row.

  In Databricks SQL, and starting with Databricks Runtime 12.2 this clause is deprecated. You should invoke a table valued generator function as a table_reference.

- **WHERE**

  Filters the result of the \`FROM\` clause based on the supplied predicates.

- **GROUP BY**

  The expressions that are used to group the rows. This is used in conjunction with aggregate functions (\`MIN\`, \`MAX\`, \`COUNT\`, \`SUM\`, \`AVG\`) to group rows based on the grouping expressions and aggregate values in each group. When a \`FILTER\` clause is attached to an aggregate function, only the matching rows are passed to that function.

- **HAVING**

  The predicates by which the rows produced by \`GROUP BY\` are filtered. The \`HAVING\` clause is used to
  filter rows after the grouping is performed. If you specify \`HAVING\` without \`GROUP BY\`, it indicates a \`GROUP BY\` without grouping expressions (global aggregate).

- **QUALIFY**

  The predicates that are used to filter the results of window functions.
  To use \`QUALIFY\`, at least one window function is required to be present in the SELECT list or the QUALIFY clause.

## Select on Delta table

In addition to the standard \`SELECT\` options, Delta tables support the time travel options described in this section. For details, see _.

### \`AS OF\` syntax

\`\`\`
table_identifier TIMESTAMP AS OF timestamp_expression

table_identifier VERSION AS OF version
\`\`\`


#### Example

\`\`\`sql
> SELECT * FROM events TIMESTAMP AS OF '2018-10-18T22:15:12.013Z'

> SELECT * FROM events VERSION AS OF 123
\`\`\`

### \`@\` syntax

Use the \`@\` syntax to specify the timestamp or version. The timestamp must be in \`yyyyMMddHHmmssSSS\` format. You can specify a version after \`@\` by prepending a \`v\` to the version. For example, to query version \`123\` for the table \`events\`, specify \`events@v123\`.

#### Example

\`\`\`sql
> SELECT * FROM events@20190101000000000

> SELECT * FROM events@v123
\`\`\`

## Examples

\`\`\`sql
-- select all referencable columns from all tables
> SELECT * FROM VALUES(1, 2) AS t1(c1, c2), VALUES(3, 4) AS t2(c3, c4);
  1   2   3   4

-- select all referencable columns from one table
> SELECT t2.* FROM VALUES(1, 2) AS t1(c1, c2), VALUES(3, 4) AS t2(c3, c4);
  3   4

-- select all referencable columns from all tables except t2.c4
> SELECT * EXCEPT(c4) FROM VALUES(1, 2) AS t1(c1, c2), VALUES(3, 4) AS t2(c3, c4);
  1   2   3

-- select all referencable columns from a table, except a nested field.
> SELECT * EXCEPT(c2.b) FROM VALUES(1, named_struct('a', 2, 'b', 3)) AS t(c1, c2);
  1  { "a" : 2 }

-- Removing all fields results in an empty struct
> SELECT * EXCEPT(c2.b, c2.a) FROM VALUES(1, named_struct('a', 2, 'b', 3)) AS t(c1, c2);
  1  { }

-- Overlapping names result in an error
> SELECT * EXCEPT(c2, c2.a) FROM VALUES(1, named_struct('a', 2, 'b', 3)) AS t(c1, c2);
  Error: EXCEPT_OVERLAPPING_COLUMNS
\`\`\`

`},652892:(e,t,n)=>{n.a(e,async(e,o)=>{try{let l;n.d(t,{El:()=>u,iH:()=>s});var i=n(214056),a=e([i]);i=(a.then?(await a)():a)[0];let c=()=>l??=(0,i.Q)().getScalaSyntax().language;function r(){let e=c();e.tokenizer.root.unshift({include:"embeddedSql"}),e.tokenizer.embeddedSql=[[/sql\(/,"keyword","@embeddedSqlBody"]],e.tokenizer.embeddedSqlBody=[[/s"""/,{token:"string.escape",bracket:"@open",next:"@embeddedSqlDoubleDocStringBody",nextEmbedded:"sql"}],[/"""/,{token:"string.escape",bracket:"@open",next:"@embeddedSqlDoubleDocStringBody",nextEmbedded:"sql"}],[/"/,{token:"string.escape",bracket:"@open",next:"@embeddedSqlDoubleQuoteBody",nextEmbedded:"sql"}],[/\)/,{token:"delimiter.parenthesis",bracket:"@close",next:"@pop"}]],e.tokenizer.embeddedSqlDoubleQuoteBody=[[/[^\\"]+$/,{token:"string",next:"@popall",nextEmbedded:"@pop"}],[/[^\\"]+/,"string"],[/\\./,"string"],[/"/,{token:"string.escape",next:"@popall",nextEmbedded:"@pop"}],[/\\$/,"string"]],e.tokenizer.embeddedSqlDoubleDocStringBody=[[/[^"]+/,"string"],[/\\"/,"string"],[/"""/,{token:"string",next:"@popall",nextEmbedded:"@pop"}],[/"/,"string"]]}function s(e=!1){let t=(0,i.Q)().getLanguages(),n=c();t.some(e=>"custom_scala"===e.id)||(r(),(0,i.Q)().register({id:"custom_scala",extensions:[".scala",".sc",".sbt"],aliases:["Scala","scala","SBT","Sbt","sbt","Dotty","dotty"],mimetypes:["text/x-scala-source","text/x-scala","text/x-sbt","text/x-dotty"]}),(0,i.Q)().setMonarchTokensProvider("custom_scala",n),(0,i.Q)().setLanguageConfiguration("custom_scala",(0,i.Q)().getScalaSyntax().conf));let o=t.some(e=>"scala"===e.id);o||(r(),(0,i.Q)().register({id:"scala",extensions:[".scala",".sc",".sbt"],aliases:["Scala","scala","SBT","Sbt","sbt","Dotty","dotty"],mimetypes:["text/x-scala-source","text/x-scala","text/x-sbt","text/x-dotty"]})),(!o||e)&&((0,i.Q)().setMonarchTokensProvider("scala",n),(0,i.Q)().setLanguageConfiguration("scala",(0,i.Q)().getScalaSyntax().conf))}let u=(e=!1)=>({setup:()=>{s(e)}});o()}catch(e){o(e)}})},655473:(e,t,n)=>{n.d(t,{O:()=>a});var o=n(697580),i=n(719785);class a{maxChars;retrieverRatios;constructor(e,t){this.maxChars=e,this.retrieverRatios=t}optimize(e){let t={},n={},a={};for(let e of Object.keys(this.retrieverRatios))t[e]=Math.floor(this.maxChars*(this.retrieverRatios[e]??0)),n[e]=t[e],a[e]=0;let r=[],s=[];for(let t of e){let e=n[t.documents[0]?.retriever]??0,l=new i.v({name:"fittedDocChunks",document:t.documents[0],formatter:new o.d}),c=new i.v({name:"nonFittedDocChunks",document:t.documents[0],formatter:new o.d});for(let n of t.chunks){let o="string"==typeof n.content?n.content.length:n.content&&"code"in n.content?n.content.code.length:n.content.entity.length+n.content.columns.length;a[t.documents[0].retriever]=(a[t.documents[0].retriever]??0)+o,e>=o?(l.add({...n,contentType:n.contentType??"sql",document:t.documents[0]}),e-=o):c.add({...n,contentType:n.contentType??"sql",document:t.documents[0]})}n[t.documents[0].retriever]=e,l.chunks.length>0&&r.push(l),c.chunks.length>0&&s.push(c)}return{fittedChunks:r,nonFittedChunks:s,profile:{retrieverMaxChars:t,remainingRetrieverChars:n,totalRetrieverChars:a}}}}},668014:(e,t,n)=>{n.d(t,{JK:()=>u,Hl:()=>m,Kf:()=>d});class o{format(e){return`${e.chunks.map(e=>e.content).join("\n")}`}}var i=n(629356);let a={user_queries:"These are some past SQL queries fragments the user wrote before:",relevant_table:"Here are the tables in the current editor:",notebook_specific:"Here are the DataFrames in the session:",notebook_cells:"Here are some similar Notebook code cells:",favorite_table:"Here are the user's favorite tables:",neighbor_code:"Here is some neighboring code:",environment_context:"Here is the environment context:",neighbor_code_table:"Here are some schemas of tables in the surrounding cells:",manual:"Here are some Code Cells from the editor:",autocomplete:"Here are some past code completions examples:",errors:"Here is the error message:"};class r{format(e,t){let n=e.chunks.filter(e=>"table"===e.documentType),o=e.chunks.filter(e=>"variable"===e.documentType),r=e.chunks.filter(e=>"table"!==e.documentType&&"variable"!==e.documentType),s=[`${a[e.documents[0]?.retriever]??"Unknown Retriever"}`];function l(e,n){"number"==typeof t&&(e.toSkip=t<=0,t-=n.length),s.push(n)}return n.forEach(e=>{let t=`- ${new i.F().format(e)}`;l(e,t),r.filter(t=>`${t.name}`.includes(e.content&&"string"!=typeof e.content&&"catalog"in e.content?`${e.content.catalog}.${e.content.schema}.${e.content.entity}`:"")).forEach(e=>{let t=`- ${e.name}:
${["python","sql"].includes(e.contentType)?`\`\`\`${e.contentType}
`:""}${"string"==typeof e.content?e.content.trim():e.content}${["python","sql"].includes(e.contentType)?"\n```":""}`;l(e,t)})}),0===n.length&&(r.forEach(e=>{let t=`${["python","sql"].includes(e.contentType)?`\`\`\`${e.contentType}
`:""}${"string"==typeof e.content?e.content.trim():e.content}${["python","sql"].includes(e.contentType)?"\n```":""}`;l(e,t)}),o.forEach(e=>{let t=`- ${"string"==typeof e.content?e.content.trim():e.content}`;l(e,t)})),s.join("\n")}}class s{format(e){return`${a[e.documents[0]?.retriever]}
${e.chunks.map(e=>e.content).join("\n")}`}}var l=n(697580),c=n(719785);class u{useOriginalFormatter;constructor({useOriginalFormatter:e=!0}={}){this.useOriginalFormatter=e}chunk(e,t){let n,o,i={},a=d(t);a&&(i.errors=a);let s=["errors","environment_context","autocomplete","notebook_specific","relevant_table","user_queries"];for(let t of(e.sort((e,t)=>{let n=s.indexOf(e.retriever),o=s.indexOf(t.retriever);return(-1===n?s.length:n)-(-1===o?s.length:o)}),e)){if("neighbor_code"===t.retriever){"followingCodeBlocks"===t.name?n=t:"previousCodeBlocks"===t.name&&(o=t);continue}if(!i[t.retriever]){let e=this.useOriginalFormatter?new r:new l.d;i[t.retriever]=new c.v({name:t.retriever,document:t,formatter:e})}Array.isArray(t.content)||i[t.retriever]?.add({name:t.name,content:t.content,contentType:"python"===t.type?"python":"notebook_specific"===t.retriever?"text":"sql",document:t})}let u=m(t,n,o);return i.codePrefix=u[0],i.codeSuffix=u[1],i.codeCellsBefore=u[2],i.codeCellsAfter=u[3],i}}function d(e){if(e.contextObject?.errorMessage){let t=new c.y({name:"errors",content:"",type:"text",retriever:"errors"}),n=new c.v({name:"errors",document:t,formatter:new s}),o=e.contextObject.errorMessage.trim().replace(/<[^<]+?>/g,"");return o=o.replace(/^["']|["']$/g,""),n.add({name:"errors",content:o,contentType:"text",document:t}),n}}function m(e,t,n){let{language:i,codePrefix:a,codeSuffix:r}=e,s=new c.y({name:"notebook",content:"",type:"cell",retriever:"manual"}),l=new c.v({name:"codePrefix",document:s,formatter:new o});l.add({name:"codePrefix",content:a,contentType:i,document:s});let u=new c.v({name:"codeSuffix",document:s,formatter:new o});u.add({name:"codeSuffix",content:r,contentType:i,document:s});let d=new c.v({name:"codeCellsBefore",document:n||s,formatter:new o});Array.isArray(n?.content)&&n?.content.forEach(e=>{d.add({name:e.name||"",content:e.code,contentType:e.language,document:n})});let m=new c.v({name:"codeCellsAfter",document:t||s,formatter:new o});return Array.isArray(t?.content)&&t?.content.forEach(e=>{m.add({name:e.name||"",content:e.code,contentType:e.language,document:t})}),[l,u,d,m]}},671956:(e,t,n)=>{n.d(t,{A:()=>o});let o=(e,t,n)=>{let o,i,a,r,s;n&&(e=e.toLowerCase(),t=t.toLowerCase());let l=e.length,c=t.length;if(0===l)return c;if(0===c)return l;let u=Array(l);for(let n=0;n<=l;n++){u[n]=Array(c),u[n][0]=n;for(let l=1;l<=c;l++)n?(o=+(e[n-1]!==t[l-1]),i=u[n-1][l]+1,a=u[n][l-1]+1,r=u[n-1][l-1]+o,i<=a&&i<=r?u[n][l]=i:a<=i&&a<=r?u[n][l]=a:u[n][l]=r,n>1&&l>1&&e[n]===t[l-1]&&e[n-1]===t[l]&&(s=u[n-2][l-2]+o)<u[n][l]&&(u[n][l]=s)):u[0][l]=l}return u[l][c]}},677514:(e,t,n)=>{n.d(t,{E:()=>a});var o=n(329619);let i=e=>({firstLineIndex:e.insteadcurrentStatementRowOffset??0,nonemptyLinesAboveError:e.line-1,leadingEmptyLines:0,failedToMatch:!0}),a=(e,t)=>{if(!t.length)return i(e);let{line:n,insteadcurrentStatementRowOffset:a=0}=e,r=t[a];if(!r)return i(e);let s=n-1,l=(r.statement.match(o.F)||"").length,c=r.location.first_line-1||0,u=(0,o.P)(r);return l===u&&(s=0),{firstLineIndex:c,nonemptyLinesAboveError:s,leadingEmptyLines:u,failedToMatch:!1}}},694193:(e,t,n)=>{n.d(t,{z:()=>o});let o=e=>{if("init"===e)throw Error("BrokenPlugin");return{setup:({editorInstance:t})=>{if("setup"===e)throw Error("BrokenPlugin");t.onDidChangeModelContent(()=>{if("async"===e)throw Error("BrokenPlugin")})}}}},694985:(e,t,n)=>{n.a(e,async(e,o)=>{try{n.d(t,{_:()=>C,i:()=>A});var i=n(34116),a=n.n(i),r=n(689017),s=n(711489),l=n(708113),c=n(924802),u=n(221337),d=n(30502),m=n(530734),p=n(875172),f=n(42455),h=n(563218),g=n(354184),T=n(213740),E=n(372183),b=n(939747),y=e([T]);function S(e,t,n,o,i,a,r){try{var s=e[a](r),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(o,i)}function L(e){return function(){var t=this,n=arguments;return new Promise(function(o,i){var a=e.apply(t,n);function r(e){S(a,o,i,r,s,"next",e)}function s(e){S(a,o,i,r,s,"throw",e)}r(void 0)})}}T=(y.then?(await y)():y)[0];let C=({editorId:e,editorInstance:t,publishErrors:n,getCatalog:o,getDatabase:i,getCatalogApi:m,antlrTokenCheckingProps:g})=>{let y=[];(0,d.V)();let S=(0,E.EM)({catalogApi:m()}),C=new h.A({publishErrors:n}),A=new p.A({editorId:e,editorInstance:t,onCursorPositionChange:a(),onActiveStatementChanged:n=>L(function*(){let a=o(),l=i();if(g&&a&&l){let e=yield(0,T.validateTokensWithAntlr)({query:t.getValue(),connector:S,defaultCatalog:a,defaultDatabase:l,getTokenParseResultFromCache:g.getTokenParseResultFromCache,setTokenParseResultInCache:g.setTokenParseResultInCache,timeout:1e4});if(e instanceof T.TokenValidationWorkerError)return void(0,r.wi)({editor_event_log:{simple_dbsql_token_validation_log:{event_name:s.J5.SimpleDbsqlTokenValidationEventName.SIMPLE_DBSQL_TOKEN_VALIDATION_EVENT_NAME_ANTLR_TOKEN_VALIDATION_WORKER_ERROR}}});if(e instanceof T.TimeoutError)return void(0,r.wi)({editor_event_log:{simple_dbsql_token_validation_log:{event_name:s.J5.SimpleDbsqlTokenValidationEventName.SIMPLE_DBSQL_TOKEN_VALIDATION_EVENT_NAME_ANTLR_TOKEN_VALIDATION_TIMEOUT_ERROR}}});let n=e.flatMap(e=>e.tokens);n.forEach(e=>{e.parseLocation&&(0,c.G)(e.parseLocation,S)}),C.overwrite(n,"dataToken"),C.publishTokenErrors(n)}else b.A.publish(u.P4,{id:e,statementDetails:n,connector:S,defaultCatalog:a,defaultDatabase:l,syntaxCheckingStartTime:performance.now()})})(),getConnector:()=>S});y.push(A);let v=t.onDidChangeCursorSelection(()=>A.updateActiveStatement());y.push(v);let R=t.getModel()?.onDidChangeContent(()=>A.onContentChange());R&&y.push(R);let O=new f.A({sqlReferenceProvider:l.default,tokenManager:C,editorInstance:t,getConnector:()=>S,getCurrentCatalog:o,getCurrentDatabase:i}),{remove:x}=b.A.subscribe(u.Cb,({data:t})=>{t.id===e&&t.editorChangeTime===S.editorLastChangeTime&&O.handleFoundTokens(t)});return y.push({dispose:()=>x}),{tokenManager:C,dispose:()=>y.forEach(e=>e.dispose())}},A=({token:e,getCatalog:t,getDatabase:n,getCatalogApi:o})=>L(function*(){if(!e||e.error||!e.parseLocation)return null;let i=t(),a=n();if(!i||!a)return null;let r=(0,E.EM)({catalogApi:o()});return(0,m.sc)(o()),yield(0,g._v)(e.value,e.parseLocation,i,a,r,l.default)})();o()}catch(e){o(e)}})},696212:(e,t,n)=>{n.r(t),n.d(t,{CUSTOM_BUILT_IN_TABLE_VALUED_FUNCTIONS:()=>i});var o=n(447166);let i={read_files:{name:"read_files",signature:"read_files(path, [, options])",arguments:[[{name:"path",type:o.L.STRING}],[{name:"options",type:o.L.LAMBDA}]],returnTypes:[o.L.T],returnDoc:"",draggable:"read_files()",isAggregate:!1,isWindow:!1,examples:[]},cloud_files:{name:"cloud_files",signature:"cloud_files(file_path, file_type, [, options])",arguments:[[{name:"file_path",type:o.L.STRING}],[{name:"file_type",type:o.L.STRING}],[{name:"options",type:o.L.MAP}]],returnTypes:[o.L.T],returnDoc:"",draggable:"cloud_files()",isAggregate:!1,isWindow:!1,examples:[]},identifier:{name:"identifier",signature:"identifier(identifier_name)",arguments:[[{name:"identifier_name",type:o.L.STRING}]],returnTypes:[o.L.T],returnDoc:"",draggable:"identifier()",isAggregate:!1,isWindow:!1,examples:[]}}},697580:(e,t,n)=>{n.d(t,{d:()=>i});var o=n(409331);class i{format(e){let t=e.chunks.filter(e=>"table"===e.documentType),n=e.chunks.filter(e=>"table"!==e.documentType);return`
## ${e.documents[0]?.retriever??"Unknown Retriever"}

${t.map(e=>`- ${e.name} (${e.documentType})
\`\`\`${"text"===e.contentType?"":`${e.contentType}
`}
${new o.Q().format(e)}
\`\`\``).join(`

`)}

${n.map(e=>`- ${e.name} (${e.documentType})
\`\`\`${"text"===e.contentType?"":`${e.contentType}
`}
${"string"==typeof e.content?e.content.trim():e.content}
\`\`\``).join(`

`)}
`}}},697844:(e,t,n)=>{n.d(t,{Q:()=>o});function o(e,t=!0){return{getOptions:()=>({renderLineHighlight:e,renderLineHighlightOnlyWhenFocus:t})}}},706330:(e,t,n)=>{n.r(t),n.d(t,{vscodeLspApi:()=>p});var o=n(882978),i=n(65616),a=n(921879),r=n(760108),s=n(368962),l=n(953894),c=n(754693),u=n(60446);class d extends r.nP{connectionProvider;constructor({id:e,name:t,clientOptions:n,connectionProvider:o}){super(e||t.toLowerCase(),t,n),this.connectionProvider=o;const i=this.handleRegistrationRequest.bind(this);this.handleRegistrationRequest=e=>{i({...e,registrations:e.registrations.filter(e=>null!==this.getFeature(e.method))})};const a=this.handleUnregistrationRequest.bind(this);this.handleUnregistrationRequest=e=>{a({...e,unregisterations:e.unregisterations.filter(e=>null!==this.getFeature(e.method))})}}createMessageTransports(e){return this.connectionProvider.get(e)}getLocale(){return navigator.language||"en-US"}registerBuiltinFeatures(){let e=new Map;this.registerFeature(new u.DidOpenTextDocumentFeature(this,this._syncedDocuments)),this._didChangeTextDocumentFeature=new u.DidChangeTextDocumentFeature(this,e),this._didChangeTextDocumentFeature.onPendingChangeAdded(()=>{this.triggerPendingChangeDelivery()}),this.registerFeature(this._didChangeTextDocumentFeature),this.registerFeature(new u.DidCloseTextDocumentFeature(this,this._syncedDocuments,e)),this.registerFeature(new s.DefinitionFeature(this))}}class m extends d{isRenameSymbolEnabled;isFindReferencesEnabled;constructor(e,{isRenameSymbolEnabled:t,isFindReferencesEnabled:n}){super(e),this.isRenameSymbolEnabled=t,this.isFindReferencesEnabled=n,this.registerPythonFeatures()}registerPythonFeatures(){this.isRenameSymbolEnabled()&&this.registerFeature(new c.RenameFeature(this)),this.isFindReferencesEnabled()&&this.registerFeature(new l.ReferencesFeature(this))}}let p={createLocation:o.Location.create,isLocation:o.Location.is,createLocationLink:o.LocationLink.create,isLocationLink:o.LocationLink.is,createRange:o.Range.create,createTextDocumentEdit:o.TextDocumentEdit.create,CompletionItemTag:i.CompletionItemTag,MonacoLanguageClient:d,CloseAction:r.rd,ErrorAction:r.Rn,MessageTransports:r.Am,makePythonLspLanguageClient:(e,t)=>new m(e,t),toSocket:a.fN,makeWebSocketMessageReader:(...e)=>new a.A1(...e),makeWebSocketMessageWriter:(...e)=>new a.I5(...e)}},719785:(e,t,n)=>{n.d(t,{v:()=>i,y:()=>o});class o{name;type;content;retriever;constructor({name:e,content:t,type:n,retriever:o}){this.name=e,this.content=t,this.type=n,this.retriever=o}}class i{name;chunks=[];documents=[];formatter;constructor({name:e,document:t,formatter:n}){this.documents=[t],this.name=e||"",this.formatter=n}add({name:e,content:t,contentType:n,document:o}){this.chunks.push({name:e,content:t,contentType:n,retrieverType:o.retriever,documentType:o.type}),this.documents.some(e=>e.name===o.name)||this.documents.push(o)}format(e){return this.formatter.format(this,e)}}},732992:(e,t,n)=>{n.a(e,async(e,o)=>{try{n.d(t,{q:()=>s});var i=n(345652),a=n(449633),r=e([i,a]);[i,a]=r.then?(await r)():r;class s{codeblockLimit;allLanguages;constructor({codeblockLimit:e=2,allLanguages:t=!1}={}){this.codeblockLimit=e,this.allLanguages=t}optimize(e){let t=Object.keys(e).filter(t=>"codePrefix"!==t&&"codeSuffix"!==t&&"codeCellsBefore"!==t&&"codeCellsAfter"!==t&&e[t]&&e[t].chunks.length>0),n=[],o=Math.max(a.VU-t.reduce((t,n)=>{let o=Math.max(a.VU-t,0),i=e[n]?.format(o);return t+(i?.length??0)},0),0);t.forEach(t=>{e[t]&&Array.isArray(e[t].chunks)&&e[t].chunks.forEach(e=>{e.toSkip&&n.push(e.name)})});let r=Math.floor((a.zS+o)*(100-a.YB)/100),s=a.zS+o-r,l=e.codePrefix?.chunks[0].contentType||"python",c=[],u=Array.isArray(e.codeCellsBefore?.documents[0]?.content)?e.codeCellsBefore?.documents[0].content:[],{previousCodeBlocks:d,prefixText:m,remainingBuffer:p}=(0,i.k$)(e.codePrefix?.format()||"",u.filter(e=>this.allLanguages||e.language===l).filter(e=>e.code&&e.code.trim().length>0).slice(-this.codeblockLimit),r);u.forEach(e=>{d.find(t=>t===e)||c.push(`Cell ${e.notebookCellIndex}`)});let f=Array.isArray(e.codeCellsAfter?.documents[0]?.content)?e.codeCellsAfter?.documents[0].content:[],{followingCodeBlocks:h,suffixText:g,remainingBuffer:T}=(0,i.pY)(e.codeSuffix?.format()||"",f.filter(e=>this.allLanguages||e.language===l).filter(e=>e.code&&e.code.trim().length>0).slice(0,this.codeblockLimit),p+s);f.forEach(e=>{h.find(t=>t===e)||c.push(`Cell ${e.notebookCellIndex}`)}),e.codePrefix&&e.codePrefix.chunks[0]&&(e.codePrefix.chunks[0].content=m),e.codeSuffix&&e.codeSuffix.chunks[0]&&(e.codeSuffix.chunks[0].content=g),e.codeCellsBefore&&(e.codeCellsBefore.chunks=d.map(e=>({name:e.name||"",content:e.code,contentType:e.language,retrieverType:"neighbor_code",documentType:"cell"}))),e.codeCellsAfter&&(e.codeCellsAfter.chunks=h.map(e=>({name:e.name||"",content:e.code,contentType:e.language,retrieverType:"neighbor_code",documentType:"cell"})));let E=[];return c.length>0&&E.push({name:"filteredOutCells",rerank:c}),n.length>0&&E.push({name:"ragChunksToSkip",rerank:n}),{name:"CodeCellsTruncaterOriginal",summary:{codeQuotaRemaining:T,codeQuotaLimit:r+s,ragQuotaLimit:a.VU},optimizations:E}}}o()}catch(e){o(e)}})},736390:(e,t,n)=>{n.d(t,{A:()=>r});let o=function(e){return Object.keys(e).includes("getSnippets")};var i=n(287578);function a(e,t,n,o,i,a,r){try{var s=e[a](r),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(o,i)}class r{connector;snippetsApi;constructor(e){this.connector=e,this.snippetsApi={}}update(e){var t;return(t=function*(){if(!o(this.snippetsApi)&&(this.snippetsApi=this.connector.snippetsApi.value,!o(this.snippetsApi)))return void console.warn("Still no snippets API available");e.push(...(yield this.snippetsApi.getSnippets()).map(e=>({value:e.trigger,pasteValue:e.snippet,details:e,meta:"snippet",category:i.b7.Snippet,detailsSerializable:{detailsType:"querySnippet",name:e.trigger,snippet:e.snippet,description:e.description,trigger:e.trigger}})))},function(){var e=this,n=arguments;return new Promise(function(o,i){var r=t.apply(e,n);function s(e){a(r,o,i,s,l,"next",e)}function l(e){a(r,o,i,s,l,"throw",e)}s(void 0)})}).call(this)}}},749379:(e,t,n)=>{n.a(e,async(e,o)=>{try{n.d(t,{K:()=>b});var i=n(394411),a=n(668014),r=n(893646),s=n(387897),l=n(968135),c=n(642412),u=n(246123),d=n(732992),m=n(808433),p=n(514107),f=n(207462),h=n(205602),g=n(524108),T=n(234722),E=e([r,s,u,d,f]);function b(e){return{originalPlan:{chunkers:new a.JK,optimizers:[new d.q({codeblockLimit:10}),new l.r],formatters:[new s.Q(e)]},originalPlanStructuredOnly:{chunkers:new a.JK,optimizers:[new d.q({codeblockLimit:10}),new l.r],formatters:[new s.Q(e)]},originalPlanTrimSqlCellDfs:{chunkers:new a.JK,optimizers:[new d.q({codeblockLimit:10}),new p.F(e),new l.r],formatters:[new s.Q(e)]},originalPlanTrimOutsideCellDfs:{chunkers:new a.JK,optimizers:[new d.q({codeblockLimit:10}),new m.$(e),new l.r],formatters:[new s.Q(e)]},originalPlanAllCellTypes:{chunkers:new a.JK,optimizers:[new d.q({codeblockLimit:10,allLanguages:!0}),new l.r],formatters:[new s.Q(e)]},originalPlanFunctionExamples:{chunkers:new a.JK,optimizers:[new d.q({codeblockLimit:10}),new l.r],formatters:[new s.Q(e)]},chunksByAssets:{chunkers:new i.U,optimizers:[new d.q({codeblockLimit:10}),new c.w(e),new g.U(e),new p.F(e),new m.$(e),new h.E(e),new T.O(e),new l.r],formatters:[new r.j]},activeCellAssets:{chunkers:new i.U,optimizers:[new c.w(e),new g.U(e),new p.F(e),new u.l],formatters:[new r.j]},chunksByAssetsRatioed:{chunkers:new a.JK,optimizers:[new f.$,new d.q],formatters:[new r.j]}}}[r,s,u,d,f]=E.then?(await E)():E,o()}catch(e){o(e)}})},769487:(e,t,n)=>{n.d(t,{j:()=>o});function o(e){return"catalogVirtualTableType"in e&&void 0!==e.catalogVirtualTableType}},808179:(e,t,n)=>{n.d(t,{Y:()=>a,z:()=>i});var o=n(301077);let i=(e,t)=>{let n=void 0!==t?t:null;if(!window.localStorage||window.DISABLE_LOCAL_STORAGE)return n;let o=window.LOGGED_USERNAME?`${window.LOGGED_USERNAME}.${e}`:e,i=window.localStorage.getItem(o);if(null===i)return n;if(i&&i.length){try{return JSON.parse(i)}catch(e){}return i}return n},a=(e,t)=>{if(!window.localStorage)return;if(window.DISABLE_LOCAL_STORAGE)return void window.localStorage.clear();let n=window.LOGGED_USERNAME?`${window.LOGGED_USERNAME}.${e}`:e;if(null==t)window.localStorage.removeItem(n);else{let e;try{e=JSON.stringify(t)}catch(e){}(0,o.Q)(n,e||String(t))}}},808433:(e,t,n)=>{n.d(t,{$:()=>o});class o{userContext;constructor(e){this.userContext=e}optimize(e){let t={name:"DataFrameColumnsTrimmer",optimizations:[]},n=[];if((e.notebook_specific||e.variable)&&"python"===this.userContext.language){let t=(this.userContext.codePrefix+this.userContext.codeSuffix).toLowerCase(),o=e=>{e?.chunks.forEach(e=>{let o="string"==typeof e.content&&e.content.match(/DataFrame '([^']+)'/)?.[1];o&&!t.includes(o.toLowerCase())&&(e.content=`DataFrame '${o}'`,n.push(o))}),e?.chunks.sort((e,t)=>{let n="string"==typeof e.content&&e.content.includes("columns =");return n===("string"==typeof t.content&&t.content.includes("columns ="))?0:n?-1:1})};o(e.variable),o(e.notebook_specific)}return n.length>0&&t.optimizations?.push({name:"DataFrameColumnsTrimmer",rerank:n}),t}}},812686:(e,t,n)=>{n.d(t,{k:()=>o});function o(e){for(let t in e)if(e.hasOwnProperty(t)){let n=e[t];n&&(n.documents=n.documents.map(e=>({name:e.name,content:"",metadata:{},type:e.type,retriever:e.retriever})))}}},824780:(e,t,n)=>{n.d(t,{$:()=>o});let o="Recommended to use"},833019:(e,t,n)=>{n.d(t,{NF:()=>o.NF,NL:()=>o.NL,Nq:()=>o.Nq,iI:()=>o.iI,ms:()=>o.ms,n7:()=>o.n7});var o=n(2769)},847292:(e,t,n)=>{n.d(t,{j:()=>o});class o{_maxConcurrent;constructor(e){this._maxConcurrent=e}acquire(){if(this._maxConcurrent>0)return this._maxConcurrent--,!0;return!1}release(){this._maxConcurrent++}}},859916:(e,t,n)=>{n.r(t),n.d(t,{doc:()=>i,header:()=>o});let o="GROUP BY clause",i=`

The \`GROUP BY\` clause is used to group the rows based on a set of specified grouping expressions and compute aggregations on the group of rows based on one or more specified aggregate functions.
Databricks SQL also supports advanced aggregations to do multiple aggregations for the same input record set via \`GROUPING SETS\`, \`CUBE\`, \`ROLLUP\` clauses.
The grouping expressions and advanced aggregations can be mixed in the \`GROUP BY\` clause and nested in a \`GROUPING SETS\` clause.

See more details in the Mixed/Nested Grouping Analytics section.

When a \`FILTER\` clause is attached to an aggregate function, only the matching rows are passed to that function.

## Syntax

\`\`\`
GROUP BY ALL

GROUP BY group_expression [, ...] [ WITH ROLLUP | WITH CUBE ]

GROUP BY { group_expression | { ROLLUP | CUBE | GROUPING SETS } ( grouping_set [, ...] ) } [, ...]

grouping_set
   { expression |
     ( [ expression [, ...] ] ) }
\`\`\`

While aggregate functions are defined as

\`\`\`
aggregate_name ( [ DISTINCT ] expression [, ...] ) [ FILTER ( WHERE boolean_expression ) ]
\`\`\`

## Parameters

- **ALL**


    A shorthand notation to add all \`SELECT\`-list expressions not containing aggregate functions as \`group_expression\`s.
    If no such expression exist \`GROUP BY ALL\` is equivalent to omitting the \`GROUP BY\` clause which results in a global aggregation.

    \`GROUP BY ALL\` is not guaranteed to produce a set of group expressions which can be resolved.
    Databricks SQL raises UNRESOLVED_ALL_IN_GROUP_BY or MISSING_AGGREGATION if the produced clause is not well-formed.

- **group_expression**

    Specifies the criteria for grouping rows together.
    The grouping of rows is performed based on result values of the grouping expressions.
    A grouping expression may be a column name like \`GROUP BY a\`, column position like \`GROUP BY 0\`, or an expression like \`GROUP BY a + b\`.
    If \`group_expression\` contains an aggregate function Databricks SQL raises a GROUP_BY_AGGREGATE error.

- **grouping_set**

    A grouping set is specified by zero or more comma-separated expressions in parentheses.
    When the grouping set has only one element, parentheses can be omitted.
    For example, \`GROUPING SETS ((a), (b))\` is the same as \`GROUPING SETS (a, b)\`.

- **GROUPING SETS**

    Groups the rows for each grouping set specified after \`GROUPING SETS\`. For example:

    \`GROUP BY GROUPING SETS ((warehouse), (product))\` is semantically equivalent to a union of results of \`GROUP BY warehouse\` and \`GROUP BY product\`.

    This clause is a shorthand for a \`UNION ALL\` where each leg of the \`UNION ALL\` operator performs aggregation of each grouping set specified in the \`GROUPING SETS\` clause.

    Similarly, \`GROUP BY GROUPING SETS ((warehouse, product), (product), ())\` is semantically equivalent to the union of results of \`GROUP BY warehouse, product\`, \`GROUP BY product\` and a global aggregate.


- **ROLLUP**

    Specifies multiple levels of aggregations in a single statement.
    This clause is used to compute aggregations based on multiple grouping sets.
    \`ROLLUP\` is a shorthand for \`GROUPING SETS\`. For example:

    \`GROUP BY warehouse, product WITH ROLLUP\` or \`GROUP BY ROLLUP(warehouse, product)\` is equivalent to

    \`GROUP BY GROUPING SETS((warehouse, product), (warehouse), ())\`.

    While  \`GROUP BY ROLLUP(warehouse, product, (warehouse, location))\`

    is equivalent to \`GROUP BY GROUPING SETS((warehouse, product, location), (warehouse, product), (warehouse), ())\`.

    The N elements of a \`ROLLUP\` specification result in N+1 \`GROUPING SETS\`.

- **CUBE**

    The \`CUBE\` clause is used to perform aggregations based on a combination of grouping columns specified in the \`GROUP BY\` clause.
    \`CUBE\` is a shorthand for \`GROUPING SETS\`. For example:

    \`GROUP BY warehouse, product WITH CUBE\` or \`GROUP BY CUBE(warehouse, product)\` is equivalent to

    \`GROUP BY GROUPING SETS((warehouse, product), (warehouse), (product), ())\`.

    \`GROUP BY CUBE(warehouse, product, (warehouse, location))\` is equivalent to the following:

    \`\`\`sql
    GROUP BY GROUPING SETS((warehouse, product, location), (warehouse, product), (warehouse, location), (product, warehouse, location), (warehouse), (product), (warehouse, product), ())
    \`\`\`

    The N elements of a \`CUBE\` specification results in 2^N \`GROUPING SETS\`.

- **aggregate_name**

    An aggregate function name (MIN, MAX, COUNT, SUM, AVG, etc.).

- **DISTINCT**

    Removes duplicates in input rows before they are passed to aggregate functions.

- **FILTER**

    Filters the input rows for which the \`boolean_expression\` in the \`WHERE\` clause evaluates
    to true are passed to the aggregate function; other rows are discarded.

## Mixed/Nested Grouping Analytics

A \`GROUP BY\` clause can include multiple group_expressions and multiple \`CUBE\`, \`ROLLUP\`, and \`GROUPING SETS\`s.

\`GROUPING SETS\` can also have nested \`CUBE\`, \`ROLLUP\`, or \`GROUPING SETS\` clauses. For example:

\`\`\`sql
GROUPING SETS(ROLLUP(warehouse, location), CUBE(warehouse, location)), GROUPING SETS(warehouse, GROUPING SETS(location, GROUPING SETS(ROLLUP(warehouse, location), CUBE(warehouse, location))))
\`\`\`

\`CUBE\` and \`ROLLUP\` is just syntax sugar for \`GROUPING SETS\`.
Please refer to the sections above for how to translate \`CUBE\` and \`ROLLUP\` to \`GROUPING SETS\`.
\`group_expression\` can be treated as a single-group \`GROUPING SETS\` in this context.

For multiple \`GROUPING SETS\` in the \`GROUP BY\` clause, Databricks SQL generates a single \`GROUPING SETS\` by doing a cross-product of the original \`GROUPING SETS\`.

For nested \`GROUPING SETS\` in the \`GROUPING SETS\` clause, Databricks SQL takes its grouping sets and strips them. For example, the following queries:

\`\`\`sql
GROUP BY warehouse, GROUPING SETS((product), ()), GROUPING SETS((location, size), (location), (size), ());

GROUP BY warehouse, ROLLUP(product), CUBE(location, size);
\`\`\`

are equivalent to the following:

\`\`\`sql
GROUP BY GROUPING SETS( (warehouse, product, location, size), (warehouse, product, location), (warehouse, product, size), (warehouse, product), (warehouse, location, size), (warehouse, location), (warehouse, size), (warehouse))
\`\`\`

While \`GROUP BY GROUPING SETS(GROUPING SETS(warehouse), GROUPING SETS((warehouse, product)))\`

is equivalent to \`GROUP BY GROUPING SETS((warehouse), (warehouse, product))\`.

## Examples

\`\`\`sql
CREATE TEMP VIEW dealer (id, city, car_model, quantity) AS
VALUES (100, 'Fremont', 'Honda Civic', 10),
       (100, 'Fremont', 'Honda Accord', 15),
       (100, 'Fremont', 'Honda CRV', 7),
       (200, 'Dublin', 'Honda Civic', 20),
       (200, 'Dublin', 'Honda Accord', 10),
       (200, 'Dublin', 'Honda CRV', 3),
       (300, 'San Jose', 'Honda Civic', 5),
       (300, 'San Jose', 'Honda Accord', 8);

-- Sum of quantity per dealership. Group by \`id\`.
> SELECT id, sum(quantity) FROM dealer GROUP BY id ORDER BY id;
  id sum(quantity)
 --- -------------
 100            32
 200            33
 300            13

-- Use column position in GROUP by clause.
> SELECT id, sum(quantity) FROM dealer GROUP BY 1 ORDER BY 1;
  id sum(quantity)
 --- -------------
 100            32
 200            33
 300            13

-- Multiple aggregations.
-- 1. Sum of quantity per dealership.
-- 2. Max quantity per dealership.
> SELECT id, sum(quantity) AS sum, max(quantity) AS max
    FROM dealer GROUP BY id ORDER BY id;
  id sum max
 --- --- ---
 100  32  15
 200  33  20
 300  13   8

-- Count the number of distinct dealers in cities per car_model.
> SELECT car_model, count(DISTINCT city) AS count FROM dealer GROUP BY car_model;
    car_model count
 ------------ -----
  Honda Civic     3
    Honda CRV     2
 Honda Accord     3

-- Count the number of distinct dealers in cities per car_model, using GROUP BY ALL
> SELECT car_model, count(DISTINCT city) AS count FROM dealer GROUP BY ALL;
    car_model count
 ------------ -----
  Honda Civic     3
    Honda CRV     2
 Honda Accord     3

-- Sum of only 'Honda Civic' and 'Honda CRV' quantities per dealership.
> SELECT id,
         sum(quantity) FILTER (WHERE car_model IN ('Honda Civic', 'Honda CRV')) AS \`sum(quantity)\`
    FROM dealer
    GROUP BY id ORDER BY id;
  id sum(quantity)
 --- -------------
 100            17
 200            23
 300             5

-- Aggregations using multiple sets of grouping columns in a single statement.
-- Following performs aggregations based on four sets of grouping columns.
-- 1. city, car_model
-- 2. city
-- 3. car_model
-- 4. Empty grouping set. Returns quantities for all city and car models.
> SELECT city, car_model, sum(quantity) AS sum
    FROM dealer
    GROUP BY GROUPING SETS ((city, car_model), (city), (car_model), ())
    ORDER BY city;
      city    car_model sum
 --------- ------------ ---
      null         null  78
      null  HondaAccord  33
      null     HondaCRV  10
      null   HondaCivic  35
    Dublin         null  33
    Dublin  HondaAccord  10
    Dublin     HondaCRV   3
    Dublin   HondaCivic  20
   Fremont         null  32
   Fremont  HondaAccord  15
   Fremont     HondaCRV   7
   Fremont   HondaCivic  10
  San Jose         null  13
  San Jose  HondaAccord   8
  San Jose   HondaCivic   5

-- Group by processing with \`ROLLUP\` clause.
-- Equivalent GROUP BY GROUPING SETS ((city, car_model), (city), ())
> SELECT city, car_model, sum(quantity) AS sum
    FROM dealer
    GROUP BY city, car_model WITH ROLLUP
    ORDER BY city, car_model;
      city    car_model sum
 --------- ------------ ---
      null         null  78
    Dublin         null  33
    Dublin  HondaAccord  10
    Dublin     HondaCRV   3
    Dublin   HondaCivic  20
   Fremont         null  32
   Fremont  HondaAccord  15
   Fremont     HondaCRV   7
   Fremont   HondaCivic  10
  San Jose         null  13
  San Jose  HondaAccord   8
  San Jose   HondaCivic   5

-- Group by processing with \`CUBE\` clause.
-- Equivalent GROUP BY GROUPING SETS ((city, car_model), (city), (car_model), ())
> SELECT city, car_model, sum(quantity) AS sum
    FROM dealer
    GROUP BY city, car_model WITH CUBE
    ORDER BY city, car_model;
      city    car_model sum
 --------- ------------ ---
      null         null  78
      null  HondaAccord  33
      null     HondaCRV  10
      null   HondaCivic  35
    Dublin         null  33
    Dublin  HondaAccord  10
    Dublin     HondaCRV   3
    Dublin   HondaCivic  20
   Fremont         null  32
   Fremont  HondaAccord  15
   Fremont     HondaCRV   7
   Fremont   HondaCivic  10
  San Jose         null  13
  San Jose  HondaAccord   8
  San Jose   HondaCivic   5

--Prepare data for ignore nulls example
> CREATE TEMP VIEW person (id, name, age) AS
   VALUES (100, 'Mary', NULL),
          (200, 'John', 30),
          (300, 'Mike', 80),
          (400, 'Dan' , 50);

--Select the first row in column age
> SELECT FIRST(age) FROM person;
  first(age, false)
 --------------------
  NULL

--Get the first row in column \`age\` ignore nulls,last row in column \`id\` and sum of column \`id\`.
> SELECT FIRST(age IGNORE NULLS), LAST(id), SUM(id) FROM person;
  first(age, true)    last(id, false)    sum(id)
 ------------------- ------------------ ----------
  30                  400                1000
\`\`\`

`},869907:(e,t,n)=>{n.d(t,{n:()=>a});var o=n(759458);let i={autoCompletion:void 0,showToolbar:(0,n(410268).Lg)("showToolbar","always"),assistantClipboardData:void 0,setSelectedSuggestionInfo:()=>{},setShowToolbar:()=>{},setAssistantClipboardData:()=>{}},a=(0,o.Ay)(e=>({...i,setSelectedSuggestionInfo:t=>e({selectedSuggestionInfo:t}),setShowToolbar:t=>e({showToolbar:t}),setAssistantClipboardData:t=>e({assistantClipboardData:t})}))},893646:(e,t,n)=>{n.a(e,async(e,o)=>{try{n.d(t,{j:()=>r});var i=n(449633),a=e([i]);i=(a.then?(await a)():a)[0];class r{format(e,t){let{trimmedContextPrompt:n,remainingBuffer:o}=this.getTrimmedContextPrompt(Object.keys(e).filter(t=>"codePrefix"!==t&&"codeSuffix"!==t&&"codeCellsBefore"!==t&&"codeCellsAfter"!==t&&e[t]&&e[t].chunks.length>0).map(t=>`<jupyter_text>${e[t].format()}`).join("\n").split("\n").filter(e=>""!==e.trim()).join("\n"));t.summary.ragQuotaRemaining=o;let a=new Map([["header","<fim_prefix><jupyter_start><db_notebook>"],["source",`${i.uM.get(e.codePrefix.chunks[0].contentType??"")} Databricks notebook source`],["ragPrompt",`${n}`],["codeCellsBefore",`${e.codeCellsBefore.chunks.map(e=>`<jupyter_code><db_${e.contentType}>${e.name?i.uM.get(e.contentType??"")+" "+e.name+"\n":""}${e.content}`).join("\n")}`],["codePrefixSuffix",`<jupyter_code><db_${e.codePrefix.chunks[0].contentType??"python"}>${e.codePrefix.format()}<fim_suffix>${e.codeSuffix.format()}`],["codeCellsAfter",`${e.codeCellsAfter.chunks.map(e=>`<jupyter_code><db_${e.contentType}>${e.name?i.uM.get(e.contentType??"")+" "+e.name+"\n":""}${e.content}`).join("\n")}`]]);return Array.from(a.values()).filter(e=>""!==e.trim()).join("\n")+"<fim_middle>"}getTrimmedContextPrompt=e=>{let t=e.trim();return{trimmedContextPrompt:t=t.substring(0,i.VU),remainingBuffer:i.VU-t.length}}}o()}catch(e){o(e)}})},905210:(e,t,n)=>{n.d(t,{D:()=>r});var o=n(410268);function i(e,t,n,o,i,a,r){try{var s=e[a](r),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(o,i)}function a(e){return function(){var t=this,n=arguments;return new Promise(function(o,a){var r=e.apply(t,n);function s(e){i(r,o,a,s,l,"next",e)}function l(e){i(r,o,a,s,l,"throw",e)}s(void 0)})}}function r(e=!1){return{preload:()=>a(function*(){yield Promise.all([(()=>{let e=()=>n.e(82268).then(n.bind(n,282268));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(282268,"@databricks/monaco-0-51/nativePlugins/dbsqlNativeFeaturesPlugin","lazy",e);return e()})(),a(function*(){let t=e&&(0,o.bu)()?(yield(()=>{let e=()=>Promise.resolve().then(n.bind(n,861265));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(861265,"../../CustomThemePlugin/CustomThemePlugin","eager",e);return e()})()).CustomThemePlugin:null;t&&(yield t().preload?.())})(),a(function*(){let e=(0,o.jw)()?(yield(()=>{let e=()=>Promise.all([n.e(59190),n.e(30865)]).then(n.bind(n,530865));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(530865,"../../languages/TextMatePlugin","lazy",e);return e()})()).TextMatePlugin:null;e&&(yield e("dbsql").preload?.())})(),(yield(()=>{let e=()=>Promise.resolve().then(n.bind(n,588763));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(588763,"../../databricksPlugins/UnifiedThemePlugin","eager",e);return e()})()).UnifiedThemePlugin().preload?.()])})()}}},923283:(e,t,n)=>{n.d(t,{g:()=>i});class o{subscribers=new Map;subscribersInternal=new Map;workerImpl={postMessage:e=>{this.subscribers.has("message")&&this.subscribers.get("message")?.forEach(t=>t({data:e}))},addEventListener:(e,t)=>{this.subscribersInternal.has(e)?this.subscribersInternal.get(e)?.push(t):this.subscribersInternal.set(e,[t])},removeEventListener:(e,t)=>{let n=this.subscribersInternal.get(e);if(!n)throw Error(`MockedWorker.workerImpl.removeEventListener(): No listeners for type '${e}'`);if(-1===n.indexOf(t))throw Error(`MockedWorker.workerImlp.removeEventListener(): Listener not found for type '${e}'`);this.subscribersInternal.set(e,n.filter(e=>e!==t)||[])},terminate:()=>{this.subscribersInternal.clear()}};postMessage(e){this.subscribersInternal.has("message")&&this.subscribersInternal.get("message")?.forEach(t=>t({data:e}))}addEventListener(e,t){this.subscribers.has(e)?this.subscribers.get(e)?.push(t):this.subscribers.set(e,[t])}removeEventListener(e,t){let n=this.subscribers.get(e);if(!n)throw Error(`MockedWorker.removeEventListener(): No listeners for type '${e}'`);if(n?.indexOf(t)===-1)throw Error(`MockedWorker.removeEventListener(): Listener not found for type '${e}'`);this.subscribers.set(e,n.filter(e=>e!==t)||[])}terminate(){this.subscribers.clear()}}let i=()=>{n.g.Worker=o}},933381:(e,t,n)=>{function o(e,t){let n,o,i,a,r=t;function s(){r=e.apply(o,n),i=Date.now(),a=void 0}function l(){a&&(clearTimeout(a),a=void 0)}function c(){l(),s()}function u(...e){n=e,o=this;let l=Date.now(),d=void 0===i||l-i>=r?t:r-(l-i);return d<=0?c():a||(a=setTimeout(s,d)),r}return u.cancel=l,u.flush=c,u}function i(e){if(e<1e5)return 1e3;if(e<1e6)return 15e3;return 3e4}n.d(t,{R:()=>i,i:()=>o})},939586:(e,t,n)=>{n.r(t),n.d(t,{doc:()=>i,header:()=>o});let o="Window functions",i=`

Functions that operate on a group of rows, referred to as a window, and calculate a return value for each row based on the group of rows.
Window functions are useful for processing tasks such as calculating a moving average, computing a cumulative statistic, or accessing the value of rows given the relative position of the current row.

## Syntax

\`\`\`
function OVER { window_name | ( window_name ) | window_spec }

function
  { ranking_function | analytic_function | aggregate_function }

over_clause
  OVER { window_name | ( window_name ) | window_spec }

window_spec
  ( [ PARTITION BY partition [ , ... ] ] [ order_by ] [ window_frame ] )
\`\`\`

## Parameters

- **function**

      The function operating on the window. Different classes of functions support different configurations of window specifications.

    * ranking_function

      Any of the _.

      If specified the window_spec must include an ORDER BY clause, but not a window_frame clause.

    * analytic_function

      Any of the _.

    * aggregate_function

      Any of the _.

      If specified the function must not include a FILTER clause.

- **window_name**

    Identifies a named window specification defined by the query.

- **window_spec**

      This clause defines how the rows will be grouped, sorted within the group, and which rows within a partition a function operates on.

     * partition

       One or more expression used to specify a group of rows defining the scope on which the function operates.
       If no PARTITION clause is specified the partition is comprised of all rows.

     * order_by

       The ORDER BY clause specifies the order of rows within a partition.

     * window_frame

       The window frame clause specifies a sliding subset of rows within the partition on which the aggregate or analytics function operates.

You can specify SORT BY as an alias for ORDER BY.

You can also specify DISTRIBUTE BY as an alias for PARTITION BY.
You can use CLUSTER BY as an alias for PARTITION BY in the absence of ORDER BY.

## Examples

\`\`\`sql
> CREATE TABLE employees
   (name STRING, dept STRING, salary INT, age INT);
> INSERT INTO employees
   VALUES ('Lisa', 'Sales', 10000, 35),
          ('Evan', 'Sales', 32000, 38),
          ('Fred', 'Engineering', 21000, 28),
          ('Alex', 'Sales', 30000, 33),
          ('Tom', 'Engineering', 23000, 33),
          ('Jane', 'Marketing', 29000, 28),
          ('Jeff', 'Marketing', 35000, 38),
          ('Paul', 'Engineering', 29000, 23),
          ('Chloe', 'Engineering', 23000, 25);

> SELECT name, dept, salary, age FROM employees;
 Chloe Engineering 23000   25
  Fred Engineering 21000   28
  Paul Engineering 29000   23
 Helen   Marketing 29000   40
   Tom Engineering 23000   33
  Jane   Marketing 29000   28
  Jeff   Marketing 35000   38
  Evan       Sales 32000   38
  Lisa       Sales 10000   35
  Alex       Sales 30000   33

> SELECT name,
         dept,
         RANK() OVER (PARTITION BY dept ORDER BY salary) AS rank
  FROM employees;
  Lisa       Sales  10000    1
  Alex       Sales  30000    2
  Evan       Sales  32000    3
  Fred Engineering  21000    1
   Tom Engineering  23000    2
 Chloe Engineering  23000    2
  Paul Engineering  29000    4
 Helen   Marketing  29000    1
  Jane   Marketing  29000    1
  Jeff   Marketing  35000    3

> SELECT name,
         dept,
         DENSE_RANK() OVER (PARTITION BY dept ORDER BY salary
                            ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS dense_rank
    FROM employees;
  Lisa       Sales  10000          1
  Alex       Sales  30000          2
  Evan       Sales  32000          3
  Fred Engineering  21000          1
   Tom Engineering  23000          2
 Chloe Engineering  23000          2
  Paul Engineering  29000          3
 Helen   Marketing  29000          1
  Jane   Marketing  29000          1
  Jeff   Marketing  35000          2

> SELECT name,
         dept,
         age,
         CUME_DIST() OVER (PARTITION BY dept ORDER BY age
                           RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS cume_dist
    FROM employees;
  Alex       Sales     33 0.3333333333333333
  Lisa       Sales     35 0.6666666666666666
  Evan       Sales     38                1.0
  Paul Engineering     23               0.25
 Chloe Engineering     25               0.50
  Fred Engineering     28               0.75
   Tom Engineering     33                1.0
  Jane   Marketing     28 0.3333333333333333
  Jeff   Marketing     38 0.6666666666666666
 Helen   Marketing     40                1.0

> SELECT name,
         dept,
         salary,
         MIN(salary) OVER (PARTITION BY dept ORDER BY salary) AS min
    FROM employees;
  Lisa       Sales  10000 10000
  Alex       Sales  30000 10000
  Evan       Sales  32000 10000
 Helen   Marketing  29000 29000
  Jane   Marketing  29000 29000
  Jeff   Marketing  35000 29000
  Fred Engineering  21000 21000
   Tom Engineering  23000 21000
 Chloe Engineering  23000 21000
  Paul Engineering  29000 21000

> SELECT name,
         salary,
         LAG(salary) OVER (PARTITION BY dept ORDER BY salary) AS lag,
         LEAD(salary, 1, 0) OVER (PARTITION BY dept ORDER BY salary) AS lead
    FROM employees;
  Lisa       Sales  10000 NULL  30000
  Alex       Sales  30000 10000 32000
  Evan       Sales  32000 30000     0
  Fred Engineering  21000  NULL 23000
 Chloe Engineering  23000 21000 23000
   Tom Engineering  23000 23000 29000
  Paul Engineering  29000 23000     0
 Helen   Marketing  29000  NULL 29000
  Jane   Marketing  29000 29000 35000
  Jeff   Marketing  35000 29000     0
\`\`\`

`},939747:(e,t,n)=>{n.d(t,{A:()=>p});var o,i=((o=i||{})[o.RUNNING=0]="RUNNING",o[o.PAUSED=1]="PAUSED",o);let a={},r=()=>{},s=()=>{},l=a.hasOwnProperty,c=(e,t,n)=>{l.call(a,e)||(a[e]=[]);let o=a[e].push({listener:t,app:n,state:0})-1;return{remove:()=>{delete a[e][o]}}},u=(e,t,n)=>(s(e),c(e,t,n)),d=(e,t,n)=>{if(!l.call(a,e))return;a[e].forEach(e=>{0===e.state&&e.listener(t)})},m=(e,t)=>{t&&Object.keys(a).forEach(n=>{a[n].forEach(n=>{n.app&&(n.app===t||n.app.split("-")[0]===t)&&(n.state=e)})})},p={clearAppSubscribers:e=>{e&&Object.keys(a).forEach(t=>{a[t]=a[t].filter(t=>t.app!==e)})},getTopics:()=>a,pauseAppSubscribers:e=>{m(1,e)},publish:(e,t)=>{r(e),d(e,t)},removeAll:e=>{a[e]=[]},resumeAppSubscribers:e=>{m(0,e)},subscribe:u,subscribeOnce:(e,t,n)=>{let o=u(e,e=>{t(e),o.remove()},n);return o},setOnPublish:e=>{r=e},setOnSubscribe:e=>{s=e},publishWithoutExtraActions:d,subscribeWithoutExtraActions:c}},946776:(e,t,n)=>{n.a(e,async(e,o)=>{try{n.d(t,{cd:()=>O,hW:()=>F,wg:()=>N});var i=n(441535),a=n(940912),r=n(886100),s=n(22191),l=n(703546),c=n(540393),u=n(490137),d=n(144781),m=n(572293),p=n(448116),f=n(419031),h=n(130388),g=n(642617),T=n(105026),E=n(228091),b=n(554148),y=n(214056),S=n(598472),L=n(158138),C=e([y,S,L]);function A(e,t,n,o,i,a,r){try{var s=e[a](r),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(o,i)}function v(e){return function(){var t=this,n=arguments;return new Promise(function(o,i){var a=e.apply(t,n);function r(e){A(a,o,i,r,s,"next",e)}function s(e){A(a,o,i,r,s,"throw",e)}r(void 0)})}}[y,S,L]=C.then?(await C)():C;let R=["ADD","ALTER","AND","AS","BETWEEN","BY","CASE","COLUMN","CREATE","DELETE","DISTINCT","DROP","EXISTS","FROM","GROUP","HAVING","IN","INSERT","INTO","JOIN","LIKE","LIMIT","NOT","OR","ORDER","SELECT","SET","TABLE","UNION","UPDATE","USE","WHERE","WITH"],O=(e,t)=>{if(t)return e.map(e=>({...e,disambiguatedSuggestion:void 0}));let n=[],o=new Map;for(let t of e){let{type:e,suggestion:i}=t;if(e===g.FC.COLUMN){let e=i.toLowerCase();o.has(e)||o.set(e,[]),o.get(e)?.push(t)}else n.push({...t,disambiguatedSuggestion:void 0})}for(let e of o){let t=e[1];if(t.length>1)for(let e of t)e.disambiguatedSuggestion?.length&&e.disambiguatedSuggestion.length>=2&&e.disambiguatedSuggestion.slice(-2).every(e=>""!==e)?n.push({...e,disambiguatedSuggestion:e.disambiguatedSuggestion.slice(-2)}):n.push({...e,disambiguatedSuggestion:void 0});else n.push(...t.map(e=>({...e,disambiguatedSuggestion:void 0})))}return n},x=({model:e,position:t,fetchVolumes:n,timerTracker:o,createdOrRenamedVolumes:i})=>v(function*(){if(!n)return[];o.track(m.ml.ApiRequest);try{return(yield(0,L.jA)(e,t,n,i))??[]}catch(e){return r.iT.log(s.Es.Editor,"fetchVolumePathCompletionItems",e),[]}finally{o.track(m.ml.OtherExecution)}})(),N=(e,t,n,o,r,s,d,L,C,A)=>v(function*(){let R=(0,a.yB)(),{modifiedText:O,wasTextModified:N,afterPeriod:I}=((e,t)=>{let n=e.getFullModelRange(),o=e.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:t.lineNumber,endColumn:t.column}),i=e.getValueInRange({startLineNumber:t.lineNumber,startColumn:t.column,endLineNumber:n.endLineNumber,endColumn:n.endColumn}),a=o.slice(-1);if(["."," ","\n","\v","\f","\r","	","(",","].includes(a)||""===a)return{modifiedText:o+"A"+i,wasTextModified:!0,afterPeriod:"."===a};return{modifiedText:e.getValue(),wasTextModified:!1,afterPeriod:"."===a}})(e,t),{text:w,position:D,prefixInfo:P}=_(O,t,C),M=(0,S.r1)(w),F=(0,u.K)(M),U=(0,l.u)({selection:(0,y.Q)().makeSelection(1,1,1,1),statements:F,cursorLocation:D});if(!U.activeStatement)return{status:g.IZ.ERROR,afterPeriod:I,volumeCompletionItems:[]};let B=U.activeStatement,q=U.activeCatalog??s,G=U.activeDatabase??d;if(!q||!G)return{status:g.IZ.ERROR,afterPeriod:I,volumeCompletionItems:[]};let $=L?.current??(yield n.catalogApi.value.getPersonalizedTables?.())??[],V=(0,f.s0)(U.precedingStatements.map(e=>({query:e.statement,catalog:q,schema:G})),"preceding"),{params:H,replacedQuery:Y}=(0,c.$W)(B.statement),W=(0,h.iA)(B.location,D),j=(0,b.k)(o,U.statementIndex);if(N){let o={lineNumber:W.lineNumber,column:W.column+1},i=yield(0,p.p)({statement:Y,position:o,connector:n,queryContext:{catalog:q,database:G,createdIdentifiers:V[0],params:H,personalizedTables:$,cacheMaxSize:(0,T.fZ)(),enableAutocompleteVolumeNames:(0,E.k)(),enableAutocompleteVolumes:(0,E.M)()},statementId:j});return R.run(()=>v(function*(){r.integrateCrossThreadTimerTracker(i.loggingInfo.timerTracker,m.ml.OtherExecution,i.loggingInfo.totalDuration);let n=yield x({model:e,position:t,fetchVolumes:A,timerTracker:r,createdOrRenamedVolumes:V[0].createdOrRenamedVolumes});if(i.candidates&&i.status===g.IZ.SUCCESS)return{candidates:{...i.candidates,range:{startLineNumber:t.lineNumber,endLineNumber:t.lineNumber,startColumn:t.column,endColumn:t.column}},status:g.IZ.SUCCESS,afterPeriod:I,volumeCompletionItems:n};return{candidates:i.candidates,status:i.status,afterPeriod:I,volumeCompletionItems:n}})())}let Q=yield(0,p.p)({statement:Y,position:W,connector:n,queryContext:{catalog:q,database:G,createdIdentifiers:V[0],params:H,personalizedTables:$,cacheMaxSize:(0,T.fZ)(),enableAutocompleteVolumeNames:(0,E.k)(),enableAutocompleteVolumes:(0,E.M)()},statementId:j});return R.run(()=>v(function*(){r.integrateCrossThreadTimerTracker(Q.loggingInfo.timerTracker,m.ml.OtherExecution,Q.loggingInfo.totalDuration);let n=yield x({model:e,position:t,fetchVolumes:A,timerTracker:r,createdOrRenamedVolumes:V[0].createdOrRenamedVolumes});if(Q.candidates&&Q.status===g.IZ.SUCCESS){let e=Q.candidates.range,o=(0,h.lt)(e,B.location),a=C?k(o,P):o;return(0,i.W)("databricks.fe.editor.enableDontDeleteBehindCursor",!0)&&a.endLineNumber===t.lineNumber&&(a={...a,endColumn:Math.min(a.endColumn,t.column)}),{candidates:{...Q.candidates,range:a},status:g.IZ.SUCCESS,afterPeriod:I,volumeCompletionItems:n}}return{candidates:Q.candidates,status:Q.status,afterPeriod:I,volumeCompletionItems:n}})())})(),_=(e,t,n)=>{let o,i,a;if(!(n&&n.length>0))return{text:e,position:t,prefixInfo:{lineCount:0,lastLineLen:0}};let r=(i=(o=n.split("\n")).length-1,a=o[o.length-1]?.length??0,{lineCount:i,lastLineLen:a}),s=n+e,l=r.lineCount>0?{lineNumber:t.lineNumber+r.lineCount,column:t.column}:{lineNumber:t.lineNumber,column:t.column+r.lastLineLen};return{text:s,position:l,prefixInfo:r}},k=(e,t)=>{let n=({lineNumber:e,column:n})=>{let{lineCount:o,lastLineLen:i}=t;if(0===o)return{lineNumber:e,column:Math.max(1,n-i)};if(e<=o)return{lineNumber:1,column:1};if(e===o+1)return{lineNumber:1,column:Math.max(1,n-i)};return{lineNumber:e-o,column:n}},o=n({lineNumber:e.startLineNumber,column:e.startColumn}),i=n({lineNumber:e.endLineNumber,column:e.endColumn});return{startLineNumber:o.lineNumber,startColumn:o.column,endLineNumber:i.lineNumber,endColumn:i.column}},I=e=>(0,d.Vc)(e.suggestion)+(e.fullyQualified?"":"."),w=e=>{let t=e.disambiguatedSuggestion?e.disambiguatedSuggestion.map(e=>(0,d.Vc)(e)).join("."):(0,d.Vc)(e.suggestion);if("struct"===e.additionalTypeInfo)return t+".";return t},D=e=>(e.pathSuggestion??[]).map(e=>(0,d.Vc)(e)).join("."),P={[g.FC.FUNCTION]:{kind:1,upperCaseType:"Function",label:e=>e.suggestion,filterText:e=>e.suggestion,insertText:e=>e.suggestion,description:e=>{if(!e.functionDetails||0===e.functionDetails.returnTypes.length||"t"===e.functionDetails.returnTypes[0].toLowerCase())return"";return e.functionDetails.returnTypes[0].toLowerCase()},documentationDetails:e=>({detailsType:"function",name:e.suggestion}),sortText:()=>"8"},[g.FC.KEYWORD]:{kind:17,upperCaseType:"Keyword",label:e=>e.suggestion,filterText:e=>e.suggestion,insertText:e=>e.suggestion,description:()=>"keyword",documentationDetails:()=>void 0,sortText:e=>{if(R.includes(e.suggestion.toUpperCase()))return"6";return"7"}},[g.FC.CATALOG]:{kind:12,upperCaseType:"Catalog",label:I,filterText:e=>e.suggestion,insertText:I,description:()=>"catalog",documentationDetails:()=>void 0,sortText:()=>"5"},[g.FC.SCHEMA]:{kind:15,upperCaseType:"Database",label:I,filterText:e=>e.suggestion,insertText:I,description:()=>"schema",documentationDetails:e=>{if(e.skipDocumentation)return;return{detailsType:"dataCatalog",path:e.path??[],parseType:"database"}},sortText:()=>"4"},[g.FC.TABLE]:{kind:14,upperCaseType:"Table",label:I,filterText:e=>e.suggestion,insertText:I,description:e=>{if(e.additionalTypeInfo)switch(e.additionalTypeInfo){case"VIEW":return"view";case"STREAMING_TABLE":return"streaming table";case"MATERIALIZED_VIEW":return"materialized view"}return"table"},documentationDetails:e=>({detailsType:"dataCatalog",path:e.path??[],parseType:"table"}),sortText:()=>"3"},[g.FC.COLUMN]:{kind:6,upperCaseType:"Column",label:w,filterText:e=>e.suggestion,insertText:w,description:e=>(e.isKey?"\uD83D\uDD11 ":"")+(e.additionalTypeInfo??"column"),documentationDetails:e=>({detailsType:"dataCatalog",path:e.path??[],parseType:"column"}),sortText:()=>"2"},[g.FC.FIELD]:{kind:6,upperCaseType:"Column",label:w,filterText:e=>e.suggestion,insertText:w,description:e=>e.additionalTypeInfo??"field",documentationDetails:e=>({detailsType:"fieldMeta",name:e.suggestion,type:e.additionalTypeInfo??""}),sortText:()=>"1",selectLoggingOverride:"Field"},[g.FC.PERSONALIZED_TABLE]:{kind:14,upperCaseType:"PopularTable",label:D,filterText:e=>(e.pathSuggestion?.slice().reverse()??[]).join("	"),insertText:D,description:()=>"table",documentationDetails:e=>({detailsType:"dataCatalog",path:e.path??[],parseType:"table"}),sortText:()=>"0"},[g.FC.CTE]:{kind:14,upperCaseType:"CTE",label:e=>(0,d.Vc)(e.suggestion),filterText:e=>e.suggestion,insertText:e=>(0,d.Vc)(e.suggestion),description:()=>"cte",documentationDetails:()=>void 0,sortText:()=>"0"},[g.FC.TEMP_TABLE_OR_VIEW]:{kind:14,upperCaseType:"TempTableOrView",label:e=>(0,d.Vc)(e.suggestion),filterText:e=>e.suggestion,insertText:e=>(0,d.Vc)(e.suggestion),description:()=>"temp table/view",documentationDetails:()=>void 0,sortText:()=>"0"},[g.FC.TEMP_VARIABLE]:{kind:6,upperCaseType:"TempVariable",label:e=>(0,d.Vc)(e.suggestion),filterText:e=>e.suggestion,insertText:e=>(0,d.Vc)(e.suggestion),description:()=>"temp variable",documentationDetails:()=>void 0,sortText:()=>"0"},[g.FC.CREATED_TABLE_OR_VIEW]:{kind:14,upperCaseType:"CreatedTableOrView",label:e=>(0,d.Vc)(e.suggestion),filterText:e=>e.suggestion,insertText:e=>(0,d.Vc)(e.suggestion),description:()=>"created table/view",documentationDetails:()=>void 0,sortText:()=>"0"},[g.FC.CREATED_OR_RENAMED_VOLUME]:{kind:23,upperCaseType:"CreatedOrRenamedVolume",label:e=>(0,d.Vc)(e.suggestion),filterText:e=>e.suggestion,insertText:e=>(0,d.Vc)(e.suggestion),description:()=>"created/renamed volume",documentationDetails:()=>void 0,sortText:()=>"0"},[g.FC.TOP_JOIN]:{kind:16,upperCaseType:"JoinsDiscovery",label:e=>M(e,!1,!1,!1,!1),filterText:e=>M(e,!1,!0,!1,!1).replaceAll("`","").toLowerCase(),insertText:e=>M(e,!0,!1,!0,!1),description:()=>"join",documentationDetails:e=>({detailsType:"discoveryJoin",fullValue:M(e,!0,!1,!1,!0)}),sortText:()=>"0"},[g.FC.VOLUME]:{kind:23,upperCaseType:"Volume",label:I,filterText:e=>e.suggestion,insertText:I,description:()=>"volume",documentationDetails:e=>{if(e.path?.length!==3)return;return{detailsType:"volume",path:e.path}},sortText:()=>"3"},[g.FC.VOLUME_PATH]:{kind:23,upperCaseType:"VolumePath",label:e=>e.suggestion,filterText:e=>e.suggestion.toLowerCase(),insertText:e=>e.suggestion,description:()=>"volume",documentationDetails:e=>{if(e.path?.length!==3)return;return{detailsType:"volume",path:e.path,prefetched:e.volumeContext?.prefetchedVolume}},sortText:e=>(0,L.yJ)(e.volumeContext?.rankedIndex)},[g.FC.PATH_PREFIX]:{kind:23,upperCaseType:"PathPrefix",label:e=>e.suggestion,filterText:e=>e.suggestion.toLowerCase(),insertText:e=>e.suggestion,description:()=>"path",documentationDetails:()=>void 0,sortText:()=>"9"}},M=(e,t,n,o,i)=>{if(!e.topJoinContext)return"";let{topJoin:a}=e.topJoinContext,r=n?"	":" ",s=(0,d.Vc)(a.table_name),l=`${(0,d.Vc)(a.catalog_name)}.${(0,d.Vc)(a.schema_name)}.${s}`,c=a.table_name[0],u=(0,d.xQ)(c)?"a":c,m=e.lowercase?"on":"ON";return(t?l:s)+r+(o?"${1:"+u+"}":u)+(i?"\n ":"")+r+m+r},F=e=>{let t=P[e.suggestionType],n=t.filterText({...e,suggestion:e.suggestion.toLowerCase(),pathSuggestion:e.pathSuggestion?.map(e=>e.toLowerCase())}),o=t.insertText(e),i=t.description(e),a=t.label(e);return{label:{label:a,description:i},kind:t.kind,insertText:o,insertTextRules:4,detail:i,filterText:n,range:{replace:e.tokenRange,insert:e.tokenRange},documentationDetails:t.documentationDetails(e),providerContext:{...e.context,category:t.upperCaseType},sortText:t.sortText(e),command:{id:e.id,title:"Post Handle Select AutoComplete",arguments:[e.moduleName,"sql",t.selectLoggingOverride??t.upperCaseType,a,o,"ANTLR"]}}};o()}catch(e){o(e)}})},968135:(e,t,n)=>{n.d(t,{r:()=>o});class o{optimize(e){let t=[];return e.codeCellsBefore&&(e.codeCellsBefore.chunks=e.codeCellsBefore.chunks.map(e=>{let n=e.name?.match(/^Cell \d+$/)?"":e.name||"";return n!==e.name&&t.push(e.name||""),{...e,name:n}})),e.codeCellsAfter&&(e.codeCellsAfter.chunks=e.codeCellsAfter.chunks.map(e=>{let n=e.name?.match(/^Cell \d+$/)?"":e.name||"";return n!==e.name&&t.push(e.name||""),{...e,name:n}})),{name:"CodeCellsNamesTruncater",optimizations:t.length>0?[{name:"renamedCellNames",rerank:t}]:[]}}}},984470:(e,t,n)=>{n.d(t,{f:()=>o.f,i:()=>o.i});var o=n(748896)},990093:(e,t,n)=>{n.r(t),n.d(t,{doc:()=>i,header:()=>o});let o="CREATE TABLE [USING]",i=`

Defines a managed or external table, optionally using a data source.

## Syntax

\`\`\`
{ { [CREATE OR] REPLACE TABLE | CREATE [EXTERNAL] TABLE [ IF NOT EXISTS ] }
  table_name
  [ table_specification ]
  [ USING data_source ]
  [ table_clauses ]
  [ AS query ] }

table_specification
  ( { column_identifier column_type [ column_properties ] } [, ...]
    [ , table_constraint ] [...] )

column_properties
  { NOT NULL |
    GENERATED ALWAYS AS ( expr ) |
    GENERATED { ALWAYS | BY DEFAULT } AS IDENTITY [ ( [ START WITH start ] [ INCREMENT BY step ] ) ] |
    DEFAULT default_expression |
    COMMENT column_comment |
    column_constraint |
    MASK clause } [ ... ]

table_clauses
  { OPTIONS clause |
    PARTITIONED BY clause |
    CLUSTER BY clause |
    clustered_by_clause |
    LOCATION path [ WITH ( CREDENTIAL credential_name ) ] |
    COMMENT table_comment |
    TBLPROPERTIES clause |
    WITH { ROW FILTER clause } } [...]

clustered_by_clause
  { CLUSTERED BY ( cluster_column [, ...] )
    [ SORTED BY ( { sort_column [ ASC | DESC ] } [, ...] ) ]
    INTO num_buckets BUCKETS }
\`\`\`

## Parameters

- **REPLACE**

  If specified, replaces the table and its content if it already exists.
  This clause is only supported for <Delta> tables.

  \`REPLACE\` preserves the table history.

  Note:  Databricks SQL strongly recommends using \`REPLACE\` instead of dropping and re-creating <Delta> tables.

- **EXTERNAL**

  If specified, creates an external table.
  When creating an external table you must also provide a \`LOCATION\` clause.
  When an external table is dropped the files at the \`LOCATION\` will not be dropped.

- **IF NOT EXISTS**

  If specified and a table with the same name already exists, the statement is ignored.

  \`IF NOT EXISTS\` cannot coexist with \`REPLACE\`, which means \`CREATE OR REPLACE TABLE IF NOT EXISTS\` is not allowed.

- **table_name**

  The name of the table to be created. The name must not include a temporal specification.
  If the name is not qualified the table is created in the current schema.

  Tables created in \`hive_metastore\` can only contain alphanumeric ASCII characters and underscores (INVALID_SCHEMA_OR_RELATION_NAME).

- **table_specification**

  This optional clause defines the list of columns, their types, properties, descriptions, and column constraints.

  If you do not define columns the table schema you must specify either \`AS query\` or \`LOCATION\`.

  - **column_identifier**

    A unique name for the column.

    Column identifiers of <Delta> tables without column mapping property (\`'delta.columnMapping.mode' = 'name'\`) must not contain spaces or the following characters: \`, ; { } ( ) 
 	 =\` .

    Column identifiers of \`AVRO\` table must start with an underscore (\`_\`) or a Unicode letter (including non-ASCII letters) and be followed by a combination of Unicode letters, digits, and underscores.


  - **column_type**

    Specifies the data type of the column.
    Not all data types supported by Databricks SQL are supported by all data sources.

  - **NOT NULL**

    If specified the column will not accept \`NULL\` values. This clause is only supported for <Delta> tables.

  - **GENERATED ALWAYS AS ( expr )**

    When you specify this clause the value of this column is determined by the specified \`expr\`.

    \`expr\` may be composed of literals, column identifiers within the table, and deterministic, built-in SQL functions or operators except:

    - Aggregate functions

    - Analytic window functions

    - Ranking window functions

    - Table valued generator functions

    Also \`expr\` must not contain any subquery.

  - **GENERATED { ALWAYS | BY DEFAULT } AS IDENTITY [ ( [ START WITH start ] [ INCREMENT BY step ] ) ]**


    Defines an identity column. When you write to the table, and do not provide values for the identity column, it will be automatically assigned a unique and statistically increasing (or decreasing if \`step\` is negative) value. This clause is only supported for Delta Lake tables. This clause can only be used for columns with BIGINT data type.

    The automatically assigned values start with \`start\` and increment by \`step\`. Assigned values are unique but are not guaranteed to be contiguous. Both parameters are optional, and the default value is 1. \`step\` cannot be \`0\`.

    If the automatically assigned values are beyond the range of the identity column type, the query will fail.

    When \`ALWAYS\` is used, you cannot provide your own values for the identity column.

    The following operations are not supported:

    - \`PARTITIONED BY\` an identity column

    - \`UPDATE\` an identity column

    Note: Declaring an identity column on a Delta table disables concurrent transactions. Only use identity columns in use cases where concurrent writes to the target table are not required.

  - **DEFAULT default_expression**


    Defines a \`DEFAULT\` value for the column which is used on \`INSERT\`, \`UPDATE\`, and \`MERGE ... INSERT\` when the column is not specified.

    If no default is specified \`DEFAULT NULL\` is applied for nullable columns.

    \`default_expression\` may be composed of literals, and built-in SQL functions or operators except:

    - Aggregate functions

    - Analytic window functions

    - Ranking window functions

    - Table valued generator functions

    Also \`default_expression\` must not contain any subquery.

    \`DEFAULT\` is supported for \`CSV\`, \`JSON\`, \`PARQUET\`, and \`ORC\` sources.

  - **COMMENT column_comment**

    A string literal to describe the column.

  - **column_constraint**

    Adds a primary key or foreign key constraint to the column in a <Delta> table.

    Constraints are not supported for tables in the \`hive_metastore\` catalog.

    To add a check constraint to a <Delta> table use ALTER TABLE.

  - **MASK clause**



    Adds a column mask function to anonymize sensitive data. All subsequent queries from that column receive the result of evaluating that function over the column in place of the column's original value. This can be useful for fine-grained access control purposes where the function can inspect the identity or group memberships of the invoking user to decide whether to redact the value.

  - **table_constraint**

    Adds an informational primary key or informational foreign key constraints to the <Delta> table.

    Key constraints are not supported for tables in the \`hive_metastore\` catalog.

    To add a check constraint to a <Delta> table use ALTER TABLE.

- **USING data_source**

  \`data_source\` can be either a file-format or a federated JDBC data source.

  The file-format must be one of the following:

  - \`AVRO\`
  - \`BINARYFILE\`
  - \`CSV\`
  - \`DELTA\`
  - \`JSON\`
  - \`ORC\`
  - \`PARQUET\`
  - \`TEXT\`

  For any file-format other than \`DELTA\` you must also specify a \`LOCATION\` unless the table catalog is \`hive_metastore\`.

  The following federated JDBC sources are supported:

  - \`POSTGRESQL\`
  - \`SQLSERVER\`
  - \`MYSQL\`
  - \`BIGQUERY\`
  - \`NETSUITE\`
  - \`ORACLE\`
  - \`REDSHIFT\`
  - \`SNOWFLAKE\`
  - \`SQLDW\`
  - \`SYNAPSE\`
  - \`SALESFORCE\`
  - \`SALESFORCE_DATA_CLOUD\`
  - \`TERADATA\`
  - \`WORKDAY_RAAS\`
  - \`MONGODB\`

  When specifying a federated JDBC source, you must also specify the \`OPTIONS\` clause with the necessary connection information.
  See _ for more information on querying federated data sources.

  The following additional file formats to use for the table are supported in Databricks Runtime:

  - \`JDBC\`
  - \`LIBSVM\`
  - a fully-qualified class name of a custom implementation of \`org.apache.spark.sql.sources.DataSourceRegister\`.

  If \`USING\` is omitted, the default is \`DELTA\`.

  **The following applies to:** Databricks Runtime

  \`HIVE\` is supported to create a Hive SerDe table in Databricks Runtime.
  You can specify the Hive-specific \`file_format\` and \`row_format\` using the \`OPTIONS\` clause, which is a case-insensitive string map.
  The \`option_keys\` are:

  - \`FILEFORMAT\`
  - \`INPUTFORMAT\`
  - \`OUTPUTFORMAT\`
  - \`SERDE\`
  - \`FIELDDELIM\`
  - \`ESCAPEDELIM\`
  - \`MAPKEYDELIM\`
  - \`LINEDELIM\`

- **table_clauses**

  Optionally specify location, partitioning, clustering, options, comments, and user defined properties for the new table.
  Each sub clause may only be specified once.

  - **PARTITIONED BY**

    An optional clause to partition the table by a subset of columns.

    Note:

       If you don't define a Delta table, partitioning columns are placed at the end of the table, even if they are defined earlier in the column specification. Consider using \`CLUSTER BY\` instead of \`PARTITIONED BY\` for Delta tables.

  - **CLUSTER BY**

    Applies to: &#x2713; Databricks SQL &#x2713; Databricks Runtime 13.3 and later

    An optional clause to cluster a Delta table by a subset of columns.
    To cluster other tables use \`clustered_by_clause\`.

    <Delta> liquid clustering cannot be combined with \`PARTITIONED BY\`.

  - **clustered_by_clause**

    Optionally cluster the table or each partition into a fixed number of hash buckets using a subset of the columns.

    Clustering is not supported for <Delta> tables.

    - **CLUSTERED BY**

      Specifies the set of columns by which to cluster each partition, or the table if no partitioning is specified.

      - **cluster_column**

        An identifier referencing a \`column_identifier\` in the table. If you specify more than one column there must be no duplicates.
        Since a clustering operates on the partition level you must not name a partition column also as a cluster column.

    - **SORTED BY**

      Optionally maintains a sort order for rows in a bucket.

      - **sort_column**

        A column to sort the bucket by. The column must not be partition column.
        Sort columns must be unique.

      - **ASC** or **DESC**

        Optionally specifies whether \`sort_column\` is sorted in ascending (\`ASC\`) or descending (\`DESC\`) order.
        The default values is \`ASC\`.

    - **INTO num_buckets BUCKETS**

      An INTEGER literal specifying the number of buckets into which each partition (or the table if no partitioning is specified) is divided.

  - **LOCATION path  WITH ( CREDENTIAL [credential_name ) ]**

    An optional path to the directory where table data is stored, which could be a path on distributed storage.
    \`path\` must be a STRING literal.
    If you specify no location the table is considered a \`managed table\` and Databricks SQL creates a default table location.

    .. azure-aws::

       Specifying a location makes the table an external table.

       For tables that do not reside in the \`hive_metastore\` catalog, the table \`path\` must be protected by an external location unless a valid storage credential is specified.

       You cannot create external tables in locations that overlap with the location of managed tables.

    For a <Delta> table the table configuration is inherited from the \`LOCATION\` if data is present.
    Therefore, if any \`TBLPROPERTIES\`, \`table_specification\`, or \`PARTITIONED BY\` clauses are specified for <Delta> tables they must exactly match the <Delta> location data.

  - **OPTIONS**

    Sets or resets one or more user defined table options.

  - **COMMENT table_comment**

    A string literal to describe the table.

  - **TBLPROPERTIES**

    Optionally sets one or more user defined properties.

  - **WITH ROW FILTER clause**


    Adds a row filter function to the table. All subsequent queries from that table will receive a subset of the rows where the function evaluates to boolean TRUE. This can be useful for fine-grained access control purposes where the function can inspect the identity or group memberships of the invoking user to decide whether to filter certain rows.

<a id="as"></a>

- **AS query**

  This optional clause populates the table using the data from \`query\`.
  When you specify a \`query\` you must not also specify a \`table_specification\`. The table schema is derived from the query.

  Note that Databricks SQL overwrites the underlying data source with the data of the
  input query, to make sure the table gets created contains exactly the same data as the input query.

## Examples

\`\`\`sql
-- Creates a Delta table
> CREATE TABLE student (id INT, name STRING, age INT);

-- Use data from another table
> CREATE TABLE student_copy AS SELECT * FROM student;

-- Creates a CSV table from an external directory
> CREATE TABLE student USING CSV LOCATION '/path/to/csv_files';

-- Specify table comment and properties
> CREATE TABLE student (id INT, name STRING, age INT)
    COMMENT 'this is a comment'
    TBLPROPERTIES ('foo'='bar');

-- Specify table comment and properties with different clauses order
> CREATE TABLE student (id INT, name STRING, age INT)
    TBLPROPERTIES ('foo'='bar')
    COMMENT 'this is a comment';

-- Create partitioned table
> CREATE TABLE student (id INT, name STRING, age INT)
    PARTITIONED BY (age);

-- Create a table with a generated column
> CREATE TABLE rectangles(a INT, b INT,
                          area INT GENERATED ALWAYS AS (a * b));

-- Create an external table connected to Oracle
> CREATE TABLE IF NOT EXISTS ora_tab
  USING ORACLE
  OPTIONS (
    url '<jdbc-url>',
    dbtable '<table-name>',
    user '<username>',
    password '<password>'
);

> SELECT * FROM ora_tab;
\`\`\`

`},998068:(e,t,n)=>{n.r(t),n.d(t,{doc:()=>i,header:()=>o});let o="DELETE FROM",i=`

Deletes the rows that match a predicate. When no predicate is provided, deletes all rows.

This statement is only supported for <Delta> tables.

### Syntax

\`\`\`
DELETE FROM table_name [table_alias] [WHERE predicate]
\`\`\`

### Parameters

- table_name

  Identifies an existing table. The name must not include a temporal specification.

  \`table_name\` must not be a foreign table.

- table_alias

  Define an alias for the table. The alias must not include a column list.

- **WHERE**

  Filter rows by predicate.

  The \`WHERE\` predicate supports subqueries, including \`IN\`, \`NOT IN\`, \`EXISTS\`, \`NOT EXISTS\`, and scalar subqueries. The following types of subqueries are not supported:

  - Nested subqueries, that is, an subquery inside another subquery
  - \`NOT IN\` subquery inside an \`OR\`, for example, \`a = 3 OR b NOT IN (SELECT c from t)\`

  In most cases, you can rewrite \`NOT IN\` subqueries using \`NOT EXISTS\`. We recommend using
  \`NOT EXISTS\` whenever possible, as \`DELETE\` with \`NOT IN\` subqueries can be slow.

### Examples

\`\`\`sql
> DELETE FROM events WHERE date < '2017-01-01'

> DELETE FROM all_events
   WHERE session_time < (SELECT min(session_time) FROM good_events)

> DELETE FROM orders AS t1
   WHERE EXISTS (SELECT oid FROM returned_orders WHERE t1.oid = oid)

> DELETE FROM events
   WHERE category NOT IN (SELECT category FROM events2 WHERE date > '2001-01-01')
\`\`\`

- COPY
- INSERT
- MERGE
- PARTITION
- query
- UPDATE


`},998518:(e,t,n)=>{n.a(e,async(e,o)=>{try{let m;n.d(t,{DW:()=>u,KE:()=>f,gn:()=>d});var i=n(187770),a=n(214056),r=n(963495),s=e([a,r]);[a,r]=s.then?(await s)():s;let p=()=>m??=(0,a.Q)().getPythonSyntax().language;function l(e=!1){let t=p();(0,i.P)(t),e&&(t.tokenizer.root.unshift({include:"dataframeIntellisense"}),t.tokenizer.dataframeIntellisense=[[/\.filter\(|\.where\(|expr\(/,"keyword.dataframeIntellisense","@embeddedSqlBody"]]),t.tokenizer.root.unshift({include:"embeddedSql"}),t.tokenizer.embeddedSql=[[/sql\(/,"keyword.embeddedsqlBodyIn","@embeddedSqlBody"]],t.tokenizer.embeddedSqlBody=[[/'''/,{token:"string.escape",bracket:"@open",next:"@embeddedSqlDocStringBody",nextEmbedded:"sql"}],[/"""/,{token:"string.escape",bracket:"@open",next:"@embeddedSqlDoubleDocStringBody",nextEmbedded:"sql"}],[/'/,{token:"string.escape",bracket:"@open",next:"@embeddedSqlSingleQuoteBody",nextEmbedded:"sql"}],[/"/,{token:"string.escape",bracket:"@open",next:"@embeddedSqlDoubleQuoteBody",nextEmbedded:"sql"}],[/\)/,{token:"delimiter.parenthesis",bracket:"@close",next:"@pop"}]],t.tokenizer.embeddedSqlSingleQuoteBody=[[/[^\\']+$/,{token:"string",next:"@popall",nextEmbedded:"@pop"}],[/[^\\']+/,"string"],[/\\./,"string"],[/'/,{token:"string.escape",next:"@popall",nextEmbedded:"@pop"}],[/\\$/,"string"]],t.tokenizer.embeddedSqlDoubleQuoteBody=[[/[^\\"]+$/,{token:"string",next:"@popall",nextEmbedded:"@pop"}],[/[^\\"]+/,"string"],[/\\./,"string"],[/"/,{token:"string.escape",next:"@popall",nextEmbedded:"@pop"}],[/\\$/,"string"]],t.tokenizer.embeddedSqlDocStringBody=[[/[^']+/,"string"],[/\\'/,"string"],[/'''/,{token:"string",next:"@popall",nextEmbedded:"@pop"}],[/'/,"string"]],t.tokenizer.embeddedSqlDoubleDocStringBody=[[/[^"]+/,"string"],[/\\"/,"string"],[/"""/,{token:"string",next:"@popall",nextEmbedded:"@pop"}],[/"/,"string"]]}function c(e,t){return e=(e=e.replace(/(^| {2})# .*$/gm,"")).replace(/\s+?/g,""),RegExp(e,t)}function u(e){e.onEnterRules=[{beforeText:c(`
            ^
            (?! \\s+ \\\\ )
            [^#
]+
            \\\\
            $
        `),action:{indentAction:(0,a.Q)().IndentAction.Indent}},{beforeText:/^\s*#.*/,afterText:/.+$/,action:{indentAction:(0,a.Q)().IndentAction.None,appendText:"# "}},{beforeText:c(`
            ^
            \\s*
            (?:
                (?:
                    (?:
                        class |
                        def |
                        async \\s+ def |
                        except |
                        for |
                        async \\s+ for |
                        if |
                        elif |
                        while |
                        with |
                        async \\s+ with
                    )
                    \\b .*
                ) |
                else |
                try |
                finally
            )
            \\s*
            [:]
            \\s*
            (?: [#] .* )?
            $
        `),action:{indentAction:(0,a.Q)().IndentAction.Indent}},{beforeText:c(`
            ^
            (?:
                (?:
                    \\s*
                    (?:
                        pass |
                        raise \\s+ [^#\\s] [^#]*
                    )
                ) |
                (?:
                    \\s+
                    (?:
                        raise |
                        break |
                        continue
                    )
                )
            )
            \\s*
            (?: [#] .* )?
            $
        `),action:{indentAction:(0,a.Q)().IndentAction.Outdent}}]}function d(e=!1,t=!1){let n=(0,a.Q)().getLanguages(),o=(0,r.v6)(),i=p();n.some(e=>"custom_python"===e.id)||(l(e),u(o),(0,a.Q)().register({id:"custom_python",extensions:[".py"],aliases:["PYTHON"]}),(0,a.Q)().setMonarchTokensProvider("custom_python",i),(0,a.Q)().setLanguageConfiguration("custom_python",o));let s=n.some(e=>"python"===e.id);(!s||t)&&(l(e),u(o),(0,a.Q)().register({id:"python",extensions:[".py"],aliases:["PYTHON"]})),(!s||t)&&((0,a.Q)().setMonarchTokensProvider("python",i),(0,a.Q)().setLanguageConfiguration("python",o))}let f=(e=!1,t=!1)=>({setup:()=>{d(e,t)}});o()}catch(e){o(e)}})}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/51818.c818093f78.chunk.js.map