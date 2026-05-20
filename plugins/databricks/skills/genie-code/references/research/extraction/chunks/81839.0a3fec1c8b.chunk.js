"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[4972,55308,81839,84885],{32998:(e,a,t)=>{t.d(a,{w:()=>r});let s=".dbquery.ipynb",n=".dbalert.json",r=e=>{if(e.endsWith(s))return e.slice(0,-s.length);if(e.endsWith(n))return e.slice(0,-n.length);return e}},38054:(e,a,t)=>{t.d(a,{Pj:()=>i,nR:()=>o,y$:()=>r});var s=t(371964),n=t(881551);let r=t(353345).y,i=s.Pj,o=n.n},39659:(e,a,t)=>{t.d(a,{y:()=>s});class s{resolve;reject;promise;constructor(){this.resolve=()=>{},this.reject=()=>{},this.promise=new Promise((e,a)=>{this.resolve=e,this.reject=a})}}},52640:(e,a,t)=>{t.d(a,{Oc:()=>o,YA:()=>u,np:()=>i,vP:()=>d});var s=t(377063),n=t.n(s),r=t(342411);function i(e){return["d_now","d_yesterday"].includes(e)}let o=[c("d_now",(0,r.zR)({id:"Ibgd62",defaultMessage:"Today/Now"}),()=>n()(),"D MMM"),c("d_yesterday",(0,r.zR)({id:"oGpR1T",defaultMessage:"Yesterday"}),()=>n()().subtract(1,"day"),"D MMM")],l=new Map(o.map(e=>[e.name,e]));function u(e){return l.has(e)}function d(e){return e?l.get(e):void 0}function c(e,a,t,s){return{name:e,unformattedName:a,value:t,hint:()=>t().format(s)}}},75612:(e,a,t)=>{t.d(a,{HA:()=>u,RY:()=>l,Xw:()=>o,ZS:()=>r,az:()=>i,bI:()=>n,rd:()=>s});let s=1020,n=450,r=250,i="30%",o="OBJECT_TYPE_UNSPECIFIED",l="SQL_QUERY",u=6048e5},157817:(e,a,t)=>{t.d(a,{C7:()=>c,Df:()=>r.Df0,N4:()=>r.N4A,Ot:()=>b,R7:()=>g,SA:()=>h,UD:()=>m,Wx:()=>u,_K:()=>k,aR:()=>r.aRi,h2:()=>l,iH:()=>p,ll:()=>o,nG:()=>i,wz:()=>f,zh:()=>d});var s,n=t(551984),r=t(483588);let i=["user","system","assistant","toolInput","toolOutput","reasoning"],o=["cellEdit2","summary","compactionMarker","error"],l=[...i,...o];var u=((s={}).OFF="off",s.USER="user",s.GHOST_TEXT="ghost_text",s.INLINE_QUICK_FIX="inline_quick_fix",s.CELL_MAGIC="cell_magic",s.INLINE_ASSISTANT="inline_assistant",s.CHAT_WINDOW_INSERT="chat_window_insert",s.CHAT_WINDOW_PASTE="chat_window_paste",s.CHAT_WINDOW="chat_window",s.AUTOCOMPLETE="autocomplete",s.ASSISTANT_EDIT="assistant_edit",s.NEXT_EDIT_SUGGESTION="next_edit_suggestion",s.NEXT_EDIT_SUGGESTION_GHOST_TEXT="next_edit_suggestion_ghost_text",s.ASSISTANT_ADD="assistant_add",s.ASSISTANT_DELETE="assistant_delete",s.ASSISTANT_FILE_EDIT="assistant_file_edit",s.UNKNOWN="unknown",s.ASSISTANT_AGENT_EDIT="assistant_agent_edit",s.ASSISTANT_AGENT_ADD="assistant_agent_add",s.ASSISTANT_AGENT_DELETE="assistant_agent_delete",s.AUTOFORMAT="autoformat",s);let d={ghost_text:"#808000",next_edit_suggestion_ghost_text:"#808000",user:"#ff4500",inline_quick_fix:"#c71585",cell_magic:"#00ff00",inline_assistant:"#00ff00",chat_window:"#00ffff",autocomplete:"#0000ff",assistant_edit:"#1e90ff",assistant_agent_edit:"#1e90ff",assistant_add:"#9370db",assistant_agent_add:"#9370db",autoformat:"#ffa500",next_edit_suggestion:"#8b008b"},c=Object.values(u).filter(e=>e.includes("assistant")),m=["assistant_delete","assistant_agent_delete","assistant_add","assistant_agent_add"],f=["Chat","Agent","Planner"],g={CHAT:"Chat",AGENT:"Agent",PLANNER:"Planner"},p=(0,n.Ik)({source:(0,n.gl)().oneOf(Object.values(u)).required(),agent:(0,n.gl)().required(),model:(0,n.gl)().required(),promptId:(0,n.gl)().required(),isPending:(0,n.zM)().notRequired(),isPaste:(0,n.zM)().notRequired(),isExternalPaste:(0,n.zM)().notRequired()}),b=(0,n.Ik)({start:(0,n.ai)().required(),endExclusive:(0,n.ai)().required(),type:(0,n.Yj)().required()}),h=["notebook","dashboard","file","query","app","job"];function k(e){return`inline-assistant:${e.assetType}:${e.assetId}${"notebook"===e.assetType?`:${e.cellNuid}`:""}`}},204972:(e,a,t)=>{function s(e,a,t,s,n,r,i){try{var o=e[r](i),l=o.value}catch(e){t(e);return}o.done?a(l):Promise.resolve(l).then(s,n)}function n(e){return function(){var a=this,t=arguments;return new Promise(function(n,r){var i=e.apply(a,t);function o(e){s(i,n,r,o,l,"next",e)}function l(e){s(i,n,r,o,l,"throw",e)}o(void 0)})}}t.r(a),t.d(a,{lazilyImportEditorModule:()=>r});let r=(e,a,s)=>n(function*(){let{includeLsp:r}=s??{},o=new Promise(s=>n(function*(){let n=Promise.all([(()=>{let e=()=>Promise.all([t.e(62280),t.e(21234),t.e(1990),t.e(78632),t.e(39676),t.e(31813),t.e(93932),t.e(64666),t.e(62762),t.e(49177),t.e(45027)]).then(t.bind(t,645696));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(645696,"@databricks/editor/unifiedEditor","lazy",e);return e()})(),(()=>{let e=()=>Promise.all([t.e(1990),t.e(78632),t.e(39676),t.e(31813),t.e(80934)]).then(t.bind(t,876146));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(876146,"@databricks/monaco-0-51/monaco","lazy",e);return e()})()]).then(([e,a])=>{e.hydrateWithMonaco(a.monacoApi),e.getMonacoApi().MonacoLanguageClientServiceManager.initMonacoLanguageClientServices()}),[r,o]=yield Promise.all([n,(()=>{let e=()=>Promise.all([t.e(62280),t.e(6932),t.e(1291),t.e(97768),t.e(24685),t.e(99406),t.e(21234),t.e(92170),t.e(1990),t.e(78632),t.e(39676),t.e(31813),t.e(51362),t.e(26881),t.e(93932),t.e(79724),t.e(56934),t.e(68775),t.e(11022),t.e(43927),t.e(18650),t.e(87122),t.e(12674),t.e(4828),t.e(90489),t.e(64666),t.e(30259),t.e(13962),t.e(22831),t.e(80086),t.e(51818),t.e(87385),t.e(58415),t.e(79637),t.e(62762),t.e(48898),t.e(32474)]).then(t.bind(t,731392));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(731392,"@databricks/editor/commonPlugins","lazy",e);return e()})()]);a&&(yield i(a,o)),s((yield e?.()))})()),l=new Promise(e=>n(function*(){let[a,s]=yield Promise.all([(()=>{let e=()=>Promise.all([t.e(78632),t.e(51362),t.e(67812)]).then(t.bind(t,528304));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(528304,"@databricks/editor/vscodeLanguageserverProtocol","lazy",e);return e()})(),r?(()=>{let e=()=>Promise.all([t.e(78632),t.e(51362),t.e(30618)]).then(t.bind(t,706330));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(706330,"@databricks/monaco-0-51/vscodeLsp","lazy",e);return e()})():Promise.resolve(void 0)]);s&&a.hydrateWithVscodeLsp(s.vscodeLspApi),e()})()),[u]=yield Promise.all([o,l]);return u})(),i=(e,a)=>n(function*(){switch(e){case"ChatSidebarNativeFeaturePlugin":{let{ChatSidebarNativeFeaturePlugin:e}=yield(()=>{let e=()=>Promise.all([t.e(62280),t.e(6932),t.e(1291),t.e(97768),t.e(24685),t.e(99406),t.e(21234),t.e(92170),t.e(1990),t.e(78632),t.e(39676),t.e(31813),t.e(51362),t.e(26881),t.e(93932),t.e(79724),t.e(56934),t.e(68775),t.e(11022),t.e(43927),t.e(18650),t.e(87122),t.e(12674),t.e(4828),t.e(90489),t.e(64666),t.e(30259),t.e(13962),t.e(22831),t.e(80086),t.e(51818),t.e(87385),t.e(58415),t.e(79637),t.e(62762),t.e(48898),t.e(85387)]).then(t.bind(t,54427));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(54427,"@databricks/editor/chatSidebarTextArea","lazy",e);return e()})();yield e().preload?.();break}case"DbSqlNativeFeaturePluginWithCustomThemes":yield a.DbSqlNativeFeaturePlugin(!0).preload?.();break;case"DbSqlNativeFeaturePluginWithDefaultTheme":yield a.DbSqlNativeFeaturePlugin(!1).preload?.();break;default:yield a[e]().preload?.()}})()},228061:(e,a,t)=>{t.d(a,{Be:()=>i,ib:()=>u,z3:()=>l});var s=t(610435);t(692738);var n=t(342411),r=t(947170);function i(e){try{return u(e)}catch(a){let e=(0,s.Y)(n.sA,{id:"coHlse",defaultMessage:"ID in URL path is invalid."});return(0,r.su)(e,!1),-1}}let o=/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;function l(e){return o.test(e)}function u(e){let a=parseInt(e,10);if(isNaN(a)||String(a)!==e)throw Error("Invalid ID");return a}},239362:(e,a,t)=>{t.d(a,{Bv:()=>f,L1:()=>c,Lw:()=>l,Wg:()=>u,qe:()=>m,qk:()=>g,yu:()=>d});var s=t(141078),n=t(831358),r=t(691515),i=t(543963);let o=(0,s.J1)`
  fragment RunDetailsSectionFragment on JobsRun {
    jobId
    runId
    numberInJob
    durationInfo {
      startTime
      endTime
      executionDuration
      setupDuration
      startTime
      cleanupDuration
      runDuration
      queueDuration @include(if: $includeQueueDuration)
      waitDuration
      estimatedWaitingEndTime
        @includeSafex(name: "databricks.elasticspark.performance.enableWaitingState", defaultValue: false)
    }
    runTimings @includeSafex(name: "databricks.fe.jaws.enableRunTimings", defaultValue: false) {
      executionTimestamps {
        queuedMs
        waitingForResourcesOrPythonStartingMs
        libraryInstallationMs
        runningMs
      }
      repairsAccumulatedDurations {
        queuedAccumulatedMs
        waitingForResourcesOrPythonStartingAccumulatedMs
        runningAccumulatedMs
      }
    }
    state {
      ...RunStateFragment
    }
    status @include(if: $includeRunStatus) {
      ...RunStatusFragment
    }
    runType
  }

  ${i.DP}
  ${i.WB}
`,l=(0,s.J1)`
  fragment JobRunTriggerInfo on JobsRunTriggerInfo {
    runJobTask {
      runId
      jobId
      taskKey
      parentRunId
    }
    table {
      details {
        tableName
        version
        commitTimestamp
      }
    }
    sqlCondition {
      conditionEvaluationSatisfied
      conditionEvaluationSqlSessionId
    }
  }
`,u=(0,s.J1)`
  fragment JobRunDetailsSectionFragment on JobsRun {
    ...RunDetailsSectionFragment
    trigger
    triggerInfo {
      ...JobRunTriggerInfo
    }
    runName
    effectivePerformanceTarget
    effectiveUsagePolicyId
  }

  ${l}
  ${o}
`,d=(0,s.J1)`
  fragment TaskRunDetailsSectionFragment on JobsRun {
    ...RunDetailsSectionFragment
    parentRunId
    taskKey
    creatorUserName
    creatorUser {
      ...RichUserData
    }
    creatorPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
      ...AclPrincipalData
    }
    forEachIndex
    jobRunId
  }

  ${o}
  ${n.j}
  ${n.E}
`,c=(0,s.J1)`
  fragment TaskTypeDetailsFragment on JobsJobTask {
    alertTask @includeSafex(name: "alertv2_job_task", defaultValue: false) {
      alertId
      warehouseId
      workspacePath
      subscribers {
        userName
        destinationId
      }
    }
    notebookTask {
      notebookPath
    }
    sparkJarTask {
      mainClassName
    }
    sparkPythonTask {
      pythonFile
    }
    sparkSubmitTask {
      parameters
    }
    shellCommandTask {
      command
    }
    pipelineTask {
      pipelineId
      parameters {
        fullRefresh
      }
    }
    cleanRoomNotebookTask {
      cleanRoomName
      notebookName
    }
    cleanRoomsNotebookTask {
      cleanRoomName
      notebookName
    }
    cleanRoomsJarTask {
      cleanRoomName
      jarAnalysisName
    }
    pythonWheelTask {
      entryPoint
      packageName
    }
    dbtTask {
      projectDirectory
      commands
      source
    }
    sqlTask {
      alert {
        alertId
      }
      dashboard {
        dashboardId
      }
      query {
        queryId
      }
      file {
        path
        source
      }
      parameters {
        key
        value
      }
    }
    runJobTask {
      jobId
    }
    conditionTask {
      left
      right
      op
      outcome
    }
    simulationTask {
      controlId
    }
    dashboardTask @includeSafex(name: "databricks.fe.lakeview.enableLakeviewSubscriptionsInJobs", defaultValue: false) {
      dashboardId
      warehouseId
      subscription {
        customSubject
        paused
        subscribers {
          destinationId
          userName
        }
      }
    }
    forEachTask {
      inputs
      concurrency
    }
    ...ForEachTaskStats
    powerBiTask @includeSafex(name: "power_bi_task", defaultValue: false) {
      powerBiModel {
        workspaceName
        modelName
      }
    }
  }

  ${r.d}
`,m=(0,s.J1)`
  fragment TaskTypeDetailsOverridingParametersFragment on JobsRunParameters {
    sqlParams {
      key
      value
    }
    dbtCommands
    sparkSubmitParams
    pipelineParams {
      fullRefresh
    }
  }
`,f=(0,s.J1)`
  fragment TaskGitSourceSnapshotFragment on JobsRunTask {
    gitSource {
      gitSnapshot {
        usedCommit
      }
    }
  }
`,g=(0,s.J1)`
  fragment RunJobParameter on JobsRunJobLevelParameters {
    name
    default
    value
  }
`},250213:(e,a,t)=>{t.d(a,{LD:()=>i,Ll:()=>o,qk:()=>l,sG:()=>u});let s=".designer",n={SQL:`${s}.sql`,PYTHON_SOURCE:`${s}.py`,PYTHON_JUPYTER:`${s}.ipynb`},r=Object.values(n);function i(e){if(!e)return!1;return e.endsWith(n.SQL)||e.endsWith(n.PYTHON_SOURCE)||e.endsWith(n.PYTHON_JUPYTER)}let o=()=>n.PYTHON_JUPYTER,l=e=>{for(let a of r)if(e.endsWith(a))return e.slice(0,-a.length);return e},u=(e,a)=>{let t=r.find(e=>a.endsWith(e));if(t&&!e.endsWith(t))return e+t;return e}},272285:(e,a,t)=>{t.d(a,{$g:()=>b,DZ:()=>T,QJ:()=>h,Th:()=>k,Ul:()=>p});var s=t(141078);let n=(0,s.J1)`
  fragment DiscoverSearchResultTitleData on SearchmidtierSearchUnifiedResult {
    name
    updatedAt
  }
`,r=(0,s.J1)`
  fragment DiscoverSearchResultOwnerData on SearchmidtierSearchUnifiedResult {
    owner {
      id
      fullname
      email
    }
    ownerId
  }
`,i=(0,s.J1)`
  fragment DiscoverSearchResultDescriptionData on SearchmidtierSearchUnifiedResult {
    description
    ucEntityMetadata {
      comments
    }
    dataRoom {
      description
    }
  }
`,o=(0,s.J1)`
  fragment DiscoverSearchResultIconData on SearchmidtierSearchUnifiedResult {
    resultType
    browseOnly
    ucEntityMetadata {
      securableKind
    }
  }
`,l=(0,s.J1)`
  fragment DiscoverSearchResultPopularityData on SearchmidtierSearchUnifiedResult {
    popularity {
      bucket
      count
    }
    liveUsageInfo {
      bucket
      count
    }
    resultType
  }
`,u=(0,s.J1)`
  fragment DiscoverSearchResultTableLocationData on SearchmidtierSearchUnifiedResult {
    ucEntityMetadata {
      catalogName
      schemaName
    }
  }
`,d=(0,s.J1)`
  fragment DiscoverSearchResultWorkspaceFullPathData on SearchmidtierSearchUnifiedResult {
    treeNode {
      fullPath
      id
      parent {
        id
      }
    }
  }
`,c=(0,s.J1)`
  fragment DiscoverSearchResultUrlData on SearchmidtierSearchUnifiedResult {
    id
    resultType
    name
    ucEntityMetadata {
      catalogName
      schemaName
    }
  }
