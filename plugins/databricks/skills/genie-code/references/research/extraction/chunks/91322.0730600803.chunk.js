"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[91322],{819:(e,a,t)=>{t.d(a,{IC:()=>f,JG:()=>r,LV:()=>g,oh:()=>b,p3:()=>E,qU:()=>d});var s,n=t(778529),i=t.n(n),r=((s={}).USER="User",s.GROUP="Group",s.SERVICE_PRINCIPAL="Service Principal",s.BUDGET_POLICY="Budget Policy",s.UNKNOWN="",s);let l="users",o="groups",c="servicePrincipals",u={Group:o,"Service Principal":c,User:l},d={[l]:"User",[o]:"Group",[c]:"Service Principal"},m={group:o,serviceprincipal:c,user:l},p={Group:"displayName","Service Principal":"applicationId",User:"userName"},g={Group:"groupname","Service Principal":"email",User:"email"};function f(e){let a=u[e.principalType],t=p[e.principalType];if(i()(a)||i()(t))return;return`${a}/${e[t]}`}function b(e){let a=m[e.kind],t="serviceprincipal"===e.kind?e.applicationId:e.name;return t?`${a}/${t}`:void 0}function E(e){switch(e.principalType){case"User":return e.displayName?`${e.displayName} (${e.userName})`:e.userName;case"Group":return e.displayName;case"Service Principal":return e.displayName||e.applicationId;default:return""}}},3024:(e,a,t)=>{t.d(a,{Br:()=>d,CH:()=>b,Dc:()=>f,Gj:()=>c,N5:()=>u,R4:()=>r,TK:()=>l,WT:()=>g,h1:()=>m,p_:()=>o});var s=t(483588);function n(e){return{source:"user-activity",userActivityRecommendation:e,recommendationServiceRecommendation:null}}function i(e){return{source:"recommendation-service",userActivityRecommendation:null,recommendationServiceRecommendation:e}}function r(e){return e.map(n)}function l(e){return e.map(i)}function o(e){if("user-activity"===e.source)return e.userActivityRecommendation?.asset??null;return e.recommendationServiceRecommendation?.asset??null}function c(e){if("user-activity"===e.source){let a=e.userActivityRecommendation?.relevanceReason;if(!a)return null;return{source:"user-activity",userActivityRelevanceReason:a,recommendationServiceRelevanceReason:null}}let a=e.recommendationServiceRecommendation?.relevanceReason;if(!a)return null;return{source:"recommendation-service",userActivityRelevanceReason:null,recommendationServiceRelevanceReason:a}}function u(e){if("user-activity"===e.source){let a=e.userActivityRelevanceReason?.timestamp,t=a?Number(a):null;return t?new Date(t):null}let a=e.recommendationServiceRelevanceReason?.relevanceTime;return a?new Date(a):null}function d(e){if("user-activity"===e.source)return e.userActivityRelevanceReason?.type??null;return e.recommendationServiceRelevanceReason?.type??null}function m(e){if("user-activity"===e.source)return e.userActivityRelevanceReason?.viewMetadata??null;return e.recommendationServiceRelevanceReason?.viewMetadata??null}let p={[s.Clx.ALERT]:s.z$1.ALERT,[s.Clx.ALERT_V2]:s.z$1.ALERT_V2,[s.Clx.APP]:s.z$1.APP,[s.Clx.APP_USE]:s.z$1.APP_USE,[s.Clx.ASSET_TYPE_UNSPECIFIED]:s.z$1.ASSET_TYPE_UNSPECIFIED,[s.Clx.DASHBOARD]:s.z$1.DASHBOARD,[s.Clx.DASHBOARD_V3]:s.z$1.DASHBOARD_V3,[s.Clx.DATA_ROOM]:s.z$1.DATA_ROOM,[s.Clx.DESIGNER_FILE]:s.z$1.DESIGNER_FILE,[s.Clx.ENDPOINT]:s.z$1.ENDPOINT,[s.Clx.ENDPOINT_CENTRIC_ENDPOINT]:s.z$1.ENDPOINT_CENTRIC_ENDPOINT,[s.Clx.EXPERIMENT]:s.z$1.EXPERIMENT,[s.Clx.FEATURE_TABLE]:s.z$1.FEATURE_TABLE,[s.Clx.FILE]:s.z$1.FILE,[s.Clx.FOLDER]:s.z$1.FOLDER,[s.Clx.JOB]:s.z$1.JOB,[s.Clx.LIBRARY]:s.z$1.LIBRARY,[s.Clx.MARKETPLACE_LISTING]:s.z$1.MARKETPLACE_LISTING,[s.Clx.MODEL]:s.z$1.MODEL,[s.Clx.NOTEBOOK]:s.z$1.NOTEBOOK,[s.Clx.PIPELINE]:s.z$1.PIPELINE,[s.Clx.PIPELINE_EDITOR]:s.z$1.PIPELINE_EDITOR,[s.Clx.PROJECT]:s.z$1.PROJECT,[s.Clx.QUERY]:s.z$1.QUERY,[s.Clx.UC_CATALOG]:s.z$1.UC_CATALOG,[s.Clx.UC_FUNCTION]:s.z$1.UC_FUNCTION,[s.Clx.UC_MODEL]:s.z$1.UC_MODEL,[s.Clx.UC_SCHEMA]:s.z$1.UC_SCHEMA,[s.Clx.UC_TABLE]:s.z$1.UC_TABLE,[s.Clx.UC_VOLUME]:s.z$1.UC_VOLUME};function g(e){if(!e)return null;let a=p[e];if(!a)return null;return a}function f(e){if("user-activity"===e.source){let a=e.userActivityRecommendation?.asset;if(!a||!a.id||!a.name||!a.type)return null;return a}let a=e.recommendationServiceRecommendation?.asset;if(!a||!a.id||!a.name||!a.type)return null;let t=g(a.type);if(!t)return null;let s="thumbnailUrl"in a?a.thumbnailUrl:null,n="modifiedAt"in a?a.modifiedAt:null,i="appMetadata"in a?a.appMetadata:null,r="tags"in a?a.tags:null;return{__typename:"UseractivityAsset",thumbnailUrl:s,id:a.id,name:a.name,type:t,modifiedAt:n,appMetadata:i,tags:r,treeNode:a.treeNode,unityCatalogSecurable:a.unityCatalogSecurable,userActivityInfo:a.userActivityInfo}}function b(e){let a;if("user-activity"===e.source){let a=e.userActivityRecommendation?.asset;if(!a||!a.id||!a.name||!a.type)return null;return e.userActivityRecommendation}let t=f(e);if(!t)return null;let s=c(e);return{__typename:"UseractivityAssetRecommendation",asset:t,relevanceReason:s?{__typename:"UseractivityRelevanceReason",timestamp:u(s)?.getTime().toString()??null,type:d(s),viewMetadata:(a=m(s))?{__typename:"UseractivityViewMetadata",viewFrequency:a.viewFrequency}:null}:null}}},143481:(e,a,t)=>{t.d(a,{B:()=>c});var s=t(692738),n=t(141078),i=t(221628),r=t(494989);let l=(0,n.J1)`
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
`,o=(e,a={})=>(0,n.IT)(l,{variables:e,...a}),c={useIsPermittedQuery:o,useEnhancedIsPermittedQuery:(e,a,t={},n=i.oq.IS_PERMITTED)=>{let[{getEncodedEtag:l},{setEtagQuiet:c}]=(0,i.e3)(n),u=o({...a,principalType:r.qI[e],consistencyToken:l()},t),d=u.data?.isPermitted?.consistencyToken;return(0,s.useEffect)(()=>{d&&c(d)},[d,c]),u}}},221628:(e,a,t)=>{t.d(a,{Kl:()=>c,e3:()=>u,oq:()=>l});var s,n=t(610435),i=t(692738),r=t(115234),l=((s={}).RULE_SET="rule-set",s.IS_PERMITTED="is-permitted",s.IS_BILLING_ADMIN="is-billing-admin",s.WORKSPACE_SETTINGS_ASSISTANT="workspace-settings-assistant",s.LLM_PROXY_PARTNER_POWERED="llm_proxy_partner_powered",s.GOVERNED_TAGS="governed-tags",s.GOVERNED_TAGS_ACCOUNT_LEVEL="governed-tags-account-level",s.DISCOVER_PERMISSIONS_ACCOUNT_LEVEL="discover-permissions-account-level",s.WORKSPACE_RESTRICT_SHARING="workspace-restrict-sharing",s);let o=i.createContext(null),c=({children:e})=>{let a=(0,i.useRef)({"is-permitted":{etag:"",encodedEtag:""},"is-billing-admin":{etag:"",encodedEtag:""},"rule-set":{etag:"",encodedEtag:""},"workspace-settings-assistant":{etag:"",encodedEtag:""},llm_proxy_partner_powered:{etag:"",encodedEtag:""},"governed-tags":{etag:"",encodedEtag:""},"governed-tags-account-level":{etag:"",encodedEtag:""},"discover-permissions-account-level":{etag:"",encodedEtag:""},"workspace-restrict-sharing":{etag:"",encodedEtag:""}}),t=(0,r.C)(),s=(0,i.useCallback)(e=>a.current[e].etag,[]),l=(0,i.useCallback)(e=>a.current[e].encodedEtag,[]),c=(0,i.useCallback)((e,t)=>{a.current[e]?.etag!==t&&(a.current[e]={etag:t,encodedEtag:encodeURIComponent(t)})},[]),u=(0,i.useCallback)((e,s)=>{a.current[e]?.etag!==s&&(c(e,s),t())},[t,c]),d=[{etagStateRef:a,getEncodedEtag:l,getEtag:s},{setEtag:u,setEtagQuiet:c}];return(0,n.Y)(o.Provider,{value:d,children:e})},u=e=>{let[{getEncodedEtag:a,getEtag:t},{setEtag:s,setEtagQuiet:n}]=(()=>{let e=i.useContext(o);if(!e)throw Error("useEtagContext must be called within an EtagContext Provider");return e})(),r=(0,i.useCallback)(()=>a(e),[a,e]),l=(0,i.useCallback)(()=>t(e),[t,e]),c=(0,i.useCallback)(a=>s(e,a),[s,e]),u=(0,i.useCallback)(a=>n(e,a),[n,e]);return(0,i.useMemo)(()=>[{getEncodedEtag:r,getEtag:l},{setEtag:c,setEtagQuiet:u}],[r,l,c,u])}},367313:(e,a,t)=>{t.d(a,{I:()=>m,UK:()=>g,Uk:()=>f,fP:()=>T,ix:()=>p,ol:()=>E});var s=t(141078),n=t(202855),i=t(831358),r=t(57025),l=t(133357),o=t(659789),c=t(984568),u=t(543963);let d=(0,s.J1)`
  fragment JobListPaginatedQueryTaskSettings on JobsTaskSettings {
    taskKey
    compute {
      hardwareAccelerator
    }
    task {
      alertTask @includeSafex(name: "alertv2_job_task", defaultValue: false) {
        alertId
        workspacePath
        warehouseId
        subscribers {
          userName
          destinationId
        }
      }
      notebookTask {
        notebookPath
        source
      }
      sparkJarTask {
        jarUri
        mainClassName
        parameters
        runAsRepl
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
      }
      pythonWheelTask {
        entryPoint
        packageName
      }
      dbtTask {
        projectDirectory
        catalog
        commands
        schema
        warehouseId
        profilesDirectory
      }
      runJobTask {
        jobId
      }
      sqlTask {
        # We don't actually care about warehouseId, we just need the sqlTask variable to be populated.
        # But GraphQL does not let you query an object without any of its fields.
        warehouseId
      }
      conditionTask {
        op
      }
      ...JobsAllTasksFragment
    }
    clusterSpec {
      existingClusterId
      jobClusterKey
      clusterInfo {
        attributes {
          name
          nodeTypeId
        }
        size {
          autoscale {
            minWorkers
            maxWorkers
          }
          numWorkers
        }
        state
      }
      newCluster {
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
          isSingleNode
          assignedPrincipal
          singleUserName
        }
        size {
          autoscale {
            minWorkers
            maxWorkers
          }
          numWorkers
        }
      }
    }
  }
  ${n.m}
