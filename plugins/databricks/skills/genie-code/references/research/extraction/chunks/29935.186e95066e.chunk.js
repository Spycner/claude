"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[3217,29935],{2382:(e,t,n)=>{n.d(t,{z:()=>s});var r=n(297768),i=n(886100),o=n(22191),a=n(747129);let s=(e,t,n)=>{if(!t)return new Set;let s=new Set([t.IDENTIFIER,t.BACKQUOTED_IDENTIFIER,t.STRING,t.DOUBLEQUOTED_STRING,t.INTEGER_VALUE,t.DECIMAL_VALUE,t.RIGHT_PAREN,t.RIGHT_BRACKET,t.BIGINT_LITERAL,t.SMALLINT_LITERAL,t.TINYINT_LITERAL,t.FLOAT_LITERAL,t.DOUBLE_LITERAL,t.BIGDECIMAL_LITERAL]);try{let l=e?.trim();if(!l)return new Set;let u=r.Zo.fromString(l),c=new t(u);c.removeErrorListeners(),c.addErrorListener({syntaxError:()=>{},reportAttemptingFullContext:()=>{},reportContextSensitivity:()=>{},reportAmbiguity:()=>{}});let d=new r.jB(c);d.fill();let m=new Set,p=t.WS,f=t.WS;for(let e=0;d.get(e).type!==r.ou.EOF;e++){let r=d.get(e);if(r.type===t.SIMPLE_COMMENT||r.type===t.BRACKETED_COMMENT)continue;let i=e>=2&&n(d.get(e-2));if(!s.has(p)&&!i&&f===t.COLON&&r.text){if(r.type===t.IDENTIFIER||n(r))m.add(r.text);else if(r.type===t.BACKQUOTED_IDENTIFIER){let e=r.text,t=e.substring(1,e.length-1);t.trim().length>0&&m.add(t)}}p=f,f=r.type}return i.iT.sev2BurnRate(o.Es.Lakeview,"Lexing query text for SEA parameter markers",a.i1.P99,a.Ip.Min10,!0),m}catch(n){return i.iT.sev2BurnRate(o.Es.Lakeview,"Lexing query text for SEA parameter markers",a.i1.P99,a.Ip.Min10,!1,{error:n,lexer:t?.name,queryText:e}),new Set}}},40984:(e,t,n)=>{n.d(t,{S:()=>a,a:()=>o});let r=e=>e.filter(e=>void 0!==e).join(",").toLowerCase(),i=e=>{let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n)|0;return t},o=({query:e,location:t,source:n})=>i(r([e,t?.first_line,t?.first_column,n])),a=({query:e,location:t,catalog:n,schema:o,precedingCreatedIdentifiers:a})=>i(r([e,t?.first_line,t?.first_column,n,o,...a]))},134763:(e,t,n)=>{n.d(t,{DY:()=>c,LS:()=>u,sE:()=>l});var r=n(610435),i=n(692738),o=n(394917),a=n(886100),s=n(22191);let l=i.createContext(void 0);function u({children:e}){let t=(0,o.f)();return(0,r.Y)(l.Provider,{value:t,children:e})}function c(){let e=i.useContext(l);if(void 0===e)return a.iT.sev2(s.Es.Editor,"AutoInlineSuggestionContextProvider","useAutoInlineSuggestionEnabled must be used within a AutoInlineSuggestionContextProvider",!0),(0,o.W)();return e}},291414:(e,t,n)=>{n.d(t,{$r:()=>k,Ck:()=>O,Jg:()=>P,aB:()=>A,lT:()=>D,up:()=>N,vR:()=>_,yz:()=>S});var r=n(137797),i=n(870538),o=n(30472),a=n(494650),s=n(547186),l=n(130218),u=n(810616),c=n(580500),d=n(884532),m=n(357315),p=n(26026),f=n(82102),h=n(684174),g=n(832646),y=n(790233),E=n(712801),b=n(907840),v=n(228061),I=n(727303);function w(e,t,n,r,i,o,a){try{var s=e[o](a),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(r,i)}function T(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var o=e.apply(t,n);function a(e){w(o,r,i,a,s,"next",e)}function s(e){w(o,r,i,a,s,"throw",e)}a(void 0)})}}function k(e){let t=e?`${e}/*.yml`:'"*.yml"';return`include:
  - ${t}`}function _(e,t,n){return T(function*(e,t,n,r=!0,s={}){let{includeSuggestedContent:l=!(0,o.Su)()}=s;yield L(e,t,r);let u=S(n.name),c=(0,i.As)({resources:{jobs:{[u]:{...n,queue:{enabled:!0}}}}}),m=l?`${c}
      # tasks:
      #   - task_key: notebook_task
      #     notebook_task:
      #       notebook_path: ../path/to/notebook.ipynb
      # email_notifications:
      #   on_failure:
      #     - ${(0,d.J3)()}
      # trigger:
      #   # Run this job every day, exactly one day from the last run; see https://docs.databricks.com/api/workspace/jobs/create#trigger
      #   periodic:
      #     interval: 1
      #     unit: DAYS
