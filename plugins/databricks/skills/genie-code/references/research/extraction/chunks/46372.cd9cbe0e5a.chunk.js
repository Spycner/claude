"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[46372],{68210:(e,t,n)=>{n.d(t,{x:()=>p});var i=n(610435);n(692738);var a=n(497895),r=n(485065),o=n(382908),l=n(342411),s=n(724283),c=n(191736),u=n(80668),d=n(778377);function p({pipelineId:e}){return(0,i.Y)(f,{pipelineId:e})}function f({pipelineId:e}){let t,{theme:n}=(0,a.wn)(),{data:p,loading:m}=s.z.usePipelineGetMinimalData({variables:{input:{pipelineId:e}},skip:!e,fetchPolicy:"cache-first"}),g=p?.deltapipelinesGet?.status?.name,h=n.typography.fontSizeBase,b=(0,i.Y)(r.A,{css:{fontSize:h},"data-testid":"jaws-dag-pipeline-path-icon"});return t=m?(0,i.Y)(u.P,{}):g?(0,i.FD)(i.FK,{children:[(0,i.Y)(l.sA,{id:"9yfnnr",defaultMessage:"Pipeline:"})," ",(0,i.Y)(c.$,{children:g})]}):(0,i.Y)(o.o.Text,{children:(0,i.Y)(l.sA,{id:"gj63Zw",defaultMessage:"Pipeline"})}),(0,i.Y)(d.M,{icon:b,children:t})}},80668:(e,t,n)=>{n.d(t,{P:()=>o});var i=n(610435);n(692738);var a=n(402720),r=n(342411);function o(){let e=(0,r.tz)();return(0,i.Y)("div",{css:{width:"100%"},"aria-label":e.formatMessage({id:"USxZV6",defaultMessage:"loading"}),"aria-busy":"true",children:(0,i.Y)(a.P,{active:!0,paragraph:{rows:0,style:{margin:0,padding:0}},title:{width:"100%",style:{height:20,margin:0,padding:0}}})})}},102876:(e,t,n)=>{n.d(t,{x:()=>i});function i(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[n,i]of e)if(!Object.is(i,t.get(n)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}let n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let i of n)if(!Object.prototype.hasOwnProperty.call(t,i)||!Object.is(e[i],t[i]))return!1;return!0}},112807:(e,t,n)=>{e.exports=n(731707)},154968:(e,t,n)=>{n.d(t,{n:()=>a});var i=n(141078);let a=(0,i.J1)`
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
`},157656:(e,t,n)=>{n.r(t),n.d(t,{PipelineTaskRunDAGNode:()=>l});var i=n(610435);n(692738);var a=n(221970),r=n(68210),o=n(280675);function l({baseTaskNodeProps:e,taskRun:t,ariaLabel:n}){let s=t.settings.task.pipelineTask?.pipelineId,c=(0,o.c)(s);return(0,i.Y)(a.a,{baseTaskNodeProps:e,taskRun:t,ariaLabel:n,ariaLabelHint:c,children:(0,i.Y)(r.x,{pipelineId:s})})}},187826:(e,t,n)=>{n.d(t,{Lw:()=>r,ij:()=>a,pf:()=>o});var i=n(692738);let a=(0,i.createContext)(null);function r(){let e=(0,i.useContext)(a);if(!e)throw Error("usePipelineContextWithStatus can only be used inside a <PipelineContext.Provider/>");return e}function o(){let{data:e}=r();if(!e)throw Error("`usePipelineContextUnsafe` can only be used if the pipeline has been successfully loaded. Use `usePipelineContextWithStatus` to handle the other cases.");return e}},191736:(e,t,n)=>{n.d(t,{$:()=>o});var i=n(610435),a=n(692738),r=n(79570);function o({children:e,tooltipTitle:t,truncateFromStart:n}){let l=(0,a.useRef)(null),[s,c]=(0,a.useState)(!1);(0,a.useEffect)(()=>{if(!l.current)return;let{offsetWidth:e,scrollWidth:t}=l.current;c(t>e)},[e,l]);let u=(0,i.Y)("span",{ref:l,css:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflowX:"hidden",...s&&n&&{direction:"rtl"},"&:before, &:after":{content:'"‎"'}},children:e});return s?(0,i.Y)(r.m,{content:t??e,componentId:"ellipsis-text-tooltip",children:u}):u}},278536:(e,t,n)=>{n.d(t,{n:()=>l});let i="#CC3352",a="#F69CAD",r="#C4CDD4",o="#308813",l={"Internal error":i,Failed:i,Skipped:a,"Upstream failed":a,"Upstream canceled":a,Evicted:a,"Upstream evicted":a,"Timed out":a,Canceled:a,Canceling:a,"Maximum concurrent runs reached":a,Pending:r,Terminated:r,Terminating:r,Blocked:r,Queued:r,SkippedByCustomerCode:"#CCCCCC",Excluded:"#5A5A5A",Disabled:"#5A5A5A",Running:"#4FB26E",Succeeded:o,"Succeeded with failures":o,"Waiting for retry":"#FACB66"}},280675:(e,t,n)=>{n.d(t,{c:()=>r});var i=n(342411),a=n(724283);function r(e){let t=(0,i.tz)(),{data:n}=a.z.usePipelineGetMinimalData({variables:{input:{pipelineId:e}},skip:!e,fetchPolicy:"cache-first"}),r=n?.deltapipelinesGet?.status?.name;if(r)return t.formatMessage({id:"sINkey",defaultMessage:"Pipeline: {pipelineName}"},{pipelineName:r});if(e)return t.formatMessage({id:"vFwj5L",defaultMessage:"Pipeline: {pipelineId}"},{pipelineId:e})}},532411:(e,t,n)=>{n.d(t,{H6:()=>a,Hz:()=>s,LK:()=>c,Us:()=>u,Vu:()=>l,_1:()=>o,tk:()=>r});var i=n(956935);let a=5,r=.75,o=8,l=e=>e.colors.blue400,s=e=>e.colors.blue600,c=e=>e.colors.blue600;function u(e){let t=e.isDarkMode?e.colors.actionDefaultBackgroundHover:e.colors.blue100;return{handleRight:(0,i.AH)({background:"transparent",borderColor:"transparent",right:0,top:28}),handleLeft:(0,i.AH)({background:"transparent",borderColor:"transparent",left:-3,top:28}),titleText:(0,i.AH)({width:"230px",lineHeight:`${e.typography.lineHeightSm} !important`}),backgroundHack:(0,i.AH)({"&:hover":{backgroundColor:t},borderRadius:"4px",width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:0})}}},661152:(e,t,n)=>{n.d(t,{I2:()=>c,TE:()=>o,cR:()=>s,oA:()=>l});var i=n(141078),a=n(154968);let r=(0,i.J1)`
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
`,o=(0,i.J1)`
  query PipelineGetQuery($input: DeltapipelinesGetPipelineInput!) @component(name: "Workflows.Authoring.UI") {
    deltapipelinesGet: jobsGetPipeline(input: $input) {
      ...PipelineGetFragment
      apiError {
        ...PipelineApiErrorFields
      }
    }
  }
  ${r}
  ${a.n}
