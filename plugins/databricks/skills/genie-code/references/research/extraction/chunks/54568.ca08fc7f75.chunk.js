"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[54568],{7319:(e,t,a)=>{a.d(t,{_:()=>o,h:()=>i});var r=a(692738),n=a(879612);function i(e){if(!e)return!1;return"CONNECTION_HTTP_OAUTH_U2M_MAPPING"===e||"CONNECTION_HTTP_DCR"===e||"CONNECTION_SLACK_OAUTH_U2M_MAPPING"===e}function o(e){let t=(0,n.x5)({isUcEnabled:!0});return(0,r.useMemo)(()=>{if(!e)return!1;if(t.data?.kinds){let a=t.data.kinds.find(t=>t.securable_kind===e);return a?.capabilities?.includes("HAS_GENERIC_ACCESS_TOKEN_FLOW")??!1}return i(e)},[e,t.data])}},12872:(e,t,a)=>{a.d(t,{Q:()=>m,h:()=>p});var r=a(595615),n=a(733337),i=a(660618),o=a(886100),s=a(22191),l=a(747129),c=a(412836);function d(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}let u="list_delta_sharing_shares_in_catalog";function p(){let{invalidate:e}=(0,r.rA)();return t=>{e([u,t])}}function m(e,t){return(0,c.IT)([u,e],()=>{var t;return(t=function*(){try{let t=yield(0,n.nr)(`${i.EA}/catalogs/${e}/shares`);return t?.shares??[]}catch(e){return o.iT.sev2BurnRate(s.Es.DeltaSharing,"data_explorer.delta_sharing.list_shares_in_catalog_error",l.i1.P99,l.Ip.Min10,!1,e?.response?.data??e),[]}},function(){var e=this,a=arguments;return new Promise(function(r,n){var i=t.apply(e,a);function o(e){d(i,r,n,o,s,"next",e)}function s(e){d(i,r,n,o,s,"throw",e)}o(void 0)})})()},t)}},21255:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M5.5 6a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="StopCircleIcon";let l=s},26446:(e,t,a)=>{a.d(t,{HT:()=>d,M8:()=>u,Pf:()=>s,bp:()=>l,gb:()=>r,iN:()=>c,pP:()=>n,xB:()=>p});let r=1e3,n={enableAccountGroups:!1,enableAccountServicePrincipals:!1,enableAccountUsers:!1,enableWorkspaceGroups:!1,enableWorkspaceServicePrincipals:!1,enableWorkspaceUsers:!1},i=/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,o={admins:"Admins",users:"All workspace users","account users":"All account users"},s=e=>{if(!e)return e;return o[e]??e},l=e=>{let t=new Map;return e.forEach(e=>{let a=d(e)||e.name;t.has(a)||t.set(a,[]),t.get(a)?.push(e)}),t},c=e=>{switch(e.kind){case"user":return e.fullName;case"serviceprincipal":return e.name;case"group":return e.displayName;default:return""}},d=e=>{switch(e.kind){case"user":case"group":return e.name||"";case"serviceprincipal":return e.applicationId||"";default:return""}},u=({uniqueName:e,id:t,kind:a,displayName:r})=>{switch(a){case"user":return{id:t||"",optionId:`user.${t}`,kind:a,name:e||"",fullName:r||"",title:""};case"serviceprincipal":return{id:t||"",optionId:`serviceprincipal.${t}`,kind:a,name:r||"",applicationId:e||"",title:""};case"group":return{id:t||"",optionId:`group.${t}`,kind:a,name:e||"",displayName:s(e||""),title:""};default:return}};function p(e){return e?i.test(e)?"serviceprincipal":"user":void 0}},30975:(e,t,a)=>{a.d(t,{u:()=>c});var r=a(412836),n=a(927239),i=a(595615),o=a(660618),s=a(733337);function l(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}function c(){let{invalidate:e}=(0,i.rA)();return(0,r.n_)(e=>{var t;return(t=function*(){return yield(0,s.nr)(`${o.bY}/catalogs`,{method:"POST",body:JSON.stringify({...e,storage_root:e.storage_root?encodeURI(e.storage_root):void 0})})},function(){var e=this,a=arguments;return new Promise(function(r,n){var i=t.apply(e,a);function o(e){l(i,r,n,o,s,"next",e)}function s(e){l(i,r,n,o,s,"throw",e)}o(void 0)})})()},{onSuccess:()=>{e([n.xQ])}})}},38301:(e,t,a)=>{a.d(t,{$:()=>S,V:()=>T});var r=a(610435);a(692738);var n=a(497895),i=a(382908),o=a(964133),s=a(332702),l=a(339518),c=a(407374),d=a(126927),u=a(342411),p=a(817148),m=a(115957),g=a(819524),f=a(441535),h=a(657825),b=a(217985),v=a(850723),y=a(641760),E=a(633203),_=a(759838);function S({form:e,onChange:t,securableType:a,renderDatabricksManagedStorageUI:I,showHint:C=!0,description:A}){let R=(0,u.tz)(),{theme:w}=(0,n.wn)(),{databricksManagedStorage:x,storage_root:O,storage_sub_path:M}=e.watch(),L=(0,v.O)().data?.region??"",k=!(0,y.sJ)()||(0,h.fo)()===h.hQ.ServerlessOnly,N=T(L)&&((0,f.W)("enable_arclight",null)??(0,f.W)("databricks.fe.accountsui.enableDatabricksManagedStorageUIInCatalogCreation",!1))&&(0,m.zl)(p.g3.CATALOG_DEFAULT_STORAGE)&&k,D=(0,_.Hi)("/explore/locations/create","/"),P=(0,r.Y)(u.sA,{id:"ZqI9g7",defaultMessage:"Catalogs that use default storage are only accessible from this workspace by default. You can grant other workspaces access, but they must use serverless compute to access data in the catalog. <linkText>Learn more.</linkText>",values:{linkText:e=>(0,r.Y)(i.o.Link,{href:g.Ay.DEFAULT_STORAGE,target:"_blank",componentId:"uc_entity.storage_location.default_storage_binding_alert.learn_more_link",children:e})}});return(0,r.FD)("div",{children:[(0,r.Y)(o.D.Label,{htmlFor:"storage_root",children:R.formatMessage({id:"zlkkH+",defaultMessage:"Storage location"})}),(0,r.FD)("div",{css:{display:"flex",flexDirection:"column",gap:w.spacing.md},children:[A&&(0,r.Y)(o.D.Hint,{children:A}),N&&I&&(0,r.Y)(s.Sc,{componentId:"codegen_web-shared_src_metastore_uc_components_storagelocation.tsx_59",isChecked:x,onChange:e=>{t("databricksManagedStorage",e)},children:(0,r.Y)(u.sA,{id:"y/NQmc",defaultMessage:"Use default storage "})}),(0,y.mC)()&&x&&(0,r.Y)(l.F,{componentId:"uc_entity.storage_location.default_storage_binding_alert",message:P,type:"info"}),(!N||!x)&&(0,r.FD)(r.FK,{children:[C&&(0,r.Y)(o.D.Hint,{children:R.formatMessage({id:"yzS8mp",defaultMessage:"Cloud storage location used for managed tables and volumes in this catalog. If not specified, it defaults to the metastore root location."})}),(0,r.FD)("section",{css:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:w.spacing.xs,marginBottom:w.spacing.sm},children:[(0,r.Y)(E.Y,{value:O?.name,onChange:e=>{t("storage_root",e)}}),(0,r.Y)(c.p,{componentId:"codegen_web-shared_src_metastore_uc_components_storagelocation.tsx_104",type:"text",placeholder:R.formatMessage({id:"3vZbc1",defaultMessage:"sub/path"}),value:M,onChange:({target:{value:e}})=>{t("storage_sub_path",e)},"aria-label":R.formatMessage({id:"yVOx68",defaultMessage:"Subpath"})}),(0,r.FD)(b.N,{componentId:"create-external-location-link",target:"_blank",to:D,asTypographyLink:!0,children:[R.formatMessage({id:"tvzOlX",defaultMessage:"Create a new external location"})," ",(0,r.Y)(d.A,{})]})]}),O&&(0,r.Y)("section",{css:{padding:`${w.spacing.sm}px ${w.spacing.md}px`,margin:`${w.spacing.sm}px 0`,background:w.colors.backgroundSecondary,borderRadius:w.legacyBorders.borderRadiusMd},children:(0,r.Y)(i.o.Text,{children:(0,_.xT)(O?.url,M)})})]})]})]})}function T(e){if((0,f.W)("databricks.objectstoragelm.skipArclightAvailableRegionsCheck",!1))return!0;let t=JSON.parse((0,f.W)("databricks.objectstoragelm.arclightAvailableRegions",null));if(null===t)return!0;return t.includes(e)}},39566:(e,t,a)=>{a.d(t,{B8:()=>c,DI:()=>l,RX:()=>u,TW:()=>p,Wd:()=>s,od:()=>d});var r,n,i,o,s=((r={}).SAAS="saas",r.DB="db",r.BRICKSTORE="brickstore",r.COMMUNITY="community",r.FOREIGN_CATALOG="foreign_catalog",r.FILESYSTEM="filesystem",r),l=((n={}).QUERY="query",n.CDC="cdc",n);let c={MYSQL:"MYSQL",POSTGRESQL:"POSTGRESQL",SQLSERVER:"SQLSERVER",SALESFORCE:"SALESFORCE",WORKDAY_RAAS:"WORKDAY_RAAS",GA4_RAW_DATA:"GA4_RAW_DATA",SERVICENOW:"SERVICENOW",MANAGED_POSTGRESQL:"MANAGED_POSTGRESQL",ORACLE:"ORACLE",SHAREPOINT:"SHAREPOINT",DYNAMICS365:"DYNAMICS365",TERADATA:"TERADATA",NETSUITE:"NETSUITE",GENERIC_LAKEFLOW_CONNECT:"GENERIC_LAKEFLOW_CONNECT",JIRA:"JIRA",CONFLUENCE:"CONFLUENCE",GOOGLE_ADS:"GOOGLE_ADS",ZENDESK:"ZENDESK",HUBSPOT:"HUBSPOT",SALESFORCE_MARKETING_CLOUD:"SALESFORCE_MARKETING_CLOUD",META_MARKETING:"META_MARKETING",OUTLOOK:"OUTLOOK",JDBC:"JDBC",FOREIGN_CATALOG:"FOREIGN_CATALOG",REDSHIFT:"REDSHIFT",SNOWFLAKE:"SNOWFLAKE",SYNAPSE:"SYNAPSE",BIGQUERY:"BIGQUERY",TIKTOK_ADS:"TIKTOK_ADS",WORKDAY_HCM:"WORKDAY_HCM",GITHUB:"GITHUB",SMARTSHEET:"SMARTSHEET",VEEVA_VAULT:"VEEVA_VAULT"},d={MYSQL:"MYSQL",POSTGRESQL:"POSTGRESQL",SQLSERVER:"SQLSERVER",SALESFORCE:"SALESFORCE",WORKDAY_RAAS:"WORKDAY_RAAS",GA4_RAW_DATA:"GA4_RAW_DATA",SERVICENOW:"SERVICENOW",MANAGED_POSTGRESQL:"MANAGED_POSTGRESQL",ORACLE:"ORACLE",SHAREPOINT:"SHAREPOINT",DYNAMICS365:"DYNAMICS365",TERADATA:"TERADATA",NETSUITE:"NETSUITE",GENERIC_LAKEFLOW_CONNECT:"GENERIC_LAKEFLOW_CONNECT",JIRA:"JIRA",CONFLUENCE:"CONFLUENCE",GOOGLE_ADS:"GOOGLE_ADS",ZENDESK:"ZENDESK",HUBSPOT:"HUBSPOT",SALESFORCE_MARKETING_CLOUD:"SALESFORCE_MARKETING_CLOUD",WORKDAY_HCM:"WORKDAY_HCM",META_MARKETING:"META_MARKETING",OUTLOOK:"OUTLOOK",JDBC:"JDBC",FOREIGN_CATALOG:"FOREIGN_CATALOG",REDSHIFT:"REDSHIFT",SNOWFLAKE:"SNOWFLAKE",SYNAPSE:"SYNAPSE",BIGQUERY:"BIGQUERY",TIKTOK_ADS:"TIKTOK_ADS",GITHUB:"GITHUB",SMARTSHEET:"SMARTSHEET",VEEVA_VAULT:"VEEVA_VAULT",ZENDESK_COMMUNITY:"ZENDESK_COMMUNITY",GITHUB_COMMUNITY:"GITHUB_COMMUNITY",STRIPE_COMMUNITY:"STRIPE_COMMUNITY",HUBSPOT_COMMUNITY:"HUBSPOT_COMMUNITY",ZOHO_CRM_COMMUNITY:"ZOHO_CRM_COMMUNITY"};var u=((i={}).CONNECTION="connection",i.PIPELINE="pipeline",i.GATEWAY="gateway",i.VALIDATION="validation",i.SOURCE="source",i.DESTINATION="destination",i.SCHEDULE="schedule",i.BRICKSTORE_SOURCE="brickstore_source",i.DESTINATION_WITH_PIPELINE="destination_with_pipeline",i.PIPELINE_CONFIGURATION="pipeline_configuration",i.REPORT="report",i.DATABASE_SETUP="database_setup",i.COMMUNITY_CONFIG="community_config",i.FOREIGN_CATALOG_SOURCE="foreign_catalog_source",i),p=((o={}).PREVIEW="preview",o.COMMUNITY="community",o.NOTEBOOK="notebook",o.MANAGED_INGESTION="mi",o)},40938:(e,t,a)=>{a.d(t,{Y:()=>n});var r=a(441535);function n(){return(0,r.W)("databricks.fe.tagpolicy.enableV2TagPolicyAPIs",!1)}},55079:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",d:"M12.5 8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CircleIcon";let l=s},55749:(e,t,a)=>{a.d(t,{F:()=>r,X:()=>n});class r extends Error{constructor(e,t){super(e),this.name="SqlQueryError",this.cause=t}}let n=1e6},74348:(e,t,a)=>{a.d(t,{h:()=>y});var r=a(610435),n=a(692738),i=a(441535),o=a(140718),s=a(342411),l=a(125230),c=a(350318);let d=({value:e,onChange:t,error:a,...n})=>{let i=(0,s.tz)(),d=(0,c.ce)(),{data:u,isLoading:p}=(0,l.Nx)({enabled:d,pageSize:l.Ml});return(0,r.Y)(o.XA,{allowClear:!0,width:"100%",value:e,onChange:e=>t(e.target.value),label:i.formatMessage({id:"Dh2KGp",defaultMessage:"Project"}),placeholder:i.formatMessage({id:"aerQeA",defaultMessage:"Select project"}),contentProps:{matchTriggerWidth:!0,loading:d&&p},validationState:a?"error":void 0,...n,children:u?.map(e=>(0,r.Y)(o.wS,{value:e.id,children:(0,r.Y)("span",{children:e.name})},e.id))})};var u=a(466213),p=a(497895),m=a(996648),g=a(927802),f=a(684944),h=a(461815),b=a(768622);let v=({id:e,onChange:t,error:a})=>{let i=(0,s.tz)(),{theme:o}=(0,p.wn)(),[d,v]=(0,u.d7)("",300),y=(0,c.ce)(),{data:E,isLoading:_}=(0,l.Nx)({enabled:y,pageSize:l.Ml,filter:d}),S=(0,n.useCallback)(e=>{t(e?.id)},[t]),T=(0,m.SY)({componentId:"web-shared.brickstore.DatabaseProjectSelectV2",allItems:E??[],items:E??[],setItems:()=>{},itemToString:e=>e?.name??"",formOnChange:S});(0,n.useEffect)(()=>{v(T.inputValue.trim())},[v,T.inputValue]);let I={"&.error":{borderColor:`${o.colors.red500} !important`}};return(0,r.FD)(g.h,{id:e,multiSelect:!1,comboboxState:T,children:[(0,r.Y)(f.$,{formOnChange:S,placeholder:i.formatMessage({id:"aerQeA",defaultMessage:"Select project"}),className:a?"error":"",dangerouslyAppendEmotionCSS:I,comboboxState:T}),(0,r.Y)(h.i,{width:300,loading:y&&_,comboboxState:T,children:E?.map((e,t)=>(0,r.Y)(b.bb,{item:e,index:t,comboboxState:T,children:e.name},`project-${e.id}`))})]})},y=e=>{let t=(0,n.useMemo)(()=>(0,i.W)("databricks.fe.lakebase.useDatabaseProjectSelectV2",!1)?v:d,[]);return(0,r.Y)(t,{...e})}},75036:(e,t,a)=>{a.d(t,{e:()=>o,s:()=>i});var r,n=a(696514),i=((r={}).DONE="done",r.CANCELED="canceled",r);let o=(0,n.fH)("Filebrowser::SelectFolderNode")},84008:(e,t,a)=>{a.d(t,{n:()=>p});var r=a(610435),n=a(956935),i=a(783772),o=a.n(i),s=a(692738),l=a(325056),c=a(114826),d=a(497895),u=a(382908);let p=(0,s.forwardRef)(function({children:e,className:t,ellipsis:a=!1,multiline:i=!1,align:p="left",style:m,wrapContent:g=!0,...f},h){let{size:b,grid:v}=(0,s.useContext)(l.G),{classNamePrefix:y}=(0,d.wn)(),E=(0,n.AH)({[`& > .${y}-typography > a.${y}-typography-ellipsis`]:{display:"block"}}),_="md";"small"===b&&(_="sm");let S=!0===g?(0,r.Y)(u.o.Text,{ellipsis:!i,size:_,title:!i&&"string"==typeof e&&e||void 0,css:{"&:has(> button)":{overflow:"visible"}},children:e}):e;return(0,r.Y)("div",{...f,role:"cell",style:{textAlign:p,...m},ref:h,css:[v?void 0:c.PV.cell,E],className:o()(v&&c.lH.cell,t),children:S})})},89930:(e,t,a)=>{a.d(t,{Db:()=>o,gX:()=>i,hy:()=>s,oZ:()=>l});var r=a(483588),n=a(671045);let i=({columnBucket:e,tableBucket:t,columnQueryCount:a,tableQueryCount:r})=>Math.min(e??0,t??0,(({columnQueryCount:e,tableQueryCount:t})=>{if(!e||!t||t<=0)return 0;let a=e/t*100;if(a<=0)return 0;if(a<=25)return 1;if(a<=50)return 2;if(a<=75)return 3;return 4})({columnQueryCount:a,tableQueryCount:r})),o=({columnQueryCount:e,tableQueryCount:t,isClickable:a=!1,intl:r})=>{let n=r.formatMessage({id:"NIm01M",defaultMessage:"See usage for this column"}),i=e??0;if(0===i)return a?r.formatMessage({id:"fmryUW",defaultMessage:"No queries have yet been captured on this column in the last 30 days. Click for more insights"}):r.formatMessage({id:"gylyKN",defaultMessage:"No queries have yet been captured on this column in the last 30 days"});if(isNaN(i)||!t||t<=0)return n;let o=Math.min(100,Math.max(1,Math.round(i/t*100)));return a?r.formatMessage({id:"7A/90s",defaultMessage:"This column was used in approximately {percent}% of queries against this table in the last 30 days. Click for more insights"},{percent:o}):r.formatMessage({id:"z7Lmut",defaultMessage:"This column was used in approximately {percent}% of queries against this table in the last 30 days"},{percent:o})},s=({queryCount:e,popularity:t,isClickable:a=!1,intl:r})=>{let n,i=r.formatMessage({id:"JVq8l2",defaultMessage:"See usage for this table"});if(void 0===e)return i;return isNaN(e)||(n=0===e?r.formatMessage({id:"x+j+M+",defaultMessage:"No queries have yet been captured on this table in the last 30 days"}):r.formatMessage({id:"8DmFUj",defaultMessage:"This table has been queried at least {queryCount, plural, one {# time} other {# times} } in the last 30 days"},{queryCount:e})),a&&n&&(n=n.concat(r.formatMessage({id:"CzYO1f",defaultMessage:". Click for more insights"}))),n??i},l=({count:e,bucket:t,intl:a,countMetric:i,securableKind:o})=>({[r.iId.TABLE]:i===n.w.VIEWER_COUNT?"TABLE_METRIC_VIEW"===o?a.formatMessage({id:"n2sS6p",defaultMessage:"This metric view has been viewed by at least {count, plural, one {# user} other {# users} } in the last 30 days"},{count:e}):a.formatMessage({id:"06HVYV",defaultMessage:"This table has been viewed by at least {count, plural, one {# user} other {# users} } in the last 30 days"},{count:e}):s({queryCount:e,popularity:t,intl:a}),[r.iId.NOTEBOOK]:a.formatMessage({id:"up06C0",defaultMessage:"This notebook has been viewed by at least {count, plural, one {# user} other {# users} } in the last 30 days"},{count:e}),[r.iId.DASHBOARD_LAKEVIEW]:a.formatMessage({id:"o7g13p",defaultMessage:"This dashboard has been viewed by at least {count, plural, one {# user} other {# users} } in the last 30 days"},{count:e}),[r.iId.DASHBOARD_REDASH]:a.formatMessage({id:"o7g13p",defaultMessage:"This dashboard has been viewed by at least {count, plural, one {# user} other {# users} } in the last 30 days"},{count:e}),[r.iId.FILE]:a.formatMessage({id:"hLPovQ",defaultMessage:"This file has been viewed by at least {count, plural, one {# user} other {# users} } in the last 30 days"},{count:e}),[r.iId.FOLDER]:a.formatMessage({id:"+XB365",defaultMessage:"This folder has been viewed by at least {count, plural, one {# user} other {# users} } in the last 30 days"},{count:e}),[r.iId.LIBRARY]:a.formatMessage({id:"yYdVPD",defaultMessage:"This library has been viewed by at least {count, plural, one {# user} other {# users} } in the last 30 days"},{count:e}),[r.iId.PROJECT]:a.formatMessage({id:"VmkKtc",defaultMessage:"This repo has been viewed by at least {count, plural, one {# user} other {# users} } in the last 30 days"},{count:e}),[r.iId.MLFLOW_EXPERIMENT]:a.formatMessage({id:"hjsRhh",defaultMessage:"This experiment has been viewed by at least {count, plural, one {# user} other {# users} } in the last 30 days"},{count:e}),[r.iId.QUERY]:a.formatMessage({id:"TaSoSI",defaultMessage:"This query has been viewed by at least {count, plural, one {# user} other {# users} } in the last 30 days"},{count:e}),[r.iId.ALERT]:a.formatMessage({id:"PwWBnw",defaultMessage:"This alert has been viewed by at least {count, plural, one {# user} other {# users} } in the last 30 days"},{count:e}),[r.iId.JOB]:a.formatMessage({id:"mEXWFB",defaultMessage:"This job has been viewed by at least {count, plural, one {# user} other {# users} } in the last 30 days"},{count:e}),[r.iId.PIPELINE]:a.formatMessage({id:"26U/lw",defaultMessage:"This pipeline has been viewed by at least {count, plural, one {# user} other {# users} } in the last 30 days"},{count:e}),[r.iId.DATA_ROOM]:a.formatMessage({id:"cBhMJm",defaultMessage:"This Genie space has been viewed by at least {count, plural, one {# user} other {# users} } in the last 30 days"},{count:e}),[r.iId.ML_MODEL]:a.formatMessage({id:"eDq5Nr",defaultMessage:"This model has been viewed by at least {count, plural, one {# user} other {# users} } in the last 30 days"},{count:e}),[r.iId.FUNCTION]:a.formatMessage({id:"SfdV3R",defaultMessage:"This function has been viewed by at least {count, plural, one {# user} other {# users} } in the last 30 days"},{count:e}),[r.iId.VOLUME]:a.formatMessage({id:"6fXwcS",defaultMessage:"This volume has been viewed by at least {count, plural, one {# user} other {# users} } in the last 30 days"},{count:e})})},104787:(e,t,a)=>{a.d(t,{F:()=>l});var r=a(610435),n=a(692738),i=a(79128),o=a(786504),s=a(998258);let l=(0,n.forwardRef)(({authz:e,...t},a)=>{let{action:n,tooltip:l}=e,c=(0,o.Pu)().authorize(n),{isLoading:d,response:u,error:p}=c,m=!d&&(p||u?.authorized),g={...t,disabled:t.disabled||!m},f={...l,...t.tooltip};return(0,r.Y)(s.s8,{authorization:c,tooltip:f,disabled:t.disabled,children:(0,r.Y)(i.$n,{...g,ref:a})})})},109581:(e,t,a)=>{a.d(t,{Lb:()=>s,S:()=>l});var r=a(638600),n=a(953902),i=a(402868),o=a(902969);function s(e,t){return(0,n.j7)(()=>18===o.x.reactRenderVersion,{oldHook:r.N4,newHook:c})(t)}let l=r.N4;function c(e){let t=(0,i.O)(e.data),a=(0,i.O)(e.columns);return(0,r.N4)({...e,data:t,columns:a})}},114826:(e,t,a)=>{a.d(t,{Ay:()=>g,M0:()=>m,PV:()=>d,TJ:()=>u,lH:()=>c,yA:()=>p});var r=a(956935),n=a(469723),i=a.n(n),o=a(322560),s=a.n(o);function l(){return s()(20,()=>i()(35).toString(36)).join("")}let c={cell:`js--ds-table-cell-${l()}`,header:`js--ds-table-header-${l()}`,row:`js--ds-table-row-${l()}`},d={cell:(0,r.AH)({display:"inline-grid",position:"relative",flex:1,boxSizing:"border-box",paddingLeft:"var(--table-spacing-sm)",paddingRight:"var(--table-spacing-sm)",wordBreak:"break-word",overflow:"hidden","& .anticon":{verticalAlign:"text-bottom"}}),header:(0,r.AH)({fontWeight:"bold",alignItems:"flex-end",display:"flex",overflow:"hidden","&[aria-sort]":{cursor:"pointer",userSelect:"none"},".table-header-text":{color:"var(--table-header-text-color)"},".table-header-icon-container":{color:"var(--table-header-sort-icon-color)",display:"none"},"&[aria-sort]:hover":{".table-header-icon-container, .table-header-text":{color:"var(--table-header-focus-color)"}},"&[aria-sort]:active":{".table-header-icon-container, .table-header-text":{color:"var(--table-header-active-color)"}},'&:hover, &[aria-sort="ascending"], &[aria-sort="descending"]':{".table-header-icon-container":{display:"inline"}}}),row:(0,r.AH)({display:"flex","&.table-isHeader":{"> *":{backgroundColor:"var(--table-header-background-color)"},".table-isScrollable &":{position:"sticky",top:0,zIndex:1}},'.table-row-select-cell input[type="checkbox"] ~ *':{opacity:"var(--row-checkbox-opacity, 0)"},"&:not(.table-row-isGrid)&:hover":{"&:not(.table-isHeader)":{backgroundColor:"var(--table-row-hover)"},'.table-row-select-cell input[type="checkbox"] ~ *':{opacity:1}},'.table-row-select-cell input[type="checkbox"]:focus ~ *':{opacity:1},"> *":{paddingTop:"var(--table-row-vertical-padding)",paddingBottom:"var(--table-row-vertical-padding)",borderBottom:"1px solid",borderColor:"var(--table-separator-color)"},"&.table-row-isGrid > *":{borderRight:"1px solid",borderColor:"var(--table-separator-color)"},"&.table-row-isGrid > :first-of-type":{borderLeft:"1px solid",borderColor:"var(--table-separator-color)"},"&.table-row-isGrid.table-isHeader:first-of-type > *":{borderTop:"1px solid",borderColor:"var(--table-separator-color)"}})},u=`hide-icon-button-${l()}`,p=`skip-hide-icon-button-${l()}`,m=(0,r.AH)({[`.${u} button.${p}`]:{opacity:"1 !important",transition:"opacity 0.1s ease !important"},[`.${u} button:has(> span.anticon[role="img"]:only-child),
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
    .${u} button[aria-expanded="true"]:has(i.fa:only-child),`]:{opacity:1}}),g={tableWrapper:(0,r.AH)({"&.table-isScrollable":{overflow:"auto"},display:"flex",flexDirection:"column",height:"100%",[`.${c.cell}`]:d.cell,[`.${c.header}`]:d.header,[`.${c.row}`]:d.row}),table:(0,r.AH)({".table-isScrollable &":{overflow:"auto"}}),headerButtonTarget:(0,r.AH)({alignItems:"flex-end",display:"flex",overflow:"hidden",width:"100%",justifyContent:"inherit","&:focus":{".table-header-text":{color:"var(--table-header-focus-color)"},".table-header-icon-container":{color:"var(--table-header-focus-color)",display:"inline"}},"&:active":{".table-header-icon-container, .table-header-text":{color:"var(--table-header-active-color)"}}}),sortHeaderIconOnRight:(0,r.AH)({marginLeft:"var(--table-spacing-xs)"}),sortHeaderIconOnLeft:(0,r.AH)({marginRight:"var(--table-spacing-xs)"}),checkboxCell:(0,r.AH)({display:"flex",alignItems:"center",flex:0,paddingLeft:"var(--table-spacing-sm)",paddingTop:0,paddingBottom:0,minWidth:"var(--table-spacing-md)",maxWidth:"var(--table-spacing-md)",boxSizing:"content-box !important",overflow:"hidden"}),resizeHandleContainer:(0,r.AH)({position:"absolute",right:-3,top:"var(--table-spacing-sm)",bottom:"var(--table-spacing-sm)",width:"var(--table-spacing-sm)",display:"flex",justifyContent:"center",cursor:"col-resize",userSelect:"none",touchAction:"none",zIndex:1}),resizeHandle:(0,r.AH)({width:1,background:"var(--table-resize-handle-color)"}),paginationContainer:(0,r.AH)({display:"flex",justifyContent:"flex-end",paddingTop:"var(--table-spacing-sm)",paddingBottom:"var(--table-spacing-sm)"})}},140718:(e,t,a)=>{a.d(t,{XA:()=>y,lQ:()=>S,wS:()=>_});var r=a(610435),n=a(692738),i=a(46e3),o=a(806773),s=a(370427),l=a(907046),c=a(99442),d=a(224098),u=a(545251),p=a(53333),m=a(661748);let g=(0,n.createContext)(void 0),f=[d.s7.OnValueChange,d.s7.OnView],h=[d.s7.OnValueChange],b=(e,t)=>{for(let a of n.Children.toArray(e))if(n.isValidElement(a)){if(a.type===_&&a.props.value===t)return a;if(a.props.children){let e=b(a.props.children,t);if(e)return e}}},v=(e,t)=>{let a=b(e,t);if(n.isValidElement(a))return a.props.children;return""},y=(0,n.forwardRef)(({defaultValue:e,name:t,placeholder:a,children:s,contentProps:l,onChange:u,onOpenChange:b,id:y,label:_,value:S,validationState:T,forceCloseOnEscape:I,componentId:C,analyticsEvents:A,valueHasNoPii:R,...w},x)=>{let O=(0,m.W)("databricks.fe.observability.defaultComponentView.simpleSelect",!1),[M]=(0,n.useState)(()=>{if(S)return v(s,S);return""}),L=(0,n.useRef)(null);(0,n.useImperativeHandle)(x,()=>L.current,[]);let k=(0,n.useRef)(S),[N,D]=(0,n.useState)(S),[P,$]=(0,n.useState)(M),U=void 0!==S,Y=(0,n.useMemo)(()=>A??(O?f:h),[A,O]),F=(0,d.ei)({componentType:d.v_.SimpleSelect,componentId:C,analyticsEvents:Y,valueHasNoPii:R}),{elementRef:H}=(0,p.z)({onView:F.onView,value:S??e});(0,n.useEffect)(()=>{void 0!==S&&S!==k.current&&(D(S),k.current=S)},[S]),(0,n.useEffect)(()=>{if(U)return;let t=L.current,a=e||t?.value||"";D(a),k.current=a},[U,e,S]),(0,n.useEffect)(()=>{$(v(s,N||""))},[N,s]);let G=(0,n.useCallback)(e=>{F.onValueChange(e),L.current?.setAttribute("value",e||""),D(e),$(v(s,e)),u&&u({target:{name:t,type:"select",value:e},type:"change"})},[F,s,u,t]),B=(0,n.useMemo)(()=>({value:N,onChange:G}),[N,G]),W=(0,n.useCallback)(()=>{G("")},[G]);return(0,r.Y)(g.Provider,{value:B,children:(0,r.Y)(i.l,{componentId:void 0,value:N,placeholder:a,label:_??w["aria-label"],id:y,children:(0,r.FD)(E,{onOpenChange:b,children:[(0,r.Y)(c.b,{ref:H,...w,validationState:T,onClear:W,id:y,value:N,...F.dataComponentProps,children:P||a}),(0,r.Y)("input",{type:"hidden",ref:L}),(0,r.Y)(o.g,{forceCloseOnEscape:I,...l,children:s})]})})})}),E=({children:e,onOpenChange:t})=>{let{isOpen:a}=(0,u.w)();return(0,n.useEffect)(()=>{t&&t(!!a)},[a,t]),(0,r.Y)(r.FK,{children:e})},_=(0,n.forwardRef)(({value:e,children:t,...a},i)=>{let o=(0,n.useContext)(g);if(!o)throw Error("SimpleSelectOption must be used within a SimpleSelect");let{onChange:l}=o,c=(0,n.useCallback)(({value:e})=>{l(e)},[l]);return(0,r.Y)(s.O,{...a,ref:i,value:e,onChange:c,children:t})}),S=({children:e,label:t,...a})=>{if(!(0,n.useContext)(g))throw Error("SimpleSelectOptionGroup must be used within a SimpleSelect");return(0,r.Y)(l.n,{...a,name:t,children:e})}},150190:(e,t,a)=>{a.d(t,{H:()=>s});var r=a(160603),n=a(733845),i=a(302118);function o(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}function s(e){let t=(0,n.O)();return(0,r.useQuery)(["get_user_info"],()=>{var e;return(e=function*(){if(t)return yield i.k.getUserInfo();return{is_metastore_admin:!1}},function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function s(e){o(i,r,n,s,l,"next",e)}function l(e){o(i,r,n,s,l,"throw",e)}s(void 0)})})()},e)}},159150:(e,t,a)=>{a.d(t,{w:()=>r});function r(e){let t=new Map;return e.forEach(({column_name:e,data_type:a})=>{t.set(e,{name:e,type:a?.toLowerCase(),partition:!1,fields:[],comment:void 0,originalColumnData:{name:e,type_text:a?.toLowerCase(),comment:""}})}),e.forEach(({column_name:e,parent_column:a})=>{if(a&&""!==a){let r=t.get(a),n=t.get(e);r&&n&&r?.fields?.push(n)}}),{columns:Array.from(t.values()).filter(t=>!e.some(e=>e.column_name===t.name&&""!==e.parent_column)),metadata:{}}}},161330:(e,t,a)=>{a.d(t,{I:()=>d});var r=a(610435),n=a(91958),i=a.n(n),o=a(79570),s=a(497895),l=a(201828);let c=i()(e=>({color:e.colors.textSecondary})),d=({content:e,iconTitle:t="More information",...a})=>{let{theme:n}=(0,s.wn)();return(0,r.Y)(o.m,{content:e,...a,children:(0,r.Y)(l.A,{tabIndex:0,"aria-hidden":"false","aria-label":t,alt:t,css:c(n)})})}},165091:(e,t,a)=>{a.d(t,{q:()=>o});var r=a(412836),n=a(302118);function i(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}function o(){return(0,r.n_)(({catalog:e,payload:t})=>{var a;return(a=function*(){return yield n.k.updateCatalog(e,t)},function(){var e=this,t=arguments;return new Promise(function(r,n){var o=a.apply(e,t);function s(e){i(o,r,n,s,l,"next",e)}function l(e){i(o,r,n,s,l,"throw",e)}s(void 0)})})()})}},192464:(e,t,a)=>{a.d(t,{Os:()=>d,TT:()=>u,T_:()=>p,mr:()=>c});var r=a(159150),n=a(988512),i=a(55749),o=a(103341);function s(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}function l(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function o(e){s(i,r,n,o,l,"next",e)}function l(e){s(i,r,n,o,l,"throw",e)}o(void 0)})}}function c(e){return l(function*(e,t=i.X){let a=(0,n.y)(e).generateGetPostgresDatabasesSql();return(0,o.M)({dataSource:e,queryString:a,queryName:"get_postgres_databases",options:{limit:t}})}).apply(this,arguments)}function d(e,t,a){return l(function*(){let r=(0,n.y)(t).generateGetPostgresSchemasSql(e),s={limit:a||i.X,catalog:e};if(t?.disableSystemQueries)return[];return yield(0,o.M)({dataSource:t,queryString:r,queryName:"get_postgres_schemas",options:s})})()}function u(e,t,a,r,s,c){return l(function*(){let l=(0,n.y)(a).generateGetPostgresTablesSql(e,t),d={limit:r||i.X,errorFilters:s,ignoreError:c,catalog:e};if(a?.disableSystemQueries)return[];return yield(0,o.M)({dataSource:a,queryString:l,queryName:"get_postgres_tables",options:d})})()}function p(e){return l(function*({dataSource:e,catalog:t,schema:a,table:i,errorFilters:s,ignoreError:l,ignoreTableNotFound:c=!1}){try{let c=(0,n.y)(e).generateGetPostgresCompositeTypeSql(a,i),d=yield(0,o.M)({dataSource:e,queryString:c,queryName:"get_postgres_columns",options:{errorFilters:s,ignoreError:l,catalog:t}});return(0,r.w)(d)}catch(t){let e=t?.message??"";if(c&&[/TABLE_OR_VIEW_NOT_FOUND/].some(t=>t.test(e)))return{metadata:{},columns:[]};throw t}}).apply(this,arguments)}},203368:(e,t,a)=>{a.d(t,{m:()=>r});function r(e){if(Array.isArray(e))return{actions:e.reduce((e,t)=>(e[JSON.stringify(t)]=t,e),{})};return e}},210383:(e,t,a)=>{a.d(t,{K:()=>i,u:()=>s});var r,n=a(978679),i=((r={}).NO_UPDATES_IN_TABLE_HISTORY="NO_UPDATES_IN_TABLE_HISTORY",r.FAILED_TO_FETCH_HISTORY="FAILED_TO_FETCH_HISTORY",r.FAILED_TO_FIT_MODEL="FAILED_TO_FIT_MODEL",r.FAILED_TO_FIT_MODEL_WITH_HIGH_RESIDUAL="FAILED_TO_FIT_MODEL_WITH_HIGH_RESIDUAL",r.NOT_ENOUGH_UPDATE_OP_BACKTESTING="NOT_ENOUGH_UPDATE_OP_BACKTESTING",r.NOT_ENOUGH_UPDATE_OP="NOT_ENOUGH_UPDATE_OP",r.NOT_ENOUGH_DISTINCT_DAYS="NOT_ENOUGH_DISTINCT_DAYS",r.USER_CONFIGURED_SKIP="USER_CONFIGURED_SKIP",r.FAILED_TO_PREDICT="FAILED_TO_PREDICT",r.NOT_ENOUGH_TABLE_HISTORY="NOT_ENOUGH_TABLE_HISTORY",r.COLLECTING_DATA="COLLECTING_DATA",r.NOT_ENOUGH_TABLE_HISTORY_CUSTOM_SQL="NOT_ENOUGH_TABLE_HISTORY_CUSTOM_SQL",r.PERMISSION_DENIED="PERMISSION_DENIED",r.INTERNAL_ERROR="INTERNAL_ERROR",r.BLAST_RADIUS_COMPUTATION_ERROR="BLAST_RADIUS_COMPUTATION_ERROR",r.JOB_RCA_COMPUTATION_ERROR="JOB_RCA_COMPUTATION_ERROR",r.TOO_FREQUENTLY_UPDATING="TOO_FREQUENTLY_UPDATING",r.ROW_COUNT_COLLECTION_ERROR="ROW_COUNT_COLLECTION_ERROR",r.MATERIALIZED_VIEW_HISTORY_ERROR="MATERIALIZED_VIEW_HISTORY_ERROR",r.LEGACY_MV_NOT_SUPPORTED="LEGACY_MV_NOT_SUPPORTED",r.STREAMING_TABLE_HISTORY_ERROR="STREAMING_TABLE_HISTORY_ERROR",r.USER_ERROR="USER_ERROR",r.STORAGE_ACCESS_ERROR="STORAGE_ACCESS_ERROR",r.TABLE_NOT_FOUND="TABLE_NOT_FOUND",r.SPARK_SESSION_EXPIRED="SPARK_SESSION_EXPIRED",r);let o={NO_UPDATES_IN_TABLE_HISTORY:"The table does not have any update operations in the table history.",FAILED_TO_FETCH_HISTORY:"Failed to fetch table history. Please contact Databricks support if this issue persists.",FAILED_TO_FIT_MODEL:"Failed to fit model on the table history.",FAILED_TO_FIT_MODEL_WITH_HIGH_RESIDUAL:"Failed to fit model on the table history due to high residual.",NOT_ENOUGH_UPDATE_OP_BACKTESTING:"Not enough update operations in table history for backtesting.",NOT_ENOUGH_UPDATE_OP:"We are still training our model as there are not enough update operations in table history for a valid forecast.",NOT_ENOUGH_DISTINCT_DAYS:"We are still training our model as there are not enough distinct days with commits in table history for a valid forecast.",USER_CONFIGURED_SKIP:"Monitoring for this table has been skipped based on your configuration.",FAILED_TO_PREDICT:"Failed to generate prediction from the model. Please contact Databricks support if this issue persists.",NOT_ENOUGH_TABLE_HISTORY:"We are still training our model as there are not enough days of table history to evaluate completeness.",COLLECTING_DATA:"Collecting data for completeness monitoring. More days of data are required for analysis.",NOT_ENOUGH_TABLE_HISTORY_CUSTOM_SQL:"Not enough distinct days of historical data to evaluate custom SQL.",PERMISSION_DENIED:"Unable to retrieve table history. Please ensure you have SELECT access to the table and please contact Databricks support if this issue persists.",INTERNAL_ERROR:"An internal error has occurred. Please contact Databricks support if this issue persists.",BLAST_RADIUS_COMPUTATION_ERROR:"Failed to compute blast radius.",JOB_RCA_COMPUTATION_ERROR:"Failed to compute job RCA.",TOO_FREQUENTLY_UPDATING:"We are currently not supporting tables updating this frequently.",ROW_COUNT_COLLECTION_ERROR:"Failed to collect row count data for completeness checks. Please contact Databricks support if this issue persists.",MATERIALIZED_VIEW_HISTORY_ERROR:"Your materialized view is incorrectly configured. Please specify a valid backing table to resolve this issue.",LEGACY_MV_NOT_SUPPORTED:"We currently do not support legacy materialized views. Only Direct Publishing Model (DPM) views are supported.",STREAMING_TABLE_HISTORY_ERROR:"Error fetching table history for streaming table. Please refresh the pipeline that populates your streaming table to continue monitoring.",USER_ERROR:"Your Data Quality Monitoring configuration requires attention. Please review and fix any issues.",TABLE_NOT_FOUND:"Table not found. The table was listed but could not be accessed during execution. This typically indicates the table was deleted shortly after being listed, or the job lacks the required permissions.",STORAGE_ACCESS_ERROR:"Storage access error. Please verify the table's storage location is accessible.",SPARK_SESSION_EXPIRED:"Spark session timed out due to inactivity."};function s(e){if(!(0,n.zz)(e))return null;return Object.values(i).includes(e)?o[e]:o.INTERNAL_ERROR}},210556:(e,t,a)=>{a.d(t,{f:()=>o});var r=a(610435),n=a(906169),i=a(429608);let o=({dangerouslySetAntdProps:e,...t})=>(0,r.Y)(i.wC,{children:(0,r.Y)(n.A,{...t,...e})})},212536:(e,t,a)=>{a.d(t,{_:()=>S});var r=a(610435),n=a(956935),i=a(813342),o=a.n(i),s=a(692738),l=a(284260),c=a(497895),d=a(996648),u=a(927802),p=a(684944),m=a(461815),g=a(768622),f=a(639712),h=a(382908),b=a(804723),v=a(79128),y=a(194901),E=a(217985);function _(e,t){return e.name.includes(t)}function S({id:e="uc-selector",componentId:t="web-shared_uc-selector",placeholder:a,allItems:i,loading:v,value:y,onChange:I,icon:C,disabled:A,emptyText:R,width:w=240,getFooter:x,matchTriggerWidth:O=!1,validationState:M,getItemState:L,optionHintContentField:k,filterFn:N,optionAddon:D,maxHeight:P,selectAllLabel:$,overflowEllipsis:U=!1,getOpenInNewTabURL:Y}){let[F,H]=s.useState(i),G=(0,s.useRef)(),{theme:B}=(0,c.wn)();(0,s.useEffect)(()=>{v||H(i)},[i,v]);let W=(0,s.useMemo)(()=>$&&y===$?{name:$}:i.find(e=>e.name===y),[i,$,y]),z=(0,d.SY)({componentId:t,allItems:i,items:F,setItems:H,itemToString:e=>e.name,matcher:N||_,initialInputValue:y,formValue:W,onStateChange({selectedItem:e,type:t}){switch(t){case d.HM.ItemClick:case d.HM.InputKeyDownEnter:e?.name&&I(e.name);break;case d.HM.FunctionReset:I(void 0)}}}),q=x?.({hideMenuOnClick:z.closeMenu,onAddItem:z.selectItem}),V=$?(0,r.Y)(T,{componentId:"uc-selector-select-all-entity-button",isChecked:W?.name===$,onClick:()=>{z.selectItem({name:$}),z.closeMenu(),I($)},children:$}):void 0,K=(0,l.z)({size:F.length,parentRef:G,estimateSize:(0,s.useCallback)(()=>k?48:B.general.heightSm,[k,B.general.heightSm]),overscan:30});return(0,r.FD)(u.h,{comboboxState:z,style:{width:w},children:[(0,r.Y)(p.$,{id:e,placeholder:a,comboboxState:z,clearInputValueOnFocus:!0,prefix:C,disabled:A,"data-testid":`uc-selector-${e}`,validationState:M,allowClear:!$||W?.name!==$,dangerouslyAppendEmotionCSS:U?(0,n.AH)({input:{textOverflow:"ellipsis !important",whiteSpace:"nowrap"}}):void 0}),(0,r.FD)(m.i,{loading:v,comboboxState:z,width:O?void 0:240,maxHeight:P??5.5*B.general.heightSm,virtualizerRef:G,listWrapperHeight:K.totalSize,emptyText:R,matchTriggerWidth:O,children:[K.virtualItems.map(e=>{let t=F[e.index],{disableReason:a}=L?.(t)??{};return(0,r.Y)(g.bb,{item:t,index:e.index,comboboxState:z,isDisabled:void 0!==a,disabledReason:a,style:(0,f.D7)(e),hintContent:k&&t[k],title:t.name,css:{label:{textOverflow:"ellipsis",whiteSpace:"nowrap",width:"100%"},'[data-component-id="uc-selector.open-in-new-tab.link"]':{opacity:0},'&:hover [data-component-id="uc-selector.open-in-new-tab.link"]':{opacity:1}},children:(0,r.FD)("div",{css:{display:"flex",alignItems:"center",flexWrap:"nowrap"},children:[D&&D(t),(0,r.Y)(h.o.Text,{ellipsis:!0,css:{marginBottom:void 0!==a?B.spacing.xs:void 0,color:void 0!==a?B.colors.actionDisabledText+"!important":void 0},children:t.name}),Y&&void 0===a&&(0,r.Y)(E.N,{asTypographyLink:!0,to:Y(t),openInNewTab:!0,componentId:"uc-selector.open-in-new-tab.link",css:{marginLeft:"auto"}})]})},`item-${t.name}`)}),(!o()(q)||!o()(V))&&(0,r.FD)(b.S,{children:[!o()(V)&&V,!o()(q)&&q]})]})]})}let T=({isChecked:e,children:t,...a})=>{let{theme:i}=(0,c.wn)(),o={...(0,n.AH)((0,f.dg)({border:"none",width:"100%","span:not(.anticon)":{marginLeft:i.spacing.xs},span:{color:`${i.colors.textPrimary} !important`}}))};return(0,r.Y)(v.$n,{...a,type:"tertiary",className:"combobox-footer-add-button all-entity-button",icon:e?(0,r.Y)(y.A,{}):(0,r.Y)("div",{style:{width:i.general.iconFontSize}}),css:o,children:t})}},217002:(e,t,a)=>{a.d(t,{i:()=>r});let r=e=>["get_storage_credential",e]},217247:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.083 8 10 10.947 8.958 12 5 8l3.958-4L10 5.053z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="ChevronLeftIcon";let l=s},217930:(e,t,a)=>{a.d(t,{NV:()=>l,XS:()=>d,Y5:()=>s,ek:()=>c});var r,n=a(751777),i=a(235257),o=a(311642);let s=["useractivityListFavoriteAssets","userActivityInfos"],l=e=>{s.forEach(t=>e.evict({fieldName:t,broadcast:!0})),e.gc()};var c=((r={}).AlertPageHeader="alert_page_header",r.AlertsListPage="alerts_list_page",r.AlertsV2PageHeader="alerts_v2_page_header",r.AlertsV2ListPage="alerts_v2_list_page",r.DatabricksOne="databricks_one",r.DashboardPageHeader="dashboard_page_header",r.DashboardTable="dashboard_table",r.LegacyDashboardTable="legacy_dashboard_table",r.FavoritesTable="favorites_table",r.PopularTable="popular_table",r.LakeviewDashboardPageHeader="lakeview_dashboard_page_header",r.LakeviewPublishedDashboardPageHeader="lakeview_published_dashboard_page_header",r.QueryEditorControls="query_editor_controls",r.QueryListTable="query_list_table",r.JobsListTable="jobs_list_table",r.JobDetailsHeader="job_details_header",r.LibraryPage="library_page",r.NotebookHeader="notebook_header",r.FilebrowserTable="filebrowser_table",r.FavoritesPage="favorites_page",r.FilebrowserHeader="filebrowser_header",r.SchemaBrowser="schema_browser",r.CatalogExplorerFavList="catalog-explorer-fav-list",r.CatalogExplorerDetailPage="catalog-explorer-detail-page",r.BrowserMetadataPreview="browser-metadata-preview",r.PipelineAuthoringHeader="pipeline_authoring_header",r.PipelineDetailsPageHeader="pipeline_details_page_header",r.PipelinesTable="pipelines_table",r.DataRoomHeader="data_room_header",r.DataRoomTable="data_room_table",r.UCModelsPage="uc_models_page",r.AppDetailsHeader="app_details_header",r.AppsTable="apps_table",r.WorkspaceAssetsMetadataPanel="workspace_assets_metadata_panel",r.DesignerFile="designer_file",r.SearchResultsTable="search_results_table",r);function d(){(0,n.Pv)({treeEventIdentifier:i.M.UC_SCHEMA_BROWSER,invalidationEventType:i.Zk.INVALIDATE_ASSET_CHILDREN,itemId:o.FP})}},237509:(e,t,a)=>{a.d(t,{P:()=>c,k:()=>d});var r=a(692738),n=a(141078),i=a(235250),o=a(261557),s=a(595615);function l(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}let c=["list_external_metadata"];function d(e){let t=(0,n.mK)(),a=(0,r.useCallback)(()=>({queryKey:c,queryFn:()=>{var e;return(e=function*(){let{response:e}=yield i.u.listExternalMetadata(t,{pageSize:100,pageToken:void 0});return e.map(e=>(0,o.je)(e))},function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function o(e){l(i,r,n,o,s,"next",e)}function s(e){l(i,r,n,o,s,"throw",e)}o(void 0)})})()}}),[t]);return(0,s.AO)({...a(),...e})}},242995:(e,t,a)=>{a.d(t,{h:()=>o,j:()=>i});var r,n=a(696514),i=((r={}).DONE="done",r.CANCELED="canceled",r);let o=(0,n.fH)("Filebrowser::SaveAsFolderNode")},262786:(e,t,a)=>{a.d(t,{B:()=>b,Q:()=>h});var r=a(610435),n=a(956935),i=a(692738),o=a(986912),s=a(497895),l=a(866370),c=a(325056),d=a(84008),u=a(293418),p=a(487404),m=a(59723),g=a(123252);let f={container:(0,n.AH)({display:"flex",flexDirection:"column",alignItems:"flex-start"}),cell:(0,n.AH)({width:"100%",height:8,borderRadius:4,background:"var(--table-skeleton-color)",marginTop:"var(--table-skeleton-row-vertical-margin)",marginBottom:"var(--table-skeleton-row-vertical-margin)"})},h=({lines:e=1,seed:t="",frameRate:a=60,style:n,label:l,...d})=>{let{theme:u}=(0,s.wn)(),{size:p}=(0,i.useContext)(c.G),h=(0,o.PT)(t);return(0,r.FD)("div",{...d,...(0,g.VG)(),"aria-busy":!0,css:f.container,role:"status",style:{...n,"--table-skeleton-color":u.isDarkMode?"rgba(255, 255, 255, 0.1)":"rgba(31, 38, 45, 0.1)","--table-skeleton-row-vertical-margin":"small"===p?"4px":"6px"},children:[[...Array(e)].map((e,t)=>(0,r.Y)("div",{css:[f.cell,(0,o.q5)(u,a),{width:`calc(100% - ${h[t%h.length]}px)`}]},t)),(0,r.Y)("span",{css:m.Q,children:l})]})},b=({table:e,actionColumnIds:t=[],numRows:a=3,loading:n=!0,loadingDescription:o="Table skeleton rows",label:g})=>{let{theme:f}=(0,s.wn)(),{grid:b}=(0,i.useContext)(c.G);return(0,r.FD)(r.FK,{children:[n&&(0,r.Y)(l.G,{description:o}),(0,r.Y)("span",{css:m.Q,children:g}),[...Array(a).keys()].map(a=>(0,r.Y)(u.H,{children:e.getFlatHeaders().map(e=>{let n=e.column.columnDef.meta,i=b?{maxWidth:e.getSize()}:{flex:e.getSize()/100};return t.includes(e.id)?(0,r.Y)(p.f,{children:(0,r.Y)(h,{style:{width:f.general.iconSize}})},`cell-${e.id}-${a}`):(0,r.Y)(d.n,{style:n?.styles??(n?.width!==void 0?{maxWidth:n.width}:i),children:(0,r.Y)(h,{seed:`skeleton-${e.id}-${a}`,lines:n?.numSkeletonLines??void 0})},`cell-${e.id}-${a}`)})},a))]})}},269323:(e,t,a)=>{a.r(t),a.d(t,{ExternalMetadataList:()=>_,RouteComponent:()=>S});var r=a(610435),n=a(692738),i=a(888565),o=a(672316),s=a(760603),l=a(79570),c=a(876726),d=a(342411),u=a(649934),p=a(12642),m=a(747206),g=a(237509),f=a(929117),h=a(104787),b=a(492814);function v(){let e=(0,d.tz)(),{showCreateExternalMetadata:t}=(0,b.E)();return(0,r.Y)(h.F,{componentId:"external-metadata-create-button",authz:{action:u.E.CreateExternalMetadata(),tooltip:{placement:"bottomLeft"}},type:"primary",onClick:()=>t(),children:e.formatMessage({id:"aN3Ygl",defaultMessage:"Create external metadata"})})}var y=a(773953),E=a(345958);function _(){let e=(0,d.tz)(),t=(0,E.$)(),a=(0,g.k)();(0,n.useEffect)(()=>{t("visit_external_metadata_list",{})},[t]);let h=(0,n.useMemo)(()=>[{id:"type",header:e.formatMessage({id:"0Oo3EC",defaultMessage:"Type"}),accessorKey:"systemType",sortingFn:"basic",size:20,minSize:20,cell:({row:{original:{systemType:e}}})=>(0,r.Y)(p.e,{systemType:e,showToolTip:!0})},{id:"name",header:e.formatMessage({id:"Fh844a",defaultMessage:"Name"}),accessorKey:"name",cell:({row:e})=>{let t;return t=e.original.name,(0,r.Y)(y.Z,{componentId:"external-metadata-list-entity-name-cell",url:(0,m.sI)(t),children:t})},sortingFn:"basic",minSize:50,size:75},{id:"entity_type",header:e.formatMessage({id:"oEALD1",defaultMessage:"Entity Type"}),accessorKey:"entityType",sortingFn:"basic",enableGlobalFilter:!0,minSize:50,size:75},{id:"owner",header:e.formatMessage({id:"kjUH4r",defaultMessage:"Owner"}),accessorKey:"owner",enableGlobalFilter:!1,sortingFn:"basic",size:50,minSize:50},{id:"created_at",header:e.formatMessage({id:"XdMm2i",defaultMessage:"Created at"}),accessorKey:"created_at",cell:({row:e})=>e.original.created_at?(0,s.l)(new Date(e.original.created_at)):null,enableGlobalFilter:!1,sortingFn:"basic",size:50,minSize:50},{id:"description",header:e.formatMessage({id:"G68YEy",defaultMessage:"Description"}),accessorKey:"comment",enableGlobalFilter:!1,sortingFn:"basic",size:50,minSize:50,cell:({row:e})=>{let t;return t=e.original.comment,(0,r.Y)(l.m,{componentId:"external_metadata_list_comment_tooltip",content:t,children:(0,r.Y)("span",{children:t})})}}],[e]);return(0,r.Y)(o.I,{requestKey:["external-metadata-list"],request:[u.E.CreateExternalMetadata()],children:(0,r.Y)(i.e$,{entityRequest:a,data:a.data,errorMessage:e.formatMessage({id:"DixwPT",defaultMessage:"Error getting external metadata"}),filterInputPlaceholder:e.formatMessage({id:"ETkluK",defaultMessage:"Filter external metadata"}),entityCountMessage:t=>e.formatMessage({id:"q66YA5",defaultMessage:"{count} external metadata"},{count:t}),filterActions:[(0,r.Y)(v,{},"create_external_metadata_btn")],loadingDescription:f.z.EXTERNAL_METADATA_LIST,emptyComponent:(0,r.Y)(c.S,{description:e.formatMessage({id:"z/GDM7",defaultMessage:"You either don't have access to any external metadata or there are no external metadata."})}),columns:h,enableColumnResizing:!0,dataExplorerTrackingObject:"external_metadata"})})}function S(){return(0,r.Y)(_,{})}},279402:(e,t,a)=>{a.r(t),a.d(t,{DataExplorerContext:()=>S,DataExplorerContextProvider:()=>T,DataExplorerSection:()=>y,DeltaSharingEntity:()=>E,EditShareEntity:()=>_,useDataExplorerContext:()=>I});var r,n,i,o=a(610435),s=a(452137),l=a.n(s),c=a(692738),d=a(673240),u=a(217930),p=a(441535),m=a(660618),g=a(747206),f=a(483588),h=a(604808),b=a(589111),v=a(509695),y=((r={}).Data="data",r.Sharing="sharing",r.CleanRoom="CleanRoom",r.Credentials="credentials",r.Locations="locations",r.Connections="connections",r.ExternalMetadata="external-metadata",r),E=((n={}).Shares="shares",n.Recipients="recipients",n.Providers="providers",n),_=((i={}).DataObjects="dataObjects",i.Notebooks="notebooks",i);let S=c.createContext({activeSection:"data",showCleanRooms:()=>({}),showDataEntity:()=>({}),showCatalog:()=>({}),showDatabase:()=>({}),showTableDetailsTab:()=>({}),showVolume:()=>({}),showUcFunction:()=>({}),showModel:()=>({}),showModelVersion:()=>({}),showNotebook:()=>({}),showShare:()=>({}),showEditShareData:()=>({}),showEditShareNotebook:()=>({}),showRecipient:()=>({}),showProvider:()=>({}),isUnityCatalogActive:!1,setFilteredObjectTypes:()=>({}),showEntityByType:()=>({}),showCreatePolicy:()=>({}),onRegisterViewUpdate:()=>{}});function T({section:e,catalog:t,schema:a,table:r,volume:n,ucFunction:i,model:s,modelVersion:y,notebook:E,share:_,recipient:I,provider:C,browse:A,workspace:R,permission:w,connection:x,createConnection:O,createLocation:M,deltaSharingEntity:L,editShare:k,children:N}){let{filteredObjectTypes:D}=(0,b.v)(),P=(0,d.Ck)(),$=(0,h.O)();void 0!==t||$||(t=m.UQ);let U=(0,c.useCallback)(()=>{P("/explore/cleanrooms")},[P]),Y=(0,c.useCallback)(e=>{P((0,g.Hp)(e))},[P]),F=(0,c.useCallback)((e=t)=>{l()(e,"Catalog must be set"),P((0,g.db)(e))},[P,t]),H=(0,c.useCallback)((e,a=t)=>{l()(a,"Catalog must be set"),P((0,g.ps)(e,a))},[P,t]),G=(0,c.useCallback)((e,r=a,n=t)=>{l()(r,"Schema must be set"),l()(n,"Catalog must be set"),P((0,g.ff)(e,r,n))},[P,a,t]),B=(0,c.useCallback)((e,r,n=a,i=t)=>{l()(n,"Schema must be set"),l()(i,"Catalog must be set"),P((0,g.V6)(e,r,n,i),{},{activeTab:r})},[P,a,t]),W=(0,c.useCallback)((e,r=a,n=t)=>{l()(r,"Schema must be set"),l()(n,"Catalog must be set"),P((0,g.IM)(e,r,n))},[P,a,t]),z=(0,c.useCallback)((e,r=a,n=t)=>{l()(r,"Schema must be set"),l()(n,"Catalog must be set"),P((0,g.E3)(e,r,n))},[P,a,t]),q=(0,c.useCallback)((e,r=a,n=t,i)=>{if(l()(r,"Schema must be set"),l()(n,"Catalog must be set"),t===n&&a===r&&s===e&&y&&i)return;P((0,g.Th)(e,r,n))},[P,a,t,s,y]),V=(0,c.useCallback)((e,r,n=a,i=t)=>{l()(n,"Schema must be set"),l()(i,"Catalog must be set"),P((0,g.xU)(e,r,n,i))},[P,a,t]),K=(0,c.useCallback)((e,a=t)=>{l()(a,"Catalog must be set"),P((0,g.yX)(e,a))},[P,t]),Q=(0,c.useCallback)(e=>{P(`/explore/sharing/shares/${encodeURIComponent(e)}`)},[P]),j=(0,c.useCallback)(e=>{P(`/explore/sharing/shares/${encodeURIComponent(e)}/edit_data`)},[P]),J=(0,c.useCallback)(e=>{P(`/explore/sharing/shares/${encodeURIComponent(e)}/edit_notebook`)},[P]),X=(0,c.useCallback)(e=>{P(`/explore/sharing/recipients/${encodeURIComponent(e)}`)},[P]),Z=(0,c.useCallback)(e=>{P(`/explore/sharing/providers/${encodeURIComponent(e)}`)},[P]),ee=(0,c.useCallback)((e,t,a,r)=>{switch(e){case f.z$1.UC_CATALOG:F(t);break;case f.z$1.UC_SCHEMA:l()(a,"Schema is required for schema entity"),H(a,t);break;case f.z$1.UC_TABLE:l()(r,"Entity is required for table entity"),G(r,a,t);break;case f.z$1.UC_MODEL:l()(r,"Entity is required for model entity"),q(r,a,t);break;case f.z$1.UC_VOLUME:l()(r,"Entity is required for volume entity"),W(r,a,t);break;case f.z$1.UC_FUNCTION:l()(r,"Entity is required for function entity"),z(r,a,t)}},[F,H,G,q,W,z]),et=(0,c.useCallback)(e=>{P(`/governance/policies/create?entity=${e}`)},[P]),ea=(0,c.useCallback)(()=>{(0,p.W)("databricks.fe.schemabrowser.newTree",!1)&&(0,u.XS)()},[]),{setFilteredObjectTypes:er}=(0,b.y)(),en=(0,c.useMemo)(()=>({activeSection:e,showCleanRooms:U,createLocation:M,showDataEntity:Y,catalog:t,showCatalog:F,schema:a,showDatabase:H,table:r,showTableDetailsTab:B,volume:n,showVolume:W,ucFunction:i,showUcFunction:z,model:s,showModel:q,modelVersion:y,showModelVersion:V,notebook:E,showNotebook:K,share:_,editShare:k,showShare:Q,showEditShareData:j,showEditShareNotebook:J,recipient:I,showRecipient:X,provider:C,showProvider:Z,browse:A,workspace:R,permission:w,connection:x,deltaSharingEntity:L,isUnityCatalogActive:$,filteredObjectTypes:D,setFilteredObjectTypes:er,showEntityByType:ee,showCreatePolicy:et,onRegisterViewUpdate:ea}),[e,U,M,Y,t,F,a,H,r,B,n,W,i,z,s,q,y,V,E,K,_,k,Q,j,J,I,X,C,Z,A,R,w,x,L,$,D,er,ee,et,ea]);return(0,o.Y)(S.Provider,{value:en,children:(0,o.Y)(v.p,{children:N})})}function I(){let e=(0,c.useContext)(S);if(l()(null!=e,"Must wrap child in DataExplorerContextProvider"),void 0===e)throw Error("useDataExplorerContext must be used within a DataExplorerContextProvider");return e}},282109:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1 3.5h10V2H1zm0 8h4V10H1zm7-4H1V6h7zm3.5 7.56 4.03-4.03-1.06-1.06-2.22 2.22V6h-1.5v6.19L8.53 9.97l-1.06 1.06z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="SortDescendingIcon";let l=s},283009:(e,t,a)=>{a.d(t,{a:()=>s});var r=a(610435);a(692738);var n=a(79128),i=a(79570),o=a(180864);function s({buttonProps:e,componentId:t,copyText:a,copyTooltip:l,isInsideInputGroup:c=!1,onCopy:d,tooltipProps:u}){let{actionIcon:p,copy:m,handleTooltipOpenChange:g,tooltipOpen:f,tooltipMessage:h}=(0,o.L)(a,l,d),b=(0,r.Y)(n.$n,{"aria-label":h,componentId:t,icon:p,onClick:m,size:"small",...e}),v=(0,r.Y)(n.$n,{"aria-label":h,componentId:t,onClick:m,...e,children:p});return(0,r.Y)(i.m,{componentId:`${t}-tooltip`,content:h,onOpenChange:g,open:f,...u,children:c?v:b})}},290766:(e,t,a)=>{a.d(t,{T:()=>l});var r=a(65061),n=a(960718),i=a(141078);let o=(0,i.J1)`
  query LakehouseStatesForRedash @component(name: "DBSQLX.WareHouseUI") {
    lakehouses {
      edges {
        node {
          ...LakehouseListStateFragment
        }
        cursor
      }
    }
  }
  ${n.xz}
`,s=(0,i.J1)`
  query LakehouseMinimalStatesForRedash @component(name: "DBSQLX.WareHouseUI") {
    lakehouses {
      edges {
        node {
          id
          size
          state
          disableUnityCatalog
          health {
            status
          }
          enableDatabricksCompute
          warehouseType
        }
        cursor
      }
    }
  }
`,l=(e,t)=>(0,r.IT)(t?s:o,{fetchPolicy:"cache-and-network",...e})},293418:(e,t,a)=>{a.d(t,{H:()=>u,g:()=>d});var r=a(610435),n=a(783772),i=a.n(n),o=a(692738),s=a(325056),l=a(114826),c=a(497895);let d=(0,o.createContext)({isHeader:!1}),u=(0,o.forwardRef)(function({children:e,className:t,style:a,isHeader:n=!1,skipIconHiding:u=!1,verticalAlignment:p,...m},g){let f,{size:h,grid:b}=(0,o.useContext)(s.G),{theme:v}=(0,c.wn)();return f=n&&"default"===h?v.spacing.sm:"default"===h?6:v.spacing.xs,(0,r.Y)(d.Provider,{value:(0,o.useMemo)(()=>({isHeader:n}),[n]),children:(0,r.Y)("div",{...m,ref:g,role:"row",style:{...a,"--table-row-vertical-padding":`${f}px`},css:[!n&&!u&&l.M0,!b&&l.PV.row],className:i()(t,b&&l.lH.row,{"table-isHeader":n,"table-row-isGrid":b}),children:e})})})},295423:(e,t,a)=>{a.d(t,{f:()=>c});var r=a(692738),n=a(671244),i=a(653542),o=a(49586),s=a(209908);let l=50,c=({enableAccountGroups:e=!1,enableAccountServicePrincipals:t=!1,enableAccountUsers:a=!1,enableWorkspaceGroups:c=!0,enableWorkspaceServicePrincipals:d=!0,enableWorkspaceUsers:u=!0,filterText:p="",principalIdsForFiltering:m=[],principalUniqueNamesForFiltering:g=[],limit:f=l,useLite:h,skip:b=!1,isCache:v=!1}={})=>{let y=(0,s.VM)({ids:m,uniqueNames:g}),E=(0,s.L5)({ids:m,uniqueNames:g}),{subjects:_,isLoading:S,error:T,hasNextPage:I}=(0,o.zo)({source:"account",filter:p,filterPredicate:y,first:f,skip:!a||b,useLite:h,isCache:v}),{subjects:C,isLoading:A,error:R,hasNextPage:w}=(0,n.Bi)({source:"account",filter:p,filterPredicate:E,first:f,skip:!e||b,useLite:h,isCache:v}),{subjects:x,isLoading:O,error:M,hasNextPage:L}=(0,i.Q_)({source:"account",filter:p,filterPredicate:y,first:f,skip:!t||b,useLite:h,isCache:v}),{subjects:k,isLoading:N,error:D,hasNextPage:P}=(0,o.zo)({source:"workspace",filter:p,filterPredicate:y,first:f,skip:!u||b,useLite:h,isCache:v}),{subjects:$,isLoading:U,error:Y,hasNextPage:F}=(0,n.Bi)({source:"workspace",filter:p,filterPredicate:E,first:f,skip:!c||b,useLite:h,isCache:v}),{subjects:H,isLoading:G,error:B,hasNextPage:W}=(0,i.Q_)({source:"workspace",filter:p,filterPredicate:y,first:f,skip:!d||b,useLite:h,isCache:v}),z=(0,r.useMemo)(()=>{let t=[...$,...C];if(e&&c)return t.filter((e,t,a)=>t===a.findIndex(t=>t.id===e.id));return t},[C,e,c,$]),q=(0,r.useMemo)(()=>{let e=[...H,...x];if(t&&d)return e.filter((e,t,a)=>t===a.findIndex(t=>t.id===e.id));return e},[x,t,d,H]),V=(0,r.useMemo)(()=>{let e=[...k,..._];if(a&&u)return e.filter((e,t,a)=>t===a.findIndex(t=>t.id===e.id));return e},[_,a,u,k]),{subjects:K,hasNextPage:Q}=(0,r.useMemo)(()=>(0,s.GF)(p,f,z,q,V),[p,f,z,q,V]),j=(0,r.useMemo)(()=>({accountGroups:A,accountServicePrincipals:O,accountUsers:S,groups:U,servicePrincipals:G,users:N,some:A||O||S||U||G||N}),[A,O,S,U,G,N]),J=(0,r.useMemo)(()=>({accountGroups:R??null,accountServicePrincipals:M??null,accountUsers:T??null,groups:Y??null,servicePrincipals:B??null,users:D??null}),[R,M,T,Y,B,D]);return{allSubjectsMap:(0,r.useMemo)(()=>(0,s.ne)(z,q,V),[z,q,V]),errors:J,hasNextPage:!!(K.length===f&&(I||w||L||P||F||W)||Q),isLoading:j,subjects:K}}},302136:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(692738),n=a(967166);function i(){let e=(0,n.hG)();return(0,r.useCallback)(t=>e({uc_api_ui_log:t}),[e])}},308879:(e,t,a)=>{a.d(t,{L:()=>l,u:()=>c});var r=a(689262),n=a(686560),i=a(441535),o=a(709262),s=a(805287);let l=()=>({isEnabled:c()}),c=()=>(0,s.gz)({cloud:"AWS",userCanUseDatabricksWorkspace:(0,n.d)("userCanUseDatabricksWorkspace_new",!1),userCanUseSqlService:(0,n.d)("userCanUseSqlService_new",!1),enableSqlService:(0,r.b)("enableSqlService",(0,n.d)("enableSqlService",!1),()=>(0,n.d)("dbSqlEnabled_new",!1)),centralizedLoginEnabled:(0,r.b)("centralizedLoginEnabled",(0,n.d)("centralizedLoginEnabled",!1),()=>(0,i.W)("databricks.fe.centralizedLoginEnabled",!1))})[o.EU].allowed},311529:(e,t,a)=>{a.d(t,{F:()=>i,x:()=>o});var r,n=a(696514),i=((r={}).DONE="done",r);let o=(0,n.fH)("Filebrowser::Share")},314775:(e,t,a)=>{a.d(t,{A:()=>I});var r=a(610435),n=a(644091),i=a(783772),o=a.n(i),s=a(692738),l=a(325056),c=a(293418),d=a(114826),u=a(79128),p=a(224098),m=a(497895),g=a(814947),f=a(282109),h=a(999157),b=a(653800),v=a(837334),y=a(286342),E=a(382908),_=a(661748),S=a(53333);let T=(0,s.forwardRef)(function({style:e,resizeHandler:t,increaseWidthHandler:a,decreaseWidthHandler:n,children:i,...o},l){let{isHeader:p}=(0,s.useContext)(c.g);if(!p)throw Error("`TableHeaderResizeHandle` must be used within a `TableRow` with `isHeader` set to true.");let[g,f]=(0,s.useState)(!1),h=(0,s.useRef)(null),_=(0,s.useRef)(null),S=(0,s.useRef)(!0),T=(0,s.useRef)(!1),{theme:I}=(0,m.wn)(),C=(0,s.useCallback)(e=>{if(!a||!n)return void t?.(e);if(g&&!S.current)return;S.current=!1,h.current={x:e.clientX,y:e.clientY},_.current=e,T.current=!1;let r=e=>{h.current&&Math.abs(e.clientX-h.current.x)>2&&_.current&&(T.current=!0,t?.(_.current),document.removeEventListener("pointermove",r))},i=()=>{h.current=null,document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",i)};document.addEventListener("pointermove",r),document.addEventListener("pointerup",i)},[g,t,a,n]),A=(0,s.useCallback)(e=>{if(T.current){e.preventDefault(),e.stopPropagation(),T.current=!1;return}},[]),R=(0,r.Y)("div",{...o,ref:l,onPointerDown:C,onClick:A,css:d.Ay.resizeHandleContainer,style:e,role:"button","aria-label":"Resize Column",children:(0,r.Y)("div",{css:d.Ay.resizeHandle})});return a&&n?(0,r.FD)(y.Root,{componentId:"codegen_design-system_src_design-system_tableui_tableheader.tsx_114",onOpenChange:f,children:[(0,r.Y)(y.Trigger,{asChild:!0,children:R}),(0,r.FD)(y.Content,{side:"top",align:"center",sideOffset:0,minWidth:135,style:{padding:`${I.spacing.sm} ${I.spacing.md} ${I.spacing.md} ${I.spacing.sm}`},children:[(0,r.FD)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,r.Y)(E.o.Title,{style:{marginBottom:0,marginTop:0},children:"Resize Column"}),(0,r.FD)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,r.Y)(u.$n,{onClick:()=>{n()},size:"small",componentId:"design_system.adjustable_width_header.decrease_width_button",icon:(0,r.Y)(b.A,{}),style:{backgroundColor:I.colors.actionTertiaryBackgroundHover}}),(0,r.Y)(u.$n,{onClick:()=>{a()},size:"small",componentId:"design_system.adjustable_width_header.increase_width_button",icon:(0,r.Y)(v.A,{})})]})]}),(0,r.Y)(y.Arrow,{})]})]}):R}),I=(0,s.forwardRef)(function({children:e,ellipsis:t=!1,multiline:a=!1,sortable:i,sortDirection:u,onToggleSort:m,style:b,className:v,isResizing:y=!1,align:I="left",wrapContent:C=!0,column:A,header:R,setColumnSizing:w,componentId:x,analyticsEvents:O,"aria-label":M,...L},k){let N,D=(0,_.W)("databricks.fe.observability.defaultComponentView.tableHeader",!1),P=A?.getCanResize()||L.resizable||!1,$=R?.getResizeHandler()||L.resizeHandler,U=A&&R&&w,{size:Y,grid:F}=(0,s.useContext)(l.G),{isHeader:H}=(0,s.useContext)(c.g),[G,B]=(0,s.useState)(u),W=(0,s.useMemo)(()=>O??(D?[p.s7.OnValueChange,p.s7.OnView]:[p.s7.OnValueChange]),[O,D]),z=(0,p.ei)({componentType:p.v_.TableHeader,componentId:x,analyticsEvents:W,valueHasNoPii:!0}),{elementRef:q}=(0,S.z)({onView:z.onView,value:G}),V=(0,n.SV)([k,q]);if(!H)throw Error("`TableHeader` a must be used within a `TableRow` with `isHeader` set to true.");let K=(0,r.Y)(r.FK,{});i&&("asc"===u?(K=(0,r.Y)(g.A,{}),N="ascending"):"desc"===u?(K=(0,r.Y)(f.A,{}),N="descending"):"none"===u&&(K=(0,r.Y)(h.A,{}),N="none")),(0,s.useEffect)(()=>{u!==G&&(B(u),z.onValueChange(u))},[u,G,z]);let Q="right"===I,j="md";"small"===Y&&(j="sm");let J=C?(0,r.Y)(E.o.Text,{className:"table-header-text",ellipsis:!a,size:j,title:!a&&"string"==typeof e&&e||void 0,bold:!0,children:e}):e,X=(0,s.useCallback)(e=>()=>{A&&w&&w(t=>({...t,[A.id]:e}))},[A,w]),Z=(0,s.useCallback)(()=>{A&&w&&X(A.getSize()+10)()},[A,w,X]),ee=(0,s.useCallback)(()=>{A&&w&&X(A.getSize()-10)()},[A,w,X]),et=P&&$?(0,r.Y)(T,{style:{height:"default"===Y?"20px":"16px"},resizeHandler:$,increaseWidthHandler:U?Z:void 0,decreaseWidthHandler:U?ee:void 0}):null,ea=i&&!y;return(0,r.FD)("div",{...L,ref:V,css:F?void 0:[d.PV.cell,d.PV.header],className:o()(F&&d.lH.cell,F&&d.lH.header,{"table-header-isGrid":F},v),role:"columnheader","aria-sort":i&&N||void 0,style:{justifyContent:I,textAlign:I,...b},"aria-label":ea?void 0:M,...z.dataComponentProps,children:[ea?(0,r.FD)("div",{css:[d.Ay.headerButtonTarget],role:"button",tabIndex:0,onClick:m,onKeyDown:e=>{if(i&&("Enter"===e.key||" "===e.key))return e.preventDefault(),m?.(e)},"aria-label":ea?M:void 0,children:[Q?(0,r.Y)("span",{className:"table-header-icon-container",css:[d.Ay.sortHeaderIconOnLeft],children:K}):null,J,Q?null:(0,r.Y)("span",{className:"table-header-icon-container",css:[d.Ay.sortHeaderIconOnRight],children:K})]}):J,et]})})},317290:(e,t,a)=>{a.d(t,{$S:()=>b,$h:()=>c,P1:()=>d,jC:()=>y,jt:()=>v,so:()=>E});var r=a(610435),n=a(956935),i=a(692738),o=a(497895),s=a(499918),l=a(382908);let c=()=>{let{theme:e}=(0,o.wn)();return{headerPaddingPx:3*e.spacing.xs,headerBackgroundSecondaryColor:e.colors.backgroundPrimary,headerBackgroundColor:e.colors.backgroundSecondary,headerBorderColor:e.colors.border,headerButtonSpacingPx:e.spacing.sm,contentPaddingPx:3*e.spacing.xs,cardBorderColor:e.colors.border,cardBorderRadius:e.borders.borderRadiusMd}},d=({sectionLabel:e,titleText:t,titleOverride:a,subtitle:i,buttons:l=[],children:d,collapsibleProps:p,preHeaderProps:b,bottomBorder:v=!0})=>{let{theme:y,getPrefixedClassName:E}=(0,o.wn)(),{cardBorderColor:_,cardBorderRadius:S,headerPaddingPx:T,headerBackgroundColor:I,headerBorderColor:C,headerButtonSpacingPx:A}=c(),R=(0,n.AH)("border:1px solid ",_,";border-radius:",S,"px;overflow:hidden;"),w=(0,r.FD)("div",{css:{display:"flex",flexWrap:"wrap",rowGap:`${A}px`,justifyContent:"space-between",alignItems:"center",width:"100%",paddingRight:`${y.spacing.lg+y.spacing.sm+y.spacing.xs}px`,userSelect:"none"},onClick:e=>{e.target.closest("button")&&e.stopPropagation()},children:[(0,r.FD)(m,{children:[(0,r.Y)(g,{titleText:t,titleOverride:a}),i&&(0,r.Y)(f,{subtitle:i})]}),l?.length>0&&(0,r.Y)("div",{children:(0,r.Y)(h,{buttons:l})})]});if(p){let{panelKey:t,componentId:a,activeKey:n,defaultActiveKey:i,onChange:o,destroyInactivePanel:l=!1,analyticsEvents:c,valueHasNoPii:m}=p,g=(0,r.Y)(s.n,{displayMode:"multiple",...void 0!==n?{activeKey:n}:{defaultActiveKey:i},onChange:o,destroyInactivePanel:l,chevronAlignment:"right",componentId:a,analyticsEvents:c,valueHasNoPii:m,dangerouslyAppendEmotionCSS:(({theme:e,getPrefixedClassName:t,headerPaddingPx:a,headerBackgroundColor:r,headerBorderColor:n,cardBorderRadius:i})=>{let o=t("collapse"),s=`.${o}`,l=`.${o}-item`,c=`.${o}-header`,d=`.${o}-arrow`,u=`.${o}-content`,p=`.${o}-content-box`;return{[`&${s}`]:{border:"none"},[`& > ${l}`]:{border:"none"},[`& > ${l} > ${c}, & > [data-radix-accordion-item] [data-radix-accordion-trigger]`]:{padding:`${a}px`,background:r,borderBottom:`1px solid ${n}`,alignItems:"center",display:"flex",cursor:"pointer",transition:"background-color 0.2s ease",color:"inherit","*":{color:"inherit"},"&:hover":{background:e.colors.actionTertiaryBackgroundHover,color:"inherit","*":{color:"inherit"}}},[`& > ${l}:hover > ${c}, & > [data-radix-accordion-item]:hover [data-radix-accordion-trigger]`]:{color:"inherit","*":{color:"inherit"}},[`& > ${l}:not(${l}-active) > ${c}, & > [data-radix-accordion-item]:not([data-state="open"]) [data-radix-accordion-trigger]`]:{borderBottom:"none",borderBottomLeftRadius:`${i}px`,borderBottomRightRadius:`${i}px`},[`& > ${l}${l}-active > ${c}, & > [data-radix-accordion-item][data-state="open"] [data-radix-accordion-trigger]`]:{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`& > ${l} > ${c} > ${d}, & > [data-radix-accordion-item] [data-radix-accordion-chevron]`]:{right:`${e.spacing.md}px`,alignSelf:"center"},[p]:{padding:0},[u]:{background:"transparent",border:"none"}}})({theme:y,getPrefixedClassName:E,headerPaddingPx:T,headerBackgroundColor:I,headerBorderColor:C,cardBorderRadius:S}),children:(0,r.Y)(s.n.Panel,{header:w,children:d},t)});return(0,r.FD)("section",{css:R,"aria-label":e,className:"content-section-root",children:[b&&(0,r.Y)(u,{...b}),g]})}return(0,r.FD)("section",{css:R,"aria-label":e,className:"content-section-root",children:[b&&(0,r.Y)(u,{...b}),(0,r.Y)(u,{titleText:t,titleOverride:a,subtitle:i,buttons:l,bottomBorder:v}),d]})},u=({titleText:e,titleOverride:t,subtitle:a,buttons:n,bottomBorder:i=!0})=>(0,r.FD)(p,{bottomBorder:i,children:[(0,r.FD)(m,{children:[(0,r.Y)(g,{titleText:e,titleOverride:t}),a&&(0,r.Y)(f,{subtitle:a})]}),n&&n.length>0&&(0,r.Y)(h,{buttons:n})]}),p=({children:e,bottomBorder:t=!0})=>{let{headerPaddingPx:a,headerBackgroundColor:i,headerBorderColor:o,headerButtonSpacingPx:s}=c(),l=(0,n.AH)("display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;padding:",a,"px;border-bottom:",t?`1px solid ${o}`:"none",";background:",i,";row-gap:",s,"px;");return(0,r.Y)("div",{css:l,className:"content-section-header",children:e})},m=({children:e})=>{let{headerBackgroundSecondaryColor:t}=c(),{theme:a}=(0,o.wn)(),i=(0,n.AH)("display:flex;flex-direction:column;width:fit-content;margin-right:",a.spacing.md,"px;.du-bois-light-input-affix-wrapper{background-color:",t," !important;}");return(0,r.Y)("div",{css:i,children:e})},g=({titleText:e,titleOverride:t})=>{let a=(0,n.AH)("display:flex;flex-direction:column;width:fit-content;");return(0,r.Y)("div",{css:a,children:t??(0,r.Y)(l.o.Text,{bold:!0,size:"md","aria-label":e,children:e})})},f=({subtitle:e})=>(0,r.Y)(l.o.Paragraph,{color:"secondary",withoutMargins:!0,children:e}),h=({buttons:e})=>{let{headerButtonSpacingPx:t}=c(),a=(0,n.AH)("display:flex;flex-wrap:wrap;gap:",t,"px;");return(0,r.Y)("div",{css:a,children:e})},b=({content:e})=>{let{contentPaddingPx:t}=c(),a=(0,n.AH)("padding:",t,"px;overflow-wrap:anywhere;");return(0,r.Y)("div",{css:a,children:e})},v=({content:e})=>{let{headerPaddingPx:t}=c(),{theme:a}=(0,o.wn)(),i=(0,n.AH)("padding:0;overflow-x:auto;width:100%;div[role='table']:last-child{div[role='row']:last-child{div[role='cell']{border-bottom:none;}}}[role='row'] > [role='columnheader']:first-child{padding-left:",t,"px;}[role='row'] > [role='cell']:first-child{padding-left:",t,"px;}.du-bois-dark-pagination,.du-bois-light-pagination{margin-right:",a.spacing.sm,"px;}");return(0,r.Y)("div",{css:i,className:"content-section-table-content",children:e})},y=({pairGroups:e})=>{let{theme:t}=(0,o.wn)(),{contentPaddingPx:a}=c(),s=(0,i.useMemo)(()=>e.filter(e=>e.pairs.length>0).map(e=>({pairs:e.pairs,title:e.title,id:e.pairs.map(e=>e.id).join("-")})),[e]),d=(0,n.AH)("grid-column:1 / -1;"),u=(0,n.AH)("display:grid;grid-template-columns:auto 1fr;max-width:100%;row-gap:",t.spacing.md,"px;column-gap:",8*t.spacing.sm,"px;padding:",a,"px;overflow:hidden;"),p=(0,n.AH)("overflow-wrap:anywhere;min-width:0;"),m=(0,n.AH)("grid-column:1 / -1;height:1px;background-color:",t.colors.border,";");return(0,r.Y)("div",{css:u,children:s.map(({pairs:e,title:t,id:a},n)=>(0,r.FD)(i.Fragment,{children:[n>0&&(0,r.Y)("div",{css:m,role:"separator"}),t&&(0,r.Y)(l.o.Text,{size:"md",color:"secondary",bold:!0,css:d,children:t}),e.map(({id:e,value:t,label:a})=>{let n=`${e}-label`;return(0,r.FD)(i.Fragment,{children:[(0,r.Y)(l.o.Text,{color:"secondary",id:n,children:a}),(0,r.Y)("div",{"aria-labelledby":n,css:p,children:t})]},e)})]},a))})},E=({pairs:e})=>(0,r.Y)(y,{pairGroups:[{pairs:e}]})},320126:(e,t,a)=>{a.d(t,{B:()=>u});var r=a(610435),n=a(219830),i=a(403166),o=a(964133),s=a(944552),l=a(342411),c=a(441535);let d=({value:e,label:t,popoverContent:a})=>(0,r.FD)("div",{style:{display:"flex",gridRow:"label"},children:[(0,r.Y)(n.sx,{value:e,css:{marginRight:0},children:t}),a&&(0,r.Y)("div",{css:{display:"flex",alignItems:"center",paddingTop:1,marginLeft:-6},children:(0,r.Y)(i.U,{children:a})})]}),u=({componentId:e,isAutoscalingSelected:t,formField:a,onChange:i})=>{let{formatMessage:u}=(0,l.tz)(),p=(0,c.W)("databricks.fe.lakebase.hideBetaBadge",!1),m=(0,c.W)("databricks.fe.lakebase.replaceAutoscalingSwitchWithSelector",!1);if(!p||!m)return(0,r.FD)("div",{css:{display:"flex",justifyContent:"space-between"},children:[(0,r.Y)(o.D.Label,{htmlFor:"autoscaling-beta-switch",infoPopoverContents:u(p?{id:"J/59kJ",defaultMessage:"Enable Lakebase Postgres Autoscaling for branching, instant restore, and other advanced features. HA is currently offered only in the Lakebase Provisioned Preview."}:{id:"uCfnkC",defaultMessage:"Enable to use the latest version of Lakebase Postgres, the Autoscaling beta (for evaluation only). For production, leave disabled to use standard Lakebase Postgres."}),infoPopoverProps:{popoverProps:{style:{maxWidth:400}}},children:u(p?{id:"FEhQrw",defaultMessage:"Autoscaling"}:{id:"GWIlJr",defaultMessage:"Autoscaling Beta"})}),(0,r.Y)(s.d,{componentId:e,id:"autoscaling-beta-switch",...a,checked:t,onChange:i})]});return(0,r.FD)("div",{children:[(0,r.Y)(o.D.Label,{htmlFor:"database-type-radio-group",children:(0,r.Y)(l.sA,{id:"yRfOwP",defaultMessage:"Database type"})}),(0,r.FD)(n.sx.HorizontalGroup,{componentId:"catalogCreation.lakebaseDatabaseType",id:"database-type-radio-group",...a,name:a?.name??"autoscalingBeta",value:t?"autoscaling":"provisioned",onChange:e=>{i("autoscaling"===e.target.value)},children:[(0,r.Y)(d,{value:"autoscaling",label:u({id:"Qgmeqm",defaultMessage:"Autoscaling"}),popoverContent:u({id:"3ySzDc",defaultMessage:"Autoscaling compute with branching, instant restore, and advanced features."})}),(0,r.Y)(d,{value:"provisioned",label:u({id:"y4pkKO",defaultMessage:"Provisioned"}),popoverContent:u({id:"9mNQM6",defaultMessage:"High availability (HA) and integration with Databricks apps."})})]})]})}},322227:(e,t,a)=>{a.d(t,{$:()=>i,x:()=>o});var r,n=a(696514),i=((r={}).DONE="done",r.CANCELLED="cancelled",r);let o=(0,n.fH)("Filebrowser::Move")},325056:(e,t,a)=>{a.d(t,{G:()=>u,X:()=>p});var r=a(610435),n=a(783772),i=a.n(n),o=a(692738),s=a(114826),l=a(623369),c=a(497895),d=a(123252);let u=(0,o.createContext)({size:"default",grid:!1}),p=(0,o.forwardRef)(function({children:e,size:t="default",someRowsSelected:a,style:n,pagination:p,empty:m,className:g,scrollable:f=!1,grid:h=!1,noMinHeight:b=!1,onScroll:v,...y},E){let{theme:_}=(0,c.wn)(),S=(0,o.useRef)(null);(0,o.useImperativeHandle)(E,()=>S.current);let T=b?{}:{minHeight:!m&&p?150:100};return(0,r.Y)(l.vR.Provider,{value:l.pz,children:(0,r.Y)(u.Provider,{value:(0,o.useMemo)(()=>({size:t,someRowsSelected:a,grid:h}),[t,a,h]),children:(0,r.FD)("div",{...(0,d.VG)(),...y,style:{...n,"--table-header-active-color":_.colors.actionDefaultTextPress,colorScheme:_.isDarkMode?"dark":void 0,"--table-header-background-color":_.colors.backgroundPrimary,"--table-header-focus-color":_.colors.actionDefaultTextHover,"--table-header-sort-icon-color":_.colors.textSecondary,"--table-header-text-color":_.colors.actionDefaultTextDefault,"--table-row-hover":_.colors.tableRowHover,"--table-separator-color":_.colors.border,"--table-resize-handle-color":_.colors.borderDecorative,"--table-spacing-md":`${_.spacing.md}px`,"--table-spacing-sm":`${_.spacing.sm}px`,"--table-spacing-xs":`${_.spacing.xs}px`},css:[s.Ay.tableWrapper,T],className:i()({"table-isScrollable":f,"table-isGrid":h},g),children:[(0,r.FD)("div",{role:"table",ref:S,css:[s.Ay.table,f&&{flex:"initial !important"}],tabIndex:f?0:-1,onScroll:v,children:[e,m&&(0,r.Y)("div",{css:{padding:_.spacing.lg},children:m})]}),!m&&p&&(0,r.Y)("div",{css:s.Ay.paginationContainer,children:p})]})})})})},342145:(e,t,a)=>{a.d(t,{$y:()=>u,B_:()=>_,FQ:()=>f,OD:()=>s,T4:()=>o,U1:()=>h,UX:()=>m,Yu:()=>v,bB:()=>i,cC:()=>g,k0:()=>n,nU:()=>c,sO:()=>E,sh:()=>d,wp:()=>l,xY:()=>p,xe:()=>y,zD:()=>b});var r=a(141078);let n=(0,r.J1)`
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
`,i=(0,r.J1)`
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
`,o=(0,r.J1)`
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
`,s=(0,r.J1)`
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
`,l=(0,r.J1)`
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
`,c=(0,r.J1)`
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
`,d=(0,r.J1)`
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
`,u=(0,r.J1)`
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
`,p=(0,r.J1)`
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
`,m=(0,r.J1)`
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
`,g=(0,r.J1)`
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
`,f=(0,r.J1)`
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
`,h=(0,r.J1)`
  query getAccountUsersCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountUsersCount {
      totalCount
    }
  }
`,b=(0,r.J1)`
  query getAccountServicePrincipalsCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountServicePrincipalsCount {
      totalCount
    }
  }
`,v=(0,r.J1)`
  query getAccountGroupsCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountGroupsCount {
      totalCount
    }
  }
`,y=(0,r.J1)`
  query getWorkspaceUsersCount($shouldGetDirectlyAssignedOnly: Boolean) @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceUsersCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`,E=(0,r.J1)`
  query getWorkspaceServicePrincipalsCount($shouldGetDirectlyAssignedOnly: Boolean)
  @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceServicePrincipalsCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`,_=(0,r.J1)`
  query getWorkspaceGroupsCount($shouldGetDirectlyAssignedOnly: Boolean) @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceGroupsCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`},351089:(e,t,a)=>{a.d(t,{v:()=>c,y:()=>d});var r=a(412836),n=a(733337),i=a(660618),o=a(927239),s=a(595615);function l(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}let c=e=>"isDatabaseCatalog"in e&&!0===e.isDatabaseCatalog;function d(){let{invalidate:e}=(0,s.rA)();return(0,r.n_)(({name:e,databaseName:t,instanceName:a,groupOwner:r,authAsGroup:o,createDatabaseIfNotExists:s})=>{var c;return(c=function*(){let r=new URL(`${i.e0}/catalogs`,window.location.href);return yield(0,n.nr)(r.toString(),{method:"POST",body:JSON.stringify({name:e,database_name:t,database_instance_name:a,create_database_if_not_exists:!!s})})},function(){var e=this,t=arguments;return new Promise(function(a,r){var n=c.apply(e,t);function i(e){l(n,a,r,i,o,"next",e)}function o(e){l(n,a,r,i,o,"throw",e)}i(void 0)})})()},{onSuccess:()=>{e([o.xQ])}})}},352185:(e,t,a)=>{a.d(t,{A6:()=>E,Ds:()=>p,FI:()=>u,I7:()=>d,m1:()=>c});var r,n,i,o=a(446835),s=a.n(o),l=a(978679),c=((r={}).CONFIGURATION="configuration",r.NOTEBOOKS="notebooks",r.LIBRARIES="libraries",r.SPARK_UI="sparkUi",r.DRIVER_LOGS="driverLogs",r.METRICS="metrics",r.SPARK_CLUSTER_UI="sparkClusterUi",r.APPS="apps",r.EVENTS="events",r);let d="/compute";var u=((n={}).InteractiveListPage="interactive",n.AutomatedListPage="automated",n.SqlWarehouses="sql-warehouses",n.BrickIndex="vector-search",n.BrickStore="online-stores",n.DatabaseInstances="database-instances",n.InstancePools="instance-pools",n.ClusterPolicies="policies",n.LakehouseApps="apps",n.GpuPools="gpu-pools",n.Serverless="serverless",n),p=((i={}).New="new",i.Edit="edit",i);let m=function e(...t){let a=RegExp("(^/*)|(/*$)","g"),r=s()(t).map(e=>e.trim().replace(a,"")).join("/"),n=r?`/${r}`:"",i=t=>t?e(n,t)():n;return i.append=(...t)=>e(n,...t),i}(d),g=m.append("instance-pools"),f=m.append("policies"),h=m.append("sparkui"),b=m.append("clusters"),v=m.append("database-instances");function y(e){return["driver",e].filter(l.zz).join("-")}let E={clusterMainPage:e=>m(e),sqlWarehouse:{create:()=>m.append("sql-warehouses")("new")},brickStore:{list:()=>E.clusterMainPage("online-stores"),view:e=>m.append("online-stores")(e)},databaseInstances:{list:()=>E.clusterMainPage("database-instances"),view:e=>v(e),edit:e=>v.append(e)("edit")},cluster:{view(e,t,a){let r=b.append(e);if(!t||"configuration"===t)return r();if("driverLogs"===t)return r("driver-logs");if("sparkUi"===t)return r("spark-ui");if("sparkClusterUi"===t)return r.append("spark-compute-ui")(("MASTER"===a?"master":a)??"master");return r(t)},edit:e=>b.append(e)("edit"),new:(e={})=>{let t="policyId"in e?`?policyId=${e.policyId}`:"",a="clone"in e?`?clone=${e.clone}`:"";return b.append("new")(a||t)}},sparkUi:{driverUi:(e,t)=>h.append(e)(`driver${t?`-${t}`:""}`),logs:(e,t)=>{let a=h.append(e)("driver-logs");if(!t?.jobId&&!t?.runId)return a;let r=new URLSearchParams;return t.jobId&&r.set("jobId",String(t.jobId)),t.runId&&r.set("runId",String(t.runId)),`${a}?${r}`},uiWithPath:e=>h.append(e)(),metrics:e=>h.append(e)("metrics"),stage:(e,t,a,r)=>h.append(e,y(t))(`stages/stage?id=${a}&attempt=0${void 0!==r?"&o="+r:""}`),job:(e,t,a,r)=>h.append(e,y(t))(`jobs/job?id=${a}${void 0!==r?"&o="+r:""}`)},brickIndex:{list:()=>E.clusterMainPage("vector-search"),view:e=>m.append("vector-search")(e)},policy:{view:e=>f(e),create:()=>f("new"),clone:e=>E.policy.create()+`?clone=${e}`,edit:e=>f.append(e)("edit")},pool:{view:e=>g(e),create:()=>g("new"),edit:e=>g.append(e)("edit")}}},353684:(e,t,a)=>{a.d(t,{I:()=>b,j:()=>v});var r=a(160603),n=a(409989),i=a(412836),o=a(217002),s=a(539305),l=a(841734),c=a(29824),d=a(660618),u=a(165091),p=a(166893),m=a(372854);function g(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}function f(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function o(e){g(i,r,n,o,s,"next",e)}function s(e){g(i,r,n,o,s,"throw",e)}o(void 0)})}}let h={[c.an.EXTERNAL_LOCATION]:s.C,[c.an.STORAGE_CREDENTIAL]:o.i,[c.an.CREDENTIAL]:o.i,[c.an.CATALOG]:l.ry};function b(e){let t=(0,r.useQueryClient)(),a=m.RF[e];return(0,i.n_)(({securableName:e,payload:t})=>f(function*(){return function(t){return f(function*(){let r,i=yield n.pY.patch((r=encodeURIComponent(e),`${d.bY}/bindings/${a}/${r}`),t);return((i?.data||i)??null).bindings})()}(t)})(),{onSuccess:(r,n)=>{let{securableName:o}=n;if(i.aH.getActiveValue().invalidateQueries(["workspace_bindings:v1",a,o]),h[e]){t.resetQueries(h[e](o));let a=((e,t)=>{switch(e){case c.an.EXTERNAL_LOCATION:return["authz_eval","external_location",t];case c.an.STORAGE_CREDENTIAL:return["authz_eval","storage_credential",t];case c.an.CREDENTIAL:return["authz_eval","credential",t];default:return[]}})(e,o);a&&t.refetchQueries(a)}}})}function v(){let e=(0,u.q)(),t=b(c.an.CATALOG);return(0,i.n_)(({catalogName:a,payload:r})=>f(function*(){e.isSuccess||(yield e.mutateAsync({catalog:a,payload:{isolation_mode:p.ZB.ISOLATED}})),r.add&&r.add.length>0&&(yield t.mutateAsync({securableName:a,payload:r}))})())}},359504:(e,t,a)=>{a.d(t,{z:()=>d});var r=a(610435),n=a(956935),i=a(692738),o=a(79128),s=a(497895),l=a(834343),c=a(407374);let d=(0,i.forwardRef)(function({onSubmit:e,showSearchButton:t,className:a,containerProps:i,searchButtonProps:d,ignoreFilterMediaSizing:u=!1,componentId:p,...m},g){let{theme:f}=(0,s.wn)(),h=(0,r.Y)(c.p,{prefix:(0,r.Y)(l.A,{}),allowClear:!0,componentId:p,...m,className:a,ref:g});return t&&(h=(0,r.FD)(c.p.Group,{css:{display:"flex",width:"100%"},className:a,children:[(0,r.Y)(c.p,{allowClear:!0,componentId:p,...m,ref:g,css:{flex:1}}),(0,r.Y)(o.$n,{componentId:p?`${p}.search_submit`:"codegen_design-system_src_design-system_tableui_tablefilterinput.tsx_65",htmlType:"submit","aria-label":"Search",...d,children:(0,r.Y)(l.A,{})})]})),(0,r.Y)("div",{style:{height:f.general.heightSm},css:u?{}:(0,n.AH)({[f.responsive.mediaQueries.sm]:{width:"auto"},[f.responsive.mediaQueries.lg]:{width:"30%"},[f.responsive.mediaQueries.xxl]:{width:400}}),...i,children:e?(0,r.Y)("form",{onSubmit:t=>{t.preventDefault(),e()},children:h}):h})})},365532:(e,t,a)=>{a.d(t,{B:()=>l});var r=a(692738),n=a(711819),i=a(348907),o=a(617293),s=a(29824);let l=r.memo(function({objectType:e,browseOnly:t=!1,accessible:a=!0,withTooltip:l=!0,tooltipProps:c={},styleProps:d,avatarStyleSize:u=null,name:p,securableKind:m,catalogProps:g}){let f=(0,r.useMemo)(()=>c,[c]),h=(0,n.IE)({objectType:e,browseOnly:t,accessible:a,tooltipProps:f,styleProps:d,avatarStyleSize:u,withTooltip:l,isPostgres:g?.isPostgres,securableKind:m});if(e!==s.an.CATALOG)return h;{let e=(0,o.K2)({catalogName:p,catalogType:g?.catalogType,securableKind:g?.securableKind,isDefaultCatalog:g?.isDefault});return(0,i.yb)({name:p,accessible:a,securableKind:g?.securableKind,browseOnly:t,tooltipProps:c,avatarStyleSize:u,catalogIconVariant:e,withTooltip:l,isPostgres:g?.isPostgres})}})},377405:(e,t,a)=>{a.d(t,{_:()=>l,a:()=>c});var r=a(610435),n=a(342411),i=a(141078),o=a(472433),s=a(89930);let l=(0,i.J1)`
  fragment TablePopularityData on MetadatalineageapiserverTablePopularityInfo {
    bucket
    queryCount
  }
`,c=({data:e,includeTooltip:t=!1,onClick:a,...i})=>{let{bucket:l,queryCount:c}=e||{},d=(0,n.tz)(),u=t?(0,s.hy)({queryCount:c?parseInt(c):0,popularity:l??0,intl:d,isClickable:!!a}):void 0;return(0,r.Y)(o.ql,{popularity:l??0,tooltipTitle:u,onClick:a,...i})}},402720:(e,t,a)=>{let r;a.d(t,{P:()=>c});var n=a(610435),i=a(400136),o=a(591333),s=a(429608),l=a(866370);let c=((r=({dangerouslySetAntdProps:e,label:t,loadingDescription:a="LegacySkeleton",...r})=>{let c=r.loading??!0;return(0,n.Y)(s.wC,{children:(0,n.FD)(o.U,{label:t,children:[c&&(0,n.Y)(l.G,{description:a}),(0,n.Y)(i.A,{...r,...e})]})})}).Button=i.A.Button,r.Image=i.A.Image,r.Input=i.A.Input,r)},402868:(e,t,a)=>{a.d(t,{O:()=>o});var r=a(618297),n=a.n(r),i=a(74529);function o(e){return(0,i.f)(e,n())}},404991:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m2.207-10.189a2.25 2.25 0 0 1-1.457 2.56V9h-1.5V7.75A.75.75 0 0 1 8 7a.75.75 0 1 0-.75-.75h-1.5a2.25 2.25 0 0 1 4.457-.439M7.25 10.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="QuestionMarkFillIcon";let l=s},408278:(e,t,a)=>{a.d(t,{Ei:()=>u,Mw:()=>d,OQ:()=>v,P9:()=>m,Qi:()=>I,RF:()=>R,V2:()=>o,Wu:()=>E,bv:()=>T,eL:()=>h,gd:()=>y,hK:()=>C,hf:()=>l,iw:()=>c,jC:()=>b,lj:()=>_,o0:()=>S,uT:()=>f,xl:()=>g,yt:()=>p,zh:()=>s});var r=a(441535),n=a(483588),i=a(210383);function o(){let e=(0,r.W)("dm_anomaly_detection",null)??(0,r.W)("anomaly_detection_ws",null)??(0,r.W)("databricks.datamonitoring.enableAnomalyDetection",!1),t=(0,r.W)("databricks.datamonitoring.dataMonitoringEnabledForShard",!1),a=(0,r.W)("databricks.datamonitoring.disableLakehouseMonitoring",!1);return!!(e&&t&&!a)}function s(){return(0,r.W)("databricks.fe.datamonitoring.enableAnomalyDetectionBetaUI",!1)&&o()}function l(){return(0,r.W)("databricks.fe.datamonitoring.catalogEnablementUI",!1)}function c(){return(0,r.W)("databricks.fe.datamonitoring.excludedTablesResultsUI",!1)}function d(){return(0,r.W)("databricks.fe.datamonitoring.enableRecentlyResolvedIncidents",!1)}function u(){return(0,r.W)("databricks.fe.datamonitoring.enableUserFeedbackResolutions",!1)}function p(e){return"ANOMALY_DETECTION_JOB_TYPE_INTERNAL_HIDDEN"===e}function m(){return(0,r.W)("databricks.fe.datamonitoring.enableAnomalyDetectionDaisDemo",!1)}function g(){return(0,r.W)("databricks.fe.datamonitoring.permissionAwareRCA",!1)}function f(){return(0,r.W)("databricks.fe.datamonitoring.enableRcaV2",!1)&&g()}function h(){return(0,r.W)("databricks.fe.datamonitoring.isAlertingBetaEnabled",!1)}let b=[i.K.COLLECTING_DATA,i.K.NOT_ENOUGH_DISTINCT_DAYS,i.K.FAILED_TO_FIT_MODEL,i.K.FAILED_TO_FIT_MODEL_WITH_HIGH_RESIDUAL,i.K.NO_UPDATES_IN_TABLE_HISTORY,i.K.NOT_ENOUGH_UPDATE_OP_BACKTESTING,i.K.NOT_ENOUGH_UPDATE_OP,i.K.NOT_ENOUGH_TABLE_HISTORY,i.K.NOT_ENOUGH_TABLE_HISTORY_CUSTOM_SQL],v=[i.K.ROW_COUNT_COLLECTION_ERROR,i.K.INTERNAL_ERROR,i.K.FAILED_TO_PREDICT,i.K.FAILED_TO_FETCH_HISTORY,i.K.PERMISSION_DENIED,i.K.USER_ERROR,i.K.MATERIALIZED_VIEW_HISTORY_ERROR,i.K.STREAMING_TABLE_HISTORY_ERROR,i.K.TOO_FREQUENTLY_UPDATING,i.K.LEGACY_MV_NOT_SUPPORTED,i.K.STORAGE_ACCESS_ERROR,i.K.TABLE_NOT_FOUND];function y(e,t){if(null==e)return!1;let a="string"==typeof e?e.toUpperCase():e.status?.replace(/^HEALTH_STATUS_/,"")??"UNKNOWN";if("TRAINING"===a)return!0;if("UNKNOWN"!==a)return!1;if("string"==typeof e)return null!=t&&""!==t&&b.includes(t);return e.qualityChecks?.some(e=>!!e.errorCode&&b.includes(e.errorCode??""))??!1}function E(e){let t=e?.qualityChecks;if(!t?.length)return!1;return t.some(e=>e.status===n.LUs.HEALTH_STATUS_HEALTHY||e.status===n.LUs.HEALTH_STATUS_UNHEALTHY)}function _(e){if(!e)return!1;return e.status===n.LUs.HEALTH_STATUS_UNMONITORED}function S(e,t){if(null==e)return!1;let a="string"==typeof e?e.toUpperCase():e.status?.replace(/^HEALTH_STATUS_/,"")??"UNKNOWN";if("HEALTHY"===a||"UNHEALTHY"===a)return!1;if("ERROR"===a)return!0;if("UNKNOWN"!==a)return!1;if("string"==typeof e)return null!=t&&""!==t&&v.includes(t);return e.qualityChecks?.some(e=>!!e.errorCode&&v.includes(e.errorCode??""))??!1}function T(e,t){if(S(e,t))return"ERROR";if(y(e,t))return"TRAINING";return e}function I({tableHealthIndicator:e,isSchemaADEnabled:t,isExcluded:a,latestRunStatus:r}){let n=_(e),i=n&&!a&&!!t,o=i&&"ANOMALY_DETECTION_RUN_STATUS_FAILED"===r,s=!a&&(S(e)||o),l=!a&&!o&&(y(e)||i),c=s&&e?{...e,status:"HEALTH_STATUS_ERROR"}:e;return{hasNoResults:n,isError:s,isTraining:l,showNotEnabled:n&&!t&&!a,isPendingResults:i,displayHealthIndicator:c}}function C(e){return e.toLowerCase().split("_").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}new Intl.RelativeTimeFormat(void 0,{numeric:"auto"});let A=["SCHEMA_DOES_NOT_EXIST","TABLE_DOES_NOT_EXIST"];function R(e){let t=e?.code;if(!t)return!1;return A.includes(t)}},415273:(e,t,a)=>{a.d(t,{p:()=>d});var r=a(610435),n=a(692738),i=a(325056),o=a(293418),s=a(114826),l=a(332702),c=a(497895);let d=(0,n.forwardRef)(function({onChange:e,checked:t,indeterminate:a,noCheckbox:d,children:u,isDisabled:p,checkboxLabel:m,componentId:g,analyticsEvents:f,...h},b){let{theme:v}=(0,c.wn)(),{isHeader:y}=(0,n.useContext)(o.g),{someRowsSelected:E}=(0,n.useContext)(i.G);if(void 0===E)throw Error("`TableRowSelectCell` cannot be used unless `someRowsSelected` has been provided to the `Table` component, see documentation.");if(!y&&a)throw Error("`TableRowSelectCell` cannot be used with `indeterminate` in a non-header row.");return(0,r.Y)("div",{...h,ref:b,css:s.Ay.checkboxCell,style:{"--row-checkbox-opacity":+!!E,zIndex:v.options.zIndexBase},role:y?"columnheader":"cell",className:"table-row-select-cell",children:!d&&(0,r.Y)(l.Sc,{componentId:g,analyticsEvents:f,isChecked:t||a&&null,onChange:(t,a)=>e?.(a.nativeEvent),isDisabled:p,"aria-label":m})})})},418230:(e,t,a)=>{a.d(t,{U:()=>i});var r=a(692738),n=a(829478);function i(e){var t;return t=r.useMemo(()=>window.matchMedia(e),[e]),(0,n.useSyncExternalStore)(r.useCallback(e=>(t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}),[t]),()=>t.matches)}},424489:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",d:"M12.125 8.864a.75.75 0 0 0 0-1.3l-6-3.464A.75.75 0 0 0 5 4.75v6.928a.75.75 0 0 0 1.125.65z"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="PlayIcon";let l=s},434288:(e,t,a)=>{a.d(t,{l:()=>r});let r=(0,a(342411).YK)({requestPermissions:{id:"CrJ5nP",defaultMessage:"Request permissions"},requestDeltaSharingPermissions:{id:"P0HsgX",defaultMessage:"Request Delta Sharing permissions"},requestAccessDisabledTooltip:{id:"LW+CW/",defaultMessage:"Requests for access are not enabled for this object. Please contact the object owner or administrator for additional permissions."},requestAccessDeltaSharingRecipientDisabledTooltip:{id:"HX5unK",defaultMessage:"Requests for access are not enabled for this object. Please contact the object owner or administrator for USE_PROVIDER permissions."},requestAccessDeltaSharingProviderDisabledTooltip:{id:"pdgj40",defaultMessage:"Requests for access are not enabled for this object. Please contact the object owner or administrator for CREATE_RECIPIENT and CREATE_SHARE permissions."},requestAccessDisabledMultipleTooltip:{id:"b2k+c/",defaultMessage:"Requests for access are not enabled for these objects. Please contact the object owners or administrators for additional permissions."}})},438965:(e,t,a)=>{a.d(t,{Y:()=>o});var r=a(879612),n=a(29824),i=a(641760);function o(e){let t=(0,i.ei)(),a=(0,r.xO)({securableType:n.an.CATALOG,securableKind:e},{isUcEnabled:t});return!!a?.includes("BROWSE")}},450275:(e,t,a)=>{a.d(t,{d:()=>s,v:()=>n});var r,n=((r={}).Bytes="Bytes",r.KiloBytes="KiloBytes",r.MegaBytes="MegaBytes",r.GigaBytes="GigaBytes",r.TeraBytes="TeraBytes",r.PetaBytes="PetaBytes",r.ExaBytes="ExaBytes",r.ZettaBytes="ZettaBytes",r.YottaBytes="YottaBytes",r);let i={Bytes:0,KiloBytes:1,MegaBytes:2,GigaBytes:3,TeraBytes:4,PetaBytes:5,ExaBytes:6,ZettaBytes:7,YottaBytes:8},o=["Bytes","KiloBytes","MegaBytes","GigaBytes","TeraBytes","PetaBytes","ExaBytes","ZettaBytes","YottaBytes"];function s(e,t="Bytes"){if(e<0)return{size:e,sizeUnit:t};let a=e*Math.pow(1024,i[t]),r=Math.floor(Math.log(a)/Math.log(1024));return{size:a/Math.pow(1024,r=Math.min(Math.max(r,0),o.length-1)),sizeUnit:o[r]}}},459528:(e,t,a)=>{a.d(t,{E:()=>n,v:()=>i});var r=a(696514);let n=(0,r.fH)("Clusters::ExecuteSql"),i=(0,r.fH)("Clusters::CancelSql")},465082:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a3.25 3.25 0 1 0 0 6.5A3.25 3.25 0 0 0 8 1M6.25 4.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M8 9a8.74 8.74 0 0 0-6.836 3.287.75.75 0 0 0-.164.469v1.494c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75v-1.494a.75.75 0 0 0-.164-.469A8.74 8.74 0 0 0 8 9m-5.5 4.5v-.474A7.23 7.23 0 0 1 8 10.5c2.2 0 4.17.978 5.5 2.526v.474z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="UserIcon";let l=s},472433:(e,t,a)=>{a.d(t,{ID:()=>l,ql:()=>c});var r=a(610435),n=a(497895),i=a(262786),o=a(802582),s=a(342411);let l="popularity-metric-wrapper";function c({isLoading:e,isError:t,popularity:a,onClick:d,tooltipTitle:u,tooltipPlacement:p="top"}){let{theme:m}=(0,n.wn)(),g=(0,s.tz)(),f={barWidth:m.spacing.xs-1,barHeightIncrement:m.spacing.xs-1,zeroPopularityBarHeight:m.spacing.xs/2,zeroPopularityBottomMargin:m.spacing.xs,minWidth:4*m.spacing.xs};if(e)return(0,r.Y)("div",{role:"status","aria-label":g.formatMessage({id:"H6/mm2",defaultMessage:"Loading popularity"}),"data-testid":"popularity-metric-loading",children:(0,r.Y)(i.Q,{style:{width:f.minWidth}})});if(t||void 0===a)return(0,r.Y)(r.FK,{});let h=[],b={display:"flex",minWidth:f.minWidth,"&:hover":{cursor:d?"pointer":"default"},"&:hover .popularity-hover":{backgroundColor:`${m.colors.actionTertiaryTextDefault}`}},v={backgroundColor:m.colors.textSecondary,borderRadius:"1px",display:"inline-block",width:f.barWidth,marginRight:"1px"};for(let e=0;e<4;e++){let t=0!==a?{height:f.barHeightIncrement*(e+1)}:{height:f.zeroPopularityBarHeight,marginBottom:f.zeroPopularityBottomMargin},n=a>e?{}:{opacity:.3};h.push((0,r.Y)("span",{className:d?"popularity-hover":"",css:[v,t,n]},e))}return(0,r.Y)("div",{role:"img","aria-label":g.formatMessage({id:"RuAO7b",defaultMessage:"Popularity"}),"data-testid":l,onClick:()=>{d&&d()},css:b,children:u?(0,r.Y)(o.p,{title:u,placement:p,children:(0,r.Y)("div",{children:h})}):(0,r.Y)("div",{children:h})})}},482921:(e,t,a)=>{a.d(t,{G:()=>i,M:()=>n});var r,n=((r={}).ONLY_CLUSTER="ONLY_CLUSTER",r.ONLY_WAREHOUSE="ONLY_WAREHOUSE",r.WAREHOUSE_AND_CLUSTER="WAREHOUSE_AND_CLUSTER",r);let i=(e,t)=>{if(!t&&e)return"ONLY_CLUSTER";if(!e)return"ONLY_WAREHOUSE";return"WAREHOUSE_AND_CLUSTER"}},487404:(e,t,a)=>{a.d(t,{f:()=>m});var r=a(610435),n=a(956935),i=a(783772),o=a.n(i),s=a(692738),l=a(325056),c=a(293418),d=a(114826),u=a(497895);let p={container:(0,n.AH)({width:32,paddingTop:"var(--vertical-padding)",paddingBottom:"var(--vertical-padding)",display:"flex",alignItems:"start",justifyContent:"center"})},m=(0,s.forwardRef)(function({children:e,style:t,className:a,...n},i){let{size:m}=(0,s.useContext)(l.G),{isHeader:g}=(0,s.useContext)(c.g),{theme:f}=(0,u.wn)();return(0,r.Y)("div",{...n,ref:i,role:g?"columnheader":"cell",style:{...t,"--vertical-padding":"default"===m?`${f.spacing.xs}px`:0},css:p.container,className:o()(a,!g&&d.TJ),children:e})})},492814:(e,t,a)=>{a.d(t,{E:()=>d});var r=a(747206),n=a(648782),i=a(820628),o=a(181376),s=a(673240);let l="/explore/locations",c="/explore/external-metadata";function d(){let e=(0,s.Ck)(),{metastoreId:t,schema:a,table:d,volume:u,ucFunction:p,model:m,modelVersion:g,secret:f,notebook:h,share:b,recipient:v,provider:y,credential:E,location:_,connection:S,tableFullName:T,externalMetadata:I}=(0,n.g)(),{catalog:C}=(0,n.g)(),A=(0,i.UA)(),R=A?.[A?.length-1];return void 0===C&&[o.E.ExploreDataHiveCatalog,o.E.ExploreDataHiveSchema,o.E.ExploreDataHiveTable,o.E.ExploreDataSamplesCatalog,o.E.ExploreDataSamplesSchema,o.E.ExploreDataSamplesTable].includes(R?.pageId)&&(C=R?.path.match(/^data\/([^/]+)(?:\/|$)/)?.[1]),{showData:()=>e("/explore/data"),showMetastore:()=>{e((0,r.sZ)())},showUpgradeWizard:(t,a)=>{e(`/explore/upgrade/${encodeURIComponent(t)}${a?`/${encodeURIComponent(a)}`:""}`)},showConnections:()=>{e("/explore/connections")},showConnection:t=>{e((0,r.U3)(t))},showCreateConnection:t=>{e(`/explore/connections/create${t?`?credential=${encodeURIComponent(t)}`:""}`)},showEditConnection:t=>{e(`/explore/connections/${encodeURIComponent(t)}/edit`)},showLocations:()=>{e(l)},showLocation:t=>{e((0,r.n5)(t))},showCreateLocation:()=>{e(`${l}/create`)},showEditLocation:t=>{e(`${(0,r.n5)(t)}/edit`)},showLocationBrowser:t=>{e(`${(0,r.n5)(t)}/browse`)},showLocationWorkspace:t=>{e(`${(0,r.n5)(t)}/workspace`)},showLocationPermission:t=>{e(`${(0,r.n5)(t)}/permission`)},showCredential:t=>{e(`/explore/credentials/${encodeURIComponent(t)}`)},showCredentials:()=>{e("/explore/credentials")},showExternalMetadataList:()=>{e(c)},showExternalMetadata:t=>{e(`${c}/${encodeURIComponent(t)}`)},showCreateExternalMetadata:()=>{e("/governance/external-metadata/create")},showExternalMetadataEdit:t=>{e(`/governance/external-metadata/${encodeURIComponent(t)}/edit`)},showVolume:(t,a,n)=>{e((0,r.IM)(t,a,n))},showCreatePolicy:t=>{e(`/governance/policies/create?entity=${encodeURIComponent(t)}`)},showSecret:(t,a,n)=>{e((0,r.QT)(t,a,n))},showSchema:(t,a)=>{e(`/explore/data/${a}/${t}`)},showTable:(t,a,n)=>{e((0,r.ff)(t,a,n))},catalog:C,schema:a,table:d,volume:u,ucFunction:p,model:m,modelVersion:g,secret:f,notebook:h,share:b,recipient:v,provider:y,credential:E,location:_,connection:S,metastoreId:t,tableFullName:T,externalMetadata:I}}},509695:(e,t,a)=>{a.d(t,{h:()=>d,p:()=>c});var r=a(610435),n=a(452137),i=a.n(n),o=a(692738),s=a(566512);let l=(0,o.createContext)(void 0),c=({children:e})=>{let[t,a]=(0,s.o)();return(0,r.FD)(l.Provider,{value:t,children:[e,a]})},d=()=>{let e=(0,o.useContext)(l);return i()(null!=e,"Must wrap child in NotificationProvider"),e}},509901:(e,t,a)=>{a.d(t,{Yf:()=>p,gf:()=>g,ok:()=>u,s5:()=>m});var r=a(413063),n=a.n(r),i=a(692738),o=a(412836),s=a(425373),l=a(302118);function c(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}function d(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function o(e){c(i,r,n,o,s,"next",e)}function s(e){c(i,r,n,o,s,"throw",e)}o(void 0)})}}function u(e,t,a){let r=(0,i.useCallback)(({key:e,...t})=>({queryKey:["authz_eval",...e],queryFn:({signal:e})=>d(function*(){return yield l.k.authzEval(t,a?{signal:e}:void 0)})()}),[a]);return(0,o.IT)({...r(e),...t})}function p(e,t,a){var r,i,o;let c,u=(0,s.E)({queries:(r=e,i=t,o=a,c=["authz_eval"].concat(r),n()(Object.entries(i.actions),m).map((e,t)=>{let a=e.reduce((e,t)=>(e[t[0]]=t[1],e),{});return{queryKey:[...c,t],queryFn:()=>{var e;return e={actions:a,include_argument_metadata:i.include_argument_metadata},d(function*(){return yield l.k.authzEval(e)})()},enabled:o?.enabled,refetchOnWindowFocus:o?.refetchOnWindowFocus==="always"||!!o?.refetchOnWindowFocus,staleTime:o?.staleTime}}))}),p=u.some(e=>e.isLoading);if(p)return{isLoading:p,data:null,isError:!1,errors:[]};let g=u.reduce((e,t)=>(t.error&&e.push(t.error),e),[]);if(g.length>0)return{isLoading:p,data:null,isError:!0,errors:g};return{isLoading:p,data:u.reduce((e,t)=>{if(t.data&&t.data?.actions)return{actions:{...e.actions,...t.data.actions}};return e},{actions:{}}),isError:!1,errors:[]}}let m=100;function g(e){e.invalidateQueries(["authz_eval"])}},539305:(e,t,a)=>{a.d(t,{C:()=>r});let r=e=>["get_external_location",e]},566825:(e,t,a)=>{a.d(t,{Ay:()=>y,Ns:()=>h,ZC:()=>v,r:()=>b});var r=a(987962),n=a.n(r),i=a(623576),o=a.n(i),s=a(189219),l=a.n(s),c=a(923305),d=a(651139),u=a(949313),p=a(670943),m=a(924636),g=a(984741),f=a(885364);function h(e){return n()(e,"job.id")?(0,u.Ec)(e.job.id,1e3):e}let b=["get-data-sources"],v=(0,g.to)("sql/images/db-logos"),y={query:()=>(0,p.Ym)()?d.pY.get(m.bI).then(e=>e?.data_sources||[]):d.pY.get((0,c.Hi)("api/data_sources")),get:({id:e})=>d.pY.get((0,c.Hi)(`api/data_sources/${e}`)),types:()=>d.pY.get((0,c.Hi)("api/data_sources/types")),create:e=>d.pY.post((0,c.Hi)("api/data_sources"),e),save:e=>d.pY.post((0,c.Hi)(`api/data_sources/${e.id}`),e),test:e=>d.pY.post((0,c.Hi)(`api/data_sources/${e.id}/test`)),delete:({id:e})=>d.pY.delete((0,c.Hi)(`api/data_sources/${e}`)),fetchSchema:(e,t=!1)=>{let a={};return t&&(a.refresh=!0),d.pY.get((0,c.Hi)(`api/data_sources/${e.id}/schema`),{params:a}).then(e=>{if(n()(e,"job"))return(0,u.Ec)(e.job.id).catch(t=>1===t.code?[]:Promise.reject(Error(e.job.error)));return n()(e,"schema")?e.schema:Promise.reject()}).then(e=>o()(e,e=>{var t;return{...e,columns:(t=e.columns,o()(t,e=>l()(e)?e:{name:e})),type:e.type}}))},fetchColumns:(e,t,a)=>d.pY.get((0,c.Hi)(`api/data_sources/${e}/${t}/columns/${a}`)).then(h).then((0,f.g)("DataSource.fetchColumns"))}},571739:(e,t,a)=>{a.d(t,{J:()=>i,z:()=>o});var r,n=a(696514),i=((r={}).DONE="done",r.CANCELLED="cancelled",r);let o=(0,n.fH)("Filebrowser::Clone")},572382:(e,t,a)=>{a.d(t,{CU:()=>s,U1:()=>l,iC:()=>o,kc:()=>n,sT:()=>i});var r=a(32121);function n(e){return e?.edges.map(e=>e.node)}function i({networkStatus:e}){return e===r.pT.fetchMore}function o({networkStatus:e}){return e===r.pT.refetch}function s({networkStatus:e}){return e===r.pT.poll}function l({__typename:e,...t}){return t}},574132:(e,t,a)=>{a.d(t,{y:()=>i});var r=a(610435);a(692738);var n=a(497895);let i=({disabled:e,children:t})=>{let{theme:a}=(0,n.wn)();return(0,r.Y)("div",{css:{color:a.colors.textSecondary,fontSize:a.typography.fontSizeSm,...e&&{color:a.colors.actionDisabledText}},children:t})}},583971:(e,t,a)=>{a.d(t,{Ri:()=>u});var r=a(733337),n=a(641760),i=a(278983);function o(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}function s(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function s(e){o(i,r,n,s,l,"next",e)}function l(e){o(i,r,n,s,l,"throw",e)}s(void 0)})}}let l=[1,1,2,3,5,8,13,21],c=l.length;function d(e){return e instanceof n.XD}function u(e,t){return s(function*(e,t,a=1e3){let n=0,o=null;for(;n<c;)try{return yield(0,r.nr)(e,t)}catch(e){if(o=e,d(e)&&function(e){if(!d(e))return!1;return 429===e.response.status}(e))(0,i.y)("clientsideEvent",{eventType:"ApiFetchRetry",eventName:"RetryAttempt",retryCount:n}),yield function(e){return s(function*(e,t=1e3){let a=function(e,t=1e3){let a=Math.min(e,l.length-1);return l[a]*t}(e,t);return new Promise(e=>setTimeout(e,a))}).apply(this,arguments)}(n,a),n++;else break}throw d(o)&&n===c&&(0,i.y)("clientsideEvent",{eventType:"ApiFetchRetry",eventName:"MaxRetryAttemptReached",errorCode:o?.response?.status,retryCount:n}),o}).apply(this,arguments)}},585703:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M5 8a3 3 0 1 0 6 0 3 3 0 0 0-6 0m3-4.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CircleOutlineIcon";let l=s},595615:(e,t,a)=>{a.d(t,{AO:()=>u,Ox:()=>m,RK:()=>f,ic:()=>h,rA:()=>g,uV:()=>p});var r=a(692738),n=a(160603),i=a(441535),o=a(412836),s=a(425373);function l(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}(0,n.setLogger)({log:console.log,warn:console.warn,error:()=>{}});let c={retry:!1,refetchOnWindowFocus:!1,staleTime:3e5},d=new Map;function u(e){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),a={...c,...e,enabled:e?.enabled!==!1&&t},r={...c,...e,enabled:e?.enabled!==!1&&!t};d.set(JSON.stringify(e.queryKey),e.queryKey);let s=(0,o.IT)(a),l=(0,n.useQuery)(r);return t?s:l}function p({queries:e}){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),a=e.map(e=>({...c,...e,enabled:e?.enabled!==!1&&t})),r=e.map(e=>({...c,...e,enabled:e?.enabled!==!1&&!t}));e.forEach(e=>d.set(JSON.stringify(e.queryKey),e.queryKey));let o=(0,s.E)({queries:a}),l=(0,n.useQueries)(r);return t?o:l}function m({queryFn:e}){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),a=(0,n.useQueryClient)(),s=e();return(0,r.useCallback)((e,r={})=>t?o.aH.getActiveValue().fetchQuery({...r,...s(e)},c):a.fetchQuery({...r,...s(e)},c),[s,t,a])}function g(){let[e,t]=(0,r.useState)(0),a=(0,n.useQueryClient)(),s=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1);return{invalidate:(e,r)=>{var n;return(n=function*(){t(e=>e+1);try{if(e)yield s?o.aH.getActiveValue().invalidateQueries(e):a.invalidateQueries(e),d.delete(JSON.stringify(e));else{let e=Array.from(d.values()).filter(e=>{if(!Array.isArray(e))return!1;if(!r)return!0;return e.some(e=>"string"==typeof e&&e.includes(r))}).filter(e=>void 0!==e).map(e=>s?o.aH.getActiveValue().invalidateQueries(e):a.invalidateQueries(e));yield Promise.allSettled(e),d=new Map}}finally{t(e=>e-1)}},function(){var e=this,t=arguments;return new Promise(function(a,r){var i=n.apply(e,t);function o(e){l(i,a,r,o,s,"next",e)}function s(e){l(i,a,r,o,s,"throw",e)}o(void 0)})})()},isLoadingInvalidation:e>0}}function f(e){for(let t of e){let e=t.isIdle??void 0;if(!h({isIdle:e,status:t.status??void 0,fetchStatus:t.fetchStatus??void 0}))return!1}return!0}function h(e){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),a=e.isIdle??!1;if(t)return"fetchStatus"in e&&"loading"===e.status&&"idle"===e.fetchStatus;return a}},598296:(e,t,a)=>{a.d(t,{an:()=>o,cf:()=>s,yh:()=>l});var r,n,i,o=((r={}).METASTORE="METASTORE",r.CATALOG="CATALOG$",r.DATABASE="DATABASE",r.TABLE="TABLE",r.VIEW="VIEW",r.STORAGE_CREDENTIAL="STORAGE_CREDENTIAL",r.EXTERNAL_LOCATION="EXTERNAL_LOCATION",r.FUNCTION="FUNCTION",r.REGISTERED_MODEL="REGISTERED_MODEL",r.VOLUME="VOLUME",r.CONNECTION="CONNECTION",r.EXTERNAL_METADATA="EXTERNAL_METADATA",r),s=((n={}).ALL="ALL",n.USAGE="USAGE",n.SELECT="SELECT",n.CREATE="CREATE",n.MODIFY="MODIFY",n.READ_METADATA="READ_METADATA",n.READ_FILES="READ_FILES",n.WRITE_FILES="WRITE_FILES",n.CREATE_TABLE="CREATE_TABLE",n.CREATE_MOUNT="CREATE_MOUNT",n.USE_CATALOG="USE_CATALOG",n.USE_SCHEMA="USE_SCHEMA",n.CREATE_SCHEMA="CREATE_SCHEMA",n.CREATE_VIEW="CREATE_VIEW",n.CREATE_FUNCTION="CREATE_FUNCTION",n.CREATE_EXTERNAL_TABLE="CREATE_EXTERNAL_TABLE",n.CREATE_MODEL="CREATE_MODEL",n.EXECUTE="EXECUTE",n.ALL_PRIVILEGES="ALL_PRIVILEGES",n),l=((i={}).NOT_OWNER="NOT_OWNER",i.REQUIRES_ANY_PRIVILEGE="REQUIRES_ANY_PRIVILEGE",i.REQUIRES_ANY_NON_BROWSE_PRIVILEGE="REQUIRES_ANY_NON_BROWSE_PRIVILEGE",i.REQUIRES_PRIVILEGES="REQUIRES_PRIVILEGES",i.NOT_UPDATABLE_IN_CURRENT_WORKSPACE="NOT_UPDATABLE_IN_CURRENT_WORKSPACE",i.DOES_NOT_EXIST="DOES_NOT_EXIST",i)},599349:(e,t,a)=>{a.d(t,{M:()=>p});var r=a(610435),n=a(956935),i=a(692738),o=a(5421),s=a(79128),l=a(497895),c=a(369291),d=a(174541),u=a(639712);let p=(0,i.forwardRef)(({children:e,...t},a)=>{let{theme:i}=(0,l.wn)(),{isInsideTypeaheadCombobox:p,componentId:m}=(0,o.T)();if(!p)throw Error("`TypeaheadComboboxAddButton` must be used within `TypeaheadCombobox`");return(0,r.Y)(s.$n,{...t,componentId:`${m}.add_option`,type:"tertiary",onClick:e=>{e.stopPropagation(),t.onClick?.(e)},onMouseUp:e=>{e.stopPropagation(),t.onMouseUp?.(e)},className:"combobox-footer-add-button",css:{...(0,d.RB)(i),...(0,n.AH)((0,u.dg)({width:"100%",padding:0,display:"flex",alignItems:"center",borderRadius:0,"&:focus":{background:i.colors.actionTertiaryBackgroundHover,outline:"none"}}))},icon:(0,r.Y)(c.A,{}),ref:a,children:e})})},604808:(e,t,a)=>{a.d(t,{O:()=>n});var r=a(686560);function n(){let e=(0,r.d)("unityCatalogServiceEnabled",!1),t=(0,r.d)("isMetastoreInstalled_new",!1);return e&&t}},605107:(e,t,a)=>{a.d(t,{X:()=>i});var r=a(610435),n=a(497895);let i=({children:e,...t})=>{let{theme:a}=(0,n.wn)();return(0,r.Y)("div",{...t,css:{display:"flex",flexDirection:"row",alignItems:"flex-start",padding:`${a.spacing.xs}px ${a.spacing.lg/2}px`,alignSelf:"stretch",fontWeight:400,color:a.colors.textSecondary},children:e})}},613319:(e,t,a)=>{a.d(t,{R:()=>o});var r=a(751777),n=a(235257),i=a(441535);function o({itemId:e,invalidateAssetData:t=!1}={}){if(!(0,i.W)("databricks.fe.schemabrowser.newTree",!1))return;if(!e)return void(0,r.Pv)({treeEventIdentifier:n.M.UC_SCHEMA_BROWSER,invalidationEventType:n.Zk.INVALIDATE_ALL});if(t)return void(0,r.Pv)({treeEventIdentifier:n.M.UC_SCHEMA_BROWSER,invalidationEventType:n.Zk.INVALIDATE_ASSET_AND_CHILDREN,itemId:e});(0,r.Pv)({treeEventIdentifier:n.M.UC_SCHEMA_BROWSER,invalidationEventType:n.Zk.INVALIDATE_ASSET_CHILDREN,itemId:e})}},618519:(e,t,a)=>{a.d(t,{Y:()=>A,q:()=>R});var r=a(692738),n=a(927239),i=a(758396),o=a(711489),s=a(657825),l=a(886100),c=a(22191),d=a(747129),u=a(595615),p=a(77240),m=a(710343),g=a(302118),f=a(733337),h=a(660618),b=a(641760),v=a(192464),y=a(862294),E=a(302136);function _(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}function S(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function o(e){_(i,r,n,o,s,"next",e)}function s(e){_(i,r,n,o,s,"throw",e)}o(void 0)})}}let T=[/^Fetch request failed due to expired CSRF token/,/^Fetch request failed due expired user session/];function I(){let e=(0,E.A)(),t="http://go/dduipd/list_catalogs";return(0,r.useCallback)(({withWorkspaceBindings:a,includeBrowse:r})=>({queryKey:[n.xQ,!0===a,!0===r],queryFn:()=>S(function*(){try{let n=yield S(function*(){return e({rpc:o.Uz.UcApiRpcName.LIST_CATALOGS}),g.k.getCatalogs(r,a)})();return l.iT.sev2BurnRate(c.Es.DataExplorer,t,d.i1.P99,d.Ip.Min10,!0),n.catalogs??[]}catch(e){return(0,f.Ur)(e)||e instanceof b.XD&&404===e.response.status&&"FEATURE_DISABLED"===e.response.data.error_code&&e.response.data.message.includes("STANDARD_TIER")||e?.errorType===i.pB.EXPIRED_CSRF_TOKEN||e?.errorType===i.pB.EXPIRED_SESSION||T.some(t=>e?.message?.match(t))||l.iT.sev2BurnRate(c.Es.DataExplorer,t,d.i1.P99,d.Ip.Min10,!1,e),[]}})()}),[e])}function C(){let e=(0,b.ei)()&&(0,b.n_)()&&!(0,s.gK)(),t=(0,y.zx)({enabled:e}),a=(0,u.Ox)({queryFn:I}),i=!!e&&t.data?.settingspolicyserviceGetSettingRestWithoutSettingName?.setting?.value?.boolVal?.value,o=t.isLoading,l=!e||!1===i&&!1===o;return(0,r.useCallback)(({showNonUCCatalogs:e,sampleCatalogEnabled:t,withWorkspaceBindings:r,includeBrowse:i,dataSource:o,isPostgres:c=!1})=>({queryKey:[n.xQ,!0===e,!0===t,!0===r,!0===i,!0===l,c?(0,m.ud)(o):""],queryFn:()=>S(function*(){let n=(0,b.ei)(),d=(0,s.gK)(),u=[];if(c&&o?.type===p.ol.DATABASE_INSTANCE)return(0,v.mr)(o);if(n){let e=yield a({withWorkspaceBindings:r,includeBrowse:i});u.push(...e)}return e&&(!d&&l&&u.push({name:h.UQ}),t&&!u.some(({name:e})=>e===h.lx)&&u.push({name:h.lx})),u.sort((e,t)=>e.name.localeCompare(t.name))})()}),[l,a])}function A(e,t){let a=C();return(0,u.AO)({...a(e),keepPreviousData:!0,...t})}function R(){return(0,u.Ox)({queryFn:C})}},633203:(e,t,a)=>{a.d(t,{Y:()=>S});var r=a(610435),n=a(692738),i=a(430939),o=a(599349),s=a(342411),l=a(737358),c=a(971384),d=a(846007),u=a(212536),p=a(649934),m=a(786504),g=a(160603),f=a(670757),h=a(302118);function b(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}var v=a(733845),y=a(150190),E=a(694205),_=a(850723);function S({value:e,onChange:t,disabled:a,validationState:o,componentId:l="web-shared_external-location-selector",matchTriggerWidth:c,externalLocationQueryOptions:d,externalLocationOptionHintContentField:I,filterFn:C,optionAddon:A,recentlyUsedExternalLocation:R,maxHeight:w}){let x,O,M,L,k,N,D,P=(0,s.tz)(),$=(0,_.O)(),U=(0,E.v)(d),Y=(0,n.useMemo)(()=>(function(e,t){if(!t)return e;if(e){let a=e?.findIndex(e=>e.name===t?.name);if(a>=0){let r=[...e];return r.splice(a,1),r.unshift(t),r}}return e})(U.data?.external_locations,R),[U.data?.external_locations,R]),F=(x=(0,y.H)(),O=(0,v.O)(),M=(0,m.Pu)().authorize(p.E.CreateStorageCredential()),L=function(e,t){let{includeUnbound:a,purpose:r=f._7.STORAGE}=t||{};return(0,g.useQuery)(["list_storage_credentials",a,r],()=>{var e;return(e=function*(){return yield h.k.listCredentials({includeUnbound:a,purpose:r})},function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function o(e){b(i,r,n,o,s,"next",e)}function s(e){b(i,r,n,o,s,"throw",e)}o(void 0)})})()},e)}({enabled:O},{purpose:f._7.STORAGE}),k=M.response?.authorized===!0,N=!!x.data?.is_metastore_admin,D=!!L.data?.credentials?.length,N||k||D);return(0,r.Y)(u._,{id:"external-location-selector",componentId:l,icon:(0,r.Y)(i.A,{}),value:e,onChange:e=>t(Y?.find(({name:t})=>t===e)),allItems:Y??[],loading:U.isLoading||$.isLoading,disabled:a,validationState:o,placeholder:P.formatMessage({id:"+dNT3n",defaultMessage:"Select external location"}),width:"100%",matchTriggerWidth:c,getItemState:e=>({disableReason:e.url===$.data?.storage_root?P.formatMessage({id:"m2FYsa",defaultMessage:"Metastore default external location cannot be used here"}):void 0}),optionHintContentField:I,getFooter:F?T:void 0,filterFn:C,optionAddon:A,maxHeight:w})}function T({hideMenuOnClick:e}){let t=(0,s.tz)();return(0,r.Y)(o.M,{componentId:"external-location-selector-v2_create-new-button",onClick:function(){(0,c.Lz)((0,l.AO)((0,d.t4)("/explore/locations/create")),{openInNewTab:!0}),e()},children:t.formatMessage({id:"hYd46j",defaultMessage:"Create new external location"})})}},653800:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,r.Y)("path",{fill:"currentColor",d:"M11.5 8.75h-7v-1.5h7z"}),(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.75 1a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75V1.75a.75.75 0 0 0-.75-.75zm.75 12.5v-11h11v11z",clipRule:"evenodd"})]})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="MinusSquareIcon";let l=s},655841:(e,t,a)=>{a.d(t,{GX:()=>u,HA:()=>i,Ij:()=>d,U8:()=>n,_:()=>o,e:()=>l,fq:()=>p,n$:()=>c,r4:()=>s});var r=a(141078);let n=(0,r.J1)`
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
`,i=(0,r.J1)`
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
`,o=(0,r.J1)`
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
`,s=(0,r.J1)`
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
`,l=(0,r.J1)`
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
`,c=(0,r.J1)`
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
`,d=(0,r.J1)`
  mutation GetOrCreateIdpUser($input: AclmanagerIdentityapiGetOrCreateUserRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateUser(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,u=(0,r.J1)`
  mutation GetOrCreateIdpGroup($input: AclmanagerIdentityapiGetOrCreateGroupRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateGroup(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,p=(0,r.J1)`
  mutation GetOrCreateIdpServicePrincipal($input: AclmanagerIdentityapiGetOrCreateServicePrincipalRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateServicePrincipal(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`},659573:(e,t,a)=>{a.d(t,{D:()=>i,v:()=>o});var r,n=a(696514),i=((r={}).DONE="done",r.CANCELLED="cancelled",r);let o=(0,n.fH)("Filebrowser::ShareLink")},662874:(e,t,a)=>{a.d(t,{DK:()=>d,Go:()=>c,WL:()=>s,t2:()=>l});var r=a(610435),n=a(692738),i=a(745444),o=a(962179);let s=n.createContext(()=>void 0);function l({children:e}){let{lakehouseMap:t}=(0,i.j)(),a=(0,n.useCallback)(e=>t[e],[t]);return(0,r.Y)(s.Provider,{value:a,children:e})}function c(e){let t=(0,n.useContext)(s);return(0,n.useMemo)(()=>e.map(e=>{if(!(0,o.PG)(e))return e;let a=t(e.endpoint_id??"");return{...e,lakehouse:a}}),[e,t])}function d(e){let t=(0,n.useContext)(s);return(0,n.useMemo)(()=>{if(e){let a=t(e.endpoint_id??"");return{...e,lakehouse:a}}},[e,t])}},671045:(e,t,a)=>{a.d(t,{w:()=>n});var r,n=((r={})[r.VIEWER_COUNT=0]="VIEWER_COUNT",r[r.VIEW_COUNT=1]="VIEW_COUNT",r[r.QUERY_COUNT=2]="QUERY_COUNT",r)},672316:(e,t,a)=>{a.d(t,{I:()=>p,e:()=>u});var r=a(610435),n=a(692738),i=a(43680),o=a(203368),s=a(786504),l=a(861403),c=a(706092),d=a(712278);function u({requestKey:e,request:t,isUc:a,enabled:n=!0,owner:i,permissionsQueryData:o,children:s}){if(a)return(0,r.Y)(p,{enabled:n,requestKey:e,request:t,children:s});return(0,r.Y)(m,{enabled:n,isUc:a,request:t,owner:i,permissionsQueryData:o,children:s})}function p({requestKey:e,request:t,enabled:a=!0,children:c}){let{data:d,error:u,isLoading:m,isError:g}=(0,i.ok)(e,(0,o.m)(t),{enabled:a}),f=(0,l.b)(u),h=g?f:void 0,b=(0,n.useMemo)(()=>({data:d,isLoading:m,error:h}),[d,m,h]);return(0,r.Y)(s.se,{response:b,children:c})}function m({children:e,request:t,owner:a,isUc:n,enabled:i,permissionsQueryData:l}){let u=(0,d.J)({isUc:n,owner:a,permissionsQueryData:l,enabled:i}),p=new c.w({...u,request:(0,o.m)(t)});return(0,r.Y)(s.gc.Provider,{value:p,children:e})}},681134:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(141078);let n=(0,r.J1)`
  mutation UpdateAccessRequestDestinationsMutation(
    $fullName: String!
    $type: ManagedcatalogSecurableType!
    $destinations: [RequestforaccessNotificationDestinationInput!]
  ) @component(name: "LakehouseCollaboration.RequestForAccess") {
    requestforaccessUpdateAccessRequestDestinations(
      input: {
        accessRequestDestinations: { securable: { fullName: $fullName, type: $type }, destinations: $destinations }
        updateMask: "destinations"
      }
    ) {
      destinations {
        destinationId
        specialDestination
        destinationType
      }
      securable {
        fullName
        type
      }
      apiError {
        code
        message
      }
    }
  }
`;function i(){return(0,r.n_)(n)}},681457:(e,t,a)=>{a.d(t,{x:()=>i});var r=a(610435),n=a(317290);let i=({titleText:e,titleOverride:t,subtitle:a,buttons:i,table:o,preHeaderProps:s,collapsibleProps:l})=>(0,r.Y)(n.P1,{sectionLabel:e,titleText:e,titleOverride:t,subtitle:a,buttons:i,collapsibleProps:l,preHeaderProps:s,children:(0,r.Y)(n.jt,{content:o})})},683003:(e,t,a)=>{a.d(t,{B:()=>s});var r=a(610435),n=a(545251),i=a(497895),o=a(174541);let s=({children:e,...t})=>{let{theme:a}=(0,i.wn)(),{isInsideDialogCombobox:s}=(0,n.w)();if(!s)throw Error("`DialogComboboxFooter` must be used within `DialogCombobox`");return(0,r.Y)("div",{...t,css:(0,o.UA)(a),children:e})}},691069:(e,t,a)=>{a.d(t,{C:()=>c});var r=a(610435);a(692738);var n=a(497895),i=a(465082),o=a(26971),s=a(777517),l=a(342411);let c=({kind:e,disabled:t,style:a})=>{let{theme:c}=(0,n.wn)(),d=(0,l.tz)(),u={alignItems:"center",background:t?void 0:c.colors.backgroundSecondary,borderRadius:30,color:t?c.colors.actionDisabledText:c.colors.textSecondary,display:"flex",fontSize:20,height:30,justifyContent:"center",width:30};switch(e){case"user":return(0,r.Y)(i.A,{title:d.formatMessage({id:"9vv8Gs",defaultMessage:"User"}),css:a||u});case"group":return(0,r.Y)(o.A,{title:d.formatMessage({id:"Qzw3C/",defaultMessage:"Group"}),css:a||u});case"serviceprincipal":return(0,r.Y)(s.A,{title:d.formatMessage({id:"QrVB43",defaultMessage:"Service Principal"}),css:a||u});default:return null}}},694205:(e,t,a)=>{a.d(t,{v:()=>o});var r=a(160603),n=a(302118);function i(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}function o(e,t){return(0,r.useQuery)(["list_external_locations",t],()=>{var e;return(e=function*(){return yield n.k.getExternalLocations(t)},function(){var t=this,a=arguments;return new Promise(function(r,n){var o=e.apply(t,a);function s(e){i(o,r,n,s,l,"next",e)}function l(e){i(o,r,n,s,l,"throw",e)}s(void 0)})})()},e)}},703140:(e,t,a)=>{a.d(t,{C:()=>o});var r=a(759901),n=a.n(r);a(649917);var i=a(834405);class o{static getTimeZone(){return n().tz.guess()}static formatTimeZone(e){let t=n().tz.zone(o.getTimeZone());if(t){let a=e instanceof Date?e.getTime():Date.now();return t.abbr(a)||""}return""}static formatDate(e,t={omitSeconds:!1}){let a=t.omitSeconds?"YYYY-MM-DD HH:mm":"YYYY-MM-DD HH:mm:ss";return n()(e).format(a)}static formatDurationAgo(e){return n()(e).fromNow()}static formatTimestamp(e,t,a){if(!e)return"";if(t)return(0,i.r6)(e,t,a);let r=new Date(e);return o.formatDate(r)+" "+o.formatTimeZone(r)}static formatTimestampNicely(e,t,a){if(!e)return"";if(t)return(0,i.r6)(e,t,a);let r=new Date(e);return n().tz(r,o.getTimeZone()).format("MMM D YYYY, HH:mm A")+" "+o.formatTimeZone(r)}static formatTimestampShort(e,t){if(!e)return"";if(t)return t.formatDate(e,{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"});let a=new Date(e);return n().tz(a,o.getTimeZone()).format("MMM DD, HH:mm")}static formatDateFromTimestamp(e,t){if(!e)return"";if(t)return t.formatDate(e,{month:"short",day:"2-digit"});let a=new Date(e);return n().tz(a,o.getTimeZone()).format("MMM DD")}static formatDuration(e,t){return(e<0?"-":"")+n().duration(e,"seconds").format(t||"h[h] m[m] s[s]")}static factorMs(e){if(e%36e5==0)return{time:e/36e5,unit:36e5,label:"hour"};if(e%6e4==0)return{time:e/6e4,unit:6e4,label:"min"};if(e%1e3==0)return{time:e/1e3,unit:1e3,label:"sec"};return{time:e,unit:1,label:"ms"}}}},706092:(e,t,a)=>{a.d(t,{w:()=>o});var r=a(598296),n=a(660618);let i=e=>({isLoading:!1,response:{authorized:e}});class o{data;constructor(e){this.data=e}evaluateCreateTableAction(e){return i(!0)}authorize(e){let{isLoading:t,isError:a,isOwner:o,isMetastoreAdmin:s,errorString:l,request:c,permissionsQueryData:d}=this.data;if(t)return{isLoading:!0,response:void 0};{if(a)return{isLoading:!1,response:{authorized:!1},error:l};if(e.hasOwnProperty("evaluate"))return e.evaluate(this);let t="string"==typeof e?e:JSON.stringify(e),u=c.actions[t];if(!u)return i(!1);{if(d?.catalog===n.lx)return i(!0);let t=u.action_name;if(["CreateCatalog","CreateStorageCredential","CreateExternalLocation"].includes(t))return i(s);if(t.match(/Set(\w+)Permission/g))if(o||!d)return i(o);else{let e;return e=d,{isLoading:!1,response:{authorized:!1,unmet_conditions:[{code:r.yh.NOT_OWNER,securable_type:e.objectType,securable_full_name:[e.catalog,e.database,e.entity].join(".")}]}}}if(t.match(/CreateTable/g))return this.evaluateCreateTableAction(e);else return i(!0)}}}}},708396:(e,t,a)=>{a.d(t,{R:()=>s});var r=a(441535),n=a(141078),i=a(641760);let o=(0,n.J1)`
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
`;function s({type:e,fullName:t,skip:a=!1}){let l=(0,r.W)("databricks.fe.rfa.skipNonUcSecurables",!1),c=t.split(".")[0],d=l&&!(0,i.jN)({catalog:c}),{data:u,loading:p,error:m}=(0,n.IT)(o,{variables:{fullName:t,type:e},skip:!e||a||d});return{isLoading:p,isEnabled:!d&&u?.requestforaccessGetStatus?.isEnabled,error:m}}},712278:(e,t,a)=>{a.d(t,{J:()=>d});var r=a(767280),n=a(279402),i=a(181440),o=a(43680),s=a(660618),l=a(861403),c=a(641760);function d({isUc:e,owner:t,permissionsQueryData:a,enabled:u}){let{isUnityCatalogActive:p}=(0,n.useDataExplorerContext)(),m=(0,o._A)({enabled:u&&p}),g=(0,r.VC)(),{isDataSourceReady:f}=(0,i.useDataExplorerDataSourceContext)(),h=(0,o.mm)(a||{},{enabled:u&&a&&(e||f&&a.catalog!==s.lx)}),b=(0,l.b)(h?.error),v=(0,l.b)(m?.error),y=(0,l.b)(g?.error),E=h?.error&&(0,c.xk)(b),_=e?function(e,t){if(!e||!t)return!1;{let a=t?.groups?.map(e=>e.display)||[],r=t?.userName===e,n=a.includes(e);return r||n}}(t,g?.data):h.isSuccess,[S,T]=[[m.isError,v],[g.isError,y],[h.isError&&!E,b]].find(([e,t])=>e)||[!1,""];return{isLoading:m.isLoading||h.isLoading||g.isLoading,isError:S,legacyPermissions:h.data||[],isOwner:_,isMetastoreAdmin:m.data?.is_metastore_admin||!1,errorString:T,permissionsQueryData:a}}},731547:(e,t,a)=>{a.d(t,{a:()=>u});var r=a(610435),n=a(692738),i=a(497895),o=a(382908),s=a(342411),l=a(283009),c=a(180864);function d({className:e,children:t,onClick:a,copyTooltip:n,copyText:o}){let{theme:l}=(0,i.wn)(),c=(0,s.tz)(),u=l.colors.actionDefaultBackgroundHover,p=n??c.formatMessage({id:"vgZBTO",defaultMessage:"Copy {copyText} to clipboard"},{copyText:o});return(0,r.Y)("span",{onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),a())},role:"button",tabIndex:0,"aria-label":p,className:e,css:{display:"inline-block",cursor:"pointer",padding:`${l.spacing.xs}px ${l.spacing.sm}px`,margin:`0 -${l.spacing.sm}px`,borderRadius:l.borders.borderRadiusSm,transition:"background-color 200ms ease",userSelect:"none","&:hover, &:focus-visible":{backgroundColor:u},"&:hover .copyable-icon, &:focus-visible .copyable-icon":{opacity:1}},onClick:a,children:t})}function u({children:e,className:t,clickToCopy:a=!1,componentId:s,copyPlacement:p="center",copyText:m,copyTooltip:g,onCopy:f,stretch:h=!1}){let{theme:b}=(0,i.wn)(),v=m??e,{actionIcon:y,copy:E}=(0,c.L)(v,g,f),_=n.useCallback(e=>({display:e?"inline":void 0,wordBreak:"break-word",overflowWrap:"anywhere"}),[]),S=n.useCallback(e=>()=>{let t=e?b.spacing.sm:b.spacing.md,a=e?0:b.spacing.sm;return{display:e?"inline-flex":"flex",alignItems:"center",alignSelf:e||"top"!==p?void 0:"flex-start",margin:`${a}px ${a}px ${a}px ${t}px`,transition:"opacity 200ms ease",color:b.colors.textSecondary,flexShrink:0,verticalAlign:e?"middle":void 0,opacity:0}},[p,b]);if(a){let a="inline"===p,n=S(a);return(0,r.Y)(d,{className:t,onClick:E,copyTooltip:g,copyText:v,children:a?(0,r.FD)("div",{children:[(0,r.Y)(o.o.Text,{css:_(!0),children:e}),(0,r.Y)("span",{className:"copyable-icon","data-testid":"copyable-icon",css:n,children:y})]}):(0,r.FD)("span",{css:{display:"flex",alignItems:"top"===p?"flex-start":"center",flexWrap:"nowrap",width:h?"100%":"auto",maxWidth:"100%"},children:[(0,r.Y)("span",{css:{display:"flex",alignItems:"center",minWidth:0,flex:"1 1 auto"},children:(0,r.Y)(o.o.Text,{css:_(!1),children:e})}),(0,r.Y)("span",{className:"copyable-icon","data-testid":"copyable-icon",css:n,children:y})]})})}return(0,r.FD)("span",{css:{display:"flex",alignItems:"stretch"},children:[(0,r.Y)("span",{css:{display:"flex",alignItems:"center",width:h?"100%":void 0,overflow:"hidden"},children:(0,r.Y)(o.o.Text,{css:{width:h?"100%":void 0,maxWidth:"100%"},children:e})}),(0,r.Y)("span",{css:{display:"flex",alignItems:"center"===p?"center":"start",marginLeft:b.spacing.sm},children:(0,r.Y)(l.a,{componentId:s,copyText:v,copyTooltip:g,onCopy:f})})]})}},733052:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(610435);a(692738);var n=a(802582);function i({primary:e=!1,srSilent:t=!1,children:a,placement:o,title:s,dataTestId:l,arrowPointAtCenter:c,...d}){return(0,r.Y)(n.p,{silenceScreenReader:t,useAsLabel:e,placement:o,title:s,dataTestId:l,arrowPointAtCenter:c,...d,children:a})}},733337:(e,t,a)=>{a.d(t,{Ky:()=>d,Ur:()=>u,nr:()=>c});var r=a(583971),n=a(641760),i=a(441535),o=a(19123);function s(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}function l(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function o(e){s(i,r,n,o,l,"next",e)}function l(e){s(i,r,n,o,l,"throw",e)}o(void 0)})}}function c(e,t){return l(function*(){let a=yield(0,o.h)(e,t);if(!a.ok){let t;try{t=yield a.json()}catch(e){}throw new n.XD(e,a,t)}return yield a.json()})()}function d(e,t,a,n,o){return l(function*(){let s,l={response:[],next_page_token:void 0},c=(0,i.W)("databricks.fe.uc.defaultPaginationWindowSize",0),d=void 0!==n?n:c;do{let n=a?.useCentralPagination?{"pagination_context.max_results":d,...a?.queryParameters}:{[o??"max_results"]:d,...a?.queryParameters};s&&(a?.useCentralPagination?n["pagination_context.page_token"]=s:n.page_token=s);let i=new URLSearchParams(n),c=`${e}?${i}`;try{let e=yield(0,r.Ri)(c,a);if(!e)break;let n=yield t(e);n&&l.response.push(...n),a?.useCentralPagination?(l.next_page_token=e.pagination?.next_page_token,s=e.pagination?.next_page_token):(l.next_page_token=e.next_page_token,s=e.next_page_token)}catch(e){throw e}}while(s);return l.response})()}function u(e){return e instanceof n.XD&&404===e.response.status&&"METASTORE_DOES_NOT_EXIST"===e.response.data.error_code}},733845:(e,t,a)=>{a.d(t,{O:()=>o});var r=a(686560),n=a(689262),i=a(441535);function o(){let e=(0,n.b)("unityCatalogServiceEnabled",(0,r.d)("unityCatalogServiceEnabled",!1),()=>(0,i.W)("databricks.unitycatalog.enableUnityCatalogService",!1)),t=(0,r.d)("isMetastoreInstalled_new",!1);return e&&t}},745268:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(651139);function n(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}let i={get(){var e;return(e=function*(e=["id","userName","displayName","groups"]){let t=yield r.pY.get(`/ajax-api/2.0/preview/scim/v2/Me?attributes=${e.join()}`);return(t?.data||t)??null},function(){var t=this,a=arguments;return new Promise(function(r,i){var o=e.apply(t,a);function s(e){n(o,r,i,s,l,"next",e)}function l(e){n(o,r,i,s,l,"throw",e)}s(void 0)})}).apply(this,arguments)}}},745444:(e,t,a)=>{a.d(t,{j:()=>d});var r=a(298280),n=a.n(r),i=a(692738),o=a(919505),s=a(290766),l=a(572382),c=a(441535);function d({enableLiveUpdates:e=!0,fetchPolicy:t="cache-and-network",useMinimalQuery:a=!1,isEnabled:r=!0}={}){let u=(0,c.W)("databricks.fe.redash.listPollingInterval",5e3),[p,m]=(0,i.useState)(()=>(0,c.W)("databricks.fe.redash.enableWarehouseEventSubscription",!1)),g=e&&p&&!a,{data:f,loading:h,refetch:b}=(0,s.T)({pollInterval:e&&!g?u:0,fetchPolicy:t,nextFetchPolicy:g?"cache-first":void 0,skip:!r},a);return(0,o.A)({skip:!g||!r,refetchLakehouseStates:b,setEnableSubscription:m}),{loaded:!h,lakehouseMap:(0,i.useMemo)(()=>n()((0,l.kc)(f?.lakehouses),e=>e?.id),[f?.lakehouses])}}},747206:(e,t,a)=>{a.d(t,{E3:()=>u,Hp:()=>r,IM:()=>d,QT:()=>y,Th:()=>p,U3:()=>h,V6:()=>c,db:()=>n,ff:()=>o,n5:()=>f,ps:()=>i,sI:()=>b,sZ:()=>v,xU:()=>m,xh:()=>l,yX:()=>g});let r=e=>{let t=e.replaceAll(".","/");return`/explore/data/${t}`},n=e=>`/explore/data/${encodeURIComponent(e||"")}`,i=(e,t)=>`/explore/data/${encodeURIComponent(t||"")}/${encodeURIComponent(e)}`,o=(e,t,a)=>`/explore/data/${encodeURIComponent(a||"")}/${encodeURIComponent(t||"")}/${encodeURIComponent(e)}`;var s,l=((s=l||{}).OVERVIEW="overview",s.COLUMNS="columns",s.SAMPLE="sample",s.DETAILS="details",s.PERMISSIONS="permissions",s.POLICIES="policies",s.HISTORY="history",s.LINEAGE="lineage",s.INSIGHTS="insights",s.QUALITY="quality",s.VOLUMES="volumes",s.MODELS="models",s.FUNCTIONS="functions",s.SCHEMAS="schemas",s.ASSETS="assets",s.WORKSPACES="workspaces",s.REFRESH="refresh",s.LIBRARY_ALLOWLIST="library_allowlist",s.USAGE="usage",s.SECURITY="security",s.TASKS="tasks",s.COLLABORATORS="collaborators",s.PREVIEW="preview",s.RUNS="runs",s.FILES="files",s);let c=(e,t,a,r)=>`/explore/data/${encodeURIComponent(r||"")}/${encodeURIComponent(a||"")}/${encodeURIComponent(e)}?activeTab=${t}`,d=(e,t,a)=>`/explore/data/volumes/${encodeURIComponent(a||"")}/${encodeURIComponent(t||"")}/${encodeURIComponent(e)}`,u=(e,t,a)=>`/explore/data/functions/${encodeURIComponent(a||"")}/${encodeURIComponent(t||"")}/${encodeURIComponent(e)}`,p=(e,t,a)=>`/explore/data/models/${encodeURIComponent(a||"")}/${encodeURIComponent(t||"")}/${encodeURIComponent(e)}`,m=(e,t,a,r)=>`/explore/data/models/${encodeURIComponent(r||"")}/${encodeURIComponent(a||"")}/${encodeURIComponent(e)}/version/${t}`,g=(e,t)=>`/explore/data/notebooks/${encodeURIComponent(t||"")}/${encodeURIComponent(e)}`,f=e=>`/explore/locations/${encodeURIComponent(e)}`,h=e=>`/explore/connections/${encodeURIComponent(e)}`,b=e=>`/explore/external-metadata/${encodeURIComponent(e)}`,v=()=>"/governance/metastore",y=(e,t,a)=>`/explore/data/secrets/${encodeURIComponent(a||"")}/${encodeURIComponent(t||"")}/${encodeURIComponent(e)}`},751097:(e,t,a)=>{a.d(t,{P:()=>i,x:()=>o});var r,n=a(696514),i=((r={}).DONE="done",r.CANCELLED="cancelled",r);let o=(0,n.fH)("Filebrowser::SelectLocation")},752634:(e,t,a)=>{a.d(t,{f:()=>s});var r=a(610435),n=a(673655),i=a(429608);let o=8,s=({gutter:e=o,...t})=>(0,r.Y)(i.wC,{children:(0,r.Y)(n.A,{gutter:e,...t})})},759838:(e,t,a)=>{a.d(t,{Hi:()=>i,QX:()=>o,xT:()=>s});var r=a(250912),n=a.n(r);function i(e,t="/sql"){var a;if(/^(https?:\/\/|blob:|mailto:)/.test(e))return e;return(a=function(...e){return e.map(e=>n()(e,"/")).join("/")}(t,e)).startsWith("/")?a:`/${a}`}let o=/^(?!.*(\.| |\/)).*/;function s(e,t){if(!e)return"";let a=e.endsWith("/");return e+(t?a?t:`/${t}`:"")}},760603:(e,t,a)=>{a.d(t,{l:()=>r});function r(e){let t=(e,t=2)=>`${Array(t).fill(0)}${e}`.slice(-t);return`${t(e.getFullYear(),4)}-${t(e.getMonth()+1)}-${t(e.getDate())} ${t(e.getHours())}:${t(e.getMinutes())}:${t(e.getSeconds())}`}},767280:(e,t,a)=>{a.d(t,{Cw:()=>b,JZ:()=>g,Pj:()=>E,VC:()=>h,jB:()=>f,jZ:()=>y,u5:()=>v});var r=a(692738),n=a(994393),i=a(726338),o=a(881601),s=a(103341),l=a(988512),c=a(444433),d=a(181440),u=a(745268);function p(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}function m(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function o(e){p(i,r,n,o,s,"next",e)}function s(e){p(i,r,n,o,s,"throw",e)}o(void 0)})}}function g(e,t){let a=(0,c.b)();return(0,n.useMutation)(r=>m(function*(){if((0,d.isUnifiedDataSource)(t))return yield(0,s.M)({dataSource:t,queryString:r,queryName:e});return yield(0,i.My)(t,r,e,a)})())}function f(e,t){return(0,n.useMutation)(a=>m(function*(){return yield o.c.save({name:e,is_draft:!0,data_source_id:t,query:a})})())}function h(){let e=(0,r.useCallback)(()=>m(function*(){return u.A.get()})(),[]);return(0,n.useQuery)("scim_me",e)}function b(e,t,a,o,u,p){let g=(0,c.b)();return(0,n.useQuery)(["data_explorer_history",e,t,a,p],(0,r.useCallback)(()=>m(function*(){if((0,d.isUnifiedDataSource)(u))return yield(0,s.M)({dataSource:u,queryString:(0,l.y)(u).describeHistorySQL(t,a,e,p),queryName:"data_explorer_history"});return yield(0,i.My)(u,(0,l.y)(u).describeHistorySQL(t,a,e,p),"data_explorer_history",g)})(),[u,t,a,e,p,g]),{enabled:o,refetchOnWindowFocus:!1})}function v({dataSource:e,catalog:t,database:a,table:o,options:u}){let p=(0,c.b)();return(0,n.useQuery)(["describe_detail",t,a,o],(0,r.useCallback)(()=>m(function*(){if((0,d.isUnifiedDataSource)(e))return yield(0,s.M)({dataSource:e,queryString:(0,l.y)(e).generateDescribeDetailSQL(a,o,t),queryName:"describe_detail"});return yield(0,i.My)(e,(0,l.y)(e).generateDescribeDetailSQL(a,o,t),"describe_detail",p)})(),[e,a,o,t,p]),u)}let y="show_create_table";function E({dataSource:e,catalog:t,database:a,table:i,enabled:o=!0}){return(0,n.useQuery)([y,t,a,i],(0,r.useCallback)(()=>m(function*(){return yield(0,s.M)({dataSource:e,queryString:(0,l.y)(e).generateShowCreateTableSql(t,a,i),queryName:y})})(),[t,e,a,i]),{enabled:o})}},768622:(e,t,a)=>{a.d(t,{Jq:()=>y,bb:()=>_});var r=a(610435),n=a(956935),i=a(802558),o=a.n(i),s=a(91958),l=a.n(s),c=a(692738),d=a(497895),u=a(194901),p=a(161330),m=a(174541),g=a(574132),f=a(639712);let h={paddingTop:2},b={width:16,flexShrink:0},v={display:"flex"},y=l()((e,t,a)=>(0,n.AH)({...a&&{pointerEvents:"none",color:e.colors.actionDisabledText},...t&&{background:e.colors.actionTertiaryBackgroundHover}}),(e,t,a)=>`${(0,f.H6)(e)}|${t}|${!!a}`),E=l()((e,t)=>(0,n.AH)({marginLeft:e.spacing.sm,fontSize:e.typography.fontSizeBase,fontStyle:"normal",fontWeight:400,cursor:"pointer",overflow:"hidden",wordBreak:"break-word",..."ellipsis"===t&&{textOverflow:"ellipsis",whiteSpace:"nowrap"}}),(e,t)=>`${(0,f.H6)(e)}|${t}`),_=(0,c.forwardRef)(({item:e,index:t,comboboxState:a,textOverflowMode:n="multiline",isDisabled:i,disabledReason:s,hintContent:l,onClick:f,children:_,...S},T)=>{let{selectedItem:I,highlightedIndex:C,getItemProps:A,isOpen:R}=a,w=o()(I,e),x=C===t,{theme:O}=(0,d.wn)(),M=(0,c.useRef)(null);(0,c.useImperativeHandle)(T,()=>M.current);let{onClick:L,...k}=A({item:e,index:t,disabled:i,onMouseUp:e=>{e.stopPropagation(),S.onMouseUp?.(e)},ref:M});return(0,c.useEffect)(()=>{if(R&&C===t&&M.current){let e=M.current.closest("ul");if(!e)return;let t=e.scrollTop,a=e.scrollTop+e.clientHeight,r=M.current.offsetTop,n=M.current.offsetTop+M.current.clientHeight;(r<t||n>a)&&M.current?.scrollIntoView({block:"nearest"})}},[C,t,R,M]),(0,r.FD)("li",{role:"option","aria-selected":w,"aria-disabled":i,onClick:e=>{f?.(e),L?.(e)},css:[(0,m.RB)(O),y(O,x,i)],...k,...S,children:[w?(0,r.Y)(u.A,{css:h}):(0,r.Y)("div",{style:b}),(0,r.FD)("label",{css:E(O,n),children:[i&&s?(0,r.FD)("div",{css:v,children:[(0,r.Y)("div",{children:_}),(0,r.Y)("div",{css:(0,m.eO)(O),children:(0,r.Y)(p.I,{componentId:"typeahead-combobox-menu-item-disabled-reason-info-tooltip",side:"right",content:s})})]}):_,(0,r.Y)(g.y,{disabled:i,children:l})]})]})});_.defaultProps={_type:"TypeaheadComboboxMenuItem"}},769e3:(e,t,a)=>{a.d(t,{x:()=>s});var r,n=a(692738),i=a(337706),o=((r=o||{}).filterString="filterString",r.sortingColumn="sortingColumn",r.sortingOrder="sortingOrder",r.page="page",r.pageSize="pageSize",r);function s(){let[e,t]=(0,i.ok)(),a=(0,n.useMemo)(()=>{let t=e.get("filterString")??"",a=e.get("sortingColumn"),r=e.get("sortingOrder");return{filter:t,sorting:a&&r?[{id:a,desc:"desc"===r}]:[],pagination:{pageIndex:e.get("page")?Number(e.get("page"))-1:0,pageSize:e.get("pageSize")?Number(e.get("pageSize")):10}}},[e]),r=(0,n.useCallback)((e,r=!0)=>{let n="function"==typeof e?e(a):e;t(e=>{let t=new URLSearchParams(e),a=n?.sorting[0],r=n?.pagination.pageIndex,i=n?.pagination.pageSize;for(let[e,o]of Object.entries({filterString:n?.filter??null,sortingColumn:a?a.id:null,sortingOrder:a?a.desc?"desc":"asc":null,page:r&&0!==r?(r+1).toString():null,pageSize:i&&10!==i?i.toString():null}))o?t.set(e,o):t.delete(e);return t},{replace:r})},[t,a]);return[a,r]}},773953:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(610435);a(692738);var n=a(497895),i=a(225842),o=a(382908),s=a(217985);function l({componentId:e,url:t,onClick:a,icon:o,children:s,label:d,decorators:u=[]}){let{theme:p}=(0,n.wn)();return(0,r.FD)("span",{css:{display:"flex",gap:p.spacing.sm,flexWrap:"nowrap",alignItems:"center",justifyContent:"flex-start"},children:[o&&(0,r.Y)("span",{css:{flexShrink:0},children:(0,r.Y)(i.eu,{icon:o,type:"entity",label:d,size:"sm"})}),(0,r.Y)("span",{css:{minWidth:0,overflow:"hidden",flex:1},children:(0,r.Y)(c,{componentId:e,url:t,onClick:a,children:s})}),(0,r.Y)("span",{css:{flexShrink:0},children:u})]})}function c({onClick:e,children:t,title:a,url:n,componentId:i}){return(0,r.Y)(s.N,{componentId:i,to:n,asChild:!0,children:(0,r.Y)(o.o.Link,{componentId:i,title:a,tabIndex:0,onClick:e,"data-testid":"EntityTable.NameCell.Link",ellipsis:!0,children:t})})}},775041:(e,t,a)=>{a.d(t,{Jq:()=>h,OI:()=>A,wW:()=>b});var r=a(692738),n=a(342411),i=a(302409),o=a(77240),s=a(581716);let l="18.0",c=["13.3","14.3"],d="16.1",u="16.1",p="16.3.1",m="18.0",g="18.2",f="18.2";function h(e){return e?.match(/(?:\d+\.)+x(?=-)/)?.[0]||""}function b(e,t){return e.localeCompare(t,void 0,{numeric:!0})>=0}function v(e){return e?.includes("FABRIC")}function y(e){return e?.includes("HIVE_METASTORE")}function E(e,t){return e?.includes("ORACLE")||t===s.pu.ORACLE}function _(e,t){return e?.includes("TERADATA")||t===s.pu.TERADATA}function S(e,t){return e?.includes("SFTP")||t===s.pu.SFTP}function T(e,t){return e?.includes("PALANTIR")||t===s.pu.PALANTIR}function I(e,t){return e?.includes("BIGLAKE")||t===s.pu.BIGLAKE}function C(e,t){return e?.includes("GOOGLE_CLOUD_LAKEHOUSE")||t===s.pu.GOOGLE_CLOUD_LAKEHOUSE}function A(){let e=(0,n.tz)(),t=(0,r.useCallback)(({computeResource:e,requiredVersion:t,securableKind:a,connectionType:r})=>{if(function(e){let{clusterId:t,preferInteractiveServerless:a}=e;if(a)return!0;return!!t&&null!==t.toLowerCase().match(/[0-9a-fA-F]{16}/)}(e))return!0;if(e.type===o.ol.CLUSTER){let{sparkVersion:n,accessMode:o}=e;if(!(0,i.QC)({access_mode:o??void 0},!0))return!1;let s=h(n);if(v(a))return b(s,l);if(y(a))return c.some(e=>s.startsWith(e))||b(s,"15.0");if(E(a,r))return b(s,d);else if(_(a,r))return b(s,u);else if(S(a,r))return b(s,p);else if(T(a,r))return b(s,m);else if(I(a,r))return b(s,g);else if(C(a,r))return b(s,f);return b(s,t??"13.1")}if(e.type===o.ol.REDASH_SQL_WAREHOUSE)return"PRO"===e.warehouseType;return!1},[]),a=(0,r.useCallback)(e=>{if(e.type===o.ol.REDASH_SQL_WAREHOUSE)return"PRO"===e.warehouseType&&!0===e.enableDatabricksCompute;return!1},[]),s=(0,r.useCallback)(({isBrickstoreOnlineView:e,dataSource:t})=>e&&t?.status.isReady&&!a(t),[a]),A=(0,r.useCallback)(({isForeignData:e,securableKind:a,dataSource:r})=>e&&r?.status.isReady&&!t({computeResource:r,securableKind:a}),[t]),R=e.formatMessage({id:"FOz8nd",defaultMessage:"Data may be out of date"}),w=e.formatMessage({id:"8rFek8",defaultMessage:"Please use cluster with DBR version 13.1 and above or Pro/Serverless warehouse to refresh the data"}),x=e.formatMessage({id:"Ole8Yw",defaultMessage:"Please use cluster with DBR version 13.3, 14.3, or 15.0 and above or Pro/Serverless warehouse to refresh the data"}),O=(0,r.useCallback)(t=>e.formatMessage({id:"Q5K+Zr",defaultMessage:"Please use cluster with DBR version {minVersion} and above or Pro/Serverless warehouse to refresh the data"},{minVersion:t}),[e]),M=e.formatMessage({id:"PNwB4O",defaultMessage:"Foreign data requires compute. Please use cluster with DBR version 13.1 and above or Pro/Serverless warehouse"}),L=e.formatMessage({id:"GphsgR",defaultMessage:"Please use cluster with DBR version 13.1 and above or Pro/Serverless warehouse"}),k=e.formatMessage({id:"2JadI/",defaultMessage:"Please use cluster with DBR version 13.3, 14.3, or 15.0 and above or Pro/Serverless warehouse"}),N=e.formatMessage({id:"u6wa/l",defaultMessage:"Foreign data requires compute. Please use cluster with DBR version 13.3, 14.3, or 15.0 and above or Pro/Serverless warehouse"}),D=(0,r.useCallback)(t=>e.formatMessage({id:"zVN9+v",defaultMessage:"Foreign data requires compute. Please use cluster with DBR version {minVersion} and above or Pro/Serverless warehouse"},{minVersion:t}),[e]),P=(0,r.useCallback)((e,t)=>{if(v(e))return D(l);if(y(e))return N;if(E(e,t))return D(d);if(_(e,t))return D(u);if(S(e,t))return D(p);else if(T(e,t))return D(m);else if(I(e,t))return D(g);else if(C(e,t))return D(f);return M},[D,M,N]);return{isComputeMeetQueryFedRequirements:t,showUnqualifiedComputeWarning:A,showOnlineViewUnqualifiedComputeWarning:s,ucCacheNonEmptyWarning:R,getUcCacheNonEmptyWarningDescription:(0,r.useCallback)(e=>{if(v(e))return"";if(y(e))return x;if(E(e))return O(d);if(_(e))return O(u);if(S(e))return O(p);else if(T(e))return O(m);else if(I(e))return O(g);else if(C(e))return O(f);return w},[O,w,x]),unqualifiedMessage:L,unqualifiedMessageForHMS:k,getUnqualifiedComputeWarning:P}}},777517:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 0a.75.75 0 0 1 .75.75V3h5.5a.75.75 0 0 1 .75.75V6h.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75H15v2.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V12H.75a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 .75 6H1V3.75A.75.75 0 0 1 1.75 3h5.5V.75A.75.75 0 0 1 8 0M2.5 4.5v9h11v-9zM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6.25 2.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="RobotIcon";let l=s},786504:(e,t,a)=>{a.d(t,{Pu:()=>l,gc:()=>o,se:()=>s});var r=a(610435),n=a(692738);class i{data;constructor(e){this.data=e}authorize(e){if(this.data.isLoading)return{isLoading:!0,response:void 0};if(this.data.error)return{isLoading:!1,response:{authorized:!1},error:this.data.error};if("string"==typeof e)return{isLoading:!1,response:this.data.data?.actions[e]};if("evaluate"in e)return e.evaluate(this);return{isLoading:!1,response:this.data.data?.actions[JSON.stringify(e)]}}}let o=(0,n.createContext)({authorize:e=>({isLoading:!0,response:void 0})});function s({children:e,response:t}){return(0,r.Y)(o.Provider,{value:new i(t),children:e})}function l(){return(0,n.useContext)(o)}},787473:(e,t,a)=>{a.d(t,{o:()=>l});var r=a(610435);a(692738);var n=a(497895),i=a(382908),o=a(126927),s=a(342411);function l({href:e,style:t,componentId:a}){let c=(0,s.tz)(),{theme:d}=(0,n.wn)();return(0,r.FD)(i.o.Link,{style:{paddingLeft:d.spacing.xs,fontWeight:d.typography.typographyRegularFontWeight,...t},href:e,target:"_blank",componentId:a??"codegen_web-shared_src_metastore_components_learnmorelink.tsx_22",children:[c.formatMessage({id:"ag6OMp",defaultMessage:"Learn more"}),(0,r.Y)(o.A,{style:{marginLeft:d.spacing.xs,verticalAlign:"text-top"}})]})}},800205:(e,t,a)=>{a.d(t,{h:()=>c});var r=a(441535),n=a(733337),i=a(660618),o=a(595615),s=a(302118);function l(e,t,a){return(0,o.AO)({queryKey:["data_explorer_samples_schema",t],queryFn:()=>(0,n.nr)(`${i.bY}/schemas/${encodeURIComponent(e)}.${encodeURIComponent(t)}?include_browse=true`),...a})}function c(e){var t;let a=(0,r.W)("databricks.fe.marketplace.enableNewUCBasedSamplesUI",!1),n=(t={enabled:e===i.lx&&a,keepPreviousData:!0},(0,o.AO)({queryKey:["data_explorer_samples_catalog_details"],queryFn:function(){return s.k.getCatalogDetails(i.lx)},...t})),c=l(e,"nyctaxi",{enabled:e===i.lx&&a,keepPreviousData:!0}),d=l(e,"tpch",{enabled:e===i.lx&&a,keepPreviousData:!0});return e===i.lx&&n.isSuccess&&c.isSuccess&&d.isSuccess&&a}},804584:(e,t,a)=>{a.d(t,{R:()=>s});var r=a(610435),n=a(956935),i=a(692738),o=a(497895);let s=(0,i.forwardRef)(function({children:e,style:t,className:a,actions:i,...s},l){let{theme:c}=(0,o.wn)(),d={layout:(0,n.AH)({display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:"var(--table-filter-layout-group-margin)",columnGap:"var(--table-filter-layout-group-margin)",rowGap:"var(--table-filter-layout-item-gap)",flexWrap:"wrap"}),filters:(0,n.AH)({display:"flex",flexWrap:"wrap",flexDirection:"row",alignItems:"center",gap:"var(--table-filter-layout-item-gap)",marginRight:"var(--table-filter-layout-group-margin)",flex:1}),filterActions:(0,n.AH)({display:"flex",flexWrap:"wrap",gap:"var(--table-filter-layout-item-gap)",alignSelf:"flex-start"})};return(0,r.FD)("div",{...s,ref:l,style:{"--table-filter-layout-item-gap":`${c.spacing.sm}px`,"--table-filter-layout-group-margin":`${c.spacing.md}px`,...t},css:d.layout,className:a,children:[(0,r.Y)("div",{css:d.filters,children:e}),i&&(0,r.Y)("div",{css:d.filterActions,children:i})]})})},804723:(e,t,a)=>{a.d(t,{S:()=>l});var r=a(610435),n=a(5421),i=a(497895),o=a(174541);let s=({children:e,...t})=>{let{theme:a}=(0,i.wn)(),{isInsideTypeaheadCombobox:s}=(0,n.T)();if(!s)throw Error("`TypeaheadComboboxFooter` must be used within `TypeaheadComboboxMenu`");return(0,r.Y)("div",{...t,css:(0,o.UA)(a),children:e})};s.defaultProps={_type:"TypeaheadComboboxFooter"};let l=s},811133:(e,t,a)=>{a.d(t,{Cw:()=>p,IV:()=>u});var r=a(452137),n=a.n(r),i=a(29824),o=a(641760),s=a(302118),l=a(412836);function c(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}function d(){return({objectType:e,metastore:t,catalog:a,database:r,table:l,credential:d,location:u,connection:p,permissionChanges:m,updateType:g,cleanRoom:f,externalMetadata:h})=>{var b;return(b=function*(){n()((0,o.jN)({catalog:a,objectType:e}),`Object type ${e} is not a valid Unity Catalog securable type`);let c={changes:m.map(e=>{if("add"===g)return{principal:e.Principal,remove:[],add:e.ActionTypes};return{principal:e.Principal,remove:e.ActionTypes,add:[]}})},b="";switch(e){case i.an.STORAGE_CREDENTIAL:case i.an.CREDENTIAL:n()(void 0!==d,"Credential must be set"),b=d;break;case i.an.EXTERNAL_LOCATION:n()(void 0!==u,"Location must be set"),b=u;break;case i.an.CONNECTION:n()(void 0!==p,"Location must be set"),b=p;break;case i.an.METASTORE:n()(void 0!==t,"Metastore must be set"),b=t;break;case i.an.CATALOG:n()(void 0!==a,"Catalog must be set"),b=a;break;case i.an.DATABASE:n()(void 0!==r,"Schema must be set"),b=`${a}.${r}`;break;case i.an.CLEAN_ROOM:n()(void 0!==f,"Clean room must be set"),b=f;break;case i.an.EXTERNAL_METADATA:n()(void 0!==h,"External metadata must be set"),b=h;break;case i.an.TABLE:default:n()(void 0!==r,"Schema must be set"),n()(void 0!==l,"Table must be set"),b=`${a}.${r}.${l}`}return s.k.setPermissions(e,b,c)},function(){var e=this,t=arguments;return new Promise(function(a,r){var n=b.apply(e,t);function i(e){c(n,a,r,i,o,"next",e)}function o(e){c(n,a,r,i,o,"throw",e)}i(void 0)})})()}}function u(){let e=d();return(0,l.n_)(e)}function p(){return(0,l.n_)(function(e){let t=d();return Promise.all(e.map(e=>t(e)))})}},814947:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",d:"m11.5.94 4.03 4.03-1.06 1.06-2.22-2.22V10h-1.5V3.81L8.53 6.03 7.47 4.97zM1 4.5h4V6H1zM1 12.5h10V14H1zM8 8.5H1V10h7z"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="SortAscendingIcon";let l=s},820097:(e,t,a)=>{a.d(t,{H:()=>i,Z:()=>o});var r,n=a(696514),i=((r={}).DONE="done",r.CANCELLED="cancelled",r);let o=(0,n.fH)("Filebrowser::CloneRedashToLakeview")},829845:(e,t,a)=>{a.d(t,{BC:()=>f,E$:()=>y,PT:()=>b,Th:()=>v,UA:()=>E,dG:()=>p,rD:()=>g,tg:()=>h,x3:()=>m});var r=a(820097),n=a(571739),i=a(437475),o=a(322227),s=a(242995),l=a(75036),c=a(751097),d=a(659573),u=a(311529);let p=(e,t,a,r)=>o.x.call({name:e,internalName:t,initialOpenFolderName:a,initialOpenFolderInternalName:r}),m=e=>n.z.call(e),g=e=>r.Z.call(e),f=e=>i.V1.call(e),h=(e,t,a)=>u.x.call({name:e,internalName:t,...a}),b=e=>d.v.call(e),v=e=>l.e.call(e),y=e=>s.h.call(e),E=e=>c.x.call(e)},830690:(e,t,a)=>{a.d(t,{dK:()=>T,mB:()=>_,vI:()=>I});var r=a(610435),n=a(956935),i=a(644091),o=a(759794),s=a(91958),l=a.n(s),c=a(692738),d=a(79128),u=a(224098),p=a(429608),m=a(497895),g=a(217247),f=a(955210),h=a(74438),b=a(53333),v=a(639712),y=a(123252),E=a(661748);function _(e,t){let a=`.${e}-pagination`,r=`.${e}-pagination-item`,i=`.${e}-pagination-item-link`,o=`.${e}-pagination-item-active`,s=`.${e}-pagination-item-ellipsis`,l=`.${e}-pagination-next`,c=`.${e}-pagination-prev`,d=`.${e}-pagination-jump-next`,u=`.${e}-pagination-jump-prev`,p=`.${e}-pagination-options-quick-jumper`,m=`.${e}-pagination-options-size-changer`,g=`.${e}-pagination-options`,f=`.${e}-pagination-disabled`,h=`.${e}-select-selector`,b=`.${e}-select-dropdown`,y={"span[role=img]":{color:t.colors.textSecondary,"> *":{color:"inherit"}},[r]:{backgroundColor:"none",border:"none",color:t.colors.textSecondary,"&:focus-visible":{outline:"auto"},"> a":{color:t.colors.textSecondary,textDecoration:"none","&:hover":{color:t.colors.actionDefaultTextHover},"&:active":{color:t.colors.actionDefaultTextPress}},"&:hover":{backgroundColor:t.colors.actionDefaultBackgroundHover},"&:active":{backgroundColor:t.colors.actionDefaultBackgroundPress}},[o]:{backgroundColor:t.colors.actionDefaultBackgroundPress,color:t.colors.actionDefaultTextPress,border:"none","> a":{color:t.colors.actionDefaultTextPress},"&:focus-visible":{outline:"auto"},"&:hover":{backgroundColor:t.colors.actionDefaultBackgroundPress,color:t.colors.actionDefaultTextPress}},[i]:{border:"none",color:t.colors.textSecondary,"&[disabled]":{display:"none"},"&:hover":{backgroundColor:t.colors.actionDefaultBackgroundHover},"&:active":{backgroundColor:t.colors.actionDefaultBackgroundPress},"&:focus-visible":{outline:"auto"}},[s]:{color:"inherit"},[`${l}, ${c}, ${d}, ${u}`]:{color:t.colors.textSecondary,"&:hover":{backgroundColor:t.colors.actionDefaultBackgroundHover},"&:active":{backgroundColor:t.colors.actionDefaultBackgroundPress},"&:focus-visible":{outline:"auto"},[`&${f}`]:{pointerEvents:"none"}},[`&${a}.mini, ${a}.mini`]:{[`${r}, ${l}, ${c}, ${d}, ${u}`]:{height:"32px",minWidth:"32px",width:"auto",lineHeight:"32px"},[m]:{marginLeft:4},[`input,  ${g}`]:{height:"32px"},[`${h}`]:{boxShadow:t.shadows.xs,borderColor:t.colors.actionDefaultBorderDefault}},[`${p} > input`]:{borderColor:t.colors.actionDefaultBorderDefault},[`${b}`]:{borderColor:t.colors.actionDefaultBorderDefault}},E=(0,v.dg)(y);return(0,n.AH)(E)}let S=l()((e,t)=>_(e,t),(e,t)=>`${(0,v.H6)(t)}|${e}`),T=function({currentPageIndex:e,pageSize:t=10,numTotal:a,onChange:n,style:s,hideOnSinglePage:l,dangerouslySetAntdProps:d,componentId:g,analyticsEvents:f}){let h=(0,E.W)("databricks.fe.observability.defaultComponentView.pagination",!1),{classNamePrefix:v,theme:_}=(0,m.wn)(),{pageSizeSelectAriaLabel:T,pageQuickJumperAriaLabel:I,...C}=d??{},A=(0,c.useRef)(null),R=(0,c.useMemo)(()=>f??(h?[u.s7.OnValueChange,u.s7.OnView]:[u.s7.OnValueChange]),[f,h]),w=(0,u.ei)({componentType:u.v_.Pagination,componentId:g,analyticsEvents:R,valueHasNoPii:!0}),x=(0,c.useCallback)((e,t)=>{w.onValueChange(e),n(e,t)},[w,n]),{elementRef:O}=(0,b.z)({onView:w.onView}),M=(0,i.SV)([A,O]);return(0,c.useEffect)(()=>{if(A&&A.current){let e=A.current.querySelector(`.${v}-select-selection-search-input`);e&&e.setAttribute("aria-label",T??"Select page size");let t=A.current.querySelector(`.${v}-pagination-options-quick-jumper > input`);t&&t.setAttribute("aria-label",I??"Go to page")}},[I,T,v]),(0,r.Y)(p.wC,{children:(0,r.Y)("div",{ref:M,children:(0,r.Y)(o.A,{...(0,y.VG)(),css:S(v,_),current:e,pageSize:t,responsive:!1,total:a,onChange:x,showSizeChanger:!1,showQuickJumper:!1,size:"small",style:s,hideOnSinglePage:l,...C,...w.dataComponentProps})})})},I=function({onNextPage:e,onPreviousPage:t,hasNextPage:a,hasPreviousPage:n,nextPageText:i="Next",previousPageText:o="Previous",pageSizeSelect:{options:s,default:l,getOptionText:p,onChange:b,ariaLabel:v="Select page size"}={},componentId:y="design_system.cursor_pagination",analyticsEvents:E=[u.s7.OnValueChange],valueHasNoPii:_}){let{theme:S,classNamePrefix:T}=(0,m.wn)(),[I,C]=(0,c.useState)(l),A=(0,c.useMemo)(()=>E,[E]),R=`${y}.page_size`,w=(0,u.ei)({componentType:u.v_.LegacySelect,componentId:R,analyticsEvents:A,valueHasNoPii:_});return(0,r.FD)("div",{css:{display:"flex",flexDirection:"row",gap:S.spacing.sm,[`.${T}-select-selector::after`]:{content:"none"}},...w.dataComponentProps,children:[(0,r.Y)(d.$n,{componentId:`${y}.previous_page`,icon:(0,r.Y)(g.A,{}),disabled:!n,onClick:t,type:"tertiary",children:o}),(0,r.Y)(d.$n,{componentId:`${y}.next_page`,endIcon:(0,r.Y)(f.A,{}),disabled:!a,onClick:e,type:"tertiary",children:i}),s&&(0,r.Y)(h._v,{"aria-label":v,value:String(I),css:{width:120},onChange:e=>{let t=Number(e);b?.(t),C(t),w.onValueChange(e)},children:s.map(e=>(0,r.Y)(h._v.Option,{value:String(e),children:(p||(e=>`${e} / page`))(e)},e))})]})}},834343:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,r.Y)("g",{clipPath:"url(#SearchIcon_svg__a)",children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a7 7 0 1 0 4.39 12.453l2.55 2.55 1.06-1.06-2.55-2.55A7 7 0 0 0 8 1M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0",clipRule:"evenodd"})}),(0,r.Y)("defs",{children:(0,r.Y)("clipPath",{children:(0,r.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="SearchIcon";let l=s},837334:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,r.Y)("path",{fill:"currentColor",d:"M7.25 7.25V4.5h1.5v2.75h2.75v1.5H8.75v2.75h-1.5V8.75H4.5v-1.5z"}),(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1 1.75A.75.75 0 0 1 1.75 1h12.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75zm1.5.75v11h11v-11z",clipRule:"evenodd"})]})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="PlusSquareIcon";let l=s},840924:(e,t,a)=>{a.d(t,{v:()=>b});var r=a(483588),n=a(441535),i=a(141078);let o=(0,i.J1)`
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
`,m=(0,i.J1)`
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
`;function g(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}function f(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}function h(e){var t;return(t=function*({query:e,client:t,extractResponse:a,extractToken:r,extractContinueFetching:i,extractMetadata:o,variables:s,maxResults:l,maxPages:c}){let d=[],u=s.pageToken??null,p=0,m=null,g=(0,n.W)("databricks.fe.data.defaultLineagePaginationSize",100),f=s.pageSize??g,h=l??1e3,b=c&&c>0&&Number.isFinite(c)?c:1/0,v=!0,y=0;do try{let{data:n}=yield t.query({query:e,variables:{...s,pageSize:f,pageToken:u},fetchPolicy:"network-only"});if(!n)break;let l=a(n);l&&d.push(...l),u=r(n),p=d.length,v=!i||i(n),m=o?o(m,n):m,y++}catch(e){throw e}while(u&&p<h&&y<b&&v);return{response:d,pageToken:u,metadata:m}},function(){var e=this,a=arguments;return new Promise(function(r,n){var i=t.apply(e,a);function o(e){f(i,r,n,o,s,"next",e)}function s(e){f(i,r,n,o,s,"throw",e)}o(void 0)})}).apply(this,arguments)}let b={listSecurableBySecurable:(e,t,a)=>{let i=Math.max((0,n.W)("databricks.fe.discovery.pagesToFetchAllAssets",2),1),o=t.securableResponseFilter===r.osA.ALL_ASSETS_FLATTENED?i:void 0;return h({client:e,query:d,variables:t,extractResponse:e=>e.metadatalineageapiserverListSecurableLineagesBySecurable?.lineages??[],extractToken:e=>e.metadatalineageapiserverListSecurableLineagesBySecurable?.nextPageToken??null,maxResults:o?1/0:a,maxPages:o})},listEntityBySecurable:(e,t,a)=>h({client:e,query:u,variables:t,extractResponse:e=>e.metadatalineageapiserverListEntityLineagesBySecurable?.lineages??[],extractToken:e=>e.metadatalineageapiserverListEntityLineagesBySecurable?.nextPageToken??null,maxResults:a}),listColumnLineage:(e,t)=>(function(e){var t;return(t=function*({query:e,client:t,variables:a,extractResponse:r}){try{let{data:n}=yield t.query({query:e,variables:a,fetchPolicy:"network-only"});return r(n)}catch(e){throw e}},function(){var e=this,a=arguments;return new Promise(function(r,n){var i=t.apply(e,a);function o(e){g(i,r,n,o,s,"next",e)}function s(e){g(i,r,n,o,s,"throw",e)}o(void 0)})}).apply(this,arguments)})({client:e,query:m,variables:t,extractResponse:e=>e?.metadatalineageapiserverListColumnLineages?.lineages??[]}),listExternalLineage:(e,t,a)=>h({client:e,query:p,variables:t,extractResponse:e=>e?.metadatalineageapiserverListExternalLineageRelationships?.externalLineageRelationships??[],extractToken:e=>e.metadatalineageapiserverListExternalLineageRelationships?.nextPageToken??null,maxResults:a})}},841734:(e,t,a)=>{a.d(t,{dS:()=>l,lm:()=>c,ry:()=>o});var r=a(692738),n=a(595615),i=a(302118);let o=e=>["data_explorer_catalog_details",e];function s(){return(0,r.useCallback)(({catalog:e})=>({queryFn:()=>i.k.getCatalogDetails(e)}),[])}function l(e,t){return(0,n.AO)({queryKey:o(e),queryFn:function(){return i.k.getCatalogDetails(e)},...t})}function c(){return(0,n.Ox)({queryFn:s})}},848737:(e,t,a)=>{a.d(t,{d:()=>g});var r=a(610435),n=a(692738),i=a(545251),o=a(305404),s=a(994796),l=a(497895),c=a(834343),d=a(407374),u=a(469490),p=a(569546);let m=e=>{if("string"==typeof e||"number"==typeof e)return e.toString();if(n.isValidElement(e)&&e.props.children)return n.Children.toArray(e.props.children).map(m).join(" ");return""},g=(0,n.forwardRef)(({onChange:e,onSearch:t,virtualized:a,children:g,hasWrapper:f,controlledValue:h,setControlledValue:b,rightSearchControls:v,...y},E)=>{let{theme:_}=(0,l.wn)(),{componentId:S}=(0,i.w)(),{isInsideDialogComboboxOptionList:T}=(0,o.r)(),I=`no-result-${(0,p.B)()}`,C=(0,n.useRef)(null);(0,n.useImperativeHandle)(E,()=>C.current);let[A,R]=n.useState();if(!T)throw Error("`DialogComboboxOptionListSearch` must be used within `DialogComboboxOptionList`");let w=g;if(A&&!a&&void 0===h){var x;let e;x=f?g.props.children:g,e=A.toLowerCase(),w=n.Children.map(x,t=>{if(n.isValidElement(t)){let a=t.props.__EMOTION_TYPE_PLEASE_DO_NOT_USE__?.defaultProps._TYPE??t.props._TYPE;if("DialogComboboxOptionListSelectItem"===a||"DialogComboboxOptionListCheckboxItem"===a){let a=m(t).toLowerCase(),r=t.props.value?.toLowerCase()??"";return a.includes(e)||r.includes(e)?t:null}}return t})?.filter(e=>e),f&&(w=n.cloneElement(g,{},w))}let O=(0,n.useRef)(null);(0,n.useEffect)(()=>{if(!O.current)return;let e=(0,s.aV)(O.current);if(e){let t=(0,s.kQ)(e),a=e?.[0];a&&(0,s.ed)(a,t,!1)}},[A]);let M=n.Children.toArray(f?g.props.children:g).some(e=>n.isValidElement(e)),L=f&&w?.props.children?.length||!f&&w?.length;return(0,n.useEffect)(()=>{L||C.current?.input?.setAttribute("aria-activedescendant",I)},[L,I,C.current?.input?.value]),(0,r.FD)(r.FK,{children:[(0,r.Y)("div",{ref:O,css:{padding:`${_.spacing.sm}px ${_.spacing.lg/2}px ${_.spacing.sm}px`,width:"100%",boxSizing:"border-box",position:"sticky",top:0,background:_.colors.backgroundPrimary,zIndex:_.options.zIndexBase+1},children:(0,r.FD)("div",{css:{display:"flex",flexDirection:"row",gap:_.spacing.sm},children:[(0,r.Y)(d.p,{componentId:S?`${S}.search`:"codegen_design_system_src_design_system_dialogcombobox_dialogcomboboxoptionlistsearch.tsx_173",type:"search",name:"search",ref:C,prefix:(0,r.Y)(c.A,{}),placeholder:"Search",onChange:e=>{a||R(e.target.value),b?.(e.target.value),t?.(e.target.value)},onKeyDown:e=>{(e=>{if("ArrowDown"!==e.key&&"ArrowUp"!==e.key&&"Enter"!==e.key)return;e.preventDefault();let t=(0,s.aV)(e.target);if(!t)return;let a=(0,s.kQ)(t);if("ArrowDown"===e.key||"ArrowUp"===e.key)if(a){let r=(0,s.oS)(a,"ArrowDown"===e.key?"next":"previous");if(r)(0,s.ed)(r,a,!1);else if("ArrowDown"===e.key){let e=t[0];(0,s.ed)(e,a,!1)}else if("ArrowUp"===e.key){let e=t[t.length-1];(0,s.ed)(e,a,!1)}}else{let a="ArrowDown"===e.key?t[0]:t[t.length-1];a&&(0,s.ed)(a,void 0,!1)}else"Enter"===e.key&&a&&a.click()})(e),y.onKeyDown?.(e)},value:h??A,shouldPreventFormSubmission:!0,...y}),v]})}),a?g:L&&M?(0,r.Y)("div",{"aria-live":"polite",css:{width:"100%"},children:w}):(0,r.Y)(u.i,{id:I})]})})},850723:(e,t,a)=>{a.d(t,{J:()=>o,O:()=>s});var r=a(160603),n=a(302118);function i(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}let o=["get_metastore_summary"];function s({fallback:e,useQueryOptions:t}={}){return(0,r.useQuery)({queryKey:o,queryFn:()=>{var t;return(t=function*(){return e?yield n.k.getMetastoreSummaryWithFallBack():yield n.k.getMetastoreSummary()},function(){var e=this,a=arguments;return new Promise(function(r,n){var o=t.apply(e,a);function s(e){i(o,r,n,s,l,"next",e)}function l(e){i(o,r,n,s,l,"throw",e)}s(void 0)})})()},...t})}},861403:(e,t,a)=>{a.d(t,{b:()=>m});var r=a(778529),n=a.n(r),i=a(536717),o=a.n(i),s=a(692738),l=a(342411),c=a(595338);let d=/summary:\s*(.*?)(?=,\s*data:)/s;var u=a(482921),p=a(308879);function m(e,t=!0,a=!1){let r=(0,l.tz)(),{isEnabled:i}=(0,p.L)();return(0,s.useMemo)(()=>{let s=e;if(n()(s))return;if((0,c.F0)(e)?s=function(e,t){if(t.response?.status===429)return e.formatMessage({id:"O57kaK",defaultMessage:"Error 429: Too many requests. Please wait a moment and try again. If the issue persists, consider adjusting your request frequency or reaching out to support for assistance."});{let e=t.response?.data;return e?.message??e}}(r,e):e instanceof Error&&(s=function(e,t){if(t&&e.cause&&"string"==typeof e.cause)return e.cause;if("SqlQueryError"!==e.name)return e.message;var a=e.message;let r=a.match(/Details:\s*([^,]*)/);if(r&&r.length>=0)return r[0];return a}(e,a)),o()(s)){var l=s,p=r,m=t,g=i;if(l.includes("Catalog namespace is not supported")||l.includes("Unity catalog is not enabled"))switch((0,u.G)(m,g)){case u.M.ONLY_CLUSTER:return p.formatMessage({id:"Z2EuPV",defaultMessage:"This cluster is incompatible with sample data for Unity Catalog tables. Please use Databricks Runtime 11.1 or higher or contact Databricks for assistance."});case u.M.ONLY_WAREHOUSE:return p.formatMessage({id:"Uvfp1K",defaultMessage:"This warehouse is incompatible with sample data for Unity Catalog tables. Please use Databricks Runtime 11.1 or higher or contact Databricks for assistance."});case u.M.WAREHOUSE_AND_CLUSTER:return p.formatMessage({id:"u0m7LZ",defaultMessage:"This warehouse or cluster is incompatible with sample data for Unity Catalog tables. Please use Databricks Runtime 11.1 or higher or contact Databricks for assistance."});default:return""}let e=l.match(d);if(e)return e[0].trim();return l}return JSON.stringify(s)},[e,r,a,t,i])||""}},862294:(e,t,a)=>{a.d(t,{GF:()=>f,dD:()=>g,zx:()=>m});var r=a(692738),n=a(686560),i=a(141078),o=a(595615),s=a(641760);function l(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}let c=(0,i.J1)`
  fragment SettingsApiErrorFragment on ApiError {
    code
    message
    helpUrl
    traceId
  }
`,d=(0,i.J1)`
  fragment BooleanSettingFragment on SettingspolicySetting {
    isMutable
    ref
    value {
      boolVal {
        value
      }
    }
  }
`,u=(0,i.J1)`
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
  ${c}
  ${d}
`,p=(e,t,a)=>({input:{key:{typeName:"workspace",name:e},setting:{typeName:"disable_legacy_access",name:""},...t&&{sessionToken:t},...a}});function m(e){let t=(()=>{let e=(0,n.d)("currentWorkspaceId",""),[t]=(0,i._l)(u,{variables:p(e),fetchPolicy:"cache-and-network"});return(0,r.useCallback)(()=>({queryKey:["DISABLE_LEGACY_ACCESS_SETTING_QUERY"],queryFn:()=>{var e;return(e=function*(){let{data:e}=yield t();return e},function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function o(e){l(i,r,n,o,s,"next",e)}function s(e){l(i,r,n,o,s,"throw",e)}o(void 0)})})()}}),[t])})();return(0,o.AO)({queryKey:t().queryKey,queryFn:t().queryFn,keepPreviousData:!0,...e,enabled:(0,s.n_)()})}function g(e){return!!(0,s.n_)()&&!!e?.settingspolicyserviceGetSettingRestWithoutSettingName?.setting?.value?.boolVal?.value}function f(){var e;let t,a=(0,s.n_)(),r=(e={skip:!a},t=(0,n.d)("currentWorkspaceId",""),(0,i.IT)(u,{variables:p(t),fetchPolicy:"cache-and-network",skip:e?.skip}));return{data:!!a&&!!r.data?.settingspolicyserviceGetSettingRestWithoutSettingName?.setting?.value?.boolVal?.value,loading:r.loading,error:r.error}}},885364:(e,t,a)=>{a.d(t,{g:()=>o,u:()=>i});var r=a(987962),n=a.n(r);class i extends Error{__initiatorStack;errorCode;constructor(e,t,...a){super(t,...a),Error.captureStackTrace&&Error.captureStackTrace(this,i),this.name="SchemaLoadError",this.errorCode=e}isWaitingForEndpoint(){return 3===this.errorCode}}function o(e){return t=>{if(n()(t,"error")){let a=new i(t.error.code,`${t.error.message} (${e})`);return a.__initiatorStack=Error().stack,Promise.reject(a)}return t}}},886688:(e,t,a)=>{a.d(t,{U:()=>l,u:()=>c});var r=a(689262),n=a(686560),i=a(709262),o=a(805287);let s=()=>(0,o.gz)({cloud:"AWS",userCanUseDatabricksWorkspace:(0,n.d)("userCanUseDatabricksWorkspace_new",!1),userCanUseSqlService:(0,n.d)("userCanUseSqlService_new",!1),enableSqlService:(0,r.b)("enableSqlService",(0,n.d)("enableSqlService",!1),()=>(0,n.d)("dbSqlEnabled_new",!1)),centralizedLoginEnabled:(0,n.d)("centralizedLoginEnabled",!1)}),l=()=>s()[i.EU].availableInEnvironment,c=()=>s()[i.EU].allowed},888565:(e,t,a)=>{a.d(t,{e$:()=>ee,nu:()=>X,oY:()=>q,xQ:()=>J,zC:()=>Z});var r,n=a(610435),i=a(720022),o=a(638600),s=a(692738),l=a(466213),c=a(773953),d=a(136012),u=a(381817),p=a(79570),m=a(810152),g=a(830690),f=a(876726),h=a(834343),b=a(804584),v=a(359504),y=a(382908),E=a(12414),_=a(339518),S=a(325056),T=a(293418),I=a(415273),C=a(314775),A=a(262786),R=a(84008),w=a(342411),x=a(408278),O=a(703140),M=a(797246),L=a(365532),k=a(377405),N=a(660618),D=a(769e3),P=a(595615),$=a(861403),U=a(278983),Y=a(109581),F=a(217985),H=a(681457),G=a(12872),B=a(988947),W=a(492814),z=a(43680),q=((r={}).NAME="name",r.OWNER="owner",r.CREATED_AT="created_at",r.POPULARITY="usage",r.QUALITY="quality",r.SHARE="share",r.COMMENT="comment",r);function V(e){let t=e.table.options.meta?.entityListTable;if(!t)throw Error("EntityListTable meta is required for default EntityListTable column renderers.");return t}function K(e){let t=V(e);if(t.nameCellOverride){var a=t.nameCellOverride;if("function"==typeof a)return a(e);return a??null}let r=t.extractObjectType(e.row.original);return(0,n.Y)(c.Z,{componentId:"entity-list-table-name-cell",url:t.getUrlForEntity(e.row.original.name),label:t.intl.formatMessage(M.Ix[r]),icon:(0,n.Y)(L.B,{catalogProps:{isDefault:e.row.original.name===t.defaultCatalogName,securableKind:e.row.original?.securable_kind||void 0},name:e.row.original.name,objectType:r,browseOnly:e.row.original?.browse_only,securableKind:e.row.original?.securable_kind||void 0}),children:e.row.original.name})}function Q(e){let t=e.row.original;if(!t?.share_name)return null;let a=V(e),r=a.providersDictionary?.[t.provider_id??""],i=a.sharesDictionary?.[t.share_name??""];if(!r)return null;return(0,n.Y)(p.m,{componentId:"catalog-explorer_entity-list-table_unique-share-name-tooltip",content:(0,u.Bt)()&&i?a.intl.formatMessage({id:"mfBbus",defaultMessage:"Unique share name: {shareName}"},{shareName:t.share_name}):void 0,align:"start",alignOffset:i?-(2*i.length):0,children:(0,n.Y)(F.N,{componentId:"catalog-explorer_entity-list-table_share-link",to:(0,B.qJ)(r.name,t.share_name),asTypographyLink:!0,children:(0,u.Bt)()?a.isListSharesInCatalogEnabled&&a.sharesDataLoading?(0,n.Y)(m.I,{label:"Loading share display name...","data-testid":"catalog-explorer_entity-list-table_share-link_skeleton"}):i||t.share_name:t.share_name})})}function j(e){let t=V(e);return(0,n.Y)(k.a,{isLoading:!!t.isPopularityLoading,isError:!!t.isPopularityError,data:e.row.original.popularityData,includeTooltip:!0,onClick:()=>{t.onShowEntityPopularity?.(e.row.original.name)}})}function J({showUcProps:e,qualityEnabled:t,popularityEnabled:a,isDeltaShared:r}){let n=["name"];return e&&(n.push("owner","created_at"),a&&n.push("usage"),r&&n.push("share"),t&&(0,x.zh)()&&n.push("quality")),n}function X({showUcProps:e,extractObjectType:t,getUrlForEntity:a,nameCellOverride:r,defaultCatalogName:n,isDeltaShared:i}){let o=(0,w.tz)(),{catalog:l=""}=(0,W.E)(),{data:c}=(0,z.EA)({enabled:i}),d=!!((0,u.Bt)()&&i&&""!==l&&l!==N.lx&&l!==N.oD),{data:p,isLoading:m}=(0,G.Q)(l,{enabled:d}),g=(0,s.useMemo)(()=>c?.providers.reduce((e,t)=>(t.id&&(e[t.id]=t),e),{})??{},[c]),f=(0,s.useMemo)(()=>p?.reduce((e,t)=>(t.share_name&&(e[t.share_name]=t.share_display_name),e),{})??{},[p]),h=(0,s.useMemo)(()=>({intl:o,extractObjectType:t,getUrlForEntity:a,nameCellOverride:r,defaultCatalogName:n,providersDictionary:g,sharesDictionary:f,isListSharesInCatalogEnabled:d,sharesDataLoading:m}),[o,t,a,r,n,g,f,d,m]);return{columns:(0,s.useMemo)(()=>{let t=[{id:"name",header:o.formatMessage({id:"eL0H19",defaultMessage:"Name"}),accessorKey:"name",cell:K,sortingFn:"basic",size:e?75:void 0,minSize:50}];if(e){let e=[{id:"owner",header:o.formatMessage({id:"NM+whM",defaultMessage:"Owner"}),accessorFn:e=>e.owner||"",enableGlobalFilter:!0,sortingFn:"basic",size:50,minSize:50},{id:"created_at",header:o.formatMessage({id:"4cPUDI",defaultMessage:"Created at"}),accessorFn:e=>e.created_at||0,cell:({row:e})=>e.original.created_at?O.C.formatTimestampNicely(new Date(e.original.created_at),o):null,enableGlobalFilter:!1,sortingFn:"basic",size:50,minSize:50}];t.push(...e),i&&t.push({id:"share",header:o.formatMessage({id:"wbYlgw",defaultMessage:"Share"}),accessorFn:e=>e.share_name||"",cell:Q,enableGlobalFilter:!1,size:50,minSize:50})}return t},[o,e,i]),tableMeta:h}}function Z({isPopularityLoading:e,isPopularityError:t,showEntityPopularity:a,showUcProps:r,extractObjectType:i,getUrlForEntity:o,nameCellOverride:l,isCurrentCatalogUCSamples:c,isDeltaShared:u}){let m=(0,w.tz)(),g=(0,d.QQ)(),{columns:f,tableMeta:h}=X({showUcProps:r,extractObjectType:i,getUrlForEntity:o,nameCellOverride:l,isDeltaShared:u}),b=(0,s.useCallback)(e=>{g("click_popularity_icon_in_table_list"),a(e)},[g,a]),v=(0,s.useMemo)(()=>({...h,isPopularityLoading:e,isPopularityError:t,onShowEntityPopularity:b}),[h,e,t,b]);return{columns:(0,s.useMemo)(()=>{let e=!0,t=(0,n.Y)(p.m,{componentId:"discovery.catalog_explorer.entity_list_table.popularity_column_header_tooltip",content:m.formatMessage({id:"1I4W1C",defaultMessage:"Measures usage in the last 30 days"}),children:(0,n.Y)("span",{children:m.formatMessage({id:"6GqGYa",defaultMessage:"Popularity"})})}),a=[...f];return r&&!c&&a.push({id:"usage",header:()=>t,accessorFn:e=>e.popularityData?.queryCount||0,cell:j,enableGlobalFilter:!1,sortingFn:(t,a)=>(e&&(e=!1,(0,U.y)("clientsideEvent",{eventName:"sortPopularityColumn"})),(t.original.popularityData?.queryCount||0)-(a.original.popularityData?.queryCount||0)),size:50,minSize:50}),a},[f,m,r,c]),tableMeta:v}}function ee({data:e=[],isLoading:t,entityRequest:a,isSupplementalLoading:r=a.isLoading,emptyComponent:c,columns:u,hiddenColumns:p=[],loadingDescription:m,showLoadingOnRefetch:x,entityCountMessage:O,errorMessage:M,customErrorComponent:L,showCustomError:k,filterInputPlaceholder:N,enableRowSelection:U,onRowSelectionChange:F,selectedRowsState:G={},setSelectedRowsState:B,showFilter:W=!0,enableColumnResizing:z=!1,customFilterFns:q,sortingFns:V,dataExplorerTrackingObject:K,filterActions:Q,tableRowProps:j,columnFiltersState:J,customOnSelectAll:X,cardStyleTitle:Z=!1,tableMeta:et}){let ea=(0,w.tz)(),er=(0,d.QQ)(),[en,ei]=(0,D.x)(),eo=(0,s.useMemo)(()=>et?{entityListTable:et}:void 0,[et]),es=void 0!==t?t:a.isLoading||x&&a.isFetching||(0,P.ic)(a),[el,ec]=(0,s.useState)({pageSize:20,pageIndex:0}),ed=(0,$.b)(a.error);(0,s.useEffect)(()=>{ec(e=>({...e,pageIndex:0}))},[en.filter,en.sorting]);let eu=(0,Y.Lb)("redash/managed_redash/packages/app/src/app/pages/data/EntityListTable.tsx",{data:e,columns:u,meta:eo,state:{pagination:el,sorting:en.sorting,globalFilter:en.filter,rowSelection:G,columnVisibility:p.reduce((e,t)=>(e[t]=!1,e),{}),...J?{columnFilters:J}:{}},enableRowSelection:U,globalFilterFn:(e,t,a)=>e.getAllCells().filter(e=>e.column.getCanFilter()).some(r=>{let n=r.getValue(),i=q?.some(r=>r(e,t,a));if(i)return i;return void 0!==n&&String(n).toLowerCase().includes(a.toLowerCase())}),sortingFns:V,onRowSelectionChange:B,getCoreRowModel:(0,i.HT)(),getFilteredRowModel:(0,i.hM)(),getPaginationRowModel:(0,i.kW)(),getSortedRowModel:(0,i.h5)(),onSortingChange:e=>{let t="function"==typeof e?e(en.sorting):e;ei(e=>({...e,sorting:t}))},enableColumnResizing:z,columnResizeMode:"onChange"}),ep=!es&&0===eu.getRowModel().rows.length,em=eu.getFilteredRowModel().rows.length>el.pageSize,eg=!es&&em&&(0,n.Y)(g.dK,{componentId:"codegen_redash_app_src_app_pages_data_entitylisttable.tsx_380",dangerouslySetAntdProps:{hideOnSinglePage:!0},currentPageIndex:el.pageIndex+1,numTotal:eu.getFilteredRowModel().rows.length,onChange:(e,t)=>{ec({pageSize:t||el.pageSize,pageIndex:e-1})},pageSize:el.pageSize}),ef=(0,n.Y)(f.S,{image:(0,n.Y)(h.A,{}),description:ea.formatMessage({id:"exCIqJ",defaultMessage:"Try using a different keyword or adjusting your filters"})}),eh=(0,l.YQ)(e=>{er(`entity_list_filter_${K}`),ei(t=>({...t,filter:e}))},300),eb=en.filter,ev=W&&(0,n.FD)(b.R,{actions:Q,style:Z?{marginBottom:0}:void 0,children:[(0,n.Y)(v.z,{componentId:"codegen_redash_app_src_app_pages_data_entitylisttable.tsx_424",placeholder:N,"aria-label":N,defaultValue:en.filter,onChange:e=>eh(String(e.target.value)),allowClear:!0,ignoreFilterMediaSizing:!!Z,containerProps:Z?{style:{maxWidth:400,minWidth:225}}:void 0}),(0,n.Y)(y.o.Text,{children:r?(0,n.Y)(E.y,{size:"small",loading:!1}):O(eu.getFilteredRowModel().rows.length)})]}),ey=k||a.isError?L??(0,n.Y)(_.F,{componentId:"codegen_redash_app_src_app_pages_data_entitylisttable.tsx_439",className:"m-t-10",message:M,description:ed,type:"error"}):(0,n.FD)(S.X,{css:{minWidth:650},pagination:eg,empty:ep&&(eb?ef:c),someRowsSelected:eu.getIsSomeRowsSelected()||eu.getIsAllRowsSelected(),scrollable:!0,noMinHeight:!0,children:[eu.getHeaderGroups().map(e=>(0,n.FD)(T.H,{isHeader:!0,children:[U&&(0,n.Y)(I.p,{checkboxLabel:ea.formatMessage({id:"+Zxskc",defaultMessage:"Select all rows"}),componentId:"codegen_redash_app_src_app_pages_data_entitylisttable.tsx_458",checked:eu.getIsAllRowsSelected(),indeterminate:eu.getIsSomeRowsSelected(),onChange:e=>{let t=eu.getRowModel().rows;F?.(eu.getIsAllRowsSelected()?[]:t.filter(e=>e.getCanSelect())),eu.getToggleAllRowsSelectedHandler()(e),X?.()}}),e.headers.map(e=>(0,n.Y)(C.A,{componentId:"codegen_redash_app_src_app_pages_data_entitylisttable.tsx_467",sortable:!1!==e.column.getCanSort(),sortDirection:e.column.getIsSorted()||"none",onToggleSort:(...t)=>{er(`sort_${K}_list`,{columnSortedBy:e.id}),e.column.getToggleSortingHandler()?.(...t)},style:{flex:e.column.getSize()/100},header:e,column:e.column,setColumnSizing:eu.setColumnSizing,children:(0,o.Kv)(e.column.columnDef.header,e.getContext())},e.id))]},e.id)),es?(0,n.Y)("div",{"data-testid":"entity-list-table-loading",children:(0,n.Y)(A.B,{table:eu,loadingDescription:m})}):eu.getRowModel().rows.map(e=>(0,n.FD)(T.H,{...j,children:[U&&(0,n.Y)(I.p,{componentId:"codegen_redash_app_src_app_pages_data_entitylisttable.tsx_500",checkboxLabel:ea.formatMessage({id:"h0KtmB",defaultMessage:"Select {name}"},{name:e.original.name||e.id}),isDisabled:!e.getCanSelect(),checked:e.getIsSelected(),onChange:t=>{let a=[...eu.getRowModel().rows.filter(e=>e.getIsSelected())];e.getIsSelected()?a.splice(a.indexOf(e),1):a.push(e),F?.(a),e.getToggleSelectedHandler()(t)}}),e.getVisibleCells().map(e=>(0,n.Y)(R.n,{css:{"> span":{alignSelf:"center"}},style:{flex:e.column.getSize()/100},children:(0,o.Kv)(e.column.columnDef.cell,e.getContext())},e.id))]},e.id))]});return Z?(0,n.Y)(H.x,{titleOverride:ev,titleText:Z,table:ey}):(0,n.FD)(n.FK,{children:[ev,ey]})}},902310:(e,t,a)=>{a.d(t,{_:()=>u,t:()=>p});var r=a(441535),n=a(412836),i=a(733337),o=a(660618),s=a(927239),l=a(595615),c=a(125230);function d(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}let u=e=>"isLakebaseServerlessCatalog"in e&&!0===e.isLakebaseServerlessCatalog;function p(){let{invalidate:e}=(0,l.rA)(),t=(0,r.W)("databricks.fe.lakebase.useNewCatalogsSyncedTablesApi",!1);return(0,n.n_)(({name:e,databaseProjectId:a,databaseBranchId:r,postgresDatabaseName:n,createDatabaseIfNotExists:s})=>{var l;return(l=function*(){if(!t)return yield(0,i.nr)(`${o.e0}/catalogs`,{method:"POST",body:JSON.stringify({name:e,database_project_id:a,database_branch_id:r,database_name:n,create_database_if_not_exists:s})});{let t=yield(0,c._J)(a,r);return yield(0,i.nr)(`/ajax-api/2.0/postgres/catalogs?catalog_id=${encodeURIComponent(e)}`,{method:"POST",body:JSON.stringify({spec:{branch:`projects/${t.project_slug}/branches/${t.slug}`,create_database_if_missing:s,postgres_database:n}})}),{name:e,databaseProjectId:a,databaseBranchId:r,postgresDatabaseName:n,createDatabaseIfNotExists:s}}},function(){var e=this,t=arguments;return new Promise(function(a,r){var n=l.apply(e,t);function i(e){d(n,a,r,i,o,"next",e)}function o(e){d(n,a,r,i,o,"throw",e)}i(void 0)})})()},{onSuccess:()=>{e([s.xQ])}})}},907046:(e,t,a)=>{a.d(t,{n:()=>i});var r=a(610435),n=a(939578);let i=e=>{let{name:t,children:a,...i}=e;return(0,r.FD)(r.FK,{children:[(0,r.Y)(n.y,{...i,children:t}),a]})}},913372:(e,t,a)=>{a.d(t,{GY:()=>l,a6:()=>c,c3:()=>s,nu:()=>u,qT:()=>p,tB:()=>d});var r,n=a(692738),i=a(686560),o=a(141078),s=((r={}).LAST_SELECTED_WAREHOUSE="",r);function l(e){return Object.values(s).includes(e)}let c=(0,o.J1)`
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
`,d=(e={})=>{let t=(0,i.d)("currentWorkspaceId","");return(0,o.IT)(c,{variables:{workspaceId:t},...e})};function u(e,t={}){let a=(0,i.d)("currentWorkspaceId","");return e.query({...t,query:c,variables:{workspaceId:a}})}function p(){let e=(0,o.mK)();return(0,n.useMemo)(()=>u.bind(null,e),[e])}},913573:(e,t,a)=>{a.d(t,{A:()=>f});var r=a(610435),n=a(692738),i=a(923305),o=a(794938),s=a(6e4),l=a(497937),c=a(497895),d=a(79128),u=a(846007),p=a(217985),m=a(349297);let g=n.forwardRef(({noBasePath:e=!1,children:t,onClick:a,href:d,to:g,componentId:f,...h},b)=>{let v,y=(0,l.Zp)(),E=(0,s.CV)(),{theme:_}=(0,c.wn)(),S=(0,n.useCallback)(e=>{a&&a(e),e.defaultPrevented||(0,m.A)(e,y)},[a,y]);if(g&&!E){if("string"==typeof g&&(0,i.Eq)(g))throw Error("<Link to={...}> format does not accept absolute URLs. Please <ExternalLink> instead.");let{pathname:e,search:t,hash:a}=(0,u.t4)(g);v=`${e??"/"}${t??""}${a??""}`}else if(d){let t=d.startsWith("/#");v=(0,o.E)(d,e||t)}let T={color:_.colors.actionTertiaryTextDefault,textDecoration:"none",...h.style};return E&&g?(0,r.Y)(p.N,{to:g,onClick:a,componentId:f,...h,ref:b,style:T,asAnchorTag:!0,children:t}):(0,r.Y)("a",{...h,href:v,ref:b,onClick:S,style:T,children:t})});g.Button=function({children:e,noBasePath:t=!1,onClick:a,...i}){i.href&&(i={...i,href:(0,o.E)(i.href,t)});let s=(0,l.Zp)(),c=(0,n.useCallback)(e=>{a&&a(e),e.defaultPrevented||(0,m.A)(e,s)},[a,s]);return(0,r.Y)(d.$n,{...i,onClick:c,children:e})};let f=g},919505:(e,t,a)=>{a.d(t,{A:()=>f});var r=a(514503),n=a.n(r),i=a(692738),o=a(200356),s=a(65061),l=a(960718),c=a(441535),d=a(141078),u=a(886100),p=a(22191),m=a(278983);let g=(0,d.J1)`
  subscription WarehouseEventSubscription($ignoreScaledEvent: Boolean) @component(name: "DBSQLX.WareHouseUI") {
    warehouseEvent(ignoreScaledEvent: $ignoreScaledEvent) {
      warehouseId
      eventName
      eventTimeMs
    }
  }
`;function f({skip:e,refetchLakehouseStates:t,setEnableSubscription:a}){let r=(0,i.useMemo)(()=>{let e=(0,c.W)("databricks.fe.redash.warehouses.event.debounceWait",1e3)+Math.floor(500*Math.random());return n()(t,e)},[t]),d=(0,i.useRef)(!1);return(0,s.sw)(g,{variables:{ignoreScaledEvent:!0},shouldResubscribe:!0,skip:e,onSubscriptionData({subscriptionData:e,client:n}){if(e?.data?.warehouseEvent){let{warehouseId:a}=e.data.warehouseEvent;"0"!==a||d.current?"0"===a?t():function(e,t,a){let{warehouseId:r,eventName:n}=t;(n||"undefined")in o.tXm&&e.cache.updateFragment({fragment:l.xz,id:e.cache.identify({__typename:"Lakehouse",id:r})},e=>{if(e)return{...e,state:n,health:null}})||a()}(n,e.data.warehouseEvent,r):d.current=!0}else u.iT.sev2(p.Es.RedashCore,"warehouseEvent.subscription.onSubscriptionData.unexpectedData",{subscriptionData:e}),a(!1)},onError(e){(function(e){if(e?.[0]){let t=e[0],a=t.code??"unknown",r=t instanceof CloseEvent?"CloseEvent":t.type??"unknown";(0,m.y)("clientsideEvent",{eventName:"warehouse_subscription_error",eventType:`warehouse_subscription_error_${r}`,errorCode:a})}else u.iT.sev2(p.Es.RedashCore,"warehouseEvent.subscription.onUnexpectedError",{rawError:e})})(e),a(!1)}})}},920174:(e,t,a)=>{a.d(t,{E:()=>i});var r=a(441535),n=a(886688);function i(){let e=(0,r.W)("databricks.warehouses.defaultWarehouseSettingEnabled",!1),t=(0,r.W)("databricks.fe.warehouses.defaultWarehouseSettingUIEnabled",!1),a=(0,r.W)("default_wh_setting",!1);return e&&(a||t)&&(0,n.u)()}},927239:(e,t,a)=>{a.d(t,{Fj:()=>l,OS:()=>r,U_:()=>s,Xq:()=>u,Zl:()=>c,a:()=>d,c_:()=>n,ie:()=>p,pu:()=>o,xQ:()=>i});let r="data_explorer_tables",n="data_explorer_table_details",i="metadata_catalogs",o="metadata_databases",s="data_explorer_volumes",l="volume_files",c="all_volume_files",d=["list_connections"],u="get_connection",p="user_credentials"},936743:(e,t,a)=>{a.d(t,{G:()=>s,l:()=>o});var r=a(610435),n=a(692738),i=a(62947);let o=e=>{switch(e.kind){case"group":return{group_name:e.name,group_id:e.id};case"user":return{user_name:e.name,user_id:e.id};case"serviceprincipal":return{service_principal_display_name:e.displayName,service_principal_id:e.id,service_principal_name:e.applicationId}}},s=({onUpdate:e,onUpdateSubject:t,showAccountLevelEntities:a,...s})=>{let l=(0,n.useCallback)(a=>{let r;Array.isArray(a)?r=a.map(e=>o(e)):void 0!==a&&(r=o(a)),e&&e(r),t&&t(a)},[e,t]);return(0,r.Y)(i.T,{enableAccountGroups:!!a,enableAccountServicePrincipals:!!a,enableAccountUsers:!!a,enableWorkspaceGroups:!a,enableWorkspaceServicePrincipals:!a,enableWorkspaceUsers:!a,onUpdate:e||t?l:void 0,...s})}},939578:(e,t,a)=>{a.d(t,{y:()=>o});var r=a(610435),n=a(545251),i=a(605107);let o=({children:e,...t})=>{let{isInsideDialogCombobox:a}=(0,n.w)();if(!a)throw Error("`DialogComboboxSectionHeader` must be used within `DialogCombobox`");return(0,r.Y)(i.X,{...t,children:e})}},960718:(e,t,a)=>{a.d(t,{MS:()=>u,SN:()=>p,vP:()=>d,xz:()=>m});var r=a(141078);let n=(0,r.J1)`
  fragment PrincipalNameFragment on PrincipalName {
    __typename
    ... on UserName {
      userName
    }
    ... on GroupName {
      groupName
    }
    ... on ServicePrincipalName {
      servicePrincipalName
    }
  }
`,i=(0,r.J1)`
  fragment PermissionFragment on Permission {
    inheritedFromObject
    permissionLevel
    inherited
  }
`,o=(0,r.J1)`
  fragment AccessControlFragment on AccessControl {
    principalName {
      ...PrincipalNameFragment
    }
    allPermissions {
      ...PermissionFragment
    }
  }
  ${n}
  ${i}
`,s=(0,r.J1)`
  fragment LakehousePermissionsFragment on Lakehouse {
    permissions @include(if: $withPermissions)
    effectivePermissions @include(if: $withPermissions) {
      objectId
      objectType
      accessControlList {
        ...AccessControlFragment
      }
    }
  }
  ${o}
`,l=(0,r.J1)`
  fragment LakehouseBasicAttributesFragment on Lakehouse {
    id
    name
    size
    state
    # TODO(LF-940) use enableServerlessCompute instead
    enableDatabricksCompute
    warehouseType
    numClusters
    numActiveClusters @include(if: $withActiveClusters)
    maxNumClusters
    creator {
      name
    }
    aclPrincipal {
      id
      displayName
      uniqueName
      kind
    }
    health {
      status
      summary
      details
    }
  }
`,c=(0,r.J1)`
  fragment LakehouseAdvancedAttributesFragment on Lakehouse {
    minNumClusters
    numActiveSessions
    autoStopMins
    instanceProfileArn
    spotInstancePolicy
    disableUnityCatalog
    enablePhoton
    jdbcUrl
    odbcParams {
      hostname
      path
      port
      protocol
    }
    tags {
      customTags {
        key
        value
      }
    }
  }
`,d=(0,r.J1)`
  fragment FullLakehouseFragment on Lakehouse {
    ...LakehouseBasicAttributesFragment
    ...LakehouseAdvancedAttributesFragment
    ...LakehousePermissionsFragment
    channel {
      dbsqlVersion
      name
    }
    budgetPolicy @include(if: $withBudgetPolicy) {
      id
    }
    effectiveBudgetPolicy @include(if: $withBudgetPolicy) {
      id
    }
  }
  ${l}
  ${c}
  ${s}
`,u=(0,r.J1)`
  fragment LakehouseListFragment on Lakehouse {
    ...LakehouseBasicAttributesFragment
    permissions @include(if: $withPermissions)
  }
  ${l}
`,p=(0,r.J1)`
  fragment LakehouseForMutationFragment on Lakehouse {
    ...LakehouseBasicAttributesFragment
    ...LakehouseAdvancedAttributesFragment
    permissions @include(if: $withPermissions)
  }
  ${l}
  ${c}
`,m=(0,r.J1)`
  fragment LakehouseListStateFragment on Lakehouse {
    id
    name
    size
    state
    enableDatabricksCompute
    warehouseType
    health {
      status
      summary
      details
    }
  }
`},962179:(e,t,a)=>{function r(e){return"databricks_internal"===e.type}function n(e){return"databricks_cluster"===e.type||"cluster"===e.type}function i(e){return"statements"in e}a.d(t,{PG:()=>r,n9:()=>i,y0:()=>n})},962664:(e,t,a)=>{a.d(t,{N:()=>u});var r=a(610435),n=a(692738),i=a(768622),o=a(332702),s=a(497895),l=a(161330),c=a(174541),d=a(574132);let u=(0,n.forwardRef)(({item:e,index:t,comboboxState:a,selectedItems:u,selectedMatcher:p,textOverflowMode:m="multiline",isDisabled:g,disabledReason:f,hintContent:h,onClick:b,children:v,...y},E)=>{let{highlightedIndex:_,getItemProps:S,isOpen:T}=a,I=_===t,{theme:C}=(0,s.wn)(),A=p?u.some(t=>p(t,e)):u.includes(e),R=(0,n.useRef)(null);(0,n.useImperativeHandle)(E,()=>R.current);let{onClick:w,...x}=S({item:e,index:t,disabled:g,onMouseUp:e=>{e.stopPropagation(),y.onMouseUp?.(e)},ref:R});return(0,n.useEffect)(()=>{if(T&&_===t&&R.current){let e=R.current.closest("ul");if(!e)return;let t=e.scrollTop,a=e.scrollTop+e.clientHeight,r=R.current.offsetTop,n=R.current.offsetTop+R.current.clientHeight;(r<t||n>a)&&R.current?.scrollIntoView({block:"nearest"})}},[_,t,T,R]),(0,r.Y)("li",{role:"option","aria-selected":A,disabled:g,onClick:e=>{b?.(e),w(e)},css:[(0,c.RB)(C),(0,i.Jq)(C,I,g)],...x,...y,children:(0,r.Y)(o.Sc,{componentId:"codegen_design-system_src_design-system_typeaheadcombobox_typeaheadcomboboxcheckboxitem.tsx_92",disabled:g,isChecked:A,css:(0,c.WS)(C,m),tabIndex:-1,onClick:e=>{e.stopPropagation()},children:(0,r.FD)("label",{children:[g&&f?(0,r.FD)("div",{css:{display:"flex"},children:[(0,r.Y)("div",{children:v}),(0,r.Y)("div",{css:(0,c.eO)(C),children:(0,r.Y)(l.I,{componentId:"typeahead-combobox-checkbox-item-disabled-reason-info-tooltip",content:f})})]}):v,(0,r.Y)(d.y,{disabled:g,children:h})]})})})});u.defaultProps={_type:"TypeaheadComboboxCheckboxItem"}},988947:(e,t,a)=>{a.d(t,{KI:()=>f,N0:()=>o,hD:()=>u,j3:()=>c,kI:()=>l,o9:()=>m,qJ:()=>p,to:()=>d});var r=a(737358),n=a(488655),i=a(169e3);let o="shareName";function s(e){return`/explore/${e}`}function l(e){let t=e?`?isEditOrganizationNameModalOpen=${e}`:"",a=s(i.eR.path);return`${a}${t}`}function c(){return s(i.Xz.path)}function d(e){return(0,r.tW)(s(i.ne.path),{share:encodeURIComponent(e)})}function u(e,t){let a=t?`?${o}=${t}`:"",n=(0,r.tW)(s(i.Do.path),{provider:encodeURIComponent(e)});return`${n}${a}`}function p(e,t){return(0,r.tW)(s(i.uC.path),{provider:encodeURIComponent(e),share:encodeURIComponent(t)})}function m(){return s(i.sf.path)}function g(e){return(0,r.tW)(s(i.VH.path),{recipient:encodeURIComponent(e)})}function f(){let e=(0,n.Zp)();return{navigateToSharedByMe:function(){e(l())},navigateToSharedWithMe:function(){e(c())},navigateToShareDetails:function(t){e(d(t))},getShareDetailsUrl:d,navigateToProviderDetails:function(t){e(u(t))},getProviderUrl:u,navigateToProvidersList:function(){e(c())},navigateToEditDataAssets:function(t){e((0,r.tW)(s(i.Xp.path),{share:encodeURIComponent(t)}))},navigateToEditNotebook:function(t){e((0,r.tW)(s(i.BK.path),{share:encodeURIComponent(t)}))},navigateToRecipient:function(t){e(g(t))},navigateToProviderShareDetails:function(t,a){e(p(t,a))},getRecipientUrl:g,navigateToRecipientsList:function(){e(m())},navigateToShareCreation:function(){e(s(i.O1.path))}}}},998258:(e,t,a)=>{a.d(t,{Gl:()=>p,d5:()=>g,oN:()=>m,s8:()=>u,te:()=>f});var r=a(610435),n=a(79570),i=a(497895),o=a(382908),s=a(445929),l=a(342411),c=a(598296),d=a(797246);function u({children:e,tooltip:t,authorization:a,disabled:i}){let o=f({disabled:i,overrideDisabledTitle:t?.overrideDisabledTitle,defaultTitle:t?.defaultTitle,authorization:a,authzFailureHint:t?.authzFailureHint});if(!o)return(0,r.Y)(r.FK,{children:e});return(0,r.Y)(n.m,{componentId:"authzTooltip",content:o,maxWidth:500,...t,children:e})}function p({authorization:e,hint:t}){let a=(0,l.tz)(),{theme:n}=(0,i.wn)(),c=e?.response?.unmet_conditions||[];if(e?.error)return(0,r.FD)(o.o.Text,{style:{color:n.colors.red400},children:[(0,r.Y)(s.A,{})," ",a.formatMessage({id:"jkpBdL",defaultMessage:"Permission check error:"})," ",e?.error]});if(c.length>0)return(0,r.FD)("div",{css:{display:"flex",flexDirection:"column"},children:[c.map((e,t)=>(0,r.Y)("span",{children:g(a,e)},`unmet-${t}`)),!!t&&(0,r.Y)("span",{children:t})]});return null}function m(e,t){let a=e.formatMessage({id:"jkpBdL",defaultMessage:"Permission check error:"});return`${a} ${t}`}function g(e,t){"CATALOG"===t.securable_type&&(t.securable_type=c.an.CATALOG);let a=t.securable_type;if(t.securable_type){let r=d.DN[t.securable_type];r&&(a=e.formatMessage(r))}switch(t.code){case c.yh.NOT_OWNER:if(t.securable_type)return e.formatMessage({id:"53QS3i",defaultMessage:"Requires ownership of {obType} ‘{name}’"},{obType:a,name:t.securable_full_name});return e.formatMessage({id:"mmc4fF",defaultMessage:"Requires account admin permissions"});case c.yh.REQUIRES_ANY_PRIVILEGE:if(t.securable_type)return e.formatMessage({id:"YFPGhm",defaultMessage:"Requires any permission on {obType} ‘{name}’"},{obType:a,name:t.securable_full_name});return e.formatMessage({id:"g3YHkW",defaultMessage:"Requires any account-level permission"});case c.yh.REQUIRES_ANY_NON_BROWSE_PRIVILEGE:if(t.securable_type)return e.formatMessage({id:"idfXaI",defaultMessage:"Requires any non-BROWSE permission on {obType} ‘{name}’"},{obType:a,name:t.securable_full_name});return e.formatMessage({id:"gxhMir",defaultMessage:"Requires any non-BROWSE permission on this account"});case c.yh.REQUIRES_PRIVILEGES:if(t.securable_type)return e.formatMessage({id:"TCUAHW",defaultMessage:"Requires {numPermissions, plural, one {permission} other {permissions}} {permissions} on {obType} ‘{name}’"},{obType:a,name:t.securable_full_name,numPermissions:t.requires?.length||1,permissions:t.requires?.join(", ")});return e.formatMessage({id:"kOMPWb",defaultMessage:"Requires {numPermissions, plural, one {permission} other {permissions}} {permissions} on this account"},{numPermissions:t.requires?.length||1,permissions:t.requires?.join(", ")});case c.yh.NOT_UPDATABLE_IN_CURRENT_WORKSPACE:return e.formatMessage({id:"RxQ8eY",defaultMessage:"Catalog is designated as read only in this workspace"});default:return e.formatMessage({id:"nk1HDP",defaultMessage:"Authorization failure: {code}"},{code:t.code})}}function f({disabled:e,overrideDisabledTitle:t,defaultTitle:a,authorization:n,authzFailureHint:i}){if(e&&t)return t;if(e)return;if(n?.error)return;if(n?.response?.unmet_conditions)return(0,r.Y)(p,{authorization:n,hint:i});return a}},999157:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",d:"M11.5.94 7.47 4.97l1.06 1.06 2.22-2.22v8.38L8.53 9.97l-1.06 1.06 4.03 4.03 4.03-4.03-1.06-1.06-2.22 2.22V3.81l2.22 2.22 1.06-1.06zM6 3.5H1V5h5zM6 11.5H1V13h5zM1 7.5h5V9H1z"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="SortUnsortedIcon";let l=s}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/54568.ca08fc7f75.chunk.js.map