`:c;return C(t,n.name,m,r,a.jT)}).apply(this,arguments)}function A(e,t,n,o,s=!0){return T(function*(){var l,u,d,p;yield L(e,t,s);let f=yield(l=e.projectRootFolderNode,u=t,d=n,p=s,T(function*(){if(!l||!l.attributes?.path_name)throw new P;try{let e,t,n,i,o,s,f=(0,c.Uk)(l.name),h=yield(0,m.qA)(Number(f),d,"python");if(!h.id)throw Error("Sample notebook could not be created");let g=(0,v.ib)(h.id.toString()),y=yield(0,m.Px)(g);if(!y)throw Error("Notebook model could not be loaded");y.addCommand((t=(e=new Date).getMonth(),n=e.getDate(),i=e.getHours(),o=e.getMinutes().toString().padStart(2,"0"),s=`${["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"][t]}_${n}_${i}${o}`,`import dlt
from pyspark.sql.functions import col, udf
from pyspark.sql.types import FloatType


# This file defines a sample transformation.
#
# Prefer to use SQL? See https://docs.databricks.com/dlt/tutorial-pipelines
# for a reference with examples.


@udf(returnType=FloatType())
def distance_km(distance_miles):
    """Convert distance from miles to kilometers (1 mile = 1.60934 km)."""
    return distance_miles * 1.60934

