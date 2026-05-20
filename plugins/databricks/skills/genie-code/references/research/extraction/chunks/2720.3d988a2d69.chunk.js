"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[2720],{3951:(e,s,t)=>{t.d(s,{g:()=>u,j:()=>d});var n=t(610435),a=t(692738),o=t(79128),r=t(802582),i=t(382908),l=t(342411);let u=a.forwardRef(({numberOfSchedules:e=0,hasMore:s=!1,disabled:t,size:a,disabledReason:i,scheduleTypeId:u,showScheduleCount:c=!0,...g},b)=>{let p=(0,n.FD)(o.$n,{componentId:"codegen_jobs-scheduling_src_schedule-button_schedulebuttonui_schedulebuttonui.tsx_15","data-testid":`unified-schedule-button-${u}`,...g,ref:b,disabled:t,size:a,children:[(0,n.Y)(l.sA,{id:"8DAW0O",defaultMessage:"Schedule"}),c&&(0,n.Y)(d,{schedulesLength:e,pageSize:e,hasMore:s,style:{color:"inherit"}})]});if(t&&i)return(0,n.Y)(r.p,{title:i,children:p});return p});function d({hasMore:e,pageSize:s,schedulesLength:t,style:a,bold:o}){let r=(0,l.tz)();if(t>0){let l=e?r.formatMessage({id:"r9SU0i",defaultMessage:"{pageSize}+"},{pageSize:s}):t.toString();return(0,n.FD)(i.o.Text,{size:"md",style:a,bold:o,children:["\xa0",`(${l})`]})}return null}},16790:(e,s,t)=>{t.d(s,{Gq:()=>v,ld:()=>k});var n=t(141078),a=t(202855),o=t(831358);let r=(0,n.J1)`
  fragment RunStateFragment on JobsRunState {
    durationWarningExceeded
    lifeCycleState
    resultState
    stateMessage
    userCancelledOrTimedout
    queueReason @include(if: $includeQueueReason)
  }
`;(0,n.J1)`
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
`;let i=(0,n.J1)`
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

  ${r}
`,l=(0,n.J1)`
  fragment JobRunTriggerInfoWebShared on JobsRunTriggerInfo {
    runJobTask {
      runId
      jobId
      taskKey
      parentRunId
    }
  }
`,u=(0,n.J1)`
  fragment JobRunDetailsSectionFragment on JobsRun {
    ...RunDetailsSectionFragmentWebShared
    trigger
    triggerInfo {
      ...JobRunTriggerInfoWebShared
    }
    runName
  }

  ${l}
  ${i}
`,d=(0,n.J1)`
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
`,c=(0,n.J1)`
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
`,g=(0,n.J1)`
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
`,b=(0,n.J1)`
  fragment JobsNewClusterDetails on JobsClusterSpecNewCluster {
    attrs {
      ...ClusterClusterAttributesWebShared
    }
    size {
      ...ClusterClusterSizeWebShared
    }
  }
  ${d}
  ${c}
`,p=(0,n.J1)`
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
  ${g}
  ${b}
`,m=(0,n.J1)`
  fragment JobsJobClusterDetails on JobsJobCluster {
    jobClusterKey
    newCluster {
      ...JobsNewClusterDetails
    }
  }
  ${b}
`,f=(0,n.J1)`
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
`,h=(0,n.J1)`
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

  ${i}
  ${o.j}
  ${o.E}
`,S=(0,n.J1)`
  fragment RunJobParameter on JobsRunJobLevelParameters {
    name
    default
    value
  }
`;(0,n.J1)`
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
  ${p}
  ${m}
  ${u}
  ${h}
  ${f}
  ${S}
`,(0,n.J1)`
  fragment JobRunStateFragment on JobsRunState {
    durationWarningExceeded
    lifeCycleState
    resultState
    stateMessage
    userCancelledOrTimedout
    queueReason
  }
`;let I=(0,n.J1)`
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
`,y=(0,n.J1)`
  fragment ScheduleButtonClusterDetails on JobsClusterSpec {
    jobClusterKey
    newCluster {
      ...JobsNewClusterDetails
    }
    existingClusterId
  }

  ${b}
`,k=(0,n.J1)`
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

  ${y}
  ${m}
  ${a.m}
  ${I}
`;(0,n.J1)`
  fragment CreateScheduleJobResponse on JobsCreateJobResponse {
    jobId
    apiError {
      code
      message
    }
  }
`,(0,n.J1)`
  fragment PauseScheduleJobResponse on JobsUpdateJobResponse {
    apiError {
      code
      message
    }
  }
`,(0,n.J1)`
  fragment ResumeScheduleJobResponse on JobsUpdateJobResponse {
    apiError {
      code
      message
    }
  }
`,(0,n.J1)`
  fragment DeleteScheduleJobResponse on JobsDeleteJobResponse {
    apiError {
      code
      message
    }
  }
`,(0,n.J1)`
  fragment RunScheduleJobResponse on JobsRunNowResponse {
    runId
    apiError {
      code
      message
    }
  }
`;let v=(0,n.J1)`
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

  ${y}
  ${m}
  ${a.m}
`;(0,n.J1)`
  fragment UpdateScheduleJobResponse on JobsUpdateJobResponse {
    apiError {
      code
      message
    }
  }
