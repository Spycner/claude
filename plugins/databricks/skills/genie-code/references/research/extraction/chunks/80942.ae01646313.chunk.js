"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[80942],{812542:(e,n,i)=>{i.d(n,{N:()=>o});var t=i(690963);let a=(0,t.J1)`
  query GetEndpointDetailed($data: ModelservingapiGetInferenceEndpointInput!)
  @component(name: "CustomModelServing.CPU") {
    modelservingapiGetInferenceEndpoint(input: $data) {
      endpoint {
        id
        name
        creator
        creationTimestamp
        lastUpdatedTimestamp
        routeOptimized
        endpointUrl
        task
        endpointType
        tags {
          ...EndpointTagFragment
        }
        state {
          ...EndpointStateFragment
        }
        config {
          ...EndpointCoreConfigDetailedFragment
        }
        pendingConfig {
          ...PendingConfigFragment
        }
        aiGateway {
          ...AiGatewayFragment
        }
        tileEndpointMetadata {
          ...TileEndpointMetadataFragment
        }
        telemetryProfileTableNames {
          logsTable
          metricsTable
          tracesTable
        }
      }
    }
  }
  fragment TileEndpointMetadataFragment on ModelservingapiTileEndpointMetadata {
    problemType
  }
  fragment AiGatewayFragment on AigatewayapiAiGatewayConfig {
    guardrails {
      input {
        invalidKeywords
        piiDetection
        safety
        validTopics
        pii {
          behavior
        }
        customGuardrails {
          endpointName
        }
      }
      output {
        invalidKeywords
        piiDetection
        safety
        validTopics
        pii {
          behavior
        }
        customGuardrails {
          endpointName
        }
      }
    }
    inferenceTableConfig {
      catalogName
      schemaName
      tableNamePrefix
      enabled
    }
    rateLimits {
      calls
      tokens
      key
      renewalPeriod
      principal
    }
    usageTrackingConfig {
      enabled
    }
    fallbackConfig {
      enabled
    }
  }
  fragment PendingConfigFragment on ModelservingapiPendingConfig {
    trafficConfig {
      routes {
        servedEntityName
        servedModelName
        trafficPercentage
      }
    }
    servedEntities {
      creationTimestamp
      creator
      minDbus
      maxDbus
      entityName
      entityVersion
      instanceProfileArn
      minProvisionedConcurrency
      maxProvisionedConcurrency
      maxProvisionedThroughput
      minProvisionedThroughput
      modelName
      modelVersion
      name
      scaleToZeroEnabled
      type
      workloadSize
      workloadType

      envVars {
        envVarName
        plainTextValue
        secretKey
        secretScope
      }
      environmentVars {
        key
        value
      }
      foundationModel {
        description
        displayName
        docs
        name
        price
      }

      optimizationConfig {
        llmOptimized
      }

      state {
        deployment
        deploymentStateMessage
      }

      externalModel {
        provider
        name
        task
        ai21LabsConfig {
          ai21LabsApiKey
        }
        anthropicConfig {
          anthropicApiKey
        }
        awsBedrockConfig {
          awsAccessKeyId
          awsRegion
          awsSecretAccessKey
          bedrockProvider
          ucServiceCredentialName
        }
        googleCloudVertexAiConfig {
          privateKey
          region
          projectId
        }
        amazonBedrockConfig {
          awsAccessKeyId
          awsRegion
          awsSecretAccessKey
          bedrockProvider
          ucServiceCredentialName
        }
        cohereConfig {
          cohereApiKey
        }
        databricksModelServingConfig {
          databricksApiToken
          databricksWorkspaceUrl
        }
        openaiConfig {
          openaiApiBase
          openaiApiKey
          openaiApiType
          openaiApiVersion
          openaiDeploymentName
          openaiOrganization
        }
        palmConfig {
          palmApiKey
        }
      }
    }
    autoCaptureConfig {
      catalogName
      enabled
      schemaName
      tableNamePrefix
      state {
        payloadTable {
          name
          status
          statusMessage
        }
      }
    }
  }
  fragment EndpointStateFragment on ModelservingapiInferenceEndpointState {
    configUpdate
    ready
    suspend
    systemUpdateFailure
  }
  fragment EndpointCoreConfigDetailedFragment on ModelservingapiEndpointCoreConfigDetailed {
    configVersion
    config {
      trafficConfig {
        routes {
          servedEntityName
          servedModelName
          trafficPercentage
        }
      }
      servedEntities {
        creationTimestamp
        creator
        minDbus
        maxDbus
        entityName
        entityVersion
        instanceProfileArn
        minProvisionedConcurrency
        maxProvisionedConcurrency
        maxProvisionedThroughput
        minProvisionedThroughput
        provisionedModelUnits
        modelName
        modelVersion
        name
        scaleToZeroEnabled
        type
        workloadSize
        workloadType

        envVars {
          envVarName
          plainTextValue
          secretKey
          secretScope
        }
        environmentVars {
          key
          value
        }
        foundationModel {
          description
          displayName
          docs
          name
          price
        }

        optimizationConfig {
          llmOptimized
        }

        state {
          deployment
          deploymentStateMessage
        }

        externalModel {
          provider
          name
          task
          ai21LabsConfig {
            ai21LabsApiKey
          }
          anthropicConfig {
            anthropicApiKey
          }
          awsBedrockConfig {
            awsAccessKeyId
            awsRegion
            awsSecretAccessKey
            bedrockProvider
            ucServiceCredentialName
          }
          amazonBedrockConfig {
            awsAccessKeyId
            awsRegion
            awsSecretAccessKey
            bedrockProvider
            ucServiceCredentialName
          }
          cohereConfig {
            cohereApiBase
            cohereApiKey
          }
          googleCloudVertexAiConfig {
            privateKey
            region
            projectId
          }
          databricksModelServingConfig {
            databricksApiToken
            databricksWorkspaceUrl
          }
          openaiConfig {
            openaiApiBase
            openaiApiKey
            openaiApiType
            openaiApiVersion
            openaiDeploymentName
            openaiOrganization
            microsoftEntraTenantId
            microsoftEntraClientId
            microsoftEntraClientSecret
          }
          palmConfig {
            palmApiKey
          }
          customProviderConfig {
            apiKeyAuth {
              key
              value
              valuePlaintext
            }
            bearerTokenAuth {
              token
              tokenPlaintext
            }
            customProviderUrl
          }
        }
      }
      autoCaptureConfig {
        catalogName
        enabled
        schemaName
        tableNamePrefix
        state {
          payloadTable {
            name
            status
            statusMessage
          }
        }
      }
    }
  }
  fragment EndpointTagFragment on ModelservingapiEndpointTag {
    key
    value
  }
