"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[54261],{23542:(e,t,r)=>{r.d(t,{k:()=>h});var o,i=r(692738),a=r(342411),n=r(586564),s=r(88144),l=r(897080),p=r(724283),d=r(774376),u=r(889145),c=r(410297);function m(e,t,r,o,i,a,n){try{var s=e[a](n),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(o,i)}var f=((o=f||{}).CREATE_FOLDER_SUCCESS="createDirectorySuccess",o.CREATE_FOLDER_ERROR="createDirectoryError",o.LIST_FOLDER_CONTENTS_ERROR="listDirectoryError",o);function h({baseDirectory:e,loggingEventType:t}){let r=(0,a.tz)(),[o]=p.z.usePipelineAction(s.S,{}),{refetch:f}=(0,l.h)(e,{skip:!0,fetchPolicy:"no-cache"});return(0,i.useCallback)(i=>{var a;return(a=function*(){let a=yield f();if(c.jD.hasError(a)){let o=c.jD.getErrorMessage(a);throw d.o.showNotification("Error",o??r.formatMessage(y.listDirectoryError,{directory:e}),"error"),u.h.logEvent(t,"listDirectoryError"),Error("Could not query workspace data for directory contents")}let s=(0,n.i)({listDirectoryResponse:a.data,originalName:i}),l=`${e}/${s}`,p=yield o({variables:{input:{path:l}}});if(c.jD.hasError(p))throw u.h.logEvent(t,"createDirectoryError"),Error("Could not create folder");return u.h.logEvent(t,"createDirectorySuccess"),{folderName:s,pathToFolder:l}},function(){var e=this,t=arguments;return new Promise(function(r,o){var i=a.apply(e,t);function n(e){m(i,r,o,n,s,"next",e)}function s(e){m(i,r,o,n,s,"throw",e)}n(void 0)})})()},[e,o,f,r,t])}let y=(0,a.YK)({listDirectoryError:{id:"kUYGh+",defaultMessage:'Could not get contents of directory "{directory}"'}})},88144:(e,t,r)=>{r.d(t,{S:()=>n});var o=r(141078),i=r(715370);let a=(0,o.J1)`
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
`,n=e=>i.R.useMutation(a,e)},443071:(e,t,r)=>{r.d(t,{D:()=>i});var o=r(441535);function i(){return"16.1"===(0,o.W)("databricks.deltapipelines.safe.channel.current.dbrVersion","unknown")?{pythonPipelinesImportStatement:"import dlt",pythonPipelinesDecoratorModule:"dlt"}:{pythonPipelinesImportStatement:"from pyspark import pipelines as dp",pythonPipelinesDecoratorModule:"dp"}}},584139:(e,t,r)=>{r.d(t,{p:()=>o});let o="transformations"},586564:(e,t,r)=>{r.d(t,{i:()=>o});function o({listDirectoryResponse:e,originalName:t,separator:r="-",firstSuffixValue:i=1}){let a=(e?.listDirectory?.objects??[]).map(e=>e.path.split("/").at(-1)).filter(e=>!!e),n=new Set(a),s=a.length,l=t,p=i,d=0;for(;n.has(l)&&d<=s;)l=`${t}${r}(${p++})`,d++;return l}},609875:(e,t,r)=>{r.d(t,{K:()=>n});var o=r(141078),i=r(715370);let a=(0,o.J1)`
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
`,n=e=>i.R.useMutation(a,e)},897080:(e,t,r)=>{r.d(t,{h:()=>n});var o=r(141078),i=r(715370);let a=(0,o.J1)`
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
`;function n(e,{variables:t,...r}={}){return i.R.useQuery(a,{variables:{path:encodeURIComponent(e||"")},...r})}},954261:(e,t,r)=>{r.d(t,{Qu:()=>O,ms:()=>R,nt:()=>I});var o=r(154313),i=r(137797),a=r(802558),n=r.n(a),s=r(359525),l=r.n(s),p=r(603897),d=r.n(p),u=r(692738),c=r(719256),m=r(984741),f=r(584139),h=r(191431),y=r(529129),E=r(443071),_=r(609875),g=r(88144),A=r(993533),b=r(981158),C=r(889885),$=r(620839),k=r(23542),v=r(74360),P=r(724283);function T(e,t,r,o,i,a,n){try{var s=e[a](n),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(o,i)}function F(e){return function(){var t=this,r=arguments;return new Promise(function(o,i){var a=e.apply(t,r);function n(e){T(a,o,i,n,s,"next",e)}function s(e){T(a,o,i,n,s,"throw",e)}n(void 0)})}}function R(e){let t=e.match(/^new pipeline \d+-(\d+)-(\d+) (\d+):(\d+)$/i);if(!t)return e.toLowerCase().replace(/[^\p{L}\p{N}]/gu,"_").replace(/_+/g,"_").replace(/^_+|_+$/g,"");{let[,e,r,o,i]=t;return`${["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"][parseInt(e,10)-1]}_${parseInt(r,10)}_${parseInt(o,10)}${i}`}}function I({pathName:e=`/${b.A.UserFolderName}/${(0,C.FI)("user")}`}={}){let t=(0,k.k)({baseDirectory:(0,m.e0)(e),loggingEventType:v.Rj.PIPELINE_CREATE_ACTION}),{addInitialFilesToExistingPipeline:r}=O();return{createInitialPipelineFiles:(0,u.useCallback)(({pipelineName:e,language:o,catalog:a,schema:s})=>F(function*(){let{pathToFolder:l}=yield t(e),p=yield r({rootFolder:l,catalog:a,schema:s,language:o,pipelineName:e});return{libraries:d()(p.filter(e=>e.isPipelineFile).map(({path:e,additionalCreateOptions:t})=>{if((0,h.Q)())return{glob:{include:`${(0,i.dirname)(e)}${y.en}`}};return t.language?{notebook:{path:e}}:{file:{path:e}}}),n()),entryPointPath:p.find(e=>e.isEntrypoint)?.path??"",rootPath:l}})(),[r,t])}}function O(){let[e]=P.z.usePipelineAction(_.K,{}),[t]=P.z.usePipelineAction(g.S,{});return{addInitialFilesToExistingPipeline:(0,u.useCallback)(({rootFolder:r,catalog:a,schema:n,language:s,pipelineName:p})=>F(function*(){let d=function({rootFolder:e,language:t,catalog:r,schema:o,pipelineName:a}){let n=R(a),s=!/^[a-z0-9_]+$/.test(n);return(t===A.KVK.PYTHON?function({pipelineName:e,tableSuffix:t,catalog:r,schema:o,rootFolder:i}){let{pythonPipelinesImportStatement:a,pythonPipelinesDecoratorModule:n}=(0,E.D)();return[{relativePath:"README.md",isPipelineFile:!1,isEntrypoint:!1,additionalCreateOptions:{format:A.J6F.AUTO},content:`# ${e}