@dlt.table
def sample_trips_may_${s}():
    return (
        spark.read.table("samples.nyctaxi.trips")
        .withColumn("trip_distance_km", distance_km(col("trip_distance")))
    )`),0,!1);let E=`${l.attributes.path_name}/${h.name}`,b=yield x(u,d,p,a.cE),I=(0,r.dirname)(b);return(0,r.relative)(I,E)}catch(e){throw new P}})()),h=S(n),g=yield function(e,t,n,r=!0){return T(function*(){if(!n)return[];let i="file";if(!(n.endsWith(".py")||n.endsWith(".sql")||n.endsWith(".ipynb"))){i="notebook";let o=yield x(e,t,r,a.cE),s=(0,E.t4)({path:n,sourceFile:o})||n,l=yield R(s);if(!l)throw new D;n=`${n}${l}`}return[{[i]:{path:n}}]})()}(t,n,f,s),y=(0,i.As)({resources:{pipelines:{[h]:{name:n,libraries:g,serverless:!0,catalog:o,target:`${h}_\${bundle.environment}`}}}});return C(t,n,y,s,a.cE)})()}let S=e=>{let t=(0,b.e)(e);return/^[0-9]/.test(t)?`_${t}`:t};function C(e,t,n,i,o){return T(function*(){let a=yield x(e,t,i,o),l=(0,r.dirname)(a);if(i&&!(yield(0,p.T)(l))&&(yield(0,u.x)({parent:e.name,node:{node_name:I.ln}})),yield(0,p.T)(a))throw new N;if(200!==(yield s.cM.saveFile(a,n)).status)throw new z;return(yield(0,p.T)(a)).id})()}function x(e,t,n,r){return T(function*(){let i=e.attributes.path_name,o=`${i}/${I.ln}`;return`${n?o:i}/${t}${r}`})()}let R=e=>T(function*(){try{let t=(yield g.H.getStatus(e)).object_id;(0,f.$o)().get(t)||(yield new Promise((e,n)=>window.conn.prefetchNode(t,e,n)));let n=(0,h.Z)((0,f.$o)(),t),r=n?.get("reposExportFormat"),i=n?.get("language");if(r===l.AV.Jupyter)return".ipynb";let o=i?.toUpperCase();return o?"."+(0,y.Q)(o):void 0}catch{return}})(),L=(e,t,n)=>T(function*(){if(n&&e.isResourcesFolderImportedInBundle&&!e.isResourcesFolderImportedInBundle())throw new O(I.ln);if(!n&&e.isFolderImportedInBundle){var r;let n=yield(r=e.projectRootFolderNode,T(function*(){let e=t.attributes?.path_name||"",n=e,i=(r?.attributes?.path_name||"")+"/";return e+"/"===i?n="":e.startsWith(i)&&(n=e.slice(i.length)),n})());if(!e.isFolderImportedInBundle(n))throw new O(n)}})();class O extends Error{relativePath;constructor(e){super("Resources not imported"),this.relativePath=e}}class N extends Error{constructor(){super("Definition already exists")}}class P extends Error{constructor(){super("Failed to create notebook")}}class D extends Error{constructor(){super("Notebook not found")}}class z extends Error{constructor(){super("Failed to create job")}}},356579:(e,t,n)=>{n.d(t,{O4:()=>b,om:()=>E});var r=n(610435),i=n(247066),o=n(692738),a=n(886100),s=n(22191),l=n(748592),u=n(759458),c=n(40984),d=n(221095),m=n(105026);let p={max:1e3,ttl:18e6},f=()=>({max:1e3,ttl:18e6,maxSize:(0,m._Z)(),sizeCalculation:d.$}),h=(e={})=>(0,u.Ay)((t,n)=>({module:"default",syntaxParseResultCache:new i.q((0,m.GF)()?f():p),getSyntaxParseResultFromCache:({query:e,location:t,source:r})=>{let i=(0,c.a)({query:e,location:t,source:r}),{syntaxParseResultCache:o}=n(),a=o.get(i);if(!1===a)return null;return a},setSyntaxParseResultInCache:({query:e,location:t,source:r,syntaxError:i})=>{let o=(0,c.a)({query:e,location:t,source:r}),{syntaxParseResultCache:a}=n();a.set(o,i??!1)},tokenParseResultCache:new i.q((0,m.GF)()?f():p),getTokenParseResultFromCache:({query:e,location:t,catalog:r,schema:i,precedingCreatedIdentifiers:o})=>{let a=(0,c.S)({query:e,location:t,catalog:r,schema:i,precedingCreatedIdentifiers:o}),{tokenParseResultCache:s}=n();return s.get(a)},setTokenParseResultInCache:({query:e,location:t,catalog:r,schema:i,tokens:o,precedingCreatedIdentifiers:a})=>{let s=(0,c.S)({query:e,location:t,catalog:r,schema:i,precedingCreatedIdentifiers:a}),{tokenParseResultCache:l}=n();l.set(s,o)},clearTokenParseResultCache:()=>{let{tokenParseResultCache:e}=n();e.clear()},...e})),g=(0,l.W)(()=>h(),!0),y=(0,o.createContext)(null),E=({module:e,children:t})=>{let[n]=(0,o.useState)(()=>h({module:e}));return(0,r.Y)(y.Provider,{value:n,children:t})};function b(e,t){let n,r=(n=(0,o.useContext)(y)??g.getActiveValue(),(0,o.useEffect)(()=>{if("default"===n.getState().module){let e=Error();a.iT.sev3(s.Es.Editor,"EditorSqlGlobalContextStoreProvider not found in the component tree",e.stack)}},[n]),n);return(0,u.Pj)(r,e,t)}},357315:(e,t,n)=>{n.d(t,{EA:()=>y,Px:()=>m,fI:()=>h,nt:()=>g,qA:()=>p});var r=n(22191),i=n(886100),o=n(747129),a=n(693277),s=n(267990),l=n(472557),u=n(770945);function c(e,t,n,r,i,o,a){try{var s=e[o](a),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(r,i)}function d(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var o=e.apply(t,n);function a(e){c(o,r,i,a,s,"next",e)}function s(e){c(o,r,i,a,s,"throw",e)}a(void 0)})}}function m(e){return d(function*(){return(0,u.EY)(e)})()}function p(e,t,n){return d(function*(){return(0,l.I)({notebookAttributes:{name:t,language:n,clusterId:"",parentNode:{id:e},withDefaultBaseEnvironment:!1}})})()}let f=new Set([s.I2.TOOLZ_HINT,s.I2.JUPYTER_WIDGET_VIEW,s.I2.EMPTY_TABLE,s.I2.H3_HINT,s.I2.TORCH_DISTRIBUTED_HINT,s.I2.SPARK_ML_HINT,s.I2.AUTORELOAD_DISCOVERABILITY,s.I2.DIRECT_TO_WEBTERMINAL,s.I2.DIRECT_TO_TYPE_CHECKING,s.I2.DISPLAY_DF_HINT,s.I2.LAKEFLOW_CONVERSION_WIDGET,s.I2.MLFLOW_TRACE_HINT,s.I2.SERVERLESS_OVERSPEND_WARNING]);function h(e){if(!e)return;if(!Array.isArray(e.data))throw Error("Expected ListResults");if(0===e.data.length)return;let t=e.data.filter(e=>e.type===s.ai.ANSI),n=e.data.filter(e=>e.type!==s.ai.ANSI&&!(e.type===s.ai.MIME_BUNDLE&&Object.keys(e.data??{}).some(e=>f.has(e))));if(n.length>0){let e=n.map(e=>{if(e.type===s.ai.MIME_BUNDLE){let t=Object.keys(e.data??{});return`${e.type}(${t.join(", ")})`}return e.type});i.iT.sev2BurnRate(r.Es.DabsAuthoring,"Unexpected non-ANSI result in the runner output",o.i1.P99,o.Ip.Min10,!1,`Expected all results to be AnsiResult, got [${e.join(", ")}]`)}if(0===t.length)return;return t}function g(e){let t=h(e);if(t)return t.filter(e=>"stderr"!==e.name).reduce((e,t)=>e+t.data,"");return""}function y(e){if(!e)return;if(a.eY.isInTerminalState(e))return a.eY.isFailed(e)?"error":"finished";if(a.eY.isCancelling(e))return"cancelling";return"running"}},502451:(e,t,n)=>{n.d(t,{N:()=>i});var r=n(441535);function i(){return(0,r.W)("databricks.fe.unifiedTagging.enableGetTagApiForEditorStrikethrough",!1)}},503217:(e,t,n)=>{n.a(e,async(e,r)=>{try{n.r(t),n.d(t,{CodeBlockWrapper:()=>i.G,HighlightedCode:()=>o.d,HighlightedCodeForStreaming:()=>o.O,ReadOnlyCodeBlock:()=>a.p});var i=n(981463),o=n(26150),a=n(803134),s=e([o,a]);[o,a]=s.then?(await s)():s,r()}catch(e){r(e)}})},514067:(e,t,n)=>{n.d(t,{E:()=>i});var r=n(692738);function i(e,t){r.useEffect(()=>{var n;if(!t)return;let r=new AbortController;return(n=r.signal,new Promise((e,t)=>{let r,i;requestAnimationFrame(function o(a){if(n.aborted)return void t();r??=a;let s=i;i=document.activeElement,a-r>=3e3||i!==s&&null!==i&&function(e){let t=e;for(;null!==t;){if("dialog"===t.getAttribute("role"))return!0;t=t.parentElement}return!1}(i)?e():requestAnimationFrame(o)})})).then(()=>{e.current&&e.current.focus()}).catch(()=>{}),()=>{r.abort()}},[t,e])}},520640:(e,t,n)=>{n.d(t,{C4:()=>y,fQ:()=>b,wL:()=>E});var r=n(452137),i=n.n(r),o=n(269789),a=n.n(o),s=n(692738),l=n(342411),u=n(595615),c=n(988512),d=n(103341),m=n(710343),p=n(641760);function f(e,t,n,r,i,o,a){try{var s=e[o](a),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(r,i)}function h(){let e=(0,l.tz)();return(0,s.useCallback)(({dataSource:t,catalog:n,schema:r,table:o})=>({queryKey:["describe_detail",n,r,o,(0,m.pl)(t),!!t?.status.isReady],queryFn:()=>{var a;return(a=function*(){if(i()(void 0!==n,"'catalog' must be set"),i()(void 0!==r,"'schema' must be set"),i()(void 0!==o,"'table' must be set"),!(0,p.jN)({catalog:n}))return null;if(t?.status.isReady)try{return yield(0,d.M)({dataSource:t,queryString:(0,c.y)(t).generateDescribeDetailSQL(r,o,n),queryName:"describe_detail"})}catch(e){if(g(e))return null;throw e}if(!t)throw new m.Lx(t,`Data source is required to fetch columns from ${n}.${r}.${o}`);throw new m.Lx(t,e.formatMessage({id:"gUwluy",defaultMessage:"Listing columns requires an active compute resource"}))},function(){var e=this,t=arguments;return new Promise(function(n,r){var i=a.apply(e,t);function o(e){f(i,n,r,o,s,"next",e)}function s(e){f(i,n,r,o,s,"throw",e)}o(void 0)})})()}}),[e])}let g=e=>e?.name==="SqlQueryError"&&e?.message?.includes?.("EXPECT_TABLE_NOT_VIEW.NO_ALTERNATIVE");function y(e,t){let n=h();return(0,u.AO)({...n(e),...t})}function E(){return(0,u.Ox)({queryFn:h})}function b(e){function t(e){let t=Number(e);if(!Number.isFinite(t))return;if(t>Number.MAX_SAFE_INTEGER)return"> 9.0PiB";return a()(t).format("0[.]0ib")}if(e?.sizeInBytes||e?.numFiles)return{bytes:e.sizeInBytes?t(e.sizeInBytes):void 0,files:"number"==typeof e.numFiles?String(e.numFiles):e.numFiles??void 0};if(e?.statistics){let n;if("string"==typeof e.statistics?n=e.statistics.match(/(\d+) bytes/):e.statistics.length>0&&(n=e.statistics.map(e=>e?.[1]?.match?.(/(\d+) bytes/)).find(e=>null!==e)),n)return{bytes:t(n[1])}}return{}}},526147:(e,t,n)=>{n.d(t,{O4:()=>r.O4,g2:()=>i.g,kh:()=>i.k,om:()=>r.om});var r=n(356579),i=n(886493)},540849:(e,t,n)=>{n.a(e,async(e,r)=>{try{n.d(t,{l:()=>m});var i=n(610435);n(692738);var o=n(497895),a=n(339518),s=n(503217),l=n(342411),u=n(954879),c=n(291414),d=e([s]);function m({relativePath:e}){let t=(0,u.I)(e=>e.rootBundleData?.include),{theme:n}=(0,o.wn)(),r=Array.isArray(t)&&t.length>0?(0,i.FD)(i.FK,{children:[(0,i.Y)(l.sA,{id:"I64HeK",defaultMessage:"Resource definitions for this bundle are loaded from the following {count, plural, =1 {path} other {paths}}:",values:{count:t.length}}),(0,i.Y)("ul",{children:t.map(e=>(0,i.Y)("li",{children:e},e))}),(0,i.Y)(l.sA,{id:"ag3zj9",defaultMessage:"Either create this resource definition in {count, plural, =1 {the folder above} other {one of the folders listed above}}, or add the current folder to your databricks.yml:",values:{count:t.length}})]}):(0,i.Y)(i.FK,{children:(0,i.Y)(l.sA,{id:"iXeYNJ",defaultMessage:"Resource definitions are not loaded in databricks.yml. Add the current folder to your databricks.yml:"})});return(0,i.Y)(a.F,{componentId:"dabs-authoring.create-job-definition-form.resources-imported-failed-alert",closable:!1,message:(0,i.FD)(i.FK,{children:[r,(0,i.Y)("div",{style:{paddingTop:"8px"},children:(0,i.Y)(s.ReadOnlyCodeBlock,{theme:n.isDarkMode?"databricks-unified-dark":"databricks-unified-light",language:"text",children:(0,c.$r)(e)})})]}),type:"error"})}s=(d.then?(await d)():d)[0],r()}catch(e){r(e)}})},569885:(e,t,n)=>{n.d(t,{EY:()=>T,Qw:()=>w,ZP:()=>I,bA:()=>k,ns:()=>v});var r=n(692738),i=n(141078),o=n(837213),a=n(441535),s=n(169750),l=n(21994),u=n(667936),c=n(880797),d=n(267647),m=n(222006),p=n(570512),f=n(935963),h=n(607030),g=n(511022),y=n(629033);function E(e,t,n,r,i,o,a){try{var s=e[o](a),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(r,i)}function b(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var o=e.apply(t,n);function a(e){E(o,r,i,a,s,"next",e)}function s(e){E(o,r,i,a,s,"throw",e)}a(void 0)})}}let v="/optimize",I="Optimize my code",w=`You are an SQL Analyst and performance expert in Databricks SQL. Your job is first to find some of the following optimizations, then propose a new SQL query in a code block with the optimizations applied.