`},218495:(e,s,t)=>{t.d(s,{i:()=>a});var n=t(305535);function a({quartzCronExpression:e,timezoneId:s,intl:t}){let r,i=o(s||"UTC",t.locale);return(0,n.po)({cron:(6===(r=e.trim().split(/[ ]+/)).length&&(r[0]="0"),r.join(" ")),intl:t,timezoneId:i,options:{capitalize:!0,throwExceptionOnParseError:!0,dayOfWeekStartIndexZero:!1}})}let o=(e,s)=>{if(!e)return"UTC";let t=new Date;try{let n=new Intl.DateTimeFormat(s,{timeZone:e,timeZoneName:"short"}).formatToParts(t).find(e=>"timeZoneName"===e.type);return n?n.value.replace("GMT","UTC"):""}catch(e){return"UTC"}}},310563:(e,s,t)=>{t.d(s,{Kl:()=>h,O4:()=>f});var n=t(610435);t(692738);var a=t(687828),o=t(497895),r=t(79128),i=t(241393),l=t(487404),u=t(802582),d=t(342411),c=t(763835),g=t(217985),b=t(568569),p=t(773631);let m=({action:e,scheduleInstanceId:s,disabled:t,title:o,danger:r,disabledReason:i})=>{if(!e)return null;return(0,n.Y)(a.Item,{componentId:"codegen_jobs-scheduling_src_schedule-button_scheduleslist_actionbutton.tsx_43",onClick:()=>e(s),disabled:t,danger:r,disabledReason:i,children:o})};function f({schedule:e,canEdit:s,canRunNow:t,onEdit:l,onPause:u,onDelete:b,onRunNow:h,onResume:S,onClone:v,viewLabel:R,hideEdit:M,hideViewInWorkflows:j,scheduleTypeId:J,canEditInPlace:E,loading:C,getActionsToHide:T}){let{theme:D}=(0,o.wn)(),_=e.jobId,A=s=>{let t=T?.(e.settings);return!t?.some(e=>e===s)};return(0,n.FD)(a.Root,{modal:!1,children:[(0,n.Y)(a.Trigger,{asChild:!0,children:(0,n.Y)(r.$n,{componentId:"codegen_jobs-scheduling_src_schedule-button_scheduleslist_actionbutton.tsx_81",icon:(0,n.Y)(i.A,{}),loading:C,size:"small","aria-label":"Schedule actions"})}),(0,n.FD)(a.Content,{align:"start",side:"right",minWidth:130,css:{[D.responsive.mediaQueries.xs]:{maxWidth:"calc(var(--radix-dropdown-menu-content-available-width))"}},children:[!M&&A("EDIT")&&(0,n.Y)(I,{schedule:e,canEdit:s,onEdit:l,canEditInPlace:E}),h&&A("RUN")&&(0,n.Y)(m,{action:h,scheduleInstanceId:_,disabled:!t,disabledReason:t?void 0:k.noPermissionToRunNow,title:e.settings&&(0,p.kQ)(e.settings)&&!(0,p.Ms)(e.settings)?(0,n.Y)(d.sA,{id:"IX5kKy",defaultMessage:"Restart"}):(0,n.Y)(d.sA,{id:"Weq2pF",defaultMessage:"Run now"})}),y(e)&&!(0,p.Ms)(e.settings)&&u&&A("PAUSE")&&(0,n.Y)(m,{action:u,scheduleInstanceId:_,disabled:!s,disabledReason:s?void 0:k.noPermissionToPause,title:(0,n.Y)(d.sA,{id:"WNYgyP",defaultMessage:"Pause"})}),y(e)&&(0,p.Ms)(e.settings)&&S&&A("RESUME")&&(0,n.Y)(m,{action:S,scheduleInstanceId:_,disabled:!s,disabledReason:s?void 0:k.noPermissionToResume,title:(0,n.Y)(d.sA,{id:"xrouNN",defaultMessage:"Resume"})}),v&&A("CLONE")&&(0,n.Y)(m,{action:v,scheduleInstanceId:_,title:(0,n.Y)(d.sA,{id:"4CZckB",defaultMessage:"Clone"})}),(0,n.Y)(a.Item,{componentId:"codegen_jobs-scheduling_src_schedule-button_scheduleslist_actionbutton.tsx_170",asChild:!0,children:!j&&A("VIEW")&&(0,n.Y)(g.N,{componentId:"codegen_jobs-scheduling_src_schedule-button_scheduleslist_actionbutton.tsx_172",to:(0,c.Uc)().jobDetails({jobId:e.jobId}),asTypographyLink:!0,children:R||(0,n.Y)(d.sA,{id:"mh4h6I",defaultMessage:"View in Jobs"})})}),b&&A("DELETE")&&(0,n.Y)(m,{action:b,scheduleInstanceId:_,disabled:!s,disabledReason:s?void 0:k.noPermissionToDelete,title:(0,n.Y)(d.sA,{id:"yg0Lq7",defaultMessage:"Delete"}),danger:!0})]})]})}function h({onRunNow:e,schedule:s,onResume:t,customActionsComponent:a,...r}){let{theme:i}=(0,o.wn)();return(0,n.FD)("div",{style:{display:"flex",alignItems:"center",flexDirection:"row",paddingRight:i.spacing.sm,gap:i.spacing.sm},children:[y(s)&&t&&(0,p.Ms)(s.settings)&&!r.loading&&(0,n.Y)(S,{onResume:t,schedule:s,canEdit:r.canEdit}),a&&(0,n.Y)(a,{schedule:s}),(0,n.Y)(l.f,{children:(0,n.Y)(f,{schedule:s,...r,onResume:t,onRunNow:e})})]})}function S({schedule:e,onResume:s,canEdit:t}){let a=(0,n.Y)(r.$n,{componentId:"codegen_jobs-scheduling_src_schedule-button_scheduleslist_actionbutton.tsx_191",size:"small",type:"tertiary",onClick:()=>{s?.(e.jobId)},"aria-label":"Resume schedule",title:"Resume schedule",disabled:!t,children:(0,n.Y)(d.sA,{id:"+OU8I2",defaultMessage:"Resume"})});return t?a:(0,n.Y)(u.p,{title:k.noPermissionToResume,children:a})}function I({canEdit:e,onEdit:s,canEditInPlace:t,schedule:o}){if(!e)return(0,n.Y)(a.Item,{componentId:"codegen_jobs-scheduling_src_schedule-button_scheduleslist_actionbutton.tsx_290",disabled:!0,disabledReason:k.noPermissionToEdit,children:(0,n.Y)(d.sA,{id:"TOq1/Q",defaultMessage:"Edit"})});if(t)return(0,n.Y)(m,{action:s,scheduleInstanceId:o.jobId,title:(0,n.Y)(d.sA,{id:"TOq1/Q",defaultMessage:"Edit"})});return(0,n.Y)(a.Item,{componentId:"codegen_jobs-scheduling_src_schedule-button_scheduleslist_actionbutton.tsx_313",asChild:!0,children:(0,n.FD)(g.N,{componentId:"codegen_jobs-scheduling_src_schedule-button_scheduleslist_actionbutton.tsx_309",to:(0,c.Uc)().jobDetails({jobId:o.jobId,view:"tasks"}),asTypographyLink:!0,children:[(0,n.Y)(d.sA,{id:"vIu7J9",defaultMessage:"Edit in Jobs"}),(0,n.Y)(a.HintRow,{children:o.settings?.tasks?.length===1?(0,n.Y)(d.sA,{id:"DTJ1aD",defaultMessage:"Jobs without a schedule trigger type can only be edited in Jobs"}):(0,n.Y)(d.sA,{id:"yy2IzQ",defaultMessage:"Multitask jobs can be edited only in Jobs"})})]})})}function y(e){return(0,p.Ze)(e.settings,b.Gc)}let k={noPermissionToEdit:(0,n.Y)(d.sA,{id:"v2bWyM",defaultMessage:"No permission to edit"}),noPermissionToPause:(0,n.Y)(d.sA,{id:"xhov9P",defaultMessage:"No permission to pause"}),noPermissionToResume:(0,n.Y)(d.sA,{id:"FG2Bp9",defaultMessage:"No permission to resume"}),noPermissionToRunNow:(0,n.Y)(d.sA,{id:"Rlhgoc",defaultMessage:"No permission to run now"}),noPermissionToDelete:(0,n.Y)(d.sA,{id:"fTXzr4",defaultMessage:"No permission to delete"})}},436155:(e,s,t)=>{t.d(s,{p:()=>i});var n=t(22937),a=t.n(n),o=t(95894),r=t.n(o);function i(e){return function e(s,t){if(!Array.isArray(s)&&!a()(s))return s;return r()(s,(s,n,o)=>{if((Array.isArray(n)||a()(n))&&(n=e(n,t)),!t(n,o))return;Array.isArray(s)?s.push(n):s[o]=n})}(e,(e,s)=>"__typename"!==s)}},557200:(e,s,t)=>{t.d(s,{I3:()=>i,UV:()=>r,xf:()=>o});var n=t(441535),a=t(292436);let o=()=>(0,n.W)("databricks.fe.lakeflow.usePrincipals",!1),r=()=>(0,n.W)("excl_data_access",!1)&&(0,n.W)("databricks.fe.lakeflow.enableAssumeGroupForJobsUI",!1)&&o()&&(0,a.Y)(),i=()=>(0,n.W)("databricks.fe.jobs.enableBudgetPolicyGroupImpersonation",!1)},645652:(e,s,t)=>{t.d(s,{$z:()=>eA,ij:()=>eD,cq:()=>e_});var n=t(610435),a=t(692738),o=t(497895),r=t(339518),i=t(79128),l=t(161330),u=t(262786),d=t(382908),c=t(342411),g=t(441535),b=t(886100),p=t(22191),m=t(697453),f=t(694762);function h({isOpen:e,deleting:s,onClose:t,onConfirmDelete:a}){return(0,n.Y)(f.ZF,{componentId:"codegen_jobs-scheduling_src_schedule-button_scheduleslist_deleteschedulemodal.tsx_15",title:(0,n.Y)(c.sA,{id:"jpKxZz",defaultMessage:"Deleting schedule"}),okButtonProps:{loading:s},cancelButtonProps:{disabled:s},onOk:a,visible:e,onCancel:t,children:(0,n.Y)(c.sA,{id:"Ng+LCG",defaultMessage:"Are you sure you want to delete this schedule? This action cannot be undone."})})}var S=t(720022),I=t(638600),y=t(84008),k=t(830690),v=t(325056),R=t(293418),M=t(876726),j=t(483588),J=t(739921),E=t(763835),C=t(109581),T=t(217985),D=t(310563),_=t(55079),A=t(465946),w=t(777229),Y=t(773631),P=t(695311);function N({triggerSettings:e,...s}){let t=(0,c.tz)();if(e.fileArrival?.url)return(0,n.Y)(d.o.Text,{title:t.formatMessage(x.fileArrivalMessage,{url:e.fileArrival?.url}),...s,children:(0,n.Y)(c.sA,{...x.fileArrivalMessage,values:{url:e.fileArrival?.url}})});return(0,n.Y)(r.F,{componentId:"codegen_jobs-scheduling_src_components_filearrivalhumandescription_filearrivalhumandescription.tsx_27",closable:!1,type:"warning",message:(0,n.Y)(n.FK,{children:(0,n.Y)(c.sA,{id:"O/IM8l",defaultMessage:"No schedule"})})})}let x={fileArrivalMessage:(0,c.zR)({id:"XThpx9",defaultMessage:"On file arrival at {url}"})};var $=t(359419),z=t.n($);function F({triggerSettings:e,...s}){let t=(0,c.tz)();if(e.model){let a=function(e,s){let t={scope:z()(e.securableName)?s.formatMessage({id:"1lh8Aq",defaultMessage:"metastore"}):e?.securableName};switch(e.condition){case j.vNi.MODEL_ALIAS_SET:return s.formatMessage({id:"KWU4zD",defaultMessage:"On model alias update in {scope}"},t);case j.vNi.MODEL_CREATED:return s.formatMessage({id:"twMA8H",defaultMessage:"On model creation in {scope}"},t);case j.vNi.MODEL_VERSION_READY:return s.formatMessage({id:"pNwDHP",defaultMessage:"On model version ready in {scope}"},t);default:return""}}(e.model,t);return(0,n.Y)(d.o.Text,{title:a,...s,children:a})}return(0,n.Y)(r.F,{componentId:"jobs-scheduling.model-trigger-human-description.no-config",closable:!1,type:"warning",message:(0,n.Y)(n.FK,{children:(0,n.Y)(c.sA,{id:"Sc7Wbe",defaultMessage:"No model trigger"})})})}var U=t(807521);function B({triggerSettings:e,...s}){let t=(0,c.tz)();if(e.tableUpdate&&e?.tableUpdate?.tableNames.length>0){var a;let o,r=(a=e.tableUpdate,o=a?.condition===j.Odw.ALL_UPDATED?"all":"any",t.formatMessage(L.tableTriggerDescription,{condition:o,numberTables:a?.tableNames?.length??0,tables:a?.tableNames?.join(", ")}));return(0,n.Y)(d.o.Text,{title:r,...s,children:r})}return(0,n.Y)(r.F,{componentId:"codegen_jobs-scheduling_src_components_tabletriggerhumandescription_tabletriggerhumandescription.tsx_41",closable:!1,type:"warning",message:(0,n.Y)(n.FK,{children:(0,n.Y)(c.sA,{id:"nQ7kci",defaultMessage:"No table trigger"})})})}let L={tableTriggerDescription:(0,c.zR)({id:"HfOqqQ",defaultMessage:"On {condition} {numberTables, plural, =0 {} =1 {table} other {tables}} update of {tables}"})};function W({triggerType:e,...s}){let t=(0,c.tz)();return(0,a.useEffect)(()=>{(0,w.F)(e,{eventId:"ScheduleHumanDescription.triggerType",esComponent:p.Es.WorkflowsServiceScheduleButton})},[e]),(0,n.Y)(d.o.Text,{title:t.formatMessage(V.unknownTriggerMessage),...s,children:(0,n.Y)(c.sA,{...V.unknownTriggerMessage})})}function O({settings:e,...s}){let t=(0,Y.dO)(e),a=(0,c.tz)();switch(t){case null:return(0,n.Y)(d.o.Text,{title:a.formatMessage(V.noScheduleMessage),...s,children:(0,n.Y)(c.sA,{...V.noScheduleMessage})});case"cron":return(0,n.Y)(P.I,{quartzCronExpression:e?.schedule?.quartzCronExpression||"",timezoneId:e?.schedule?.timezoneId,...s});case"periodic":return(0,n.Y)(U.p,{periodic:e?.trigger?.periodic||{},...s});case"fileArrival":return(0,n.Y)(N,{triggerSettings:e?.trigger||{},...s});case"tableUpdate":return(0,n.Y)(B,{triggerSettings:e?.trigger||{},...s});case"model":return(0,n.Y)(F,{triggerSettings:e?.trigger||{},...s});case"continuous":return(0,n.Y)(d.o.Text,{title:a.formatMessage(V.continuousScheduleMessage),...s,children:(0,n.Y)(c.sA,{...V.continuousScheduleMessage})});default:return(0,n.Y)(W,{triggerType:t,...s})}}let V={noScheduleMessage:(0,c.zR)({id:"50Uapi",defaultMessage:"Unscheduled"}),continuousScheduleMessage:(0,c.zR)({id:"JJADMt",defaultMessage:"Continuous"}),unknownTriggerMessage:(0,c.zR)({id:"0OQTED",defaultMessage:"Unknown schedule/trigger"})};function G({subHeader:e,settings:s}){let t=(0,c.tz)(),{theme:a}=(0,o.wn)(),r=(0,Y.Ms)(s),i=!(0,Y.vl)(s),l=i||r,u=r?a.colors.textSecondary:a.colors.textPrimary,g=function(){if(i)return t.formatMessage({id:"G37J38",defaultMessage:"Unscheduled"});if(r)return t.formatMessage({id:"nbgYTt",defaultMessage:"Paused"});return t.formatMessage({id:"9cgmNR",defaultMessage:"Active"})}();return(0,n.FD)("div",{style:{display:"flex",flexDirection:"column",color:u,alignItems:"left"},children:[(0,n.FD)("div",{style:{display:"flex",flexDirection:"row",gap:a.spacing.sm,alignItems:"center"},children:[l?(0,n.Y)(_.A,{css:{color:a.colors.actionDisabledBackground},"aria-label":g,title:g}):(0,n.Y)(_.A,{color:"success","aria-label":g,title:g}),(0,n.Y)("div",{style:{flex:"0 1 auto",minWidth:0},children:(0,n.Y)(O,{settings:s,bold:!0,ellipsis:!0,style:{width:"100%",color:u}})}),r&&(0,n.Y)(A.v,{componentId:"schedule-cell-content-renderer-tag",css:{paddingTop:0,paddingBottom:0,paddingLeft:2,paddingRight:2,marginRight:0},children:(0,n.Y)(d.o.Text,{css:{color:u},children:(0,n.Y)(c.sA,{id:"nbgYTt",defaultMessage:"Paused"})})})]}),e]})}var K=t(568569),Q=t(613323),q=t(802582),H=t(928516),X=t.n(H),Z=t(519018),ee=t.n(Z);function es(e){return({SkippedByCustomerCode:"Skipped",Cancelled:"Canceled",Cancelling:"Canceling"})[e]??e}let et={CANCELED:{displayStatus:(0,c.zR)({id:"Y2lhhW",defaultMessage:"Canceled"}),stableStatus:"Canceled"},CANCELING:{displayStatus:(0,c.zR)({id:"R4AX5a",defaultMessage:"Canceling"}),stableStatus:"Canceling"},SUCCEEDED:{displayStatus:(0,c.zR)({id:"YBKGyy",defaultMessage:"Succeeded"}),stableStatus:"Succeeded"},SUCCEEDED_WITH_FAILURES:{displayStatus:(0,c.zR)({id:"EWCRN4",defaultMessage:"Succeeded with failures"}),stableStatus:"Succeeded with failures"},FAILED:{displayStatus:(0,c.zR)({id:"WBg03E",defaultMessage:"Failed"}),stableStatus:"Failed"},TIMED_OUT:{displayStatus:(0,c.zR)({id:"LGUt4t",defaultMessage:"Timed out"}),stableStatus:"Timed out"},INTERNAL_ERROR:{displayStatus:(0,c.zR)({id:"WU2dEd",defaultMessage:"Internal error"}),stableStatus:"Internal error"},BLOCKED:{displayStatus:(0,c.zR)({id:"o073/U",defaultMessage:"Blocked"}),stableStatus:"Blocked"},PENDING:{displayStatus:(0,c.zR)({id:"vJ2SGQ",defaultMessage:"Pending"}),stableStatus:"Pending"},RUNNING:{displayStatus:(0,c.zR)({id:"GFE/hp",defaultMessage:"Running"}),stableStatus:"Running"},SKIPPED:{displayStatus:(0,c.zR)({id:"JjSXvn",defaultMessage:"Skipped"}),stableStatus:"Skipped"},EXCLUDED:{displayStatus:(0,c.zR)({id:"RuEiKV",defaultMessage:"Excluded"}),stableStatus:"Excluded"},UPSTREAM_EVICTED:{displayStatus:(0,c.zR)({id:"92cTa6",defaultMessage:"Upstream evicted"}),stableStatus:"Upstream evicted"},UPSTREAM_FAILED:{displayStatus:(0,c.zR)({id:"F8SjrR",defaultMessage:"Upstream failed"}),stableStatus:"Upstream failed"},UPSTREAM_CANCELED:{displayStatus:(0,c.zR)({id:"PLmzBH",defaultMessage:"Upstream canceled"}),stableStatus:"Upstream canceled"},SKIPPED_BY_CUSTOMER_CODE:{displayStatus:(0,c.zR)({id:"JjSXvn",defaultMessage:"Skipped"}),stableStatus:"Skipped"},TERMINATED:{displayStatus:(0,c.zR)({id:"+XXo4R",defaultMessage:"Terminated"}),stableStatus:"Terminated"},TERMINATING:{displayStatus:(0,c.zR)({id:"gXfh2k",defaultMessage:"Terminating"}),stableStatus:"Terminating"},WAITING_FOR_RETRY:{displayStatus:(0,c.zR)({id:"1ypivJ",defaultMessage:"Waiting for retry"}),stableStatus:"Waiting for retry"},QUEUED:{displayStatus:(0,c.zR)({id:"ddE990",defaultMessage:"Queued"}),stableStatus:"Queued"},EVICTED:{displayStatus:(0,c.zR)({id:"4UoNsY",defaultMessage:"Evicted"}),stableStatus:"Evicted"},MAX_CONCURRENT_RUN_REACHED:{displayStatus:(0,c.zR)({id:"S5mrsA",defaultMessage:"Max concurrent runs reached"}),stableStatus:"Maximum concurrent runs reached"},DISABLED:{displayStatus:(0,c.zR)({id:"hTaDHI",defaultMessage:"Disabled"}),stableStatus:"Disabled"}};var en=t(956935),ea=t(553662),eo=t(68925),er=t(513378),ei=t(802627),el=t(742557),eu=t(21255),ed=t(833218),ec=t(623749),eg=t(191283);let eb=t.p+"static/media/skipped.b25c88c7594efe934479cbdbe4b0ba80.svg",ep=t.p+"static/media/timed_out.3857e04c28b0c146c817dbf1623018eb.svg",em=t.p+"static/media/waiting.6f50f9b4d7d7b666ea037b77e79ea383.svg",ef=e=>({stableStatus:s,...t})=>(0,n.Y)("img",{src:e,css:{..."Running"===s?{animation:`${eI} 1.5s linear infinite`}:{}},...t}),eh=({stableStatus:e,...s})=>(0,n.Y)(ea.A,{color:"success",...s}),eS={"Internal error":e=>(0,n.Y)(eo.A,{color:"danger",...e}),Running:e=>(0,n.Y)(er.A,{color:"success",spin:!0,style:{animation:`${eI} 1.5s linear infinite`,alignItems:"center"},...e}),Failed:e=>(0,n.Y)(eo.A,{color:"danger",...e}),Pending:e=>(0,n.Y)(ei.A,{...e}),Skipped:ef(eb),SkippedByCustomerCode:ef(eb),Succeeded:e=>(0,n.Y)(el.A,{color:"success",...e}),"Succeeded with failures":e=>(0,n.Y)(ea.A,{color:"success",...e}),Terminated:e=>(0,n.Y)(eu.A,{...e}),Terminating:e=>(0,n.Y)(el.A,{color:"success",...e}),Blocked:e=>(0,n.Y)(ed.A,{...e}),"Timed out":ef(ep),Canceled:e=>(0,n.Y)(ec.A,{...e}),Canceling:e=>(0,n.Y)(ec.A,{...e}),"Waiting for retry":ef(em),"Upstream failed":ef(eb),Excluded:ef(eb),"Upstream canceled":ef(eb),Queued:e=>(0,n.Y)(eg.A,{...e}),Evicted:ef(eb),"Upstream evicted":ef(eb),"Maximum concurrent runs reached":ef(eb),Disabled:e=>(0,n.Y)(ed.A,{...e})},eI=(0,en.i7)("from{transform:rotate(0deg);}to{transform:rotate(359deg);}");function ey({stableStatus:e,isLastRunColumn:s=!1,...t}){let o=(0,a.useMemo)(()=>s||"Succeeded with failures"!==e?eS[e]:eh,[e,s]);return(0,n.Y)(o,{"aria-hidden":!0,style:{fontSize:16,verticalAlign:"middle",alignContent:"center"},...t,stableStatus:e})}function ek({edges:e,jobId:s}){let t=(0,c.tz)(),a=e??[],o=Array(5-(a.length??0)).fill(null).map((e,t)=>(0,n.Y)(ev,{edge:null,jobId:s},`empty-${t}`)),r=a.map((e,t)=>(0,n.Y)(ev,{edge:e,jobId:s,idx:a.length-t,totalRuns:a.length},e?.node?.idInJob??`empty-${t}`)),i=o.concat(r),l=a.filter(e=>e?.node.statusV2?.terminationDetails?.code&&[j.TFN.CANCELED,j.TFN.CANCELLED].includes(e.node.statusV2.terminationDetails.code)).length,u=a.filter(e=>e?.node.statusV2?.terminationDetails?.code===j.TFN.SUCCESS).length,d=a.length-l-u,g=e=>t.formatMessage({id:"wqfjre",defaultMessage:"{n, plural, =1 {1 run} other {{n} runs}}"},{n:e});return(0,n.Y)("div",{css:eR.runStatusList(),"aria-label":a.length>0?t.formatMessage({id:"FrXcN9",defaultMessage:"Last {all}: {succeeded} succeeded, {failed} failed, {cancelled} cancelled"},{succeeded:g(u),failed:g(d),cancelled:g(l),all:g(u+d+l)}):t.formatMessage({id:"+ISmTU",defaultMessage:"This job has no runs"}),children:i})}function ev({edge:e,jobId:s,idx:t,totalRuns:a}){var r;let i=(0,c.tz)(),{theme:l}=(0,o.wn)();if(null===e)return(0,n.Y)("span",{css:eR.runStatusWrapper(),children:(0,n.Y)(Q.A,{"data-testid":"empty-run-icon",style:{color:l.colors.grey300,fontSize:16,padding:"3px",verticalAlign:"middle"}})});let u=(r=e.node.status,Object.values(et).map(e=>e.stableStatus).find(e=>e===r)),g=function(e){if(!e||e===j.TFN.CODE_UNSPECIFIED||e===j.TFN.SUCCESS)return null;return ee()(X()(e.toString()))}(e.node.statusV2?.terminationDetails?.code),b=(0,n.FD)("div",{css:{"& > p":{marginBottom:0,marginTop:0}},children:[(0,n.FD)("p",{children:[(0,n.FD)("strong",{children:[i.formatMessage({id:"aQxgpx",defaultMessage:"Run ID"}),":"]})," ",e.node.idInJob]}),e.node.startTime&&(0,n.FD)("p",{children:[(0,n.FD)("strong",{children:[i.formatMessage({id:"4Lkioj",defaultMessage:"Start time"}),":"]})," ",function(e,s){if(!s)return"";return e.formatDate(s,{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})}(i,e.node.startTime)]}),(0,n.FD)("p",{children:[(0,n.FD)("strong",{children:[i.formatMessage({id:"WgVmS6",defaultMessage:"Run status"}),":"]})," ",es(e.node.status??"")]}),g?(0,n.FD)("p",{children:[(0,n.FD)("strong",{children:[i.formatMessage({id:"qSSkf5",defaultMessage:"Error code"}),":"]})," ",g]}):null]});return(0,n.Y)("span",{css:eR.runStatusWrapper(),"aria-label":i.formatMessage({id:"WNoN2y",defaultMessage:"{idx, selectordinal, =0 {No runs} one {Last run of the {totalRuns} recent runs. Status: {status}.} two {#nd to last run of the {totalRuns} recent runs. Status: {status}.} few {#rd to last run of the {totalRuns} recent runs. Status: {status}.} other {#th to last run of the {totalRuns} recent runs. Status: {status}.} }"},{idx:t??0,totalRuns:a??1,status:es(e.node.status??"")}),children:(0,n.Y)(T.N,{componentId:"codegen_jobs-scheduling_src_schedule-button_lastrunstatus_lastrunstatus.tsx_179",to:(0,E.Uc)().runDetails({jobId:s??"",runId:e.node.idInJob??""}),asChild:!0,children:(0,n.Y)(d.o.Link,{componentId:"codegen_jobs-scheduling_src_schedule-button_lastrunstatus_lastrunstatus.tsx_187","data-testid":"run-status-icon",css:{display:"inline-flex"},children:(0,n.Y)(q.p,{title:b,children:(0,n.Y)("span",{css:{display:"inline-flex"},children:u&&(0,n.Y)(ey,{stableStatus:u,isLastRunColumn:!0,width:"22",height:"22",css:{padding:"3px",alignItems:"center",display:"flex",justifyContent:"center","&:hover":{background:l.colors.radioInteractiveHoverSecondary,borderRadius:5}}})})})})})})}let eR={runStatusWrapper:()=>({display:"inline-flex"}),runStatusList:()=>({display:"flex"})};function eM({schedules:e,hasMore:s,pageIndex:t,loadPage:o,onNextPage:r,onPreviousPage:i,scheduleTypeId:l,customActionsComponent:u,triggerTypes:d,onAddSchedule:c,scheduleAssetDisplayName:g,...b}){let p=(0,K.Cm)(d),m=[{id:"schedule",accessorFn:e=>e.settings?.schedule,header:()=>null,cell:({row:e})=>{let s=e.original;return(0,n.Y)(y.n,{style:{alignItems:"flex-end",width:350},children:(0,n.Y)(G,{settings:s.settings,subHeader:(0,n.Y)(ej,{schedule:s})})})}},{id:"recentFiveRuns",accessorFn:e=>e.settings?.schedule,header:()=>null,cell:({row:e})=>{let s=e.original;return(0,n.Y)(y.n,{style:{alignItems:"center",whiteSpace:"nowrap",maxWidth:"fit-content"},children:(0,n.Y)(eE,{schedule:s})})}},{id:"actions",accessorFn:e=>e.jobId,header:()=>null,cell:({row:e})=>{let s=e.original,t=b.permissionsDataByJobId[s.jobId],a=!!(t&&t.permission&&[j.vn$.IS_OWNER,j.vn$.MANAGE].includes(t.permission)),o=!!(t&&t.permission&&[j.vn$.IS_OWNER,j.vn$.MANAGE,j.vn$.MANAGE_RUN].includes(t.permission)),r=s.settings?.tasks?.length===1;return(0,n.Y)(y.n,{style:{display:"flex",flexDirection:"row-reverse",alignItems:"center",maxWidth:"25%"},children:(0,n.Y)(D.Kl,{schedule:s,canEdit:a,canRunNow:o,canEditInPlace:r&&(0,Y.Ze)(s.settings,p),onResume:b.onResumeSchedule,onDelete:b.onDelete,onRunNow:b.onRunSchedule,onClone:b.onCloneSchedule,onEdit:b.onEditSchedule,onPause:b.onPauseSchedule,scheduleTypeId:l,customActionsComponent:u,loading:b.loading&&s.jobId===b.loadingJobId,getActionsToHide:b.getActionsToHide})})}}],f=(0,C.Lb)("js/packages/jobs-scheduling/src/schedule-button/SchedulesList/SchedulesListInternal.tsx",{data:e,getRowId:e=>e.jobId,columns:m,getCoreRowModel:(0,S.HT)(),getPaginationRowModel:(0,S.kW)()}),h=s||!1,M=t>0,E=(h||M)&&(0,n.Y)(k.vI,{componentId:"codegen_jobs-scheduling_src_schedule-button_scheduleslist_scheduleslistinternal.tsx_166",hasPreviousPage:M,hasNextPage:h,onNextPage:()=>{r&&r()},onPreviousPage:()=>{i&&i()}});return(0,n.Y)(v.X,{scrollable:!0,pagination:E,empty:0!==f.getRowModel().rows.length||s||M?void 0:(0,n.Y)(eJ,{onAddSchedule:c,scheduleAssetDisplayName:g}),children:f.getRowModel().rows.map(e=>(0,n.FD)(a.Fragment,{children:[e.original.jobId&&(0,n.Y)(J.M,{jobId:e.original.jobId,closable:!0}),(0,n.Y)(R.H,{children:e.getAllCells().map(e=>(0,n.Y)(a.Fragment,{children:(0,I.Kv)(e.column.columnDef.cell,e.getContext())},e.id))})]},`job-${e.id}`))})}function ej({schedule:e}){let s=e.settings?.name,{theme:t}=(0,o.wn)();return(0,n.Y)(T.N,{componentId:"UnifiedScheduleButton.SchedulesListInternal.jobNameLink",to:(0,E.Uc)().jobDetails({jobId:e.jobId}).toString(),asChild:!0,children:(0,n.Y)(d.o.Link,{componentId:"UnifiedScheduleButton.SchedulesListInternal.jobNameLinkTypography",css:{cursor:"pointer !important"},ellipsis:!0,style:{color:t.colors.textSecondary,width:"100%"},title:s,children:(0,n.Y)(c.sA,{id:"xuGdR5",defaultMessage:"{jobName}",values:{jobName:s}})})})}function eJ({onAddSchedule:e,scheduleAssetDisplayName:s}){return(0,n.Y)(M.S,{title:(0,n.Y)(c.sA,{id:"I5IFEg",defaultMessage:'No schedules found for "{scheduleAssetDisplayName}"',values:{scheduleAssetDisplayName:s}}),description:(0,n.Y)(c.sA,{id:"lOMPQ+",defaultMessage:'Create a schedule to run "{scheduleAssetDisplayName}" on a regular basis.',values:{scheduleAssetDisplayName:s}})})}function eE({schedule:e}){let s=e.activeRuns?.edges??[],t=[...e.completedRuns?.edges??[],...s].sort((e,s)=>(s.node.startTime??0)-(e.node.startTime??0)).slice(0,5).reverse();return(0,n.Y)(ek,{edges:t,jobId:e.jobId})}var eC=t(3951);function eT(e,s,t,n,a,o,r){try{var i=e[o](r),l=i.value}catch(e){t(e);return}i.done?s(l):Promise.resolve(l).then(n,a)}let eD={unknownApiErrorMessage:(0,c.zR)({id:"eQXpjN",defaultMessage:"Unknown API error"}),unknownExceptionErrorMessage:(0,c.zR)({id:"RwQ7Ek",defaultMessage:"Unknown exception or rejection"}),deleteError:(0,c.zR)({id:"3NdOSP",defaultMessage:"Failed to delete the schedule"}),pauseError:(0,c.zR)({id:"gM6v6e",defaultMessage:"Failed to pause the schedule"}),resumeError:(0,c.zR)({id:"hajV2P",defaultMessage:"Failed to resume the schedule"}),updateError:(0,c.zR)({id:"G3TI9P",defaultMessage:"Failed to update the schedule"}),runNowError:(0,c.zR)({id:"VK3Kp1",defaultMessage:"Failed to run the schedule"}),createError:(0,c.zR)({id:"DAqRky",defaultMessage:"Failed to create the schedule"}),cloneError:(0,c.zR)({id:"2g2/3Y",defaultMessage:"Failed to clone the schedule"}),pauseSuccessTitle:(0,c.zR)({id:"7oYFBu",defaultMessage:"Successfully paused"}),pauseSuccessDescription:(0,c.zR)({id:"Kw1WCg",defaultMessage:'Paused job "{jobName}"'}),resumeSuccessTitle:(0,c.zR)({id:"E6CZpB",defaultMessage:"Successfully resumed"}),resumeSuccessDescription:(0,c.zR)({id:"XIGP5y",defaultMessage:'Resumed job "{jobName}"'}),updateSuccessTitle:(0,c.zR)({id:"KzBTnN",defaultMessage:"Successfully updated"}),updateSuccessDescription:(0,c.zR)({id:"b5PFPe",defaultMessage:'Updated job "{jobName}"'}),runNowSuccessTitle:(0,c.zR)({id:"PCxlSa",defaultMessage:"Successfully started"}),runNowSuccessDescription:(0,c.zR)({id:"ZSHyj/",defaultMessage:'Started run for job "{jobName}"'}),deleteSuccessTitle:(0,c.zR)({id:"uVr77R",defaultMessage:"Successfully deleted"}),deleteSuccessDescription:(0,c.zR)({id:"fV2ea5",defaultMessage:'Deleted job "{jobName}"'}),cloneSuccessTitle:(0,c.zR)({id:"E6qVi2",defaultMessage:"Successfully cloned"}),cloneSuccessDescription:(0,c.zR)({id:"BtWegv",defaultMessage:'Cloned job "{jobName}"'}),createSuccessTitle:(0,c.zR)({id:"Yw291r",defaultMessage:"Successfully created"}),createSuccessDescription:(0,c.zR)({id:"NDbGSM",defaultMessage:'Created job "{jobName}"'})},e_=10;function eA({scheduleTypeId:e,scheduleAssetDisplayName:s,scheduleHooks:t,onAddSchedule:u,onEditSchedule:d,customActionsComponent:f,triggerTypes:S,redirectToCreateIfEmpty:I,hideHeader:y,hideTableWhenEmpty:k,beforeListContent:v,getActionsToHide:R,isAddScheduleDisabled:M,onPauseSuccess:j}){let{theme:J}=(0,o.wn)(),E=(0,c.tz)(),[C,T]=(0,a.useState)(0),[D,_]=(0,a.useState)(0),A=(0,a.useCallback)(()=>{T(C+e_),_(D+1)},[C,D,e_]),w=(0,a.useCallback)(()=>{T(C-e_),_(D-1)},[C,D,e_]),{data:Y,loading:P,error:N,refetch:x}=t.useQueryJobs({variables:{offset:C,limit:e_},pollInterval:(0,g.W)("databricks.fe.jobs.scheduling.scheduleButton.schedulesList.pollInterval",5e3)});a.useEffect(()=>{Y?.jobsQueryJobs?.jobs?.length===0&&D>0&&!P&&w()},[Y?.jobsQueryJobs?.jobs,D,w,P]),a.useEffect(()=>{I&&!P&&Y?.jobsQueryJobs?.jobs?.length===0&&0===D&&u()},[P,Y,u,I,D]);let $=function(e){let s={};if(!e)return s;return e.reduce((e,s)=>({...e,[s.jobId]:s}),s)}(Y?.jobsQueryJobs?.permissionLevels??[]),z=Y?.jobsQueryJobs?.jobs??[],F=Y?.jobsQueryJobs?.hasMore??!1,U=M?.(z),[B,L]=(0,a.useState)(!1),[W,O]=(0,a.useState)(),[V,{loading:G}={loading:!1}]=t.useCloneJob?.({variables:{jobId:W}})??[],[K,{loading:Q}]=t.usePauseJob({variables:{jobId:W}}),[q,{loading:H}]=t.useResumeJob({variables:{jobId:W}}),[X,{loading:Z}]=t.useDeleteJob({variables:{jobId:W}}),[ee,{loading:es}={loading:!1}]=t.useRunJob?t.useRunJob({variables:{jobId:W}}):[];function et({title:e,description:s}){m.ds.call({root:{componentId:"codegen_jobs-scheduling_src_schedule-button_scheduleslist_scheduleslist.tsx_224",severity:"error",duration:3e3},title:e,description:s,isCloseable:!0})}function en({title:e,description:s}){m.ds.call({root:{componentId:"codegen_jobs-scheduling_src_schedule-button_scheduleslist_scheduleslist.tsx_235",severity:"success",duration:3e3},title:e,description:s,isCloseable:!0})}let ea=ee?e=>{O(e),ee({variables:{jobId:e}}).then(s=>{s?.data?.jobsRunNow?.apiError?et({title:{value:E.formatMessage(eD.runNowError)},description:{value:s.data.jobsRunNow.apiError.message??E.formatMessage(eD.unknownApiErrorMessage)}}):en({title:{value:E.formatMessage(eD.runNowSuccessTitle)},description:{value:E.formatMessage(eD.runNowSuccessDescription,{jobName:z.find(s=>s.jobId===e)?.settings?.name??e})}})}).catch(e=>{et({title:{value:E.formatMessage(eD.runNowError)},description:{value:e.message??E.formatMessage(eD.unknownExceptionErrorMessage)}})})}:void 0,eo=V?e=>{O(e),V({variables:{jobId:e}}).then(s=>{s?.data?.jobsCloneJob?.apiError?et({title:{value:E.formatMessage(eD.cloneError)},description:{value:s.data.jobsCloneJob.apiError.message??E.formatMessage(eD.unknownApiErrorMessage)}}):(x(),en({title:{value:E.formatMessage(eD.cloneSuccessTitle)},description:{value:E.formatMessage(eD.cloneSuccessDescription,{jobName:z.find(s=>s.jobId===e)?.settings?.name??e})}}))}).catch(e=>{et({title:{value:E.formatMessage(eD.cloneError)},description:e.message??E.formatMessage(eD.unknownExceptionErrorMessage)})})}:void 0;if(N||Y?.jobsQueryJobs?.apiError)return(0,n.Y)(r.F,{componentId:"codegen_jobs-scheduling_src_schedule-button_scheduleslist_scheduleslist.tsx_483",type:"error",message:(0,n.Y)(c.sA,{id:"FWHdu8",defaultMessage:"Failed to list the schedules."}),description:Y?.jobsQueryJobs?.apiError?.message??N?.message??"Unknown error",closable:!1,action:(0,n.Y)(i.$n,{componentId:"codegen_jobs-scheduling_src_schedule-button_scheduleslist_scheduleslist.tsx_292",type:"primary",onClick:()=>x(),children:"Retry"})});return(0,n.FD)("div",{style:{position:"relative",paddingBottom:J.spacing.md,display:"flex",flexDirection:"column",gap:J.spacing.sm},children:[!y&&(0,n.FD)("div",{style:{display:"flex",width:"100%",flexShrink:0,justifyContent:"space-between",alignItems:"center",paddingBottom:J.spacing.sm},children:[(0,n.Y)(eY,{schedulesLength:z.length,pageSize:e_,isPaginated:F||D>0}),(0,n.FD)("div",{style:{display:"flex",gap:J.spacing.sm,alignItems:"center"},children:[(0,n.Y)(i.$n,{componentId:"codegen_jobs-scheduling_src_schedule-button_scheduleslist_scheduleslist.tsx_327",type:"primary",onClick:u,disabled:U?.disabled,children:(0,n.Y)(c.sA,{id:"3wSyt6",defaultMessage:"Add schedule"})}),U?.disabled&&(0,n.Y)(l.I,{componentId:"schedules-list-add-schedule-disabled-reason-tooltip",content:U.disabledReason})]})]}),v,(0,n.Y)(ew,{loading:P,schedules:z,hideTableWhenEmpty:k,children:(0,n.Y)(eM,{scheduleAssetDisplayName:s,schedules:z,onEditSchedule:d,onDelete:e=>{O(e),L(!0)},onPauseSchedule:e=>{var s;return(s=function*(){O(e);let s=Number(e),t=z.find(e=>e.jobId===s);try{let s=yield K({variables:{jobId:e}});if(s?.data?.jobsPauseJob?.apiError)return void et({title:{value:E.formatMessage(eD.pauseError)},description:{value:s.data.jobsPauseJob.apiError.message??E.formatMessage(eD.unknownApiErrorMessage)}});yield j?.(t?.settings),x(),en({title:{value:E.formatMessage(eD.pauseSuccessTitle)},description:{value:E.formatMessage(eD.pauseSuccessDescription,{jobName:t?.settings?.name??e})}})}catch(e){et({title:{value:E.formatMessage(eD.pauseError)},description:{value:e instanceof Error?e.message:E.formatMessage(eD.unknownExceptionErrorMessage)}})}},function(){var e=this,t=arguments;return new Promise(function(n,a){var o=s.apply(e,t);function r(e){eT(o,n,a,r,i,"next",e)}function i(e){eT(o,n,a,r,i,"throw",e)}r(void 0)})})()},onResumeSchedule:e=>{O(e),q({variables:{jobId:e}}).then(s=>{s?.data?.jobsResumeJob?.apiError?et({title:{value:E.formatMessage(eD.resumeError)},description:{value:s.data.jobsResumeJob.apiError.message??E.formatMessage(eD.unknownApiErrorMessage)}}):(x(),en({title:{value:E.formatMessage(eD.resumeSuccessTitle)},description:{value:E.formatMessage(eD.resumeSuccessDescription,{jobName:z.find(s=>s.jobId===e)?.settings?.name??e})}}))}).catch(e=>{et({title:{value:E.formatMessage(eD.resumeError)},description:e.message??E.formatMessage(eD.unknownExceptionErrorMessage)})})},onRunSchedule:ea,onCloneSchedule:eo,hasMore:F,pageIndex:D,onNextPage:A,onPreviousPage:w,scheduleTypeId:e,customActionsComponent:f,triggerTypes:S,onAddSchedule:u,permissionsDataByJobId:$,loading:Q||H||Z||es||P||G,loadingJobId:W,getActionsToHide:R})}),(0,n.Y)(h,{isOpen:B,onClose:()=>L(!1),onConfirmDelete:()=>{if(null==W)return void b.iT.sev3(p.Es.WorkflowsServiceScheduleButton,"jaws.jobs-scheduling.SchedulesList.onConfirmDelete.ScheduleIdIsNullOrUndefined","No schedule selected to delete");X({variables:{jobId:W}}).then(({data:e})=>{L(!1),e?.jobsDeleteJob?.apiError?et({title:{value:E.formatMessage(eD.deleteError)},description:{value:e.jobsDeleteJob.apiError.message??E.formatMessage(eD.unknownApiErrorMessage)}}):(x(),en({title:{value:E.formatMessage(eD.deleteSuccessTitle)},description:{value:E.formatMessage(eD.deleteSuccessDescription,{jobName:z.find(e=>e.jobId===W)?.settings?.name})}}))}).catch(e=>{et({title:{value:E.formatMessage(eD.deleteError)},description:{value:e.message??E.formatMessage(eD.unknownExceptionErrorMessage)}}),L(!1)})},deleting:Z})]})}let ew=({loading:e,schedules:s,hideTableWhenEmpty:t,children:a})=>{if(e&&!(s.length>0))return(0,n.Y)(u.Q,{});if(!(s.length>0)&&t)return(0,n.Y)(n.FK,{});return(0,n.Y)(n.FK,{children:a})};function eY({schedulesLength:e,pageSize:s,isPaginated:t}){let{theme:a}=(0,o.wn)();return(0,n.Y)(d.o.Title,{level:3,style:{marginTop:0,marginBottom:0},children:(0,n.FD)("div",{style:{display:"flex",flexDirection:"row",gap:a.spacing.xs},children:[(0,n.Y)(c.sA,{id:"FwFHur",defaultMessage:"Schedules"}),(0,n.Y)(eC.j,{hasMore:t,pageSize:s,schedulesLength:e,style:{marginTop:2,color:a.colors.textSecondary},bold:!0})]})})}},687332:(e,s,t)=>{t.d(s,{pO:()=>v});var n=t(692738),a=t(441535),o=t(141078),r=t(436155),i=t(866691),l=t(16790),u=t(483588),d=t(886100),c=t(22191),g=t(984519);function b(e,s,t,n,a,o,r){try{var i=e[o](r),l=i.value}catch(e){t(e);return}i.done?s(l):Promise.resolve(l).then(n,a)}function p(e){return function(){var s=this,t=arguments;return new Promise(function(n,a){var o=e.apply(s,t);function r(e){b(o,n,a,r,i,"next",e)}function i(e){b(o,n,a,r,i,"throw",e)}r(void 0)})}}let m={major:2,minor:2},f={major:2,minor:0},h=(0,o.J1)`
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
`,S=(0,o.J1)`
  mutation ScheduleButton_BaseHooks_DeleteJob($jobId: Long!) @component(name: "Workflows.Service.ScheduleButton") {
    jobsDeleteJob(input: { jobId: $jobId }) {
      apiError {
        code
        message
      }
    }
  }
