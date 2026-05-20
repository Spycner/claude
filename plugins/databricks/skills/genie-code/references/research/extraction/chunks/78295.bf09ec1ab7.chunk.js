"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[78295],{15077:(e,a,n)=>{n.d(a,{D:()=>t});let t=(0,n(342411).YK)({modalTitle:{id:"DOE4iz",defaultMessage:"Add pipeline to existing bundle"},cancelButtonText:{id:"y6wUJs",defaultMessage:"Cancel"},createButtonText:{id:"KdX80W",defaultMessage:"Create"},pipelineNameLabel:{id:"pdUl7L",defaultMessage:"Name"},catalogLabel:{id:"Lq0N99",defaultMessage:"Default catalog"},schemaLabel:{id:"O9u1M4",defaultMessage:"Default schema"},languageLabel:{id:"W+bgqu",defaultMessage:"Language"},personalSchemaLabel:{id:"dRRu8K",defaultMessage:"Use a personal schema (e.g. ''{exampleCatalog}'')? (recommended during development)"}})},56579:(e,a,n)=>{n.d(a,{e:()=>i});var t=n(837077);function i(e){return!!(e&&(0,t.A)(e))}},112807:(e,a,n)=>{e.exports=n(731707)},154968:(e,a,n)=>{n.d(a,{n:()=>i});var t=n(141078);let i=(0,t.J1)`
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
`},186094:(e,a,n)=>{n.d(a,{XZ:()=>m,oP:()=>d,vd:()=>c,wK:()=>p});var t=n(958115),i=n.n(t),l=n(359525),r=n.n(l),o=n(441535);let s="runAsSelectSelectedSPs",u="runAsSelectSelectedGroups";function c(){let e=window.prefs?.get(s),a=(0,o.W)("databricks.fe.jaws.RunAsSelect.maxSavedSPs",5);if(i()(e))return e.slice(0,a);return[]}function d(e){let a=(0,o.W)("databricks.fe.jaws.RunAsSelect.maxSavedSPs",5),n=c();n.unshift(e);let t=r()(n).slice(0,a);window.prefs?.set(s,t)}function p(){let e=window.prefs?.get(u),a=(0,o.W)("databricks.fe.jaws.RunAsSelect.maxSavedGroups",5);if(i()(e))return e.slice(0,a);return[]}function m(e){let a=(0,o.W)("databricks.fe.jaws.RunAsSelect.maxSavedGroups",5),n=p();n.unshift(e);let t=r()(n).slice(0,a);window.prefs?.set(u,t)}},204487:(e,a,n)=>{n.d(a,{F:()=>f,d:()=>g});var t=n(536717),i=n.n(t),l=n(561587),r=n(342411),o=n(724283),s=n(889515);let u=(0,r.YK)({resetRunAsSuccess:{id:"zf2XNh",defaultMessage:"Successfully updated the run-as of pipeline {pipelineName} and the owner of the published assets."},cantBindSP:{id:"HfsNB2",defaultMessage:"You cannot set the pipeline's identity to {nextIdentity} because you do not have the required permissions. Please contact the user who manages this service principal or the account administrator.{newline}Users with the Service Principal Manager role do not inherit the Service Principal User role. If you want the user to use the service principal to execute jobs, you will need to explicitly assign the Service Principal User role."},cantBindSPGeneric:{id:"v4OGYk",defaultMessage:"Updating run-as of the pipeline failed. Error message: {errorMessage}"}});var c=n(56579),d=n(186094),p=n(187826),m=n(838524);let f=e=>{if(!e)return null;if((0,c.e)(e))return{service_principal_name:e};return{user_name:e}},g=({onSuccess:e})=>{let{pipeline:{pipelineId:a,ownerPrincipal:n,spec:t,name:g,runAsUserName:h}}=(0,p.pf)(),{handleSubmit:b,reset:y,formState:{isDirty:v,isSubmitting:S,errors:C},control:k,setError:P}=(0,l.mN)({mode:"onChange",defaultValues:{uniqueName:n?.uniqueName??h??null,kind:n?.kind?.toLowerCase()??null}}),I=(0,l.FH)({control:k}),w=JSON.parse(t?._json??"{}"),F=I.uniqueName===h?null:I.uniqueName??"",[N]=(({nextIdentity:e,setError:a,pipelineName:n,successCallback:t})=>{let i=(0,r.tz)();return(0,s.q)(o.z.usePipelineEdit,{successMessage:i.formatMessage(u.resetRunAsSuccess,{pipelineName:n}),errorCallback:n=>{if(!n)return;let{pipelineEdit:t}=n;t?.errors?.[0]?.code==="PERMISSION_DENIED"&&t?.errors?.[0]?.message?.startsWith("Cannot bind the service principal provided in 'run_as' field")?a("uniqueName",{type:"manual",message:i.formatMessage(u.cantBindSP,{nextIdentity:e,newline:"\n\n"})}):n.pipelineEdit?.errors?.[0]?.message&&a("uniqueName",{type:"manual",message:i.formatMessage(u.cantBindSPGeneric,{errorMessage:n.pipelineEdit.errors[0]?.message})})},successCallback:t})})({nextIdentity:F,pipelineName:g,setError:P,successCallback:()=>{i()(F)&&(0,c.e)(F)&&(0,d.oP)(F),y({uniqueName:F}),e?.()}});return{control:k,errors:C,isDirty:v,isSubmitting:S,handleSubmit:b(e=>{if(e.uniqueName)return N({variables:{pipelineId:a,spec:{...w,run_as:f(e.uniqueName)}},refetchQueries:(0,m.k)(a),awaitRefetchQueries:!0});return Promise.resolve()}),resetForm:y,nextIdentity:F,ownerPrincipal:n}}},262818:(e,a,n)=>{n.a(e,async(e,t)=>{try{n.d(a,{aI:()=>I,mW:()=>N});var i=n(154313),l=n(137797),r=n(870538),o=n(342411),s=n(30472),u=n(494650),c=n(697453),d=n(794876),p=n(984741),m=n(954879),f=n(727303),g=n(884532),h=n(291414),b=n(26026),y=n(88144),v=n(609875),S=n(993533),C=n(954261);function k(e,a,n,t,i,l,r){try{var o=e[l](r),s=o.value}catch(e){n(e);return}o.done?a(s):Promise.resolve(s).then(t,i)}function P(e){return function(){var a=this,n=arguments;return new Promise(function(t,i){var l=e.apply(a,n);function r(e){k(l,t,i,r,o,"next",e)}function o(e){k(l,t,i,r,o,"throw",e)}r(void 0)})}}function I(e){let a=(0,o.tz)(),n=(0,s.t1)(),t=(0,l.join)(e.attributes?.path_name??"",f.uh),c=(0,l.join)(e.attributes?.path_name??"",f.ln),d=(0,m.I)(e=>e.isResourcesFolderImportedInBundle),p=(0,m.I)(e=>e.isFolderImportedInBundle),[b]=(0,y.S)(),[k]=(0,v.K)(),{createInitialPipelineFiles:I}=(0,C.nt)({pathName:n?t:c});return{createPipeline:({pipelineName:e,language:o,catalog:s,schema:m,personalSchema:y})=>P(function*(){let v=a.formatMessage({id:"88urMT",defaultMessage:"Error"});if(n&&!d())throw new h.Ck(f.ln);if(!n&&!p("resources/*"))throw new h.Ck("resources/*");let C="yes"===y?"${workspace.current_user.short_name}":m||"default";for(let e of n?[b({variables:{input:{path:t}}}),b({variables:{input:{path:c}}})]:[b({variables:{input:{path:c}}})]){let{data:a}=yield e,n=w(a);if(n)return F(v,n),{}}let P=yield I({pipelineName:e,catalog:s,language:o,schema:y?(0,g.ob)():C}),N=n?(0,l.join)(c,`${e}${u.cE}`):(0,l.join)(P.rootPath,`${e}${u.cE}`),D=(0,h.yz)(e),x=(0,r.As)({resources:{pipelines:{[D]:{name:e,libraries:P.libraries.map(e=>{if(e.glob?.include){let[a,t=""]=e.glob.include.split(/(?=\/\*\*$)/),i=n?c:P.rootPath;return{glob:{include:A(i,a).concat(t)}}}return e}),serverless:!0,catalog:s,schema:C,root_path:n?A(c,P.rootPath):"."}}}}),{data:E}=yield k({variables:{input:{format:S.J6F.AUTO,path:N,content:i.Buffer.from(x).toString("base64")}}}),Y=w(E);if(Y)return F(v,Y),{};return{definitionId:E?.createNotebookFromSource?.objectId??void 0,entryPointPath:P.entryPointPath}})()}}function w(e){if(!e)return null;let a=[];return"createFolder"in e&&(a=e.createFolder?.errors??[]),"createNotebookFromSource"in e&&(a=e.createNotebookFromSource?.errors??[]),a.length?a:null}function F(e,a){c.ds.call({isCloseable:!0,root:{componentId:"dabs-authoring.create-lakeflow-pipeline-definition-modal",severity:"error",duration:5e3},title:{value:e},description:{value:a.map(e=>e.message).join("\n")}})}function N(){let e=(0,o.tz)(),a=(0,m.I)(e=>e.projectRootFolderNode),[n]=(0,d.eq)(),t=(0,s.t1)(),i=e.formatMessage({id:"5+uMeN",defaultMessage:"Pipeline with this name already exists"});return{isGloballyUnique:e=>P(function*(){let{data:a}=yield n({variables:{input:{filter:`name LIKE '${e.replace(/'/g,"''")}'`,maxResults:1}},fetchPolicy:"network-only"});if(0===(a?.deltapipelinesList?.statuses??[]).length)return!0;return i})(),isLocallyUnique:e=>P(function*(){let n=t?f.uh:f.ln;if(!(yield(0,b.T)((0,l.join)(a?.attributes?.path_name??"",n,e))))return!0;return i})()}}function A(e,a){let n=(0,p.e0)(e),t=(0,p.e0)(a);if(n===t)return".";return(0,l.relative)(n,t)}t()}catch(e){t(e)}})},524721:(e,a,n)=>{n.d(a,{z:()=>c});var t=n(610435);n(692738);var i=n(497895),l=n(694762),r=n(764236),o=n(295169),s=n(342411),u=n(15077);function c({visible:e,onClose:a,hideMask:n}){let{theme:d}=(0,i.wn)(),p={height:d.spacing.lg,width:"100%"};return(0,t.Y)(l.aF,{componentId:"create-basic-pipeline-modal-skeleton",title:(0,t.Y)(s.sA,{...u.D.modalTitle}),cancelText:(0,t.Y)(s.sA,{...u.D.cancelButtonText}),okText:(0,t.Y)(s.sA,{...u.D.createButtonText}),okButtonProps:{disabled:!0},onCancel:a,visible:e,dangerouslySetAntdProps:{mask:!n},children:(0,t.FD)("div",{children:[(0,t.Y)(r.h,{size:"lg"}),(0,t.Y)(o.x,{loading:!0,style:p}),(0,t.Y)(r.h,{size:"lg"}),(0,t.Y)(o.x,{loading:!0,style:p}),(0,t.Y)(r.h,{size:"lg"}),(0,t.FD)("div",{css:{display:"flex",flexDirection:"row",gap:d.spacing.md},children:[(0,t.Y)(o.x,{loading:!0,style:p}),(0,t.Y)(o.x,{loading:!0,style:p})]}),(0,t.Y)(r.h,{size:"lg"}),(0,t.Y)(o.x,{loading:!0,style:p})]})})}},589830:(e,a,n)=>{n.d(a,{N:()=>r,U:()=>o});var t=n(441535),i=n(657825),l=n(411695);function r(){let e=(0,l.ER)(),a=(0,i.fo)()===i.hQ.ServerlessOnly,n=(0,t.W)("serverless_dlt",null)??((0,t.W)("databricks.fe.pipelines.enablePipelinesServerlessUI",!1)&&(0,t.W)("databricks.deltapipelines.safe.isServerlessEnabled",!1));return e||a||n}function o(){return r()&&(0,t.W)("databricks.fe.pipelines.enablePipelinesServerlessUIForSamplePipeline",!0)}},629472:(e,a,n)=>{n.a(e,async(e,t)=>{try{n.r(a),n.d(a,{useModal:()=>z});var i=n(610435),l=n(692738),r=n(561587),o=n(497895),s=n(79128),u=n(694762),c=n(964133),d=n(174568),p=n(140718),m=n(219830),f=n(339518),g=n(22191),h=n(342411),b=n(886100),y=n(747129),v=n(889620),S=n(485669),C=n(488655),k=n(411695),P=n(954879),I=n(701200),w=n(884532),F=n(291414),N=n(26026),A=n(514067),D=n(580500),x=n(524721),E=n(524191),Y=n(540849),T=n(262818),M=n(15077),L=n(993533),O=n(568057),R=n(77216),q=n(386106),U=e([T,I,Y]);function B(e,a,n,t,i,l,r){try{var o=e[l](r),s=o.value}catch(e){n(e);return}o.done?a(s):Promise.resolve(s).then(t,i)}function _(e){return function(){var a=this,n=arguments;return new Promise(function(t,i){var l=e.apply(a,n);function r(e){B(l,t,i,r,o,"next",e)}function o(e){B(l,t,i,r,o,"throw",e)}r(void 0)})}}[T,I,Y]=U.then?(await U)():U;let K={...q.qF,PERSONAL_SCHEMA:"personal-schema"},j=b.iT.sev2BurnRateLogger({esComponent:g.Es.DabsAuthoring,eventId:"Failed to create Lakeflow pipeline definition",sloTarget:y.i1.P99,minFailures:y.Ip.Min10});function V({onClose:e,defaultCatalog:a,rootFolderNode:n,defaultFormValues:t,visible:f,hideMask:g,hideCreateWithoutDeploymentOption:b,openPipelineEntryPoint:y,shouldNavigateReplace:x,onSuccess:Y}){let U=(0,l.useRef)(null);(0,A.E)(U,f);let B=(0,h.tz)(),[W,z]=(0,l.useState)(!1),[$,H]=(0,l.useState)(null),{theme:J}=(0,o.wn)(),Q=(0,C.Zp)(),X=(0,P.I)(e=>e),{createPipeline:Z}=(0,T.aI)(n),ee=(0,T.mW)(),ea={name:(0,q.T1)({intl:B}),catalog:a?{name:a}:null,schema:void 0,personalSchema:"yes",language:L.KVK.PYTHON,...t},{handleSubmit:en,control:et,watch:ei,trigger:el,formState:er,setValue:eo}=(0,r.mN)({mode:"onBlur",reValidateMode:"onBlur",defaultValues:ea});(0,l.useEffect)(()=>{el("name")},[el]);let es=ei("catalog"),eu="yes"===ei("personalSchema"),ec=a=>_(function*(){H(null);try{let{definitionId:t,entryPointPath:i}=yield Z({pipelineName:a.name,language:a.language,catalog:a.catalog?.name??"",schema:a.schema,personalSchema:a.personalSchema});if(!t)return;e(),X.runner&&X.target&&X.runner.summary(X.target),a.disableAutoDeploy||(0,I.E)((0,D.Uk)(n.name));let l=t;if(y){let e=(yield(0,N.T)(i).catch(()=>void 0))?.id;e&&(l=e)}Y?.(),Q((0,S.ZZ)({id:l,contextId:v.H.fromFolder((0,D.Uk)(n.name))}),{replace:x}),j.success()}catch(e){H(e),e instanceof F.Ck||j.failure(e)}})(),ed=e=>_(function*(){z(!0);try{yield en(ec)(e)}finally{z(!1)}})(),ep="dabs-create-lakeflow-pipeline-definition-form",em="dabs-authoring.create-lakeflow-pipeline-definition-modal",ef=(0,i.FD)(i.FK,{children:[(0,i.Y)(s.$n,{componentId:`${em}.footer.cancel`,onClick:e,children:(0,i.Y)(h.sA,{...M.D.cancelButtonText})}),(0,i.Y)(E.j,{loading:W,disabled:W,form:ep,onClickCreateWithoutDeployment:()=>{eo("disableAutoDeploy",!0),ed()},componentId:`${em}.footer.ok`,hideCreateWithoutDeploymentOption:b})]});return(0,i.Y)(u.aF,{componentId:em,title:(0,i.Y)(h.sA,{...M.D.modalTitle}),onCancel:e,footer:ef,confirmLoading:W,visible:f,dangerouslySetAntdProps:{mask:!g},children:(0,i.FD)("form",{id:ep,onSubmit:e=>{let a=(0,k.ER)();eo("disableAutoDeploy",!a),ed(e)},css:{display:"flex",flexDirection:"column",gap:J.spacing.md},children:[(0,i.FD)("div",{children:[(0,i.Y)(c.D.Label,{htmlFor:K.PIPELINE_NAME,children:(0,i.Y)(h.sA,{...M.D.pipelineNameLabel})}),(0,i.Y)(d.t.Input,{componentId:"dabs-authoring.create-lakeflow-pipeline-definition-modal.name",id:K.PIPELINE_NAME,control:et,name:"name",rules:{required:!0,validate:{nameGloballyUnique:e=>ee.isGloballyUnique(e),nameLocallyUnique:e=>ee.isLocallyUnique(e)}},validationState:er.errors.name?"error":void 0,inputRef:U,disabled:W}),er.errors.name?.message&&(0,i.Y)(c.D.Message,{type:"error",message:er.errors.name.message})]}),(0,i.FD)("div",{children:[(0,i.Y)(c.D.Label,{htmlFor:K.PERSONAL_SCHEMA,children:(0,i.Y)(h.sA,{...M.D.personalSchemaLabel,values:{exampleCatalog:`catalog.${(0,w.ob)()}`}})}),(0,i.Y)(r.xI,{name:"personalSchema",control:et,rules:{required:!0},render:({field:{onChange:e,value:a}})=>(0,i.FD)(p.XA,{componentId:"dabs-authoring.create-lakeflow-pipeline-definition-modal.personal-schema",id:K.PERSONAL_SCHEMA,width:"100%",defaultValue:"yes",value:a,onChange:e,disabled:W,children:[(0,i.Y)(p.wS,{value:"yes",children:(0,i.Y)(h.sA,{id:"S/5D1N",defaultMessage:"Yes"})}),(0,i.Y)(p.wS,{value:"no",children:(0,i.Y)(h.sA,{id:"B0vTOW",defaultMessage:"No"})})]})})]}),(0,i.FD)("div",{css:{display:"flex",flexDirection:"row",gap:J.spacing.md},children:[(0,i.FD)("div",{css:{flex:1,width:"50%"},children:[(0,i.Y)("div",{css:{marginBottom:J.spacing.sm},children:(0,i.Y)(c.D.Label,{htmlFor:K.CATALOG,children:(0,i.Y)(h.sA,{...M.D.catalogLabel})})}),(0,i.Y)(r.xI,{name:"catalog",control:et,rules:{required:!0},render:({field:{onChange:e,value:a}})=>(0,i.Y)(O.Q,{isServerlessEnabled:!0,onChange:e,value:a,disabled:W})})]}),(0,i.FD)("div",{css:{flex:1,width:"50%"},children:[(0,i.Y)("div",{css:{marginBottom:J.spacing.sm},children:(0,i.Y)(c.D.Label,{htmlFor:K.TARGET_OR_SCHEMA,children:(0,i.Y)(h.sA,{...M.D.schemaLabel})})}),(0,i.Y)(r.xI,{name:"schema",control:et,render:({field:{onChange:e,value:a}})=>(0,i.Y)(R.dC,{isDirectPublishingModeChecked:!0,catalogName:es?.name,value:a??"",onChange:a=>{queueMicrotask(()=>e(a??""))},disabled:W||eu,disableEditingDirectPublishingMode:!1,useDefault:!0})})]})]}),(0,i.FD)("div",{children:[(0,i.Y)(c.D.Label,{htmlFor:K.NOTEBOOK_LANGUAGE,children:(0,i.Y)(h.sA,{...M.D.languageLabel})}),(0,i.FD)(d.t.RadioGroup,{componentId:"dabs-authoring.create-lakeflow-pipeline-definition-modal.language",id:K.NOTEBOOK_LANGUAGE,control:et,name:"language",rules:{required:!0},disabled:W,layout:"horizontal",children:[(0,i.Y)(m.sx,{value:L.KVK.PYTHON,children:(0,i.Y)(h.sA,{...q.yi[L.KVK.PYTHON]})}),(0,i.Y)(m.sx,{value:L.KVK.SQL,children:(0,i.Y)(h.sA,{...q.yi[L.KVK.SQL]})})]})]}),(0,i.Y)(G,{error:$})]})})}function G({error:e}){if(!e)return null;if(e instanceof F.Ck)return(0,i.Y)(Y.l,{relativePath:e.relativePath});return(0,i.Y)(f.F,{componentId:"dabs-authoring.create-lakeflow-pipeline-definition-modal.creation-failed-alert",closable:!1,message:(0,i.Y)(h.sA,{id:"J6z5mf",defaultMessage:"Failed to create the pipeline."}),type:"error"})}function W({onClose:e,visible:a,defaultFormValues:n,hideMask:t,hideCreateWithoutDeploymentOption:l,openPipelineEntryPoint:r,shouldNavigateReplace:o,onSuccess:s}){let{defaultCatalog:u,loading:c}=(0,w.Gk)(),d=(0,P.I)(e=>e.projectRootFolderNode);if(c||!d?.attributes?.path_name)return(0,i.Y)(x.z,{visible:a,onClose:e,hideMask:t});return(0,i.Y)(V,{onClose:e,defaultCatalog:u,rootFolderNode:d,visible:a,defaultFormValues:n,hideMask:t,hideCreateWithoutDeploymentOption:l,openPipelineEntryPoint:r,shouldNavigateReplace:o,onSuccess:s})}let z=()=>{let[e,a]=(0,l.useState)(!1),[n,t]=(0,l.useReducer)(e=>e+1,0),[r,o]=(0,l.useState)({}),s=(0,i.Y)(W,{visible:e,onClose:()=>{a(!1),r.onClose?.()},defaultFormValues:r.defaultFormValues,hideMask:r.hideMask,hideCreateWithoutDeploymentOption:r.hideCreateWithoutDeploymentOption,openPipelineEntryPoint:r.openPipelineEntryPoint,shouldNavigateReplace:r.shouldNavigateReplace,onSuccess:r.onSuccess},n),u=(0,l.useCallback)((e={})=>{o(e),t(),a(!0)},[]);return[s,u]};t()}catch(e){t(e)}})},661152:(e,a,n)=>{n.d(a,{I2:()=>u,TE:()=>r,cR:()=>s,oA:()=>o});var t=n(141078),i=n(154968);let l=(0,t.J1)`
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
`,r=(0,t.J1)`
  query PipelineGetQuery($input: DeltapipelinesGetPipelineInput!) @component(name: "Workflows.Authoring.UI") {
    deltapipelinesGet: jobsGetPipeline(input: $input) {
      ...PipelineGetFragment
      apiError {
        ...PipelineApiErrorFields
      }
    }
  }
  ${l}
  ${i.n}
