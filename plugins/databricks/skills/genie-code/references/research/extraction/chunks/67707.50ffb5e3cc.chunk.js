"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[156,4972,5830,13268,17293,25230,42934,49177,49934,55308,61652,63511,67707,77775,84885,85025,96226,99918],{1647:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 17 17",...e,children:[(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.5 4.5v10h1v-10zM1 3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM6.5 1.5v13h2v-13zM6 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z",clipRule:"evenodd"}),(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"m11.63 7.74 1.773 6.773.967-.254-1.773-6.771zm-.864-1.324a1 1 0 0 0-.714 1.221l2.026 7.74a1 1 0 0 0 1.22.713l1.936-.506a1 1 0 0 0 .714-1.22l-2.026-7.74a1 1 0 0 0-1.22-.714z",clipRule:"evenodd"})]})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="BooksIcon";let l=s},2419:(e,t,a)=>{a.d(t,{G:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enableUndoRedo",!1)}},2769:(e,t,a)=>{a.d(t,{NF:()=>i,NL:()=>s,Nq:()=>o,iI:()=>r,ms:()=>l,n7:()=>n});let n='"Menlo", "Monaco", "Consolas", "Ubuntu Mono", "Source Code Pro", monospace',r=13,i=22,o=16,s=13,l=12},10680:(e,t,a)=>{a.d(t,{p:()=>m});var n=a(610435),r=a(692738),i=a(160603),o=a(441535),s=a(304926),l=a(518726),u=a(449853),c=a(742996);function d({children:e}){return(0,n.Y)(l.Q,{provider:i.QueryClientProvider,clientAccessor:u.queryClientByWorkspace,children:e})}function m(){let e=(0,s.jE)(),t=(0,o.W)("databricks.fe.filebrowser.enableSharedQueryClient",!1),a=t?e:u.queryClientByWorkspace.getActiveValue(),n=(0,r.useCallback)(a=>t?e.invalidateQueries(a):u.queryClientByWorkspace.getActiveValue().invalidateQueries(a),[t,e]),i=(0,r.useCallback)(()=>n((0,c.f)({})),[n]);return{FileBrowserQueryClientProvider:t?r.Fragment:d,queryClient:a,invalidateFileBrowserQueries:n,invalidateAllFilesQueries:i}}},12623:(e,t,a)=>{a.d(t,{n:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.thumbnails.enableDashboardThumbnailUpload",!1)}},13695:(e,t,a)=>{a.d(t,{M:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.extraTZQueryEnabled",!1)}},18910:(e,t,a)=>{a.d(t,{Du:()=>u,LT:()=>s,Ot:()=>c,QU:()=>f,US:()=>p,VI:()=>d,Vq:()=>m,bF:()=>E,dE:()=>h,l9:()=>i,pQ:()=>g,uV:()=>l});var n,r=a(310338),i=((n={})[n.DO_NOT_POLL=0]="DO_NOT_POLL",n[n.MESSAGE=1]="MESSAGE",n[n.RESULT=2]="RESULT",n);let o=new Set(["SUBMITTED","IN_PROGRESS","FETCHING_METADATA","FILTERING_CONTEXT","ASKING_AI","PENDING_WAREHOUSE","EXECUTING_QUERY"]);function s(e){return!!(e&&o.has(e))}function l(e,t,a){return"CANCELED"===e||!t&&!s(a)}function u(e){return s(e.status)&&e.auto_regenerate_count>0}function c(e){return!!(!e||e.status&&["PENDING_WAREHOUSE","EXECUTING_QUERY"].includes(e.status))}function d(e){if(!e)return 0;let t=e.status,a=e.result?.statement_id,n=!1===e.is_final||s(t);if(e.__force_poll_result)return 3;if(e.__is_optimistic_update||!0===e.is_final||!n)return 0;if(a&&("EXECUTING_QUERY"===t||"PENDING_WAREHOUSE"===t))return 3;return 1}function m(e,t){var a,n,i;let o;for(let l of[...(a=t||[],n=t=>t.id===e,i=!0,o=a.findIndex(n),a.slice(0,o>=0?i?o+1:o:a.length))].reverse()){if((0,r.sn)(l)||l.result?.statement_id)return l;if(!(0,r.NL)(l)&&s(l.status))break}}function p(e,t){if(!e)return;let a=e.data,n=a?.rows.length,r=e?.row_count;if(!t)return r;return n||0===r?n:r}function f(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)){let a=e[t];if(void 0!==a)return a}}function g(e){return e?.is_truncated||e?.data?.meta?.isTruncated}function h(e){return e.client_context?.genie_app_context?.enable_verification===!0}function E(e){return(1&d(e))==1}},19475:(e,t,a)=>{a.d(t,{Ng:()=>s,Nr:()=>n,Pd:()=>o,ih:()=>l,me:()=>i,mh:()=>u,pf:()=>r});let n="databricks-one",r="databricks-one-account",i="lakehouse-homepage",o=1038,s=5,l=5,u="#F9F7F4"},21739:(e,t,a)=>{a.d(t,{CF:()=>u,ZV:()=>d,p_:()=>l,xw:()=>c});var n=a(3330),r=a(886100),i=a(747129),o=a(865763),s=a(64962);function l(e){return e instanceof n.A}function u(e){return new n.A(e)}function c(e,t){let a=function(e){let t=Number(e);if(0===t&&(null===e||""===e||"string"==typeof e&&!/\S/.test(e)))return NaN;return t}(e);if(Number.isNaN(a))return{convertedValue:e,convertedNumberValue:a};try{if(t?.float32ConversionEnabled&&/float/i.test(t?.type??"")){let e=new Float32Array(1);return e[0]=a,{convertedValue:e[0],convertedNumberValue:e[0]}}}catch(e){r.iT.sev2BurnRate(s.Pm,"data-grid-float32-conversion-throw",i.i1.P99,i.Ip.Min10,!1,e)}try{if(t?.decimalConversionEnabled&&t?.displayAs==="decimal")return{convertedValue:Number(e),convertedNumberValue:a}}catch(e){r.iT.sev2BurnRate(s.Pm,"data-grid-decimal-conversion-throw",i.i1.P99,i.Ip.Min10,!1,e)}try{if((t?.type==="bigint"||t?.type==="long"||t?.type==="integer")&&"string"==typeof e&&!e.toLowerCase().trim().startsWith("0x")&&!e.trim().startsWith("+")){let t=new n.A(e.trim());return{convertedValue:t,convertedNumberValue:t}}}catch(t){r.iT.sev2BurnRate(s.Pm,"data-grid-big-conversion-throw",i.i1.P99,i.Ip.Min10,!1,{value:e,strVal:String(e),type:typeof e,isBig:l(e),...t instanceof Error?{message:t.message,stack:t.stack}:{error:t}})}return{convertedValue:e,convertedNumberValue:a}}function d(e,t,a){let n=null===e||"bigint"==typeof e||"number"==typeof e||l(e);if(t&&n)return(0,o.c3)({format:t,defaultFormat:t,locale:a})(e);return String(e)}},26026:(e,t,a)=>{a.d(t,{T:()=>o});var n=a(646171);function r(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function i(e){return function(){var t=this,a=arguments;return new Promise(function(n,i){var o=e.apply(t,a);function s(e){r(o,n,i,s,l,"next",e)}function l(e){r(o,n,i,s,l,"throw",e)}s(void 0)})}}function o(e){return i(function*(){var t;return yield(t=()=>i(function*(){return(yield(0,n.p)().get("tree/get-node-by-path",{params:{full_path:e}})).data.info})(),i(function*(){try{return yield t()}catch(e){if(e?.response?.status===404)return;throw e}})())})()}},26093:(e,t,a)=>{a.d(t,{x:()=>i});var n=a(141078),r=a(655841);let i=e=>(0,n.n_)(r.Ij,e)},26446:(e,t,a)=>{a.d(t,{HT:()=>c,M8:()=>d,Pf:()=>s,bp:()=>l,gb:()=>n,iN:()=>u,pP:()=>r,xB:()=>m});let n=1e3,r={enableAccountGroups:!1,enableAccountServicePrincipals:!1,enableAccountUsers:!1,enableWorkspaceGroups:!1,enableWorkspaceServicePrincipals:!1,enableWorkspaceUsers:!1},i=/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,o={admins:"Admins",users:"All workspace users","account users":"All account users"},s=e=>{if(!e)return e;return o[e]??e},l=e=>{let t=new Map;return e.forEach(e=>{let a=c(e)||e.name;t.has(a)||t.set(a,[]),t.get(a)?.push(e)}),t},u=e=>{switch(e.kind){case"user":return e.fullName;case"serviceprincipal":return e.name;case"group":return e.displayName;default:return""}},c=e=>{switch(e.kind){case"user":case"group":return e.name||"";case"serviceprincipal":return e.applicationId||"";default:return""}},d=({uniqueName:e,id:t,kind:a,displayName:n})=>{switch(a){case"user":return{id:t||"",optionId:`user.${t}`,kind:a,name:e||"",fullName:n||"",title:""};case"serviceprincipal":return{id:t||"",optionId:`serviceprincipal.${t}`,kind:a,name:n||"",applicationId:e||"",title:""};case"group":return{id:t||"",optionId:`group.${t}`,kind:a,name:e||"",displayName:s(e||""),title:""};default:return}};function m(e){return e?i.test(e)?"serviceprincipal":"user":void 0}},28637:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(893779),r=a(441535),i=a(886100),o=a(22191),s=a(522317),l=a(915679);class u extends n.N{version=3;modelMetadata={experiment_type:"user",treatments:[]};possibleModelMetadata="";constructor(e,t){super(e),this.version=t??this.version}updatePossibleModelMetadata(){if(this.possibleModelMetadata=(0,r.W)("databricks.fe.editor.assistantExperiment.CellMagicPredictedOutputs",""),this.possibleModelMetadata)try{this.modelMetadata=JSON.parse(this.possibleModelMetadata)}catch(e){i.iT.sev2(o.Es.Assistant,"Failed to parse Cell Magic Predicted Outputs experiment metadata",e)}}get SamplingPercentage(){return this.updatePossibleModelMetadata(),this.modelMetadata.treatments.reduce((e,t)=>e+t.experiment_percentage,0)}get ExperimentName(){return"cellMagicPredictedOutputsExperiment"}get ExperimentId(){return`${this.ExperimentName}-v${this.version}`}IsValidParticipant(){return!0}IsExperimentEnabled(){return this.SamplingPercentage>0}randomFunction(){if("user"===this.modelMetadata.experiment_type)return this.getRandomNumberFromUserIdAndExperiment(this.ExperimentId);if("session"===this.modelMetadata.experiment_type)return this.getBrowserSession(this.ExperimentId);return this.getRandomNumber()}LogExperiment(e){if(this.IsExperimentEnabled()){let t=s.A.get(this.ExperimentId)?.session_id??this.getRandomSession().toString();(0,l.ZA)({experimentId:this.ExperimentId,lakesenseSessionId:t,...e})}}IsPredictedOutputsEnabled(){let e=!1;if(this.IsExperimentEnabled()&&this.IsValidParticipant()){let t=0,a=this.randomFunction();for(let n of this.modelMetadata.treatments)if(a<(t+=n.experiment_percentage)){e=n.enable_predicted_outputs;break}}return e}}},30975:(e,t,a)=>{a.d(t,{u:()=>u});var n=a(412836),r=a(927239),i=a(595615),o=a(660618),s=a(733337);function l(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function u(){let{invalidate:e}=(0,i.rA)();return(0,n.n_)(e=>{var t;return(t=function*(){return yield(0,s.nr)(`${o.bY}/catalogs`,{method:"POST",body:JSON.stringify({...e,storage_root:e.storage_root?encodeURI(e.storage_root):void 0})})},function(){var e=this,a=arguments;return new Promise(function(n,r){var i=t.apply(e,a);function o(e){l(i,n,r,o,s,"next",e)}function s(e){l(i,n,r,o,s,"throw",e)}o(void 0)})})()},{onSuccess:()=>{e([r.xQ])}})}},32811:(e,t,a)=>{a.d(t,{T:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enableStableIdsInUrl",!1)}},32998:(e,t,a)=>{a.d(t,{w:()=>i});let n=".dbquery.ipynb",r=".dbalert.json",i=e=>{if(e.endsWith(n))return e.slice(0,-n.length);if(e.endsWith(r))return e.slice(0,-r.length);return e}},33576:(e,t,a)=>{a.d(t,{Qj:()=>s,SX:()=>i,mQ:()=>o});var n=a(586356),r=a(409666);let i=(0,a(315592).Xr)({type:"filter-text-entry",channelIndex:{fields:1},validateEditorSpec:e=>({validatedSpec:e}),version:r.B0,getEncodingMapMeta:()=>r.OM,allowDisaggregatedData:!1,allowSelection:!0,isRenderable:n.q,normalizeDecoupledSpec:(e,t)=>e}),o="contains",s=e=>[{mode:"contains",label:e.formatMessage({id:"9xzblW",defaultMessage:"Contains"})},{mode:"exact-match",label:e.formatMessage({id:"qfCcAQ",defaultMessage:"Exactly matches"})},{mode:"starts-with",label:e.formatMessage({id:"wccp0v",defaultMessage:"Starts with"})}]},34021:(e,t,a)=>{a.d(t,{N:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enableCastDateTruncToDateOnExport",!1)}},34738:(e,t,a)=>{a.d(t,{p:()=>o,r:()=>i});var n=a(160603),r=a(482469);let i=e=>["folder_path",e],o=(e,t)=>(0,n.useQuery)(i(e),()=>(0,r.W)(e),t)},38054:(e,t,a)=>{a.d(t,{Pj:()=>o,nR:()=>s,y$:()=>i});var n=a(371964),r=a(881551);let i=a(353345).y,o=n.Pj,s=r.n},39659:(e,t,a)=>{a.d(t,{y:()=>n});class n{resolve;reject;promise;constructor(){this.resolve=()=>{},this.reject=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}},39898:(e,t,a)=>{a.d(t,{Item:()=>b,Root:()=>E});var n=a(610435),r=a(644091),i=a(947105),o=a(91958),s=a.n(o),l=a(692738),u=a(224098),c=a(497895),d=a(639712),m=a(53333);let p=l.createContext("medium"),f=[u.s7.OnValueChange],g=s()(e=>({display:"flex",flexWrap:"wrap",gap:e.spacing.sm})),h=s()((e,t)=>({marginRight:"large"===t?e.spacing.sm:e.spacing.xs,"& > .anticon":{verticalAlign:"-3px"}}),(e,t)=>`${(0,d.H6)(e)}|${t}`),E=l.forwardRef(({size:e,componentId:t,analyticsEvents:a=f,valueHasNoPii:o,onValueChange:s,...d},h)=>{let{theme:E}=(0,c.wn)(),b=l.useMemo(()=>e??"medium",[e]),T=(0,u.ei)({componentType:u.v_.PillControl,componentId:t,analyticsEvents:a,valueHasNoPii:o}),{elementRef:y}=(0,m.z)({onView:T.onView,value:d.value??d.defaultValue}),I=(0,l.useCallback)(e=>{T.onValueChange?.(e),s?.(e)},[T,s]),A=(0,r.SV)([h,y]);return(0,n.Y)(p.Provider,{value:b,children:(0,n.Y)(i.z6,{css:g(E),onValueChange:I,...d,ref:A,...T.dataComponentProps})})}),b=l.forwardRef(({children:e,icon:t,...a},r)=>{let o=l.useContext(p),{theme:s}=(0,c.wn)(),u="pill-control-icon",d=T(s,o,u);return(0,n.FD)(i.CU,{css:d,...a,children:[t&&(0,n.Y)("span",{className:u,css:h(s,o),children:t}),e]})}),T=s()((e,t,a)=>({textOverflow:"ellipsis",boxShadow:e.shadows.xs,whiteSpace:"nowrap",overflow:"hidden",appearance:"none",textDecoration:"none",background:"none",border:"1px solid",cursor:"pointer",backgroundColor:e.colors.actionDefaultBackgroundDefault,borderColor:e.colors.actionDefaultBorderDefault,color:e.colors.textPrimary,lineHeight:e.typography.lineHeightBase,height:32,paddingInline:"12px",fontWeight:e.typography.typographyRegularFontWeight,fontSize:e.typography.fontSizeBase,borderRadius:e.borders.borderRadiusFull,transition:"background-color 0.2s ease-in-out, border-color 0.2s ease-in-out",[`& > .${a}`]:{color:e.colors.textSecondary,..."large"===t?{backgroundColor:e.colors.tagDefault,padding:e.spacing.sm,borderRadius:e.borders.borderRadiusFull}:{}},'&[data-state="checked"]':{backgroundColor:e.colors.actionDefaultBackgroundPress,borderColor:"transparent",color:e.colors.textPrimary,outlineStyle:"solid",outlineWidth:"2px",outlineOffset:"0px",outlineColor:e.colors.actionDefaultBorderFocus,"&:hover":{backgroundColor:e.colors.actionDefaultBackgroundPress,borderColor:e.colors.actionLinkPress,color:"inherit"},[`& > .${a}, &:hover > .${a}`]:{color:e.colors.actionDefaultTextPress,..."large"===t?{backgroundColor:e.colors.actionIconBackgroundPress}:{}}},"&:focus-visible":{outlineStyle:"solid",outlineWidth:"2px",outlineOffset:"0px",outlineColor:e.colors.actionDefaultBorderFocus},"&:hover":{backgroundColor:e.colors.actionDefaultBackgroundHover,borderColor:e.colors.actionLinkHover,color:e.colors.actionDefaultTextHover,[`& > .${a}`]:{color:"inherit",..."large"===t?{backgroundColor:e.colors.actionIconBackgroundHover}:{}}},"&:active":{backgroundColor:e.colors.actionDefaultBackgroundPress,borderColor:e.colors.actionLinkPress,color:e.colors.actionDefaultTextPress,[`& > .${a}`]:{color:"inherit",..."large"===t?{backgroundColor:e.colors.actionIconBackgroundPress}:{}}},"&:disabled":{backgroundColor:e.colors.actionDisabledBackground,borderColor:e.colors.actionDisabledBorder,color:e.colors.actionDisabledText,cursor:"not-allowed",[`& > .${a}`]:{color:"inherit"}},..."small"===t?{height:24,lineHeight:e.typography.lineHeightSm,paddingInline:e.spacing.sm}:{},..."large"===t?{height:44,lineHeight:e.typography.lineHeightXl,paddingInline:e.spacing.md,paddingInlineStart:"6px",borderRadius:e.borders.borderRadiusFull}:{}}),(e,t,a)=>`${(0,d.H6)(e)}|${t}|${a}`)},42289:(e,t,a)=>{a.d(t,{GL:()=>s,cc:()=>u,iw:()=>c,k2:()=>o,ub:()=>d});var n,r,i=a(864833),o=((n={}).TRANSACTIONS_PER_SECOND="TransactionsPerSecond",n.OPEN_CONNECTIONS="OpenConnections",n.DEADLOCKS="Deadlocks",n.CPU_UTILIZATION_PERCENT="CPUUtilizationPercent",n.ROWS_FETCHED_PER_SECOND="RowsFetchedPerSecond",n.ROWS_RETURNED_PER_SECOND="RowsReturnedPerSecond",n.ROWS_INSERTED_PER_SECOND="RowsInsertedPerSecond",n.ROWS_UPDATED_PER_SECOND="RowsUpdatedPerSecond",n.ROWS_DELETED_PER_SECOND="RowsDeletedPerSecond",n.STORAGE_UTILIZATION_BYTES="StorageUtilizationBytes",n.STORAGE_THROUGHPUT_UTILIZATION_PERCENT="StorageThroughputUtilizationPercent",n.BUFFER_CACHE_HIT_RATE_PERCENT="BufferCacheHitRatePercent",n.LOCAL_SSD_CACHE_HIT_RATE_PERCENT="LocalSSDCacheHitRatePercent",n),s=((r={}).ROWS_PER_SECOND_METRICS="RowsPerSecondMetrics",r);let l=`${i.W.LIST_PAGE}/online-stores`,u={LIST:l,VIEW:`${l}/:storeName`},c={Min:2,Max:35},d=3e3},45525:(e,t,a)=>{a.d(t,{uT:()=>i,Oy:()=>o,tv:()=>s,ld:()=>l,Yt:()=>u,mX:()=>c,e3:()=>d,HF:()=>m,TO:()=>p,O6:()=>f,Em:()=>g,fC:()=>h,D$:()=>n.D});var n=a(736813),r=a(441535);function i(){return(0,r.W)("databricks.fe.metricViews.enableAssistantUiDiffs",!1)}function o(){return(0,r.W)("databricks.fe.metricViews.enableCatalogExplorerTools",!0)}function s(){return(0,r.W)("databricks.fe.metricViews.enableColumnExpressionBuilder",!1)}function l(){return(0,r.W)("databricks.fe.metricViews.enableDimensionExpressionBuilder",!1)}function u(){return(0,r.W)("databricks.fe.metricViews.enableInterfaceProvider",!1)}function c(){return(0,r.W)("databricks.fe.metricViews.enableJoinCardinality",!1)}function d(){return(0,r.W)("databricks.fe.metricViews.enableJoinRely",!1)}function m(){return(0,r.W)("databricks.fe.metricViews.disableOwnerEditForMaterialization",!0)}function p(){return(0,r.W)("databricks.fe.metricViews.enableParameters",!1)}function f(){return(0,r.W)("databricks.fe.metricViews.enableWindowInclusivity",!1)}function g(){return(0,r.W)("databricks.fe.metricViews.enableWindowOffset",!1)}function h(){return(0,r.W)("databricks.fe.metricViews.enableRichSqlEditor",!1)}},51759:(e,t,a)=>{a.d(t,{b:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enableDashboardBookmarks",!1)}},51927:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enableDlmvLineage",!0)}},52439:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.dashboardsai.enableGetDashboardConfigTool",!0)}},52640:(e,t,a)=>{a.d(t,{Oc:()=>s,YA:()=>u,np:()=>o,vP:()=>c});var n=a(377063),r=a.n(n),i=a(342411);function o(e){return["d_now","d_yesterday"].includes(e)}let s=[d("d_now",(0,i.zR)({id:"Ibgd62",defaultMessage:"Today/Now"}),()=>r()(),"D MMM"),d("d_yesterday",(0,i.zR)({id:"oGpR1T",defaultMessage:"Yesterday"}),()=>r()().subtract(1,"day"),"D MMM")],l=new Map(s.map(e=>[e.name,e]));function u(e){return l.has(e)}function c(e){return e?l.get(e):void 0}function d(e,t,a,n){return{name:e,unformattedName:t,value:a,hint:()=>a().format(n)}}},55079:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",d:"M12.5 8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CircleIcon";let l=s},60701:(e,t,a)=>{a.d(t,{P:()=>u,d:()=>l});var n=a(692738),r=a(118389),i=a(758666),o=a(231223),s=a(965545);function l(){let e=(0,r.P)(),{data:t=!1}=(0,i.st)({permission:s.I.CREATE},{enabled:e}),{data:a,loading:l}=(0,o.J)({includeTagMetadata:!0},{skip:!e});return{domains:n.useMemo(()=>u(a?.domainsListDomains?.domains??[],t),[a?.domainsListDomains?.domains,t]),loading:l,error:a?.domainsListDomains?.apiError,recommendationTraceId:void 0}}function u(e,t){return[...e].filter(e=>t||!e.effectiveDraft).sort((e,t)=>e.tagKey&&t.tagKey?e.tagKey.localeCompare(t.tagKey):0)}},61652:(e,t,a)=>{a.d(t,{Qq:()=>l,zK:()=>k,Xn:()=>m,y1:()=>c,BF:()=>C,fU:()=>s,I1:()=>i,sl:()=>b,BX:()=>y,_o:()=>N,Go:()=>R,Mw:()=>S,_p:()=>h,Vm:()=>f,l2:()=>A});var n=a(711489);let r=new Map([["notebookEditor",n.J5.EditorSource.EDITOR_SOURCE_NOTEBOOK_EDITOR],["notebookDiffViewer",n.J5.EditorSource.EDITOR_SOURCE_NOTEBOOK_DIFF_VIEWER],["jobsEditor",n.J5.EditorSource.EDITOR_SOURCE_JOBS_EDITOR],["lakeviewEditor",n.J5.EditorSource.EDITOR_SOURCE_LAKEVIEW_EDITOR],["lakebuilderEditor",n.J5.EditorSource.EDITOR_SOURCE_LAKEBUILDER_EDITOR],["repoGitDiffCode",n.J5.EditorSource.EDITOR_SOURCE_REPO_GIT_DIFF_CODE],["repoGitMergeConflict",n.J5.EditorSource.EDITOR_SOURCE_REPO_GIT_MERGE_CONFLICT],["sqleReact",n.J5.EditorSource.EDITOR_SOURCE_SQLE_REACT],["storybook",n.J5.EditorSource.EDITOR_SOURCE_STORYBOOK],["sqleAutocomplete",n.J5.EditorSource.EDITOR_SOURCE_SQLE_AUTOCOMPLETE],["sqleFixme",n.J5.EditorSource.EDITOR_SOURCE_SQLE_FIXME],["sqleDetails",n.J5.EditorSource.EDITOR_SOURCE_SQLE_DETAILS],["assistantCell",n.J5.EditorSource.EDITOR_SOURCE_ASSISTANT_CELL],["assistantInput",n.J5.EditorSource.EDITOR_SOURCE_ASSISTANT_INPUT],["jobsValueReferencesEditor",n.J5.EditorSource.EDITOR_SOURCE_JOBS_VALUE_REFERENCES_EDITOR],["dataRoomsEditor",n.J5.EditorSource.EDITOR_SOURCE_DATA_ROOMS_EDITOR],["playgroundEditor",n.J5.EditorSource.EDITOR_SOURCE_PLAYGROUND_EDITOR],["standaloneAlerts",n.J5.EditorSource.EDITOR_SOURCE_STANDALONE_ALERTS],["systemModule",n.J5.EditorSource.EDITOR_SOURCE_SYSTEM_MODULE],["lakeflowConversionWidget",n.J5.EditorSource.EDITOR_SOURCE_LAKEFLOW_CONVERSION_WIDGET],["ingestionPipelineEditor",n.J5.EditorSource.EDITOR_SOURCE_INGESTION_PIPELINE_EDITOR],["cleanroomNotebookContentView",n.J5.EditorSource.EDITOR_SOURCE_CLEANROOM_NOTEBOOK_CONTENT_VIEW],["lakeflowSettings",n.J5.EditorSource.EDITOR_SOURCE_LAKEFLOW_SETTINGS],["lakeviewCustomCalcExpressionEditor",n.J5.EditorSource.EDITOR_SOURCE_LAKEVIEW_CUSTOM_CALC_EXPRESSION_EDITOR],["antlrIntellisense",n.J5.EditorSource.EDITOR_SOURCE_ANTLR_INTELLISENSE],["staticNotebookEditor",n.J5.EditorSource.EDITOR_SOURCE_STATIC_NOTEBOOK_EDITOR],["clusterEditor",n.J5.EditorSource.EDITOR_SOURCE_CLUSTER_EDITOR],["sampleDataSQLEditor",n.J5.EditorSource.EDITOR_SOURCE_SAMPLE_DATA_SQL_EDITOR],["policyFunctionEditor",n.J5.EditorSource.EDITOR_SOURCE_POLICY_FUNCTION_EDITOR],["lakewatchEditor",n.J5.EditorSource.EDITOR_SOURCE_LAKEWATCH_EDITOR],["lakewatchJsonEditor",n.J5.EditorSource.EDITOR_SOURCE_LAKEWATCH_JSON_EDITOR],["lakewatchYamlEditor",n.J5.EditorSource.EDITOR_SOURCE_LAKEWATCH_YAML_EDITOR],["dynamicWidgetSourceQueryEditor",n.J5.EditorSource.EDITOR_SOURCE_DYNAMIC_WIDGET_SOURCE_QUERY_EDITOR],["sqlEditor",n.J5.EditorSource.EDITOR_SOURCE_SQL_EDITOR],["sqlEditorChatWindow",n.J5.EditorSource.EDITOR_SOURCE_SQL_EDITOR_CHAT_WINDOW],["lakeviewChatWindow",n.J5.EditorSource.EDITOR_SOURCE_LAKEVIEW_CHAT_WINDOW],["metricViewsEditor",n.J5.EditorSource.EDITOR_SOURCE_METRIC_VIEWS_EDITOR],["notebook",n.J5.EditorSource.EDITOR_SOURCE_NOTEBOOK],["notebookChatWindow",n.J5.EditorSource.EDITOR_SOURCE_NOTEBOOK_CHAT_WINDOW],["notebookInlineSuggestions",n.J5.EditorSource.EDITOR_SOURCE_NOTEBOOK_INLINE_SUGGESTIONS],["notebookDeprecatedTables",n.J5.EditorSource.EDITOR_SOURCE_NOTEBOOK_DEPRECATED_TABLES],["notebookQuickFix",n.J5.EditorSource.EDITOR_SOURCE_NOTEBOOK_QUICK_FIX],["sqle",n.J5.EditorSource.EDITOR_SOURCE_SQLE],["default",n.J5.EditorSource.EDITOR_SOURCE_DEFAULT],["Docstring",n.J5.EditorSource.EDITOR_SOURCE_DOCSTRING],["embedded-sql",n.J5.EditorSource.EDITOR_SOURCE_EMBEDDED_SQL],["sql",n.J5.EditorSource.EDITOR_SOURCE_SQL],["richSqlEditor",n.J5.EditorSource.EDITOR_SOURCE_RICH_SQL_EDITOR],["InputArea",n.J5.EditorSource.EDITOR_SOURCE_INPUT_AREA],["databaseConnectSqlEditor",n.J5.EditorSource.EDITOR_SOURCE_DATABASE_CONNECT_SQL_EDITOR]]),i=e=>r.get(e??"")??n.J5.EditorSource.EDITOR_SOURCE_UNSPECIFIED,o=new Map([["python",n.J5.EditorLanguage.EDITOR_LANGUAGE_PYTHON],["sql",n.J5.EditorLanguage.EDITOR_LANGUAGE_SQL],["r",n.J5.EditorLanguage.EDITOR_LANGUAGE_R],["dbsql",n.J5.EditorLanguage.EDITOR_LANGUAGE_DBSQL],["text",n.J5.EditorLanguage.EDITOR_LANGUAGE_TEXT]]),s=e=>o.get(e??"")??n.J5.EditorLanguage.EDITOR_LANGUAGE_UNSPECIFIED,l=e=>e?n.J5.AntlrWorkerType.ANTLR_WORKER_TYPE_SYNTAX:n.J5.AntlrWorkerType.ANTLR_WORKER_TYPE_TOKEN;n.J5.AntlrWorkerType.ANTLR_WORKER_TYPE_SYNTAX,n.J5.AntlrWorkerType.ANTLR_WORKER_TYPE_TOKEN,n.J5.AntlrWorkerType.ANTLR_WORKER_TYPE_OPTIMIZE;let u=new Map([["JISON",n.J5.AutocompleteEngine.AUTOCOMPLETE_ENGINE_JISON],["ANTLR",n.J5.AutocompleteEngine.AUTOCOMPLETE_ENGINE_ANTLR],["JEDI",n.J5.AutocompleteEngine.AUTOCOMPLETE_ENGINE_JEDI],["PYSPARK",n.J5.AutocompleteEngine.AUTOCOMPLETE_ENGINE_PYSPARK],["VOLUME",n.J5.AutocompleteEngine.AUTOCOMPLETE_ENGINE_VOLUME]]),c=e=>u.get(e??"")??n.J5.AutocompleteEngine.AUTOCOMPLETE_ENGINE_UNSPECIFIED,d=new Map([["all",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_ALL],["asterisk",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_ASTERISK],["colRefKeyword",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_COL_REF_KEYWORD],["column",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_COLUMN],["cte",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_CTE],["catalog",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_CATALOG],["database",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_DATABASE],["user",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_USER],["userGroup",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_USER_GROUP],["files",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_FILES],["identifier",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_IDENTIFIER],["keyword",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_KEYWORD],["option",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_OPTION],["popular",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_POPULAR],["popularAggregate",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_POPULAR_AGGREGATE],["popularFilter",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_POPULAR_FILTER],["popularGroupBy",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_POPULAR_GROUP_BY],["discoveryJoin",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_DISCOVERY_JOIN],["fkJoin",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_FK_JOIN],["fkJoinCondition",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_FK_JOIN_CONDITION],["popularOrderBy",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_POPULAR_ORDER_BY],["popularQuery",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_POPULAR_QUERY],["popularTable",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_POPULAR_TABLE],["sample",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_SAMPLE],["snippet",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_SNIPPET],["table",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_TABLE],["function",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_FUNCTION],["functionDescription",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_FUNCTION_DESCRIPTION],["functionArgument",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_FUNCTION_ARGUMENT],["variable",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_VARIABLE],["virtualColumn",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_VIRTUAL_COLUMN],["location",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_LOCATION],["storageCredential",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_STORAGE_CREDENTIAL],["Function",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_ANTLR_FUNCTION],["Keyword",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_ANTLR_KEYWORD],["Catalog",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_ANTLR_CATALOG],["Database",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_ANTLR_SCHEMA],["Table",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_ANTLR_TABLE],["Column",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_ANTLR_COLUMN],["Field",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_ANTLR_FIELD],["PopularTable",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_ANTLR_PERSONALIZED_TABLE],["CTE",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_ANTLR_CTE],["TempTableOrView",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_ANTLR_TEMP_TABLE_OR_VIEW],["TempVariable",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_ANTLR_TEMP_VARIABLE],["CreatedTableOrView",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_ANTLR_CREATED_TABLE_OR_VIEW],["CreatedOrRenamedVolume",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_ANTLR_CREATED_OR_RENAMED_VOLUME],["JoinsDiscovery",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_ANTLR_TOP_JOIN],["Volume",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_ANTLR_VOLUME],["VolumePath",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_ANTLR_VOLUME_PATH],["PathPrefix",n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_ANTLR_PATH_PREFIX]]),m=e=>{let t=null!=e?String(e):"";return d.get(t)??n.J5.AutocompleteCategoryId.AUTOCOMPLETE_CATEGORY_ID_UNSPECIFIED},p=new Map([["jupyter",n.J5.SuggestionGenerator.SUGGESTION_GENERATOR_JUPYTER]]),f=e=>p.get(e??"")??n.J5.SuggestionGenerator.SUGGESTION_GENERATOR_UNSPECIFIED,g=new Map([["function",n.J5.PythonSuggestionType.PYTHON_SUGGESTION_TYPE_FUNCTION],["builtin",n.J5.PythonSuggestionType.PYTHON_SUGGESTION_TYPE_BUILTIN],["module",n.J5.PythonSuggestionType.PYTHON_SUGGESTION_TYPE_MODULE],["class",n.J5.PythonSuggestionType.PYTHON_SUGGESTION_TYPE_CLASS]]),h=e=>g.get(e??"")??n.J5.PythonSuggestionType.PYTHON_SUGGESTION_TYPE_UNKNOWN,E=new Map([["show",n.J5.GhostTextInteractionType.GHOST_TEXT_INTERACTION_TYPE_SHOW],["accept",n.J5.GhostTextInteractionType.GHOST_TEXT_INTERACTION_TYPE_ACCEPT],["partialAccept",n.J5.GhostTextInteractionType.GHOST_TEXT_INTERACTION_TYPE_PARTIAL_ACCEPT],["ExplicitlyAbort",n.J5.GhostTextInteractionType.GHOST_TEXT_INTERACTION_TYPE_EXPLICITLY_ABORT]]),b=e=>E.get(e??"")??n.J5.GhostTextInteractionType.GHOST_TEXT_INTERACTION_TYPE_UNSPECIFIED,T=new Map([["abandon",n.J5.GhostTextInternalInteractionType.GHOST_TEXT_INTERNAL_INTERACTION_TYPE_ABANDON],["received",n.J5.GhostTextInternalInteractionType.GHOST_TEXT_INTERNAL_INTERACTION_TYPE_RECEIVED],["preprocess",n.J5.GhostTextInternalInteractionType.GHOST_TEXT_INTERNAL_INTERACTION_TYPE_PREPROCESS],["opportunity",n.J5.GhostTextInternalInteractionType.GHOST_TEXT_INTERNAL_INTERACTION_TYPE_OPPORTUNITY],["attempt",n.J5.GhostTextInternalInteractionType.GHOST_TEXT_INTERNAL_INTERACTION_TYPE_ATTEMPT]]),y=e=>T.get(e??"")??n.J5.GhostTextInternalInteractionType.GHOST_TEXT_INTERNAL_INTERACTION_TYPE_UNSPECIFIED,I=new Map([["candidateTables",n.J5.TableDataSource.TABLE_DATA_SOURCE_CANDIDATE_TABLES],["fullPath",n.J5.TableDataSource.TABLE_DATA_SOURCE_FULL_PATH]]),A=e=>I.get(e??"")??n.J5.TableDataSource.TABLE_DATA_SOURCE_UNSPECIFIED,v=new Map([["actions.find",n.J5.MonacoFindAction.MONACO_FIND_ACTION_ACTIONS_FIND],["editor.action.startFindReplaceAction",n.J5.MonacoFindAction.MONACO_FIND_ACTION_EDITOR_ACTION_START_FIND_REPLACE_ACTION],["editor.action.nextMatchFindAction",n.J5.MonacoFindAction.MONACO_FIND_ACTION_EDITOR_ACTION_NEXT_MATCH_FIND_ACTION],["editor.action.previousMatchFindAction",n.J5.MonacoFindAction.MONACO_FIND_ACTION_EDITOR_ACTION_PREVIOUS_MATCH_FIND_ACTION],["editor.action.findWithArgs",n.J5.MonacoFindAction.MONACO_FIND_ACTION_EDITOR_ACTION_FIND_WITH_ARGS],["actions.findWithSelection",n.J5.MonacoFindAction.MONACO_FIND_ACTION_ACTIONS_FIND_WITH_SELECTION],["editor.action.nextSelectionMatchFindAction",n.J5.MonacoFindAction.MONACO_FIND_ACTION_EDITOR_ACTION_NEXT_SELECTION_MATCH_FIND_ACTION],["editor.action.previousSelectionMatchFindAction",n.J5.MonacoFindAction.MONACO_FIND_ACTION_EDITOR_ACTION_PREVIOUS_SELECTION_MATCH_FIND_ACTION],["editor.action.addSelectionToNextFindMatch",n.J5.MonacoFindAction.MONACO_FIND_ACTION_EDITOR_ACTION_ADD_SELECTION_TO_NEXT_FIND_MATCH],["editor.action.addSelectionToPreviousFindMatch",n.J5.MonacoFindAction.MONACO_FIND_ACTION_EDITOR_ACTION_ADD_SELECTION_TO_PREVIOUS_FIND_MATCH],["editor.action.moveSelectionToNextFindMatch",n.J5.MonacoFindAction.MONACO_FIND_ACTION_EDITOR_ACTION_MOVE_SELECTION_TO_NEXT_FIND_MATCH],["editor.action.moveSelectionToPreviousFindMatch",n.J5.MonacoFindAction.MONACO_FIND_ACTION_EDITOR_ACTION_MOVE_SELECTION_TO_PREVIOUS_FIND_MATCH]]),S=e=>v.get(e??"")??n.J5.MonacoFindAction.MONACO_FIND_ACTION_UNSPECIFIED,_=new Map([["getCatalogs",n.J5.ComposeCatalogFunction.COMPOSE_CATALOG_FUNCTION_GET_CATALOGS],["getDatabases",n.J5.ComposeCatalogFunction.COMPOSE_CATALOG_FUNCTION_GET_DATABASES],["getDatabaseTables",n.J5.ComposeCatalogFunction.COMPOSE_CATALOG_FUNCTION_GET_DATABASE_TABLES],["getSchemaVolumes",n.J5.ComposeCatalogFunction.COMPOSE_CATALOG_FUNCTION_GET_SCHEMA_VOLUMES],["getVolumeDetails",n.J5.ComposeCatalogFunction.COMPOSE_CATALOG_FUNCTION_GET_VOLUME_DETAILS],["getDatabaseDetails",n.J5.ComposeCatalogFunction.COMPOSE_CATALOG_FUNCTION_GET_DATABASE_DETAILS],["getTableColumns",n.J5.ComposeCatalogFunction.COMPOSE_CATALOG_FUNCTION_GET_TABLE_COLUMNS],["getTableMetadata",n.J5.ComposeCatalogFunction.COMPOSE_CATALOG_FUNCTION_GET_TABLE_METADATA],["getTableDescribeMetadata",n.J5.ComposeCatalogFunction.COMPOSE_CATALOG_FUNCTION_GET_TABLE_DESCRIBE_METADATA],["getFunctions",n.J5.ComposeCatalogFunction.COMPOSE_CATALOG_FUNCTION_GET_FUNCTIONS],["getFunctionDescription",n.J5.ComposeCatalogFunction.COMPOSE_CATALOG_FUNCTION_GET_FUNCTION_DESCRIPTION],["getTopJoins",n.J5.ComposeCatalogFunction.COMPOSE_CATALOG_FUNCTION_GET_TOP_JOINS],["getPersonalizedTables",n.J5.ComposeCatalogFunction.COMPOSE_CATALOG_FUNCTION_GET_PERSONALIZED_TABLES],["getTablesWithDeprecatedTag",n.J5.ComposeCatalogFunction.COMPOSE_CATALOG_FUNCTION_GET_TABLES_WITH_DEPRECATED_TAG],["getIsTableDeprecated",n.J5.ComposeCatalogFunction.COMPOSE_CATALOG_FUNCTION_GET_IS_TABLE_DEPRECATED]]),C=e=>_.get(e??"")??n.J5.ComposeCatalogFunction.COMPOSE_CATALOG_FUNCTION_UNSPECIFIED,R=e=>{switch((e??"").split("_")[0]){case"function":return n.J5.HoverDisplayType.HOVER_DISPLAY_TYPE_FUNCTION;case"dataCatalog":return n.J5.HoverDisplayType.HOVER_DISPLAY_TYPE_DATA_CATALOG;default:return n.J5.HoverDisplayType.HOVER_DISPLAY_TYPE_UNSPECIFIED}},O=new Map([["sql",n.J5.HoverDialect.HOVER_DIALECT_SQL],["dbsql",n.J5.HoverDialect.HOVER_DIALECT_DBSQL],["generic",n.J5.HoverDialect.HOVER_DIALECT_GENERIC],["impala",n.J5.HoverDialect.HOVER_DIALECT_IMPALA]]),N=e=>O.get((e??"").toLowerCase())??n.J5.HoverDialect.HOVER_DIALECT_UNSPECIFIED,k=e=>{if((e??"").endsWith("-responseSplit"))return n.J5.AutoInlineSuggestionErrorEventName.AUTO_INLINE_SUGGESTION_ERROR_EVENT_NAME_RESPONSE_SPLIT;return n.J5.AutoInlineSuggestionErrorEventName.AUTO_INLINE_SUGGESTION_ERROR_EVENT_NAME_UNSPECIFIED}},62947:(e,t,a)=>{a.d(t,{T:()=>L,M:()=>D});var n=a(610435),r=a(956935),i=a(692738),o=a(466213),s=a(497895),l=a(402720),u=a(74438),c=a(342411),d=a(382908),m=a(12414),p=a(475654),f=a(929117),g=a(205048);let h=({children:e,filterText:t,hasAllErrors:a,hasSomeError:r,hasNextPage:i,hasSuggestedChoices:o,isCompletedAll:l,limit:u})=>{let h=(0,c.tz)(),{theme:E}=(0,s.wn)(),b={padding:E.spacing.sm,marginLeft:E.spacing.xs/2,marginRight:E.spacing.xs/2};if(!t){if(o)return(0,n.FD)("div",{children:[(0,n.Y)(d.o.Text,{color:"secondary",css:{...b,display:"inline-block",paddingBottom:E.spacing.sm+E.spacing.xs},children:(0,n.Y)(c.sA,{id:"GJfggg",defaultMessage:"Suggested choices"})}),e]});return(0,n.Y)(d.o.Text,{color:"secondary",css:{...b,display:"inline-block"},children:(0,n.Y)(c.sA,{id:"C+kAoz",defaultMessage:"Type to search..."})})}let T=(0,n.Y)(d.o.Text,{color:"secondary",css:{...b,display:"inline-block",paddingBottom:E.spacing.sm+E.spacing.xs},children:(0,n.Y)(c.sA,{id:"+BgjsE",defaultMessage:'Results for "{filterText}"',values:{filterText:t}})});if(!l)return(0,n.FD)("div",{children:[T,(0,n.Y)("div",{css:{...b,display:"flex",justifyContent:"center",paddingTop:0},children:(0,n.Y)(m.y,{"aria-label":h.formatMessage({id:"97631c",defaultMessage:"Loading"})})}),(0,n.Y)(g.R,{allowlist:[p.o.WEBAPP_SUBJECT_SELECTOR_DROPDOWN_SEARCH],description:f.z.SUBJECT_SELECTOR_OPTIONS_LOADING,loading:!0})]});if(a)return(0,n.FD)("div",{children:[T,(0,n.Y)("div",{css:{...b,paddingTop:E.spacing.sm+E.spacing.xs,borderTop:`1px solid ${E.colors.border}`},children:(0,n.Y)(d.o.Text,{color:"error",children:(0,n.Y)(c.sA,{id:"nbxaoP",defaultMessage:"Failed to load all options."})})})]});return(0,n.FD)("div",{children:[T,e,(r||i)&&(0,n.FD)("div",{css:{...b,paddingTop:E.spacing.sm+E.spacing.xs,borderTop:`1px solid ${E.colors.border}`},children:[r&&(0,n.Y)(d.o.Text,{color:"error",children:(0,n.Y)(c.sA,{id:"4DLYsj",defaultMessage:"Failed to load some options."})}),r&&i&&" ",i&&(0,n.Y)(d.o.Text,{color:"secondary",children:(0,n.Y)(c.sA,{id:"yfYFLo",defaultMessage:"The first {limit} options are displayed. Type to narrow search.",values:{limit:u}})})]})]})};var E=a(133288),b=a(671244),T=a(653542),y=a(49586),I=a(209908);let A=e=>e.map(e=>`email="${(0,I.IW)(e)}"`).join(" OR "),v=e=>e.map(e=>`groupname="${(0,I.IW)(e)}"`).join(" OR "),S=e=>!(e&&e.length>0),_=5;var C=a(749314),R=a(437885);let O=(e,t,a)=>{let{disabled:r=!1,disabledReason:i}=a?a(e):{disabledReason:void 0},o=(e=>{if("user"===e.kind&&e.fullName&&e.fullName!==e.displayName||"serviceprincipal"===e.kind&&e.name)return!0;return!1})(e),s="group"===e.kind?e.title:e.applicationId||e.name;return{className:o?R.kW:R.PL,disabled:r,"data-testid":`${e.kind}.${s}`,get label(){return(0,n.Y)(C.r,{disabled:r,disabledReason:i,subject:e})},key:`${e.kind}.${e.id}`,role:"option",title:e.title,value:e.optionId,"aria-label":e.title}};var N=a(686560),k=a(441535),w=a(101938);let M=()=>!0,P=50,D=(0,i.createContext)({}),L=({dangerouslySetAntdProps:e,disabledFn:t,enableAccountGroups:a=!1,enableAccountServicePrincipals:d=!1,enableAccountUsers:m=!1,enableWorkspaceGroups:f=!0,enableWorkspaceServicePrincipals:g=!0,enableWorkspaceUsers:I=!0,initialSubjects:C,isLoading:L,limit:x=P,onBlur:U,onChange:F,onDropdownVisibleChange:$,onUpdate:V,onSearch:Y,suggestedChoices:W,provisionSource:B,filterInactive:G=!1,dropdownFooter:J,...z})=>{let q=(0,c.tz)(),{classNamePrefix:H,theme:j}=(0,s.wn)(),{startInteraction:K}=(0,w.XT)(),[Q,X]=(0,i.useState)(""),[Z]=(0,o.d7)(Q.trim(),300),ee=(0,N.d)("accountId_new",""),et=(0,k.W)("databricks.fe.identity.useGranularListPrincipalsParams",!1),{mappedPrincipals:ea,principals:en,loading:er,error:ei}=(0,E.a5)({accountId:ee,filter:Z,includeWorkspaceIdentities:f||g||I,includeAccountIdentities:a||d||m,includeGroups:a||f,includeServicePrincipals:d||g,includeUsers:m||I,...et&&{includeWorkspaceUsers:I,includeWorkspaceGroups:f,includeWorkspaceServicePrincipals:g,includeAccountUsers:m,includeAccountGroups:a,includeAccountServicePrincipals:d}},{skip:!Z},G),eo=(0,i.useRef)(new Map);(0,i.useEffect)(()=>{if(!C)return;Array.isArray(C)?C.forEach(e=>{eo.current.set(e.optionId,e)}):eo.current.set(C.optionId,C)},[C]);let es=(0,i.useMemo)(()=>en.map(e=>O(e,j,t)),[t,j,en]),el=(0,i.useMemo)(()=>ea,[ea]),{suggestedChoices:eu}=(({disabledFn:e,limit:t=_,skip:a,suggestedChoices:n})=>{let{subjects:r,isLoading:o,error:s}=(0,b.Bi)({filterPredicate:v(n?.workspaceGroups||[]),first:t,source:"workspace",isCache:!0,skip:S(n?.workspaceGroups)||a}),{subjects:l,isLoading:u,error:c}=(0,b.Bi)({filterPredicate:v(n?.accountGroups||[]),first:t,source:"account",isCache:!0,skip:S(n?.accountGroups)||a}),{subjects:d,isLoading:m,error:p}=(0,T.Q_)({filterPredicate:A(n?.workspaceServicePrincipals||[]),first:t,source:"workspace",isCache:!0,skip:S(n?.workspaceServicePrincipals)||a}),{subjects:f,isLoading:g,error:h}=(0,T.Q_)({filterPredicate:A(n?.accountServicePrincipals||[]),first:t,source:"account",isCache:!0,skip:S(n?.accountServicePrincipals)||a}),{subjects:E,isLoading:I,error:C}=(0,y.zo)({filterPredicate:A(n?.workspaceUsers||[]),first:t,source:"workspace",isCache:!0,skip:S(n?.workspaceUsers)||a}),{subjects:R,isLoading:O,error:N}=(0,y.zo)({filterPredicate:A(n?.accountUsers||[]),first:t,source:"account",isCache:!0,skip:S(n?.accountUsers)||a});return{suggestedChoices:(0,i.useMemo)(()=>[...E,...R,...r,...l,...d,...f].filter(t=>{if(e&&e(t).disabled)return!1;return!0}).slice(0,t),[l,f,R,e,t,r,d,E]),isLoading:o||u||m||g||I||O,error:s||c||p||h||C||N}})({disabledFn:t,suggestedChoices:W});(0,i.useEffect)(()=>{eu.forEach(e=>{eo.current.set(e.optionId,e)})},[eu]);let ec=(0,i.useMemo)(()=>eu.map(e=>O(e,j,t)),[eu,t,j]),ed=(0,i.useMemo)(()=>{if(!C)return[];if(Array.isArray(C))return C.map(e=>O(e,j));return[O(C,j)]},[C,j]),em=(0,i.useCallback)(e=>{Y&&Y(e),X(e)},[Y]),ep=(0,i.useCallback)((e,t)=>{let a;F&&F(e,t),X(""),Array.isArray(e)?(e.map(e=>el.get(e)).filter(e=>void 0!==e).forEach(e=>{eo.current.set(e.optionId,e)}),a=e.map(e=>eo.current.get(e)).filter(e=>void 0!==e)):a=el.get(e)||eo.current.get(e),V&&V(a)},[F,V,el]),ef=(0,i.useCallback)(e=>{U&&U(e),X("")},[U]),[eg,eh]=(0,i.useState)(!1),eE=(0,i.useCallback)(e=>{$&&$(e),eg||eh(e)},[eg,$]);(0,i.useEffect)(()=>{Z&&K(p.o.WEBAPP_SUBJECT_SELECTOR_DROPDOWN_SEARCH)},[Z,K]);let eb=(0,i.useCallback)(e=>{let t=!er,a=!!ei;return(0,n.FD)(n.FK,{children:[(0,n.Y)(h,{filterText:Z,hasSomeError:a,hasAllErrors:a,hasNextPage:!1,hasSuggestedChoices:ec.length>0,isCompletedAll:t,limit:x,children:e}),J]})},[Z,J,x,ei,er,ec]),eT=(0,i.useMemo)(()=>{if(!eg)return ed;if(Z)return es;return ec},[Z,eg,ed,es,ec]),ey=(0,i.useMemo)(()=>eT.map((e,t)=>({...e,"aria-posinset":t+1,"aria-setsize":eT.length})),[eT]);if(L)return(0,n.Y)("div",{"aria-label":q.formatMessage({id:"FzYxgk",defaultMessage:"Loading..."}),css:{width:"100%"},children:(0,n.Y)(l.P.Button,{active:!0,size:"small",css:{width:"100% !important"}})});let eI=z["aria-label"]||z["aria-labelledby"]?z["aria-label"]:q.formatMessage({id:"CyZW2/",defaultMessage:"Subject Select"});return(0,n.FD)(D.Provider,{value:{provisionSource:B},children:[(0,n.Y)(r.mL,{styles:[(0,r.AH)(".",H,"-select-item-option.",R.kW,".",R.kW,".",R.kW,"{height:48px !important;padding-top:2px !important;padding-bottom:2px !important;}.",H,"-select-item-option.",R.PL,".",R.PL,".",R.PL,"{height:40px !important;padding-top:5px !important;padding-bottom:5px !important;}.",H,"-select-selection-item-content .",R.Tp,"{display:none !important;}.",H,"-select-selection-item .",R.Tp,"{display:none !important;}")]}),(0,n.Y)(u._v,{allowClear:!0,"aria-label":eI,dangerouslySetAntdProps:{showSearch:!0,dropdownRender:eb,...e||{}},filterOption:M,onBlur:ef,onChange:ep,onDropdownVisibleChange:eE,onSearch:em,options:ey,...z})]})}},63707:(e,t,a)=>{a.d(t,{Bo:()=>n.B,TY:()=>r.T,Rt:()=>T.R,gw:()=>y.g,wc:()=>I.w,hN:()=>b.h,of:()=>d.o,HG:()=>o.H,ay:()=>l.a,Aj:()=>s.A,ex:()=>c.e,CQ:()=>A.C,d1:()=>v.d,Oe:()=>S.O,MD:()=>_.M,m7:()=>R.m,_F:()=>C._,yO:()=>i.y,GP:()=>m.G,tJ:()=>u.t,Kt:()=>$.K,I3:()=>O.I,cf:()=>N.c,p0:()=>ep.p,gq:()=>k.g,Bb:()=>w.B,Nx:()=>M.N,mT:()=>P.m,wt:()=>D.w,tD:()=>p.t,YK:()=>W.Y,WB:()=>L.W,bz:()=>x.b,n9:()=>V.n,yp:()=>E.y,DT:()=>Y.D,Xj:()=>B.X,AX:()=>G.A,p5:()=>J.p,Mk:()=>H.M,nR:()=>z.n,bE:()=>g.b,ke:()=>q.k,W0:()=>U.W,Ru:()=>h.R,sT:()=>j.s,NW:()=>K.N,l8:()=>F.l,ZU:()=>Q.Z,$C:()=>X.$,al:()=>Z.a,E5:()=>f.E,z_:()=>ee.z,ak:()=>et.J,PH:()=>ea.P,tl:()=>en.t,OH:()=>er.O,m5:()=>ei.m,md:()=>es,ZT:()=>el.Z,m1:()=>eu,y1:()=>ep.y,T2:()=>ec.T,v8:()=>ed,XR:()=>ef.X,ok:()=>em.o,Hw:()=>eg.H});var n=a(204725),r=a(32811),i=a(586791);a(684581);var o=a(529791),s=a(52439),l=a(308183),u=a(437639);a(907393);var c=a(152539),d=a(89167),m=a(2419),p=a(713907),f=a(110511),g=a(768564),h=a(684315),E=a(377523),b=a(768117);a(138455);var T=a(594053),y=a(893079),I=a(381331),A=a(549063),v=a(471091),S=a(489303),_=a(742991),C=a(46471),R=a(79847),O=a(685271),N=a(270343),k=a(294703),w=a(941687),M=a(34021),P=a(740931),D=a(546743),L=a(337695),x=a(51759),U=a(130647),F=a(187389),$=a(656091),V=a(12623),Y=a(229335),W=a(968683),B=a(946519),G=a(51927);a(398765);var J=a(584631),z=a(436331),q=a(776667),H=a(13695),j=a(872991);a(509591);var K=a(226139);a(705155);var Q=a(106390),X=a(722708),Z=a(471395);a(848343);var ee=a(860148),et=a(128071),ea=a(609421),en=a(628828),er=a(280967),ei=a(597163);if(/^(23057|72465)$/.test(a.j))var eo=a(441535);function es(){return(0,eo.W)("databricks.fe.lakeview.sessionEmbedStandaloneInitEnabled",!1)}var el=a(86517);if(13057==a.j)var eo=a(441535);function eu(){return(0,eo.W)("databricks.fe.lakeview.standaloneViewerStandaloneInitEnabled",!1)}var ec=a(216979);function ed(){return(0,eo.W)("databricks.fe.lakeview.tokenEmbedStandaloneInitEnabled",!1)}a(613870);var em=a(963681),ep=a(415767),ef=a(214353),eg=a(372107);a(458259)},67105:(e,t,a)=>{a.d(t,{r:()=>d});var n=a(692738),r=a(342411),i=a(483588),o=a(141078),s=a(675823),l=a(123061),u=a(26093);function c(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}let d=e=>{let t=(0,r.tz)(),[a,d]=(0,n.useState)(),[m,{loading:p,error:f}]=(0,u.x)(),[g,{loading:h,error:E}]=(0,s.z)(),[b,{loading:T,error:y}]=(0,l.$)();return[({id:a,applicationId:n,kind:r})=>{var s;return(s=function*(){if(d(void 0),"user"===r)return m({variables:{input:{externalId:a,sourceIdp:i.GbL.SOURCE_IDP_ATTRIBUTE_AAD,...void 0!==e&&{provisionSource:e}}}}).then(e=>(e.data?.aclmanagerIdentityapiGetOrCreateUser?.apiError&&d(new o.K4({errorMessage:t.formatMessage({id:"zrcKC3",defaultMessage:"Failed to provision user. Please ensure the user is active in the tenant."})})),e.data?.aclmanagerIdentityapiGetOrCreateUser??null));if("group"===r)return g({variables:{input:{externalId:a,sourceIdp:i.GbL.SOURCE_IDP_ATTRIBUTE_AAD,...void 0!==e&&{provisionSource:e}}}}).then(e=>(e.data?.aclmanagerIdentityapiGetOrCreateGroup?.apiError&&d(new o.K4({errorMessage:t.formatMessage({id:"y/440Q",defaultMessage:"Failed to provision group. Please ensure the group is active in the tenant."})})),e.data?.aclmanagerIdentityapiGetOrCreateGroup??null));if("serviceprincipal"===r)return b({variables:{input:{externalId:a,sourceIdp:i.GbL.SOURCE_IDP_ATTRIBUTE_AAD,...void 0!==e&&{provisionSource:e}}}}).then(e=>(e.data?.aclmanagerIdentityapiGetOrCreateServicePrincipal?.apiError&&d(new o.K4({errorMessage:t.formatMessage({id:"CV0/wy",defaultMessage:"Failed to provision service principal. Please ensure the service principal is active in the tenant."})})),e.data?.aclmanagerIdentityapiGetOrCreateServicePrincipal??null));return null},function(){var e=this,t=arguments;return new Promise(function(a,n){var r=s.apply(e,t);function i(e){c(r,a,n,i,o,"next",e)}function o(e){c(r,a,n,i,o,"throw",e)}i(void 0)})})()},{loading:p||h||T,error:a||f||E||y}]}},68987:(e,t,a)=>{a.d(t,{$g:()=>s,J1:()=>u,kB:()=>l});var n=a(34116),r=a.n(n),i=a(692738),o=a(897150);function s(e){let[t,a]=(0,i.useState)(u(e));return(0,i.useEffect)(()=>{if(t)return r();if(u(e))return a(!0),r();{let t=()=>a(!0);return e.commandCollection().once("commands-loaded",t),()=>e.commandCollection().off("commands-loaded",t)}},[e,t]),t}function l(){return s((0,o.Gx)(e=>e.notebookToRender))}function u(e){return e.loaded()}},75612:(e,t,a)=>{a.d(t,{HA:()=>u,RY:()=>l,Xw:()=>s,ZS:()=>i,az:()=>o,bI:()=>r,rd:()=>n});let n=1020,r=450,i=250,o="30%",s="OBJECT_TYPE_UNSPECIFIED",l="SQL_QUERY",u=6048e5},75725:(e,t,a)=>{a.d(t,{L:()=>k,z:()=>w});var n,r=a(999561),i=a(416913),o=a(594682),s=a(84824),l=a(273365),u=a(477694),c=a(134824),d=a(964932),m=a(452882);let p="domain_with_zero",f=`${p}_primary`,g=`${p}_secondary`,h="ratios",E=`${h}_primary`,b=`${h}_secondary`,T="max_ratios",y="ideal_ratios",I="scale_numerators",A=`${I}_primary`,v=`${I}_secondary`,S="scale_denominator",_=`${S}_primary`,C=`${S}_secondary`,R="new_domain",O=`${R}_primary`,N=`${R}_secondary`;function k({spec:e}){let{encodings:t,mark:a,widgetType:n,legacy:r}=e;if(!(0,i.mv)(t.y)&&!(0,i.UN)(t.y)||!(0,m.F)(t.y))return[];let s=[],l=t.y,u=(0,d.j)({encodings:t,mark:a,visual:n,legacy:r,channel:"y"}),c=(0,o.Ee)(n,l,"primary"),p=(0,o.Ee)(n,l,"secondary"),h=a?.layout;return s.push({name:f,expr:M({dualAxisType:"primary",axisEncoding:l.primary,percentTransformed:u,visual:c,layout:h})}),s.push({name:g,expr:M({dualAxisType:"secondary",axisEncoding:l.secondary,percentTransformed:u,visual:p,layout:h})}),s.push({name:E,expr:P("primary")}),s.push({name:b,expr:P("secondary")}),s.push({name:T,expr:`[min(${E}[0], ${b}[0]), max(${E}[1], ${b}[1])]`}),s.push({name:y,expr:`[${T}[0] / span(${T}), ${T}[1] / span(${T})]`}),s.push({name:A,expr:D("primary")}),s.push({name:v,expr:D("secondary")}),s.push({name:_,expr:L("primary")}),s.push({name:C,expr:L("secondary")}),s.push({name:O,expr:x("primary")}),s.push({name:N,expr:x("secondary")}),s}var w=((n={})[n.DomainWithZeroPrimary=f]="DomainWithZeroPrimary",n[n.DomainWithZeroSecondary=g]="DomainWithZeroSecondary",n[n.NewDomainPrimary=O]="NewDomainPrimary",n[n.NewDomainSecondary=N]="NewDomainSecondary",n);function M({dualAxisType:e,axisEncoding:t,percentTransformed:a,visual:n,layout:i}){let o=[];if(a||(0,s.B)(t).forEach(({fieldEncoding:t},a)=>{let{error:n}=t;if(!n)return;let i=[e,a],{upper:s,lower:l}=(0,c.wy)(i);if("absolute"===n.type)for(let{errorKey:e}of(0,r.Up)(n))o.push("upper"===e?s:l);else n.offset&&o.push(s,l)}),"stack"===i){let t;if("bar"===n?t=(0,u.WF)({dualAxisType:e}):"area"===n&&(t=(0,u.oC)({dualAxisType:e})),t){var d,m;let e,a;return o.length>0?(d=t,e=(m=o).map(e=>`isValid(${e}[0]) ? ${e}[0] : MAX_VALUE`),a=m.map(e=>`isValid(${e}[1]) ? ${e}[1] : -MAX_VALUE`),`[min(${d}[0], ${e.join(", ")}), max(${d}[1], ${a.join(", ")})]`):t}}return(0,u.p3)({axisGroupType:e,fields:(0,l.N)(t).map(e=>e.fieldName),percentTransformed:a,errorBoundExtentParamNames:o})}function P(e){return`span(${p}_${e}) > 0 ? [${p}_${e}[0] / span(${p}_${e}), ${p}_${e}[1] / span(${p}_${e})] : [1, 1]`}function D(e){return`[${y}[0] / ${h}_${e}[0], ${y}[1] / ${h}_${e}[1]]`}function L(e){return`min(1, ${I}_${e}[0], ${I}_${e}[1])`}function x(e){return`${h}_${e}[0] === 0 ? [${p}_${e}[1] * ${y}[0] / ${y}[1], ${p}_${e}[1]] : ${h}_${e}[1] === 0 ? [${p}_${e}[0], ${p}_${e}[0] * ${y}[1] / ${y}[0]] : [${p}_${e}[0] * ${I}_${e}[0] / ${S}_${e}, ${p}_${e}[1] * ${I}_${e}[1] / ${S}_${e}]`}},77089:(e,t,a)=>{a.d(t,{H:()=>u});var n=a(610435);a(692738);var r=a(412514),i=a(342411),o=a(363578),s=a(835711);let l={missingNameError:(0,n.Y)(i.sA,{id:"pVR+Xe",defaultMessage:"Please enter a name"}),forwardSlashError:(0,n.Y)(i.sA,{id:"xXBXdB",defaultMessage:"The / character is not allowed"}),backslashError:(0,n.Y)(i.sA,{id:"Vfsq83",defaultMessage:"The \\ character is not allowed"}),whitespaceError:(0,n.Y)(i.sA,{id:"fEtFAw",defaultMessage:"Leading or trailing spaces in the name is not allowed"}),databricksYMLError:(0,n.Y)(i.sA,{id:"IYYFRz",defaultMessage:"Cannot name databricks.yml. This is a reserved asset name for Declarative Automation Bundles"})};class u{static isValidName(e){return null===u.checkNameError(e)}static rhfValidate(e){return u.checkNameError(e)??!0}static checkNameError(e){if(!(e&&e.length>0))return l.missingNameError;if(e.includes("/"))return l.forwardSlashError;if(e.trim()!==e)return l.whitespaceError;if(e.includes("\\"))return l.backslashError;if((0,s.Qi)(e)===o.Hn.databricksYml)return l.databricksYMLError;return null}static get YupValidator(){return r.Yj().required().test("contains-slash","Name contains slash",e=>!e||-1===e.indexOf("/")).test("contains-leading-trailing-spaces","Name contains leading or trailing spaces",e=>!e||e.trim()===e)}static isValidPath(e){if(!e)return!1;if("/"===e)return!0;return!!((e=(e=e.startsWith("/")?e.substring(1):e).endsWith("/")?e.substring(0,e.length-1):e)&&e.length>0&&e.split("/").every(u.isValidName))}}},77750:(e,t,a)=>{a.d(t,{H8:()=>c,Yj:()=>d,ms:()=>s,wB:()=>u});var n=a(618297),r=a.n(n),i=a(515700),o=a(112658);function s(e){if("object"!=typeof e||!e.fields||!Array.isArray(e.fields))return!1;let t=e.fields.map(e=>e.name),a=e.fields.map(e=>e.dataType.typeName),n=7===e.fields.length&&r()(t,["origin","height","width","nChannels","mode","data","thumbnail"])&&r()(a,["string","integer","integer","integer","integer","string","binary"]),i=2===e.fields.length&&r()(t,["content","thumbnail"])&&r()(a,["binary","binary"]);return n||i}function l(e,t){return`${e}${t>0?t:""}`}function u({columnNames:e,parsedSchemas:t,parsedRows:a}){let n=Array(e.length),r={},d=new Map(e.map(e=>[e,0]));e.forEach((e,a)=>{let u,m,p=t[a],f=d.get(e);d.set(e,f+1);let g=e;if(f>0){for(;d.has(l(e,f));)f++;g=l(e,f),d.set(g,1)}let h={name:g,friendly_name:e,type:((void 0===(m=c(u=p.type))||u instanceof i.Ay.AtomType&&u.isFallback)&&(0,o.LW)(u,"dataGrid"),m||"string"),metadata:p.metadata};return s(p.type)&&(r[h.name]={...r[h.name],name:h.name,label:h.friendly_name||h.name,type:h.type,displayAs:"image"}),n[a]=h});let m=Array(a.length);for(let e=0;e<m.length;e++){let t=a[e],r={};for(let e=0;e<n.length;e++){let a=t[e];r[n[e].name]=a}m[e]=r}return{columns:n,rows:m,defaultSettings:{columns:r}}}function c(e){if(e instanceof i.Ay.StructType||e instanceof i.Ay.MapType||e instanceof i.Ay.ArrayType||e instanceof i.Ay.UnionType||e instanceof i.Ay.VariantType||e instanceof i.Ay.AtomType)return e.toString()}function d(e,t={}){let a={...e};return Object.entries(t).forEach(([e,t])=>{a.columns[e]={...a.columns[e],...t}}),a}},78340:(e,t,a)=>{a.d(t,{Y:()=>r});var n=a(441535);let r=()=>(0,n.W)("databricks.permission.usePermissionsApiForSharing",!1)},79847:(e,t,a)=>{a.d(t,{m:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enableSemanticModelErd",!1)}},86517:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.snapshotDashboardStandaloneInitEnabled",!1)}},89167:(e,t,a)=>{a.d(t,{o:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enableDatasetUndoRedo",!1)}},91012:(e,t,a)=>{a.d(t,{DD:()=>s,Ji:()=>o,yq:()=>l});var n,r,i,o=((n={}).BASE_ENVIRONMENT_TYPE_UNSPECIFIED="BASE_ENVIRONMENT_TYPE_UNSPECIFIED",n.CPU="CPU",n.GPU="GPU",n),s=((r={}).NONE="none",r.WORKSPACE="workspace",r.SYSTEM="system",r.CUSTOM="custom",r),l=((i={}).STATUS_UNSPECIFIED="STATUS_UNSPECIFIED",i.PENDING="PENDING",i.REFRESHING="REFRESHING",i.CREATED="CREATED",i.FAILED="FAILED",i.EXPIRED="EXPIRED",i.INVALID="INVALID",i)},101394:(e,t,a)=>{a.d(t,{Aq:()=>f,Fp:()=>p,Gz:()=>g,OG:()=>c,dl:()=>h,yH:()=>E});var n=a(101479),r=a(234453),i=a(26276),o=a(595720),s=a(981560),l=a(936417),u=a(952067);function c(e){return void 0!==e&&!(0,n.BP)(e)&&(0,u.$M)(e.scale)}let d={area:!0,bar:!0,box:!1,combo:!1,"forecast-line":!1,funnel:!0,heatmap:!1,histogram:!0,line:!0,pie:!0,scatter:!0,waterfall:!1},m={area:!0,bar:!0,box:!0,combo:!1,"forecast-line":!1,funnel:!0,heatmap:!1,histogram:!1,line:!0,pie:!0,scatter:!0,waterfall:!0};function p(e,t){return void 0!==t&&!(0,n.BP)(t)&&(0,u.wF)(t.scale)&&!0===m[e]&&"pie"!==e}function f(e,t){return!0===d[e.widgetType]&&"color"===t}function g(e,t){return!0===m[e.widgetType]&&"color"!==t}let h=500;function E({sortSpec:e,fieldEncoding:t,fieldEncodingToSortBy:a,dataModel:n,datasetName:u,resultsetDomainProfiler:c,isCustomSortEnabled:d}){let m=!1,p=!1,f=[];if((0,s.UE)(t)&&!(0,i.K)(t.field)){let s=(0,r.j)(t,n,u);if(m=!0===d&&"string"===s){let r=(0,l.MA)(t,n),s=c.getProfiler({resultsetFieldName:r}),u=a&&!(0,i.K)(a.field)?(0,l.MA)(a,n):void 0,{values:d=[]}=s?.getCategoricalDomain({sort:(0,o.zT)(e)?e:u?{by:"measure-reversed",fieldName:u,aggregate:{fn:"sum"}}:o.fC})??{};p=!(0,o.zT)(e)&&d.length>h,f=d}}return{shouldShowCustomSort:m,tooManyItems:p,domainValues:f}}},105026:(e,t,a)=>{a.d(t,{GF:()=>u,OX:()=>s,_Z:()=>o,_j:()=>c,ed:()=>l,fZ:()=>d});var n=a(886137),r=a.n(n),i=a(441535);let o=r()(()=>{let e=(0,i.W)("databricks.fe.editor.cacheFlags.maxCacheSize",1e7);if("number"==typeof e)return e;return 1e7}),s=r()(()=>(0,i.W)("databricks.fe.editor.cacheFlags.disableActiveStatementCache",!1)),l=r()(()=>(0,i.W)("databricks.fe.editor.cacheFlags.enableSqlStatementsParserWrapperCacheV2",!1)),u=r()(()=>(0,i.W)("databricks.fe.editor.cacheFlags.enableEditorSqlGlobalContextStoreCacheV2",!1)),c=r()(()=>(0,i.W)("databricks.fe.editor.cacheFlags.enableGhostTextTrackerCacheV2",!1)),d=r()(()=>{let e=(0,i.W)("databricks.fe.editor.cacheFlags.maxWorkerCacheSize",5e7);if("number"==typeof e)return e;return 5e7})},106390:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(441535);let r=()=>(0,n.W)("databricks.fe.lakeview.enableMobxActiveWidgetNameInDraft",!1)},107296:(e,t,a)=>{a.d(t,{G:()=>r});var n=a(697453);function r({title:e,description:t,severity:a}){return n.ds.call({root:{componentId:"data-rooms.notification.root",duration:3e3,severity:a},title:{value:e,...!t?{style:{fontWeight:"normal"}}:{}},...t?{description:{value:t}}:{}})}},107774:(e,t,a)=>{a.d(t,{X:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.discover.areSubDomainsEnabled",!1)}},108167:(e,t,a)=>{a.d(t,{$G:()=>w,CJ:()=>P,Dm:()=>B,Dn:()=>$,EF:()=>L,G$:()=>R,IX:()=>U,Ll:()=>_,Lr:()=>C,Sq:()=>V,bu:()=>D,cJ:()=>S,eo:()=>x,gW:()=>M,jV:()=>O,p8:()=>F,v8:()=>v,vX:()=>N});var n,r=a(610435),i=a(16778),o=a.n(i),s=a(692738),l=a(955897),u=a(342411),c=a(441535),d=a(967166),m=a(5697),p=a(707076),f=a(210785),g=a(141078),h=a(921195),E=a(660618),b=a(873092),T=a(611824),y=a(425628),I=a(765288);function A(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}let v=/^$|^\S(?:.*\S)?$/,S={key:void 0,value:""};function _(e){return e.reduce((e,t)=>(e[t.key]=t,e),{})}function C(e){let{discoveryTags:t,governedTags:a,governedTagKeys:n}=e.reduce((e,t)=>("string"==typeof t?e.discoveryTags.push({name:t,type:f.P.DISCOVERY}):(e.governedTags.push({name:t.key,type:f.P.GOVERNED,tagId:t.id,allowedValues:t.values?.map(e=>e.name),namespace:t.namespace}),e.governedTagKeys.add(t.key)),e),{governedTags:[],governedTagKeys:new Set,discoveryTags:[]}),r=t.filter(({name:e})=>!n.has(e));return a.concat(r).sort((e,t)=>e.name.localeCompare(t.name))}function R(e,t){if(t&&t.length>0){if(!(void 0!==e&&e)||!t.includes(e))return!0}else if(e&&e.trim()?.length>0)return!0;return!1}let O=(e,t)=>t?(0,r.Y)(u.sA,{id:"ES6F5Q",defaultMessage:"{tagValue} is not an allowed value for tag key {tagKey}",values:{tagValue:t,tagKey:e}}):(0,r.Y)(u.sA,{id:"fDVsd8",defaultMessage:"A value is required for tag key {tagKey}",values:{tagKey:e}});function N(e,t,a){let n=(0,T._)();if(!t?.name||!n)return;if(t.type===f.P.DISCOVERY)return{icon:(0,r.Y)(l.A,{style:a})};return(0,h.Y8)(e,t?.namespace,a)}let k=["system.","class."];function w(e,t){if(k.some(t=>e.startsWith(t)))if(e===D)return{formattedTagKey:o()(t),formattedTagValue:void 0};else{let[,a]=e.split(".");return{formattedTagKey:a,formattedTagValue:t}}return{formattedTagKey:e,formattedTagValue:t}}let M="system.Certified",P="system.Deprecated",D="system.certification_status";var L=((n={}).CERTIFIED="certified",n.DEPRECATED="deprecated",n.NONE="none",n);let x=[M,P];function U(e){if((0,b.e)()){let t=e.find(e=>e.tag_key===D);return{isCertified:t?.tag_value==="certified",isDeprecated:t?.tag_value==="deprecated"}}return{isCertified:e.some(e=>e.tag_key===M),isDeprecated:e.some(e=>e.tag_key===P)}}function F(e){if(!(0,b.e)())return!1;switch(e){case m.Z6.Notebook:return(0,c.W)("databricks.fe.filebrowser.enableNotebookTagging",!1);case m.Z6.Lakeview:return(0,I.w)();case m.Z6.DataRoom:return(0,y.g)();default:return!1}}function $(e,t){let a=e.startsWith("system."),n=t.startsWith("system.");if(e===D&&t!==D)return 1;if(e!==D&&t===D||a&&!n)return -1;if(!a&&n)return 1;return e.localeCompare(t)}function V(){let e=(0,g.mK)(),t=(0,p.Kt)(),a=(0,d.hG)(),n=(0,s.useRef)(a);return(0,s.useCallback)((a,r,i)=>{var o;return(o=function*(){if(a===E.UQ)return[];return n.current({governance_ui_log:{event_name:"fetchTablesWithDeprecatedTagQuery"}}),t&&(0,b.e)()?e.query({query:W,variables:{catalog:a,schema:r,limit:i},fetchPolicy:"cache-first"}).then(e=>e.data.searchmidtierSearchUnifiedSearch?.results?.map(e=>({catalog:a,schema:r,entity:e.name})).filter(e=>!!e.entity)??[]).catch(()=>[]):t&&(0,b.w)()?e.query({query:Y,variables:{catalog:a,schema:r,limit:i},fetchPolicy:"cache-first"}).then(e=>e.data.searchmidtierSearchUnifiedSearch?.results?.map(e=>({catalog:a,schema:r,entity:e.name})).filter(e=>!!e.entity)??[]).catch(()=>[]):[]},function(){var e=this,t=arguments;return new Promise(function(a,n){var r=o.apply(e,t);function i(e){A(r,a,n,i,s,"next",e)}function s(e){A(r,a,n,i,s,"throw",e)}i(void 0)})})()},[e,t])}let Y=(0,g.J1)`
  query DeprecatedUcTablesPerSchemaLegacySearch($catalog: String!, $schema: String!, $limit: Int!)
  @component(name: "DBSQLX.CatalogExplorer") {
    searchmidtierSearchUnifiedSearch(
      input: {
        filters: {
          resultTypes: [TABLE]
          tagNames: ["system.Deprecated"]
          catalogNames: [$catalog]
          schemaNames: [$schema]
        }
        pageSize: $limit
      }
    ) {
      results {
        name
        ucEntityMetadata {
          catalogName
          schemaName
        }
      }
    }
  }
`,W=(0,g.J1)`
  query DeprecatedUcTablesPerSchemaV2Search($catalog: String!, $schema: String!, $limit: Int!)
  @component(name: "DBSQLX.CatalogExplorer") {
    searchmidtierSearchUnifiedSearch(
      input: {
        filters: {
          resultTypes: [TABLE]
          tagsFilter: {
            tags: [{ tagName: "system.certification_status", tagValue: "deprecated" }, { tagName: "system.Deprecated" }]
          }
          isMetadataSearch: true
          catalogNames: [$catalog]
          schemaNames: [$schema]
        }
        pageSize: $limit
      }
    ) {
      results {
        name
        ucEntityMetadata {
          catalogName
          schemaName
        }
      }
    }
  }
`,B=(0,g.J1)`
  fragment EntityTagsData on SearchmidtierSearchUnifiedResult {
    tags {
      tag_key: name
      tag_value: value
    }
  }
`},110511:(e,t,a)=>{a.d(t,{E:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enableNamedParameterExpression",!1)}},112326:(e,t,a)=>{let n;a.d(t,{BH:()=>u,Mv:()=>s,cg:()=>l,t9:()=>o});var r=a(845690),i=a(343312);function o(){return void 0===n&&void 0===(n=(0,r.pj)({key:"local-debug-event-viewer-pref",version:1,initialValue:!1,scoped:!0}))&&(n=!1),n}function s(e,t){let a=t.notebook.getEditorMode(),n=String(t.notebook.id);(0,i.Py)({eventName:e.name,ts:Date.now(),eventType:"ActionManifest",entityType:a,entityId:n,extra:{notebook:t.notebook.toJSON(),store:t.store.getState()}})}function l(e,t,a,n){(0,i.Py)({ts:Date.now(),eventName:e,eventType:"Websocket",entityType:n,entityId:t,extra:a})}function u(e,t,a,n){if(!o())return void e.on(t,a,n);e.on(t,(...r)=>{a.call(n,...r),(0,i.Py)({eventName:t,ts:Date.now(),eventType:"NotebookEvent",entityType:e.getEditorMode(),entityId:String(e.id),extra:{notebook:e.toJSON()}})},n)}},120764:(e,t,a)=>{if(a.d(t,{S0:()=>N,T3:()=>M}),13057==a.j)var n=a(817148);if(13057==a.j)var r=a(352185);if(13057==a.j)var i=a(441535);if(13057==a.j)var o=a(22191);var s=a(87221);if(13057==a.j)var l=a(352954);if(13057==a.j)var u=a(919119);var c=a(993533),d=a(434700);if(13057==a.j)var m=a(911937);if(13057==a.j)var p=a(954557);if(13057==a.j)var f=a(823182);let g=(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(59276),a.e(37072),a.e(47589),a.e(17258),a.e(70426),a.e(19533),a.e(59032),a.e(67705)]).then(a.bind(a,927814));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(927814,"./ClusterMainTabs","lazy",e);return e()})()),h=(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(3752),a.e(54497),a.e(7473),a.e(36993),a.e(67590),a.e(51545),a.e(6932),a.e(20022),a.e(18294),a.e(5033),a.e(97768),a.e(24685),a.e(59276),a.e(59794),a.e(78580),a.e(55616),a.e(3330),a.e(92170),a.e(37797),a.e(11184),a.e(44004),a.e(52426),a.e(12514),a.e(22886),a.e(45854),a.e(32828),a.e(20556),a.e(40972),a.e(29580),a.e(92922),a.e(6198),a.e(95470),a.e(84245),a.e(97421),a.e(20806),a.e(47404),a.e(31083),a.e(78756),a.e(11136),a.e(64898),a.e(20805),a.e(80159),a.e(4065),a.e(75031),a.e(46729),a.e(44258),a.e(25642),a.e(36525),a.e(36933),a.e(14770),a.e(13015),a.e(2347),a.e(16506),a.e(95258),a.e(42797),a.e(68775),a.e(11022),a.e(49029),a.e(10133),a.e(84283),a.e(44341),a.e(98317),a.e(43587),a.e(35711),a.e(8089),a.e(23197),a.e(10095),a.e(62621),a.e(45738),a.e(19604),a.e(1377),a.e(17292),a.e(54894),a.e(83750),a.e(70231),a.e(92480),a.e(47323),a.e(92792),a.e(63121),a.e(79832),a.e(65084),a.e(81647),a.e(8260),a.e(27241),a.e(71046),a.e(71713),a.e(36176),a.e(46822),a.e(37140),a.e(36739),a.e(89478),a.e(13915),a.e(50536),a.e(47506),a.e(4340),a.e(95150),a.e(49019),a.e(2602),a.e(79547),a.e(83537),a.e(50621),a.e(17456),a.e(84736),a.e(47838),a.e(34678),a.e(95789),a.e(33364),a.e(38757),a.e(23516),a.e(49390),a.e(92926),a.e(51751),a.e(11528),a.e(65141),a.e(42389),a.e(57005),a.e(47399),a.e(83324),a.e(92417),a.e(44330),a.e(13535),a.e(38599)]).then(a.bind(a,248100));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(248100,"./clusters/ClusterDetail","lazy",e);return e()})()),E=(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(67590),a.e(5033),a.e(78580),a.e(55616),a.e(3330),a.e(11184),a.e(52426),a.e(22886),a.e(21141),a.e(68775),a.e(11022),a.e(49029),a.e(10133),a.e(43587),a.e(23197),a.e(10095),a.e(62621),a.e(45738),a.e(19604),a.e(99918),a.e(3341),a.e(73208),a.e(18080),a.e(49934),a.e(30908),a.e(25230),a.e(96226),a.e(90719),a.e(65376),a.e(87058)]).then(a.bind(a,624730));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(624730,"./tabs/BrickIndexListTab","lazy",e);return e()})()),b="compute.main-page.all-purpose",T="compute.main-page.automated",y="compute.main-page.sql-warehouses",I="compute.main-page.brickindex",A="compute.main-page.brickstore",v="compute.main-page.instance-pools",S="compute.main-page.gpu-pools",_="compute.main-page.policies",C="compute.main-page.apps",R="compute.main-page.database-instances",O="compute.main-page.serverless",N=new Set([b,T,y,I,A,v,S,_,C,R,O]),k=[c.e2L.UI,c.e2L.API],w={productEntityChain:[{productEntityType:s.Lm.CLUSTER,routeParamId:"computeId"}]},M=()=>[{pageId:"compute.root",esComponent:o.Es.ClustersUi,path:"/compute",element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(10095),a.e(45738),a.e(52530)]).then(a.bind(a,411877));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(411877,"./ClusterOutlet","lazy",e);return e()})()),children:[{pageId:"compute.main-page",path:"",element:g,children:[{access:n.g3.COMPUTE_ALL_PURPOSE,pageId:b,path:r.FI.InteractiveListPage,element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(20022),a.e(59794),a.e(12514),a.e(63630),a.e(10095),a.e(45738),a.e(5830),a.e(36739),a.e(47506),a.e(49019),a.e(75343),a.e(42389),a.e(75698),a.e(87003),a.e(64109)]).then(a.bind(a,964109));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(964109,"./tabs/InteractiveClustersListTab","lazy",e);return e()})()),...(0,i.W)("databricks.fe.clustercontrols.enableClusterQueriesPrefetch",!1)?{prefetchQueries:[{query:f.lc,variables:{input:{pageToken:(0,l.Ut)("pToken",{defaultValue:""}),pageSize:(0,l.au)("number",(0,l.Ut)("pSize",{defaultValue:"20"})),filterBy:{clusterName:(0,l.Ut)("cnf",{defaultValue:void 0}),creatorUserId:(0,l.Ut)("creator"),isPinned:(0,l.Ut)("pinned"),clusterSources:k,canInteractWith:!1},sortBy:{field:"DEFAULT",direction:"ASC"}},skipPolicy:!1}}]}:{}},{access:n.g3.COMPUTE_JOB,pageId:T,path:r.FI.AutomatedListPage,element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(20022),a.e(59794),a.e(12514),a.e(63630),a.e(10095),a.e(45738),a.e(5830),a.e(36739),a.e(47506),a.e(49019),a.e(75343),a.e(42389),a.e(75698),a.e(87003),a.e(10091)]).then(a.bind(a,610091));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(610091,"./tabs/AutomatedClustersListTab","lazy",e);return e()})())},{access:n.g3.SQL_WAREHOUSES,pageId:y,path:r.FI.SqlWarehouses,element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(67590),a.e(51545),a.e(20022),a.e(97768),a.e(59794),a.e(3330),a.e(59316),a.e(5400),a.e(63819),a.e(78332),a.e(45893),a.e(10229),a.e(3711),a.e(36768),a.e(356),a.e(99918),a.e(5830),a.e(30908),a.e(75041),a.e(7984),a.e(11798),a.e(13199),a.e(57958),a.e(35814),a.e(11926),a.e(61149),a.e(21410),a.e(10458),a.e(70297),a.e(33470),a.e(37702)]).then(a.bind(a,756430));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(756430,"./tabs/SqlWarehousesListTab","lazy",e);return e()})()),esComponent:o.Es.WarehouseUI},{access:n.g3.SQL_WAREHOUSES,pageId:y,path:`${r.FI.SqlWarehouses}/new`,element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(67590),a.e(51545),a.e(20022),a.e(97768),a.e(59794),a.e(3330),a.e(59316),a.e(5400),a.e(63819),a.e(78332),a.e(45893),a.e(10229),a.e(3711),a.e(36768),a.e(356),a.e(99918),a.e(5830),a.e(30908),a.e(75041),a.e(7984),a.e(11798),a.e(13199),a.e(57958),a.e(35814),a.e(11926),a.e(61149),a.e(21410),a.e(10458),a.e(70297),a.e(33470),a.e(37702)]).then(a.bind(a,756430));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(756430,"./tabs/SqlWarehousesListTab","lazy",e);return e()})()),esComponent:o.Es.WarehouseUI},{access:n.g3.COMPUTE_VECTOR_SEARCH,pageId:I,path:r.FI.BrickIndex,element:E,esComponent:o.Es.Brickindex},{access:n.g3.COMPUTE_ONLINE_STORES,pageId:A,path:r.FI.BrickStore,element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(25230),a.e(40223)]).then(a.bind(a,940223));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(940223,"./tabs/BrickStoreListTab","lazy",e);return e()})()),esComponent:o.Es.Brickstore},{access:n.g3.COMPUTE_INSTANCE_POOLS,pageId:v,path:r.FI.InstancePools,element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(20022),a.e(59794),a.e(10095),a.e(45738),a.e(90036)]).then(a.bind(a,498693));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(498693,"./tabs/InstancePoolsListTab","lazy",e);return e()})())},{access:n.g3.COMPUTE_GPU_POOLS,pageId:S,path:r.FI.GpuPools,element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(20022),a.e(59794),a.e(59202),a.e(78884)]).then(a.bind(a,332277));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(332277,"./tabs/GpuPoolsListTab","lazy",e);return e()})())},{access:n.g3.COMPUTE_CLUSTER_POLICIES,pageId:_,path:r.FI.ClusterPolicies,element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(20022),a.e(59794),a.e(10095),a.e(45738),a.e(72991)]).then(a.bind(a,762462));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(762462,"./tabs/ClusterPoliciesListTab","lazy",e);return e()})()),...(0,i.W)("databricks.fe.clustercontrols.enableClusterListPrefetch",!1)?{prefetchQueries:[{query:p.A,variables:{input:{}}}]}:{}},{access:n.g3.APPS,pageId:C,path:r.FI.LakehouseApps,element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(36993),a.e(20022),a.e(59794),a.e(79715),a.e(42934),a.e(13546),a.e(10740),a.e(3789),a.e(51987),a.e(36516),a.e(64741),a.e(37235)]).then(a.bind(a,100966));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(100966,"./tabs/LakehouseAppsListTab","lazy",e);return e()})()),esComponent:o.Es.LakehouseApps},{access:n.g3.COMPUTE_DATABASE_INSTANCES,pageId:R,path:r.FI.DatabaseInstances,element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(67590),a.e(59794),a.e(32828),a.e(40972),a.e(99918),a.e(83750),a.e(92480),a.e(30908),a.e(25230),a.e(57958),a.e(39712),a.e(22203),a.e(98693)]).then(a.bind(a,975242));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(975242,"./tabs/DatabaseInstancesListTab","lazy",e);return e()})()),esComponent:o.Es.Brickstore},{pageId:O,path:r.FI.Serverless,element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(20022),a.e(85393)]).then(a.bind(a,985393));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(985393,"./tabs/ServerlessListTab","lazy",e);return e()})())},{pageId:"compute.main-page.catch-all",path:"*",element:(0,u.P)()},{pageId:"compute.main-page.index",path:"",element:(0,u.P)()}]},{access:n.g3.COMPUTE_VECTOR_SEARCH,pageId:"component.main-page.brickindex.detail",path:`${r.FI.BrickIndex}/:endpointName`,element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(3752),a.e(36993),a.e(67590),a.e(51545),a.e(6932),a.e(18294),a.e(5033),a.e(97768),a.e(24685),a.e(59276),a.e(59794),a.e(78580),a.e(55616),a.e(3330),a.e(92170),a.e(11184),a.e(44004),a.e(52426),a.e(22886),a.e(32828),a.e(40972),a.e(29580),a.e(92922),a.e(95470),a.e(84245),a.e(97421),a.e(20806),a.e(47404),a.e(31083),a.e(11136),a.e(64898),a.e(25642),a.e(36525),a.e(2347),a.e(71066),a.e(42797),a.e(68775),a.e(11022),a.e(49029),a.e(10133),a.e(84283),a.e(44341),a.e(43587),a.e(8089),a.e(23197),a.e(10095),a.e(62621),a.e(45738),a.e(19604),a.e(1377),a.e(83750),a.e(92480),a.e(47323),a.e(92792),a.e(63121),a.e(79832),a.e(65084),a.e(81647),a.e(8260),a.e(71046),a.e(71713),a.e(36176),a.e(46822),a.e(37140),a.e(18080),a.e(89478),a.e(30908),a.e(13915),a.e(50536),a.e(4340),a.e(57005),a.e(47399),a.e(90719),a.e(65376),a.e(55589)]).then(a.bind(a,403767));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(403767,"./brickindex/Endpoint","lazy",e);return e()})()),esComponent:o.Es.Brickindex},{access:n.g3.COMPUTE_ALL_PURPOSE_CREATE,pageId:"compute.clusters.create",path:"/compute/clusters/new",element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(32305),a.e(36993),a.e(67590),a.e(51545),a.e(20022),a.e(18294),a.e(5033),a.e(59276),a.e(78580),a.e(55616),a.e(3330),a.e(37797),a.e(11184),a.e(52426),a.e(12514),a.e(22886),a.e(6198),a.e(95470),a.e(80159),a.e(47589),a.e(4065),a.e(75031),a.e(44258),a.e(43164),a.e(13015),a.e(15254),a.e(42797),a.e(68775),a.e(11022),a.e(49029),a.e(10133),a.e(84283),a.e(44341),a.e(98317),a.e(43587),a.e(35711),a.e(8089),a.e(23197),a.e(10095),a.e(62621),a.e(45738),a.e(19604),a.e(1377),a.e(70231),a.e(27241),a.e(36739),a.e(47506),a.e(49019),a.e(40211),a.e(84736),a.e(47838),a.e(34678),a.e(95789),a.e(33364),a.e(49390),a.e(65141),a.e(44330),a.e(31154),a.e(77111)]).then(a.bind(a,482387));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(482387,"./clusters/ClusterCreate","lazy",e);return e()})())},{access:n.g3.COMPUTE,pageId:"compute.clusters.detail",path:"/compute/clusters/:computeId",element:(0,u.P)(),...(0,i.W)("databricks.fe.clustercontrols.enableClusterDetailQueriesPrefetch",!1)?{prefetchQueries:[{query:m.Z5,variables:{input:{clusterId:(0,l.tR)("computeId")}}}]}:{},children:[{pageId:"compute.clusters.detail.configuration",path:"",element:h,observability:w},{pageId:"compute.clusters.detail.notebooks",path:"notebooks",element:h,observability:w},{pageId:"compute.clusters.detail.libraries",path:"libraries",element:h,observability:w},{pageId:"compute.clusters.detail.events",path:"events",element:h,observability:w},{pageId:"compute.clusters.detail.spark-ui",path:"spark-ui",element:h,observability:w},{pageId:"compute.clusters.detail.driver-logs",path:"driver-logs",element:h,observability:w},{pageId:"compute.clusters.detail.metrics",path:"metrics",element:h,observability:w},{pageId:"compute.clusters.detail.apps",path:"apps",element:h,observability:w},{pageId:"compute.clusters.detail.spark-compute-ui",path:"spark-compute-ui/:sparkNodeId",element:h,observability:w},{pageId:"compute.clusters.edit",path:"edit",element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(36993),a.e(67590),a.e(51545),a.e(20022),a.e(18294),a.e(5033),a.e(59276),a.e(78580),a.e(55616),a.e(3330),a.e(37797),a.e(11184),a.e(52426),a.e(12514),a.e(22886),a.e(6198),a.e(95470),a.e(80159),a.e(47589),a.e(4065),a.e(75031),a.e(44258),a.e(43164),a.e(13015),a.e(15254),a.e(42797),a.e(68775),a.e(11022),a.e(49029),a.e(10133),a.e(84283),a.e(44341),a.e(98317),a.e(43587),a.e(35711),a.e(8089),a.e(23197),a.e(10095),a.e(62621),a.e(45738),a.e(19604),a.e(1377),a.e(70231),a.e(27241),a.e(36739),a.e(47506),a.e(49019),a.e(84736),a.e(47838),a.e(34678),a.e(95789),a.e(33364),a.e(49390),a.e(65141),a.e(44330),a.e(31154),a.e(65890)]).then(a.bind(a,654684));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(654684,"./clusters/ClusterEdit","lazy",e);return e()})()),observability:w}]},{access:n.g3.COMPUTE_INSTANCE_POOLS,pageId:"compute.warm-pools.detail",path:"instance-pools/:poolId",element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(36993),a.e(67590),a.e(20022),a.e(18294),a.e(5033),a.e(59276),a.e(59794),a.e(78580),a.e(55616),a.e(21234),a.e(3330),a.e(11184),a.e(52426),a.e(12514),a.e(22886),a.e(6198),a.e(80159),a.e(47589),a.e(4065),a.e(46729),a.e(13015),a.e(9837),a.e(68775),a.e(11022),a.e(49029),a.e(10133),a.e(98317),a.e(43587),a.e(23197),a.e(10095),a.e(62621),a.e(45738),a.e(19604),a.e(70231),a.e(36739),a.e(47506),a.e(49019),a.e(47838),a.e(65141),a.e(5707),a.e(12153),a.e(61837)]).then(a.bind(a,859748));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(859748,"./pools/PoolDetail","lazy",e);return e()})()),observability:{productEntityChain:[{productEntityType:s.Lm.INSTANCE_POOL,routeParamId:"poolId"}]}},{access:n.g3.COMPUTE_INSTANCE_POOLS,pageId:"compute.warm-pools.create",path:"instance-pools/new",element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(36993),a.e(18294),a.e(5033),a.e(59276),a.e(78580),a.e(55616),a.e(3330),a.e(11184),a.e(52426),a.e(12514),a.e(22886),a.e(6198),a.e(80159),a.e(47589),a.e(4065),a.e(46729),a.e(13015),a.e(9837),a.e(68775),a.e(11022),a.e(49029),a.e(10133),a.e(98317),a.e(43587),a.e(23197),a.e(10095),a.e(62621),a.e(45738),a.e(19604),a.e(70231),a.e(36739),a.e(47506),a.e(49019),a.e(47838),a.e(65141),a.e(5707),a.e(12153),a.e(53449)]).then(a.bind(a,324461));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(324461,"./pools/PoolCreate","lazy",e);return e()})())},{access:n.g3.COMPUTE_INSTANCE_POOLS,pageId:"compute.warm-pools.edit",path:"instance-pools/:poolId/edit",element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(36993),a.e(18294),a.e(5033),a.e(59276),a.e(78580),a.e(55616),a.e(3330),a.e(11184),a.e(52426),a.e(12514),a.e(22886),a.e(6198),a.e(80159),a.e(47589),a.e(4065),a.e(46729),a.e(13015),a.e(9837),a.e(68775),a.e(11022),a.e(49029),a.e(10133),a.e(98317),a.e(43587),a.e(23197),a.e(10095),a.e(62621),a.e(45738),a.e(19604),a.e(70231),a.e(36739),a.e(47506),a.e(49019),a.e(47838),a.e(65141),a.e(5707),a.e(12153),a.e(44260)]).then(a.bind(a,607528));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(607528,"./pools/PoolEdit","lazy",e);return e()})()),observability:{productEntityChain:[{productEntityType:s.Lm.INSTANCE_POOL,routeParamId:"poolId"}]}},{pageId:"compute.policies",path:"policies",element:(0,u.P)(),children:[{access:n.g3.COMPUTE_CLUSTER_POLICIES,pageId:"compute.policies.create",path:"new",element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(3752),a.e(32305),a.e(54497),a.e(7473),a.e(20872),a.e(36993),a.e(67590),a.e(51545),a.e(6932),a.e(20022),a.e(18294),a.e(5033),a.e(1291),a.e(97768),a.e(24685),a.e(59276),a.e(99406),a.e(59794),a.e(78580),a.e(55616),a.e(21234),a.e(3330),a.e(59316),a.e(37797),a.e(11184),a.e(52426),a.e(12514),a.e(22886),a.e(45854),a.e(72263),a.e(86412),a.e(20556),a.e(35747),a.e(29580),a.e(6198),a.e(95470),a.e(5400),a.e(20806),a.e(47404),a.e(20805),a.e(80159),a.e(4065),a.e(75031),a.e(78332),a.e(13526),a.e(6854),a.e(13686),a.e(46729),a.e(44258),a.e(36933),a.e(77435),a.e(14770),a.e(13015),a.e(16506),a.e(9103),a.e(42797),a.e(68775),a.e(11022),a.e(49029),a.e(10133),a.e(43927),a.e(18650),a.e(87122),a.e(12674),a.e(4828),a.e(84283),a.e(44341),a.e(98317),a.e(43587),a.e(35711),a.e(8089),a.e(23197),a.e(10095),a.e(62621),a.e(45738),a.e(19604),a.e(356),a.e(1377),a.e(17292),a.e(34607),a.e(54694),a.e(65484),a.e(54894),a.e(79331),a.e(45524),a.e(55851),a.e(70231),a.e(23145),a.e(14528),a.e(59498),a.e(13691),a.e(35094),a.e(97091),a.e(56129),a.e(27241),a.e(36739),a.e(10297),a.e(24283),a.e(47506),a.e(95150),a.e(49019),a.e(73089),a.e(2602),a.e(79547),a.e(83596),a.e(83537),a.e(50621),a.e(17456),a.e(84736),a.e(57978),a.e(47838),a.e(23055),a.e(55404),a.e(34678),a.e(68569),a.e(98120),a.e(95789),a.e(42170),a.e(33364),a.e(48387),a.e(97236),a.e(9701),a.e(2720),a.e(59815),a.e(38757),a.e(42522),a.e(91322),a.e(88329),a.e(56843),a.e(23516),a.e(49390),a.e(60467),a.e(92926),a.e(51751),a.e(65141),a.e(8423),a.e(42389),a.e(60295),a.e(75698),a.e(92417),a.e(11445),a.e(76834),a.e(39216),a.e(63933)]).then(a.bind(a,751931));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(751931,"./policies/PolicyCreate","lazy",e);return e()})())},{access:n.g3.COMPUTE_CLUSTER_POLICIES,pageId:"compute.policies.view",path:":policyId",element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(3752),a.e(32305),a.e(54497),a.e(7473),a.e(20872),a.e(36993),a.e(67590),a.e(51545),a.e(6932),a.e(20022),a.e(18294),a.e(5033),a.e(1291),a.e(97768),a.e(24685),a.e(59276),a.e(99406),a.e(59794),a.e(78580),a.e(55616),a.e(21234),a.e(3330),a.e(59316),a.e(37797),a.e(11184),a.e(52426),a.e(12514),a.e(22886),a.e(45854),a.e(72263),a.e(86412),a.e(20556),a.e(35747),a.e(29580),a.e(6198),a.e(95470),a.e(5400),a.e(20806),a.e(47404),a.e(20805),a.e(80159),a.e(4065),a.e(75031),a.e(78332),a.e(13526),a.e(6854),a.e(13686),a.e(46729),a.e(44258),a.e(36933),a.e(77435),a.e(14770),a.e(13015),a.e(16506),a.e(9103),a.e(42797),a.e(68775),a.e(11022),a.e(49029),a.e(10133),a.e(43927),a.e(18650),a.e(87122),a.e(12674),a.e(4828),a.e(84283),a.e(44341),a.e(98317),a.e(43587),a.e(35711),a.e(8089),a.e(23197),a.e(10095),a.e(62621),a.e(45738),a.e(19604),a.e(356),a.e(1377),a.e(17292),a.e(34607),a.e(54694),a.e(65484),a.e(54894),a.e(79331),a.e(45524),a.e(55851),a.e(70231),a.e(23145),a.e(14528),a.e(59498),a.e(13691),a.e(35094),a.e(97091),a.e(56129),a.e(27241),a.e(36739),a.e(10297),a.e(24283),a.e(47506),a.e(95150),a.e(49019),a.e(73089),a.e(2602),a.e(79547),a.e(83596),a.e(83537),a.e(50621),a.e(17456),a.e(84736),a.e(57978),a.e(47838),a.e(23055),a.e(55404),a.e(34678),a.e(68569),a.e(98120),a.e(95789),a.e(42170),a.e(33364),a.e(48387),a.e(97236),a.e(9701),a.e(2720),a.e(59815),a.e(38757),a.e(42522),a.e(91322),a.e(88329),a.e(56843),a.e(23516),a.e(49390),a.e(60467),a.e(92926),a.e(51751),a.e(65141),a.e(8423),a.e(42389),a.e(60295),a.e(75698),a.e(92417),a.e(11445),a.e(76834),a.e(39216),a.e(65527)]).then(a.bind(a,768325));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(768325,"./policies/PolicyDetail","lazy",e);return e()})()),observability:{productEntityChain:[{productEntityType:s.Lm.CLUSTER_POLICY,routeParamId:"policyId"}]}},{access:n.g3.COMPUTE_CLUSTER_POLICIES,pageId:"compute.policies.edit",path:":policyId/edit",element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(3752),a.e(32305),a.e(54497),a.e(7473),a.e(20872),a.e(36993),a.e(67590),a.e(51545),a.e(6932),a.e(20022),a.e(18294),a.e(5033),a.e(1291),a.e(97768),a.e(24685),a.e(59276),a.e(99406),a.e(59794),a.e(78580),a.e(55616),a.e(21234),a.e(3330),a.e(59316),a.e(37797),a.e(11184),a.e(52426),a.e(12514),a.e(22886),a.e(45854),a.e(72263),a.e(86412),a.e(20556),a.e(35747),a.e(29580),a.e(6198),a.e(95470),a.e(5400),a.e(20806),a.e(47404),a.e(20805),a.e(80159),a.e(4065),a.e(75031),a.e(78332),a.e(13526),a.e(6854),a.e(13686),a.e(46729),a.e(44258),a.e(36933),a.e(77435),a.e(14770),a.e(13015),a.e(16506),a.e(9103),a.e(42797),a.e(68775),a.e(11022),a.e(49029),a.e(10133),a.e(43927),a.e(18650),a.e(87122),a.e(12674),a.e(4828),a.e(84283),a.e(44341),a.e(98317),a.e(43587),a.e(35711),a.e(8089),a.e(23197),a.e(10095),a.e(62621),a.e(45738),a.e(19604),a.e(356),a.e(1377),a.e(17292),a.e(34607),a.e(54694),a.e(65484),a.e(54894),a.e(79331),a.e(45524),a.e(55851),a.e(70231),a.e(23145),a.e(14528),a.e(59498),a.e(13691),a.e(35094),a.e(97091),a.e(56129),a.e(27241),a.e(36739),a.e(10297),a.e(24283),a.e(47506),a.e(95150),a.e(49019),a.e(73089),a.e(2602),a.e(79547),a.e(83596),a.e(83537),a.e(50621),a.e(17456),a.e(84736),a.e(57978),a.e(47838),a.e(23055),a.e(55404),a.e(34678),a.e(68569),a.e(98120),a.e(95789),a.e(42170),a.e(33364),a.e(48387),a.e(97236),a.e(9701),a.e(2720),a.e(59815),a.e(38757),a.e(42522),a.e(91322),a.e(88329),a.e(56843),a.e(23516),a.e(49390),a.e(60467),a.e(92926),a.e(51751),a.e(65141),a.e(8423),a.e(42389),a.e(60295),a.e(75698),a.e(92417),a.e(11445),a.e(76834),a.e(39216),a.e(58480)]).then(a.bind(a,374600));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(374600,"./policies/PolicyEdit","lazy",e);return e()})()),observability:{productEntityChain:[{productEntityType:s.Lm.CLUSTER_POLICY,routeParamId:"policyId"}]}}]},{access:n.g3.COMPUTE_ONLINE_STORES,pageId:"compute.main-page.sub",path:`${r.FI.BrickStore}/:storeName`,element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(3752),a.e(67590),a.e(6932),a.e(97768),a.e(24685),a.e(55616),a.e(3330),a.e(92170),a.e(44004),a.e(32828),a.e(40972),a.e(29580),a.e(92922),a.e(84245),a.e(97421),a.e(20806),a.e(47404),a.e(31083),a.e(11136),a.e(64898),a.e(25642),a.e(36525),a.e(86869),a.e(30140),a.e(89650),a.e(2347),a.e(10095),a.e(83750),a.e(92480),a.e(47323),a.e(92792),a.e(63121),a.e(79832),a.e(65084),a.e(81647),a.e(8260),a.e(71046),a.e(71713),a.e(36176),a.e(46822),a.e(37140),a.e(89478),a.e(13915),a.e(50536),a.e(4340),a.e(57005),a.e(47399),a.e(51380)]).then(a.bind(a,193319));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(193319,"./brickStore/BrickStore","lazy",e);return e()})()),esComponent:o.Es.Brickstore},{access:n.g3.COMPUTE_DATABASE_INSTANCES,esComponent:o.Es.Brickstore,pageId:"compute.database-instances",path:`${r.FI.DatabaseInstances}/:databaseInstanceName`,element:(0,d.D)(()=>(()=>{let e=()=>a.e(16561).then(a.bind(a,216561));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(216561,"./databaseInstances/DatabaseInstanceLakebaseRedirectWrapper","lazy",e);return e()})()),children:[{pageId:"compute.database-instances.detail",path:"",element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(3752),a.e(32305),a.e(36993),a.e(67590),a.e(51545),a.e(6932),a.e(18294),a.e(5033),a.e(1291),a.e(97768),a.e(24685),a.e(59276),a.e(99406),a.e(78580),a.e(55616),a.e(3330),a.e(92170),a.e(59316),a.e(37797),a.e(11184),a.e(44004),a.e(52426),a.e(12514),a.e(22886),a.e(45854),a.e(72263),a.e(86412),a.e(32828),a.e(40972),a.e(35747),a.e(29580),a.e(92922),a.e(6198),a.e(84245),a.e(97421),a.e(20806),a.e(47404),a.e(31083),a.e(11136),a.e(64898),a.e(13526),a.e(25642),a.e(36525),a.e(2347),a.e(95258),a.e(16242),a.e(42797),a.e(68775),a.e(11022),a.e(49029),a.e(10133),a.e(43927),a.e(18650),a.e(87122),a.e(12674),a.e(4828),a.e(84283),a.e(98317),a.e(43587),a.e(35711),a.e(23197),a.e(10095),a.e(62621),a.e(45738),a.e(19604),a.e(356),a.e(17292),a.e(34607),a.e(54694),a.e(65484),a.e(54894),a.e(79331),a.e(45524),a.e(83750),a.e(55851),a.e(70231),a.e(23145),a.e(14528),a.e(92480),a.e(47323),a.e(92792),a.e(59498),a.e(63121),a.e(13691),a.e(35094),a.e(97091),a.e(79832),a.e(56129),a.e(65084),a.e(81647),a.e(8260),a.e(71046),a.e(71713),a.e(36176),a.e(46822),a.e(37140),a.e(89478),a.e(13915),a.e(50536),a.e(4340),a.e(95150),a.e(73089),a.e(57978),a.e(59909),a.e(57005),a.e(47399),a.e(39712),a.e(82802)]).then(a.bind(a,602869));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(602869,"./databaseInstances/DatabaseInstanceDetail","lazy",e);return e()})())},{pageId:"compute.database-instances.edit",path:"edit",element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(36993),a.e(67590),a.e(32828),a.e(40972),a.e(3910),a.e(99918),a.e(83750),a.e(92480),a.e(30908),a.e(25230),a.e(57958),a.e(22203),a.e(28498)]).then(a.bind(a,762876));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(762876,"./databaseInstances/DatabaseInstanceEdit","lazy",e);return e()})())}]},{access:n.g3.COMPUTE,pageId:"compute.spark-ui",path:"sparkui",element:(0,u.P)(),children:[{pageId:"compute.spark-ui.driver-logs",path:":clusterId/driver-logs",element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(36993),a.e(20022),a.e(18294),a.e(5033),a.e(59794),a.e(12514),a.e(43164),a.e(50799),a.e(51783),a.e(48387),a.e(83324),a.e(47930),a.e(53074)]).then(a.bind(a,276293));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(276293,"./sparkUi/DriverLogs","lazy",e);return e()})()),observability:{productEntityChain:[{productEntityType:s.Lm.CLUSTER,routeParamId:"clusterId"}]}},{pageId:"compute.spark-ui.metrics",path:":clusterId/metrics",element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(3752),a.e(36993),a.e(67590),a.e(6932),a.e(5033),a.e(97768),a.e(24685),a.e(59794),a.e(55616),a.e(3330),a.e(92170),a.e(44004),a.e(32828),a.e(20556),a.e(40972),a.e(29580),a.e(92922),a.e(84245),a.e(97421),a.e(20806),a.e(47404),a.e(31083),a.e(78756),a.e(11136),a.e(64898),a.e(80159),a.e(4065),a.e(25642),a.e(36525),a.e(2347),a.e(95258),a.e(72605),a.e(10095),a.e(45738),a.e(83750),a.e(92480),a.e(47323),a.e(92792),a.e(63121),a.e(79832),a.e(65084),a.e(81647),a.e(8260),a.e(71046),a.e(71713),a.e(36176),a.e(46822),a.e(37140),a.e(89478),a.e(13915),a.e(50536),a.e(4340),a.e(57005),a.e(47399),a.e(13535),a.e(79818)]).then(a.bind(a,629904));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(629904,"./sparkUi/Metrics","lazy",e);return e()})()),observability:{productEntityChain:[{productEntityType:s.Lm.CLUSTER,routeParamId:"clusterId"}]}},{pageId:"compute.spark-ui.view",path:":clusterId/:root/*",element:(0,d.D)(()=>(()=>{let e=()=>a.e(1257).then(a.bind(a,1257));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(1257,"./sparkUi/SparkUi","lazy",e);return e()})()),observability:{productEntityChain:[{productEntityType:s.Lm.CLUSTER,routeParamId:"clusterId"}]}},{pageId:"compute.spark-ui.view",path:"*",element:(0,d.D)(()=>(()=>{let e=()=>a.e(86400).then(a.bind(a,386400));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(386400,"./sparkUi/LegacySparkUiCatchall","lazy",e);return e()})())}]},{access:n.g3.COMPUTE_GPU_POOLS,esComponent:o.Es.AIRuntime,pageId:"compute.gpu-pools.detail",path:"gpu-pools/:gpuPoolId",element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(36993),a.e(20022),a.e(59276),a.e(59794),a.e(47589),a.e(51503),a.e(59202),a.e(59032),a.e(68037)]).then(a.bind(a,368037));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(368037,"./gpu_pools/GpuPoolDetail","lazy",e);return e()})())}]}]},121339:(e,t,a)=>{a.d(t,{t:()=>_});var n=a(359419),r=a.n(n),i=a(536717),o=a.n(i),s=a(608983),l=a(720097),u=a.n(l),c=a(377063),d=a.n(c),m=a(22191),p=a(626152),f=a(977286),g=a(106049),h=a(595720),E=a(952067),b=a(75725);function T({vlDomain:e,valueAlias:t,columnSchema:a}){return function({domain:e,columnSchema:t}){let{type:a,timezone:n}=t??{};if(!(0,g.L9)(a)||!n)return e;return e.map(e=>{if(!u()(e))return e;let t=(0,f.gC)(d().utc(e),n);return(0,f.EJ)(t,"UTC").valueOf()})}({domain:function({vlDomain:e,valueAlias:t}){if(!t)return e;let a=new Map(t.map(({originalValue:e,alias:t})=>[e,t]));return e.map(e=>a.get(e)??e)}({vlDomain:e,valueAlias:t}),columnSchema:a})}function y({channel:e,domainSignalMap:t,isFacetSubChart:a}){if(!a||"x"!==e&&"y"!==e||!t)return;let n=t.get(e);if(!n)return;return{domain:n.signalDef}}var I=a(41375),A=a(200165),v=a(859773),S=a(270527);function _({channel:e,scale:t,colors:a,colorRamp:n,shapes:i,strokeDashes:l,extraVLScaleSpec:u,continuousScalePadding:c,hiddenGroupOffsetValues:d,valueAlias:f,zoomable:g,dualAxisMetadata:R,percent:O,mark:N,domainProfiler:k,isLegacyRedashViz:w,fieldName:M,domainSignalMap:P,columnSchema:D,visual:L,isFacetSubChart:x}){let U=function(e){switch(e.type){case"quantitative":if(e.fn?.type==="log")return{...e.fn,type:"symlog"};return e.fn;case"temporal":return{type:"utc"};case"categorical":return}}(t),F=function({channel:e,zoomable:t,scale:a,hiddenGroupOffsetValues:n,valueAlias:r,dualAxisMetadata:i,domainProfiler:o,isLegacyRedashViz:l,fieldName:u,domainSignalMap:c,columnSchema:d,isFacetSubChart:f}){let{type:g}=a;switch(g){case"quantitative":return function({channel:e,scale:t,dualAxisMetadata:a,domainSignalMap:n,isFacetSubChart:r}){let{domain:i}=t;if(i)return{...void 0!==i.min?{domainMin:i.min}:{},...void 0!==i.mid?{domainMid:i.mid,domain:{unionWith:[i.mid]}}:{},...void 0!==i.max?{domainMax:i.max}:{}};if("y"===e&&a?.alignAxesAtZero)return{domain:{expr:"primary"===a.axisType?`span(${b.z.DomainWithZeroPrimary}) === 0 ? ${b.z.NewDomainSecondary} : ${b.z.NewDomainPrimary}`:`span(${b.z.DomainWithZeroSecondary}) === 0 ? ${b.z.NewDomainPrimary} : ${b.z.NewDomainSecondary}`},zero:!0};let o=y({channel:e,domainSignalMap:n,isFacetSubChart:r});if(o)return o;if("color"===e&&n){let t=n.get(e);if(t)return{domain:t.signalDef}}}({channel:e,scale:a,dualAxisMetadata:i,domainSignalMap:c,isFacetSubChart:f});case"categorical":return function({channel:e,scale:t,columnSchema:a,hiddenGroupOffsetValues:n,valueAlias:r,domainProfiler:i,isLegacyRedashViz:o,fieldName:l,domainSignalMap:u,zoomable:c}){let d=(0,s.U)({channel:e,domainSignalMap:u,zoomable:c});if(d)return d;let{sort:m}=t;if((0,E.Z2)(t))return function({channel:e,mappings:t,valueAlias:a,hiddenGroupOffsetValues:n,columnSchema:r}){let i=T({vlDomain:t.map(({value:e})=>e),valueAlias:a,columnSchema:r});if(0===i.length)return;if("xOffset"===e||"yOffset"===e)return{domain:i.filter(e=>!n.includes("string"==typeof e?e:String(e)))};return{domain:i}}({channel:e,mappings:t.mappings,valueAlias:r,hiddenGroupOffsetValues:n,columnSchema:a});if((0,E.fg)(t))return function({mappings:e,valueAlias:t,columnSchema:a}){let n=T({vlDomain:e.map(({value:e})=>e),valueAlias:t,columnSchema:a});if(0===n.length)return;return{domain:n}}({mappings:t.mappings,valueAlias:r,columnSchema:a});if((0,h.zT)(m)&&l)return function({channel:e,sort:t,excludeNull:a,valueAlias:n,domainProfiler:r,isLegacyRedashViz:i,fieldName:o,columnSchema:s}){let l=r.getProfiler({resultsetFieldName:o}),u=l?.getCategoricalDomain({sort:t,nullHandling:{convertNullToNullStringForStringColumn:!!(i&&"color"===e),excludeNull:a,orderNullStringLikeNullForNaturalOrder:!1,showNullLastForNaturalOrder:!1,applyJSDefaultForNonTemporalColumn:!1}})?.values??[];if(0===u.length)return;return{domain:T({vlDomain:u,valueAlias:n,columnSchema:s})}}({channel:e,fieldName:l,columnSchema:a,isLegacyRedashViz:o,sort:m,excludeNull:t._excludeNull??!1,valueAlias:r,domainProfiler:i})}({channel:e,scale:a,columnSchema:d,hiddenGroupOffsetValues:n,valueAlias:r,domainProfiler:o,isLegacyRedashViz:l,fieldName:u,domainSignalMap:c,zoomable:t});case"temporal":return y({channel:e,domainSignalMap:c,isFacetSubChart:f});default:(0,p.K)(g,m.Es.Visualizations)}}({channel:e,scale:t,hiddenGroupOffsetValues:d??[],valueAlias:f,dualAxisMetadata:R,domainProfiler:k,isLegacyRedashViz:w,fieldName:M,domainSignalMap:P,columnSchema:D,zoomable:g,isFacetSubChart:x}),$=function({colors:e,colorRamp:t,shapes:a,strokeDashes:n,channel:r,mark:i,visual:s}){if(t)return o()(t)?{scheme:t,clamp:!0}:{range:t,interpolate:"rgb",clamp:!0};if("size"===r){let e=i?.size??0;if("line"===s)return{rangeMax:(0,v.z)({sizeCoefficient:e,defaultWidthFraction:A.fo})};return{rangeMax:(0,A.YQ)({sizeCoefficient:e,defaultRadius:A.EP})}}if("shape"===r&&a&&a.length>0)return{range:a};if("strokeDash"===r&&n&&n.length>0)return{range:n};return e?{range:e}:{}}({colors:a,colorRamp:n,shapes:i,strokeDashes:l,channel:e,mark:N,visual:L}),V=function({continuousScalePadding:e,channel:t,scale:a,mark:n,dualAxisMetadata:r,zoomable:i,percent:o}){if(e){let s="x"===t?"x":"y"===t?r?`layer_${r.axisType}_y`:"y":void 0,l=i&&s?{domainRaw:{expr:(0,S.OD)(s)}}:{};if(!(0,E.xj)(a)||a.domain||n._dependentAxis!==t||r){if((0,E.GC)(a))return{...C(t,e),...l,nice:!1}}else{let a="x"===t?"width":"height";return{...C(t,e),...l,...!o?{nice:{expr:`(${a}/tickEvery) <= 2 ? true : ceil(${a}/tickEvery)`}}:{}}}}return{}}({continuousScalePadding:c,channel:e,scale:t,mark:N,dualAxisMetadata:R,zoomable:g,percent:O}),Y=!!(0,s.U)({channel:e,domainSignalMap:P,zoomable:g}),W=(0,E.xS)(t)&&(0,h.Ds)(t.sort)&&"color"!==e&&!Y||(0,E.wF)(t)&&t.reverse,B="_center-stack"===N.layout&&N._dependentAxis===e,G={...U,...F,...(0,I.qm)(e)&&(0,E.wF)(t)&&F?{clamp:!0}:{},...$,...W?{reverse:!0}:{},...V,...B?{zero:!1}:{},...u};return r()(G)?void 0:G}function C(e,t){if("x"===e)return{range:[t,{expr:`width-${t}`}]};return{range:[{expr:`height-${t}`},t]}}},123061:(e,t,a)=>{a.d(t,{$:()=>i});var n=a(141078),r=a(655841);let i=e=>(0,n.n_)(r.fq,e)},124174:(e,t,a)=>{a.d(t,{$3:()=>b,Li:()=>E,PC:()=>h,UQ:()=>y,Wv:()=>g,_5:()=>f,i4:()=>p,uM:()=>T,x4:()=>m});var n=a(290018),r=a(721142),i=a(742472),o=a(28637),s=a(195063),l=a(648990),u=a(604347),c=a(901419),d=a(918406);let m=new o.Z,p=new n.O,f=new r.q,g=new i.I,h=new s.z,E=new u.F,b=new c.f,T=new d.s,y=new l.u},125151:(e,t,a)=>{a.d(t,{l:()=>i});var n=a(586356),r=a(409666);let i=(0,a(315592).Xr)({type:"filter-date-picker",channelIndex:{fields:1},validateEditorSpec:e=>({validatedSpec:e}),version:r.B0,getEncodingMapMeta:()=>r.OM,allowDisaggregatedData:!1,allowSelection:!0,isRenderable:n.q,normalizeDecoupledSpec:(e,t)=>e})},125230:(e,t,a)=>{a.d(t,{AK:()=>z,D4:()=>ee,EV:()=>$,J$:()=>eh,LJ:()=>L,Lt:()=>Z,M8:()=>es,MR:()=>R,Ml:()=>el,Nx:()=>eu,PF:()=>ef,PW:()=>J,Q7:()=>ea,Qf:()=>G,Qu:()=>D,S2:()=>P,SN:()=>Q,Sp:()=>ec,UH:()=>_,U_:()=>X,V7:()=>et,VA:()=>H,VX:()=>K,Vq:()=>ed,Ys:()=>B,_J:()=>ep,aJ:()=>er,d6:()=>v,d7:()=>M,dO:()=>U,du:()=>ei,g_:()=>x,gp:()=>V,gv:()=>N,hy:()=>eo,iN:()=>w,jN:()=>F,kM:()=>O,nV:()=>W,nv:()=>Y,oz:()=>en,s9:()=>j,wY:()=>eg,x4:()=>eE,z1:()=>q});var n=a(385684),r=a.n(n),i=a(974657),o=a.n(i),s=a(692738),l=a(160603),u=a(441535),c=a(425373),d=a(412836),m=a(304926),p=a(45315),f=a(409989),g=a(156577),h=a(236560);function E(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function b(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){E(i,n,r,o,s,"next",e)}function s(e){E(i,n,r,o,s,"throw",e)}o(void 0)})}}let T="/ajax-api/2.0/online-stores",y="/ajax-api/2.0/online-views",I="/ajax-api/2.0/database",A="/ajax-api/2.1/unity-catalog",v=1e3,S=e=>["postgresDatabaseInstances",e],_=e=>["postgresDatabaseInstanceEndpoints",e],C=e=>["postgresDatabaseInstance",e];function R({metricNames:e,databaseInstanceName:t,endUnixTimestampMs:a,windowSizeMs:n,enabled:r}){let i=Math.floor(a),o=Math.floor(n/1e3),s=(0,c.E)({queries:e.map(e=>({queryKey:["database-instance-metrics",e,t,i,o],queryFn:()=>b(function*(){return((yield f.pY.get(`${I}/instances/${t}/metrics/${e}/points?window_size_seconds=${o}&end_unix_timestamp=${i}`)).data.points||[]).map(t=>({timestamp:1e3*t.unix_timestamp,[e]:t.value??0}))})(),enabled:r,refetchOnWindowFocus:!1,refetchOnMount:!1}))});return e.map((e,t)=>{let a=s[t];return{metricName:e,chartPoints:a.data||[],isLoading:a.isLoading||a.isFetching}})}let O=1e3,N=25,k=()=>(0,u.W)("databricks.fe.brickstore.enableReadonlyReplicas",!1);function w(e,t){return b(function*(){let a=(yield f.pY.get(`${I}/instances?page_size=${encodeURIComponent(e)}&exclude_hybrid_instances=${t?.excludeHybridInstances??!0}`,t)).data.database_instances||[],n=[];for(let e of a)k()&&e.effective_enable_readable_secondaries&&t?.representReadableReplicasAsInstances&&n.push({...e,uid:`${e.uid}-ro`,__typename:"DatabaseInstance"}),n.push({...e,__typename:"DatabaseInstance"});return n.sort((e,t)=>q(e.name,t.name))})()}function M({enabled:e,pageSize:t=v,excludeHybridInstances:a=!0,refetchInterval:n,cacheTime:r,staleTime:i,onError:o}){return(0,d.IT)(S(a),()=>w(t,{representReadableReplicasAsInstances:!1,excludeHybridInstances:a}),{refetchInterval:n,refetchOnWindowFocus:!1,refetchOnMount:!1,cacheTime:r,staleTime:i,enabled:e,onError:o})}function P({enabled:e,pageSize:t=v,excludeHybridInstances:a=!0,refetchInterval:n,cacheTime:r,staleTime:i,onError:o}){return(0,d.IT)(_(a),()=>w(t,{representReadableReplicasAsInstances:!0,excludeHybridInstances:a}),{refetchInterval:n,refetchOnWindowFocus:!1,refetchOnMount:!1,cacheTime:r,staleTime:i,enabled:e,onError:o})}function D({databaseInstanceName:e,pageSize:t}){return(0,d.IT)(["brickstore-database-names",e],()=>f.pY.get(`${I}/instances/${encodeURIComponent(e)}/databases?page_size=${t}`).then(e=>(e.data.databases||[]).filter(e=>e.is_usable_by_customer).map(e=>e.name)),{refetchOnWindowFocus:!1,refetchOnMount:!1})}function L(e,t){return b(function*(){let a=e.endsWith("-ro");k()&&a&&(e=e.slice(0,-3));let n=yield f.pY.get(`${I}/instances:findByUid?uid=${encodeURIComponent(e)}`,t);if(k()&&a){if(!1===n.data.effective_enable_readable_secondaries){let e=Error("Readable secondaries are not enabled for this database instance");throw e.response={status:404,data:{error_code:"NOT_FOUND",message:"Readable secondaries are not enabled for this database instance"}},e}return{...n.data,uid:`${n.data.uid}-ro`,__typename:"DatabaseInstance"}}return{...n.data,__typename:"DatabaseInstance"}})()}function x({instanceId:e,enabled:t,onError:a,refetchInterval:n,cacheTime:r,staleTime:i}){return(0,d.IT)(C(e),()=>L(e),{enabled:t,onError:a,refetchInterval:n,refetchOnWindowFocus:!1,refetchOnMount:!1,cacheTime:r,staleTime:i})}function U(e,t,a){return b(function*(){return e.fetchQuery(C(t),()=>L(t,a?.timeout?{timeout:a.timeout}:void 0),{cacheTime:a?.cacheTime??0,staleTime:a?.staleTime??0})})()}function F(e,t){return b(function*(e,t=v,a){return e.fetchQuery(_(a?.excludeHybridInstances),()=>w(t,{representReadableReplicasAsInstances:!0,...a}),{cacheTime:a?.cacheTime??0,staleTime:a?.staleTime??0})}).apply(this,arguments)}function $({enabled:e,databaseInstanceName:t}){return(0,d.IT)(["brickstore-database-details",t],()=>f.pY.get(`${I}/instances/${encodeURIComponent(t)}`).then(e=>e?.data),{refetchInterval:1e4,refetchOnWindowFocus:!1,refetchOnMount:!1,enabled:e})}function V({databaseInstanceName:e,enabled:t,pageSize:a}){return(0,d.IT)(["brickstore-databases",e],()=>f.pY.get(`${I}/instances/${encodeURIComponent(e)}/databases?page_size=${a}`).then(e=>(e.data.databases||[]).filter(e=>e.is_usable_by_customer).sort((e,t)=>q(e.name,t.name))),{refetchInterval:1e4,refetchOnWindowFocus:!1,refetchOnMount:!1,enabled:t})}function Y({enabled:e,endpointId:t,instanceName:a}){return(0,d.IT)(["brickstore-database-catalogs",a],()=>f.pY.get(`${A}/workspace-bindings/catalogs?include_browse=true`).then(e=>e?.data?.catalogs.filter(e=>"CATALOG_MANAGED_POSTGRESQL"===e.securable_kind&&e.properties?.endpoint_id===t).map(e=>({name:e.name,uid:e.id,database_name:e?.options?.database||"",database_instance_name:a,owner:e.owner}))),{refetchInterval:!1,refetchOnWindowFocus:!1,refetchOnMount:!1,enabled:e})}function W({enabled:e}){return(0,d.IT)(["brickstore-online-stores"],()=>f.pY.get(`${T}`).then(e=>e?.data?.online_stores),{refetchInterval:!1,refetchOnWindowFocus:!1,refetchOnMount:!1,enabled:e})}function B({stores:e,enabled:t}){return(0,l.useQueries)(e.map(e=>({queryKey:["store-details",e.name],queryFn:()=>{var t;return t=e.name,f.pY.get(`${T}/${t}`).then(e=>e?.data?.status)},enabled:t})))}function G(e){return b(function*(){let t=`${A}/permissions/catalog/${encodeURIComponent(e)}`;yield f.pY.patch(t,{principal:"account users",remove:[],add:["BROWSE"]})})()}let J=()=>{let e=(0,m.jE)();return(0,d.n_)({mutationKey:["brickstore-create"],mutationFn:e=>f.pY.post(`${T}`,e),onSuccess:(t,a)=>{e.setQueryData(["brickstore-online-stores"],(e=[])=>[...e,a])}})},z=()=>{let e=(0,m.jE)();return(0,d.n_)({mutationKey:["brickstore-delete"],mutationFn:e=>f.pY.delete(`${T}/${e}`),onSuccess:(t,a)=>{e.setQueryData(["brickstore-online-stores"],(e=[])=>{let t=[...e];return r()(t,e=>e.name===a),t})}})};function q(e,t){return e.localeCompare(t,void 0,{sensitivity:"base"})}let H=()=>{let e=(0,m.jE)();return(0,d.n_)({mutationKey:["database-instance-create"],mutationFn:e=>f.pY.post(`${I}/instances`,e).then(e=>e?.data),onSuccess:(t,a)=>{e.setQueryData(S(),(e=[])=>{let a=e.filter(e=>-1===q(e.name,t.name)),n=e.filter(e=>q(e.name,t.name)>-1);return[...a,t,...n]})}})},j=()=>{let e=(0,m.jE)();return(0,d.n_)({mutationKey:["database-instance-update"],mutationFn:e=>{let t=e.updateMask??"*",a=`${I}/instances/${encodeURIComponent(e.databaseInstanceName)}?update_mask=${t}`;return f.pY.patch(a,e.update).then(e=>e?.data)},onSuccess:(t,a)=>{e.setQueryData(S(),(e=[])=>e.map(e=>e.name===t.name?t:e)),e.setQueryData(["brickstore-database-details",t.name],e=>t)}})},K=()=>{let e=(0,m.jE)();return(0,d.n_)({mutationKey:["database-catalog-create"],mutationFn:e=>{let t={create_database_if_not_exists:e?.createIfNotExists,...e.catalog};return f.pY.post(`${I}/catalogs`,t).then(e=>e?.data)},onSuccess:(t,a)=>{var n;(n=t.name,b(function*(){return f.pY.get(`${A}/catalogs/${encodeURIComponent(n)}`).then(e=>e?.data)})()).then(a=>{e.setQueryData(["brickstore-database-catalogs",t.database_instance_name],(e=[])=>[...e,{...t,owner:a?.owner,uid:a?.id}])})}})},Q=()=>{let e=(0,m.jE)();return(0,d.n_)({mutationKey:["brickstore-instance-delete"],mutationFn:e=>f.pY.delete(`${I}/instances/${encodeURIComponent(e.name)}?purge=true`).then(e=>e?.data),onSuccess:(t,a)=>{e.setQueryData(S(),e=>{if(void 0===e)return;return e.map(e=>e.name===a.name?{...e,state:g.n.DELETING}:e)})}})},X=()=>{let e=(0,m.jE)();return(0,d.n_)({mutationKey:["database-catalog-delete"],mutationFn:e=>f.pY.delete(`${I}/catalogs/${encodeURIComponent(e.catalog.name)}`).then(e=>e?.data),onSuccess:(t,a)=>{e.setQueryData(["brickstore-database-catalogs",a.catalog.database_instance_name],(e=[])=>e.filter(e=>e.name!==a.catalog.name))}})};function Z({storeName:e,endTsMS:t,windowSizeMs:a,enabled:n}){let r=Math.floor(t/1e3),i=Math.floor(a/1e3);return(0,d.IT)(["brickstore-metrics",e],()=>b(function*(){let t=(yield f.pY.get(`${T}/${e}/metrics?window_size_seconds=${i}&end_unix_timestamp=${r}`)).data.metrics||[],a=t.length>200?t.slice(t.length-200,t.length):t,n=o()(a,e=>e.timestamp_seconds),[s,l]=n,u=s?.timestamp_seconds,c=n.length>1?l.timestamp_seconds-u:60,d=r-i,m=[];return u>d+c&&(m.push({timestamp_seconds:d+c,qps:{overall:0,gateway:0},cpu_utilization_percent:0,latency_seconds50:{gateway:0},latency_seconds95:{gateway:0},latency_seconds99:{gateway:0},storage_utilization_percent:0,disk_io:0,success_rate_percent:{gateway:0}}),d+c<u-c&&m.push({timestamp_seconds:u-c,qps:{overall:0,gateway:0},cpu_utilization_percent:0,latency_seconds50:{gateway:0},latency_seconds95:{gateway:0},latency_seconds99:{gateway:0},storage_utilization_percent:0,disk_io:0,success_rate_percent:{gateway:0}})),[...m,...n].map(e=>({timestamp:1e3*e.timestamp_seconds,brickstore_qps_overall:e.qps?.overall??0,brickstore_qps_gateway:e.qps?.gateway??0,brickstore_cpu_utilization:e.cpu_utilization_percent??0,brickstore_storage_utilization:e.storage_utilization_percent??0,latency_p50_seconds_gateway:e.latency_seconds50?.gateway??0,latency_p95_seconds_gateway:e.latency_seconds95?.gateway??0,latency_p99_seconds_gateway:e.latency_seconds99?.gateway??0,brickstore_disk_io:e.disk_io??0,brickstore_sucess_percent:e.success_rate_percent?.gateway??0}))})(),{refetchInterval:!1,refetchOnWindowFocus:!1,refetchOnMount:!1,retry:!1,enabled:n})}let ee=({storeName:e,catalog:t,schema:a,table:n,primaryKeys:r,timeseriesKey:i,updatePolicy:o})=>b(function*(){return yield f.pY.post(`${T}/${e}/views`,{spec:{src_table:`${t}.${a}.${n}`,primary_key:r,timeseries_key:i,...{snapshot:{perform_full_copy:!0,run_triggered:{}},"incremental-continuous":{perform_full_copy:!1,run_continuously:{}},"incremental-triggered":{perform_full_copy:!1,run_triggered:{}}}[o]}})})(),et=({sourceCatalog:e,sourceSchema:t,sourceTable:a,targetCatalog:n,targetSchema:r,targetTable:i,primaryKeys:o,updatePolicy:s,timeseriesKey:l})=>b(function*(){return f.pY.post(`${y}`,{table:{spec:{source_table_full_name:`${e}.${t}.${a}`,destination_table_full_name:`${n}.${r}.${i}`,primary_key_columns:o,timeseries_key:l,...{snapshot:{perform_full_copy:!0,run_triggered:{}},"incremental-continuous":{perform_full_copy:!1,run_continuously:{}},"incremental-triggered":{perform_full_copy:!1,run_triggered:{}}}[s]}}})})(),ea=({viewFullName:e})=>b(function*(){return yield f.pY.delete(`${T}/views/${e}`)})(),en=({viewFullName:e})=>b(function*(){return yield f.pY.delete(`${y}/${e}`)})(),er=e=>b(function*(){let t={grant_type:"urn:databricks:params:grant-type:session",scope:"all-apis",client_id:"databricks-session",authorization_details:JSON.stringify([{type:"unity_catalog_permission",securable_type:"table",securable_object_name:`${e}`,operation:"ReadOnlineView"}])};return(yield(0,p.nD)(t)).token_value})(),ei=()=>b(function*(){return(yield(0,p.nD)({grant_type:"urn:databricks:params:grant-type:session",scope:"!pgsql",client_id:"databricks-session"})).token_value})(),eo=e=>b(function*(){let t={instance_names:[e],request_id:crypto.randomUUID()},a=yield f.pY.post(`${I}/credentials`,t,{headers:{"Content-Type":"application/json"},responseType:"json"});return a?.data.token})();function es(e){let t=`${I}/tables/${encodeURIComponent(e)}`;return(0,d.IT)(["get-database-table-metadata",e],()=>f.pY.get(t).then(e=>e?.data),{refetchOnWindowFocus:!1,refetchOnMount:!1})}let el=100;function eu({enabled:e,pageSize:t,filter:a}){return(0,d.IT)(["databaseProjects",t,a],()=>b(function*(){return((yield f.pY.get(`${I}/internal/projects`,{params:{limit:t,search:a||void 0}})).data.projects||[]).map(e=>({...e,__typename:"DatabaseProject"}))})(),{refetchInterval:6e4,refetchOnWindowFocus:!1,refetchOnMount:!1,enabled:e})}function ec(e,t=!0,a=6e4){return(0,d.IT)(["brickstore-database-project",e],()=>f.pY.get(`${I}/internal/projects/${e}`).then(e=>({...e.data.project,__typename:"DatabaseProject"})),{refetchInterval:a,refetchOnWindowFocus:!1,refetchOnMount:!1,enabled:t})}function ed({databaseProjectId:e,enabled:t}){return(0,d.IT)(["brickstore-database-branches",e],()=>f.pY.get(`${I}/internal/projects/${e}/branches`).then(e=>e.data.branches.map(e=>({...e,__typename:"DatabaseBranch"}))),{refetchInterval:6e4,refetchOnWindowFocus:!1,refetchOnMount:!1,enabled:t})}let em=(e,t)=>["brickstore-database-branch",e,t];function ep(e,t){return b(function*(){return{...(yield f.pY.get(`${I}/internal/projects/${e}/branches/${t}`)).data.branch,__typename:"DatabaseBranch"}})()}function ef(e,t,a=!0,n=6e4){return(0,d.IT)(em(e??"",t??""),()=>ep(e??"",t??""),{refetchInterval:n,refetchOnWindowFocus:!1,refetchOnMount:!1,enabled:a})}function eg(e,t,a){return b(function*(){return e.fetchQuery(em(t,a),()=>ep(t,a))})()}function eh({databaseProjectId:e,databaseBranchId:t,enabled:a}){return(0,d.IT)(["brickstore-postgres-databases",e,t],()=>f.pY.get(`${I}/internal/projects/${e}/branches/${t}/databases`).then(e=>e.data.databases.map(e=>({...e,__typename:"PostgresDatabase"}))),{refetchInterval:6e4,refetchOnWindowFocus:!1,refetchOnMount:!1,enabled:a})}function eE(e,t=!0,a){let[n,r]=(0,h.G4)(e),{data:i,isLoading:o,error:l,refetch:u}=ec(n,t,a),{data:c,isLoading:m,error:p,refetch:g}=ef(n,r,t,a),{data:E,isLoading:b,error:T,refetch:y}=function(e,t,a=!0,n=6e4){return(0,d.IT)(["brickstore-database-branch-endpoints",e,t],()=>f.pY.get(`${I}/internal/projects/${e}/branches/${t}/endpoints`).then(e=>e.data.endpoints.map(e=>({...e,__typename:"DatabaseBranchEndpoint"}))),{refetchInterval:n,refetchOnWindowFocus:!1,refetchOnMount:!1,enabled:a})}(n,r,t,a);return{data:{__typename:"LakebaseInstance",id:e??"",databaseProject:i,databaseBranch:c,primaryEndpoint:(0,s.useMemo)(()=>E?.find(e=>"read_write"===e.type),[E])},loading:o||m||b,error:l??p??T,refetch:(0,s.useCallback)(()=>{u(),g(),y()},[u,g,y])}}},126987:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.004 9.602a2.751 2.751 0 1 0 3.371 3.47 2.751 2.751 0 0 0 5.25 0 2.751 2.751 0 1 0 3.371-3.47A2.75 2.75 0 0 0 11.25 7h-2.5v-.604a2.751 2.751 0 1 0-1.5 0V7h-2.5a2.75 2.75 0 0 0-2.746 2.602M2.75 11a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m4.5-2.5h-2.5a1.25 1.25 0 0 0-1.242 1.106 2.76 2.76 0 0 1 1.867 1.822A2.76 2.76 0 0 1 7.25 9.604zm1.5 0v1.104c.892.252 1.6.942 1.875 1.824a2.76 2.76 0 0 1 1.867-1.822A1.25 1.25 0 0 0 11.25 8.5zM12 12.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m-5.25 0a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0M8 5a1.25 1.25 0 1 1 0-2.5A1.25 1.25 0 0 1 8 5",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="TreeIcon";let l=s},128071:(e,t,a)=>{a.d(t,{J:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.visualizations.enableParameterizedWidgetTitleDescription",!1)}},130647:(e,t,a)=>{a.d(t,{W:()=>r});var n=a(441535);function r(){return(0,n.W)("genie_bi_migration",!1)}},133288:(e,t,a)=>{a.d(t,{a5:()=>g});var n=a(141078),r=a(655841),i=a(209908),o=a(483588),s=a(26446),l=a(441535);let u=(0,n.J1)`
  fragment IdentityIdapi2UserFragment on IdentityIdapi2User {
    userName
    principal {
      ...IdentityIdapi2PrincipalFragment
    }
  }
  ${r.U8}
`,c=(0,n.J1)`
  fragment IdentityIdapi2GroupFragment on IdentityIdapi2Group {
    groupName
    principal {
      ...IdentityIdapi2PrincipalFragment
    }
  }
  ${r.U8}
`,d=(0,n.J1)`
  fragment IdentityIdapi2ServicePrincipalFragment on IdentityIdapi2ServicePrincipal {
    applicationId
    principal {
      ...IdentityIdapi2PrincipalFragment
    }
  }
  ${r.U8}
`,m=(0,n.J1)`
  query listPrincipals(
    $accountId: String
    $filter: String
    $includeAccountIdentities: Boolean
    $includeGroups: Boolean
    $includeServicePrincipals: Boolean
    $includeUsers: Boolean
    $includeWorkspaceIdentities: Boolean
    $includeWorkspaceUsers: Boolean
    $includeWorkspaceGroups: Boolean
    $includeWorkspaceServicePrincipals: Boolean
    $includeAccountUsers: Boolean
    $includeAccountGroups: Boolean
    $includeAccountServicePrincipals: Boolean
    $pageSize: Int
    $pageToken: String
  ) @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiListPrincipals(
      input: {
        accountId: $accountId
        filter: $filter
        includeAccountIdentities: $includeAccountIdentities
        includeGroups: $includeGroups
        includeServicePrincipals: $includeServicePrincipals
        includeUsers: $includeUsers
        includeWorkspaceIdentities: $includeWorkspaceIdentities
        includeWorkspaceUsers: $includeWorkspaceUsers
        includeWorkspaceGroups: $includeWorkspaceGroups
        includeWorkspaceServicePrincipals: $includeWorkspaceServicePrincipals
        includeAccountUsers: $includeAccountUsers
        includeAccountGroups: $includeAccountGroups
        includeAccountServicePrincipals: $includeAccountServicePrincipals
        pageSize: $pageSize
        pageToken: $pageToken
      }
    ) {
      apiError {
        message
      }
      nextPageToken
      principals {
        user {
          ...IdentityIdapi2UserFragment
        }
        group {
          ...IdentityIdapi2GroupFragment
        }
        servicePrincipal {
          ...IdentityIdapi2ServicePrincipalFragment
        }
      }
    }
  }
  ${u}
  ${c}
  ${d}
`,p=(e,t=!1)=>{if(!e)return;if(!e.legacyUserId)return"idp";if(t&&!e.accountId)return"workspace";return"account"},f=e=>{if("idp"!==p(e))return;return e?.sourceIdp??o.GbL.SOURCE_IDP_ATTRIBUTE_AAD},g=(e,t={},a=!1)=>{let r=(0,l.W)("databricks.fe.identity.hideInactivePrincipalsInNonAdminView",!1),{principals:u,...c}=((e,t={})=>{let{data:a,error:r,...i}=(0,n.IT)(m,{variables:e,nextFetchPolicy:"no-cache",...t}),{principals:o,apiError:s}=a?.aclmanagerIdentityapiListPrincipals??{};return{principals:o,error:r??(s?Error(s.message??""):void 0),...i}})(e,t),d=u?.map(({group:e,user:t,servicePrincipal:a})=>t?(({userName:e,principal:t},a=!1)=>({id:t?.legacyUserId||t?.externalId,isAccount:"account"===p(t),source:p(t),isAccountAdmin:void 0,isIndirect:void 0,isWorkspaceAdmin:void 0,kind:"user",optionId:`user.${e}`,name:e,displayName:e,fullName:t?.displayName,status:a?t?.status===o.apL.PRINCIPAL_STATUS_INACTIVE?o.J0P.INACTIVE:o.J0P.ACTIVE:void 0,title:t?.displayName&&e!==t?.displayName?`${t?.displayName} (${e||""})`:e||"",sourceIdp:f(t)}))(t,r):e?(({groupName:e,principal:t},a=!1)=>({id:t?.legacyUserId||t?.externalId,isAccount:"account"===p(t,!0),source:p(t,!0),kind:"group",optionId:`group.${e}`,displayName:(0,s.Pf)(e),name:e||"",title:`${(0,s.Pf)(e)||""}`,isWorkspaceLocalGroup:"workspace"===p(t,!0),sourceIdp:f(t),status:a?t?.status===o.apL.PRINCIPAL_STATUS_INACTIVE?o.J0P.INACTIVE:o.J0P.ACTIVE:void 0}))(e,r):a?(({applicationId:e,principal:t},a=!1)=>({id:t?.legacyUserId||t?.externalId,isAccount:"account"===p(t),source:p(t),isAccountAdmin:void 0,kind:"serviceprincipal",optionId:`serviceprincipal.${e}`,name:t?.displayName||"",displayName:`${t?.displayName||""} (${e||""})`,applicationId:e,status:a?t?.status===o.apL.PRINCIPAL_STATUS_INACTIVE?o.J0P.INACTIVE:o.J0P.ACTIVE:void 0,title:`${t?.displayName||""} (${e||""})`,sourceIdp:f(t)}))(a,r):null).filter(h).filter(e=>!a||e.status!==o.J0P.INACTIVE)??[];return{principals:d,mappedPrincipals:(0,i.ne)(d),...c}},h=e=>null!==e},136079:(e,t,a)=>{a.d(t,{$A:()=>$,B9:()=>A,BA:()=>L,Bx:()=>G,CI:()=>D,CK:()=>es,DN:()=>J,Fv:()=>ee,G9:()=>E,GF:()=>eo,JW:()=>I,Je:()=>et,Jr:()=>H,LN:()=>ei,Sp:()=>K,Tv:()=>T,UJ:()=>C,Uh:()=>w,V4:()=>q,VK:()=>k,Vh:()=>Y,WT:()=>Z,XL:()=>U,Xi:()=>ea,Xq:()=>R,bE:()=>en,c8:()=>Q,eL:()=>v,fy:()=>V,h$:()=>j,iI:()=>y,jC:()=>F,kQ:()=>O,ks:()=>x,ku:()=>W,nW:()=>b,oK:()=>N,pH:()=>er,t_:()=>_,tn:()=>B,uE:()=>M,v0:()=>X,vh:()=>P,wR:()=>z,xk:()=>S});var n=a(817148),r=a(115957),i=a(707076);if(13057==a.j)var o=a(873092);var s=a(611824),l=a(620275);if(13057==a.j)var u=a(216092);if(13057==a.j)var c=a(523550);var d=a(686560),m=a(441535),p=a(706274),f=a(337706);if(13057==a.j)var g=a(313957);if(13057==a.j)var h=a(19475);let E=()=>((0,m.W)("databricks.fe.search.enableConsumerDaisDemo",!1)||(0,m.W)("databricks_one",!1))&&(0,r.zl)(n.g3.DATABRICKS_ONE)&&(0,i.Kt)()&&((0,i.DB)()||(0,i.hs)()||b()),b=()=>(0,m.W)("custom_apps_preview",!1)&&!(0,m.W)("com.databricks.apps.adminDisabledWorkspaces",!1)&&(0,m.W)("com.databricks.fe.apps.enableLakehouseAppsUI",!1),T=()=>(0,i.DB)()||(0,i.hs)()||y,y=()=>(0,m.W)("databricks.fe.discover.useRecommendationServiceDBOne",!1)&&b(),I=()=>(0,m.W)("databricks.fe.dbone.enableFavoriteInDBOne",!1),A=()=>(0,m.W)("one_chat",!1),v=()=>(0,u._)((0,m.W)("databricks.datarooms.onechat.enableScheduledTasksLabs","off"))&&(0,i._c)(),S=()=>(0,m.W)("databricks.fe.dbone.chat.enableSkillMentions",!1)||(0,c.Q)((0,m.W)("databricks.datarooms.onechat.enableUserSkillsLabs","off")),_=()=>(0,m.W)("databricks.fe.dbone.chat.enableConnectionPickerRedesign",!1),C=()=>S()||_(),R=()=>(0,m.W)("databricks.fe.dbone.enableWorkspaceSearchSelector",!1),O=()=>(0,m.W)("databricks.fe.dbone.enableCertifiedInDBOne",!1)&&(0,o.w)()&&(0,m.W)("enable_lakeview_tags",!1),N=()=>(0,m.W)("databricks.fe.dbone.enableCertifiedFilterForYouInDBOne",!1),k=()=>b()&&(0,m.W)("databricks.userActivity.conf.enableAppsFavoriteInUserActivity",!1)&&(0,m.W)("databricks.fe.dbone.enableAppFavoritesInDBOne",!1),w=()=>J()&&(0,m.W)("databricks.fe.dbone.enableAppFavoritesInAccountGenie",!1),M=()=>(0,m.W)("databricks.fe.dbone.enableForYouFavoritesInDBOne",!1),P=()=>(0,m.W)("databricks.fe.dbone.enableForYouRecentsInDBOne",!1),D=e=>(0,m.W)("databricks.fe.dbone.enableAppStatusIndicator",!1)&&("account"===e?J():b()),L=()=>(0,m.W)("databricks.fe.dbone.enableForYouFavoritesInAccountDBOne",!1),x=()=>(0,m.W)("databricks.fe.dbone.enableForYouRecentsInAccountDBOne",!1),U=()=>(0,m.W)("com.databricks.apps.enableAppThumbnails",!1)&&(0,m.W)("databricks.fe.dbone.enableAppThumbnailsInDBOne",!1),F=()=>(0,m.W)("databricks.fe.dbone.enableCertifiedInAccountDBOne",!1)&&(0,s._)(),$=()=>(0,m.W)("databricks.fe.dbone.enableCertifiedFilterForYouInAccountDBOne",!1),V=()=>(0,m.W)("databricks.fe.dbone.enableGTMPinnedAssets",!1),Y=()=>(0,m.W)("databricks.fe.dbone.enableMobileDashboards",!1)||(0,m.W)("one_mobile",!1),W=()=>(0,m.W)("databricks.fe.dbone.enableFavoriteInAccountDBOne",!1),B=()=>(0,g.c)()&&(0,m.W)("databricks.fe.dbone.enableSpogFavoritinginAccountDBOne",!1),G=()=>(0,m.W)("domains",!1)&&(0,m.W)("databricks.fe.dbone.enableDomainsInAccountDBOne",!1),J=()=>!(0,m.W)("com.databricks.apps.appsBlocklist",!1)&&(0,m.W)("databricks.fe.dbone.enableAppSearchInAccountDBOne",!1),z=()=>b()&&(0,m.W)("databricks.fe.dbone.enableAppSearchInDBOne",!1),q=()=>(0,m.W)("databricks.fe.dbone.enableAccountLevelOneChat",!1),H=()=>(0,m.W)("databricks.fe.dbone.enableDefaultGridView",!1)&&(0,m.W)("databricks.fe.thumbnails.enableGenieThumbnailsInFrontend",!1);function j(){return(0,u._)((0,m.W)("databricks.fe.dbone.labs.enableInsightSubscription","off"))}let K=()=>(0,m.W)("databricks.fe.dbone.enableNewHomepage",!1),Q=()=>(0,m.W)("databricks.fe.dbone.enableNewHomepageInAccountDbOne",!1),X=()=>(0,m.W)("databricks.fe.dbone.enableDbOneCustomization",!1),Z=()=>(0,m.W)("databricks.fe.dbone.accountsSettingsCustomization",!1),ee=()=>(0,m.W)("databricks.fe.dbone.dboneRenameToGenie",!1),et=()=>(0,m.W)("dbone_account",!1)&&(0,d.d)("dboneAccountEvergreen",!0)&&(0,r.zl)(n.g3.DATABRICKS_ONE),ea=()=>(0,m.W)("databricks.fe.dbone.enableDbOneAccountAppsForYou",!1);function en(e,t){let a=e.isDarkMode?e.colors.backgroundSecondary:h.mh,n=e.isDarkMode?e.colors.backgroundPrimary:e.colors.backgroundSecondary;return("workspace"===t?K():Q())?n:a}function er(){let e=(0,p.K)("/one/*"),t=(0,p.K)("/one",{end:!1});return e||t}function ei(){let e=er(),[t]=(0,f.ok)(e=>e.get("o"));return{isDbOnePathActive:e,isWorkspaceLevel:e&&!!t}}let eo=()=>{let e=er(),[t]=(0,f.ok)(e=>e.get("isDbOne")),a=E(),n=(0,l.s4)();if(!a)return!1;if(n||e||"true"===t)return!0;return!1},es=()=>(0,p.K)("/dashboardsv3/*")&&Y()},138455:(e,t,a)=>{a.d(t,{M:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enableMaterializedViewFromDataset",!1)}},140718:(e,t,a)=>{a.d(t,{XA:()=>T,lQ:()=>A,wS:()=>I});var n=a(610435),r=a(692738),i=a(46e3),o=a(806773),s=a(370427),l=a(907046),u=a(99442),c=a(224098),d=a(545251),m=a(53333),p=a(661748);let f=(0,r.createContext)(void 0),g=[c.s7.OnValueChange,c.s7.OnView],h=[c.s7.OnValueChange],E=(e,t)=>{for(let a of r.Children.toArray(e))if(r.isValidElement(a)){if(a.type===I&&a.props.value===t)return a;if(a.props.children){let e=E(a.props.children,t);if(e)return e}}},b=(e,t)=>{let a=E(e,t);if(r.isValidElement(a))return a.props.children;return""},T=(0,r.forwardRef)(({defaultValue:e,name:t,placeholder:a,children:s,contentProps:l,onChange:d,onOpenChange:E,id:T,label:I,value:A,validationState:v,forceCloseOnEscape:S,componentId:_,analyticsEvents:C,valueHasNoPii:R,...O},N)=>{let k=(0,p.W)("databricks.fe.observability.defaultComponentView.simpleSelect",!1),[w]=(0,r.useState)(()=>{if(A)return b(s,A);return""}),M=(0,r.useRef)(null);(0,r.useImperativeHandle)(N,()=>M.current,[]);let P=(0,r.useRef)(A),[D,L]=(0,r.useState)(A),[x,U]=(0,r.useState)(w),F=void 0!==A,$=(0,r.useMemo)(()=>C??(k?g:h),[C,k]),V=(0,c.ei)({componentType:c.v_.SimpleSelect,componentId:_,analyticsEvents:$,valueHasNoPii:R}),{elementRef:Y}=(0,m.z)({onView:V.onView,value:A??e});(0,r.useEffect)(()=>{void 0!==A&&A!==P.current&&(L(A),P.current=A)},[A]),(0,r.useEffect)(()=>{if(F)return;let t=M.current,a=e||t?.value||"";L(a),P.current=a},[F,e,A]),(0,r.useEffect)(()=>{U(b(s,D||""))},[D,s]);let W=(0,r.useCallback)(e=>{V.onValueChange(e),M.current?.setAttribute("value",e||""),L(e),U(b(s,e)),d&&d({target:{name:t,type:"select",value:e},type:"change"})},[V,s,d,t]),B=(0,r.useMemo)(()=>({value:D,onChange:W}),[D,W]),G=(0,r.useCallback)(()=>{W("")},[W]);return(0,n.Y)(f.Provider,{value:B,children:(0,n.Y)(i.l,{componentId:void 0,value:D,placeholder:a,label:I??O["aria-label"],id:T,children:(0,n.FD)(y,{onOpenChange:E,children:[(0,n.Y)(u.b,{ref:Y,...O,validationState:v,onClear:G,id:T,value:D,...V.dataComponentProps,children:x||a}),(0,n.Y)("input",{type:"hidden",ref:M}),(0,n.Y)(o.g,{forceCloseOnEscape:S,...l,children:s})]})})})}),y=({children:e,onOpenChange:t})=>{let{isOpen:a}=(0,d.w)();return(0,r.useEffect)(()=>{t&&t(!!a)},[a,t]),(0,n.Y)(n.FK,{children:e})},I=(0,r.forwardRef)(({value:e,children:t,...a},i)=>{let o=(0,r.useContext)(f);if(!o)throw Error("SimpleSelectOption must be used within a SimpleSelect");let{onChange:l}=o,u=(0,r.useCallback)(({value:e})=>{l(e)},[l]);return(0,n.Y)(s.O,{...a,ref:i,value:e,onChange:u,children:t})}),A=({children:e,label:t,...a})=>{if(!(0,r.useContext)(f))throw Error("SimpleSelectOptionGroup must be used within a SimpleSelect");return(0,n.Y)(l.n,{...a,name:t,children:e})}},143906:(e,t,a)=>{function n(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function r(e){return function(){var t=this,a=arguments;return new Promise(function(r,i){var o=e.apply(t,a);function s(e){n(o,r,i,s,l,"next",e)}function l(e){n(o,r,i,s,l,"throw",e)}s(void 0)})}}function i(e,t,a){return r(function*(){let n=yield e.get(`/ajax-api/2.0/data-rooms/${t}/conversations/${a}`);return{...n.data,messages:n.data.messages??[]}})()}function o(e,t,a){return r(function*(){return(yield e.post(`/ajax-api/2.0/data-rooms/${t}/conversations`,a)).data})()}a.d(t,{QL:()=>i,cK:()=>o})},148026:(e,t,a)=>{a.d(t,{a:()=>c,z:()=>l});var n=a(629533),r=a(860279),i=a(831706);function o(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function s(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function s(e){o(i,n,r,s,l,"next",e)}function l(e){o(i,n,r,s,l,"throw",e)}s(void 0)})}}function l(e,t){return JSON.stringify({itemId:e,context:t})}let u=(e,t,a,n,o)=>s(function*(){let s=e.getConfig(),l=s.dataResolver,u=(0,r.M3)(e),c=u.current.treeAbortController?.signal,d=a===i.y.INITIAL;if(d&&e.getState().loadingItemData.includes(t)||!d&&e.getState().fetchingItemData.includes(t))return;try{c?.throwIfAborted(),e.applySubStateUpdate(d?"loadingItemData":"fetchingItemData",e=>e.includes(t)?e:[...e,t]);let a={context:o,tree:e},i=yield(0,r.Z8)(c,Promise.resolve(l.getItem(t,a,n)));i&&(l.addItemToCache(t,i,a),s.onLoadedItem?.(t,i))}catch(e){if(c?.aborted)return;console.error(e)}finally{e.applySubStateUpdate(d?"loadingItemData":"fetchingItemData",e=>e.filter(e=>e!==t))}})(),c={key:"async-data-resolver",getInitialState:e=>({loadingItemData:[],loadingItemChildren:[],fetchingItemData:[],fetchingItemChildren:[],...e}),getDefaultConfig:(e,t)=>({setLoadingItemData:(0,n.q8)("loadingItemData",t),setLoadingItemChildren:(0,n.q8)("loadingItemChildren",t),setFetchingItemData:(0,n.q8)("fetchingItemData",t),setFetchingItemChildren:(0,n.q8)("fetchingItemChildren",t),...e}),stateHandlerNames:{loadingItemData:"setLoadingItemData",loadingItemChildren:"setLoadingItemChildren",fetchingItemData:"setFetchingItemData",fetchingItemChildren:"setFetchingItemChildren"},treeInstance:{retrieveItemData:({tree:e},t)=>{let a=e.getConfig().dataResolver,n=e.getContext(),r=a.getItemFromCache(t,{context:n,tree:e});if(r)return r;return u(e,t,i.y.INITIAL,i.Z.CACHE_FIRST,n),null},retrieveChildrenIds:({tree:e},t)=>{let a=e.getConfig(),n=(0,r.M3)(e),o=a.dataResolver,s=e.getContext(),u=l(t,s),c=n.current.retrievedChildrenHashSet.has(u),d=o.getChildrenFromCache(t,{context:s,tree:e});if(c&&d)return d;if(n.current.failedChildrenHashSet.has(u))return[];return(0,r.Ut)(e,t,i.y.INITIAL,i.Z.CACHE_FIRST,s),[]},invalidateItem:({tree:e},t)=>s(function*(){let a=e.getConfig(),n=e.getContext(),o=(0,r.M3)(e),s=o.current.treeAbortController?.signal;try{"invalidateItem"in a.dataResolver&&(yield(0,r.Z8)(s,Promise.resolve(a.dataResolver.invalidateItem?.(t,{context:n,tree:e}))))}catch(e){if(s?.aborted)return;console.error(e)}if(s?.aborted)return;u(e,t,i.y.REFRESH,i.Z.NETWORK_ONLY,n)})(),invalidateChildren:({tree:e},t)=>s(function*(){let a=e.getConfig(),n=e.getContext(),o=(0,r.M3)(e),s=o.current.treeAbortController?.signal;try{"invalidateChildren"in a.dataResolver&&(yield(0,r.Z8)(s,Promise.resolve(a.dataResolver.invalidateChildren?.(t,{context:n,tree:e}))))}catch(e){if(s?.aborted)return;console.error(e)}if(s?.aborted)return;let l=a.dataResolver,u=e.getItemInstance(t),c=u?.isFolder?.()??!1,d=(l?.getChildrenFromCache?.(t,{context:n,tree:e})?.length??0)>0;(c||d)&&(0,r.Ut)(e,t,i.y.REFRESH,i.Z.NETWORK_ONLY,n)})(),invalidateAll:({tree:e})=>s(function*(){let t=e.getConfig(),a=e.getContext(),n=(0,r.M3)(e),o=n.current.treeAbortController?.signal;if("invalidateAll"in t.dataResolver&&"function"==typeof t.dataResolver.invalidateAll)try{yield(0,r.Z8)(o,Promise.resolve(t.dataResolver.invalidateAll({context:a,tree:e})))}catch{}if(o?.aborted)return;n.current.retrievedChildrenHashSet.clear(),n.current.failedChildrenHashSet.clear(),n.current.paginationParamsMap={},(0,r.Ut)(e,t.rootItemId,i.y.REFRESH,i.Z.NETWORK_ONLY,a)})()},itemInstance:{isLoading:({tree:e,item:t})=>{let a=t.getItemMeta();if(!a)return!1;let n=e.getState();return n.loadingItemData.includes(a.itemId)||n.loadingItemChildren.includes(a.itemId)},isFetching:({tree:e,item:t})=>{let a=t.getItemMeta();if(!a)return!1;let n=e.getState();return n.fetchingItemData.includes(a.itemId)||n.fetchingItemChildren.includes(a.itemId)},invalidateItem:({tree:e,itemId:t})=>s(function*(){e.invalidateItem(t)})(),invalidateChildren:({tree:e,itemId:t})=>s(function*(){e.invalidateChildren(t)})()}}},148560:(e,t,a)=>{a.d(t,{A_:()=>s,KF:()=>l,_z:()=>o});var n=a(304883);function r(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function i(e){return function(){var t=this,a=arguments;return new Promise(function(n,i){var o=e.apply(t,a);function s(e){r(o,n,i,s,l,"next",e)}function l(e){r(o,n,i,s,l,"throw",e)}s(void 0)})}}function o(e,t,a,r){return i(function*(){return(yield e.post(`/ajax-api/2.0/data-rooms/${t}/conversations/${a}/messages`,(0,n._Y)(r))).data})()}function s(e,t,a,n,r){return i(function*(){return(yield e.get(`/ajax-api/2.0/data-rooms/${t}/conversations/${a}/messages/${n}`,{params:{override_warehouse_id:r}})).data})()}function l(e,t,a){return i(function*(){let{dataRoomId:n,conversationId:r,messageId:i}=t,o={data_room_id:n,conversation_id:r,id:i,...a.updated_message};return(yield e.patch(`/ajax-api/2.0/data-rooms/${n}/conversations/${r}/messages/${i}`,{...a,updated_message:o})).data})()}},150566:(e,t,a)=>{a.d(t,{B8:()=>w,CE:()=>B,FD:()=>G,P8:()=>Y,Pv:()=>x,RC:()=>q,XU:()=>D,Yo:()=>M,e$:()=>$,iP:()=>U,r6:()=>P,uy:()=>W,yD:()=>z});var n,r=a(16778),i=a.n(r),o=a(236560),s=a(920174),l=a(457179),u=a(441535),c=a(22191),d=a(747129),m=a(8698),p=a(411424),f=a(411695),g=a(728610),h=a(797567),E=a(692547),b=a(240211),T=a(756548),y=a(993533),I=a(852160),A=a(536152),v=a(329099),S=a(267167),_=a(780667),C=a(814796),R=a(440608),O=a(599584);function N(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function k(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){N(i,n,r,o,s,"next",e)}function s(e){N(i,n,r,o,s,"throw",e)}o(void 0)})}}function w(e,t){return k(function*(){let{isRunning:a,isStartable:n,canRestart:r}=yield(0,h.zc)(e,t),i=!a&&n&&r;return i&&(yield(0,E.Jp)(e,t)),i})()}function M(e){return k(function*({sqlWarehouseId:e,apolloClient:t}){let{isStartable:a,canRestart:n}=yield(0,h.AX)(e,t),r=a&&n;return r&&(yield(0,E.qK)(e,t)),r}).apply(this,arguments)}function P(e,t,{shouldSoftAttach:a}){return new Promise((n,r)=>{e.attach(t,{onError:r,onSuccess:n,shouldSoftAttach:a})})}function D(){return(0,O.oh)()}function L(){return(0,m.ml)(p.p.AutoLaunchAndAttach)}function x(){return(0,m.ml)(p.p.AutoCreateSessionOnEditorInteraction)}var U=((n={}).CANNOT_RESTART="CANNOT_RESTART",n.NOT_FOUND="NOT_FOUND",n);function F(e,t,a){switch(e){case"notebook":return t===v.I1.SQL;case"file":return a===v.Eu.SQL;case"query":return!0;case"designer":return t!==v.I1.Python}}function $(e,t,a,n){return k(function*(){var r,i,m,p,E,v,N,w,M,P,D,x,U,$,Y,W,B,G,J,z,q,H,j;e.recordClientsideEvent("determineClusterScenarioSource",{source:n});let K=e.get("targetClusterId"),Q=e.get("preferInteractiveServerless"),X=e.get("clusterMetadata"),Z=X?.clusterId,ee=X?.creator,et=e.get("detachReason"),ea=e.get("type"),en=e.get("language"),er=e.get("name"),ei=(0,R.o)(ea),eo=(0,C.aJ)(er,ei),es=yield(0,f.i2)(),el=function(e,t){if(!e)return null;return{id:e,serverless:!!t}}(K,Q);if(el){let e=yield(r=el,i=et,m=t,p=a,E=es,k(function*(){if(E&&r.serverless)return V;try{let{name:e,isStartable:t,isRunning:a,canRun:n,canRestart:s,enableServerlessCompute:l,warehouseType:u}=(0,S.g0)(r.id)?yield(0,h.AX)(r.id,m):(0,o.Du)(r.id)?yield(0,h.jn)(r.id,p,i):yield(0,h.zc)(r.id,m);if(a||n)return{modal:"retry",retryClusterState:{isRunning:a,canRun:n,isStartable:t,canRestart:s}};if(t&&s)return{modal:L()||u===y.IB9.REYDEN?"auto":"confirm",clusterInfo:{clusterId:r.id,name:e,needsStart:!0,source:"attach"}};return{modal:"confirmSelect",attachedComputeResourceFailureScenario:"CANNOT_RESTART",attachedComputeResourceType:(0,I.zt)(r.id,l),sqlWarehouseMode:(0,S.g0)(r.id),databaseInstanceMode:(0,o.Du)(r.id)}}catch(e){if(!(e instanceof g.o))return A.Q.sev2BurnRate(c.Es.Notebooks,"AutoAttachV2: General error in attach",d.i1.P99,d.Ip.Min100,!1,e),null;if((0,T.kA)()&&E)return{...V,clusterInfo:{...V.clusterInfo,switchedFromUnknownCluster:!0}};return{modal:"confirmSelect",attachedComputeResourceFailureScenario:"NOT_FOUND",attachedComputeResourceType:(0,I.zt)(r.id,!1),sqlWarehouseMode:(0,S.g0)(r.id),databaseInstanceMode:(0,o.Du)(r.id)}}})());if(e)return e}let eu=function(e,t){if(!e)return null;return{id:e,serverless:"ReplLauncher"===t}}(Z,ee);if(eu){let e=yield(v=eu,N=et,w={editorMode:ei,language:en,fileEditorLanguage:eo},M=t,P=a,D=es,k(function*(){let{editorMode:e,language:t,fileEditorLanguage:a}=w;try{if(v.serverless&&D)return V;let{name:n,isRunning:r,isStartable:i,canRestart:s,enableServerlessCompute:l,warehouseType:c}=(0,S.g0)(v.id)?yield(0,h.AX)(v.id,M):(0,o.Du)(v.id)?yield(0,h.jn)(v.id,P,N):yield(0,h.zc)(v.id,M);if(l&&D)return V;if(!((0,S.g0)(v.id)&&!F(e,t,a)||(l||v.serverless)&&!D||(0,o.Du)(v.id)&&(!(0,u.W)("databricks.fe.editor.EnableBrickstorePostgres",!1)||"query"!==e))&&(r||i&&s)){let e=c===y.IB9.REYDEN;return{modal:r||!i||L()||e?"auto":"confirm",clusterInfo:{clusterId:v.id,name:n,needsAttach:!0,needsStart:!r,source:"last"}}}}catch(e){if(e instanceof g.o){if((0,T.kA)()&&D)return{...V,clusterInfo:{...V.clusterInfo,switchedFromUnknownCluster:!0}}}else A.Q.sev2BurnRate(c.Es.Notebooks,"AutoAttachV2: determineClusterScenarioForLastCluster",d.i1.P99,d.Ip.Min100,!1,e)}return null})());if(e)return e}let ec="query"===ei,ed=[];ec?(ed.push(I.if.SQL_WAREHOUSE),(0,u.W)("databricks.fe.editor.EnableBrickstorePostgres",!1)&&ed.push(I.if.DATABASE_INSTANCE)):(ed.push(I.if.GENERAL_CLUSTER,I.if.SERVERLESS_CLUSTER),(0,O.xE)()&&F(ei,en,eo)&&(0,u.W)("databricks.fe.eda.sqlwAutoAttachInNotebook",!0)&&ed.push(I.if.SQL_WAREHOUSE));let[em]=(0,b.Ao)(1,ed,(0,b.r2)(),(0,S.lG)(ei),(0,_.AI)(ei,en));if((0,s.E)()&&!eu&&ec){let e=yield(x=t,k(function*(){try{let e=yield(0,l.Xe)(x,void 0,e=>(0,h.AX)(e,x).then(Boolean),{dangerouslySkipLastSelectedWarehouse:!0});if(e){let{name:t,isRunning:a,isStartable:n,canRestart:r,warehouseType:i}=yield(0,h.AX)(e,x);if(a||n&&r){let r=i===y.IB9.REYDEN;return{modal:a||!n||L()||r?"auto":"confirm",clusterInfo:{clusterId:e,name:t,needsAttach:!0,needsStart:!a,source:"recent"}}}}}catch(e){e instanceof g.o||A.Q.sev2BurnRate(c.Es.Notebooks,"AutoAttachV2: determineClusterScenarioForUserDefaultWarehousePreference",d.i1.P99,d.Ip.Min100,!1,e)}return null})());if(e)return e}if(!eu&&em){let e=yield(U=em,$=et,Y=t,W=a,B=es,k(function*(){try{if(B&&U.serverless)return V;if(!U.serverless){let{name:e,isRunning:t,isStartable:a,canRestart:n,warehouseType:r}=(0,S.g0)(U.id)?yield(0,h.AX)(U.id,Y):(0,o.Du)(U.id)?yield(0,h.jn)(U.id,W,$):yield(0,h.zc)(U.id,Y);if(t||a&&n){let n=r===y.IB9.REYDEN;return{modal:t||!a||L()||n?"auto":"confirm",clusterInfo:{clusterId:U.id,name:e,needsAttach:!0,needsStart:!t,source:"recent"}}}}}catch(e){e instanceof g.o||A.Q.sev2BurnRate(c.Es.Notebooks,"AutoAttachV2: determineClusterScenarioForArbitraryRecentCluster error",d.i1.P99,d.Ip.Min100,!1,e)}return null})());if(e)return e}if(es&&!ec)return V;let ep=yield(G=eu?.id??null,J=ei,z=en,q=eo,H=t,j=a,k(function*(){try{if("query"===J||(0,_.AI)(J,z)){let e=yield(0,h.d4)(H,J),t=(0,u.W)("databricks.fe.editor.EnableBrickstorePostgres",!1)&&(yield(0,h.YU)(j));if(e||t)return{modal:"select",sqlWarehouseMode:!!e,databaseInstanceMode:!e&&!!t}}else{let e=yield(0,h.Cs)(H),t=G&&(0,S.g0)(G)&&F(J,z,q)&&(yield(0,h.d4)(H,J));if(e||t)return{modal:"select",sqlWarehouseMode:!!t}}}catch(e){A.Q.sev2BurnRate(c.Es.Notebooks,"AutoAttachV2: determineClusterScenarioForAnyCluster error",d.i1.P99,d.Ip.Min100,!1,e)}return null})());if(ep)return ep;return{modal:"create"}})()}let V={modal:"serverless",clusterInfo:{clusterId:"",name:"",needsAttach:!1,needsStart:!1,canRestart:!0,source:"serverless"}};class Y{subscribers=new Set;send(e){for(let t of this.subscribers)t(e)}subscribe(e){return this.subscribers.add(e),()=>{this.subscribers.delete(e)}}}function W(e,{modalScenario:t,didLaunch:a,source:n,action:r}){J(e,`${i()(t)}${a?"Launch":"Attach"}${i()(n)}${r||""}`)}function B(e,t){J(e,`Error${t?i()(t):"Unknown"}`)}function G(e){J(e,"NoComputePageSwitchToFullCreate")}function J(e,t){e&&e.recordClientsideEvent(`${t}AutoClusterAttachV2`)}function z(e){if(!e)return!1;return Date.now()-e<1e3}function q({notebookModel:e,lastRetryTime:t,trigger:a,clusterState:n}){let r=e?.get("detachReason"),i=e?.get("targetClusterId"),o=e?.get("clusterMetadata");return{trigger:a||"unknown",msSinceLastRetry:t?Date.now()-t:null,notebookIsAttached:e?.isAttached()??!1,hasTargetClusterId:!!i,hasClusterMetadata:!!o?.clusterId,detachReason:r?.summary,clusterState:n}}},152539:(e,t,a)=>{a.d(t,{e:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enableLazyVizRenderingForSnapshot",!1)}},154753:(e,t,a)=>{a.d(t,{m:()=>i});let n=({item:e,version:t})=>JSON.stringify(e),r=({item:e,version:t})=>JSON.parse(e);function i({version:e,prefix:t,serializer:a=n,deserializer:o=r,storage:s=window.localStorage}){let l=e=>`${t}${e}`,u=({storedItem:e})=>{let{item:t,version:a}=JSON.parse(e);return o({item:t,version:a})};return{[Symbol.iterator](){let e=this.entries(),t=0;return{[Symbol.iterator](){return this},next:()=>({value:e[t++],done:t>e.length})}},get size(){return this.entries().length},entries:()=>Object.entries(s).filter(([e])=>e.startsWith(t)).map(([e,a])=>[e.slice(t.length),u({storedItem:a})]),keys(){return this.entries().map(([e])=>e)},values(){return this.entries().map(([,e])=>e)},forEach(e,t){let a=this.entries(),n=e.bind(t);for(let[e,t]of a)n(t,e,this)},clear(){for(let e of this.keys())this.delete(e)},get(e){let t=s.getItem(l(e));if(!t)return;return u({storedItem:t})},delete(e){s.removeItem(l(e))},set(t,n){try{s.setItem(l(t),(({item:e,version:t})=>JSON.stringify({item:a({item:e,version:t}),version:t}))({item:n,version:e}))}catch(e){console.error(e)}},has:e=>l(e)in s}}},157817:(e,t,a)=>{a.d(t,{C7:()=>d,Df:()=>i.Df0,N4:()=>i.N4A,Ot:()=>h,R7:()=>f,SA:()=>E,UD:()=>m,Wx:()=>u,_K:()=>b,aR:()=>i.aRi,h2:()=>l,iH:()=>g,ll:()=>s,nG:()=>o,wz:()=>p,zh:()=>c});var n,r=a(551984),i=a(483588);let o=["user","system","assistant","toolInput","toolOutput","reasoning"],s=["cellEdit2","summary","compactionMarker","error"],l=[...o,...s];var u=((n={}).OFF="off",n.USER="user",n.GHOST_TEXT="ghost_text",n.INLINE_QUICK_FIX="inline_quick_fix",n.CELL_MAGIC="cell_magic",n.INLINE_ASSISTANT="inline_assistant",n.CHAT_WINDOW_INSERT="chat_window_insert",n.CHAT_WINDOW_PASTE="chat_window_paste",n.CHAT_WINDOW="chat_window",n.AUTOCOMPLETE="autocomplete",n.ASSISTANT_EDIT="assistant_edit",n.NEXT_EDIT_SUGGESTION="next_edit_suggestion",n.NEXT_EDIT_SUGGESTION_GHOST_TEXT="next_edit_suggestion_ghost_text",n.ASSISTANT_ADD="assistant_add",n.ASSISTANT_DELETE="assistant_delete",n.ASSISTANT_FILE_EDIT="assistant_file_edit",n.UNKNOWN="unknown",n.ASSISTANT_AGENT_EDIT="assistant_agent_edit",n.ASSISTANT_AGENT_ADD="assistant_agent_add",n.ASSISTANT_AGENT_DELETE="assistant_agent_delete",n.AUTOFORMAT="autoformat",n);let c={ghost_text:"#808000",next_edit_suggestion_ghost_text:"#808000",user:"#ff4500",inline_quick_fix:"#c71585",cell_magic:"#00ff00",inline_assistant:"#00ff00",chat_window:"#00ffff",autocomplete:"#0000ff",assistant_edit:"#1e90ff",assistant_agent_edit:"#1e90ff",assistant_add:"#9370db",assistant_agent_add:"#9370db",autoformat:"#ffa500",next_edit_suggestion:"#8b008b"},d=Object.values(u).filter(e=>e.includes("assistant")),m=["assistant_delete","assistant_agent_delete","assistant_add","assistant_agent_add"],p=["Chat","Agent","Planner"],f={CHAT:"Chat",AGENT:"Agent",PLANNER:"Planner"},g=(0,r.Ik)({source:(0,r.gl)().oneOf(Object.values(u)).required(),agent:(0,r.gl)().required(),model:(0,r.gl)().required(),promptId:(0,r.gl)().required(),isPending:(0,r.zM)().notRequired(),isPaste:(0,r.zM)().notRequired(),isExternalPaste:(0,r.zM)().notRequired()}),h=(0,r.Ik)({start:(0,r.ai)().required(),endExclusive:(0,r.ai)().required(),type:(0,r.Yj)().required()}),E=["notebook","dashboard","file","query","app","job"];function b(e){return`inline-assistant:${e.assetType}:${e.assetId}${"notebook"===e.assetType?`:${e.cellNuid}`:""}`}},158555:(e,t,a)=>{a.d(t,{W9:()=>c,h8:()=>s,k4:()=>u,ly:()=>l});var n,r,i,o=a(483588),s=((n={}).CATALOG="CATALOG",n.SCHEMA="SCHEMA",n.TABLE="TABLE",n.FUNCTION="FUNCTION",n.MODEL="MODEL",n.VOLUME="VOLUME",n.VOLUME_DIRECTORY="VOLUME_DIRECTORY",n.VOLUME_FILE="VOLUME_FILE",n.METRIC_VIEW="METRIC_VIEW",n),l=((r={}).SCHEMA="SCHEMA",r.VOLUME="VOLUME",r.VOLUME_DIRECTORY="VOLUME_DIRECTORY",r),u=((i={}).ChildAssets="ChildAssets",i.ParentAsset="ParentAsset",i);let c={all:[],metric_views:[o.T_5.TABLE_METRIC_VIEW]}},161926:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a5 5 0 0 0-5 5v1.99c0 .674-.2 1.332-.573 1.892l-1.301 1.952A.75.75 0 0 0 1.75 13h3.5v.25a2.75 2.75 0 1 0 5.5 0V13h3.5a.75.75 0 0 0 .624-1.166l-1.301-1.952A3.4 3.4 0 0 1 13 7.99V6a5 5 0 0 0-5-5m1.25 12h-2.5v.25a1.25 1.25 0 1 0 2.5 0zM4.5 6a3.5 3.5 0 1 1 7 0v1.99c0 .97.287 1.918.825 2.724l.524.786H3.15l.524-.786A4.9 4.9 0 0 0 4.5 7.99z",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="NotificationIcon";let l=s},162539:(e,t,a)=>{a.d(t,{o:()=>s});var n=a(483588),r=a(441535),i=a(29824);function o(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}let s=(e,t)=>{var a;return(a=function*(){let a=t.query.trim(),{data:o}=yield e.query({query:t.queryDocument,variables:{query:a,filters:{resultTypes:[n.iId.VOLUME],...t.excludeBrowseOnly&&{aclFilter:{allowUcBrowseOnly:!1}}},sortOrder:{criteria:n.noI.NAME,ascending:!0},enableCrossRanking:!!(0,r.W)("databricks.fe.assetSelectors.enableCrossRanking",!1),pageSize:t.pageSize,pageToken:t.pageToken},fetchPolicy:t.fetchPolicy}),s=o?.searchmidtierSearchUnifiedSearch,l=s?.apiError;return{results:(s?.results??[]).flatMap(e=>{let t=(e=>{if(!e)return null;let{name:t,description:a,ucEntityMetadata:n,browseOnly:r}=e,o=n?.catalogName,s=n?.schemaName;if(!t||!o||!s)return null;return{name:t,full_name:[o,s,t].join("."),catalog_name:o,schema_name:s,comment:a??void 0,securable_type:i.an.VOLUME,browse_only:r??!1}})(e);return t?[t]:[]}),nextPageToken:s?.nextPageToken??void 0,apiError:l?{message:l.message??"",code:l.code??""}:null}},function(){var e=this,t=arguments;return new Promise(function(n,r){var i=a.apply(e,t);function s(e){o(i,n,r,s,l,"next",e)}function l(e){o(i,n,r,s,l,"throw",e)}s(void 0)})})()}},169750:(e,t,a)=>{a.d(t,{E:()=>r});var n,r=((n={}).ENVIRONMENT="environment_context",n.DOCS_SEARCH="docs_search",n.NEIGHBOR_CODE="neighbor_code",n.CURRENT_CODE="current_code",n.NOTEBOOK_SPECIFIC="notebook_specific",n.RELEVANT_TABLE="relevant_table",n.FAVORITE_TABLE="favorite_table",n.SEARCH_TABLE="search_table",n.FE_SEARCH_TABLE="fe_search_table",n.REFERENCE_OBJECT="reference_object",n.EXECUTION_ERROR="execution_error",n.USER_QUERIES="user_queries",n.NOTEBOOK_CELLS="notebook_cells",n.QUERY_PROFILE="query_profile",n.NOTEBOOK_FULL_CODE_CELLS="notebook_full_code_cells",n.AUTOCOMPLETE="autocomplete",n.ASSISTANT_INSTRUCTIONS="assistant_instructions",n.NOTEBOOK_AGENT_CONTENT="notebook_agent_content",n.FILE_AGENT_CONTENT="file_agent_content",n.COMPUTE_RESOURCE="compute_resource",n.MERLIN_SUPPORT="merlin_support",n.QUERY_INSIGHTS="query_insights",n.SQL_EDITOR_CONTENT="sql_editor_content",n.QUERY_PARAMETERS="query_parameters",n.MEMORY="memory",n.AGENTS_MD="agents_md",n.GITHUB_MCP_CONFIG="github_mcp_config",n)},170075:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.5 5c-.356 0-.694-.074-1-.208v8.458c0 .69.56 1.25 1.25 1.25H10V16H4.75A2.75 2.75 0 0 1 2 13.25V2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75zm0-1.5a1 1 0 0 1 0-2h8v2z",clipRule:"evenodd"}),(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M14 6.5a2 2 0 0 0-1.953 2.433l-.944.648a2 2 0 1 0 .105 3.262l.858.644a2 2 0 1 0 .9-1.2l-.988-.74a2 2 0 0 0-.025-.73l.944-.649A2 2 0 1 0 14 6.5m-.5 2a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m-4 2.75a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0M14 13.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",clipRule:"evenodd"})]})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CatalogSharedIcon";let l=s},170082:(e,t,a)=>{a.d(t,{a:()=>i});var n=a(646171);function r(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}let i=e=>{var t;return(t=function*(){let{data:t}=yield(0,n.p)().patch("folders",e);return t},function(){var e=this,a=arguments;return new Promise(function(n,i){var o=t.apply(e,a);function s(e){r(o,n,i,s,l,"next",e)}function l(e){r(o,n,i,s,l,"throw",e)}s(void 0)})})()}},173949:(e,t,a)=>{a.d(t,{L:()=>s});var n=a(411695),r=a(702263),i=a(274361);let o={name:"edit-job-settings",description:"Updates job settings via the Databricks CLI. Fetches current configuration, summarizes proposed changes, and applies them only after explicit user approval. Use when the user wants to edit, update, or change job settings, configuration, schedules, clusters, or parameters.",enabled:()=>(0,r.I)()&&(0,n.ER)()&&!(0,i.X)(),files:new Map([["SKILL.md",()=>(()=>{let e=()=>a.e(32126).then(a.t.bind(a,632126,17));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(632126,"./SKILL.md?raw","lazy",e);return e()})().then(e=>e.default)]])},s={name:"jobsAgent",skills:[{name:"job-run-diagnosis",description:"REQUIRED when diagnosing job run failures. Load this skill FIRST before diagnosing any failed job run — even when error context (errorMessage, stackTrace, code) is already available in the conversation.",files:new Map([["SKILL.md",()=>(()=>{let e=()=>a.e(25249).then(a.t.bind(a,325249,17));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(325249,"./SKILL.md?raw","lazy",e);return e()})().then(e=>e.default)]])},o]}},175291:(e,t,a)=>{a.d(t,{N:()=>o,X:()=>s});var n=a(692738),r=a(107774);function i(e){return null!=e.tagKey}function o(e){if(!(0,r.X)())return{domainHierarchy:{},subDomainIdToParentDomain:{}};let t=new Map(e.map(e=>[e.domainId,e])),a={},n={};for(let r of e){if(null==r.domainId||null==r.parentDomainId||!i(r))continue;let e=t.get(r.parentDomainId);null!=e&&i(e)&&(a[e.tagKey]??=[],a[e.tagKey].push(r),n[r.domainId]=e)}return{domainHierarchy:a,subDomainIdToParentDomain:n}}function s(e){return(0,n.useMemo)(()=>o(e),[e])}},178808:(e,t,a)=>{a.d(t,{V:()=>r,v:()=>o});var n=a(700367);function r({columnConfig:e,defaultTransform:t,displayName:a,specType:n="render"}){let{transform:i,column:s}=e,l=o(i)??t;if("editor"===n)return{...l?{transform:l}:{},field:s,...a?{displayName:a}:{}};return{...l?{transform:l}:{},fieldName:s,...a?{displayName:a}:{}}}let i={SUM:"sum",COUNT:"count",COUNT_DISTINCT:"countdistinct",AVG:"avg",MEDIAN:"median",MIN:"min",MAX:"max",STDDEV:"stddev",VARIANCE:"variance",YEAR_LEVEL:"yearly",MONTH_LEVEL:"monthly",WEEK_LEVEL:"weekly",DAY_LEVEL:"daily",HOUR_LEVEL:"hourly",MINUTE_LEVEL:"minutely",SECOND_LEVEL:"secondly"};function o(e){if(!e)return;return(0,n.y)(i[e])}},181607:(e,t,a)=>{a.d(t,{a:()=>function e({itemId:t,children:a,metadata:n,type:r="recursive"}){let i=[],o=[],s={},l={},u={};return a.forEach(t=>{if(i.push(t.id),"data"in t&&(l[t.id]=t.data),"metadata"in t&&t.metadata&&(u[t.id]=t.metadata),"defaultExpanded"in t&&!0===t.defaultExpanded&&o.push(t.id),"children"in t&&Array.isArray(t.children)&&t.children.length>0&&"recursive"===r){let a=e({itemId:t.id,children:t.children,metadata:t.metadata,type:"recursive"});o.push(...a.defaultExpandedItems),Object.assign(u,a.itemMetadataMap),Object.assign(s,a.childrenIdsMap),Object.assign(l,a.childrenDataMap)}else"children"in t&&Array.isArray(t.children)&&0===t.children.length&&"recursive"===r&&(s[t.id]=[],t.metadata&&(u[t.id]=t.metadata))}),s[t]=i,n&&(u[t]=n),{defaultExpandedItems:o,childrenIdsMap:s,childrenDataMap:l,itemMetadataMap:u}}})},184563:(e,t,a)=>{a.d(t,{a:()=>n});class n{}},186675:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.FD)("g",{fill:"currentColor",clipPath:"url(#CatalogOffIcon_svg__a)",children:[(0,n.Y)("path",{d:"m14 11.94-1.5-1.5V5H7.061l-1.5-1.5h6.94v-2h-8c-.261 0-.499.1-.677.263L2.764.703A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75z"}),(0,n.Y)("path",{fillRule:"evenodd",d:"M2 4.06.47 2.53l1.06-1.06 13.5 13.5-1.06 1.06-.03-.03H4.75A2.75 2.75 0 0 1 2 13.25zm1.5 1.5v7.69c0 .69.56 1.25 1.25 1.25h7.69z",clipRule:"evenodd"})]}),(0,n.Y)("defs",{children:(0,n.Y)("clipPath",{children:(0,n.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CatalogOffIcon";let l=s},187389:(e,t,a)=>{a.d(t,{l:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enableDashboardMetadataPanel",!1)}},187441:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 17",...e,children:(0,n.Y)("path",{fill:"currentColor",d:"M3.75 2A2.75 2.75 0 0 0 1 4.75v6.5A2.75 2.75 0 0 0 3.75 14H5.5v-1.5H3.75c-.69 0-1.25-.56-1.25-1.25v-6.5c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v6.5c0 .69-.56 1.25-1.25 1.25H9.81l.97-.97-1.06-1.06-2.78 2.78 2.78 2.78 1.06-1.06-.97-.97h2.44A2.75 2.75 0 0 0 15 11.25v-6.5A2.75 2.75 0 0 0 12.25 2z"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="LoopIcon";let l=s},191187:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M4 15v-2.354a2.751 2.751 0 0 1 0-5.292V1h1.5v6.354a2.751 2.751 0 0 1 0 5.292V15zm.75-3.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5M10.5 1v2.354a2.751 2.751 0 0 0 0 5.292V15H12V8.646a2.751 2.751 0 0 0 0-5.292V1zm.75 3.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="SlidersIcon";let l=s},191431:(e,t,a)=>{a.d(t,{Q:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.deltapipelines.enableUnifiedIncludesForCreateEdit",!1)}},195063:(e,t,a)=>{a.d(t,{z:()=>l});var n=a(441535),r=a(886100),i=a(22191),o=a(747129),s=a(580769);class l extends s.v{constructor(e,t){super({experimentName:"chatModelPriority",defaultMetadata:{experiment_type:"user",treatments:[{experiment_percentage:100,model_priority:["gpt-41-2025-04-14","gpt-4o-2024-11-20","claude-4-5-opus"]}]},getOverrideMetadata:()=>{let e=(0,n.W)("databricks.fe.assistantExperiment.chatModelPriority","");if(!e)return;try{return JSON.parse(e)}catch(e){r.iT.sev2BurnRate(i.Es.Assistant,"Failed to parse Chat Model Priority experiment metadata",o.i1.P99,o.Ip.Min10,!1,e);return}}},e,t)}}},196852:(e,t,a)=>{a.d(t,{WS:()=>c,o6:()=>u,qP:()=>m,ph:()=>b,Bh:()=>d,z6:()=>E});var n=a(978081),r=a(22191),i=a(289841),o=a(594989);function s(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function l(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){s(i,n,r,o,l,"next",e)}function l(e){s(i,n,r,o,l,"throw",e)}o(void 0)})}}let u={ERROR_RUNNING_TOOL:"An error occurred while running the tool. Please try again.",NOT_APPROVED:"Tool execution was not approved by user.",NOT_APPROVED_LEGACY:"Tool execution was not approved.",CANCELLED_BY_USER:"Tool call cancelled by user",REJECTED_BY_USER:"Tool call request rejected by user",TOOL_NOT_AVAILABLE:"Tool is not available in the current context.",INVALID_INPUT:"Tool response did match provided schema. Violations",UNPARSEABLE_INPUT:"Tool input JSON is unparseable"},c=Object.values(u);function d(e,t,{esComponent:a,toolName:i}){if(!e)return!1;if("function"==typeof e)try{return e(t)}catch(e){return(0,n.j)({level:"sev2",esComponent:a??r.Es.Assistant,eventId:"needsApproval-function-threw",debugBlob:{toolName:i,error:e}}),!0}return e}function m(e){return e.startsWith("mcp-")}let p=/^[a-zA-Z0-9_-]{1,64}$/;function f(e){if(p.test(e))return e;throw Error("Tool name must be 1-64 characters long and only contain alphanumeric characters, underscores and hyphens (a-z, A-Z, 0-9, _, -). No spaces, or special characters allowed.")}function g(e,t){let a=t instanceof Error?t.toString():String(t);return{success:!1,error:{message:`${u.ERROR_RUNNING_TOOL} Error: ${a}`}}}function h(e){return l(function*(){let{parsedInput:t,options:a,toolName:n,runContext:r,signal:i}=e,o=r.agentIds;if(a.inputGuardrail){let e=yield a.inputGuardrail(t,n,o);if(!e.safe)return e.result}let s=yield a.execute(t,r,i);if(a.outputGuardrail){let e=yield a.outputGuardrail(s,n,o);if(!e.safe)return e.result}return s})()}function E(e){let t=e.esComponent,a=f(e.name);return{type:"function",name:a,esComponent:t,_id:`${a}::function`,description:e.description,parameters:e.parameters,internalStrictValidation:!0,get strict(){try{return(0,o.S)("databricks.fe.assistant.pseudoStrictModeKillswitch")}catch{return!1}},invoke:function(t,n,r){return l(function*(){try{return yield h({parsedInput:n,options:e,toolName:a,runContext:t,signal:r})}catch(a){return e.errorFunction?.(t,a)??g(t,a)}})()},createStreamingHandler:e.createStreamingHandler,needsApproval:e.needsApproval??!1,toolResultCompactionConfig:e.toolResultCompactionConfig??i.dU,display:e.display,toolAutoAllowKey:e.toolAutoAllowKey,toolAutoAllowLabel:e.toolAutoAllowLabel,deferLoading:e.deferLoading}}function b(e){let t=e.esComponent,a=e.errorFunction??g,n=f(e.name);return{type:"function",name:n,esComponent:t,_id:`${n}::function`,description:e.description,parameters:e.parameters,internalStrictValidation:!1,strict:!1,invoke:function(t,r,i){return l(function*(){try{return yield h({parsedInput:r,options:e,toolName:n,runContext:t,signal:i})}catch(e){return a(t,e)}})()},createStreamingHandler:e.createStreamingHandler,needsApproval:e.needsApproval??!1,toolResultCompactionConfig:e.toolResultCompactionConfig??i.dU,display:e.display,toolAutoAllowKey:e.toolAutoAllowKey,toolAutoAllowLabel:e.toolAutoAllowLabel,deferLoading:e.deferLoading}}},202855:(e,t,a)=>{a.d(t,{m:()=>r});var n=a(141078);let r=(0,n.J1)`
  fragment JobsAllTasksFragment on JobsJobTask {
    notebookTask {
      notebookPath
      source
      baseParameters {
        key
        value
      }
      warehouseId
    }
    sparkJarTask {
      jarUri
      mainClassName
      parameters
      runAsRepl
    }
    sparkPythonTask {
      pythonFile
      parameters
      source
    }
    sparkSubmitTask {
      parameters
    }
    shellCommandTask {
      command
      envVars {
        key
        value
      }
    }
    pipelineTask {
      pipelineId
      parameters {
        fullRefresh
      }
      pipelineTaskParameters @includeSafex(name: "pipeline_parameters", defaultValue: false) {
        key
        value
      }
    }
    cleanRoomNotebookTask {
      cleanRoomName
      notebookName
      notebookBaseParameters {
        key
        value
      }
    }
    cleanRoomsNotebookTask @includeSafex(name: "databricks.fe.uc.enableCleanRoom", defaultValue: false) {
      cleanRoomName
      notebookName
      etag
      notebookBaseParameters {
        key
        value
      }
    }
    cleanRoomsJarTask
      @includeSafex(name: "databricks.fe.uc.enableCleanRoom", defaultValue: false)
      @includeSafex(name: "cleanroom_jar_task", defaultValue: false) {
      cleanRoomName
      jarAnalysisName
      parameters
    }
    pythonWheelTask {
      entryPoint
      packageName
      parameters
      namedParameters {
        key
        value
      }
    }
    dbtTask {
      projectDirectory
      catalog
      commands
      schema
      warehouseId
      profilesDirectory
      source @include(if: $includeSourceInDbtAndSqlFile)
    }
    sqlTask {
      alert {
        alertId
        pauseSubscriptions @include(if: $includeSubscriptions)
        subscriptions @include(if: $includeSubscriptions) {
          userName
          destinationId
        }
      }
      dashboard {
        dashboardId
        pauseSubscriptions @include(if: $includeSubscriptions)
        subscriptions @include(if: $includeSubscriptions) {
          userName
          destinationId
        }
        customSubject @include(if: $includeSubscriptions)
      }
      query {
        queryId
      }
      file {
        path
        source @include(if: $includeSourceInDbtAndSqlFile)
      }
      parameters {
        key
        value
      }
      warehouseId
    }
    runJobTask {
      jobId
      batchLoadJob @include(if: $includeJobInRunJobTask) {
        settings {
          name
        }
      }
      jobParameters @include(if: $includeJobParameters) {
        key
        value
      }
    }
    conditionTask {
      left
      right
      op
      outcome
    }
    simulationTask @includeSafex(name: "databricks.fe.jobs.tasks.plugins.simulation.enabled", defaultValue: false) {
      controlId
      parameters {
        key
        value
      }
    }
    dashboardTask {
      dashboardId
      warehouseId
      subscription {
        customSubject
        paused
        subscribers {
          destinationId
          userName
        }
      }
      filters {
        key
        value
      }
    }
    forEachTask {
      inputs
      concurrency
    }
    alertTask @includeSafex(name: "alertv2_job_task", defaultValue: false) {
      alertId
      warehouseId
      workspacePath
      subscribers {
        userName
        destinationId
      }
    }
    genAiComputeTask @includeSafex(name: "databricks.genaimapi.enableGenaiComputeTaskJobRun", defaultValue: false) {
      dlRuntimeImage
      compute {
        numGpus
        gpuNodePoolId
        gpuType
      }
      command
      source
      trainingScriptPath
      yamlParametersFilePath
      mlflowExperimentName
      yamlParameters
    }
    powerBiTask @includeSafex(name: "power_bi_task", defaultValue: false) {
      tables {
        catalog
        schema
        name
        storageMode
      }
      warehouseId
      powerBiModel {
        workspaceName
        modelName
        storageMode
        authenticationMethod
        overwriteExisting
      }
      connectionResourceName
      refreshAfterUpdate
    }
    dbtPlatformTask @includeSafex(name: "dbt_cloud_task", defaultValue: false) {
      connectionResourceName
      dbtPlatformJobId
    }
    agenticTask @includeSafex(name: "databricks.fe.jaws.agentTaskEnabled", defaultValue: false) {
      goal
      supervisorAgent {
        agentId
      }
      taskOutputSchema {
        key
        value
      }
    }
    pythonOperatorTask
      @includeSafex(name: "databricks.fe.jobs.tasks.plugins.pythonOperator.enabled", defaultValue: false) {
      main
      parameters {
        name
        value
      }
    }
  }
`},203796:(e,t,a)=>{a.d(t,{n:()=>i});var n=a(692738),r=a(337706);function i({name:e,defaultValue:t,codec:a,historyAction:o="replace",errorMode:s}){let l=(0,n.useCallback)(n=>{let r=n.get(e);if(null===r)return t;try{return a.deserialize(r)}catch(e){if("throw"===s)throw e;return t}},[e,t,a,s]),[u,c]=(0,r.ok)();return[(0,n.useMemo)(()=>l(u),[u,l]),(0,n.useCallback)((t,n)=>{c(n=>{let r="function"==typeof t?t(l(n)):t;return void 0===r?n.delete(e):n.set(e,a.serialize(r)),n},{replace:"replace"===o,...n})},[o,e,l,a,c])]}},204645:(e,t,a)=>{a.d(t,{q:()=>l});var n=a(620275),r=a(689262),i=a(686560),o=a(441535),s=a(278983);function l(){if(!window.settings){let e,t,a,s,l,u;return e=(0,r.b)("userType",(0,i.d)("userType",""),()=>(0,i.d)("userType_new","")),t=(0,i.d)("userCanUseDatabricksWorkspace_new",!1),a=(0,i.d)("userCanUseSqlService_new",!1),s=(0,r.b)("centralizedLoginEnabled",(0,i.d)("centralizedLoginEnabled",!1),()=>(0,o.W)("databricks.fe.centralizedLoginEnabled",!1)),l=(0,i.d)("enableSqlService",!1),u="WorkspaceUser"===e&&!t&&!a&&s&&l&&!(0,n.s4)(),"AccountOnlyUser"===e||u}let e=window.settings?.userType==="AccountOnlyUser",t=window.settings?.userType==="WorkspaceUser"&&!window.settings?.userCanUseDatabricksWorkspace&&!window.settings?.userCanUseSqlService&&window.settings?.centralizedLoginEnabled&&window.settings?.enableSqlService&&!(0,n.s4)();return(e||t)&&(0,s.y)("clientsideEvent",{eventType:"isEffectiveAccountOnlyUser"}),e||t}},204725:(e,t,a)=>{a.d(t,{B:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.dbsql.disableUserImpersonationFeatures",!1)}},204892:(e,t,a)=>{a.d(t,{O:()=>o,P:()=>s});var n=a(278983),r=a(689017),i=a(711489);class o extends Error{status;code;source;data;constructor(e,t,a,n){super(t),this.status=e,this.code=t,this.source=a,this.data=n}}let s=(e,t,a,o,s,l,u)=>{(0,r.wi)({lakesense_log:{event_type:l??i.J5.LakesenseEventType_Type.TYPE_UNSPECIFIED,event_name:`${e}: ${t}`,lakesense_trace_id:s,lakesense_client_id:a,model_type:u}}),(0,n.y)("clientsideEvent",{eventType:"InlineAssistantError",eventName:`${e}: ${t}`,lakesenseTraceId:s,lakesenseClientId:a,modelType:u},o)}},204972:(e,t,a)=>{function n(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function r(e){return function(){var t=this,a=arguments;return new Promise(function(r,i){var o=e.apply(t,a);function s(e){n(o,r,i,s,l,"next",e)}function l(e){n(o,r,i,s,l,"throw",e)}s(void 0)})}}a.r(t),a.d(t,{lazilyImportEditorModule:()=>i});let i=(e,t,n)=>r(function*(){let{includeLsp:i}=n??{},s=new Promise(n=>r(function*(){let r=Promise.all([(()=>{let e=()=>Promise.all([a.e(62280),a.e(21234),a.e(1990),a.e(78632),a.e(39676),a.e(31813),a.e(93932),a.e(64666),a.e(62762),a.e(49177),a.e(45027)]).then(a.bind(a,645696));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(645696,"@databricks/editor/unifiedEditor","lazy",e);return e()})(),(()=>{let e=()=>Promise.all([a.e(1990),a.e(78632),a.e(39676),a.e(31813),a.e(80934)]).then(a.bind(a,876146));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(876146,"@databricks/monaco-0-51/monaco","lazy",e);return e()})()]).then(([e,t])=>{e.hydrateWithMonaco(t.monacoApi),e.getMonacoApi().MonacoLanguageClientServiceManager.initMonacoLanguageClientServices()}),[i,s]=yield Promise.all([r,(()=>{let e=()=>Promise.all([a.e(62280),a.e(6932),a.e(1291),a.e(97768),a.e(24685),a.e(99406),a.e(21234),a.e(92170),a.e(1990),a.e(78632),a.e(39676),a.e(31813),a.e(51362),a.e(26881),a.e(93932),a.e(79724),a.e(56934),a.e(68775),a.e(11022),a.e(43927),a.e(18650),a.e(87122),a.e(12674),a.e(4828),a.e(90489),a.e(64666),a.e(30259),a.e(13962),a.e(22831),a.e(80086),a.e(51818),a.e(87385),a.e(58415),a.e(79637),a.e(62762),a.e(48898),a.e(32474)]).then(a.bind(a,731392));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(731392,"@databricks/editor/commonPlugins","lazy",e);return e()})()]);t&&(yield o(t,s)),n((yield e?.()))})()),l=new Promise(e=>r(function*(){let[t,n]=yield Promise.all([(()=>{let e=()=>Promise.all([a.e(78632),a.e(51362),a.e(67812)]).then(a.bind(a,528304));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(528304,"@databricks/editor/vscodeLanguageserverProtocol","lazy",e);return e()})(),i?(()=>{let e=()=>Promise.all([a.e(78632),a.e(51362),a.e(30618)]).then(a.bind(a,706330));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(706330,"@databricks/monaco-0-51/vscodeLsp","lazy",e);return e()})():Promise.resolve(void 0)]);n&&t.hydrateWithVscodeLsp(n.vscodeLspApi),e()})()),[u]=yield Promise.all([s,l]);return u})(),o=(e,t)=>r(function*(){switch(e){case"ChatSidebarNativeFeaturePlugin":{let{ChatSidebarNativeFeaturePlugin:e}=yield(()=>{let e=()=>Promise.all([a.e(62280),a.e(6932),a.e(1291),a.e(97768),a.e(24685),a.e(99406),a.e(21234),a.e(92170),a.e(1990),a.e(78632),a.e(39676),a.e(31813),a.e(51362),a.e(26881),a.e(93932),a.e(79724),a.e(56934),a.e(68775),a.e(11022),a.e(43927),a.e(18650),a.e(87122),a.e(12674),a.e(4828),a.e(90489),a.e(64666),a.e(30259),a.e(13962),a.e(22831),a.e(80086),a.e(51818),a.e(87385),a.e(58415),a.e(79637),a.e(62762),a.e(48898),a.e(85387)]).then(a.bind(a,54427));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(54427,"@databricks/editor/chatSidebarTextArea","lazy",e);return e()})();yield e().preload?.();break}case"DbSqlNativeFeaturePluginWithCustomThemes":yield t.DbSqlNativeFeaturePlugin(!0).preload?.();break;case"DbSqlNativeFeaturePluginWithDefaultTheme":yield t.DbSqlNativeFeaturePlugin(!1).preload?.();break;default:yield t[e]().preload?.()}})()},210001:(e,t,a)=>{a.d(t,{d:()=>c});var n=a(610435),r=a(692738),i=a(497895),o=a(382908),s=a(944552),l=a(342411),u=a(754275);function c(e){let{theme:t}=(0,i.wn)(),a=(0,u.B)(),c=e.id??a,[m,p]=r.useState(e.defaultChecked??e.checked??!1),f=e.checked??m;return(0,n.FD)("div",{css:{alignItems:"center",display:"inline-flex",gap:t.spacing.sm},children:[(0,n.Y)("label",{"aria-hidden":!0,css:{textAlign:"end"},htmlFor:c,children:(0,n.Y)(d,{off:(0,n.Y)(o.o.Text,{bold:!0,children:(0,n.Y)(l.sA,{id:"f9yzNX",defaultMessage:"Off"})}),on:(0,n.Y)(o.o.Text,{bold:!0,children:(0,n.Y)(l.sA,{id:"mE7ssh",defaultMessage:"On"})}),state:f})}),(0,n.Y)(s.d,{...e,id:c,onChange:function(t,a){p(t),e.onChange?.(t,a)}})]})}function d({off:e,on:t,state:a}){return(0,n.FD)("div",{children:[(0,n.Y)(m,{visible:a,children:t}),(0,n.Y)(m,{visible:!a,children:e})]})}function m({children:e,visible:t}){return(0,n.Y)("div",{"aria-hidden":!t,css:{height:t?void 0:0,visibility:t?"visible":"hidden"},children:e})}},210556:(e,t,a)=>{a.d(t,{f:()=>o});var n=a(610435),r=a(906169),i=a(429608);let o=({dangerouslySetAntdProps:e,...t})=>(0,n.Y)(i.wC,{children:(0,n.Y)(r.A,{...t,...e})})},210785:(e,t,a)=>{a.d(t,{P:()=>r});var n,r=((n={}).GOVERNED="GOVERNED",n.DISCOVERY="DISCOVERY",n)},211148:(e,t,a)=>{a.d(t,{m:()=>l});var n=a(962264),r=a(586356),i=a(409666),o=a(315592);let s={"filter-single-select":1,"filter-multi-select":1},l=(0,o.BA)({isWidgetType:e=>e in s,channelIndex:{fields:1},description:e=>(0,n.K)(e),validateEditorSpec:e=>({validatedSpec:e}),version:i.B0,getEncodingMapMeta:()=>i.OM,allowDisaggregatedData:!1,allowSelection:!0,isRenderable:r.q,normalizeDecoupledSpec:(e,t)=>e})},213576:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M14 6.5V.75a.75.75 0 0 0-.75-.75H4.5A2.5 2.5 0 0 0 2 2.5v10.75A2.75 2.75 0 0 0 4.75 16H6.5v-1.5H4.75c-.69 0-1.25-.56-1.25-1.25V4.792c.306.134.644.208 1 .208h8v1.5zm-9.5-3a1 1 0 0 1 0-2h8v2z",clipRule:"evenodd"}),(0,n.Y)("path",{fill:"currentColor",d:"M11.75 8.5a2.501 2.501 0 0 1 1.594 4.426 4.76 4.76 0 0 1 1.969 1.332.75.75 0 0 1-1.126.993 3.24 3.24 0 0 0-2.437-1.1c-.97 0-1.84.424-2.437 1.1a.75.75 0 0 1-1.126-.993 4.76 4.76 0 0 1 1.968-1.332A2.5 2.5 0 0 1 11.75 8.5m0 1.501a1 1 0 1 0 0 2 1 1 0 0 0 0-2"})]})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CatalogUserHomeIcon";let l=s},214056:(e,t,a)=>{a.a(e,async(e,n)=>{try{a.d(t,{Q:()=>o,d:()=>s});var r=a(876146),i=a(596359);let e=(0,i.G)("databricks.fe.editor.enableMonaco0551",!1)?null:(await (()=>{let e=()=>Promise.resolve().then(a.bind(a,876146));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(876146,"@databricks/monaco-0-51/monaco","eager",e);return e()})()).monacoApi;function o(){return e??r.monacoApi}function s(e){}n()}catch(e){n(e)}},1)},214353:(e,t,a)=>{a.d(t,{X:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enableWidgetLayoutTheme",!1)}},216979:(e,t,a)=>{a.d(t,{T:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.visualizations.disableTextWidgetDataRef",!1)}},217247:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.083 8 10 10.947 8.958 12 5 8l3.958-4L10 5.053z",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="ChevronLeftIcon";let l=s},218305:(e,t,a)=>{a.d(t,{U:()=>r,z:()=>i});var n=a(692738);let r=(0,n.createContext)({recordEvent:e=>{}}),i=()=>(0,n.useContext)(r)},221884:(e,t,a)=>{a.d(t,{d$:()=>g,m_:()=>h});var n=a(610435),r=a(692738),i=a(160603),o=a(441535),s=a(22191),l=a(614127),u=a(412836),c=a(767399),d=a(518726);let m=r.createContext({refetchAll:()=>{},setFavoriteTables:()=>{}}),p=()=>(0,l.j)("metastore-client",s.Es.DataExplorer,{defaultOptions:{queries:{refetchOnWindowFocus:!1,staleTime:3e5,retry:u.CH.defaultOptions.queries.retry}}}),f=(0,d.T)(()=>p());function g({children:e,client:t}){let[a]=(0,r.useState)(()=>t??(0,o.W)("databricks.fe.infra.enableSingletonQueryClient",!1)?f.getActiveValue():p()),s=(0,r.useCallback)(()=>{a.invalidateQueries()},[a]),l=(0,r.useCallback)(e=>{a.setQueryData(c.S,e)},[a]),h=(0,r.useMemo)(()=>({refetchAll:s,setFavoriteTables:l}),[s,l]);return(0,n.Y)(m.Provider,{value:h,children:t||!(0,o.W)("databricks.fe.infra.enableSingletonQueryClient",!1)?(0,n.Y)(i.QueryClientProvider,{client:a,children:(0,n.Y)(u.q$,{children:e})}):(0,n.Y)(d.Q,{provider:i.QueryClientProvider,clientAccessor:f,children:(0,n.Y)(u.q$,{children:e})})})}function h(){return(0,r.useContext)(m)}},222572:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1 8a7 7 0 0 1 11.85-5.047l.65.594V2H15v4h-4V4.5h1.32l-.496-.453-.007-.007a5.5 5.5 0 1 0 .083 7.839l1.063 1.058A7 7 0 0 1 1 8",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="RefreshIcon";let l=s},223699:(e,t,a)=>{a.d(t,{a:()=>p});var n=a(610435),r=a(802558),i=a.n(r),o=a(692738),s=a(497895),l=a(339518),u=a(79128),c=a(694762),d=a(342411),m=a(412285);let p=({isVisible:e=!0,itemName:t,itemInternalName:a,targetFolderName:r,onError:p,onCancel:f,onSuccess:g,alwaysShow:h=!1})=>{let{theme:E}=(0,s.wn)(),b=(0,m.PF)({name:t||"",internal_name:a},e&&!!t&&!h),T=(0,m.PF)({name:r},!h),y=b.isFetching||T.isFetching,I=b.isError||T.isError,A=b.error||T.error,v=!y&&b.data&&T.data&&!I,S=h||v,_=(0,o.useMemo)(()=>!h&&S&&i()(b.data,T.data),[h,S,T.data,b.data]),C=(0,o.useRef)(g);C.current=g;let R=(0,o.useRef)(p);R.current=p,(0,o.useEffect)(()=>{e&&_&&C.current&&C.current()},[_,e]),(0,o.useEffect)(()=>{e&&I&&A&&R.current&&R.current(A)},[A,I,e]);let O=h?(0,n.Y)(d.sA,{id:"GY4zAI",defaultMessage:"Moving these items will update their permission settings according to the new parent folder, if permissions differ."}):(0,n.Y)(d.sA,{id:"DpMean",defaultMessage:"Moving this item will update its permission settings according to its new parent folder."}),N=S?(0,n.Y)(d.sA,{id:"b3EgqE",defaultMessage:"Change who has access?"}):null,k=S?O:I&&A?(0,n.Y)(l.F,{componentId:"codegen_webapp_js_workspace_features_actions_components_confirmpermissionsmodal.tsx_85",type:"warning",message:(0,n.Y)(d.sA,{id:"j7Ih8S",defaultMessage:"Error checking permissions before move:{br}{error}",values:{error:A?.message,br:(0,n.Y)("br",{})}})}):null,w=S?[(0,n.Y)(u.$n,{componentId:"codegen_webapp_js_workspace_features_actions_components_confirmpermissionsmodal.tsx_88",css:{marginRight:E.spacing.sm},onClick:f,children:(0,n.Y)(d.sA,{id:"mSNDwm",defaultMessage:"Cancel"})},"cancel-btn"),(0,n.Y)(u.$n,{componentId:"codegen_webapp_js_workspace_features_actions_components_confirmpermissionsmodal.tsx_91",onClick:g,type:"primary","data-testid":"confirm-permissions-button",children:(0,n.Y)(d.sA,{id:"6Qyz4p",defaultMessage:"Confirm"})},"move-btn")]:I?(0,n.Y)(u.$n,{componentId:"codegen_webapp_js_workspace_features_actions_components_confirmpermissionsmodal.tsx_99",css:{marginRight:E.spacing.sm},onClick:f,children:(0,n.Y)(d.sA,{id:"mSNDwm",defaultMessage:"Cancel"})},"cancel-btn"):null;if(_||y)return null;return(0,n.Y)(c.aF,{componentId:"codegen_webapp_js_workspace_features_actions_components_confirmpermissionsmodal.tsx_139","data-testid":"confirm-permissions-modal",visible:e,title:N,footer:w,onCancel:f,children:k})}},226139:(e,t,a)=>{a.d(t,{N:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enableKeepQueryAliveInViewportKillSwitch",!1)}},228061:(e,t,a)=>{a.d(t,{Be:()=>o,ib:()=>u,z3:()=>l});var n=a(610435);a(692738);var r=a(342411),i=a(947170);function o(e){try{return u(e)}catch(t){let e=(0,n.Y)(r.sA,{id:"coHlse",defaultMessage:"ID in URL path is invalid."});return(0,i.su)(e,!1),-1}}let s=/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;function l(e){return s.test(e)}function u(e){let t=parseInt(e,10);if(isNaN(t)||String(t)!==e)throw Error("Invalid ID");return t}},229335:(e,t,a)=>{a.d(t,{D:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enableDenserGridLayout",!1)}},231223:(e,t,a)=>{a.d(t,{J:()=>i,S:()=>r});var n=a(141078);let r=(0,n.J1)`
  query ListDomains($pageSize: Int, $pageToken: String, $includeTagMetadata: Boolean, $mode: DomainsReadRequestMode)
  @component(name: "LakehouseCollaboration.DiscoveryAndRecommendation") {
    domainsListDomains(
      input: { pageSize: $pageSize, pageToken: $pageToken, includeTagMetadata: $includeTagMetadata, mode: $mode }
    ) {
      domains {
        domainId
        tagKey
        tagMetadata {
          description
        }
        icon {
          name
          color
        }
        subtitle
        description
        draft
        effectiveDraft
        technicalOwnerIds
        businessOwnerIds
        parentDomainId
      }
      nextPageToken
      apiError {
        code
        message
        helpUrl
        traceId
      }
    }
  }
`;function i(e,t={}){return(0,n.IT)(r,{variables:e,...t})}},234969:(e,t,a)=>{a.d(t,{C:()=>l});var n=a(141078),r=a(483588),i=a(158555);let o=[i.h8.TABLE,i.h8.FUNCTION,i.h8.MODEL,i.h8.VOLUME,i.h8.METRIC_VIEW],s=(0,n.J1)`
  query ListRecentUCAssets($numRecents: Int!, $assetTypes: [UseractivityAssetType!])
  @component(name: "Lakeview.DatabricksOne") {
    useractivityListRecentAssets(input: { numResults: $numRecents, filter: { types: $assetTypes } }) {
      assets {
        asset {
          name
          id
          type
          unityCatalogSecurable {
            securableKind
          }
        }
      }
      apiError {
        message
        code
      }
    }
  }
`;function l({numRecents:e=5,selectableTypes:t,skip:a=!1}){var c;let m,p,{data:f,error:g,...h}=(0,n.IT)(s,{notifyOnNetworkStatusChange:!0,skip:a,variables:{numRecents:e,assetTypes:(m=(c=t).map(e=>d[e]).filter(e=>void 0!==e),p=1===c.length&&o.includes(c[0]),m.includes(r.z$1.UC_SCHEMA)||1!==c.length||c.includes(i.h8.CATALOG)||p||m.push(r.z$1.UC_SCHEMA),m.includes(r.z$1.UC_CATALOG)||p||m.push(r.z$1.UC_CATALOG),!m.includes(r.z$1.UC_VOLUME)&&(c.includes(i.h8.VOLUME_DIRECTORY)||c.includes(i.h8.VOLUME_FILE))&&m.push(r.z$1.UC_VOLUME),m)}}),E=1===t.length&&o.includes(t[0]),{data:b,...T}=(0,n.IT)(s,{notifyOnNetworkStatusChange:!0,skip:!E,variables:{numRecents:e,assetTypes:[r.z$1.UC_SCHEMA,r.z$1.UC_CATALOG]}});return{error:f?.useractivityListRecentAssets?.apiError||g,recents:[...f?.useractivityListRecentAssets?.assets?.map(u).filter(e=>!!e)??[],...b?.useractivityListRecentAssets?.assets?.map(u).filter(e=>!!e)??[]],loading:h.loading||T.loading}}function u({asset:e}){if(!e||!e?.name||!e?.type)return null;if(e.type===r.z$1.UC_CATALOG)return{full_name:e.name,name:e.name,securable_type:i.h8.CATALOG,securable_kind:e.unityCatalogSecurable?.securableKind};if(e.type===r.z$1.UC_SCHEMA){let[t,a]=e.name.split(".");return{name:a,catalog_name:t,full_name:e.name,securable_type:i.h8.SCHEMA}}let t=c[e.type];if(t){let[a,n,r]=e.name.split(".");return{full_name:e.name,name:r,catalog_name:a,schema_name:n,securable_kind:e.unityCatalogSecurable?.securableKind,securable_type:t}}return null}let c={[r.z$1.UC_CATALOG]:i.h8.CATALOG,[r.z$1.UC_SCHEMA]:i.h8.SCHEMA,[r.z$1.UC_TABLE]:i.h8.TABLE,[r.z$1.UC_FUNCTION]:i.h8.FUNCTION,[r.z$1.UC_MODEL]:i.h8.MODEL,[r.z$1.UC_VOLUME]:i.h8.VOLUME},d={[i.h8.CATALOG]:r.z$1.UC_CATALOG,[i.h8.SCHEMA]:r.z$1.UC_SCHEMA,[i.h8.TABLE]:r.z$1.UC_TABLE,[i.h8.FUNCTION]:r.z$1.UC_FUNCTION,[i.h8.MODEL]:r.z$1.UC_MODEL,[i.h8.VOLUME]:r.z$1.UC_VOLUME,[i.h8.METRIC_VIEW]:void 0,[i.h8.VOLUME_DIRECTORY]:r.z$1.UC_VOLUME,[i.h8.VOLUME_FILE]:r.z$1.UC_VOLUME}},235257:(e,t,a)=>{a.d(t,{Ai:()=>s,M:()=>i,Zk:()=>o,cO:()=>l});var n,r,i=((n={}).FILE_BROWSER="file-browser",n.UC_SCHEMA_BROWSER="uc-schema-browser",n),o=((r={}).INVALIDATE_ALL="databricks:tree-invalidation-all",r.INVALIDATE_ASSET_DATA="databricks:tree-invalidation-item-data",r.INVALIDATE_ASSET_CHILDREN="databricks:tree-invalidation-children",r.INVALIDATE_ASSET_AND_CHILDREN="databricks:tree-invalidation-item-data-and-children",r);let s="databricks:tree-explorer-event";class l extends CustomEvent{constructor(e){super(s,{detail:e})}}},239362:(e,t,a)=>{a.d(t,{Bv:()=>p,L1:()=>d,Lw:()=>l,Wg:()=>u,qe:()=>m,qk:()=>f,yu:()=>c});var n=a(141078),r=a(831358),i=a(691515),o=a(543963);let s=(0,n.J1)`
  fragment RunDetailsSectionFragment on JobsRun {
    jobId
    runId
    numberInJob
    durationInfo {
      startTime
      endTime
      executionDuration
      setupDuration
      startTime
      cleanupDuration
      runDuration
      queueDuration @include(if: $includeQueueDuration)
      waitDuration
      estimatedWaitingEndTime
        @includeSafex(name: "databricks.elasticspark.performance.enableWaitingState", defaultValue: false)
    }
    runTimings @includeSafex(name: "databricks.fe.jaws.enableRunTimings", defaultValue: false) {
      executionTimestamps {
        queuedMs
        waitingForResourcesOrPythonStartingMs
        libraryInstallationMs
        runningMs
      }
      repairsAccumulatedDurations {
        queuedAccumulatedMs
        waitingForResourcesOrPythonStartingAccumulatedMs
        runningAccumulatedMs
      }
    }
    state {
      ...RunStateFragment
    }
    status @include(if: $includeRunStatus) {
      ...RunStatusFragment
    }
    runType
  }

  ${o.DP}
  ${o.WB}
`,l=(0,n.J1)`
  fragment JobRunTriggerInfo on JobsRunTriggerInfo {
    runJobTask {
      runId
      jobId
      taskKey
      parentRunId
    }
    table {
      details {
        tableName
        version
        commitTimestamp
      }
    }
    sqlCondition {
      conditionEvaluationSatisfied
      conditionEvaluationSqlSessionId
    }
  }
`,u=(0,n.J1)`
  fragment JobRunDetailsSectionFragment on JobsRun {
    ...RunDetailsSectionFragment
    trigger
    triggerInfo {
      ...JobRunTriggerInfo
    }
    runName
    effectivePerformanceTarget
    effectiveUsagePolicyId
  }

  ${l}
  ${s}
`,c=(0,n.J1)`
  fragment TaskRunDetailsSectionFragment on JobsRun {
    ...RunDetailsSectionFragment
    parentRunId
    taskKey
    creatorUserName
    creatorUser {
      ...RichUserData
    }
    creatorPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
      ...AclPrincipalData
    }
    forEachIndex
    jobRunId
  }

  ${s}
  ${r.j}
  ${r.E}
`,d=(0,n.J1)`
  fragment TaskTypeDetailsFragment on JobsJobTask {
    alertTask @includeSafex(name: "alertv2_job_task", defaultValue: false) {
      alertId
      warehouseId
      workspacePath
      subscribers {
        userName
        destinationId
      }
    }
    notebookTask {
      notebookPath
    }
    sparkJarTask {
      mainClassName
    }
    sparkPythonTask {
      pythonFile
    }
    sparkSubmitTask {
      parameters
    }
    shellCommandTask {
      command
    }
    pipelineTask {
      pipelineId
      parameters {
        fullRefresh
      }
    }
    cleanRoomNotebookTask {
      cleanRoomName
      notebookName
    }
    cleanRoomsNotebookTask {
      cleanRoomName
      notebookName
    }
    cleanRoomsJarTask {
      cleanRoomName
      jarAnalysisName
    }
    pythonWheelTask {
      entryPoint
      packageName
    }
    dbtTask {
      projectDirectory
      commands
      source
    }
    sqlTask {
      alert {
        alertId
      }
      dashboard {
        dashboardId
      }
      query {
        queryId
      }
      file {
        path
        source
      }
      parameters {
        key
        value
      }
    }
    runJobTask {
      jobId
    }
    conditionTask {
      left
      right
      op
      outcome
    }
    simulationTask {
      controlId
    }
    dashboardTask @includeSafex(name: "databricks.fe.lakeview.enableLakeviewSubscriptionsInJobs", defaultValue: false) {
      dashboardId
      warehouseId
      subscription {
        customSubject
        paused
        subscribers {
          destinationId
          userName
        }
      }
    }
    forEachTask {
      inputs
      concurrency
    }
    ...ForEachTaskStats
    powerBiTask @includeSafex(name: "power_bi_task", defaultValue: false) {
      powerBiModel {
        workspaceName
        modelName
      }
    }
  }

  ${i.d}
`,m=(0,n.J1)`
  fragment TaskTypeDetailsOverridingParametersFragment on JobsRunParameters {
    sqlParams {
      key
      value
    }
    dbtCommands
    sparkSubmitParams
    pipelineParams {
      fullRefresh
    }
  }
`,p=(0,n.J1)`
  fragment TaskGitSourceSnapshotFragment on JobsRunTask {
    gitSource {
      gitSnapshot {
        usedCommit
      }
    }
  }
`,f=(0,n.J1)`
  fragment RunJobParameter on JobsRunJobLevelParameters {
    name
    default
    value
  }
`},239464:(e,t,a)=>{a.d(t,{r:()=>o});var n=a(377063),r=a.n(n),i=a(342411);function o(e){let t=i.Sd.createIntlWithLocale(),a=e?"_":":";return t.formatMessage({id:"Xf8720",defaultMessage:"New Query {dateString}"},{dateString:r()().format(`YYYY-MM-DD HH${a}mm${a}ss`)})}},246700:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.367 3.29a.75.75 0 0 1 .547.443 5.001 5.001 0 0 1-6.072 6.736l-3.187 3.186a2.341 2.341 0 0 1-3.31-3.31L5.53 7.158a5.001 5.001 0 0 1 6.736-6.072.75.75 0 0 1 .237 1.22L10.5 4.312V5.5h1.19l2.003-2.004a.75.75 0 0 1 .674-.206m-.56 2.214L12.53 6.78A.75.75 0 0 1 12 7H9.75A.75.75 0 0 1 9 6.25V4a.75.75 0 0 1 .22-.53l1.275-1.276a3.501 3.501 0 0 0-3.407 4.865.75.75 0 0 1-.16.823l-3.523 3.523a.84.84 0 1 0 1.19 1.19L8.118 9.07a.75.75 0 0 1 .823-.16 3.5 3.5 0 0 0 4.865-3.407",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="WrenchIcon";let l=s},250213:(e,t,a)=>{a.d(t,{LD:()=>o,Ll:()=>s,qk:()=>l,sG:()=>u});let n=".designer",r={SQL:`${n}.sql`,PYTHON_SOURCE:`${n}.py`,PYTHON_JUPYTER:`${n}.ipynb`},i=Object.values(r);function o(e){if(!e)return!1;return e.endsWith(r.SQL)||e.endsWith(r.PYTHON_SOURCE)||e.endsWith(r.PYTHON_JUPYTER)}let s=()=>r.PYTHON_JUPYTER,l=e=>{for(let t of i)if(e.endsWith(t))return e.slice(0,-t.length);return e},u=(e,t)=>{let a=i.find(e=>t.endsWith(e));if(a&&!e.endsWith(a))return e+a;return e}},253061:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("path",{fill:"currentColor",d:"M8 3.75h1c.69 0 1.25.56 1.25 1.25v6c0 .69-.56 1.25-1.25 1.25H8v1.5h1c.788 0 1.499-.331 2-.863a2.74 2.74 0 0 0 2 .863h1v-1.5h-1c-.69 0-1.25-.56-1.25-1.25V5c0-.69.56-1.25 1.25-1.25h1v-1.5h-1c-.788 0-1.499.331-2 .863a2.74 2.74 0 0 0-2-.863H8z"}),(0,n.Y)("path",{fill:"currentColor",d:"M5.936 8.003 3 5.058 4.062 4l3.993 4.004-3.993 4.005L3 10.948z"})]})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CursorTypeIcon";let l=s},255791:(e,t,a)=>{a.d(t,{X:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.querySolutionV2Enabled",!1)}},258214:(e,t,a)=>{a.d(t,{Aq:()=>I,I5:()=>d,Jl:()=>c,Ke:()=>g,Pf:()=>r,SY:()=>E,f5:()=>l,fk:()=>f,hZ:()=>i,he:()=>s,qe:()=>n,re:()=>T,um:()=>y,vV:()=>p,wO:()=>h,xG:()=>u,y1:()=>m,yH:()=>o,ym:()=>b});let n=2,r=4,i=8,o=10,s=12,l=16,u=24,c=394,d=`0 ${l}px`,m=115,p=394,f=394,g=380,h=560,E=13057==a.j?h:null,b=609,T=36,y=240,I="force-light-mode"},258671:(e,t,a)=>{a.d(t,{Me:()=>m,e7:()=>u,sr:()=>c});var n=a(62108),r=a(752428),i=a(416913),o=a(843811),s=a(684228),l=a(361424);function u({spec:e,columnSchemaMap:t}){if("histogram"===e.widgetType&&e.isLegacyRedashViz)return[];for(let a of(0,o.H)(d)){let n=e.encodings[a];if((0,i.UR)(n)&&"quantitative"===n.scale.type){let{fieldName:e}=n,i=t.get(e),o=(0,l.v)(n,i);if((0,r.Kj)(o))return[{calculate:`${(0,s.N)(e)} === null ? null : ${(0,s.N)(e)} + ${o.binWidth}`,as:c({channel:a})}]}}return[]}function c({channel:e}){return(0,n.SY)({channel:e,dependentAxisSubPath:void 0,transform:"bin_end"})}let d={x:"x2"};function m(e){if(!e)return;return"x"===e||"y"===e?d[e]:void 0}},262031:(e,t,a)=>{a.d(t,{I:()=>i,l:()=>o});var n=a(692738),r=a(141078);let i=e=>btoa(JSON.stringify({offset:e})),o=(e,t)=>{let a=(0,r.IT)(e,t),{startPolling:i,stopPolling:o}=a;return(0,n.useEffect)(()=>{let e=!!t?.skip;t?.pollInterval&&!e?i(t.pollInterval):o()},[t?.skip,t?.pollInterval,i,o]),a}},267647:(e,t,a)=>{a.d(t,{N:()=>m,x:()=>d});var n=a(475654),r=a(354809),i=a(278983),o=a(388735),s=a(109445),l=a(848068);function u(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function c(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){u(i,n,r,o,s,"next",e)}function s(e){u(i,n,r,o,s,"throw",e)}o(void 0)})}}let d=({agentName:e,makeContext:t})=>a=>c(function*(){let i=(0,s.BH)(r.X.MEASUREMENT,n.o.ASSISTANT_CONTEXT_BUILDING,{lakesenseTraceId:a.promptId,eventType:`${e}`});try{let e=yield t(a);return(0,s.z$)(i,r.T.SUCCESSFUL),e}catch(t){return(0,s.z$)(i,r.T.FAILED),(0,l.yG)({source:e},t?.message),{prompt:""}}})(),m=(e,t,a,n,r=2e4)=>s=>c(function*(){let u=performance.now();try{let c=yield Promise.race([t(s),(0,l.BK)(r)]),d=n(c,s.promptBuilderOptions),m=a(c),{documentNumber:p}=m?Object.entries(m).reduce((e,[t,a])=>("number"==typeof a&&(e.documentNumber+=a),e),{documentNumber:0}):{documentNumber:0},f=performance.now()-u;return(0,i.y)("clientsideEvent",{eventType:"ConfigurableContextBuilding",eventName:`metrics-size-${e}`,lakesenseContextBuildingTime:f,lakesenseContextSize:d.length,lakesenseTraceId:s.lakesenseTraceId}),(0,o.Km)({event_type:o.FS.CONFIGURABLE_CONTEXT_BUILDING,event_name:`metrics-size-${e}`,assistant_context:{context_building_time_ms:f,context_size:d.length},lakesense_trace_id:s.lakesenseTraceId}),(0,i.y)("clientsideEvent",{eventType:"ConfigurableContextBuilding",eventName:`metrics-documents-${e}`,lakesenseContextBuildingTime:f,lakesenseContextSize:p,lakesenseTraceId:s.lakesenseTraceId}),(0,o.Km)({event_type:o.FS.CONFIGURABLE_CONTEXT_BUILDING,event_name:`metrics-documents-${e}`,assistant_context:{context_building_time_ms:f,context_size:p},lakesense_trace_id:s.lakesenseTraceId}),{prompt:d,contextMetadata:m,rawContext:c}}catch(a){let t=e;return a?.message===l.t4&&(t+="-timeout"),(0,l.E8)(e,{eventName:t}),{prompt:""}}})()},270343:(e,t,a)=>{a.d(t,{c:()=>r});var n=a(200356);function r(){return new Set([n.xS5.email,n.xS5.slack,n.xS5.microsoft_teams])}},272285:(e,t,a)=>{a.d(t,{$g:()=>h,DZ:()=>T,QJ:()=>E,Th:()=>b,Ul:()=>g});var n=a(141078);let r=(0,n.J1)`
  fragment DiscoverSearchResultTitleData on SearchmidtierSearchUnifiedResult {
    name
    updatedAt
  }
`,i=(0,n.J1)`
  fragment DiscoverSearchResultOwnerData on SearchmidtierSearchUnifiedResult {
    owner {
      id
      fullname
      email
    }
    ownerId
  }
`,o=(0,n.J1)`
  fragment DiscoverSearchResultDescriptionData on SearchmidtierSearchUnifiedResult {
    description
    ucEntityMetadata {
      comments
    }
    dataRoom {
      description
    }
  }
`,s=(0,n.J1)`
  fragment DiscoverSearchResultIconData on SearchmidtierSearchUnifiedResult {
    resultType
    browseOnly
    ucEntityMetadata {
      securableKind
    }
  }
`,l=(0,n.J1)`
  fragment DiscoverSearchResultPopularityData on SearchmidtierSearchUnifiedResult {
    popularity {
      bucket
      count
    }
    liveUsageInfo {
      bucket
      count
    }
    resultType
  }
`,u=(0,n.J1)`
  fragment DiscoverSearchResultTableLocationData on SearchmidtierSearchUnifiedResult {
    ucEntityMetadata {
      catalogName
      schemaName
    }
  }
`,c=(0,n.J1)`
  fragment DiscoverSearchResultWorkspaceFullPathData on SearchmidtierSearchUnifiedResult {
    treeNode {
      fullPath
      id
      parent {
        id
      }
    }
  }
`,d=(0,n.J1)`
  fragment DiscoverSearchResultUrlData on SearchmidtierSearchUnifiedResult {
    id
    resultType
    name
    ucEntityMetadata {
      catalogName
      schemaName
    }
  }
`,m=(0,n.J1)`
  fragment DiscoverSearchResultThumbnailData on SearchmidtierSearchUnifiedResult {
    id
    name
    resultType
    thumbnailUrl(uiMode: $uiMode)
  }
`,p=(0,n.J1)`
  fragment DiscoverSearchResultTagsData on SearchmidtierSearchUnifiedResult {
    tags {
      name
      value
    }
  }
`,f=(0,n.J1)`
  fragment DiscoverSearchResultFavoriteStatusData on SearchmidtierSearchUnifiedResult {
    userActivityInfo {
      assetType
      assetId
      isFavorite
    }
  }
`,g=(0,n.J1)`
  fragment DiscoverSearchResultAllAssetData on SearchmidtierSearchUnifiedResult {
    id
    ...DiscoverSearchResultTitleData
    ...DiscoverSearchResultDescriptionData
    ...DiscoverSearchResultTagsData
    ...DiscoverSearchResultIconData
    ...DiscoverSearchResultFavoriteStatusData
    ...DiscoverSearchResultUrlData
  }
  ${r}
  ${o}
  ${p}
  ${s}
  ${f}
  ${d}
`,h=(0,n.J1)`
  fragment DiscoverSearchResultData on SearchmidtierSearchUnifiedResult {
    id
    ...DiscoverSearchResultTitleData
    ...DiscoverSearchResultOwnerData
    ...DiscoverSearchResultIconData
    ...DiscoverSearchResultDescriptionData
    ...DiscoverSearchResultPopularityData
    ...DiscoverSearchResultTableLocationData
    ...DiscoverSearchResultWorkspaceFullPathData
    ...DiscoverSearchResultUrlData
    ...DiscoverSearchResultThumbnailData
    ...DiscoverSearchResultTagsData
    ...DiscoverSearchResultFavoriteStatusData
  }
  ${r}
  ${i}
  ${s}
  ${o}
  ${l}
  ${u}
  ${c}
  ${d}
  ${m}
  ${p}
  ${f}
`,E=(0,n.J1)`
  fragment DiscoverSearchResultUcData on SearchmidtierSearchUnifiedResult {
    id
    ...DiscoverSearchResultTitleData
    ...DiscoverSearchResultOwnerData
    ...DiscoverSearchResultIconData
    ...DiscoverSearchResultDescriptionData
    ...DiscoverSearchResultPopularityData
    ...DiscoverSearchResultTableLocationData
    ...DiscoverSearchResultUrlData
    ...DiscoverSearchResultTagsData
    ...DiscoverSearchResultFavoriteStatusData
  }
  ${r}
  ${i}
  ${s}
  ${o}
  ${l}
  ${u}
  ${d}
  ${p}
  ${f}
`,b=(0,n.J1)`
  fragment DiscoverRecommendationAssetData on RecommendationAssetRecommendation {
    asset {
      name
      id
      type
      modifiedAt
      tags {
        tagName
        tagValue
      }
      unityCatalogSecurable {
        searchIndexData {
          description
          ownerId
          owner {
            fullname
            email
          }
        }
        securableKind
        fullName
        ... on UnityCatalogTable {
          id
          name
        }
      }
      treeNode {
        name
        fullPath
        owner {
          fullname
          email
        }
        ... on DataRoomTreeNode {
          id
          name
          dataRoom {
            description
          }
        }
      }
      userActivityInfo {
        assetType
        assetId
        popularity {
          bucket
          viewerCount
        }
      }
      owner {
        id
        fullname
        email
      }
    }
    relevanceReason {
      trendingMetadata {
        queryCount
        viewerCount
      }
      viewMetadata {
        viewFrequency
      }
      type
      relevanceTime
      description
    }
  }
`,T=(0,n.J1)`
  fragment DiscoverRecommendationAssetWithThumbnailData on RecommendationAssetRecommendation {
    ...DiscoverRecommendationAssetData
    asset {
      thumbnailUrl(uiMode: $uiMode)
    }
  }
  ${b}
`},274254:(e,t,a)=>{a.d(t,{p:()=>u});var n=a(348844),r=a(253171),i=a(178808),o=a(779862),s=a(329881),l=a(749850);function u(e){let t=(0,n.wk)(e),{options:a,columns:u,defaultNameMap:c,getSeriesOptionsForColumn:d,specType:m}=e;if((0,l.$V)(a))throw Error(l.jq);let{columnConfigurationMap:p,globalSeriesType:f,xAxis:g,hideXAxis:h,yAxis:E,hideYAxes:b,alignYAxesAtZero:T,seriesOptions:y,sortY:I,sortX:A,reverseX:v,keepNullOnX:S}=a,_=(0,n.OK)({x:p.x||void 0,columns:u,globalSeriesType:f,xAxis:g,hideXAxis:h,sortX:A,reverseX:v,keepNullOnX:S,defaultNameMap:c,specType:m}),C=!1===a.useAggregationsUi?{fn:"sum"}:void 0;return{y:function({sortedY:e,seriesOptions:t,yAxis:a=[],hideYAxes:n,alignYAxesAtZero:u,sortY:c,defaultTransform:d,globalSeriesType:m,getSeriesOptionsForColumn:p,specType:f}){let g={column:[],line:[]},h={0:!1,1:!1},E={column:new Set,line:new Set};for(let a=0;a<e.length;a++){let n=e[a],r=p(t||{},n),{yAxis:o=0,name:u}=r,c=r.type??(0,s.H)({globalSeriesType:m,zIndex:a});if("column"===c||"line"===c)g[c].push((0,i.V)({columnConfig:n,defaultTransform:d,...u?{displayName:u}:{},specType:f})),h[o]=!0,E[c].add(o);else throw Error((0,l.Sb)(c))}let{column:b,line:T}=g,y=+!E.column.has(0),I=(0,r.C)({hideAxis:n,title:a[y]?.title?.text??void 0}),A=+!!E.line.has(1),v=(0,r.C)({hideAxis:n,title:a[A]?.title?.text??void 0});if(h[0]&&h[1]&&y!==A){let e={fields:b,scale:(0,o.fl)({yAxis:a[y]}),...I?{axis:I}:{}},t={fields:T,scale:(0,o.fl)({yAxis:a[A]}),...v?{axis:v}:{}},n=0===y?{primary:e,secondary:t}:{primary:{...t,visual:"line"},secondary:{...e,visual:"bar"}};return void 0!==u&&(n.alignAxesAtZero=u),n}{let e=I||h[1]?{...I,...h[1]?{position:"secondary"}:{}}:void 0;return{primary:{fields:b},secondary:{fields:T},scale:(0,o.fl)({fn:a?.[y]?.type==="logarithmic"?{type:"log"}:void 0,yAxis:a?.[y]}),...e?{axis:e}:{}}}}({sortedY:(0,n.SB)(p.y,y,d),seriesOptions:y,yAxis:E,hideYAxes:b,alignYAxesAtZero:T,sortY:I,defaultTransform:C,globalSeriesType:f,getSeriesOptionsForColumn:d,specType:m}),..._?{x:_}:{},...t}}},275750:(e,t,a)=>{a.d(t,{d:()=>o,u:()=>i});var n=a(610435),r=a(692738);let i=r.createContext({sections:[]}),o=({name:e,children:t})=>{let{sections:a}=(0,r.useContext)(i),o=(0,r.useMemo)(()=>[...a,e],[e,a]);return(0,n.Y)(i.Provider,{value:{sections:o},children:t})}},279942:(e,t,a)=>{a.d(t,{k:()=>n});function n(e){return[".py",".sql"].includes(e.toLocaleLowerCase())}},280967:(e,t,a)=>{a.d(t,{O:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.visualizations.enableSelectionsApplyMode",!1)}},283009:(e,t,a)=>{a.d(t,{a:()=>s});var n=a(610435);a(692738);var r=a(79128),i=a(79570),o=a(180864);function s({buttonProps:e,componentId:t,copyText:a,copyTooltip:l,isInsideInputGroup:u=!1,onCopy:c,tooltipProps:d}){let{actionIcon:m,copy:p,handleTooltipOpenChange:f,tooltipOpen:g,tooltipMessage:h}=(0,o.L)(a,l,c),E=(0,n.Y)(r.$n,{"aria-label":h,componentId:t,icon:m,onClick:p,size:"small",...e}),b=(0,n.Y)(r.$n,{"aria-label":h,componentId:t,onClick:p,...e,children:m});return(0,n.Y)(i.m,{componentId:`${t}-tooltip`,content:h,onOpenChange:f,open:g,...d,children:u?b:E})}},284336:(e,t,a)=>{a.d(t,{m:()=>i});let n=["(",")",",",".","=","*","<IDENT>","<IDENT> <IDENT>","<IDENT> <IDENT> <IDENT>","<IDENT> . <IDENT>","<IDENT> . <IDENT> . <IDENT>","<IDENT> , <IDENT>","<IDENT> = <IDENT>","<IDENT> ( <IDENT>","<IDENT> ( <IDENT> )","<STRING>","<NUMBER>","= <STRING>","= <NUMBER>",", <STRING>",", <NUMBER>","( <STRING>","( <NUMBER>","( <STRING> )","( <NUMBER> )","SELECT *","SELECT <IDENT>","FROM <IDENT>","WHERE <IDENT>","AND <IDENT>","OR <IDENT>","SELECT * FROM","SELECT * FROM <IDENT>","FROM <IDENT> WHERE","WHERE <IDENT> =","WHERE <IDENT> = <STRING>","WHERE <IDENT> = <NUMBER>","SELECT <NUMBER>","SELECT * FROM <IDENT> . <IDENT> . <IDENT> WHERE <IDENT> = <STRING>","SELECT * FROM <IDENT> . <IDENT> . <IDENT>","<IDENT> . <IDENT> WHERE <IDENT> = <STRING> AND <IDENT>","WITH <IDENT>","WITH <IDENT> AS","WITH <IDENT> AS (","AS ( SELECT",") SELECT *",") SELECT * FROM"],r=new Set(["ACCESS","ACTION","ADD","AFTER","AGGREGATE","ALL","ALTER","ALWAYS","ANALYZE","AND","ANONYMOUS","ANTI","ANY","ANY_VALUE","APPLY","ARCHIVE","ARCHIVED","ARRAY","AS","ASC","ASYNC","AT","ATOMIC","AUTHORIZATION","AUTO","AUTOCLUSTERINGPROFILE","AUTOCLUSTERINGUPDATE","BEGIN","BETWEEN","BIGINT","BINARY","BINDING","BLOOMFILTER","BOOLEAN","BOTH","BUCKET","BUCKETS","BY","BYTE","CACHE","CALL","CALLED","CASCADE","CASE","CAST","CATALOG","CATALOGS","CDC","CHANGE","CHANGES","CHAR","CHARACTER","CHECK","CHECKPOINT","CLEANROOM","CLEANROOMS","CLEAR","CLONE","CLOUD","CLUSTER","CLUSTERED","CODE","CODEGEN","COLLABORATORS","COLLATE","COLLATION","COLLECT","COLLECTION","COLUMN","COLUMNS","COMMENT","COMMIT","COMPACT","COMPACTIONS","COMPENSATION","COMPUTE","CONCATENATE","CONDITION","CONDITION_IDENTIFIER","CONSTRAINT","CONSTRAINTS","CONTAINS","CONTINUE","CONVERT","COPY","COPY_OPTIONS","COST","CREATE","CREDENTIAL","CREDENTIALS","CRON","CROSS","CUBE","CURRENT","CURRENT_DATE","CURRENT_RECIPIENT","CURRENT_TIME","CURRENT_TIMESTAMP","CURRENT_USER","DATA","DATABASE","DATABASES","DATE","DATEADD","DATEDIFF","DATE_ADD","DATE_DIFF","DAY","DAYOFYEAR","DAYS","DBFS","DBPROPERTIES","DEC","DECIMAL","DECLARE","DEEP","DEFAULT","DEFERRABLE","DEFERRED","DEFINED","DEFINER","DELAY","DELETE","DELIMITED","DELTA","DENY","DESC","DESCRIBE","DETAIL","DETERMINISTIC","DFS","DIAGNOSTICS","DIRECTORIES","DIRECTORY","DISABLE","DISTINCT","DISTRIBUTE","DIV","DO","DOUBLE","DROP","DROPPED","DRY","EFFECTIVE","ELSE","ELSEIF","ENABLE","ENCRYPTION","END","ENFORCED","ENVIRONMENT","ESCAPE","ESCAPED","EVERY","EVOLUTION","EXCEPT","EXCHANGE","EXCLUDE","EXECUTE","EXISTS","EXIT","EXPECT","EXPIRATION","EXPLAIN","EXPORT","EXTEND","EXTENDED","EXTERNAL","EXTRACT","FAIL","FALSE","FEATURE","FEED","FETCH","FIELDS","FILE","FILEFORMAT","FILES","FILTER","FIRST","FLAMEGRAPH","FLOAT","FLOW","FN","FOLLOWING","FOR","FORCE","FOREIGN","FORMAT","FORMATTED","FORMAT_OPTIONS","FOUND","FRAME","FROM","FSCK","FULL","FUNCTION","FUNCTIONS","GENERATE","GENERATED","GEOGRAPHY","GEOMETRY","GET","GLOBAL","GRANT","GRANTS","GROUP","GROUPING","GROUPS","HANDLER","HAVING","HISTORY","HOUR","HOURS","ICEBERG_COMPAT_VERSION","ID","IDENTIFIER","IDENTITY","IF","IGNORE","ILIKE","IMMEDIATE","IMPORT","IN","INCLUDE","INCREMENT","INCREMENTAL","INDEX","INDEXES","INHERIT","INITIALLY","INNER","INOUT","INPATH","INPUT","INPUTFORMAT","INSERT","INT","INTEGER","INTERSECT","INTERVAL","INTO","INVENTORY","INVOKER","IS","ISOLATION","ITEMS","ITERATE","JOIN","JSON","KEY","KEYS","LANGUAGE","LAST","LATERAL","LAZY","LEADING","LEAVE","LEFT","LEVEL","LIKE","LIMIT","LINES","LINE_NUMBER","LIST","LITE","LIVE","LOAD","LOCAL","LOCATION","LOCATIONS","LOCK","LOCKS","LOGICAL","LONG","LOOP","MACRO","MANAGED","MAP","MASK","MATCH","MATCHED","MATERIALIZED","MAX","MERGE","MESSAGE_ARGUMENTS","MESSAGE_TEXT","METADATA","METADATA_PATH","METASTORE","METRIC","METRICS","MICROSECOND","MICROSECONDS","MILLISECOND","MILLISECONDS","MINUS","MINUTE","MINUTES","MODEL","MODIFIES","MONTH","MONTHS","MOST","MSCK","NAME","NAMESPACE","NAMESPACES","NANOSECOND","NANOSECONDS","NATURAL","NO","NONE","NORELY","NOT","NOVALIDATE","NULL","NULLS","NUMERIC","OF","OFFSET","ON","ONCE","ONLY","OPTIMIZATION","OPTIMIZE","OPTION","OPTIONS","OR","ORDER","OUT","OUTER","OUTPUTFORMAT","OVER","OVERLAPS","OVERLAY","OVERWRITE","OWNER","PARAMETER","PARTIAL","PARTITION","PARTITIONED","PARTITIONS","PATTERN","PERCENT","PIVOT","PLACING","POINT","POLICIES","POLICY","POSITION","PRECEDING","PREDICTIVE","PRESERVE","PRIMARY","PRINCIPALS","PRIVATE","PRIVILEGES","PROCEDURE","PROCEDURES","PROFILER","PROPERTIES","PROVIDER","PROVIDERS","PURGE","PUT","QUALIFY","QUARTER","QUERY","RANGE","READS","REAL","RECIPIENT","RECIPIENTS","RECORDREADER","RECORDWRITER","RECOVER","RECURSION","RECURSIVE","REDUCE","REFERENCES","REFRESH","REGION","RELY","REMOVE","RENAME","REORG","REPAIR","REPEAT","REPEATABLE","REPLACE","REPLICAS","RESET","RESIGNAL","RESOLVE","RESPECT","RESTORE","RESTRICT","RETAIN","RETURN","RETURNED_SQLSTATE","RETURNS","REVOKE","RIGHT","ROLE","ROLES","ROLLBACK","ROLLUP","ROW","ROWS","RUN","SAMPLE","SCHEDULE","SCHEMA","SCHEMAS","SECOND","SECONDS","SECURITY","SELECT","SEMI","SEPARATED","SEQUENCE","SERDE","SERDEPROPERTIES","SERVICE","SESSION_USER","SET","SETS","SHALLOW","SHARE","SHARES","SHORT","SHOW","SHRED","SIGNAL","SIMPLE","SINGLE","SKEWED","SMALLINT","SNAPSHOT","SOME","SORT","SORTED","SOURCE","SPECIFIC","SQL","SQLEXCEPTION","SQLSTATE","START","STATISTICS","STORAGE","STORED","STRATIFY","STREAM","STREAMING","STRICT","STRING","STRUCT","STYLE","SUBSTR","SUBSTRING","SYNC","SYSTEM_TIME","SYSTEM_VERSION","TABLE","TABLES","TABLESAMPLE","TAG","TAGS","TARGET","TBLPROPERTIES","TERMINATED","THEN","TIME","TIMEDIFF","TIMESERIES","TIMESTAMP","TIMESTAMPADD","TIMESTAMPDIFF","TIMESTAMP_LTZ","TIMESTAMP_NTZ","TINYINT","TO","TOUCH","TRACK","TRAILING","TRANSACTION","TRANSACTIONS","TRANSFORM","TRIGGER","TRIM","TRUE","TRUNCATE","TRY_CAST","TYPE","UNARCHIVE","UNBOUNDED","UNCACHE","UNDROP","UNIFORM","UNION","UNIQUE","UNKNOWN","UNLOCK","UNPIVOT","UNSET","UNSHRED","UNTIL","UPDATE","UPDATES","UPGRADE","URL","USE","USER","USERS","USING","VACUUM","VALIDATE","VALUE","VALUES","VAR","VARCHAR","VARIABLE","VARIANT","VERSION","VIEW","VIEWS","VIOLATION","VOID","VOLUME","VOLUMES","WATERMARK","WEEK","WEEKS","WHEN","WHERE","WHILE","WINDOW","WITH","WITHIN","WITHOUT","WORK","X","YEAR","YEARS","ZONE","ZORDER"]);function i(e,t,a=2){let o=new Map;e.forEach((e,a)=>{let n=function(e,t=""){let a=[];return!function e(n,i=0){if(!n||"symbol"in n)return;let{standardizedForm:o,size:s}=function e(t){if(!t||"symbol"in t)return{standardizedForm:["TOKEN"],size:1};if("children"in t&&t.children){let a=t.children.filter(e=>null!==e).map(t=>e(t)),n=1+a.reduce((e,t)=>e+t.size,0);return{standardizedForm:[t.constructor.name.replace(/Context$/,""),...a.flatMap(e=>e.standardizedForm)],size:n}}return{standardizedForm:["TOKEN"],size:1}}(n),l="";try{(l=(l=function e(t){if(!t)return"";if("symbol"in t&&t.symbol){let e=t.symbol.text||"";if(!e)return"";let a=e.toUpperCase();if(r.has(a))return a;if(e.match(/^['"].*['"]$/))return"<STRING>";if(e.match(/^\d+(\.\d+)?$/))return"<NUMBER>";if(e.match(/^[a-zA-Z_][a-zA-Z0-9_]*$/)||e.match(/^`[^`]*`$/))return"<IDENT>";return e}if("children"in t&&Array.isArray(t.children))return t.children.filter(e=>null!==e).map(t=>e(t)).filter(e=>e&&e.trim()).join(" ");return""}(n)).replace(/<EOF>/g,"").replace(/\s+/g," ").trim()).length>200&&(l=l.substring(0,197)+"...")}catch(e){l=""}let u={standardizedForm:o,count:1,queries:[t],size:s,exampleText:l};a.push(u),"children"in n&&n.children&&n.children.filter(e=>null!==e).forEach(t=>e(t,i+1))}(e),a}(e,t[a]||"Query not available"),i=new Map;n.forEach(e=>{let t=JSON.stringify(e.standardizedForm);i.has(t)||i.set(t,e)}),i.forEach(e=>{let t=JSON.stringify(e.standardizedForm),a=o.get(t);a?(a.count++,a.queries.length<3&&!a.queries.includes(e.queries[0])&&(a.queries.push(e.queries[0]),!a.exampleText&&e.exampleText&&(a.exampleText=e.exampleText))):o.set(t,{...e})})});let s=Array.from(o.values());return(s=function(e,t){let a=[...e.filter(e=>{if(e.count<t||e.size<=1||1===e.standardizedForm.length&&"TOKEN"===e.standardizedForm[0])return!1;if(e.exampleText){var a;if(a=e.exampleText,n.some(e=>e.length>=a.length&&e.includes(a))||!e.exampleText.includes(" "))return!1}return!0})].sort((e,t)=>e.size-t.size),r=[];for(let e of a)r.some(t=>(function(e,t){if(JSON.stringify(e.standardizedForm)===JSON.stringify(t.standardizedForm)||e.size>=t.size)return!1;if(function(e,t){let a=0;for(let n=0;n<t.length&&a<e.length;n++)t[n]===e[a]&&a++;return a===e.length}(e.standardizedForm,t.standardizedForm))return!0;return!1})(t,e))||r.push(e);return r}(s,a)).sort((e,t)=>{if(t.count!==e.count)return t.count-e.count;let a=Math.abs(e.size-7),n=Math.abs(t.size-7);if(a!==n)return a-n;if(e.exampleText&&!t.exampleText)return -1;if(!e.exampleText&&t.exampleText)return 1;if(e.standardizedForm.length!==t.standardizedForm.length)return e.standardizedForm.length-t.standardizedForm.length;return 0})}},287393:(e,t,a)=>{a.d(t,{JB:()=>s,aZ:()=>u,fg:()=>l});var n=a(141078),r=a(831358),i=a(659789);let o=(0,n.J1)`
  fragment ResetRunAsJob on Job {
    id
    runAsUserName
    runAsOwner
    runAsUser {
      ...RichUserData
    }
    runAsPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
      ...AclPrincipalData
    }
    effectiveUsagePolicyId
      @includeSafex(name: "databricks.elasticspark.budgetpolicies.enableUsagePoliciesInJobs", defaultValue: false)
    settings {
      name
      usagePolicyId
      tasks {
        taskKey
      }
      gitSource {
        gitProvider
      }
    }
    creator {
      name
    }
  }

  ${r.j}
  ${r.E}
`,s=(0,n.J1)`
  mutation JobResetRunAsAutogen($input: JobsUpdateJobInput!) @component(name: "Workflows.Orchestration.Other") {
    updateAndGetJob(input: $input) {
      apiError {
        ...ApiErrorFields
      }
      job {
        ...ResetRunAsJob
      }
    }
  }
  ${i.n}
  ${o}
`,l=(0,n.J1)`
  fragment JobConfigRunAs on Job {
    id
    runAsUserName
    runAsUser {
      ...RichUserData
    }
    runAsPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
      ...AclPrincipalData
    }
    runAsOwner
    effectiveUsagePolicyId
      @includeSafex(name: "databricks.elasticspark.budgetpolicies.enableUsagePoliciesInJobs", defaultValue: false)
    settings {
      name
      usagePolicyId
      tasks {
        taskKey
      }
      gitSource {
        gitProvider
      }
    }
    creator {
      name
    }
  }
  ${r.j}
  ${r.E}
`,u=(0,n.J1)`
  fragment JobDescription on JobSettings {
    description
  }
`},287578:(e,t,a)=>{a.d(t,{Jy:()=>o,QG:()=>d,b7:()=>l,pW:()=>u,wz:()=>s});var n,r,i=a(171989),o=((n={}).Argument="#b08b71",n.Catalog="#565189",n.Column="#2fae2f",n.Database="#517989",n.Files="#9e1414",n.IdentCteVar="#ca4f01",n.Keyword="#0074d2",n.Popular="#61bbff",n.User="#61bbff",n.UserGroup="#61bbff",n.Sample="#fea7a7",n.Snippet="#f2e76b",n.Table="#ffa139",n.Function="#acfbac",n),s=((r={}).All="All",r.Asterisk="Asterisk",r.ColRefKeyword="ColRefKeyword",r.Column="Column",r.CTE="CTE",r.Catalog="Catalog",r.Database="Database",r.User="User",r.UserGroup="UserGroup",r.Files="Files",r.Identifier="Identifier",r.Keyword="Keyword",r.Option="Option",r.Popular="Popular",r.PopularAggregate="PopularAggregate",r.PopularFilter="PopularFilter",r.PopularGroupBy="PopularGroupBy",r.DiscoveryJoin="JoinsDiscovery",r.FKJoin="JoinsFKs",r.FKJoinCondition="JoinsFKsCondition",r.PopularOrderBy="PopularOrderBy",r.PopularQuery="PopularQuery",r.PopularTable="PopularTable",r.Sample="Sample",r.Snippet="Snippet",r.Table="Table",r.Function="Function",r.FunctionDescription="FunctionDescription",r.FunctionArgument="FunctionArgument",r.Variable="Variable",r.VirtualColumn="VirtualColumn",r.Location="Location",r.StorageCredential="StorageCredential",r);let l={All:{categoryId:"All",color:"#90ceff",label:(0,i.A)("All")},Asterisk:{categoryId:"Asterisk",detailsComponent:"AsteriskPanel",color:"#0074d2",label:(0,i.A)("Asterisk"),weight:1e3},Catalog:{categoryId:"Catalog",color:"#565189",label:(0,i.A)("Catalogs"),weight:450},ColRefKeyword:{categoryId:"ColRefKeyword",color:"#0074d2",label:(0,i.A)("Keywords"),weight:100},Column:{categoryId:"Column",color:"#2fae2f",label:(0,i.A)("Columns"),weight:1e3},CTE:{categoryId:"CTE",color:"#ca4f01",label:(0,i.A)("CTEs"),weight:750},Database:{categoryId:"Database",color:"#517989",label:(0,i.A)("Databases"),weight:500},User:{categoryId:"User",color:"#61bbff",label:(0,i.A)("Users"),weight:900},UserGroup:{categoryId:"UserGroup",color:"#61bbff",label:(0,i.A)("User Groups"),weight:950},Files:{categoryId:"Files",color:"#9e1414",label:(0,i.A)("Files"),weight:300},Identifier:{categoryId:"Identifier",color:"#ca4f01",label:(0,i.A)("Identifiers"),weight:800},Keyword:{categoryId:"Keyword",color:"#0074d2",detailsComponent:"DocsDetailsPanel",label:(0,i.A)("Keywords"),weight:0},Option:{categoryId:"Option",color:"#acfbac",detailsComponent:"OptionDetailsPanel",label:(0,i.A)("Options"),weight:400},Popular:{categoryId:"Popular",color:"#61bbff",label:(0,i.A)("Popular"),popular:!0},PopularAggregate:{categoryId:"PopularAggregate",color:"#61bbff",detailsComponent:"PopularAggregateUdfPanel",label:(0,i.A)("Popular"),popular:!0,weight:1500},PopularFilter:{categoryId:"PopularFilter",color:"#61bbff",label:(0,i.A)("Popular"),detailsComponent:"PopularDetailsPanel",popular:!0,weight:1400},PopularGroupBy:{categoryId:"PopularGroupBy",color:"#61bbff",detailsComponent:"PopularDetailsPanel",label:(0,i.A)("Popular"),popular:!0,weight:1300},DiscoveryJoin:{categoryId:"JoinsDiscovery",color:"#61bbff",detailsComponent:"PopularDetailsPanel",label:(0,i.A)("Popular"),weight:1500},FKJoin:{categoryId:"JoinsFKs",color:"#61bbff",detailsComponent:"PopularDetailsPanel",label:(0,i.A)("Popular"),weight:1500},FKJoinCondition:{categoryId:"JoinsFKsCondition",color:"#61bbff",detailsComponent:"PopularDetailsPanel",label:(0,i.A)("Popular"),popular:!0,weight:1500},PopularOrderBy:{categoryId:"PopularOrderBy",color:"#61bbff",detailsComponent:"PopularDetailsPanel",label:(0,i.A)("Popular"),popular:!0,weight:1200},PopularQuery:{categoryId:"PopularQuery",color:"#61bbff",detailsComponent:"PopularDetailsPanel",label:(0,i.A)("Popular"),popular:!0,weight:1300},PopularTable:{categoryId:"PopularTable",color:"#ffa139",label:(0,i.A)("Tables"),popular:!0,weight:700},Sample:{categoryId:"Sample",color:"#fea7a7",label:(0,i.A)("Samples"),weight:900},Snippet:{categoryId:"Snippet",detailsComponent:"SnippetDetailsPanel",color:"#f2e76b",label:(0,i.A)("Snippet"),weight:-100},Table:{categoryId:"Table",color:"#ffa139",label:(0,i.A)("Tables"),weight:600},Function:{categoryId:"Function",detailsComponent:"FunctionDetailsPanel",color:"#acfbac",label:(0,i.A)("Functions"),weight:400},FunctionDescription:{categoryId:"FunctionDescription",detailsComponent:"FunctionDetailsPanel",color:"#acfbac",label:(0,i.A)("Functions"),weight:1e6},FunctionArgument:{categoryId:"FunctionArgument",color:"#b08b71",label:(0,i.A)("Functions"),weight:401},Variable:{categoryId:"Variable",color:"#ca4f01",label:(0,i.A)("Variables"),weight:50},VirtualColumn:{categoryId:"VirtualColumn",color:"#2fae2f",label:(0,i.A)("Columns"),weight:200},Location:{categoryId:"Location",color:"#ca4f01",detailsComponent:"ExternalLocationDetailsPanel",label:(0,i.A)("Locations"),weight:200},StorageCredential:{categoryId:"StorageCredential",color:"#9e1414",label:(0,i.A)("Credentials"),detailsComponent:"StorageCredentialDetailsPanel",weight:200}},u=e=>"JoinsDiscovery"===e.categoryId||"JoinsFKs"===e.categoryId,c=["Table","Column","Function","Snippet","Location","StorageCredential"],d=e=>{let t=new Set;e.forEach(e=>{e.popular?t.add(l.Popular):c.includes(e.category.categoryId)&&t.add(e.category)});let a=[...t];return a.sort((e,t)=>e.label.localeCompare(t.label)),a.unshift(l.All),a}},289025:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.5 0v2H1.75a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75H6v-1.5H2.5V7H15V2.75a.75.75 0 0 0-.75-.75H11.5V0H10v2H6V0zm9 5.5v-2h-11v2z",clipRule:"evenodd"}),(0,n.Y)("path",{fill:"currentColor",d:"M10.25 10.5V12c0 .199.079.39.22.53l1 1 1.06-1.06-.78-.78V10.5z"}),(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M7 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5",clipRule:"evenodd"})]})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CalendarClockIcon";let l=s},290018:(e,t,a)=>{a.d(t,{O:()=>d});var n=a(893779),r=a(441535),i=a(886100),o=a(22191),s=a(747129),l=a(522317),u=a(915679);let c={experiment_type:"user",treatments:[{experiment_percentage:100,model_priority:["claude-4-6-opus","claude-4-5-opus","claude-4-5-sonnet","claude-4-sonnet","gpt-41-2025-04-14","o3-2025-04-16"]}]};class d extends n.N{version=1;modelMetadata=c;possibleModelMetadata="";constructor(e,t){super(e),this.version=t??this.version}isConversationExperiment(){return this.updatePossibleModelMetadata(),"conversation"===this.modelMetadata.experiment_type}updatePossibleModelMetadata(){if(this.possibleModelMetadata=(0,r.W)("databricks.fe.editor.assistantExperiment.agentModelPriority",""),this.possibleModelMetadata)try{this.modelMetadata=JSON.parse(this.possibleModelMetadata)}catch(e){i.iT.sev2BurnRate(o.Es.Assistant,"Failed to parse Agent Mode Model Priority experiment metadata",s.i1.P99,s.Ip.Min10,!1,e)}}get SamplingPercentage(){return this.updatePossibleModelMetadata(),this.modelMetadata.treatments.reduce((e,t)=>e+t.experiment_percentage,0)}get ExperimentName(){return"agentModeModelPriority"}get ExperimentId(){return`${this.ExperimentName}-v${this.version}`}IsValidParticipant(){return!0}IsExperimentEnabled(){return this.SamplingPercentage>0}randomFunction(e){if("user"===this.modelMetadata.experiment_type)return this.getRandomNumberFromUserIdAndExperiment(this.ExperimentId);if("session"===this.modelMetadata.experiment_type)return this.getBrowserSession(this.ExperimentId);if("conversation"!==this.modelMetadata.experiment_type)return this.getRandomNumber();if(e)return(0,u.YZ)(e+this.ExperimentId);return this.getRandomNumberFromUserIdAndExperiment(this.ExperimentId)}LogExperiment(e){if(this.IsExperimentEnabled()){let t=l.A.get(this.ExperimentId)?.session_id??this.getRandomSession().toString();(0,u.ZA)({experimentId:this.ExperimentId,lakesenseSessionId:t,...e})}}getModelPriority(e){let t=[];if(this.IsExperimentEnabled()&&this.IsValidParticipant()){let a=0,n=this.randomFunction(e);for(let e of this.modelMetadata.treatments)if(n<(a+=e.experiment_percentage)){t=e.model_priority;break}}return t}}},291589:(e,t,a)=>{a.d(t,{j$:()=>o});var n=a(692738),r=a(772404),i=a(548073);function o({previewStatus:e}){let t=(0,i.Fl)("new-charts-preview-auto-removal"),a=(0,n.useCallback)(()=>{(0,i.rk)(t)},[t]),s=(0,n.useMemo)(()=>(function(e){let{lastSeenTime:t}=(0,i.di)(e);if(void 0===t)return(0,i.rk)(e),!1;return(0,r.s)(t,14)})(t),[t]);return{isAutoRemoved:"active"===e&&s,setLastUsageTime:a}}},294703:(e,t,a)=>{a.d(t,{g:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enableApplyModeDeferSetSelfOriginal",!1)}},296027:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M9.49.04a.75.75 0 0 1 .51.71V6h3.25a.75.75 0 0 1 .596 1.206l-6.5 8.5A.75.75 0 0 1 6 15.25V10H2.75a.75.75 0 0 1-.596-1.206l6.5-8.5A.75.75 0 0 1 9.491.04M4.269 8.5H6.75a.75.75 0 0 1 .75.75v3.785L11.732 7.5H9.25a.75.75 0 0 1-.75-.75V2.965z",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="LightningIcon";let l=s},301171:(e,t,a)=>{a.d(t,{v:()=>u});var n=a(610435);a(692738);var r=a(382908),i=a(342411),o=a(853762),s=a(771994),l=a(214060);let u={noMoreResultsPleaseNarrowSearch:(0,n.Y)(i.sA,{id:"EXxUmv",defaultMessage:"Not the results you expected? Try using different keywords, checking for typos, or adjusting filters."}),schemaFilterError:(0,n.Y)(i.sA,{id:"ioUsml",defaultMessage:"Error loading schemas"}),catalogFilterError:(0,n.Y)(i.sA,{id:"g9VKGo",defaultMessage:"Error loading catalogs"}),tagFilterError:(0,n.Y)(i.sA,{id:"BAVUZT",defaultMessage:"Error loading tags"}),typeForMoreUsers:e=>(0,n.Y)(i.sA,{id:"JAa9+n",defaultMessage:"The first {count} users are displayed. Search to narrow results.",values:{count:e}}),modalTitle:(0,n.Y)(i.sA,{id:"wALXhh",defaultMessage:"Search"}),searchBarSubmitButton:(0,n.Y)(i.sA,{id:"I2wVEx",defaultMessage:"Search"}),searchBarPlaceholder:(e,t)=>1===t.length?e.formatMessage({id:"InuxyD",defaultMessage:"Search for {fileType}"},{fileType:t[0]}):e.formatMessage({id:"eadQlj",defaultMessage:"Search for {firstFileType}, {secondFileType}, and more"},{firstFileType:t[0],secondFileType:t[1]}),searchMode:e=>e.formatMessage({id:"Gt2A4i",defaultMessage:"Search mode"}),semantic:e=>e.formatMessage({id:"wrfBCo",defaultMessage:"Semantic search"}),keyword:e=>e.formatMessage({id:"tZBt78",defaultMessage:"Keyword search"}),anytime:e=>e.formatMessage({id:"5my7Ui",defaultMessage:"Anytime"}),lastModified:e=>e.formatMessage({id:"CvWHjn",defaultMessage:"Last modified"}),last24hours:e=>e.formatMessage({id:"EA3yHn",defaultMessage:"Within 24 hours"}),last7days:e=>e.formatMessage({id:"fuQYvC",defaultMessage:"Within 7 days"}),last30days:e=>e.formatMessage({id:"Hb5Asz",defaultMessage:"Within 30 days"}),catalogLabel:e=>e.formatMessage({id:"LfFo2Z",defaultMessage:"Catalog"}),schemaLabel:e=>e.formatMessage({id:"MI82Ep",defaultMessage:"Schema"}),tagLabel:e=>e.formatMessage({id:"H1NmgQ",defaultMessage:"Tag"}),userLabel:(0,n.Y)(i.sA,{id:"XFerZS",defaultMessage:"Owner"}),partnerCategoryLabel:(0,n.Y)(i.sA,{id:"2k6uJ5",defaultMessage:"Categories"}),marketplaceCategoryLabel:(0,n.Y)(i.sA,{id:"f2vlXl",defaultMessage:"Categories"}),multipleSelectedUsersLabel:e=>(0,n.Y)(i.sA,{id:"EDAphJ",defaultMessage:"{count} users",values:{count:e}}),multipleSelectedCatalogsLabel:e=>(0,n.Y)(i.sA,{id:"sFdX5u",defaultMessage:"{count} catalogs",values:{count:e}}),multipleSelectedTagsLabel:e=>(0,n.Y)(i.sA,{id:"COBuf/",defaultMessage:"{count} tags",values:{count:e}}),multipleSelectedSchemasLabel:e=>(0,n.Y)(i.sA,{id:"N3koON",defaultMessage:"{count} schemas",values:{count:e}}),selected:(0,n.Y)(i.sA,{id:"oRK8zV",defaultMessage:"Selected"}),me:(0,n.Y)(i.sA,{id:"zv7JsD",defaultMessage:"Me"}),everyone:(0,n.Y)(i.sA,{id:"/Dq46W",defaultMessage:"Everyone"}),fileTypeLabel:(0,n.Y)(i.sA,{id:"aGb5NR",defaultMessage:"Type"}),multipleSelectedFileTypesLabel:e=>(0,n.Y)(i.sA,{id:"CfWj68",defaultMessage:"{count} types",values:{count:e}}),sort:e=>e.formatMessage({id:"zRqlun",defaultMessage:"Sort by"}),relevance:e=>e.formatMessage({id:"hiRkob",defaultMessage:"Most relevant"}),popularity:e=>e.formatMessage({id:"hyZsg/",defaultMessage:"Most popular"}),searchmidtierResultMessage:(e,t)=>{switch(t){case s.If.DOCUMENTATION:return e.formatMessage({id:"pu8E+G",defaultMessage:"Documents"});case s.If.PROJECT:return(0,l.Q)()?e.formatMessage({id:"m2VEDE",defaultMessage:"Git folders"}):e.formatMessage({id:"Vce5FG",defaultMessage:"Repos"});case s.If.FILE:return e.formatMessage({id:"P9WXfC",defaultMessage:"Files"});case s.If.FOLDER:return e.formatMessage({id:"ii5y22",defaultMessage:"Folders"});case s.If.LIBRARY:return e.formatMessage({id:"rVC3Xq",defaultMessage:"Libraries"});case s.If.TABLE:return e.formatMessage({id:"kNHLDl",defaultMessage:"Tables"});case s.If.METRIC_VIEW:return e.formatMessage({id:"fm8QIi",defaultMessage:"Metric views"});case s.If.VOLUME:return e.formatMessage({id:"AGr2pF",defaultMessage:"Volumes"});case s.If.FUNCTION:return e.formatMessage({id:"JhdnX6",defaultMessage:"Functions"});case s.If.NOTEBOOK:return e.formatMessage({id:"iIT2GO",defaultMessage:"Notebooks"});case s.If.MLFLOW_EXPERIMENT:return e.formatMessage({id:"PZyeta",defaultMessage:"Experiments"});case s.If.QUERY:return e.formatMessage({id:"r37QiN",defaultMessage:"Queries"});case s.If.ALERT:return e.formatMessage({id:"1PsxP7",defaultMessage:"Legacy Alerts"});case s.If.ALERT_V2:return e.formatMessage({id:"Fccfue",defaultMessage:"Alerts"});case s.If.PIPELINE:return e.formatMessage({id:"2JGQlt",defaultMessage:"Pipelines"});case s.If.DBSQL_DASHBOARD:return e.formatMessage({id:"InkkPP",defaultMessage:"Dashboards"});case s.If.JOB:return e.formatMessage({id:"gLNYHR",defaultMessage:"Jobs"});case s.If.ML_MODEL:return e.formatMessage({id:"6YNBeQ",defaultMessage:"Models"});case s.If.PARTNER:return e.formatMessage({id:"ai5xOS",defaultMessage:"Partners"});case s.If.MARKETPLACE:return e.formatMessage({id:"vrBCdZ",defaultMessage:"Marketplace"});case s.If.DATA_ROOM:return e.formatMessage({id:"GC9aHp",defaultMessage:"Genie spaces"});case s.If.ML_ENDPOINT:return e.formatMessage({id:"FJa/HC",defaultMessage:"Endpoints"});case s.If.CATALOG:case s.If.SCHEMA:case s.If.NAV_LINK:case s.If.APP:case s.If.DESIGNER_FILE:case s.If.LAKEWATCH_QUERY:return""}},clearNavigationalSearchInput:(0,n.Y)(i.sA,{id:"aqx4a0",defaultMessage:"Clear"}),resetFilters:(0,n.Y)(i.sA,{id:"xqIJoR",defaultMessage:"Reset filters"}),allTab:(0,n.Y)(i.sA,{id:"ZtTd77",defaultMessage:"All"}),viewAllResults:(0,n.Y)(i.sA,{id:"im2CfH",defaultMessage:"View all"}),viewAllResultsWithType:(e,t)=>e.formatMessage({id:"YUp8It",defaultMessage:"View all {fileType}"},{fileType:t}),defaultSearchError:(0,n.Y)(i.sA,{id:"LPHoZf",defaultMessage:"An error occurred while fetching search results. Please try again later."}),searchQueryTooLong:(0,n.Y)(i.sA,{id:"MZjOEX",defaultMessage:"The max allowed input length is {maxLength}. Please try again with a shortened search term.",values:{maxLength:100}}),noResults:(0,n.Y)(i.sA,{id:"69/sr2",defaultMessage:"No results matched your search."}),noQuery:(0,n.Y)(i.sA,{id:"Ds2vL2",defaultMessage:"Type in a query and press enter to search"}),lastModifiedTimeText:e=>(0,n.Y)(i.sA,{id:"CV9ZrO",defaultMessage:"modified {time}",values:{time:e}}),more:(0,n.Y)(i.sA,{id:"+PHNYN",defaultMessage:"More"}),unityCatalogUpgrade:(0,n.Y)(i.sA,{id:"A6Qlf7",defaultMessage:"Upgrade to Unity Catalog to search tables. Tables in the Hive Metastore aren't searchable."}),unityCatalogTables:(0,n.Y)(i.sA,{id:"oQI1QJ",defaultMessage:"Only showing results for tables in Unity Catalog. Tables in the Hive Metastore aren't searchable."}),ucModelNoResults:(0,n.Y)(i.sA,{id:"N1S9o+",defaultMessage:"No result matches were found for models in Unity Catalog."}),ucModelWorkspaceRedirect:e=>(0,n.Y)(i.sA,{id:"S1FQwL",defaultMessage:"To search for models in the current workspace, go to the <link>models page</link>.",values:{link:t=>(0,n.Y)(r.o.Link,{componentId:"codegen_webapp_js_search_v2search_i18n.tsx_424",href:e,children:t})}}),modelWorkspaceInfo:e=>(0,n.Y)(i.sA,{id:"1w6C0v",defaultMessage:"Only showing results for models in Unity Catalog. Search for models in the current workspace in the <link>workspace model registry</link>.",values:{link:t=>(0,n.Y)(r.o.Link,{componentId:"codegen_webapp_js_search_v2search_i18n.tsx_431",href:e,children:t})}}),jobId:e=>(0,n.Y)(i.sA,{id:"IcylbC",defaultMessage:"Job ID: {jobId}",values:{jobId:e}}),jobServicePrincipalOwner:(0,n.Y)(i.sA,{id:"9926x/",defaultMessage:"Service principal owner"}),lastJobRun:(0,n.Y)(i.sA,{id:"oPpdT/",defaultMessage:"Last run:"}),openFullPageSearch:(e,t)=>e.formatMessage({id:"K4NWC5",defaultMessage:"Show all results for ''{searchValue}'' in a full page"},{searchValue:t}),openEmptyFullPageSearch:e=>e.formatMessage({id:"kwrEEs",defaultMessage:"Open search in a full page"}),newTab:(0,n.Y)(i.sA,{id:"Mh6Fw/",defaultMessage:"Open in a new tab"}),enter:(0,n.Y)(i.sA,{id:"Rhf1Qy",defaultMessage:"Enter"}),openAdvancedSearch:(e,t)=>{if(t)return e.formatMessage({id:"B/IQP7",defaultMessage:"Show all results for ''{searchValue}''"},{searchValue:t});return e.formatMessage({id:"qay3aB",defaultMessage:"Open advanced search"})},itemViewedTime:(e,t=!1)=>{let a=new Date(e);return t?(0,n.Y)(i.sA,{id:"pE6SrH",defaultMessage:"Viewed {timeAgo}",values:{timeAgo:(0,n.Y)(o.f,{date:a})}}):(0,n.Y)(i.sA,{id:"87kVKV",defaultMessage:"viewed {timeAgo}",values:{timeAgo:(0,n.Y)(o.f,{date:a})}})},relatedContentSubtitle:e=>(0,n.Y)(i.sA,{id:"X/uBJA",defaultMessage:'related to "{pageName}"',values:{pageName:e}}),relatedContentLabel:e=>e.formatMessage({id:"0SQTVq",defaultMessage:"Suggested"}),recentsLabel:e=>e.formatMessage({id:"IIR4ht",defaultMessage:"Recents"}),productsAndPagesLabel:e=>e.formatMessage({id:"BpFmuq",defaultMessage:"Products and Pages"})}},302136:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(692738),r=a(967166);function i(){let e=(0,r.hG)();return(0,n.useCallback)(t=>e({uc_api_ui_log:t}),[e])}},304883:(e,t,a)=>{function n(e){if(r(window))return{...e,flag_overrides_json:JSON.stringify(window.DARO_PROMPTING_OVERRIDES)};return e}function r(e){return e?.DARO_PROMPTING_OVERRIDES!==void 0}function i(e){let t=r(window)?window.DARO_PROMPTING_OVERRIDES:{};window.DARO_PROMPTING_OVERRIDES={...t,...e}}function o(e){if(!r(window))return;delete window.DARO_PROMPTING_OVERRIDES[e]}function s(e){window.DARO_PROMPTING_OVERRIDES={...e}}function l(){if(r(window))return{...window.DARO_PROMPTING_OVERRIDES};return{}}a.d(t,{To:()=>o,_Y:()=>n,sO:()=>s,sU:()=>l,vz:()=>i})},308183:(e,t,a)=>{a.d(t,{a:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.dashboardsai.enableFetchWidgetRenderDataLazyMat",!0)}},308879:(e,t,a)=>{a.d(t,{L:()=>l,u:()=>u});var n=a(689262),r=a(686560),i=a(441535),o=a(709262),s=a(805287);let l=()=>({isEnabled:u()}),u=()=>(0,s.gz)({cloud:"AWS",userCanUseDatabricksWorkspace:(0,r.d)("userCanUseDatabricksWorkspace_new",!1),userCanUseSqlService:(0,r.d)("userCanUseSqlService_new",!1),enableSqlService:(0,n.b)("enableSqlService",(0,r.d)("enableSqlService",!1),()=>(0,r.d)("dbSqlEnabled_new",!1)),centralizedLoginEnabled:(0,n.b)("centralizedLoginEnabled",(0,r.d)("centralizedLoginEnabled",!1),()=>(0,i.W)("databricks.fe.centralizedLoginEnabled",!1))})[o.EU].allowed},310338:(e,t,a)=>{function n(e){return e.attachments?.filter(e=>!y(e))??[]}function r(e,t){let a=t?A(e):n(e);return a.findLast(e=>e.query)?.query}function i(e,t){let a=t?A(e):n(e);return a.findLast(e=>e.text)?.text}function o(e){let t=n(e);return t.findLast(e=>e.certified_answer)?.certified_answer}function s(e){let t=n(e);return t.findLast(e=>e.final_summary)?.final_summary}function l(e){return r(e)??o(e)}function u(e){return n(e).length>0}function c(e){return n(e).map(e=>e.viz).filter(e=>void 0!==e)}function d(e){return[...n(e)].findLast(e=>!!e.certified_answer||!!e.query&&"RESPONSE_PHASE_VERIFYING"!==_(e))}function m(e){let t=d(e);if(!t)return;return t.query||t.certified_answer}function p(e){return!!e.query&&!f(e)}function f(e){return!!e.full_name}function g(e){return function(e){let t=Object.values(e);if(0!==t.length)return t[0];throw Error("Unexpected empty attachment wrapper")}(e).id}function h(e){return n(e).map(e=>e.sub_question).filter(e=>void 0!==e)}function E(e){return n(e).map(e=>e.query).filter(e=>void 0!==e)}function b(e){return n(e).map(e=>e.deep_research_report).filter(e=>void 0!==e)}function T(e){if(e.sub_question)return e.sub_question.attachment_ids??[];return[]}function y(e){return 0===Object.keys(e).length}function I(e,t){return n(e).filter(e=>_(e)===t)}function A(e){let t=n(e),a=[...t.flatMap(e=>T(e)),...t.filter(e=>void 0!==_(e)).flatMap(e=>[g(e),...T(e)])];return t.filter(e=>!a.includes(g(e)))}function v(e){return n(e).map(e=>e.research_thought).filter(e=>void 0!==e)}function S(e,t){let a=n(e).find(e=>g(e)===t);return a?a.query?.statement_id??a.certified_answer?.statement_id:void 0}function _(e){return e.text?.phase??e.query?.phase??e.viz?.phase}function C(e,t){return n(e).filter(e=>(e.text?.verification_metadata?.section??e.query?.verification_metadata?.section)===t)}function R(e){return C(e,"VERIFICATION_SECTION_FINAL_DECISION").length>0}function O(e){return"{{General Actions}}"===e.title}function N(e){if(!e)return{sqlError:void 0,humanError:void 0};let t="== SQL ==",a=e.indexOf(t);if(a<0)return{sqlError:void 0,humanError:e};return{sqlError:e.substring(a+t.length),humanError:e.substring(0,a)}}function k(e){switch(e){case"PENDING":case"RUNNING":return!0;default:return!1}}a.d(t,{$H:()=>E,AE:()=>R,Bv:()=>n,DR:()=>I,Ls:()=>v,NL:()=>u,RB:()=>d,Vl:()=>y,Vt:()=>o,WB:()=>s,Zd:()=>O,fE:()=>m,gD:()=>b,gW:()=>N,i0:()=>C,j0:()=>h,jc:()=>A,kh:()=>p,kw:()=>k,ls:()=>i,q9:()=>f,rQ:()=>g,sX:()=>S,sn:()=>r,su:()=>c,wW:()=>l})},322372:(e,t,a)=>{a.d(t,{IY:()=>_,R1:()=>E,Tr:()=>C,V_:()=>v,am:()=>b,dR:()=>T,dx:()=>S,gh:()=>I,lt:()=>y,qu:()=>A});var n=a(692738),r=a(342411),i=a(817148),o=a(686560),s=a(141078),l=a(570512),u=a(267647),c=a(360217),d=a(169750),m=a(935963),p=a(607030);function f(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}let g=`
You are a Databricks customer support assistant.
You always consider that your prior knowledge may be wrong.
You are the only way for customers to create support tickets or contact Databricks support, where people refer to you as "in-product support agent".

Instructions:
1. Answer with a concise solution based on the provided documentation. If the documentation does not answer
the issue you will ask the customer to provide specific additional information to diagnose the issue with a question.
2. Provide links that are returned from the search tool.
3. If the customer asks how to create a support case or contact Databricks support, tell them that you can help them create a support case,
but you would like to gather more information and possible solutions to help them troubleshoot the issue first by
continuing the conversation. You must not refer to support case creation via the Help Center.
`,h=`
This user is in a custom version of Databricks that is specific to SAP. There are two things that are different than with a normal Databricks deployment:
1. Support
2. Feature enablement

### Support

Users in SAP workspaces cannot access Databricks support but should reach out to SAP support. When telling a user to contact SAP support, you should send them a link to support.sap.com. Under no circumstances should they be sent a link to Databricks support or told to contact Databricks support. Do not apologize, SAP support will be able to unblock the user when asked about support. Use the following phrasing: “Please reach out to SAP support for assistance. You can contact support at [help.sap.com](https://help.sap.com/docs/business-data-cloud/sap-databricks/request-help-from-sap-technical-support).”

### Feature enablement

SAP workspaces have a subset of the features enabled. Following is a list of features that are *NOT* enabled in SAP:

- Workflows
- Delta Live Tables
- Lakeflow Connect
- Continuous Spark Streaming (you can use regular Structured Spark Streaming)
- Auto Loader
- Materialized views
- Streaming tables
- DBSQL Lakehouse Federation
- AI/BI
- SQL Alerts
- Classic compute
- Hive metastore
- Partner connect
- Data marketplace
- API access

Whenever a user asks how to achieve something, only suggest solutions that are not in the disabled list. If the user explicitly asks about a feature that is disabled, you can explain the feature and explain that it is not enabled in SAP workspaces. Whenever a user asks about these technologies, be very explicit that it is not available in SAP.
`,E=(0,r.zR)({id:"9Y0789",defaultMessage:"create a support ticket"}),b=(0,r.zR)({id:"YDgQyQ",defaultMessage:"\uD83D\uDC4B I'm your support assistant. Describe your issue in detail below, and I'll help resolve it. For urgent matters, {supportTicketLink}."}),T="support",y=(0,r.zR)({id:"1lbi2W",defaultMessage:"We're glad you're issue was resolved. Let us know how else we can help."}),I="supportAgent",A=()=>{let e=(0,r.tz)(),t=(0,s.mK)(),a=`[${e.formatMessage(E)}](#support)`,p={introMessage:e.formatMessage(b,{supportTicketLink:a}),issueResolvedMessage:e.formatMessage(y)};return(0,n.useMemo)(()=>({agent:{name:I,instructions:()=>(0,o.d)("workspaceCustomBranding","")===i.u7.SAP?g+h:g,makeContext:(0,u.x)({makeContext:({contextConfig:e,userMessage:a,context:n,promptId:r})=>{var i;return(i=function*(){let i={contextObject:{...n??{},merlinSupportInfo:{isHighPriorityMerlin:!0,canCreateCase:!0}},apolloClient:t,agentName:I,lakesenseTraceId:r??"",userMessage:a},o={...R,[d.E.MERLIN_SUPPORT]:{enabled:!0},...e},s={[d.E.MERLIN_SUPPORT]:()=>(0,c.yn)(i)},u=Object.keys(s).filter(e=>o[e]?.enabled),m=yield Promise.all(u.map(e=>s[e]?.()).filter(e=>void 0!==e));return(0,l.Qn)(m)},function(){var e=this,t=arguments;return new Promise(function(a,n){var r=i.apply(e,t);function o(e){f(r,a,n,o,s,"next",e)}function s(e){f(r,a,n,o,s,"throw",e)}o(void 0)})})()},agentName:I}),userMessageMatchesAgent:(e,t,a)=>{let n=!!(a&&a.length>0&&"assistant"===a[0].role&&a[0].content===p.introMessage),r=a?.some(e=>e.content===p.issueResolvedMessage);return n&&!r},extractHistory:e=>{let t=e.findLastIndex(e=>e.content===p.introMessage);if(-1===t)return[];return e.slice(t+1)},get model(){return(0,m.f)()},messageTags:[T]}}),[t,p.introMessage,p.issueResolvedMessage])},v="supportFeedbackTool",S=[{role:p.oW.assistant,content:null,tool_calls:[{type:p.tk.function,id:"supportFeedbackTool",function:{name:v,arguments:""}}]},{role:p.oW.tool,content:"",tool_call_id:"supportFeedbackTool"}],_="introMessageTool",C=[{role:p.oW.assistant,content:null,tool_calls:[{type:p.tk.function,id:"introMessageTool",function:{name:_,arguments:""}}]},{role:p.oW.tool,content:"",tool_call_id:"introMessageTool"}],R={[d.E.DOCS_SEARCH]:{enabled:!0}}},325048:(e,t,a)=>{a.d(t,{c:()=>n,s:()=>r});let n=e=>({display:"flex",borderBottom:`1px solid ${e.colors.actionDefaultBorderDefault}`,marginBottom:e.spacing.md,height:e.general.heightSm,boxSizing:"border-box"}),r=e=>({display:"flex",fontWeight:e.typography.typographyBoldFontWeight,fontSize:e.typography.fontSizeMd,backgroundColor:"transparent",marginRight:e.spacing.md})},329099:(e,t,a)=>{a.d(t,{EJ:()=>h,Eu:()=>c,I1:()=>u,JS:()=>g,Oo:()=>b,l4:()=>m,rF:()=>d,rc:()=>p,wV:()=>f});var n,r,i,o,s=a(610435);a(692738);var l=a(342411),u=((n={}).Python="python",n.SQL="sql",n.Scala="scala",n.R="r",n),c=((r={}).CSS="css",r.HTML="html",r.Java="java",r.JavaScript="javascript",r.JSON="json",r.Markdown="markdown",r.PG="pgsql",r.Plain="plain",r.Python="python",r.R="r",r.Scala="scala",r.Shell="sh",r.SQL="sql",r.TypeScript="typescript",r.XML="xml",r.YAML="yaml",r);let d={py:"py",md:"md",mdSandbox:"md-sandbox"},m={sql:"SQL",python:"Python",r:"R",scala:"Scala",markdown:"Markdown",run:"Run Notebook"},p={py:"Python",md:"Markdown"};var f=((i={}).Python="python",i.Scala="scala",i.SQL="sql",i.R="r",i.Markdown="markdown",i);let g=[{name:"Markdown",formattedMessage:(0,s.Y)(l.sA,{id:"xgYBvc",defaultMessage:"Markdown"})},{name:"Python",formattedMessage:(0,s.Y)(l.sA,{id:"chXIsn",defaultMessage:"Python"})},{name:"SQL",formattedMessage:(0,s.Y)(l.sA,{id:"cmxKCK",defaultMessage:"SQL"})},{name:"Scala",formattedMessage:(0,s.Y)(l.sA,{id:"wEJXV9",defaultMessage:"Scala"})},{name:"R",formattedMessage:(0,s.Y)(l.sA,{id:"RDG8ln",defaultMessage:"R"})}],h={markdown:"md",md:"md",python:"python",scala:"scala",sql:"sql",r:"r"};var E=((o={})[o.twoSpacesIndentUnit=2]="twoSpacesIndentUnit",o[o.fourSpacesIndentUnit=4]="fourSpacesIndentUnit",o);function b(){return Object.keys(E).filter(e=>"number"==typeof E[e]).map(e=>parseInt(E[e],10))}},329427:(e,t,a)=>{a.d(t,{J:()=>n});function n(e){if(e)return`## Image Upload
You can receive images from the user. The user can share images with you by:
* Dragging and dropping an image into the chat input
* Copying an image and pasting it from their clipboard
* Clicking the attach files button in the chat input`;return`## Image Upload
Image upload is not supported. If the user asks about sharing images, let them know that this feature is not available in the current mode.`}},334116:(e,t,a)=>{a.d(t,{KX:()=>E,MU:()=>g,_n:()=>p,fQ:()=>h,rZ:()=>d,s6:()=>b,wc:()=>f,yR:()=>m});var n,r,i,o,s,l,u,c,d=((n={})[n.IDLE=0]="IDLE",n[n.READY_TO_APPLY=1]="READY_TO_APPLY",n[n.APPLYING_BUT_NOT_STREAMING=2]="APPLYING_BUT_NOT_STREAMING",n[n.STREAMING=3]="STREAMING",n[n.APPLIED=4]="APPLIED",n[n.ERROR=5]="ERROR",n[n.APPLY_ENDPOINT_ERROR=6]="APPLY_ENDPOINT_ERROR",n[n.CANCELLED=7]="CANCELLED",n),m=((r={})[r.PIP_LOGS_BUTTON=0]="PIP_LOGS_BUTTON",r[r.APPLY_ERROR=1]="APPLY_ERROR",r),p=((i={}).WORKSPACE="workspace",i.VOLUMES="volumes",i),f=((o={}).DEPENDENCIES="dependencies",o.INSTALLED="installed",o),g=((s={}).EXPORT="export",s.UPLOAD="upload",s),h=((l={}).ENVIRONMENT="environment",l.BASE_ENVIRONMENT="baseEnvironment",l.DEPENDENCY="dependency",l),E=((u={}).ON_DEMAND="ON_DEMAND",u.POOL_OPTIONAL="POOL_OPTIONAL",u.POOL_REQUIRED="POOL_REQUIRED",u),b=((c={}).STANDARD="STANDARD",c.HIGH="HIGH",c)},336664:(e,t,a)=>{a.d(t,{Ay:()=>S,e:()=>T,yw:()=>I});var n,r=a(252513),i=a.n(r),o=a(691238),s=a(708134),l=a(655907),u=a(441535),c=a(375436),d=a(886100),m=a(22191),p=a(747129),f=a(87173),g=a(936289),h=a(162210);function E(){return!(0,l.Yz)()}let b="Error processing presence update";var T=((n={}).ADD="add",n.REMOVE="remove",n);function y(e){let t=0,a=new Map;return function(n){if(a.has(n)){let e=a.get(n);if(e)return e}let r=e[t%e.length];return a.set(n,r),t++,r}}function I(){return{legacy:y(["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"]),primary:y(["#00A972","#FFAB00","#FF3621","#077A9D","#8BCAE7","#99DDB4","#AB4057","#BF7080","#FCA4A1"]),secondary:y(["#E0F5E9","#FFEBC2","#FFDAD6","#CDE4EB","#DDF0F8","#F0FAF4","#EDDEE1","#F2E3E6","#FED9D7"])}}class A extends i().Model{defaults(){return{notebookId:null,locationId:null,hasFocus:!0,commandId:null,commandGuid:null,cursorStart:null,cursorEnd:null,landingTimestamp:null,sessionId:null,entities:{},sessionSource:"user-browser"}}constructor(e,t){super(e,t)}initAttributes(e){this.set({landingTimestamp:new Date().getTime(),sessionId:h.BrowserUtils.getBrowserTabId(),locationId:e,sessionSource:(0,s.P)()?"browser-fleet-headless":"user-browser"})}}class v extends i().Model{listenerReady=!1;rpc=null;colorScale=I().legacy;colorScalePrimary=I().primary;colorScaleSecondary=I().secondary;updateMarks=null;hasFocus=document.hasFocus();notebookId;commandId;commandGuid;cursorStart;cursorEnd;entities={};retryTimeoutId=null;retryCount=0;backoffOptions={initialBackoff:1e3,multiplier:2,jitter:.2,maxBackoff:6e4};defaults(){return{sessions:[],history:[],currentStatus:null}}initialize(){this.set("currentStatus",new A),this.listenTo(this.get("currentStatus"),"change",this.onStatusChange),setInterval((0,c.Uz)("setInterval","PresenceModel.updateDocumentFocus",()=>this.hasFocus=document.hasFocus()),5e3),setInterval((0,c.Uz)("setInterval","PresenceModel.saveCurrentStatus",()=>this.saveCurrentStatus()),1e3)}onPresenceUpdate(e){if(!E())return;try{this.onPresenceUpdate0(e),d.iT.sev2BurnRate(m.Es.Notebooks,b,p.i1.P9999,p.Ip.Min100,!0)}catch(e){d.iT.sev2BurnRate(m.Es.Notebooks,b,p.i1.P9999,p.Ip.Min100,!1,e)}}onPresenceUpdate0(e){this.listenerReady=!0,this.retryCount=0;let t=o.Ay.filter(e.sessions,e=>e.sessionId!==h.BrowserUtils.getBrowserTabId()),a=(0,g.vB)(t);o.Ay.each(a,e=>{e.userName&&e.userName.length>0&&(e.displayInitial=e.userName[0].toUpperCase(),e.bgColorSecondary=this.colorScaleSecondary(e.userId?.toString()),e.bgColor=this.colorScalePrimary(e.userId?.toString()),e.hasFocus?e.opacity=1:e.opacity=.4)}),a=o.Ay.sortBy(a,e=>e.timestamp),this.set("sessions",a),this.set("history",e.history),this.updateMarks&&this.updateMarks(this.get("sessions"))}setLocation(e){if(!E())return;if((0,u.W)("databricks.fe.eda.presenceExponentialBackoffEnabled",!0)){let t=this.get("currentStatus"),a=t?.get("locationId"),n=t?.get("landingTimestamp"),r=new Date().getTime();if(a&&a===e&&n&&r-n<6e4)return}this.stop(),this.retryCount=0,this.get("currentStatus")?.initAttributes(e);let t=()=>{this.rpc=window.conn.wsClient.sendRPC("presence",{data:this.get("currentStatus")?.toJSON(),update:this.onPresenceUpdate.bind(this),silent:!0,error:(e,a)=>{if(this.listenerReady=!1,!a.clientCancelled)if((0,u.W)("databricks.fe.eda.presenceExponentialBackoffEnabled",!0)){let e=(0,f.m)(this.retryCount,this.backoffOptions);this.retryCount++,this.retryTimeoutId=setTimeout(t,e)}else console.log("Presence RPC disconnected, retrying..."),this.retryTimeoutId=setTimeout(t,1e3)}})};t()}pushHistory(e,t,a){if(!E())return;window.conn.wsClient.sendRPC("presencePushHistory",{data:{locationId:a||this.get("currentStatus")?.get("locationId"),entry:{text:e,important:t}},silent:!0})}updateCurrentCommand(e,t,a){if(!E())return;this.notebookId=e,this.commandId=t,this.commandGuid=a}updateCurrentEntity(e,t,a="add"){if(!E()||!e)return;this.notebookId=e,"remove"===a?delete this.entities[Object.keys(t)[0]]:this.entities={...this.entities,...t}}updateCursorPosition(e,t,a,n){if(!E())return;this.notebookId=e,this.commandId=t,this.cursorStart=a,this.cursorEnd=n}saveCurrentStatus(){if(!E())return;this.get("currentStatus")?.set({hasFocus:this.hasFocus,notebookId:this.notebookId,commandId:this.commandId,commandGuid:this.commandGuid,cursorStart:this.cursorStart,cursorEnd:this.cursorEnd,entities:this.entities})}onStatusChange(){if(!E())return;this.listenerReady&&window.conn.wsClient.sendRPC("presenceUpdate",{silent:!0,data:this.get("currentStatus")?.toJSON()})}stop(){if(!E())return;this.listenerReady=!1,this.rpc&&this.rpc.cancel?.(),this.retryTimeoutId&&(clearTimeout(this.retryTimeoutId),this.retryTimeoutId=null),this.retryCount=0}}let S=new v},337695:(e,t,a)=>{a.d(t,{W:()=>r});var n=a(441535);function r(){return(0,n.W)("dashboard_authoring_agent",!1)}},343312:(e,t,a)=>{let n;a.d(t,{K:()=>s,Py:()=>c,wA:()=>l});var r=a(500710),i=a.n(r),o=a(989584);function s(e){let t=new CustomEvent("bricksterboost_eventviewer_batch",{detail:e.filter(e=>void 0!==e.msg).map(e=>(function(e){if(!e.isProtoLog)return e;let t=JSON.parse(e.msg),a={metric:`frontendLog/${(0,o.F$)(t).replace(/(_\w)/g,e=>e[1].toUpperCase())}`,ts:t.inferred_timestamp_millis,eventId:t.frontend_log_event_id,protoData:t};return{msg:JSON.stringify(a),size:JSON.stringify(a).length,isProtoLog:!0}})(e)).map(e=>e.msg??"")});document.dispatchEvent(t)}function l(e){s(e.map(e=>{let t=JSON.stringify(e);return{size:t.length,msg:t,isProtoLog:(0,o.cU)(e)}}))}let u=[];function c(e){if(u.push(e),n)return;n=requestIdleCallback(()=>{let e=new CustomEvent("bricksterboost_eventviewer_batch",{detail:u.map(e=>(function(e){let{ts:t,eventId:a=i()("LOCAL_DEBUG"),eventType:n,entityType:r,entityId:o,eventName:s,extra:l}=e,u={metric:`localDebugLog/${n}`,ts:t,eventId:a,protoData:{entry:{observability_log:{type:s,entity:{type:r,entity_id:o}}},...l}};return{msg:JSON.stringify(u),size:JSON.stringify(u).length,isProtoLog:!0}})(e).msg??"")});document.dispatchEvent(e),u=[],n=void 0})}},344181:(e,t,a)=>{a.d(t,{p:()=>d});var n=a(229386),r=a(114542),i=a(646171),o=a(101377),s=a(580500),l=a(78340);function u(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function c(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){u(i,n,r,o,s,"next",e)}function s(e){u(i,n,r,o,s,"throw",e)}o(void 0)})}}let d=e=>c(function*(){if((0,o.tK)("workspace.getObjectsPermissions",e.internal_name,e.name),(0,l.Y)()){var t;return t=e,c(function*(){var e,a;let i,o,l=(0,s.zZ)(t.name),u=l?(0,s.kf)(l.type):void 0,c=t.internal_name?(0,s.Uk)(t.internal_name):l?.id;if(!u||!c)throw Error(`Unsupported resource for permissions API: ${t.name}`);return e=yield(0,r.E)(u).getPermissions(c),a=t.name||"",i=(e,t)=>{let a=(0,n.gX)(e)?e.groupName:(0,n.A6)(e)?e.servicePrincipalName:e.userName,r=(0,n.gX)(e)?"Group":(0,n.A6)(e)?"ServicePrincipal":"User",i=(0,n.gX)(e)?e.groupName:e.displayName;return{principal:a,permissions:(t?e.allPermissions.filter(e=>!e.inherited):e.allPermissions).map(e=>e.permissionLevel),principal_name:a,principal_display_name:i,principal_type:r}},o=e.accessControlList.map(e=>i(e,!1)),{name:a,permissions:e.accessControlList.filter(e=>e.allPermissions.some(e=>!e.inherited)).map(e=>i(e,!0)),expanded_permissions:o}})()}let{data:a}=yield(0,i.p)().get("accesspolicies",{params:e});return a})()},347619:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M2 .75A.75.75 0 0 1 2.75 0h6a.75.75 0 0 1 .53.22l4.5 4.5c.141.14.22.331.22.53V8h-1.5V6H8.75A.75.75 0 0 1 8 5.25V1.5H3.5v12h6V15H2.75a.75.75 0 0 1-.75-.75zm7.5 1.81 1.94 1.94H9.5z",clipRule:"evenodd"}),(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M9.25 8.5a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h.785a3.5 3.5 0 0 0 3.465 3h1.25a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75h-.785a3.5 3.5 0 0 0-3.465-3zM10 11v-1h.5a2 2 0 0 1 2 2 1 1 0 0 0 1 1h.5v1h-.5a2 2 0 0 1-2-2 1 1 0 0 0-1-1z",clipRule:"evenodd"})]})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="FilePipelineIcon";let l=s},348844:(e,t,a)=>{a.d(t,{OK:()=>_,SB:()=>N,g0:()=>v,of:()=>O,wk:()=>S});var n=a(815193),r=a.n(n),i=a(22191),o=a(253171),s=a(178808),l=a(583054),u=a(776407),c=a(779862),d=a(555297),m=a(41375),p=a(416913),f=a(221951),g=a(665692),h=a(332792),E=a(911090),b=a(93097),T=a(520747),y=a(749850),I=a(46954),A=a(158014);function v(e){let t=function({options:e,columns:t,getSeriesOptionsForColumn:a,defaultNameMap:n,specType:i}){let{columnConfigurationMap:l,swappedAxes:u,globalSeriesType:c,xAxis:d,hideXAxis:m,yAxis:f,hideYAxes:g,alignYAxesAtZero:h,seriesOptions:E,sortX:b,sortY:T,reverseX:I,reverseY:A,keepNullOnX:v}=e;if("pie"===c)return{};if((0,y.eT)(e))throw Error((0,y.h$)(e.swappedAxes));if((0,y.WJ)(e))throw Error(y.lQ);if((0,y.ZC)(e))throw Error(y.SN);if((0,y.jl)(e))throw Error((0,y.EG)(e.swappedAxes));if((0,y.$V)(e))throw Error(y.jq);let S=function({globalSeriesType:e,sortedY:t,seriesOptions:a,yAxis:n,columns:i,hideYAxes:l,alignYAxesAtZero:u,sortY:c,reverseY:d,isPreAggChart:m,defaultNameMap:p,getSeriesOptionsForColumn:f,specType:g="render",keepNullOnY:h}){"histogram"===e&&"editor"===g&&(t=[{column:"*",transform:"COUNT"}]);let E=r()(["area","column","line","combo"],e)&&m?{fn:"sum"}:void 0,b={0:[],1:[]};for(let e of t){let{yAxis:r=0,name:i}=f(a||{},e),o=p?.[e.column],l=i??o;if(l===e.column&&a[e.column]?.name&&(l=a[e.column]?.name),1===t.length){let e=n?.[0]?.title?.text;l===o&&e&&(l=e)}b[r].push((0,s.V)({columnConfig:e,defaultTransform:E,...l?{displayName:l}:{},specType:g}))}let T=(0,o.C)({hideAxis:l,title:n?.[0]?.title?.text??void 0}),y=(0,o.C)({hideAxis:l,title:n?.[1]?.title?.text??void 0});if(b[0].length>0&&b[1].length>0){let e=C({fields:b[0],yAxis:n?.[0],axisProperties:T,sortY:c}),t=(0,o.C)({hideAxis:l,title:n?.[1]?.title?.text??void 0});return{primary:e,secondary:C({fields:b[1],yAxis:n?.[1],axisProperties:t,sortY:c}),...void 0!==u?{alignAxesAtZero:u}:{}}}if(b[1].length>0)return R({fields:b[1],yAxis:n?.[1],axisProperties:{...y,position:"secondary"},globalSeriesType:e,columns:i,sortY:c,reverseY:d,specType:g,keepNullOnY:h});if(b[0].length>0)return R({fields:b[0],yAxis:n?.[0],axisProperties:T,globalSeriesType:e,columns:i,sortY:c,reverseY:d,specType:g,keepNullOnY:h})}({globalSeriesType:c,sortedY:N(l.y,E,a),seriesOptions:E,yAxis:f,columns:t,hideYAxes:g,alignYAxesAtZero:h,sortY:T,reverseY:A,isPreAggChart:!1===e.useAggregationsUi,defaultNameMap:n,getSeriesOptionsForColumn:a,specType:i,keepNullOnY:v}),O=_({x:l.x||void 0,columns:t,globalSeriesType:c,xAxis:d,hideXAxis:m,sortX:b,reverseX:I,keepNullOnX:v,defaultNameMap:n,specType:i}),k=u?"y":"x",w=u?"x":"y";if("histogram"===c&&(0,p.UR)(S)&&(O?.axis?.title&&(O.displayName=O?.axis?.title),S?.axis?.title&&(S.displayName=S?.axis?.title)),(0,p.mv)(S))return{...O?{x:O}:{},y:S};if((0,p.Ag)(S))return{...O?{[k]:O}:{},[w]:S};return{...O?{[k]:O}:{},...S?{[w]:S}:{}}}(e),{color:a,...n}=S(e);if((0,f.G5)(t))return{...t,...n,...!(0,g.KQ)(a)?{color:a}:{}};return{...t,...n,color:a}}function S({options:e,columns:t,getSeriesOptionsForColumn:a,defaultNameMap:n,specType:r="render"}){let{columnConfigurationMap:o,swappedAxes:p,globalSeriesType:f,legend:g,showDataLabels:b,textFormat:I,sizemode:v,direction:_,valuesOptions:C,seriesOptions:R,numberFormat:k,percentFormat:w,dateTimeFormat:M,useAggregationsUi:P}=e,D={...k?{numberFormat:{formatType:"numeral",format:k}}:{},...w?{percentFormat:{formatType:"numeral",format:w}}:{}},L={...D,...M?{timeFormat:{formatType:"moment",format:M}}:{}},x=!1===P,U={};if((0,y.JQ)(e))throw Error((0,y.Io)(e));for(let l of Object.keys(o)){let b="y"===l?o[l]?.[0]:o[l];if(b){let y=(0,T.c)({key:l,globalSeriesType:f,swappedAxes:p});if((0,m.R6)(y)){if("y"===l&&(o.y?.length??0)>1){let n=function({legend:e,columnConfigurationMap:t,seriesOptions:a,useAggregationsUi:n,isCombo:r,getSeriesOptionsForColumn:i,specType:o,columns:l}){let d=N(t?.y,a??{},i),m=Object.values(a).some(e=>1===e.yAxis)&&Object.values(a).some(e=>0===e.yAxis||void 0===e.yAxis),p=Object.values(a).some(e=>void 0!==e.zIndex),f=m||p||r?function(e,t,a,n,r,i){return e.map(e=>{let o=a(t,e);if(o?.name)return o.name;let l=i.find(t=>t.name===e.column),u=(0,s.V)({columnConfig:e,defaultTransform:n,specType:r});return(0,h.l3)(u,l)})}(d,a,i,!1===n?{fn:"sum"}:void 0,o,l):void 0,g=(0,c.T5)({...e?.traceorder==="reversed"?{reverse:!0}:{},...f?{customSortOrder:f}:{}}),E=(0,u.s)(e),b={...Object.keys(g).length>1?{scale:g}:{},...E?{legend:E}:{}};return Object.keys(b).length>0?b:void 0}({columnConfigurationMap:o,seriesOptions:R,legend:g,useAggregationsUi:P,isCombo:"combo"===(0,A.d)(e),getSeriesOptionsForColumn:a,specType:r,columns:t});n&&(U.color=n)}continue}if((0,m.qm)(y)){let e=(0,u.s)({...g,..."size"===y?{enabled:!1}:{}}),a=x&&"color"===y&&"heatmap"===f?{fn:"sum"}:void 0,i=n?.[b.column],s="pie"===f?o?.x?.column:o?.series?.column,m=t.find(e=>e.name===s)?.type||"string",p={...O({columnConfig:b,columns:t,defaultTransform:a,displayName:i,scale:"size"===y&&"diameter"===v&&"histogram"!==f?{type:"quantitative",fn:{type:"sqrt"}}:("series"===l||"pie"===f&&"x"===l)&&"color"===y?{type:"categorical"}:void 0,customSortOrder:"color"===y&&R?(0,c.z5)(R,m):void 0,mappings:"color"===y?(0,c.d4)(C,R,f,m,L):void 0,valueAlias:"color"===y&&"pie"!==f?(0,d.v)(R,m):void 0,specType:r}),...e?{legend:e}:{}};"color"===y?U.color=p:"size"===y&&(U.size=p)}else if("angle"===y){let e=x&&"pie"===f?{fn:"sum"}:void 0,n=a(R||{},b);U[y]=O({columnConfig:b,columns:t,reverse:_?.type==="clockwise",defaultTransform:e,...n.name&&"pie"===f?{displayName:n.name}:{},specType:r})}else"extra"!==y&&(0,E.K)(y,i.Es.Visualizations)}}if(b&&(U.label={...(0,l.g)({textFormat:I||(0,l.Y)({globalSeriesType:f,percentValues:e.series.percentValues,swappedAxes:e.swappedAxes}),globalSeriesType:f,swappedAxes:p})??{},_format:L,show:!0}),I&&(U.tooltip=(0,l.g)({textFormat:I||(0,l.Y)({globalSeriesType:f,percentValues:e.series.percentValues,swappedAxes:e.swappedAxes}),globalSeriesType:f,swappedAxes:p})),U.tooltip={...U.tooltip,_format:D},!e.textFormat&&"pie"===f){let t="{{ @@color }}";e.columnConfigurationMap.y?.length&&e.columnConfigurationMap.x?t="{{ @@color }}: {{ @@anglePercent }} ({{ @@angle }})":e.columnConfigurationMap.y?.length&&(t="{{ @@anglePercent }} ({{ @@angle }})"),U.tooltip={...U.tooltip,_template:t}}return U}function _({x:e,columns:t,globalSeriesType:a,xAxis:n,hideXAxis:r,sortX:i,reverseX:s,keepNullOnX:l,defaultNameMap:u,specType:d="render"}){if(!e)return;let m=n?.title?.text,p=(0,o.C)({hideAxis:r,hideAxisLabels:!n?.labels?.enabled,title:m??void 0}),f=u?.[e.column],g="histogram"===a?(0,b.F)(e.column):m??f,h={...O({columnConfig:e,columns:t,scale:(0,c.qv)(n?.type),sort:i,reverse:s,...g?{displayName:g}:{},specType:d}),...p?{axis:p}:{}};return l||"categorical"!==h.scale.type||"pie"===a||(h.scale._excludeNull=!0),h}function C({fields:e,yAxis:t,axisProperties:a,sortY:n,reverseY:r}){let i=(0,c.qv)(t?.type)??{type:"quantitative"};return{fields:e,...(0,c.DV)({...i,yAxis:t,sort:n,reverse:r}),...a?{axis:a}:{}}}function R({fields:e,yAxis:t,axisProperties:a,columns:n,globalSeriesType:r,sortY:i,reverseY:o,specType:s="render",keepNullOnY:l}){if(e.length>=2||0===e.length)return C({fields:e,yAxis:t,axisProperties:a,sortY:i,reverseY:o});{let{transform:u,displayName:d}=e[0],m="field"in e[0]?(0,I.j)(e[0].field):e[0].fieldName,p={..."render"===s?{fieldName:m}:{field:m},...u?{transform:u}:{},...void 0!==d?{displayName:d}:{},...(0,c.DV)({...(0,c.qv)(t?.type)??(0,c.Zp)({fieldName:m,transform:u,columns:n}),yAxis:t,sort:i,reverse:o}),...a?{axis:a}:{}};return!l&&"categorical"===p.scale.type&&["heatmap","scatter","bubble"].includes(r)&&(p.scale._excludeNull=!0),p}}function O({columnConfig:e,columns:t,defaultTransform:a,scale:n,displayName:r,sort:i,reverse:o,customSortOrder:l,mappings:u,valueAlias:d,specType:m="render"}){let{column:p}=e,f=(0,s.v)(e?.transform)??a,g=(0,c.DV)({...n??(0,c.Zp)({fieldName:p,transform:f,columns:t}),sort:i,reverse:o,customSortOrder:l,mappings:u});return{...(0,s.V)({columnConfig:e,defaultTransform:a,displayName:r,specType:m}),...g,...d?{valueAlias:d}:{}}}function N(e,t,a){if(void 0===e)return[];let n=e.map((e,t)=>({column:e,index:t}));return n.sort((e,n)=>{let{column:r,index:i}=e,{column:o,index:s}=n;if(t){let e=a(t,r),n=a(t,o),i=e?.zIndex,s=n?.zIndex;if(void 0!==i&&void 0!==s)return i-s;if(void 0!==i)return -1;if(void 0!==s)return 1}return i-s}),n.map(({column:e})=>e)}},348907:(e,t,a)=>{a.d(t,{Is:()=>A,yb:()=>v});var n,r=a(610435);a(692738);var i=a(79570),o=a(538893),s=a(374161),l=a(170075),u=a(213576),c=a(497895),d=a(802582),m=a(186675),p=a(296027),f=a(225842),g=a(342411),h=a(711819),E=a(657418),b=a(441535),T=a(29824),y=a(797246),I=a(869061),A=((n={}).DEFAULT_CATALOG="DEFAULT_CATALOG",n.SHARED_CATALOG="SHARED_CATALOG",n.LEGACY_CATALOG="LEGACY_CATALOG",n.SYSTEM_CATALOG="SYSTEM_CATALOG",n.USER_HOME_CATALOG="USER_HOME_CATALOG",n);function v({name:e,accessible:t=!0,securableKind:a,browseOnly:n=!1,withTooltip:A=!0,tooltipProps:S={},avatarStyleSize:_=null,catalogIconVariant:C,isPostgres:R=!1}){let O=(0,b.W)("databricks.fe.uc.enableForeignCatalogIcon",!1),N=(0,E.p)(),{theme:k}=(0,c.wn)(),w=(0,g.tz)(),M=(0,r.Y)(h.IE,{browseOnly:n,objectType:T.an.CATALOG,tooltipProps:S,isPostgres:R,withTooltip:A}),P=(({catalogIconVariant:e,intl:t,withTooltip:a})=>{let n,c=t.formatMessage({id:"W3L9/U",defaultMessage:"Catalog"}),d=(e,t)=>a?(0,r.Y)(i.m,{componentId:"codegen_web-shared_src_metastore_components_catalogentityiconv2.tsx_45",content:t,children:e}):e;switch(e){case"DEFAULT_CATALOG":return n=t.formatMessage({id:"ygAX5G",defaultMessage:"Default catalog for this workspace"}),c=t.formatMessage({id:"zdsPXb",defaultMessage:"Default catalog"}),d((0,r.Y)(o.A,{alt:n,"aria-label":n}),c);case"SYSTEM_CATALOG":return n=t.formatMessage({id:"Pa/oU+",defaultMessage:"System catalog"}),d((0,r.Y)(s.A,{alt:n,"aria-label":n}),c);case"SHARED_CATALOG":return n=t.formatMessage({id:"5lZgD1",defaultMessage:"This catalog is shared across workspaces"}),d((0,r.Y)(l.A,{alt:n,"aria-label":n}),c);case"LEGACY_CATALOG":return n=t.formatMessage({id:"THVXC9",defaultMessage:"Legacy catalog includes hive_metastore"}),d((0,r.Y)(s.A,{alt:n,"aria-label":n}),c);case"USER_HOME_CATALOG":return n=t.formatMessage({id:"HmqL/2",defaultMessage:"User home catalog for this workspace"}),c=t.formatMessage({id:"+XR3Eo",defaultMessage:"User home catalog"}),d((0,r.Y)(u.A,{alt:n,"aria-label":n}),c);default:return}})({catalogIconVariant:C,intl:w,withTooltip:A});if(P&&(M=P),!t){let e=w.formatMessage({id:"L8k2aS",defaultMessage:"This catalog is not accessible from the current workspace."});M=(0,r.Y)(d.p,{title:e,...S,children:(0,r.Y)(m.A,{alt:e,"aria-label":e,css:{color:k.colors.actionDisabledText}})})}if(N&&"CATALOG_ONLINE"===a){let e=w.formatMessage(y.nw);M=(0,r.Y)(d.p,{title:e,...S,children:(0,r.Y)(p.A,{alt:e,"aria-label":e})})}let D=a?.replace("CATALOG_FOREIGN_",""),L=(0,I.Qz)(D,e),x=(0,r.FD)(r.FK,{children:[M,O&&D&&L&&(0,r.Y)("img",{src:L,alt:a,height:"12",css:{position:"relative",left:"-8px",bottom:"-4px",background:k.colors.white,borderRadius:"50%",padding:"1px"}})]});return _?(0,r.Y)(f.eu,{type:"entity",icon:x,label:w.formatMessage(y.Ix[T.an.CATALOG]),size:_}):x}},351992:(e,t,a)=>{a.d(t,{w:()=>r});var n=a(692738);function r({ref:e,debounceTimeMs:t,box:a="contentRect"}){let i=(0,n.useRef)({width:-1,height:-1}),o=(0,n.useRef)(),[s,l]=(0,n.useState)(null),u=(0,n.useCallback)(e=>{if(0===e.length)return;let n=e[0],r=n.contentRect.width,s=n.contentRect.height;if("borderBox"===a){let e=n.borderBoxSize?.[0];e&&(r=e.inlineSize,s=e.blockSize)}if(-1===i.current.width){i.current={width:r,height:s},l(i.current);return}if(r!==i.current.width||s!==i.current.height){if(i.current.width=r,i.current.height=s,!t)return void l({...i.current});clearTimeout(o.current),o.current=setTimeout(()=>{l({...i.current})},t)}},[t,a]),c=(0,n.useRef)();return c.current||(c.current=new ResizeObserver(u)),(0,n.useEffect)(()=>{let t="function"==typeof e?e():e.current;if(t){let e=c.current;return e.observe(t),()=>e.unobserve(t)}}),s}},355590:(e,t,a)=>{a.d(t,{HZ:()=>_,Mp:()=>C,Ot:()=>T,SX:()=>E,Y_:()=>A,h0:()=>I,lU:()=>b,sS:()=>v,sT:()=>S});var n=a(610435),r=a(692738),i=a(342411),o=a(441535),s=a(5697),l=a(844760),u=a(547186),c=a(984152),d=a(10680),m=a(11538),p=a(82102),f=a(88277),g=a(693277);function h(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function E(e){return`[Uploading ${e}...]`}function b(e){return`![${e}](./${e} "${e}")`}function T(e,t,a,n="text-replace"){let r=e.getModel();if(!r)return!1;let i=r.getValue().indexOf(t);if(-1===i)return!1;let o=r.getPositionAt(i),s=r.getPositionAt(i+t.length),l={startLineNumber:o.lineNumber,startColumn:o.column,endLineNumber:s.lineNumber,endColumn:s.column};return e.executeEdits(n,[{range:l,text:a}]),!0}function y(e,t,a){let n=e.current?.getEditorInstance();if(!n)return!1;return T(n,t,a,"drag-and-drop-replace")}function I(){f.y.addErrorNotification({position:"tc",level:"warning",message:(0,n.Y)(i.sA,{id:"NB7nnm",defaultMessage:"A file with the same name already exists."})})}function A(){f.y.addErrorNotification({position:"tc",message:(0,n.Y)(i.sA,{id:"AwM5P8",defaultMessage:"There was an error uploading the file."})})}function v(){f.y.addErrorNotification({position:"tc",level:"warning",message:(0,n.Y)(i.sA,{id:"P1uP05",defaultMessage:"Add one image file to the markdown cell at a time."})})}function S(){f.y.addErrorNotification({position:"tc",level:"warning",message:(0,n.Y)(i.sA,{id:"paGXgH",defaultMessage:"The file type does not appear to be an image."})})}function _(){f.y.addErrorNotification({position:"tc",level:"warning",message:(0,n.Y)(i.sA,{id:"NWemnx",defaultMessage:"Images can only be pasted into markdown cells."})})}function C(e,t){let{invalidateAllFilesQueries:a}=(0,d.p)();return{handleDrop:(0,r.useCallback)(n=>{var r;return(r=function*(){let r;if(!n)return;let i=e.notebook()?.get("pathName");if(!i)return;let d=i.substring(0,i.lastIndexOf("/")),f=E(n.name);if(!function(e,t){let a=e.current?.getEditorInstance();if(!a)return!1;let n=a.getModel();if(!n)return!1;let r=a.getSelection();if(!r)return!1;if(r={startLineNumber:r.startLineNumber,endLineNumber:r.endLineNumber,startColumn:r.startColumn,endColumn:r.endColumn},n.getLineContent(r.startLineNumber).includes("%md")){let e=n.getFullModelRange().getEndPosition();r.startLineNumber===e.lineNumber&&(t="\n"+t),r={startColumn:e.column,startLineNumber:e.lineNumber,endColumn:e.column,endLineNumber:e.lineNumber}}return a.executeEdits("drag-and-drop",[{range:r,text:t}]),!0}(t,f))return void A();let h="";try{h=n.type.split("/")[1]}finally{(0,g.EH)(h)}let T=(0,o.W)("databricks.fe.webapp.migrateNotebookMarkdownImageUploadToWorkspaceApi",!1);if(T){let e=new FormData;e.append("file",n,n.name),e.append("path",`/Workspace${d}/${n.name}`),e.append("format","AUTO"),e.append("overwrite","false"),e.append("rename_on_conflict","false"),r=yield(0,l.S)("/ajax-api/2.0/workspace/import",{method:"POST",body:e})}else{let e=`/ajax-api/2.0/workspace-files/import-file${(0,u.fr)(`${d}/${n.name}`)}?overwrite=false&renameOnConflict=false`;r=yield(0,l.S)(e,{method:"POST",body:n})}if(r&&!r.ok){y(t,f,"");let e=409===r.status;if(!e&&T&&400===r.status)try{let t=yield r.json();e=t?.error_code==="RESOURCE_ALREADY_EXISTS"}catch{}e?I():A();return}if(r&&r.ok){y(t,f,b(n.name));let r=e.notebook()?.get("parentId");if(r&&(0,c.j7)()){let e=new m.A({id:"unknown",type:s.Z6.File,name:n.name,parentId:r.toString()});(0,p.$o)().trigger("add",e)}a()}},function(){var e=this,t=arguments;return new Promise(function(a,n){var i=r.apply(e,t);function o(e){h(i,a,n,o,s,"next",e)}function s(e){h(i,a,n,o,s,"throw",e)}o(void 0)})})()},[e,t,a])}}},360217:(e,t,a)=>{a.d(t,{yn:()=>o});var n=a(267647),r=a(169750);function i(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}let o=(0,n.N)(r.E.MERLIN_SUPPORT,e=>{var t;return(t=function*(){return(e=>{let{contextObject:t}=e;return{merlinSupportInfo:{...t.merlinSupportInfo}}})(e)},function(){var e=this,a=arguments;return new Promise(function(n,r){var o=t.apply(e,a);function s(e){i(o,n,r,s,l,"next",e)}function l(e){i(o,n,r,s,l,"throw",e)}s(void 0)})})()},e=>({...e.merlinSupportInfo}),e=>"")},361704:(e,t,a)=>{a.d(t,{I$:()=>p,I8:()=>v,K2:()=>f,Ow:()=>m,R9:()=>_,_y:()=>g,ct:()=>c,d9:()=>C,mp:()=>d});var n=a(802558),r=a.n(n),i=a(377063),o=a.n(i),s=a(609668),l=a(21739),u=a(606674);let c=["boolean","integer","float","decimal","date","datetime","string","complex"];function d(e){return"integer"===e||"float"===e||"decimal"===e}let m=["null","nulln","eq","eqn","true","false","contains","containsn","startswith","startswithn","endswith","endswithn","oneof","oneofn","gt","gte","lt","lte","between","after","before"];function p(e){return"complex"===e.dataType||"string"===e.dataType}function f(e){return"integer"===e.dataType||"float"===e.dataType||"decimal"===e.dataType}function g(e){return"date"===e.dataType||"datetime"===e.dataType}class h{filterId;columnId;enabled;dataType;filterType;filterValue;filterValues;filterConfig;constructor(e){this.filterId=e.filterId,this.columnId=e.columnId,this.enabled=e.enabled,this.dataType=e.dataType,this.filterType=e.filterType,this.filterValue=e.filterValue,this.filterValues=e.filterValues,this.filterConfig=e.filterConfig??{}}filter(e){throw Error("not implemented")}toJSON(){return{filterId:this.filterId,columnId:this.columnId,enabled:this.enabled,dataType:this.dataType,filterType:this.filterType,filterValue:this.filterValue,filterValues:this.filterValues,filterConfig:this.filterConfig}}static isEqual(e,t){if(!e||!t)return!1;let a=e instanceof h?e:R(e),n=t instanceof h?t:R(t);return a.enabled===n.enabled&&a.filterId===n.filterId&&a.columnId===n.columnId&&a.dataType===n.dataType&&a.filterType===n.filterType&&r()(a.filterValue,n.filterValue)&&r()(a.filterValues,n.filterValues)&&r()(a.filterConfig,n.filterConfig)}}class E extends h{constructor(e){super(e)}filter(){return!0}}class b extends h{filter(e){let t=null==e||Number.isNaN(e)||"complex"===this.dataType&&"null"===e;return"null"===this.filterType?t:!t}}class T extends h{constructor(e){super(e),this.filterValue="true"===e.filterType}filter(e){if("boolean"!=typeof e)return!1;return this.filterValue===e}}class y extends h{lowerCaseValue;lowerCaseValues;doFilter;constructor(e){super(e),this.sanitizeFilterValues(),this.lowerCaseValue=this.filterValue?.toLowerCase()??"",this.lowerCaseValues=this.filterValues?.map(e=>e.toLowerCase())??[];const{caseSensitive:t}=this.filterConfig;switch(this.filterType){case"eq":this.doFilter=e=>t?this.filterValue===e:this.lowerCaseValue===e.toLowerCase();break;case"eqn":this.doFilter=e=>t?this.filterValue!==e:this.lowerCaseValue!==e.toLowerCase();break;case"contains":this.doFilter=e=>t?e.includes(this.filterValue):e.toLowerCase().includes(this.lowerCaseValue);break;case"containsn":this.doFilter=e=>t?!e.includes(this.filterValue):!e.toLowerCase().includes(this.lowerCaseValue);break;case"startswith":this.doFilter=e=>t?e.startsWith(this.filterValue):e.toLowerCase().startsWith(this.lowerCaseValue);break;case"startswithn":this.doFilter=e=>t?!e.startsWith(this.filterValue):!e.toLowerCase().startsWith(this.lowerCaseValue);break;case"endswith":this.doFilter=e=>t?e.endsWith(this.filterValue):e.toLowerCase().endsWith(this.lowerCaseValue);break;case"endswithn":this.doFilter=e=>t?!e.endsWith(this.filterValue):!e.toLowerCase().endsWith(this.lowerCaseValue);break;case"oneof":this.doFilter=e=>t?this.filterValues.includes(e):this.lowerCaseValues.includes(e.toLowerCase());break;case"oneofn":this.doFilter=e=>t?!this.filterValues.includes(e):!this.lowerCaseValues.includes(e.toLowerCase());break;default:this.doFilter=e=>!0}}static sanitizeString(e){return"string"==typeof e?e:String(e??"")}sanitizeFilterValues(){this.filterValue=y.sanitizeString(this.filterValue),this.filterValues=this.filterValues?.map(y.sanitizeString)}static NEGATIVE_FILTER_TYPTES=new Set(["eqn","containsn","startswithn","endswithn","oneofn"]);isNegative(){return y.NEGATIVE_FILTER_TYPTES.has(this.filterType)}filter(e){return"string"==typeof e?this.doFilter(e):this.isNegative()}}class I extends h{doFilter;constructor(e){super(e),this.sanitizeFilterValues(),"number"===this.dataType&&(this.dataType="float");const{filterValue:t,filterType:a}=this;switch(a){case"eq":this.doFilter=e=>I.eq(e,t);break;case"eqn":this.doFilter=e=>!I.eq(e,t);break;case"oneof":this.doFilter=e=>this.filterValues.some(t=>I.eq(e,t));break;case"oneofn":this.doFilter=e=>this.filterValues.every(t=>!I.eq(e,t));break;case"gt":this.doFilter=e=>I.gt(e,t);break;case"gte":this.doFilter=e=>I.gte(e,t);break;case"lt":this.doFilter=e=>I.lt(e,t);break;case"lte":this.doFilter=e=>I.lte(e,t);break;case"between":this.doFilter=e=>{let{includeMin:t,includeMax:a}=this.filterConfig,[n,r]=this.filterValues,i=t?I.gte(e,n):I.gt(e,n),o=a?I.lte(e,r):I.lt(e,r);return i&&o};break;default:throw Error(`Unsupported number filter type: ${a}`)}}static sanitizeNumber(e){return(0,l.p_)(e)?e:Number(e)}sanitizeFilterValues(){this.filterValue=I.sanitizeNumber(this.filterValue),this.filterValues=this.filterValues?.map(I.sanitizeNumber)??[]}static NEGATIVE_FILTER_TYPTES=new Set(["eqn","oneofn"]);isNegative(){return I.NEGATIVE_FILTER_TYPTES.has(this.filterType)}filter(e){let t="string"==typeof e&&e?I.sanitizeNumber(e):e;return"number"==typeof t&&Number.isFinite(t)||(0,l.p_)(t)?this.doFilter(t):this.isNegative()}static eq(e,t){return(0,l.p_)(e)?e.eq(t):(0,l.p_)(t)?t.eq(e):e===t}static gt(e,t){return(0,l.p_)(e)?e.gt(t):(0,l.p_)(t)?t.lt(e):e>t}static gte(e,t){return(0,l.p_)(e)?e.gte(t):(0,l.p_)(t)?t.lte(e):e>=t}static lt(e,t){return(0,l.p_)(e)?e.lt(t):(0,l.p_)(t)?t.gt(e):e<t}static lte(e,t){return(0,l.p_)(e)?e.lte(t):(0,l.p_)(t)?t.gte(e):e<=t}}class A extends h{doFilter;constructor(e){super(e),this.sanitizeFilterValues();const{includeMin:t,includeMax:a,datePrecision:n}=this.filterConfig,r=n&&"none"!==n?n:"datetime"===this.dataType?"second":"day";switch(this.filterType){case"eq":this.doFilter=e=>e.isSame(this.filterValue,r);break;case"eqn":this.doFilter=e=>!e.isSame(this.filterValue,r);break;case"oneof":this.doFilter=e=>this.filterValues.some(t=>e.isSame(t,r));break;case"oneofn":this.doFilter=e=>this.filterValues.every(t=>!e.isSame(t,r));break;case"after":this.doFilter=e=>t?e.isSameOrAfter(this.filterValue,r):e.isAfter(this.filterValue,r);break;case"before":this.doFilter=e=>a?e.isSameOrBefore(this.filterValue,r):e.isBefore(this.filterValue,r);break;case"between":this.doFilter=e=>{let[t,a]=this.filterValues;return e.isBetween(t,a,r,this.getInclusivity())};break;default:throw Error(`Unsupported date/time filter type: ${this.filterType}`)}}static NEGATIVE_FILTER_TYPTES=new Set(["eqn","oneofn"]);isNegative(){return A.NEGATIVE_FILTER_TYPTES.has(this.filterType)}filter(e){let t="string"==typeof e?A.sanitizeDataValue(e):e;return(0,i.isMoment)(t)&&t.isValid()?this.doFilter(t):this.isNegative()}static sanitizeFilterValue(e,t="datetime"){let a=(0,i.isMoment)(e)?e:(0,s.DP)(e);return"date"===t&&a.startOf("day"),a}static sanitizeDataValue(e){if((0,i.isMoment)(e)||"string"==typeof e||"number"==typeof e)return(0,s.DP)(e)??o().invalid();return o().invalid()}sanitizeFilterValues(){this.filterValue&&(this.filterValue=A.sanitizeFilterValue(this.filterValue,this.dataType)),this.filterValues&&(this.filterValues=this.filterValues.map(e=>A.sanitizeFilterValue(e,this.dataType)))}getInclusivity(){let{includeMin:e,includeMax:t}=this.filterConfig;return e&&t?"[]":e&&!t?"[)":!e&&t?"(]":"()"}static toJSON(e){let t={...e};return(0,i.isMoment)(t.filterValue)&&(t.filterValue=t.filterValue.format(u.ui.datetime)),t.filterValues&&(t.filterValues=t.filterValues.map(e=>(0,i.isMoment)(e)?e.format(u.ui.datetime):e)),t}}class v{filterGroupId;enabled;op;filters;local;updatedAt;pristine;constructor(e,{preserveIncompleteFilters:t=!1}={}){this.filterGroupId=e.filterGroupId,this.enabled=e.enabled,this.op=e.op,this.filters=t?e.filters.map(e=>_(e)?R(e):new E(e)):e.filters.filter(e=>e.enabled&&_(e)).map(R),this.local=e.local??!1,this.updatedAt=e.updatedAt??new Date().getTime(),this.pristine=e.pristine??!1}getColumnId(){return this.filters[0]?.columnId}filter(e){if("AND"===this.op)return this.filters.every(t=>t.filter(e));return this.filters.some(t=>t.filter(e))}toJSON(){return{enabled:this.enabled,op:this.op,filterGroupId:this.filterGroupId,filters:this.filters.map(e=>e.toJSON()),local:this.local,updatedAt:this.updatedAt}}static toJSON(e){return{...e,filters:e.filters.map(e=>{if(e&&g(e))return A.toJSON(e);return e})}}static isPristine(e){return 1===e.filters.length&&S(e.filters[0])}static isEnabled(e){return e.enabled&&e.filters.some(e=>e.enabled)}static isValid(e){return e.filters.some(_)}static isEqual(e,t){if(!e||!t)return!1;let a=e instanceof v?e:new v(e),n=t instanceof v?t:new v(t);return a.enabled===n.enabled&&a.filterGroupId===n.filterGroupId&&a.op===n.op&&a.filters.length===n.filters.length&&a.filters.every((e,t)=>h.isEqual(e,n.filters[t]))}static hasEffectiveChanges(e,t){let a=e&&v.isValid(e),n=t&&v.isValid(t);if(a||n)return!v.isEqual(e,t);return!1}}function S(e){return void 0===e.columnId&&void 0===e.columnExpr}function _(e){if(S(e)||void 0===e.dataType||void 0===e.filterType)return!1;if("true"===e.filterType||"false"===e.filterType||e.filterType.startsWith("null"))return!0;if("between"===e.filterType||e.filterType.startsWith("oneof")){let t=e.filterValues;return Array.isArray(t)&&t.length>0&&!t.some(C)}return!C(e.filterValue)}function C(e){return null==e||""===e}function R(e){let{filterType:t,dataType:a}=e;if("null"===t||"nulln"===t)return new b(e);switch(a){case"boolean":return new T(e);case"number":case"integer":case"float":case"decimal":return new I(e);case"date":case"datetime":return new A(e);case"string":case"complex":return new y(e);default:throw Error(`unexpected filter data type: ${a}`)}}},363283:(e,t,a)=>{a.d(t,{Ay:()=>s,Ww:()=>o.a});var n=a(536717),r=a.n(n),i=a(544004),o=a.n(i);o().setConfig({ADD_ATTR:["target"]}),o().addHook("afterSanitizeAttributes",function(e){let t=e.getAttribute("target");r()(t)&&"_blank"===t.toLowerCase()?e.setAttribute("rel","noopener noreferrer"):e.removeAttribute("target")});let s=o().sanitize},365532:(e,t,a)=>{a.d(t,{B:()=>l});var n=a(692738),r=a(711819),i=a(348907),o=a(617293),s=a(29824);let l=n.memo(function({objectType:e,browseOnly:t=!1,accessible:a=!0,withTooltip:l=!0,tooltipProps:u={},styleProps:c,avatarStyleSize:d=null,name:m,securableKind:p,catalogProps:f}){let g=(0,n.useMemo)(()=>u,[u]),h=(0,r.IE)({objectType:e,browseOnly:t,accessible:a,tooltipProps:g,styleProps:c,avatarStyleSize:d,withTooltip:l,isPostgres:f?.isPostgres,securableKind:p});if(e!==s.an.CATALOG)return h;{let e=(0,o.K2)({catalogName:m,catalogType:f?.catalogType,securableKind:f?.securableKind,isDefaultCatalog:f?.isDefault});return(0,i.yb)({name:m,accessible:a,securableKind:f?.securableKind,browseOnly:t,tooltipProps:u,avatarStyleSize:d,catalogIconVariant:e,withTooltip:l,isPostgres:f?.isPostgres})}})},366426:(e,t,a)=>{a.d(t,{A4:()=>p,E$:()=>s,Eb:()=>I,L9:()=>b,P5:()=>o,PK:()=>T,Po:()=>m,RY:()=>g,Tn:()=>c,Wl:()=>l,Wq:()=>A,bI:()=>u,hD:()=>f,jN:()=>i,lv:()=>h,ss:()=>E,u1:()=>y,yX:()=>d});var n=a(842082),r=a(158555);function i(e){return!!(e&&"name"in e&&"securable_type"in e)}function o(e){return!!(e&&"path"in e&&"name"in e&&"is_dir"in e)}function s(e){return/CATALOG/i.test(e?.securable_type??"")}function l(e){return/SCHEMA/i.test(e?.securable_type??"")}function u(e){return/TABLE/i.test(e?.securable_type??"")}function c(e){return/FUNCTION/i.test(e?.securable_type??"")}function d(e){return/MODEL/i.test(e?.securable_type??"")||/FUNCTION_REGISTERED_MODEL/i.test(e?.securable_kind??"")}function m(e){return/VOLUME/i.test(e?.securable_type??"")}function p(e){return!!(e&&"is_dir"in e&&e.is_dir)}function f(e,t){if(!e||!t)return!1;if(s(e))return e.name===t.name;if(l(e)&&l(t))return e.name===t.name&&e.catalog_name===t.catalog_name;if(u(e)&&u(t)||c(e)&&c(t)||d(e)&&d(t)||m(e)&&m(t))return e.name===t.name&&e.schema_name===t.schema_name&&e.catalog_name===t.catalog_name;return!1}function g(e,t){if(i(e)&&i(t))return f(e,t);if(o(e)&&o(t)){if(!e||!t)return!1;return e.name===t.name&&e.path===t.path&&e.is_dir===t.is_dir}return!1}function h(e){if(s(e))return(0,n.BW)(e.name);if(l(e)){let{catalog_name:t,name:a}=e,r=(0,n.BW)(t),i=(0,n.BW)(a);return`${r}.${i}`}if(u(e)||c(e)||d(e)||m(e)){let{catalog_name:t="",schema_name:a="",name:r}=e,i=(0,n.BW)(t),o=(0,n.BW)(a),s=(0,n.BW)(r);return`${i}.${o}.${s}`}return""}function E(e){return`/Volumes/${e.catalog_name}/${e.schema_name}/${e.name}/`}function b(e){if(i(e)){if(s(e))return null;if(l(e))return{securable_type:"CATALOG",name:e.catalog_name};if(u(e)||c(e)||d(e)||m(e))return{securable_type:"SCHEMA",catalog_name:e.catalog_name,name:e.schema_name}}else if(o(e)){let t=e.path.replace(/\/$/,"").split("/").slice(0,-1).join("/")+"/";if(!/^\/Volumes\/[^/]+\/[^/]+\/[^/]+?\/$/.test(t))return{name:T(t),path:t,is_dir:!0};{let[e,a,n]=t.split("/").slice(2);return{securable_type:"VOLUME",catalog_name:e,schema_name:a,name:n}}}return null}function T(e){return e.replace(/\/$/,"").split("/").pop()??""}function y(e){if(e&&"response"in e)return e.response?.data?.message??e.message??"";return e?.message??""}function I(e){if(!e.includes("/Volumes/"))return;let t=e.split("/");if(t.length>5)return{is_dir:!0,name:T(e),path:e};if(t.length>=5)return{catalog_name:t[2],schema_name:t[3],name:t[4],securable_type:"VOLUME",securable_kind:"VOLUME_STANDARD"};if(t.length>=4)return{catalog_name:t[2],name:t[3],securable_type:"SCHEMA",securable_kind:"SCHEMA_STANDARD"};if(t.length>=3)return{name:t[2],securable_type:"CATALOG",securable_kind:"CATALOG_STANDARD"}}function A(e,t){if(e===r.h8.SCHEMA)return[r.h8.TABLE,r.h8.VOLUME,r.h8.MODEL,r.h8.FUNCTION].includes(t);return!1}},367295:(e,t,a)=>{a.d(t,{L:()=>o});var n=a(371303),r=a(726583),i=a(924876);function o(){return{includeSubscriptions:(0,n.sT)("databricks.fe.jaws.enableDashboardSubscriptionsUi",!1),includeJobInRunJobTask:!0,includeJobParameters:(0,r.ue)(),includeTaskDependencyOutcome:!0,includeTriggerState:!0,includePeriodicTrigger:!0,includeOnStreamingBacklogExceeded:(0,i.cG)(),includeSourceInDbtAndSqlFile:!0}}},370781:(e,t,a)=>{a.d(t,{f:()=>i});var n=a(692738),r=a(681695);function i(){return(0,n.useCallback)(e=>r.Ye.call({callback:e}),[])}},372107:(e,t,a)=>{a.d(t,{H:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enableWorkspaceSidebar",!1)}},373223:(e,t,a)=>{a.d(t,{Ux:()=>m});var n=a(348844),r=a(178808),i=a(779862),o=a(749850),s=a(158014),l=a(387039),u=a(323859),c=a(952067),d=a(552612);function m(e,t,a){let m=function(e,t){let a=e.series?.stacking;if(null==a&&(a=""),"stack"===a)return e.series.percentValues?"percent-stack":"stack";if(""===a){let a=(0,s.d)(e),n=e.series?.percentValues?"percent-stack":"stack",o=e.series?.percentValues?"_percent-group":"group",l=e.series?.percentValues?"_percent-layer":"layer";if("pie"===a)return n;if("bar"===a){let{x:a,series:s}=e.columnConfigurationMap;if(!a||!s)return o;let l=(0,i.qv)(e.xAxis?.type)??(0,i.Zp)({fieldName:a.column,columns:t,transform:(0,r.v)(a?.transform)});if((0,c.wF)(l))return n;return o}return["boxplot","combo"].includes(a)?o:l}}(e,t),f=function(e,t){let{seriesOptions:a,columnConfigurationMap:r}=e;if(r.y&&r.y.length>0){let i=!1,u=function(e){if(!e)return l.ji;let t=Array(e);for(let a=0;a<e;a++)t[a]=l.ji[a%l.ji.length];return t}(r.y.length),c=[...u];if((0,n.SB)(r.y,a,t).forEach((n,r)=>{let o=t(a,n);o?.color?(c[o?.zIndex??r]=o.color,i=!0):o?.zIndex!==void 0&&"combo"===(0,s.d)(e)&&(c[r]=u[o?.zIndex],i=!0)}),i){if(r.series)throw Error(o.gE);return c}}}(e,a),g=function(e){if(e.colorScheme){if(e.colorScheme in d.A)return d.A[e.colorScheme].map(e=>e[1]);else if(e.colorScheme===d.r&&e.heatMinColor&&e.heatMaxColor)return[e.heatMinColor,e.heatMaxColor]}}(e),{globalSeriesType:h,swappedAxes:E,columnConfigurationMap:b,isAggregationOn:T}=e,y=b.y?.flatMap(({column:e})=>{let a=t.find(({name:t})=>t===e);return a?[a]:[]}),I=t.find(({name:e})=>e===b.series?.column),A=function({columns:e,columnConfigurationMap:t,yColumns:a,globalSeriesType:n,swappedAxes:r,isAggregationOn:i}){let{x:o}=t,s=e.find(({name:e})=>e===o?.column),l=s?.type?(0,c.SV)(s.type,void 0):void 0,u=(0,c.wF)(l||void 0),d=a?.length&&a.length>0&&a.every(({type:e})=>(0,c.wF)((0,c.SV)(e,void 0)));if(p.includes(n)){if(r&&u&&d)return"x";if(!o)return r?"x":"y"}}({columns:t,columnConfigurationMap:b,yColumns:y,globalSeriesType:h,swappedAxes:E,isAggregationOn:T});return{...m?{layout:m}:{},...f?{colors:f}:{},...g?{_colorRamp:g}:{},_reverseStackByColor:!!(0,u.Lx)(m)&&y?.length===1&&!!I,...A?{_dependentAxis:A}:{}}}let p=["column","box","area","line"]},374161:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.FD)("g",{fill:"currentColor",fillRule:"evenodd",clipPath:"url(#CatalogGearIcon_svg__a)",clipRule:"evenodd",children:[(0,n.Y)("path",{d:"M14 7.5V.75a.75.75 0 0 0-.75-.75H4.5A2.5 2.5 0 0 0 2 2.5v10.75A2.75 2.75 0 0 0 4.75 16H8v-1.5H4.75c-.69 0-1.25-.56-1.25-1.25V4.792c.306.134.644.208 1 .208h8v2.5zm-9.5-4a1 1 0 0 1 0-2h8v2z"}),(0,n.Y)("path",{d:"M13.125 10.081q.364.114.673.325l.88-.703.936 1.173-.88.702q.136.344.166.729l1.098.25-.334 1.463-1.098-.25a2.6 2.6 0 0 1-.466.584l.49 1.014-1.352.651-.489-1.014a2.6 2.6 0 0 1-.748 0l-.488 1.014-1.351-.65.488-1.015a2.6 2.6 0 0 1-.466-.584l-1.098.25-.334-1.462 1.098-.25q.031-.385.166-.73l-.88-.702.935-1.172.88.702q.31-.211.674-.325V8.955h1.5zm.263 2.42a1.013 1.013 0 1 1-2.026 0 1.013 1.013 0 0 1 2.026 0"})]}),(0,n.Y)("defs",{children:(0,n.Y)("clipPath",{children:(0,n.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CatalogGearIcon";let l=s},374535:(e,t,a)=>{a.d(t,{$z:()=>v,EJ:()=>V,G9:()=>O,Md:()=>U,Nf:()=>x,Xs:()=>_,_j:()=>D,bV:()=>A,i1:()=>M,iU:()=>k,oj:()=>P,rE:()=>w,st:()=>R,uY:()=>L,v3:()=>$,xL:()=>N});var n=a(623576),r=a.n(n),i=a(139259),o=a.n(i),s=a(865387),l=a.n(s),u=a(16778),c=a.n(u),d=a(916424),m=a.n(d),p=a(90114),f=a.n(p),g=a(342411),h=a(13451),E=a(580500),b=a(460997),T=a(5697),y=a(889885),I=a(78340);let A=(e,t)=>v(e.allowed_actions,t),v=(e,t)=>{if(!e)return!1;let a=[T.rc.All,t];return e.some(e=>a.includes(e))},S=e=>({"*":T.rc.All,read:T.rc.Read,modify:T.rc.Modify,execute:T.rc.Execute,modify_permissions:T.rc.ModifyPermissions,remove:T.rc.Remove})[e],_=e=>(e||[]).map(S).filter(e=>void 0!==e),C=(0,g.YK)({[T.e6.Manage]:{id:"sCv0/d",defaultMessage:"Can Manage"},[T.e6.Run]:{id:"PXFMSk",defaultMessage:"Can Run"},[T.e6.Read]:{id:"kcKLww",defaultMessage:"Can View"},[T.e6.Edit]:{id:"SbajQT",defaultMessage:"Can Edit"}});function R(e){if(e in C&&e!==T.e6.None)return C[e];return(0,g.zR)({id:"9yUX8j",defaultMessage:"{fallback}"})}function O(e){return r()(l()(e),c()).join(" ")}function N(e,t){let a={group:0,user:1,serviceprincipal:2};return o()(e,[e=>(0,b.x0)(e)===(0,b.x0)(t),e=>e.inherited,e=>{let t=(0,b.fz)(e);return t&&a[t]},e=>(0,b.E2)(e)],["desc","desc","asc","asc"])}function k(e){let t=T.oy.length;for(let a of e){let e=T.oy.indexOf(a);e<t&&(t=e)}return T.oy[t]}function w(e){if(!e||!e.permissions)return[];return e.permissions.map(e=>(0,b.x8)(e.principal)).filter(e=>!!e)}let M=e=>f()(m()(e,"principal"),e=>e.flatMap(({permissions:e})=>e)),P=(e,t,a,n)=>{let{permission_level:r}=e,i=D(e,a,n);return(r===T.e6.Edit||r===T.e6.Manage)&&t===T.Ek.Owner&&!i},D=(e,t,a)=>{if((0,I.Y)())return e.user_name===a;let{...n}=e,r=(0,E.Uk)(n.principal||"");return(0,E.Uk)(t||"")===r};function L(e){if(!e.expanded_permissions)return[];let t={},{permissions:a=[],expanded_permissions:n=[]}=e;[...a,...n].forEach(e=>{t[(0,b.x8)(e.principal)]={name:e.principal_name||"",display_name:e.principal_display_name||"",kind:(e.principal_type?.replace("Account","")||"").toLowerCase()}});let r=M(e.expanded_permissions),i=M(e.permissions||[]),o=f()(r,k);return Object.keys(o).map(e=>{let a={principal:e,permission_level:o[e],inherited:!(i[e]&&i[e].length)},n=t[(0,b.x8)(e)];if(!n)return;return n?.kind==="user"?(a.user_name=n.name,a.user_full_name=n.display_name?n.display_name:void 0):n?.kind==="group"?a.group_name=n.name:n?.kind==="serviceprincipal"&&(a.service_principal_name=n.name,a.service_principal_display_name=n.display_name?n.display_name:void 0),a}).filter(e=>!!e)}let x=(0,g.zR)({id:"3/Ersy",defaultMessage:"You do not have permission to perform this action"}),U=(0,g.zR)({id:"8kSGlj",defaultMessage:"Folder is protected"}),F=(0,g.zR)({id:"PomTY0",defaultMessage:"Workspace Access Control is disabled for this workspace. Please contact your administrator."}),$=(e,t)=>{if(t&&!e)return x;if(!t)return F;return null},V=e=>{if(!e)return{supportsSharing:!0,userCanShare:!0,disabledReason:null};if(!(0,E.sj)(e))return{supportsSharing:!1,userCanShare:!1,disabledReason:null};let t=$(A(e,T.rc.ModifyPermissions),!!(0,y.Nm)("enableWorkspaceAclsConfig",()=>"true"===(0,h.e)("enableWorkspaceAclsConfig","false")));return{supportsSharing:!0,userCanShare:!t,disabledReason:t}}},377523:(e,t,a)=>{a.d(t,{y:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enableDatasetPublishMaterialization",!1)}},381331:(e,t,a)=>{a.d(t,{w:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.dashboardConfigLazyMatEnabled",!0)}},385123:(e,t,a)=>{a.d(t,{Jf:()=>o,o_:()=>i});var n=a(806932);let r=new(a.n(n)()),i=e=>{let t=r.parse(e,{});return(t.find(e=>"fence"===e.type&&"code"===e.tag)?.content??"").trimEnd()},o=(e,t,a)=>{let n=e.trim().match(/^\s*%([\w-]+)(\s|$)/);if(n&&n.length>=2&&["scala","python","r","sql","py","md","markdown","md-sandbox"].includes(n[1])&&!t.includes(`%${n[1]}`)&&!a.includes(`%${n[1]}`))return`%${n[1]}
${t}`;return t}},390258:(e,t,a)=>{a.d(t,{$:()=>s,w:()=>l});var n=a(507624),r=a(752428),i=a(258671);let o={avg:"average",median:"median",percentile:"median",approx_percentile:"median",countdistinct:"distinct",sum:"sum",count:"count",max:"max",min:"min",variance:"variance",stddev:"stdev",measure:"values"};function s(e){return"object"==typeof e&&"function"==typeof e.alias}function l({transform:e,scaleType:t,vlFieldEncodingMode:a,encodingPath:s,domainSignalMap:u}){let c=e?.fn;if("transform"===a&&(0,n.rS)(c))return{aggregate:o[c]};if("quantitative"===t&&(0,r.Kj)(e)&&(0,i.Me)(s?.channel)){if(u?.get("xBin"))return{bin:{binned:!0,step:{signal:`calculateTickStep(${e.binWidth}, xBinDomain[0], xBinDomain[1], tickEvery, width)`},anchor:0}};return{bin:{binned:!0,step:e.binWidth,anchor:0}}}return{}}},394244:(e,t,a)=>{a.d(t,{AY:()=>r,VL:()=>i,ar:()=>s,sG:()=>l,ur:()=>o});var n=a(1859);function r(e){return`ingestion-${e}-`}let i=e=>({name:`${r(e)}open`,defaultValue:!1,codec:n.XE,historyAction:"push",errorMode:"throw"}),o=()=>({name:"subId",defaultValue:void 0,codec:n._p,historyAction:"push",errorMode:"throw"}),s=e=>({name:`${r(e)}-catalog`,defaultValue:void 0,codec:n._p,historyAction:"push",errorMode:"throw"}),l=e=>({name:`${r(e)}-schema`,defaultValue:void 0,codec:n._p,historyAction:"push",errorMode:"throw"})},394917:(e,t,a)=>{a.d(t,{W:()=>o,f:()=>s});var n=a(141078),r=a(441535),i=a(956963);let o=()=>(0,r.W)("databricks.editor.ghostTextWorkspaceEnable",!1)&&(0,r.W)("databricks.conversation.conf.enableGhostText",!0);function s(){let e=o(),t="ghosttext-code-completion",{data:a}=(0,n.IT)(i.Y,{variables:{input:{modelNames:[t],clientId:"inline-completion"}},skip:!e||!(0,r.W)("databricks.fe.enableAssistantModelAvailabilityCheck",!1),fetchPolicy:"cache-first"}),s=(a?.conversationGetModelStatus?.modelStatuses??[]).find(e=>e.name===t);if(!s)return!1;return e&&!!s.isAvailable}},397382:(e,t,a)=>{a.d(t,{N:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.discover.domainsRecommendations",!1)}},398765:(e,t,a)=>{},401160:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.75 1a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75V1.75a.75.75 0 0 0-.75-.75zM7.5 2.5h-4v6.055l1.495-1.36a.75.75 0 0 1 1.01 0L7.5 8.555zm-4 8.082 2-1.818 2.246 2.041A.75.75 0 0 0 9 10.25V2.5h3.5v12h-9z",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="BookIcon";let l=s},410268:(e,t,a)=>{a.d(t,{Ko:()=>I,Lc:()=>u,Lg:()=>h,N5:()=>E,Tl:()=>i,Yq:()=>l,ZB:()=>g,bt:()=>s,bu:()=>m,cr:()=>T,d2:()=>o,eG:()=>y,iQ:()=>b,jw:()=>d,sm:()=>p});var n=a(441535),r=a(301077);let i=["Active4D","Atom One Light","Ayu Light","GitHub Light","Tomorrow","Winter is Coming Light"],o=["Atom One Dark","Ayu Dark","Blackboard","Dracula","GitHub Dark","Monokai","One Dark Pro","Winter is Coming Dark"];function s(e){return e.replace(/[^0-9a-z-]+/gi,"-")}function l(e){return e.map(e=>s(e))}let u=new Map([[s("Active4D"),"#fafafa"],[s("Atom One Light"),"#fafafa"],[s("Ayu Light"),"#fafafa"],[s("GitHub Light"),"#fafafa"],[s("Tomorrow"),"#fafafa"],[s("Winter is Coming Light"),"#fafafa"],[s("Atom One Dark"),"#282C34"],[s("Ayu Dark"),"#0b0e14"],[s("Blackboard"),"#0C1021"],[s("Dracula"),"#282A36"],[s("GitHub Dark"),"#0d1117"],[s("Monokai"),"#252526"],[s("One Dark Pro"),"#282c34"],[s("Winter is Coming Dark"),"#282822"]]),c="object"==typeof WebAssembly&&"function"==typeof WebAssembly.instantiate,d=()=>{if(!c)return!1;return(0,n.W)("databricks.fe.editor.enableTextMate",!1)},m=()=>{if(!d())return!1;return!0},p={isWasmLoaded:!0},f="editor-prefix-";function g(e,t){(0,r.Q)(`${f}${e}`,t)}function h(e,t){let a=(0,r.M0)(`${f}${e}`,t);if(!a)return g(e,t),t;return a}let E=e=>e.replace(/(\/\*[^*]*\*+(?:[^/*][^*]*\*+)*\/)|(--.*(\n|$))/g,""),b=e=>e.replace(/(\/\*[^*]*\*+(?:[^/*][^*]*\*+)*\/)|(--.*(\n|$))/g,e=>e.replace(/[^\n]/g," ")),T=e=>e?.replaceAll("\r\n","\n")??"";function y(e,t){let a=e?e.length:0,n=t?t.length:0;if(0===a)return n;if(0===n)return a;let r=Array(n+1);for(let e=0;e<=n;++e)r[e]=Array(a+1),r[e][0]=e;let i=r[0];for(let e=1;e<=a;++e)i[e]=e;for(let i=1;i<=n;++i)for(let n=1;n<=a;++n)t.charAt(i-1)===e.charAt(n-1)?r[i][n]=r[i-1][n-1]:r[i][n]=Math.min(r[i-1][n-1],r[i][n-1],r[i-1][n])+1;return r[n][a]}function I(e,t){if(!t)return!1;return e>=1&&e<=t}},412285:(e,t,a)=>{a.d(t,{Ee:()=>o,PF:()=>u,js:()=>l,mC:()=>s});var n=a(160603),r=a(344181),i=a(374535);let o=e=>["objectsPermissions",{name:e.name}],s=(e,t)=>(0,n.useQuery)(o(e),()=>(0,r.p)(e),{enabled:t,useErrorBoundary:!1}),l=e=>["objectsComputedPermissions",{name:e.name}],u=(e,t=!0)=>(0,n.useQuery)(l(e),()=>(0,r.p)(e),{enabled:t,useErrorBoundary:!1,select:e=>Object.fromEntries(Object.entries((0,i.i1)(e.expanded_permissions)).map(([e,t])=>[e,(0,i.iU)(t)]))})},415767:(e,t,a)=>{a.d(t,{p:()=>i,y:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.textBoxCharacterLimit",!1)}function i(){return(0,n.W)("databricks.fe.lakeview.textBoxMaxLength",5e4)}},419031:(e,t,a)=>{a.d(t,{J2:()=>d,s0:()=>c});var n=a(441535),r=a(276093),i=a(228091);let o=e=>{if(e.startsWith("`")&&e.endsWith("`"))return e.slice(1,-1);return e},s=e=>{let t=e.split(".").map(e=>o(e));if(t.length<=3)return t},l=e=>{let t=(0,r.N5)(e.trim().toLowerCase()).slice(0,260),a=/create\s+(?:or\s+replace\s+)?(?:materialized\s+)?((?:temp|temporary)\s+)?view\s+(?:if not exists\s+)?([^ \t\r\n\v\f(]+)(?:\s+|\()/g.exec(t);if(a){if(a[1]&&a[2])return{tempTableOrViewName:o(a[2])};else if(a[2])return{tableOrViewIdentifierPath:s(a[2])}}let l=/create\s+(?:or\s+replace\s+)?((?:temp|temporary)\s+)?(?:or\s+refresh\s+)?(?:streaming\s+)?table\s+(?:if not exists\s+)?([^ \t\r\n\v\f(]+)(?:\s+|\()/g.exec(t);if(l){if(l[1]&&l[2])return{tempTableOrViewName:o(l[2])};else if(l[2])return{tableOrViewIdentifierPath:s(l[2])}}if((0,i.k)()){let e=/create\s+(?:external\s+)?volume\s+(?:if not exists\s+)?([^ \t\r\n\v\f(;]+)(?:\s|\(|;|$)/g.exec(t);if(e&&e[1])return{volumeIdentifierPath:s(e[1])};let a=/alter\s+volume\s+(?:[^ \t\r\n\v\f(;]+)\s+rename\s+to\s+([^ \t\r\n\v\f(;]+)(?:\s|\(|;|$)/g.exec(t);if(a&&a[1])return{volumeIdentifierPath:s(a[1])}}if((0,n.W)("databricks.fe.editor.antlr.tempVariableSupport",!1)){let e=/declare\s+(?:or\s+replace\s+)?(?:(?:variable|var)\s+)?((?:`[^`]+`|[^ \t\r\n\v\f(,=]+)(?:\s*,\s*(?:`[^`]+`|[^ \t\r\n\v\f(,=]+))*)/g.exec(t);if(e)return{tempVariableNames:(e[1].match(/`[^`]+`|[^ \t\r\n\v\f(,=]+/g)??[]).map(o).map(e=>{let t=e.split(".");return t[t.length-1]}).filter(Boolean)}}return{}},u=(e,t,a)=>{if(1===a.length)return[e,t,a[0]];if(2===a.length)return[e,a[0],a[1]];return a},c=(e,t)=>{let a,n,r,i,o;return"each"===t?(a=new Set,n=new Set,r=new Set,i=new Set,(o=e.map(e=>{let{tableOrViewIdentifierPath:t,tempTableOrViewName:o,tempVariableNames:s,volumeIdentifierPath:c}=l(e.query);return t&&a.add(u(e.catalog,e.schema,t).join(".")),c&&i.add(u(e.catalog,e.schema,c).join(".")),o&&n.add(o),s&&s.forEach(e=>{r.add(e)}),{createdTablesOrViews:[...a],tempTableOrViewNames:[...n],tempVariableNames:[...r],createdOrRenamedVolumes:[...i]}})).unshift({createdTablesOrViews:[],tempTableOrViewNames:[],tempVariableNames:[],createdOrRenamedVolumes:[]}),o):(e=>{let t=new Set,a=new Set,n=new Set,r=new Set;for(let i of e){let{tableOrViewIdentifierPath:e,tempTableOrViewName:o,tempVariableNames:s,volumeIdentifierPath:c}=l(i.query);e&&t.add(u(i.catalog,i.schema,e).join(".")),c&&r.add(u(i.catalog,i.schema,c).join(".")),o&&a.add(o),s&&s.forEach(e=>{n.add(e)})}return[{createdTablesOrViews:[...t],tempTableOrViewNames:[...a],tempVariableNames:[...n],createdOrRenamedVolumes:[...r]}]})(e)},d=(e,t)=>{if(!e)return{createdTablesOrViews:[],tempTableOrViewNames:[],tempVariableNames:[],createdOrRenamedVolumes:[]};if(!t)return e;return{createdTablesOrViews:e.createdTablesOrViews,tempTableOrViewNames:[...e.tempTableOrViewNames,...t],tempVariableNames:e.tempVariableNames,createdOrRenamedVolumes:e.createdOrRenamedVolumes}}},419189:(e,t,a)=>{a.d(t,{F:()=>i});var n=a(586356),r=a(409666);let i=(0,a(315592).Xr)({type:"range-slider",channelIndex:{fields:1},validateEditorSpec:e=>({validatedSpec:e}),version:r.B0,getEncodingMapMeta:()=>r.E9,allowDisaggregatedData:!1,allowSelection:!0,isRenderable:n.q,normalizeDecoupledSpec:(e,t)=>e})},425608:(e,t,a)=>{a.d(t,{_:()=>r});var n=a(441535);function r(e){if((0,n.W)("databricks.fe.jaws.ensureWorkspacePrefix",!0)&&e&&e.startsWith("/")&&!e.startsWith("/Workspace/")&&"/Workspace"!==e&&!e.startsWith("/Repos/"))return`/Workspace${"/"===e?"":e}`;return e}},425628:(e,t,a)=>{a.d(t,{g:()=>o});var n=a(542908),r=a(620275),i=a(441535);function o(){return!(0,n.B)()&&!(0,r.s4)()&&((0,i.W)("enable_lakeview_tags",!1)||(0,i.W)("databricks.fe.lakeview.enableLakeviewTags",!1))}},429072:(e,t,a)=>{a.d(t,{WO:()=>c,Wi:()=>u,YD:()=>d,wB:()=>m,zJ:()=>l});var n,r,i,o,s,l=((n={}).CREATOR="roles/tagPolicy.creator",n.MANAGER="roles/tagPolicy.manager",n.ASSIGNER="roles/tagPolicy.assigner",n),u=((r={}).CREATE="account/createTagPolicy",r.UPDATE="tagPolicy/update",r.DELETE="tagPolicy/delete",r.GET_RULESET="tagPolicy.ruleSet/get",r.UPDATE_RULESET="tagPolicy.ruleSet/update",r.ASSIGN="tagPolicy/assign",r.ACCOUNT_GET_RULESET="account.ruleSet/get",r.ACCOUNT_UPDATE_RULESET="account.ruleSet/update",r),c=((i={}).DEFAULT="DEFAULT",i.SYSTEM="SYSTEM",i),d=((o={}).DEFAULT="TAG_POLICY_NAMESPACE_DEFAULT",o.SYSTEM="TAG_POLICY_NAMESPACE_SYSTEM",o),m=((s={}).TAG_LEVEL="TAG_LEVEL",s.ACCOUNT_LEVEL="ACCOUNT_LEVEL",s)},436331:(e,t,a)=>{a.d(t,{n:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.lakeview.fe.failInteractionOnRenderError",!1)}},437639:(e,t,a)=>{a.d(t,{t:()=>r});var n=a(441535);function r(){let e=(0,n.W)("databricks.fe.dashboardsai.enableUpsertDatasetTool","off");if("on"===e)return!0;if("labs"===e)return(0,n.W)("databricks.datarooms.isGenieLabsEnabled",!1);return!1}},437885:(e,t,a)=>{a.d(t,{PL:()=>r,Tp:()=>i,kW:()=>n});let n="tall-item-workaround",r="short-item-workaround",i="hide-display-name"},440765:(e,t,a)=>{a.d(t,{b:()=>i});var n=a(441535),r=a(434422);let i=()=>{if(!(0,r.s)())return!1;return(0,n.W)("databricks.fe.assistant.enableDiscoveryPageAgent",!1)}},449853:(e,t,a)=>{a.r(t),a.d(t,{queryClientByWorkspace:()=>i});var n=a(22191),r=a(614127);let i=(0,a(518726).T)(()=>(0,r.j)("workspace-page",n.Es.FileBrowser,{defaultOptions:{queries:{retry:!1},mutations:{retry:!1}}}))},450275:(e,t,a)=>{a.d(t,{d:()=>s,v:()=>r});var n,r=((n={}).Bytes="Bytes",n.KiloBytes="KiloBytes",n.MegaBytes="MegaBytes",n.GigaBytes="GigaBytes",n.TeraBytes="TeraBytes",n.PetaBytes="PetaBytes",n.ExaBytes="ExaBytes",n.ZettaBytes="ZettaBytes",n.YottaBytes="YottaBytes",n);let i={Bytes:0,KiloBytes:1,MegaBytes:2,GigaBytes:3,TeraBytes:4,PetaBytes:5,ExaBytes:6,ZettaBytes:7,YottaBytes:8},o=["Bytes","KiloBytes","MegaBytes","GigaBytes","TeraBytes","PetaBytes","ExaBytes","ZettaBytes","YottaBytes"];function s(e,t="Bytes"){if(e<0)return{size:e,sizeUnit:t};let a=e*Math.pow(1024,i[t]),n=Math.floor(Math.log(a)/Math.log(1024));return{size:a/Math.pow(1024,n=Math.min(Math.max(n,0),o.length-1)),sizeUnit:o[n]}}},453063:(e,t,a)=>{a.d(t,{Di:()=>S,fL:()=>I,xy:()=>A,yw:()=>v});var n=a(377063),r=a.n(n),i=a(441535),o=a(5697),s=a(239464),l=a(981158),u=a(26026),c=a(971845),d=a(580500),m=a(82102),p=a(237792),f=a(290939),g=a(123229),h=a(975971),E=a(814796);function b(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function T(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){b(i,n,r,o,s,"next",e)}function s(e){b(i,n,r,o,s,"throw",e)}o(void 0)})}}function y(e){return T(function*(){if(e===p.Kj||function(e){if(!(0,m.$o)().get(e))return!1;return!0}(e))return;yield new Promise((t,a)=>{window.conn?.prefetchNode?.(e,t,a)})})()}function I(e){return T(function*(){yield y(e);let t=(0,m.$o)().get(e);return void 0===t&&(t={id:e}),t.attributes?.type===l.A.PROJECT_TYPE||(0,f.N)(t.id)})()}function A(e){return T(function*({parentId:e,parentName:t,parentPath:a}){var n;let r,i=e;if(void 0===i){if(t){let e=yield(0,c.J)({name:t});i=Number((0,d.Uk)(e.internal_name))}else if(a){let e=yield(0,u.T)(a);i=e?.id}}if(void 0===i)return!1;yield y(i);let s=(0,m.$o)().get(i);return void 0===s&&(s={id:i}),r=(n=s).attributes,r?.type===l.A.PROJECT_TYPE||r?.type===l.A.FOLDER_TYPE&&r?.folderSubtypes?.includes(o.Lx.GitFolder)||(0,f.N)(n.id)}).apply(this,arguments)}function v(e,t){let a=t.isInProject?"_":":",n=r()().format(`YYYY-MM-DD HH${a}mm${a}ss`);switch(t.type){case"notebook":return e.formatMessage({id:"ncB2gd",defaultMessage:"New Notebook {dateString}"},{dateString:n});case"query":return(0,s.r)(t.isInProject);case"file":let i,o=e.formatMessage({id:"UVZiAN",defaultMessage:"New File {dateString}"},{dateString:n});return`${o}.${i=(0,g.$)().get(h.jw)||E.kt,(0,E.lT)(i)}`;case"markdown":return e.formatMessage({id:"6fTJS2",defaultMessage:"New Markdown {dateString}.md"},{dateString:n});case"alert":return e.formatMessage({id:"iEnLhX",defaultMessage:"New Alert {dateString}"},{dateString:n});default:return e.formatMessage({id:"7lWp6w",defaultMessage:"New Asset {dateString}"},{dateString:n})}}let S=()=>(0,i.W)("databricks.fe.notebook.enableCheckForIsInProject",!0)},458259:(e,t,a)=>{a.d(t,{Nc:()=>i,Xm:()=>s,ZU:()=>o,m3:()=>r,mk:()=>l});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enableShadowExecution",!1)}function i(){return(0,n.W)("databricks.fe.lakeview.logShadowExecutionDiffToConsole",!1)}function o(){return(0,n.W)("databricks.fe.lakeview.shadowExecutionCompareRows",!0)}function s(){return(0,n.W)("databricks.fe.lakeview.shadowExecutionCompareColumns",!0)}function l(){let e=(0,n.W)("databricks.fe.lakeview.shadowExecutionMaxRowsToCompare",100);return e>0?e:100}},460997:(e,t,a)=>{a.d(t,{E2:()=>b,KM:()=>T,P:()=>c,TI:()=>y,fz:()=>g,nu:()=>h,oQ:()=>A,x0:()=>E,x8:()=>I,xV:()=>m});var n=a(610435);a(139259),a(581488),a(840866),a(692738);var r=a(497895),i=a(382908),o=a(79570),s=a(342411);let l="serviceprincipal",u="group",c={admins:"Admins",users:"All workspace users","account users":"All account users"};function d(e){if(!e)return e;return c[e]??e}function m(e){return!e||0===Object.keys(e).length}let p={user_name:"user",group_name:u,service_principal_name:l},f=Object.keys(p);function g(e){for(let t of f)if(void 0!==e[t])return p[t]}function h(e){return({user:{user_name:e.name},group:{group_name:e.name},serviceprincipal:{service_principal_name:e.name,application_id:e.applicationId}})[e.kind]}function E(e){let t=g(e),a=b(e);return`${t}.${a}`}function b(e){let t=d(e.group_name),a=[e.service_principal_name,t,e.user_name].find(e=>void 0!==e);if(!a)return"";return e.service_principal_name&&e.application_id&&(a=`${a} (${e.application_id})`),a}function T(e){let t=d(e.group_name),a=[e.service_principal_display_name,t,e.user_full_name].find(e=>void 0!==e);if(!a)return;return a}function y(e){let t=d(e.group_name),a=[e.service_principal_name,t,e.user_name].find(e=>void 0!==e);if(!a)return"";return a}function I(e){return e?.replace("principals/","")||e}function A(e){let{theme:t}=(0,r.wn)(),a=g(e),c=T(e),d=y(e),m=(0,n.Y)(i.o.Text,{"data-testid":"principal-text",ellipsis:!0,css:{paddingLeft:t.spacing.sm},children:c||d});if(a===u)return m;let p=function(e){let t=(0,s.tz)(),a=g(e);if(a===u)return null;let n=T(e),r=y(e),i=a===l;return void 0!==n?t.formatMessage(v.fullNameTooltip,{isSP:i,username:r}):t.formatMessage(i?v.usernameTooltipSP:v.usernameTooltipUser)}(e);return(0,n.Y)(o.m,{side:"top",align:"start",content:p,componentId:"principal-text-tooltip",children:(0,n.Y)("span",{children:m})})}let v={fullNameTooltip:(0,s.zR)({id:"6ZKCbF",defaultMessage:"{isSP, select, true {Service principal's UUID} other {User's email}}: {username}"}),usernameTooltipUser:(0,s.zR)({id:"Ie1iLy",defaultMessage:"This user did not configure their full name"}),usernameTooltipSP:(0,s.zR)({id:"Au1O0S",defaultMessage:"This service principal doesn't have a display name"})}},465082:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a3.25 3.25 0 1 0 0 6.5A3.25 3.25 0 0 0 8 1M6.25 4.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M8 9a8.74 8.74 0 0 0-6.836 3.287.75.75 0 0 0-.164.469v1.494c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75v-1.494a.75.75 0 0 0-.164-.469A8.74 8.74 0 0 0 8 9m-5.5 4.5v-.474A7.23 7.23 0 0 1 8 10.5c2.2 0 4.17.978 5.5 2.526v.474z",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="UserIcon";let l=s},467535:(e,t,a)=>{a.d(t,{V:()=>r});var n=a(507624);class r{columnSchemaMap=new Map;constructor(e){for(const t of e)this.columnSchemaMap.has(t.name)||this.columnSchemaMap.set(t.name,t)}get(e){return this.columnSchemaMap.get(e)}isAggregated(){return Array.from(this.columnSchemaMap.values()).some(e=>(0,n.Zz)(e.transform))}toLegacyV1Namespace(){let e=new Map;for(let t of this.columnSchemaMap.values())null!==t.type&&e.set(t.name,t.type);return e}}},471091:(e,t,a)=>{a.d(t,{d:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enableMetricViewFromDataset",!1)}},471395:(e,t,a)=>{a.d(t,{a:()=>r});var n=a(441535);function r(){return!(0,n.W)("databricks.fe.lakeview.enableMobxForceUpdateOnRefreshKillSwitch",!1)}},479448:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("path",{fill:"currentColor",d:"M7.25 4.25V6H5.5v1.5h1.75v1.75h1.5V7.5h1.75V6H8.75V4.25zM10.5 10.5h-5V12h5z"}),(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.75 1a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75V1.75a.75.75 0 0 0-.75-.75zm.75 12.5v-11h11v11z",clipRule:"evenodd"})]})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="PlusMinusSquareIcon";let l=s},481414:(e,t,a)=>{a.d(t,{J:()=>n});function n(e,t){let a=/\{\{([A-Za-z0-9_]+)}}/g;for(let n of e.matchAll(a)){let e=n[1];if(!(e in t))throw Error(`Missing value for placeholder: {{${e}}}`)}return e.replace(a,(e,a)=>t[a])}},482469:(e,t,a)=>{a.d(t,{W:()=>i});var n=a(646171);function r(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}let i=e=>{var t;return(t=function*(){let{data:t}=yield(0,n.p)().get("folders/get-folder-node-path",{params:e});return t},function(){var e=this,a=arguments;return new Promise(function(n,i){var o=t.apply(e,a);function s(e){r(o,n,i,s,l,"next",e)}function l(e){r(o,n,i,s,l,"throw",e)}s(void 0)})})()}},482921:(e,t,a)=>{a.d(t,{G:()=>i,M:()=>r});var n,r=((n={}).ONLY_CLUSTER="ONLY_CLUSTER",n.ONLY_WAREHOUSE="ONLY_WAREHOUSE",n.WAREHOUSE_AND_CLUSTER="WAREHOUSE_AND_CLUSTER",n);let i=(e,t)=>{if(!t&&e)return"ONLY_CLUSTER";if(!e)return"ONLY_WAREHOUSE";return"WAREHOUSE_AND_CLUSTER"}},485829:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1 1.75A.75.75 0 0 1 1.75 1h12.5a.75.75 0 0 1 .75.75V4a.75.75 0 0 1-.22.53L10 9.31v4.94a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75V9.31L1.22 4.53A.75.75 0 0 1 1 4zm1.5.75v1.19l4.78 4.78c.141.14.22.331.22.53v4.5h1V9a.75.75 0 0 1 .22-.53l4.78-4.78V2.5z",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="FilterIcon";let l=s},486479:(e,t,a)=>{a.d(t,{Z:()=>X});var n=a(563220),r=a(852663),i=a(856770),o=a(115319),s=a(843811),l=a(872658),u=a(513438),c=a(754679),d=a(176500),m=a(664165),p=a(223588),f=a(55087),g=a(97651),h=a(900628),E=a(957780),b=a(271005),T=a(257982),y=a(939096),I=a(647806),A=a(814890);let v=new r.J({encodingType:i.Sc.SINGLE_FIELD,allowedScales:n.o.ALL,fieldRole:o.v.DIMENSION,disallowedColumnTypes:[]}),S=new r.J({encodingType:i.Sc.SINGLE_FIELD,allowedScales:n.o.ALL,fieldRole:o.v.DIMENSION_FOR_HISTOGRAM,disallowedColumnTypes:[]}),_=new r.J({encodingType:i.Sc.SINGLE_FIELD,allowedScales:n.o.ALL,fieldRole:o.v.EITHER_MISSING_NUM_BIN,disallowedColumnTypes:[]}),C=new r.J({encodingType:i.Sc.SINGLE_FIELD,allowedScales:n.o.QUANTITATIVE_ONLY,fieldRole:o.v.MEASURE,disallowedColumnTypes:[]}),R=new r.J({encodingType:i.Sc.MULTI_FIELD_SINGLE_OR_DUAL_SCALE,allowedScales:n.o.QUANTITATIVE_ONLY,fieldRole:o.v.MEASURE,disallowedColumnTypes:[]}),O=new r.J({encodingType:i.Sc.SINGLE_FIELD,allowedScales:n.o.QUANTITATIVE_ONLY,fieldRole:o.v.MEASURE,disallowedColumnTypes:[]}),N=new r.J({encodingType:i.Sc.SINGLE_FIELD,allowedScales:n.o.QUANTITATIVE_ONLY,fieldRole:o.v.BOX_MEASURE,disallowedColumnTypes:[]}),k=new r.J({encodingType:i.Sc.SINGLE_FIELD_WITHOUT_VARIABLE,allowedScales:n.o.QUANTITATIVE_ONLY,fieldRole:o.v.DIMENSION_MISSING_BIN,disallowedColumnTypes:[]}),w=new r.J({encodingType:i.Sc.REGION,allowedScales:n.o.REGION_PROJECTION,fieldRole:o.v.DIMENSION_MISSING_BIN,disallowedColumnTypes:["boolean","date","datetime","complex","float","decimal"]}),M=new r.J({encodingType:i.Sc.SINGLE_FIELD,allowedScales:n.o.ALL,fieldRole:o.v.EITHER_MISSING_NUM_BIN,disallowedColumnTypes:[]}),P=new r.J({encodingType:i.Sc.SINGLE_FIELD,allowedScales:n.o.QUANTITATIVE_ONLY,fieldRole:o.v.MEASURE,disallowedColumnTypes:[]}),D=new r.J({encodingType:i.Sc.SINGLE_FIELD,allowedScales:n.o.ALL,fieldRole:o.v.DIMENSION,disallowedColumnTypes:[]}),L=new r.J({encodingType:i.Sc.FIELD_NAME,allowedScales:n.o.CATEGORICAL_ONLY,fieldRole:null,disallowedColumnTypes:[]}),x=new r.J({encodingType:i.Sc.SINGLE_FIELD,allowedScales:n.o.QUANTITATIVE_ONLY,fieldRole:o.v.MEASURE,disallowedColumnTypes:[]}),U=new r.J({encodingType:i.Sc.SINGLE_FIELD,allowedScales:n.o.CATEGORICAL_ONLY,fieldRole:o.v.DIMENSION,disallowedColumnTypes:[]}),F=new r.J({encodingType:i.Sc.SINGLE_FIELD,allowedScales:n.o.CATEGORICAL_ONLY,fieldRole:o.v.DIMENSION,disallowedColumnTypes:[]}),$=new r.J({encodingType:i.Sc.FIELD_NAME,allowedScales:n.o.CATEGORICAL_ONLY,fieldRole:null,disallowedColumnTypes:[]}),V=new r.J({encodingType:i.Sc.MULTI_FIELD_NO_SCALE,allowedScales:n.o.ALL,fieldRole:o.v.EITHER_MISSING_NUM_BIN,disallowedColumnTypes:[]}),Y=new r.J({encodingType:i.Sc.MULTI_FIELD_NO_SCALE,allowedScales:n.o.ALL,fieldRole:o.v.MEASURE,disallowedColumnTypes:[]}),W=new r.J({encodingType:i.Sc.MULTI_FIELD_NO_SCALE,allowedScales:n.o.ALL,fieldRole:o.v.MEASURE_NO_DISAGGREGATE,disallowedColumnTypes:[]}),B=r.J.text({encodingType:i.Sc.MULTI_FIELD_INDEPENDENT_SCALES,fieldRole:o.v.EITHER_MISSING_NUM_BIN}),G=r.J.text({encodingType:i.Sc.SINGLE_FIELD,fieldRole:o.v.MEASURE}),J=r.J.text({encodingType:i.Sc.SINGLE_FIELD,fieldRole:o.v.EITHER_MISSING_NUM_BIN}),z=new r.J({encodingType:i.Sc.MULTI_FIELD_OR_PARAMETER,allowedScales:n.o.QUANTITATIVE_ONLY,fieldRole:o.v.DIMENSION_MISSING_BIN,disallowedColumnTypes:[]}),q=new r.J({encodingType:i.Sc.MULTI_FIELD_OR_PARAMETER,allowedScales:n.o.ALL,fieldRole:o.v.DIMENSION,disallowedColumnTypes:[]}),H=new r.J({encodingType:i.Sc.NESTED_SINGLE_FIELD,allowedScales:n.o.QUANTITATIVE_ONLY,fieldRole:o.v.MEASURE_NO_DISAGGREGATE,disallowedColumnTypes:[]}),j=new r.J({encodingType:i.Sc.NESTED_SINGLE_FIELD,allowedScales:n.o.QUANTITATIVE_ONLY,fieldRole:o.v.MEASURE_NO_DISAGGREGATE,disallowedColumnTypes:[]}),K=new r.J({encodingType:i.Sc.NESTED_SINGLE_FIELD,allowedScales:n.o.QUANTITATIVE_ONLY,fieldRole:o.v.MEASURE,disallowedColumnTypes:[]}),Q=new r.J({encodingType:i.Sc.SINGLE_FIELD,allowedScales:n.o.CATEGORICAL_ONLY,fieldRole:o.v.DIMENSION,disallowedColumnTypes:[]}),X={DIMENSION_AXIS:v,DIMENSION_AXIS_FOR_HISTOGRAM:S,BASIC_CHART_SINGLE_FIELD_AXIS:_,SINGLE_FIELD_MEASURE_AXIS:C,SINGLE_FIELD_MEASURE_AXIS_WITH_TITLE_ONLY:C,MULTI_FIELD_MEASURE_AXIS:R,COMBO_AXIS:R,FORECAST_LINE_MEASURE_AXIS:O,SINGLE_BOX_MEASURE_AXIS:N,MAP_AXIS:k,MAP_REGION:w,SYMBOL_MAP_GEOMETRY:f.p,CHOROPLETH_MAP_GEOMETRY:f.X,COLOR_FIELD:M,COLOR_QUANTITATIVE_MEASURE_FIELD:P,DIMENSION_COLOR_FIELD:D,COLOR_BY_MULTI_FIELD_AXIS:L,SIZE:x,SHAPE:U,LINE_PATTERN:F,LINE_PATTERN_BY_MULTI_FIELD_AXIS:$,EXTRA_FIELDS:V,EXTRA_MEASURE_FIELDS:Y,EXTRA_MEASURE_FIELDS_NO_DISAGGREGATE:W,PIVOT_ROW_HEADER:E.q,PIVOT_COLUMN_HEADER:h.y,PIVOT_CELL:g.qY,SANKEY_STAGES:b.E,SANKEY_VALUE:T.i,TABLE_V1_COLUMN:y.I,TABLE_V1_SORT_ORDER:I.H,MULTI_FIELD_TEXT:B,TABLE_V2_COLUMN:A.F,SINGLE_MEASURE_TEXT:G,LABEL:J,SLIDER_CONTROL:z,CONTROL:q,CUSTOM_VEGA_VIZ_FIELDS:p.O,COUNTER_VALUE:d.J,COUNTER_VALUE_WITH_PERIOD:m.G,COUNTER_TARGET_WITHOUT_PERIOD:c.Q,COUNTER_TARGET_WITH_PERIOD:u.I,COUNTER_PERIOD:l.b,NESTED_CHART_SORT_BY_MEASURE:H,FILTER_SELECT_SORT_BY_MEASURE:j,NESTED_IMAGE_SIZE:K,SINGLE_FIELD_WRAP_FACET:Q};(0,s.H)(X).map(e=>({name:e,encodingMeta:X[e]}))},489303:(e,t,a)=>{a.d(t,{O:()=>i});var n=a(441535),r=a(768117);function i(){return(0,n.W)("databricks.fe.lakeview.enablePendingDatasetQueryProfiler",!1)&&(0,r.h)()}},490137:(e,t,a)=>{a.d(t,{K:()=>m});var n=a(247066),r=a(886100),i=a(22191),o=a(748592),s=a(57403),l=a(221095),u=a(105026);let c=new n.q({max:1e3,ttl:36e5}),d=(0,o.W)(()=>new n.q({max:1e3,ttl:36e5,maxSize:(0,u._Z)(),sizeCalculation:l.$}),!0);function m(e,{countTrailingCommentsAsStatement:t=!1}={}){try{let a=(0,u.ed)()?d.getActiveValue():c,n=a.get(e);if(n)return n;let r=s.A.parse(e);return t||function(e){if(e.length>1){var t;let a=e[e.length-1],n=e[e.length-2];t=a.statement,""===t.replace(/\/\*[\s\S]*?\*\//g,"").replace(/--[^\n]*/g,"").trim()&&(n.statement+=a.statement,n.location={first_line:n.location.first_line,first_column:n.location.first_column,last_line:a.location.last_line,last_column:a.location.last_column},e.pop())}}(r),a.set(e,r),r}catch(e){return r.iT.log(i.Es.Editor,"SqlStatementsParseError",{error:e}),[]}}},499918:(e,t,a)=>{let n;a.d(t,{n:()=>A,v:()=>y});var r=a(610435),i=a(956935),o=a(942849),s=a(91958),l=a.n(s),u=a(692738),c=a(874938),d=a(224098),m=a(429608),p=a(497895),f=a(943844),g=a(53333),h=a(639712),E=a(123252),b=a(661748);let T=l()((e,t,a,n,r,o,s)=>(function({clsPrefix:e,theme:t,alignContentToEdge:a,isLeftAligned:n,secondaryStyle:r,contentPadding:o,headerWidth:s}){let l=`.${e}-item`,u=`${l}-active`,c=`.${e}-header`,d=`.${e}-content`,p=`.${e}-content-box`,f=`.${e}-arrow`,g={border:"0 none",background:"none",[l]:{border:"0 none",[`&:not(${l}-disabled):hover`]:{[c]:{color:t.colors.actionPrimaryBackgroundHover},[f]:{color:t.colors.actionPrimaryBackgroundHover}},[`&:not(${l}-disabled):active`]:{[c]:{color:t.colors.actionPrimaryBackgroundPress},[f]:{color:t.colors.actionPrimaryBackgroundPress}}},[c]:{...n&&{display:"inline-flex",alignItems:"center"},"&:focus-visible":{outlineColor:`${t.colors.actionDefaultBorderFocus} !important`,outlineStyle:"auto !important"}},[`& > ${l} > ${c} > ${f}`]:{fontSize:t.general.iconFontSize,right:a||n?0:12,...n&&{verticalAlign:"middle",marginTop:-2}},[f]:{color:t.colors.textSecondary},[`& > ${u} > ${c} > ${f}`]:{transform:n?"rotate(180deg)":"translateY(-50%) rotate(180deg)"},[d]:{border:"0 none",backgroundColor:t.colors.backgroundPrimary},[p]:{padding:o?a?"8px 0px 16px":"8px 16px 16px":0},[`& > ${l} > ${c}`]:{padding:"6px 44px 6px 0",lineHeight:t.typography.lineHeightBase,color:r?t.colors.textSecondary:t.colors.textPrimary,fontWeight:r?400:600,..."fit-content"===s&&{width:"fit-content"}},...(0,m.Cx)(t.options.enableAnimation)};return(0,i.AH)(g)})({clsPrefix:e,theme:t,alignContentToEdge:a,isLeftAligned:n,secondaryStyle:r,contentPadding:o,headerWidth:s}),(e,t,a,n,r,i,o)=>`${(0,h.H6)(t)}|${e}|${a}|${n}|${r}|${i}|${o}`),y=({dangerouslySetAntdProps:e,dangerouslyAppendEmotionCSS:t,children:a,...n})=>(0,r.Y)(m.wC,{children:(0,r.Y)(o.A.Panel,{...n,...e,css:t,children:(0,r.Y)(m.dg,{children:a})})});function I({dangerouslySetAntdProps:e,dangerouslyAppendEmotionCSS:t,displayMode:a="multiple",analyticsEvents:n,componentId:i,valueHasNoPii:s,onChange:l,alignContentToEdge:c=!1,chevronAlignment:h="right",secondaryStyle:y=!1,contentPadding:A=!0,headerWidth:v="full",...S}){let _=(0,b.W)("databricks.fe.observability.defaultComponentView.accordion",!1),{theme:C,getPrefixedClassName:R}=(0,p.wn)(),O=R("collapse"),N=(0,u.useMemo)(()=>n??(_?[d.s7.OnValueChange,d.s7.OnView]:[d.s7.OnValueChange]),[n,_]),k=(0,d.ei)({componentType:d.v_.Accordion,componentId:i,analyticsEvents:N,valueHasNoPii:s}),{elementRef:w}=(0,g.z)({onView:k.onView}),M=(0,u.useCallback)(e=>{Array.isArray(e)?k.onValueChange(JSON.stringify(e)):k.onValueChange(e),l?.(e)},[k,l]),P="left"===h,D=(0,u.useMemo)(()=>[T(O,C,c,P,y,A,v),t,(0,E.De)(C)],[O,C,c,P,y,A,v,t]),{dataComponentProps:L}=k,x=(0,u.useCallback)(()=>(0,r.Y)(f.A,{...L,ref:w}),[L,w]);return(0,r.Y)(m.wC,{children:(0,r.Y)(o.A,{expandIcon:x,expandIconPosition:h,accordion:"single"===a,...S,...e,css:D,onChange:M})})}let A=((n=e=>{if((0,b.W)("databricks.fe.designsystem.useRadixAccordion",!1)&&!e.useLegacyAccordion)return(0,r.Y)(c.R,{...e});return(0,r.Y)(I,{...e})}).Panel=y,n)},505566:(e,t,a)=>{a.d(t,{h:()=>l,p:()=>s});var n=a(610435),r=a(692738),i=a(127833);let o=r.createContext(void 0),s=({children:e})=>{let[t,a]=(0,i.rv)();return(0,n.FD)(o.Provider,{value:{notificationAPI:t},children:[e,a]})},l=()=>{let e=r.useContext(o);if(!e)throw Error("useNotification() hook may only be used within <NotificationProvider>. This is an internal filebrowser component, not a Du Bois component.");return e.notificationAPI}},508224:(e,t,a)=>{a.d(t,{DC:()=>h,Fh:()=>b,Ju:()=>P,K:()=>x,L:()=>V,SX:()=>R,UE:()=>w,Xx:()=>_,dk:()=>D,e1:()=>T,g:()=>f,gG:()=>g,nS:()=>E,oW:()=>L,pe:()=>F,qL:()=>U,qP:()=>C,tu:()=>N,u3:()=>M,un:()=>$,uy:()=>I,vg:()=>O,xb:()=>Y,zk:()=>k});var n=a(720022),r=a(299089),i=a.n(r),o=a(886100),s=a(747129),l=a(21739),u=a(272920),c=a(64962),d=a(677512),m=a(212478),p=a(598511);function f(e){return e.columnDef.meta}function g(e){return f(e).settings}function h(e){return g(e)?.label||e.id}function E(e){return g(e)?.type||c.gD}function b(e){return g(e)?.displayAs||c.Cu}let T=(e,t,a=0)=>{if(!t)return!1;T.alerted||"string"==typeof e||void 0===e||(T.alerted=!0,o.iT.sev2BurnRate(c.Pm,"data-grid-global-filter-unexpected-data-type",s.i1.P99,s.Ip.Min0,!1,{formattedValue:e,formattedValueType:typeof e}));let n="string"==typeof e?e:"null",r=(0,p.VZ)(a)?n:n.toLocaleLowerCase(),i=(0,p.VZ)(a)?t:t.toLowerCase();if((0,p.nh)(a))return r===i;return r.includes(i)};T.alerted=!1;let y=(e,t)=>e.current?.getState().sorting.find(e=>e.id===t)?.desc,I=e=>null==e||Number.isNaN(e),A=(e,t)=>(a,n,r)=>{let i=a.getValue(r),o=n.getValue(r),s=I(i),l=I(o);if(s&&l)return 0;if(s)return y(t,r)?-1:1;if(l)return y(t,r)?1:-1;return e(a,n,r)},v=(e,t,a)=>{let r=e.getValue(a),i=t.getValue(a);if((0,l.p_)(r)&&(0,l.p_)(i))return r.cmp(i);return n.Si.basic(e,t,a)},S=(e,t,a)=>{let n=e.original[a]?.formatted,r=t.original[a]?.formatted;return n===r?0:n<r?-1:1};function _(e,t){if((0,m.lu)(e))return A(n.Si.datetime,t);if((0,m.sr)(e))return A(v,t);if("string"===e)return A(u.M,t);if("json"===e||"image"===e)return A(S,t);return A(n.Si.basic,t)}function C(e){return e.getCoreRowModel().flatRows}function R(e){return e.getAllFlatColumns().map(e=>e.id)}function O(e){let{columnPinning:t,columnOrder:a,columnVisibility:n}=e,r=t.left??[],i=t.right??[],o=new Set(r.concat(i));return r.concat(a.filter(e=>!o.has(e))).concat(i).filter(e=>!1!==n[e])}function N(e){let t=e.getFlatHeaders(),a=e.getRowModel().flatRows,n=C(e),r={numVisibleColumns:t.length,numVisibleRows:a.length,numLeftPinnedColumns:e.getLeftFlatHeaders().length};return{headers:t,leftPinnedHeaders:e.getLeftFlatHeaders(),centerHeaders:e.getCenterFlatHeaders(),rows:a,originalRows:n,tableStats:r}}let k=(e,t)=>{if(!e||void 0===t)return{};return e.getCoreRowModel().flatRows.reduce((e,a)=>{let n=a.original?.[t];return n&&!I(a.getValue(t))&&(e[n.formatted]=n),e},{})};function w({numRows:e,maxHeightInPixels:t,hasExtendedTopBorder:a=!1,minRows:n=5,includeHorizontalScrollbar:r=!1}){let i=Math.max(e,n),o=r?d.E.getScrollbarSize():0;return Math.min(function({numRows:e,hasExtendedTopBorder:t=!1}){return e*c.Jm+c.cb+ +!!t}({numRows:i,hasExtendedTopBorder:a})+o,t)}function M(e){if(e instanceof HTMLElement)return e.closest(`.${c.bh.cell}`);return null}function P(e,t){let a;for(let n of e instanceof MouseEvent?e.composedPath():e.nativeEvent.composedPath())if(n instanceof HTMLElement){if(t?.(n))return null;if(n.classList.contains(c.bh.cell)){a=n;break}}if(!(a instanceof HTMLElement))return null;let n=Number(a.dataset.row),r=Number(a.dataset.col);return{cell:a,rowIndex:n,colIndex:r}}function D(e){return"sort-button"===e.getAttribute("name")}function L(e){return e?.classList.contains(c.bh.cellTextSelectionMode)??!1}function x(e){return e?.classList.contains(c.bh.header)??!1}function U(e){return e?.classList.contains(c.bh.rowNumberCell)??!1}function F({tableRef:e,rowIndex:t,columnIndex:a}){try{if(!e.current)throw Error("Table ref is not attached to an element.");return 0===t?e.current.querySelector(`#${V(a)}`):e.current.querySelector(`#${$({rowIndex:t-1,columnIndex:a})}`)}catch(e){return o.iT.sev2BurnRate(c.Pm,"data-grid-failed-to-get-cell-element",s.i1.P99,s.Ip.Min10,!1,JSON.stringify({err:e instanceof Error?i()(e,["message","stack"]):e,rowIndex:t,columnIndex:a})),null}}function $({rowIndex:e,columnIndex:t}){return`data-grid-cell-${e}-${t}`}function V(e){return`data-grid-cell-header-${e}`}function Y(e,t){return[Math.floor(e/t),e%t]}},508507:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",d:"M4.5 4a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5z"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="StopIcon";let l=s},509591:(e,t,a)=>{a.d(t,{_:()=>i});var n=a(216092),r=a(441535);function i(){return(0,n._)((0,r.W)("databricks.fe.lakeview.labs.enableInsightSchedulesAsNewType","off"))}},518117:(e,t,a)=>{a.d(t,{x:()=>o});var n=a(692738),r=a(203796),i=a(394244);function o({drawerKey:e}){let[t,a]=(0,r.n)((0,i.VL)(e)),[s,l]=(0,r.n)((0,i.ur)());return{isOpen:t,subId:s,openIngestionDrawer:(0,n.useCallback)(e=>{a(!0),l(e)},[a,l])}}},522317:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(301077),r=a(432993);let i="experiment:";function o(e,t){(0,n.Q)(i+e,JSON.stringify(t),e=>{throw e})}let s={get:function(e){let t=i+e;try{let a=window.localStorage.getItem(t);if(a){let t=JSON.parse(a);if(Date.now()-t.time_created<36e5)return t.time_created=Date.now(),o(e,t),t}let n={session_id:r.n.generateUuidV4(),time_created:Date.now()};return o(e,n),n}catch(e){}},set:o}},522681:(e,t,a)=>{a.d(t,{Bb:()=>u,F0:()=>o,H4:()=>m,V9:()=>c,iU:()=>l,mp:()=>s,nQ:()=>d});var n=a(886100),r=a(22191),i=a(107296);function o(e){if("object"!=typeof e||null===e)return!1;return!!(e.config&&(e.response||e.request))}function s(e){if("object"!=typeof e)return!1;return"errorLogType"in e&&"SessionError"===e.errorLogType}function l(e){if("object"!=typeof e)return!1;return e?.isUserError}function u(e){var t;let a=(t=e)&&o(t)?t.response?.status:void 0;return 404===a||403===a}function c(e){if(!e||!o(e))return;let t=e.response?.data;if(!t)return;if("string"==typeof t?.detail)return t.detail;if("string"==typeof t?.message)return t.message;if(Array.isArray(t?.detail))return JSON.stringify(t.detail)}function d(e,t){m(e,t,!0)}function m(e,t,a){let u=c(t);!a&&!o(t)&&t instanceof Error&&!function(e){if("object"!=typeof e||null===e)return!1;return!0===e.isAlertSuppressed}(t)&&!l(t)&&n.iT.sev2(r.Es.DataRooms,"UnexpectedError",t),s(t)||(0,i.G)({title:e,description:u,severity:"error"})}},523141:(e,t,a)=>{a.d(t,{Dz:()=>r,F$:()=>i,Pl:()=>o,QK:()=>s});var n=a(169750);class r{}class i extends r{static TREATMENT_NAME="GPT4OHoldback";get TreatmentName(){return i.TREATMENT_NAME}ApplyTreatment(e,t){return{modifiedSubmitRunStepArgs:{...e,model:"gpt-41-2025-04-14",instructions:e=>"You are the Databricks AI Assistant."},modifiedContextConfig:{...t,[n.E.DOCS_SEARCH]:{enabled:!1},[n.E.ENVIRONMENT]:{enabled:!1},[n.E.REFERENCE_OBJECT]:{enabled:!1},[n.E.RELEVANT_TABLE]:{enabled:!1},[n.E.NOTEBOOK_SPECIFIC]:{enabled:!1},[n.E.NOTEBOOK_CELLS]:{enabled:!1},[n.E.USER_QUERIES]:{enabled:!1},[n.E.SEARCH_TABLE]:{enabled:!1}}}}}class o extends r{static TREATMENT_NAME="GPT4ONoContext";get TreatmentName(){return o.TREATMENT_NAME}ApplyTreatment(e,t){return{modifiedSubmitRunStepArgs:{...e,model:"gpt-41-2025-04-14"},modifiedContextConfig:{...t,[n.E.DOCS_SEARCH]:{enabled:!1},[n.E.ENVIRONMENT]:{enabled:!1},[n.E.REFERENCE_OBJECT]:{enabled:!1},[n.E.RELEVANT_TABLE]:{enabled:!1},[n.E.NOTEBOOK_SPECIFIC]:{enabled:!1},[n.E.NOTEBOOK_CELLS]:{enabled:!1},[n.E.USER_QUERIES]:{enabled:!1},[n.E.SEARCH_TABLE]:{enabled:!1}}}}}class s extends r{static TREATMENT_NAME="Default";get TreatmentName(){return s.TREATMENT_NAME}ApplyTreatment(e,t){return{modifiedSubmitRunStepArgs:{...e,model:"gpt-41-2025-04-14"},modifiedContextConfig:{...t}}}}},523550:(e,t,a)=>{if(a.d(t,{Q:()=>r}),13057==a.j)var n=a(441535);function r(e){if("labs"===e)return(0,n.W)("databricks.datarooms.onechat.isOneChatLabsEnabled",!1);return"on"===e}},529068:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 17 16",...e,children:(0,n.Y)("path",{fill:"currentColor",d:"M4.03 12.06 5.091 11l-2.97-2.97 2.97-2.97L4.031 4 0 8.03zM12.091 4l4.03 4.03-4.03 4.03-1.06-1.06L14 8.03l-2.97-2.97z"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CodeIcon";let l=s},529129:(e,t,a)=>{a.d(t,{e_:()=>i,en:()=>r,fc:()=>n});let n="**",r=`/${n}`;function i(e){let t=e.include;if(!t)return null;if(t.endsWith(r))return{type:"folder",path:t.slice(0,-n.length)};return{type:"file",path:t}}},529791:(e,t,a)=>{a.d(t,{H:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.dashboardsai.enableEditWidgetsToolV2",!1)}},530734:(e,t,a)=>{a.d(t,{Ay:()=>g,SZ:()=>c,kn:()=>f,sc:()=>m});var n=a(665514),r=a(583422),i=a(287578),o=a(785582);function s(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function l(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){s(i,n,r,o,l,"next",e)}function l(e){s(i,n,r,o,l,"throw",e)}o(void 0)})}}let u=e=>!!(e&&(e.refreshCache||e.refreshAnalysis)),c={},d={},m=e=>{d=e??{}},p=()=>{},f=e=>{p=e};class g{dataCatalog;definition;isTemporary;name;path;totalUncappedChildren;childrenPromise;sourceMeta;sourceMetaPromise;constructor(e){if(!e.dataCatalog.connector)throw Error("DataCatalogEntry created without connector");this.dataCatalog=e.dataCatalog,this.path="string"==typeof e.path?e.path.split("."):e.path||[],this.name=this.path.length?this.path[this.path.length-1]:this.getConnector().id,this.isTemporary=e.isTemporary,e.definition?this.definition=e.definition:0===this.path.length?this.definition={type:"source"}:1===this.path.length?this.definition={type:"catalog"}:2===this.path.length?this.definition={type:"schema"}:3===this.path.length&&(this.definition={type:"table"})}reloadSourceMeta(e){return this.sourceMetaPromise=new o.m((e,t)=>l(function*(){"STORYBOOK_INTERNAL_USE_ONLY_DATA_SOURCE_ID_SANA"===this.getConnector().id&&(0,n.ss)(d)||(d=this.getConnector().catalogApi.value);try{(0,n.ss)(d)?this.sourceMeta=yield new n.Ay().fetchMetadata(d,c,this.path):console.warn("Still no catalog API available, cannot fetch "+this.name)}catch(e){t(e||"Fetch failed");return}e(this.sourceMeta)}).call(this)),(0,r.R7)(this.sourceMetaPromise,e)}getParent(){if(!this.path.length)return Promise.reject(Error("Root data catalog entry has no parent"));return this.dataCatalog.getEntry({path:this.path.slice(0,this.path.length-1)})}getAncestor(e){if(e>=this.path.length||e<0)return Promise.reject(`There is no ancestor of level ${e}`);return this.dataCatalog.getEntry({path:this.path.slice(0,e+1)})}getChildren(e){if(this.childrenPromise&&this.childrenPromise.cancelled&&(this.childrenPromise=void 0),!this.childrenPromise&&e&&e.cachedOnly)return o.m.reject(Error("Requested cached results only but children cache is empty"));if(this.childrenPromise&&!u(e))return(0,r.R7)(this.childrenPromise,e);if(!(0,n.ss)(d)&&!(0,n.ss)(this.getConnector().catalogApi.value))return o.m.reject(Error(`No catalog API available, cannot fetch children for length ${this.path?.length} path`));return this.childrenPromise=new o.m((t,a,n)=>l(function*(){let r=!1;n(()=>{r=!0});try{this.sourceMeta=yield this.getSourceMeta(e)}catch(t){e?.silenceErrors||console.warn(t)}if(r)return void a(Error("Cancelled"));if(!this.sourceMeta){a(Error(`No source meta found for length ${this.path?.length} path`)),this.childrenPromise=void 0,this.sourceMetaPromise=void 0;return}if(this.sourceMeta.notFound)return void t([]);let i=this.sourceMeta,o={};i.partition_keys&&i.partition_keys.forEach(e=>{o[e.name]=!0});let s={};i.primary_keys&&i.primary_keys.forEach(e=>{s[e.name]=!0});let l={};i.foreign_keys&&i.foreign_keys.forEach(e=>{e.columns.forEach(t=>{l[t]=`${e.toTable}.${t}`})});let u={};i.clustered_keys&&i.clustered_keys.forEach(e=>{u[e.name]=!0});let c=this.sourceMeta.catalogs||this.sourceMeta.databases||this.sourceMeta.tables_meta||this.sourceMeta.extended_columns||this.sourceMeta.fields||this.sourceMeta.columns||[];c.length>15e3&&(this.totalUncappedChildren=c.length,c.splice(15e3));let d=[],m=0;if(c.forEach(e=>{if(!this.sourceMeta.catalogs||"_impala_builtins"!==e){let t=e.name||e,a=this.dataCatalog.getEntry({path:[...this.path,t]});a.then(a=>{if(!a.definition||void 0===a.definition.index){let n="object"==typeof e?e:{name:e};n.type||(0===this.path.length?n.type="catalog":1===this.path.length?n.type="schema":2===this.path.length?n.type="table":3===this.path.length&&(n.type="column")),this.sourceMeta.partition_keys&&(n.partitionKey=o[t]),this.sourceMeta.primary_keys&&(n.primaryKey=s[t]),this.sourceMeta.foreign_keys&&(n.foreignKey=l[t]),this.sourceMeta.clustered_keys&&(n.clusteredKey=u[t]),n.index=m++,a.definition=n}}).catch(e=>{console.warn(e)}),d.push(a)}}),this.sourceMeta&&("impala"===this.getDialect()||"hive"===this.getDialect())&&this.isComplex()){let e=this.sourceMeta;("map"===e.type?["key","value"]:["item"]).forEach(t=>{let a=e[t];if(a){let e=this.dataCatalog.getEntry({path:[...this.path,t]});e.then(e=>{e.definition&&void 0!==e.definition.index||(a.index=m++,a.isMapValue="value"===t,e.definition=a)}).catch(e=>{console.warn(e)}),d.push(e)}})}Promise.all(d).then(t).catch(a).then(()=>{this.totalUncappedChildren&&p("compose.catalog",{action:"children_limit_exceeded",id:this.totalUncappedChildren})})}).call(this)),(0,r.R7)(this.childrenPromise,e)}attachChildren(e){return l(function*(){if(this.childrenPromise&&e.length){let t=yield this.childrenPromise,a=t.map(e=>e.path.join(".")),n=e.map(e=>e.join(".")).filter(e=>!a.includes(e)).map(e=>this.dataCatalog.getEntry({path:e})),i=yield Promise.all(n),s=new o.m(e=>e(t.concat(i)));this.childrenPromise=(0,r.R7)(s,{})}}).call(this)}getResolvedComment(){if(this.definition&&this.definition.comment)return this.definition.comment;return this.sourceMeta&&this.sourceMeta.comment||""}hasResolvedComment(){return void 0!==this.sourceMeta}getDialect(){return this.getConnector().dialect||this.getConnector().id}getConnector(){return this.dataCatalog.connector}isSource(){return 0===this.path.length}isCatalog(){return 1===this.path.length}isDatabase(){return 2===this.path.length}isTable(){if(3===this.path.length){if(["view","materialized_view","streaming_table"].includes(this.definition?.type?.toLowerCase()??""))return!1;if(this.sourceMeta)return!this.sourceMeta.isView;if(this.definition&&this.definition.type)return"table"===this.definition.type.toLowerCase();return!0}return!1}isView(){if(3===this.path.length&&(this.sourceMeta&&this.sourceMeta.isView||this.definition&&this.definition.type&&"view"===this.definition.type.toLowerCase()))return!0;return!1}isTableOrView(){return 3===this.path.length}isMaterializedView(){return!!this.definition&&!!this.definition?.type&&this.definition?.type?.toLowerCase()==="materialized_view"}isStreamingTable(){return!!this.definition&&!!this.definition?.type&&this.definition?.type?.toLowerCase()==="streaming_table"}isColumn(){return 4===this.path.length}isPrimaryKey(){return!!(this.isColumn()&&this.definition&&this.definition.primaryKey)}isPartitionKey(){return!!(this.definition&&this.definition.partitionKey)}isForeignKey(){return!!this.definition&&!!this.definition.foreignKey}isClusterKey(){return!!this.definition&&!!this.definition.clusteredKey}isKey(){return this.isPartitionKey()||this.isPrimaryKey()||this.isForeignKey()||this.isClusterKey()}isComplex(){let e=this.sourceMeta;return!!(this.path.length>3&&(e&&/^(?:struct|array|map)/i.test(e.type)||this.definition&&this.definition.type&&/^(?:struct|array|map)/i.test(this.definition.type)))}isField(){return this.path.length>3}isArray(){return!!this.sourceMeta&&/^array/i.test(this.sourceMeta.type)||!!this.definition&&!!this.definition.type&&/^array/i.test(this.definition.type)}isMap(){return!!this.sourceMeta&&/^map/i.test(this.sourceMeta.type)||!!this.definition&&!!this.definition.type&&/^map/i.test(this.definition.type)}isMapValue(){return!!this.definition&&!!this.definition.isMapValue}getType(){let e=this.getRawType();return -1!==e.indexOf("<")&&(e=e.substring(0,e.indexOf("<"))),e.toLowerCase()}getRawType(){return this.sourceMeta&&this.sourceMeta.type||this.definition&&this.definition.type||""}getSourceMeta(e){if(this.sourceMetaPromise&&this.sourceMetaPromise.cancelled&&(this.sourceMetaPromise=void 0),!this.sourceMetaPromise&&e&&e.cachedOnly)return o.m.reject(Error("Requested cached results only but source meta cache is empty"));if(!this.sourceMetaPromise||u(e))return this.reloadSourceMeta(e);return(0,r.R7)(this.sourceMetaPromise,e)}getForeignKeyJoins(e){let t=new o.m((t,a,n)=>l(function*(){let r,i=(yield(r=this,l(function*(){if(!r.isTableOrView())return Promise.reject();return r.dataCatalog.getMultiTableEntry({paths:[r.path]})})())).getForeignKeyJoins(e);n(()=>{i.cancel()}),i.then(t).catch(a)}).call(this));return(0,r.R7)(t)}getColor(){if(this.isColumn())return i.Jy.Column;if(this.isTableOrView())return i.Jy.Table;if(this.isDatabase())return i.Jy.Database;if(this.isCatalog())return i.Jy.Catalog;return i.Jy.Keyword}getCategoryId(){if(this.isColumn())return i.wz.Column;if(this.isTableOrView())return i.wz.Table;if(this.isDatabase())return i.wz.Database;if(this.isCatalog())return i.wz.Catalog}}},531258:(e,t,a)=>{a.d(t,{D:()=>l});var n=a(928516),r=a.n(n),i=a(157059),o=a.n(i);let s=Object.freeze({number:"number-plain",currency:"number-currency",percentage:"number-percent",bytes:"number-bytes",date_time:"date-time",date:"date"});function l(e){let t=Object.keys(e)[0],a=function(e){let t={};for(let[a,n]of Object.entries(e)){let e=r()(a);"decimal_places"===a&&n&&"object"==typeof n?t[e]={type:n.type?.toLowerCase(),places:n.places}:"abbreviation"===a&&"string"==typeof n?t[e]=n.toLowerCase():"date_format"===a&&"string"==typeof n?t.date=o()(n).toLowerCase():"time_format"===a&&"string"==typeof n?t.time=o()(n).toLowerCase():t[e]=n}return t}(e[t]),n=s[t];if(!n)throw Error(`Unsupported format type: ${t}`);return{type:n,...a}}},537287:(e,t,a)=>{a.d(t,{XI:()=>c,ZN:()=>u,cd:()=>r,wL:()=>l});var n=a(993533);function r(e){return!!e&&e!==n.ezR.NONE&&e!==n.ezR.UNSPECIFIED}let i={[n.ezR.GPU_1xA10]:"A10",[n.ezR.GPU_1xH100]:"1xH100",[n.ezR.GPU_8xH100]:"H100"},o={[n.ezR.GPU_1xA10]:"GPU 1xA10",[n.ezR.GPU_1xH100]:"GPU 1xH100",[n.ezR.GPU_8xH100]:"GPU 8xH100"},s=Object.fromEntries(Object.entries(i).map(([e,t])=>[t,e]));function l(e){if(!r(e))return null;return o[e]??null}function u(e){if(!e)return null;return s[e]??null}function c(e){return null!=e&&e in i?e:u(e)}},538893:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M14 6.5V.75a.75.75 0 0 0-.75-.75H4.5A2.5 2.5 0 0 0 2 2.5v10.75A2.75 2.75 0 0 0 4.75 16H6.5v-1.5H4.75c-.69 0-1.25-.56-1.25-1.25V4.792c.306.134.644.208 1 .208h8v1.5zm-9.5-3a1 1 0 0 1 0-2h8v2z",clipRule:"evenodd"}),(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.457 7.906a.75.75 0 0 0-.914 0l-3.25 2.5A.75.75 0 0 0 8 11v4.25c0 .414.336.75.75.75h6.5a.75.75 0 0 0 .75-.75V11a.75.75 0 0 0-.293-.594zM9.5 14.5v-3.13L12 9.445l2.5 1.923V14.5h-1.75V12h-1.5v2.5z",clipRule:"evenodd"})]})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CatalogHomeIcon";let l=s},543963:(e,t,a)=>{a.d(t,{DP:()=>r,WB:()=>i,cn:()=>o});var n=a(141078);let r=(0,n.J1)`
  fragment RunStateFragment on JobsRunState {
    durationWarningExceeded
    lifeCycleState
    resultState
    stateMessage
    userCancelledOrTimedout
    queueReason @include(if: $includeQueueReason)
  }
`,i=(0,n.J1)`
  fragment RunStatusFragment on JobsRunStatus {
    queueDetails @include(if: $includeQueueReason) {
      code
      message
    }
    state
    description @includeSafex(name: "lakeflow_runs_list", defaultValue: false)
    cancellationDetails @includeSafex(name: "lakeflow_runs_list", defaultValue: false) {
      reason
    }
    terminationDetails {
      code
      message
      type
    }
  }
`,o=(0,n.J1)`
  fragment RunEdgesFragment on RunConnection {
    edges {
      node {
        status
        statusV2 {
          ...RunStatusFragment
        }
        idInJob
        startTime
      }
    }
  }
  ${i}
`},544535:(e,t,a)=>{a.d(t,{GE:()=>l,Tc:()=>s,tF:()=>u});var n=a(692738),r=a(267647),i=a(935963);function o(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}let s="/repairEnvironment",l="fixEnvAgent",u=()=>{let e=(0,i.f)();return(0,n.useMemo)(()=>({name:l,makeContext:(0,r.x)({makeContext:({context:e})=>{var t;return(t=function*(){return{prompt:"",rawContext:e}},function(){var e=this,a=arguments;return new Promise(function(n,r){var i=t.apply(e,a);function s(e){o(i,n,r,s,l,"next",e)}function l(e){o(i,n,r,s,l,"throw",e)}s(void 0)})})()},agentName:l}),userMessageMatchesAgent:e=>e.startsWith(s),extractHistory:()=>[],model:e,instructions:()=>""}),[e])}},546743:(e,t,a)=>{a.d(t,{w:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enableCopyPasteWidgetToAnotherDashboard",!1)}},549063:(e,t,a)=>{a.d(t,{C:()=>i});var n=a(441535),r=a(45525);function i(){return((0,n.W)("enable_dlmv_aibi",!1)||(0,n.W)("databricks.fe.lakeview.enableMetricViewEditorIntegration",!1))&&(0,r.Yt)()}},555297:(e,t,a)=>{a.d(t,{v:()=>r});var n=a(779862);function r(e,t){let a=[],r=(0,n.Gy)(t);for(let[t,{name:n}]of Object.entries(e||{})){let e=r(t);n&&!("number"==typeof e&&isNaN(e))&&a.push({originalValue:e,alias:n})}return a.length>0?a:void 0}},555308:(e,t,a)=>{a.d(t,{Ay:()=>eg,BY:()=>z,HM:()=>x,Ho:()=>H,NX:()=>G,OV:()=>eu,QC:()=>ed,W_:()=>W,Ww:()=>eo,X$:()=>V,_g:()=>ea,_r:()=>Z,a0:()=>es,aP:()=>q,eO:()=>D,fP:()=>em,js:()=>P,kB:()=>j,lT:()=>ee,p5:()=>B,pN:()=>$,rE:()=>ep,rf:()=>ec,sR:()=>Y,sS:()=>er,vQ:()=>et,w:()=>Q,xE:()=>K});var n,r=a(610435),i=a(621058),o=a.n(i),s=a(359419),l=a.n(s);a(692738);var u=a(342411),c=a(236560),d=a(485669),m=a(441535),p=a(13451),f=a(278983),g=a(886100),h=a(22191),E=a(747129),b=a(189520),T=a(532188),y=a(32998),I=a(39659),A=a(101499),v=a(250213),S=a(329099),_=a(634685),C=a(88277),R=a(515700),O=a(735919);function N(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function k(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){N(i,n,r,o,s,"next",e)}function s(e){N(i,n,r,o,s,"throw",e)}o(void 0)})}}let w=["date","timestamp"],M=["byte","short","integer","long","float","double"];var P=((n={}).RUNNING="running",n.RUNNING_FROM_RUN_ALL="runningFromRunAll",n.IDLE="idle",n);let D=e=>"idle"!==e,L=(e,t)=>k(function*(){let{commandModelToMonacoUri:n}=yield(()=>{let e=()=>Promise.all([a.e(62280),a.e(21234),a.e(1990),a.e(78632),a.e(39676),a.e(31813),a.e(93932),a.e(95600),a.e(64666),a.e(62762),a.e(49177),a.e(23118)]).then(a.bind(a,517171));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(517171,"./editor-monaco/plugins/utils/python-lsp/types/InternalTypes","lazy",e);return e()})();return{text:t??e.getCommand(),id:e.get("guid"),monacoModelUri:n(e)}})(),x=e=>k(function*(){let t=e.getTopLevelCommands(),a=[];for(let e=0;e<t.length;e++){let n=t[e];if("sql"===n.getLanguage())a.push((yield L(n)));else if("python"===n.getLanguage()||"scala"===n.getLanguage()){let e=yield $(n.getCommand(),n.getLanguage());a.push(...yield Promise.all(e.map(e=>L(n,e.statement))))}}return a})(),U=(e,t,a,n,r)=>{let i,o,s=[],l={startLineIndex:n.startIndex===n.endIndex?r:n.startLineIndex,startIndex:n.startIndex,endIndex:n.endIndex,sqlStartIndexAtCurrentLine:n.sqlStartIndexAtCurrentLine};for(let e=0;e<t.length;e++){let n=t[e];n&&"sql"===n.language&&(void 0===i&&(i=t[e]?.offset||0,l.sqlStartIndexAtCurrentLine=l.sqlStartIndexAtCurrentLine||i),o=t[e+1]?.offset),a&&void 0!==i&&void 0!==o&&l.startIndex===l.endIndex&&"sql"!==n.language&&(s.push({functionName:"sql",statement:a.substring(i,o),startLineIndex:r,sqlStartIndexAtCurrentLine:i}),i=void 0,o=void 0,l.sqlStartIndexAtCurrentLine=0)}return void 0===i&&void 0===o&&l.endIndex>l.startIndex&&(s.push({functionName:"sql",startLineIndex:l.startLineIndex,statement:e.substring(l.startIndex,l.endIndex),sqlStartIndexAtCurrentLine:l.sqlStartIndexAtCurrentLine}),l.startIndex=l.endIndex,l.startLineIndex=r,l.sqlStartIndexAtCurrentLine=0),l.startIndex+=void 0===i?a.length+1:i,l.endIndex+=void 0===o?a.length+1:o,{sqlStatements:s,indexDetails:l}},F=(e,t,a,n)=>{let r,i,o=[],s={startLineIndex:a.startIndex===a.endIndex?n:a.startLineIndex,startIndex:a.startIndex,endIndex:a.endIndex,sqlStartIndexAtCurrentLine:a.sqlStartIndexAtCurrentLine},l=t=>{let a=e[t];if(!a)return null;if("identifier.python"===a.type&&t+1<e.length&&"delimiter.parenthesis.python"===e[t+1].type&&t+2<e.length&&e[t+2].type.startsWith("string.escape.python")&&t+3<e.length)return t+3;return null},u=0;for(;u<e.length;){let a=l(u);if(null===a){u++;continue}"table("===t.substring(e[u]?.offset,e[a]?.offset-1||0)&&(void 0===r&&(r=e[a]?.offset||0,s.sqlStartIndexAtCurrentLine=s.sqlStartIndexAtCurrentLine||r),i=e[a+1]?.offset,t&&s.startIndex===s.endIndex&&(o.push({functionName:"table",statement:`select * from ${t.substring(r,i)}`,startLineIndex:n,sqlStartIndexAtCurrentLine:r}),r=void 0,i=void 0,s.sqlStartIndexAtCurrentLine=0)),u=a+3}return{sqlStatements:o,indexDetails:s}},$=(e,t)=>k(function*(){let n=e?.split("\n"),r=[];if(e&&n&&n.length&&("scala"===t||"python"===t)){let{getMonacoApi:i}=yield(()=>{let e=()=>Promise.all([a.e(62280),a.e(21234),a.e(1990),a.e(78632),a.e(39676),a.e(31813),a.e(93932),a.e(95600),a.e(64666),a.e(62762),a.e(49177),a.e(31632)]).then(a.bind(a,645696));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(645696,"@databricks/editor/unifiedEditor","lazy",e);return e()})(),{enableCustomPythonSyntax:o,enableCustomScalaSyntax:s,enableCustomSQLSyntax:l}=yield(()=>{let e=()=>Promise.all([a.e(62280),a.e(6932),a.e(1291),a.e(97768),a.e(24685),a.e(99406),a.e(21234),a.e(92170),a.e(1990),a.e(78632),a.e(39676),a.e(31813),a.e(51362),a.e(26881),a.e(159),a.e(74767),a.e(93932),a.e(95600),a.e(68775),a.e(11022),a.e(43927),a.e(18650),a.e(87122),a.e(12674),a.e(4828),a.e(90489),a.e(64666),a.e(30259),a.e(13962),a.e(22831),a.e(80086),a.e(51818),a.e(87385),a.e(58415),a.e(79637),a.e(62762),a.e(48898),a.e(75165)]).then(a.bind(a,731392));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(731392,"@databricks/editor/commonPlugins","lazy",e);return e()})();o(),l(),s();try{let a=i().tokenize(e,"scala"===t?"custom_scala":"custom_python"),o={startIndex:0,endIndex:0,startLineIndex:0,sqlStartIndexAtCurrentLine:0};a.forEach((t,a)=>{let{sqlStatements:i,indexDetails:s}=U(e,t,n[a],o,a);o=s,i.length&&r.push(...i);let{sqlStatements:l,indexDetails:u}=F(t,n[a],o,a);o=u,l.length&&r.push(...l)}),o.endIndex>o.startIndex&&r.push({functionName:"table",statement:e.substring(o.startIndex,o.endIndex),startLineIndex:o.startLineIndex,sqlStartIndexAtCurrentLine:o.sqlStartIndexAtCurrentLine})}catch(e){}}return r})(),V=e=>"running"===e,Y=e=>{switch(e){case"runningFromRunAll":case"running":return!0;default:return!1}},W=(e,t)=>ef.isRunningAll({runStatus:e.get("runStatus"),jsRunAllAction:e.get("jsRunAllAction")})||ef.isRunningSingleCommand(e,t),B=({runStatus:e,jsRunAllAction:t})=>{if("RunAll"===t||"runningFromRunAll"===e)return!0;return!1},G=e=>e.getTopLevelCommands().some(e=>e.get("submitTime")>0);function J(e,t){let a=e.getResponseHeader("X-Databricks-Reason-Phrase");if(a&&a.length>3)return{statusText:a,specialEventName:"ServerErrorMessage"};let n=e.getResponseHeader("x-databricks-popp-response-code-details");if(n&&n.length>3)return{statusText:n,specialEventName:"PoppPermissionDenied"};let r=e.statusText,i=t instanceof Error?t.message:"string"==typeof t?t:void 0;if(i&&i.length>r.length)return{statusText:i,specialEventName:"ServerErrorMessageFallback"};return{statusText:r,specialEventName:"ServerErrorShortMessage"}}let z=e=>{let t=(0,m.W)("databricks.elasticspark.treeStoreTmpDir","__databricks_jobs_tmp");return!!t&&!!e&&e.startsWith(`/${t}`)},q=e=>!!e&&e.indexOf(".conversations/___DBCONVERSATION___")>=0,H=(e,t)=>{if(void 0!==t)return t===S.Eu.Markdown?"markdown":"table";if(e){let t=e.match(ef.firstWordRegex),a=t&&t[1];if("%md"===a)return"markdown";if("%md-sandbox"===a)return"markdown-sandbox"}return"table"},j=e=>{let t="auto"===e?"auto":parseInt(e,10)+"px";if("0px"===t)return"auto";return t},K=e=>!["markdown","markdown-sandbox","image","images","html","htmlSandbox"].includes(e),Q=e=>!["markdown","markdown-sandbox","html"].includes(e);function X(){return o()("#content").offset()?.top||_.Ay.TOPBAR_HEIGHT}let Z=(e,t)=>{let a=e.get("pathName");if(""!==a&&null!=a){let n=a.lastIndexOf("/")+1,r=a.substring(0,n)+t;e.set("pathName",r)}};function ee(){let e=(0,p.e)("enableLegacyNotebookVisualizations",null);if(null!==e)return e;let t=(0,m.W)("databricks.eda.enableLegacyNotebookVisualizations",null);if(null!==t)return t;return!1}function et(e){return!l()(e)}let ea=e=>e.get("clusterMetadata")?.sparkVersion||"",en=[S.Eu.SQL,S.Eu.Python,S.Eu.Scala,S.Eu.R],er=e=>{let t=e.get("targetClusterId");if((0,c.Ul)(t))return!1;switch(e.getEditorMode()){case"notebook":case"designer":return!0;case"query":return"alertV2"!==e.get("type");case"file":let a=e.getFileEditorLanguage();return!!(a&&en.includes(a))}},ei=RegExp("^queries/(?<queryId>[a-zA-Z0-9-]+)$");function eo(e){let t=e.match(ei);return t?t.groups.queryId:void 0}function es(e){if("query"!==e.get("type")||!(0,T.K3)())return!1;return!e.get("unifiedSqlEditorEnabled")}let el={notebook:b.P.NOTEBOOK,file:b.P.FILE,query:b.P.QUERY,designer:b.P.DESIGNER_FILE};function eu(e){return new Promise(t=>{if(["confirm","select","create","confirmSelect"].includes(e?.unattachedReason))return void t(!0);O.k.confirm({title:(0,r.Y)(u.sA,{id:"NO72b+",defaultMessage:"Cancel current execution?"}),body:(0,r.Y)(u.sA,{id:"dqPb99",defaultMessage:"Do you want to cancel the current execution and re-run the command?"}),okText:(0,r.Y)(u.sA,{id:"wL6q8q",defaultMessage:"Yes"}),cancelText:(0,r.Y)(u.sA,{id:"u83aYb",defaultMessage:"No"}),onCancel:()=>{t(!1)},onOk:e=>{e.stopPropagation(),t(!0)}})})}let ec=()=>(0,d.Fu)(window.location);function ed(e){switch(e){case"notebook":return"notebook-editor";case"file":return"file-editor";case"query":return"query-editor";case"designer":return"designer-file-editor"}}function em(){C.y.addNotification({uid:"nb-rpc-heavy-load-warning",level:"warning",title:(0,r.Y)(u.sA,{id:"8eOkZ8",defaultMessage:"Databricks is experiencing heavy load"}),message:(0,r.Y)(u.sA,{id:"eSyPCQ",defaultMessage:"Operations may take longer to complete than usual."})})}function ep(){C.y.addNotification({uid:"nb-rpc-heavy-load-error",level:"error",title:(0,r.Y)(u.sA,{id:"MqdC+z",defaultMessage:"Databricks is unresponsive"}),message:(0,r.Y)(u.sA,{id:"6OQ0EU",defaultMessage:"Operations are not completing in a timely manner. Please save your work and try again later."})})}let ef={hasRunningStatus:Y,isNotIdle:D,isRunning:W,isRunningAll:B,isRunningSingleCommand:(e,t)=>{if("running"===e.get("runStatus"))return!0;return(t?t.where({running:!0}).length:0)+(t?t.where({shouldRun:!0}).length:0)>0},isCancelling:(e,t)=>{let a=e.get("runStatus");if("Cancel"===e.get("jsRunAllAction")&&"idle"!==a||t.where({state:"cancelling"}).length>0)return!0;return!1},hasRunBefore:G,handleRpcError:(e,t,a)=>{let n,i;if(4!==e.readyState)n=(0,r.Y)(u.sA,{id:"NMM/gx",defaultMessage:"Network error. Please check your network connection."}),i="NetworkError";else if(403===e.status){let{statusText:t}=J(e,a);n=(0,r.Y)(u.sA,{id:"VJa0DE",defaultMessage:"Permission denied: {statusText}",values:{statusText:t}}),i="PermissionDenied"}else{let t;if(t=e.statusText,400===e.status&&"unified-query-editor-unavailable"===t)n=(0,r.Y)(u.sA,{id:"Skfl3U",defaultMessage:"This query does not have the new SQL editor enabled and can only be opened in the classic SQL editor."});else{let t;if(t=e.statusText,409===e.status&&null!==t&&/Node named '.*?' already exists/.test(t)){let{statusText:t}=e;n=(0,r.Y)(u.sA,{id:"nTrRBM",defaultMessage:"Name conflict error: {statusText}",values:{statusText:t}})}else{let{statusText:t,specialEventName:o}=J(e,a);n=(0,r.Y)(u.sA,{id:"mjQkkg",defaultMessage:"Server error: {statusText}",values:{statusText:t}}),i=o||"ServerError"}}}O.k.confirm({title:(0,r.Y)(u.sA,{id:"xxzo20",defaultMessage:"A problem has occurred"}),body:n,cancelText:(0,r.Y)(u.sA,{id:"aLsIym",defaultMessage:"Close"}),okText:(0,r.Y)(u.sA,{id:"sv9wGG",defaultMessage:"Reload page"}),onOk:()=>{window.location.reload()}}),(0,f.y)("clientsideEvent",{eventName:i,eventType:"NotebookRpcError",httpStatusCode:e.status,errorName:e.statusText})},attachToCluster:(e,t)=>{let a=t.id;e.attach(a,{onError:t=>{let n=t&&t.statusText;n&&n.startsWith("Failed to attach")?O.k.confirm({title:(0,r.Y)(u.sA,{id:"opb1IS",defaultMessage:"Failed to attach notebook"}),body:(0,r.Y)(u.sA,{id:"g/zpme",defaultMessage:"{errorMsg} Do you want to force re-attach? This will clear all computed variable values from this notebook.",values:{errorMsg:n}}),okText:(0,r.Y)(u.sA,{id:"kKQnYY",defaultMessage:"Yes"}),cancelText:(0,r.Y)(u.sA,{id:"nyV6GF",defaultMessage:"No"}),onOk:()=>e.detachAndAttach(a)}):ef.handleRpcError(t)}})},isNumeric:e=>e instanceof R.Ay.AtomType&&(M.includes(e.typeName)||e.typeName&&"string"==typeof e.typeName&&e.typeName.startsWith("decimal")),isJobNotebook:z,isDateType:e=>e instanceof R.Ay.AtomType&&w.includes(e.typeName),firstWordRegex:/(\S+)(?:\s|\n|$)/,getDisplayType:H,fixLength:j,isDownloadable:K,isResizable:Q,isOutOfView:e=>{if(0===e.length)return!1;let t=o()(window),a=e.offset().top,n=e.height(),r=t.height();if(0===r)return!1;if(a+n<X()||a>r)return!0;return!1},isElementVisibleOnNotebook:e=>{let t=e.getBoundingClientRect(),a=X(),n=t.top>=a&&t.top<=(window.innerHeight||document.documentElement.clientHeight),r=t.bottom>=a&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight);return n||r},detachNotebooks:(e,t,a)=>{if(!Array.isArray(e))return void console.error("NotebookUtilities.detachNotebooks takes a list of notebook ids");return o().ajax({type:"POST",url:"/notebook/detach",data:JSON.stringify({notebookIds:e}),success:t,error:a,dataType:"json"})},updateNotebookPathAfterRename:Z,updateNotebookPathName:(e,t)=>{if(void 0===t)return;let a=e.get("name"),n=e.get("parentId");if(!n)return;let r=t.get(n);r?e.set("pathName",r.get("pathName")+"/"+a):window.conn.prefetchNode(n,()=>{let r=t.get(n);r?e.set("pathName",r.get("pathName")+"/"+a):g.iT.sev2BurnRate(h.Es.Notebooks,"notebookRenameUnableToFindParent",E.i1.P99,E.Ip.Min10,!1,{parentId:n,notebookId:e.get("id"),disableSidebarPrefetch:!0})})},isStructureStreamingCommand:et,getLanguageOptions:function(){return Object.keys(S.I1).map(e=>{let t=S.I1[e];return{label:S.l4[t],value:t}})},getSparkVersion:ea,extractQueryIdFromResourceName:eo,isEligibleForUnsupportedQueryFallback:es,getRecentAssetId:e=>{switch(e.getEditorMode()){case"notebook":case"file":case"designer":return e.id.toString();case"query":if("query"!==e.get("type"))return e.id.toString();let t=e.getQueryId();if(!t)throw Error(`invalid query resource name ${e.get("resourceName")}`);return t}},getRecentAssetType:e=>{let t=e.getEditorMode();if("designer"===t&&!(0,A.dD)())return b.P.NOTEBOOK;return el[t]},runCommandConfirmation:eu,confirmNewSessionIfCatalogOrSchemaChanged:e=>k(function*(){if("query"!==e.getEditorMode()||"alertV2"===e.get("type"))return!0;let t=e.get("targetClusterId");if((0,c.Ul)(t))return!0;let a=e.getNotebookMetadata()?.sqlQueryOptions,n={catalog:a?.catalog||"",schema:a?.schema||""},i=e.get("sessionCatalogAndSchema");if(!e.isAttached())return!0;if(!i)return(0,m.W)("databricks.notebook.enableUnifiedSqlEditorSessionSupportForWarehouses",!1)&&(yield e.detachAndAttach(e.get("targetClusterId"))),!0;let o={catalog:i?.catalog||"",schema:i?.schema||""},s=o.catalog!==n.catalog,l=o.schema!==n.schema;if(!s&&!l)return!0;let d=new I.y;O.k.confirm({title:(0,r.Y)(u.sA,{id:"PXcYNF",defaultMessage:"Start new session?"}),body:(0,r.Y)(u.sA,{id:"E2vKa4",defaultMessage:`The {changeType, select,
          catalogAndSchema {catalog and schema have}
          catalogOnly {catalog has}
          other {schema has}
        } changed. A new session is required to run queries with the updated {changeType, select,
          catalogAndSchema {catalog and schema}
          catalogOnly {catalog}
          other {schema}
        }. Would you like to start a new session?`,values:{changeType:(()=>{if(s&&l)return"catalogAndSchema";if(s)return"catalogOnly";return"schemaOnly"})()}}),okText:(0,r.Y)(u.sA,{id:"sn+eYw",defaultMessage:"Yes, start session and run"}),cancelText:(0,r.Y)(u.sA,{id:"z/mZtf",defaultMessage:"No, cancel run"}),onCancel:()=>{d.resolve(!1)},onOk:e=>{e.stopPropagation(),d.resolve(!0)}});let p=yield d.promise;if(e.recordClientsideEvent(p?"usqle.confirmNewSessionForMst.confirmed":"usqle.confirmNewSessionForMst.rejected"),!p)return!1;return yield e.detachAndAttach(e.get("targetClusterId")),!0})(),isValidNotebookUrl:ec,extractSqlStatements:U,extractSqlStatementsFromSparkTable:F,extractSqlCommandsFromPythonOrScala:$,displaySTSCredentialsRefreshModal:function(){let e=window.location.pathname+window.location.search,t=btoa(window.location.hash),a=`/saml/auth?hash=${t}&next_url=${btoa(e)}`;O.k.confirm({title:(0,r.Y)(u.sA,{id:"2h94R0",defaultMessage:"New STS session for IAM role is required."}),body:(0,r.Y)(u.sA,{id:"mA9fOP",defaultMessage:"The STS session for your IAM role is about to expire. Please click here to get a new session."}),onOk:()=>{window.location.replace(a)}})},supportsWidgets:er,notebookNameAsDisplayTitle:function(e,t){if(!e)return e;if("query"===t||"alert"===t)return(0,y.w)(e);if("designer"===t)return(0,v.qk)(e);return e},displayTitleToNotebookName:function(e,t,a){if("designer"===t)return(0,v.sG)(e,a);return e},isQuery:function(e){return"query"===e.getEditorMode()&&"query"===e.get("type")}},eg=ef},557351:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("path",{fill:"currentColor",d:"M4 4h3v1.5H4a2.5 2.5 0 0 0 0 5h3V12H4a4 4 0 0 1 0-8M12 10.5H9V12h3a4 4 0 0 0 0-8H9v1.5h3a2.5 2.5 0 0 1 0 5"}),(0,n.Y)("path",{fill:"currentColor",d:"M4 8.75h8v-1.5H4z"})]})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="LinkIcon";let l=s},558937:(e,t,a)=>{let n;function r(e){n=e}function i(){return n}a.d(t,{I:()=>i,S:()=>r})},570512:(e,t,a)=>{a.d(t,{Az:()=>i,Qn:()=>o,S8:()=>n,Ty:()=>r});let n=e=>e.replace(/^\n+|\n+$/g,""),r=(e,t)=>{if(!e)return"";let a=e.slice(0,5e3);return e?.match(/^```sql|```/)?a:`\`\`\`${t??""}
${a}
\`\`\``},i=e=>({...e.reduce((e,{contextMetadata:t,rawContext:a,formattedContext:n})=>({contextMetadata:{...e.contextMetadata,...t},rawContext:{...e.rawContext,...a},formattedContext:{...e.formattedContext,...n}}),{contextMetadata:{},rawContext:{},formattedContext:{}})});function o(e){return{prompt:""+e.map(e=>e.prompt).filter(e=>""!==e).join("\n"),...i(e)}}},574132:(e,t,a)=>{a.d(t,{y:()=>i});var n=a(610435);a(692738);var r=a(497895);let i=({disabled:e,children:t})=>{let{theme:a}=(0,r.wn)();return(0,n.Y)("div",{css:{color:a.colors.textSecondary,fontSize:a.typography.fontSizeSm,...e&&{color:a.colors.actionDisabledText}},children:t})}},580769:(e,t,a)=>{a.d(t,{v:()=>o});var n=a(893779),r=a(522317),i=a(915679);class o extends n.N{version=1;modelMetadata;config;constructor(e,t,a){super(t),this.config=e,this.version=a??this.version,this.modelMetadata=e.defaultMetadata}updateModelMetadata(){let e=this.config.getOverrideMetadata();e&&(this.modelMetadata=e)}get SamplingPercentage(){return this.updateModelMetadata(),this.modelMetadata.treatments.reduce((e,t)=>e+t.experiment_percentage,0)}get ExperimentName(){return this.config.experimentName}get ExperimentId(){return`${this.ExperimentName}-v${this.version}`}IsValidParticipant(){return!0}IsExperimentEnabled(){return this.SamplingPercentage>0}randomFunction(){if("user"===this.modelMetadata.experiment_type)return this.getRandomNumberFromUserIdAndExperiment(this.ExperimentId);if("session"===this.modelMetadata.experiment_type)return this.getBrowserSession(this.ExperimentId);return this.getRandomNumber()}LogExperiment(e){if(this.IsExperimentEnabled()){let t=r.A.get(this.ExperimentId)?.session_id??this.getRandomSession().toString();(0,i.ZA)({experimentId:this.ExperimentId,lakesenseSessionId:t,...e})}}getModelPriority(){let e=[];if(this.IsExperimentEnabled()&&this.IsValidParticipant()){let t=0,a=this.randomFunction();for(let n of this.modelMetadata.treatments)if(a<(t+=n.experiment_percentage)){e=n.model_priority;break}}return e}}},583054:(e,t,a)=>{a.d(t,{Y:()=>s,g:()=>o});var n=a(926061),r=a(789392),i=a(520747);function o({textFormat:e,globalSeriesType:t,swappedAxes:a}){if(e?.length)return{_template:e.replaceAll(n.sW,(e,n,o)=>{let s=n.slice(2);if((0,r.cJ)(s))return`{{ @@${(0,i.c)({key:s,swappedAxes:a,globalSeriesType:t})}${o?"| "+o:""} }}`;if("yPercent"===s&&a)return`{{ @@xPercent${o?"| "+o:""} }}`;if("yPercent"===s&&"pie"===t)return`{{ @@anglePercent${o?"| "+o:""} }}`;return e})};return{_template:`{{ @@${(0,i.c)({key:"y",globalSeriesType:t,swappedAxes:a})} }}`}}function s({percentValues:e,globalSeriesType:t,swappedAxes:a}){switch(t){case"heatmap":return"{{ @@zVal }}";case"pie":return"{{ @@anglePercent }}";default:if(e&&a)return"{{ @@x }} ({{ @@xPercent }})";if(e)return"{{ @@y }} ({{ @@yPercent }})";return"{{ @@y }}"}}},583422:(e,t,a)=>{a.d(t,{R7:()=>n,V5:()=>r,zR:()=>i});let n=(e,t)=>(e&&e.preventCancel&&(!t||!t.cancellable)&&e.preventCancel(),e),r=(e,t)=>{if(e.length!==t.length+1)return!1;return t.every((t,a)=>t===e[a])},i=(e,t,a)=>{if(e?.some(e=>e.name.includes(".")))return e.map(e=>{let t=e.name.split(".");return{nameArr:t,extendedColumnPath:a.concat(t),column:e}}).filter(({extendedColumnPath:e})=>r(e,t)).map(({nameArr:e,column:t})=>({name:e[e.length-1],type:t.type?.toLowerCase()}))}},583810:(e,t,a)=>{a.d(t,{Z3:()=>u,a6:()=>s,gK:()=>l});var n=a(631377),r=a.n(n),i=a(607030),o=a(111984);function s(e,t,a,n){let r=t;for(let{predicate:t,process:i,chatWindowEventName:o}of e)"string"==typeof r&&t(r,n)&&(o&&a?.(o,r),r=i(r,n));return r}function l(e,t,a,n){let o=t,l=()=>{o===t&&(o=r()(t))};for(let r=0;r<t.length;r++){let u=t[r].message.content;if(null===u||t[r].message.role===i.oW.tool)continue;let c=s(e,u,a,{context:t[r].context,promptId:n?.promptId});u!==c&&(l(),o[r].message.content=c)}return o}function u(e,t){if("content_filter"===e.finish_reason)return{...t,content:o.F2};if(!e.content_filter_results)return t;let a=e.content_filter_results;if(a.hate?.filtered||a.self_harm?.filtered||a.sexual?.filtered||a.violence?.filtered||a.protected_material_text?.filtered||a.protected_material_code?.filtered||a.jailbreak?.filtered)return{...t,content:o.F2};return t}},584631:(e,t,a)=>{a.d(t,{p:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.dashboardsai.disableEditWidgetsSchemaRefs",!1)}},585703:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M5 8a3 3 0 1 0 6 0 3 3 0 0 0-6 0m3-4.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CircleOutlineIcon";let l=s},586129:(e,t,a)=>{a.d(t,{j:()=>o});var n=a(542908),r=a(620275),i=a(441535);function o(){return!(0,n.B)()&&!(0,r.s4)()&&((0,i.W)("enable_lakeview_tags",!1)||(0,i.W)("databricks.fe.lakeview.enableLakeviewTags",!1))}},586791:(e,t,a)=>{a.d(t,{y:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.skipDescribeForPublishedMetricView",!1)}},588949:(e,t,a)=>{a.d(t,{I:()=>l});var n=a(610435),r=a(497895),i=a(382908),o=a(342411),s=a(939281);function l({multiple:e}){let{theme:t}=(0,r.wn)();return(0,n.Y)("div",{css:{position:"absolute",width:"100%",height:"calc(100% - 8px)",background:t.colors.backgroundSecondary,border:`4px dashed ${t.colors.actionDefaultBorderHover}`,borderRadius:10,display:"flex",top:0,left:0,zIndex:1e3,justifyContent:"center"},children:(0,n.FD)("div",{css:{display:"flex",alignItems:"center",justifyContent:"center",height:"fit-content",gap:t.spacing.md,background:t.colors.actionDisabledBackground,width:"100%"},children:[(0,n.Y)(s.f,{}),(0,n.Y)(i.o.Title,{level:2,css:{opacity:.8},color:"secondary",children:e?(0,n.Y)(o.sA,{id:"sFrtSV",defaultMessage:"Drop one or more files here"}):(0,n.Y)(o.sA,{id:"0XMpj7",defaultMessage:"Drop a file here"})})]})})}},594053:(e,t,a)=>{a.d(t,{R:()=>i});var n=a(441535),r=a(549063);function i(){return(0,r.C)()&&(0,n.W)("databricks.fe.lakeview.enableDAGMetricViewPriorityForDatasets",!1)}},594669:(e,t,a)=>{a.d(t,{g:()=>s});var n=a(669536),r=a(762047),i=a(529129),o=a(191431);function s(e){if(!(0,o.Q)())return e;let t=new Set((e=(0,r.O)(e).map(n.l)).map(e=>{let t=e.glob?(0,i.e_)(e.glob):null;return t?.type==="folder"?t.path:null}).filter(e=>!!e));return e.filter(e=>!e.glob||!function(e,t){let a=(0,i.e_)(e);if(!a)return!1;for(let e of t.values())if(e!==a.path&&a.path.startsWith(e))return!0;return!1}(e.glob,t))}},595835:(e,t,a)=>{a.d(t,{O:()=>n});let n={...a(629033).O,AssistantEval:"assistant-eval"}},597138:(e,t,a)=>{a.d(t,{J:()=>s});var n=a(610435),r=a(692738),i=a(218305),o=a(247546);let s=({recordEvent:e,flags:t,renderingLimit:a,maxConsumerDataRows:s,isStyleInverted:l,children:u})=>{let[c,d]=(0,r.useState)(!1),m=(0,r.useMemo)(()=>({recordEvent:e,renderingLimit:a,maxConsumerDataRows:s,isStyleInverted:l,isInPngCapturing:c,setIsInPngCapturing:d}),[e,a,s,l,c,d]);return(0,n.Y)(i.U.Provider,{value:m,children:(0,n.Y)(o.DH.Provider,{value:t,children:u})})}},597163:(e,t,a)=>{a.d(t,{m:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enableServicePrincipalPublish",!1)}},598249:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",d:"M5.25 1a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M10.75 1a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M5.25 6.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M10.75 6.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M5.25 11.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M10.75 11.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="DragIcon";let l=s},598612:(e,t,a)=>{a.d(t,{K:()=>u});var n=a(610435);a(692738);var r=a(79570),i=a(664093),o=a(140078),s=a(201828);let l="right",u=({type:e="help",content:t,tooltipContent:a,iconTestId:u,placement:c=l})=>{let{side:d,align:m}={top:{side:"top",align:"center"},bottom:{side:"bottom",align:"center"},left:{side:"left",align:"center"},right:{side:"right",align:"center"},topLeft:{side:"top",align:"start"},topRight:{side:"top",align:"end"},bottomLeft:{side:"bottom",align:"start"},bottomRight:{side:"bottom",align:"end"},leftTop:{side:"left",align:"start"},leftBottom:{side:"left",align:"end"},rightTop:{side:"right",align:"start"},rightBottom:{side:"right",align:"end"}}[c||l];return(0,n.Y)(r.m,{componentId:"reactFieldTip.tooltip",content:a||t,side:d,align:m,children:(0,n.Y)("div",{"data-testid":u,children:"warning"===e?(0,n.Y)(i.A,{}):"attention"===e?(0,n.Y)(o.A,{}):(0,n.Y)(s.A,{})})})}},599349:(e,t,a)=>{a.d(t,{M:()=>m});var n=a(610435),r=a(956935),i=a(692738),o=a(5421),s=a(79128),l=a(497895),u=a(369291),c=a(174541),d=a(639712);let m=(0,i.forwardRef)(({children:e,...t},a)=>{let{theme:i}=(0,l.wn)(),{isInsideTypeaheadCombobox:m,componentId:p}=(0,o.T)();if(!m)throw Error("`TypeaheadComboboxAddButton` must be used within `TypeaheadCombobox`");return(0,n.Y)(s.$n,{...t,componentId:`${p}.add_option`,type:"tertiary",onClick:e=>{e.stopPropagation(),t.onClick?.(e)},onMouseUp:e=>{e.stopPropagation(),t.onMouseUp?.(e)},className:"combobox-footer-add-button",css:{...(0,c.RB)(i),...(0,r.AH)((0,d.dg)({width:"100%",padding:0,display:"flex",alignItems:"center",borderRadius:0,"&:focus":{background:i.colors.actionTertiaryBackgroundHover,outline:"none"}}))},icon:(0,n.Y)(u.A,{}),ref:a,children:e})})},604347:(e,t,a)=>{a.d(t,{F:()=>l});var n=a(441535),r=a(886100),i=a(22191),o=a(747129),s=a(580769);class l extends s.v{constructor(e,t){super({experimentName:"quickFixModelPriority",defaultMetadata:{experiment_type:"user",treatments:[{experiment_percentage:100,model_priority:["gpt-4o-mini-2024-07-18","gpt-41-2025-04-14","claude-4-5-sonnet"]}]},getOverrideMetadata:()=>{let e=(0,n.W)("databricks.fe.assistantExperiment.quickFixModelPriority","");if(!e)return;try{return JSON.parse(e)}catch(e){r.iT.sev2BurnRate(i.Es.Assistant,"Failed to parse Quick Fix Model Priority experiment metadata",o.i1.P99,o.Ip.Min10,!1,e);return}}},e,t)}}},605107:(e,t,a)=>{a.d(t,{X:()=>i});var n=a(610435),r=a(497895);let i=({children:e,...t})=>{let{theme:a}=(0,r.wn)();return(0,n.Y)("div",{...t,css:{display:"flex",flexDirection:"row",alignItems:"flex-start",padding:`${a.spacing.xs}px ${a.spacing.lg/2}px`,alignSelf:"stretch",fontWeight:400,color:a.colors.textSecondary},children:e})}},607074:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.5 9V6h3v3zm3 1.5v3h-3v-3zm1.5-.75v-9a.75.75 0 0 0-.75-.75h-4.5A.75.75 0 0 0 5 .75v13.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75zM6.5 4.5v-3h3v3z",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="ColumnIcon";let l=s},609128:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",...e,children:(0,n.Y)("path",{fill:"currentColor",d:"M4 21v-2h12v2zm5.65-4.85L4 10.5l2.1-2.15L11.8 14zM16 9.8l-5.65-5.7L12.5 2l5.65 5.65zM20.6 20 7.55 6.95l1.4-1.4L22 18.6z"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="GavelIcon";let l=s},609421:(e,t,a)=>{a.d(t,{P:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enablePublishedDashboardAgent",!1)}},609597:(e,t,a)=>{a.d(t,{Lk:()=>o,Xr:()=>l,a4:()=>u,g1:()=>i,mY:()=>s,rM:()=>c});var n=a(160603),r=a(971845);let i=(e,t)=>({name:e,internal_name:t}),o=e=>["folder",e],s=(e,t)=>o({name:e,internal_name:t}),l=(e,t,a)=>{if(t?.type!==void 0){let n=a??{name:t.name,internal_name:t.internal_name};e.setQueryData(o(n),t)}},u=(e,t)=>(0,n.useQuery)(o(e),()=>(0,r.J)(e),t),c=(e,t,a)=>e.fetchQuery(o(t),()=>(0,r.J)(t),a)},613870:(e,t,a)=>{a.d(t,{Z:()=>i,_:()=>o});var n=a(441535),r=a(255791);function i(){return(0,n.W)("databricks.fe.lakeview.enableViewQueryMenuItem",!1)}function o(){return(0,r.X)()&&i()&&(0,n.W)("databricks.fe.lakeview.enablePublishedModeViewQueryMenuItem",!1)}},617293:(e,t,a)=>{a.d(t,{Ef:()=>o,K2:()=>l,oD:()=>s,w1:()=>u});var n=a(29824),r=a(348907),i=a(166893);let o="samples",s="system",l=({catalogName:e,catalogType:t,securableKind:a,isDefaultCatalog:n})=>{if(n)return r.Is.DEFAULT_CATALOG;if((({catalogName:e})=>e===s)({catalogName:e}))return r.Is.SYSTEM_CATALOG;if((({catalogType:e})=>"USER_HOME_CATALOG"===e)({catalogType:t}))return r.Is.USER_HOME_CATALOG;if((({catalogType:e,catalogName:t,securableKind:a})=>e===i.Oc.DELTASHARING_CATALOG||"CATALOG_DELTASHARING"===a||(({catalogName:e})=>e===o)({catalogName:t}))({catalogType:t,catalogName:e,securableKind:a}))return r.Is.SHARED_CATALOG;if((({catalogName:e})=>"hive_metastore"===e)({catalogName:e}))return r.Is.LEGACY_CATALOG};function u(e){if("FUNCTION_FEATURE_SPEC"===e||"FUNCTION_FEATURE_SPEC_DELTASHARING"===e)return n.an.FUNCTION_FEATURE_SPEC;return n.an.FUNCTION}},617933:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.75 1a.75.75 0 0 0-.75.75v6.089c0 .38-.173.739-.47.976l-2.678 2.143A2.27 2.27 0 0 0 3.27 15h9.46a2.27 2.27 0 0 0 1.418-4.042L11.47 8.815A1.25 1.25 0 0 1 11 7.839V1.75a.75.75 0 0 0-.75-.75zm.75 6.839V2.5h3v5.339c0 .606.2 1.188.559 1.661H5.942A2.75 2.75 0 0 0 6.5 7.839M4.2 11 2.79 12.13a.77.77 0 0 0 .48 1.37h9.461a.77.77 0 0 0 .481-1.37L11.8 11z",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="BeakerIcon";let l=s},618519:(e,t,a)=>{a.d(t,{Y:()=>C,q:()=>R});var n=a(692738),r=a(927239),i=a(758396),o=a(711489),s=a(657825),l=a(886100),u=a(22191),c=a(747129),d=a(595615),m=a(77240),p=a(710343),f=a(302118),g=a(733337),h=a(660618),E=a(641760),b=a(192464),T=a(862294),y=a(302136);function I(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function A(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){I(i,n,r,o,s,"next",e)}function s(e){I(i,n,r,o,s,"throw",e)}o(void 0)})}}let v=[/^Fetch request failed due to expired CSRF token/,/^Fetch request failed due expired user session/];function S(){let e=(0,y.A)(),t="http://go/dduipd/list_catalogs";return(0,n.useCallback)(({withWorkspaceBindings:a,includeBrowse:n})=>({queryKey:[r.xQ,!0===a,!0===n],queryFn:()=>A(function*(){try{let r=yield A(function*(){return e({rpc:o.Uz.UcApiRpcName.LIST_CATALOGS}),f.k.getCatalogs(n,a)})();return l.iT.sev2BurnRate(u.Es.DataExplorer,t,c.i1.P99,c.Ip.Min10,!0),r.catalogs??[]}catch(e){return(0,g.Ur)(e)||e instanceof E.XD&&404===e.response.status&&"FEATURE_DISABLED"===e.response.data.error_code&&e.response.data.message.includes("STANDARD_TIER")||e?.errorType===i.pB.EXPIRED_CSRF_TOKEN||e?.errorType===i.pB.EXPIRED_SESSION||v.some(t=>e?.message?.match(t))||l.iT.sev2BurnRate(u.Es.DataExplorer,t,c.i1.P99,c.Ip.Min10,!1,e),[]}})()}),[e])}function _(){let e=(0,E.ei)()&&(0,E.n_)()&&!(0,s.gK)(),t=(0,T.zx)({enabled:e}),a=(0,d.Ox)({queryFn:S}),i=!!e&&t.data?.settingspolicyserviceGetSettingRestWithoutSettingName?.setting?.value?.boolVal?.value,o=t.isLoading,l=!e||!1===i&&!1===o;return(0,n.useCallback)(({showNonUCCatalogs:e,sampleCatalogEnabled:t,withWorkspaceBindings:n,includeBrowse:i,dataSource:o,isPostgres:u=!1})=>({queryKey:[r.xQ,!0===e,!0===t,!0===n,!0===i,!0===l,u?(0,p.ud)(o):""],queryFn:()=>A(function*(){let r=(0,E.ei)(),c=(0,s.gK)(),d=[];if(u&&o?.type===m.ol.DATABASE_INSTANCE)return(0,b.mr)(o);if(r){let e=yield a({withWorkspaceBindings:n,includeBrowse:i});d.push(...e)}return e&&(!c&&l&&d.push({name:h.UQ}),t&&!d.some(({name:e})=>e===h.lx)&&d.push({name:h.lx})),d.sort((e,t)=>e.name.localeCompare(t.name))})()}),[l,a])}function C(e,t){let a=_();return(0,d.AO)({...a(e),keepPreviousData:!0,...t})}function R(){return(0,d.Ox)({queryFn:_})}},626152:(e,t,a)=>{a.d(t,{K:()=>o});var n=a(747129),r=a(886100);let i={severity:n.Op.Sev2,messageOverride:"Expected value to be never"};function o(e,t,a,o){let s,l={...i,...o};switch(l.severity){case n.Op.Sev1:s=r.iT.sev1;break;case n.Op.Sev2:s=r.iT.sev2;break;case n.Op.Sev3:s=r.iT.sev3;break;default:s=r.iT.sev2}s(t,l.messageOverride,{...a,never:e})}},628828:(e,t,a)=>{a.d(t,{t:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.ES.1641324.killswitch",!1)}},629533:(e,t,a)=>{a.d(t,{UV:()=>l,Xc:()=>o,ef:()=>i,q8:()=>s});let n=100,r=1e3,i=e=>{let t=e?.map(e=>e.key);for(let a of e??[]){let e=a.deps?.find(e=>!t?.includes(e));if(e)throw Error(`${a.key} needs ${e}`)}},o=(e=[])=>(e=>{let t=new Set,a=[],n=r=>{if(t.has(r.key??""))return;for(let a of(t.add(r.key??""),r.overwritesKeys??[])){let t=e.find(e=>e.key===a);t&&n(t)}a.push(r)};for(let t of e)n(t);return a})(e);function s(e,t){return a=>{t.setState(t=>{var n;return{...t,[e]:(n=t[e],"function"==typeof a?a(n):a)}})}}let l=(e,t=n,a=r)=>new Promise(n=>{let r=setTimeout(()=>{clearInterval(i)},a),i=setInterval(()=>{e()&&(clearInterval(i),clearTimeout(r),n())},t)})},631209:(e,t,a)=>{a.d(t,{H5:()=>r.H5,NQ:()=>r.NQ,Zh:()=>r.Zh,fd:()=>r.fd,se:()=>n.s,wG:()=>r.wG,wg:()=>r.wg});var n=a(888708),r=a(987229)},634685:(e,t,a)=>{a.d(t,{$D:()=>c,Ay:()=>p,Az:()=>m,P5:()=>u,bm:()=>d,dp:()=>l});let n="auto-run-selected-command",r="auto-run-all",i="no-auto-run";var o,s,l=((o={}).RUN_ERROR="RUN_ERROR",o.RUN_TABLE_RESULT_SUBCOMMAND_NO_RUNNABLE_CLUSTER_ATTACHED="RUN_TABLE_RESULT_SUBCOMMAND_NO_RUNNABLE_CLUSTER_ATTACHED",o.SQL_WAREHOUSE_INCOMPATIBLE_WARNING="SQL_WAREHOUSE_INCOMPATIBLE_WARNING",o);let u={state:{NO_CLUSTER_ATTACHED:"NO_CLUSTER_ATTACHED",ALREADY_RUNNING:"ALREADY_RUNNING",COMMAND_EMPTY:"COMMAND_EMPTY",READY:"READY",SELECTED_COMMAND_RUNNING:"SELECTED_COMMAND_RUNNING",COMMAND_LIST_EMPTY:"COMMAND_LIST_EMPTY",BATCH_RUNNING:"BATCH_RUNNING",COMMAND_ID_UNDEFINED:"COMMAND_ID_UNDEFINED"},MAX_COMMAND_TITLE_LENGTH:400,AUTO_RUN_ACCESSED_COMMAND:n,AUTO_RUN_ALL:r,AUTO_RUN_NO_OP:i,AUTO_RUN_ALL_OPTIONS:[n,r,i],TOPBAR_HEIGHT:76,INPUT_BTN_HEIGHT:25,SIDE_NAV_WIDTH:76,SHELL_TOP_CLASS_NAME:"shell-top",SHELL_TOP_JQUERY_NAME:".shell-top",SHELL_TOP_AND_HEADERS:".shell-top, .notebook-header",SCROLL_CONTAINER_CLASS_NAME:"notebook-scrollable-container"},c="navigate",d="move";var m=((s={}).INSPECT_VARIABLE="INSPECT_VARIABLE",s.TABLE_OF_CONTENTS="TABLE_OF_CONTENTS",s.DEBUGGER="DEBUGGER",s.ADD_COMMAND="ADD_COMMAND",s.COMMAND_ERROR="COMMAND_ERROR",s.MOUNT="MOUNT",s.CELL_MAGIC="CELL_MAGIC",s.GENERATE_QUERY_BUTTON="GENERATE_QUERY_BUTTON",s.DELETE_COMMAND="DELETE_COMMAND",s);let p=u},644424:(e,t,a)=>{a.d(t,{$X:()=>g,DC:()=>y,Eg:()=>f,F6:()=>h,I$:()=>E,Jh:()=>p,Yc:()=>T,o5:()=>b,oJ:()=>c,qE:()=>d,zK:()=>m});var n=a(441535),r=a(5697),i=a(971845),o=a(580500),s=a(889885);function l(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function u(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){l(i,n,r,o,s,"next",e)}function s(e){l(i,n,r,o,s,"throw",e)}o(void 0)})}}let c="Drafts",d=()=>(0,n.W)("databricks.fe.notebook.moveUsqleQueryOnSaveInDraftsFolder",!1),m=()=>(0,n.W)("databricks.fe.notebook.enableDraftsFolderUsqleCreation",!1),p=()=>(0,n.W)("databricks.fe.notebook.enableDraftsFolderNotebookCreation",!1),f=()=>m()||p(),g=e=>{if(!b(e))return!1;switch(e.getEditorMode()){case"query":return d();case"notebook":return(0,n.W)("databricks.fe.notebook.moveNotebookOnRenameInDraftsFolder",!1);default:return!1}},h=e=>{if(!e)return!1;return e.startsWith(`/${c}/`)||e.startsWith(`/Users/${(0,s.FI)("user")}/${c}/`)||e.startsWith(`/Users/Groups/${(0,s.FI)("user")}/${c}/`)},E=e=>"query"===e.getEditorMode()&&h(e.get("pathName")??void 0),b=e=>E(e)||"notebook"===e.getEditorMode()&&h(e.get("pathName")??void 0),T=()=>u(function*(){let e=yield(0,i.J)({name:r.RJ.Drafts});return Number((0,o.Uk)(e.internal_name))})(),y=()=>u(function*(){return yield(0,i.J)({name:r.RJ.Drafts})})()},645787:(e,t,a)=>{a.d(t,{F5:()=>g,FM:()=>p,Lt:()=>m,fr:()=>s,pX:()=>f,qQ:()=>d});var n=a(409989),r=a(844760);function i(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function o(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var o=e.apply(t,a);function s(e){i(o,n,r,s,l,"next",e)}function l(e){i(o,n,r,s,l,"throw",e)}s(void 0)})}}let s=e=>e.split("/").map(encodeURIComponent).join("/"),l=e=>`/ajax-api/2.0/workspace-files${s(e)}`,u="x-databricks-editor-type",c="notebook-file",d=(e,t="notebook")=>o(function*(){let a=l(e),n={};"notebook"!==t&&(n[u]=c);let i=yield(0,r.S)(a,{headers:n}),o=yield i.text(),s=i.headers.get("Etag"),d=i.headers.get("content-type"),{ok:m,status:p}=i;return{data:o,sha:s,httpError:!m,contentType:d,status:p}})(),m=(e,t,a,n="notebook")=>o(function*(){let i=l(e),o={};void 0!==a&&(o["If-Match"]=a),"notebook"!==n&&(o[u]=c);let s=yield(0,r.S)(i,{method:"POST",body:t,headers:o}),d=s.headers.get("Etag"),{status:m,statusText:p,ok:f}=s;return{sha:d,content:t,status:m,statusText:p,httpError:!f}})(),p=e=>o(function*(){let t=e.startsWith("/Workspace")?e:`/Workspace${e}`,a=`/ajax-api/2.0/workspace/list?path=${encodeURIComponent(t)}`,n=yield(0,r.S)(a);if(!n.ok)return[];let i=null;try{i=yield n.json()}catch{return[]}return(i?.objects??[]).map(e=>{let t;return{...e,path:(t=e.path).startsWith("/Workspace/")?t.slice(10):t}})})(),f=()=>(0,n.TC)(`${window.location.origin}/ajax-api/2.0/`);function g(e,t=!0){return o(function*(){return f().post("workspace/delete",{path:e,move_to_trash:t})})()}},647660:(e,t,a)=>{a.d(t,{Content:()=>k,List:()=>O,Root:()=>R,Trigger:()=>N});var n=a(610435),r=a(644091),i=a(747589),o=a(659276),s=a(514503),l=a.n(s),u=a(91958),c=a.n(u),d=a(692738),m=a(79128),p=a(224098),f=a(497895),g=a(369291),h=a(7754),E=a(325048),b=a(639712),T=a(661748),y=a(53333);let I=[p.s7.OnValueChange,p.s7.OnView],A=[p.s7.OnValueChange],v=[p.s7.OnClick],S={"& > div":{display:"inline-block !important"}},_=d.createContext({activeValue:void 0,dataComponentProps:{"data-component-id":"design_system.tabs.default_component_id","data-component-type":p.v_.Tabs}}),C=d.createContext({viewportRef:{current:null}}),R=d.forwardRef(({value:e,defaultValue:t,onValueChange:a,componentId:i,analyticsEvents:s,valueHasNoPii:l,...u},c)=>{let m=(0,T.W)("databricks.fe.observability.defaultComponentView.tabs",!1),f=void 0!==e,[g,h]=d.useState(t),E=(0,d.useMemo)(()=>s??(m?I:A),[s,m]),b=(0,p.ei)({componentType:p.v_.Tabs,componentId:i,analyticsEvents:E,valueHasNoPii:l,shouldStartInteraction:!0}),{elementRef:v}=(0,y.z)({onView:b.onView,value:e??t}),S=(0,r.SV)([c,v]),C=(0,d.useCallback)(e=>{b.onValueChange(e),a&&a(e),f||h(e)},[b,a,f]),R=f?e:g,O=(0,d.useMemo)(()=>({activeValue:R,dataComponentProps:b.dataComponentProps}),[R,b.dataComponentProps]);return(0,n.Y)(_.Provider,{value:O,children:(0,n.Y)(o.bL,{value:e,defaultValue:t,onValueChange:C,...u,ref:S})})}),O=d.forwardRef(({addButtonProps:e,scrollAreaViewportCss:t,tabListCss:a,children:r,dangerouslyAppendEmotionCSS:s,shadowScrollStylesBackgroundColor:l,scrollbarHeight:u,getScrollAreaViewportRef:c,...p},h)=>{let E=d.useRef(null),{theme:b}=(0,f.wn)(),{dataComponentProps:T}=d.useContext(_),y=L(b,l,u);d.useEffect(()=>{c&&c(E.current)},[c]);let I=(0,d.useMemo)(()=>({viewportRef:E}),[]);return(0,n.Y)(C.Provider,{value:I,children:(0,n.FD)("div",{css:[y.container,s],children:[(0,n.FD)(i.bL,{type:"hover",css:y.root,children:[(0,n.Y)(i.LM,{css:[y.viewport,t,S],ref:E,children:(0,n.Y)(o.B8,{css:[y.list,a],...p,ref:h,...T,children:r})}),(0,n.Y)(i.Ze,{orientation:"horizontal",css:y.scrollbar,children:(0,n.Y)(i.zi,{css:y.thumb})})]}),e&&(0,n.Y)("div",{css:[y.addButtonContainer,e.dangerouslyAppendEmotionCSS],children:(0,n.Y)(m.$n,{icon:(0,n.Y)(g.A,{}),size:"small","aria-label":"Add tab",css:y.addButton,onClick:e.onClick,componentId:`${T["data-component-id"]}.add_tab`,className:e.className})})]})})}),N=d.forwardRef(({onClose:e,suppressDeleteClose:t,customizedCloseAriaLabel:a,value:i,disabled:s,children:u,...c},m)=>{let{theme:g}=(0,f.wn)(),E=d.useRef(null),b=(0,r.SV)([m,E]),{activeValue:T,dataComponentProps:y}=d.useContext(_),I=y["data-component-id"],{viewportRef:A}=d.useContext(C),S=void 0!==e&&!s,R=x(g,S),O=(0,p.ei)({componentType:p.v_.Button,componentId:`${I}.close_tab`,analyticsEvents:v}),N=d.useCallback(()=>{if(!E.current||!A.current||T!==i)return;let e=A.current,t=E.current,a=e.getBoundingClientRect(),n=t.getBoundingClientRect();n.left<a.left?e.scrollLeft-=a.left-n.left:n.right>a.right&&(e.scrollLeft+=n.right-a.right)},[A,T,i]);(0,d.useEffect)(()=>{N()},[N]);let k=d.useMemo(()=>l()(N,10),[N]);return(0,d.useEffect)(()=>{if(!A.current||!E.current)return;let e=new ResizeObserver(k);return e.observe(A.current),e.observe(E.current),()=>{e.disconnect(),k.cancel()}},[k,A]),(0,n.FD)(o.l9,{css:R.trigger,value:i,disabled:s,onKeyDown:a=>{S&&!t&&"Delete"===a.key&&(O.onClick(a),a.stopPropagation(),a.preventDefault(),e(i))},onMouseDown:t=>{S&&1===t.button&&(O.onClick(t),t.stopPropagation(),t.preventDefault(),e(i))},...c,ref:b,children:[u,S&&(0,n.Y)(h.A,{onMouseDown:t=>{s||0!==t.button||!1!==t.ctrlKey||(O.onClick(t),t.stopPropagation(),t.preventDefault(),e(i))},css:R.closeSmallIcon,"aria-hidden":"false","aria-label":t?a:"Press delete to close the tab"})]})}),k=d.forwardRef(({mountMode:e="active",children:t,...a},r)=>{let{theme:i}=(0,f.wn)(),s=U(i),{activeValue:l}=d.useContext(_),u=a.value===l,[c,m]=d.useState(u);return u&&!c&&m(!0),(0,n.Y)(o.UC,{css:s,...a,ref:r,forceMount:"force"===e||"preserve"===e||void 0,children:"preserve"!==e||c?t:void 0})}),w={overflow:"hidden"},M={display:"flex",alignItems:"center"},P={flex:1},D={margin:"2px 0 6px 0"},L=c()((e,t,a)=>({container:{...(0,E.c)(e),contain:"layout paint"},root:w,viewport:{...(0,b.ye)(e,{backgroundColor:t})},list:M,scrollbar:{display:"flex",flexDirection:"column",userSelect:"none",touchAction:"none",height:a??3},thumb:{flex:1,background:e.isDarkMode?"rgba(255, 255, 255, 0.2)":"rgba(17, 23, 28, 0.2)","&:hover":{background:e.isDarkMode?"rgba(255, 255, 255, 0.3)":"rgba(17, 23, 28, 0.3)"},borderRadius:e.borders.borderRadiusSm,position:"relative"},addButtonContainer:P,addButton:D}),(e,t,a)=>`${(0,b.H6)(e)}|${t??""}|${a??""}`),x=c()((e,t)=>({trigger:{...(0,E.s)(e),alignItems:"center",justifyContent:t?"space-between":"center",minWidth:t?e.spacing.lg+e.spacing.md:e.spacing.lg,color:e.colors.textSecondary,lineHeight:e.typography.lineHeightBase,whiteSpace:"nowrap",border:"none",padding:`${e.spacing.xs}px 0 ${e.spacing.sm}px 0`,"& > .anticon:last-of-type":{visibility:"hidden"},"&:hover":{cursor:"pointer",color:e.colors.actionDefaultTextHover,"& > .anticon:last-of-type":{visibility:"visible"}},"&:active":{color:e.colors.actionDefaultTextPress},outlineStyle:"none",outlineColor:e.colors.actionDefaultBorderFocus,"&:focus-visible":{outlineStyle:"auto"},'&[data-state="active"]':{color:e.colors.textPrimary,boxShadow:`inset 0 -4px 0 ${e.colors.actionPrimaryBackgroundDefault}`,"& > .anticon:last-of-type":{visibility:"visible"}},"&[data-disabled]":{color:e.colors.actionDisabledText,"&:hover":{cursor:"not-allowed"}}},closeSmallIcon:{marginLeft:e.spacing.xs,color:e.colors.textSecondary,"&:hover":{color:e.colors.actionDefaultTextHover},"&:active":{color:e.colors.actionDefaultTextPress}}}),(e,t)=>`${(0,b.H6)(e)}|${t}`),U=c()(e=>({color:e.colors.textPrimary,'&[data-state="inactive"]':{display:"none"}}))},648990:(e,t,a)=>{a.d(t,{u:()=>d});var n=a(893779),r=a(441535),i=a(886100),o=a(22191),s=a(747129),l=a(522317),u=a(915679);let c={experiment_type:"user",treatments:[{experiment_percentage:100,system_prompt:"",treatment_name:"control"}]};class d extends n.N{version=1;systemPromptMetadata=c;possibleSystemPromptMetadata="";constructor(e,t){super(e),this.version=t??this.version}updatePossibleSystemPromptMetadata(){if(this.possibleSystemPromptMetadata=(0,r.W)("databricks.fe.editor.assistantExperiment.followupsSystemPrompt",""),this.possibleSystemPromptMetadata)try{this.systemPromptMetadata=JSON.parse(this.possibleSystemPromptMetadata)}catch(e){i.iT.sev2BurnRate(o.Es.Assistant,"Failed to parse Followups System Prompt experiment metadata",s.i1.P99,s.Ip.Min10,!1,e)}}get SamplingPercentage(){return this.updatePossibleSystemPromptMetadata(),this.systemPromptMetadata.treatments.reduce((e,t)=>e+t.experiment_percentage,0)}get ExperimentName(){return"followupsSystemPrompt"}get ExperimentId(){return`${this.ExperimentName}-v${this.version}`}IsValidParticipant(){return!0}IsExperimentEnabled(){return this.SamplingPercentage>0}randomFunction(){if("user"===this.systemPromptMetadata.experiment_type)return this.getRandomNumberFromUserIdAndExperiment(this.ExperimentId);if("session"===this.systemPromptMetadata.experiment_type)return this.getBrowserSession(this.ExperimentId);return this.getRandomNumber()}getTreatment(){this.updatePossibleSystemPromptMetadata();let e="control",t="";if(this.IsExperimentEnabled()&&this.IsValidParticipant()){let a=0,n=this.randomFunction();for(let r of this.systemPromptMetadata.treatments)if(n<(a+=r.experiment_percentage)){t=r.system_prompt,e=r.treatment_name;break}}return{treatmentName:e,systemPrompt:t}}LogExperiment(e){if(this.IsExperimentEnabled()){let t=l.A.get(this.ExperimentId)?.session_id??this.getRandomSession().toString();(0,u.ZA)({experimentId:this.ExperimentId,lakesenseSessionId:t,...e})}}get treatmentName(){return this.getTreatment().treatmentName}getSystemPrompt(e){let{treatmentName:t,systemPrompt:a}=this.getTreatment();return this.LogExperiment({agentName:e,eventName:t}),a}}},649934:(e,t,a)=>{a.d(t,{E:()=>r});let n=e=>({isLoading:!1,response:{authorized:e}}),r={any:(...e)=>({evaluate:t=>e.reduce((e,a)=>{let n=t.authorize(a),r=!!(n.response?.authorized||e.response?.authorized);return{isLoading:e.isLoading||n.isLoading,error:e.error||n.error,response:{authorized:r,unmet_conditions:r?void 0:n.response?.unmet_conditions||e.response?.unmet_conditions}}},n(!1))}),all:(...e)=>({evaluate:t=>e.reduce((e,a)=>{let n=t.authorize(a);return{isLoading:e.isLoading||n.isLoading,error:e.error||n.error,response:{authorized:!!(n.response?.authorized&&e.response?.authorized),unmet_conditions:n.response?.unmet_conditions||e.response?.unmet_conditions}}},n(!0))}),CreateCatalog:()=>({action_name:"CreateCatalog"}),DeleteCatalog:e=>({action_name:"DeleteCatalog",arguments:{catalog:{name:e}}}),GetCatalog:e=>({action_name:"GetCatalog",arguments:{catalog:{name:e}}}),SetCatalogPermission:e=>({action_name:"SetCatalogPermission",arguments:{catalog:{name:e}}}),SetCatalogPolicy:e=>({action_name:"SetCatalogPolicy",arguments:{catalog:{name:e}}}),GetCatalogPermission:e=>({action_name:"GetCatalogPermission",arguments:{catalog:{name:e}}}),ListSchemas:e=>({action_name:"ListSchemas",arguments:{catalog:{name:e}}}),UpdateCatalog:e=>({action_name:"UpdateCatalog",arguments:{catalog:{name:e}}}),UpdateCatalogBindings:e=>({action_name:"UpdateCatalogBindings",arguments:{catalog:{name:e}}}),SelectAllTablesInCatalog:e=>({action_name:"_unchecked_SelectAllTablesInCatalog",arguments:{catalog:{name:e}}}),CreateSchema:e=>({action_name:"CreateSchema",arguments:{catalog:{name:e}}}),SetSchemaPermission:e=>({action_name:"SetSchemaPermission",arguments:{schema:{name:e}}}),SetSchemaPolicy:e=>({action_name:"SetSchemaPolicy",arguments:{schema:{name:e}}}),GetSchemaPermission:e=>({action_name:"GetSchemaPermission",arguments:{schema:{name:e}}}),UpdateSchema:e=>({action_name:"UpdateSchema",arguments:{schema:{name:e}}}),SelectSchema:e=>({action_name:"ListAllTables",arguments:{schema:{name:e}}}),DeleteSchema:e=>({action_name:"DeleteSchema",arguments:{schema:{name:e}}}),CreateTable:e=>({action_name:"CreateTable",arguments:{schema:{name:e}}}),ShareSchema:e=>({action_name:"ShareSchema",arguments:{schema:{name:e}}}),ModifyTable:e=>({action_name:"ModifyTable",arguments:{table:{name:e}}}),UpdateViewDefinition:e=>({action_name:"UpdateViewDefinition",arguments:{table:{name:e}}}),SelectTable:e=>({action_name:"SelectTable",arguments:{table:{name:e}}}),GetTableMetadata:e=>({action_name:"GetTableMetadata",arguments:{table:{name:e}}}),GetTablePermission:e=>({action_name:"GetTablePermission",arguments:{table:{name:e}}}),SetTablePermission:e=>({action_name:"SetTablePermission",arguments:{table:{name:e}}}),SetTablePolicy:e=>({action_name:"SetTablePolicy",arguments:{table:{name:e}}}),DeleteTable:e=>({action_name:"DeleteTable",arguments:{table:{name:e}}}),CreateVolume:e=>({action_name:"CreateVolume",arguments:{schema:{name:e}}}),UpdateVolume:e=>({action_name:"UpdateVolume",arguments:{volume:{name:e}}}),WriteVolume:e=>({action_name:"WriteVolume",arguments:{volume:{name:e}}}),ReadVolume:e=>({action_name:"ReadVolume",arguments:{volume:{name:e}}}),SetVolumePermission:e=>({action_name:"SetVolumePermission",arguments:{volume:{name:e}}}),DeleteVolume:e=>({action_name:"DeleteVolume",arguments:{volume:{name:e}}}),CreateExternalLocation:e=>({action_name:"CreateExternalLocation",arguments:{storageCredential:{name:e}}}),UpdateExternalLocation:e=>({action_name:"UpdateExternalLocation",arguments:{externalLocation:{name:e}}}),UpdateExternalLocationBindings:e=>({action_name:"UpdateExternalLocationBindings",arguments:{externalLocation:{name:e}}}),SetExternalLocationPermission:e=>({action_name:"SetExternalLocationPermission",arguments:{externalLocation:{name:e}}}),DeleteExternalLocation:e=>({action_name:"DeleteExternalLocation",arguments:{externalLocation:{name:e}}}),SetExternalLocationApplyTags:e=>({action_name:"SetExternalLocationApplyTags",arguments:{externalLocation:{name:e}}}),CreateStorageCredential:()=>({action_name:"CreateStorageCredential"}),CreateConnection:()=>({action_name:"CreateConnection"}),UpdateConnection:e=>({action_name:"UpdateConnection",arguments:{connection:{name:e}}}),SetConnectionPermission:e=>({action_name:"SetConnectionPermission",arguments:{connection:{name:e}}}),DeleteConnection:e=>({action_name:"DeleteConnection",arguments:{connection:{name:e}}}),SetConnectionApplyTags:e=>({action_name:"SetConnectionApplyTags",arguments:{connection:{name:e}}}),QueryConnection:e=>({action_name:"QueryConnection",arguments:{connection:{name:e}}}),ListAllRecipients:()=>({action_name:"ListAllRecipients"}),CreateRecipient:()=>({action_name:"CreateRecipient"}),UpdateRecipient:e=>({action_name:"UpdateRecipient",arguments:{recipient:{name:e}}}),SetRecipientPermission:e=>({action_name:"SetRecipientPermission",arguments:{recipient:{name:e}}}),DeleteRecipient:e=>({action_name:"DeleteRecipient",arguments:{recipient:{name:e}}}),CreateShare:()=>({action_name:"CreateShare"}),UpdateShare:e=>({action_name:"UpdateShare",arguments:{share:{name:e}}}),DeleteShare:e=>({action_name:"DeleteShare",arguments:{share:{name:e}}}),SetSharePermission:e=>({action_name:"SetSharePermission",arguments:{share:{name:e}}}),SetShareOwnerPrivileged:()=>({action_name:"SetShareOwnerPrivileged"}),CreateProvider:()=>({action_name:"CreateProvider"}),DeleteProvider:e=>({action_name:"DeleteProvider",arguments:{provider:{name:e}}}),UpdateProvider:e=>({action_name:"UpdateProvider",arguments:{provider:{name:e}}}),SetProviderPermission:e=>({action_name:"SetProviderPermission",arguments:{provider:{name:e}}}),SetMetastorePermission:()=>({action_name:"SetMetastorePermission"}),ValidateStorageCredential:e=>({action_name:"ValidateStorageCredential",arguments:{storageCredential:{name:e}}}),ValidateServiceCredential:e=>({action_name:"ValidateServiceCredential",arguments:{credential:{name:e}}}),ValidateExternalLocation:e=>({action_name:"ValidateExternalLocation",arguments:{externalLocation:{name:e}}}),CreateExternalTable:(e,t)=>({action_name:"CreateExternalTable",arguments:{externalLocation:{name:t},schema:{name:e}}}),CreateSecret:e=>({action_name:"CreateSecret",arguments:{schema:{name:e}}}),SetSecretPermission:e=>({action_name:"SetSecretPermission",arguments:{secret:{name:e}}}),SetSecretApplyTags:e=>({action_name:"SetSecretApplyTags",arguments:{secret:{name:e}}}),UpdateSecret:e=>({action_name:"UpdateSecret",arguments:{secret:{name:e}}}),DeleteSecret:e=>({action_name:"DeleteSecret",arguments:{secret:{name:e}}}),SetCatalogApplyTags:e=>({action_name:"SetCatalogApplyTags",arguments:{catalog:{name:e}}}),SetSchemaApplyTags:e=>({action_name:"SetSchemaApplyTags",arguments:{schema:{name:e}}}),SetTableApplyTags:e=>({action_name:"SetTableApplyTags",arguments:{table:{name:e}}}),SetTableColumnApplyTags:e=>({action_name:"SetTableColumnApplyTags",arguments:{table:{name:e}}}),SetFunctionApplyTags:e=>({action_name:"SetFunctionApplyTags",arguments:{function:{name:e}}}),SetVolumeApplyTags:e=>({action_name:"SetVolumeApplyTags",arguments:{volume:{name:e}}}),CreateRegisteredModel:e=>({action_name:"CreateRegisteredModel",arguments:{schema:{name:e}}}),CreateFunction:e=>({action_name:"CreateFunction",arguments:{schema:{name:e}}}),SetFunctionPermission:e=>({action_name:"SetFunctionPermission",arguments:{function:{name:e}}}),GetFunction:e=>({action_name:"GetFunction",arguments:{function:{name:e}}}),UpdateFunction:e=>({action_name:"UpdateFunction",arguments:{function:{name:e}}}),DeleteFunction:e=>({action_name:"DeleteFunction",arguments:{function:{name:e}}}),ExecuteFunction:e=>({action_name:"ExecuteFunction",arguments:{function:{name:e}}}),UpdateFunctionVersion:e=>({action_name:"UpdateFunctionVersion",arguments:{function:{name:e}}}),ListAllCleanRooms:()=>({action_name:"ListAllCleanRooms"}),CreateCleanRoom:()=>({action_name:"CreateCleanRoom"}),UpdateCleanRoom:e=>({action_name:"UpdateCleanRoom",arguments:{cleanRoom:{name:e}}}),ExecuteCleanRoomTask:e=>({action_name:"ExecuteCleanRoomTask",arguments:{cleanRoom:{name:e}}}),SetCleanRoomPermission:e=>({action_name:"SetCleanRoomPermission",arguments:{cleanRoom:{name:e}}}),SetCleanRoomAutoApprovalRule:e=>({action_name:"SetCleanRoomAutoApprovalRule",arguments:{cleanRoom:{name:e}}}),DeleteCleanRoom:e=>({action_name:"DeleteCleanRoom",arguments:{cleanRoom:{name:e}}}),SetMetastoreArtifactAllowlist:()=>({action_name:"SetMetastoreArtifactAllowlist"}),GetMetastore:()=>({action_name:"GetMetastore"}),UpdateMetastore:()=>({action_name:"UpdateMetastore"}),ListAllProviders:()=>({action_name:"ListAllProviders"}),SetCredentialPermission:e=>({action_name:"SetCredentialPermission",arguments:{credential:{name:e}}}),CreateServiceCredential:()=>({action_name:"CreateServiceCredential"}),UpdateCredential:e=>({action_name:"UpdateCredential",arguments:{credential:{name:e}}}),DeleteCredential:e=>({action_name:"DeleteCredential",arguments:{credential:{name:e}}}),SetCredentialApplyTags:e=>({action_name:"SetCredentialApplyTags",arguments:{credential:{name:e}}}),UpdateCredentialBindings:e=>({action_name:"UpdateCredentialBindings",arguments:{credential:{name:e}}}),CreateConnectionWithCredential:e=>({action_name:"CreateConnectionWithCredential",arguments:{credential:{name:e}}}),CreateExternalMetadata:()=>({action_name:"CreateExternalMetadata"}),SetExternalMetadataPermission:e=>({action_name:"SetExternalMetadataPermission",arguments:{externalMetadata:{name:e}}}),UpdateExternalMetadata:e=>({action_name:"UpdateExternalMetadata",arguments:{externalMetadata:{name:e}}}),DeleteExternalMetadata:e=>({action_name:"DeleteExternalMetadata",arguments:{externalMetadata:{name:e}}}),SetExternalMetadataApplyTags:e=>({action_name:"SetExternalMetadataApplyTags",arguments:{externalMetadata:{name:e}}}),SetShareApplyTags:e=>({action_name:"SetShareApplyTags",arguments:{share:{name:e}}}),SetRecipientApplyTags:e=>({action_name:"SetRecipientApplyTags",arguments:{recipient:{name:e}}}),SetProviderApplyTags:e=>({action_name:"SetProviderApplyTags",arguments:{provider:{name:e}}}),SetCleanRoomApplyTags:e=>({action_name:"SetCleanRoomApplyTags",arguments:{cleanRoom:{name:e}}})}},650447:e=>{e.exports="You are a Databricks Jobs assistant specialized in helping users manage and operate Databricks Jobs.\n\n## Objective\n\nHelp users manage, diagnose, and operate Databricks Jobs. Use the available tools to gather information, execute actions, and resolve requests autonomously.\n\n## Response Strategy\n\n**Run requests**: Trigger job runs.\n**Creation requests**: Use the `createAsset` tool for ALL asset creation operations (jobs, pipelines, notebooks, etc.). Always use `createAsset` with `assetType='job'` to create new jobs.\n**Diagnosis requests**: Load the `job-run-diagnosis` skill via `readSkillFile` FIRST, then follow its instructions.\n{{CONFIGURATION_REQUESTS_PROMPT}}\n**Information requests**: Use `docSearch` for documentation, `searchAssets` to find assets, or `readTable`/`tableSearch` for data questions.\n\n## Core Workflow\n\n1. **Understand**: Identify the user's intent (run, diagnose, configure, or find information).\n2. **Gather Info**: Fetch job or run details, use `docSearch` for documentation, or `searchAssets` to locate resources. For unknown errors, search with varied keywords (error class, message text, related concepts).\n3. **Read Skills**: Before diagnosis or configuration changes, ALWAYS use `readSkillFile` to load the relevant skill. Do this even if you think you know how — skills contain critical details.\n4. **Execute**: Carry out the action using the appropriate tool.\n5. **Persist**: Continue until the request is fully resolved (max 3 retry attempts).\n\n{{CLI_TOOL_INSTRUCTIONS}}\n\n## UI Behavior\n\nAfter a successful action (updating settings, triggering a run, etc.), do NOT tell the user to refresh the page. The UI updates automatically.\n\n## Error Handling\n\n- If a tool call fails, read the error message carefully. For transient errors (timeouts, 5xx, rate limits), retry the same command once. For persistent errors, do not retry without changing the command.\n- If a command is denied by the guardrail, do not attempt it again — explain to the user that the command is not supported.\n\n## Timestamps\n\nAPI responses contain Unix epoch timestamps in milliseconds (e.g., `created_time`, `start_time`, `end_time`). When converting these to human-readable dates, sanity-check the result: any date for a past event must be before today. A conversion that yields a future date is wrong — present the raw timestamp instead.\n\n- Today: {{TODAY_DATE}}\n"},656091:(e,t,a)=>{a.d(t,{K:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.assistant.disableDashboardAuthoringAgentNavigationGuard",!1)}},657418:(e,t,a)=>{a.d(t,{G:()=>o,p:()=>i});var n=a(350318),r=a(441535);function i(){return null!==o()}let o=()=>{let e=(0,r.W)("databricks.unitycatalog.enableOnlineCatalogs",!1),t=(0,r.W)("databricks.unitycatalog.enableNewBrickstoreUCModel",!1)||(0,n.ce)();return e?"v1":t?"v2":null}},659789:(e,t,a)=>{a.d(t,{M:()=>i,n:()=>r});var n=a(141078);let r=(0,n.J1)`
  fragment ApiErrorFields on ApiError {
    code
    message
  }
`,i=(0,n.J1)`
  fragment RunParameters on RunParameters {
    jarParams
    notebookParams {
      key
      value
    }
    pythonParams
    sparkSubmitParams
    pythonNamedParams {
      key
      value
    }
    sqlParams {
      key
      value
    }
    dbtCommands
    pipelineParams {
      fullRefresh
    }
  }
`},662237:(e,t,a)=>{a.d(t,{c:()=>i,r:()=>o});var n=a(141078),r=a(707076);let i=(0,n.J1)`
  query listFavoriteAssets($numFavorites: Int!, $assetTypes: [UseractivityAssetType!])
  @component(name: "Lakeview.DatabricksOne")
  @latencyBurnRateAlert(sloTarget: P99, threshold: 2000, minFailures: MIN100, alertSeverity: SEV2) {
    useractivityListFavoriteAssets(
      input: { pageSize: $numFavorites, orderBy: "favorite_time desc", filter: { types: $assetTypes } }
    ) {
      apiError {
        code
      }
      assets {
        asset {
          id
          name
          type
          treeNode {
            fullPath
          }
          unityCatalogSecurable {
            securableKind
          }
        }
        favoriteTime
      }
      recommendationTraceId
    }
  }
`;function o(e,t,a=!1){let s=(0,r.MH)(),{loading:l,data:u,error:c,refetch:d}=(0,n.IT)(i,{notifyOnNetworkStatusChange:!0,skip:a||!s,variables:{numFavorites:e,assetTypes:t}});return{loading:l,favorites:u?.useractivityListFavoriteAssets?.assets?.map(e=>{if(!e?.favoriteTime||!e?.asset?.id||!e?.asset?.name||!e?.asset?.type)return null;return{...e.asset,favoriteTime:e.favoriteTime,id:e.asset.id,name:e.asset.name,type:e.asset.type}}).filter(e=>!!e),error:u?.useractivityListFavoriteAssets?.apiError||c?.networkError,refetch:d,recommendationTraceId:u?.useractivityListFavoriteAssets?.recommendationTraceId??""}}},669536:(e,t,a)=>{a.d(t,{l:()=>r});var n=a(984741);function r(e){if(e.file)return{...e,file:{path:(0,n.e0)(e.file.path)}};if(e.notebook)return{...e,notebook:{path:(0,n.e0)(e.notebook.path)}};if(e.glob)return{...e,glob:{include:(0,n.e0)(e.glob.include)}};return e}},670874:(e,t,a)=>{a.d(t,{CJ:()=>p,F6:()=>h,Fl:()=>g,RG:()=>d,XD:()=>m,dy:()=>f,lP:()=>c});var n,r,i,o,s,l,u,c=((n={}).Empty="empty",n.Generating="generating",n.Deciding="deciding",n),d=((r={}).ChangeSuggested="Change-Suggested",r.PromptSubmitted="Prompt-Submitted",r.PromptResult="Prompt-Result",r),m=((i={}).AutoRename="autoRename",i.Generate="generate",i.Edit="edit",i.Fix="fix",i.AddComments="addComments",i.Explain="explain",i.Prettify="prettify",i.Optimize="optimize",i),p=((o={}).NoCodeResponse="NoCodeResponse",o.NaturalLanguageResponse="NaturalLanguageResponse",o),f=((s={}).Empty="empty",s.Input="input",s.Modifying="modifying",s.Generating="generating",s.Deciding="deciding",s.Error="error",s.NaturalLanguageResponse="NaturalLanguageResponse",s),g=((l={}).Inline="inline",l.Header="header",l),h=((u={}).PlaceholderLink="placeholderLink",u.LineHintLink="lineHintLink",u.SelectionWidget="selectionWidget",u.KeyboardShortcut="keyboardShortcut",u.KeyboardShortcutInline="keyboardShortcutInline",u.HeaderButton="headerButton",u.ContextMenu="contextMenu",u.EditorCommand="editorCommand",u.CellDivider="cellDivider",u)},675823:(e,t,a)=>{a.d(t,{z:()=>i});var n=a(141078),r=a(655841);let i=e=>(0,n.n_)(r.GX,e)},683003:(e,t,a)=>{a.d(t,{B:()=>s});var n=a(610435),r=a(545251),i=a(497895),o=a(174541);let s=({children:e,...t})=>{let{theme:a}=(0,i.wn)(),{isInsideDialogCombobox:s}=(0,r.w)();if(!s)throw Error("`DialogComboboxFooter` must be used within `DialogCombobox`");return(0,n.Y)("div",{...t,css:(0,o.UA)(a),children:e})}},684315:(e,t,a)=>{a.d(t,{R:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.lakeview.enableGridImprovements",!1)}},684581:(e,t,a)=>{},685271:(e,t,a)=>{a.d(t,{I:()=>r});var n=a(441535);function r(){return(0,n.W)("dashboard_genie_default_enabled",!1)}},685398:(e,t,a)=>{a.d(t,{B6:()=>g,TC:()=>b,y$:()=>E});var n=a(610435),r=a(692738),i=a(382908),o=a(497895),s=a(12414),l=a(342411),u=a(205048);let c=a.p+"static/media/spinner.7aa770519b7dee9d24730319c24a3383.svg";var d=a(144202);let{Text:m}=i.o,p=(0,n.Y)(l.sA,{id:"FlJ/XN",defaultMessage:"Loading..."});function f(e){let[t,a]=(0,r.useState)((e??0)>0);return(0,r.useEffect)(()=>{let t=setTimeout(()=>{a(!1)},e);return()=>{clearTimeout(t)}},[e]),t}let g=({timeToShow:e,text:t=p,traceLoading:a=!1,traceDescription:r,styleOverrides:i,skipMargin:l})=>{let{theme:c}=(0,o.wn)();if(f(e))return(0,n.Y)(u.R,{loading:a,description:r});return(0,n.FD)("div",{css:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:l?0:c.spacing.lg,gap:c.spacing.md,...i},children:[(0,n.Y)(u.R,{loading:a,description:r}),(0,n.Y)(s.y,{size:"large"}),(0,n.Y)(m,{size:"xxl",children:t})]})};function h({alt:e,title:t,className:a,style:r}){return(0,n.Y)("img",{alt:e,className:a||"load-spinner",title:t,src:d.h.getResourceUrl(c),style:r})}function E({className:e,title:t,timeToShow:a,traceLoading:r=!1,traceDescription:i,style:o}){let s=f(a),c=(0,l.tz)();if(s)return(0,n.Y)(u.R,{loading:r,description:i});return(0,n.FD)(n.FK,{children:[(0,n.Y)(u.R,{loading:r,description:i}),(0,n.Y)(h,{alt:c.formatMessage({id:"oGztBr",defaultMessage:"Loading..."}),className:e||"load-spinner",title:t,style:o})]})}let b=({traceLoading:e=!1,traceDescription:t,testId:a})=>{let{getPrefixedClassName:r}=(0,o.wn)();return(0,n.FD)("div",{css:e=>({height:"200px",display:"flex",alignItems:"center",justifyContent:"center",[`.${r("spin-lg")} .${r("spin-dot")}`]:{fontSize:`${e.typography.fontSizeXxl}px !important`}}),...a?{"data-testid":a}:{},children:[(0,n.Y)(u.R,{loading:e,description:t}),(0,n.Y)(s.y,{size:"large"})]})}},686871:(e,t,a)=>{a.a(e,async(e,n)=>{try{a.r(t),a.d(t,{HeadlessAgent:()=>T});var r=a(335747),i=a(511022),o=a(607030),s=a(77240),l=a(432993),u=a(75054),c=a(950510),d=a(870147),m=a(553146),p=a(534607),f=a(595835),g=a(833509),h=e([m,u,g]);function E(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function b(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){E(i,n,r,o,s,"next",e)}function s(e){E(i,n,r,o,s,"throw",e)}o(void 0)})}}[m,u,g]=h.then?(await h)():h;class T{apolloClient;getTableColumns;operatorCatalogs;constructor(e){this.apolloClient=e?.apolloClient,this.getTableColumns=e?.getTableColumns,this.operatorCatalogs=e?.operatorCatalogs??{sql:[],python:[]}}static waitForPrefetchesToComplete(e,t=3e4){return b(function*(){yield(0,r.z7)(()=>{let t=e.getCacheValues().filter(e=>e.loading);return 0===t.length},{timeout:t})})()}static setup(e,t,a){return b(function*(){let n,i,o="python"===e.language,c=new m.S;if(o&&(c.languageType="python"),c.syncExternalProps({id:void 0,notebookModel:void 0,command:new p.q({type:"command",command:o?"":e.dagSql.toString()}),notebookCommandContext:void 0,codeContent:o?"":e.dagSql.toString(),onCodeContentChange:()=>{},catalog:e.catalog,schema:e.schema,readOnly:!1,inputWidgets:void 0,height:700,isActive:!0,isJobRun:!1}),(0,r.h5)(()=>{c.setDataSource({type:s.ol.REDASH_SQL_WAREHOUSE,warehouseId:e.warehouseId,redashDataSourceId:`headless-agent-${e.warehouseId}`,displayName:"LakeBuilder Headless Agent",status:{isReady:!0},attributionHeaders:{"X-Databricks-Dbsql-Trigger-Source":"lakebuilder-headless-agent","X-Databricks-Dbsql-Trigger-Execution-Type":"automation","X-Databricks-Dbsql-Trigger-Execution-Detail":"headless-agent"}})}),o?(0,r.h5)(()=>{c.languageParser.initializeFromCommands(e.commands??[])}):(0,r.h5)(()=>{c.languageParser.setSource(e.dagSql.toString())}),e.selectedNodes.length>0&&c.languageParser.operatorNodes.length>0){let t=e.selectedNodes[0];if(!(i=c.languageParser.operatorNodes.find(e=>e.name===t)))throw Error(`Selected node '${t}' not found in parsed DAG SQL. Available nodes: ${c.languageParser.operatorNodes.map(e=>e.name).join(", ")}`);(0,r.h5)(()=>{c.uiState.setFocusedNodeName(t??null)}),n={found:!0,name:i.name}}else n={found:!1};yield T.waitForPrefetchesToComplete(c);let d=l.n.generateUuidV4(),f=l.n.generateUuidV4(),g=(e.images??[]).map((e,t)=>({type:"image",label:e.fileName??`image-${t}`,object:{fileName:e.fileName??`image-${t}`,base64String:e.base64String,mimeType:e.mimeType??"image/png"}})),h=new u.m({lakeBuilderState:c,initialMessageHistory:e.initialMessageHistory,promptId:d,threadId:f,userInput:e.userPrompt,questionCallback:e=>{throw Error(`unsupposed questionCallback: ${e}
`)},redirectCallback:e=>{throw Error(`unsupported redirectCallback: ${e}
`)},node:e.selectedNodes.length>0?i:void 0,abortController:new AbortController,position:{x:0,y:0},generateNodePositionFromEdges:()=>({x:0,y:0}),appendMessage:()=>{},onImagesConsumed:()=>{},getTableColumns:a,apolloClient:t,model:e.model,userReferencedObjects:g});return{lbState:c,agentSession:h,selectedNodeInfo:n}})()}runPrompt(e){return b(function*(){try{let t,{lbState:a,agentSession:n,selectedNodeInfo:r}=yield T.setup(e,this.apolloClient,this.getTableColumns);try{yield n.runAgentLoop()}finally{yield a.warehouseSession?.terminateSession()}let i="python"===a.languageType?a.languageParser?.sourceCodeForHistory:a.languageParser?.getSource(),o=(0,c.kn)(a,n,"headless-agent",void 0,"headless-agent","headless-agent",e.humanEval);return e.humanEval&&o&&(t=yield this.runLLMJudge(e.humanEval,o,i?.toString()??"")),{executionSucceeded:!0,selectedNode:r,result:i?.toString(),testCase:o,evalResult:t}}catch(e){return{executionSucceeded:!1,error:e instanceof Error?e.message:String(e)}}}).call(this)}runParseBench(e){try{let t=(0,g.s)(e.queries),a=(0,g.l)(t,e.queries.length);return{success:!0,output:a}}catch(e){return{success:!1,error:e instanceof Error?e.message:String(e)}}}runOperatorSearch(e){return b(function*(){let t=this.operatorCatalogs[e.language];if(0===t.length)return{success:!1,error:`Operator catalog is empty for language '${e.language}'`};try{let a=yield(0,d.V)(e.query,t);return{success:!0,operators:a?.operators??[]}}catch(e){return{success:!1,error:e instanceof Error?e.message:String(e)}}}).call(this)}runLLMJudge(e,t,a){return b(function*(){let n=t.conversation_history[0]?.state,r=n?.dagSql||n?.commands?.join("\n");if(!n||!r||!n.userPrompt)throw Error("First request in replay is missing or malformed");let s=t.metadata?.language==="python",u=s?"Python notebook cells":"SQL query",c=`You are evaluating a trace of interactions between a user and an agent.
    Evaluate a SINGLE candidate answer for binary quality: "correct" or "needs_improvement". Your response should use the 'rating' tool.

    An example rating response is:
    {
      "rating": "correct",
      "criteria": "The ${u} result MUST HAVE the expected output.",
      "justification": "The ${u} is correct and produces the expected results."
    }`,d=t.conversation_history?.at(-1),m=[...d?.request?.openAIRequestBody.messages.filter(e=>"system"!==e.role)||[],d?.response],p=`A JSON representation follows and includes the initial ${u}, the user prompt input, the message history, final ${u} output, and rating guidelines for evaluating the correctness of the interaction and final output.`,g={language:s?"python":"sql",initialCode:r,userPromptInput:n.userPrompt,messageHistory:m,finalCodeOutput:a,ratingGuidelines:e.guidelines},h=[{type:"function",function:{name:"rating",description:"Rate the candidate answer",parameters:{type:"object",properties:{rating:{type:"string",description:"Either 'correct' or 'needs_improvement'",enum:["correct","needs_improvement"]},criteria:{type:"string",description:"A short description of the criteria for the rating"},justification:{type:"string",description:"A short justification for the rating"}},required:["rating","criteria","justification"]}}}],E=yield(0,i.kA)({model:"claude-4-5-sonnet",agentName:"lakeBuilderLLMJudge",messageHistory:[],instructions:()=>c,newUserMessage:{role:o.oW.user,content:p+JSON.stringify(g,null,2)},metadata:{clientId:f.O.LakeBuilderDagCompletion,traceId:l.n.generateUuidV4(),agentName:"LLMJudge"},tools:h,toolChoice:"required",stream:!1});if(1===E.length&&E[0].message.isError)throw Error("Error during Assistant request");return JSON.parse(E[0].message.tool_calls?.[0]?.function?.arguments)})()}}n()}catch(e){n(e)}})},691069:(e,t,a)=>{a.d(t,{C:()=>u});var n=a(610435);a(692738);var r=a(497895),i=a(465082),o=a(26971),s=a(777517),l=a(342411);let u=({kind:e,disabled:t,style:a})=>{let{theme:u}=(0,r.wn)(),c=(0,l.tz)(),d={alignItems:"center",background:t?void 0:u.colors.backgroundSecondary,borderRadius:30,color:t?u.colors.actionDisabledText:u.colors.textSecondary,display:"flex",fontSize:20,height:30,justifyContent:"center",width:30};switch(e){case"user":return(0,n.Y)(i.A,{title:c.formatMessage({id:"9vv8Gs",defaultMessage:"User"}),css:a||d});case"group":return(0,n.Y)(o.A,{title:c.formatMessage({id:"Qzw3C/",defaultMessage:"Group"}),css:a||d});case"serviceprincipal":return(0,n.Y)(s.A,{title:c.formatMessage({id:"QrVB43",defaultMessage:"Service Principal"}),css:a||d});default:return null}}},691515:(e,t,a)=>{a.d(t,{d:()=>r});var n=a(141078);let r=(0,n.J1)`
  fragment ForEachTaskStats on JobsJobTask {
    forEachTask {
      stats {
        taskRunStats {
          scheduledIterations
          activeIterations
          totalIterations
          failedIterations
          completedIterations
          succeededIterations
        }
        errorMessageStats {
          errorMessage
          count
          terminationCategory
        }
      }
    }
  }
`},691914:(e,t,a)=>{a.d(t,{E:()=>s});var n=a(610435);a(692738);var r=a(382908),i=a(342411),o=a(620839);function s({showLearnMoreLink:e}){return(0,n.Y)(i.sA,{id:"y1XUuU",defaultMessage:"Serverless compute is required to deploy bundles but it's not enabled for this workspace. {learnMoreLink}",values:{learnMoreLink:e?(0,n.Y)(r.o.Link,{componentId:"dabs-authoring.serverless-not-enabled-alert.learn-more",openInNewTab:!0,href:o.A.DABS_IN_WORKSPACE_INSTALLATION_REQUIREMENTS_URL,children:(0,n.Y)(i.sA,{id:"wWO8a1",defaultMessage:"Learn more"})}):null}})}},692547:(e,t,a)=>{a.d(t,{cB:()=>m,W:()=>p,Jp:()=>c,qK:()=>d});var n=a(995348),r=a(949957),i=a(141078);let o=(0,i.J1)`
  mutation RestartClusterMutation($input: ClusterRestartInput!) @component(name: "Notebook.Notebooks") {
    clusterRestart(input: $input) {
      errors {
        code
        message
        helpUrl
        traceId
      }
      entity {
        id
        state
      }
    }
  }
`,s=(0,i.J1)`
  mutation StartClusterMutation($input: ClusterStartInput!) @component(name: "Notebook.Notebooks") {
    clusterStart(input: $input) {
      errors {
        code
        message
        helpUrl
        traceId
      }
      entity {
        id
        state
      }
    }
  }
`;function l(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function u(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){l(i,n,r,o,s,"next",e)}function s(e){l(i,n,r,o,s,"throw",e)}o(void 0)})}}function c(e,t){return u(function*(){var a=yield t.mutate({mutation:s,variables:{input:{id:e}}});if(a.data?.clusterStart?.errors?.length){let e=a.data.clusterStart.errors.map(e=>e.message||"").join("\n");if(e?.includes("is in unexpected state Pending"))return a;throw Error(e)}return a})()}function d(e,t){return t.mutate({mutation:r.BS,variables:{input:{id:e}}})}function m(e,t){return u(function*(){let a=yield t.mutate({mutation:o,variables:{input:{id:e}}});if(a?.errors)throw Error(a.errors.at(0)?.message);if(a?.data?.clusterRestart?.errors)throw Error(a.data.clusterRestart.errors.at(0)?.message||"clusterRestart unknown error");return a})()}function p(e,t){return u(function*(){let a=yield t.mutate({mutation:n.y,variables:{input:{clusterId:e}}});if(a.errors)throw Error(a.errors.at(0)?.message);if(a.data?.clusterDeleteCluster?.apiError)throw Error(a.data.clusterDeleteCluster.apiError.message||"clusterTerminate unknown error");return a})()}},700367:(e,t,a)=>{a.d(t,{_:()=>i,y:()=>o});var n=a(507624),r=a(184991);function i(e){return(0,n.rS)(e)||(0,r.ug)(e)}function o(e){if((0,n.rS)(e))return(0,n.el)(e);if((0,r.ug)(e))return{fn:e}}},701801:(e,t,a)=>{if(a.d(t,{W:()=>r}),13057==a.j)var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeflow.enableAiDiagnoseTool",!1)||(0,n.W)("ai_diagnose",!1)}},702263:(e,t,a)=>{if(a.d(t,{I:()=>r}),13057==a.j)var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeflow.agenticJobsEnabled",!1)}},703546:(e,t,a)=>{a.d(t,{u:()=>r});var n=a(144781);let r=({selection:e,statements:t,cursorLocation:a})=>{let r,i,o,s,l,u=[],c=[],d=[],m=(0,n.k6)(e),p=(0,n.Te)(e),f=!1,g=0,h=!1;return 1===t.length?r=t[0]:(t.forEach(t=>{t.catalog&&(i=t.catalog,o=void 0),t.database&&(o=t.database),f||(s=i,l=o),t.activeCatalog=i,t.activeDatabase=o,!(0,n.RV)(e)&&(!h&&(0,n.Tj)(t.location,m,!0,!1)&&(h=!0),h&&(u.push(t),((0,n.Tj)(t.location,p,!1,!0)||t.location.last_line===p.lineNumber&&t.location.last_column===p.column-1)&&(h=!1))),f?f&&d.length<10&&d.push(t):(g++,(0,n.Tj)(t.location,a,!0,(0,n.RV)(e))?(f=!0,r=t):(10===c.length&&c.shift(),c.push(t)))}),f||(c.pop(),r=t[t.length-1])),!u.length&&r&&u.push(r),{activeStatement:r,activeCatalog:s,activeDatabase:l,statementIndex:g,selectedStatements:u,precedingStatements:c,followingStatements:d}}},705155:(e,t,a)=>{a.d(t,{T:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.logMissingInternalName",!1)}},711819:(e,t,a)=>{a.d(t,{IE:()=>m});var n=a(610435),r=a(593907),i=a.n(r),o=a(225842),s=a(802582),l=a(497895),u=a(342411),c=a(797246),d=a(869061);function m({objectType:e,browseOnly:t=!1,accessible:a=!0,withTooltip:r=!0,tooltipProps:p={},styleProps:f,avatarStyleSize:g=null,isPostgres:h=!1,securableKind:E}){let b=(0,u.tz)(),{theme:T}=(0,l.wn)(),y=null;if(E&&e){let t=c.Jk[e],a=t?.[E];a&&(y=b.formatMessage(a))}let I=h&&e in c.nX?c.nX[e]||null:c.Ix[e]||null,A=y??(I?b.formatMessage(I):null);if(t&&(A=b.formatMessage(c.OF)),a||(A=b.formatMessage({id:"lORa3c",defaultMessage:"This {entity} is not accessible from the current workspace."},{entity:i()(b.formatMessage(c.DN[e]))})),!A)return null;let v=d.e0[e],S=v&&void 0!==E&&E in v?v[E]:d.BV[e],_=S&&(0,n.Y)(S,{alt:A,"aria-label":A,css:t||!a?{color:T.colors.actionDisabledText}:void 0,style:f});if(!_)return null;return function({icon:e,title:t,withTooltip:a,tooltipProps:r,avatarStyleSize:i}){if(a){if(i)return(0,n.Y)(o.eu,{type:"entity",icon:(0,n.Y)(s.p,{title:t,...r,children:e}),label:t,size:i});return(0,n.Y)(s.p,{title:t,...r,children:e})}if(i)return(0,n.Y)(o.eu,{type:"entity",icon:e,label:t,size:i});return e}({icon:a?_:(0,n.Y)("span",{"data-testid":"strike-through-icon",css:{position:"relative","&:before":{position:"absolute",content:'""',left:0,top:"50%",right:0,borderTop:"2px solid",borderColor:T.colors.actionDisabledText,transform:"rotate(38deg)"}},children:_}),title:A,withTooltip:r,tooltipProps:p,avatarStyleSize:g})}},713907:(e,t,a)=>{a.d(t,{t:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enableCustomClaimExternalValueOverridden",!1)}},721142:(e,t,a)=>{a.d(t,{q:()=>l});var n=a(441535),r=a(886100),i=a(22191),o=a(747129),s=a(580769);class l extends s.v{constructor(e,t){super({experimentName:"autoRenameModelPriority",defaultMetadata:{experiment_type:"user",treatments:[{experiment_percentage:100,model_priority:["gpt-41-mini-2025-04-14","claude-4-5-sonnet"]}]},getOverrideMetadata:()=>{let e=(0,n.W)("databricks.fe.assistantExperiment.autoRenameModelPriority","");if(!e)return;try{return JSON.parse(e)}catch(e){r.iT.sev2BurnRate(i.Es.Assistant,"Failed to parse Auto Rename Model Priority experiment metadata",o.i1.P99,o.Ip.Min10,!1,e);return}}},e,t)}}},722708:(e,t,a)=>{a.d(t,{$:()=>r});var n=a(441535);let r=()=>(0,n.W)("databricks.fe.lakeview.isMobxDraftDashboardEnabled",!1)},732321:(e,t,a)=>{a.d(t,{CZ:()=>b,Z3:()=>y,it:()=>T,jI:()=>p});var n=a(137797),r=a(692738),i=a(441535),o=a(5697),s=a(984741),l=a(187826),u=a(916852),c=a(279942),d=a(594669),m=a(993618);function p(e){if(e===o.Z6.Notebook)return"notebook";if(e&&u.Rl.includes(e))return"folder";return"file"}let f=[".txt",".csv",".md",".json"],g=["__pycache__",".egg-info"];function h(e){return new Set((0,d.g)(e??[]).map(m.v).filter(e=>!!e).map(s.e0))}function E({path:e,type:t,...a}){if(!e)return{isIncludedInPipeline:!1,isDirectlyIncludedInPipeline:!1,isPipelineRoot:!1};e=(0,s.e0)(e);let r="pipeline"in a?(0,s.e0)(a.pipeline?.spec?.rootPath):a.pipelineRootPath,o="pipeline"in a?h(a.pipeline?.spec?.libraries??[]):a.pipelinePaths,l=e===r;if(o.has(e)||o.has(`${e}/`))return{isIncludedInPipeline:!0,isDirectlyIncludedInPipeline:!0,isPipelineRoot:l,isIgnoredByRunner:!1};let{ignoredFiles:u,ignoredFolders:d}=(()=>{let e=(0,i.W)("dlt-pipelines.ignoredSuffixForSourceIncludes","__pycache__/,.egg-info/,.txt,.md,.csv,.json");if("string"!=typeof e)return{ignoredFiles:f,ignoredFolders:g};try{let t=e?.split(",")?.filter(e=>e.trim())??[],a=t.filter(e=>e.endsWith("/")).map(e=>e.slice(0,-1));return{ignoredFiles:t.filter(e=>!e.endsWith("/")),ignoredFolders:a}}catch{return{ignoredFiles:f,ignoredFolders:g}}})();for(let a of o)if(a.endsWith("/")&&e.startsWith(a)){let r=(0,n.extname)(e);if("file"===t&&u.includes(r))return{isIncludedInPipeline:!1,isDirectlyIncludedInPipeline:!1,isPipelineRoot:l,isIgnoredByRunner:!0};let i=e.substring(a.length);if(d.some(e=>i===e&&"folder"===t||i.startsWith(`${e}/`)||i.includes(`/${e}/`)))return{isIncludedInPipeline:!1,isDirectlyIncludedInPipeline:!1,isPipelineRoot:l,isIgnoredByRunner:!0};if("notebook"===t||"folder"===t||"file"===t&&r&&(0,c.k)(r))return{isIncludedInPipeline:!0,isDirectlyIncludedInPipeline:!1,isPipelineRoot:l,isIgnoredByRunner:!1};return{isIncludedInPipeline:!1,isDirectlyIncludedInPipeline:!1,isPipelineRoot:l,isIgnoredByRunner:!1,isInvalidIncludedFile:!0}}return{isIncludedInPipeline:!1,isDirectlyIncludedInPipeline:!1,isPipelineRoot:l,isIgnoredByRunner:!1}}function b(e){return E(e)}function T({pipeline:e}){let t=e?.spec?.libraries??null,a=(0,r.useMemo)(()=>h(t??[]),[t]),n=(0,r.useMemo)(()=>(0,s.e0)(e?.spec?.rootPath??null),[e?.spec?.rootPath]);return{pipelineContainsSourcePath:(0,r.useCallback)(({path:e,type:t})=>E({pipelinePaths:a,pipelineRootPath:n,path:e,type:t}),[a,n]),pipelinePaths:a}}function y(){let e=(0,r.useContext)(l.ij);return T({pipeline:e?.data?.pipeline??null})}},733940:(e,t,a)=>{a.d(t,{Bw:()=>c,Ft:()=>h,GN:()=>I,Ic:()=>d,Ih:()=>p,PH:()=>f,RE:()=>y,UU:()=>E,nP:()=>T,sc:()=>g,yr:()=>l,z3:()=>m});var n,r,i=a(173463),o=a.n(i),s=a(342411),l=((n={}).MINUTE="Minute",n.HOUR="Hour",n.DAY="Day",n.WORKDAY="Workday",n.WEEK="Week",n.MONTH="Month",n);let u={Minute:1,Hour:2,Day:3,Workday:4,Week:5,Month:6};var c=((r={}).SUNDAY="Sunday",r.MONDAY="Monday",r.TUESDAY="Tuesday",r.WEDNESDAY="Wednesday",r.THURSDAY="Thursday",r.FRIDAY="Friday",r.SATURDAY="Saturday",r);let d={Minute:(0,s.zR)({id:"/quv1d",defaultMessage:"{count, plural, =1 {Minute} other {Minutes}}"}),Hour:(0,s.zR)({id:"cIFu+R",defaultMessage:"{count, plural, =1 {Hour} other {Hours}}"}),Day:(0,s.zR)({id:"mlfDgB",defaultMessage:"{count, plural, =1 {Day} other {Days}}"}),Workday:(0,s.zR)({id:"aQTmip",defaultMessage:"{count, plural, =1 {Workday} other {Workdays}}"}),Week:(0,s.zR)({id:"ibGc8O",defaultMessage:"{count, plural, =1 {Week} other {Weeks}}"}),Month:(0,s.zR)({id:"JwO6Eu",defaultMessage:"{count, plural, =1 {Month} other {Months}}"})},m={Sunday:(0,s.zR)({id:"4Dujo5",defaultMessage:"Sunday"}),Monday:(0,s.zR)({id:"U4XfOA",defaultMessage:"Monday"}),Tuesday:(0,s.zR)({id:"hZ5wHV",defaultMessage:"Tuesday"}),Wednesday:(0,s.zR)({id:"8FZ8Ch",defaultMessage:"Wednesday"}),Thursday:(0,s.zR)({id:"5opZ3I",defaultMessage:"Thursday"}),Friday:(0,s.zR)({id:"Vi8MmJ",defaultMessage:"Friday"}),Saturday:(0,s.zR)({id:"oElDLm",defaultMessage:"Saturday"})},p=(e,t=1,a,n)=>Object.values(l).filter(e=>n||"Workday"!==e).filter(e=>!a||"Minute"!==e).map(a=>({label:e.formatMessage(d[a],{count:t}),value:a,data:a})),f=e=>Object.values(c).map(t=>({label:e.formatMessage(m[t]),value:`${t}`,data:t})),g=(e,t=0)=>o()(t,e).map(e=>({label:e<10?`0${e}`:`${e}`,value:`${e}`,data:e})),h=(e,t)=>("Minute"===t?[1,2,3,4,5,6,10,12,15,20,30]:[1,2,3,4,6,8,12]).map(t=>({label:e.formatMessage(I.every,{frequency:t}),value:`${t}`,data:t})),E=(e,t)=>{if(e?.paused&&!t?.paused)return 1;if(!e?.paused&&t?.paused)return -1;return b(e?.quartz_cron_schedule,t?.quartz_cron_schedule)},b=(e,t)=>{let a=T(e),n=T(t);if(!a&&!n)return 0;if(!a)return -1;if(!n)return 1;if(a.unit!==n.unit)return u[a.unit]-u[n.unit];return a.interval-n.interval},T=e=>{if(!e||0===(e.match(RegExp("^(([0-5]?\\d|\\*) )(([0-5]?\\d|\\*)((-[0-5]?\\d)?/[0-5]?\\d)? )(((2[0-3])|([0-1]?\\d)|\\*)((-(2[0-3])|([0-1]?\\d))?/[0-2]?\\d)? )((((3[0-1])|([0-2]?\\d))|(\\*|\\?)) )((\\*|\\?) )(([1-7]|MON|TUE|WED|THU|FRI|SAT|SUN|MON-FRI)|(\\*|\\?))( [?,\\*])?$","gi"))||[]).length)return;let t=e.split(" "),a={};try{let e=t.findIndex(e=>e.includes("/")),n=t.findIndex(e=>"*"===e),r=t.findIndex(e=>"?"===e);if(-1!==e){if(n!==e+1&&r!==e+1)return;switch(a.interval=parseInt(t[e].split("/")[1],10),a.unit=Object.values(l)[e-1],a.unit){case"Hour":a.hours=parseInt(t[2],10)||0;case"Minute":a.minutes=parseInt(t[1],10)||0}}else if(a.interval=1,n<4||4===r&&"*"===t[5]||3===r&&"*"===t[5])-1!==r?a.unit=Object.values(l)[Math.min(n-1,r-1)]:a.unit=Object.values(l)[n-1],isNaN(parseInt(t[2],10))||(a.hours=parseInt(t[2],10)),isNaN(parseInt(t[1],10))||(a.minutes=parseInt(t[1],10));else if(/^MON-FRI$/i.test(t[5]))a.unit="Workday",a.interval=1,a.hours=parseInt(t[2],10),a.minutes=parseInt(t[1],10);else if(a.unit=3===t.findIndex(e=>"?"===e)?"Week":"Month","Week"===a.unit){let e=parseInt(t[5],10)-1,n=Object.entries(c).find(([e])=>t[5].toUpperCase()===e.substr(0,3).toUpperCase());if(n){let[,e]=n;a.weekday=e}else{if(isNaN(e))return;a.weekday=Object.values(c)[e]}a.hours=parseInt(t[2],10),a.minutes=parseInt(t[1],10)}else a.day=parseInt(t[3],10),a.hours=parseInt(t[2],10),a.minutes=parseInt(t[1],10);if(a.seconds=parseInt(t[0],10),Object.values(a).includes(NaN))return}catch{return}return a},y=e=>{let{unit:t,interval:a,seconds:n,day:r,weekday:i}=e,{hours:o,minutes:s}=e,l=(e,t)=>e>1?`${t}/${e}`:"*";switch(t){case"Minute":return`${n} ${l(a,s)} * * * ?`;case"Hour":return`${n} ${s} ${l(a,o)} * * ?`;case"Day":return`${n} ${s} ${o} * * ?`;case"Workday":return`${n} ${s} ${o} ? * MON-FRI`;case"Week":if(i)return`${n} ${s} ${o} ? * ${i.substr(0,3)}`;case"Month":return`${n} ${s} ${o} ${r} * ?`}},I={every:(0,s.zR)({id:"n8+peH",defaultMessage:"Every {frequency}"})}},736813:(e,t,a)=>{a.d(t,{D:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.discovery.rowDetailsPopoverLayoutV2.killswitch",!1)}},736996:(e,t,a)=>{if(a.d(t,{LZ:()=>i,V8:()=>s,X4:()=>f,ZQ:()=>l,Zu:()=>o,a2:()=>c,eh:()=>u,lf:()=>d,xs:()=>m,yt:()=>p}),13057==a.j)var n=a(497895);var r=a(993533);let i=8,o=12,s=24,l=60,u="system.Featured",c="TABLE_METRIC_VIEW";function d(e){let{theme:t}=(0,n.wn)();return e?0:2*t.spacing.lg}let m=[r.Clx.DASHBOARD_V3,r.Clx.DATA_ROOM,r.Clx.NOTEBOOK,r.Clx.QUERY,r.Clx.UC_TABLE,r.Clx.UC_MODEL,r.Clx.ENDPOINT_CENTRIC_ENDPOINT],p=[r.iId.ML_MODEL,r.iId.ML_ENDPOINT],f=[r.iId.ML_MODEL]},740054:(e,t,a)=>{a.d(t,{TW:()=>w,lK:()=>U,lX:()=>P,sF:()=>L,wb:()=>D,yL:()=>x,zR:()=>F});var n=a(610435),r=a(615693),i=a(607074),o=a(505544),s=a(397136),l=a(529068),u=a(452233),c=a(319241),d=a(1459),m=a(485065),p=a(563521),f=a(323935),g=a(335083),h=a(873393),E=a(1647),b=a(24027),T=a(126001),y=a(946590),I=a(187441),A=a(479448),v=a(609128),S=a(957729),_=a(884598),C=a(722651),R=a(26971),O=a(792575),N=a(776041);let k={table:{icon:r.A,assetType:N.Sy.TABLE,supportsReferencePreview:!0,hrefFragment:"#table"},column:{icon:i.A},volume:{icon:o.A},notebook:{icon:s.A,assetType:N.Sy.NOTEBOOK,supportsReferencePreview:!0,isWorkspaceAsset:!0,hrefFragment:"#notebook-",hrefIdPattern:/#notebook-(\d+)/},cell:{icon:l.A},query:{icon:u.A,assetType:N.Sy.QUERY,supportsReferencePreview:!0,isWorkspaceAsset:!0,hrefFragment:"#query-",hrefIdPattern:/#query-([\w-]+)/},queryProfile:{icon:u.A},topquery:{icon:u.A},file:{icon:c.A,assetType:N.Sy.FILE,supportsReferencePreview:!0,isWorkspaceAsset:!0,hrefFragment:"#file-",hrefIdPattern:/#file-(\w+)/},folder:{icon:d.A,assetType:N.Sy.DIRECTORY,supportsReferencePreview:!0,isWorkspaceAsset:!0,hrefFragment:"#folder-",hrefIdPattern:/#folder-(\d+)/},directory:{icon:d.A,assetType:N.Sy.DIRECTORY},pipeline:{icon:m.A,assetType:N.Sy.PIPELINE,isWorkspaceAsset:!0,hrefFragment:"#pipeline-",hrefIdPattern:/#pipeline-([\w-]+)/},dashboard:{icon:p.A,assetType:N.Sy.DASHBOARD,supportsReferencePreview:!0,isWorkspaceAsset:!0,hrefFragment:"#dashboard-",hrefIdPattern:/#dashboard-([\w-]+)/},job:{icon:f.A,assetType:N.Sy.JOB,supportsReferencePreview:!0,isWorkspaceAsset:!0,hrefFragment:"#job-",hrefIdPattern:/#job-(\d+)/},agentBrick:{icon:g.A},servingEndpoint:{icon:h.A},skill:{icon:E.A,assetType:N.Sy.SKILL,supportsReferencePreview:!0,hrefFragment:"#user-skill-",hrefIdPattern:/#user-skill-([\w-]+)/},app:{icon:b.A,assetType:N.Sy.APP,hrefFragment:"#app-",hrefIdPattern:/#app-([\w-]+)/},designerFile:{icon:T.A,assetType:N.Sy.DESIGNER_FILE,hrefFragment:"#designerFile-",hrefIdPattern:/#designerFile-([\w-]+)/},dataroom:{icon:y.A},genie:{icon:y.A,assetType:N.Sy.GENIE,hrefFragment:"#genie-",hrefIdPattern:/#genie-([\w-]+)/},scheduledGenieCode:{icon:I.A,assetType:N.Sy.SCHEDULED_GENIE_CODE,hrefFragment:"panel=automations&automationId=",hrefIdPattern:/automationId=([\w-]+)/},mlflowEvaluationRun:{icon:A.A},mlflowDataset:{icon:o.A},mlflowJudge:{icon:v.A},mlflowLabelingSchema:{icon:S.A},doc:{icon:_.A},cdpAttribute:{icon:C.A},cdpAudience:{icon:R.A},widget:{icon:O.A}},w=Object.entries(k).filter(([e,t])=>t.isWorkspaceAsset).map(([e])=>e),M=r.A;function P(e){return k[e??""]?.icon??M}function D(e,t,a=!1){let r=P(e);return a?(0,n.Y)(r,{css:t}):(0,n.Y)(r,{style:t})}function L(e){return k[e]?.assetType}function x(e){return k[e]?.supportsReferencePreview===!0}function U(e){return`/editor/folders/workspace?mode=chat&panel=automations&automationId=${e}`}function F(e){for(let t of Object.values(k))if(t.hrefFragment&&t.assetType&&e.includes(t.hrefFragment))if(!t.hrefIdPattern)return{assetType:t.assetType,assetId:null};else{let a=e.match(t.hrefIdPattern);if(a?.[1])return{assetType:t.assetType,assetId:a[1]}}return null}},740931:(e,t,a)=>{a.d(t,{m:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enableCopyPasteDataset",!1)}},742472:(e,t,a)=>{a.d(t,{I:()=>l});var n=a(441535),r=a(886100),i=a(22191),o=a(747129),s=a(580769);class l extends s.v{constructor(e,t){super({experimentName:"cellMagicModelPriority",defaultMetadata:{experiment_type:"user",treatments:[{experiment_percentage:100,model_priority:["gpt-41-2025-04-14","gpt-4o-2024-11-20","claude-4-5-sonnet"]}]},getOverrideMetadata:()=>{let e=(0,n.W)("databricks.fe.assistantExperiment.cellMagicModelPriority","");if(!e)return;try{return JSON.parse(e)}catch(e){r.iT.sev2BurnRate(i.Es.Assistant,"Failed to parse Cell Magic Model Priority experiment metadata",o.i1.P99,o.Ip.Min10,!1,e);return}}},e,t)}}},742991:(e,t,a)=>{a.d(t,{M:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enableResultsTableEnabledForMetricView",!1)}},742996:(e,t,a)=>{a.d(t,{P:()=>s,f:()=>o});var n=a(160603),r=a(721698);function i(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}let o=e=>["files",e],s=(e,t)=>(0,n.useInfiniteQuery)(o(e),({pageParam:t})=>{var a;return(a=function*(){return(0,r.t)({...e,page_token:t})},function(){var e=this,t=arguments;return new Promise(function(n,r){var o=a.apply(e,t);function s(e){i(o,n,r,s,l,"next",e)}function l(e){i(o,n,r,s,l,"throw",e)}s(void 0)})})()},{getNextPageParam:e=>e.next_page_token,refetchOnMount:"always",...t})},743048:(e,t,a)=>{a.d(t,{GZ:()=>u,Ln:()=>i,hK:()=>r,jg:()=>s,lb:()=>o,sk:()=>l});var n=a(123229);function r(e){(0,n.$)().set("mostRecentBudgetPolicyId",e)}function i(){return(0,n.$)().get("mostRecentBudgetPolicyId")}function o(e){(0,n.$)().set("assistantBudgetPolicyId",e)}function s(){return(0,n.$)().get("assistantBudgetPolicyId")}function l(e){(0,n.$)().set("dabsAuthoringBudgetPolicyId",e)}function u(){return(0,n.$)().get("dabsAuthoringBudgetPolicyId")}},747206:(e,t,a)=>{a.d(t,{E3:()=>d,Hp:()=>n,IM:()=>c,QT:()=>T,Th:()=>m,U3:()=>h,V6:()=>u,db:()=>r,ff:()=>o,n5:()=>g,ps:()=>i,sI:()=>E,sZ:()=>b,xU:()=>p,xh:()=>l,yX:()=>f});let n=e=>{let t=e.replaceAll(".","/");return`/explore/data/${t}`},r=e=>`/explore/data/${encodeURIComponent(e||"")}`,i=(e,t)=>`/explore/data/${encodeURIComponent(t||"")}/${encodeURIComponent(e)}`,o=(e,t,a)=>`/explore/data/${encodeURIComponent(a||"")}/${encodeURIComponent(t||"")}/${encodeURIComponent(e)}`;var s,l=((s=l||{}).OVERVIEW="overview",s.COLUMNS="columns",s.SAMPLE="sample",s.DETAILS="details",s.PERMISSIONS="permissions",s.POLICIES="policies",s.HISTORY="history",s.LINEAGE="lineage",s.INSIGHTS="insights",s.QUALITY="quality",s.VOLUMES="volumes",s.MODELS="models",s.FUNCTIONS="functions",s.SCHEMAS="schemas",s.ASSETS="assets",s.WORKSPACES="workspaces",s.REFRESH="refresh",s.LIBRARY_ALLOWLIST="library_allowlist",s.USAGE="usage",s.SECURITY="security",s.TASKS="tasks",s.COLLABORATORS="collaborators",s.PREVIEW="preview",s.RUNS="runs",s.FILES="files",s);let u=(e,t,a,n)=>`/explore/data/${encodeURIComponent(n||"")}/${encodeURIComponent(a||"")}/${encodeURIComponent(e)}?activeTab=${t}`,c=(e,t,a)=>`/explore/data/volumes/${encodeURIComponent(a||"")}/${encodeURIComponent(t||"")}/${encodeURIComponent(e)}`,d=(e,t,a)=>`/explore/data/functions/${encodeURIComponent(a||"")}/${encodeURIComponent(t||"")}/${encodeURIComponent(e)}`,m=(e,t,a)=>`/explore/data/models/${encodeURIComponent(a||"")}/${encodeURIComponent(t||"")}/${encodeURIComponent(e)}`,p=(e,t,a,n)=>`/explore/data/models/${encodeURIComponent(n||"")}/${encodeURIComponent(a||"")}/${encodeURIComponent(e)}/version/${t}`,f=(e,t)=>`/explore/data/notebooks/${encodeURIComponent(t||"")}/${encodeURIComponent(e)}`,g=e=>`/explore/locations/${encodeURIComponent(e)}`,h=e=>`/explore/connections/${encodeURIComponent(e)}`,E=e=>`/explore/external-metadata/${encodeURIComponent(e)}`,b=()=>"/governance/metastore",T=(e,t,a)=>`/explore/data/secrets/${encodeURIComponent(a||"")}/${encodeURIComponent(t||"")}/${encodeURIComponent(e)}`},747674:(e,t,a)=>{a.d(t,{U:()=>i});var n=a(586356),r=a(409666);let i=(0,a(315592).Xr)({type:"filter-date-range-picker",channelIndex:{fields:1},validateEditorSpec:e=>({validatedSpec:e}),version:r.B0,getEncodingMapMeta:()=>r.OM,allowDisaggregatedData:!1,allowSelection:!0,isRenderable:n.q,normalizeDecoupledSpec:(e,t)=>e})},749314:(e,t,a)=>{a.d(t,{r:()=>A});var n=a(610435),r=a(692738),i=a(497895),o=a(379045),s=a(79570),l=a(664093),u=a(382908),c=a(161330),d=a(342411),m=a(437885),p=a(483588);let f={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},g={[p.GbL.SOURCE_IDP_ATTRIBUTE_AAD]:"Microsoft Entra ID",[p.GbL.SOURCE_IDP_ATTRIBUTE_OKTA]:"Okta"},h=({color:e,disabled:t,disabledReason:a,name:r,sourceIdpName:o})=>{let{theme:s}=(0,i.wn)(),l=(0,d.tz)();return(0,n.FD)("div",{css:{display:"flex",alignItems:"center",overflow:"hidden",gap:s.spacing.xs},children:[(0,n.Y)(u.o.Text,{css:{...f,flexShrink:1,maxWidth:"100%",display:"inline-block",color:e},children:r||""}),t&&a&&(0,n.Y)(c.I,{content:a??"disabled",componentId:"displayName.disabled-reason.tooltip"}),o&&(0,n.Y)(u.o.Text,{color:"secondary",css:{color:e,fontStyle:"italic"},children:l.formatMessage({id:"vSe1Wh",defaultMessage:"In {sourceIdpName}"},{sourceIdpName:o})})]})},E=({disabled:e=!1,disabledReason:t,subject:a})=>{let{theme:r}=(0,i.wn)(),o=e?`${r.colors.actionDisabledText} !important`:void 0,s=a.sourceIdp&&a.sourceIdp!==p.GbL.SOURCE_IDP_ATTRIBUTE_UNSPECIFIED?g[a.sourceIdp]:void 0;switch(a.kind){case"user":if(a.fullName&&a.fullName!==a.displayName)return(0,n.FD)("div",{css:{overflow:"hidden"},children:[(0,n.Y)(h,{color:o,disabled:e,disabledReason:t,name:a.fullName,sourceIdpName:s})," ",(0,n.Y)(u.o.Text,{color:"secondary",className:m.Tp,css:{...f,maxWidth:"100%",display:"inline-block",color:o},children:a.displayName})]});return(0,n.Y)(h,{color:o,disabled:e,disabledReason:t,name:a.displayName,sourceIdpName:s});case"group":return(0,n.Y)(h,{color:o,disabled:e,disabledReason:t,name:a.displayName,sourceIdpName:s});case"serviceprincipal":if(!a.name)return(0,n.Y)(h,{color:o,disabled:e,disabledReason:t,name:a.applicationId,sourceIdpName:s});return(0,n.FD)("div",{css:{overflow:"hidden"},children:[(0,n.Y)(h,{color:o,disabled:e,disabledReason:t,name:a.name,sourceIdpName:s})," ",(0,n.Y)(u.o.Text,{color:"secondary",className:m.Tp,css:{...f,maxWidth:"100%",display:"inline-block",color:o},children:a.applicationId})]})}};var b=a(691069),T=a(62947),y=a(67105);function I(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}let A=({subject:e,disabled:t,disabledReason:a})=>{let{theme:u}=(0,i.wn)(),{provisionSource:c}=(0,r.useContext)(T.M),[d,{loading:p,error:f}]=(0,y.r)(c),g={alignItems:"center",display:"flex",fontSize:20,height:30,justifyContent:"center",width:30},h=(0,r.useCallback)(a=>{var n;return(n=function*(){if(t||"idp"!==e.source)return;a.stopPropagation();let n=e=>{e.preventDefault(),e.stopPropagation()};document.addEventListener("keydown",n,!0),document.addEventListener("mousedown",n,!0);try{let t=yield d(e);if(t?.apiError!==null)return;e.id=t.name?.split("/").pop()??"",e.source="account";let n=a.target.closest('[role="option"]');n?.click()}catch(e){}finally{document.removeEventListener("keydown",n,!0),document.removeEventListener("mousedown",n,!0)}},function(){var e=this,t=arguments;return new Promise(function(a,r){var i=n.apply(e,t);function o(e){I(i,a,r,o,s,"next",e)}function s(e){I(i,a,r,o,s,"throw",e)}o(void 0)})})()},[t,e,d]);return(0,n.FD)("div",{css:{display:"flex",alignItems:"center",gap:u.spacing.sm,marginRight:u.spacing.xs},onClick:h,children:[(0,n.FD)("div",{className:m.Tp,css:{display:"flex",alignItems:"center",marginLeft:u.spacing.xs,marginRight:u.spacing.xs},children:[p&&(0,n.Y)(o.A,{spin:!0,css:g,"data-testid":"loading"}),f&&(0,n.Y)(s.m,{componentId:"codegen_web-shared_src_subject-select_subjectlabel.tsx_1",content:f.message,children:(0,n.Y)(l.A,{color:"warning",css:g,"data-testid":"error"})}),!p&&!f&&(0,n.Y)(b.C,{kind:e.kind,disabled:t})]}),(0,n.Y)(E,{disabled:t,disabledReason:a,subject:e})]})}},750758:(e,t,a)=>{if(a.d(t,{D:()=>o,j:()=>i}),/^(13057|85670)$/.test(a.j))var n=a(978081);if(/^(13057|85670)$/.test(a.j))var r=a(22191);let i=e=>new Promise((t,a)=>{let i=((e,t="png")=>{if(e.startsWith("data:"))return e;return`data:image/${t};base64,${e}`})(e),o=new Image;o.onload=()=>{t({width:o.width,height:o.height})},o.onerror=()=>{(0,n.j)({level:"sev3",esComponent:r.Es.Assistant,eventId:"getImageDimensionsFailed",debugBlob:{dataUrl:i.slice(0,100)}}),a(Error("Failed to load image"))},o.src=i}),o=e=>{let t=e.split(",")[1]||e,a=(t.match(/[=]+$/)||[""])[0].length;return Math.floor(3*t.length/4)-a}},751777:(e,t,a)=>{a.d(t,{IA:()=>f,Pv:()=>h,cu:()=>E,lh:()=>g});var n=a(22191),r=a(886100),i=a(860279),o=a(148026),s=a(235257);let l=new Map,u=new Map,c=new Map;function d(e){if(!(e instanceof s.cO))return;let{treeEventIdentifier:t,invalidationEventType:a,itemId:n}=e.detail,r=l.get(t);if(!r)return;switch(a){case s.Zk.INVALIDATE_ALL:r.invalidateAll();return;case s.Zk.INVALIDATE_ASSET_DATA:if(!n)return;r.invalidateItem(n);return;case s.Zk.INVALIDATE_ASSET_CHILDREN:if(!n)return;r.invalidateChildren(n);return;case s.Zk.INVALIDATE_ASSET_AND_CHILDREN:if(!n)return;r.invalidateItem(n),r.invalidateChildren(n);return}}function m(e){let t=e.getConfig().rootItemId;if(!t)return!1;return(0,i.M3)(e).current.retrievedChildrenHashSet?.has((0,o.z)(t,e.getContext()))??!1}function p(e,t){try{let a=e(t);a instanceof Promise&&a.catch(e=>{r.iT.sev3(n.Es.FileBrowser,"InvalidationListenerPlugin: pendingCallback threw an error",{error:e})})}catch(e){r.iT.sev3(n.Es.FileBrowser,"InvalidationListenerPlugin: pendingCallback threw an error",{error:e})}}function f(e,t,a){let i=l.get(e),{dedupeKey:o,evictKeys:s}=a??{};if(i&&m(i)){let a=c.get(e);if(a?.length){let t=new Set([...o?[o]:[],...s??[]]);if(t.size>0){let n=a.filter(e=>!e.dedupeKey||!t.has(e.dedupeKey));0===n.length?c.delete(e):n.length!==a.length&&c.set(e,n)}}g(e),p(t,i);return}let u=c.get(e)??[];if(o){u=u.filter(e=>e.dedupeKey!==o),c.set(e,[...u,{fn:t,dedupeKey:o,evictKeys:s}]);return}if(u.length>=10){r.iT.sev3(n.Es.FileBrowser,"InvalidationListenerPlugin: pendingCallbacks queue full, oldest callback dropped",{treeEventIdentifier:e}),c.set(e,[...u.slice(1),{fn:t,evictKeys:s}]);return}c.set(e,[...u,{fn:t,evictKeys:s}])}function g(e){let t=l.get(e);if(!t||!m(t))return;let a=c.get(e)??[];if(c.delete(e),0===a.length)return;let n=a[a.length-1],r=n.evictKeys?.length?new Set(n.evictKeys):null;(null===r?a:a.filter((e,t)=>t===a.length-1||!e.dedupeKey||!r.has(e.dedupeKey))).forEach(({fn:e})=>p(e,t))}function h({treeEventIdentifier:e,invalidationEventType:t,itemId:a}){let n=new s.cO({treeEventIdentifier:e,invalidationEventType:t,itemId:a});l.has(e)?window.dispatchEvent(n):function(e){let{treeEventIdentifier:t,invalidationEventType:a,itemId:n}=e.detail;if(a===s.Zk.INVALIDATE_ALL)return u.set(t,[e]);let r=u.get(t)??[];if(r.some(e=>e.detail.invalidationEventType===s.Zk.INVALIDATE_ALL)||r.some(e=>e.detail.itemId===n&&e.detail.invalidationEventType===a))return;let i=r.length>=10?[...r.slice(1),e]:[...r,e];u.set(t,i)}(n)}let E={key:"invalidation-listener",deps:["async-data-resolver"],onTreeMount:e=>{let t=e.getConfig().eventIdentifier;if(!t)throw Error("Failed to mount the tree with invalidationListenerPlugin: Event identifier is required");!function(e,t){if(l.has(t))return;l.set(t,e),1===l.size&&window.addEventListener(s.Ai,d)}(e,t),g(t),function(e){let t=u.get(e)||[];if(!l.has(e))return r.iT.sev3(n.Es.FileBrowser,"TreeExplorer.InvalidationListenerPlugin failed to find a registered tree when trying to run pending invalidations",{treeEventIdentifier:e});u.delete(e),t.forEach(e=>window.dispatchEvent(e))}(t)},onTreeUnmount:e=>{let t=e.getConfig().eventIdentifier;if(!t)throw Error("Failed to unmount the tree with invalidationListenerPlugin: Event identifier is required");!function(e){if(!l.get(e))return;l.delete(e),u.delete(e),0===l.size&&window.removeEventListener(s.Ai,d)}(t)}}},752634:(e,t,a)=>{a.d(t,{f:()=>s});var n=a(610435),r=a(673655),i=a(429608);let o=8,s=({gutter:e=o,...t})=>(0,n.Y)(i.wC,{children:(0,n.Y)(r.A,{gutter:e,...t})})},753427:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M0 2.75A.75.75 0 0 1 .75 2h3.922c.729 0 1.428.29 1.944.805L7.811 4h7.439a.75.75 0 0 1 .75.75V8h-1.5V5.5h-7a.75.75 0 0 1-.53-.22L5.555 3.866a1.25 1.25 0 0 0-.883-.366H1.5v9H5V14H.75a.75.75 0 0 1-.75-.75zM9 8.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M7 9a2 2 0 1 1 3.778.917c.376.58.888 1.031 1.414 1.227a2 2 0 1 1-.072 1.54c-.977-.207-1.795-.872-2.37-1.626v1.087a2 2 0 1 1-1.5 0v-1.29A2 2 0 0 1 7 9m7 2.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m-5 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="FolderBranchIcon";let l=s},756548:(e,t,a)=>{a.d(t,{Uo:()=>l,kA:()=>s,mC:()=>i,sB:()=>o});var n,r=a(441535),i=((n={}).AutoLaunchModalDoNotShowAgain="notebook.serverlessNudge.autoLaunchModal.doNotShowAgain",n.AutoLaunchModalUseServerless="notebook.serverlessNudge.autoLaunchModal.useServerless",n.AutoLaunchModalBanner="notebook.serverlessNudge.autoLaunchModal.banner",n.AutoLaunchToastDoNotShowAgain="notebook.serverlessNudge.autoLaunchToast.doNotShowAgain",n.AutoLaunchToastUseServerless="notebook.serverlessNudge.autoLaunchToast.useServerless",n.AutoLaunchToastBanner="notebook.serverlessNudge.autoLaunchToast.banner",n.AutoLaunchToastLearnMore="notebook.serverlessNudge.autoLaunchToast.learnMore",n.CreateClusterModalDoNotShowAgain="notebook.serverlessNudge.createClusterModal.doNotShowAgain",n.CreateClusterModalUseServerless="notebook.serverlessNudge.createClusterModal.useServerless",n.CreateClusterModalBanner="notebook.serverlessNudge.createClusterModal.banner",n.ClusterPickerStartDoNotShowAgain="notebook.serverlessNudge.clusterPickerStart.doNotShowAgain",n.ClusterPickerStartUseServerless="notebook.serverlessNudge.clusterPickerStart.useServerless",n.ClusterPickerStartBanner="notebook.serverlessNudge.clusterPickerStart.banner",n.ClusterPickerStartLearnMore="notebook.serverlessNudge.clusterPickerStart.learnMore",n);function o(e){if("autoLaunchModal"===e)return Number((0,r.W)("databricks.fe.pythonx.serverless.compatibility.autoLaunchModal.checkTimeoutMs",1500));if("autoLaunchToast"===e)return Number((0,r.W)("databricks.fe.pythonx.serverless.compatibility.autoLaunchToast.checkTimeoutMs",1500));if("clusterPickerStart"===e)return Number((0,r.W)("databricks.fe.pythonx.serverless.compatibility.clusterPickerStart.checkTimeoutMs",1500));return Number((0,r.W)("databricks.fe.pythonx.serverless.compatibility.clusterModal.checkTimeoutMs",1e3))}function s(){return(0,r.W)("databricks.fe.pythonx.serverless.fallbackOnDeletedCluster",!1)}function l(e){if(!(0,r.W)("databricks.fe.pythonx.serverless.compatibility.defaultEnabled",!0))return!1;if("autoLaunchModal"===e)return!0;if("autoLaunchToast"===e)return(0,r.W)("databricks.fe.pythonx.serverless.compatibility.autoLaunchToast.enableBanner",!1);if("clusterPickerStart"===e)return(0,r.W)("databricks.fe.pythonx.serverless.compatibility.clusterPickerStart.enableBanner",!1);return!0}},758666:(e,t,a)=>{a.d(t,{Qr:()=>c,st:()=>d});var n=a(692738),r=a(686560),i=a(733337),o=a(660618),s=a(595615);function l(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function u(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){l(i,n,r,o,s,"next",e)}function s(e){l(i,n,r,o,s,"throw",e)}o(void 0)})}}function c({permission:e}){return n.useCallback(()=>({queryKey:(({permission:e})=>["is-permitted-domain-policy",{permission:e}])({permission:e}),queryFn:()=>u(function*(){return function(e){return u(function*({permission:e}){let t=(0,r.d)("accountId",""),a=`accounts/${t}`,n=`${o.Je}/is-permitted?resource=${a}&permission=${e}&consistency_token=`,s=yield(0,i.nr)(n);return s?.is_permitted}).apply(this,arguments)}({permission:e})})()}),[e])}function d({permission:e},t){let a=c({permission:e});return(0,s.AO)({...a(),...t})}},761543:(e,t,a)=>{a.d(t,{gc:()=>l,wS:()=>u});var n=a(267647),r=a(169750),i=a(907140),o=a(797500);function s(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}let l=e=>{let{UserReferencedObjects:t=[]}=e;return t.length>0?`Here are details about objects the user referenced in the question: 
${t.map(e=>{var t,a,n,r;switch(e.type){case"table":return(0,i.P)(e.object);case"variable":return(0,o.ui)("python",[e.object]);case"skill":return`Referenced Skill: skill:${e.object.name}:${e.object.path}${e.object.description?` (${e.object.description})`:""}`;case"mlflowEvaluationRun":return t=e.object,[`The user referenced an MLflow Evaluation Run (use readAssetById with assetType="mlflowEvaluationRun", assetId="${t.runId}" to read it).`,`Name: ${t.name}`,`Run ID: ${t.runId}`,t.experimentId&&`Experiment ID: ${t.experimentId}`,t.status&&`Status: ${t.status}`,null!=t.startTime&&`Start Time: ${t.startTime}`,null!=t.endTime&&`End Time: ${t.endTime}`,!!t.metrics?.length&&`Metrics: ${JSON.stringify(t.metrics)}`,t.tags?.length&&`Tags: ${JSON.stringify(t.tags)}`].filter(Boolean).join("\n");case"mlflowDataset":return a=e.object,[`The user referenced an MLflow Dataset (use readAssetById with assetType="mlflowDataset", assetId="${a.datasetId}" to read it).`,`Name: ${a.name}`,`Dataset ID: ${a.datasetId}`,a.experimentId&&`Experiment ID: ${a.experimentId}`,a.description&&`Description: ${a.description}`,a.sourceType&&`Source Type: ${a.sourceType}`].filter(Boolean).join("\n");case"mlflowJudge":return n=e.object,[`The user referenced an MLflow Judge/Scorer (use readAssetById with assetType="mlflowJudge", assetId="${n.experimentId}:${n.scorerId}" to read it).`,`Name: ${n.name}`,`Scorer ID: ${n.scorerId}`,`Experiment ID: ${n.experimentId}`,n.scorerType&&`Scorer Type: ${n.scorerType}`,n.description&&`Description: ${n.description}`].filter(Boolean).join("\n");case"mlflowLabelingSchema":return r=e.object,[`The user referenced an MLflow Labeling Schema (use readAssetById with assetType="mlflowLabelingSchema", assetId="${r.experimentId}:${r.name}" to read it).`,`Name: ${r.name}`,`Type: ${r.type}`,`Experiment ID: ${r.experimentId}`,r.dataType&&`Data Type: ${r.dataType}`,r.instruction&&`Instruction: ${r.instruction}`,!!r.options?.length&&`Options: ${r.options.join(", ")}`,!!r.overrides?.length&&`Overrides: ${JSON.stringify(r.overrides)}`].filter(Boolean).join("\n");default:return"id"in e?`Referenced ${e.type}: ${e.type}:${e.id}:${e.label}`:""}}).join("\n")}
`:""},u=(0,n.N)(r.E.REFERENCE_OBJECT,e=>{var t;return(t=function*(){return(e=>{let{contextObject:t}=e;return{UserReferencedObjects:t.userReferencedObjects}})(e)},function(){var e=this,a=arguments;return new Promise(function(n,r){var i=t.apply(e,a);function o(e){s(i,n,r,o,l,"next",e)}function l(e){s(i,n,r,o,l,"throw",e)}o(void 0)})})()},e=>({includeReferenceObject:!!e.UserReferencedObjects?.length}),l)},762047:(e,t,a)=>{a.d(t,{O:()=>r});var n=a(191431);function r(e){if(!(0,n.Q)())return e;return e.map(e=>e.file||e.notebook?{glob:{include:e.file?.path??e.notebook?.path}}:e)}},765288:(e,t,a)=>{a.d(t,{w:()=>o});var n=a(441535),r=a(586129),i=a(873092);function o(){return(0,i.w)()&&(0,r.j)()&&(0,n.W)("databricks.fe.lakeview.enableDashboardCertification",!1)}},767399:(e,t,a)=>{a.d(t,{S:()=>n});let n=["schema-browser","favorite-tables"]},768117:(e,t,a)=>{a.d(t,{h:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enableDatasetQueryProfiler",!0)}},768564:(e,t,a)=>{a.d(t,{b:()=>o});var n=a(986784),r=a(707076),i=a(204645);function o(){return(0,n.i)()&&(0,r.MH)()&&!(0,i.q)()}},768622:(e,t,a)=>{a.d(t,{Jq:()=>T,bb:()=>I});var n=a(610435),r=a(956935),i=a(802558),o=a.n(i),s=a(91958),l=a.n(s),u=a(692738),c=a(497895),d=a(194901),m=a(161330),p=a(174541),f=a(574132),g=a(639712);let h={paddingTop:2},E={width:16,flexShrink:0},b={display:"flex"},T=l()((e,t,a)=>(0,r.AH)({...a&&{pointerEvents:"none",color:e.colors.actionDisabledText},...t&&{background:e.colors.actionTertiaryBackgroundHover}}),(e,t,a)=>`${(0,g.H6)(e)}|${t}|${!!a}`),y=l()((e,t)=>(0,r.AH)({marginLeft:e.spacing.sm,fontSize:e.typography.fontSizeBase,fontStyle:"normal",fontWeight:400,cursor:"pointer",overflow:"hidden",wordBreak:"break-word",..."ellipsis"===t&&{textOverflow:"ellipsis",whiteSpace:"nowrap"}}),(e,t)=>`${(0,g.H6)(e)}|${t}`),I=(0,u.forwardRef)(({item:e,index:t,comboboxState:a,textOverflowMode:r="multiline",isDisabled:i,disabledReason:s,hintContent:l,onClick:g,children:I,...A},v)=>{let{selectedItem:S,highlightedIndex:_,getItemProps:C,isOpen:R}=a,O=o()(S,e),N=_===t,{theme:k}=(0,c.wn)(),w=(0,u.useRef)(null);(0,u.useImperativeHandle)(v,()=>w.current);let{onClick:M,...P}=C({item:e,index:t,disabled:i,onMouseUp:e=>{e.stopPropagation(),A.onMouseUp?.(e)},ref:w});return(0,u.useEffect)(()=>{if(R&&_===t&&w.current){let e=w.current.closest("ul");if(!e)return;let t=e.scrollTop,a=e.scrollTop+e.clientHeight,n=w.current.offsetTop,r=w.current.offsetTop+w.current.clientHeight;(n<t||r>a)&&w.current?.scrollIntoView({block:"nearest"})}},[_,t,R,w]),(0,n.FD)("li",{role:"option","aria-selected":O,"aria-disabled":i,onClick:e=>{g?.(e),M?.(e)},css:[(0,p.RB)(k),T(k,N,i)],...P,...A,children:[O?(0,n.Y)(d.A,{css:h}):(0,n.Y)("div",{style:E}),(0,n.FD)("label",{css:y(k,r),children:[i&&s?(0,n.FD)("div",{css:b,children:[(0,n.Y)("div",{children:I}),(0,n.Y)("div",{css:(0,p.eO)(k),children:(0,n.Y)(m.I,{componentId:"typeahead-combobox-menu-item-disabled-reason-info-tooltip",side:"right",content:s})})]}):I,(0,n.Y)(f.y,{disabled:i,children:l})]})]})});I.defaultProps={_type:"TypeaheadComboboxMenuItem"}},776041:(e,t,a)=>{a.d(t,{Bx:()=>s,Dd:()=>o,Sx:()=>r,Sy:()=>i,TK:()=>n});let n=["folder"];function r(e){return 6e4*e}let i={TABLE:"table",NOTEBOOK:"notebook",QUERY:"query",DASHBOARD:"dashboard",PIPELINE:"pipeline",FILE:"file",DIRECTORY:"directory",JOB:"job",SKILL:"skill",APP:"app",DESIGNER_FILE:"designerFile",GENIE:"genie",SCHEDULED_GENIE_CODE:"scheduledGenieCode"},o=Object.values(i);function s(e,t){let a=o.indexOf(e.assetType),n=o.indexOf(t.assetType);return(-1===a?99:a)-(-1===n?99:n)}},776667:(e,t,a)=>{a.d(t,{k:()=>r});var n=a(441535);function r(){return!(0,n.W)("databricks.fe.lakeview.enableForceSyncServerPageLayoutKillSwitch",!1)}},777517:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 0a.75.75 0 0 1 .75.75V3h5.5a.75.75 0 0 1 .75.75V6h.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75H15v2.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V12H.75a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 .75 6H1V3.75A.75.75 0 0 1 1.75 3h5.5V.75A.75.75 0 0 1 8 0M2.5 4.5v9h11v-9zM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6.25 2.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="RobotIcon";let l=s},779862:(e,t,a)=>{a.d(t,{DV:()=>m,Gy:()=>y,T5:()=>p,Zp:()=>g,d4:()=>A,fl:()=>f,qv:()=>h,z5:()=>I});var n=a(974657),r=a.n(n),i=a(377063),o=a.n(i),s=a(22191),l=a(952067),u=a(911090),c=a(749850),d=a(301527);function m(e){return{scale:function({type:e,fn:t,yAxis:a,sort:n,reverse:r,customSortOrder:i,mappings:o}){switch(e){case"quantitative":return f({yAxis:a,reverse:r,fn:t});case"temporal":return{type:e};case"categorical":return p({sort:n,reverse:r,customSortOrder:i,mappings:o})}}(e)}}function p({sort:e,reverse:t,customSortOrder:a,mappings:n}){let r=(0,d._)({sort:e,reverse:t,customSortOrder:a});return{type:"categorical",...r?{sort:r}:{},...n?{mappings:n}:{}}}function f({yAxis:e,reverse:t,fn:a}){var n;return{type:"quantitative",...t?{reverse:!0}:{},...(n=e)&&(void 0!==n.rangeMin||void 0!==n.rangeMax)?{domain:function({rangeMin:e,rangeMax:t}){return{...void 0!==e?{min:e}:{},...void 0!==t?{max:t}:{}}}(n)}:{},...a?{fn:a}:{}}}function g({fieldName:e,columns:t,transform:a,scale:n}){if(n)return n;if("*"===e)return{type:"quantitative"};{let n=t.find(t=>t.name===e)?.type;if(n)return(0,l.SV)(n,a)}throw Error(c.sz)}function h(e){switch(e){case"logarithmic":return{type:"quantitative",fn:{type:"symlog"}};case"datetime":return{type:"temporal"};case"linear":return{type:"quantitative"};case"category":return{type:"categorical"};default:return}}function E(e){return e}function b(e){if("null"===e)return null;return Number(e)}let T={integer:b,float:b,decimal:b,"*":b,boolean:e=>"true"===e||"false"!==e&&null,date:E,datetime:E,complex:E,string:E};function y(e){return T[e]}function I(e,t){let a=Object.entries(e).filter(([e,{zIndex:t}])=>void 0!==t);if(a.length>0){let e=r()(a,([e,{zIndex:t}])=>t).map(([e,t])=>e),n=T[t];return e.map(n)}}function A(e,t,a,n,r){return function(e,t){let a=[];if(e){for(let[n,r]of Object.entries(e))if(r.color){let e=t(n);a.push({value:e,color:r.color})}}return a.length>0?a:void 0}("pie"===a?e:t,function(e,t){switch(e){case"integer":case"float":case"decimal":case"*":return b;case"boolean":return e=>"true"===e||"false"!==e&&null;case"date":case"datetime":let a=t?.timeFormat?.format;return a?e=>Number(o().utc(e,a)):e=>Number(e);case"complex":case"string":case void 0:case null:return E;default:return(0,u.K)(e,s.Es.Visualizations),E}}(n,r))}},780092:(e,t,a)=>{a.d(t,{r:()=>m});var n=a(692738),r=a(483588),i=a(234969),o=a(158555),s=a(662237),l=a(660618),u=a(641760),c=a(927811);let d=["recents","favorites","home"];function m({enabled:e=!1,dedupPriority:t=d}={}){let a=!e,{recents:p,loading:f}=(0,i.C)({selectableTypes:[o.h8.VOLUME],skip:a}),{favorites:g,loading:h}=(0,s.r)(5,[r.z$1.UC_VOLUME],a),E=(0,u.pC)(),{data:b,isLoading:T}=(0,c.Y)({enabled:e&&E}),y=(0,n.useMemo)(()=>{if(!b?.name)return;let e=b.name;return{full_name:`${e}.${l.E2}.${l.$3}`,name:l.$3,catalog_name:e,schema_name:l.E2,securable_type:o.h8.VOLUME,securable_kind:r.T_5.VOLUME_STANDARD}},[b]),I=(0,n.useMemo)(()=>(g??[]).map(e=>{let[t,a,n]=e.name.split(".");return{full_name:e.name,name:n,catalog_name:t,schema_name:a,securable_type:o.h8.VOLUME,securable_kind:r.T_5.VOLUME_STANDARD}}),[g]),A=(0,n.useMemo)(()=>(p??[]).filter(e=>"VOLUME"===e.securable_type),[p]),{home:v,recents:S,favorites:_}=(0,n.useMemo)(()=>{let e=new Set,a={home:[],recents:[],favorites:[]},n={home:y?[y]:[],recents:A,favorites:I};for(let r of t){let t=n[r].filter(t=>!e.has(t.full_name??""));for(let a of t)a.full_name&&e.add(a.full_name);a[r]=t}return a},[y,A,I,t]);return{homeVolume:v[0],favoriteVolumes:_,recentVolumes:S,isLoading:f||h||e&&E&&T,recentsLoading:f,favoritesLoading:h,homeCatalogLoading:T}}},780202:(e,t,a)=>{a.a(e,async(e,n)=>{try{a.d(t,{e:()=>o});var r=a(761602),i=e([r]);function o(e,t){let a,n=new r.i;if(!n.setSql(e)){t.failed.push({query:e,error:"setSql failed to parse SQL"}),t.stats.failureCount++;return}n.nodes&&0===n.nodes.length&&e.trim()&&n.regenerateSql({commitDraft:!1});try{a=n.nodes.map(e=>e.nodeType)}catch(n){let a=n instanceof Error?n.message:String(n);t.failed.push({query:e,error:`Node parsing failed: ${a}`}),t.stats.failureCount++;return}!function(e,t,a,n){var r,i,o;let s=a.some(e=>"SQL"!==e),l=0===a.length,u=a.filter(e=>"SQL"===e).length,c=u>0;for(let e of(s&&!c?n.stats.pureTypedQueries++:c&&!s?n.stats.pureSqlQueries++:c&&s&&n.stats.mixedQueries++,c&&1===u&&n.stats.singleSqlNodeQueries++,a)){let t=n.nodeTypeFrequency.get(e)||0;n.nodeTypeFrequency.set(e,t+1)}l?(r=e,n.noNodes.push({query:r})):c?function(e,t,a,n){let r,i,o=a.filter(e=>"SQL"===e).length,s=a.filter(e=>"SQL"!==e).length,l=(r=e.toUpperCase(),i={FILTER:/\bWHERE\b/.test(r)||/\bHAVING\b/.test(r),JOIN:/\b(INNER|LEFT|RIGHT|FULL|CROSS)\s+JOIN\b|\bJOIN\b/.test(r),AGGREGATE:/\bGROUP\s+BY\b/.test(r),SORT:/\bORDER\s+BY\b/.test(r),COMBINE:/\b(UNION|INTERSECT|EXCEPT)\b/.test(r),TRANSFORM:/\bSELECT\b/.test(r)&&!/SELECT\s+\*/.test(r)},Object.values(i).filter(e=>e).length>1);if(!l&&t.parseResult&&t.parseResult.length>0){let a=t.parseResult[0];a.parseTree&&(n.sqlNodeParseTrees.push(a.parseTree),n.sqlNodeQueryText.push(e))}n.sqlNodes.push({query:e,sqlNodeCount:o,typedNodeCount:s,fallbackReason:l?"multiple-operator":"parser-limitation"})}(e,t,a,n):s&&(i=e,o=a,n.typedNodes.push({query:i,nodeTypes:o})),n.stats.successCount++}(e,n,a,t)}r=(i.then?(await i)():i)[0],n()}catch(e){n(e)}})},785582:(e,t,a)=>{a.d(t,{m:()=>n});class n extends Promise{onCancel;cancelPrevented;completed;cancelled;constructor(e){let t,a=!1;super((n,r)=>e(e=>{a=!0,n(e)},e=>{a=!0,r(e)},e=>t=e)),this.onCancel=t,this.completed=()=>a}cancel(){this.completed()||this.cancelled||this.cancelPrevented||(this.onCancel&&this.onCancel(),this.cancelled=!0)}preventCancel(){this.cancelPrevented=!0}static reject(e){return new n((t,a)=>{a(e)})}static resolve(e){return new n(t=>{t(e)})}}},791229:(e,t,a)=>{a.d(t,{U:()=>s,a:()=>o});var n=a(537287),r=a(993533),i=a(521200);let o=e=>{if(!e)return!1;{let{kind:t,enableServerlessCompute:a,enable_serverless_compute:n}=e;if(t===r.ch$.SERVERLESS_PREVIEW||t===r.ch$.SERVERLESS_REPL_VM)return!0;if(void 0!==a)return a;if(void 0!==n)return n}if("attrs"in e){let{kind:t,enableServerlessCompute:a}=e.attrs??{};return t===r.ch$.SERVERLESS_PREVIEW||t===r.ch$.SERVERLESS_REPL_VM||a}if("attributes"in e){let{kind:t,enableServerlessCompute:a}=e.attributes??{};return t===r.ch$.SERVERLESS_PREVIEW||t===r.ch$.SERVERLESS_REPL_VM||a}};function s(e,t){return(0,i.Qb)()&&!!o(e)&&(0,n.cd)(t)}},792575:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("path",{fill:"currentColor",d:"M1 1v13.25c0 .414.336.75.75.75H15v-1.5H2.5V1z"}),(0,n.Y)("path",{fill:"currentColor",d:"m15.03 5.03-1.06-1.06L9.5 8.44 7 5.94 3.47 9.47l1.06 1.06L7 8.06l2.5 2.5z"})]})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="ChartLineIcon";let l=s},796068:(e,t,a)=>{a.d(t,{$j:()=>g,Ee:()=>y,F7:()=>I,RG:()=>E,UY:()=>R,Wl:()=>k,Z4:()=>A,_b:()=>p,bK:()=>S,fw:()=>f,g:()=>b,kA:()=>v,m:()=>N,no:()=>_,yz:()=>T});var n=a(91958),r=a.n(n),i=a(432993),o=a(361704),s=a(405660),l=a(212478),u=a(609668),c=a(949656),d=a(272920),m=a(508224);let p=e=>{if(!e)return s.z7;switch(g(e)){case"boolean":return s.ih;case"integer":case"float":case"decimal":return s.j0;case"datetime":case"date":return s.X8;default:return s.z7}};function f(e,t,a){if(void 0!==t&&(0,m.uy)(t))return a?"nulln":"null";let n=g(e);if("complex"===n&&"null"===t)return a?"nulln":"null";if("boolean"===n)return void 0===t||t?a?"false":"true":a?"true":"false";if("string"===n||"complex"===n||"date"===n||"datetime"===n)return t?a?"eqn":"eq":a?"oneofn":"oneof";return void 0!==t?a?"eqn":"eq":a?"oneofn":"oneof"}let g=r()(e=>{if(h.includes(e)||(0,l.sr)(e))return e;if("json"===e)return"complex";return"string"}),h=["boolean","date","datetime","string"],E=e=>{if("complex"===e)return"json";return e},b=(e,t)=>{let a=t?g(t):void 0;switch(e){case"true":case"false":case"null":case"nulln":default:return s.C6.none;case"eq":case"eqn":if("date"===a||"datetime"===a)return s.C6.dateTimePicker;return s.C6.singleSelectTypeahead;case"contains":case"containsn":case"startswith":case"startswithn":case"endswith":case"endswithn":return s.C6.textInput;case"oneof":case"oneofn":return s.C6.multiSelectTypeahead;case"gt":case"gte":case"lt":case"lte":if("date"===a||"datetime"===a)return s.C6.dateTimePicker;return s.C6.numberInput;case"between":if((0,o.mp)(a))return s.C6.numberRangeInput;if("date"===a||"datetime"===a)return s.C6.dateTimeRangePicker;return s.C6.none;case"after":case"before":return s.C6.dateTimePicker}},T=(e,t)=>{let a=(0,m.Fh)(t);return{...e,columnId:t.id,dataType:g(a),filterType:f(a),filterValue:void 0,filterValues:void 0,filterConfig:{}}};function y(e,t){let a=(0,m.Fh)(t);return{...e,dataType:g(a)}}function I(e,t,a){let n=t?e.getColumn(t):void 0,r=n?(0,m.DC)(n):t??"",i=n?(0,m.Fh)(n):E(a);return{column:n,columnId:t,columnType:a,columnIcon:i?l.b7[i]:"",columnLabel:r,columnDisplayAs:i,disabled:!!n&&!n.getCanFilter()}}let A=()=>`f_${i.n.getRandomHexString(8)}`,v=()=>`fg_${i.n.getRandomHexString(8)}`;function S(e,t){return t.dataType===g(e)}function _(e,t){return t.filterType&&p(e).includes(t.filterType)}function C({columnId:e,model:t}){let a=e?t.getColumn(e):void 0;return a?(0,m.gG)(a):void 0}function R({columnId:e,model:t}){let a=C({columnId:e,model:t});return e=>{let t=O(e,a);return{formatted:e,parsed:t.parsed,originalValue:e}}}function O(e,t){let a=t?.displayAs??"string",n=u.KS[a](e,t);return{formatted:(0,m.uy)(e)?"":n.formatted,parsed:n.parsed,originalValue:e}}function N({model:e,columnId:t,filterValue:a,filterValues:n,filterMode:r,getUniqueCellValues:i}){let s=C({columnId:t,model:e}),l=O(a,s),u=(n??[]).map(e=>O(e,s)),p=(0,m.qP)(e),f={};f=i&&("server"===r||!p.length)?(void 0!==t?i(t):[]).reduce((e,t)=>{if(!(0,o.d9)(t)){let a=O(t,s);e[a.formatted]=a}return e},{}):(0,m.zk)(e,t),[l,...u].forEach(e=>{e&&!(0,m.uy)(e.parsed)&&(f[e.formatted]=e)});let g=Object.values(f);return{options:(0,c.Px)()?g.sort((e,t)=>(0,d.H)(e.formatted,t.formatted)):g,selectedValues:u,selectedValue:l}}function k(e,t,a){let n=t.map(e=>e instanceof o.I8?e:new o.I8(e)).filter(e=>o.I8.isValid(e)&&o.I8.isEnabled(e));if(0===n.length)return e;return e.filter(e=>n.every(t=>{let n=t.getColumnId();if(!(n in e))return!0;{let r=a?a(e,n):e[n];return t.filter(r)}}))}},797246:(e,t,a)=>{a.d(t,{DN:()=>u,Ix:()=>c,Jk:()=>d,OF:()=>s,nX:()=>m,nw:()=>l});var n=a(342411),r=a(641760),i=a(29824),o=a(150924);let s=(0,r.zt)()?(0,n.zR)({id:"oUyUvJ",defaultMessage:"You are only permitted to see metadata for this asset. Request additional permissions from the object's page"}):(0,n.zR)({id:"m+UfjI",defaultMessage:"You are only permitted to see metadata for this asset. Please contact the owner for additional permission"}),l=(0,n.zR)({id:"H1i5CS",defaultMessage:"Online store catalog"}),u={[i.an.CATALOG]:(0,n.zR)({id:"gST/Fz",defaultMessage:"catalog"}),[i.an.DATABASE]:(0,n.zR)({id:"Q2CEcK",defaultMessage:"schema"}),[i.an.TABLE]:(0,n.zR)({id:"MnQokr",defaultMessage:"table"}),[i.an.VIEW]:(0,n.zR)({id:"1/D8JH",defaultMessage:"view"}),[i.an.MATERIALIZED_VIEW]:(0,n.zR)({id:"F9towg",defaultMessage:"materialized view"}),[i.an.STREAMING_TABLE]:(0,n.zR)({id:"c71VXl",defaultMessage:"streaming table"}),[i.an.VOLUME]:(0,n.zR)({id:"upmcHZ",defaultMessage:"volume"}),[i.an.FUNCTION]:(0,n.zR)({id:"aP8Sqb",defaultMessage:"function"}),[i.an.FUNCTION_FEATURE_SPEC]:(0,n.zR)({id:"7qdK7+",defaultMessage:"function feature spec"}),[i.an.REGISTERED_MODEL]:(0,n.zR)({id:"3Y7acL",defaultMessage:"model"}),[i.an.REGISTERED_MODEL_VERSION]:(0,n.zR)({id:"vo02Jv",defaultMessage:"model version"}),[i.an.STORAGE_CREDENTIAL]:(0,n.zR)({id:"XkdeUT",defaultMessage:"storage credential"}),[i.an.CREDENTIAL]:(0,n.zR)({id:"XXi9AE",defaultMessage:"credential"}),[i.an.EXTERNAL_LOCATION]:(0,n.zR)({id:"gpTkYX",defaultMessage:"external location"}),[i.an.INBOUND_SHARED_NOTEBOOK_FILE]:(0,n.zR)({id:"2QTgI/",defaultMessage:"shared notebook file"}),[i.an.CONNECTION]:(0,n.zR)({id:"L+HZOe",defaultMessage:"connection"}),[i.an.SHARE]:(0,n.zR)({id:"HQxjso",defaultMessage:"share"}),[i.an.RECIPIENT]:(0,n.zR)({id:"M7UQAS",defaultMessage:"recipient"}),[i.an.PROVIDER]:(0,n.zR)({id:"PvVChz",defaultMessage:"provider"}),[i.an.METASTORE]:(0,n.zR)({id:"2irW3W",defaultMessage:"metastore"}),[i.an.COLUMN]:(0,n.zR)({id:"fwB/LS",defaultMessage:"column"}),[i.an.VOLUME_FILE]:(0,n.zR)({id:"5Cy++b",defaultMessage:"volume file"}),[i.an.VOLUME_FOLDER]:(0,n.zR)({id:"dOa8bp",defaultMessage:"volume folder"}),[i.an.CLEAN_ROOM]:(0,n.zR)({id:"OZVVYP",defaultMessage:"clean room"}),[i.an.VECTOR_INDEX]:(0,n.zR)({id:"w5dYYn",defaultMessage:"vector search index"}),[i.an.ONLINE_VIEW]:(0,n.zR)({id:"mbZFpH",defaultMessage:"online table"}),[i.an.METRIC_VIEW]:(0,n.zR)({id:"q71GSt",defaultMessage:"metric view"}),[i.an.EXTERNAL_METADATA]:(0,n.zR)({id:"gqNYH3",defaultMessage:"external metadata"}),[i.an.SECRET]:(0,n.zR)({id:"Y8FCE6",defaultMessage:"secret"})},c=(0,n.YK)({[i.an.CATALOG]:{id:"9Q4FT5",defaultMessage:"Catalog"},[i.an.DATABASE]:{id:"FWxl06",defaultMessage:"Schema"},[i.an.TABLE]:{id:"6soA0k",defaultMessage:"Table"},[i.an.VIEW]:{id:"Rw416Q",defaultMessage:"View"},[i.an.MATERIALIZED_VIEW]:{id:"WUAUbP",defaultMessage:"Materialized view"},[i.an.STREAMING_TABLE]:{id:"Zi/bxb",defaultMessage:"Streaming table"},[i.an.VOLUME]:{id:"1dS20z",defaultMessage:"Volume"},[i.an.FUNCTION]:{id:"VI+Sr3",defaultMessage:"Function"},[i.an.FUNCTION_FEATURE_SPEC]:{id:"sqDlGe",defaultMessage:"Function feature spec"},[i.an.REGISTERED_MODEL]:{id:"I01Ad4",defaultMessage:"Model"},[i.an.REGISTERED_MODEL_VERSION]:{id:"LRV0mb",defaultMessage:"Model version"},[i.an.STORAGE_CREDENTIAL]:{id:"bDEJaI",defaultMessage:"Storage credential"},[i.an.CREDENTIAL]:{id:"8m1U4P",defaultMessage:"Credential"},[i.an.EXTERNAL_LOCATION]:{id:"u7bRXy",defaultMessage:"External location"},[i.an.INBOUND_SHARED_NOTEBOOK_FILE]:{id:"pK4mvH",defaultMessage:"Shared notebook file"},[i.an.CONNECTION]:{id:"rR5RDl",defaultMessage:"Connection"},[i.an.SHARE]:{id:"bH4BVe",defaultMessage:"Share"},[i.an.RECIPIENT]:{id:"NfAkZZ",defaultMessage:"Recipient"},[i.an.PROVIDER]:{id:"5G2SGs",defaultMessage:"Provider"},[i.an.METASTORE]:{id:"lTi56H",defaultMessage:"Metastore"},[i.an.COLUMN]:{id:"ZUOQQ7",defaultMessage:"Column"},[i.an.VOLUME_FILE]:{id:"X/RWP6",defaultMessage:"Volume file"},[i.an.VOLUME_FOLDER]:{id:"B0vUyp",defaultMessage:"Volume folder"},[i.an.CLEAN_ROOM]:{id:"nEeSuH",defaultMessage:"Clean Room"},[i.an.VECTOR_INDEX]:{id:"d57N3p",defaultMessage:"Vector search index"},[i.an.ONLINE_VIEW]:{id:"p2r9Bh",defaultMessage:"Synced table"},[i.an.METRIC_VIEW]:{id:"tjJpp8",defaultMessage:"Metric view"},[i.an.EXTERNAL_METADATA]:{id:"RySBlN",defaultMessage:"External metadata"},[i.an.SECRET]:{id:"QLRlWq",defaultMessage:"Secret"}}),d={[i.an.FUNCTION]:(0,n.YK)({[o.x.FUNCTION_PROCEDURE]:{id:"3ramAO",defaultMessage:"Procedure"},[o.x.FUNCTION]:{id:"qCivWh",defaultMessage:"Function"},[o.x.FUNCTION_FEATURE_SPEC]:{id:"NMoL5P",defaultMessage:"Function feature spec"}})},m=(0,n.YK)({[i.an.CATALOG]:{id:"MFr8uI",defaultMessage:"Database"},[i.an.DATABASE]:{id:"8dUzvc",defaultMessage:"Schema"},[i.an.TABLE]:{id:"bqMEiN",defaultMessage:"Table"},[i.an.VIEW]:{id:"bAdJFD",defaultMessage:"View"},[i.an.FUNCTION]:{id:"OMHm4k",defaultMessage:"Function"},[i.an.COLUMN]:{id:"sFXezj",defaultMessage:"Column"}})},797500:(e,t,a)=>{function n(e){return e.filter(e=>!e.value?.includes("DataFrame")).map(e=>`- Pandas DataFrame '${e.name}', columns = ${e.schema}`)}function r(e){return e.filter(e=>e.value?.includes("DataFrame")).map(e=>`- Spark DataFrame '${e.name}', columns = ${e.value}`)}function i(e,t){if("python"!==e)return"";let a=n(t).join("\n"),i=r(t).join("\n");if(0===a.length&&0===i.length)return"";return`Here are the DataFrames in the session:
${i}
${a}
`}a.d(t,{Mm:()=>n,qG:()=>r,ui:()=>i})},797567:(e,t,a)=>{a.d(t,{AX:()=>y,Cs:()=>v,YU:()=>_,d4:()=>S,jn:()=>A,zc:()=>I});var n=a(22191),r=a(747129),i=a(125230),o=a(236560),s=a(949957),l=a(910371),u=a(881009),c=a(728610),d=a(240211),m=a(993533),p=a(193665),f=a(791229),g=a(536152),h=a(858347),E=a(267167);function b(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function T(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){b(i,n,r,o,s,"next",e)}function s(e){b(i,n,r,o,s,"throw",e)}o(void 0)})}}function y(e,t){return T(function*(){let a=(yield t.query({query:s.i2,variables:{id:e},fetchPolicy:"cache-first"})).data.lakehouse;if(!a)throw new c.o(`sql warehouse ${e} not found`);let n=!!u.OZ.isStartable(a.state),r=!!u.OZ.canStart(a.permissions),i=!!u.OZ.isRunning(a.state),o=!!u.OZ.canRunCommands(a.state);return{name:a.name,isStartable:n,canRestart:r,isRunning:i,canRun:o,enableServerlessCompute:!1,warehouseType:a.warehouseType}})()}function I(e,t){return T(function*(){let a=(yield t.query({query:p.pC,variables:{id:e},fetchPolicy:"network-only"})).data.cluster;if(!a||!(0,d.Pq)(a))throw new c.o(`clusterId ${e} not found`);let n=!!l.P.isStartable(a),r=!!l.P.isRunning(a),i=!!l.P.canRestart(a),o=!!l.P.canRunCommands(a);return{name:a.attributes.name,isStartable:n,isRunning:r,canRestart:i,canRun:o,enableServerlessCompute:(0,f.a)(a),warehouseType:void 0}})()}function A(e,t,a){return T(function*(){if(a&&a.clusterId?.id===e&&h.m.isDatabaseInstancePermissionsErrorReason(a))throw new c.o(`user does not have permissions to connect to database instance ${e}`);let n=yield(0,i.dO)(t,e,{timeout:5e3});if(!n)throw new c.o(`database instance ${e} not found`);let r=(0,o.h9)(n.state);return{name:n.name,isStartable:!1,canRestart:!1,isRunning:r,canRun:r,enableServerlessCompute:!1,warehouseType:void 0}})()}function v(e){return T(function*(){let t=yield e.query({query:p.d$,variables:{first:1,filterBy:{stateIn:[m.Ol$.RESIZING,m.Ol$.RESTARTING,m.Ol$.PENDING,m.Ol$.RUNNING,m.Ol$.TERMINATED,m.Ol$.TERMINATING],sourceIn:[m.uYy.API,m.uYy.UI],hasPermission:m._Fh.Attach}}});if(t.data.clusterList?.edges.length)return!0;return!1})()}function S(e,t){return T(function*(){let a=yield e.query({query:s.yr,fetchPolicy:"network-only",errorPolicy:"all"});if(a.data.lakehouses?.edges.filter(e=>e.node&&(0,u.eX)(e.node,(0,E.lG)(t))).length)return!0;return!1})()}function _(e){return T(function*(){try{let t=yield(0,i.jN)(e,i.d6,{timeout:5e3});if(t)return!!t.find(e=>(0,o.h9)(e.state));return!1}catch(e){if(e instanceof Error&&e?.message?.includes("not enabled"))return!1;return g.Q.sev2BurnRate(n.Es.Notebooks,"anyDatabaseInstanceAvailable threw an error",r.i1.P95,r.Ip.Min10,!1,e),!1}})()}},804723:(e,t,a)=>{a.d(t,{S:()=>l});var n=a(610435),r=a(5421),i=a(497895),o=a(174541);let s=({children:e,...t})=>{let{theme:a}=(0,i.wn)(),{isInsideTypeaheadCombobox:s}=(0,r.T)();if(!s)throw Error("`TypeaheadComboboxFooter` must be used within `TypeaheadComboboxMenu`");return(0,n.Y)("div",{...t,css:(0,o.UA)(a),children:e})};s.defaultProps={_type:"TypeaheadComboboxFooter"};let l=s},809695:(e,t,a)=>{a.d(t,{Ay:()=>p,O$:()=>m,VN:()=>c});var n=a(708113),r=a(287578),i=a(237080),o=a(583422),s=a(785582);function l(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function u(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){l(i,n,r,o,s,"next",e)}function s(e){l(i,n,r,o,s,"throw",e)}o(void 0)})}}let c=(e,t)=>!!(e&&t&&e.replace(/^\s*`/,"").replace(/`\s*$/,"").toLowerCase()===t.replace(/^\s*`/,"").replace(/`\s*$/,"").toLowerCase()),d=e=>e.map(e=>e.name),m=e=>{let t=new s.m((t,a,n)=>{let r=[];if(n(()=>{r.forEach(e=>e.cancel())}),!e.identifierChain)return void a(Error("No identifier chain provided to find catalog entry."));let o=(n,i)=>{let s;if(0===i.length)return void a(Error("Did not find catalog entry in any of the provided fields."));s="map"===n.getType()?"value":"array"===n.getType()?"item":i.shift()||"";let l=n.getChildren({cancellable:!!e.cancellable,cachedOnly:!!e.cachedOnly,silenceErrors:!0});r.push(l),l.then(e=>{let n=null;e.some(e=>{if(c(e.name,s))return n=e,!0;return!1}),n&&i.length?o(n,i):n?t(n):a(Error("Catalog entry not found in children of the parent (may be due to truncation of 15k children)."))}).catch(a)},s=!1,{tables:l,identifierChain:u}=e;if(e.usingAntlrSyntaxChecking){let t=l?d(l[0].identifierChain).concat(d(u)):d(u);i.Ay.getEntry({connector:e.connector,path:[],cachedOnly:!!e.cachedOnly,temporaryOnly:!!e.temporaryOnly}).then(e=>{t&&o(e,t)})}else l?Promise.all(l.map(n=>{let r;return r=n.identifierChain,i.Ay.getEntry({connector:e.connector,path:d(r).concat(d(u)),cachedOnly:!!e.cachedOnly,temporaryOnly:!!e.temporaryOnly}).then(e=>{(u.length>1||e.definition?.name)&&(s=!0,t(e))}).catch(a)})).then(()=>{s||a("Could not find catalog entry for "+u.map(e=>e.name).join("."))}):i.Ay.getEntry({connector:e.connector,path:[],cachedOnly:!!e.cachedOnly,temporaryOnly:!!e.temporaryOnly}).then(t=>{e.identifierChain&&o(t,d(e.identifierChain))})});return(0,o.R7)(t,e)},p={autocompleteFilter:(e,t)=>{let a=e.toLowerCase();return t.filter(t=>{if(t.category.categoryId===r.wz.FunctionDescription)return t.filterWeight=4,!e.includes(")");if((0,r.pW)(t.category)&&a.startsWith("join "))return!1;let n=t.value.toLowerCase().indexOf(a);if(-1!==n){let e;0===n&&t.category.categoryId!==r.wz.PopularTable||t.filterValue&&0===t.filterValue.toLowerCase().indexOf(a)||(e=t.value.toLowerCase()).startsWith("* ")&&e.substring(2).startsWith(a)?t.filterWeight=3:t.filterWeight=2}else t.details&&t.details.comment&&!a.includes(" ")&&-1!==(n=t.details.comment.toLowerCase().indexOf(a))&&(t.filterWeight=1,t.matchComment=!0);if(-1!==n)return t.matchIndex=n,t.matchLength=e.length,!0;return!1})},backTickIfNeeded:(e,t,a,r)=>u(function*(){if(r)return t+"`";let i=e.dialectProperties&&e.dialectProperties.sqlIdentifierQuote||"`";if(0===t.indexOf(i))return t;if((yield(a||n.default).getReservedKeywords(e.dialect||"dbsql")).has(t.toUpperCase()))return i+t+i;if(!/^[A-Za-z][A-Za-z0-9_]*$/.test(t))return i+t.replaceAll(i,i+i)+i;return t})(),backTickIfNeededNoConnector:(e,t,a)=>u(function*(){if(a)return e+"`";if(0===e.indexOf("`"))return e;if((yield(t||n.default).getReservedKeywords("dbsql")).has(e.toUpperCase()))return"`"+e+"`";if(!/^[A-Za-z][A-Za-z0-9_]*$/.test(e))return"`"+e.replaceAll("`","``")+"`";return e})(),backTickIfHasSpecialChars:(e,t,a)=>{if(a)return t+"`";let n=e.dialectProperties&&e.dialectProperties.sqlIdentifierQuote||"`";if(0===t.indexOf(n))return t;if(!/^[A-Za-z][A-Za-z0-9_]*$/.test(t))return n+t.replaceAll(n,n+n)+n;return t},unBackTick:(e,t)=>{let a=e.dialectProperties&&e.dialectProperties.sqlIdentifierQuote||"`";return t.length>1&&t[0]===a&&t[t.length-1]===a&&(t=(t=t.slice(1,t.length-1)).replaceAll(a+a,a)),t},locationEquals:(e,t)=>!!e&&!!t&&e.first_line===t.first_line&&e.first_column===t.first_column&&e.last_line===t.last_line&&e.last_column===t.last_column,identifierEquals:c,sortSuggestions:(e,t)=>{e.sort((e,a)=>{if(t){if(void 0!==e.filterWeight&&void 0!==a.filterWeight&&a.filterWeight!==e.filterWeight)return a.filterWeight-e.filterWeight;if(void 0!==e.filterWeight&&void 0===a.filterWeight)return -1;if(void 0===e.filterWeight&&void 0!==a.filterWeight)return 1}let n=(e.category.weight||0)+(e.weightAdjust||0),r=(a.category.weight||0)+(a.weightAdjust||0);if(void 0!==n&&void 0!==r&&r!==n)return r-n;if(void 0!==n&&void 0===r)return -1;if(void 0===n&&void 0!==r)return 1;return e.value.replace("("," ").localeCompare(a.value.replace("("," "))})},identifierChainToPath:d,isSqlDialect:e=>["dbsql","sql","generic","impala"].includes(e.toLowerCase()),identifierChainIsSubquery:e=>e.some(e=>e.cte||e.subQueryColumns||e.subQuery)}},810026:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("g",{clipPath:"url(#GlobeIcon_svg__a)",children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m5.354-5.393q.132-.347.287-.666A6.51 6.51 0 0 0 1.543 7.25h2.971c.067-1.777.368-3.399.84-4.643m.661 4.643c.066-1.627.344-3.062.742-4.11.23-.607.485-1.046.73-1.32.247-.274.421-.32.513-.32s.266.046.512.32.501.713.731 1.32c.398 1.048.676 2.483.742 4.11zm3.97 1.5h-3.97c.066 1.627.344 3.062.742 4.11.23.607.485 1.046.73 1.32.247.274.421.32.513.32s.266-.046.512-.32.501-.713.731-1.32c.398-1.048.676-2.483.742-4.11m1.501-1.5c-.067-1.777-.368-3.399-.84-4.643a8 8 0 0 0-.287-.666 6.51 6.51 0 0 1 4.098 5.309zm2.971 1.5h-2.971c-.067 1.777-.368 3.399-.84 4.643a8 8 0 0 1-.287.666 6.51 6.51 0 0 0 4.098-5.309m-9.943 0H1.543a6.51 6.51 0 0 0 4.098 5.309 8 8 0 0 1-.287-.666c-.472-1.244-.773-2.866-.84-4.643",clipRule:"evenodd"})}),(0,n.Y)("defs",{children:(0,n.Y)("clipPath",{children:(0,n.Y)("path",{fill:"#fff",d:"M0 16h16V0H0z"})})})]})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="GlobeIcon";let l=s},810616:(e,t,a)=>{a.d(t,{x:()=>i});var n=a(646171);function r(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}let i=e=>{var t;return(t=function*(){let{data:t}=yield(0,n.p)().post("folders",e);return t},function(){var e=this,a=arguments;return new Promise(function(n,i){var o=t.apply(e,a);function s(e){r(o,n,i,s,l,"next",e)}function l(e){r(o,n,i,s,l,"throw",e)}s(void 0)})})()}},812965:(e,t,a)=>{a.d(t,{I:()=>u,e:()=>l});var n=a(692738),r=a(181105),i=a(644178),o=a(926265),s=a(370437);class l extends r.Un{errorLogType=i.ZQ.ApplicationError;errorName=o.U.GenericNetworkRequestError;displayMessage;constructor({error:e,cause:t,details:a={},errorName:n,displayMessage:r}){const i=a.errorCode?(0,s.qD)(a.errorCode):void 0;super(e.message,{...a,errorCode:i},{cause:t}),n&&(this.errorName=n),r&&(this.displayMessage=r),this.isUserError=void 0!==a.status&&a.status>=400&&a.status<500}}let u=(0,n.createContext)({clearError:()=>{},setError:e=>{},type:""})},820894:(e,t,a)=>{a.d(t,{Av:()=>y,BA:()=>I,GZ:()=>C,KE:()=>l,MM:()=>v,Os:()=>E,PO:()=>o,R1:()=>d,Uc:()=>T,Wo:()=>s,Wr:()=>b,XV:()=>_,YY:()=>i,_B:()=>A,_r:()=>m,mW:()=>g,n8:()=>p,pZ:()=>h,pr:()=>f,s$:()=>S,t6:()=>c,y0:()=>u});var n=a(699406),r=a(443927);let i=r.M.DEFAULT_TOKEN_CHANNEL,o=r.M.channelNames.indexOf("COMMENTS"),s=r.M.channelNames.indexOf("WHITESPACE"),l=",",u=".",c=" ",d="(",m=")",p=n.LX.line,f=n.LX.softline,g=e=>e.disableHardlines?n.LX.line:n.LX.hardline,h=n.LX.indent,E=n.LX.group,b=e=>t=>h(E(t,{id:e})),T=e=>[p,E(e)],y=n.LX.breakParent,I=n.LX.ifBreak,A=n.LX.lineSuffix,v=n.LX.align;class S extends Error{constructor(){super("Encountered SetConfigurationContext in a formatting context. This context cannot be formatted due to bad grammar structure. Just default back to old formatter for this case.")}}class _ extends Error{constructor(){super("Encountered ResetConfigurationContext in a formatting context. This context cannot be formatted due to bad grammar structure. Just default back to old formatter for this case.")}}let C={printWidth:100,indentationWidth:2,indentationStyle:"spaces",numNewLinesBetweenClauses:0,numNewLinesBetweenStatements:1,commaPosition:"end",keywordCasing:"none",identifierCasing:"none",functionNameCasing:"none",shouldExpandCommaLists:!0,shouldExpandExpressions:!0,shouldExpandCaseStatements:!0,shouldExpandInStatements:!1,shouldExpandBetweenConditions:!1,shouldBreakOnJoinSections:!0}},823910:(e,t,a)=>{a.d(t,{S:()=>i,_:()=>r});var n=a(141078);let r=(0,n.J1)`
  query ListRecommendedDomains($pageSize: Int, $pageToken: String, $recommendationTraceId: String)
  @component(name: "LakehouseCollaboration.DiscoveryAndRecommendation") {
    recommendationGetDomainRecommendations(
      input: { pageSize: $pageSize, pageToken: $pageToken, recommendationTraceId: $recommendationTraceId }
    ) {
      domainRecommendations {
        domain {
          domainId
          tagKey
          tagMetadata {
            description
          }
          icon {
            name
            color
          }
          subtitle
          description
          draft
          effectiveDraft
          technicalOwnerIds
          businessOwnerIds
          createTime
          parentDomainId
        }
        relevanceScore
      }
      recommendationTraceId
      nextPageToken
      apiError {
        code
        message
        helpUrl
        traceId
      }
    }
  }
`;function i(e,t={}){return(0,n.IT)(r,{variables:e,...t})}},830690:(e,t,a)=>{a.d(t,{dK:()=>v,mB:()=>I,vI:()=>S});var n=a(610435),r=a(956935),i=a(644091),o=a(759794),s=a(91958),l=a.n(s),u=a(692738),c=a(79128),d=a(224098),m=a(429608),p=a(497895),f=a(217247),g=a(955210),h=a(74438),E=a(53333),b=a(639712),T=a(123252),y=a(661748);function I(e,t){let a=`.${e}-pagination`,n=`.${e}-pagination-item`,i=`.${e}-pagination-item-link`,o=`.${e}-pagination-item-active`,s=`.${e}-pagination-item-ellipsis`,l=`.${e}-pagination-next`,u=`.${e}-pagination-prev`,c=`.${e}-pagination-jump-next`,d=`.${e}-pagination-jump-prev`,m=`.${e}-pagination-options-quick-jumper`,p=`.${e}-pagination-options-size-changer`,f=`.${e}-pagination-options`,g=`.${e}-pagination-disabled`,h=`.${e}-select-selector`,E=`.${e}-select-dropdown`,T={"span[role=img]":{color:t.colors.textSecondary,"> *":{color:"inherit"}},[n]:{backgroundColor:"none",border:"none",color:t.colors.textSecondary,"&:focus-visible":{outline:"auto"},"> a":{color:t.colors.textSecondary,textDecoration:"none","&:hover":{color:t.colors.actionDefaultTextHover},"&:active":{color:t.colors.actionDefaultTextPress}},"&:hover":{backgroundColor:t.colors.actionDefaultBackgroundHover},"&:active":{backgroundColor:t.colors.actionDefaultBackgroundPress}},[o]:{backgroundColor:t.colors.actionDefaultBackgroundPress,color:t.colors.actionDefaultTextPress,border:"none","> a":{color:t.colors.actionDefaultTextPress},"&:focus-visible":{outline:"auto"},"&:hover":{backgroundColor:t.colors.actionDefaultBackgroundPress,color:t.colors.actionDefaultTextPress}},[i]:{border:"none",color:t.colors.textSecondary,"&[disabled]":{display:"none"},"&:hover":{backgroundColor:t.colors.actionDefaultBackgroundHover},"&:active":{backgroundColor:t.colors.actionDefaultBackgroundPress},"&:focus-visible":{outline:"auto"}},[s]:{color:"inherit"},[`${l}, ${u}, ${c}, ${d}`]:{color:t.colors.textSecondary,"&:hover":{backgroundColor:t.colors.actionDefaultBackgroundHover},"&:active":{backgroundColor:t.colors.actionDefaultBackgroundPress},"&:focus-visible":{outline:"auto"},[`&${g}`]:{pointerEvents:"none"}},[`&${a}.mini, ${a}.mini`]:{[`${n}, ${l}, ${u}, ${c}, ${d}`]:{height:"32px",minWidth:"32px",width:"auto",lineHeight:"32px"},[p]:{marginLeft:4},[`input,  ${f}`]:{height:"32px"},[`${h}`]:{boxShadow:t.shadows.xs,borderColor:t.colors.actionDefaultBorderDefault}},[`${m} > input`]:{borderColor:t.colors.actionDefaultBorderDefault},[`${E}`]:{borderColor:t.colors.actionDefaultBorderDefault}},y=(0,b.dg)(T);return(0,r.AH)(y)}let A=l()((e,t)=>I(e,t),(e,t)=>`${(0,b.H6)(t)}|${e}`),v=function({currentPageIndex:e,pageSize:t=10,numTotal:a,onChange:r,style:s,hideOnSinglePage:l,dangerouslySetAntdProps:c,componentId:f,analyticsEvents:g}){let h=(0,y.W)("databricks.fe.observability.defaultComponentView.pagination",!1),{classNamePrefix:b,theme:I}=(0,p.wn)(),{pageSizeSelectAriaLabel:v,pageQuickJumperAriaLabel:S,..._}=c??{},C=(0,u.useRef)(null),R=(0,u.useMemo)(()=>g??(h?[d.s7.OnValueChange,d.s7.OnView]:[d.s7.OnValueChange]),[g,h]),O=(0,d.ei)({componentType:d.v_.Pagination,componentId:f,analyticsEvents:R,valueHasNoPii:!0}),N=(0,u.useCallback)((e,t)=>{O.onValueChange(e),r(e,t)},[O,r]),{elementRef:k}=(0,E.z)({onView:O.onView}),w=(0,i.SV)([C,k]);return(0,u.useEffect)(()=>{if(C&&C.current){let e=C.current.querySelector(`.${b}-select-selection-search-input`);e&&e.setAttribute("aria-label",v??"Select page size");let t=C.current.querySelector(`.${b}-pagination-options-quick-jumper > input`);t&&t.setAttribute("aria-label",S??"Go to page")}},[S,v,b]),(0,n.Y)(m.wC,{children:(0,n.Y)("div",{ref:w,children:(0,n.Y)(o.A,{...(0,T.VG)(),css:A(b,I),current:e,pageSize:t,responsive:!1,total:a,onChange:N,showSizeChanger:!1,showQuickJumper:!1,size:"small",style:s,hideOnSinglePage:l,..._,...O.dataComponentProps})})})},S=function({onNextPage:e,onPreviousPage:t,hasNextPage:a,hasPreviousPage:r,nextPageText:i="Next",previousPageText:o="Previous",pageSizeSelect:{options:s,default:l,getOptionText:m,onChange:E,ariaLabel:b="Select page size"}={},componentId:T="design_system.cursor_pagination",analyticsEvents:y=[d.s7.OnValueChange],valueHasNoPii:I}){let{theme:A,classNamePrefix:v}=(0,p.wn)(),[S,_]=(0,u.useState)(l),C=(0,u.useMemo)(()=>y,[y]),R=`${T}.page_size`,O=(0,d.ei)({componentType:d.v_.LegacySelect,componentId:R,analyticsEvents:C,valueHasNoPii:I});return(0,n.FD)("div",{css:{display:"flex",flexDirection:"row",gap:A.spacing.sm,[`.${v}-select-selector::after`]:{content:"none"}},...O.dataComponentProps,children:[(0,n.Y)(c.$n,{componentId:`${T}.previous_page`,icon:(0,n.Y)(f.A,{}),disabled:!r,onClick:t,type:"tertiary",children:o}),(0,n.Y)(c.$n,{componentId:`${T}.next_page`,endIcon:(0,n.Y)(g.A,{}),disabled:!a,onClick:e,type:"tertiary",children:i}),s&&(0,n.Y)(h._v,{"aria-label":b,value:String(S),css:{width:120},onChange:e=>{let t=Number(e);E?.(t),_(t),O.onValueChange(e)},children:s.map(e=>(0,n.Y)(h._v.Option,{value:String(e),children:(m||(e=>`${e} / page`))(e)},e))})]})}},831358:(e,t,a)=>{a.d(t,{E:()=>i,j:()=>r});var n=a(141078);let r=(0,n.J1)`
  fragment RichUserData on RichUser {
    id
    email
    fullname
  }
`,i=(0,n.J1)`
  fragment AclPrincipalData on AclPrincipal {
    id
    displayName
    uniqueName
    kind
  }
`},831706:(e,t,a)=>{a.d(t,{Z:()=>i,y:()=>o});var n,r,i=((n={}).NETWORK_ONLY="NETWORK_ONLY",n.CACHE_FIRST="CACHE_FIRST",n),o=((r={}).INITIAL="INITIAL",r.REFRESH="REFRESH",r.NEXT_PAGE="NEXT_PAGE",r)},832646:(e,t,a)=>{a.d(t,{H:()=>c});var n=a(154313),r=a(844760);function i(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function o(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var o=e.apply(t,a);function s(e){i(o,n,r,s,l,"next",e)}function l(e){i(o,n,r,s,l,"throw",e)}s(void 0)})}}let s="/ajax-api/2.0/workspace";class l extends Error{errorCode;constructor(e,t){super(e),this.errorCode=t}}function u(e,t=!0){return o(function*(){if(!e.ok){let t=yield e.text(),a;try{let e=JSON.parse(t);t=e.message,a=e.error_code}catch{}throw new l(t,a)}return(t?e.json():e.text()).then(e=>e)})()}let c={export:(e,t)=>o(function*(){let{source:a="SOURCE"}=t||{};return u((yield(0,r.S)(`${s}/export?path=${encodeURIComponent(e)}&format=${a}&direct_download=true`)),!1)})(),import:(e,t,a)=>o(function*(){let i=n.Buffer.from(t,"utf8").toString("base64"),{source:o,language:l}=a||{};return u((yield(0,r.S)(`${s}/import`,{method:"POST",body:JSON.stringify({content:i,format:o,language:l,overwrite:!0,path:e})})))})(),getStatus(e){return o(function*(e,{requestExportFormat:t=!1,requestWsfsMetadata:a=!1}={}){let n=new URLSearchParams;return n.append("path",e),t&&n.append("return_export_info","true"),a&&n.append("return_wsfs_metadata","true"),u((yield(0,r.S)(`${s}/get-status?`+n.toString())))}).apply(this,arguments)},list:e=>o(function*(){return u((yield(0,r.S)(`${s}/list?path=${encodeURIComponent(e)}`)))})()}},833509:(e,t,a)=>{a.a(e,async(e,n)=>{try{a.d(t,{l:()=>l,s:()=>s});var r=a(284336),i=a(780202),o=e([i]);function s(e){let t={sqlNodes:[],typedNodes:[],noNodes:[],failed:[],sqlNodeParseTrees:[],sqlNodeQueryText:[],nodeTypeFrequency:new Map,stats:{successCount:0,failureCount:0,pureTypedQueries:0,pureSqlQueries:0,mixedQueries:0,singleSqlNodeQueries:0}},a=console.error;console.error=()=>{};try{for(let a of e)(0,i.e)(a,t)}finally{console.error=a}return t}function l(e,t){let a=e.sqlNodeParseTrees.length>0?(0,r.m)(e.sqlNodeParseTrees,e.sqlNodeQueryText):[],n=e.sqlNodes.filter(e=>"multiple-operator"===e.fallbackReason),i=e.sqlNodes.filter(e=>"parser-limitation"===e.fallbackReason);return{metadata:{totalQueries:t,successfulParses:e.stats.successCount,failedParses:e.stats.failureCount,sqlFallbackCount:e.sqlNodes.length,multipleOperatorFallbackCount:n.length,singleOperatorFallbackCount:i.length,typedNodeCount:e.typedNodes.length,noNodeCount:e.noNodes.length,frequentSubstructures:a.length,generatedAt:new Date().toISOString(),pureTypedQueries:e.stats.pureTypedQueries,pureSqlQueries:e.stats.pureSqlQueries,mixedQueries:e.stats.mixedQueries,singleSqlNodeQueries:e.stats.singleSqlNodeQueries},sqlFallbackQueries:e.sqlNodes,multipleOperatorQueries:n,singleOperatorSqlQueries:i,failedQueries:e.failed,noNodeQueries:e.noNodes,frequentSubstructures:a}}i=(o.then?(await o)():o)[0],n()}catch(e){n(e)}})},836075:(e,t,a)=>{a.d(t,{AJ:()=>f,Al:()=>u,LH:()=>d,bJ:()=>c,ev:()=>i,iq:()=>m,sT:()=>l,vM:()=>o,vY:()=>p,yu:()=>s});var n=a(483588),r=a(923509);function i(e){if(!e)return n.ZfP.LANGUAGE_UNSPECIFIED;switch(e.toUpperCase()){case"PYTHON":return n.ZfP.PYTHON;case"SQL":return n.ZfP.SQL;case"R":return n.ZfP.R;case"SCALA":return n.ZfP.SCALA;case"MARKDOWN":case"MD":return n.ZfP.MARKDOWN;case"SH":return n.ZfP.SHELL;default:return n.ZfP.LANGUAGE_UNSPECIFIED}}function o(e){let t=(e,t)=>{if(t&&t.valueType===r.vV.Range)return{rangeValue:{minRangeValue:t.min,maxRangeValue:t.max,rangeValueType:"PARAMETER_DATA_TYPE_"+t.rangeValueType.toUpperCase()}};if(t&&t.valueType===r.vV.Array)return{stringValues:{stringValues:t.values}};if(e)return{stringValues:{stringValues:[e]}}};return Object.entries(e).map(([e,a])=>{let n=a.typedWidgetInfo?.options,i=n?{displayType:"PARAMETER_DISPLAY_TYPE_"+n.widgetDisplayType.toUpperCase(),...n.widgetDisplayType===r.vZ.Dropdown?{choices:n.choices,fixedDomain:n.fixedDomain,multiselect:n.multiselect}:{}}:void 0;return{key:e,value:t(a.currentValue,a.currentComplexValue),name:a.typedWidgetInfo?.name,type:"PARAMETER_DATA_TYPE_"+a.typedWidgetInfo?.parameterDataType.toUpperCase(),label:a.typedWidgetInfo?.label,defaultValue:t(a.typedWidgetInfo?.defaultValue,a.typedWidgetInfo?.defaultComplexValue),rangeInfoOptions:n?.widgetDisplayType===r.vZ.Range?i:void 0,textInfoOptions:n?.widgetDisplayType===r.vZ.Text?i:void 0,dropdownInfoOptions:n?.widgetDisplayType===r.vZ.Dropdown?i:void 0}})}function s(e){return{content:e.code,language:i(e.language),name:e.name,id:e.id,notebookCellIndex:e.notebookCellIndex?String(e.notebookCellIndex):void 0}}function l(e){if(!e)return;let t=e.toUpperCase();if("AZURE"===t)return n.a3K.AZURE;if("AWS"===t)return n.a3K.AWS;if("GCP"===t)return n.a3K.GCP;return n.a3K.CLOUD_UNSPECIFIED}function u(e){return e.map(e=>({name:e.name,columns:e.columns.map(e=>({name:e.name,comment:""===e.comments?void 0:e.comments})),comment:""===e.comments?void 0:e.comments}))}function c(e){return e.map(e=>({name:`${e.catalog_name}.${e.schema_name}.${e.name}`,columns:e.columns?.map(e=>({name:e.name})),comment:""===e.comment?void 0:e.comment}))}function d(e){let t=Object.values(e?.CurrentCodeTableMap??{})??[],a=Object.values(e?.NeighborCodeTableMap??{})??[],n=Object.values(e?.favoriteTableMap??{})??[],r=Object.values(e?.searchTableMap??{})??[],i=Object.values(e?.feBasedSearchTableMap??{})??[],o=[...t.map(e=>e.foreignKeyTables).flat(),...a.map(e=>e.foreignKeyTables).flat(),...n.map(e=>e.foreignKeyTables).flat()].filter(e=>void 0!==e).map(e=>({name:e.name,columns:e.columns.map(e=>({name:e}))}));return{currentCodeTables:p(t),neighborCodeTables:p(a),favoriteTables:p(n),searchTables:i.length>0?c(i):u(r),foreignTables:o}}function m(e){if(!e)return;return e.map(e=>{switch(e.type){case"table":let t=e.object;return{contextType:n.xUJ.USER_TABLE,label:e.label,table:u([{...t,name:`${t.catalogName}.${t.schemaName}.${t.tableName}`}])[0]};case"variable":let a=e.object;return{contextType:n.xUJ.VARIABLE,label:e.label,variable:a};default:return}}).filter(e=>void 0!==e)}function p(e){return e.map(e=>({name:e.name,columns:e.columns?.map(e=>{let t;try{t=e.detailedColumnInfo}catch(e){}return{name:e.name,type:e.type,comment:""===e.comment?void 0:e.comment??void 0,tags:e.tags,partition:e.partition??void 0,detailedColumnInfo:t}}),comment:""===e.metadata.comment?void 0:e.metadata.comment,foreignTableNames:e.foreignKeyTables?.map(e=>e.name),foreignKeysInfos:e.foreignKeysInfo?.map(e=>({columns:e.columns,toTable:e.toTable,toTableColumns:e.toTableColumns})),topQueries:e.topQueries?.map(e=>({content:e.content,id:e.id})),topJoins:e.topJoins?.map(e=>({name:`${e.catalogName}.${e.schemaName}.${e.tableName}`})),tableType:e.tableType}))}function f(e){if(!e)return;return e.map(e=>({name:e.name,schema:e.schema,variableType:e.type}))}},837213:(e,t,a)=>{a.d(t,{Eq:()=>y,Hr:()=>I,Lx:()=>A,nA:()=>b,u4:()=>T});var n=a(692738),r=a(141078),i=a(327152),o=a(441535),s=a(169750),l=a(761543),u=a(267647),c=a(149264),d=a(360217),m=a(570512),p=a(608135),f=a(935963),g=a(329427);function h(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}let E=`You are the Databricks AI Assistant. Your job is to answer user help questions about the Databricks product. Do NOT make assumptions on or discuss the implementation of yourself (the assistant). Today is ${new Date().toDateString()}.`,b=`You may be given document passages that are marked between BEGIN_RELATED_PASSAGES and END_RELATED_PASSAGES.
- Each passage starts with a PASSAGE_START and finishes by PASSAGE_END.
- A passage contains an ID between SOURCE_START: and SOURCE_END.
- A passage contains knowledge between CONTENT_START: and CONTENT_END.

Focus deeply and reply to the original user question based on your native knowledge and the knowledge passages that you think are helpful.
If you use any of these passages for answering the user question, remember their exact ID, as we will use them as references.

Only return the final answer to the user's question and the most relevant references if any below.

Here is the format of the response:
<Add your answer to the question without refering to any document passages>

<Add a maximum of 3 links of the best references. Prioritize SQL queries and Notebook references to be half of them if they are good. Use the Markdown format exactly like below, with \\[\\"\\] as-is as for the name of the link and ID as the actual link value. ID must come from a document passage and might be a URL or path, just keep it exactly the same as you found it. All reference links are on the same line without "References" as prefix. Output nothing if no references>
[\\[\\"\\]](ID) [\\[\\"\\]](ID) [\\[\\"\\]](ID)
`,T=`You MUST cite the most relevant contexts that answer the question. Do not mention any irrelevant contexts. You MUST ADHERE to the following instructions for citing contexts:
- to cite a context, enclose its index located above the summary with curly brackets at the end of the corresponding sentence, for example "Ice is less dense than water{1}{2}." or "Paris is the capital of France{1}{4}{5}."
- NO SPACE between the last word and the citation, and ALWAYS use curly brackets. Only use this format to cite context. NEVER include a References section at the end of your answer.
- to cite a context for a code block, ALWAYS put the citation at the end of the code block with a new line, for example, "\`\`\`python
print('Hello, World!')
\`\`\`
{1}".
- If you don't know the answer or the premise is incorrect, explain why.
If the contexts are empty or unhelpful, DO NOT cite but answer the query as well as you can with existing knowledge.`,y=`
ADD up to 3 follow-ups questions proposing actionable examples not already asked before. Be concise with a maximum of 10 words/70 characters and use imperative form with no question mark. Output nothing if no follow-up questions or in doubt. Use the markdown format like below and do not forget the #followup link. Do not add any sort of section header for this.
[<Add your follow-up>](#followup) [<Add your follow-up>](#followup) [<Add your follow-up>](#followup)
`,I="generalAgent",A=()=>{let e=(0,r.mK)(),t=(0,i.a)(),{canCreate:a}=(0,p.n)({enabled:!0});return(0,n.useMemo)(()=>({agent:{name:I,makeContext:(0,u.x)({makeContext:({context:n,contextConfig:r,userMessage:i,promptId:u})=>{var p;return(p=function*(){let p={index:1,sourceMap:{}},f={contextObject:{...n??{},merlinSupportInfo:{canCreateCase:a}},apolloClient:e,agentName:I,lakesenseTraceId:u??"",userMessage:i,promptBuilderOptions:{isCompletion:(0,o.W)("databricks.fe.editor.enableCitationV2",!1)},citations:p},g={...v,[s.E.ASSISTANT_INSTRUCTIONS]:{enabled:!0},[s.E.MERLIN_SUPPORT]:{enabled:!0},...r},h={[s.E.REFERENCE_OBJECT]:()=>(0,l.wS)({...f}),[s.E.ASSISTANT_INSTRUCTIONS]:()=>(0,c.lx)({...f}),[s.E.MERLIN_SUPPORT]:()=>(0,d.yn)({...f})},E=Object.keys(h).filter(e=>g[e]?.enabled),b=yield Promise.all(E.map(e=>h[e]?.()).filter(e=>void 0!==e)),T=(0,m.Qn)(b);return{...T,citations:p,rawContext:{...T.rawContext,pageId:t?.pageId}}},function(){var e=this,t=arguments;return new Promise(function(a,n){var r=p.apply(e,t);function i(e){h(r,a,n,i,o,"next",e)}function o(e){h(r,a,n,i,o,"throw",e)}i(void 0)})})()},agentName:I}),instructions:e=>E+(e.includes("gpt-4")?(0,o.W)("databricks.fe.editor.enableCitationV2",!1)?`

${T}`:`

${b}`:"")+"\n\n"+(0,g.J)(!1)+(e.includes("gpt-4")?`
${y}`:""),userMessageMatchesAgent:()=>!1,extractHistory:e=>e,get model(){return(0,f.f)()}}}),[e,t?.pageId,a])},v={[s.E.REFERENCE_OBJECT]:{enabled:!0}}},841710:(e,t,a)=>{a.d(t,{DV:()=>c,LC:()=>o,W9:()=>i,iq:()=>s,pR:()=>u});var n,r=a(993533),i=((n={}).DASHBOARD_LAKEVIEW="DASHBOARD_LAKEVIEW",n.NOTEBOOK="NOTEBOOK",n.QUERY="QUERY",n.UC_TABLE="UC_TABLE",n.DATA_ROOM="DATA_ROOM",n.UC_TABLE_METRIC_VIEW="UC_TABLE_METRIC_VIEW",n.UC_MODEL="UC_MODEL",n.ENDPOINT="ENDPOINT_CENTRIC_ENDPOINT",n.APP="APP",n);let o=Object.entries({DASHBOARD_LAKEVIEW:r.iId.DASHBOARD_LAKEVIEW,NOTEBOOK:r.iId.NOTEBOOK,QUERY:r.iId.QUERY,UC_TABLE:r.iId.TABLE,DATA_ROOM:r.iId.DATA_ROOM,UC_TABLE_METRIC_VIEW:r.iId.TABLE,UC_MODEL:r.iId.ML_MODEL,ENDPOINT_CENTRIC_ENDPOINT:r.iId.ML_ENDPOINT,APP:r.iId.APP}).reduce((e,[t,a])=>({...e,[a]:e[a]??t}),{}),s=e=>Object.keys(o).includes(e),l={[r.z$1.ALERT]:r.iId.ALERT,[r.z$1.DASHBOARD]:r.iId.DASHBOARD_REDASH,[r.z$1.DASHBOARD_V3]:r.iId.DASHBOARD_LAKEVIEW,[r.z$1.EXPERIMENT]:r.iId.MLFLOW_EXPERIMENT,[r.z$1.FILE]:r.iId.FILE,[r.z$1.FOLDER]:r.iId.FOLDER,[r.z$1.JOB]:r.iId.JOB,[r.z$1.LIBRARY]:r.iId.LIBRARY,[r.z$1.NOTEBOOK]:r.iId.NOTEBOOK,[r.z$1.PROJECT]:r.iId.PROJECT,[r.z$1.QUERY]:r.iId.QUERY,[r.z$1.UC_TABLE]:r.iId.TABLE,[r.z$1.DATA_ROOM]:r.iId.DATA_ROOM,[r.z$1.UC_MODEL]:r.iId.ML_MODEL,[r.z$1.ENDPOINT_CENTRIC_ENDPOINT]:r.iId.ML_ENDPOINT,[r.z$1.APP]:r.iId.APP},u=l,c=Object.entries(l).reduce((e,[t,a])=>({...e,[a]:t}),{})},842972:(e,t,a)=>{a.d(t,{m:()=>r});var n,r=((n={}).CONFIGURATION="configuration",n.NOTEBOOKS="notebooks",n.LIBRARIES="libraries",n.SPARK_UI="sparkUi",n.DRIVER_LOGS="driverLogs",n.METRICS="metrics",n.SPARK_CLUSTER_UI="sparkClusterUi",n.APPS="apps",n.EVENTS="events",n)},845766:(e,t,a)=>{a.d(t,{SQ:()=>h});var n=a(610435),r=a(956935),i=a(251545),o=a(91958),s=a.n(o),l=a(692738),u=a(532111),c=a(429608),d=a(497895),m=a(639712),p=a(123252);let f=s()(({theme:e,clsPrefix:t})=>(({theme:e,clsPrefix:t})=>{let a=`.${t}-form-item-label`,n=`.${t}-form-item-control-input`,i=`.${t}-form-item-explain`,o=`.${t}-form-item-has-error`;return(0,r.AH)({[a]:{fontWeight:e.typography.typographyBoldFontWeight,lineHeight:e.typography.lineHeightBase,".anticon":{fontSize:e.general.iconFontSize}},[i]:{fontSize:e.typography.fontSizeSm,margin:0,[`&${i}-success`]:{color:e.colors.textValidationSuccess},[`&${i}-warning`]:{color:e.colors.textValidationDanger},[`&${i}-error`]:{color:e.colors.textValidationDanger},[`&${i}-validating`]:{color:e.colors.textSecondary}},[n]:{minHeight:e.general.heightSm},[`${n} input[disabled]`]:{border:"none"},[`&${o} input:focus`]:(0,m.dg)({boxShadow:"none"}),...(0,c.Cx)(e.options.enableAnimation)})})({theme:e,clsPrefix:t}),({theme:e,clsPrefix:t})=>`${(0,m.H6)(e)}|${t}`);function g(e,t){if(!("object"==typeof e&&null!==e&&"validator"in e&&"function"==typeof e.validator))return e;let a=t.wrap(e.validator);if(a===e.validator)return e;return{...e,validator:a}}let h=Object.assign((0,l.forwardRef)(function({dangerouslySetAntdProps:e,children:t,...a},r){let o={...a,layout:a.layout||"vertical",requiredMark:a.requiredMark||!1};return(0,n.Y)(c.wC,{children:(0,n.Y)(i.A,{...(0,p.VG)(),...o,colon:!1,ref:r,...e,children:(0,n.Y)(c.dg,{children:t})})})}),{Item:({dangerouslySetAntdProps:e,children:t,...a})=>{let{theme:r,classNamePrefix:o}=(0,d.wn)(),s=(0,u.HY)(),m=(0,l.useMemo)(()=>(function(e,t){if(!e||0===e.length)return e;let a=!1,n=e.map(e=>{let n=function(e,t){if("function"==typeof e)return a=>g(e(a),t);return g(e,t)}(e,t);return a||=n!==e,n});return a?n:e})(a.rules,s),[s,a.rules]);return(0,n.Y)(c.wC,{children:(0,n.Y)(i.A.Item,{...(0,p.VG)(),...a,rules:m,css:f({theme:r,clsPrefix:o}),...e,children:t})})},List:i.A.List,useForm:i.A.useForm})},846947:(e,t,a)=>{a.d(t,{CN:()=>p,Ew:()=>g,FK:()=>f,HZ:()=>d,I1:()=>m,JF:()=>l,Ml:()=>u,ok:()=>s,q:()=>c,ur:()=>E,vU:()=>h});var n=a(611824);if(13057==a.j)var r=a(817148);if(13057==a.j)var i=a(115957);var o=a(441535);let s=()=>(0,o.W)("databricks.fe.clustercontrols.enableBudgetPolicyAdminUiPublicPreview",!1),l=()=>(0,o.W)("databricks.fe.clustercontrols.enableCanCreatePolicyCheck",!1),u=()=>((0,o.W)("budget_limit",null)??(0,o.W)("databricks.budgetPolicies.enableBudgetPolicyLimit",!1))&&(0,i.zl)(r.g3.COMPUTE_BUDGET_POLICY_LIMIT),c=()=>(0,o.W)("databricks.fe.budget_limit.experiment.monthly_limit_model.enabled",!1),d=()=>(0,o.W)("databricks.fe.budget_policy.enableBudgetPolicyAdminUIForGA",!1),m=()=>(0,o.W)("databricks.budget_policy.enableFeaturesRequiredForGA",!1)&&(0,o.W)("databricks.fe.budget_policy.enableSystemDefaultPolicySortPreference",!1),p=()=>(0,n._)()&&(0,o.W)("databricks.fe.budget_policy.enableTagPolicyIntegration",!1),f=()=>(0,o.W)("databricks.fe.budget_policy.renameServerlessPolicy",!1),g=()=>(0,o.W)("usage_rate_limit",null)??(0,o.W)("databricks.budgetPolicies.enableBudgetPolicyRateLimit",!1),h=()=>(0,o.W)("databricks.fe.budget_policy.enableFetchAllUIPagination",!1),E=()=>(0,o.W)("databricks.fe.budget_policy.enableDefaultPolicyAdminAccess",!1)},848001:(e,t,a)=>{a.d(t,{K:()=>L,LI:()=>M,Lg:()=>P,kn:()=>N,lU:()=>D,sj:()=>k});var n=a(610435),r=a(615693),i=a(325382),o=a(397136),s=a(126001),l=a(323935),u=a(485065),c=a(452233),d=a(563521),m=a(1459),p=a(319241),f=a(753427),g=a(401160),h=a(161926),E=a(24027),b=a(617933),T=a(823825),y=a(873393),I=a(815367),A=a(350487),v=a(918071),S=a(946590),_=a(889187),C=a(483588),R=a(707076),O=a(771994);let N={[C.FKF.ALERT]:O.An.ALERT,[C.FKF.DASHBOARD]:O.An.DASHBOARD,[C.FKF.DASHBOARD_V3]:O.An.DASHBOARD,[C.FKF.FILE]:O.An.FILE,[C.FKF.FOLDER]:O.An.FOLDER,[C.FKF.JOB]:O.An.JOB,[C.FKF.PIPELINE]:O.An.PIPELINE,[C.FKF.LIBRARY]:O.An.LIBRARY,[C.FKF.MARKETPLACE_LISTING]:O.An.MARKETPLACE,[C.FKF.ENDPOINT_CENTRIC_ENDPOINT]:O.An.ENDPOINT,[C.FKF.UC_MODEL]:O.An.MODEL,[C.FKF.UC_FUNCTION]:O.An.FUNCTION,[C.FKF.EXPERIMENT]:O.An.EXPERIMENT,[C.FKF.NOTEBOOK]:O.An.NOTEBOOK,[C.FKF.PROJECT]:O.An.REPO,[C.FKF.QUERY]:O.An.QUERY,[C.FKF.UC_TABLE]:O.An.TABLE,[C.FKF.UC_VOLUME]:O.An.VOLUME,[C.FKF.DATA_ROOM]:O.An.DATA_ROOM},k={[O.If.ALERT]:O.An.ALERT,[O.If.ALERT_V2]:O.An.ALERT_V2,[O.If.APP]:O.An.APP,[O.If.DBSQL_DASHBOARD]:O.An.DASHBOARD,[O.If.FILE]:O.An.FILE,[O.If.FOLDER]:O.An.FOLDER,[O.If.JOB]:O.An.JOB,[O.If.PIPELINE]:O.An.PIPELINE,[O.If.LIBRARY]:O.An.LIBRARY,[O.If.MARKETPLACE]:O.An.MARKETPLACE,[O.If.ML_ENDPOINT]:O.An.ENDPOINT,[O.If.ML_MODEL]:O.An.MODEL,[O.If.FUNCTION]:O.An.FUNCTION,[O.If.MLFLOW_EXPERIMENT]:O.An.EXPERIMENT,[O.If.NOTEBOOK]:O.An.NOTEBOOK,[O.If.DESIGNER_FILE]:O.An.DESIGNER_FILE,[O.If.PARTNER]:O.An.PARTNER,[O.If.PROJECT]:O.An.REPO,[O.If.QUERY]:O.An.QUERY,[O.If.TABLE]:O.An.TABLE,[O.If.VOLUME]:O.An.VOLUME,[O.If.DATA_ROOM]:O.An.DATA_ROOM,[O.If.METRIC_VIEW]:O.An.METRIC_VIEW},w={[C.iId.ALERT]:O.An.ALERT,[C.iId.ALERT_V2]:O.An.ALERT_V2,[C.iId.DASHBOARD_LAKEVIEW]:O.An.DASHBOARD,[C.iId.DASHBOARD_REDASH]:O.An.DASHBOARD,[C.iId.FILE]:O.An.FILE,[C.iId.FOLDER]:O.An.FOLDER,[C.iId.JOB]:O.An.JOB,[C.iId.PIPELINE]:O.An.PIPELINE,[C.iId.LIBRARY]:O.An.LIBRARY,[C.iId.MARKETPLACE]:O.An.MARKETPLACE,[C.iId.ML_ENDPOINT]:O.An.ENDPOINT,[C.iId.ML_MODEL]:O.An.MODEL,[C.iId.FUNCTION]:O.An.FUNCTION,[C.iId.MLFLOW_EXPERIMENT]:O.An.EXPERIMENT,[C.iId.NOTEBOOK]:O.An.NOTEBOOK,[C.iId.DESIGNER_FILE]:O.An.DESIGNER_FILE,[C.iId.PARTNER]:O.An.PARTNER,[C.iId.PROJECT]:O.An.REPO,[C.iId.QUERY]:O.An.QUERY,[C.iId.TABLE]:O.An.TABLE,[C.iId.VOLUME]:O.An.VOLUME,[C.iId.DATA_ROOM]:O.An.DATA_ROOM,[C.iId.APP]:O.An.APP};function M(e,t){if(!e)return null;let a=e.toUpperCase();if(O.im[a])return O.im[a];if((t??P()).includes(a))return a;return null}let P=(e=!1)=>(0,R.bz)(!0,e).flatMap(e=>{let t=k[e];return t?[t]:[]}),D=e=>Object.values(C.iId).filter(t=>{if(t===C.iId.DASHBOARD_REDASH)return!1;let a=w[t];return void 0!==a&&e.includes(a)}),L=e=>{switch(e){case O.An.TABLE:return(0,n.Y)(r.A,{});case O.An.VOLUME:return(0,n.Y)(i.A,{});case O.An.NOTEBOOK:return(0,n.Y)(o.A,{});case O.An.DESIGNER_FILE:return(0,n.Y)(s.A,{});case O.An.JOB:return(0,n.Y)(l.A,{});case O.An.PIPELINE:return(0,n.Y)(u.A,{});case O.An.QUERY:return(0,n.Y)(c.A,{});case O.An.DASHBOARD:return(0,n.Y)(d.A,{});case O.An.FOLDER:return(0,n.Y)(m.A,{});case O.An.FILE:return(0,n.Y)(p.A,{});case O.An.REPO:return(0,n.Y)(f.A,{});case O.An.LIBRARY:return(0,n.Y)(g.A,{});case O.An.ALERT:case O.An.ALERT_V2:return(0,n.Y)(h.A,{});case O.An.APP:return(0,n.Y)(E.A,{});case O.An.EXPERIMENT:return(0,n.Y)(b.A,{});case O.An.MODEL:return(0,n.Y)(T.A,{});case O.An.ENDPOINT:return(0,n.Y)(y.A,{});case O.An.FUNCTION:return(0,n.Y)(I.A,{});case O.An.PARTNER:return(0,n.Y)(A.A,{});case O.An.MARKETPLACE:return(0,n.Y)(v.A,{});case O.An.DATA_ROOM:return(0,n.Y)(S.A,{});case O.An.METRIC_VIEW:return(0,n.Y)(_.A,{});default:return(0,n.Y)(p.A,{})}}},848068:(e,t,a)=>{a.d(t,{BK:()=>g,E8:()=>c,OG:()=>h,YI:()=>p,f3:()=>f,t4:()=>m,yG:()=>d});var n=a(886100),r=a(22191),i=a(278983),o=a(388735);let s=3e3,l=20,u=10,c=(e,t,a,s=!1)=>{s&&n.iT.sev2(r.Es.Assistant,"Error in context building",JSON.stringify(t)),(0,i.y)("clientsideEvent",{eventType:"ConfigurableContextBuildingError",eventName:`default-${e}`,...t},a),(0,o.Km)({event_type:o.FS.CONFIGURABLE_CONTEXT_BUILDING_ERROR,event_name:t?.eventName??`default-${e}`,...t?.source?{source:t.source}:{},...a?{json_blob:a}:{}})},d=(e,t,a=!1)=>{a&&n.iT.sev2(r.Es.Assistant,"Error in context building",JSON.stringify(e)),(0,i.y)("clientsideEvent",{eventType:"ConfigurableContextBuildingError",eventName:"default-all",...e},t),(0,o.Km)({event_type:o.FS.CONFIGURABLE_CONTEXT_BUILDING_ERROR,event_name:e?.eventName??"default-all",...e?.source?{source:e.source}:{},...t?{json_blob:t}:{}})},m="Request timed out",p=2e3,f=5e3;function g(e){return new Promise((t,a)=>{setTimeout(()=>{a(Error(m))},e)})}let h=(e,t={traceMaxLength:s,traceMaxLinesStart:l,traceMaxLinesEnd:u})=>{if(!e)return null;let a=e.split("\n"),n=0,r=0;for(let e=0;e<Math.min(t.traceMaxLinesStart,a.length)&&!(n+a[e].length>t.traceMaxLength);e++)n+=a[e].length,r=e;let i=a.slice(0,r+1).join("\n");if(a.length<=t.traceMaxLinesStart)return{stackTrace:i,isTrimmed:i.length<e.length};r=a.length;for(let e=a.length-1;e>=Math.max(t.traceMaxLinesStart,a.length-t.traceMaxLinesEnd)&&!(n+a[e].length>t.traceMaxLength);e--)n+=a[e].length,r=e;let o=a.slice(r,a.length).join("\n");return{stackTrace:`${i}
...
${o}`,isTrimmed:!0}}},848276:(e,t,a)=>{a.d(t,{q:()=>i});var n=a(692738),r=a(931645);function i(){let[e,t]=(0,n.useState)(null),a=(0,n.useRef)([]);if(e)throw e;(0,n.useEffect)(()=>()=>{a.current.forEach(e=>e.cancel())},[]);let i=(0,n.useCallback)((e,n)=>{let i=("measure"===e?r.xP:r.yo)(n);return a.current.push(i),i.catch(e=>t(t=>t||e)).finally(()=>{a.current=a.current.filter(e=>e!==i)}),i},[]);return{measure:(0,n.useCallback)(e=>i("measure",e),[i]),mutate:(0,n.useCallback)(e=>i("update",e),[i])}}},848343:(e,t,a)=>{a(106390)},852683:(e,t,a)=>{a.d(t,{F:()=>r});let n=[["none",/^(?:[^\\"]|\\.)*$/],["simple",/^\s*"(?:[^\\"]|\\.)*"\s*$/],["complex",/^[^"]*(?:\s|^)(?:"(?:[^\\"]|\\.)*"(?:\s[^"]+)?(?:\s|$))+$/],["unpadded",/^[^"]*(?:"(?:[^\\"]|\\.)*"[^"]*)+$/]];function r(e){for(let[t,a]of n)if(null!==a.exec(e))return t;return"invalid"}},853762:(e,t,a)=>{a.d(t,{Z:()=>l,f:()=>u});var n=a(610435);a(692738);var r=a(79570),i=a(342411),o=a(834405);let s={noPrefix:e=>({intervals:[{seconds:31536e3,timeAgoMessage:t=>e.formatMessage({id:"NF6ePS",defaultMessage:"{count, plural, =1 {1 year} other {# years}} ago"},{count:t})},{seconds:2592e3,timeAgoMessage:t=>e.formatMessage({id:"N79Rdb",defaultMessage:"{count, plural, =1 {1 month} other {# months}} ago"},{count:t})},{seconds:86400,timeAgoMessage:t=>e.formatMessage({id:"XwD3hV",defaultMessage:"{count, plural, =1 {1 day} other {# days}} ago"},{count:t})},{seconds:3600,timeAgoMessage:t=>e.formatMessage({id:"i1Hj20",defaultMessage:"{count, plural, =1 {1 hour} other {# hours}} ago"},{count:t})},{seconds:60,timeAgoMessage:t=>e.formatMessage({id:"ZO8PZt",defaultMessage:"{count, plural, =1 {1 minute} other {# minutes}} ago"},{count:t})},{seconds:1,timeAgoMessage:t=>e.formatMessage({id:"gQB+Vs",defaultMessage:"{count, plural, =1 {1 second} other {# seconds}} ago"},{count:t})}],justNowMessage:e.formatMessage({id:"ZOsiNc",defaultMessage:"just now"})}),viewed:e=>({intervals:[{seconds:31536e3,timeAgoMessage:t=>e.formatMessage({id:"zu9xi3",defaultMessage:"Viewed {count, plural, =1 {1 year} other {# years}} ago"},{count:t})},{seconds:2592e3,timeAgoMessage:t=>e.formatMessage({id:"FOzgxE",defaultMessage:"Viewed {count, plural, =1 {1 month} other {# months}} ago"},{count:t})},{seconds:86400,timeAgoMessage:t=>e.formatMessage({id:"IwEVOL",defaultMessage:"Viewed {count, plural, =1 {1 day} other {# days}} ago"},{count:t})},{seconds:3600,timeAgoMessage:t=>e.formatMessage({id:"S9xuJ2",defaultMessage:"Viewed {count, plural, =1 {1 hour} other {# hours}} ago"},{count:t})},{seconds:60,timeAgoMessage:t=>e.formatMessage({id:"zcf18B",defaultMessage:"Viewed {count, plural, =1 {1 minute} other {# minutes}} ago"},{count:t})},{seconds:1,timeAgoMessage:t=>e.formatMessage({id:"McIjuI",defaultMessage:"Viewed {count, plural, =1 {1 second} other {# seconds}} ago"},{count:t})}],justNowMessage:e.formatMessage({id:"k0JWck",defaultMessage:"Viewed just now"})}),modified:e=>({intervals:[{seconds:31536e3,timeAgoMessage:t=>e.formatMessage({id:"iSKhoe",defaultMessage:"Modified {count, plural, =1 {1 year} other {# years}} ago"},{count:t})},{seconds:2592e3,timeAgoMessage:t=>e.formatMessage({id:"PbUKAJ",defaultMessage:"Modified {count, plural, =1 {1 month} other {# months}} ago"},{count:t})},{seconds:86400,timeAgoMessage:t=>e.formatMessage({id:"C7JdMh",defaultMessage:"Modified {count, plural, =1 {1 day} other {# days}} ago"},{count:t})},{seconds:3600,timeAgoMessage:t=>e.formatMessage({id:"7XNU4O",defaultMessage:"Modified {count, plural, =1 {1 hour} other {# hours}} ago"},{count:t})},{seconds:60,timeAgoMessage:t=>e.formatMessage({id:"EZ/c8g",defaultMessage:"Modified {count, plural, =1 {1 minute} other {# minutes}} ago"},{count:t})},{seconds:1,timeAgoMessage:t=>e.formatMessage({id:"NGVQnA",defaultMessage:"Modified {count, plural, =1 {1 second} other {# seconds}} ago"},{count:t})}],justNowMessage:e.formatMessage({id:"K7/6Pt",defaultMessage:"Modified just now"})})},l=({date:e,intl:t,tooltipFormatOptions:a,prefix:n="noPrefix"})=>{let r=Math.round((new Date().getTime()-e.getTime())/1e3),i="";try{i=(0,o.r6)(e,t,a)}catch(e){}let l=s[n](t);for(let e of l.intervals){let t=Math.floor(r/e.seconds);if(t>=1)return{displayText:e.timeAgoMessage(t),tooltipTitle:i}}return{displayText:l.justNowMessage,tooltipTitle:i}},u=({date:e,tooltipFormatOptions:t,prefix:a})=>{let{displayText:o,tooltipTitle:s}=l({date:e,intl:(0,i.tz)(),tooltipFormatOptions:t,prefix:a});return(0,n.Y)(r.m,{componentId:"web-shared.time-ago",content:s,children:(0,n.Y)("span",{children:o})})}},858347:(e,t,a)=>{a.d(t,{J:()=>u,m:()=>c});var n=a(610435);a(692738);var r=a(342411),i=a(236560),o=a(352185),s=a(217985),l=a(842972);let u=({reason:e,editorMode:t})=>{if(c.isMaxExecutionReason(e)){let a=!!e.clusterId,i=t=>e.clusterId?.id?(0,n.Y)(s.N,{componentId:"notebook.detachReason.clusterViewLink",to:o.A6.cluster.view(e.clusterId.id,l.m.NOTEBOOKS),asAnchorTag:!0,children:t}):(0,n.Y)(s.N,{componentId:"notebook.detachReason.clusterMainPageLink",to:o.A6.clusterMainPage(o.FI.InteractiveListPage),asAnchorTag:!0,children:t});return(0,n.Y)("span",{title:e.exceptionMessage,children:"notebook"===t?(0,n.Y)(r.sA,{id:"z9fFQm",defaultMessage:"Can’t attach this notebook because the compute has reached the attached contexts limit. Detach a notebook and retry. <link>{isClusterId, select, true {Compute details} other {Clusters} }</link>",values:{isClusterId:a,link:i}}):(0,n.Y)(r.sA,{id:"8pqN+Q",defaultMessage:"Can’t attach this file because the compute has reached the attached contexts limit. Detach a file and retry. <link>{isClusterId, select, true {Compute details} other {Clusters} }</link>",values:{isClusterId:a,link:i}})})}if(c.isNoActiveContextReason(e))return(0,n.Y)("span",{title:e.exceptionMessage,children:(0,n.Y)(r.sA,{id:"+EJIXR",defaultMessage:"Your {editorMode, select, notebook {notebook} query {query} other {file} } runtime state was cleared from the compute (most likely due to being idle).",values:{editorMode:t}})});if(c.isDatabaseInstancePermissionsErrorReason(e)){let t=e.exceptionMessage?.split("PERMISSION_DENIED:");if(t&&t.length>1)return(0,n.Y)("span",{title:e.exceptionMessage,children:t[1].trim()})}return(0,n.Y)("span",{title:e.exceptionMessage,children:e.summary})};class c{static isMaxExecutionReason(e){return/Too many execution contexts are open/.test(e.summary)}static isNoActiveContextReason(e){return/Your (?:notebook|file|query) context was cleared/.test(e.summary)}static isDatabaseInstancePermissionsErrorReason(e){return(0,i.Du)(e.clusterId?.id)&&/PERMISSION_DENIED/.test(e.exceptionMessage||"")}}},860148:(e,t,a)=>{a.d(t,{z:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.isOnlyHonorForceUpdatesEnabled.killswitch",!1)}},860279:(e,t,a)=>{a.d(t,{M3:()=>u,Ut:()=>c,Z8:()=>l});var n=a(181607),r=a(751777),i=a(831706),o=a(148026);function s(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function l(e,t){if(!e)return t;if(e.aborted){t.catch(()=>{});try{e.throwIfAborted()}catch(e){return Promise.reject(e)}}return new Promise((a,n)=>{let r=()=>{e.removeEventListener("abort",r);try{e.throwIfAborted()}catch(e){n(e)}};e.addEventListener("abort",r),t.then(t=>{e.removeEventListener("abort",r),a(t)},t=>{e.removeEventListener("abort",r),n(t)})})}let u=e=>{let t=e.getDataRef();return t.current.retrievedChildrenHashSet??=new Set,t.current.failedChildrenHashSet??=new Set,t.current.paginationParamsMap??={},t},c=(e,t,a,c,d)=>{var m;return(m=function*(){let s,m=e.getConfig(),p=m.dataResolver,f=u(e),g=f.current.treeAbortController?.signal,h=a===i.y.INITIAL?"loadingItemChildren":"fetchingItemChildren";if(e.getState()[h].includes(t))return;let E=[],b=!1;f.current.failedChildrenHashSet.delete((0,o.z)(t,d));try{if(g?.throwIfAborted(),e.applySubStateUpdate(h,e=>e.includes(t)?e:[...e,t]),a===i.y.NEXT_PAGE){let a=(0,o.z)(t,d),n=f.current.paginationParamsMap[a];if(!n)throw Error(`No pagination params found for item ${t}, asyncLoadChildren with type 'next-page' shouldn't have been called initially`);let r=m.dataResolver,{children:i,metadata:u}=(yield l(g,Promise.resolve(r.fetchNextPage?.(t,n,{context:d,tree:e},c))))??{};E=i??[],s=u}if(a===i.y.INITIAL||a===i.y.REFRESH)if("getChildrenWithData"in p){let{children:a,metadata:n}=yield l(g,Promise.resolve(p.getChildrenWithData(t,{context:d,tree:e},c)));E=a??[],s=n}else{let{children:a,metadata:n}=yield l(g,Promise.resolve(p.getChildren(t,{context:d,tree:e},c)));E=a??[],s=n}let{defaultExpandedItems:r,childrenIdsMap:u,childrenDataMap:T,itemMetadataMap:y}=(0,n.a)({itemId:t,children:E,metadata:s,type:"recursive"});Object.entries(y).forEach(([e,t])=>{let a=(0,o.z)(e,d),n=m.getPaginationParamsFromMetadata?.(e,t);n?f.current.paginationParamsMap[a]=n:delete f.current.paginationParamsMap[a]}),Object.entries(T).forEach(([t,a])=>{"addItemToCache"in p&&p.addItemToCache(t,a,{context:d,tree:e}),m.onLoadedItem?.(t,a)}),Object.entries(u).forEach(([t,n])=>{let r=(0,o.z)(t,d);f.current.retrievedChildrenHashSet.add(r),a===i.y.NEXT_PAGE?p.appendChildrenToCache?.(t,n,{context:d,tree:e}):"addChildrenToCache"in p&&p.addChildrenToCache?.(t,n,{context:d,tree:e}),m.onLoadedChildren?.(t,n)}),b=null!=m.rootItemId&&m.rootItemId in u,function(e,t,a){if(0===t.length)return;if(a!==i.y.REFRESH)e.applySubStateUpdate("expandedItems",e=>{let a=t.filter(t=>!e.includes(t));return a.length>0?[...e,...a]:e});else{let a=t.find(e=>e.startsWith("for_you_section:/")&&e.endsWith("/active_tables"));a&&e.applySubStateUpdate("expandedItems",e=>{if(e.includes(a))return e;return[...e,a]})}}(e,r,a),e.rebuildTree()}catch(e){if(g?.aborted)return;console.error(e),f.current.failedChildrenHashSet.add((0,o.z)(t,d))}finally{e.applySubStateUpdate(h,e=>e.includes(t)?e.filter(e=>e!==t):e),g?.aborted&&e.rebuildTree();let a=m.eventIdentifier;b&&a&&((0,r.lh)(a),m.onLoadedTree?.())}},function(){var e=this,t=arguments;return new Promise(function(a,n){var r=m.apply(e,t);function i(e){s(r,a,n,i,o,"next",e)}function o(e){s(r,a,n,i,o,"throw",e)}i(void 0)})})()}},861403:(e,t,a)=>{a.d(t,{b:()=>p});var n=a(778529),r=a.n(n),i=a(536717),o=a.n(i),s=a(692738),l=a(342411),u=a(595338);let c=/summary:\s*(.*?)(?=,\s*data:)/s;var d=a(482921),m=a(308879);function p(e,t=!0,a=!1){let n=(0,l.tz)(),{isEnabled:i}=(0,m.L)();return(0,s.useMemo)(()=>{let s=e;if(r()(s))return;if((0,u.F0)(e)?s=function(e,t){if(t.response?.status===429)return e.formatMessage({id:"O57kaK",defaultMessage:"Error 429: Too many requests. Please wait a moment and try again. If the issue persists, consider adjusting your request frequency or reaching out to support for assistance."});{let e=t.response?.data;return e?.message??e}}(n,e):e instanceof Error&&(s=function(e,t){if(t&&e.cause&&"string"==typeof e.cause)return e.cause;if("SqlQueryError"!==e.name)return e.message;var a=e.message;let n=a.match(/Details:\s*([^,]*)/);if(n&&n.length>=0)return n[0];return a}(e,a)),o()(s)){var l=s,m=n,p=t,f=i;if(l.includes("Catalog namespace is not supported")||l.includes("Unity catalog is not enabled"))switch((0,d.G)(p,f)){case d.M.ONLY_CLUSTER:return m.formatMessage({id:"Z2EuPV",defaultMessage:"This cluster is incompatible with sample data for Unity Catalog tables. Please use Databricks Runtime 11.1 or higher or contact Databricks for assistance."});case d.M.ONLY_WAREHOUSE:return m.formatMessage({id:"Uvfp1K",defaultMessage:"This warehouse is incompatible with sample data for Unity Catalog tables. Please use Databricks Runtime 11.1 or higher or contact Databricks for assistance."});case d.M.WAREHOUSE_AND_CLUSTER:return m.formatMessage({id:"u0m7LZ",defaultMessage:"This warehouse or cluster is incompatible with sample data for Unity Catalog tables. Please use Databricks Runtime 11.1 or higher or contact Databricks for assistance."});default:return""}let e=l.match(c);if(e)return e[0].trim();return l}return JSON.stringify(s)},[e,n,a,t,i])||""}},862294:(e,t,a)=>{a.d(t,{GF:()=>g,dD:()=>f,zx:()=>p});var n=a(692738),r=a(686560),i=a(141078),o=a(595615),s=a(641760);function l(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}let u=(0,i.J1)`
  fragment SettingsApiErrorFragment on ApiError {
    code
    message
    helpUrl
    traceId
  }
`,c=(0,i.J1)`
  fragment BooleanSettingFragment on SettingspolicySetting {
    isMutable
    ref
    value {
      boolVal {
        value
      }
    }
  }
`,d=(0,i.J1)`
  query DisableLegacyAccessSettingQuery($input: SettingspolicyserviceGetSettingWithoutSettingNameRestRequestInput!)
  @component(name: "DBSQLX.CatalogExplorer") {
    settingspolicyserviceGetSettingRestWithoutSettingName(input: $input) {
      apiError {
        ...SettingsApiErrorFragment
      }
      sessionToken
      setting {
        ...BooleanSettingFragment
      }
    }
  }
  ${u}
  ${c}
`,m=(e,t,a)=>({input:{key:{typeName:"workspace",name:e},setting:{typeName:"disable_legacy_access",name:""},...t&&{sessionToken:t},...a}});function p(e){let t=(()=>{let e=(0,r.d)("currentWorkspaceId",""),[t]=(0,i._l)(d,{variables:m(e),fetchPolicy:"cache-and-network"});return(0,n.useCallback)(()=>({queryKey:["DISABLE_LEGACY_ACCESS_SETTING_QUERY"],queryFn:()=>{var e;return(e=function*(){let{data:e}=yield t();return e},function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){l(i,n,r,o,s,"next",e)}function s(e){l(i,n,r,o,s,"throw",e)}o(void 0)})})()}}),[t])})();return(0,o.AO)({queryKey:t().queryKey,queryFn:t().queryFn,keepPreviousData:!0,...e,enabled:(0,s.n_)()})}function f(e){return!!(0,s.n_)()&&!!e?.settingspolicyserviceGetSettingRestWithoutSettingName?.setting?.value?.boolVal?.value}function g(){var e;let t,a=(0,s.n_)(),n=(e={skip:!a},t=(0,r.d)("currentWorkspaceId",""),(0,i.IT)(d,{variables:m(t),fetchPolicy:"cache-and-network",skip:e?.skip}));return{data:!!a&&!!n.data?.settingspolicyserviceGetSettingRestWithoutSettingName?.setting?.value?.boolVal?.value,loading:n.loading,error:n.error}}},872843:(e,t,a)=>{a.d(t,{H:()=>r});var n=a(278983);function r(e,t){if("function"!=typeof t)throw Error("callbackFn must be a function");let a=a=>{let r=t();r&&("BackboneUtils"!==e&&"BackboneRpcMixin"!==e&&(0,n.y)("clientsideEvent",{eventType:"beforeWindowUnload",eventName:e}),a.preventDefault(),a.returnValue=r);return r};return window.addEventListener("beforeunload",a),()=>{window.removeEventListener("beforeunload",a)}}},872991:(e,t,a)=>{a.d(t,{s:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.ES.1633451.killswitch",!1)}},873092:(e,t,a)=>{a.d(t,{e:()=>i,w:()=>o});var n=a(441535),r=a(611824);function i(){return(0,r._)()&&(0,n.W)("databricks.unifiedTagging.enableCertificationStatusSystemTag",!1)}function o(){return(0,r._)()&&((0,n.W)("databricks.unifiedTagging.enableLegacyCertificationSystemTags",!0)||i())}},873765:(e,t,a)=>{a.d(t,{_D:()=>p,ap:()=>E,mf:()=>m});var n=a(610435),r=a(692738),i=a(549342),o=a(382908),s=a(67656),l=a(441535),u=a(22191),c=a(747129),d=a(536152);function m(e,t={}){let{linkWeb:a=!0,linkPath:n=!1,linkErrorClass:r=!1,linkCommand:i=!1,linkCachedCommand:o=!1}=t,s=[];a&&s.push(S),n&&s.push(_),i&&s.push(R),o&&s.push(O);try{let t=[];if(r){let a=e.match(C.regex);if(a&&a.length>=2){let[n,r]=a;t.push(C.createAnchor(r,r)),e=e.substring(n.length)}}return function e(t,a,n,r){let i;if(n>=a.length||r.length>v)return t.push(r),t;let o=a[n],{regex:s}=o;s.lastIndex=0;let l=0;for(;null!==(i=s.exec(r));){let s=r.substring(l,i.index);s&&e(t,a,n+1,s);let u=i[0],c=String(t.length),d=o.createAnchor(c,u);t.push(d),l=i.index+u.length}let u=r.substring(l);return u&&e(t,a,n+1,u),t}(t,s,0,e)}catch(t){return d.Q.throttledSev2BurnRate(u.Es.Notebooks,"autolink",c.i1.P999,c.Ip.Min100,!1,t),e}}function p(e,t={}){let a=m(e,t);if("string"==typeof a)return a;return a.map(e=>"string"==typeof e?e:(0,i.renderToStaticMarkup)(e)).join("")}let f="\\u0000-\\u0020\\u007f-\\u009f",g=RegExp("(?:[a-zA-Z][a-zA-Z0-9+.-]{2,}:\\/\\/|www\\.)[^\\s"+f+'"]{2,}[^\\s'+f+"\"')}\\],:;.!?]","ug"),h=RegExp(`${/((?:~|\.)?(?:\/[^/ ]*)+)/.source}${/(?::([\d]+))?(?::([\d]+))?/.source}`,"g"),E=/^\s*\[([0-9A-Z_.]+)\]/,b=/(command-\d+:\d+)|(<command-\d+>(?:,\s*line\s+\d+)?)|(&lt;command-\d+&gt;(?:,\s*line\s+\d+)?)/gm,T=/\d+/,y=/"(\/root|\/home\/[^/]+)\/\.ipykernel\/\d+\/command-\d+-\d+"/g,I=/command-(\d+)-\d+/,A=/^https?:\/\//i,v=2e4,S=new class{regex=g;createAnchor(e,t){let a=t.startsWith("www.")?`https://${t}`:t;if((0,l.W)("databricks.fe.notebook.ansiWebLinkerSchemeWhitelist",!0)&&!A.test(a))return(0,n.Y)(r.Fragment,{children:t},e);return(0,n.Y)(o.o.Link,{componentId:"notebook.autoLink.webLink",href:a,rel:"noopener noreferrer",target:"_blank",children:t},e)}},_=new class{regex=h;createAnchor(e,t){return(0,n.Y)(o.o.Link,{componentId:"notebook.autoLink.pathLink","data-path":t,children:t},e)}},C=new class{regex=E;createAnchor(e,t){let a=s.R.getDocUrl(t),i=a?(0,n.Y)(o.o.Link,{componentId:"notebook.command.output.errorClass.link",href:a,rel:"noopener noreferrer",target:"_blank",children:t}):t;return(0,n.FD)(r.Fragment,{children:["[",i,"]"]},e)}},R=new class{regex=b;commandNumberRegex=T;createAnchor(e,t){let a=t?.match(this.commandNumberRegex),r=t?.replace("&lt;","<").replace("&gt;",">");if(!a)return(0,n.Y)(n.FK,{children:r});let i=a[0],s=t?.match(/,\s*line\s+(\d+)/)??t?.match(/^command-\d+:(\d+)$/),l=s?s[1]:void 0;return(0,n.Y)(o.o.Link,{componentId:"notebook.autoLink.commandLink",role:"link","data-command-id":i,"data-line-number":l,children:r},e)}},O=new class{regex=y;commandNumberRegex=I;createAnchor(e,t){let a=t.match(this.commandNumberRegex);if(!a)return(0,n.Y)(n.FK,{children:t});let r=a[1],i=`<command-${r}>`;return(0,n.Y)(o.o.Link,{componentId:"notebook.autoLink.commandLink",role:"link","data-command-id":r,children:i},e)}}},874938:(e,t,a)=>{a.d(t,{R:()=>E});var n=a(610435),r=a(956935),i=a(148070),o=a(692738),s=a(224098),l=a(429608),u=a(497895),c=a(943844),d=a(53333),m=a(123252),p=a(661748);function f(e){if(null==e)return;if(Array.isArray(e))return e.length>0?String(e[0]):void 0;return String(e)}function g(e){if(null==e)return;if(Array.isArray(e))return e.map(String);return[String(e)]}function h({header:e,panelKey:t,collapsible:a,forceRender:r,destroyInactivePanel:o,children:s,dangerouslyAppendEmotionCSS:l,dangerouslySetAntdProps:u,isLeftAligned:d,clsPrefix:m}){let p=u?.showArrow!==!1,f=[`${m}-item`,u?.className].filter(Boolean).join(" ");return(0,n.FD)(i.q7,{value:t,disabled:"disabled"===a,"data-radix-accordion-item":"",className:f,style:u?.style,css:l,children:[(0,n.Y)(i.Y9,{css:{margin:0,fontWeight:"inherit",fontSize:"inherit"},children:(0,n.Y)(i.l9,{"data-radix-accordion-trigger":"",className:`${m}-header`,children:d?(0,n.FD)(n.FK,{children:[p&&(0,n.Y)(c.A,{"data-radix-accordion-chevron":"",className:`${m}-arrow`}),e]}):(0,n.FD)(n.FK,{children:[e,p&&(0,n.Y)(c.A,{"data-radix-accordion-chevron":"",className:`${m}-arrow`})]})})}),(0,n.Y)(i.UC,{"data-radix-accordion-content":"",className:`${m}-content`,forceMount:!!(r||!1===o)||void 0,children:(0,n.Y)("div",{"data-radix-accordion-content-inner":"",className:`${m}-content-box`,children:s})})]})}function E({displayMode:e="multiple",activeKey:t,defaultActiveKey:a,onChange:c,alignContentToEdge:b=!1,chevronAlignment:T="right",secondaryStyle:y=!1,contentPadding:I=!0,headerWidth:A="full",destroyInactivePanel:v,analyticsEvents:S,componentId:_,valueHasNoPii:C,dangerouslyAppendEmotionCSS:R,children:O,collapsible:N,dangerouslySetAntdProps:k,useLegacyAccordion:w,...M}){let P=(0,p.W)("databricks.fe.observability.defaultComponentView.accordion",!1),{theme:D,getPrefixedClassName:L}=(0,u.wn)(),x=L("collapse"),U=[x,k?.className].filter(Boolean).join(" "),F="left"===T,$=(0,o.useMemo)(()=>S??(P?[s.s7.OnValueChange,s.s7.OnView]:[s.s7.OnValueChange]),[S,P]),V=(0,s.ei)({componentType:s.v_.Accordion,componentId:_,analyticsEvents:$,valueHasNoPii:C}),{elementRef:Y}=(0,d.z)({onView:V.onView}),W=(0,o.useCallback)(e=>{let t=e||void 0;V.onValueChange(t),void 0!==t?c?.(t):c?.(void 0)},[V,c]),B=(0,o.useCallback)(e=>{V.onValueChange(JSON.stringify(e)),c?.(e)},[V,c]),G=o.Children.toArray(O).filter(e=>o.isValidElement(e)),J="single"===e?f(t):g(t),z="single"===e?f(a):g(a),q=G.map(e=>{let{header:t,collapsible:a,forceRender:r,children:i,dangerouslyAppendEmotionCSS:o,dangerouslySetAntdProps:s}=e.props,l=String(e.key??"").replace(/^\.\$/,"");return(0,n.Y)(h,{header:t,panelKey:l,collapsible:a??N,forceRender:r,destroyInactivePanel:v,dangerouslyAppendEmotionCSS:o,dangerouslySetAntdProps:s,isLeftAligned:F,clsPrefix:x,children:i},l)}),H=(0,o.useMemo)(()=>[function({theme:e,alignContentToEdge:t,isLeftAligned:a,secondaryStyle:n,contentPadding:i,headerWidth:o}){let s={border:"0 none",background:"none","& > [data-radix-accordion-item]":{border:"0 none"},"& [data-radix-accordion-trigger]":{all:"unset",boxSizing:"border-box",display:"flex",alignItems:"center",width:"fit-content"===o?"fit-content":"100%",padding:"6px 44px 6px 0",lineHeight:e.typography.lineHeightBase,color:n?e.colors.textSecondary:e.colors.textPrimary,fontWeight:n?400:600,cursor:"pointer",flexDirection:a?"row-reverse":"row",justifyContent:a?"flex-end":"flex-start",gap:8*!!a,position:"relative","&:not([data-disabled]):hover":{color:e.colors.actionPrimaryBackgroundHover,"& [data-radix-accordion-chevron]":{color:e.colors.actionPrimaryBackgroundHover}},"&:not([data-disabled]):active":{color:e.colors.actionPrimaryBackgroundPress,"& [data-radix-accordion-chevron]":{color:e.colors.actionPrimaryBackgroundPress}},"&:focus-visible":{outlineColor:`${e.colors.actionDefaultBorderFocus}`,outlineStyle:"auto"},"&[data-disabled]":{cursor:"not-allowed",opacity:.5}},"& [data-radix-accordion-chevron]":{color:e.colors.textSecondary,fontSize:e.general.iconFontSize,transition:"transform 200ms ease",position:a?"static":"absolute",right:a?void 0:12*!t},'& [data-radix-accordion-trigger][data-state="open"] [data-radix-accordion-chevron]':{transform:"rotate(180deg)"},"& [data-radix-accordion-content]":{overflow:"hidden",backgroundColor:e.colors.backgroundPrimary},'& [data-radix-accordion-content][data-state="open"]':{animation:"radix-accordion-slide-down 200ms ease-out"},'& [data-radix-accordion-content][data-state="closed"]':{animation:"radix-accordion-slide-up 200ms ease-out",display:"none"},"& [data-radix-accordion-content-inner]":{padding:i?t?"8px 0px 16px":"8px 16px 16px":0},"@keyframes radix-accordion-slide-down":{from:{height:0},to:{height:"var(--radix-accordion-content-height)"}},"@keyframes radix-accordion-slide-up":{from:{height:"var(--radix-accordion-content-height)"},to:{height:0}},...(0,l.Cx)(e.options.enableAnimation)};return(0,r.AH)(s)}({theme:D,alignContentToEdge:b,isLeftAligned:F,secondaryStyle:y,contentPadding:I,headerWidth:A}),R,(0,m.De)(D)],[D,b,F,y,I,A,R]);if("single"===e)return(0,n.Y)(i.bL,{type:"single",value:J,defaultValue:z,onValueChange:W,collapsible:!0,className:U,style:k?.style,css:H,ref:Y,...V.dataComponentProps,...M,children:q});return(0,n.Y)(i.bL,{type:"multiple",value:J,defaultValue:z,onValueChange:B,className:U,style:k?.style,css:H,ref:Y,...V.dataComponentProps,...M,children:q})}},876855:(e,t,a)=>{a.d(t,{HV:()=>c,Ig:()=>p,KE:()=>f,R0:()=>i,Zi:()=>s,cc:()=>r,xM:()=>u,zK:()=>l});var n=a(778580);let r=new Set(["version","source","filter","dimensions","fields","measures","joins","materialization","comment","parameters"]),i=new Set(["version","source","filter","dimensions","fields","measures","joins","parameters"]);function o(e){if(!e||"object"!=typeof e||!("fields"in e)||"dimensions"in e)return e;let{fields:t,...a}=e;return{...a,dimensions:t}}let s=new Set(["0.1","1.0","1.1"]),l=["day","days","month","months","year","years"],u=["inclusive","exclusive"];function c(e){let t,a=[];try{t="string"==typeof e?p(e):e}catch(e){return{isValid:!1,errors:["Invalid YAML"]}}if(!t||"object"!=typeof t)return{isValid:!1,errors:["Metric view must be a non-null object"]};let n=o(t),i=Object.keys(n).filter(e=>!r.has(e));i.length>0&&a.push(`Disallowed top-level fields: ${i.join(", ")}`);let l=n.version;l?s.has(String(l))||a.push(`Invalid version "${l}". Allowed versions: ${Array.from(s).join(", ")}`):a.push("Missing required field: version"),Array.isArray(n.measures)&&0!==n.measures.length||a.push("measures must be a non-empty array"),Array.isArray(n.dimensions)&&0!==n.dimensions.length||a.push("dimensions must be a non-empty array");let u=(e,t)=>{if(!Array.isArray(e))return;e.forEach((e,n)=>{if(!e||"object"!=typeof e)return void a.push(`${t}[${n}] must be an object`);e.name||a.push(`${t}[${n}] is missing required field: name`),e.expr||a.push(`${t}[${n}] is missing required field: expr`)})};return u(n.measures,"measures"),u(n.dimensions,"dimensions"),{isValid:0===a.length,errors:a}}let d=n.Ay.DEFAULT_SCHEMA,m=new n.Ay.Schema({implicit:d.compiledImplicit.map(e=>"tag:yaml.org,2002:int"===e.tag||"tag:yaml.org,2002:float"===e.tag?new n.Ay.Type(e.tag,{kind:"scalar",resolve:e.resolve,construct:e=>e}):e),explicit:d.compiledExplicit});function p(e,t){return o(n.Ay.load(e,{schema:m,...t}))}function f(e,t){return n.Ay.dump(e,t)}},886110:(e,t,a)=>{a.d(t,{CG:()=>c,aD:()=>f,gy:()=>p,kC:()=>m});var n=a(141078),r=a(831358);if(13057==a.j)var i=a(726583);var o=a(543963);let s=(0,n.J1)`
  fragment RunsListTableColumns_RunNode on Run {
    status
    active
    message
    runId
    idInJob
    startTime
    durationMillis
    queueDuration @include(if: $includeQueueDuration)
    queueReason @include(if: $includeQueueReason)
    trigger
    triggerInfo {
      runJobTask {
        runId
        jobId
        taskKey
        parentRunId
      }
      table {
        details {
          tableName
          version
          commitTimestamp
        }
      }
    }
    clusterId
    sparkContextId
    clusterInfo {
      attributes {
        sparkVersion
        enableServerlessCompute
        kind
      }
    }
    overridingParameters {
      jarParams
      notebookParams {
        key
        value
      }
      pythonParams
      sparkSubmitParams
      pythonNamedParams {
        key
        value
      }
      sqlParams {
        key
        value
      }
      dbtCommands
      pipelineParams {
        fullRefresh
      }
    }
    jobParameters @include(if: $includeJobParameters) {
      name
      default
      value
    }
  }
`,l=(0,n.J1)`
  fragment LakeflowRunJobRunFragment on LakeflowLakeflowRunJobRun {
    jobParameters {
      name
      default
      value
    }
    overridingParameters {
      jarParams
      notebookParams {
        key
        value
      }
      pythonParams
      sparkSubmitParams
      pythonNamedParams {
        key
        value
      }
      sqlParams {
        key
        value
      }
      dbtCommands
      pipelineParams {
        fullRefresh
      }
    }
    durationWarningExceeded
    durationInfo {
      startTime
      endTime
      executionDuration
      setupDuration
      cleanupDuration
      runDuration
      queueDuration @include(if: $includeQueueDuration)
      waitDuration
      estimatedWaitingEndTime
        @includeSafex(name: "databricks.elasticspark.performance.enableWaitingState", defaultValue: false)
    }
    triggerType
    triggerInfo {
      runJobTask {
        runId
        jobId
        taskKey
        parentRunId
      }
      table {
        details {
          tableName
          version
          commitTimestamp
        }
      }
      sqlCondition @includeSafex(name: "sql_cond_triggers", defaultValue: false) {
        conditionEvaluationSatisfied
        conditionEvaluationSqlSessionId
      }
    }
  }
  ${o.WB}
`,u=(0,n.J1)`
  fragment LakeflowRunPipelineUpdateFragment on LakeflowLakeflowRunPipelineUpdate {
    cause
    details {
      pipelineTask {
        runId
        jobId
        taskKey
        parentRunId
      }
    }
    parameters @includeSafex(name: "pipeline_parameters", defaultValue: false) {
      key
      value
    }
  }
`,c=(0,n.J1)`
  fragment RunsListTableColumns_JobsRunNode on JobsRun {
    jobId
    runId
    numberInJob
    runType
    creatorUserName
    creatorUser {
      ...RichUserData
    }
    creatorPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
      ...AclPrincipalData
    }
    runName
    originalAttemptRunId
    durationInfo {
      startTime
      endTime
      executionDuration
      setupDuration
      cleanupDuration
      runDuration
      queueDuration @include(if: $includeQueueDuration)
      waitDuration
      estimatedWaitingEndTime
        @includeSafex(name: "databricks.elasticspark.performance.enableWaitingState", defaultValue: false)
    }
    state {
      resultState
      lifeCycleState
      userCancelledOrTimedout
      stateMessage
      durationWarningExceeded
      queueReason @include(if: $includeQueueReason)
    }
    status @include(if: $includeRunStatus) {
      ...RunStatusFragment
    }
    trigger
    triggerInfo {
      runJobTask {
        runId
        jobId
        taskKey
        parentRunId
      }
      table {
        details {
          tableName
          version
          commitTimestamp
        }
      }
      sqlCondition @includeSafex(name: "sql_cond_triggers", defaultValue: false) {
        conditionEvaluationSatisfied
        conditionEvaluationSqlSessionId
      }
    }
    overridingParameters {
      jarParams
      notebookParams {
        key
        value
      }
      pythonParams
      sparkSubmitParams
      pythonNamedParams {
        key
        value
      }
      sqlParams {
        key
        value
      }
      dbtCommands
      pipelineParams {
        fullRefresh
      }
    }
    clusterInstance {
      clusterId
      sparkContextId
      clusterInfo {
        attributes {
          sparkVersion
          enableServerlessCompute
          kind
        }
      }
    }
    tasks @include(if: $expandTasks) {
      runId
    }
    jobParameters @include(if: $includeJobParameters) {
      name
      default
      value
    }
  }
  ${o.WB}
  ${r.j}
  ${r.E}
`;(0,n.J1)`
  fragment RunsListTable_RunNode on Run {
    ...RunsListTableColumns_RunNode
  }
  ${s}
`;let d=(0,n.J1)`
  fragment RunsListTable_JobsRunNode on JobsRun {
    ...RunsListTableColumns_JobsRunNode
  }
  ${c}
`,m=(0,n.J1)`
  query ListCombinedRunsTableQuery(
    $jobId: ID!
    $first: Int!
    $after: String
    $startTimeFrom: Long
    $startTimeTo: Long
    $expandTriggerInfo: Boolean
    $expandTasks: Boolean = false
    $includeQueueDuration: Boolean = false
    $includeQueueReason: Boolean = false
    $includeJobParameters: Boolean = false
    $includeRunStatus: Boolean = false
  ) @component(name: "Workflows.Observability.Lists") {
    activeRuns: jobsListRunsPaginated(
      jobId: $jobId
      first: $first
      after: $after
      activeOnly: true
      expandTriggerInfo: $expandTriggerInfo
      expandTasks: $expandTasks
      startTimeFrom: $startTimeFrom
      startTimeTo: $startTimeTo
    ) {
      jobsRuns {
        edges {
          node {
            ...RunsListTable_JobsRunNode
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
    completedRuns: jobsListRunsPaginated(
      jobId: $jobId
      first: $first
      after: $after
      completedOnly: true
      expandTriggerInfo: $expandTriggerInfo
      expandTasks: $expandTasks
      startTimeFrom: $startTimeFrom
      startTimeTo: $startTimeTo
    ) {
      jobsRuns {
        edges {
          node {
            ...RunsListTable_JobsRunNode
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  }
  ${d}
`;function p({jobId:e,first:t,after:a,startTimeFrom:n,startTimeTo:r,expandTasks:o}){return{query:m,variables:{jobId:e,first:t,after:a,expandTriggerInfo:!0,expandTasks:o,startTimeFrom:n,startTimeTo:r,includeJobParameters:(0,i.ue)(),includeRunStatus:!0,includeQueueDuration:!0,includeQueueReason:!0}}}(0,n.J1)`
  query ListLakeflowRunsQuery($pageSize: Int!) @component(name: "Workflows.Observability.Lists") {
    lakeflowListLakeflowRuns(input: { pageSize: $pageSize }) {
      lakeflowRuns {
        __typename
        id
        runAsUserId
        runAsUser {
          id
        }
        runAsPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
          id
        }
      }
      apiError {
        code
        message
      }
    }
  }
`;let f=(0,n.J1)`
  query RecentRunsQueryV2Autogen(
    $limit: Int
    $pageToken: String
    $sortBy: LakeflowListLakeflowRunsRequestSortBy
    $sortOrder: LakeflowListLakeflowRunsRequestSortOrder
    $filtersAssetIds: [String!]
    $filtersRunAsNames: [String!]
    $filtersRunId: String
    $filtersRunStatus: LakeflowListLakeflowRunsRequestFiltersRunStatusFilter
    $filtersRunTypes: [LakeflowListLakeflowRunsRequestFiltersRunTypeFilter!]
    $filtersUserVisibleTerminationLabel: String
    $filtersFrom: WellKnownTimestamp
    $filtersTo: WellKnownTimestamp
    $includeQueueDuration: Boolean = false
    $includeQueueReason: Boolean = false
  ) @component(name: "Workflows.Observability.Lists") {
    lakeflowListLakeflowRuns(
      input: {
        pageSize: $limit
        pageToken: $pageToken
        sortBy: $sortBy
        sortOrder: $sortOrder
        filters: {
          assetIds: $filtersAssetIds
          runAsNames: $filtersRunAsNames
          runId: $filtersRunId
          runStatus: $filtersRunStatus
          runTypes: $filtersRunTypes
          userVisibleTerminationLabel: $filtersUserVisibleTerminationLabel
          orderingTimeFromTime: $filtersFrom
          orderingTimeUntilTime: $filtersTo
        }
        includeFields: { includeTriggerInfo: true, includePermissionLevel: true }
      }
    ) {
      apiError {
        code
        message
      }
      nextPageToken
      prevPageToken
      lakeflowRuns {
        id
        name
        assetName
        runAsUserId
        assetType
        assetPermissionLevel
        assetId
        startTime
        endTime
        assetPermissionLevel
        status {
          ...RunStatusFragment
        }
        runAsUser {
          ...RichUserData
        }
        runAsPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
          ...AclPrincipalData
        }
        jobRun {
          ...LakeflowRunJobRunFragment
        }
        pipelineUpdate {
          ...LakeflowRunPipelineUpdateFragment
        }
      }
    }
  }
  ${l}
  ${u}
  ${o.WB}
  ${r.j}
  ${r.E}
`},888708:(e,t,a)=>{a.d(t,{s:()=>p});var n=a(250912),r=a.n(n),i=a(441535),o=a(689017),s=a(886100),l=a(22191),u=a(711489),c=a(587122),d=a(44772);let m=/AS\s+\$\$(.*?)\$\$/gis;function p(e){let t=(0,i.W)("databricks.fe.editor.formatter.enableNewSqlFormatter",!1),a="{{"+(0,d.A)()+"}}",n=r()(e),o=[],u=m.exec(n);if(!t){for(;u;)o.push(u[1]),u=m.exec(n);n=n.replace(m,a)}if(n=(0,c.G)(n),t||!o)return f(!1),n;if(!t){let t=0;for(;n.match(a)&&t<o.length;){let e=o[t];n=n.replace(a,t=>"AS $$"+e+"$$"),t++}if(t!==o.length){var p;return p="FormatEmbeddedLangaugeError",s.iT.log(l.Es.Editor,"SqlFormatter",p),e}}return f(!0),n}function f(e){(0,o.wi)({editor_event_log:{editor_formatter_format_sql_log:{event_name:e?u.J5.EditorFormatterFormatSqlEventName.EDITOR_FORMATTER_FORMAT_SQL_EVENT_NAME_FORMAT_SQL_WITH_EMBEDDED_CODE:u.J5.EditorFormatterFormatSqlEventName.EDITOR_FORMATTER_FORMAT_SQL_EVENT_NAME_FORMAT_SQL_NO_EMBEDDED_CODE}}})}},893079:(e,t,a)=>{a.d(t,{g:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enableDAISSemanticGraphs",!1)}},893779:(e,t,a)=>{a.d(t,{N:()=>s});var n=a(184563),r=a(558937),i=a(522317),o=a(915679);class s extends n.a{userId;randomSession;constructor(e){super(),this.userId=e,this.randomSession=this.getRandomNumber()}setUserId(e){this.userId=e}forceReGenerateRandomSession(){this.randomSession=100*Math.random()}getRandomNumber(){return 100*Math.random()}getRandomNumberFromUserId(){let e=this.userId??(0,r.I)();return void 0!==e?e%100:this.getRandomSession()}getRandomNumberFromUserIdAndExperiment(e){let t=(0,o.YZ)(e);return(this.getRandomNumberFromUserId()+t)%100}getRandomNumberFromUserIdAndExperimentAndDate(e){let t=(0,o.B_)(),a=(0,o.YZ)(e),n=(0,o.YZ)(t);return(this.getRandomNumberFromUserId()+a+n)%100}getRandomSession(){return this.randomSession}getBrowserSession(e){let t=i.A.get(e);if(t?.session_id)return(0,o.YZ)(t?.session_id);return this.getRandomSession()}}},901419:(e,t,a)=>{a.d(t,{f:()=>l});var n=a(441535),r=a(886100),i=a(22191),o=a(747129),s=a(580769);class l extends s.v{constructor(e,t){super({experimentName:"safetyCheckModelPriority",defaultMetadata:{experiment_type:"user",treatments:[{experiment_percentage:100,model_priority:["gpt-41-2025-04-14","gpt-4o-2024-11-20","claude-4-5-opus"]}]},getOverrideMetadata:()=>{let e=(0,n.W)("databricks.fe.assistantExperiment.safetyCheckModelPriority","");if(!e)return;try{return JSON.parse(e)}catch(e){r.iT.sev2BurnRate(i.Es.Assistant,"Failed to parse Safety Check Model Priority experiment metadata",o.i1.P99,o.Ip.Min10,!1,e);return}}},e,t)}}},907046:(e,t,a)=>{a.d(t,{n:()=>i});var n=a(610435),r=a(939578);let i=e=>{let{name:t,children:a,...i}=e;return(0,n.FD)(n.FK,{children:[(0,n.Y)(r.y,{...i,children:t}),a]})}},907393:(e,t,a)=>{a.d(t,{J:()=>r});var n=a(441535);function r(){let e=(0,n.W)("databricks.fe.lakeview.getVizTypeDefinitionExpandAllDepth",2);return Math.min(10,Math.max(0,"number"==typeof e&&Number.isFinite(e)?Math.trunc(e):2))}},913372:(e,t,a)=>{a.d(t,{GY:()=>l,a6:()=>u,c3:()=>s,nu:()=>d,qT:()=>m,tB:()=>c});var n,r=a(692738),i=a(686560),o=a(141078),s=((n={}).LAST_SELECTED_WAREHOUSE="",n);function l(e){return Object.values(s).includes(e)}let u=(0,o.J1)`
  query GetWorkspaceDefaultWarehouseQuery($workspaceId: String!) @component(name: "DBSQLX.WareHouseUI") {
    settingspolicyserviceGetSettingRest(
      input: {
        key: { typeName: "workspace", name: $workspaceId }
        setting: { typeName: "default_warehouse_id", name: "" }
      }
    ) {
      setting {
        value {
          stringVal {
            value
          }
        }
        isMutable
        canWrite
      }
      apiError {
        message
        traceId
      }
    }
  }
`,c=(e={})=>{let t=(0,i.d)("currentWorkspaceId","");return(0,o.IT)(u,{variables:{workspaceId:t},...e})};function d(e,t={}){let a=(0,i.d)("currentWorkspaceId","");return e.query({...t,query:u,variables:{workspaceId:a}})}function m(){let e=(0,o.mK)();return(0,r.useMemo)(()=>d.bind(null,e),[e])}},915679:(e,t,a)=>{a.d(t,{B_:()=>s,YZ:()=>o,ZA:()=>i,c3:()=>l});var n=a(278983),r=a(388735);let i=({experimentId:e,eventName:t,lakesenseTraceId:a,lakesenseSessionId:i,agentName:o,blob:s,additionalTags:l,experimentType:u="chatWindowExperiment"})=>{(0,n.y)("clientsideEvent",{...l,eventType:`${u}/${e}`,eventName:t,lakesenseTraceId:a,lakesenseSessionId:i,source:o},s),(0,r.Km)({event_type:r.FS.CHAT_WINDOW_EXPERIMENT,event_name:t,lakesense_trace_id:a,session_id:i,source:o,...s?{json_blob:s}:{}})};function o(e){let t=0;for(let a=0;a<e.length;a++)t=(t<<5)-t+e.charCodeAt(a)|0;return(t%=100)<0&&(t+=100),t}function s(e){let t=new Date(e??Date.now()),a=t.getFullYear(),n=("0"+(t.getMonth()+1)).slice(-2),r=("0"+t.getDate()).slice(-2);return`${a}${n}${r}`}function l(e,t,a){if(a>e.length)throw Error("Cannot sample more items than available without replacement.");if(a>t.filter(e=>e>0).length)throw Error("N is greater than the number of items with non-zero weight.");if(t.some(e=>e<0))throw Error("Negative weights are not allowed.");let n=e=>{let t=e.reduce((e,t)=>e+t,0),a=[],n=0;for(let r of e)n+=r,a.push(n/t);return a},r=n(t),i=()=>{let a=Math.random();for(let i=0;i<e.length;i++)if(a<r[i]){let a=e[i];return e.splice(i,1),r.splice(i,1),t.splice(i,1),r=n(t),a}return e[e.length-1]},o=[];for(let e=0;e<a;e++)o.push(i());return o}},916852:(e,t,a)=>{a.d(t,{Rl:()=>u,Rn:()=>c,dX:()=>l});var n=a(686560),r=a(5697),i=a(981158),o=a(425608);let s=new Set(["DIRECTORY","REPO","PROJECT"]),l=e=>!!(e&&s.has(e)),u=[r.Z6.Folder,r.Z6.Project],c=()=>(0,o._)(`/${i.A.UserFolderName}/${(0,n.d)("user_new","")}`)},918071:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.52 2.3a.75.75 0 0 1 .6-.3h7.76a.75.75 0 0 1 .6.3l2.37 3.158a.75.75 0 0 1 .15.45v.842q0 .059-.009.115A2.31 2.31 0 0 1 14 8.567v5.683a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1-.75-.75V8.567A2.31 2.31 0 0 1 1 6.75v-.841a.75.75 0 0 1 .15-.45zm7.605 6.068c.368.337.847.557 1.375.6V13.5h-9V8.968a2.3 2.3 0 0 0 1.375-.6c.411.377.96.607 1.563.607.602 0 1.15-.23 1.562-.607.411.377.96.607 1.563.607.602 0 1.15-.23 1.562-.607m2.375-2.21v.532l-.001.019a.813.813 0 0 1-1.623 0l-.008-.076a1 1 0 0 0 .012-.133V4zm-3.113.445a1 1 0 0 0-.013.106.813.813 0 0 1-1.624-.019V3.5h1.63v3q0 .053.007.103M7.25 3.5v3.19l-.001.019a.813.813 0 0 1-1.623 0l-.006-.064V3.5zM4.12 4 2.5 6.16v.531l.001.019a.813.813 0 0 0 1.619.045z",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="StorefrontIcon";let l=s},918406:(e,t,a)=>{a.d(t,{s:()=>l});var n=a(441535),r=a(886100),i=a(22191),o=a(747129),s=a(580769);class l extends s.v{constructor(e,t){super({experimentName:"text2filterModelPriority",defaultMetadata:{experiment_type:"user",treatments:[{experiment_percentage:100,model_priority:["gpt-41-2025-04-14","gpt-4o-2024-11-20","claude-4-5-opus"]}]},getOverrideMetadata:()=>{let e=(0,n.W)("databricks.fe.assistantExperiment.text2filterModelPriority","");if(!e)return;try{return JSON.parse(e)}catch(e){r.iT.sev2BurnRate(i.Es.Assistant,"Failed to parse Text2filter Model Priority experiment metadata",o.i1.P99,o.Ip.Min10,!1,e);return}}},e,t)}}},919119:(e,t,a)=>{a.d(t,{P:()=>l});var n=a(610435),r=a(648782),i=a(774540);function o(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function s(){return(0,n.Y)(r.sv,{})}function l(){return(0,i.e)(()=>{var e;return(e=function*(){return{RouteComponent:s}},function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function s(e){o(i,n,r,s,l,"next",e)}function l(e){o(i,n,r,s,l,"throw",e)}s(void 0)})})()})}},921195:(e,t,a)=>{a.d(t,{Hn:()=>A,Kt:()=>g,MH:()=>E,MZ:()=>h,Ng:()=>I,Y8:()=>b,i3:()=>y,k_:()=>T});var n,r=a(610435),i=a(16778),o=a.n(i),s=a(246700),l=a(405706);if(13057==a.j)var u=a(79570);if(13057==a.j)var c=a(465946);var d=a(686560);if(13057==a.j)var m=a(337706);if(13057==a.j)var p=a(737358);var f=a(429072),g=((n={}).SERVING="SERVING",n.MANAGEMENT="MANAGEMENT",n);function h(e,t){let a=(0,d.d)("accountId",""),n=`accounts/${a}`;return!e&&t?`${n}/tagPolicies/${t}`:n}function E(e){return e===f.WO.SYSTEM}let b=(e,t,a)=>{if(E(t))return{icon:(0,r.Y)(s.A,{style:a??{marginRight:e.spacing.xs}}),color:"indigo"};return{icon:(0,r.Y)(l.A,{style:a??{marginRight:e.spacing.xs}}),color:"turquoise"}};function T(e,t,a){let{icon:n,color:i}=b(e,a,{marginRight:0}),s=a===f.WO.DEFAULT?t.formatMessage({id:"Q5nQMu",defaultMessage:"User-Defined"}):o()(a);if(!n)return(0,r.Y)(r.FK,{});return(0,r.Y)(u.m,{componentId:"discovery.data_explorer.governed_tag_list.tag_type_tooltip",content:s,children:(0,r.Y)(c.v,{componentId:"discovery.data_explorer.governed_tag_list.tag_type_icon",color:i,"aria-label":s,children:n})})}function y(e){switch(e){case f.YD.DEFAULT:return f.WO.DEFAULT;case f.YD.SYSTEM:return f.WO.SYSTEM;default:return}}function I(e){let t="/governance/governed-tags";return e?`${t}/${encodeURIComponent(e)}`:t}function A(){return(0,p.AO)({pathname:I(),search:(0,m.XZ)({tab:"automations"})})}},921624:(e,t,a)=>{a.d(t,{BC:()=>d,CW:()=>b,EK:()=>T,GK:()=>l,K4:()=>g,Mn:()=>i,NF:()=>f,Rv:()=>A,U$:()=>c,UU:()=>m,Z4:()=>s,dA:()=>I,gx:()=>o,jB:()=>v,pr:()=>E,qi:()=>u,s4:()=>y,z$:()=>p,zZ:()=>h});var n=a(497895),r=a(342411);let i="null",o="None",s="Unknown",l="Not specified",u="None",c="Standard (16GB)",d="High (32GB)",m="SNAPSHOT",p=(0,r.YK)({downloadMenuItem:{id:"QYvmCj",defaultMessage:"Download environment"},pipLogsButton:{id:"sRuVQF",defaultMessage:"View pip logs"},newPipLogsButton:{id:"f9Rgmz",defaultMessage:"pip logs"},applyButton:{id:"qFerLx",defaultMessage:"Apply"},overflowMenuButton:{id:"5INn3U",defaultMessage:"Manage environment"},exportMenuItem:{id:"8HkOh1",defaultMessage:"Export environment"},modalExportButton:{id:"ATHXaR",defaultMessage:"Export"}}),f=690,g=474,h=550,E=520,b=.45,T=250,y=()=>{let{theme:e}=(0,n.wn)();return{defaultText:{fontSize:"10px !important",color:e.colors.textSecondary},errorText:{fontSize:"10px !important",color:e.colors.textValidationDanger},errorIcon:{fontSize:14,color:e.colors.textValidationDanger},wrapper:{display:"flex",gap:e.spacing.xs,alignItems:"center"}}},I=600,A=["/Workspace/Users","/Workspace/Repos"],v=4},923509:(e,t,a)=>{a.d(t,{kX:()=>o,vV:()=>l,vZ:()=>s});var n,r,i,o=((n={}).String="String",n.Integer="Integer",n.Decimal="Decimal",n.Date="Date",n.Timestamp="Timestamp",n.Range="Range",n),s=((r={}).Text="Text",r.Dropdown="Dropdown",r.Range="Range",r.Dynamic="Dynamic",r),l=((i={}).Range="Range",i.Array="Array",i)},924876:(e,t,a)=>{a.d(t,{$k:()=>el,A_:()=>O,DW:()=>U,Ew:()=>er,F2:()=>ef,FS:()=>_,HW:()=>eP,JG:()=>ee,L4:()=>A,NY:()=>Q,Nd:()=>B,Nl:()=>X,Nm:()=>eM,O9:()=>D,Om:()=>$,PE:()=>et,PJ:()=>J,Pj:()=>eb,QN:()=>S,Ry:()=>P,Sd:()=>en,T8:()=>q,T9:()=>w,Ub:()=>ev,Uy:()=>H,VN:()=>Y,VT:()=>F,Vr:()=>Z,WK:()=>N,WV:()=>j,X4:()=>x,Xh:()=>ea,Xs:()=>eC,Yb:()=>R,Yd:()=>ek,ZV:()=>M,_J:()=>e_,_n:()=>ec,aH:()=>ep,b6:()=>em,c6:()=>T,c8:()=>ew,cG:()=>y,dN:()=>eI,e:()=>k,eW:()=>eg,e_:()=>v,f2:()=>eR,gK:()=>eo,iM:()=>G,kN:()=>f,kd:()=>ey,kl:()=>eT,m2:()=>eE,mU:()=>C,mf:()=>V,mk:()=>eh,my:()=>es,sN:()=>g,sr:()=>eO,su:()=>h,tj:()=>b,uR:()=>K,uy:()=>I,vr:()=>eN,wQ:()=>ed,wu:()=>eu,x6:()=>eS,xJ:()=>ei,xb:()=>W,xr:()=>z,yD:()=>E,yd:()=>L,zu:()=>eA});var n=a(441535),r=a(726583);if(13057==a.j)var i=a(886100);if(13057==a.j)var o=a(22191);var s=a(8698),l=a(411424),u=a(707076),c=a(521200),d=a(993533);if(13057==a.j)var m=a(371303);var p=a(889885);function f(){return!!((0,m.sT)("databricks.fe.enableJobsObservabilityUI",!1)||(0,p.FI)("enableJawsObservabilityUI"))}function g(){if((0,n.W)("databricks.elasticspark.enableServerlessScalaTasks",!1))return!0;return(0,n.W)("serverless_jar_jobs",!1)}function h(){return(0,n.W)("databricks.fe.jaws.enableServerlessComputeForScalaTasksByDefault",!0)}function E(e){let t=(0,n.W)("databricks.fe.jaws.repair.unrepairableTaskTypes","[]"),a=(()=>{try{return JSON.parse(t)}catch{return}})(),r=Array.isArray(a);return r||i.iT.sev2(o.Es.WorkflowsOrchestration,"Failed to parse JSON array flag: databricks.fe.jaws.repair.unrepairableTaskTypes",JSON.stringify(t)),(r?a:[]).includes(e)}let b=()=>(0,n.W)("databricks.fe.jaws.continuousJob.triggerStatePollingIntervalMs",5e3),T=()=>(0,n.W)("databricks.elasticspark.maxCharsInJobDescription",1024),y=()=>!!(0,n.W)("databricks.elasticspark.sendingAlertsEnabled",!1)&&!!(0,n.W)("databricks.elasticspark.healthSettingsColumnEnabled",!1),I=()=>(0,n.W)("databricks.elasticspark.dependencyInfo.ui.enabled",!1),A=()=>(0,n.W)("databricks.webapp-elasticspark.enableNotebookOnWarehousesJobIntegration",!1)||(0,n.W)("databricks.webapp.enableSqlWarehouseInNotebookOnGCP",!1),v=()=>(0,r.ue)(),S=()=>(0,r.iQ)()&&(0,u.MH)(),_=()=>(0,n.W)("databricks.fe.jaws.enableTagsFilterOnJobsList",!1)&&(0,r.iQ)(),C=()=>(0,n.W)("databricks.fe.jobs.referencingValues.monaco.byot.enabled",!1),R=()=>(0,n.W)("jobs_bulk_runs",null)??(0,n.W)("databricks.fe.jobs.backfills.enabled",!1),O=()=>(0,n.W)("databricks.fe.jobs.backfills.customGranularity.enabled",!1),N=()=>O()&&(0,n.W)("databricks.fe.jobs.backfills.autoRangeFromFailures.enabled",!1),k=()=>(0,n.W)("databricks.fe.jaws.enableListViewForJobRunDetails",!1),w=()=>(0,n.W)("databricks.fe.jaws.enableListViewForEditingJob",!1),M=()=>(0,n.W)("databricks.fe.jobs.useApi22ForListJobs",!1)&&(0,n.W)("databricks.elasticspark.jobs-api.api22enabled",!1),P=()=>(0,n.W)("databricks.budgetPolicies.isBudgetPoliciesEnableOnRegion",!1)&&((0,n.W)("budget_policy",null)??(0,n.W)("databricks.budgetPolicies.enableBudgetPoliciesFeatureByPercentage",!1))&&(0,n.W)("databricks.elasticspark.budgetpolicies.enableBudgetPoliciesInJobs",!1)||D(),D=()=>(0,n.W)("usage_policy_entitle",null)??(0,n.W)("databricks.usagePolicies.enableEntitlement",!1),L=()=>(0,n.W)("usage_rate_limit",null)??(0,n.W)("databricks.budgetPolicies.enableBudgetPolicyRateLimit",!1),x=()=>(0,n.W)("databricks.fe.jobs.preselectEnabledTasksFromRun",!1),U=()=>(0,r.ue)(),F=()=>(0,n.W)("databricks.fe.jaws.ignoreSavedCreationDateSortByOnJobsList",!0),$=()=>(0,n.W)("databricks.fe.jaws.enableBetterTasksListFiltering",!1),V=()=>(0,r.ZW)()&&(0,n.W)("databricks.fe.jaws.refetchAssetsListOnMutation",!1),Y=()=>(0,n.W)("databricks.fe.jaws.enableBurnRateAlertForLakeFlowList",!1),W=()=>(0,n.W)("databricks.fe.jaws.enableApi22ForUseJobData",!1),B=()=>(0,r.ZW)()&&(0,n.W)("databricks.fe.jaws.enablePipelineTypeInUnifiedList",!1),G=()=>B(),J=()=>B(),z=()=>(0,r.ZW)()&&(0,n.W)("databricks.fe.jaws.enableSystemManagedJobsInUnifiedList",!1)&&(0,n.W)("databricks.elasticspark.lakeflow.returnSystemManagedResources",!1),q=()=>z()&&(0,n.W)("databricks.fe.jaws.enablePipelinesInSystemManagedTab",!1),H=()=>(0,n.W)("lakeflow_runs_list",!1)&&(0,n.W)("databricks.elasticspark.lakeflow.enableListLakeflowRunsApi",!1),j=()=>(0,n.W)("databricks.fe.jaws.showNameFilterForPipelinesInRunsList",!0),K=()=>(0,n.W)("databricks.fe.jaws.enableTaskPaletteRecentsList",!0),Q=()=>!!((0,n.W)("databricks.elasticspark.enableConfigurableTaskRetryInContinuousJobFlag",!1)&&(0,n.W)("databricks.fe.jaws.enableContinuousTriggerAdvanced",!1)),X=()=>(0,n.W)("databricks.fe.budget_policy.renameServerlessPolicy",!1),Z=()=>(0,n.W)("databricks.fe.budget_policy.enableUsagePolicyRunSidePanel",!1);function ee(){return(0,n.W)("databricks.fe.jaws.environments.enableJavaDependenciesFieldMigration",!1)}let et=()=>(0,n.W)("databricks.fe.jaws.showDockerImageInRunDetails",!0),ea=()=>(0,n.W)("system_managed_job",!1)??!1;function en(e){return ea()&&(0,n.W)("databricks.fe.jaws.enableManagedByField",!1)&&e.managedBy===d.Kmw.SCHEDULED_MV_REFRESH}let er=()=>(0,n.W)("databricks.fe.data.tableRefreshScheduleNewUI",!1),ei=()=>(0,n.W)("databricks.fe.jaws.runsLists.useAssetPermissionLevel",!1)&&H(),eo=()=>(0,n.W)("databricks.fe.jaws.environments.enableJarDependenciesSharedComponent",!1),es=()=>(0,n.W)("databricks.fe.jaws.rateLimits.maxQueries",50),el=()=>(0,n.W)("databricks.fe.jaws.enableNewTimezoneExperience",!1),eu=()=>(0,n.W)("databricks.fe.jaws.enableJobClusterPolicyComplianceUI",!1),ec=()=>(0,n.W)("databricks.fe.jaws.enableRunTimings",!1),ed=()=>(0,n.W)("sql_cond_triggers",!1),em=()=>(0,n.W)("databricks.fe.jaws.enableSafeParamRefParsing",!1),ep=()=>(0,n.W)("databricks.elasticspark.environments.allowJarTaskWithBaseEnvironment",!1),ef=()=>(0,n.W)("databricks.fe.jaws.enableAiRuntimeRunsInJobsList",!1),eg=()=>H()&&(0,c.xh)()&&(0,n.W)("databricks.fe.jaws.enableViewAllRunsInLakeflowList",!1),eh=()=>(0,n.W)("databricks.fe.jaws.enableQueryHistoryLinkInSparkColumn",!1),eE=()=>(0,n.W)("databricks.fe.jaws.enablePipelineTaskPerformanceTarget",!1),eb=()=>(0,n.W)("databricks.fe.jaws.pipelineStopAwaitConfirmedStatus",!1)&&eR(),eT=()=>(0,n.W)("databricks.fe.jaws.enableAutopilotTab",!1),ey=()=>(0,n.W)("databricks.fe.jaws.enableAlwaysShowResolvedParams",!1),eI=()=>(0,n.W)("databricks.fe.jaws.enableWorkspaceObjectPathInfo",!1),eA=()=>(0,n.W)("databricks.fe.jaws.cloneJob.provideParentPath",!1),ev=()=>!!(0,n.W)("serverless_workload_observability",!1),eS=()=>ev()&&!!(0,s.ml)(l.p.EnableServerlessObservabilityToggle),e_=()=>((0,s.Fg)(l.p.EnableServerlessObservabilityToggle),eS()),eC=()=>(0,n.W)("databricks.fe.jaws.enableTopLevelTabsOnJobsPage",!1),eR=()=>(0,n.W)("databricks.fe.jaws.enablePipelineStopSpinOnConfirm",!1),eO=()=>(0,n.W)("databricks.fe.jaws.fixDisabledFilterLayoutShift",!1),eN=()=>H()&&eO()&&(0,n.W)("databricks.fe.jaws.enableRunIdFilterInRunsList",!1),ek=()=>(0,n.W)("databricks.fe.jaws.diagnoseErrorForAllTaskTypes",!1),ew=()=>(0,n.W)("databricks.fe.jaws.jobHealth.dqmEnablement",!1),eM=()=>(0,r.ZW)()&&(0,n.W)("databricks.lakeflow.enableJobHealthPrivatePreview",!1)&&(0,n.W)("databricks.fe.lakeflow.enableJobHealthInsights",!1),eP=()=>(0,n.W)("databricks.fe.jaws.enableSkipQueryUntilFiltersReady",!1)},931645:(e,t,a)=>{a.d(t,{xP:()=>d,yo:()=>m});let n=()=>{},r=[],i=[],o=!1,s=n;function l(e){e.forEach(e=>{try{e.fn(),e.resolve()}catch(t){e.reject(t)}})}function u(){o=!1;let[e,t]=[r,i];r=[],i=[];let a=s;try{let a=performance.now();l(e),performance.measure("fastdom-measure",{start:a,end:performance.now(),detail:{tasks:e.length}}),a=performance.now(),l(t),performance.measure("fastdom-update",{start:a,end:performance.now(),detail:{tasks:t.length}})}finally{a()}}function c(e,t){let a,l=new Promise((r,i)=>{a={fn:e,resolve:r,reject:i},t.push(a),o||(o=!0,s=globalThis.__perfHooks?.rit?.blockActiveInteractions?.("wait-for-fastdom")??n,requestAnimationFrame(u))});return l.cancel=()=>{r=r.filter(e=>e!==a),i=i.filter(e=>e!==a)},l}function d(e){return c(e,r)}function m(e){return c(e,i)}},934858:(e,t,a)=>{a.d(t,{$W:()=>m,Ow:()=>p,XP:()=>d,Xd:()=>g,Xh:()=>c,_d:()=>f,ep:()=>h});var n=a(610435);a(139259);var r=a(915862),i=a.n(r);a(692738);var o=a(26971),s=a(777517),l=a(465082),u=a(229386);function c(e){return e.reduce((e,t)=>{let a=(0,u.gX)(t)?{name:t.groupName,kind:"group"}:(0,u.A6)(t)?{name:t.servicePrincipalName,kind:"serviceprincipal",displayName:t.displayName}:{name:t.userName,kind:"user",displayName:t.displayName};return[...e,...t.allPermissions.map(e=>({subject:a,permission:e}))]},[])}function d(e,t){let a=[];return e.forEach(e=>{let n=(0,u.gX)(e)?{name:e.groupName,kind:"group"}:(0,u.A6)(e)?{name:e.servicePrincipalName,kind:"serviceprincipal",displayName:e.displayName}:{name:e.userName,kind:"user",displayName:e.displayName},r=[],i=[],o=new Map;if(t.forEach((e,t)=>{o.set(e.permissionLevel,t)}),e.allPermissions.forEach(e=>{e.inherited?i.push(e):r.push(e)}),r.length>0&&0===i.length)a.push({subject:n,permission:r[0]});else{let s=0,l=0,u=i.length>0&&0===r.length;e.allPermissions.forEach((e,t)=>{let a=o.get(e.permissionLevel);a>s&&(s=a,l=t)}),a.push({subject:n,permission:{permissionLevel:e.allPermissions[l].permissionLevel,inherited:u,inheritedFromObjects:[]},permissionLevels:t.slice(s)})}}),a}function m(e){let{permission:{permissionLevel:t},subject:{kind:a,name:n}}=e;switch(a){case"group":return{groupName:n,permissionLevel:t};case"user":return{userName:n,permissionLevel:t};case"serviceprincipal":return{servicePrincipalName:n,permissionLevel:t};default:throw Error(`Unknown subject kind ${a}`)}}function p(e,t){switch(e){case"CAN_ATTACH_TO":return t.formatMessage({id:"vjuZq/",defaultMessage:"Can Attach To"});case"CAN_CREATE_APP":return t.formatMessage({id:"TDBxFQ",defaultMessage:"Can Create App"});case"CAN_EDIT":return t.formatMessage({id:"Lg7PRA",defaultMessage:"Can Edit"});case"CAN_MANAGE":return t.formatMessage({id:"fFJrOa",defaultMessage:"Can Manage"});case"CAN_QUERY":return t.formatMessage({id:"fvsFnS",defaultMessage:"Can Query"});case"CAN_READ":return t.formatMessage({id:"zofAD/",defaultMessage:"Can Read"});case"CAN_RESTART":return t.formatMessage({id:"46XEms",defaultMessage:"Can Restart"});case"CAN_USE":return t.formatMessage({id:"2CuuGP",defaultMessage:"Can Use"});case"CAN_RUN":return t.formatMessage({id:"3gBDEy",defaultMessage:"Can Run"});case"IS_OWNER":return t.formatMessage({id:"DFsGfJ",defaultMessage:"Is Owner"});case"UNSPECIFIED":return"Unspecified";default:return i()(e.toLowerCase())}}function f(e){if("group"===e)return(0,n.Y)(o.A,{name:e});if("serviceprincipal"===e)return(0,n.Y)(s.A,{name:e});return(0,n.Y)(l.A,{name:e})}function g(e,t,a,n){if("group"===e){let e=t||a,r={accountUsers:n.formatMessage({id:"0pBn8k",defaultMessage:"All account users"}),allUsers:n.formatMessage({id:"VzinD6",defaultMessage:"All workspace users"})};if("users"===e||"all workspace users"===e)return[r.allUsers,""];if("account users"===e||"all account users"===e)return[r.accountUsers,""];return[e,""]}if(t&&a!==t)return[t,a??""];return[a??"",""]}function h(e,t){return e.name===t.name&&e.kind===t.kind}},935963:(e,t,a)=>{a.d(t,{f:()=>u});var n=a(774045),r=a(886100),i=a(22191),o=a(704448),s=a(837847),l=a(124174);let u=(e=!1)=>{let t=s.m.Instance.GetFeatureModelSelector(o.FB.GLOBAL_CHAT);try{let e=l.PC.getModelPriority();return t(e)}catch(t){return e&&r.iT.sev2(i.Es.Assistant,"No available model for global chat mode",{error:t}),n.UB}}},936289:(e,t,a)=>{a.d(t,{LE:()=>s,uE:()=>u,vB:()=>l});var n=a(299089),r=a.n(n),i=a(974657),o=a.n(i);let s=e=>o()(e,e=>e.landingTimestamp);function l(e){if(e.some(e=>"number"!=typeof e.userId||!Number.isFinite(e.userId)))return e;let t=o()(e,[e=>!e.commandGuid,e=>!e.hasFocus,e=>-e.timestamp]),a=new Map;for(let e of t)a.has(e.userId)||a.set(e.userId,e);return Array.from(a.values())}function u({model:e,attributes:t,store:a,setState:n}){let i=t.map(e=>`change:${String(e)}`).join(" "),o=e=>{let i=n(r()(e.attributes,t));a.setState(i)};return e.on(i,o),()=>{e.off(i,o)}}},936743:(e,t,a)=>{a.d(t,{G:()=>s,l:()=>o});var n=a(610435),r=a(692738),i=a(62947);let o=e=>{switch(e.kind){case"group":return{group_name:e.name,group_id:e.id};case"user":return{user_name:e.name,user_id:e.id};case"serviceprincipal":return{service_principal_display_name:e.displayName,service_principal_id:e.id,service_principal_name:e.applicationId}}},s=({onUpdate:e,onUpdateSubject:t,showAccountLevelEntities:a,...s})=>{let l=(0,r.useCallback)(a=>{let n;Array.isArray(a)?n=a.map(e=>o(e)):void 0!==a&&(n=o(a)),e&&e(n),t&&t(a)},[e,t]);return(0,n.Y)(i.T,{enableAccountGroups:!!a,enableAccountServicePrincipals:!!a,enableAccountUsers:!!a,enableWorkspaceGroups:!a,enableWorkspaceServicePrincipals:!a,enableWorkspaceUsers:!a,onUpdate:e||t?l:void 0,...s})}},937929:(e,t,a)=>{a.d(t,{$B:()=>b,A2:()=>l,NC:()=>f,QN:()=>c,Rp:()=>u,V5:()=>g,Vp:()=>y,Zl:()=>p,af:()=>I,f2:()=>d,n3:()=>m,u7:()=>h});var n,r,i,o,s=a(5697),l=((n={}).CLIENT="client",n.BASE_ENVIRONMENT="baseEnvironment",n.DEPENDENCIES="dependencies",n.JAR_DEPENDENCIES="jarDependencies",n),u=((r={}).ENVIRONMENT_FORM="environmentForm",r.ENVIRONMENT_PANEL="environmentPanel",r),c=((i={}).PYTHON="PYTHON",i.JAR="JAR",i),d=((o={}).JOB="job",o.LAKEFLOW="lakeflow",o.NOTEBOOK="notebook",o.WORKSPACE_SETTINGS="workspaceSettings",o);let m="-r requirements.txt",p="com.databricks:spark-csv_2.10:1.0.0",f=e=>{switch(e){case"PYTHON":return"dependencies";case"JAR":return"jarDependencies"}},g=e=>{switch(e){case"PYTHON":return"simplejson==3.19.*";case"JAR":return"/Volumes/path/to/file.jar"}},h=e=>{switch(e){case"PYTHON":return[s.pt.whl,s.pt.txt,s.pt.requirementsTxt,s.pt.tar,s.pt.zip];case"JAR":return[s.pt.jar];default:return[]}},E={[s.pt.jar]:[".jar"],[s.pt.whl]:[".whl"],[s.pt.zip]:[".zip",".wheelhouse.zip"],[s.pt.tar]:[".tar",".tar.gz"],[s.pt.txt]:[".txt"],[s.pt.requirementsTxt]:[".txt"]},b=e=>h(e).flatMap(e=>E[e]??[]).map(e=>e.toLowerCase()),T={1:"1 - Python 3.10, Scala 2.12",2:"2 - Python 3.11, Scala 2.12",3:"3 - Python 3.12, Scala 2.12",4:"4 - Python 3.12, Scala 2.13",5:"5 - Python 3.12, Scala 2.13"},y=e=>{if(!(e in T))return e;return T[e]},I=e=>{if(!(e in T))return e;return y(e).split(" - ")[1]}},939281:(e,t,a)=>{a.d(t,{f:()=>i});var n=a(610435),r=a(497895);function i({width:e=32,height:t=40,fillOpacity:a=.08}){let{theme:o}=(0,r.wn)();return(0,n.FD)("svg",{width:e,height:t,viewBox:"0 0 150 150",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"upload file icon",children:[(0,n.Y)("path",{d:"M110 65L110 141C110 143.209 108.209 145 106 145L24 145C21.7909 145 20 143.209 20 141L20 29C20 26.7909 21.7909 25 24 25H70L110 65Z",fill:o.colors.grey300}),(0,n.Y)("path",{d:"M130 45L130 119C130 122.314 127.314 125 124 125H46C42.6863 125 40 122.314 40 119L40 11C40 7.68629 42.6863 5 46 5H90L130 45Z",fill:o.colors.grey100}),(0,n.Y)("path",{d:"M90 5L130 45H94C91.7909 45 90 43.2091 90 41L90 5Z",fill:o.colors.grey300}),(0,n.Y)("path",{d:"M83 70.8301L75.748 78.0811L72.9199 75.2529L85 63.1719L97.0811 75.2529L94.2529 78.0811L87 70.8281V90H83V70.8301Z",fill:o.colors.grey300}),(0,n.Y)("path",{d:"M66.333 96.667H103.666V100.667H66.333V96.667Z",fill:o.colors.grey300})]})}},939578:(e,t,a)=>{a.d(t,{y:()=>o});var n=a(610435),r=a(545251),i=a(605107);let o=({children:e,...t})=>{let{isInsideDialogCombobox:a}=(0,r.w)();if(!a)throw Error("`DialogComboboxSectionHeader` must be used within `DialogCombobox`");return(0,n.Y)(i.X,{...t,children:e})}},940163:(e,t,a)=>{a.d(t,{i:()=>m});var n=a(160603),r=a(441535),i=a(141078),o=a(170082),s=a(580500),l=a(449853),u=a(742996),c=a(609597),d=a(34738);let m=e=>{let t=(0,n.useQueryClient)(),a=(0,i.mK)();return(0,n.useMutation)(e=>(0,o.a)(e),{onSuccess:n=>{if(t.invalidateQueries((0,u.f)({})),t.invalidateQueries((0,d.r)({})),!(0,r.W)("databricks.fe.filebrowser.enableSharedQueryClient",!1)){let e=l.queryClientByWorkspace.getActiveValue();e!==t&&(e.invalidateQueries((0,u.f)({})),e.invalidateQueries((0,d.r)({})))}t.setQueryData((0,c.mY)(n.name),e=>{if(!e)return;return n}),t.setQueryData((0,c.mY)(n.name,n.internal_name),e=>{if(!e)return;return n}),n.name.startsWith("projects")&&t.setQueryData((0,c.mY)(`folders/${(0,s.Uk)(n.name)}`),e=>{if(!e)return;return n}),e&&a.refetchQueries({include:["ListFavoriteAssets"]})}})}},941687:(e,t,a)=>{a.d(t,{B:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enableCancelRefreshOnWarehouseKillSwitch",!1)}},946519:(e,t,a)=>{a.d(t,{X:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enableDlmvCatalogPersistence",!0)}},955897:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("path",{fill:"currentColor",d:"M5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"}),(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.768 1.018a.75.75 0 0 0-.75.75v6.1c0 .199.079.39.22.53l6.884 6.885a.75.75 0 0 0 1.06 0l6.101-6.1a.75.75 0 0 0 0-1.061L8.4 1.237a.75.75 0 0 0-.53-.22zm6.884 12.674L2.518 7.557v-5.04h5.04l6.134 6.135z",clipRule:"evenodd"})]})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="TagIcon";let l=s},956963:(e,t,a)=>{a.d(t,{Y:()=>r});var n=a(141078);let r=(0,n.J1)`
  query ConversationModelStatus($input: ConversationGetModelStatusRequestInput!)
  @component(name: "Workspace.Assistant") {
    conversationGetModelStatus(input: $input) {
      modelStatuses {
        isAvailable
        name
      }
      apiError {
        code
        message
      }
    }
  }
`},957729:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.75 1a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75V1.75a.75.75 0 0 0-.75-.75zm.75 12.5v-11h11v11zM5 6h2.25v5.5h1.5V6H11V4.5H5z",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="TextBoxIcon";let l=s},961670:(e,t,a)=>{a.d(t,{A:()=>S,i:()=>I});var n=a(610435),r=a(783772),i=a.n(r),o=a(916599),s=a.n(o),l=a(536717),u=a.n(l),c=a(958115),d=a.n(c),m=a(189219),p=a.n(m),f=a(232520),g=a.n(f),h=a(623576),E=a.n(h),b=a(692738),T=a(943844),y=a(955210);function I({isExpanded:e,onToggle:t,dataTestId:a}){return(0,n.Y)("span",{className:"jvi-toggle","data-testid":a,onClick:e=>{e.stopPropagation(),t()},children:e?(0,n.Y)(T.A,{}):(0,n.Y)(y.A,{})})}function A({value:e,children:t,openingBrace:a,closingBrace:r,withKeys:o,testIdSuffix:s,expandStateSessionStorageId:l,isOpenByDefault:u=!1}){let c=`isExpanded-${String(l)}`,[d,m]=(0,b.useState)(()=>{if(void 0===l)return u;return"true"===sessionStorage.getItem(c)}),p=g()(e),f=p.length;return(0,n.FD)(b.Fragment,{children:[f>0&&(0,n.Y)(I,{dataTestId:"jvi-toggle-"+s,isExpanded:d,onToggle:()=>{l&&sessionStorage.setItem(c,JSON.stringify(!d)),m(!d)}}),(0,n.Y)("span",{className:"jvi-punctuation jvi-braces",children:a}),!d&&f>0&&(0,n.Y)("span",{className:"jvi-punctuation jvi-ellipsis",onClick:e=>{e.stopPropagation(),l&&sessionStorage.setItem(c,"true"),m(!0)},children:"…"}),d&&(0,n.Y)("span",{className:"jvi-block",children:E()(p,(t,a)=>{let r=a===f-1,s=r?null:(0,n.Y)("span",{className:"jvi-punctuation jvi-comma",children:","});return(0,n.FD)("span",{className:i()("jvi-item",{"jvi-nested-first":0===a,"jvi-nested-last":r}),children:[o&&(0,n.Y)("span",{className:"jvi-object-key",children:(0,n.Y)(v,{value:t,expandStateSessionStorageId:l?l+"-"+t:void 0,isOpenByDefault:u,children:(0,n.Y)("span",{className:"jvi-punctuation",children:": "})})}),(0,n.Y)(v,{value:e[t],expandStateSessionStorageId:l?l+"-"+t:void 0,isOpenByDefault:u,children:s})]},"item-"+t)})}),(0,n.Y)("span",{className:"jvi-punctuation jvi-braces",children:r}),t,!d&&(0,n.Y)("span",{className:"jvi-comment",children:" // "+f+" "+(1===f?"item":"items")})]})}function v({value:e,children:t,testIdSuffix:a,expandStateSessionStorageId:r,isOpenByDefault:i}){if(null===e||!1===e||!0===e||s()(e))return(0,n.FD)("span",{className:"jvi-value jvi-primitive",children:[""+e,t]});if(u()(e))return(0,n.FD)(b.Fragment,{children:[(0,n.Y)("span",{className:"jvi-punctuation jvi-string",children:'"'}),(0,n.Y)("span",{className:"jvi-value jvi-string",children:e}),(0,n.Y)("span",{className:"jvi-punctuation jvi-string",children:'"'}),t]});if(d()(e))return(0,n.Y)(A,{value:e,openingBrace:"[",closingBrace:"]",testIdSuffix:a,expandStateSessionStorageId:r,isOpenByDefault:i,children:t});if(p()(e))return(0,n.Y)(A,{value:e,openingBrace:"{",closingBrace:"}",testIdSuffix:a,withKeys:!0,expandStateSessionStorageId:r,isOpenByDefault:i,children:t});return null}function S({value:e,testIdSuffix:t,expandStateSessionStorageId:a,isOpenByDefault:r}){return(0,n.Y)("span",{className:"jvi-item jvi-root",children:(0,n.Y)(v,{value:e,testIdSuffix:t,expandStateSessionStorageId:a,isOpenByDefault:r})})}S.defaultProps={value:void 0}},962411:(e,t,a)=>{a.d(t,{R:()=>n});let n={dropzone:(0,a(956935).AH)("background-color:rgba(34,114,180,8%);border:dashed 4px #2272b4;border-radius:4px;height:calc(100% - 8px);left:0;position:absolute;top:0;width:calc(100% - 8px);z-index:10;")}},963681:(e,t,a)=>{a.d(t,{o:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.ES.1755242.killswitch",!1)}},967421:(e,t,a)=>{a.d(t,{g:()=>c});var n=a(610435),r=a(692738),i=a(945854),o=a(962411),s=a(588949),l=a(967166),u=a(87221);let c=({componentId:e,children:t,location:a,onDrop:c,canDrop:d,noClick:m,noDrag:p,noKeyboard:f,accept:g,isFullPageStyle:h=!0,multiple:E=!0,enabled:b=!0,style:T={},overlayMode:y,tabIndex:I=0,alwaysRenderDropZoneElements:A=!1,enableFolderUploadViaBrowse:v=!1})=>{let S=(0,l.hG)(),_=(0,r.useCallback)((t,a)=>{(0,u.s_)(S,{eventType:"component_value_change",eventClientSource:"dropzone",eventEntity:{entityType:"component",entitySubType:"file_input",entityId:e},eventPayload:{interactionSubject:!0,valueBoolean:void 0,valueString:void 0,valueNumber:void 0,valueFiles:t}}),c(t,a)},[e,c,S]),[C,R]=(0,r.useState)(!1),O=(0,r.useCallback)(e=>{d?R(d(e.dataTransfer.files)):R(!0)},[d,R]),{getRootProps:N,getInputProps:k,isDragActive:w}=(0,i.V)({noClick:m,noDrag:p,noKeyboard:f,onDrop:_,onDragOver:O,accept:g,multiple:E}),M=y?{position:"relative",...T}:T;if(!b&&!A)return t;return(0,n.FD)("span",{...b?N({tabIndex:I}):{},"data-testid":`dropzone-${a}`,style:M,children:[b&&(0,n.Y)("input",{...k(),"data-testid":`dropzone-${a}-input`,"aria-disabled":!b,disabled:!b,...v?{webkitdirectory:""}:{}}),t,!y&&h&&w&&C&&b&&(0,n.Y)("div",{css:o.R.dropzone,"data-testid":`dropzone-${a}-drop-border`}),!h&&C&&w&&y&&b&&(0,n.Y)(s.I,{multiple:E})]})}},968683:(e,t,a)=>{a.d(t,{Y:()=>r});var n=a(441535);function r(){return(0,n.W)("databricks.fe.lakeview.enableDLMVPrefetchKillSwitch",!1)}},975971:(e,t,a)=>{let n;a.d(t,{_T:()=>u,jw:()=>d,tx:()=>l,uD:()=>c});var r=a(262550);let i=!1,o="skipConfirmation";function s(){return n||(n=new r.A("notebookDefaultLanguage")),n}function l(){let e=s().get(o);return!i&&!e}function u(){s().set(o,!0)}function c(){i=!0}let d="mostRecentlySetLanguage"},984568:(e,t,a)=>{a.d(t,{Ck:()=>W,Go:()=>en,I2:()=>es,IB:()=>v,KW:()=>er,Ks:()=>K,Mc:()=>et,Oj:()=>z,Pt:()=>Q,S3:()=>ea,UL:()=>m,VM:()=>b,Vw:()=>J,WQ:()=>p,XP:()=>ee,YC:()=>X,YR:()=>el,Yf:()=>eo,_M:()=>g,ax:()=>V,f5:()=>I,gv:()=>F,iD:()=>k,lu:()=>S,pM:()=>Z,q3:()=>G,tc:()=>O,uQ:()=>B,uv:()=>T,zQ:()=>j});var n=a(141078),r=a(202855),i=a(831358),o=a(287393),s=a(659789),l=a(367295),u=a(239362),c=a(543963),d=a(691515);let m=(0,n.J1)`
  fragment ClusterAttributes on ClusterAttributes {
    name
    kind
    nodeTypeId
    driverNodeTypeId
    sparkVersion
    workloadType {
      clients {
        jobs
        notebooks
      }
    }
    sparkConf {
      key
      value
    }
    sparkEnvVars {
      key
      value
    }
    awsAttributes {
      firstOnDemand
      availability
      zoneId
      instanceProfileArn
      spotBidPricePercent
      ebsVolumesSpec {
        ebsVolumeType
        ebsVolumeSize
        ebsVolumeCount
        ebsVolumeIops
        ebsVolumeThroughput
      }
    }
    azureAttributes {
      logAnalyticsInfo {
        logAnalyticsWorkspaceId
        logAnalyticsPrimaryKey
      }
      firstOnDemand
      availability
      spotBidMaxPrice
    }
    gcpAttributes {
      usePreemptibleExecutors
      localSsdCount
      googleServiceAccount
      availability
      zoneId
      confidentialComputeType
        @includeSafex(name: "databricks.fe.clustercontrols.enableGcpConfidentialCompute", defaultValue: false)
    }
    sshPublicKeys
    customTags {
      key
      value
    }
    clusterLogConf {
      dbfs {
        destination
      }
      s3 {
        destination
        region
        endpoint
        enableEncryption
        encryptionType
        kmsKey
        cannedAcl
      }
      volumes {
        destination
      }
    }
    autoterminationMinutes
    noDriverDaemon
    enableElasticDisk
    diskSpec {
      diskType {
        ebsVolumeType
        azureDiskVolumeType
      }
      diskCount
      diskSize
    }
    source
    initScripts {
      dbfs {
        destination
      }
      s3 {
        destination
        region
        endpoint
        enableEncryption
        encryptionType
        kmsKey
        cannedAcl
      }
      gcs {
        destination
      }
      file {
        destination
      }
      abfss {
        destination
      }
      workspace {
        destination
      }
      volumes {
        destination
      }
    }
    isServerless
    hasTableAcls
    dockerImage {
      url
      basicAuth {
        username
        password
      }
    }
    instancePoolId
    driverInstancePoolId
    instanceSource {
      nodeTypeId
      instancePoolId
    }
    driverInstanceSource {
      nodeTypeId
      instancePoolId
    }
    blueprint {
      id
      name
      policies
      groupId
    }
    singleUser {
      name
    }
    legacyPolicy {
      id
      name
      definition
    }
    enableLocalDiskEncryption
    dataSecurityMode
    accessMode
    runtimeEngine
    enableServerlessCompute
    virtualClusterSize
    useMlRuntime
    isSingleNode
    assignedPrincipal
    budgetPolicyId
    budgetPolicyResolutionResult
    budgetPolicyTags {
      key
      value
    }
    releaseVersion @includeSafex(name: "databricks.fe.clustercontrols.showReleaseVersion", defaultValue: false)
    workerNodeTypeFlexibility {
      alternateNodeTypeIds
      awsContextId
    }
    driverNodeTypeFlexibility {
      alternateNodeTypeIds
      awsContextId
    }
  }
`,p=(0,n.J1)`
  fragment JobPeriodicTrigger on TriggerSettings {
    periodic @include(if: $includePeriodicTrigger) {
      interval
      unit
    }
  }
`,f=(0,n.J1)`
  fragment ClusterClusterAttributes on ClusterClusterAttributes {
    clusterName
    kind
    nodeTypeId
    driverNodeTypeId
    sparkVersion
    workloadType {
      clients {
        jobs
        notebooks
      }
    }
    sparkConf {
      key
      value
    }
    sparkEnvVars {
      key
      value
    }
    awsAttributes {
      firstOnDemand
      availability
      zoneId
      instanceProfileArn
      spotBidPricePercent
      ebsVolumesSpec {
        ebsVolumeType
        ebsVolumeSize
        ebsVolumeCount
        ebsVolumeIops
        ebsVolumeThroughput
      }
    }
    azureAttributes {
      logAnalyticsInfo {
        logAnalyticsWorkspaceId
        logAnalyticsPrimaryKey
      }
      firstOnDemand
      availability
      spotBidMaxPrice
    }
    gcpAttributes {
      usePreemptibleExecutors
      localSsdCount
      googleServiceAccount
      availability
      zoneId
      confidentialComputeType
        @includeSafex(name: "databricks.fe.clustercontrols.enableGcpConfidentialCompute", defaultValue: false)
    }
    sshPublicKeys
    customTags {
      key
      value
    }
    clusterLogConf {
      dbfs {
        destination
      }
      s3 {
        destination
        region
        endpoint
        enableEncryption
        encryptionType
        kmsKey
        cannedAcl
      }
      volumes {
        destination
      }
    }
    autoterminationMinutes
    noDriverDaemon
    enableElasticDisk
    diskSpec {
      diskType {
        ebsVolumeType
        azureDiskVolumeType
      }
      diskCount
      diskSize
    }
    clusterSource
    initScripts {
      dbfs {
        destination
      }
      s3 {
        destination
        region
        endpoint
        enableEncryption
        encryptionType
        kmsKey
        cannedAcl
      }
      gcs {
        destination
      }
      file {
        destination
      }
      abfss {
        destination
      }
      workspace {
        destination
      }
      volumes {
        destination
      }
    }
    dockerImage {
      url
      basicAuth {
        username
        password
      }
    }
    instancePoolId
    driverInstancePoolId
    instanceSource {
      nodeTypeId
      instancePoolId
    }
    driverInstanceSource {
      nodeTypeId
      instancePoolId
    }
    blueprintId
    singleUserName
    enableLocalDiskEncryption
    dataSecurityMode
    accessMode
    runtimeEngine
    enableServerlessCompute
    virtualClusterSize
    useMlRuntime
    isSingleNode
    assignedPrincipal

    workerNodeTypeFlexibility {
      alternateNodeTypeIds
      awsContextId
    }
    driverNodeTypeFlexibility {
      alternateNodeTypeIds
      awsContextId
    }
  }
`,g=(0,n.J1)`
  fragment ClusterSize on ClusterSize {
    autoscale {
      minWorkers
      maxWorkers
    }
    numWorkers
  }
`,h=(0,n.J1)`
  fragment ClusterClusterSize on ClusterClusterSize {
    autoscale {
      minWorkers
      maxWorkers
    }
    numWorkers
  }
`,E=(0,n.J1)`
  fragment NewClusterDetails on NewCluster {
    attrs {
      ...ClusterAttributes
    }
    size {
      ...ClusterSize
    }
  }
  ${m}
  ${g}
`,b=(0,n.J1)`
  fragment ClusterDetails on ClusterSpec {
    ... on NewCluster {
      ...NewClusterDetails
    }
    ... on ExistingCluster {
      id
      clusterInfo {
        attributes {
          name
          kind
          nodeTypeId
          driverNodeTypeId
          sparkVersion
          enableServerlessCompute
        }
        size {
          ...ClusterSize
        }
        state
        stateMessage
      }
    }
    ... on JobClusterKey {
      key
    }
  }
  ${E}
`,T=(0,n.J1)`
  fragment LightweightNewClusterDetails on NewCluster {
    attrs {
      instancePoolId
      driverInstancePoolId
      nodeTypeId
      driverNodeTypeId
      sparkVersion
      runtimeEngine
      enableServerlessCompute
      virtualClusterSize
      kind
      useMlRuntime
    }
    size {
      autoscale {
        minWorkers
        maxWorkers
      }
      numWorkers
    }
  }
`,y=(0,n.J1)`
  fragment ManagedLibrariesLibrary on ManagedLibrariesLibrary {
    jar
    egg
    pypi {
      package
      repo
    }
    maven {
      coordinates
      repo
      exclusions
    }
    cran {
      package
      repo
    }
    requirements
    whl
  }
`,I=(0,n.J1)`
  fragment JobsNewClusterDetails on JobsClusterSpecNewCluster {
    attrs {
      ...ClusterClusterAttributes
    }
    size {
      ...ClusterClusterSize
    }
  }
  ${f}
  ${h}
`,A=(0,n.J1)`
  fragment JobsClusterDetails on JobsClusterSpec {
    existingClusterId
    clusterInfo {
      attributes {
        name
        nodeTypeId
      }
      state
    }
    libraries {
      ...ManagedLibrariesLibrary
    }
    newCluster {
      ...JobsNewClusterDetails
    }
    jobClusterKey
  }
  ${y}
  ${I}
`,v=(0,n.J1)`
  fragment TaskAction on JobTask {
    ... on JobsJobTask {
      ...JobsAllTasksFragment
    }
    ... on NotebookTask {
      notebookPath
      source
      baseParameters {
        key
        value
      }
      warehouseId
    }
    ... on SparkJarTask {
      jarUri
      mainClassName
      parameters
      runAsRepl
    }
    ... on SparkPythonTask {
      pythonFile
      parameters
      source
    }
    ... on SparkSubmitTask {
      parameters
    }
    ... on ShellCommandTask {
      command
      envVars {
        key
        value
      }
    }
    ... on PipelineTask {
      pipelineId
      dltParameters: parameters {
        fullRefresh
      }
      pipelineTaskParameters @includeSafex(name: "pipeline_parameters", defaultValue: false) {
        key
        value
      }
    }
    ... on RunJobTask {
      jobId
      batchLoadJob @include(if: $includeJobInRunJobTask) {
        settings {
          name
        }
      }
      runJobParameters: parameters {
        ...RunParameters
      }
      jobParameters @include(if: $includeJobParameters) {
        key
        value
      }
    }
    ... on PythonWheelTask {
      entryPoint
      packageName
      parameters
      namedParameters {
        key
        value
      }
    }
    ... on DbtTask {
      projectDirectory
      catalog
      commands
      schema
      warehouseId
      profilesDirectory
      source @include(if: $includeSourceInDbtAndSqlFile)
    }
    ... on SqlTask {
      alert {
        alertId
        pauseSubscriptions @include(if: $includeSubscriptions)
        subscriptions @include(if: $includeSubscriptions) {
          userName
          destinationId
        }
      }
      dashboard {
        dashboardId
        pauseSubscriptions @include(if: $includeSubscriptions)
        subscriptions @include(if: $includeSubscriptions) {
          userName
          destinationId
        }
        customSubject @include(if: $includeSubscriptions)
      }
      query {
        queryId
      }
      file {
        path
        source @include(if: $includeSourceInDbtAndSqlFile)
      }
      params: parameters {
        key
        value
      }
      warehouseId
    }
    ... on ConditionTask {
      op
      left
      right
    }
  }
  ${r.m}
  ${s.M}
`,S=(0,n.J1)`
  fragment TaskDependency on TaskDependency {
    taskKey
    outcome @include(if: $includeTaskDependencyOutcome)
  }
`,_=(0,n.J1)`
  fragment RetryPolicy on JobRetryPolicy {
    maxRetries
    minRetryIntervalMillis
    retryOnTimeout
    disableAutoOptimization
  }
`,C=(0,n.J1)`
  fragment EmailNotifications on JobEmailNotifications {
    onStart
    onFailure
    onSuccess
    onDurationWarningThresholdExceeded
    onStreamingBacklogExceeded @include(if: $includeOnStreamingBacklogExceeded)
    alertOnLastAttempt
    noAlertForSkippedRuns
    noAlertForCanceledRuns
  }
`,R=(0,n.J1)`
  fragment LibraryDetails on Library {
    ... on Jar {
      jar
    }
    ... on Egg {
      egg
    }
    ... on PythonPyPi {
      pypi {
        package
        repo
      }
    }
    ... on Maven {
      maven {
        coordinates
        repo
        exclusions
      }
    }
    ... on RCran {
      cran {
        package
        repo
      }
    }
    ... on Requirements {
      requirements
    }
    ... on Wheel {
      whl
    }
  }
`,O=(0,n.J1)`
  fragment JobClusterDetails on JobCluster {
    jobClusterKey
    newCluster {
      attrs {
        ...ClusterAttributes
      }
      size {
        ...ClusterSize
      }
    }
  }
  ${m}
  ${g}
`,N=(0,n.J1)`
  fragment JobTagDetails on JobTag {
    key
    value
  }
`,k=(0,n.J1)`
  fragment JobsJobClusterDetails on JobsJobCluster {
    jobClusterKey
    newCluster {
      ...JobsNewClusterDetails
    }
  }
  ${I}
`,w=(0,n.J1)`
  fragment GitReference on GitReference {
    ... on GitTag {
      gitTag
    }
    ... on GitCommit {
      gitCommit
    }
    ... on GitBranch {
      gitBranch
    }
  }
`,M=(0,n.J1)`
  fragment GitSourceDetails on GitSource {
    gitUrl
    gitProvider
    gitBranch
    gitTag
    gitCommit
    sparseCheckout @includeSafex(name: "databricks.elasticspark.sparseCheckout.enabled", defaultValue: false) {
      patterns
    }
    gitReference {
      ...GitReference
    }
  }
  ${w}
`,P=(0,n.J1)`
  fragment JobWebhookDetails on JobsWebhookNotifications {
    onSuccess {
      id
    }
    onFailure {
      id
    }
    onStart {
      id
    }
    onDurationWarningThresholdExceeded {
      id
    }
    onStreamingBacklogExceeded @include(if: $includeOnStreamingBacklogExceeded) {
      id
    }
  }
`,D=(0,n.J1)`
  fragment NotificationSettingsDetails on JobsNotificationSettings {
    alertOnLastAttempt
    noAlertForCanceledRuns
    noAlertForSkippedRuns
  }
`,L=(0,n.J1)`
  fragment TaskDetails on TaskSettings {
    taskKey
    description
    dependsOn {
      ...TaskDependency
    }
    runIf
    timeoutSeconds
    durationWarningSeconds
    environmentKey
    compute {
      hardwareAccelerator
    }
    health {
      rules {
        metric
        op
        value
      }
    }
    retryPolicy {
      ...RetryPolicy
    }
    emailNotifications {
      ...EmailNotifications
    }
    notificationSettings {
      ...NotificationSettingsDetails
    }
    webhookNotifications
      @includeSafex(name: "databricks.elasticspark.enableJobWebhooksRollout.goc", defaultValue: false) {
      ...JobWebhookDetails
    }
    clusterSpec {
      ...ClusterDetails
    }
    libraries {
      ...LibraryDetails
    }
    task {
      ...TaskAction
    }
    disabled @includeSafex(name: "databricks.fe.jobs.disabled_tasks.schema.enabled", defaultValue: false)
  }

  ${b}
  ${_}
  ${C}
  ${v}
  ${R}
  ${S}
  ${D}
  ${P}
`,x=(0,n.J1)`
  fragment ForEachManualBridge on JobTask {
    ... on JobsJobTask {
      forEachTask {
        manualGraphQlTaskSettingsBridge {
          ...TaskDetails
        }
      }
    }
  }

  ${L}
`,U=(0,n.J1)`
  fragment JobEnvironment on JobsJobEnvironment {
    environmentKey
    spec {
      client
      environmentVersion
      dependencies
      jarDependencies
      javaDependencies
      baseEnvironment
    }
  }
`,F=(0,n.J1)`
  fragment JobConfiguration on JobSettings {
    name
    ...JobDescription
    parentPath @includeSafex(name: "databricks.fe.jaws.enableWorkspaceObjectPathInfo", defaultValue: false)
    budgetPolicyId
      @includeSafex(name: "databricks.elasticspark.budgetpolicies.enableBudgetPoliciesInJobs", defaultValue: false)
    usagePolicyId
    schedule {
      timezoneId
      quartzCronExpression
      pauseStatus
      sqlCondition @includeSafex(name: "sql_cond_triggers", defaultValue: false) {
        sqlQueryId
        warehouseId
      }
    }
    trigger {
      fileArrival {
        url
        minTimeBetweenTriggersSeconds
        waitAfterLastChangeSeconds
      }
      tableUpdate {
        tableNames
        condition
        minTimeBetweenTriggersSeconds
        waitAfterLastChangeSeconds
      }
      model @includeSafex(name: "databricks.fe.jaws.enableModelTriggerUI", defaultValue: false) {
        securableName
        aliases
        condition
        minTimeBetweenTriggersSeconds
        waitAfterLastChangeSeconds
      }
      sqlCondition @includeSafex(name: "sql_cond_triggers", defaultValue: false) {
        sqlQueryId
        warehouseId
      }
      ...JobPeriodicTrigger
      pauseStatus
    }
    continuous {
      pauseStatus
      taskRetryMode @includeSafex(name: "databricks.fe.jaws.enableContinuousTriggerAdvanced", defaultValue: false)
    }
    queue {
      enabled
      maxQueueTime
    }
    emailNotifications {
      ...EmailNotifications
    }
    notificationSettings {
      ...NotificationSettingsDetails
    }
    maxConcurrentRuns
    timeoutSeconds
    durationWarningSeconds
    health {
      rules {
        metric
        op
        value
      }
    }
    retryPolicy {
      ...RetryPolicy
    }
    clusterSpec {
      ...ClusterDetails
    }
    libraries {
      ...LibraryDetails
    }
    task {
      ...TaskAction
      ...ForEachManualBridge
    }
    tasks {
      ...TaskDetails
      task {
        ...ForEachManualBridge
      }
    }
    jobClusters {
      ...JobClusterDetails
    }
    gitSource {
      ...GitSourceDetails
    }
    tags {
      ...JobTagDetails
    }
    webhookNotifications {
      ...JobWebhookDetails
    }
    parameters @include(if: $includeJobParameters) {
      name
      default
    }
    health {
      rules {
        metric
        op
        value
      }
    }
    editMode
    deployment {
      kind
      metadataFilePath
    }
    environments {
      ...JobEnvironment
    }
    performanceTarget
  }

  ${L}
  ${p}
  ${O}
  ${M}
  ${N}
  ${P}
  ${o.aZ}
  ${x}
  ${U}
`,$=(0,n.J1)`
  fragment RunJobSettings on JobSettings {
    name
    tasks {
      taskKey
      task {
        ...TaskAction
        ... on JobsJobTask {
          forEachTask {
            manualGraphQlTaskSettingsBridge {
              taskKey
              task {
                ...TaskAction
              }
            }
          }
        }
      }
    }
    parameters @include(if: $includeJobParameters) {
      name
      default
    }
  }

  ${v}
`,V=(0,n.J1)`
  fragment JobTriggerState on Job {
    triggerState @include(if: $includeTriggerState) {
      periodic {
        nextRunTime
      }
    }
  }
`,Y=(0,n.J1)`
  fragment JobConfigIdentityInfo on Job {
    id
    creatorUser {
      ...RichUserData
    }
    creatorPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
      ...AclPrincipalData
    }
    runAsUser {
      ...RichUserData
    }
    runAsPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
      ...AclPrincipalData
    }
    grants {
      permission
      aclPath
      user {
        ...RichUserData
      }
      aclPrincipal {
        ...AclPrincipalData
      }
    }
  }
  ${i.j}
  ${i.E}
`,W=(0,n.J1)`
  query JobConfig(
    $jobId: ID!
    $useApi21: Boolean
    $includeSubscriptions: Boolean!
    $includeJobInRunJobTask: Boolean = false
    $includeJobParameters: Boolean = false
    $includeTaskDependencyOutcome: Boolean = false
    $includeTriggerState: Boolean = false
    $includePeriodicTrigger: Boolean = false
    $includeOnStreamingBacklogExceeded: Boolean = false
    $includeSourceInDbtAndSqlFile: Boolean = false
  ) @component(name: "Workflows.Orchestration.Other") {
    job(id: $jobId, useApi21: $useApi21, includeAcls: true, includeTriggerState: $includeTriggerState) {
      id
      untouched
      lastUpdatedTime
      managedBy @includeSafex(name: "databricks.fe.jaws.enableManagedByField", defaultValue: false)
      creator {
        id
        name
      }
      settings {
        ...JobConfiguration
      }
      links @includeSafex(name: "databricks.elasticspark.enableLinksUI", defaultValue: false) {
        model {
          catalog
          schema
          name
        }
      }
      effectiveBudgetPolicyId
        @includeSafex(name: "databricks.elasticspark.budgetpolicies.enableBudgetPoliciesInJobs", defaultValue: false)
      effectiveUsagePolicyId
        @includeSafex(name: "databricks.elasticspark.budgetpolicies.enableUsagePoliciesInJobs", defaultValue: false)
      permission
      jobType
      userActivityInfo @includeSafex(name: "databricks.fe.search.enableUserActivity", defaultValue: false) {
        assetType
        assetId
        isFavorite
      }
      ...JobConfigRunAs
      ...JobConfigIdentityInfo
      ...JobTriggerState
    }
  }

  ${F}
  ${o.fg}
  ${V}
  ${Y}
`;function B(e){return{query:W,variables:{jobId:e,useApi21:!0,...(0,l.L)()}}}let G=(0,n.J1)`
  query RunJobConfig(
    $jobId: ID!
    $includeSubscriptions: Boolean = false
    $includeJobInRunJobTask: Boolean = false
    $includeJobParameters: Boolean = false
    $includeSourceInDbtAndSqlFile: Boolean = false
  ) @component(name: "Workflows.Orchestration.Other") {
    job(id: $jobId, useApi21: true) {
      id
      settings {
        ...RunJobSettings
      }
    }
  }

  ${$}
`,J=(0,n.J1)`
  query RunJobAndTriggerConfig(
    $jobId: ID!
    $includeSubscriptions: Boolean = false
    $includeJobInRunJobTask: Boolean = false
    $includeJobParameters: Boolean = false
    $includeSourceInDbtAndSqlFile: Boolean = false
    $includePeriodicTrigger: Boolean = false
  ) @component(name: "Workflows.Orchestration.Other") {
    job(id: $jobId, useApi21: true) {
      id
      settings {
        ...RunJobSettings
        trigger {
          fileArrival {
            url
            minTimeBetweenTriggersSeconds
            waitAfterLastChangeSeconds
          }
          tableUpdate {
            tableNames
            condition
            minTimeBetweenTriggersSeconds
            waitAfterLastChangeSeconds
          }
          model @includeSafex(name: "databricks.fe.jaws.enableModelTriggerUI", defaultValue: false) {
            securableName
            aliases
            condition
            minTimeBetweenTriggersSeconds
            waitAfterLastChangeSeconds
          }
          sqlCondition @includeSafex(name: "sql_cond_triggers", defaultValue: false) {
            sqlQueryId
            warehouseId
          }
          ...JobPeriodicTrigger
          pauseStatus
        }
      }
    }
  }

  ${$}
  ${p}
`,z=(0,n.J1)`
  query JobParameters($jobId: ID!, $includeJobParameters: Boolean = false)
  @component(name: "Workflows.Orchestration.Other") {
    job(id: $jobId, useApi21: true) {
      id
      settings {
        parameters @include(if: $includeJobParameters) {
          name
          default
        }
      }
    }
  }
`,q=(0,n.J1)`
  fragment RunResolvedParameters on JobsResolvedValues {
    conditionTask {
      left
      right
    }
    dbtTask {
      commands
    }
    notebookTask {
      baseParameters {
        key
        value
      }
    }
    pythonWheelTask {
      namedParameters {
        key
        value
      }
      parameters
    }
    runJobTask {
      jobParameters {
        key
        value
      }
    }
    sparkJarTask {
      parameters
    }
    sparkPythonTask {
      parameters
    }
    sparkSubmitTask {
      parameters
    }
    sqlTask {
      parameters {
        key
        value
      }
    }
    forEachTask {
      inputs
    }
    cleanRoomsJarTask {
      parameters
    }
    pipelineTask @includeSafex(name: "pipeline_parameters", defaultValue: false) {
      pipelineTaskParameters {
        key
        value
      }
    }
  }
`,H=(0,n.J1)`
  fragment ForEachTaskSettings on JobsJobTask {
    forEachTask {
      task {
        clusterSpec {
          ...JobsClusterDetails
        }
        dependsOn {
          taskKey
          outcome @include(if: $includeTaskDependencyOutcome)
        }
        runIf
        description
        taskKey
        timeoutSeconds
        durationWarningSeconds
        environmentKey
        health {
          rules {
            metric
            op
            value
          }
        }
        task {
          ...JobsAllTasksFragment
        }
      }
    }
  }

  ${r.m}
  ${A}
`,j=(0,n.J1)`
  query JobsGetJobIdFromRun($input: JobsGetRunInput!) @component(name: "Workflows.Authoring.UI") {
    jobsGetRun: jobsGetRunWithApiVersion(input: $input, useApi21: true) {
      run {
        jobId
      }
    }
  }
`,K=(0,n.J1)`
  query JobsGetRunBreadcrumb($jobId: ID!) @component(name: "Workflows.Observability.Graphs") {
    job(id: $jobId, useApi21: true) {
      settings {
        name
      }
    }
  }
`,Q=(0,n.J1)`
  query JobSettingsMaxConcurrentRuns($jobId: ID!) @component(name: "Workflows.Observability.Graphs") {
    job(id: $jobId, useApi21: true) {
      settings {
        maxConcurrentRuns
      }
    }
  }
`,X=(0,n.J1)`
  query JobsGetRun(
    $input: JobsGetRunInput!
    $includeSubscriptions: Boolean!
    $useApi21: Boolean!
    $includeJobInRunJobTask: Boolean = false
    $includeQueueDuration: Boolean = false
    $includeQueueReason: Boolean = false
    $includeJobParameters: Boolean = false
    $includeResolvedValues: Boolean = false
    $includeTaskDependencyOutcome: Boolean = false
    $includeRunStatus: Boolean = false
    $includeDependencyInfo: Boolean = false
    $includeSourceInDbtAndSqlFile: Boolean = false
  ) @component(name: "Workflows.Authoring.UI") {
    jobsGetRun: jobsGetRunWithApiVersion(input: $input, useApi21: $useApi21) {
      effectivePermissionLevel
        @includeSafex(name: "databricks.fe.jaws.enablePermissionLevelInGetRun", defaultValue: false)
      run {
        ...JobRunDetailsSectionFragment
        ...TaskRunDetailsSectionFragment
        originalAttemptRunId
        runPageUrl
        runType
        description
        format
        parentRunId
        taskKey
        attemptNumber
        dependencyInfo @include(if: $includeDependencyInfo) {
          truncated
          dependencies {
            dependencyType
            language
            name
            version
          }
        }
        task {
          ...JobsAllTasksFragment
          ...ForEachTaskSettings
          ...ForEachTaskStats
        }
        tasks {
          attemptNumber
          runId
          runPageUrl
          state {
            ...RunStateFragment
          }
          status @include(if: $includeRunStatus) {
            ...RunStatusFragment
          }
          durationInfo {
            cleanupDuration
            endTime
            executionDuration
            setupDuration
            startTime
            runDuration
            queueDuration @include(if: $includeQueueDuration)
            waitDuration
            estimatedWaitingEndTime
              @includeSafex(name: "databricks.elasticspark.performance.enableWaitingState", defaultValue: false)
          }
          runTimings @includeSafex(name: "databricks.fe.jaws.enableRunTimings", defaultValue: false) {
            executionTimestamps {
              queuedMs
              waitingForResourcesOrPythonStartingMs
              libraryInstallationMs
              runningMs
            }
            repairsAccumulatedDurations {
              queuedAccumulatedMs
              waitingForResourcesOrPythonStartingAccumulatedMs
              runningAccumulatedMs
            }
          }
          clusterInstance {
            clusterId
            sparkContextId
            clusterInfo {
              attributes {
                sparkVersion
                kind
                enableServerlessCompute
              }
            }
          }
          settings {
            clusterSpec {
              ...JobsClusterDetails
            }
            dependsOn {
              taskKey
              outcome @include(if: $includeTaskDependencyOutcome)
            }
            runIf
            description
            taskKey
            timeoutSeconds
            durationWarningSeconds
            environmentKey
            health {
              rules {
                metric
                op
                value
              }
            }
            task {
              ...JobsAllTasksFragment
              ...ForEachTaskSettings
              ...ForEachTaskStats
            }
          }
          gitSource {
            gitUrl
            gitProvider
            gitBranch
            gitTag
            gitCommit
            gitSnapshot {
              usedCommit
            }
          }
          taskValueCount
          resolvedValues @include(if: $includeResolvedValues) {
            ...RunResolvedParameters
          }
          effectivePerformanceTarget
          effectiveCompute {
            hardwareAccelerator
            memory
          }
        }
        triggerInfo {
          ...JobRunTriggerInfo
        }
        clusterSpec {
          ...JobsClusterDetails
        }
        clusterInstance {
          clusterId
          sparkContextId
        }
        overridingParameters {
          notebookParams {
            key
            value
          }
          jarParams
          pythonParams
          sparkSubmitParams
          pythonNamedParams {
            key
            value
          }
          sqlParams {
            key
            value
          }
          dbtCommands
          pipelineParams {
            fullRefresh
          }
        }
        jobClusters {
          ...JobsJobClusterDetails
        }
        repairHistory {
          id
          state {
            lifeCycleState
            resultState
            stateMessage
            userCancelledOrTimedout
            queueReason @include(if: $includeQueueReason)
          }
          type
          startTime
          endTime
          tasks
          taskRunIds
          effectivePerformanceTarget
        }
        gitSource {
          gitUrl
          gitProvider
          gitBranch
          gitTag
          gitCommit
          gitSnapshot {
            usedCommit
          }
        }
        taskValueCount
        jobParameters @include(if: $includeJobParameters) {
          ...RunJobParameter
        }
        environments {
          ...JobEnvironment
        }
        effectivePerformanceTarget
      }
    }
  }

  ${r.m}
  ${A}
  ${k}
  ${u.Wg}
  ${u.yu}
  ${q}
  ${u.qk}
  ${c.WB}
  ${H}
  ${d.d}
  ${c.DP}
  ${U}
  ${u.Lw}
`,Z=(0,n.J1)`
  query ListIterationRetries($input: JobsListIterationsInput!, $includeQueueReason: Boolean = false)
  @component(name: "Workflows.Orchestration.Other") {
    jobsListIterations(input: $input) {
      iterations {
        originalAttemptRunId
        tasks {
          runId
          attemptNumber
          runPageUrl
          state {
            ...RunStateFragment
          }
          status {
            ...RunStatusFragment
          }
        }
      }

      apiError {
        message
      }
    }
  }

  ${c.WB}
  ${c.DP}
`,ee=(0,n.J1)`
  query JobsGetPermissionLevel($input: JobsGetPermissionLevelInput!) @component(name: "Workflows.Orchestration.Other") {
    jobsGetPermissionLevel(input: $input) {
      perm
    }
  }
`,et=(0,n.J1)`
  mutation TestTrigger($input: JobsTestTriggerInput!) @component(name: "Workflows.Triggers.File") {
    jobsTestTrigger(input: $input) {
      apiError {
        message
      }
      fileArrival {
        usingFileEvents
        locationName
      }
      table {
        tableStatus {
          tableName
          usingFileEvents
          locationName
          usingDeltaSharing
        }
      }
      sqlCondition {
        __typename
      }
    }
  }
`,ea=(0,n.J1)`
  query SqlAlertGet($alertId: String!) @component(name: "Workflows.Tasks.SQL") {
    sqlAlertGet(alertId: $alertId)
      @rest(type: "SqlAlert", path: "/alerts/{args.alertId}", endpoint: "redashApi", method: "GET") {
      id
      name
      permissionTier
      query {
        dataSourceId
      }
    }
  }
`,en=(0,n.J1)`
  query SqlDashboardGet($dashboardId: String!) @component(name: "Workflows.Tasks.SQL") {
    sqlDashboardGet(dashboardId: $dashboardId)
      @rest(type: "SqlDashboard", path: "/dashboards/{args.dashboardId}", endpoint: "redashApi", method: "GET") {
      id
      name
      dataSourceId
      permissionTier
      widgets {
        id
        options {
          title
          parameterMappings
          position {
            sizeX
            sizeY
            autoHeight
            row
            col
          }
        }
        visualization {
          id
          query {
            id
            dataSourceId
            options {
              parameters {
                name
                title
                value
                type
                multiValuesOptions {
                  separator
                }
                enumOptions
                queryId
              }
            }
          }
        }
      }
    }
  }
`,er=(0,n.J1)`
  query SqlQueryGet($queryId: String!) @component(name: "Workflows.Tasks.SQL") {
    sqlQueryGet(queryId: $queryId)
      @rest(type: "SqlQuery", path: "/queries/{args.queryId}", endpoint: "redashApi", method: "GET") {
      id
      name
      query
      dataSourceId
      options {
        applyAutoLimit
        parameters {
          name
          title
          type
          value
          multiValuesOptions {
            separator
          }
          enumOptions
          queryId
        }
      }
    }
  }
`,ei=(0,n.J1)`
  fragment SqlWarehouseDetails on Lakehouse {
    id
    name
    state
    size
    enableServerlessCompute
    warehouseType
  }
`,eo=(0,n.J1)`
  query SqlWarehouseSelectGet($id: ID!) @component(name: "Workflows.Tasks.SQL") {
    lakehouse(id: $id) {
      ...SqlWarehouseDetails
    }
  }
  ${ei}
`,es=(0,n.J1)`
  query SqlQueryAsDropdownOptionsGet($queryId: String!) @component(name: "Workflows.Tasks.SQL") {
    sqlQueryAsDropdownOptionsGet(queryId: $queryId)
      @rest(
        type: "[SqlQueryParameterDropdownOption]"
        path: "/queries/{args.queryId}/dropdown"
        endpoint: "redashApi"
        method: "GET"
      ) {
      value
    }
  }
`,el=(0,n.J1)`
  query ClusterNameGet($id: String!) @component(name: "Workflows.Authoring.UI") {
    cluster(id: $id) {
      id
      attributes {
        name
      }
    }
  }
`},987229:(e,t,a)=>{a.d(t,{H5:()=>T,NQ:()=>I,Zh:()=>E,fd:()=>A,wG:()=>C,wg:()=>R});var n=a(46487),r=a.n(n),i=a(453471),o=a.n(i),s=a(692738),l=a(645787),u=a(686560),c=a(689017),d=a(886100),m=a(22191),p=a(711489),f=a(820894);function g(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}let h=r()({strict:!0,storeAsString:!0}),E=".dbsql-formatter-config.json",b=!1,T=()=>b,y=f.GZ,I=()=>o()(y),A=e=>{y={...y,...e}},v=["none","uppercase","lowercase"],S=e=>v.includes(e),_={printWidth:{typeValidation:e=>"number"==typeof e,valueValidation:e=>0<=e&&Number.isInteger(e)},indentationWidth:{typeValidation:e=>"number"==typeof e,valueValidation:e=>0<=e&&e<=99&&Number.isInteger(e)},indentationStyle:{typeValidation:e=>"spaces"===e||"tabs"===e,valueValidation:e=>"spaces"===e||"tabs"===e},numNewLinesBetweenClauses:{typeValidation:e=>"number"==typeof e,valueValidation:e=>0<=e&&e<=99&&Number.isInteger(e)},numNewLinesBetweenStatements:{typeValidation:e=>"number"==typeof e,valueValidation:e=>0<=e&&e<=99&&Number.isInteger(e)},commaPosition:{typeValidation:e=>"beginning"===e||"end"===e,valueValidation:e=>"beginning"===e||"end"===e},keywordCasing:{typeValidation:S,valueValidation:e=>["none","uppercase","lowercase"].includes(e)},identifierCasing:{typeValidation:S,valueValidation:e=>["none","uppercase","lowercase"].includes(e)},functionNameCasing:{typeValidation:S,valueValidation:e=>["none","uppercase","lowercase"].includes(e)},shouldExpandCommaLists:{typeValidation:e=>"boolean"==typeof e,valueValidation:e=>!0},shouldExpandExpressions:{typeValidation:e=>"boolean"==typeof e,valueValidation:e=>!0},shouldExpandCaseStatements:{typeValidation:e=>"boolean"==typeof e,valueValidation:e=>!0},shouldExpandInStatements:{typeValidation:e=>"boolean"==typeof e,valueValidation:e=>!0},shouldExpandBetweenConditions:{typeValidation:e=>"boolean"==typeof e,valueValidation:e=>!0},shouldBreakOnJoinSections:{typeValidation:e=>"boolean"==typeof e,valueValidation:e=>!0}},C=(e,t)=>{let a=_[e];return a.typeValidation(t)&&a.valueValidation(t)},R=({enabled:e=!0,memoizedCallback:t})=>{(0,s.useEffect)(()=>{var a,n;e&&(a=t??(()=>{}),(n=function*(){if(b)return;b=!0;try{let e=(0,u.d)("user_new",""),t=yield(0,l.qQ)(`/Users/${e}/${E}`);if(!t.httpError){let e=h.parse(t.data),a=(e=>{let t={};for(let a of Object.keys(_)){if(!(a in e))continue;let n=e[a];C(a,n)&&(t[a]=n)}return t})(e);y={...y,...a}}a()}catch(e){e instanceof SyntaxError?((0,c.wi)({editor_event_log:{new_sql_formatter_log:{event_name:p.J5.NewSqlFormatterEventName.NEW_SQL_FORMATTER_EVENT_NAME_INVALID_JSON}}}),d.iT.log(m.Es.Editor,"NewSqlFormatterInvalidJsonConfig",{error:e})):(0,c.wi)({editor_event_log:{new_sql_formatter_log:{event_name:p.J5.NewSqlFormatterEventName.NEW_SQL_FORMATTER_EVENT_NAME_ERROR_FETCHING_OPTIONS}}})}},function(){var e=this,t=arguments;return new Promise(function(a,r){var i=n.apply(e,t);function o(e){g(i,a,r,o,s,"next",e)}function s(e){g(i,a,r,o,s,"throw",e)}o(void 0)})})())},[t,e])}},989584:(e,t,a)=>{a.d(t,{F$:()=>l,JI:()=>o,Kh:()=>i,cU:()=>s,wn:()=>r});var n=a(432993);function r(e){e.frontend_log_event_id??=n.n.generateUuidV4()}function i(e){return"protoLog"in e?e.protoLog.frontend_log_event_id:e.usageLog.eventId}function o(e){return Object.keys(e.entry??{})[0]}let s=e=>void 0!==e.entry,l=e=>{if(void 0!==e.entry)return Object.keys(e.entry).find(t=>e.entry&&void 0!==e.entry[t])||"unknown";return"unknown"}},993618:(e,t,a)=>{a.d(t,{v:()=>r});var n=a(529129);function r(e){return e.glob?(0,n.e_)(e.glob)?.path??null:e.file?.path??e.notebook?.path??null}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/67707.50ffb5e3cc.chunk.js.map