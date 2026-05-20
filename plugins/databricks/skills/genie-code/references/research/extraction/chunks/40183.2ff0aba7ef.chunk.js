"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[3217,40183,70165],{2382:(e,t,i)=>{i.d(t,{z:()=>a});var n=i(297768),r=i(886100),o=i(22191),s=i(747129);let a=(e,t,i)=>{if(!t)return new Set;let a=new Set([t.IDENTIFIER,t.BACKQUOTED_IDENTIFIER,t.STRING,t.DOUBLEQUOTED_STRING,t.INTEGER_VALUE,t.DECIMAL_VALUE,t.RIGHT_PAREN,t.RIGHT_BRACKET,t.BIGINT_LITERAL,t.SMALLINT_LITERAL,t.TINYINT_LITERAL,t.FLOAT_LITERAL,t.DOUBLE_LITERAL,t.BIGDECIMAL_LITERAL]);try{let l=e?.trim();if(!l)return new Set;let u=n.Zo.fromString(l),c=new t(u);c.removeErrorListeners(),c.addErrorListener({syntaxError:()=>{},reportAttemptingFullContext:()=>{},reportContextSensitivity:()=>{},reportAmbiguity:()=>{}});let d=new n.jB(c);d.fill();let h=new Set,m=t.WS,f=t.WS;for(let e=0;d.get(e).type!==n.ou.EOF;e++){let n=d.get(e);if(n.type===t.SIMPLE_COMMENT||n.type===t.BRACKETED_COMMENT)continue;let r=e>=2&&i(d.get(e-2));if(!a.has(m)&&!r&&f===t.COLON&&n.text){if(n.type===t.IDENTIFIER||i(n))h.add(n.text);else if(n.type===t.BACKQUOTED_IDENTIFIER){let e=n.text,t=e.substring(1,e.length-1);t.trim().length>0&&h.add(t)}}m=f,f=n.type}return r.iT.sev2BurnRate(o.Es.Lakeview,"Lexing query text for SEA parameter markers",s.i1.P99,s.Ip.Min10,!0),h}catch(i){return r.iT.sev2BurnRate(o.Es.Lakeview,"Lexing query text for SEA parameter markers",s.i1.P99,s.Ip.Min10,!1,{error:i,lexer:t?.name,queryText:e}),new Set}}},40984:(e,t,i)=>{i.d(t,{S:()=>s,a:()=>o});let n=e=>e.filter(e=>void 0!==e).join(",").toLowerCase(),r=e=>{let t=0;for(let i=0;i<e.length;i++)t=(t<<5)-t+e.charCodeAt(i)|0;return t},o=({query:e,location:t,source:i})=>r(n([e,t?.first_line,t?.first_column,i])),s=({query:e,location:t,catalog:i,schema:o,precedingCreatedIdentifiers:s})=>r(n([e,t?.first_line,t?.first_column,i,o,...s]))},134763:(e,t,i)=>{i.d(t,{DY:()=>c,LS:()=>u,sE:()=>l});var n=i(610435),r=i(692738),o=i(394917),s=i(886100),a=i(22191);let l=r.createContext(void 0);function u({children:e}){let t=(0,o.f)();return(0,n.Y)(l.Provider,{value:t,children:e})}function c(){let e=r.useContext(l);if(void 0===e)return s.iT.sev2(a.Es.Editor,"AutoInlineSuggestionContextProvider","useAutoInlineSuggestionEnabled must be used within a AutoInlineSuggestionContextProvider",!0),(0,o.W)();return e}},149216:(e,t,i)=>{i.d(t,{b:()=>n});let n=(0,i(480006).u1)("keybindingService")},325334:(e,t,i)=>{i.d(t,{G:()=>r.G,T:()=>n.T});var n=i(841508),r=i(565082)},356579:(e,t,i)=>{i.d(t,{O4:()=>v,om:()=>E});var n=i(610435),r=i(247066),o=i(692738),s=i(886100),a=i(22191),l=i(748592),u=i(759458),c=i(40984),d=i(221095),h=i(105026);let m={max:1e3,ttl:18e6},f=()=>({max:1e3,ttl:18e6,maxSize:(0,h._Z)(),sizeCalculation:d.$}),p=(e={})=>(0,u.Ay)((t,i)=>({module:"default",syntaxParseResultCache:new r.q((0,h.GF)()?f():m),getSyntaxParseResultFromCache:({query:e,location:t,source:n})=>{let r=(0,c.a)({query:e,location:t,source:n}),{syntaxParseResultCache:o}=i(),s=o.get(r);if(!1===s)return null;return s},setSyntaxParseResultInCache:({query:e,location:t,source:n,syntaxError:r})=>{let o=(0,c.a)({query:e,location:t,source:n}),{syntaxParseResultCache:s}=i();s.set(o,r??!1)},tokenParseResultCache:new r.q((0,h.GF)()?f():m),getTokenParseResultFromCache:({query:e,location:t,catalog:n,schema:r,precedingCreatedIdentifiers:o})=>{let s=(0,c.S)({query:e,location:t,catalog:n,schema:r,precedingCreatedIdentifiers:o}),{tokenParseResultCache:a}=i();return a.get(s)},setTokenParseResultInCache:({query:e,location:t,catalog:n,schema:r,tokens:o,precedingCreatedIdentifiers:s})=>{let a=(0,c.S)({query:e,location:t,catalog:n,schema:r,precedingCreatedIdentifiers:s}),{tokenParseResultCache:l}=i();l.set(a,o)},clearTokenParseResultCache:()=>{let{tokenParseResultCache:e}=i();e.clear()},...e})),g=(0,l.W)(()=>p(),!0),y=(0,o.createContext)(null),E=({module:e,children:t})=>{let[i]=(0,o.useState)(()=>p({module:e}));return(0,n.Y)(y.Provider,{value:i,children:t})};function v(e,t){let i,n=(i=(0,o.useContext)(y)??g.getActiveValue(),(0,o.useEffect)(()=>{if("default"===i.getState().module){let e=Error();s.iT.sev3(a.Es.Editor,"EditorSqlGlobalContextStoreProvider not found in the component tree",e.stack)}},[i]),i);return(0,u.Pj)(n,e,t)}},365184:(e,t,i)=>{i.d(t,{Ft:()=>a,V7:()=>s,Xo:()=>l,ok:()=>r,xb:()=>o});var n=i(812145);function r(e,t){if(!e)throw Error(t?`Assertion failed (${t})`:"Assertion Failed")}function o(e,t="Unreachable"){throw Error(t)}function s(e){e||(0,n.dz)(new n.D7("Soft Assertion Failed"))}function a(e){e()||(e(),(0,n.dz)(new n.D7("Assertion Failed")))}function l(e,t){let i=0;for(;i<e.length-1;){if(!t(e[i],e[i+1]))return!1;i++}return!0}},488759:(e,t,i)=>{i.d(t,{W:()=>o});var n=i(36287),r=i(22967);class o{static{this.zero=new o(0,0)}static lengthDiffNonNegative(e,t){if(t.isLessThan(e))return o.zero;if(e.lineCount===t.lineCount)return new o(0,t.columnCount-e.columnCount);return new o(t.lineCount-e.lineCount,t.columnCount)}static betweenPositions(e,t){if(e.lineNumber===t.lineNumber)return new o(0,t.column-e.column);return new o(t.lineNumber-e.lineNumber,t.column-1)}static ofRange(e){return o.betweenPositions(e.getStartPosition(),e.getEndPosition())}static ofText(e){let t=0,i=0;for(let n of e)"\n"===n?(t++,i=0):i++;return new o(t,i)}constructor(e,t){this.lineCount=e,this.columnCount=t}isZero(){return 0===this.lineCount&&0===this.columnCount}isLessThan(e){if(this.lineCount!==e.lineCount)return this.lineCount<e.lineCount;return this.columnCount<e.columnCount}isGreaterThan(e){if(this.lineCount!==e.lineCount)return this.lineCount>e.lineCount;return this.columnCount>e.columnCount}isGreaterThanOrEqualTo(e){if(this.lineCount!==e.lineCount)return this.lineCount>e.lineCount;return this.columnCount>=e.columnCount}equals(e){return this.lineCount===e.lineCount&&this.columnCount===e.columnCount}compare(e){if(this.lineCount!==e.lineCount)return this.lineCount-e.lineCount;return this.columnCount-e.columnCount}add(e){if(0===e.lineCount)return new o(this.lineCount,this.columnCount+e.columnCount);return new o(this.lineCount+e.lineCount,e.columnCount)}createRange(e){if(0===this.lineCount)return new r.Q(e.lineNumber,e.column,e.lineNumber,e.column+this.columnCount);return new r.Q(e.lineNumber,e.column,e.lineNumber+this.lineCount,this.columnCount+1)}toRange(){return new r.Q(1,1,this.lineCount+1,this.columnCount+1)}addToPosition(e){if(0===this.lineCount)return new n.y(e.lineNumber,e.column+this.columnCount);return new n.y(e.lineNumber+this.lineCount,this.columnCount+1)}toString(){return`${this.lineCount},${this.columnCount}`}}},498635:(e,t,i)=>{i.a(e,async(e,n)=>{try{i.d(t,{cz:()=>c,nk:()=>l,q0:()=>u});var r=i(940912),o=i(723562),s=i(214056),a=e([s]);s=(a.then?(await a)():a)[0];let d=new Map;function l(e,t,i){var n;n=i.id,d.has(n)||d.set(i.id,{refCount:0,callbacks:new WeakMap,disposer:(0,s.Q)().addEditorAction({...i,run:(0,o.VJ)((e,...t)=>{let n=u(i.id,e);return n&&n(e,...t)},t)})});let a=d.get(i.id);return a.refCount++,a.callbacks.set(e,(0,r.yB)().wrapNoProxy(i.run)),{dispose:()=>{a.refCount--,a.callbacks.delete(e),0===a.refCount&&(a.disposer.dispose(),d.delete(i.id))}}}function u(e,t){return d.get(e)?.callbacks.get(t)}function c(){d.clear()}n()}catch(e){n(e)}})},502451:(e,t,i)=>{i.d(t,{N:()=>r});var n=i(441535);function r(){return(0,n.W)("databricks.fe.unifiedTagging.enableGetTagApiForEditorStrikethrough",!1)}},503217:(e,t,i)=>{i.a(e,async(e,n)=>{try{i.r(t),i.d(t,{CodeBlockWrapper:()=>r.G,HighlightedCode:()=>o.d,HighlightedCodeForStreaming:()=>o.O,ReadOnlyCodeBlock:()=>s.p});var r=i(981463),o=i(26150),s=i(803134),a=e([o,s]);[o,s]=a.then?(await a)():a,n()}catch(e){n(e)}})},520640:(e,t,i)=>{i.d(t,{C4:()=>y,fQ:()=>v,wL:()=>E});var n=i(452137),r=i.n(n),o=i(269789),s=i.n(o),a=i(692738),l=i(342411),u=i(595615),c=i(988512),d=i(103341),h=i(710343),m=i(641760);function f(e,t,i,n,r,o,s){try{var a=e[o](s),l=a.value}catch(e){i(e);return}a.done?t(l):Promise.resolve(l).then(n,r)}function p(){let e=(0,l.tz)();return(0,a.useCallback)(({dataSource:t,catalog:i,schema:n,table:o})=>({queryKey:["describe_detail",i,n,o,(0,h.pl)(t),!!t?.status.isReady],queryFn:()=>{var s;return(s=function*(){if(r()(void 0!==i,"'catalog' must be set"),r()(void 0!==n,"'schema' must be set"),r()(void 0!==o,"'table' must be set"),!(0,m.jN)({catalog:i}))return null;if(t?.status.isReady)try{return yield(0,d.M)({dataSource:t,queryString:(0,c.y)(t).generateDescribeDetailSQL(n,o,i),queryName:"describe_detail"})}catch(e){if(g(e))return null;throw e}if(!t)throw new h.Lx(t,`Data source is required to fetch columns from ${i}.${n}.${o}`);throw new h.Lx(t,e.formatMessage({id:"gUwluy",defaultMessage:"Listing columns requires an active compute resource"}))},function(){var e=this,t=arguments;return new Promise(function(i,n){var r=s.apply(e,t);function o(e){f(r,i,n,o,a,"next",e)}function a(e){f(r,i,n,o,a,"throw",e)}o(void 0)})})()}}),[e])}let g=e=>e?.name==="SqlQueryError"&&e?.message?.includes?.("EXPECT_TABLE_NOT_VIEW.NO_ALTERNATIVE");function y(e,t){let i=p();return(0,u.AO)({...i(e),...t})}function E(){return(0,u.Ox)({queryFn:p})}function v(e){function t(e){let t=Number(e);if(!Number.isFinite(t))return;if(t>Number.MAX_SAFE_INTEGER)return"> 9.0PiB";return s()(t).format("0[.]0ib")}if(e?.sizeInBytes||e?.numFiles)return{bytes:e.sizeInBytes?t(e.sizeInBytes):void 0,files:"number"==typeof e.numFiles?String(e.numFiles):e.numFiles??void 0};if(e?.statistics){let i;if("string"==typeof e.statistics?i=e.statistics.match(/(\d+) bytes/):e.statistics.length>0&&(i=e.statistics.map(e=>e?.[1]?.match?.(/(\d+) bytes/)).find(e=>null!==e)),i)return{bytes:t(i[1])}}return{}}},526147:(e,t,i)=>{i.d(t,{O4:()=>n.O4,g2:()=>r.g,kh:()=>r.k,om:()=>n.om});var n=i(356579),r=i(886493)},529711:(e,t,i)=>{i.d(t,{A:()=>d,y:()=>c});var n,r=i(610435),o=i(692738),s=i(723562),a=((n=a||{})[n.RUNNING=0]="RUNNING",n[n.PAUSED=1]="PAUSED",n);let l=()=>console.error("not implemented"),u=o.createContext({clearAppSubscribers:l,getTopics:l,pauseAppSubscribers:l,publish:l,removeAll:l,resumeAppSubscribers:l,subscribe:l,subscribeOnce:l});function c({children:e}){let t=(0,o.useRef)({}),i=(0,o.useRef)({}),n=(0,s.iB)(),a=(0,o.useCallback)((e,r,o,s)=>{t.current.hasOwnProperty(e)||(t.current[e]=[]),s&&i.current.hasOwnProperty(e)&&(n(r,"sqleReact")(i.current[e]),delete i.current[e]);let a=t.current[e].push({listener:n(r,"sqleReact"),app:o,state:0})-1;return{remove:()=>{delete t.current[e][a]}}},[n]),l=(0,o.useCallback)(e=>{t.current[e]=[]},[]),d=(0,o.useCallback)((e,n)=>{if(!t.current.hasOwnProperty(e))return;t.current[e].forEach(e=>{0===e.state&&e.listener(n)}),i.current[e]=n},[]),h=(0,o.useCallback)((e,t,i)=>{let n=a(e,e=>{t(e),n.remove()},i);return n},[a]),m=(0,o.useCallback)(()=>t.current,[]),f=(0,o.useCallback)((e,i)=>{i&&Object.keys(t.current).forEach(n=>{t.current[n].forEach(t=>{t.app&&(t.app===i||t.app.split("-")[0]===i)&&(t.state=e)})})},[]),p=(0,o.useCallback)(e=>{f(1,e)},[f]),g=(0,o.useCallback)(e=>{f(0,e)},[f]),y=(0,o.useCallback)(e=>{e&&Object.keys(t.current).forEach(i=>{t.current[i]=t.current[i].filter(t=>t.app!==e)})},[]),E=(0,o.useMemo)(()=>({clearAppSubscribers:y,getTopics:m,pauseAppSubscribers:p,publish:d,removeAll:l,resumeAppSubscribers:g,subscribe:a,subscribeOnce:h}),[y,m,p,d,l,g,a,h]);return(0,r.Y)(u.Provider,{value:E,children:e})}let d=()=>(0,o.useContext)(u)},569885:(e,t,i)=>{i.d(t,{EY:()=>k,Qw:()=>w,ZP:()=>C,bA:()=>P,ns:()=>b});var n=i(692738),r=i(141078),o=i(837213),s=i(441535),a=i(169750),l=i(21994),u=i(667936),c=i(880797),d=i(267647),h=i(222006),m=i(570512),f=i(935963),p=i(607030),g=i(511022),y=i(629033);function E(e,t,i,n,r,o,s){try{var a=e[o](s),l=a.value}catch(e){i(e);return}a.done?t(l):Promise.resolve(l).then(n,r)}function v(e){return function(){var t=this,i=arguments;return new Promise(function(n,r){var o=e.apply(t,i);function s(e){E(o,n,r,s,a,"next",e)}function a(e){E(o,n,r,s,a,"throw",e)}s(void 0)})}}let b="/optimize",C="Optimize my code",w=`You are an SQL Analyst and performance expert in Databricks SQL. Your job is first to find some of the following optimizations, then propose a new SQL query in a code block with the optimizations applied.

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
`,k="optimizeCodeAgent",P=({getTablesInAllCodeBlocks:e,source:t,userId:i,...E})=>{let C=(0,r.mK)();return(0,n.useMemo)(()=>({name:k,makeContext:(0,d.x)({makeContext:({context:t={},userMessage:n,promptId:r})=>v(function*(){let{currentCodeBlock:o={language:"",code:""}}=t??{},{language:d,code:b}=o,w={index:1,sourceMap:{}},P={contextObject:t,apolloClient:C,agentName:k,userMessage:n,lakesenseTraceId:r,getTablesInAllCodeBlocks:e,citations:w,promptBuilderOptions:{isCompletion:(0,s.W)("databricks.fe.editor.enableCitationV2",!1)},...E},S={[a.E.RELEVANT_TABLE]:()=>(0,l.TN)({...P}),[a.E.USER_QUERIES]:()=>(0,u.$O)({...P,userId:i}),[a.E.NOTEBOOK_CELLS]:()=>(0,h.Bc)({...P,userId:i}),[a.E.DOCS_SEARCH]:()=>v(function*(){let e=yield(0,g.kA)({model:(0,f.f)(),messageHistory:[],newUserMessage:{role:p.oW.user,content:`The Databricks SQL query is:
\`\`\`sql
${b}
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
`},metadata:{clientId:y.O.EditorAssistant,traceId:r??"",agentName:k},stream:!1}),t=e[0].message.content?.toLowerCase().split("\n").filter(e=>""!==e.trim()).map(e=>`"${e}"`).join(" OR ")??"/optimizer optimize SQL";return(0,c.ar)({...P,query:t})})()},I=yield Promise.all(Object.values(S).map(e=>e())),A=I.filter(e=>""!==e.prompt).map(e=>e.prompt.slice(0,6e3)).join("\n");return{prompt:`Here is the sql code to optimize: 
\`\`\`${d}
${b}
\`\`\`
${A}`,citations:w,...(0,m.Az)(I)}})(),agentName:k}),userMessageMatchesAgent:e=>e.startsWith(b),extractHistory:()=>[],get model(){return(0,f.f)()},instructions:e=>w+(e.includes("gpt-4")?(0,s.W)("databricks.fe.editor.enableCitationV2",!1)?`

${o.u4}`:`

${o.nA}`:"")+(e.includes("gpt-4")?`
${o.Eq}`:""),responseFormat:(0,s.W)("databricks.fe.editor.streamingStructureOutput",!1)?S:void 0}),[C,e,E,i])},S={type:"json_schema",json_schema:{strict:!0,name:"response",schema:{type:"object",properties:{response:{type:"string",description:"Optimized code"},citations:{type:"array",items:{type:"object",properties:{url:{type:"string",description:"Url of the citation, link of the citation"},text:{type:"string",description:"Name of a citation, it can be several words that describe the citation"},type:{type:"string",description:"Type of a citation, it can be a doc, notebook, query ..."}},description:"If you cite anything in the context BEGIN_RELATED_PASSAGES part to generate the optimize code, please provide the citation here",required:["url","text","type"],additionalProperties:!1}}},required:["response","citations"],additionalProperties:!1}}}},586852:(e,t,i)=>{i.d(t,{A:()=>l});var n=i(610435),r=i(692738),o=i(375214);function s(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"m15.06 8.03-7.03 7.03L6.97 14l5.22-5.22H1v-1.5h11.19L6.97 2.06 8.03 1z",clipRule:"evenodd"})})}let a=(0,r.forwardRef)((e,t)=>(0,n.Y)(o.I,{ref:t,...e,component:s}));a.displayName="ArrowRightIcon";let l=a},596185:(e,t,i)=>{i.d(t,{I:()=>n,d:()=>r});let n=e=>({name:e,signature:e+"()",arguments:[],returnTypes:[],draggable:e+"()",examples:[]}),r=e=>({name:e.name,signature:`${e.name}(${e.input_params?.parameters.map(e=>e.name).join(", ")??""})`,arguments:e.input_params?.parameters.map(e=>[{name:e.name,type:e.type_name}])??[],altArguments:[],description:e.comment,body:e.routine_definition,returnTypes:e.data_type?[e.data_type]:[],returnDoc:"",draggable:`${e.name}()`,described:!1,isWindow:!1,isAggregate:!1,needsDescriptionFetched:!1,examples:[]})},628363:(e,t,i)=>{i.d(t,{I:()=>o});var n=i(692738),r=i(698744);function o({editorInstance:e,afterLineNumber:t,heightInPx:i,heightInLines:s,children:a,scrollOnRender:l,existingSelection:u}){let c=(0,n.useRef)(null),d=(0,n.useRef)({domNode:document.createElement("div"),afterLineNumber:t,heightInPx:i,heightInLines:s});return(0,n.useEffect)(()=>{d.current.afterLineNumber=t,d.current.heightInLines=s,d.current.heightInPx=i,e?.changeViewZones(({layoutZone:n})=>{null!==c.current&&(n(c.current),i&&i>1&&l?requestAnimationFrame(()=>{requestAnimationFrame(()=>{l(e,t),u&&e?.setSelection(u)})}):u&&e?.setSelection(u))})},[t,i,s,e,l,u]),(0,n.useEffect)(()=>(e?.changeViewZones(({addZone:e})=>{c.current=e(d.current)}),()=>{e?.changeViewZones(({removeZone:e})=>{null!==c.current&&(e(c.current),c.current=null)})}),[e]),(0,r.createPortal)(a,d.current.domNode)}},723562:(e,t,i)=>{i.d(t,{DQ:()=>S,Er:()=>P,H6:()=>A,PD:()=>w,VJ:()=>R,iB:()=>x});var n=i(610435),r=i(944464),o=i.n(r),s=i(692738),a=i(336330),l=i(876726),u=i(140078),c=i(342411),d=i(441535),h=i(726977),m=i(278983),f=i(863708),p=i(22191),g=i(782357);let y={notebookEditor:h.s.UnifiedEditorNotebookEditor,notebookDiffViewer:h.s.UnifiedEditorNotebookDiffViewer,jobsEditor:h.s.UnifiedEditorJobsEditor,lakebuilderEditor:h.s.UnifiedEditorLakebuilderEditor,lakeviewEditor:h.s.UnifiedEditorLakeviewEditor,repoGitDiffCode:h.s.UnifiedEditorRepoGitDiffCode,repoGitMergeConflict:h.s.UnifiedEditorRepoGitMergeConflict,sqleReact:h.s.UnifiedEditorSqleReact,test:h.s.Test,storybook:h.s.Storybook,sqleAutocomplete:h.s.UnifiedEditorSqleAutocomplete,sqleFixme:h.s.UnifiedEditorSqleFixme,sqleDetails:h.s.UnifiedEditorSqleDetails,assistantCell:h.s.AssistantCell,assistantInput:h.s.AssistantPanel,jobsValueReferencesEditor:h.s.JobsUiRoot,dataRoomsEditor:h.s.DataRoomsRoot,playgroundEditor:h.s.PlaygroundChat,standaloneAlerts:h.s.StandaloneAlerts,ingestionPipelineEditor:h.s.IngestionPageWrapper,cleanroomNotebookContentView:h.s.CleanRoomNotebookContentView,lakeflowSettings:h.s.LakeflowPipelineAuthoringSettingsPanel,lakeviewCustomCalcExpressionEditor:h.s.UnifiedEditorLakeviewCustomCalcExpressionEditor,antlrIntellisense:h.s.UnifiedEditorAntlrIntellisense,staticNotebookEditor:h.s.UnifiedEditorStaticNotebookEditor,systemModule:h.s.UnifiedEditorSystemModule,lakeflowConversionWidget:h.s.UnifiedEditorLakeflowConversionWidget,clusterEditor:h.s.UnifiedEditorClusterEditor,sampleDataSQLEditor:h.s.UnifiedEditorSampleDataSqlEditor,policyFunctionEditor:h.s.UnifiedEditorPolicyFunctionEditor,lakewatchEditor:h.s.UnifiedEditorLakewatchEditor,lakewatchJsonEditor:h.s.UnifiedEditorLakewatchJsonEditor,lakewatchYamlEditor:h.s.UnifiedEditorLakewatchYamlEditor,mlflowEvalDatasetsJsonEditor:h.s.UnifiedEditorMlflowEvalDatasetsJsonEditor,dynamicWidgetSourceQueryEditor:h.s.DynamicWidgetSourceQueryEditor,richSqlEditor:h.s.UnifiedEditorRichSqlEditor},E=["No React Error Decoder link found","can't access dead object","Loading chunk"];function v(e){let t=e instanceof Error?e.message:String(e);return E.some(e=>t.match(e))}function b(e,t,i){(0,m.y)("clientsideEvent",{eventType:e,eventName:t},i)}let C=o()(b,3e4);function w(e,t,i){let n=t instanceof Error?t.message:String(t);((0,d.W)("databricks.fe.editor.throttleRecordUnifiedEditorError",!1)?C:b)(void 0===i?"UnifiedEditorCaughtError":"UnifiedEditorErrorBoundary",e,n)}function k(){return(0,n.Y)(l.S,{"data-testid":"fallback",title:(0,n.Y)(c.sA,{id:"qAdWdK",defaultMessage:"Error"}),description:(0,n.Y)(c.sA,{id:"kcl7GO",defaultMessage:"An error occurred while rendering this editor."}),image:(0,n.Y)(u.A,{})})}let P=({module:e,children:t})=>{let i=y[e];return(0,n.Y)(f.JR,{fallback:(0,n.Y)(k,{}),esComponent:p.Es.Editor,errorBoundaryId:i,errorFilter:v,onErrorCallback:(t,i)=>w(e,t,i.componentStack),children:t})},S=()=>{let{showErrorNotification:e}=(0,s.useContext)(g.h);return(0,s.useCallback)((t,i,n)=>{w(t,i,n),e(t)},[e])},I=()=>null,A=(e,t)=>(0,s.forwardRef)((i,r)=>{let o=S();return(0,n.Y)(a.tH,{fallback:(0,n.Y)(I,{}),onError:(e,i)=>o(t,e,i.componentStack),children:(0,n.Y)(e,{ref:r,...i})})}),x=()=>{let e=S();return(0,s.useCallback)((t,i)=>(...n)=>{try{return t(...n)}catch(t){e(i,t)}},[e])},R=(e,t)=>(...i)=>{try{return e(...i)}catch(e){w(t,e)}}},743603:(e,t,i)=>{i.a(e,async(e,n)=>{try{i.d(t,{O:()=>l});var r=i(692738),o=i(698744),s=i(214056),a=e([s]);s=(a.then?(await a)():a)[0];let l=({editorInstance:e,placeholder:t,isEnabled:i,showOnlyWhenFocused:n})=>{let a=(0,r.useRef)(null),l=(0,r.useCallback)(e=>{if(!a.current){let i=document.createElement("div");i.setAttribute("style",e),i.setAttribute("class","monaco-placeholder"),(0,o.render)(t,i),a.current=i}let i=a.current;return{getId:()=>"placeholder",suppressMouseDown:!0,getDomNode:()=>i,getPosition:()=>({position:{column:1,lineNumber:1},positionAffinity:4,preference:[0]})}},[t]),u=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(e&&i){let t=()=>{u.current&&e.removeContentWidget(u.current),u.current=null},i=()=>{if(!e.getValue()&&(!n||e.hasTextFocus()))if(u.current)e.layoutContentWidget(u.current);else{let t=l(`width: max-content;
color: var(--vscode-input-placeholderForeground);
line-height: ${e.getOption((0,s.Q)().EditorOption.lineHeight)}px;
font-size: ${e.getOption((0,s.Q)().EditorOption.fontSize)}px;
font-family: ${e.getOption((0,s.Q)().EditorOption.fontFamily)};
`);e.addContentWidget(t),u.current=t}else t()};(!n||e.hasTextFocus())&&i();let r=[];return r.push(e.onDidFocusEditorText(()=>i())),r.push(e.onDidBlurEditorText(()=>i())),r.push(e.onDidChangeModelContent(()=>{i()})),()=>{r.forEach(e=>e.dispose()),t(),a.current&&((0,o.unmountComponentAtNode)(a.current),a.current=null)}}},[e,i,l,n]),{placeholderWidgetRef:u}};n()}catch(e){n(e)}})},782357:(e,t,i)=>{i.d(t,{F:()=>l,h:()=>a});var n=i(610435),r=i(692738),o=i(258182),s=i(342411);let a=r.createContext({showErrorNotification:()=>{}}),l=({children:e})=>{let[t,i]=(0,r.useState)(null),s=(0,r.useCallback)(e=>i(e),[]);return(0,n.Y)(o.Provider,{children:(0,n.FD)(a.Provider,{value:{showErrorNotification:s},children:[e,(0,n.Y)(u,{module:t,setModule:i}),(0,n.Y)(o.Viewport,{})]})})},u=({module:e,setModule:t})=>(0,n.FD)(o.Root,{componentId:"codegen_editor_src_utils_components_errornotification.tsx_48",onOpenChange:e=>{e||t(null)},open:null!==e,severity:"error",duration:3e3,children:[(0,n.Y)(o.Title,{children:(0,n.Y)(s.sA,{id:"5By2Yp",defaultMessage:`Something went wrong with {module, select,
            sqleAutocomplete {SQL autocomplete}
            sqleFixme {SQL error highlighting}
            sqleDetails {SQL hover details}
            other {the editor}
          }.`,values:{module:e}})}),(0,n.Y)(o.Close,{componentId:"codegen_editor_src_utils_components_errornotification.tsx_61"})]})},785582:(e,t,i)=>{i.d(t,{m:()=>n});class n extends Promise{onCancel;cancelPrevented;completed;cancelled;constructor(e){let t,i=!1;super((n,r)=>e(e=>{i=!0,n(e)},e=>{i=!0,r(e)},e=>t=e)),this.onCancel=t,this.completed=()=>i}cancel(){this.completed()||this.cancelled||this.cancelPrevented||(this.onCancel&&this.onCancel(),this.cancelled=!0)}preventCancel(){this.cancelPrevented=!0}static reject(e){return new n((t,i)=>{i(e)})}static resolve(e){return new n(t=>{t(e)})}}},860097:(e,t,i)=>{var n=i(389527);function r(e,t,i,n,r){this.mid=e,this.left=t,this.right=i,this.leftPoints=n,this.rightPoints=r,this.count=(t?t.count:0)+(i?i.count:0)+n.length}e.exports=function(e){if(!e||0===e.length)return new y(null);return new y(g(e))};var o=r.prototype;function s(e,t){e.mid=t.mid,e.left=t.left,e.right=t.right,e.leftPoints=t.leftPoints,e.rightPoints=t.rightPoints,e.count=t.count}function a(e,t){var i=g(t);e.mid=i.mid,e.left=i.left,e.right=i.right,e.leftPoints=i.leftPoints,e.rightPoints=i.rightPoints,e.count=i.count}function l(e,t){var i=e.intervals([]);i.push(t),a(e,i)}function u(e,t){var i=e.intervals([]),n=i.indexOf(t);if(n<0)return 0;return i.splice(n,1),a(e,i),1}function c(e,t,i){for(var n=0;n<e.length&&e[n][0]<=t;++n){var r=i(e[n]);if(r)return r}}function d(e,t,i){for(var n=e.length-1;n>=0&&e[n][1]>=t;--n){var r=i(e[n]);if(r)return r}}function h(e,t){for(var i=0;i<e.length;++i){var n=t(e[i]);if(n)return n}}function m(e,t){return e-t}function f(e,t){var i=e[0]-t[0];if(i)return i;return e[1]-t[1]}function p(e,t){var i=e[1]-t[1];if(i)return i;return e[0]-t[0]}function g(e){if(0===e.length)return null;for(var t=[],i=0;i<e.length;++i)t.push(e[i][0],e[i][1]);t.sort(m);for(var n=t[t.length>>1],o=[],s=[],a=[],i=0;i<e.length;++i){var l=e[i];l[1]<n?o.push(l):n<l[0]?s.push(l):a.push(l)}var u=a.slice();return a.sort(f),u.sort(p),new r(n,g(o),g(s),a,u)}function y(e){this.root=e}o.intervals=function(e){return e.push.apply(e,this.leftPoints),this.left&&this.left.intervals(e),this.right&&this.right.intervals(e),e},o.insert=function(e){var t=this.count-this.leftPoints.length;if(this.count+=1,e[1]<this.mid)this.left?4*(this.left.count+1)>3*(t+1)?l(this,e):this.left.insert(e):this.left=g([e]);else if(e[0]>this.mid)this.right?4*(this.right.count+1)>3*(t+1)?l(this,e):this.right.insert(e):this.right=g([e]);else{var i=n.ge(this.leftPoints,e,f),r=n.ge(this.rightPoints,e,p);this.leftPoints.splice(i,0,e),this.rightPoints.splice(r,0,e)}},o.remove=function(e){var t=this.count-this.leftPoints;if(e[1]<this.mid){if(!this.left)return 0;if(4*(this.right?this.right.count:0)>3*(t-1))return u(this,e);var i=this.left.remove(e);if(2===i)return this.left=null,this.count-=1,1;return 1===i&&(this.count-=1),i}if(e[0]>this.mid){if(!this.right)return 0;if(4*(this.left?this.left.count:0)>3*(t-1))return u(this,e);var i=this.right.remove(e);if(2===i)return this.right=null,this.count-=1,1;return 1===i&&(this.count-=1),i}if(1===this.count)if(this.leftPoints[0]===e)return 2;else return 0;if(1===this.leftPoints.length&&this.leftPoints[0]===e){if(this.left&&this.right){for(var r=this,o=this.left;o.right;)r=o,o=o.right;if(r===this)o.right=this.right;else{var a=this.left,i=this.right;r.count-=o.count,r.right=o.left,o.left=a,o.right=i}s(this,o),this.count=(this.left?this.left.count:0)+(this.right?this.right.count:0)+this.leftPoints.length}else this.left?s(this,this.left):s(this,this.right);return 1}for(var a=n.ge(this.leftPoints,e,f);a<this.leftPoints.length&&this.leftPoints[a][0]===e[0];++a)if(this.leftPoints[a]===e){this.count-=1,this.leftPoints.splice(a,1);for(var i=n.ge(this.rightPoints,e,p);i<this.rightPoints.length;++i)if(this.rightPoints[i][1]!==e[1])break;else if(this.rightPoints[i]===e)return this.rightPoints.splice(i,1),1}return 0},o.queryPoint=function(e,t){if(e<this.mid){if(this.left){var i=this.left.queryPoint(e,t);if(i)return i}return c(this.leftPoints,e,t)}if(!(e>this.mid))return h(this.leftPoints,t);if(this.right){var i=this.right.queryPoint(e,t);if(i)return i}return d(this.rightPoints,e,t)},o.queryInterval=function(e,t,i){if(e<this.mid&&this.left){var n=this.left.queryInterval(e,t,i);if(n)return n}if(t>this.mid&&this.right){var n=this.right.queryInterval(e,t,i);if(n)return n}if(t<this.mid)return c(this.leftPoints,t,i);if(e>this.mid)return d(this.rightPoints,e,i);return h(this.leftPoints,i)};var E=y.prototype;E.insert=function(e){this.root?this.root.insert(e):this.root=new r(e[0],null,null,[e],[e])},E.remove=function(e){if(this.root){var t=this.root.remove(e);return 2===t&&(this.root=null),0!==t}return!1},E.queryPoint=function(e,t){if(this.root)return this.root.queryPoint(e,t)},E.queryInterval=function(e,t,i){if(e<=t&&this.root)return this.root.queryInterval(e,t,i)},Object.defineProperty(E,"count",{get:function(){if(this.root)return this.root.count;return 0}}),Object.defineProperty(E,"intervals",{get:function(){if(this.root)return this.root.intervals([]);return[]}})},866153:(e,t,i)=>{i.d(t,{I:()=>r,w:()=>n});let n=(e,t)=>e.type>=t.ACCESS&&e.type<=t.ZONE,r=(e,t)=>e.type>=t.ADD&&e.type<=t.ZONE},886493:(e,t,i)=>{i.d(t,{g:()=>o,k:()=>s});var n=i(102876),r=i(356579);let o=()=>{let[e,t]=(0,r.O4)(e=>[e.getSyntaxParseResultFromCache,e.setSyntaxParseResultInCache],n.x);return[e,t]},s=()=>{let[e,t]=(0,r.O4)(e=>[e.getTokenParseResultFromCache,e.setTokenParseResultInCache],n.x);return[e,t]}},976477:(e,t,i)=>{i.d(t,{$e:()=>C,Cc:()=>b,JE:()=>E,_S:()=>y,fh:()=>w,vd:()=>v});var n=i(692738),r=i(141078),o=i(278983),s=i(837213),a=i(441535),l=i(169750),u=i(21994),c=i(267647),d=i(667936),h=i(222006),m=i(570512),f=i(377936),p=i(935963);function g(e,t,i,n,r,o,s){try{var a=e[o](s),l=a.value}catch(e){i(e);return}a.done?t(l):Promise.resolve(l).then(n,r)}let y="optimizeProfileAgent",E="/analyze",v="Analyze my profile",b=`You are a Databricks experienced data engineer who is debugging Databricks SQL queries and Python Spark DataFrames to find possible speed optimizations.

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
`,C=`
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
`,w=({getTablesInAllCodeBlocks:e,source:t,userId:v,...w})=>{let k=(0,r.mK)();return(0,n.useMemo)(()=>({name:y,makeContext:(0,c.x)({makeContext:({context:t={},userMessage:n,promptId:r})=>{var s;return(s=function*(){let{currentCodeBlock:s={language:"",code:""}}=t??{},{language:c,code:p}=s,g={index:1,sourceMap:{}},{getQueryProfileContext:E,getQueryInsightsContext:b}=yield(()=>{let e=()=>Promise.all([i.e(62280),i.e(62394),i.e(62621),i.e(25230),i.e(84904),i.e(66537)]).then(i.bind(i,731261));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(731261,"../context/configurableContext","lazy",e);return e()})(),C=/^\/analyze Query [0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(n||""),P=[];C&&(P=n?.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i)||[],(0,o.y)("clientsideEvent",{eventType:"optimize-profile",eventName:`analyze-${P.slice(0,1).join(",")}`,lakesenseTraceId:r,source:c}));let S={contextObject:t,apolloClient:k,agentName:y,userMessage:n,lakesenseTraceId:r,statementIds:P,getTablesInAllCodeBlocks:e,citations:g,promptBuilderOptions:{isCompletion:(0,a.W)("databricks.fe.editor.enableCitationV2",!1)},...w},I={[l.E.RELEVANT_TABLE]:()=>(0,u.TN)({...S}),[l.E.QUERY_PROFILE]:()=>E({...S}),[l.E.USER_QUERIES]:()=>(0,d.$O)({...S,userId:v}),[l.E.NOTEBOOK_CELLS]:()=>(0,h.Bc)({...S,userId:v})};(0,f.Yg)()&&(I[l.E.QUERY_INSIGHTS]=()=>b({...S}));let A=yield Promise.all(Object.values(I).map(e=>e())),x=A.filter(e=>""!==e.prompt).map(e=>e.prompt.slice(0,6e3)).join("\n");return{prompt:`Here is the code to optimize: 
\`\`\`${c}
${p}
\`\`\`
${x}`,citations:g,...(0,m.Az)(A)}},function(){var e=this,t=arguments;return new Promise(function(i,n){var r=s.apply(e,t);function o(e){g(r,i,n,o,a,"next",e)}function a(e){g(r,i,n,o,a,"throw",e)}o(void 0)})})()},agentName:y}),userMessageMatchesAgent:e=>e.startsWith(E),extractHistory:()=>[],get model(){return(0,p.f)()},instructions:e=>((0,f.Yg)()?C:b)+(e.includes("gpt-4")?(0,a.W)("databricks.fe.editor.enableCitationV2",!1)?`

${s.u4}`:`

${s.nA}`:"")+(e.includes("gpt-4")?`
${s.Eq}`:"")}),[k,e,w,v])}},977532:(e,t,i)=>{i.a(e,async(e,n)=>{try{i.d(t,{o:()=>a});var r=i(124235),o=i(83722),s=e([o]);function a(){let e=null;return{setup:({editorInstance:t})=>{let i,n=t._standaloneKeybindingService,s=(i=!(0,r.f8)(),(0,o.d)().flatMap(({command:e,keybindings:t,keybindingsOnWindows:n})=>(n&&i?n:t??[]).map(t=>({keybinding:t,command:"-"+e})))).filter(e=>(function(e,t){if(t?._dynamicKeybindings?.some?.(t=>t.command===e.command))return!1;return!0})(e,n));s.length>0&&(e=n.addDynamicKeybindings(s))},tearDown:()=>e?.dispose?.()}}o=(s.then?(await s)():s)[0],n()}catch(e){n(e)}})},986291:(e,t,i)=>{i.d(t,{G:()=>n});let n=(0,i(480006).u1)("themeService")}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/40183.2ff0aba7ef.chunk.js.map