"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[22442],{819:(e,t,n)=>{n.d(t,{IC:()=>g,JG:()=>i,LV:()=>b,oh:()=>f,p3:()=>h,qU:()=>d});var s,a=n(778529),r=n.n(a),i=((s={}).USER="User",s.GROUP="Group",s.SERVICE_PRINCIPAL="Service Principal",s.BUDGET_POLICY="Budget Policy",s.UNKNOWN="",s);let o="users",l="groups",u="servicePrincipals",c={Group:l,"Service Principal":u,User:o},d={[o]:"User",[l]:"Group",[u]:"Service Principal"},p={group:l,serviceprincipal:u,user:o},m={Group:"displayName","Service Principal":"applicationId",User:"userName"},b={Group:"groupname","Service Principal":"email",User:"email"};function g(e){let t=c[e.principalType],n=m[e.principalType];if(r()(t)||r()(n))return;return`${t}/${e[n]}`}function f(e){let t=p[e.kind],n="serviceprincipal"===e.kind?e.applicationId:e.name;return n?`${t}/${n}`:void 0}function h(e){switch(e.principalType){case"User":return e.displayName?`${e.displayName} (${e.userName})`:e.userName;case"Group":return e.displayName;case"Service Principal":return e.displayName||e.applicationId;default:return""}}},16790:(e,t,n)=>{n.d(t,{Gq:()=>P,ld:()=>S});var s=n(141078),a=n(202855),r=n(831358);let i=(0,s.J1)`
  fragment RunStateFragment on JobsRunState {
    durationWarningExceeded
    lifeCycleState
    resultState
    stateMessage
    userCancelledOrTimedout
    queueReason @include(if: $includeQueueReason)
  }
`;(0,s.J1)`
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
`;let o=(0,s.J1)`
  fragment RunDetailsSectionFragmentWebShared on JobsRun {
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
      runDuration @include(if: $includeRunDuration)
      queueDuration @include(if: $includeQueueDuration)
    }
    state {
      ...RunStateFragment
    }
    runType
  }

  ${i}
`,l=(0,s.J1)`
  fragment JobRunTriggerInfoWebShared on JobsRunTriggerInfo {
    runJobTask {
      runId
      jobId
      taskKey
      parentRunId
    }
  }
`,u=(0,s.J1)`
  fragment JobRunDetailsSectionFragment on JobsRun {
    ...RunDetailsSectionFragmentWebShared
    trigger
    triggerInfo {
      ...JobRunTriggerInfoWebShared
    }
    runName
  }

  ${l}
  ${o}
`,c=(0,s.J1)`
  fragment ClusterClusterAttributesWebShared on ClusterClusterAttributes {
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
    }
    policyId
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
`,d=(0,s.J1)`
  fragment ClusterClusterSizeWebShared on ClusterClusterSize {
    autoscale {
      minWorkers
      maxWorkers
    }
    numWorkers
    numVcpus
    autoscaleVcpus {
      minVcpus
      maxVcpus
    }
  }
`,p=(0,s.J1)`
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
`,m=(0,s.J1)`
  fragment JobsNewClusterDetails on JobsClusterSpecNewCluster {
    attrs {
      ...ClusterClusterAttributesWebShared
    }
    size {
      ...ClusterClusterSizeWebShared
    }
  }
  ${c}
  ${d}
`,b=(0,s.J1)`
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
  ${p}
  ${m}
`,g=(0,s.J1)`
  fragment JobsJobClusterDetails on JobsJobCluster {
    jobClusterKey
    newCluster {
      ...JobsNewClusterDetails
    }
  }
  ${m}
`,f=(0,s.J1)`
  fragment RunResolvedParametersWebShared on JobsResolvedValues {
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
  }
`,h=(0,s.J1)`
  fragment TaskRunDetailsSectionFragmentWebShared on JobsRun {
    ...RunDetailsSectionFragmentWebShared
    parentRunId
    taskKey
    creatorUserName
    creatorUser {
      ...RichUserData
    }
    creatorPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
      ...AclPrincipalData
    }
  }

  ${o}
  ${r.j}
  ${r.E}
`,v=(0,s.J1)`
  fragment RunJobParameter on JobsRunJobLevelParameters {
    name
    default
    value
  }