`;function o({variables:e,...a}={}){return(0,t.IT)(r,{variables:e,...a})}function s(e){return(0,t._l)(r,e)}function u({variables:e,...a}={}){let n=(0,t.IT)(r,{variables:e,...a,fetchPolicy:"cache-and-network"});if(!a.skip&&void 0===n.data&&!n.error)throw new Promise(e=>{n.observable.subscribe({next(a){a.loading||e(a)}})});return n}},731707:(e,a,n)=>{var t=n(692738);a.default=function(e,a){var n=t.useRef();t.useEffect(function(){n.current=e},[e]),t.useEffect(function(){if(null!==a){var e=setInterval(function(){return n.current.apply(n,arguments)},a);return function(){return clearInterval(e)}}},[a])}},807091:(e,a,n)=>{n.d(a,{QW:()=>s,dx:()=>o});var t=n(686560);if(/^(13057|85670)$/.test(n.j))var i=n(641760);if(/^(13057|85670)$/.test(n.j))var l=n(371303);var r=n(889885);function o(){return(0,r.Nm)("enablePipelinesUi",!1,()=>(0,t.d)("enablePipelinesUi",!1))}function s(){return(0,l.sT)("databricks.fe.enablePipelinesUnityCatalogSelection",!1)||(0,l.sT)("databricks.deltapipelines.isUCCatalogEnabled",!1)||(0,i.ei)()}},838524:(e,a,n)=>{n.d(a,{k:()=>i});var t=n(661152);function i(e){return[{query:t.TE,variables:{input:{pipelineId:e}}},{query:t.TE,variables:{input:{pipelineId:e,includePermissionLevels:!0}}}]}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/78295.bf09ec1ab7.chunk.js.map