`,m=(0,s.J1)`
  ${n.m}

  fragment JobTasksSettings on JobsJobSettings {
    name
    maxConcurrentRuns
    tasks {
      ...JobListPaginatedQueryTaskSettings
      task {
        forEachTask {
          task {
            ...JobListPaginatedQueryTaskSettings
          }
        }
      }
    }
    jobClusters {
      ...JobsJobClusterDetails
    }
    schedule {
      quartzCronExpression
      timezoneId
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
      periodic @include(if: $includePeriodicTrigger) {
        interval
        unit
      }
      pauseStatus
    }
    continuous {
      pauseStatus
      taskRetryMode @includeSafex(name: "databricks.fe.jaws.enableContinuousTriggerAdvanced", defaultValue: false)
    }
    tags {
      key
      value
    }
  }
  ${c.iD}
  ${d}
`,p=(0,s.J1)`
  query PaginatedJobListQuery(
    $limit: Int
    $offset: Int
    $pageToken: String
    $sortOrder: JobsListJobsSortOrder
    $sortBy: JobsListJobsSortBy
    $permissions: String
    $jobNameOrId: String
    $fetchCanCreate: Boolean!
    $numOfRuns: Int!
    $filter: String
    $externalApiVersion: ExternalApiVersion!
    $includeQueueReason: Boolean = false
    $includeRunStatus: Boolean = false
    $includePeriodicTrigger: Boolean = false
    $includeSubscriptions: Boolean = false
    $includeJobInRunJobTask: Boolean = false
    $includeJobParameters: Boolean = false
    $includeSourceInDbtAndSqlFile: Boolean = false
  ) @component(name: "Workflows.Observability.Lists") {
    jobsListJobs(
      input: {
        limit: $limit
        offset: $offset
        pageToken: $pageToken
        expandTasks: true
        includePermissionLevels: true
        sortOrder: $sortOrder
        sortBy: $sortBy
        permissions: $permissions
        jobNameOrId: $jobNameOrId
        filter: $filter
        externalApiVersion: $externalApiVersion
      }
    ) {
      jobs {
        jobId
        creatorUserName
        activeRuns(first: $numOfRuns) {
          edges {
            node {
              status
              statusV2 @include(if: $includeRunStatus) {
                ...RunStatusFragment
              }
              idInJob
              startTime
            }
          }
        }
        completedRuns(first: $numOfRuns) {
          edges {
            node {
              status
              statusV2 @include(if: $includeRunStatus) {
                ...RunStatusFragment
              }
              idInJob
              startTime
            }
          }
        }
        settings {
          ...JobTasksSettings
        }
        creatorUser {
          ...RichUserData
        }
        creatorPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
          ...AclPrincipalData
        }
        hasMore
        runAsUser {
          ...RichUserData
        }
        runAsPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
          ...AclPrincipalData
        }
        userActivityInfo @includeSafex(name: "databricks.fe.search.enableUserActivity", defaultValue: false) {
          isFavorite
          assetType
          assetId
        }
      }
      hasMore
      nextPageToken
      prevPageToken
      apiError {
        ...ApiErrorFields
      }
      permissionLevels {
        isOwner
        jobId
        permission
      }
    }
    jobsCanCreateJob(input: {}) @include(if: $fetchCanCreate) {
      canCreateJob
    }
  }

  ${m}
  ${o.n}
  ${u.WB}
  ${i.j}
  ${i.E}