This folder defines all source code for the '${e}' pipeline:

- \`explorations\`: Ad-hoc notebooks used to explore the data processed by this pipeline.
- \`transformations\`: All dataset definitions and transformations.
- \`utilities\`: Utility functions and Python modules used in this pipeline.

## Getting Started

To get started, go to the \`transformations\` folder -- most of the relevant source code lives there:

* By convention, every dataset under \`transformations\` is in a separate file.
* Take a look at the sample under "sample_users_${t}.py" to get familiar with the syntax.
  Read more about the syntax at ${$.A.LAKEFLOW_PIPELINES_PYTHON_REFERENCE}.
* Use \`Run file\` to run and preview a single transformation.
* Use \`Run pipeline\` to run _all_ transformations in the entire pipeline.
* Use \`+ Add\` in the file browser to add a new data set definition.
* Use \`Schedule\` to run the pipeline on a schedule!

For more tutorials and reference material, see ${$.A.LAKEFLOW_DPM_URL}.`},{relativePath:`${f.p}/sample_users_${t}.py`,isPipelineFile:!0,isEntrypoint:!0,additionalCreateOptions:{format:A.J6F.AUTO},content:`${a}
from pyspark.sql.functions import col

# This file defines a sample transformation.
# Edit the sample below or add new transformations
# using "+ Add" in the file browser.

@${n}.table
def sample_users_${t}():
    return (
        spark.read.table("samples.wanderbricks.users")
        .select("user_id", "email", "name", "user_type")
    )
`},{relativePath:`${f.p}/sample_aggregation_${t}.py`,isPipelineFile:!0,isEntrypoint:!1,additionalCreateOptions:{format:A.J6F.AUTO},content:`${a}
from pyspark.sql.functions import col, count, count_if
from utilities import utils

# This file defines a sample transformation.
# Edit the sample below or add new transformations
# using "+ Add" in the file browser.

@${n}.table
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
`},{relativePath:"utilities/utils.py",isPipelineFile:!1,isEntrypoint:!1,additionalCreateOptions:{format:A.J6F.AUTO},content:`from pyspark.sql.functions import udf
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
`},{relativePath:"explorations/sample_exploration",isPipelineFile:!1,isEntrypoint:!1,additionalCreateOptions:{language:A.KVK.PYTHON},content:`# Databricks notebook source
# MAGIC %md
# MAGIC ### Example Exploratory Notebook
# MAGIC
# MAGIC Use this notebook to explore the data generated by the pipeline in your preferred programming language.
# MAGIC
# MAGIC **Note**: This notebook is not executed as part of the pipeline.

# COMMAND ----------

import sys

sys.path.append("${i}")

# COMMAND ----------

# !!! Before performing any data analysis, make sure to run the pipeline to materialize the sample datasets. The tables referenced in this notebook depend on that step.

display(spark.sql("SELECT * FROM ${r}.${o}.sample_aggregation_${t}"))
`}]}({pipelineName:a,tableSuffix:n,catalog:r,schema:o,rootFolder:e}):function({pipelineName:e,tableSuffix:t,catalog:r,schema:o,rootFolder:i,shouldSQLBeEscaped:a}){let n=e=>a?(0,c.U0)(e):e;return[{relativePath:"README.md",isPipelineFile:!1,isEntrypoint:!1,additionalCreateOptions:{format:A.J6F.AUTO},content:`# ${e}

This folder defines all source code for the '${e}' pipeline:

- \`explorations\`: Ad-hoc notebooks used to explore the data processed by this pipeline.
- \`transformations\`: All dataset definitions and transformations.

## Getting Started

To get started, go to the \`transformations\` folder -- most of the relevant source code lives there:

* By convention, every dataset under \`transformations\` is in a separate file.
* Take a look at the sample under "sample_users_${t}.sql" to get familiar with the syntax.
  Read more about the syntax at ${$.A.LAKEFLOW_PIPELINES_SQL_REFERENCE}.
* Use \`Run file\` to run and preview a single transformation.
* Use \`Run pipeline\` to run _all_ transformations in the entire pipeline.
* Use \`+ Add\` in the file browser to add a new data set definition.
* Use \`Schedule\` to run the pipeline on a schedule!

For more tutorials and reference material, see ${$.A.LAKEFLOW_DPM_URL}.
`},{relativePath:`${f.p}/sample_users_${t}.sql`,isPipelineFile:!0,isEntrypoint:!0,additionalCreateOptions:{format:A.J6F.AUTO},content:`-- This file defines a sample transformation.
-- Edit the sample below or add new transformations
-- using "+ Add" in the file browser.

CREATE OR REFRESH MATERIALIZED VIEW ${n(`sample_users_${t}`)} AS
SELECT
    user_id,
    email,
    name,
    user_type
FROM samples.wanderbricks.users;
`},{relativePath:`${f.p}/sample_aggregation_${t}.sql`,isPipelineFile:!0,isEntrypoint:!1,additionalCreateOptions:{format:A.J6F.AUTO},content:`-- This file defines a sample transformation.
-- Edit the sample below or add new transformations
-- using "+ Add" in the file browser.

CREATE MATERIALIZED VIEW ${n(`sample_aggregation_${t}`)} AS
SELECT
    user_type,
    COUNT(user_type) AS total_count
FROM ${n(`sample_users_${t}`)}
GROUP BY user_type;
`},{relativePath:"explorations/sample_exploration",isPipelineFile:!1,isEntrypoint:!1,additionalCreateOptions:{language:A.KVK.SQL},content:`-- Databricks notebook source
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
-- MAGIC sys.path.append("${i}")

-- COMMAND ----------

-- !!! Before performing any data analysis, make sure to run the pipeline to materialize the sample datasets. The tables referenced in this notebook depend on that step.

USE CATALOG \`${r}\`;
USE SCHEMA \`${o}\`;

SELECT * from ${n(`sample_aggregation_${t}`)};
`}]}({pipelineName:a,tableSuffix:n,catalog:r,schema:o,rootFolder:e,shouldSQLBeEscaped:s})).map(({relativePath:t,...r})=>{let o=`${e}/${t}`;return{...r,directory:(0,i.dirname)(o),path:o}})}({rootFolder:r,catalog:a,schema:n,language:s,pipelineName:p});return yield Promise.all(l()(d.map(e=>(0,i.dirname)(e.path))).filter(e=>e!==(0,m.e0)(r)).map(e=>t({variables:{input:{path:e}}}))),Promise.all(d.map(t=>F(function*(){return{...t,result:yield e({variables:{input:{...t.additionalCreateOptions,path:t.path,content:o.Buffer.from(t.content).toString("base64")}}})}})()))})(),[t,e])}}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/54261.3b2aecda61.chunk.js.map