`,m=(0,s.J1)`
  fragment DiscoverSearchResultThumbnailData on SearchmidtierSearchUnifiedResult {
    id
    name
    resultType
    thumbnailUrl(uiMode: $uiMode)
  }
`,f=(0,s.J1)`
  fragment DiscoverSearchResultTagsData on SearchmidtierSearchUnifiedResult {
    tags {
      name
      value
    }
  }
`,g=(0,s.J1)`
  fragment DiscoverSearchResultFavoriteStatusData on SearchmidtierSearchUnifiedResult {
    userActivityInfo {
      assetType
      assetId
      isFavorite
    }
  }
`,p=(0,s.J1)`
  fragment DiscoverSearchResultAllAssetData on SearchmidtierSearchUnifiedResult {
    id
    ...DiscoverSearchResultTitleData
    ...DiscoverSearchResultDescriptionData
    ...DiscoverSearchResultTagsData
    ...DiscoverSearchResultIconData
    ...DiscoverSearchResultFavoriteStatusData
    ...DiscoverSearchResultUrlData
  }
  ${n}
  ${i}
  ${f}
  ${o}
  ${g}
  ${c}
`,b=(0,s.J1)`
  fragment DiscoverSearchResultData on SearchmidtierSearchUnifiedResult {
    id
    ...DiscoverSearchResultTitleData
    ...DiscoverSearchResultOwnerData
    ...DiscoverSearchResultIconData
    ...DiscoverSearchResultDescriptionData
    ...DiscoverSearchResultPopularityData
    ...DiscoverSearchResultTableLocationData
    ...DiscoverSearchResultWorkspaceFullPathData
    ...DiscoverSearchResultUrlData
    ...DiscoverSearchResultThumbnailData
    ...DiscoverSearchResultTagsData
    ...DiscoverSearchResultFavoriteStatusData
  }
  ${n}
  ${r}
  ${o}
  ${i}
  ${l}
  ${u}
  ${d}
  ${c}
  ${m}
  ${f}
  ${g}
`,h=(0,s.J1)`
  fragment DiscoverSearchResultUcData on SearchmidtierSearchUnifiedResult {
    id
    ...DiscoverSearchResultTitleData
    ...DiscoverSearchResultOwnerData
    ...DiscoverSearchResultIconData
    ...DiscoverSearchResultDescriptionData
    ...DiscoverSearchResultPopularityData
    ...DiscoverSearchResultTableLocationData
    ...DiscoverSearchResultUrlData
    ...DiscoverSearchResultTagsData
    ...DiscoverSearchResultFavoriteStatusData
  }
  ${n}
  ${r}
  ${o}
  ${i}
  ${l}
  ${u}
  ${c}
  ${f}
  ${g}
`,k=(0,s.J1)`
  fragment DiscoverRecommendationAssetData on RecommendationAssetRecommendation {
    asset {
      name
      id
      type
      modifiedAt
      tags {
        tagName
        tagValue
      }
      unityCatalogSecurable {
        searchIndexData {
          description
          ownerId
          owner {
            fullname
            email
          }
        }
        securableKind
        fullName
        ... on UnityCatalogTable {
          id
          name
        }
      }
      treeNode {
        name
        fullPath
        owner {
          fullname
          email
        }
        ... on DataRoomTreeNode {
          id
          name
          dataRoom {
            description
          }
        }
      }
      userActivityInfo {
        assetType
        assetId
        popularity {
          bucket
          viewerCount
        }
      }
      owner {
        id
        fullname
        email
      }
    }
    relevanceReason {
      trendingMetadata {
        queryCount
        viewerCount
      }
      viewMetadata {
        viewFrequency
      }
      type
      relevanceTime
      description
    }
  }
`,T=(0,s.J1)`
  fragment DiscoverRecommendationAssetWithThumbnailData on RecommendationAssetRecommendation {
    ...DiscoverRecommendationAssetData
    asset {
      thumbnailUrl(uiMode: $uiMode)
    }
  }
  ${k}
`},287393:(e,a,t)=>{t.d(a,{JB:()=>o,aZ:()=>u,fg:()=>l});var s=t(141078),n=t(831358),r=t(659789);let i=(0,s.J1)`
  fragment ResetRunAsJob on Job {
    id
    runAsUserName
    runAsOwner
    runAsUser {
      ...RichUserData
    }
    runAsPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
      ...AclPrincipalData
    }
    effectiveUsagePolicyId
      @includeSafex(name: "databricks.elasticspark.budgetpolicies.enableUsagePoliciesInJobs", defaultValue: false)
    settings {
      name
      usagePolicyId
      tasks {
        taskKey
      }
      gitSource {
        gitProvider
      }
    }
    creator {
      name
    }
  }

  ${n.j}
  ${n.E}
`,o=(0,s.J1)`
  mutation JobResetRunAsAutogen($input: JobsUpdateJobInput!) @component(name: "Workflows.Orchestration.Other") {
    updateAndGetJob(input: $input) {
      apiError {
        ...ApiErrorFields
      }
      job {
        ...ResetRunAsJob
      }
    }
  }
  ${r.n}
  ${i}
`,l=(0,s.J1)`
  fragment JobConfigRunAs on Job {
    id
    runAsUserName
    runAsUser {
      ...RichUserData
    }
    runAsPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
      ...AclPrincipalData
    }
    runAsOwner
    effectiveUsagePolicyId
      @includeSafex(name: "databricks.elasticspark.budgetpolicies.enableUsagePoliciesInJobs", defaultValue: false)
    settings {
      name
      usagePolicyId
      tasks {
        taskKey
      }
      gitSource {
        gitProvider
      }
    }
    creator {
      name
    }
  }
  ${n.j}
  ${n.E}
`,u=(0,s.J1)`
  fragment JobDescription on JobSettings {
    description
  }
