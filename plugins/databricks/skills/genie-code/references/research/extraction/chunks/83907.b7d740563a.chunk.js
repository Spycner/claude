"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[26595,83907],{75036:(e,a,t)=>{t.d(a,{e:()=>i,s:()=>r});var n,o=t(696514),r=((n={}).DONE="done",n.CANCELED="canceled",n);let i=(0,o.fH)("Filebrowser::SelectFolderNode")},86594:(e,a,t)=>{t.d(a,{A:()=>l});var n=t(610435),o=t(692738),r=t(375214);function i(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",d:"M0 8.75v-.744c0-.97.786-1.756 1.756-1.756h1.1c.372 0 .712.21.878.543l.595 1.188a4.104 4.104 0 0 0 7.342 0l.595-1.188.069-.12a.98.98 0 0 1 .809-.423H16v1.5h-2.536l-.451.902a5.604 5.604 0 0 1-10.026 0l-.45-.902h-.781a.256.256 0 0 0-.256.256v.744a.5.5 0 0 0 .5.5v1.5a2 2 0 0 1-2-2m10.5 4v1.5h-5v-1.5zM8 1.75a.75.75 0 0 1 .74.621l.226 1.303a.75.75 0 0 0 .61.61l1.303.227a.75.75 0 0 1 0 1.478l-1.303.227a.75.75 0 0 0-.61.61L8.739 8.13a.75.75 0 0 1-1.478 0l-.227-1.303a.75.75 0 0 0-.61-.61L5.12 5.989a.75.75 0 0 1 0-1.478l1.303-.227a.75.75 0 0 0 .61-.61l.227-1.303.035-.13A.75.75 0 0 1 8 1.75"})})}let s=(0,o.forwardRef)((e,a)=>(0,n.Y)(r.I,{ref:a,...e,component:i}));s.displayName="GenieCodeIcon";let l=s},120183:(e,a,t)=>{t.d(a,{V:()=>o});var n=t(986784);function o(){return(0,n.i)()}},154968:(e,a,t)=>{t.d(a,{n:()=>o});var n=t(141078);let o=(0,n.J1)`
  fragment PipelineApiErrorFields on ApiError {
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
`},202855:(e,a,t)=>{t.d(a,{m:()=>o});var n=t(141078);let o=(0,n.J1)`
  fragment JobsAllTasksFragment on JobsJobTask {
    notebookTask {
      notebookPath
      source
      baseParameters {
        key
        value
      }
      warehouseId
    }
    sparkJarTask {
      jarUri
      mainClassName
      parameters
      runAsRepl
    }
    sparkPythonTask {
      pythonFile
      parameters
      source
    }
    sparkSubmitTask {
      parameters
    }
    shellCommandTask {
      command
      envVars {
        key
        value
      }
    }
    pipelineTask {
      pipelineId
      parameters {
        fullRefresh
      }
      pipelineTaskParameters @includeSafex(name: "pipeline_parameters", defaultValue: false) {
        key
        value
      }
    }
    cleanRoomNotebookTask {
      cleanRoomName
      notebookName
      notebookBaseParameters {
        key
        value
      }
    }
    cleanRoomsNotebookTask @includeSafex(name: "databricks.fe.uc.enableCleanRoom", defaultValue: false) {
      cleanRoomName
      notebookName
      etag
      notebookBaseParameters {
        key
        value
      }
    }
    cleanRoomsJarTask
      @includeSafex(name: "databricks.fe.uc.enableCleanRoom", defaultValue: false)
      @includeSafex(name: "cleanroom_jar_task", defaultValue: false) {
      cleanRoomName
      jarAnalysisName
      parameters
    }
    pythonWheelTask {
      entryPoint
      packageName
      parameters
      namedParameters {
        key
        value
      }
    }
    dbtTask {
      projectDirectory
      catalog
      commands
      schema
      warehouseId
      profilesDirectory
      source @include(if: $includeSourceInDbtAndSqlFile)
    }
    sqlTask {
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
      parameters {
        key
        value
      }
      warehouseId
    }
    runJobTask {
      jobId
      batchLoadJob @include(if: $includeJobInRunJobTask) {
        settings {
          name
        }
      }
      jobParameters @include(if: $includeJobParameters) {
        key
        value
      }
    }
    conditionTask {
      left
      right
      op
      outcome
    }
    simulationTask @includeSafex(name: "databricks.fe.jobs.tasks.plugins.simulation.enabled", defaultValue: false) {
      controlId
      parameters {
        key
        value
      }
    }
    dashboardTask {
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
      filters {
        key
        value
      }
    }
    forEachTask {
      inputs
      concurrency
    }
    alertTask @includeSafex(name: "alertv2_job_task", defaultValue: false) {
      alertId
      warehouseId
      workspacePath
      subscribers {
        userName
        destinationId
      }
    }
    genAiComputeTask @includeSafex(name: "databricks.genaimapi.enableGenaiComputeTaskJobRun", defaultValue: false) {
      dlRuntimeImage
      compute {
        numGpus
        gpuNodePoolId
        gpuType
      }
      command
      source
      trainingScriptPath
      yamlParametersFilePath
      mlflowExperimentName
      yamlParameters
    }
    powerBiTask @includeSafex(name: "power_bi_task", defaultValue: false) {
      tables {
        catalog
        schema
        name
        storageMode
      }
      warehouseId
      powerBiModel {
        workspaceName
        modelName
        storageMode
        authenticationMethod
        overwriteExisting
      }
      connectionResourceName
      refreshAfterUpdate
    }
    dbtPlatformTask @includeSafex(name: "dbt_cloud_task", defaultValue: false) {
      connectionResourceName
      dbtPlatformJobId
    }
    agenticTask @includeSafex(name: "databricks.fe.jaws.agentTaskEnabled", defaultValue: false) {
      goal
      supervisorAgent {
        agentId
      }
      taskOutputSchema {
        key
        value
      }
    }
    pythonOperatorTask
      @includeSafex(name: "databricks.fe.jobs.tasks.plugins.pythonOperator.enabled", defaultValue: false) {
      main
      parameters {
        name
        value
      }
    }
  }
`},226595:(e,a,t)=>{t.d(a,{K:()=>r});var n=t(605945),o=t(951165);function r(e=(0,n.Iq)()){return(window.settings?.availableWorkspaces??(0,o.m)()?.settings?.availableWorkspaces??[]).find(a=>(0,n.k2)(a.orgId,e))}},242995:(e,a,t)=>{t.d(a,{h:()=>i,j:()=>r});var n,o=t(696514),r=((n={}).DONE="done",n.CANCELED="canceled",n);let i=(0,o.fH)("Filebrowser::SaveAsFolderNode")},262031:(e,a,t)=>{t.d(a,{I:()=>r,l:()=>i});var n=t(692738),o=t(141078);let r=e=>btoa(JSON.stringify({offset:e})),i=(e,a)=>{let t=(0,o.IT)(e,a),{startPolling:r,stopPolling:i}=t;return(0,n.useEffect)(()=>{let e=!!a?.skip;a?.pollInterval&&!e?r(a.pollInterval):i()},[a?.skip,a?.pollInterval,r,i]),t}},286767:(e,a,t)=>{t.d(a,{Q:()=>i});var n=t(326081),o=t(141078);let r=(0,o.J1)`
  query RbacCheckPolicyQuery($input: RbacCheckPolicyExternalRequestInput!)
  @component(name: "AccessMgmt.InternalService") {
    rbacCheckPolicyExternal(input: $input) {
      apiError {
        code
        message
      }
      isPermitted
    }
  }
`;function i(e,a=!1){return(0,o.IT)(r,{variables:e,skip:(0,n.G)()||a})}},289025:(e,a,t)=>{t.d(a,{A:()=>l});var n=t(610435),o=t(692738),r=t(375214);function i(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.5 0v2H1.75a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75H6v-1.5H2.5V7H15V2.75a.75.75 0 0 0-.75-.75H11.5V0H10v2H6V0zm9 5.5v-2h-11v2z",clipRule:"evenodd"}),(0,n.Y)("path",{fill:"currentColor",d:"M10.25 10.5V12c0 .199.079.39.22.53l1 1 1.06-1.06-.78-.78V10.5z"}),(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M7 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5",clipRule:"evenodd"})]})}let s=(0,o.forwardRef)((e,a)=>(0,n.Y)(r.I,{ref:a,...e,component:i}));s.displayName="CalendarClockIcon";let l=s},299147:(e,a,t)=>{t.d(a,{B:()=>n,u:()=>r});let n=Symbol("$access");function o(e){return(e[n]??(()=>!0))()}function r(e){return!function e(a,t){for(let n of Object.keys(a)){if(0===n.length)throw Error("property name cannot be empty");if(n.includes(t))throw Error(`property name cannot contain delimiter: "${t}"`);e(a[n],t)}}(e,"."),{get config(){return e},canView(a){let t=function e(a,t){if(!o(a))return;if(0===t.length)return a;let[n,...r]=t;return a[n]&&e(a[n],r)}(e,a.split("."));if(!t)return!1;return function e(a){if(!o(a))return!1;let t=Object.values(a);if(0===t.length)return!0;return t.some(e)}(t)}}}},312566:(e,a,t)=>{t.d(a,{A:()=>l});var n=t(610435),o=t(692738),r=t(375214);function i(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("path",{fill:"currentColor",d:"M13.5 2.5H7V1h7.25a.75.75 0 0 1 .75.75V9h-1.5z"}),(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1 7.75A.75.75 0 0 1 1.75 7h6.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-.75.75h-6.5a.75.75 0 0 1-.75-.75zm1.5.75v5h5v-5z",clipRule:"evenodd"}),(0,n.Y)("path",{fill:"currentColor",d:"M4 5.32h6.5V12H12V4.57a.75.75 0 0 0-.75-.75H4z"})]})}let s=(0,o.forwardRef)((e,a)=>(0,n.Y)(r.I,{ref:a,...e,component:i}));s.displayName="LayerIcon";let l=s},319683:(e,a,t)=>{t.d(a,{$:()=>r,_:()=>o});var n=t(5697);let o=e=>[n.Z6.Folder,n.Z6.Project,n.Z6.Root].some(a=>a===e),r=(e,a)=>a.some(a=>{if(o(e))return a===n.Z6.Folder;return a===e})},322227:(e,a,t)=>{t.d(a,{$:()=>r,x:()=>i});var n,o=t(696514),r=((n={}).DONE="done",n.CANCELLED="cancelled",n);let i=(0,o.fH)("Filebrowser::Move")},341957:(e,a,t)=>{t.d(a,{C:()=>o});var n=t(90176);let o=()=>!!(0,n.V)()},349794:(e,a,t)=>{t.d(a,{A:()=>l});var n=t(610435),o=t(692738),r=t(375214);function i(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 17 17",...e,children:(0,n.Y)("path",{fill:"currentColor",d:"m10.53 11.06-1.97 1.97L10.53 15l-1.06 1.06-3.03-3.03L9.47 10zM16.06 13.03l-3.03 3.03L11.97 15l1.97-1.97-1.97-1.97L13.03 10zM5 1a5.75 5.75 0 0 1 5.75 5.75V9h-1.5V6.75A4.25 4.25 0 0 0 5.5 2.53v2.793A1.75 1.75 0 0 1 6.75 7v2.25q.001.47.098.91l-1.196 1.204A5.7 5.7 0 0 1 5.25 9.25V7A.25.25 0 0 0 5 6.75H1.75A.75.75 0 0 1 1 6V1.75A.75.75 0 0 1 1.75 1zM2.5 5.25H4V2.5H2.5z"})})}let s=(0,o.forwardRef)((e,a)=>(0,n.Y)(r.I,{ref:a,...e,component:i}));s.displayName="PipelineCodeIcon";let l=s},351992:(e,a,t)=>{t.d(a,{w:()=>o});var n=t(692738);function o({ref:e,debounceTimeMs:a,box:t="contentRect"}){let r=(0,n.useRef)({width:-1,height:-1}),i=(0,n.useRef)(),[s,l]=(0,n.useState)(null),d=(0,n.useCallback)(e=>{if(0===e.length)return;let n=e[0],o=n.contentRect.width,s=n.contentRect.height;if("borderBox"===t){let e=n.borderBoxSize?.[0];e&&(o=e.inlineSize,s=e.blockSize)}if(-1===r.current.width){r.current={width:o,height:s},l(r.current);return}if(o!==r.current.width||s!==r.current.height){if(r.current.width=o,r.current.height=s,!a)return void l({...r.current});clearTimeout(i.current),i.current=setTimeout(()=>{l({...r.current})},a)}},[a,t]),u=(0,n.useRef)();return u.current||(u.current=new ResizeObserver(d)),(0,n.useEffect)(()=>{let a="function"==typeof e?e():e.current;if(a){let e=u.current;return e.observe(a),()=>e.unobserve(a)}}),s}},449853:(e,a,t)=>{t.r(a),t.d(a,{queryClientByWorkspace:()=>r});var n=t(22191),o=t(614127);let r=(0,t(518726).T)(()=>(0,o.j)("workspace-page",n.Es.FileBrowser,{defaultOptions:{queries:{retry:!1},mutations:{retry:!1}}}))},463909:(e,a,t)=>{t.d(a,{X:()=>d});var n=t(610435),o=t(692738),r=t(641163);function i(e,a,t,n,o,r,i){try{var s=e[r](i),l=s.value}catch(e){t(e);return}s.done?a(l):Promise.resolve(l).then(n,o)}function s(e){return function(){var a=this,t=arguments;return new Promise(function(n,o){var r=e.apply(a,t);function s(e){i(r,n,o,s,l,"next",e)}function l(e){i(r,n,o,s,l,"throw",e)}s(void 0)})}}let l=(0,o.forwardRef)(({useHookImpl:e},a)=>{let[t,n]=e();return(0,o.useImperativeHandle)(a,()=>({call:(...e)=>n(...e)}),[n]),t??null});function d(e){let a,t;return function(){let[,i]=(0,o.useState)(0),[d,u]=(0,o.useState)(!1),c=(0,o.useRef)();c.current=t;let[f,m]=(0,r.D)(()=>{let e;return[new Promise(a=>{e=a}),e]}),p=(0,o.useRef)(null),g=(0,o.useCallback)(e=>{p.current=e,m()},[m]),h=(0,o.useCallback)((...n)=>s(function*(){if(void 0===t)try{u(!0),yield s(function*(){if(void 0===t){let n;(void 0===a||"error"===a.status)&&(a=n={status:"pending",promise:e().then(e=>(n.status="success",e),e=>{throw n.status="error",e})}),t=yield a.promise}if("function"!=typeof t)throw Error("Lazy modal hook is not a function. Make sure you are importing the correct module and referencing the correct export.")})()}finally{u(!1)}return void 0===c.current&&i(e=>e+1),yield f,p.current?.call(...n)})(),[f]);return[t?(0,n.Y)(l,{useHookImpl:t,ref:g}):null,h,d]}}},471186:(e,a,t)=>{t.d(a,{x:()=>n});let n=t(126001).A},471275:(e,a,t)=>{t.d(a,{w:()=>n});let n=(0,t(696514).fH)("Repos::GitAssetSupportModal")},502581:(e,a,t)=>{t.d(a,{t:()=>c});var n=t(621058),o=t.n(n),r=t(326081),i=t(604787),s=t(13451),l=t(686560),d=t(889885),u=t(783487);class c{static isCloudAwsOrGcpAndNotCommunityEdition(){return((0,d.FI)("cloud")===u.L.AWS||(0,d.FI)("cloud")===u.L.GCP)&&!(0,r.G)()}static ssoIdeasEnabled(){return c.isCloudAwsOrGcpAndNotCommunityEdition()&&(0,s.e)("enableSsoIdeasConfig",!0)}static ssoSupportEnabled(){return c.isCloudAwsOrGcpAndNotCommunityEdition()&&(0,s.e)("enableSsoSupportConfig",!0)}static feedbackDisabled(){return(0,l.d)("databricks.webapp.isPvc",!1)||(0,i.pR)()}static ssoFeatureFlag(){return c.isCloudAwsOrGcpAndNotCommunityEdition()}static toggleSsoSetting(e,a,t,n){window.recordEvent("ssoToExternalSystemsToggle",{externalSystemsSsoState:a}),a?o().ajax({type:"POST",url:`/sso/${e}/disable`,success:e=>t(e),error:()=>n()}):o().ajax({type:"POST",url:`/sso/${e}/enable`,success:e=>t(e),error:()=>n()})}}},513517:(e,a,t)=>{t.d(a,{A:()=>l});var n=t(610435),o=t(692738),r=t(375214);function i(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.FD)("g",{fill:"currentColor",clipPath:"url(#HistoryIcon_svg__a)",children:[(0,n.Y)("path",{d:"m3.507 7.73.963-.962 1.06 1.06-2.732 2.732L-.03 7.732l1.06-1.06.979.978a7 7 0 1 1 2.041 5.3l1.061-1.06a5.5 5.5 0 1 0-1.604-4.158"}),(0,n.Y)("path",{d:"M8.25 8V4h1.5v3.69l1.78 1.78-1.06 1.06-2-2A.75.75 0 0 1 8.25 8"})]}),(0,n.Y)("defs",{children:(0,n.Y)("clipPath",{children:(0,n.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let s=(0,o.forwardRef)((e,a)=>(0,n.Y)(r.I,{ref:a,...e,component:i}));s.displayName="HistoryIcon";let l=s},551383:(e,a,t)=>{t.d(a,{_:()=>n});let n=(0,t(696514).fH)("Repos::RepoAddModal")},553935:(e,a,t)=>{t.d(a,{A:()=>l});var n=t(610435),o=t(692738),r=t(375214);function i(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.75 1a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5A.75.75 0 0 0 7 6.25v-4.5A.75.75 0 0 0 6.25 1zm.75 4.5v-3h3v3zM1.75 9a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-4.5A.75.75 0 0 0 6.25 9zm.75 4.5v-3h3v3zM9 1.75A.75.75 0 0 1 9.75 1h4.5a.75.75 0 0 1 .75.75v4.49a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 6.24zm1.5.75v2.99h3V2.5zM9.75 9a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75zm.75 4.5v-3h3v3z",clipRule:"evenodd"})})}let s=(0,o.forwardRef)((e,a)=>(0,n.Y)(r.I,{ref:a,...e,component:i}));s.displayName="GridIcon";let l=s},557351:(e,a,t)=>{t.d(a,{A:()=>l});var n=t(610435),o=t(692738),r=t(375214);function i(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("path",{fill:"currentColor",d:"M4 4h3v1.5H4a2.5 2.5 0 0 0 0 5h3V12H4a4 4 0 0 1 0-8M12 10.5H9V12h3a4 4 0 0 0 0-8H9v1.5h3a2.5 2.5 0 0 1 0 5"}),(0,n.Y)("path",{fill:"currentColor",d:"M4 8.75h8v-1.5H4z"})]})}let s=(0,o.forwardRef)((e,a)=>(0,n.Y)(r.I,{ref:a,...e,component:i}));s.displayName="LinkIcon";let l=s},560287:(e,a,t)=>{t.d(a,{d:()=>o});var n=t(441535);function o(){let e=(0,n.W)("excl_data_access",!1),a=(0,n.W)("databricks.fe.permissions.enableSharingControl",!1);return!!(e||a)}},563861:(e,a,t)=>{t.d(a,{Ip:()=>i,K2:()=>s,Wp:()=>l,vi:()=>r});var n=t(141078),o=t(984568);let r=(0,n.J1)`
  fragment NotebookApiErrorFields on ApiError {
    code
    message
    helpUrl
    traceId
  }
`,i=(0,n.J1)`
  fragment NotebookJobListSettings on JobsJobSettings {
    name
    schedule {
      quartzCronExpression
      timezoneId
      pauseStatus
    }
    tasks {
      task {
        notebookTask {
          notebookPath
        }

        pipelineTask {
          pipelineId
        }
      }
      clusterSpec {
        jobClusterKey
      }
    }
  }
`,s=(0,n.J1)`
  fragment PythonFileJobListSettings on JobsJobSettings {
    name
    schedule {
      quartzCronExpression
      timezoneId
      pauseStatus
    }
    tasks {
      task {
        sparkPythonTask {
          pythonFile
        }
        pipelineTask {
          pipelineId
        }
      }
      clusterSpec {
        jobClusterKey
      }
    }
  }
`,l=(0,n.J1)`
  fragment ExtendedNotebookJobSettings on JobSettings {
    name
    schedule {
      quartzCronExpression
      timezoneId
      pauseStatus
    }
    task {
      ... on NotebookTask {
        notebookPath
        baseParameters {
          key
          value
        }
      }
      ... on SparkPythonTask {
        pythonFile
        parameters
        source
      }
    }
    clusterSpec {
      ...ClusterDetails
    }
    emailNotifications {
      onStart
      onSuccess
      onFailure
    }
    gitSource {
      gitUrl
      gitProvider
      gitBranch
      gitTag
      gitCommit
      gitReference {
        __typename
      }
    }
  }
  ${o.VM}
`},571739:(e,a,t)=>{t.d(a,{J:()=>r,z:()=>i});var n,o=t(696514),r=((n={}).DONE="done",n.CANCELLED="cancelled",n);let i=(0,o.fH)("Filebrowser::Clone")},586852:(e,a,t)=>{t.d(a,{A:()=>l});var n=t(610435),o=t(692738),r=t(375214);function i(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"m15.06 8.03-7.03 7.03L6.97 14l5.22-5.22H1v-1.5h11.19L6.97 2.06 8.03 1z",clipRule:"evenodd"})})}let s=(0,o.forwardRef)((e,a)=>(0,n.Y)(r.I,{ref:a,...e,component:i}));s.displayName="ArrowRightIcon";let l=s},591014:(e,a,t)=>{t.d(a,{T:()=>n,o:()=>o});let n=(0,t(342411).YK)({objectName:{id:"ScbO6k",defaultMessage:"Visual data prep"},objectNameLowerCase:{id:"TNPvVr",defaultMessage:"visual data prep"},newObject:{id:"SyflR2",defaultMessage:"New {objectNameLowerCase}"},productName:{id:"/3qpv0",defaultMessage:"Visual data prep"},navName:{id:"v1Jhls",defaultMessage:"Visual data prep"},listingPageAllObjects:{id:"NXoIWm",defaultMessage:"All visual data prep files"},listingPageFilteredObjects:{id:"74qg2Z",defaultMessage:"Filtered visual data prep files"},listingPageCreateButton:{id:"rlAqh6",defaultMessage:"Create visual data prep"},aboutLabel:{id:"yMgFgb",defaultMessage:"About this {objectName}"},cannotCreate:{id:"4oBytw",defaultMessage:"Cannot create {objectName}"},failedToCreate:{id:"qjnvFq",defaultMessage:"Failed to create {objectName}. Please try again."},loadErrorTitle:{id:"GnFfAH",defaultMessage:"{objectName} failed to load"},loadErrorContent:{id:"X0C/bZ",defaultMessage:"An unexpected error occurred loading the {objectNameLowerCase}. Please wait and refresh the page, or click below to return to the home page."},notFoundTitle:{id:"Zo+5WN",defaultMessage:"{objectName} does not exist"},notFoundContent:{id:"p7eHr5",defaultMessage:"The specified {objectNameLowerCase} was not found. Double check the URL to make sure you're accessing a valid {objectNameLowerCase}."},warehouseRequired:{id:"qsfdG6",defaultMessage:"{objectName} can only be attached to Pro or Serverless SQL Warehouses"},defaultDesignerFileName:{id:"sn+HwE",defaultMessage:"{objectName} {dateString}"},featureNotAvailable:{id:"nPa++M",defaultMessage:"This feature is not available in your workspace."},featureNotAvailableMessage:{id:"Y5WcN3",defaultMessage:"{objectName} is not available in this workspace. Please contact your administrator to enable this feature."},workspaceEntitlementRequiredMessage:{id:"imulee",defaultMessage:"{objectName} requires Databricks workspace access. Your current entitlements do not include workspace access. Please contact your administrator."}}),o="Designer File"},609597:(e,a,t)=>{t.d(a,{Lk:()=>i,Xr:()=>l,a4:()=>d,g1:()=>r,mY:()=>s,rM:()=>u});var n=t(160603),o=t(971845);let r=(e,a)=>({name:e,internal_name:a}),i=e=>["folder",e],s=(e,a)=>i({name:e,internal_name:a}),l=(e,a,t)=>{if(a?.type!==void 0){let n=t??{name:a.name,internal_name:a.internal_name};e.setQueryData(i(n),a)}},d=(e,a)=>(0,n.useQuery)(i(e),()=>(0,o.J)(e),a),u=(e,a,t)=>e.fetchQuery(i(a),()=>(0,o.J)(a),t)},658375:(e,a,t)=>{t.d(a,{D:()=>n});function n(e){return null!==e.name&&null!==e.pipelineId}},661152:(e,a,t)=>{t.d(a,{I2:()=>d,TE:()=>i,cR:()=>l,oA:()=>s});var n=t(141078),o=t(154968);let r=(0,n.J1)`
  fragment PipelineGetFragment on DeltapipelinesGetPipelineResponse {
    status {
      cause
      clusterId
      health
      lastModified
      latestUpdates {
        creationTime
        state
        updateId
      }
      name
      permissionLevel
      pipelineId
      creatorUserName
      runAsUserName
      runAs {
        servicePrincipalName
        userName
      }
      effectiveBudgetPolicyId
        @includeSafex(name: "databricks.fe.pipelines.enableEffectiveBudgetPolicyIdInPipelineGet", defaultValue: false)
      ownerPrincipal @includeSafex(name: "databricks.fe.enrichPrincipalUi", defaultValue: false) {
        id
        uniqueName
        kind
        displayName
      }
      effectivePublishingMode
      effectiveEnvironmentVersion
      spec {
        _json
        name
        budgetPolicyId
        usagePolicyId @includeSafex(name: "databricks.fe.budget_policy.renameServerlessPolicy", defaultValue: false)
        configuration {
          key
          value
        }
        tags {
          key
          value
        }
        continuous
        libraries {
          notebook {
            path
          }
          file {
            path
          }
          glob {
            include
          }
        }
        rootPath
        channel
        clusters {
          label
          spec {
            attrs {
              policyId
              nodeTypeId
              driverNodeTypeId
              runtimeEngine
              customTags {
                key
                value
              }
              awsAttributes {
                instanceProfileArn
              }
            }
            size {
              numWorkers
              autoscale {
                minWorkers
                maxWorkers
                mode
              }
            }
          }
        }
        environment {
          client
          dependencies
          environmentVersion
        }
        edition
        photon
        serverless
        development
        deployment {
          kind
          metadataFilePath
        }
        storage
        catalog
        target
        schema
        eventLog {
          name
          catalog
          schema
        }
        pipelineType
        ingestionDefinition {
          connectionName
          ingestionGatewayId
          ingestFromUcForeignCatalog
            @includeSafex(name: "databricks.fe.ingestion.enableForeignCatalogIngestion", defaultValue: false)
          sourceType
          netsuiteJarPath
          objects {
            catalog {
              sourceCatalog
              destinationCatalog
              tableConfiguration {
                scdType
                primaryKeys
                salesforceIncludeFormulaFields
                includeColumns
                excludeColumns
              }
            }
            schema {
              sourceCatalog
              sourceSchema
              destinationCatalog
              destinationSchema
              tableConfiguration {
                scdType
                primaryKeys
                salesforceIncludeFormulaFields
                includeColumns
                excludeColumns
              }
              connectorOptions {
                sharepointOptions {
                  entityType
                  url
                  fileIngestionOptions
                    @includeSafex(name: "databricks.fe.ingestion.connector.sharepoint.enabled", defaultValue: false) {
                    format
                    fileFilters {
                      pathFilter
                      modifiedBefore
                      modifiedAfter
                    }
                    inferColumnTypes
                    schemaEvolutionMode
                    schemaHints
                    ignoreCorruptFiles
                    corruptRecordColumn
                    rescuedDataColumn
                    singleVariantColumn
                    readerCaseSensitive
                    formatOptions {
                      key
                      value
                    }
                  }
                }
                gdriveOptions {
                  entityType
                  url
                }
              }
            }
            table {
              sourceCatalog
              sourceSchema
              sourceTable
              destinationCatalog
              destinationSchema
              destinationTable
              tableConfiguration {
                scdType
                primaryKeys
                salesforceIncludeFormulaFields
                includeColumns
                excludeColumns
                sequenceBy
                queryBasedConnectorConfig {
                  cursorColumns
                }
                autoFullRefreshPolicy {
                  enabled
                }
              }
              connectorOptions {
                sharepointOptions {
                  entityType
                  url
                  fileIngestionOptions
                    @includeSafex(name: "databricks.fe.ingestion.connector.sharepoint.enabled", defaultValue: false) {
                    format
                    fileFilters {
                      pathFilter
                      modifiedBefore
                      modifiedAfter
                    }
                    inferColumnTypes
                    schemaEvolutionMode
                    schemaHints
                    ignoreCorruptFiles
                    corruptRecordColumn
                    rescuedDataColumn
                    singleVariantColumn
                    readerCaseSensitive
                    formatOptions {
                      key
                      value
                    }
                  }
                }
                gdriveOptions {
                  entityType
                  url
                }
                outlookOptions
                  @includeSafex(name: "databricks.fe.ingestion.connector.outlook.enabled", defaultValue: false) {
                  startDate
                  bodyFormat
                  attachmentMode
                  includeMailboxes
                  includeFolders
                  includeSenders
                  includeSubjects
                }
                metaAdsOptions {
                  level
                  breakdowns
                  actionBreakdowns
                  actionReportTime
                  actionAttributionWindows
                  startDate
                  customInsightsLookbackWindow
                  timeIncrement
                }
                smartsheetOptions {
                  enforceSchema
                }
              }
              jiraOptions
                @includeSafex(name: "databricks.fe.ingestion.enableJiraConfluenceSpacesCell", defaultValue: false) {
                includeJiraSpaces
              }
              confluenceOptions
                @includeSafex(name: "databricks.fe.ingestion.enableJiraConfluenceSpacesCell", defaultValue: false) {
                includeConfluenceSpaces
              }
            }
            report {
              sourceUrl
              destinationCatalog
              destinationSchema
              destinationTable
              tableConfiguration {
                scdType
                primaryKeys
                sequenceBy
                includeColumns
                excludeColumns
              }
            }
          }
          tableConfiguration {
            scdType
            primaryKeys
            salesforceIncludeFormulaFields
            includeColumns
            excludeColumns
            autoFullRefreshPolicy {
              enabled
            }
          }
          sourceConfigurations {
            catalog {
              sourceCatalog
              postgres {
                slotConfig {
                  slotName
                  publicationName
                }
              }
            }
          }
        }
        managedDefinition {
          databaseTableSync {
            sinks {
              destTableUcName
              destTable
            }
          }
          metricView @includeSafex(name: "databricks.fe.pipelines.enableMetricViewBacklink", defaultValue: false) {
            ucTableId
          }
        }
        gatewayDefinition {
          connectionName
          gatewayStorageCatalog
          gatewayStorageSchema
          connectionParameters {
            sourceCatalog
          }
        }
        notifications {
          emailRecipients
          alerts
        }
      }
      parameters @includeSafex(name: "pipeline_parameters", defaultValue: false) {
        key
        value
      }
      state
    }
  }
`,i=(0,n.J1)`
  query PipelineGetQuery($input: DeltapipelinesGetPipelineInput!) @component(name: "Workflows.Authoring.UI") {
    deltapipelinesGet: jobsGetPipeline(input: $input) {
      ...PipelineGetFragment
      apiError {
        ...PipelineApiErrorFields
      }
    }
  }
  ${r}
  ${o.n}
`;function s({variables:e,...a}={}){return(0,n.IT)(i,{variables:e,...a})}function l(e){return(0,n._l)(i,e)}function d({variables:e,...a}={}){let t=(0,n.IT)(i,{variables:e,...a,fetchPolicy:"cache-and-network"});if(!a.skip&&void 0===t.data&&!t.error)throw new Promise(e=>{t.observable.subscribe({next(a){a.loading||e(a)}})});return t}},670452:(e,a,t)=>{t.d(a,{A:()=>l});var n=t(610435),o=t(692738),r=t(375214);function i(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",d:"M1 13.56h14v1.5H1zM12.53 5.53l-1.06 1.061-2.72-2.72v7.19h-1.5V3.87l-2.72 2.72-1.06-1.06L8 1z"})})}let s=(0,o.forwardRef)((e,a)=>(0,n.Y)(r.I,{ref:a,...e,component:i}));s.displayName="UploadIcon";let l=s},673163:(e,a,t)=>{t.d(a,{A:()=>l});var n=t(610435),o=t(692738),r=t(375214);function i(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.25 2a.75.75 0 0 1 .75.75v.892a8.75 8.75 0 0 1-3.07 6.656h.015v.626a4.75 4.75 0 0 1-2.017 3.884l-1.496 1.053a.75.75 0 0 1-1.163-.446l-.72-3.148-1.814-1.815L.589 9.75a.75.75 0 0 1-.451-1.162L1.193 7.08a4.75 4.75 0 0 1 3.891-2.025h.618v.015A8.75 8.75 0 0 1 12.358 2zM7.105 12.341l.377 1.65.583-.41a3.25 3.25 0 0 0 1.353-2.245q-.405.22-.837.397zM4.267 7.419l-.61 1.48L2.01 8.53l.413-.589a3.25 3.25 0 0 1 2.242-1.358q-.22.404-.397.836M12.5 3.5h-.142a7.2 7.2 0 0 0-2.754.543l2.353 2.353a7.2 7.2 0 0 0 .543-2.754zM5.654 7.99a7.24 7.24 0 0 1 2.576-3.2l2.98 2.98a7.24 7.24 0 0 1-3.2 2.576l-1.601.66L4.995 9.59z",clipRule:"evenodd"}),(0,n.Y)("path",{fill:"currentColor",d:"m2.22 10.72-.122.121A3.75 3.75 0 0 0 1 13.493v.757c0 .414.336.75.75.75h.757a3.75 3.75 0 0 0 2.652-1.098l.121-.122-1.06-1.06-.122.121a2.25 2.25 0 0 1-1.59.659H2.5v-.007c0-.597.237-1.17.659-1.591l.121-.122z"})]})}let s=(0,o.forwardRef)((e,a)=>(0,n.Y)(r.I,{ref:a,...e,component:i}));s.displayName="RocketIcon";let l=s},687011:(e,a,t)=>{t.d(a,{Y:()=>i});var n=t(692738),o=t(845690),r=t(580500);let i=()=>{let[e,a]=(0,o.Mj)({key:"lakeflow-open-in-editor-folders-map",version:1,initialValue:{},scoped:!0}),t=(0,n.useCallback)(({folderId:e,pipelineId:t})=>{a(a=>({...Object.fromEntries(Object.entries(a).filter(e=>e[1]!==t)),[e]:t}))},[a]),i=(0,n.useCallback)(({pipelineId:e})=>{a(a=>Object.fromEntries(Object.entries(a).filter(a=>a[1]!==e)))},[a]);return{getAssociatedPipeline:(0,n.useCallback)(a=>(a.startsWith("projects/")&&(a=`folders/${(0,r.Uk)(a)}`),e[a]),[e]),associatePipelineFolder:t,removePipelineAssociation:i}}},712234:(e,a,t)=>{t.d(a,{e:()=>u,z:()=>d});var n=t(661152),o=t(658375),r=t(889900);function i(e,a,t,n,o,r,i){try{var s=e[r](i),l=s.value}catch(e){t(e);return}s.done?a(l):Promise.resolve(l).then(n,o)}function s(e){return{input:{pipelineId:e??"",includePermissionLevels:!0}}}function l(e){return e?.deltapipelinesGet?.status&&(0,o.D)(e?.deltapipelinesGet.status)?e.deltapipelinesGet.status:null}function d({pipelineId:e,skip:a=!1,pollInterval:t=0,onCompleted:o,onError:i,fetchPolicy:u}){let c=(0,n.oA)({variables:s(e),skip:a||!e||e===r.Ad,pollInterval:t,onCompleted:o,onError:i,fetchPolicy:u});return{pipeline:l(c.data),...c}}function u(e){var a;return(a=function*({apolloClient:e,pipelineId:a,fetchPolicy:t}){let o=yield e.query({variables:s(a),query:n.TE,fetchPolicy:t});return{pipeline:l(o.data),...o}},function(){var e=this,t=arguments;return new Promise(function(n,o){var r=a.apply(e,t);function s(e){i(r,n,o,s,l,"next",e)}function l(e){i(r,n,o,s,l,"throw",e)}s(void 0)})}).apply(this,arguments)}},742996:(e,a,t)=>{t.d(a,{P:()=>s,f:()=>i});var n=t(160603),o=t(721698);function r(e,a,t,n,o,r,i){try{var s=e[r](i),l=s.value}catch(e){t(e);return}s.done?a(l):Promise.resolve(l).then(n,o)}let i=e=>["files",e],s=(e,a)=>(0,n.useInfiniteQuery)(i(e),({pageParam:a})=>{var t;return(t=function*(){return(0,o.t)({...e,page_token:a})},function(){var e=this,a=arguments;return new Promise(function(n,o){var i=t.apply(e,a);function s(e){r(i,n,o,s,l,"next",e)}function l(e){r(i,n,o,s,l,"throw",e)}s(void 0)})})()},{getNextPageParam:e=>e.next_page_token,refetchOnMount:"always",...a})},807091:(e,a,t)=>{t.d(a,{QW:()=>l,dx:()=>s});var n=t(686560);if(/^(13057|85670)$/.test(t.j))var o=t(641760);if(/^(13057|85670)$/.test(t.j))var r=t(371303);var i=t(889885);function s(){return(0,i.Nm)("enablePipelinesUi",!1,()=>(0,n.d)("enablePipelinesUi",!1))}function l(){return(0,r.sT)("databricks.fe.enablePipelinesUnityCatalogSelection",!1)||(0,r.sT)("databricks.deltapipelines.isUCCatalogEnabled",!1)||(0,o.ei)()}},810026:(e,a,t)=>{t.d(a,{A:()=>l});var n=t(610435),o=t(692738),r=t(375214);function i(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("g",{clipPath:"url(#GlobeIcon_svg__a)",children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m5.354-5.393q.132-.347.287-.666A6.51 6.51 0 0 0 1.543 7.25h2.971c.067-1.777.368-3.399.84-4.643m.661 4.643c.066-1.627.344-3.062.742-4.11.23-.607.485-1.046.73-1.32.247-.274.421-.32.513-.32s.266.046.512.32.501.713.731 1.32c.398 1.048.676 2.483.742 4.11zm3.97 1.5h-3.97c.066 1.627.344 3.062.742 4.11.23.607.485 1.046.73 1.32.247.274.421.32.513.32s.266-.046.512-.32.501-.713.731-1.32c.398-1.048.676-2.483.742-4.11m1.501-1.5c-.067-1.777-.368-3.399-.84-4.643a8 8 0 0 0-.287-.666 6.51 6.51 0 0 1 4.098 5.309zm2.971 1.5h-2.971c-.067 1.777-.368 3.399-.84 4.643a8 8 0 0 1-.287.666 6.51 6.51 0 0 0 4.098-5.309m-9.943 0H1.543a6.51 6.51 0 0 0 4.098 5.309 8 8 0 0 1-.287-.666c-.472-1.244-.773-2.866-.84-4.643",clipRule:"evenodd"})}),(0,n.Y)("defs",{children:(0,n.Y)("clipPath",{children:(0,n.Y)("path",{fill:"#fff",d:"M0 16h16V0H0z"})})})]})}let s=(0,o.forwardRef)((e,a)=>(0,n.Y)(r.I,{ref:a,...e,component:i}));s.displayName="GlobeIcon";let l=s},820097:(e,a,t)=>{t.d(a,{H:()=>r,Z:()=>i});var n,o=t(696514),r=((n={}).DONE="done",n.CANCELLED="cancelled",n);let i=(0,o.fH)("Filebrowser::CloneRedashToLakeview")},822369:(e,a,t)=>{t.d(a,{o:()=>r});var n=t(13451),o=t(889885);let r=()=>(0,o.Nm)("enableJobAclsConfig",()=>(0,n.e)("enableJobAclsConfig",!1))},831358:(e,a,t)=>{t.d(a,{E:()=>r,j:()=>o});var n=t(141078);let o=(0,n.J1)`
  fragment RichUserData on RichUser {
    id
    email
    fullname
  }
`,r=(0,n.J1)`
  fragment AclPrincipalData on AclPrincipal {
    id
    displayName
    uniqueName
    kind
  }
`},853762:(e,a,t)=>{t.d(a,{Z:()=>l,f:()=>d});var n=t(610435);t(692738);var o=t(79570),r=t(342411),i=t(834405);let s={noPrefix:e=>({intervals:[{seconds:31536e3,timeAgoMessage:a=>e.formatMessage({id:"NF6ePS",defaultMessage:"{count, plural, =1 {1 year} other {# years}} ago"},{count:a})},{seconds:2592e3,timeAgoMessage:a=>e.formatMessage({id:"N79Rdb",defaultMessage:"{count, plural, =1 {1 month} other {# months}} ago"},{count:a})},{seconds:86400,timeAgoMessage:a=>e.formatMessage({id:"XwD3hV",defaultMessage:"{count, plural, =1 {1 day} other {# days}} ago"},{count:a})},{seconds:3600,timeAgoMessage:a=>e.formatMessage({id:"i1Hj20",defaultMessage:"{count, plural, =1 {1 hour} other {# hours}} ago"},{count:a})},{seconds:60,timeAgoMessage:a=>e.formatMessage({id:"ZO8PZt",defaultMessage:"{count, plural, =1 {1 minute} other {# minutes}} ago"},{count:a})},{seconds:1,timeAgoMessage:a=>e.formatMessage({id:"gQB+Vs",defaultMessage:"{count, plural, =1 {1 second} other {# seconds}} ago"},{count:a})}],justNowMessage:e.formatMessage({id:"ZOsiNc",defaultMessage:"just now"})}),viewed:e=>({intervals:[{seconds:31536e3,timeAgoMessage:a=>e.formatMessage({id:"zu9xi3",defaultMessage:"Viewed {count, plural, =1 {1 year} other {# years}} ago"},{count:a})},{seconds:2592e3,timeAgoMessage:a=>e.formatMessage({id:"FOzgxE",defaultMessage:"Viewed {count, plural, =1 {1 month} other {# months}} ago"},{count:a})},{seconds:86400,timeAgoMessage:a=>e.formatMessage({id:"IwEVOL",defaultMessage:"Viewed {count, plural, =1 {1 day} other {# days}} ago"},{count:a})},{seconds:3600,timeAgoMessage:a=>e.formatMessage({id:"S9xuJ2",defaultMessage:"Viewed {count, plural, =1 {1 hour} other {# hours}} ago"},{count:a})},{seconds:60,timeAgoMessage:a=>e.formatMessage({id:"zcf18B",defaultMessage:"Viewed {count, plural, =1 {1 minute} other {# minutes}} ago"},{count:a})},{seconds:1,timeAgoMessage:a=>e.formatMessage({id:"McIjuI",defaultMessage:"Viewed {count, plural, =1 {1 second} other {# seconds}} ago"},{count:a})}],justNowMessage:e.formatMessage({id:"k0JWck",defaultMessage:"Viewed just now"})}),modified:e=>({intervals:[{seconds:31536e3,timeAgoMessage:a=>e.formatMessage({id:"iSKhoe",defaultMessage:"Modified {count, plural, =1 {1 year} other {# years}} ago"},{count:a})},{seconds:2592e3,timeAgoMessage:a=>e.formatMessage({id:"PbUKAJ",defaultMessage:"Modified {count, plural, =1 {1 month} other {# months}} ago"},{count:a})},{seconds:86400,timeAgoMessage:a=>e.formatMessage({id:"C7JdMh",defaultMessage:"Modified {count, plural, =1 {1 day} other {# days}} ago"},{count:a})},{seconds:3600,timeAgoMessage:a=>e.formatMessage({id:"7XNU4O",defaultMessage:"Modified {count, plural, =1 {1 hour} other {# hours}} ago"},{count:a})},{seconds:60,timeAgoMessage:a=>e.formatMessage({id:"EZ/c8g",defaultMessage:"Modified {count, plural, =1 {1 minute} other {# minutes}} ago"},{count:a})},{seconds:1,timeAgoMessage:a=>e.formatMessage({id:"NGVQnA",defaultMessage:"Modified {count, plural, =1 {1 second} other {# seconds}} ago"},{count:a})}],justNowMessage:e.formatMessage({id:"K7/6Pt",defaultMessage:"Modified just now"})})},l=({date:e,intl:a,tooltipFormatOptions:t,prefix:n="noPrefix"})=>{let o=Math.round((new Date().getTime()-e.getTime())/1e3),r="";try{r=(0,i.r6)(e,a,t)}catch(e){}let l=s[n](a);for(let e of l.intervals){let a=Math.floor(o/e.seconds);if(a>=1)return{displayText:e.timeAgoMessage(a),tooltipTitle:r}}return{displayText:l.justNowMessage,tooltipTitle:r}},d=({date:e,tooltipFormatOptions:a,prefix:t})=>{let{displayText:i,tooltipTitle:s}=l({date:e,intl:(0,r.tz)(),tooltipFormatOptions:a,prefix:t});return(0,n.Y)(o.m,{componentId:"web-shared.time-ago",content:s,children:(0,n.Y)("span",{children:i})})}},889900:(e,a,t)=>{t.d(a,{Ad:()=>n,P3:()=>o,Q8:()=>r});let n="new",o="/editor/pipelines",r=`${o}/${n}`},916573:(e,a,t)=>{t.d(a,{A:()=>l});var n=t(610435),o=t(692738),r=t(375214);function i(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M16 8a.75.75 0 0 1-.435.68l-13.5 6.25a.75.75 0 0 1-1.02-.934L3.202 8 1.044 2.004a.75.75 0 0 1 1.021-.935l13.5 6.25A.75.75 0 0 1 16 8m-11.473.75-1.463 4.065L13.464 8l-10.4-4.815L4.527 7.25H8v1.5z",clipRule:"evenodd"})})}let s=(0,o.forwardRef)((e,a)=>(0,n.Y)(r.I,{ref:a,...e,component:i}));s.displayName="SendIcon";let l=s}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/83907.b7d740563a.chunk.js.map