`;function l({variables:e,...t}={}){return(0,i.IT)(o,{variables:e,...t})}function s(e){return(0,i._l)(o,e)}function c({variables:e,...t}={}){let n=(0,i.IT)(o,{variables:e,...t,fetchPolicy:"cache-and-network"});if(!t.skip&&void 0===n.data&&!n.error)throw new Promise(e=>{n.observable.subscribe({next(t){t.loading||e(t)}})});return n}},731707:(e,t,n)=>{var i=n(692738);t.default=function(e,t){var n=i.useRef();i.useEffect(function(){n.current=e},[e]),i.useEffect(function(){if(null!==t){var e=setInterval(function(){return n.current.apply(n,arguments)},t);return function(){return clearInterval(e)}}},[t])}},777229:(e,t,n)=>{n.d(t,{F:()=>a});var i=n(886100);function a(e,{eventId:t,failExplicitly:n=!1,esComponent:r}){if(!n)return i.iT.sev2(r,"jaws:unreachable-code-path",{unexpectedValue:e,eventId:t}),e;throw Error(`Exhaustive check failed: ${JSON.stringify(e)} is unexpected or it was not exhaustively checked.`)}},778377:(e,t,n)=>{n.d(t,{M:()=>a});var i=n(610435);function a({icon:e,children:t,...n}){return(0,i.FD)("div",{...n,css:{display:"flex",alignItems:"center",gap:8,whiteSpace:"nowrap"},children:[e&&(0,i.Y)("div",{css:{display:"flex",alignItems:"center"},children:e}),t]})}n(692738)}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/46372.cd9cbe0e5a.chunk.js.map