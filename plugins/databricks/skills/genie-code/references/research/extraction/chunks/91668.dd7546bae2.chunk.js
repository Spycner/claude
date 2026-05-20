"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[91668],{8355:(e,t,n)=>{n.d(t,{j:()=>l,m:()=>s});var r=n(297768),i=n(815530),a=n(443927),o=n(118650);let s=({sql:e,useCodeUnitTokens:t=!1})=>{let n=r.Zo.fromString(e),s=new a.M(n);if(t){let t=(0,i.Uf)(e);s.tokenFactory=new i.FB(t)}let l=new r.jB(s);return{parser:new o.h0$(l),tokenStream:l}},l=e=>{let t=r.Zo.fromString(e),n=new a.M(t),i=new r.jB(n);i.fill();let o=[];for(let e=0;e<i.size;e++){let t=i.get(e);o.push({type:t.type<a.M.symbolicNames.length?a.M.symbolicNames[t.type]:void 0,text:t.text||void 0,token:t})}return o}},8899:(e,t,n)=>{n.d(t,{H7:()=>a,LY:()=>o,N3:()=>s,Nl:()=>l,Nn:()=>f,O7:()=>u,c1:()=>d,ro:()=>c,sn:()=>p,tB:()=>i,vJ:()=>r});let r=95,i=200,a=260,o=50,s=60,l=200,u=95,d=480,c=280,p=560,f=360},16733:(e,t,n)=>{n.d(t,{B_:()=>l,Eo:()=>s,Nk:()=>u,ie:()=>a,pS:()=>o});var r=n(310771),i=n(104294);function a(e){return e.nodeType===i.v.OUTPUT}function o(e){let t=e.getParents()[0];for(;t&&a(t);)t=t.getParents()[0];return t}function s(e){let t=function(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t&=t;return Math.abs(t).toString(16)}(e.resultCode.replace(/\/\*[\s\S]*?\*\//g,"").replace(/--.*$/gm,"").replace(/\s+/g," ").trim().toUpperCase());return`lb_temp_${e.name}_${t.slice(0,8)}`}function l(e){return e.resultCode}function u(e){return e.previewMode!==r.aG.FULL||e.getParents().every(e=>e.previewMode===r.aG.FULL)}},20538:(e,t,n)=>{n.d(t,{D:()=>i});var r=n(451536);class i{static REMAINING_MULTI_STATEMENT_TEXT=Symbol("REMAINING_MULTI_STATEMENT_TEXT");_sql;constructor(e){this._sql=e}static from(e){return new i(e)}slice(e){return this._sql.slice(e.start.value,e.end.value)}toString(){return this._sql}equals(e){if(!e)return!1;return this._sql===e._sql}get length(){return r.q8.from(this._sql.length)}}},25260:(e,t,n)=>{n.d(t,{BM:()=>c,ON:()=>d,XU:()=>u,ke:()=>l});var r,i,a=n(335747);function o(e,t,n,r,i,a,o){try{var s=e[a](o),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(r,i)}function s(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function s(e){o(a,r,i,s,l,"next",e)}function l(e){o(a,r,i,s,l,"throw",e)}s(void 0)})}}var l=((r={}).LOADING="loading",r.SUCCESS="success",r.ERROR="error",r.WARNING="warning",r.ABORTED="aborted",r),u=((i={}).SNAPSHOTTING="snapshotting",i.THINKING="thinking",i.RUNNING_NODE="running_node",i.SEARCHING_TABLES="searching_tables",i.READING_SKILL="reading_skill",i.ADDING_NODE="adding_node",i.EDITING_NODE="editing_node",i.EDITING_WORKFLOW="editing_workflow",i.DELETING_NODE="deleting_node",i.GROUPING_NODES="grouping_nodes",i.DONE="done",i.QUESTION="question",i.ERROR="error",i.MAX_TURNS="max_turns",i.REDIRECT_TO_SIDEBAR="redirect_to_sidebar",i);class d{status=a.sH.array();_aborted=!1;constructor(){(0,a.Gn)(this,{status:a.sH,addStatus:a.XI,updateStatus:a.XI,markLoadingAs:a.XI,markAborted:a.XI,dismissStatus:a.XI})}markAborted(){this._aborted=!0,this.markLoadingAs("aborted"),this.addStatus("done","aborted")}addStatus(e,t,n,r){let i=this.status.length,a=this._aborted&&"loading"===t?"aborted":t;return this.status.push({id:i,entityName:n,progress:a,type:e,toolResponseMessage:r}),i}updateStatus(e,t,n){if(this.status[e]){if(this._aborted&&"aborted"===this.status[e].progress){void 0!==n&&(this.status[e].toolResponseMessage=n);return}this.status[e].progress=t,void 0!==n&&(this.status[e].toolResponseMessage=n)}}withStatus(e,t,n){return s(function*(){let r=this.addStatus(e,"loading",t);try{let e=yield n();return this.updateStatus(r,e.progress,e.toolResponseMessage),{statusItem:this.status[r],result:e.result}}catch(e){throw this.updateStatus(r,"error"),e}}).call(this)}markLoadingAs(e){this.status.forEach(t=>{"loading"===t.progress&&(t.progress=e)})}dismissStatus(e){let t=this.status[e];t&&!t.dismissed&&(t.dismissed=!0)}}function c(e){return s(function*(){let t;for(let n of e){let e=yield n();if("error"===e.statusItem.progress||"aborted"===e.statusItem.progress)return e.statusItem;t=e.statusItem}if(!t)throw Error("Failed to chain steps");return t})()}},61170:(e,t,n)=>{n.d(t,{P:()=>a,_:()=>i});var r=n(101499);let i={log(...e){if(!(0,r.oT)())return;console.log(...e)},warn(...e){if(!(0,r.oT)())return;console.warn(...e)},error(...e){if(!(0,r.oT)())return;console.error(...e)}};function a(e){if(e instanceof Error)return{message:e.message,stack:e.stack};return{message:String(e)}}},89897:(e,t,n)=>{n.d(t,{Ae:()=>p,An:()=>x,Jj:()=>d,RS:()=>u,SN:()=>w,TB:()=>h,Z2:()=>v,_L:()=>_,aQ:()=>y,iJ:()=>g,m9:()=>T,mK:()=>c,p:()=>m,rZ:()=>f,ru:()=>b,tN:()=>E});var r=n(335747),i=n(508224),a=n(16733),o=n(692301),s=n(619514);let l=["loading","pending","running","fetching"];function u(e){return l.includes(e)}function d(e,t){let n=[];for(let r=0;r<e.length;r+=t)n.push(e.slice(r,r+t));return n}function c(e){return e&&(0,a.ie)(e)?(0,a.pS)(e):e}function p({nodeNameMap:e,parameters:t}){return Array.from(e.values()).filter(e=>!(0,a.ie)(e)&&!!e.resultCode&&!e.isUnconfigured).map(e=>({name:e.name,resultCode:e.resultCode,parameters:t}))}function f({currentNode:e,operatorDataCache:t,parameters:n}){let r=c(e);return(r?[r,...r.getParents()??[]]:[]).map(e=>({name:e.name,resultCode:e.resultCode,parameters:n})).filter(e=>{var n;let r;if(!e.resultCode)return!1;let i=(n=e,!(r=t.get(n.name))||0===r.schema.length&&"success"===r.status),a=m(e,t);return i||a})}function m(e,t){let n=t.get(e.name);if(!n)return!1;if(n.code!==e.resultCode||g({sql:e.resultCode,parameters:e.parameters??[],prevParameters:n.parameters??[]}))return!0;return!1}function g({sql:e,parameters:t,prevParameters:n}){let r=(0,o.e)(e,t),i=new Map(n.map(e=>[e.name,e])??[]);return r.some(e=>{let t=i.get(e.name);return!t||t.value!==e.value||t.type!==e.type})}function h(e,t){let n=[...e.parentDataCacheMap.keys()],i=[...t.parentDataCacheMap.keys()];if(!r.m3.shallow(e.dataCache,t.dataCache)||!r.m3.structural(n,i))return!1;return n.every(n=>{let i=e.parentDataCacheMap.get(n),a=t.parentDataCacheMap.get(n);return r.m3.shallow(i,a)})}function y(e,t){let n=(e?.getParents().map(e=>e.name)??[]).reduce((e,n)=>{let r=t.get(n);return r&&e.set(n,r),e},new Map),r=c(e);return{parentDataCacheMap:n,dataCache:r?t.get(r.name):void 0}}function _(e,t){if(!e)return;e.getAllDescendants().forEach(e=>{t.delete(e.name)})}function v(e){return[...e.values()].some(e=>!!e?.loading||!e)}function b(e){return[...e.values()].some(e=>e?.status==="error"||!e)}function E(e){let t=v(e);return{schema:Array.from(e.entries()).reduce((e,[t,n])=>(n?.schema.forEach(n=>{e.push({...n,tableName:t})}),e),[]),schemaLoading:t}}function x(e,t){let n=t.get(e);if(!n)return{nodeName:e,schema:[],schemaLoading:!1};return{nodeName:e,schema:n.schema.map(t=>({...t,tableName:e})),schemaLoading:n.loading}}function w(e){let t=v(e);return{schemas:Array.from(e.entries()).map(([e,t])=>({nodeName:e,schema:t?.schema.map(t=>({...t,tableName:e}))??[],schemaLoading:!!t?.loading})),schemaLoading:t}}function T({columnId:e,parentDataCacheMap:t,excludeNulls:n=!0}){let r=function({columnId:e,parentDataCacheMap:t}){let n=[...t.entries()].reduce((t,[,n])=>(t||(t=n?.schema.find(t=>t.name===e)),t),void 0);return n?s.K.fromSchemaColumn(n):void 0}({columnId:e,parentDataCacheMap:t}),a=r?.columnDisplayAs==="json";return Array.from([...t.entries()].reduce((t,[,r])=>{if(!r?.rows?.[0])return t;return e in r?.rows?.[0]&&r.rows.forEach(r=>{if(n&&i.uy(r[e]))return;let o=a&&"object"==typeof r[e]?function(e){try{return JSON.stringify(e)}catch{return String(e)}}(r[e]):r[e];t.add(o)}),t},new Set))}},101981:(e,t,n)=>{n.d(t,{lC:()=>s,oz:()=>a});var r,i=n(342411),a=((r={}).LEFT="Left",r.RIGHT="Right",r.INCLUDED="Included",r.EXCLUDED="Excluded",r);let o=(0,i.YK)({Left:{id:"pLoDao",defaultMessage:"Left"},Right:{id:"zhunM1",defaultMessage:"Right"},Included:{id:"HruyC+",defaultMessage:"Included"},Excluded:{id:"z0KkFm",defaultMessage:"Excluded"}});function s(e){if(!e)return;if(Object.prototype.hasOwnProperty.call(o,e))return o[e];let t=e.toLowerCase();for(let[e,n]of Object.entries(o))if(e.toLowerCase()===t)return n}},178260:(e,t,n)=>{let r;n.r(t),n.d(t,{DEFAULT_TEMPLATE_VERSION:()=>A,getAllTemplates:()=>D,getLatestVersion:()=>I,getOperatorTemplate:()=>L,hasOperatorTemplate:()=>k,isBuiltInTemplateId:()=>C,setOperatorMap:()=>N});var i=n(870538);let a=`\
schema: operator-template-v0.1.0
id: aggregate
type: python-run-function
version: "1.0.0"
name: Aggregate
description: "Aggregate (also called group by, rollup, summarize, deduplicate): collapse rows by computing summary statistics (sum, avg, count, min, max) per group."
config:
  type: object
  properties:
    group_bys:
      type: array
      title: Group By
      format: column_expressions
      description: 'Array of { expr: "column_name" }'
      items:
        type: object
        properties:
          expr:
            type: string
      default: []
    aggregations:
      type: array
      title: Aggregations
      format: aggregation_expressions
      description: 'Array of { columnExpr: { expr: "col" }, fn: "SUM" | "AVG" | "COUNT" | "MIN" | "MAX", alias: "result" }'
      items:
        type: object
        properties:
          columnExpr:
            type: object
            properties:
              expr:
                type: string
              type:
                type: string
              tableAlias:
                type: string
            required:
              - expr
          fn:
            type: string
          alias:
            type: string
          percentage:
            type: number
            minimum: 0
            maximum: 1
            description: 'Percentile in [0, 1]; only used when fn = PERCENTILE'
        required:
          - columnExpr
      default: []
  additionalProperties: false
  examples:
    - group_bys:
        - expr: region
      aggregations:
        - columnExpr:
            expr: amount
          fn: SUM
          alias: total_sales
ports:
  input:
    - name: data
      title: Data
      mime: application/vnd.databricks.dataframe
  output:
    - name: aggregated_data
      title: Aggregated Data
      mime: application/vnd.databricks.dataframe
run_function:
  type: inline
  code: |
    import math
    from typing import Dict, Any
    import pyspark.sql.functions as F

    # Default percentile (median). Used as a fallback when a PERCENTILE aggregation
    # is missing or has a non-numeric / non-finite percentage. Mirrors
    # DEFAULT_PERCENTILE_VALUE in AggregateNodeViewModel.ts so SQL and Python
    # pipelines agree on the default.
    DEFAULT_PERCENTILE = 0.5

    def run(
        config: Dict[str, Any], inputs: Dict[str, Any], spark
    ) -> Dict[str, Any]:
        df = inputs.get("data")
        group_bys = config.get("group_bys", [])
        aggregations = config.get("aggregations", [])

        group_by_set = set(e for gb in group_bys if (e := gb.get("expr", "")))

        agg_exprs = []
        for agg_def in aggregations:
            col_expr = agg_def.get("columnExpr", {})
            raw_expr = col_expr.get("expr", "")
            fn = agg_def.get("fn", "-")
            alias = agg_def.get("alias")

            # Skip pass-through columns that duplicate a group-by column;
            # groupBy() already includes them in the output.
            if (fn == "-" or fn == "_") and not alias and raw_expr in group_by_set:
                continue

            fn_map = {
                "SUM": F.sum,
                "AVG": F.avg,
                "COUNT": F.count,
                "MIN": F.min,
                "MAX": F.max,
                "MEAN": F.mean,
                "MEDIAN": F.median,
                "STDDEV": F.stddev,
                "VARIANCE": F.variance,
            }

            agg_fn = fn_map.get(fn)
            if agg_fn:
                col = agg_fn(raw_expr)
            elif fn == "-" or fn == "_":
                col = F.col(raw_expr)
            elif fn == "PERCENTILE":
                # Spark PERCENTILE requires (col, percentage [, frequency]) with percentage
                # in [0, 1]; emitting PERCENTILE(col) triggers WRONG_NUM_ARGS at analysis
                # time. For finite numeric inputs we clamp to [0, 1] (mirroring the V1/V2
                # input clamps) so out-of-range values like -0.1 or 1.5 — typos or stale
                # frontend state — become a valid boundary instead of silently overriding
                # the user's intent with the median. Non-numeric, non-finite, boolean, or
                # missing values fall back to DEFAULT_PERCENTILE.
                raw_pct = agg_def.get("percentage")
                if (
                    isinstance(raw_pct, (int, float))
                    and not isinstance(raw_pct, bool)
                    and math.isfinite(raw_pct)
                ):
                    pct = max(0.0, min(1.0, float(raw_pct)))
                else:
                    pct = DEFAULT_PERCENTILE
                col = F.expr(f"PERCENTILE({raw_expr}, {pct})")
            else:
                col = F.expr(f"{fn}({raw_expr})")

            if alias:
                col = col.alias(alias)

            agg_exprs.append(col)

        group_cols = [
            gb.get("expr", "") for gb in group_bys if gb.get("expr", "")
        ]

        if not agg_exprs:
            if group_cols:
                result = df.select(*group_cols).distinct()
                return {"aggregated_data": result}
            return {"aggregated_data": df}

        if group_cols:
            result = df.groupBy(*group_cols).agg(*agg_exprs)
        else:
            result = df.agg(*agg_exprs)

        return {"aggregated_data": result}
