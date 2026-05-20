"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[15570,15659,93189],{68210:(e,t,n)=>{n.d(t,{x:()=>p});var a=n(610435);n(692738);var i=n(497895),r=n(485065),o=n(382908),s=n(342411),l=n(724283),c=n(191736),d=n(80668),u=n(778377);function p({pipelineId:e}){return(0,a.Y)(f,{pipelineId:e})}function f({pipelineId:e}){let t,{theme:n}=(0,i.wn)(),{data:p,loading:g}=l.z.usePipelineGetMinimalData({variables:{input:{pipelineId:e}},skip:!e,fetchPolicy:"cache-first"}),m=p?.deltapipelinesGet?.status?.name,h=n.typography.fontSizeBase,b=(0,a.Y)(r.A,{css:{fontSize:h},"data-testid":"jaws-dag-pipeline-path-icon"});return t=g?(0,a.Y)(d.P,{}):m?(0,a.FD)(a.FK,{children:[(0,a.Y)(s.sA,{id:"9yfnnr",defaultMessage:"Pipeline:"})," ",(0,a.Y)(c.$,{children:m})]}):(0,a.Y)(o.o.Text,{children:(0,a.Y)(s.sA,{id:"gj63Zw",defaultMessage:"Pipeline"})}),(0,a.Y)(u.M,{icon:b,children:t})}},80668:(e,t,n)=>{n.d(t,{P:()=>o});var a=n(610435);n(692738);var i=n(402720),r=n(342411);function o(){let e=(0,r.tz)();return(0,a.Y)("div",{css:{width:"100%"},"aria-label":e.formatMessage({id:"USxZV6",defaultMessage:"loading"}),"aria-busy":"true",children:(0,a.Y)(i.P,{active:!0,paragraph:{rows:0,style:{margin:0,padding:0}},title:{width:"100%",style:{height:20,margin:0,padding:0}}})})}},102876:(e,t,n)=>{n.d(t,{x:()=>a});function a(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[n,a]of e)if(!Object.is(a,t.get(n)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}let n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let a of n)if(!Object.prototype.hasOwnProperty.call(t,a)||!Object.is(e[a],t[a]))return!1;return!0}},112807:(e,t,n)=>{e.exports=n(731707)},154968:(e,t,n)=>{n.d(t,{n:()=>i});var a=n(141078);let i=(0,a.J1)`
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
`},187826:(e,t,n)=>{n.d(t,{Lw:()=>r,ij:()=>i,pf:()=>o});var a=n(692738);let i=(0,a.createContext)(null);function r(){let e=(0,a.useContext)(i);if(!e)throw Error("usePipelineContextWithStatus can only be used inside a <PipelineContext.Provider/>");return e}function o(){let{data:e}=r();if(!e)throw Error("`usePipelineContextUnsafe` can only be used if the pipeline has been successfully loaded. Use `usePipelineContextWithStatus` to handle the other cases.");return e}},191736:(e,t,n)=>{n.d(t,{$:()=>o});var a=n(610435),i=n(692738),r=n(79570);function o({children:e,tooltipTitle:t,truncateFromStart:n}){let s=(0,i.useRef)(null),[l,c]=(0,i.useState)(!1);(0,i.useEffect)(()=>{if(!s.current)return;let{offsetWidth:e,scrollWidth:t}=s.current;c(t>e)},[e,s]);let d=(0,a.Y)("span",{ref:s,css:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflowX:"hidden",...l&&n&&{direction:"rtl"},"&:before, &:after":{content:'"‎"'}},children:e});return l?(0,a.Y)(r.m,{content:t??e,componentId:"ellipsis-text-tooltip",children:d}):d}},280675:(e,t,n)=>{n.d(t,{c:()=>r});var a=n(342411),i=n(724283);function r(e){let t=(0,a.tz)(),{data:n}=i.z.usePipelineGetMinimalData({variables:{input:{pipelineId:e}},skip:!e,fetchPolicy:"cache-first"}),r=n?.deltapipelinesGet?.status?.name;if(r)return t.formatMessage({id:"sINkey",defaultMessage:"Pipeline: {pipelineName}"},{pipelineName:r});if(e)return t.formatMessage({id:"vFwj5L",defaultMessage:"Pipeline: {pipelineId}"},{pipelineId:e})}},490696:(e,t,n)=>{n.d(t,{Y:()=>u});var a=n(610435);n(692738);var i=n(497895),r=n(79570),o=n(833218),s=n(664093),l=n(342411),c=n(693189),d=n(726583);function u({taskSettings:e,taskBaseNodeProps:t,children:n,ariaLabelHint:r}){let{theme:o}=(0,i.wn)(),s=(0,l.tz)(),d=e.taskKey||s.formatMessage({id:"sG7UWn",defaultMessage:"Unnamed task"}),f=r?`${d}, ${r}`:d;return(0,a.Y)(c.bZ,{taskKey:e.taskKey??"","aria-label":f,hideTopBorder:!0,...t,children:(0,a.FD)("div",{css:{display:"flex",flexDirection:"column",gap:o.spacing.sm},children:[(0,a.Y)(p,{taskKey:e.taskKey,iconSettings:t.iconSettings}),n]})})}function p({taskKey:e,iconSettings:t}){let{theme:n}=(0,i.wn)(),c=t.referencingMissingParameterWarningMessage||f;return(0,a.FD)("div",{css:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n.spacing.xs},children:[(0,a.Y)("div",{css:{fontSize:n.typography.fontSizeLg,lineHeight:"normal",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:n.colors.textPrimary},role:"heading","data-testid":"row-task-name","aria-level":3,children:e||(0,a.Y)(l.sA,{id:"PdseEo",defaultMessage:"Unnamed task"})}),function(e,t,n){if(e.hasDisabledIcon&&(0,d.SX)()){let t;return t=e.isDynamicallyDisabled&&(0,d.kf)()?(0,a.Y)(l.sA,{id:"8fCozk",defaultMessage:"This task is disabled because an upstream task is also disabled. Change this task's run-if dependency condition to re-enable it."}):(0,a.Y)(l.sA,{id:"r/T3ej",defaultMessage:"This task is disabled and is excluded from future job runs"}),(0,a.Y)(r.m,{content:t,componentId:"disabled-task-parameter-warning-tooltip",children:(0,a.Y)(o.A,{"data-testid":"disabled-task-icon",css:{color:n.colors.textSecondary,marginLeft:n.spacing.sm}})})}if(e.hasReferencingMissingParameterWarning&&((0,d.SX)()||(0,d.q3)()))return(0,a.Y)(r.m,{content:(0,a.Y)(l.sA,{...t}),componentId:"disabled-task-parameter-warning-tooltip",children:(0,a.Y)(s.A,{"data-testid":"disabled-task-dependency-warning-icon",css:{marginLeft:n.spacing.sm},color:"warning"})});return null}(t,c,n)]})}let f=(0,l.zR)({id:"pv+T7R",defaultMessage:"This task has parameters that reference a task which is not active."})},532411:(e,t,n)=>{n.d(t,{H6:()=>i,Hz:()=>l,LK:()=>c,Us:()=>d,Vu:()=>s,_1:()=>o,tk:()=>r});var a=n(956935);let i=5,r=.75,o=8,s=e=>e.colors.blue400,l=e=>e.colors.blue600,c=e=>e.colors.blue600;function d(e){let t=e.isDarkMode?e.colors.actionDefaultBackgroundHover:e.colors.blue100;return{handleRight:(0,a.AH)({background:"transparent",borderColor:"transparent",right:0,top:28}),handleLeft:(0,a.AH)({background:"transparent",borderColor:"transparent",left:-3,top:28}),titleText:(0,a.AH)({width:"230px",lineHeight:`${e.typography.lineHeightSm} !important`}),backgroundHack:(0,a.AH)({"&:hover":{backgroundColor:t},borderRadius:"4px",width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:0})}}},661152:(e,t,n)=>{n.d(t,{I2:()=>c,TE:()=>o,cR:()=>l,oA:()=>s});var a=n(141078),i=n(154968);let r=(0,a.J1)`
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
`,o=(0,a.J1)`
  query PipelineGetQuery($input: DeltapipelinesGetPipelineInput!) @component(name: "Workflows.Authoring.UI") {
    deltapipelinesGet: jobsGetPipeline(input: $input) {
      ...PipelineGetFragment
      apiError {
        ...PipelineApiErrorFields
      }
    }
  }
  ${r}
  ${i.n}
