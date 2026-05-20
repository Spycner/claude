(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[80702],{5616:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ExternalLocationsList:()=>G,RouteComponent:()=>F});var a=r(610435),n=r(692738),i=r(136012),o=r(43680),s=r(381817),l=r(802582),c=r(876726),d=r(342411),u=r(441535),p=r(686560),f=r(365532),g=r(29824),m=r(641760),h=r(929117),b=r(492814),v=r(818845),y=r(79128);function E(){let e=(0,d.tz)(),{showCreateLocation:t}=(0,b.E)(),{canCreateLocation:r}=(0,v.d)();if(r)return(0,a.Y)(a.FK,{children:(0,a.Y)(y.$n,{componentId:"codegen_redash_app_src_app_pages_data_externallocation_externallocationslist.tsx_150",type:"primary",onClick:function(){t()},children:e.formatMessage({id:"ewy1+4",defaultMessage:"Create external location"})})});return null}var I=r(720022),S=r(638600),T=r(497895),_=r(68925),A=r(382908),R=r(955210),C=r(943844),O=r(325056),w=r(293418),N=r(314775),x=r(84008),L=r(445929),M=r(160603),P=r(733337),k=r(147942),D=r(109581);let U=[{id:"name",accessorKey:"name",size:240,cell:function({row:e}){let{theme:t}=(0,T.wn)(),r="FAILED"===e.original.delegationState,n=e.original.awsConsoleUrl;return(0,a.FD)("div",{css:{display:"flex",alignItems:"center",gap:t.spacing.xs,minWidth:0},children:[r?(0,a.Y)(_.A,{color:"danger",css:{flexShrink:0}}):(0,a.Y)(f.B,{objectType:g.an.EXTERNAL_LOCATION}),n?(0,a.Y)(A.o.Link,{componentId:"pending-locations-table.name-link",href:n,openInNewTab:!0,css:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.original.name}):(0,a.Y)(A.o.Text,{ellipsis:!0,children:e.original.name})]})}},{id:"bucketPath",accessorKey:"bucketPath",size:560,cell:function({row:e}){return(0,a.Y)(A.o.Text,{color:"secondary",ellipsis:!0,css:{fontFamily:"monospace"},children:e.original.bucketPath})}}];function $(){let e,t=(0,d.tz)(),{theme:r}=(0,T.wn)(),{data:i,isLoading:o}=(0,M.useQuery)("list_iam_delegation_requests",()=>(0,P.nr)("/api/2.0/iam-delegation-requests"),{refetchInterval:15e3}),s=(e=(0,d.tz)(),(0,n.useMemo)(()=>({name:e.formatMessage({id:"yC4xjC",defaultMessage:"Name"}),bucketPath:e.formatMessage({id:"tUh+Cf",defaultMessage:"S3 bucket path"})}),[e])),[l,c]=(0,n.useState)(!1),u=(0,n.useMemo)(()=>{let e=i?.iam_delegation_requests;if(!e?.length)return[];return e.map(e=>{let t=(0,k.Vr)(e.caller_context);return{name:t.external_location_name??"-",bucketPath:t.bucket_path??"-",awsConsoleUrl:e.aws_console_url,delegationState:e.delegation_state,errorMessage:e.error_message}})},[i]),p=(0,n.useMemo)(()=>u.filter(e=>"FAILED"!==e.delegationState).length,[u]),f=(0,D.Lb)("webapp/web/js/dbsqlx/app/pages/data/ExternalLocation/PendingLocationsTable.tsx",{data:u,columns:U,getCoreRowModel:(0,I.HT)()});if(o||!u.length)return null;return(0,a.FD)("div",{css:{backgroundColor:r.colors.backgroundPrimary,border:`1px solid ${r.colors.border}`,borderRadius:r.borders.borderRadiusMd,marginBottom:r.spacing.lg,overflow:"hidden"},children:[(0,a.FD)("div",{role:"button",tabIndex:0,onClick:()=>c(e=>!e),onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),c(e=>!e))},css:{display:"flex",alignItems:"center",gap:r.spacing.sm,padding:r.spacing.md,cursor:"pointer",userSelect:"none"},children:[(0,a.Y)(y.$n,{componentId:"pending-locations-table.collapse-toggle",size:"small",icon:l?(0,a.Y)(R.A,{}):(0,a.Y)(C.A,{}),"aria-label":l?t.formatMessage({id:"f38zd+",defaultMessage:"Expand pending locations"}):t.formatMessage({id:"IWyy2p",defaultMessage:"Collapse pending locations"}),onClick:e=>{e.stopPropagation(),c(e=>!e)}}),(0,a.Y)(A.o.Title,{level:4,withoutMargins:!0,children:t.formatMessage({id:"5+ZVfq",defaultMessage:"Pending Locations ({count})"},{count:p})})]}),!l&&(0,a.FD)(a.FK,{children:[(0,a.FD)(O.X,{css:{".table-isHeader > *":{backgroundColor:r.colors.backgroundSecondary},".table-header-text":{textTransform:"uppercase",letterSpacing:"0.04em",fontSize:r.typography.fontSizeSm,color:r.colors.textSecondary}},children:[f.getHeaderGroups().map(e=>(0,a.Y)(w.H,{isHeader:!0,children:e.headers.map(e=>(0,a.Y)(N.A,{componentId:"pending_locations_table-header",header:e,column:e.column,setColumnSizing:f.setColumnSizing,style:{flex:e.column.getSize()/100},children:s[e.column.id]},e.id))},e.id)),f.getRowModel().rows.map(e=>{let t="FAILED"===e.original.delegationState&&!!e.original.errorMessage;return(0,a.FD)(n.Fragment,{children:[(0,a.Y)(w.H,{css:t?{"> *":{borderBottom:"none"}}:void 0,children:e.getAllCells().map(e=>(0,a.Y)(x.n,{wrapContent:!1,style:{flex:e.column.getSize()/100},children:(0,S.Kv)(e.column.columnDef.cell,e.getContext())},e.id))}),t&&(0,a.Y)("div",{css:{paddingLeft:r.spacing.sm,paddingRight:r.spacing.sm,paddingBottom:r.spacing.xs,borderBottom:`1px solid ${r.colors.border}`},children:(0,a.FD)("div",{css:{display:"flex",alignItems:"flex-start",gap:r.spacing.xs,backgroundColor:r.colors.backgroundDanger,border:`1px solid ${r.colors.borderDanger}`,borderRadius:r.borders.borderRadiusSm,padding:`${r.spacing.xs}px ${r.spacing.sm}px`},children:[(0,a.Y)(L.A,{color:"danger",css:{flexShrink:0,marginTop:2}}),(0,a.Y)(A.o.Text,{color:"error",size:"sm",children:e.original.errorMessage})]})})]},e.id)})]}),(0,a.Y)("div",{css:{padding:`${r.spacing.xs}px ${r.spacing.md}px`,borderTop:`1px solid ${r.colors.border}`},children:(0,a.Y)(A.o.Text,{color:"secondary",size:"sm",children:t.formatMessage({id:"dccrvc",defaultMessage:"Showing at most 50 pending locations."})})})]})]})}var Y=r(888565),H=r(427221);function G(){let e=(0,d.tz)(),t=(0,i.QQ)(),r=(0,o.vM)({onSuccess(e){e.external_locations&&t("external_location_list_fetched_count",{entityCount:e.external_locations.length})}},!0),b=[{id:"name",header:e.formatMessage({id:"bSQgbj",defaultMessage:"Name"}),accessorKey:"name",sortingFn:"basic",cell:({row:e})=>(0,a.Y)(H.u,{entityName:e.original.name,icon:(0,a.Y)(f.B,{objectType:g.an.EXTERNAL_LOCATION,browseOnly:e.original.browse_only,accessible:e.original.accessible_in_current_workspace,withTooltip:!0}),componentId:"external_location_list",url:`/explore/locations/${encodeURIComponent(e.original.name)}`}),minSize:50,size:350},{id:"credential_name",header:e.formatMessage({id:"hQPcw/",defaultMessage:"Credential"}),accessorKey:"credential_name",sortingFn:"basic",cell:({row:e})=>(0,a.Y)(l.p,{title:e.original.credential_name,children:e.original.credential_name}),minSize:100,size:200},{id:"url",header:e.formatMessage({id:"iOm5jJ",defaultMessage:"URL"}),accessorKey:"url",sortingFn:"basic",cell:({row:t})=>(0,m.xg)(t.original)?e.formatMessage(s.OT):(0,a.Y)(l.p,{title:t.original.url,children:t.original.url}),minSize:100,size:600},{id:"owner",header:e.formatMessage({id:"ot0m5k",defaultMessage:"Owner"}),accessorKey:"owner",sortingFn:"basic",minSize:50,size:450},{id:"comment",header:e.formatMessage({id:"sFLEqN",defaultMessage:"Comment"}),accessorKey:"comment",sortingFn:"basic",cell:({row:e})=>(0,a.Y)(l.p,{title:e.original.comment,children:e.original.comment}),minSize:100,size:200}];(0,n.useEffect)(()=>{t("visit_external_location_list")},[t]);let v=(0,a.Y)(c.S,{title:e.formatMessage({id:"J8kqba",defaultMessage:"No external locations yet"}),description:e.formatMessage({id:"xj6Mbr",defaultMessage:"Start sharing and collaborating on data by creating an external location"})}),y=(0,u.W)("databricks.fe.uc.enableIamDelegationExternalLocation",!1),I=(0,p.d)("cloud","AWS");return(0,a.FD)(a.FK,{children:[y&&"AWS"===I&&(0,a.Y)($,{}),(0,a.Y)(Y.e$,{entityRequest:r,data:r.data?.external_locations,errorMessage:e.formatMessage({id:"+jS8S3",defaultMessage:"Error getting locations"}),filterInputPlaceholder:e.formatMessage({id:"fNAKTR",defaultMessage:"Filter locations"}),entityCountMessage:t=>e.formatMessage({id:"8wg3g1",defaultMessage:"{count} {count, plural, one {location} other {locations} }"},{count:t}),filterActions:[(0,a.Y)(E,{},"create-btn")],loadingDescription:h.z.EXTERNAL_LOCATIONS_LIST,emptyComponent:v,columns:b,enableColumnResizing:!0,dataExplorerTrackingObject:"external_location"})]})}function F(){return(0,a.Y)(G,{})}},7319:(e,t,r)=>{"use strict";r.d(t,{_:()=>o,h:()=>i});var a=r(692738),n=r(879612);function i(e){if(!e)return!1;return"CONNECTION_HTTP_OAUTH_U2M_MAPPING"===e||"CONNECTION_HTTP_DCR"===e||"CONNECTION_SLACK_OAUTH_U2M_MAPPING"===e}function o(e){let t=(0,n.x5)({isUcEnabled:!0});return(0,a.useMemo)(()=>{if(!e)return!1;if(t.data?.kinds){let r=t.data.kinds.find(t=>t.securable_kind===e);return r?.capabilities?.includes("HAS_GENERIC_ACCESS_TOKEN_FLOW")??!1}return i(e)},[e,t.data])}},21255:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M5.5 6a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="StopCircleIcon";let l=s},26446:(e,t,r)=>{"use strict";r.d(t,{HT:()=>d,M8:()=>u,Pf:()=>s,bp:()=>l,gb:()=>a,iN:()=>c,pP:()=>n,xB:()=>p});let a=1e3,n={enableAccountGroups:!1,enableAccountServicePrincipals:!1,enableAccountUsers:!1,enableWorkspaceGroups:!1,enableWorkspaceServicePrincipals:!1,enableWorkspaceUsers:!1},i=/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,o={admins:"Admins",users:"All workspace users","account users":"All account users"},s=e=>{if(!e)return e;return o[e]??e},l=e=>{let t=new Map;return e.forEach(e=>{let r=d(e)||e.name;t.has(r)||t.set(r,[]),t.get(r)?.push(e)}),t},c=e=>{switch(e.kind){case"user":return e.fullName;case"serviceprincipal":return e.name;case"group":return e.displayName;default:return""}},d=e=>{switch(e.kind){case"user":case"group":return e.name||"";case"serviceprincipal":return e.applicationId||"";default:return""}},u=({uniqueName:e,id:t,kind:r,displayName:a})=>{switch(r){case"user":return{id:t||"",optionId:`user.${t}`,kind:r,name:e||"",fullName:a||"",title:""};case"serviceprincipal":return{id:t||"",optionId:`serviceprincipal.${t}`,kind:r,name:a||"",applicationId:e||"",title:""};case"group":return{id:t||"",optionId:`group.${t}`,kind:r,name:e||"",displayName:s(e||""),title:""};default:return}};function p(e){return e?i.test(e)?"serviceprincipal":"user":void 0}},39566:(e,t,r)=>{"use strict";r.d(t,{B8:()=>c,DI:()=>l,RX:()=>u,TW:()=>p,Wd:()=>s,od:()=>d});var a,n,i,o,s=((a={}).SAAS="saas",a.DB="db",a.BRICKSTORE="brickstore",a.COMMUNITY="community",a.FOREIGN_CATALOG="foreign_catalog",a.FILESYSTEM="filesystem",a),l=((n={}).QUERY="query",n.CDC="cdc",n);let c={MYSQL:"MYSQL",POSTGRESQL:"POSTGRESQL",SQLSERVER:"SQLSERVER",SALESFORCE:"SALESFORCE",WORKDAY_RAAS:"WORKDAY_RAAS",GA4_RAW_DATA:"GA4_RAW_DATA",SERVICENOW:"SERVICENOW",MANAGED_POSTGRESQL:"MANAGED_POSTGRESQL",ORACLE:"ORACLE",SHAREPOINT:"SHAREPOINT",DYNAMICS365:"DYNAMICS365",TERADATA:"TERADATA",NETSUITE:"NETSUITE",GENERIC_LAKEFLOW_CONNECT:"GENERIC_LAKEFLOW_CONNECT",JIRA:"JIRA",CONFLUENCE:"CONFLUENCE",GOOGLE_ADS:"GOOGLE_ADS",ZENDESK:"ZENDESK",HUBSPOT:"HUBSPOT",SALESFORCE_MARKETING_CLOUD:"SALESFORCE_MARKETING_CLOUD",META_MARKETING:"META_MARKETING",OUTLOOK:"OUTLOOK",JDBC:"JDBC",FOREIGN_CATALOG:"FOREIGN_CATALOG",REDSHIFT:"REDSHIFT",SNOWFLAKE:"SNOWFLAKE",SYNAPSE:"SYNAPSE",BIGQUERY:"BIGQUERY",TIKTOK_ADS:"TIKTOK_ADS",WORKDAY_HCM:"WORKDAY_HCM",GITHUB:"GITHUB",SMARTSHEET:"SMARTSHEET",VEEVA_VAULT:"VEEVA_VAULT"},d={MYSQL:"MYSQL",POSTGRESQL:"POSTGRESQL",SQLSERVER:"SQLSERVER",SALESFORCE:"SALESFORCE",WORKDAY_RAAS:"WORKDAY_RAAS",GA4_RAW_DATA:"GA4_RAW_DATA",SERVICENOW:"SERVICENOW",MANAGED_POSTGRESQL:"MANAGED_POSTGRESQL",ORACLE:"ORACLE",SHAREPOINT:"SHAREPOINT",DYNAMICS365:"DYNAMICS365",TERADATA:"TERADATA",NETSUITE:"NETSUITE",GENERIC_LAKEFLOW_CONNECT:"GENERIC_LAKEFLOW_CONNECT",JIRA:"JIRA",CONFLUENCE:"CONFLUENCE",GOOGLE_ADS:"GOOGLE_ADS",ZENDESK:"ZENDESK",HUBSPOT:"HUBSPOT",SALESFORCE_MARKETING_CLOUD:"SALESFORCE_MARKETING_CLOUD",WORKDAY_HCM:"WORKDAY_HCM",META_MARKETING:"META_MARKETING",OUTLOOK:"OUTLOOK",JDBC:"JDBC",FOREIGN_CATALOG:"FOREIGN_CATALOG",REDSHIFT:"REDSHIFT",SNOWFLAKE:"SNOWFLAKE",SYNAPSE:"SYNAPSE",BIGQUERY:"BIGQUERY",TIKTOK_ADS:"TIKTOK_ADS",GITHUB:"GITHUB",SMARTSHEET:"SMARTSHEET",VEEVA_VAULT:"VEEVA_VAULT",ZENDESK_COMMUNITY:"ZENDESK_COMMUNITY",GITHUB_COMMUNITY:"GITHUB_COMMUNITY",STRIPE_COMMUNITY:"STRIPE_COMMUNITY",HUBSPOT_COMMUNITY:"HUBSPOT_COMMUNITY",ZOHO_CRM_COMMUNITY:"ZOHO_CRM_COMMUNITY"};var u=((i={}).CONNECTION="connection",i.PIPELINE="pipeline",i.GATEWAY="gateway",i.VALIDATION="validation",i.SOURCE="source",i.DESTINATION="destination",i.SCHEDULE="schedule",i.BRICKSTORE_SOURCE="brickstore_source",i.DESTINATION_WITH_PIPELINE="destination_with_pipeline",i.PIPELINE_CONFIGURATION="pipeline_configuration",i.REPORT="report",i.DATABASE_SETUP="database_setup",i.COMMUNITY_CONFIG="community_config",i.FOREIGN_CATALOG_SOURCE="foreign_catalog_source",i),p=((o={}).PREVIEW="preview",o.COMMUNITY="community",o.NOTEBOOK="notebook",o.MANAGED_INGESTION="mi",o)},40938:(e,t,r)=>{"use strict";r.d(t,{Y:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.tagpolicy.enableV2TagPolicyAPIs",!1)}},55079:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",d:"M12.5 8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CircleIcon";let l=s},68925:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("path",{fill:"currentColor",d:"M6.94 8 4.97 6.03l1.06-1.06L8 6.94l1.97-1.97 1.06 1.06L9.06 8l1.97 1.97-1.06 1.06L8 9.06l-1.97 1.97-1.06-1.06z"}),(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13",clipRule:"evenodd"})]})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="XCircleIcon";let l=s},74348:(e,t,r)=>{"use strict";r.d(t,{h:()=>y});var a=r(610435),n=r(692738),i=r(441535),o=r(140718),s=r(342411),l=r(125230),c=r(350318);let d=({value:e,onChange:t,error:r,...n})=>{let i=(0,s.tz)(),d=(0,c.ce)(),{data:u,isLoading:p}=(0,l.Nx)({enabled:d,pageSize:l.Ml});return(0,a.Y)(o.XA,{allowClear:!0,width:"100%",value:e,onChange:e=>t(e.target.value),label:i.formatMessage({id:"Dh2KGp",defaultMessage:"Project"}),placeholder:i.formatMessage({id:"aerQeA",defaultMessage:"Select project"}),contentProps:{matchTriggerWidth:!0,loading:d&&p},validationState:r?"error":void 0,...n,children:u?.map(e=>(0,a.Y)(o.wS,{value:e.id,children:(0,a.Y)("span",{children:e.name})},e.id))})};var u=r(466213),p=r(497895),f=r(996648),g=r(927802),m=r(684944),h=r(461815),b=r(768622);let v=({id:e,onChange:t,error:r})=>{let i=(0,s.tz)(),{theme:o}=(0,p.wn)(),[d,v]=(0,u.d7)("",300),y=(0,c.ce)(),{data:E,isLoading:I}=(0,l.Nx)({enabled:y,pageSize:l.Ml,filter:d}),S=(0,n.useCallback)(e=>{t(e?.id)},[t]),T=(0,f.SY)({componentId:"web-shared.brickstore.DatabaseProjectSelectV2",allItems:E??[],items:E??[],setItems:()=>{},itemToString:e=>e?.name??"",formOnChange:S});(0,n.useEffect)(()=>{v(T.inputValue.trim())},[v,T.inputValue]);let _={"&.error":{borderColor:`${o.colors.red500} !important`}};return(0,a.FD)(g.h,{id:e,multiSelect:!1,comboboxState:T,children:[(0,a.Y)(m.$,{formOnChange:S,placeholder:i.formatMessage({id:"aerQeA",defaultMessage:"Select project"}),className:r?"error":"",dangerouslyAppendEmotionCSS:_,comboboxState:T}),(0,a.Y)(h.i,{width:300,loading:y&&I,comboboxState:T,children:E?.map((e,t)=>(0,a.Y)(b.bb,{item:e,index:t,comboboxState:T,children:e.name},`project-${e.id}`))})]})},y=e=>{let t=(0,n.useMemo)(()=>(0,i.W)("databricks.fe.lakebase.useDatabaseProjectSelectV2",!1)?v:d,[]);return(0,a.Y)(t,{...e})}},75036:(e,t,r)=>{"use strict";r.d(t,{e:()=>o,s:()=>i});var a,n=r(696514),i=((a={}).DONE="done",a.CANCELED="canceled",a);let o=(0,n.fH)("Filebrowser::SelectFolderNode")},84008:(e,t,r)=>{"use strict";r.d(t,{n:()=>p});var a=r(610435),n=r(956935),i=r(783772),o=r.n(i),s=r(692738),l=r(325056),c=r(114826),d=r(497895),u=r(382908);let p=(0,s.forwardRef)(function({children:e,className:t,ellipsis:r=!1,multiline:i=!1,align:p="left",style:f,wrapContent:g=!0,...m},h){let{size:b,grid:v}=(0,s.useContext)(l.G),{classNamePrefix:y}=(0,d.wn)(),E=(0,n.AH)({[`& > .${y}-typography > a.${y}-typography-ellipsis`]:{display:"block"}}),I="md";"small"===b&&(I="sm");let S=!0===g?(0,a.Y)(u.o.Text,{ellipsis:!i,size:I,title:!i&&"string"==typeof e&&e||void 0,css:{"&:has(> button)":{overflow:"visible"}},children:e}):e;return(0,a.Y)("div",{...m,role:"cell",style:{textAlign:p,...f},ref:h,css:[v?void 0:c.PV.cell,E],className:o()(v&&c.lH.cell,t),children:S})})},114826:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>g,M0:()=>f,PV:()=>d,TJ:()=>u,lH:()=>c,yA:()=>p});var a=r(956935),n=r(469723),i=r.n(n),o=r(322560),s=r.n(o);function l(){return s()(20,()=>i()(35).toString(36)).join("")}let c={cell:`js--ds-table-cell-${l()}`,header:`js--ds-table-header-${l()}`,row:`js--ds-table-row-${l()}`},d={cell:(0,a.AH)({display:"inline-grid",position:"relative",flex:1,boxSizing:"border-box",paddingLeft:"var(--table-spacing-sm)",paddingRight:"var(--table-spacing-sm)",wordBreak:"break-word",overflow:"hidden","& .anticon":{verticalAlign:"text-bottom"}}),header:(0,a.AH)({fontWeight:"bold",alignItems:"flex-end",display:"flex",overflow:"hidden","&[aria-sort]":{cursor:"pointer",userSelect:"none"},".table-header-text":{color:"var(--table-header-text-color)"},".table-header-icon-container":{color:"var(--table-header-sort-icon-color)",display:"none"},"&[aria-sort]:hover":{".table-header-icon-container, .table-header-text":{color:"var(--table-header-focus-color)"}},"&[aria-sort]:active":{".table-header-icon-container, .table-header-text":{color:"var(--table-header-active-color)"}},'&:hover, &[aria-sort="ascending"], &[aria-sort="descending"]':{".table-header-icon-container":{display:"inline"}}}),row:(0,a.AH)({display:"flex","&.table-isHeader":{"> *":{backgroundColor:"var(--table-header-background-color)"},".table-isScrollable &":{position:"sticky",top:0,zIndex:1}},'.table-row-select-cell input[type="checkbox"] ~ *':{opacity:"var(--row-checkbox-opacity, 0)"},"&:not(.table-row-isGrid)&:hover":{"&:not(.table-isHeader)":{backgroundColor:"var(--table-row-hover)"},'.table-row-select-cell input[type="checkbox"] ~ *':{opacity:1}},'.table-row-select-cell input[type="checkbox"]:focus ~ *':{opacity:1},"> *":{paddingTop:"var(--table-row-vertical-padding)",paddingBottom:"var(--table-row-vertical-padding)",borderBottom:"1px solid",borderColor:"var(--table-separator-color)"},"&.table-row-isGrid > *":{borderRight:"1px solid",borderColor:"var(--table-separator-color)"},"&.table-row-isGrid > :first-of-type":{borderLeft:"1px solid",borderColor:"var(--table-separator-color)"},"&.table-row-isGrid.table-isHeader:first-of-type > *":{borderTop:"1px solid",borderColor:"var(--table-separator-color)"}})},u=`hide-icon-button-${l()}`,p=`skip-hide-icon-button-${l()}`,f=(0,a.AH)({[`.${u} button.${p}`]:{opacity:"1 !important",transition:"opacity 0.1s ease !important"},[`.${u} button:has(> span.anticon[role="img"]:only-child),
    .${u} button:has(> i.fa:only-child),
    .${u} a:has(> span.anticon[role="img"]:only-child),
    .${u} a:has(> i.fa:only-child)`]:{opacity:0,transition:"opacity 0.1s ease !important"},[`.${u} button:focus-visible:has(> span.anticon[role="img"]:only-child),
    .${u} button:focus-visible:has(> i.fa:only-child),
    .${u} a:focus-visible:has(> span.anticon[role="img"]:only-child),
    .${u} a:focus-visible:has(> i.fa:only-child)`]:{outlineStyle:"solid !important"},[`&:hover .${u} button:has(> span.anticon[role="img"]:only-child),
    .${u} button:focus-visible:has(> span.anticon[role="img"]:only-child),
    &:hover .${u} button:has(> i.fa:only-child),
    .${u} button:focus-visible:has(> i.fa:only-child),
    &:hover .${u} a:has(> span.anticon[role="img"]:only-child),
    .${u} a:focus-visible:has(> span.anticon[role="img"]:only-child),
    &:hover .${u} a:has(> i.fa:only-child),
    .${u} a:focus-visible:has(> i.fa:only-child)
    .${u} div[aria-expanded="true"] > button:has(span.anticon[role="img"]:only-child),
    .${u} div[aria-expanded="true"] > button:has(i.fa:only-child),
    .${u} button[aria-expanded="true"]:has(span.anticon[role="img"]:only-child),
    .${u} button[aria-expanded="true"]:has(i.fa:only-child),`]:{opacity:1}}),g={tableWrapper:(0,a.AH)({"&.table-isScrollable":{overflow:"auto"},display:"flex",flexDirection:"column",height:"100%",[`.${c.cell}`]:d.cell,[`.${c.header}`]:d.header,[`.${c.row}`]:d.row}),table:(0,a.AH)({".table-isScrollable &":{overflow:"auto"}}),headerButtonTarget:(0,a.AH)({alignItems:"flex-end",display:"flex",overflow:"hidden",width:"100%",justifyContent:"inherit","&:focus":{".table-header-text":{color:"var(--table-header-focus-color)"},".table-header-icon-container":{color:"var(--table-header-focus-color)",display:"inline"}},"&:active":{".table-header-icon-container, .table-header-text":{color:"var(--table-header-active-color)"}}}),sortHeaderIconOnRight:(0,a.AH)({marginLeft:"var(--table-spacing-xs)"}),sortHeaderIconOnLeft:(0,a.AH)({marginRight:"var(--table-spacing-xs)"}),checkboxCell:(0,a.AH)({display:"flex",alignItems:"center",flex:0,paddingLeft:"var(--table-spacing-sm)",paddingTop:0,paddingBottom:0,minWidth:"var(--table-spacing-md)",maxWidth:"var(--table-spacing-md)",boxSizing:"content-box !important",overflow:"hidden"}),resizeHandleContainer:(0,a.AH)({position:"absolute",right:-3,top:"var(--table-spacing-sm)",bottom:"var(--table-spacing-sm)",width:"var(--table-spacing-sm)",display:"flex",justifyContent:"center",cursor:"col-resize",userSelect:"none",touchAction:"none",zIndex:1}),resizeHandle:(0,a.AH)({width:1,background:"var(--table-resize-handle-color)"}),paginationContainer:(0,a.AH)({display:"flex",justifyContent:"flex-end",paddingTop:"var(--table-spacing-sm)",paddingBottom:"var(--table-spacing-sm)"})}},140718:(e,t,r)=>{"use strict";r.d(t,{XA:()=>y,lQ:()=>S,wS:()=>I});var a=r(610435),n=r(692738),i=r(46e3),o=r(806773),s=r(370427),l=r(907046),c=r(99442),d=r(224098),u=r(545251),p=r(53333),f=r(661748);let g=(0,n.createContext)(void 0),m=[d.s7.OnValueChange,d.s7.OnView],h=[d.s7.OnValueChange],b=(e,t)=>{for(let r of n.Children.toArray(e))if(n.isValidElement(r)){if(r.type===I&&r.props.value===t)return r;if(r.props.children){let e=b(r.props.children,t);if(e)return e}}},v=(e,t)=>{let r=b(e,t);if(n.isValidElement(r))return r.props.children;return""},y=(0,n.forwardRef)(({defaultValue:e,name:t,placeholder:r,children:s,contentProps:l,onChange:u,onOpenChange:b,id:y,label:I,value:S,validationState:T,forceCloseOnEscape:_,componentId:A,analyticsEvents:R,valueHasNoPii:C,...O},w)=>{let N=(0,f.W)("databricks.fe.observability.defaultComponentView.simpleSelect",!1),[x]=(0,n.useState)(()=>{if(S)return v(s,S);return""}),L=(0,n.useRef)(null);(0,n.useImperativeHandle)(w,()=>L.current,[]);let M=(0,n.useRef)(S),[P,k]=(0,n.useState)(S),[D,U]=(0,n.useState)(x),$=void 0!==S,Y=(0,n.useMemo)(()=>R??(N?m:h),[R,N]),H=(0,d.ei)({componentType:d.v_.SimpleSelect,componentId:A,analyticsEvents:Y,valueHasNoPii:C}),{elementRef:G}=(0,p.z)({onView:H.onView,value:S??e});(0,n.useEffect)(()=>{void 0!==S&&S!==M.current&&(k(S),M.current=S)},[S]),(0,n.useEffect)(()=>{if($)return;let t=L.current,r=e||t?.value||"";k(r),M.current=r},[$,e,S]),(0,n.useEffect)(()=>{U(v(s,P||""))},[P,s]);let F=(0,n.useCallback)(e=>{H.onValueChange(e),L.current?.setAttribute("value",e||""),k(e),U(v(s,e)),u&&u({target:{name:t,type:"select",value:e},type:"change"})},[H,s,u,t]),B=(0,n.useMemo)(()=>({value:P,onChange:F}),[P,F]),W=(0,n.useCallback)(()=>{F("")},[F]);return(0,a.Y)(g.Provider,{value:B,children:(0,a.Y)(i.l,{componentId:void 0,value:P,placeholder:r,label:I??O["aria-label"],id:y,children:(0,a.FD)(E,{onOpenChange:b,children:[(0,a.Y)(c.b,{ref:G,...O,validationState:T,onClear:W,id:y,value:P,...H.dataComponentProps,children:D||r}),(0,a.Y)("input",{type:"hidden",ref:L}),(0,a.Y)(o.g,{forceCloseOnEscape:_,...l,children:s})]})})})}),E=({children:e,onOpenChange:t})=>{let{isOpen:r}=(0,u.w)();return(0,n.useEffect)(()=>{t&&t(!!r)},[r,t]),(0,a.Y)(a.FK,{children:e})},I=(0,n.forwardRef)(({value:e,children:t,...r},i)=>{let o=(0,n.useContext)(g);if(!o)throw Error("SimpleSelectOption must be used within a SimpleSelect");let{onChange:l}=o,c=(0,n.useCallback)(({value:e})=>{l(e)},[l]);return(0,a.Y)(s.O,{...r,ref:i,value:e,onChange:c,children:t})}),S=({children:e,label:t,...r})=>{if(!(0,n.useContext)(g))throw Error("SimpleSelectOptionGroup must be used within a SimpleSelect");return(0,a.Y)(l.n,{...r,name:t,children:e})}},150190:(e,t,r)=>{"use strict";r.d(t,{H:()=>s});var a=r(160603),n=r(733845),i=r(302118);function o(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function s(e){let t=(0,n.O)();return(0,a.useQuery)(["get_user_info"],()=>{var e;return(e=function*(){if(t)return yield i.k.getUserInfo();return{is_metastore_admin:!1}},function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function s(e){o(i,a,n,s,l,"next",e)}function l(e){o(i,a,n,s,l,"throw",e)}s(void 0)})})()},e)}},161330:(e,t,r)=>{"use strict";r.d(t,{I:()=>d});var a=r(610435),n=r(91958),i=r.n(n),o=r(79570),s=r(497895),l=r(201828);let c=i()(e=>({color:e.colors.textSecondary})),d=({content:e,iconTitle:t="More information",...r})=>{let{theme:n}=(0,s.wn)();return(0,a.Y)(o.m,{content:e,...r,children:(0,a.Y)(l.A,{tabIndex:0,"aria-hidden":"false","aria-label":t,alt:t,css:c(n)})})}},210383:(e,t,r)=>{"use strict";r.d(t,{K:()=>i,u:()=>s});var a,n=r(978679),i=((a={}).NO_UPDATES_IN_TABLE_HISTORY="NO_UPDATES_IN_TABLE_HISTORY",a.FAILED_TO_FETCH_HISTORY="FAILED_TO_FETCH_HISTORY",a.FAILED_TO_FIT_MODEL="FAILED_TO_FIT_MODEL",a.FAILED_TO_FIT_MODEL_WITH_HIGH_RESIDUAL="FAILED_TO_FIT_MODEL_WITH_HIGH_RESIDUAL",a.NOT_ENOUGH_UPDATE_OP_BACKTESTING="NOT_ENOUGH_UPDATE_OP_BACKTESTING",a.NOT_ENOUGH_UPDATE_OP="NOT_ENOUGH_UPDATE_OP",a.NOT_ENOUGH_DISTINCT_DAYS="NOT_ENOUGH_DISTINCT_DAYS",a.USER_CONFIGURED_SKIP="USER_CONFIGURED_SKIP",a.FAILED_TO_PREDICT="FAILED_TO_PREDICT",a.NOT_ENOUGH_TABLE_HISTORY="NOT_ENOUGH_TABLE_HISTORY",a.COLLECTING_DATA="COLLECTING_DATA",a.NOT_ENOUGH_TABLE_HISTORY_CUSTOM_SQL="NOT_ENOUGH_TABLE_HISTORY_CUSTOM_SQL",a.PERMISSION_DENIED="PERMISSION_DENIED",a.INTERNAL_ERROR="INTERNAL_ERROR",a.BLAST_RADIUS_COMPUTATION_ERROR="BLAST_RADIUS_COMPUTATION_ERROR",a.JOB_RCA_COMPUTATION_ERROR="JOB_RCA_COMPUTATION_ERROR",a.TOO_FREQUENTLY_UPDATING="TOO_FREQUENTLY_UPDATING",a.ROW_COUNT_COLLECTION_ERROR="ROW_COUNT_COLLECTION_ERROR",a.MATERIALIZED_VIEW_HISTORY_ERROR="MATERIALIZED_VIEW_HISTORY_ERROR",a.LEGACY_MV_NOT_SUPPORTED="LEGACY_MV_NOT_SUPPORTED",a.STREAMING_TABLE_HISTORY_ERROR="STREAMING_TABLE_HISTORY_ERROR",a.USER_ERROR="USER_ERROR",a.STORAGE_ACCESS_ERROR="STORAGE_ACCESS_ERROR",a.TABLE_NOT_FOUND="TABLE_NOT_FOUND",a.SPARK_SESSION_EXPIRED="SPARK_SESSION_EXPIRED",a);let o={NO_UPDATES_IN_TABLE_HISTORY:"The table does not have any update operations in the table history.",FAILED_TO_FETCH_HISTORY:"Failed to fetch table history. Please contact Databricks support if this issue persists.",FAILED_TO_FIT_MODEL:"Failed to fit model on the table history.",FAILED_TO_FIT_MODEL_WITH_HIGH_RESIDUAL:"Failed to fit model on the table history due to high residual.",NOT_ENOUGH_UPDATE_OP_BACKTESTING:"Not enough update operations in table history for backtesting.",NOT_ENOUGH_UPDATE_OP:"We are still training our model as there are not enough update operations in table history for a valid forecast.",NOT_ENOUGH_DISTINCT_DAYS:"We are still training our model as there are not enough distinct days with commits in table history for a valid forecast.",USER_CONFIGURED_SKIP:"Monitoring for this table has been skipped based on your configuration.",FAILED_TO_PREDICT:"Failed to generate prediction from the model. Please contact Databricks support if this issue persists.",NOT_ENOUGH_TABLE_HISTORY:"We are still training our model as there are not enough days of table history to evaluate completeness.",COLLECTING_DATA:"Collecting data for completeness monitoring. More days of data are required for analysis.",NOT_ENOUGH_TABLE_HISTORY_CUSTOM_SQL:"Not enough distinct days of historical data to evaluate custom SQL.",PERMISSION_DENIED:"Unable to retrieve table history. Please ensure you have SELECT access to the table and please contact Databricks support if this issue persists.",INTERNAL_ERROR:"An internal error has occurred. Please contact Databricks support if this issue persists.",BLAST_RADIUS_COMPUTATION_ERROR:"Failed to compute blast radius.",JOB_RCA_COMPUTATION_ERROR:"Failed to compute job RCA.",TOO_FREQUENTLY_UPDATING:"We are currently not supporting tables updating this frequently.",ROW_COUNT_COLLECTION_ERROR:"Failed to collect row count data for completeness checks. Please contact Databricks support if this issue persists.",MATERIALIZED_VIEW_HISTORY_ERROR:"Your materialized view is incorrectly configured. Please specify a valid backing table to resolve this issue.",LEGACY_MV_NOT_SUPPORTED:"We currently do not support legacy materialized views. Only Direct Publishing Model (DPM) views are supported.",STREAMING_TABLE_HISTORY_ERROR:"Error fetching table history for streaming table. Please refresh the pipeline that populates your streaming table to continue monitoring.",USER_ERROR:"Your Data Quality Monitoring configuration requires attention. Please review and fix any issues.",TABLE_NOT_FOUND:"Table not found. The table was listed but could not be accessed during execution. This typically indicates the table was deleted shortly after being listed, or the job lacks the required permissions.",STORAGE_ACCESS_ERROR:"Storage access error. Please verify the table's storage location is accessible.",SPARK_SESSION_EXPIRED:"Spark session timed out due to inactivity."};function s(e){if(!(0,n.zz)(e))return null;return Object.values(i).includes(e)?o[e]:o.INTERNAL_ERROR}},217247:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.083 8 10 10.947 8.958 12 5 8l3.958-4L10 5.053z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="ChevronLeftIcon";let l=s},242995:(e,t,r)=>{"use strict";r.d(t,{h:()=>o,j:()=>i});var a,n=r(696514),i=((a={}).DONE="done",a.CANCELED="canceled",a);let o=(0,n.fH)("Filebrowser::SaveAsFolderNode")},282109:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1 3.5h10V2H1zm0 8h4V10H1zm7-4H1V6h7zm3.5 7.56 4.03-4.03-1.06-1.06-2.22 2.22V6h-1.5v6.19L8.53 9.97l-1.06 1.06z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="SortDescendingIcon";let l=s},283009:(e,t,r)=>{"use strict";r.d(t,{a:()=>s});var a=r(610435);r(692738);var n=r(79128),i=r(79570),o=r(180864);function s({buttonProps:e,componentId:t,copyText:r,copyTooltip:l,isInsideInputGroup:c=!1,onCopy:d,tooltipProps:u}){let{actionIcon:p,copy:f,handleTooltipOpenChange:g,tooltipOpen:m,tooltipMessage:h}=(0,o.L)(r,l,d),b=(0,a.Y)(n.$n,{"aria-label":h,componentId:t,icon:p,onClick:f,size:"small",...e}),v=(0,a.Y)(n.$n,{"aria-label":h,componentId:t,onClick:f,...e,children:p});return(0,a.Y)(i.m,{componentId:`${t}-tooltip`,content:h,onOpenChange:g,open:m,...u,children:c?v:b})}},293418:(e,t,r)=>{"use strict";r.d(t,{H:()=>u,g:()=>d});var a=r(610435),n=r(783772),i=r.n(n),o=r(692738),s=r(325056),l=r(114826),c=r(497895);let d=(0,o.createContext)({isHeader:!1}),u=(0,o.forwardRef)(function({children:e,className:t,style:r,isHeader:n=!1,skipIconHiding:u=!1,verticalAlignment:p,...f},g){let m,{size:h,grid:b}=(0,o.useContext)(s.G),{theme:v}=(0,c.wn)();return m=n&&"default"===h?v.spacing.sm:"default"===h?6:v.spacing.xs,(0,a.Y)(d.Provider,{value:(0,o.useMemo)(()=>({isHeader:n}),[n]),children:(0,a.Y)("div",{...f,ref:g,role:"row",style:{...r,"--table-row-vertical-padding":`${m}px`},css:[!n&&!u&&l.M0,!b&&l.PV.row],className:i()(t,b&&l.lH.row,{"table-isHeader":n,"table-row-isGrid":b}),children:e})})})},295423:(e,t,r)=>{"use strict";r.d(t,{f:()=>c});var a=r(692738),n=r(671244),i=r(653542),o=r(49586),s=r(209908);let l=50,c=({enableAccountGroups:e=!1,enableAccountServicePrincipals:t=!1,enableAccountUsers:r=!1,enableWorkspaceGroups:c=!0,enableWorkspaceServicePrincipals:d=!0,enableWorkspaceUsers:u=!0,filterText:p="",principalIdsForFiltering:f=[],principalUniqueNamesForFiltering:g=[],limit:m=l,useLite:h,skip:b=!1,isCache:v=!1}={})=>{let y=(0,s.VM)({ids:f,uniqueNames:g}),E=(0,s.L5)({ids:f,uniqueNames:g}),{subjects:I,isLoading:S,error:T,hasNextPage:_}=(0,o.zo)({source:"account",filter:p,filterPredicate:y,first:m,skip:!r||b,useLite:h,isCache:v}),{subjects:A,isLoading:R,error:C,hasNextPage:O}=(0,n.Bi)({source:"account",filter:p,filterPredicate:E,first:m,skip:!e||b,useLite:h,isCache:v}),{subjects:w,isLoading:N,error:x,hasNextPage:L}=(0,i.Q_)({source:"account",filter:p,filterPredicate:y,first:m,skip:!t||b,useLite:h,isCache:v}),{subjects:M,isLoading:P,error:k,hasNextPage:D}=(0,o.zo)({source:"workspace",filter:p,filterPredicate:y,first:m,skip:!u||b,useLite:h,isCache:v}),{subjects:U,isLoading:$,error:Y,hasNextPage:H}=(0,n.Bi)({source:"workspace",filter:p,filterPredicate:E,first:m,skip:!c||b,useLite:h,isCache:v}),{subjects:G,isLoading:F,error:B,hasNextPage:W}=(0,i.Q_)({source:"workspace",filter:p,filterPredicate:y,first:m,skip:!d||b,useLite:h,isCache:v}),z=(0,a.useMemo)(()=>{let t=[...U,...A];if(e&&c)return t.filter((e,t,r)=>t===r.findIndex(t=>t.id===e.id));return t},[A,e,c,U]),K=(0,a.useMemo)(()=>{let e=[...G,...w];if(t&&d)return e.filter((e,t,r)=>t===r.findIndex(t=>t.id===e.id));return e},[w,t,d,G]),q=(0,a.useMemo)(()=>{let e=[...M,...I];if(r&&u)return e.filter((e,t,r)=>t===r.findIndex(t=>t.id===e.id));return e},[I,r,u,M]),{subjects:V,hasNextPage:j}=(0,a.useMemo)(()=>(0,s.GF)(p,m,z,K,q),[p,m,z,K,q]),Q=(0,a.useMemo)(()=>({accountGroups:R,accountServicePrincipals:N,accountUsers:S,groups:$,servicePrincipals:F,users:P,some:R||N||S||$||F||P}),[R,N,S,$,F,P]),J=(0,a.useMemo)(()=>({accountGroups:C??null,accountServicePrincipals:x??null,accountUsers:T??null,groups:Y??null,servicePrincipals:B??null,users:k??null}),[C,x,T,Y,B,k]);return{allSubjectsMap:(0,a.useMemo)(()=>(0,s.ne)(z,K,q),[z,K,q]),errors:J,hasNextPage:!!(V.length===m&&(_||O||L||D||H||W)||j),isLoading:Q,subjects:V}}},308879:(e,t,r)=>{"use strict";r.d(t,{L:()=>l,u:()=>c});var a=r(689262),n=r(686560),i=r(441535),o=r(709262),s=r(805287);let l=()=>({isEnabled:c()}),c=()=>(0,s.gz)({cloud:"AWS",userCanUseDatabricksWorkspace:(0,n.d)("userCanUseDatabricksWorkspace_new",!1),userCanUseSqlService:(0,n.d)("userCanUseSqlService_new",!1),enableSqlService:(0,a.b)("enableSqlService",(0,n.d)("enableSqlService",!1),()=>(0,n.d)("dbSqlEnabled_new",!1)),centralizedLoginEnabled:(0,a.b)("centralizedLoginEnabled",(0,n.d)("centralizedLoginEnabled",!1),()=>(0,i.W)("databricks.fe.centralizedLoginEnabled",!1))})[o.EU].allowed},311529:(e,t,r)=>{"use strict";r.d(t,{F:()=>i,x:()=>o});var a,n=r(696514),i=((a={}).DONE="done",a);let o=(0,n.fH)("Filebrowser::Share")},314775:(e,t,r)=>{"use strict";r.d(t,{A:()=>_});var a=r(610435),n=r(644091),i=r(783772),o=r.n(i),s=r(692738),l=r(325056),c=r(293418),d=r(114826),u=r(79128),p=r(224098),f=r(497895),g=r(814947),m=r(282109),h=r(999157),b=r(653800),v=r(837334),y=r(286342),E=r(382908),I=r(661748),S=r(53333);let T=(0,s.forwardRef)(function({style:e,resizeHandler:t,increaseWidthHandler:r,decreaseWidthHandler:n,children:i,...o},l){let{isHeader:p}=(0,s.useContext)(c.g);if(!p)throw Error("`TableHeaderResizeHandle` must be used within a `TableRow` with `isHeader` set to true.");let[g,m]=(0,s.useState)(!1),h=(0,s.useRef)(null),I=(0,s.useRef)(null),S=(0,s.useRef)(!0),T=(0,s.useRef)(!1),{theme:_}=(0,f.wn)(),A=(0,s.useCallback)(e=>{if(!r||!n)return void t?.(e);if(g&&!S.current)return;S.current=!1,h.current={x:e.clientX,y:e.clientY},I.current=e,T.current=!1;let a=e=>{h.current&&Math.abs(e.clientX-h.current.x)>2&&I.current&&(T.current=!0,t?.(I.current),document.removeEventListener("pointermove",a))},i=()=>{h.current=null,document.removeEventListener("pointermove",a),document.removeEventListener("pointerup",i)};document.addEventListener("pointermove",a),document.addEventListener("pointerup",i)},[g,t,r,n]),R=(0,s.useCallback)(e=>{if(T.current){e.preventDefault(),e.stopPropagation(),T.current=!1;return}},[]),C=(0,a.Y)("div",{...o,ref:l,onPointerDown:A,onClick:R,css:d.Ay.resizeHandleContainer,style:e,role:"button","aria-label":"Resize Column",children:(0,a.Y)("div",{css:d.Ay.resizeHandle})});return r&&n?(0,a.FD)(y.Root,{componentId:"codegen_design-system_src_design-system_tableui_tableheader.tsx_114",onOpenChange:m,children:[(0,a.Y)(y.Trigger,{asChild:!0,children:C}),(0,a.FD)(y.Content,{side:"top",align:"center",sideOffset:0,minWidth:135,style:{padding:`${_.spacing.sm} ${_.spacing.md} ${_.spacing.md} ${_.spacing.sm}`},children:[(0,a.FD)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,a.Y)(E.o.Title,{style:{marginBottom:0,marginTop:0},children:"Resize Column"}),(0,a.FD)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,a.Y)(u.$n,{onClick:()=>{n()},size:"small",componentId:"design_system.adjustable_width_header.decrease_width_button",icon:(0,a.Y)(b.A,{}),style:{backgroundColor:_.colors.actionTertiaryBackgroundHover}}),(0,a.Y)(u.$n,{onClick:()=>{r()},size:"small",componentId:"design_system.adjustable_width_header.increase_width_button",icon:(0,a.Y)(v.A,{})})]})]}),(0,a.Y)(y.Arrow,{})]})]}):C}),_=(0,s.forwardRef)(function({children:e,ellipsis:t=!1,multiline:r=!1,sortable:i,sortDirection:u,onToggleSort:f,style:b,className:v,isResizing:y=!1,align:_="left",wrapContent:A=!0,column:R,header:C,setColumnSizing:O,componentId:w,analyticsEvents:N,"aria-label":x,...L},M){let P,k=(0,I.W)("databricks.fe.observability.defaultComponentView.tableHeader",!1),D=R?.getCanResize()||L.resizable||!1,U=C?.getResizeHandler()||L.resizeHandler,$=R&&C&&O,{size:Y,grid:H}=(0,s.useContext)(l.G),{isHeader:G}=(0,s.useContext)(c.g),[F,B]=(0,s.useState)(u),W=(0,s.useMemo)(()=>N??(k?[p.s7.OnValueChange,p.s7.OnView]:[p.s7.OnValueChange]),[N,k]),z=(0,p.ei)({componentType:p.v_.TableHeader,componentId:w,analyticsEvents:W,valueHasNoPii:!0}),{elementRef:K}=(0,S.z)({onView:z.onView,value:F}),q=(0,n.SV)([M,K]);if(!G)throw Error("`TableHeader` a must be used within a `TableRow` with `isHeader` set to true.");let V=(0,a.Y)(a.FK,{});i&&("asc"===u?(V=(0,a.Y)(g.A,{}),P="ascending"):"desc"===u?(V=(0,a.Y)(m.A,{}),P="descending"):"none"===u&&(V=(0,a.Y)(h.A,{}),P="none")),(0,s.useEffect)(()=>{u!==F&&(B(u),z.onValueChange(u))},[u,F,z]);let j="right"===_,Q="md";"small"===Y&&(Q="sm");let J=A?(0,a.Y)(E.o.Text,{className:"table-header-text",ellipsis:!r,size:Q,title:!r&&"string"==typeof e&&e||void 0,bold:!0,children:e}):e,X=(0,s.useCallback)(e=>()=>{R&&O&&O(t=>({...t,[R.id]:e}))},[R,O]),Z=(0,s.useCallback)(()=>{R&&O&&X(R.getSize()+10)()},[R,O,X]),ee=(0,s.useCallback)(()=>{R&&O&&X(R.getSize()-10)()},[R,O,X]),et=D&&U?(0,a.Y)(T,{style:{height:"default"===Y?"20px":"16px"},resizeHandler:U,increaseWidthHandler:$?Z:void 0,decreaseWidthHandler:$?ee:void 0}):null,er=i&&!y;return(0,a.FD)("div",{...L,ref:q,css:H?void 0:[d.PV.cell,d.PV.header],className:o()(H&&d.lH.cell,H&&d.lH.header,{"table-header-isGrid":H},v),role:"columnheader","aria-sort":i&&P||void 0,style:{justifyContent:_,textAlign:_,...b},"aria-label":er?void 0:x,...z.dataComponentProps,children:[er?(0,a.FD)("div",{css:[d.Ay.headerButtonTarget],role:"button",tabIndex:0,onClick:f,onKeyDown:e=>{if(i&&("Enter"===e.key||" "===e.key))return e.preventDefault(),f?.(e)},"aria-label":er?x:void 0,children:[j?(0,a.Y)("span",{className:"table-header-icon-container",css:[d.Ay.sortHeaderIconOnLeft],children:V}):null,J,j?null:(0,a.Y)("span",{className:"table-header-icon-container",css:[d.Ay.sortHeaderIconOnRight],children:V})]}):J,et]})})},320126:(e,t,r)=>{"use strict";r.d(t,{B:()=>u});var a=r(610435),n=r(219830),i=r(403166),o=r(964133),s=r(944552),l=r(342411),c=r(441535);let d=({value:e,label:t,popoverContent:r})=>(0,a.FD)("div",{style:{display:"flex",gridRow:"label"},children:[(0,a.Y)(n.sx,{value:e,css:{marginRight:0},children:t}),r&&(0,a.Y)("div",{css:{display:"flex",alignItems:"center",paddingTop:1,marginLeft:-6},children:(0,a.Y)(i.U,{children:r})})]}),u=({componentId:e,isAutoscalingSelected:t,formField:r,onChange:i})=>{let{formatMessage:u}=(0,l.tz)(),p=(0,c.W)("databricks.fe.lakebase.hideBetaBadge",!1),f=(0,c.W)("databricks.fe.lakebase.replaceAutoscalingSwitchWithSelector",!1);if(!p||!f)return(0,a.FD)("div",{css:{display:"flex",justifyContent:"space-between"},children:[(0,a.Y)(o.D.Label,{htmlFor:"autoscaling-beta-switch",infoPopoverContents:u(p?{id:"J/59kJ",defaultMessage:"Enable Lakebase Postgres Autoscaling for branching, instant restore, and other advanced features. HA is currently offered only in the Lakebase Provisioned Preview."}:{id:"uCfnkC",defaultMessage:"Enable to use the latest version of Lakebase Postgres, the Autoscaling beta (for evaluation only). For production, leave disabled to use standard Lakebase Postgres."}),infoPopoverProps:{popoverProps:{style:{maxWidth:400}}},children:u(p?{id:"FEhQrw",defaultMessage:"Autoscaling"}:{id:"GWIlJr",defaultMessage:"Autoscaling Beta"})}),(0,a.Y)(s.d,{componentId:e,id:"autoscaling-beta-switch",...r,checked:t,onChange:i})]});return(0,a.FD)("div",{children:[(0,a.Y)(o.D.Label,{htmlFor:"database-type-radio-group",children:(0,a.Y)(l.sA,{id:"yRfOwP",defaultMessage:"Database type"})}),(0,a.FD)(n.sx.HorizontalGroup,{componentId:"catalogCreation.lakebaseDatabaseType",id:"database-type-radio-group",...r,name:r?.name??"autoscalingBeta",value:t?"autoscaling":"provisioned",onChange:e=>{i("autoscaling"===e.target.value)},children:[(0,a.Y)(d,{value:"autoscaling",label:u({id:"Qgmeqm",defaultMessage:"Autoscaling"}),popoverContent:u({id:"3ySzDc",defaultMessage:"Autoscaling compute with branching, instant restore, and advanced features."})}),(0,a.Y)(d,{value:"provisioned",label:u({id:"y4pkKO",defaultMessage:"Provisioned"}),popoverContent:u({id:"9mNQM6",defaultMessage:"High availability (HA) and integration with Databricks apps."})})]})]})}},322227:(e,t,r)=>{"use strict";r.d(t,{$:()=>i,x:()=>o});var a,n=r(696514),i=((a={}).DONE="done",a.CANCELLED="cancelled",a);let o=(0,n.fH)("Filebrowser::Move")},325056:(e,t,r)=>{"use strict";r.d(t,{G:()=>u,X:()=>p});var a=r(610435),n=r(783772),i=r.n(n),o=r(692738),s=r(114826),l=r(623369),c=r(497895),d=r(123252);let u=(0,o.createContext)({size:"default",grid:!1}),p=(0,o.forwardRef)(function({children:e,size:t="default",someRowsSelected:r,style:n,pagination:p,empty:f,className:g,scrollable:m=!1,grid:h=!1,noMinHeight:b=!1,onScroll:v,...y},E){let{theme:I}=(0,c.wn)(),S=(0,o.useRef)(null);(0,o.useImperativeHandle)(E,()=>S.current);let T=b?{}:{minHeight:!f&&p?150:100};return(0,a.Y)(l.vR.Provider,{value:l.pz,children:(0,a.Y)(u.Provider,{value:(0,o.useMemo)(()=>({size:t,someRowsSelected:r,grid:h}),[t,r,h]),children:(0,a.FD)("div",{...(0,d.VG)(),...y,style:{...n,"--table-header-active-color":I.colors.actionDefaultTextPress,colorScheme:I.isDarkMode?"dark":void 0,"--table-header-background-color":I.colors.backgroundPrimary,"--table-header-focus-color":I.colors.actionDefaultTextHover,"--table-header-sort-icon-color":I.colors.textSecondary,"--table-header-text-color":I.colors.actionDefaultTextDefault,"--table-row-hover":I.colors.tableRowHover,"--table-separator-color":I.colors.border,"--table-resize-handle-color":I.colors.borderDecorative,"--table-spacing-md":`${I.spacing.md}px`,"--table-spacing-sm":`${I.spacing.sm}px`,"--table-spacing-xs":`${I.spacing.xs}px`},css:[s.Ay.tableWrapper,T],className:i()({"table-isScrollable":m,"table-isGrid":h},g),children:[(0,a.FD)("div",{role:"table",ref:S,css:[s.Ay.table,m&&{flex:"initial !important"}],tabIndex:m?0:-1,onScroll:v,children:[e,f&&(0,a.Y)("div",{css:{padding:I.spacing.lg},children:f})]}),!f&&p&&(0,a.Y)("div",{css:s.Ay.paginationContainer,children:p})]})})})})},342145:(e,t,r)=>{"use strict";r.d(t,{$y:()=>u,B_:()=>I,FQ:()=>m,OD:()=>s,T4:()=>o,U1:()=>h,UX:()=>f,Yu:()=>v,bB:()=>i,cC:()=>g,k0:()=>n,nU:()=>c,sO:()=>E,sh:()=>d,wp:()=>l,xY:()=>p,xe:()=>y,zD:()=>b});var a=r(141078);let n=(0,a.J1)`
  query allWorkspaceUsers__deduped($first: Int!, $after: String, $filter: String)
  @component(name: "IdentityMgmt.UserGroup") {
    allWorkspaceUsers(first: $first, after: $after, filter: $filter) {
      users {
        email
        fullname
        id
        isIndirect
        isServicePrincipal
        isWorkspaceAdmin
        status
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,i=(0,a.J1)`
  query allWorkspaceUsersLite($first: Int!, $after: String, $filter: String)
  @component(name: "IdentityMgmt.UserGroup") {
    allWorkspaceUsers(first: $first, after: $after, filter: $filter) {
      users {
        email
        fullname
        id
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,o=(0,a.J1)`
  query allWorkspaceServicePrincipals__deduped($first: Int!, $after: String, $filter: String)
  @component(name: "IdentityMgmt.UserGroup") {
    allWorkspaceServicePrincipals(first: $first, after: $after, filter: $filter) {
      users {
        applicationId: email
        fullname
        id
        isIndirect
        isServicePrincipal
        isWorkspaceAdmin
        status
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,s=(0,a.J1)`
  query allWorkspaceServicePrincipalsLite($first: Int!, $after: String, $filter: String)
  @component(name: "IdentityMgmt.UserGroup") {
    allWorkspaceServicePrincipals(first: $first, after: $after, filter: $filter) {
      users {
        applicationId: email
        fullname
        id
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,l=(0,a.J1)`
  query allWorkspaceGroups($first: Int!, $after: String, $filter: String) @component(name: "IdentityMgmt.UserGroup") {
    allWorkspaceGroups(first: $first, after: $after, filter: $filter) {
      groups {
        id
        groupname
        isWorkspaceLocal
        membersCount
        isExternal
        isIndirect
        exclusivityType
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,c=(0,a.J1)`
  query allWorkspaceGroupsLite($first: Int!, $after: String, $filter: String)
  @component(name: "IdentityMgmt.UserGroup") {
    allWorkspaceGroups(first: $first, after: $after, filter: $filter) {
      groups {
        id
        groupname
        isWorkspaceLocal
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,d=(0,a.J1)`
  query allAccountUsers($first: Int!, $after: String, $filter: String, $filterAdmin: Boolean)
  @component(name: "IdentityMgmt.UserGroup") {
    allAccountUsers(first: $first, after: $after, filter: $filter, filterAdmin: $filterAdmin) {
      users {
        email
        fullname
        id
        isAccountAdmin
        isServicePrincipal
        status
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,u=(0,a.J1)`
  query allAccountUsersLite($first: Int!, $after: String, $filter: String) @component(name: "IdentityMgmt.UserGroup") {
    allAccountUsers(first: $first, after: $after, filter: $filter) {
      users {
        email
        fullname
        id
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,p=(0,a.J1)`
  query allAccountServicePrincipals($first: Int!, $after: String, $filter: String, $filterAdmin: Boolean)
  @component(name: "IdentityMgmt.UserGroup") {
    allAccountServicePrincipals(first: $first, after: $after, filter: $filter, filterAdmin: $filterAdmin) {
      users {
        applicationId: email
        fullname
        id
        isAccountAdmin
        isServicePrincipal
        status
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,f=(0,a.J1)`
  query allAccountServicePrincipalsLite($first: Int!, $after: String, $filter: String)
  @component(name: "IdentityMgmt.UserGroup") {
    allAccountServicePrincipals(first: $first, after: $after, filter: $filter) {
      users {
        applicationId: email
        fullname
        id
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,g=(0,a.J1)`
  query allAccountGroups($first: Int!, $after: String, $filter: String) @component(name: "IdentityMgmt.UserGroup") {
    allAccountGroups(first: $first, after: $after, filter: $filter) {
      groups {
        id
        groupname
        membersCount
        isExternal
        externalId
        exclusivityType
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,m=(0,a.J1)`
  query allAccountGroupsLite($first: Int!, $after: String, $filter: String) @component(name: "IdentityMgmt.UserGroup") {
    allAccountGroups(first: $first, after: $after, filter: $filter) {
      groups {
        id
        groupname
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,h=(0,a.J1)`
  query getAccountUsersCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountUsersCount {
      totalCount
    }
  }
`,b=(0,a.J1)`
  query getAccountServicePrincipalsCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountServicePrincipalsCount {
      totalCount
    }
  }
`,v=(0,a.J1)`
  query getAccountGroupsCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountGroupsCount {
      totalCount
    }
  }
`,y=(0,a.J1)`
  query getWorkspaceUsersCount($shouldGetDirectlyAssignedOnly: Boolean) @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceUsersCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`,E=(0,a.J1)`
  query getWorkspaceServicePrincipalsCount($shouldGetDirectlyAssignedOnly: Boolean)
  @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceServicePrincipalsCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`,I=(0,a.J1)`
  query getWorkspaceGroupsCount($shouldGetDirectlyAssignedOnly: Boolean) @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceGroupsCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`},352185:(e,t,r)=>{"use strict";r.d(t,{A6:()=>E,Ds:()=>p,FI:()=>u,I7:()=>d,m1:()=>c});var a,n,i,o=r(446835),s=r.n(o),l=r(978679),c=((a={}).CONFIGURATION="configuration",a.NOTEBOOKS="notebooks",a.LIBRARIES="libraries",a.SPARK_UI="sparkUi",a.DRIVER_LOGS="driverLogs",a.METRICS="metrics",a.SPARK_CLUSTER_UI="sparkClusterUi",a.APPS="apps",a.EVENTS="events",a);let d="/compute";var u=((n={}).InteractiveListPage="interactive",n.AutomatedListPage="automated",n.SqlWarehouses="sql-warehouses",n.BrickIndex="vector-search",n.BrickStore="online-stores",n.DatabaseInstances="database-instances",n.InstancePools="instance-pools",n.ClusterPolicies="policies",n.LakehouseApps="apps",n.GpuPools="gpu-pools",n.Serverless="serverless",n),p=((i={}).New="new",i.Edit="edit",i);let f=function e(...t){let r=RegExp("(^/*)|(/*$)","g"),a=s()(t).map(e=>e.trim().replace(r,"")).join("/"),n=a?`/${a}`:"",i=t=>t?e(n,t)():n;return i.append=(...t)=>e(n,...t),i}(d),g=f.append("instance-pools"),m=f.append("policies"),h=f.append("sparkui"),b=f.append("clusters"),v=f.append("database-instances");function y(e){return["driver",e].filter(l.zz).join("-")}let E={clusterMainPage:e=>f(e),sqlWarehouse:{create:()=>f.append("sql-warehouses")("new")},brickStore:{list:()=>E.clusterMainPage("online-stores"),view:e=>f.append("online-stores")(e)},databaseInstances:{list:()=>E.clusterMainPage("database-instances"),view:e=>v(e),edit:e=>v.append(e)("edit")},cluster:{view(e,t,r){let a=b.append(e);if(!t||"configuration"===t)return a();if("driverLogs"===t)return a("driver-logs");if("sparkUi"===t)return a("spark-ui");if("sparkClusterUi"===t)return a.append("spark-compute-ui")(("MASTER"===r?"master":r)??"master");return a(t)},edit:e=>b.append(e)("edit"),new:(e={})=>{let t="policyId"in e?`?policyId=${e.policyId}`:"",r="clone"in e?`?clone=${e.clone}`:"";return b.append("new")(r||t)}},sparkUi:{driverUi:(e,t)=>h.append(e)(`driver${t?`-${t}`:""}`),logs:(e,t)=>{let r=h.append(e)("driver-logs");if(!t?.jobId&&!t?.runId)return r;let a=new URLSearchParams;return t.jobId&&a.set("jobId",String(t.jobId)),t.runId&&a.set("runId",String(t.runId)),`${r}?${a}`},uiWithPath:e=>h.append(e)(),metrics:e=>h.append(e)("metrics"),stage:(e,t,r,a)=>h.append(e,y(t))(`stages/stage?id=${r}&attempt=0${void 0!==a?"&o="+a:""}`),job:(e,t,r,a)=>h.append(e,y(t))(`jobs/job?id=${r}${void 0!==a?"&o="+a:""}`)},brickIndex:{list:()=>E.clusterMainPage("vector-search"),view:e=>f.append("vector-search")(e)},policy:{view:e=>m(e),create:()=>m("new"),clone:e=>E.policy.create()+`?clone=${e}`,edit:e=>m.append(e)("edit")},pool:{view:e=>g(e),create:()=>g("new"),edit:e=>g.append(e)("edit")}}},402720:(e,t,r)=>{"use strict";let a;r.d(t,{P:()=>c});var n=r(610435),i=r(400136),o=r(591333),s=r(429608),l=r(866370);let c=((a=({dangerouslySetAntdProps:e,label:t,loadingDescription:r="LegacySkeleton",...a})=>{let c=a.loading??!0;return(0,n.Y)(s.wC,{children:(0,n.FD)(o.U,{label:t,children:[c&&(0,n.Y)(l.G,{description:r}),(0,n.Y)(i.A,{...a,...e})]})})}).Button=i.A.Button,a.Image=i.A.Image,a.Input=i.A.Input,a)},404991:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m2.207-10.189a2.25 2.25 0 0 1-1.457 2.56V9h-1.5V7.75A.75.75 0 0 1 8 7a.75.75 0 1 0-.75-.75h-1.5a2.25 2.25 0 0 1 4.457-.439M7.25 10.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="QuestionMarkFillIcon";let l=s},408278:(e,t,r)=>{"use strict";r.d(t,{Ei:()=>u,Mw:()=>d,OQ:()=>v,P9:()=>f,Qi:()=>_,RF:()=>C,V2:()=>o,Wu:()=>E,bv:()=>T,eL:()=>h,gd:()=>y,hK:()=>A,hf:()=>l,iw:()=>c,jC:()=>b,lj:()=>I,o0:()=>S,uT:()=>m,xl:()=>g,yt:()=>p,zh:()=>s});var a=r(441535),n=r(483588),i=r(210383);function o(){let e=(0,a.W)("dm_anomaly_detection",null)??(0,a.W)("anomaly_detection_ws",null)??(0,a.W)("databricks.datamonitoring.enableAnomalyDetection",!1),t=(0,a.W)("databricks.datamonitoring.dataMonitoringEnabledForShard",!1),r=(0,a.W)("databricks.datamonitoring.disableLakehouseMonitoring",!1);return!!(e&&t&&!r)}function s(){return(0,a.W)("databricks.fe.datamonitoring.enableAnomalyDetectionBetaUI",!1)&&o()}function l(){return(0,a.W)("databricks.fe.datamonitoring.catalogEnablementUI",!1)}function c(){return(0,a.W)("databricks.fe.datamonitoring.excludedTablesResultsUI",!1)}function d(){return(0,a.W)("databricks.fe.datamonitoring.enableRecentlyResolvedIncidents",!1)}function u(){return(0,a.W)("databricks.fe.datamonitoring.enableUserFeedbackResolutions",!1)}function p(e){return"ANOMALY_DETECTION_JOB_TYPE_INTERNAL_HIDDEN"===e}function f(){return(0,a.W)("databricks.fe.datamonitoring.enableAnomalyDetectionDaisDemo",!1)}function g(){return(0,a.W)("databricks.fe.datamonitoring.permissionAwareRCA",!1)}function m(){return(0,a.W)("databricks.fe.datamonitoring.enableRcaV2",!1)&&g()}function h(){return(0,a.W)("databricks.fe.datamonitoring.isAlertingBetaEnabled",!1)}let b=[i.K.COLLECTING_DATA,i.K.NOT_ENOUGH_DISTINCT_DAYS,i.K.FAILED_TO_FIT_MODEL,i.K.FAILED_TO_FIT_MODEL_WITH_HIGH_RESIDUAL,i.K.NO_UPDATES_IN_TABLE_HISTORY,i.K.NOT_ENOUGH_UPDATE_OP_BACKTESTING,i.K.NOT_ENOUGH_UPDATE_OP,i.K.NOT_ENOUGH_TABLE_HISTORY,i.K.NOT_ENOUGH_TABLE_HISTORY_CUSTOM_SQL],v=[i.K.ROW_COUNT_COLLECTION_ERROR,i.K.INTERNAL_ERROR,i.K.FAILED_TO_PREDICT,i.K.FAILED_TO_FETCH_HISTORY,i.K.PERMISSION_DENIED,i.K.USER_ERROR,i.K.MATERIALIZED_VIEW_HISTORY_ERROR,i.K.STREAMING_TABLE_HISTORY_ERROR,i.K.TOO_FREQUENTLY_UPDATING,i.K.LEGACY_MV_NOT_SUPPORTED,i.K.STORAGE_ACCESS_ERROR,i.K.TABLE_NOT_FOUND];function y(e,t){if(null==e)return!1;let r="string"==typeof e?e.toUpperCase():e.status?.replace(/^HEALTH_STATUS_/,"")??"UNKNOWN";if("TRAINING"===r)return!0;if("UNKNOWN"!==r)return!1;if("string"==typeof e)return null!=t&&""!==t&&b.includes(t);return e.qualityChecks?.some(e=>!!e.errorCode&&b.includes(e.errorCode??""))??!1}function E(e){let t=e?.qualityChecks;if(!t?.length)return!1;return t.some(e=>e.status===n.LUs.HEALTH_STATUS_HEALTHY||e.status===n.LUs.HEALTH_STATUS_UNHEALTHY)}function I(e){if(!e)return!1;return e.status===n.LUs.HEALTH_STATUS_UNMONITORED}function S(e,t){if(null==e)return!1;let r="string"==typeof e?e.toUpperCase():e.status?.replace(/^HEALTH_STATUS_/,"")??"UNKNOWN";if("HEALTHY"===r||"UNHEALTHY"===r)return!1;if("ERROR"===r)return!0;if("UNKNOWN"!==r)return!1;if("string"==typeof e)return null!=t&&""!==t&&v.includes(t);return e.qualityChecks?.some(e=>!!e.errorCode&&v.includes(e.errorCode??""))??!1}function T(e,t){if(S(e,t))return"ERROR";if(y(e,t))return"TRAINING";return e}function _({tableHealthIndicator:e,isSchemaADEnabled:t,isExcluded:r,latestRunStatus:a}){let n=I(e),i=n&&!r&&!!t,o=i&&"ANOMALY_DETECTION_RUN_STATUS_FAILED"===a,s=!r&&(S(e)||o),l=!r&&!o&&(y(e)||i),c=s&&e?{...e,status:"HEALTH_STATUS_ERROR"}:e;return{hasNoResults:n,isError:s,isTraining:l,showNotEnabled:n&&!t&&!r,isPendingResults:i,displayHealthIndicator:c}}function A(e){return e.toLowerCase().split("_").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}new Intl.RelativeTimeFormat(void 0,{numeric:"auto"});let R=["SCHEMA_DOES_NOT_EXIST","TABLE_DOES_NOT_EXIST"];function C(e){let t=e?.code;if(!t)return!1;return R.includes(t)}},418230:(e,t,r)=>{"use strict";r.d(t,{U:()=>i});var a=r(692738),n=r(829478);function i(e){var t;return t=a.useMemo(()=>window.matchMedia(e),[e]),(0,n.useSyncExternalStore)(a.useCallback(e=>(t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}),[t]),()=>t.matches)}},424489:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",d:"M12.125 8.864a.75.75 0 0 0 0-1.3l-6-3.464A.75.75 0 0 0 5 4.75v6.928a.75.75 0 0 0 1.125.65z"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="PlayIcon";let l=s},434288:(e,t,r)=>{"use strict";r.d(t,{l:()=>a});let a=(0,r(342411).YK)({requestPermissions:{id:"CrJ5nP",defaultMessage:"Request permissions"},requestDeltaSharingPermissions:{id:"P0HsgX",defaultMessage:"Request Delta Sharing permissions"},requestAccessDisabledTooltip:{id:"LW+CW/",defaultMessage:"Requests for access are not enabled for this object. Please contact the object owner or administrator for additional permissions."},requestAccessDeltaSharingRecipientDisabledTooltip:{id:"HX5unK",defaultMessage:"Requests for access are not enabled for this object. Please contact the object owner or administrator for USE_PROVIDER permissions."},requestAccessDeltaSharingProviderDisabledTooltip:{id:"pdgj40",defaultMessage:"Requests for access are not enabled for this object. Please contact the object owner or administrator for CREATE_RECIPIENT and CREATE_SHARE permissions."},requestAccessDisabledMultipleTooltip:{id:"b2k+c/",defaultMessage:"Requests for access are not enabled for these objects. Please contact the object owners or administrators for additional permissions."}})},450275:(e,t,r)=>{"use strict";r.d(t,{d:()=>s,v:()=>n});var a,n=((a={}).Bytes="Bytes",a.KiloBytes="KiloBytes",a.MegaBytes="MegaBytes",a.GigaBytes="GigaBytes",a.TeraBytes="TeraBytes",a.PetaBytes="PetaBytes",a.ExaBytes="ExaBytes",a.ZettaBytes="ZettaBytes",a.YottaBytes="YottaBytes",a);let i={Bytes:0,KiloBytes:1,MegaBytes:2,GigaBytes:3,TeraBytes:4,PetaBytes:5,ExaBytes:6,ZettaBytes:7,YottaBytes:8},o=["Bytes","KiloBytes","MegaBytes","GigaBytes","TeraBytes","PetaBytes","ExaBytes","ZettaBytes","YottaBytes"];function s(e,t="Bytes"){if(e<0)return{size:e,sizeUnit:t};let r=e*Math.pow(1024,i[t]),a=Math.floor(Math.log(r)/Math.log(1024));return{size:r/Math.pow(1024,a=Math.min(Math.max(a,0),o.length-1)),sizeUnit:o[a]}}},459528:(e,t,r)=>{"use strict";r.d(t,{E:()=>n,v:()=>i});var a=r(696514);let n=(0,a.fH)("Clusters::ExecuteSql"),i=(0,a.fH)("Clusters::CancelSql")},465082:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a3.25 3.25 0 1 0 0 6.5A3.25 3.25 0 0 0 8 1M6.25 4.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M8 9a8.74 8.74 0 0 0-6.836 3.287.75.75 0 0 0-.164.469v1.494c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75v-1.494a.75.75 0 0 0-.164-.469A8.74 8.74 0 0 0 8 9m-5.5 4.5v-.474A7.23 7.23 0 0 1 8 10.5c2.2 0 4.17.978 5.5 2.526v.474z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="UserIcon";let l=s},482921:(e,t,r)=>{"use strict";r.d(t,{G:()=>i,M:()=>n});var a,n=((a={}).ONLY_CLUSTER="ONLY_CLUSTER",a.ONLY_WAREHOUSE="ONLY_WAREHOUSE",a.WAREHOUSE_AND_CLUSTER="WAREHOUSE_AND_CLUSTER",a);let i=(e,t)=>{if(!t&&e)return"ONLY_CLUSTER";if(!e)return"ONLY_WAREHOUSE";return"WAREHOUSE_AND_CLUSTER"}},492814:(e,t,r)=>{"use strict";r.d(t,{E:()=>d});var a=r(747206),n=r(648782),i=r(820628),o=r(181376),s=r(673240);let l="/explore/locations",c="/explore/external-metadata";function d(){let e=(0,s.Ck)(),{metastoreId:t,schema:r,table:d,volume:u,ucFunction:p,model:f,modelVersion:g,secret:m,notebook:h,share:b,recipient:v,provider:y,credential:E,location:I,connection:S,tableFullName:T,externalMetadata:_}=(0,n.g)(),{catalog:A}=(0,n.g)(),R=(0,i.UA)(),C=R?.[R?.length-1];return void 0===A&&[o.E.ExploreDataHiveCatalog,o.E.ExploreDataHiveSchema,o.E.ExploreDataHiveTable,o.E.ExploreDataSamplesCatalog,o.E.ExploreDataSamplesSchema,o.E.ExploreDataSamplesTable].includes(C?.pageId)&&(A=C?.path.match(/^data\/([^/]+)(?:\/|$)/)?.[1]),{showData:()=>e("/explore/data"),showMetastore:()=>{e((0,a.sZ)())},showUpgradeWizard:(t,r)=>{e(`/explore/upgrade/${encodeURIComponent(t)}${r?`/${encodeURIComponent(r)}`:""}`)},showConnections:()=>{e("/explore/connections")},showConnection:t=>{e((0,a.U3)(t))},showCreateConnection:t=>{e(`/explore/connections/create${t?`?credential=${encodeURIComponent(t)}`:""}`)},showEditConnection:t=>{e(`/explore/connections/${encodeURIComponent(t)}/edit`)},showLocations:()=>{e(l)},showLocation:t=>{e((0,a.n5)(t))},showCreateLocation:()=>{e(`${l}/create`)},showEditLocation:t=>{e(`${(0,a.n5)(t)}/edit`)},showLocationBrowser:t=>{e(`${(0,a.n5)(t)}/browse`)},showLocationWorkspace:t=>{e(`${(0,a.n5)(t)}/workspace`)},showLocationPermission:t=>{e(`${(0,a.n5)(t)}/permission`)},showCredential:t=>{e(`/explore/credentials/${encodeURIComponent(t)}`)},showCredentials:()=>{e("/explore/credentials")},showExternalMetadataList:()=>{e(c)},showExternalMetadata:t=>{e(`${c}/${encodeURIComponent(t)}`)},showCreateExternalMetadata:()=>{e("/governance/external-metadata/create")},showExternalMetadataEdit:t=>{e(`/governance/external-metadata/${encodeURIComponent(t)}/edit`)},showVolume:(t,r,n)=>{e((0,a.IM)(t,r,n))},showCreatePolicy:t=>{e(`/governance/policies/create?entity=${encodeURIComponent(t)}`)},showSecret:(t,r,n)=>{e((0,a.QT)(t,r,n))},showSchema:(t,r)=>{e(`/explore/data/${r}/${t}`)},showTable:(t,r,n)=>{e((0,a.ff)(t,r,n))},catalog:A,schema:r,table:d,volume:u,ucFunction:p,model:f,modelVersion:g,secret:m,notebook:h,share:b,recipient:v,provider:y,credential:E,location:I,connection:S,metastoreId:t,tableFullName:T,externalMetadata:_}}},509695:(e,t,r)=>{"use strict";r.d(t,{h:()=>d,p:()=>c});var a=r(610435),n=r(452137),i=r.n(n),o=r(692738),s=r(566512);let l=(0,o.createContext)(void 0),c=({children:e})=>{let[t,r]=(0,s.o)();return(0,a.FD)(l.Provider,{value:t,children:[e,r]})},d=()=>{let e=(0,o.useContext)(l);return i()(null!=e,"Must wrap child in NotificationProvider"),e}},571739:(e,t,r)=>{"use strict";r.d(t,{J:()=>i,z:()=>o});var a,n=r(696514),i=((a={}).DONE="done",a.CANCELLED="cancelled",a);let o=(0,n.fH)("Filebrowser::Clone")},574132:(e,t,r)=>{"use strict";r.d(t,{y:()=>i});var a=r(610435);r(692738);var n=r(497895);let i=({disabled:e,children:t})=>{let{theme:r}=(0,n.wn)();return(0,a.Y)("div",{css:{color:r.colors.textSecondary,fontSize:r.typography.fontSizeSm,...e&&{color:r.colors.actionDisabledText}},children:t})}},583971:(e,t,r)=>{"use strict";r.d(t,{Ri:()=>u});var a=r(733337),n=r(641760),i=r(278983);function o(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function s(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function s(e){o(i,a,n,s,l,"next",e)}function l(e){o(i,a,n,s,l,"throw",e)}s(void 0)})}}let l=[1,1,2,3,5,8,13,21],c=l.length;function d(e){return e instanceof n.XD}function u(e,t){return s(function*(e,t,r=1e3){let n=0,o=null;for(;n<c;)try{return yield(0,a.nr)(e,t)}catch(e){if(o=e,d(e)&&function(e){if(!d(e))return!1;return 429===e.response.status}(e))(0,i.y)("clientsideEvent",{eventType:"ApiFetchRetry",eventName:"RetryAttempt",retryCount:n}),yield function(e){return s(function*(e,t=1e3){let r=function(e,t=1e3){let r=Math.min(e,l.length-1);return l[r]*t}(e,t);return new Promise(e=>setTimeout(e,r))}).apply(this,arguments)}(n,r),n++;else break}throw d(o)&&n===c&&(0,i.y)("clientsideEvent",{eventType:"ApiFetchRetry",eventName:"MaxRetryAttemptReached",errorCode:o?.response?.status,retryCount:n}),o}).apply(this,arguments)}},595615:(e,t,r)=>{"use strict";r.d(t,{AO:()=>u,Ox:()=>f,RK:()=>m,ic:()=>h,rA:()=>g,uV:()=>p});var a=r(692738),n=r(160603),i=r(441535),o=r(412836),s=r(425373);function l(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}(0,n.setLogger)({log:console.log,warn:console.warn,error:()=>{}});let c={retry:!1,refetchOnWindowFocus:!1,staleTime:3e5},d=new Map;function u(e){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),r={...c,...e,enabled:e?.enabled!==!1&&t},a={...c,...e,enabled:e?.enabled!==!1&&!t};d.set(JSON.stringify(e.queryKey),e.queryKey);let s=(0,o.IT)(r),l=(0,n.useQuery)(a);return t?s:l}function p({queries:e}){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),r=e.map(e=>({...c,...e,enabled:e?.enabled!==!1&&t})),a=e.map(e=>({...c,...e,enabled:e?.enabled!==!1&&!t}));e.forEach(e=>d.set(JSON.stringify(e.queryKey),e.queryKey));let o=(0,s.E)({queries:r}),l=(0,n.useQueries)(a);return t?o:l}function f({queryFn:e}){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),r=(0,n.useQueryClient)(),s=e();return(0,a.useCallback)((e,a={})=>t?o.aH.getActiveValue().fetchQuery({...a,...s(e)},c):r.fetchQuery({...a,...s(e)},c),[s,t,r])}function g(){let[e,t]=(0,a.useState)(0),r=(0,n.useQueryClient)(),s=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1);return{invalidate:(e,a)=>{var n;return(n=function*(){t(e=>e+1);try{if(e)yield s?o.aH.getActiveValue().invalidateQueries(e):r.invalidateQueries(e),d.delete(JSON.stringify(e));else{let e=Array.from(d.values()).filter(e=>{if(!Array.isArray(e))return!1;if(!a)return!0;return e.some(e=>"string"==typeof e&&e.includes(a))}).filter(e=>void 0!==e).map(e=>s?o.aH.getActiveValue().invalidateQueries(e):r.invalidateQueries(e));yield Promise.allSettled(e),d=new Map}}finally{t(e=>e-1)}},function(){var e=this,t=arguments;return new Promise(function(r,a){var i=n.apply(e,t);function o(e){l(i,r,a,o,s,"next",e)}function s(e){l(i,r,a,o,s,"throw",e)}o(void 0)})})()},isLoadingInvalidation:e>0}}function m(e){for(let t of e){let e=t.isIdle??void 0;if(!h({isIdle:e,status:t.status??void 0,fetchStatus:t.fetchStatus??void 0}))return!1}return!0}function h(e){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),r=e.isIdle??!1;if(t)return"fetchStatus"in e&&"loading"===e.status&&"idle"===e.fetchStatus;return r}},599349:(e,t,r)=>{"use strict";r.d(t,{M:()=>p});var a=r(610435),n=r(956935),i=r(692738),o=r(5421),s=r(79128),l=r(497895),c=r(369291),d=r(174541),u=r(639712);let p=(0,i.forwardRef)(({children:e,...t},r)=>{let{theme:i}=(0,l.wn)(),{isInsideTypeaheadCombobox:p,componentId:f}=(0,o.T)();if(!p)throw Error("`TypeaheadComboboxAddButton` must be used within `TypeaheadCombobox`");return(0,a.Y)(s.$n,{...t,componentId:`${f}.add_option`,type:"tertiary",onClick:e=>{e.stopPropagation(),t.onClick?.(e)},onMouseUp:e=>{e.stopPropagation(),t.onMouseUp?.(e)},className:"combobox-footer-add-button",css:{...(0,d.RB)(i),...(0,n.AH)((0,u.dg)({width:"100%",padding:0,display:"flex",alignItems:"center",borderRadius:0,"&:focus":{background:i.colors.actionTertiaryBackgroundHover,outline:"none"}}))},icon:(0,a.Y)(c.A,{}),ref:r,children:e})})},604808:(e,t,r)=>{"use strict";r.d(t,{O:()=>n});var a=r(686560);function n(){let e=(0,a.d)("unityCatalogServiceEnabled",!1),t=(0,a.d)("isMetastoreInstalled_new",!1);return e&&t}},605107:(e,t,r)=>{"use strict";r.d(t,{X:()=>i});var a=r(610435),n=r(497895);let i=({children:e,...t})=>{let{theme:r}=(0,n.wn)();return(0,a.Y)("div",{...t,css:{display:"flex",flexDirection:"row",alignItems:"flex-start",padding:`${r.spacing.xs}px ${r.spacing.lg/2}px`,alignSelf:"stretch",fontWeight:400,color:r.colors.textSecondary},children:e})}},618297:e=>{var t="u">typeof Element,r="function"==typeof Map,a="function"==typeof Set,n="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,i){try{return function e(i,o){if(i===o)return!0;if(i&&o&&"object"==typeof i&&"object"==typeof o){var s,l,c,d;if(i.constructor!==o.constructor)return!1;if(Array.isArray(i)){if((s=i.length)!=o.length)return!1;for(l=s;0!=l--;)if(!e(i[l],o[l]))return!1;return!0}if(r&&i instanceof Map&&o instanceof Map){if(i.size!==o.size)return!1;for(d=i.entries();!(l=d.next()).done;)if(!o.has(l.value[0]))return!1;for(d=i.entries();!(l=d.next()).done;)if(!e(l.value[1],o.get(l.value[0])))return!1;return!0}if(a&&i instanceof Set&&o instanceof Set){if(i.size!==o.size)return!1;for(d=i.entries();!(l=d.next()).done;)if(!o.has(l.value[0]))return!1;return!0}if(n&&ArrayBuffer.isView(i)&&ArrayBuffer.isView(o)){if((s=i.length)!=o.length)return!1;for(l=s;0!=l--;)if(i[l]!==o[l])return!1;return!0}if(i.constructor===RegExp)return i.source===o.source&&i.flags===o.flags;if(i.valueOf!==Object.prototype.valueOf&&"function"==typeof i.valueOf&&"function"==typeof o.valueOf)return i.valueOf()===o.valueOf();if(i.toString!==Object.prototype.toString&&"function"==typeof i.toString&&"function"==typeof o.toString)return i.toString()===o.toString();if((s=(c=Object.keys(i)).length)!==Object.keys(o).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(o,c[l]))return!1;if(t&&i instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==c[l]&&"__v"!==c[l]&&"__o"!==c[l]||!i.$$typeof)&&!e(i[c[l]],o[c[l]]))return!1;return!0}return i!=i&&o!=o}(e,i)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},638600:(e,t,r)=>{"use strict";r.d(t,{Kv:()=>i,N4:()=>o});var a=r(692738),n=r(720022);function i(e,t){var r,n,i;let o;return e?"function"==typeof(n=r=e)&&(o=Object.getPrototypeOf(n)).prototype&&o.prototype.isReactComponent||"function"==typeof r||"object"==typeof(i=r)&&"symbol"==typeof i.$$typeof&&["react.memo","react.forward_ref"].includes(i.$$typeof.description)?a.createElement(e,t):e:null}function o(e){let t={state:{},onStateChange:()=>{},renderFallbackValue:null,...e},[r]=a.useState(()=>({current:(0,n.ZR)(t)})),[i,o]=a.useState(()=>r.current.initialState);return r.current.setOptions(t=>({...t,...e,state:{...i,...e.state},onStateChange:t=>{o(t),null==e.onStateChange||e.onStateChange(t)}})),r.current}},653800:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("path",{fill:"currentColor",d:"M11.5 8.75h-7v-1.5h7z"}),(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.75 1a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75V1.75a.75.75 0 0 0-.75-.75zm.75 12.5v-11h11v11z",clipRule:"evenodd"})]})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="MinusSquareIcon";let l=s},655841:(e,t,r)=>{"use strict";r.d(t,{GX:()=>u,HA:()=>i,Ij:()=>d,U8:()=>n,_:()=>o,e:()=>l,fq:()=>p,n$:()=>c,r4:()=>s});var a=r(141078);let n=(0,a.J1)`
  fragment IdentityIdapi2PrincipalFragment on IdentityIdapi2Principal {
    displayName
    externalId
    status
    legacyUserId
    accountId
    sourceIdp
    accountBoundaryCheckState
    exclusivityType
      @includeSafex(name: "databricks.fe.accountsui.queryGroupExclusivityTypeForSeamlessAccounts", defaultValue: false)
  }
`,i=(0,a.J1)`
  query BatchIdentityApiGetPrincipalsQuery($input: AclmanagerIdentityapiBatchGetPrincipalsRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiBatchGetPrincipals(input: $input) {
      apiError {
        message
      }
      responses {
        principal {
          ...IdentityIdapi2PrincipalFragment
        }
        isDirectlyAssigned
        isAccountAdmin
        memberCount
        lastActiveTime
      }
    }
  }
  ${n}
`,o=(0,a.J1)`
  query seamlessListUsers($first: Int!, $after: String, $filter: String, $onlyAccountAdmins: Boolean)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiListUsers(
      input: { filter: $filter, pageSize: $first, pageToken: $after, onlyAccountAdmins: $onlyAccountAdmins }
    ) {
      apiError {
        message
      }
      tooManyResults
      nextPageToken
      entities {
        userName
        principal {
          ...IdentityIdapi2PrincipalFragment
        }
      }
    }
  }
  ${n}
`,s=(0,a.J1)`
  query seamlessListServicePrincipals($first: Int!, $after: String, $filter: String, $onlyAccountAdmins: Boolean)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiListServicePrincipals(
      input: { filter: $filter, pageSize: $first, pageToken: $after, onlyAccountAdmins: $onlyAccountAdmins }
    ) {
      apiError {
        message
      }
      tooManyResults
      nextPageToken
      entities {
        applicationId
        principal {
          ...IdentityIdapi2PrincipalFragment
        }
      }
    }
  }
  ${n}
`,l=(0,a.J1)`
  query seamlessListGroups(
    $first: Int!
    $after: String
    $filter: String
    $onlyAccountAdmins: Boolean
    $onlyExclusiveGroups: Boolean
  ) @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiListGroups(
      input: {
        filter: $filter
        pageSize: $first
        pageToken: $after
        onlyAccountAdmins: $onlyAccountAdmins
        onlyExclusiveGroups: $onlyExclusiveGroups
      }
    ) {
      apiError {
        message
      }
      tooManyResults
      nextPageToken
      entities {
        groupName
        principal {
          ...IdentityIdapi2PrincipalFragment
        }
      }
    }
  }
  ${n}
`,c=(0,a.J1)`
  query seamlessListDirectGroupMembers(
    $first: Int!
    $after: String
    $groupId: LongString
    $externalId: String
    $filter: String
  ) @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiListDirectGroupMembers(
      input: { pageSize: $first, pageToken: $after, groupId: $groupId, externalId: $externalId, filter: $filter }
    ) {
      apiError {
        message
      }
      nextPageToken
      entities {
        group {
          groupName
          principal {
            ...IdentityIdapi2PrincipalFragment
          }
        }
        user {
          userName
          principal {
            ...IdentityIdapi2PrincipalFragment
          }
        }
        servicePrincipal {
          applicationId
          principal {
            ...IdentityIdapi2PrincipalFragment
          }
        }
      }
    }
  }
  ${n}
`,d=(0,a.J1)`
  mutation GetOrCreateIdpUser($input: AclmanagerIdentityapiGetOrCreateUserRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateUser(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,u=(0,a.J1)`
  mutation GetOrCreateIdpGroup($input: AclmanagerIdentityapiGetOrCreateGroupRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateGroup(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,p=(0,a.J1)`
  mutation GetOrCreateIdpServicePrincipal($input: AclmanagerIdentityapiGetOrCreateServicePrincipalRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateServicePrincipal(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`},691069:(e,t,r)=>{"use strict";r.d(t,{C:()=>c});var a=r(610435);r(692738);var n=r(497895),i=r(465082),o=r(26971),s=r(777517),l=r(342411);let c=({kind:e,disabled:t,style:r})=>{let{theme:c}=(0,n.wn)(),d=(0,l.tz)(),u={alignItems:"center",background:t?void 0:c.colors.backgroundSecondary,borderRadius:30,color:t?c.colors.actionDisabledText:c.colors.textSecondary,display:"flex",fontSize:20,height:30,justifyContent:"center",width:30};switch(e){case"user":return(0,a.Y)(i.A,{title:d.formatMessage({id:"9vv8Gs",defaultMessage:"User"}),css:r||u});case"group":return(0,a.Y)(o.A,{title:d.formatMessage({id:"Qzw3C/",defaultMessage:"Group"}),css:r||u});case"serviceprincipal":return(0,a.Y)(s.A,{title:d.formatMessage({id:"QrVB43",defaultMessage:"Service Principal"}),css:r||u});default:return null}}},708396:(e,t,r)=>{"use strict";r.d(t,{R:()=>s});var a=r(441535),n=r(141078),i=r(641760);let o=(0,n.J1)`
  query RequestAccessStatusQuery($fullName: String!, $type: ManagedcatalogSecurableType!)
  @component(name: "LakehouseCollaboration.RequestForAccess") {
    requestforaccessGetStatus(input: { securable: { fullName: $fullName, type: $type } }) {
      isEnabled
      apiError {
        code
        message
      }
    }
  }
`;function s({type:e,fullName:t,skip:r=!1}){let l=(0,a.W)("databricks.fe.rfa.skipNonUcSecurables",!1),c=t.split(".")[0],d=l&&!(0,i.jN)({catalog:c}),{data:u,loading:p,error:f}=(0,n.IT)(o,{variables:{fullName:t,type:e},skip:!e||r||d});return{isLoading:p,isEnabled:!d&&u?.requestforaccessGetStatus?.isEnabled,error:f}}},733337:(e,t,r)=>{"use strict";r.d(t,{Ky:()=>d,Ur:()=>u,nr:()=>c});var a=r(583971),n=r(641760),i=r(441535),o=r(19123);function s(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function l(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){s(i,a,n,o,l,"next",e)}function l(e){s(i,a,n,o,l,"throw",e)}o(void 0)})}}function c(e,t){return l(function*(){let r=yield(0,o.h)(e,t);if(!r.ok){let t;try{t=yield r.json()}catch(e){}throw new n.XD(e,r,t)}return yield r.json()})()}function d(e,t,r,n,o){return l(function*(){let s,l={response:[],next_page_token:void 0},c=(0,i.W)("databricks.fe.uc.defaultPaginationWindowSize",0),d=void 0!==n?n:c;do{let n=r?.useCentralPagination?{"pagination_context.max_results":d,...r?.queryParameters}:{[o??"max_results"]:d,...r?.queryParameters};s&&(r?.useCentralPagination?n["pagination_context.page_token"]=s:n.page_token=s);let i=new URLSearchParams(n),c=`${e}?${i}`;try{let e=yield(0,a.Ri)(c,r);if(!e)break;let n=yield t(e);n&&l.response.push(...n),r?.useCentralPagination?(l.next_page_token=e.pagination?.next_page_token,s=e.pagination?.next_page_token):(l.next_page_token=e.next_page_token,s=e.next_page_token)}catch(e){throw e}}while(s);return l.response})()}function u(e){return e instanceof n.XD&&404===e.response.status&&"METASTORE_DOES_NOT_EXIST"===e.response.data.error_code}},733845:(e,t,r)=>{"use strict";r.d(t,{O:()=>o});var a=r(686560),n=r(689262),i=r(441535);function o(){let e=(0,n.b)("unityCatalogServiceEnabled",(0,a.d)("unityCatalogServiceEnabled",!1),()=>(0,i.W)("databricks.unitycatalog.enableUnityCatalogService",!1)),t=(0,a.d)("isMetastoreInstalled_new",!1);return e&&t}},768622:(e,t,r)=>{"use strict";r.d(t,{Jq:()=>y,bb:()=>I});var a=r(610435),n=r(956935),i=r(802558),o=r.n(i),s=r(91958),l=r.n(s),c=r(692738),d=r(497895),u=r(194901),p=r(161330),f=r(174541),g=r(574132),m=r(639712);let h={paddingTop:2},b={width:16,flexShrink:0},v={display:"flex"},y=l()((e,t,r)=>(0,n.AH)({...r&&{pointerEvents:"none",color:e.colors.actionDisabledText},...t&&{background:e.colors.actionTertiaryBackgroundHover}}),(e,t,r)=>`${(0,m.H6)(e)}|${t}|${!!r}`),E=l()((e,t)=>(0,n.AH)({marginLeft:e.spacing.sm,fontSize:e.typography.fontSizeBase,fontStyle:"normal",fontWeight:400,cursor:"pointer",overflow:"hidden",wordBreak:"break-word",..."ellipsis"===t&&{textOverflow:"ellipsis",whiteSpace:"nowrap"}}),(e,t)=>`${(0,m.H6)(e)}|${t}`),I=(0,c.forwardRef)(({item:e,index:t,comboboxState:r,textOverflowMode:n="multiline",isDisabled:i,disabledReason:s,hintContent:l,onClick:m,children:I,...S},T)=>{let{selectedItem:_,highlightedIndex:A,getItemProps:R,isOpen:C}=r,O=o()(_,e),w=A===t,{theme:N}=(0,d.wn)(),x=(0,c.useRef)(null);(0,c.useImperativeHandle)(T,()=>x.current);let{onClick:L,...M}=R({item:e,index:t,disabled:i,onMouseUp:e=>{e.stopPropagation(),S.onMouseUp?.(e)},ref:x});return(0,c.useEffect)(()=>{if(C&&A===t&&x.current){let e=x.current.closest("ul");if(!e)return;let t=e.scrollTop,r=e.scrollTop+e.clientHeight,a=x.current.offsetTop,n=x.current.offsetTop+x.current.clientHeight;(a<t||n>r)&&x.current?.scrollIntoView({block:"nearest"})}},[A,t,C,x]),(0,a.FD)("li",{role:"option","aria-selected":O,"aria-disabled":i,onClick:e=>{m?.(e),L?.(e)},css:[(0,f.RB)(N),y(N,w,i)],...M,...S,children:[O?(0,a.Y)(u.A,{css:h}):(0,a.Y)("div",{style:b}),(0,a.FD)("label",{css:E(N,n),children:[i&&s?(0,a.FD)("div",{css:v,children:[(0,a.Y)("div",{children:I}),(0,a.Y)("div",{css:(0,f.eO)(N),children:(0,a.Y)(p.I,{componentId:"typeahead-combobox-menu-item-disabled-reason-info-tooltip",side:"right",content:s})})]}):I,(0,a.Y)(g.y,{disabled:i,children:l})]})]})});I.defaultProps={_type:"TypeaheadComboboxMenuItem"}},777517:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 0a.75.75 0 0 1 .75.75V3h5.5a.75.75 0 0 1 .75.75V6h.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75H15v2.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V12H.75a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 .75 6H1V3.75A.75.75 0 0 1 1.75 3h5.5V.75A.75.75 0 0 1 8 0M2.5 4.5v9h11v-9zM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6.25 2.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="RobotIcon";let l=s},800205:(e,t,r)=>{"use strict";r.d(t,{h:()=>c});var a=r(441535),n=r(733337),i=r(660618),o=r(595615),s=r(302118);function l(e,t,r){return(0,o.AO)({queryKey:["data_explorer_samples_schema",t],queryFn:()=>(0,n.nr)(`${i.bY}/schemas/${encodeURIComponent(e)}.${encodeURIComponent(t)}?include_browse=true`),...r})}function c(e){var t;let r=(0,a.W)("databricks.fe.marketplace.enableNewUCBasedSamplesUI",!1),n=(t={enabled:e===i.lx&&r,keepPreviousData:!0},(0,o.AO)({queryKey:["data_explorer_samples_catalog_details"],queryFn:function(){return s.k.getCatalogDetails(i.lx)},...t})),c=l(e,"nyctaxi",{enabled:e===i.lx&&r,keepPreviousData:!0}),d=l(e,"tpch",{enabled:e===i.lx&&r,keepPreviousData:!0});return e===i.lx&&n.isSuccess&&c.isSuccess&&d.isSuccess&&r}},804723:(e,t,r)=>{"use strict";r.d(t,{S:()=>l});var a=r(610435),n=r(5421),i=r(497895),o=r(174541);let s=({children:e,...t})=>{let{theme:r}=(0,i.wn)(),{isInsideTypeaheadCombobox:s}=(0,n.T)();if(!s)throw Error("`TypeaheadComboboxFooter` must be used within `TypeaheadComboboxMenu`");return(0,a.Y)("div",{...t,css:(0,o.UA)(r),children:e})};s.defaultProps={_type:"TypeaheadComboboxFooter"};let l=s},814947:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",d:"m11.5.94 4.03 4.03-1.06 1.06-2.22-2.22V10h-1.5V3.81L8.53 6.03 7.47 4.97zM1 4.5h4V6H1zM1 12.5h10V14H1zM8 8.5H1V10h7z"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="SortAscendingIcon";let l=s},820097:(e,t,r)=>{"use strict";r.d(t,{H:()=>i,Z:()=>o});var a,n=r(696514),i=((a={}).DONE="done",a.CANCELLED="cancelled",a);let o=(0,n.fH)("Filebrowser::CloneRedashToLakeview")},829845:(e,t,r)=>{"use strict";r.d(t,{BC:()=>m,E$:()=>y,PT:()=>b,Th:()=>v,UA:()=>E,dG:()=>p,rD:()=>g,tg:()=>h,x3:()=>f});var a=r(820097),n=r(571739),i=r(437475),o=r(322227),s=r(242995),l=r(75036),c=r(751097),d=r(659573),u=r(311529);let p=(e,t,r,a)=>o.x.call({name:e,internalName:t,initialOpenFolderName:r,initialOpenFolderInternalName:a}),f=e=>n.z.call(e),g=e=>a.Z.call(e),m=e=>i.V1.call(e),h=(e,t,r)=>u.x.call({name:e,internalName:t,...r}),b=e=>d.v.call(e),v=e=>l.e.call(e),y=e=>s.h.call(e),E=e=>c.x.call(e)},834343:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("g",{clipPath:"url(#SearchIcon_svg__a)",children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a7 7 0 1 0 4.39 12.453l2.55 2.55 1.06-1.06-2.55-2.55A7 7 0 0 0 8 1M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0",clipRule:"evenodd"})}),(0,a.Y)("defs",{children:(0,a.Y)("clipPath",{children:(0,a.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="SearchIcon";let l=s},837334:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("path",{fill:"currentColor",d:"M7.25 7.25V4.5h1.5v2.75h2.75v1.5H8.75v2.75h-1.5V8.75H4.5v-1.5z"}),(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1 1.75A.75.75 0 0 1 1.75 1h12.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75zm1.5.75v11h11v-11z",clipRule:"evenodd"})]})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="PlusSquareIcon";let l=s},840924:(e,t,r)=>{"use strict";r.d(t,{v:()=>b});var a=r(483588),n=r(441535),i=r(141078);let o=(0,i.J1)`
  fragment LineageSecurableRelationshipInfoFragment on MetadatalineageapiserverLineageInfo {
    tableInfo {
      name
      schemaName
      catalogName
      hasPermission
      tableType
      lineageTimestamp
    }
    modelInfo {
      modelName
      version
      lineageTimestamp
      mlflowModelId
    }
    functionInfo {
      functionName
      lineageTimestamp
    }
    functionInfos {
      functionId
      functionName
      lineageTimestamp
    }
    fileInfo {
      path
      hasPermission
      storageLocation
      securableName
      securableType
      lineageTimestamp
    }
    pipelineInfos {
      pipelineId
      updateId
      workspaceId
      lineageTimestamp
    }
    jobInfos {
      jobId
      workspaceId
      lineageTimestamp
    }
    notebookInfos {
      notebookId
      workspaceId
      lineageTimestamp
    }
    dashboardInfos {
      dashboardId
      dashboardType
      internalName
      workspaceId
      lineageTimestamp
    }
    dashboardV3Infos {
      dashboardId
      dashboardType
      internalName
      workspaceId
      lineageTimestamp
    }
    queryInfos {
      queryId
      workspaceId
      lineageTimestamp
    }
    servingEndpointInfos {
      servingEndpointId
      servedEntityId
      workspaceId
      lineageTimestamp
    }
    alertInfos {
      alertId
      workspaceId
      lineageTimestamp
    }
    genieSpaceInfos {
      genieSpaceId
      workspaceId
      lineageTimestamp
    }
    lineageTimestamp
  }
`,s=(0,i.J1)`
  fragment LineageEntityRelationshipInfoFragment on MetadatalineageapiserverEntityInfoPaginated {
    dashboardInfo {
      dashboardId
      dashboardType
      internalName
      workspaceId
      lineageTimestamp
    }
    jobInfo {
      jobId
      workspaceId
      lineageTimestamp
    }
    notebookInfo {
      notebookId
      workspaceId
      lineageTimestamp
    }
    queryInfo {
      queryId
      workspaceId
      lineageTimestamp
    }
    pipelineInfo {
      pipelineId
      updateId
      lineageId
      workspaceId
      lineageTimestamp
    }
    servingEndpointInfo {
      servingEndpointId
      servedEntityId
      workspaceId
      lineageTimestamp
    }
    genieSpaceInfo {
      genieSpaceId
      workspaceId
      lineageTimestamp
    }
    alertInfo {
      alertId
      workspaceId
      lineageTimestamp
    }
  }
`,l=(0,i.J1)`
  fragment ExternalLineageRelationshipObjectFragment on MetadatalineageapiserverExternalLineageRelationshipObject {
    externalMetadata {
      name
    }
    modelVersion {
      name
      version
    }
    path {
      url
    }
    table {
      name
    }
  }
`,c=(0,i.J1)`
  fragment ExternalLineageRelationshipInfoFragment on MetadatalineageapiserverExternalLineageInfo {
    tableInfo {
      name
      schemaName
      catalogName
      eventTime
    }
    modelInfo {
      modelName
      version
      eventTime
    }
    fileInfo {
      path
      storageLocation
      securableName
      securableType
      eventTime
    }
    externalLineageInfo {
      id
      query
      source {
        ...ExternalLineageRelationshipObjectFragment
      }
      target {
        ...ExternalLineageRelationshipObjectFragment
      }
      properties {
        key
        value
      }
      columns {
        source
        target
      }
    }
    externalMetadataInfo {
      entityType
      systemType
      eventTime
      name
    }
  }
  ${l}
`,d=(0,i.J1)`
  query ListSecurableLineagesBySecurable(
    $securableType: MetadatalineageapiserverSecurableType!
    $securableFullName: String!
    $subsecurableId: String
    $lineageDirection: MetadatalineageapiserverLineageDirection!
    $startTimestamp: String
    $pageSize: Int
    $pageToken: String
    $securableResponseFilter: MetadatalineageapiserverSecurableType
  ) @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverListSecurableLineagesBySecurable(
      input: {
        securableType: $securableType
        securableFullName: $securableFullName
        subsecurableId: $subsecurableId
        lineageDirection: $lineageDirection
        startTimestamp: $startTimestamp
        pageSize: $pageSize
        pageToken: $pageToken
        securableResponseFilter: $securableResponseFilter
      }
    ) {
      lineages {
        ...LineageSecurableRelationshipInfoFragment
      }
      nextPageToken
      areEntitiesTruncated
    }
  }
  ${o}
`,u=(0,i.J1)`
  query ListEntityLineagesBySecurable(
    $securableType: MetadatalineageapiserverSecurableType!
    $securableFullName: String!
    $subsecurableId: String
    $lineageDirection: MetadatalineageapiserverLineageDirection!
    $startTimestamp: String
    $pageSize: Int
    $pageToken: String
    $entityResponseFilter: MetadatalineageapiserverEntityType
  ) @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverListEntityLineagesBySecurable(
      input: {
        securableType: $securableType
        securableFullName: $securableFullName
        subsecurableId: $subsecurableId
        lineageDirection: $lineageDirection
        startTimestamp: $startTimestamp
        pageSize: $pageSize
        pageToken: $pageToken
        entityResponseFilter: $entityResponseFilter
      }
    ) {
      lineages {
        ...LineageEntityRelationshipInfoFragment
      }
      nextPageToken
    }
  }
  ${s}
`,p=(0,i.J1)`
  query ListExternalLineagesBySecurable(
    $lineageDirection: MetadatalineageapiserverDirectionLineageDirection!
    $pageSize: Int
    $pageToken: String
    $securableResponseFilter: MetadatalineageapiserverListExternalLineageRelationshipsRequestExternalLineageType
    $objectInfo: MetadatalineageapiserverExternalLineageRelationshipObjectInput!
  ) @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverListExternalLineageRelationships(
      input: {
        objectInfo: $objectInfo
        lineageDirection: $lineageDirection
        pageToken: $pageToken
        pageSize: $pageSize
        securableResponseFilter: $securableResponseFilter
      }
    ) {
      externalLineageRelationships {
        ...ExternalLineageRelationshipInfoFragment
      }
      apiError {
        code
        message
      }
      nextPageToken
    }
  }
  ${c}
`,f=(0,i.J1)`
  query ListColumnLineagesByColumn(
    $tableName: String!
    $acceptedTables: [String!]!
    $lineageDirection: MetadatalineageapiserverLineageDirection!
    $columnName: String!
    $startTimestamp: String
  ) @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverListColumnLineages(
      input: {
        acceptedTables: $acceptedTables
        lineageDirection: $lineageDirection
        tableName: $tableName
        startTimestamp: $startTimestamp
        columnName: $columnName
      }
    ) {
      lineages {
        catalogName
        schemaName
        tableName
        tableType
        workspaceId
        path
        name
        lineageTimestamp
        hasPermission
      }
    }
  }
`;function g(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function m(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function h(e){var t;return(t=function*({query:e,client:t,extractResponse:r,extractToken:a,extractContinueFetching:i,extractMetadata:o,variables:s,maxResults:l,maxPages:c}){let d=[],u=s.pageToken??null,p=0,f=null,g=(0,n.W)("databricks.fe.data.defaultLineagePaginationSize",100),m=s.pageSize??g,h=l??1e3,b=c&&c>0&&Number.isFinite(c)?c:1/0,v=!0,y=0;do try{let{data:n}=yield t.query({query:e,variables:{...s,pageSize:m,pageToken:u},fetchPolicy:"network-only"});if(!n)break;let l=r(n);l&&d.push(...l),u=a(n),p=d.length,v=!i||i(n),f=o?o(f,n):f,y++}catch(e){throw e}while(u&&p<h&&y<b&&v);return{response:d,pageToken:u,metadata:f}},function(){var e=this,r=arguments;return new Promise(function(a,n){var i=t.apply(e,r);function o(e){m(i,a,n,o,s,"next",e)}function s(e){m(i,a,n,o,s,"throw",e)}o(void 0)})}).apply(this,arguments)}let b={listSecurableBySecurable:(e,t,r)=>{let i=Math.max((0,n.W)("databricks.fe.discovery.pagesToFetchAllAssets",2),1),o=t.securableResponseFilter===a.osA.ALL_ASSETS_FLATTENED?i:void 0;return h({client:e,query:d,variables:t,extractResponse:e=>e.metadatalineageapiserverListSecurableLineagesBySecurable?.lineages??[],extractToken:e=>e.metadatalineageapiserverListSecurableLineagesBySecurable?.nextPageToken??null,maxResults:o?1/0:r,maxPages:o})},listEntityBySecurable:(e,t,r)=>h({client:e,query:u,variables:t,extractResponse:e=>e.metadatalineageapiserverListEntityLineagesBySecurable?.lineages??[],extractToken:e=>e.metadatalineageapiserverListEntityLineagesBySecurable?.nextPageToken??null,maxResults:r}),listColumnLineage:(e,t)=>(function(e){var t;return(t=function*({query:e,client:t,variables:r,extractResponse:a}){try{let{data:n}=yield t.query({query:e,variables:r,fetchPolicy:"network-only"});return a(n)}catch(e){throw e}},function(){var e=this,r=arguments;return new Promise(function(a,n){var i=t.apply(e,r);function o(e){g(i,a,n,o,s,"next",e)}function s(e){g(i,a,n,o,s,"throw",e)}o(void 0)})}).apply(this,arguments)})({client:e,query:f,variables:t,extractResponse:e=>e?.metadatalineageapiserverListColumnLineages?.lineages??[]}),listExternalLineage:(e,t,r)=>h({client:e,query:p,variables:t,extractResponse:e=>e?.metadatalineageapiserverListExternalLineageRelationships?.externalLineageRelationships??[],extractToken:e=>e.metadatalineageapiserverListExternalLineageRelationships?.nextPageToken??null,maxResults:r})}},848737:(e,t,r)=>{"use strict";r.d(t,{d:()=>g});var a=r(610435),n=r(692738),i=r(545251),o=r(305404),s=r(994796),l=r(497895),c=r(834343),d=r(407374),u=r(469490),p=r(569546);let f=e=>{if("string"==typeof e||"number"==typeof e)return e.toString();if(n.isValidElement(e)&&e.props.children)return n.Children.toArray(e.props.children).map(f).join(" ");return""},g=(0,n.forwardRef)(({onChange:e,onSearch:t,virtualized:r,children:g,hasWrapper:m,controlledValue:h,setControlledValue:b,rightSearchControls:v,...y},E)=>{let{theme:I}=(0,l.wn)(),{componentId:S}=(0,i.w)(),{isInsideDialogComboboxOptionList:T}=(0,o.r)(),_=`no-result-${(0,p.B)()}`,A=(0,n.useRef)(null);(0,n.useImperativeHandle)(E,()=>A.current);let[R,C]=n.useState();if(!T)throw Error("`DialogComboboxOptionListSearch` must be used within `DialogComboboxOptionList`");let O=g;if(R&&!r&&void 0===h){var w;let e;w=m?g.props.children:g,e=R.toLowerCase(),O=n.Children.map(w,t=>{if(n.isValidElement(t)){let r=t.props.__EMOTION_TYPE_PLEASE_DO_NOT_USE__?.defaultProps._TYPE??t.props._TYPE;if("DialogComboboxOptionListSelectItem"===r||"DialogComboboxOptionListCheckboxItem"===r){let r=f(t).toLowerCase(),a=t.props.value?.toLowerCase()??"";return r.includes(e)||a.includes(e)?t:null}}return t})?.filter(e=>e),m&&(O=n.cloneElement(g,{},O))}let N=(0,n.useRef)(null);(0,n.useEffect)(()=>{if(!N.current)return;let e=(0,s.aV)(N.current);if(e){let t=(0,s.kQ)(e),r=e?.[0];r&&(0,s.ed)(r,t,!1)}},[R]);let x=n.Children.toArray(m?g.props.children:g).some(e=>n.isValidElement(e)),L=m&&O?.props.children?.length||!m&&O?.length;return(0,n.useEffect)(()=>{L||A.current?.input?.setAttribute("aria-activedescendant",_)},[L,_,A.current?.input?.value]),(0,a.FD)(a.FK,{children:[(0,a.Y)("div",{ref:N,css:{padding:`${I.spacing.sm}px ${I.spacing.lg/2}px ${I.spacing.sm}px`,width:"100%",boxSizing:"border-box",position:"sticky",top:0,background:I.colors.backgroundPrimary,zIndex:I.options.zIndexBase+1},children:(0,a.FD)("div",{css:{display:"flex",flexDirection:"row",gap:I.spacing.sm},children:[(0,a.Y)(d.p,{componentId:S?`${S}.search`:"codegen_design_system_src_design_system_dialogcombobox_dialogcomboboxoptionlistsearch.tsx_173",type:"search",name:"search",ref:A,prefix:(0,a.Y)(c.A,{}),placeholder:"Search",onChange:e=>{r||C(e.target.value),b?.(e.target.value),t?.(e.target.value)},onKeyDown:e=>{(e=>{if("ArrowDown"!==e.key&&"ArrowUp"!==e.key&&"Enter"!==e.key)return;e.preventDefault();let t=(0,s.aV)(e.target);if(!t)return;let r=(0,s.kQ)(t);if("ArrowDown"===e.key||"ArrowUp"===e.key)if(r){let a=(0,s.oS)(r,"ArrowDown"===e.key?"next":"previous");if(a)(0,s.ed)(a,r,!1);else if("ArrowDown"===e.key){let e=t[0];(0,s.ed)(e,r,!1)}else if("ArrowUp"===e.key){let e=t[t.length-1];(0,s.ed)(e,r,!1)}}else{let r="ArrowDown"===e.key?t[0]:t[t.length-1];r&&(0,s.ed)(r,void 0,!1)}else"Enter"===e.key&&r&&r.click()})(e),y.onKeyDown?.(e)},value:h??R,shouldPreventFormSubmission:!0,...y}),v]})}),r?g:L&&x?(0,a.Y)("div",{"aria-live":"polite",css:{width:"100%"},children:O}):(0,a.Y)(u.i,{id:_})]})})},850723:(e,t,r)=>{"use strict";r.d(t,{J:()=>o,O:()=>s});var a=r(160603),n=r(302118);function i(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}let o=["get_metastore_summary"];function s({fallback:e,useQueryOptions:t}={}){return(0,a.useQuery)({queryKey:o,queryFn:()=>{var t;return(t=function*(){return e?yield n.k.getMetastoreSummaryWithFallBack():yield n.k.getMetastoreSummary()},function(){var e=this,r=arguments;return new Promise(function(a,n){var o=t.apply(e,r);function s(e){i(o,a,n,s,l,"next",e)}function l(e){i(o,a,n,s,l,"throw",e)}s(void 0)})})()},...t})}},861403:(e,t,r)=>{"use strict";r.d(t,{b:()=>f});var a=r(778529),n=r.n(a),i=r(536717),o=r.n(i),s=r(692738),l=r(342411),c=r(595338);let d=/summary:\s*(.*?)(?=,\s*data:)/s;var u=r(482921),p=r(308879);function f(e,t=!0,r=!1){let a=(0,l.tz)(),{isEnabled:i}=(0,p.L)();return(0,s.useMemo)(()=>{let s=e;if(n()(s))return;if((0,c.F0)(e)?s=function(e,t){if(t.response?.status===429)return e.formatMessage({id:"O57kaK",defaultMessage:"Error 429: Too many requests. Please wait a moment and try again. If the issue persists, consider adjusting your request frequency or reaching out to support for assistance."});{let e=t.response?.data;return e?.message??e}}(a,e):e instanceof Error&&(s=function(e,t){if(t&&e.cause&&"string"==typeof e.cause)return e.cause;if("SqlQueryError"!==e.name)return e.message;var r=e.message;let a=r.match(/Details:\s*([^,]*)/);if(a&&a.length>=0)return a[0];return r}(e,r)),o()(s)){var l=s,p=a,f=t,g=i;if(l.includes("Catalog namespace is not supported")||l.includes("Unity catalog is not enabled"))switch((0,u.G)(f,g)){case u.M.ONLY_CLUSTER:return p.formatMessage({id:"Z2EuPV",defaultMessage:"This cluster is incompatible with sample data for Unity Catalog tables. Please use Databricks Runtime 11.1 or higher or contact Databricks for assistance."});case u.M.ONLY_WAREHOUSE:return p.formatMessage({id:"Uvfp1K",defaultMessage:"This warehouse is incompatible with sample data for Unity Catalog tables. Please use Databricks Runtime 11.1 or higher or contact Databricks for assistance."});case u.M.WAREHOUSE_AND_CLUSTER:return p.formatMessage({id:"u0m7LZ",defaultMessage:"This warehouse or cluster is incompatible with sample data for Unity Catalog tables. Please use Databricks Runtime 11.1 or higher or contact Databricks for assistance."});default:return""}let e=l.match(d);if(e)return e[0].trim();return l}return JSON.stringify(s)},[e,a,r,t,i])||""}},886688:(e,t,r)=>{"use strict";r.d(t,{U:()=>l,u:()=>c});var a=r(689262),n=r(686560),i=r(709262),o=r(805287);let s=()=>(0,o.gz)({cloud:"AWS",userCanUseDatabricksWorkspace:(0,n.d)("userCanUseDatabricksWorkspace_new",!1),userCanUseSqlService:(0,n.d)("userCanUseSqlService_new",!1),enableSqlService:(0,a.b)("enableSqlService",(0,n.d)("enableSqlService",!1),()=>(0,n.d)("dbSqlEnabled_new",!1)),centralizedLoginEnabled:(0,n.d)("centralizedLoginEnabled",!1)}),l=()=>s()[i.EU].availableInEnvironment,c=()=>s()[i.EU].allowed},907046:(e,t,r)=>{"use strict";r.d(t,{n:()=>i});var a=r(610435),n=r(939578);let i=e=>{let{name:t,children:r,...i}=e;return(0,a.FD)(a.FK,{children:[(0,a.Y)(n.y,{...i,children:t}),r]})}},913573:(e,t,r)=>{"use strict";r.d(t,{A:()=>m});var a=r(610435),n=r(692738),i=r(923305),o=r(794938),s=r(6e4),l=r(497937),c=r(497895),d=r(79128),u=r(846007),p=r(217985),f=r(349297);let g=n.forwardRef(({noBasePath:e=!1,children:t,onClick:r,href:d,to:g,componentId:m,...h},b)=>{let v,y=(0,l.Zp)(),E=(0,s.CV)(),{theme:I}=(0,c.wn)(),S=(0,n.useCallback)(e=>{r&&r(e),e.defaultPrevented||(0,f.A)(e,y)},[r,y]);if(g&&!E){if("string"==typeof g&&(0,i.Eq)(g))throw Error("<Link to={...}> format does not accept absolute URLs. Please <ExternalLink> instead.");let{pathname:e,search:t,hash:r}=(0,u.t4)(g);v=`${e??"/"}${t??""}${r??""}`}else if(d){let t=d.startsWith("/#");v=(0,o.E)(d,e||t)}let T={color:I.colors.actionTertiaryTextDefault,textDecoration:"none",...h.style};return E&&g?(0,a.Y)(p.N,{to:g,onClick:r,componentId:m,...h,ref:b,style:T,asAnchorTag:!0,children:t}):(0,a.Y)("a",{...h,href:v,ref:b,onClick:S,style:T,children:t})});g.Button=function({children:e,noBasePath:t=!1,onClick:r,...i}){i.href&&(i={...i,href:(0,o.E)(i.href,t)});let s=(0,l.Zp)(),c=(0,n.useCallback)(e=>{r&&r(e),e.defaultPrevented||(0,f.A)(e,s)},[r,s]);return(0,a.Y)(d.$n,{...i,onClick:c,children:e})};let m=g},920174:(e,t,r)=>{"use strict";r.d(t,{E:()=>i});var a=r(441535),n=r(886688);function i(){let e=(0,a.W)("databricks.warehouses.defaultWarehouseSettingEnabled",!1),t=(0,a.W)("databricks.fe.warehouses.defaultWarehouseSettingUIEnabled",!1),r=(0,a.W)("default_wh_setting",!1);return e&&(r||t)&&(0,n.u)()}},936743:(e,t,r)=>{"use strict";r.d(t,{G:()=>s,l:()=>o});var a=r(610435),n=r(692738),i=r(62947);let o=e=>{switch(e.kind){case"group":return{group_name:e.name,group_id:e.id};case"user":return{user_name:e.name,user_id:e.id};case"serviceprincipal":return{service_principal_display_name:e.displayName,service_principal_id:e.id,service_principal_name:e.applicationId}}},s=({onUpdate:e,onUpdateSubject:t,showAccountLevelEntities:r,...s})=>{let l=(0,n.useCallback)(r=>{let a;Array.isArray(r)?a=r.map(e=>o(e)):void 0!==r&&(a=o(r)),e&&e(a),t&&t(r)},[e,t]);return(0,a.Y)(i.T,{enableAccountGroups:!!r,enableAccountServicePrincipals:!!r,enableAccountUsers:!!r,enableWorkspaceGroups:!r,enableWorkspaceServicePrincipals:!r,enableWorkspaceUsers:!r,onUpdate:e||t?l:void 0,...s})}},939578:(e,t,r)=>{"use strict";r.d(t,{y:()=>o});var a=r(610435),n=r(545251),i=r(605107);let o=({children:e,...t})=>{let{isInsideDialogCombobox:r}=(0,n.w)();if(!r)throw Error("`DialogComboboxSectionHeader` must be used within `DialogCombobox`");return(0,a.Y)(i.X,{...t,children:e})}},962664:(e,t,r)=>{"use strict";r.d(t,{N:()=>u});var a=r(610435),n=r(692738),i=r(768622),o=r(332702),s=r(497895),l=r(161330),c=r(174541),d=r(574132);let u=(0,n.forwardRef)(({item:e,index:t,comboboxState:r,selectedItems:u,selectedMatcher:p,textOverflowMode:f="multiline",isDisabled:g,disabledReason:m,hintContent:h,onClick:b,children:v,...y},E)=>{let{highlightedIndex:I,getItemProps:S,isOpen:T}=r,_=I===t,{theme:A}=(0,s.wn)(),R=p?u.some(t=>p(t,e)):u.includes(e),C=(0,n.useRef)(null);(0,n.useImperativeHandle)(E,()=>C.current);let{onClick:O,...w}=S({item:e,index:t,disabled:g,onMouseUp:e=>{e.stopPropagation(),y.onMouseUp?.(e)},ref:C});return(0,n.useEffect)(()=>{if(T&&I===t&&C.current){let e=C.current.closest("ul");if(!e)return;let t=e.scrollTop,r=e.scrollTop+e.clientHeight,a=C.current.offsetTop,n=C.current.offsetTop+C.current.clientHeight;(a<t||n>r)&&C.current?.scrollIntoView({block:"nearest"})}},[I,t,T,C]),(0,a.Y)("li",{role:"option","aria-selected":R,disabled:g,onClick:e=>{b?.(e),O(e)},css:[(0,c.RB)(A),(0,i.Jq)(A,_,g)],...w,...y,children:(0,a.Y)(o.Sc,{componentId:"codegen_design-system_src_design-system_typeaheadcombobox_typeaheadcomboboxcheckboxitem.tsx_92",disabled:g,isChecked:R,css:(0,c.WS)(A,f),tabIndex:-1,onClick:e=>{e.stopPropagation()},children:(0,a.FD)("label",{children:[g&&m?(0,a.FD)("div",{css:{display:"flex"},children:[(0,a.Y)("div",{children:v}),(0,a.Y)("div",{css:(0,c.eO)(A),children:(0,a.Y)(l.I,{componentId:"typeahead-combobox-checkbox-item-disabled-reason-info-tooltip",content:m})})]}):v,(0,a.Y)(d.y,{disabled:g,children:h})]})})})});u.defaultProps={_type:"TypeaheadComboboxCheckboxItem"}},988947:(e,t,r)=>{"use strict";r.d(t,{KI:()=>m,N0:()=>o,hD:()=>u,j3:()=>c,kI:()=>l,o9:()=>f,qJ:()=>p,to:()=>d});var a=r(737358),n=r(488655),i=r(169e3);let o="shareName";function s(e){return`/explore/${e}`}function l(e){let t=e?`?isEditOrganizationNameModalOpen=${e}`:"",r=s(i.eR.path);return`${r}${t}`}function c(){return s(i.Xz.path)}function d(e){return(0,a.tW)(s(i.ne.path),{share:encodeURIComponent(e)})}function u(e,t){let r=t?`?${o}=${t}`:"",n=(0,a.tW)(s(i.Do.path),{provider:encodeURIComponent(e)});return`${n}${r}`}function p(e,t){return(0,a.tW)(s(i.uC.path),{provider:encodeURIComponent(e),share:encodeURIComponent(t)})}function f(){return s(i.sf.path)}function g(e){return(0,a.tW)(s(i.VH.path),{recipient:encodeURIComponent(e)})}function m(){let e=(0,n.Zp)();return{navigateToSharedByMe:function(){e(l())},navigateToSharedWithMe:function(){e(c())},navigateToShareDetails:function(t){e(d(t))},getShareDetailsUrl:d,navigateToProviderDetails:function(t){e(u(t))},getProviderUrl:u,navigateToProvidersList:function(){e(c())},navigateToEditDataAssets:function(t){e((0,a.tW)(s(i.Xp.path),{share:encodeURIComponent(t)}))},navigateToEditNotebook:function(t){e((0,a.tW)(s(i.BK.path),{share:encodeURIComponent(t)}))},navigateToRecipient:function(t){e(g(t))},navigateToProviderShareDetails:function(t,r){e(p(t,r))},getRecipientUrl:g,navigateToRecipientsList:function(){e(f())},navigateToShareCreation:function(){e(s(i.O1.path))}}}},999157:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",d:"M11.5.94 7.47 4.97l1.06 1.06 2.22-2.22v8.38L8.53 9.97l-1.06 1.06 4.03 4.03 4.03-4.03-1.06-1.06-2.22 2.22V3.81l2.22 2.22 1.06-1.06zM6 3.5H1V5h5zM6 11.5H1V13h5zM1 7.5h5V9H1z"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="SortUnsortedIcon";let l=s}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/80702.d4512f35ce.chunk.js.map