`,o=`\
schema: operator-template-v0.1.0
id: aggregate
type: python-run-function
version: "2.0.0"
name: Aggregate
description: "Aggregate (also called group by, rollup, summarize, deduplicate): collapse rows by computing summary statistics (sum, avg, count, min, max, first, last, percentile, concat) per group."
config:
  type: object
  properties:
    group_bys:
      type: array
      title: Group By
      format: column_expressions
      description: 'Array of { expr: "column_name" }'
      items:
        type: object
        properties:
          expr:
            type: string
      default: []
    aggregations:
      type: array
      title: Aggregations
      format: aggregation_expressions
      description: 'Array of aggregation entries. Each entry has a columnExpr (the input column), a fn (one of the supported aggregation functions: SUM, AVG, COUNT, MIN, MAX, MEAN, MEDIAN, STDDEV, VARIANCE, FIRST, LAST, PERCENTILE, CONCAT), and an optional alias overriding the output column name.'
      items:
        type: object
        properties:
          columnExpr:
            type: object
            properties:
              expr:
                type: string
              type:
                type: string
              tableAlias:
                type: string
            required:
              - expr
          fn:
            type: string
          alias:
            type: string
          percentage:
            type: number
            minimum: 0
            maximum: 1
            description: 'Percentile in [0, 1]; only used when fn = PERCENTILE'
          separator:
            type: string
            description: 'String separator; only used when fn = CONCAT (defaults to ", ")'
        required:
          - columnExpr
      default: []
  additionalProperties: false
  examples:
    - group_bys:
        - expr: region
      aggregations:
        - columnExpr:
            expr: amount
          fn: SUM
          alias: total_sales
ports:
  input:
    - name: data
      title: Data
      mime: application/vnd.databricks.dataframe
  output:
    - name: aggregated_data
      title: Aggregated Data
      mime: application/vnd.databricks.dataframe
run_function:
  type: inline
  code: |
    import math
    from typing import Dict, Any
    import pyspark.sql.functions as F

    # Default percentile (median). Used as a fallback when a PERCENTILE aggregation
    # is missing or has a non-numeric / non-finite percentage. Mirrors
    # DEFAULT_PERCENTILE_VALUE in AggregateNodeViewModel.ts so SQL and Python
    # pipelines agree on the default.
    DEFAULT_PERCENTILE = 0.5

    # Default separator for CONCAT aggregations. Mirrors DEFAULT_CONCAT_SEPARATOR in
    # AggregateNodeViewModel.ts so SQL and Python pipelines agree on the default
    # when the saved annotation omits the separator (e.g. legacy configs from before
    # the field was persisted, or hand-edited YAML).
    DEFAULT_CONCAT_SEPARATOR = ", "

    def run(
        config: Dict[str, Any], inputs: Dict[str, Any], spark
    ) -> Dict[str, Any]:
        df = inputs.get("data")
        group_bys = config.get("group_bys", [])
        aggregations = config.get("aggregations", [])

        group_by_set = set(e for gb in group_bys if (e := gb.get("expr", "")))

        agg_exprs = []
        for agg_def in aggregations:
            col_expr = agg_def.get("columnExpr", {})
            raw_expr = col_expr.get("expr", "")
            fn = agg_def.get("fn", "-")
            alias = agg_def.get("alias")

            # Skip pass-through columns that duplicate a group-by column;
            # groupBy() already includes them in the output.
            if (fn == "-" or fn == "_") and not alias and raw_expr in group_by_set:
                continue

            # FIRST and LAST are non-deterministic over shuffled data without an upstream
            # sort. Matches Alteryx Summarize's First/Last semantics; if determinism matters,
            # the user should add a Sort upstream of the aggregate.
            fn_map = {
                "SUM": F.sum,
                "AVG": F.avg,
                "COUNT": F.count,
                "MIN": F.min,
                "MAX": F.max,
                "MEAN": F.mean,
                "MEDIAN": F.median,
                "STDDEV": F.stddev,
                "VARIANCE": F.variance,
                "FIRST": F.first,
                "LAST": F.last,
            }

            agg_fn = fn_map.get(fn)
            if agg_fn:
                col = agg_fn(raw_expr)
            elif fn == "-" or fn == "_":
                col = F.col(raw_expr)
            elif fn == "PERCENTILE":
                # Spark PERCENTILE requires (col, percentage [, frequency]) with percentage
                # in [0, 1]; emitting PERCENTILE(col) triggers WRONG_NUM_ARGS at analysis
                # time. For finite numeric inputs we clamp to [0, 1] (mirroring the V1/V2
                # input clamps) so out-of-range values like -0.1 or 1.5 (typos or stale
                # frontend state) become a valid boundary instead of silently overriding
                # the user's intent with the median. Non-numeric, non-finite, boolean, or
                # missing values fall back to DEFAULT_PERCENTILE.
                raw_pct = agg_def.get("percentage")
                if (
                    isinstance(raw_pct, (int, float))
                    and not isinstance(raw_pct, bool)
                    and math.isfinite(raw_pct)
                ):
                    pct = max(0.0, min(1.0, float(raw_pct)))
                else:
                    pct = DEFAULT_PERCENTILE
                col = F.expr(f"PERCENTILE({raw_expr}, {pct})")
            elif fn == "CONCAT":
                # Concatenate per-group string values via collect_list + concat_ws. Mirrors
                # Alteryx Summarize's "Concatenate" action. Non-string / missing separator
                # falls back to DEFAULT_CONCAT_SEPARATOR rather than emitting an empty-string
                # join, since concat_ws with an empty separator silently produces a wall-of-text
                # result that hides upstream config drift from a user who intended a comma.
                raw_sep = agg_def.get("separator")
                sep = raw_sep if isinstance(raw_sep, str) else DEFAULT_CONCAT_SEPARATOR
                col = F.concat_ws(sep, F.collect_list(raw_expr))
            else:
                col = F.expr(f"{fn}({raw_expr})")

            if alias:
                col = col.alias(alias)

            agg_exprs.append(col)

        group_cols = [
            gb.get("expr", "") for gb in group_bys if gb.get("expr", "")
        ]

        if not agg_exprs:
            if group_cols:
                result = df.select(*group_cols).distinct()
                return {"aggregated_data": result}
            return {"aggregated_data": df}

        if group_cols:
            result = df.groupBy(*group_cols).agg(*agg_exprs)
        else:
            result = df.agg(*agg_exprs)

        return {"aggregated_data": result}
`,s=`\
schema: operator-template-v0.1.0
id: ai_function
type: python-run-function
version: "2.0.0"
name: AI Function
description: "Call AI-powered transformations on your data. Supported functions: ai_classify, ai_analyze_sentiment, ai_extract, ai_gen, ai_summarize, ai_translate. Read the sql-functions skill for syntax details."
config:
  type: object
  properties:
    expressions:
      type: array
      title: Expressions
      format: ai_function_expressions
      description: 'List of SQL expressions using Databricks AI functions: ai_classify, ai_analyze_sentiment, ai_translate, ai_summarize, ai_fix_grammar, ai_query'
      items:
        type: string
      default: []
    keep_all_columns:
      type: boolean
      title: Keep all columns
      description: 'When true, pass through every column from the input DataFrame in addition to the AI function outputs. When false, only the AI function expressions are emitted.'
      default: true
  additionalProperties: false
  examples:
    - expressions:
        - "ai_classify(review_text, ARRAY('positive', 'negative', 'neutral')) AS sentiment"
        - "ai_summarize(description, 100) AS summary"
      keep_all_columns: true
    - expressions:
        - "id"
        - "ai_translate(body, 'es') AS body_es"
      keep_all_columns: false
ports:
  input:
    - name: data
      title: Data
      mime: application/vnd.databricks.dataframe
  output:
    - name: ai_data
      title: AI Data
      mime: application/vnd.databricks.dataframe
run_function:
  type: inline
  code: |
    from typing import Dict, Any, List

    def run(
        config: Dict[str, Any], inputs: Dict[str, Any], spark
    ) -> Dict[str, Any]:
        df = inputs["data"]
        expressions: List[str] = config.get("expressions", [])
        keep_all_columns: bool = config.get("keep_all_columns", True)

        if not expressions:
            return {"ai_data": df}

        if keep_all_columns:
            return {"ai_data": df.selectExpr(*expressions, "*")}
        return {"ai_data": df.selectExpr(*expressions)}
`,l=`\
schema: operator-template-v0.1.0
id: ai_function
type: python-run-function
version: "1.0.0"
name: AI Function
description: "AI Function (also called LLM, generative AI, prompt-based transformation): invoke a large language model on a column to perform natural-language transformations. Choose this for any AI-powered or LLM-powered task on text data — translation, classification, summarization, sentiment analysis, named-entity extraction, embedding generation, and any other LLM-driven row-level text transformation. Supported functions: ai_classify, ai_analyze_sentiment, ai_extract, ai_gen, ai_summarize, ai_translate."
config:
  type: object
  properties:
    expressions:
      type: array
      title: Expressions
      format: ai_function_expressions
      description: 'List of SQL expressions using Databricks AI functions: ai_classify, ai_analyze_sentiment, ai_translate, ai_summarize, ai_fix_grammar, ai_query'
      items:
        type: string
      default: []
  additionalProperties: false
  examples:
    - expressions:
        - "ai_classify(review_text, ARRAY('positive', 'negative', 'neutral')) AS sentiment"
        - "ai_summarize(description, 100) AS summary"
ports:
  input:
    - name: data
      title: Data
      mime: application/vnd.databricks.dataframe
  output:
    - name: ai_data
      title: AI Data
      mime: application/vnd.databricks.dataframe
run_function:
  type: inline
  code: |
    from typing import Dict, Any, List

    def run(
        config: Dict[str, Any], inputs: Dict[str, Any], spark
    ) -> Dict[str, Any]:
        df = inputs["data"]
        expressions: List[str] = config.get("expressions", [])

        if not expressions:
            return {"ai_data": df}

        return {"ai_data": df.selectExpr(*expressions, "*")}
`,u=`\
schema: operator-template-v0.1.0
id: combine
type: python-run-function
version: "1.0.0"
name: Combine
description: "Combine (also called union, append, concatenate, stack, intersect, except): combine rows from two tables that share the same schema via set operations — UNION stacks rows, INTERSECT keeps only rows present in both, EXCEPT subtracts the second from the first."
config:
  type: object
  properties:
    operator:
      type: string
      title: Operator
      description: 'Set operation: "UNION" | "INTERSECT" | "EXCEPT" | "MINUS"'
      enum:
        - UNION
        - INTERSECT
        - EXCEPT
        - MINUS
      default: "UNION"
    quantifier:
      type: string
      title: Quantifier
      description: 'Row deduplication: "DISTINCT" removes duplicates, "ALL" keeps all rows'
      enum:
        - DISTINCT
        - ALL
      default: "DISTINCT"
  additionalProperties: false
  examples:
    - operator: UNION
      quantifier: DISTINCT
ports:
  input:
    - name: data_0
      title: Input 1
      mime: application/vnd.databricks.dataframe
    - name: data_1
      title: Input 2
      mime: application/vnd.databricks.dataframe
  output:
    - name: combined_data
      title: Combined Data
      mime: application/vnd.databricks.dataframe
run_function:
  type: inline
  code: |
    from typing import Dict, Any

    def run(
        config: Dict[str, Any], inputs: Dict[str, Any], spark
    ) -> Dict[str, Any]:
        df_0 = inputs["data_0"]
        df_1 = inputs["data_1"]
        operator = config.get("operator", "UNION")
        quantifier = config.get("quantifier", "DISTINCT")

        op_map = {
            "UNION": lambda a, b: a.union(b),
            "INTERSECT": lambda a, b: a.intersectAll(b),
            "EXCEPT": lambda a, b: a.exceptAll(b),
            "MINUS": lambda a, b: a.exceptAll(b),
        }
        op_distinct_map = {
            "UNION": lambda a, b: a.union(b).distinct(),
            "INTERSECT": lambda a, b: a.intersect(b),
            "EXCEPT": lambda a, b: a.subtract(b),
            "MINUS": lambda a, b: a.subtract(b),
        }

        if quantifier == "DISTINCT":
            combine_fn = op_distinct_map.get(operator)
        else:
            combine_fn = op_map.get(operator)

        if not combine_fn:
            raise ValueError(f"Unsupported combine operator: {operator}")

        result = combine_fn(df_0, df_1)
        return {"combined_data": result}
`,d=`\
schema: operator-template-v0.1.0
id: combine
type: python-run-function
version: "2.0.0"
name: Combine
description: "Combine N datasets using set operations (UNION, INTERSECT, EXCEPT). The 'data' port is variadic — wire every upstream you want to combine into the single 'data' port. The set operation is applied left-to-right in connection order."
config:
  type: object
  properties:
    operator:
      type: string
      title: Operator
      description: 'Set operation: "UNION" | "INTERSECT" | "EXCEPT" | "MINUS"'
      enum:
        - UNION
        - INTERSECT
        - EXCEPT
        - MINUS
      default: "UNION"
    quantifier:
      type: string
      title: Quantifier
      description: 'Row deduplication: "DISTINCT" removes duplicates, "ALL" keeps all rows'
      enum:
        - DISTINCT
        - ALL
      default: "DISTINCT"
    union_by_name:
      type: boolean
      title: Union by name
      description: 'UNION-only. When true, columns are matched by name across inputs (calls DataFrame.unionByName); column order does not have to match. When false (default), columns are matched positionally (DataFrame.union) and schemas must align.'
      default: false
    allow_missing_columns:
      type: boolean
      title: Allow missing columns
      description: 'Only honored when union_by_name is true. When true, a column missing from one input is filled with NULL rather than failing the union. When false (default), every input must contain the same set of columns.'
      default: false
  additionalProperties: false
  examples:
    - operator: UNION
      quantifier: DISTINCT
    - operator: UNION
      quantifier: ALL
      union_by_name: true
      allow_missing_columns: true
ports:
  input:
    - name: data
      title: Data
      mime: application/vnd.databricks.dataframe
      allowMultiple: true
  output:
    - name: combined_data
      title: Combined Data
      mime: application/vnd.databricks.dataframe