`},301171:(e,a,t)=>{t.d(a,{v:()=>u});var s=t(610435);t(692738);var n=t(382908),r=t(342411),i=t(853762),o=t(771994),l=t(214060);let u={noMoreResultsPleaseNarrowSearch:(0,s.Y)(r.sA,{id:"EXxUmv",defaultMessage:"Not the results you expected? Try using different keywords, checking for typos, or adjusting filters."}),schemaFilterError:(0,s.Y)(r.sA,{id:"ioUsml",defaultMessage:"Error loading schemas"}),catalogFilterError:(0,s.Y)(r.sA,{id:"g9VKGo",defaultMessage:"Error loading catalogs"}),tagFilterError:(0,s.Y)(r.sA,{id:"BAVUZT",defaultMessage:"Error loading tags"}),typeForMoreUsers:e=>(0,s.Y)(r.sA,{id:"JAa9+n",defaultMessage:"The first {count} users are displayed. Search to narrow results.",values:{count:e}}),modalTitle:(0,s.Y)(r.sA,{id:"wALXhh",defaultMessage:"Search"}),searchBarSubmitButton:(0,s.Y)(r.sA,{id:"I2wVEx",defaultMessage:"Search"}),searchBarPlaceholder:(e,a)=>1===a.length?e.formatMessage({id:"InuxyD",defaultMessage:"Search for {fileType}"},{fileType:a[0]}):e.formatMessage({id:"eadQlj",defaultMessage:"Search for {firstFileType}, {secondFileType}, and more"},{firstFileType:a[0],secondFileType:a[1]}),searchMode:e=>e.formatMessage({id:"Gt2A4i",defaultMessage:"Search mode"}),semantic:e=>e.formatMessage({id:"wrfBCo",defaultMessage:"Semantic search"}),keyword:e=>e.formatMessage({id:"tZBt78",defaultMessage:"Keyword search"}),anytime:e=>e.formatMessage({id:"5my7Ui",defaultMessage:"Anytime"}),lastModified:e=>e.formatMessage({id:"CvWHjn",defaultMessage:"Last modified"}),last24hours:e=>e.formatMessage({id:"EA3yHn",defaultMessage:"Within 24 hours"}),last7days:e=>e.formatMessage({id:"fuQYvC",defaultMessage:"Within 7 days"}),last30days:e=>e.formatMessage({id:"Hb5Asz",defaultMessage:"Within 30 days"}),catalogLabel:e=>e.formatMessage({id:"LfFo2Z",defaultMessage:"Catalog"}),schemaLabel:e=>e.formatMessage({id:"MI82Ep",defaultMessage:"Schema"}),tagLabel:e=>e.formatMessage({id:"H1NmgQ",defaultMessage:"Tag"}),userLabel:(0,s.Y)(r.sA,{id:"XFerZS",defaultMessage:"Owner"}),partnerCategoryLabel:(0,s.Y)(r.sA,{id:"2k6uJ5",defaultMessage:"Categories"}),marketplaceCategoryLabel:(0,s.Y)(r.sA,{id:"f2vlXl",defaultMessage:"Categories"}),multipleSelectedUsersLabel:e=>(0,s.Y)(r.sA,{id:"EDAphJ",defaultMessage:"{count} users",values:{count:e}}),multipleSelectedCatalogsLabel:e=>(0,s.Y)(r.sA,{id:"sFdX5u",defaultMessage:"{count} catalogs",values:{count:e}}),multipleSelectedTagsLabel:e=>(0,s.Y)(r.sA,{id:"COBuf/",defaultMessage:"{count} tags",values:{count:e}}),multipleSelectedSchemasLabel:e=>(0,s.Y)(r.sA,{id:"N3koON",defaultMessage:"{count} schemas",values:{count:e}}),selected:(0,s.Y)(r.sA,{id:"oRK8zV",defaultMessage:"Selected"}),me:(0,s.Y)(r.sA,{id:"zv7JsD",defaultMessage:"Me"}),everyone:(0,s.Y)(r.sA,{id:"/Dq46W",defaultMessage:"Everyone"}),fileTypeLabel:(0,s.Y)(r.sA,{id:"aGb5NR",defaultMessage:"Type"}),multipleSelectedFileTypesLabel:e=>(0,s.Y)(r.sA,{id:"CfWj68",defaultMessage:"{count} types",values:{count:e}}),sort:e=>e.formatMessage({id:"zRqlun",defaultMessage:"Sort by"}),relevance:e=>e.formatMessage({id:"hiRkob",defaultMessage:"Most relevant"}),popularity:e=>e.formatMessage({id:"hyZsg/",defaultMessage:"Most popular"}),searchmidtierResultMessage:(e,a)=>{switch(a){case o.If.DOCUMENTATION:return e.formatMessage({id:"pu8E+G",defaultMessage:"Documents"});case o.If.PROJECT:return(0,l.Q)()?e.formatMessage({id:"m2VEDE",defaultMessage:"Git folders"}):e.formatMessage({id:"Vce5FG",defaultMessage:"Repos"});case o.If.FILE:return e.formatMessage({id:"P9WXfC",defaultMessage:"Files"});case o.If.FOLDER:return e.formatMessage({id:"ii5y22",defaultMessage:"Folders"});case o.If.LIBRARY:return e.formatMessage({id:"rVC3Xq",defaultMessage:"Libraries"});case o.If.TABLE:return e.formatMessage({id:"kNHLDl",defaultMessage:"Tables"});case o.If.METRIC_VIEW:return e.formatMessage({id:"fm8QIi",defaultMessage:"Metric views"});case o.If.VOLUME:return e.formatMessage({id:"AGr2pF",defaultMessage:"Volumes"});case o.If.FUNCTION:return e.formatMessage({id:"JhdnX6",defaultMessage:"Functions"});case o.If.NOTEBOOK:return e.formatMessage({id:"iIT2GO",defaultMessage:"Notebooks"});case o.If.MLFLOW_EXPERIMENT:return e.formatMessage({id:"PZyeta",defaultMessage:"Experiments"});case o.If.QUERY:return e.formatMessage({id:"r37QiN",defaultMessage:"Queries"});case o.If.ALERT:return e.formatMessage({id:"1PsxP7",defaultMessage:"Legacy Alerts"});case o.If.ALERT_V2:return e.formatMessage({id:"Fccfue",defaultMessage:"Alerts"});case o.If.PIPELINE:return e.formatMessage({id:"2JGQlt",defaultMessage:"Pipelines"});case o.If.DBSQL_DASHBOARD:return e.formatMessage({id:"InkkPP",defaultMessage:"Dashboards"});case o.If.JOB:return e.formatMessage({id:"gLNYHR",defaultMessage:"Jobs"});case o.If.ML_MODEL:return e.formatMessage({id:"6YNBeQ",defaultMessage:"Models"});case o.If.PARTNER:return e.formatMessage({id:"ai5xOS",defaultMessage:"Partners"});case o.If.MARKETPLACE:return e.formatMessage({id:"vrBCdZ",defaultMessage:"Marketplace"});case o.If.DATA_ROOM:return e.formatMessage({id:"GC9aHp",defaultMessage:"Genie spaces"});case o.If.ML_ENDPOINT:return e.formatMessage({id:"FJa/HC",defaultMessage:"Endpoints"});case o.If.CATALOG:case o.If.SCHEMA:case o.If.NAV_LINK:case o.If.APP:case o.If.DESIGNER_FILE:case o.If.LAKEWATCH_QUERY:return""}},clearNavigationalSearchInput:(0,s.Y)(r.sA,{id:"aqx4a0",defaultMessage:"Clear"}),resetFilters:(0,s.Y)(r.sA,{id:"xqIJoR",defaultMessage:"Reset filters"}),allTab:(0,s.Y)(r.sA,{id:"ZtTd77",defaultMessage:"All"}),viewAllResults:(0,s.Y)(r.sA,{id:"im2CfH",defaultMessage:"View all"}),viewAllResultsWithType:(e,a)=>e.formatMessage({id:"YUp8It",defaultMessage:"View all {fileType}"},{fileType:a}),defaultSearchError:(0,s.Y)(r.sA,{id:"LPHoZf",defaultMessage:"An error occurred while fetching search results. Please try again later."}),searchQueryTooLong:(0,s.Y)(r.sA,{id:"MZjOEX",defaultMessage:"The max allowed input length is {maxLength}. Please try again with a shortened search term.",values:{maxLength:100}}),noResults:(0,s.Y)(r.sA,{id:"69/sr2",defaultMessage:"No results matched your search."}),noQuery:(0,s.Y)(r.sA,{id:"Ds2vL2",defaultMessage:"Type in a query and press enter to search"}),lastModifiedTimeText:e=>(0,s.Y)(r.sA,{id:"CV9ZrO",defaultMessage:"modified {time}",values:{time:e}}),more:(0,s.Y)(r.sA,{id:"+PHNYN",defaultMessage:"More"}),unityCatalogUpgrade:(0,s.Y)(r.sA,{id:"A6Qlf7",defaultMessage:"Upgrade to Unity Catalog to search tables. Tables in the Hive Metastore aren't searchable."}),unityCatalogTables:(0,s.Y)(r.sA,{id:"oQI1QJ",defaultMessage:"Only showing results for tables in Unity Catalog. Tables in the Hive Metastore aren't searchable."}),ucModelNoResults:(0,s.Y)(r.sA,{id:"N1S9o+",defaultMessage:"No result matches were found for models in Unity Catalog."}),ucModelWorkspaceRedirect:e=>(0,s.Y)(r.sA,{id:"S1FQwL",defaultMessage:"To search for models in the current workspace, go to the <link>models page</link>.",values:{link:a=>(0,s.Y)(n.o.Link,{componentId:"codegen_webapp_js_search_v2search_i18n.tsx_424",href:e,children:a})}}),modelWorkspaceInfo:e=>(0,s.Y)(r.sA,{id:"1w6C0v",defaultMessage:"Only showing results for models in Unity Catalog. Search for models in the current workspace in the <link>workspace model registry</link>.",values:{link:a=>(0,s.Y)(n.o.Link,{componentId:"codegen_webapp_js_search_v2search_i18n.tsx_431",href:e,children:a})}}),jobId:e=>(0,s.Y)(r.sA,{id:"IcylbC",defaultMessage:"Job ID: {jobId}",values:{jobId:e}}),jobServicePrincipalOwner:(0,s.Y)(r.sA,{id:"9926x/",defaultMessage:"Service principal owner"}),lastJobRun:(0,s.Y)(r.sA,{id:"oPpdT/",defaultMessage:"Last run:"}),openFullPageSearch:(e,a)=>e.formatMessage({id:"K4NWC5",defaultMessage:"Show all results for ''{searchValue}'' in a full page"},{searchValue:a}),openEmptyFullPageSearch:e=>e.formatMessage({id:"kwrEEs",defaultMessage:"Open search in a full page"}),newTab:(0,s.Y)(r.sA,{id:"Mh6Fw/",defaultMessage:"Open in a new tab"}),enter:(0,s.Y)(r.sA,{id:"Rhf1Qy",defaultMessage:"Enter"}),openAdvancedSearch:(e,a)=>{if(a)return e.formatMessage({id:"B/IQP7",defaultMessage:"Show all results for ''{searchValue}''"},{searchValue:a});return e.formatMessage({id:"qay3aB",defaultMessage:"Open advanced search"})},itemViewedTime:(e,a=!1)=>{let t=new Date(e);return a?(0,s.Y)(r.sA,{id:"pE6SrH",defaultMessage:"Viewed {timeAgo}",values:{timeAgo:(0,s.Y)(i.f,{date:t})}}):(0,s.Y)(r.sA,{id:"87kVKV",defaultMessage:"viewed {timeAgo}",values:{timeAgo:(0,s.Y)(i.f,{date:t})}})},relatedContentSubtitle:e=>(0,s.Y)(r.sA,{id:"X/uBJA",defaultMessage:'related to "{pageName}"',values:{pageName:e}}),relatedContentLabel:e=>e.formatMessage({id:"0SQTVq",defaultMessage:"Suggested"}),recentsLabel:e=>e.formatMessage({id:"IIR4ht",defaultMessage:"Recents"}),productsAndPagesLabel:e=>e.formatMessage({id:"BpFmuq",defaultMessage:"Products and Pages"})}},329099:(e,a,t)=>{t.d(a,{EJ:()=>b,Eu:()=>d,I1:()=>u,JS:()=>p,Oo:()=>k,l4:()=>m,rF:()=>c,rc:()=>f,wV:()=>g});var s,n,r,i,o=t(610435);t(692738);var l=t(342411),u=((s={}).Python="python",s.SQL="sql",s.Scala="scala",s.R="r",s),d=((n={}).CSS="css",n.HTML="html",n.Java="java",n.JavaScript="javascript",n.JSON="json",n.Markdown="markdown",n.PG="pgsql",n.Plain="plain",n.Python="python",n.R="r",n.Scala="scala",n.Shell="sh",n.SQL="sql",n.TypeScript="typescript",n.XML="xml",n.YAML="yaml",n);let c={py:"py",md:"md",mdSandbox:"md-sandbox"},m={sql:"SQL",python:"Python",r:"R",scala:"Scala",markdown:"Markdown",run:"Run Notebook"},f={py:"Python",md:"Markdown"};var g=((r={}).Python="python",r.Scala="scala",r.SQL="sql",r.R="r",r.Markdown="markdown",r);let p=[{name:"Markdown",formattedMessage:(0,o.Y)(l.sA,{id:"xgYBvc",defaultMessage:"Markdown"})},{name:"Python",formattedMessage:(0,o.Y)(l.sA,{id:"chXIsn",defaultMessage:"Python"})},{name:"SQL",formattedMessage:(0,o.Y)(l.sA,{id:"cmxKCK",defaultMessage:"SQL"})},{name:"Scala",formattedMessage:(0,o.Y)(l.sA,{id:"wEJXV9",defaultMessage:"Scala"})},{name:"R",formattedMessage:(0,o.Y)(l.sA,{id:"RDG8ln",defaultMessage:"R"})}],b={markdown:"md",md:"md",python:"python",scala:"scala",sql:"sql",r:"r"};var h=((i={})[i.twoSpacesIndentUnit=2]="twoSpacesIndentUnit",i[i.fourSpacesIndentUnit=4]="fourSpacesIndentUnit",i);function k(){return Object.keys(h).filter(e=>"number"==typeof h[e]).map(e=>parseInt(h[e],10))}},334116:(e,a,t)=>{t.d(a,{KX:()=>h,MU:()=>p,_n:()=>f,fQ:()=>b,rZ:()=>c,s6:()=>k,wc:()=>g,yR:()=>m});var s,n,r,i,o,l,u,d,c=((s={})[s.IDLE=0]="IDLE",s[s.READY_TO_APPLY=1]="READY_TO_APPLY",s[s.APPLYING_BUT_NOT_STREAMING=2]="APPLYING_BUT_NOT_STREAMING",s[s.STREAMING=3]="STREAMING",s[s.APPLIED=4]="APPLIED",s[s.ERROR=5]="ERROR",s[s.APPLY_ENDPOINT_ERROR=6]="APPLY_ENDPOINT_ERROR",s[s.CANCELLED=7]="CANCELLED",s),m=((n={})[n.PIP_LOGS_BUTTON=0]="PIP_LOGS_BUTTON",n[n.APPLY_ERROR=1]="APPLY_ERROR",n),f=((r={}).WORKSPACE="workspace",r.VOLUMES="volumes",r),g=((i={}).DEPENDENCIES="dependencies",i.INSTALLED="installed",i),p=((o={}).EXPORT="export",o.UPLOAD="upload",o),b=((l={}).ENVIRONMENT="environment",l.BASE_ENVIRONMENT="baseEnvironment",l.DEPENDENCY="dependency",l),h=((u={}).ON_DEMAND="ON_DEMAND",u.POOL_OPTIONAL="POOL_OPTIONAL",u.POOL_REQUIRED="POOL_REQUIRED",u),k=((d={}).STANDARD="STANDARD",d.HIGH="HIGH",d)},336664:(e,a,t)=>{t.d(a,{Ay:()=>R,e:()=>T,yw:()=>I});var s,n=t(252513),r=t.n(n),i=t(691238),o=t(708134),l=t(655907),u=t(441535),d=t(375436),c=t(886100),m=t(22191),f=t(747129),g=t(87173),p=t(936289),b=t(162210);function h(){return!(0,l.Yz)()}let k="Error processing presence update";var T=((s={}).ADD="add",s.REMOVE="remove",s);function y(e){let a=0,t=new Map;return function(s){if(t.has(s)){let e=t.get(s);if(e)return e}let n=e[a%e.length];return t.set(s,n),a++,n}}function I(){return{legacy:y(["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"]),primary:y(["#00A972","#FFAB00","#FF3621","#077A9D","#8BCAE7","#99DDB4","#AB4057","#BF7080","#FCA4A1"]),secondary:y(["#E0F5E9","#FFEBC2","#FFDAD6","#CDE4EB","#DDF0F8","#F0FAF4","#EDDEE1","#F2E3E6","#FED9D7"])}}class S extends r().Model{defaults(){return{notebookId:null,locationId:null,hasFocus:!0,commandId:null,commandGuid:null,cursorStart:null,cursorEnd:null,landingTimestamp:null,sessionId:null,entities:{},sessionSource:"user-browser"}}constructor(e,a){super(e,a)}initAttributes(e){this.set({landingTimestamp:new Date().getTime(),sessionId:b.BrowserUtils.getBrowserTabId(),locationId:e,sessionSource:(0,o.P)()?"browser-fleet-headless":"user-browser"})}}class A extends r().Model{listenerReady=!1;rpc=null;colorScale=I().legacy;colorScalePrimary=I().primary;colorScaleSecondary=I().secondary;updateMarks=null;hasFocus=document.hasFocus();notebookId;commandId;commandGuid;cursorStart;cursorEnd;entities={};retryTimeoutId=null;retryCount=0;backoffOptions={initialBackoff:1e3,multiplier:2,jitter:.2,maxBackoff:6e4};defaults(){return{sessions:[],history:[],currentStatus:null}}initialize(){this.set("currentStatus",new S),this.listenTo(this.get("currentStatus"),"change",this.onStatusChange),setInterval((0,d.Uz)("setInterval","PresenceModel.updateDocumentFocus",()=>this.hasFocus=document.hasFocus()),5e3),setInterval((0,d.Uz)("setInterval","PresenceModel.saveCurrentStatus",()=>this.saveCurrentStatus()),1e3)}onPresenceUpdate(e){if(!h())return;try{this.onPresenceUpdate0(e),c.iT.sev2BurnRate(m.Es.Notebooks,k,f.i1.P9999,f.Ip.Min100,!0)}catch(e){c.iT.sev2BurnRate(m.Es.Notebooks,k,f.i1.P9999,f.Ip.Min100,!1,e)}}onPresenceUpdate0(e){this.listenerReady=!0,this.retryCount=0;let a=i.Ay.filter(e.sessions,e=>e.sessionId!==b.BrowserUtils.getBrowserTabId()),t=(0,p.vB)(a);i.Ay.each(t,e=>{e.userName&&e.userName.length>0&&(e.displayInitial=e.userName[0].toUpperCase(),e.bgColorSecondary=this.colorScaleSecondary(e.userId?.toString()),e.bgColor=this.colorScalePrimary(e.userId?.toString()),e.hasFocus?e.opacity=1:e.opacity=.4)}),t=i.Ay.sortBy(t,e=>e.timestamp),this.set("sessions",t),this.set("history",e.history),this.updateMarks&&this.updateMarks(this.get("sessions"))}setLocation(e){if(!h())return;if((0,u.W)("databricks.fe.eda.presenceExponentialBackoffEnabled",!0)){let a=this.get("currentStatus"),t=a?.get("locationId"),s=a?.get("landingTimestamp"),n=new Date().getTime();if(t&&t===e&&s&&n-s<6e4)return}this.stop(),this.retryCount=0,this.get("currentStatus")?.initAttributes(e);let a=()=>{this.rpc=window.conn.wsClient.sendRPC("presence",{data:this.get("currentStatus")?.toJSON(),update:this.onPresenceUpdate.bind(this),silent:!0,error:(e,t)=>{if(this.listenerReady=!1,!t.clientCancelled)if((0,u.W)("databricks.fe.eda.presenceExponentialBackoffEnabled",!0)){let e=(0,g.m)(this.retryCount,this.backoffOptions);this.retryCount++,this.retryTimeoutId=setTimeout(a,e)}else console.log("Presence RPC disconnected, retrying..."),this.retryTimeoutId=setTimeout(a,1e3)}})};a()}pushHistory(e,a,t){if(!h())return;window.conn.wsClient.sendRPC("presencePushHistory",{data:{locationId:t||this.get("currentStatus")?.get("locationId"),entry:{text:e,important:a}},silent:!0})}updateCurrentCommand(e,a,t){if(!h())return;this.notebookId=e,this.commandId=a,this.commandGuid=t}updateCurrentEntity(e,a,t="add"){if(!h()||!e)return;this.notebookId=e,"remove"===t?delete this.entities[Object.keys(a)[0]]:this.entities={...this.entities,...a}}updateCursorPosition(e,a,t,s){if(!h())return;this.notebookId=e,this.commandId=a,this.cursorStart=t,this.cursorEnd=s}saveCurrentStatus(){if(!h())return;this.get("currentStatus")?.set({hasFocus:this.hasFocus,notebookId:this.notebookId,commandId:this.commandId,commandGuid:this.commandGuid,cursorStart:this.cursorStart,cursorEnd:this.cursorEnd,entities:this.entities})}onStatusChange(){if(!h())return;this.listenerReady&&window.conn.wsClient.sendRPC("presenceUpdate",{silent:!0,data:this.get("currentStatus")?.toJSON()})}stop(){if(!h())return;this.listenerReady=!1,this.rpc&&this.rpc.cancel?.(),this.retryTimeoutId&&(clearTimeout(this.retryTimeoutId),this.retryTimeoutId=null),this.retryCount=0}}let R=new A},367295:(e,a,t)=>{t.d(a,{L:()=>i});var s=t(371303),n=t(726583),r=t(924876);function i(){return{includeSubscriptions:(0,s.sT)("databricks.fe.jaws.enableDashboardSubscriptionsUi",!1),includeJobInRunJobTask:!0,includeJobParameters:(0,n.ue)(),includeTaskDependencyOutcome:!0,includeTriggerState:!0,includePeriodicTrigger:!0,includeOnStreamingBacklogExceeded:(0,r.cG)(),includeSourceInDbtAndSqlFile:!0}}},397382:(e,a,t)=>{t.d(a,{N:()=>n});var s=t(441535);function n(){return(0,s.W)("databricks.fe.discover.domainsRecommendations",!1)}},413527:(e,a,t)=>{t.d(a,{a:()=>E});var s=t(610435),n=t(692738),r=t(810152),i=t(497895),o=t(295169),l=t(342411),u=t(929117),d=t(188454),c=t(225577);let m=(0,c.A)("div",{target:"eu868a50"})("padding:",({theme:e})=>`0 ${e.spacing.sm}px`,";position:absolute;left:0;right:0;top:",({tabsAreLoading:e})=>e?"0":"32px",";"),f=(0,c.A)("div",{target:"eu868a51"})("display:flex;justify-content:space-between;align-items:center;height:36px;"),g=(0,c.A)(o.x,{target:"eu868a52"})("height:",({theme:e})=>e.typography.lineHeightSm,";width:192px;"),p=(0,c.A)(o.x,{target:"eu868a53"})("height:",({theme:e})=>e.typography.lineHeightLg,";width:",({width:e})=>`${e}px`,";"),b=(0,c.A)("div",{target:"eu868a54"})("display:flex;gap:8px;align-items:center;"),h=(0,c.A)("div",{target:"eu868a55"})("margin-top:",({theme:e})=>e.spacing.sm,"px;"),k=(0,c.A)("div",{target:"eu868a56"})("height:36px;width:100%;display:flex;gap:32px;align-items:center;"),T=(0,c.A)("div",{target:"eu868a57"})("margin-top:",({theme:e})=>e.spacing.sm,"px;display:flex;width:100%;"),y=(0,c.A)("div",{target:"eu868a58"})("width:40px;"),I=()=>(0,s.Y)(l.sA,{id:"wU0+O/",defaultMessage:"Loading..."}),S=({lineCount:e=6})=>(0,s.Y)("div",{css:{width:"fill-available"},children:[...Array(e).keys()].map(e=>{let a;return(0,s.Y)(r.I,{label:(0,s.Y)(I,{}),style:{width:`calc(80% - ${(a=[48,0,24,12])[e%a.length]}px)`}},`editor-skeleton-${e}`)})}),A=[140,100],R=[80,60,24],E=n.memo(({tabsAreLoading:e})=>{let{theme:a}=(0,i.wn)();return(0,s.Y)(m,{tabsAreLoading:e,"data-testid":"tabs-loading-skeleton",children:(0,s.FD)(d.Z,{loadingDescription:u.z.SOFT_TAB_LOADING,children:[e&&(0,s.Y)(k,{children:A.map((e,a)=>(0,s.Y)(o.x,{label:(0,s.Y)(I,{}),css:{width:e,height:"10px"}},`tabs-${a}`))}),(0,s.FD)(f,{children:[(0,s.Y)(g,{label:(0,s.Y)(I,{})}),(0,s.Y)(b,{children:R.map((e,a)=>(0,s.Y)(p,{label:(0,s.Y)(I,{}),width:e},`header-button-${a}`))})]}),(0,s.Y)(h,{children:(0,s.Y)(o.x,{label:(0,s.Y)(I,{}),style:{height:a.typography.lineHeightLg,width:"88px"}})}),(0,s.FD)(T,{children:[(0,s.Y)(S,{}),(0,s.Y)(y,{})]})]})})})},465082:(e,a,t)=>{t.d(a,{A:()=>l});var s=t(610435),n=t(692738),r=t(375214);function i(e){return(0,s.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,s.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a3.25 3.25 0 1 0 0 6.5A3.25 3.25 0 0 0 8 1M6.25 4.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M8 9a8.74 8.74 0 0 0-6.836 3.287.75.75 0 0 0-.164.469v1.494c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75v-1.494a.75.75 0 0 0-.164-.469A8.74 8.74 0 0 0 8 9m-5.5 4.5v-.474A7.23 7.23 0 0 1 8 10.5c2.2 0 4.17.978 5.5 2.526v.474z",clipRule:"evenodd"})})}let o=(0,n.forwardRef)((e,a)=>(0,s.Y)(r.I,{ref:a,...e,component:i}));o.displayName="UserIcon";let l=o},543963:(e,a,t)=>{t.d(a,{DP:()=>n,WB:()=>r,cn:()=>i});var s=t(141078);let n=(0,s.J1)`
  fragment RunStateFragment on JobsRunState {
    durationWarningExceeded
    lifeCycleState
    resultState
    stateMessage
    userCancelledOrTimedout
    queueReason @include(if: $includeQueueReason)
  }
`,r=(0,s.J1)`
  fragment RunStatusFragment on JobsRunStatus {
    queueDetails @include(if: $includeQueueReason) {
      code
      message
    }
    state
    description @includeSafex(name: "lakeflow_runs_list", defaultValue: false)
    cancellationDetails @includeSafex(name: "lakeflow_runs_list", defaultValue: false) {
      reason
    }
    terminationDetails {
      code
      message
      type
    }
  }
`,i=(0,s.J1)`
  fragment RunEdgesFragment on RunConnection {
    edges {
      node {
        status
        statusV2 {
          ...RunStatusFragment
        }
        idInJob
        startTime
      }
    }
  }
  ${r}