`;function s({variables:e,...t}={}){return(0,a.IT)(o,{variables:e,...t})}function l(e){return(0,a._l)(o,e)}function c({variables:e,...t}={}){let n=(0,a.IT)(o,{variables:e,...t,fetchPolicy:"cache-and-network"});if(!t.skip&&void 0===n.data&&!n.error)throw new Promise(e=>{n.observable.subscribe({next(t){t.loading||e(t)}})});return n}},693189:(e,t,n)=>{n.d(t,{Qf:()=>p,bZ:()=>g,t4:()=>f});var a=n(610435),i=n(956935);n(692738);var r=n(550670),o=n(497895),s=n(532411),l=n(22191),c=n(777229);let d="0.2s ease-out",u=(0,i.i7)(`
0% {
  background-position: 100% 0%;
}
100% {
  background-position: 0% 0%;
}
`);function p(e){return{outerBaseNode:({interactionState:t,highlightState:n,selectable:a})=>({cursor:function(e,t){if("DISABLED"===e)return"not-allowed";return t?"pointer":"default"}(t,a),overflow:"hidden",boxShadow:function({highlightState:t}){switch(t){case"NONE":return`0px 1px 4px ${e.colors.grey400}`;case"HIGHLIGHTED":return`0px 4px 16px ${e.colors.grey500}`;case"FADED":return`0 0 2px ${e.colors.grey400}`;default:(0,c.F)(t,{eventId:"BaseTaskNode.highlightState",esComponent:l.Es.WorkflowsAuthoring});return}}({highlightState:n}),transition:`box-shadow ${d}`,backgroundColor:e.colors.backgroundPrimary,...function(e,t){let n=(()=>{switch(e){case"HOVERED":return(0,s.Vu)(t);case"SELECTED":return(0,s.Hz)(t);case"DISABLED":case"NONE":return;default:(0,c.F)(e,{eventId:"BaseTaskNode.interactionState",esComponent:l.Es.WorkflowsAuthoring});return}})(),a={borderRadius:t.spacing.sm};if(n){let e=t.spacing.xs/2;return{...a,border:`${e}px solid ${n??"transparent"}`,margin:-e}}return a}(t,e),"& > *":{opacity:"FADED"===n?.4:void 0,transition:`opacity ${d}`}}),topBorder:{height:6,width:"100%"},animatedTopBorder:{backgroundSize:"200%",animation:`${u} 4s linear infinite`},baseNode:t=>({padding:`${e.spacing.lg/2}px ${e.spacing.md}px ${e.spacing.md}px ${e.spacing.md}px`,fontSize:e.typography.fontSizeBase,backgroundColor:function(t){switch(t){case"DISABLED":return e.colors.actionDisabledBackground;case"SELECTED":return e.colors.tagPress;case"HOVERED":return e.colors.tagDefault;case"NONE":return e.colors.backgroundPrimary;default:return(0,c.F)(t,{eventId:"BaseTaskNode.interactionState",esComponent:l.Es.WorkflowsAuthoring}),e.colors.backgroundPrimary}}(t),color:function(t){switch(t){case"DISABLED":return e.colors.actionDisabledText;case"SELECTED":case"HOVERED":return e.colors.textPrimary;case"NONE":return e.colors.textSecondary;default:return(0,c.F)(t,{eventId:"BaseTaskNode.interactionState",esComponent:l.Es.WorkflowsAuthoring}),e.colors.textSecondary}}(t)}),nodeContent:{width:"100%"}}}let f=34;function g(e){let{taskKey:t,interactionState:n,dependencyLabel:i,highlightState:s,selectable:l,hideSourceHandle:c,hideTopBorder:d,animateTopBorder:u,borderBackgroundColor:g,borderStripeColor:m,className:h}=e,b=i&&{top:f/2},{theme:y}=(0,o.wn)(),k=p(y),v=void 0!==i;return(0,a.Y)(a.FK,{children:(0,a.FD)("div",{css:k.outerBaseNode({interactionState:n,highlightState:s,selectable:l}),role:"button","aria-disabled":"DISABLED"===n,"aria-label":e["aria-label"],tabIndex:"DISABLED"===n?-1:0,"data-testid":"reactflow-graph-outer-base-node","data-taskkey":t,className:h,children:[v&&i,d&&v&&(0,a.Y)("hr",{css:{border:"none",background:y.colors.borderDecorative,height:1,margin:0}}),!d&&(0,a.Y)("div",{css:{...k.topBorder,background:function(e,t,n){if(t&&n)return`repeating-linear-gradient(-45deg, ${t}, ${t} 20px, ${n} 20px, ${n} ${40}px)`;if(t)return t;return e.colors.grey400}(y,g,m),...u?k.animatedTopBorder:{}},"data-testid":"reactflow-graph-base-node-top-border",role:"status","aria-hidden":!0}),(0,a.FD)("div",{css:k.baseNode(n),"data-testid":"reactflow-graph-base-node","data-selected":"SELECTED"===n,"aria-current":"SELECTED"===n,children:[(0,a.Y)(r.h7,{"data-testid":"reactflow-graph-base-node-target-handle",type:"target",position:r.yX.Left,css:b}),(0,a.Y)("div",{css:k.nodeContent,children:e.children}),!c&&(0,a.Y)(r.h7,{"data-testid":"reactflow-graph-base-node-source-handle",type:"source",position:r.yX.Right})]})]})})}},717846:(e,t,n)=>{n.r(t),n.d(t,{PipelineTaskJobDAGNode:()=>s});var a=n(610435);n(692738);var i=n(490696),r=n(68210),o=n(280675);function s({taskSettings:e,taskBaseNodeProps:t}){let n=e.task.pipelineTask?.pipelineId,l=(0,o.c)(n);return(0,a.Y)(i.Y,{taskSettings:e,taskBaseNodeProps:t,ariaLabelHint:l,children:(0,a.Y)(r.x,{pipelineId:n})})}},731707:(e,t,n)=>{var a=n(692738);t.default=function(e,t){var n=a.useRef();a.useEffect(function(){n.current=e},[e]),a.useEffect(function(){if(null!==t){var e=setInterval(function(){return n.current.apply(n,arguments)},t);return function(){return clearInterval(e)}}},[t])}},777229:(e,t,n)=>{n.d(t,{F:()=>i});var a=n(886100);function i(e,{eventId:t,failExplicitly:n=!1,esComponent:r}){if(!n)return a.iT.sev2(r,"jaws:unreachable-code-path",{unexpectedValue:e,eventId:t}),e;throw Error(`Exhaustive check failed: ${JSON.stringify(e)} is unexpected or it was not exhaustively checked.`)}},778377:(e,t,n)=>{n.d(t,{M:()=>i});var a=n(610435);function i({icon:e,children:t,...n}){return(0,a.FD)("div",{...n,css:{display:"flex",alignItems:"center",gap:8,whiteSpace:"nowrap"},children:[e&&(0,a.Y)("div",{css:{display:"flex",alignItems:"center"},children:e}),t]})}n(692738)},833218:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(610435),i=n(692738),r=n(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1.5 8a6.5 6.5 0 0 1 10.535-5.096l-9.131 9.131A6.47 6.47 0 0 1 1.5 8m2.465 5.096a6.5 6.5 0 0 0 9.131-9.131z",clipRule:"evenodd"})})}let s=(0,i.forwardRef)((e,t)=>(0,a.Y)(r.I,{ref:t,...e,component:o}));s.displayName="NoIcon";let l=s}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/15659.a9fb71070b.chunk.js.map