`,I=(0,o.J1)`
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
`,y=(0,o.J1)`
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
`,k=()=>(0,a.W)("databricks.fe.lakeflow.scheduleButton.api22.enabled",!0)?m:f;function v(){let e=(e,s,t,n)=>p(function*(){let a=parseInt(t,10),{data:o}=yield e.query({query:y,variables:{jobId:a},fetchPolicy:"no-cache",errorPolicy:"all"}),i=function(e,s){if(!e||!e.jobsGetJob||!e.jobsGetJob.job)throw Error("Missing job data for usePauseJob mutation");let t=e.jobsGetJob.job.settings?.trigger,n=e.jobsGetJob.job.settings?.schedule,a=e.jobsGetJob.job.settings?.continuous;return t&&(t={...t,pauseStatus:s}),n&&(n={...n,pauseStatus:s}),a&&(a={...a,pauseStatus:s}),{jobsGetJob:{job:{...e.jobsGetJob.job,settings:{...e.jobsGetJob.job.settings,trigger:t,schedule:n,continuous:a}}}}}(o,n),l=(0,r.p)(i);return yield s({variables:{jobId:a,trigger:l.jobsGetJob.job.settings?.trigger,schedule:l.jobsGetJob.job.settings?.schedule,continuous:l.jobsGetJob.job.settings?.continuous,externalApiVersion:k()}})})();return{usePauseJob:({variables:s})=>{let t=(0,o.mK)(),[n,a]=(0,o.n_)(h,{refetchQueries:[(0,i.P)()]});return[s=>p(function*(){if(!s||!s.variables)throw Error("Missing variables for usePauseJob mutation");let a=yield e(t,n,s.variables.jobId,u.usk.PAUSED);return{data:{jobsPauseJob:a.data?.jobsUpdateJob??null}}})(),{...a,data:{jobsPauseJob:a.data?.jobsUpdateJob??null}}]},useResumeJob:({variables:s})=>{let t=(0,o.mK)(),[n,a]=(0,o.n_)(h,{refetchQueries:[(0,i.P)()]});return[s=>p(function*(){if(!s||!s.variables)throw Error("Missing variables for useResumeJob mutation");let a=yield e(t,n,s.variables.jobId,u.usk.UNPAUSED);return{data:{jobsResumeJob:a.data?.jobsUpdateJob??null}}})(),{...a,data:{jobsResumeJob:a.data?.jobsUpdateJob??null}}]},useDeleteJob:({variables:e})=>{let[s,t]=(0,o.n_)(S,{variables:{jobId:e.jobId},refetchQueries:[(0,i.P)()]});return[s,t]},useRunJob:({variables:e})=>{let[s,t]=(0,o.n_)(I,{variables:{jobId:parseInt(e.jobId,10),externalApiVersion:k()},refetchQueries:[(0,i.P)()]});return[e=>{if(!e||!e.variables)throw Error("Missing variables for useRunJob mutation");return s({variables:{jobId:parseInt(e.variables?.jobId,10),externalApiVersion:k()}})},t]},useGetSingleJob:({variables:e,skip:s})=>{let{data:t,loading:n,error:a,refetch:r}=(0,o.IT)(y,{variables:{jobId:e.jobId},fetchPolicy:"cache-and-network",skip:s||e?.jobId===void 0||e?.jobId===null});return{data:t,loading:n,error:a,refetch:r}},useCloneJob:({variables:e})=>{let[s,t]=(0,n.useState)(!1),[a,r]=(0,n.useState)(void 0),i=(0,o.mK)(),l=()=>{r(void 0),t(!1)},u=e=>({data:e,loading:s,error:void 0,called:!0,client:i,reset:l});return[e=>p(function*(){l(),t(!0);try{if(!g.c.isAvailable())throw d.iT.sev2(c.Es.WorkflowsServiceScheduleButton,"useJobsSchedulingBaseHooks:useCloneJob:CloneJobRpc is not available. Please ensure the service is running and accessible.",{stack:Error().stack}),Error("CloneJobRpc is not available. Please ensure the service is running and accessible.");let s=yield g.c.call({jobId:e.variables.jobId.toString()}),t={jobsCloneJob:{__typename:"JobsCreateJobResponse",jobId:s.jobId,apiError:null}};return r(t),u(t)}catch(s){let e={jobsCloneJob:{__typename:"JobsCreateJobResponse",jobId:null,apiError:{__typename:"ApiError",code:"",message:s.message}}};return r(e),u(e)}finally{t(!1)}})(),{data:a,loading:s,error:void 0,called:!0,client:i,reset:l}]}}}},695311:(e,s,t)=>{t.d(s,{I:()=>l});var n=t(610435),a=t(339518),o=t(382908),r=t(342411),i=t(218495);function l({quartzCronExpression:e,timezoneId:s,...t}){let u=(0,r.tz)();if(null===e)return(0,n.Y)(a.F,{componentId:"codegen_jobs-scheduling_src_components_cronhumandescription_cronhumandescription.tsx_30",closable:!1,type:"warning",message:(0,n.Y)(n.FK,{children:(0,n.Y)(r.sA,{id:"PUyeve",defaultMessage:"No schedule"})})});let d=(0,i.i)({quartzCronExpression:e,timezoneId:s,intl:u});return(0,n.Y)(o.o.Text,{title:d,...t,children:d})}},739921:(e,s,t)=>{t.d(s,{M:()=>h});var n=t(610435);t(692738);var a=t(339518),o=t(382908),r=t(342411),i=t(483588),l=t(67656),u=t(605945),d=t(141078),c=t(763835),g=t(697453);function b(e,s){g.ds.call({root:{componentId:"jaws.alerts.JobBreakingChangesAlert",severity:s,duration:3e3},title:{value:e},isCloseable:!0})}let p={unpinSuccessTitle:(0,r.zR)({id:"7CoYY3",defaultMessage:"Successfully upgraded the job"}),unpinErrorTitle:(0,r.zR)({id:"QTkvE+",defaultMessage:"Failed to upgrade the job"})};var m=t(888286),f=t(726583);let h=({jobId:e,closable:s,enablePolling:t,loadingElement:g})=>{var h;let I,y=(0,u.Iq)()??null,k=(I=(t||!1)&&(0,f.Pz)(),(0,d.IT)(m.V,{variables:{workloadId:e.toString(),workspaceId:y,workloadType:i.opk.GENERIC,pinOwner:i.t$d.PIN_OWNER_SERVERLESS_JOBS},fetchPolicy:I?"cache-first":"network-only",nextFetchPolicy:I?"cache-and-network":void 0,pollInterval:I?(0,f.O6)():void 0,skip:!(0,f.Yk)()})),[v,R]=function(e,s){let t=(0,r.tz)(),[n,a]=(0,d.n_)(m.g,{onCompleted:e=>{var s,n;return s=e,n=t,void(s?.dbrpinning_unpinDbrWorkload?.sparkConfig?b(n.formatMessage(p.unpinSuccessTitle),"success"):b(n.formatMessage(p.unpinErrorTitle),"error"))}});return[t=>n({variables:{input:{workloadId:e.toString(),workspaceId:s,workloadType:i.opk.GENERIC,pinOwner:i.t$d.PIN_OWNER_SERVERLESS_JOBS,sparkConfigKey:t,reason:"Unpin initiated by the user from UI"}}}),a]}(e,y);if(k.loading)return(0,n.Y)(n.FK,{children:g});if(k.error)return null;let M=function(e,s){let t=s?.dbrpinning_getCustomerVisibleDbrWorkloadConfigPin?.pinnedConfigs;if(!t||0===t.length)return null;let n=t[0],a=n?.sparkConfig?.key;if(!a)return null;let o=n?.errorClass,r=o?l.R.getDocUrl(o):null;if(!r)return null;return{sparkConfigKey:a,errorDocLink:r,affectedAssetInfo:function(e,s){let t=s.affectedTaskKey,n=s.affectedTaskRunId;if(!t||!n)return null;let a=(0,c.Uc)().jobDetails({jobId:e,view:"tasks",task:t}),o="string"==typeof a?a:a.pathname??"",r=(0,c.Uc)().runDetails({jobId:e,runId:n});return{taskKey:t,taskLink:o,runId:n,runLink:r}}(e,n)}}(e,k.data);if(!M||R.data?.dbrpinning_unpinDbrWorkload?.sparkConfig)return null;return(0,n.Y)(a.F,{componentId:"jaws.alerts.JobBreakingChangesAlert",type:"warning",closable:s,message:M.affectedAssetInfo?(0,n.Y)(r.sA,{id:"pXIKyD",defaultMessage:"This job is running in legacy mode due to a recent breaking change in the <taskLink></taskLink> task, run <runLink></runLink>. Update your notebook code, to ensure your workload continues to run smoothly, then click 'Upgrade' to return to the latest release. <errorDocLink>Learn\xa0more</errorDocLink>",values:{...S(M),...(h=M.affectedAssetInfo,{runLink:()=>(0,n.Y)(o.o.Link,{componentId:"jaws.alerts.JobBreakingChangesAlert.AffectedRunLink",href:h.runLink,openInNewTab:!0,children:h.runId}),taskLink:()=>(0,n.Y)(o.o.Link,{componentId:"jaws.alerts.JobBreakingChangesAlert.AffectedTaskLink",href:h.taskLink,openInNewTab:!0,children:"`"+h.taskKey+"`"})})}}):(0,n.Y)(r.sA,{id:"6z7mxp",defaultMessage:"This job is running in legacy mode due to a recent breaking change. Update your notebook code, to ensure your workload continues to run smoothly, then click 'Upgrade' to return to the latest release. <errorDocLink>Learn\xa0more</errorDocLink>",values:{...S(M)}}),actions:[{children:"Upgrade",componentId:"jaws.alerts.JobBreakingChangesAlert.upgrade",loading:R.loading,onClick:()=>v(M.sparkConfigKey)}]})};function S(e){return{errorDocLink:s=>(0,n.Y)(o.o.Link,{componentId:"jaws.alerts.JobBreakingChangesAlert.BreakingChangeErrorDocLink",href:e.errorDocLink,openInNewTab:!0,children:s})}}},866691:(e,s,t)=>{t.d(s,{P:()=>r,Z:()=>o});var n=t(141078),a=t(16790);let o=(0,n.J1)`
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
`;function r(){return(0,n.n4)(o)??"ScheduleButton_QueryJobsByTask"}},888286:(e,s,t)=>{t.d(s,{V:()=>a,g:()=>o});var n=t(141078);let a=(0,n.J1)`
  query JobPinnedSparkConfigs(
    $pinOwner: dbrpinning_PinOwner
    $workloadType: k8Sclusters_WorkloadType
    $workspaceId: LongString
    $workloadId: String
  ) @component(name: "Workflows.Stability.Serverless") {
    dbrpinning_getCustomerVisibleDbrWorkloadConfigPin(
      pinOwner: $pinOwner
      workloadType: $workloadType
      workspaceId: $workspaceId
      workloadId: $workloadId
    ) {
      pinnedConfigs {
        sparkConfig {
          key
          value
        }
        errorClass
        affectedTaskKey
        affectedTaskRunId
      }
    }
  }
`,o=(0,n.J1)`
  mutation UnpinJobPinnedSparkConfigs($input: dbrpinning_UnpinDbrWorkloadRequestInput!)
  @component(name: "Workflows.Stability.Serverless") {
    dbrpinning_unpinDbrWorkload(input: $input) {
      sparkConfig {
        key
        value
      }
    }
  }
`}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/2720.3d988a2d69.chunk.js.map