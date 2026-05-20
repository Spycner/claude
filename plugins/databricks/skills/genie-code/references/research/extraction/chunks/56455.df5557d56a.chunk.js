"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[56455,70165,71048,83526],{149216:(e,t,o)=>{o.d(t,{b:()=>n});let n=(0,o(480006).u1)("keybindingService")},301454:(e,t,o)=>{o.a(e,async(e,n)=>{try{o.d(t,{_U:()=>p,gL:()=>m,u1:()=>d});var i=o(610435),r=o(692738),a=o(886100),s=o(22191),l=o(759458),c=o(470759),u=e([c]);function d({children:e,...t}){let[o]=(0,r.useState)(()=>(0,c.Xs)(t));return(0,r.useEffect)(()=>{o.setState(t)},[o,t]),(0,i.Y)(h.Provider,{value:o,children:e})}c=(u.then?(await u)():u)[0];let f=(0,c.Xs)({}),h=(0,r.createContext)(f);function p(){let e=(0,r.useContext)(h);return(0,r.useEffect)(()=>{if(e.getState().source===c.CM){let e=Error();a.iT.sev3(s.Es.Assistant,"InlineQuickFixStoreProvider not found in the component tree",e.stack)}},[e]),e}function m(e,t){let o=p();return(0,l.Pj)(o,e,t)}n()}catch(e){n(e)}})},325334:(e,t,o)=>{o.d(t,{G:()=>i.G,T:()=>n.T});var n=o(841508),i=o(565082)},365184:(e,t,o)=>{o.d(t,{Ft:()=>s,V7:()=>a,Xo:()=>l,ok:()=>i,xb:()=>r});var n=o(812145);function i(e,t){if(!e)throw Error(t?`Assertion failed (${t})`:"Assertion Failed")}function r(e,t="Unreachable"){throw Error(t)}function a(e){e||(0,n.dz)(new n.D7("Soft Assertion Failed"))}function s(e){e()||(e(),(0,n.dz)(new n.D7("Assertion Failed")))}function l(e,t){let o=0;for(;o<e.length-1;){if(!t(e[o],e[o+1]))return!1;o++}return!0}},366787:(e,t,o)=>{o.d(t,{A:()=>m});var n=o(513384),i=o(324399),r=o(354104),a=o(692738),s=o(781381),l=o(783772),c=o.n(l),u={adjustX:1,adjustY:1},d=[0,0];let p={topLeft:{points:["bl","tl"],overflow:u,offset:[0,-4],targetOffset:d},topCenter:{points:["bc","tc"],overflow:u,offset:[0,-4],targetOffset:d},topRight:{points:["br","tr"],overflow:u,offset:[0,-4],targetOffset:d},bottomLeft:{points:["tl","bl"],overflow:u,offset:[0,4],targetOffset:d},bottomCenter:{points:["tc","bc"],overflow:u,offset:[0,4],targetOffset:d},bottomRight:{points:["tr","br"],overflow:u,offset:[0,4],targetOffset:d}},m=a.forwardRef(function(e,t){var o,l,u,d=e.arrow,m=void 0!==d&&d,f=e.prefixCls,h=void 0===f?"rc-dropdown":f,g=e.transitionName,y=e.animation,b=e.align,v=e.placement,C=e.placements,E=e.getPopupContainer,w=e.showAction,k=e.hideAction,x=e.overlayClassName,S=e.overlayStyle,A=e.visible,P=e.trigger,R=void 0===P?["hover"]:P,L=(0,r.A)(e,["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger"]),N=a.useState(),z=(0,i.A)(N,2),O=z[0],I=z[1],T="visible"in e?A:O,_=a.useRef(null);a.useImperativeHandle(t,function(){return _.current});var D=function(){var t=e.overlay;return"function"==typeof t?t():t},Q=function(t){var o=e.onOverlayClick,n=D().props;I(!1),o&&o(t),n.onClick&&n.onClick(t)},q=function(){var e=D(),t={prefixCls:"".concat(h,"-menu"),onClick:Q};return"string"==typeof e.type&&delete t.prefixCls,a.createElement(a.Fragment,null,m&&a.createElement("div",{className:"".concat(h,"-arrow")}),a.cloneElement(e,t))},$=k;return $||-1===R.indexOf("contextMenu")||($=["click"]),a.createElement(s.A,Object.assign({},L,{prefixCls:h,ref:_,popupClassName:c()(x,(0,n.A)({},"".concat(h,"-show-arrow"),m)),popupStyle:S,builtinPlacements:void 0===C?p:C,action:R,showAction:w,hideAction:$||[],popupPlacement:void 0===v?"bottomLeft":v,popupAlign:b,popupTransitionName:g,popupAnimation:y,popupVisible:T,stretch:!function(){var t=e.minOverlayWidthMatchTrigger,o=e.alignPoint;if("minOverlayWidthMatchTrigger"in e)return t;return!o}()?"":"minWidth",popup:function(){if("function"==typeof e.overlay)return q;return q()}(),onPopupVisibleChange:function(t){var o=e.onVisibleChange;I(t),"function"==typeof o&&o(t)},getPopupContainer:E}),(l=(o=e.children).props?o.props:{},u=c()(l.className,function(){var t=e.openClassName;if(void 0!==t)return t;return"".concat(h,"-open")}()),O&&o?a.cloneElement(o,{className:u}):o))})},433072:(e,t,o)=>{o.a(e,async(e,n)=>{try{o.r(t),o.d(t,{formatDiffForSafetyCheck:()=>s});var i=o(521156),r=e([i]);function a({action:e,actionSymbol:t,contentLines:o,lineRange:n}){let i=[];if(n.startLineNumber>=n.endLineNumberExclusive)return i;i.push(`  ${e} (lines ${n.startLineNumber}-${n.endLineNumberExclusive-1}):`);for(let e=n.startLineNumber;e<n.endLineNumberExclusive&&e-1<o.length;e++)i.push(`    ${t} ${o[e-1]||"(empty line)"}`);return i}function s({contentBefore:e,contentAfter:t}){let o=(0,i.d9)(e,t),n=e.split("\n"),r=t.split("\n"),l=[];for(let e=0;e<o.length;e++){let{originalLineRange:t,modifiedLineRange:i}=o[e];l.push(`Change ${e+1}:`),l.push(...a({action:"Removed",actionSymbol:"-",contentLines:n,lineRange:t})),l.push(...a({action:"Added",actionSymbol:"+",contentLines:r,lineRange:i})),l.push("")}return l.join("\n")}i=(r.then?(await r)():r)[0],n()}catch(e){n(e)}})},481988:(e,t,o)=>{o.d(t,{A:()=>l});var n=o(554390),i=o(692738);let r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};var a=o(271177),s=function(e,t){return i.createElement(a.A,(0,n.A)((0,n.A)({},e),{},{ref:t,icon:r}))};s.displayName="EllipsisOutlined";let l=i.forwardRef(s)},488759:(e,t,o)=>{o.d(t,{W:()=>r});var n=o(36287),i=o(22967);class r{static{this.zero=new r(0,0)}static lengthDiffNonNegative(e,t){if(t.isLessThan(e))return r.zero;if(e.lineCount===t.lineCount)return new r(0,t.columnCount-e.columnCount);return new r(t.lineCount-e.lineCount,t.columnCount)}static betweenPositions(e,t){if(e.lineNumber===t.lineNumber)return new r(0,t.column-e.column);return new r(t.lineNumber-e.lineNumber,t.column-1)}static ofRange(e){return r.betweenPositions(e.getStartPosition(),e.getEndPosition())}static ofText(e){let t=0,o=0;for(let n of e)"\n"===n?(t++,o=0):o++;return new r(t,o)}constructor(e,t){this.lineCount=e,this.columnCount=t}isZero(){return 0===this.lineCount&&0===this.columnCount}isLessThan(e){if(this.lineCount!==e.lineCount)return this.lineCount<e.lineCount;return this.columnCount<e.columnCount}isGreaterThan(e){if(this.lineCount!==e.lineCount)return this.lineCount>e.lineCount;return this.columnCount>e.columnCount}isGreaterThanOrEqualTo(e){if(this.lineCount!==e.lineCount)return this.lineCount>e.lineCount;return this.columnCount>=e.columnCount}equals(e){return this.lineCount===e.lineCount&&this.columnCount===e.columnCount}compare(e){if(this.lineCount!==e.lineCount)return this.lineCount-e.lineCount;return this.columnCount-e.columnCount}add(e){if(0===e.lineCount)return new r(this.lineCount,this.columnCount+e.columnCount);return new r(this.lineCount+e.lineCount,e.columnCount)}createRange(e){if(0===this.lineCount)return new i.Q(e.lineNumber,e.column,e.lineNumber,e.column+this.columnCount);return new i.Q(e.lineNumber,e.column,e.lineNumber+this.lineCount,this.columnCount+1)}toRange(){return new i.Q(1,1,this.lineCount+1,this.columnCount+1)}addToPosition(e){if(0===this.lineCount)return new n.y(e.lineNumber,e.column+this.columnCount);return new n.y(e.lineNumber+this.lineCount,this.columnCount+1)}toString(){return`${this.lineCount},${this.columnCount}`}}},498635:(e,t,o)=>{o.a(e,async(e,n)=>{try{o.d(t,{cz:()=>u,nk:()=>l,q0:()=>c});var i=o(940912),r=o(723562),a=o(214056),s=e([a]);a=(s.then?(await s)():s)[0];let d=new Map;function l(e,t,o){var n;n=o.id,d.has(n)||d.set(o.id,{refCount:0,callbacks:new WeakMap,disposer:(0,a.Q)().addEditorAction({...o,run:(0,r.VJ)((e,...t)=>{let n=c(o.id,e);return n&&n(e,...t)},t)})});let s=d.get(o.id);return s.refCount++,s.callbacks.set(e,(0,i.yB)().wrapNoProxy(o.run)),{dispose:()=>{s.refCount--,s.callbacks.delete(e),0===s.refCount&&(s.disposer.dispose(),d.delete(o.id))}}}function c(e,t){return d.get(e)?.callbacks.get(t)}function u(){d.clear()}n()}catch(e){n(e)}})},538160:(e,t,o)=>{o.d(t,{f:()=>S});var n=o(610435),i=o(956935),r=o(91958),a=o.n(r),s=o(692738),l=o(600295),c=o(464953),u=o(660488),d=o(783772),p=o.n(d),m=o(79128),f=o(687828),h=o(227195),g=o(497895),y=o(943844);let b=c.A.Group,v=e=>{let{theme:t}=(0,g.wn)(),{getPopupContainer:o,getPrefixCls:i}=(0,h.G)(),{type:r,danger:a,disabled:c,loading:d,onClick:v,htmlType:C,children:E,className:w,overlay:k,trigger:x,align:S,open:A,onOpenChange:P,placement:R,getPopupContainer:L,href:N,icon:z=(0,n.Y)(l.A,{}),title:O,buttonsRender:I=e=>e,mouseEnterDelay:T,mouseLeaveDelay:_,overlayClassName:D,overlayStyle:Q,destroyPopupOnHide:q,menuButtonLabel:$="Open dropdown",menu:M,leftButtonIcon:Y,dropdownMenuRootProps:U,"aria-label":F,componentId:B,analyticsEvents:j,form:W,...G}=e,V=i("dropdown-button"),H={align:S,overlay:k,disabled:c,trigger:c?[]:x,onOpenChange:P,getPopupContainer:L||o,mouseEnterDelay:T,mouseLeaveDelay:_,overlayClassName:D,overlayStyle:Q,destroyPopupOnHide:q};"open"in e&&(H.open=A),"placement"in e?H.placement=R:H.placement="bottomRight";let[J,K]=I([(0,n.FD)(m.$n,{componentId:B?`${B}.primary_button`:"codegen_design-system_src_design-system_splitbutton_dropdown_dropdownbutton.tsx_148",type:r,form:W,danger:a,disabled:c,loading:d,onClick:v,htmlType:C,href:N,title:O,icon:E&&Y?Y:void 0,"aria-label":F,size:e.size,css:{borderTopRightRadius:"0 !important",borderBottomRightRadius:"0 !important"},children:[Y&&!E?Y:void 0,E]}),(0,n.Y)(m.$n,{componentId:B?`${B}.dropdown_button`:"codegen_design-system_src_design-system_splitbutton_dropdown_dropdownbutton.tsx_166",type:r,danger:a,disabled:c,"aria-label":$,size:e.size,css:{borderTopLeftRadius:"0 !important",borderBottomLeftRadius:"0 !important",..."small"===e.size?{"&&&":{paddingLeft:`${t.spacing.xs}px !important`,paddingRight:`${t.spacing.xs}px !important`,width:"24px !important"}}:{}},children:z||(0,n.Y)(y.A,{})})]);return(0,n.FD)(b,{...G,className:p()(V,w),children:[J,void 0!==k?(0,n.Y)(u.A,{...H,overlay:k,children:K}):(0,n.FD)(f.Root,{...U,itemHtmlType:"submit"===C?"submit":void 0,children:[(0,n.Y)(f.Trigger,{disabled:c,asChild:!0,children:K}),M&&s.cloneElement(M,{align:M.props.align||"end"})]})]})};var C=o(817262),E=o(429608),w=o(639712);let k={display:"inline-flex",position:"relative",verticalAlign:"middle"},x=a()(function(e,t,o){let n=`.${e}-btn`,r=`.${e}-btn-primary`,a=`.${e}-dropdown-trigger`,s=`.${e}-btn-group-sm`,l={[n]:{...(0,C.o8)(t),boxShadow:t.shadows.xs,height:"small"===o?t.general.iconSize:t.general.heightSm,padding:"4px 12px","&:focus-visible":{outlineStyle:"solid",outlineWidth:"2px",outlineOffset:"-2px",outlineColor:t.colors.actionDefaultBorderFocus},".anticon, &:focus-visible .anticon":{color:t.colors.textSecondary},"&:hover .anticon":{color:t.colors.actionDefaultIconHover},"&:active .anticon":{color:t.colors.actionDefaultIconPress}},[`${n}:first-of-type`]:{borderTopRightRadius:"0px !important",borderBottomRightRadius:"0px !important"},[r]:{...(0,C.p_)(t),boxShadow:t.shadows.xs,"&:first-of-type":{borderRight:`1px solid ${t.colors.actionPrimaryTextDefault}`,marginRight:1},[a]:{borderLeft:`1px solid ${t.colors.actionPrimaryTextDefault}`},"&:focus-visible":{outlineStyle:"solid",outlineWidth:"1px",outlineOffset:"-3px",outlineColor:t.colors.white},".anticon, &:hover .anticon, &:active .anticon, &:focus-visible .anticon":{color:t.colors.actionPrimaryIcon}},[a]:{padding:3,borderLeftColor:"transparent",width:t.general.heightSm},[`&${s}`]:{[a]:{padding:5}},"&&":{[`[disabled], ${r}[disabled]`]:{...(0,C.J5)(t),boxShadow:"none","&:first-of-type":{borderRight:`1px solid ${t.colors.actionPrimaryIcon}`,marginRight:1},[a]:{borderLeft:`1px solid ${t.colors.actionPrimaryIcon}`},".anticon, &:hover .anticon, &:active .anticon, &:focus-visible .anticon":{color:t.colors.actionDisabledText}},[`${r}[disabled]`]:{...(0,C.LM)(t),".anticon, &:hover .anticon, &:active .anticon, &:focus-visible .anticon":{color:t.colors.actionPrimaryTextDefault}}},[`${n}:not(:first-of-type)`]:{width:t.general.heightSm,padding:"3px !important",borderTopLeftRadius:"0px !important",borderBottomLeftRadius:"0px !important"},...(0,E.Cx)(t.options.enableAnimation)},c=(0,w.dg)(l);return(0,i.AH)(c)},(e,t,o)=>`${(0,w.H6)(t)}|${e}|${o??""}|${!!t.options.enableAnimation}`),S=e=>{let{theme:t,classNamePrefix:o}=(0,g.wn)(),{children:i,icon:r,deprecatedMenu:a,type:l,loading:c,loadingButtonStyles:u,placement:d,dangerouslySetAntdProps:p,size:f,...h}=e,b=t.general.iconFontSize+24+2*t.general.borderWidth,[C,w]=(0,s.useState)(b),S=(0,s.useCallback)(e=>{if(void 0===c)return;e&&!c&&w(e.getBoundingClientRect().width)},[c]),P=(0,s.useMemo)(()=>({width:C,fontSize:t.general.iconFontSize,...u}),[C,t.general.iconFontSize,u]),R=(0,s.useMemo)(()=>({fontSize:t.general.iconFontSize}),[t.general.iconFontSize]);return(0,n.Y)(E.wC,{children:(0,n.Y)("div",{ref:S,css:k,children:c?(0,n.Y)(m.$n,{componentId:"codegen_design-system_src_design-system_splitbutton_splitbutton.tsx_163",type:"default"===l?void 0:l,style:P,loading:!0,htmlType:e.htmlType,title:e.title,className:e.className,size:e.size,children:i}):(0,n.Y)(v,{...h,size:e.size,overlay:a,trigger:A,css:x(o,t,f),icon:(0,n.Y)(y.A,{css:R,"aria-hidden":"true"}),placement:d||"bottomRight",type:"default"===l?void 0:l,leftButtonIcon:r,...p,children:i})})})},A=["click"]},569885:(e,t,o)=>{o.d(t,{EY:()=>k,Qw:()=>w,ZP:()=>E,bA:()=>x,ns:()=>C});var n=o(692738),i=o(141078),r=o(837213),a=o(441535),s=o(169750),l=o(21994),c=o(667936),u=o(880797),d=o(267647),p=o(222006),m=o(570512),f=o(935963),h=o(607030),g=o(511022),y=o(629033);function b(e,t,o,n,i,r,a){try{var s=e[r](a),l=s.value}catch(e){o(e);return}s.done?t(l):Promise.resolve(l).then(n,i)}function v(e){return function(){var t=this,o=arguments;return new Promise(function(n,i){var r=e.apply(t,o);function a(e){b(r,n,i,a,s,"next",e)}function s(e){b(r,n,i,a,s,"throw",e)}a(void 0)})}}let C="/optimize",E="Optimize my code",w=`You are an SQL Analyst and performance expert in Databricks SQL. Your job is first to find some of the following optimizations, then propose a new SQL query in a code block with the optimizations applied.

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
`,k="optimizeCodeAgent",x=({getTablesInAllCodeBlocks:e,source:t,userId:o,...b})=>{let E=(0,i.mK)();return(0,n.useMemo)(()=>({name:k,makeContext:(0,d.x)({makeContext:({context:t={},userMessage:n,promptId:i})=>v(function*(){let{currentCodeBlock:r={language:"",code:""}}=t??{},{language:d,code:C}=r,w={index:1,sourceMap:{}},x={contextObject:t,apolloClient:E,agentName:k,userMessage:n,lakesenseTraceId:i,getTablesInAllCodeBlocks:e,citations:w,promptBuilderOptions:{isCompletion:(0,a.W)("databricks.fe.editor.enableCitationV2",!1)},...b},S={[s.E.RELEVANT_TABLE]:()=>(0,l.TN)({...x}),[s.E.USER_QUERIES]:()=>(0,c.$O)({...x,userId:o}),[s.E.NOTEBOOK_CELLS]:()=>(0,p.Bc)({...x,userId:o}),[s.E.DOCS_SEARCH]:()=>v(function*(){let e=yield(0,g.kA)({model:(0,f.f)(),messageHistory:[],newUserMessage:{role:h.oW.user,content:`The Databricks SQL query is:
\`\`\`sql
${C}
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
`},metadata:{clientId:y.O.EditorAssistant,traceId:i??"",agentName:k},stream:!1}),t=e[0].message.content?.toLowerCase().split("\n").filter(e=>""!==e.trim()).map(e=>`"${e}"`).join(" OR ")??"/optimizer optimize SQL";return(0,u.ar)({...x,query:t})})()},A=yield Promise.all(Object.values(S).map(e=>e())),P=A.filter(e=>""!==e.prompt).map(e=>e.prompt.slice(0,6e3)).join("\n");return{prompt:`Here is the sql code to optimize: 
\`\`\`${d}
${C}
\`\`\`
${P}`,citations:w,...(0,m.Az)(A)}})(),agentName:k}),userMessageMatchesAgent:e=>e.startsWith(C),extractHistory:()=>[],get model(){return(0,f.f)()},instructions:e=>w+(e.includes("gpt-4")?(0,a.W)("databricks.fe.editor.enableCitationV2",!1)?`

${r.u4}`:`

${r.nA}`:"")+(e.includes("gpt-4")?`
${r.Eq}`:""),responseFormat:(0,a.W)("databricks.fe.editor.streamingStructureOutput",!1)?S:void 0}),[E,e,b,o])},S={type:"json_schema",json_schema:{strict:!0,name:"response",schema:{type:"object",properties:{response:{type:"string",description:"Optimized code"},citations:{type:"array",items:{type:"object",properties:{url:{type:"string",description:"Url of the citation, link of the citation"},text:{type:"string",description:"Name of a citation, it can be several words that describe the citation"},type:{type:"string",description:"Type of a citation, it can be a doc, notebook, query ..."}},description:"If you cite anything in the context BEGIN_RELATED_PASSAGES part to generate the optimize code, please provide the citation here",required:["url","text","type"],additionalProperties:!1}}},required:["response","citations"],additionalProperties:!1}}}},628363:(e,t,o)=>{o.d(t,{I:()=>r});var n=o(692738),i=o(698744);function r({editorInstance:e,afterLineNumber:t,heightInPx:o,heightInLines:a,children:s,scrollOnRender:l,existingSelection:c}){let u=(0,n.useRef)(null),d=(0,n.useRef)({domNode:document.createElement("div"),afterLineNumber:t,heightInPx:o,heightInLines:a});return(0,n.useEffect)(()=>{d.current.afterLineNumber=t,d.current.heightInLines=a,d.current.heightInPx=o,e?.changeViewZones(({layoutZone:n})=>{null!==u.current&&(n(u.current),o&&o>1&&l?requestAnimationFrame(()=>{requestAnimationFrame(()=>{l(e,t),c&&e?.setSelection(c)})}):c&&e?.setSelection(c))})},[t,o,a,e,l,c]),(0,n.useEffect)(()=>(e?.changeViewZones(({addZone:e})=>{u.current=e(d.current)}),()=>{e?.changeViewZones(({removeZone:e})=>{null!==u.current&&(e(u.current),u.current=null)})}),[e]),(0,i.createPortal)(s,d.current.domNode)}},660488:(e,t,o)=>{o.d(t,{A:()=>n});let n=o(815645).A},723562:(e,t,o)=>{o.d(t,{DQ:()=>S,Er:()=>x,H6:()=>P,PD:()=>w,VJ:()=>L,iB:()=>R});var n=o(610435),i=o(944464),r=o.n(i),a=o(692738),s=o(336330),l=o(876726),c=o(140078),u=o(342411),d=o(441535),p=o(726977),m=o(278983),f=o(863708),h=o(22191),g=o(782357);let y={notebookEditor:p.s.UnifiedEditorNotebookEditor,notebookDiffViewer:p.s.UnifiedEditorNotebookDiffViewer,jobsEditor:p.s.UnifiedEditorJobsEditor,lakebuilderEditor:p.s.UnifiedEditorLakebuilderEditor,lakeviewEditor:p.s.UnifiedEditorLakeviewEditor,repoGitDiffCode:p.s.UnifiedEditorRepoGitDiffCode,repoGitMergeConflict:p.s.UnifiedEditorRepoGitMergeConflict,sqleReact:p.s.UnifiedEditorSqleReact,test:p.s.Test,storybook:p.s.Storybook,sqleAutocomplete:p.s.UnifiedEditorSqleAutocomplete,sqleFixme:p.s.UnifiedEditorSqleFixme,sqleDetails:p.s.UnifiedEditorSqleDetails,assistantCell:p.s.AssistantCell,assistantInput:p.s.AssistantPanel,jobsValueReferencesEditor:p.s.JobsUiRoot,dataRoomsEditor:p.s.DataRoomsRoot,playgroundEditor:p.s.PlaygroundChat,standaloneAlerts:p.s.StandaloneAlerts,ingestionPipelineEditor:p.s.IngestionPageWrapper,cleanroomNotebookContentView:p.s.CleanRoomNotebookContentView,lakeflowSettings:p.s.LakeflowPipelineAuthoringSettingsPanel,lakeviewCustomCalcExpressionEditor:p.s.UnifiedEditorLakeviewCustomCalcExpressionEditor,antlrIntellisense:p.s.UnifiedEditorAntlrIntellisense,staticNotebookEditor:p.s.UnifiedEditorStaticNotebookEditor,systemModule:p.s.UnifiedEditorSystemModule,lakeflowConversionWidget:p.s.UnifiedEditorLakeflowConversionWidget,clusterEditor:p.s.UnifiedEditorClusterEditor,sampleDataSQLEditor:p.s.UnifiedEditorSampleDataSqlEditor,policyFunctionEditor:p.s.UnifiedEditorPolicyFunctionEditor,lakewatchEditor:p.s.UnifiedEditorLakewatchEditor,lakewatchJsonEditor:p.s.UnifiedEditorLakewatchJsonEditor,lakewatchYamlEditor:p.s.UnifiedEditorLakewatchYamlEditor,mlflowEvalDatasetsJsonEditor:p.s.UnifiedEditorMlflowEvalDatasetsJsonEditor,dynamicWidgetSourceQueryEditor:p.s.DynamicWidgetSourceQueryEditor,richSqlEditor:p.s.UnifiedEditorRichSqlEditor},b=["No React Error Decoder link found","can't access dead object","Loading chunk"];function v(e){let t=e instanceof Error?e.message:String(e);return b.some(e=>t.match(e))}function C(e,t,o){(0,m.y)("clientsideEvent",{eventType:e,eventName:t},o)}let E=r()(C,3e4);function w(e,t,o){let n=t instanceof Error?t.message:String(t);((0,d.W)("databricks.fe.editor.throttleRecordUnifiedEditorError",!1)?E:C)(void 0===o?"UnifiedEditorCaughtError":"UnifiedEditorErrorBoundary",e,n)}function k(){return(0,n.Y)(l.S,{"data-testid":"fallback",title:(0,n.Y)(u.sA,{id:"qAdWdK",defaultMessage:"Error"}),description:(0,n.Y)(u.sA,{id:"kcl7GO",defaultMessage:"An error occurred while rendering this editor."}),image:(0,n.Y)(c.A,{})})}let x=({module:e,children:t})=>{let o=y[e];return(0,n.Y)(f.JR,{fallback:(0,n.Y)(k,{}),esComponent:h.Es.Editor,errorBoundaryId:o,errorFilter:v,onErrorCallback:(t,o)=>w(e,t,o.componentStack),children:t})},S=()=>{let{showErrorNotification:e}=(0,a.useContext)(g.h);return(0,a.useCallback)((t,o,n)=>{w(t,o,n),e(t)},[e])},A=()=>null,P=(e,t)=>(0,a.forwardRef)((o,i)=>{let r=S();return(0,n.Y)(s.tH,{fallback:(0,n.Y)(A,{}),onError:(e,o)=>r(t,e,o.componentStack),children:(0,n.Y)(e,{ref:i,...o})})}),R=()=>{let e=S();return(0,a.useCallback)((t,o)=>(...n)=>{try{return t(...n)}catch(t){e(o,t)}},[e])},L=(e,t)=>(...o)=>{try{return e(...o)}catch(e){w(t,e)}}},782357:(e,t,o)=>{o.d(t,{F:()=>l,h:()=>s});var n=o(610435),i=o(692738),r=o(258182),a=o(342411);let s=i.createContext({showErrorNotification:()=>{}}),l=({children:e})=>{let[t,o]=(0,i.useState)(null),a=(0,i.useCallback)(e=>o(e),[]);return(0,n.Y)(r.Provider,{children:(0,n.FD)(s.Provider,{value:{showErrorNotification:a},children:[e,(0,n.Y)(c,{module:t,setModule:o}),(0,n.Y)(r.Viewport,{})]})})},c=({module:e,setModule:t})=>(0,n.FD)(r.Root,{componentId:"codegen_editor_src_utils_components_errornotification.tsx_48",onOpenChange:e=>{e||t(null)},open:null!==e,severity:"error",duration:3e3,children:[(0,n.Y)(r.Title,{children:(0,n.Y)(a.sA,{id:"5By2Yp",defaultMessage:`Something went wrong with {module, select,
            sqleAutocomplete {SQL autocomplete}
            sqleFixme {SQL error highlighting}
            sqleDetails {SQL hover details}
            other {the editor}
          }.`,values:{module:e}})}),(0,n.Y)(r.Close,{componentId:"codegen_editor_src_utils_components_errornotification.tsx_61"})]})},785582:(e,t,o)=>{o.d(t,{m:()=>n});class n extends Promise{onCancel;cancelPrevented;completed;cancelled;constructor(e){let t,o=!1;super((n,i)=>e(e=>{o=!0,n(e)},e=>{o=!0,i(e)},e=>t=e)),this.onCancel=t,this.completed=()=>o}cancel(){this.completed()||this.cancelled||this.cancelPrevented||(this.onCancel&&this.onCancel(),this.cancelled=!0)}preventCancel(){this.cancelPrevented=!0}static reject(e){return new n((t,o)=>{o(e)})}static resolve(e){return new n(t=>{t(e)})}}},815645:(e,t,o)=>{o.d(t,{A:()=>E});var n=o(657709),i=o(513384),r=o(692738),a=o(366787),s=o(783772),l=o.n(s),c=o(974323),u=o(324399),d=o(481988),p=o(464953),m=o(513266),f=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]]);return o},h=p.A.Group,g=function(e){var t=r.useContext(m.QO),o=t.getPopupContainer,i=t.getPrefixCls,a=t.direction,s=e.prefixCls,c=e.type,g=e.disabled,y=e.onClick,b=e.htmlType,v=e.children,C=e.className,w=e.overlay,k=e.trigger,x=e.align,S=e.visible,A=e.onVisibleChange,P=e.placement,R=e.getPopupContainer,L=e.href,N=e.icon,z=void 0===N?r.createElement(d.A,null):N,O=e.title,I=e.buttonsRender,T=e.mouseEnterDelay,_=e.mouseLeaveDelay,D=e.overlayClassName,Q=e.overlayStyle,q=f(e,["prefixCls","type","disabled","onClick","htmlType","children","className","overlay","trigger","align","visible","onVisibleChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle"]),$=i("dropdown-button",s),M={align:x,overlay:w,disabled:g,trigger:g?[]:k,onVisibleChange:A,getPopupContainer:R||o,mouseEnterDelay:T,mouseLeaveDelay:_,overlayClassName:D,overlayStyle:Q};"visible"in e&&(M.visible=S),"placement"in e?M.placement=P:M.placement="rtl"===a?"bottomLeft":"bottomRight";var Y=I([r.createElement(p.A,{type:c,disabled:g,onClick:y,htmlType:b,href:L,title:O},v),r.createElement(p.A,{type:c,icon:z})]),U=(0,u.A)(Y,2),F=U[0],B=U[1];return r.createElement(h,(0,n.A)({},q,{className:l()($,C)}),F,r.createElement(E,M,B))};g.__ANT_BUTTON=!0,g.defaultProps={type:"default",buttonsRender:function(e){return e}};var y=o(32493),b=o(340644),v=o(600097);(0,b.P)("topLeft","topCenter","topRight","bottomLeft","bottomCenter","bottomRight");var C=function(e){var t,o=r.useContext(m.QO),s=o.getPopupContainer,u=o.getPrefixCls,d=o.direction,p=function(t){var o,n=e.overlay;o="function"==typeof n?n():n;var i=(o=r.Children.only("string"==typeof o?r.createElement("span",null,o):o)).props;(0,y.A)(!i.mode||"vertical"===i.mode,"Dropdown",'mode="'.concat(i.mode,"\" is not supported for Dropdown's Menu."));var a=i.selectable,s=i.expandIcon,l=void 0!==s&&r.isValidElement(s)?s:r.createElement("span",{className:"".concat(t,"-menu-submenu-arrow")},r.createElement(c.A,{className:"".concat(t,"-menu-submenu-arrow-icon")}));return"string"==typeof o.type?o:(0,v.Ob)(o,{mode:"vertical",selectable:void 0!==a&&a,expandIcon:l})},f=e.arrow,h=e.prefixCls,g=e.children,b=e.trigger,C=e.disabled,E=e.getPopupContainer,w=e.overlayClassName,k=u("dropdown",h),x=r.Children.only(g),S=(0,v.Ob)(x,{className:l()("".concat(k,"-trigger"),(0,i.A)({},"".concat(k,"-rtl"),"rtl"===d),x.props.className),disabled:C}),A=l()(w,(0,i.A)({},"".concat(k,"-rtl"),"rtl"===d)),P=C?[]:b;return P&&-1!==P.indexOf("contextMenu")&&(t=!0),r.createElement(a.A,(0,n.A)({arrow:f,alignPoint:t},e,{overlayClassName:A,prefixCls:k,getPopupContainer:E||s,transitionName:function(){var t=u(),o=e.placement,n=e.transitionName;if(void 0!==n)return n;if((void 0===o?"":o).indexOf("top")>=0)return"".concat(t,"-slide-down");return"".concat(t,"-slide-up")}(),trigger:P,overlay:function(){return p(k)},placement:function(){var t=e.placement;if(void 0!==t)return t;return"rtl"===d?"bottomRight":"bottomLeft"}()}),S)};C.Button=g,C.defaultProps={mouseEnterDelay:.15,mouseLeaveDelay:.1};let E=C},976477:(e,t,o)=>{o.d(t,{$e:()=>E,Cc:()=>C,JE:()=>b,_S:()=>y,fh:()=>w,vd:()=>v});var n=o(692738),i=o(141078),r=o(278983),a=o(837213),s=o(441535),l=o(169750),c=o(21994),u=o(267647),d=o(667936),p=o(222006),m=o(570512),f=o(377936),h=o(935963);function g(e,t,o,n,i,r,a){try{var s=e[r](a),l=s.value}catch(e){o(e);return}s.done?t(l):Promise.resolve(l).then(n,i)}let y="optimizeProfileAgent",b="/analyze",v="Analyze my profile",C=`You are a Databricks experienced data engineer who is debugging Databricks SQL queries and Python Spark DataFrames to find possible speed optimizations.

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
`,E=`
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
`,w=({getTablesInAllCodeBlocks:e,source:t,userId:v,...w})=>{let k=(0,i.mK)();return(0,n.useMemo)(()=>({name:y,makeContext:(0,u.x)({makeContext:({context:t={},userMessage:n,promptId:i})=>{var a;return(a=function*(){let{currentCodeBlock:a={language:"",code:""}}=t??{},{language:u,code:h}=a,g={index:1,sourceMap:{}},{getQueryProfileContext:b,getQueryInsightsContext:C}=yield(()=>{let e=()=>Promise.all([o.e(62280),o.e(62394),o.e(62621),o.e(25230),o.e(84904),o.e(66537)]).then(o.bind(o,731261));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(731261,"../context/configurableContext","lazy",e);return e()})(),E=/^\/analyze Query [0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(n||""),x=[];E&&(x=n?.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i)||[],(0,r.y)("clientsideEvent",{eventType:"optimize-profile",eventName:`analyze-${x.slice(0,1).join(",")}`,lakesenseTraceId:i,source:u}));let S={contextObject:t,apolloClient:k,agentName:y,userMessage:n,lakesenseTraceId:i,statementIds:x,getTablesInAllCodeBlocks:e,citations:g,promptBuilderOptions:{isCompletion:(0,s.W)("databricks.fe.editor.enableCitationV2",!1)},...w},A={[l.E.RELEVANT_TABLE]:()=>(0,c.TN)({...S}),[l.E.QUERY_PROFILE]:()=>b({...S}),[l.E.USER_QUERIES]:()=>(0,d.$O)({...S,userId:v}),[l.E.NOTEBOOK_CELLS]:()=>(0,p.Bc)({...S,userId:v})};(0,f.Yg)()&&(A[l.E.QUERY_INSIGHTS]=()=>C({...S}));let P=yield Promise.all(Object.values(A).map(e=>e())),R=P.filter(e=>""!==e.prompt).map(e=>e.prompt.slice(0,6e3)).join("\n");return{prompt:`Here is the code to optimize: 
\`\`\`${u}
${h}
\`\`\`
${R}`,citations:g,...(0,m.Az)(P)}},function(){var e=this,t=arguments;return new Promise(function(o,n){var i=a.apply(e,t);function r(e){g(i,o,n,r,s,"next",e)}function s(e){g(i,o,n,r,s,"throw",e)}r(void 0)})})()},agentName:y}),userMessageMatchesAgent:e=>e.startsWith(b),extractHistory:()=>[],get model(){return(0,h.f)()},instructions:e=>((0,f.Yg)()?E:C)+(e.includes("gpt-4")?(0,s.W)("databricks.fe.editor.enableCitationV2",!1)?`

${a.u4}`:`

${a.nA}`:"")+(e.includes("gpt-4")?`
${a.Eq}`:"")}),[k,e,w,v])}},986291:(e,t,o)=>{o.d(t,{G:()=>n});let n=(0,o(480006).u1)("themeService")}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/56455.df5557d56a.chunk.js.map