`,g=(0,s.J1)`
  query JobListQuery(
    $first: Int!
    $fetchCanCreate: Boolean!
    $includeQueueReason: Boolean = false
    $includeRunStatus: Boolean = false
    $includePeriodicTrigger: Boolean = false
    $includeSubscriptions: Boolean = false
    $includeJobInRunJobTask: Boolean = false
    $includeJobParameters: Boolean = false
    $includeSourceInDbtAndSqlFile: Boolean = false
  ) @component(name: "Workflows.Observability.Lists") {
    jobs(first: $first) {
      edges {
        ...JobClusterColumn
        ...UnpaginatedJobTaskColumn
        node {
          id
          creator {
            id
            name
          }
          activeRuns(first: 1) {
            edges {
              node {
                status
                statusV2 @include(if: $includeRunStatus) {
                  ...RunStatusFragment
                }
                idInJob
                startTime
              }
            }
          }
          completedRuns(first: 1) {
            edges {
              node {
                status
                statusV2 @include(if: $includeRunStatus) {
                  ...RunStatusFragment
                }
                idInJob
                startTime
              }
            }
          }
          settings {
            name
            maxConcurrentRuns
            schedule {
              quartzCronExpression
              timezoneId
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
              taskRetryMode
                @includeSafex(name: "databricks.fe.jaws.enableContinuousTriggerAdvanced", defaultValue: false)
            }
            tags {
              key
              value
            }
          }
          creatorUser {
            ...RichUserData
          }
          creatorPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
            ...AclPrincipalData
          }
          userActivityInfo @includeSafex(name: "databricks.fe.search.enableUserActivity", defaultValue: false) {
            isFavorite
            assetType
            assetId
          }
        }
      }
    }
    jobsCanCreateJob(input: {}) @include(if: $fetchCanCreate) {
      canCreateJob
    }
  }
  ${r.zr}
  ${u.WB}
  ${c.WQ}
  ${l.p}
  ${i.j}
  ${i.E}