`,o=e=>(0,t.IT)(a,{skip:!e,fetchPolicy:"network-only",variables:{data:{name:e}}})},880942:(e,n,i)=>{i.r(n),i.d(n,{default:()=>I,reorderTrafficRoutesToMatchEntities:()=>_});var t=i(610435),a=i(692738),o=i(993204),r=i(321527),d=i(561587),s=i(497895),p=i(694762),l=i(339518),c=i(79128),g=i(658501),m=i(321309),f=i(603935),u=i(922609),v=i(701181),y=i(812542),C=i(923108),h=i(690963);let b=(0,h.J1)`
  mutation PutInferenceEndpointConfig($data: ModelservingapiPutInferenceEndpointConfigInput!)
  @component(name: "CustomModelServing.CPU") {
    modelservingapiPutInferenceEndpointConfig(input: $data) {
      endpoint {
        name
      }
      apiError {
        code
        message
        traceId
      }
    }
  }
`,P=(0,h.J1)`
  mutation PutPtEndpointConfig($data: ModelservingapiPutPtEndpointConfigInput!)
  @component(name: "CustomModelServing.CPU") {
    modelservingapiPutProvisionedThroughputInferenceEndpointConfig(input: $data) {
      endpoint {
        name
      }
      apiError {
        code
        message
        traceId
      }
    }
  }