`;(0,s.J1)`
  query JobsGetRun__deduped(
    $input: JobsGetRunInput!
    $includeSubscriptions: Boolean!
    $includeRunDuration: Boolean = false
    $useApi21: Boolean!
    $includeJobInRunJobTask: Boolean = false
    $includeDependencyInfo: Boolean = false
    $includeQueueDuration: Boolean = false
    $includeQueueReason: Boolean = false
    $includeJobParameters: Boolean = false
    $includeResolvedValues: Boolean = false
    $includeTaskDependencyOutcome: Boolean = false
    $includeSourceInDbtAndSqlFile: Boolean = false
    $includeRunStatus: Boolean = false
  ) @component(name: "Workflows.Orchestration.Other") {
    jobsGetRun: jobsGetRunWithApiVersion(input: $input, useApi21: $useApi21) {
      run {
        ...JobRunDetailsSectionFragment
        ...TaskRunDetailsSectionFragmentWebShared
        originalAttemptRunId
        runPageUrl
        runType
        description
        format
        parentRunId
        taskKey
        attemptNumber
        task {
          ...JobsAllTasksFragment
        }
        dependencyInfo @include(if: $includeDependencyInfo) {
          dependencies {
            dependencyType
            name
            version
            language
          }
          truncated
        }
        tasks {
          attemptNumber
          runId
          runPageUrl
          state {
            lifeCycleState
            resultState
            stateMessage
            userCancelledOrTimedout
            durationWarningExceeded
            queueReason @include(if: $includeQueueReason)
          }
          status @include(if: $includeRunStatus) {
            terminationDetails {
              code
              message
            }
          }
          durationInfo {
            cleanupDuration
            endTime
            executionDuration
            setupDuration
            startTime
            runDuration @include(if: $includeRunDuration)
            queueDuration @include(if: $includeQueueDuration)
          }
          clusterInstance {
            clusterId
            sparkContextId
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
            task {
              ...JobsAllTasksFragment
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
            ...RunResolvedParametersWebShared
          }
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
      }
    }
  }

  ${a.m}
  ${b}
  ${g}
  ${u}
  ${h}
  ${f}
  ${v}
`,(0,s.J1)`
  fragment JobRunStateFragment on JobsRunState {
    durationWarningExceeded
    lifeCycleState
    resultState
    stateMessage
    userCancelledOrTimedout
    queueReason
  }
`;let y=(0,s.J1)`
  fragment JobRunStatusFragment on JobsRunStatus {
    queueDetails {
      code
      message
    }
    state
    terminationDetails {
      code
      message
      type
    }
  }
`,I=(0,s.J1)`
  fragment ScheduleButtonClusterDetails on JobsClusterSpec {
    jobClusterKey
    newCluster {
      ...JobsNewClusterDetails
    }
    existingClusterId
  }

  ${m}
`,S=(0,s.J1)`
  fragment ScheduleButtonListResponse on JobsQueryJobsResponse {
    jobs {
      jobId
      settings {
        name
        schedule {
          quartzCronExpression
          timezoneId
          pauseStatus
        }
        trigger {
          pauseStatus
          periodic {
            interval
            unit
          }
          fileArrival {
            url
          }
          tableUpdate {
            tableNames
            condition
            minTimeBetweenTriggersSeconds
            waitAfterLastChangeSeconds
          }
          model {
            securableName
            condition
          }
        }
        continuous {
          pauseStatus
        }
        emailNotifications {
          onStart
          onSuccess
          onFailure
        }
        tasks {
          taskKey
          task {
            ...JobsAllTasksFragment
          }
          clusterSpec {
            ...ScheduleButtonClusterDetails
          }
        }
        jobClusters {
          ...JobsJobClusterDetails
        }
      }
      activeRuns(first: 5) {
        edges {
          node {
            idInJob
            startTime
            status
            statusV2 {
              ...JobRunStatusFragment
            }
          }
        }
      }
      completedRuns(first: 5) {
        edges {
          node {
            idInJob
            startTime
            status
            statusV2 {
              ...JobRunStatusFragment
            }
          }
        }
      }
    }
    apiError {
      code
      message
    }
    hasMore
    permissionLevels {
      jobId
      isOwner
      permission
    }
  }

  ${I}
  ${g}
  ${a.m}
  ${y}
`;(0,s.J1)`
  fragment CreateScheduleJobResponse on JobsCreateJobResponse {
    jobId
    apiError {
      code
      message
    }
  }
`,(0,s.J1)`
  fragment PauseScheduleJobResponse on JobsUpdateJobResponse {
    apiError {
      code
      message
    }
  }
`,(0,s.J1)`
  fragment ResumeScheduleJobResponse on JobsUpdateJobResponse {
    apiError {
      code
      message
    }
  }
`,(0,s.J1)`
  fragment DeleteScheduleJobResponse on JobsDeleteJobResponse {
    apiError {
      code
      message
    }
  }
`,(0,s.J1)`
  fragment RunScheduleJobResponse on JobsRunNowResponse {
    runId
    apiError {
      code
      message
    }
  }
`;let P=(0,s.J1)`
  fragment GetSingleScheduleJobResponse on JobsGetJobResponse {
    job {
      jobId
      managedBy
      settings {
        name
        schedule {
          quartzCronExpression
          timezoneId
          pauseStatus
        }
        trigger {
          pauseStatus
          periodic {
            interval
            unit
          }
          tableUpdate {
            tableNames
            condition
            minTimeBetweenTriggersSeconds
            waitAfterLastChangeSeconds
          }
        }
        continuous {
          pauseStatus
        }
        emailNotifications {
          onStart
          onSuccess
          onFailure
        }
        tasks {
          taskKey
          clusterSpec {
            ...ScheduleButtonClusterDetails
          }
          task {
            ...JobsAllTasksFragment
          }
        }
        jobClusters {
          ...JobsJobClusterDetails
        }
        performanceTarget
      }
    }
    apiError {
      code
      message
    }
  }

  ${I}
  ${g}
  ${a.m}
`;(0,s.J1)`
  fragment UpdateScheduleJobResponse on JobsUpdateJobResponse {
    apiError {
      code
      message
    }
  }
`},49546:(e,t,n)=>{n.d(t,{K:()=>u,v:()=>l});var s=n(686560),a=n(412836),r=n(844760),i=n(709004);function o(e,t,n,s,a,r,i){try{var o=e[r](i),l=o.value}catch(e){n(e);return}o.done?t(l):Promise.resolve(l).then(s,a)}function l(){return(0,a.IT)({queryKey:["instanceProfiles"],queryFn:()=>(0,r.S)("/ajax-api/2.0/instance-profiles/list").then(e=>{var t;return(t=function*(){if(!e.ok)throw Error((yield e.json()).message);return((yield e.json())?.instance_profiles??[]).map(u())},function(){var e=this,n=arguments;return new Promise(function(s,a){var r=t.apply(e,n);function i(e){o(r,s,a,i,l,"next",e)}function l(e){o(r,s,a,i,l,"throw",e)}i(void 0)})})()}),enabled:"AWS"===(0,s.d)("cloud","AWS")})}function u(){return({instance_profile_arn:e,is_meta_instance_profile:t})=>({value:e,displayName:i.RS.parseInstanceProfileName(e),kind:t?"meta":"standard"})}},143481:(e,t,n)=>{n.d(t,{B:()=>u});var s=n(692738),a=n(141078),r=n(221628),i=n(494989);let o=(0,a.J1)`
  query IsPermittedQuery(
    $accountId: ID!
    $principalType: String!
    $principalId: ID!
    $permission: String!
    $consistencyToken: String!
  ) {
    isPermitted(
      accountId: $accountId
      principalType: $principalType
      principalId: $principalId
      permission: $permission
      consistencyToken: $consistencyToken
    )
      @rest(
        type: "IsPermittedResponse"
        path: "/preview/accounts/access-control/is-permitted?resource=accounts/{args.accountId}/{args.principalType}/{args.principalId}&permission={args.permission}&consistency_token={args.consistencyToken}"
        method: "GET"
      ) {
      errors @type(name: "ApiError") {
        code
        message
        helpUrl
        traceId
      }
      isPermitted
      consistencyToken
    }
  }
`,l=(e,t={})=>(0,a.IT)(o,{variables:e,...t}),u={useIsPermittedQuery:l,useEnhancedIsPermittedQuery:(e,t,n={},a=r.oq.IS_PERMITTED)=>{let[{getEncodedEtag:o},{setEtagQuiet:u}]=(0,r.e3)(a),c=l({...t,principalType:i.qI[e],consistencyToken:o()},n),d=c.data?.isPermitted?.consistencyToken;return(0,s.useEffect)(()=>{d&&u(d)},[d,u]),c}}},203838:(e,t,n)=>{n.d(t,{u:()=>a});let s=(e,t)=>{if(null==t||"__typename"===e)return;return t},a=e=>JSON.stringify(e,s,4)},221628:(e,t,n)=>{n.d(t,{Kl:()=>u,e3:()=>c,oq:()=>o});var s,a=n(610435),r=n(692738),i=n(115234),o=((s={}).RULE_SET="rule-set",s.IS_PERMITTED="is-permitted",s.IS_BILLING_ADMIN="is-billing-admin",s.WORKSPACE_SETTINGS_ASSISTANT="workspace-settings-assistant",s.LLM_PROXY_PARTNER_POWERED="llm_proxy_partner_powered",s.GOVERNED_TAGS="governed-tags",s.GOVERNED_TAGS_ACCOUNT_LEVEL="governed-tags-account-level",s.DISCOVER_PERMISSIONS_ACCOUNT_LEVEL="discover-permissions-account-level",s.WORKSPACE_RESTRICT_SHARING="workspace-restrict-sharing",s);let l=r.createContext(null),u=({children:e})=>{let t=(0,r.useRef)({"is-permitted":{etag:"",encodedEtag:""},"is-billing-admin":{etag:"",encodedEtag:""},"rule-set":{etag:"",encodedEtag:""},"workspace-settings-assistant":{etag:"",encodedEtag:""},llm_proxy_partner_powered:{etag:"",encodedEtag:""},"governed-tags":{etag:"",encodedEtag:""},"governed-tags-account-level":{etag:"",encodedEtag:""},"discover-permissions-account-level":{etag:"",encodedEtag:""},"workspace-restrict-sharing":{etag:"",encodedEtag:""}}),n=(0,i.C)(),s=(0,r.useCallback)(e=>t.current[e].etag,[]),o=(0,r.useCallback)(e=>t.current[e].encodedEtag,[]),u=(0,r.useCallback)((e,n)=>{t.current[e]?.etag!==n&&(t.current[e]={etag:n,encodedEtag:encodeURIComponent(n)})},[]),c=(0,r.useCallback)((e,s)=>{t.current[e]?.etag!==s&&(u(e,s),n())},[n,u]),d=[{etagStateRef:t,getEncodedEtag:o,getEtag:s},{setEtag:c,setEtagQuiet:u}];return(0,a.Y)(l.Provider,{value:d,children:e})},c=e=>{let[{getEncodedEtag:t,getEtag:n},{setEtag:s,setEtagQuiet:a}]=(()=>{let e=r.useContext(l);if(!e)throw Error("useEtagContext must be called within an EtagContext Provider");return e})(),i=(0,r.useCallback)(()=>t(e),[t,e]),o=(0,r.useCallback)(()=>n(e),[n,e]),u=(0,r.useCallback)(t=>s(e,t),[s,e]),c=(0,r.useCallback)(t=>a(e,t),[a,e]);return(0,r.useMemo)(()=>[{getEncodedEtag:i,getEtag:o},{setEtag:u,setEtagQuiet:c}],[i,o,u,c])}},332684:(e,t,n)=>{n.d(t,{u:()=>A});var s=n(610435),a=n(692738),r=n(497895),i=n(339518),o=n(342411),l=n(236574),u=n(932284),c=n(382831),d=n(999785),p=n(848737),m=n(697632),b=n(79570),g=n(939578),f=n(174541),h=n(516919);let v=(0,o.YK)({workerLabel:{id:"5Cecsv",defaultMessage:"Worker type"},driverLabel:{id:"6MVNyF",defaultMessage:"Driver type"},showLess:{id:"oKgTp3",defaultMessage:"Show less"},showMore:{id:"bMqmMf",defaultMessage:"{numHiddenItems} more"},placeholder:{id:"hJ99Dy",defaultMessage:"Select an instance type"}}),y=({value:e,onChange:t,nodeRole:n,options:r,loading:i=!1,disabled:g=!1,disabledReason:f,emptyText:y,placeholder:S,width:P="100%",hideDbuPricing:E=!0,includePools:R=!0,addSameAsWorkerOption:T=!1,id:k})=>{let _,[C,J]=a.useState(""),A=(0,o.tz)(),w=(0,h.wf)(r,!0,h.Yu,A,R),D=e=>(0,h.Nq)(e,E),j=A.formatMessage(v.placeholder),G=r.find(t=>t.value===e);G?_=G.nodeType.description:e&&(_=e);let U=(0,s.FD)(l.A,{componentId:"codegen_webapp_js_clusters_shared_components_instancetypeselectdubois.tsx_122",label:A.formatMessage(n===h.R0.DRIVER?v.driverLabel:v.workerLabel),value:_?[_]:[],emptyText:y,children:[(0,s.Y)(u.g,{disabled:g,withInlineLabel:!1,placeholder:T?A.formatMessage(h.Sp):S??j,onClear:()=>{t?.(void 0)},width:P,id:k}),(0,s.Y)(c.d,{loading:i,matchTriggerWidth:!0,maxHeight:400,children:(0,s.Y)(d.H,{children:(0,s.FD)(p.d,{controlledValue:C,setControlledValue:J,children:[T&&""===C&&(0,s.Y)(m.cr,{value:"",onChange:t,checked:""===e,children:A.formatMessage(h.Sp)},"same-as-worker-no-value"),w.map((n,a)=>(0,h.JB)(n)?(0,s.Y)(I,{optionGroup:n,getNodeTypeDetails:D,selectedValue:e,onChange:t,searchValue:C},a):(0,s.Y)(m.cr,{value:n.value??"",onChange:t,checked:(n.value??"")===e,children:n.label},"same-as-worker"))]})})})]});if(g&&f)return(0,s.Y)(b.m,{componentId:"clusters.instanceType.disabled.tooltip",content:(0,s.Y)("span",{children:f}),children:(0,s.Y)("span",{children:U})});return U},I=({optionGroup:e,getNodeTypeDetails:t,onChange:n,selectedValue:r,searchValue:i})=>{let{options:o,label:l}=e,[u,c]=a.useState(!1),d=o.filter(h.Ix).filter(e=>(e.nodeType.description??"").toLocaleLowerCase().includes(i.toLocaleLowerCase().trim())),p=d.slice(0,5),b=u?d:p,f=Math.max(0,d.length-5);if(0===d.length)return null;return(0,s.FD)(s.FK,{children:[(0,s.Y)(g.y,{children:l}),b.map(e=>(0,s.Y)(m.cr,{value:e.value??"",onChange:n,checked:e.value===r,disabled:e.disabled,disabledReason:(0,h.Yu)(e),hintColumn:t(e.nodeType),children:e.nodeType.description},e.value)),f>0&&(0,s.Y)(S,{onClick:()=>c(e=>!e),isExpanded:u,numHiddenItems:f})]})},S=({isExpanded:e,numHiddenItems:t,onClick:n})=>{let a=(0,o.tz)(),{theme:i}=(0,r.wn)(),l=P(i);return(0,s.FD)("div",{onClick:n,css:(0,f.RB)(i),role:"button",children:[(0,s.Y)("div",{css:l.leftIndent}),(0,s.Y)("label",{css:[(0,f.DQ)({theme:i}),l.label],children:e?a.formatMessage(v.showLess):a.formatMessage(v.showMore,{numHiddenItems:t})})]})},P=e=>({leftIndent:{width:e.spacing.md,flexShrink:0},label:{color:e.colors.actionTertiaryTextDefault}});var E=n(676695),R=n(677933),T=n(74360),k=n(889145);function _(e,t,n,s,a,r,i){try{var o=e[r](i),l=o.value}catch(e){n(e);return}o.done?t(l):Promise.resolve(l).then(s,a)}let C=(0,o.YK)({listNodeTypesErrorText:{id:"pIo8Rk",defaultMessage:"An error occurred while retrieving node types. Refresh the page to try again."},invalidNodeTypeWarningMessage:{id:"YtOHYI",defaultMessage:"You entered an unknown {nodeRole} type in the JSON. This may cause the pipeline to fail."},nonPhotonCompatibleWarningMessage:{id:"fuE1P9",defaultMessage:"The selected instance type is not compatible with Photon. Either select a compatible instance type or disable Photon."},singleNodeClusterInfoMessage:{id:"oqUidE",defaultMessage:"Worker type won't be applied because your compute has no workers"}});function J(e,t){return!!e.nodeType.photon_driver_capable&&t===h.R0.DRIVER||!!e.nodeType.photon_worker_capable&&t===h.R0.WORKER}let A=({nodeRole:e,isPhotonSelected:t,isSingleNodeClusterSelected:n,disabled:l=!1,value:u,onChange:c,...d})=>{let p=(0,o.tz)(),{theme:m}=(0,r.wn)(),b=w(m),[g,f]=(0,a.useState)([]),[v,I]=(0,a.useState)(!1),[S,P]=(0,a.useState)(void 0),A=(0,h.B1)(g).filter(e=>!e.nodeType.is_deprecated&&!e.nodeType.is_hidden).map(n=>{let s=J(n,e);return{...n,disabled:t&&!s,compatibility:{photon_support:!!s,custom_tags:!0,ssh_public_keys:!0,ebs_volume_type:!0,spark_version:!0,min_photon_version_support:!0}}}),D=a.useMemo(()=>new Set(A.map(e=>e.value)),[A]),j=A.find(e=>e.value===u),G=j&&!J(j,e);(0,a.useEffect)(()=>{var e;if(l)return;(e=function*(){I(!0);try{let e=yield new Promise((e,t)=>{E.G.listNodeTypes({data:null,success:t=>{e(t)},error:(0,R.Ft)(n=>{(n.message.includes("UnknownWorkerEnvironmentException")||n.message.includes("does not have any associated worker environments"))&&e(void 0),t(n)})})});if(!e)throw Error(p.formatMessage(C.listNodeTypesErrorText));f(e.node_types)}catch(e){P(p.formatMessage(C.listNodeTypesErrorText)),k.h.logEvent(T.Rj.PIPELINE_SETTINGS_PAGE_ACTION,"listNodeTypesError")}finally{I(!1)}},function(){var t=this,n=arguments;return new Promise(function(s,a){var r=e.apply(t,n);function i(e){_(r,s,a,i,o,"next",e)}function o(e){_(r,s,a,i,o,"throw",e)}i(void 0)})})()},[p,l]);let U={closable:!1,css:b.alert},N=null;return e===h.R0.WORKER&&n?N=(0,s.Y)(i.F,{componentId:"codegen_webapp_js_pipelines_components_pipeline-settings_form-items_advanced-section_pipelineinstancetypeselect.tsx_185",...U,message:p.formatMessage(C.singleNodeClusterInfoMessage),type:"info"}):u&&!D.has(u)?N=(0,s.Y)(i.F,{componentId:"codegen_webapp_js_pipelines_components_pipeline-settings_form-items_advanced-section_pipelineinstancetypeselect.tsx_189",...U,message:p.formatMessage(C.invalidNodeTypeWarningMessage,{nodeRole:e}),type:"warning"}):t&&G&&(N=(0,s.Y)(i.F,{componentId:"codegen_webapp_js_pipelines_components_pipeline-settings_form-items_advanced-section_pipelineinstancetypeselect.tsx_197",...U,message:p.formatMessage(C.nonPhotonCompatibleWarningMessage),type:"warning"})),(0,s.FD)(s.FK,{children:[(0,s.Y)(y,{nodeRole:e,options:A,loading:v,disabled:l,emptyText:S,includePools:!1,value:u,onChange:t=>{k.h.logEvent(T.Rj.PIPELINE_SETTINGS_PAGE_ACTION,"changeNodeType",void 0,{nodeRole:e,oldNodeType:u,newNodeType:t}),c?.(t)},...d}),N]})},w=e=>({alert:{marginTop:e.spacing.sm}})},356964:(e,t,n)=>{n.d(t,{M:()=>a,x:()=>r});var s=n(141078);let a=(0,s.J1)`
  mutation CreateDomain($input: domains_CreateDomainRequestInput!)
  @component(name: "LakehouseCollaboration.DiscoveryAndRecommendation")
  @throwOnFieldError {
    domains_create(input: $input) {
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
    }
  }
`;function r(e){return(0,s.n_)(a,{errorPolicy:"all",...e})}},366997:(e,t,n)=>{n.d(t,{X:()=>l,x:()=>o});var s=n(610435);n(692738);var a=n(342411),r=n(686560),i=n(441535);function o(){return(0,i.W)("databricks.fe.jaws.useJobsPipelineApplyEnvironment",!1)}let l=e=>{if("user"!==e.kind)return{disabled:!1};let t=(0,r.d)("user_new","")!==e.name;return{disabled:t,disabledReason:t?(0,s.Y)(a.sA,{id:"z1tDHC",defaultMessage:"You can only run as yourself or a service principal you have access to"}):void 0}}},402978:(e,t,n)=>{n.d(t,{P:()=>u});var s=n(610435),a=n(802558),r=n.n(a),i=n(692738),o=n(698744),l=n.n(o);class u extends i.Component{max;min;previouslyExpanded;words;static defaultProps={collapserNode:"Show less",delimiter:" ",expanderNode:"Show more",isExpandable:!0,truncatorStr:"...",shouldTokenize:!0,showFullTextOnHover:!1};constructor(e){super(e),this.toggleTruncate=this.toggleTruncate.bind(this),this.setInstanceAttributes(e),this.state={displayText:e.children,truncationHasStarted:!1,truncationIsDone:!1,expanded:!1}}componentDidMount(){if(l().findDOMNode(this).offsetHeight<this.props.maxHeight||this.words.length<2)return;this.shave()}componentDidUpdate(){this.state.truncationHasStarted&&!this.state.truncationIsDone?(this.setMinOrMax(),this.shave()):this.state.truncationIsDone&&this.hasOwnProperty("previouslyExpanded")&&this.setExpandedState()}UNSAFE_componentWillReceiveProps(e){r()(this.props,e)||(this.setInstanceAttributes(e,this.state.expanded),this.setState({displayText:e.children,truncationHasStarted:!1,truncationIsDone:!1,expanded:!1},()=>{this.shave()}))}setInstanceAttributes(e,t){let n=e.children;this.words=e.shouldTokenize?n.split(e.delimiter):n,this.max=this.words.length-1,this.min=0,void 0!==t&&(this.previouslyExpanded=t)}setMinOrMax(){let e=this.max,t=this.min+e+1>>1;if(l().findDOMNode(this).offsetHeight>this.props.maxHeight){let e=this.props.delimiter.length;this.max=this.props.shouldTokenize?t-e:t-(e+1)}else this.min=t}setExpandedState(){this.setState({expanded:this.previouslyExpanded}),delete this.previouslyExpanded}shave(){let e,t=this.props.shouldTokenize,n=this.props.delimiter,s=this.words,a=!1,r=this.max,i=this.min;i<r?e=s.slice(0,i+r+1>>1):(e=s.slice(0,r),a=!0),this.setState({truncationHasStarted:!0,truncationIsDone:a,displayText:t?e.join(n):e})}toggleTruncate(){this.setState({expanded:!this.state.expanded})}renderExpanderNode(){return(0,s.Y)("a",{onClick:this.toggleTruncate,className:"toggle-truncate",children:this.state.expanded?this.props.collapserNode:this.props.expanderNode})}renderTruncationChars(){return(0,s.FD)("span",{className:this.props.truncatorClassName,children:[this.state.expanded?null:this.props.truncatorStr," ",this.props.isExpandable?this.renderExpanderNode():null]})}render(){return(0,s.FD)("div",{className:this.props.className,title:this.props.showFullTextOnHover&&!this.state.expanded?this.props.children:void 0,children:[this.state.expanded?this.props.children:this.state.displayText,this.state.truncationHasStarted?this.renderTruncationChars():null]})}}},436155:(e,t,n)=>{n.d(t,{p:()=>o});var s=n(22937),a=n.n(s),r=n(95894),i=n.n(r);function o(e){return function e(t,n){if(!Array.isArray(t)&&!a()(t))return t;return i()(t,(t,s,r)=>{if((Array.isArray(s)||a()(s))&&(s=e(s,n)),!n(s,r))return;Array.isArray(t)?t.push(s):t[r]=s})}(e,(e,t)=>"__typename"!==t)}},494989:(e,t,n)=>{n.d(t,{F$:()=>S,Fe:()=>T,O$:()=>C,O9:()=>w,QW:()=>P,ee:()=>J,no:()=>A,qI:()=>g,sc:()=>k,tE:()=>_});var s,a,r=n(778529),i=n.n(r);if(13057==n.j)var o=n(441535);if(13057==n.j)var l=n(886100);if(13057==n.j)var u=n(22191);if(13057==n.j)var c=n(747129);if(13057==n.j)var d=n(209908);if(13057==n.j)var p=n(616795);var m=n(819),b=n(842776);let g={[m.JG.GROUP]:"groups",[m.JG.SERVICE_PRINCIPAL]:"servicePrincipals",[m.JG.BUDGET_POLICY]:"budgetPolicies"};var f=((s={}).SERVICE_PRINCIPAL_MANAGER="roles/servicePrincipal.manager",s.SERVICE_PRINCIPAL_USER="roles/servicePrincipal.user",s.GROUP_MANAGER="roles/group.manager",s.GROUP_ASSUMER="roles/group.assumer",s.BUDGET_POLICY_USER="roles/budgetPolicy.user",s.BUDGET_POLICY_MANAGER="roles/budgetPolicy.manager",s);let h={"roles/servicePrincipal.manager":"Manage","roles/servicePrincipal.user":"Use"},v={"roles/budgetPolicy.user":"Serverless budget policy: User","roles/budgetPolicy.manager":"Serverless budget policy: Manager"},y={"roles/budgetPolicy.user":"Serverless usage policy: User","roles/budgetPolicy.manager":"Serverless usage policy: Manager"};function I(e,t){let n=(0,o.W)("databricks.fe.enableAssumeGroupSettingsCheck",!1)?(0,o.W)("excl_data_access",!1):(0,o.W)("databricks.fe.adminUi.enableAssumeGroupUi",!1),s=(0,o.W)("databricks.fe.enableAssumeGroupForRegularGroup",!1);return{"roles/group.manager":e.formatMessage({id:"ilJIQs",defaultMessage:"Manage"}),"roles/group.assumer":(s?n:t&&n)?e.formatMessage({id:"3bK4kM",defaultMessage:"Assume"}):""}}function S(e,t){let n=(0,o.W)("databricks.fe.budget_policy.renameServerlessPolicy",!1);return{...h,...I(e,t?.isExclusive),...n?y:v}}function P(e,t){let n=(0,o.W)("databricks.fe.budget_policy.renameServerlessPolicy",!1);return{[m.JG.GROUP]:Object.entries(I(e,t?.isExclusive)).filter(([e,t])=>t),[m.JG.SERVICE_PRINCIPAL]:Object.entries(h),[m.JG.BUDGET_POLICY]:Object.entries(n?y:v)}}var E=((a=E||{}).CreateRoleToPrincipalsMap="createRoleToPrincipalsMap",a.ConvertGrantRulesToFilterMapGraphQL="convertGrantRulesToFilterMapGraphQL",a.ConvertGrantRulesToClientPermissionsHelper="convertGrantRulesToClientPermissionsHelper",a);let R=e=>{let{eventId:t,isSuccess:n,debugBlob:s}=e;l.iT.sev2BurnRate(u.Es.CustomerPlatform,t,c.i1.P99,c.Ip.Min10,n,s)};function T(e,t){return e.every(e=>t?(e.roles?.length??0)>0&&e.displayName?.length:e.displayName?.length)}function k(e,t){let n,s,{rules:a,...r}=t;return{...r,grantRules:[...(n=Object.values((0,p.G)(e,({principalString:e})=>e)),s=new Map,n.forEach(e=>{let{principalString:t,roles:n}=e;if(!t)return void R({eventId:"createRoleToPrincipalsMap",isSuccess:!1,debugBlob:{permission:e,message:`principalString field was not found on permission: ${e}`}});R({eventId:"createRoleToPrincipalsMap",isSuccess:!0}),n?.forEach(e=>{let n=s.get(e)??new Set;n.add(t),s.set(e,n)})}),s).entries()].map(([e,t])=>({role:e,principals:[...t]}))}}function _(e){let t={[m.JG.GROUP]:new Set,[m.JG.SERVICE_PRINCIPAL]:new Set,[m.JG.USER]:new Set};return e.forEach(e=>{(e.principals??[]).forEach(e=>{let n=e.indexOf("/");if(-1===n)return void R({eventId:"convertGrantRulesToFilterMapGraphQL",isSuccess:!1,debugBlob:{message:`Principal ${e} does not contain a '/' separator`}});let s=e.substring(0,n),a=e.substring(n+1),r=m.qU[s];if(i()(r)||!(r in m.LV))return void R({eventId:"convertGrantRulesToFilterMapGraphQL",isSuccess:!1,debugBlob:{message:`Principal ${e} could not be mapped to a principal type`}});R({eventId:"convertGrantRulesToFilterMapGraphQL",isSuccess:!0});let o=m.LV[r],l=(0,d.IW)(a),u=`${o}="${l}"`;t[r].add(u)})}),{[m.JG.GROUP]:{filter:[...t[m.JG.GROUP]].join(" OR "),principalCount:t[m.JG.GROUP].size},[m.JG.SERVICE_PRINCIPAL]:{filter:[...t[m.JG.SERVICE_PRINCIPAL]].join(" OR "),principalCount:t[m.JG.SERVICE_PRINCIPAL].size},[m.JG.USER]:{filter:[...t[m.JG.USER]].join(" OR "),principalCount:t[m.JG.USER].size}}}function C(e,t,n,s,a){let r,o,l=[...t.map(e=>({principalType:m.JG.GROUP,displayName:e.groupname||""})),...n.map(e=>({principalType:m.JG.SERVICE_PRINCIPAL,displayName:e.fullname||"",applicationId:e.applicationId||""})),...s.map(e=>({principalType:m.JG.USER,displayName:e.fullname,userName:e.email||""}))];return(r=(0,p.G)(l,e=>(0,m.IC)(e)),o=new Map,e.forEach(t=>{if(i()(t))return;let{role:n}=t;(t.principals??[]).forEach(t=>{let s=r[t];if(i()(s))return void R({eventId:"convertGrantRulesToClientPermissionsHelper",isSuccess:!1,debugBlob:{grantRules:e,principals:l,message:`Could not find principal for principal string: ${t}`}});R({eventId:"convertGrantRulesToClientPermissionsHelper",isSuccess:!0});let a=(0,m.p3)(s),u=o.get(t)??{principalString:t,displayName:a},c=u.roles??[];"string"==typeof n&&Object.values(f).includes(n)?o.set(t,{principalString:t,displayName:a,roles:[...new Set([...c,n])]}):o.set(t,u)})}),[...o.values()]).map(e=>({...e,isExclusive:a}))}let J={[m.JG.GROUP]:b.i.UPDATE_GROUP_RULE_SET,[m.JG.SERVICE_PRINCIPAL]:b.i.UPDATE_SERVICE_PRINCIPAL_RULE_SET,[m.JG.BUDGET_POLICY]:b.i.UPDATE_BUDGET_POLICY_RULE_SET},A=()=>(0,o.W)("databricks.fe.budget_policy.displayUsagePolicyModificationImpact",!1),w=()=>!0===(0,o.W)("usage_policy_entitle",null)},500499:(e,t,n)=>{n.d(t,{EU:()=>o,J8:()=>i,Y6:()=>l});var s=n(394018),a=n(620839),r=n(67656);let i=e=>(0,s.J)(["instance profile","instance profiles"],e),o=e=>(0,s.J)(["profile","profiles"],e),l=()=>r.R.getDbGuideUrl(a.A.INSTANCE_PROFILES_URL)},552818:(e,t,n)=>{n.d(t,{_7:()=>l,d4:()=>o,fz:()=>u,gw:()=>i});var s=n(837077),a=n(557200);function r(e){return!!(e&&(0,s.A)(e))}function i(e,t){if(!e)return null;return{__typename:"AclPrincipal",id:e.id?.toString()??null,uniqueName:e.email,displayName:e.fullname,kind:t??(r(e.email)?"ServicePrincipal":"User")}}function o(e){return e.creatorPrincipal??i(e.creatorUser)}function l(e){return e.runAsPrincipal??i(e.runAsUser)}function u(e,t){if((0,a.xf)()){let e=t?.kind;return e?e.toLowerCase():null}return e?r(e)?"serviceprincipal":"user":null}},557200:(e,t,n)=>{n.d(t,{I3:()=>o,UV:()=>i,xf:()=>r});var s=n(441535),a=n(292436);let r=()=>(0,s.W)("databricks.fe.lakeflow.usePrincipals",!1),i=()=>(0,s.W)("excl_data_access",!1)&&(0,s.W)("databricks.fe.lakeflow.enableAssumeGroupForJobsUI",!1)&&r()&&(0,a.Y)(),o=()=>(0,s.W)("databricks.fe.jobs.enableBudgetPolicyGroupImpersonation",!1)},566537:(e,t,n)=>{n.d(t,{p:()=>r});var s=n(610435);n(692738);var a=n(342411);let r={photonTooltipMessage:(0,s.Y)(a.sA,{id:"EVDpO2",defaultMessage:"Photon accelerates modern Apache Spark workloads, reducing your total cost per workload."}),photonAccelerationMessage:(0,s.Y)(a.sA,{id:"8VGomz",defaultMessage:"Use Photon Acceleration"}),photonMlRuntimeMessage:(0,s.Y)(a.sA,{id:"ZWPApX",defaultMessage:"Photon boosts Apache Spark workloads. Not all ML workloads will see an improvement."}),MlPhotonRuntimeMessage:(0,s.Y)(a.sA,{id:"GtLOuW",defaultMessage:"Enables Databricks Runtime for Machine Learning with preinstalled libraries like PyTorch, TensorFlow, XGBoost, and MLflow. {br}{br}Photon can <b>optionally</b> be enabled for this runtime. Photon boosts Spark workloads. Not all ML workloads will see an improvement.",values:{br:(0,s.Y)("br",{})}})}},570677:(e,t,n)=>{n.d(t,{O:()=>r,V:()=>a});var s=n(552818);function a(e,t){switch((0,s.fz)(e,t)??"user"){case"serviceprincipal":return`serviceprincipal.${e}`;case"user":return`user.${e}`;case"group":return`group.${e}`}}function r(e){if(!e)return null;return{kind:(0,s.fz)(e.uniqueName,e)??"user",name:e.displayName||e.uniqueName||"",applicationId:e.uniqueName??void 0,optionId:a(e.uniqueName,e),displayName:e.displayName||e.uniqueName||void 0,id:String(e.id),title:e.displayName||e.uniqueName||""}}},616795:(e,t,n)=>{n.d(t,{G:()=>r});var s=n(778529),a=n.n(s);function r(e,t){return e.reduce((e,n)=>{let s=t(n);if(a()(s))return e;return e[s]=n,e},{})}},644332:(e,t,n)=>{n.d(t,{G:()=>h});var s=n(610435),a=n(668093),r=n.n(a),i=n(632528),o=n.n(i),l=n(692738),u=n(483588),c=n(686560),d=n(552818),p=n(557200),m=n(62947),b=n(186094),g=n(554245),f=n(570677);let h=({id:e,value:t,kind:n,onChange:a,runAsPrincipal:i,disableFn:h,width:v})=>{let y=t?((e,t)=>{if(r()(e))return null;return(0,d.gw)({__typename:"RichUser",id:null,email:e,fullname:null},t)})(t,n):null,I=(0,p.UV)(),S=(0,l.useMemo)(()=>{let e=[i,y].map(f.O).filter(e=>null!==e);return o()(e,e=>e.optionId)},[i,y]),P=(0,b.vd)(),E=(0,b.wK)();return(0,s.Y)(m.T,{allowClear:!1,enableWorkspaceGroups:I,enableAccountGroups:I,value:(0,f.V)(t,y),onUpdate:e=>{let t=Array.isArray(e)?e[0]:e;a((e=>{if(!e)return null;if("user"===e.kind||"group"===e.kind)return e.name;return e.applicationId})(t)??null,t?.kind??null)},id:e,"aria-label":void 0,css:{width:v},initialSubjects:S,disabledFn:h,getPopupContainer:g.g,suggestedChoices:{workspaceUsers:[(0,c.d)("user_new","")],accountServicePrincipals:P,...I&&{workspaceGroups:E}},"data-testid":"run-as-select",provisionSource:u.cMI.PROVISION_SOURCE_JOB})}},653481:(e,t,n)=>{if(n.d(t,{Ef:()=>m,Wj:()=>p,_7:()=>g,mb:()=>b,u7:()=>d}),13057==n.j)var s=n(846947);if(13057==n.j)var a=n(861728);var r=n(141078),i=n(889885);if(13057==n.j)var o=n(221628);if(13057==n.j)var l=n(143481);if(13057==n.j)var u=n(819);if(13057==n.j)var c=n(842776);let d=(0,r.J1)`
  fragment BudgetPolicyFragment on BudgetpolicyBudgetPolicy {
    customTags {
      key
      value
    }
    bindingWorkspaceIds
    limitConfig {
      enforcementEnabled
      limitAmount
      limitType
    }
    rateLimitConfig
    policyId
    policyName
    isEditable @includeSafex(name: "databricks.fe.budget_policy.enableDefaultPolicyAdminAccess", defaultValue: false)
    isDeletable @includeSafex(name: "databricks.fe.budget_policy.enableDefaultPolicyAdminAccess", defaultValue: false)
  }
`,p=e=>f(e,c.i.UPDATE_BUDGET_POLICY_RULE_SET),m=e=>f(e,c.i.UPDATE_BUDGET_POLICY,!(0,s.ok)()),b=e=>f(e,c.i.DELETE_BUDGET_POLICY,!(0,s.ok)()),g=e=>{let{error:t,loading:n}=e,{errors:s,isPermitted:r}=e.data?.isPermitted??{};return s?.[0]||t?a.cR.FAILED_TO_QUERY:n?a.cR.LOADING:r?a.cR.PERMITTED:a.cR.REJECTED},f=(e,t,n=!1)=>{let s=(0,i.FI)("accountId")??"",a=(0,i.FI)("userId");return l.B.useEnhancedIsPermittedQuery(u.JG.BUDGET_POLICY,{accountId:s,principalId:e,permission:t},{skip:!s||!a||n},o.oq.RULE_SET)}},687332:(e,t,n)=>{n.d(t,{pO:()=>P});var s=n(692738),a=n(441535),r=n(141078),i=n(436155),o=n(866691),l=n(16790),u=n(483588),c=n(886100),d=n(22191),p=n(984519);function m(e,t,n,s,a,r,i){try{var o=e[r](i),l=o.value}catch(e){n(e);return}o.done?t(l):Promise.resolve(l).then(s,a)}function b(e){return function(){var t=this,n=arguments;return new Promise(function(s,a){var r=e.apply(t,n);function i(e){m(r,s,a,i,o,"next",e)}function o(e){m(r,s,a,i,o,"throw",e)}i(void 0)})}}let g={major:2,minor:2},f={major:2,minor:0},h=(0,r.J1)`
  mutation ScheduleButton_BaseHooks_UpdateTrigger(
    $jobId: Long!
    $trigger: JobsTriggerSettingsInput
    $schedule: JobsCronScheduleInput
    $continuous: JobsContinuousSettingsInput
    $externalApiVersion: ExternalApiVersion!
  ) @component(name: "Workflows.Service.ScheduleButton") {
    jobsUpdateJob(
      input: {
        jobId: $jobId
        newSettings: { trigger: $trigger, schedule: $schedule, continuous: $continuous }
        externalApiVersion: $externalApiVersion
      }
    ) {
      apiError {
        code
        message
      }
    }
  }
`,v=(0,r.J1)`
  mutation ScheduleButton_BaseHooks_DeleteJob($jobId: Long!) @component(name: "Workflows.Service.ScheduleButton") {
    jobsDeleteJob(input: { jobId: $jobId }) {
      apiError {
        code
        message
      }
    }
  }
`,y=(0,r.J1)`
  mutation ScheduleButton_BaseHooks_RunJob($jobId: Long!, $externalApiVersion: ExternalApiVersion!)
  @component(name: "Workflows.Service.ScheduleButton") {
    jobsRunNow(input: { jobId: $jobId, externalApiVersion: $externalApiVersion }) {
      runId
      apiError {
        code
        message
      }
    }
  }
`,I=(0,r.J1)`
  query ScheduleButton_BaseHooks_GetSingleJob(
    $jobId: Long!
    $includeSubscriptions: Boolean = false
    $includeSourceInDbtAndSqlFile: Boolean = false
    $includeJobInRunJobTask: Boolean = false
    $includeJobParameters: Boolean = false
  ) @component(name: "Workflows.Service.ScheduleButton") {
    jobsGetJob(input: { jobId: $jobId }) {
      ...GetSingleScheduleJobResponse
    }
  }
  ${l.Gq}
`,S=()=>(0,a.W)("databricks.fe.lakeflow.scheduleButton.api22.enabled",!0)?g:f;function P(){let e=(e,t,n,s)=>b(function*(){let a=parseInt(n,10),{data:r}=yield e.query({query:I,variables:{jobId:a},fetchPolicy:"no-cache",errorPolicy:"all"}),o=function(e,t){if(!e||!e.jobsGetJob||!e.jobsGetJob.job)throw Error("Missing job data for usePauseJob mutation");let n=e.jobsGetJob.job.settings?.trigger,s=e.jobsGetJob.job.settings?.schedule,a=e.jobsGetJob.job.settings?.continuous;return n&&(n={...n,pauseStatus:t}),s&&(s={...s,pauseStatus:t}),a&&(a={...a,pauseStatus:t}),{jobsGetJob:{job:{...e.jobsGetJob.job,settings:{...e.jobsGetJob.job.settings,trigger:n,schedule:s,continuous:a}}}}}(r,s),l=(0,i.p)(o);return yield t({variables:{jobId:a,trigger:l.jobsGetJob.job.settings?.trigger,schedule:l.jobsGetJob.job.settings?.schedule,continuous:l.jobsGetJob.job.settings?.continuous,externalApiVersion:S()}})})();return{usePauseJob:({variables:t})=>{let n=(0,r.mK)(),[s,a]=(0,r.n_)(h,{refetchQueries:[(0,o.P)()]});return[t=>b(function*(){if(!t||!t.variables)throw Error("Missing variables for usePauseJob mutation");let a=yield e(n,s,t.variables.jobId,u.usk.PAUSED);return{data:{jobsPauseJob:a.data?.jobsUpdateJob??null}}})(),{...a,data:{jobsPauseJob:a.data?.jobsUpdateJob??null}}]},useResumeJob:({variables:t})=>{let n=(0,r.mK)(),[s,a]=(0,r.n_)(h,{refetchQueries:[(0,o.P)()]});return[t=>b(function*(){if(!t||!t.variables)throw Error("Missing variables for useResumeJob mutation");let a=yield e(n,s,t.variables.jobId,u.usk.UNPAUSED);return{data:{jobsResumeJob:a.data?.jobsUpdateJob??null}}})(),{...a,data:{jobsResumeJob:a.data?.jobsUpdateJob??null}}]},useDeleteJob:({variables:e})=>{let[t,n]=(0,r.n_)(v,{variables:{jobId:e.jobId},refetchQueries:[(0,o.P)()]});return[t,n]},useRunJob:({variables:e})=>{let[t,n]=(0,r.n_)(y,{variables:{jobId:parseInt(e.jobId,10),externalApiVersion:S()},refetchQueries:[(0,o.P)()]});return[e=>{if(!e||!e.variables)throw Error("Missing variables for useRunJob mutation");return t({variables:{jobId:parseInt(e.variables?.jobId,10),externalApiVersion:S()}})},n]},useGetSingleJob:({variables:e,skip:t})=>{let{data:n,loading:s,error:a,refetch:i}=(0,r.IT)(I,{variables:{jobId:e.jobId},fetchPolicy:"cache-and-network",skip:t||e?.jobId===void 0||e?.jobId===null});return{data:n,loading:s,error:a,refetch:i}},useCloneJob:({variables:e})=>{let[t,n]=(0,s.useState)(!1),[a,i]=(0,s.useState)(void 0),o=(0,r.mK)(),l=()=>{i(void 0),n(!1)},u=e=>({data:e,loading:t,error:void 0,called:!0,client:o,reset:l});return[e=>b(function*(){l(),n(!0);try{if(!p.c.isAvailable())throw c.iT.sev2(d.Es.WorkflowsServiceScheduleButton,"useJobsSchedulingBaseHooks:useCloneJob:CloneJobRpc is not available. Please ensure the service is running and accessible.",{stack:Error().stack}),Error("CloneJobRpc is not available. Please ensure the service is running and accessible.");let t=yield p.c.call({jobId:e.variables.jobId.toString()}),n={jobsCloneJob:{__typename:"JobsCreateJobResponse",jobId:t.jobId,apiError:null}};return i(n),u(n)}catch(t){let e={jobsCloneJob:{__typename:"JobsCreateJobResponse",jobId:null,apiError:{__typename:"ApiError",code:"",message:t.message}}};return i(e),u(e)}finally{n(!1)}})(),{data:a,loading:t,error:void 0,called:!0,client:o,reset:l}]}}}},690257:(e,t,n)=>{n.d(t,{e:()=>c});var s=n(610435);n(692738);var a=n(964133),r=n(382908),i=n(342411),o=n(56579),l=n(620839),u=n(67656);let c=({nextIdentity:e})=>{if(!e)return(0,s.Y)(s.FK,{});return(0,s.Y)(a.D.Message,{type:"info",message:(0,s.FD)(s.FK,{children:[(0,s.Y)(i.sA,{id:"oBZrDL",defaultMessage:"This {isServicePrincipal, select, true {service principal} other {user}} must have permissions to the notebooks and source datasets, as well as target catalog and schema to run the pipeline successfully. <a>Access control in Databricks</a>",values:{isServicePrincipal:(0,o.e)(e),a:e=>(0,s.Y)(r.o.Link,{componentId:"PipelineRunAsChangeMessages.permissionsWarning.docLink",href:u.R.getDbGuideUrl(l.A.ACL_URL),openInNewTab:!0,children:e})}}),(0,s.Y)("br",{}),(0,s.Y)("br",{}),(0,s.Y)(i.sA,{id:"526wsz",defaultMessage:"Changing run-as of the pipeline changes the owner of all datasets produced by the pipeline."})]})})}},709004:(e,t,n)=>{n.d(t,{$9:()=>f,QI:()=>S,RS:()=>g,UU:()=>I,er:()=>y,nr:()=>v,zw:()=>h});var s=n(610435);if(n(692738),13057==n.j)var a=n(403166);if(13057==n.j)var r=n(764236);if(13057==n.j)var i=n(382908);var o=n(342411);if(13057==n.j)var l=n(419374);var u=n(500499),c=n(402978);if(13057==n.j)var d=n(620839);if(13057==n.j)var p=n(67656);let m=/^arn:aws(-[^:]+)?:iam::(\d+):instance-profile\/(\S+)$/,b=/^arn:aws(-[^:]+)?:iam::(\d+):role\/(\S+)$/;class g{static isValidAccountId(e){return/^[0-9- ]{9,15}$/.test(e)}static parseInstanceProfileName(e){let t=m.exec(e);if(t&&4===t.length&&g.isValidAccountId(t[2]))return t[3]}static parseIamRoleName(e){let t=b.exec(e);if(t&&4===t.length)return t[3]}static get invalidArnSyntaxMsg(){return(0,s.FD)("div",{children:[(0,s.Y)("span",{children:(0,s.Y)(o.sA,{id:"axlgo0",defaultMessage:"An instance profile ARN should look like:"})}),(0,s.Y)("br",{}),(0,s.Y)("span",{children:'"arn:aws<partition>:iam::<account>:instance-profile/<role-name>"'})]})}static get invalidRoleSyntaxMsg(){return(0,s.FD)("div",{children:[(0,s.Y)("span",{children:(0,s.Y)(o.sA,{id:"fCFGoz",defaultMessage:"An IAM role ARN should look like:"})}),(0,s.Y)("br",{}),(0,s.Y)("span",{children:'"arn:aws<partition>:iam::<account>:role/<role-name>"'})]})}static getVerificationErrorMsg(e){return(0,s.FD)("div",{children:[(0,s.Y)(c.P,{maxHeight:40,className:"error",children:e}),(0,s.Y)("span",{children:(0,s.Y)(o.sA,{id:"v6mc7o",defaultMessage:'In rare cases, the validation error is due to an AWS unavailability or misconfiguration, rather than an actual permission issue. In this case, you can skip the validation and forcibly add an {getInstanceProfileLabel} by selecting "skip validation". If you do this, please try creating a cluster with the {getProfileLabel} to make sure it works properly.',values:{getInstanceProfileLabel:(0,u.J8)(),getProfileLabel:(0,u.EU)()}})})]})}static getInstanceProfileSkipValidationTooltip(){return(0,s.Y)("span",{children:(0,s.Y)(o.sA,{id:"O1uDY7",defaultMessage:"Databricks validates that it has sufficient permissions to launch instances with the instance profile. This validation uses AWS dry-run mode for the RunInstances API. If validation fails with an error message that does not indicate an IAM related permission issue, (e.g. “Your requested instance type is not supported in your requested Availability Zone”), you may skip the validation and forcibly add the instance profile."})})}static getInstanceProfileSkipValidationConfirmationText(){return(0,s.Y)("span",{children:(0,s.Y)(o.sA,{id:"jzTCsj",defaultMessage:"Databricks will not validate that this instance profile provides sufficient permissions to launch instances."})})}}function f(){let e=`
    The instance profile ARN can be found in the AWS web UI by navigating to the IAM console,
    searching for the role name, and clicking on the role.`;return(0,s.Y)(a.U,{popoverProps:{maxWidth:400},children:e})}function h(){let e=`
    The IAM role ARN can be found in the AWS web UI by navigating to the IAM console,
    searching for the role name, and clicking on the role.`;return(0,s.Y)(a.U,{popoverProps:{maxWidth:400},children:e})}function v(){return(0,s.Y)(a.U,{popoverProps:{maxWidth:400},children:(0,s.Y)("span",{children:(0,s.Y)(o.sA,{id:"9RQCOH",defaultMessage:"Meta Instance Profiles are used to assume the role of the user executing code on the cluster. Ensure that they have permission to assume all IAM Roles that will be used on the cluster. <link>Learn more</link>",values:{link:e=>(0,s.FD)(s.FK,{children:[(0,s.Y)(r.h,{}),(0,s.Y)(i.o.Link,{componentId:"codegen_webapp_js_user_menu_instance_profiles_instanceprofilesutils.tsx_171",openInNewTab:!0,href:p.R.getDbGuideUrl(d.A.INSTANCE_PROFILES_META_URL),children:e})]})}})})})}let y=()=>(0,s.Y)(a.U,{popoverProps:{maxWidth:400},children:(0,s.Y)("span",{children:(0,s.Y)(o.sA,{id:"OvhS31",defaultMessage:"Databricks validates that it has sufficient permissions to launch instances with the instance profile. This validation uses AWS dry-run mode for the RunInstances API. If validation fails with an error message that does not indicate an IAM related permission issue, (e.g. “Your requested instance type is not supported in your requested Availability Zone”), you may skip the validation and forcibly add the instance profile."})})}),I=()=>l.p.metaInstanceProfilesEnabled(),S=()=>l.p.enableCredentialPassthroughByTier()},716842:(e,t,n)=>{n.d(t,{V1:()=>m,ve:()=>v,sW:()=>h,P1:()=>f});var s=n(141078),a=n(886100),r=n(22191),i=n(911489),o=n(436155),l=n(326650),u=n.n(l),c=n(866691),d=n(687332),p=n(692738);let m=(0,s.J1)`
  mutation ScheduleButton_CreateJob($settings: JobsJobSettingsInput!)
  @component(name: "Workflows.Service.ScheduleButton") {
    jobsCreateJob(input: { settings: $settings }) {
      jobId
      apiError {
        ...PipelineApiErrorFields
      }
    }
  }
  ${i.n}
`,b=(0,s.J1)`
  mutation ScheduleButton_UpdateJob($jobId: Long!, $settings: JobsJobSettingsInput!, $fieldsToRemove: [String!])
  @component(name: "Workflows.Service.ScheduleButton") {
    jobsUpdateJob(input: { jobId: $jobId, newSettings: $settings, fieldsToRemove: $fieldsToRemove }) {
      apiError {
        ...PipelineApiErrorFields
      }
    }
  }
  ${i.n}
`,g=["budgetPolicyId","performanceTarget"];function f(e){return function({variables:t,skip:n,pollInterval:a}){let{data:r,loading:i,error:o,refetch:l}=(0,s.IT)(c.Z,{variables:{filterBy:e.filterBy,limit:10,offset:0,...t},fetchPolicy:"cache-and-network",skip:n,pollInterval:a});return{data:r,loading:i,error:o,refetch:l}}}function h(){let e=(0,s.mK)();return(0,p.useCallback)(()=>e.refetchQueries({include:[(0,c.P)()]}),[e])}function v({queryJobsConfig:e,createJobConfig:t}){let n=f(e),i=function({variables:e}){let[n,i]=(0,s.n_)(m,{variables:e,refetchQueries:[(0,c.P)()]});return[e=>{let s=e?.variables?.settings,i=s?.tasks?.[0]??{},o={...s,jobClusters:s?.jobClusters??[],tasks:[i]},l=t.applyJobSettings?.(o)??{};Object.keys(l).filter(e=>!g.includes(e)).length>0&&a.iT.sev2(r.Es.WorkflowsServiceScheduleButton,"jobs.scheduleButton.useUseCreateJob:Unexpected fields in appliedJobSettings",l,!0);let u=Object.fromEntries(g.map(e=>[e,l[e]]));return n({variables:{settings:{...s,...u,tasks:[t.applyTaskSettings(o)]}}})},i]};return{...(0,d.pO)(),useQueryJobs:n,useCreateJob:i,useUpdateJob:({variables:e,context:t})=>{let[n,a]=(0,s.n_)(b,{variables:e,refetchQueries:[(0,c.P)()]});return[e=>{var s,a;let r=(0,o.p)(e)?.variables,i=["continuous","trigger","schedule","task"],l=r?.settings,{clusterSpecToRemove:c}=function(e){if(e?.tasks?.[0].clusterSpec===null){let t=e?.tasks?.[0]?.taskKey;return{clusterSpecToRemove:[`tasks/${t}/cluster_spec`]}}return{clusterSpecToRemove:[]}}(l);i=i.concat(c);let{jobClustersToRemove:d}=(s=t?.jobClusters??[],a=l?.jobClusters??[],{jobClustersToRemove:u()(s,a,"jobClusterKey").map(e=>`job_clusters/${e.jobClusterKey}`)});return i=i.concat(d),n({variables:{...r,fieldsToRemove:i}})},a]}}}},829642:(e,t,n)=>{n.d(t,{I:()=>i});var s=n(610435),a=n(524178);n(692738);var r=n(79570);function i({onClick:e,onTooltipHide:t,name:n,title:o,className:l,style:u,tooltip:c,spin:d=!1,size:p,fixedWidth:m=!1,rotate:b,...g}){let f=(0,s.Y)("i",{"aria-label":o,title:o,...g,className:(0,a.A)("fa",`fa-${n}`,{[`fa-${p}`]:void 0!==p,"fa-spin":d,"fa-fw":m},l),style:{textAlign:"center",...u,...e?{cursor:"pointer"}:{},...b?{transform:`rotate(${b}deg)`}:{}},onClick:t=>{if(!e)return;t.preventDefault(),e(t)}});if(c)return(0,s.Y)(r.m,{componentId:"ui_building_blocks.icon.tooltip",content:c,side:"bottom",children:f});return f}},829845:(e,t,n)=>{n.d(t,{BC:()=>g,E$:()=>y,PT:()=>h,Th:()=>v,UA:()=>I,dG:()=>p,rD:()=>b,tg:()=>f,x3:()=>m});var s=n(820097),a=n(571739),r=n(437475),i=n(322227),o=n(242995),l=n(75036),u=n(751097),c=n(659573),d=n(311529);let p=(e,t,n,s)=>i.x.call({name:e,internalName:t,initialOpenFolderName:n,initialOpenFolderInternalName:s}),m=e=>a.z.call(e),b=e=>s.Z.call(e),g=e=>r.V1.call(e),f=(e,t,n)=>d.x.call({name:e,internalName:t,...n}),h=e=>c.v.call(e),v=e=>l.e.call(e),y=e=>o.h.call(e),I=e=>u.x.call(e)},842776:(e,t,n)=>{n.d(t,{i:()=>a});var s,a=((s={}).GET_SERVICE_PRINCIPAL_RULE_SET="servicePrincipal.ruleSet/get",s.UPDATE_SERVICE_PRINCIPAL_RULE_SET="servicePrincipal.ruleSet/update",s.GET_GROUP_RULE_SET="group.ruleSet/get",s.UPDATE_GROUP_RULE_SET="group.ruleSet/update",s.UPDATE_GROUP="group/update",s.UPDATE_BUDGET_POLICY_RULE_SET="budgetPolicy.ruleSet/update",s.GET_BUDGET_POLICY_RULE_SET="budgetPolicy.ruleSet/get",s.USE_BUDGET_POLICY="budgetPolicy/use",s.MANAGE_BUDGET_POLICY="budgetPolicy/manage",s.CREATE_BUDGET_POLICY="budgetPolicy/create",s.DELETE_BUDGET_POLICY="budgetPolicy/delete",s.UPDATE_BUDGET_POLICY="budgetPolicy/update",s.GET_BUDGET_POLICY="budgetPolicy/get",s)},861728:(e,t,n)=>{if(n.d(t,{NS:()=>c,YQ:()=>o,cR:()=>l,i0:()=>u,tE:()=>i}),13057==n.j)var s,a=n(610435);if(13057==n.j)var r=n(956935);n(692738);let i=Function.prototype,o=({title:e,align:t})=>(0,a.Y)("div",{title:e,css:(0,r.AH)("text-align:",t||"left",";"),children:"-"});var l=((s={}).LOADING="loading",s.FAILED_TO_QUERY="failedToLoad",s.PERMITTED="permitted",s.REJECTED="rejected",s);let u=e=>!!(e?.startsWith("databricks:default")||e?.startsWith("databricks-default-policy")),c=e=>e?.policyName==="databricks-unrestricted-policy"},866691:(e,t,n)=>{n.d(t,{P:()=>i,Z:()=>r});var s=n(141078),a=n(16790);let r=(0,s.J1)`
  query ScheduleButton_QueryJobsByTask(
    $filterBy: JobsQueryJobsFilterByInput!
    $limit: Int!
    $offset: Int!
    $includeSubscriptions: Boolean = false
    $includeSourceInDbtAndSqlFile: Boolean = false
    $includeJobInRunJobTask: Boolean = false
    $includeJobParameters: Boolean = false
  ) @component(name: "Workflows.Service.ScheduleButton") {
    jobsQueryJobs(
      input: { filterBy: $filterBy, expandTasks: true, limit: $limit, offset: $offset, includePermissionLevels: true }
    ) {
      ...ScheduleButtonListResponse
    }
  }

  ${a.ld}
`;function i(){return(0,s.n4)(r)??"ScheduleButton_QueryJobsByTask"}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/22442.4e5fcd760f.chunk.js.map