`},555308:(e,a,t)=>{t.d(a,{Ay:()=>ep,BY:()=>V,HM:()=>J,Ho:()=>Q,NX:()=>j,OV:()=>eu,QC:()=>ec,W_:()=>q,Ww:()=>ei,X$:()=>F,_g:()=>et,_r:()=>Z,a0:()=>eo,aP:()=>G,eO:()=>L,fP:()=>em,js:()=>_,kB:()=>z,lT:()=>ee,p5:()=>B,pN:()=>W,rE:()=>ef,rf:()=>ed,sR:()=>U,sS:()=>en,vQ:()=>ea,w:()=>K,xE:()=>H});var s,n=t(610435),r=t(621058),i=t.n(r),o=t(359419),l=t.n(o);t(692738);var u=t(342411),d=t(236560),c=t(485669),m=t(441535),f=t(13451),g=t(278983),p=t(886100),b=t(22191),h=t(747129),k=t(189520),T=t(532188),y=t(32998),I=t(39659),S=t(101499),A=t(250213),R=t(329099),E=t(634685),v=t(88277),D=t(515700),P=t(735919);function M(e,a,t,s,n,r,i){try{var o=e[r](i),l=o.value}catch(e){t(e);return}o.done?a(l):Promise.resolve(l).then(s,n)}function N(e){return function(){var a=this,t=arguments;return new Promise(function(s,n){var r=e.apply(a,t);function i(e){M(r,s,n,i,o,"next",e)}function o(e){M(r,s,n,i,o,"throw",e)}i(void 0)})}}let w=["date","timestamp"],C=["byte","short","integer","long","float","double"];var _=((s={}).RUNNING="running",s.RUNNING_FROM_RUN_ALL="runningFromRunAll",s.IDLE="idle",s);let L=e=>"idle"!==e,O=(e,a)=>N(function*(){let{commandModelToMonacoUri:s}=yield(()=>{let e=()=>Promise.all([t.e(62280),t.e(21234),t.e(1990),t.e(78632),t.e(39676),t.e(31813),t.e(93932),t.e(95600),t.e(64666),t.e(62762),t.e(49177),t.e(23118)]).then(t.bind(t,517171));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(517171,"./editor-monaco/plugins/utils/python-lsp/types/InternalTypes","lazy",e);return e()})();return{text:a??e.getCommand(),id:e.get("guid"),monacoModelUri:s(e)}})(),J=e=>N(function*(){let a=e.getTopLevelCommands(),t=[];for(let e=0;e<a.length;e++){let s=a[e];if("sql"===s.getLanguage())t.push((yield O(s)));else if("python"===s.getLanguage()||"scala"===s.getLanguage()){let e=yield W(s.getCommand(),s.getLanguage());t.push(...yield Promise.all(e.map(e=>O(s,e.statement))))}}return t})(),$=(e,a,t,s,n)=>{let r,i,o=[],l={startLineIndex:s.startIndex===s.endIndex?n:s.startLineIndex,startIndex:s.startIndex,endIndex:s.endIndex,sqlStartIndexAtCurrentLine:s.sqlStartIndexAtCurrentLine};for(let e=0;e<a.length;e++){let s=a[e];s&&"sql"===s.language&&(void 0===r&&(r=a[e]?.offset||0,l.sqlStartIndexAtCurrentLine=l.sqlStartIndexAtCurrentLine||r),i=a[e+1]?.offset),t&&void 0!==r&&void 0!==i&&l.startIndex===l.endIndex&&"sql"!==s.language&&(o.push({functionName:"sql",statement:t.substring(r,i),startLineIndex:n,sqlStartIndexAtCurrentLine:r}),r=void 0,i=void 0,l.sqlStartIndexAtCurrentLine=0)}return void 0===r&&void 0===i&&l.endIndex>l.startIndex&&(o.push({functionName:"sql",startLineIndex:l.startLineIndex,statement:e.substring(l.startIndex,l.endIndex),sqlStartIndexAtCurrentLine:l.sqlStartIndexAtCurrentLine}),l.startIndex=l.endIndex,l.startLineIndex=n,l.sqlStartIndexAtCurrentLine=0),l.startIndex+=void 0===r?t.length+1:r,l.endIndex+=void 0===i?t.length+1:i,{sqlStatements:o,indexDetails:l}},x=(e,a,t,s)=>{let n,r,i=[],o={startLineIndex:t.startIndex===t.endIndex?s:t.startLineIndex,startIndex:t.startIndex,endIndex:t.endIndex,sqlStartIndexAtCurrentLine:t.sqlStartIndexAtCurrentLine},l=a=>{let t=e[a];if(!t)return null;if("identifier.python"===t.type&&a+1<e.length&&"delimiter.parenthesis.python"===e[a+1].type&&a+2<e.length&&e[a+2].type.startsWith("string.escape.python")&&a+3<e.length)return a+3;return null},u=0;for(;u<e.length;){let t=l(u);if(null===t){u++;continue}"table("===a.substring(e[u]?.offset,e[t]?.offset-1||0)&&(void 0===n&&(n=e[t]?.offset||0,o.sqlStartIndexAtCurrentLine=o.sqlStartIndexAtCurrentLine||n),r=e[t+1]?.offset,a&&o.startIndex===o.endIndex&&(i.push({functionName:"table",statement:`select * from ${a.substring(n,r)}`,startLineIndex:s,sqlStartIndexAtCurrentLine:n}),n=void 0,r=void 0,o.sqlStartIndexAtCurrentLine=0)),u=t+3}return{sqlStatements:i,indexDetails:o}},W=(e,a)=>N(function*(){let s=e?.split("\n"),n=[];if(e&&s&&s.length&&("scala"===a||"python"===a)){let{getMonacoApi:r}=yield(()=>{let e=()=>Promise.all([t.e(62280),t.e(21234),t.e(1990),t.e(78632),t.e(39676),t.e(31813),t.e(93932),t.e(95600),t.e(64666),t.e(62762),t.e(49177),t.e(31632)]).then(t.bind(t,645696));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(645696,"@databricks/editor/unifiedEditor","lazy",e);return e()})(),{enableCustomPythonSyntax:i,enableCustomScalaSyntax:o,enableCustomSQLSyntax:l}=yield(()=>{let e=()=>Promise.all([t.e(62280),t.e(6932),t.e(1291),t.e(97768),t.e(24685),t.e(99406),t.e(21234),t.e(92170),t.e(1990),t.e(78632),t.e(39676),t.e(31813),t.e(51362),t.e(26881),t.e(159),t.e(74767),t.e(93932),t.e(95600),t.e(68775),t.e(11022),t.e(43927),t.e(18650),t.e(87122),t.e(12674),t.e(4828),t.e(90489),t.e(64666),t.e(30259),t.e(13962),t.e(22831),t.e(80086),t.e(51818),t.e(87385),t.e(58415),t.e(79637),t.e(62762),t.e(48898),t.e(75165)]).then(t.bind(t,731392));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(731392,"@databricks/editor/commonPlugins","lazy",e);return e()})();i(),l(),o();try{let t=r().tokenize(e,"scala"===a?"custom_scala":"custom_python"),i={startIndex:0,endIndex:0,startLineIndex:0,sqlStartIndexAtCurrentLine:0};t.forEach((a,t)=>{let{sqlStatements:r,indexDetails:o}=$(e,a,s[t],i,t);i=o,r.length&&n.push(...r);let{sqlStatements:l,indexDetails:u}=x(a,s[t],i,t);i=u,l.length&&n.push(...l)}),i.endIndex>i.startIndex&&n.push({functionName:"table",statement:e.substring(i.startIndex,i.endIndex),startLineIndex:i.startLineIndex,sqlStartIndexAtCurrentLine:i.sqlStartIndexAtCurrentLine})}catch(e){}}return n})(),F=e=>"running"===e,U=e=>{switch(e){case"runningFromRunAll":case"running":return!0;default:return!1}},q=(e,a)=>eg.isRunningAll({runStatus:e.get("runStatus"),jsRunAllAction:e.get("jsRunAllAction")})||eg.isRunningSingleCommand(e,a),B=({runStatus:e,jsRunAllAction:a})=>{if("RunAll"===a||"runningFromRunAll"===e)return!0;return!1},j=e=>e.getTopLevelCommands().some(e=>e.get("submitTime")>0);function Y(e,a){let t=e.getResponseHeader("X-Databricks-Reason-Phrase");if(t&&t.length>3)return{statusText:t,specialEventName:"ServerErrorMessage"};let s=e.getResponseHeader("x-databricks-popp-response-code-details");if(s&&s.length>3)return{statusText:s,specialEventName:"PoppPermissionDenied"};let n=e.statusText,r=a instanceof Error?a.message:"string"==typeof a?a:void 0;if(r&&r.length>n.length)return{statusText:r,specialEventName:"ServerErrorMessageFallback"};return{statusText:n,specialEventName:"ServerErrorShortMessage"}}let V=e=>{let a=(0,m.W)("databricks.elasticspark.treeStoreTmpDir","__databricks_jobs_tmp");return!!a&&!!e&&e.startsWith(`/${a}`)},G=e=>!!e&&e.indexOf(".conversations/___DBCONVERSATION___")>=0,Q=(e,a)=>{if(void 0!==a)return a===R.Eu.Markdown?"markdown":"table";if(e){let a=e.match(eg.firstWordRegex),t=a&&a[1];if("%md"===t)return"markdown";if("%md-sandbox"===t)return"markdown-sandbox"}return"table"},z=e=>{let a="auto"===e?"auto":parseInt(e,10)+"px";if("0px"===a)return"auto";return a},H=e=>!["markdown","markdown-sandbox","image","images","html","htmlSandbox"].includes(e),K=e=>!["markdown","markdown-sandbox","html"].includes(e);function X(){return i()("#content").offset()?.top||E.Ay.TOPBAR_HEIGHT}let Z=(e,a)=>{let t=e.get("pathName");if(""!==t&&null!=t){let s=t.lastIndexOf("/")+1,n=t.substring(0,s)+a;e.set("pathName",n)}};function ee(){let e=(0,f.e)("enableLegacyNotebookVisualizations",null);if(null!==e)return e;let a=(0,m.W)("databricks.eda.enableLegacyNotebookVisualizations",null);if(null!==a)return a;return!1}function ea(e){return!l()(e)}let et=e=>e.get("clusterMetadata")?.sparkVersion||"",es=[R.Eu.SQL,R.Eu.Python,R.Eu.Scala,R.Eu.R],en=e=>{let a=e.get("targetClusterId");if((0,d.Ul)(a))return!1;switch(e.getEditorMode()){case"notebook":case"designer":return!0;case"query":return"alertV2"!==e.get("type");case"file":let t=e.getFileEditorLanguage();return!!(t&&es.includes(t))}},er=RegExp("^queries/(?<queryId>[a-zA-Z0-9-]+)$");function ei(e){let a=e.match(er);return a?a.groups.queryId:void 0}function eo(e){if("query"!==e.get("type")||!(0,T.K3)())return!1;return!e.get("unifiedSqlEditorEnabled")}let el={notebook:k.P.NOTEBOOK,file:k.P.FILE,query:k.P.QUERY,designer:k.P.DESIGNER_FILE};function eu(e){return new Promise(a=>{if(["confirm","select","create","confirmSelect"].includes(e?.unattachedReason))return void a(!0);P.k.confirm({title:(0,n.Y)(u.sA,{id:"NO72b+",defaultMessage:"Cancel current execution?"}),body:(0,n.Y)(u.sA,{id:"dqPb99",defaultMessage:"Do you want to cancel the current execution and re-run the command?"}),okText:(0,n.Y)(u.sA,{id:"wL6q8q",defaultMessage:"Yes"}),cancelText:(0,n.Y)(u.sA,{id:"u83aYb",defaultMessage:"No"}),onCancel:()=>{a(!1)},onOk:e=>{e.stopPropagation(),a(!0)}})})}let ed=()=>(0,c.Fu)(window.location);function ec(e){switch(e){case"notebook":return"notebook-editor";case"file":return"file-editor";case"query":return"query-editor";case"designer":return"designer-file-editor"}}function em(){v.y.addNotification({uid:"nb-rpc-heavy-load-warning",level:"warning",title:(0,n.Y)(u.sA,{id:"8eOkZ8",defaultMessage:"Databricks is experiencing heavy load"}),message:(0,n.Y)(u.sA,{id:"eSyPCQ",defaultMessage:"Operations may take longer to complete than usual."})})}function ef(){v.y.addNotification({uid:"nb-rpc-heavy-load-error",level:"error",title:(0,n.Y)(u.sA,{id:"MqdC+z",defaultMessage:"Databricks is unresponsive"}),message:(0,n.Y)(u.sA,{id:"6OQ0EU",defaultMessage:"Operations are not completing in a timely manner. Please save your work and try again later."})})}let eg={hasRunningStatus:U,isNotIdle:L,isRunning:q,isRunningAll:B,isRunningSingleCommand:(e,a)=>{if("running"===e.get("runStatus"))return!0;return(a?a.where({running:!0}).length:0)+(a?a.where({shouldRun:!0}).length:0)>0},isCancelling:(e,a)=>{let t=e.get("runStatus");if("Cancel"===e.get("jsRunAllAction")&&"idle"!==t||a.where({state:"cancelling"}).length>0)return!0;return!1},hasRunBefore:j,handleRpcError:(e,a,t)=>{let s,r;if(4!==e.readyState)s=(0,n.Y)(u.sA,{id:"NMM/gx",defaultMessage:"Network error. Please check your network connection."}),r="NetworkError";else if(403===e.status){let{statusText:a}=Y(e,t);s=(0,n.Y)(u.sA,{id:"VJa0DE",defaultMessage:"Permission denied: {statusText}",values:{statusText:a}}),r="PermissionDenied"}else{let a;if(a=e.statusText,400===e.status&&"unified-query-editor-unavailable"===a)s=(0,n.Y)(u.sA,{id:"Skfl3U",defaultMessage:"This query does not have the new SQL editor enabled and can only be opened in the classic SQL editor."});else{let a;if(a=e.statusText,409===e.status&&null!==a&&/Node named '.*?' already exists/.test(a)){let{statusText:a}=e;s=(0,n.Y)(u.sA,{id:"nTrRBM",defaultMessage:"Name conflict error: {statusText}",values:{statusText:a}})}else{let{statusText:a,specialEventName:i}=Y(e,t);s=(0,n.Y)(u.sA,{id:"mjQkkg",defaultMessage:"Server error: {statusText}",values:{statusText:a}}),r=i||"ServerError"}}}P.k.confirm({title:(0,n.Y)(u.sA,{id:"xxzo20",defaultMessage:"A problem has occurred"}),body:s,cancelText:(0,n.Y)(u.sA,{id:"aLsIym",defaultMessage:"Close"}),okText:(0,n.Y)(u.sA,{id:"sv9wGG",defaultMessage:"Reload page"}),onOk:()=>{window.location.reload()}}),(0,g.y)("clientsideEvent",{eventName:r,eventType:"NotebookRpcError",httpStatusCode:e.status,errorName:e.statusText})},attachToCluster:(e,a)=>{let t=a.id;e.attach(t,{onError:a=>{let s=a&&a.statusText;s&&s.startsWith("Failed to attach")?P.k.confirm({title:(0,n.Y)(u.sA,{id:"opb1IS",defaultMessage:"Failed to attach notebook"}),body:(0,n.Y)(u.sA,{id:"g/zpme",defaultMessage:"{errorMsg} Do you want to force re-attach? This will clear all computed variable values from this notebook.",values:{errorMsg:s}}),okText:(0,n.Y)(u.sA,{id:"kKQnYY",defaultMessage:"Yes"}),cancelText:(0,n.Y)(u.sA,{id:"nyV6GF",defaultMessage:"No"}),onOk:()=>e.detachAndAttach(t)}):eg.handleRpcError(a)}})},isNumeric:e=>e instanceof D.Ay.AtomType&&(C.includes(e.typeName)||e.typeName&&"string"==typeof e.typeName&&e.typeName.startsWith("decimal")),isJobNotebook:V,isDateType:e=>e instanceof D.Ay.AtomType&&w.includes(e.typeName),firstWordRegex:/(\S+)(?:\s|\n|$)/,getDisplayType:Q,fixLength:z,isDownloadable:H,isResizable:K,isOutOfView:e=>{if(0===e.length)return!1;let a=i()(window),t=e.offset().top,s=e.height(),n=a.height();if(0===n)return!1;if(t+s<X()||t>n)return!0;return!1},isElementVisibleOnNotebook:e=>{let a=e.getBoundingClientRect(),t=X(),s=a.top>=t&&a.top<=(window.innerHeight||document.documentElement.clientHeight),n=a.bottom>=t&&a.bottom<=(window.innerHeight||document.documentElement.clientHeight);return s||n},detachNotebooks:(e,a,t)=>{if(!Array.isArray(e))return void console.error("NotebookUtilities.detachNotebooks takes a list of notebook ids");return i().ajax({type:"POST",url:"/notebook/detach",data:JSON.stringify({notebookIds:e}),success:a,error:t,dataType:"json"})},updateNotebookPathAfterRename:Z,updateNotebookPathName:(e,a)=>{if(void 0===a)return;let t=e.get("name"),s=e.get("parentId");if(!s)return;let n=a.get(s);n?e.set("pathName",n.get("pathName")+"/"+t):window.conn.prefetchNode(s,()=>{let n=a.get(s);n?e.set("pathName",n.get("pathName")+"/"+t):p.iT.sev2BurnRate(b.Es.Notebooks,"notebookRenameUnableToFindParent",h.i1.P99,h.Ip.Min10,!1,{parentId:s,notebookId:e.get("id"),disableSidebarPrefetch:!0})})},isStructureStreamingCommand:ea,getLanguageOptions:function(){return Object.keys(R.I1).map(e=>{let a=R.I1[e];return{label:R.l4[a],value:a}})},getSparkVersion:et,extractQueryIdFromResourceName:ei,isEligibleForUnsupportedQueryFallback:eo,getRecentAssetId:e=>{switch(e.getEditorMode()){case"notebook":case"file":case"designer":return e.id.toString();case"query":if("query"!==e.get("type"))return e.id.toString();let a=e.getQueryId();if(!a)throw Error(`invalid query resource name ${e.get("resourceName")}`);return a}},getRecentAssetType:e=>{let a=e.getEditorMode();if("designer"===a&&!(0,S.dD)())return k.P.NOTEBOOK;return el[a]},runCommandConfirmation:eu,confirmNewSessionIfCatalogOrSchemaChanged:e=>N(function*(){if("query"!==e.getEditorMode()||"alertV2"===e.get("type"))return!0;let a=e.get("targetClusterId");if((0,d.Ul)(a))return!0;let t=e.getNotebookMetadata()?.sqlQueryOptions,s={catalog:t?.catalog||"",schema:t?.schema||""},r=e.get("sessionCatalogAndSchema");if(!e.isAttached())return!0;if(!r)return(0,m.W)("databricks.notebook.enableUnifiedSqlEditorSessionSupportForWarehouses",!1)&&(yield e.detachAndAttach(e.get("targetClusterId"))),!0;let i={catalog:r?.catalog||"",schema:r?.schema||""},o=i.catalog!==s.catalog,l=i.schema!==s.schema;if(!o&&!l)return!0;let c=new I.y;P.k.confirm({title:(0,n.Y)(u.sA,{id:"PXcYNF",defaultMessage:"Start new session?"}),body:(0,n.Y)(u.sA,{id:"E2vKa4",defaultMessage:`The {changeType, select,
          catalogAndSchema {catalog and schema have}
          catalogOnly {catalog has}
          other {schema has}
        } changed. A new session is required to run queries with the updated {changeType, select,
          catalogAndSchema {catalog and schema}
          catalogOnly {catalog}
          other {schema}
        }. Would you like to start a new session?`,values:{changeType:(()=>{if(o&&l)return"catalogAndSchema";if(o)return"catalogOnly";return"schemaOnly"})()}}),okText:(0,n.Y)(u.sA,{id:"sn+eYw",defaultMessage:"Yes, start session and run"}),cancelText:(0,n.Y)(u.sA,{id:"z/mZtf",defaultMessage:"No, cancel run"}),onCancel:()=>{c.resolve(!1)},onOk:e=>{e.stopPropagation(),c.resolve(!0)}});let f=yield c.promise;if(e.recordClientsideEvent(f?"usqle.confirmNewSessionForMst.confirmed":"usqle.confirmNewSessionForMst.rejected"),!f)return!1;return yield e.detachAndAttach(e.get("targetClusterId")),!0})(),isValidNotebookUrl:ed,extractSqlStatements:$,extractSqlStatementsFromSparkTable:x,extractSqlCommandsFromPythonOrScala:W,displaySTSCredentialsRefreshModal:function(){let e=window.location.pathname+window.location.search,a=btoa(window.location.hash),t=`/saml/auth?hash=${a}&next_url=${btoa(e)}`;P.k.confirm({title:(0,n.Y)(u.sA,{id:"2h94R0",defaultMessage:"New STS session for IAM role is required."}),body:(0,n.Y)(u.sA,{id:"mA9fOP",defaultMessage:"The STS session for your IAM role is about to expire. Please click here to get a new session."}),onOk:()=>{window.location.replace(t)}})},supportsWidgets:en,notebookNameAsDisplayTitle:function(e,a){if(!e)return e;if("query"===a||"alert"===a)return(0,y.w)(e);if("designer"===a)return(0,A.qk)(e);return e},displayTitleToNotebookName:function(e,a,t){if("designer"===a)return(0,A.sG)(e,t);return e},isQuery:function(e){return"query"===e.getEditorMode()&&"query"===e.get("type")}},ep=eg},634685:(e,a,t)=>{t.d(a,{$D:()=>d,Ay:()=>f,Az:()=>m,P5:()=>u,bm:()=>c,dp:()=>l});let s="auto-run-selected-command",n="auto-run-all",r="no-auto-run";var i,o,l=((i={}).RUN_ERROR="RUN_ERROR",i.RUN_TABLE_RESULT_SUBCOMMAND_NO_RUNNABLE_CLUSTER_ATTACHED="RUN_TABLE_RESULT_SUBCOMMAND_NO_RUNNABLE_CLUSTER_ATTACHED",i.SQL_WAREHOUSE_INCOMPATIBLE_WARNING="SQL_WAREHOUSE_INCOMPATIBLE_WARNING",i);let u={state:{NO_CLUSTER_ATTACHED:"NO_CLUSTER_ATTACHED",ALREADY_RUNNING:"ALREADY_RUNNING",COMMAND_EMPTY:"COMMAND_EMPTY",READY:"READY",SELECTED_COMMAND_RUNNING:"SELECTED_COMMAND_RUNNING",COMMAND_LIST_EMPTY:"COMMAND_LIST_EMPTY",BATCH_RUNNING:"BATCH_RUNNING",COMMAND_ID_UNDEFINED:"COMMAND_ID_UNDEFINED"},MAX_COMMAND_TITLE_LENGTH:400,AUTO_RUN_ACCESSED_COMMAND:s,AUTO_RUN_ALL:n,AUTO_RUN_NO_OP:r,AUTO_RUN_ALL_OPTIONS:[s,n,r],TOPBAR_HEIGHT:76,INPUT_BTN_HEIGHT:25,SIDE_NAV_WIDTH:76,SHELL_TOP_CLASS_NAME:"shell-top",SHELL_TOP_JQUERY_NAME:".shell-top",SHELL_TOP_AND_HEADERS:".shell-top, .notebook-header",SCROLL_CONTAINER_CLASS_NAME:"notebook-scrollable-container"},d="navigate",c="move";var m=((o={}).INSPECT_VARIABLE="INSPECT_VARIABLE",o.TABLE_OF_CONTENTS="TABLE_OF_CONTENTS",o.DEBUGGER="DEBUGGER",o.ADD_COMMAND="ADD_COMMAND",o.COMMAND_ERROR="COMMAND_ERROR",o.MOUNT="MOUNT",o.CELL_MAGIC="CELL_MAGIC",o.GENERATE_QUERY_BUTTON="GENERATE_QUERY_BUTTON",o.DELETE_COMMAND="DELETE_COMMAND",o);let f=u},659789:(e,a,t)=>{t.d(a,{M:()=>r,n:()=>n});var s=t(141078);let n=(0,s.J1)`
  fragment ApiErrorFields on ApiError {
    code
    message
  }