`;var E=i(881166),M=i(416457),k=i(420750),T=i(461813),A=i(956207),N=i(627023);function w(e,n,i,t,a,o,r){try{var d=e[o](r),s=d.value}catch(e){i(e);return}d.done?n(s):Promise.resolve(s).then(t,a)}function _(e,n){if(!e||!n||0===e.length||0===n.length)return n;let i=new Map;return n.forEach(e=>{let n=e.servedEntityName||e.servedModelName;n&&i.set(n,e)}),e.map(e=>{let n=e.name;return(n?i.get(n):void 0)||{servedEntityName:n,trafficPercentage:0}})}function x({endpointData:e,endpointName:n}){let{theme:i}=(0,s.wn)(),v=(0,g.Zp)(),[y,C]=(0,a.useState)(!1),[k,T]=(0,a.useState)(!1),A=(0,a.useMemo)(()=>{let n=e.modelservingapiGetInferenceEndpoint?.endpoint;if(!n)return!1;return n.state?.configUpdate==="IN_PROGRESS"},[e]),I=(0,a.useMemo)(()=>{let n=e.modelservingapiGetInferenceEndpoint?.endpoint;if(!n)return!1;return n.state?.suspend===m.GU.STOPPED},[e]),S=(0,E.$J)(e),[D,{loading:K,data:Y,error:F}]=(0,h.n_)(b),[U,{loading:V,data:G,error:B}]=(0,h.n_)(P),O=(0,a.useMemo)(()=>{if(!S)return{};if(S?.config?.servedEntities&&S?.config?.trafficConfig?.routes){let e=_(S.config.servedEntities,S.config.trafficConfig?.routes);if(e)return{...S,config:{...S.config,trafficConfig:{...S.config.trafficConfig,routes:e}}}}return S},[S]),z=(0,d.mN)({defaultValues:{data:O},shouldUnregister:!1}),{formState:{errors:$}}=z,L=(0,o.A)(),R=(0,E.u1)(Y?.modelservingapiPutInferenceEndpointConfig??G?.modelservingapiPutProvisionedThroughputInferenceEndpointConfig,F??B)||A&&L.formatMessage({id:"8+t65I",defaultMessage:"Cannot edit endpoint when pending update is in progress."})||k&&L.formatMessage({id:"NIGLCH",defaultMessage:"Cannot edit model unit based provisioned throughput endpoint to tokens/second based provisioned throughput/custom endpoint and vice versa"}),H=(0,a.useCallback)(()=>v((0,f.df)(n)),[n,v]),j=(0,a.useCallback)(e=>{var n;return(n=function*(){T(!1);let{name:n,config:i}=e.data;try{let e,t=O.config?.servedEntities?.some(e=>!(0,N.hX)(e.provisionedModelUnits))||!1,a=i.servedEntities.some(e=>!(0,N.hX)(e.provisionedModelUnits));if(t!==a)return void T(!0);let o=(0,E.tM)({data:{config:i,name:n}});if(a){let{data:n}=yield U({variables:{data:{...(0,E.RH)(o)}}}),i=n?.modelservingapiPutProvisionedThroughputInferenceEndpointConfig;e=i?.endpoint?.name}else{let{data:n}=yield D({variables:{data:{...o}}}),i=n?.modelservingapiPutInferenceEndpointConfig;e=i?.endpoint?.name}e&&v((0,f.df)(e))}catch(e){M.A.logErrorAndNotifyUser(e)}},function(){var e=this,i=arguments;return new Promise(function(t,a){var o=n.apply(e,i);function r(e){w(o,t,a,r,d,"next",e)}function d(e){w(o,t,a,r,d,"throw",e)}r(void 0)})})()},[O,U,D,v]),q=(0,t.FD)(p.aF,{componentId:"codegen_mlflow_app_src_endpoints_components_editendpointpage.tsx_110",title:L.formatMessage({id:"p0kNWP",defaultMessage:"Update and start endpoint"}),visible:y,confirmLoading:K,onOk:z.handleSubmit(j),okButtonProps:{loading:K||V,style:{color:i.colors.actionPrimaryTextDefault}},okText:L.formatMessage({id:"6Z2xHK",defaultMessage:"Update and start"}),cancelText:L.formatMessage({id:"BdIXyU",defaultMessage:"Cancel"}),onCancel:()=>C(!1),children:[R&&(0,t.Y)(l.F,{componentId:"codegen_mlflow_app_src_endpoints_components_editendpointpage.tsx_132",css:{marginBottom:i.spacing.md},type:"error",message:R}),(0,t.Y)("span",{children:(0,t.Y)(r.A,{id:"HxvC8d",defaultMessage:"Are you sure you want to update and start <bold>{endpointName}</bold>? By starting this endpoint, it will be able to serve queries once the resources become ready.",values:{endpointName:n,bold:e=>(0,t.Y)("b",{children:e})}})})]});return(0,t.Y)(d.Op,{...z,children:(0,t.FD)("div",{css:{display:"flex",flexDirection:"column",height:"100%",overflow:"hidden"},children:[R&&(0,t.Y)(l.F,{componentId:"codegen_mlflow_app_src_endpoints_components_editendpointpage.tsx_149",css:{marginBottom:i.spacing.md},type:"error",message:R}),(0,t.Y)(u.U,{mode:"edit",initialEndpointData:e}),(0,t.FD)("div",{css:{display:"flex",justifyContent:"flex-end",gap:i.spacing.sm,padding:i.spacing.md,borderTop:`1px solid ${i.colors.border}`},children:[(0,t.Y)(c.$n,{componentId:"codegen_mlflow_app_src_endpoints_components_editendpointpage.tsx_108",onClick:H,children:(0,t.Y)(r.A,{id:"8YB0dP",defaultMessage:"Cancel"})}),(0,t.Y)(c.$n,{componentId:"codegen_mlflow_app_src_endpoints_components_editendpointpage.tsx_111",type:"primary",onClick:z.handleSubmit(I?()=>C(!0):j),loading:K,disabled:A||$?.data?.message!==void 0,children:I?(0,t.Y)(r.A,{id:"0Q82GW",defaultMessage:"Update and start"}):(0,t.Y)(r.A,{id:"//cF4O",defaultMessage:"Update"})})]}),q]})})}let I=(0,k.X)(T.A.mlflowServices.MODEL_SERVING,function(){let{endpointName:e}=(0,g.g)(),{data:n,loading:i}=(0,y.N)(e);return(0,t.FD)(v.L,{usesFullHeight:!0,children:[(0,t.Y)(C.z,{title:(0,t.Y)(r.A,{id:"njKKOU",defaultMessage:"Edit serving endpoint"}),breadcrumbs:[(0,t.Y)(g.N_,{to:f.dv.ENDPOINTS_LIST,children:(0,t.Y)(r.A,{id:"glu7Lp",defaultMessage:"Serving endpoints"})}),(0,t.Y)(g.N_,{to:(0,f.df)(e||""),children:e})]}),(()=>{if(!e)return null;if(i||!n)return(0,t.Y)(A.q,{});return(0,t.Y)(x,{endpointData:n,endpointName:e})})()]})})},956207:(e,n,i)=>{i.d(n,{q:()=>d});var t=i(610435),a=i(497895),o=i(262786),r=i(81659);function d(){let{theme:e}=(0,a.wn)(),n=n=>(0,t.Y)("div",{css:{padding:e.spacing.md,border:`1px solid ${e.colors.borderDecorative}`},children:(0,t.Y)(o.Q,{lines:n})});return(0,t.FD)("div",{css:{display:"flex",gap:e.spacing.md,alignItems:"flex-start"},children:[(0,t.FD)("div",{css:{display:"flex",flexDirection:"column",gap:e.spacing.md,flex:1},children:[(0,t.Y)(r.o,{}),n(3),n(2),(0,t.Y)(r.o,{}),n(4)]}),(0,t.Y)("div",{css:{padding:e.spacing.md,border:`1px solid ${e.colors.borderDecorative}`,flexBasis:320},children:(0,t.Y)(o.Q,{lines:3})})]})}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/80942.ae01646313.chunk.js.map