`,f=(0,s.J1)`
  query RunJobTaskSelectJobsList(
    $limit: Int
    $sortOrder: JobsListJobsSortOrder
    $sortBy: JobsListJobsSortBy
    $permissions: String
    $jobNameOrId: String
  ) @component(name: "Workflows.Observability.Lists") {
    jobsListJobs(
      input: {
        limit: $limit
        offset: 0
        sortOrder: $sortOrder
        sortBy: $sortBy
        permissions: $permissions
        jobNameOrId: $jobNameOrId
      }
    ) {
      jobs {
        jobId
        settings {
          name
        }
      }
      apiError {
        ...ApiErrorFields
      }
    }
  }
  ${o.n}
`,b=(0,s.J1)`
  fragment JobDetails on Job {
    id
    lastUpdatedTime
    creator {
      id
      name
    }
  }
`,E=(0,s.J1)`
  mutation JobCancelAllRuns($input: JobCancelAllRunsInput!) @component(name: "Workflows.Orchestration.Other") {
    jobCancelAllRuns(input: $input) {
      entity {
        ...JobDetails
      }
      errors {
        ...ApiErrorFields
      }
    }
  }
  ${b}
  ${o.n}
`,T=(0,s.J1)`
  query JobListPermissionLevels @component(name: "Workflows.Orchestration.Other") {
    jobListPermissionLevels @rest(type: "JobsPermissionLevelsResponse", path: "/jobs/list-permission-levels") {
      manageAllJobs
      permissionLevels @type(name: "JobPermissionLevel") {
        isOwner
        jobId
        permission
      }
    }
  }