`,r=(0,s.J1)`
  fragment RunParameters on RunParameters {
    jarParams
    notebookParams {
      key
      value
    }
    pythonParams
    sparkSubmitParams
    pythonNamedParams {
      key
      value
    }
    sqlParams {
      key
      value
    }
    dbtCommands
    pipelineParams {
      fullRefresh
    }
  }
`},691515:(e,a,t)=>{t.d(a,{d:()=>n});var s=t(141078);let n=(0,s.J1)`
  fragment ForEachTaskStats on JobsJobTask {
    forEachTask {
      stats {
        taskRunStats {
          scheduledIterations
          activeIterations
          totalIterations
          failedIterations
          completedIterations
          succeededIterations
        }
        errorMessageStats {
          errorMessage
          count
          terminationCategory
        }
      }
    }
  }
`},736996:(e,a,t)=>{if(t.d(a,{LZ:()=>r,V8:()=>o,X4:()=>g,ZQ:()=>l,Zu:()=>i,a2:()=>d,eh:()=>u,lf:()=>c,xs:()=>m,yt:()=>f}),13057==t.j)var s=t(497895);var n=t(993533);let r=8,i=12,o=24,l=60,u="system.Featured",d="TABLE_METRIC_VIEW";function c(e){let{theme:a}=(0,s.wn)();return e?0:2*a.spacing.lg}let m=[n.Clx.DASHBOARD_V3,n.Clx.DATA_ROOM,n.Clx.NOTEBOOK,n.Clx.QUERY,n.Clx.UC_TABLE,n.Clx.UC_MODEL,n.Clx.ENDPOINT_CENTRIC_ENDPOINT],f=[n.iId.ML_MODEL,n.iId.ML_ENDPOINT],g=[n.iId.ML_MODEL]},823910:(e,a,t)=>{t.d(a,{S:()=>r,_:()=>n});var s=t(141078);let n=(0,s.J1)`
  query ListRecommendedDomains($pageSize: Int, $pageToken: String, $recommendationTraceId: String)
  @component(name: "LakehouseCollaboration.DiscoveryAndRecommendation") {
    recommendationGetDomainRecommendations(
      input: { pageSize: $pageSize, pageToken: $pageToken, recommendationTraceId: $recommendationTraceId }
    ) {
      domainRecommendations {
        domain {
          domainId
          tagKey
          tagMetadata {
            description
          }
          icon {
            name
            color
          }
          subtitle
          description
          draft
          effectiveDraft
          technicalOwnerIds
          businessOwnerIds
          createTime
          parentDomainId
        }
        relevanceScore
      }
      recommendationTraceId
      nextPageToken
      apiError {
        code
        message
        helpUrl
        traceId
      }
    }
  }
`;function r(e,a={}){return(0,s.IT)(n,{variables:e,...a})}},841710:(e,a,t)=>{t.d(a,{DV:()=>d,LC:()=>i,W9:()=>r,iq:()=>o,pR:()=>u});var s,n=t(993533),r=((s={}).DASHBOARD_LAKEVIEW="DASHBOARD_LAKEVIEW",s.NOTEBOOK="NOTEBOOK",s.QUERY="QUERY",s.UC_TABLE="UC_TABLE",s.DATA_ROOM="DATA_ROOM",s.UC_TABLE_METRIC_VIEW="UC_TABLE_METRIC_VIEW",s.UC_MODEL="UC_MODEL",s.ENDPOINT="ENDPOINT_CENTRIC_ENDPOINT",s.APP="APP",s);let i=Object.entries({DASHBOARD_LAKEVIEW:n.iId.DASHBOARD_LAKEVIEW,NOTEBOOK:n.iId.NOTEBOOK,QUERY:n.iId.QUERY,UC_TABLE:n.iId.TABLE,DATA_ROOM:n.iId.DATA_ROOM,UC_TABLE_METRIC_VIEW:n.iId.TABLE,UC_MODEL:n.iId.ML_MODEL,ENDPOINT_CENTRIC_ENDPOINT:n.iId.ML_ENDPOINT,APP:n.iId.APP}).reduce((e,[a,t])=>({...e,[t]:e[t]??a}),{}),o=e=>Object.keys(i).includes(e),l={[n.z$1.ALERT]:n.iId.ALERT,[n.z$1.DASHBOARD]:n.iId.DASHBOARD_REDASH,[n.z$1.DASHBOARD_V3]:n.iId.DASHBOARD_LAKEVIEW,[n.z$1.EXPERIMENT]:n.iId.MLFLOW_EXPERIMENT,[n.z$1.FILE]:n.iId.FILE,[n.z$1.FOLDER]:n.iId.FOLDER,[n.z$1.JOB]:n.iId.JOB,[n.z$1.LIBRARY]:n.iId.LIBRARY,[n.z$1.NOTEBOOK]:n.iId.NOTEBOOK,[n.z$1.PROJECT]:n.iId.PROJECT,[n.z$1.QUERY]:n.iId.QUERY,[n.z$1.UC_TABLE]:n.iId.TABLE,[n.z$1.DATA_ROOM]:n.iId.DATA_ROOM,[n.z$1.UC_MODEL]:n.iId.ML_MODEL,[n.z$1.ENDPOINT_CENTRIC_ENDPOINT]:n.iId.ML_ENDPOINT,[n.z$1.APP]:n.iId.APP},u=l,d=Object.entries(l).reduce((e,[a,t])=>({...e,[t]:a}),{})},852683:(e,a,t)=>{t.d(a,{F:()=>n});let s=[["none",/^(?:[^\\"]|\\.)*$/],["simple",/^\s*"(?:[^\\"]|\\.)*"\s*$/],["complex",/^[^"]*(?:\s|^)(?:"(?:[^\\"]|\\.)*"(?:\s[^"]+)?(?:\s|$))+$/],["unpadded",/^[^"]*(?:"(?:[^\\"]|\\.)*"[^"]*)+$/]];function n(e){for(let[a,t]of s)if(null!==t.exec(e))return a;return"invalid"}},872843:(e,a,t)=>{t.d(a,{H:()=>n});var s=t(278983);function n(e,a){if("function"!=typeof a)throw Error("callbackFn must be a function");let t=t=>{let n=a();n&&("BackboneUtils"!==e&&"BackboneRpcMixin"!==e&&(0,s.y)("clientsideEvent",{eventType:"beforeWindowUnload",eventName:e}),t.preventDefault(),t.returnValue=n);return n};return window.addEventListener("beforeunload",t),()=>{window.removeEventListener("beforeunload",t)}}},886110:(e,a,t)=>{t.d(a,{CG:()=>d,aD:()=>g,gy:()=>f,kC:()=>m});var s=t(141078),n=t(831358);if(13057==t.j)var r=t(726583);var i=t(543963);let o=(0,s.J1)`
  fragment RunsListTableColumns_RunNode on Run {
    status
    active
    message
    runId
    idInJob
    startTime
    durationMillis
    queueDuration @include(if: $includeQueueDuration)
    queueReason @include(if: $includeQueueReason)
    trigger
    triggerInfo {
      runJobTask {
        runId
        jobId
        taskKey
        parentRunId
      }
      table {
        details {
          tableName
          version
          commitTimestamp
        }
      }
    }
    clusterId
    sparkContextId
    clusterInfo {
      attributes {
        sparkVersion
        enableServerlessCompute
        kind
      }
    }
    overridingParameters {
      jarParams
      notebookParams {
        key
        value
      }
      pythonParams
      sparkSubmitParams
      pythonNamedParams {
        key
        value
      }
      sqlParams {
        key
        value
      }
      dbtCommands
      pipelineParams {
        fullRefresh
      }
    }
    jobParameters @include(if: $includeJobParameters) {
      name
      default
      value
    }
  }
`,l=(0,s.J1)`
  fragment LakeflowRunJobRunFragment on LakeflowLakeflowRunJobRun {
    jobParameters {
      name
      default
      value
    }
    overridingParameters {
      jarParams
      notebookParams {
        key
        value
      }
      pythonParams
      sparkSubmitParams
      pythonNamedParams {
        key
        value
      }
      sqlParams {
        key
        value
      }
      dbtCommands
      pipelineParams {
        fullRefresh
      }
    }
    durationWarningExceeded
    durationInfo {
      startTime
      endTime
      executionDuration
      setupDuration
      cleanupDuration
      runDuration
      queueDuration @include(if: $includeQueueDuration)
      waitDuration
      estimatedWaitingEndTime
        @includeSafex(name: "databricks.elasticspark.performance.enableWaitingState", defaultValue: false)
    }
    triggerType
    triggerInfo {
      runJobTask {
        runId
        jobId
        taskKey
        parentRunId
      }
      table {
        details {
          tableName
          version
          commitTimestamp
        }
      }
      sqlCondition @includeSafex(name: "sql_cond_triggers", defaultValue: false) {
        conditionEvaluationSatisfied
        conditionEvaluationSqlSessionId
      }
    }
  }
  ${i.WB}
`,u=(0,s.J1)`
  fragment LakeflowRunPipelineUpdateFragment on LakeflowLakeflowRunPipelineUpdate {
    cause
    details {
      pipelineTask {
        runId
        jobId
        taskKey
        parentRunId
      }
    }
    parameters @includeSafex(name: "pipeline_parameters", defaultValue: false) {
      key
      value
    }
  }
`,d=(0,s.J1)`
  fragment RunsListTableColumns_JobsRunNode on JobsRun {
    jobId
    runId
    numberInJob
    runType
    creatorUserName
    creatorUser {
      ...RichUserData
    }
    creatorPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
      ...AclPrincipalData
    }
    runName
    originalAttemptRunId
    durationInfo {
      startTime
      endTime
      executionDuration
      setupDuration
      cleanupDuration
      runDuration
      queueDuration @include(if: $includeQueueDuration)
      waitDuration
      estimatedWaitingEndTime
        @includeSafex(name: "databricks.elasticspark.performance.enableWaitingState", defaultValue: false)
    }
    state {
      resultState
      lifeCycleState
      userCancelledOrTimedout
      stateMessage
      durationWarningExceeded
      queueReason @include(if: $includeQueueReason)
    }
    status @include(if: $includeRunStatus) {
      ...RunStatusFragment
    }
    trigger
    triggerInfo {
      runJobTask {
        runId
        jobId
        taskKey
        parentRunId
      }
      table {
        details {
          tableName
          version
          commitTimestamp
        }
      }
      sqlCondition @includeSafex(name: "sql_cond_triggers", defaultValue: false) {
        conditionEvaluationSatisfied
        conditionEvaluationSqlSessionId
      }
    }
    overridingParameters {
      jarParams
      notebookParams {
        key
        value
      }
      pythonParams
      sparkSubmitParams
      pythonNamedParams {
        key
        value
      }
      sqlParams {
        key
        value
      }
      dbtCommands
      pipelineParams {
        fullRefresh
      }
    }
    clusterInstance {
      clusterId
      sparkContextId
      clusterInfo {
        attributes {
          sparkVersion
          enableServerlessCompute
          kind
        }
      }
    }
    tasks @include(if: $expandTasks) {
      runId
    }
    jobParameters @include(if: $includeJobParameters) {
      name
      default
      value
    }
  }
  ${i.WB}
  ${n.j}
  ${n.E}
`;(0,s.J1)`
  fragment RunsListTable_RunNode on Run {
    ...RunsListTableColumns_RunNode
  }
  ${o}
`;let c=(0,s.J1)`
  fragment RunsListTable_JobsRunNode on JobsRun {
    ...RunsListTableColumns_JobsRunNode
  }
  ${d}