run_function:
  type: inline
  code: |
    from functools import reduce
    from typing import Any, Callable, Dict, List

    def run(
        config: Dict[str, Any], inputs: Dict[str, Any], spark
    ) -> Dict[str, Any]:
        # The wiring block always passes a list for variadic ports, but
        # be defensive in case the cell is invoked with a missing key.
        dfs: List[Any] = list(inputs.get("data") or [])
        if len(dfs) < 2:
            raise ValueError(
                f"Combine requires at least 2 inputs, got {len(dfs)}. "
                "Wire 2 or more upstream operators into the 'data' port."
            )

        operator = config.get("operator", "UNION")
        quantifier = config.get("quantifier", "DISTINCT")
        # The next two fields are UNION-only (PySpark's set ops other than
        # union do not expose a by-name variant). They are read here even
        # for non-UNION operators just so an unknown-key typo from a hand-
        # edited YAML surfaces via the schema validator rather than a
        # silent no-op at runtime.
        union_by_name = bool(config.get("union_by_name", False))
        allow_missing_columns = bool(config.get("allow_missing_columns", False))

        # Defining \`pair\` with \`def\` per branch (rather than a dict of
        # lambdas) keeps the chosen primitive visible in tracebacks and
        # avoids paying the dispatch cost on every reduce step.
        pair: Callable[[Any, Any], Any]
        if operator == "UNION":
            if union_by_name:
                # \`allowMissingColumns\` is a kwarg on \`unionByName\` (not a
                # separate primitive), so we capture both flags in a single
                # closure rather than branching twice.
                def pair(a: Any, b: Any) -> Any:
                    return a.unionByName(b, allowMissingColumns=allow_missing_columns)
            else:
                def pair(a: Any, b: Any) -> Any:
                    return a.union(b)
        elif operator == "INTERSECT":
            if quantifier == "ALL":
                def pair(a: Any, b: Any) -> Any:
                    return a.intersectAll(b)
            else:
                def pair(a: Any, b: Any) -> Any:
                    return a.intersect(b)
        elif operator in ("EXCEPT", "MINUS"):
            if quantifier == "ALL":
                def pair(a: Any, b: Any) -> Any:
                    return a.exceptAll(b)
            else:
                def pair(a: Any, b: Any) -> Any:
                    return a.subtract(b)
        else:
            raise ValueError(f"Unsupported combine operator: {operator}")

        result = reduce(pair, dfs)
        # UNION DISTINCT is the union followed by a single global \`distinct()\`
        # — applying it after the reduce avoids redundant deduplication on
        # every fold step. INTERSECT/EXCEPT DISTINCT are already deduped
        # by the per-pair primitives above.
        if operator == "UNION" and quantifier == "DISTINCT":
            result = result.distinct()
        return {"combined_data": result}
`,c=`\
schema: operator-template-v0.1.0
id: filter
type: python-run-function
version: "1.0.0"
name: Filter
description: "Filter (also called where, selection, predicate): keep only rows matching a condition; drop the rest."
config:
  type: object
  properties:
    condition:
      type: string
      title: Condition
      description: 'A boolean SQL expression (e.g. "age > 18")'
      default: ""
  additionalProperties: false
  examples:
    - condition: age > 18
ports:
  input:
    - name: data
      title: Data
      mime: application/vnd.databricks.dataframe
  output:
    - name: filtered_data
      title: Filtered Data
      mime: application/vnd.databricks.dataframe
run_function:
  type: inline
  code: |
    from typing import Dict, Any

    def run(
        config: Dict[str, Any], inputs: Dict[str, Any], spark
    ) -> Dict[str, Any]:
        df = inputs["data"]
        condition = config.get("condition", "")

        if not condition:
            return {"filtered_data": df}

        return {"filtered_data": df.filter(condition)}
`,p=`\
schema: operator-template-v0.1.0
id: filter
type: python-run-function
version: "2.0.0"
name: Filter
description: Filter rows based on a condition
config:
  type: object
  properties:
    condition:
      type: string
      title: Condition
      description: 'A boolean SQL expression (e.g. "age > 18")'
      default: ""
  additionalProperties: false
  examples:
    - condition: age > 18
ports:
  input:
    - name: data
      title: Data
      mime: application/vnd.databricks.dataframe
  output:
    - name: filtered_data
      title: Included
      mime: application/vnd.databricks.dataframe
    - name: excluded_data
      title: Excluded
      mime: application/vnd.databricks.dataframe
run_function:
  type: inline
  code: |
    from typing import Dict, Any

    from pyspark.sql import functions as F

    def run(
        config: Dict[str, Any], inputs: Dict[str, Any], spark
    ) -> Dict[str, Any]:
        df = inputs["data"]
        condition = config.get("condition", "")

        if not condition:
            return {"filtered_data": df, "excluded_data": spark.createDataFrame([], df.schema)}

        keep = F.coalesce(F.expr(condition), F.lit(False))
        return {"filtered_data": df.filter(keep), "excluded_data": df.filter(~keep)}
`,f=`\
schema: operator-template-v0.1.0
id: join
version: "1.0.0"
name: Join
description: "Join (also called merge, lookup, link, inner/outer/left/right join): combine rows from two tables based on matching values in one or more key columns."
config:
  type: object
  properties:
    join_type:
      type: string
      title: Join Type
      description: 'Join type: "inner" | "left" | "right" | "full" | "left anti"'
      enum:
        - inner
        - left
        - right
        - full
        - left anti
      default: "inner"
    join_conditions:
      type: string
      title: Join Conditions
      description: >-
        SQL expression using the fixed "left" and "right" aliases, e.g.
        "left.id = right.customer_id". When both sides share a key column
        name, still qualify both sides: "left.vin = right.vin". Do not use
        the original table names.
      default: ""
    expressions:
      type: array
      title: Select Columns
      description: >-
        Optional SELECT expressions applied after the join. Leave empty ([])
        by default — all columns flow through. Only populate to disambiguate
        columns that exist on both sides, or to rename/drop columns. Use
        "left.col" / "right.col" to disambiguate, e.g.
        ["left.vin AS vin", "right.vin AS right_vin"].
      items:
        type: string
      default: []
  additionalProperties: false
  examples:
    - join_type: inner
      join_conditions: "left.vin = right.vin"
      expressions: []
ports:
  input:
    - name: left
      title: Left
      mime: application/vnd.designer.dataframe
    - name: right
      title: Right
      mime: application/vnd.designer.dataframe
  output:
    - name: joined_data
      title: Joined Data
      mime: application/vnd.designer.dataframe
run_function:
  type: inline
  code: |
    from typing import Dict, Any, List
    import pyspark.sql.functions as F

    def run(
        config: Dict[str, Any], inputs: Dict[str, Any], spark
    ) -> Dict[str, Any]:
        join_type = config.get("join_type", "inner").replace(" ", "_")
        join_condition = config.get("join_conditions", "")
        expressions: List[str] = config.get("expressions", [])

        # Alias DataFrames with fixed names so that table-qualified column
        # references in join_conditions and expressions always resolve.
        # The TS serializer emits "left.col" / "right.col" regardless of the
        # actual table names, so these aliases must match exactly.
        df_left = inputs.get("left")
        df_right = inputs.get("right")
        if df_left is None or df_right is None:
            raise ValueError("Both left and right inputs must be connected")
        df_left = df_left.alias("left")
        df_right = df_right.alias("right")

        # join_condition is a plain SQL expression string serialized by the TS
        # side (same pattern as filter's condition field).
        if not join_condition:
            result = df_left.join(df_right, how=join_type)
        else:
            result = df_left.join(df_right, F.expr(join_condition), how=join_type)

        # Apply optional SELECT expressions
        if expressions:
            result = result.selectExpr(*expressions)

        return {"joined_data": result}
`,m=`\
schema: operator-template-v0.1.0
id: limit
type: python-run-function
version: "1.0.0"
name: Limit
description: "Limit (also called top, head, take, row cap): keep only the first N rows of a table."
config:
  type: object
  properties:
    limit:
      type: string
      title: Limit
      description: "Number of rows to return"
      default: "1000"
  required:
    - limit
  additionalProperties: false
  examples:
    - limit: "100"
ports:
  input:
    - name: data
      title: Data
      mime: application/vnd.databricks.dataframe
  output:
    - name: limited_data
      title: Limited Data
      mime: application/vnd.databricks.dataframe
run_function:
  type: inline
  code: |
    from typing import Dict, Any

    def run(
        config: Dict[str, Any], inputs: Dict[str, Any], spark
    ) -> Dict[str, Any]:
        df = inputs.get("data")
        n = int(config.get("limit", 1000))

        return {"limited_data": df.limit(n)}
`,g=`\
schema: operator-template-v0.1.0
id: output
type: python-run-function
version: "1.0.0"
name: Output
description: "Output (also called sink, write, export, save, materialize): write the workflow result to a destination SQL table — typically a Unity Catalog table."
config:
  type: object
  properties:
    catalog:
      type: string
      title: Catalog
      description: Unity Catalog catalog name
      default: ""
    schema:
      type: string
      title: Schema
      description: Unity Catalog schema name
      default: ""
    table_name:
      type: string
      title: Table Name
      description: Target table name
      default: ""
  additionalProperties: false
  examples:
    - catalog: main
      schema: default
      table_name: output_table
ports:
  input:
    - name: data
      title: Data
      mime: application/vnd.databricks.dataframe
  output: []
run_function:
  type: inline
  code: |
    from typing import Dict, Any

    def run(
        config: Dict[str, Any], inputs: Dict[str, Any], spark
    ) -> Dict[str, Any]:
        df = inputs["data"]
        catalog = config.get("catalog", "")
        schema = config.get("schema", "")
        table_name = config.get("table_name", "")

        if not table_name:
            raise ValueError("Output: 'table_name' is required")

        parts = [p for p in [catalog, schema, table_name] if p]
        full_name = ".".join(parts)

        df.write.mode("overwrite").saveAsTable(full_name)

        return {}
`,h=`\
schema: operator-template-v1.0.0
id: pivot
type: python-run-function
version: "1.0.0"
name: Pivot
description: "Pivot (also called cross-tab, wide format, transpose): reshape data between wide and tall format — pivot rows into columns, or unpivot columns into rows."
config:
  type: object
  properties:
    mode:
      description: '"pivot" to reshape rows→columns, "unpivot" to reshape columns→rows'
      type: string
      default: "pivot"
    pivot_column:
      description: 'Column whose distinct values become new column headers (pivot mode only)'
      type: string
      default: ""
    value_column:
      description: 'Column whose aggregated values fill the new headers (pivot mode only)'
      type: string
      default: ""
    agg_fn:
      description: '"SUM" | "AVG" | "COUNT" | "MIN" | "MAX" — aggregation applied to value_column (pivot mode only)'
      type: string
      default: "SUM"
    null_behavior:
      description: '"null" to leave missing combinations as null, "zero" to fill with 0 (pivot mode only)'
      type: string
      default: "null"
    unpivot_columns:
      description: 'Array of { expr: "column_name" } — columns to reshape into rows (unpivot mode only)'
      type: array
      items:
        type: object
        properties:
          expr:
            type: string
      default: []
    key_column_name:
      description: 'Name of the new column that stores original column names (unpivot mode only)'
      type: string
      default: "Column Name"
    value_column_name:
      description: 'Name of the new column that stores cell values (unpivot mode only)'
      type: string
      default: "Value"
    exclude_columns:
      description: 'Array of { expr: "column_name" } — columns to drop entirely before the transformation'
      type: array
      items:
        type: object
        properties:
          expr:
            type: string
      default: []
  additionalProperties: false
  examples:
    - mode: pivot
      pivot_column: region
      value_column: sales
      agg_fn: SUM
      null_behavior: "null"
      exclude_columns: []
ports:
  input:
    - name: data
      label: Data
      mime: application/vnd.databricks.dataframe
  output:
    - name: pivoted_data
      label: Pivoted Data
      mime: application/vnd.databricks.dataframe
run_function:
  type: inline
  code: |
    from typing import Dict, Any, List, Optional, Set
    import pyspark.sql.functions as F

    AGG_FUNCTIONS = {
        "SUM": F.sum,
        "AVG": F.avg,
        "COUNT": F.count,
        "MIN": F.min,
        "MAX": F.max,
    }

    def _validate_columns_exist(df, columns: List[str], label: str) -> None:
        df_cols: Set[str] = set(df.columns)
        missing = [c for c in columns if c not in df_cols]
        if missing:
            raise ValueError(
                f"{label}: column(s) not found in input data: {missing}. "
                f"Available columns: {df.columns}"
            )

    def _validate_aggregation(agg_fn: str) -> None:
        if agg_fn not in AGG_FUNCTIONS:
            raise ValueError(
                f"Unsupported aggregation '{agg_fn}'. "
                f"Choose one of: {list(AGG_FUNCTIONS.keys())}"
            )

    def _validate_no_overlap(pivot_cols: List[str], fixed_cols: List[str]) -> None:
        overlap = set(pivot_cols) & set(fixed_cols)
        if overlap:
            raise ValueError(
                f"Column(s) {sorted(overlap)} appear in both pivot and fixed roles. "
                "A column cannot serve both roles."
            )

    def run(
        config: Dict[str, Any], inputs: Dict[str, Any], spark
    ) -> Dict[str, Any]:
        df = inputs.get("data")
        mode: str = config.get("mode", "pivot")
        exclude_cfg: List[Dict[str, str]] = config.get("exclude_columns", [])
        excluded: Set[str] = {c.get("expr", "") for c in exclude_cfg if c.get("expr")}

        if mode == "unpivot":
            unpivot_cols_cfg: List[Dict[str, str]] = config.get("unpivot_columns", [])
            key_col: str = config.get("key_column_name", "Column Name")
            value_col: str = config.get("value_column_name", "Value")

            unpivot_col_names = [c.get("expr", "") for c in unpivot_cols_cfg if c.get("expr")]
            if not unpivot_col_names:
                raise ValueError("At least one column must be selected for unpivoting.")

            _validate_columns_exist(df, unpivot_col_names, "Unpivot columns")
            if excluded:
                _validate_columns_exist(df, list(excluded), "Exclude columns")

            fixed_cols = [
                c for c in df.columns
                if c not in unpivot_col_names and c not in excluded
            ]
            _validate_no_overlap(unpivot_col_names, fixed_cols)

            n = len(unpivot_col_names)
            stack_parts = ", ".join(
                [f"'{col}', \`{col}\`" for col in unpivot_col_names]
            )
            stack_expr = (
                f"stack({n}, {stack_parts}) "
                f"as (\`{key_col}\`, \`{value_col}\`)"
            )
            result = df.select(
                *[F.col(c) for c in fixed_cols],
                F.expr(stack_expr),
            )
            return {"pivoted_data": result}

        # ── Pivot (Rows → Columns) ───────────────────────────────────────────
        pivot_column: str = config.get("pivot_column", "")
        value_column: str = config.get("value_column", "")
        agg_fn: str = config.get("agg_fn", "SUM")
        null_behavior: str = config.get("null_behavior", "null")

        if not pivot_column or not value_column:
            return {"pivoted_data": df}

        _validate_columns_exist(df, [pivot_column, value_column], "Pivot")
        if excluded:
            _validate_columns_exist(df, list(excluded), "Exclude columns")
        _validate_aggregation(agg_fn)

        fixed_cols = [
            c for c in df.columns
            if c not in (pivot_column, value_column) and c not in excluded
        ]
        agg_func = AGG_FUNCTIONS[agg_fn]

        result = (
            df
            .select(*fixed_cols, pivot_column, value_column)
            .groupBy(fixed_cols)
            .pivot(pivot_column)
            .agg(agg_func(F.col(value_column)))
        )
        if null_behavior == "zero":
            result = result.fillna(0)
        return {"pivoted_data": result}