`},494989:(e,a,t)=>{t.d(a,{F$:()=>R,Fe:()=>P,O$:()=>A,O9:()=>L,QW:()=>v,ee:()=>U,no:()=>$,qI:()=>f,sc:()=>y,tE:()=>h});var s,n,i=t(778529),r=t.n(i);if(13057==t.j)var l=t(441535);if(13057==t.j)var o=t(886100);if(13057==t.j)var c=t(22191);if(13057==t.j)var u=t(747129);if(13057==t.j)var d=t(209908);if(13057==t.j)var m=t(616795);var p=t(819),g=t(842776);let f={[p.JG.GROUP]:"groups",[p.JG.SERVICE_PRINCIPAL]:"servicePrincipals",[p.JG.BUDGET_POLICY]:"budgetPolicies"};var b=((s={}).SERVICE_PRINCIPAL_MANAGER="roles/servicePrincipal.manager",s.SERVICE_PRINCIPAL_USER="roles/servicePrincipal.user",s.GROUP_MANAGER="roles/group.manager",s.GROUP_ASSUMER="roles/group.assumer",s.BUDGET_POLICY_USER="roles/budgetPolicy.user",s.BUDGET_POLICY_MANAGER="roles/budgetPolicy.manager",s);let E={"roles/servicePrincipal.manager":"Manage","roles/servicePrincipal.user":"Use"},T={"roles/budgetPolicy.user":"Serverless budget policy: User","roles/budgetPolicy.manager":"Serverless budget policy: Manager"},I={"roles/budgetPolicy.user":"Serverless usage policy: User","roles/budgetPolicy.manager":"Serverless usage policy: Manager"};function _(e,a){let t=(0,l.W)("databricks.fe.enableAssumeGroupSettingsCheck",!1)?(0,l.W)("excl_data_access",!1):(0,l.W)("databricks.fe.adminUi.enableAssumeGroupUi",!1),s=(0,l.W)("databricks.fe.enableAssumeGroupForRegularGroup",!1);return{"roles/group.manager":e.formatMessage({id:"ilJIQs",defaultMessage:"Manage"}),"roles/group.assumer":(s?t:a&&t)?e.formatMessage({id:"3bK4kM",defaultMessage:"Assume"}):""}}function R(e,a){let t=(0,l.W)("databricks.fe.budget_policy.renameServerlessPolicy",!1);return{...E,..._(e,a?.isExclusive),...t?I:T}}function v(e,a){let t=(0,l.W)("databricks.fe.budget_policy.renameServerlessPolicy",!1);return{[p.JG.GROUP]:Object.entries(_(e,a?.isExclusive)).filter(([e,a])=>a),[p.JG.SERVICE_PRINCIPAL]:Object.entries(E),[p.JG.BUDGET_POLICY]:Object.entries(t?I:T)}}var C=((n=C||{}).CreateRoleToPrincipalsMap="createRoleToPrincipalsMap",n.ConvertGrantRulesToFilterMapGraphQL="convertGrantRulesToFilterMapGraphQL",n.ConvertGrantRulesToClientPermissionsHelper="convertGrantRulesToClientPermissionsHelper",n);let S=e=>{let{eventId:a,isSuccess:t,debugBlob:s}=e;o.iT.sev2BurnRate(c.Es.CustomerPlatform,a,u.i1.P99,u.Ip.Min10,t,s)};function P(e,a){return e.every(e=>a?(e.roles?.length??0)>0&&e.displayName?.length:e.displayName?.length)}function y(e,a){let t,s,{rules:n,...i}=a;return{...i,grantRules:[...(t=Object.values((0,m.G)(e,({principalString:e})=>e)),s=new Map,t.forEach(e=>{let{principalString:a,roles:t}=e;if(!a)return void S({eventId:"createRoleToPrincipalsMap",isSuccess:!1,debugBlob:{permission:e,message:`principalString field was not found on permission: ${e}`}});S({eventId:"createRoleToPrincipalsMap",isSuccess:!0}),t?.forEach(e=>{let t=s.get(e)??new Set;t.add(a),s.set(e,t)})}),s).entries()].map(([e,a])=>({role:e,principals:[...a]}))}}function h(e){let a={[p.JG.GROUP]:new Set,[p.JG.SERVICE_PRINCIPAL]:new Set,[p.JG.USER]:new Set};return e.forEach(e=>{(e.principals??[]).forEach(e=>{let t=e.indexOf("/");if(-1===t)return void S({eventId:"convertGrantRulesToFilterMapGraphQL",isSuccess:!1,debugBlob:{message:`Principal ${e} does not contain a '/' separator`}});let s=e.substring(0,t),n=e.substring(t+1),i=p.qU[s];if(r()(i)||!(i in p.LV))return void S({eventId:"convertGrantRulesToFilterMapGraphQL",isSuccess:!1,debugBlob:{message:`Principal ${e} could not be mapped to a principal type`}});S({eventId:"convertGrantRulesToFilterMapGraphQL",isSuccess:!0});let l=p.LV[i],o=(0,d.IW)(n),c=`${l}="${o}"`;a[i].add(c)})}),{[p.JG.GROUP]:{filter:[...a[p.JG.GROUP]].join(" OR "),principalCount:a[p.JG.GROUP].size},[p.JG.SERVICE_PRINCIPAL]:{filter:[...a[p.JG.SERVICE_PRINCIPAL]].join(" OR "),principalCount:a[p.JG.SERVICE_PRINCIPAL].size},[p.JG.USER]:{filter:[...a[p.JG.USER]].join(" OR "),principalCount:a[p.JG.USER].size}}}function A(e,a,t,s,n){let i,l,o=[...a.map(e=>({principalType:p.JG.GROUP,displayName:e.groupname||""})),...t.map(e=>({principalType:p.JG.SERVICE_PRINCIPAL,displayName:e.fullname||"",applicationId:e.applicationId||""})),...s.map(e=>({principalType:p.JG.USER,displayName:e.fullname,userName:e.email||""}))];return(i=(0,m.G)(o,e=>(0,p.IC)(e)),l=new Map,e.forEach(a=>{if(r()(a))return;let{role:t}=a;(a.principals??[]).forEach(a=>{let s=i[a];if(r()(s))return void S({eventId:"convertGrantRulesToClientPermissionsHelper",isSuccess:!1,debugBlob:{grantRules:e,principals:o,message:`Could not find principal for principal string: ${a}`}});S({eventId:"convertGrantRulesToClientPermissionsHelper",isSuccess:!0});let n=(0,p.p3)(s),c=l.get(a)??{principalString:a,displayName:n},u=c.roles??[];"string"==typeof t&&Object.values(b).includes(t)?l.set(a,{principalString:a,displayName:n,roles:[...new Set([...u,t])]}):l.set(a,c)})}),[...l.values()]).map(e=>({...e,isExclusive:n}))}let U={[p.JG.GROUP]:g.i.UPDATE_GROUP_RULE_SET,[p.JG.SERVICE_PRINCIPAL]:g.i.UPDATE_SERVICE_PRINCIPAL_RULE_SET,[p.JG.BUDGET_POLICY]:g.i.UPDATE_BUDGET_POLICY_RULE_SET},$=()=>(0,l.W)("databricks.fe.budget_policy.displayUsagePolicyModificationImpact",!1),L=()=>!0===(0,l.W)("usage_policy_entitle",null)},497275:(e,a,t)=>{t.d(a,{oA:()=>O,Jd:()=>k,fN:()=>G,CW:()=>N});var s=t(610435),n=t(692738),i=t(79570),r=t(342411),l=t(295169),o=t(382908),c=t(126927),u=t(79128),d=t(694762),m=t(339518),p=t(225352),g=t(615693),f=t(217985),b=t(737358);let E=(e,a)=>{if(e.catalogName!==a.catalogName)return a.catalogName?e.catalogName?.localeCompare(a.catalogName)??1:-1;if(e.schemaName!==a.schemaName)return a.schemaName?e.schemaName?.localeCompare(a.schemaName)??1:-1;if(e.name!==a.name)return a.name?e.name?.localeCompare(a.name)??1:-1;return 0},T=e=>{let a=[...e];return a.sort(E),a},I=({data:e})=>{let a=(0,r.tz)(),t=(0,n.useMemo)(()=>{let t=[];return e.upstreamTables?.length&&t.push(_({tables:T(e.upstreamTables.filter(e=>null!==e)),title:a.formatMessage(R.upstreamTitle,{tablesCount:e.upstreamTables.length,isSingleTable:1===e.upstreamTables.length}),key:"upstream"})),e.downstreamTables?.length&&t.push(_({tables:T(e.downstreamTables.filter(e=>null!==e)),title:a.formatMessage(R.downstreamTitle,{tablesCount:e.downstreamTables.length,isSingleTable:1===e.downstreamTables.length}),key:"downstream"})),t},[e,a]);return(0,s.Y)(p.P,{defaultExpandedKeys:["upstream","downstream"],mode:"default",treeData:t,"data-testid":"jobs-lineage-table-tree"})},_=({tables:e,title:a,key:t})=>({key:t,title:a,children:e.map((e,a)=>({key:`${t}-${a}`,title:(({table:e,testId:a})=>{let t=e?.hasPermission??!0?(0,s.Y)(i.m,{content:v.viewInTheDataExplorer,componentId:"lineage-table-row-data-explorer-link-tooltip",children:(0,s.Y)(f.N,{componentId:"codegen_webapp_js_jaws_jobs_side_panel_lineagetabletree.tsx_111",to:(0,b.tW)("/explore/data/:catalogName/:schemaName/:name",{catalogName:e.catalogName??"",schemaName:e.schemaName??"",name:e.name??""}),asChild:!0,children:(0,s.FD)(o.o.Link,{componentId:"codegen_webapp_js_jaws_jobs_side_panel_lineagetabletree.tsx_122",ellipsis:!0,"data-testid":a,title:`${e.catalogName}.${e.schemaName}.${e.name}`,children:[e.catalogName,".",e.schemaName,".",e.name]})})}):(0,s.Y)(i.m,{content:v.insufficientPrivileges,componentId:"lineage-table-row-insufficient-privileges-tooltip",children:(0,s.Y)("span",{children:(0,s.Y)(o.o.Text,{color:"secondary","data-testid":a,children:v.masked})})});return(0,s.FD)("div",{css:e=>({display:"flex",gap:e.spacing.sm,alignItems:"center"}),children:[(0,s.Y)(g.A,{}),t]})})({table:e,testId:`jobs-lineage-${t}-${a}`})}))}),R={upstreamTitle:(0,r.zR)({id:"LEwgKt",defaultMessage:"Upstream {isSingleTable, select, true {table} other {tables}} read by this job ({tablesCount})"}),downstreamTitle:(0,r.zR)({id:"yLov8W",defaultMessage:"Downstream {isSingleTable, select, true {table} other {tables}} written to by this job ({tablesCount})"})},v={masked:(0,s.Y)(r.sA,{id:"Yuo1zW",defaultMessage:"Masked"}),insufficientPrivileges:(0,s.Y)(r.sA,{id:"1r+OJH",defaultMessage:"Insufficient privileges to view this table"}),viewInTheDataExplorer:(0,s.Y)(r.sA,{id:"+eeVie",defaultMessage:"View in the Catalog Explorer"})},C=({data:e,isModalVisible:a,handleCancel:t})=>(0,s.FD)(d.aF,{componentId:"codegen_webapp_js_jaws_jobs_side_panel_modals_lineagemodal.tsx_21",title:(0,s.Y)(o.o.Text,{size:"xl",ellipsis:!0,children:S.modalTitle}),cancelText:(0,s.Y)(r.sA,{id:"vzEllG",defaultMessage:"Close"}),visible:a,onCancel:t,"aria-label":"Lineage","data-testid":"jobs-lineage-modal",cancelButtonProps:{"data-testid":"jobs-lineage-modal-cancel-button"},children:[(0,s.Y)(m.F,{componentId:"codegen_webapp_js_jaws_jobs_side_panel_modals_lineagemodal.tsx_36",type:"info",message:S.lineageInfoWarning,closable:!1,"data-testid":"jobs-lineage-modal-alert",css:e=>({marginBottom:e.spacing.lg})}),(0,s.Y)(I,{data:e})]}),S={lineageInfoWarning:(0,s.Y)(r.sA,{id:"MAui1F",defaultMessage:"The following is the combined lineage data from runs of this job in the past 30 days."}),modalTitle:(0,s.Y)(r.sA,{id:"wK/S2D",defaultMessage:"Tables related to this job"})};var P=t(620839),y=t(67656);let h=({data:e,loading:a})=>{let[t,i]=(0,n.useState)(!1);if(a)return(0,s.Y)(l.x,{"data-testid":"jobs-lineage-value-loading-skeleton",style:{width:130,height:20}});if(0===(e.downstreamTables?.length??0)+(e.upstreamTables?.length??0)){let e=y.R.getDbGuideUrl(P.A.LINEAGE_DOCS);return(0,s.FD)(s.FK,{children:[(0,s.Y)(o.o.Text,{color:"secondary","data-testid":"jobs-lineage-value-field",css:{display:"flex",alignItems:"center"},children:A.noLineage(e.length)}),e.length>0&&(0,s.FD)(o.o.Link,{componentId:"codegen_webapp_js_jaws_jobs_side_panel_lineagevaluefield.tsx_50","data-testid":"jobs-lineage-info-button",href:e,target:"_blank",children:[A.learnMore," ",(0,s.Y)(c.A,{})]})]})}let d=e.upstreamTables?.length??0,m=e.downstreamTables?.length??0,p=e.hasMoreUpstream&&d>0?`${d}+`:d,g=e.hasMoreDownstream&&m>0?`${m}+`:m;return(0,s.FD)(s.FK,{children:[(0,s.Y)(u.$n,{componentId:"codegen_webapp_js_jaws_jobs_side_panel_lineagevaluefield.tsx_67",type:"link",onClick:()=>{i(!0)},"data-testid":"jobs-lineage-modal-button",css:{whiteSpace:"normal",textAlign:"left"},children:(0,s.Y)(r.sA,{id:"+yaZ1c",defaultMessage:"{upstreamTablesCount} upstream {isSingleUpstreamTable, select, true {table} other {tables}}, {downstreamTablesCount} downstream {isSingleDownstreamTable, select, true {table} other {tables}}",values:{upstreamTablesCount:p,downstreamTablesCount:g,isSingleUpstreamTable:1===d,isSingleDownstreamTable:1===m}})}),(0,s.Y)(C,{data:e,isModalVisible:t,handleCancel:()=>{i(!1)}})]})},A={noLineage:e=>(0,s.Y)(r.sA,{id:"AU13An",defaultMessage:"No lineage information for this job{docLinkNum, plural, =0 {} other {. }}",values:{docLinkNum:e}}),learnMore:(0,s.Y)(r.sA,{id:"mOaW/9",defaultMessage:"Learn more"})};var U=t(663415),$=t(558709),L=t(921625);let k={upstreamTables:[],downstreamTables:[],hasMoreDownstream:!1,hasMoreUpstream:!1},N=()=>(0,U.Hx)(),O=({tooltipDescriptor:e,data:a,loading:t})=>(0,s.Y)(L.K,{keyField:(0,s.FD)("span",{style:{display:"inline-flex",alignItems:"center"},children:[D.lineage," ",(0,s.Y)(w,{tooltipDescriptor:e})]}),valueField:(0,s.Y)(h,{data:a,loading:t}),testId:"jobs-lineage",compact:!0}),w=({tooltipDescriptor:e})=>(0,s.Y)(i.m,{side:"left",content:e,componentId:"lineage-key-value-info-tooltip",children:(0,s.Y)($.K,{})}),D={lineage:(0,s.Y)(r.sA,{id:"PFP5pg",defaultMessage:"Lineage"})},G={jobDetails:(0,s.Y)(r.sA,{id:"GEhcGr",defaultMessage:"<p>Aggregated lineage information of the job.</p><p>Lineage includes all the tables this job reads from (upstream) as well as all the tables this job writes into (downstream). This feature is only available for Unity Catalog tables.</p>",values:{p:e=>(0,s.Y)("p",{children:e})}}),jobRunDetails:(0,s.Y)(r.sA,{id:"RIIt1E",defaultMessage:"<p>Aggregated lineage information of the job. May not be accurate for this particular job run.</p><p>Lineage includes all the tables this job reads from (upstream) as well as all the tables this job writes into (downstream). This feature is only available for Unity Catalog tables.</p>",values:{p:e=>(0,s.Y)("p",{children:e})}}),taskRunDetails:(0,s.Y)(r.sA,{id:"XnYp3a",defaultMessage:"<p>Aggregated lineage information of the job. May not be related to this particular task run.</p><p>Lineage includes all the tables this job reads from (upstream) as well as all the tables this job writes into (downstream). This feature is only available for Unity Catalog tables.</p>",values:{p:e=>(0,s.Y)("p",{children:e})}})}},616795:(e,a,t)=>{t.d(a,{G:()=>i});var s=t(778529),n=t.n(s);function i(e,a){return e.reduce((e,t)=>{let s=a(t);if(n()(s))return e;return e[s]=t,e},{})}},653481:(e,a,t)=>{if(t.d(a,{Ef:()=>p,Wj:()=>m,_7:()=>f,mb:()=>g,u7:()=>d}),13057==t.j)var s=t(846947);if(13057==t.j)var n=t(861728);var i=t(141078),r=t(889885);if(13057==t.j)var l=t(221628);if(13057==t.j)var o=t(143481);if(13057==t.j)var c=t(819);if(13057==t.j)var u=t(842776);let d=(0,i.J1)`
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
`,m=e=>b(e,u.i.UPDATE_BUDGET_POLICY_RULE_SET),p=e=>b(e,u.i.UPDATE_BUDGET_POLICY,!(0,s.ok)()),g=e=>b(e,u.i.DELETE_BUDGET_POLICY,!(0,s.ok)()),f=e=>{let{error:a,loading:t}=e,{errors:s,isPermitted:i}=e.data?.isPermitted??{};return s?.[0]||a?n.cR.FAILED_TO_QUERY:t?n.cR.LOADING:i?n.cR.PERMITTED:n.cR.REJECTED},b=(e,a,t=!1)=>{let s=(0,r.FI)("accountId")??"",n=(0,r.FI)("userId");return o.B.useEnhancedIsPermittedQuery(c.JG.BUDGET_POLICY,{accountId:s,principalId:e,permission:a},{skip:!s||!n||t},l.oq.RULE_SET)}},663415:(e,a,t)=>{t.d(a,{CI:()=>I,Hx:()=>g,Jc:()=>v,PN:()=>h,T9:()=>_,WQ:()=>T,bJ:()=>C,mW:()=>S,ms:()=>P,nG:()=>R,vW:()=>A});var s=t(921338),n=t.n(s),i=t(692738),r=t(641760),l=t(409989),o=t(573939),c=t(889885),u=t(29953);function d(e,a,t,s,n,i,r){try{var l=e[i](r),o=l.value}catch(e){t(e);return}l.done?a(o):Promise.resolve(o).then(s,n)}function m(e){return function(){var a=this,t=arguments;return new Promise(function(s,n){var i=e.apply(a,t);function r(e){d(i,s,n,r,l,"next",e)}function l(e){d(i,s,n,r,l,"throw",e)}r(void 0)})}}let p=(0,l.TC)("/ajax-api/2.1/unity-catalog"),g=e=>!!(e?(0,c.FI)("enableMultiLevelSchemaBrowser")&&e!==o.UQ:(0,c.FI)("enableMultiLevelSchemaBrowser"))&&(0,r.ei)(),f=(e,a)=>{let t=Object.keys(a).reduce((e,t)=>`${e}&${t}=${encodeURIComponent(a[t])}`,""),s=e+(t?`?${t.substr(1)}`:"");return g(a.catalog_name)?s:void 0};function b(e,a){if(e&&a){let t=a.status,s=a.data?.message;if(void 0===t)return void u.o.logClientSideEvent("ucApiCall",`${e}UnknownError`,{status:void 0,messageResult:s});t>=200&&t<300||304===t?u.o.logClientSideEvent("ucApiCall",`${e}Success`,{status:t}):404===t?u.o.logClientSideEvent("ucApiCall",`${e}NotFound`,{status:t,messageResult:s}):u.o.logClientSideEvent("ucApiCall",[429,503].includes(t)?`${e}Retryable`:`${e}Error`,{status:t,messageResult:s})}}function E(e,a,t){let s,[r,l]=(0,i.useState)(0),[o,c]=(0,i.useState)(a),[u,d]=(0,i.useState)(!1),[g,f]=(0,i.useState)(void 0),E=(s=(0,i.useRef)(!0),(0,i.useEffect)(()=>()=>{s.current=!1},[]),s);return(0,i.useEffect)(()=>{let a=n().CancelToken.source(),s=E.current;return e&&m(function*(){d(!0),f(void 0);try{let n=yield p.get(e,{cancelToken:a.token});s&&(d(!1),f(void 0),c(n.data),b(t,n))}catch(e){s&&(d(!1),f(e.toString()),b(t,e.response))}})(),()=>{s||a.cancel("Cleanup")}},[r,e,E,t]),{fetchResponse:{data:o,isLoading:u,error:g},refresh:()=>l(e=>e+1)}}let T=e=>{let{fetchResponse:a,refresh:t}=E(f("catalogs",e?.includeBrowse?{include_browse:!0}:{}),{catalogs:[]},e?.eventDebugStr);return{fetchCatalogsResponse:a,refreshCatalogs:t}},I=(e,a)=>{let{fetchResponse:t,refresh:s}=E(f("schemas",{catalog_name:e.catalogName}),{schemas:[]},a);return{fetchSchemasResponse:t,refreshSchemas:s}},_=e=>{let{fetchResponse:a,refresh:t}=E(g()?"securable-tags":void 0,{tags:[]},e);return{fetchTagsResponse:a,refreshTags:t}},R=(e,a)=>m(function*(){let t={catalog_name:e};a?.includeBrowse&&(t.include_browse=!0);let s=yield p.get("/schemas",{params:t});return b(a?.eventDebugStr,s),s.data||s})(),v=(e,a)=>{let[t,s]=(0,i.useState)(e.databaseName||""),n=f("tables",{catalog_name:e.catalogName,schema_name:t}),{fetchResponse:r,refresh:l}=E(t?n:void 0,{tables:[]},a);return{fetchTablesResponse:r,refreshTables:l,setSelectedSchema:s,selectedSchema:t}},C=(e,a)=>{let[t,s]=(0,i.useState)(e.catalogName),n=T({eventDebugStr:a}),r=I({catalogName:t},a),l=v({catalogName:t,databaseName:e.databaseName},a);return{...n,...r,...l,setSelectedSchema:l.setSelectedSchema,setSelectedCatalog:s,catalogName:t,schemaName:l.selectedSchema}},S=(e,a)=>{let t=`tables/${encodeURIComponent(e.catalogName)}.${encodeURIComponent(e.databaseName)}.${encodeURIComponent(e.tableName)}`,{fetchResponse:s,refresh:n}=E(g(e.catalogName)?t:void 0,{name:"",full_name:"",catalog_name:"",schema_name:"",type_text:"",columns:[],data_source_format:"",comment:"",created_at:0,updated_at:0},a);return{fetchTableResponse:s,refreshTable:n}},P=(e,a)=>{if(!e){let e=a?.cluster?.attributes?.sparkConf?.find(e=>e?.key==="spark.databricks.sql.initial.catalog.name");if(e)return e.value}return o.UQ},y=()=>E("user-info/me",{is_metastore_admin:!1}),h=()=>y().fetchResponse.data?.is_metastore_admin??!1,A=()=>{let{fetchResponse:e}=y();return{isMetastoreAdmin:e.data?.is_metastore_admin??!1,isLoading:e.isLoading}}},842776:(e,a,t)=>{t.d(a,{i:()=>n});var s,n=((s={}).GET_SERVICE_PRINCIPAL_RULE_SET="servicePrincipal.ruleSet/get",s.UPDATE_SERVICE_PRINCIPAL_RULE_SET="servicePrincipal.ruleSet/update",s.GET_GROUP_RULE_SET="group.ruleSet/get",s.UPDATE_GROUP_RULE_SET="group.ruleSet/update",s.UPDATE_GROUP="group/update",s.UPDATE_BUDGET_POLICY_RULE_SET="budgetPolicy.ruleSet/update",s.GET_BUDGET_POLICY_RULE_SET="budgetPolicy.ruleSet/get",s.USE_BUDGET_POLICY="budgetPolicy/use",s.MANAGE_BUDGET_POLICY="budgetPolicy/manage",s.CREATE_BUDGET_POLICY="budgetPolicy/create",s.DELETE_BUDGET_POLICY="budgetPolicy/delete",s.UPDATE_BUDGET_POLICY="budgetPolicy/update",s.GET_BUDGET_POLICY="budgetPolicy/get",s)},861728:(e,a,t)=>{if(t.d(a,{NS:()=>u,YQ:()=>l,cR:()=>o,i0:()=>c,tE:()=>r}),13057==t.j)var s,n=t(610435);if(13057==t.j)var i=t(956935);t(692738);let r=Function.prototype,l=({title:e,align:a})=>(0,n.Y)("div",{title:e,css:(0,i.AH)("text-align:",a||"left",";"),children:"-"});var o=((s={}).LOADING="loading",s.FAILED_TO_QUERY="failedToLoad",s.PERMITTED="permitted",s.REJECTED="rejected",s);let c=e=>!!(e?.startsWith("databricks:default")||e?.startsWith("databricks-default-policy")),u=e=>e?.policyName==="databricks-unrestricted-policy"}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/91322.0730600803.chunk.js.map