Please use your own judgment as to whether or not you should suggest the optimizations. In particular, you must follow these guiding principles:
1. Leverage the schema of the active tables, it contains their columns names, types and if they are partitioned or not
2. You might see some examples of SQL queries, especially use their WHERE clauses and SELECT columns as inspiration
3. Check missing WHERE clause on at least one partition column, e.g. "some_partition_column = 'some_value_in_column'"
4. Check missing WHERE clause on at least one date/time column, e.g. not having "some_date_column >= date_sub(current_date(), 30)"
5. If it is a "SELECT *", propose a "SELECT" with a subset of 3-6 popular/useful columns
6. If there is no "LIMIT" propose "LIMIT 1000" to avoid returning too many rows
7. Use Common Table Expressions (CTE) on statement of more than 50 lines or doing sub queries.

Those are the guidelines when rewriting the query if you found some optimizations:
1. EDIT the SQL code with the optimizations, do not just add them as comments
2. Say you could not find optimizations if you can't find any
3. Do not change existing logic that would produce different results
4. Do not change code comments, text case, formatting that are not related to the optimizations
5. "GROUP BY ALL" is a valid SQL syntax shortcut representing all the columns in the SELECT clause
6. DO NOT list or talk about the optimization rules you did not apply in the new code

If asked for some follow-up questions here is some inspiration:
1. Propose to look at more documentation
2. Ask to analyse the query profile
3. Show how to check the query plans with the "EXPLAIN" command
`,T="optimizeCodeAgent",k=({getTablesInAllCodeBlocks:e,source:t,userId:n,...E})=>{let I=(0,i.mK)();return(0,r.useMemo)(()=>({name:T,makeContext:(0,d.x)({makeContext:({context:t={},userMessage:r,promptId:i})=>b(function*(){let{currentCodeBlock:o={language:"",code:""}}=t??{},{language:d,code:v}=o,w={index:1,sourceMap:{}},k={contextObject:t,apolloClient:I,agentName:T,userMessage:r,lakesenseTraceId:i,getTablesInAllCodeBlocks:e,citations:w,promptBuilderOptions:{isCompletion:(0,a.W)("databricks.fe.editor.enableCitationV2",!1)},...E},_={[s.E.RELEVANT_TABLE]:()=>(0,l.TN)({...k}),[s.E.USER_QUERIES]:()=>(0,u.$O)({...k,userId:n}),[s.E.NOTEBOOK_CELLS]:()=>(0,m.Bc)({...k,userId:n}),[s.E.DOCS_SEARCH]:()=>b(function*(){let e=yield(0,g.kA)({model:(0,f.f)(),messageHistory:[],newUserMessage:{role:h.oW.user,content:`The Databricks SQL query is:
\`\`\`sql
${v}
\`\`\`

In two steps:

1. Find 1 to 3 SQL query optimization areas for this particular query:

<possible optimization area 1>
<possible optimization area 2>
<possible optimization area 3>

2. Recommend a Web search query I could use to find documentations for each of those optimization areas.

Reply with only the search queries in this exact format:

<possible search query 1>
<possible search query 2>
<possible search query 3>
`},metadata:{clientId:y.O.EditorAssistant,traceId:i??"",agentName:T},stream:!1}),t=e[0].message.content?.toLowerCase().split("\n").filter(e=>""!==e.trim()).map(e=>`"${e}"`).join(" OR ")??"/optimizer optimize SQL";return(0,c.ar)({...k,query:t})})()},A=yield Promise.all(Object.values(_).map(e=>e())),S=A.filter(e=>""!==e.prompt).map(e=>e.prompt.slice(0,6e3)).join("\n");return{prompt:`Here is the sql code to optimize: 
\`\`\`${d}
${v}
\`\`\`
${S}`,citations:w,...(0,p.Az)(A)}})(),agentName:T}),userMessageMatchesAgent:e=>e.startsWith(v),extractHistory:()=>[],get model(){return(0,f.f)()},instructions:e=>w+(e.includes("gpt-4")?(0,a.W)("databricks.fe.editor.enableCitationV2",!1)?`

${o.u4}`:`

${o.nA}`:"")+(e.includes("gpt-4")?`
${o.Eq}`:""),responseFormat:(0,a.W)("databricks.fe.editor.streamingStructureOutput",!1)?_:void 0}),[I,e,E,n])},_={type:"json_schema",json_schema:{strict:!0,name:"response",schema:{type:"object",properties:{response:{type:"string",description:"Optimized code"},citations:{type:"array",items:{type:"object",properties:{url:{type:"string",description:"Url of the citation, link of the citation"},text:{type:"string",description:"Name of a citation, it can be several words that describe the citation"},type:{type:"string",description:"Type of a citation, it can be a doc, notebook, query ..."}},description:"If you cite anything in the context BEGIN_RELATED_PASSAGES part to generate the optimize code, please provide the citation here",required:["url","text","type"],additionalProperties:!1}}},required:["response","citations"],additionalProperties:!1}}}},586852:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(610435),i=n(692738),o=n(375214);function a(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"m15.06 8.03-7.03 7.03L6.97 14l5.22-5.22H1v-1.5h11.19L6.97 2.06 8.03 1z",clipRule:"evenodd"})})}let s=(0,i.forwardRef)((e,t)=>(0,r.Y)(o.I,{ref:t,...e,component:a}));s.displayName="ArrowRightIcon";let l=s},596185:(e,t,n)=>{n.d(t,{I:()=>r,d:()=>i});let r=e=>({name:e,signature:e+"()",arguments:[],returnTypes:[],draggable:e+"()",examples:[]}),i=e=>({name:e.name,signature:`${e.name}(${e.input_params?.parameters.map(e=>e.name).join(", ")??""})`,arguments:e.input_params?.parameters.map(e=>[{name:e.name,type:e.type_name}])??[],altArguments:[],description:e.comment,body:e.routine_definition,returnTypes:e.data_type?[e.data_type]:[],returnDoc:"",draggable:`${e.name}()`,described:!1,isWindow:!1,isAggregate:!1,needsDescriptionFetched:!1,examples:[]})},712801:(e,t,n)=>{n.d(t,{Ir:()=>a,t4:()=>o,zA:()=>i});var r=n(137797);let i=e=>e.match(/^\w+:/),o=({path:e,sourceFile:t})=>{if(!e)return null;if(i(e)||(0,r.isAbsolute)(e))return e;return(0,r.resolve)((0,r.dirname)(t),e)},a=({path:e,sourceFile:t,root:n})=>{if(!e)return;if(i(e)||!(0,r.isAbsolute)(e))return e;let o=(0,r.relative)(n,e);if(!(o&&!o.startsWith("..")&&!(0,r.isAbsolute)(o)))return e;return(0,r.relative)((0,r.dirname)(t),e)}},743603:(e,t,n)=>{n.a(e,async(e,r)=>{try{n.d(t,{O:()=>l});var i=n(692738),o=n(698744),a=n(214056),s=e([a]);a=(s.then?(await s)():s)[0];let l=({editorInstance:e,placeholder:t,isEnabled:n,showOnlyWhenFocused:r})=>{let s=(0,i.useRef)(null),l=(0,i.useCallback)(e=>{if(!s.current){let n=document.createElement("div");n.setAttribute("style",e),n.setAttribute("class","monaco-placeholder"),(0,o.render)(t,n),s.current=n}let n=s.current;return{getId:()=>"placeholder",suppressMouseDown:!0,getDomNode:()=>n,getPosition:()=>({position:{column:1,lineNumber:1},positionAffinity:4,preference:[0]})}},[t]),u=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(e&&n){let t=()=>{u.current&&e.removeContentWidget(u.current),u.current=null},n=()=>{if(!e.getValue()&&(!r||e.hasTextFocus()))if(u.current)e.layoutContentWidget(u.current);else{let t=l(`width: max-content;
color: var(--vscode-input-placeholderForeground);
line-height: ${e.getOption((0,a.Q)().EditorOption.lineHeight)}px;
font-size: ${e.getOption((0,a.Q)().EditorOption.fontSize)}px;
font-family: ${e.getOption((0,a.Q)().EditorOption.fontFamily)};
`);e.addContentWidget(t),u.current=t}else t()};(!r||e.hasTextFocus())&&n();let i=[];return i.push(e.onDidFocusEditorText(()=>n())),i.push(e.onDidBlurEditorText(()=>n())),i.push(e.onDidChangeModelContent(()=>{n()})),()=>{i.forEach(e=>e.dispose()),t(),s.current&&((0,o.unmountComponentAtNode)(s.current),s.current=null)}}},[e,n,l,r]),{placeholderWidgetRef:u}};r()}catch(e){r(e)}})},777229:(e,t,n)=>{n.d(t,{F:()=>i});var r=n(886100);function i(e,{eventId:t,failExplicitly:n=!1,esComponent:o}){if(!n)return r.iT.sev2(o,"jaws:unreachable-code-path",{unexpectedValue:e,eventId:t}),e;throw Error(`Exhaustive check failed: ${JSON.stringify(e)} is unexpected or it was not exhaustively checked.`)}},790233:(e,t,n)=>{function r(e){switch(e){case"PYTHON":return"py";case"SCALA":return"scala";case"SQL":return"sql";case"R":return"r"}}n.d(t,{Q:()=>r}),n(137797),n(778529),n(993533),n(832646)},866153:(e,t,n)=>{n.d(t,{I:()=>i,w:()=>r});let r=(e,t)=>e.type>=t.ACCESS&&e.type<=t.ZONE,i=(e,t)=>e.type>=t.ADD&&e.type<=t.ZONE},886493:(e,t,n)=>{n.d(t,{g:()=>o,k:()=>a});var r=n(102876),i=n(356579);let o=()=>{let[e,t]=(0,i.O4)(e=>[e.getSyntaxParseResultFromCache,e.setSyntaxParseResultInCache],r.x);return[e,t]},a=()=>{let[e,t]=(0,i.O4)(e=>[e.getTokenParseResultFromCache,e.setTokenParseResultInCache],r.x);return[e,t]}},907840:(e,t,n)=>{n.d(t,{E:()=>s,e:()=>l});var r=n(631377),i=n.n(r),o=n(802558),a=n.n(o);function s(e,t){if(!e)return e;let n=i()(e);return Object.entries(n).forEach(([e,r])=>{let i=t[e];if(!i)return;let o=i.recurse?i.recurse(r):r;"value"in i&&a()(o,i.value)?delete n[e]:n[e]=o}),n}function l(e){return e.replace(/[^\p{L}\p{N}]+/gu,"_").replace(/(^_|_$)/g,"")||"_"}},976477:(e,t,n)=>{n.d(t,{$e:()=>I,Cc:()=>v,JE:()=>E,_S:()=>y,fh:()=>w,vd:()=>b});var r=n(692738),i=n(141078),o=n(278983),a=n(837213),s=n(441535),l=n(169750),u=n(21994),c=n(267647),d=n(667936),m=n(222006),p=n(570512),f=n(377936),h=n(935963);function g(e,t,n,r,i,o,a){try{var s=e[o](a),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(r,i)}let y="optimizeProfileAgent",E="/analyze",b="Analyze my profile",v=`You are a Databricks experienced data engineer who is debugging Databricks SQL queries and Python Spark DataFrames to find possible speed optimizations.

<<<Guidelines for Optimizations>>
You have access to the Query Profile top level metrics.

The top level metrics to size the query are:
- "rowsReadCount", "readBytes" (in general 10GB or less is not much data worth mentioning), "readPartitionsCount", "readFilesCount"
- If "totalTimeMs" is under 10000, we can still find optimizations but keep in mind the query is not that big
- If present, the "Costliest Query Operators" will tell in percentage which operations are taking the most time, memory or number of rows (more than 70% is worth mentioning)

The Optimization opportunities we are looking for are in priority:
1. Only related to scans and by modifying the query to read less data:
- Partitions skipped ("readPartitionsCount", "totalPartitionsCount") - do we still read too many partitions?
- Files skipped ("readFilesCount", "totalFilesCount", "prunedFilesCount") - are we still reading too many files?
- Bytes pruned ("readBytes", "prunedBytes") - are still reading too much data?
2. If the first "Costliest Query Operators" are not all "Scan Table", we can suggest optimizations on them
4. Focuses in particular on the WHERE clauses.
3. Never recommend to create indexes, materialized views, or any other database objects

<<<Guidelines for reply message>>
Explain if you see bad scan patterns and suggest optimizations.
- If the query is reading from cache, JUST SAY SO and say you cannot suggest optimizations (otherwise say nothing about it).
- Do not cite any of the Query Profile "metric names" or "Costliest Query Operators", just explain them in human terms (but CITE them as Query Profile relevant contexts).
- Be concise and only talk about optimization opportunities that you have data to back up.
- Use the higher up KB, MB, GB, TB instead of bytes to make it easier to read for humans.
- Have at least one Query Profile citation.

Please use your own judgment as to whether or not you should suggest a new SQL optimized query. In particular, you must follow these guiding principles:
1. Leverage the schema of the active tables, it contains their columns names, types and if they are partitioned or not
2. You might see some examples of SQL queries, especially use their WHERE clauses as inspiration
3. Do not change existing logic that would produce different results
4. Do not change code comments, text case, formatting that are not related to the optimizations

If asked for some follow-up questions and you need inspiration:
1. Recommend more aggressive filters if possible, especially on the partition columns, dates, or other columns with high cardinality
2. For metrics sometimes without a value (e.g. totalPartitionsCount is null), explain the user how to find them
3. Manually inspect more metrics in the query profile panel
`,I=`
You are a Databricks-experienced data engineer specializing in query performance optimization for Databricks SQL and Spark DataFrame workloads.

Your goal: analyze the provided Query Profile and Query Insights to find concrete optimization opportunities focused on reducing data scanned, avoiding expensive operators, and improving WHERE clauses — without changing query logic.

---

<<<Guidelines for Optimization Reasoning>>>

You have access to:
- Query Profile top-level metrics:
  - rowsReadCount, readBytes, readPartitionsCount, readFilesCount
  - Queries under 10 GB read or 10 s runtime are small but can still be optimized.
- Costliest Query Operators:
  - If one operator takes >70% of total time or memory, mention it.
- Query Insights:
  - Automated Databricks recommendations. Always address these first.

Optimization priorities:
1) Query Insights (system recommendations)
   - Each insight includes a suggested action — restate it clearly.
   - Merge any metric-based evidence that supports the same recommendation.
   - Always cite as Query Insight with the provided citation format.
2) Scan-related metrics
   - Look for unskipped partitions, files, or bytes.
   - Discuss whether pruning can be improved via WHERE clause filters.
3) Non-scan operators (e.g., join, aggregation)
   - Only mention if they dominate total runtime.
4) WHERE clause review
   - Suggest tighter filters using existing columns, especially partition columns.
5) Never suggest indexes, materialized views, or any other database objects.

---

<<<Guidelines for Reply Message>>>

Overall structure:
- Output must be in structured bullet points only (no paragraphs). Each bullet must be short, specific, and human-readable.
- Follow the outline below. If no findings exist for a section, omit that section entirely.
- If no Query Insights available, skip the first section and start with Metrics & Scan Patterns.

Output template:
## Query Insights
- Each insight must have its **own bullet point** and a short recommended action.
- Write in the format:
  Observation. → Recommendation.
  Example:
  Partition key unfiltered on birthDate. → Add a filter on birthDate to enable partition pruning and reduce scanned data.
  Optimizer statistics are partial. → Allow predictive optimization to collect stats or trigger manual ANALYZE if needed.
- If metrics support the same insight, merge the metric evidence into the corresponding insight bullet point (e.g., "supported by metrics showing 80% of data read unnecessarily").

## Metrics & Scan Patterns
- [Metric-based findings not already merged with insights, written as: Observation. → Recommendation.]

## Other Observations
- [Optional notes on join, aggregation, or filter logic, written in the same format.]

Merging rules (critical):
- Before generating output, compare all metric findings against the Query Insights.
- If both point to the same optimization (e.g., pruning partitions, filtering dates, skipping small files):
  - Merge them into the Query Insights section only.
- Do not repeat similar content in Metrics & Scan Patterns.

Tone and precision:
- Use human-readable units (KB, MB, GB, TB).
- Avoid using negative terms towards the systems, like "bad", "poor", "limitation" or "inefficient".
- Include at least one Query Profile citation.
- If the query reads from cache, state that and stop — do not continue.
- Do not mention metric or operator names literally; describe them in plain terms.
- Maintain consistent “Observation. → Recommendation.” phrasing in every bullet point.

---

<<<New SQL Optimized Query>>>

If you identified any optimization opportunity that can be safely expressed as a SQL rewrite, you need to output an optimized query. If not, skip this section.

Rules:
- Preserve identical logic and final output (no semantic change).
- You may tighten WHERE clauses, modify function parameter, replace functions, add missing partition filters, or apply safe join/order hints.
  - For partition filters, look at column names and types to be more specific. Do not suggest things like "IS NOT NULL"
- Keep all comments, casing, and formatting.

---

<<<Follow-up Questions (if asked)>>>

- Suggest stronger filters on partitions or dates.
- Explain how to check missing metrics (e.g., totalPartitionsCount).
- Guide the user to manually inspect Query Profile panels.

---

<<<Goal>>>

Deliver concise, sectioned, bullet-pointed recommendations that are:
- Grounded in Query Insights and Profile data.
- Merged intelligently to avoid duplication.
- Include a New SQL Optimized Query when applicable.
`,w=({getTablesInAllCodeBlocks:e,source:t,userId:b,...w})=>{let T=(0,i.mK)();return(0,r.useMemo)(()=>({name:y,makeContext:(0,c.x)({makeContext:({context:t={},userMessage:r,promptId:i})=>{var a;return(a=function*(){let{currentCodeBlock:a={language:"",code:""}}=t??{},{language:c,code:h}=a,g={index:1,sourceMap:{}},{getQueryProfileContext:E,getQueryInsightsContext:v}=yield(()=>{let e=()=>Promise.all([n.e(62280),n.e(62394),n.e(62621),n.e(25230),n.e(84904),n.e(66537)]).then(n.bind(n,731261));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(731261,"../context/configurableContext","lazy",e);return e()})(),I=/^\/analyze Query [0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(r||""),k=[];I&&(k=r?.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i)||[],(0,o.y)("clientsideEvent",{eventType:"optimize-profile",eventName:`analyze-${k.slice(0,1).join(",")}`,lakesenseTraceId:i,source:c}));let _={contextObject:t,apolloClient:T,agentName:y,userMessage:r,lakesenseTraceId:i,statementIds:k,getTablesInAllCodeBlocks:e,citations:g,promptBuilderOptions:{isCompletion:(0,s.W)("databricks.fe.editor.enableCitationV2",!1)},...w},A={[l.E.RELEVANT_TABLE]:()=>(0,u.TN)({..._}),[l.E.QUERY_PROFILE]:()=>E({..._}),[l.E.USER_QUERIES]:()=>(0,d.$O)({..._,userId:b}),[l.E.NOTEBOOK_CELLS]:()=>(0,m.Bc)({..._,userId:b})};(0,f.Yg)()&&(A[l.E.QUERY_INSIGHTS]=()=>v({..._}));let S=yield Promise.all(Object.values(A).map(e=>e())),C=S.filter(e=>""!==e.prompt).map(e=>e.prompt.slice(0,6e3)).join("\n");return{prompt:`Here is the code to optimize: 
\`\`\`${c}
${h}
\`\`\`
${C}`,citations:g,...(0,p.Az)(S)}},function(){var e=this,t=arguments;return new Promise(function(n,r){var i=a.apply(e,t);function o(e){g(i,n,r,o,s,"next",e)}function s(e){g(i,n,r,o,s,"throw",e)}o(void 0)})})()},agentName:y}),userMessageMatchesAgent:e=>e.startsWith(E),extractHistory:()=>[],get model(){return(0,h.f)()},instructions:e=>((0,f.Yg)()?I:v)+(e.includes("gpt-4")?(0,s.W)("databricks.fe.editor.enableCitationV2",!1)?`

${a.u4}`:`

${a.nA}`:"")+(e.includes("gpt-4")?`
${a.Eq}`:"")}),[T,e,w,b])}},977532:(e,t,n)=>{n.a(e,async(e,r)=>{try{n.d(t,{o:()=>s});var i=n(124235),o=n(83722),a=e([o]);function s(){let e=null;return{setup:({editorInstance:t})=>{let n,r=t._standaloneKeybindingService,a=(n=!(0,i.f8)(),(0,o.d)().flatMap(({command:e,keybindings:t,keybindingsOnWindows:r})=>(r&&n?r:t??[]).map(t=>({keybinding:t,command:"-"+e})))).filter(e=>(function(e,t){if(t?._dynamicKeybindings?.some?.(t=>t.command===e.command))return!1;return!0})(e,r));a.length>0&&(e=r.addDynamicKeybindings(a))},tearDown:()=>e?.dispose?.()}}o=(a.then?(await a)():a)[0],r()}catch(e){r(e)}})}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/29935.186e95066e.chunk.js.map