`,y=`\
schema: operator-template-v0.1.0
id: python
type: python-run-function
version: "1.0.0"
name: Python
description: "Python: write custom Python (PySpark or Pandas-style) code when no built-in operator covers the transformation."
config:
  type: object
  properties:
    code:
      type: string
      title: Python Code
      description: 'Python code to execute. Access inputs via inputs["data"] (list of DataFrames). Assign the result DataFrame to the variable called result.'
      default: |
        if inputs.get("data"):
            result = inputs["data"][0]
        else:
            result = spark.createDataFrame([], "col: string")
      examples:
        - |
          if inputs.get("data"):
              result = inputs["data"][0]
          else:
              result = spark.createDataFrame([], "col: string")
      x-ui:
        widget: textarea
        rows: 12
ports:
  input:
    - name: data
      title: Data
      mime: application/vnd.databricks.dataframe
      allowMultiple: true
      required: false
  output:
    - name: result
      title: Result
      mime: application/vnd.databricks.dataframe
`,_=`\
schema: operator-template-v0.1.0
id: sort
type: python-run-function
version: "1.0.0"
name: Sort
description: "Sort (also called order by, rank, arrange): order rows ascending or descending by one or more columns."
config:
  type: object
  properties:
    sort_expressions:
      type: array
      title: Sort Expressions
      format: sort_expressions
      description: 'Array of { columnExpr: { expr: "column" }, sortBy: "ASC" | "DESC" }'
      items:
        type: object
        properties:
          columnExpr:
            type: object
            properties:
              expr:
                type: string
            required:
              - expr
          sortBy:
            type: string
            enum:
              - ASC
              - DESC
              - UNSET
        required:
          - columnExpr
      default: []
  additionalProperties: false
  examples:
    - sort_expressions:
        - columnExpr:
            expr: created_at
          sortBy: DESC
ports:
  input:
    - name: data
      title: Data
      mime: application/vnd.databricks.dataframe
  output:
    - name: sorted_data
      title: Sorted Data
      mime: application/vnd.databricks.dataframe
run_function:
  type: inline
  code: |
    from typing import Dict, Any
    import pyspark.sql.functions as F

    def run(
        config: Dict[str, Any], inputs: Dict[str, Any], spark
    ) -> Dict[str, Any]:
        df = inputs.get("data")
        sort_expressions = config.get("sort_expressions", [])

        if not sort_expressions:
            return {"sorted_data": df}

        order_cols = []
        for sort_def in sort_expressions:
            col_expr = sort_def.get("columnExpr", {})
            raw_expr = col_expr.get("expr", "")
            direction = sort_def.get("sortBy", "UNSET")

            col = F.col(raw_expr)
            if direction == "DESC":
                col = col.desc()
            elif direction == "ASC":
                col = col.asc()

            order_cols.append(col)

        return {"sorted_data": df.orderBy(*order_cols)}
`,v=`\
schema: operator-template-v0.1.0
id: source
type: python-run-function
version: "1.0.0"
name: Source
description: "Source (also called input, read, import): read data into the pipeline from a SQL table, file, or external source."
config:
  type: object
  properties:
    file_source:
      type: object
      title: File Source
      format: file_source
      description: '{ path: "/path/to/file", format: "csv", header: true, inferSchema: true }'
      properties:
        path:
          type: string
        format:
          type: string
        header:
          type: boolean
        inferSchema:
          type: boolean
        delimiter:
          type: string
    table_source:
      type: object
      title: Table Source
      format: table_source
      description: '{ tableName: "catalog.schema.table" }'
      properties:
        tableName:
          type: string
        alias:
          type: string
        isExpression:
          type: boolean
  additionalProperties: false
  examples:
    - table_source:
        tableName: main.default.customers
ports:
  input: []
  output:
    - name: data
      title: Data
      mime: application/vnd.databricks.dataframe
run_function:
  type: inline
  code: |
    from typing import Dict, Any

    def _strip_sql_quotes(s):
        if isinstance(s, str) and len(s) >= 2:
            if (s[0] == '"' and s[-1] == '"') or (s[0] == "'" and s[-1] == "'"):
                return s[1:-1]
        return s

    def run(
        config: Dict[str, Any], inputs: Dict[str, Any], spark
    ) -> Dict[str, Any]:
        file_source = config.get("file_source")
        table_source = config.get("table_source")

        if file_source:
            path = file_source.get("path")
            if not path:
                raise ValueError("Source: 'path' is required for file source")
            options = []
            for key, value in file_source.items():
                if key == "path":
                    continue
                if key == "headerRows" and isinstance(value, bool):
                    options.append(f"{key}=>{1 if value else 0}")
                elif isinstance(value, bool):
                    options.append(f'{key}=>{"true" if value else "false"}')
                elif isinstance(value, (int, float)):
                    options.append(f"{key}=>{value}")
                else:
                    clean = _strip_sql_quotes(str(value))
                    if key == "dataAddress" and clean.startswith("!"):
                        clean = clean[1:]
                    options.append(f'{key}=>"{clean}"')
            opts = ", ".join(options)
            sql = f'SELECT * FROM read_files("{path}", {opts})' if opts else f'SELECT * FROM read_files("{path}")'
            out = spark.sql(sql)
        elif table_source:
            table_name = table_source.get("tableName")
            if not table_name:
                raise ValueError("Source: 'tableName' is required for table source")
            out = spark.table(table_name)
        else:
            raise ValueError("Source: either 'file_source' or 'table_source' must be configured")

        return {"data": out}
`;var b=n(724186);let E=`\
schema: operator-template-v0.1.0
id: transform
type: python-run-function
version: "1.0.0"
name: Transform
description: "Transform (also called select, project, mutate, compute): select, derive, rename, or compute columns from existing ones."
config:
  type: object
  properties:
    expressions:
      type: array
      title: Expressions
      format: column_expressions
      description: 'Array of SQL selectExpr strings (e.g. "UPPER(name) AS NAME_UPPER", "age", "CAST(price AS DOUBLE) AS price")'
      items:
        type: string
      default: []
  additionalProperties: false
  examples:
    - expressions:
        - UPPER(name) AS NAME_UPPER
        - age
        - CAST(price AS DOUBLE) AS price
ports:
  input:
    - name: data
      title: Data
      mime: application/vnd.databricks.dataframe
  output:
    - name: transformed_data
      title: Transformed Data
      mime: application/vnd.databricks.dataframe
run_function:
  type: inline
  code: |
    from typing import Dict, Any, List

    def run(
        config: Dict[str, Any], inputs: Dict[str, Any], spark
    ) -> Dict[str, Any]:
        df = inputs["data"]
        expressions: List[str] = config.get("expressions", [])

        if not expressions:
            return {"transformed_data": df}

        return {"transformed_data": df.selectExpr(*expressions)}
`;var x=n(101499),w=n(316488);function T(e,t={}){let n,r="string"==typeof e?()=>e:e,a=Object.keys(t).sort();return()=>{var e;let o={};for(let e of a)o[e]=t[e]();let s=JSON.stringify(o);if(n?.key===s)return n.template;let l=(e=r(o),(0,i.qg)(e));return n={key:s,template:l},l}}let A="1.0.0",S=new Map([["source",new Map([["1.0.0",T(v)]])],["output",new Map([["1.0.0",T(g)]])],["transform",new Map([["1.0.0",T(E)]])],["ai_function",new Map([["1.0.0",T(l)],["2.0.0",T(s)]])],["filter",new Map([["1.0.0",T(c)],["2.0.0",T(p)]])],["sort",new Map([["1.0.0",T(_)]])],["limit",new Map([["1.0.0",T(m)]])],["aggregate",new Map([["1.0.0",T(a)],["2.0.0",T(o)]])],["combine",new Map([["1.0.0",T(u)],["2.0.0",T(d)]])],["join",new Map([["1.0.0",T(f)]])],["pivot",new Map([["1.0.0",T(h)]])],["python",new Map([["1.0.0",T(y)]])],["sql",new Map([["1.0.0",T(function({registerViews:e}){return`\
schema: operator-template-v0.1.0
id: sql
type: python-run-function
version: "1.0.0"
name: SQL
description: "SQL (also called query, select, custom SQL, raw SQL): write custom SQL when no built-in operator covers the transformation."
config:
  type: object
  properties:
    query:
      type: string
      title: SQL Query
      description: 'SQL query to execute. Each connected input DataFrame is automatically registered as a temporary view whose name matches the display name (the "name" field) of the upstream operator — NOT the operator id. For example, if an upstream source operator is named "titanic", use FROM titanic in your query. If multiple inputs share the same display name, they are disambiguated with _1, _2 suffixes (e.g. sales_1, sales_2).'
      default: SELECT 1
      examples:
        - |
          SELECT category, COUNT(*) AS cnt, AVG(price) AS avg_price
          FROM sales_data -- sales_data is the display name of the upstream source operator
          GROUP BY category
          HAVING COUNT(*) > 10
          ORDER BY avg_price DESC
      x-ui:
        widget: textarea
        rows: 12
ports:
  input:
    - name: data
      title: Data
      mime: application/vnd.databricks.dataframe
      allowMultiple: true
      required: false
  output:
    - name: result
      title: Result
      mime: application/vnd.databricks.dataframe
run_function:
  type: inline
  code: |
    import re
    from typing import Any, Dict, List

    def run(
        config: Dict[str, Any], inputs: Dict[str, Any], spark
    ) -> Dict[str, Any]:
        sources: List[Dict[str, str]] = inputs.get("data__sources") or []
        for i, df in enumerate(inputs.get("data") or []):
            if df is not None and i < len(sources):
                df.createOrReplaceTempView(sources[i]["df_name"])${e?'\n                globals().setdefault("_lb_views", set()).add(sources[i]["df_name"])':""}

        query = config.get("query", "")
        param_names = set(re.findall(r"(?<!:):(\\w+)", query))
        if param_names:
            all_widgets = dbutils.widgets.getAll()
            args = {name: all_widgets[name] for name in param_names if name in all_widgets}
            result = spark.sql(query, args=args) if args else spark.sql(query)
        else:
            result = spark.sql(query)
        return {"result": result}
