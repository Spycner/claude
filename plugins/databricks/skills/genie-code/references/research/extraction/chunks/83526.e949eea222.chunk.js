"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[83526],{301454:(e,t,i)=>{i.a(e,async(e,n)=>{try{i.d(t,{_U:()=>p,gL:()=>m,u1:()=>u});var o=i(610435),a=i(692738),r=i(886100),s=i(22191),l=i(759458),c=i(470759),d=e([c]);function u({children:e,...t}){let[i]=(0,a.useState)(()=>(0,c.Xs)(t));return(0,a.useEffect)(()=>{i.setState(t)},[i,t]),(0,o.Y)(g.Provider,{value:i,children:e})}c=(d.then?(await d)():d)[0];let f=(0,c.Xs)({}),g=(0,a.createContext)(f);function p(){let e=(0,a.useContext)(g);return(0,a.useEffect)(()=>{if(e.getState().source===c.CM){let e=Error();r.iT.sev3(s.Es.Assistant,"InlineQuickFixStoreProvider not found in the component tree",e.stack)}},[e]),e}function m(e,t){let i=p();return(0,l.Pj)(i,e,t)}n()}catch(e){n(e)}})},366787:(e,t,i)=>{i.d(t,{A:()=>m});var n=i(513384),o=i(324399),a=i(354104),r=i(692738),s=i(781381),l=i(783772),c=i.n(l),d={adjustX:1,adjustY:1},u=[0,0];let p={topLeft:{points:["bl","tl"],overflow:d,offset:[0,-4],targetOffset:u},topCenter:{points:["bc","tc"],overflow:d,offset:[0,-4],targetOffset:u},topRight:{points:["br","tr"],overflow:d,offset:[0,-4],targetOffset:u},bottomLeft:{points:["tl","bl"],overflow:d,offset:[0,4],targetOffset:u},bottomCenter:{points:["tc","bc"],overflow:d,offset:[0,4],targetOffset:u},bottomRight:{points:["tr","br"],overflow:d,offset:[0,4],targetOffset:u}},m=r.forwardRef(function(e,t){var i,l,d,u=e.arrow,m=void 0!==u&&u,f=e.prefixCls,g=void 0===f?"rc-dropdown":f,h=e.transitionName,y=e.animation,b=e.align,v=e.placement,w=e.placements,C=e.getPopupContainer,x=e.showAction,E=e.hideAction,P=e.overlayClassName,O=e.overlayStyle,A=e.visible,S=e.trigger,k=void 0===S?["hover"]:S,R=(0,a.A)(e,["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger"]),z=r.useState(),N=(0,o.A)(z,2),I=N[0],L=N[1],T="visible"in e?A:I,$=r.useRef(null);r.useImperativeHandle(t,function(){return $.current});var Q=function(){var t=e.overlay;return"function"==typeof t?t():t},_=function(t){var i=e.onOverlayClick,n=Q().props;L(!1),i&&i(t),n.onClick&&n.onClick(t)},D=function(){var e=Q(),t={prefixCls:"".concat(g,"-menu"),onClick:_};return"string"==typeof e.type&&delete t.prefixCls,r.createElement(r.Fragment,null,m&&r.createElement("div",{className:"".concat(g,"-arrow")}),r.cloneElement(e,t))},B=E;return B||-1===k.indexOf("contextMenu")||(B=["click"]),r.createElement(s.A,Object.assign({},R,{prefixCls:g,ref:$,popupClassName:c()(P,(0,n.A)({},"".concat(g,"-show-arrow"),m)),popupStyle:O,builtinPlacements:void 0===w?p:w,action:k,showAction:x,hideAction:B||[],popupPlacement:void 0===v?"bottomLeft":v,popupAlign:b,popupTransitionName:h,popupAnimation:y,popupVisible:T,stretch:!function(){var t=e.minOverlayWidthMatchTrigger,i=e.alignPoint;if("minOverlayWidthMatchTrigger"in e)return t;return!i}()?"":"minWidth",popup:function(){if("function"==typeof e.overlay)return D;return D()}(),onPopupVisibleChange:function(t){var i=e.onVisibleChange;L(t),"function"==typeof i&&i(t)},getPopupContainer:C}),(l=(i=e.children).props?i.props:{},d=c()(l.className,function(){var t=e.openClassName;if(void 0!==t)return t;return"".concat(g,"-open")}()),I&&i?r.cloneElement(i,{className:d}):i))})},433072:(e,t,i)=>{i.a(e,async(e,n)=>{try{i.r(t),i.d(t,{formatDiffForSafetyCheck:()=>s});var o=i(521156),a=e([o]);function r({action:e,actionSymbol:t,contentLines:i,lineRange:n}){let o=[];if(n.startLineNumber>=n.endLineNumberExclusive)return o;o.push(`  ${e} (lines ${n.startLineNumber}-${n.endLineNumberExclusive-1}):`);for(let e=n.startLineNumber;e<n.endLineNumberExclusive&&e-1<i.length;e++)o.push(`    ${t} ${i[e-1]||"(empty line)"}`);return o}function s({contentBefore:e,contentAfter:t}){let i=(0,o.d9)(e,t),n=e.split("\n"),a=t.split("\n"),l=[];for(let e=0;e<i.length;e++){let{originalLineRange:t,modifiedLineRange:o}=i[e];l.push(`Change ${e+1}:`),l.push(...r({action:"Removed",actionSymbol:"-",contentLines:n,lineRange:t})),l.push(...r({action:"Added",actionSymbol:"+",contentLines:a,lineRange:o})),l.push("")}return l.join("\n")}o=(a.then?(await a)():a)[0],n()}catch(e){n(e)}})},481988:(e,t,i)=>{i.d(t,{A:()=>l});var n=i(554390),o=i(692738);let a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};var r=i(271177),s=function(e,t){return o.createElement(r.A,(0,n.A)((0,n.A)({},e),{},{ref:t,icon:a}))};s.displayName="EllipsisOutlined";let l=o.forwardRef(s)},538160:(e,t,i)=>{i.d(t,{f:()=>O});var n=i(610435),o=i(956935),a=i(91958),r=i.n(a),s=i(692738),l=i(600295),c=i(464953),d=i(660488),u=i(783772),p=i.n(u),m=i(79128),f=i(687828),g=i(227195),h=i(497895),y=i(943844);let b=c.A.Group,v=e=>{let{theme:t}=(0,h.wn)(),{getPopupContainer:i,getPrefixCls:o}=(0,g.G)(),{type:a,danger:r,disabled:c,loading:u,onClick:v,htmlType:w,children:C,className:x,overlay:E,trigger:P,align:O,open:A,onOpenChange:S,placement:k,getPopupContainer:R,href:z,icon:N=(0,n.Y)(l.A,{}),title:I,buttonsRender:L=e=>e,mouseEnterDelay:T,mouseLeaveDelay:$,overlayClassName:Q,overlayStyle:_,destroyPopupOnHide:D,menuButtonLabel:B="Open dropdown",menu:M,leftButtonIcon:F,dropdownMenuRootProps:Y,"aria-label":j,componentId:W,analyticsEvents:G,form:H,...q}=e,U=o("dropdown-button"),V={align:O,overlay:E,disabled:c,trigger:c?[]:P,onOpenChange:S,getPopupContainer:R||i,mouseEnterDelay:T,mouseLeaveDelay:$,overlayClassName:Q,overlayStyle:_,destroyPopupOnHide:D};"open"in e&&(V.open=A),"placement"in e?V.placement=k:V.placement="bottomRight";let[K,J]=L([(0,n.FD)(m.$n,{componentId:W?`${W}.primary_button`:"codegen_design-system_src_design-system_splitbutton_dropdown_dropdownbutton.tsx_148",type:a,form:H,danger:r,disabled:c,loading:u,onClick:v,htmlType:w,href:z,title:I,icon:C&&F?F:void 0,"aria-label":j,size:e.size,css:{borderTopRightRadius:"0 !important",borderBottomRightRadius:"0 !important"},children:[F&&!C?F:void 0,C]}),(0,n.Y)(m.$n,{componentId:W?`${W}.dropdown_button`:"codegen_design-system_src_design-system_splitbutton_dropdown_dropdownbutton.tsx_166",type:a,danger:r,disabled:c,"aria-label":B,size:e.size,css:{borderTopLeftRadius:"0 !important",borderBottomLeftRadius:"0 !important",..."small"===e.size?{"&&&":{paddingLeft:`${t.spacing.xs}px !important`,paddingRight:`${t.spacing.xs}px !important`,width:"24px !important"}}:{}},children:N||(0,n.Y)(y.A,{})})]);return(0,n.FD)(b,{...q,className:p()(U,x),children:[K,void 0!==E?(0,n.Y)(d.A,{...V,overlay:E,children:J}):(0,n.FD)(f.Root,{...Y,itemHtmlType:"submit"===w?"submit":void 0,children:[(0,n.Y)(f.Trigger,{disabled:c,asChild:!0,children:J}),M&&s.cloneElement(M,{align:M.props.align||"end"})]})]})};var w=i(817262),C=i(429608),x=i(639712);let E={display:"inline-flex",position:"relative",verticalAlign:"middle"},P=r()(function(e,t,i){let n=`.${e}-btn`,a=`.${e}-btn-primary`,r=`.${e}-dropdown-trigger`,s=`.${e}-btn-group-sm`,l={[n]:{...(0,w.o8)(t),boxShadow:t.shadows.xs,height:"small"===i?t.general.iconSize:t.general.heightSm,padding:"4px 12px","&:focus-visible":{outlineStyle:"solid",outlineWidth:"2px",outlineOffset:"-2px",outlineColor:t.colors.actionDefaultBorderFocus},".anticon, &:focus-visible .anticon":{color:t.colors.textSecondary},"&:hover .anticon":{color:t.colors.actionDefaultIconHover},"&:active .anticon":{color:t.colors.actionDefaultIconPress}},[`${n}:first-of-type`]:{borderTopRightRadius:"0px !important",borderBottomRightRadius:"0px !important"},[a]:{...(0,w.p_)(t),boxShadow:t.shadows.xs,"&:first-of-type":{borderRight:`1px solid ${t.colors.actionPrimaryTextDefault}`,marginRight:1},[r]:{borderLeft:`1px solid ${t.colors.actionPrimaryTextDefault}`},"&:focus-visible":{outlineStyle:"solid",outlineWidth:"1px",outlineOffset:"-3px",outlineColor:t.colors.white},".anticon, &:hover .anticon, &:active .anticon, &:focus-visible .anticon":{color:t.colors.actionPrimaryIcon}},[r]:{padding:3,borderLeftColor:"transparent",width:t.general.heightSm},[`&${s}`]:{[r]:{padding:5}},"&&":{[`[disabled], ${a}[disabled]`]:{...(0,w.J5)(t),boxShadow:"none","&:first-of-type":{borderRight:`1px solid ${t.colors.actionPrimaryIcon}`,marginRight:1},[r]:{borderLeft:`1px solid ${t.colors.actionPrimaryIcon}`},".anticon, &:hover .anticon, &:active .anticon, &:focus-visible .anticon":{color:t.colors.actionDisabledText}},[`${a}[disabled]`]:{...(0,w.LM)(t),".anticon, &:hover .anticon, &:active .anticon, &:focus-visible .anticon":{color:t.colors.actionPrimaryTextDefault}}},[`${n}:not(:first-of-type)`]:{width:t.general.heightSm,padding:"3px !important",borderTopLeftRadius:"0px !important",borderBottomLeftRadius:"0px !important"},...(0,C.Cx)(t.options.enableAnimation)},c=(0,x.dg)(l);return(0,o.AH)(c)},(e,t,i)=>`${(0,x.H6)(t)}|${e}|${i??""}|${!!t.options.enableAnimation}`),O=e=>{let{theme:t,classNamePrefix:i}=(0,h.wn)(),{children:o,icon:a,deprecatedMenu:r,type:l,loading:c,loadingButtonStyles:d,placement:u,dangerouslySetAntdProps:p,size:f,...g}=e,b=t.general.iconFontSize+24+2*t.general.borderWidth,[w,x]=(0,s.useState)(b),O=(0,s.useCallback)(e=>{if(void 0===c)return;e&&!c&&x(e.getBoundingClientRect().width)},[c]),S=(0,s.useMemo)(()=>({width:w,fontSize:t.general.iconFontSize,...d}),[w,t.general.iconFontSize,d]),k=(0,s.useMemo)(()=>({fontSize:t.general.iconFontSize}),[t.general.iconFontSize]);return(0,n.Y)(C.wC,{children:(0,n.Y)("div",{ref:O,css:E,children:c?(0,n.Y)(m.$n,{componentId:"codegen_design-system_src_design-system_splitbutton_splitbutton.tsx_163",type:"default"===l?void 0:l,style:S,loading:!0,htmlType:e.htmlType,title:e.title,className:e.className,size:e.size,children:o}):(0,n.Y)(v,{...g,size:e.size,overlay:r,trigger:A,css:P(i,t,f),icon:(0,n.Y)(y.A,{css:k,"aria-hidden":"true"}),placement:u||"bottomRight",type:"default"===l?void 0:l,leftButtonIcon:a,...p,children:o})})})},A=["click"]},660488:(e,t,i)=>{i.d(t,{A:()=>n});let n=i(815645).A},815645:(e,t,i)=>{i.d(t,{A:()=>C});var n=i(657709),o=i(513384),a=i(692738),r=i(366787),s=i(783772),l=i.n(s),c=i(974323),d=i(324399),u=i(481988),p=i(464953),m=i(513266),f=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]]);return i},g=p.A.Group,h=function(e){var t=a.useContext(m.QO),i=t.getPopupContainer,o=t.getPrefixCls,r=t.direction,s=e.prefixCls,c=e.type,h=e.disabled,y=e.onClick,b=e.htmlType,v=e.children,w=e.className,x=e.overlay,E=e.trigger,P=e.align,O=e.visible,A=e.onVisibleChange,S=e.placement,k=e.getPopupContainer,R=e.href,z=e.icon,N=void 0===z?a.createElement(u.A,null):z,I=e.title,L=e.buttonsRender,T=e.mouseEnterDelay,$=e.mouseLeaveDelay,Q=e.overlayClassName,_=e.overlayStyle,D=f(e,["prefixCls","type","disabled","onClick","htmlType","children","className","overlay","trigger","align","visible","onVisibleChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle"]),B=o("dropdown-button",s),M={align:P,overlay:x,disabled:h,trigger:h?[]:E,onVisibleChange:A,getPopupContainer:k||i,mouseEnterDelay:T,mouseLeaveDelay:$,overlayClassName:Q,overlayStyle:_};"visible"in e&&(M.visible=O),"placement"in e?M.placement=S:M.placement="rtl"===r?"bottomLeft":"bottomRight";var F=L([a.createElement(p.A,{type:c,disabled:h,onClick:y,htmlType:b,href:R,title:I},v),a.createElement(p.A,{type:c,icon:N})]),Y=(0,d.A)(F,2),j=Y[0],W=Y[1];return a.createElement(g,(0,n.A)({},D,{className:l()(B,w)}),j,a.createElement(C,M,W))};h.__ANT_BUTTON=!0,h.defaultProps={type:"default",buttonsRender:function(e){return e}};var y=i(32493),b=i(340644),v=i(600097);(0,b.P)("topLeft","topCenter","topRight","bottomLeft","bottomCenter","bottomRight");var w=function(e){var t,i=a.useContext(m.QO),s=i.getPopupContainer,d=i.getPrefixCls,u=i.direction,p=function(t){var i,n=e.overlay;i="function"==typeof n?n():n;var o=(i=a.Children.only("string"==typeof i?a.createElement("span",null,i):i)).props;(0,y.A)(!o.mode||"vertical"===o.mode,"Dropdown",'mode="'.concat(o.mode,"\" is not supported for Dropdown's Menu."));var r=o.selectable,s=o.expandIcon,l=void 0!==s&&a.isValidElement(s)?s:a.createElement("span",{className:"".concat(t,"-menu-submenu-arrow")},a.createElement(c.A,{className:"".concat(t,"-menu-submenu-arrow-icon")}));return"string"==typeof i.type?i:(0,v.Ob)(i,{mode:"vertical",selectable:void 0!==r&&r,expandIcon:l})},f=e.arrow,g=e.prefixCls,h=e.children,b=e.trigger,w=e.disabled,C=e.getPopupContainer,x=e.overlayClassName,E=d("dropdown",g),P=a.Children.only(h),O=(0,v.Ob)(P,{className:l()("".concat(E,"-trigger"),(0,o.A)({},"".concat(E,"-rtl"),"rtl"===u),P.props.className),disabled:w}),A=l()(x,(0,o.A)({},"".concat(E,"-rtl"),"rtl"===u)),S=w?[]:b;return S&&-1!==S.indexOf("contextMenu")&&(t=!0),a.createElement(r.A,(0,n.A)({arrow:f,alignPoint:t},e,{overlayClassName:A,prefixCls:E,getPopupContainer:C||s,transitionName:function(){var t=d(),i=e.placement,n=e.transitionName;if(void 0!==n)return n;if((void 0===i?"":i).indexOf("top")>=0)return"".concat(t,"-slide-down");return"".concat(t,"-slide-up")}(),trigger:S,overlay:function(){return p(E)},placement:function(){var t=e.placement;if(void 0!==t)return t;return"rtl"===u?"bottomRight":"bottomLeft"}()}),O)};w.Button=h,w.defaultProps={mouseEnterDelay:.15,mouseLeaveDelay:.1};let C=w},976477:(e,t,i)=>{i.d(t,{$e:()=>C,Cc:()=>w,JE:()=>b,_S:()=>y,fh:()=>x,vd:()=>v});var n=i(692738),o=i(141078),a=i(278983),r=i(837213),s=i(441535),l=i(169750),c=i(21994),d=i(267647),u=i(667936),p=i(222006),m=i(570512),f=i(377936),g=i(935963);function h(e,t,i,n,o,a,r){try{var s=e[a](r),l=s.value}catch(e){i(e);return}s.done?t(l):Promise.resolve(l).then(n,o)}let y="optimizeProfileAgent",b="/analyze",v="Analyze my profile",w=`You are a Databricks experienced data engineer who is debugging Databricks SQL queries and Python Spark DataFrames to find possible speed optimizations.

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
`,x=({getTablesInAllCodeBlocks:e,source:t,userId:v,...x})=>{let E=(0,o.mK)();return(0,n.useMemo)(()=>({name:y,makeContext:(0,d.x)({makeContext:({context:t={},userMessage:n,promptId:o})=>{var r;return(r=function*(){let{currentCodeBlock:r={language:"",code:""}}=t??{},{language:d,code:g}=r,h={index:1,sourceMap:{}},{getQueryProfileContext:b,getQueryInsightsContext:w}=yield(()=>{let e=()=>Promise.all([i.e(62280),i.e(62394),i.e(62621),i.e(25230),i.e(84904),i.e(66537)]).then(i.bind(i,731261));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(731261,"../context/configurableContext","lazy",e);return e()})(),C=/^\/analyze Query [0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(n||""),P=[];C&&(P=n?.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i)||[],(0,a.y)("clientsideEvent",{eventType:"optimize-profile",eventName:`analyze-${P.slice(0,1).join(",")}`,lakesenseTraceId:o,source:d}));let O={contextObject:t,apolloClient:E,agentName:y,userMessage:n,lakesenseTraceId:o,statementIds:P,getTablesInAllCodeBlocks:e,citations:h,promptBuilderOptions:{isCompletion:(0,s.W)("databricks.fe.editor.enableCitationV2",!1)},...x},A={[l.E.RELEVANT_TABLE]:()=>(0,c.TN)({...O}),[l.E.QUERY_PROFILE]:()=>b({...O}),[l.E.USER_QUERIES]:()=>(0,u.$O)({...O,userId:v}),[l.E.NOTEBOOK_CELLS]:()=>(0,p.Bc)({...O,userId:v})};(0,f.Yg)()&&(A[l.E.QUERY_INSIGHTS]=()=>w({...O}));let S=yield Promise.all(Object.values(A).map(e=>e())),k=S.filter(e=>""!==e.prompt).map(e=>e.prompt.slice(0,6e3)).join("\n");return{prompt:`Here is the code to optimize: 
\`\`\`${d}
${g}
\`\`\`
${k}`,citations:h,...(0,m.Az)(S)}},function(){var e=this,t=arguments;return new Promise(function(i,n){var o=r.apply(e,t);function a(e){h(o,i,n,a,s,"next",e)}function s(e){h(o,i,n,a,s,"throw",e)}a(void 0)})})()},agentName:y}),userMessageMatchesAgent:e=>e.startsWith(b),extractHistory:()=>[],get model(){return(0,g.f)()},instructions:e=>((0,f.Yg)()?C:w)+(e.includes("gpt-4")?(0,s.W)("databricks.fe.editor.enableCitationV2",!1)?`

${r.u4}`:`

${r.nA}`:"")+(e.includes("gpt-4")?`
${r.Eq}`:"")}),[E,e,x,v])}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/83526.e949eea222.chunk.js.map