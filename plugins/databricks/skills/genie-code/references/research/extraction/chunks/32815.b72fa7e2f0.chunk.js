(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[156,3217,4972,12937,13268,17293,32815,49177,55308,77775,84885],{2382:(e,t,r)=>{"use strict";r.d(t,{z:()=>s});var a=r(297768),n=r(886100),i=r(22191),o=r(747129);let s=(e,t,r)=>{if(!t)return new Set;let s=new Set([t.IDENTIFIER,t.BACKQUOTED_IDENTIFIER,t.STRING,t.DOUBLEQUOTED_STRING,t.INTEGER_VALUE,t.DECIMAL_VALUE,t.RIGHT_PAREN,t.RIGHT_BRACKET,t.BIGINT_LITERAL,t.SMALLINT_LITERAL,t.TINYINT_LITERAL,t.FLOAT_LITERAL,t.DOUBLE_LITERAL,t.BIGDECIMAL_LITERAL]);try{let l=e?.trim();if(!l)return new Set;let u=a.Zo.fromString(l),c=new t(u);c.removeErrorListeners(),c.addErrorListener({syntaxError:()=>{},reportAttemptingFullContext:()=>{},reportContextSensitivity:()=>{},reportAmbiguity:()=>{}});let d=new a.jB(c);d.fill();let f=new Set,p=t.WS,m=t.WS;for(let e=0;d.get(e).type!==a.ou.EOF;e++){let a=d.get(e);if(a.type===t.SIMPLE_COMMENT||a.type===t.BRACKETED_COMMENT)continue;let n=e>=2&&r(d.get(e-2));if(!s.has(p)&&!n&&m===t.COLON&&a.text){if(a.type===t.IDENTIFIER||r(a))f.add(a.text);else if(a.type===t.BACKQUOTED_IDENTIFIER){let e=a.text,t=e.substring(1,e.length-1);t.trim().length>0&&f.add(t)}}p=m,m=a.type}return n.iT.sev2BurnRate(i.Es.Lakeview,"Lexing query text for SEA parameter markers",o.i1.P99,o.Ip.Min10,!0),f}catch(r){return n.iT.sev2BurnRate(i.Es.Lakeview,"Lexing query text for SEA parameter markers",o.i1.P99,o.Ip.Min10,!1,{error:r,lexer:t?.name,queryText:e}),new Set}}},2419:(e,t,r)=>{"use strict";r.d(t,{G:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enableUndoRedo",!1)}},2769:(e,t,r)=>{"use strict";r.d(t,{NF:()=>i,NL:()=>s,Nq:()=>o,iI:()=>n,ms:()=>l,n7:()=>a});let a='"Menlo", "Monaco", "Consolas", "Ubuntu Mono", "Source Code Pro", monospace',n=13,i=22,o=16,s=13,l=12},10680:(e,t,r)=>{"use strict";r.d(t,{p:()=>f});var a=r(610435),n=r(692738),i=r(160603),o=r(441535),s=r(304926),l=r(518726),u=r(449853),c=r(742996);function d({children:e}){return(0,a.Y)(l.Q,{provider:i.QueryClientProvider,clientAccessor:u.queryClientByWorkspace,children:e})}function f(){let e=(0,s.jE)(),t=(0,o.W)("databricks.fe.filebrowser.enableSharedQueryClient",!1),r=t?e:u.queryClientByWorkspace.getActiveValue(),a=(0,n.useCallback)(r=>t?e.invalidateQueries(r):u.queryClientByWorkspace.getActiveValue().invalidateQueries(r),[t,e]),i=(0,n.useCallback)(()=>a((0,c.f)({})),[a]);return{FileBrowserQueryClientProvider:t?n.Fragment:d,queryClient:r,invalidateFileBrowserQueries:a,invalidateAllFilesQueries:i}}},12623:(e,t,r)=>{"use strict";r.d(t,{n:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.thumbnails.enableDashboardThumbnailUpload",!1)}},13695:(e,t,r)=>{"use strict";r.d(t,{M:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.extraTZQueryEnabled",!1)}},18910:(e,t,r)=>{"use strict";r.d(t,{Du:()=>u,LT:()=>s,Ot:()=>c,QU:()=>m,US:()=>p,VI:()=>d,Vq:()=>f,bF:()=>b,dE:()=>h,l9:()=>i,pQ:()=>g,uV:()=>l});var a,n=r(310338),i=((a={})[a.DO_NOT_POLL=0]="DO_NOT_POLL",a[a.MESSAGE=1]="MESSAGE",a[a.RESULT=2]="RESULT",a);let o=new Set(["SUBMITTED","IN_PROGRESS","FETCHING_METADATA","FILTERING_CONTEXT","ASKING_AI","PENDING_WAREHOUSE","EXECUTING_QUERY"]);function s(e){return!!(e&&o.has(e))}function l(e,t,r){return"CANCELED"===e||!t&&!s(r)}function u(e){return s(e.status)&&e.auto_regenerate_count>0}function c(e){return!!(!e||e.status&&["PENDING_WAREHOUSE","EXECUTING_QUERY"].includes(e.status))}function d(e){if(!e)return 0;let t=e.status,r=e.result?.statement_id,a=!1===e.is_final||s(t);if(e.__force_poll_result)return 3;if(e.__is_optimistic_update||!0===e.is_final||!a)return 0;if(r&&("EXECUTING_QUERY"===t||"PENDING_WAREHOUSE"===t))return 3;return 1}function f(e,t){var r,a,i;let o;for(let l of[...(r=t||[],a=t=>t.id===e,i=!0,o=r.findIndex(a),r.slice(0,o>=0?i?o+1:o:r.length))].reverse()){if((0,n.sn)(l)||l.result?.statement_id)return l;if(!(0,n.NL)(l)&&s(l.status))break}}function p(e,t){if(!e)return;let r=e.data,a=r?.rows.length,n=e?.row_count;if(!t)return n;return a||0===n?a:n}function m(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)){let r=e[t];if(void 0!==r)return r}}function g(e){return e?.is_truncated||e?.data?.meta?.isTruncated}function h(e){return e.client_context?.genie_app_context?.enable_verification===!0}function b(e){return(1&d(e))==1}},26026:(e,t,r)=>{"use strict";r.d(t,{T:()=>o});var a=r(646171);function n(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function i(e){return function(){var t=this,r=arguments;return new Promise(function(a,i){var o=e.apply(t,r);function s(e){n(o,a,i,s,l,"next",e)}function l(e){n(o,a,i,s,l,"throw",e)}s(void 0)})}}function o(e){return i(function*(){var t;return yield(t=()=>i(function*(){return(yield(0,a.p)().get("tree/get-node-by-path",{params:{full_path:e}})).data.info})(),i(function*(){try{return yield t()}catch(e){if(e?.response?.status===404)return;throw e}})())})()}},26150:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{O:()=>g,d:()=>h});var n=r(610435),i=r(956935),o=r(692738),s=r(731392),l=r(214056),u=r(953900),c=r(320236),d=r(888708),f=e([s,l,u,c]);function p(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function m(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){p(i,a,n,o,s,"next",e)}function s(e){p(i,a,n,o,s,"throw",e)}o(void 0)})}}[s,l,u,c]=f.then?(await f)():f;let b="#fafbfc",y={sql:"sql",md:"markdown",python:"python",r:"r",scala:"scala",text:"text"},v=({placeholder:e,backgroundColor:t,language:r="Text",theme:a})=>{let n=(0,o.useRef)((0,u.OI)()),[i,l]=(0,o.useState)(!e),[d,f]=(0,o.useState)(t??n.current?.getColorTheme().getColor("editor.background",!1)?.toString()??b),p=Object.hasOwn(y,r)?y[r]:r;return(0,o.useEffect)(()=>{if(!t){let e=n.current?.onDidColorThemeChange(e=>{f(t=>e?.getColor("editor.background",!1)?.toString()??t)});return()=>{e?.dispose()}}},[t]),(0,o.useEffect)(()=>{e&&l(!1),m(function*(){switch(p){case"sql":(0,s.enableCustomSQLSyntax)();break;case"python":(0,s.enableCustomPythonSyntax)();break;case"scala":(0,s.enableCustomScalaSyntax)()}(0,c.Zf)(a)?(0,c.WY)(a):yield(0,c.Be)(a),l(!0)})()},[p,a,e]),{languageAndThemeLoaded:i,backgroundColor:d,editorLanguage:p}},E=(0,i.AH)({padding:"8px",fontSize:"12px",fontStretch:"normal",fontFamily:"'Menlo', 'Monaco', 'Consolas', 'Ubuntu Mono', 'Source Code Pro', monospace",overflow:"auto",whiteSpace:"pre"});function g({style:e,children:t,format:r,theme:a,language:i="Text",backgroundColor:s,placeholder:u}){let[c,f]=(0,o.useState)(""),{languageAndThemeLoaded:p,backgroundColor:h,editorLanguage:y}=v({placeholder:u,backgroundColor:s,language:i,theme:a});return(0,o.useEffect)(()=>{let e=!1;return p&&m(function*(){let a=t;if(r)try{a=(0,d.s)(t)}catch{}let n=yield(0,l.Q)().colorize(a,y,{});e||f(n)})(),()=>{e=!0}},[p,t,y,r]),(0,n.FD)(n.FK,{children:[!p&&u,(0,n.Y)("div",{css:E,style:{backgroundColor:h??b,display:p?void 0:"none",...e},"data-lang":y,dangerouslySetInnerHTML:{__html:c}})]})}function h({style:e,children:t,format:r,theme:a,language:i="Text",backgroundColor:s,placeholder:u}){let c=(0,o.useRef)(null),f=function(e,{format:t=!1}={}){return(0,o.useMemo)(()=>{if(!t)return e;try{return(0,d.s)(e)}catch{return e}},[e,t])}(t,{format:r}),{languageAndThemeLoaded:p,backgroundColor:m,editorLanguage:g}=v({placeholder:u,backgroundColor:s,language:i,theme:a});return(0,o.useEffect)(()=>{p&&c.current&&(0,l.Q)().colorizeElement(c.current,{theme:a})},[p,t,g,a]),(0,n.FD)(n.FK,{children:[!p&&u,(0,n.Y)("div",{ref:c,css:E,style:{backgroundColor:m??b,display:p?void 0:"none",...e},"data-lang":g,children:f})]})}a()}catch(e){a(e)}})},32811:(e,t,r)=>{"use strict";r.d(t,{T:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enableStableIdsInUrl",!1)}},32998:(e,t,r)=>{"use strict";r.d(t,{w:()=>i});let a=".dbquery.ipynb",n=".dbalert.json",i=e=>{if(e.endsWith(a))return e.slice(0,-a.length);if(e.endsWith(n))return e.slice(0,-n.length);return e}},33576:(e,t,r)=>{"use strict";r.d(t,{Qj:()=>s,SX:()=>i,mQ:()=>o});var a=r(586356),n=r(409666);let i=(0,r(315592).Xr)({type:"filter-text-entry",channelIndex:{fields:1},validateEditorSpec:e=>({validatedSpec:e}),version:n.B0,getEncodingMapMeta:()=>n.OM,allowDisaggregatedData:!1,allowSelection:!0,isRenderable:a.q,normalizeDecoupledSpec:(e,t)=>e}),o="contains",s=e=>[{mode:"contains",label:e.formatMessage({id:"9xzblW",defaultMessage:"Contains"})},{mode:"exact-match",label:e.formatMessage({id:"qfCcAQ",defaultMessage:"Exactly matches"})},{mode:"starts-with",label:e.formatMessage({id:"wccp0v",defaultMessage:"Starts with"})}]},34021:(e,t,r)=>{"use strict";r.d(t,{N:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enableCastDateTruncToDateOnExport",!1)}},38054:(e,t,r)=>{"use strict";r.d(t,{Pj:()=>o,nR:()=>s,y$:()=>i});var a=r(371964),n=r(881551);let i=r(353345).y,o=a.Pj,s=n.n},39659:(e,t,r)=>{"use strict";r.d(t,{y:()=>a});class a{resolve;reject;promise;constructor(){this.resolve=()=>{},this.reject=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}},40211:(e,t,r)=>{"use strict";r.d(t,{A:()=>d,h:()=>c});var a,n,i,o,s,l=r(692738);function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(null,arguments)}let c=(0,l.forwardRef)(({title:e,titleId:t,...r},c)=>l.createElement("svg",u({width:14,height:14,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:c,"aria-labelledby":t},r),e?l.createElement("title",{id:t},e):null,a||(a=l.createElement("path",{d:"M4.667 0H8.81l-4.3 12.742a.66.66 0 0 1-.626.45H.66a.66.66 0 0 1-.625-.871L4.04.449A.66.66 0 0 1 4.667 0Z",fill:"url(#a)"})),n||(n=l.createElement("path",{d:"M10.687 8.546h-6.57a.304.304 0 0 0-.207.527l4.222 3.94a.663.663 0 0 0 .452.178h3.72l-1.617-4.645Z",fill:"#0078D4"})),i||(i=l.createElement("path",{d:"M4.667 0a.655.655 0 0 0-.627.458l-4 11.852a.659.659 0 0 0 .622.881h3.307a.707.707 0 0 0 .542-.461l.798-2.351 2.85 2.658c.119.098.269.153.424.154h3.706l-1.626-4.645-4.738.002L8.825 0H4.667Z",fill:"url(#b)"})),o||(o=l.createElement("path",{d:"M9.959.449A.66.66 0 0 0 9.334 0H4.717a.66.66 0 0 1 .625.449L9.349 12.32a.66.66 0 0 1-.625.87h4.617a.66.66 0 0 0 .625-.87L9.959.449Z",fill:"url(#c)"})),s||(s=l.createElement("defs",null,l.createElement("linearGradient",{id:"a",x1:6.177,y1:.977,x2:1.875,y2:13.688,gradientUnits:"userSpaceOnUse"},l.createElement("stop",{stopColor:"#114A8B"}),l.createElement("stop",{offset:1,stopColor:"#0669BC"})),l.createElement("linearGradient",{id:"b",x1:7.521,y1:6.901,x2:6.526,y2:7.237,gradientUnits:"userSpaceOnUse"},l.createElement("stop",{stopOpacity:.3}),l.createElement("stop",{offset:.071,stopOpacity:.2}),l.createElement("stop",{offset:.321,stopOpacity:.1}),l.createElement("stop",{offset:.623,stopOpacity:.05}),l.createElement("stop",{offset:1,stopOpacity:0})),l.createElement("linearGradient",{id:"c",x1:6.974,y1:.607,x2:11.697,y2:13.189,gradientUnits:"userSpaceOnUse"},l.createElement("stop",{stopColor:"#3CCBF4"}),l.createElement("stop",{offset:1,stopColor:"#2892DF"})))))),d=r.p+"static/media/azure.789515373ae562cc8c8885ced55f8a06.svg"},40984:(e,t,r)=>{"use strict";r.d(t,{S:()=>o,a:()=>i});let a=e=>e.filter(e=>void 0!==e).join(",").toLowerCase(),n=e=>{let t=0;for(let r=0;r<e.length;r++)t=(t<<5)-t+e.charCodeAt(r)|0;return t},i=({query:e,location:t,source:r})=>n(a([e,t?.first_line,t?.first_column,r])),o=({query:e,location:t,catalog:r,schema:i,precedingCreatedIdentifiers:o})=>n(a([e,t?.first_line,t?.first_column,r,i,...o]))},42289:(e,t,r)=>{"use strict";r.d(t,{GL:()=>s,cc:()=>u,iw:()=>c,k2:()=>o,ub:()=>d});var a,n,i=r(864833),o=((a={}).TRANSACTIONS_PER_SECOND="TransactionsPerSecond",a.OPEN_CONNECTIONS="OpenConnections",a.DEADLOCKS="Deadlocks",a.CPU_UTILIZATION_PERCENT="CPUUtilizationPercent",a.ROWS_FETCHED_PER_SECOND="RowsFetchedPerSecond",a.ROWS_RETURNED_PER_SECOND="RowsReturnedPerSecond",a.ROWS_INSERTED_PER_SECOND="RowsInsertedPerSecond",a.ROWS_UPDATED_PER_SECOND="RowsUpdatedPerSecond",a.ROWS_DELETED_PER_SECOND="RowsDeletedPerSecond",a.STORAGE_UTILIZATION_BYTES="StorageUtilizationBytes",a.STORAGE_THROUGHPUT_UTILIZATION_PERCENT="StorageThroughputUtilizationPercent",a.BUFFER_CACHE_HIT_RATE_PERCENT="BufferCacheHitRatePercent",a.LOCAL_SSD_CACHE_HIT_RATE_PERCENT="LocalSSDCacheHitRatePercent",a),s=((n={}).ROWS_PER_SECOND_METRICS="RowsPerSecondMetrics",n);let l=`${i.W.LIST_PAGE}/online-stores`,u={LIST:l,VIEW:`${l}/:storeName`},c={Min:2,Max:35},d=3e3},45525:(e,t,r)=>{"use strict";r.d(t,{uT:()=>i,Oy:()=>o,tv:()=>s,ld:()=>l,Yt:()=>u,mX:()=>c,e3:()=>d,HF:()=>f,TO:()=>p,O6:()=>m,Em:()=>g,fC:()=>h,D$:()=>a.D});var a=r(736813),n=r(441535);function i(){return(0,n.W)("databricks.fe.metricViews.enableAssistantUiDiffs",!1)}function o(){return(0,n.W)("databricks.fe.metricViews.enableCatalogExplorerTools",!0)}function s(){return(0,n.W)("databricks.fe.metricViews.enableColumnExpressionBuilder",!1)}function l(){return(0,n.W)("databricks.fe.metricViews.enableDimensionExpressionBuilder",!1)}function u(){return(0,n.W)("databricks.fe.metricViews.enableInterfaceProvider",!1)}function c(){return(0,n.W)("databricks.fe.metricViews.enableJoinCardinality",!1)}function d(){return(0,n.W)("databricks.fe.metricViews.enableJoinRely",!1)}function f(){return(0,n.W)("databricks.fe.metricViews.disableOwnerEditForMaterialization",!0)}function p(){return(0,n.W)("databricks.fe.metricViews.enableParameters",!1)}function m(){return(0,n.W)("databricks.fe.metricViews.enableWindowInclusivity",!1)}function g(){return(0,n.W)("databricks.fe.metricViews.enableWindowOffset",!1)}function h(){return(0,n.W)("databricks.fe.metricViews.enableRichSqlEditor",!1)}},50470:(e,t,r)=>{"use strict";r.d(t,{h:()=>n});var a=r(141078);let n=(0,a.J1)`
  query UserActivityInfo($type: UseractivityAssetType!, $id: String!) @component(name: "Lakeview.DatabricksOne") {
    userActivityInfo(assetType: $type, assetId: $id) {
      assetType
      assetId
      isFavorite
    }
  }
`},51759:(e,t,r)=>{"use strict";r.d(t,{b:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enableDashboardBookmarks",!1)}},51770:(e,t,r)=>{"use strict";r.d(t,{zV:()=>_,t1:()=>A,Ej:()=>C});var a=r(692738),n=r(141078),i=r(686560),o=r(605945),s=r(29824),l=r(221884),u=r(767399),c=r(595615),d=r(301077),f=r(842082);let p=()=>`${(0,o.Iq)()}-${(0,i.d)("userId",-1)}-redash-tabbededitor-pins`,m=()=>{let e=p();try{let t=localStorage.getItem(e);if(!t)return[];let r=JSON.parse(t);if(!Array.isArray(r))return[];return r.flatMap(e=>{if(!e||"object"!=typeof e)return[];let{catalogName:t,databaseName:r,tableName:a}=e;if("string"!=typeof t&&null!=t||"string"!=typeof r||"string"!=typeof a)return[];let[n]=a.split(".").reverse();return[{catalog:t??"",schema:r,entity:n,objectType:s.an.TABLE}]})}catch{return[]}};function g({catalog:e,schema:t,entity:r}){return{catalogName:e,databaseName:t,tableName:`${e}.${t}.${r}`}}function h(){let{setFavoriteTables:e}=(0,l.m_)();return(0,a.useCallback)(t=>{let r,a;r=p(),a=JSON.stringify(t.map(g)),(0,d.Q)(r,a,e=>{throw e}),e(t)},[e])}var b=r(483588),y=r(217930),v=r(540890),E=r(305939),I=r(641760),T=r(278983),w=r(707076);let S=e=>{y.Y5.forEach(t=>e.evict({fieldName:t,broadcast:!0})),e.gc()},k=(0,n.J1)`
  query ListFavoriteTables @component(name: "Search.WorkspaceSearch") {
    useractivityListFavoriteAssets(input: { filter: { types: [UC_TABLE] }, orderBy: "favorite_time desc" }) {
      assets {
        asset {
          id
          name
          type
        }
      }
    }
  }
`;function A(e){var t;let r=(0,I.ei)()&&(0,w.MH)(),a=[],{data:i,loading:o,error:l}=(0,n.IT)(k,{skip:e?.skip||!r});i?.useractivityListFavoriteAssets?.assets?.forEach(e=>{let t=((e,t)=>{let r=e?.split(".")??[];if(3!==r.length)return null;return{catalog:r[0],schema:r[1],entity:r[2],objectType:s.an.TABLE,securable_id:t}})(e.asset?.name,e.asset?.id??void 0);t&&a.push(t)});let d=(t={...e,enabled:e?.skip||e?.disableLegacy},(0,c.AO)({queryKey:u.S,queryFn:()=>m(),...t})),f=a.concat(d.data??[]);return{data:f.length>0?f:void 0,loading:o,error:l}}function _(){let e,t=(0,w.MH)(),r=I.jN,[n]=(0,v.s)(),i=(e=h(),(0,a.useCallback)(t=>{let r=m();e(r.find(e=>(0,f.N1)(e,t))?r:[...r,t])},[e]));return(0,a.useCallback)((e,a)=>{if(t&&a&&r({catalog:e.catalog})){let e={id:a,type:b.z$1.UC_TABLE};(0,T.y)("clientsideEvent",{eventType:"unifiedFavorites",eventName:`addFavoriteAsset-${e.type}`,source:y.ek.SchemaBrowser}),n({variables:{input:{asset:e}},update:S})}else i(e)},[i,n,r,t])}function C(){let e,t=(0,w.MH)(),r=I.jN,[n]=(0,E.V)(),i=(e=h(),(0,a.useCallback)(t=>{e(m().filter(e=>!(0,f.N1)(e,t)))},[e]));return(0,a.useCallback)((e,a)=>{if(t&&a&&r({catalog:e.catalog})){let t={id:a,type:b.z$1.UC_TABLE};(0,T.y)("clientsideEvent",{eventType:"unifiedFavorites",eventName:`removeFavoriteAsset-${t.type}`,source:y.ek.SchemaBrowser}),n({variables:{input:{asset:t}},update:S}),i(e)}else i(e)},[i,n,r,t])}},51927:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enableDlmvLineage",!0)}},52439:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.dashboardsai.enableGetDashboardConfigTool",!0)}},52640:(e,t,r)=>{"use strict";r.d(t,{Oc:()=>s,YA:()=>u,np:()=>o,vP:()=>c});var a=r(377063),n=r.n(a),i=r(342411);function o(e){return["d_now","d_yesterday"].includes(e)}let s=[d("d_now",(0,i.zR)({id:"Ibgd62",defaultMessage:"Today/Now"}),()=>n()(),"D MMM"),d("d_yesterday",(0,i.zR)({id:"oGpR1T",defaultMessage:"Yesterday"}),()=>n()().subtract(1,"day"),"D MMM")],l=new Map(s.map(e=>[e.name,e]));function u(e){return l.has(e)}function c(e){return e?l.get(e):void 0}function d(e,t,r,a){return{name:e,unformattedName:t,value:r,hint:()=>r().format(a)}}},55079:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",d:"M12.5 8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CircleIcon";let l=s},55780:(e,t,r)=>{"use strict";r.d(t,{_:()=>l});var a=r(692738),n=r(643587),i=r(672952),o=r(416400),s=r(711489);function l({errorMessage:e,stackTrace:t,testCode:r}){let{value:u}=(0,i.er)();return{diagnoseError:(0,a.useCallback)(()=>{(0,o.uT)({type:o.bS.PAGE_TRIGGERED_CHAT_EVENT,payload:{message:n.hC,context:{errorMessage:e,stackTrace:t??"",...r&&{currentCodeBlock:{code:r,language:"python"}},triggerSource:s.jZ.AssistantTriggerSource_Type.DIAGNOSE_BUTTON},messageTags:[]}})},[e,t,r]),isEnabled:u??!1}}},61635:(e,t,r)=>{"use strict";r.d(t,{J:()=>i,h:()=>o});var a,n=r(988759),i=((a={}).MERLIN_NO_ASSISTANT="Merlin - No Assistant",a.MERLIN_ASSISTANT="Merlin - Assistant",a);let o=(0,n.g)("modal:toggleSupportCase")},63707:(e,t,r)=>{"use strict";r.d(t,{Bo:()=>a.B,TY:()=>n.T,Rt:()=>v.R,gw:()=>E.g,wc:()=>I.w,hN:()=>y.h,of:()=>d.o,HG:()=>o.H,ay:()=>l.a,Aj:()=>s.A,ex:()=>c.e,CQ:()=>T.C,d1:()=>w.d,Oe:()=>S.O,MD:()=>k.M,m7:()=>_.m,_F:()=>A._,yO:()=>i.y,GP:()=>f.G,tJ:()=>u.t,Kt:()=>Y.K,I3:()=>C.I,cf:()=>R.c,p0:()=>ep.p,gq:()=>M.g,Bb:()=>N.B,Nx:()=>P.N,mT:()=>D.m,wt:()=>x.w,tD:()=>p.t,YK:()=>W.Y,WB:()=>L.W,bz:()=>O.b,n9:()=>U.n,yp:()=>b.y,DT:()=>B.D,Xj:()=>V.X,AX:()=>j.A,p5:()=>z.p,Mk:()=>G.M,nR:()=>J.n,bE:()=>g.b,ke:()=>q.k,W0:()=>F.W,Ru:()=>h.R,sT:()=>H.s,NW:()=>Q.N,l8:()=>$.l,ZU:()=>K.Z,$C:()=>X.$,al:()=>Z.a,E5:()=>m.E,z_:()=>ee.z,ak:()=>et.J,PH:()=>er.P,tl:()=>ea.t,OH:()=>en.O,m5:()=>ei.m,md:()=>es,ZT:()=>el.Z,m1:()=>eu,y1:()=>ep.y,T2:()=>ec.T,v8:()=>ed,XR:()=>em.X,ok:()=>ef.o,Hw:()=>eg.H});var a=r(204725),n=r(32811),i=r(586791);r(684581);var o=r(529791),s=r(52439),l=r(308183),u=r(437639);r(907393);var c=r(152539),d=r(89167),f=r(2419),p=r(713907),m=r(110511),g=r(768564),h=r(684315),b=r(377523),y=r(768117);r(138455);var v=r(594053),E=r(893079),I=r(381331),T=r(549063),w=r(471091),S=r(489303),k=r(742991),A=r(46471),_=r(79847),C=r(685271),R=r(270343),M=r(294703),N=r(941687),P=r(34021),D=r(740931),x=r(546743),L=r(337695),O=r(51759),F=r(130647),$=r(187389),Y=r(656091),U=r(12623),B=r(229335),W=r(968683),V=r(946519),j=r(51927);r(398765);var z=r(584631),J=r(436331),q=r(776667),G=r(13695),H=r(872991);r(509591);var Q=r(226139);r(705155);var K=r(106390),X=r(722708),Z=r(471395);r(848343);var ee=r(860148),et=r(128071),er=r(609421),ea=r(628828),en=r(280967),ei=r(597163);if(/^(23057|72465)$/.test(r.j))var eo=r(441535);function es(){return(0,eo.W)("databricks.fe.lakeview.sessionEmbedStandaloneInitEnabled",!1)}var el=r(86517);if(13057==r.j)var eo=r(441535);function eu(){return(0,eo.W)("databricks.fe.lakeview.standaloneViewerStandaloneInitEnabled",!1)}var ec=r(216979);function ed(){return(0,eo.W)("databricks.fe.lakeview.tokenEmbedStandaloneInitEnabled",!1)}r(613870);var ef=r(963681),ep=r(415767),em=r(214353),eg=r(372107);r(458259)},66580:(e,t,r)=>{"use strict";r.d(t,{Q:()=>d});var a=r(610435),n=r(692738),i=r(550670),o=r(497895),s=r(79570),l=r(532411),u=r(860711),c=r(569481);let d=(0,n.memo)(e=>{let{id:t,sourceX:r,sourceY:n,targetX:d,targetY:f,sourcePosition:p,targetPosition:m,data:g,arrowHeadType:h,markerEndId:b}=e,{theme:y}=(0,o.wn)(),v=function(e){function t(e){return e===c.g8.DISABLED?"default":"pointer"}return{selectionFix:e=>({fill:"none",stroke:"transparent",strokeWidth:20,cursor:t(e)}),edge:r=>({strokeWidth:function(e){if(e===c.g8.IDENTIFIED)return 3;return 1.5}(r),stroke:function(t){if(t===c.g8.IDENTIFIED)return e.colors.textPrimary;if(t===c.g8.SELECTED)return(0,l.Hz)(e);if(t===c.g8.HOVERED)return(0,l.Vu)(e);if(t===c.g8.NONE)return e.colors.grey400}(r),cursor:t(r)})}}(y),E=(0,i.Fp)({sourceX:r,sourceY:n,sourcePosition:p,targetX:d,targetY:f,targetPosition:m}),I=g?.interactionState??c.g8.NONE,T=e.markerEnd??(0,u.H)(I,h,b),w=(0,a.Y)("path",{style:v.selectionFix(I),d:E}),S=g?.name===void 0?w:(0,a.Y)(s.m,{componentId:"pipeline-graph-edge-tooltip",content:g.name,side:"top",children:w});return(0,a.FD)(a.FK,{children:[(0,a.Y)(u.D,{}),S,(0,a.Y)("path",{id:t,className:"react-flow__edge-path",d:E,markerEnd:T,style:v.edge(I)})]})})},67712:(e,t,r)=>{"use strict";r.d(t,{$:()=>i});var a=r(383020),n=r(88673);let i=()=>(0,a.Ry)(e=>n.A.canEdit(e?.permissionLevel||n.A.NONE),["permissionLevel"],(e,t)=>e===t)},75612:(e,t,r)=>{"use strict";r.d(t,{HA:()=>u,RY:()=>l,Xw:()=>s,ZS:()=>i,az:()=>o,bI:()=>n,rd:()=>a});let a=1020,n=450,i=250,o="30%",s="OBJECT_TYPE_UNSPECIFIED",l="SQL_QUERY",u=6048e5},76829:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{c:()=>f});var n=r(610435),i=r(883678);r(692738);var o=r(361999),s=r(268131),l=r(632515),u=r(344415),c=r(849401),d=e([s]);s=(d.then?(await d)():d)[0];let f=(0,i.PA)(function(e){let t=(0,c.useGetTabsPanelStore)(),r=(0,o.p)(t,e=>e.leftPanelId);return(0,n.Y)(s.s,{onClick:()=>{let e=r===l.e$.DEPLOYMENTS?void 0:l.e$.DEPLOYMENTS;(0,u.lr)(e),t.setState({leftPanelId:e})},...e})});a()}catch(e){a(e)}})},77089:(e,t,r)=>{"use strict";r.d(t,{H:()=>u});var a=r(610435);r(692738);var n=r(412514),i=r(342411),o=r(363578),s=r(835711);let l={missingNameError:(0,a.Y)(i.sA,{id:"pVR+Xe",defaultMessage:"Please enter a name"}),forwardSlashError:(0,a.Y)(i.sA,{id:"xXBXdB",defaultMessage:"The / character is not allowed"}),backslashError:(0,a.Y)(i.sA,{id:"Vfsq83",defaultMessage:"The \\ character is not allowed"}),whitespaceError:(0,a.Y)(i.sA,{id:"fEtFAw",defaultMessage:"Leading or trailing spaces in the name is not allowed"}),databricksYMLError:(0,a.Y)(i.sA,{id:"IYYFRz",defaultMessage:"Cannot name databricks.yml. This is a reserved asset name for Declarative Automation Bundles"})};class u{static isValidName(e){return null===u.checkNameError(e)}static rhfValidate(e){return u.checkNameError(e)??!0}static checkNameError(e){if(!(e&&e.length>0))return l.missingNameError;if(e.includes("/"))return l.forwardSlashError;if(e.trim()!==e)return l.whitespaceError;if(e.includes("\\"))return l.backslashError;if((0,s.Qi)(e)===o.Hn.databricksYml)return l.databricksYMLError;return null}static get YupValidator(){return n.Yj().required().test("contains-slash","Name contains slash",e=>!e||-1===e.indexOf("/")).test("contains-leading-trailing-spaces","Name contains leading or trailing spaces",e=>!e||e.trim()===e)}static isValidPath(e){if(!e)return!1;if("/"===e)return!0;return!!((e=(e=e.startsWith("/")?e.substring(1):e).endsWith("/")?e.substring(0,e.length-1):e)&&e.length>0&&e.split("/").every(u.isValidName))}}},77898:(e,t,r)=>{"use strict";r.d(t,{CD:()=>f,W7:()=>d,oO:()=>c});var a=r(692738),n=r(722381),i=r(441535);let o={v:1,expandedByRoot:{},selectedByRoot:{},recentRoots:[]},s=[],l=e=>(0,n.eo)({key:`unified-uc-tree:${e}:bundle`,version:1});function u(e,t){if(e===t||e.startsWith(`${t}.`))return!0;let r=e.indexOf(":/");if(-1!==r){let a=e.slice(r+2);return a===t||a.startsWith(`${t}.`)||a.startsWith(`${t}/`)}return!1}function c(e){let t;if("u"<typeof window||!(0,i.W)("databricks.fe.schemabrowser.newTree",!1))return;let r=l("all-files");try{let e=window.sessionStorage.getItem(r);if(!e)return;let a=JSON.parse(e);if(!a||1!==a.v)return;t=a}catch{return}let a=t=>(t??[]).filter(t=>!u(t,e)),n={...t,expandedByRoot:Object.fromEntries(Object.entries(t.expandedByRoot??{}).filter(([t])=>!u(t,e)).map(([e,t])=>[e,a(t)])),selectedByRoot:Object.fromEntries(Object.entries(t.selectedByRoot??{}).filter(([t])=>!u(t,e)).map(([e,t])=>[e,a(t)])),recentRoots:(t.recentRoots??[]).filter(t=>!u(t,e))};try{window.sessionStorage.setItem(r,JSON.stringify(n))}catch{}}function d(e,t){let r;if("u"<typeof window||!(0,i.W)("databricks.fe.schemabrowser.newTree",!1))return;let a=l("all-files");try{let e=window.sessionStorage.getItem(a);if(!e)return;let t=JSON.parse(e);if(!t||1!==t.v)return;r=t}catch{return}let n=r=>{if(r===e)return t;if(r.startsWith(`${e}.`))return t+r.slice(e.length);let a=r.indexOf(":/");if(-1!==a){let n=r.slice(0,a+2),i=r.slice(a+2);if(i===e)return n+t;if(i.startsWith(`${e}.`)||i.startsWith(`${e}/`))return n+t+i.slice(e.length)}return r},o=e=>Object.entries(e??{}).reduce((e,[t,r])=>{let a=n(t),i=(r??[]).map(n);return e[a]=Array.from(new Set([...e[a]??[],...i])),e},{}),s={...r,expandedByRoot:o(r.expandedByRoot),selectedByRoot:o(r.selectedByRoot),recentRoots:Array.from(new Set((r.recentRoots??[]).map(n)))};try{window.sessionStorage.setItem(a,JSON.stringify(s))}catch{}}function f(e,t="all-files",{maxRoots:r=5}={}){let[n,i]=function(e,t){let[r,n]=(0,a.useState)(()=>{if("u"<typeof window)return t;try{let r=window.sessionStorage.getItem(e);if(!r)return t;let a=JSON.parse(r);if(a&&1===a.v){let e=a.expandedByRoot??{};if(Object.keys(e).some(t=>(e[t]?.length??0)>20)){let t={};for(let r of Object.keys(e))t[r]=e[r]?.length>20?[]:e[r];return{...a,expandedByRoot:t}}return a}}catch{}return t});return(0,a.useEffect)(()=>{if("u"<typeof window)return;try{window.sessionStorage.setItem(e,JSON.stringify(r))}catch{}},[e,r]),[r,(0,a.useCallback)(r=>{if("function"!=typeof r)return void n(r);n(r(function(e,t){if("u"<typeof window)return t;try{let r=window.sessionStorage.getItem(e);if(!r)return t;let a=JSON.parse(r);if(a?.v===1)return a}catch{}return t}(e,t)))},[e,t])]}(l(t),o),u=e||"-",c=(0,a.useCallback)(e=>{if(e.expandedByRoot[u])return;for(let t of e.recentRoots||[]){let r=e.expandedByRoot[t];if(r?.includes(u))return r}},[u]),d=(0,a.useMemo)(()=>c(n),[c,n]),p=n.expandedByRoot[u]??d??s,m=n.selectedByRoot[u]??s,g=(0,a.useCallback)((e,t)=>{i(a=>{var n;let i,o=u in a[e],s=a[e][u]??[];if(!o&&"expandedByRoot"===e){let e=c(a);e&&(s=e)}let l="function"==typeof t?t(s):t;if((i=s).length===l.length&&i.every((e,t)=>e===l[t]))return a;let d=(n=a.recentRoots,[u,...(n??[]).filter(e=>e!==u)].slice(0,r)),f={},p={};for(let t of d)f[t]="expandedByRoot"===e&&t===u?l:a.expandedByRoot[t]??[],p[t]="selectedByRoot"===e&&t===u?l:a.selectedByRoot[t]??[];return{v:1,recentRoots:d,expandedByRoot:f,selectedByRoot:p}})},[u,i,r,c]),h=(0,a.useCallback)(e=>g("expandedByRoot",e),[g]);return{expandedItems:p,setExpandedItems:h,selectedItems:m,setSelectedItems:(0,a.useCallback)(e=>g("selectedByRoot",e),[g]),clearAll:(0,a.useCallback)(()=>{i(o)},[i])}}},78373:(e,t,r)=>{"use strict";r.d(t,{$:()=>p,G:()=>f});var a=r(252513),n=r.n(a),i=r(391854),o=r.n(i),s=r(485669),l=r(488655),u=r(971384),c=r(737358),d=r(846007);let f={getLocation:()=>window.location||{},getUrlSearchParams:()=>new URLSearchParams(f.getLocation().search),getUrlSearchParam:e=>f.getUrlSearchParams().get(e),setUrlSearchParam:(e,t)=>{let r=f.getUrlSearchParams();r.set(e,t);let{pathname:a,hash:n}=f.getLocation();return(0,l.oo)({pathname:a,search:r.toString(),hash:n},{replace:!0})},deleteUrlSearchParam:e=>{let t=f.getUrlSearchParams();t.delete(e);let{pathname:r,hash:a}=f.getLocation();window.history.replaceState(null,"",`${r}?${t.toString()}${a}`)},removeView(e,t){let r;t=void 0===t||t,console.log("Removing view",e.name,t);window.router.recentViewRoutes=o()(window.router.recentViewRoutes,e),e.remove(),delete window.fragmentToView[r],t&&n().history.fragment===r&&window.router.navigateHome()},openNotebookInNewTab(e){let t=(0,s.f_)({id:String(e)});(0,u.Lz)((0,c.AO)((0,d.t4)(t.toString())),{openInNewTab:!0})},addMlflowExperiment(e=""){(0,l.oo)(`/ml/createExperiment/${e}`)}};function p(e){let t=e.startsWith("/")?e.substring(1):e;return`#workspace/${encodeURIComponent(t)}`}},79847:(e,t,r)=>{"use strict";r.d(t,{m:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enableSemanticModelErd",!1)}},81659:(e,t,r)=>{"use strict";r.d(t,{o:()=>f});var a=r(610435),n=r(956935),i=r(986912),o=r(497895),s=r(866370),l=r(59723),u=r(123252);let c=(0,n.AH)({cursor:"progress",width:"100%",height:28,display:"flex",justifyContent:"flex-start",alignItems:"center"}),d=(0,n.AH)({borderRadius:"var(--border-radius)",height:12,width:"100%"}),f=({label:e,seed:t="",frameRate:r=60,style:n,loading:f=!0,loadingDescription:p="TitleSkeleton",...m})=>{let{theme:g}=(0,o.wn)(),h=(0,i.PT)(t)[0];return(0,a.FD)("div",{...(0,u.VG)(),css:c,style:{...n,"--border-radius":`${g.general.borderRadiusBase}px`},...m,children:[f&&(0,a.Y)(s.G,{description:p}),(0,a.Y)("span",{css:l.Q,children:e}),(0,a.Y)("div",{"aria-hidden":!0,css:[d,(0,i.q5)(g,r),{width:`calc(100% - ${h}px)`}]})]})}},86517:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.snapshotDashboardStandaloneInitEnabled",!1)}},89167:(e,t,r)=>{"use strict";r.d(t,{o:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enableDatasetUndoRedo",!1)}},98538:(e,t,r)=>{"use strict";r.d(t,{$:()=>n});var a=r(56600);function n(e){return(0,a.BJ)(e.widgetType)}},101394:(e,t,r)=>{"use strict";r.d(t,{Aq:()=>m,Fp:()=>p,Gz:()=>g,OG:()=>c,dl:()=>h,yH:()=>b});var a=r(101479),n=r(234453),i=r(26276),o=r(595720),s=r(981560),l=r(936417),u=r(952067);function c(e){return void 0!==e&&!(0,a.BP)(e)&&(0,u.$M)(e.scale)}let d={area:!0,bar:!0,box:!1,combo:!1,"forecast-line":!1,funnel:!0,heatmap:!1,histogram:!0,line:!0,pie:!0,scatter:!0,waterfall:!1},f={area:!0,bar:!0,box:!0,combo:!1,"forecast-line":!1,funnel:!0,heatmap:!1,histogram:!1,line:!0,pie:!0,scatter:!0,waterfall:!0};function p(e,t){return void 0!==t&&!(0,a.BP)(t)&&(0,u.wF)(t.scale)&&!0===f[e]&&"pie"!==e}function m(e,t){return!0===d[e.widgetType]&&"color"===t}function g(e,t){return!0===f[e.widgetType]&&"color"!==t}let h=500;function b({sortSpec:e,fieldEncoding:t,fieldEncodingToSortBy:r,dataModel:a,datasetName:u,resultsetDomainProfiler:c,isCustomSortEnabled:d}){let f=!1,p=!1,m=[];if((0,s.UE)(t)&&!(0,i.K)(t.field)){let s=(0,n.j)(t,a,u);if(f=!0===d&&"string"===s){let n=(0,l.MA)(t,a),s=c.getProfiler({resultsetFieldName:n}),u=r&&!(0,i.K)(r.field)?(0,l.MA)(r,a):void 0,{values:d=[]}=s?.getCategoricalDomain({sort:(0,o.zT)(e)?e:u?{by:"measure-reversed",fieldName:u,aggregate:{fn:"sum"}}:o.fC})??{};p=!(0,o.zT)(e)&&d.length>h,m=d}}return{shouldShowCustomSort:f,tooManyItems:p,domainValues:m}}},102735:(e,t,r)=>{"use strict";r.d(t,{M:()=>u});var a=r(610435);r(692738);var n=r(497895),i=r(81659),o=r(445929),s=r(958120),l=r(342411);function u({projectName:e,projectConfigError:t,isLoading:r}){let{formatMessage:c}=(0,l.tz)(),{theme:d}=(0,n.wn)(),f=d.isDarkMode?d.colors.blue500:d.colors.blue400,p=`${f} !important`;if(r)return(0,a.Y)(i.o,{label:c({id:"QZeBcZ",defaultMessage:"Loading..."}),style:{width:200}});if(t)return(0,a.FD)(a.FK,{children:[(0,a.Y)(o.A,{"data-testid":"dabs-authoring.landing-page.header.error-icon",css:{marginRight:d.spacing.sm,color:d.colors.textValidationDanger}}),(0,a.Y)(l.sA,{id:"jXA3mf",defaultMessage:"Bundle"})]});return(0,a.FD)(a.FK,{children:[(0,a.Y)(s.A,{css:{color:p,marginRight:d.spacing.sm}}),e]})}},105026:(e,t,r)=>{"use strict";r.d(t,{GF:()=>u,OX:()=>s,_Z:()=>o,_j:()=>c,ed:()=>l,fZ:()=>d});var a=r(886137),n=r.n(a),i=r(441535);let o=n()(()=>{let e=(0,i.W)("databricks.fe.editor.cacheFlags.maxCacheSize",1e7);if("number"==typeof e)return e;return 1e7}),s=n()(()=>(0,i.W)("databricks.fe.editor.cacheFlags.disableActiveStatementCache",!1)),l=n()(()=>(0,i.W)("databricks.fe.editor.cacheFlags.enableSqlStatementsParserWrapperCacheV2",!1)),u=n()(()=>(0,i.W)("databricks.fe.editor.cacheFlags.enableEditorSqlGlobalContextStoreCacheV2",!1)),c=n()(()=>(0,i.W)("databricks.fe.editor.cacheFlags.enableGhostTextTrackerCacheV2",!1)),d=n()(()=>{let e=(0,i.W)("databricks.fe.editor.cacheFlags.maxWorkerCacheSize",5e7);if("number"==typeof e)return e;return 5e7})},106390:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a=r(441535);let n=()=>(0,a.W)("databricks.fe.lakeview.enableMobxActiveWidgetNameInDraft",!1)},110511:(e,t,r)=>{"use strict";r.d(t,{E:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enableNamedParameterExpression",!1)}},112242:(e,t,r)=>{"use strict";r.d(t,{S:()=>l});var a=r(692738),n=r(774605),i=r(659587),o=r(704143),s=r(897150);let l=()=>{let e=(0,o.S)(),t=(0,s.Ti)(),r=t(e=>e.isAttachedToSqlWarehouse()),l=t(e=>e.computeType===i.$L.INTERACTIVE_SERVERLESS),u=t(e=>e.sparkVersion);return(0,a.useMemo)(()=>{let t=e?.getEditorMode()==="query",a=!!u&&(0,n.IX)({behavior:n.Z4.parameterMarkerSyntax,sparkVersion:u});return l||r||a||t},[l,r,u,e])}},112326:(e,t,r)=>{"use strict";let a;r.d(t,{BH:()=>u,Mv:()=>s,cg:()=>l,t9:()=>o});var n=r(845690),i=r(343312);function o(){return void 0===a&&void 0===(a=(0,n.pj)({key:"local-debug-event-viewer-pref",version:1,initialValue:!1,scoped:!0}))&&(a=!1),a}function s(e,t){let r=t.notebook.getEditorMode(),a=String(t.notebook.id);(0,i.Py)({eventName:e.name,ts:Date.now(),eventType:"ActionManifest",entityType:r,entityId:a,extra:{notebook:t.notebook.toJSON(),store:t.store.getState()}})}function l(e,t,r,a){(0,i.Py)({ts:Date.now(),eventName:e,eventType:"Websocket",entityType:a,entityId:t,extra:r})}function u(e,t,r,a){if(!o())return void e.on(t,r,a);e.on(t,(...n)=>{r.call(a,...n),(0,i.Py)({eventName:t,ts:Date.now(),eventType:"NotebookEvent",entityType:e.getEditorMode(),entityId:String(e.id),extra:{notebook:e.toJSON()}})},a)}},118799:(e,t,r)=>{"use strict";r.d(t,{L:()=>k});var a=r(610435),n=r(956935),i=r(497895),o=r(286342),s=r(79128),l=r(465946),u=r(943844),c=r(382908),d=r(764236),f=r(79570),p=r(944552),m=r(342411),g=r(190645),h=r(153184),b=r(692738),y=r(802582),v=r(222572);function E(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function I({theme:e,componentId:t,onBeforeReload:r}){let n=(0,m.tz)().formatMessage({id:"X26IEC",defaultMessage:"Reload this page for change to take place. The change only applies to you in this workspace and won't affect other users."}),i=(0,b.useCallback)(()=>{var e;return(e=function*(){yield r?.(),window.location.reload()},function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){E(i,a,n,o,s,"next",e)}function s(e){E(i,a,n,o,s,"throw",e)}o(void 0)})})()},[r]);return(0,a.Y)(y.p,{title:n,children:(0,a.Y)(s.$n,{componentId:t,size:"small",type:"link",style:{fontWeight:e.typography.typographyBoldFontWeight},onClick:i,icon:(0,a.Y)(v.A,{}),children:(0,a.Y)(m.sA,{id:"oSFyWV",defaultMessage:"Reload page"})})})}var T=r(303575),w=r(631661);let S={popoverContent:(0,n.AH)({maxWidth:345,boxSizing:"content-box"}),flexRow:(0,n.AH)({display:"flex",alignItems:"center"}),tag:e=>(0,n.AH)({marginRight:0,"& > div":{cursor:"pointer !important"},"&:hover":{"& > div":{backgroundColor:e.colors.actionDefaultBackgroundHover}},"&:active":{"& > div":{backgroundColor:e.colors.actionDefaultBackgroundPress}}}),headerRow:(0,n.AH)({display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"})};function k({children:e,featureName:t,needReload:r=!1,initialStatus:n,onPreviewStatusChange:b,confirmationMessage:y,componentId:v,popoverZIndexOverride:E,toggleDisabledReason:A,feedbackLinkProps:_,hidePreviewLabel:C}){let{theme:R}=(0,i.wn)(),{shouldReload:M,status:N,onStatusChange:P,isCommitting:D}=(0,T.g)({initialStatus:n,onPreviewStatusChange:b,needReload:r}),x=(0,m.tz)(),L={clickToViewDetails:x.formatMessage({id:"+HXo89",defaultMessage:"Click to view details"}),on:x.formatMessage({id:"2RifD2",defaultMessage:"ON"}),off:x.formatMessage({id:"vcu12D",defaultMessage:"OFF"})},O=x.formatMessage({id:"63tpkX",defaultMessage:"{featureName}: {status}"},{featureName:t,status:"on"===N?L.on:L.off}),F=e=>{P(e?"on":"off")};return(0,a.FD)(o.Root,{componentId:"codegen_web-shared-ui_src_previewtag_previewtag.tsx_153",children:[(0,a.Y)(o.Trigger,{asChild:!0,children:(0,a.Y)(s.$n,{componentId:v?`${v}.trigger`:"codegen_web-shared-ui_src_previewtag_previewtag.tsx_99",type:"link","aria-label":O,title:L.clickToViewDetails,children:(0,a.FD)(l.v,{componentId:"web-shared-ui.preview-tag",css:S.tag(R),children:[(0,a.Y)("span",{children:O}),(0,a.Y)(u.A,{})]})})}),(0,a.FD)(o.Content,{align:"start",side:"bottom",collisionPadding:8,css:S.popoverContent,style:E?{zIndex:E}:void 0,children:[(0,a.FD)("div",{css:S.headerRow,children:[(0,a.FD)("div",{css:S.flexRow,children:[(0,a.Y)(c.o.Text,{bold:!0,css:{marginRight:R.spacing.xs},children:t}),!C&&(0,a.Y)(g.W,{})]}),_&&(0,a.Y)(h.A,{..._})]}),(0,a.Y)(d.h,{size:"sm"}),(0,a.Y)("div",{css:S.flexRow,children:(0,a.Y)(f.m,{componentId:"codegen_web-shared-ui_src_previewtag_previewtag.tsx_189",content:A,delayDuration:0,...E?{css:{zIndex:E+1}}:{},children:(0,a.FD)("div",{css:S.flexRow,children:[(0,a.Y)(w.u,{componentId:v?`${v}.confirm_modal`:"codegen_web-shared-ui_src_previewtag_previewtag.tsx_179",title:(0,a.Y)(m.sA,{id:"cTjPJV",defaultMessage:"Are you sure?"}),message:y,onConfirm:()=>P("off"===N?"on":"off"),children:e=>(0,a.Y)(p.d,{componentId:v?`${v}.toggle`:"codegen_web-shared-ui_src_previewtag_previewtag.tsx_183",onChange:y?e:F,checked:"on"===N,disabled:!!A||D})}),(0,a.Y)(c.o.Text,{bold:!0,css:{marginRight:R.spacing.xs},children:"on"===N?L.on:L.off}),M&&(0,a.Y)(I,{componentId:`${v}.toggle.reload`,theme:R})]})})}),(0,a.Y)(d.h,{size:"sm"}),e,(0,a.Y)(o.Arrow,{})]})]})}},120764:(e,t,r)=>{"use strict";if(r.d(t,{S0:()=>R,T3:()=>P}),13057==r.j)var a=r(817148);if(13057==r.j)var n=r(352185);if(13057==r.j)var i=r(441535);if(13057==r.j)var o=r(22191);var s=r(87221);if(13057==r.j)var l=r(352954);if(13057==r.j)var u=r(919119);var c=r(993533),d=r(434700);if(13057==r.j)var f=r(911937);if(13057==r.j)var p=r(954557);if(13057==r.j)var m=r(823182);let g=(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(59276),r.e(37072),r.e(47589),r.e(17258),r.e(70426),r.e(19533),r.e(59032),r.e(67705)]).then(r.bind(r,927814));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(927814,"./ClusterMainTabs","lazy",e);return e()})()),h=(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(62394),r.e(3752),r.e(54497),r.e(7473),r.e(36993),r.e(67590),r.e(51545),r.e(6932),r.e(20022),r.e(18294),r.e(5033),r.e(97768),r.e(24685),r.e(59276),r.e(59794),r.e(78580),r.e(55616),r.e(3330),r.e(92170),r.e(37797),r.e(11184),r.e(44004),r.e(52426),r.e(12514),r.e(22886),r.e(45854),r.e(32828),r.e(20556),r.e(40972),r.e(29580),r.e(92922),r.e(6198),r.e(95470),r.e(84245),r.e(97421),r.e(20806),r.e(47404),r.e(31083),r.e(78756),r.e(11136),r.e(64898),r.e(20805),r.e(80159),r.e(4065),r.e(75031),r.e(46729),r.e(44258),r.e(25642),r.e(36525),r.e(36933),r.e(14770),r.e(13015),r.e(2347),r.e(16506),r.e(95258),r.e(42797),r.e(68775),r.e(11022),r.e(49029),r.e(10133),r.e(84283),r.e(44341),r.e(98317),r.e(43587),r.e(35711),r.e(8089),r.e(23197),r.e(10095),r.e(62621),r.e(45738),r.e(19604),r.e(1377),r.e(17292),r.e(54894),r.e(83750),r.e(70231),r.e(92480),r.e(47323),r.e(92792),r.e(63121),r.e(79832),r.e(65084),r.e(81647),r.e(8260),r.e(27241),r.e(71046),r.e(71713),r.e(36176),r.e(46822),r.e(37140),r.e(36739),r.e(89478),r.e(13915),r.e(50536),r.e(47506),r.e(4340),r.e(95150),r.e(49019),r.e(2602),r.e(79547),r.e(83537),r.e(50621),r.e(17456),r.e(84736),r.e(47838),r.e(34678),r.e(95789),r.e(33364),r.e(38757),r.e(23516),r.e(49390),r.e(92926),r.e(51751),r.e(11528),r.e(65141),r.e(42389),r.e(57005),r.e(47399),r.e(83324),r.e(92417),r.e(44330),r.e(13535),r.e(38599)]).then(r.bind(r,248100));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(248100,"./clusters/ClusterDetail","lazy",e);return e()})()),b=(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(62394),r.e(67590),r.e(5033),r.e(78580),r.e(55616),r.e(3330),r.e(11184),r.e(52426),r.e(22886),r.e(21141),r.e(68775),r.e(11022),r.e(49029),r.e(10133),r.e(43587),r.e(23197),r.e(10095),r.e(62621),r.e(45738),r.e(19604),r.e(99918),r.e(3341),r.e(73208),r.e(18080),r.e(49934),r.e(30908),r.e(25230),r.e(96226),r.e(90719),r.e(65376),r.e(87058)]).then(r.bind(r,624730));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(624730,"./tabs/BrickIndexListTab","lazy",e);return e()})()),y="compute.main-page.all-purpose",v="compute.main-page.automated",E="compute.main-page.sql-warehouses",I="compute.main-page.brickindex",T="compute.main-page.brickstore",w="compute.main-page.instance-pools",S="compute.main-page.gpu-pools",k="compute.main-page.policies",A="compute.main-page.apps",_="compute.main-page.database-instances",C="compute.main-page.serverless",R=new Set([y,v,E,I,T,w,S,k,A,_,C]),M=[c.e2L.UI,c.e2L.API],N={productEntityChain:[{productEntityType:s.Lm.CLUSTER,routeParamId:"computeId"}]},P=()=>[{pageId:"compute.root",esComponent:o.Es.ClustersUi,path:"/compute",element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(10095),r.e(45738),r.e(52530)]).then(r.bind(r,411877));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(411877,"./ClusterOutlet","lazy",e);return e()})()),children:[{pageId:"compute.main-page",path:"",element:g,children:[{access:a.g3.COMPUTE_ALL_PURPOSE,pageId:y,path:n.FI.InteractiveListPage,element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(62394),r.e(20022),r.e(59794),r.e(12514),r.e(63630),r.e(10095),r.e(45738),r.e(5830),r.e(36739),r.e(47506),r.e(49019),r.e(75343),r.e(42389),r.e(75698),r.e(87003),r.e(64109)]).then(r.bind(r,964109));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(964109,"./tabs/InteractiveClustersListTab","lazy",e);return e()})()),...(0,i.W)("databricks.fe.clustercontrols.enableClusterQueriesPrefetch",!1)?{prefetchQueries:[{query:m.lc,variables:{input:{pageToken:(0,l.Ut)("pToken",{defaultValue:""}),pageSize:(0,l.au)("number",(0,l.Ut)("pSize",{defaultValue:"20"})),filterBy:{clusterName:(0,l.Ut)("cnf",{defaultValue:void 0}),creatorUserId:(0,l.Ut)("creator"),isPinned:(0,l.Ut)("pinned"),clusterSources:M,canInteractWith:!1},sortBy:{field:"DEFAULT",direction:"ASC"}},skipPolicy:!1}}]}:{}},{access:a.g3.COMPUTE_JOB,pageId:v,path:n.FI.AutomatedListPage,element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(62394),r.e(20022),r.e(59794),r.e(12514),r.e(63630),r.e(10095),r.e(45738),r.e(5830),r.e(36739),r.e(47506),r.e(49019),r.e(75343),r.e(42389),r.e(75698),r.e(87003),r.e(10091)]).then(r.bind(r,610091));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(610091,"./tabs/AutomatedClustersListTab","lazy",e);return e()})())},{access:a.g3.SQL_WAREHOUSES,pageId:E,path:n.FI.SqlWarehouses,element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(62394),r.e(67590),r.e(51545),r.e(20022),r.e(97768),r.e(59794),r.e(3330),r.e(59316),r.e(5400),r.e(63819),r.e(78332),r.e(45893),r.e(10229),r.e(3711),r.e(36768),r.e(356),r.e(99918),r.e(5830),r.e(30908),r.e(75041),r.e(7984),r.e(11798),r.e(13199),r.e(57958),r.e(35814),r.e(11926),r.e(61149),r.e(21410),r.e(10458),r.e(70297),r.e(33470),r.e(37702)]).then(r.bind(r,756430));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(756430,"./tabs/SqlWarehousesListTab","lazy",e);return e()})()),esComponent:o.Es.WarehouseUI},{access:a.g3.SQL_WAREHOUSES,pageId:E,path:`${n.FI.SqlWarehouses}/new`,element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(62394),r.e(67590),r.e(51545),r.e(20022),r.e(97768),r.e(59794),r.e(3330),r.e(59316),r.e(5400),r.e(63819),r.e(78332),r.e(45893),r.e(10229),r.e(3711),r.e(36768),r.e(356),r.e(99918),r.e(5830),r.e(30908),r.e(75041),r.e(7984),r.e(11798),r.e(13199),r.e(57958),r.e(35814),r.e(11926),r.e(61149),r.e(21410),r.e(10458),r.e(70297),r.e(33470),r.e(37702)]).then(r.bind(r,756430));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(756430,"./tabs/SqlWarehousesListTab","lazy",e);return e()})()),esComponent:o.Es.WarehouseUI},{access:a.g3.COMPUTE_VECTOR_SEARCH,pageId:I,path:n.FI.BrickIndex,element:b,esComponent:o.Es.Brickindex},{access:a.g3.COMPUTE_ONLINE_STORES,pageId:T,path:n.FI.BrickStore,element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(25230),r.e(40223)]).then(r.bind(r,940223));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(940223,"./tabs/BrickStoreListTab","lazy",e);return e()})()),esComponent:o.Es.Brickstore},{access:a.g3.COMPUTE_INSTANCE_POOLS,pageId:w,path:n.FI.InstancePools,element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(20022),r.e(59794),r.e(10095),r.e(45738),r.e(90036)]).then(r.bind(r,498693));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(498693,"./tabs/InstancePoolsListTab","lazy",e);return e()})())},{access:a.g3.COMPUTE_GPU_POOLS,pageId:S,path:n.FI.GpuPools,element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(20022),r.e(59794),r.e(59202),r.e(78884)]).then(r.bind(r,332277));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(332277,"./tabs/GpuPoolsListTab","lazy",e);return e()})())},{access:a.g3.COMPUTE_CLUSTER_POLICIES,pageId:k,path:n.FI.ClusterPolicies,element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(20022),r.e(59794),r.e(10095),r.e(45738),r.e(72991)]).then(r.bind(r,762462));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(762462,"./tabs/ClusterPoliciesListTab","lazy",e);return e()})()),...(0,i.W)("databricks.fe.clustercontrols.enableClusterListPrefetch",!1)?{prefetchQueries:[{query:p.A,variables:{input:{}}}]}:{}},{access:a.g3.APPS,pageId:A,path:n.FI.LakehouseApps,element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(36993),r.e(20022),r.e(59794),r.e(79715),r.e(42934),r.e(13546),r.e(10740),r.e(3789),r.e(51987),r.e(36516),r.e(64741),r.e(37235)]).then(r.bind(r,100966));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(100966,"./tabs/LakehouseAppsListTab","lazy",e);return e()})()),esComponent:o.Es.LakehouseApps},{access:a.g3.COMPUTE_DATABASE_INSTANCES,pageId:_,path:n.FI.DatabaseInstances,element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(67590),r.e(59794),r.e(32828),r.e(40972),r.e(99918),r.e(83750),r.e(92480),r.e(30908),r.e(25230),r.e(57958),r.e(39712),r.e(22203),r.e(98693)]).then(r.bind(r,975242));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(975242,"./tabs/DatabaseInstancesListTab","lazy",e);return e()})()),esComponent:o.Es.Brickstore},{pageId:C,path:n.FI.Serverless,element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(20022),r.e(85393)]).then(r.bind(r,985393));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(985393,"./tabs/ServerlessListTab","lazy",e);return e()})())},{pageId:"compute.main-page.catch-all",path:"*",element:(0,u.P)()},{pageId:"compute.main-page.index",path:"",element:(0,u.P)()}]},{access:a.g3.COMPUTE_VECTOR_SEARCH,pageId:"component.main-page.brickindex.detail",path:`${n.FI.BrickIndex}/:endpointName`,element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(62394),r.e(3752),r.e(36993),r.e(67590),r.e(51545),r.e(6932),r.e(18294),r.e(5033),r.e(97768),r.e(24685),r.e(59276),r.e(59794),r.e(78580),r.e(55616),r.e(3330),r.e(92170),r.e(11184),r.e(44004),r.e(52426),r.e(22886),r.e(32828),r.e(40972),r.e(29580),r.e(92922),r.e(95470),r.e(84245),r.e(97421),r.e(20806),r.e(47404),r.e(31083),r.e(11136),r.e(64898),r.e(25642),r.e(36525),r.e(2347),r.e(71066),r.e(42797),r.e(68775),r.e(11022),r.e(49029),r.e(10133),r.e(84283),r.e(44341),r.e(43587),r.e(8089),r.e(23197),r.e(10095),r.e(62621),r.e(45738),r.e(19604),r.e(1377),r.e(83750),r.e(92480),r.e(47323),r.e(92792),r.e(63121),r.e(79832),r.e(65084),r.e(81647),r.e(8260),r.e(71046),r.e(71713),r.e(36176),r.e(46822),r.e(37140),r.e(18080),r.e(89478),r.e(30908),r.e(13915),r.e(50536),r.e(4340),r.e(57005),r.e(47399),r.e(90719),r.e(65376),r.e(55589)]).then(r.bind(r,403767));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(403767,"./brickindex/Endpoint","lazy",e);return e()})()),esComponent:o.Es.Brickindex},{access:a.g3.COMPUTE_ALL_PURPOSE_CREATE,pageId:"compute.clusters.create",path:"/compute/clusters/new",element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(62394),r.e(32305),r.e(36993),r.e(67590),r.e(51545),r.e(20022),r.e(18294),r.e(5033),r.e(59276),r.e(78580),r.e(55616),r.e(3330),r.e(37797),r.e(11184),r.e(52426),r.e(12514),r.e(22886),r.e(6198),r.e(95470),r.e(80159),r.e(47589),r.e(4065),r.e(75031),r.e(44258),r.e(43164),r.e(13015),r.e(15254),r.e(42797),r.e(68775),r.e(11022),r.e(49029),r.e(10133),r.e(84283),r.e(44341),r.e(98317),r.e(43587),r.e(35711),r.e(8089),r.e(23197),r.e(10095),r.e(62621),r.e(45738),r.e(19604),r.e(1377),r.e(70231),r.e(27241),r.e(36739),r.e(47506),r.e(49019),r.e(40211),r.e(84736),r.e(47838),r.e(34678),r.e(95789),r.e(33364),r.e(49390),r.e(65141),r.e(44330),r.e(31154),r.e(77111)]).then(r.bind(r,482387));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(482387,"./clusters/ClusterCreate","lazy",e);return e()})())},{access:a.g3.COMPUTE,pageId:"compute.clusters.detail",path:"/compute/clusters/:computeId",element:(0,u.P)(),...(0,i.W)("databricks.fe.clustercontrols.enableClusterDetailQueriesPrefetch",!1)?{prefetchQueries:[{query:f.Z5,variables:{input:{clusterId:(0,l.tR)("computeId")}}}]}:{},children:[{pageId:"compute.clusters.detail.configuration",path:"",element:h,observability:N},{pageId:"compute.clusters.detail.notebooks",path:"notebooks",element:h,observability:N},{pageId:"compute.clusters.detail.libraries",path:"libraries",element:h,observability:N},{pageId:"compute.clusters.detail.events",path:"events",element:h,observability:N},{pageId:"compute.clusters.detail.spark-ui",path:"spark-ui",element:h,observability:N},{pageId:"compute.clusters.detail.driver-logs",path:"driver-logs",element:h,observability:N},{pageId:"compute.clusters.detail.metrics",path:"metrics",element:h,observability:N},{pageId:"compute.clusters.detail.apps",path:"apps",element:h,observability:N},{pageId:"compute.clusters.detail.spark-compute-ui",path:"spark-compute-ui/:sparkNodeId",element:h,observability:N},{pageId:"compute.clusters.edit",path:"edit",element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(62394),r.e(36993),r.e(67590),r.e(51545),r.e(20022),r.e(18294),r.e(5033),r.e(59276),r.e(78580),r.e(55616),r.e(3330),r.e(37797),r.e(11184),r.e(52426),r.e(12514),r.e(22886),r.e(6198),r.e(95470),r.e(80159),r.e(47589),r.e(4065),r.e(75031),r.e(44258),r.e(43164),r.e(13015),r.e(15254),r.e(42797),r.e(68775),r.e(11022),r.e(49029),r.e(10133),r.e(84283),r.e(44341),r.e(98317),r.e(43587),r.e(35711),r.e(8089),r.e(23197),r.e(10095),r.e(62621),r.e(45738),r.e(19604),r.e(1377),r.e(70231),r.e(27241),r.e(36739),r.e(47506),r.e(49019),r.e(84736),r.e(47838),r.e(34678),r.e(95789),r.e(33364),r.e(49390),r.e(65141),r.e(44330),r.e(31154),r.e(65890)]).then(r.bind(r,654684));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(654684,"./clusters/ClusterEdit","lazy",e);return e()})()),observability:N}]},{access:a.g3.COMPUTE_INSTANCE_POOLS,pageId:"compute.warm-pools.detail",path:"instance-pools/:poolId",element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(62394),r.e(36993),r.e(67590),r.e(20022),r.e(18294),r.e(5033),r.e(59276),r.e(59794),r.e(78580),r.e(55616),r.e(21234),r.e(3330),r.e(11184),r.e(52426),r.e(12514),r.e(22886),r.e(6198),r.e(80159),r.e(47589),r.e(4065),r.e(46729),r.e(13015),r.e(9837),r.e(68775),r.e(11022),r.e(49029),r.e(10133),r.e(98317),r.e(43587),r.e(23197),r.e(10095),r.e(62621),r.e(45738),r.e(19604),r.e(70231),r.e(36739),r.e(47506),r.e(49019),r.e(47838),r.e(65141),r.e(5707),r.e(12153),r.e(61837)]).then(r.bind(r,859748));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(859748,"./pools/PoolDetail","lazy",e);return e()})()),observability:{productEntityChain:[{productEntityType:s.Lm.INSTANCE_POOL,routeParamId:"poolId"}]}},{access:a.g3.COMPUTE_INSTANCE_POOLS,pageId:"compute.warm-pools.create",path:"instance-pools/new",element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(62394),r.e(36993),r.e(18294),r.e(5033),r.e(59276),r.e(78580),r.e(55616),r.e(3330),r.e(11184),r.e(52426),r.e(12514),r.e(22886),r.e(6198),r.e(80159),r.e(47589),r.e(4065),r.e(46729),r.e(13015),r.e(9837),r.e(68775),r.e(11022),r.e(49029),r.e(10133),r.e(98317),r.e(43587),r.e(23197),r.e(10095),r.e(62621),r.e(45738),r.e(19604),r.e(70231),r.e(36739),r.e(47506),r.e(49019),r.e(47838),r.e(65141),r.e(5707),r.e(12153),r.e(53449)]).then(r.bind(r,324461));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(324461,"./pools/PoolCreate","lazy",e);return e()})())},{access:a.g3.COMPUTE_INSTANCE_POOLS,pageId:"compute.warm-pools.edit",path:"instance-pools/:poolId/edit",element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(62394),r.e(36993),r.e(18294),r.e(5033),r.e(59276),r.e(78580),r.e(55616),r.e(3330),r.e(11184),r.e(52426),r.e(12514),r.e(22886),r.e(6198),r.e(80159),r.e(47589),r.e(4065),r.e(46729),r.e(13015),r.e(9837),r.e(68775),r.e(11022),r.e(49029),r.e(10133),r.e(98317),r.e(43587),r.e(23197),r.e(10095),r.e(62621),r.e(45738),r.e(19604),r.e(70231),r.e(36739),r.e(47506),r.e(49019),r.e(47838),r.e(65141),r.e(5707),r.e(12153),r.e(44260)]).then(r.bind(r,607528));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(607528,"./pools/PoolEdit","lazy",e);return e()})()),observability:{productEntityChain:[{productEntityType:s.Lm.INSTANCE_POOL,routeParamId:"poolId"}]}},{pageId:"compute.policies",path:"policies",element:(0,u.P)(),children:[{access:a.g3.COMPUTE_CLUSTER_POLICIES,pageId:"compute.policies.create",path:"new",element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(62394),r.e(3752),r.e(32305),r.e(54497),r.e(7473),r.e(20872),r.e(36993),r.e(67590),r.e(51545),r.e(6932),r.e(20022),r.e(18294),r.e(5033),r.e(1291),r.e(97768),r.e(24685),r.e(59276),r.e(99406),r.e(59794),r.e(78580),r.e(55616),r.e(21234),r.e(3330),r.e(59316),r.e(37797),r.e(11184),r.e(52426),r.e(12514),r.e(22886),r.e(45854),r.e(72263),r.e(86412),r.e(20556),r.e(35747),r.e(29580),r.e(6198),r.e(95470),r.e(5400),r.e(20806),r.e(47404),r.e(20805),r.e(80159),r.e(4065),r.e(75031),r.e(78332),r.e(13526),r.e(6854),r.e(13686),r.e(46729),r.e(44258),r.e(36933),r.e(77435),r.e(14770),r.e(13015),r.e(16506),r.e(9103),r.e(42797),r.e(68775),r.e(11022),r.e(49029),r.e(10133),r.e(43927),r.e(18650),r.e(87122),r.e(12674),r.e(4828),r.e(84283),r.e(44341),r.e(98317),r.e(43587),r.e(35711),r.e(8089),r.e(23197),r.e(10095),r.e(62621),r.e(45738),r.e(19604),r.e(356),r.e(1377),r.e(17292),r.e(34607),r.e(54694),r.e(65484),r.e(54894),r.e(79331),r.e(45524),r.e(55851),r.e(70231),r.e(23145),r.e(14528),r.e(59498),r.e(13691),r.e(35094),r.e(97091),r.e(56129),r.e(27241),r.e(36739),r.e(10297),r.e(24283),r.e(47506),r.e(95150),r.e(49019),r.e(73089),r.e(2602),r.e(79547),r.e(83596),r.e(83537),r.e(50621),r.e(17456),r.e(84736),r.e(57978),r.e(47838),r.e(23055),r.e(55404),r.e(34678),r.e(68569),r.e(98120),r.e(95789),r.e(42170),r.e(33364),r.e(48387),r.e(97236),r.e(9701),r.e(2720),r.e(59815),r.e(38757),r.e(42522),r.e(91322),r.e(88329),r.e(56843),r.e(23516),r.e(49390),r.e(60467),r.e(92926),r.e(51751),r.e(65141),r.e(8423),r.e(42389),r.e(60295),r.e(75698),r.e(92417),r.e(11445),r.e(76834),r.e(39216),r.e(63933)]).then(r.bind(r,751931));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(751931,"./policies/PolicyCreate","lazy",e);return e()})())},{access:a.g3.COMPUTE_CLUSTER_POLICIES,pageId:"compute.policies.view",path:":policyId",element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(62394),r.e(3752),r.e(32305),r.e(54497),r.e(7473),r.e(20872),r.e(36993),r.e(67590),r.e(51545),r.e(6932),r.e(20022),r.e(18294),r.e(5033),r.e(1291),r.e(97768),r.e(24685),r.e(59276),r.e(99406),r.e(59794),r.e(78580),r.e(55616),r.e(21234),r.e(3330),r.e(59316),r.e(37797),r.e(11184),r.e(52426),r.e(12514),r.e(22886),r.e(45854),r.e(72263),r.e(86412),r.e(20556),r.e(35747),r.e(29580),r.e(6198),r.e(95470),r.e(5400),r.e(20806),r.e(47404),r.e(20805),r.e(80159),r.e(4065),r.e(75031),r.e(78332),r.e(13526),r.e(6854),r.e(13686),r.e(46729),r.e(44258),r.e(36933),r.e(77435),r.e(14770),r.e(13015),r.e(16506),r.e(9103),r.e(42797),r.e(68775),r.e(11022),r.e(49029),r.e(10133),r.e(43927),r.e(18650),r.e(87122),r.e(12674),r.e(4828),r.e(84283),r.e(44341),r.e(98317),r.e(43587),r.e(35711),r.e(8089),r.e(23197),r.e(10095),r.e(62621),r.e(45738),r.e(19604),r.e(356),r.e(1377),r.e(17292),r.e(34607),r.e(54694),r.e(65484),r.e(54894),r.e(79331),r.e(45524),r.e(55851),r.e(70231),r.e(23145),r.e(14528),r.e(59498),r.e(13691),r.e(35094),r.e(97091),r.e(56129),r.e(27241),r.e(36739),r.e(10297),r.e(24283),r.e(47506),r.e(95150),r.e(49019),r.e(73089),r.e(2602),r.e(79547),r.e(83596),r.e(83537),r.e(50621),r.e(17456),r.e(84736),r.e(57978),r.e(47838),r.e(23055),r.e(55404),r.e(34678),r.e(68569),r.e(98120),r.e(95789),r.e(42170),r.e(33364),r.e(48387),r.e(97236),r.e(9701),r.e(2720),r.e(59815),r.e(38757),r.e(42522),r.e(91322),r.e(88329),r.e(56843),r.e(23516),r.e(49390),r.e(60467),r.e(92926),r.e(51751),r.e(65141),r.e(8423),r.e(42389),r.e(60295),r.e(75698),r.e(92417),r.e(11445),r.e(76834),r.e(39216),r.e(65527)]).then(r.bind(r,768325));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(768325,"./policies/PolicyDetail","lazy",e);return e()})()),observability:{productEntityChain:[{productEntityType:s.Lm.CLUSTER_POLICY,routeParamId:"policyId"}]}},{access:a.g3.COMPUTE_CLUSTER_POLICIES,pageId:"compute.policies.edit",path:":policyId/edit",element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(62394),r.e(3752),r.e(32305),r.e(54497),r.e(7473),r.e(20872),r.e(36993),r.e(67590),r.e(51545),r.e(6932),r.e(20022),r.e(18294),r.e(5033),r.e(1291),r.e(97768),r.e(24685),r.e(59276),r.e(99406),r.e(59794),r.e(78580),r.e(55616),r.e(21234),r.e(3330),r.e(59316),r.e(37797),r.e(11184),r.e(52426),r.e(12514),r.e(22886),r.e(45854),r.e(72263),r.e(86412),r.e(20556),r.e(35747),r.e(29580),r.e(6198),r.e(95470),r.e(5400),r.e(20806),r.e(47404),r.e(20805),r.e(80159),r.e(4065),r.e(75031),r.e(78332),r.e(13526),r.e(6854),r.e(13686),r.e(46729),r.e(44258),r.e(36933),r.e(77435),r.e(14770),r.e(13015),r.e(16506),r.e(9103),r.e(42797),r.e(68775),r.e(11022),r.e(49029),r.e(10133),r.e(43927),r.e(18650),r.e(87122),r.e(12674),r.e(4828),r.e(84283),r.e(44341),r.e(98317),r.e(43587),r.e(35711),r.e(8089),r.e(23197),r.e(10095),r.e(62621),r.e(45738),r.e(19604),r.e(356),r.e(1377),r.e(17292),r.e(34607),r.e(54694),r.e(65484),r.e(54894),r.e(79331),r.e(45524),r.e(55851),r.e(70231),r.e(23145),r.e(14528),r.e(59498),r.e(13691),r.e(35094),r.e(97091),r.e(56129),r.e(27241),r.e(36739),r.e(10297),r.e(24283),r.e(47506),r.e(95150),r.e(49019),r.e(73089),r.e(2602),r.e(79547),r.e(83596),r.e(83537),r.e(50621),r.e(17456),r.e(84736),r.e(57978),r.e(47838),r.e(23055),r.e(55404),r.e(34678),r.e(68569),r.e(98120),r.e(95789),r.e(42170),r.e(33364),r.e(48387),r.e(97236),r.e(9701),r.e(2720),r.e(59815),r.e(38757),r.e(42522),r.e(91322),r.e(88329),r.e(56843),r.e(23516),r.e(49390),r.e(60467),r.e(92926),r.e(51751),r.e(65141),r.e(8423),r.e(42389),r.e(60295),r.e(75698),r.e(92417),r.e(11445),r.e(76834),r.e(39216),r.e(58480)]).then(r.bind(r,374600));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(374600,"./policies/PolicyEdit","lazy",e);return e()})()),observability:{productEntityChain:[{productEntityType:s.Lm.CLUSTER_POLICY,routeParamId:"policyId"}]}}]},{access:a.g3.COMPUTE_ONLINE_STORES,pageId:"compute.main-page.sub",path:`${n.FI.BrickStore}/:storeName`,element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(62394),r.e(3752),r.e(67590),r.e(6932),r.e(97768),r.e(24685),r.e(55616),r.e(3330),r.e(92170),r.e(44004),r.e(32828),r.e(40972),r.e(29580),r.e(92922),r.e(84245),r.e(97421),r.e(20806),r.e(47404),r.e(31083),r.e(11136),r.e(64898),r.e(25642),r.e(36525),r.e(86869),r.e(30140),r.e(89650),r.e(2347),r.e(10095),r.e(83750),r.e(92480),r.e(47323),r.e(92792),r.e(63121),r.e(79832),r.e(65084),r.e(81647),r.e(8260),r.e(71046),r.e(71713),r.e(36176),r.e(46822),r.e(37140),r.e(89478),r.e(13915),r.e(50536),r.e(4340),r.e(57005),r.e(47399),r.e(51380)]).then(r.bind(r,193319));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(193319,"./brickStore/BrickStore","lazy",e);return e()})()),esComponent:o.Es.Brickstore},{access:a.g3.COMPUTE_DATABASE_INSTANCES,esComponent:o.Es.Brickstore,pageId:"compute.database-instances",path:`${n.FI.DatabaseInstances}/:databaseInstanceName`,element:(0,d.D)(()=>(()=>{let e=()=>r.e(16561).then(r.bind(r,216561));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(216561,"./databaseInstances/DatabaseInstanceLakebaseRedirectWrapper","lazy",e);return e()})()),children:[{pageId:"compute.database-instances.detail",path:"",element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(62394),r.e(3752),r.e(32305),r.e(36993),r.e(67590),r.e(51545),r.e(6932),r.e(18294),r.e(5033),r.e(1291),r.e(97768),r.e(24685),r.e(59276),r.e(99406),r.e(78580),r.e(55616),r.e(3330),r.e(92170),r.e(59316),r.e(37797),r.e(11184),r.e(44004),r.e(52426),r.e(12514),r.e(22886),r.e(45854),r.e(72263),r.e(86412),r.e(32828),r.e(40972),r.e(35747),r.e(29580),r.e(92922),r.e(6198),r.e(84245),r.e(97421),r.e(20806),r.e(47404),r.e(31083),r.e(11136),r.e(64898),r.e(13526),r.e(25642),r.e(36525),r.e(2347),r.e(95258),r.e(16242),r.e(42797),r.e(68775),r.e(11022),r.e(49029),r.e(10133),r.e(43927),r.e(18650),r.e(87122),r.e(12674),r.e(4828),r.e(84283),r.e(98317),r.e(43587),r.e(35711),r.e(23197),r.e(10095),r.e(62621),r.e(45738),r.e(19604),r.e(356),r.e(17292),r.e(34607),r.e(54694),r.e(65484),r.e(54894),r.e(79331),r.e(45524),r.e(83750),r.e(55851),r.e(70231),r.e(23145),r.e(14528),r.e(92480),r.e(47323),r.e(92792),r.e(59498),r.e(63121),r.e(13691),r.e(35094),r.e(97091),r.e(79832),r.e(56129),r.e(65084),r.e(81647),r.e(8260),r.e(71046),r.e(71713),r.e(36176),r.e(46822),r.e(37140),r.e(89478),r.e(13915),r.e(50536),r.e(4340),r.e(95150),r.e(73089),r.e(57978),r.e(59909),r.e(57005),r.e(47399),r.e(39712),r.e(82802)]).then(r.bind(r,602869));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(602869,"./databaseInstances/DatabaseInstanceDetail","lazy",e);return e()})())},{pageId:"compute.database-instances.edit",path:"edit",element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(36993),r.e(67590),r.e(32828),r.e(40972),r.e(3910),r.e(99918),r.e(83750),r.e(92480),r.e(30908),r.e(25230),r.e(57958),r.e(22203),r.e(28498)]).then(r.bind(r,762876));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(762876,"./databaseInstances/DatabaseInstanceEdit","lazy",e);return e()})())}]},{access:a.g3.COMPUTE,pageId:"compute.spark-ui",path:"sparkui",element:(0,u.P)(),children:[{pageId:"compute.spark-ui.driver-logs",path:":clusterId/driver-logs",element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(62394),r.e(36993),r.e(20022),r.e(18294),r.e(5033),r.e(59794),r.e(12514),r.e(43164),r.e(50799),r.e(51783),r.e(48387),r.e(83324),r.e(47930),r.e(53074)]).then(r.bind(r,276293));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(276293,"./sparkUi/DriverLogs","lazy",e);return e()})()),observability:{productEntityChain:[{productEntityType:s.Lm.CLUSTER,routeParamId:"clusterId"}]}},{pageId:"compute.spark-ui.metrics",path:":clusterId/metrics",element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(62394),r.e(3752),r.e(36993),r.e(67590),r.e(6932),r.e(5033),r.e(97768),r.e(24685),r.e(59794),r.e(55616),r.e(3330),r.e(92170),r.e(44004),r.e(32828),r.e(20556),r.e(40972),r.e(29580),r.e(92922),r.e(84245),r.e(97421),r.e(20806),r.e(47404),r.e(31083),r.e(78756),r.e(11136),r.e(64898),r.e(80159),r.e(4065),r.e(25642),r.e(36525),r.e(2347),r.e(95258),r.e(72605),r.e(10095),r.e(45738),r.e(83750),r.e(92480),r.e(47323),r.e(92792),r.e(63121),r.e(79832),r.e(65084),r.e(81647),r.e(8260),r.e(71046),r.e(71713),r.e(36176),r.e(46822),r.e(37140),r.e(89478),r.e(13915),r.e(50536),r.e(4340),r.e(57005),r.e(47399),r.e(13535),r.e(79818)]).then(r.bind(r,629904));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(629904,"./sparkUi/Metrics","lazy",e);return e()})()),observability:{productEntityChain:[{productEntityType:s.Lm.CLUSTER,routeParamId:"clusterId"}]}},{pageId:"compute.spark-ui.view",path:":clusterId/:root/*",element:(0,d.D)(()=>(()=>{let e=()=>r.e(1257).then(r.bind(r,1257));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(1257,"./sparkUi/SparkUi","lazy",e);return e()})()),observability:{productEntityChain:[{productEntityType:s.Lm.CLUSTER,routeParamId:"clusterId"}]}},{pageId:"compute.spark-ui.view",path:"*",element:(0,d.D)(()=>(()=>{let e=()=>r.e(86400).then(r.bind(r,386400));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(386400,"./sparkUi/LegacySparkUiCatchall","lazy",e);return e()})())}]},{access:a.g3.COMPUTE_GPU_POOLS,esComponent:o.Es.AIRuntime,pageId:"compute.gpu-pools.detail",path:"gpu-pools/:gpuPoolId",element:(0,d.D)(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(62394),r.e(36993),r.e(20022),r.e(59276),r.e(59794),r.e(47589),r.e(51503),r.e(59202),r.e(59032),r.e(68037)]).then(r.bind(r,368037));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(368037,"./gpu_pools/GpuPoolDetail","lazy",e);return e()})())}]}]},125151:(e,t,r)=>{"use strict";r.d(t,{l:()=>i});var a=r(586356),n=r(409666);let i=(0,r(315592).Xr)({type:"filter-date-picker",channelIndex:{fields:1},validateEditorSpec:e=>({validatedSpec:e}),version:n.B0,getEncodingMapMeta:()=>n.OM,allowDisaggregatedData:!1,allowSelection:!0,isRenderable:a.q,normalizeDecoupledSpec:(e,t)=>e})},126987:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.004 9.602a2.751 2.751 0 1 0 3.371 3.47 2.751 2.751 0 0 0 5.25 0 2.751 2.751 0 1 0 3.371-3.47A2.75 2.75 0 0 0 11.25 7h-2.5v-.604a2.751 2.751 0 1 0-1.5 0V7h-2.5a2.75 2.75 0 0 0-2.746 2.602M2.75 11a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m4.5-2.5h-2.5a1.25 1.25 0 0 0-1.242 1.106 2.76 2.76 0 0 1 1.867 1.822A2.76 2.76 0 0 1 7.25 9.604zm1.5 0v1.104c.892.252 1.6.942 1.875 1.824a2.76 2.76 0 0 1 1.867-1.822A1.25 1.25 0 0 0 11.25 8.5zM12 12.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m-5.25 0a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0M8 5a1.25 1.25 0 1 1 0-2.5A1.25 1.25 0 0 1 8 5",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="TreeIcon";let l=s},128071:(e,t,r)=>{"use strict";r.d(t,{J:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.visualizations.enableParameterizedWidgetTitleDescription",!1)}},130647:(e,t,r)=>{"use strict";r.d(t,{W:()=>n});var a=r(441535);function n(){return(0,a.W)("genie_bi_migration",!1)}},134763:(e,t,r)=>{"use strict";r.d(t,{DY:()=>c,LS:()=>u,sE:()=>l});var a=r(610435),n=r(692738),i=r(394917),o=r(886100),s=r(22191);let l=n.createContext(void 0);function u({children:e}){let t=(0,i.f)();return(0,a.Y)(l.Provider,{value:t,children:e})}function c(){let e=n.useContext(l);if(void 0===e)return o.iT.sev2(s.Es.Editor,"AutoInlineSuggestionContextProvider","useAutoInlineSuggestionEnabled must be used within a AutoInlineSuggestionContextProvider",!0),(0,i.W)();return e}},138455:(e,t,r)=>{"use strict";r.d(t,{M:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enableMaterializedViewFromDataset",!1)}},139895:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var a=r(157698),n=r(692738),i=r(94601);class o extends n.Component{static propTypes={promise:(0,a.instanceOf)(Promise),rethrow:a.bool,children:a.func.isRequired};static defaultProps={rethrow:!0};handledPromise;isComponentUnmounted=!1;constructor(e){super(e),this.state={isLoaded:!1,isLoading:void 0!==e.promise,error:void 0,data:void 0,timeElapsed:void 0},e.promise&&this.addPromiseHandlers(e.promise)}UNSAFE_componentWillReceiveProps(e){e.promise&&e.promise!==this.props.promise&&(this.setState({isLoading:void 0!==e.promise,error:void 0}),this.addPromiseHandlers(e.promise))}componentWillUnmount(){this.isComponentUnmounted=!0}addPromiseHandlers(e){if(e){let t=Date.now();this.handledPromise=e.then(r=>{if(this.isComponentUnmounted)return;e===this.props.promise&&this.setState({isLoaded:!0,isLoading:!1,error:void 0,data:r,timeElapsed:Date.now()-t})}).catch(r=>{if(this.isComponentUnmounted)return;if(e===this.props.promise&&this.setState({isLoaded:!0,isLoading:!1,error:(0,i.u1)(r),timeElapsed:Date.now()-t}),this.props.rethrow)throw r})}}render(){let{children:e}=this.props;return e(this.state)}}},143906:(e,t,r)=>{"use strict";function a(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function n(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function s(e){a(o,n,i,s,l,"next",e)}function l(e){a(o,n,i,s,l,"throw",e)}s(void 0)})}}function i(e,t,r){return n(function*(){let a=yield e.get(`/ajax-api/2.0/data-rooms/${t}/conversations/${r}`);return{...a.data,messages:a.data.messages??[]}})()}function o(e,t,r){return n(function*(){return(yield e.post(`/ajax-api/2.0/data-rooms/${t}/conversations`,r)).data})()}r.d(t,{QL:()=>i,cK:()=>o})},148122:(e,t,r)=>{"use strict";if(r.d(t,{FS:()=>c,MI:()=>d,X1:()=>s,nu:()=>f,rc:()=>u,ug:()=>l,xQ:()=>p}),13057==r.j)var a,n=r(441535);if(13057==r.j)var i=r(227937);if(13057==r.j)var o=r(830792);let s=60,l=0,u=200;var c=((a={}).toggleSideNav="toggleSideNav",a.enterSideNavMenu="enterSideNavMenu",a.leaveSideNavMenu="leaveSideNavMenu",a.openNavMenu="openNavMenu",a);let d=()=>(0,n.W)("databricks.fe.queryInsights.enableQueryHistoryWithoutDbsqlEntitlements",!1),f=e=>{let t=(0,n.W)("databricks.fe.eda.enableUnifiedHighlightOnWorkspace",!0),r=(0,o.y)().canUseWorkspace;return t&&(0,i.vy)()&&r&&"sql-editor"!==e},p=()=>(0,n.W)("databricks.fe.renameMachineLearningToAiMl.enabled",!1)},148560:(e,t,r)=>{"use strict";r.d(t,{A_:()=>s,KF:()=>l,_z:()=>o});var a=r(304883);function n(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function i(e){return function(){var t=this,r=arguments;return new Promise(function(a,i){var o=e.apply(t,r);function s(e){n(o,a,i,s,l,"next",e)}function l(e){n(o,a,i,s,l,"throw",e)}s(void 0)})}}function o(e,t,r,n){return i(function*(){return(yield e.post(`/ajax-api/2.0/data-rooms/${t}/conversations/${r}/messages`,(0,a._Y)(n))).data})()}function s(e,t,r,a,n){return i(function*(){return(yield e.get(`/ajax-api/2.0/data-rooms/${t}/conversations/${r}/messages/${a}`,{params:{override_warehouse_id:n}})).data})()}function l(e,t,r){return i(function*(){let{dataRoomId:a,conversationId:n,messageId:i}=t,o={data_room_id:a,conversation_id:n,id:i,...r.updated_message};return(yield e.patch(`/ajax-api/2.0/data-rooms/${a}/conversations/${n}/messages/${i}`,{...r,updated_message:o})).data})()}},151539:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 17",...e,children:[(0,a.Y)("path",{fill:"currentColor",d:"M8.75 7.25H11v1.5H8.75V11h-1.5V8.75H5v-1.5h2.25V5h1.5z"}),(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a7 7 0 1 0 4.39 12.453l2.55 2.55 1.06-1.06-2.55-2.55A7 7 0 0 0 8 1M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0",clipRule:"evenodd"})]})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="ZoomInIcon";let l=s},152174:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{B:()=>y});var n=r(610435);r(692738);var i=r(497895),o=r(639712),s=r(139199),l=r(943545),u=r(829339),c=r(954879),d=r(200559),f=r(545873),p=r(119386),m=r(285351),g=r(102735),h=r(76829),b=e([d,h,f]);function y({notebook:e,error:t}){let r=(e=>{let t=e?.get("type"),{isSaving:r}=(0,p.R4)({notebook:e,type:t});return r})(e),{theme:a}=(0,i.wn)(),b=(0,c.I)(e=>e.projectRootFolderNode),v=(0,d.Xb)(),E=(0,c.I)(e=>e.isDabsProject),I=(0,c.I)(e=>e.projectName()),T=(0,c.I)(e=>e.isRootBundleDataLoading);if((0,u.r)({title:I,skip:!I}),!E||void 0===b)return(0,n.Y)(n.FK,{});let w=[{node:(0,n.Y)(g.M,{projectName:I,projectConfigError:t,isLoading:T}),text:I??""}],S=(0,n.FD)(n.FK,{children:[(0,n.Y)(s.A,{afterClose:v,ancestorRepoId:(0,l.XQ)(b),isCliGitFolder:(0,l.pP)(b),gitBranch:b.attributes?.git_branch,gitState:b.attributes?.git_state,isSavingFile:r,style:(0,o.dg)({backgroundColor:a.colors.tagDefault,border:"none",maxHeight:20})}),(0,n.Y)(h.c,{})]});return(0,n.Y)(n.FK,{children:(0,n.Y)(m.F,{title:w,titleSideAddons:S,actions:[(0,n.Y)(f.w,{},"share-button")]})})}[d,h,f]=b.then?(await b)():b,a()}catch(e){a(e)}})},152539:(e,t,r)=>{"use strict";r.d(t,{e:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enableLazyVizRenderingForSnapshot",!1)}},154753:(e,t,r)=>{"use strict";r.d(t,{m:()=>i});let a=({item:e,version:t})=>JSON.stringify(e),n=({item:e,version:t})=>JSON.parse(e);function i({version:e,prefix:t,serializer:r=a,deserializer:o=n,storage:s=window.localStorage}){let l=e=>`${t}${e}`,u=({storedItem:e})=>{let{item:t,version:r}=JSON.parse(e);return o({item:t,version:r})};return{[Symbol.iterator](){let e=this.entries(),t=0;return{[Symbol.iterator](){return this},next:()=>({value:e[t++],done:t>e.length})}},get size(){return this.entries().length},entries:()=>Object.entries(s).filter(([e])=>e.startsWith(t)).map(([e,r])=>[e.slice(t.length),u({storedItem:r})]),keys(){return this.entries().map(([e])=>e)},values(){return this.entries().map(([,e])=>e)},forEach(e,t){let r=this.entries(),a=e.bind(t);for(let[e,t]of r)a(t,e,this)},clear(){for(let e of this.keys())this.delete(e)},get(e){let t=s.getItem(l(e));if(!t)return;return u({storedItem:t})},delete(e){s.removeItem(l(e))},set(t,a){try{s.setItem(l(t),(({item:e,version:t})=>JSON.stringify({item:r({item:e,version:t}),version:t}))({item:a,version:e}))}catch(e){console.error(e)}},has:e=>l(e)in s}}},155848:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",d:"M6 1H1.75a.75.75 0 0 0-.75.75V6h1.5V2.5H6zM10 2.5V1h4.25a.75.75 0 0 1 .75.75V6h-1.5V2.5zM10 13.5h3.5V10H15v4.25a.75.75 0 0 1-.75.75H10zM2.5 10v3.5H6V15H1.75a.75.75 0 0 1-.75-.75V10z"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="FullscreenIcon";let l=s},157817:(e,t,r)=>{"use strict";r.d(t,{C7:()=>d,Df:()=>i.Df0,N4:()=>i.N4A,Ot:()=>h,R7:()=>m,SA:()=>b,UD:()=>f,Wx:()=>u,_K:()=>y,aR:()=>i.aRi,h2:()=>l,iH:()=>g,ll:()=>s,nG:()=>o,wz:()=>p,zh:()=>c});var a,n=r(551984),i=r(483588);let o=["user","system","assistant","toolInput","toolOutput","reasoning"],s=["cellEdit2","summary","compactionMarker","error"],l=[...o,...s];var u=((a={}).OFF="off",a.USER="user",a.GHOST_TEXT="ghost_text",a.INLINE_QUICK_FIX="inline_quick_fix",a.CELL_MAGIC="cell_magic",a.INLINE_ASSISTANT="inline_assistant",a.CHAT_WINDOW_INSERT="chat_window_insert",a.CHAT_WINDOW_PASTE="chat_window_paste",a.CHAT_WINDOW="chat_window",a.AUTOCOMPLETE="autocomplete",a.ASSISTANT_EDIT="assistant_edit",a.NEXT_EDIT_SUGGESTION="next_edit_suggestion",a.NEXT_EDIT_SUGGESTION_GHOST_TEXT="next_edit_suggestion_ghost_text",a.ASSISTANT_ADD="assistant_add",a.ASSISTANT_DELETE="assistant_delete",a.ASSISTANT_FILE_EDIT="assistant_file_edit",a.UNKNOWN="unknown",a.ASSISTANT_AGENT_EDIT="assistant_agent_edit",a.ASSISTANT_AGENT_ADD="assistant_agent_add",a.ASSISTANT_AGENT_DELETE="assistant_agent_delete",a.AUTOFORMAT="autoformat",a);let c={ghost_text:"#808000",next_edit_suggestion_ghost_text:"#808000",user:"#ff4500",inline_quick_fix:"#c71585",cell_magic:"#00ff00",inline_assistant:"#00ff00",chat_window:"#00ffff",autocomplete:"#0000ff",assistant_edit:"#1e90ff",assistant_agent_edit:"#1e90ff",assistant_add:"#9370db",assistant_agent_add:"#9370db",autoformat:"#ffa500",next_edit_suggestion:"#8b008b"},d=Object.values(u).filter(e=>e.includes("assistant")),f=["assistant_delete","assistant_agent_delete","assistant_add","assistant_agent_add"],p=["Chat","Agent","Planner"],m={CHAT:"Chat",AGENT:"Agent",PLANNER:"Planner"},g=(0,n.Ik)({source:(0,n.gl)().oneOf(Object.values(u)).required(),agent:(0,n.gl)().required(),model:(0,n.gl)().required(),promptId:(0,n.gl)().required(),isPending:(0,n.zM)().notRequired(),isPaste:(0,n.zM)().notRequired(),isExternalPaste:(0,n.zM)().notRequired()}),h=(0,n.Ik)({start:(0,n.ai)().required(),endExclusive:(0,n.ai)().required(),type:(0,n.Yj)().required()}),b=["notebook","dashboard","file","query","app","job"];function y(e){return`inline-assistant:${e.assetType}:${e.assetId}${"notebook"===e.assetType?`:${e.cellNuid}`:""}`}},159705:(e,t,r)=>{"use strict";r.d(t,{Nw:()=>i,hG:()=>n,iU:()=>o,vi:()=>s});var a=r(141078);let n=(0,a.J1)`
  fragment BooleanSettingFragment on SettingspolicySetting {
    isMutable
    ref
    value {
      boolVal {
        value
      }
    }
  }
`,i=(0,a.J1)`
  fragment BooleanSettingV2Fragment on SettingspolicySettingsv2SettingValue {
    isSetByUser
    value {
      boolVal
    }
  }
`,o=(0,a.J1)`
  fragment StringSettingFragment on SettingspolicySetting {
    isMutable
    ref
    value {
      stringVal {
        value
      }
    }
  }
`,s=(0,a.J1)`
  fragment SettingsApiErrorFragment on ApiError {
    code
    message
    helpUrl
    traceId
  }
`},168351:(e,t,r)=>{"use strict";r.d(t,{v:()=>m});var a=r(610435),n=r(692738),i=r(336330),o=r(258182),s=r(679360),l=r(568721),u=r(549761),c=r(726977),d=r(22191),f=r(759458),p=r(88277);function m(){let e=(0,f.Pj)((0,p.p)(),e=>e.notifications),[t,r]=n.useState(0);return(0,n.useEffect)(()=>{let e=new ResizeObserver(e=>{let{height:t}=e[0].contentRect;r(t+12)}),t=document.querySelector("#dubois-notification-portal ol");return t&&e.observe(t),()=>e.disconnect()},[]),(0,a.FD)(o.Provider,{children:[e.map(e=>{if("globalNotification"===e.apiType)return(0,a.Y)(g,{notification:e},e.uid);if("legacyNotification"===e.apiType)return(0,a.Y)(y,{notification:e},e.uid);return(0,a.Y)(a.FK,{})}),(0,a.Y)(o.Viewport,{css:{transform:`translateY(${t}px)`}})]})}function g({notification:e}){let{message:t,autoDismiss:r,level:f,title:m,uid:y,dismissible:v,children:E,esComponent:I,errorBoundaryId:T,initiatorStack:w}=e,S=()=>p.y.removeNotification(y),{uiDeployableId:k}=(0,s.K8)(),A=!!m,_="number"==typeof y?y.toString():y,C=(0,n.useCallback)((e,{componentStack:t})=>{(0,l.wV)(e,w),(0,u.n8)(e,t,T??c.s.MonolithUiGlobalNotification,I??d.Es.UiObservability,k,!1)},[I,T,w,k]);return(0,a.Y)(i.tH,{onError:C,fallback:(0,a.Y)(a.FK,{}),children:(0,a.FD)(o.Root,{componentId:"codegen_webapp_js_notifications_notficationsv2.tsx_91",id:_,severity:f,duration:b(r),open:!0,onClick:void 0===v||"both"===v||"click"===v?S:void 0,onOpenChange:S,children:[A?(0,a.Y)(o.Title,{children:m}):(0,a.Y)(o.Title,{asChild:!0,children:(0,a.Y)(h,{title:t})}),A&&(0,a.Y)(o.Description,{children:t||E}),(void 0===v||"both"===v||"button"===v)&&(0,a.Y)(o.Close,{componentId:"codegen_webapp_js_notifications_notficationsv2.tsx_107",onClick:S})]})})}let h=n.forwardRef(({title:e},t)=>(0,a.Y)("div",{ref:t,children:e}));function b(e){if(void 0===e)return;if(0===e)return 1/0;return 1e3*e}function y({notification:e}){let{message:t,description:r,uid:n,onClick:i,onClose:s,duration:l,type:u}=e,c=()=>{s?.(),p.y.removeNotification(n)};return(0,a.FD)(o.Root,{componentId:"codegen_webapp_js_notifications_notficationsv2.tsx_145",id:n,duration:b(null===l?void 0:l),onClick:()=>{i?.(),c()},onOpenChange:c,open:!0,severity:u,children:[(0,a.Y)(o.Title,{children:t}),r&&(0,a.Y)(o.Description,{children:r}),(0,a.Y)(o.Close,{componentId:"codegen_webapp_js_notifications_notficationsv2.tsx_155",onClick:c})]})}},168356:(e,t,r)=>{"use strict";r.d(t,{w:()=>s});var a=r(692738),n=r(628111),i=r(410297);function o(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function s(){let{queryTreeNodeInfo:e}=(0,n.Ex)();return{maybeGetObjectIdByPath:(0,a.useCallback)(t=>{var r;return(r=function*(){try{let r=yield e(t),a=r.data.workspaceGetStatus.objectId;return i.jD.hasError(r)?null:a}catch{return null}},function(){var e=this,t=arguments;return new Promise(function(a,n){var i=r.apply(e,t);function s(e){o(i,a,n,s,l,"next",e)}function l(e){o(i,a,n,s,l,"throw",e)}s(void 0)})})()},[e])}}},170075:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.5 5c-.356 0-.694-.074-1-.208v8.458c0 .69.56 1.25 1.25 1.25H10V16H4.75A2.75 2.75 0 0 1 2 13.25V2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75zm0-1.5a1 1 0 0 1 0-2h8v2z",clipRule:"evenodd"}),(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M14 6.5a2 2 0 0 0-1.953 2.433l-.944.648a2 2 0 1 0 .105 3.262l.858.644a2 2 0 1 0 .9-1.2l-.988-.74a2 2 0 0 0-.025-.73l.944-.649A2 2 0 1 0 14 6.5m-.5 2a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m-4 2.75a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0M14 13.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",clipRule:"evenodd"})]})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CatalogSharedIcon";let l=s},170082:(e,t,r)=>{"use strict";r.d(t,{a:()=>i});var a=r(646171);function n(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}let i=e=>{var t;return(t=function*(){let{data:t}=yield(0,a.p)().patch("folders",e);return t},function(){var e=this,r=arguments;return new Promise(function(a,i){var o=t.apply(e,r);function s(e){n(o,a,i,s,l,"next",e)}function l(e){n(o,a,i,s,l,"throw",e)}s(void 0)})})()}},173949:(e,t,r)=>{"use strict";r.d(t,{L:()=>s});var a=r(411695),n=r(702263),i=r(274361);let o={name:"edit-job-settings",description:"Updates job settings via the Databricks CLI. Fetches current configuration, summarizes proposed changes, and applies them only after explicit user approval. Use when the user wants to edit, update, or change job settings, configuration, schedules, clusters, or parameters.",enabled:()=>(0,n.I)()&&(0,a.ER)()&&!(0,i.X)(),files:new Map([["SKILL.md",()=>(()=>{let e=()=>r.e(32126).then(r.t.bind(r,632126,17));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(632126,"./SKILL.md?raw","lazy",e);return e()})().then(e=>e.default)]])},s={name:"jobsAgent",skills:[{name:"job-run-diagnosis",description:"REQUIRED when diagnosing job run failures. Load this skill FIRST before diagnosing any failed job run — even when error context (errorMessage, stackTrace, code) is already available in the conversation.",files:new Map([["SKILL.md",()=>(()=>{let e=()=>r.e(25249).then(r.t.bind(r,325249,17));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(325249,"./SKILL.md?raw","lazy",e);return e()})().then(e=>e.default)]])},o]}},178808:(e,t,r)=>{"use strict";r.d(t,{V:()=>n,v:()=>o});var a=r(700367);function n({columnConfig:e,defaultTransform:t,displayName:r,specType:a="render"}){let{transform:i,column:s}=e,l=o(i)??t;if("editor"===a)return{...l?{transform:l}:{},field:s,...r?{displayName:r}:{}};return{...l?{transform:l}:{},fieldName:s,...r?{displayName:r}:{}}}let i={SUM:"sum",COUNT:"count",COUNT_DISTINCT:"countdistinct",AVG:"avg",MEDIAN:"median",MIN:"min",MAX:"max",STDDEV:"stddev",VARIANCE:"variance",YEAR_LEVEL:"yearly",MONTH_LEVEL:"monthly",WEEK_LEVEL:"weekly",DAY_LEVEL:"daily",HOUR_LEVEL:"hourly",MINUTE_LEVEL:"minutely",SECOND_LEVEL:"secondly"};function o(e){if(!e)return;return(0,a.y)(i[e])}},181828:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.75 1a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M8 1a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 8 1m5.25 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M2.75 6.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m5.25 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m5.25 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M2.75 11.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m5.25 0A1.75 1.75 0 1 0 8 15a1.75 1.75 0 0 0 0-3.5m5.25 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="AppIcon";let l=s},182328:(e,t,r)=>{"use strict";r.d(t,{z:()=>c});var a=r(610435),n=r(441535),i=r(305816),o=r(542272),s=r(371303),l=r(614384),u=r(996598);function c({children:e,notebookId:t}){let r={...(0,i.bZq)(),enableComboChart:!0,enableChartAggregationDisabling:!0,disableOldPivotTable:!0,enableVegaLiteRenderer:"active"===(0,l.sd)(),enableVegaLiteDebugMode:!!(0,s.sT)("databricks.fe.enableVegaLiteDebugMode",!1),enableDualRenderer:!!(0,s.sT)("databricks.fe.enableDualRenderer",!1),enableRenderingSeriesLimit:!0,enableTimeBin:!0,enableLegendCrossFiltering:!1,enableCrossFilter:!1},d=(0,u.Xt)(t);return(0,a.Y)(i.JGT,{recordEvent:d,flags:r,renderingLimit:{maxNumMarks:(0,n.W)("databricks.fe.notebook.maxNumMarks",15e3),maxNumSeries:(0,n.W)("databricks.fe.notebook.maxNumSeries",50)},isStyleInverted:!0,children:(0,a.Y)(i.k$O,{sharedColors:o.Y3,children:e})})}},186675:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.FD)("g",{fill:"currentColor",clipPath:"url(#CatalogOffIcon_svg__a)",children:[(0,a.Y)("path",{d:"m14 11.94-1.5-1.5V5H7.061l-1.5-1.5h6.94v-2h-8c-.261 0-.499.1-.677.263L2.764.703A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75z"}),(0,a.Y)("path",{fillRule:"evenodd",d:"M2 4.06.47 2.53l1.06-1.06 13.5 13.5-1.06 1.06-.03-.03H4.75A2.75 2.75 0 0 1 2 13.25zm1.5 1.5v7.69c0 .69.56 1.25 1.25 1.25h7.69z",clipRule:"evenodd"})]}),(0,a.Y)("defs",{children:(0,a.Y)("clipPath",{children:(0,a.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CatalogOffIcon";let l=s},187389:(e,t,r)=>{"use strict";r.d(t,{l:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enableDashboardMetadataPanel",!1)}},187441:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 17",...e,children:(0,a.Y)("path",{fill:"currentColor",d:"M3.75 2A2.75 2.75 0 0 0 1 4.75v6.5A2.75 2.75 0 0 0 3.75 14H5.5v-1.5H3.75c-.69 0-1.25-.56-1.25-1.25v-6.5c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v6.5c0 .69-.56 1.25-1.25 1.25H9.81l.97-.97-1.06-1.06-2.78 2.78 2.78 2.78 1.06-1.06-.97-.97h2.44A2.75 2.75 0 0 0 15 11.25v-6.5A2.75 2.75 0 0 0 12.25 2z"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="LoopIcon";let l=s},188454:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u,h:()=>l});var a=r(610435),n=r(692738),i=r(295169),o=r(866370);let s=[48,24,0],l=({lines:e=1,style:t})=>{let r=(0,n.useMemo)(()=>{let t=Math.floor(Math.random()*s.length);return[...Array(e)].map((e,r)=>{let n=s[(r+t)%s.length];return(0,a.Y)(i.x,{css:{height:16,width:`calc(100% - ${n}px)`}},r)})},[e]);return(0,a.Y)("div",{"aria-busy":!0,role:"status",style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:12,...t},children:r})},u=({children:e,loadingDescription:t})=>(0,a.FD)(a.FK,{children:[(0,a.Y)(o.B.Provider,{value:null,children:e}),(0,a.Y)(o.G,{description:t})]})},191431:(e,t,r)=>{"use strict";r.d(t,{Q:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.deltapipelines.enableUnifiedIncludesForCreateEdit",!1)}},191736:(e,t,r)=>{"use strict";r.d(t,{$:()=>o});var a=r(610435),n=r(692738),i=r(79570);function o({children:e,tooltipTitle:t,truncateFromStart:r}){let s=(0,n.useRef)(null),[l,u]=(0,n.useState)(!1);(0,n.useEffect)(()=>{if(!s.current)return;let{offsetWidth:e,scrollWidth:t}=s.current;u(t>e)},[e,s]);let c=(0,a.Y)("span",{ref:s,css:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflowX:"hidden",...l&&r&&{direction:"rtl"},"&:before, &:after":{content:'"‎"'}},children:e});return l?(0,a.Y)(i.m,{content:t??e,componentId:"ellipsis-text-tooltip",children:c}):c}},196852:(e,t,r)=>{"use strict";r.d(t,{WS:()=>c,o6:()=>u,qP:()=>f,ph:()=>y,Bh:()=>d,z6:()=>b});var a=r(978081),n=r(22191),i=r(289841),o=r(594989);function s(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function l(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){s(i,a,n,o,l,"next",e)}function l(e){s(i,a,n,o,l,"throw",e)}o(void 0)})}}let u={ERROR_RUNNING_TOOL:"An error occurred while running the tool. Please try again.",NOT_APPROVED:"Tool execution was not approved by user.",NOT_APPROVED_LEGACY:"Tool execution was not approved.",CANCELLED_BY_USER:"Tool call cancelled by user",REJECTED_BY_USER:"Tool call request rejected by user",TOOL_NOT_AVAILABLE:"Tool is not available in the current context.",INVALID_INPUT:"Tool response did match provided schema. Violations",UNPARSEABLE_INPUT:"Tool input JSON is unparseable"},c=Object.values(u);function d(e,t,{esComponent:r,toolName:i}){if(!e)return!1;if("function"==typeof e)try{return e(t)}catch(e){return(0,a.j)({level:"sev2",esComponent:r??n.Es.Assistant,eventId:"needsApproval-function-threw",debugBlob:{toolName:i,error:e}}),!0}return e}function f(e){return e.startsWith("mcp-")}let p=/^[a-zA-Z0-9_-]{1,64}$/;function m(e){if(p.test(e))return e;throw Error("Tool name must be 1-64 characters long and only contain alphanumeric characters, underscores and hyphens (a-z, A-Z, 0-9, _, -). No spaces, or special characters allowed.")}function g(e,t){let r=t instanceof Error?t.toString():String(t);return{success:!1,error:{message:`${u.ERROR_RUNNING_TOOL} Error: ${r}`}}}function h(e){return l(function*(){let{parsedInput:t,options:r,toolName:a,runContext:n,signal:i}=e,o=n.agentIds;if(r.inputGuardrail){let e=yield r.inputGuardrail(t,a,o);if(!e.safe)return e.result}let s=yield r.execute(t,n,i);if(r.outputGuardrail){let e=yield r.outputGuardrail(s,a,o);if(!e.safe)return e.result}return s})()}function b(e){let t=e.esComponent,r=m(e.name);return{type:"function",name:r,esComponent:t,_id:`${r}::function`,description:e.description,parameters:e.parameters,internalStrictValidation:!0,get strict(){try{return(0,o.S)("databricks.fe.assistant.pseudoStrictModeKillswitch")}catch{return!1}},invoke:function(t,a,n){return l(function*(){try{return yield h({parsedInput:a,options:e,toolName:r,runContext:t,signal:n})}catch(r){return e.errorFunction?.(t,r)??g(t,r)}})()},createStreamingHandler:e.createStreamingHandler,needsApproval:e.needsApproval??!1,toolResultCompactionConfig:e.toolResultCompactionConfig??i.dU,display:e.display,toolAutoAllowKey:e.toolAutoAllowKey,toolAutoAllowLabel:e.toolAutoAllowLabel,deferLoading:e.deferLoading}}function y(e){let t=e.esComponent,r=e.errorFunction??g,a=m(e.name);return{type:"function",name:a,esComponent:t,_id:`${a}::function`,description:e.description,parameters:e.parameters,internalStrictValidation:!1,strict:!1,invoke:function(t,n,i){return l(function*(){try{return yield h({parsedInput:n,options:e,toolName:a,runContext:t,signal:i})}catch(e){return r(t,e)}})()},createStreamingHandler:e.createStreamingHandler,needsApproval:e.needsApproval??!1,toolResultCompactionConfig:e.toolResultCompactionConfig??i.dU,display:e.display,toolAutoAllowKey:e.toolAutoAllowKey,toolAutoAllowLabel:e.toolAutoAllowLabel,deferLoading:e.deferLoading}}},203796:(e,t,r)=>{"use strict";r.d(t,{n:()=>i});var a=r(692738),n=r(337706);function i({name:e,defaultValue:t,codec:r,historyAction:o="replace",errorMode:s}){let l=(0,a.useCallback)(a=>{let n=a.get(e);if(null===n)return t;try{return r.deserialize(n)}catch(e){if("throw"===s)throw e;return t}},[e,t,r,s]),[u,c]=(0,n.ok)();return[(0,a.useMemo)(()=>l(u),[u,l]),(0,a.useCallback)((t,a)=>{c(a=>{let n="function"==typeof t?t(l(a)):t;return void 0===n?a.delete(e):a.set(e,r.serialize(n)),a},{replace:"replace"===o,...a})},[o,e,l,r,c])]}},204645:(e,t,r)=>{"use strict";r.d(t,{q:()=>l});var a=r(620275),n=r(689262),i=r(686560),o=r(441535),s=r(278983);function l(){if(!window.settings){let e,t,r,s,l,u;return e=(0,n.b)("userType",(0,i.d)("userType",""),()=>(0,i.d)("userType_new","")),t=(0,i.d)("userCanUseDatabricksWorkspace_new",!1),r=(0,i.d)("userCanUseSqlService_new",!1),s=(0,n.b)("centralizedLoginEnabled",(0,i.d)("centralizedLoginEnabled",!1),()=>(0,o.W)("databricks.fe.centralizedLoginEnabled",!1)),l=(0,i.d)("enableSqlService",!1),u="WorkspaceUser"===e&&!t&&!r&&s&&l&&!(0,a.s4)(),"AccountOnlyUser"===e||u}let e=window.settings?.userType==="AccountOnlyUser",t=window.settings?.userType==="WorkspaceUser"&&!window.settings?.userCanUseDatabricksWorkspace&&!window.settings?.userCanUseSqlService&&window.settings?.centralizedLoginEnabled&&window.settings?.enableSqlService&&!(0,a.s4)();return(e||t)&&(0,s.y)("clientsideEvent",{eventType:"isEffectiveAccountOnlyUser"}),e||t}},204725:(e,t,r)=>{"use strict";r.d(t,{B:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.dbsql.disableUserImpersonationFeatures",!1)}},204892:(e,t,r)=>{"use strict";r.d(t,{O:()=>o,P:()=>s});var a=r(278983),n=r(689017),i=r(711489);class o extends Error{status;code;source;data;constructor(e,t,r,a){super(t),this.status=e,this.code=t,this.source=r,this.data=a}}let s=(e,t,r,o,s,l,u)=>{(0,n.wi)({lakesense_log:{event_type:l??i.J5.LakesenseEventType_Type.TYPE_UNSPECIFIED,event_name:`${e}: ${t}`,lakesense_trace_id:s,lakesense_client_id:r,model_type:u}}),(0,a.y)("clientsideEvent",{eventType:"InlineAssistantError",eventName:`${e}: ${t}`,lakesenseTraceId:s,lakesenseClientId:r,modelType:u},o)}},204972:(e,t,r)=>{"use strict";function a(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function n(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function s(e){a(o,n,i,s,l,"next",e)}function l(e){a(o,n,i,s,l,"throw",e)}s(void 0)})}}r.r(t),r.d(t,{lazilyImportEditorModule:()=>i});let i=(e,t,a)=>n(function*(){let{includeLsp:i}=a??{},s=new Promise(a=>n(function*(){let n=Promise.all([(()=>{let e=()=>Promise.all([r.e(62280),r.e(21234),r.e(1990),r.e(78632),r.e(39676),r.e(31813),r.e(93932),r.e(64666),r.e(62762),r.e(49177),r.e(45027)]).then(r.bind(r,645696));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(645696,"@databricks/editor/unifiedEditor","lazy",e);return e()})(),(()=>{let e=()=>Promise.all([r.e(1990),r.e(78632),r.e(39676),r.e(31813),r.e(80934)]).then(r.bind(r,876146));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(876146,"@databricks/monaco-0-51/monaco","lazy",e);return e()})()]).then(([e,t])=>{e.hydrateWithMonaco(t.monacoApi),e.getMonacoApi().MonacoLanguageClientServiceManager.initMonacoLanguageClientServices()}),[i,s]=yield Promise.all([n,(()=>{let e=()=>Promise.all([r.e(62280),r.e(6932),r.e(1291),r.e(97768),r.e(24685),r.e(99406),r.e(21234),r.e(92170),r.e(1990),r.e(78632),r.e(39676),r.e(31813),r.e(51362),r.e(26881),r.e(93932),r.e(79724),r.e(56934),r.e(68775),r.e(11022),r.e(43927),r.e(18650),r.e(87122),r.e(12674),r.e(4828),r.e(90489),r.e(64666),r.e(30259),r.e(13962),r.e(22831),r.e(80086),r.e(51818),r.e(87385),r.e(58415),r.e(79637),r.e(62762),r.e(48898),r.e(32474)]).then(r.bind(r,731392));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(731392,"@databricks/editor/commonPlugins","lazy",e);return e()})()]);t&&(yield o(t,s)),a((yield e?.()))})()),l=new Promise(e=>n(function*(){let[t,a]=yield Promise.all([(()=>{let e=()=>Promise.all([r.e(78632),r.e(51362),r.e(67812)]).then(r.bind(r,528304));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(528304,"@databricks/editor/vscodeLanguageserverProtocol","lazy",e);return e()})(),i?(()=>{let e=()=>Promise.all([r.e(78632),r.e(51362),r.e(30618)]).then(r.bind(r,706330));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(706330,"@databricks/monaco-0-51/vscodeLsp","lazy",e);return e()})():Promise.resolve(void 0)]);a&&t.hydrateWithVscodeLsp(a.vscodeLspApi),e()})()),[u]=yield Promise.all([s,l]);return u})(),o=(e,t)=>n(function*(){switch(e){case"ChatSidebarNativeFeaturePlugin":{let{ChatSidebarNativeFeaturePlugin:e}=yield(()=>{let e=()=>Promise.all([r.e(62280),r.e(6932),r.e(1291),r.e(97768),r.e(24685),r.e(99406),r.e(21234),r.e(92170),r.e(1990),r.e(78632),r.e(39676),r.e(31813),r.e(51362),r.e(26881),r.e(93932),r.e(79724),r.e(56934),r.e(68775),r.e(11022),r.e(43927),r.e(18650),r.e(87122),r.e(12674),r.e(4828),r.e(90489),r.e(64666),r.e(30259),r.e(13962),r.e(22831),r.e(80086),r.e(51818),r.e(87385),r.e(58415),r.e(79637),r.e(62762),r.e(48898),r.e(85387)]).then(r.bind(r,54427));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(54427,"@databricks/editor/chatSidebarTextArea","lazy",e);return e()})();yield e().preload?.();break}case"DbSqlNativeFeaturePluginWithCustomThemes":yield t.DbSqlNativeFeaturePlugin(!0).preload?.();break;case"DbSqlNativeFeaturePluginWithDefaultTheme":yield t.DbSqlNativeFeaturePlugin(!1).preload?.();break;default:yield t[e]().preload?.()}})()},206717:(e,t,r)=>{"use strict";r.d(t,{G$:()=>s,x$:()=>o});var a=r(141078),n=r(491438);function i(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}let o=(0,a.J1)`
  query GetUcTablesQuery($schemaFullName: String!, $maxResults: Int = 100, $pageToken: String)
  @component(name: "DBSQLX.FileBrowser") {
    unityCatalogSchemaNameReference(fullName: $schemaFullName) {
      schema {
        fullName
        tables(maxResults: $maxResults, pageToken: $pageToken) {
          nodes {
            managedCatalogTableInfo {
              tableId
              tableType
              name
              owner
              createdAt
              securableKind
              securableType
              browseOnly
            }
          }
          nextPageToken
        }
      }
    }
  }
`;function s(e,t,r){var a;return(a=function*(e,t,{maxResults:r=100,pageToken:a,metastoreScope:i}={},s){let{data:l}=yield e.query({query:o,variables:{schemaFullName:t,maxResults:r,pageToken:a},context:(0,n.Xe)(i),fetchPolicy:s});return l.unityCatalogSchemaNameReference?.schema?.tables??null},function(){var e=this,t=arguments;return new Promise(function(r,n){var o=a.apply(e,t);function s(e){i(o,r,n,s,l,"next",e)}function l(e){i(o,r,n,s,l,"throw",e)}s(void 0)})}).apply(this,arguments)}},210001:(e,t,r)=>{"use strict";r.d(t,{d:()=>c});var a=r(610435),n=r(692738),i=r(497895),o=r(382908),s=r(944552),l=r(342411),u=r(754275);function c(e){let{theme:t}=(0,i.wn)(),r=(0,u.B)(),c=e.id??r,[f,p]=n.useState(e.defaultChecked??e.checked??!1),m=e.checked??f;return(0,a.FD)("div",{css:{alignItems:"center",display:"inline-flex",gap:t.spacing.sm},children:[(0,a.Y)("label",{"aria-hidden":!0,css:{textAlign:"end"},htmlFor:c,children:(0,a.Y)(d,{off:(0,a.Y)(o.o.Text,{bold:!0,children:(0,a.Y)(l.sA,{id:"f9yzNX",defaultMessage:"Off"})}),on:(0,a.Y)(o.o.Text,{bold:!0,children:(0,a.Y)(l.sA,{id:"mE7ssh",defaultMessage:"On"})}),state:m})}),(0,a.Y)(s.d,{...e,id:c,onChange:function(t,r){p(t),e.onChange?.(t,r)}})]})}function d({off:e,on:t,state:r}){return(0,a.FD)("div",{children:[(0,a.Y)(f,{visible:r,children:t}),(0,a.Y)(f,{visible:!r,children:e})]})}function f({children:e,visible:t}){return(0,a.Y)("div",{"aria-hidden":!t,css:{height:t?void 0:0,visibility:t?"visible":"hidden"},children:e})}},211148:(e,t,r)=>{"use strict";r.d(t,{m:()=>l});var a=r(962264),n=r(586356),i=r(409666),o=r(315592);let s={"filter-single-select":1,"filter-multi-select":1},l=(0,o.BA)({isWidgetType:e=>e in s,channelIndex:{fields:1},description:e=>(0,a.K)(e),validateEditorSpec:e=>({validatedSpec:e}),version:i.B0,getEncodingMapMeta:()=>i.OM,allowDisaggregatedData:!1,allowSelection:!0,isRenderable:n.q,normalizeDecoupledSpec:(e,t)=>e})},213576:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M14 6.5V.75a.75.75 0 0 0-.75-.75H4.5A2.5 2.5 0 0 0 2 2.5v10.75A2.75 2.75 0 0 0 4.75 16H6.5v-1.5H4.75c-.69 0-1.25-.56-1.25-1.25V4.792c.306.134.644.208 1 .208h8v1.5zm-9.5-3a1 1 0 0 1 0-2h8v2z",clipRule:"evenodd"}),(0,a.Y)("path",{fill:"currentColor",d:"M11.75 8.5a2.501 2.501 0 0 1 1.594 4.426 4.76 4.76 0 0 1 1.969 1.332.75.75 0 0 1-1.126.993 3.24 3.24 0 0 0-2.437-1.1c-.97 0-1.84.424-2.437 1.1a.75.75 0 0 1-1.126-.993 4.76 4.76 0 0 1 1.968-1.332A2.5 2.5 0 0 1 11.75 8.5m0 1.501a1 1 0 1 0 0 2 1 1 0 0 0 0-2"})]})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CatalogUserHomeIcon";let l=s},214056:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{Q:()=>o,d:()=>s});var n=r(876146),i=r(596359);let e=(0,i.G)("databricks.fe.editor.enableMonaco0551",!1)?null:(await (()=>{let e=()=>Promise.resolve().then(r.bind(r,876146));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(876146,"@databricks/monaco-0-51/monaco","eager",e);return e()})()).monacoApi;function o(){return e??n.monacoApi}function s(e){}a()}catch(e){a(e)}},1)},214353:(e,t,r)=>{"use strict";r.d(t,{X:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enableWidgetLayoutTheme",!1)}},215911:(e,t,r)=>{"use strict";r.d(t,{BC:()=>o,Bp:()=>s,gU:()=>i});var a=r(441535),n=r(686560);function i(){let e=(0,a.W)("uc_secrets",!1);return(0,a.W)("databricks.fe.discovery.enableUCSecrets",!1)&&e}function o(){let e=(0,a.W)("uc_secrets",!1);return(0,a.W)("databricks.fe.discovery.enableUCSecrets",!1)&&e}function s(){let e=(0,n.d)("cloud","AWS");return o()&&(0,a.W)("databricks.fe.discovery.enableUCSecretsExternalAws",!1)&&"AWS"===e}},216979:(e,t,r)=>{"use strict";r.d(t,{T:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.visualizations.disableTextWidgetDataRef",!1)}},218305:(e,t,r)=>{"use strict";r.d(t,{U:()=>n,z:()=>i});var a=r(692738);let n=(0,a.createContext)({recordEvent:e=>{}}),i=()=>(0,a.useContext)(n)},221884:(e,t,r)=>{"use strict";r.d(t,{d$:()=>g,m_:()=>h});var a=r(610435),n=r(692738),i=r(160603),o=r(441535),s=r(22191),l=r(614127),u=r(412836),c=r(767399),d=r(518726);let f=n.createContext({refetchAll:()=>{},setFavoriteTables:()=>{}}),p=()=>(0,l.j)("metastore-client",s.Es.DataExplorer,{defaultOptions:{queries:{refetchOnWindowFocus:!1,staleTime:3e5,retry:u.CH.defaultOptions.queries.retry}}}),m=(0,d.T)(()=>p());function g({children:e,client:t}){let[r]=(0,n.useState)(()=>t??(0,o.W)("databricks.fe.infra.enableSingletonQueryClient",!1)?m.getActiveValue():p()),s=(0,n.useCallback)(()=>{r.invalidateQueries()},[r]),l=(0,n.useCallback)(e=>{r.setQueryData(c.S,e)},[r]),h=(0,n.useMemo)(()=>({refetchAll:s,setFavoriteTables:l}),[s,l]);return(0,a.Y)(f.Provider,{value:h,children:t||!(0,o.W)("databricks.fe.infra.enableSingletonQueryClient",!1)?(0,a.Y)(i.QueryClientProvider,{client:r,children:(0,a.Y)(u.q$,{children:e})}):(0,a.Y)(d.Q,{provider:i.QueryClientProvider,clientAccessor:m,children:(0,a.Y)(u.q$,{children:e})})})}function h(){return(0,n.useContext)(f)}},226139:(e,t,r)=>{"use strict";r.d(t,{N:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enableKeepQueryAliveInViewportKillSwitch",!1)}},227583:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.FD)("g",{fill:"currentColor",fillRule:"evenodd",clipPath:"url(#VisibleIcon_svg__a)",clipRule:"evenodd",children:[(0,a.Y)("path",{d:"M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6M6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"}),(0,a.Y)("path",{d:"M8 2A8.39 8.39 0 0 0 .028 7.777a.75.75 0 0 0 0 .466 8.389 8.389 0 0 0 15.944 0 .75.75 0 0 0 0-.466A8.39 8.39 0 0 0 8 2m0 10.52a6.89 6.89 0 0 1-6.465-4.51 6.888 6.888 0 0 1 12.93 0A6.89 6.89 0 0 1 8 12.52"})]}),(0,a.Y)("defs",{children:(0,a.Y)("clipPath",{children:(0,a.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="VisibleIcon";let l=s},228061:(e,t,r)=>{"use strict";r.d(t,{Be:()=>o,ib:()=>u,z3:()=>l});var a=r(610435);r(692738);var n=r(342411),i=r(947170);function o(e){try{return u(e)}catch(t){let e=(0,a.Y)(n.sA,{id:"coHlse",defaultMessage:"ID in URL path is invalid."});return(0,i.su)(e,!1),-1}}let s=/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;function l(e){return s.test(e)}function u(e){let t=parseInt(e,10);if(isNaN(t)||String(t)!==e)throw Error("Invalid ID");return t}},229069:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{o:()=>i});var n=r(954879);function i(){let e=(0,n.I)(e=>e.isDabsProject),t=(0,n.I)(e=>e.isRootBundleDataLoading),r=(0,n.I)(e=>e.rootBundleDataReadError),a=(0,n.I)(e=>e.configError),i=(0,n.I)(e=>e.reloadTargets),o=(0,n.I)(e=>e.reloadBundleData),s=r||a;if(s&&e&&!t)return{error:s,reload:()=>{r?o(!1):i()}};return{error:null,reload:()=>{}}}a()}catch(e){a(e)}})},229335:(e,t,r)=>{"use strict";r.d(t,{D:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enableDenserGridLayout",!1)}},232284:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("path",{fill:"currentColor",d:"M8 1c.664 0 1.282.2 1.797.542l-.014.072-.062.357-.357.062c-.402.07-.765.245-1.06.493a1.75 1.75 0 1 0 0 3.447c.295.25.658.424 1.06.494l.357.062.062.357.014.072A3.25 3.25 0 1 1 8 1"}),(0,a.Y)("path",{fill:"currentColor",d:"M9.59 4.983A.75.75 0 0 1 9.62 3.51l.877-.152a.75.75 0 0 0 .61-.61l.153-.878a.75.75 0 0 1 1.478 0l.152.877a.75.75 0 0 0 .61.61l.878.153a.75.75 0 0 1 0 1.478l-.877.152a.75.75 0 0 0-.61.61l-.153.878a.75.75 0 0 1-1.478 0l-.152-.877a.75.75 0 0 0-.61-.61l-.878-.153z"}),(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.164 12.287A8.74 8.74 0 0 1 8 9a8.74 8.74 0 0 1 6.836 3.287.75.75 0 0 1 .164.469v1.494a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75v-1.494a.75.75 0 0 1 .164-.469m1.336.74v.473h11v-.474A7.23 7.23 0 0 0 8 10.5c-2.2 0-4.17.978-5.5 2.526",clipRule:"evenodd"})]})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="UserSparkleIcon";let l=s},233869:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{U:()=>S});var n=r(610435);r(692738);var i=r(497895),o=r(339518),s=r(342411),l=r(719502),u=r(689951),c=r(897150),d=r(636058),f=r(565513),p=r(505566),m=r(406890),g=r(881183),h=r(252150),b=r(152174),y=r(270597),v=r(954879),E=r(229069),I=r(41639),T=e([I,g,E,b,d,m,u,y]);[I,g,E,b,d,m,u,y]=T.then?(await T)():T;let w=()=>{let{theme:e}=(0,i.wn)(),t=(0,v.I)(e=>e.projectRootFolderNode);(0,I.M)(),(0,h.p)();let{error:r}=(0,g.O)(),{error:a}=(0,E.o)();if(r)return(0,n.Y)(o.F,{css:{margin:e.spacing.lg},"data-testid":"project-landing-page-error-alert",componentId:"dabs-authoring.landing-page.error-alert",closable:!1,message:(0,n.Y)(s.sA,{id:"Rnp/9t",defaultMessage:"Failed to load bundle. Request failed with status code {statusCode}",values:{statusCode:r.response?.status}}),type:"error"});if(!t)return null;return(0,n.FD)("div",{"data-testid":"project-landing-page",css:{display:"flex",overflow:"hidden",flexDirection:"column",height:"100%"},children:[(0,n.Y)(b.B,{error:a}),(0,n.FD)("div",{css:{position:"relative",height:"100%",display:"grid",minHeight:0,gridTemplateColumns:"auto 1fr",gridTemplateRows:"1fr auto",gridTemplateAreas:`
          "left   main"
          "left   bottom"
          `},children:[(0,n.Y)("div",{css:{gridArea:"left",overflowY:"auto",maxHeight:"100%",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},children:(0,n.Y)(d.p,{renderWithCustomContainer:void 0})}),(0,n.Y)("div",{css:{position:"relative",gridArea:"main",overflowY:"auto",height:"100%"},children:(0,n.Y)(m.X,{projectConfigError:a})}),(0,n.Y)("div",{"data-testid":"bottom-area",css:{gridArea:"bottom"},children:(0,n.Y)(l.km,{children:(0,n.Y)(u.j,{tabData:[y.l]})})})]})]})},S=()=>(0,n.Y)(p.p,{children:(0,n.Y)(c.fn.Provider,{value:(0,c.xw)((0,c.Cj)()),children:(0,n.Y)(f.lG,{children:(0,n.Y)(w,{})})})});a()}catch(e){a(e)}})},235419:(e,t,r)=>{"use strict";r.d(t,{T9:()=>d,h3:()=>c,n4:()=>f});var a=r(610435),n=r(621058),i=r.n(n),o=r(342411),s=r(441535),l=r(13451),u=r(686560);let c=(0,a.Y)(o.sA,{id:"4/mwdU",defaultMessage:"Tokens are disabled for your organization or you do not have permissions to use them. Please contact your administrator for more information."}),d=(0,a.Y)(o.sA,{id:"ikgjOf",defaultMessage:"Tokens are disabled for your organization. Please contact your administrator if you want them to be enabled."});class f{static tokensEnabled(){return(0,s.W)("databricks.webapp.enableTokens",!0)&&(0,l.e)("enableTokensConfig",!0)}static canUseTokens(){if(f.workspaceApprovedForTokenManagement())return(0,u.d)("userCanUseTokens_new",!1);return!0}static workspaceApprovedForTokenManagement(){return(0,s.W)("databricks.webapp.tierFlags.enableTokenManagementForTier",!1)&&(0,u.d)("dbTokenAclsAreInitialized",!1)}static tokensFeatureFlag(){return(0,s.W)("databricks.webapp.enableTokens",!0)}static toggleSetting(e,t,r){window.recordEvent("workspaceStateToggle",{personalAccessTokenState:e}),e?i().ajax({type:"POST",url:"/token/disable",success:e=>t(e),error:()=>r()}):i().ajax({type:"POST",url:"/token/enable",success:e=>t(e),error:()=>r()})}static personalAccessTokenDisabledForAccount(){return(0,s.W)("dff-safe.disable-personal-access-token-for-accounts",!1)}}},239362:(e,t,r)=>{"use strict";r.d(t,{Bv:()=>p,L1:()=>d,Lw:()=>l,Wg:()=>u,qe:()=>f,qk:()=>m,yu:()=>c});var a=r(141078),n=r(831358),i=r(691515),o=r(543963);let s=(0,a.J1)`
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
`,l=(0,a.J1)`
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
`,u=(0,a.J1)`
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
`,c=(0,a.J1)`
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
  ${n.j}
  ${n.E}
`,d=(0,a.J1)`
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
`,f=(0,a.J1)`
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
`,p=(0,a.J1)`
  fragment TaskGitSourceSnapshotFragment on JobsRunTask {
    gitSource {
      gitSnapshot {
        usedCommit
      }
    }
  }
`,m=(0,a.J1)`
  fragment RunJobParameter on JobsRunJobLevelParameters {
    name
    default
    value
  }
`},239464:(e,t,r)=>{"use strict";r.d(t,{r:()=>o});var a=r(377063),n=r.n(a),i=r(342411);function o(e){let t=i.Sd.createIntlWithLocale(),r=e?"_":":";return t.formatMessage({id:"Xf8720",defaultMessage:"New Query {dateString}"},{dateString:n()().format(`YYYY-MM-DD HH${r}mm${r}ss`)})}},246120:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{TR:()=>A,pW:()=>_});var n=r(610435),i=r(359419),o=r.n(i),s=r(692738),l=r(497895),u=r(833584),c=r(441535),d=r(899893),f=r(789003),p=r(117720),m=r(158493),g=r(918748),h=r(278228),b=r(572939),y=r(944389),v=r(739049),E=r(49106),I=r(897860),T=r(431880),w=r(775238),S=r(868526),k=e([u,b,f,p]);function A({command:e,isMarkdown:t,isResultHidden:r,isStatic:a}){let n=(0,h.RH)(e,()=>C(e)),i=(0,T.RA)(([e])=>C(e),[e]),o=null!==i?i:n,s=(0,b.D$)();if(!o||"statements"===o&&!s||t||a||r)return null;return o}function _({isMarkdown:e,commandRef:t,isStatic:r=!1,jobsView:a}){let{command:i,isResultHidden:o}=(0,f.F)(),{theme:s}=(0,l.wn)(),g=A({command:i,isMarkdown:e,isResultHidden:o,isStatic:r}),h=(0,u.le)(),{showOptimizeButton:y}=(0,m.w)();if(!g)return null;let v=("sql"===i.getLanguage()||"python"===i.getLanguage())&&y&&"statements"===g,E=(0,S.q4)()?(0,n.Y)("div",{css:{minHeight:28},children:(0,n.Y)(b.Jw,{command:i,sparkPerformanceStyle:{paddingTop:0},jobsView:a})}):(0,n.Y)(b.Jw,{command:i,sparkPerformanceStyle:{paddingTop:0},jobsView:a});if(!(0,c.W)("databricks.fe.eda.shouldHideSparkJobsInJobsView",!1)&&a)if("statements"===g)return E;else return null;return"statements"===g?E:(0,n.FD)("div",{css:{display:"flex",justifyContent:"space-between",paddingInline:s.spacing.sm,paddingBottom:s.spacing.xs},children:[(0,n.Y)(R,{command:i}),v&&(0,n.Y)("div",{css:{marginLeft:"auto"},children:(0,n.Y)(d.m,{onClick:()=>h({})})}),(0,n.Y)(p.G0,{})]})}function C(e){let t=e.get("stages"),r=e.get("latestRunInfo");if(r?.runnableIdOpt||r?.statementIdsOpt)return"statements";if(!o()(t))return"jobs";return null}function R({command:e}){var t;let r=(t=e.get("guid"),(0,I.cl)(t).filter(e=>void 0!==e&&!v.RZ.isTabbedSubCommand({subtype:e?.get("subtype")}))),[a,i]=(0,s.useState)(!0),[o,l]=(0,s.useState)(()=>!y.A.clusterAclsEnabled()),{stages:u=[],state:c="",clusterId:d="",sparkCtxId:f=""}=(0,w.lR)(e,["stages","state","clusterId","sparkCtxId"]);return!function({command:e,subCommands:t}){return!!(0,E.y)({...{stages:e.get("stages"),state:e.get("state"),clusterId:e.get("clusterId"),sparkCtxId:e.get("sparkCtxId")},hasRunSubCommands:v.RZ.hasRunSubCommands(t),collapsed:!1})}({command:e,subCommands:r})?(0,n.Y)(p.G0,{}):(0,n.Y)(g.p,{isCollapsed:a,setIsCollapsed:i,userCanAttachToCluster:o,setUserCanAttachToCluster:l,stages:u,state:c,clusterId:d,sparkCtxId:f})}[u,b,f,p]=k.then?(await k)():k,a()}catch(e){a(e)}})},250213:(e,t,r)=>{"use strict";r.d(t,{LD:()=>o,Ll:()=>s,qk:()=>l,sG:()=>u});let a=".designer",n={SQL:`${a}.sql`,PYTHON_SOURCE:`${a}.py`,PYTHON_JUPYTER:`${a}.ipynb`},i=Object.values(n);function o(e){if(!e)return!1;return e.endsWith(n.SQL)||e.endsWith(n.PYTHON_SOURCE)||e.endsWith(n.PYTHON_JUPYTER)}let s=()=>n.PYTHON_JUPYTER,l=e=>{for(let t of i)if(e.endsWith(t))return e.slice(0,-t.length);return e},u=(e,t)=>{let r=i.find(e=>t.endsWith(e));if(r&&!e.endsWith(r))return e+r;return e}},253061:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("path",{fill:"currentColor",d:"M8 3.75h1c.69 0 1.25.56 1.25 1.25v6c0 .69-.56 1.25-1.25 1.25H8v1.5h1c.788 0 1.499-.331 2-.863a2.74 2.74 0 0 0 2 .863h1v-1.5h-1c-.69 0-1.25-.56-1.25-1.25V5c0-.69.56-1.25 1.25-1.25h1v-1.5h-1c-.788 0-1.499.331-2 .863a2.74 2.74 0 0 0-2-.863H8z"}),(0,a.Y)("path",{fill:"currentColor",d:"M5.936 8.003 3 5.058 4.062 4l3.993 4.004-3.993 4.005L3 10.948z"})]})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CursorTypeIcon";let l=s},255791:(e,t,r)=>{"use strict";r.d(t,{X:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.querySolutionV2Enabled",!1)}},257476:(e,t,r)=>{"use strict";r.d(t,{M:()=>c});var a=r(610435);r(692738);var n=r(497895),i=r(81659),o=r(810152),s=r(342411),l=r(205048);let u=(0,s.zR)({id:"7M1pmp",defaultMessage:"Loading..."});function c({description:e}){let{theme:t}=(0,n.wn)();return(0,a.FD)("div",{"data-testid":"PageBlockingSkeleton",css:{margin:t.spacing.lg},children:[(0,a.Y)(l.R,{loading:!0,description:e}),(0,a.Y)(i.o,{label:(0,a.Y)(s.sA,{...u}),style:{width:289}}),[...[,,,].keys()].map(e=>(0,a.Y)(o.I,{label:(0,a.Y)(s.sA,{...u}),seed:`s-${e}`},e))]})}},258182:(e,t,r)=>{"use strict";r.d(t,{Close:()=>A,Description:()=>k,Provider:()=>_,Root:()=>w,Title:()=>S,Viewport:()=>C});var a=r(610435),n=r(956935),i=r(593932),o=r(692738),s=r(79128),l=r(224098),u=r(429608),c=r(497895),d=r(658345),f=r(40894),p=r(705639),m=r(639712),g=r(53333),h=r(123252),b=r(661748),y=r(99206);let v=e=>e.preventDefault(),E=(0,n.i7)({from:{opacity:1},to:{opacity:0}}),I=(0,n.i7)({from:{transform:"translateX(calc(100% + 12px))"},to:{transform:"translateX(0)"}}),T=(0,n.i7)({from:{transform:"translateX(var(--radix-toast-swipe-end-x))"},to:{transform:"translateX(calc(100% + 12px))"}}),w=(0,o.forwardRef)(function({children:e,severity:t="info",componentId:r,analyticsEvents:s=[l.s7.OnView],...u},d){let{theme:w,classNamePrefix:S}=(0,c.wn)(),k=(0,o.useMemo)(()=>s,[s]),A=(0,l.ei)({componentType:l.v_.Notification,componentId:r,componentSubType:l.Ie[t],analyticsEvents:k,shouldStartInteraction:!1}),{elementRef:_}=(0,g.z)({onView:A.onView});return(0,a.Y)(i.bL,{ref:d,role:"listitem",css:(0,n.AH)({"&&":{position:"relative",display:"grid",background:w.colors.backgroundPrimary,padding:12,columnGap:4,boxShadow:w.shadows.lg,borderRadius:(0,y.S)(p.c.POPOVER_BORDER_RADIUS,w.borders.borderRadiusSm),lineHeight:"20px",borderColor:`1px solid ${w.colors.border}`,gridTemplateRows:"[header] auto [content] auto",gridTemplateColumns:"[icon] auto [content] 1fr [close] auto",...(0,m.WO)(w)},[`.${S}-notification-severity-icon`]:{gridRow:"header / content",gridColumn:"icon / icon",display:"inline-flex",alignItems:"center"},[`.${S}-btn`]:{display:"inline-flex",alignItems:"center",justifyContent:"center"},[`.${S}-notification-info-icon`]:{color:w.colors.textSecondary},[`.${S}-notification-success-icon`]:{color:w.colors.textValidationSuccess},[`.${S}-notification-warning-icon`]:{color:w.colors.textValidationWarning},[`.${S}-notification-error-icon`]:{color:w.colors.textValidationDanger},'&&[data-state="open"]':{animation:`${I} 300ms cubic-bezier(0.16, 1, 0.3, 1)`},'&[data-state="closed"]':{animation:`${E} 100ms ease-in`},'&[data-swipe="move"]':{transform:"translateX(var(--radix-toast-swipe-move-x))"},'&[data-swipe="cancel"]':{transform:"translateX(0)",transition:"transform 200ms ease-out"},'&[data-swipe="end"]':{animation:`${T} 100ms ease-out`}}),...u,...(0,h.VG)(),...(0,b.W)("databricks.fe.designsystem.notification.disableSwipeToClose",!1)?{onSwipeMove:v,onSwipeEnd:v}:{},children:(0,a.FD)("span",{role:"status","aria-live":"polite","aria-atomic":"true",style:{display:"contents"},children:[(0,a.Y)(f.z,{className:`${S}-notification-severity-icon ${S}-notification-${t}-icon`,severity:t,ref:_}),e]})})}),S=(0,o.forwardRef)(function({children:e,...t},r){let{theme:o}=(0,c.wn)();return(0,a.Y)(i.hE,{ref:r,css:(0,n.AH)({fontWeight:o.typography.typographyBoldFontWeight,color:o.colors.textPrimary,gridRow:"header / header",gridColumn:"content / content",userSelect:"text"}),...t,children:e})}),k=(0,o.forwardRef)(function({children:e,...t},r){let{theme:o}=(0,c.wn)();return(0,a.Y)(i.VY,{ref:r,css:(0,n.AH)({marginTop:4,color:o.colors.textPrimary,gridRow:"content / content",gridColumn:"content / content",userSelect:"text",wordBreak:"break-word"}),...t,children:e})}),A=(0,o.forwardRef)(function(e,t){let{theme:r}=(0,c.wn)(),{closeLabel:o,componentId:l,analyticsEvents:u,...f}=e;return(0,a.Y)("div",{style:{gridColumn:"close / close",gridRow:"header / content",width:20},children:(0,a.Y)(i.bm,{ref:t,css:(0,n.AH)({color:r.colors.textSecondary,position:"absolute",right:6,top:6}),...f,asChild:!0,children:(0,a.Y)(s.$n,{componentId:l||"codegen_design-system_src_design-system_notification_notification.tsx_224",analyticsEvents:u,icon:(0,a.Y)(d.A,{}),"aria-label":o??f["aria-label"]??"Close notification"})})})}),_=({children:e,...t})=>(0,a.Y)(i.Kq,{...t,children:e}),C=e=>{let{theme:t}=(0,c.wn)();return(0,a.Y)(i.LM,{className:u.Nb,style:{position:"fixed",top:0,right:0,display:"flex",flexDirection:"column",padding:12,gap:12,width:440,listStyle:"none",zIndex:t.options.zIndexBase+100,outline:"none",maxWidth:`calc(100% - ${t.spacing.lg}px)`},...e})}},258214:(e,t,r)=>{"use strict";r.d(t,{Aq:()=>I,I5:()=>d,Jl:()=>c,Ke:()=>g,Pf:()=>n,SY:()=>b,f5:()=>l,fk:()=>m,hZ:()=>i,he:()=>s,qe:()=>a,re:()=>v,um:()=>E,vV:()=>p,wO:()=>h,xG:()=>u,y1:()=>f,yH:()=>o,ym:()=>y});let a=2,n=4,i=8,o=10,s=12,l=16,u=24,c=394,d=`0 ${l}px`,f=115,p=394,m=394,g=380,h=560,b=13057==r.j?h:null,y=609,v=36,E=240,I="force-light-mode"},258844:(e,t,r)=>{"use strict";r.d(t,{C:()=>o,h:()=>i});var a=r(497895),n=r(418230);let i=()=>{let{theme:e}=(0,a.wn)(),t=(0,n.U)(`(max-width: ${e.responsive.breakpoints.sm}px)`);return{isSmallScreen:t,isShortScreen:(0,n.U)(`(max-height: ${e.responsive.breakpoints.sm}px)`),isMediumScreen:(0,n.U)(`(max-width: ${e.responsive.breakpoints.lg}px)`)}},o=()=>{let e=window.matchMedia("(max-width: 576px)").matches;return{isSmallScreen:e,isShortScreen:window.matchMedia("(max-height: 576px)").matches,isMediumScreen:window.matchMedia("(max-width: 992px)").matches}}},264094:(e,t,r)=>{"use strict";r.d(t,{T:()=>n,g:()=>i});var a=r(692738);let n=a.createContext(!1);function i(){return(0,a.useContext)(n)}},268131:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{B:()=>b,s:()=>v});var n=r(610435);r(692738);var i=r(497895),o=r(79570),s=r(445929),l=r(673163),u=r(810152),c=r(342411),d=r(915650),f=r(954879),p=r(229069),m=e([p]);p=(m.then?(await m)():m)[0];let g={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:"1 1 0",maxWidth:"fit-content"},h={maxWidth:272,flexShrink:1,minWidth:0},b=({errorMessage:e})=>{let{theme:t}=(0,i.wn)();return(0,n.Y)(o.m,{content:e,componentId:"dabs-authoring.header-button.tooltip",children:(0,n.Y)(d.Y,{disabled:!0,startIcon:(0,n.Y)(s.A,{css:{"& > svg":{height:"12px !important",width:"12px !important"}}}),children:(0,n.Y)("span",{css:{marginLeft:t.spacing.xs},children:(0,n.Y)(c.sA,{id:"CGrkz7",defaultMessage:"ERROR"})})})})},y=({project:e,target:t})=>{if(t)return(0,n.Y)(c.sA,{id:"EvWWrj",defaultMessage:'Deployed as part of "{project}" bundle to the "{target}" target',values:{project:e,target:t}});return(0,n.Y)(c.sA,{id:"ZWpJMp",defaultMessage:'Deployed as part of "{project}" bundle',values:{project:e}})},v=({onClick:e,disabled:t=!1})=>{let r=(0,f.I)(e=>e.isDabsProject),a=(0,f.I)(e=>e.projectName()),i=(0,f.I)(e=>e.target),{error:s}=(0,p.o)();if(!r)return null;if(s)return(0,n.Y)(b,{errorMessage:s.message});return(0,n.Y)(o.m,{content:(0,n.Y)(y,{project:a,target:i}),componentId:"dabs-authoring.header-button.tooltip",children:(0,n.Y)(d.Y,{css:h,disabled:t,startIcon:(0,n.Y)(l.A,{css:{"& > svg":{height:"16px !important",width:"16px !important"}}}),onClick:e,"aria-label":`${a}${i?` (${i})`:""}`,children:a?(0,n.FD)(n.FK,{children:[(0,n.Y)("span",{css:g,children:a}),i&&(0,n.FD)(n.FK,{children:["\xa0(",(0,n.Y)("span",{css:g,children:i}),")"]})]}):(0,n.Y)(u.I,{style:{width:80}})})})};a()}catch(e){a(e)}})},268398:(e,t,r)=>{"use strict";r.d(t,{_:()=>l,w:()=>s});var a=r(610435),n=r(692738),i=r(569546);let o=(0,n.createContext)(null),s=()=>{let e=(0,n.useContext)(o);if(!e)throw Error("useListboxContext must be used within a ListboxProvider");return e},l=({children:e,className:t,onSelect:r,initialSelectedValue:s,listBoxDivRef:l})=>{let[u,c]=(0,n.useState)(s),[d,f]=(0,n.useState)(),p=(0,n.useRef)();p.current||(p.current=`listbox-${(0,i.B)()}`);let m=p.current,g=(0,n.useCallback)((e,t)=>{let a=t.findIndex(e=>e.value===d),n=a;switch(e.key){case"ArrowDown":e.preventDefault(),n=a<t.length-1?a+1:0;break;case"ArrowUp":e.preventDefault(),n=a>0?a-1:t.length-1;break;case"Home":e.preventDefault(),n=0;break;case"End":e.preventDefault(),n=t.length-1;break;case"Enter":case" ":e.preventDefault(),void 0!==d&&(r?.(d),t[a].href?window.open(t[a].href,"_blank"):c(d));break;default:return}if(n!==a&&l?.current){var i;let e;f(t[n].value);let r=(i=l?.current,(e=i?.querySelectorAll('[role="option"], [role="link"]'))?Array.from(e):void 0);if(r&&r[n]){let e=r[n];e.scrollIntoView?.({block:"center"});let t=l.current.querySelector('input[type="text"], input[type="search"]'),a=l.current.querySelector('[role="listbox"]'),i=t||a;i&&e.id&&i.setAttribute("aria-activedescendant",e.id)}}},[d,r,l]),h=(0,n.useMemo)(()=>({selectedValue:u,setSelectedValue:c,highlightedValue:d,setHighlightedValue:f,listboxId:m,handleKeyNavigation:g}),[u,d,m,g]);return(0,a.Y)(o.Provider,{value:h,children:(0,a.Y)("div",{className:t,children:e})})}},270343:(e,t,r)=>{"use strict";r.d(t,{c:()=>n});var a=r(200356);function n(){return new Set([a.xS5.email,a.xS5.slack,a.xS5.microsoft_teams])}},270493:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("g",{clipPath:"url(#CursorIcon_svg__a)",children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.22 1.22a.75.75 0 0 1 .802-.169l13.5 5.25a.75.75 0 0 1-.043 1.413L9.597 9.597l-1.883 5.882a.75.75 0 0 1-1.413.043l-5.25-13.5a.75.75 0 0 1 .169-.802m1.847 1.847 3.864 9.937 1.355-4.233a.75.75 0 0 1 .485-.485l4.233-1.355z",clipRule:"evenodd"})}),(0,a.Y)("defs",{children:(0,a.Y)("clipPath",{children:(0,a.Y)("path",{fill:"#fff",d:"M16 0H0v16h16z"})})})]})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CursorIcon";let l=s},272285:(e,t,r)=>{"use strict";r.d(t,{$g:()=>h,DZ:()=>v,QJ:()=>b,Th:()=>y,Ul:()=>g});var a=r(141078);let n=(0,a.J1)`
  fragment DiscoverSearchResultTitleData on SearchmidtierSearchUnifiedResult {
    name
    updatedAt
  }
`,i=(0,a.J1)`
  fragment DiscoverSearchResultOwnerData on SearchmidtierSearchUnifiedResult {
    owner {
      id
      fullname
      email
    }
    ownerId
  }
`,o=(0,a.J1)`
  fragment DiscoverSearchResultDescriptionData on SearchmidtierSearchUnifiedResult {
    description
    ucEntityMetadata {
      comments
    }
    dataRoom {
      description
    }
  }
`,s=(0,a.J1)`
  fragment DiscoverSearchResultIconData on SearchmidtierSearchUnifiedResult {
    resultType
    browseOnly
    ucEntityMetadata {
      securableKind
    }
  }
`,l=(0,a.J1)`
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
`,u=(0,a.J1)`
  fragment DiscoverSearchResultTableLocationData on SearchmidtierSearchUnifiedResult {
    ucEntityMetadata {
      catalogName
      schemaName
    }
  }
`,c=(0,a.J1)`
  fragment DiscoverSearchResultWorkspaceFullPathData on SearchmidtierSearchUnifiedResult {
    treeNode {
      fullPath
      id
      parent {
        id
      }
    }
  }
`,d=(0,a.J1)`
  fragment DiscoverSearchResultUrlData on SearchmidtierSearchUnifiedResult {
    id
    resultType
    name
    ucEntityMetadata {
      catalogName
      schemaName
    }
  }
`,f=(0,a.J1)`
  fragment DiscoverSearchResultThumbnailData on SearchmidtierSearchUnifiedResult {
    id
    name
    resultType
    thumbnailUrl(uiMode: $uiMode)
  }
`,p=(0,a.J1)`
  fragment DiscoverSearchResultTagsData on SearchmidtierSearchUnifiedResult {
    tags {
      name
      value
    }
  }
`,m=(0,a.J1)`
  fragment DiscoverSearchResultFavoriteStatusData on SearchmidtierSearchUnifiedResult {
    userActivityInfo {
      assetType
      assetId
      isFavorite
    }
  }
`,g=(0,a.J1)`
  fragment DiscoverSearchResultAllAssetData on SearchmidtierSearchUnifiedResult {
    id
    ...DiscoverSearchResultTitleData
    ...DiscoverSearchResultDescriptionData
    ...DiscoverSearchResultTagsData
    ...DiscoverSearchResultIconData
    ...DiscoverSearchResultFavoriteStatusData
    ...DiscoverSearchResultUrlData
  }
  ${n}
  ${o}
  ${p}
  ${s}
  ${m}
  ${d}
`,h=(0,a.J1)`
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
  ${n}
  ${i}
  ${s}
  ${o}
  ${l}
  ${u}
  ${c}
  ${d}
  ${f}
  ${p}
  ${m}
`,b=(0,a.J1)`
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
  ${n}
  ${i}
  ${s}
  ${o}
  ${l}
  ${u}
  ${d}
  ${p}
  ${m}
`,y=(0,a.J1)`
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
`,v=(0,a.J1)`
  fragment DiscoverRecommendationAssetWithThumbnailData on RecommendationAssetRecommendation {
    ...DiscoverRecommendationAssetData
    asset {
      thumbnailUrl(uiMode: $uiMode)
    }
  }
  ${y}
`},274254:(e,t,r)=>{"use strict";r.d(t,{p:()=>u});var a=r(348844),n=r(253171),i=r(178808),o=r(779862),s=r(329881),l=r(749850);function u(e){let t=(0,a.wk)(e),{options:r,columns:u,defaultNameMap:c,getSeriesOptionsForColumn:d,specType:f}=e;if((0,l.$V)(r))throw Error(l.jq);let{columnConfigurationMap:p,globalSeriesType:m,xAxis:g,hideXAxis:h,yAxis:b,hideYAxes:y,alignYAxesAtZero:v,seriesOptions:E,sortY:I,sortX:T,reverseX:w,keepNullOnX:S}=r,k=(0,a.OK)({x:p.x||void 0,columns:u,globalSeriesType:m,xAxis:g,hideXAxis:h,sortX:T,reverseX:w,keepNullOnX:S,defaultNameMap:c,specType:f}),A=!1===r.useAggregationsUi?{fn:"sum"}:void 0;return{y:function({sortedY:e,seriesOptions:t,yAxis:r=[],hideYAxes:a,alignYAxesAtZero:u,sortY:c,defaultTransform:d,globalSeriesType:f,getSeriesOptionsForColumn:p,specType:m}){let g={column:[],line:[]},h={0:!1,1:!1},b={column:new Set,line:new Set};for(let r=0;r<e.length;r++){let a=e[r],n=p(t||{},a),{yAxis:o=0,name:u}=n,c=n.type??(0,s.H)({globalSeriesType:f,zIndex:r});if("column"===c||"line"===c)g[c].push((0,i.V)({columnConfig:a,defaultTransform:d,...u?{displayName:u}:{},specType:m})),h[o]=!0,b[c].add(o);else throw Error((0,l.Sb)(c))}let{column:y,line:v}=g,E=+!b.column.has(0),I=(0,n.C)({hideAxis:a,title:r[E]?.title?.text??void 0}),T=+!!b.line.has(1),w=(0,n.C)({hideAxis:a,title:r[T]?.title?.text??void 0});if(h[0]&&h[1]&&E!==T){let e={fields:y,scale:(0,o.fl)({yAxis:r[E]}),...I?{axis:I}:{}},t={fields:v,scale:(0,o.fl)({yAxis:r[T]}),...w?{axis:w}:{}},a=0===E?{primary:e,secondary:t}:{primary:{...t,visual:"line"},secondary:{...e,visual:"bar"}};return void 0!==u&&(a.alignAxesAtZero=u),a}{let e=I||h[1]?{...I,...h[1]?{position:"secondary"}:{}}:void 0;return{primary:{fields:y},secondary:{fields:v},scale:(0,o.fl)({fn:r?.[E]?.type==="logarithmic"?{type:"log"}:void 0,yAxis:r?.[E]}),...e?{axis:e}:{}}}}({sortedY:(0,a.SB)(p.y,E,d),seriesOptions:E,yAxis:b,hideYAxes:y,alignYAxesAtZero:v,sortY:I,defaultTransform:A,globalSeriesType:m,getSeriesOptionsForColumn:d,specType:f}),...k?{x:k}:{},...t}}},274269:(e,t,r)=>{"use strict";r.d(t,{F:()=>n});var a=r(692738);function n(e=!1,t){let{onOpen:r,onClose:i}=t||{},[o,s]=(0,a.useState)(e),l=(0,a.useCallback)(()=>{s(e=>{if(!e)return r?.(),!0;return e})},[r]),u=(0,a.useCallback)(()=>{s(e=>{if(e)return i?.(),!1;return e})},[i]),c=(0,a.useCallback)(()=>{o?u():l()},[u,l,o]);return[o,{open:l,close:u,toggle:c}]}},275750:(e,t,r)=>{"use strict";r.d(t,{d:()=>o,u:()=>i});var a=r(610435),n=r(692738);let i=n.createContext({sections:[]}),o=({name:e,children:t})=>{let{sections:r}=(0,n.useContext)(i),o=(0,n.useMemo)(()=>[...r,e],[e,r]);return(0,a.Y)(i.Provider,{value:{sections:o},children:t})}},279942:(e,t,r)=>{"use strict";function a(e){return[".py",".sql"].includes(e.toLocaleLowerCase())}r.d(t,{k:()=>a})},280967:(e,t,r)=>{"use strict";r.d(t,{O:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.visualizations.enableSelectionsApplyMode",!1)}},285351:(e,t,r)=>{"use strict";r.d(t,{F:()=>f});var a=r(610435);r(692738);var n=r(497895),i=r(955210),o=r(12414),s=r(687828),l=r(79128),u=r(241393),c=r(342411),d=r(217985);let f=({title:e,actions:t,overflow:r={},titleSideAddons:f,actionSideAddons:p})=>{var m,g;let{formatMessage:h}=(0,c.tz)(),{theme:b}=(0,n.wn)();return(0,a.FD)("div",{css:{display:"flex",alignItems:"center",gap:b.spacing.sm+b.spacing.xs,padding:`${b.spacing.sm}px ${b.spacing.md}px`,borderBottom:"1px solid",borderColor:b.colors.border},children:[(0,a.Y)("div",{css:{fontSize:b.typography.fontSizeLg-2,gap:b.spacing.xs,margin:0,fontWeight:b.typography.typographyBoldFontWeight,display:"flex",alignItems:"center",minWidth:0},children:(m=e.map((t,r)=>{let n=r===e.length-1?"h2":"div",{node:i,text:o,disableOverflowHandling:s=!1,disableTooltip:l=!1}="string"==typeof t?{node:t,text:t}:"link"in t?{...t,node:(0,a.Y)(d.N,{componentId:"compact-header-title-segment-link",to:t.link,asTypographyLink:!0,children:t.text})}:t;return(0,a.Y)(n,{css:{margin:0,fontSize:"inherit","*":{fontSize:"inherit"},fontWeight:"inherit",lineHeight:"inherit",minWidth:0,flexShrink:Math.pow(o.length,3),...s?{}:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},title:l?"":o??"",children:i},`${r}-${o}`)}),g=e=>(0,a.Y)(i.A,{css:{color:b.colors.textSecondary}},`${e}-separator`),m.flatMap((e,t)=>t<m.length-1?[e,g(t)]:[e]))}),f,(0,a.Y)("div",{css:{flex:1}}),p,(0,a.FD)("div",{css:{display:"flex",alignItems:"center",gap:b.spacing.sm,"& > *:empty":{display:"none"}},children:[r.modals,r.isLoading&&(0,a.Y)(o.y,{}),r.actions&&(0,a.FD)(s.Root,{children:[(0,a.Y)(s.Trigger,{asChild:!0,children:(0,a.Y)(l.$n,{componentId:"compact-header-actions-overflow-button",icon:(0,a.Y)(u.A,{}),"aria-label":h({id:"HFG1dW",defaultMessage:"More actions"})})}),(0,a.FD)(s.Content,{children:[r.actions,(0,a.Y)(s.Arrow,{})]})]}),t]})]})}},285376:(e,t,r)=>{"use strict";if(r.d(t,{J:()=>n}),13057==r.j)var a=r(441535);let n=()=>(0,a.W)("databricks.fe.jaws.enableJobsMatrixViewLatestTasksOnly",!0)},287393:(e,t,r)=>{"use strict";r.d(t,{JB:()=>s,aZ:()=>u,fg:()=>l});var a=r(141078),n=r(831358),i=r(659789);let o=(0,a.J1)`
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

  ${n.j}
  ${n.E}
`,s=(0,a.J1)`
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
`,l=(0,a.J1)`
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
  ${n.j}
  ${n.E}
`,u=(0,a.J1)`
  fragment JobDescription on JobSettings {
    description
  }
`},287578:(e,t,r)=>{"use strict";r.d(t,{Jy:()=>o,QG:()=>d,b7:()=>l,pW:()=>u,wz:()=>s});var a,n,i=r(171989),o=((a={}).Argument="#b08b71",a.Catalog="#565189",a.Column="#2fae2f",a.Database="#517989",a.Files="#9e1414",a.IdentCteVar="#ca4f01",a.Keyword="#0074d2",a.Popular="#61bbff",a.User="#61bbff",a.UserGroup="#61bbff",a.Sample="#fea7a7",a.Snippet="#f2e76b",a.Table="#ffa139",a.Function="#acfbac",a),s=((n={}).All="All",n.Asterisk="Asterisk",n.ColRefKeyword="ColRefKeyword",n.Column="Column",n.CTE="CTE",n.Catalog="Catalog",n.Database="Database",n.User="User",n.UserGroup="UserGroup",n.Files="Files",n.Identifier="Identifier",n.Keyword="Keyword",n.Option="Option",n.Popular="Popular",n.PopularAggregate="PopularAggregate",n.PopularFilter="PopularFilter",n.PopularGroupBy="PopularGroupBy",n.DiscoveryJoin="JoinsDiscovery",n.FKJoin="JoinsFKs",n.FKJoinCondition="JoinsFKsCondition",n.PopularOrderBy="PopularOrderBy",n.PopularQuery="PopularQuery",n.PopularTable="PopularTable",n.Sample="Sample",n.Snippet="Snippet",n.Table="Table",n.Function="Function",n.FunctionDescription="FunctionDescription",n.FunctionArgument="FunctionArgument",n.Variable="Variable",n.VirtualColumn="VirtualColumn",n.Location="Location",n.StorageCredential="StorageCredential",n);let l={All:{categoryId:"All",color:"#90ceff",label:(0,i.A)("All")},Asterisk:{categoryId:"Asterisk",detailsComponent:"AsteriskPanel",color:"#0074d2",label:(0,i.A)("Asterisk"),weight:1e3},Catalog:{categoryId:"Catalog",color:"#565189",label:(0,i.A)("Catalogs"),weight:450},ColRefKeyword:{categoryId:"ColRefKeyword",color:"#0074d2",label:(0,i.A)("Keywords"),weight:100},Column:{categoryId:"Column",color:"#2fae2f",label:(0,i.A)("Columns"),weight:1e3},CTE:{categoryId:"CTE",color:"#ca4f01",label:(0,i.A)("CTEs"),weight:750},Database:{categoryId:"Database",color:"#517989",label:(0,i.A)("Databases"),weight:500},User:{categoryId:"User",color:"#61bbff",label:(0,i.A)("Users"),weight:900},UserGroup:{categoryId:"UserGroup",color:"#61bbff",label:(0,i.A)("User Groups"),weight:950},Files:{categoryId:"Files",color:"#9e1414",label:(0,i.A)("Files"),weight:300},Identifier:{categoryId:"Identifier",color:"#ca4f01",label:(0,i.A)("Identifiers"),weight:800},Keyword:{categoryId:"Keyword",color:"#0074d2",detailsComponent:"DocsDetailsPanel",label:(0,i.A)("Keywords"),weight:0},Option:{categoryId:"Option",color:"#acfbac",detailsComponent:"OptionDetailsPanel",label:(0,i.A)("Options"),weight:400},Popular:{categoryId:"Popular",color:"#61bbff",label:(0,i.A)("Popular"),popular:!0},PopularAggregate:{categoryId:"PopularAggregate",color:"#61bbff",detailsComponent:"PopularAggregateUdfPanel",label:(0,i.A)("Popular"),popular:!0,weight:1500},PopularFilter:{categoryId:"PopularFilter",color:"#61bbff",label:(0,i.A)("Popular"),detailsComponent:"PopularDetailsPanel",popular:!0,weight:1400},PopularGroupBy:{categoryId:"PopularGroupBy",color:"#61bbff",detailsComponent:"PopularDetailsPanel",label:(0,i.A)("Popular"),popular:!0,weight:1300},DiscoveryJoin:{categoryId:"JoinsDiscovery",color:"#61bbff",detailsComponent:"PopularDetailsPanel",label:(0,i.A)("Popular"),weight:1500},FKJoin:{categoryId:"JoinsFKs",color:"#61bbff",detailsComponent:"PopularDetailsPanel",label:(0,i.A)("Popular"),weight:1500},FKJoinCondition:{categoryId:"JoinsFKsCondition",color:"#61bbff",detailsComponent:"PopularDetailsPanel",label:(0,i.A)("Popular"),popular:!0,weight:1500},PopularOrderBy:{categoryId:"PopularOrderBy",color:"#61bbff",detailsComponent:"PopularDetailsPanel",label:(0,i.A)("Popular"),popular:!0,weight:1200},PopularQuery:{categoryId:"PopularQuery",color:"#61bbff",detailsComponent:"PopularDetailsPanel",label:(0,i.A)("Popular"),popular:!0,weight:1300},PopularTable:{categoryId:"PopularTable",color:"#ffa139",label:(0,i.A)("Tables"),popular:!0,weight:700},Sample:{categoryId:"Sample",color:"#fea7a7",label:(0,i.A)("Samples"),weight:900},Snippet:{categoryId:"Snippet",detailsComponent:"SnippetDetailsPanel",color:"#f2e76b",label:(0,i.A)("Snippet"),weight:-100},Table:{categoryId:"Table",color:"#ffa139",label:(0,i.A)("Tables"),weight:600},Function:{categoryId:"Function",detailsComponent:"FunctionDetailsPanel",color:"#acfbac",label:(0,i.A)("Functions"),weight:400},FunctionDescription:{categoryId:"FunctionDescription",detailsComponent:"FunctionDetailsPanel",color:"#acfbac",label:(0,i.A)("Functions"),weight:1e6},FunctionArgument:{categoryId:"FunctionArgument",color:"#b08b71",label:(0,i.A)("Functions"),weight:401},Variable:{categoryId:"Variable",color:"#ca4f01",label:(0,i.A)("Variables"),weight:50},VirtualColumn:{categoryId:"VirtualColumn",color:"#2fae2f",label:(0,i.A)("Columns"),weight:200},Location:{categoryId:"Location",color:"#ca4f01",detailsComponent:"ExternalLocationDetailsPanel",label:(0,i.A)("Locations"),weight:200},StorageCredential:{categoryId:"StorageCredential",color:"#9e1414",label:(0,i.A)("Credentials"),detailsComponent:"StorageCredentialDetailsPanel",weight:200}},u=e=>"JoinsDiscovery"===e.categoryId||"JoinsFKs"===e.categoryId,c=["Table","Column","Function","Snippet","Location","StorageCredential"],d=e=>{let t=new Set;e.forEach(e=>{e.popular?t.add(l.Popular):c.includes(e.category.categoryId)&&t.add(e.category)});let r=[...t];return r.sort((e,t)=>e.label.localeCompare(t.label)),r.unshift(l.All),r}},291589:(e,t,r)=>{"use strict";r.d(t,{j$:()=>o});var a=r(692738),n=r(772404),i=r(548073);function o({previewStatus:e}){let t=(0,i.Fl)("new-charts-preview-auto-removal"),r=(0,a.useCallback)(()=>{(0,i.rk)(t)},[t]),s=(0,a.useMemo)(()=>(function(e){let{lastSeenTime:t}=(0,i.di)(e);if(void 0===t)return(0,i.rk)(e),!1;return(0,n.s)(t,14)})(t),[t]);return{isAutoRemoved:"active"===e&&s,setLastUsageTime:r}}},292436:(e,t,r)=>{"use strict";r.d(t,{Y:()=>n});var a=r(441535);function n(){if((0,a.W)("excl_data_access",!1))return!0;return(0,a.W)("databricks.fe.wexp.enableRoleSwitcherInWorkspaceSelector",!1)}},292637:(e,t,r)=>{"use strict";r.d(t,{$f:()=>N.RI,Ay:()=>y.Ay,B2:()=>Y.B2,CU:()=>y.CU,DM:()=>y.DM,Di:()=>a.q,Ev:()=>D.E,Fj:()=>b.F,Iy:()=>o.Iy,Kk:()=>N.ji,LY:()=>C.L,NM:()=>y.NM,Oc:()=>l.Oc,QJ:()=>W.QJ,QQ:()=>W.QQ,SI:()=>F.SI,SN:()=>_.SN,SY:()=>L.SY,TJ:()=>P.TJ,VC:()=>h.VC,Vm:()=>c.Vm,Vo:()=>g.V,Vt:()=>w.Vt,Wr:()=>f.W,Zy:()=>S.Zy,_y:()=>P._y,dU:()=>k.dU,eV:()=>U.eV,eb:()=>A.e,et:()=>R.e,gO:()=>x.gO,gg:()=>L.gg,gk:()=>O.gk,gs:()=>P.gs,i1:()=>m.i1,ik:()=>E.i,j7:()=>$.j7,jM:()=>L.jM,l7:()=>B.l,n1:()=>i.n1,nA:()=>L.nA,nn:()=>M.Y8,oi:()=>F.oi,p7:()=>Y.p7,se:()=>d.se,tJ:()=>v.t,tL:()=>P.tL,tR:()=>T.t,u0:()=>s.u0,u9:()=>u.u9,uH:()=>n.u,uV:()=>h.uV,w8:()=>I.w,wC:()=>L.wC,wN:()=>p.w,zg:()=>o.zg});var a=r(142320),n=r(380566),i=r(530921),o=r(254312),s=r(40683),l=r(844652),u=r(476353),c=r(298807),d=r(714597),f=r(715646),p=r(953996),m=r(585802);r(116244);var g=r(540988),h=r(409666),b=r(371449),y=r(546186),v=r(547930),E=r(209604),I=r(603953),T=r(255847),w=r(118553),S=r(407677),k=r(891593),A=r(669497),_=r(945012),C=r(141383),R=r(472608),M=r(215930),N=r(387039),P=r(845921),D=r(157115),x=r(505113);r(371931);var L=r(912572),O=r(532427),F=r(831769),$=r(764671),Y=r(632212),U=r(941110),B=r(184037),W=r(296818)},294703:(e,t,r)=>{"use strict";r.d(t,{g:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enableApplyModeDeferSetSelfOriginal",!1)}},295423:(e,t,r)=>{"use strict";r.d(t,{f:()=>u});var a=r(692738),n=r(671244),i=r(653542),o=r(49586),s=r(209908);let l=50,u=({enableAccountGroups:e=!1,enableAccountServicePrincipals:t=!1,enableAccountUsers:r=!1,enableWorkspaceGroups:u=!0,enableWorkspaceServicePrincipals:c=!0,enableWorkspaceUsers:d=!0,filterText:f="",principalIdsForFiltering:p=[],principalUniqueNamesForFiltering:m=[],limit:g=l,useLite:h,skip:b=!1,isCache:y=!1}={})=>{let v=(0,s.VM)({ids:p,uniqueNames:m}),E=(0,s.L5)({ids:p,uniqueNames:m}),{subjects:I,isLoading:T,error:w,hasNextPage:S}=(0,o.zo)({source:"account",filter:f,filterPredicate:v,first:g,skip:!r||b,useLite:h,isCache:y}),{subjects:k,isLoading:A,error:_,hasNextPage:C}=(0,n.Bi)({source:"account",filter:f,filterPredicate:E,first:g,skip:!e||b,useLite:h,isCache:y}),{subjects:R,isLoading:M,error:N,hasNextPage:P}=(0,i.Q_)({source:"account",filter:f,filterPredicate:v,first:g,skip:!t||b,useLite:h,isCache:y}),{subjects:D,isLoading:x,error:L,hasNextPage:O}=(0,o.zo)({source:"workspace",filter:f,filterPredicate:v,first:g,skip:!d||b,useLite:h,isCache:y}),{subjects:F,isLoading:$,error:Y,hasNextPage:U}=(0,n.Bi)({source:"workspace",filter:f,filterPredicate:E,first:g,skip:!u||b,useLite:h,isCache:y}),{subjects:B,isLoading:W,error:V,hasNextPage:j}=(0,i.Q_)({source:"workspace",filter:f,filterPredicate:v,first:g,skip:!c||b,useLite:h,isCache:y}),z=(0,a.useMemo)(()=>{let t=[...F,...k];if(e&&u)return t.filter((e,t,r)=>t===r.findIndex(t=>t.id===e.id));return t},[k,e,u,F]),J=(0,a.useMemo)(()=>{let e=[...B,...R];if(t&&c)return e.filter((e,t,r)=>t===r.findIndex(t=>t.id===e.id));return e},[R,t,c,B]),q=(0,a.useMemo)(()=>{let e=[...D,...I];if(r&&d)return e.filter((e,t,r)=>t===r.findIndex(t=>t.id===e.id));return e},[I,r,d,D]),{subjects:G,hasNextPage:H}=(0,a.useMemo)(()=>(0,s.GF)(f,g,z,J,q),[f,g,z,J,q]),Q=(0,a.useMemo)(()=>({accountGroups:A,accountServicePrincipals:M,accountUsers:T,groups:$,servicePrincipals:W,users:x,some:A||M||T||$||W||x}),[A,M,T,$,W,x]),K=(0,a.useMemo)(()=>({accountGroups:_??null,accountServicePrincipals:N??null,accountUsers:w??null,groups:Y??null,servicePrincipals:V??null,users:L??null}),[_,N,w,Y,V,L]);return{allSubjectsMap:(0,a.useMemo)(()=>(0,s.ne)(z,J,q),[z,J,q]),errors:K,hasNextPage:!!(G.length===g&&(S||C||P||O||U||j)||H),isLoading:Q,subjects:G}}},296027:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M9.49.04a.75.75 0 0 1 .51.71V6h3.25a.75.75 0 0 1 .596 1.206l-6.5 8.5A.75.75 0 0 1 6 15.25V10H2.75a.75.75 0 0 1-.596-1.206l6.5-8.5A.75.75 0 0 1 9.491.04M4.269 8.5H6.75a.75.75 0 0 1 .75.75v3.785L11.732 7.5H9.25a.75.75 0 0 1-.75-.75V2.965z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="LightningIcon";let l=s},301171:(e,t,r)=>{"use strict";r.d(t,{v:()=>u});var a=r(610435);r(692738);var n=r(382908),i=r(342411),o=r(853762),s=r(771994),l=r(214060);let u={noMoreResultsPleaseNarrowSearch:(0,a.Y)(i.sA,{id:"EXxUmv",defaultMessage:"Not the results you expected? Try using different keywords, checking for typos, or adjusting filters."}),schemaFilterError:(0,a.Y)(i.sA,{id:"ioUsml",defaultMessage:"Error loading schemas"}),catalogFilterError:(0,a.Y)(i.sA,{id:"g9VKGo",defaultMessage:"Error loading catalogs"}),tagFilterError:(0,a.Y)(i.sA,{id:"BAVUZT",defaultMessage:"Error loading tags"}),typeForMoreUsers:e=>(0,a.Y)(i.sA,{id:"JAa9+n",defaultMessage:"The first {count} users are displayed. Search to narrow results.",values:{count:e}}),modalTitle:(0,a.Y)(i.sA,{id:"wALXhh",defaultMessage:"Search"}),searchBarSubmitButton:(0,a.Y)(i.sA,{id:"I2wVEx",defaultMessage:"Search"}),searchBarPlaceholder:(e,t)=>1===t.length?e.formatMessage({id:"InuxyD",defaultMessage:"Search for {fileType}"},{fileType:t[0]}):e.formatMessage({id:"eadQlj",defaultMessage:"Search for {firstFileType}, {secondFileType}, and more"},{firstFileType:t[0],secondFileType:t[1]}),searchMode:e=>e.formatMessage({id:"Gt2A4i",defaultMessage:"Search mode"}),semantic:e=>e.formatMessage({id:"wrfBCo",defaultMessage:"Semantic search"}),keyword:e=>e.formatMessage({id:"tZBt78",defaultMessage:"Keyword search"}),anytime:e=>e.formatMessage({id:"5my7Ui",defaultMessage:"Anytime"}),lastModified:e=>e.formatMessage({id:"CvWHjn",defaultMessage:"Last modified"}),last24hours:e=>e.formatMessage({id:"EA3yHn",defaultMessage:"Within 24 hours"}),last7days:e=>e.formatMessage({id:"fuQYvC",defaultMessage:"Within 7 days"}),last30days:e=>e.formatMessage({id:"Hb5Asz",defaultMessage:"Within 30 days"}),catalogLabel:e=>e.formatMessage({id:"LfFo2Z",defaultMessage:"Catalog"}),schemaLabel:e=>e.formatMessage({id:"MI82Ep",defaultMessage:"Schema"}),tagLabel:e=>e.formatMessage({id:"H1NmgQ",defaultMessage:"Tag"}),userLabel:(0,a.Y)(i.sA,{id:"XFerZS",defaultMessage:"Owner"}),partnerCategoryLabel:(0,a.Y)(i.sA,{id:"2k6uJ5",defaultMessage:"Categories"}),marketplaceCategoryLabel:(0,a.Y)(i.sA,{id:"f2vlXl",defaultMessage:"Categories"}),multipleSelectedUsersLabel:e=>(0,a.Y)(i.sA,{id:"EDAphJ",defaultMessage:"{count} users",values:{count:e}}),multipleSelectedCatalogsLabel:e=>(0,a.Y)(i.sA,{id:"sFdX5u",defaultMessage:"{count} catalogs",values:{count:e}}),multipleSelectedTagsLabel:e=>(0,a.Y)(i.sA,{id:"COBuf/",defaultMessage:"{count} tags",values:{count:e}}),multipleSelectedSchemasLabel:e=>(0,a.Y)(i.sA,{id:"N3koON",defaultMessage:"{count} schemas",values:{count:e}}),selected:(0,a.Y)(i.sA,{id:"oRK8zV",defaultMessage:"Selected"}),me:(0,a.Y)(i.sA,{id:"zv7JsD",defaultMessage:"Me"}),everyone:(0,a.Y)(i.sA,{id:"/Dq46W",defaultMessage:"Everyone"}),fileTypeLabel:(0,a.Y)(i.sA,{id:"aGb5NR",defaultMessage:"Type"}),multipleSelectedFileTypesLabel:e=>(0,a.Y)(i.sA,{id:"CfWj68",defaultMessage:"{count} types",values:{count:e}}),sort:e=>e.formatMessage({id:"zRqlun",defaultMessage:"Sort by"}),relevance:e=>e.formatMessage({id:"hiRkob",defaultMessage:"Most relevant"}),popularity:e=>e.formatMessage({id:"hyZsg/",defaultMessage:"Most popular"}),searchmidtierResultMessage:(e,t)=>{switch(t){case s.If.DOCUMENTATION:return e.formatMessage({id:"pu8E+G",defaultMessage:"Documents"});case s.If.PROJECT:return(0,l.Q)()?e.formatMessage({id:"m2VEDE",defaultMessage:"Git folders"}):e.formatMessage({id:"Vce5FG",defaultMessage:"Repos"});case s.If.FILE:return e.formatMessage({id:"P9WXfC",defaultMessage:"Files"});case s.If.FOLDER:return e.formatMessage({id:"ii5y22",defaultMessage:"Folders"});case s.If.LIBRARY:return e.formatMessage({id:"rVC3Xq",defaultMessage:"Libraries"});case s.If.TABLE:return e.formatMessage({id:"kNHLDl",defaultMessage:"Tables"});case s.If.METRIC_VIEW:return e.formatMessage({id:"fm8QIi",defaultMessage:"Metric views"});case s.If.VOLUME:return e.formatMessage({id:"AGr2pF",defaultMessage:"Volumes"});case s.If.FUNCTION:return e.formatMessage({id:"JhdnX6",defaultMessage:"Functions"});case s.If.NOTEBOOK:return e.formatMessage({id:"iIT2GO",defaultMessage:"Notebooks"});case s.If.MLFLOW_EXPERIMENT:return e.formatMessage({id:"PZyeta",defaultMessage:"Experiments"});case s.If.QUERY:return e.formatMessage({id:"r37QiN",defaultMessage:"Queries"});case s.If.ALERT:return e.formatMessage({id:"1PsxP7",defaultMessage:"Legacy Alerts"});case s.If.ALERT_V2:return e.formatMessage({id:"Fccfue",defaultMessage:"Alerts"});case s.If.PIPELINE:return e.formatMessage({id:"2JGQlt",defaultMessage:"Pipelines"});case s.If.DBSQL_DASHBOARD:return e.formatMessage({id:"InkkPP",defaultMessage:"Dashboards"});case s.If.JOB:return e.formatMessage({id:"gLNYHR",defaultMessage:"Jobs"});case s.If.ML_MODEL:return e.formatMessage({id:"6YNBeQ",defaultMessage:"Models"});case s.If.PARTNER:return e.formatMessage({id:"ai5xOS",defaultMessage:"Partners"});case s.If.MARKETPLACE:return e.formatMessage({id:"vrBCdZ",defaultMessage:"Marketplace"});case s.If.DATA_ROOM:return e.formatMessage({id:"GC9aHp",defaultMessage:"Genie spaces"});case s.If.ML_ENDPOINT:return e.formatMessage({id:"FJa/HC",defaultMessage:"Endpoints"});case s.If.CATALOG:case s.If.SCHEMA:case s.If.NAV_LINK:case s.If.APP:case s.If.DESIGNER_FILE:case s.If.LAKEWATCH_QUERY:return""}},clearNavigationalSearchInput:(0,a.Y)(i.sA,{id:"aqx4a0",defaultMessage:"Clear"}),resetFilters:(0,a.Y)(i.sA,{id:"xqIJoR",defaultMessage:"Reset filters"}),allTab:(0,a.Y)(i.sA,{id:"ZtTd77",defaultMessage:"All"}),viewAllResults:(0,a.Y)(i.sA,{id:"im2CfH",defaultMessage:"View all"}),viewAllResultsWithType:(e,t)=>e.formatMessage({id:"YUp8It",defaultMessage:"View all {fileType}"},{fileType:t}),defaultSearchError:(0,a.Y)(i.sA,{id:"LPHoZf",defaultMessage:"An error occurred while fetching search results. Please try again later."}),searchQueryTooLong:(0,a.Y)(i.sA,{id:"MZjOEX",defaultMessage:"The max allowed input length is {maxLength}. Please try again with a shortened search term.",values:{maxLength:100}}),noResults:(0,a.Y)(i.sA,{id:"69/sr2",defaultMessage:"No results matched your search."}),noQuery:(0,a.Y)(i.sA,{id:"Ds2vL2",defaultMessage:"Type in a query and press enter to search"}),lastModifiedTimeText:e=>(0,a.Y)(i.sA,{id:"CV9ZrO",defaultMessage:"modified {time}",values:{time:e}}),more:(0,a.Y)(i.sA,{id:"+PHNYN",defaultMessage:"More"}),unityCatalogUpgrade:(0,a.Y)(i.sA,{id:"A6Qlf7",defaultMessage:"Upgrade to Unity Catalog to search tables. Tables in the Hive Metastore aren't searchable."}),unityCatalogTables:(0,a.Y)(i.sA,{id:"oQI1QJ",defaultMessage:"Only showing results for tables in Unity Catalog. Tables in the Hive Metastore aren't searchable."}),ucModelNoResults:(0,a.Y)(i.sA,{id:"N1S9o+",defaultMessage:"No result matches were found for models in Unity Catalog."}),ucModelWorkspaceRedirect:e=>(0,a.Y)(i.sA,{id:"S1FQwL",defaultMessage:"To search for models in the current workspace, go to the <link>models page</link>.",values:{link:t=>(0,a.Y)(n.o.Link,{componentId:"codegen_webapp_js_search_v2search_i18n.tsx_424",href:e,children:t})}}),modelWorkspaceInfo:e=>(0,a.Y)(i.sA,{id:"1w6C0v",defaultMessage:"Only showing results for models in Unity Catalog. Search for models in the current workspace in the <link>workspace model registry</link>.",values:{link:t=>(0,a.Y)(n.o.Link,{componentId:"codegen_webapp_js_search_v2search_i18n.tsx_431",href:e,children:t})}}),jobId:e=>(0,a.Y)(i.sA,{id:"IcylbC",defaultMessage:"Job ID: {jobId}",values:{jobId:e}}),jobServicePrincipalOwner:(0,a.Y)(i.sA,{id:"9926x/",defaultMessage:"Service principal owner"}),lastJobRun:(0,a.Y)(i.sA,{id:"oPpdT/",defaultMessage:"Last run:"}),openFullPageSearch:(e,t)=>e.formatMessage({id:"K4NWC5",defaultMessage:"Show all results for ''{searchValue}'' in a full page"},{searchValue:t}),openEmptyFullPageSearch:e=>e.formatMessage({id:"kwrEEs",defaultMessage:"Open search in a full page"}),newTab:(0,a.Y)(i.sA,{id:"Mh6Fw/",defaultMessage:"Open in a new tab"}),enter:(0,a.Y)(i.sA,{id:"Rhf1Qy",defaultMessage:"Enter"}),openAdvancedSearch:(e,t)=>{if(t)return e.formatMessage({id:"B/IQP7",defaultMessage:"Show all results for ''{searchValue}''"},{searchValue:t});return e.formatMessage({id:"qay3aB",defaultMessage:"Open advanced search"})},itemViewedTime:(e,t=!1)=>{let r=new Date(e);return t?(0,a.Y)(i.sA,{id:"pE6SrH",defaultMessage:"Viewed {timeAgo}",values:{timeAgo:(0,a.Y)(o.f,{date:r})}}):(0,a.Y)(i.sA,{id:"87kVKV",defaultMessage:"viewed {timeAgo}",values:{timeAgo:(0,a.Y)(o.f,{date:r})}})},relatedContentSubtitle:e=>(0,a.Y)(i.sA,{id:"X/uBJA",defaultMessage:'related to "{pageName}"',values:{pageName:e}}),relatedContentLabel:e=>e.formatMessage({id:"0SQTVq",defaultMessage:"Suggested"}),recentsLabel:e=>e.formatMessage({id:"IIR4ht",defaultMessage:"Recents"}),productsAndPagesLabel:e=>e.formatMessage({id:"BpFmuq",defaultMessage:"Products and Pages"})}},304883:(e,t,r)=>{"use strict";function a(e){if(n(window))return{...e,flag_overrides_json:JSON.stringify(window.DARO_PROMPTING_OVERRIDES)};return e}function n(e){return e?.DARO_PROMPTING_OVERRIDES!==void 0}function i(e){let t=n(window)?window.DARO_PROMPTING_OVERRIDES:{};window.DARO_PROMPTING_OVERRIDES={...t,...e}}function o(e){if(!n(window))return;delete window.DARO_PROMPTING_OVERRIDES[e]}function s(e){window.DARO_PROMPTING_OVERRIDES={...e}}function l(){if(n(window))return{...window.DARO_PROMPTING_OVERRIDES};return{}}r.d(t,{To:()=>o,_Y:()=>a,sO:()=>s,sU:()=>l,vz:()=>i})},305535:(e,t,r)=>{"use strict";r.d(t,{OL:()=>s,po:()=>u});var a=r(678332),n=r.n(a),i=r(342411);function o(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function s(e){var t;return(t=function*(){if(e===i.Xn)return Promise.resolve();try{let t=l[e];return yield r(770037)(`./${t}`)}catch{console.warn(`Unable to load locale: '${e}'`)}},function(){var e=this,r=arguments;return new Promise(function(a,n){var i=t.apply(e,r);function s(e){o(i,a,n,s,l,"next",e)}function l(e){o(i,a,n,s,l,"throw",e)}s(void 0)})})()}let l={en:"en",dev:"en","de-DE":"de","es-ES":"es","fr-FR":"fr","ko-KR":"ko","ja-JP":"ja","it-IT":"it","pt-BR":"pt_BR","pt-PT":"pt_PT","zh-CN":"zh_CN","zh-HK":"zh_TW","zh-TW":"zh_TW"};function u({cron:e,intl:t,timezoneId:r,options:{capitalize:a=!0,throwExceptionOnParseError:i=!0,dayOfWeekStartIndexZero:o=!1,use12HourTimeFormat:s=!1,verbose:c=!1}={}}){try{let u=e.replace(/H\//g,"*/").replace(/H/g,"0"),d=l[t.locale],f=n().toString(u,{use24HourTimeFormat:!s,locale:d,dayOfWeekStartIndexZero:o,throwExceptionOnParseError:i,verbose:c});return f.includes(":")&&r&&(f+=r?` (${r})`:" (UTC)"),a||(f=f.charAt(0).toLowerCase()+f.slice(1)),f}catch(t){return e}}},305850:(e,t,r)=>{"use strict";r.d(t,{Bu:()=>h,Db:()=>b,I:()=>v,x9:()=>y});var a=r(209725),n=r.n(a),i=r(974091),o=r.n(i),s=r(359525),l=r.n(s),u=r(692738),c=r(141078),d=r(886100),f=r(22191),p=r(425373),m=r(993533);function g(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}let h=(0,c.J1)`
  query ListPipelineAssetsByPathQuery(
    $pageSize: Int
    $includePermissionLevels: Boolean = false
    $filters: LakeflowListAssetsRequestFiltersInput
  ) @component(name: "Workflows.Authoring.UI") {
    lakeflowListAssets(
      input: {
        filters: $filters
        pageSize: $pageSize
        includeFields: { includePermissionLevels: $includePermissionLevels, includeSubresources: true }
      }
    ) {
      assets {
        name
        id
        permissionLevel
        pipeline {
          latestUpdates {
            updateId
            state
            creationTime
          }
        }
      }
      apiError {
        code
        message
      }
      nextPageToken
      prevPageToken
    }
  }
`;function b({includePermissionLevels:e,includedPath:t,options:r={}}){return(0,c.IT)(h,{variables:{includePermissionLevels:e,filters:{assetTypes:[m.Ti1.PIPELINE_WORKSPACE],includedPath:t}},...r})}let y=10;function v({includedPaths:e,skip:t=!1}){let r=(0,c.mK)(),a=e.length>y;(0,u.useEffect)(()=>{a&&!t&&d.iT.sev2(f.Es.WorkflowsAuthoring,"lakeflow.authoring.pipelines.useListPipelineAssetsByPaths-exceeded-max-paths")},[a,t]);let i=(0,u.useMemo)(()=>t?[]:l()(e.slice(0,y)),[e,t]),s=(0,p.E)({queries:i.map(e=>({queryKey:["ListPipelineAssetsByPathQuery",e],queryFn:()=>{var t;return(t=function*(){return(yield r.query({query:h,variables:{filters:{assetTypes:[m.Ti1.PIPELINE_WORKSPACE],includedPath:e}}})).data},function(){var e=this,r=arguments;return new Promise(function(a,n){var i=t.apply(e,r);function o(e){g(i,a,n,o,s,"next",e)}function s(e){g(i,a,n,o,s,"throw",e)}o(void 0)})})()},refetchOnMount:!0,refetchOnWindowFocus:!1,refetchOnReconnect:!1}))});return(0,u.useMemo)(()=>{let e=o()(n()(i,s));return a?{truncated:!0,truncatedResults:e}:{truncated:!1,allResults:e}},[a,i,s])}},308183:(e,t,r)=>{"use strict";r.d(t,{a:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.dashboardsai.enableFetchWidgetRenderDataLazyMat",!0)}},308365:(e,t,r)=>{"use strict";r.d(t,{i:()=>E,r:()=>g});var a=r(610435),n=r(956935),i=r(797421),o=r(692738),s=r(429608),l=r(497895),u=r(705639),c=r(123252),d=r(99206);let f=e=>({zIndex:e.options.zIndexBase+50});function p(){var e;let t,r,a,i,o,{theme:s,getPrefixedClassName:c}=(0,l.wn)();return e=c("picker"),t=`.${e}-focused`,r=`.${e}-active-bar`,a=`.${e}-separator`,i=`.${e}-suffix`,o={height:32,borderRadius:(0,d.S)(u.c.POPOVER_BORDER_RADIUS,s.borders.borderRadiusSm),borderColor:s.colors.border,color:s.colors.textPrimary,transition:"border 0s, box-shadow 0s",[`&${t},:hover`]:{borderColor:s.colors.actionDefaultBorderHover},"&:active":{borderColor:s.colors.actionDefaultBorderPress},[`&${t}`]:{boxShadow:"none !important",outline:`${s.colors.actionDefaultBorderFocus} solid 2px !important`,outlineOffset:"-2px !important",borderColor:"transparent !important"},[`& ${r}`]:{background:`${s.colors.actionDefaultBorderPress} !important`},[`& input::placeholder, & ${a}, & ${i}`]:{color:s.colors.textPrimary}},(0,n.AH)(o)}let m=({children:e,ariaLive:t="assertive",...r})=>{let{theme:n}=(0,l.wn)(),i=(0,o.useRef)(null);return(0,o.useEffect)(()=>{i.current&&(n.isDarkMode?i.current.querySelectorAll(".du-bois-dark-picker-input > input"):i.current.querySelectorAll(".du-bois-light-picker-input > input")).forEach(e=>e.setAttribute("aria-live",t))},[i,t,n.isDarkMode]),(0,a.Y)("div",{...r,ref:i,children:e})},g=(0,o.forwardRef)((e,t)=>{let r=p(),{theme:n}=(0,l.wn)(),{ariaLive:o,wrapperDivProps:u,...d}=e;return(0,a.Y)(s.wC,{children:(0,a.Y)(m,{...(0,c.VG)(),...u,ariaLive:o,children:(0,a.Y)(i.A,{css:r,ref:t,...d,popupStyle:{...f(n),...e.popupStyle||{}}})})})}),h=(0,o.forwardRef)((e,t)=>{let r=p(),{theme:n}=(0,l.wn)(),{ariaLive:o,wrapperDivProps:u,...d}=e;return(0,a.Y)(s.wC,{children:(0,a.Y)(m,{...u,ariaLive:o,children:(0,a.Y)(i.A.RangePicker,{...(0,c.VG)(),css:r,...d,ref:t,popupStyle:{...f(n),...e.popupStyle||{}}})})})}),b=(0,o.forwardRef)((e,t)=>{let r=p(),{theme:n}=(0,l.wn)(),{ariaLive:o,wrapperDivProps:u,...d}=e;return(0,a.Y)(s.wC,{children:(0,a.Y)(m,{...(0,c.VG)(),...u,ariaLive:o,children:(0,a.Y)(i.A.TimePicker,{css:r,...d,ref:t,popupStyle:{...f(n),...e.popupStyle||{}}})})})}),y=(0,o.forwardRef)((e,t)=>{let r=p(),{theme:n}=(0,l.wn)(),{ariaLive:o,wrapperDivProps:u,...d}=e;return(0,a.Y)(s.wC,{children:(0,a.Y)(m,{...(0,c.VG)(),...u,ariaLive:o,children:(0,a.Y)(i.A.QuarterPicker,{css:r,...d,ref:t,popupStyle:{...f(n),...e.popupStyle||{}}})})})}),v=(0,o.forwardRef)((e,t)=>{let r=p(),{theme:n}=(0,l.wn)(),{ariaLive:o,wrapperDivProps:u,...d}=e;return(0,a.Y)(s.wC,{children:(0,a.Y)(m,{...(0,c.VG)(),...u,ariaLive:o,children:(0,a.Y)(i.A.WeekPicker,{css:r,...d,ref:t,popupStyle:{...f(n),...e.popupStyle||{}}})})})}),E=Object.assign(g,{RangePicker:h,TimePicker:b,QuarterPicker:y,WeekPicker:v,MonthPicker:(0,o.forwardRef)((e,t)=>{let r=p(),{theme:n}=(0,l.wn)(),{ariaLive:o,wrapperDivProps:u,...d}=e;return(0,a.Y)(s.wC,{children:(0,a.Y)(m,{...(0,c.VG)(),...u,ariaLive:o,children:(0,a.Y)(i.A.MonthPicker,{css:r,...d,ref:t,popupStyle:{...f(n),...e.popupStyle||{}}})})})}),YearPicker:(0,o.forwardRef)((e,t)=>{let r=p(),{theme:n}=(0,l.wn)(),{ariaLive:o,wrapperDivProps:u,...d}=e;return(0,a.Y)(s.wC,{children:(0,a.Y)(m,{...(0,c.VG)(),...u,ariaLive:o,children:(0,a.Y)(i.A.YearPicker,{css:r,...d,ref:t,popupStyle:{...f(n),...e.popupStyle||{}}})})})})})},310338:(e,t,r)=>{"use strict";function a(e){return e.attachments?.filter(e=>!E(e))??[]}function n(e,t){let r=t?T(e):a(e);return r.findLast(e=>e.query)?.query}function i(e,t){let r=t?T(e):a(e);return r.findLast(e=>e.text)?.text}function o(e){let t=a(e);return t.findLast(e=>e.certified_answer)?.certified_answer}function s(e){let t=a(e);return t.findLast(e=>e.final_summary)?.final_summary}function l(e){return n(e)??o(e)}function u(e){return a(e).length>0}function c(e){return a(e).map(e=>e.viz).filter(e=>void 0!==e)}function d(e){return[...a(e)].findLast(e=>!!e.certified_answer||!!e.query&&"RESPONSE_PHASE_VERIFYING"!==k(e))}function f(e){let t=d(e);if(!t)return;return t.query||t.certified_answer}function p(e){return!!e.query&&!m(e)}function m(e){return!!e.full_name}function g(e){return function(e){let t=Object.values(e);if(0!==t.length)return t[0];throw Error("Unexpected empty attachment wrapper")}(e).id}function h(e){return a(e).map(e=>e.sub_question).filter(e=>void 0!==e)}function b(e){return a(e).map(e=>e.query).filter(e=>void 0!==e)}function y(e){return a(e).map(e=>e.deep_research_report).filter(e=>void 0!==e)}function v(e){if(e.sub_question)return e.sub_question.attachment_ids??[];return[]}function E(e){return 0===Object.keys(e).length}function I(e,t){return a(e).filter(e=>k(e)===t)}function T(e){let t=a(e),r=[...t.flatMap(e=>v(e)),...t.filter(e=>void 0!==k(e)).flatMap(e=>[g(e),...v(e)])];return t.filter(e=>!r.includes(g(e)))}function w(e){return a(e).map(e=>e.research_thought).filter(e=>void 0!==e)}function S(e,t){let r=a(e).find(e=>g(e)===t);return r?r.query?.statement_id??r.certified_answer?.statement_id:void 0}function k(e){return e.text?.phase??e.query?.phase??e.viz?.phase}function A(e,t){return a(e).filter(e=>(e.text?.verification_metadata?.section??e.query?.verification_metadata?.section)===t)}function _(e){return A(e,"VERIFICATION_SECTION_FINAL_DECISION").length>0}function C(e){return"{{General Actions}}"===e.title}function R(e){if(!e)return{sqlError:void 0,humanError:void 0};let t="== SQL ==",r=e.indexOf(t);if(r<0)return{sqlError:void 0,humanError:e};return{sqlError:e.substring(r+t.length),humanError:e.substring(0,r)}}function M(e){switch(e){case"PENDING":case"RUNNING":return!0;default:return!1}}r.d(t,{$H:()=>b,AE:()=>_,Bv:()=>a,DR:()=>I,Ls:()=>w,NL:()=>u,RB:()=>d,Vl:()=>E,Vt:()=>o,WB:()=>s,Zd:()=>C,fE:()=>f,gD:()=>y,gW:()=>R,i0:()=>A,j0:()=>h,jc:()=>T,kh:()=>p,kw:()=>M,ls:()=>i,q9:()=>m,rQ:()=>g,sX:()=>S,sn:()=>n,su:()=>c,wW:()=>l})},324361:(e,t,r)=>{"use strict";r.d(t,{X:()=>i});var a=r(692738),n=r(813378);function i({freezeDetectionContextBlob:e,isInDev:t,esComponent:r}){(0,a.useEffect)(()=>{let a=(0,n.k4)(r);return a.monitor({freezeDetectionContextBlob:e,isInDev:t}),()=>{a.stopMonitoring()}},[])}},325334:(e,t,r)=>{"use strict";r.d(t,{G:()=>n.G,T:()=>a.T});var a=r(841508),n=r(565082)},329061:(e,t,r)=>{"use strict";r.d(t,{$:()=>n,o:()=>s});var a=r(956935);let n=(0,a.AH)("background:linear-gradient(\n    137deg,rgba(238,86,118,0.16) 26.3%,rgba(202,66,224,0.16) 55.61%,rgba(66,153,224,0.16) 81.9%\n  ) !important;"),i=(0,a.AH)("&:hover{",n,"    transition:background ",.3,"s linear;}"),o=(0,a.AH)(n,"  &:hover{",n,"    transition:background ",.3,"s linear;}"),s=e=>{if(e)return o;return i}},329099:(e,t,r)=>{"use strict";r.d(t,{EJ:()=>h,Eu:()=>c,I1:()=>u,JS:()=>g,Oo:()=>y,l4:()=>f,rF:()=>d,rc:()=>p,wV:()=>m});var a,n,i,o,s=r(610435);r(692738);var l=r(342411),u=((a={}).Python="python",a.SQL="sql",a.Scala="scala",a.R="r",a),c=((n={}).CSS="css",n.HTML="html",n.Java="java",n.JavaScript="javascript",n.JSON="json",n.Markdown="markdown",n.PG="pgsql",n.Plain="plain",n.Python="python",n.R="r",n.Scala="scala",n.Shell="sh",n.SQL="sql",n.TypeScript="typescript",n.XML="xml",n.YAML="yaml",n);let d={py:"py",md:"md",mdSandbox:"md-sandbox"},f={sql:"SQL",python:"Python",r:"R",scala:"Scala",markdown:"Markdown",run:"Run Notebook"},p={py:"Python",md:"Markdown"};var m=((i={}).Python="python",i.Scala="scala",i.SQL="sql",i.R="r",i.Markdown="markdown",i);let g=[{name:"Markdown",formattedMessage:(0,s.Y)(l.sA,{id:"xgYBvc",defaultMessage:"Markdown"})},{name:"Python",formattedMessage:(0,s.Y)(l.sA,{id:"chXIsn",defaultMessage:"Python"})},{name:"SQL",formattedMessage:(0,s.Y)(l.sA,{id:"cmxKCK",defaultMessage:"SQL"})},{name:"Scala",formattedMessage:(0,s.Y)(l.sA,{id:"wEJXV9",defaultMessage:"Scala"})},{name:"R",formattedMessage:(0,s.Y)(l.sA,{id:"RDG8ln",defaultMessage:"R"})}],h={markdown:"md",md:"md",python:"python",scala:"scala",sql:"sql",r:"r"};var b=((o={})[o.twoSpacesIndentUnit=2]="twoSpacesIndentUnit",o[o.fourSpacesIndentUnit=4]="fourSpacesIndentUnit",o);function y(){return Object.keys(b).filter(e=>"number"==typeof b[e]).map(e=>parseInt(b[e],10))}},329427:(e,t,r)=>{"use strict";function a(e){if(e)return`## Image Upload
You can receive images from the user. The user can share images with you by:
* Dragging and dropping an image into the chat input
* Copying an image and pasting it from their clipboard
* Clicking the attach files button in the chat input`;return`## Image Upload
Image upload is not supported. If the user asks about sharing images, let them know that this feature is not available in the current mode.`}r.d(t,{J:()=>a})},334116:(e,t,r)=>{"use strict";r.d(t,{KX:()=>b,MU:()=>g,_n:()=>p,fQ:()=>h,rZ:()=>d,s6:()=>y,wc:()=>m,yR:()=>f});var a,n,i,o,s,l,u,c,d=((a={})[a.IDLE=0]="IDLE",a[a.READY_TO_APPLY=1]="READY_TO_APPLY",a[a.APPLYING_BUT_NOT_STREAMING=2]="APPLYING_BUT_NOT_STREAMING",a[a.STREAMING=3]="STREAMING",a[a.APPLIED=4]="APPLIED",a[a.ERROR=5]="ERROR",a[a.APPLY_ENDPOINT_ERROR=6]="APPLY_ENDPOINT_ERROR",a[a.CANCELLED=7]="CANCELLED",a),f=((n={})[n.PIP_LOGS_BUTTON=0]="PIP_LOGS_BUTTON",n[n.APPLY_ERROR=1]="APPLY_ERROR",n),p=((i={}).WORKSPACE="workspace",i.VOLUMES="volumes",i),m=((o={}).DEPENDENCIES="dependencies",o.INSTALLED="installed",o),g=((s={}).EXPORT="export",s.UPLOAD="upload",s),h=((l={}).ENVIRONMENT="environment",l.BASE_ENVIRONMENT="baseEnvironment",l.DEPENDENCY="dependency",l),b=((u={}).ON_DEMAND="ON_DEMAND",u.POOL_OPTIONAL="POOL_OPTIONAL",u.POOL_REQUIRED="POOL_REQUIRED",u),y=((c={}).STANDARD="STANDARD",c.HIGH="HIGH",c)},336664:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>S,e:()=>v,yw:()=>I});var a,n=r(252513),i=r.n(n),o=r(691238),s=r(708134),l=r(655907),u=r(441535),c=r(375436),d=r(886100),f=r(22191),p=r(747129),m=r(87173),g=r(936289),h=r(162210);function b(){return!(0,l.Yz)()}let y="Error processing presence update";var v=((a={}).ADD="add",a.REMOVE="remove",a);function E(e){let t=0,r=new Map;return function(a){if(r.has(a)){let e=r.get(a);if(e)return e}let n=e[t%e.length];return r.set(a,n),t++,n}}function I(){return{legacy:E(["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"]),primary:E(["#00A972","#FFAB00","#FF3621","#077A9D","#8BCAE7","#99DDB4","#AB4057","#BF7080","#FCA4A1"]),secondary:E(["#E0F5E9","#FFEBC2","#FFDAD6","#CDE4EB","#DDF0F8","#F0FAF4","#EDDEE1","#F2E3E6","#FED9D7"])}}class T extends i().Model{defaults(){return{notebookId:null,locationId:null,hasFocus:!0,commandId:null,commandGuid:null,cursorStart:null,cursorEnd:null,landingTimestamp:null,sessionId:null,entities:{},sessionSource:"user-browser"}}constructor(e,t){super(e,t)}initAttributes(e){this.set({landingTimestamp:new Date().getTime(),sessionId:h.BrowserUtils.getBrowserTabId(),locationId:e,sessionSource:(0,s.P)()?"browser-fleet-headless":"user-browser"})}}class w extends i().Model{listenerReady=!1;rpc=null;colorScale=I().legacy;colorScalePrimary=I().primary;colorScaleSecondary=I().secondary;updateMarks=null;hasFocus=document.hasFocus();notebookId;commandId;commandGuid;cursorStart;cursorEnd;entities={};retryTimeoutId=null;retryCount=0;backoffOptions={initialBackoff:1e3,multiplier:2,jitter:.2,maxBackoff:6e4};defaults(){return{sessions:[],history:[],currentStatus:null}}initialize(){this.set("currentStatus",new T),this.listenTo(this.get("currentStatus"),"change",this.onStatusChange),setInterval((0,c.Uz)("setInterval","PresenceModel.updateDocumentFocus",()=>this.hasFocus=document.hasFocus()),5e3),setInterval((0,c.Uz)("setInterval","PresenceModel.saveCurrentStatus",()=>this.saveCurrentStatus()),1e3)}onPresenceUpdate(e){if(!b())return;try{this.onPresenceUpdate0(e),d.iT.sev2BurnRate(f.Es.Notebooks,y,p.i1.P9999,p.Ip.Min100,!0)}catch(e){d.iT.sev2BurnRate(f.Es.Notebooks,y,p.i1.P9999,p.Ip.Min100,!1,e)}}onPresenceUpdate0(e){this.listenerReady=!0,this.retryCount=0;let t=o.Ay.filter(e.sessions,e=>e.sessionId!==h.BrowserUtils.getBrowserTabId()),r=(0,g.vB)(t);o.Ay.each(r,e=>{e.userName&&e.userName.length>0&&(e.displayInitial=e.userName[0].toUpperCase(),e.bgColorSecondary=this.colorScaleSecondary(e.userId?.toString()),e.bgColor=this.colorScalePrimary(e.userId?.toString()),e.hasFocus?e.opacity=1:e.opacity=.4)}),r=o.Ay.sortBy(r,e=>e.timestamp),this.set("sessions",r),this.set("history",e.history),this.updateMarks&&this.updateMarks(this.get("sessions"))}setLocation(e){if(!b())return;if((0,u.W)("databricks.fe.eda.presenceExponentialBackoffEnabled",!0)){let t=this.get("currentStatus"),r=t?.get("locationId"),a=t?.get("landingTimestamp"),n=new Date().getTime();if(r&&r===e&&a&&n-a<6e4)return}this.stop(),this.retryCount=0,this.get("currentStatus")?.initAttributes(e);let t=()=>{this.rpc=window.conn.wsClient.sendRPC("presence",{data:this.get("currentStatus")?.toJSON(),update:this.onPresenceUpdate.bind(this),silent:!0,error:(e,r)=>{if(this.listenerReady=!1,!r.clientCancelled)if((0,u.W)("databricks.fe.eda.presenceExponentialBackoffEnabled",!0)){let e=(0,m.m)(this.retryCount,this.backoffOptions);this.retryCount++,this.retryTimeoutId=setTimeout(t,e)}else console.log("Presence RPC disconnected, retrying..."),this.retryTimeoutId=setTimeout(t,1e3)}})};t()}pushHistory(e,t,r){if(!b())return;window.conn.wsClient.sendRPC("presencePushHistory",{data:{locationId:r||this.get("currentStatus")?.get("locationId"),entry:{text:e,important:t}},silent:!0})}updateCurrentCommand(e,t,r){if(!b())return;this.notebookId=e,this.commandId=t,this.commandGuid=r}updateCurrentEntity(e,t,r="add"){if(!b()||!e)return;this.notebookId=e,"remove"===r?delete this.entities[Object.keys(t)[0]]:this.entities={...this.entities,...t}}updateCursorPosition(e,t,r,a){if(!b())return;this.notebookId=e,this.commandId=t,this.cursorStart=r,this.cursorEnd=a}saveCurrentStatus(){if(!b())return;this.get("currentStatus")?.set({hasFocus:this.hasFocus,notebookId:this.notebookId,commandId:this.commandId,commandGuid:this.commandGuid,cursorStart:this.cursorStart,cursorEnd:this.cursorEnd,entities:this.entities})}onStatusChange(){if(!b())return;this.listenerReady&&window.conn.wsClient.sendRPC("presenceUpdate",{silent:!0,data:this.get("currentStatus")?.toJSON()})}stop(){if(!b())return;this.listenerReady=!1,this.rpc&&this.rpc.cancel?.(),this.retryTimeoutId&&(clearTimeout(this.retryTimeoutId),this.retryTimeoutId=null),this.retryCount=0}}let S=new w},337372:(e,t,r)=>{"use strict";r.d(t,{y:()=>u});var a=r(610435),n=r(692738),i=r(268398),o=r(497895),s=r(834343),l=r(407374);let u=({value:e,onChange:t,placeholder:r,"aria-controls":u,"aria-activedescendant":c,className:d,options:f})=>{let{handleKeyNavigation:p}=(0,i.w)(),m=(0,o.wn)(),g=(0,n.useCallback)(e=>{t(e.target.value)},[t]),h=(0,n.useCallback)(e=>{f.length>0&&["ArrowDown","ArrowUp","Home","End","Enter"].includes(e.key)&&p(e,f)},[p,f]);return(0,a.Y)("div",{css:{position:"sticky",top:0,background:m.theme.colors.backgroundPrimary,zIndex:m.theme.options.zIndexBase+1},children:(0,a.Y)(l.p,{componentId:"listbox-filter-input",role:"combobox","aria-controls":u,"aria-activedescendant":c,"aria-expanded":"true","aria-autocomplete":"list",value:e,onChange:g,onKeyDown:h,placeholder:r,prefix:(0,a.Y)(s.A,{}),className:d,allowClear:!0})})}},337695:(e,t,r)=>{"use strict";r.d(t,{W:()=>n});var a=r(441535);function n(){return(0,a.W)("dashboard_authoring_agent",!1)}},342526:(e,t,r)=>{"use strict";r.d(t,{Ci:()=>s,lW:()=>n,o_:()=>l,oi:()=>i,u8:()=>o});var a,n=((a={}).LeftToRight="LR",a.TopToBottom="TB",a);let i=1,o={minZoom:.25,maxZoom:1},s=32,l={onlyRenderVisibleElements:!0,selectionKeyCode:"",multiSelectionKeyCode:"",maxZoom:2.5,minZoom:.05,panOnScroll:!0,nodesDraggable:!1,nodesConnectable:!1,snapGrid:[15,15],defaultPosition:[0,0]}},343312:(e,t,r)=>{"use strict";let a;r.d(t,{K:()=>s,Py:()=>c,wA:()=>l});var n=r(500710),i=r.n(n),o=r(989584);function s(e){let t=new CustomEvent("bricksterboost_eventviewer_batch",{detail:e.filter(e=>void 0!==e.msg).map(e=>(function(e){if(!e.isProtoLog)return e;let t=JSON.parse(e.msg),r={metric:`frontendLog/${(0,o.F$)(t).replace(/(_\w)/g,e=>e[1].toUpperCase())}`,ts:t.inferred_timestamp_millis,eventId:t.frontend_log_event_id,protoData:t};return{msg:JSON.stringify(r),size:JSON.stringify(r).length,isProtoLog:!0}})(e)).map(e=>e.msg??"")});document.dispatchEvent(t)}function l(e){s(e.map(e=>{let t=JSON.stringify(e);return{size:t.length,msg:t,isProtoLog:(0,o.cU)(e)}}))}let u=[];function c(e){if(u.push(e),a)return;a=requestIdleCallback(()=>{let e=new CustomEvent("bricksterboost_eventviewer_batch",{detail:u.map(e=>(function(e){let{ts:t,eventId:r=i()("LOCAL_DEBUG"),eventType:a,entityType:n,entityId:o,eventName:s,extra:l}=e,u={metric:`localDebugLog/${a}`,ts:t,eventId:r,protoData:{entry:{observability_log:{type:s,entity:{type:n,entity_id:o}}},...l}};return{msg:JSON.stringify(u),size:JSON.stringify(u).length,isProtoLog:!0}})(e).msg??"")});document.dispatchEvent(e),u=[],a=void 0})}},344918:(e,t,r)=>{"use strict";r.d(t,{$:()=>o,X:()=>i});var a=r(483588),n=r(617293);function i(e){return e.toSorted((e,t)=>{let r=e.catalogType===a._E1.USER_HOME_CATALOG;if(r!==(t.catalogType===a._E1.USER_HOME_CATALOG))return r?-1:1;let i=!!e.isDefault;if(!!t.isDefault!==i)return i?-1:1;let o=e.name===n.oD;if(o!==(t.name===n.oD))return o?-1:1;let s=!!e.browse_only;if(!!t.browse_only!==s)return s?1:-1;return e.name.localeCompare(t.name)})}function o(e){return e.toSorted((e,t)=>{let r=e.name===n.Ef;if(r!==(t.name===n.Ef))return r?-1:1;return e.name.localeCompare(t.name)})}},347619:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M2 .75A.75.75 0 0 1 2.75 0h6a.75.75 0 0 1 .53.22l4.5 4.5c.141.14.22.331.22.53V8h-1.5V6H8.75A.75.75 0 0 1 8 5.25V1.5H3.5v12h6V15H2.75a.75.75 0 0 1-.75-.75zm7.5 1.81 1.94 1.94H9.5z",clipRule:"evenodd"}),(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M9.25 8.5a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h.785a3.5 3.5 0 0 0 3.465 3h1.25a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75h-.785a3.5 3.5 0 0 0-3.465-3zM10 11v-1h.5a2 2 0 0 1 2 2 1 1 0 0 0 1 1h.5v1h-.5a2 2 0 0 1-2-2 1 1 0 0 0-1-1z",clipRule:"evenodd"})]})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="FilePipelineIcon";let l=s},347955:(e,t,r)=>{"use strict";r.d(t,{CQ:()=>i,ee:()=>s,fV:()=>o});var a=r(124235),n=r(749565);let i=(0,a.cX)()?"⌘+⏎":"CTRL+⏎",o=.6,s=()=>{let e=(0,n.useGlobalChatStore)(e=>e.isLoadingNewMessages),t=(0,n.useGlobalChatStore)(e=>e.sxsExperimentMetadata.length>0&&null===e.sxsSelectedTreatmentIndex);return e&&!t}},348844:(e,t,r)=>{"use strict";r.d(t,{OK:()=>k,SB:()=>R,g0:()=>w,of:()=>C,wk:()=>S});var a=r(815193),n=r.n(a),i=r(22191),o=r(253171),s=r(178808),l=r(583054),u=r(776407),c=r(779862),d=r(555297),f=r(41375),p=r(416913),m=r(221951),g=r(665692),h=r(332792),b=r(911090),y=r(93097),v=r(520747),E=r(749850),I=r(46954),T=r(158014);function w(e){let t=function({options:e,columns:t,getSeriesOptionsForColumn:r,defaultNameMap:a,specType:i}){let{columnConfigurationMap:l,swappedAxes:u,globalSeriesType:c,xAxis:d,hideXAxis:f,yAxis:m,hideYAxes:g,alignYAxesAtZero:h,seriesOptions:b,sortX:y,sortY:v,reverseX:I,reverseY:T,keepNullOnX:w}=e;if("pie"===c)return{};if((0,E.eT)(e))throw Error((0,E.h$)(e.swappedAxes));if((0,E.WJ)(e))throw Error(E.lQ);if((0,E.ZC)(e))throw Error(E.SN);if((0,E.jl)(e))throw Error((0,E.EG)(e.swappedAxes));if((0,E.$V)(e))throw Error(E.jq);let S=function({globalSeriesType:e,sortedY:t,seriesOptions:r,yAxis:a,columns:i,hideYAxes:l,alignYAxesAtZero:u,sortY:c,reverseY:d,isPreAggChart:f,defaultNameMap:p,getSeriesOptionsForColumn:m,specType:g="render",keepNullOnY:h}){"histogram"===e&&"editor"===g&&(t=[{column:"*",transform:"COUNT"}]);let b=n()(["area","column","line","combo"],e)&&f?{fn:"sum"}:void 0,y={0:[],1:[]};for(let e of t){let{yAxis:n=0,name:i}=m(r||{},e),o=p?.[e.column],l=i??o;if(l===e.column&&r[e.column]?.name&&(l=r[e.column]?.name),1===t.length){let e=a?.[0]?.title?.text;l===o&&e&&(l=e)}y[n].push((0,s.V)({columnConfig:e,defaultTransform:b,...l?{displayName:l}:{},specType:g}))}let v=(0,o.C)({hideAxis:l,title:a?.[0]?.title?.text??void 0}),E=(0,o.C)({hideAxis:l,title:a?.[1]?.title?.text??void 0});if(y[0].length>0&&y[1].length>0){let e=A({fields:y[0],yAxis:a?.[0],axisProperties:v,sortY:c}),t=(0,o.C)({hideAxis:l,title:a?.[1]?.title?.text??void 0});return{primary:e,secondary:A({fields:y[1],yAxis:a?.[1],axisProperties:t,sortY:c}),...void 0!==u?{alignAxesAtZero:u}:{}}}if(y[1].length>0)return _({fields:y[1],yAxis:a?.[1],axisProperties:{...E,position:"secondary"},globalSeriesType:e,columns:i,sortY:c,reverseY:d,specType:g,keepNullOnY:h});if(y[0].length>0)return _({fields:y[0],yAxis:a?.[0],axisProperties:v,globalSeriesType:e,columns:i,sortY:c,reverseY:d,specType:g,keepNullOnY:h})}({globalSeriesType:c,sortedY:R(l.y,b,r),seriesOptions:b,yAxis:m,columns:t,hideYAxes:g,alignYAxesAtZero:h,sortY:v,reverseY:T,isPreAggChart:!1===e.useAggregationsUi,defaultNameMap:a,getSeriesOptionsForColumn:r,specType:i,keepNullOnY:w}),C=k({x:l.x||void 0,columns:t,globalSeriesType:c,xAxis:d,hideXAxis:f,sortX:y,reverseX:I,keepNullOnX:w,defaultNameMap:a,specType:i}),M=u?"y":"x",N=u?"x":"y";if("histogram"===c&&(0,p.UR)(S)&&(C?.axis?.title&&(C.displayName=C?.axis?.title),S?.axis?.title&&(S.displayName=S?.axis?.title)),(0,p.mv)(S))return{...C?{x:C}:{},y:S};if((0,p.Ag)(S))return{...C?{[M]:C}:{},[N]:S};return{...C?{[M]:C}:{},...S?{[N]:S}:{}}}(e),{color:r,...a}=S(e);if((0,m.G5)(t))return{...t,...a,...!(0,g.KQ)(r)?{color:r}:{}};return{...t,...a,color:r}}function S({options:e,columns:t,getSeriesOptionsForColumn:r,defaultNameMap:a,specType:n="render"}){let{columnConfigurationMap:o,swappedAxes:p,globalSeriesType:m,legend:g,showDataLabels:y,textFormat:I,sizemode:w,direction:k,valuesOptions:A,seriesOptions:_,numberFormat:M,percentFormat:N,dateTimeFormat:P,useAggregationsUi:D}=e,x={...M?{numberFormat:{formatType:"numeral",format:M}}:{},...N?{percentFormat:{formatType:"numeral",format:N}}:{}},L={...x,...P?{timeFormat:{formatType:"moment",format:P}}:{}},O=!1===D,F={};if((0,E.JQ)(e))throw Error((0,E.Io)(e));for(let l of Object.keys(o)){let y="y"===l?o[l]?.[0]:o[l];if(y){let E=(0,v.c)({key:l,globalSeriesType:m,swappedAxes:p});if((0,f.R6)(E)){if("y"===l&&(o.y?.length??0)>1){let a=function({legend:e,columnConfigurationMap:t,seriesOptions:r,useAggregationsUi:a,isCombo:n,getSeriesOptionsForColumn:i,specType:o,columns:l}){let d=R(t?.y,r??{},i),f=Object.values(r).some(e=>1===e.yAxis)&&Object.values(r).some(e=>0===e.yAxis||void 0===e.yAxis),p=Object.values(r).some(e=>void 0!==e.zIndex),m=f||p||n?function(e,t,r,a,n,i){return e.map(e=>{let o=r(t,e);if(o?.name)return o.name;let l=i.find(t=>t.name===e.column),u=(0,s.V)({columnConfig:e,defaultTransform:a,specType:n});return(0,h.l3)(u,l)})}(d,r,i,!1===a?{fn:"sum"}:void 0,o,l):void 0,g=(0,c.T5)({...e?.traceorder==="reversed"?{reverse:!0}:{},...m?{customSortOrder:m}:{}}),b=(0,u.s)(e),y={...Object.keys(g).length>1?{scale:g}:{},...b?{legend:b}:{}};return Object.keys(y).length>0?y:void 0}({columnConfigurationMap:o,seriesOptions:_,legend:g,useAggregationsUi:D,isCombo:"combo"===(0,T.d)(e),getSeriesOptionsForColumn:r,specType:n,columns:t});a&&(F.color=a)}continue}if((0,f.qm)(E)){let e=(0,u.s)({...g,..."size"===E?{enabled:!1}:{}}),r=O&&"color"===E&&"heatmap"===m?{fn:"sum"}:void 0,i=a?.[y.column],s="pie"===m?o?.x?.column:o?.series?.column,f=t.find(e=>e.name===s)?.type||"string",p={...C({columnConfig:y,columns:t,defaultTransform:r,displayName:i,scale:"size"===E&&"diameter"===w&&"histogram"!==m?{type:"quantitative",fn:{type:"sqrt"}}:("series"===l||"pie"===m&&"x"===l)&&"color"===E?{type:"categorical"}:void 0,customSortOrder:"color"===E&&_?(0,c.z5)(_,f):void 0,mappings:"color"===E?(0,c.d4)(A,_,m,f,L):void 0,valueAlias:"color"===E&&"pie"!==m?(0,d.v)(_,f):void 0,specType:n}),...e?{legend:e}:{}};"color"===E?F.color=p:"size"===E&&(F.size=p)}else if("angle"===E){let e=O&&"pie"===m?{fn:"sum"}:void 0,a=r(_||{},y);F[E]=C({columnConfig:y,columns:t,reverse:k?.type==="clockwise",defaultTransform:e,...a.name&&"pie"===m?{displayName:a.name}:{},specType:n})}else"extra"!==E&&(0,b.K)(E,i.Es.Visualizations)}}if(y&&(F.label={...(0,l.g)({textFormat:I||(0,l.Y)({globalSeriesType:m,percentValues:e.series.percentValues,swappedAxes:e.swappedAxes}),globalSeriesType:m,swappedAxes:p})??{},_format:L,show:!0}),I&&(F.tooltip=(0,l.g)({textFormat:I||(0,l.Y)({globalSeriesType:m,percentValues:e.series.percentValues,swappedAxes:e.swappedAxes}),globalSeriesType:m,swappedAxes:p})),F.tooltip={...F.tooltip,_format:x},!e.textFormat&&"pie"===m){let t="{{ @@color }}";e.columnConfigurationMap.y?.length&&e.columnConfigurationMap.x?t="{{ @@color }}: {{ @@anglePercent }} ({{ @@angle }})":e.columnConfigurationMap.y?.length&&(t="{{ @@anglePercent }} ({{ @@angle }})"),F.tooltip={...F.tooltip,_template:t}}return F}function k({x:e,columns:t,globalSeriesType:r,xAxis:a,hideXAxis:n,sortX:i,reverseX:s,keepNullOnX:l,defaultNameMap:u,specType:d="render"}){if(!e)return;let f=a?.title?.text,p=(0,o.C)({hideAxis:n,hideAxisLabels:!a?.labels?.enabled,title:f??void 0}),m=u?.[e.column],g="histogram"===r?(0,y.F)(e.column):f??m,h={...C({columnConfig:e,columns:t,scale:(0,c.qv)(a?.type),sort:i,reverse:s,...g?{displayName:g}:{},specType:d}),...p?{axis:p}:{}};return l||"categorical"!==h.scale.type||"pie"===r||(h.scale._excludeNull=!0),h}function A({fields:e,yAxis:t,axisProperties:r,sortY:a,reverseY:n}){let i=(0,c.qv)(t?.type)??{type:"quantitative"};return{fields:e,...(0,c.DV)({...i,yAxis:t,sort:a,reverse:n}),...r?{axis:r}:{}}}function _({fields:e,yAxis:t,axisProperties:r,columns:a,globalSeriesType:n,sortY:i,reverseY:o,specType:s="render",keepNullOnY:l}){if(e.length>=2||0===e.length)return A({fields:e,yAxis:t,axisProperties:r,sortY:i,reverseY:o});{let{transform:u,displayName:d}=e[0],f="field"in e[0]?(0,I.j)(e[0].field):e[0].fieldName,p={..."render"===s?{fieldName:f}:{field:f},...u?{transform:u}:{},...void 0!==d?{displayName:d}:{},...(0,c.DV)({...(0,c.qv)(t?.type)??(0,c.Zp)({fieldName:f,transform:u,columns:a}),yAxis:t,sort:i,reverse:o}),...r?{axis:r}:{}};return!l&&"categorical"===p.scale.type&&["heatmap","scatter","bubble"].includes(n)&&(p.scale._excludeNull=!0),p}}function C({columnConfig:e,columns:t,defaultTransform:r,scale:a,displayName:n,sort:i,reverse:o,customSortOrder:l,mappings:u,valueAlias:d,specType:f="render"}){let{column:p}=e,m=(0,s.v)(e?.transform)??r,g=(0,c.DV)({...a??(0,c.Zp)({fieldName:p,transform:m,columns:t}),sort:i,reverse:o,customSortOrder:l,mappings:u});return{...(0,s.V)({columnConfig:e,defaultTransform:r,displayName:n,specType:f}),...g,...d?{valueAlias:d}:{}}}function R(e,t,r){if(void 0===e)return[];let a=e.map((e,t)=>({column:e,index:t}));return a.sort((e,a)=>{let{column:n,index:i}=e,{column:o,index:s}=a;if(t){let e=r(t,n),a=r(t,o),i=e?.zIndex,s=a?.zIndex;if(void 0!==i&&void 0!==s)return i-s;if(void 0!==i)return -1;if(void 0!==s)return 1}return i-s}),a.map(({column:e})=>e)}},348907:(e,t,r)=>{"use strict";r.d(t,{Is:()=>T,yb:()=>w});var a,n=r(610435);r(692738);var i=r(79570),o=r(538893),s=r(374161),l=r(170075),u=r(213576),c=r(497895),d=r(802582),f=r(186675),p=r(296027),m=r(225842),g=r(342411),h=r(711819),b=r(657418),y=r(441535),v=r(29824),E=r(797246),I=r(869061),T=((a={}).DEFAULT_CATALOG="DEFAULT_CATALOG",a.SHARED_CATALOG="SHARED_CATALOG",a.LEGACY_CATALOG="LEGACY_CATALOG",a.SYSTEM_CATALOG="SYSTEM_CATALOG",a.USER_HOME_CATALOG="USER_HOME_CATALOG",a);function w({name:e,accessible:t=!0,securableKind:r,browseOnly:a=!1,withTooltip:T=!0,tooltipProps:S={},avatarStyleSize:k=null,catalogIconVariant:A,isPostgres:_=!1}){let C=(0,y.W)("databricks.fe.uc.enableForeignCatalogIcon",!1),R=(0,b.p)(),{theme:M}=(0,c.wn)(),N=(0,g.tz)(),P=(0,n.Y)(h.IE,{browseOnly:a,objectType:v.an.CATALOG,tooltipProps:S,isPostgres:_,withTooltip:T}),D=(({catalogIconVariant:e,intl:t,withTooltip:r})=>{let a,c=t.formatMessage({id:"W3L9/U",defaultMessage:"Catalog"}),d=(e,t)=>r?(0,n.Y)(i.m,{componentId:"codegen_web-shared_src_metastore_components_catalogentityiconv2.tsx_45",content:t,children:e}):e;switch(e){case"DEFAULT_CATALOG":return a=t.formatMessage({id:"ygAX5G",defaultMessage:"Default catalog for this workspace"}),c=t.formatMessage({id:"zdsPXb",defaultMessage:"Default catalog"}),d((0,n.Y)(o.A,{alt:a,"aria-label":a}),c);case"SYSTEM_CATALOG":return a=t.formatMessage({id:"Pa/oU+",defaultMessage:"System catalog"}),d((0,n.Y)(s.A,{alt:a,"aria-label":a}),c);case"SHARED_CATALOG":return a=t.formatMessage({id:"5lZgD1",defaultMessage:"This catalog is shared across workspaces"}),d((0,n.Y)(l.A,{alt:a,"aria-label":a}),c);case"LEGACY_CATALOG":return a=t.formatMessage({id:"THVXC9",defaultMessage:"Legacy catalog includes hive_metastore"}),d((0,n.Y)(s.A,{alt:a,"aria-label":a}),c);case"USER_HOME_CATALOG":return a=t.formatMessage({id:"HmqL/2",defaultMessage:"User home catalog for this workspace"}),c=t.formatMessage({id:"+XR3Eo",defaultMessage:"User home catalog"}),d((0,n.Y)(u.A,{alt:a,"aria-label":a}),c);default:return}})({catalogIconVariant:A,intl:N,withTooltip:T});if(D&&(P=D),!t){let e=N.formatMessage({id:"L8k2aS",defaultMessage:"This catalog is not accessible from the current workspace."});P=(0,n.Y)(d.p,{title:e,...S,children:(0,n.Y)(f.A,{alt:e,"aria-label":e,css:{color:M.colors.actionDisabledText}})})}if(R&&"CATALOG_ONLINE"===r){let e=N.formatMessage(E.nw);P=(0,n.Y)(d.p,{title:e,...S,children:(0,n.Y)(p.A,{alt:e,"aria-label":e})})}let x=r?.replace("CATALOG_FOREIGN_",""),L=(0,I.Qz)(x,e),O=(0,n.FD)(n.FK,{children:[P,C&&x&&L&&(0,n.Y)("img",{src:L,alt:r,height:"12",css:{position:"relative",left:"-8px",bottom:"-4px",background:M.colors.white,borderRadius:"50%",padding:"1px"}})]});return k?(0,n.Y)(m.eu,{type:"entity",icon:O,label:N.formatMessage(E.Ix[v.an.CATALOG]),size:k}):O}},350962:(e,t,r)=>{"use strict";r.d(t,{W:()=>v});var a=r(610435),n=r(956935),i=r(91958),o=r.n(i),s=r(692738),l=r(337372),u=r(575654),c=r(268398),d=r(224098),f=r(497895),p=r(53333);let m=(0,n.AH)({display:"flex",flexDirection:"column",gap:"8px"}),g=(0,n.AH)({width:"100%"}),h=o()(e=>(0,n.AH)({color:e.colors.textSecondary,textAlign:"center",padding:"6px 12px",width:"100%",boxSizing:"border-box"})),b=[d.s7.OnValueChange],y=({options:e,filterValue:t,setFilterValue:r,filterInputPlaceholder:n,onSelect:i,ariaLabel:o,includeFilterInput:d,filterInputEmptyMessage:p,listBoxDivRef:b})=>{let[y,v]=(0,s.useState)(),{listboxId:E}=(0,c.w)(),I=(0,f.wn)(),T=(0,s.useMemo)(()=>`${E}-no-results`,[E]),w=(0,s.useMemo)(()=>{if(!t)return e;let r=t.toLowerCase();return e.filter(e=>e.value.toLowerCase().includes(r)||e.label.toLowerCase().includes(r))},[t,e]);return s.useEffect(()=>{if(!b?.current)return;let e=b.current.querySelector('input[type="text"], input[type="search"]'),t=b.current.querySelector('[role="listbox"]'),r=e||t;if(!r)return;0===w.length?r.setAttribute("aria-activedescendant",T):y?r.setAttribute("aria-activedescendant",`${E}-${y}`):r.removeAttribute("aria-activedescendant")},[w.length,y,E,T,b]),(0,a.FD)("div",{css:m,ref:b,children:[d&&(0,a.Y)(l.y,{value:t,onChange:r,placeholder:n,"aria-controls":E,options:w}),w.length>0?(0,a.Y)("div",{"aria-live":"polite",css:g,children:(0,a.Y)(u.w,{options:w,onSelect:i,onHighlight:v,"aria-label":o})}):(0,a.Y)("div",{id:T,css:h(I.theme),children:p??"No results found"})]})},v=({options:e,onSelect:t,includeFilterInput:r,filterInputEmptyMessage:n,initialSelectedValue:i,filterInputPlaceholder:o,"aria-label":l,componentId:u,analyticsEvents:f=b,valueHasNoPii:m,className:g})=>{let[h,v]=(0,s.useState)(""),E=(0,d.ei)({componentType:d.v_.Listbox,componentId:u,analyticsEvents:f,valueHasNoPii:m}),I=(0,s.useCallback)(e=>{E.onValueChange(e),t?.(e)},[E,t]),{elementRef:T}=(0,p.z)({onView:E.onView,value:i});return(0,a.Y)(c._,{className:g,onSelect:I,initialSelectedValue:i,listBoxDivRef:T,children:(0,a.Y)(y,{options:e,filterValue:h,setFilterValue:v,filterInputPlaceholder:o,onSelect:I,ariaLabel:l,includeFilterInput:r,filterInputEmptyMessage:n,listBoxDivRef:T})})}},356579:(e,t,r)=>{"use strict";r.d(t,{O4:()=>v,om:()=>y});var a=r(610435),n=r(247066),i=r(692738),o=r(886100),s=r(22191),l=r(748592),u=r(759458),c=r(40984),d=r(221095),f=r(105026);let p={max:1e3,ttl:18e6},m=()=>({max:1e3,ttl:18e6,maxSize:(0,f._Z)(),sizeCalculation:d.$}),g=(e={})=>(0,u.Ay)((t,r)=>({module:"default",syntaxParseResultCache:new n.q((0,f.GF)()?m():p),getSyntaxParseResultFromCache:({query:e,location:t,source:a})=>{let n=(0,c.a)({query:e,location:t,source:a}),{syntaxParseResultCache:i}=r(),o=i.get(n);if(!1===o)return null;return o},setSyntaxParseResultInCache:({query:e,location:t,source:a,syntaxError:n})=>{let i=(0,c.a)({query:e,location:t,source:a}),{syntaxParseResultCache:o}=r();o.set(i,n??!1)},tokenParseResultCache:new n.q((0,f.GF)()?m():p),getTokenParseResultFromCache:({query:e,location:t,catalog:a,schema:n,precedingCreatedIdentifiers:i})=>{let o=(0,c.S)({query:e,location:t,catalog:a,schema:n,precedingCreatedIdentifiers:i}),{tokenParseResultCache:s}=r();return s.get(o)},setTokenParseResultInCache:({query:e,location:t,catalog:a,schema:n,tokens:i,precedingCreatedIdentifiers:o})=>{let s=(0,c.S)({query:e,location:t,catalog:a,schema:n,precedingCreatedIdentifiers:o}),{tokenParseResultCache:l}=r();l.set(s,i)},clearTokenParseResultCache:()=>{let{tokenParseResultCache:e}=r();e.clear()},...e})),h=(0,l.W)(()=>g(),!0),b=(0,i.createContext)(null),y=({module:e,children:t})=>{let[r]=(0,i.useState)(()=>g({module:e}));return(0,a.Y)(b.Provider,{value:r,children:t})};function v(e,t){let r,a=(r=(0,i.useContext)(b)??h.getActiveValue(),(0,i.useEffect)(()=>{if("default"===r.getState().module){let e=Error();o.iT.sev3(s.Es.Editor,"EditorSqlGlobalContextStoreProvider not found in the component tree",e.stack)}},[r]),r);return(0,u.Pj)(a,e,t)}},357548:(e,t,r)=>{"use strict";r.d(t,{A:()=>i,Su:()=>o,eJ:()=>s});var a=r(342411),n=r(641760);let i=(0,a.zR)({id:"cWOjzx",defaultMessage:"My Data"}),o=(0,a.zR)({id:"wfEfNF",defaultMessage:"My Files"});function s(e,t,r,a){if((0,n.Sg)(t,r,a))return e.formatMessage(o)}},363283:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>s,Ww:()=>o.a});var a=r(536717),n=r.n(a),i=r(544004),o=r.n(i);o().setConfig({ADD_ATTR:["target"]}),o().addHook("afterSanitizeAttributes",function(e){let t=e.getAttribute("target");n()(t)&&"_blank"===t.toLowerCase()?e.setAttribute("rel","noopener noreferrer"):e.removeAttribute("target")});let s=o().sanitize},367295:(e,t,r)=>{"use strict";r.d(t,{L:()=>o});var a=r(371303),n=r(726583),i=r(924876);function o(){return{includeSubscriptions:(0,a.sT)("databricks.fe.jaws.enableDashboardSubscriptionsUi",!1),includeJobInRunJobTask:!0,includeJobParameters:(0,n.ue)(),includeTaskDependencyOutcome:!0,includeTriggerState:!0,includePeriodicTrigger:!0,includeOnStreamingBacklogExceeded:(0,i.cG)(),includeSourceInDbtAndSqlFile:!0}}},372107:(e,t,r)=>{"use strict";r.d(t,{H:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enableWorkspaceSidebar",!1)}},373223:(e,t,r)=>{"use strict";r.d(t,{Ux:()=>f});var a=r(348844),n=r(178808),i=r(779862),o=r(749850),s=r(158014),l=r(387039),u=r(323859),c=r(952067),d=r(552612);function f(e,t,r){let f=function(e,t){let r=e.series?.stacking;if(null==r&&(r=""),"stack"===r)return e.series.percentValues?"percent-stack":"stack";if(""===r){let r=(0,s.d)(e),a=e.series?.percentValues?"percent-stack":"stack",o=e.series?.percentValues?"_percent-group":"group",l=e.series?.percentValues?"_percent-layer":"layer";if("pie"===r)return a;if("bar"===r){let{x:r,series:s}=e.columnConfigurationMap;if(!r||!s)return o;let l=(0,i.qv)(e.xAxis?.type)??(0,i.Zp)({fieldName:r.column,columns:t,transform:(0,n.v)(r?.transform)});if((0,c.wF)(l))return a;return o}return["boxplot","combo"].includes(r)?o:l}}(e,t),m=function(e,t){let{seriesOptions:r,columnConfigurationMap:n}=e;if(n.y&&n.y.length>0){let i=!1,u=function(e){if(!e)return l.ji;let t=Array(e);for(let r=0;r<e;r++)t[r]=l.ji[r%l.ji.length];return t}(n.y.length),c=[...u];if((0,a.SB)(n.y,r,t).forEach((a,n)=>{let o=t(r,a);o?.color?(c[o?.zIndex??n]=o.color,i=!0):o?.zIndex!==void 0&&"combo"===(0,s.d)(e)&&(c[n]=u[o?.zIndex],i=!0)}),i){if(n.series)throw Error(o.gE);return c}}}(e,r),g=function(e){if(e.colorScheme){if(e.colorScheme in d.A)return d.A[e.colorScheme].map(e=>e[1]);else if(e.colorScheme===d.r&&e.heatMinColor&&e.heatMaxColor)return[e.heatMinColor,e.heatMaxColor]}}(e),{globalSeriesType:h,swappedAxes:b,columnConfigurationMap:y,isAggregationOn:v}=e,E=y.y?.flatMap(({column:e})=>{let r=t.find(({name:t})=>t===e);return r?[r]:[]}),I=t.find(({name:e})=>e===y.series?.column),T=function({columns:e,columnConfigurationMap:t,yColumns:r,globalSeriesType:a,swappedAxes:n,isAggregationOn:i}){let{x:o}=t,s=e.find(({name:e})=>e===o?.column),l=s?.type?(0,c.SV)(s.type,void 0):void 0,u=(0,c.wF)(l||void 0),d=r?.length&&r.length>0&&r.every(({type:e})=>(0,c.wF)((0,c.SV)(e,void 0)));if(p.includes(a)){if(n&&u&&d)return"x";if(!o)return n?"x":"y"}}({columns:t,columnConfigurationMap:y,yColumns:E,globalSeriesType:h,swappedAxes:b,isAggregationOn:v});return{...f?{layout:f}:{},...m?{colors:m}:{},...g?{_colorRamp:g}:{},_reverseStackByColor:!!(0,u.Lx)(f)&&E?.length===1&&!!I,...T?{_dependentAxis:T}:{}}}let p=["column","box","area","line"]},374161:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.FD)("g",{fill:"currentColor",fillRule:"evenodd",clipPath:"url(#CatalogGearIcon_svg__a)",clipRule:"evenodd",children:[(0,a.Y)("path",{d:"M14 7.5V.75a.75.75 0 0 0-.75-.75H4.5A2.5 2.5 0 0 0 2 2.5v10.75A2.75 2.75 0 0 0 4.75 16H8v-1.5H4.75c-.69 0-1.25-.56-1.25-1.25V4.792c.306.134.644.208 1 .208h8v2.5zm-9.5-4a1 1 0 0 1 0-2h8v2z"}),(0,a.Y)("path",{d:"M13.125 10.081q.364.114.673.325l.88-.703.936 1.173-.88.702q.136.344.166.729l1.098.25-.334 1.463-1.098-.25a2.6 2.6 0 0 1-.466.584l.49 1.014-1.352.651-.489-1.014a2.6 2.6 0 0 1-.748 0l-.488 1.014-1.351-.65.488-1.015a2.6 2.6 0 0 1-.466-.584l-1.098.25-.334-1.462 1.098-.25q.031-.385.166-.73l-.88-.702.935-1.172.88.702q.31-.211.674-.325V8.955h1.5zm.263 2.42a1.013 1.013 0 1 1-2.026 0 1.013 1.013 0 0 1 2.026 0"})]}),(0,a.Y)("defs",{children:(0,a.Y)("clipPath",{children:(0,a.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CatalogGearIcon";let l=s},375098:(e,t,r)=>{"use strict";r.d(t,{x:()=>c});var a=r(610435);r(692738);var n=r(497895),i=r(382908),o=r(201828),s=r(79128),l=r(342411);function u(){window.location.reload()}function c(e){return(0,a.Y)(l.Mm,{children:(0,a.Y)(d,{...e})})}function d({error:e,resetErrorBoundary:t,mfeName:r}){var c,f;let p,m,g,{theme:h}=(0,n.wn)(),{title:b,details:y,isChunkLoadError:v,isScriptLoadError:E}=(c=e,f=r,p=(0,l.tz)(),{isChunkLoadError:g=!(m=!!c.request&&"ScriptExternalLoadError"===c.name)&&!!c.request&&"ChunkLoadError"===c.name,isScriptLoadError:m,...function(){if(g)return{title:p.formatMessage({id:"7/9gjB",defaultMessage:"Error occurred when loading {mfeName}"},{mfeName:f}),details:p.formatMessage({id:"8WX/IU",defaultMessage:"An error occurred while loading the {mfeName} App. Some required files couldn't be loaded because of a network error or a timeout. If the problem persists or it is taking too long to load the UI, consider checking your connection settings."},{mfeName:f})};if(m)return{title:p.formatMessage({id:"tjYqVe",defaultMessage:"Error occurred when loading {mfeName}"},{mfeName:f}),details:(0,a.FD)(a.FK,{children:[(0,a.Y)(l.sA,{id:"vBPLHw",defaultMessage:"A loading failure occurred when loading the {mfeName} App. Please reload and try again.",values:{mfeName:f}}),(0,a.Y)("pre",{children:c.message})]})};return{title:p.formatMessage({id:"egVMts",defaultMessage:"Something went wrong."}),details:c.message}}()});return(0,a.Y)("div",{role:"alert",className:"error-message-container","data-test":"ErrorMessage",css:{marginLeft:h.spacing.sm},children:(0,a.Y)("div",{className:"error-state bg-white tiled",children:(0,a.FD)("div",{className:"error-state__details",css:{maxWidth:800},children:[(0,a.FD)(i.o.Title,{level:3,children:[(0,a.Y)(o.A,{css:{marginRight:h.spacing.xs}}),b]}),(0,a.Y)(i.o.Paragraph,{css:{marginBottom:h.spacing.md},children:y}),v||E?(0,a.Y)(s.$n,{componentId:"codegen_webapp_js_mfe_errorfallback.tsx_46",type:"primary",onClick:u,children:(0,a.Y)(l.sA,{id:"PYeXnp",defaultMessage:"Reload Page"})}):(0,a.FD)(a.FK,{children:[(0,a.Y)(s.$n,{componentId:"codegen_webapp_js_mfe_errorfallback.tsx_51",onClick:t,type:"primary",children:(0,a.Y)(l.sA,{id:"4/FIbz",defaultMessage:"Try again"})})," ",(0,a.Y)(s.$n,{componentId:"codegen_webapp_js_mfe_errorfallback.tsx_54",onClick:u,type:"link",children:(0,a.Y)(l.sA,{id:"OBQlj/",defaultMessage:"Reload Page"})})]})]})})})}},377523:(e,t,r)=>{"use strict";r.d(t,{y:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enableDatasetPublishMaterialization",!1)}},381331:(e,t,r)=>{"use strict";r.d(t,{w:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.dashboardConfigLazyMatEnabled",!0)}},383429:(e,t,r)=>{"use strict";r.d(t,{D:()=>i});var a=r(262541),n=r(177739);function i(e,t){let r=(0,a.SM)(e=>e.getCurrentContextResults()),i=t?r?.latestResults?.targetMap?.get(e)?.status:r?.combinedResults?.targetMap?.get(e)?.status,o=(0,a.SM)(e=>e.pendingExecution),s=(0,a.SM)(e=>e.requestsWaitingForCompute),l=(0,a.SM)(e=>e.executionQueue),u=[...s.filter(e=>!e.collectOnly).map(e=>e.targets).flat(),...l.filter(e=>!e.collectOnly).map(e=>e.targets).flat()];return o?.request.targets.some(t=>(0,n.SL)(e,t))&&!o?.request.collectOnly||u.some(t=>(0,n.SL)(e,t))?"running":i}},385123:(e,t,r)=>{"use strict";r.d(t,{Jf:()=>o,o_:()=>i});var a=r(806932);let n=new(r.n(a)()),i=e=>{let t=n.parse(e,{});return(t.find(e=>"fence"===e.type&&"code"===e.tag)?.content??"").trimEnd()},o=(e,t,r)=>{let a=e.trim().match(/^\s*%([\w-]+)(\s|$)/);if(a&&a.length>=2&&["scala","python","r","sql","py","md","markdown","md-sandbox"].includes(a[1])&&!t.includes(`%${a[1]}`)&&!r.includes(`%${a[1]}`))return`%${a[1]}
${t}`;return t}},392190:(e,t,r)=>{"use strict";r.d(t,{K:()=>a});let a=e=>e.some(e=>0===e.length||"``"===e)},394244:(e,t,r)=>{"use strict";r.d(t,{AY:()=>n,VL:()=>i,ar:()=>s,sG:()=>l,ur:()=>o});var a=r(1859);function n(e){return`ingestion-${e}-`}let i=e=>({name:`${n(e)}open`,defaultValue:!1,codec:a.XE,historyAction:"push",errorMode:"throw"}),o=()=>({name:"subId",defaultValue:void 0,codec:a._p,historyAction:"push",errorMode:"throw"}),s=e=>({name:`${n(e)}-catalog`,defaultValue:void 0,codec:a._p,historyAction:"push",errorMode:"throw"}),l=e=>({name:`${n(e)}-schema`,defaultValue:void 0,codec:a._p,historyAction:"push",errorMode:"throw"})},394917:(e,t,r)=>{"use strict";r.d(t,{W:()=>o,f:()=>s});var a=r(141078),n=r(441535),i=r(956963);let o=()=>(0,n.W)("databricks.editor.ghostTextWorkspaceEnable",!1)&&(0,n.W)("databricks.conversation.conf.enableGhostText",!0);function s(){let e=o(),t="ghosttext-code-completion",{data:r}=(0,a.IT)(i.Y,{variables:{input:{modelNames:[t],clientId:"inline-completion"}},skip:!e||!(0,n.W)("databricks.fe.enableAssistantModelAvailabilityCheck",!1),fetchPolicy:"cache-first"}),s=(r?.conversationGetModelStatus?.modelStatuses??[]).find(e=>e.name===t);if(!s)return!1;return e&&!!s.isAvailable}},395273:(e,t,r)=>{"use strict";r.d(t,{U:()=>m});var a=r(632528),n=r.n(a),i=r(692738),o=r(441535),s=r(255844),l=r(383020),u=r(679955),c=r(305850),d=r(962926),f=r(724283);function p(e){return{pipelineId:e.id,name:e.name,permissionLevel:(0,d.a)(e.permissionLevel),latestUpdates:e.pipeline?.latestUpdates??null}}function m({notebook:e,skip:t,includePermissionLevels:r=!1}){let a,d=(0,s.MR)(),{pathName:g}=(0,l._S)(e,["pathName"]),h=e?.getEditorMode();a="notebook"===h?"notebook":"file"===h&&((0,o.W)("databricks.fe.pipelines.enablePipelineListFileSupport",!1)||d)?"file":void 0;let b=!(0,u.dE)()||void 0===g||void 0===a||t,y=g?.replace(/'/g,"''"),v=f.z.usePipelineList({variables:{input:{filter:a&&`${a}='${y}'`,includePermissionLevels:r}},fetchPolicy:"network-only",skip:b||d&&(0,o.W)("databricks.fe.pipelines.disableLakeflowNotebookPipelinesViaListPipelines",!1)}),E=(0,c.Db)({includePermissionLevels:r,includedPath:g??"",options:{fetchPolicy:"network-only",skip:b||!d}});return{associatedPipelines:(0,i.useMemo)(()=>n()([...v.data?.deltapipelinesList?.statuses??[],...E.data?.lakeflowListAssets?.assets?.map(p)??[]],e=>e.pipelineId),[v.data,E.data]),loading:v.loading||E.loading,error:v.error??E.error}}},396063:(e,t,r)=>{"use strict";r.d(t,{S:()=>s});var a=r(595615),n=r(302118),i=r(641760);function o(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function s(e){return(0,a.AO)({queryKey:["get_default_catalog_query"],queryFn:function(){var e;return(e=function*(){let e=yield n.k.getCurrentMetastoreAssignment();return e?.default_catalog_name||""},function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function s(e){o(i,a,n,s,l,"next",e)}function l(e){o(i,a,n,s,l,"throw",e)}s(void 0)})})()},refetchOnWindowFocus:!1,enabled:(0,i.ei)(),...e})}},397382:(e,t,r)=>{"use strict";r.d(t,{N:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.discover.domainsRecommendations",!1)}},398765:(e,t,r)=>{},408174:(e,t,r)=>{"use strict";r.d(t,{Hc:()=>f,kT:()=>p});var a=r(692738),n=r(886100),i=r(989266),o=r(22191),s=r(141078),l=r(930908);function u(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function c(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){u(i,a,n,o,s,"next",e)}function s(e){u(i,a,n,o,s,"throw",e)}o(void 0)})}}let d=(0,s.J1)`
  query ListBudgetPoliciesQuery($input: BudgetpolicyListBudgetPoliciesRequestInput!)
  @component(name: "MoneyInfra.CostManagement") {
    serverlesspolicyListBudgetPolicies(input: $input) {
      policies {
        policyId
        policyName
        creatorUserId
        customTags {
          key
          value
        }
        rateLimitConfig
        isEditable
          @includeSafex(
            name: "databricks.fe.clustercontrols.enableBudgetPolicyAdminUiPublicPreview"
            defaultValue: false
          )
        isDeletable
          @includeSafex(
            name: "databricks.fe.clustercontrols.enableBudgetPolicyAdminUiPublicPreview"
            defaultValue: false
          )
      }
      apiError {
        code
        message
        helpUrl
        traceId
      }
      previousPageToken
      nextPageToken
    }
  }
`,f=e=>(0,s.IT)(d,e);function p(){let{doListBudgetPolicies:e}=(()=>{let[e,{data:t,loading:r,error:n}]=(0,s._l)(d),i=t?.serverlesspolicyListBudgetPolicies?.apiError?.message??n?.message??null,o=t?.serverlesspolicyListBudgetPolicies?.nextPageToken??null,l=t?.serverlesspolicyListBudgetPolicies?.previousPageToken??null,u=t?.serverlesspolicyListBudgetPolicies?.policies??[];return{doListBudgetPolicies:(0,a.useCallback)(t=>e(t),[e]),listBudgetPoliciesQueryState:{loading:r,apiError:t?.serverlesspolicyListBudgetPolicies?.apiError??null,errorMessage:i,data:t?{policies:u,nextPageToken:o,previousPageToken:l}:null}}})();return(0,a.useCallback)(()=>c(function*(){return n.iT.sev2IfThrows(o.Es.MoneyInfraCostManagement,"Failed to get first alphebetical budget policy id",()=>c(function*(){let t=yield e({variables:{input:{...(0,l.Ku)(),sortSpec:{field:i.t7.POLICY_NAME}}}});return t.data?.serverlesspolicyListBudgetPolicies?.policies?.[0]?.policyId})()).value})(),[e])}},410268:(e,t,r)=>{"use strict";r.d(t,{Ko:()=>I,Lc:()=>u,Lg:()=>h,N5:()=>b,Tl:()=>i,Yq:()=>l,ZB:()=>g,bt:()=>s,bu:()=>f,cr:()=>v,d2:()=>o,eG:()=>E,iQ:()=>y,jw:()=>d,sm:()=>p});var a=r(441535),n=r(301077);let i=["Active4D","Atom One Light","Ayu Light","GitHub Light","Tomorrow","Winter is Coming Light"],o=["Atom One Dark","Ayu Dark","Blackboard","Dracula","GitHub Dark","Monokai","One Dark Pro","Winter is Coming Dark"];function s(e){return e.replace(/[^0-9a-z-]+/gi,"-")}function l(e){return e.map(e=>s(e))}let u=new Map([[s("Active4D"),"#fafafa"],[s("Atom One Light"),"#fafafa"],[s("Ayu Light"),"#fafafa"],[s("GitHub Light"),"#fafafa"],[s("Tomorrow"),"#fafafa"],[s("Winter is Coming Light"),"#fafafa"],[s("Atom One Dark"),"#282C34"],[s("Ayu Dark"),"#0b0e14"],[s("Blackboard"),"#0C1021"],[s("Dracula"),"#282A36"],[s("GitHub Dark"),"#0d1117"],[s("Monokai"),"#252526"],[s("One Dark Pro"),"#282c34"],[s("Winter is Coming Dark"),"#282822"]]),c="object"==typeof WebAssembly&&"function"==typeof WebAssembly.instantiate,d=()=>{if(!c)return!1;return(0,a.W)("databricks.fe.editor.enableTextMate",!1)},f=()=>{if(!d())return!1;return!0},p={isWasmLoaded:!0},m="editor-prefix-";function g(e,t){(0,n.Q)(`${m}${e}`,t)}function h(e,t){let r=(0,n.M0)(`${m}${e}`,t);if(!r)return g(e,t),t;return r}let b=e=>e.replace(/(\/\*[^*]*\*+(?:[^/*][^*]*\*+)*\/)|(--.*(\n|$))/g,""),y=e=>e.replace(/(\/\*[^*]*\*+(?:[^/*][^*]*\*+)*\/)|(--.*(\n|$))/g,e=>e.replace(/[^\n]/g," ")),v=e=>e?.replaceAll("\r\n","\n")??"";function E(e,t){let r=e?e.length:0,a=t?t.length:0;if(0===r)return a;if(0===a)return r;let n=Array(a+1);for(let e=0;e<=a;++e)n[e]=Array(r+1),n[e][0]=e;let i=n[0];for(let e=1;e<=r;++e)i[e]=e;for(let i=1;i<=a;++i)for(let a=1;a<=r;++a)t.charAt(i-1)===e.charAt(a-1)?n[i][a]=n[i-1][a-1]:n[i][a]=Math.min(n[i-1][a-1],n[i][a-1],n[i-1][a])+1;return n[a][r]}function I(e,t){if(!t)return!1;return e>=1&&e<=t}},413484:(e,t,r)=>{"use strict";r.d(t,{b:()=>d});var a=r(610435),n=r(956935);r(692738);var i=r(429608),o=r(876726),s=r(140078);let l=(0,n.AH)({alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"flex-start",padding:"0 15px",width:"100%",backgroundColor:"var(--dubois-background-primary)",overflowY:"unset",boxSizing:"border-box"}),u={padding:35,maxWidth:1200,lineHeight:21,width:"65%","@media (max-width: 767px)":{width:"100%"},backgroundColor:"var(--dubois-background-primary)",borderRadius:3},c=(0,n.AH)({display:"flex",flexDirection:"column",height:"100%",alignItems:"center",justifyContent:"center"});function d(e){let{heading:t,message:r,icon:n,action:d}=e;return(0,a.FD)("div",{css:c,children:[(0,a.Y)("div",{className:"new-notebook context-bar",id:"context-bar",css:{visibility:"hidden"}}),(0,a.Y)("div",{css:l,children:(0,a.Y)("div",{className:"new-notebook error-panel",css:u,role:"alert",children:(0,a.Y)(i.bW,{children:(0,a.Y)(o.S,{title:t,description:r,image:n??(0,a.Y)(s.A,{}),button:d})})})})]})}},415767:(e,t,r)=>{"use strict";r.d(t,{p:()=>i,y:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.textBoxCharacterLimit",!1)}function i(){return(0,a.W)("databricks.fe.lakeview.textBoxMaxLength",5e4)}},418230:(e,t,r)=>{"use strict";r.d(t,{U:()=>i});var a=r(692738),n=r(829478);function i(e){var t;return t=a.useMemo(()=>window.matchMedia(e),[e]),(0,n.useSyncExternalStore)(a.useCallback(e=>(t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}),[t]),()=>t.matches)}},419031:(e,t,r)=>{"use strict";r.d(t,{J2:()=>d,s0:()=>c});var a=r(441535),n=r(276093),i=r(228091);let o=e=>{if(e.startsWith("`")&&e.endsWith("`"))return e.slice(1,-1);return e},s=e=>{let t=e.split(".").map(e=>o(e));if(t.length<=3)return t},l=e=>{let t=(0,n.N5)(e.trim().toLowerCase()).slice(0,260),r=/create\s+(?:or\s+replace\s+)?(?:materialized\s+)?((?:temp|temporary)\s+)?view\s+(?:if not exists\s+)?([^ \t\r\n\v\f(]+)(?:\s+|\()/g.exec(t);if(r){if(r[1]&&r[2])return{tempTableOrViewName:o(r[2])};else if(r[2])return{tableOrViewIdentifierPath:s(r[2])}}let l=/create\s+(?:or\s+replace\s+)?((?:temp|temporary)\s+)?(?:or\s+refresh\s+)?(?:streaming\s+)?table\s+(?:if not exists\s+)?([^ \t\r\n\v\f(]+)(?:\s+|\()/g.exec(t);if(l){if(l[1]&&l[2])return{tempTableOrViewName:o(l[2])};else if(l[2])return{tableOrViewIdentifierPath:s(l[2])}}if((0,i.k)()){let e=/create\s+(?:external\s+)?volume\s+(?:if not exists\s+)?([^ \t\r\n\v\f(;]+)(?:\s|\(|;|$)/g.exec(t);if(e&&e[1])return{volumeIdentifierPath:s(e[1])};let r=/alter\s+volume\s+(?:[^ \t\r\n\v\f(;]+)\s+rename\s+to\s+([^ \t\r\n\v\f(;]+)(?:\s|\(|;|$)/g.exec(t);if(r&&r[1])return{volumeIdentifierPath:s(r[1])}}if((0,a.W)("databricks.fe.editor.antlr.tempVariableSupport",!1)){let e=/declare\s+(?:or\s+replace\s+)?(?:(?:variable|var)\s+)?((?:`[^`]+`|[^ \t\r\n\v\f(,=]+)(?:\s*,\s*(?:`[^`]+`|[^ \t\r\n\v\f(,=]+))*)/g.exec(t);if(e)return{tempVariableNames:(e[1].match(/`[^`]+`|[^ \t\r\n\v\f(,=]+/g)??[]).map(o).map(e=>{let t=e.split(".");return t[t.length-1]}).filter(Boolean)}}return{}},u=(e,t,r)=>{if(1===r.length)return[e,t,r[0]];if(2===r.length)return[e,r[0],r[1]];return r},c=(e,t)=>{let r,a,n,i,o;return"each"===t?(r=new Set,a=new Set,n=new Set,i=new Set,(o=e.map(e=>{let{tableOrViewIdentifierPath:t,tempTableOrViewName:o,tempVariableNames:s,volumeIdentifierPath:c}=l(e.query);return t&&r.add(u(e.catalog,e.schema,t).join(".")),c&&i.add(u(e.catalog,e.schema,c).join(".")),o&&a.add(o),s&&s.forEach(e=>{n.add(e)}),{createdTablesOrViews:[...r],tempTableOrViewNames:[...a],tempVariableNames:[...n],createdOrRenamedVolumes:[...i]}})).unshift({createdTablesOrViews:[],tempTableOrViewNames:[],tempVariableNames:[],createdOrRenamedVolumes:[]}),o):(e=>{let t=new Set,r=new Set,a=new Set,n=new Set;for(let i of e){let{tableOrViewIdentifierPath:e,tempTableOrViewName:o,tempVariableNames:s,volumeIdentifierPath:c}=l(i.query);e&&t.add(u(i.catalog,i.schema,e).join(".")),c&&n.add(u(i.catalog,i.schema,c).join(".")),o&&r.add(o),s&&s.forEach(e=>{a.add(e)})}return[{createdTablesOrViews:[...t],tempTableOrViewNames:[...r],tempVariableNames:[...a],createdOrRenamedVolumes:[...n]}]})(e)},d=(e,t)=>{if(!e)return{createdTablesOrViews:[],tempTableOrViewNames:[],tempVariableNames:[],createdOrRenamedVolumes:[]};if(!t)return e;return{createdTablesOrViews:e.createdTablesOrViews,tempTableOrViewNames:[...e.tempTableOrViewNames,...t],tempVariableNames:e.tempVariableNames,createdOrRenamedVolumes:e.createdOrRenamedVolumes}}},419180:(e,t,r)=>{"use strict";r.d(t,{$C:()=>s,$h:()=>u,L$:()=>f,TA:()=>p,WR:()=>d,iQ:()=>o,ym:()=>l,yx:()=>c});var a=r(463909);function n(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function i(e){return function(){var t=this,r=arguments;return new Promise(function(a,i){var o=e.apply(t,r);function s(e){n(o,a,i,s,l,"next",e)}function l(e){n(o,a,i,s,l,"throw",e)}s(void 0)})}}let o=(0,a.X)(()=>i(function*(){return(yield(()=>{let e=()=>Promise.all([r.e(62280),r.e(49342),r.e(33398),r.e(73230),r.e(41578)]).then(r.bind(r,133398));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(133398,"./DeploymentModal","lazy",e);return e()})()).useDeployAction})()),s=(0,a.X)(()=>i(function*(){return(yield(()=>{let e=()=>Promise.all([r.e(62280),r.e(51362),r.e(26881),r.e(53214),r.e(90489),r.e(30259),r.e(13962),r.e(22831),r.e(80086),r.e(51818),r.e(87385),r.e(58415),r.e(79637),r.e(48898),r.e(61652),r.e(23237),r.e(156),r.e(12937),r.e(1809),r.e(29935),r.e(55646)]).then(r.bind(r,455646));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(455646,"../create_resources/CreateJobDefinitionModal","lazy",e);return e()})()).useModal})()),l=(0,a.X)(()=>i(function*(){return(yield(()=>{let e=()=>Promise.all([r.e(62280),r.e(51362),r.e(26881),r.e(53214),r.e(90489),r.e(30259),r.e(13962),r.e(22831),r.e(80086),r.e(51818),r.e(87385),r.e(58415),r.e(79637),r.e(48898),r.e(61652),r.e(23237),r.e(156),r.e(12937),r.e(1809),r.e(29935),r.e(30527)]).then(r.bind(r,730527));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(730527,"../create_resources/CreatePipelineDefinitionModal","lazy",e);return e()})()).useModal})()),u=(0,a.X)(()=>i(function*(){return(yield(()=>{let e=()=>Promise.all([r.e(62280),r.e(51362),r.e(26881),r.e(53214),r.e(90489),r.e(30259),r.e(13962),r.e(22831),r.e(80086),r.e(51818),r.e(87385),r.e(58415),r.e(79637),r.e(48898),r.e(10297),r.e(24283),r.e(83596),r.e(61652),r.e(23237),r.e(156),r.e(12937),r.e(1809),r.e(29935),r.e(54261),r.e(4680),r.e(78295)]).then(r.bind(r,629472));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(629472,"../create_resources/CreateLakeflowPipelineDefinitionModal","lazy",e);return e()})()).useModal})()),c=(0,a.X)(()=>i(function*(){return(yield(()=>{let e=()=>Promise.all([r.e(62280),r.e(51362),r.e(26881),r.e(53214),r.e(90489),r.e(30259),r.e(13962),r.e(22831),r.e(80086),r.e(51818),r.e(87385),r.e(58415),r.e(79637),r.e(48898),r.e(61652),r.e(23237),r.e(156),r.e(12937),r.e(1809),r.e(29935),r.e(40985)]).then(r.bind(r,240985));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(240985,"../create_resources/CreateDashboardDefinitionModal","lazy",e);return e()})()).useModal})()),d=(0,a.X)(()=>i(function*(){return(yield(()=>{let e=()=>Promise.all([r.e(62280),r.e(20872),r.e(36993),r.e(20022),r.e(59276),r.e(59794),r.e(20556),r.e(20805),r.e(80159),r.e(4065),r.e(75031),r.e(6854),r.e(13686),r.e(44258),r.e(77435),r.e(99237),r.e(44341),r.e(8089),r.e(1377),r.e(27241),r.e(36739),r.e(10297),r.e(24283),r.e(47506),r.e(49019),r.e(73089),r.e(83596),r.e(84736),r.e(47838),r.e(23055),r.e(55404),r.e(34678),r.e(68569),r.e(98120),r.e(95789),r.e(42170),r.e(48387),r.e(97236),r.e(9701),r.e(2720),r.e(59815),r.e(42522),r.e(91322),r.e(88329),r.e(56843),r.e(60467),r.e(616),r.e(64450)]).then(r.bind(r,847446));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(847446,"../add_existing_resources/AddExistingJobModal","lazy",e);return e()})()).useModal})()),f=(0,a.X)(()=>i(function*(){return(yield(()=>{let e=()=>Promise.all([r.e(1809),r.e(616),r.e(62938)]).then(r.bind(r,772117));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(772117,"../add_existing_resources/AddExistingPipelineModal","lazy",e);return e()})()).useModal})()),p=(0,a.X)(()=>i(function*(){return(yield(()=>{let e=()=>Promise.all([r.e(1809),r.e(616),r.e(55116)]).then(r.bind(r,693637));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(693637,"../add_existing_resources/AddExistingDashboardModal","lazy",e);return e()})()).useModal})())},419189:(e,t,r)=>{"use strict";r.d(t,{F:()=>i});var a=r(586356),n=r(409666);let i=(0,r(315592).Xr)({type:"range-slider",channelIndex:{fields:1},validateEditorSpec:e=>({validatedSpec:e}),version:n.B0,getEncodingMapMeta:()=>n.E9,allowDisaggregatedData:!1,allowSelection:!0,isRenderable:a.q,normalizeDecoupledSpec:(e,t)=>e})},425608:(e,t,r)=>{"use strict";r.d(t,{_:()=>n});var a=r(441535);function n(e){if((0,a.W)("databricks.fe.jaws.ensureWorkspacePrefix",!0)&&e&&e.startsWith("/")&&!e.startsWith("/Workspace/")&&"/Workspace"!==e&&!e.startsWith("/Repos/"))return`/Workspace${"/"===e?"":e}`;return e}},428296:(e,t,r)=>{"use strict";r.d(t,{DI:()=>o,WO:()=>n,mk:()=>l,nW:()=>i,pJ:()=>s});var a=r(141078);function n({catalog:e,schema:t,table:r,skip:i=!1,onCompleted:s}){let l=[e,t,r].join(".");return(0,a.IT)(o,{variables:{tableFullName:l},skip:i,onCompleted:s})}let i=(0,a.J1)`
  fragment TableColumnDetails on ManagedcatalogColumnInfo {
    name
    comment
    typeText
    typeName
    typeJson
    partitionIndex
    typePrecision
    typeScale
    typeIntervalType
    position
    nullable
    mask {
      functionName
      usingColumnNames
    }
    metadata {
      displayName
      synonyms
      format {
        numberPlain {
          decimalPlaces {
            type
            places
          }
          hideGroupSeparator
          abbreviation
        }
        numberCurrency {
          decimalPlaces {
            type
            places
          }
          hideGroupSeparator
          abbreviation
          currencyCode
        }
        numberPercent {
          decimalPlaces {
            type
            places
          }
          hideGroupSeparator
        }
        numberBytes {
          decimalPlaces {
            type
            places
          }
          hideGroupSeparator
        }
        date {
          dateFormat
          leadingZeros
        }
        dateTime {
          dateFormat
          timeFormat
          leadingZeros
        }
      }
    }
  }
`,o=(0,a.J1)`
  ${i}
  query GetUcTableInfoQuery($tableFullName: String!) @component(name: "DBSQLX.CatalogExplorer") {
    unityCatalogTableNameReference(fullName: $tableFullName) {
      table {
        managedCatalogTableInfo {
          name
          catalogName
          schemaName
          comment
          owner
          tableType
          tableId
          pipelineId
          securableKind
          securableType
          dataSourceFormat
          columnInfos {
            columns {
              ...TableColumnDetails
            }
          }
          tableConstraints {
            primaryKeyConstraint {
              childColumns
              timeseriesColumns
              name
            }
            foreignKeyConstraint {
              childColumns
              name
              parentColumns
              parentTable
            }
            namedTableConstraint {
              name
            }
          }
          browseOnly
          viewDefinition
          sqlPath
          storageCredentialName
          storageLocation
          deltaSharingValidThroughTimestamp
          createdAt
          createdBy
          updatedAt
          updatedBy
          effectiveAutoMaintenanceFlag {
            value
            inheritedFromType
            inheritedFromName
          }
          effectiveAutoMaintenanceFlag {
            value
            inheritedFromType
            inheritedFromName
          }
          propertiesPairs {
            _json
          }
          deltaRuntimePropertiesKvpairs {
            _json
          }
          deltaUniformIceberg {
            metadataLocation
            convertedDeltaVersion
            convertedDeltaTimestamp
            baseConvertedDeltaVersion
          }
          provisioningInfo {
            state
            details
          }
          rowFilter {
            functionName
            inputColumnNames
          }
        }
      }
    }
  }
`;function s({catalog:e,schema:t,table:r,skip:n=!1,onCompleted:i}){let o=[e,t,r].join(".");return(0,a.IT)(l,{variables:{tableFullName:o},skip:n,onCompleted:i})}let l=(0,a.J1)`
  ${i}
  query GetUcTableJoinTagsQuery($tableFullName: String!) @component(name: "DBSQLX.CatalogExplorer") {
    unityCatalogTableNameReference(fullName: $tableFullName) {
      table {
        managedCatalogTableInfo {
          name
          catalogName
          schemaName
          comment
          owner
          tableType
          tableId
          pipelineId
          securableKind
          securableType
          dataSourceFormat
          columnInfos {
            firstPage: paginatedColumns(pageSize: 20, offset: 0) {
              ...TableColumnDetails
              tags {
                tagKey
                tagValue
                updateTime
                updatedBy
                sourceType
              }
            }
            followingPages: paginatedColumns(pageSize: 40000, offset: 20) {
              ...TableColumnDetails
            }
          }
          tableConstraints {
            primaryKeyConstraint {
              childColumns
              timeseriesColumns
              name
            }
            foreignKeyConstraint {
              childColumns
              name
              parentColumns
              parentTable
            }
            namedTableConstraint {
              name
            }
          }
          browseOnly
          viewDefinition
          sqlPath
          storageCredentialName
          storageLocation
          deltaSharingValidThroughTimestamp
          createdAt
          createdBy
          updatedAt
          updatedBy
          effectiveAutoMaintenanceFlag {
            value
            inheritedFromType
            inheritedFromName
          }
          effectiveAutoMaintenanceFlag {
            value
            inheritedFromType
            inheritedFromName
          }
          propertiesPairs {
            _json
          }
          deltaRuntimePropertiesKvpairs {
            _json
          }
          deltaUniformIceberg {
            metadataLocation
            convertedDeltaVersion
            convertedDeltaTimestamp
            baseConvertedDeltaVersion
          }
          provisioningInfo {
            state
            details
          }
          rowFilter {
            functionName
            inputColumnNames
          }
        }
      }
    }
  }
`},436331:(e,t,r)=>{"use strict";r.d(t,{n:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.lakeview.fe.failInteractionOnRenderError",!1)}},437639:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});var a=r(441535);function n(){let e=(0,a.W)("databricks.fe.dashboardsai.enableUpsertDatasetTool","off");if("on"===e)return!0;if("labs"===e)return(0,a.W)("databricks.datarooms.isGenieLabsEnabled",!1);return!1}},449669:(e,t,r)=>{"use strict";r.d(t,{I:()=>s});var a=r(610435);r(692738);var n=r(876726),i=r(140078),o=r(342411);function s(){let e=(0,o.tz)();return(0,a.Y)(n.S,{title:e.formatMessage(l.title),description:e.formatMessage(l.description),image:(0,a.Y)(i.A,{})})}let l=(0,o.YK)({title:{id:"UeUmAD",defaultMessage:"Error"},description:{id:"BCf2+O",defaultMessage:"An unexpected error has occurred. Please wait a bit and refresh the page or contact support."}})},450275:(e,t,r)=>{"use strict";r.d(t,{d:()=>s,v:()=>n});var a,n=((a={}).Bytes="Bytes",a.KiloBytes="KiloBytes",a.MegaBytes="MegaBytes",a.GigaBytes="GigaBytes",a.TeraBytes="TeraBytes",a.PetaBytes="PetaBytes",a.ExaBytes="ExaBytes",a.ZettaBytes="ZettaBytes",a.YottaBytes="YottaBytes",a);let i={Bytes:0,KiloBytes:1,MegaBytes:2,GigaBytes:3,TeraBytes:4,PetaBytes:5,ExaBytes:6,ZettaBytes:7,YottaBytes:8},o=["Bytes","KiloBytes","MegaBytes","GigaBytes","TeraBytes","PetaBytes","ExaBytes","ZettaBytes","YottaBytes"];function s(e,t="Bytes"){if(e<0)return{size:e,sizeUnit:t};let r=e*Math.pow(1024,i[t]),a=Math.floor(Math.log(r)/Math.log(1024));return{size:r/Math.pow(1024,a=Math.min(Math.max(a,0),o.length-1)),sizeUnit:o[a]}}},453063:(e,t,r)=>{"use strict";r.d(t,{Di:()=>S,fL:()=>I,xy:()=>T,yw:()=>w});var a=r(377063),n=r.n(a),i=r(441535),o=r(5697),s=r(239464),l=r(981158),u=r(26026),c=r(971845),d=r(580500),f=r(82102),p=r(237792),m=r(290939),g=r(123229),h=r(975971),b=r(814796);function y(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function v(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){y(i,a,n,o,s,"next",e)}function s(e){y(i,a,n,o,s,"throw",e)}o(void 0)})}}function E(e){return v(function*(){if(e===p.Kj||function(e){if(!(0,f.$o)().get(e))return!1;return!0}(e))return;yield new Promise((t,r)=>{window.conn?.prefetchNode?.(e,t,r)})})()}function I(e){return v(function*(){yield E(e);let t=(0,f.$o)().get(e);return void 0===t&&(t={id:e}),t.attributes?.type===l.A.PROJECT_TYPE||(0,m.N)(t.id)})()}function T(e){return v(function*({parentId:e,parentName:t,parentPath:r}){var a;let n,i=e;if(void 0===i){if(t){let e=yield(0,c.J)({name:t});i=Number((0,d.Uk)(e.internal_name))}else if(r){let e=yield(0,u.T)(r);i=e?.id}}if(void 0===i)return!1;yield E(i);let s=(0,f.$o)().get(i);return void 0===s&&(s={id:i}),n=(a=s).attributes,n?.type===l.A.PROJECT_TYPE||n?.type===l.A.FOLDER_TYPE&&n?.folderSubtypes?.includes(o.Lx.GitFolder)||(0,m.N)(a.id)}).apply(this,arguments)}function w(e,t){let r=t.isInProject?"_":":",a=n()().format(`YYYY-MM-DD HH${r}mm${r}ss`);switch(t.type){case"notebook":return e.formatMessage({id:"ncB2gd",defaultMessage:"New Notebook {dateString}"},{dateString:a});case"query":return(0,s.r)(t.isInProject);case"file":let i,o=e.formatMessage({id:"UVZiAN",defaultMessage:"New File {dateString}"},{dateString:a});return`${o}.${i=(0,g.$)().get(h.jw)||b.kt,(0,b.lT)(i)}`;case"markdown":return e.formatMessage({id:"6fTJS2",defaultMessage:"New Markdown {dateString}.md"},{dateString:a});case"alert":return e.formatMessage({id:"iEnLhX",defaultMessage:"New Alert {dateString}"},{dateString:a});default:return e.formatMessage({id:"7lWp6w",defaultMessage:"New Asset {dateString}"},{dateString:a})}}let S=()=>(0,i.W)("databricks.fe.notebook.enableCheckForIsInProject",!0)},458259:(e,t,r)=>{"use strict";r.d(t,{Nc:()=>i,Xm:()=>s,ZU:()=>o,m3:()=>n,mk:()=>l});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enableShadowExecution",!1)}function i(){return(0,a.W)("databricks.fe.lakeview.logShadowExecutionDiffToConsole",!1)}function o(){return(0,a.W)("databricks.fe.lakeview.shadowExecutionCompareRows",!0)}function s(){return(0,a.W)("databricks.fe.lakeview.shadowExecutionCompareColumns",!0)}function l(){let e=(0,a.W)("databricks.fe.lakeview.shadowExecutionMaxRowsToCompare",100);return e>0?e:100}},464275:(e,t,r)=>{"use strict";r.d(t,{f:()=>f});var a=r(610435);r(692738);var n=r(342411),i=r(863708),o=r(22191),s=r(726977),l=r(134256),u=r(413484),c=r(101499),d=r(591014);function f({errorBoundaryId:e,children:t}){if(!(0,c.cY)())return(0,a.Y)(m,{});return(0,a.Y)(i.JR,{esComponent:o.Es.LakeBuilder,errorBoundaryId:e??s.s.LakeBuilder,enabled:!0,fallback:p,children:t})}let p=(0,a.Y)(l.T,{showTryAgainButton:!1,message:(0,a.Y)(n.sA,{id:"CpTgdL",defaultMessage:"Something went wrong"}),description:(0,a.Y)(n.sA,{id:"q654BY",defaultMessage:"Our engineers have been notified of this issue and will be working on fixing it as soon as possible."})});function m(){let e=(0,n.tz)();return(0,a.Y)(u.b,{heading:e.formatMessage(d.T.featureNotAvailable),message:e.formatMessage(d.T.featureNotAvailableMessage,{objectName:e.formatMessage(d.T.objectName)})})}},465082:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a3.25 3.25 0 1 0 0 6.5A3.25 3.25 0 0 0 8 1M6.25 4.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M8 9a8.74 8.74 0 0 0-6.836 3.287.75.75 0 0 0-.164.469v1.494c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75v-1.494a.75.75 0 0 0-.164-.469A8.74 8.74 0 0 0 8 9m-5.5 4.5v-.474A7.23 7.23 0 0 1 8 10.5c2.2 0 4.17.978 5.5 2.526v.474z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="UserIcon";let l=s},467535:(e,t,r)=>{"use strict";r.d(t,{V:()=>n});var a=r(507624);class n{columnSchemaMap=new Map;constructor(e){for(const t of e)this.columnSchemaMap.has(t.name)||this.columnSchemaMap.set(t.name,t)}get(e){return this.columnSchemaMap.get(e)}isAggregated(){return Array.from(this.columnSchemaMap.values()).some(e=>(0,a.Zz)(e.transform))}toLegacyV1Namespace(){let e=new Map;for(let t of this.columnSchemaMap.values())null!==t.type&&e.set(t.name,t.type);return e}}},471091:(e,t,r)=>{"use strict";r.d(t,{d:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enableMetricViewFromDataset",!1)}},471395:(e,t,r)=>{"use strict";r.d(t,{a:()=>n});var a=r(441535);function n(){return!(0,a.W)("databricks.fe.lakeview.enableMobxForceUpdateOnRefreshKillSwitch",!1)}},481414:(e,t,r)=>{"use strict";function a(e,t){let r=/\{\{([A-Za-z0-9_]+)}}/g;for(let a of e.matchAll(r)){let e=a[1];if(!(e in t))throw Error(`Missing value for placeholder: {{${e}}}`)}return e.replace(r,(e,r)=>t[r])}r.d(t,{J:()=>a})},482129:(e,t,r)=>{"use strict";let a;r.d(t,{ro:()=>u,vU:()=>l});var n=r(692738),i=r(123229),o=r(976988);function s(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}let l=()=>(0,o.yz)()||(0,i.$)().get("enableEmployeeTools");function u(){let[e,t]=(0,n.useState)(a);return(0,n.useEffect)(()=>{var e;if(!l())return;let n=!1;return(e=function*(){if(a=yield(()=>{let e=()=>Promise.all([r.e(62280),r.e(20022),r.e(59794),r.e(93932),r.e(16548)]).then(r.bind(r,987587));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(987587,"./EmployeeToolsImpl","lazy",e);return e()})(),n)return;t(a)},function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){s(i,a,n,o,l,"next",e)}function l(e){s(i,a,n,o,l,"throw",e)}o(void 0)})})(),()=>{n=!0}},[]),e}},486479:(e,t,r)=>{"use strict";r.d(t,{Z:()=>X});var a=r(563220),n=r(852663),i=r(856770),o=r(115319),s=r(843811),l=r(872658),u=r(513438),c=r(754679),d=r(176500),f=r(664165),p=r(223588),m=r(55087),g=r(97651),h=r(900628),b=r(957780),y=r(271005),v=r(257982),E=r(939096),I=r(647806),T=r(814890);let w=new n.J({encodingType:i.Sc.SINGLE_FIELD,allowedScales:a.o.ALL,fieldRole:o.v.DIMENSION,disallowedColumnTypes:[]}),S=new n.J({encodingType:i.Sc.SINGLE_FIELD,allowedScales:a.o.ALL,fieldRole:o.v.DIMENSION_FOR_HISTOGRAM,disallowedColumnTypes:[]}),k=new n.J({encodingType:i.Sc.SINGLE_FIELD,allowedScales:a.o.ALL,fieldRole:o.v.EITHER_MISSING_NUM_BIN,disallowedColumnTypes:[]}),A=new n.J({encodingType:i.Sc.SINGLE_FIELD,allowedScales:a.o.QUANTITATIVE_ONLY,fieldRole:o.v.MEASURE,disallowedColumnTypes:[]}),_=new n.J({encodingType:i.Sc.MULTI_FIELD_SINGLE_OR_DUAL_SCALE,allowedScales:a.o.QUANTITATIVE_ONLY,fieldRole:o.v.MEASURE,disallowedColumnTypes:[]}),C=new n.J({encodingType:i.Sc.SINGLE_FIELD,allowedScales:a.o.QUANTITATIVE_ONLY,fieldRole:o.v.MEASURE,disallowedColumnTypes:[]}),R=new n.J({encodingType:i.Sc.SINGLE_FIELD,allowedScales:a.o.QUANTITATIVE_ONLY,fieldRole:o.v.BOX_MEASURE,disallowedColumnTypes:[]}),M=new n.J({encodingType:i.Sc.SINGLE_FIELD_WITHOUT_VARIABLE,allowedScales:a.o.QUANTITATIVE_ONLY,fieldRole:o.v.DIMENSION_MISSING_BIN,disallowedColumnTypes:[]}),N=new n.J({encodingType:i.Sc.REGION,allowedScales:a.o.REGION_PROJECTION,fieldRole:o.v.DIMENSION_MISSING_BIN,disallowedColumnTypes:["boolean","date","datetime","complex","float","decimal"]}),P=new n.J({encodingType:i.Sc.SINGLE_FIELD,allowedScales:a.o.ALL,fieldRole:o.v.EITHER_MISSING_NUM_BIN,disallowedColumnTypes:[]}),D=new n.J({encodingType:i.Sc.SINGLE_FIELD,allowedScales:a.o.QUANTITATIVE_ONLY,fieldRole:o.v.MEASURE,disallowedColumnTypes:[]}),x=new n.J({encodingType:i.Sc.SINGLE_FIELD,allowedScales:a.o.ALL,fieldRole:o.v.DIMENSION,disallowedColumnTypes:[]}),L=new n.J({encodingType:i.Sc.FIELD_NAME,allowedScales:a.o.CATEGORICAL_ONLY,fieldRole:null,disallowedColumnTypes:[]}),O=new n.J({encodingType:i.Sc.SINGLE_FIELD,allowedScales:a.o.QUANTITATIVE_ONLY,fieldRole:o.v.MEASURE,disallowedColumnTypes:[]}),F=new n.J({encodingType:i.Sc.SINGLE_FIELD,allowedScales:a.o.CATEGORICAL_ONLY,fieldRole:o.v.DIMENSION,disallowedColumnTypes:[]}),$=new n.J({encodingType:i.Sc.SINGLE_FIELD,allowedScales:a.o.CATEGORICAL_ONLY,fieldRole:o.v.DIMENSION,disallowedColumnTypes:[]}),Y=new n.J({encodingType:i.Sc.FIELD_NAME,allowedScales:a.o.CATEGORICAL_ONLY,fieldRole:null,disallowedColumnTypes:[]}),U=new n.J({encodingType:i.Sc.MULTI_FIELD_NO_SCALE,allowedScales:a.o.ALL,fieldRole:o.v.EITHER_MISSING_NUM_BIN,disallowedColumnTypes:[]}),B=new n.J({encodingType:i.Sc.MULTI_FIELD_NO_SCALE,allowedScales:a.o.ALL,fieldRole:o.v.MEASURE,disallowedColumnTypes:[]}),W=new n.J({encodingType:i.Sc.MULTI_FIELD_NO_SCALE,allowedScales:a.o.ALL,fieldRole:o.v.MEASURE_NO_DISAGGREGATE,disallowedColumnTypes:[]}),V=n.J.text({encodingType:i.Sc.MULTI_FIELD_INDEPENDENT_SCALES,fieldRole:o.v.EITHER_MISSING_NUM_BIN}),j=n.J.text({encodingType:i.Sc.SINGLE_FIELD,fieldRole:o.v.MEASURE}),z=n.J.text({encodingType:i.Sc.SINGLE_FIELD,fieldRole:o.v.EITHER_MISSING_NUM_BIN}),J=new n.J({encodingType:i.Sc.MULTI_FIELD_OR_PARAMETER,allowedScales:a.o.QUANTITATIVE_ONLY,fieldRole:o.v.DIMENSION_MISSING_BIN,disallowedColumnTypes:[]}),q=new n.J({encodingType:i.Sc.MULTI_FIELD_OR_PARAMETER,allowedScales:a.o.ALL,fieldRole:o.v.DIMENSION,disallowedColumnTypes:[]}),G=new n.J({encodingType:i.Sc.NESTED_SINGLE_FIELD,allowedScales:a.o.QUANTITATIVE_ONLY,fieldRole:o.v.MEASURE_NO_DISAGGREGATE,disallowedColumnTypes:[]}),H=new n.J({encodingType:i.Sc.NESTED_SINGLE_FIELD,allowedScales:a.o.QUANTITATIVE_ONLY,fieldRole:o.v.MEASURE_NO_DISAGGREGATE,disallowedColumnTypes:[]}),Q=new n.J({encodingType:i.Sc.NESTED_SINGLE_FIELD,allowedScales:a.o.QUANTITATIVE_ONLY,fieldRole:o.v.MEASURE,disallowedColumnTypes:[]}),K=new n.J({encodingType:i.Sc.SINGLE_FIELD,allowedScales:a.o.CATEGORICAL_ONLY,fieldRole:o.v.DIMENSION,disallowedColumnTypes:[]}),X={DIMENSION_AXIS:w,DIMENSION_AXIS_FOR_HISTOGRAM:S,BASIC_CHART_SINGLE_FIELD_AXIS:k,SINGLE_FIELD_MEASURE_AXIS:A,SINGLE_FIELD_MEASURE_AXIS_WITH_TITLE_ONLY:A,MULTI_FIELD_MEASURE_AXIS:_,COMBO_AXIS:_,FORECAST_LINE_MEASURE_AXIS:C,SINGLE_BOX_MEASURE_AXIS:R,MAP_AXIS:M,MAP_REGION:N,SYMBOL_MAP_GEOMETRY:m.p,CHOROPLETH_MAP_GEOMETRY:m.X,COLOR_FIELD:P,COLOR_QUANTITATIVE_MEASURE_FIELD:D,DIMENSION_COLOR_FIELD:x,COLOR_BY_MULTI_FIELD_AXIS:L,SIZE:O,SHAPE:F,LINE_PATTERN:$,LINE_PATTERN_BY_MULTI_FIELD_AXIS:Y,EXTRA_FIELDS:U,EXTRA_MEASURE_FIELDS:B,EXTRA_MEASURE_FIELDS_NO_DISAGGREGATE:W,PIVOT_ROW_HEADER:b.q,PIVOT_COLUMN_HEADER:h.y,PIVOT_CELL:g.qY,SANKEY_STAGES:y.E,SANKEY_VALUE:v.i,TABLE_V1_COLUMN:E.I,TABLE_V1_SORT_ORDER:I.H,MULTI_FIELD_TEXT:V,TABLE_V2_COLUMN:T.F,SINGLE_MEASURE_TEXT:j,LABEL:z,SLIDER_CONTROL:J,CONTROL:q,CUSTOM_VEGA_VIZ_FIELDS:p.O,COUNTER_VALUE:d.J,COUNTER_VALUE_WITH_PERIOD:f.G,COUNTER_TARGET_WITHOUT_PERIOD:c.Q,COUNTER_TARGET_WITH_PERIOD:u.I,COUNTER_PERIOD:l.b,NESTED_CHART_SORT_BY_MEASURE:G,FILTER_SELECT_SORT_BY_MEASURE:H,NESTED_IMAGE_SIZE:Q,SINGLE_FIELD_WRAP_FACET:K};(0,s.H)(X).map(e=>({name:e,encodingMeta:X[e]}))},489303:(e,t,r)=>{"use strict";r.d(t,{O:()=>i});var a=r(441535),n=r(768117);function i(){return(0,a.W)("databricks.fe.lakeview.enablePendingDatasetQueryProfiler",!1)&&(0,n.h)()}},490137:(e,t,r)=>{"use strict";r.d(t,{K:()=>f});var a=r(247066),n=r(886100),i=r(22191),o=r(748592),s=r(57403),l=r(221095),u=r(105026);let c=new a.q({max:1e3,ttl:36e5}),d=(0,o.W)(()=>new a.q({max:1e3,ttl:36e5,maxSize:(0,u._Z)(),sizeCalculation:l.$}),!0);function f(e,{countTrailingCommentsAsStatement:t=!1}={}){try{let r=(0,u.ed)()?d.getActiveValue():c,a=r.get(e);if(a)return a;let n=s.A.parse(e);return t||function(e){if(e.length>1){var t;let r=e[e.length-1],a=e[e.length-2];t=r.statement,""===t.replace(/\/\*[\s\S]*?\*\//g,"").replace(/--[^\n]*/g,"").trim()&&(a.statement+=r.statement,a.location={first_line:a.location.first_line,first_column:a.location.first_column,last_line:r.location.last_line,last_column:r.location.last_column},e.pop())}}(n),r.set(e,n),n}catch(e){return n.iT.log(i.Es.Editor,"SqlStatementsParseError",{error:e}),[]}}},492951:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("path",{fill:"currentColor",d:"M7.651 3.128a.75.75 0 0 0-1.302 0l-1 1.75A.75.75 0 0 0 6 6h2a.75.75 0 0 0 .651-1.122zM4.75 6.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M7.5 7.25a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1-.75-.75z"}),(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M0 7a7 7 0 1 1 12.45 4.392l2.55 2.55-1.06 1.061-2.55-2.55A7 7 0 0 1 0 7m7-5.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11",clipRule:"evenodd"})]})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="SearchDataIcon";let l=s},496720:(e,t,r)=>{"use strict";r.d(t,{GP:()=>s,XY:()=>l,h1:()=>o});var a=r(928878),n=r.n(a);let i=(e,t)=>{if(Array.isArray(e)&&Array.isArray(t)&&!t.length)return t},o=(...e)=>n()(...e,i),s=e=>JSON.stringify(e,null,2),l=e=>{if(e instanceof Error)return e.isMock=!0,e;return{...e,isMock:!0}}},498250:(e,t,r)=>{"use strict";r.d(t,{aQ:()=>o,xS:()=>i});var a=r(141078);function n(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}let i=(0,a.J1)`
  query GetUcFunctionsQuery($schemaFullName: String!, $maxResults: Int = 100, $pageToken: String)
  @component(name: "DBSQLX.FileBrowser") {
    unityCatalogSchemaNameReference(fullName: $schemaFullName) {
      schema {
        fullName
        functions(maxResults: $maxResults, pageToken: $pageToken) {
          nodes {
            managedCatalogFunctionInfo {
              name
              owner
              createdAt
              securableKind
              securableType
              browseOnly
              functionId
            }
          }
          nextPageToken
        }
      }
    }
  }
`;function o(e,t,r){var a;return(a=function*(e,t,{maxResults:r=100,pageToken:a}={},n){let{data:o}=yield e.query({query:i,variables:{schemaFullName:t,maxResults:r,pageToken:a},fetchPolicy:n});return o.unityCatalogSchemaNameReference?.schema?.functions??null},function(){var e=this,t=arguments;return new Promise(function(r,i){var o=a.apply(e,t);function s(e){n(o,r,i,s,l,"next",e)}function l(e){n(o,r,i,s,l,"throw",e)}s(void 0)})}).apply(this,arguments)}},498635:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{cz:()=>c,nk:()=>l,q0:()=>u});var n=r(940912),i=r(723562),o=r(214056),s=e([o]);o=(s.then?(await s)():s)[0];let d=new Map;function l(e,t,r){var a;a=r.id,d.has(a)||d.set(r.id,{refCount:0,callbacks:new WeakMap,disposer:(0,o.Q)().addEditorAction({...r,run:(0,i.VJ)((e,...t)=>{let a=u(r.id,e);return a&&a(e,...t)},t)})});let s=d.get(r.id);return s.refCount++,s.callbacks.set(e,(0,n.yB)().wrapNoProxy(r.run)),{dispose:()=>{s.refCount--,s.callbacks.delete(e),0===s.refCount&&(s.disposer.dispose(),d.delete(r.id))}}}function u(e,t){return d.get(e)?.callbacks.get(t)}function c(){d.clear()}a()}catch(e){a(e)}})},503217:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{CodeBlockWrapper:()=>n.G,HighlightedCode:()=>i.d,HighlightedCodeForStreaming:()=>i.O,ReadOnlyCodeBlock:()=>o.p});var n=r(981463),i=r(26150),o=r(803134),s=e([i,o]);[i,o]=s.then?(await s)():s,a()}catch(e){a(e)}})},505566:(e,t,r)=>{"use strict";r.d(t,{h:()=>l,p:()=>s});var a=r(610435),n=r(692738),i=r(127833);let o=n.createContext(void 0),s=({children:e})=>{let[t,r]=(0,i.rv)();return(0,a.FD)(o.Provider,{value:{notificationAPI:t},children:[e,r]})},l=()=>{let e=n.useContext(o);if(!e)throw Error("useNotification() hook may only be used within <NotificationProvider>. This is an internal filebrowser component, not a Du Bois component.");return e.notificationAPI}},508247:(e,t,r)=>{"use strict";if(r.d(t,{I:()=>i,U:()=>n}),13057==r.j)var a=r(706274);let n="/ml/evals/:instanceId/*",i=()=>(0,a.K)(n)},509591:(e,t,r)=>{"use strict";r.d(t,{_:()=>i});var a=r(216092),n=r(441535);function i(){return(0,a._)((0,n.W)("databricks.fe.lakeview.labs.enableInsightSchedulesAsNewType","off"))}},513210:(e,t,r)=>{"use strict";r.d(t,{R:()=>v});var a=r(692738),n=r(22191),i=r(342411),o=r(886100),s=r(747129),l=r(934583),u=r(88277),c=r(993533),d=r(402478),f=r(838524),p=r(729786),m=r(74917),g=r(378520),h=r(442628);function b(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}let y=o.iT.sev2BurnRateLogger({esComponent:n.Es.WorkflowsAuthoring,eventId:"lakeflow.pipelines.editor.stop-update",sloTarget:s.i1.P95,minFailures:s.Ip.Min10});function v(){let e=(0,i.tz)(),[t]=(0,d.i)(),r=(0,g.u)(),n=(0,h.yr)(e=>e.updateDetailsStore),o=(0,l.F)(e=>e.updateDetails?.state);return{stopUpdate:(0,a.useCallback)(()=>{var a;return(a=function*(){if(!r||!o||(0,m.B)(o))return;n?.getState().set(e=>({updateDetails:e.updateDetails?{...e.updateDetails,state:c.mtr.STOPPING}:null}));try{let e=yield t({variables:{input:{pipelineId:r}},refetchQueries:(0,f.k)(r)});(0,p._)(e),y.success()}catch(t){y.failure(t),n?.getState().set(e=>({updateDetails:e.updateDetails?{...e.updateDetails,state:e.updateDetails.state===c.mtr.STOPPING?o:e.updateDetails.state}:null})),u.y.addErrorNotification({title:e.formatMessage({id:"2IV1ju",defaultMessage:"Error while stopping pipeline update"}),message:t instanceof p.h?t.message:null})}},function(){var e=this,t=arguments;return new Promise(function(r,n){var i=a.apply(e,t);function o(e){b(i,r,n,o,s,"next",e)}function s(e){b(i,r,n,o,s,"throw",e)}o(void 0)})})()},[e,r,n,t,o])}}},517171:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{COMMAND:()=>T,FILE:()=>w,LcmState:()=>p,LsStatus:()=>m,NOTEBOOK_URI_PREFIX:()=>S,TEMP_COMMAND:()=>I,commandGuidToTempMonacoUri:()=>y,commandModelToMonacoUri:()=>h,commandModelToMonacoUriString:()=>b,documentSelectorForNotebook:()=>g,extractGuidFromMonacoUri:()=>v,findEditorFromCommandUri:()=>f,findEditorFromRangeAndUri:()=>d,getNotebookIdFromUri:()=>E,isBusyLcmState:()=>_,isConnectedLcmState:()=>k,isFileUri:()=>u,isIdleLcmState:()=>A,isLspDocumentUri:()=>c,isMonacoUri:()=>l});var n,i,o=r(645696),s=e([o]);o=(s.then?(await s)():s)[0];let I="tempCommand",T="command",w="file",S="/notebook";function l(e){return e.includes(T)||e.includes(I)}function u(e){return e.startsWith(w+"://")}function c(e){return e.startsWith(S+"/")}function d(e,t,r){var a;let n,i=(a=e.start.line,n=t.findIndex(e=>e.minLineNumber<=a&&a<=e.maxLineNumber&&e.languageServerDocumentUri===r),-1!==n?{idx:n,editorInfo:t[n]}:void 0),o=i?.editorInfo;if(o&&e.end.line<=o.maxLineNumber)return i;return{editorInfo:null,idx:null}}function f(e,t){return t.find(t=>t.commandGuid===v(e))}var p=((n={}).NOT_CONNECTED="not connected",n.CONNECTING="connecting",n.CONNECTED="connected",n.CONNECTED_IDLE="connected idle",n.CONNECTED_BUSY="connected busy",n.STARTUP_ERROR="startup error",n.NOT_READY="not ready",n);let k=e=>"connected"===e||"connected idle"===e||"connected busy"===e,A=e=>"connected idle"===e||"connected"===e,_=e=>"connected busy"===e;var m=((i={}).READY="ready",i.BUSY="busy",i.IDLE="idle",i.NOT_READY="not_ready",i.STARTUP_ERROR="startup_error",i);function g(e){return{scheme:T,pattern:`/${e.id}/*`}}function h(e){return(0,o.getMonacoApi)().Uri.parse(b(e))}function b(e){return`${T}://notebook/${e.notebook()?.id}/${e.get("guid")}`}function y(e){return(0,o.getMonacoApi)().Uri.parse(`${I}://${e}`)}function v(e){return e.split("/").pop()??""}function E(e){if(!e?.path||e.scheme!==T||"notebook"!==e.authority)return;let t=e.path.split("/");if(t.length<2)return;let r=t[1];return isNaN(Number(r))?void 0:Number(r)}a()}catch(e){a(e)}})},518117:(e,t,r)=>{"use strict";r.d(t,{x:()=>o});var a=r(692738),n=r(203796),i=r(394244);function o({drawerKey:e}){let[t,r]=(0,n.n)((0,i.VL)(e)),[s,l]=(0,n.n)((0,i.ur)());return{isOpen:t,subId:s,openIngestionDrawer:(0,a.useCallback)(e=>{r(!0),l(e)},[r,l])}}},522681:(e,t,r)=>{"use strict";r.d(t,{Bb:()=>u,F0:()=>o,H4:()=>f,V9:()=>c,iU:()=>l,mp:()=>s,nQ:()=>d});var a=r(886100),n=r(22191),i=r(107296);function o(e){if("object"!=typeof e||null===e)return!1;return!!(e.config&&(e.response||e.request))}function s(e){if("object"!=typeof e)return!1;return"errorLogType"in e&&"SessionError"===e.errorLogType}function l(e){if("object"!=typeof e)return!1;return e?.isUserError}function u(e){var t;let r=(t=e)&&o(t)?t.response?.status:void 0;return 404===r||403===r}function c(e){if(!e||!o(e))return;let t=e.response?.data;if(!t)return;if("string"==typeof t?.detail)return t.detail;if("string"==typeof t?.message)return t.message;if(Array.isArray(t?.detail))return JSON.stringify(t.detail)}function d(e,t){f(e,t,!0)}function f(e,t,r){let u=c(t);!r&&!o(t)&&t instanceof Error&&!function(e){if("object"!=typeof e||null===e)return!1;return!0===e.isAlertSuppressed}(t)&&!l(t)&&a.iT.sev2(n.Es.DataRooms,"UnexpectedError",t),s(t)||(0,i.G)({title:e,description:u,severity:"error"})}},526147:(e,t,r)=>{"use strict";r.d(t,{O4:()=>a.O4,g2:()=>n.g,kh:()=>n.k,om:()=>a.om});var a=r(356579),n=r(886493)},527219:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{$F:()=>b,$P:()=>y,Ao:()=>v,Vo:()=>h,_N:()=>E,fJ:()=>g,nN:()=>m});var n=r(645696),i=r(22191),o=r(747129),s=r(343312),l=r(124235),u=r(536152),c=r(112326),d=e([n]);function f(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function p(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){f(i,a,n,o,s,"next",e)}function s(e){f(i,a,n,o,s,"throw",e)}o(void 0)})}}function m(e,t,r,a){let n=r.notebook.getCommand(r.commandGuid);if(!n)return a;return t.forEach(t=>{let s=t.name;try{a[s]=t.update({command:n.getCommand(),commandGuid:r.commandGuid,commandModel:n,notebook:r.notebook,editorInstance:e},a[s])}catch(e){u.Q.throttledSev2BurnRate(i.Es.Editor,"MonacoReactionError",o.i1.P95,o.Ip.Min10,!1,e)}}),a}function g(){return(0,l.cX)()?(0,n.getMonacoApi)().KeyMod.WinCtrl:(0,n.getMonacoApi)().KeyMod.CtrlCmd}function h(e){return e.getModel()?.getValue((0,n.getMonacoApi)().EndOfLinePreference.LF)||""}n=(d.then?(await d)():d)[0];let y=(e,t)=>{let{command:r,commandGuid:a,commandModel:n,notebook:i}=t,{getOptions:o,setup:s,tearDown:l,...u}=e;return{...u,getOptions:o?({container:e})=>o({command:r,commandGuid:a,commandModel:n,notebook:i,container:e}):void 0,setup:s?({editorInstance:e,container:t})=>p(function*(){return s({command:r,commandGuid:a,commandModel:n,notebook:i,editorInstance:e,container:t})})():void 0,tearDown:l?({editorInstance:e})=>p(function*(){return l?.({editorInstance:e})})():void 0}},v=e=>e.get("targetClusterId")||e.get("clusterId")||"",E=(e,t)=>{let r=t??e.getModel()?.getLanguageId(),a=e.getModel();a&&r&&((0,n.getMonacoApi)().setModelMarkers(a,"sql"===r?"dbsql":r,[]),(0,n.getMonacoApi)().setModelMarkers(a,"dollar_param",[]))};function b(){let e=(0,n.getEditor)().addActionOptimized;if(!(0,c.t9)())return e;return(...t)=>{let[r,a,n]=t;return e(r,a,{...n,run:(...e)=>{(0,s.Py)({eventName:n.id,ts:Date.now(),eventType:"Monaco",entityType:a,entityId:r.getId(),extra:{position:r.getPosition(),selection:r.getSelection(),layout:r.getLayoutInfo()}});let[t,...i]=e;return n.run(t,...i)}})}}a()}catch(e){a(e)}})},529129:(e,t,r)=>{"use strict";r.d(t,{e_:()=>i,en:()=>n,fc:()=>a});let a="**",n=`/${a}`;function i(e){let t=e.include;if(!t)return null;if(t.endsWith(n))return{type:"folder",path:t.slice(0,-a.length)};return{type:"file",path:t}}},529711:(e,t,r)=>{"use strict";r.d(t,{A:()=>d,y:()=>c});var a,n=r(610435),i=r(692738),o=r(723562),s=((a=s||{})[a.RUNNING=0]="RUNNING",a[a.PAUSED=1]="PAUSED",a);let l=()=>console.error("not implemented"),u=i.createContext({clearAppSubscribers:l,getTopics:l,pauseAppSubscribers:l,publish:l,removeAll:l,resumeAppSubscribers:l,subscribe:l,subscribeOnce:l});function c({children:e}){let t=(0,i.useRef)({}),r=(0,i.useRef)({}),a=(0,o.iB)(),s=(0,i.useCallback)((e,n,i,o)=>{t.current.hasOwnProperty(e)||(t.current[e]=[]),o&&r.current.hasOwnProperty(e)&&(a(n,"sqleReact")(r.current[e]),delete r.current[e]);let s=t.current[e].push({listener:a(n,"sqleReact"),app:i,state:0})-1;return{remove:()=>{delete t.current[e][s]}}},[a]),l=(0,i.useCallback)(e=>{t.current[e]=[]},[]),d=(0,i.useCallback)((e,a)=>{if(!t.current.hasOwnProperty(e))return;t.current[e].forEach(e=>{0===e.state&&e.listener(a)}),r.current[e]=a},[]),f=(0,i.useCallback)((e,t,r)=>{let a=s(e,e=>{t(e),a.remove()},r);return a},[s]),p=(0,i.useCallback)(()=>t.current,[]),m=(0,i.useCallback)((e,r)=>{r&&Object.keys(t.current).forEach(a=>{t.current[a].forEach(t=>{t.app&&(t.app===r||t.app.split("-")[0]===r)&&(t.state=e)})})},[]),g=(0,i.useCallback)(e=>{m(1,e)},[m]),h=(0,i.useCallback)(e=>{m(0,e)},[m]),b=(0,i.useCallback)(e=>{e&&Object.keys(t.current).forEach(r=>{t.current[r]=t.current[r].filter(t=>t.app!==e)})},[]),y=(0,i.useMemo)(()=>({clearAppSubscribers:b,getTopics:p,pauseAppSubscribers:g,publish:d,removeAll:l,resumeAppSubscribers:h,subscribe:s,subscribeOnce:f}),[b,p,g,d,l,h,s,f]);return(0,n.Y)(u.Provider,{value:y,children:e})}let d=()=>(0,i.useContext)(u)},529791:(e,t,r)=>{"use strict";r.d(t,{H:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.dashboardsai.enableEditWidgetsToolV2",!1)}},530734:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>g,SZ:()=>c,kn:()=>m,sc:()=>f});var a=r(665514),n=r(583422),i=r(287578),o=r(785582);function s(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function l(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){s(i,a,n,o,l,"next",e)}function l(e){s(i,a,n,o,l,"throw",e)}o(void 0)})}}let u=e=>!!(e&&(e.refreshCache||e.refreshAnalysis)),c={},d={},f=e=>{d=e??{}},p=()=>{},m=e=>{p=e};class g{dataCatalog;definition;isTemporary;name;path;totalUncappedChildren;childrenPromise;sourceMeta;sourceMetaPromise;constructor(e){if(!e.dataCatalog.connector)throw Error("DataCatalogEntry created without connector");this.dataCatalog=e.dataCatalog,this.path="string"==typeof e.path?e.path.split("."):e.path||[],this.name=this.path.length?this.path[this.path.length-1]:this.getConnector().id,this.isTemporary=e.isTemporary,e.definition?this.definition=e.definition:0===this.path.length?this.definition={type:"source"}:1===this.path.length?this.definition={type:"catalog"}:2===this.path.length?this.definition={type:"schema"}:3===this.path.length&&(this.definition={type:"table"})}reloadSourceMeta(e){return this.sourceMetaPromise=new o.m((e,t)=>l(function*(){"STORYBOOK_INTERNAL_USE_ONLY_DATA_SOURCE_ID_SANA"===this.getConnector().id&&(0,a.ss)(d)||(d=this.getConnector().catalogApi.value);try{(0,a.ss)(d)?this.sourceMeta=yield new a.Ay().fetchMetadata(d,c,this.path):console.warn("Still no catalog API available, cannot fetch "+this.name)}catch(e){t(e||"Fetch failed");return}e(this.sourceMeta)}).call(this)),(0,n.R7)(this.sourceMetaPromise,e)}getParent(){if(!this.path.length)return Promise.reject(Error("Root data catalog entry has no parent"));return this.dataCatalog.getEntry({path:this.path.slice(0,this.path.length-1)})}getAncestor(e){if(e>=this.path.length||e<0)return Promise.reject(`There is no ancestor of level ${e}`);return this.dataCatalog.getEntry({path:this.path.slice(0,e+1)})}getChildren(e){if(this.childrenPromise&&this.childrenPromise.cancelled&&(this.childrenPromise=void 0),!this.childrenPromise&&e&&e.cachedOnly)return o.m.reject(Error("Requested cached results only but children cache is empty"));if(this.childrenPromise&&!u(e))return(0,n.R7)(this.childrenPromise,e);if(!(0,a.ss)(d)&&!(0,a.ss)(this.getConnector().catalogApi.value))return o.m.reject(Error(`No catalog API available, cannot fetch children for length ${this.path?.length} path`));return this.childrenPromise=new o.m((t,r,a)=>l(function*(){let n=!1;a(()=>{n=!0});try{this.sourceMeta=yield this.getSourceMeta(e)}catch(t){e?.silenceErrors||console.warn(t)}if(n)return void r(Error("Cancelled"));if(!this.sourceMeta){r(Error(`No source meta found for length ${this.path?.length} path`)),this.childrenPromise=void 0,this.sourceMetaPromise=void 0;return}if(this.sourceMeta.notFound)return void t([]);let i=this.sourceMeta,o={};i.partition_keys&&i.partition_keys.forEach(e=>{o[e.name]=!0});let s={};i.primary_keys&&i.primary_keys.forEach(e=>{s[e.name]=!0});let l={};i.foreign_keys&&i.foreign_keys.forEach(e=>{e.columns.forEach(t=>{l[t]=`${e.toTable}.${t}`})});let u={};i.clustered_keys&&i.clustered_keys.forEach(e=>{u[e.name]=!0});let c=this.sourceMeta.catalogs||this.sourceMeta.databases||this.sourceMeta.tables_meta||this.sourceMeta.extended_columns||this.sourceMeta.fields||this.sourceMeta.columns||[];c.length>15e3&&(this.totalUncappedChildren=c.length,c.splice(15e3));let d=[],f=0;if(c.forEach(e=>{if(!this.sourceMeta.catalogs||"_impala_builtins"!==e){let t=e.name||e,r=this.dataCatalog.getEntry({path:[...this.path,t]});r.then(r=>{if(!r.definition||void 0===r.definition.index){let a="object"==typeof e?e:{name:e};a.type||(0===this.path.length?a.type="catalog":1===this.path.length?a.type="schema":2===this.path.length?a.type="table":3===this.path.length&&(a.type="column")),this.sourceMeta.partition_keys&&(a.partitionKey=o[t]),this.sourceMeta.primary_keys&&(a.primaryKey=s[t]),this.sourceMeta.foreign_keys&&(a.foreignKey=l[t]),this.sourceMeta.clustered_keys&&(a.clusteredKey=u[t]),a.index=f++,r.definition=a}}).catch(e=>{console.warn(e)}),d.push(r)}}),this.sourceMeta&&("impala"===this.getDialect()||"hive"===this.getDialect())&&this.isComplex()){let e=this.sourceMeta;("map"===e.type?["key","value"]:["item"]).forEach(t=>{let r=e[t];if(r){let e=this.dataCatalog.getEntry({path:[...this.path,t]});e.then(e=>{e.definition&&void 0!==e.definition.index||(r.index=f++,r.isMapValue="value"===t,e.definition=r)}).catch(e=>{console.warn(e)}),d.push(e)}})}Promise.all(d).then(t).catch(r).then(()=>{this.totalUncappedChildren&&p("compose.catalog",{action:"children_limit_exceeded",id:this.totalUncappedChildren})})}).call(this)),(0,n.R7)(this.childrenPromise,e)}attachChildren(e){return l(function*(){if(this.childrenPromise&&e.length){let t=yield this.childrenPromise,r=t.map(e=>e.path.join(".")),a=e.map(e=>e.join(".")).filter(e=>!r.includes(e)).map(e=>this.dataCatalog.getEntry({path:e})),i=yield Promise.all(a),s=new o.m(e=>e(t.concat(i)));this.childrenPromise=(0,n.R7)(s,{})}}).call(this)}getResolvedComment(){if(this.definition&&this.definition.comment)return this.definition.comment;return this.sourceMeta&&this.sourceMeta.comment||""}hasResolvedComment(){return void 0!==this.sourceMeta}getDialect(){return this.getConnector().dialect||this.getConnector().id}getConnector(){return this.dataCatalog.connector}isSource(){return 0===this.path.length}isCatalog(){return 1===this.path.length}isDatabase(){return 2===this.path.length}isTable(){if(3===this.path.length){if(["view","materialized_view","streaming_table"].includes(this.definition?.type?.toLowerCase()??""))return!1;if(this.sourceMeta)return!this.sourceMeta.isView;if(this.definition&&this.definition.type)return"table"===this.definition.type.toLowerCase();return!0}return!1}isView(){if(3===this.path.length&&(this.sourceMeta&&this.sourceMeta.isView||this.definition&&this.definition.type&&"view"===this.definition.type.toLowerCase()))return!0;return!1}isTableOrView(){return 3===this.path.length}isMaterializedView(){return!!this.definition&&!!this.definition?.type&&this.definition?.type?.toLowerCase()==="materialized_view"}isStreamingTable(){return!!this.definition&&!!this.definition?.type&&this.definition?.type?.toLowerCase()==="streaming_table"}isColumn(){return 4===this.path.length}isPrimaryKey(){return!!(this.isColumn()&&this.definition&&this.definition.primaryKey)}isPartitionKey(){return!!(this.definition&&this.definition.partitionKey)}isForeignKey(){return!!this.definition&&!!this.definition.foreignKey}isClusterKey(){return!!this.definition&&!!this.definition.clusteredKey}isKey(){return this.isPartitionKey()||this.isPrimaryKey()||this.isForeignKey()||this.isClusterKey()}isComplex(){let e=this.sourceMeta;return!!(this.path.length>3&&(e&&/^(?:struct|array|map)/i.test(e.type)||this.definition&&this.definition.type&&/^(?:struct|array|map)/i.test(this.definition.type)))}isField(){return this.path.length>3}isArray(){return!!this.sourceMeta&&/^array/i.test(this.sourceMeta.type)||!!this.definition&&!!this.definition.type&&/^array/i.test(this.definition.type)}isMap(){return!!this.sourceMeta&&/^map/i.test(this.sourceMeta.type)||!!this.definition&&!!this.definition.type&&/^map/i.test(this.definition.type)}isMapValue(){return!!this.definition&&!!this.definition.isMapValue}getType(){let e=this.getRawType();return -1!==e.indexOf("<")&&(e=e.substring(0,e.indexOf("<"))),e.toLowerCase()}getRawType(){return this.sourceMeta&&this.sourceMeta.type||this.definition&&this.definition.type||""}getSourceMeta(e){if(this.sourceMetaPromise&&this.sourceMetaPromise.cancelled&&(this.sourceMetaPromise=void 0),!this.sourceMetaPromise&&e&&e.cachedOnly)return o.m.reject(Error("Requested cached results only but source meta cache is empty"));if(!this.sourceMetaPromise||u(e))return this.reloadSourceMeta(e);return(0,n.R7)(this.sourceMetaPromise,e)}getForeignKeyJoins(e){let t=new o.m((t,r,a)=>l(function*(){let n,i=(yield(n=this,l(function*(){if(!n.isTableOrView())return Promise.reject();return n.dataCatalog.getMultiTableEntry({paths:[n.path]})})())).getForeignKeyJoins(e);a(()=>{i.cancel()}),i.then(t).catch(r)}).call(this));return(0,n.R7)(t)}getColor(){if(this.isColumn())return i.Jy.Column;if(this.isTableOrView())return i.Jy.Table;if(this.isDatabase())return i.Jy.Database;if(this.isCatalog())return i.Jy.Catalog;return i.Jy.Keyword}getCategoryId(){if(this.isColumn())return i.wz.Column;if(this.isTableOrView())return i.wz.Table;if(this.isDatabase())return i.wz.Database;if(this.isCatalog())return i.wz.Catalog}}},531835:(e,t,r)=>{"use strict";if(r.d(t,{B:()=>u,T:()=>c}),13057==r.j)var a=r(610435);if(r(692738),13057==r.j)var n=r(382908);var i=r(342411),o=r(441535);if(13057==r.j)var s=r(620839);if(13057==r.j)var l=r(67656);let u=e=>(0,o.W)("databricks.fe.budget_policy.renameServerlessPolicy",!1)?(0,a.Y)(i.sA,{id:"17TJzc",defaultMessage:"Serverless usage policies allow administrators to enforce certain cost attribution tags for serverless compute in notebooks, jobs, and DLT pipelines. Each policy can be assigned to users, groups, or service principals in order to enforce tagging requirements. <link>Learn more</link>",values:{link:e=>(0,a.Y)(n.o.Link,{componentId:"codegen_no_dynamic_webapp_web_js_settings_common_utils_budgetpolicyutils_18",href:l.R.getDbGuideUrl(s.A.BUDGET_POLICY),openInNewTab:!0,children:e})}}):(0,a.Y)(i.sA,{id:"kYtWU5",defaultMessage:"Serverless budget policies allow administrators to enforce certain cost attribution tags for serverless compute in notebooks, jobs, and DLT pipelines. Each policy can be assigned to users, groups, or service principals in order to enforce tagging requirements. <link>Learn more</link>",values:{link:e=>(0,a.Y)(n.o.Link,{componentId:"codegen_no_dynamic_webapp_web_js_settings_common_utils_budgetpolicyutils_35",href:l.R.getDbGuideUrl(s.A.BUDGET_POLICY),openInNewTab:!0,children:e})}});function c(){return(0,o.W)("databricks.budgetPolicies.isBudgetPoliciesEnableOnRegion",!1)&&((0,o.W)("budget_policy",null)??((0,o.W)("databricks.fe.clustercontrols.enableBudgetPoliciesUi",!1)||(0,o.W)("databricks.budgetPolicies.enableBudgetPoliciesFeatureByPercentage",!1)))}},532411:(e,t,r)=>{"use strict";r.d(t,{H6:()=>n,Hz:()=>l,LK:()=>u,Us:()=>c,Vu:()=>s,_1:()=>o,tk:()=>i});var a=r(956935);let n=5,i=.75,o=8,s=e=>e.colors.blue400,l=e=>e.colors.blue600,u=e=>e.colors.blue600;function c(e){let t=e.isDarkMode?e.colors.actionDefaultBackgroundHover:e.colors.blue100;return{handleRight:(0,a.AH)({background:"transparent",borderColor:"transparent",right:0,top:28}),handleLeft:(0,a.AH)({background:"transparent",borderColor:"transparent",left:-3,top:28}),titleText:(0,a.AH)({width:"230px",lineHeight:`${e.typography.lineHeightSm} !important`}),backgroundHack:(0,a.AH)({"&:hover":{backgroundColor:t},borderRadius:"4px",width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:0})}}},532819:(e,t,r)=>{"use strict";r.d(t,{f:()=>a});let a=1e3},537272:(e,t,r)=>{"use strict";r.d(t,{A:()=>c,h:()=>u});var a,n,i,o,s=r(692738);function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(null,arguments)}let u=(0,s.forwardRef)(({title:e,titleId:t,...r},u)=>s.createElement("svg",l({width:14,height:12,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:u,"aria-labelledby":t},r),e?s.createElement("title",{id:t},e):null,a||(a=s.createElement("path",{d:"M8.884 3.179h.427l1.217-1.247.06-.53A5.423 5.423 0 0 0 8.138.13a5.344 5.344 0 0 0-2.743.106A5.448 5.448 0 0 0 3.05 1.694a5.64 5.64 0 0 0-1.36 2.443.647.647 0 0 1 .426-.027L4.55 3.7s.124-.21.188-.198a3.01 3.01 0 0 1 2.015-1.007 2.987 2.987 0 0 1 2.14.684h-.008Z",fill:"#EA4335"})),n||(n=s.createElement("path",{d:"M12.26 4.137a5.639 5.639 0 0 0-1.652-2.73L8.9 3.157c.356.298.642.675.835 1.102.193.427.289.894.28 1.365v.31a1.489 1.489 0 0 1 1.075.457 1.562 1.562 0 0 1 .445 1.101 1.59 1.59 0 0 1-.445 1.101 1.489 1.489 0 0 1-1.075.456h-3.04l-.304.315v1.868l.304.31h3.04a3.89 3.89 0 0 0 2.363-.779 4.049 4.049 0 0 0 1.444-2.069 4.146 4.146 0 0 0-.045-2.543 4.04 4.04 0 0 0-1.516-2.014Z",fill:"#4285F4"})),i||(i=s.createElement("path",{d:"M3.93 11.525h3.04V9.032H3.93c-.216 0-.43-.048-.627-.14l-.427.135-1.226 1.247-.107.437a3.871 3.871 0 0 0 2.387.814Z",fill:"#34A853"})),o||(o=s.createElement("path",{d:"M3.93 3.437a3.891 3.891 0 0 0-2.293.768 4.046 4.046 0 0 0-1.43 1.99A4.145 4.145 0 0 0 .17 8.666c.24.807.72 1.518 1.373 2.033l1.763-1.807a1.526 1.526 0 0 1-.572-.46 1.594 1.594 0 0 1-.253-1.423c.073-.24.202-.46.376-.638s.387-.31.622-.385a1.485 1.485 0 0 1 1.39.26c.193.155.347.356.448.585l1.764-1.806a3.972 3.972 0 0 0-1.394-1.173 3.872 3.872 0 0 0-1.758-.415Z",fill:"#FBBC05"})))),c=r.p+"static/media/gcp.ce232897b364930c830b2b4ca693af25.svg"},537287:(e,t,r)=>{"use strict";r.d(t,{XI:()=>c,ZN:()=>u,cd:()=>n,wL:()=>l});var a=r(993533);function n(e){return!!e&&e!==a.ezR.NONE&&e!==a.ezR.UNSPECIFIED}let i={[a.ezR.GPU_1xA10]:"A10",[a.ezR.GPU_1xH100]:"1xH100",[a.ezR.GPU_8xH100]:"H100"},o={[a.ezR.GPU_1xA10]:"GPU 1xA10",[a.ezR.GPU_1xH100]:"GPU 1xH100",[a.ezR.GPU_8xH100]:"GPU 8xH100"},s=Object.fromEntries(Object.entries(i).map(([e,t])=>[t,e]));function l(e){if(!n(e))return null;return o[e]??null}function u(e){if(!e)return null;return s[e]??null}function c(e){return null!=e&&e in i?e:u(e)}},538893:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M14 6.5V.75a.75.75 0 0 0-.75-.75H4.5A2.5 2.5 0 0 0 2 2.5v10.75A2.75 2.75 0 0 0 4.75 16H6.5v-1.5H4.75c-.69 0-1.25-.56-1.25-1.25V4.792c.306.134.644.208 1 .208h8v1.5zm-9.5-3a1 1 0 0 1 0-2h8v2z",clipRule:"evenodd"}),(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.457 7.906a.75.75 0 0 0-.914 0l-3.25 2.5A.75.75 0 0 0 8 11v4.25c0 .414.336.75.75.75h6.5a.75.75 0 0 0 .75-.75V11a.75.75 0 0 0-.293-.594zM9.5 14.5v-3.13L12 9.445l2.5 1.923V14.5h-1.75V12h-1.5v2.5z",clipRule:"evenodd"})]})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CatalogHomeIcon";let l=s},542260:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{h:()=>l});var n=r(670874),i=r(833584),o=r(521156),s=e([i,o]);[i,o]=s.then?(await s)():s;let l=()=>{let e=(0,o.K4)(e=>e.suggestions.length>0),t=(0,i.Cq)(e=>!!(e.magicState!==n.dy.Empty&&e.suggestedText));return e||t};a()}catch(e){a(e)}})},543963:(e,t,r)=>{"use strict";r.d(t,{DP:()=>n,WB:()=>i,cn:()=>o});var a=r(141078);let n=(0,a.J1)`
  fragment RunStateFragment on JobsRunState {
    durationWarningExceeded
    lifeCycleState
    resultState
    stateMessage
    userCancelledOrTimedout
    queueReason @include(if: $includeQueueReason)
  }
`,i=(0,a.J1)`
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
`,o=(0,a.J1)`
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
`},545626:(e,t,r)=>{"use strict";r.d(t,{Hx:()=>o,S0:()=>s,i2:()=>n});var a=r(5697);let n=new Set([a.Z6.Notebook,a.Z6.File]),i=new Set(Object.values(a.Z6));function o(e){return i.has(e)}function s(e){return"folderNode"in e}},546743:(e,t,r)=>{"use strict";r.d(t,{w:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enableCopyPasteWidgetToAnotherDashboard",!1)}},549063:(e,t,r)=>{"use strict";r.d(t,{C:()=>i});var a=r(441535),n=r(45525);function i(){return((0,a.W)("enable_dlmv_aibi",!1)||(0,a.W)("databricks.fe.lakeview.enableMetricViewEditorIntegration",!1))&&(0,n.Yt)()}},550385:(e,t,r)=>{"use strict";r.d(t,{Qy:()=>Y,T_:()=>j,zt:()=>U});var a=r(115957),n=r(817148),i=r(920174),o=r(30472),s=r(136079),l=r(620275),u=r(326081),c=r(803939),d=r(686560),f=r(441535),p=r(13451),m=r(419374),g=r(120183),h=r(657825),b=r(641760),y=r(662013),v=r(411695),E=r(560287),I=r(805287),T=r(299147),w=r(531835),S=r(944389),k=r(482129),A=r(371303),_=r(822369),C=r(889885),R=r(783487),M=r(502581),N=r(235419),P=r(341957);function D(){return(0,h.fo)()===h.hQ.ServerlessOnly}function x(){let e=(0,I.gz)((0,C.CV)()).redash;return e.allowed&&e.availableInEnvironment}function L(){return(0,A.sT)("databricks.fe.enableWebhookDestinationsForAdminConsole",!1)}function O(){return"AWS"===(0,C.FI)("cloud")&&!D()}function F(){return!!(0,f.W)("databricks.webapp.enableGlobalInitScriptsUi",!0)&&!D()}function $(){return(0,I.gz)((0,C.CV)()).redash.allowed&&0!==(0,C.FI)("orgId")}let Y=()=>{if((0,f.W)("com.databricks.backend.cluster.migrateDefaultPackageRepositoriesEnablementToPreview",!1))return(0,f.W)("pkg_repo_ui_cluster",!1)||(0,f.W)("pkg_repo_api_cluster",!1);return(0,f.W)("databricks.fe.enableDefaultPythonPackageRepositoriesInClassic",!1)},U=()=>(0,f.W)("pkg_repo_dlt",!1);function B(){return(0,v.UO)()||Y()||U()}function W(){let e=(0,c.ew)();return(0,v.UO)()&&e}let V={settings:{user:{"/profile":{"display-name":{},groups:{},"multi-factor-authentication":{[T.B]:()=>(0,f.W)("mfa_seamless_login",null)??(0,f.W)("databricks.auth.enableMfaForAccountSeamlessLogin",!1)},password:{[T.B]:()=>!1}},"/preferences":{"#general":{language:{[T.B]:()=>(0,f.W)("databricks.fe.config.wexp.enableLanguagePanel",!0)}},"#appearance":{theme:{[T.B]:()=>!0}}},"/developer":{links:{"#access-tokens":{[T.B]:()=>N.n4.tokensFeatureFlag()},"#query-snippets":{[T.B]:()=>(0,f.W)("databricks.fe.monolith.enableMigratedSqlQuerySnippetsLocation",!1)?(0,I.HB)():x()}},"#editor-settings":{[T.B]:()=>!(0,l.s4)()},"/access-tokens":{[T.B]:()=>N.n4.tokensFeatureFlag()&&(N.n4.tokensEnabled()||(0,f.W)("databricks.oauth.enableDatabricksSessionGrantTypeInSettingsUi",!1))&&N.n4.canUseTokens()&&!(0,P.C)()},"/query-snippets":{[T.B]:()=>(0,f.W)("databricks.fe.monolith.enableMigratedSqlQuerySnippetsLocation",!1)?(0,I.HB)():x()}},"/linked-accounts":{"#git-integration":{[T.B]:()=>(0,C.FI)("enableProjectTypeInWorkspace",!1)&&!(0,l.s4)()}},"/notifications":{},"/employee-tools":{[T.B]:()=>(0,k.vU)()}},governance:{[T.B]:()=>!!(0,y.Fq)()},workspace:{[T.B]:()=>(0,d.d)("isAdmin_new",!1),"/appearance":{"#sql":{[T.B]:$,plotly:{},"date-format":{},"time-format":{}},"#ai-bi":{[T.B]:()=>$(),"workspace-theme":{}},"#workspace":{name:{[T.B]:()=>R.T.getCloudProvider()!==R.L.Azure&&!(0,u.G)()},label:{[T.B]:()=>!(0,u.G)()}},"#databricks-one":{[T.B]:()=>(0,s.G9)()&&(0,d.d)("isAdmin_new",!1),"databricks-one-homepage":{}}},"/identity-and-access":{"#management-and-permissions":{users:{},groups:{},"service-principals":{[T.B]:()=>!!(0,f.W)("databricks.webapp.enableServicePrincipalsUi",!1)}},"#sso-and-sync":{sso:{[T.B]:()=>!!(0,f.W)("databricks.webapp.enableSingleSignOn",!0)}}},"/flex":{[T.B]:()=>(0,f.W)("databricks.fe.accountsui.isUnityFlexUpgradeEnabled",!1)},"/security":{"#data-security":{"instance-profiles":{[T.B]:O},"table-access-control":{[T.B]:()=>!D()&&S.A.tableAclsFeatureFlag()},"default-data-security-mode":{[T.B]:()=>!(0,u.G)()},"disable-legacy-access":{[T.B]:function(){let e=(0,d.d)("isUcOnlyEnforcementHmsOnlyExcludedAccount",!1);return(!(0,b.SB)()||e)&&(0,b.n_)()&&!(0,h.gK)()}},"disable-dbfs":{[T.B]:function(){return!(0,b.SB)()&&(0,b.n_)()&&(0,f.W)("databricks.settingspolicy.enableDisableLegacyDbfsSetting",!1)&&!(0,h.gK)()}}},"#external-access":{[T.B]:()=>(0,g.V)(),"dashboard-embedding-access-control":{}},"#egress-and-ingress":{"notebook-results-download":{},"notebook-exporting":{},"sql-results-download":{},"mlflow-run-artifact-download":{},"upload-data-using-ui":{},"notebook-table-clipboard-features":{},"store-interactive-notebook-results-in-customer-account":{[T.B]:()=>(0,f.W)("databricks.notebook.workspace-enable-storing-command-results-in-dbfs",!0)&&!(0,h.Lh)()},"volume-files-download":{[T.B]:()=>!0}},"/instance-profiles":{[T.B]:()=>O()&&(0,f.W)("databricks.webapp.tierFlags.enableInstanceProfilesByTier",!0)}},"/compute":{"#default-warehouse":{[T.B]:i.E},"#sql-warehouses":{[T.B]:$},"#environments":{[T.B]:function(){return B()||W()},"default-package-repositories":{[T.B]:B},"default-base-environments":{[T.B]:W}},"#policies":{[T.B]:w.T},"/budget-policies":{[T.B]:()=>(0,w.T)()&&(0,a.zl)(n.g3.COMPUTE_BUDGET_POLICIES)},"#serverless-interactive":{[T.B]:()=>(0,v.UO)(),"serverless-interactive-queries":{}},"#clusters":{[T.B]:()=>(0,I.gz)((0,C.CV)()).workspace.allowed&&!D(),"global-init-scripts":{[T.B]:F},"web-terminal":{},"rstudio-home-directory":{},"libraries-and-init-scripts":{[T.B]:()=>!!(0,f.W)("dff-safe.databricks.manager.unitycatalog.enableLibraryAndInitScriptOnSharedClusters",!1)},"ebs-ssd-gp3":{[T.B]:()=>R.T.getCloudProvider()===R.L.AWS&&!(0,p.e)("enableGp3",!1)},"enforce-user-isolation":{[T.B]:()=>!!(0,A.sT)("databricks.manager.enforceUserIsolation",!1)},"automatic-restart-of-long-running-clusters":{[T.B]:()=>!!(0,f.W)("databricks.webapp.enableAutorestartPanel",!1)&&R.T.getCloudProvider()!==R.L.GCP},"enforce-aws-instance-metadata":{[T.B]:()=>!!(0,f.W)("databricks.webapp.enableImdsV2AdminConfPanel",!1)&&R.T.getCloudProvider()===R.L.AWS},"flexible-node-types":{[T.B]:()=>(0,f.W)("databricks.fe.clustercontrols.enableFlexibleNodeTypesWorkspaceSetting",!1)}},"/global-init-scripts":{[T.B]:F},"/sql-warehouses":{[T.B]:$},"/default-package-repositories":{[T.B]:B},"/workspace-base-environments":{[T.B]:W}},"/usage":{[T.B]:()=>(0,f.W)("workspace_cost_chart",!1)&&(0,a.zl)(n.g3.WORKSPACE_USAGE)},"/development":{"#repos":{[T.B]:()=>(0,C.FI)("enableProjectTypeInWorkspace",!1),"git-url-allow-list":{},"enable-project-allow-list":{},"repos-ipynb-integration":{[T.B]:()=>!0}},"#dabsAuthoring":{[T.B]:()=>(0,C.FI)("enableProjectTypeInWorkspace",!1)&&(0,o.JN)()&&(0,o.qn)()}},"/notifications":{"#notification-destinations":{[T.B]:L},"#email":{sql:{[T.B]:$},mlflow:{[T.B]:()=>!(0,f.W)("dff-safe.disable-databricks-mlflow-autologging",!1)},operationalEmails:{[T.B]:()=>!!(0,f.W)("databricks.fe.notifications.enableOperationalEmailCustomRecipient",!1)}},"#promotional":{inProductTours:{[T.B]:()=>!1}},"/notification-destinations":{[T.B]:L}},"/advanced":{[T.B]:()=>!0,"#access-control":{"workspace-acl":{[T.B]:()=>(0,f.W)("databricks.fe.accesscontrol.enableWorkspaceAdminSettings",!0)||!(0,C.Nm)("enableWorkspaceAclsConfig",()=>"true"===(0,p.e)("enableWorkspaceAclsConfig","false"))},"cluster-and-jobs-acl":{[T.B]:()=>(0,f.W)("databricks.fe.accesscontrol.enableWorkspaceAdminSettings",!0)||!S.A.clusterAclsEnabled()},"password-usage":{[T.B]:()=>!!m.p.enableSingleSignOnLogin()},"workspace-access":{[T.B]:()=>(0,f.W)("databricks.fe.enableWorkspaceAccessCustomerApprovalUI",!1)},"personal-access-tokens":{[T.B]:()=>N.n4.tokensFeatureFlag()},"consumer-default-access-tool":{[T.B]:()=>(0,f.W)("databricks.fe.enableConsumerDefaultAccessSettings",!1)},"restrict-sharing-exclusive-groups":{[T.B]:()=>(0,E.d)()},"#workspace-admin-controls":{[T.B]:()=>!!m.p.enableViewAclsAdminControls(),"workspace-visibility-control":{[T.B]:()=>((0,f.W)("databricks.fe.accesscontrol.enableWorkspaceAdminSettings",!0)||!(0,C.Nm)("enforceWorkspaceViewAcls",m.p.enforceWorkspaceViewAcls))&&!!(0,C.Nm)("enableWorkspaceAclsConfig",()=>"true"===(0,p.e)("enableWorkspaceAclsConfig","false"))},"cluster-visibility-control":{[T.B]:()=>((0,f.W)("databricks.fe.accesscontrol.enableWorkspaceAdminSettings",!0)||!m.p.enforceClusterViewAcls())&&"true"===(0,p.e)("enableClusterAclsConfig","false")},"job-visibility-control":{[T.B]:()=>((0,f.W)("databricks.fe.accesscontrol.enableWorkspaceAdminSettings",!0)||!m.p.enableJobViewAcls())&&!!(0,_.o)()}}},"#storage":{},"#external-integrations":{"sso-ideas-config":{[T.B]:()=>M.t.ssoFeatureFlag()},"sso-support-config":{[T.B]:()=>M.t.ssoFeatureFlag()},"usage-analytics":{[T.B]:()=>(0,f.W)("databricks.webapp.enableHeapAnalyticsAdminUi",!1)}},"#other":{}}}}},j=(0,T.u)(V)},554245:(e,t,r)=>{"use strict";r.d(t,{g:()=>n});var a=r(802472);function n(){return document.getElementById(a.l)||document.getElementById("test-portal-container")||document.body}},555297:(e,t,r)=>{"use strict";r.d(t,{v:()=>n});var a=r(779862);function n(e,t){let r=[],n=(0,a.Gy)(t);for(let[t,{name:a}]of Object.entries(e||{})){let e=n(t);a&&!("number"==typeof e&&isNaN(e))&&r.push({originalValue:e,alias:a})}return r.length>0?r:void 0}},555308:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>eg,BY:()=>J,HM:()=>O,Ho:()=>G,NX:()=>j,OV:()=>eu,QC:()=>ed,W_:()=>W,Ww:()=>eo,X$:()=>U,_g:()=>er,_r:()=>Z,a0:()=>es,aP:()=>q,eO:()=>x,fP:()=>ef,js:()=>D,kB:()=>H,lT:()=>ee,p5:()=>V,pN:()=>Y,rE:()=>ep,rf:()=>ec,sR:()=>B,sS:()=>en,vQ:()=>et,w:()=>K,xE:()=>Q});var a,n=r(610435),i=r(621058),o=r.n(i),s=r(359419),l=r.n(s);r(692738);var u=r(342411),c=r(236560),d=r(485669),f=r(441535),p=r(13451),m=r(278983),g=r(886100),h=r(22191),b=r(747129),y=r(189520),v=r(532188),E=r(32998),I=r(39659),T=r(101499),w=r(250213),S=r(329099),k=r(634685),A=r(88277),_=r(515700),C=r(735919);function R(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function M(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){R(i,a,n,o,s,"next",e)}function s(e){R(i,a,n,o,s,"throw",e)}o(void 0)})}}let N=["date","timestamp"],P=["byte","short","integer","long","float","double"];var D=((a={}).RUNNING="running",a.RUNNING_FROM_RUN_ALL="runningFromRunAll",a.IDLE="idle",a);let x=e=>"idle"!==e,L=(e,t)=>M(function*(){let{commandModelToMonacoUri:a}=yield(()=>{let e=()=>Promise.all([r.e(62280),r.e(21234),r.e(1990),r.e(78632),r.e(39676),r.e(31813),r.e(93932),r.e(95600),r.e(64666),r.e(62762),r.e(49177),r.e(23118)]).then(r.bind(r,517171));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(517171,"./editor-monaco/plugins/utils/python-lsp/types/InternalTypes","lazy",e);return e()})();return{text:t??e.getCommand(),id:e.get("guid"),monacoModelUri:a(e)}})(),O=e=>M(function*(){let t=e.getTopLevelCommands(),r=[];for(let e=0;e<t.length;e++){let a=t[e];if("sql"===a.getLanguage())r.push((yield L(a)));else if("python"===a.getLanguage()||"scala"===a.getLanguage()){let e=yield Y(a.getCommand(),a.getLanguage());r.push(...yield Promise.all(e.map(e=>L(a,e.statement))))}}return r})(),F=(e,t,r,a,n)=>{let i,o,s=[],l={startLineIndex:a.startIndex===a.endIndex?n:a.startLineIndex,startIndex:a.startIndex,endIndex:a.endIndex,sqlStartIndexAtCurrentLine:a.sqlStartIndexAtCurrentLine};for(let e=0;e<t.length;e++){let a=t[e];a&&"sql"===a.language&&(void 0===i&&(i=t[e]?.offset||0,l.sqlStartIndexAtCurrentLine=l.sqlStartIndexAtCurrentLine||i),o=t[e+1]?.offset),r&&void 0!==i&&void 0!==o&&l.startIndex===l.endIndex&&"sql"!==a.language&&(s.push({functionName:"sql",statement:r.substring(i,o),startLineIndex:n,sqlStartIndexAtCurrentLine:i}),i=void 0,o=void 0,l.sqlStartIndexAtCurrentLine=0)}return void 0===i&&void 0===o&&l.endIndex>l.startIndex&&(s.push({functionName:"sql",startLineIndex:l.startLineIndex,statement:e.substring(l.startIndex,l.endIndex),sqlStartIndexAtCurrentLine:l.sqlStartIndexAtCurrentLine}),l.startIndex=l.endIndex,l.startLineIndex=n,l.sqlStartIndexAtCurrentLine=0),l.startIndex+=void 0===i?r.length+1:i,l.endIndex+=void 0===o?r.length+1:o,{sqlStatements:s,indexDetails:l}},$=(e,t,r,a)=>{let n,i,o=[],s={startLineIndex:r.startIndex===r.endIndex?a:r.startLineIndex,startIndex:r.startIndex,endIndex:r.endIndex,sqlStartIndexAtCurrentLine:r.sqlStartIndexAtCurrentLine},l=t=>{let r=e[t];if(!r)return null;if("identifier.python"===r.type&&t+1<e.length&&"delimiter.parenthesis.python"===e[t+1].type&&t+2<e.length&&e[t+2].type.startsWith("string.escape.python")&&t+3<e.length)return t+3;return null},u=0;for(;u<e.length;){let r=l(u);if(null===r){u++;continue}"table("===t.substring(e[u]?.offset,e[r]?.offset-1||0)&&(void 0===n&&(n=e[r]?.offset||0,s.sqlStartIndexAtCurrentLine=s.sqlStartIndexAtCurrentLine||n),i=e[r+1]?.offset,t&&s.startIndex===s.endIndex&&(o.push({functionName:"table",statement:`select * from ${t.substring(n,i)}`,startLineIndex:a,sqlStartIndexAtCurrentLine:n}),n=void 0,i=void 0,s.sqlStartIndexAtCurrentLine=0)),u=r+3}return{sqlStatements:o,indexDetails:s}},Y=(e,t)=>M(function*(){let a=e?.split("\n"),n=[];if(e&&a&&a.length&&("scala"===t||"python"===t)){let{getMonacoApi:i}=yield(()=>{let e=()=>Promise.all([r.e(62280),r.e(21234),r.e(1990),r.e(78632),r.e(39676),r.e(31813),r.e(93932),r.e(95600),r.e(64666),r.e(62762),r.e(49177),r.e(31632)]).then(r.bind(r,645696));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(645696,"@databricks/editor/unifiedEditor","lazy",e);return e()})(),{enableCustomPythonSyntax:o,enableCustomScalaSyntax:s,enableCustomSQLSyntax:l}=yield(()=>{let e=()=>Promise.all([r.e(62280),r.e(6932),r.e(1291),r.e(97768),r.e(24685),r.e(99406),r.e(21234),r.e(92170),r.e(1990),r.e(78632),r.e(39676),r.e(31813),r.e(51362),r.e(26881),r.e(159),r.e(74767),r.e(93932),r.e(95600),r.e(68775),r.e(11022),r.e(43927),r.e(18650),r.e(87122),r.e(12674),r.e(4828),r.e(90489),r.e(64666),r.e(30259),r.e(13962),r.e(22831),r.e(80086),r.e(51818),r.e(87385),r.e(58415),r.e(79637),r.e(62762),r.e(48898),r.e(75165)]).then(r.bind(r,731392));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(731392,"@databricks/editor/commonPlugins","lazy",e);return e()})();o(),l(),s();try{let r=i().tokenize(e,"scala"===t?"custom_scala":"custom_python"),o={startIndex:0,endIndex:0,startLineIndex:0,sqlStartIndexAtCurrentLine:0};r.forEach((t,r)=>{let{sqlStatements:i,indexDetails:s}=F(e,t,a[r],o,r);o=s,i.length&&n.push(...i);let{sqlStatements:l,indexDetails:u}=$(t,a[r],o,r);o=u,l.length&&n.push(...l)}),o.endIndex>o.startIndex&&n.push({functionName:"table",statement:e.substring(o.startIndex,o.endIndex),startLineIndex:o.startLineIndex,sqlStartIndexAtCurrentLine:o.sqlStartIndexAtCurrentLine})}catch(e){}}return n})(),U=e=>"running"===e,B=e=>{switch(e){case"runningFromRunAll":case"running":return!0;default:return!1}},W=(e,t)=>em.isRunningAll({runStatus:e.get("runStatus"),jsRunAllAction:e.get("jsRunAllAction")})||em.isRunningSingleCommand(e,t),V=({runStatus:e,jsRunAllAction:t})=>{if("RunAll"===t||"runningFromRunAll"===e)return!0;return!1},j=e=>e.getTopLevelCommands().some(e=>e.get("submitTime")>0);function z(e,t){let r=e.getResponseHeader("X-Databricks-Reason-Phrase");if(r&&r.length>3)return{statusText:r,specialEventName:"ServerErrorMessage"};let a=e.getResponseHeader("x-databricks-popp-response-code-details");if(a&&a.length>3)return{statusText:a,specialEventName:"PoppPermissionDenied"};let n=e.statusText,i=t instanceof Error?t.message:"string"==typeof t?t:void 0;if(i&&i.length>n.length)return{statusText:i,specialEventName:"ServerErrorMessageFallback"};return{statusText:n,specialEventName:"ServerErrorShortMessage"}}let J=e=>{let t=(0,f.W)("databricks.elasticspark.treeStoreTmpDir","__databricks_jobs_tmp");return!!t&&!!e&&e.startsWith(`/${t}`)},q=e=>!!e&&e.indexOf(".conversations/___DBCONVERSATION___")>=0,G=(e,t)=>{if(void 0!==t)return t===S.Eu.Markdown?"markdown":"table";if(e){let t=e.match(em.firstWordRegex),r=t&&t[1];if("%md"===r)return"markdown";if("%md-sandbox"===r)return"markdown-sandbox"}return"table"},H=e=>{let t="auto"===e?"auto":parseInt(e,10)+"px";if("0px"===t)return"auto";return t},Q=e=>!["markdown","markdown-sandbox","image","images","html","htmlSandbox"].includes(e),K=e=>!["markdown","markdown-sandbox","html"].includes(e);function X(){return o()("#content").offset()?.top||k.Ay.TOPBAR_HEIGHT}let Z=(e,t)=>{let r=e.get("pathName");if(""!==r&&null!=r){let a=r.lastIndexOf("/")+1,n=r.substring(0,a)+t;e.set("pathName",n)}};function ee(){let e=(0,p.e)("enableLegacyNotebookVisualizations",null);if(null!==e)return e;let t=(0,f.W)("databricks.eda.enableLegacyNotebookVisualizations",null);if(null!==t)return t;return!1}function et(e){return!l()(e)}let er=e=>e.get("clusterMetadata")?.sparkVersion||"",ea=[S.Eu.SQL,S.Eu.Python,S.Eu.Scala,S.Eu.R],en=e=>{let t=e.get("targetClusterId");if((0,c.Ul)(t))return!1;switch(e.getEditorMode()){case"notebook":case"designer":return!0;case"query":return"alertV2"!==e.get("type");case"file":let r=e.getFileEditorLanguage();return!!(r&&ea.includes(r))}},ei=RegExp("^queries/(?<queryId>[a-zA-Z0-9-]+)$");function eo(e){let t=e.match(ei);return t?t.groups.queryId:void 0}function es(e){if("query"!==e.get("type")||!(0,v.K3)())return!1;return!e.get("unifiedSqlEditorEnabled")}let el={notebook:y.P.NOTEBOOK,file:y.P.FILE,query:y.P.QUERY,designer:y.P.DESIGNER_FILE};function eu(e){return new Promise(t=>{if(["confirm","select","create","confirmSelect"].includes(e?.unattachedReason))return void t(!0);C.k.confirm({title:(0,n.Y)(u.sA,{id:"NO72b+",defaultMessage:"Cancel current execution?"}),body:(0,n.Y)(u.sA,{id:"dqPb99",defaultMessage:"Do you want to cancel the current execution and re-run the command?"}),okText:(0,n.Y)(u.sA,{id:"wL6q8q",defaultMessage:"Yes"}),cancelText:(0,n.Y)(u.sA,{id:"u83aYb",defaultMessage:"No"}),onCancel:()=>{t(!1)},onOk:e=>{e.stopPropagation(),t(!0)}})})}let ec=()=>(0,d.Fu)(window.location);function ed(e){switch(e){case"notebook":return"notebook-editor";case"file":return"file-editor";case"query":return"query-editor";case"designer":return"designer-file-editor"}}function ef(){A.y.addNotification({uid:"nb-rpc-heavy-load-warning",level:"warning",title:(0,n.Y)(u.sA,{id:"8eOkZ8",defaultMessage:"Databricks is experiencing heavy load"}),message:(0,n.Y)(u.sA,{id:"eSyPCQ",defaultMessage:"Operations may take longer to complete than usual."})})}function ep(){A.y.addNotification({uid:"nb-rpc-heavy-load-error",level:"error",title:(0,n.Y)(u.sA,{id:"MqdC+z",defaultMessage:"Databricks is unresponsive"}),message:(0,n.Y)(u.sA,{id:"6OQ0EU",defaultMessage:"Operations are not completing in a timely manner. Please save your work and try again later."})})}let em={hasRunningStatus:B,isNotIdle:x,isRunning:W,isRunningAll:V,isRunningSingleCommand:(e,t)=>{if("running"===e.get("runStatus"))return!0;return(t?t.where({running:!0}).length:0)+(t?t.where({shouldRun:!0}).length:0)>0},isCancelling:(e,t)=>{let r=e.get("runStatus");if("Cancel"===e.get("jsRunAllAction")&&"idle"!==r||t.where({state:"cancelling"}).length>0)return!0;return!1},hasRunBefore:j,handleRpcError:(e,t,r)=>{let a,i;if(4!==e.readyState)a=(0,n.Y)(u.sA,{id:"NMM/gx",defaultMessage:"Network error. Please check your network connection."}),i="NetworkError";else if(403===e.status){let{statusText:t}=z(e,r);a=(0,n.Y)(u.sA,{id:"VJa0DE",defaultMessage:"Permission denied: {statusText}",values:{statusText:t}}),i="PermissionDenied"}else{let t;if(t=e.statusText,400===e.status&&"unified-query-editor-unavailable"===t)a=(0,n.Y)(u.sA,{id:"Skfl3U",defaultMessage:"This query does not have the new SQL editor enabled and can only be opened in the classic SQL editor."});else{let t;if(t=e.statusText,409===e.status&&null!==t&&/Node named '.*?' already exists/.test(t)){let{statusText:t}=e;a=(0,n.Y)(u.sA,{id:"nTrRBM",defaultMessage:"Name conflict error: {statusText}",values:{statusText:t}})}else{let{statusText:t,specialEventName:o}=z(e,r);a=(0,n.Y)(u.sA,{id:"mjQkkg",defaultMessage:"Server error: {statusText}",values:{statusText:t}}),i=o||"ServerError"}}}C.k.confirm({title:(0,n.Y)(u.sA,{id:"xxzo20",defaultMessage:"A problem has occurred"}),body:a,cancelText:(0,n.Y)(u.sA,{id:"aLsIym",defaultMessage:"Close"}),okText:(0,n.Y)(u.sA,{id:"sv9wGG",defaultMessage:"Reload page"}),onOk:()=>{window.location.reload()}}),(0,m.y)("clientsideEvent",{eventName:i,eventType:"NotebookRpcError",httpStatusCode:e.status,errorName:e.statusText})},attachToCluster:(e,t)=>{let r=t.id;e.attach(r,{onError:t=>{let a=t&&t.statusText;a&&a.startsWith("Failed to attach")?C.k.confirm({title:(0,n.Y)(u.sA,{id:"opb1IS",defaultMessage:"Failed to attach notebook"}),body:(0,n.Y)(u.sA,{id:"g/zpme",defaultMessage:"{errorMsg} Do you want to force re-attach? This will clear all computed variable values from this notebook.",values:{errorMsg:a}}),okText:(0,n.Y)(u.sA,{id:"kKQnYY",defaultMessage:"Yes"}),cancelText:(0,n.Y)(u.sA,{id:"nyV6GF",defaultMessage:"No"}),onOk:()=>e.detachAndAttach(r)}):em.handleRpcError(t)}})},isNumeric:e=>e instanceof _.Ay.AtomType&&(P.includes(e.typeName)||e.typeName&&"string"==typeof e.typeName&&e.typeName.startsWith("decimal")),isJobNotebook:J,isDateType:e=>e instanceof _.Ay.AtomType&&N.includes(e.typeName),firstWordRegex:/(\S+)(?:\s|\n|$)/,getDisplayType:G,fixLength:H,isDownloadable:Q,isResizable:K,isOutOfView:e=>{if(0===e.length)return!1;let t=o()(window),r=e.offset().top,a=e.height(),n=t.height();if(0===n)return!1;if(r+a<X()||r>n)return!0;return!1},isElementVisibleOnNotebook:e=>{let t=e.getBoundingClientRect(),r=X(),a=t.top>=r&&t.top<=(window.innerHeight||document.documentElement.clientHeight),n=t.bottom>=r&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight);return a||n},detachNotebooks:(e,t,r)=>{if(!Array.isArray(e))return void console.error("NotebookUtilities.detachNotebooks takes a list of notebook ids");return o().ajax({type:"POST",url:"/notebook/detach",data:JSON.stringify({notebookIds:e}),success:t,error:r,dataType:"json"})},updateNotebookPathAfterRename:Z,updateNotebookPathName:(e,t)=>{if(void 0===t)return;let r=e.get("name"),a=e.get("parentId");if(!a)return;let n=t.get(a);n?e.set("pathName",n.get("pathName")+"/"+r):window.conn.prefetchNode(a,()=>{let n=t.get(a);n?e.set("pathName",n.get("pathName")+"/"+r):g.iT.sev2BurnRate(h.Es.Notebooks,"notebookRenameUnableToFindParent",b.i1.P99,b.Ip.Min10,!1,{parentId:a,notebookId:e.get("id"),disableSidebarPrefetch:!0})})},isStructureStreamingCommand:et,getLanguageOptions:function(){return Object.keys(S.I1).map(e=>{let t=S.I1[e];return{label:S.l4[t],value:t}})},getSparkVersion:er,extractQueryIdFromResourceName:eo,isEligibleForUnsupportedQueryFallback:es,getRecentAssetId:e=>{switch(e.getEditorMode()){case"notebook":case"file":case"designer":return e.id.toString();case"query":if("query"!==e.get("type"))return e.id.toString();let t=e.getQueryId();if(!t)throw Error(`invalid query resource name ${e.get("resourceName")}`);return t}},getRecentAssetType:e=>{let t=e.getEditorMode();if("designer"===t&&!(0,T.dD)())return y.P.NOTEBOOK;return el[t]},runCommandConfirmation:eu,confirmNewSessionIfCatalogOrSchemaChanged:e=>M(function*(){if("query"!==e.getEditorMode()||"alertV2"===e.get("type"))return!0;let t=e.get("targetClusterId");if((0,c.Ul)(t))return!0;let r=e.getNotebookMetadata()?.sqlQueryOptions,a={catalog:r?.catalog||"",schema:r?.schema||""},i=e.get("sessionCatalogAndSchema");if(!e.isAttached())return!0;if(!i)return(0,f.W)("databricks.notebook.enableUnifiedSqlEditorSessionSupportForWarehouses",!1)&&(yield e.detachAndAttach(e.get("targetClusterId"))),!0;let o={catalog:i?.catalog||"",schema:i?.schema||""},s=o.catalog!==a.catalog,l=o.schema!==a.schema;if(!s&&!l)return!0;let d=new I.y;C.k.confirm({title:(0,n.Y)(u.sA,{id:"PXcYNF",defaultMessage:"Start new session?"}),body:(0,n.Y)(u.sA,{id:"E2vKa4",defaultMessage:`The {changeType, select,
          catalogAndSchema {catalog and schema have}
          catalogOnly {catalog has}
          other {schema has}
        } changed. A new session is required to run queries with the updated {changeType, select,
          catalogAndSchema {catalog and schema}
          catalogOnly {catalog}
          other {schema}
        }. Would you like to start a new session?`,values:{changeType:(()=>{if(s&&l)return"catalogAndSchema";if(s)return"catalogOnly";return"schemaOnly"})()}}),okText:(0,n.Y)(u.sA,{id:"sn+eYw",defaultMessage:"Yes, start session and run"}),cancelText:(0,n.Y)(u.sA,{id:"z/mZtf",defaultMessage:"No, cancel run"}),onCancel:()=>{d.resolve(!1)},onOk:e=>{e.stopPropagation(),d.resolve(!0)}});let p=yield d.promise;if(e.recordClientsideEvent(p?"usqle.confirmNewSessionForMst.confirmed":"usqle.confirmNewSessionForMst.rejected"),!p)return!1;return yield e.detachAndAttach(e.get("targetClusterId")),!0})(),isValidNotebookUrl:ec,extractSqlStatements:F,extractSqlStatementsFromSparkTable:$,extractSqlCommandsFromPythonOrScala:Y,displaySTSCredentialsRefreshModal:function(){let e=window.location.pathname+window.location.search,t=btoa(window.location.hash),r=`/saml/auth?hash=${t}&next_url=${btoa(e)}`;C.k.confirm({title:(0,n.Y)(u.sA,{id:"2h94R0",defaultMessage:"New STS session for IAM role is required."}),body:(0,n.Y)(u.sA,{id:"mA9fOP",defaultMessage:"The STS session for your IAM role is about to expire. Please click here to get a new session."}),onOk:()=>{window.location.replace(r)}})},supportsWidgets:en,notebookNameAsDisplayTitle:function(e,t){if(!e)return e;if("query"===t||"alert"===t)return(0,E.w)(e);if("designer"===t)return(0,w.qk)(e);return e},displayTitleToNotebookName:function(e,t,r){if("designer"===t)return(0,w.sG)(e,r);return e},isQuery:function(e){return"query"===e.getEditorMode()&&"query"===e.get("type")}},eg=em},556215:(e,t,r)=>{"use strict";r.d(t,{L4:()=>s,l3:()=>o,nb:()=>l});var a,n=r(342411),i=r(357548),o=((a={}).MY_ORGANIZATION="My organization",a.DELTA_SHARES_RECEIVED="Delta Shares received",a.LEGACY="Legacy",a.OUTSIDE_WORKSPACE="Outside this workspace",a.HOME_VOLUME="Home volume",a);let s={"My organization":(0,n.zR)({id:"EiZa9Z",defaultMessage:"My organization"}),"Delta Shares received":(0,n.zR)({id:"Mfcnof",defaultMessage:"Delta Shares received"}),Legacy:(0,n.zR)({id:"WWW5DS",defaultMessage:"Legacy"}),"Outside this workspace":(0,n.zR)({id:"9JBqq2",defaultMessage:"Outside this workspace"}),"Home volume":i.A};function l(e,t,r,a,n){let i=[];for(let[o,s]of e){let e=t(o);i.push({id:r(e),data:e,children:s.map(e=>({id:r(e),data:e})),metadata:a(o),defaultExpanded:n?.(o)})}return i}},559499:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{BE:()=>c,BI:()=>g,Fx:()=>f,jl:()=>d,nv:()=>p,oy:()=>u});var n=r(645696),i=r(963404),o=r(517171),s=e([n,o]);function l(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}[n,o]=s.then?(await s)():s;let m=new i.H$,g=new i.H$;function u(e,t,r){m.set(e,t),r&&g.set(r,{editorInstance:t,commandGuid:e}),(0,n.getMonacoApi)().getModel((0,o.commandGuidToTempMonacoUri)(e))?.dispose()}function c(e,t){m.delete(e),t&&g.delete(t)}function d(e){return m.get(e)}function f(e,t){var r;return(r=function*(){return g.asyncGet(e,t).then(({editorInstance:e})=>e)},function(){var e=this,t=arguments;return new Promise(function(a,n){var i=r.apply(e,t);function o(e){l(i,a,n,o,s,"next",e)}function s(e){l(i,a,n,o,s,"throw",e)}o(void 0)})})()}function p(e){return g.get(e)?.editorInstance}a()}catch(e){a(e)}})},560529:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("path",{fill:"currentColor",d:"M11.25 8a.75.75 0 0 1-.375.65l-3.75 2.165A.75.75 0 0 1 6 10.165v-4.33a.75.75 0 0 1 1.125-.65l3.75 2.165a.75.75 0 0 1 .375.65"}),(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0",clipRule:"evenodd"})]})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="PlayCircleIcon";let l=s},569481:(e,t,r)=>{"use strict";r.d(t,{C5:()=>s,IY:()=>d,LJ:()=>l,QR:()=>c,Zp:()=>p,_$:()=>g,g8:()=>m,ge:()=>u,jS:()=>b,sW:()=>h,uP:()=>f,wU:()=>y});var a,n,i,o=r(342526);let s={Table:"PipelineGraphTableNode",View:"PipelineGraphViewNode",External:"PipelineGraphExternalNode",Sink:"PipelineGraphSinkNode"},l=100,u=o.lW.LeftToRight,c=100,d=50;function f({isNewDesign:e}){return e?{width:250,height:100}:{width:280,height:136}}var p=((a={}).DEFAULT="PipelineGraphNode",a.DETAILS_PAGE="PipelineDetailsNode",a.REFRESH_SELECTION="RefreshSelectionNode",a.SELECTION="PipelineSelectionNode",a),m=((n={}).SELECTED="SELECTED",n.HOVERED="HOVERED",n.DISABLED="DISABLED",n.IDENTIFIED="IDENTIFIED",n.RELATED_TO_CURRENT_FILE="RELATED_TO_CURRENT_FILE",n.NONE="NONE",n),g=((i={}).HIGHLIGHTED="HIGHLIGHTED",i.FADED="FADED",i.NONE="NONE",i);let h=600,b=20,y=50},569885:(e,t,r)=>{"use strict";r.d(t,{EY:()=>w,Qw:()=>T,ZP:()=>I,bA:()=>S,ns:()=>E});var a=r(692738),n=r(141078),i=r(837213),o=r(441535),s=r(169750),l=r(21994),u=r(667936),c=r(880797),d=r(267647),f=r(222006),p=r(570512),m=r(935963),g=r(607030),h=r(511022),b=r(629033);function y(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function v(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){y(i,a,n,o,s,"next",e)}function s(e){y(i,a,n,o,s,"throw",e)}o(void 0)})}}let E="/optimize",I="Optimize my code",T=`You are an SQL Analyst and performance expert in Databricks SQL. Your job is first to find some of the following optimizations, then propose a new SQL query in a code block with the optimizations applied.

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
`,w="optimizeCodeAgent",S=({getTablesInAllCodeBlocks:e,source:t,userId:r,...y})=>{let I=(0,n.mK)();return(0,a.useMemo)(()=>({name:w,makeContext:(0,d.x)({makeContext:({context:t={},userMessage:a,promptId:n})=>v(function*(){let{currentCodeBlock:i={language:"",code:""}}=t??{},{language:d,code:E}=i,T={index:1,sourceMap:{}},S={contextObject:t,apolloClient:I,agentName:w,userMessage:a,lakesenseTraceId:n,getTablesInAllCodeBlocks:e,citations:T,promptBuilderOptions:{isCompletion:(0,o.W)("databricks.fe.editor.enableCitationV2",!1)},...y},k={[s.E.RELEVANT_TABLE]:()=>(0,l.TN)({...S}),[s.E.USER_QUERIES]:()=>(0,u.$O)({...S,userId:r}),[s.E.NOTEBOOK_CELLS]:()=>(0,f.Bc)({...S,userId:r}),[s.E.DOCS_SEARCH]:()=>v(function*(){let e=yield(0,h.kA)({model:(0,m.f)(),messageHistory:[],newUserMessage:{role:g.oW.user,content:`The Databricks SQL query is:
\`\`\`sql
${E}
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
`},metadata:{clientId:b.O.EditorAssistant,traceId:n??"",agentName:w},stream:!1}),t=e[0].message.content?.toLowerCase().split("\n").filter(e=>""!==e.trim()).map(e=>`"${e}"`).join(" OR ")??"/optimizer optimize SQL";return(0,c.ar)({...S,query:t})})()},A=yield Promise.all(Object.values(k).map(e=>e())),_=A.filter(e=>""!==e.prompt).map(e=>e.prompt.slice(0,6e3)).join("\n");return{prompt:`Here is the sql code to optimize: 
\`\`\`${d}
${E}
\`\`\`
${_}`,citations:T,...(0,p.Az)(A)}})(),agentName:w}),userMessageMatchesAgent:e=>e.startsWith(E),extractHistory:()=>[],get model(){return(0,m.f)()},instructions:e=>T+(e.includes("gpt-4")?(0,o.W)("databricks.fe.editor.enableCitationV2",!1)?`

${i.u4}`:`

${i.nA}`:"")+(e.includes("gpt-4")?`
${i.Eq}`:""),responseFormat:(0,o.W)("databricks.fe.editor.streamingStructureOutput",!1)?k:void 0}),[I,e,y,r])},k={type:"json_schema",json_schema:{strict:!0,name:"response",schema:{type:"object",properties:{response:{type:"string",description:"Optimized code"},citations:{type:"array",items:{type:"object",properties:{url:{type:"string",description:"Url of the citation, link of the citation"},text:{type:"string",description:"Name of a citation, it can be several words that describe the citation"},type:{type:"string",description:"Type of a citation, it can be a doc, notebook, query ..."}},description:"If you cite anything in the context BEGIN_RELATED_PASSAGES part to generate the optimize code, please provide the citation here",required:["url","text","type"],additionalProperties:!1}}},required:["response","citations"],additionalProperties:!1}}}},570942:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("path",{fill:"currentColor",d:"M8 1c1.878 0 3.583.74 4.84 1.943l.66.596V2H15v4h-4V4.5h1.326l-.491-.443-.009-.008-.01-.009a5.5 5.5 0 1 0 .083 7.839l1.064 1.057A7 7 0 1 1 8 1"}),(0,a.Y)("path",{fill:"currentColor",d:"M6.375 5.186a.75.75 0 0 1 .75 0l3.75 2.165.083.055a.75.75 0 0 1-.083 1.243l-3.75 2.166A.75.75 0 0 1 6 10.165v-4.33a.75.75 0 0 1 .375-.65"})]})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="RefreshPlayIcon";let l=s},572411:(e,t,r)=>{"use strict";r.d(t,{i:()=>o});var a=r(610435);r(692738);var n=r(487404),i=r(59723);let o=({children:e})=>(0,a.Y)(n.f,{children:(0,a.Y)("span",{css:i.Q,children:e})})},572538:(e,t,r)=>{"use strict";r.d(t,{Vl:()=>i,ih:()=>o});var a=r(141078);function n(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}let i=(0,a.J1)`
  query GetUcVolumesQuery($schemaFullName: String!, $maxResults: Int = 100, $pageToken: String)
  @component(name: "DBSQLX.FileBrowser") {
    unityCatalogSchemaNameReference(fullName: $schemaFullName) {
      schema {
        fullName
        volumes(maxResults: $maxResults, pageToken: $pageToken) {
          nodes {
            managedCatalogVolumeInfo {
              name
              owner
              createdAt
              securableKind
              securableType
              browseOnly
              volumeId
            }
          }
          nextPageToken
        }
      }
    }
  }
`;function o(e,t,r){var a;return(a=function*(e,t,{maxResults:r=100,pageToken:a}={},n){let{data:o}=yield e.query({query:i,variables:{schemaFullName:t,maxResults:r,pageToken:a},fetchPolicy:n});return o.unityCatalogSchemaNameReference?.schema?.volumes??null},function(){var e=this,t=arguments;return new Promise(function(r,i){var o=a.apply(e,t);function s(e){n(o,r,i,s,l,"next",e)}function l(e){n(o,r,i,s,l,"throw",e)}s(void 0)})}).apply(this,arguments)}},575654:(e,t,r)=>{"use strict";r.d(t,{w:()=>d});var a=r(610435),n=r(529070),i=r(956935),o=r(692738),s=r(268398),l=r(174541),u=r(705639),c=r(99206);let d=({options:e,onSelect:t,onHighlight:r,className:d})=>{let f=(0,n.u)(),{listboxId:p,selectedValue:m,setSelectedValue:g,highlightedValue:h,handleKeyNavigation:b}=(0,s.w)(),y=(0,o.useRef)(null),v=(0,o.useCallback)(t=>{b(t,e)},[b,e]),E=(0,o.useCallback)((e,r)=>{t?.(r.value),r.href?(e.preventDefault(),window.open(r.href,"_blank")):g(r.value)},[g,t]);return(0,o.useEffect)(()=>{!h&&e.length>0&&r(e[0].value)},[h,r,e]),(0,a.Y)("div",{ref:y,role:"listbox",id:p,className:d,tabIndex:0,onKeyDown:v,"aria-activedescendant":h?`${p}-${h}`:void 0,css:(0,i.AH)({outline:"none","&:focus-visible":{boxShadow:`0 0 0 2px ${f.colors.actionDefaultBorderFocus}`,borderRadius:(0,c.S)(u.c.LIST_ITEM_BORDER_RADIUS,f.borders.borderRadiusSm)}}),children:e.map(e=>(e.renderOption||(t=>(0,a.Y)("div",{...t,children:e.label})))({key:e.value,role:e.href?"link":"option",id:`${p}-${e.value}`,"aria-selected":e.value===m,onClick:t=>E(t,e),onMouseEnter:()=>r(e.value),"data-highlighted":e.value===h,css:[(0,l.RB)(f),{"&:focus":{outline:"none"}}],href:e.href,tabIndex:-1}))})}},581279:(e,t,r)=>{"use strict";r.d(t,{Ge:()=>i,Lt:()=>o,Td:()=>n});var a=r(474402);let n=(0,r(154753).m)({version:1,prefix:"metric_view_assistant_"}),i=e=>{try{let{metadata:t}=JSON.parse(e.originalColumnData?.type_json??"");if(t["metric_view.type"])return{...e,metricViewType:t["metric_view.type"].toUpperCase(),metricViewExpr:t["metric_view.expr"],metricViewWindowFns:t["metric_view.window"]};return null}catch{return null}};function o(e){return i(e)?.metricViewType===a.mf.MEASURE}},583054:(e,t,r)=>{"use strict";r.d(t,{Y:()=>s,g:()=>o});var a=r(926061),n=r(789392),i=r(520747);function o({textFormat:e,globalSeriesType:t,swappedAxes:r}){if(e?.length)return{_template:e.replaceAll(a.sW,(e,a,o)=>{let s=a.slice(2);if((0,n.cJ)(s))return`{{ @@${(0,i.c)({key:s,swappedAxes:r,globalSeriesType:t})}${o?"| "+o:""} }}`;if("yPercent"===s&&r)return`{{ @@xPercent${o?"| "+o:""} }}`;if("yPercent"===s&&"pie"===t)return`{{ @@anglePercent${o?"| "+o:""} }}`;return e})};return{_template:`{{ @@${(0,i.c)({key:"y",globalSeriesType:t,swappedAxes:r})} }}`}}function s({percentValues:e,globalSeriesType:t,swappedAxes:r}){switch(t){case"heatmap":return"{{ @@zVal }}";case"pie":return"{{ @@anglePercent }}";default:if(e&&r)return"{{ @@x }} ({{ @@xPercent }})";if(e)return"{{ @@y }} ({{ @@yPercent }})";return"{{ @@y }}"}}},583422:(e,t,r)=>{"use strict";r.d(t,{R7:()=>a,V5:()=>n,zR:()=>i});let a=(e,t)=>(e&&e.preventCancel&&(!t||!t.cancellable)&&e.preventCancel(),e),n=(e,t)=>{if(e.length!==t.length+1)return!1;return t.every((t,r)=>t===e[r])},i=(e,t,r)=>{if(e?.some(e=>e.name.includes(".")))return e.map(e=>{let t=e.name.split(".");return{nameArr:t,extendedColumnPath:r.concat(t),column:e}}).filter(({extendedColumnPath:e})=>n(e,t)).map(({nameArr:e,column:t})=>({name:e[e.length-1],type:t.type?.toLowerCase()}))}},584631:(e,t,r)=>{"use strict";r.d(t,{p:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.dashboardsai.disableEditWidgetsSchemaRefs",!1)}},585497:(e,t,r)=>{"use strict";r.d(t,{v:()=>p});var a=r(610435),n=r(901478),i=r(692738),o=r(648782),s=r(79128),l=r(157633),u=r(846007),c=r(268204);let d=i.forwardRef(({to:e,target:t,componentId:r,onClick:i,children:o,...d},f)=>{let p=(0,u.t4)(e),m=(0,n.AO)(p);(0,l.k)(m);let g=(0,c.G)(m,{onClick:i,target:t,componentId:r,shouldEmitAnalyticsEvent:!1});return(0,a.Y)(s.$n,{...d,target:t,componentId:r,href:m,ref:f,onClick:g,children:o})}),f=i.forwardRef(({to:e,...t},r)=>{let n=(0,u.t4)(e),i=(0,o.$P)(n);return(0,a.Y)(d,{...t,to:i,ref:r})}),p=i.forwardRef((e,t)=>(0,o.Ri)()?(0,a.Y)(f,{...e,ref:t}):(0,a.Y)(d,{...e,ref:t}))},586791:(e,t,r)=>{"use strict";r.d(t,{y:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.skipDescribeForPublishedMetricView",!1)}},588949:(e,t,r)=>{"use strict";r.d(t,{I:()=>l});var a=r(610435),n=r(497895),i=r(382908),o=r(342411),s=r(939281);function l({multiple:e}){let{theme:t}=(0,n.wn)();return(0,a.Y)("div",{css:{position:"absolute",width:"100%",height:"calc(100% - 8px)",background:t.colors.backgroundSecondary,border:`4px dashed ${t.colors.actionDefaultBorderHover}`,borderRadius:10,display:"flex",top:0,left:0,zIndex:1e3,justifyContent:"center"},children:(0,a.FD)("div",{css:{display:"flex",alignItems:"center",justifyContent:"center",height:"fit-content",gap:t.spacing.md,background:t.colors.actionDisabledBackground,width:"100%"},children:[(0,a.Y)(s.f,{}),(0,a.Y)(i.o.Title,{level:2,css:{opacity:.8},color:"secondary",children:e?(0,a.Y)(o.sA,{id:"sFrtSV",defaultMessage:"Drop one or more files here"}):(0,a.Y)(o.sA,{id:"0XMpj7",defaultMessage:"Drop a file here"})})]})})}},593167:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var a=r(610435),n=r(692738);class i extends n.Component{timeoutId;constructor(e){super(e),this.state={hidden:!0},this.timeoutId=null}componentDidMount(){this.timeoutId=window.setTimeout(()=>{this.setState({hidden:!1})},this.props.delay??60)}componentWillUnmount(){null!==this.timeoutId&&window.clearTimeout(this.timeoutId)}render(){let{children:e}=this.props,{hidden:t}=this.state;if(t)return"";return(0,a.Y)(a.FK,{children:e})}}let o=i},594053:(e,t,r)=>{"use strict";r.d(t,{R:()=>i});var a=r(441535),n=r(549063);function i(){return(0,n.C)()&&(0,a.W)("databricks.fe.lakeview.enableDAGMetricViewPriorityForDatasets",!1)}},594669:(e,t,r)=>{"use strict";r.d(t,{g:()=>s});var a=r(669536),n=r(762047),i=r(529129),o=r(191431);function s(e){if(!(0,o.Q)())return e;let t=new Set((e=(0,n.O)(e).map(a.l)).map(e=>{let t=e.glob?(0,i.e_)(e.glob):null;return t?.type==="folder"?t.path:null}).filter(e=>!!e));return e.filter(e=>!e.glob||!function(e,t){let r=(0,i.e_)(e);if(!r)return!1;for(let e of t.values())if(e!==r.path&&r.path.startsWith(e))return!0;return!1}(e.glob,t))}},597138:(e,t,r)=>{"use strict";r.d(t,{J:()=>s});var a=r(610435),n=r(692738),i=r(218305),o=r(247546);let s=({recordEvent:e,flags:t,renderingLimit:r,maxConsumerDataRows:s,isStyleInverted:l,children:u})=>{let[c,d]=(0,n.useState)(!1),f=(0,n.useMemo)(()=>({recordEvent:e,renderingLimit:r,maxConsumerDataRows:s,isStyleInverted:l,isInPngCapturing:c,setIsInPngCapturing:d}),[e,r,s,l,c,d]);return(0,a.Y)(i.U.Provider,{value:f,children:(0,a.Y)(o.DH.Provider,{value:t,children:u})})}},597163:(e,t,r)=>{"use strict";r.d(t,{m:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enableServicePrincipalPublish",!1)}},597341:(e,t,r)=>{"use strict";if(r.d(t,{N8:()=>g,TU:()=>m,ge:()=>p}),13057==r.j)var a=r(610435);if(r(692738),13057==r.j)var n=r(497895);if(13057==r.j)var i=r(908712);if(13057==r.j)var o=r(112439);if(13057==r.j)var s=r(407075);var l=r(342411);if(13057==r.j)var u=r(878407);if(13057==r.j)var c=r(706274);if(13057==r.j)var d=r(858383);if(13057==r.j)var f=r(81547);let p="/ml/review/*",m=()=>(0,c.K)(p),g=()=>{let e=(0,l.tz)(),{theme:t}=(0,n.wn)(),{pathname:r}=(0,d.zy)(),c=[...r.matchAll(/(?<basePath>\/ml\/review\/\S+\/\d+)(\/\w*)?/g)][0]?.groups?.basePath;if(!c)return null;return(0,a.FD)(a.FK,{children:[(0,a.Y)(f.j,{id:u.I.RagStudioInstructions,icon:(0,a.Y)(i.A,{}),name:e.formatMessage({id:"nhsV6Q",defaultMessage:"Instructions"}),to:`${c}/instructions`,css:{marginTop:t.spacing.sm}}),(0,a.Y)(f.j,{id:u.I.RagStudioReview,icon:(0,a.Y)(o.A,{}),name:e.formatMessage({id:"8JGGr2",defaultMessage:"Chats to Review"}),to:`${c}/review`}),(0,a.Y)(f.j,{id:u.I.RagStudioChat,icon:(0,a.Y)(s.A,{}),name:e.formatMessage({id:"DnN7Ov",defaultMessage:"Test the bot"}),to:`${c}/chat`})]})}},598249:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",d:"M5.25 1a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M10.75 1a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M5.25 6.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M10.75 6.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M5.25 11.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M10.75 11.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="DragIcon";let l=s},599349:(e,t,r)=>{"use strict";r.d(t,{M:()=>f});var a=r(610435),n=r(956935),i=r(692738),o=r(5421),s=r(79128),l=r(497895),u=r(369291),c=r(174541),d=r(639712);let f=(0,i.forwardRef)(({children:e,...t},r)=>{let{theme:i}=(0,l.wn)(),{isInsideTypeaheadCombobox:f,componentId:p}=(0,o.T)();if(!f)throw Error("`TypeaheadComboboxAddButton` must be used within `TypeaheadCombobox`");return(0,a.Y)(s.$n,{...t,componentId:`${p}.add_option`,type:"tertiary",onClick:e=>{e.stopPropagation(),t.onClick?.(e)},onMouseUp:e=>{e.stopPropagation(),t.onMouseUp?.(e)},className:"combobox-footer-add-button",css:{...(0,c.RB)(i),...(0,n.AH)((0,d.dg)({width:"100%",padding:0,display:"flex",alignItems:"center",borderRadius:0,"&:focus":{background:i.colors.actionTertiaryBackgroundHover,outline:"none"}}))},icon:(0,a.Y)(u.A,{}),ref:r,children:e})})},599352:(e,t,r)=>{"use strict";r.d(t,{Z:()=>I});var a=r(610435),n=r(956935),i=r(644091),o=r(813342),s=r.n(o),l=r(692738),u=r(224098),c=r(429608),d=r(497895),f=r(81659),p=r(810152),m=r(705639),g=r(53333),h=r(123252),b=r(661748),y=r(99206);function v(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function E(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){v(i,a,n,o,s,"next",e)}function s(e){v(i,a,n,o,s,"throw",e)}o(void 0)})}}let I=({children:e,customLoadingContent:t,dangerouslyAppendEmotionCSS:r,loading:o,loadingDescription:f,width:p,bottomBarContent:v,topBarContent:I,disableHover:w,onClick:S,href:k,navigateFn:A,anchorProps:_,componentId:C,analyticsEvents:R,shouldStartInteraction:M,...N})=>{let P=(0,b.W)("databricks.fe.observability.defaultComponentView.card",!1),{theme:D}=(0,d.wn)(),x=!s()(I),L=!s()(v),O=(0,n.AH)(function(e){let{theme:t,width:r,hasTopBar:a,hasBottomBar:i,isInteractive:o}=e,s=o?{border:`1px solid ${t.colors.actionDefaultBorderHover}`,boxShadow:t.shadows.md}:{};return(0,n.AH)({color:t.colors.textPrimary,backgroundColor:t.colors.backgroundPrimary,position:"relative",display:"flex",justifyContent:"flex-start",flexDirection:"column",paddingRight:a||i?0:t.spacing.md,paddingLeft:a||i?0:t.spacing.md,paddingTop:a?0:t.spacing.md,paddingBottom:i?0:t.spacing.md,width:r??"fit-content",borderRadius:(0,y.S)(m.c.INFO_CONTAINER_BORDER_RADIUS,t.borders.borderRadiusMd),borderColor:t.colors.border,borderWidth:"1px",borderStyle:"solid","&:hover":s,"&:focus":s,cursor:o?"pointer":"default",boxShadow:t.shadows.sm,transition:"box-shadow 0.2s ease-in-out",textDecoration:"none !important",...(0,c.Cx)(t.options.enableAnimation)})}({theme:D,width:p,hasBottomBar:L,hasTopBar:x,isInteractive:!w&&!o&&(!!k||!!S||!!A)})),F=l.useRef(null),$=v?(0,a.Y)("div",{css:(0,n.AH)((0,n.AH)({marginTop:D.spacing.sm,borderBottomRightRadius:(0,y.S)(m.c.INFO_CONTAINER_BORDER_RADIUS,D.borders.borderRadiusSm),borderBottomLeftRadius:(0,y.S)(m.c.INFO_CONTAINER_BORDER_RADIUS,D.borders.borderRadiusSm),overflow:"hidden"})),children:v}):null,Y=I?(0,a.Y)("div",{css:(0,n.AH)((0,n.AH)({marginBottom:D.spacing.sm,borderTopRightRadius:(0,y.S)(m.c.INFO_CONTAINER_BORDER_RADIUS,D.borders.borderRadiusSm),borderTopLeftRadius:(0,y.S)(m.c.INFO_CONTAINER_BORDER_RADIUS,D.borders.borderRadiusSm),overflow:"hidden"})),children:I}):null,U=x||L?D.spacing.lg:0,B=(0,l.useMemo)(()=>R??(P?[u.s7.OnClick,u.s7.OnView]:[u.s7.OnClick]),[R,P]),W=(0,u.ei)({componentType:u.v_.Card,componentId:C,analyticsEvents:B,shouldStartInteraction:M}),{elementRef:V}=(0,g.z)({onView:W.onView}),j=(0,i.SV)([F,V]),z=(0,l.useCallback)(()=>E(function*(){A&&(yield A())})(),[A]),J=(0,l.useCallback)(e=>E(function*(){W.onClick(e),yield z(),S?.(e),F.current?.blur()})(),[z,W,S]),q=(0,l.useCallback)(e=>E(function*(){W.onClick(e),e.preventDefault(),yield z(),S?.(e)})(),[z,W,S]),G=(0,a.Y)("div",{ref:j,tabIndex:k?void 0:0,...(0,h.VG)(),css:k?[]:[O,r],onClick:o||k?void 0:J,...N,onKeyDown:e=>E(function*(){let t="Enter"===e.key,r=" "===e.key,a=e.target===e.currentTarget;(t||r)&&a&&(yield q(e)),N.onKeyDown?.(e)})(),...W.dataComponentProps,children:o?(0,a.Y)(T,{width:p,customLoadingContent:t,loadingDescription:f}):(0,a.FD)(a.FK,{children:[Y,(0,a.Y)("div",{css:{padding:`0px ${U}px`,flexGrow:1},children:e}),$]})});return k?(0,a.Y)("a",{css:[O,r],href:k,..._,children:G}):G};function T({customLoadingContent:e,width:t,loadingDescription:r}){if(e)return(0,a.Y)(a.FK,{children:e});return(0,a.FD)("div",{css:{width:t??300},children:[(0,a.Y)(f.o,{label:"Loading...",style:{width:"50%"},loadingDescription:r}),[...[,,,].keys()].map(e=>(0,a.Y)(p.I,{label:"Loading..."},e))]})}},602393:(e,t,r)=>{"use strict";r.d(t,{L:()=>d});var a=r(692738),n=r(441535),i=r(660618),o=r(641760),s=r(835756),l=r(945846),u=r(392190);function c(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}let d=({dataSource:e,module:t,debugString:r,isUCSamplesAvailable:d})=>{let f=(0,a.useMemo)(()=>(0,l.A)(t),[t]),p=(0,s.Q_)();return(0,a.useCallback)((a,s,l)=>{var m;return(m=function*(){let c={schema:[]};try{if((0,u.K)([a,s,l]))return c;let f=void 0!==d?!!d&&a===i.lx:(0,o.rA)(a);return{schema:(yield p({catalog:a,schema:s,dataSource:e,table:l,ignoreError:!0,debugString:r??t,ignoreTableNotFound:(0,n.W)("databricks.fe.editor.cacheTableNonFound",!1),fetchSamplesCatalogWithUC:f},{staleTime:3e5})).columns??[]}}catch(e){return f(e,"getTableColumns"),c}},function(){var e=this,t=arguments;return new Promise(function(r,a){var n=m.apply(e,t);function i(e){c(n,r,a,i,o,"next",e)}function o(e){c(n,r,a,i,o,"throw",e)}i(void 0)})})()},[e,r,p,f,t,d])}},609378:(e,t,r)=>{"use strict";r.d(t,{Kr:()=>s,Wz:()=>l,ZY:()=>o});var a=r(141078),n=r(491438);function i(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function o({catalog:e,metastoreScope:t,skip:r=!1,onCompleted:i}){return(0,a.IT)(s,{variables:{catalogName:e??""},context:(0,n.Xe)(t),skip:r,onCompleted:i})}let s=(0,a.J1)`
  query GetUcCatalogInfoQuery($catalogName: String!, $schemasMaxResults: Int = 20, $schemasPageToken: String)
  @component(name: "DBSQLX.CatalogExplorer") {
    unityCatalogCatalogNameReference(fullName: $catalogName) {
      catalog {
        managedCatalogCatalogInfo {
          id
          metastoreId
          name
          browseOnly
          securableKind
          catalogType
          comment
          isolationMode
          connectionName
          deltaSharingValidThroughTimestamp
          owner
          shareName
          providerName
          storageRoot
          storageLocation
          createdAt
          createdBy
          updatedAt
          updatedBy
          optionsKvpairs {
            _json
          }
          propertiesKvpairs {
            _json
          }
          provisioningInfo {
            state
            details
          }
          queryFederationAttributes {
            lastRefreshedTimestamp
          }
          managedEncryptionSettings {
            customerManagedKeyId
            azureKeyVaultKeyId
            azureEncryptionSettings {
              azureTenantId
              azureCmkAccessConnectorId
              azureCmkManagedIdentityId
            }
          }
        }
        schemas(maxResults: $schemasMaxResults, pageToken: $schemasPageToken) {
          nodes {
            managedCatalogSchemaInfo {
              name
              owner
              createdAt
              securableKind
              securableType
              browseOnly
              schemaId
            }
          }
          nextPageToken
        }
      }
    }
  }
`;function l(e,t,r){var a;return(a=function*(e,t,{maxResults:r=20,pageToken:a,metastoreScope:i}={},o){let{data:l}=yield e.query({query:s,variables:{catalogName:t,schemasMaxResults:r,schemasPageToken:a},context:(0,n.Xe)(i),fetchPolicy:o}),u=l.unityCatalogCatalogNameReference?.catalog?.schemas;return{ucSchemas:u?.nodes??[],nextPageToken:u?.nextPageToken??null}},function(){var e=this,t=arguments;return new Promise(function(r,n){var o=a.apply(e,t);function s(e){i(o,r,n,s,l,"next",e)}function l(e){i(o,r,n,s,l,"throw",e)}s(void 0)})}).apply(this,arguments)}},609421:(e,t,r)=>{"use strict";r.d(t,{P:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enablePublishedDashboardAgent",!1)}},613870:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i,_:()=>o});var a=r(441535),n=r(255791);function i(){return(0,a.W)("databricks.fe.lakeview.enableViewQueryMenuItem",!1)}function o(){return(0,n.X)()&&i()&&(0,a.W)("databricks.fe.lakeview.enablePublishedModeViewQueryMenuItem",!1)}},616402:(e,t,r)=>{"use strict";r.d(t,{Of:()=>c,is:()=>m,yH:()=>p});var a=r(610435),n=r(692738),i=r(441535),o=r(411424),s=r(8698),l=r(517625);let u=new Set([l.aF.NOTEBOOK,l.aF.SQLE,l.aF.LAKEVIEW,l.aF.LAKEWATCH,l.aF.DATA_EXPLORER]);function c(e,t){if(!(0,i.W)("databricks.fe.schemabrowser.newTree",!1)||!u.has(e)||t)return!1;return!0}let d=[!1,()=>void 0],f=(0,n.createContext)(null);function p({children:e,schemaBrowserLocation:t,isPostgres:r}){let[i,l]=(0,s.Fg)(o.p.EnableUnifiedSchemaBrowserTreeExplorer),u=c(t,r),m=(0,n.useMemo)(()=>u?[i,l]:d,[u,i,l]);return(0,a.Y)(f.Provider,{value:m,children:e})}function m(){return(0,n.useContext)(f)??d}},617293:(e,t,r)=>{"use strict";r.d(t,{Ef:()=>o,K2:()=>l,oD:()=>s,w1:()=>u});var a=r(29824),n=r(348907),i=r(166893);let o="samples",s="system",l=({catalogName:e,catalogType:t,securableKind:r,isDefaultCatalog:a})=>{if(a)return n.Is.DEFAULT_CATALOG;if((({catalogName:e})=>e===s)({catalogName:e}))return n.Is.SYSTEM_CATALOG;if((({catalogType:e})=>"USER_HOME_CATALOG"===e)({catalogType:t}))return n.Is.USER_HOME_CATALOG;if((({catalogType:e,catalogName:t,securableKind:r})=>e===i.Oc.DELTASHARING_CATALOG||"CATALOG_DELTASHARING"===r||(({catalogName:e})=>e===o)({catalogName:t}))({catalogType:t,catalogName:e,securableKind:r}))return n.Is.SHARED_CATALOG;if((({catalogName:e})=>"hive_metastore"===e)({catalogName:e}))return n.Is.LEGACY_CATALOG};function u(e){if("FUNCTION_FEATURE_SPEC"===e||"FUNCTION_FEATURE_SPEC_DELTASHARING"===e)return a.an.FUNCTION_FEATURE_SPEC;return a.an.FUNCTION}},625066:(e,t,r)=>{"use strict";r.d(t,{BC:()=>o,Us:()=>i,gX:()=>s});var a=r(441535),n=r(774605);function i(e){return!!(0,a.W)("databricks.fe.pythonx.lsp.disablePylspServerInitializationV2",!1)&&(0,n.IX)({behavior:n.Z4.pylspServerDeprecation,sparkVersion:e||""})}function o(){return!!(0,a.W)("databricks.fe.pythonx.lsp.enableLineMagicSanitizerTransformerV3",!0)}function s(e){return!!e?.getLineMagicSanitizationCapability()&&o()}},626152:(e,t,r)=>{"use strict";r.d(t,{K:()=>o});var a=r(747129),n=r(886100);let i={severity:a.Op.Sev2,messageOverride:"Expected value to be never"};function o(e,t,r,o){let s,l={...i,...o};switch(l.severity){case a.Op.Sev1:s=n.iT.sev1;break;case a.Op.Sev2:s=n.iT.sev2;break;case a.Op.Sev3:s=n.iT.sev3;break;default:s=n.iT.sev2}s(t,l.messageOverride,{...r,never:e})}},628363:(e,t,r)=>{"use strict";r.d(t,{I:()=>i});var a=r(692738),n=r(698744);function i({editorInstance:e,afterLineNumber:t,heightInPx:r,heightInLines:o,children:s,scrollOnRender:l,existingSelection:u}){let c=(0,a.useRef)(null),d=(0,a.useRef)({domNode:document.createElement("div"),afterLineNumber:t,heightInPx:r,heightInLines:o});return(0,a.useEffect)(()=>{d.current.afterLineNumber=t,d.current.heightInLines=o,d.current.heightInPx=r,e?.changeViewZones(({layoutZone:a})=>{null!==c.current&&(a(c.current),r&&r>1&&l?requestAnimationFrame(()=>{requestAnimationFrame(()=>{l(e,t),u&&e?.setSelection(u)})}):u&&e?.setSelection(u))})},[t,r,o,e,l,u]),(0,a.useEffect)(()=>(e?.changeViewZones(({addZone:e})=>{c.current=e(d.current)}),()=>{e?.changeViewZones(({removeZone:e})=>{null!==c.current&&(e(c.current),c.current=null)})}),[e]),(0,n.createPortal)(s,d.current.domNode)}},628828:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.ES.1641324.killswitch",!1)}},631209:(e,t,r)=>{"use strict";r.d(t,{H5:()=>n.H5,NQ:()=>n.NQ,Zh:()=>n.Zh,fd:()=>n.fd,se:()=>a.s,wG:()=>n.wG,wg:()=>n.wg});var a=r(888708),n=r(987229)},631661:(e,t,r)=>{"use strict";r.d(t,{f:()=>u,u:()=>l});var a=r(610435),n=r(694762),i=r(339518),o=r(342411),s=r(814515);let l=e=>{let[t,r]=u(e);return(0,a.FD)(a.FK,{children:[e.children(r.open),t]})},u=({componentId:e,title:t,message:r,okText:l,cancelText:u,formatError:c,onConfirm:d,onConfirmCompleted:f,okButtonProps:p,cancelButtonProps:m})=>{let g=(0,s.Y)({action:d,onActionCompleted:f}),{isLoading:h,error:b,visible:y,close:v,trigger:E}=g;return[(0,a.Y)(n.aF,{componentId:e??"codegen_web-shared-ui_src_modals_confirmmodal.tsx_31",visible:y,confirmLoading:h,okText:l||(0,a.Y)(o.sA,{id:"9p8fea",defaultMessage:"Confirm"}),cancelText:u||(0,a.Y)(o.sA,{id:"9h8V8O",defaultMessage:"Cancel"}),onOk:E,okButtonProps:p,onCancel:v,cancelButtonProps:m,title:t,children:(0,a.FD)("div",{style:{display:"flex",gap:"16",flexDirection:"column"},children:[(0,a.Y)("span",{children:r}),b&&(0,a.Y)(i.F,{componentId:e?`${e}.error_alert`:"codegen_web-shared-ui_src_modals_confirmmodal.tsx_60",type:"error",closable:!1,message:c?.(b)||(0,a.Y)(o.sA,{id:"Uiwrou",defaultMessage:"Update action failed for unknown reason"})})]})},"modal"),g]}},632505:(e,t,r)=>{"use strict";r.d(t,{Cc:()=>u,Jc:()=>b,LD:()=>S,Nf:()=>w,UY:()=>m,Vp:()=>k,_d:()=>f,_m:()=>function e(t,r,n,i,s,l,u){if(s&&s.remaining<=0)return;let c=0===t.children.size;void 0===i[r]&&(n[r]=Math.max(n[r],(0,a.Un)({text:t.label,defaultWidth:0,font:u}))),t.isTotalDisplayedAtNode()&&void 0===i[r+1]&&(n[r+1]=Math.max(n[r+1],(0,a.Un)({text:(0,o.gL)(t.label,l),defaultWidth:0,font:u}))),s&&(c||t.isTotalDisplayedAtNode())&&s.remaining--,t.children.forEach(t=>{e(t,r+1,n,i,s,l,u)})},af:()=>h,kI:()=>g,lj:()=>v,n6:()=>E,oW:()=>c,q$:()=>A,qg:()=>y,tj:()=>T,ts:()=>p,vp:()=>I,yt:()=>_,z6:()=>d});var a=r(320507),n=r(97651),i=r(35606),o=r(875533),s=r(819744),l=r(411867);function u(e){let t=[],r=0;for(let a=e.length-1;a>=0;a--)r+=e[a],t[a]=r;return t}function c(e){return f(e)}function d(e){return f(e)}function f(e){return e.reduce((e,t)=>e+t,0)}function p(e,t,r){return Math.min(Math.max(...e.map(e=>(0,a.Un)({text:e,defaultWidth:50,font:r})),s.yL),t)+s.xy}function m(e,t,r){return e?(t?r.find(t=>t.name===e?.fieldName)?.transform:e?.transform)?.fn:void 0}function g(e){if(!(0,n.vb)(e))return"rows";return"columns"===(e.displayAs??"rows")&&e.fields.length>1?"columns":"rows"}function h(e){if(!e)return[];if(!(0,n.vb)(e))return[void 0];if((0,n.V_)(e)){if(0===e.fields.length)return[(0,i.jK)(e.width)];return e.fields.map(()=>(0,i.jK)(e.width))}return e.fields.map(e=>(0,i.jK)(e.width))}function b(e){if(!e)return[];if(!(0,n.vb)(e))return[void 0];if((0,n.F2)(e)){if(0===e.fields.length)return[(0,i.SH)(e.height)];return e.fields.map(()=>(0,i.SH)(e.height))}return e.fields.map(e=>(0,i.SH)(e.height))}function y(e){if(!e||!(0,n.vb)(e))return;return(0,i.jK)(e.headerWidth)}function v(e){if(!e||!(0,n.vb)(e))return;return(0,i.SH)(e.headerHeight)}function E(e){return 1===(0,l.G)(e.cell).length&&I(e)&&T(e)}function I(e){return void 0!==e.rows&&e.rows.length>0}function T(e){return void 0!==e.columns&&e.columns.length>0}function w(e){return(0,l.G)(e.cell).length>0}function S(e){var t;let r;return A(e)||!I(e)&&w(e)&&"rows"===g(e.cell)||(t=e,r=(0,l.G)(t.cell),!I(t)&&1===r.length&&"columns"===g(t.cell))}function k(e){return _(e)||!T(e)&&w(e)&&"columns"===g(e.cell)}function A(e){return(0,l.G)(e.cell).length>1&&"rows"===g(e.cell)}function _(e){return(0,l.G)(e.cell).length>1&&"columns"===g(e.cell)}},634685:(e,t,r)=>{"use strict";r.d(t,{$D:()=>c,Ay:()=>p,Az:()=>f,P5:()=>u,bm:()=>d,dp:()=>l});let a="auto-run-selected-command",n="auto-run-all",i="no-auto-run";var o,s,l=((o={}).RUN_ERROR="RUN_ERROR",o.RUN_TABLE_RESULT_SUBCOMMAND_NO_RUNNABLE_CLUSTER_ATTACHED="RUN_TABLE_RESULT_SUBCOMMAND_NO_RUNNABLE_CLUSTER_ATTACHED",o.SQL_WAREHOUSE_INCOMPATIBLE_WARNING="SQL_WAREHOUSE_INCOMPATIBLE_WARNING",o);let u={state:{NO_CLUSTER_ATTACHED:"NO_CLUSTER_ATTACHED",ALREADY_RUNNING:"ALREADY_RUNNING",COMMAND_EMPTY:"COMMAND_EMPTY",READY:"READY",SELECTED_COMMAND_RUNNING:"SELECTED_COMMAND_RUNNING",COMMAND_LIST_EMPTY:"COMMAND_LIST_EMPTY",BATCH_RUNNING:"BATCH_RUNNING",COMMAND_ID_UNDEFINED:"COMMAND_ID_UNDEFINED"},MAX_COMMAND_TITLE_LENGTH:400,AUTO_RUN_ACCESSED_COMMAND:a,AUTO_RUN_ALL:n,AUTO_RUN_NO_OP:i,AUTO_RUN_ALL_OPTIONS:[a,n,i],TOPBAR_HEIGHT:76,INPUT_BTN_HEIGHT:25,SIDE_NAV_WIDTH:76,SHELL_TOP_CLASS_NAME:"shell-top",SHELL_TOP_JQUERY_NAME:".shell-top",SHELL_TOP_AND_HEADERS:".shell-top, .notebook-header",SCROLL_CONTAINER_CLASS_NAME:"notebook-scrollable-container"},c="navigate",d="move";var f=((s={}).INSPECT_VARIABLE="INSPECT_VARIABLE",s.TABLE_OF_CONTENTS="TABLE_OF_CONTENTS",s.DEBUGGER="DEBUGGER",s.ADD_COMMAND="ADD_COMMAND",s.COMMAND_ERROR="COMMAND_ERROR",s.MOUNT="MOUNT",s.CELL_MAGIC="CELL_MAGIC",s.GENERATE_QUERY_BUTTON="GENERATE_QUERY_BUTTON",s.DELETE_COMMAND="DELETE_COMMAND",s);let p=u},636058:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{p:()=>h});var n=r(610435),i=r(883678),o=r(692738),s=r(361999),l=r(849401),u=r(662415),c=r(894906),d=r(362802),f=r(632515),p=r(344415),m=e([d]);d=(m.then?(await m)():m)[0];let g=(0,i.PA)(function({panelId:e,nonNotebookAssetId:t,renderWithCustomContainer:r}){let a=(0,l.useGetTabsPanelStore)(),i=(0,o.useCallback)(t=>{(0,c.M)(t);let r=t===e?void 0:t;r!==f.e$.CHAT&&((0,p.lr)(r),a.setState({leftPanelId:r}))},[e,a]),s=(0,l.useTabsStore)(e=>e.panelStore.getState().dispatch);return(0,n.Y)(d.hG,{panelId:e,toggleActivePanelId:i,tableOfContents:null,onSelect:()=>null,dispatch:s,source:"shared",assetId:t,renderWithCustomContainer:r})}),h=(0,i.PA)(function({module:e,renderWithCustomContainer:t}){let r,a=(0,l.useGetTabsPanelStore)(),i=(0,s.p)(a,e=>e.leftPanelId),o=(0,u.S4)();if("tabs"===e)r=isNaN(Number(o?.tabId))||!o?.tabId?void 0:o.tabId;else{let e=(0,l.tabsGet)((0,l.getTabsStore)().getState(),"activeTabsIds",void 0,void 0);r=isNaN(Number(e))?void 0:e}return(0,n.Y)(g,{panelId:i,nonNotebookAssetId:r,renderWithCustomContainer:t})});a()}catch(e){a(e)}})},636623:(e,t,r)=>{"use strict";function a(e){return e.split("/")[1]}function n(e){return e.replace("dashboards/","dashboardsv3/")}r.d(t,{QG:()=>i,YX:()=>n,x7:()=>a});let i=e=>{let t,r=a(e);if((t=a(e)).length<32&&/^\d/.test(t)&&!isNaN(parseInt(t)))return`tree/${r}`;return`dashboardsv3/${r}`}},638067:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("path",{fill:"currentColor",d:"m7.954 5.056 2.937 2.946-2.937 2.945 1.062 1.059 3.993-4.004-3.993-4.005z"}),(0,a.Y)("path",{fill:"currentColor",d:"m3.994 5.056 2.937 2.946-2.937 2.945 1.062 1.059L9.05 8.002 5.056 3.997z"})]})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="ChevronDoubleRightIcon";let l=s},640291:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(621058),n=r.n(a),i=r(869580),o=r(677933);let s={ssoRequest(e,t=!1,r=e=>e){n().ajax({url:e,type:"GET",data:{is_from_redirect:t},success(e){s.navigateToLink(r(e.redirect_url))},error(e){s.ssoToExternalSystemErrorHandling(e)}})},sendEmailIdVerificationLink(e){n().ajax({url:"/sso/verify",type:"GET",data:{redirect:e},success(){i.A.confirm({title:"Validation link sent!",message:"Please check your email for the validation link to validate your email address.",showCancel:!1,confirmButton:"Ok",confirm:()=>{s.navigateToLink(null)}})},error(e){s.ssoToExternalSystemErrorHandling(e)}})},getHtmlErrorMessage(e){if(e.error_message){if(e.redirect_url)return"<p>"+e.error_message+"</p><p>Click on Ok button to navigate to the portal unauthenticated.</p>";return"<p>"+e.error_message+"</p>"}return"<p></p>"},ssoToExternalSystemErrorHandling(e){try{let t=JSON.parse((0,o._k)(e)),r=t.redirect_url?t.redirect_url:null,a=t.error_message?t.error_message:"",n=t.source?t.source:null;switch(t.error_code){case"EMAIL_NOT_VERIFIED":i.A.confirm({title:"Email Validation Required",messageHTML:s.getHtmlErrorMessage(t),confirmButton:"Send Validation Email",cancelButton:"Cancel",confirm:()=>{s.sendEmailIdVerificationLink(n)},cancel:()=>{s.navigateToLink(null)}});break;case"USERNAME_NOT_EMAIL":i.A.confirm({title:"Valid email required for this action",messageHTML:"<p>"+a+"</p>",confirmButton:"OK",showCancel:!1,confirm:()=>{s.navigateToLink(r)}});break;case"USER_NOT_IN_USP":i.A.confirm({title:"Error logging you into Help Center",messageHTML:"<p>"+a+"</p>",confirmButton:"OK",showCancel:!1,confirm:()=>{s.navigateToLink(r)}});break;case"DISABLED_BY_ADMIN":i.A.confirm({title:"Unauthorized",messageHTML:s.getHtmlErrorMessage(t),confirmButton:"Ok",cancelButton:"Cancel",confirm:()=>{s.navigateToLink(r)},cancel:()=>{s.navigateToLink(null)}});break;default:i.A.confirm({title:"Error trying to handle that request",message:"We failed to handle that request, please reload to try again later.",confirmButton:"Reload",cancelButton:"Cancel",confirm:()=>{s.navigateToLink(r)},cancel:()=>{s.navigateToLink(null)}})}}catch(e){i.A.confirm({title:"Error trying to handle that request",message:"We failed to handle that request, please try again later.",showCancel:!1,confirmButton:"Ok",confirm:()=>{s.navigateToLink(null)}})}},navigateToLink(e){window.location.href.includes("#sso")?null===e?window.open("/","_self"):window.open(e,"_self"):null!==e&&window.open(e,"_blank")}},l=s},641208:(e,t,r)=>{"use strict";r.d(t,{dN:()=>A,gg:()=>k,m0:()=>v,lJ:()=>T,DH:()=>y,mb:()=>S,yy:()=>w,T:()=>I,go:()=>E});var a=r(141078),n=r(239362),i=r(543963),o=r(831358),s=r(984568);let l=(0,a.J1)`
  fragment JobsSortableTask on JobsTaskSettings {
    taskKey
    dependsOn {
      taskKey
    }
  }
`,u=(0,a.J1)`
  fragment TaskStateTooltipFragment on JobsRunTask {
    runId
    ...TaskGitSourceSnapshotFragment
    clusterInstance {
      clusterId
    }
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
    status {
      ...RunStatusFragment
    }
    settings {
      taskKey
      dependsOn {
        taskKey
      }
      task {
        ...TaskTypeDetailsFragment
      }
      clusterSpec {
        existingClusterId
        newCluster {
          ...JobsNewClusterDetails
        }
        jobClusterKey
      }
    }
    effectivePerformanceTarget
    effectiveCompute {
      hardwareAccelerator
      memory
    }
  }

  ${n.L1}
  ${s.f5}
  ${i.DP}
  ${i.WB}
  ${n.Bv}
  ${o.j}
  ${o.E}
`,c=(0,a.J1)`
  fragment JobsJobTasksDependencies on JobsJob {
    jobId
    settings {
      durationWarningSeconds
      health {
        rules {
          metric
          op
          value
        }
      }
      tasks {
        ...JobsSortableTask
      }
    }
  }
  ${l}
`,d=(0,a.J1)`
  fragment TaskStateTooltipRunFragment on JobsRun {
    jobId
    runId
    runName
    creatorUserName
    creatorUser {
      ...RichUserData
    }
    creatorPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
      ...AclPrincipalData
    }
    jobClusters {
      newCluster {
        ...JobsNewClusterDetails
      }
      jobClusterKey
    }
    overridingParameters {
      ...TaskTypeDetailsOverridingParametersFragment
    }
  }
  ${s.f5}
  ${n.qe}
  ${o.j}
  ${o.E}
`;if(13057==r.j)var f=r(285376);if(13057==r.j)var p=r(756340);var m=r(659789);let g=(0,a.J1)`
  fragment RunTaskSettings on RunTaskSettings {
    taskKey
    description
    dependsOn {
      ...TaskDependency
    }
    runIf
    task {
      ...TaskAction
    }
    clusterSpec {
      ...ClusterDetails
    }
    timeoutSeconds
    durationWarningSeconds
  }
  ${s.lu}
  ${s.IB}
  ${s.VM}
`,h=(0,a.J1)`
  fragment RunTask on RunTask {
    id
    settings {
      ...RunTaskSettings
    }
    status
    active
    message
    startTime
    durationMillis
    clusterId
    sparkContextId
  }
  ${g}
`,b=(0,a.J1)`
  fragment RunTriggerInfo on RunTriggerInfo {
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
`;(0,a.J1)`
  fragment RunDetails on Run {
    status
    active
    message
    runId
    idInJob
    originalAttemptId
    startTime
    durationMillis
    queueReason @include(if: $includeQueueReason)
    trigger
    triggerInfo {
      ...RunTriggerInfo
    }
    overridingParameters {
      ...RunParameters
    }
    clusterId
    sparkContextId
    runType
    tasks {
      ...RunTask
    }
    jobParameters @include(if: $includeJobParameters) {
      name
      value
      default
    }
  }
  ${b}
  ${h}
  ${m.M}
`,(0,a.J1)`
  fragment JobRunDetails on Job {
    activeRuns(first: $first, after: $after, expandTriggerInfo: $expandTriggerInfo) {
      edges {
        node {
          ...RunDetails
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;let y=(0,a.J1)`
  mutation RunCancel($input: RunCancelInput!) @component(name: "Workflows.Orchestration.Other") {
    runCancel(input: $input) {
      error {
        message
      }
      errors {
        ...ApiErrorFields
      }
    }
  }
  ${m.n}
`,v=(0,a.J1)`
  query MatrixViewRunsQuery(
    $jobId: ID!
    $jobIdLong: Long!
    $first: Int!
    $offset: String!
    $startTimeFrom: Long
    $startTimeTo: Long
    $expandTriggerInfo: Boolean
    $includeQueueDuration: Boolean = false
    $includeQueueReason: Boolean = false
    $includeJobParameters: Boolean = false
    $includeRunStatus: Boolean = false
    $latestTasksOnly: Boolean = false
    $expandTasks: Boolean = true
    $lazyLoadTaskTooltip: Boolean = false
  ) @component(name: "Workflows.Observability.Graphs") {
    jobsGetJob(input: { jobId: $jobIdLong }) {
      job {
        ...JobsJobTasksDependencies
        settings {
          parameters @include(if: $includeJobParameters) {
            name
            default
          }
        }
      }
    }
    jobsListRunsPaginated(
      jobId: $jobId
      first: $first
      after: $offset
      expandTasks: $expandTasks
      expandTriggerInfo: $expandTriggerInfo
      startTimeFrom: $startTimeFrom
      startTimeTo: $startTimeTo
      latestTasksOnly: $latestTasksOnly
    ) {
      jobsRuns {
        pageInfo {
          hasNextPage
        }
        edges {
          node {
            ...JobRunDetailsSectionFragment
            ...TaskStateTooltipRunFragment
            runPageUrl
            tasks {
              # This is only the basic information that is required to render
              # the matrix view's rectangles. Additional information like
              # notebook path, task type, etc. will be loaded lazily on
              # hover from TaskStateTooltipFragment
              runId
              runPageUrl
              state {
                ...RunStateFragment
              }
              settings {
                taskKey
                dependsOn {
                  taskKey
                }
              }
              attemptNumber
              # This will be loaded lazily on hover from
              ...TaskStateTooltipFragment @skip(if: $lazyLoadTaskTooltip)
            }
          }
        }
      }
    }
  }

  ${i.DP}
  ${c}
  ${n.Wg}
  ${u}
  ${d}
`,E=25;function I({jobId:e,jobIdLong:t,offset:r,startTimeFrom:a,startTimeTo:n,expandTasks:i}){return{query:v,variables:{jobId:e,jobIdLong:t,first:E,offset:r,startTimeTo:n,startTimeFrom:a,latestTasksOnly:(0,f.J)(),expandTasks:i,includeRunStatus:!0,...(0,p.h)()?{lazyLoadTaskTooltip:!0,expandTriggerInfo:!1,includeQueueDuration:!1,includeQueueReason:!1}:{lazyLoadTaskTooltip:!1,expandTriggerInfo:!0,includeQueueDuration:!0,includeQueueReason:!0}}}}let T=(0,a.J1)`
  query MatrixViewTooltipQuery(
    $jobId: Long!
    $runId: Long!
    $expandTriggerInfo: Boolean
    $includeQueueDuration: Boolean = false
    $includeQueueReason: Boolean = false
  ) @component(name: "Workflows.Observability.Graphs") {
    jobsGetRun: jobsGetRunWithApiVersion(
      input: { jobId: $jobId, numberInJob: $runId, expandTriggerInfo: $expandTriggerInfo, onlyLatest: true }
      useApi21: true
    ) {
      run {
        tasks {
          runPageUrl
          attemptNumber
          ...TaskStateTooltipFragment
        }
      }
    }
  }

  ${u}
`,w=(0,a.J1)`
  mutation RunRepair($input: JobsRepairRunInput!) @component(name: "Workflows.Orchestration.Other") {
    jobsRepair(input: $input) {
      repairId
      apiError {
        ...ApiErrorFields
      }
    }
  }
  ${m.n}
`,S=(0,a.J1)`
  mutation RunDelete($input: RunDeleteInput!) @component(name: "Workflows.Orchestration.Other") {
    runDelete(input: $input) {
      error {
        message
      }
      errors {
        ...ApiErrorFields
      }
    }
  }
  ${m.n}
`,k=(0,a.J1)`
  query JobRecentTerminatedRuns($id: Long!, $limit: Int!, $includeQueueReason: Boolean = false)
  @component(name: "Workflows.Observability.Lists") {
    jobsListRuns(input: { jobId: $id, state: ["TERMINATED"], limit: $limit }) {
      runs {
        numberInJob
        state {
          ...RunStateFragment
        }
      }
    }
  }
  ${i.DP}
`,A=(0,a.J1)`
  query GetRunOutput($runId: Long!, $skipAdditionalAclChecks: Boolean = false)
  @component(name: "Workflows.Observability.Graphs") {
    jobsGetRunOutput(input: { runId: $runId, skipAdditionalAclChecks: $skipAdditionalAclChecks }) {
      runOutput {
        error
        info
        commonNotebookOutput {
          logs
          logsTruncated
          errorTrace
        }
        runJobOutput {
          runId
        }
        sqlOutput {
          queryOutput {
            queryText
            outputLink
            warehouseId
            sqlStatements {
              lookupKey
            }
          }
          fileOutput {
            queryText
            warehouseId
            sqlStatements {
              lookupKey
            }
            queryResult {
              columns {
                name
                type
              }
              rows {
                values {
                  stringValue
                }
              }
              truncated
            }
          }
          alertOutput {
            queryText
            outputLink
            warehouseId
            sqlStatements {
              lookupKey
            }
            alertState
          }
          dashboardOutput {
            widgets {
              widgetId
              widgetTitle
              status
              error {
                message
              }
              startTime
              endTime
            }
          }
        }
        pipelineOutput {
          pipelineUpdateId
          pipelineRequestId
        }
        dbtOutput {
          artifactsLink
        }
        dbtPlatformOutput @includeSafex(name: "dbt_cloud_task", defaultValue: false) {
          dbtPlatformJobRunId
          dbtPlatformJobRunUrl
          dbtPlatformJobRunOutput {
            index
            name
            status
            logs
          }
        }
        notebookOutput {
          result
          truncated
        }
        sparkJarOutput {
          stdout
          stderr
        }
        conditionOutput {
          op
          left
          right
          outcome
        }
      }
    }
  }
`},642280:(e,t,r)=>{"use strict";r.d(t,{H:()=>s,f:()=>o});var a=r(610435),n=r(692738),i=r(455843);function o({children:e,contextId:t,searchId:r}){let s=(0,n.useCallback)(e=>{if(!e.entry?.observability_log)return{};return{entry:{observability_log:{custom_context:{search_context:{search_id:r}}}}}},[r]);return(0,a.Y)(i.r,{id:t,tags:{searchId:r},context:s,children:e})}function s({children:e,listIndex:t,hasContentHighlight:r,isLazyLoaded:o,groupIndex:l,groupLocalIndex:u,contextId:c,resultType:d,resultId:f}){let p=(0,n.useCallback)(e=>{if(!e.entry?.observability_log)return{};return{entry:{observability_log:{custom_context:{search_result_context:{list_index:t,search_is_lazy_loaded:o,has_content_highlight:r,group_index:l,group_local_index:u,result_type:d??void 0,result_asset_id:f??void 0}}}}}},[t,r,o,l,u,d,f]);return(0,a.Y)(i.r,{id:c,tags:{},context:p,children:e})}},644424:(e,t,r)=>{"use strict";r.d(t,{$X:()=>g,DC:()=>E,Eg:()=>m,F6:()=>h,I$:()=>b,Jh:()=>p,Yc:()=>v,o5:()=>y,oJ:()=>c,qE:()=>d,zK:()=>f});var a=r(441535),n=r(5697),i=r(971845),o=r(580500),s=r(889885);function l(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function u(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){l(i,a,n,o,s,"next",e)}function s(e){l(i,a,n,o,s,"throw",e)}o(void 0)})}}let c="Drafts",d=()=>(0,a.W)("databricks.fe.notebook.moveUsqleQueryOnSaveInDraftsFolder",!1),f=()=>(0,a.W)("databricks.fe.notebook.enableDraftsFolderUsqleCreation",!1),p=()=>(0,a.W)("databricks.fe.notebook.enableDraftsFolderNotebookCreation",!1),m=()=>f()||p(),g=e=>{if(!y(e))return!1;switch(e.getEditorMode()){case"query":return d();case"notebook":return(0,a.W)("databricks.fe.notebook.moveNotebookOnRenameInDraftsFolder",!1);default:return!1}},h=e=>{if(!e)return!1;return e.startsWith(`/${c}/`)||e.startsWith(`/Users/${(0,s.FI)("user")}/${c}/`)||e.startsWith(`/Users/Groups/${(0,s.FI)("user")}/${c}/`)},b=e=>"query"===e.getEditorMode()&&h(e.get("pathName")??void 0),y=e=>b(e)||"notebook"===e.getEditorMode()&&h(e.get("pathName")??void 0),v=()=>u(function*(){let e=yield(0,i.J)({name:n.RJ.Drafts});return Number((0,o.Uk)(e.internal_name))})(),E=()=>u(function*(){return yield(0,i.J)({name:n.RJ.Drafts})})()},644979:(e,t,r)=>{"use strict";let a;r.d(t,{R:()=>i});var n=r(237996);let i={get current(){return a||(a=(0,n.zR)()),a}}},645787:(e,t,r)=>{"use strict";r.d(t,{F5:()=>g,FM:()=>p,Lt:()=>f,fr:()=>s,pX:()=>m,qQ:()=>d});var a=r(409989),n=r(844760);function i(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function o(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var o=e.apply(t,r);function s(e){i(o,a,n,s,l,"next",e)}function l(e){i(o,a,n,s,l,"throw",e)}s(void 0)})}}let s=e=>e.split("/").map(encodeURIComponent).join("/"),l=e=>`/ajax-api/2.0/workspace-files${s(e)}`,u="x-databricks-editor-type",c="notebook-file",d=(e,t="notebook")=>o(function*(){let r=l(e),a={};"notebook"!==t&&(a[u]=c);let i=yield(0,n.S)(r,{headers:a}),o=yield i.text(),s=i.headers.get("Etag"),d=i.headers.get("content-type"),{ok:f,status:p}=i;return{data:o,sha:s,httpError:!f,contentType:d,status:p}})(),f=(e,t,r,a="notebook")=>o(function*(){let i=l(e),o={};void 0!==r&&(o["If-Match"]=r),"notebook"!==a&&(o[u]=c);let s=yield(0,n.S)(i,{method:"POST",body:t,headers:o}),d=s.headers.get("Etag"),{status:f,statusText:p,ok:m}=s;return{sha:d,content:t,status:f,statusText:p,httpError:!m}})(),p=e=>o(function*(){let t=e.startsWith("/Workspace")?e:`/Workspace${e}`,r=`/ajax-api/2.0/workspace/list?path=${encodeURIComponent(t)}`,a=yield(0,n.S)(r);if(!a.ok)return[];let i=null;try{i=yield a.json()}catch{return[]}return(i?.objects??[]).map(e=>{let t;return{...e,path:(t=e.path).startsWith("/Workspace/")?t.slice(10):t}})})(),m=()=>(0,a.TC)(`${window.location.origin}/ajax-api/2.0/`);function g(e,t=!0){return o(function*(){return m().post("workspace/delete",{path:e,move_to_trash:t})})()}},650447:e=>{"use strict";e.exports="You are a Databricks Jobs assistant specialized in helping users manage and operate Databricks Jobs.\n\n## Objective\n\nHelp users manage, diagnose, and operate Databricks Jobs. Use the available tools to gather information, execute actions, and resolve requests autonomously.\n\n## Response Strategy\n\n**Run requests**: Trigger job runs.\n**Creation requests**: Use the `createAsset` tool for ALL asset creation operations (jobs, pipelines, notebooks, etc.). Always use `createAsset` with `assetType='job'` to create new jobs.\n**Diagnosis requests**: Load the `job-run-diagnosis` skill via `readSkillFile` FIRST, then follow its instructions.\n{{CONFIGURATION_REQUESTS_PROMPT}}\n**Information requests**: Use `docSearch` for documentation, `searchAssets` to find assets, or `readTable`/`tableSearch` for data questions.\n\n## Core Workflow\n\n1. **Understand**: Identify the user's intent (run, diagnose, configure, or find information).\n2. **Gather Info**: Fetch job or run details, use `docSearch` for documentation, or `searchAssets` to locate resources. For unknown errors, search with varied keywords (error class, message text, related concepts).\n3. **Read Skills**: Before diagnosis or configuration changes, ALWAYS use `readSkillFile` to load the relevant skill. Do this even if you think you know how — skills contain critical details.\n4. **Execute**: Carry out the action using the appropriate tool.\n5. **Persist**: Continue until the request is fully resolved (max 3 retry attempts).\n\n{{CLI_TOOL_INSTRUCTIONS}}\n\n## UI Behavior\n\nAfter a successful action (updating settings, triggering a run, etc.), do NOT tell the user to refresh the page. The UI updates automatically.\n\n## Error Handling\n\n- If a tool call fails, read the error message carefully. For transient errors (timeouts, 5xx, rate limits), retry the same command once. For persistent errors, do not retry without changing the command.\n- If a command is denied by the guardrail, do not attempt it again — explain to the user that the command is not supported.\n\n## Timestamps\n\nAPI responses contain Unix epoch timestamps in milliseconds (e.g., `created_time`, `start_time`, `end_time`). When converting these to human-readable dates, sanity-check the result: any date for a past event must be before today. A conversion that yields a future date is wrong — present the raw timestamp instead.\n\n- Today: {{TODAY_DATE}}\n"},654254:(e,t,r)=>{"use strict";r.d(t,{G:()=>o,n:()=>s});var a=r(692738),n=r(378520),i=r(677276);function o({pipelineId:e,updateId:t}){return e?{pipelineId:e,updateId:t}:void 0}function s(){let e=(0,n.u)(),t=(0,a.useRef)(e);t.current=e;let{selectedUpdateId:r}=(0,i.F)(),s=(0,a.useRef)(r);return s.current=r,(0,a.useMemo)(()=>{let e=()=>o({pipelineId:t.current,updateId:s.current});return{getPipelineIdentifiersContext:e,getPipelineIdentifiersContextGetter:()=>({pipelineIdentifiers:e()})}},[])}},656091:(e,t,r)=>{"use strict";r.d(t,{K:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.assistant.disableDashboardAuthoringAgentNavigationGuard",!1)}},657418:(e,t,r)=>{"use strict";r.d(t,{G:()=>o,p:()=>i});var a=r(350318),n=r(441535);function i(){return null!==o()}let o=()=>{let e=(0,n.W)("databricks.unitycatalog.enableOnlineCatalogs",!1),t=(0,n.W)("databricks.unitycatalog.enableNewBrickstoreUCModel",!1)||(0,a.ce)();return e?"v1":t?"v2":null}},659789:(e,t,r)=>{"use strict";r.d(t,{M:()=>i,n:()=>n});var a=r(141078);let n=(0,a.J1)`
  fragment ApiErrorFields on ApiError {
    code
    message
  }
`,i=(0,a.J1)`
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
`},662013:(e,t,r)=>{"use strict";r.d(t,{Fi:()=>d,Fq:()=>o,Px:()=>f,dw:()=>l,eR:()=>s,gs:()=>c,yX:()=>u});var a=r(342411),n=r(441535),i=r(921195);function o(){return!!(0,n.W)("data_gov_dashboard",null)&&(0,n.W)("databricks.fe.uc.enableGovHub",!1)}function s(){return l()&&(0,n.W)("databricks.fe.datamonitoring.dqmCatalogExplorerEntrypointEnabled",!1)}function l(){let e=(0,n.W)("dm_anomaly_detection",null)??(0,n.W)("anomaly_detection_ws",null)??(0,n.W)("databricks.datamonitoring.enableAnomalyDetection",!1);return(0,n.W)("databricks.datamonitoring.dataMonitoringEnabledForShard",!1)&&e}function u(){let e=(0,n.W)("dataclassificationws",!1)||(0,n.W)("dataclassificationv2",!1),t=(0,n.W)("databricks.dataclassification.enabledRegions",!1);return e&&t}let c={govHub:{label:(0,a.zR)({id:"In+N7F",defaultMessage:"Governance Hub"}),description:(0,a.zR)({id:"YlR3y/",defaultMessage:"Centralized data governance hub"}),url:"/settings/governance/data"},dataAdmin:{label:(0,a.zR)({id:"RmoZJl",defaultMessage:"Data Administration"}),description:(0,a.zR)({id:"B1ozy1",defaultMessage:"Manage metastore configurations"}),url:"/governance/metastore"},tagPolicies:{label:(0,a.zR)({id:"HEJw16",defaultMessage:"Governed Tags"}),description:(0,a.zR)({id:"GgHEzk",defaultMessage:"Tag usage controls"}),get url(){return(0,i.Ng)()}},manageDiscover:{label:(0,a.zR)({id:"MWi/p0",defaultMessage:"Manage Discovery"}),description:(0,a.zR)({id:"zZZqgy",defaultMessage:"Organize data assets by business area or function"}),url:"/governance/manage-discover"},dataQuality:{label:(0,a.zR)({id:"LidA53",defaultMessage:"Data Quality Monitoring"}),description:(0,a.zR)({id:"CDMKT9",defaultMessage:"Monitor quality incidents"}),url:"/governance/data-quality-monitoring"},dataClassification:{label:(0,a.zR)({id:"20rqnv",defaultMessage:"Data Classification"}),description:(0,a.zR)({id:"xp7jGj",defaultMessage:"Automatically detect sensitive data"}),url:"/governance/data-classification"}};function d(){return!!(0,n.W)("databricks.fe.uc.disableSystemTableService",!1)}function f(){return(0,n.W)("databricks.fe.uc.enableManagePermissions",!1)}},669536:(e,t,r)=>{"use strict";r.d(t,{l:()=>n});var a=r(984741);function n(e){if(e.file)return{...e,file:{path:(0,a.e0)(e.file.path)}};if(e.notebook)return{...e,notebook:{path:(0,a.e0)(e.notebook.path)}};if(e.glob)return{...e,glob:{include:(0,a.e0)(e.glob.include)}};return e}},673298:(e,t,r)=>{"use strict";r.d(t,{Rf:()=>h,Ys:()=>b,fx:()=>v});var a=r(483588),n=r(617293),i=r(680479),o=r(29824),s=r(491438),l=r(556215),u=r(311642),c=r(344918);function d(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function f(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){d(i,a,n,o,s,"next",e)}function s(e){d(i,a,n,o,s,"throw",e)}o(void 0)})}}let p=(e,t,r,a,n)=>({key:e,filter:(Array.isArray(t)?t:[t]).map(e=>`type=${e}`).join(" OR "),includeBrowse:a,includeUnbound:n,targetGroup:r}),{MY_ORGANIZATION:m,DELTA_SHARES_RECEIVED:g}=l.l3;function h({includeBrowse:e,includeUnbound:t}){return[p("my_org_managed","MANAGED_CATALOG",m,e,t),p("my_org_managed_online","MANAGED_ONLINE_CATALOG",m,e,t),p("my_org_foreign","FOREIGN_CATALOG",m,e,t),p("my_org_internal_system",["INTERNAL_CATALOG","SYSTEM_CATALOG"],m,e,t),p("delta_sharing","DELTASHARING_CATALOG",g,e,t)]}function b(e,t,r,a){return f(function*(){let n=r.map(r=>()=>f(function*(){let n,o=[];do{let l=yield function(e,t,r,a){return f(function*(){let{data:n}=yield e.query({query:i.I,variables:{maxResults:u.WX,pageToken:r??null,omitAuthorizedPaths:!0,filter:a?.filter,includeBrowse:a?.includeBrowse,includeUnbound:a?.includeUnbound},fetchPolicy:t,context:(0,s.Xe)(a?.metastoreScope),canonizeResults:!1});return{items:n?.unityCatalogCatalogs?.nodes??[],nextPageToken:n?.unityCatalogCatalogs?.nextPageToken??null}})()}(e,t,n,{filter:r.filter,includeBrowse:r.includeBrowse,includeUnbound:r.includeUnbound,metastoreScope:a});o.push(...l.items),n=l.nextPageToken??void 0}while(n);return o})()),o=yield f(function*(){let e=Array(n.length),t=0;return yield Promise.all(Array.from({length:Math.min(10,n.length)},()=>f(function*(){for(;t<n.length;){let r=t++;try{e[r]={status:"fulfilled",value:yield n[r]()}}catch(t){e[r]={status:"rejected",reason:t}}}})())),e})(),l=new Map;return o.forEach((e,t)=>{let a=r[t];"fulfilled"===e.status?l.set(a.key,{streamKey:a.key,config:a,items:e.value}):l.set(a.key,{streamKey:a.key,config:a,items:[],failed:!0,error:e.reason})}),l})()}let y=()=>{let e=globalThis.scheduler;if(e?.yield)return e.yield();return new Promise(e=>setTimeout(e,0))};function v(e,t){return f(function*(){let r=new Map;for(let[,a]of e)for(let e of a.items){if(null==e||null==e.name)continue;let n=e.managedCatalogCatalogInfo?.accessibleInCurrentWorkspace===!1,i=n?l.l3.OUTSIDE_WORKSPACE:a.config.targetGroup,s=function(e,t){let r=e.name??"",a={objectType:o.an.CATALOG,catalog:r,securable_id:e.id,securableKind:e.securableKind??void 0};return(0,u.hf)({name:r,type:u.Hl.CATALOG,fullName:r,browse_only:e.managedCatalogCatalogInfo?.browseOnly??!1,accessible:t.accessible,securableKind:e.securableKind??void 0,catalogType:e.managedCatalogCatalogInfo?.catalogType??void 0,isDefault:!!(t.defaultCatalogName&&e.name===t.defaultCatalogName),dataEntity:a,needsCompute:t.isForeignDataRequireCompute?.(e.securableKind??void 0)})}(e,{defaultCatalogName:t.defaultCatalogName,isForeignDataRequireCompute:t.isForeignDataRequireCompute,accessible:!n&&void 0}),c=r.get(i)??[];c.push(s),r.set(i,c)}return yield y(),function(e){let t=e.get(l.l3.MY_ORGANIZATION);if(!t)return;let r=[],i=[];for(let e of t)e.name===n.Ef||e.securableKind===a.T_5.CATALOG_DELTASHARING?r.push(e):i.push(e);if(0===r.length)return;e.set(l.l3.MY_ORGANIZATION,i);let o=e.get(l.l3.DELTA_SHARES_RECEIVED)??[];o.push(...r),e.set(l.l3.DELTA_SHARES_RECEIVED,o)}(r),yield y(),function(e){for(let[t,r]of e){let a=new Set;e.set(t,r.filter(e=>{let t=function(e){if(e.dataEntity?.securable_id)return`id:${e.dataEntity.securable_id}`;return`name:${e.name}|kind:${e.securableKind}|browse:${e.browse_only}|accessible:${e.accessible}`}(e);if(a.has(t))return!1;return a.add(t),!0}))}}(r),yield y(),function(e){let t={[l.l3.MY_ORGANIZATION]:c.X,[l.l3.DELTA_SHARES_RECEIVED]:c.$,[l.l3.OUTSIDE_WORKSPACE]:e=>e.toSorted((e,t)=>e.name.localeCompare(t.name))};for(let[r,a]of e){let n=t[r];n&&e.set(r,n(a))}}(r),r})()}},680479:(e,t,r)=>{"use strict";r.d(t,{I:()=>n});var a=r(141078);let n=(0,a.J1)`
  query GetUcCatalogsQuery(
    $maxResults: Int!
    $pageToken: String
    $includeBrowse: Boolean
    $includeUnbound: Boolean
    $omitAuthorizedPaths: Boolean
    $filter: String
  ) @component(name: "DBSQLX.CatalogExplorer") {
    unityCatalogCatalogs(
      maxResults: $maxResults
      pageToken: $pageToken
      includeBrowse: $includeBrowse
      includeUnbound: $includeUnbound
      omitAuthorizedPaths: $omitAuthorizedPaths
      filter: $filter
    ) {
      nodes {
        id
        name
        securableKind
        managedCatalogCatalogInfo {
          accessibleInCurrentWorkspace
          catalogType
          browseOnly
        }
      }
      nextPageToken
    }
  }
`},682972:(e,t,r)=>{"use strict";r.d(t,{E:()=>m,b:()=>g});var a=r(610435);r(692738);var n=r(497895),i=r(295169),o=r(382908),s=r(79570),l=r(465946),u=r(577780),c=r(342411),d=r(874976),f=r(846947);let p=({tagCount:e=3})=>{let{theme:t}=(0,n.wn)(),r=[60,120,80,90];return(0,a.Y)("div",{css:{display:"flex",flexWrap:"wrap",gap:t.spacing.sm,rowGap:t.spacing.sm},children:Array.from({length:e}).map((e,t)=>(0,a.Y)(i.x,{css:{height:20,width:r[t%r.length]},loading:!0},t))})},m=({budgetPolicy:e,loading:t,visibleTagsCount:r,...i})=>{let{theme:m}=(0,n.wn)(),g=[...e?.customTags||[]].sort();if(t)return(0,a.Y)(p,{});let h=(0,a.Y)(o.o.Text,{color:"secondary",children:(0,a.Y)(c.sA,{id:"DqWWVE",defaultMessage:"Selected policy has no tags"})});if((0,f.CN)())return(0,a.Y)("div",{css:{display:"flex",flexWrap:"wrap",rowGap:m.spacing.sm},...i,children:(0,a.Y)(d.N,{componentIdPrefix:"budget-policies",hideLabel:!0,tags:g.map(e=>({tag_key:e.key??"",tag_value:e.value??""})),isEditable:!1,isTagsLoading:!1,emptyComponent:h,showInOverflow:void 0!==r&&g.length>r,visibleTagsCount:void 0!==r?r:void 0})});if(0===g.length)return h;let b=m.spacing.xs,y={marginBottom:-m.spacing.xs/2,marginTop:-m.spacing.xs/2},v={marginBottom:m.spacing.xs/2,marginTop:m.spacing.xs/2},E=g.map(e=>(0,a.Y)(s.m,{componentId:"budget-policy-details_tags_tooltip",content:`${e.key}: ${e.value}`,children:(0,a.Y)("div",{css:v,children:(0,a.Y)(l.v,{componentId:"BudgetPolicyTags_Tag",style:{maxWidth:"100%"},children:(0,a.Y)(o.o.Text,{ellipsis:!0,style:{maxWidth:"100%"},children:e.value?e.value:e.key})})})},e.key));if(void 0!==r&&g.length>r)return(0,a.Y)("div",{css:{display:"flex",flexWrap:"wrap",rowGap:b,...y},...i,children:(0,a.Y)(u.n,{css:{flexWrap:"wrap",maxHeight:300,overflowY:"auto"},visibleItemsCount:r,children:E})});return(0,a.Y)("div",{css:{display:"flex",flexWrap:"wrap",rowGap:b,...y},...i,children:E})},g=({budgetPolicy:e})=>{let{theme:t}=(0,n.wn)(),r=(0,c.tz)(),i=!!e?.customTags?.length,s={textAlign:"center",marginLeft:t.spacing.md,marginRight:t.spacing.md};return(0,a.FD)(a.FK,{children:[(0,a.Y)(o.o.Text,{bold:!0,children:r.formatMessage({id:"7SSpi1",defaultMessage:"Tags"})}),(0,a.Y)(m,{css:[i?{maxWidth:"95%","div div":{maxWidth:"100%"}}:s,{marginTop:t.spacing.sm}],budgetPolicy:e})]})}},684315:(e,t,r)=>{"use strict";r.d(t,{R:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.lakeview.enableGridImprovements",!1)}},684581:(e,t,r)=>{},685271:(e,t,r)=>{"use strict";r.d(t,{I:()=>n});var a=r(441535);function n(){return(0,a.W)("dashboard_genie_default_enabled",!1)}},685398:(e,t,r)=>{"use strict";r.d(t,{B6:()=>g,TC:()=>y,y$:()=>b});var a=r(610435),n=r(692738),i=r(382908),o=r(497895),s=r(12414),l=r(342411),u=r(205048);let c=r.p+"static/media/spinner.7aa770519b7dee9d24730319c24a3383.svg";var d=r(144202);let{Text:f}=i.o,p=(0,a.Y)(l.sA,{id:"FlJ/XN",defaultMessage:"Loading..."});function m(e){let[t,r]=(0,n.useState)((e??0)>0);return(0,n.useEffect)(()=>{let t=setTimeout(()=>{r(!1)},e);return()=>{clearTimeout(t)}},[e]),t}let g=({timeToShow:e,text:t=p,traceLoading:r=!1,traceDescription:n,styleOverrides:i,skipMargin:l})=>{let{theme:c}=(0,o.wn)();if(m(e))return(0,a.Y)(u.R,{loading:r,description:n});return(0,a.FD)("div",{css:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:l?0:c.spacing.lg,gap:c.spacing.md,...i},children:[(0,a.Y)(u.R,{loading:r,description:n}),(0,a.Y)(s.y,{size:"large"}),(0,a.Y)(f,{size:"xxl",children:t})]})};function h({alt:e,title:t,className:r,style:n}){return(0,a.Y)("img",{alt:e,className:r||"load-spinner",title:t,src:d.h.getResourceUrl(c),style:n})}function b({className:e,title:t,timeToShow:r,traceLoading:n=!1,traceDescription:i,style:o}){let s=m(r),c=(0,l.tz)();if(s)return(0,a.Y)(u.R,{loading:n,description:i});return(0,a.FD)(a.FK,{children:[(0,a.Y)(u.R,{loading:n,description:i}),(0,a.Y)(h,{alt:c.formatMessage({id:"oGztBr",defaultMessage:"Loading..."}),className:e||"load-spinner",title:t,style:o})]})}let y=({traceLoading:e=!1,traceDescription:t,testId:r})=>{let{getPrefixedClassName:n}=(0,o.wn)();return(0,a.FD)("div",{css:e=>({height:"200px",display:"flex",alignItems:"center",justifyContent:"center",[`.${n("spin-lg")} .${n("spin-dot")}`]:{fontSize:`${e.typography.fontSizeXxl}px !important`}}),...r?{"data-testid":r}:{},children:[(0,a.Y)(u.R,{loading:e,description:t}),(0,a.Y)(s.y,{size:"large"})]})}},689597:(e,t,r)=>{"use strict";r.d(t,{j:()=>i});var a=r(409666);let n=[{widgetType:"filter-multi-select",version:a.B0},{widgetType:"filter-single-select",version:a.B0},{widgetType:"filter-date-picker",version:a.B0},{widgetType:"filter-date-range-picker",version:a.B0},{widgetType:"filter-text-entry",version:a.B0},{widgetType:"range-slider",version:a.B0}];function i(){return n}},691515:(e,t,r)=>{"use strict";r.d(t,{d:()=>n});var a=r(141078);let n=(0,a.J1)`
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
`},691914:(e,t,r)=>{"use strict";r.d(t,{E:()=>s});var a=r(610435);r(692738);var n=r(382908),i=r(342411),o=r(620839);function s({showLearnMoreLink:e}){return(0,a.Y)(i.sA,{id:"y1XUuU",defaultMessage:"Serverless compute is required to deploy bundles but it's not enabled for this workspace. {learnMoreLink}",values:{learnMoreLink:e?(0,a.Y)(n.o.Link,{componentId:"dabs-authoring.serverless-not-enabled-alert.learn-more",openInNewTab:!0,href:o.A.DABS_IN_WORKSPACE_INSTALLATION_REQUIREMENTS_URL,children:(0,a.Y)(i.sA,{id:"wWO8a1",defaultMessage:"Learn more"})}):null}})}},693552:(e,t,r)=>{"use strict";r.d(t,{M:()=>v,k:()=>E});var a=r(610435),n=r(956935),i=r(692738),o=r(12414),s=r(672952),l=r(863708),u=r(726977),c=r(22191),d=r(449669),f=r(497895),p=r(382908),m=r(342411);let g=({link:e})=>{let{theme:t}=(0,f.wn)(),r=e??"https://docs.databricks.com/notebooks/notebook-assistant-faq.html";return(0,a.Y)("div",{style:{display:"grid",placeItems:"center",textAlign:"center",height:"100%",color:t.colors.textSecondary},children:(0,a.Y)("div",{children:(0,a.Y)(m.sA,{id:"PrKHVe",defaultMessage:"<databricksFAQ>Genie Code</databricksFAQ> is currently disabled for your workspace. Ask your Databricks administrator to enable <enableAssistant>Genie Code</enableAssistant>.",values:{databricksFAQ:e=>(0,a.Y)(p.o.Link,{componentId:"disabled-chat-sidebar-genie-faq-link",href:r,openInNewTab:!0,children:e}),enableAssistant:e=>(0,a.Y)(p.o.Link,{componentId:"disabled-chat-sidebar-enable-assistant-link",href:`${r}#q-how-do-i-enable-databricks-assistant`,openInNewTab:!0,children:e})}})})})};var h=r(620839);function b(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}let y=i.lazy(()=>{var e;return(e=function*(){let{ChatSidebarNativeFeaturePlugin:e}=yield(()=>{let e=()=>Promise.all([r.e(62280),r.e(6932),r.e(1291),r.e(97768),r.e(24685),r.e(99406),r.e(21234),r.e(92170),r.e(1990),r.e(78632),r.e(39676),r.e(31813),r.e(51362),r.e(26881),r.e(64724),r.e(68775),r.e(11022),r.e(43927),r.e(18650),r.e(87122),r.e(12674),r.e(4828),r.e(90489),r.e(64666),r.e(30259),r.e(13962),r.e(22831),r.e(80086),r.e(51818),r.e(87385),r.e(58415),r.e(79637),r.e(62762),r.e(48898),r.e(6431)]).then(r.bind(r,622844));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(622844,"$project/notebook/sidebar/chat/NotebookChatSidebarTextArea","lazy",e);return e()})();yield e().preload();let t=()=>Promise.all([r.e(62280),r.e(62394),r.e(3752),r.e(32305),r.e(54497),r.e(33764),r.e(78277),r.e(7473),r.e(20872),r.e(36993),r.e(67590),r.e(51545),r.e(6932),r.e(20022),r.e(18294),r.e(5033),r.e(1291),r.e(97768),r.e(24685),r.e(59276),r.e(99406),r.e(59794),r.e(78580),r.e(55616),r.e(21234),r.e(3330),r.e(92170),r.e(59316),r.e(37797),r.e(11184),r.e(1990),r.e(44004),r.e(78632),r.e(52426),r.e(12514),r.e(39676),r.e(31813),r.e(51362),r.e(22886),r.e(26881),r.e(45854),r.e(72263),r.e(86412),r.e(32828),r.e(20556),r.e(40972),r.e(35747),r.e(29580),r.e(92922),r.e(6198),r.e(95470),r.e(5400),r.e(84245),r.e(97421),r.e(20806),r.e(37072),r.e(47404),r.e(10596),r.e(63819),r.e(60675),r.e(31083),r.e(78756),r.e(11136),r.e(64898),r.e(89187),r.e(20805),r.e(81318),r.e(80159),r.e(97786),r.e(70419),r.e(46184),r.e(14243),r.e(4065),r.e(86107),r.e(17007),r.e(78332),r.e(13526),r.e(49342),r.e(6854),r.e(13686),r.e(71944),r.e(97527),r.e(22249),r.e(51778),r.e(98947),r.e(26378),r.e(52009),r.e(79601),r.e(72712),r.e(77104),r.e(69756),r.e(7612),r.e(59352),r.e(77435),r.e(33719),r.e(35550),r.e(62567),r.e(51750),r.e(17746),r.e(42797),r.e(68775),r.e(11022),r.e(49029),r.e(10133),r.e(43927),r.e(18650),r.e(87122),r.e(12674),r.e(4828),r.e(84283),r.e(44341),r.e(98317),r.e(43587),r.e(35711),r.e(8089),r.e(23197),r.e(90489),r.e(64666),r.e(10095),r.e(30259),r.e(62621),r.e(45738),r.e(19604),r.e(13962),r.e(22831),r.e(80086),r.e(51818),r.e(87385),r.e(58415),r.e(356),r.e(1377),r.e(17292),r.e(34607),r.e(54694),r.e(65484),r.e(54894),r.e(79331),r.e(45524),r.e(83750),r.e(55851),r.e(70231),r.e(23145),r.e(14528),r.e(92480),r.e(47323),r.e(92792),r.e(59498),r.e(63121),r.e(13691),r.e(35094),r.e(97091),r.e(79832),r.e(56129),r.e(79637),r.e(65084),r.e(81647),r.e(8260),r.e(27241),r.e(71046),r.e(71713),r.e(36176),r.e(46822),r.e(36921),r.e(62762),r.e(37140),r.e(18080),r.e(48898),r.e(82031),r.e(42272),r.e(36739),r.e(89478),r.e(10297),r.e(95996),r.e(44084),r.e(30908),r.e(24283),r.e(13915),r.e(50536),r.e(4340),r.e(60548),r.e(95150),r.e(73089),r.e(2602),r.e(79547),r.e(84056),r.e(73306),r.e(83596),r.e(83537),r.e(50621),r.e(40211),r.e(43057),r.e(17456),r.e(84736),r.e(57978),r.e(78284),r.e(23055),r.e(55404),r.e(60687),r.e(98120),r.e(42170),r.e(33364),r.e(28449),r.e(48387),r.e(71553),r.e(97236),r.e(79579),r.e(9701),r.e(38757),r.e(42522),r.e(35813),r.e(91322),r.e(33584),r.e(50068),r.e(29672),r.e(33754),r.e(6850),r.e(65421),r.e(37445),r.e(2661),r.e(18397),r.e(39579),r.e(16796),r.e(23490),r.e(2919),r.e(4994),r.e(48383),r.e(44857),r.e(9320),r.e(51751),r.e(69394),r.e(57512),r.e(2825),r.e(80060),r.e(23376),r.e(53024),r.e(48457),r.e(72360),r.e(14003),r.e(72826),r.e(50460),r.e(66233),r.e(97821),r.e(19986),r.e(83907),r.e(45582),r.e(11999),r.e(12729),r.e(38544),r.e(13546),r.e(48537),r.e(46241),r.e(62564),r.e(28453),r.e(50092),r.e(25706),r.e(77748),r.e(402),r.e(36390),r.e(45392),r.e(71833),r.e(12869),r.e(43756),r.e(46383),r.e(40380),r.e(70436),r.e(31190),r.e(56555)]).then(r.bind(r,466307));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(466307,"../GlobalChatSidebar","lazy",t);return t()},function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){b(i,a,n,o,s,"next",e)}function s(e){b(i,a,n,o,s,"throw",e)}o(void 0)})})()}),v=()=>{let{value:e,loading:t}=(0,s.er)();return(0,a.Y)(l.JR,{errorBoundaryId:u.s.AssistantPanelNotebook,esComponent:c.Es.Assistant,fallback:(0,a.Y)(d.I,{}),children:(0,a.Y)("div",{"data-testid":"global-chat-sidebar",css:{display:"flex",flexDirection:"column",height:"100%",width:"100%"},children:(0,a.FD)(i.Suspense,{fallback:(0,a.Y)(E,{}),children:[t&&(0,a.Y)(E,{}),!t&&e&&(0,a.Y)(y,{}),!t&&!e&&(0,a.Y)(g,{link:h.A.DATABRICKS_ASSISTANT_FAQ})]})})})},E=()=>(0,a.Y)("div",{css:{position:"relative",width:"100%",height:"100%"},children:(0,a.Y)(o.y,{css:(0,n.AH)("position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);"),label:"Loading",size:"large"})})},697010:(e,t,r)=>{"use strict";r.d(t,{FZ:()=>l,I4:()=>s,fl:()=>o});var a,n=r(842082),i=r(29824);let o="application/x-databricks-schema-browser-entity";var s=((a={}).SCHEMA_BROWSER="schema browser",a);function l(e,t){let r=e.dataTransfer?.getData(o)||"";if(r&&(e=>{try{return JSON.parse(e),!0}catch(e){return!1}})(r)){let e=JSON.parse(r),a=(0,n.$o)(e);return e.objectType===i.an.TABLE&&t&&(a=`select * from ${a} limit 100`),a}return""}},700367:(e,t,r)=>{"use strict";r.d(t,{_:()=>i,y:()=>o});var a=r(507624),n=r(184991);function i(e){return(0,a.rS)(e)||(0,n.ug)(e)}function o(e){if((0,a.rS)(e))return(0,a.el)(e);if((0,n.ug)(e))return{fn:e}}},701801:(e,t,r)=>{"use strict";if(r.d(t,{W:()=>n}),13057==r.j)var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeflow.enableAiDiagnoseTool",!1)||(0,a.W)("ai_diagnose",!1)}},702263:(e,t,r)=>{"use strict";if(r.d(t,{I:()=>n}),13057==r.j)var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeflow.agenticJobsEnabled",!1)}},702868:(e,t,r)=>{"use strict";if(r.d(t,{G:()=>n,J:()=>o}),13057==r.j)var a=r(488655);function n(){let e=(0,a.Zp)();return{navigateToList(){e(o.getListUrl())},navigateToCreate(){e(o.getCreateUrl())},navigateToDetails(t,r){e(o.getDetailsUrl(t,r))},navigateToEdit(t){e(o.getEditUrl(t))}}}let i="/settings/workspace/security/instance-profiles";class o{static getListUrl(){return i}static getCreateUrl(){return`${i}/new`}static getDetailsUrl(e,t){let r=encodeURIComponent(e),a=t?`/${encodeURIComponent(t)}`:"";return`${i}/${r}${a}`}static getEditUrl(e){let t=encodeURIComponent(e);return`${i}/edit/${t}`}static deprecatedNavigate(e){window.location.assign(e)}static deprecatedNavigateToList(){let e=o.getListUrl();o.deprecatedNavigate(e)}static deprecatedNavigateToCreate(){let e=o.getCreateUrl();o.deprecatedNavigate(e)}static deprecatedNavigateToDetails(e,t){let r=o.getDetailsUrl(e,t);o.deprecatedNavigate(r)}}},703546:(e,t,r)=>{"use strict";r.d(t,{u:()=>n});var a=r(144781);let n=({selection:e,statements:t,cursorLocation:r})=>{let n,i,o,s,l,u=[],c=[],d=[],f=(0,a.k6)(e),p=(0,a.Te)(e),m=!1,g=0,h=!1;return 1===t.length?n=t[0]:(t.forEach(t=>{t.catalog&&(i=t.catalog,o=void 0),t.database&&(o=t.database),m||(s=i,l=o),t.activeCatalog=i,t.activeDatabase=o,!(0,a.RV)(e)&&(!h&&(0,a.Tj)(t.location,f,!0,!1)&&(h=!0),h&&(u.push(t),((0,a.Tj)(t.location,p,!1,!0)||t.location.last_line===p.lineNumber&&t.location.last_column===p.column-1)&&(h=!1))),m?m&&d.length<10&&d.push(t):(g++,(0,a.Tj)(t.location,r,!0,(0,a.RV)(e))?(m=!0,n=t):(10===c.length&&c.shift(),c.push(t)))}),m||(c.pop(),n=t[t.length-1])),!u.length&&n&&u.push(n),{activeStatement:n,activeCatalog:s,activeDatabase:l,statementIndex:g,selectedStatements:u,precedingStatements:c,followingStatements:d}}},705155:(e,t,r)=>{"use strict";r.d(t,{T:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.logMissingInternalName",!1)}},711819:(e,t,r)=>{"use strict";r.d(t,{IE:()=>f});var a=r(610435),n=r(593907),i=r.n(n),o=r(225842),s=r(802582),l=r(497895),u=r(342411),c=r(797246),d=r(869061);function f({objectType:e,browseOnly:t=!1,accessible:r=!0,withTooltip:n=!0,tooltipProps:p={},styleProps:m,avatarStyleSize:g=null,isPostgres:h=!1,securableKind:b}){let y=(0,u.tz)(),{theme:v}=(0,l.wn)(),E=null;if(b&&e){let t=c.Jk[e],r=t?.[b];r&&(E=y.formatMessage(r))}let I=h&&e in c.nX?c.nX[e]||null:c.Ix[e]||null,T=E??(I?y.formatMessage(I):null);if(t&&(T=y.formatMessage(c.OF)),r||(T=y.formatMessage({id:"lORa3c",defaultMessage:"This {entity} is not accessible from the current workspace."},{entity:i()(y.formatMessage(c.DN[e]))})),!T)return null;let w=d.e0[e],S=w&&void 0!==b&&b in w?w[b]:d.BV[e],k=S&&(0,a.Y)(S,{alt:T,"aria-label":T,css:t||!r?{color:v.colors.actionDisabledText}:void 0,style:m});if(!k)return null;return function({icon:e,title:t,withTooltip:r,tooltipProps:n,avatarStyleSize:i}){if(r){if(i)return(0,a.Y)(o.eu,{type:"entity",icon:(0,a.Y)(s.p,{title:t,...n,children:e}),label:t,size:i});return(0,a.Y)(s.p,{title:t,...n,children:e})}if(i)return(0,a.Y)(o.eu,{type:"entity",icon:e,label:t,size:i});return e}({icon:r?k:(0,a.Y)("span",{"data-testid":"strike-through-icon",css:{position:"relative","&:before":{position:"absolute",content:'""',left:0,top:"50%",right:0,borderTop:"2px solid",borderColor:v.colors.actionDisabledText,transform:"rotate(38deg)"}},children:k}),title:T,withTooltip:n,tooltipProps:p,avatarStyleSize:g})}},713907:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enableCustomClaimExternalValueOverridden",!1)}},717346:(e,t,r)=>{"use strict";r.d(t,{$:()=>o,W:()=>i});var a=r(84296),n=r(176258);function i(e){return a.Bv.isWidgetType(e.widgetType)}function o(e){return n.r.isWidgetType(e.widgetType)}},722708:(e,t,r)=>{"use strict";r.d(t,{$:()=>n});var a=r(441535);let n=()=>(0,a.W)("databricks.fe.lakeview.isMobxDraftDashboardEnabled",!1)},723562:(e,t,r)=>{"use strict";r.d(t,{DQ:()=>k,Er:()=>S,H6:()=>_,PD:()=>T,VJ:()=>R,iB:()=>C});var a=r(610435),n=r(944464),i=r.n(n),o=r(692738),s=r(336330),l=r(876726),u=r(140078),c=r(342411),d=r(441535),f=r(726977),p=r(278983),m=r(863708),g=r(22191),h=r(782357);let b={notebookEditor:f.s.UnifiedEditorNotebookEditor,notebookDiffViewer:f.s.UnifiedEditorNotebookDiffViewer,jobsEditor:f.s.UnifiedEditorJobsEditor,lakebuilderEditor:f.s.UnifiedEditorLakebuilderEditor,lakeviewEditor:f.s.UnifiedEditorLakeviewEditor,repoGitDiffCode:f.s.UnifiedEditorRepoGitDiffCode,repoGitMergeConflict:f.s.UnifiedEditorRepoGitMergeConflict,sqleReact:f.s.UnifiedEditorSqleReact,test:f.s.Test,storybook:f.s.Storybook,sqleAutocomplete:f.s.UnifiedEditorSqleAutocomplete,sqleFixme:f.s.UnifiedEditorSqleFixme,sqleDetails:f.s.UnifiedEditorSqleDetails,assistantCell:f.s.AssistantCell,assistantInput:f.s.AssistantPanel,jobsValueReferencesEditor:f.s.JobsUiRoot,dataRoomsEditor:f.s.DataRoomsRoot,playgroundEditor:f.s.PlaygroundChat,standaloneAlerts:f.s.StandaloneAlerts,ingestionPipelineEditor:f.s.IngestionPageWrapper,cleanroomNotebookContentView:f.s.CleanRoomNotebookContentView,lakeflowSettings:f.s.LakeflowPipelineAuthoringSettingsPanel,lakeviewCustomCalcExpressionEditor:f.s.UnifiedEditorLakeviewCustomCalcExpressionEditor,antlrIntellisense:f.s.UnifiedEditorAntlrIntellisense,staticNotebookEditor:f.s.UnifiedEditorStaticNotebookEditor,systemModule:f.s.UnifiedEditorSystemModule,lakeflowConversionWidget:f.s.UnifiedEditorLakeflowConversionWidget,clusterEditor:f.s.UnifiedEditorClusterEditor,sampleDataSQLEditor:f.s.UnifiedEditorSampleDataSqlEditor,policyFunctionEditor:f.s.UnifiedEditorPolicyFunctionEditor,lakewatchEditor:f.s.UnifiedEditorLakewatchEditor,lakewatchJsonEditor:f.s.UnifiedEditorLakewatchJsonEditor,lakewatchYamlEditor:f.s.UnifiedEditorLakewatchYamlEditor,mlflowEvalDatasetsJsonEditor:f.s.UnifiedEditorMlflowEvalDatasetsJsonEditor,dynamicWidgetSourceQueryEditor:f.s.DynamicWidgetSourceQueryEditor,richSqlEditor:f.s.UnifiedEditorRichSqlEditor},y=["No React Error Decoder link found","can't access dead object","Loading chunk"];function v(e){let t=e instanceof Error?e.message:String(e);return y.some(e=>t.match(e))}function E(e,t,r){(0,p.y)("clientsideEvent",{eventType:e,eventName:t},r)}let I=i()(E,3e4);function T(e,t,r){let a=t instanceof Error?t.message:String(t);((0,d.W)("databricks.fe.editor.throttleRecordUnifiedEditorError",!1)?I:E)(void 0===r?"UnifiedEditorCaughtError":"UnifiedEditorErrorBoundary",e,a)}function w(){return(0,a.Y)(l.S,{"data-testid":"fallback",title:(0,a.Y)(c.sA,{id:"qAdWdK",defaultMessage:"Error"}),description:(0,a.Y)(c.sA,{id:"kcl7GO",defaultMessage:"An error occurred while rendering this editor."}),image:(0,a.Y)(u.A,{})})}let S=({module:e,children:t})=>{let r=b[e];return(0,a.Y)(m.JR,{fallback:(0,a.Y)(w,{}),esComponent:g.Es.Editor,errorBoundaryId:r,errorFilter:v,onErrorCallback:(t,r)=>T(e,t,r.componentStack),children:t})},k=()=>{let{showErrorNotification:e}=(0,o.useContext)(h.h);return(0,o.useCallback)((t,r,a)=>{T(t,r,a),e(t)},[e])},A=()=>null,_=(e,t)=>(0,o.forwardRef)((r,n)=>{let i=k();return(0,a.Y)(s.tH,{fallback:(0,a.Y)(A,{}),onError:(e,r)=>i(t,e,r.componentStack),children:(0,a.Y)(e,{ref:n,...r})})}),C=()=>{let e=k();return(0,o.useCallback)((t,r)=>(...a)=>{try{return t(...a)}catch(t){e(r,t)}},[e])},R=(e,t)=>(...r)=>{try{return e(...r)}catch(e){T(t,e)}}},730642:(e,t,r)=>{"use strict";function a(e,t){e.evict({id:"ROOT_QUERY",fieldName:"unityCatalogSchemaNameReference",args:{fullName:t}}),e.gc()}function n(e){e.evict({id:"ROOT_QUERY",fieldName:"unityCatalogSchemaNameReference"}),e.evict({id:"ROOT_QUERY",fieldName:"unityCatalogCatalogNameReference"}),e.gc()}r.d(t,{L:()=>a,X:()=>n})},731167:(e,t,r)=>{"use strict";r.d(t,{EJ:()=>P,N7:()=>R,QF:()=>N,Sr:()=>M,Td:()=>_,er:()=>x,ur:()=>D,wn:()=>A});var a=r(452137),n=r.n(a),i=r(692738),o=r(737358),s=r(497895);if(13057==r.j)var l=r(672952);if(13057==r.j)var u=r(136079);if(13057==r.j)var c=r(620275);var d=r(418230),f=r(878723),p=r(223410),m=r(707865);if(13057==r.j)var g=r(74005);var h=r(508247),b=r(958336),y=r(714953);if(13057==r.j)var v=r(178949);if(13057==r.j)var E=r(860742);if(13057==r.j)var I=r(391763);var T=r(597341),w=r(148122),S=r(184123),k=r(846665);let A="sidebarStateChanged",_=()=>{let e=null!==(0,o.B6)(T.ge,window.location.pathname),t=null!==(0,o.B6)(h.U,window.location.pathname),r=null!==(0,o.B6)(b.v,window.location.pathname),a=null!==(0,o.B6)(m.H1,window.location.pathname);return(!(0,S.q)()||e||r)&&!t&&!a},C=()=>_()?w.ug:w.X1,R=(e=!1)=>{if(L.getIsPersonaSidebarHidden())return 0;let t=L.getPersonaSidebarEffectiveMode();switch(t){case f.zF.Expanded:if(e)return C();return w.rc;case f.zF.Collapsed:return C();default:(0,k.dr)(t,`${t} is unexpected value`)}return 0},M=()=>{if(L.getPersonaSidebarMode()===f.zF.Expanded)return w.rc;return C()},N=(e=!1)=>{let{theme:t}=(0,s.wn)(),r=(0,d.U)(`not (min-width: ${t.responsive.breakpoints.md}px)`),[,a]=(0,i.useState)({});return(0,i.useEffect)(()=>L.addListener(()=>a({}),e),[a,e]),R(r)},P=()=>{let e=x(),t=(0,y.ht)(e=>"sidebar"===e.placement?e.width:0);if(e)return t;return 0},D=()=>{let{value:e}=(0,l.er)(),{value:t}=(0,l.LL)(),r=(0,I.g)(),a=(0,E.useIsSelectGroupPage)(),n=(0,S.q)(),i=(0,T.TU)(),o=(0,b.l)(),s=(0,h.I)(),d=(0,c.s4)(),f=(0,u.GF)(),p=(0,m.Mk)(),y=(0,v.j0)(),w=(0,v.ug)(),k=(0,g.F)();if(w){if(y)return!1;if(t)return!0;return!1}return e&&!r&&!a&&!i&&!n&&!s&&!o&&!d&&!f&&!p&&!k},x=()=>{let e=D(),t=(0,y.ht)(e=>e.isVisible);return e&&t};class L{static getPersonaSidebarMode(){return L.getSidebarState().personaMenuMode||f.zF.Auto}static getPersonaSidebarEffectiveMode(){let e=L.getPersonaSidebarMode();if(e===f.zF.Expanded)return e;let{openPanel:t,expandIfNotCollapsed:r}=this.getSidebarState();return t&&r?f.zF.Expanded:f.zF.Collapsed}static getIsSidebarPanelOpen(){return!!L.getSidebarState().openPanel}static getIsAssistantVisible(){return y.ht.getState().isVisible}static getIsPersonaSidebarHidden(){return L.getSidebarState().hidden}static addListener(e,t=!1){if(!window.sidebar&&t)return()=>{};return n()(window.sidebar,"Sidebar hasn't been initialized yet"),window.sidebar.events.addEventListener(A,e),()=>{window.sidebar?.events.removeEventListener(A,e)}}static getSidebarState(){let e={personaMenuMode:p.T.getPersonaMenuMode()};return window.sidebar&&window.sidebar.state||e}}},732321:(e,t,r)=>{"use strict";r.d(t,{CZ:()=>y,Z3:()=>E,it:()=>v,jI:()=>p});var a=r(137797),n=r(692738),i=r(441535),o=r(5697),s=r(984741),l=r(187826),u=r(916852),c=r(279942),d=r(594669),f=r(993618);function p(e){if(e===o.Z6.Notebook)return"notebook";if(e&&u.Rl.includes(e))return"folder";return"file"}let m=[".txt",".csv",".md",".json"],g=["__pycache__",".egg-info"];function h(e){return new Set((0,d.g)(e??[]).map(f.v).filter(e=>!!e).map(s.e0))}function b({path:e,type:t,...r}){if(!e)return{isIncludedInPipeline:!1,isDirectlyIncludedInPipeline:!1,isPipelineRoot:!1};e=(0,s.e0)(e);let n="pipeline"in r?(0,s.e0)(r.pipeline?.spec?.rootPath):r.pipelineRootPath,o="pipeline"in r?h(r.pipeline?.spec?.libraries??[]):r.pipelinePaths,l=e===n;if(o.has(e)||o.has(`${e}/`))return{isIncludedInPipeline:!0,isDirectlyIncludedInPipeline:!0,isPipelineRoot:l,isIgnoredByRunner:!1};let{ignoredFiles:u,ignoredFolders:d}=(()=>{let e=(0,i.W)("dlt-pipelines.ignoredSuffixForSourceIncludes","__pycache__/,.egg-info/,.txt,.md,.csv,.json");if("string"!=typeof e)return{ignoredFiles:m,ignoredFolders:g};try{let t=e?.split(",")?.filter(e=>e.trim())??[],r=t.filter(e=>e.endsWith("/")).map(e=>e.slice(0,-1));return{ignoredFiles:t.filter(e=>!e.endsWith("/")),ignoredFolders:r}}catch{return{ignoredFiles:m,ignoredFolders:g}}})();for(let r of o)if(r.endsWith("/")&&e.startsWith(r)){let n=(0,a.extname)(e);if("file"===t&&u.includes(n))return{isIncludedInPipeline:!1,isDirectlyIncludedInPipeline:!1,isPipelineRoot:l,isIgnoredByRunner:!0};let i=e.substring(r.length);if(d.some(e=>i===e&&"folder"===t||i.startsWith(`${e}/`)||i.includes(`/${e}/`)))return{isIncludedInPipeline:!1,isDirectlyIncludedInPipeline:!1,isPipelineRoot:l,isIgnoredByRunner:!0};if("notebook"===t||"folder"===t||"file"===t&&n&&(0,c.k)(n))return{isIncludedInPipeline:!0,isDirectlyIncludedInPipeline:!1,isPipelineRoot:l,isIgnoredByRunner:!1};return{isIncludedInPipeline:!1,isDirectlyIncludedInPipeline:!1,isPipelineRoot:l,isIgnoredByRunner:!1,isInvalidIncludedFile:!0}}return{isIncludedInPipeline:!1,isDirectlyIncludedInPipeline:!1,isPipelineRoot:l,isIgnoredByRunner:!1}}function y(e){return b(e)}function v({pipeline:e}){let t=e?.spec?.libraries??null,r=(0,n.useMemo)(()=>h(t??[]),[t]),a=(0,n.useMemo)(()=>(0,s.e0)(e?.spec?.rootPath??null),[e?.spec?.rootPath]);return{pipelineContainsSourcePath:(0,n.useCallback)(({path:e,type:t})=>b({pipelinePaths:r,pipelineRootPath:a,path:e,type:t}),[r,a]),pipelinePaths:r}}function E(){let e=(0,n.useContext)(l.ij);return v({pipeline:e?.data?.pipeline??null})}},733940:(e,t,r)=>{"use strict";r.d(t,{Bw:()=>c,Ft:()=>h,GN:()=>I,Ic:()=>d,Ih:()=>p,PH:()=>m,RE:()=>E,UU:()=>b,nP:()=>v,sc:()=>g,yr:()=>l,z3:()=>f});var a,n,i=r(173463),o=r.n(i),s=r(342411),l=((a={}).MINUTE="Minute",a.HOUR="Hour",a.DAY="Day",a.WORKDAY="Workday",a.WEEK="Week",a.MONTH="Month",a);let u={Minute:1,Hour:2,Day:3,Workday:4,Week:5,Month:6};var c=((n={}).SUNDAY="Sunday",n.MONDAY="Monday",n.TUESDAY="Tuesday",n.WEDNESDAY="Wednesday",n.THURSDAY="Thursday",n.FRIDAY="Friday",n.SATURDAY="Saturday",n);let d={Minute:(0,s.zR)({id:"/quv1d",defaultMessage:"{count, plural, =1 {Minute} other {Minutes}}"}),Hour:(0,s.zR)({id:"cIFu+R",defaultMessage:"{count, plural, =1 {Hour} other {Hours}}"}),Day:(0,s.zR)({id:"mlfDgB",defaultMessage:"{count, plural, =1 {Day} other {Days}}"}),Workday:(0,s.zR)({id:"aQTmip",defaultMessage:"{count, plural, =1 {Workday} other {Workdays}}"}),Week:(0,s.zR)({id:"ibGc8O",defaultMessage:"{count, plural, =1 {Week} other {Weeks}}"}),Month:(0,s.zR)({id:"JwO6Eu",defaultMessage:"{count, plural, =1 {Month} other {Months}}"})},f={Sunday:(0,s.zR)({id:"4Dujo5",defaultMessage:"Sunday"}),Monday:(0,s.zR)({id:"U4XfOA",defaultMessage:"Monday"}),Tuesday:(0,s.zR)({id:"hZ5wHV",defaultMessage:"Tuesday"}),Wednesday:(0,s.zR)({id:"8FZ8Ch",defaultMessage:"Wednesday"}),Thursday:(0,s.zR)({id:"5opZ3I",defaultMessage:"Thursday"}),Friday:(0,s.zR)({id:"Vi8MmJ",defaultMessage:"Friday"}),Saturday:(0,s.zR)({id:"oElDLm",defaultMessage:"Saturday"})},p=(e,t=1,r,a)=>Object.values(l).filter(e=>a||"Workday"!==e).filter(e=>!r||"Minute"!==e).map(r=>({label:e.formatMessage(d[r],{count:t}),value:r,data:r})),m=e=>Object.values(c).map(t=>({label:e.formatMessage(f[t]),value:`${t}`,data:t})),g=(e,t=0)=>o()(t,e).map(e=>({label:e<10?`0${e}`:`${e}`,value:`${e}`,data:e})),h=(e,t)=>("Minute"===t?[1,2,3,4,5,6,10,12,15,20,30]:[1,2,3,4,6,8,12]).map(t=>({label:e.formatMessage(I.every,{frequency:t}),value:`${t}`,data:t})),b=(e,t)=>{if(e?.paused&&!t?.paused)return 1;if(!e?.paused&&t?.paused)return -1;return y(e?.quartz_cron_schedule,t?.quartz_cron_schedule)},y=(e,t)=>{let r=v(e),a=v(t);if(!r&&!a)return 0;if(!r)return -1;if(!a)return 1;if(r.unit!==a.unit)return u[r.unit]-u[a.unit];return r.interval-a.interval},v=e=>{if(!e||0===(e.match(RegExp("^(([0-5]?\\d|\\*) )(([0-5]?\\d|\\*)((-[0-5]?\\d)?/[0-5]?\\d)? )(((2[0-3])|([0-1]?\\d)|\\*)((-(2[0-3])|([0-1]?\\d))?/[0-2]?\\d)? )((((3[0-1])|([0-2]?\\d))|(\\*|\\?)) )((\\*|\\?) )(([1-7]|MON|TUE|WED|THU|FRI|SAT|SUN|MON-FRI)|(\\*|\\?))( [?,\\*])?$","gi"))||[]).length)return;let t=e.split(" "),r={};try{let e=t.findIndex(e=>e.includes("/")),a=t.findIndex(e=>"*"===e),n=t.findIndex(e=>"?"===e);if(-1!==e){if(a!==e+1&&n!==e+1)return;switch(r.interval=parseInt(t[e].split("/")[1],10),r.unit=Object.values(l)[e-1],r.unit){case"Hour":r.hours=parseInt(t[2],10)||0;case"Minute":r.minutes=parseInt(t[1],10)||0}}else if(r.interval=1,a<4||4===n&&"*"===t[5]||3===n&&"*"===t[5])-1!==n?r.unit=Object.values(l)[Math.min(a-1,n-1)]:r.unit=Object.values(l)[a-1],isNaN(parseInt(t[2],10))||(r.hours=parseInt(t[2],10)),isNaN(parseInt(t[1],10))||(r.minutes=parseInt(t[1],10));else if(/^MON-FRI$/i.test(t[5]))r.unit="Workday",r.interval=1,r.hours=parseInt(t[2],10),r.minutes=parseInt(t[1],10);else if(r.unit=3===t.findIndex(e=>"?"===e)?"Week":"Month","Week"===r.unit){let e=parseInt(t[5],10)-1,a=Object.entries(c).find(([e])=>t[5].toUpperCase()===e.substr(0,3).toUpperCase());if(a){let[,e]=a;r.weekday=e}else{if(isNaN(e))return;r.weekday=Object.values(c)[e]}r.hours=parseInt(t[2],10),r.minutes=parseInt(t[1],10)}else r.day=parseInt(t[3],10),r.hours=parseInt(t[2],10),r.minutes=parseInt(t[1],10);if(r.seconds=parseInt(t[0],10),Object.values(r).includes(NaN))return}catch{return}return r},E=e=>{let{unit:t,interval:r,seconds:a,day:n,weekday:i}=e,{hours:o,minutes:s}=e,l=(e,t)=>e>1?`${t}/${e}`:"*";switch(t){case"Minute":return`${a} ${l(r,s)} * * * ?`;case"Hour":return`${a} ${s} ${l(r,o)} * * ?`;case"Day":return`${a} ${s} ${o} * * ?`;case"Workday":return`${a} ${s} ${o} ? * MON-FRI`;case"Week":if(i)return`${a} ${s} ${o} ? * ${i.substr(0,3)}`;case"Month":return`${a} ${s} ${o} ${n} * ?`}},I={every:(0,s.zR)({id:"n8+peH",defaultMessage:"Every {frequency}"})}},736813:(e,t,r)=>{"use strict";r.d(t,{D:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.discovery.rowDetailsPopoverLayoutV2.killswitch",!1)}},736996:(e,t,r)=>{"use strict";if(r.d(t,{LZ:()=>i,V8:()=>s,X4:()=>m,ZQ:()=>l,Zu:()=>o,a2:()=>c,eh:()=>u,lf:()=>d,xs:()=>f,yt:()=>p}),13057==r.j)var a=r(497895);var n=r(993533);let i=8,o=12,s=24,l=60,u="system.Featured",c="TABLE_METRIC_VIEW";function d(e){let{theme:t}=(0,a.wn)();return e?0:2*t.spacing.lg}let f=[n.Clx.DASHBOARD_V3,n.Clx.DATA_ROOM,n.Clx.NOTEBOOK,n.Clx.QUERY,n.Clx.UC_TABLE,n.Clx.UC_MODEL,n.Clx.ENDPOINT_CENTRIC_ENDPOINT],p=[n.iId.ML_MODEL,n.iId.ML_ENDPOINT],m=[n.iId.ML_MODEL]},740931:(e,t,r)=>{"use strict";r.d(t,{m:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enableCopyPasteDataset",!1)}},742991:(e,t,r)=>{"use strict";r.d(t,{M:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enableResultsTableEnabledForMetricView",!1)}},743048:(e,t,r)=>{"use strict";r.d(t,{GZ:()=>u,Ln:()=>i,hK:()=>n,jg:()=>s,lb:()=>o,sk:()=>l});var a=r(123229);function n(e){(0,a.$)().set("mostRecentBudgetPolicyId",e)}function i(){return(0,a.$)().get("mostRecentBudgetPolicyId")}function o(e){(0,a.$)().set("assistantBudgetPolicyId",e)}function s(){return(0,a.$)().get("assistantBudgetPolicyId")}function l(e){(0,a.$)().set("dabsAuthoringBudgetPolicyId",e)}function u(){return(0,a.$)().get("dabsAuthoringBudgetPolicyId")}},743603:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{O:()=>l});var n=r(692738),i=r(698744),o=r(214056),s=e([o]);o=(s.then?(await s)():s)[0];let l=({editorInstance:e,placeholder:t,isEnabled:r,showOnlyWhenFocused:a})=>{let s=(0,n.useRef)(null),l=(0,n.useCallback)(e=>{if(!s.current){let r=document.createElement("div");r.setAttribute("style",e),r.setAttribute("class","monaco-placeholder"),(0,i.render)(t,r),s.current=r}let r=s.current;return{getId:()=>"placeholder",suppressMouseDown:!0,getDomNode:()=>r,getPosition:()=>({position:{column:1,lineNumber:1},positionAffinity:4,preference:[0]})}},[t]),u=(0,n.useRef)(null);return(0,n.useEffect)(()=>{if(e&&r){let t=()=>{u.current&&e.removeContentWidget(u.current),u.current=null},r=()=>{if(!e.getValue()&&(!a||e.hasTextFocus()))if(u.current)e.layoutContentWidget(u.current);else{let t=l(`width: max-content;
color: var(--vscode-input-placeholderForeground);
line-height: ${e.getOption((0,o.Q)().EditorOption.lineHeight)}px;
font-size: ${e.getOption((0,o.Q)().EditorOption.fontSize)}px;
font-family: ${e.getOption((0,o.Q)().EditorOption.fontFamily)};
`);e.addContentWidget(t),u.current=t}else t()};(!a||e.hasTextFocus())&&r();let n=[];return n.push(e.onDidFocusEditorText(()=>r())),n.push(e.onDidBlurEditorText(()=>r())),n.push(e.onDidChangeModelContent(()=>{r()})),()=>{n.forEach(e=>e.dispose()),t(),s.current&&((0,i.unmountComponentAtNode)(s.current),s.current=null)}}},[e,r,l,a]),{placeholderWidgetRef:u}};a()}catch(e){a(e)}})},747674:(e,t,r)=>{"use strict";r.d(t,{U:()=>i});var a=r(586356),n=r(409666);let i=(0,r(315592).Xr)({type:"filter-date-range-picker",channelIndex:{fields:1},validateEditorSpec:e=>({validatedSpec:e}),version:n.B0,getEncodingMapMeta:()=>n.OM,allowDisaggregatedData:!1,allowSelection:!0,isRenderable:a.q,normalizeDecoupledSpec:(e,t)=>e})},756340:(e,t,r)=>{"use strict";if(r.d(t,{h:()=>n}),13057==r.j)var a=r(441535);let n=()=>(0,a.W)("databricks.fe.jaws.enableMatrixViewLazyLoadTaskRuns",!1)},761543:(e,t,r)=>{"use strict";r.d(t,{gc:()=>l,wS:()=>u});var a=r(267647),n=r(169750),i=r(907140),o=r(797500);function s(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}let l=e=>{let{UserReferencedObjects:t=[]}=e;return t.length>0?`Here are details about objects the user referenced in the question: 
${t.map(e=>{var t,r,a,n;switch(e.type){case"table":return(0,i.P)(e.object);case"variable":return(0,o.ui)("python",[e.object]);case"skill":return`Referenced Skill: skill:${e.object.name}:${e.object.path}${e.object.description?` (${e.object.description})`:""}`;case"mlflowEvaluationRun":return t=e.object,[`The user referenced an MLflow Evaluation Run (use readAssetById with assetType="mlflowEvaluationRun", assetId="${t.runId}" to read it).`,`Name: ${t.name}`,`Run ID: ${t.runId}`,t.experimentId&&`Experiment ID: ${t.experimentId}`,t.status&&`Status: ${t.status}`,null!=t.startTime&&`Start Time: ${t.startTime}`,null!=t.endTime&&`End Time: ${t.endTime}`,!!t.metrics?.length&&`Metrics: ${JSON.stringify(t.metrics)}`,t.tags?.length&&`Tags: ${JSON.stringify(t.tags)}`].filter(Boolean).join("\n");case"mlflowDataset":return r=e.object,[`The user referenced an MLflow Dataset (use readAssetById with assetType="mlflowDataset", assetId="${r.datasetId}" to read it).`,`Name: ${r.name}`,`Dataset ID: ${r.datasetId}`,r.experimentId&&`Experiment ID: ${r.experimentId}`,r.description&&`Description: ${r.description}`,r.sourceType&&`Source Type: ${r.sourceType}`].filter(Boolean).join("\n");case"mlflowJudge":return a=e.object,[`The user referenced an MLflow Judge/Scorer (use readAssetById with assetType="mlflowJudge", assetId="${a.experimentId}:${a.scorerId}" to read it).`,`Name: ${a.name}`,`Scorer ID: ${a.scorerId}`,`Experiment ID: ${a.experimentId}`,a.scorerType&&`Scorer Type: ${a.scorerType}`,a.description&&`Description: ${a.description}`].filter(Boolean).join("\n");case"mlflowLabelingSchema":return n=e.object,[`The user referenced an MLflow Labeling Schema (use readAssetById with assetType="mlflowLabelingSchema", assetId="${n.experimentId}:${n.name}" to read it).`,`Name: ${n.name}`,`Type: ${n.type}`,`Experiment ID: ${n.experimentId}`,n.dataType&&`Data Type: ${n.dataType}`,n.instruction&&`Instruction: ${n.instruction}`,!!n.options?.length&&`Options: ${n.options.join(", ")}`,!!n.overrides?.length&&`Overrides: ${JSON.stringify(n.overrides)}`].filter(Boolean).join("\n");default:return"id"in e?`Referenced ${e.type}: ${e.type}:${e.id}:${e.label}`:""}}).join("\n")}
`:""},u=(0,a.N)(n.E.REFERENCE_OBJECT,e=>{var t;return(t=function*(){return(e=>{let{contextObject:t}=e;return{UserReferencedObjects:t.userReferencedObjects}})(e)},function(){var e=this,r=arguments;return new Promise(function(a,n){var i=t.apply(e,r);function o(e){s(i,a,n,o,l,"next",e)}function l(e){s(i,a,n,o,l,"throw",e)}o(void 0)})})()},e=>({includeReferenceObject:!!e.UserReferencedObjects?.length}),l)},762047:(e,t,r)=>{"use strict";r.d(t,{O:()=>n});var a=r(191431);function n(e){if(!(0,a.Q)())return e;return e.map(e=>e.file||e.notebook?{glob:{include:e.file?.path??e.notebook?.path}}:e)}},763472:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{EM:()=>m,F3:()=>k,GX:()=>C,Go:()=>h,Kl:()=>W,Mo:()=>S,N3:()=>E,Py:()=>b,Qr:()=>w,ZE:()=>A,bw:()=>U,co:()=>v,g4:()=>B,hY:()=>_,qB:()=>p,vS:()=>I,xh:()=>f});var n=r(432993),i=r(559499),o=r(625066),s=r(517171),l=r(329099),u=r(527219),c=r(713029),d=e([i,u,s]);[i,u,s]=d.then?(await d)():d;let w="databricks.action.goToDefinition",S="databricks.action.peekDefinition",k="databricks.action.findReferences",A="editor.action.revealDefinition",_="editor.action.peekDefinition",C="editor.action.goToReferences",R=/^\s*%/,M=/^\s*%%/,N=/^\s*%%time/,P=/^\s*pip\s/,D=/^\s*!/,x=/^\s*\?/,L=/\?\s*$/,O=/^\s*#/,F=[{predicate:P.test.bind(P),transformation:e=>"# "+e},{predicate:R.test.bind(R),transformation:e=>"# "+e},{predicate:N.test.bind(N),transformation:e=>"# "+e},{predicate:D.test.bind(D),transformation:e=>"# "+e},{predicate:x.test.bind(x),transformation:e=>"# "+e},{predicate:L.test.bind(L),transformation:e=>"# "+e}],$=[["In","{}"],["Out","{}"],["_ih","[]"],["_oh","{}"],["_dh","[]"],["_","None"],["__","None"],["___","None"],["_i","None"],["_ii","None"],["_sqldf","spark.createDataFrame([], schema=[])"]].map(([e,t])=>`${e}=${t}`).join(";"),Y=["from databricks.sdk.runtime import display, displayHTML, getArgument, sc, spark, sql, sqlContext, table, udf","from dbruntime.dbutils import DBUtils as dbutils","from IPython import get_ipython",$].flat().join(";"),U=(Y.match(/\n/g)||[]).length+1,B="\n\n# COMMAND ----------\n\n",W=e=>-1!==(0,c.Tb)(e??"").start;function f(e,t=null){if(!e)return"";let r=(0,i.jl)(e.get("guid")),a=t??1;if(a>0&&"run"===e.getLanguage()){let t=e.getSubCommands().filter(e=>["python","run"].includes(e?.getLanguage()??"")).map(e=>f(e,a-1));if(t.length>0)return t.join(B)}if(void 0===r||(r?.getModel()?.isDisposed()??!0))return e.getCommand();return(0,u.Vo)(r)}function p(e){let{start:t,end:r}=(0,c.Tb)(e);if(-1===t||-1===r)return null;return e.substring(t,r)}function m(e=null,t){if(!e)return"\n";let r=e.getTopLevelCommands().map(e=>f(e));if(g(r))return"\n";return y(r,e.get("language")??l.I1.Python,(0,o.gX)(t))+"\n"}function g(e){return e.map(e=>e.length).reduce((e,t)=>e+t,0)>65e3}function h(e,t,r,a){if(!e)return"\n";let n=e.getTopLevelCommands().map(e=>{if(e.id===t.id)return r;return f(e)});if(g(n))return"\n";return y(n,e.get("language")??l.I1.Python,(0,o.gX)(a))+"\n"}function b(e,t,r){if((0,c.$E)(e,t,void 0,!0)!==l.Eu.Python||!r&&M.test(e)&&!N.test(e))return e.split("\n").map(e=>T("# "+e)).join("\n");if(r)return e;return e.split("\n").map(e=>{let t=F.find(t=>t.predicate(e));return t?T(t.transformation(e)):e}).join("\n")}function y(e,t,r){let a=e.flatMap(e=>b(e,t,r)),n=(a=[Y,...a]).join("\n");return n.length<=65e3?n:""}let V=n.n.generateUuidV4();function v(e=null){let t=e?.id?.toString();if(!t)throw Error("Notebook URI not defined.");return E(t)}function E(e){if((0,s.isFileUri)(e))return e;return`${s.NOTEBOOK_URI_PREFIX}/${V}/${e}`}function I(e){if(e.startsWith(`${s.NOTEBOOK_URI_PREFIX}/`))return e.split("/").pop();if((0,s.isFileUri)(e))return e.slice(`${s.FILE}://`.length)}function T(e){if(O.test(e))return e.slice(0,50)+(e.length>50?"...<truncated>":"");return e}a()}catch(e){a(e)}})},767399:(e,t,r)=>{"use strict";r.d(t,{S:()=>a});let a=["schema-browser","favorite-tables"]},768117:(e,t,r)=>{"use strict";r.d(t,{h:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enableDatasetQueryProfiler",!0)}},768564:(e,t,r)=>{"use strict";r.d(t,{b:()=>o});var a=r(986784),n=r(707076),i=r(204645);function o(){return(0,a.i)()&&(0,n.MH)()&&!(0,i.q)()}},768583:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("path",{fill:"currentColor",d:"M4.5 2.5h9v11h-9V11H3v3.25c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75V1.75a.75.75 0 0 0-.75-.75H3.75a.75.75 0 0 0-.75.75V5h1.5z"}),(0,a.Y)("path",{fill:"currentColor",d:"M12.06 8 8.03 3.97 6.97 5.03l2.22 2.22H1v1.5h8.19l-2.22 2.22 1.06 1.06z"})]})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="ArrowInIcon";let l=s},770037:(e,t,r)=>{var a={"./af":[135241,35241],"./af.js":[135241,35241],"./af.min":[995787,95787],"./af.min.js":[995787,95787],"./ar":[878197,78197],"./ar.js":[878197,78197],"./ar.min":[721759,21759],"./ar.min.js":[721759,21759],"./be":[24623,24623],"./be.js":[24623,24623],"./be.min":[803697,3697],"./be.min.js":[803697,3697],"./bg":[252497,52497],"./bg.js":[252497,52497],"./bg.min":[599155,99155],"./bg.min.js":[599155,99155],"./ca":[728890,28890],"./ca.js":[728890,28890],"./ca.min":[555956,55956],"./ca.min.js":[555956,55956],"./cs":[735456,35456],"./cs.js":[735456,35456],"./cs.min":[328250,28250],"./cs.min.js":[328250,28250],"./da":[290481,90481],"./da.js":[290481,90481],"./da.min":[101395,1395],"./da.min.js":[101395,1395],"./de":[691341,91341],"./de.js":[691341,91341],"./de.min":[879255,79255],"./de.min.js":[879255,79255],"./en":[47957,47957],"./en.js":[47957,47957],"./en.min":[543679,43679],"./en.min.js":[543679,43679],"./es":[569346,69346],"./es.js":[569346,69346],"./es.min":[847580,47580],"./es.min.js":[847580,47580],"./fa":[478919,78919],"./fa.js":[478919,78919],"./fa.min":[499433,99433],"./fa.min.js":[499433,99433],"./fi":[300591,591],"./fi.js":[300591,591],"./fi.min":[850161,50161],"./fi.min.js":[850161,50161],"./fr":[605610,5610],"./fr.js":[605610,5610],"./fr.min":[768676,68676],"./fr.min.js":[768676,68676],"./he":[496657,96657],"./he.js":[496657,96657],"./he.min":[670323,70323],"./he.min.js":[670323,70323],"./hu":[301409,1409],"./hu.js":[301409,1409],"./hu.min":[84611,84611],"./hu.min.js":[84611,84611],"./id":[929343,29343],"./id.js":[929343,29343],"./id.min":[500481,481],"./id.min.js":[500481,481],"./it":[579036,56655],"./it.js":[579036,56655],"./it.min":[1265,1265],"./it.min.js":[1265,1265],"./ja":[519235,19235],"./ja.js":[519235,19235],"./ja.min":[177277,77277],"./ja.min.js":[177277,77277],"./ko":[379788,79788],"./ko.js":[379788,79788],"./ko.min":[91934,91934],"./ko.min.js":[91934,91934],"./my":[174296,74296],"./my.js":[174296,74296],"./my.min":[263346,63346],"./my.min.js":[263346,63346],"./nb":[415602,15602],"./nb.js":[415602,15602],"./nb.min":[712140,12140],"./nb.min.js":[712140,12140],"./nl":[721132,21132],"./nl.js":[721132,21132],"./nl.min":[445758,45758],"./nl.min.js":[445758,45758],"./pl":[924770,24770],"./pl.js":[924770,24770],"./pl.min":[665020,65020],"./pl.min.js":[665020,65020],"./pt_BR":[852521,52521],"./pt_BR.js":[852521,52521],"./pt_BR.min":[114859,14859],"./pt_BR.min.js":[114859,14859],"./pt_PT":[379409,79409],"./pt_PT.js":[379409,79409],"./pt_PT.min":[721971,21971],"./pt_PT.min.js":[721971,21971],"./ro":[227353,27353],"./ro.js":[227353,27353],"./ro.min":[887067,87067],"./ro.min.js":[887067,87067],"./ru":[652079,52079],"./ru.js":[652079,52079],"./ru.min":[256753,56753],"./ru.min.js":[256753,56753],"./sk":[485640,85640],"./sk.js":[485640,85640],"./sk.min":[836514,36514],"./sk.min.js":[836514,36514],"./sl":[281693,81693],"./sl.js":[281693,81693],"./sl.min":[394215,94215],"./sl.min.js":[394215,94215],"./sv":[553091,53091],"./sv.js":[553091,53091],"./sv.min":[533501,33501],"./sv.min.js":[533501,33501],"./sw":[855100,55100],"./sw.js":[855100,55100],"./sw.min":[245070,45070],"./sw.min.js":[245070,45070],"./th":[221258,21258],"./th.js":[221258,21258],"./th.min":[130564,30564],"./th.min.js":[130564,30564],"./tr":[523896,23896],"./tr.js":[523896,23896],"./tr.min":[344549,66930],"./tr.min.js":[344549,66930],"./uk":[472986,72986],"./uk.js":[472986,72986],"./uk.min":[855636,55636],"./uk.min.js":[855636,55636],"./vi":[969983,69983],"./vi.js":[969983,69983],"./vi.min":[969729,69729],"./vi.min.js":[969729,69729],"./zh_CN":[144246,44246],"./zh_CN.js":[144246,44246],"./zh_CN.min":[92680,92680],"./zh_CN.min.js":[92680,92680],"./zh_TW":[79826,79826],"./zh_TW.js":[79826,79826],"./zh_TW.min":[655788,55788],"./zh_TW.min.js":[655788,55788]};function n(e){if(!r.o(a,e))return Promise.resolve().then(()=>{var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=a[e],n=t[0];return r.e(t[1]).then(()=>r.t(n,23))}n.keys=()=>Object.keys(a),n.id=770037,e.exports=n},776667:(e,t,r)=>{"use strict";r.d(t,{k:()=>n});var a=r(441535);function n(){return!(0,a.W)("databricks.fe.lakeview.enableForceSyncServerPageLayoutKillSwitch",!1)}},777517:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 0a.75.75 0 0 1 .75.75V3h5.5a.75.75 0 0 1 .75.75V6h.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75H15v2.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V12H.75a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 .75 6H1V3.75A.75.75 0 0 1 1.75 3h5.5V.75A.75.75 0 0 1 8 0M2.5 4.5v9h11v-9zM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6.25 2.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="RobotIcon";let l=s},779862:(e,t,r)=>{"use strict";r.d(t,{DV:()=>f,Gy:()=>E,T5:()=>p,Zp:()=>g,d4:()=>T,fl:()=>m,qv:()=>h,z5:()=>I});var a=r(974657),n=r.n(a),i=r(377063),o=r.n(i),s=r(22191),l=r(952067),u=r(911090),c=r(749850),d=r(301527);function f(e){return{scale:function({type:e,fn:t,yAxis:r,sort:a,reverse:n,customSortOrder:i,mappings:o}){switch(e){case"quantitative":return m({yAxis:r,reverse:n,fn:t});case"temporal":return{type:e};case"categorical":return p({sort:a,reverse:n,customSortOrder:i,mappings:o})}}(e)}}function p({sort:e,reverse:t,customSortOrder:r,mappings:a}){let n=(0,d._)({sort:e,reverse:t,customSortOrder:r});return{type:"categorical",...n?{sort:n}:{},...a?{mappings:a}:{}}}function m({yAxis:e,reverse:t,fn:r}){var a;return{type:"quantitative",...t?{reverse:!0}:{},...(a=e)&&(void 0!==a.rangeMin||void 0!==a.rangeMax)?{domain:function({rangeMin:e,rangeMax:t}){return{...void 0!==e?{min:e}:{},...void 0!==t?{max:t}:{}}}(a)}:{},...r?{fn:r}:{}}}function g({fieldName:e,columns:t,transform:r,scale:a}){if(a)return a;if("*"===e)return{type:"quantitative"};{let a=t.find(t=>t.name===e)?.type;if(a)return(0,l.SV)(a,r)}throw Error(c.sz)}function h(e){switch(e){case"logarithmic":return{type:"quantitative",fn:{type:"symlog"}};case"datetime":return{type:"temporal"};case"linear":return{type:"quantitative"};case"category":return{type:"categorical"};default:return}}function b(e){return e}function y(e){if("null"===e)return null;return Number(e)}let v={integer:y,float:y,decimal:y,"*":y,boolean:e=>"true"===e||"false"!==e&&null,date:b,datetime:b,complex:b,string:b};function E(e){return v[e]}function I(e,t){let r=Object.entries(e).filter(([e,{zIndex:t}])=>void 0!==t);if(r.length>0){let e=n()(r,([e,{zIndex:t}])=>t).map(([e,t])=>e),a=v[t];return e.map(a)}}function T(e,t,r,a,n){return function(e,t){let r=[];if(e){for(let[a,n]of Object.entries(e))if(n.color){let e=t(a);r.push({value:e,color:n.color})}}return r.length>0?r:void 0}("pie"===r?e:t,function(e,t){switch(e){case"integer":case"float":case"decimal":case"*":return y;case"boolean":return e=>"true"===e||"false"!==e&&null;case"date":case"datetime":let r=t?.timeFormat?.format;return r?e=>Number(o().utc(e,r)):e=>Number(e);case"complex":case"string":case void 0:case null:return b;default:return(0,u.K)(e,s.Es.Visualizations),b}}(a,n))}},782357:(e,t,r)=>{"use strict";r.d(t,{F:()=>l,h:()=>s});var a=r(610435),n=r(692738),i=r(258182),o=r(342411);let s=n.createContext({showErrorNotification:()=>{}}),l=({children:e})=>{let[t,r]=(0,n.useState)(null),o=(0,n.useCallback)(e=>r(e),[]);return(0,a.Y)(i.Provider,{children:(0,a.FD)(s.Provider,{value:{showErrorNotification:o},children:[e,(0,a.Y)(u,{module:t,setModule:r}),(0,a.Y)(i.Viewport,{})]})})},u=({module:e,setModule:t})=>(0,a.FD)(i.Root,{componentId:"codegen_editor_src_utils_components_errornotification.tsx_48",onOpenChange:e=>{e||t(null)},open:null!==e,severity:"error",duration:3e3,children:[(0,a.Y)(i.Title,{children:(0,a.Y)(o.sA,{id:"5By2Yp",defaultMessage:`Something went wrong with {module, select,
            sqleAutocomplete {SQL autocomplete}
            sqleFixme {SQL error highlighting}
            sqleDetails {SQL hover details}
            other {the editor}
          }.`,values:{module:e}})}),(0,a.Y)(i.Close,{componentId:"codegen_editor_src_utils_components_errornotification.tsx_61"})]})},785582:(e,t,r)=>{"use strict";r.d(t,{m:()=>a});class a extends Promise{onCancel;cancelPrevented;completed;cancelled;constructor(e){let t,r=!1;super((a,n)=>e(e=>{r=!0,a(e)},e=>{r=!0,n(e)},e=>t=e)),this.onCancel=t,this.completed=()=>r}cancel(){this.completed()||this.cancelled||this.cancelPrevented||(this.onCancel&&this.onCancel(),this.cancelled=!0)}preventCancel(){this.cancelPrevented=!0}static reject(e){return new a((t,r)=>{r(e)})}static resolve(e){return new a(t=>{t(e)})}}},791229:(e,t,r)=>{"use strict";r.d(t,{U:()=>s,a:()=>o});var a=r(537287),n=r(993533),i=r(521200);let o=e=>{if(!e)return!1;{let{kind:t,enableServerlessCompute:r,enable_serverless_compute:a}=e;if(t===n.ch$.SERVERLESS_PREVIEW||t===n.ch$.SERVERLESS_REPL_VM)return!0;if(void 0!==r)return r;if(void 0!==a)return a}if("attrs"in e){let{kind:t,enableServerlessCompute:r}=e.attrs??{};return t===n.ch$.SERVERLESS_PREVIEW||t===n.ch$.SERVERLESS_REPL_VM||r}if("attributes"in e){let{kind:t,enableServerlessCompute:r}=e.attributes??{};return t===n.ch$.SERVERLESS_PREVIEW||t===n.ch$.SERVERLESS_REPL_VM||r}};function s(e,t){return(0,i.Qb)()&&!!o(e)&&(0,a.cd)(t)}},796775:(e,t,r)=>{"use strict";r.d(t,{d:()=>i,m:()=>n});var a=r(988759);let n=(0,r(696514).fH)("PersonaNav::ActivePersona"),i=(0,a.g)("Nav::openAppSwitcher")},797246:(e,t,r)=>{"use strict";r.d(t,{DN:()=>u,Ix:()=>c,Jk:()=>d,OF:()=>s,nX:()=>f,nw:()=>l});var a=r(342411),n=r(641760),i=r(29824),o=r(150924);let s=(0,n.zt)()?(0,a.zR)({id:"oUyUvJ",defaultMessage:"You are only permitted to see metadata for this asset. Request additional permissions from the object's page"}):(0,a.zR)({id:"m+UfjI",defaultMessage:"You are only permitted to see metadata for this asset. Please contact the owner for additional permission"}),l=(0,a.zR)({id:"H1i5CS",defaultMessage:"Online store catalog"}),u={[i.an.CATALOG]:(0,a.zR)({id:"gST/Fz",defaultMessage:"catalog"}),[i.an.DATABASE]:(0,a.zR)({id:"Q2CEcK",defaultMessage:"schema"}),[i.an.TABLE]:(0,a.zR)({id:"MnQokr",defaultMessage:"table"}),[i.an.VIEW]:(0,a.zR)({id:"1/D8JH",defaultMessage:"view"}),[i.an.MATERIALIZED_VIEW]:(0,a.zR)({id:"F9towg",defaultMessage:"materialized view"}),[i.an.STREAMING_TABLE]:(0,a.zR)({id:"c71VXl",defaultMessage:"streaming table"}),[i.an.VOLUME]:(0,a.zR)({id:"upmcHZ",defaultMessage:"volume"}),[i.an.FUNCTION]:(0,a.zR)({id:"aP8Sqb",defaultMessage:"function"}),[i.an.FUNCTION_FEATURE_SPEC]:(0,a.zR)({id:"7qdK7+",defaultMessage:"function feature spec"}),[i.an.REGISTERED_MODEL]:(0,a.zR)({id:"3Y7acL",defaultMessage:"model"}),[i.an.REGISTERED_MODEL_VERSION]:(0,a.zR)({id:"vo02Jv",defaultMessage:"model version"}),[i.an.STORAGE_CREDENTIAL]:(0,a.zR)({id:"XkdeUT",defaultMessage:"storage credential"}),[i.an.CREDENTIAL]:(0,a.zR)({id:"XXi9AE",defaultMessage:"credential"}),[i.an.EXTERNAL_LOCATION]:(0,a.zR)({id:"gpTkYX",defaultMessage:"external location"}),[i.an.INBOUND_SHARED_NOTEBOOK_FILE]:(0,a.zR)({id:"2QTgI/",defaultMessage:"shared notebook file"}),[i.an.CONNECTION]:(0,a.zR)({id:"L+HZOe",defaultMessage:"connection"}),[i.an.SHARE]:(0,a.zR)({id:"HQxjso",defaultMessage:"share"}),[i.an.RECIPIENT]:(0,a.zR)({id:"M7UQAS",defaultMessage:"recipient"}),[i.an.PROVIDER]:(0,a.zR)({id:"PvVChz",defaultMessage:"provider"}),[i.an.METASTORE]:(0,a.zR)({id:"2irW3W",defaultMessage:"metastore"}),[i.an.COLUMN]:(0,a.zR)({id:"fwB/LS",defaultMessage:"column"}),[i.an.VOLUME_FILE]:(0,a.zR)({id:"5Cy++b",defaultMessage:"volume file"}),[i.an.VOLUME_FOLDER]:(0,a.zR)({id:"dOa8bp",defaultMessage:"volume folder"}),[i.an.CLEAN_ROOM]:(0,a.zR)({id:"OZVVYP",defaultMessage:"clean room"}),[i.an.VECTOR_INDEX]:(0,a.zR)({id:"w5dYYn",defaultMessage:"vector search index"}),[i.an.ONLINE_VIEW]:(0,a.zR)({id:"mbZFpH",defaultMessage:"online table"}),[i.an.METRIC_VIEW]:(0,a.zR)({id:"q71GSt",defaultMessage:"metric view"}),[i.an.EXTERNAL_METADATA]:(0,a.zR)({id:"gqNYH3",defaultMessage:"external metadata"}),[i.an.SECRET]:(0,a.zR)({id:"Y8FCE6",defaultMessage:"secret"})},c=(0,a.YK)({[i.an.CATALOG]:{id:"9Q4FT5",defaultMessage:"Catalog"},[i.an.DATABASE]:{id:"FWxl06",defaultMessage:"Schema"},[i.an.TABLE]:{id:"6soA0k",defaultMessage:"Table"},[i.an.VIEW]:{id:"Rw416Q",defaultMessage:"View"},[i.an.MATERIALIZED_VIEW]:{id:"WUAUbP",defaultMessage:"Materialized view"},[i.an.STREAMING_TABLE]:{id:"Zi/bxb",defaultMessage:"Streaming table"},[i.an.VOLUME]:{id:"1dS20z",defaultMessage:"Volume"},[i.an.FUNCTION]:{id:"VI+Sr3",defaultMessage:"Function"},[i.an.FUNCTION_FEATURE_SPEC]:{id:"sqDlGe",defaultMessage:"Function feature spec"},[i.an.REGISTERED_MODEL]:{id:"I01Ad4",defaultMessage:"Model"},[i.an.REGISTERED_MODEL_VERSION]:{id:"LRV0mb",defaultMessage:"Model version"},[i.an.STORAGE_CREDENTIAL]:{id:"bDEJaI",defaultMessage:"Storage credential"},[i.an.CREDENTIAL]:{id:"8m1U4P",defaultMessage:"Credential"},[i.an.EXTERNAL_LOCATION]:{id:"u7bRXy",defaultMessage:"External location"},[i.an.INBOUND_SHARED_NOTEBOOK_FILE]:{id:"pK4mvH",defaultMessage:"Shared notebook file"},[i.an.CONNECTION]:{id:"rR5RDl",defaultMessage:"Connection"},[i.an.SHARE]:{id:"bH4BVe",defaultMessage:"Share"},[i.an.RECIPIENT]:{id:"NfAkZZ",defaultMessage:"Recipient"},[i.an.PROVIDER]:{id:"5G2SGs",defaultMessage:"Provider"},[i.an.METASTORE]:{id:"lTi56H",defaultMessage:"Metastore"},[i.an.COLUMN]:{id:"ZUOQQ7",defaultMessage:"Column"},[i.an.VOLUME_FILE]:{id:"X/RWP6",defaultMessage:"Volume file"},[i.an.VOLUME_FOLDER]:{id:"B0vUyp",defaultMessage:"Volume folder"},[i.an.CLEAN_ROOM]:{id:"nEeSuH",defaultMessage:"Clean Room"},[i.an.VECTOR_INDEX]:{id:"d57N3p",defaultMessage:"Vector search index"},[i.an.ONLINE_VIEW]:{id:"p2r9Bh",defaultMessage:"Synced table"},[i.an.METRIC_VIEW]:{id:"tjJpp8",defaultMessage:"Metric view"},[i.an.EXTERNAL_METADATA]:{id:"RySBlN",defaultMessage:"External metadata"},[i.an.SECRET]:{id:"QLRlWq",defaultMessage:"Secret"}}),d={[i.an.FUNCTION]:(0,a.YK)({[o.x.FUNCTION_PROCEDURE]:{id:"3ramAO",defaultMessage:"Procedure"},[o.x.FUNCTION]:{id:"qCivWh",defaultMessage:"Function"},[o.x.FUNCTION_FEATURE_SPEC]:{id:"NMoL5P",defaultMessage:"Function feature spec"}})},f=(0,a.YK)({[i.an.CATALOG]:{id:"MFr8uI",defaultMessage:"Database"},[i.an.DATABASE]:{id:"8dUzvc",defaultMessage:"Schema"},[i.an.TABLE]:{id:"bqMEiN",defaultMessage:"Table"},[i.an.VIEW]:{id:"bAdJFD",defaultMessage:"View"},[i.an.FUNCTION]:{id:"OMHm4k",defaultMessage:"Function"},[i.an.COLUMN]:{id:"sFXezj",defaultMessage:"Column"}})},797500:(e,t,r)=>{"use strict";function a(e){return e.filter(e=>!e.value?.includes("DataFrame")).map(e=>`- Pandas DataFrame '${e.name}', columns = ${e.schema}`)}function n(e){return e.filter(e=>e.value?.includes("DataFrame")).map(e=>`- Spark DataFrame '${e.name}', columns = ${e.value}`)}function i(e,t){if("python"!==e)return"";let r=a(t).join("\n"),i=n(t).join("\n");if(0===r.length&&0===i.length)return"";return`Here are the DataFrames in the session:
${i}
${r}
`}r.d(t,{Mm:()=>a,qG:()=>n,ui:()=>i})},800205:(e,t,r)=>{"use strict";r.d(t,{h:()=>u});var a=r(441535),n=r(733337),i=r(660618),o=r(595615),s=r(302118);function l(e,t,r){return(0,o.AO)({queryKey:["data_explorer_samples_schema",t],queryFn:()=>(0,n.nr)(`${i.bY}/schemas/${encodeURIComponent(e)}.${encodeURIComponent(t)}?include_browse=true`),...r})}function u(e){var t;let r=(0,a.W)("databricks.fe.marketplace.enableNewUCBasedSamplesUI",!1),n=(t={enabled:e===i.lx&&r,keepPreviousData:!0},(0,o.AO)({queryKey:["data_explorer_samples_catalog_details"],queryFn:function(){return s.k.getCatalogDetails(i.lx)},...t})),u=l(e,"nyctaxi",{enabled:e===i.lx&&r,keepPreviousData:!0}),c=l(e,"tpch",{enabled:e===i.lx&&r,keepPreviousData:!0});return e===i.lx&&n.isSuccess&&u.isSuccess&&c.isSuccess&&r}},802472:(e,t,r)=>{"use strict";r.d(t,{P:()=>n,l:()=>a});let a="mfe-react-portals";function n(e){let t=e+"-mfe-root",r=e+"-mfe-react-root",n=e+"-mfe-notifications-portal-fallback",i=`
  <div id="${t}" class="mfe-root ${e}-ui-container">
    <div id="${a}"></div>
    <div id="${r}"></div>
    <div id="${n}"></div>
  </div>
  `.trim();return{mfeRootId:t,mfeReactRootId:r,mfeNotificationsPortalId:n,mfeShadowRootHtml:i}}},803134:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{p:()=>_});var n=r(610435),i=r(956935),o=r(692738),s=r(382908),l=r(497895),u=r(513820),c=r(194901),d=r(79570),f=r(79128),p=r(687828),m=r(241393),g=r(294675),h=r(126927),b=r(308675),y=r(943844),v=r(342411),E=r(731392),I=r(214056),T=r(320236),w=r(888708),S=e([E,I,T]);function k(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function A(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){k(i,a,n,o,s,"next",e)}function s(e){k(i,a,n,o,s,"throw",e)}o(void 0)})}}[E,I,T]=S.then?(await S)():S;let{Link:N}=s.o,P={sql:"sql",dbsql:"dbsql",md:"markdown",python:"python",r:"r",scala:"scala",go:"go",html:"html",javascript:"javascript",java:"java",yaml:"yaml",text:"text",json:"json",shell:"shell"},D={sql:"SQL",dbsql:"SQL",md:"Markdown",python:"Python",r:"R",scala:"Scala",curl:"Curl",go:"Go",html:"HTML",javascript:"JavaScript",java:"Java",yaml:"YAML",json:"JSON",text:""},x=({showScrollbars:e,compactExpand:t,borderless:r}={})=>{let{theme:a}=(0,l.wn)(),n=a.colors.border,o=a.spacing.sm,s=a.colors.textSecondary,u=(0,i.AH)({border:r?"none":"1px solid",borderRadius:r?0:"6px",borderColor:n,backgroundColor:a.colors.backgroundSecondary,position:"relative",overflow:"hidden"},`&:hover span, &:focus-within span {
      opacity: 1 !important;
    }`),c=(0,i.AH)({fontSize:"12px",fontFamily:"'Menlo', 'Monaco', 'Consolas', 'Ubuntu Mono', 'Source Code Pro', monospace",fontStretch:"normal",lineHeight:"20px",whiteSpace:"pre",scrollbarWidth:e?void 0:"none"},e?void 0:`&::-webkit-scrollbar {
      display: none;
    }`),d=(0,i.AH)(c,{marginBottom:t?"0 !important":"40px !important"}),f=(0,i.AH)({textAlign:"right",color:a.colors.textPlaceholder,paddingRight:a.spacing.md,display:"inline-block",width:"32px",userSelect:"none"}),p=(0,i.AH)({borderBottom:"1px solid",borderColor:n,padding:"4px 8px 4px 12px",fontSize:"13px",fontWeight:"bold",fontStretch:"normal",lineHeight:"20px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"pre",display:"flex",alignItems:"center"}),m=(0,i.AH)({fontWeight:"lighter",color:s,paddingLeft:a.spacing.sm}),g=t?(0,i.AH)({position:"absolute",textAlign:"center",width:"100%",bottom:0,left:0,cursor:"pointer",color:a.colors.textSecondary,padding:`${a.spacing.xs}px ${a.spacing.sm}px`,transition:"color 0.15s ease","&:hover":{color:a.colors.textPrimary}}):(0,i.AH)({position:"absolute",left:"12px",bottom:"8px",padding:o,border:"none",fontSize:"13px",color:`${a.colors.actionLinkDefault} !important`,fontWeight:"500",boxShadow:"none !important"}),h=(0,i.AH)({overflow:"clip",overflowWrap:"anywhere",textWrap:"wrap"});return{containerStyle:u,codeContainerStyle:c,codeContainerWithExpandCollapseButtonStyle:d,lineNumbersStyle:f,menuBarStyle:p,languageBadgeStyle:m,expandCollapseButtonStyle:g,wrapTextStyle:h}};function _({style:e,children:t,format:r,theme:a,language:i="Text",placeholder:s,menuBarProps:c,customMenuBar:d,actionButtons:f,visibleLines:p,lineNumbers:m,startingLineNumber:g=1,highlightedSegments:h,wrapText:b=!1,showScrollbars:y=!1,disableUserSelect:S=!1,compactExpand:k=!1,borderless:R=!1}){let{theme:N}=(0,l.wn)(),D=(0,v.tz)(),[O,F]=(0,o.useState)(!1),$=function(e,{format:t=!1}={}){return(0,o.useMemo)(()=>{if(!t)return e;try{return(0,w.s)(e)}catch{return e}},[e,t])}(t,{format:r}),Y=$.split("\n").length,U=p&&p<Y,B=k&&!!d,W=B?"0 8px 8px":(c||d)&&!k?"6px 16px 8px 16px":N.spacing.sm,V=20*(p??0),j=O||!U?"auto":B?`${V}px`:`${N.spacing.sm+V}px`,{containerStyle:z,codeContainerStyle:J,codeContainerWithExpandCollapseButtonStyle:q,lineNumbersStyle:G,wrapTextStyle:H}=x({showScrollbars:y,compactExpand:k,borderless:R}),{languageAndThemeLoaded:Q,editorLanguage:K}=(({placeholder:e,language:t="Text",theme:r})=>{let[a,n]=(0,o.useState)(!1),i=Object.hasOwn(P,t)?P[t]:t,{theme:s}=(0,l.wn)(),u=r??(s.isDarkMode?"databricks-unified-dark":"databricks-unified-light");return(0,o.useEffect)(()=>{e&&n(!1),A(function*(){yield A(function*(){switch(i){case"sql":case"dbsql":(0,E.enableCustomSQLSyntax)();break;case"python":(0,E.enableCustomPythonSyntax)();break;case"scala":(0,E.enableCustomScalaSyntax)();break;case"go":yield(0,I.Q)().enableGoBasicSyntax();break;case"html":yield(0,I.Q)().enableHtmlBasicSyntax();break;case"javascript":yield(0,I.Q)().enableJavascriptBasicSyntax();break;case"java":yield(0,I.Q)().enableJavaBasicSyntax();break;case"yaml":yield(0,I.Q)().enableYamlBasicSyntax();break;case"json":yield(0,I.Q)().enableJsonAdvancedIntellisense();break;case"shell":yield(0,I.Q)().enableShellBasicSyntax()}})(),(0,T.Zf)(u)?(0,T.WY)(u):yield(0,T.Be)(u),n(!0)})()},[i,u,e]),{languageAndThemeLoaded:a,editorLanguage:i}})({placeholder:s,language:i,theme:a}),X=(0,o.useRef)(null);(0,o.useEffect)(()=>{if(!Q||!X.current)return;let e=(t,r,a,n,i,o)=>{let s=r.shift();if(!s)return t;let l=Math.floor(s.start-i/2),u=Math.floor(s.end-i/2);if(!(l<=n))return r.unshift(s),t;{let s,c=document.createElement("span");c.innerHTML=t.textContent.slice(0,l-a)??"";let d=document.createElement("span");if(d.style.backgroundColor=N.isDarkMode?N.colors.yellow800:N.colors.yellow200,u<n){d.innerHTML=t.textContent.slice(l-a,u-a);let c=document.createElement("span");c.innerHTML=t.textContent.slice(u-n),s=e(c,r,u,n,i,o)}else{d.innerHTML=t.textContent.slice(l-a);let e=Math.floor(i/2)+ +!!o;r.unshift({start:n+e,end:u+e}),(s=document.createElement("span")).innerHTML=""}let f=document.createElement("span");return""!==c.innerHTML&&f.append(c),f.append(d),""!==s.innerHTML&&f.append(s),f}};(0,I.Q)().colorizeElement(X.current,{theme:a}).then(()=>{if(!h||0===h.length)return;let t=0;for(let r=0;r<X.current.childNodes.length;r++){let a=X.current.childNodes[r];if("SPAN"===a.nodeName)for(let n=0;n<a.childNodes.length;n++){let i=a.childNodes[n];if("SPAN"!==i.nodeName)continue;let o=i.childNodes[0];if(o?.nodeName!=="#text"||o?.textContent==="\xa0\xa0\xa0\xa0")continue;if(h.length<=0)break;let s=t,l=t+o.textContent.length;if(h[0].start<=l){let i=e(o,h,s,l,r,n===a.childNodes.length-1);o.replaceWith(i),t=l}else t=l}}})},[Q,N,a,h,$]);let Z=(0,o.useMemo)(()=>$.split("\n").length,[$]),ee=(0,n.FD)("div",{css:{display:"flex"},children:[m&&(0,n.Y)("div",{css:{display:"flex",flexDirection:"column"},"data-testid":"read-only-code-block_line-numbers",children:Array.from({length:Z},(e,t)=>(0,n.Y)("span",{css:G,"aria-label":"Line number",children:t+g},t))}),(0,n.Y)("div",{"data-testid":"read-only-code-block_code",ref:X,"data-lang":K,css:{paddingRight:N.spacing.md,userSelect:S?"none":void 0},children:$})]});if(f&&f.length>0){let e=f?.findIndex(e=>"copy"===e.buttonId)??-1;if(-1!==e){var et,er;let t=(et=D,er=f[e].onClick,{buttonId:"copy",tooltipContent:et.formatMessage({id:"vrjCfr",defaultMessage:"Copy code"}),ariaLabel:et.formatMessage({id:"KGmwzD",defaultMessage:"Copy code to clipboard"}),icon:(0,n.Y)(u.A,{}),onClick:er,checkOnClick:!0});f[e]=t}}return(0,n.FD)("div",{css:z,children:[!c&&!d&&f&&(0,n.Y)("span",{style:{position:"absolute",top:8,right:8,opacity:0,background:N.colors.backgroundSecondary,display:"flex",gap:N.spacing.xs},children:f?.map(e=>(0,n.Y)(L,{codeContent:$,...e},e.buttonId))}),d??(c?(0,n.Y)(C,{codeContent:$,passedInLanguage:i,actionButtons:f,...c}):null),!Q&&s,(0,n.Y)("div",{css:[U?q:J,b?H:void 0],style:{display:Q?void 0:"none",overflowY:U?"hidden":"scroll",maxHeight:U?void 0:"73vh",height:j,padding:W,...e},"data-testid":"read-only-code-block_code-container",tabIndex:0,role:"region","aria-label":D.formatMessage({id:"4z5Rcp",defaultMessage:"Code block"}),children:ee}),k&&U&&!O&&(0,n.Y)("div",{css:{position:"absolute",bottom:0,left:0,right:0,height:40,background:`linear-gradient(transparent, ${N.colors.backgroundSecondary})`,pointerEvents:"none"}}),U&&(0,n.Y)(M,{isExpanded:O,onClick:()=>F(!O),numberOfHiddenLines:Y-p,compact:k})]})}function C({codeContent:e,passedInLanguage:t,title:r,style:a,overflowMenuActions:i,showLanguage:u=!0,actionButtons:c}){let d=(0,o.useRef)(null),{menuBarStyle:f,languageBadgeStyle:p}=x(),{theme:m}=(0,l.wn)(),g=t in D?D[t]:"";return(0,n.FD)("div",{ref:d,css:f,style:{...a},children:[(0,n.FD)("span",{style:{verticalAlign:"middle",flex:"1 1 auto",textOverflow:"ellipsis",overflow:"hidden"},children:[r&&(0,n.Y)(s.o.Text,{bold:!0,children:(0,n.Y)(v.sA,{id:"LLwjJe",defaultMessage:"{title}",values:{title:r}})}),u&&g&&(0,n.Y)("span",{css:p,children:g})]}),(0,n.FD)("span",{style:{marginLeft:"auto",flexShrink:0,display:"flex",gap:m.spacing.xs},children:[c?.map(t=>(0,n.Y)(L,{codeContent:e,...t},t.buttonId)),i?(0,n.Y)(R,{actions:i}):null]})]})}let L=({codeContent:e,buttonId:t,tooltipContent:r,ariaLabel:a,icon:i,text:s,onClick:l,checkOnClick:u,href:p,disabled:m,type:g})=>{let h=(0,o.useRef)(),[b,y]=(0,o.useState)(!1),v=b?(0,n.Y)(c.A,{}):i;(0,o.useEffect)(()=>()=>{clearTimeout(h.current)},[]);let E=`read-only-code-block_${t}-button`;return(0,n.Y)(d.m,{content:r,componentId:`read-only-code-block_${t}-tooltip`,children:(0,n.Y)(f.$n,{componentId:E,"data-testid":E,onClick:u?t=>{l&&l(t),t?.stopPropagation(),navigator.clipboard.writeText(e),clearTimeout(h.current),y(!0),h.current=window.setTimeout(()=>{y(!1)},3e3)}:l,href:p,target:p?"_blank":void 0,size:"small",icon:v,disabled:m,type:g,...a&&{"aria-label":a},children:s})},t)};function R({actions:e}){return(0,n.FD)(p.Root,{children:[(0,n.Y)(p.Trigger,{asChild:!0,children:(0,n.Y)(f.$n,{componentId:"read-only-code-block_overflow-menu-button",icon:(0,n.Y)(m.A,{}),size:"small"})}),(0,n.Y)(p.Content,{align:"start",children:e.map(e=>(0,n.Y)(p.Item,{onClick:e.onClick,componentId:`read-only-code-block_${e.id}`,asChild:!0,children:(0,n.FD)(N,{componentId:`read-only-code-block_${e.id}-link`,rel:"noopener noreferrer",target:e.href&&"_blank",href:e.href?e.href:void 0,children:[e.displayText,e.href&&(0,n.Y)(g.C,{children:(0,n.Y)(h.A,{})})]})},e.id))})]})}function M({isExpanded:e,onClick:t,numberOfHiddenLines:r=0,compact:a}){let i=(0,v.tz)(),{expandCollapseButtonStyle:o}=x({compactExpand:a});if(a)return(0,n.Y)("div",{css:o,onClick:t,onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),t())},role:"button",tabIndex:0,"aria-label":i.formatMessage(e?{id:"editor.readOnlyCodeBlock.collapseTruncatedCode",defaultMessage:"Collapse code",description:"Button to collapse truncated read-only code"}:{id:"editor.readOnlyCodeBlock.expandTruncatedCode",defaultMessage:"Expand code",description:"Button to expand truncated read-only code"}),children:e?(0,n.Y)(b.A,{}):(0,n.Y)(y.A,{})});return(0,n.Y)(f.$n,{componentId:"read-only-code-block_expand-collapse-button",css:o,onClick:t,children:e?(0,n.FD)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,n.Y)(b.A,{}),(0,n.Y)(v.sA,{id:"bn0LDv",defaultMessage:"Collapse"})]}):(0,n.Y)(v.sA,{id:"LJERAZ",defaultMessage:"... {numberOfHiddenLines} more lines",values:{numberOfHiddenLines:r}})})}a()}catch(e){a(e)}})},804723:(e,t,r)=>{"use strict";r.d(t,{S:()=>l});var a=r(610435),n=r(5421),i=r(497895),o=r(174541);let s=({children:e,...t})=>{let{theme:r}=(0,i.wn)(),{isInsideTypeaheadCombobox:s}=(0,n.T)();if(!s)throw Error("`TypeaheadComboboxFooter` must be used within `TypeaheadComboboxMenu`");return(0,a.Y)("div",{...t,css:(0,o.UA)(r),children:e})};s.defaultProps={_type:"TypeaheadComboboxFooter"};let l=s},809695:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>p,O$:()=>f,VN:()=>c});var a=r(708113),n=r(287578),i=r(237080),o=r(583422),s=r(785582);function l(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function u(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){l(i,a,n,o,s,"next",e)}function s(e){l(i,a,n,o,s,"throw",e)}o(void 0)})}}let c=(e,t)=>!!(e&&t&&e.replace(/^\s*`/,"").replace(/`\s*$/,"").toLowerCase()===t.replace(/^\s*`/,"").replace(/`\s*$/,"").toLowerCase()),d=e=>e.map(e=>e.name),f=e=>{let t=new s.m((t,r,a)=>{let n=[];if(a(()=>{n.forEach(e=>e.cancel())}),!e.identifierChain)return void r(Error("No identifier chain provided to find catalog entry."));let o=(a,i)=>{let s;if(0===i.length)return void r(Error("Did not find catalog entry in any of the provided fields."));s="map"===a.getType()?"value":"array"===a.getType()?"item":i.shift()||"";let l=a.getChildren({cancellable:!!e.cancellable,cachedOnly:!!e.cachedOnly,silenceErrors:!0});n.push(l),l.then(e=>{let a=null;e.some(e=>{if(c(e.name,s))return a=e,!0;return!1}),a&&i.length?o(a,i):a?t(a):r(Error("Catalog entry not found in children of the parent (may be due to truncation of 15k children)."))}).catch(r)},s=!1,{tables:l,identifierChain:u}=e;if(e.usingAntlrSyntaxChecking){let t=l?d(l[0].identifierChain).concat(d(u)):d(u);i.Ay.getEntry({connector:e.connector,path:[],cachedOnly:!!e.cachedOnly,temporaryOnly:!!e.temporaryOnly}).then(e=>{t&&o(e,t)})}else l?Promise.all(l.map(a=>{let n;return n=a.identifierChain,i.Ay.getEntry({connector:e.connector,path:d(n).concat(d(u)),cachedOnly:!!e.cachedOnly,temporaryOnly:!!e.temporaryOnly}).then(e=>{(u.length>1||e.definition?.name)&&(s=!0,t(e))}).catch(r)})).then(()=>{s||r("Could not find catalog entry for "+u.map(e=>e.name).join("."))}):i.Ay.getEntry({connector:e.connector,path:[],cachedOnly:!!e.cachedOnly,temporaryOnly:!!e.temporaryOnly}).then(t=>{e.identifierChain&&o(t,d(e.identifierChain))})});return(0,o.R7)(t,e)},p={autocompleteFilter:(e,t)=>{let r=e.toLowerCase();return t.filter(t=>{if(t.category.categoryId===n.wz.FunctionDescription)return t.filterWeight=4,!e.includes(")");if((0,n.pW)(t.category)&&r.startsWith("join "))return!1;let a=t.value.toLowerCase().indexOf(r);if(-1!==a){let e;0===a&&t.category.categoryId!==n.wz.PopularTable||t.filterValue&&0===t.filterValue.toLowerCase().indexOf(r)||(e=t.value.toLowerCase()).startsWith("* ")&&e.substring(2).startsWith(r)?t.filterWeight=3:t.filterWeight=2}else t.details&&t.details.comment&&!r.includes(" ")&&-1!==(a=t.details.comment.toLowerCase().indexOf(r))&&(t.filterWeight=1,t.matchComment=!0);if(-1!==a)return t.matchIndex=a,t.matchLength=e.length,!0;return!1})},backTickIfNeeded:(e,t,r,n)=>u(function*(){if(n)return t+"`";let i=e.dialectProperties&&e.dialectProperties.sqlIdentifierQuote||"`";if(0===t.indexOf(i))return t;if((yield(r||a.default).getReservedKeywords(e.dialect||"dbsql")).has(t.toUpperCase()))return i+t+i;if(!/^[A-Za-z][A-Za-z0-9_]*$/.test(t))return i+t.replaceAll(i,i+i)+i;return t})(),backTickIfNeededNoConnector:(e,t,r)=>u(function*(){if(r)return e+"`";if(0===e.indexOf("`"))return e;if((yield(t||a.default).getReservedKeywords("dbsql")).has(e.toUpperCase()))return"`"+e+"`";if(!/^[A-Za-z][A-Za-z0-9_]*$/.test(e))return"`"+e.replaceAll("`","``")+"`";return e})(),backTickIfHasSpecialChars:(e,t,r)=>{if(r)return t+"`";let a=e.dialectProperties&&e.dialectProperties.sqlIdentifierQuote||"`";if(0===t.indexOf(a))return t;if(!/^[A-Za-z][A-Za-z0-9_]*$/.test(t))return a+t.replaceAll(a,a+a)+a;return t},unBackTick:(e,t)=>{let r=e.dialectProperties&&e.dialectProperties.sqlIdentifierQuote||"`";return t.length>1&&t[0]===r&&t[t.length-1]===r&&(t=(t=t.slice(1,t.length-1)).replaceAll(r+r,r)),t},locationEquals:(e,t)=>!!e&&!!t&&e.first_line===t.first_line&&e.first_column===t.first_column&&e.last_line===t.last_line&&e.last_column===t.last_column,identifierEquals:c,sortSuggestions:(e,t)=>{e.sort((e,r)=>{if(t){if(void 0!==e.filterWeight&&void 0!==r.filterWeight&&r.filterWeight!==e.filterWeight)return r.filterWeight-e.filterWeight;if(void 0!==e.filterWeight&&void 0===r.filterWeight)return -1;if(void 0===e.filterWeight&&void 0!==r.filterWeight)return 1}let a=(e.category.weight||0)+(e.weightAdjust||0),n=(r.category.weight||0)+(r.weightAdjust||0);if(void 0!==a&&void 0!==n&&n!==a)return n-a;if(void 0!==a&&void 0===n)return -1;if(void 0===a&&void 0!==n)return 1;return e.value.replace("("," ").localeCompare(r.value.replace("("," "))})},identifierChainToPath:d,isSqlDialect:e=>["dbsql","sql","generic","impala"].includes(e.toLowerCase()),identifierChainIsSubquery:e=>e.some(e=>e.cte||e.subQueryColumns||e.subQuery)}},810616:(e,t,r)=>{"use strict";r.d(t,{x:()=>i});var a=r(646171);function n(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}let i=e=>{var t;return(t=function*(){let{data:t}=yield(0,a.p)().post("folders",e);return t},function(){var e=this,r=arguments;return new Promise(function(a,i){var o=t.apply(e,r);function s(e){n(o,a,i,s,l,"next",e)}function l(e){n(o,a,i,s,l,"throw",e)}s(void 0)})})()}},811362:(e,t,r)=>{"use strict";r.d(t,{BV:()=>_,Ig:()=>S,Jm:()=>I,KK:()=>R,RB:()=>A,RI:()=>k,U8:()=>M,XV:()=>w,Yh:()=>x,dD:()=>N,eF:()=>v,g4:()=>T,qE:()=>D,vQ:()=>P,z3:()=>C,z9:()=>E});var a,n,i,o,s,l,u,c,d,f,p,m,g,h,b,y,v=((a={}).NO_RESTRICTION="NO_RESTRICTION",a.CSP_MISMATCH="CSP_MISMATCH",a),E=((n={}).NOT_ELIGIBLE="NOT_ELIGIBLE",n.NOT_CREATED="NOT_CREATED",n.CREATED="CREATED",n),I=((i={}).APPROVED="APPROVED",i.REJECTED="REJECTED",i.PENDING="PENDING",i),T=((o={}).AUTO_APPROVED="AUTO_APPROVED",o.BACKFILLED="BACKFILLED",o),w=((s={}).APPROVED="APPROVED",s.REJECTED="REJECTED",s.PENDING="PENDING",s),S=((l={}).AUTO_APPROVED="AUTO_APPROVED",l),k=((u={}).ACTIVE="ACTIVE",u.CATALOG_ALIAS_CONFLICT="CATALOG_ALIAS_CONFLICT",u.PERMISSION_DENIED="PERMISSION_DENIED",u),A=((c={}).ACTIVE="ACTIVE",c.PROVISIONING="PROVISIONING",c.FAILED="FAILED",c.DELETED="DELETED",c),_=((d={}).TABLE="TABLE",d.NOTEBOOK="NOTEBOOK_FILE",d.VOLUME="VOLUME",d.VIEW="VIEW",d.FOREIGN_TABLE="FOREIGN_TABLE",d.MODEL="MODEL",d.JAR="JAR_ANALYSIS",d),C=((f={}).FULL_ACCESS="FULL_ACCESS",f.RESTRICTED_ACCESS="RESTRICTED_ACCESS",f.PRIVATE_ACCESS_ONLY="PRIVATE_ACCESS_ONLY",f),R=((p={}).FQDN="FQDN",p),M=((m={}).TCP="TCP",m),N=((g={}).NONE="NONE",g.HIPAA="HIPAA",g.PCI_DSS="PCI_DSS",g.FEDRAMP_MODERATE="FEDRAMP_MODERATE",g.IRAP_PROTECTED="IRAP_PROTECTED",g),P=((h={}).BLOCKED="BLOCKED",h.INTERNAL_ERROR="INTERNAL_ERROR",h.PENDING="PENDING",h.QUEUED="QUEUED",h.RUNNING="RUNNING",h.SKIPPED="SKIPPED",h.TERMINATED="TERMINATED",h.TERMINATING="TERMINATING",h.WAITING_FOR_RETRY="WAITING_FOR_RETRY",h),D=((b={}).RUN_RESULT_STATE_UNSPECIFIED="RUN_RESULT_STATE_UNSPECIFIED",b.CANCELED="CANCELED",b.EVICTED="EVICTED",b.EXCLUDED="EXCLUDED",b.FAILED="FAILED",b.MAXIMUM_CONCURRENT_RUNS_REACHED="MAXIMUM_CONCURRENT_RUNS_REACHED",b.SUCCESS="SUCCESS",b.SUCCESS_WITH_FAILURES="SUCCESS_WITH_FAILURES",b.SUCCESS_WITH_SKIPPED_CELLS="SUCCESS_WITH_SKIPPED_CELLS",b.TIMEDOUT="TIMEDOUT",b.UPSTREAM_CANCELED="UPSTREAM_CANCELED",b.UPSTREAM_EVICTED="UPSTREAM_EVICTED",b.UPSTREAM_FAILED="UPSTREAM_FAILED",b),x=((y={}).NOTEBOOK="NOTEBOOK",y.JAR="JAR",y)},812965:(e,t,r)=>{"use strict";r.d(t,{I:()=>u,e:()=>l});var a=r(692738),n=r(181105),i=r(644178),o=r(926265),s=r(370437);class l extends n.Un{errorLogType=i.ZQ.ApplicationError;errorName=o.U.GenericNetworkRequestError;displayMessage;constructor({error:e,cause:t,details:r={},errorName:a,displayMessage:n}){const i=r.errorCode?(0,s.qD)(r.errorCode):void 0;super(e.message,{...r,errorCode:i},{cause:t}),a&&(this.errorName=a),n&&(this.displayMessage=n),this.isUserError=void 0!==r.status&&r.status>=400&&r.status<500}}let u=(0,a.createContext)({clearError:()=>{},setError:e=>{},type:""})},813378:(e,t,r)=>{"use strict";r.d(t,{k4:()=>u,UR:()=>l});var a=r(496720),n=r(886100),i=r(879299),o=r(951165);let s=new Map;function l(e,t){let r=s.get(e);if(!r)return;r.updateMetadata(t)}function u(e){let t=s.get(e);return t||(t=new c(e),s.set(e,t)),t}class c{isDetecting=!1;worker;sendingSignal;esComponent;constructor(e){this.esComponent=e,this.worker=null,this.sendingSignal=null,this.numberOfCallers=0}freezeDetectionContextBlob={};numberOfCallers=0;updateMetadata(e){try{e&&"object"==typeof e&&(this.freezeDetectionContextBlob=(0,a.h1)(this.freezeDetectionContextBlob,e))}catch(e){n.iT.log(this.esComponent,"FreezeDetector metadata update failed:",e)}}monitor({freezeDetectionContextBlob:e,isInDev:t}){let r=(0,o.m)();if(!r||window!==r||(this.freezeDetectionContextBlob=e,this.numberOfCallers+=1,this.isDetecting))return;let a=this.getWorker();this.isDetecting=!0,a.onmessage=e=>{let{message:r,timestamp:n}=e.data;if("are-you-alive?"===r){let{context:e}=(0,i.bR)({}),r=e?.client_context,o={message:"yes-I-am-alive",timestamp:n,freezeDetectionContextBlob:this.freezeDetectionContextBlob,window:{browserTabId:window.browserTabId,navigator:{userAgent:window.navigator.userAgent},location:{search:window.location.search}},clientContext:r,fireAlertInDev:t,esComponent:this.esComponent};a.postMessage(o)}},window.addEventListener("visibilitychange",this.sendActivationMessage)}getWorker(){return this.worker??=new Worker(new URL("/"+r.u(32837),r.b),{name:"freeze-detector"}),this.worker}sendActivationMessage=()=>{"visible"===document.visibilityState?this.getWorker().postMessage({message:"I-got-activated"}):this.getWorker().postMessage({message:"I-got-deactivated"})};stopMonitoring(){if(this.numberOfCallers-=1,this.numberOfCallers>0)return;s.delete(this.esComponent),this.isDetecting=!1,window.removeEventListener("visibilitychange",this.sendActivationMessage),this.worker?.terminate(),this.worker=null,this.freezeDetectionContextBlob={},this.sendingSignal&&(clearInterval(this.sendingSignal),this.sendingSignal=null)}getFreezeDetectionContextBlob(){return this.freezeDetectionContextBlob}}},814515:(e,t,r)=>{"use strict";r.d(t,{Y:()=>i});var a=r(692738),n=r(274269);let i=({action:e,onActionCompleted:t})=>{let[r,{open:i,close:o}]=(0,n.F)(!1),[s,l]=(0,a.useState)(null),[u,{open:c,close:d}]=(0,n.F)(!1);return{isLoading:r,error:s,visible:u,open:c,close:d,trigger:()=>{i(),l(null),e().then(()=>{t?.(),d()}).catch(e=>{l(e)}).finally(()=>{o()})}}}},820894:(e,t,r)=>{"use strict";r.d(t,{Av:()=>E,BA:()=>I,GZ:()=>A,KE:()=>l,MM:()=>w,Os:()=>b,PO:()=>o,R1:()=>d,Uc:()=>v,Wo:()=>s,Wr:()=>y,XV:()=>k,YY:()=>i,_B:()=>T,_r:()=>f,mW:()=>g,n8:()=>p,pZ:()=>h,pr:()=>m,s$:()=>S,t6:()=>c,y0:()=>u});var a=r(699406),n=r(443927);let i=n.M.DEFAULT_TOKEN_CHANNEL,o=n.M.channelNames.indexOf("COMMENTS"),s=n.M.channelNames.indexOf("WHITESPACE"),l=",",u=".",c=" ",d="(",f=")",p=a.LX.line,m=a.LX.softline,g=e=>e.disableHardlines?a.LX.line:a.LX.hardline,h=a.LX.indent,b=a.LX.group,y=e=>t=>h(b(t,{id:e})),v=e=>[p,b(e)],E=a.LX.breakParent,I=a.LX.ifBreak,T=a.LX.lineSuffix,w=a.LX.align;class S extends Error{constructor(){super("Encountered SetConfigurationContext in a formatting context. This context cannot be formatted due to bad grammar structure. Just default back to old formatter for this case.")}}class k extends Error{constructor(){super("Encountered ResetConfigurationContext in a formatting context. This context cannot be formatted due to bad grammar structure. Just default back to old formatter for this case.")}}let A={printWidth:100,indentationWidth:2,indentationStyle:"spaces",numNewLinesBetweenClauses:0,numNewLinesBetweenStatements:1,commaPosition:"end",keywordCasing:"none",identifierCasing:"none",functionNameCasing:"none",shouldExpandCommaLists:!0,shouldExpandExpressions:!0,shouldExpandCaseStatements:!0,shouldExpandInStatements:!1,shouldExpandBetweenConditions:!1,shouldBreakOnJoinSections:!0}},823910:(e,t,r)=>{"use strict";r.d(t,{S:()=>i,_:()=>n});var a=r(141078);let n=(0,a.J1)`
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
`;function i(e,t={}){return(0,a.IT)(n,{variables:e,...t})}},832646:(e,t,r)=>{"use strict";r.d(t,{H:()=>c});var a=r(154313),n=r(844760);function i(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function o(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var o=e.apply(t,r);function s(e){i(o,a,n,s,l,"next",e)}function l(e){i(o,a,n,s,l,"throw",e)}s(void 0)})}}let s="/ajax-api/2.0/workspace";class l extends Error{errorCode;constructor(e,t){super(e),this.errorCode=t}}function u(e,t=!0){return o(function*(){if(!e.ok){let t=yield e.text(),r;try{let e=JSON.parse(t);t=e.message,r=e.error_code}catch{}throw new l(t,r)}return(t?e.json():e.text()).then(e=>e)})()}let c={export:(e,t)=>o(function*(){let{source:r="SOURCE"}=t||{};return u((yield(0,n.S)(`${s}/export?path=${encodeURIComponent(e)}&format=${r}&direct_download=true`)),!1)})(),import:(e,t,r)=>o(function*(){let i=a.Buffer.from(t,"utf8").toString("base64"),{source:o,language:l}=r||{};return u((yield(0,n.S)(`${s}/import`,{method:"POST",body:JSON.stringify({content:i,format:o,language:l,overwrite:!0,path:e})})))})(),getStatus(e){return o(function*(e,{requestExportFormat:t=!1,requestWsfsMetadata:r=!1}={}){let a=new URLSearchParams;return a.append("path",e),t&&a.append("return_export_info","true"),r&&a.append("return_wsfs_metadata","true"),u((yield(0,n.S)(`${s}/get-status?`+a.toString())))}).apply(this,arguments)},list:e=>o(function*(){return u((yield(0,n.S)(`${s}/list?path=${encodeURIComponent(e)}`)))})()}},837213:(e,t,r)=>{"use strict";r.d(t,{Eq:()=>E,Hr:()=>I,Lx:()=>T,nA:()=>y,u4:()=>v});var a=r(692738),n=r(141078),i=r(327152),o=r(441535),s=r(169750),l=r(761543),u=r(267647),c=r(149264),d=r(360217),f=r(570512),p=r(608135),m=r(935963),g=r(329427);function h(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}let b=`You are the Databricks AI Assistant. Your job is to answer user help questions about the Databricks product. Do NOT make assumptions on or discuss the implementation of yourself (the assistant). Today is ${new Date().toDateString()}.`,y=`You may be given document passages that are marked between BEGIN_RELATED_PASSAGES and END_RELATED_PASSAGES.
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
`,v=`You MUST cite the most relevant contexts that answer the question. Do not mention any irrelevant contexts. You MUST ADHERE to the following instructions for citing contexts:
- to cite a context, enclose its index located above the summary with curly brackets at the end of the corresponding sentence, for example "Ice is less dense than water{1}{2}." or "Paris is the capital of France{1}{4}{5}."
- NO SPACE between the last word and the citation, and ALWAYS use curly brackets. Only use this format to cite context. NEVER include a References section at the end of your answer.
- to cite a context for a code block, ALWAYS put the citation at the end of the code block with a new line, for example, "\`\`\`python
print('Hello, World!')
\`\`\`
{1}".
- If you don't know the answer or the premise is incorrect, explain why.
If the contexts are empty or unhelpful, DO NOT cite but answer the query as well as you can with existing knowledge.`,E=`
ADD up to 3 follow-ups questions proposing actionable examples not already asked before. Be concise with a maximum of 10 words/70 characters and use imperative form with no question mark. Output nothing if no follow-up questions or in doubt. Use the markdown format like below and do not forget the #followup link. Do not add any sort of section header for this.
[<Add your follow-up>](#followup) [<Add your follow-up>](#followup) [<Add your follow-up>](#followup)
`,I="generalAgent",T=()=>{let e=(0,n.mK)(),t=(0,i.a)(),{canCreate:r}=(0,p.n)({enabled:!0});return(0,a.useMemo)(()=>({agent:{name:I,makeContext:(0,u.x)({makeContext:({context:a,contextConfig:n,userMessage:i,promptId:u})=>{var p;return(p=function*(){let p={index:1,sourceMap:{}},m={contextObject:{...a??{},merlinSupportInfo:{canCreateCase:r}},apolloClient:e,agentName:I,lakesenseTraceId:u??"",userMessage:i,promptBuilderOptions:{isCompletion:(0,o.W)("databricks.fe.editor.enableCitationV2",!1)},citations:p},g={...w,[s.E.ASSISTANT_INSTRUCTIONS]:{enabled:!0},[s.E.MERLIN_SUPPORT]:{enabled:!0},...n},h={[s.E.REFERENCE_OBJECT]:()=>(0,l.wS)({...m}),[s.E.ASSISTANT_INSTRUCTIONS]:()=>(0,c.lx)({...m}),[s.E.MERLIN_SUPPORT]:()=>(0,d.yn)({...m})},b=Object.keys(h).filter(e=>g[e]?.enabled),y=yield Promise.all(b.map(e=>h[e]?.()).filter(e=>void 0!==e)),v=(0,f.Qn)(y);return{...v,citations:p,rawContext:{...v.rawContext,pageId:t?.pageId}}},function(){var e=this,t=arguments;return new Promise(function(r,a){var n=p.apply(e,t);function i(e){h(n,r,a,i,o,"next",e)}function o(e){h(n,r,a,i,o,"throw",e)}i(void 0)})})()},agentName:I}),instructions:e=>b+(e.includes("gpt-4")?(0,o.W)("databricks.fe.editor.enableCitationV2",!1)?`

${v}`:`

${y}`:"")+"\n\n"+(0,g.J)(!1)+(e.includes("gpt-4")?`
${E}`:""),userMessageMatchesAgent:()=>!1,extractHistory:e=>e,get model(){return(0,m.f)()}}}),[e,t?.pageId,r])},w={[s.E.REFERENCE_OBJECT]:{enabled:!0}}},840805:(e,t,r)=>{"use strict";r.d(t,{o:()=>u,y:()=>c});var a=r(692738),n=r(594390),i=r(595615),o=r(302118);function s(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function l(){return(0,a.useCallback)(({catalog:e,schema:t,isPostgres:r})=>({queryKey:["data_explorer_models",e,t,r],queryFn:()=>{var r;return(r=function*(){return(yield o.k.getModels(e,t)).registered_models??[]},function(){var e=this,t=arguments;return new Promise(function(a,n){var i=r.apply(e,t);function o(e){s(i,a,n,o,l,"next",e)}function l(e){s(i,a,n,o,l,"throw",e)}o(void 0)})})()}}),[])}function u(e,t){let r=l();return(0,i.AO)({...r(e),...t})}function c(e){let t=l();return(0,n.V)({queries:e.map(({args:e,options:r})=>({...r,...t(e)}))})}},841710:(e,t,r)=>{"use strict";r.d(t,{DV:()=>c,LC:()=>o,W9:()=>i,iq:()=>s,pR:()=>u});var a,n=r(993533),i=((a={}).DASHBOARD_LAKEVIEW="DASHBOARD_LAKEVIEW",a.NOTEBOOK="NOTEBOOK",a.QUERY="QUERY",a.UC_TABLE="UC_TABLE",a.DATA_ROOM="DATA_ROOM",a.UC_TABLE_METRIC_VIEW="UC_TABLE_METRIC_VIEW",a.UC_MODEL="UC_MODEL",a.ENDPOINT="ENDPOINT_CENTRIC_ENDPOINT",a.APP="APP",a);let o=Object.entries({DASHBOARD_LAKEVIEW:n.iId.DASHBOARD_LAKEVIEW,NOTEBOOK:n.iId.NOTEBOOK,QUERY:n.iId.QUERY,UC_TABLE:n.iId.TABLE,DATA_ROOM:n.iId.DATA_ROOM,UC_TABLE_METRIC_VIEW:n.iId.TABLE,UC_MODEL:n.iId.ML_MODEL,ENDPOINT_CENTRIC_ENDPOINT:n.iId.ML_ENDPOINT,APP:n.iId.APP}).reduce((e,[t,r])=>({...e,[r]:e[r]??t}),{}),s=e=>Object.keys(o).includes(e),l={[n.z$1.ALERT]:n.iId.ALERT,[n.z$1.DASHBOARD]:n.iId.DASHBOARD_REDASH,[n.z$1.DASHBOARD_V3]:n.iId.DASHBOARD_LAKEVIEW,[n.z$1.EXPERIMENT]:n.iId.MLFLOW_EXPERIMENT,[n.z$1.FILE]:n.iId.FILE,[n.z$1.FOLDER]:n.iId.FOLDER,[n.z$1.JOB]:n.iId.JOB,[n.z$1.LIBRARY]:n.iId.LIBRARY,[n.z$1.NOTEBOOK]:n.iId.NOTEBOOK,[n.z$1.PROJECT]:n.iId.PROJECT,[n.z$1.QUERY]:n.iId.QUERY,[n.z$1.UC_TABLE]:n.iId.TABLE,[n.z$1.DATA_ROOM]:n.iId.DATA_ROOM,[n.z$1.UC_MODEL]:n.iId.ML_MODEL,[n.z$1.ENDPOINT_CENTRIC_ENDPOINT]:n.iId.ML_ENDPOINT,[n.z$1.APP]:n.iId.APP},u=l,c=Object.entries(l).reduce((e,[t,r])=>({...e,[r]:t}),{})},845766:(e,t,r)=>{"use strict";r.d(t,{SQ:()=>h});var a=r(610435),n=r(956935),i=r(251545),o=r(91958),s=r.n(o),l=r(692738),u=r(532111),c=r(429608),d=r(497895),f=r(639712),p=r(123252);let m=s()(({theme:e,clsPrefix:t})=>(({theme:e,clsPrefix:t})=>{let r=`.${t}-form-item-label`,a=`.${t}-form-item-control-input`,i=`.${t}-form-item-explain`,o=`.${t}-form-item-has-error`;return(0,n.AH)({[r]:{fontWeight:e.typography.typographyBoldFontWeight,lineHeight:e.typography.lineHeightBase,".anticon":{fontSize:e.general.iconFontSize}},[i]:{fontSize:e.typography.fontSizeSm,margin:0,[`&${i}-success`]:{color:e.colors.textValidationSuccess},[`&${i}-warning`]:{color:e.colors.textValidationDanger},[`&${i}-error`]:{color:e.colors.textValidationDanger},[`&${i}-validating`]:{color:e.colors.textSecondary}},[a]:{minHeight:e.general.heightSm},[`${a} input[disabled]`]:{border:"none"},[`&${o} input:focus`]:(0,f.dg)({boxShadow:"none"}),...(0,c.Cx)(e.options.enableAnimation)})})({theme:e,clsPrefix:t}),({theme:e,clsPrefix:t})=>`${(0,f.H6)(e)}|${t}`);function g(e,t){if(!("object"==typeof e&&null!==e&&"validator"in e&&"function"==typeof e.validator))return e;let r=t.wrap(e.validator);if(r===e.validator)return e;return{...e,validator:r}}let h=Object.assign((0,l.forwardRef)(function({dangerouslySetAntdProps:e,children:t,...r},n){let o={...r,layout:r.layout||"vertical",requiredMark:r.requiredMark||!1};return(0,a.Y)(c.wC,{children:(0,a.Y)(i.A,{...(0,p.VG)(),...o,colon:!1,ref:n,...e,children:(0,a.Y)(c.dg,{children:t})})})}),{Item:({dangerouslySetAntdProps:e,children:t,...r})=>{let{theme:n,classNamePrefix:o}=(0,d.wn)(),s=(0,u.HY)(),f=(0,l.useMemo)(()=>(function(e,t){if(!e||0===e.length)return e;let r=!1,a=e.map(e=>{let a=function(e,t){if("function"==typeof e)return r=>g(e(r),t);return g(e,t)}(e,t);return r||=a!==e,a});return r?a:e})(r.rules,s),[s,r.rules]);return(0,a.Y)(c.wC,{children:(0,a.Y)(i.A.Item,{...(0,p.VG)(),...r,rules:f,css:m({theme:n,clsPrefix:o}),...e,children:t})})},List:i.A.List,useForm:i.A.useForm})},846312:(e,t,r)=>{"use strict";r.d(t,{Qp:()=>i,xH:()=>o});var a=r(141078);function n(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}let i=(0,a.J1)`
  query GetUcModelsQuery($schemaFullName: String!, $maxResults: Int = 100, $pageToken: String)
  @component(name: "DBSQLX.FileBrowser") {
    unityCatalogSchemaNameReference(fullName: $schemaFullName) {
      schema {
        fullName
        models(maxResults: $maxResults, pageToken: $pageToken) {
          nodes {
            managedCatalogRegisteredModelInfo {
              name
              owner
              createdAt
              securableKind
              securableType
              browseOnly
              id
            }
          }
          nextPageToken
        }
      }
    }
  }
`;function o(e,t,r){var a;return(a=function*(e,t,{maxResults:r=100,pageToken:a}={},n){let{data:o}=yield e.query({query:i,variables:{schemaFullName:t,maxResults:r,pageToken:a},fetchPolicy:n});return o.unityCatalogSchemaNameReference?.schema?.models??null},function(){var e=this,t=arguments;return new Promise(function(r,i){var o=a.apply(e,t);function s(e){n(o,r,i,s,l,"next",e)}function l(e){n(o,r,i,s,l,"throw",e)}s(void 0)})}).apply(this,arguments)}},846947:(e,t,r)=>{"use strict";r.d(t,{CN:()=>p,Ew:()=>g,FK:()=>m,HZ:()=>d,I1:()=>f,JF:()=>l,Ml:()=>u,ok:()=>s,q:()=>c,ur:()=>b,vU:()=>h});var a=r(611824);if(13057==r.j)var n=r(817148);if(13057==r.j)var i=r(115957);var o=r(441535);let s=()=>(0,o.W)("databricks.fe.clustercontrols.enableBudgetPolicyAdminUiPublicPreview",!1),l=()=>(0,o.W)("databricks.fe.clustercontrols.enableCanCreatePolicyCheck",!1),u=()=>((0,o.W)("budget_limit",null)??(0,o.W)("databricks.budgetPolicies.enableBudgetPolicyLimit",!1))&&(0,i.zl)(n.g3.COMPUTE_BUDGET_POLICY_LIMIT),c=()=>(0,o.W)("databricks.fe.budget_limit.experiment.monthly_limit_model.enabled",!1),d=()=>(0,o.W)("databricks.fe.budget_policy.enableBudgetPolicyAdminUIForGA",!1),f=()=>(0,o.W)("databricks.budget_policy.enableFeaturesRequiredForGA",!1)&&(0,o.W)("databricks.fe.budget_policy.enableSystemDefaultPolicySortPreference",!1),p=()=>(0,a._)()&&(0,o.W)("databricks.fe.budget_policy.enableTagPolicyIntegration",!1),m=()=>(0,o.W)("databricks.fe.budget_policy.renameServerlessPolicy",!1),g=()=>(0,o.W)("usage_rate_limit",null)??(0,o.W)("databricks.budgetPolicies.enableBudgetPolicyRateLimit",!1),h=()=>(0,o.W)("databricks.fe.budget_policy.enableFetchAllUIPagination",!1),b=()=>(0,o.W)("databricks.fe.budget_policy.enableDefaultPolicyAdminAccess",!1)},848276:(e,t,r)=>{"use strict";r.d(t,{q:()=>i});var a=r(692738),n=r(931645);function i(){let[e,t]=(0,a.useState)(null),r=(0,a.useRef)([]);if(e)throw e;(0,a.useEffect)(()=>()=>{r.current.forEach(e=>e.cancel())},[]);let i=(0,a.useCallback)((e,a)=>{let i=("measure"===e?n.xP:n.yo)(a);return r.current.push(i),i.catch(e=>t(t=>t||e)).finally(()=>{r.current=r.current.filter(e=>e!==i)}),i},[]);return{measure:(0,a.useCallback)(e=>i("measure",e),[i]),mutate:(0,a.useCallback)(e=>i("update",e),[i])}}},848343:(e,t,r)=>{"use strict";r(106390)},852683:(e,t,r)=>{"use strict";r.d(t,{F:()=>n});let a=[["none",/^(?:[^\\"]|\\.)*$/],["simple",/^\s*"(?:[^\\"]|\\.)*"\s*$/],["complex",/^[^"]*(?:\s|^)(?:"(?:[^\\"]|\\.)*"(?:\s[^"]+)?(?:\s|$))+$/],["unpadded",/^[^"]*(?:"(?:[^\\"]|\\.)*"[^"]*)+$/]];function n(e){for(let[t,r]of a)if(null!==r.exec(e))return t;return"invalid"}},860148:(e,t,r)=>{"use strict";r.d(t,{z:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.isOnlyHonorForceUpdatesEnabled.killswitch",!1)}},860711:(e,t,r)=>{"use strict";r.d(t,{D:()=>f,H:()=>l});var a=r(610435);r(692738);var n=r(550670),i=r(497895),o=r(532411),s=r(569481);function l(e,t,r){if(!t)return(0,n.yP)(t,r);if(e===s.g8.IDENTIFIED)return`url(#react-flow__${t}_identified)`;if(e===s.g8.SELECTED)return`url(#react-flow__${t}_select)`;if(e===s.g8.HOVERED)return`url(#react-flow__${t}_hover)`;if(e===s.g8.NONE)return`url(#react-flow__${t}_default)`;return(0,n.yP)(t,r)}let u=({id:e,children:t})=>(0,a.Y)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:"12.5",markerHeight:"12.5",viewBox:"-10 -10 20 20",orient:"auto",refX:"0",refY:"0",children:t}),c=({id:e,color:t})=>(0,a.Y)(u,{id:e,children:(0,a.Y)("polyline",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1",fill:t,points:"-5,-4 0,0 -5,4 -5,-4"})}),d=({id:e,color:t})=>(0,a.Y)(u,{id:e,children:(0,a.Y)("polyline",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",fill:"none",points:"-5,-4 0,0 -5,4"})}),f=()=>{let{theme:e}=(0,i.wn)();return(0,a.FD)("defs",{children:[(0,a.Y)(d,{id:"react-flow__arrow_identified",color:e.colors.textPrimary}),(0,a.Y)(d,{id:"react-flow__arrow_hover",color:(0,o.Vu)(e)}),(0,a.Y)(d,{id:"react-flow__arrow_select",color:(0,o.Hz)(e)}),(0,a.Y)(d,{id:"react-flow__arrow_default",color:e.colors.grey400}),(0,a.Y)(c,{id:"react-flow__arrowclosed_identified",color:e.colors.textPrimary}),(0,a.Y)(c,{id:"react-flow__arrowclosed_hover",color:(0,o.Vu)(e)}),(0,a.Y)(c,{id:"react-flow__arrowclosed_select",color:(0,o.Hz)(e)}),(0,a.Y)(c,{id:"react-flow__arrowclosed_default",color:e.colors.grey400})]})}},861166:(e,t,r)=>{"use strict";r.d(t,{$:()=>o});var a=r(610435),n=r(96477),i=r(429608);let o=({dangerouslySetAntdProps:e,...t})=>(0,a.Y)(i.wC,{children:(0,a.Y)(n.A,{...t,...e})})},866153:(e,t,r)=>{"use strict";r.d(t,{I:()=>n,w:()=>a});let a=(e,t)=>e.type>=t.ACCESS&&e.type<=t.ZONE,n=(e,t)=>e.type>=t.ADD&&e.type<=t.ZONE},869900:(e,t,r)=>{"use strict";r.d(t,{Hx:()=>S,Lj:()=>A,Rm:()=>k});var a=r(156577),n=r(963377),i=r(441535),o=r(141078),s=r(22191),l=r(747129),u=r(925800),c=r(769081),d=r(993533),f=r(536152),p=r(83830),m=r(113963);let g=(0,o.J1)`
  query sqlWarehouseStatusById($id: ID!) @component(name: "Notebook.Notebooks") {
    lakehouse(id: $id) {
      id
      state
      health {
        status
      }
    }
  }
`,h=(0,o.J1)`
  subscription sqlWarehouseStatusByIdSubscription($id: ID!) @component(name: "ServingInfra.GraphQLService") {
    lakehouse(id: $id) {
      id
      state
      health {
        status
      }
    }
  }
`,b=(0,o.J1)`
  query cnxtClusterStatusById($getInteractiveComputesData: GenaiGetInteractiveComputesInput!)
  @component(name: "Notebook.Notebooks") {
    genaiGetInteractiveComputes(GetInteractiveComputesData: $getInteractiveComputesData) {
      interactiveComputes {
        id: name
        state: status
      }
    }
  }
`,y=(0,o.J1)`
  query aiComputeManagerSessionStatusById($sessionId: String!) @component(name: "ModelTraining.AIRuntimePlatform") {
    aicomputemanagerGetSession(input: { sessionId: $sessionId }) {
      clusterInfo {
        clusterId
        state
      }
    }
  }
`,v=(0,o.J1)`
  query clusterStatusByIdQuery($id: String!) @component(name: "Notebook.Notebooks") {
    cluster(id: $id) {
      id
      state
      stateMessage
      attributes {
        sparkVersion
        dataSecurityMode
        accessMode
      }
    }
  }
`,E=(0,o.J1)`
  subscription clusterStatusByIdSubscription($id: String!) @component(name: "ServingInfra.GraphQLService") {
    cluster(clusterId: $id) {
      id
      state
      stateMessage
      attributes {
        sparkVersion
        dataSecurityMode
        accessMode
      }
    }
  }
`,I=()=>(0,i.W)("databricks.fe.notebook.useComputeResourceStatusBurnRate",!1);function T(e,t){try{let r=(0,m.gj)(e,t,{clusterQuery:v,clusterSubscription:E,sqlWarehouseQuery:g,sqlWarehouseSubscription:h,cnxtClusterQuery:b,aicmSessionQuery:y});return I()&&f.Q.sev2BurnRate(s.Es.Notebooks,"useGeneralComputeResourceStatus status",l.i1.P99,l.Ip.Min10,!0,r.error),r}catch(e){return I()&&f.Q.sev2BurnRate(s.Es.Notebooks,"useGeneralComputeResourceStatus status",l.i1.P99,l.Ip.Min10,!1,e),{loading:!1,error:e,clusterInfo:null}}}function w(e,t,r){if(t||r||null==e)return!1;if(e?.__typename==="Cluster")return(0,c.QU)(e.state);if(e?.__typename==="Lakehouse")return(null===e.state||e.state===d.tXm.RUNNING)&&(null===e.health||null===e.health.status||[d.Ewx.HEALTHY,d.Ewx.DEGRADED].includes(e.health.status));if(e?.__typename==="GenaiInteractiveCompute")return e.state===d.SZN.RUNNING;if(e?.__typename==="AicomputemanagerGetSessionResponse")return e.clusterInfo?.state===d.O3l.RUNNING;if(e?.__typename==="DatabaseInstance")return e.state===a.n.AVAILABLE;if(e?.__typename==="LakebaseInstance")return e.databaseBranch?.current_state===n.V.Ready;throw Error(`Unexpected compute resource type: ${e&&(e.__typename??"(missing)")}`)}function S(e,t){let{loading:r,error:a,clusterInfo:n}=T(e,t);return w(n,r,a)}function k(e){let{loading:t,error:r,clusterInfo:a}=(0,p.m)(e);return w(a,!!t,r)}function A(e,t){let{loading:r,error:a,clusterInfo:n}=T(e,t);if(r||a||null==n)return{isComputeResourceUc:!1,loading:r};if(n?.__typename==="Cluster")return{isComputeResourceUc:(0,u.xv)({data_security_mode:n.attributes.dataSecurityMode??void 0,spark_version:n.attributes.sparkVersion??void 0,access_mode:n.attributes.accessMode??void 0},void 0),loading:!1};if(n?.__typename==="Lakehouse"||n?.__typename==="GenaiInteractiveCompute"||n?.__typename==="AicomputemanagerGetSessionResponse"||n?.__typename==="DatabaseInstance"||n?.__typename==="LakebaseInstance")return{isComputeResourceUc:!0,loading:!1};throw Error(`Unexpected compute resource type: ${n&&(n.__typename??"(missing)")}`)}},872843:(e,t,r)=>{"use strict";r.d(t,{H:()=>n});var a=r(278983);function n(e,t){if("function"!=typeof t)throw Error("callbackFn must be a function");let r=r=>{let n=t();n&&("BackboneUtils"!==e&&"BackboneRpcMixin"!==e&&(0,a.y)("clientsideEvent",{eventType:"beforeWindowUnload",eventName:e}),r.preventDefault(),r.returnValue=n);return n};return window.addEventListener("beforeunload",r),()=>{window.removeEventListener("beforeunload",r)}}},872991:(e,t,r)=>{"use strict";r.d(t,{s:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.ES.1633451.killswitch",!1)}},876855:(e,t,r)=>{"use strict";r.d(t,{HV:()=>c,Ig:()=>p,KE:()=>m,R0:()=>i,Zi:()=>s,cc:()=>n,xM:()=>u,zK:()=>l});var a=r(778580);let n=new Set(["version","source","filter","dimensions","fields","measures","joins","materialization","comment","parameters"]),i=new Set(["version","source","filter","dimensions","fields","measures","joins","parameters"]);function o(e){if(!e||"object"!=typeof e||!("fields"in e)||"dimensions"in e)return e;let{fields:t,...r}=e;return{...r,dimensions:t}}let s=new Set(["0.1","1.0","1.1"]),l=["day","days","month","months","year","years"],u=["inclusive","exclusive"];function c(e){let t,r=[];try{t="string"==typeof e?p(e):e}catch(e){return{isValid:!1,errors:["Invalid YAML"]}}if(!t||"object"!=typeof t)return{isValid:!1,errors:["Metric view must be a non-null object"]};let a=o(t),i=Object.keys(a).filter(e=>!n.has(e));i.length>0&&r.push(`Disallowed top-level fields: ${i.join(", ")}`);let l=a.version;l?s.has(String(l))||r.push(`Invalid version "${l}". Allowed versions: ${Array.from(s).join(", ")}`):r.push("Missing required field: version"),Array.isArray(a.measures)&&0!==a.measures.length||r.push("measures must be a non-empty array"),Array.isArray(a.dimensions)&&0!==a.dimensions.length||r.push("dimensions must be a non-empty array");let u=(e,t)=>{if(!Array.isArray(e))return;e.forEach((e,a)=>{if(!e||"object"!=typeof e)return void r.push(`${t}[${a}] must be an object`);e.name||r.push(`${t}[${a}] is missing required field: name`),e.expr||r.push(`${t}[${a}] is missing required field: expr`)})};return u(a.measures,"measures"),u(a.dimensions,"dimensions"),{isValid:0===r.length,errors:r}}let d=a.Ay.DEFAULT_SCHEMA,f=new a.Ay.Schema({implicit:d.compiledImplicit.map(e=>"tag:yaml.org,2002:int"===e.tag||"tag:yaml.org,2002:float"===e.tag?new a.Ay.Type(e.tag,{kind:"scalar",resolve:e.resolve,construct:e=>e}):e),explicit:d.compiledExplicit});function p(e,t){return o(a.Ay.load(e,{schema:f,...t}))}function m(e,t){return a.Ay.dump(e,t)}},882309:(e,t,r)=>{"use strict";r.d(t,{A:()=>u,h:()=>l});var a,n,i,o=r(692738);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(null,arguments)}let l=(0,o.forwardRef)(({title:e,titleId:t,...r},l)=>o.createElement("svg",s({width:16,height:10,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:l,"aria-labelledby":t},r),e?o.createElement("title",{id:t},e):null,a||(a=o.createElement("path",{d:"M4.531 3.541c0 .201.021.364.058.483.043.12.095.249.17.39a.238.238 0 0 1 .036.125c0 .054-.032.108-.1.162l-.334.228a.25.25 0 0 1-.137.049c-.053 0-.106-.027-.158-.076a1.694 1.694 0 0 1-.19-.255 4.269 4.269 0 0 1-.165-.32c-.412.499-.93.748-1.554.748-.444 0-.798-.13-1.058-.39-.259-.26-.391-.608-.391-1.041 0-.461.158-.835.481-1.118.324-.282.752-.422 1.296-.422.18 0 .365.016.56.044.196.027.397.07.608.119V1.87c0-.412-.084-.699-.248-.867-.17-.169-.455-.25-.862-.25-.185 0-.375.022-.571.071a4.091 4.091 0 0 0-.571.185c-.085.037-.149.059-.185.07a.308.308 0 0 1-.085.016c-.074 0-.111-.054-.111-.168V.663c0-.087.01-.152.037-.19a.404.404 0 0 1 .148-.114C1.39.26 1.612.18 1.87.115a3.13 3.13 0 0 1 .825-.103c.63 0 1.09.146 1.385.439.291.292.44.737.44 1.333v1.757h.01Zm-2.147.825c.174 0 .354-.033.544-.098.19-.065.36-.185.503-.347a.872.872 0 0 0 .18-.347c.032-.13.053-.288.053-.472v-.227a4.308 4.308 0 0 0-.487-.092 3.92 3.92 0 0 0-.497-.033c-.355 0-.613.07-.788.217-.175.146-.26.353-.26.624 0 .255.064.445.197.574.127.135.312.2.555.2Zm4.246.585c-.095 0-.158-.016-.2-.054-.044-.032-.08-.108-.112-.211L5.076.494a.962.962 0 0 1-.048-.217c0-.087.043-.135.127-.135h.518c.1 0 .169.016.206.054.043.032.074.108.105.211l.889 3.59.825-3.59c.027-.108.058-.179.1-.211A.358.358 0 0 1 8.01.142h.423c.1 0 .17.016.212.054.043.032.08.108.1.211l.836 3.633.915-3.633A.472.472 0 0 1 10.6.196a.34.34 0 0 1 .206-.054h.492c.085 0 .132.043.132.135 0 .028-.005.054-.01.087a.788.788 0 0 1-.037.136L10.109 4.69c-.032.108-.069.179-.111.211a.333.333 0 0 1-.201.054h-.454c-.1 0-.17-.016-.212-.054-.043-.037-.08-.108-.1-.217l-.82-3.497-.815 3.492c-.026.108-.057.179-.1.217-.043.038-.116.054-.212.054H6.63Zm6.795.146c-.274 0-.55-.032-.814-.097-.264-.066-.47-.136-.608-.218a.389.389 0 0 1-.164-.152.395.395 0 0 1-.032-.152v-.276c0-.114.043-.168.122-.168.032 0 .063.005.095.016s.08.033.133.054c.18.082.375.146.581.19.212.044.418.065.63.065.333 0 .592-.06.772-.179a.587.587 0 0 0 .274-.515.537.537 0 0 0-.142-.38c-.095-.102-.275-.194-.534-.281l-.767-.244c-.386-.125-.672-.31-.846-.553a1.315 1.315 0 0 1-.265-.787c0-.227.048-.428.143-.602.094-.173.222-.325.38-.444.159-.125.339-.217.55-.282A2.25 2.25 0 0 1 13.6 0c.117 0 .238.005.354.022.122.016.233.037.344.059.106.027.206.054.301.087.096.032.17.065.222.097a.459.459 0 0 1 .159.136.298.298 0 0 1 .047.179v.255c0 .115-.042.174-.121.174a.533.533 0 0 1-.201-.065A2.369 2.369 0 0 0 13.69.732c-.301 0-.54.05-.704.152-.164.103-.248.26-.248.483 0 .152.053.282.158.385.106.103.302.206.582.298l.751.244c.381.124.656.298.82.52.164.222.243.477.243.76 0 .232-.048.444-.137.628a1.453 1.453 0 0 1-.386.477c-.165.136-.36.233-.587.304a2.449 2.449 0 0 1-.757.114Z",fill:"#232F3E"})),n||(n=o.createElement("path",{d:"M14.457 7.667c-1.75 1.28-4.292 1.961-6.477 1.961-3.064 0-5.824-1.123-7.91-2.99-.164-.147-.015-.348.182-.232C2.507 7.703 5.288 8.49 8.166 8.49c1.941 0 4.073-.4 6.036-1.223.292-.132.542.19.255.4Z",fill:"#F90"})),i||(i=o.createElement("path",{d:"M15.202 6.745c-.222-.289-1.467-.139-2.032-.07-.17.022-.196-.128-.043-.24.992-.707 2.623-.504 2.813-.268.19.24-.053 1.896-.982 2.69-.142.122-.28.058-.216-.103.211-.53.681-1.725.46-2.009Z",fill:"#F90"})))),u=r.p+"static/media/aws.bb56480692458ff44961443e7a61a3bb.svg"},883691:(e,t,r)=>{"use strict";r.d(t,{R:()=>a});let a="app-top-toolbar-spacing"},884028:(e,t,r)=>{"use strict";if(r.d(t,{Fn:()=>u,iu:()=>l}),13057==r.j)var a=r(610435);var n=r(692738);if(13057==r.j)var i=r(394244);if(13057==r.j)var o=r(203796);let s=n.createContext({addOnSuccess:()=>{},removeOnSuccess:()=>{},notifyOnSuccess:()=>{}});function l({children:e}){let[t]=(0,o.n)((0,i.ur)()),[r,u]=(0,n.useState)([]),c=(0,n.useCallback)(e=>{u(t=>[...t,e])},[]),d=(0,n.useCallback)(e=>{u(t=>t.filter(t=>t!==e))},[]),f=(0,n.useCallback)(e=>{for(let a of r)a(e,t)},[r,t]);return(0,a.Y)(s.Provider,{value:{addOnSuccess:c,removeOnSuccess:d,notifyOnSuccess:f},children:e})}function u(){return(0,n.useContext)(s)}},886110:(e,t,r)=>{"use strict";r.d(t,{CG:()=>c,aD:()=>m,gy:()=>p,kC:()=>f});var a=r(141078),n=r(831358);if(13057==r.j)var i=r(726583);var o=r(543963);let s=(0,a.J1)`
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
`,l=(0,a.J1)`
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
`,u=(0,a.J1)`
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
`,c=(0,a.J1)`
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
  ${n.j}
  ${n.E}
`;(0,a.J1)`
  fragment RunsListTable_RunNode on Run {
    ...RunsListTableColumns_RunNode
  }
  ${s}
`;let d=(0,a.J1)`
  fragment RunsListTable_JobsRunNode on JobsRun {
    ...RunsListTableColumns_JobsRunNode
  }
  ${c}
`,f=(0,a.J1)`
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
`;function p({jobId:e,first:t,after:r,startTimeFrom:a,startTimeTo:n,expandTasks:o}){return{query:f,variables:{jobId:e,first:t,after:r,expandTriggerInfo:!0,expandTasks:o,startTimeFrom:a,startTimeTo:n,includeJobParameters:(0,i.ue)(),includeRunStatus:!0,includeQueueDuration:!0,includeQueueReason:!0}}}(0,a.J1)`
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
`;let m=(0,a.J1)`
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
  ${n.j}
  ${n.E}
`},886493:(e,t,r)=>{"use strict";r.d(t,{g:()=>i,k:()=>o});var a=r(102876),n=r(356579);let i=()=>{let[e,t]=(0,n.O4)(e=>[e.getSyntaxParseResultFromCache,e.setSyntaxParseResultInCache],a.x);return[e,t]},o=()=>{let[e,t]=(0,n.O4)(e=>[e.getTokenParseResultFromCache,e.setTokenParseResultInCache],a.x);return[e,t]}},887774:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{RouteComponent:()=>s});var n=r(610435);r(692738);var i=r(233869),o=e([i]);i=(o.then?(await o)():o)[0];let s=()=>(0,n.Y)(i.U,{});a()}catch(e){a(e)}})},888708:(e,t,r)=>{"use strict";r.d(t,{s:()=>p});var a=r(250912),n=r.n(a),i=r(441535),o=r(689017),s=r(886100),l=r(22191),u=r(711489),c=r(587122),d=r(44772);let f=/AS\s+\$\$(.*?)\$\$/gis;function p(e){let t=(0,i.W)("databricks.fe.editor.formatter.enableNewSqlFormatter",!1),r="{{"+(0,d.A)()+"}}",a=n()(e),o=[],u=f.exec(a);if(!t){for(;u;)o.push(u[1]),u=f.exec(a);a=a.replace(f,r)}if(a=(0,c.G)(a),t||!o)return m(!1),a;if(!t){let t=0;for(;a.match(r)&&t<o.length;){let e=o[t];a=a.replace(r,t=>"AS $$"+e+"$$"),t++}if(t!==o.length){var p;return p="FormatEmbeddedLangaugeError",s.iT.log(l.Es.Editor,"SqlFormatter",p),e}}return m(!0),a}function m(e){(0,o.wi)({editor_event_log:{editor_formatter_format_sql_log:{event_name:e?u.J5.EditorFormatterFormatSqlEventName.EDITOR_FORMATTER_FORMAT_SQL_EVENT_NAME_FORMAT_SQL_WITH_EMBEDDED_CODE:u.J5.EditorFormatterFormatSqlEventName.EDITOR_FORMATTER_FORMAT_SQL_EVENT_NAME_FORMAT_SQL_NO_EMBEDDED_CODE}}})}},893079:(e,t,r)=>{"use strict";r.d(t,{g:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enableDAISSemanticGraphs",!1)}},893736:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.667 6.575c1.376.452 1.376 2.398 0 2.85l-2.472.813a1.5 1.5 0 0 0-.957.957l-.813 2.472c-.452 1.376-2.398 1.376-2.85 0l-.813-2.472a1.5 1.5 0 0 0-.956-.957l-2.473-.813c-1.376-.452-1.376-2.398 0-2.85l2.473-.813a1.5 1.5 0 0 0 .956-.956l.813-2.473c.452-1.376 2.398-1.376 2.85 0l.813 2.473a1.5 1.5 0 0 0 .957.956z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="SparkleFillIcon";let l=s},907393:(e,t,r)=>{"use strict";r.d(t,{J:()=>n});var a=r(441535);function n(){let e=(0,a.W)("databricks.fe.lakeview.getVizTypeDefinitionExpandAllDepth",2);return Math.min(10,Math.max(0,"number"==typeof e&&Number.isFinite(e)?Math.trunc(e):2))}},908664:(e,t,r)=>{"use strict";r.d(t,{f:()=>i});var a=r(16778),n=r.n(a);class i{static capitalizeAllNames(e){return e.split(" ").map(e=>{if(e.indexOf("@")>=0)return e;return n()(e)}).join(" ")}}},915650:(e,t,r)=>{"use strict";r.d(t,{Y:()=>n});var a=r(610435);let n=(0,r(692738).forwardRef)(({children:e,startIcon:t,endIcon:r,changeWidthWhenDisabled:n=!0,...o},s)=>(0,a.FD)("button",{ref:s,css:e=>i(e,{hasEndIcon:!!r,changeWidthWhenDisabled:n}),...o,children:[t,e,r]})),i=(e,{hasEndIcon:t,changeWidthWhenDisabled:r})=>({"--background":e.colors.tagDefault,"--color":e.isDarkMode?e.colors.white:e.colors.charcoal,display:"inline-flex",alignItems:"center",height:20,fontWeight:e.typography.typographyBoldFontWeight,fontSize:e.typography.fontSizeSm,lineHeight:e.typography.lineHeightSm,padding:0,paddingRight:t?0:e.spacing.sm,paddingLeft:e.spacing.xs,border:"none",borderRadius:e.legacyBorders.borderRadiusMd,background:"var(--background)",color:"var(--color)",cursor:"pointer","&:hover":{background:e.colors.actionTertiaryBackgroundHover,color:e.colors.actionTertiaryTextHover},"&:active":{background:e.colors.actionTertiaryBackgroundPress,color:e.colors.actionTertiaryTextPress},"& svg":{height:20,width:20,flexShrink:0},"&[disabled]":{cursor:"default",paddingRight:r?e.spacing.xs:void 0},"&[disabled]:hover, &[disabled]:active":{background:"var(--background)",color:"var(--color)"}})},916352:(e,t,r)=>{"use strict";let a;r.d(t,{p:()=>T});var n=r(610435),i=r(225577),o=r(692738),s=r(497895),l=r(342411),u=r(283009),c=r(488655),d=r(383020),f=r(574557);let p=({content:e})=>{let t=(0,o.useMemo)(()=>(0,f.B)(e).map((e,t)=>{if("string"==typeof e)return(0,n.Y)("span",{children:e},`string-${t}`);if(o.isValidElement(e)&&e.props&&"object"==typeof e.props&&"className"in e.props){let r=e.props.className.replace(/ansi-(\w+)-intense-fg/g,"ansi-$1-fg").replace(/ansi-(\w+)-intense-bg/g,"ansi-$1-bg");return o.cloneElement(e,{...e.props,className:r,key:`element-${t}`})}return o.isValidElement(e)?o.cloneElement(e,{key:`element-fallback-${t}`}):(0,n.Y)("span",{children:e},`fallback-${t}`)}),[e]);return(0,n.Y)("div",{children:t})};var m=r(168356),g=r(262541),h=r(938668);function b(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}let y=(0,i.A)("div",{target:"e18lozbo0"})("position:relative;"),v=(0,i.A)("div",{target:"e18lozbo1"})("overflow:auto;padding:",({theme:e})=>e.spacing.sm,"px;border-top:1px solid ",({theme:e})=>e.colors.border,";background-color:",({theme:e})=>e.isDarkMode?void 0:e.colors.codeBackground,";"),E=(0,i.A)("div",{target:"e18lozbo2"})("position:absolute;top:",({theme:e})=>e.spacing.sm,"px;right:",({theme:e})=>e.spacing.sm,"px;opacity:",({isVisible:e})=>+!!e,";transition:opacity 0.2s ease-in-out;z-index:1;background-color:",({theme:e})=>e.colors.backgroundPrimary,";border-radius:",({theme:e})=>e.legacyBorders.borderRadiusMd,"px;box-shadow:",({theme:e})=>e.shadows.md,";"),I=(a="(?:\\x1b\\[[0-9;]*m)*",RegExp(`(${a}(?<!\\.)/Workspace/[^:]+\\.py${a}(?::\\d+)?)`,"g")),T=({text:e,style:t})=>{let{theme:r}=(0,s.wn)(),a=(0,l.tz)(),{maybeGetObjectIdByPath:i}=(0,m.w)(),f=(0,c.Zp)(),T=(0,g.SM)(e=>e.setSelectedTargetState),w=(0,g.SM)(e=>e.selectedTargetState),{pathName:S}=(0,d.rk)(["pathName"]),[k,A]=(0,o.useState)(!1),_=a.formatMessage({id:"XGVWFU",defaultMessage:"Error details and stack trace"}),C=(e?.split(I)??[]).map((e,t)=>{let a;if(!I.test(e))return(0,n.Y)(p,{content:e},t);return a=e.replace(/\x1b\[[0-9;]*m/g,""),(0,n.Y)("span",{css:{color:r.colors.actionPrimaryBackgroundDefault,textDecoration:"underline",cursor:"pointer","&:hover":{color:r.colors.actionPrimaryBackgroundHover}},onClick:()=>{var e;return(e=function*(){let e=a.lastIndexOf(":"),t=-1!==e?a.substring(0,e):a,r=-1!==e?a.substring(e+1):null,n=yield i(t);if(!n)return;let o=!0;`/Workspace${S}`!==t&&(o=!1,yield f(`/editor/files/${n}`));let s={shouldScrollTo:null!==r,lineNumber:r?parseInt(r):void 0,editorInitialized:o};w?.selectedTarget===h.D&&(s.selectedTarget=t),T(s)},function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){b(i,a,n,o,s,"next",e)}function s(e){b(i,a,n,o,s,"throw",e)}o(void 0)})})()},children:a},t)}),R=a.formatMessage({id:"aIHxBT",defaultMessage:"Copy test output"}),M=e?.replace(/\x1b\[[0-9;]*m/g,"")??"";return(0,n.FD)(y,{onMouseEnter:()=>A(!0),onMouseLeave:()=>A(!1),children:[(0,n.Y)(E,{isVisible:k,theme:r,children:(0,n.Y)(u.a,{componentId:"workspace-test-error-message-copy-button",copyText:M,copyTooltip:R})}),(0,n.Y)(v,{id:"error-dialog-content",theme:r,role:"region","aria-label":_,tabIndex:0,style:t,children:(0,n.Y)("div",{className:"ansiout",style:{minWidth:"630px"},children:C})})]})}},916852:(e,t,r)=>{"use strict";r.d(t,{Rl:()=>u,Rn:()=>c,dX:()=>l});var a=r(686560),n=r(5697),i=r(981158),o=r(425608);let s=new Set(["DIRECTORY","REPO","PROJECT"]),l=e=>!!(e&&s.has(e)),u=[n.Z6.Folder,n.Z6.Project],c=()=>(0,o._)(`/${i.A.UserFolderName}/${(0,a.d)("user_new","")}`)},919119:(e,t,r)=>{"use strict";r.d(t,{P:()=>l});var a=r(610435),n=r(648782),i=r(774540);function o(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function s(){return(0,a.Y)(n.sv,{})}function l(){return(0,i.e)(()=>{var e;return(e=function*(){return{RouteComponent:s}},function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function s(e){o(i,a,n,s,l,"next",e)}function l(e){o(i,a,n,s,l,"throw",e)}s(void 0)})})()})}},921624:(e,t,r)=>{"use strict";r.d(t,{BC:()=>d,CW:()=>y,EK:()=>v,GK:()=>l,K4:()=>g,Mn:()=>i,NF:()=>m,Rv:()=>T,U$:()=>c,UU:()=>f,Z4:()=>s,dA:()=>I,gx:()=>o,jB:()=>w,pr:()=>b,qi:()=>u,s4:()=>E,z$:()=>p,zZ:()=>h});var a=r(497895),n=r(342411);let i="null",o="None",s="Unknown",l="Not specified",u="None",c="Standard (16GB)",d="High (32GB)",f="SNAPSHOT",p=(0,n.YK)({downloadMenuItem:{id:"QYvmCj",defaultMessage:"Download environment"},pipLogsButton:{id:"sRuVQF",defaultMessage:"View pip logs"},newPipLogsButton:{id:"f9Rgmz",defaultMessage:"pip logs"},applyButton:{id:"qFerLx",defaultMessage:"Apply"},overflowMenuButton:{id:"5INn3U",defaultMessage:"Manage environment"},exportMenuItem:{id:"8HkOh1",defaultMessage:"Export environment"},modalExportButton:{id:"ATHXaR",defaultMessage:"Export"}}),m=690,g=474,h=550,b=520,y=.45,v=250,E=()=>{let{theme:e}=(0,a.wn)();return{defaultText:{fontSize:"10px !important",color:e.colors.textSecondary},errorText:{fontSize:"10px !important",color:e.colors.textValidationDanger},errorIcon:{fontSize:14,color:e.colors.textValidationDanger},wrapper:{display:"flex",gap:e.spacing.xs,alignItems:"center"}}},I=600,T=["/Workspace/Users","/Workspace/Repos"],w=4},922513:(e,t,r)=>{"use strict";r.d(t,{ny:()=>T,tO:()=>w});var a=r(441535),n=r(516041),i=r(64454),o=r(697149),s=r(282797),l=r(297987),u=r(505113),c=r(849545),d=r(936280),f=r(340582),p=r(879864),m=r(849678),g=r(488258),h=r(594682),b=r(741973),y=r(970610),v=r(490734);d.W,d.W,d.W,g.UV,d.W,o.ws,y.uz,c.Gf;let E=[{widgetType:"area",version:d.W,featureFlag:null},{widgetType:"bar",version:d.W,featureFlag:null},{widgetType:"line",version:d.W,featureFlag:null},{widgetType:"pie",version:g.UV,featureFlag:null},{widgetType:"scatter",version:d.W,featureFlag:null},{widgetType:"counter",version:o.ws,featureFlag:null},{widgetType:"table",version:y.uz,featureFlag:null},{widgetType:"pivot",version:c.Gf,featureFlag:null},{widgetType:"box",version:d.W,featureFlag:null},{widgetType:"symbol-map",version:u.ld,featureFlag:null},{widgetType:"choropleth-map",version:l.NY,featureFlag:null},{widgetType:"heatmap",version:p.cy,featureFlag:"__test_only_enableHeatmapInHelios"},{widgetType:"combo",version:h.zN,featureFlag:null},{widgetType:"histogram",version:m.g9,featureFlag:null},{widgetType:"forecast-line",version:n.d,featureFlag:null},{widgetType:"sankey",version:b.bC,featureFlag:null},{widgetType:"funnel",version:f.O,featureFlag:"enableFunnel"},{widgetType:"waterfall",version:i.Ld,featureFlag:"enableWaterfall"},{widgetType:"custom-vega-viz",version:s.pt,featureFlag:"enableCustomVegaViz"}],I=new Set(["forecast-line","custom-vega-viz"]);function T(e){return I.has(e)}function w({widgetType:e,flags:t}){let r=E.filter(r=>null===r.featureFlag||t[r.featureFlag]||r.widgetType===e);return t.enableTableV2InHeliosInsteadOfTableV1&&(r=r.map(e=>"table"!==e.widgetType||e.version===v.AC?e:{widgetType:"table",version:v.AC})),t.enableText2VizWidgetTypesOnly&&(r=r.filter(e=>new Set((0,a.W)("databricks.datarooms.classicGenieTypedVizFunctionSpecTypes",["bar","line","area","scatter","pie","symbol-map","heatmap","sankey"])).has(e.widgetType))),r}},923509:(e,t,r)=>{"use strict";r.d(t,{kX:()=>o,vV:()=>l,vZ:()=>s});var a,n,i,o=((a={}).String="String",a.Integer="Integer",a.Decimal="Decimal",a.Date="Date",a.Timestamp="Timestamp",a.Range="Range",a),s=((n={}).Text="Text",n.Dropdown="Dropdown",n.Range="Range",n.Dynamic="Dynamic",n),l=((i={}).Range="Range",i.Array="Array",i)},924876:(e,t,r)=>{"use strict";r.d(t,{$k:()=>el,A_:()=>C,DW:()=>F,Ew:()=>en,F2:()=>em,FS:()=>k,HW:()=>eD,JG:()=>ee,L4:()=>T,NY:()=>K,Nd:()=>V,Nl:()=>X,Nm:()=>eP,O9:()=>x,Om:()=>Y,PE:()=>et,PJ:()=>z,Pj:()=>ey,QN:()=>S,Ry:()=>D,Sd:()=>ea,T8:()=>q,T9:()=>N,Ub:()=>ew,Uy:()=>G,VN:()=>B,VT:()=>$,Vr:()=>Z,WK:()=>R,WV:()=>H,X4:()=>O,Xh:()=>er,Xs:()=>eA,Yb:()=>_,Yd:()=>eM,ZV:()=>P,_J:()=>ek,_n:()=>ec,aH:()=>ep,b6:()=>ef,c6:()=>v,c8:()=>eN,cG:()=>E,dN:()=>eI,e:()=>M,eW:()=>eg,e_:()=>w,f2:()=>e_,gK:()=>eo,iM:()=>j,kN:()=>m,kd:()=>eE,kl:()=>ev,m2:()=>eb,mU:()=>A,mf:()=>U,mk:()=>eh,my:()=>es,sN:()=>g,sr:()=>eC,su:()=>h,tj:()=>y,uR:()=>Q,uy:()=>I,vr:()=>eR,wQ:()=>ed,wu:()=>eu,x6:()=>eS,xJ:()=>ei,xb:()=>W,xr:()=>J,yD:()=>b,yd:()=>L,zu:()=>eT});var a=r(441535),n=r(726583);if(13057==r.j)var i=r(886100);if(13057==r.j)var o=r(22191);var s=r(8698),l=r(411424),u=r(707076),c=r(521200),d=r(993533);if(13057==r.j)var f=r(371303);var p=r(889885);function m(){return!!((0,f.sT)("databricks.fe.enableJobsObservabilityUI",!1)||(0,p.FI)("enableJawsObservabilityUI"))}function g(){if((0,a.W)("databricks.elasticspark.enableServerlessScalaTasks",!1))return!0;return(0,a.W)("serverless_jar_jobs",!1)}function h(){return(0,a.W)("databricks.fe.jaws.enableServerlessComputeForScalaTasksByDefault",!0)}function b(e){let t=(0,a.W)("databricks.fe.jaws.repair.unrepairableTaskTypes","[]"),r=(()=>{try{return JSON.parse(t)}catch{return}})(),n=Array.isArray(r);return n||i.iT.sev2(o.Es.WorkflowsOrchestration,"Failed to parse JSON array flag: databricks.fe.jaws.repair.unrepairableTaskTypes",JSON.stringify(t)),(n?r:[]).includes(e)}let y=()=>(0,a.W)("databricks.fe.jaws.continuousJob.triggerStatePollingIntervalMs",5e3),v=()=>(0,a.W)("databricks.elasticspark.maxCharsInJobDescription",1024),E=()=>!!(0,a.W)("databricks.elasticspark.sendingAlertsEnabled",!1)&&!!(0,a.W)("databricks.elasticspark.healthSettingsColumnEnabled",!1),I=()=>(0,a.W)("databricks.elasticspark.dependencyInfo.ui.enabled",!1),T=()=>(0,a.W)("databricks.webapp-elasticspark.enableNotebookOnWarehousesJobIntegration",!1)||(0,a.W)("databricks.webapp.enableSqlWarehouseInNotebookOnGCP",!1),w=()=>(0,n.ue)(),S=()=>(0,n.iQ)()&&(0,u.MH)(),k=()=>(0,a.W)("databricks.fe.jaws.enableTagsFilterOnJobsList",!1)&&(0,n.iQ)(),A=()=>(0,a.W)("databricks.fe.jobs.referencingValues.monaco.byot.enabled",!1),_=()=>(0,a.W)("jobs_bulk_runs",null)??(0,a.W)("databricks.fe.jobs.backfills.enabled",!1),C=()=>(0,a.W)("databricks.fe.jobs.backfills.customGranularity.enabled",!1),R=()=>C()&&(0,a.W)("databricks.fe.jobs.backfills.autoRangeFromFailures.enabled",!1),M=()=>(0,a.W)("databricks.fe.jaws.enableListViewForJobRunDetails",!1),N=()=>(0,a.W)("databricks.fe.jaws.enableListViewForEditingJob",!1),P=()=>(0,a.W)("databricks.fe.jobs.useApi22ForListJobs",!1)&&(0,a.W)("databricks.elasticspark.jobs-api.api22enabled",!1),D=()=>(0,a.W)("databricks.budgetPolicies.isBudgetPoliciesEnableOnRegion",!1)&&((0,a.W)("budget_policy",null)??(0,a.W)("databricks.budgetPolicies.enableBudgetPoliciesFeatureByPercentage",!1))&&(0,a.W)("databricks.elasticspark.budgetpolicies.enableBudgetPoliciesInJobs",!1)||x(),x=()=>(0,a.W)("usage_policy_entitle",null)??(0,a.W)("databricks.usagePolicies.enableEntitlement",!1),L=()=>(0,a.W)("usage_rate_limit",null)??(0,a.W)("databricks.budgetPolicies.enableBudgetPolicyRateLimit",!1),O=()=>(0,a.W)("databricks.fe.jobs.preselectEnabledTasksFromRun",!1),F=()=>(0,n.ue)(),$=()=>(0,a.W)("databricks.fe.jaws.ignoreSavedCreationDateSortByOnJobsList",!0),Y=()=>(0,a.W)("databricks.fe.jaws.enableBetterTasksListFiltering",!1),U=()=>(0,n.ZW)()&&(0,a.W)("databricks.fe.jaws.refetchAssetsListOnMutation",!1),B=()=>(0,a.W)("databricks.fe.jaws.enableBurnRateAlertForLakeFlowList",!1),W=()=>(0,a.W)("databricks.fe.jaws.enableApi22ForUseJobData",!1),V=()=>(0,n.ZW)()&&(0,a.W)("databricks.fe.jaws.enablePipelineTypeInUnifiedList",!1),j=()=>V(),z=()=>V(),J=()=>(0,n.ZW)()&&(0,a.W)("databricks.fe.jaws.enableSystemManagedJobsInUnifiedList",!1)&&(0,a.W)("databricks.elasticspark.lakeflow.returnSystemManagedResources",!1),q=()=>J()&&(0,a.W)("databricks.fe.jaws.enablePipelinesInSystemManagedTab",!1),G=()=>(0,a.W)("lakeflow_runs_list",!1)&&(0,a.W)("databricks.elasticspark.lakeflow.enableListLakeflowRunsApi",!1),H=()=>(0,a.W)("databricks.fe.jaws.showNameFilterForPipelinesInRunsList",!0),Q=()=>(0,a.W)("databricks.fe.jaws.enableTaskPaletteRecentsList",!0),K=()=>!!((0,a.W)("databricks.elasticspark.enableConfigurableTaskRetryInContinuousJobFlag",!1)&&(0,a.W)("databricks.fe.jaws.enableContinuousTriggerAdvanced",!1)),X=()=>(0,a.W)("databricks.fe.budget_policy.renameServerlessPolicy",!1),Z=()=>(0,a.W)("databricks.fe.budget_policy.enableUsagePolicyRunSidePanel",!1);function ee(){return(0,a.W)("databricks.fe.jaws.environments.enableJavaDependenciesFieldMigration",!1)}let et=()=>(0,a.W)("databricks.fe.jaws.showDockerImageInRunDetails",!0),er=()=>(0,a.W)("system_managed_job",!1)??!1;function ea(e){return er()&&(0,a.W)("databricks.fe.jaws.enableManagedByField",!1)&&e.managedBy===d.Kmw.SCHEDULED_MV_REFRESH}let en=()=>(0,a.W)("databricks.fe.data.tableRefreshScheduleNewUI",!1),ei=()=>(0,a.W)("databricks.fe.jaws.runsLists.useAssetPermissionLevel",!1)&&G(),eo=()=>(0,a.W)("databricks.fe.jaws.environments.enableJarDependenciesSharedComponent",!1),es=()=>(0,a.W)("databricks.fe.jaws.rateLimits.maxQueries",50),el=()=>(0,a.W)("databricks.fe.jaws.enableNewTimezoneExperience",!1),eu=()=>(0,a.W)("databricks.fe.jaws.enableJobClusterPolicyComplianceUI",!1),ec=()=>(0,a.W)("databricks.fe.jaws.enableRunTimings",!1),ed=()=>(0,a.W)("sql_cond_triggers",!1),ef=()=>(0,a.W)("databricks.fe.jaws.enableSafeParamRefParsing",!1),ep=()=>(0,a.W)("databricks.elasticspark.environments.allowJarTaskWithBaseEnvironment",!1),em=()=>(0,a.W)("databricks.fe.jaws.enableAiRuntimeRunsInJobsList",!1),eg=()=>G()&&(0,c.xh)()&&(0,a.W)("databricks.fe.jaws.enableViewAllRunsInLakeflowList",!1),eh=()=>(0,a.W)("databricks.fe.jaws.enableQueryHistoryLinkInSparkColumn",!1),eb=()=>(0,a.W)("databricks.fe.jaws.enablePipelineTaskPerformanceTarget",!1),ey=()=>(0,a.W)("databricks.fe.jaws.pipelineStopAwaitConfirmedStatus",!1)&&e_(),ev=()=>(0,a.W)("databricks.fe.jaws.enableAutopilotTab",!1),eE=()=>(0,a.W)("databricks.fe.jaws.enableAlwaysShowResolvedParams",!1),eI=()=>(0,a.W)("databricks.fe.jaws.enableWorkspaceObjectPathInfo",!1),eT=()=>(0,a.W)("databricks.fe.jaws.cloneJob.provideParentPath",!1),ew=()=>!!(0,a.W)("serverless_workload_observability",!1),eS=()=>ew()&&!!(0,s.ml)(l.p.EnableServerlessObservabilityToggle),ek=()=>((0,s.Fg)(l.p.EnableServerlessObservabilityToggle),eS()),eA=()=>(0,a.W)("databricks.fe.jaws.enableTopLevelTabsOnJobsPage",!1),e_=()=>(0,a.W)("databricks.fe.jaws.enablePipelineStopSpinOnConfirm",!1),eC=()=>(0,a.W)("databricks.fe.jaws.fixDisabledFilterLayoutShift",!1),eR=()=>G()&&eC()&&(0,a.W)("databricks.fe.jaws.enableRunIdFilterInRunsList",!1),eM=()=>(0,a.W)("databricks.fe.jaws.diagnoseErrorForAllTaskTypes",!1),eN=()=>(0,a.W)("databricks.fe.jaws.jobHealth.dqmEnablement",!1),eP=()=>(0,n.ZW)()&&(0,a.W)("databricks.lakeflow.enableJobHealthPrivatePreview",!1)&&(0,a.W)("databricks.fe.lakeflow.enableJobHealthInsights",!1),eD=()=>(0,a.W)("databricks.fe.jaws.enableSkipQueryUntilFiltersReady",!1)},931645:(e,t,r)=>{"use strict";r.d(t,{xP:()=>d,yo:()=>f});let a=()=>{},n=[],i=[],o=!1,s=a;function l(e){e.forEach(e=>{try{e.fn(),e.resolve()}catch(t){e.reject(t)}})}function u(){o=!1;let[e,t]=[n,i];n=[],i=[];let r=s;try{let r=performance.now();l(e),performance.measure("fastdom-measure",{start:r,end:performance.now(),detail:{tasks:e.length}}),r=performance.now(),l(t),performance.measure("fastdom-update",{start:r,end:performance.now(),detail:{tasks:t.length}})}finally{r()}}function c(e,t){let r,l=new Promise((n,i)=>{r={fn:e,resolve:n,reject:i},t.push(r),o||(o=!0,s=globalThis.__perfHooks?.rit?.blockActiveInteractions?.("wait-for-fastdom")??a,requestAnimationFrame(u))});return l.cancel=()=>{n=n.filter(e=>e!==r),i=i.filter(e=>e!==r)},l}function d(e){return c(e,n)}function f(e){return c(e,i)}},934858:(e,t,r)=>{"use strict";r.d(t,{$W:()=>f,Ow:()=>p,XP:()=>d,Xd:()=>g,Xh:()=>c,_d:()=>m,ep:()=>h});var a=r(610435);r(139259);var n=r(915862),i=r.n(n);r(692738);var o=r(26971),s=r(777517),l=r(465082),u=r(229386);function c(e){return e.reduce((e,t)=>{let r=(0,u.gX)(t)?{name:t.groupName,kind:"group"}:(0,u.A6)(t)?{name:t.servicePrincipalName,kind:"serviceprincipal",displayName:t.displayName}:{name:t.userName,kind:"user",displayName:t.displayName};return[...e,...t.allPermissions.map(e=>({subject:r,permission:e}))]},[])}function d(e,t){let r=[];return e.forEach(e=>{let a=(0,u.gX)(e)?{name:e.groupName,kind:"group"}:(0,u.A6)(e)?{name:e.servicePrincipalName,kind:"serviceprincipal",displayName:e.displayName}:{name:e.userName,kind:"user",displayName:e.displayName},n=[],i=[],o=new Map;if(t.forEach((e,t)=>{o.set(e.permissionLevel,t)}),e.allPermissions.forEach(e=>{e.inherited?i.push(e):n.push(e)}),n.length>0&&0===i.length)r.push({subject:a,permission:n[0]});else{let s=0,l=0,u=i.length>0&&0===n.length;e.allPermissions.forEach((e,t)=>{let r=o.get(e.permissionLevel);r>s&&(s=r,l=t)}),r.push({subject:a,permission:{permissionLevel:e.allPermissions[l].permissionLevel,inherited:u,inheritedFromObjects:[]},permissionLevels:t.slice(s)})}}),r}function f(e){let{permission:{permissionLevel:t},subject:{kind:r,name:a}}=e;switch(r){case"group":return{groupName:a,permissionLevel:t};case"user":return{userName:a,permissionLevel:t};case"serviceprincipal":return{servicePrincipalName:a,permissionLevel:t};default:throw Error(`Unknown subject kind ${r}`)}}function p(e,t){switch(e){case"CAN_ATTACH_TO":return t.formatMessage({id:"vjuZq/",defaultMessage:"Can Attach To"});case"CAN_CREATE_APP":return t.formatMessage({id:"TDBxFQ",defaultMessage:"Can Create App"});case"CAN_EDIT":return t.formatMessage({id:"Lg7PRA",defaultMessage:"Can Edit"});case"CAN_MANAGE":return t.formatMessage({id:"fFJrOa",defaultMessage:"Can Manage"});case"CAN_QUERY":return t.formatMessage({id:"fvsFnS",defaultMessage:"Can Query"});case"CAN_READ":return t.formatMessage({id:"zofAD/",defaultMessage:"Can Read"});case"CAN_RESTART":return t.formatMessage({id:"46XEms",defaultMessage:"Can Restart"});case"CAN_USE":return t.formatMessage({id:"2CuuGP",defaultMessage:"Can Use"});case"CAN_RUN":return t.formatMessage({id:"3gBDEy",defaultMessage:"Can Run"});case"IS_OWNER":return t.formatMessage({id:"DFsGfJ",defaultMessage:"Is Owner"});case"UNSPECIFIED":return"Unspecified";default:return i()(e.toLowerCase())}}function m(e){if("group"===e)return(0,a.Y)(o.A,{name:e});if("serviceprincipal"===e)return(0,a.Y)(s.A,{name:e});return(0,a.Y)(l.A,{name:e})}function g(e,t,r,a){if("group"===e){let e=t||r,n={accountUsers:a.formatMessage({id:"0pBn8k",defaultMessage:"All account users"}),allUsers:a.formatMessage({id:"VzinD6",defaultMessage:"All workspace users"})};if("users"===e||"all workspace users"===e)return[n.allUsers,""];if("account users"===e||"all account users"===e)return[n.accountUsers,""];return[e,""]}if(t&&r!==t)return[t,r??""];return[r??"",""]}function h(e,t){return e.name===t.name&&e.kind===t.kind}},936289:(e,t,r)=>{"use strict";r.d(t,{LE:()=>s,uE:()=>u,vB:()=>l});var a=r(299089),n=r.n(a),i=r(974657),o=r.n(i);let s=e=>o()(e,e=>e.landingTimestamp);function l(e){if(e.some(e=>"number"!=typeof e.userId||!Number.isFinite(e.userId)))return e;let t=o()(e,[e=>!e.commandGuid,e=>!e.hasFocus,e=>-e.timestamp]),r=new Map;for(let e of t)r.has(e.userId)||r.set(e.userId,e);return Array.from(r.values())}function u({model:e,attributes:t,store:r,setState:a}){let i=t.map(e=>`change:${String(e)}`).join(" "),o=e=>{let i=a(n()(e.attributes,t));r.setState(i)};return e.on(i,o),()=>{e.off(i,o)}}},937929:(e,t,r)=>{"use strict";r.d(t,{$B:()=>y,A2:()=>l,NC:()=>m,QN:()=>c,Rp:()=>u,V5:()=>g,Vp:()=>E,Zl:()=>p,af:()=>I,f2:()=>d,n3:()=>f,u7:()=>h});var a,n,i,o,s=r(5697),l=((a={}).CLIENT="client",a.BASE_ENVIRONMENT="baseEnvironment",a.DEPENDENCIES="dependencies",a.JAR_DEPENDENCIES="jarDependencies",a),u=((n={}).ENVIRONMENT_FORM="environmentForm",n.ENVIRONMENT_PANEL="environmentPanel",n),c=((i={}).PYTHON="PYTHON",i.JAR="JAR",i),d=((o={}).JOB="job",o.LAKEFLOW="lakeflow",o.NOTEBOOK="notebook",o.WORKSPACE_SETTINGS="workspaceSettings",o);let f="-r requirements.txt",p="com.databricks:spark-csv_2.10:1.0.0",m=e=>{switch(e){case"PYTHON":return"dependencies";case"JAR":return"jarDependencies"}},g=e=>{switch(e){case"PYTHON":return"simplejson==3.19.*";case"JAR":return"/Volumes/path/to/file.jar"}},h=e=>{switch(e){case"PYTHON":return[s.pt.whl,s.pt.txt,s.pt.requirementsTxt,s.pt.tar,s.pt.zip];case"JAR":return[s.pt.jar];default:return[]}},b={[s.pt.jar]:[".jar"],[s.pt.whl]:[".whl"],[s.pt.zip]:[".zip",".wheelhouse.zip"],[s.pt.tar]:[".tar",".tar.gz"],[s.pt.txt]:[".txt"],[s.pt.requirementsTxt]:[".txt"]},y=e=>h(e).flatMap(e=>b[e]??[]).map(e=>e.toLowerCase()),v={1:"1 - Python 3.10, Scala 2.12",2:"2 - Python 3.11, Scala 2.12",3:"3 - Python 3.12, Scala 2.12",4:"4 - Python 3.12, Scala 2.13",5:"5 - Python 3.12, Scala 2.13"},E=e=>{if(!(e in v))return e;return v[e]},I=e=>{if(!(e in v))return e;return E(e).split(" - ")[1]}},938668:(e,t,r)=>{"use strict";r.d(t,{D:()=>a});let a="testDetailsTarget"},939281:(e,t,r)=>{"use strict";r.d(t,{f:()=>i});var a=r(610435),n=r(497895);function i({width:e=32,height:t=40,fillOpacity:r=.08}){let{theme:o}=(0,n.wn)();return(0,a.FD)("svg",{width:e,height:t,viewBox:"0 0 150 150",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"upload file icon",children:[(0,a.Y)("path",{d:"M110 65L110 141C110 143.209 108.209 145 106 145L24 145C21.7909 145 20 143.209 20 141L20 29C20 26.7909 21.7909 25 24 25H70L110 65Z",fill:o.colors.grey300}),(0,a.Y)("path",{d:"M130 45L130 119C130 122.314 127.314 125 124 125H46C42.6863 125 40 122.314 40 119L40 11C40 7.68629 42.6863 5 46 5H90L130 45Z",fill:o.colors.grey100}),(0,a.Y)("path",{d:"M90 5L130 45H94C91.7909 45 90 43.2091 90 41L90 5Z",fill:o.colors.grey300}),(0,a.Y)("path",{d:"M83 70.8301L75.748 78.0811L72.9199 75.2529L85 63.1719L97.0811 75.2529L94.2529 78.0811L87 70.8281V90H83V70.8301Z",fill:o.colors.grey300}),(0,a.Y)("path",{d:"M66.333 96.667H103.666V100.667H66.333V96.667Z",fill:o.colors.grey300})]})}},940760:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("path",{fill:"currentColor",d:"M8.047 10.944 5.11 8l2.937-2.944-1.062-1.06L2.991 8l3.994 4.003z"}),(0,a.Y)("path",{fill:"currentColor",d:"M12.008 10.944 9.07 8l2.938-2.944-1.062-1.06L6.952 8l3.994 4.003z"})]})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="ChevronDoubleLeftIcon";let l=s},941687:(e,t,r)=>{"use strict";r.d(t,{B:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enableCancelRefreshOnWarehouseKillSwitch",!1)}},944660:(e,t,r)=>{"use strict";r.d(t,{U:()=>f,n:()=>p});var a=r(610435);r(692738);var n=r(497895),i=r(424489),o=r(585703),s=r(742557),l=r(68925),u=r(12414),c=r(21255),d=r(383429);let f=({status:e,interactive:t=!1,showStatus:r=!1,canRun:s=!1,showPending:l=!1,testTarget:u})=>{let{theme:c}=(0,n.wn)(),d=s?c.colors.actionPrimaryBackgroundDefault:c.colors.textSecondary,f=t=>{if(!u)return t;return(0,a.Y)("span",{"data-testid":`workspace-testing-test-icon-${u}`,"data-test-status":e??"not_run",children:t})};if(!r){if("running"===e)return f(h(t));return f(t?(0,a.Y)(i.A,{style:{color:d}}):null)}let p=t&&s;switch(e){case"passed":case"failed":case"skipped":{let t=m(e);return f(p?g(t,(0,a.Y)(i.A,{style:{color:d}})):t)}case"running":return f(h(t));default:if(t)return f(l&&r?g((0,a.Y)(o.A,{}),(0,a.Y)(i.A,{style:{color:d}})):(0,a.Y)(i.A,{style:{color:d}}));return f(r?(0,a.Y)(o.A,{}):null)}},p=({targetName:e,interactive:t=!1,showStatus:r=!1,canRun:n=!1,showOnlyLatestRunStatus:i=!1,showPending:o=!1})=>{let s=(0,d.D)(e,i);return(0,a.Y)(f,{status:s,interactive:t,showStatus:r,canRun:n,showPending:o,testTarget:e})},m=e=>{switch(e){case"passed":return(0,a.Y)(s.A,{color:"success"});case"failed":return(0,a.Y)(l.A,{color:"danger"});case"skipped":return(0,a.Y)(o.A,{color:"warning"});default:return(0,a.Y)(o.A,{})}},g=(e,t)=>(0,a.FD)("div",{css:{"&:hover .default-icon":{display:"none"},"&:hover .hover-icon":{display:"block"},"& .hover-icon":{display:"none"}},children:[(0,a.Y)("div",{className:"default-icon",children:e}),(0,a.Y)("div",{className:"hover-icon",children:t})]}),h=e=>{if(!e)return(0,a.Y)(u.y,{size:"small"});return g((0,a.Y)(u.y,{size:"small"}),(0,a.Y)(c.A,{color:"warning"}))}},945846:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var a=r(278983);let n=e=>(t,r)=>{try{e&&(0,a.y)("clientsideEvent",{eventType:"composeCatalogApiError",eventName:r,source:e},t.toString())}catch(e){}}},946114:(e,t,r)=>{"use strict";r.d(t,{Zx:()=>d,dl:()=>p,tp:()=>m});var a=r(452137),n=r.n(a),i=r(692738),o=r(595615),s=r(302118),l=r(641760),u=r(594390);function c(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}let d=(e,t,r=!0)=>["data_explorer_secrets",e,t,r];function f(){return(0,i.useCallback)(({catalog:e,schema:t,includeBrowse:r=!0})=>({queryKey:d(e??"",t??"",r),queryFn:()=>{var a;return(a=function*(){return n()(void 0!==e,"'catalog' must be set"),n()(void 0!==t,"'schema' must be set"),n()(s.k.isUnityCatalog(e)||(0,l.rA)(e),`'catalog' must represent a unity catalog, but it was '${e}'`),(yield s.k.getSecrets(e,t,r))??[]},function(){var e=this,t=arguments;return new Promise(function(r,n){var i=a.apply(e,t);function o(e){c(i,r,n,o,s,"next",e)}function s(e){c(i,r,n,o,s,"throw",e)}o(void 0)})})()}}),[])}function p(e,t){let r=f();return(0,o.AO)({...r(e),...t})}function m(e){let t=f();return(0,u.V)({queries:e.map(({args:e,options:r})=>({...r,...t(e)}))})}},946519:(e,t,r)=>{"use strict";r.d(t,{X:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enableDlmvCatalogPersistence",!0)}},956963:(e,t,r)=>{"use strict";r.d(t,{Y:()=>n});var a=r(141078);let n=(0,a.J1)`
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
`},958336:(e,t,r)=>{"use strict";if(r.d(t,{l:()=>i,v:()=>n}),13057==r.j)var a=r(706274);let n="/ml/review-v2/*",i=()=>(0,a.K)(n)},960369:(e,t,r)=>{"use strict";r.d(t,{FK:()=>S,Kt:()=>k,Mt:()=>A,pK:()=>w});var a,n=r(610435),i=r(692738),o=r(497895),s=r(372868),l=r(749935),u=r(566512),c=r(79128),d=r(79570),f=r(342411),p=r(141078),m=r(50470),g=r(540890),h=r(305939),b=r(929117),y=r(205048),v=r(524013),E=r(707076);function I(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function T(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){I(i,a,n,o,s,"next",e)}function s(e){I(i,a,n,o,s,"throw",e)}o(void 0)})}}let w="non-favorited-asset-indicator";var S=((a={}).UNKNOWN="unknown",a.METADATA_PREVIEW="metadata_preview",a);let k=({isFavorite:e=!0,grayscale:t=!1,title:r})=>{let{theme:a}=(0,o.wn)(),i=t?a.colors.textSecondary:e?a.colors.tagLemon:void 0;return(0,n.Y)("div",{css:{display:"flex",justifyContent:"center",alignItems:"center",color:i},children:e?(0,n.Y)(s.A,{title:r}):(0,n.Y)(l.A,{title:r})})},A=e=>{let{asset:t}=e;return(0,n.Y)(_,{...e},`${t.type}:${t.id}`)},_=({asset:e,disabled:t=!1,tooltipTitle:r,preloadedAssetFavoriteStatus:a,tooltipSide:o,tooltipAlign:s,size:l,source:I,onBeforeChange:S,onAfterChange:A,showLoadingIndicator:_=!1,showPlaceholder:R,overrideCreateFavoriteAsset:M,overrideDeleteFavoriteAsset:N,componentIdSource:P="unknown",grayscale:D})=>{let x=(0,f.tz)(),[L,O]=(0,u.o)(),F=(0,v.df)(),$=(0,E.MH)(),[Y,U]=(0,i.useState)(a);(0,i.useEffect)(()=>{U(a)},[a]);let{loading:B}=(0,p.IT)(m.h,{skip:void 0!==a||!e.id||!$,variables:e,fetchPolicy:"network-only",onCompleted:e=>U(e.userActivityInfo.isFavorite)}),W=(0,g.s)(),V=(0,h.V)(),[j,{loading:z}]=M??W,[J,{loading:q}]=N??V;if(!$)return null;if(B){let e=b.z.FAVORITE_ASSET_STATUS_LOADING;return R?(0,n.Y)(c.$n,{componentId:"favorite_asset_indicator_placeholder",icon:(0,n.Y)(k,{isFavorite:!1,grayscale:D}),size:l,"aria-label":x.formatMessage(C.loading),disabled:!0,loadingDescription:e,loading:!0}):(0,n.Y)(y.R,{loading:!0,description:e})}if(void 0===Y)return null;let G=_&&(z||q),H="unknown"===P?"codegen_web-shared_src_favorites_favoriteassetindicator.tsx_125":`favorite_asset_indicator.${P}`;return(0,n.FD)(n.FK,{children:[O,(0,n.Y)(d.m,{side:o,align:s,content:r??x.formatMessage(function(e,t){if(t)return e?C.removing:C.adding;return e?C.remove:C.add}(Y,G)),componentId:"favorite_asset_indicator_tooltip",children:(0,n.Y)(c.$n,{componentId:H,icon:(0,n.Y)(k,{isFavorite:Y,grayscale:D}),size:l,className:Y?"favorited-asset-indicator":w,onClick:()=>T(function*(){_||U(!Y),F("clientsideEvent",{eventType:"unifiedFavorites",eventName:`${Y?"remove":"add"}FavoriteAsset-${e.type}`,source:I});let t=yield T(function*(){try{yield S?.({isFavorite:Y});let t=Y?(yield J({variables:{input:{asset:e}}})).data?.useractivityDeleteFavoriteAsset:(yield j({variables:{input:{asset:e}}})).data?.useractivityCreateFavoriteAsset;return yield A?.(t?.apiError===null),t?.apiError===null}catch{return!1}})();_&&t&&U(!Y),t||(U(Y),L.error({message:x.formatMessage(C.updateError)}))})(),"aria-pressed":Y,"aria-label":x.formatMessage(C.favorite),"data-testid":`${e.type}-${e.id}-favorite-asset-indicator`,loading:G,disabled:t})})]})},C=(0,f.YK)({remove:{id:"yWsf3y",defaultMessage:"Remove from favorites"},add:{id:"ESErrJ",defaultMessage:"Add to favorites"},favorite:{id:"y/XUvZ",defaultMessage:"Favorite"},loading:{id:"15I9Og",defaultMessage:"Loading favorite"},removing:{id:"2g8hHR",defaultMessage:"Removing from favorites"},adding:{id:"dwaN1I",defaultMessage:"Adding to favorites"},updateError:{id:"bG1jLl",defaultMessage:"Failed to update favorites. Please try again."}})},961670:(e,t,r)=>{"use strict";r.d(t,{A:()=>S,i:()=>I});var a=r(610435),n=r(783772),i=r.n(n),o=r(916599),s=r.n(o),l=r(536717),u=r.n(l),c=r(958115),d=r.n(c),f=r(189219),p=r.n(f),m=r(232520),g=r.n(m),h=r(623576),b=r.n(h),y=r(692738),v=r(943844),E=r(955210);function I({isExpanded:e,onToggle:t,dataTestId:r}){return(0,a.Y)("span",{className:"jvi-toggle","data-testid":r,onClick:e=>{e.stopPropagation(),t()},children:e?(0,a.Y)(v.A,{}):(0,a.Y)(E.A,{})})}function T({value:e,children:t,openingBrace:r,closingBrace:n,withKeys:o,testIdSuffix:s,expandStateSessionStorageId:l,isOpenByDefault:u=!1}){let c=`isExpanded-${String(l)}`,[d,f]=(0,y.useState)(()=>{if(void 0===l)return u;return"true"===sessionStorage.getItem(c)}),p=g()(e),m=p.length;return(0,a.FD)(y.Fragment,{children:[m>0&&(0,a.Y)(I,{dataTestId:"jvi-toggle-"+s,isExpanded:d,onToggle:()=>{l&&sessionStorage.setItem(c,JSON.stringify(!d)),f(!d)}}),(0,a.Y)("span",{className:"jvi-punctuation jvi-braces",children:r}),!d&&m>0&&(0,a.Y)("span",{className:"jvi-punctuation jvi-ellipsis",onClick:e=>{e.stopPropagation(),l&&sessionStorage.setItem(c,"true"),f(!0)},children:"…"}),d&&(0,a.Y)("span",{className:"jvi-block",children:b()(p,(t,r)=>{let n=r===m-1,s=n?null:(0,a.Y)("span",{className:"jvi-punctuation jvi-comma",children:","});return(0,a.FD)("span",{className:i()("jvi-item",{"jvi-nested-first":0===r,"jvi-nested-last":n}),children:[o&&(0,a.Y)("span",{className:"jvi-object-key",children:(0,a.Y)(w,{value:t,expandStateSessionStorageId:l?l+"-"+t:void 0,isOpenByDefault:u,children:(0,a.Y)("span",{className:"jvi-punctuation",children:": "})})}),(0,a.Y)(w,{value:e[t],expandStateSessionStorageId:l?l+"-"+t:void 0,isOpenByDefault:u,children:s})]},"item-"+t)})}),(0,a.Y)("span",{className:"jvi-punctuation jvi-braces",children:n}),t,!d&&(0,a.Y)("span",{className:"jvi-comment",children:" // "+m+" "+(1===m?"item":"items")})]})}function w({value:e,children:t,testIdSuffix:r,expandStateSessionStorageId:n,isOpenByDefault:i}){if(null===e||!1===e||!0===e||s()(e))return(0,a.FD)("span",{className:"jvi-value jvi-primitive",children:[""+e,t]});if(u()(e))return(0,a.FD)(y.Fragment,{children:[(0,a.Y)("span",{className:"jvi-punctuation jvi-string",children:'"'}),(0,a.Y)("span",{className:"jvi-value jvi-string",children:e}),(0,a.Y)("span",{className:"jvi-punctuation jvi-string",children:'"'}),t]});if(d()(e))return(0,a.Y)(T,{value:e,openingBrace:"[",closingBrace:"]",testIdSuffix:r,expandStateSessionStorageId:n,isOpenByDefault:i,children:t});if(p()(e))return(0,a.Y)(T,{value:e,openingBrace:"{",closingBrace:"}",testIdSuffix:r,withKeys:!0,expandStateSessionStorageId:n,isOpenByDefault:i,children:t});return null}function S({value:e,testIdSuffix:t,expandStateSessionStorageId:r,isOpenByDefault:n}){return(0,a.Y)("span",{className:"jvi-item jvi-root",children:(0,a.Y)(w,{value:e,testIdSuffix:t,expandStateSessionStorageId:r,isOpenByDefault:n})})}S.defaultProps={value:void 0}},962411:(e,t,r)=>{"use strict";r.d(t,{R:()=>a});let a={dropzone:(0,r(956935).AH)("background-color:rgba(34,114,180,8%);border:dashed 4px #2272b4;border-radius:4px;height:calc(100% - 8px);left:0;position:absolute;top:0;width:calc(100% - 8px);z-index:10;")}},962926:(e,t,r)=>{"use strict";r.d(t,{a:()=>i});var a=r(993533),n=r(846665);function i(e){if(!e)return a.Pvb.CAN_VIEW;switch(e){case a.ytH.CAN_MANAGE:case a.ytH.CAN_MANAGE_RUN:return a.Pvb.CAN_MANAGE;case a.ytH.IS_OWNER:return a.Pvb.IS_OWNER;case a.ytH.CAN_VIEW:case a.ytH.PERMISSION_LEVEL_UNSPECIFIED:return a.Pvb.CAN_VIEW;default:throw(0,n.dr)(e,"Unknown permission level")}}},963681:(e,t,r)=>{"use strict";r.d(t,{o:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.ES.1755242.killswitch",!1)}},964942:(e,t,r)=>{"use strict";r.d(t,{Ku:()=>o,L3:()=>i});var a=r(141078);function n(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}let i=(0,a.J1)`
  query GetUcSecretsQuery($schemaFullName: String!, $maxResults: Int = 100, $pageToken: String)
  @component(name: "DBSQLX.FileBrowser") {
    unityCatalogSchemaNameReference(fullName: $schemaFullName) {
      schema {
        fullName
        secrets(maxResults: $maxResults, pageToken: $pageToken) {
          nodes {
            managedCatalogSecretInfo {
              name
              effectiveOwner
              securableKind
              securableType
              browseOnly
              id
              createTime
            }
          }
          nextPageToken
        }
      }
    }
  }
`;function o(e,t,r){var a;return(a=function*(e,t,{maxResults:r=100,pageToken:a,enabled:n=!0}={},o){if(!n)return null;let{data:s}=yield e.query({query:i,variables:{schemaFullName:t,maxResults:r,pageToken:a},fetchPolicy:o});return s.unityCatalogSchemaNameReference?.schema?.secrets??null},function(){var e=this,t=arguments;return new Promise(function(r,i){var o=a.apply(e,t);function s(e){n(o,r,i,s,l,"next",e)}function l(e){n(o,r,i,s,l,"throw",e)}s(void 0)})}).apply(this,arguments)}},967421:(e,t,r)=>{"use strict";r.d(t,{g:()=>c});var a=r(610435),n=r(692738),i=r(945854),o=r(962411),s=r(588949),l=r(967166),u=r(87221);let c=({componentId:e,children:t,location:r,onDrop:c,canDrop:d,noClick:f,noDrag:p,noKeyboard:m,accept:g,isFullPageStyle:h=!0,multiple:b=!0,enabled:y=!0,style:v={},overlayMode:E,tabIndex:I=0,alwaysRenderDropZoneElements:T=!1,enableFolderUploadViaBrowse:w=!1})=>{let S=(0,l.hG)(),k=(0,n.useCallback)((t,r)=>{(0,u.s_)(S,{eventType:"component_value_change",eventClientSource:"dropzone",eventEntity:{entityType:"component",entitySubType:"file_input",entityId:e},eventPayload:{interactionSubject:!0,valueBoolean:void 0,valueString:void 0,valueNumber:void 0,valueFiles:t}}),c(t,r)},[e,c,S]),[A,_]=(0,n.useState)(!1),C=(0,n.useCallback)(e=>{d?_(d(e.dataTransfer.files)):_(!0)},[d,_]),{getRootProps:R,getInputProps:M,isDragActive:N}=(0,i.V)({noClick:f,noDrag:p,noKeyboard:m,onDrop:k,onDragOver:C,accept:g,multiple:b}),P=E?{position:"relative",...v}:v;if(!y&&!T)return t;return(0,a.FD)("span",{...y?R({tabIndex:I}):{},"data-testid":`dropzone-${r}`,style:P,children:[y&&(0,a.Y)("input",{...M(),"data-testid":`dropzone-${r}-input`,"aria-disabled":!y,disabled:!y,...w?{webkitdirectory:""}:{}}),t,!E&&h&&N&&A&&y&&(0,a.Y)("div",{css:o.R.dropzone,"data-testid":`dropzone-${r}-drop-border`}),!h&&A&&N&&E&&y&&(0,a.Y)(s.I,{multiple:b})]})}},968683:(e,t,r)=>{"use strict";r.d(t,{Y:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.lakeview.enableDLMVPrefetchKillSwitch",!1)}},975971:(e,t,r)=>{"use strict";let a;r.d(t,{_T:()=>u,jw:()=>d,tx:()=>l,uD:()=>c});var n=r(262550);let i=!1,o="skipConfirmation";function s(){return a||(a=new n.A("notebookDefaultLanguage")),a}function l(){let e=s().get(o);return!i&&!e}function u(){s().set(o,!0)}function c(){i=!0}let d="mostRecentlySetLanguage"},977532:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{o:()=>s});var n=r(124235),i=r(83722),o=e([i]);function s(){let e=null;return{setup:({editorInstance:t})=>{let r,a=t._standaloneKeybindingService,o=(r=!(0,n.f8)(),(0,i.d)().flatMap(({command:e,keybindings:t,keybindingsOnWindows:a})=>(a&&r?a:t??[]).map(t=>({keybinding:t,command:"-"+e})))).filter(e=>(function(e,t){if(t?._dynamicKeybindings?.some?.(t=>t.command===e.command))return!1;return!0})(e,a));o.length>0&&(e=a.addDynamicKeybindings(o))},tearDown:()=>e?.dispose?.()}}i=(o.then?(await o)():o)[0],a()}catch(e){a(e)}})},981463:(e,t,r)=>{"use strict";r.d(t,{G:()=>d});var a=r(610435),n=r(956935),i=r(692738),o=r(497895);let s=(0,n.AH)("border-radius:4px;overflow:hidden;align-items:center;&:hover .actionButtonsContainer{display:flex;}.actionButtonsContainer{display:none;}"),l=(0,n.AH)("display:flex;justify-content:space-between;align-items:center;padding:8px;"),u=(0,n.AH)("padding:4px;border-radius:4px;"),c=(0,n.AH)("padding:8px;overflow-x:auto;"),d=({children:e,language:t="Text",leftActions:r,rightActions:n,hideLanguageLabel:d,handleOnLoad:f})=>{let{theme:p}=(0,o.wn)();(0,i.useEffect)(()=>{f?.(t)},[]);let m=!!(!d||r||n);return(0,a.FD)("div",{css:[s,{background:p.colors.typographyCodeBg}],"data-testid":"code-block",children:[m&&(0,a.FD)("div",{css:l,children:[(0,a.FD)("div",{css:{display:"flex",gap:4,alignItems:"center"},children:[!d&&(0,a.Y)("div",{css:[u,{background:p.colors.actionDefaultBackgroundHover}],children:t}),(0,a.Y)("div",{className:"actionButtonsContainer",children:r})]}),(0,a.Y)("div",{className:"actionButtonsContainer",children:n})]}),(0,a.Y)("div",{css:c,children:e})]})}},982188:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("path",{fill:"currentColor",d:"M7.25 0v2h1.5V0zM16 7.25h-2v1.5h2zM0 7.25h2v1.5H0zM13.127 1.813l-1.415 1.414 1.061 1.06 1.414-1.414zM2.874 1.813l1.414 1.414-1.06 1.06-1.415-1.414z"}),(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 8.221C3.25 5.61 5.382 3.5 8 3.5s4.75 2.109 4.75 4.721a4.7 4.7 0 0 1-.985 2.879c-.754.973-1.33 1.776-1.33 2.644v1.506a.75.75 0 0 1-.75.75h-3.37a.75.75 0 0 1-.75-.75v-1.506c0-.868-.576-1.67-1.33-2.644A4.7 4.7 0 0 1 3.25 8.22M8 5C6.2 5 4.75 6.447 4.75 8.221c0 .738.25 1.417.67 1.96l.044.056c.284.366.612.789.897 1.263h3.278c.285-.474.613-.897.897-1.263l.043-.056c.422-.543.671-1.222.671-1.96C11.25 6.447 9.8 5 8 5m-.934 8.744c0-.256-.03-.504-.081-.744h2.03q-.079.36-.08.744v.756h-1.87z",clipRule:"evenodd"})]})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="LightbulbIcon";let l=s},984519:(e,t,r)=>{"use strict";r.d(t,{c:()=>a});let a=(0,r(696514).fH)("Jaws::CloneJob")},984568:(e,t,r)=>{"use strict";r.d(t,{Ck:()=>W,Go:()=>ea,I2:()=>es,IB:()=>w,KW:()=>en,Ks:()=>Q,Mc:()=>et,Oj:()=>J,Pt:()=>K,S3:()=>er,UL:()=>f,VM:()=>y,Vw:()=>z,WQ:()=>p,XP:()=>ee,YC:()=>X,YR:()=>el,Yf:()=>eo,_M:()=>g,ax:()=>U,f5:()=>I,gv:()=>$,iD:()=>M,lu:()=>S,pM:()=>Z,q3:()=>j,tc:()=>C,uQ:()=>V,uv:()=>v,zQ:()=>H});var a=r(141078),n=r(202855),i=r(831358),o=r(287393),s=r(659789),l=r(367295),u=r(239362),c=r(543963),d=r(691515);let f=(0,a.J1)`
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
`,p=(0,a.J1)`
  fragment JobPeriodicTrigger on TriggerSettings {
    periodic @include(if: $includePeriodicTrigger) {
      interval
      unit
    }
  }
`,m=(0,a.J1)`
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
`,g=(0,a.J1)`
  fragment ClusterSize on ClusterSize {
    autoscale {
      minWorkers
      maxWorkers
    }
    numWorkers
  }
`,h=(0,a.J1)`
  fragment ClusterClusterSize on ClusterClusterSize {
    autoscale {
      minWorkers
      maxWorkers
    }
    numWorkers
  }
`,b=(0,a.J1)`
  fragment NewClusterDetails on NewCluster {
    attrs {
      ...ClusterAttributes
    }
    size {
      ...ClusterSize
    }
  }
  ${f}
  ${g}
`,y=(0,a.J1)`
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
  ${b}
`,v=(0,a.J1)`
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
`,E=(0,a.J1)`
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
`,I=(0,a.J1)`
  fragment JobsNewClusterDetails on JobsClusterSpecNewCluster {
    attrs {
      ...ClusterClusterAttributes
    }
    size {
      ...ClusterClusterSize
    }
  }
  ${m}
  ${h}
`,T=(0,a.J1)`
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
  ${E}
  ${I}
`,w=(0,a.J1)`
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
  ${n.m}
  ${s.M}
`,S=(0,a.J1)`
  fragment TaskDependency on TaskDependency {
    taskKey
    outcome @include(if: $includeTaskDependencyOutcome)
  }
`,k=(0,a.J1)`
  fragment RetryPolicy on JobRetryPolicy {
    maxRetries
    minRetryIntervalMillis
    retryOnTimeout
    disableAutoOptimization
  }
`,A=(0,a.J1)`
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
`,_=(0,a.J1)`
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
`,C=(0,a.J1)`
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
  ${f}
  ${g}
`,R=(0,a.J1)`
  fragment JobTagDetails on JobTag {
    key
    value
  }
`,M=(0,a.J1)`
  fragment JobsJobClusterDetails on JobsJobCluster {
    jobClusterKey
    newCluster {
      ...JobsNewClusterDetails
    }
  }
  ${I}
`,N=(0,a.J1)`
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
`,P=(0,a.J1)`
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
  ${N}
`,D=(0,a.J1)`
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
`,x=(0,a.J1)`
  fragment NotificationSettingsDetails on JobsNotificationSettings {
    alertOnLastAttempt
    noAlertForCanceledRuns
    noAlertForSkippedRuns
  }
`,L=(0,a.J1)`
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

  ${y}
  ${k}
  ${A}
  ${w}
  ${_}
  ${S}
  ${x}
  ${D}
`,O=(0,a.J1)`
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
`,F=(0,a.J1)`
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
`,$=(0,a.J1)`
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
  ${C}
  ${P}
  ${R}
  ${D}
  ${o.aZ}
  ${O}
  ${F}
`,Y=(0,a.J1)`
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

  ${w}
`,U=(0,a.J1)`
  fragment JobTriggerState on Job {
    triggerState @include(if: $includeTriggerState) {
      periodic {
        nextRunTime
      }
    }
  }
`,B=(0,a.J1)`
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
`,W=(0,a.J1)`
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

  ${$}
  ${o.fg}
  ${U}
  ${B}
`;function V(e){return{query:W,variables:{jobId:e,useApi21:!0,...(0,l.L)()}}}let j=(0,a.J1)`
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

  ${Y}
`,z=(0,a.J1)`
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

  ${Y}
  ${p}
`,J=(0,a.J1)`
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
`,q=(0,a.J1)`
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
`,G=(0,a.J1)`
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

  ${n.m}
  ${T}
`,H=(0,a.J1)`
  query JobsGetJobIdFromRun($input: JobsGetRunInput!) @component(name: "Workflows.Authoring.UI") {
    jobsGetRun: jobsGetRunWithApiVersion(input: $input, useApi21: true) {
      run {
        jobId
      }
    }
  }
`,Q=(0,a.J1)`
  query JobsGetRunBreadcrumb($jobId: ID!) @component(name: "Workflows.Observability.Graphs") {
    job(id: $jobId, useApi21: true) {
      settings {
        name
      }
    }
  }
`,K=(0,a.J1)`
  query JobSettingsMaxConcurrentRuns($jobId: ID!) @component(name: "Workflows.Observability.Graphs") {
    job(id: $jobId, useApi21: true) {
      settings {
        maxConcurrentRuns
      }
    }
  }
`,X=(0,a.J1)`
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

  ${n.m}
  ${T}
  ${M}
  ${u.Wg}
  ${u.yu}
  ${q}
  ${u.qk}
  ${c.WB}
  ${G}
  ${d.d}
  ${c.DP}
  ${F}
  ${u.Lw}
`,Z=(0,a.J1)`
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
`,ee=(0,a.J1)`
  query JobsGetPermissionLevel($input: JobsGetPermissionLevelInput!) @component(name: "Workflows.Orchestration.Other") {
    jobsGetPermissionLevel(input: $input) {
      perm
    }
  }
`,et=(0,a.J1)`
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
`,er=(0,a.J1)`
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
`,ea=(0,a.J1)`
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
`,en=(0,a.J1)`
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
`,ei=(0,a.J1)`
  fragment SqlWarehouseDetails on Lakehouse {
    id
    name
    state
    size
    enableServerlessCompute
    warehouseType
  }
`,eo=(0,a.J1)`
  query SqlWarehouseSelectGet($id: ID!) @component(name: "Workflows.Tasks.SQL") {
    lakehouse(id: $id) {
      ...SqlWarehouseDetails
    }
  }
  ${ei}
`,es=(0,a.J1)`
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
`,el=(0,a.J1)`
  query ClusterNameGet($id: String!) @component(name: "Workflows.Authoring.UI") {
    cluster(id: $id) {
      id
      attributes {
        name
      }
    }
  }
`},984655:(e,t,r)=>{"use strict";r.d(t,{U:()=>y,A:()=>E});var a,n=r(610435),i=r(692738),o=r(918526),s=r(726977),l=r(22191),u=r(863708),c=r(87221),d=r(876726),f=r(140078),p=r(342411);function m(){return(0,n.Y)(d.S,{image:(0,n.Y)(f.A,{}),title:(0,n.Y)(p.sA,{id:"LTfYt9",defaultMessage:"Something went wrong"}),description:(0,n.Y)(p.sA,{id:"+IPTlk",defaultMessage:"We couldn't load your data preview card. Please try again."})})}var g=r(5697),h=r(545626);let b=null;var y=((a={}).FILEBROWSER_TREE="filebrowser-tree",a.SCHEMA_BROWSER="schema-browser",a.WORKSPACE_TABLE="workspace-table",a.UC_ASSET_SELECTOR="uc-asset-selector",a.UNKNOWN="unknown",a);let v=i.lazy(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(62394),r.e(67590),r.e(6932),r.e(5033),r.e(92170),r.e(37797),r.e(44004),r.e(99918),r.e(3341),r.e(73208),r.e(49934),r.e(57958),r.e(35756),r.e(33872),r.e(59076),r.e(59347),r.e(39577)]).then(r.bind(r,152866));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(152866,"./UnifiedMetadataPreview","lazy",e);return e()})().then(e=>({default:e.UnifiedMetadataPreview}))),E=(0,i.memo)(function({metadataObject:e,dataSource:t,children:r,icon:a,setIsPreviewOpenCallback:d,sideOffset:f=0,isBrowseOnly:p=!1,showSampleDataPreview:y=!0,showTableSchema:E=!1,customTriggerStyle:I,surfaceArea:T="unknown"}){let[w,S]=(0,i.useState)(!1),[k,A]=(0,i.useState)(!1),_=(0,i.useRef)(null),C=(0,i.useRef)(!1),R=(0,i.useRef)(null),M=(0,c.ki)(),N=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=()=>{A(!0)},t=()=>{A(!1)};return document.addEventListener("dragstart",e,!0),document.addEventListener("dragend",t,!0),()=>{document.removeEventListener("dragstart",e,!0),document.removeEventListener("dragend",t,!0)}},[]),(0,i.useEffect)(()=>()=>{R.current?.()},[]);let P=w&&!k;(0,i.useEffect)(()=>{if(!P)return;return b&&b(!1),b=S,()=>{b===S&&(b=null)}},[P]),(0,i.useEffect)(()=>{P&&!N.current&&M({eventType:"component_view",eventEntity:{entityType:"component",entitySubType:"div",entityId:`metadata-preview.${T}.${e.objectType}`},eventPayload:{interactionSubject:!0}}),N.current=P},[P,M,T,e.objectType]);let D=(0,i.useCallback)(e=>{if(k)return;if(e&&!C.current&&!_.current?.contains(document.activeElement))return void R.current?.();R.current?.(),S(e),d&&d(e)},[d,k]);if((0,h.S0)(e)){let t=e.folderNode;if(t.attributes?.is_system_generated&&g.kb.includes(t.node_name??""))return(0,n.Y)(n.FK,{children:r})}return(0,n.Y)(o.j,{openDelay:700,open:P,onOpenChange:D,trigger:(0,n.Y)("div",{ref:_,style:I,onPointerEnter:()=>{R.current?.(),C.current=!0;let e=e=>{if(!_.current||!e.target)return;_.current.contains(e.target)||(C.current=!1,R.current?.())};document.addEventListener("pointermove",e,!0),R.current=()=>{document.removeEventListener("pointermove",e,!0),R.current=null}},onPointerLeave:()=>{C.current=!1,R.current?.()},children:r}),sideOffset:f,content:P&&(0,n.Y)("div",{onPointerLeave:()=>D(!1),onClick:e=>{e.stopPropagation(),e.preventDefault()},onContextMenu:e=>{e.preventDefault()},style:{display:"flex",flexWrap:"wrap",overflow:"hidden",width:400},children:(0,n.Y)(u.JR,{esComponent:l.Es.FileBrowser,errorBoundaryId:s.s.DataPreviewCard,fallback:(0,n.Y)(m,{}),children:(0,n.Y)(i.Suspense,{fallback:null,children:(0,n.Y)(v,{metadataObject:e,dataSource:t,icon:a,isBrowseOnly:p,showSampleDataPreview:y,showTableSchema:E})})})}),align:"start",side:"right"})})},987229:(e,t,r)=>{"use strict";r.d(t,{H5:()=>v,NQ:()=>I,Zh:()=>b,fd:()=>T,wG:()=>A,wg:()=>_});var a=r(46487),n=r.n(a),i=r(453471),o=r.n(i),s=r(692738),l=r(645787),u=r(686560),c=r(689017),d=r(886100),f=r(22191),p=r(711489),m=r(820894);function g(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}let h=n()({strict:!0,storeAsString:!0}),b=".dbsql-formatter-config.json",y=!1,v=()=>y,E=m.GZ,I=()=>o()(E),T=e=>{E={...E,...e}},w=["none","uppercase","lowercase"],S=e=>w.includes(e),k={printWidth:{typeValidation:e=>"number"==typeof e,valueValidation:e=>0<=e&&Number.isInteger(e)},indentationWidth:{typeValidation:e=>"number"==typeof e,valueValidation:e=>0<=e&&e<=99&&Number.isInteger(e)},indentationStyle:{typeValidation:e=>"spaces"===e||"tabs"===e,valueValidation:e=>"spaces"===e||"tabs"===e},numNewLinesBetweenClauses:{typeValidation:e=>"number"==typeof e,valueValidation:e=>0<=e&&e<=99&&Number.isInteger(e)},numNewLinesBetweenStatements:{typeValidation:e=>"number"==typeof e,valueValidation:e=>0<=e&&e<=99&&Number.isInteger(e)},commaPosition:{typeValidation:e=>"beginning"===e||"end"===e,valueValidation:e=>"beginning"===e||"end"===e},keywordCasing:{typeValidation:S,valueValidation:e=>["none","uppercase","lowercase"].includes(e)},identifierCasing:{typeValidation:S,valueValidation:e=>["none","uppercase","lowercase"].includes(e)},functionNameCasing:{typeValidation:S,valueValidation:e=>["none","uppercase","lowercase"].includes(e)},shouldExpandCommaLists:{typeValidation:e=>"boolean"==typeof e,valueValidation:e=>!0},shouldExpandExpressions:{typeValidation:e=>"boolean"==typeof e,valueValidation:e=>!0},shouldExpandCaseStatements:{typeValidation:e=>"boolean"==typeof e,valueValidation:e=>!0},shouldExpandInStatements:{typeValidation:e=>"boolean"==typeof e,valueValidation:e=>!0},shouldExpandBetweenConditions:{typeValidation:e=>"boolean"==typeof e,valueValidation:e=>!0},shouldBreakOnJoinSections:{typeValidation:e=>"boolean"==typeof e,valueValidation:e=>!0}},A=(e,t)=>{let r=k[e];return r.typeValidation(t)&&r.valueValidation(t)},_=({enabled:e=!0,memoizedCallback:t})=>{(0,s.useEffect)(()=>{var r,a;e&&(r=t??(()=>{}),(a=function*(){if(y)return;y=!0;try{let e=(0,u.d)("user_new",""),t=yield(0,l.qQ)(`/Users/${e}/${b}`);if(!t.httpError){let e=h.parse(t.data),r=(e=>{let t={};for(let r of Object.keys(k)){if(!(r in e))continue;let a=e[r];A(r,a)&&(t[r]=a)}return t})(e);E={...E,...r}}r()}catch(e){e instanceof SyntaxError?((0,c.wi)({editor_event_log:{new_sql_formatter_log:{event_name:p.J5.NewSqlFormatterEventName.NEW_SQL_FORMATTER_EVENT_NAME_INVALID_JSON}}}),d.iT.log(f.Es.Editor,"NewSqlFormatterInvalidJsonConfig",{error:e})):(0,c.wi)({editor_event_log:{new_sql_formatter_log:{event_name:p.J5.NewSqlFormatterEventName.NEW_SQL_FORMATTER_EVENT_NAME_ERROR_FETCHING_OPTIONS}}})}},function(){var e=this,t=arguments;return new Promise(function(r,n){var i=a.apply(e,t);function o(e){g(i,r,n,o,s,"next",e)}function s(e){g(i,r,n,o,s,"throw",e)}o(void 0)})})())},[t,e])}},989584:(e,t,r)=>{"use strict";r.d(t,{F$:()=>l,JI:()=>o,Kh:()=>i,cU:()=>s,wn:()=>n});var a=r(432993);function n(e){e.frontend_log_event_id??=a.n.generateUuidV4()}function i(e){return"protoLog"in e?e.protoLog.frontend_log_event_id:e.usageLog.eventId}function o(e){return Object.keys(e.entry??{})[0]}let s=e=>void 0!==e.entry,l=e=>{if(void 0!==e.entry)return Object.keys(e.entry).find(t=>e.entry&&void 0!==e.entry[t])||"unknown";return"unknown"}},990272:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M2 1.75A.75.75 0 0 1 2.75 1h10.5a.75.75 0 0 1 .75.75v7.465a5.75 5.75 0 0 1-2.723 4.889l-2.882 1.784a.75.75 0 0 1-.79 0l-2.882-1.784A5.75 5.75 0 0 1 2 9.214zm1.5.75V7h3.75V2.5zm5.25 0V7h3.75V2.5zm3.75 6H8.75v5.404l1.737-1.076A4.25 4.25 0 0 0 12.5 9.215zm-5.25 5.404V8.5H3.5v.715a4.25 4.25 0 0 0 2.013 3.613z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="ShieldIcon";let l=s},993075:(e,t,r)=>{"use strict";r.d(t,{N3:()=>w,ct:()=>v,fN:()=>m,gr:()=>I,ug:()=>b});var a,n,i=r(610435),o=r(692738),s=r(802582),l=r(79128),u=r(87221),c=r(509901),d=r(524013),f=r(217985),p=r(842082),m=((a={}).ADD_COLUMN_AS_DIMENSION="add-column-as-dimension",a.COPY_TO_CLIPBOARD="copy-to-clipboard",a.CREATE_SCHEMA="create-schema",a.CREATE_VOLUME="create-volume",a.CREATE_VOLUME_DIRECTORY="create-volume-directory",a.DELETE_VOLUME_DIRECTORY="delete-volume-directory",a.DELETE_VOLUME_FILE="delete-volume-file",a.DOWNLOAD_VOLUME_DIRECTORY="download-volume-directory",a.DOWNLOAD_VOLUME_FILE="download-volume-file",a.INSERT_OBJECT_NAME="insert-object-name",a.OPEN_IN_DATA_EXPLORER="open-in-data-explorer",a.PREVIEW_DATA="preview-data",a.PREVIEW_FILE="preview-file",a.PREVIEW_QUERY_IN_NEW_TAB="preview-query-in-new-tab",a.REPLACE_SOURCE_TABLE="replace-source-table",a.TOGGLE_FAVORITE_ASSET="toggle-favorite-asset",a.TOGGLE_FAVORITE_TABLE="toggle-favorite-table",a.UPLOAD_TO_VOLUME="upload-to-volume",a.VIEW_SAMPLE_DATA="view-sample-data",a);function g(e,t,r,a){e("clientsideEvent",{eventName:"schemaBrowserActionSelected",schemaBrowserActionIds:r,schemaBrowserObjectType:a}),t&&"function"==typeof t&&t({eventType:"component_click",eventEntity:{entityType:"component",entitySubType:"div",entityId:`web_shared.schema_browser.${r}`},eventPayload:{interactionSubject:!0},customContext:{changeType:a},customContextProto:{schema_browser_context:{change_type:a}}})}function h(e,t){return"function"==typeof e?e(t):e}var b=((n={})[n.Menu=0]="Menu",n[n.Toolbar=1]="Toolbar",n);function y({actionId:e,label:t,authzAction:r,disabledReasonLabel:a,onSelected:n,context:s,disabled:l}){let f=(0,d.df)(),m=(0,u.ki)(),b=(0,p.jt)(s.dataEntity),{data:v}=(0,c.ok)({key:[b,e],actions:r?{action:r(b)}:{}},{enabled:!!r}),E=(0,o.useCallback)(()=>{g(f,m,e,s.dataEntity.objectType),n?.(s)},[n,e,s,f,m]),I=v?.actions.action.authorized===!1||l;return(0,i.Y)(s.itemWrapperElement,{componentId:"codegen_web-shared_src_schema-browser_menu-actions_action.tsx_88",onSelect:E,disabled:I,disabledReason:I&&a,children:h(t,s)},e)}function v({actionId:e,shouldDisplayAction:t=()=>!0,...r}){return{render:a=>({actionId:e,element:t?.(a)?(0,i.Y)(y,{actionId:e,...r,context:a},e):null}),location:0,shouldDisplayAction:t}}function E({actionId:e,label:t,to:r,target:a,context:n}){let o=(0,d.df)(),s=(0,u.ki)();return(0,i.Y)(n.itemWrapperElement,{componentId:"codegen_web-shared_src_schema-browser_menu-actions_action.tsx_144",asChild:!0,onSelect:()=>g(o,s,e,n.dataEntity.objectType),children:(0,i.Y)(f.N,{componentId:"codegen_web-shared_src_schema-browser_menu-actions_action.tsx_136",to:h(r,n),target:a,asTypographyLink:!0,children:h(t,n)})},e)}function I({actionId:e,...t}){return{render:r=>({actionId:e,element:(0,i.Y)(E,{actionId:e,...t,context:r},e)}),location:0}}function T({actionId:e,icon:t,onSelected:r,tooltipContent:a,context:n}){let c=(0,d.df)(),f=(0,u.ki)(),p=(0,o.useCallback)(()=>{g(c,f,e,n.dataEntity.objectType),r?.(n)},[r,e,n,c,f]);return(0,i.Y)(s.p,{title:h(a,n),children:(0,i.Y)(l.$n,{componentId:"codegen_web-shared_src_schema-browser_menu-actions_action.tsx_175",size:"small","data-testid":`SchemaBrowserNodeToolbarAction-${e}`,onClick:p,icon:h(t,n)},e)})}function w({actionId:e,...t}){return{render:r=>({actionId:e,element:(0,i.Y)(T,{actionId:e,...t,context:r},e)}),location:1}}},993618:(e,t,r)=>{"use strict";r.d(t,{v:()=>n});var a=r(529129);function n(e){return e.glob?(0,a.e_)(e.glob)?.path??null:e.file?.path??e.notebook?.path??null}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/32815.b72fa7e2f0.chunk.js.map