`},{registerViews:x.n1})]])]]);function N(e){r=e}function C(e){return S.has(e)}function I(e){let t=S.get(e);if(t&&t.size>0){let e;for(let n of t.keys())(void 0===e||(0,b.Zy)(n,e)>0)&&(e=n);return e}return r?(0,w.is)(r,e):void 0}function L(e,t){let n=S.get(e);if(n){let e=n.get(t??A);return e?e():void 0}return r?(0,w.XZ)(r,e,t):void 0}function k(e,t){let n=S.get(e);if(n)return void 0===t?n.size>0:n.has(t);if(!r)return!1;if(void 0===t)return(0,w.Nm)(r,e);return r.get(e)?.has(t)??!1}function D(){let e=[];for(let t of S.values())for(let n of t.values())e.push(n());if(r)for(let t of(0,w.CQ)(r))e.push(t);return e.values()}},186031:(e,t,n)=>{n.d(t,{D:()=>i,U:()=>r});let r={FAST:200,MEDIUM:300,STANDARD:500},i={LONG:300,DOM_UPDATE:100,MINIMAL:20}},263445:(e,t,n)=>{n.a(e,async(e,r)=>{try{n.d(t,{$3:()=>x,$g:()=>L,B7:()=>O,HA:()=>ei,Hx:()=>Y,Io:()=>D,Ir:()=>eo,J7:()=>Z,Km:()=>ea,LX:()=>M,Lk:()=>w,M7:()=>en,Oh:()=>k,RN:()=>z,S2:()=>J,Tp:()=>ee,Ub:()=>W,VD:()=>R,YG:()=>I,YU:()=>E,Y_:()=>j,Z8:()=>V,_9:()=>X,ab:()=>P,cY:()=>F,dG:()=>Q,eg:()=>U,fN:()=>C,g0:()=>H,gx:()=>G,kX:()=>A,lw:()=>et,o4:()=>$,oQ:()=>B,pX:()=>T,vc:()=>q,vy:()=>K,wX:()=>S,yZ:()=>N});var i=n(297768),a=n(335747),o=n(870538),s=n(213740),l=n(118650),u=n(443927),d=n(8355),c=n(815530),p=n(441535),f=n(29824),m=n(938500),g=n(104294),h=n(20538),y=n(451536),_=n(61170),v=n(433968),b=e([s]);s=(b.then?(await b)():b)[0];let Z="IDENTIFIER('undefined')",ee=e=>{let t=e.toLowerCase();return t.includes(Z.toLowerCase())||t.includes("identifier(:undefined)")};function E({node:e,nodeToFind:t,algo:n="dfs"}){switch(n){case"dfs":return function({node:e,nodeToFind:t}){let n=[];if(!e)return n;let r=[e];for(;r.length>0;){let e=r.pop();if(e){if(e instanceof t){n.push(e);continue}if(e instanceof i.Pg)for(let t=e.children.length-1;t>=0;t--){let n=e.children[t];n&&r.push(n)}}}return n}({node:e,nodeToFind:t});case"bfs":return function({node:e,nodeToFind:t}){let n=[];if(!e)return n;let r=[e];for(;r.length>0;){let e=r.shift();if(e)e instanceof t&&n.push(e),e instanceof i.Pg&&e.children.forEach(e=>r.push(e))}return n}({node:e,nodeToFind:t});default:throw Error(`Invalid algorithm: ${n}`)}}function x({node:e,nodeToFind:t,algo:n="dfs"}){switch(n){case"dfs":return function e({node:t,nodeToFind:n}){if(void 0===t)return;if(t instanceof n)return t;if(!(t instanceof i.Pg))return;for(let r=0;r<t.getChildCount();r++){let i=t.getChild(r);if(!i)continue;let a=e({node:i,nodeToFind:n});if(a)return a}}({node:e,nodeToFind:t});case"bfs":return function({node:e,nodeToFind:t}){if(!e)return;let n=[e];for(;n.length>0;){let e=n.shift();if(e){if(e instanceof t)return e;e instanceof i.Pg&&e.children.forEach(e=>n.push(e))}}}({node:e,nodeToFind:t});default:throw Error(`Invalid algorithm: ${n}`)}}function w({node:e,nodesToFind:t}){let n=t.map(()=>[]);if(!e)return n;let r=t.reduce((e,t,n)=>(e[t.name]=n,e),{}),a=[];if(e instanceof i.Pg)for(let t=e.children.length-1;t>=0;t--){let n=e.children[t];n&&a.push(n)}for(;a.length>0;){let e=a.pop();if(!e)continue;let o=e.constructor?.name,s=o?r[o]:void 0;if(void 0!==s&&e instanceof t[s]){n[s].push(e);continue}if(e instanceof i.Pg)for(let t=e.children.length-1;t>=0;t--){let n=e.children[t];n&&a.push(n)}}return n}function T(e,t){if(!e)return null;let n=e;for(;n&&!t(n);)n=n.parent;return n}function A(e){let t=e.parent;if(!t||!("children"in t))return null;let n=t.children,r=n.indexOf(e);return r>0?n[r-1]:null}function S(e){let t=e.parent;if(!t||!("children"in t))return null;let n=t.children,r=n.indexOf(e);return r<n.length-1?n[r+1]:null}function N(e){if(!(e instanceof l.N_P))return{constantContext:e};let t=e.constant();if(t instanceof l.kWK)return{literalType:t.literalType(),constantContext:t.singleStringLitWithoutMarker()};return{constantContext:t}}function C(e,t){return w({node:e,nodesToFind:t}).some(e=>e.length>0)}let et=(e,t)=>{if(0===t.length)return[];let n=t[0];if(!(Array.isArray(n)?n.some(t=>e instanceof t):e instanceof n))return null;let r=e.getChild(0);if(r){let n=et(r,t.slice(1));if(null!==n)return[e,...n]}else if(1===t.length)return[e];return null},en=e=>E({node:e,nodeToFind:i.xo}),er=e=>x({node:e,nodeToFind:i.xo});function I(e){let t=e.getSymbol().text;return t?v.A.trimBackticks(t):""}let ei=e=>{let t=e?.toLowerCase();return"string"==typeof e&&(t===Z.toLowerCase()||"identifier(:undefined)"===t)};function L(e,t){let n=v.A.sanitizeTableIdentifier(e.tableName);if(e.alias&&e.originalAliasText)return`${n} ${e.originalAliasText}`;if(e.alias)return`${n} ${v.A.formatQuotes({value:e.alias})}`;return n}function k({node:e,tokenStream:t}){if(!e)return null;let n=e.temporalTableIdentifierReference()?.identifierReference();if(!n)return null;let r=function(e,t){let n=e.strictIdentifier();if(!n)return;let r=er(n);if(!r?.symbol)return;let i=I(r);if(t){let n=t.getTextFromInterval(e.getSourceInterval());return{alias:i,originalAliasText:n}}return{alias:i}}(e.tableAlias(),t);if(n.expression())return{...r,tableName:n.getText(),isExpression:!0};let i=n.multipartIdentifier();if(i){let e=i.errorCapturingIdentifier().map(e=>{let t=er(e.identifier());return t?I(t):void 0}).filter(e=>void 0!==e);return{...r,tableName:e.join(".")}}return null}let ea=e=>{if(!e)return"";return en(e).map(e=>e.getText()).join(" ").toUpperCase()};function D(e,t){let n=e?.tableName??"";return!n||ei(n)?t:n}function M(e){let t=y.q8.from(e.toString().lastIndexOf("/*")),n=y.q8.from(e.toString().indexOf("*/",t.value));if(-1===t.value||-1===n.value)return e;let r=e.slice(y.aG.from(y.q8.from(0),t)),i=e.slice(y.aG.from(n.add(2),e.length));return h.D.from(r+i)}function R(e){let t=new m.E({});try{if(!e?.text)return{status:"missing",lakebuilderAnnotation:t};let n=e.text.match(/\/\*([\s\S]*?)\*\//),r=n?n[1].trim():"",i=(0,o.qg)(r);return t=new m.E(i?.nodes||{},i?.visual_editor),{status:"success",lakebuilderAnnotation:t}}catch(e){return _._.error("Unable to parse CTE annotations:",e),{status:"error",lakebuilderAnnotation:t}}}function O(e){let t,n={status:"missing",lakebuilderAnnotation:new m.E({})},r=(0,s.parseSqlStatements)(e);return r.forEach((e,a)=>{let o=new i.jB(new u.M(i.Zo.fromString(e.statement)));if(o.fill(),a===r.length-1){let e=o.getTokens().filter(e=>e.channel===s.COMMENTS_CHANNEL);t=e[e.length-1],n=R(t)}}),{lakebuilderAnnotationParseResult:n,lastCommentToken:t}}function U(e){let t,n={status:"missing",lakebuilderAnnotation:new m.E({})},r=(0,s.parseSqlStatements)(e);return{statementParseResults:r.map((e,i)=>{let a=(0,p.W)("databricks.fe.editor.enableCodeUnitTokens",!1),{parser:o,tokenStream:l}=(0,d.m)({sql:e.statement,useCodeUnitTokens:a});if(l.fill(),i===r.length-1){let e=l.getTokens().filter(e=>e.channel===s.COMMENTS_CHANNEL);t=e[e.length-1],n=R(t)}return o.removeErrorListeners(),o.buildParseTrees=!0,{parseTree:o.compoundOrSingleStatement(),statement:e,tokenStream:l}}),lakebuilderAnnotationParseResult:n,lastCommentToken:t}}function F(e){let{lakebuilderAnnotationParseResult:{status:t,lakebuilderAnnotation:n}}=U(e);if("success"!==t)return!1;let r=n.nodes?Object.values(n.nodes):[],i=!0===n.visual_editor,a=r.length>0&&r.some(e=>null!=e.x||null!=e.y||null!=e.type||null!=e.description);return i||a}function P(e,t,n){let r=e.split("\n"),i=0;for(let e=0;e<t;e++)i+=r[e].length+1;return i+n}function q(e){let t=(0,c.AH)(e.start),n=(0,c.sF)(e.stop);if(void 0===t||void 0===n)return;return{start:t,end:n}}function j(e,t,n,r={}){let i=Object.keys(r);if(![...n,...i].some(e=>t===e))return!1;let a=e.replace(/\s+/g," ").trim().toUpperCase();return/^SELECT \* FROM (?:`[^`]+`|[^\s]+)$/i.test(a)}function B(e,t,n,r){return e.map(e=>{let i={...e},o=t[e.source];return o&&o!==e.target&&!(0,a.OB)(e)&&(i.source=o),r.has(e.target)&&(t[i.source]=e.target,n[e.target]=i.source),i})}function G(e,t,n){let r={},i={};for(let[e,n]of Object.entries(t))n.outputParent&&(r[n.outputParent]=e,i[e]=n.outputParent);let a=new Set;for(let t of e)if(t.nodeType===g.v.OUTPUT){let e=n[t.name]||t.name;a.add(e)}return{parentToOutputNodeMap:r,outputNodeToParentMap:i,existingOutputNodes:a}}function $(e,t){try{let n=new Set;return E({node:e,nodeToFind:l.vCK}).forEach(e=>{let r=k({node:e});r&&t.includes(r.tableName)&&n.add(r.tableName)}),Array.from(n)}catch(e){return _._.error("Failed to extract CTE references",e),[]}}function V({nodeGroup:e,edges:t,nodes:n,parentToOutputNodeMap:r,newNodeMap:i,nodeRenameMap:a}){let o={};t.forEach(e=>{o[e.target]||(o[e.target]=[]),o[e.target].push(e)});let s={};n.forEach(e=>{s[e.name]=e,a[e.name]&&(s[a[e.name]]=e)});let l={};for(let t of e)l[t]=new Set((o[t]??[]).map(e=>e.source));let u={},d=[];for(let t of e){let e=i[t],n={sqlNodeName:t};if(e)n.type=e.type,e.type!==g.v.OUTPUT&&(n.sql=e.sql);else{let e=s[t];if(n.type=e?.nodeType,n.type!==g.v.OUTPUT&&e){let r=o[t]??[];n.sql=e.getOuterSQL(r,{fromViewModel:!0,sqlNodeName:t,fromDAG:!0})}}if(n.type===g.v.OUTPUT){let e=u[t];void 0!==e?d[e].push(n):d.push([n]);continue}let a=d[d.length-1],c=a?.[a.length-1],p=c?.type===g.v.OUTPUT,f=p||a?.some(e=>r[e.sqlNodeName]),m=r[t];if(m){!a||f?d.push([n]):a.push(n),u[m]=d.length-1;continue}let h=l[t],y=a?a.findIndex(e=>h.has(e.sqlNodeName)&&e.type!==g.v.OUTPUT):-1;!a||p&&-1===y?d.push([n]):p?a.splice(y+1,0,n):a.push(n)}return d}function Q(e,t){let n=new Set(e);if(!n.has(t))return t;let r=1,i=t;for(;n.has(i);)i=`${t}_${r}`,r++;return i}let eo=(e,t={stripMatchingOuterQuotes:!1})=>{if(!e)return"";if(t.stripMatchingOuterQuotes){if(e.length>=2&&(e.startsWith('"')&&e.endsWith('"')||e.startsWith("'")&&e.endsWith("'")))return e.slice(1,-1);return e}return e.replace(/^['"]+|['"]+$/g,"")};function X(e){let t=new l.h0$(new i.jB(new u.M(i.Zo.fromString(e))));t.removeErrorListeners(),t.buildParseTrees=!0;let n=t.compoundOrSingleStatement(),r=x({node:n,nodeToFind:l.cYY});return ea(r)}function H(e){return e instanceof l.eA5}function z(e){let[t]=E({node:e,nodeToFind:l.eA5});return t}function W(e){return e instanceof l.rSr&&!!e.TEMPORARY()}function Y(e){let t=x({node:e,nodeToFind:l.rSr});if(W(t))return t}function J(e){let t=new Set;for(let n of e)for(let e of E({node:n,nodeToFind:l.vCK})){let n=x({node:e,nodeToFind:i.xo});if(!n)continue;let r=I(n);r&&t.add(r)}return t}function K(e){if(e.objectType===f.an.TABLE&&"entity"in e){let t=`${e.catalog}.${e.schema}.${e.entity}`;return{innerSql:`SELECT * FROM ${t}`,proposedName:e.entity,config:{table_source:{tableName:t}}}}if(e.objectType===f.an.VOLUME_FILE&&"url"in e){let t=e.url,n=t.split("/").pop()||"source",r=n.split(".").pop()?.toLowerCase(),i=n.replace(/\.[^/.]+$/,"");if("csv"===r||"json"===r)return{innerSql:`SELECT * FROM read_files("${t}", format=>"${r}")`,proposedName:i,config:{file_source:{path:t,format:`"${r}"`}}};if("xlsx"===r||"xls"===r)return{innerSql:`SELECT * FROM read_files("${t}", format=>"excel", headerRows=>1, schemaEvolutionMode=>"none")`,proposedName:i,config:{file_source:{path:t,format:'"excel"',headerRows:!0,schemaEvolutionMode:'"none"'}}};if("pdf"===r)return{innerSql:`SELECT * FROM read_files("${t}", format=>"binaryFile")`,proposedName:i,config:{file_source:{path:t,format:'"binaryFile"'}}}}return null}r()}catch(e){r(e)}})},271181:(e,t,n)=>{n.d(t,{G:()=>l,g:()=>s});var r=n(196852),i=n(25260);function a(e,t,n,r,i,a,o){try{var s=e[a](o),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(r,i)}let o={type:"object",properties:{question:{type:"string",description:"A single, specific question that directly unblocks the task."}},required:["question"],additionalProperties:!1},s={type:"function",name:"ask_clarifying_question",description:"Generates a clarifying question if the user's request is ambiguous, unclear, no matching column names are available, etc.",parameters:o,strict:!0};function l(e,t){return(0,r.z6)({name:s.name,description:s.description,parameters:o,execute:n=>{var r;return(r=function*(){try{return t.addStatus(i.XU.QUESTION,i.ke.SUCCESS),e(n.question),{success:!0,data:n.question}}catch(e){return{success:!1,error:{message:e instanceof Error?e.message:"unknown error"}}}},function(){var e=this,t=arguments;return new Promise(function(n,i){var o=r.apply(e,t);function s(e){a(o,n,i,s,l,"next",e)}function l(e){a(o,n,i,s,l,"throw",e)}s(void 0)})})()}})}},290708:(e,t,n)=>{n.d(t,{c:()=>a});var r=n(25260);function i(e,t,n,r,i,a,o){try{var s=e[a](o),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(r,i)}let a=(e,t,n)=>n.withStatus(r.XU.RUNNING_NODE,e,()=>{var n;return(n=function*(){let{rows:n,error:i,timedOut:a}=yield t.getResultWithTimeout(e,void 0,!0);if(i)return{progress:r.ke.ERROR,toolResponseMessage:i.toString()};if(a)return{progress:r.ke.WARNING,toolResponseMessage:"Operation added. Query timed out, could not get results within 60 seconds. Might still be a valid operation."};return{progress:r.ke.SUCCESS,toolResponseMessage:`Operation added and successfully executed (returned ${n?.length??0} rows).`}},function(){var e=this,t=arguments;return new Promise(function(r,a){var o=n.apply(e,t);function s(e){i(o,r,a,s,l,"next",e)}function l(e){i(o,r,a,s,l,"throw",e)}s(void 0)})})()})},295745:(e,t,n)=>{n.d(t,{$Z:()=>m,B1:()=>u,D9:()=>x,Gb:()=>d,Ik:()=>s,Jw:()=>g,LQ:()=>p,ON:()=>f,Ux:()=>i,XB:()=>h,Yg:()=>r,bO:()=>_,c$:()=>o,eh:()=>E,fC:()=>l,kY:()=>c,mD:()=>b,qk:()=>v,rV:()=>a,yu:()=>y});let r=.1,i=2,a=1,o={x:0,y:0,zoom:1},s=1,l=.2,u=.6,d=6,c=1.5,p=140,f=105,m=360,g=32,h=490,y=300,_=360,v=250,b=610,E=900,x=10},310771:(e,t,n)=>{n.d(t,{RI:()=>o,aG:()=>a,h$:()=>s});var r,i,a=((r={}).LIMIT_DEFAULT="1000",r.FULL="full",r),o=((i={}).PARSE="PARSE",i.QUERY="QUERY",i);class s extends Error{}},337822:(e,t,n)=>{n.d(t,{m:()=>r});let r="temp"},360447:(e,t,n)=>{n.d(t,{N:()=>a});var r=n(692738),i=n(894672);let a=()=>{let e=(0,r.useContext)(i._);if(!e)throw Error("useLakeBuilderState must be used within a LakeBuilderProvider");return e}},451536:(e,t,n)=>{n.d(t,{Bv:()=>o,Zq:()=>i,aG:()=>a,q8:()=>r});class r{_value;constructor(e){this._value=e}static from(e){return new r(e)}get value(){return this._value}add(e){return r.from(this.value+e)}}class i{_value;constructor(e){this._value=e}static from(e){return new i(e)}static maybe(e){if(void 0===e)return;return i.from(e)}static must(e){if(void 0===e)throw Error("value is undefined");return i.from(e)}get value(){return this._value}add(e){return i.from(this.value+e)}}class a{_start;_end;constructor(e,t){this._start=e,this._end=t}static from(e,t){return new a(e,t)}get start(){return this._start}get end(){return this._end}}class o{_start;_end;constructor(e,t){this._start=e,this._end=t}static from(e,t){return new o(e,t)}get start(){return this._start}get end(){return this._end}}},502554:(e,t,n)=>{n.d(t,{EB:()=>a,Gr:()=>s,LL:()=>g,RS:()=>i,Xn:()=>c,hE:()=>h,hd:()=>o,iK:()=>m,jU:()=>p,ng:()=>f,q$:()=>l,tt:()=>y});var r=n(8899);let i=200,a=50,o=200,s=30,l=48,u=(e,t)=>{let n=1/0,r=1/0,i=-1/0,a=-1/0;for(let o of e){let{x:e,y:s,width:l,height:u}=t(o);n=Math.min(n,e),r=Math.min(r,s),i=Math.max(i,e+l),a=Math.max(a,s+u)}return{minX:n,minY:r,maxX:i,maxY:a}},d=e=>u(e,e=>({x:e.position?.x??0,y:e.position?.y??0,width:e.measured?.width||e.width||r.tB,height:e.measured?.height||e.height||r.vJ})),c=(e,t)=>{let n=t.position??{x:0,y:0},r=t.measured?.width??0,i=t.measured?.height??0;if(0===e.length)return{width:r,height:i,groupPosition:n,childOffset:{x:0,y:0},getNodePosition:()=>({x:s,y:l+s})};let{minX:a,minY:o,maxX:u,maxY:c}=d(e),p=Math.min(a-s,n.x),f=Math.min(o-l-s,n.y),m=Math.max(u+s,n.x+r),g=Math.max(c+s,n.y+i),h={x:n.x-p,y:n.y-f};return{width:m-p,height:g-f,groupPosition:{x:p,y:f},childOffset:h,getNodePosition:e=>{let t=e.position??{x:0,y:0};return{x:t.x-p,y:t.y-f}}}},p=(e,t)=>{if(0===e.length)return!1;let n=d(e),r=t.measured?.width??t.width??0,i=t.measured?.height??t.height??0,a=n.minX<=-10,o=n.maxX>=r- -10,s=n.minY<=l+-10,u=n.maxY>=i- -10;return a||o||s||u},f=(e,t)=>{if(0===e.length)return!1;let n=d(e),r=t.measured?.width??t.width??0,i=t.measured?.height??t.height??0,a=(n.minX+n.maxX)/2,o=(n.minY+n.maxY)/2;return a<0||a>r||o<l||o>i},m=e=>{if(0===e.length)return{groupX:0,groupY:0,groupWidth:0,groupHeight:0,relativePositions:[]};let t=1/0,n=1/0,i=-1/0,a=-1/0;for(let o of e){let e=o.w??r.tB,s=o.h??r.vJ;t=Math.min(t,o.x),n=Math.min(n,o.y),i=Math.max(i,o.x+e),a=Math.max(a,o.y+s)}let o=t-s,u=n-l-s,d=i-t+2*s,c=a-n+l+2*s,p=e.map(e=>({x:e.x-o,y:e.y-u}));return{groupX:o,groupY:u,groupWidth:d,groupHeight:c,relativePositions:p}},g=(e,t,n,i,a)=>{let o=e.find(e=>e.name===t);if(!o)return;let s=[],l=[];for(let n of e)n.parentId!==t||a&&a.has(n.name)||(s.push(n.name),l.push({x:n.x??0,y:n.y??0,width:n.width??r.tB,height:n.height??r.vJ}));if(0===s.length)return void i(t,{width:r.tB,height:r.vJ});let u=y(l,r.tB,r.vJ);if(!u)return void i(t,{width:r.tB,height:r.vJ});if(i(t,{width:u.width,height:u.height}),n(t,(o.x??0)+u.groupOffset.x,(o.y??0)+u.groupOffset.y),0!==u.childOffset.x||0!==u.childOffset.y)for(let e=0;e<s.length;e++)n(s[e],l[e].x+u.childOffset.x,l[e].y+u.childOffset.y)},h=(e,t)=>{let n=e.find(e=>e.id===t);if(!n)return null;let i=e.filter(e=>e.parentId===t);if(0===i.length)return null;let a=y(i.map(e=>({x:e.position.x,y:e.position.y,width:e.measured?.width||e.width||r.tB,height:e.measured?.height||e.height||r.vJ})));if(!a)return null;let{width:o,height:s,groupOffset:l,childOffset:u}=a,d=n.measured?.width??n.width??0,c=n.measured?.height??n.height??0;if(1>Math.abs(o-d)&&1>Math.abs(s-c)&&1>Math.abs(u.x)&&1>Math.abs(u.y))return null;return e.map(e=>{if(e.id===t)return{...e,position:{x:n.position.x+l.x,y:n.position.y+l.y},width:o,height:s};if(e.parentId===t)return{...e,position:{x:e.position.x+u.x,y:e.position.y+u.y}};return e})},y=(e,t=0,n=0)=>{if(0===e.length)return null;let{minX:r,minY:i,maxX:a,maxY:o}=u(e,e=>e),d=s-r,c=l+s-i;return{width:Math.max(a-r+2*s,t),height:Math.max(o-i+l+2*s,n),groupOffset:{x:-d,y:-c},childOffset:{x:d,y:c}}}},523282:(e,t,n)=>{n.d(t,{B:()=>o,U:()=>s});var r=n(104294),i=n(608816),a=n(696780);let o=[r.v.SOURCE,r.v.TRANSFORM,r.v.FILTER,r.v.SORT,r.v.AGGREGATE,r.v.JOIN,r.v.COMBINE,r.v.LIMIT,r.v.AI_FUNCTION],s=[{nodeContent:{codeLanguage:a.T.SQL,nodeType:r.v.SOURCE,codeContent:(0,i.bk)(`
          |-- Source template: select * from a table that is not a CTE.
          |-- No support for joins, aggregations, or filters in a WHERE clause.
          |-- Note: do not modify these operators, and only remove if explicitly instructed to do so.
          |-- Note: you can use the \`tableSearch\` tool to search for tables
          |SELECT * FROM main.john_doe.customers`)}},{nodeContent:{codeLanguage:a.T.SQL,nodeType:r.v.TRANSFORM,codeContent:(0,i.bk)(`
          |-- Transform template: Any SELECT expression is permitted.
          |-- No support for joins, aggregations, or filters in a WHERE clause.
          |SELECT id, UPPER(first_name) AS first_name_upper FROM customers`)}},{nodeContent:{codeLanguage:a.T.SQL,nodeType:r.v.FILTER,codeContent:(0,i.bk)(`
        |-- Filter template. Any WHERE clause is permitted. No support for joins or
        |-- aggregations. Must start with SELECT *.
        |SELECT * FROM customers
WHERE age > 30`)}},{nodeContent:{codeLanguage:a.T.SQL,nodeType:r.v.SORT,codeContent:(0,i.bk)(`
        |-- Sort template. Any ORDER BY clause is permitted. No support for joins or
        |-- aggregations. Must start with SELECT *.
        |SELECT * FROM customers
ORDER BY last_purchase_date DESC`)}},{nodeContent:{codeLanguage:a.T.SQL,nodeType:r.v.AGGREGATE,codeContent:(0,i.bk)(`
        |-- Aggregate template. Any GROUP BY clause is permitted. No support for joins.
        |-- SELECT may include typical expressions with aggregation.
        |SELECT country, COUNT(*) AS customer_count
FROM customers
GROUP BY country`)}},{nodeContent:{codeLanguage:a.T.SQL,nodeType:r.v.JOIN,codeContent:(0,i.bk)(`
        |-- Join template. Any JOIN clause is permitted. No support for aggregations.
        |-- Must start with SELECT *. Filters are permitted.
        |SELECT * FROM orders
JOIN customers ON orders.customer_id = customers.id`)}},{nodeContent:{codeLanguage:a.T.SQL,nodeType:r.v.COMBINE,codeContent:(0,i.bk)(`
        |-- Combine template. Any set operation (UNION, UNION ALL, INTERSECT, EXCEPT, etc.) clause is permitted.
        |-- No support for joins or aggregations. Must start with SELECT *.
        |SELECT * FROM current_customers
UNION
SELECT * FROM archived_customers`)}},{nodeContent:{codeLanguage:a.T.SQL,nodeType:r.v.LIMIT,codeContent:(0,i.bk)(`
      |-- Limit template. Any LIMIT clause is permitted. No support for joins or aggregations.
      |-- Must start with SELECT *.
      |SELECT * FROM table1 LIMIT 100`)}},{nodeContent:{codeLanguage:a.T.SQL,nodeType:r.v.AI_FUNCTION,codeContent:(0,i.bk)(`
      |-- AI Function template.
      |-- Only ai_analyze_sentiment, ai_classify, ai_extract, ai_fix_grammar, ai_gen,
      |-- ai_mask, ai_similarity, ai_summarize, and ai_translate functions are supported.
      |-- No support for joins, aggregations, or filters in a WHERE clause.
      |-- Must start with SELECT, columns may include only AI functions and *, and the last column must be *.
      |SELECT ai_summarize(product, 10), * FROM table1`)}}]},608816:(e,t,n)=>{n.d(t,{bk:()=>r,pE:()=>i,sc:()=>a});let r=(e,t="|")=>e.split("\n").map(e=>{let n=e.indexOf(t);return -1!==n?e.slice(n+1):e}).join("\n").trim(),i=e=>e.replaceAll('"',"'").replaceAll(/\(|\)|`|\s/g,""),a=(e,t)=>Math.random()*(t-e)+e},619514:(e,t,n)=>{n.d(t,{$:()=>o,K:()=>a});var r=n(212478),i=n(796068);let a={fromSchemaColumn:e=>({columnId:e.name,columnType:e.type,columnLabel:e.name,columnDisplayAs:r.r5(e.type)}),fromFilterCondition:e=>({columnId:e.left?.expr,columnType:e.dataType,columnLabel:e.left?.expr,columnDisplayAs:i.RG(e.dataType)})};function o(e,t){if(e.dataType)return e.dataType;if(t)return i.$j(t)}},624986:(e,t,n)=>{n.d(t,{CK:()=>v,HE:()=>c,K5:()=>g,Oc:()=>u,P1:()=>d,S3:()=>h,U6:()=>b,UZ:()=>y,a9:()=>f,c5:()=>l,k1:()=>m,mC:()=>p,sO:()=>_});var r=n(22191),i=n(886100),a=n(337822),o=n(916946);let s=(e,t)=>{let n=e.source.localeCompare(t.source);if(0!==n)return n;return e.target.localeCompare(t.target)};function l(e,t,n){let r=new Set(((e,t,n)=>{let r={};for(let e of n)r[e]=[];for(let{source:e,target:n}of t)r[n]?.push(e);let i=new Set,a=[e];for(;a.length>0;){let e=a.pop();if(e)for(let t of r[e]??[])i.has(t)||(i.add(t),a.push(t))}return Array.from(i)})(e,n,t));r.add(e);let i=Array.from(r);return u(i,n.filter(e=>r.has(e.source)&&r.has(e.target)))??i}let u=(e,t)=>{e=e.toSorted(),t=t.toSorted(s);let n=new Map,r=new Map;for(let t of e)n.set(t,[]),r.set(t,0);for(let{source:e,target:i}of t){let t=n.get(e);t&&t.push(i),r.set(i,(r.get(i)||0)+1)}let i=[];for(let[e,t]of r.entries())0===t&&i.push(e);let a=[];for(;i.length>0;){let e=i.shift();if(!e)continue;a.push(e);let t=n.get(e);if(t)for(let e of t){let t=r.get(e)||-1;r.set(e,t-1),0===r.get(e)&&i.push(e)}}if(a.length!==e.length)return null;return a};function d(e,t,n={}){let a=((e,t)=>{let n=((e,t)=>{let n={};for(let{source:t,target:r}of e.toSorted(s))n[t]||(n[t]=[]),n[r]||(n[r]=[]),n[t].push(r),n[r].push(t);for(let e of t.toSorted())n[e]||(n[e]=[]);return n})(e,t),r=new Set,i=[],a=(e,t)=>{for(let i of(r.add(e),t.push(e),n[e]))r.has(i)||a(i,t)};for(let e in n)if(!r.has(e)){let t=[];a(e,t),i.push(t)}return i})(t,e),o=[];for(let s of a){let a=t.filter(e=>s.includes(e.source)&&s.includes(e.target)),l=u(s,a);if(l)o.push(l);else throw i.iT.log(r.Es.LakeBuilder,"sql-topological-sort-cycle-detected",{nodeNames:e,edges:t,...n}),Error("Cycle detected")}return o.sort((e,t)=>e[0]<t[0]?-1:+(e[0]>t[0])),o}let c=(e,t)=>{let n=((e,t)=>{let n={};for(let e of t)n[e]=[];for(let{source:t,target:r}of e)n[t]||(n[t]=[]),n[t].push(r);return n})(e,t);return t.filter(e=>(n[e]?.length??0)===0)},p=(e,t,n)=>{if(t===n)return!0;let r=new Map,i=new Set;if(e.forEach(e=>{if(e.className!==a.m){i.add(e.source),i.add(e.target),r.has(e.source)||r.set(e.source,new Set);let t=r.get(e.source);t&&t.add(e.target)}}),!i.has(t)||!i.has(n))return!1;return function e(t,n,i=new Set){if(t===n)return!0;if(i.has(t))return!1;i.add(t);let a=r.get(t);if(a){for(let t of a)if(e(t,n,i))return!0}return!1}(n,t)},f=e=>{let t=new Map,n=new Set;for(let r of e)n.add(r.source),n.add(r.target),t.has(r.source)||t.set(r.source,new Set),t.has(r.target)||t.set(r.target,new Set),t.get(r.source)?.add(r.target);let r=new Set,i=new Set,a=e=>{if(r.has(e))return!0;if(i.has(e))return!1;for(let n of(r.add(e),t.get(e)??[]))if(a(n))return!0;return r.delete(e),i.add(e),!1};for(let e of t.keys())if(!i.has(e)&&a(e))return!0;return!1},m=(e,t)=>{if(t.source===t.target)return!0;let n=new Map;for(let t of e){let e=n.get(t.source);e||(e=[],n.set(t.source,e)),e.push(t.target)}let r=new Set,i=[t.target];for(;i.length>0;){let e=i.pop();if(void 0===e)continue;if(e===t.source)return!0;if(r.has(e))continue;r.add(e);let a=n.get(e);if(a)for(let e of a)i.push(e)}return!1};function g(e,t){let n=new Map;for(let t of e)n.set(t,[]);for(let e of t)n.get(e.target)?.push(e.source);return n}function h(e,t){let n=new Map;for(let t of e)n.set(t,[]);for(let e of t)n.get(e.source)?.push(e.target);return n}function y(e,t){return e.map(e=>t.get(e)).filter(e=>void 0!==e)}function _(e){let t=[],n=new Set,r=[...e.getParents()];for(;r.length>0;){let e=r.pop();n.has(e)||(n.add(e),t.push(e),r.push(...e.getParents()))}return t}function v(e){let t=[],n=new Set,r=[...e.getChildren()];for(;r.length>0;){let e=r.pop();n.has(e)||(n.add(e),t.push(e),r.push(...e.getChildren()))}return t}let b=e=>e.map(e=>({id:(0,o.dm)(e),source:e.source,target:e.target,type:"buttonEdge",targetHandle:e.targetHandle}))},685668:(e,t,n)=>{n.d(t,{Q:()=>r});function r(e,t=500){let n=e.columns,i=n.map(e=>`${e.name??""} (${e.type??"n/a"})`);return[`| ${i.join(" | ")} |`,`| ${i.map(()=>"---").join(" | ")} |`,Array.from({length:Math.max(0,...n.map(e=>e.sampleValues.length))},(e,r)=>`| ${n.map(e=>{var n;return(n=e.sampleValues[r]??"").length>t?n.slice(0,t-3)+"...":n}).join(" | ")} |`).join("\n")].filter(Boolean).join("\n")}},692301:(e,t,n)=>{n.d(t,{e:()=>r});function r(e,t){return t.filter(t=>e.includes(`:${t.name}`))}},694154:(e,t,n)=>{n.d(t,{r:()=>i,w:()=>r});let r=(e,t,n,r)=>{let i=e.x,a=e.x+t.width,o=n.x,s=n.x+r.width,l=e.y,u=e.y+t.height,d=n.y,c=n.y+r.height;return i<=s&&a>=o&&l<=c&&u>=d},i=e=>{if("changedTouches"in e&&e.changedTouches.length>0){let t=e.changedTouches[0];return{x:t.clientX,y:t.clientY}}if("clientX"in e&&"clientY"in e)return{x:e.clientX,y:e.clientY};return null}},696780:(e,t,n)=>{n.d(t,{$:()=>a,T:()=>o});var r,i,a=((r={}).Trigger="trigger",r.Submit="submit",r.Accept="accept",r.Reject="reject",r.Cancel="cancel",r.Error="error",r.SearchQueried="search-queried",r.SearchLatency="search-latency",r.SearchResultSelected="search-result-selected",r.SearchAbandoned="search-abandoned",r),o=((i={}).SQL="SQL",i)},724186:(e,t,n)=>{function r(e,t){if(e===t)return 0;if(void 0===e)return -1;if(void 0===t)return 1;let n=e.split("."),r=t.split("."),i=Math.max(n.length,r.length);for(let e=0;e<i;e++){let t=Number(n[e]??"0"),i=Number(r[e]??"0");if(Number.isFinite(t)&&Number.isFinite(i)){if(t!==i)return t-i}else{let t=n[e]??"",i=r[e]??"";if(t!==i)return t<i?-1:1}}return 0}function i(e,t){return r(e,t)>=0}n.d(t,{NN:()=>i,Zy:()=>r})},734029:(e,t,n)=>{n.d(t,{v:()=>g});var r=n(692738),i=n(998437),a=n(974901),o=n(977579),s=n(104294),l=n(360447),u=n(8899),d=n(186031),c=n(295745),p=n(694154);let f={width:u.tB,height:u.vJ};function m(e){return{width:e.width??u.tB,height:e.height??u.vJ}}function g(e,t=!0){let n=(0,l.N)(),{screenToFlowPosition:h}=(0,i.VH)(),{centerOnPosition:y}=(0,a.H9)(),_=(0,r.useCallback)((e,t)=>{let r,i=n.uiState.reactFlowNodes,a=f.width+u.N3,o=f.height+u.LY,s=0,l=0,d=0,c=0,g=2,h=!0;for(;s<100;){r={x:e.x+a*l,y:e.y+o*(h?-1*d:c)};let n=!1;for(let e of i)if((!t||e.id!==t)&&(0,p.w)(r,f,e.position,m(e))){n=!0;break}if(!n)return r;0===d&&h?d++:h?(c++,h=!1):(d++,h=!0),d>g&&(l++,d=0,c=0,g+=2,h=!0),s++}},[n.uiState]),v=(0,r.useCallback)(e=>{let t=n.uiState.reactFlowEdges.filter(t=>t.target===e);if(0===t.length)return;let r=-Number.MAX_VALUE,i=0;for(let e of t){let t=n.uiState.reactFlowNodes.find(t=>t.id===e.source);if(t){let e=m(t);r=Math.max(r,t.position.x+e.width),i+=t.position.y}}let a=i/t.length;return _({x:r+u.N3,y:a},e)},[n,_]),b=(0,r.useCallback)(()=>{let e=n.uiState.reactFlowNodes,t=e.filter(e=>e.type===s.v.SOURCE);if(t.length>0){let e=Math.min(...t.map(e=>e.position.x)),n=Math.max(...t.filter(t=>Math.abs(t.position.x-e)<u.tB).map(e=>e.position.y)),r=_({x:e,y:n+f.height+u.LY});if(r)return r}else if(e.length>0){let t=Math.min(...e.map(e=>e.position.x)),n=e.reduce((e,t)=>e+t.position.y,0)/e.length,r=_({x:t-(f.width+u.N3),y:n});if(r)return r}return h({x:window.innerWidth/2,y:window.innerHeight/2})},[n,_,h]),E=(0,r.useCallback)((t=!1,r)=>{let i;if(r===s.v.SOURCE)return b();let a=n.uiState.reactFlowNodes;if(0===a.length)i=h({x:window.innerWidth/2,y:window.innerHeight/2});else{let n=e?a.find(t=>t.id===e):null,r=a[a.length-1],o=n||r,s=m(o).width+u.N3;if(i=_({x:o.position.x+s,y:o.position.y}))return i;let l=-f.height-.5*u.LY;t&&(l*=-1),i={x:o.position.x+s,y:o.position.y+l}}return i},[n.uiState,h,e,_,b]);return{addNode:(0,r.useCallback)((r,i,a)=>{let l=0===n.uiState.reactFlowNodes.length,u=i||E(!1,r),p="python"===n.languageType?t?e:void 0:t||r===s.v.OUTPUT?e:void 0,f=n.addNodeToGraph((0,o.O)("graphEdit"),r,u,{appendToName:p,userDefinedOperatorKey:a});return i||y(u,{duration:d.U.STANDARD,zoom:l?c.rV:void 0}),f},[n,y,e,t,E]),getNewNodePosition:E,generateNodePositionFromEdges:v}}},781406:(e,t,n)=>{n.d(t,{l:()=>r});let r="# AI SQL Functions\n\nWhen you need to use an AI function, read the `sql-functions` skill to see the available functions and their syntax."},786155:(e,t,n)=>{n.d(t,{eH:()=>r,g2:()=>a,mQ:()=>i});let r=1e3,i=1,a=1e9},792046:(e,t,n)=>{n.d(t,{i:()=>d});var r=n(247066),i=n(961598),a=n(109867),o=n(441535),s=n(889495);function l(e,t,n,r,i,a,o){try{var s=e[a](o),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(r,i)}let u=new Map;function d(e,t){var n;return(n=function*(){let n;if(e.cacheKey&&(n=yield e.cacheKey()),n&&e.metadata.clientId&&u.has(e.metadata.clientId)){let t=u.get(e.metadata.clientId);if(t){let e=t.get(n);if(e)return e}}let l=i.P.getFlow("default"),d=(0,s.R)(e.metadata.clientId),c=yield l.getResponse({model:d,modelSettings:{toolChoice:e.toolChoice,reasoning_effort:e.toolChoice?"disabled":void 0,...(0,o.W)("databricks.fe.assistant.enableNativeThinking",!1)?{}:{temperature:0}},systemInstructions:e.systemPrompt,agentIds:{clientId:e.metadata.clientId,traceId:e.metadata.traceId,stepId:e.metadata.traceId,sessionId:e.metadata.traceId,model:d,agentName:e.agentName},tools:e.tools,input:[...e.contextMessages,{type:"message",role:"user",content:e.userPrompt}],signal:t,charsPerToken:4,runner:(0,a.c)()});if(1===c.output.length&&"message"===c.output[0].type&&"assistant"===c.output[0].role&&c.output[0].content[0].providerData?.role==="assistant"&&c.output[0].content[0].providerData?.refusal!==void 0){if(c.output[0].content[0].providerData?.refusal==="Aborted")return null;throw Error("Error during AI request: "+c.output[0].content[0].providerData?.refusal)}let p=null;if(1===c.output.length&&"function_call"===c.output[0].type){let t=c.output[0];p=e.parseResult({name:t.name,arguments:t.arguments})}if(!p)return null;if(n&&e.metadata.clientId){u.has(e.metadata.clientId)||u.set(e.metadata.clientId,new r.q({max:100}));let t=u.get(e.metadata.clientId);t&&t.set(n,p)}return p},function(){var e=this,t=arguments;return new Promise(function(r,i){var a=n.apply(e,t);function o(e){l(a,r,i,o,s,"next",e)}function s(e){l(a,r,i,o,s,"throw",e)}o(void 0)})})()}},815530:(e,t,n)=>{n.d(t,{AH:()=>d,FB:()=>l,Uf:()=>u,sF:()=>c,xX:()=>s});var r=n(297768),i=n(886100),a=n(22191),o=n(441535);class s extends r.rt{startCodeUnit;stopCodeUnit;constructor(e,t){if(super(e),t.length>0&&void 0!==e.start&&void 0!==e.stop){this.startCodeUnit=t[e.start],this.stopCodeUnit=t[e.stop];const n=e.text?.[e.text.length-1],r=n?.codePointAt(0);r&&r>65535&&this.stopCodeUnit++}}}class l extends r.ps{codePointToCodeUnitMap;constructor(e){super(),this.codePointToCodeUnitMap=e}create(e,t,n,r,i,a,o,l){return new s({source:e,type:t,text:n,channel:r,start:i,stop:a,line:o,column:l},this.codePointToCodeUnitMap)}}function u(e){let t=[],n=0;for(let r of e){let e=r.codePointAt(0);if(!e)continue;let i=e>65535?2:1;t.push(n),n+=i}return t}function d(e){if(!(0,o.W)("databricks.fe.editor.enableCodeUnitTokens",!1))return null==e?void 0:e.start;if(null==e)return;if(e instanceof s){if(0===e.startCodeUnit||e.startCodeUnit)return e.startCodeUnit;i.iT.sev2(a.Es.Editor,"CodeUnitToken received but no startCodeUnit was found",JSON.stringify({text:e.text,start:e.start,stop:e.stop}))}return e.start}function c(e){if(!(0,o.W)("databricks.fe.editor.enableCodeUnitTokens",!1))return e?.stop?e.stop:void 0;if(null==e)return;if(e instanceof s){if(0===e.stopCodeUnit||e.stopCodeUnit)return e.stopCodeUnit;i.iT.sev2(a.Es.Editor,"CodeUnitToken received but no stopCodeUnit was found",JSON.stringify(e))}return e.stop}},889485:(e,t,n)=>{n.d(t,{QA:()=>l,T4:()=>p,VC:()=>m,VN:()=>s,ZA:()=>o,_L:()=>a,gR:()=>c,kN:()=>d,qb:()=>f,te:()=>u});var r,i,a=((r={}).String="string",r.Number="number",r.Integer="integer",r.Boolean="boolean",r.Object="object",r.Array="array",r),o=((i={}).Expression="expression",i.TableSource="table_source",i.FileSource="file_source",i.ColumnExpressions="column_expressions",i.SortExpressions="sort_expressions",i.AggregationExpressions="aggregation_expressions",i.AIFunctionExpressions="ai_function_expressions",i.StringArray="string[]",i.IsPreview="is_preview",i);function s(e){return Object.entries(e.properties).map(([e,t])=>({key:e,property:t}))}function l(e,t){return e.required?.includes(t)??!1}function u(e){if(null==e)return!0;if("string"==typeof e)return 0===e.trim().length;if(Array.isArray(e))return 0===e.length;return!1}function d(e,t,n){return l(e,t)&&u(n)}function c(e){if(e["x-ui"]?.widget==="expression")return"expression";if(e["x-ui"]?.widget==="multi-select")return"string[]";if(e.format)return e.format;if("array"===e.type&&e.items?.type==="string")return"string[]";return e.type??"string"}function p(e){return Object.entries(e.properties).filter(([,e])=>"is_preview"===e.format).map(([e])=>e)}function f(e){let t={};for(let[n,r]of Object.entries(e.properties))void 0!==r.default&&(t[n]=r.default);return t}function m(e){if("inline"===e.type)return e.code;throw Error(`Unsupported run_function type: ${e.type}`)}},889495:(e,t,n)=>{n.d(t,{R:()=>c});var r=n(629033),i=n(474499),a=n(837847),o=n(886100),s=n(22191),l=n(61170);let u=new Set([r.O.LakeBuilderTransformByExample,r.O.LakeBuilderDagCompletion,r.O.LakeBuilderDescriptionToConfig]),d=e=>u.has(e)?(0,i.jj)():i.Gy,c=e=>{let t=a.m.Instance.GetFeatureByClientId(e),n=a.m.Instance.GetFeatureModelSelector(t);try{return n(d(e))}catch(u){let n=a.m.Instance.GetAvailableModelsForClient(e),r=a.m.Instance.GetFeatureDisablementReason(t);return o.iT.sev2(s.Es.LakeBuilder,"No available model for lakebuilder",{clientId:e,featureId:t,availableModelsForClient:n,requestedModels:d(e),isLoaded:a.m.Instance.IsLoaded,enablementConfig:{isAssistantFrontendEnabled:a.m.Instance.IsAssistantFrontendEnabled,isInHouseEnabled:a.m.Instance.IsInHouseEnabled,isPartnerPoweredEnabled:a.m.Instance.IsPartnerPoweredEnabled},disablementReason:r,...(0,l.P)(u)}),(0,i.tC)()}}},894672:(e,t,n)=>{n.d(t,{_:()=>r});let r=(0,n(692738).createContext)(null)},897223:(e,t,n)=>{let r;function i(){return r||(r=n(178260)),r}function a(e,t){return i().getOperatorTemplate(e,t)}function o(e,t){return i().hasOperatorTemplate(e,t)}function s(e){return i().isBuiltInTemplateId(e)}function l(e){return i().getLatestVersion(e)}n.d(t,{CA:()=>l,HD:()=>a,Lf:()=>o,NT:()=>s})},916946:(e,t,n)=>{n.d(t,{$$:()=>d,BI:()=>i,EA:()=>u,c5:()=>a,dm:()=>l,w8:()=>s});var r=n(104294);function i(e,t,n){if(e.length!==t.length)return!1;if(n?.ignoreOrder){let r={};for(let t of e){let e=n?.getElementKey?.(t)||String(t);r[e]=(r[e]??0)+1}for(let e of t){let t=n?.getElementKey?.(e)||String(e);if(!r[t])return!1;r[t]--}return Object.values(r).every(e=>0===e)}return e.every((e,r)=>n?.areElementsEqual?.(e,t[r])??e===t[r])}function a(e,t){if(e===t)return!0;if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function o(e,t){return e.source===t.source&&e.target===t.target&&e.sourceHandle===t.sourceHandle&&e.targetHandle===t.targetHandle}function s(e,t){return i(e,t,{ignoreOrder:!0,areElementsEqual:o,getElementKey:l})}function l(e){let t=null!==e.sourceHandle&&void 0!==e.sourceHandle?`-sh${e.sourceHandle}`:"",n=null!==e.targetHandle&&void 0!==e.targetHandle?`-th${e.targetHandle}`:"";return`${e.source}-${e.target}${t}${n}`}function u(e,t={useNodeId:!1}){if(t.useNodeId)return`${e.uniqueNodeId||e.name}_${e.nodeType}`;return`${e.name}_${e.nodeType}`}function d(e){if(!e)return!1;let t="nodeType"in e?e.nodeType:e.type;return r.Q.includes(t)}},928858:(e,t,n)=>{n.d(t,{k:()=>f,y:()=>p});var r=n(196852),i=n(342411),a=n(290708),o=n(977579),s=n(25260);function l(e,t,n,r,i,a,o){try{var s=e[a](o),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(r,i)}function u(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){l(a,r,i,o,s,"next",e)}function s(e){l(a,r,i,o,s,"throw",e)}o(void 0)})}}let d={type:"object",properties:{thoughts:{type:"string",description:"The thoughts and reasoning behind editing a SQL operation."},name:{type:"string",description:"The name of the existing SQL operation to be edited."},updated_operation_type:{type:"string",enum:n(523282).B,description:"The updated type of operation."},updated_sql:{type:"string",description:"The updated SQL code that should replace the existing operation."},updated_name:{type:"string",description:"Updated name that might better reflect what this operation is doing after editing."}},required:["name","updated_operation_type","updated_sql","updated_name","thoughts"],additionalProperties:!1},c={displayType:"singleRowDynamic",displayFunction:(e,t)=>({running:{messageDescriptor:(0,i.zR)({id:"Z+pLng",defaultMessage:"Editing operator{name}"}),values:{name:e.name?` ${e.name}`:""}},success:{messageDescriptor:(0,i.zR)({id:"vbymeX",defaultMessage:"Edited operator{name}"}),values:{name:e.name?` ${e.name}`:""}},failure:{messageDescriptor:(0,i.zR)({id:"4s3x/m",defaultMessage:"Failed to edit operator{name}"}),values:{name:e.name?` ${e.name}`:""}}})},p={type:"function",name:"edit_sql_operation",description:"Edits an existing SQL operation identified by name. Takes the name of the operation to edit and the new SQL code to replace it with.",parameters:d,strict:!0};function f(e,t,n,i){return(0,r.z6)({name:p.name,description:p.description,parameters:d,display:c,execute:r=>u(function*(){try{let l=r.name,d=[()=>t.withStatus(s.XU.EDITING_NODE,l,()=>u(function*(){let t=e.languageParser.operatorNodes.find(e=>e.name===l);if(!t)return{progress:s.ke.ERROR,toolResponseMessage:`Node with name ${l} not found`};let n=t.tryReplaceNode(r.updated_sql,!0);if(n.isStructurallyDifferent)return{progress:s.ke.ERROR,toolResponseMessage:"The suggested edit was rejected because it would change the operator type. Express the transformation as a sequence of distinct operations that conform to the structure of the operation type examples."};if(n.hasCycle)return{progress:s.ke.ERROR,toolResponseMessage:"The suggested SQL would create a circular dependency. Operators cannot reference themselves or their downstream operators. Ensure that each operator only references operators that are upstream in the dataflow."};if(!n.isValid)return{progress:s.ke.ERROR,toolResponseMessage:"Cannot parse the suggested operation as valid SQL. Be sure to suggest Databricks SQL syntax."};return i&&r.name!==r.updated_name&&(l=e.renameNode((0,o.O)("agentEdit"),l,r.updated_name)),{progress:s.ke.SUCCESS}})()),...n?[()=>(0,a.c)(l,e,t)]:[]],c=yield(0,s.BM)(d);if(c.progress===s.ke.ERROR)return{success:!1,error:{message:c.toolResponseMessage??"Edit failed."}};return{success:!0,data:c.toolResponseMessage}}catch(e){return{success:!1,error:{message:e instanceof Error?e.message:"unknown error"}}}})()})}},938500:(e,t,n)=>{n.d(t,{E:()=>d});var r=n(631377),i=n.n(r),a=n(432993);function o(){return(void 0)??a.n.generateUuidV4()}var s=n(104294),l=n(8899),u=n(916946);class d{nodes;visual_editor;constructor(e,t){this.nodes=this.sanitizeNodeMap(e),this.visual_editor=t}clone(){return new d(i()(this.nodes),this.visual_editor)}resetFromReactFlowNodes(e,t=!0){let n=e.reduce((e,t)=>{let n=t.id,r=!(0,u.$$)({nodeType:t.type}),i=this.nodes[n]??{},a={...i,x:isNaN(t.position.x)?0:t.position.x,y:isNaN(t.position.y)?0:t.position.y,type:t.type,nodeId:i.nodeId??o(),parentId:t.parentId,extent:t.extent};return r&&!(t.type===s.v.GROUP&&i.customData?.collapsed)&&(a.dimensions={width:t.width??l.Nl,height:t.height??l.O7}),e[n]=a,e},{});t&&Object.entries(this.nodes).forEach(([e,t])=>{let r=t.parentId,i=r?n[r]:void 0;i?.customData?.collapsed&&(n[e]={...t})}),this.nodes=n}garbageCollect(e){for(let t of Object.keys(this.nodes))e.find(e=>e.name===t)||delete this.nodes[t]}deleteNode(e){delete this.nodes[e]}isEmpty(){return 0===Object.keys(this.nodes).length}setNode(e,t){let{x:n,y:r,type:i,description:a,...s}=t;this.nodes[e]={x:n,y:r,description:a,...s,nodeId:o()},t.type&&(this.nodes[e].type=i)}removeNode(e){delete this.nodes[e]}setNodeIdIfNotSet(e){this.nodes[e]||(this.nodes[e]={}),this.nodes[e]={...this.nodes[e],nodeId:this.nodes[e].nodeId??o()}}setDescription(e,t){this.nodes[e]||(this.nodes[e]={}),this.nodes[e].description=t}resetNodeType(e){this.nodes[e]||(this.nodes[e]={}),this.nodes[e].type=void 0}setNodeData(e,t,n){this.nodes[e]=this.nodes[e]??{},this.nodes[e].customData=this.nodes[e].customData??{},this.nodes[e].customData[t]=n}setNodeParentId(e,t){this.nodes[e]=this.nodes[e]??{},this.nodes[e].parentId=t,this.nodes[e].extent=t?"parent":void 0}renameNode(e,t){this.nodes[t]=this.nodes[e],delete this.nodes[e]}getNodeCustomData(e){return this.nodes[e]?.customData}setCoordinates(e,t,n){this.nodes[e]||(this.nodes[e]={}),this.nodes[e].x=t,this.nodes[e].y=n}setNodeDimensions(e,t){this.nodes[e]||(this.nodes[e]={}),this.nodes[e].dimensions=t}sanitizeNodeMap(e){let t={...e};for(let[e,n]of Object.entries(t))n&&"object"==typeof n||(t[e]={});return t}static isEqual(e,t){let n=Object.keys(e.nodes),r=Object.keys(t.nodes);if(n.length!==r.length)return!1;for(let r of n){let n=e.nodes[r],i=t.nodes[r];if(n.x!==i.x||n.y!==i.y||n.type!==i.type)return!1}return!0}}},950510:(e,t,n)=>{n.d(t,{If:()=>p,VV:()=>d,Xb:()=>f,au:()=>u,eL:()=>_,gc:()=>g,kn:()=>m,ok:()=>l,vX:()=>y,xn:()=>h});var r=n(187416),i=n(411672),a=n(518638),o=n(689017),s=n(89897);let l="ask_clarifying_question",u="edit_sql_operation",d=(e,t)=>{let n=e.getNodeParserByName(t);return new Map(Array.from((0,s.aQ)(n,e.operatorDataCache).parentDataCacheMap.entries()).map(([e,t])=>[e,c(t)]).filter(e=>void 0!==e[1]))},c=e=>{if(!e?.schema?.length)return;let t=e.schema.filter(e=>e.name).map(t=>{let n=e.rows.slice(0,5).map(e=>{if(!(t.name in e))return"";let n=e[t.name];if(null==n)return"";let r="";if("string"==typeof n)r=n;else try{r=JSON.stringify(n)}catch(e){r=n.toString()}return r.length>500&&(r=r.slice(0,500)+"..."),r});return{name:t.name,type:t.type,sampleValues:n}});return t.length>0?t:void 0},p=(e,t)=>{let n=e.operatorDataCache.get(t);return{columns:c(n),errorMessage:n?.error?.toString()}},f=(e,t)=>crypto.subtle.digest("SHA-256",new TextEncoder().encode(e)).then(e=>{let n=Array.prototype.map.call(new Uint8Array(e),e=>("00"+e.toString(16)).slice(-2)).join("");return t?n.substring(0,t):n}),m=(e,t,n,r,i,a,o)=>{let s=t.getRequestResponseHistory();if(0===s.length)return;let l=s.map(e=>{if(!e.request)return e;let t=e.request.openAIRequestBody.messages.map(e=>{if(!Array.isArray(e.content))return e;let t=e.content.filter(e=>"image_url"!==e.type);return{...e,content:t}});return{...e,request:{...e.request,openAIRequestBody:{...e.request.openAIRequestBody,messages:t}}}}),u=new Date,d=u.toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}),c=u.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0,timeZone:"UTC"});return{name:`LakeBuilder DAG prompt ${d} ${c} UTC`,metadata:{created:u.toISOString(),ui_version:window.__DATABRICKS_CONFIG__?.servedVersion||"unknown",workspace_id:n,notebook_id:r,user_email:i,current_url:window.location.href,session_id:a,prompt_id:a,catalog:e.catalog??"",schema:e.schema??"",language:e.languageType},initial_message_history:t.initialMessageHistory,conversation_history:l,...o&&{human_eval:{correctness:o.correctness,guidelines:o.guidelines}}}},g=e=>{let t=e?.output?.[0]?.content?.[0]?.text;if(!t)return!1;return t.includes(r.F2)},h=e=>e===r.F2,y=e=>e===r.je;function _(e,t,n,r,s){(0,o.wi)({lakesense_log:{event_type:a.p_.AGENT_RUN_ERROR,event_name:function(e){if(e instanceof i.Tr){let t=e.errorMessage||e.code;return e.code!==t?`${e.code}: ${t}`:t}if(e instanceof Error){let t=e.name||"UnknownError";return e.message?`${t}: ${e.message}`.slice(0,120):t}let t=String(e).slice(0,100);return t?`UnknownError: ${t}`.slice(0,120):"UnknownError"}(e),lakesense_trace_id:r,lakesense_client_id:t,lakesense_session_id:s,model_type:n,error_code:e instanceof i.Tr?e.parsedErrorCode:void 0,model_generated_error_message:e instanceof i.Tr?e.parsedErrorMessage||e.errorMessage:e instanceof Error?e.message:String(e),retryable:e instanceof i.Tr?e.retryable:void 0,agent_name:"lakebuilder"}})}},974901:(e,t,n)=>{n.d(t,{H9:()=>d,XM:()=>f,YU:()=>g,iF:()=>c,l:()=>p,uA:()=>u});var r=n(692738),i=n(351992),a=n(845690),o=n(998437),s=n(186031),l=n(295745);function u(e){return(0,r.useMemo)(()=>({key:`lakebuilder-dag-viewport-${e}`,version:1,scoped:!0}),[e])}function d(){let{getViewport:e,setCenter:t}=(0,o.VH)();return{centerOnPosition:(0,r.useCallback)((n,r={})=>{let i=e(),a=n.x+(l.$Z+l.Jw)/2/i.zoom,o=r.zoom||i.zoom;t(a,n.y,{zoom:o,duration:r.duration||s.U.STANDARD})},[e,t])}}function c(){let{fitView:e}=(0,o.VH)();return(0,r.useCallback)(t=>{e({maxZoom:l.Ik,...t})},[e])}function p({node:e,currentViewport:t,containerWidth:n,containerHeight:r}){if(!t)return!1;let{x:i,y:a,zoom:o}=t,s=e.position,l=e.width??0,u=e.height??0,d=s.x*o+i,c=s.y*o+a;return d>=0&&d+l*o<=n&&c>=0&&c+u*o<=r}function f({currentViewport:e,nodes:t,containerRef:n,minimapRef:a,overlapRefs:o}){let s=function({currentViewport:e,nodes:t,containerRef:n,minimapRef:a,overlapRefs:o}){let[s,l]=(0,r.useState)(!1),u=(0,i.w)({ref:n,debounceTimeMs:150});return(0,r.useEffect)(()=>{if(!e||!n.current||!a.current)return;let r=n.current.getBoundingClientRect(),i=a.current.getBoundingClientRect(),s=function({nodes:e,currentViewport:t,containerWidth:n,containerHeight:r}){return e.every(e=>p({node:e,currentViewport:t,containerWidth:n,containerHeight:r}))}({nodes:t,currentViewport:e,containerWidth:r.width,containerHeight:r.height}),u=o.some(e=>{if(!e.current)return!1;let t=e.current.getBoundingClientRect();return!(t.right<i.left||t.left>i.right||t.bottom<i.top||t.top>i.bottom)});l(s||u)},[t,n,a,o,e,u]),s}({currentViewport:e,nodes:t,containerRef:n,minimapRef:a,overlapRefs:o}),[l,u]=(0,r.useState)(!1),d=(0,r.useRef)(null),[c,m]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=n.current;if(!e)return;let t=()=>m(!0),r=()=>m(!1);return e.addEventListener("pointerdown",t),document.addEventListener("pointerup",r),document.addEventListener("pointercancel",r),()=>{e.removeEventListener("pointerdown",t),document.removeEventListener("pointerup",r),document.removeEventListener("pointercancel",r),d.current&&clearTimeout(d.current)}},[n]),{isHidden:s&&!c&&!l,onMouseEnter:(0,r.useCallback)(()=>{d.current&&(clearTimeout(d.current),d.current=null),u(!0)},[]),onMouseLeave:(0,r.useCallback)(()=>{d.current=setTimeout(()=>u(!1),300)},[])}}function m({viewport:e,prevCanvas:t,newCanvas:n}){return{x:e.x+(n.width-t.width)/2,y:e.y+(n.height-t.height)/2,zoom:e.zoom}}function g({id:e,isActive:t,setHasInitLayout:n,dagWrapperRef:i,reactFlowInstance:o,currentViewport:s}){let d=u(e),c=(0,r.useMemo)(()=>({key:`lakebuilder-dag-canvas-${e}`,version:1,scoped:!0}),[e]),p=(0,r.useRef)({width:0,height:0}),f=(0,r.useRef)(!1);(0,r.useEffect)(()=>{if(!s)return;(0,a.fc)(d,s)},[s,d]),(0,r.useEffect)(()=>{let e=i.current;if(!e||!o)return;let t=new ResizeObserver(e=>{for(let t of e){let e={width:t.contentRect.width,height:t.contentRect.height};if(0===e.width||0===e.height)return;let n={width:p.current?.width??0,height:p.current?.height??0};if(0!==n.width&&0!==e.width&&n.width!==e.width||0!==n.height&&0!==e.height&&n.height!==e.height){let t=m({viewport:o.getViewport(),prevCanvas:n,newCanvas:e});o.setViewport(t)}(0,a.fc)(c,e),p.current=e}});return t.observe(e),()=>t.disconnect()},[c,i,o]),(0,r.useEffect)(()=>{if(!o||!t){t||(f.current=!1);return}if(f.current)return;f.current=!0;let e=(0,a.pj)({...d,initialValue:null}),r=(0,a.pj)({...c,initialValue:null}),s={width:i.current?.clientWidth??0,height:i.current?.clientHeight??0};if(e&&r){let t=m({viewport:e,prevCanvas:r,newCanvas:s});o.setViewport(t)}else o.getNodes().length>0?o.fitView({maxZoom:l.Ik}):o.setViewport(l.c$);p.current=s,n(!0)},[o,c,d,i,n,t])}},977579:(e,t,n)=>{n.d(t,{O:()=>s});var r=n(335747),i=n(101499),a=n(61170);class o extends Error{constructor(e){super(`localAction('${e}') called inside a MobX reaction effect. This creates multi-tab sync loops that generate infinite requests. Move this call to an explicit user-initiated action instead.`),this.name="ReactionWriteBackError"}}function s(e){if((0,i.Q0)()&&(0,r.sG)().isRunningReactions){let t=new o(e);throw a._.error(t),(0,i.oT)()&&window.onerror?.(t.message,document.location.href,0,0,t),t}return{origin:e}}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/91668.dd7546bae2.chunk.js.map