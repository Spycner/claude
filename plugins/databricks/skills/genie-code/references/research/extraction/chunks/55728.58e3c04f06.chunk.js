"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[54261,55728],{23542:(e,t,a)=>{a.d(t,{k:()=>f});var r,n=a(692738),i=a(342411),s=a(586564),o=a(88144),l=a(897080),u=a(724283),p=a(774376),d=a(889145),m=a(410297);function E(e,t,a,r,n,i,s){try{var o=e[i](s),l=o.value}catch(e){a(e);return}o.done?t(l):Promise.resolve(l).then(r,n)}var c=((r=c||{}).CREATE_FOLDER_SUCCESS="createDirectorySuccess",r.CREATE_FOLDER_ERROR="createDirectoryError",r.LIST_FOLDER_CONTENTS_ERROR="listDirectoryError",r);function f({baseDirectory:e,loggingEventType:t}){let a=(0,i.tz)(),[r]=u.z.usePipelineAction(o.S,{}),{refetch:c}=(0,l.h)(e,{skip:!0,fetchPolicy:"no-cache"});return(0,n.useCallback)(n=>{var i;return(i=function*(){let i=yield c();if(m.jD.hasError(i)){let r=m.jD.getErrorMessage(i);throw p.o.showNotification("Error",r??a.formatMessage(h.listDirectoryError,{directory:e}),"error"),d.h.logEvent(t,"listDirectoryError"),Error("Could not query workspace data for directory contents")}let o=(0,s.i)({listDirectoryResponse:i.data,originalName:n}),l=`${e}/${o}`,u=yield r({variables:{input:{path:l}}});if(m.jD.hasError(u))throw d.h.logEvent(t,"createDirectoryError"),Error("Could not create folder");return d.h.logEvent(t,"createDirectorySuccess"),{folderName:o,pathToFolder:l}},function(){var e=this,t=arguments;return new Promise(function(a,r){var n=i.apply(e,t);function s(e){E(n,a,r,s,o,"next",e)}function o(e){E(n,a,r,s,o,"throw",e)}s(void 0)})})()},[e,r,c,a,t])}let h=(0,i.YK)({listDirectoryError:{id:"kUYGh+",defaultMessage:'Could not get contents of directory "{directory}"'}})},64222:(e,t,a)=>{a.d(t,{Vr:()=>h,CJ:()=>g,yj:()=>R,$m:()=>T,Qv:()=>I,iD:()=>A,KA:()=>N,Fp:()=>v,oU:()=>_});var r,n=a(932273),i=a(784141),s=a(610435),o=a(692738),l=a(375214);function u(e){return(0,s.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,s.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m-.75 4.31 1.72 1.72 1.06-1.06-1.28-1.28V9.5h-1.5z",clipRule:"evenodd"}),(0,s.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.327 1.004A.75.75 0 0 1 15 1.75V7H6.5v8H1.75a.75.75 0 0 1-.75-.75V1.75l.004-.077A.75.75 0 0 1 1.75 1h12.5zM2.5 13.5H5V7H2.5zm0-8h11v-3h-11z",clipRule:"evenodd"})]})}let p=(0,o.forwardRef)((e,t)=>(0,s.Y)(l.I,{ref:t,...e,component:u}));p.displayName="TableClockIcon";var d=a(236018),m=a(814761),E=a(342411),c=a(443071),f=a(993533),h=((r={}).MATERIALIZED_VIEW="MATERIALIZED_VIEW",r.STREAMING_TABLE="STREAMING_TABLE",r.TEMPORARY_VIEW="TEMPORARY_VIEW",r.PERSISTED_VIEW="PERSISTED_VIEW",r.SINK="SINK",r);let A={MATERIALIZED_VIEW:{name:(0,E.zR)({id:"b2LFzV",defaultMessage:"Materialized view"}),description:(0,E.zR)({id:"aEuNxc",defaultMessage:"Persist query results with incremental refresh"}),icon:n.A},STREAMING_TABLE:{name:(0,E.zR)({id:"BSb0s9",defaultMessage:"Streaming table"}),description:(0,E.zR)({id:"tfQN8U",defaultMessage:"Ingest data from a streaming source"}),icon:i.A},TEMPORARY_VIEW:{name:(0,E.zR)({id:"rUXhL+",defaultMessage:"Temporary view"}),description:(0,E.zR)({id:"y71J/U",defaultMessage:"Hold intermediate results within a pipeline run"}),icon:p},PERSISTED_VIEW:{name:(0,E.zR)({id:"+1DZ1V",defaultMessage:"Persisted view"}),description:(0,E.zR)({id:"zccyeD",defaultMessage:"Register a query as a virtual view in the catalog"}),icon:d.A},SINK:{name:(0,E.zR)({id:"SyIigY",defaultMessage:"Sink"}),description:(0,E.zR)({id:"7/2oQa",defaultMessage:"Stream records to external targets"}),icon:m.A}},g=A.MATERIALIZED_VIEW.icon,I=A.STREAMING_TABLE.icon,N=A.TEMPORARY_VIEW.icon,R=A.PERSISTED_VIEW.icon,T=A.SINK.icon,_=({pythonPipelinesDecoratorModule:e,pythonPipelinesImportStatement:t}=(0,c.D)())=>({MATERIALIZED_VIEW:{[f.KVK.PYTHON]:`
${t}


# Please edit the sample below


@${e}.table
def <NAME>():
    return spark.read.table("samples.wanderbricks.users")
`.trim(),[f.KVK.SQL]:`
-- Please edit the sample below

CREATE MATERIALIZED VIEW <NAME> AS
SELECT
    user_id,
    email,
    name,
    user_type
FROM samples.wanderbricks.users;
`.trim()},STREAMING_TABLE:{[f.KVK.PYTHON]:`
${t}
from pyspark.sql.functions import col


# Please edit the sample below


@${e}.table
def <NAME>():
    """
    Reads the raw sample orders JSON data as a streaming source.
    """
    path = "/databricks-datasets/retail-org/sales_orders/"

    schema = """
        customer_name STRING,
        order_number STRING
    """

    return (
        spark.readStream.schema(schema)
            .format("json")
            .option("header", "true")
            .load(path)
            .select(
                col("customer_name"),
                col("order_number"),
            )
    )
`.trim(),[f.KVK.SQL]:`
-- Please edit the sample below

CREATE STREAMING TABLE
    <NAME>
AS SELECT
    customer_name,
    order_number
FROM STREAM READ_FILES(
    "/databricks-datasets/retail-org/sales_orders/",
    format => "json",
    header => true
);`.trim()},TEMPORARY_VIEW:{[f.KVK.PYTHON]:`
${t}


# Please edit the sample below


@${e}.view
def <NAME>():
    return spark.read.table("samples.wanderbricks.users")
`.trim(),[f.KVK.SQL]:`
-- Please edit the sample below

CREATE TEMPORARY VIEW <NAME> AS
SELECT
    user_id,
    email,
    name,
    user_type
FROM samples.wanderbricks.users;`},PERSISTED_VIEW:{[f.KVK.PYTHON]:null,[f.KVK.SQL]:`
-- Please edit the sample below

CREATE VIEW <NAME> AS
SELECT
    user_id,
    email,
    name,
    user_type
FROM samples.wanderbricks.users;`},SINK:{[f.KVK.PYTHON]:`
${t}


# Please edit the sample below


dp.create_sink(
    name="<NAME>",
    format="delta",
    options={"tableName": "<PIPELINE_CATALOG>.<PIPELINE_SCHEMA>.<NAME>"}
)


@${e}.append_flow(target="<NAME>")
def append_to_<NAME>():
    return spark.readStream.table("samples.wanderbricks.users")
`.trim(),[f.KVK.SQL]:null}}),M=({pythonPipelinesDecoratorModule:e,pythonPipelinesImportStatement:t})=>({MATERIALIZED_VIEW:{[f.KVK.PYTHON]:`
${t}


@${e}.table
def <NAME>():
    return spark.read.table("<FROM_TABLE_NAME>")
`.trim(),[f.KVK.SQL]:`
CREATE MATERIALIZED VIEW <NAME> AS
SELECT
    *
FROM <FROM_TABLE_NAME>;
`.trim()},STREAMING_TABLE:{[f.KVK.PYTHON]:`
${t}


@${e}.table
def <NAME>():
    return spark.readStream.table("<FROM_TABLE_NAME>")
    `.trim(),[f.KVK.SQL]:`
CREATE STREAMING TABLE <NAME> AS
SELECT
    *
FROM STREAM <FROM_TABLE_NAME>;
`.trim()},TEMPORARY_VIEW:{[f.KVK.PYTHON]:`
${t}


@${e}.view
def <NAME>():
    return spark.read.table("<FROM_TABLE_NAME>")
    `.trim(),[f.KVK.SQL]:`
CREATE TEMPORARY VIEW <NAME> AS
SELECT
    *
FROM <FROM_TABLE_NAME>;
`.trim()},PERSISTED_VIEW:{[f.KVK.PYTHON]:null,[f.KVK.SQL]:`
CREATE VIEW <NAME> AS
SELECT
    *
FROM <FROM_TABLE_NAME>;
    `.trim()},SINK:{[f.KVK.PYTHON]:`
${t}


dp.create_sink(
    name="<NAME>",
    format="delta",
    options={"tableName": "<PIPELINE_CATALOG>.<PIPELINE_SCHEMA>.<NAME>"}
)


@${e}.append_flow(target="<NAME>")
def append_to_<NAME>():
    return spark.readStream.table("<FROM_TABLE_NAME>")
`.trim(),[f.KVK.SQL]:null}}),b=({pythonPipelinesDecoratorModule:e,pythonPipelinesImportStatement:t})=>({MATERIALIZED_VIEW:{[f.KVK.PYTHON]:`
${t}


@${e}.table
def <NAME>():
    return spark.read.table("<FROM_TABLE_NAME>")
`.trim(),[f.KVK.SQL]:`
CREATE MATERIALIZED VIEW <NAME> AS
SELECT
    *
FROM <FROM_TABLE_NAME>;
    `.trim()},STREAMING_TABLE:null,TEMPORARY_VIEW:{[f.KVK.PYTHON]:`
${t}


@${e}.view
def <NAME>():
    return spark.read.table("<FROM_TABLE_NAME>")
`.trim(),[f.KVK.SQL]:`
CREATE TEMPORARY VIEW <NAME> AS
SELECT
    *
FROM <FROM_TABLE_NAME>;
`.trim()},PERSISTED_VIEW:null,SINK:null}),v=(e=(0,c.D)())=>({MATERIALIZED_VIEW:M(e),STREAMING_TABLE:(({pythonPipelinesDecoratorModule:e,pythonPipelinesImportStatement:t})=>({MATERIALIZED_VIEW:{[f.KVK.PYTHON]:`
${t}


@${e}.table
def <NAME>():
    return spark.read.table("<FROM_TABLE_NAME>")
`.trim(),[f.KVK.SQL]:`
CREATE MATERIALIZED VIEW <NAME> AS
SELECT
    *
FROM <FROM_TABLE_NAME>;
`.trim()},STREAMING_TABLE:{[f.KVK.PYTHON]:`
${t}


@${e}.table
def <NAME>():
    return spark.readStream.table("<FROM_TABLE_NAME>")
`.trim(),[f.KVK.SQL]:`
CREATE STREAMING TABLE <NAME> AS
SELECT
    *
FROM STREAM <FROM_TABLE_NAME>;
    `.trim()},TEMPORARY_VIEW:{[f.KVK.PYTHON]:`
${t}


@${e}.view
def <NAME>():
    return spark.readStream.table("<FROM_TABLE_NAME>")
`.trim(),[f.KVK.SQL]:`
CREATE TEMPORARY VIEW <NAME> AS
SELECT
    *
FROM STREAM <FROM_TABLE_NAME>;
`.trim()},PERSISTED_VIEW:{[f.KVK.PYTHON]:null,[f.KVK.SQL]:`
CREATE VIEW <NAME> AS
SELECT
    *
FROM <FROM_TABLE_NAME>;
    `.trim()},SINK:{[f.KVK.PYTHON]:`
${t}


dp.create_sink(
    name="<NAME>",
    format="delta",
    options={"tableName": "<PIPELINE_CATALOG>.<PIPELINE_SCHEMA>.<NAME>"}
)


@${e}.append_flow(target="<NAME>")
def append_to_<NAME>():
    return spark.readStream.table("<FROM_TABLE_NAME>")
`.trim(),[f.KVK.SQL]:null}}))(e),TABLE:M(e),VIEW:b(e),DATASET_TYPE_UNKNOWN:b(e),DATASET_TYPE_UNSPECIFIED:b(e),SINK:null})},84262:(e,t,a)=>{a.d(t,{p:()=>o});var r=a(692738),n=a(759458),i=a(442628),s=a(935846);function o(e){let t=(0,i.yr)(e=>e.updateDetailsStore),a=(0,n.Pj)(t??s.ox,e=>e.newEvents),o=(0,r.useRef)(null);o.current=e,(0,r.useEffect)(()=>{if(!a)return;let e=a.subscribe(e=>{o.current?.(e)});return()=>e.unsubscribe()},[a])}},88144:(e,t,a)=>{a.d(t,{S:()=>s});var r=a(141078),n=a(715370);let i=(0,r.J1)`
  mutation CreateFolderMutation($input: CreateFolderInput!) @component(name: "Notebook.Notebooks") {
    createFolder(input: $input) @rest(type: "CreateFolderResponse", path: "/workspace/mkdirs", method: "POST") {
      errors @type(name: "ApiError") {
        code
        message
        helpUrl
        traceId
      }
    }
  }
`,s=e=>n.R.useMutation(i,e)},163624:(e,t,a)=>{a.d(t,{_:()=>n});var r,n=((r={}).ERROR="error",r.WARNING="warning",r.INSIGHT="insight",r)},236018:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function s(e){return(0,r.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,r.FD)("g",{fill:"currentColor",fillRule:"evenodd",clipPath:"url(#TableViewIcon_svg__a)",clipRule:"evenodd",children:[(0,r.Y)("path",{d:"M1.75 1a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75H4v-1.5H2.5V7H5v2h1.5V7h3v2H11V7h2.5v2H15V1.75a.75.75 0 0 0-.75-.75zM13.5 5.5v-3h-11v3z"}),(0,r.Y)("path",{d:"M11.75 10a.75.75 0 0 0-.707.5H9.957a.75.75 0 0 0-.707-.5h-3.5a.75.75 0 0 0-.75.75v1.75a2.5 2.5 0 0 0 5 0V12h1v.5a2.5 2.5 0 0 0 5 0v-1.75a.75.75 0 0 0-.75-.75zm.75 2.5v-1h2v1a1 1 0 1 1-2 0m-6-1v1a1 1 0 1 0 2 0v-1z"})]}),(0,r.Y)("defs",{children:(0,r.Y)("clipPath",{children:(0,r.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let o=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:s}));o.displayName="TableViewIcon";let l=o},337145:(e,t,a)=>{a.d(t,{x:()=>r});function r(e){let t="origin"in e?e.origin:e;return t.flowName??t.datasetName??t.sinkName??null}},386733:(e,t,a)=>{a.d(t,{TL:()=>b,_U:()=>L,mj:()=>v});var r=a(632528),n=a.n(r),i=a(692738),s=a(819524),o=a(141078),l=a(886100),u=a(22191),p=a(747129),d=a(304926),m=a(412836),E=a(993533),c=a(962200),f=a(154968),h=a(410297),A=a(84262),g=a(587694),I=a(167154),N=a(131172),R=a(163624),T=a(954828);function _(e,t,a,r,n,i,s){try{var o=e[i](s),l=o.value}catch(e){a(e);return}o.done?t(l):Promise.resolve(l).then(r,n)}function M(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function s(e){_(i,r,n,s,o,"next",e)}function o(e){_(i,r,n,s,o,"throw",e)}s(void 0)})}}let b=(0,o.J1)`
  query ListPipelineIssueEventsQuery($input: DeltapipelinesListPipelineEventsInput!)
  @component(name: "Workflows.Observability.Lists") {
    deltapipelinesEvents: jobsPipelineEvents(input: $input) {
      events {
        id
        message
        timestamp
        level
        eventType
        origin {
          datasetName
          sinkName
          flowName
          sourceCodeLocation {
            path
            lineNumber
            endingLineNumber
            columnNumber
            endingColumnNumber
            notebookCellNumber
          }
          updateId
        }
        error {
          exceptions {
            errorClass
            message
            className
            shortMessage
            sqlState
          }
        }
        details {
          planningInformation {
            techniqueInformation {
              maintenanceType
              isChosen
            }
            optimizationInsights {
              descriptiveMessage
              issueClass
              targetDatasets {
                table
                database
                catalog
              }
            }
          }
        }
      }
      apiError {
        ...PipelineApiErrorFields
      }
      nextPageToken
    }
  }
  ${f.n}
`;function v({pipelineId:e,updateId:t,enabled:a=!0,mvDatasets:r=[],isServerless:s=!1}){let f=(0,d.jE)(),_=(0,o.mK)(),P=e=>M(function*(){let t=yield _.query({query:b,fetchPolicy:"no-cache",variables:{input:{maxResults:C,...e}}});return{results:t.data?.deltapipelinesEvents?.events??[],nextPageToken:t.data?.deltapipelinesEvents?.nextPageToken??null}})(),C=(0,I.f)(),O=e&&t&&a,k=["pipelineIssueEvents",e,t],{data:w,isInitialLoading:$}=(0,m.IT)({queryKey:k,enabled:!!O,refetchOnWindowFocus:!1,queryFn:()=>M(function*(){if(!O)return;let[{results:a,hasReachedFetchLimit:r},n]=yield Promise.all([(0,N.g)({fetchPaginatedList:a=>P({pipelineId:e,filter:(0,h._)(t,[c.L2.ERROR,c.L2.WARN]),pageToken:a}),maxResultsPerPage:C}),(0,g.$)()&&(0,N.g)({fetchPaginatedList:a=>P({pipelineId:e,filter:`update_id = '${t}' AND event_type = '${c.hw.PLANNING_INFORMATION}'`,pageToken:a}),maxResultsPerPage:C})]),i=r||n&&n.hasReachedFetchLimit,s=f.getQueryData(k),o=[...s?.events??[],...a,...n?n.results:[]];return l.iT.sev2BurnRate(u.Es.WorkflowsAuthoring,"lakeflow:issue-events:fetch-limit-reached",p.i1.P99,p.Ip.Min10,!i),{events:o.filter(y),hasReachedFetchLimit:i}})()}),F=(0,i.useMemo)(()=>(function(e){if((e=n()(e,e=>e.id)).some(e=>e.eventType===c.hw.FLOW_PROGRESS&&e.level===E.Gvj.ERROR))return e.filter(e=>e.eventType!==c.hw.UPDATE_PROGRESS||e.level!==E.Gvj.ERROR);return e})(w?.events??[]),[w]),D=(0,i.useMemo)(()=>F.flatMap(e=>{let t=e.error?.exceptions??[],a=S(e),r={id:e.id,message:e.message,eventId:e.id,datasetName:e.origin.datasetName,sinkName:e.origin.sinkName,flowName:e.origin.flowName,lineNumber:e.origin.sourceCodeLocation?.lineNumber??null,endingLineNumber:e.origin.sourceCodeLocation?.endingLineNumber??null,columnNumber:e.origin.sourceCodeLocation?.columnNumber??null,endingColumnNumber:e.origin.sourceCodeLocation?.endingColumnNumber??null,sourcePath:e.origin.sourceCodeLocation?.path??null,notebookCellNumber:e.origin.sourceCodeLocation?.notebookCellNumber??null};if(a===R._.INSIGHT&&e.details?.planningInformation?.optimizationInsights?.length)return e.details.planningInformation.optimizationInsights.map((t,n)=>({...r,id:`${e.id}:${n}`,category:a,message:t.descriptiveMessage||r.message,optimizationInsight:t}));if(a===R._.WARNING||a===R._.ERROR){if(t.length>0)return t.map((t,n)=>({...r,id:`${e.id}:${n}`,category:a,message:t.shortMessage||t.message||r.message,exception:t}));return{...r,category:a,exception:null}}return[]}),[F]),K=(0,i.useMemo)(()=>{if(!(0,g.$)())return D;let e=(0,T.DG)(D);return r.length>0&&!s&&e.push(L(r)),e},[D,r,s]),V=F.length>0?F[F.length-1].timestamp:null;return(0,A.p)(e=>{f.setQueryData(k,t=>{let a=t?.events,r=e.filter(y);if(a){let e=new Set(a.map(e=>e.id)),n=r.filter(t=>!e.has(t.id));return{...t,events:[...n,...a]}}return{hasReachedFetchLimit:!1,events:r}})}),{events:F,issues:D,issuesWithNormalizedInsights:K,lastEventTimestamp:V,isInitialLoading:$,hasReachedFetchLimit:w?.hasReachedFetchLimit??!1}}function S(e){if(e.level===E.Gvj.ERROR)return R._.ERROR;if(e.level===E.Gvj.WARN)return R._.WARNING;if((0,g.$)()&&e.eventType===c.hw.PLANNING_INFORMATION&&e.details?.planningInformation?.optimizationInsights?.length)return R._.INSIGHT;return null}function y(e){return null!==e.id&&null!==e.level&&null!==e.timestamp&&null!==e.origin&&null!==S(e)}function L(e){let t=`Enable serverless to support incremental refresh for materialized views. More details on: ${s.Ay.LAKEFLOW_PIPELINES_INCREMENTAL_REFRESH_URL}`;return{id:"manual-insight:serverless-mv",eventId:null,message:t,category:R._.INSIGHT,isGroupedInsight:!0,datasetName:null,datasetNames:e,sinkName:null,flowName:null,lineNumber:null,endingLineNumber:null,columnNumber:null,endingColumnNumber:null,sourcePath:null,notebookCellNumber:null,optimizationInsight:{__typename:"DeltapipelinesEventsEventsOptimizationInsight",descriptiveMessage:t,issueClass:"SERVERLESS_REQUIRED",targetDatasets:null}}}},443071:(e,t,a)=>{a.d(t,{D:()=>n});var r=a(441535);function n(){return"16.1"===(0,r.W)("databricks.deltapipelines.safe.channel.current.dbrVersion","unknown")?{pythonPipelinesImportStatement:"import dlt",pythonPipelinesDecoratorModule:"dlt"}:{pythonPipelinesImportStatement:"from pyspark import pipelines as dp",pythonPipelinesDecoratorModule:"dp"}}},475513:(e,t,a)=>{a.d(t,{KC:()=>R,oO:()=>T,st:()=>_});var r=a(692738),n=a(141078),i=a(886100),s=a(22191),o=a(747129),l=a(412836),u=a(386733),p=a(993533),d=a(962200),m=a(154968),E=a(587694),c=a(131172),f=a(163624),h=a(954828),A=a(921235);function g(e,t,a,r,n,i,s){try{var o=e[i](s),l=o.value}catch(e){a(e);return}o.done?t(l):Promise.resolve(l).then(r,n)}function I(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function s(e){g(i,r,n,s,o,"next",e)}function o(e){g(i,r,n,s,o,"throw",e)}s(void 0)})}}let N=(0,n.J1)`
  query ListPipelineDiagnostics($pipelineId: String!, $updateId: String!, $pageToken: String, $pageSize: Int!)
  @component(name: "Workflows.Observability.Lists") {
    lakeflowListPipelineDiagnostics(
      input: { pipelineId: $pipelineId, updateId: $updateId, pageToken: $pageToken, pageSize: $pageSize }
    ) {
      diagnostics {
        name
        severity
        message
        documentUri
        sourceEventId
        eventType
        range {
          start {
            line
            character
          }
          end {
            line
            character
          }
        }
        relatedPipelineNodes {
          datasetName
          sinkName
          flowName
        }
        details {
          notebook {
            cellNumber
          }
          exception {
            errorClass
            message
            shortMessage
            className
            sqlState
          }
          incrementalizationInsight {
            issueClass
            descriptiveMessage
            targetDatasets {
              catalog
              schema
              table
            }
          }
        }
      }
      nextPageToken
      apiError {
        ...PipelineApiErrorFields
      }
    }
  }
  ${m.n}
`;function R(e,t,a){return I(function*(){let{results:r,hasReachedFetchLimit:n}=yield(0,c.g)({fetchPaginatedList:r=>I(function*(){let n=yield e.query({query:N,fetchPolicy:"no-cache",variables:{pipelineId:t,updateId:a,pageToken:r,pageSize:20}});return{results:n.data?.lakeflowListPipelineDiagnostics?.diagnostics??[],nextPageToken:n.data?.lakeflowListPipelineDiagnostics?.nextPageToken??null}})(),maxResultsPerPage:20}),i=(0,E.$)();return{issues:_(r).map(A.j).filter(e=>null!==e&&(i||e.category!==f._.INSIGHT)),hasReachedFetchLimit:n}})()}function T({pipelineId:e,updateId:t,enabled:a=!0,mvDatasets:p=[],isServerless:d=!1}){let m=(0,n.mK)(),c=!!(e&&t&&a),{data:f,isInitialLoading:A}=(0,l.IT)({queryKey:["lakeflowListPipelineDiagnostics",e,t],enabled:c,refetchOnWindowFocus:!1,queryFn:()=>I(function*(){if(!e||!t)return;let a=yield R(m,e,t);return i.iT.sev2BurnRate(s.Es.WorkflowsAuthoring,"lakeflow:diagnostics:fetch-limit-reached",o.i1.P99,o.Ip.Min10,!a.hasReachedFetchLimit),a})()}),g=(0,r.useMemo)(()=>f?.issues??[],[f?.issues]),N=(0,r.useMemo)(()=>{if(!(0,E.$)())return g;let e=(0,h.DG)(g);return p.length>0&&!d&&e.push((0,u._U)(p)),e},[g,p,d]);return{events:[],issues:g,issuesWithNormalizedInsights:N,lastEventTimestamp:null,isInitialLoading:A,hasReachedFetchLimit:f?.hasReachedFetchLimit??!1}}function _(e){if(!e.some(e=>e.severity===p.o0n.ERROR&&e.eventType===d.hw.FLOW_PROGRESS))return e;return e.filter(e=>e.severity!==p.o0n.ERROR||e.eventType!==d.hw.UPDATE_PROGRESS)}},514436:(e,t,a)=>{a.d(t,{p:()=>u});var r=a(386733),n=a(475513),i=a(993533),s=a(99249),o=a(934583),l=a(677276);function u(){let{pipelineIssuesEnabled:e}=(0,s.r)(),{selectedUpdateId:t}=(0,l.F)(),{pipelineId:a,updateId:u,isInitialLoadingNewUpdate:p,isInitialLoading:d,isServerless:m,updateCreationTime:E}=(0,o.F)(e=>({pipelineId:e.pipelineId,updateId:e.updateId,isInitialLoadingNewUpdate:e.isInitialLoadingNewUpdate,isInitialLoading:e.isInitialLoading,isServerless:e.updateDetails?.settings?.serverless===!0,updateCreationTime:e.updateDetails?.creationTime??null})),c=(0,o.F)(e=>e.updateDetails?.datasets?.filter(e=>e.definition?.datasetType===i.oLM.MATERIALIZED_VIEW&&null!==e.name).map(e=>e.name)??[]),f=!p&&!d&&u===t,h=(0,r.mj)({pipelineId:a,updateId:u,enabled:f&&!e,mvDatasets:c,isServerless:m}),A=(0,n.oO)({pipelineId:a,updateId:u,enabled:f&&e,mvDatasets:c,isServerless:m});return e?{...A,lastEventTimestamp:E}:h}},584139:(e,t,a)=>{a.d(t,{p:()=>r});let r="transformations"},586564:(e,t,a)=>{a.d(t,{i:()=>r});function r({listDirectoryResponse:e,originalName:t,separator:a="-",firstSuffixValue:n=1}){let i=(e?.listDirectory?.objects??[]).map(e=>e.path.split("/").at(-1)).filter(e=>!!e),s=new Set(i),o=i.length,l=t,u=n,p=0;for(;s.has(l)&&p<=o;)l=`${t}${a}(${u++})`,p++;return l}},587694:(e,t,a)=>{a.d(t,{$:()=>n});var r=a(441535);function n(){return(0,r.W)("databricks.fe.lakeflow.isIssuesPanelInsightsEnabled",!1)}},609875:(e,t,a)=>{a.d(t,{K:()=>s});var r=a(141078),n=a(715370);let i=(0,r.J1)`
  mutation CreateNotebookFromSourceMutation($input: CreateNotebookFromSourceInput!)
  @component(name: "Notebook.Notebooks") {
    createNotebookFromSource(input: $input)
      @rest(type: "CreateNotebookFromSourceResponse", path: "/workspace/import", method: "POST") {
      objectId
      errors @type(name: "ApiError") {
        code
        message
        helpUrl
        traceId
      }
    }
  }
`,s=e=>n.R.useMutation(i,e)},882079:(e,t,a)=>{a.d(t,{_:()=>o});var r=a(719256),n=a(993533),i=a(443071),s=a(64222);function o({pipelineAssetType:e,language:t,template:a,templateValues:l,fromDataset:u}){let p,d;if("tests"===e)return`"""
The 'tests' folder contains pytest test files.
Use these tests to validate your pipeline transformations and utilities.
"""


def test_example():
    """Example test function. Replace with your own tests."""
    assert True
`;if("utilities"===e)return(({pythonPipelinesImportStatement:e,pythonPipelinesDecoratorModule:t}=(0,i.D)())=>`"""
The 'utilities' folder contains Python modules.
Keeping them separate provides a clear overview
of utilities you can reuse across your transformations.
"""
from pyspark.sql.functions import udf
from pyspark.sql.types import BooleanType
import re

@udf(returnType=BooleanType())
def is_valid_email(email):
    """
    This function checks if the given email address has a valid format using regex.
    Returns True if valid, False otherwise.

    Example usage:

    ${e}
    from pyspark.sql.functions import col
    from utilities import new_utils

    @${t}.table
    def my_table():
        return (
            spark.read.table("samples.wanderbricks.users")
            .withColumn("valid_email", new_utils.is_valid_email(col("email")))
    """
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
    if email is None:
        return False
    return re.match(pattern, email) is not None`)();if("transformations"===e){let e="";if(a&&u){let r=u.isSink?"SINK":u.datasetType,n=(0,s.Fp)()[r]?.[a]?.[t];if(!n)return"";e=n}else{let r=a&&(0,s.oU)()[a][t];if(!r)return"";e=r}let{tableName:n,pipelineCatalog:i,pipelineSchema:o}=l,p=u&&u.catalog&&u.schema&&u.name&&(u.catalog!==i||u.schema!==o)?`${(0,r.U0)(u.catalog)}.${(0,r.U0)(u.schema)}.${u.name}`:u?.name;return e.replaceAll("<NAME>",n).replaceAll("<PIPELINE_CATALOG>",(0,r.U0)(i)).replaceAll("<PIPELINE_SCHEMA>",(0,r.U0)(o)).replaceAll("<FROM_TABLE_NAME>",p??"")}if(t===n.KVK.PYTHON){let e,t;return e=l.pipelineCatalog,t=l.pipelineSchema,`# Databricks notebook source
# MAGIC %md
# MAGIC ### Example Exploratory Notebook
# MAGIC
# MAGIC Use this notebook to explore the data generated by the pipeline in your preferred programming language.
# MAGIC
# MAGIC **Note**: This notebook is not executed as part of the pipeline.

# COMMAND ----------

spark.sql("USE CATALOG ${(0,r.U0)(e)}")
spark.sql("USE SCHEMA ${(0,r.U0)(t)}")

# COMMAND ----------

display(spark.sql("SELECT * FROM samples.wanderbricks.users"))`}return p=l.pipelineCatalog,d=l.pipelineSchema,`-- Databricks notebook source
-- MAGIC %md
-- MAGIC ### Example Exploratory Notebook
-- MAGIC
-- MAGIC Use this notebook to explore the data generated by the pipeline in your preferred programming language.
-- MAGIC
-- MAGIC **Note**: This notebook is not executed as part of the pipeline.

-- COMMAND ----------

USE CATALOG ${(0,r.U0)(p)};
USE SCHEMA ${(0,r.U0)(d)};

-- COMMAND ----------

SELECT * from samples.wanderbricks.users`}},897080:(e,t,a)=>{a.d(t,{h:()=>s});var r=a(141078),n=a(715370);let i=(0,r.J1)`
  query ListDirectoryQuery($path: String!) @component(name: "Notebook.Notebooks") {
    listDirectory(path: $path)
      @rest(type: "ListDirectoryQueryResponse", path: "/workspace/list?path={args.path}", method: "GET") {
      errors @type(name: "ApiError") {
        code
        message
        helpUrl
        traceId
      }
      objects {
        objectType
        objectId
        path
        language
      }
    }
  }
`;function s(e,{variables:t,...a}={}){return n.R.useQuery(i,{variables:{path:encodeURIComponent(e||"")},...a})}},921235:(e,t,a)=>{a.d(t,{j:()=>i});var r=a(993533),n=a(163624);function i(e){var t,a;let i=function(e){switch(e){case r.o0n.ERROR:return n._.ERROR;case r.o0n.WARNING:return n._.WARNING;case r.o0n.INFORMATION:return n._.INSIGHT;default:return null}}(e.severity);if(null===i)return null;let s=e.relatedPipelineNodes?.[0],o=e.range,l={id:e.name??e.sourceEventId??"",eventId:e.sourceEventId??"",message:e.message,datasetName:s?.datasetName??null,sinkName:s?.sinkName??null,flowName:s?.flowName??null,lineNumber:o?.start?.line??null,endingLineNumber:o?.end?.line??null,columnNumber:o?.start?.character??null,endingColumnNumber:o?.end?.character??null,sourcePath:e.documentUri??null,notebookCellNumber:e.details?.notebook?.cellNumber??null},u=e.details?.incrementalizationInsight;if(i===n._.INSIGHT&&u){return{...l,category:n._.INSIGHT,message:u.descriptiveMessage||l.message,optimizationInsight:{__typename:"DeltapipelinesEventsEventsOptimizationInsight",descriptiveMessage:(t=u).descriptiveMessage??null,issueClass:t.issueClass,targetDatasets:t.targetDatasets?.map(e=>({__typename:"DeltapipelinesCommonCommonCatalogTableIdentifier",table:e.table??null,database:e.schema??null,catalog:e.catalog??null}))??null}}}if(i===n._.ERROR||i===n._.WARNING){let t=e.details?.exception??null;return{...l,category:i,message:t?.shortMessage||t?.message||l.message,exception:t?{__typename:"DeltapipelinesCommonCommonSerializedException",errorClass:(a=t).errorClass??null,message:a.message??null,className:a.className??null,shortMessage:a.shortMessage??null,sqlState:a.sqlState??null}:null}}return null}},954261:(e,t,a)=>{a.d(t,{Qu:()=>C,ms:()=>L,nt:()=>P});var r=a(154313),n=a(137797),i=a(802558),s=a.n(i),o=a(359525),l=a.n(o),u=a(603897),p=a.n(u),d=a(692738),m=a(719256),E=a(984741),c=a(584139),f=a(191431),h=a(529129),A=a(443071),g=a(609875),I=a(88144),N=a(993533),R=a(981158),T=a(889885),_=a(620839),M=a(23542),b=a(74360),v=a(724283);function S(e,t,a,r,n,i,s){try{var o=e[i](s),l=o.value}catch(e){a(e);return}o.done?t(l):Promise.resolve(l).then(r,n)}function y(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function s(e){S(i,r,n,s,o,"next",e)}function o(e){S(i,r,n,s,o,"throw",e)}s(void 0)})}}function L(e){let t=e.match(/^new pipeline \d+-(\d+)-(\d+) (\d+):(\d+)$/i);if(!t)return e.toLowerCase().replace(/[^\p{L}\p{N}]/gu,"_").replace(/_+/g,"_").replace(/^_+|_+$/g,"");{let[,e,a,r,n]=t;return`${["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"][parseInt(e,10)-1]}_${parseInt(a,10)}_${parseInt(r,10)}${n}`}}function P({pathName:e=`/${R.A.UserFolderName}/${(0,T.FI)("user")}`}={}){let t=(0,M.k)({baseDirectory:(0,E.e0)(e),loggingEventType:b.Rj.PIPELINE_CREATE_ACTION}),{addInitialFilesToExistingPipeline:a}=C();return{createInitialPipelineFiles:(0,d.useCallback)(({pipelineName:e,language:r,catalog:i,schema:o})=>y(function*(){let{pathToFolder:l}=yield t(e),u=yield a({rootFolder:l,catalog:i,schema:o,language:r,pipelineName:e});return{libraries:p()(u.filter(e=>e.isPipelineFile).map(({path:e,additionalCreateOptions:t})=>{if((0,f.Q)())return{glob:{include:`${(0,n.dirname)(e)}${h.en}`}};return t.language?{notebook:{path:e}}:{file:{path:e}}}),s()),entryPointPath:u.find(e=>e.isEntrypoint)?.path??"",rootPath:l}})(),[a,t])}}function C(){let[e]=v.z.usePipelineAction(g.K,{}),[t]=v.z.usePipelineAction(I.S,{});return{addInitialFilesToExistingPipeline:(0,d.useCallback)(({rootFolder:a,catalog:i,schema:s,language:o,pipelineName:u})=>y(function*(){let p=function({rootFolder:e,language:t,catalog:a,schema:r,pipelineName:i}){let s=L(i),o=!/^[a-z0-9_]+$/.test(s);return(t===N.KVK.PYTHON?function({pipelineName:e,tableSuffix:t,catalog:a,schema:r,rootFolder:n}){let{pythonPipelinesImportStatement:i,pythonPipelinesDecoratorModule:s}=(0,A.D)();return[{relativePath:"README.md",isPipelineFile:!1,isEntrypoint:!1,additionalCreateOptions:{format:N.J6F.AUTO},content:`# ${e}

This folder defines all source code for the '${e}' pipeline:

- \`explorations\`: Ad-hoc notebooks used to explore the data processed by this pipeline.
- \`transformations\`: All dataset definitions and transformations.
- \`utilities\`: Utility functions and Python modules used in this pipeline.

## Getting Started

To get started, go to the \`transformations\` folder -- most of the relevant source code lives there:

* By convention, every dataset under \`transformations\` is in a separate file.
* Take a look at the sample under "sample_users_${t}.py" to get familiar with the syntax.
  Read more about the syntax at ${_.A.LAKEFLOW_PIPELINES_PYTHON_REFERENCE}.
* Use \`Run file\` to run and preview a single transformation.
* Use \`Run pipeline\` to run _all_ transformations in the entire pipeline.
* Use \`+ Add\` in the file browser to add a new data set definition.
* Use \`Schedule\` to run the pipeline on a schedule!

For more tutorials and reference material, see ${_.A.LAKEFLOW_DPM_URL}.`},{relativePath:`${c.p}/sample_users_${t}.py`,isPipelineFile:!0,isEntrypoint:!0,additionalCreateOptions:{format:N.J6F.AUTO},content:`${i}
from pyspark.sql.functions import col

# This file defines a sample transformation.
# Edit the sample below or add new transformations
# using "+ Add" in the file browser.

@${s}.table
def sample_users_${t}():
    return (
        spark.read.table("samples.wanderbricks.users")
        .select("user_id", "email", "name", "user_type")
    )
`},{relativePath:`${c.p}/sample_aggregation_${t}.py`,isPipelineFile:!0,isEntrypoint:!1,additionalCreateOptions:{format:N.J6F.AUTO},content:`${i}
from pyspark.sql.functions import col, count, count_if
from utilities import utils

# This file defines a sample transformation.
# Edit the sample below or add new transformations
# using "+ Add" in the file browser.

@${s}.table
def sample_aggregation_${t}():
    return (
        spark.read.table("sample_users_${t}")
        .withColumn("valid_email", utils.is_valid_email(col("email")))
        .groupBy(col("user_type"))
        .agg(
            count("user_id").alias("total_count"),
            count_if("valid_email").alias("count_valid_emails")
        )
    )
`},{relativePath:"utilities/utils.py",isPipelineFile:!1,isEntrypoint:!1,additionalCreateOptions:{format:N.J6F.AUTO},content:`from pyspark.sql.functions import udf
from pyspark.sql.types import BooleanType
import re

@udf(returnType=BooleanType())
def is_valid_email(email):
    """
    This function checks if the given email address has a valid format using regex.
    Returns True if valid, False otherwise.
    """
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
    if email is None:
        return False
    return re.match(pattern, email) is not None
`},{relativePath:"explorations/sample_exploration",isPipelineFile:!1,isEntrypoint:!1,additionalCreateOptions:{language:N.KVK.PYTHON},content:`# Databricks notebook source
# MAGIC %md
# MAGIC ### Example Exploratory Notebook
# MAGIC
# MAGIC Use this notebook to explore the data generated by the pipeline in your preferred programming language.
# MAGIC
# MAGIC **Note**: This notebook is not executed as part of the pipeline.

# COMMAND ----------

import sys

sys.path.append("${n}")

# COMMAND ----------

# !!! Before performing any data analysis, make sure to run the pipeline to materialize the sample datasets. The tables referenced in this notebook depend on that step.

display(spark.sql("SELECT * FROM ${a}.${r}.sample_aggregation_${t}"))
`}]}({pipelineName:i,tableSuffix:s,catalog:a,schema:r,rootFolder:e}):function({pipelineName:e,tableSuffix:t,catalog:a,schema:r,rootFolder:n,shouldSQLBeEscaped:i}){let s=e=>i?(0,m.U0)(e):e;return[{relativePath:"README.md",isPipelineFile:!1,isEntrypoint:!1,additionalCreateOptions:{format:N.J6F.AUTO},content:`# ${e}

This folder defines all source code for the '${e}' pipeline:

- \`explorations\`: Ad-hoc notebooks used to explore the data processed by this pipeline.
- \`transformations\`: All dataset definitions and transformations.

## Getting Started

To get started, go to the \`transformations\` folder -- most of the relevant source code lives there:

* By convention, every dataset under \`transformations\` is in a separate file.
* Take a look at the sample under "sample_users_${t}.sql" to get familiar with the syntax.
  Read more about the syntax at ${_.A.LAKEFLOW_PIPELINES_SQL_REFERENCE}.
* Use \`Run file\` to run and preview a single transformation.
* Use \`Run pipeline\` to run _all_ transformations in the entire pipeline.
* Use \`+ Add\` in the file browser to add a new data set definition.
* Use \`Schedule\` to run the pipeline on a schedule!

For more tutorials and reference material, see ${_.A.LAKEFLOW_DPM_URL}.
`},{relativePath:`${c.p}/sample_users_${t}.sql`,isPipelineFile:!0,isEntrypoint:!0,additionalCreateOptions:{format:N.J6F.AUTO},content:`-- This file defines a sample transformation.
-- Edit the sample below or add new transformations
-- using "+ Add" in the file browser.

CREATE OR REFRESH MATERIALIZED VIEW ${s(`sample_users_${t}`)} AS
SELECT
    user_id,
    email,
    name,
    user_type
FROM samples.wanderbricks.users;
`},{relativePath:`${c.p}/sample_aggregation_${t}.sql`,isPipelineFile:!0,isEntrypoint:!1,additionalCreateOptions:{format:N.J6F.AUTO},content:`-- This file defines a sample transformation.
-- Edit the sample below or add new transformations
-- using "+ Add" in the file browser.

CREATE MATERIALIZED VIEW ${s(`sample_aggregation_${t}`)} AS
SELECT
    user_type,
    COUNT(user_type) AS total_count
FROM ${s(`sample_users_${t}`)}
GROUP BY user_type;
`},{relativePath:"explorations/sample_exploration",isPipelineFile:!1,isEntrypoint:!1,additionalCreateOptions:{language:N.KVK.SQL},content:`-- Databricks notebook source
-- MAGIC %md
-- MAGIC ### Example Exploratory Notebook
-- MAGIC
-- MAGIC Use this notebook to explore the data generated by the pipeline in your preferred programming language.
-- MAGIC
-- MAGIC **Note**: This notebook is not executed as part of the pipeline.

-- COMMAND ----------

-- MAGIC %python
-- MAGIC import sys
-- MAGIC
-- MAGIC sys.path.append("${n}")

-- COMMAND ----------

-- !!! Before performing any data analysis, make sure to run the pipeline to materialize the sample datasets. The tables referenced in this notebook depend on that step.

USE CATALOG \`${a}\`;
USE SCHEMA \`${r}\`;

SELECT * from ${s(`sample_aggregation_${t}`)};
`}]}({pipelineName:i,tableSuffix:s,catalog:a,schema:r,rootFolder:e,shouldSQLBeEscaped:o})).map(({relativePath:t,...a})=>{let r=`${e}/${t}`;return{...a,directory:(0,n.dirname)(r),path:r}})}({rootFolder:a,catalog:i,schema:s,language:o,pipelineName:u});return yield Promise.all(l()(p.map(e=>(0,n.dirname)(e.path))).filter(e=>e!==(0,E.e0)(a)).map(e=>t({variables:{input:{path:e}}}))),Promise.all(p.map(t=>y(function*(){return{...t,result:yield e({variables:{input:{...t.additionalCreateOptions,path:t.path,content:r.Buffer.from(t.content).toString("base64")}}})}})()))})(),[t,e])}}},954828:(e,t,a)=>{a.d(t,{DG:()=>i,os:()=>o,ys:()=>s});var r=a(337145),n=a(163624);function i(e){let t=new Map,a=new Map,i=[];return e.forEach(e=>{var s;let o;if(e.category!==n._.INSIGHT)return void i.push(e);let l=[e.optimizationInsight.issueClass??"",e.optimizationInsight.descriptiveMessage??"",(s=e.optimizationInsight.targetDatasets,(o=s?.map(e=>[e.catalog,e.database,e.table].filter(Boolean).join(".")).filter(e=>""!==e)??[]).sort(),o.join("|"))].join("::"),u=(0,r.x)(e);if(u){let e=a.get(l)??[];e.includes(u)||e.push(u),a.set(l,e)}t.set(l,e)}),[...i,...Array.from(t.entries()).map(([e,t])=>{let r=a.get(e);if(r&&r.length>1)return{...{...t,lineNumber:null,endingLineNumber:null,columnNumber:null,endingColumnNumber:null,sourcePath:null,notebookCellNumber:null},eventId:null,category:n._.INSIGHT,isGroupedInsight:!0,datasetName:null,datasetNames:r,optimizationInsight:t.optimizationInsight};return t})]}function s(e){if("isGroupedInsight"in e&&!0===e.isGroupedInsight)return e.datasetNames;let t=(0,r.x)(e);return t?[t]:[]}function o(e){if(!e)return null;let t=e.match(/^(.*)\.\s+More details on:\s+(https?:\/\/\S+)\s*$/);if(!t)return{message:e,url:null};return{message:t[1],url:t[2]}}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/55728.58e3c04f06.chunk.js.map