`,m=(0,s.J1)`
  query ListCombinedRunsTableQuery(
    $jobId: ID!
    $first: Int!
    $after: String
    $startTimeFrom: Long
    $startTimeTo: Long
    $expandTriggerInfo: Boolean
    $expandTasks: Boolean = false
    $includeQueueDuration: Boolean = false
    $includeQueueReason: Boolean = false
    $includeJobParameters: Boolean = false
    $includeRunStatus: Boolean = false
  ) @component(name: "Workflows.Observability.Lists") {
    activeRuns: jobsListRunsPaginated(
      jobId: $jobId
      first: $first
      after: $after
      activeOnly: true
      expandTriggerInfo: $expandTriggerInfo
      expandTasks: $expandTasks
      startTimeFrom: $startTimeFrom
      startTimeTo: $startTimeTo
    ) {
      jobsRuns {
        edges {
          node {
            ...RunsListTable_JobsRunNode
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
    completedRuns: jobsListRunsPaginated(
      jobId: $jobId
      first: $first
      after: $after
      completedOnly: true
      expandTriggerInfo: $expandTriggerInfo
      expandTasks: $expandTasks
      startTimeFrom: $startTimeFrom
      startTimeTo: $startTimeTo
    ) {
      jobsRuns {
        edges {
          node {
            ...RunsListTable_JobsRunNode
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  }
  ${c}
`;function f({jobId:e,first:a,after:t,startTimeFrom:s,startTimeTo:n,expandTasks:i}){return{query:m,variables:{jobId:e,first:a,after:t,expandTriggerInfo:!0,expandTasks:i,startTimeFrom:s,startTimeTo:n,includeJobParameters:(0,r.ue)(),includeRunStatus:!0,includeQueueDuration:!0,includeQueueReason:!0}}}(0,s.J1)`
  query ListLakeflowRunsQuery($pageSize: Int!) @component(name: "Workflows.Observability.Lists") {
    lakeflowListLakeflowRuns(input: { pageSize: $pageSize }) {
      lakeflowRuns {
        __typename
        id
        runAsUserId
        runAsUser {
          id
        }
        runAsPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
          id
        }
      }
      apiError {
        code
        message
      }
    }
  }
`;let g=(0,s.J1)`
  query RecentRunsQueryV2Autogen(
    $limit: Int
    $pageToken: String
    $sortBy: LakeflowListLakeflowRunsRequestSortBy
    $sortOrder: LakeflowListLakeflowRunsRequestSortOrder
    $filtersAssetIds: [String!]
    $filtersRunAsNames: [String!]
    $filtersRunId: String
    $filtersRunStatus: LakeflowListLakeflowRunsRequestFiltersRunStatusFilter
    $filtersRunTypes: [LakeflowListLakeflowRunsRequestFiltersRunTypeFilter!]
    $filtersUserVisibleTerminationLabel: String
    $filtersFrom: WellKnownTimestamp
    $filtersTo: WellKnownTimestamp
    $includeQueueDuration: Boolean = false
    $includeQueueReason: Boolean = false
  ) @component(name: "Workflows.Observability.Lists") {
    lakeflowListLakeflowRuns(
      input: {
        pageSize: $limit
        pageToken: $pageToken
        sortBy: $sortBy
        sortOrder: $sortOrder
        filters: {
          assetIds: $filtersAssetIds
          runAsNames: $filtersRunAsNames
          runId: $filtersRunId
          runStatus: $filtersRunStatus
          runTypes: $filtersRunTypes
          userVisibleTerminationLabel: $filtersUserVisibleTerminationLabel
          orderingTimeFromTime: $filtersFrom
          orderingTimeUntilTime: $filtersTo
        }
        includeFields: { includeTriggerInfo: true, includePermissionLevel: true }
      }
    ) {
      apiError {
        code
        message
      }
      nextPageToken
      prevPageToken
      lakeflowRuns {
        id
        name
        assetName
        runAsUserId
        assetType
        assetPermissionLevel
        assetId
        startTime
        endTime
        assetPermissionLevel
        status {
          ...RunStatusFragment
        }
        runAsUser {
          ...RichUserData
        }
        runAsPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
          ...AclPrincipalData
        }
        jobRun {
          ...LakeflowRunJobRunFragment
        }
        pipelineUpdate {
          ...LakeflowRunPipelineUpdateFragment
        }
      }
    }
  }
  ${l}
  ${u}
  ${i.WB}
  ${n.j}
  ${n.E}
`},924876:(e,a,t)=>{t.d(a,{$k:()=>el,A_:()=>P,DW:()=>$,Ew:()=>en,F2:()=>eg,FS:()=>E,HW:()=>e_,JG:()=>ee,L4:()=>S,NY:()=>K,Nd:()=>B,Nl:()=>X,Nm:()=>eC,O9:()=>L,Om:()=>W,PE:()=>ea,PJ:()=>Y,Pj:()=>ek,QN:()=>R,Ry:()=>_,Sd:()=>es,T8:()=>G,T9:()=>w,Ub:()=>eA,Uy:()=>Q,VN:()=>U,VT:()=>x,Vr:()=>Z,WK:()=>M,WV:()=>z,X4:()=>J,Xh:()=>et,Xs:()=>ev,Yb:()=>D,Yd:()=>eN,ZV:()=>C,_J:()=>eE,_n:()=>ed,aH:()=>ef,b6:()=>em,c6:()=>T,c8:()=>ew,cG:()=>y,dN:()=>eI,e:()=>N,eW:()=>ep,e_:()=>A,f2:()=>eD,gK:()=>ei,iM:()=>j,kN:()=>g,kd:()=>ey,kl:()=>eT,m2:()=>eh,mU:()=>v,mf:()=>F,mk:()=>eb,my:()=>eo,sN:()=>p,sr:()=>eP,su:()=>b,tj:()=>k,uR:()=>H,uy:()=>I,vr:()=>eM,wQ:()=>ec,wu:()=>eu,x6:()=>eR,xJ:()=>er,xb:()=>q,xr:()=>V,yD:()=>h,yd:()=>O,zu:()=>eS});var s=t(441535),n=t(726583);if(13057==t.j)var r=t(886100);if(13057==t.j)var i=t(22191);var o=t(8698),l=t(411424),u=t(707076),d=t(521200),c=t(993533);if(13057==t.j)var m=t(371303);var f=t(889885);function g(){return!!((0,m.sT)("databricks.fe.enableJobsObservabilityUI",!1)||(0,f.FI)("enableJawsObservabilityUI"))}function p(){if((0,s.W)("databricks.elasticspark.enableServerlessScalaTasks",!1))return!0;return(0,s.W)("serverless_jar_jobs",!1)}function b(){return(0,s.W)("databricks.fe.jaws.enableServerlessComputeForScalaTasksByDefault",!0)}function h(e){let a=(0,s.W)("databricks.fe.jaws.repair.unrepairableTaskTypes","[]"),t=(()=>{try{return JSON.parse(a)}catch{return}})(),n=Array.isArray(t);return n||r.iT.sev2(i.Es.WorkflowsOrchestration,"Failed to parse JSON array flag: databricks.fe.jaws.repair.unrepairableTaskTypes",JSON.stringify(a)),(n?t:[]).includes(e)}let k=()=>(0,s.W)("databricks.fe.jaws.continuousJob.triggerStatePollingIntervalMs",5e3),T=()=>(0,s.W)("databricks.elasticspark.maxCharsInJobDescription",1024),y=()=>!!(0,s.W)("databricks.elasticspark.sendingAlertsEnabled",!1)&&!!(0,s.W)("databricks.elasticspark.healthSettingsColumnEnabled",!1),I=()=>(0,s.W)("databricks.elasticspark.dependencyInfo.ui.enabled",!1),S=()=>(0,s.W)("databricks.webapp-elasticspark.enableNotebookOnWarehousesJobIntegration",!1)||(0,s.W)("databricks.webapp.enableSqlWarehouseInNotebookOnGCP",!1),A=()=>(0,n.ue)(),R=()=>(0,n.iQ)()&&(0,u.MH)(),E=()=>(0,s.W)("databricks.fe.jaws.enableTagsFilterOnJobsList",!1)&&(0,n.iQ)(),v=()=>(0,s.W)("databricks.fe.jobs.referencingValues.monaco.byot.enabled",!1),D=()=>(0,s.W)("jobs_bulk_runs",null)??(0,s.W)("databricks.fe.jobs.backfills.enabled",!1),P=()=>(0,s.W)("databricks.fe.jobs.backfills.customGranularity.enabled",!1),M=()=>P()&&(0,s.W)("databricks.fe.jobs.backfills.autoRangeFromFailures.enabled",!1),N=()=>(0,s.W)("databricks.fe.jaws.enableListViewForJobRunDetails",!1),w=()=>(0,s.W)("databricks.fe.jaws.enableListViewForEditingJob",!1),C=()=>(0,s.W)("databricks.fe.jobs.useApi22ForListJobs",!1)&&(0,s.W)("databricks.elasticspark.jobs-api.api22enabled",!1),_=()=>(0,s.W)("databricks.budgetPolicies.isBudgetPoliciesEnableOnRegion",!1)&&((0,s.W)("budget_policy",null)??(0,s.W)("databricks.budgetPolicies.enableBudgetPoliciesFeatureByPercentage",!1))&&(0,s.W)("databricks.elasticspark.budgetpolicies.enableBudgetPoliciesInJobs",!1)||L(),L=()=>(0,s.W)("usage_policy_entitle",null)??(0,s.W)("databricks.usagePolicies.enableEntitlement",!1),O=()=>(0,s.W)("usage_rate_limit",null)??(0,s.W)("databricks.budgetPolicies.enableBudgetPolicyRateLimit",!1),J=()=>(0,s.W)("databricks.fe.jobs.preselectEnabledTasksFromRun",!1),$=()=>(0,n.ue)(),x=()=>(0,s.W)("databricks.fe.jaws.ignoreSavedCreationDateSortByOnJobsList",!0),W=()=>(0,s.W)("databricks.fe.jaws.enableBetterTasksListFiltering",!1),F=()=>(0,n.ZW)()&&(0,s.W)("databricks.fe.jaws.refetchAssetsListOnMutation",!1),U=()=>(0,s.W)("databricks.fe.jaws.enableBurnRateAlertForLakeFlowList",!1),q=()=>(0,s.W)("databricks.fe.jaws.enableApi22ForUseJobData",!1),B=()=>(0,n.ZW)()&&(0,s.W)("databricks.fe.jaws.enablePipelineTypeInUnifiedList",!1),j=()=>B(),Y=()=>B(),V=()=>(0,n.ZW)()&&(0,s.W)("databricks.fe.jaws.enableSystemManagedJobsInUnifiedList",!1)&&(0,s.W)("databricks.elasticspark.lakeflow.returnSystemManagedResources",!1),G=()=>V()&&(0,s.W)("databricks.fe.jaws.enablePipelinesInSystemManagedTab",!1),Q=()=>(0,s.W)("lakeflow_runs_list",!1)&&(0,s.W)("databricks.elasticspark.lakeflow.enableListLakeflowRunsApi",!1),z=()=>(0,s.W)("databricks.fe.jaws.showNameFilterForPipelinesInRunsList",!0),H=()=>(0,s.W)("databricks.fe.jaws.enableTaskPaletteRecentsList",!0),K=()=>!!((0,s.W)("databricks.elasticspark.enableConfigurableTaskRetryInContinuousJobFlag",!1)&&(0,s.W)("databricks.fe.jaws.enableContinuousTriggerAdvanced",!1)),X=()=>(0,s.W)("databricks.fe.budget_policy.renameServerlessPolicy",!1),Z=()=>(0,s.W)("databricks.fe.budget_policy.enableUsagePolicyRunSidePanel",!1);function ee(){return(0,s.W)("databricks.fe.jaws.environments.enableJavaDependenciesFieldMigration",!1)}let ea=()=>(0,s.W)("databricks.fe.jaws.showDockerImageInRunDetails",!0),et=()=>(0,s.W)("system_managed_job",!1)??!1;function es(e){return et()&&(0,s.W)("databricks.fe.jaws.enableManagedByField",!1)&&e.managedBy===c.Kmw.SCHEDULED_MV_REFRESH}let en=()=>(0,s.W)("databricks.fe.data.tableRefreshScheduleNewUI",!1),er=()=>(0,s.W)("databricks.fe.jaws.runsLists.useAssetPermissionLevel",!1)&&Q(),ei=()=>(0,s.W)("databricks.fe.jaws.environments.enableJarDependenciesSharedComponent",!1),eo=()=>(0,s.W)("databricks.fe.jaws.rateLimits.maxQueries",50),el=()=>(0,s.W)("databricks.fe.jaws.enableNewTimezoneExperience",!1),eu=()=>(0,s.W)("databricks.fe.jaws.enableJobClusterPolicyComplianceUI",!1),ed=()=>(0,s.W)("databricks.fe.jaws.enableRunTimings",!1),ec=()=>(0,s.W)("sql_cond_triggers",!1),em=()=>(0,s.W)("databricks.fe.jaws.enableSafeParamRefParsing",!1),ef=()=>(0,s.W)("databricks.elasticspark.environments.allowJarTaskWithBaseEnvironment",!1),eg=()=>(0,s.W)("databricks.fe.jaws.enableAiRuntimeRunsInJobsList",!1),ep=()=>Q()&&(0,d.xh)()&&(0,s.W)("databricks.fe.jaws.enableViewAllRunsInLakeflowList",!1),eb=()=>(0,s.W)("databricks.fe.jaws.enableQueryHistoryLinkInSparkColumn",!1),eh=()=>(0,s.W)("databricks.fe.jaws.enablePipelineTaskPerformanceTarget",!1),ek=()=>(0,s.W)("databricks.fe.jaws.pipelineStopAwaitConfirmedStatus",!1)&&eD(),eT=()=>(0,s.W)("databricks.fe.jaws.enableAutopilotTab",!1),ey=()=>(0,s.W)("databricks.fe.jaws.enableAlwaysShowResolvedParams",!1),eI=()=>(0,s.W)("databricks.fe.jaws.enableWorkspaceObjectPathInfo",!1),eS=()=>(0,s.W)("databricks.fe.jaws.cloneJob.provideParentPath",!1),eA=()=>!!(0,s.W)("serverless_workload_observability",!1),eR=()=>eA()&&!!(0,o.ml)(l.p.EnableServerlessObservabilityToggle),eE=()=>((0,o.Fg)(l.p.EnableServerlessObservabilityToggle),eR()),ev=()=>(0,s.W)("databricks.fe.jaws.enableTopLevelTabsOnJobsPage",!1),eD=()=>(0,s.W)("databricks.fe.jaws.enablePipelineStopSpinOnConfirm",!1),eP=()=>(0,s.W)("databricks.fe.jaws.fixDisabledFilterLayoutShift",!1),eM=()=>Q()&&eP()&&(0,s.W)("databricks.fe.jaws.enableRunIdFilterInRunsList",!1),eN=()=>(0,s.W)("databricks.fe.jaws.diagnoseErrorForAllTaskTypes",!1),ew=()=>(0,s.W)("databricks.fe.jaws.jobHealth.dqmEnablement",!1),eC=()=>(0,n.ZW)()&&(0,s.W)("databricks.lakeflow.enableJobHealthPrivatePreview",!1)&&(0,s.W)("databricks.fe.lakeflow.enableJobHealthInsights",!1),e_=()=>(0,s.W)("databricks.fe.jaws.enableSkipQueryUntilFiltersReady",!1)},934858:(e,a,t)=>{t.d(a,{$W:()=>m,Ow:()=>f,XP:()=>c,Xd:()=>p,Xh:()=>d,_d:()=>g,ep:()=>b});var s=t(610435);t(139259);var n=t(915862),r=t.n(n);t(692738);var i=t(26971),o=t(777517),l=t(465082),u=t(229386);function d(e){return e.reduce((e,a)=>{let t=(0,u.gX)(a)?{name:a.groupName,kind:"group"}:(0,u.A6)(a)?{name:a.servicePrincipalName,kind:"serviceprincipal",displayName:a.displayName}:{name:a.userName,kind:"user",displayName:a.displayName};return[...e,...a.allPermissions.map(e=>({subject:t,permission:e}))]},[])}function c(e,a){let t=[];return e.forEach(e=>{let s=(0,u.gX)(e)?{name:e.groupName,kind:"group"}:(0,u.A6)(e)?{name:e.servicePrincipalName,kind:"serviceprincipal",displayName:e.displayName}:{name:e.userName,kind:"user",displayName:e.displayName},n=[],r=[],i=new Map;if(a.forEach((e,a)=>{i.set(e.permissionLevel,a)}),e.allPermissions.forEach(e=>{e.inherited?r.push(e):n.push(e)}),n.length>0&&0===r.length)t.push({subject:s,permission:n[0]});else{let o=0,l=0,u=r.length>0&&0===n.length;e.allPermissions.forEach((e,a)=>{let t=i.get(e.permissionLevel);t>o&&(o=t,l=a)}),t.push({subject:s,permission:{permissionLevel:e.allPermissions[l].permissionLevel,inherited:u,inheritedFromObjects:[]},permissionLevels:a.slice(o)})}}),t}function m(e){let{permission:{permissionLevel:a},subject:{kind:t,name:s}}=e;switch(t){case"group":return{groupName:s,permissionLevel:a};case"user":return{userName:s,permissionLevel:a};case"serviceprincipal":return{servicePrincipalName:s,permissionLevel:a};default:throw Error(`Unknown subject kind ${t}`)}}function f(e,a){switch(e){case"CAN_ATTACH_TO":return a.formatMessage({id:"vjuZq/",defaultMessage:"Can Attach To"});case"CAN_CREATE_APP":return a.formatMessage({id:"TDBxFQ",defaultMessage:"Can Create App"});case"CAN_EDIT":return a.formatMessage({id:"Lg7PRA",defaultMessage:"Can Edit"});case"CAN_MANAGE":return a.formatMessage({id:"fFJrOa",defaultMessage:"Can Manage"});case"CAN_QUERY":return a.formatMessage({id:"fvsFnS",defaultMessage:"Can Query"});case"CAN_READ":return a.formatMessage({id:"zofAD/",defaultMessage:"Can Read"});case"CAN_RESTART":return a.formatMessage({id:"46XEms",defaultMessage:"Can Restart"});case"CAN_USE":return a.formatMessage({id:"2CuuGP",defaultMessage:"Can Use"});case"CAN_RUN":return a.formatMessage({id:"3gBDEy",defaultMessage:"Can Run"});case"IS_OWNER":return a.formatMessage({id:"DFsGfJ",defaultMessage:"Is Owner"});case"UNSPECIFIED":return"Unspecified";default:return r()(e.toLowerCase())}}function g(e){if("group"===e)return(0,s.Y)(i.A,{name:e});if("serviceprincipal"===e)return(0,s.Y)(o.A,{name:e});return(0,s.Y)(l.A,{name:e})}function p(e,a,t,s){if("group"===e){let e=a||t,n={accountUsers:s.formatMessage({id:"0pBn8k",defaultMessage:"All account users"}),allUsers:s.formatMessage({id:"VzinD6",defaultMessage:"All workspace users"})};if("users"===e||"all workspace users"===e)return[n.allUsers,""];if("account users"===e||"all account users"===e)return[n.accountUsers,""];return[e,""]}if(a&&t!==a)return[a,t??""];return[t??"",""]}function b(e,a){return e.name===a.name&&e.kind===a.kind}},936289:(e,a,t)=>{t.d(a,{LE:()=>o,uE:()=>u,vB:()=>l});var s=t(299089),n=t.n(s),r=t(974657),i=t.n(r);let o=e=>i()(e,e=>e.landingTimestamp);function l(e){if(e.some(e=>"number"!=typeof e.userId||!Number.isFinite(e.userId)))return e;let a=i()(e,[e=>!e.commandGuid,e=>!e.hasFocus,e=>-e.timestamp]),t=new Map;for(let e of a)t.has(e.userId)||t.set(e.userId,e);return Array.from(t.values())}function u({model:e,attributes:a,store:t,setState:s}){let r=a.map(e=>`change:${String(e)}`).join(" "),i=e=>{let r=s(n()(e.attributes,a));t.setState(r)};return e.on(r,i),()=>{e.off(r,i)}}},984568:(e,a,t)=>{t.d(a,{Ck:()=>q,Go:()=>es,I2:()=>eo,IB:()=>A,KW:()=>en,Ks:()=>H,Mc:()=>ea,Oj:()=>V,Pt:()=>K,S3:()=>et,UL:()=>m,VM:()=>k,Vw:()=>Y,WQ:()=>f,XP:()=>ee,YC:()=>X,YR:()=>el,Yf:()=>ei,_M:()=>p,ax:()=>F,f5:()=>I,gv:()=>x,iD:()=>N,lu:()=>R,pM:()=>Z,q3:()=>j,tc:()=>P,uQ:()=>B,uv:()=>T,zQ:()=>z});var s=t(141078),n=t(202855),r=t(831358),i=t(287393),o=t(659789),l=t(367295),u=t(239362),d=t(543963),c=t(691515);let m=(0,s.J1)`
  fragment ClusterAttributes on ClusterAttributes {
    name
    kind
    nodeTypeId
    driverNodeTypeId
    sparkVersion
    workloadType {
      clients {
        jobs
        notebooks
      }
    }
    sparkConf {
      key
      value
    }
    sparkEnvVars {
      key
      value
    }
    awsAttributes {
      firstOnDemand
      availability
      zoneId
      instanceProfileArn
      spotBidPricePercent
      ebsVolumesSpec {
        ebsVolumeType
        ebsVolumeSize
        ebsVolumeCount
        ebsVolumeIops
        ebsVolumeThroughput
      }
    }
    azureAttributes {
      logAnalyticsInfo {
        logAnalyticsWorkspaceId
        logAnalyticsPrimaryKey
      }
      firstOnDemand
      availability
      spotBidMaxPrice
    }
    gcpAttributes {
      usePreemptibleExecutors
      localSsdCount
      googleServiceAccount
      availability
      zoneId
      confidentialComputeType
        @includeSafex(name: "databricks.fe.clustercontrols.enableGcpConfidentialCompute", defaultValue: false)
    }
    sshPublicKeys
    customTags {
      key
      value
    }
    clusterLogConf {
      dbfs {
        destination
      }
      s3 {
        destination
        region
        endpoint
        enableEncryption
        encryptionType
        kmsKey
        cannedAcl
      }
      volumes {
        destination
      }
    }
    autoterminationMinutes
    noDriverDaemon
    enableElasticDisk
    diskSpec {
      diskType {
        ebsVolumeType
        azureDiskVolumeType
      }
      diskCount
      diskSize
    }
    source
    initScripts {
      dbfs {
        destination
      }
      s3 {
        destination
        region
        endpoint
        enableEncryption
        encryptionType
        kmsKey
        cannedAcl
      }
      gcs {
        destination
      }
      file {
        destination
      }
      abfss {
        destination
      }
      workspace {
        destination
      }
      volumes {
        destination
      }
    }
    isServerless
    hasTableAcls
    dockerImage {
      url
      basicAuth {
        username
        password
      }
    }
    instancePoolId
    driverInstancePoolId
    instanceSource {
      nodeTypeId
      instancePoolId
    }
    driverInstanceSource {
      nodeTypeId
      instancePoolId
    }
    blueprint {
      id
      name
      policies
      groupId
    }
    singleUser {
      name
    }
    legacyPolicy {
      id
      name
      definition
    }
    enableLocalDiskEncryption
    dataSecurityMode
    accessMode
    runtimeEngine
    enableServerlessCompute
    virtualClusterSize
    useMlRuntime
    isSingleNode
    assignedPrincipal
    budgetPolicyId
    budgetPolicyResolutionResult
    budgetPolicyTags {
      key
      value
    }
    releaseVersion @includeSafex(name: "databricks.fe.clustercontrols.showReleaseVersion", defaultValue: false)
    workerNodeTypeFlexibility {
      alternateNodeTypeIds
      awsContextId
    }
    driverNodeTypeFlexibility {
      alternateNodeTypeIds
      awsContextId
    }
  }
`,f=(0,s.J1)`
  fragment JobPeriodicTrigger on TriggerSettings {
    periodic @include(if: $includePeriodicTrigger) {
      interval
      unit
    }
  }
`,g=(0,s.J1)`
  fragment ClusterClusterAttributes on ClusterClusterAttributes {
    clusterName
    kind
    nodeTypeId
    driverNodeTypeId
    sparkVersion
    workloadType {
      clients {
        jobs
        notebooks
      }
    }
    sparkConf {
      key
      value
    }
    sparkEnvVars {
      key
      value
    }
    awsAttributes {
      firstOnDemand
      availability
      zoneId
      instanceProfileArn
      spotBidPricePercent
      ebsVolumesSpec {
        ebsVolumeType
        ebsVolumeSize
        ebsVolumeCount
        ebsVolumeIops
        ebsVolumeThroughput
      }
    }
    azureAttributes {
      logAnalyticsInfo {
        logAnalyticsWorkspaceId
        logAnalyticsPrimaryKey
      }
      firstOnDemand
      availability
      spotBidMaxPrice
    }
    gcpAttributes {
      usePreemptibleExecutors
      localSsdCount
      googleServiceAccount
      availability
      zoneId
      confidentialComputeType
        @includeSafex(name: "databricks.fe.clustercontrols.enableGcpConfidentialCompute", defaultValue: false)
    }
    sshPublicKeys
    customTags {
      key
      value
    }
    clusterLogConf {
      dbfs {
        destination
      }
      s3 {
        destination
        region
        endpoint
        enableEncryption
        encryptionType
        kmsKey
        cannedAcl
      }
      volumes {
        destination
      }
    }
    autoterminationMinutes
    noDriverDaemon
    enableElasticDisk
    diskSpec {
      diskType {
        ebsVolumeType
        azureDiskVolumeType
      }
      diskCount
      diskSize
    }
    clusterSource
    initScripts {
      dbfs {
        destination
      }
      s3 {
        destination
        region
        endpoint
        enableEncryption
        encryptionType
        kmsKey
        cannedAcl
      }
      gcs {
        destination
      }
      file {
        destination
      }
      abfss {
        destination
      }
      workspace {
        destination
      }
      volumes {
        destination
      }
    }
    dockerImage {
      url
      basicAuth {
        username
        password
      }
    }
    instancePoolId
    driverInstancePoolId
    instanceSource {
      nodeTypeId
      instancePoolId
    }
    driverInstanceSource {
      nodeTypeId
      instancePoolId
    }
    blueprintId
    singleUserName
    enableLocalDiskEncryption
    dataSecurityMode
    accessMode
    runtimeEngine
    enableServerlessCompute
    virtualClusterSize
    useMlRuntime
    isSingleNode
    assignedPrincipal

    workerNodeTypeFlexibility {
      alternateNodeTypeIds
      awsContextId
    }
    driverNodeTypeFlexibility {
      alternateNodeTypeIds
      awsContextId
    }
  }
`,p=(0,s.J1)`
  fragment ClusterSize on ClusterSize {
    autoscale {
      minWorkers
      maxWorkers
    }
    numWorkers
  }
`,b=(0,s.J1)`
  fragment ClusterClusterSize on ClusterClusterSize {
    autoscale {
      minWorkers
      maxWorkers
    }
    numWorkers
  }
`,h=(0,s.J1)`
  fragment NewClusterDetails on NewCluster {
    attrs {
      ...ClusterAttributes
    }
    size {
      ...ClusterSize
    }
  }
  ${m}
  ${p}
`,k=(0,s.J1)`
  fragment ClusterDetails on ClusterSpec {
    ... on NewCluster {
      ...NewClusterDetails
    }
    ... on ExistingCluster {
      id
      clusterInfo {
        attributes {
          name
          kind
          nodeTypeId
          driverNodeTypeId
          sparkVersion
          enableServerlessCompute
        }
        size {
          ...ClusterSize
        }
        state
        stateMessage
      }
    }
    ... on JobClusterKey {
      key
    }
  }
  ${h}
`,T=(0,s.J1)`
  fragment LightweightNewClusterDetails on NewCluster {
    attrs {
      instancePoolId
      driverInstancePoolId
      nodeTypeId
      driverNodeTypeId
      sparkVersion
      runtimeEngine
      enableServerlessCompute
      virtualClusterSize
      kind
      useMlRuntime
    }
    size {
      autoscale {
        minWorkers
        maxWorkers
      }
      numWorkers
    }
  }
`,y=(0,s.J1)`
  fragment ManagedLibrariesLibrary on ManagedLibrariesLibrary {
    jar
    egg
    pypi {
      package
      repo
    }
    maven {
      coordinates
      repo
      exclusions
    }
    cran {
      package
      repo
    }
    requirements
    whl
  }
`,I=(0,s.J1)`
  fragment JobsNewClusterDetails on JobsClusterSpecNewCluster {
    attrs {
      ...ClusterClusterAttributes
    }
    size {
      ...ClusterClusterSize
    }
  }
  ${g}
  ${b}
`,S=(0,s.J1)`
  fragment JobsClusterDetails on JobsClusterSpec {
    existingClusterId
    clusterInfo {
      attributes {
        name
        nodeTypeId
      }
      state
    }
    libraries {
      ...ManagedLibrariesLibrary
    }
    newCluster {
      ...JobsNewClusterDetails
    }
    jobClusterKey
  }
  ${y}
  ${I}
`,A=(0,s.J1)`
  fragment TaskAction on JobTask {
    ... on JobsJobTask {
      ...JobsAllTasksFragment
    }
    ... on NotebookTask {
      notebookPath
      source
      baseParameters {
        key
        value
      }
      warehouseId
    }
    ... on SparkJarTask {
      jarUri
      mainClassName
      parameters
      runAsRepl
    }
    ... on SparkPythonTask {
      pythonFile
      parameters
      source
    }
    ... on SparkSubmitTask {
      parameters
    }
    ... on ShellCommandTask {
      command
      envVars {
        key
        value
      }
    }
    ... on PipelineTask {
      pipelineId
      dltParameters: parameters {
        fullRefresh
      }
      pipelineTaskParameters @includeSafex(name: "pipeline_parameters", defaultValue: false) {
        key
        value
      }
    }
    ... on RunJobTask {
      jobId
      batchLoadJob @include(if: $includeJobInRunJobTask) {
        settings {
          name
        }
      }
      runJobParameters: parameters {
        ...RunParameters
      }
      jobParameters @include(if: $includeJobParameters) {
        key
        value
      }
    }
    ... on PythonWheelTask {
      entryPoint
      packageName
      parameters
      namedParameters {
        key
        value
      }
    }
    ... on DbtTask {
      projectDirectory
      catalog
      commands
      schema
      warehouseId
      profilesDirectory
      source @include(if: $includeSourceInDbtAndSqlFile)
    }
    ... on SqlTask {
      alert {
        alertId
        pauseSubscriptions @include(if: $includeSubscriptions)
        subscriptions @include(if: $includeSubscriptions) {
          userName
          destinationId
        }
      }
      dashboard {
        dashboardId
        pauseSubscriptions @include(if: $includeSubscriptions)
        subscriptions @include(if: $includeSubscriptions) {
          userName
          destinationId
        }
        customSubject @include(if: $includeSubscriptions)
      }
      query {
        queryId
      }
      file {
        path
        source @include(if: $includeSourceInDbtAndSqlFile)
      }
      params: parameters {
        key
        value
      }
      warehouseId
    }
    ... on ConditionTask {
      op
      left
      right
    }
  }
  ${n.m}
  ${o.M}
`,R=(0,s.J1)`
  fragment TaskDependency on TaskDependency {
    taskKey
    outcome @include(if: $includeTaskDependencyOutcome)
  }
`,E=(0,s.J1)`
  fragment RetryPolicy on JobRetryPolicy {
    maxRetries
    minRetryIntervalMillis
    retryOnTimeout
    disableAutoOptimization
  }
`,v=(0,s.J1)`
  fragment EmailNotifications on JobEmailNotifications {
    onStart
    onFailure
    onSuccess
    onDurationWarningThresholdExceeded
    onStreamingBacklogExceeded @include(if: $includeOnStreamingBacklogExceeded)
    alertOnLastAttempt
    noAlertForSkippedRuns
    noAlertForCanceledRuns
  }
`,D=(0,s.J1)`
  fragment LibraryDetails on Library {
    ... on Jar {
      jar
    }
    ... on Egg {
      egg
    }
    ... on PythonPyPi {
      pypi {
        package
        repo
      }
    }
    ... on Maven {
      maven {
        coordinates
        repo
        exclusions
      }
    }
    ... on RCran {
      cran {
        package
        repo
      }
    }
    ... on Requirements {
      requirements
    }
    ... on Wheel {
      whl
    }
  }
`,P=(0,s.J1)`
  fragment JobClusterDetails on JobCluster {
    jobClusterKey
    newCluster {
      attrs {
        ...ClusterAttributes
      }
      size {
        ...ClusterSize
      }
    }
  }
  ${m}
  ${p}
`,M=(0,s.J1)`
  fragment JobTagDetails on JobTag {
    key
    value
  }
`,N=(0,s.J1)`
  fragment JobsJobClusterDetails on JobsJobCluster {
    jobClusterKey
    newCluster {
      ...JobsNewClusterDetails
    }
  }
  ${I}
`,w=(0,s.J1)`
  fragment GitReference on GitReference {
    ... on GitTag {
      gitTag
    }
    ... on GitCommit {
      gitCommit
    }
    ... on GitBranch {
      gitBranch
    }
  }
`,C=(0,s.J1)`
  fragment GitSourceDetails on GitSource {
    gitUrl
    gitProvider
    gitBranch
    gitTag
    gitCommit
    sparseCheckout @includeSafex(name: "databricks.elasticspark.sparseCheckout.enabled", defaultValue: false) {
      patterns
    }
    gitReference {
      ...GitReference
    }
  }
  ${w}
`,_=(0,s.J1)`
  fragment JobWebhookDetails on JobsWebhookNotifications {
    onSuccess {
      id
    }
    onFailure {
      id
    }
    onStart {
      id
    }
    onDurationWarningThresholdExceeded {
      id
    }
    onStreamingBacklogExceeded @include(if: $includeOnStreamingBacklogExceeded) {
      id
    }
  }
`,L=(0,s.J1)`
  fragment NotificationSettingsDetails on JobsNotificationSettings {
    alertOnLastAttempt
    noAlertForCanceledRuns
    noAlertForSkippedRuns
  }
`,O=(0,s.J1)`
  fragment TaskDetails on TaskSettings {
    taskKey
    description
    dependsOn {
      ...TaskDependency
    }
    runIf
    timeoutSeconds
    durationWarningSeconds
    environmentKey
    compute {
      hardwareAccelerator
    }
    health {
      rules {
        metric
        op
        value
      }
    }
    retryPolicy {
      ...RetryPolicy
    }
    emailNotifications {
      ...EmailNotifications
    }
    notificationSettings {
      ...NotificationSettingsDetails
    }
    webhookNotifications
      @includeSafex(name: "databricks.elasticspark.enableJobWebhooksRollout.goc", defaultValue: false) {
      ...JobWebhookDetails
    }
    clusterSpec {
      ...ClusterDetails
    }
    libraries {
      ...LibraryDetails
    }
    task {
      ...TaskAction
    }
    disabled @includeSafex(name: "databricks.fe.jobs.disabled_tasks.schema.enabled", defaultValue: false)
  }

  ${k}
  ${E}
  ${v}
  ${A}
  ${D}
  ${R}
  ${L}
  ${_}
`,J=(0,s.J1)`
  fragment ForEachManualBridge on JobTask {
    ... on JobsJobTask {
      forEachTask {
        manualGraphQlTaskSettingsBridge {
          ...TaskDetails
        }
      }
    }
  }

  ${O}
`,$=(0,s.J1)`
  fragment JobEnvironment on JobsJobEnvironment {
    environmentKey
    spec {
      client
      environmentVersion
      dependencies
      jarDependencies
      javaDependencies
      baseEnvironment
    }
  }
`,x=(0,s.J1)`
  fragment JobConfiguration on JobSettings {
    name
    ...JobDescription
    parentPath @includeSafex(name: "databricks.fe.jaws.enableWorkspaceObjectPathInfo", defaultValue: false)
    budgetPolicyId
      @includeSafex(name: "databricks.elasticspark.budgetpolicies.enableBudgetPoliciesInJobs", defaultValue: false)
    usagePolicyId
    schedule {
      timezoneId
      quartzCronExpression
      pauseStatus
      sqlCondition @includeSafex(name: "sql_cond_triggers", defaultValue: false) {
        sqlQueryId
        warehouseId
      }
    }
    trigger {
      fileArrival {
        url
        minTimeBetweenTriggersSeconds
        waitAfterLastChangeSeconds
      }
      tableUpdate {
        tableNames
        condition
        minTimeBetweenTriggersSeconds
        waitAfterLastChangeSeconds
      }
      model @includeSafex(name: "databricks.fe.jaws.enableModelTriggerUI", defaultValue: false) {
        securableName
        aliases
        condition
        minTimeBetweenTriggersSeconds
        waitAfterLastChangeSeconds
      }
      sqlCondition @includeSafex(name: "sql_cond_triggers", defaultValue: false) {
        sqlQueryId
        warehouseId
      }
      ...JobPeriodicTrigger
      pauseStatus
    }
    continuous {
      pauseStatus
      taskRetryMode @includeSafex(name: "databricks.fe.jaws.enableContinuousTriggerAdvanced", defaultValue: false)
    }
    queue {
      enabled
      maxQueueTime
    }
    emailNotifications {
      ...EmailNotifications
    }
    notificationSettings {
      ...NotificationSettingsDetails
    }
    maxConcurrentRuns
    timeoutSeconds
    durationWarningSeconds
    health {
      rules {
        metric
        op
        value
      }
    }
    retryPolicy {
      ...RetryPolicy
    }
    clusterSpec {
      ...ClusterDetails
    }
    libraries {
      ...LibraryDetails
    }
    task {
      ...TaskAction
      ...ForEachManualBridge
    }
    tasks {
      ...TaskDetails
      task {
        ...ForEachManualBridge
      }
    }
    jobClusters {
      ...JobClusterDetails
    }
    gitSource {
      ...GitSourceDetails
    }
    tags {
      ...JobTagDetails
    }
    webhookNotifications {
      ...JobWebhookDetails
    }
    parameters @include(if: $includeJobParameters) {
      name
      default
    }
    health {
      rules {
        metric
        op
        value
      }
    }
    editMode
    deployment {
      kind
      metadataFilePath
    }
    environments {
      ...JobEnvironment
    }
    performanceTarget
  }

  ${O}
  ${f}
  ${P}
  ${C}
  ${M}
  ${_}
  ${i.aZ}
  ${J}
  ${$}
`,W=(0,s.J1)`
  fragment RunJobSettings on JobSettings {
    name
    tasks {
      taskKey
      task {
        ...TaskAction
        ... on JobsJobTask {
          forEachTask {
            manualGraphQlTaskSettingsBridge {
              taskKey
              task {
                ...TaskAction
              }
            }
          }
        }
      }
    }
    parameters @include(if: $includeJobParameters) {
      name
      default
    }
  }

  ${A}
`,F=(0,s.J1)`
  fragment JobTriggerState on Job {
    triggerState @include(if: $includeTriggerState) {
      periodic {
        nextRunTime
      }
    }
  }
`,U=(0,s.J1)`
  fragment JobConfigIdentityInfo on Job {
    id
    creatorUser {
      ...RichUserData
    }
    creatorPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
      ...AclPrincipalData
    }
    runAsUser {
      ...RichUserData
    }
    runAsPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
      ...AclPrincipalData
    }
    grants {
      permission
      aclPath
      user {
        ...RichUserData
      }
      aclPrincipal {
        ...AclPrincipalData
      }
    }
  }
  ${r.j}
  ${r.E}
`,q=(0,s.J1)`
  query JobConfig(
    $jobId: ID!
    $useApi21: Boolean
    $includeSubscriptions: Boolean!
    $includeJobInRunJobTask: Boolean = false
    $includeJobParameters: Boolean = false
    $includeTaskDependencyOutcome: Boolean = false
    $includeTriggerState: Boolean = false
    $includePeriodicTrigger: Boolean = false
    $includeOnStreamingBacklogExceeded: Boolean = false
    $includeSourceInDbtAndSqlFile: Boolean = false
  ) @component(name: "Workflows.Orchestration.Other") {
    job(id: $jobId, useApi21: $useApi21, includeAcls: true, includeTriggerState: $includeTriggerState) {
      id
      untouched
      lastUpdatedTime
      managedBy @includeSafex(name: "databricks.fe.jaws.enableManagedByField", defaultValue: false)
      creator {
        id
        name
      }
      settings {
        ...JobConfiguration
      }
      links @includeSafex(name: "databricks.elasticspark.enableLinksUI", defaultValue: false) {
        model {
          catalog
          schema
          name
        }
      }
      effectiveBudgetPolicyId
        @includeSafex(name: "databricks.elasticspark.budgetpolicies.enableBudgetPoliciesInJobs", defaultValue: false)
      effectiveUsagePolicyId
        @includeSafex(name: "databricks.elasticspark.budgetpolicies.enableUsagePoliciesInJobs", defaultValue: false)
      permission
      jobType
      userActivityInfo @includeSafex(name: "databricks.fe.search.enableUserActivity", defaultValue: false) {
        assetType
        assetId
        isFavorite
      }
      ...JobConfigRunAs
      ...JobConfigIdentityInfo
      ...JobTriggerState
    }
  }

  ${x}
  ${i.fg}
  ${F}
  ${U}
`;function B(e){return{query:q,variables:{jobId:e,useApi21:!0,...(0,l.L)()}}}let j=(0,s.J1)`
  query RunJobConfig(
    $jobId: ID!
    $includeSubscriptions: Boolean = false
    $includeJobInRunJobTask: Boolean = false
    $includeJobParameters: Boolean = false
    $includeSourceInDbtAndSqlFile: Boolean = false
  ) @component(name: "Workflows.Orchestration.Other") {
    job(id: $jobId, useApi21: true) {
      id
      settings {
        ...RunJobSettings
      }
    }
  }

  ${W}
`,Y=(0,s.J1)`
  query RunJobAndTriggerConfig(
    $jobId: ID!
    $includeSubscriptions: Boolean = false
    $includeJobInRunJobTask: Boolean = false
    $includeJobParameters: Boolean = false
    $includeSourceInDbtAndSqlFile: Boolean = false
    $includePeriodicTrigger: Boolean = false
  ) @component(name: "Workflows.Orchestration.Other") {
    job(id: $jobId, useApi21: true) {
      id
      settings {
        ...RunJobSettings
        trigger {
          fileArrival {
            url
            minTimeBetweenTriggersSeconds
            waitAfterLastChangeSeconds
          }
          tableUpdate {
            tableNames
            condition
            minTimeBetweenTriggersSeconds
            waitAfterLastChangeSeconds
          }
          model @includeSafex(name: "databricks.fe.jaws.enableModelTriggerUI", defaultValue: false) {
            securableName
            aliases
            condition
            minTimeBetweenTriggersSeconds
            waitAfterLastChangeSeconds
          }
          sqlCondition @includeSafex(name: "sql_cond_triggers", defaultValue: false) {
            sqlQueryId
            warehouseId
          }
          ...JobPeriodicTrigger
          pauseStatus
        }
      }
    }
  }

  ${W}
  ${f}
`,V=(0,s.J1)`
  query JobParameters($jobId: ID!, $includeJobParameters: Boolean = false)
  @component(name: "Workflows.Orchestration.Other") {
    job(id: $jobId, useApi21: true) {
      id
      settings {
        parameters @include(if: $includeJobParameters) {
          name
          default
        }
      }
    }
  }
`,G=(0,s.J1)`
  fragment RunResolvedParameters on JobsResolvedValues {
    conditionTask {
      left
      right
    }
    dbtTask {
      commands
    }
    notebookTask {
      baseParameters {
        key
        value
      }
    }
    pythonWheelTask {
      namedParameters {
        key
        value
      }
      parameters
    }
    runJobTask {
      jobParameters {
        key
        value
      }
    }
    sparkJarTask {
      parameters
    }
    sparkPythonTask {
      parameters
    }
    sparkSubmitTask {
      parameters
    }
    sqlTask {
      parameters {
        key
        value
      }
    }
    forEachTask {
      inputs
    }
    cleanRoomsJarTask {
      parameters
    }
    pipelineTask @includeSafex(name: "pipeline_parameters", defaultValue: false) {
      pipelineTaskParameters {
        key
        value
      }
    }
  }
`,Q=(0,s.J1)`
  fragment ForEachTaskSettings on JobsJobTask {
    forEachTask {
      task {
        clusterSpec {
          ...JobsClusterDetails
        }
        dependsOn {
          taskKey
          outcome @include(if: $includeTaskDependencyOutcome)
        }
        runIf
        description
        taskKey
        timeoutSeconds
        durationWarningSeconds
        environmentKey
        health {
          rules {
            metric
            op
            value
          }
        }
        task {
          ...JobsAllTasksFragment
        }
      }
    }
  }

  ${n.m}
  ${S}
`,z=(0,s.J1)`
  query JobsGetJobIdFromRun($input: JobsGetRunInput!) @component(name: "Workflows.Authoring.UI") {
    jobsGetRun: jobsGetRunWithApiVersion(input: $input, useApi21: true) {
      run {
        jobId
      }
    }
  }
`,H=(0,s.J1)`
  query JobsGetRunBreadcrumb($jobId: ID!) @component(name: "Workflows.Observability.Graphs") {
    job(id: $jobId, useApi21: true) {
      settings {
        name
      }
    }
  }
`,K=(0,s.J1)`
  query JobSettingsMaxConcurrentRuns($jobId: ID!) @component(name: "Workflows.Observability.Graphs") {
    job(id: $jobId, useApi21: true) {
      settings {
        maxConcurrentRuns
      }
    }
  }
`,X=(0,s.J1)`
  query JobsGetRun(
    $input: JobsGetRunInput!
    $includeSubscriptions: Boolean!
    $useApi21: Boolean!
    $includeJobInRunJobTask: Boolean = false
    $includeQueueDuration: Boolean = false
    $includeQueueReason: Boolean = false
    $includeJobParameters: Boolean = false
    $includeResolvedValues: Boolean = false
    $includeTaskDependencyOutcome: Boolean = false
    $includeRunStatus: Boolean = false
    $includeDependencyInfo: Boolean = false
    $includeSourceInDbtAndSqlFile: Boolean = false
  ) @component(name: "Workflows.Authoring.UI") {
    jobsGetRun: jobsGetRunWithApiVersion(input: $input, useApi21: $useApi21) {
      effectivePermissionLevel
        @includeSafex(name: "databricks.fe.jaws.enablePermissionLevelInGetRun", defaultValue: false)
      run {
        ...JobRunDetailsSectionFragment
        ...TaskRunDetailsSectionFragment
        originalAttemptRunId
        runPageUrl
        runType
        description
        format
        parentRunId
        taskKey
        attemptNumber
        dependencyInfo @include(if: $includeDependencyInfo) {
          truncated
          dependencies {
            dependencyType
            language
            name
            version
          }
        }
        task {
          ...JobsAllTasksFragment
          ...ForEachTaskSettings
          ...ForEachTaskStats
        }
        tasks {
          attemptNumber
          runId
          runPageUrl
          state {
            ...RunStateFragment
          }
          status @include(if: $includeRunStatus) {
            ...RunStatusFragment
          }
          durationInfo {
            cleanupDuration
            endTime
            executionDuration
            setupDuration
            startTime
            runDuration
            queueDuration @include(if: $includeQueueDuration)
            waitDuration
            estimatedWaitingEndTime
              @includeSafex(name: "databricks.elasticspark.performance.enableWaitingState", defaultValue: false)
          }
          runTimings @includeSafex(name: "databricks.fe.jaws.enableRunTimings", defaultValue: false) {
            executionTimestamps {
              queuedMs
              waitingForResourcesOrPythonStartingMs
              libraryInstallationMs
              runningMs
            }
            repairsAccumulatedDurations {
              queuedAccumulatedMs
              waitingForResourcesOrPythonStartingAccumulatedMs
              runningAccumulatedMs
            }
          }
          clusterInstance {
            clusterId
            sparkContextId
            clusterInfo {
              attributes {
                sparkVersion
                kind
                enableServerlessCompute
              }
            }
          }
          settings {
            clusterSpec {
              ...JobsClusterDetails
            }
            dependsOn {
              taskKey
              outcome @include(if: $includeTaskDependencyOutcome)
            }
            runIf
            description
            taskKey
            timeoutSeconds
            durationWarningSeconds
            environmentKey
            health {
              rules {
                metric
                op
                value
              }
            }
            task {
              ...JobsAllTasksFragment
              ...ForEachTaskSettings
              ...ForEachTaskStats
            }
          }
          gitSource {
            gitUrl
            gitProvider
            gitBranch
            gitTag
            gitCommit
            gitSnapshot {
              usedCommit
            }
          }
          taskValueCount
          resolvedValues @include(if: $includeResolvedValues) {
            ...RunResolvedParameters
          }
          effectivePerformanceTarget
          effectiveCompute {
            hardwareAccelerator
            memory
          }
        }
        triggerInfo {
          ...JobRunTriggerInfo
        }
        clusterSpec {
          ...JobsClusterDetails
        }
        clusterInstance {
          clusterId
          sparkContextId
        }
        overridingParameters {
          notebookParams {
            key
            value
          }
          jarParams
          pythonParams
          sparkSubmitParams
          pythonNamedParams {
            key
            value
          }
          sqlParams {
            key
            value
          }
          dbtCommands
          pipelineParams {
            fullRefresh
          }
        }
        jobClusters {
          ...JobsJobClusterDetails
        }
        repairHistory {
          id
          state {
            lifeCycleState
            resultState
            stateMessage
            userCancelledOrTimedout
            queueReason @include(if: $includeQueueReason)
          }
          type
          startTime
          endTime
          tasks
          taskRunIds
          effectivePerformanceTarget
        }
        gitSource {
          gitUrl
          gitProvider
          gitBranch
          gitTag
          gitCommit
          gitSnapshot {
            usedCommit
          }
        }
        taskValueCount
        jobParameters @include(if: $includeJobParameters) {
          ...RunJobParameter
        }
        environments {
          ...JobEnvironment
        }
        effectivePerformanceTarget
      }
    }
  }

  ${n.m}
  ${S}
  ${N}
  ${u.Wg}
  ${u.yu}
  ${G}
  ${u.qk}
  ${d.WB}
  ${Q}
  ${c.d}
  ${d.DP}
  ${$}
  ${u.Lw}
`,Z=(0,s.J1)`
  query ListIterationRetries($input: JobsListIterationsInput!, $includeQueueReason: Boolean = false)
  @component(name: "Workflows.Orchestration.Other") {
    jobsListIterations(input: $input) {
      iterations {
        originalAttemptRunId
        tasks {
          runId
          attemptNumber
          runPageUrl
          state {
            ...RunStateFragment
          }
          status {
            ...RunStatusFragment
          }
        }
      }

      apiError {
        message
      }
    }
  }

  ${d.WB}
  ${d.DP}
`,ee=(0,s.J1)`
  query JobsGetPermissionLevel($input: JobsGetPermissionLevelInput!) @component(name: "Workflows.Orchestration.Other") {
    jobsGetPermissionLevel(input: $input) {
      perm
    }
  }
`,ea=(0,s.J1)`
  mutation TestTrigger($input: JobsTestTriggerInput!) @component(name: "Workflows.Triggers.File") {
    jobsTestTrigger(input: $input) {
      apiError {
        message
      }
      fileArrival {
        usingFileEvents
        locationName
      }
      table {
        tableStatus {
          tableName
          usingFileEvents
          locationName
          usingDeltaSharing
        }
      }
      sqlCondition {
        __typename
      }
    }
  }
`,et=(0,s.J1)`
  query SqlAlertGet($alertId: String!) @component(name: "Workflows.Tasks.SQL") {
    sqlAlertGet(alertId: $alertId)
      @rest(type: "SqlAlert", path: "/alerts/{args.alertId}", endpoint: "redashApi", method: "GET") {
      id
      name
      permissionTier
      query {
        dataSourceId
      }
    }
  }
`,es=(0,s.J1)`
  query SqlDashboardGet($dashboardId: String!) @component(name: "Workflows.Tasks.SQL") {
    sqlDashboardGet(dashboardId: $dashboardId)
      @rest(type: "SqlDashboard", path: "/dashboards/{args.dashboardId}", endpoint: "redashApi", method: "GET") {
      id
      name
      dataSourceId
      permissionTier
      widgets {
        id
        options {
          title
          parameterMappings
          position {
            sizeX
            sizeY
            autoHeight
            row
            col
          }
        }
        visualization {
          id
          query {
            id
            dataSourceId
            options {
              parameters {
                name
                title
                value
                type
                multiValuesOptions {
                  separator
                }
                enumOptions
                queryId
              }
            }
          }
        }
      }
    }
  }
`,en=(0,s.J1)`
  query SqlQueryGet($queryId: String!) @component(name: "Workflows.Tasks.SQL") {
    sqlQueryGet(queryId: $queryId)
      @rest(type: "SqlQuery", path: "/queries/{args.queryId}", endpoint: "redashApi", method: "GET") {
      id
      name
      query
      dataSourceId
      options {
        applyAutoLimit
        parameters {
          name
          title
          type
          value
          multiValuesOptions {
            separator
          }
          enumOptions
          queryId
        }
      }
    }
  }
`,er=(0,s.J1)`
  fragment SqlWarehouseDetails on Lakehouse {
    id
    name
    state
    size
    enableServerlessCompute
    warehouseType
  }
`,ei=(0,s.J1)`
  query SqlWarehouseSelectGet($id: ID!) @component(name: "Workflows.Tasks.SQL") {
    lakehouse(id: $id) {
      ...SqlWarehouseDetails
    }
  }
  ${er}
`,eo=(0,s.J1)`
  query SqlQueryAsDropdownOptionsGet($queryId: String!) @component(name: "Workflows.Tasks.SQL") {
    sqlQueryAsDropdownOptionsGet(queryId: $queryId)
      @rest(
        type: "[SqlQueryParameterDropdownOption]"
        path: "/queries/{args.queryId}/dropdown"
        endpoint: "redashApi"
        method: "GET"
      ) {
      value
    }
  }
`,el=(0,s.J1)`
  query ClusterNameGet($id: String!) @component(name: "Workflows.Authoring.UI") {
    cluster(id: $id) {
      id
      attributes {
        name
      }
    }
  }
`}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/81839.0a3fec1c8b.chunk.js.map