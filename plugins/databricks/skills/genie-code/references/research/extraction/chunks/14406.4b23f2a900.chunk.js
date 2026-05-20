"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[14406],{228510:(e,t,i)=>{i.d(t,{L:()=>a});var o=i(610435),n=i(956935);function a({height:e,style:t,children:i}){return(0,o.Y)("div",{css:(0,n.AH)("display:flex;width:100%;height:","100%"===e||void 0===e?"100%":e,";flex-direction:column;border-radius:0;"),style:t,children:i})}},292758:(e,t,i)=>{i.a(e,async(e,o)=>{try{i.d(t,{j:()=>d});var n=i(956935),a=i(692738),r=i(497895),s=i(645696),l=i(852504),c=e([s]);s=(c.then?(await c)():c)[0];let d=()=>{let{theme:e}=(0,r.wn)(),t=(0,l.ju)(e.isDarkMode);(0,a.useEffect)(()=>{(0,s.getMonacoApi)().setTheme(t)},[t]);let i=e.colors.backgroundPrimary;return(0,a.useMemo)(()=>({defaultOptions:{theme:t,fontSize:e.typography.fontSizeMd},style:(0,n.AH)("& .monaco-editor .margin,& .monaco-editor,& .monaco-editor-background,& .monaco-editor .inputarea.ime-input{background-color:",i,";}& .monaco-editor.vs-dark .suggest-details code{color:var(--vscode-editorSuggestWidget-foreground);opacity:0.7;}")}),[t,e.typography.fontSizeMd,i])};o()}catch(e){o(e)}})},293713:(e,t,i)=>{i.d(t,{u:()=>n});var o=i(692738);function n({language:e,ariaLabel:t,initialValue:i,contextmenu:a=!1,glyphMargin:r=!1,lineDecorationsWidth:s=0}){return(0,o.useMemo)(()=>({value:i,language:e,ariaLabel:t,automaticLayout:!0,contextmenu:a,folding:!0,glyphMargin:r,lineDecorationsWidth:s,minimap:{enabled:!1},occurrencesHighlight:"off",padding:{top:8,bottom:8},tabSize:2,wordWrap:"on"}),[i,e,t,a,r,s])}},356579:(e,t,i)=>{i.d(t,{O4:()=>v,om:()=>b});var o=i(610435),n=i(247066),a=i(692738),r=i(886100),s=i(22191),l=i(748592),c=i(759458),d=i(40984),u=i(221095),p=i(105026);let m={max:1e3,ttl:18e6},h=()=>({max:1e3,ttl:18e6,maxSize:(0,p._Z)(),sizeCalculation:u.$}),g=(e={})=>(0,c.Ay)((t,i)=>({module:"default",syntaxParseResultCache:new n.q((0,p.GF)()?h():m),getSyntaxParseResultFromCache:({query:e,location:t,source:o})=>{let n=(0,d.a)({query:e,location:t,source:o}),{syntaxParseResultCache:a}=i(),r=a.get(n);if(!1===r)return null;return r},setSyntaxParseResultInCache:({query:e,location:t,source:o,syntaxError:n})=>{let a=(0,d.a)({query:e,location:t,source:o}),{syntaxParseResultCache:r}=i();r.set(a,n??!1)},tokenParseResultCache:new n.q((0,p.GF)()?h():m),getTokenParseResultFromCache:({query:e,location:t,catalog:o,schema:n,precedingCreatedIdentifiers:a})=>{let r=(0,d.S)({query:e,location:t,catalog:o,schema:n,precedingCreatedIdentifiers:a}),{tokenParseResultCache:s}=i();return s.get(r)},setTokenParseResultInCache:({query:e,location:t,catalog:o,schema:n,tokens:a,precedingCreatedIdentifiers:r})=>{let s=(0,d.S)({query:e,location:t,catalog:o,schema:n,precedingCreatedIdentifiers:r}),{tokenParseResultCache:l}=i();l.set(s,a)},clearTokenParseResultCache:()=>{let{tokenParseResultCache:e}=i();e.clear()},...e})),f=(0,l.W)(()=>g(),!0),y=(0,a.createContext)(null),b=({module:e,children:t})=>{let[i]=(0,a.useState)(()=>g({module:e}));return(0,o.Y)(y.Provider,{value:i,children:t})};function v(e,t){let i,o=(i=(0,a.useContext)(y)??f.getActiveValue(),(0,a.useEffect)(()=>{if("default"===i.getState().module){let e=Error();r.iT.sev3(s.Es.Editor,"EditorSqlGlobalContextStoreProvider not found in the component tree",e.stack)}},[i]),i);return(0,c.Pj)(o,e,t)}},529711:(e,t,i)=>{i.d(t,{A:()=>u,y:()=>d});var o,n=i(610435),a=i(692738),r=i(723562),s=((o=s||{})[o.RUNNING=0]="RUNNING",o[o.PAUSED=1]="PAUSED",o);let l=()=>console.error("not implemented"),c=a.createContext({clearAppSubscribers:l,getTopics:l,pauseAppSubscribers:l,publish:l,removeAll:l,resumeAppSubscribers:l,subscribe:l,subscribeOnce:l});function d({children:e}){let t=(0,a.useRef)({}),i=(0,a.useRef)({}),o=(0,r.iB)(),s=(0,a.useCallback)((e,n,a,r)=>{t.current.hasOwnProperty(e)||(t.current[e]=[]),r&&i.current.hasOwnProperty(e)&&(o(n,"sqleReact")(i.current[e]),delete i.current[e]);let s=t.current[e].push({listener:o(n,"sqleReact"),app:a,state:0})-1;return{remove:()=>{delete t.current[e][s]}}},[o]),l=(0,a.useCallback)(e=>{t.current[e]=[]},[]),u=(0,a.useCallback)((e,o)=>{if(!t.current.hasOwnProperty(e))return;t.current[e].forEach(e=>{0===e.state&&e.listener(o)}),i.current[e]=o},[]),p=(0,a.useCallback)((e,t,i)=>{let o=s(e,e=>{t(e),o.remove()},i);return o},[s]),m=(0,a.useCallback)(()=>t.current,[]),h=(0,a.useCallback)((e,i)=>{i&&Object.keys(t.current).forEach(o=>{t.current[o].forEach(t=>{t.app&&(t.app===i||t.app.split("-")[0]===i)&&(t.state=e)})})},[]),g=(0,a.useCallback)(e=>{h(1,e)},[h]),f=(0,a.useCallback)(e=>{h(0,e)},[h]),y=(0,a.useCallback)(e=>{e&&Object.keys(t.current).forEach(i=>{t.current[i]=t.current[i].filter(t=>t.app!==e)})},[]),b=(0,a.useMemo)(()=>({clearAppSubscribers:y,getTopics:m,pauseAppSubscribers:g,publish:u,removeAll:l,resumeAppSubscribers:f,subscribe:s,subscribeOnce:p}),[y,m,g,u,l,f,s,p]);return(0,n.Y)(c.Provider,{value:b,children:e})}let u=()=>(0,a.useContext)(c)},538160:(e,t,i)=>{i.d(t,{f:()=>z});var o=i(610435),n=i(956935),a=i(91958),r=i.n(a),s=i(692738),l=i(600295),c=i(464953),d=i(660488),u=i(783772),p=i.n(u),m=i(79128),h=i(687828),g=i(227195),f=i(497895),y=i(943844);let b=c.A.Group,v=e=>{let{theme:t}=(0,f.wn)(),{getPopupContainer:i,getPrefixCls:n}=(0,g.G)(),{type:a,danger:r,disabled:c,loading:u,onClick:v,htmlType:w,children:x,className:k,overlay:S,trigger:C,align:z,open:P,onOpenChange:R,placement:E,getPopupContainer:I,href:O,icon:T=(0,o.Y)(l.A,{}),title:_,buttonsRender:A=e=>e,mouseEnterDelay:Q,mouseLeaveDelay:$,overlayClassName:D,overlayStyle:M,destroyPopupOnHide:F,menuButtonLabel:B="Open dropdown",menu:L,leftButtonIcon:Y,dropdownMenuRootProps:N,"aria-label":q,componentId:G,analyticsEvents:j,form:H,...W}=e,U=n("dropdown-button"),K={align:z,overlay:S,disabled:c,trigger:c?[]:C,onOpenChange:R,getPopupContainer:I||i,mouseEnterDelay:Q,mouseLeaveDelay:$,overlayClassName:D,overlayStyle:M,destroyPopupOnHide:F};"open"in e&&(K.open=P),"placement"in e?K.placement=E:K.placement="bottomRight";let[J,V]=A([(0,o.FD)(m.$n,{componentId:G?`${G}.primary_button`:"codegen_design-system_src_design-system_splitbutton_dropdown_dropdownbutton.tsx_148",type:a,form:H,danger:r,disabled:c,loading:u,onClick:v,htmlType:w,href:O,title:_,icon:x&&Y?Y:void 0,"aria-label":q,size:e.size,css:{borderTopRightRadius:"0 !important",borderBottomRightRadius:"0 !important"},children:[Y&&!x?Y:void 0,x]}),(0,o.Y)(m.$n,{componentId:G?`${G}.dropdown_button`:"codegen_design-system_src_design-system_splitbutton_dropdown_dropdownbutton.tsx_166",type:a,danger:r,disabled:c,"aria-label":B,size:e.size,css:{borderTopLeftRadius:"0 !important",borderBottomLeftRadius:"0 !important",..."small"===e.size?{"&&&":{paddingLeft:`${t.spacing.xs}px !important`,paddingRight:`${t.spacing.xs}px !important`,width:"24px !important"}}:{}},children:T||(0,o.Y)(y.A,{})})]);return(0,o.FD)(b,{...W,className:p()(U,k),children:[J,void 0!==S?(0,o.Y)(d.A,{...K,overlay:S,children:V}):(0,o.FD)(h.Root,{...N,itemHtmlType:"submit"===w?"submit":void 0,children:[(0,o.Y)(h.Trigger,{disabled:c,asChild:!0,children:V}),L&&s.cloneElement(L,{align:L.props.align||"end"})]})]})};var w=i(817262),x=i(429608),k=i(639712);let S={display:"inline-flex",position:"relative",verticalAlign:"middle"},C=r()(function(e,t,i){let o=`.${e}-btn`,a=`.${e}-btn-primary`,r=`.${e}-dropdown-trigger`,s=`.${e}-btn-group-sm`,l={[o]:{...(0,w.o8)(t),boxShadow:t.shadows.xs,height:"small"===i?t.general.iconSize:t.general.heightSm,padding:"4px 12px","&:focus-visible":{outlineStyle:"solid",outlineWidth:"2px",outlineOffset:"-2px",outlineColor:t.colors.actionDefaultBorderFocus},".anticon, &:focus-visible .anticon":{color:t.colors.textSecondary},"&:hover .anticon":{color:t.colors.actionDefaultIconHover},"&:active .anticon":{color:t.colors.actionDefaultIconPress}},[`${o}:first-of-type`]:{borderTopRightRadius:"0px !important",borderBottomRightRadius:"0px !important"},[a]:{...(0,w.p_)(t),boxShadow:t.shadows.xs,"&:first-of-type":{borderRight:`1px solid ${t.colors.actionPrimaryTextDefault}`,marginRight:1},[r]:{borderLeft:`1px solid ${t.colors.actionPrimaryTextDefault}`},"&:focus-visible":{outlineStyle:"solid",outlineWidth:"1px",outlineOffset:"-3px",outlineColor:t.colors.white},".anticon, &:hover .anticon, &:active .anticon, &:focus-visible .anticon":{color:t.colors.actionPrimaryIcon}},[r]:{padding:3,borderLeftColor:"transparent",width:t.general.heightSm},[`&${s}`]:{[r]:{padding:5}},"&&":{[`[disabled], ${a}[disabled]`]:{...(0,w.J5)(t),boxShadow:"none","&:first-of-type":{borderRight:`1px solid ${t.colors.actionPrimaryIcon}`,marginRight:1},[r]:{borderLeft:`1px solid ${t.colors.actionPrimaryIcon}`},".anticon, &:hover .anticon, &:active .anticon, &:focus-visible .anticon":{color:t.colors.actionDisabledText}},[`${a}[disabled]`]:{...(0,w.LM)(t),".anticon, &:hover .anticon, &:active .anticon, &:focus-visible .anticon":{color:t.colors.actionPrimaryTextDefault}}},[`${o}:not(:first-of-type)`]:{width:t.general.heightSm,padding:"3px !important",borderTopLeftRadius:"0px !important",borderBottomLeftRadius:"0px !important"},...(0,x.Cx)(t.options.enableAnimation)},c=(0,k.dg)(l);return(0,n.AH)(c)},(e,t,i)=>`${(0,k.H6)(t)}|${e}|${i??""}|${!!t.options.enableAnimation}`),z=e=>{let{theme:t,classNamePrefix:i}=(0,f.wn)(),{children:n,icon:a,deprecatedMenu:r,type:l,loading:c,loadingButtonStyles:d,placement:u,dangerouslySetAntdProps:p,size:h,...g}=e,b=t.general.iconFontSize+24+2*t.general.borderWidth,[w,k]=(0,s.useState)(b),z=(0,s.useCallback)(e=>{if(void 0===c)return;e&&!c&&k(e.getBoundingClientRect().width)},[c]),R=(0,s.useMemo)(()=>({width:w,fontSize:t.general.iconFontSize,...d}),[w,t.general.iconFontSize,d]),E=(0,s.useMemo)(()=>({fontSize:t.general.iconFontSize}),[t.general.iconFontSize]);return(0,o.Y)(x.wC,{children:(0,o.Y)("div",{ref:z,css:S,children:c?(0,o.Y)(m.$n,{componentId:"codegen_design-system_src_design-system_splitbutton_splitbutton.tsx_163",type:"default"===l?void 0:l,style:R,loading:!0,htmlType:e.htmlType,title:e.title,className:e.className,size:e.size,children:n}):(0,o.Y)(v,{...g,size:e.size,overlay:r,trigger:P,css:C(i,t,h),icon:(0,o.Y)(y.A,{css:E,"aria-hidden":"true"}),placement:u||"bottomRight",type:"default"===l?void 0:l,leftButtonIcon:a,...p,children:n})})})},P=["click"]},777229:(e,t,i)=>{i.d(t,{F:()=>n});var o=i(886100);function n(e,{eventId:t,failExplicitly:i=!1,esComponent:a}){if(!i)return o.iT.sev2(a,"jaws:unreachable-code-path",{unexpectedValue:e,eventId:t}),e;throw Error(`Exhaustive check failed: ${JSON.stringify(e)} is unexpected or it was not exhaustively checked.`)}},886493:(e,t,i)=>{i.d(t,{g:()=>a,k:()=>r});var o=i(102876),n=i(356579);let a=()=>{let[e,t]=(0,n.O4)(e=>[e.getSyntaxParseResultFromCache,e.setSyntaxParseResultInCache],o.x);return[e,t]},r=()=>{let[e,t]=(0,n.O4)(e=>[e.getTokenParseResultFromCache,e.setTokenParseResultInCache],o.x);return[e,t]}},976477:(e,t,i)=>{i.d(t,{$e:()=>x,Cc:()=>w,JE:()=>b,_S:()=>y,fh:()=>k,vd:()=>v});var o=i(692738),n=i(141078),a=i(278983),r=i(837213),s=i(441535),l=i(169750),c=i(21994),d=i(267647),u=i(667936),p=i(222006),m=i(570512),h=i(377936),g=i(935963);function f(e,t,i,o,n,a,r){try{var s=e[a](r),l=s.value}catch(e){i(e);return}s.done?t(l):Promise.resolve(l).then(o,n)}let y="optimizeProfileAgent",b="/analyze",v="Analyze my profile",w=`You are a Databricks experienced data engineer who is debugging Databricks SQL queries and Python Spark DataFrames to find possible speed optimizations.

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
`,x=`
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
`,k=({getTablesInAllCodeBlocks:e,source:t,userId:v,...k})=>{let S=(0,n.mK)();return(0,o.useMemo)(()=>({name:y,makeContext:(0,d.x)({makeContext:({context:t={},userMessage:o,promptId:n})=>{var r;return(r=function*(){let{currentCodeBlock:r={language:"",code:""}}=t??{},{language:d,code:g}=r,f={index:1,sourceMap:{}},{getQueryProfileContext:b,getQueryInsightsContext:w}=yield(()=>{let e=()=>Promise.all([i.e(62280),i.e(62394),i.e(62621),i.e(25230),i.e(84904),i.e(66537)]).then(i.bind(i,731261));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(731261,"../context/configurableContext","lazy",e);return e()})(),x=/^\/analyze Query [0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(o||""),C=[];x&&(C=o?.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i)||[],(0,a.y)("clientsideEvent",{eventType:"optimize-profile",eventName:`analyze-${C.slice(0,1).join(",")}`,lakesenseTraceId:n,source:d}));let z={contextObject:t,apolloClient:S,agentName:y,userMessage:o,lakesenseTraceId:n,statementIds:C,getTablesInAllCodeBlocks:e,citations:f,promptBuilderOptions:{isCompletion:(0,s.W)("databricks.fe.editor.enableCitationV2",!1)},...k},P={[l.E.RELEVANT_TABLE]:()=>(0,c.TN)({...z}),[l.E.QUERY_PROFILE]:()=>b({...z}),[l.E.USER_QUERIES]:()=>(0,u.$O)({...z,userId:v}),[l.E.NOTEBOOK_CELLS]:()=>(0,p.Bc)({...z,userId:v})};(0,h.Yg)()&&(P[l.E.QUERY_INSIGHTS]=()=>w({...z}));let R=yield Promise.all(Object.values(P).map(e=>e())),E=R.filter(e=>""!==e.prompt).map(e=>e.prompt.slice(0,6e3)).join("\n");return{prompt:`Here is the code to optimize: 
\`\`\`${d}
${g}
\`\`\`
${E}`,citations:f,...(0,m.Az)(R)}},function(){var e=this,t=arguments;return new Promise(function(i,o){var n=r.apply(e,t);function a(e){f(n,i,o,a,s,"next",e)}function s(e){f(n,i,o,a,s,"throw",e)}a(void 0)})})()},agentName:y}),userMessageMatchesAgent:e=>e.startsWith(b),extractHistory:()=>[],get model(){return(0,g.f)()},instructions:e=>((0,h.Yg)()?x:w)+(e.includes("gpt-4")?(0,s.W)("databricks.fe.editor.enableCitationV2",!1)?`

${r.u4}`:`

${r.nA}`:"")+(e.includes("gpt-4")?`
${r.Eq}`:"")}),[S,e,k,v])}},977532:(e,t,i)=>{i.a(e,async(e,o)=>{try{i.d(t,{o:()=>s});var n=i(124235),a=i(83722),r=e([a]);function s(){let e=null;return{setup:({editorInstance:t})=>{let i,o=t._standaloneKeybindingService,r=(i=!(0,n.f8)(),(0,a.d)().flatMap(({command:e,keybindings:t,keybindingsOnWindows:o})=>(o&&i?o:t??[]).map(t=>({keybinding:t,command:"-"+e})))).filter(e=>(function(e,t){if(t?._dynamicKeybindings?.some?.(t=>t.command===e.command))return!1;return!0})(e,o));r.length>0&&(e=o.addDynamicKeybindings(r))},tearDown:()=>e?.dispose?.()}}a=(r.then?(await r)():r)[0],o()}catch(e){o(e)}})}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/14406.4b23f2a900.chunk.js.map