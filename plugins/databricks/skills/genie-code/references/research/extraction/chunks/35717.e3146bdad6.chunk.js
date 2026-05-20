"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[35717],{7319:(e,t,r)=>{r.d(t,{_:()=>o,h:()=>i});var a=r(692738),n=r(879612);function i(e){if(!e)return!1;return"CONNECTION_HTTP_OAUTH_U2M_MAPPING"===e||"CONNECTION_HTTP_DCR"===e||"CONNECTION_SLACK_OAUTH_U2M_MAPPING"===e}function o(e){let t=(0,n.x5)({isUcEnabled:!0});return(0,a.useMemo)(()=>{if(!e)return!1;if(t.data?.kinds){let r=t.data.kinds.find(t=>t.securable_kind===e);return r?.capabilities?.includes("HAS_GENERIC_ACCESS_TOKEN_FLOW")??!1}return i(e)},[e,t.data])}},21255:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M5.5 6a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="StopCircleIcon";let l=s},26446:(e,t,r)=>{r.d(t,{HT:()=>u,M8:()=>d,Pf:()=>s,bp:()=>l,gb:()=>a,iN:()=>c,pP:()=>n,xB:()=>p});let a=1e3,n={enableAccountGroups:!1,enableAccountServicePrincipals:!1,enableAccountUsers:!1,enableWorkspaceGroups:!1,enableWorkspaceServicePrincipals:!1,enableWorkspaceUsers:!1},i=/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,o={admins:"Admins",users:"All workspace users","account users":"All account users"},s=e=>{if(!e)return e;return o[e]??e},l=e=>{let t=new Map;return e.forEach(e=>{let r=u(e)||e.name;t.has(r)||t.set(r,[]),t.get(r)?.push(e)}),t},c=e=>{switch(e.kind){case"user":return e.fullName;case"serviceprincipal":return e.name;case"group":return e.displayName;default:return""}},u=e=>{switch(e.kind){case"user":case"group":return e.name||"";case"serviceprincipal":return e.applicationId||"";default:return""}},d=({uniqueName:e,id:t,kind:r,displayName:a})=>{switch(r){case"user":return{id:t||"",optionId:`user.${t}`,kind:r,name:e||"",fullName:a||"",title:""};case"serviceprincipal":return{id:t||"",optionId:`serviceprincipal.${t}`,kind:r,name:a||"",applicationId:e||"",title:""};case"group":return{id:t||"",optionId:`group.${t}`,kind:r,name:e||"",displayName:s(e||""),title:""};default:return}};function p(e){return e?i.test(e)?"serviceprincipal":"user":void 0}},30975:(e,t,r)=>{r.d(t,{u:()=>c});var a=r(412836),n=r(927239),i=r(595615),o=r(660618),s=r(733337);function l(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function c(){let{invalidate:e}=(0,i.rA)();return(0,a.n_)(e=>{var t;return(t=function*(){return yield(0,s.nr)(`${o.bY}/catalogs`,{method:"POST",body:JSON.stringify({...e,storage_root:e.storage_root?encodeURI(e.storage_root):void 0})})},function(){var e=this,r=arguments;return new Promise(function(a,n){var i=t.apply(e,r);function o(e){l(i,a,n,o,s,"next",e)}function s(e){l(i,a,n,o,s,"throw",e)}o(void 0)})})()},{onSuccess:()=>{e([n.xQ])}})}},38301:(e,t,r)=>{r.d(t,{$:()=>C,V:()=>A});var a=r(610435);r(692738);var n=r(497895),i=r(382908),o=r(964133),s=r(332702),l=r(339518),c=r(407374),u=r(126927),d=r(342411),p=r(817148),m=r(115957),f=r(819524),g=r(441535),h=r(657825),v=r(217985),b=r(850723),y=r(641760),E=r(633203),S=r(759838);function C({form:e,onChange:t,securableType:r,renderDatabricksManagedStorageUI:I,showHint:T=!0,description:w}){let x=(0,d.tz)(),{theme:_}=(0,n.wn)(),{databricksManagedStorage:R,storage_root:k,storage_sub_path:L}=e.watch(),M=(0,b.O)().data?.region??"",P=!(0,y.sJ)()||(0,h.fo)()===h.hQ.ServerlessOnly,O=A(M)&&((0,g.W)("enable_arclight",null)??(0,g.W)("databricks.fe.accountsui.enableDatabricksManagedStorageUIInCatalogCreation",!1))&&(0,m.zl)(p.g3.CATALOG_DEFAULT_STORAGE)&&P,D=(0,S.Hi)("/explore/locations/create","/"),$=(0,a.Y)(d.sA,{id:"ZqI9g7",defaultMessage:"Catalogs that use default storage are only accessible from this workspace by default. You can grant other workspaces access, but they must use serverless compute to access data in the catalog. <linkText>Learn more.</linkText>",values:{linkText:e=>(0,a.Y)(i.o.Link,{href:f.Ay.DEFAULT_STORAGE,target:"_blank",componentId:"uc_entity.storage_location.default_storage_binding_alert.learn_more_link",children:e})}});return(0,a.FD)("div",{children:[(0,a.Y)(o.D.Label,{htmlFor:"storage_root",children:x.formatMessage({id:"zlkkH+",defaultMessage:"Storage location"})}),(0,a.FD)("div",{css:{display:"flex",flexDirection:"column",gap:_.spacing.md},children:[w&&(0,a.Y)(o.D.Hint,{children:w}),O&&I&&(0,a.Y)(s.Sc,{componentId:"codegen_web-shared_src_metastore_uc_components_storagelocation.tsx_59",isChecked:R,onChange:e=>{t("databricksManagedStorage",e)},children:(0,a.Y)(d.sA,{id:"y/NQmc",defaultMessage:"Use default storage "})}),(0,y.mC)()&&R&&(0,a.Y)(l.F,{componentId:"uc_entity.storage_location.default_storage_binding_alert",message:$,type:"info"}),(!O||!R)&&(0,a.FD)(a.FK,{children:[T&&(0,a.Y)(o.D.Hint,{children:x.formatMessage({id:"yzS8mp",defaultMessage:"Cloud storage location used for managed tables and volumes in this catalog. If not specified, it defaults to the metastore root location."})}),(0,a.FD)("section",{css:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:_.spacing.xs,marginBottom:_.spacing.sm},children:[(0,a.Y)(E.Y,{value:k?.name,onChange:e=>{t("storage_root",e)}}),(0,a.Y)(c.p,{componentId:"codegen_web-shared_src_metastore_uc_components_storagelocation.tsx_104",type:"text",placeholder:x.formatMessage({id:"3vZbc1",defaultMessage:"sub/path"}),value:L,onChange:({target:{value:e}})=>{t("storage_sub_path",e)},"aria-label":x.formatMessage({id:"yVOx68",defaultMessage:"Subpath"})}),(0,a.FD)(v.N,{componentId:"create-external-location-link",target:"_blank",to:D,asTypographyLink:!0,children:[x.formatMessage({id:"tvzOlX",defaultMessage:"Create a new external location"})," ",(0,a.Y)(u.A,{})]})]}),k&&(0,a.Y)("section",{css:{padding:`${_.spacing.sm}px ${_.spacing.md}px`,margin:`${_.spacing.sm}px 0`,background:_.colors.backgroundSecondary,borderRadius:_.legacyBorders.borderRadiusMd},children:(0,a.Y)(i.o.Text,{children:(0,S.xT)(k?.url,L)})})]})]})]})}function A(e){if((0,g.W)("databricks.objectstoragelm.skipArclightAvailableRegionsCheck",!1))return!0;let t=JSON.parse((0,g.W)("databricks.objectstoragelm.arclightAvailableRegions",null));if(null===t)return!0;return t.includes(e)}},39566:(e,t,r)=>{r.d(t,{B8:()=>c,DI:()=>l,RX:()=>d,TW:()=>p,Wd:()=>s,od:()=>u});var a,n,i,o,s=((a={}).SAAS="saas",a.DB="db",a.BRICKSTORE="brickstore",a.COMMUNITY="community",a.FOREIGN_CATALOG="foreign_catalog",a.FILESYSTEM="filesystem",a),l=((n={}).QUERY="query",n.CDC="cdc",n);let c={MYSQL:"MYSQL",POSTGRESQL:"POSTGRESQL",SQLSERVER:"SQLSERVER",SALESFORCE:"SALESFORCE",WORKDAY_RAAS:"WORKDAY_RAAS",GA4_RAW_DATA:"GA4_RAW_DATA",SERVICENOW:"SERVICENOW",MANAGED_POSTGRESQL:"MANAGED_POSTGRESQL",ORACLE:"ORACLE",SHAREPOINT:"SHAREPOINT",DYNAMICS365:"DYNAMICS365",TERADATA:"TERADATA",NETSUITE:"NETSUITE",GENERIC_LAKEFLOW_CONNECT:"GENERIC_LAKEFLOW_CONNECT",JIRA:"JIRA",CONFLUENCE:"CONFLUENCE",GOOGLE_ADS:"GOOGLE_ADS",ZENDESK:"ZENDESK",HUBSPOT:"HUBSPOT",SALESFORCE_MARKETING_CLOUD:"SALESFORCE_MARKETING_CLOUD",META_MARKETING:"META_MARKETING",OUTLOOK:"OUTLOOK",JDBC:"JDBC",FOREIGN_CATALOG:"FOREIGN_CATALOG",REDSHIFT:"REDSHIFT",SNOWFLAKE:"SNOWFLAKE",SYNAPSE:"SYNAPSE",BIGQUERY:"BIGQUERY",TIKTOK_ADS:"TIKTOK_ADS",WORKDAY_HCM:"WORKDAY_HCM",GITHUB:"GITHUB",SMARTSHEET:"SMARTSHEET",VEEVA_VAULT:"VEEVA_VAULT"},u={MYSQL:"MYSQL",POSTGRESQL:"POSTGRESQL",SQLSERVER:"SQLSERVER",SALESFORCE:"SALESFORCE",WORKDAY_RAAS:"WORKDAY_RAAS",GA4_RAW_DATA:"GA4_RAW_DATA",SERVICENOW:"SERVICENOW",MANAGED_POSTGRESQL:"MANAGED_POSTGRESQL",ORACLE:"ORACLE",SHAREPOINT:"SHAREPOINT",DYNAMICS365:"DYNAMICS365",TERADATA:"TERADATA",NETSUITE:"NETSUITE",GENERIC_LAKEFLOW_CONNECT:"GENERIC_LAKEFLOW_CONNECT",JIRA:"JIRA",CONFLUENCE:"CONFLUENCE",GOOGLE_ADS:"GOOGLE_ADS",ZENDESK:"ZENDESK",HUBSPOT:"HUBSPOT",SALESFORCE_MARKETING_CLOUD:"SALESFORCE_MARKETING_CLOUD",WORKDAY_HCM:"WORKDAY_HCM",META_MARKETING:"META_MARKETING",OUTLOOK:"OUTLOOK",JDBC:"JDBC",FOREIGN_CATALOG:"FOREIGN_CATALOG",REDSHIFT:"REDSHIFT",SNOWFLAKE:"SNOWFLAKE",SYNAPSE:"SYNAPSE",BIGQUERY:"BIGQUERY",TIKTOK_ADS:"TIKTOK_ADS",GITHUB:"GITHUB",SMARTSHEET:"SMARTSHEET",VEEVA_VAULT:"VEEVA_VAULT",ZENDESK_COMMUNITY:"ZENDESK_COMMUNITY",GITHUB_COMMUNITY:"GITHUB_COMMUNITY",STRIPE_COMMUNITY:"STRIPE_COMMUNITY",HUBSPOT_COMMUNITY:"HUBSPOT_COMMUNITY",ZOHO_CRM_COMMUNITY:"ZOHO_CRM_COMMUNITY"};var d=((i={}).CONNECTION="connection",i.PIPELINE="pipeline",i.GATEWAY="gateway",i.VALIDATION="validation",i.SOURCE="source",i.DESTINATION="destination",i.SCHEDULE="schedule",i.BRICKSTORE_SOURCE="brickstore_source",i.DESTINATION_WITH_PIPELINE="destination_with_pipeline",i.PIPELINE_CONFIGURATION="pipeline_configuration",i.REPORT="report",i.DATABASE_SETUP="database_setup",i.COMMUNITY_CONFIG="community_config",i.FOREIGN_CATALOG_SOURCE="foreign_catalog_source",i),p=((o={}).PREVIEW="preview",o.COMMUNITY="community",o.NOTEBOOK="notebook",o.MANAGED_INGESTION="mi",o)},40938:(e,t,r)=>{r.d(t,{Y:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.tagpolicy.enableV2TagPolicyAPIs",!1)}},55079:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",d:"M12.5 8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CircleIcon";let l=s},55749:(e,t,r)=>{r.d(t,{F:()=>a,X:()=>n});class a extends Error{constructor(e,t){super(e),this.name="SqlQueryError",this.cause=t}}let n=1e6},74348:(e,t,r)=>{r.d(t,{h:()=>y});var a=r(610435),n=r(692738),i=r(441535),o=r(140718),s=r(342411),l=r(125230),c=r(350318);let u=({value:e,onChange:t,error:r,...n})=>{let i=(0,s.tz)(),u=(0,c.ce)(),{data:d,isLoading:p}=(0,l.Nx)({enabled:u,pageSize:l.Ml});return(0,a.Y)(o.XA,{allowClear:!0,width:"100%",value:e,onChange:e=>t(e.target.value),label:i.formatMessage({id:"Dh2KGp",defaultMessage:"Project"}),placeholder:i.formatMessage({id:"aerQeA",defaultMessage:"Select project"}),contentProps:{matchTriggerWidth:!0,loading:u&&p},validationState:r?"error":void 0,...n,children:d?.map(e=>(0,a.Y)(o.wS,{value:e.id,children:(0,a.Y)("span",{children:e.name})},e.id))})};var d=r(466213),p=r(497895),m=r(996648),f=r(927802),g=r(684944),h=r(461815),v=r(768622);let b=({id:e,onChange:t,error:r})=>{let i=(0,s.tz)(),{theme:o}=(0,p.wn)(),[u,b]=(0,d.d7)("",300),y=(0,c.ce)(),{data:E,isLoading:S}=(0,l.Nx)({enabled:y,pageSize:l.Ml,filter:u}),C=(0,n.useCallback)(e=>{t(e?.id)},[t]),A=(0,m.SY)({componentId:"web-shared.brickstore.DatabaseProjectSelectV2",allItems:E??[],items:E??[],setItems:()=>{},itemToString:e=>e?.name??"",formOnChange:C});(0,n.useEffect)(()=>{b(A.inputValue.trim())},[b,A.inputValue]);let I={"&.error":{borderColor:`${o.colors.red500} !important`}};return(0,a.FD)(f.h,{id:e,multiSelect:!1,comboboxState:A,children:[(0,a.Y)(g.$,{formOnChange:C,placeholder:i.formatMessage({id:"aerQeA",defaultMessage:"Select project"}),className:r?"error":"",dangerouslyAppendEmotionCSS:I,comboboxState:A}),(0,a.Y)(h.i,{width:300,loading:y&&S,comboboxState:A,children:E?.map((e,t)=>(0,a.Y)(v.bb,{item:e,index:t,comboboxState:A,children:e.name},`project-${e.id}`))})]})},y=e=>{let t=(0,n.useMemo)(()=>(0,i.W)("databricks.fe.lakebase.useDatabaseProjectSelectV2",!1)?b:u,[]);return(0,a.Y)(t,{...e})}},75036:(e,t,r)=>{r.d(t,{e:()=>o,s:()=>i});var a,n=r(696514),i=((a={}).DONE="done",a.CANCELED="canceled",a);let o=(0,n.fH)("Filebrowser::SelectFolderNode")},84008:(e,t,r)=>{r.d(t,{n:()=>p});var a=r(610435),n=r(956935),i=r(783772),o=r.n(i),s=r(692738),l=r(325056),c=r(114826),u=r(497895),d=r(382908);let p=(0,s.forwardRef)(function({children:e,className:t,ellipsis:r=!1,multiline:i=!1,align:p="left",style:m,wrapContent:f=!0,...g},h){let{size:v,grid:b}=(0,s.useContext)(l.G),{classNamePrefix:y}=(0,u.wn)(),E=(0,n.AH)({[`& > .${y}-typography > a.${y}-typography-ellipsis`]:{display:"block"}}),S="md";"small"===v&&(S="sm");let C=!0===f?(0,a.Y)(d.o.Text,{ellipsis:!i,size:S,title:!i&&"string"==typeof e&&e||void 0,css:{"&:has(> button)":{overflow:"visible"}},children:e}):e;return(0,a.Y)("div",{...g,role:"cell",style:{textAlign:p,...m},ref:h,css:[b?void 0:c.PV.cell,E],className:o()(b&&c.lH.cell,t),children:C})})},90710:(e,t,r)=>{r.d(t,{Y:()=>d});var a=r(610435),n=r(956935),i=r(692738),o=r(497895),s=r(861166),l=r(997791),c=r(639712),u=r(123252);let d=({breadcrumbs:e,title:t,titleAddOns:r,dangerouslyAppendEmotionCSS:d,buttons:p,children:m,titleElementLevel:f,allowTitleWrap:g=!0,...h})=>{let v,{classNamePrefix:b,theme:y}=(0,o.wn)(),E=Array.isArray(p)?p:p?[p]:[],S={titleWrapper:(0,n.AH)({display:"flex",alignItems:"flex-start",justifyContent:"space-between",flexWrap:g?"wrap":"nowrap",rowGap:y.spacing.sm,...0===E.length&&{paddingTop:e?0:y.spacing.xs/2,paddingBottom:y.spacing.xs/2}}),breadcrumbWrapper:(0,n.AH)({lineHeight:y.typography.lineHeightBase,marginBottom:y.spacing.xs}),title:(0,n.AH)({marginTop:0,marginBottom:"0 !important",alignSelf:"stretch",...!g&&{flex:1,minWidth:0}}),titleIfOtherElementsPresent:(0,n.AH)({marginTop:2}),buttonContainer:(0,n.AH)({marginLeft:8}),titleAddOnsWrapper:(0,n.AH)({display:"inline-flex",verticalAlign:"middle",alignItems:"center",flexWrap:"wrap",marginLeft:y.spacing.sm,gap:y.spacing.xs})};return(0,a.FD)("div",{...(0,u.VG)(),css:[(v={[`.${b}-breadcrumb`]:{lineHeight:y.typography.lineHeightBase}},(0,n.AH)((0,c.dg)(v))),d],...h,children:[e&&(0,a.Y)("div",{css:S.breadcrumbWrapper,children:e}),(0,a.FD)("div",{css:S.titleWrapper,children:[(0,a.FD)(l.h,{level:2,elementLevel:f,css:[S.title,(p||e)&&S.titleIfOtherElementsPresent],children:[t,r&&(0,a.Y)("span",{css:S.titleAddOnsWrapper,children:r})]}),p&&(0,a.Y)("div",{css:S.buttonContainer,children:(0,a.Y)(s.$,{dangerouslySetAntdProps:{wrap:!0},size:8,children:E.filter(Boolean).map((e,t)=>{let r=`dubois-header-button-${t}`;return i.isValidElement(e)?i.cloneElement(e,{key:e.key||r}):(0,a.Y)(i.Fragment,{children:e},r)})})})]})]})}},114826:(e,t,r)=>{r.d(t,{Ay:()=>f,M0:()=>m,PV:()=>u,TJ:()=>d,lH:()=>c,yA:()=>p});var a=r(956935),n=r(469723),i=r.n(n),o=r(322560),s=r.n(o);function l(){return s()(20,()=>i()(35).toString(36)).join("")}let c={cell:`js--ds-table-cell-${l()}`,header:`js--ds-table-header-${l()}`,row:`js--ds-table-row-${l()}`},u={cell:(0,a.AH)({display:"inline-grid",position:"relative",flex:1,boxSizing:"border-box",paddingLeft:"var(--table-spacing-sm)",paddingRight:"var(--table-spacing-sm)",wordBreak:"break-word",overflow:"hidden","& .anticon":{verticalAlign:"text-bottom"}}),header:(0,a.AH)({fontWeight:"bold",alignItems:"flex-end",display:"flex",overflow:"hidden","&[aria-sort]":{cursor:"pointer",userSelect:"none"},".table-header-text":{color:"var(--table-header-text-color)"},".table-header-icon-container":{color:"var(--table-header-sort-icon-color)",display:"none"},"&[aria-sort]:hover":{".table-header-icon-container, .table-header-text":{color:"var(--table-header-focus-color)"}},"&[aria-sort]:active":{".table-header-icon-container, .table-header-text":{color:"var(--table-header-active-color)"}},'&:hover, &[aria-sort="ascending"], &[aria-sort="descending"]':{".table-header-icon-container":{display:"inline"}}}),row:(0,a.AH)({display:"flex","&.table-isHeader":{"> *":{backgroundColor:"var(--table-header-background-color)"},".table-isScrollable &":{position:"sticky",top:0,zIndex:1}},'.table-row-select-cell input[type="checkbox"] ~ *':{opacity:"var(--row-checkbox-opacity, 0)"},"&:not(.table-row-isGrid)&:hover":{"&:not(.table-isHeader)":{backgroundColor:"var(--table-row-hover)"},'.table-row-select-cell input[type="checkbox"] ~ *':{opacity:1}},'.table-row-select-cell input[type="checkbox"]:focus ~ *':{opacity:1},"> *":{paddingTop:"var(--table-row-vertical-padding)",paddingBottom:"var(--table-row-vertical-padding)",borderBottom:"1px solid",borderColor:"var(--table-separator-color)"},"&.table-row-isGrid > *":{borderRight:"1px solid",borderColor:"var(--table-separator-color)"},"&.table-row-isGrid > :first-of-type":{borderLeft:"1px solid",borderColor:"var(--table-separator-color)"},"&.table-row-isGrid.table-isHeader:first-of-type > *":{borderTop:"1px solid",borderColor:"var(--table-separator-color)"}})},d=`hide-icon-button-${l()}`,p=`skip-hide-icon-button-${l()}`,m=(0,a.AH)({[`.${d} button.${p}`]:{opacity:"1 !important",transition:"opacity 0.1s ease !important"},[`.${d} button:has(> span.anticon[role="img"]:only-child),
    .${d} button:has(> i.fa:only-child),
    .${d} a:has(> span.anticon[role="img"]:only-child),
    .${d} a:has(> i.fa:only-child)`]:{opacity:0,transition:"opacity 0.1s ease !important"},[`.${d} button:focus-visible:has(> span.anticon[role="img"]:only-child),
    .${d} button:focus-visible:has(> i.fa:only-child),
    .${d} a:focus-visible:has(> span.anticon[role="img"]:only-child),
    .${d} a:focus-visible:has(> i.fa:only-child)`]:{outlineStyle:"solid !important"},[`&:hover .${d} button:has(> span.anticon[role="img"]:only-child),
    .${d} button:focus-visible:has(> span.anticon[role="img"]:only-child),
    &:hover .${d} button:has(> i.fa:only-child),
    .${d} button:focus-visible:has(> i.fa:only-child),
    &:hover .${d} a:has(> span.anticon[role="img"]:only-child),
    .${d} a:focus-visible:has(> span.anticon[role="img"]:only-child),
    &:hover .${d} a:has(> i.fa:only-child),
    .${d} a:focus-visible:has(> i.fa:only-child)
    .${d} div[aria-expanded="true"] > button:has(span.anticon[role="img"]:only-child),
    .${d} div[aria-expanded="true"] > button:has(i.fa:only-child),
    .${d} button[aria-expanded="true"]:has(span.anticon[role="img"]:only-child),
    .${d} button[aria-expanded="true"]:has(i.fa:only-child),`]:{opacity:1}}),f={tableWrapper:(0,a.AH)({"&.table-isScrollable":{overflow:"auto"},display:"flex",flexDirection:"column",height:"100%",[`.${c.cell}`]:u.cell,[`.${c.header}`]:u.header,[`.${c.row}`]:u.row}),table:(0,a.AH)({".table-isScrollable &":{overflow:"auto"}}),headerButtonTarget:(0,a.AH)({alignItems:"flex-end",display:"flex",overflow:"hidden",width:"100%",justifyContent:"inherit","&:focus":{".table-header-text":{color:"var(--table-header-focus-color)"},".table-header-icon-container":{color:"var(--table-header-focus-color)",display:"inline"}},"&:active":{".table-header-icon-container, .table-header-text":{color:"var(--table-header-active-color)"}}}),sortHeaderIconOnRight:(0,a.AH)({marginLeft:"var(--table-spacing-xs)"}),sortHeaderIconOnLeft:(0,a.AH)({marginRight:"var(--table-spacing-xs)"}),checkboxCell:(0,a.AH)({display:"flex",alignItems:"center",flex:0,paddingLeft:"var(--table-spacing-sm)",paddingTop:0,paddingBottom:0,minWidth:"var(--table-spacing-md)",maxWidth:"var(--table-spacing-md)",boxSizing:"content-box !important",overflow:"hidden"}),resizeHandleContainer:(0,a.AH)({position:"absolute",right:-3,top:"var(--table-spacing-sm)",bottom:"var(--table-spacing-sm)",width:"var(--table-spacing-sm)",display:"flex",justifyContent:"center",cursor:"col-resize",userSelect:"none",touchAction:"none",zIndex:1}),resizeHandle:(0,a.AH)({width:1,background:"var(--table-resize-handle-color)"}),paginationContainer:(0,a.AH)({display:"flex",justifyContent:"flex-end",paddingTop:"var(--table-spacing-sm)",paddingBottom:"var(--table-spacing-sm)"})}},140718:(e,t,r)=>{r.d(t,{XA:()=>y,lQ:()=>C,wS:()=>S});var a=r(610435),n=r(692738),i=r(46e3),o=r(806773),s=r(370427),l=r(907046),c=r(99442),u=r(224098),d=r(545251),p=r(53333),m=r(661748);let f=(0,n.createContext)(void 0),g=[u.s7.OnValueChange,u.s7.OnView],h=[u.s7.OnValueChange],v=(e,t)=>{for(let r of n.Children.toArray(e))if(n.isValidElement(r)){if(r.type===S&&r.props.value===t)return r;if(r.props.children){let e=v(r.props.children,t);if(e)return e}}},b=(e,t)=>{let r=v(e,t);if(n.isValidElement(r))return r.props.children;return""},y=(0,n.forwardRef)(({defaultValue:e,name:t,placeholder:r,children:s,contentProps:l,onChange:d,onOpenChange:v,id:y,label:S,value:C,validationState:A,forceCloseOnEscape:I,componentId:T,analyticsEvents:w,valueHasNoPii:x,..._},R)=>{let k=(0,m.W)("databricks.fe.observability.defaultComponentView.simpleSelect",!1),[L]=(0,n.useState)(()=>{if(C)return b(s,C);return""}),M=(0,n.useRef)(null);(0,n.useImperativeHandle)(R,()=>M.current,[]);let P=(0,n.useRef)(C),[O,D]=(0,n.useState)(C),[$,N]=(0,n.useState)(L),Y=void 0!==C,U=(0,n.useMemo)(()=>w??(k?g:h),[w,k]),F=(0,u.ei)({componentType:u.v_.SimpleSelect,componentId:T,analyticsEvents:U,valueHasNoPii:x}),{elementRef:H}=(0,p.z)({onView:F.onView,value:C??e});(0,n.useEffect)(()=>{void 0!==C&&C!==P.current&&(D(C),P.current=C)},[C]),(0,n.useEffect)(()=>{if(Y)return;let t=M.current,r=e||t?.value||"";D(r),P.current=r},[Y,e,C]),(0,n.useEffect)(()=>{N(b(s,O||""))},[O,s]);let G=(0,n.useCallback)(e=>{F.onValueChange(e),M.current?.setAttribute("value",e||""),D(e),N(b(s,e)),d&&d({target:{name:t,type:"select",value:e},type:"change"})},[F,s,d,t]),B=(0,n.useMemo)(()=>({value:O,onChange:G}),[O,G]),W=(0,n.useCallback)(()=>{G("")},[G]);return(0,a.Y)(f.Provider,{value:B,children:(0,a.Y)(i.l,{componentId:void 0,value:O,placeholder:r,label:S??_["aria-label"],id:y,children:(0,a.FD)(E,{onOpenChange:v,children:[(0,a.Y)(c.b,{ref:H,..._,validationState:A,onClear:W,id:y,value:O,...F.dataComponentProps,children:$||r}),(0,a.Y)("input",{type:"hidden",ref:M}),(0,a.Y)(o.g,{forceCloseOnEscape:I,...l,children:s})]})})})}),E=({children:e,onOpenChange:t})=>{let{isOpen:r}=(0,d.w)();return(0,n.useEffect)(()=>{t&&t(!!r)},[r,t]),(0,a.Y)(a.FK,{children:e})},S=(0,n.forwardRef)(({value:e,children:t,...r},i)=>{let o=(0,n.useContext)(f);if(!o)throw Error("SimpleSelectOption must be used within a SimpleSelect");let{onChange:l}=o,c=(0,n.useCallback)(({value:e})=>{l(e)},[l]);return(0,a.Y)(s.O,{...r,ref:i,value:e,onChange:c,children:t})}),C=({children:e,label:t,...r})=>{if(!(0,n.useContext)(f))throw Error("SimpleSelectOptionGroup must be used within a SimpleSelect");return(0,a.Y)(l.n,{...r,name:t,children:e})}},150190:(e,t,r)=>{r.d(t,{H:()=>s});var a=r(160603),n=r(733845),i=r(302118);function o(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function s(e){let t=(0,n.O)();return(0,a.useQuery)(["get_user_info"],()=>{var e;return(e=function*(){if(t)return yield i.k.getUserInfo();return{is_metastore_admin:!1}},function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function s(e){o(i,a,n,s,l,"next",e)}function l(e){o(i,a,n,s,l,"throw",e)}s(void 0)})})()},e)}},159150:(e,t,r)=>{r.d(t,{w:()=>a});function a(e){let t=new Map;return e.forEach(({column_name:e,data_type:r})=>{t.set(e,{name:e,type:r?.toLowerCase(),partition:!1,fields:[],comment:void 0,originalColumnData:{name:e,type_text:r?.toLowerCase(),comment:""}})}),e.forEach(({column_name:e,parent_column:r})=>{if(r&&""!==r){let a=t.get(r),n=t.get(e);a&&n&&a?.fields?.push(n)}}),{columns:Array.from(t.values()).filter(t=>!e.some(e=>e.column_name===t.name&&""!==e.parent_column)),metadata:{}}}},161330:(e,t,r)=>{r.d(t,{I:()=>u});var a=r(610435),n=r(91958),i=r.n(n),o=r(79570),s=r(497895),l=r(201828);let c=i()(e=>({color:e.colors.textSecondary})),u=({content:e,iconTitle:t="More information",...r})=>{let{theme:n}=(0,s.wn)();return(0,a.Y)(o.m,{content:e,...r,children:(0,a.Y)(l.A,{tabIndex:0,"aria-hidden":"false","aria-label":t,alt:t,css:c(n)})})}},165091:(e,t,r)=>{r.d(t,{q:()=>o});var a=r(412836),n=r(302118);function i(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function o(){return(0,a.n_)(({catalog:e,payload:t})=>{var r;return(r=function*(){return yield n.k.updateCatalog(e,t)},function(){var e=this,t=arguments;return new Promise(function(a,n){var o=r.apply(e,t);function s(e){i(o,a,n,s,l,"next",e)}function l(e){i(o,a,n,s,l,"throw",e)}s(void 0)})})()})}},192464:(e,t,r)=>{r.d(t,{Os:()=>u,TT:()=>d,T_:()=>p,mr:()=>c});var a=r(159150),n=r(988512),i=r(55749),o=r(103341);function s(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function l(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){s(i,a,n,o,l,"next",e)}function l(e){s(i,a,n,o,l,"throw",e)}o(void 0)})}}function c(e){return l(function*(e,t=i.X){let r=(0,n.y)(e).generateGetPostgresDatabasesSql();return(0,o.M)({dataSource:e,queryString:r,queryName:"get_postgres_databases",options:{limit:t}})}).apply(this,arguments)}function u(e,t,r){return l(function*(){let a=(0,n.y)(t).generateGetPostgresSchemasSql(e),s={limit:r||i.X,catalog:e};if(t?.disableSystemQueries)return[];return yield(0,o.M)({dataSource:t,queryString:a,queryName:"get_postgres_schemas",options:s})})()}function d(e,t,r,a,s,c){return l(function*(){let l=(0,n.y)(r).generateGetPostgresTablesSql(e,t),u={limit:a||i.X,errorFilters:s,ignoreError:c,catalog:e};if(r?.disableSystemQueries)return[];return yield(0,o.M)({dataSource:r,queryString:l,queryName:"get_postgres_tables",options:u})})()}function p(e){return l(function*({dataSource:e,catalog:t,schema:r,table:i,errorFilters:s,ignoreError:l,ignoreTableNotFound:c=!1}){try{let c=(0,n.y)(e).generateGetPostgresCompositeTypeSql(r,i),u=yield(0,o.M)({dataSource:e,queryString:c,queryName:"get_postgres_columns",options:{errorFilters:s,ignoreError:l,catalog:t}});return(0,a.w)(u)}catch(t){let e=t?.message??"";if(c&&[/TABLE_OR_VIEW_NOT_FOUND/].some(t=>t.test(e)))return{metadata:{},columns:[]};throw t}}).apply(this,arguments)}},203368:(e,t,r)=>{r.d(t,{m:()=>a});function a(e){if(Array.isArray(e))return{actions:e.reduce((e,t)=>(e[JSON.stringify(t)]=t,e),{})};return e}},210556:(e,t,r)=>{r.d(t,{f:()=>o});var a=r(610435),n=r(906169),i=r(429608);let o=({dangerouslySetAntdProps:e,...t})=>(0,a.Y)(i.wC,{children:(0,a.Y)(n.A,{...t,...e})})},212536:(e,t,r)=>{r.d(t,{_:()=>C});var a=r(610435),n=r(956935),i=r(813342),o=r.n(i),s=r(692738),l=r(284260),c=r(497895),u=r(996648),d=r(927802),p=r(684944),m=r(461815),f=r(768622),g=r(639712),h=r(382908),v=r(804723),b=r(79128),y=r(194901),E=r(217985);function S(e,t){return e.name.includes(t)}function C({id:e="uc-selector",componentId:t="web-shared_uc-selector",placeholder:r,allItems:i,loading:b,value:y,onChange:I,icon:T,disabled:w,emptyText:x,width:_=240,getFooter:R,matchTriggerWidth:k=!1,validationState:L,getItemState:M,optionHintContentField:P,filterFn:O,optionAddon:D,maxHeight:$,selectAllLabel:N,overflowEllipsis:Y=!1,getOpenInNewTabURL:U}){let[F,H]=s.useState(i),G=(0,s.useRef)(),{theme:B}=(0,c.wn)();(0,s.useEffect)(()=>{b||H(i)},[i,b]);let W=(0,s.useMemo)(()=>N&&y===N?{name:N}:i.find(e=>e.name===y),[i,N,y]),q=(0,u.SY)({componentId:t,allItems:i,items:F,setItems:H,itemToString:e=>e.name,matcher:O||S,initialInputValue:y,formValue:W,onStateChange({selectedItem:e,type:t}){switch(t){case u.HM.ItemClick:case u.HM.InputKeyDownEnter:e?.name&&I(e.name);break;case u.HM.FunctionReset:I(void 0)}}}),z=R?.({hideMenuOnClick:q.closeMenu,onAddItem:q.selectItem}),V=N?(0,a.Y)(A,{componentId:"uc-selector-select-all-entity-button",isChecked:W?.name===N,onClick:()=>{q.selectItem({name:N}),q.closeMenu(),I(N)},children:N}):void 0,Q=(0,l.z)({size:F.length,parentRef:G,estimateSize:(0,s.useCallback)(()=>P?48:B.general.heightSm,[P,B.general.heightSm]),overscan:30});return(0,a.FD)(d.h,{comboboxState:q,style:{width:_},children:[(0,a.Y)(p.$,{id:e,placeholder:r,comboboxState:q,clearInputValueOnFocus:!0,prefix:T,disabled:w,"data-testid":`uc-selector-${e}`,validationState:L,allowClear:!N||W?.name!==N,dangerouslyAppendEmotionCSS:Y?(0,n.AH)({input:{textOverflow:"ellipsis !important",whiteSpace:"nowrap"}}):void 0}),(0,a.FD)(m.i,{loading:b,comboboxState:q,width:k?void 0:240,maxHeight:$??5.5*B.general.heightSm,virtualizerRef:G,listWrapperHeight:Q.totalSize,emptyText:x,matchTriggerWidth:k,children:[Q.virtualItems.map(e=>{let t=F[e.index],{disableReason:r}=M?.(t)??{};return(0,a.Y)(f.bb,{item:t,index:e.index,comboboxState:q,isDisabled:void 0!==r,disabledReason:r,style:(0,g.D7)(e),hintContent:P&&t[P],title:t.name,css:{label:{textOverflow:"ellipsis",whiteSpace:"nowrap",width:"100%"},'[data-component-id="uc-selector.open-in-new-tab.link"]':{opacity:0},'&:hover [data-component-id="uc-selector.open-in-new-tab.link"]':{opacity:1}},children:(0,a.FD)("div",{css:{display:"flex",alignItems:"center",flexWrap:"nowrap"},children:[D&&D(t),(0,a.Y)(h.o.Text,{ellipsis:!0,css:{marginBottom:void 0!==r?B.spacing.xs:void 0,color:void 0!==r?B.colors.actionDisabledText+"!important":void 0},children:t.name}),U&&void 0===r&&(0,a.Y)(E.N,{asTypographyLink:!0,to:U(t),openInNewTab:!0,componentId:"uc-selector.open-in-new-tab.link",css:{marginLeft:"auto"}})]})},`item-${t.name}`)}),(!o()(z)||!o()(V))&&(0,a.FD)(v.S,{children:[!o()(V)&&V,!o()(z)&&z]})]})]})}let A=({isChecked:e,children:t,...r})=>{let{theme:i}=(0,c.wn)(),o={...(0,n.AH)((0,g.dg)({border:"none",width:"100%","span:not(.anticon)":{marginLeft:i.spacing.xs},span:{color:`${i.colors.textPrimary} !important`}}))};return(0,a.Y)(b.$n,{...r,type:"tertiary",className:"combobox-footer-add-button all-entity-button",icon:e?(0,a.Y)(y.A,{}):(0,a.Y)("div",{style:{width:i.general.iconFontSize}}),css:o,children:t})}},217002:(e,t,r)=>{r.d(t,{i:()=>a});let a=e=>["get_storage_credential",e]},242995:(e,t,r)=>{r.d(t,{h:()=>o,j:()=>i});var a,n=r(696514),i=((a={}).DONE="done",a.CANCELED="canceled",a);let o=(0,n.fH)("Filebrowser::SaveAsFolderNode")},267953:(e,t,r)=>{r.r(t),r.d(t,{RouteComponent:()=>x});var a,n=r(610435),i=r(956935),o=r(672316),s=r(814510),l=r(90710),c=r(764236),u=r(647660),d=r(382908),p=r(497895),m=r(79570),f=r(201828),g=r(342411),h=r(649934),v=r(819524),b=r(641760),y=r(217985),E=r(648782),S=r(492814),C=r(279402),A=r(818845),I=((a=I||{}).locations="locations",a.credentials="credentials",a.connections="connections",a["external-metadata"]="external-metadata",a);let T=(0,i.AH)({display:"flex",alignItems:"center"});function w(){let e=(0,g.tz)(),{showConnections:t,showLocations:r,showCredentials:a,showExternalMetadataList:i}=(0,S.E)(),{activeSection:o}=(0,C.useDataExplorerContext)(),{canViewLocation:p,canViewConnection:m,canViewCredential:f,canViewExternalMetadata:h}=(0,A.d)(),I=(0,n.Y)(s.Q,{children:(0,n.Y)(s.Q.Item,{children:(0,n.Y)(y.N,{componentId:"codegen_redash_app_src_app_pages_data_externaldatatabs.tsx_21",to:"/explore/data",asTypographyLink:!0,children:e.formatMessage({id:"bORu52",defaultMessage:"Catalog Explorer"})})})});return(0,n.FD)(n.FK,{children:[(0,n.Y)(l.Y,{title:e.formatMessage({id:"Au41FF",defaultMessage:"External Data"}),breadcrumbs:I}),(0,n.Y)(c.h,{shrinks:!1}),(0,n.FD)(u.Root,{componentId:"external-data-tabs",value:o,onValueChange:e=>(function(e){switch(e){case"locations":r();break;case"credentials":a();break;case"connections":t();break;case"external-metadata":i()}})(e),children:[(0,n.FD)(u.List,{children:[p&&(0,n.Y)(u.Trigger,{value:"locations",children:(0,n.FD)("div",{css:T,children:[e.formatMessage(R.externalLocationsTitle),(0,n.Y)(_,{disableHoverableContent:!1,content:e.formatMessage(R.externalLocations,{linkText:e=>(0,n.Y)(d.o.Link,{openInNewTab:!0,href:v.Ay.CLOUD_OBJECT_STORAGE,componentId:"external-data-tabs_external-location-tab-learn-more-link",children:e})})})]})}),f&&(0,n.Y)(u.Trigger,{value:"credentials",children:(0,n.Y)("div",{css:T,children:(0,b.NG)()?(0,n.FD)(n.FK,{children:[e.formatMessage(R.credentialsTitle),(0,n.Y)(_,{content:e.formatMessage(R.credentials)})]}):(0,n.FD)(n.FK,{children:[e.formatMessage(R.storageCredentialsTitle),(0,n.Y)(_,{disableHoverableContent:!1,content:e.formatMessage(R.storageCredentials,{linkText:e=>(0,n.Y)(d.o.Link,{openInNewTab:!0,href:v.Ay.CLOUD_OBJECT_STORAGE,componentId:"external-data-tabs_storage-credential-tab-learn-more-link",children:e})})})]})})}),m&&(0,n.Y)(u.Trigger,{value:"connections",children:(0,n.FD)("div",{css:T,children:[e.formatMessage(R.connectionsTitle),(0,n.Y)(_,{disableHoverableContent:!1,content:e.formatMessage(R.connections,{linkText:e=>(0,n.Y)(d.o.Link,{openInNewTab:!0,href:v.Ay.QUERY_FEDERATION,componentId:"external-data-tabs_connections-tab-learn-more-link",children:e})})})]})}),h&&(0,n.Y)(u.Trigger,{value:"external-metadata",children:(0,n.FD)("div",{css:T,children:[e.formatMessage(R.externalMetadataTitle),(0,n.Y)(_,{disableHoverableContent:!1,content:e.formatMessage(R.externalMetadata,{linkText:e=>(0,n.Y)(d.o.Link,{openInNewTab:!0,href:v.Ay.QUERY_FEDERATION,componentId:"external-data-tabs_external-metadata-tab-learn-more-link",children:e})})})]})})]}),(0,n.Y)(u.Content,{value:o,children:(0,n.Y)(E.sv,{})})]})]})}function x(){return(0,n.Y)(o.I,{requestKey:["external-data-page"],request:[h.E.CreateServiceCredential(),h.E.CreateStorageCredential(),h.E.CreateConnection(),h.E.CreateExternalMetadata()],children:(0,n.Y)(w,{})})}function _({content:e,disableHoverableContent:t}){let{theme:r}=(0,p.wn)();return(0,n.Y)("div",{css:{marginLeft:r.spacing.xs,display:"flex",alignItems:"center"},children:(0,n.Y)(m.m,{componentId:"external-data-tabs_info-tooltip",content:e,disableHoverableContent:t,children:(0,n.Y)(f.A,{"aria-hidden":!1,"data-testid":"info-tooltip"})})})}let R=(0,g.YK)({externalLocations:{id:"SaVxM6",defaultMessage:"An external location is a cloud storage url (and paired credential) that allows access to data stored on your cloud tenant. <linkText>Learn more</linkText>"},storageCredentials:{id:"BRrdIp",defaultMessage:"A storage credential represents an authentication and authorization mechanism for accessing data stored on your cloud tenant. <linkText>Learn more</linkText>"},credentials:{id:"lSeUdY",defaultMessage:"A credential represents an authentication and authorization mechanism for accessing stored data or services in your cloud tenant."},connections:{id:"FPjMvZ",defaultMessage:"A connection specifies a path and credentials for accessing an external database system. <linkText>Learn more</linkText>"},connectionsTitle:{id:"3BuXBU",defaultMessage:"Connections"},storageCredentialsTitle:{id:"9ASUqu",defaultMessage:"Storage Credentials"},credentialsTitle:{id:"qMgtA5",defaultMessage:"Credentials"},externalLocationsTitle:{id:"xIe+Z9",defaultMessage:"External Locations"},externalMetadataTitle:{id:"hCy//O",defaultMessage:"External Metadata"},externalMetadata:{id:"Tpw1Tv",defaultMessage:"External metadata is a collection of external entity metadata added to lineage. <linkText>Learn more</linkText>"}})},282109:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1 3.5h10V2H1zm0 8h4V10H1zm7-4H1V6h7zm3.5 7.56 4.03-4.03-1.06-1.06-2.22 2.22V6h-1.5v6.19L8.53 9.97l-1.06 1.06z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="SortDescendingIcon";let l=s},283009:(e,t,r)=>{r.d(t,{a:()=>s});var a=r(610435);r(692738);var n=r(79128),i=r(79570),o=r(180864);function s({buttonProps:e,componentId:t,copyText:r,copyTooltip:l,isInsideInputGroup:c=!1,onCopy:u,tooltipProps:d}){let{actionIcon:p,copy:m,handleTooltipOpenChange:f,tooltipOpen:g,tooltipMessage:h}=(0,o.L)(r,l,u),v=(0,a.Y)(n.$n,{"aria-label":h,componentId:t,icon:p,onClick:m,size:"small",...e}),b=(0,a.Y)(n.$n,{"aria-label":h,componentId:t,onClick:m,...e,children:p});return(0,a.Y)(i.m,{componentId:`${t}-tooltip`,content:h,onOpenChange:f,open:g,...d,children:c?b:v})}},290766:(e,t,r)=>{r.d(t,{T:()=>l});var a=r(65061),n=r(960718),i=r(141078);let o=(0,i.J1)`
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
`,l=(e,t)=>(0,a.IT)(t?s:o,{fetchPolicy:"cache-and-network",...e})},293418:(e,t,r)=>{r.d(t,{H:()=>d,g:()=>u});var a=r(610435),n=r(783772),i=r.n(n),o=r(692738),s=r(325056),l=r(114826),c=r(497895);let u=(0,o.createContext)({isHeader:!1}),d=(0,o.forwardRef)(function({children:e,className:t,style:r,isHeader:n=!1,skipIconHiding:d=!1,verticalAlignment:p,...m},f){let g,{size:h,grid:v}=(0,o.useContext)(s.G),{theme:b}=(0,c.wn)();return g=n&&"default"===h?b.spacing.sm:"default"===h?6:b.spacing.xs,(0,a.Y)(u.Provider,{value:(0,o.useMemo)(()=>({isHeader:n}),[n]),children:(0,a.Y)("div",{...m,ref:f,role:"row",style:{...r,"--table-row-vertical-padding":`${g}px`},css:[!n&&!d&&l.M0,!v&&l.PV.row],className:i()(t,v&&l.lH.row,{"table-isHeader":n,"table-row-isGrid":v}),children:e})})})},295423:(e,t,r)=>{r.d(t,{f:()=>c});var a=r(692738),n=r(671244),i=r(653542),o=r(49586),s=r(209908);let l=50,c=({enableAccountGroups:e=!1,enableAccountServicePrincipals:t=!1,enableAccountUsers:r=!1,enableWorkspaceGroups:c=!0,enableWorkspaceServicePrincipals:u=!0,enableWorkspaceUsers:d=!0,filterText:p="",principalIdsForFiltering:m=[],principalUniqueNamesForFiltering:f=[],limit:g=l,useLite:h,skip:v=!1,isCache:b=!1}={})=>{let y=(0,s.VM)({ids:m,uniqueNames:f}),E=(0,s.L5)({ids:m,uniqueNames:f}),{subjects:S,isLoading:C,error:A,hasNextPage:I}=(0,o.zo)({source:"account",filter:p,filterPredicate:y,first:g,skip:!r||v,useLite:h,isCache:b}),{subjects:T,isLoading:w,error:x,hasNextPage:_}=(0,n.Bi)({source:"account",filter:p,filterPredicate:E,first:g,skip:!e||v,useLite:h,isCache:b}),{subjects:R,isLoading:k,error:L,hasNextPage:M}=(0,i.Q_)({source:"account",filter:p,filterPredicate:y,first:g,skip:!t||v,useLite:h,isCache:b}),{subjects:P,isLoading:O,error:D,hasNextPage:$}=(0,o.zo)({source:"workspace",filter:p,filterPredicate:y,first:g,skip:!d||v,useLite:h,isCache:b}),{subjects:N,isLoading:Y,error:U,hasNextPage:F}=(0,n.Bi)({source:"workspace",filter:p,filterPredicate:E,first:g,skip:!c||v,useLite:h,isCache:b}),{subjects:H,isLoading:G,error:B,hasNextPage:W}=(0,i.Q_)({source:"workspace",filter:p,filterPredicate:y,first:g,skip:!u||v,useLite:h,isCache:b}),q=(0,a.useMemo)(()=>{let t=[...N,...T];if(e&&c)return t.filter((e,t,r)=>t===r.findIndex(t=>t.id===e.id));return t},[T,e,c,N]),z=(0,a.useMemo)(()=>{let e=[...H,...R];if(t&&u)return e.filter((e,t,r)=>t===r.findIndex(t=>t.id===e.id));return e},[R,t,u,H]),V=(0,a.useMemo)(()=>{let e=[...P,...S];if(r&&d)return e.filter((e,t,r)=>t===r.findIndex(t=>t.id===e.id));return e},[S,r,d,P]),{subjects:Q,hasNextPage:K}=(0,a.useMemo)(()=>(0,s.GF)(p,g,q,z,V),[p,g,q,z,V]),j=(0,a.useMemo)(()=>({accountGroups:w,accountServicePrincipals:k,accountUsers:C,groups:Y,servicePrincipals:G,users:O,some:w||k||C||Y||G||O}),[w,k,C,Y,G,O]),J=(0,a.useMemo)(()=>({accountGroups:x??null,accountServicePrincipals:L??null,accountUsers:A??null,groups:U??null,servicePrincipals:B??null,users:D??null}),[x,L,A,U,B,D]);return{allSubjectsMap:(0,a.useMemo)(()=>(0,s.ne)(q,z,V),[q,z,V]),errors:J,hasNextPage:!!(Q.length===g&&(I||_||M||$||F||W)||K),isLoading:j,subjects:Q}}},302136:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(692738),n=r(967166);function i(){let e=(0,n.hG)();return(0,a.useCallback)(t=>e({uc_api_ui_log:t}),[e])}},308879:(e,t,r)=>{r.d(t,{L:()=>l,u:()=>c});var a=r(689262),n=r(686560),i=r(441535),o=r(709262),s=r(805287);let l=()=>({isEnabled:c()}),c=()=>(0,s.gz)({cloud:"AWS",userCanUseDatabricksWorkspace:(0,n.d)("userCanUseDatabricksWorkspace_new",!1),userCanUseSqlService:(0,n.d)("userCanUseSqlService_new",!1),enableSqlService:(0,a.b)("enableSqlService",(0,n.d)("enableSqlService",!1),()=>(0,n.d)("dbSqlEnabled_new",!1)),centralizedLoginEnabled:(0,a.b)("centralizedLoginEnabled",(0,n.d)("centralizedLoginEnabled",!1),()=>(0,i.W)("databricks.fe.centralizedLoginEnabled",!1))})[o.EU].allowed},311529:(e,t,r)=>{r.d(t,{F:()=>i,x:()=>o});var a,n=r(696514),i=((a={}).DONE="done",a);let o=(0,n.fH)("Filebrowser::Share")},314775:(e,t,r)=>{r.d(t,{A:()=>I});var a=r(610435),n=r(644091),i=r(783772),o=r.n(i),s=r(692738),l=r(325056),c=r(293418),u=r(114826),d=r(79128),p=r(224098),m=r(497895),f=r(814947),g=r(282109),h=r(999157),v=r(653800),b=r(837334),y=r(286342),E=r(382908),S=r(661748),C=r(53333);let A=(0,s.forwardRef)(function({style:e,resizeHandler:t,increaseWidthHandler:r,decreaseWidthHandler:n,children:i,...o},l){let{isHeader:p}=(0,s.useContext)(c.g);if(!p)throw Error("`TableHeaderResizeHandle` must be used within a `TableRow` with `isHeader` set to true.");let[f,g]=(0,s.useState)(!1),h=(0,s.useRef)(null),S=(0,s.useRef)(null),C=(0,s.useRef)(!0),A=(0,s.useRef)(!1),{theme:I}=(0,m.wn)(),T=(0,s.useCallback)(e=>{if(!r||!n)return void t?.(e);if(f&&!C.current)return;C.current=!1,h.current={x:e.clientX,y:e.clientY},S.current=e,A.current=!1;let a=e=>{h.current&&Math.abs(e.clientX-h.current.x)>2&&S.current&&(A.current=!0,t?.(S.current),document.removeEventListener("pointermove",a))},i=()=>{h.current=null,document.removeEventListener("pointermove",a),document.removeEventListener("pointerup",i)};document.addEventListener("pointermove",a),document.addEventListener("pointerup",i)},[f,t,r,n]),w=(0,s.useCallback)(e=>{if(A.current){e.preventDefault(),e.stopPropagation(),A.current=!1;return}},[]),x=(0,a.Y)("div",{...o,ref:l,onPointerDown:T,onClick:w,css:u.Ay.resizeHandleContainer,style:e,role:"button","aria-label":"Resize Column",children:(0,a.Y)("div",{css:u.Ay.resizeHandle})});return r&&n?(0,a.FD)(y.Root,{componentId:"codegen_design-system_src_design-system_tableui_tableheader.tsx_114",onOpenChange:g,children:[(0,a.Y)(y.Trigger,{asChild:!0,children:x}),(0,a.FD)(y.Content,{side:"top",align:"center",sideOffset:0,minWidth:135,style:{padding:`${I.spacing.sm} ${I.spacing.md} ${I.spacing.md} ${I.spacing.sm}`},children:[(0,a.FD)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,a.Y)(E.o.Title,{style:{marginBottom:0,marginTop:0},children:"Resize Column"}),(0,a.FD)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,a.Y)(d.$n,{onClick:()=>{n()},size:"small",componentId:"design_system.adjustable_width_header.decrease_width_button",icon:(0,a.Y)(v.A,{}),style:{backgroundColor:I.colors.actionTertiaryBackgroundHover}}),(0,a.Y)(d.$n,{onClick:()=>{r()},size:"small",componentId:"design_system.adjustable_width_header.increase_width_button",icon:(0,a.Y)(b.A,{})})]})]}),(0,a.Y)(y.Arrow,{})]})]}):x}),I=(0,s.forwardRef)(function({children:e,ellipsis:t=!1,multiline:r=!1,sortable:i,sortDirection:d,onToggleSort:m,style:v,className:b,isResizing:y=!1,align:I="left",wrapContent:T=!0,column:w,header:x,setColumnSizing:_,componentId:R,analyticsEvents:k,"aria-label":L,...M},P){let O,D=(0,S.W)("databricks.fe.observability.defaultComponentView.tableHeader",!1),$=w?.getCanResize()||M.resizable||!1,N=x?.getResizeHandler()||M.resizeHandler,Y=w&&x&&_,{size:U,grid:F}=(0,s.useContext)(l.G),{isHeader:H}=(0,s.useContext)(c.g),[G,B]=(0,s.useState)(d),W=(0,s.useMemo)(()=>k??(D?[p.s7.OnValueChange,p.s7.OnView]:[p.s7.OnValueChange]),[k,D]),q=(0,p.ei)({componentType:p.v_.TableHeader,componentId:R,analyticsEvents:W,valueHasNoPii:!0}),{elementRef:z}=(0,C.z)({onView:q.onView,value:G}),V=(0,n.SV)([P,z]);if(!H)throw Error("`TableHeader` a must be used within a `TableRow` with `isHeader` set to true.");let Q=(0,a.Y)(a.FK,{});i&&("asc"===d?(Q=(0,a.Y)(f.A,{}),O="ascending"):"desc"===d?(Q=(0,a.Y)(g.A,{}),O="descending"):"none"===d&&(Q=(0,a.Y)(h.A,{}),O="none")),(0,s.useEffect)(()=>{d!==G&&(B(d),q.onValueChange(d))},[d,G,q]);let K="right"===I,j="md";"small"===U&&(j="sm");let J=T?(0,a.Y)(E.o.Text,{className:"table-header-text",ellipsis:!r,size:j,title:!r&&"string"==typeof e&&e||void 0,bold:!0,children:e}):e,X=(0,s.useCallback)(e=>()=>{w&&_&&_(t=>({...t,[w.id]:e}))},[w,_]),Z=(0,s.useCallback)(()=>{w&&_&&X(w.getSize()+10)()},[w,_,X]),ee=(0,s.useCallback)(()=>{w&&_&&X(w.getSize()-10)()},[w,_,X]),et=$&&N?(0,a.Y)(A,{style:{height:"default"===U?"20px":"16px"},resizeHandler:N,increaseWidthHandler:Y?Z:void 0,decreaseWidthHandler:Y?ee:void 0}):null,er=i&&!y;return(0,a.FD)("div",{...M,ref:V,css:F?void 0:[u.PV.cell,u.PV.header],className:o()(F&&u.lH.cell,F&&u.lH.header,{"table-header-isGrid":F},b),role:"columnheader","aria-sort":i&&O||void 0,style:{justifyContent:I,textAlign:I,...v},"aria-label":er?void 0:L,...q.dataComponentProps,children:[er?(0,a.FD)("div",{css:[u.Ay.headerButtonTarget],role:"button",tabIndex:0,onClick:m,onKeyDown:e=>{if(i&&("Enter"===e.key||" "===e.key))return e.preventDefault(),m?.(e)},"aria-label":er?L:void 0,children:[K?(0,a.Y)("span",{className:"table-header-icon-container",css:[u.Ay.sortHeaderIconOnLeft],children:Q}):null,J,K?null:(0,a.Y)("span",{className:"table-header-icon-container",css:[u.Ay.sortHeaderIconOnRight],children:Q})]}):J,et]})})},320126:(e,t,r)=>{r.d(t,{B:()=>d});var a=r(610435),n=r(219830),i=r(403166),o=r(964133),s=r(944552),l=r(342411),c=r(441535);let u=({value:e,label:t,popoverContent:r})=>(0,a.FD)("div",{style:{display:"flex",gridRow:"label"},children:[(0,a.Y)(n.sx,{value:e,css:{marginRight:0},children:t}),r&&(0,a.Y)("div",{css:{display:"flex",alignItems:"center",paddingTop:1,marginLeft:-6},children:(0,a.Y)(i.U,{children:r})})]}),d=({componentId:e,isAutoscalingSelected:t,formField:r,onChange:i})=>{let{formatMessage:d}=(0,l.tz)(),p=(0,c.W)("databricks.fe.lakebase.hideBetaBadge",!1),m=(0,c.W)("databricks.fe.lakebase.replaceAutoscalingSwitchWithSelector",!1);if(!p||!m)return(0,a.FD)("div",{css:{display:"flex",justifyContent:"space-between"},children:[(0,a.Y)(o.D.Label,{htmlFor:"autoscaling-beta-switch",infoPopoverContents:d(p?{id:"J/59kJ",defaultMessage:"Enable Lakebase Postgres Autoscaling for branching, instant restore, and other advanced features. HA is currently offered only in the Lakebase Provisioned Preview."}:{id:"uCfnkC",defaultMessage:"Enable to use the latest version of Lakebase Postgres, the Autoscaling beta (for evaluation only). For production, leave disabled to use standard Lakebase Postgres."}),infoPopoverProps:{popoverProps:{style:{maxWidth:400}}},children:d(p?{id:"FEhQrw",defaultMessage:"Autoscaling"}:{id:"GWIlJr",defaultMessage:"Autoscaling Beta"})}),(0,a.Y)(s.d,{componentId:e,id:"autoscaling-beta-switch",...r,checked:t,onChange:i})]});return(0,a.FD)("div",{children:[(0,a.Y)(o.D.Label,{htmlFor:"database-type-radio-group",children:(0,a.Y)(l.sA,{id:"yRfOwP",defaultMessage:"Database type"})}),(0,a.FD)(n.sx.HorizontalGroup,{componentId:"catalogCreation.lakebaseDatabaseType",id:"database-type-radio-group",...r,name:r?.name??"autoscalingBeta",value:t?"autoscaling":"provisioned",onChange:e=>{i("autoscaling"===e.target.value)},children:[(0,a.Y)(u,{value:"autoscaling",label:d({id:"Qgmeqm",defaultMessage:"Autoscaling"}),popoverContent:d({id:"3ySzDc",defaultMessage:"Autoscaling compute with branching, instant restore, and advanced features."})}),(0,a.Y)(u,{value:"provisioned",label:d({id:"y4pkKO",defaultMessage:"Provisioned"}),popoverContent:d({id:"9mNQM6",defaultMessage:"High availability (HA) and integration with Databricks apps."})})]})]})}},322227:(e,t,r)=>{r.d(t,{$:()=>i,x:()=>o});var a,n=r(696514),i=((a={}).DONE="done",a.CANCELLED="cancelled",a);let o=(0,n.fH)("Filebrowser::Move")},325048:(e,t,r)=>{r.d(t,{c:()=>a,s:()=>n});let a=e=>({display:"flex",borderBottom:`1px solid ${e.colors.actionDefaultBorderDefault}`,marginBottom:e.spacing.md,height:e.general.heightSm,boxSizing:"border-box"}),n=e=>({display:"flex",fontWeight:e.typography.typographyBoldFontWeight,fontSize:e.typography.fontSizeMd,backgroundColor:"transparent",marginRight:e.spacing.md})},325056:(e,t,r)=>{r.d(t,{G:()=>d,X:()=>p});var a=r(610435),n=r(783772),i=r.n(n),o=r(692738),s=r(114826),l=r(623369),c=r(497895),u=r(123252);let d=(0,o.createContext)({size:"default",grid:!1}),p=(0,o.forwardRef)(function({children:e,size:t="default",someRowsSelected:r,style:n,pagination:p,empty:m,className:f,scrollable:g=!1,grid:h=!1,noMinHeight:v=!1,onScroll:b,...y},E){let{theme:S}=(0,c.wn)(),C=(0,o.useRef)(null);(0,o.useImperativeHandle)(E,()=>C.current);let A=v?{}:{minHeight:!m&&p?150:100};return(0,a.Y)(l.vR.Provider,{value:l.pz,children:(0,a.Y)(d.Provider,{value:(0,o.useMemo)(()=>({size:t,someRowsSelected:r,grid:h}),[t,r,h]),children:(0,a.FD)("div",{...(0,u.VG)(),...y,style:{...n,"--table-header-active-color":S.colors.actionDefaultTextPress,colorScheme:S.isDarkMode?"dark":void 0,"--table-header-background-color":S.colors.backgroundPrimary,"--table-header-focus-color":S.colors.actionDefaultTextHover,"--table-header-sort-icon-color":S.colors.textSecondary,"--table-header-text-color":S.colors.actionDefaultTextDefault,"--table-row-hover":S.colors.tableRowHover,"--table-separator-color":S.colors.border,"--table-resize-handle-color":S.colors.borderDecorative,"--table-spacing-md":`${S.spacing.md}px`,"--table-spacing-sm":`${S.spacing.sm}px`,"--table-spacing-xs":`${S.spacing.xs}px`},css:[s.Ay.tableWrapper,A],className:i()({"table-isScrollable":g,"table-isGrid":h},f),children:[(0,a.FD)("div",{role:"table",ref:C,css:[s.Ay.table,g&&{flex:"initial !important"}],tabIndex:g?0:-1,onScroll:b,children:[e,m&&(0,a.Y)("div",{css:{padding:S.spacing.lg},children:m})]}),!m&&p&&(0,a.Y)("div",{css:s.Ay.paginationContainer,children:p})]})})})})},342145:(e,t,r)=>{r.d(t,{$y:()=>d,B_:()=>S,FQ:()=>g,OD:()=>s,T4:()=>o,U1:()=>h,UX:()=>m,Yu:()=>b,bB:()=>i,cC:()=>f,k0:()=>n,nU:()=>c,sO:()=>E,sh:()=>u,wp:()=>l,xY:()=>p,xe:()=>y,zD:()=>v});var a=r(141078);let n=(0,a.J1)`
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
`,u=(0,a.J1)`
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
`,d=(0,a.J1)`
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
`,m=(0,a.J1)`
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
`,f=(0,a.J1)`
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
`,g=(0,a.J1)`
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
`,v=(0,a.J1)`
  query getAccountServicePrincipalsCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountServicePrincipalsCount {
      totalCount
    }
  }
`,b=(0,a.J1)`
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
`,S=(0,a.J1)`
  query getWorkspaceGroupsCount($shouldGetDirectlyAssignedOnly: Boolean) @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceGroupsCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`},351089:(e,t,r)=>{r.d(t,{v:()=>c,y:()=>u});var a=r(412836),n=r(733337),i=r(660618),o=r(927239),s=r(595615);function l(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}let c=e=>"isDatabaseCatalog"in e&&!0===e.isDatabaseCatalog;function u(){let{invalidate:e}=(0,s.rA)();return(0,a.n_)(({name:e,databaseName:t,instanceName:r,groupOwner:a,authAsGroup:o,createDatabaseIfNotExists:s})=>{var c;return(c=function*(){let a=new URL(`${i.e0}/catalogs`,window.location.href);return yield(0,n.nr)(a.toString(),{method:"POST",body:JSON.stringify({name:e,database_name:t,database_instance_name:r,create_database_if_not_exists:!!s})})},function(){var e=this,t=arguments;return new Promise(function(r,a){var n=c.apply(e,t);function i(e){l(n,r,a,i,o,"next",e)}function o(e){l(n,r,a,i,o,"throw",e)}i(void 0)})})()},{onSuccess:()=>{e([o.xQ])}})}},352185:(e,t,r)=>{r.d(t,{A6:()=>E,Ds:()=>p,FI:()=>d,I7:()=>u,m1:()=>c});var a,n,i,o=r(446835),s=r.n(o),l=r(978679),c=((a={}).CONFIGURATION="configuration",a.NOTEBOOKS="notebooks",a.LIBRARIES="libraries",a.SPARK_UI="sparkUi",a.DRIVER_LOGS="driverLogs",a.METRICS="metrics",a.SPARK_CLUSTER_UI="sparkClusterUi",a.APPS="apps",a.EVENTS="events",a);let u="/compute";var d=((n={}).InteractiveListPage="interactive",n.AutomatedListPage="automated",n.SqlWarehouses="sql-warehouses",n.BrickIndex="vector-search",n.BrickStore="online-stores",n.DatabaseInstances="database-instances",n.InstancePools="instance-pools",n.ClusterPolicies="policies",n.LakehouseApps="apps",n.GpuPools="gpu-pools",n.Serverless="serverless",n),p=((i={}).New="new",i.Edit="edit",i);let m=function e(...t){let r=RegExp("(^/*)|(/*$)","g"),a=s()(t).map(e=>e.trim().replace(r,"")).join("/"),n=a?`/${a}`:"",i=t=>t?e(n,t)():n;return i.append=(...t)=>e(n,...t),i}(u),f=m.append("instance-pools"),g=m.append("policies"),h=m.append("sparkui"),v=m.append("clusters"),b=m.append("database-instances");function y(e){return["driver",e].filter(l.zz).join("-")}let E={clusterMainPage:e=>m(e),sqlWarehouse:{create:()=>m.append("sql-warehouses")("new")},brickStore:{list:()=>E.clusterMainPage("online-stores"),view:e=>m.append("online-stores")(e)},databaseInstances:{list:()=>E.clusterMainPage("database-instances"),view:e=>b(e),edit:e=>b.append(e)("edit")},cluster:{view(e,t,r){let a=v.append(e);if(!t||"configuration"===t)return a();if("driverLogs"===t)return a("driver-logs");if("sparkUi"===t)return a("spark-ui");if("sparkClusterUi"===t)return a.append("spark-compute-ui")(("MASTER"===r?"master":r)??"master");return a(t)},edit:e=>v.append(e)("edit"),new:(e={})=>{let t="policyId"in e?`?policyId=${e.policyId}`:"",r="clone"in e?`?clone=${e.clone}`:"";return v.append("new")(r||t)}},sparkUi:{driverUi:(e,t)=>h.append(e)(`driver${t?`-${t}`:""}`),logs:(e,t)=>{let r=h.append(e)("driver-logs");if(!t?.jobId&&!t?.runId)return r;let a=new URLSearchParams;return t.jobId&&a.set("jobId",String(t.jobId)),t.runId&&a.set("runId",String(t.runId)),`${r}?${a}`},uiWithPath:e=>h.append(e)(),metrics:e=>h.append(e)("metrics"),stage:(e,t,r,a)=>h.append(e,y(t))(`stages/stage?id=${r}&attempt=0${void 0!==a?"&o="+a:""}`),job:(e,t,r,a)=>h.append(e,y(t))(`jobs/job?id=${r}${void 0!==a?"&o="+a:""}`)},brickIndex:{list:()=>E.clusterMainPage("vector-search"),view:e=>m.append("vector-search")(e)},policy:{view:e=>g(e),create:()=>g("new"),clone:e=>E.policy.create()+`?clone=${e}`,edit:e=>g.append(e)("edit")},pool:{view:e=>f(e),create:()=>f("new"),edit:e=>f.append(e)("edit")}}},353684:(e,t,r)=>{r.d(t,{I:()=>v,j:()=>b});var a=r(160603),n=r(409989),i=r(412836),o=r(217002),s=r(539305),l=r(841734),c=r(29824),u=r(660618),d=r(165091),p=r(166893),m=r(372854);function f(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function g(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){f(i,a,n,o,s,"next",e)}function s(e){f(i,a,n,o,s,"throw",e)}o(void 0)})}}let h={[c.an.EXTERNAL_LOCATION]:s.C,[c.an.STORAGE_CREDENTIAL]:o.i,[c.an.CREDENTIAL]:o.i,[c.an.CATALOG]:l.ry};function v(e){let t=(0,a.useQueryClient)(),r=m.RF[e];return(0,i.n_)(({securableName:e,payload:t})=>g(function*(){return function(t){return g(function*(){let a,i=yield n.pY.patch((a=encodeURIComponent(e),`${u.bY}/bindings/${r}/${a}`),t);return((i?.data||i)??null).bindings})()}(t)})(),{onSuccess:(a,n)=>{let{securableName:o}=n;if(i.aH.getActiveValue().invalidateQueries(["workspace_bindings:v1",r,o]),h[e]){t.resetQueries(h[e](o));let r=((e,t)=>{switch(e){case c.an.EXTERNAL_LOCATION:return["authz_eval","external_location",t];case c.an.STORAGE_CREDENTIAL:return["authz_eval","storage_credential",t];case c.an.CREDENTIAL:return["authz_eval","credential",t];default:return[]}})(e,o);r&&t.refetchQueries(r)}}})}function b(){let e=(0,d.q)(),t=v(c.an.CATALOG);return(0,i.n_)(({catalogName:r,payload:a})=>g(function*(){e.isSuccess||(yield e.mutateAsync({catalog:r,payload:{isolation_mode:p.ZB.ISOLATED}})),a.add&&a.add.length>0&&(yield t.mutateAsync({securableName:r,payload:a}))})())}},402720:(e,t,r)=>{let a;r.d(t,{P:()=>c});var n=r(610435),i=r(400136),o=r(591333),s=r(429608),l=r(866370);let c=((a=({dangerouslySetAntdProps:e,label:t,loadingDescription:r="LegacySkeleton",...a})=>{let c=a.loading??!0;return(0,n.Y)(s.wC,{children:(0,n.FD)(o.U,{label:t,children:[c&&(0,n.Y)(l.G,{description:r}),(0,n.Y)(i.A,{...a,...e})]})})}).Button=i.A.Button,a.Image=i.A.Image,a.Input=i.A.Input,a)},404991:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m2.207-10.189a2.25 2.25 0 0 1-1.457 2.56V9h-1.5V7.75A.75.75 0 0 1 8 7a.75.75 0 1 0-.75-.75h-1.5a2.25 2.25 0 0 1 4.457-.439M7.25 10.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="QuestionMarkFillIcon";let l=s},418230:(e,t,r)=>{r.d(t,{U:()=>i});var a=r(692738),n=r(829478);function i(e){var t;return t=a.useMemo(()=>window.matchMedia(e),[e]),(0,n.useSyncExternalStore)(a.useCallback(e=>(t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}),[t]),()=>t.matches)}},424489:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",d:"M12.125 8.864a.75.75 0 0 0 0-1.3l-6-3.464A.75.75 0 0 0 5 4.75v6.928a.75.75 0 0 0 1.125.65z"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="PlayIcon";let l=s},434288:(e,t,r)=>{r.d(t,{l:()=>a});let a=(0,r(342411).YK)({requestPermissions:{id:"CrJ5nP",defaultMessage:"Request permissions"},requestDeltaSharingPermissions:{id:"P0HsgX",defaultMessage:"Request Delta Sharing permissions"},requestAccessDisabledTooltip:{id:"LW+CW/",defaultMessage:"Requests for access are not enabled for this object. Please contact the object owner or administrator for additional permissions."},requestAccessDeltaSharingRecipientDisabledTooltip:{id:"HX5unK",defaultMessage:"Requests for access are not enabled for this object. Please contact the object owner or administrator for USE_PROVIDER permissions."},requestAccessDeltaSharingProviderDisabledTooltip:{id:"pdgj40",defaultMessage:"Requests for access are not enabled for this object. Please contact the object owner or administrator for CREATE_RECIPIENT and CREATE_SHARE permissions."},requestAccessDisabledMultipleTooltip:{id:"b2k+c/",defaultMessage:"Requests for access are not enabled for these objects. Please contact the object owners or administrators for additional permissions."}})},438965:(e,t,r)=>{r.d(t,{Y:()=>o});var a=r(879612),n=r(29824),i=r(641760);function o(e){let t=(0,i.ei)(),r=(0,a.xO)({securableType:n.an.CATALOG,securableKind:e},{isUcEnabled:t});return!!r?.includes("BROWSE")}},450275:(e,t,r)=>{r.d(t,{d:()=>s,v:()=>n});var a,n=((a={}).Bytes="Bytes",a.KiloBytes="KiloBytes",a.MegaBytes="MegaBytes",a.GigaBytes="GigaBytes",a.TeraBytes="TeraBytes",a.PetaBytes="PetaBytes",a.ExaBytes="ExaBytes",a.ZettaBytes="ZettaBytes",a.YottaBytes="YottaBytes",a);let i={Bytes:0,KiloBytes:1,MegaBytes:2,GigaBytes:3,TeraBytes:4,PetaBytes:5,ExaBytes:6,ZettaBytes:7,YottaBytes:8},o=["Bytes","KiloBytes","MegaBytes","GigaBytes","TeraBytes","PetaBytes","ExaBytes","ZettaBytes","YottaBytes"];function s(e,t="Bytes"){if(e<0)return{size:e,sizeUnit:t};let r=e*Math.pow(1024,i[t]),a=Math.floor(Math.log(r)/Math.log(1024));return{size:r/Math.pow(1024,a=Math.min(Math.max(a,0),o.length-1)),sizeUnit:o[a]}}},459528:(e,t,r)=>{r.d(t,{E:()=>n,v:()=>i});var a=r(696514);let n=(0,a.fH)("Clusters::ExecuteSql"),i=(0,a.fH)("Clusters::CancelSql")},465082:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a3.25 3.25 0 1 0 0 6.5A3.25 3.25 0 0 0 8 1M6.25 4.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M8 9a8.74 8.74 0 0 0-6.836 3.287.75.75 0 0 0-.164.469v1.494c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75v-1.494a.75.75 0 0 0-.164-.469A8.74 8.74 0 0 0 8 9m-5.5 4.5v-.474A7.23 7.23 0 0 1 8 10.5c2.2 0 4.17.978 5.5 2.526v.474z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="UserIcon";let l=s},482921:(e,t,r)=>{r.d(t,{G:()=>i,M:()=>n});var a,n=((a={}).ONLY_CLUSTER="ONLY_CLUSTER",a.ONLY_WAREHOUSE="ONLY_WAREHOUSE",a.WAREHOUSE_AND_CLUSTER="WAREHOUSE_AND_CLUSTER",a);let i=(e,t)=>{if(!t&&e)return"ONLY_CLUSTER";if(!e)return"ONLY_WAREHOUSE";return"WAREHOUSE_AND_CLUSTER"}},492814:(e,t,r)=>{r.d(t,{E:()=>u});var a=r(747206),n=r(648782),i=r(820628),o=r(181376),s=r(673240);let l="/explore/locations",c="/explore/external-metadata";function u(){let e=(0,s.Ck)(),{metastoreId:t,schema:r,table:u,volume:d,ucFunction:p,model:m,modelVersion:f,secret:g,notebook:h,share:v,recipient:b,provider:y,credential:E,location:S,connection:C,tableFullName:A,externalMetadata:I}=(0,n.g)(),{catalog:T}=(0,n.g)(),w=(0,i.UA)(),x=w?.[w?.length-1];return void 0===T&&[o.E.ExploreDataHiveCatalog,o.E.ExploreDataHiveSchema,o.E.ExploreDataHiveTable,o.E.ExploreDataSamplesCatalog,o.E.ExploreDataSamplesSchema,o.E.ExploreDataSamplesTable].includes(x?.pageId)&&(T=x?.path.match(/^data\/([^/]+)(?:\/|$)/)?.[1]),{showData:()=>e("/explore/data"),showMetastore:()=>{e((0,a.sZ)())},showUpgradeWizard:(t,r)=>{e(`/explore/upgrade/${encodeURIComponent(t)}${r?`/${encodeURIComponent(r)}`:""}`)},showConnections:()=>{e("/explore/connections")},showConnection:t=>{e((0,a.U3)(t))},showCreateConnection:t=>{e(`/explore/connections/create${t?`?credential=${encodeURIComponent(t)}`:""}`)},showEditConnection:t=>{e(`/explore/connections/${encodeURIComponent(t)}/edit`)},showLocations:()=>{e(l)},showLocation:t=>{e((0,a.n5)(t))},showCreateLocation:()=>{e(`${l}/create`)},showEditLocation:t=>{e(`${(0,a.n5)(t)}/edit`)},showLocationBrowser:t=>{e(`${(0,a.n5)(t)}/browse`)},showLocationWorkspace:t=>{e(`${(0,a.n5)(t)}/workspace`)},showLocationPermission:t=>{e(`${(0,a.n5)(t)}/permission`)},showCredential:t=>{e(`/explore/credentials/${encodeURIComponent(t)}`)},showCredentials:()=>{e("/explore/credentials")},showExternalMetadataList:()=>{e(c)},showExternalMetadata:t=>{e(`${c}/${encodeURIComponent(t)}`)},showCreateExternalMetadata:()=>{e("/governance/external-metadata/create")},showExternalMetadataEdit:t=>{e(`/governance/external-metadata/${encodeURIComponent(t)}/edit`)},showVolume:(t,r,n)=>{e((0,a.IM)(t,r,n))},showCreatePolicy:t=>{e(`/governance/policies/create?entity=${encodeURIComponent(t)}`)},showSecret:(t,r,n)=>{e((0,a.QT)(t,r,n))},showSchema:(t,r)=>{e(`/explore/data/${r}/${t}`)},showTable:(t,r,n)=>{e((0,a.ff)(t,r,n))},catalog:T,schema:r,table:u,volume:d,ucFunction:p,model:m,modelVersion:f,secret:g,notebook:h,share:v,recipient:b,provider:y,credential:E,location:S,connection:C,metastoreId:t,tableFullName:A,externalMetadata:I}}},509695:(e,t,r)=>{r.d(t,{h:()=>u,p:()=>c});var a=r(610435),n=r(452137),i=r.n(n),o=r(692738),s=r(566512);let l=(0,o.createContext)(void 0),c=({children:e})=>{let[t,r]=(0,s.o)();return(0,a.FD)(l.Provider,{value:t,children:[e,r]})},u=()=>{let e=(0,o.useContext)(l);return i()(null!=e,"Must wrap child in NotificationProvider"),e}},509901:(e,t,r)=>{r.d(t,{Yf:()=>p,gf:()=>f,ok:()=>d,s5:()=>m});var a=r(413063),n=r.n(a),i=r(692738),o=r(412836),s=r(425373),l=r(302118);function c(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function u(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){c(i,a,n,o,s,"next",e)}function s(e){c(i,a,n,o,s,"throw",e)}o(void 0)})}}function d(e,t,r){let a=(0,i.useCallback)(({key:e,...t})=>({queryKey:["authz_eval",...e],queryFn:({signal:e})=>u(function*(){return yield l.k.authzEval(t,r?{signal:e}:void 0)})()}),[r]);return(0,o.IT)({...a(e),...t})}function p(e,t,r){var a,i,o;let c,d=(0,s.E)({queries:(a=e,i=t,o=r,c=["authz_eval"].concat(a),n()(Object.entries(i.actions),m).map((e,t)=>{let r=e.reduce((e,t)=>(e[t[0]]=t[1],e),{});return{queryKey:[...c,t],queryFn:()=>{var e;return e={actions:r,include_argument_metadata:i.include_argument_metadata},u(function*(){return yield l.k.authzEval(e)})()},enabled:o?.enabled,refetchOnWindowFocus:o?.refetchOnWindowFocus==="always"||!!o?.refetchOnWindowFocus,staleTime:o?.staleTime}}))}),p=d.some(e=>e.isLoading);if(p)return{isLoading:p,data:null,isError:!1,errors:[]};let f=d.reduce((e,t)=>(t.error&&e.push(t.error),e),[]);if(f.length>0)return{isLoading:p,data:null,isError:!0,errors:f};return{isLoading:p,data:d.reduce((e,t)=>{if(t.data&&t.data?.actions)return{actions:{...e.actions,...t.data.actions}};return e},{actions:{}}),isError:!1,errors:[]}}let m=100;function f(e){e.invalidateQueries(["authz_eval"])}},539305:(e,t,r)=>{r.d(t,{C:()=>a});let a=e=>["get_external_location",e]},566825:(e,t,r)=>{r.d(t,{Ay:()=>y,Ns:()=>h,ZC:()=>b,r:()=>v});var a=r(987962),n=r.n(a),i=r(623576),o=r.n(i),s=r(189219),l=r.n(s),c=r(923305),u=r(651139),d=r(949313),p=r(670943),m=r(924636),f=r(984741),g=r(885364);function h(e){return n()(e,"job.id")?(0,d.Ec)(e.job.id,1e3):e}let v=["get-data-sources"],b=(0,f.to)("sql/images/db-logos"),y={query:()=>(0,p.Ym)()?u.pY.get(m.bI).then(e=>e?.data_sources||[]):u.pY.get((0,c.Hi)("api/data_sources")),get:({id:e})=>u.pY.get((0,c.Hi)(`api/data_sources/${e}`)),types:()=>u.pY.get((0,c.Hi)("api/data_sources/types")),create:e=>u.pY.post((0,c.Hi)("api/data_sources"),e),save:e=>u.pY.post((0,c.Hi)(`api/data_sources/${e.id}`),e),test:e=>u.pY.post((0,c.Hi)(`api/data_sources/${e.id}/test`)),delete:({id:e})=>u.pY.delete((0,c.Hi)(`api/data_sources/${e}`)),fetchSchema:(e,t=!1)=>{let r={};return t&&(r.refresh=!0),u.pY.get((0,c.Hi)(`api/data_sources/${e.id}/schema`),{params:r}).then(e=>{if(n()(e,"job"))return(0,d.Ec)(e.job.id).catch(t=>1===t.code?[]:Promise.reject(Error(e.job.error)));return n()(e,"schema")?e.schema:Promise.reject()}).then(e=>o()(e,e=>{var t;return{...e,columns:(t=e.columns,o()(t,e=>l()(e)?e:{name:e})),type:e.type}}))},fetchColumns:(e,t,r)=>u.pY.get((0,c.Hi)(`api/data_sources/${e}/${t}/columns/${r}`)).then(h).then((0,g.g)("DataSource.fetchColumns"))}},571739:(e,t,r)=>{r.d(t,{J:()=>i,z:()=>o});var a,n=r(696514),i=((a={}).DONE="done",a.CANCELLED="cancelled",a);let o=(0,n.fH)("Filebrowser::Clone")},572382:(e,t,r)=>{r.d(t,{CU:()=>s,U1:()=>l,iC:()=>o,kc:()=>n,sT:()=>i});var a=r(32121);function n(e){return e?.edges.map(e=>e.node)}function i({networkStatus:e}){return e===a.pT.fetchMore}function o({networkStatus:e}){return e===a.pT.refetch}function s({networkStatus:e}){return e===a.pT.poll}function l({__typename:e,...t}){return t}},574132:(e,t,r)=>{r.d(t,{y:()=>i});var a=r(610435);r(692738);var n=r(497895);let i=({disabled:e,children:t})=>{let{theme:r}=(0,n.wn)();return(0,a.Y)("div",{css:{color:r.colors.textSecondary,fontSize:r.typography.fontSizeSm,...e&&{color:r.colors.actionDisabledText}},children:t})}},583971:(e,t,r)=>{r.d(t,{Ri:()=>d});var a=r(733337),n=r(641760),i=r(278983);function o(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function s(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function s(e){o(i,a,n,s,l,"next",e)}function l(e){o(i,a,n,s,l,"throw",e)}s(void 0)})}}let l=[1,1,2,3,5,8,13,21],c=l.length;function u(e){return e instanceof n.XD}function d(e,t){return s(function*(e,t,r=1e3){let n=0,o=null;for(;n<c;)try{return yield(0,a.nr)(e,t)}catch(e){if(o=e,u(e)&&function(e){if(!u(e))return!1;return 429===e.response.status}(e))(0,i.y)("clientsideEvent",{eventType:"ApiFetchRetry",eventName:"RetryAttempt",retryCount:n}),yield function(e){return s(function*(e,t=1e3){let r=function(e,t=1e3){let r=Math.min(e,l.length-1);return l[r]*t}(e,t);return new Promise(e=>setTimeout(e,r))}).apply(this,arguments)}(n,r),n++;else break}throw u(o)&&n===c&&(0,i.y)("clientsideEvent",{eventType:"ApiFetchRetry",eventName:"MaxRetryAttemptReached",errorCode:o?.response?.status,retryCount:n}),o}).apply(this,arguments)}},585703:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M5 8a3 3 0 1 0 6 0 3 3 0 0 0-6 0m3-4.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CircleOutlineIcon";let l=s},595615:(e,t,r)=>{r.d(t,{AO:()=>d,Ox:()=>m,RK:()=>g,ic:()=>h,rA:()=>f,uV:()=>p});var a=r(692738),n=r(160603),i=r(441535),o=r(412836),s=r(425373);function l(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}(0,n.setLogger)({log:console.log,warn:console.warn,error:()=>{}});let c={retry:!1,refetchOnWindowFocus:!1,staleTime:3e5},u=new Map;function d(e){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),r={...c,...e,enabled:e?.enabled!==!1&&t},a={...c,...e,enabled:e?.enabled!==!1&&!t};u.set(JSON.stringify(e.queryKey),e.queryKey);let s=(0,o.IT)(r),l=(0,n.useQuery)(a);return t?s:l}function p({queries:e}){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),r=e.map(e=>({...c,...e,enabled:e?.enabled!==!1&&t})),a=e.map(e=>({...c,...e,enabled:e?.enabled!==!1&&!t}));e.forEach(e=>u.set(JSON.stringify(e.queryKey),e.queryKey));let o=(0,s.E)({queries:r}),l=(0,n.useQueries)(a);return t?o:l}function m({queryFn:e}){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),r=(0,n.useQueryClient)(),s=e();return(0,a.useCallback)((e,a={})=>t?o.aH.getActiveValue().fetchQuery({...a,...s(e)},c):r.fetchQuery({...a,...s(e)},c),[s,t,r])}function f(){let[e,t]=(0,a.useState)(0),r=(0,n.useQueryClient)(),s=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1);return{invalidate:(e,a)=>{var n;return(n=function*(){t(e=>e+1);try{if(e)yield s?o.aH.getActiveValue().invalidateQueries(e):r.invalidateQueries(e),u.delete(JSON.stringify(e));else{let e=Array.from(u.values()).filter(e=>{if(!Array.isArray(e))return!1;if(!a)return!0;return e.some(e=>"string"==typeof e&&e.includes(a))}).filter(e=>void 0!==e).map(e=>s?o.aH.getActiveValue().invalidateQueries(e):r.invalidateQueries(e));yield Promise.allSettled(e),u=new Map}}finally{t(e=>e-1)}},function(){var e=this,t=arguments;return new Promise(function(r,a){var i=n.apply(e,t);function o(e){l(i,r,a,o,s,"next",e)}function s(e){l(i,r,a,o,s,"throw",e)}o(void 0)})})()},isLoadingInvalidation:e>0}}function g(e){for(let t of e){let e=t.isIdle??void 0;if(!h({isIdle:e,status:t.status??void 0,fetchStatus:t.fetchStatus??void 0}))return!1}return!0}function h(e){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),r=e.isIdle??!1;if(t)return"fetchStatus"in e&&"loading"===e.status&&"idle"===e.fetchStatus;return r}},598296:(e,t,r)=>{r.d(t,{an:()=>o,cf:()=>s,yh:()=>l});var a,n,i,o=((a={}).METASTORE="METASTORE",a.CATALOG="CATALOG$",a.DATABASE="DATABASE",a.TABLE="TABLE",a.VIEW="VIEW",a.STORAGE_CREDENTIAL="STORAGE_CREDENTIAL",a.EXTERNAL_LOCATION="EXTERNAL_LOCATION",a.FUNCTION="FUNCTION",a.REGISTERED_MODEL="REGISTERED_MODEL",a.VOLUME="VOLUME",a.CONNECTION="CONNECTION",a.EXTERNAL_METADATA="EXTERNAL_METADATA",a),s=((n={}).ALL="ALL",n.USAGE="USAGE",n.SELECT="SELECT",n.CREATE="CREATE",n.MODIFY="MODIFY",n.READ_METADATA="READ_METADATA",n.READ_FILES="READ_FILES",n.WRITE_FILES="WRITE_FILES",n.CREATE_TABLE="CREATE_TABLE",n.CREATE_MOUNT="CREATE_MOUNT",n.USE_CATALOG="USE_CATALOG",n.USE_SCHEMA="USE_SCHEMA",n.CREATE_SCHEMA="CREATE_SCHEMA",n.CREATE_VIEW="CREATE_VIEW",n.CREATE_FUNCTION="CREATE_FUNCTION",n.CREATE_EXTERNAL_TABLE="CREATE_EXTERNAL_TABLE",n.CREATE_MODEL="CREATE_MODEL",n.EXECUTE="EXECUTE",n.ALL_PRIVILEGES="ALL_PRIVILEGES",n),l=((i={}).NOT_OWNER="NOT_OWNER",i.REQUIRES_ANY_PRIVILEGE="REQUIRES_ANY_PRIVILEGE",i.REQUIRES_ANY_NON_BROWSE_PRIVILEGE="REQUIRES_ANY_NON_BROWSE_PRIVILEGE",i.REQUIRES_PRIVILEGES="REQUIRES_PRIVILEGES",i.NOT_UPDATABLE_IN_CURRENT_WORKSPACE="NOT_UPDATABLE_IN_CURRENT_WORKSPACE",i.DOES_NOT_EXIST="DOES_NOT_EXIST",i)},599349:(e,t,r)=>{r.d(t,{M:()=>p});var a=r(610435),n=r(956935),i=r(692738),o=r(5421),s=r(79128),l=r(497895),c=r(369291),u=r(174541),d=r(639712);let p=(0,i.forwardRef)(({children:e,...t},r)=>{let{theme:i}=(0,l.wn)(),{isInsideTypeaheadCombobox:p,componentId:m}=(0,o.T)();if(!p)throw Error("`TypeaheadComboboxAddButton` must be used within `TypeaheadCombobox`");return(0,a.Y)(s.$n,{...t,componentId:`${m}.add_option`,type:"tertiary",onClick:e=>{e.stopPropagation(),t.onClick?.(e)},onMouseUp:e=>{e.stopPropagation(),t.onMouseUp?.(e)},className:"combobox-footer-add-button",css:{...(0,u.RB)(i),...(0,n.AH)((0,d.dg)({width:"100%",padding:0,display:"flex",alignItems:"center",borderRadius:0,"&:focus":{background:i.colors.actionTertiaryBackgroundHover,outline:"none"}}))},icon:(0,a.Y)(c.A,{}),ref:r,children:e})})},604808:(e,t,r)=>{r.d(t,{O:()=>n});var a=r(686560);function n(){let e=(0,a.d)("unityCatalogServiceEnabled",!1),t=(0,a.d)("isMetastoreInstalled_new",!1);return e&&t}},605107:(e,t,r)=>{r.d(t,{X:()=>i});var a=r(610435),n=r(497895);let i=({children:e,...t})=>{let{theme:r}=(0,n.wn)();return(0,a.Y)("div",{...t,css:{display:"flex",flexDirection:"row",alignItems:"flex-start",padding:`${r.spacing.xs}px ${r.spacing.lg/2}px`,alignSelf:"stretch",fontWeight:400,color:r.colors.textSecondary},children:e})}},613319:(e,t,r)=>{r.d(t,{R:()=>o});var a=r(751777),n=r(235257),i=r(441535);function o({itemId:e,invalidateAssetData:t=!1}={}){if(!(0,i.W)("databricks.fe.schemabrowser.newTree",!1))return;if(!e)return void(0,a.Pv)({treeEventIdentifier:n.M.UC_SCHEMA_BROWSER,invalidationEventType:n.Zk.INVALIDATE_ALL});if(t)return void(0,a.Pv)({treeEventIdentifier:n.M.UC_SCHEMA_BROWSER,invalidationEventType:n.Zk.INVALIDATE_ASSET_AND_CHILDREN,itemId:e});(0,a.Pv)({treeEventIdentifier:n.M.UC_SCHEMA_BROWSER,invalidationEventType:n.Zk.INVALIDATE_ASSET_CHILDREN,itemId:e})}},618519:(e,t,r)=>{r.d(t,{Y:()=>w,q:()=>x});var a=r(692738),n=r(927239),i=r(758396),o=r(711489),s=r(657825),l=r(886100),c=r(22191),u=r(747129),d=r(595615),p=r(77240),m=r(710343),f=r(302118),g=r(733337),h=r(660618),v=r(641760),b=r(192464),y=r(862294),E=r(302136);function S(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function C(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){S(i,a,n,o,s,"next",e)}function s(e){S(i,a,n,o,s,"throw",e)}o(void 0)})}}let A=[/^Fetch request failed due to expired CSRF token/,/^Fetch request failed due expired user session/];function I(){let e=(0,E.A)(),t="http://go/dduipd/list_catalogs";return(0,a.useCallback)(({withWorkspaceBindings:r,includeBrowse:a})=>({queryKey:[n.xQ,!0===r,!0===a],queryFn:()=>C(function*(){try{let n=yield C(function*(){return e({rpc:o.Uz.UcApiRpcName.LIST_CATALOGS}),f.k.getCatalogs(a,r)})();return l.iT.sev2BurnRate(c.Es.DataExplorer,t,u.i1.P99,u.Ip.Min10,!0),n.catalogs??[]}catch(e){return(0,g.Ur)(e)||e instanceof v.XD&&404===e.response.status&&"FEATURE_DISABLED"===e.response.data.error_code&&e.response.data.message.includes("STANDARD_TIER")||e?.errorType===i.pB.EXPIRED_CSRF_TOKEN||e?.errorType===i.pB.EXPIRED_SESSION||A.some(t=>e?.message?.match(t))||l.iT.sev2BurnRate(c.Es.DataExplorer,t,u.i1.P99,u.Ip.Min10,!1,e),[]}})()}),[e])}function T(){let e=(0,v.ei)()&&(0,v.n_)()&&!(0,s.gK)(),t=(0,y.zx)({enabled:e}),r=(0,d.Ox)({queryFn:I}),i=!!e&&t.data?.settingspolicyserviceGetSettingRestWithoutSettingName?.setting?.value?.boolVal?.value,o=t.isLoading,l=!e||!1===i&&!1===o;return(0,a.useCallback)(({showNonUCCatalogs:e,sampleCatalogEnabled:t,withWorkspaceBindings:a,includeBrowse:i,dataSource:o,isPostgres:c=!1})=>({queryKey:[n.xQ,!0===e,!0===t,!0===a,!0===i,!0===l,c?(0,m.ud)(o):""],queryFn:()=>C(function*(){let n=(0,v.ei)(),u=(0,s.gK)(),d=[];if(c&&o?.type===p.ol.DATABASE_INSTANCE)return(0,b.mr)(o);if(n){let e=yield r({withWorkspaceBindings:a,includeBrowse:i});d.push(...e)}return e&&(!u&&l&&d.push({name:h.UQ}),t&&!d.some(({name:e})=>e===h.lx)&&d.push({name:h.lx})),d.sort((e,t)=>e.name.localeCompare(t.name))})()}),[l,r])}function w(e,t){let r=T();return(0,d.AO)({...r(e),keepPreviousData:!0,...t})}function x(){return(0,d.Ox)({queryFn:T})}},633203:(e,t,r)=>{r.d(t,{Y:()=>C});var a=r(610435),n=r(692738),i=r(430939),o=r(599349),s=r(342411),l=r(737358),c=r(971384),u=r(846007),d=r(212536),p=r(649934),m=r(786504),f=r(160603),g=r(670757),h=r(302118);function v(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}var b=r(733845),y=r(150190),E=r(694205),S=r(850723);function C({value:e,onChange:t,disabled:r,validationState:o,componentId:l="web-shared_external-location-selector",matchTriggerWidth:c,externalLocationQueryOptions:u,externalLocationOptionHintContentField:I,filterFn:T,optionAddon:w,recentlyUsedExternalLocation:x,maxHeight:_}){let R,k,L,M,P,O,D,$=(0,s.tz)(),N=(0,S.O)(),Y=(0,E.v)(u),U=(0,n.useMemo)(()=>(function(e,t){if(!t)return e;if(e){let r=e?.findIndex(e=>e.name===t?.name);if(r>=0){let a=[...e];return a.splice(r,1),a.unshift(t),a}}return e})(Y.data?.external_locations,x),[Y.data?.external_locations,x]),F=(R=(0,y.H)(),k=(0,b.O)(),L=(0,m.Pu)().authorize(p.E.CreateStorageCredential()),M=function(e,t){let{includeUnbound:r,purpose:a=g._7.STORAGE}=t||{};return(0,f.useQuery)(["list_storage_credentials",r,a],()=>{var e;return(e=function*(){return yield h.k.listCredentials({includeUnbound:r,purpose:a})},function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){v(i,a,n,o,s,"next",e)}function s(e){v(i,a,n,o,s,"throw",e)}o(void 0)})})()},e)}({enabled:k},{purpose:g._7.STORAGE}),P=L.response?.authorized===!0,O=!!R.data?.is_metastore_admin,D=!!M.data?.credentials?.length,O||P||D);return(0,a.Y)(d._,{id:"external-location-selector",componentId:l,icon:(0,a.Y)(i.A,{}),value:e,onChange:e=>t(U?.find(({name:t})=>t===e)),allItems:U??[],loading:Y.isLoading||N.isLoading,disabled:r,validationState:o,placeholder:$.formatMessage({id:"+dNT3n",defaultMessage:"Select external location"}),width:"100%",matchTriggerWidth:c,getItemState:e=>({disableReason:e.url===N.data?.storage_root?$.formatMessage({id:"m2FYsa",defaultMessage:"Metastore default external location cannot be used here"}):void 0}),optionHintContentField:I,getFooter:F?A:void 0,filterFn:T,optionAddon:w,maxHeight:_})}function A({hideMenuOnClick:e}){let t=(0,s.tz)();return(0,a.Y)(o.M,{componentId:"external-location-selector-v2_create-new-button",onClick:function(){(0,c.Lz)((0,l.AO)((0,u.t4)("/explore/locations/create")),{openInNewTab:!0}),e()},children:t.formatMessage({id:"hYd46j",defaultMessage:"Create new external location"})})}},647660:(e,t,r)=>{r.d(t,{Content:()=>k,List:()=>_,Root:()=>x,Trigger:()=>R});var a=r(610435),n=r(644091),i=r(747589),o=r(659276),s=r(514503),l=r.n(s),c=r(91958),u=r.n(c),d=r(692738),p=r(79128),m=r(224098),f=r(497895),g=r(369291),h=r(7754),v=r(325048),b=r(639712),y=r(661748),E=r(53333);let S=[m.s7.OnValueChange,m.s7.OnView],C=[m.s7.OnValueChange],A=[m.s7.OnClick],I={"& > div":{display:"inline-block !important"}},T=d.createContext({activeValue:void 0,dataComponentProps:{"data-component-id":"design_system.tabs.default_component_id","data-component-type":m.v_.Tabs}}),w=d.createContext({viewportRef:{current:null}}),x=d.forwardRef(({value:e,defaultValue:t,onValueChange:r,componentId:i,analyticsEvents:s,valueHasNoPii:l,...c},u)=>{let p=(0,y.W)("databricks.fe.observability.defaultComponentView.tabs",!1),f=void 0!==e,[g,h]=d.useState(t),v=(0,d.useMemo)(()=>s??(p?S:C),[s,p]),b=(0,m.ei)({componentType:m.v_.Tabs,componentId:i,analyticsEvents:v,valueHasNoPii:l,shouldStartInteraction:!0}),{elementRef:A}=(0,E.z)({onView:b.onView,value:e??t}),I=(0,n.SV)([u,A]),w=(0,d.useCallback)(e=>{b.onValueChange(e),r&&r(e),f||h(e)},[b,r,f]),x=f?e:g,_=(0,d.useMemo)(()=>({activeValue:x,dataComponentProps:b.dataComponentProps}),[x,b.dataComponentProps]);return(0,a.Y)(T.Provider,{value:_,children:(0,a.Y)(o.bL,{value:e,defaultValue:t,onValueChange:w,...c,ref:I})})}),_=d.forwardRef(({addButtonProps:e,scrollAreaViewportCss:t,tabListCss:r,children:n,dangerouslyAppendEmotionCSS:s,shadowScrollStylesBackgroundColor:l,scrollbarHeight:c,getScrollAreaViewportRef:u,...m},h)=>{let v=d.useRef(null),{theme:b}=(0,f.wn)(),{dataComponentProps:y}=d.useContext(T),E=D(b,l,c);d.useEffect(()=>{u&&u(v.current)},[u]);let S=(0,d.useMemo)(()=>({viewportRef:v}),[]);return(0,a.Y)(w.Provider,{value:S,children:(0,a.FD)("div",{css:[E.container,s],children:[(0,a.FD)(i.bL,{type:"hover",css:E.root,children:[(0,a.Y)(i.LM,{css:[E.viewport,t,I],ref:v,children:(0,a.Y)(o.B8,{css:[E.list,r],...m,ref:h,...y,children:n})}),(0,a.Y)(i.Ze,{orientation:"horizontal",css:E.scrollbar,children:(0,a.Y)(i.zi,{css:E.thumb})})]}),e&&(0,a.Y)("div",{css:[E.addButtonContainer,e.dangerouslyAppendEmotionCSS],children:(0,a.Y)(p.$n,{icon:(0,a.Y)(g.A,{}),size:"small","aria-label":"Add tab",css:E.addButton,onClick:e.onClick,componentId:`${y["data-component-id"]}.add_tab`,className:e.className})})]})})}),R=d.forwardRef(({onClose:e,suppressDeleteClose:t,customizedCloseAriaLabel:r,value:i,disabled:s,children:c,...u},p)=>{let{theme:g}=(0,f.wn)(),v=d.useRef(null),b=(0,n.SV)([p,v]),{activeValue:y,dataComponentProps:E}=d.useContext(T),S=E["data-component-id"],{viewportRef:C}=d.useContext(w),I=void 0!==e&&!s,x=$(g,I),_=(0,m.ei)({componentType:m.v_.Button,componentId:`${S}.close_tab`,analyticsEvents:A}),R=d.useCallback(()=>{if(!v.current||!C.current||y!==i)return;let e=C.current,t=v.current,r=e.getBoundingClientRect(),a=t.getBoundingClientRect();a.left<r.left?e.scrollLeft-=r.left-a.left:a.right>r.right&&(e.scrollLeft+=a.right-r.right)},[C,y,i]);(0,d.useEffect)(()=>{R()},[R]);let k=d.useMemo(()=>l()(R,10),[R]);return(0,d.useEffect)(()=>{if(!C.current||!v.current)return;let e=new ResizeObserver(k);return e.observe(C.current),e.observe(v.current),()=>{e.disconnect(),k.cancel()}},[k,C]),(0,a.FD)(o.l9,{css:x.trigger,value:i,disabled:s,onKeyDown:r=>{I&&!t&&"Delete"===r.key&&(_.onClick(r),r.stopPropagation(),r.preventDefault(),e(i))},onMouseDown:t=>{I&&1===t.button&&(_.onClick(t),t.stopPropagation(),t.preventDefault(),e(i))},...u,ref:b,children:[c,I&&(0,a.Y)(h.A,{onMouseDown:t=>{s||0!==t.button||!1!==t.ctrlKey||(_.onClick(t),t.stopPropagation(),t.preventDefault(),e(i))},css:x.closeSmallIcon,"aria-hidden":"false","aria-label":t?r:"Press delete to close the tab"})]})}),k=d.forwardRef(({mountMode:e="active",children:t,...r},n)=>{let{theme:i}=(0,f.wn)(),s=N(i),{activeValue:l}=d.useContext(T),c=r.value===l,[u,p]=d.useState(c);return c&&!u&&p(!0),(0,a.Y)(o.UC,{css:s,...r,ref:n,forceMount:"force"===e||"preserve"===e||void 0,children:"preserve"!==e||u?t:void 0})}),L={overflow:"hidden"},M={display:"flex",alignItems:"center"},P={flex:1},O={margin:"2px 0 6px 0"},D=u()((e,t,r)=>({container:{...(0,v.c)(e),contain:"layout paint"},root:L,viewport:{...(0,b.ye)(e,{backgroundColor:t})},list:M,scrollbar:{display:"flex",flexDirection:"column",userSelect:"none",touchAction:"none",height:r??3},thumb:{flex:1,background:e.isDarkMode?"rgba(255, 255, 255, 0.2)":"rgba(17, 23, 28, 0.2)","&:hover":{background:e.isDarkMode?"rgba(255, 255, 255, 0.3)":"rgba(17, 23, 28, 0.3)"},borderRadius:e.borders.borderRadiusSm,position:"relative"},addButtonContainer:P,addButton:O}),(e,t,r)=>`${(0,b.H6)(e)}|${t??""}|${r??""}`),$=u()((e,t)=>({trigger:{...(0,v.s)(e),alignItems:"center",justifyContent:t?"space-between":"center",minWidth:t?e.spacing.lg+e.spacing.md:e.spacing.lg,color:e.colors.textSecondary,lineHeight:e.typography.lineHeightBase,whiteSpace:"nowrap",border:"none",padding:`${e.spacing.xs}px 0 ${e.spacing.sm}px 0`,"& > .anticon:last-of-type":{visibility:"hidden"},"&:hover":{cursor:"pointer",color:e.colors.actionDefaultTextHover,"& > .anticon:last-of-type":{visibility:"visible"}},"&:active":{color:e.colors.actionDefaultTextPress},outlineStyle:"none",outlineColor:e.colors.actionDefaultBorderFocus,"&:focus-visible":{outlineStyle:"auto"},'&[data-state="active"]':{color:e.colors.textPrimary,boxShadow:`inset 0 -4px 0 ${e.colors.actionPrimaryBackgroundDefault}`,"& > .anticon:last-of-type":{visibility:"visible"}},"&[data-disabled]":{color:e.colors.actionDisabledText,"&:hover":{cursor:"not-allowed"}}},closeSmallIcon:{marginLeft:e.spacing.xs,color:e.colors.textSecondary,"&:hover":{color:e.colors.actionDefaultTextHover},"&:active":{color:e.colors.actionDefaultTextPress}}}),(e,t)=>`${(0,b.H6)(e)}|${t}`),N=u()(e=>({color:e.colors.textPrimary,'&[data-state="inactive"]':{display:"none"}}))},653800:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("path",{fill:"currentColor",d:"M11.5 8.75h-7v-1.5h7z"}),(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.75 1a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75V1.75a.75.75 0 0 0-.75-.75zm.75 12.5v-11h11v11z",clipRule:"evenodd"})]})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="MinusSquareIcon";let l=s},655841:(e,t,r)=>{r.d(t,{GX:()=>d,HA:()=>i,Ij:()=>u,U8:()=>n,_:()=>o,e:()=>l,fq:()=>p,n$:()=>c,r4:()=>s});var a=r(141078);let n=(0,a.J1)`
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
`,u=(0,a.J1)`
  mutation GetOrCreateIdpUser($input: AclmanagerIdentityapiGetOrCreateUserRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateUser(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,d=(0,a.J1)`
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
`},659573:(e,t,r)=>{r.d(t,{D:()=>i,v:()=>o});var a,n=r(696514),i=((a={}).DONE="done",a.CANCELLED="cancelled",a);let o=(0,n.fH)("Filebrowser::ShareLink")},662874:(e,t,r)=>{r.d(t,{DK:()=>u,Go:()=>c,WL:()=>s,t2:()=>l});var a=r(610435),n=r(692738),i=r(745444),o=r(962179);let s=n.createContext(()=>void 0);function l({children:e}){let{lakehouseMap:t}=(0,i.j)(),r=(0,n.useCallback)(e=>t[e],[t]);return(0,a.Y)(s.Provider,{value:r,children:e})}function c(e){let t=(0,n.useContext)(s);return(0,n.useMemo)(()=>e.map(e=>{if(!(0,o.PG)(e))return e;let r=t(e.endpoint_id??"");return{...e,lakehouse:r}}),[e,t])}function u(e){let t=(0,n.useContext)(s);return(0,n.useMemo)(()=>{if(e){let r=t(e.endpoint_id??"");return{...e,lakehouse:r}}},[e,t])}},672316:(e,t,r)=>{r.d(t,{I:()=>p,e:()=>d});var a=r(610435),n=r(692738),i=r(43680),o=r(203368),s=r(786504),l=r(861403),c=r(706092),u=r(712278);function d({requestKey:e,request:t,isUc:r,enabled:n=!0,owner:i,permissionsQueryData:o,children:s}){if(r)return(0,a.Y)(p,{enabled:n,requestKey:e,request:t,children:s});return(0,a.Y)(m,{enabled:n,isUc:r,request:t,owner:i,permissionsQueryData:o,children:s})}function p({requestKey:e,request:t,enabled:r=!0,children:c}){let{data:u,error:d,isLoading:m,isError:f}=(0,i.ok)(e,(0,o.m)(t),{enabled:r}),g=(0,l.b)(d),h=f?g:void 0,v=(0,n.useMemo)(()=>({data:u,isLoading:m,error:h}),[u,m,h]);return(0,a.Y)(s.se,{response:v,children:c})}function m({children:e,request:t,owner:r,isUc:n,enabled:i,permissionsQueryData:l}){let d=(0,u.J)({isUc:n,owner:r,permissionsQueryData:l,enabled:i}),p=new c.w({...d,request:(0,o.m)(t)});return(0,a.Y)(s.gc.Provider,{value:p,children:e})}},681134:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(141078);let n=(0,a.J1)`
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
`;function i(){return(0,a.n_)(n)}},683003:(e,t,r)=>{r.d(t,{B:()=>s});var a=r(610435),n=r(545251),i=r(497895),o=r(174541);let s=({children:e,...t})=>{let{theme:r}=(0,i.wn)(),{isInsideDialogCombobox:s}=(0,n.w)();if(!s)throw Error("`DialogComboboxFooter` must be used within `DialogCombobox`");return(0,a.Y)("div",{...t,css:(0,o.UA)(r),children:e})}},691069:(e,t,r)=>{r.d(t,{C:()=>c});var a=r(610435);r(692738);var n=r(497895),i=r(465082),o=r(26971),s=r(777517),l=r(342411);let c=({kind:e,disabled:t,style:r})=>{let{theme:c}=(0,n.wn)(),u=(0,l.tz)(),d={alignItems:"center",background:t?void 0:c.colors.backgroundSecondary,borderRadius:30,color:t?c.colors.actionDisabledText:c.colors.textSecondary,display:"flex",fontSize:20,height:30,justifyContent:"center",width:30};switch(e){case"user":return(0,a.Y)(i.A,{title:u.formatMessage({id:"9vv8Gs",defaultMessage:"User"}),css:r||d});case"group":return(0,a.Y)(o.A,{title:u.formatMessage({id:"Qzw3C/",defaultMessage:"Group"}),css:r||d});case"serviceprincipal":return(0,a.Y)(s.A,{title:u.formatMessage({id:"QrVB43",defaultMessage:"Service Principal"}),css:r||d});default:return null}}},694205:(e,t,r)=>{r.d(t,{v:()=>o});var a=r(160603),n=r(302118);function i(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function o(e,t){return(0,a.useQuery)(["list_external_locations",t],()=>{var e;return(e=function*(){return yield n.k.getExternalLocations(t)},function(){var t=this,r=arguments;return new Promise(function(a,n){var o=e.apply(t,r);function s(e){i(o,a,n,s,l,"next",e)}function l(e){i(o,a,n,s,l,"throw",e)}s(void 0)})})()},e)}},703140:(e,t,r)=>{r.d(t,{C:()=>o});var a=r(759901),n=r.n(a);r(649917);var i=r(834405);class o{static getTimeZone(){return n().tz.guess()}static formatTimeZone(e){let t=n().tz.zone(o.getTimeZone());if(t){let r=e instanceof Date?e.getTime():Date.now();return t.abbr(r)||""}return""}static formatDate(e,t={omitSeconds:!1}){let r=t.omitSeconds?"YYYY-MM-DD HH:mm":"YYYY-MM-DD HH:mm:ss";return n()(e).format(r)}static formatDurationAgo(e){return n()(e).fromNow()}static formatTimestamp(e,t,r){if(!e)return"";if(t)return(0,i.r6)(e,t,r);let a=new Date(e);return o.formatDate(a)+" "+o.formatTimeZone(a)}static formatTimestampNicely(e,t,r){if(!e)return"";if(t)return(0,i.r6)(e,t,r);let a=new Date(e);return n().tz(a,o.getTimeZone()).format("MMM D YYYY, HH:mm A")+" "+o.formatTimeZone(a)}static formatTimestampShort(e,t){if(!e)return"";if(t)return t.formatDate(e,{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"});let r=new Date(e);return n().tz(r,o.getTimeZone()).format("MMM DD, HH:mm")}static formatDateFromTimestamp(e,t){if(!e)return"";if(t)return t.formatDate(e,{month:"short",day:"2-digit"});let r=new Date(e);return n().tz(r,o.getTimeZone()).format("MMM DD")}static formatDuration(e,t){return(e<0?"-":"")+n().duration(e,"seconds").format(t||"h[h] m[m] s[s]")}static factorMs(e){if(e%36e5==0)return{time:e/36e5,unit:36e5,label:"hour"};if(e%6e4==0)return{time:e/6e4,unit:6e4,label:"min"};if(e%1e3==0)return{time:e/1e3,unit:1e3,label:"sec"};return{time:e,unit:1,label:"ms"}}}},706092:(e,t,r)=>{r.d(t,{w:()=>o});var a=r(598296),n=r(660618);let i=e=>({isLoading:!1,response:{authorized:e}});class o{data;constructor(e){this.data=e}evaluateCreateTableAction(e){return i(!0)}authorize(e){let{isLoading:t,isError:r,isOwner:o,isMetastoreAdmin:s,errorString:l,request:c,permissionsQueryData:u}=this.data;if(t)return{isLoading:!0,response:void 0};{if(r)return{isLoading:!1,response:{authorized:!1},error:l};if(e.hasOwnProperty("evaluate"))return e.evaluate(this);let t="string"==typeof e?e:JSON.stringify(e),d=c.actions[t];if(!d)return i(!1);{if(u?.catalog===n.lx)return i(!0);let t=d.action_name;if(["CreateCatalog","CreateStorageCredential","CreateExternalLocation"].includes(t))return i(s);if(t.match(/Set(\w+)Permission/g))if(o||!u)return i(o);else{let e;return e=u,{isLoading:!1,response:{authorized:!1,unmet_conditions:[{code:a.yh.NOT_OWNER,securable_type:e.objectType,securable_full_name:[e.catalog,e.database,e.entity].join(".")}]}}}if(t.match(/CreateTable/g))return this.evaluateCreateTableAction(e);else return i(!0)}}}}},708396:(e,t,r)=>{r.d(t,{R:()=>s});var a=r(441535),n=r(141078),i=r(641760);let o=(0,n.J1)`
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
`;function s({type:e,fullName:t,skip:r=!1}){let l=(0,a.W)("databricks.fe.rfa.skipNonUcSecurables",!1),c=t.split(".")[0],u=l&&!(0,i.jN)({catalog:c}),{data:d,loading:p,error:m}=(0,n.IT)(o,{variables:{fullName:t,type:e},skip:!e||r||u});return{isLoading:p,isEnabled:!u&&d?.requestforaccessGetStatus?.isEnabled,error:m}}},712278:(e,t,r)=>{r.d(t,{J:()=>u});var a=r(767280),n=r(279402),i=r(181440),o=r(43680),s=r(660618),l=r(861403),c=r(641760);function u({isUc:e,owner:t,permissionsQueryData:r,enabled:d}){let{isUnityCatalogActive:p}=(0,n.useDataExplorerContext)(),m=(0,o._A)({enabled:d&&p}),f=(0,a.VC)(),{isDataSourceReady:g}=(0,i.useDataExplorerDataSourceContext)(),h=(0,o.mm)(r||{},{enabled:d&&r&&(e||g&&r.catalog!==s.lx)}),v=(0,l.b)(h?.error),b=(0,l.b)(m?.error),y=(0,l.b)(f?.error),E=h?.error&&(0,c.xk)(v),S=e?function(e,t){if(!e||!t)return!1;{let r=t?.groups?.map(e=>e.display)||[],a=t?.userName===e,n=r.includes(e);return a||n}}(t,f?.data):h.isSuccess,[C,A]=[[m.isError,b],[f.isError,y],[h.isError&&!E,v]].find(([e,t])=>e)||[!1,""];return{isLoading:m.isLoading||h.isLoading||f.isLoading,isError:C,legacyPermissions:h.data||[],isOwner:S,isMetastoreAdmin:m.data?.is_metastore_admin||!1,errorString:A,permissionsQueryData:r}}},731547:(e,t,r)=>{r.d(t,{a:()=>d});var a=r(610435),n=r(692738),i=r(497895),o=r(382908),s=r(342411),l=r(283009),c=r(180864);function u({className:e,children:t,onClick:r,copyTooltip:n,copyText:o}){let{theme:l}=(0,i.wn)(),c=(0,s.tz)(),d=l.colors.actionDefaultBackgroundHover,p=n??c.formatMessage({id:"vgZBTO",defaultMessage:"Copy {copyText} to clipboard"},{copyText:o});return(0,a.Y)("span",{onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),r())},role:"button",tabIndex:0,"aria-label":p,className:e,css:{display:"inline-block",cursor:"pointer",padding:`${l.spacing.xs}px ${l.spacing.sm}px`,margin:`0 -${l.spacing.sm}px`,borderRadius:l.borders.borderRadiusSm,transition:"background-color 200ms ease",userSelect:"none","&:hover, &:focus-visible":{backgroundColor:d},"&:hover .copyable-icon, &:focus-visible .copyable-icon":{opacity:1}},onClick:r,children:t})}function d({children:e,className:t,clickToCopy:r=!1,componentId:s,copyPlacement:p="center",copyText:m,copyTooltip:f,onCopy:g,stretch:h=!1}){let{theme:v}=(0,i.wn)(),b=m??e,{actionIcon:y,copy:E}=(0,c.L)(b,f,g),S=n.useCallback(e=>({display:e?"inline":void 0,wordBreak:"break-word",overflowWrap:"anywhere"}),[]),C=n.useCallback(e=>()=>{let t=e?v.spacing.sm:v.spacing.md,r=e?0:v.spacing.sm;return{display:e?"inline-flex":"flex",alignItems:"center",alignSelf:e||"top"!==p?void 0:"flex-start",margin:`${r}px ${r}px ${r}px ${t}px`,transition:"opacity 200ms ease",color:v.colors.textSecondary,flexShrink:0,verticalAlign:e?"middle":void 0,opacity:0}},[p,v]);if(r){let r="inline"===p,n=C(r);return(0,a.Y)(u,{className:t,onClick:E,copyTooltip:f,copyText:b,children:r?(0,a.FD)("div",{children:[(0,a.Y)(o.o.Text,{css:S(!0),children:e}),(0,a.Y)("span",{className:"copyable-icon","data-testid":"copyable-icon",css:n,children:y})]}):(0,a.FD)("span",{css:{display:"flex",alignItems:"top"===p?"flex-start":"center",flexWrap:"nowrap",width:h?"100%":"auto",maxWidth:"100%"},children:[(0,a.Y)("span",{css:{display:"flex",alignItems:"center",minWidth:0,flex:"1 1 auto"},children:(0,a.Y)(o.o.Text,{css:S(!1),children:e})}),(0,a.Y)("span",{className:"copyable-icon","data-testid":"copyable-icon",css:n,children:y})]})})}return(0,a.FD)("span",{css:{display:"flex",alignItems:"stretch"},children:[(0,a.Y)("span",{css:{display:"flex",alignItems:"center",width:h?"100%":void 0,overflow:"hidden"},children:(0,a.Y)(o.o.Text,{css:{width:h?"100%":void 0,maxWidth:"100%"},children:e})}),(0,a.Y)("span",{css:{display:"flex",alignItems:"center"===p?"center":"start",marginLeft:v.spacing.sm},children:(0,a.Y)(l.a,{componentId:s,copyText:b,copyTooltip:f,onCopy:g})})]})}},733052:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(610435);r(692738);var n=r(802582);function i({primary:e=!1,srSilent:t=!1,children:r,placement:o,title:s,dataTestId:l,arrowPointAtCenter:c,...u}){return(0,a.Y)(n.p,{silenceScreenReader:t,useAsLabel:e,placement:o,title:s,dataTestId:l,arrowPointAtCenter:c,...u,children:r})}},733337:(e,t,r)=>{r.d(t,{Ky:()=>u,Ur:()=>d,nr:()=>c});var a=r(583971),n=r(641760),i=r(441535),o=r(19123);function s(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function l(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){s(i,a,n,o,l,"next",e)}function l(e){s(i,a,n,o,l,"throw",e)}o(void 0)})}}function c(e,t){return l(function*(){let r=yield(0,o.h)(e,t);if(!r.ok){let t;try{t=yield r.json()}catch(e){}throw new n.XD(e,r,t)}return yield r.json()})()}function u(e,t,r,n,o){return l(function*(){let s,l={response:[],next_page_token:void 0},c=(0,i.W)("databricks.fe.uc.defaultPaginationWindowSize",0),u=void 0!==n?n:c;do{let n=r?.useCentralPagination?{"pagination_context.max_results":u,...r?.queryParameters}:{[o??"max_results"]:u,...r?.queryParameters};s&&(r?.useCentralPagination?n["pagination_context.page_token"]=s:n.page_token=s);let i=new URLSearchParams(n),c=`${e}?${i}`;try{let e=yield(0,a.Ri)(c,r);if(!e)break;let n=yield t(e);n&&l.response.push(...n),r?.useCentralPagination?(l.next_page_token=e.pagination?.next_page_token,s=e.pagination?.next_page_token):(l.next_page_token=e.next_page_token,s=e.next_page_token)}catch(e){throw e}}while(s);return l.response})()}function d(e){return e instanceof n.XD&&404===e.response.status&&"METASTORE_DOES_NOT_EXIST"===e.response.data.error_code}},733845:(e,t,r)=>{r.d(t,{O:()=>o});var a=r(686560),n=r(689262),i=r(441535);function o(){let e=(0,n.b)("unityCatalogServiceEnabled",(0,a.d)("unityCatalogServiceEnabled",!1),()=>(0,i.W)("databricks.unitycatalog.enableUnityCatalogService",!1)),t=(0,a.d)("isMetastoreInstalled_new",!1);return e&&t}},745268:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(651139);function n(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}let i={get(){var e;return(e=function*(e=["id","userName","displayName","groups"]){let t=yield a.pY.get(`/ajax-api/2.0/preview/scim/v2/Me?attributes=${e.join()}`);return(t?.data||t)??null},function(){var t=this,r=arguments;return new Promise(function(a,i){var o=e.apply(t,r);function s(e){n(o,a,i,s,l,"next",e)}function l(e){n(o,a,i,s,l,"throw",e)}s(void 0)})}).apply(this,arguments)}}},745444:(e,t,r)=>{r.d(t,{j:()=>u});var a=r(298280),n=r.n(a),i=r(692738),o=r(919505),s=r(290766),l=r(572382),c=r(441535);function u({enableLiveUpdates:e=!0,fetchPolicy:t="cache-and-network",useMinimalQuery:r=!1,isEnabled:a=!0}={}){let d=(0,c.W)("databricks.fe.redash.listPollingInterval",5e3),[p,m]=(0,i.useState)(()=>(0,c.W)("databricks.fe.redash.enableWarehouseEventSubscription",!1)),f=e&&p&&!r,{data:g,loading:h,refetch:v}=(0,s.T)({pollInterval:e&&!f?d:0,fetchPolicy:t,nextFetchPolicy:f?"cache-first":void 0,skip:!a},r);return(0,o.A)({skip:!f||!a,refetchLakehouseStates:v,setEnableSubscription:m}),{loaded:!h,lakehouseMap:(0,i.useMemo)(()=>n()((0,l.kc)(g?.lakehouses),e=>e?.id),[g?.lakehouses])}}},747206:(e,t,r)=>{r.d(t,{E3:()=>d,Hp:()=>a,IM:()=>u,QT:()=>y,Th:()=>p,U3:()=>h,V6:()=>c,db:()=>n,ff:()=>o,n5:()=>g,ps:()=>i,sI:()=>v,sZ:()=>b,xU:()=>m,xh:()=>l,yX:()=>f});let a=e=>{let t=e.replaceAll(".","/");return`/explore/data/${t}`},n=e=>`/explore/data/${encodeURIComponent(e||"")}`,i=(e,t)=>`/explore/data/${encodeURIComponent(t||"")}/${encodeURIComponent(e)}`,o=(e,t,r)=>`/explore/data/${encodeURIComponent(r||"")}/${encodeURIComponent(t||"")}/${encodeURIComponent(e)}`;var s,l=((s=l||{}).OVERVIEW="overview",s.COLUMNS="columns",s.SAMPLE="sample",s.DETAILS="details",s.PERMISSIONS="permissions",s.POLICIES="policies",s.HISTORY="history",s.LINEAGE="lineage",s.INSIGHTS="insights",s.QUALITY="quality",s.VOLUMES="volumes",s.MODELS="models",s.FUNCTIONS="functions",s.SCHEMAS="schemas",s.ASSETS="assets",s.WORKSPACES="workspaces",s.REFRESH="refresh",s.LIBRARY_ALLOWLIST="library_allowlist",s.USAGE="usage",s.SECURITY="security",s.TASKS="tasks",s.COLLABORATORS="collaborators",s.PREVIEW="preview",s.RUNS="runs",s.FILES="files",s);let c=(e,t,r,a)=>`/explore/data/${encodeURIComponent(a||"")}/${encodeURIComponent(r||"")}/${encodeURIComponent(e)}?activeTab=${t}`,u=(e,t,r)=>`/explore/data/volumes/${encodeURIComponent(r||"")}/${encodeURIComponent(t||"")}/${encodeURIComponent(e)}`,d=(e,t,r)=>`/explore/data/functions/${encodeURIComponent(r||"")}/${encodeURIComponent(t||"")}/${encodeURIComponent(e)}`,p=(e,t,r)=>`/explore/data/models/${encodeURIComponent(r||"")}/${encodeURIComponent(t||"")}/${encodeURIComponent(e)}`,m=(e,t,r,a)=>`/explore/data/models/${encodeURIComponent(a||"")}/${encodeURIComponent(r||"")}/${encodeURIComponent(e)}/version/${t}`,f=(e,t)=>`/explore/data/notebooks/${encodeURIComponent(t||"")}/${encodeURIComponent(e)}`,g=e=>`/explore/locations/${encodeURIComponent(e)}`,h=e=>`/explore/connections/${encodeURIComponent(e)}`,v=e=>`/explore/external-metadata/${encodeURIComponent(e)}`,b=()=>"/governance/metastore",y=(e,t,r)=>`/explore/data/secrets/${encodeURIComponent(r||"")}/${encodeURIComponent(t||"")}/${encodeURIComponent(e)}`},751097:(e,t,r)=>{r.d(t,{P:()=>i,x:()=>o});var a,n=r(696514),i=((a={}).DONE="done",a.CANCELLED="cancelled",a);let o=(0,n.fH)("Filebrowser::SelectLocation")},752634:(e,t,r)=>{r.d(t,{f:()=>s});var a=r(610435),n=r(673655),i=r(429608);let o=8,s=({gutter:e=o,...t})=>(0,a.Y)(i.wC,{children:(0,a.Y)(n.A,{gutter:e,...t})})},759838:(e,t,r)=>{r.d(t,{Hi:()=>i,QX:()=>o,xT:()=>s});var a=r(250912),n=r.n(a);function i(e,t="/sql"){var r;if(/^(https?:\/\/|blob:|mailto:)/.test(e))return e;return(r=function(...e){return e.map(e=>n()(e,"/")).join("/")}(t,e)).startsWith("/")?r:`/${r}`}let o=/^(?!.*(\.| |\/)).*/;function s(e,t){if(!e)return"";let r=e.endsWith("/");return e+(t?r?t:`/${t}`:"")}},767280:(e,t,r)=>{r.d(t,{Cw:()=>v,JZ:()=>f,Pj:()=>E,VC:()=>h,jB:()=>g,jZ:()=>y,u5:()=>b});var a=r(692738),n=r(994393),i=r(726338),o=r(881601),s=r(103341),l=r(988512),c=r(444433),u=r(181440),d=r(745268);function p(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function m(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){p(i,a,n,o,s,"next",e)}function s(e){p(i,a,n,o,s,"throw",e)}o(void 0)})}}function f(e,t){let r=(0,c.b)();return(0,n.useMutation)(a=>m(function*(){if((0,u.isUnifiedDataSource)(t))return yield(0,s.M)({dataSource:t,queryString:a,queryName:e});return yield(0,i.My)(t,a,e,r)})())}function g(e,t){return(0,n.useMutation)(r=>m(function*(){return yield o.c.save({name:e,is_draft:!0,data_source_id:t,query:r})})())}function h(){let e=(0,a.useCallback)(()=>m(function*(){return d.A.get()})(),[]);return(0,n.useQuery)("scim_me",e)}function v(e,t,r,o,d,p){let f=(0,c.b)();return(0,n.useQuery)(["data_explorer_history",e,t,r,p],(0,a.useCallback)(()=>m(function*(){if((0,u.isUnifiedDataSource)(d))return yield(0,s.M)({dataSource:d,queryString:(0,l.y)(d).describeHistorySQL(t,r,e,p),queryName:"data_explorer_history"});return yield(0,i.My)(d,(0,l.y)(d).describeHistorySQL(t,r,e,p),"data_explorer_history",f)})(),[d,t,r,e,p,f]),{enabled:o,refetchOnWindowFocus:!1})}function b({dataSource:e,catalog:t,database:r,table:o,options:d}){let p=(0,c.b)();return(0,n.useQuery)(["describe_detail",t,r,o],(0,a.useCallback)(()=>m(function*(){if((0,u.isUnifiedDataSource)(e))return yield(0,s.M)({dataSource:e,queryString:(0,l.y)(e).generateDescribeDetailSQL(r,o,t),queryName:"describe_detail"});return yield(0,i.My)(e,(0,l.y)(e).generateDescribeDetailSQL(r,o,t),"describe_detail",p)})(),[e,r,o,t,p]),d)}let y="show_create_table";function E({dataSource:e,catalog:t,database:r,table:i,enabled:o=!0}){return(0,n.useQuery)([y,t,r,i],(0,a.useCallback)(()=>m(function*(){return yield(0,s.M)({dataSource:e,queryString:(0,l.y)(e).generateShowCreateTableSql(t,r,i),queryName:y})})(),[t,e,r,i]),{enabled:o})}},768622:(e,t,r)=>{r.d(t,{Jq:()=>y,bb:()=>S});var a=r(610435),n=r(956935),i=r(802558),o=r.n(i),s=r(91958),l=r.n(s),c=r(692738),u=r(497895),d=r(194901),p=r(161330),m=r(174541),f=r(574132),g=r(639712);let h={paddingTop:2},v={width:16,flexShrink:0},b={display:"flex"},y=l()((e,t,r)=>(0,n.AH)({...r&&{pointerEvents:"none",color:e.colors.actionDisabledText},...t&&{background:e.colors.actionTertiaryBackgroundHover}}),(e,t,r)=>`${(0,g.H6)(e)}|${t}|${!!r}`),E=l()((e,t)=>(0,n.AH)({marginLeft:e.spacing.sm,fontSize:e.typography.fontSizeBase,fontStyle:"normal",fontWeight:400,cursor:"pointer",overflow:"hidden",wordBreak:"break-word",..."ellipsis"===t&&{textOverflow:"ellipsis",whiteSpace:"nowrap"}}),(e,t)=>`${(0,g.H6)(e)}|${t}`),S=(0,c.forwardRef)(({item:e,index:t,comboboxState:r,textOverflowMode:n="multiline",isDisabled:i,disabledReason:s,hintContent:l,onClick:g,children:S,...C},A)=>{let{selectedItem:I,highlightedIndex:T,getItemProps:w,isOpen:x}=r,_=o()(I,e),R=T===t,{theme:k}=(0,u.wn)(),L=(0,c.useRef)(null);(0,c.useImperativeHandle)(A,()=>L.current);let{onClick:M,...P}=w({item:e,index:t,disabled:i,onMouseUp:e=>{e.stopPropagation(),C.onMouseUp?.(e)},ref:L});return(0,c.useEffect)(()=>{if(x&&T===t&&L.current){let e=L.current.closest("ul");if(!e)return;let t=e.scrollTop,r=e.scrollTop+e.clientHeight,a=L.current.offsetTop,n=L.current.offsetTop+L.current.clientHeight;(a<t||n>r)&&L.current?.scrollIntoView({block:"nearest"})}},[T,t,x,L]),(0,a.FD)("li",{role:"option","aria-selected":_,"aria-disabled":i,onClick:e=>{g?.(e),M?.(e)},css:[(0,m.RB)(k),y(k,R,i)],...P,...C,children:[_?(0,a.Y)(d.A,{css:h}):(0,a.Y)("div",{style:v}),(0,a.FD)("label",{css:E(k,n),children:[i&&s?(0,a.FD)("div",{css:b,children:[(0,a.Y)("div",{children:S}),(0,a.Y)("div",{css:(0,m.eO)(k),children:(0,a.Y)(p.I,{componentId:"typeahead-combobox-menu-item-disabled-reason-info-tooltip",side:"right",content:s})})]}):S,(0,a.Y)(f.y,{disabled:i,children:l})]})]})});S.defaultProps={_type:"TypeaheadComboboxMenuItem"}},775041:(e,t,r)=>{r.d(t,{Jq:()=>h,OI:()=>w,wW:()=>v});var a=r(692738),n=r(342411),i=r(302409),o=r(77240),s=r(581716);let l="18.0",c=["13.3","14.3"],u="16.1",d="16.1",p="16.3.1",m="18.0",f="18.2",g="18.2";function h(e){return e?.match(/(?:\d+\.)+x(?=-)/)?.[0]||""}function v(e,t){return e.localeCompare(t,void 0,{numeric:!0})>=0}function b(e){return e?.includes("FABRIC")}function y(e){return e?.includes("HIVE_METASTORE")}function E(e,t){return e?.includes("ORACLE")||t===s.pu.ORACLE}function S(e,t){return e?.includes("TERADATA")||t===s.pu.TERADATA}function C(e,t){return e?.includes("SFTP")||t===s.pu.SFTP}function A(e,t){return e?.includes("PALANTIR")||t===s.pu.PALANTIR}function I(e,t){return e?.includes("BIGLAKE")||t===s.pu.BIGLAKE}function T(e,t){return e?.includes("GOOGLE_CLOUD_LAKEHOUSE")||t===s.pu.GOOGLE_CLOUD_LAKEHOUSE}function w(){let e=(0,n.tz)(),t=(0,a.useCallback)(({computeResource:e,requiredVersion:t,securableKind:r,connectionType:a})=>{if(function(e){let{clusterId:t,preferInteractiveServerless:r}=e;if(r)return!0;return!!t&&null!==t.toLowerCase().match(/[0-9a-fA-F]{16}/)}(e))return!0;if(e.type===o.ol.CLUSTER){let{sparkVersion:n,accessMode:o}=e;if(!(0,i.QC)({access_mode:o??void 0},!0))return!1;let s=h(n);if(b(r))return v(s,l);if(y(r))return c.some(e=>s.startsWith(e))||v(s,"15.0");if(E(r,a))return v(s,u);else if(S(r,a))return v(s,d);else if(C(r,a))return v(s,p);else if(A(r,a))return v(s,m);else if(I(r,a))return v(s,f);else if(T(r,a))return v(s,g);return v(s,t??"13.1")}if(e.type===o.ol.REDASH_SQL_WAREHOUSE)return"PRO"===e.warehouseType;return!1},[]),r=(0,a.useCallback)(e=>{if(e.type===o.ol.REDASH_SQL_WAREHOUSE)return"PRO"===e.warehouseType&&!0===e.enableDatabricksCompute;return!1},[]),s=(0,a.useCallback)(({isBrickstoreOnlineView:e,dataSource:t})=>e&&t?.status.isReady&&!r(t),[r]),w=(0,a.useCallback)(({isForeignData:e,securableKind:r,dataSource:a})=>e&&a?.status.isReady&&!t({computeResource:a,securableKind:r}),[t]),x=e.formatMessage({id:"FOz8nd",defaultMessage:"Data may be out of date"}),_=e.formatMessage({id:"8rFek8",defaultMessage:"Please use cluster with DBR version 13.1 and above or Pro/Serverless warehouse to refresh the data"}),R=e.formatMessage({id:"Ole8Yw",defaultMessage:"Please use cluster with DBR version 13.3, 14.3, or 15.0 and above or Pro/Serverless warehouse to refresh the data"}),k=(0,a.useCallback)(t=>e.formatMessage({id:"Q5K+Zr",defaultMessage:"Please use cluster with DBR version {minVersion} and above or Pro/Serverless warehouse to refresh the data"},{minVersion:t}),[e]),L=e.formatMessage({id:"PNwB4O",defaultMessage:"Foreign data requires compute. Please use cluster with DBR version 13.1 and above or Pro/Serverless warehouse"}),M=e.formatMessage({id:"GphsgR",defaultMessage:"Please use cluster with DBR version 13.1 and above or Pro/Serverless warehouse"}),P=e.formatMessage({id:"2JadI/",defaultMessage:"Please use cluster with DBR version 13.3, 14.3, or 15.0 and above or Pro/Serverless warehouse"}),O=e.formatMessage({id:"u6wa/l",defaultMessage:"Foreign data requires compute. Please use cluster with DBR version 13.3, 14.3, or 15.0 and above or Pro/Serverless warehouse"}),D=(0,a.useCallback)(t=>e.formatMessage({id:"zVN9+v",defaultMessage:"Foreign data requires compute. Please use cluster with DBR version {minVersion} and above or Pro/Serverless warehouse"},{minVersion:t}),[e]),$=(0,a.useCallback)((e,t)=>{if(b(e))return D(l);if(y(e))return O;if(E(e,t))return D(u);if(S(e,t))return D(d);if(C(e,t))return D(p);else if(A(e,t))return D(m);else if(I(e,t))return D(f);else if(T(e,t))return D(g);return L},[D,L,O]);return{isComputeMeetQueryFedRequirements:t,showUnqualifiedComputeWarning:w,showOnlineViewUnqualifiedComputeWarning:s,ucCacheNonEmptyWarning:x,getUcCacheNonEmptyWarningDescription:(0,a.useCallback)(e=>{if(b(e))return"";if(y(e))return R;if(E(e))return k(u);if(S(e))return k(d);if(C(e))return k(p);else if(A(e))return k(m);else if(I(e))return k(f);else if(T(e))return k(g);return _},[k,_,R]),unqualifiedMessage:M,unqualifiedMessageForHMS:P,getUnqualifiedComputeWarning:$}}},777517:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 0a.75.75 0 0 1 .75.75V3h5.5a.75.75 0 0 1 .75.75V6h.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75H15v2.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V12H.75a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 .75 6H1V3.75A.75.75 0 0 1 1.75 3h5.5V.75A.75.75 0 0 1 8 0M2.5 4.5v9h11v-9zM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6.25 2.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="RobotIcon";let l=s},786504:(e,t,r)=>{r.d(t,{Pu:()=>l,gc:()=>o,se:()=>s});var a=r(610435),n=r(692738);class i{data;constructor(e){this.data=e}authorize(e){if(this.data.isLoading)return{isLoading:!0,response:void 0};if(this.data.error)return{isLoading:!1,response:{authorized:!1},error:this.data.error};if("string"==typeof e)return{isLoading:!1,response:this.data.data?.actions[e]};if("evaluate"in e)return e.evaluate(this);return{isLoading:!1,response:this.data.data?.actions[JSON.stringify(e)]}}}let o=(0,n.createContext)({authorize:e=>({isLoading:!0,response:void 0})});function s({children:e,response:t}){return(0,a.Y)(o.Provider,{value:new i(t),children:e})}function l(){return(0,n.useContext)(o)}},787473:(e,t,r)=>{r.d(t,{o:()=>l});var a=r(610435);r(692738);var n=r(497895),i=r(382908),o=r(126927),s=r(342411);function l({href:e,style:t,componentId:r}){let c=(0,s.tz)(),{theme:u}=(0,n.wn)();return(0,a.FD)(i.o.Link,{style:{paddingLeft:u.spacing.xs,fontWeight:u.typography.typographyRegularFontWeight,...t},href:e,target:"_blank",componentId:r??"codegen_web-shared_src_metastore_components_learnmorelink.tsx_22",children:[c.formatMessage({id:"ag6OMp",defaultMessage:"Learn more"}),(0,a.Y)(o.A,{style:{marginLeft:u.spacing.xs,verticalAlign:"text-top"}})]})}},800205:(e,t,r)=>{r.d(t,{h:()=>c});var a=r(441535),n=r(733337),i=r(660618),o=r(595615),s=r(302118);function l(e,t,r){return(0,o.AO)({queryKey:["data_explorer_samples_schema",t],queryFn:()=>(0,n.nr)(`${i.bY}/schemas/${encodeURIComponent(e)}.${encodeURIComponent(t)}?include_browse=true`),...r})}function c(e){var t;let r=(0,a.W)("databricks.fe.marketplace.enableNewUCBasedSamplesUI",!1),n=(t={enabled:e===i.lx&&r,keepPreviousData:!0},(0,o.AO)({queryKey:["data_explorer_samples_catalog_details"],queryFn:function(){return s.k.getCatalogDetails(i.lx)},...t})),c=l(e,"nyctaxi",{enabled:e===i.lx&&r,keepPreviousData:!0}),u=l(e,"tpch",{enabled:e===i.lx&&r,keepPreviousData:!0});return e===i.lx&&n.isSuccess&&c.isSuccess&&u.isSuccess&&r}},804723:(e,t,r)=>{r.d(t,{S:()=>l});var a=r(610435),n=r(5421),i=r(497895),o=r(174541);let s=({children:e,...t})=>{let{theme:r}=(0,i.wn)(),{isInsideTypeaheadCombobox:s}=(0,n.T)();if(!s)throw Error("`TypeaheadComboboxFooter` must be used within `TypeaheadComboboxMenu`");return(0,a.Y)("div",{...t,css:(0,o.UA)(r),children:e})};s.defaultProps={_type:"TypeaheadComboboxFooter"};let l=s},811133:(e,t,r)=>{r.d(t,{Cw:()=>p,IV:()=>d});var a=r(452137),n=r.n(a),i=r(29824),o=r(641760),s=r(302118),l=r(412836);function c(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function u(){return({objectType:e,metastore:t,catalog:r,database:a,table:l,credential:u,location:d,connection:p,permissionChanges:m,updateType:f,cleanRoom:g,externalMetadata:h})=>{var v;return(v=function*(){n()((0,o.jN)({catalog:r,objectType:e}),`Object type ${e} is not a valid Unity Catalog securable type`);let c={changes:m.map(e=>{if("add"===f)return{principal:e.Principal,remove:[],add:e.ActionTypes};return{principal:e.Principal,remove:e.ActionTypes,add:[]}})},v="";switch(e){case i.an.STORAGE_CREDENTIAL:case i.an.CREDENTIAL:n()(void 0!==u,"Credential must be set"),v=u;break;case i.an.EXTERNAL_LOCATION:n()(void 0!==d,"Location must be set"),v=d;break;case i.an.CONNECTION:n()(void 0!==p,"Location must be set"),v=p;break;case i.an.METASTORE:n()(void 0!==t,"Metastore must be set"),v=t;break;case i.an.CATALOG:n()(void 0!==r,"Catalog must be set"),v=r;break;case i.an.DATABASE:n()(void 0!==a,"Schema must be set"),v=`${r}.${a}`;break;case i.an.CLEAN_ROOM:n()(void 0!==g,"Clean room must be set"),v=g;break;case i.an.EXTERNAL_METADATA:n()(void 0!==h,"External metadata must be set"),v=h;break;case i.an.TABLE:default:n()(void 0!==a,"Schema must be set"),n()(void 0!==l,"Table must be set"),v=`${r}.${a}.${l}`}return s.k.setPermissions(e,v,c)},function(){var e=this,t=arguments;return new Promise(function(r,a){var n=v.apply(e,t);function i(e){c(n,r,a,i,o,"next",e)}function o(e){c(n,r,a,i,o,"throw",e)}i(void 0)})})()}}function d(){let e=u();return(0,l.n_)(e)}function p(){return(0,l.n_)(function(e){let t=u();return Promise.all(e.map(e=>t(e)))})}},814510:(e,t,r)=>{let a;r.d(t,{Q:()=>d});var n=r(610435),i=r(956935),o=r(930125),s=r(429608),l=r(497895),c=r(955210),u=r(123252);let d=((a=({dangerouslySetAntdProps:e,includeTrailingCaret:t=!0,...r})=>{let{theme:d,classNamePrefix:p}=(0,l.wn)(),m=`.${p}-breadcrumb-separator`,f=(0,i.AH)({"span:last-child a":{color:d.colors.primary,":hover, :focus":{color:"#2272B4"}},a:{"&:focus-visible":{outlineColor:`${d.colors.actionDefaultBorderFocus} !important`,outlineStyle:"auto !important"}},[m]:{fontSize:d.general.iconFontSize,"& .anticon":{fontSize:13}},"& > span":{display:"inline-flex",alignItems:"center"}});return(0,n.Y)(s.wC,{children:(0,n.FD)(o.A,{...(0,u.VG)(),separator:(0,n.Y)(c.A,{}),...r,...e,css:(0,i.AH)((0,s.Cx)(d.options.enableAnimation),f),children:[r.children,t&&r.children&&(0,n.Y)(a.Item,{children:" "})]})})}).Item=o.A.Item,a.Separator=o.A.Separator,a)},814947:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",d:"m11.5.94 4.03 4.03-1.06 1.06-2.22-2.22V10h-1.5V3.81L8.53 6.03 7.47 4.97zM1 4.5h4V6H1zM1 12.5h10V14H1zM8 8.5H1V10h7z"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="SortAscendingIcon";let l=s},820097:(e,t,r)=>{r.d(t,{H:()=>i,Z:()=>o});var a,n=r(696514),i=((a={}).DONE="done",a.CANCELLED="cancelled",a);let o=(0,n.fH)("Filebrowser::CloneRedashToLakeview")},829845:(e,t,r)=>{r.d(t,{BC:()=>g,E$:()=>y,PT:()=>v,Th:()=>b,UA:()=>E,dG:()=>p,rD:()=>f,tg:()=>h,x3:()=>m});var a=r(820097),n=r(571739),i=r(437475),o=r(322227),s=r(242995),l=r(75036),c=r(751097),u=r(659573),d=r(311529);let p=(e,t,r,a)=>o.x.call({name:e,internalName:t,initialOpenFolderName:r,initialOpenFolderInternalName:a}),m=e=>n.z.call(e),f=e=>a.Z.call(e),g=e=>i.V1.call(e),h=(e,t,r)=>d.x.call({name:e,internalName:t,...r}),v=e=>u.v.call(e),b=e=>l.e.call(e),y=e=>s.h.call(e),E=e=>c.x.call(e)},834343:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("g",{clipPath:"url(#SearchIcon_svg__a)",children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a7 7 0 1 0 4.39 12.453l2.55 2.55 1.06-1.06-2.55-2.55A7 7 0 0 0 8 1M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0",clipRule:"evenodd"})}),(0,a.Y)("defs",{children:(0,a.Y)("clipPath",{children:(0,a.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="SearchIcon";let l=s},837334:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("path",{fill:"currentColor",d:"M7.25 7.25V4.5h1.5v2.75h2.75v1.5H8.75v2.75h-1.5V8.75H4.5v-1.5z"}),(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1 1.75A.75.75 0 0 1 1.75 1h12.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75zm1.5.75v11h11v-11z",clipRule:"evenodd"})]})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="PlusSquareIcon";let l=s},840924:(e,t,r)=>{r.d(t,{v:()=>v});var a=r(483588),n=r(441535),i=r(141078);let o=(0,i.J1)`
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
`,u=(0,i.J1)`
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
`,d=(0,i.J1)`
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
`;function f(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function g(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function h(e){var t;return(t=function*({query:e,client:t,extractResponse:r,extractToken:a,extractContinueFetching:i,extractMetadata:o,variables:s,maxResults:l,maxPages:c}){let u=[],d=s.pageToken??null,p=0,m=null,f=(0,n.W)("databricks.fe.data.defaultLineagePaginationSize",100),g=s.pageSize??f,h=l??1e3,v=c&&c>0&&Number.isFinite(c)?c:1/0,b=!0,y=0;do try{let{data:n}=yield t.query({query:e,variables:{...s,pageSize:g,pageToken:d},fetchPolicy:"network-only"});if(!n)break;let l=r(n);l&&u.push(...l),d=a(n),p=u.length,b=!i||i(n),m=o?o(m,n):m,y++}catch(e){throw e}while(d&&p<h&&y<v&&b);return{response:u,pageToken:d,metadata:m}},function(){var e=this,r=arguments;return new Promise(function(a,n){var i=t.apply(e,r);function o(e){g(i,a,n,o,s,"next",e)}function s(e){g(i,a,n,o,s,"throw",e)}o(void 0)})}).apply(this,arguments)}let v={listSecurableBySecurable:(e,t,r)=>{let i=Math.max((0,n.W)("databricks.fe.discovery.pagesToFetchAllAssets",2),1),o=t.securableResponseFilter===a.osA.ALL_ASSETS_FLATTENED?i:void 0;return h({client:e,query:u,variables:t,extractResponse:e=>e.metadatalineageapiserverListSecurableLineagesBySecurable?.lineages??[],extractToken:e=>e.metadatalineageapiserverListSecurableLineagesBySecurable?.nextPageToken??null,maxResults:o?1/0:r,maxPages:o})},listEntityBySecurable:(e,t,r)=>h({client:e,query:d,variables:t,extractResponse:e=>e.metadatalineageapiserverListEntityLineagesBySecurable?.lineages??[],extractToken:e=>e.metadatalineageapiserverListEntityLineagesBySecurable?.nextPageToken??null,maxResults:r}),listColumnLineage:(e,t)=>(function(e){var t;return(t=function*({query:e,client:t,variables:r,extractResponse:a}){try{let{data:n}=yield t.query({query:e,variables:r,fetchPolicy:"network-only"});return a(n)}catch(e){throw e}},function(){var e=this,r=arguments;return new Promise(function(a,n){var i=t.apply(e,r);function o(e){f(i,a,n,o,s,"next",e)}function s(e){f(i,a,n,o,s,"throw",e)}o(void 0)})}).apply(this,arguments)})({client:e,query:m,variables:t,extractResponse:e=>e?.metadatalineageapiserverListColumnLineages?.lineages??[]}),listExternalLineage:(e,t,r)=>h({client:e,query:p,variables:t,extractResponse:e=>e?.metadatalineageapiserverListExternalLineageRelationships?.externalLineageRelationships??[],extractToken:e=>e.metadatalineageapiserverListExternalLineageRelationships?.nextPageToken??null,maxResults:r})}},841734:(e,t,r)=>{r.d(t,{dS:()=>l,lm:()=>c,ry:()=>o});var a=r(692738),n=r(595615),i=r(302118);let o=e=>["data_explorer_catalog_details",e];function s(){return(0,a.useCallback)(({catalog:e})=>({queryFn:()=>i.k.getCatalogDetails(e)}),[])}function l(e,t){return(0,n.AO)({queryKey:o(e),queryFn:function(){return i.k.getCatalogDetails(e)},...t})}function c(){return(0,n.Ox)({queryFn:s})}},848737:(e,t,r)=>{r.d(t,{d:()=>f});var a=r(610435),n=r(692738),i=r(545251),o=r(305404),s=r(994796),l=r(497895),c=r(834343),u=r(407374),d=r(469490),p=r(569546);let m=e=>{if("string"==typeof e||"number"==typeof e)return e.toString();if(n.isValidElement(e)&&e.props.children)return n.Children.toArray(e.props.children).map(m).join(" ");return""},f=(0,n.forwardRef)(({onChange:e,onSearch:t,virtualized:r,children:f,hasWrapper:g,controlledValue:h,setControlledValue:v,rightSearchControls:b,...y},E)=>{let{theme:S}=(0,l.wn)(),{componentId:C}=(0,i.w)(),{isInsideDialogComboboxOptionList:A}=(0,o.r)(),I=`no-result-${(0,p.B)()}`,T=(0,n.useRef)(null);(0,n.useImperativeHandle)(E,()=>T.current);let[w,x]=n.useState();if(!A)throw Error("`DialogComboboxOptionListSearch` must be used within `DialogComboboxOptionList`");let _=f;if(w&&!r&&void 0===h){var R;let e;R=g?f.props.children:f,e=w.toLowerCase(),_=n.Children.map(R,t=>{if(n.isValidElement(t)){let r=t.props.__EMOTION_TYPE_PLEASE_DO_NOT_USE__?.defaultProps._TYPE??t.props._TYPE;if("DialogComboboxOptionListSelectItem"===r||"DialogComboboxOptionListCheckboxItem"===r){let r=m(t).toLowerCase(),a=t.props.value?.toLowerCase()??"";return r.includes(e)||a.includes(e)?t:null}}return t})?.filter(e=>e),g&&(_=n.cloneElement(f,{},_))}let k=(0,n.useRef)(null);(0,n.useEffect)(()=>{if(!k.current)return;let e=(0,s.aV)(k.current);if(e){let t=(0,s.kQ)(e),r=e?.[0];r&&(0,s.ed)(r,t,!1)}},[w]);let L=n.Children.toArray(g?f.props.children:f).some(e=>n.isValidElement(e)),M=g&&_?.props.children?.length||!g&&_?.length;return(0,n.useEffect)(()=>{M||T.current?.input?.setAttribute("aria-activedescendant",I)},[M,I,T.current?.input?.value]),(0,a.FD)(a.FK,{children:[(0,a.Y)("div",{ref:k,css:{padding:`${S.spacing.sm}px ${S.spacing.lg/2}px ${S.spacing.sm}px`,width:"100%",boxSizing:"border-box",position:"sticky",top:0,background:S.colors.backgroundPrimary,zIndex:S.options.zIndexBase+1},children:(0,a.FD)("div",{css:{display:"flex",flexDirection:"row",gap:S.spacing.sm},children:[(0,a.Y)(u.p,{componentId:C?`${C}.search`:"codegen_design_system_src_design_system_dialogcombobox_dialogcomboboxoptionlistsearch.tsx_173",type:"search",name:"search",ref:T,prefix:(0,a.Y)(c.A,{}),placeholder:"Search",onChange:e=>{r||x(e.target.value),v?.(e.target.value),t?.(e.target.value)},onKeyDown:e=>{(e=>{if("ArrowDown"!==e.key&&"ArrowUp"!==e.key&&"Enter"!==e.key)return;e.preventDefault();let t=(0,s.aV)(e.target);if(!t)return;let r=(0,s.kQ)(t);if("ArrowDown"===e.key||"ArrowUp"===e.key)if(r){let a=(0,s.oS)(r,"ArrowDown"===e.key?"next":"previous");if(a)(0,s.ed)(a,r,!1);else if("ArrowDown"===e.key){let e=t[0];(0,s.ed)(e,r,!1)}else if("ArrowUp"===e.key){let e=t[t.length-1];(0,s.ed)(e,r,!1)}}else{let r="ArrowDown"===e.key?t[0]:t[t.length-1];r&&(0,s.ed)(r,void 0,!1)}else"Enter"===e.key&&r&&r.click()})(e),y.onKeyDown?.(e)},value:h??w,shouldPreventFormSubmission:!0,...y}),b]})}),r?f:M&&L?(0,a.Y)("div",{"aria-live":"polite",css:{width:"100%"},children:_}):(0,a.Y)(d.i,{id:I})]})})},850723:(e,t,r)=>{r.d(t,{J:()=>o,O:()=>s});var a=r(160603),n=r(302118);function i(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}let o=["get_metastore_summary"];function s({fallback:e,useQueryOptions:t}={}){return(0,a.useQuery)({queryKey:o,queryFn:()=>{var t;return(t=function*(){return e?yield n.k.getMetastoreSummaryWithFallBack():yield n.k.getMetastoreSummary()},function(){var e=this,r=arguments;return new Promise(function(a,n){var o=t.apply(e,r);function s(e){i(o,a,n,s,l,"next",e)}function l(e){i(o,a,n,s,l,"throw",e)}s(void 0)})})()},...t})}},861403:(e,t,r)=>{r.d(t,{b:()=>m});var a=r(778529),n=r.n(a),i=r(536717),o=r.n(i),s=r(692738),l=r(342411),c=r(595338);let u=/summary:\s*(.*?)(?=,\s*data:)/s;var d=r(482921),p=r(308879);function m(e,t=!0,r=!1){let a=(0,l.tz)(),{isEnabled:i}=(0,p.L)();return(0,s.useMemo)(()=>{let s=e;if(n()(s))return;if((0,c.F0)(e)?s=function(e,t){if(t.response?.status===429)return e.formatMessage({id:"O57kaK",defaultMessage:"Error 429: Too many requests. Please wait a moment and try again. If the issue persists, consider adjusting your request frequency or reaching out to support for assistance."});{let e=t.response?.data;return e?.message??e}}(a,e):e instanceof Error&&(s=function(e,t){if(t&&e.cause&&"string"==typeof e.cause)return e.cause;if("SqlQueryError"!==e.name)return e.message;var r=e.message;let a=r.match(/Details:\s*([^,]*)/);if(a&&a.length>=0)return a[0];return r}(e,r)),o()(s)){var l=s,p=a,m=t,f=i;if(l.includes("Catalog namespace is not supported")||l.includes("Unity catalog is not enabled"))switch((0,d.G)(m,f)){case d.M.ONLY_CLUSTER:return p.formatMessage({id:"Z2EuPV",defaultMessage:"This cluster is incompatible with sample data for Unity Catalog tables. Please use Databricks Runtime 11.1 or higher or contact Databricks for assistance."});case d.M.ONLY_WAREHOUSE:return p.formatMessage({id:"Uvfp1K",defaultMessage:"This warehouse is incompatible with sample data for Unity Catalog tables. Please use Databricks Runtime 11.1 or higher or contact Databricks for assistance."});case d.M.WAREHOUSE_AND_CLUSTER:return p.formatMessage({id:"u0m7LZ",defaultMessage:"This warehouse or cluster is incompatible with sample data for Unity Catalog tables. Please use Databricks Runtime 11.1 or higher or contact Databricks for assistance."});default:return""}let e=l.match(u);if(e)return e[0].trim();return l}return JSON.stringify(s)},[e,a,r,t,i])||""}},862294:(e,t,r)=>{r.d(t,{GF:()=>g,dD:()=>f,zx:()=>m});var a=r(692738),n=r(686560),i=r(141078),o=r(595615),s=r(641760);function l(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}let c=(0,i.J1)`
  fragment SettingsApiErrorFragment on ApiError {
    code
    message
    helpUrl
    traceId
  }
`,u=(0,i.J1)`
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
  ${c}
  ${u}
`,p=(e,t,r)=>({input:{key:{typeName:"workspace",name:e},setting:{typeName:"disable_legacy_access",name:""},...t&&{sessionToken:t},...r}});function m(e){let t=(()=>{let e=(0,n.d)("currentWorkspaceId",""),[t]=(0,i._l)(d,{variables:p(e),fetchPolicy:"cache-and-network"});return(0,a.useCallback)(()=>({queryKey:["DISABLE_LEGACY_ACCESS_SETTING_QUERY"],queryFn:()=>{var e;return(e=function*(){let{data:e}=yield t();return e},function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){l(i,a,n,o,s,"next",e)}function s(e){l(i,a,n,o,s,"throw",e)}o(void 0)})})()}}),[t])})();return(0,o.AO)({queryKey:t().queryKey,queryFn:t().queryFn,keepPreviousData:!0,...e,enabled:(0,s.n_)()})}function f(e){return!!(0,s.n_)()&&!!e?.settingspolicyserviceGetSettingRestWithoutSettingName?.setting?.value?.boolVal?.value}function g(){var e;let t,r=(0,s.n_)(),a=(e={skip:!r},t=(0,n.d)("currentWorkspaceId",""),(0,i.IT)(d,{variables:p(t),fetchPolicy:"cache-and-network",skip:e?.skip}));return{data:!!r&&!!a.data?.settingspolicyserviceGetSettingRestWithoutSettingName?.setting?.value?.boolVal?.value,loading:a.loading,error:a.error}}},885364:(e,t,r)=>{r.d(t,{g:()=>o,u:()=>i});var a=r(987962),n=r.n(a);class i extends Error{__initiatorStack;errorCode;constructor(e,t,...r){super(t,...r),Error.captureStackTrace&&Error.captureStackTrace(this,i),this.name="SchemaLoadError",this.errorCode=e}isWaitingForEndpoint(){return 3===this.errorCode}}function o(e){return t=>{if(n()(t,"error")){let r=new i(t.error.code,`${t.error.message} (${e})`);return r.__initiatorStack=Error().stack,Promise.reject(r)}return t}}},886688:(e,t,r)=>{r.d(t,{U:()=>l,u:()=>c});var a=r(689262),n=r(686560),i=r(709262),o=r(805287);let s=()=>(0,o.gz)({cloud:"AWS",userCanUseDatabricksWorkspace:(0,n.d)("userCanUseDatabricksWorkspace_new",!1),userCanUseSqlService:(0,n.d)("userCanUseSqlService_new",!1),enableSqlService:(0,a.b)("enableSqlService",(0,n.d)("enableSqlService",!1),()=>(0,n.d)("dbSqlEnabled_new",!1)),centralizedLoginEnabled:(0,n.d)("centralizedLoginEnabled",!1)}),l=()=>s()[i.EU].availableInEnvironment,c=()=>s()[i.EU].allowed},902310:(e,t,r)=>{r.d(t,{_:()=>d,t:()=>p});var a=r(441535),n=r(412836),i=r(733337),o=r(660618),s=r(927239),l=r(595615),c=r(125230);function u(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}let d=e=>"isLakebaseServerlessCatalog"in e&&!0===e.isLakebaseServerlessCatalog;function p(){let{invalidate:e}=(0,l.rA)(),t=(0,a.W)("databricks.fe.lakebase.useNewCatalogsSyncedTablesApi",!1);return(0,n.n_)(({name:e,databaseProjectId:r,databaseBranchId:a,postgresDatabaseName:n,createDatabaseIfNotExists:s})=>{var l;return(l=function*(){if(!t)return yield(0,i.nr)(`${o.e0}/catalogs`,{method:"POST",body:JSON.stringify({name:e,database_project_id:r,database_branch_id:a,database_name:n,create_database_if_not_exists:s})});{let t=yield(0,c._J)(r,a);return yield(0,i.nr)(`/ajax-api/2.0/postgres/catalogs?catalog_id=${encodeURIComponent(e)}`,{method:"POST",body:JSON.stringify({spec:{branch:`projects/${t.project_slug}/branches/${t.slug}`,create_database_if_missing:s,postgres_database:n}})}),{name:e,databaseProjectId:r,databaseBranchId:a,postgresDatabaseName:n,createDatabaseIfNotExists:s}}},function(){var e=this,t=arguments;return new Promise(function(r,a){var n=l.apply(e,t);function i(e){u(n,r,a,i,o,"next",e)}function o(e){u(n,r,a,i,o,"throw",e)}i(void 0)})})()},{onSuccess:()=>{e([s.xQ])}})}},907046:(e,t,r)=>{r.d(t,{n:()=>i});var a=r(610435),n=r(939578);let i=e=>{let{name:t,children:r,...i}=e;return(0,a.FD)(a.FK,{children:[(0,a.Y)(n.y,{...i,children:t}),r]})}},913372:(e,t,r)=>{r.d(t,{GY:()=>l,a6:()=>c,c3:()=>s,nu:()=>d,qT:()=>p,tB:()=>u});var a,n=r(692738),i=r(686560),o=r(141078),s=((a={}).LAST_SELECTED_WAREHOUSE="",a);function l(e){return Object.values(s).includes(e)}let c=(0,o.J1)`
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
`,u=(e={})=>{let t=(0,i.d)("currentWorkspaceId","");return(0,o.IT)(c,{variables:{workspaceId:t},...e})};function d(e,t={}){let r=(0,i.d)("currentWorkspaceId","");return e.query({...t,query:c,variables:{workspaceId:r}})}function p(){let e=(0,o.mK)();return(0,n.useMemo)(()=>d.bind(null,e),[e])}},913573:(e,t,r)=>{r.d(t,{A:()=>g});var a=r(610435),n=r(692738),i=r(923305),o=r(794938),s=r(6e4),l=r(497937),c=r(497895),u=r(79128),d=r(846007),p=r(217985),m=r(349297);let f=n.forwardRef(({noBasePath:e=!1,children:t,onClick:r,href:u,to:f,componentId:g,...h},v)=>{let b,y=(0,l.Zp)(),E=(0,s.CV)(),{theme:S}=(0,c.wn)(),C=(0,n.useCallback)(e=>{r&&r(e),e.defaultPrevented||(0,m.A)(e,y)},[r,y]);if(f&&!E){if("string"==typeof f&&(0,i.Eq)(f))throw Error("<Link to={...}> format does not accept absolute URLs. Please <ExternalLink> instead.");let{pathname:e,search:t,hash:r}=(0,d.t4)(f);b=`${e??"/"}${t??""}${r??""}`}else if(u){let t=u.startsWith("/#");b=(0,o.E)(u,e||t)}let A={color:S.colors.actionTertiaryTextDefault,textDecoration:"none",...h.style};return E&&f?(0,a.Y)(p.N,{to:f,onClick:r,componentId:g,...h,ref:v,style:A,asAnchorTag:!0,children:t}):(0,a.Y)("a",{...h,href:b,ref:v,onClick:C,style:A,children:t})});f.Button=function({children:e,noBasePath:t=!1,onClick:r,...i}){i.href&&(i={...i,href:(0,o.E)(i.href,t)});let s=(0,l.Zp)(),c=(0,n.useCallback)(e=>{r&&r(e),e.defaultPrevented||(0,m.A)(e,s)},[r,s]);return(0,a.Y)(u.$n,{...i,onClick:c,children:e})};let g=f},919505:(e,t,r)=>{r.d(t,{A:()=>g});var a=r(514503),n=r.n(a),i=r(692738),o=r(200356),s=r(65061),l=r(960718),c=r(441535),u=r(141078),d=r(886100),p=r(22191),m=r(278983);let f=(0,u.J1)`
  subscription WarehouseEventSubscription($ignoreScaledEvent: Boolean) @component(name: "DBSQLX.WareHouseUI") {
    warehouseEvent(ignoreScaledEvent: $ignoreScaledEvent) {
      warehouseId
      eventName
      eventTimeMs
    }
  }
`;function g({skip:e,refetchLakehouseStates:t,setEnableSubscription:r}){let a=(0,i.useMemo)(()=>{let e=(0,c.W)("databricks.fe.redash.warehouses.event.debounceWait",1e3)+Math.floor(500*Math.random());return n()(t,e)},[t]),u=(0,i.useRef)(!1);return(0,s.sw)(f,{variables:{ignoreScaledEvent:!0},shouldResubscribe:!0,skip:e,onSubscriptionData({subscriptionData:e,client:n}){if(e?.data?.warehouseEvent){let{warehouseId:r}=e.data.warehouseEvent;"0"!==r||u.current?"0"===r?t():function(e,t,r){let{warehouseId:a,eventName:n}=t;(n||"undefined")in o.tXm&&e.cache.updateFragment({fragment:l.xz,id:e.cache.identify({__typename:"Lakehouse",id:a})},e=>{if(e)return{...e,state:n,health:null}})||r()}(n,e.data.warehouseEvent,a):u.current=!0}else d.iT.sev2(p.Es.RedashCore,"warehouseEvent.subscription.onSubscriptionData.unexpectedData",{subscriptionData:e}),r(!1)},onError(e){(function(e){if(e?.[0]){let t=e[0],r=t.code??"unknown",a=t instanceof CloseEvent?"CloseEvent":t.type??"unknown";(0,m.y)("clientsideEvent",{eventName:"warehouse_subscription_error",eventType:`warehouse_subscription_error_${a}`,errorCode:r})}else d.iT.sev2(p.Es.RedashCore,"warehouseEvent.subscription.onUnexpectedError",{rawError:e})})(e),r(!1)}})}},920174:(e,t,r)=>{r.d(t,{E:()=>i});var a=r(441535),n=r(886688);function i(){let e=(0,a.W)("databricks.warehouses.defaultWarehouseSettingEnabled",!1),t=(0,a.W)("databricks.fe.warehouses.defaultWarehouseSettingUIEnabled",!1),r=(0,a.W)("default_wh_setting",!1);return e&&(r||t)&&(0,n.u)()}},927239:(e,t,r)=>{r.d(t,{Fj:()=>l,OS:()=>a,U_:()=>s,Xq:()=>d,Zl:()=>c,a:()=>u,c_:()=>n,ie:()=>p,pu:()=>o,xQ:()=>i});let a="data_explorer_tables",n="data_explorer_table_details",i="metadata_catalogs",o="metadata_databases",s="data_explorer_volumes",l="volume_files",c="all_volume_files",u=["list_connections"],d="get_connection",p="user_credentials"},936743:(e,t,r)=>{r.d(t,{G:()=>s,l:()=>o});var a=r(610435),n=r(692738),i=r(62947);let o=e=>{switch(e.kind){case"group":return{group_name:e.name,group_id:e.id};case"user":return{user_name:e.name,user_id:e.id};case"serviceprincipal":return{service_principal_display_name:e.displayName,service_principal_id:e.id,service_principal_name:e.applicationId}}},s=({onUpdate:e,onUpdateSubject:t,showAccountLevelEntities:r,...s})=>{let l=(0,n.useCallback)(r=>{let a;Array.isArray(r)?a=r.map(e=>o(e)):void 0!==r&&(a=o(r)),e&&e(a),t&&t(r)},[e,t]);return(0,a.Y)(i.T,{enableAccountGroups:!!r,enableAccountServicePrincipals:!!r,enableAccountUsers:!!r,enableWorkspaceGroups:!r,enableWorkspaceServicePrincipals:!r,enableWorkspaceUsers:!r,onUpdate:e||t?l:void 0,...s})}},939578:(e,t,r)=>{r.d(t,{y:()=>o});var a=r(610435),n=r(545251),i=r(605107);let o=({children:e,...t})=>{let{isInsideDialogCombobox:r}=(0,n.w)();if(!r)throw Error("`DialogComboboxSectionHeader` must be used within `DialogCombobox`");return(0,a.Y)(i.X,{...t,children:e})}},960718:(e,t,r)=>{r.d(t,{MS:()=>d,SN:()=>p,vP:()=>u,xz:()=>m});var a=r(141078);let n=(0,a.J1)`
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
`,i=(0,a.J1)`
  fragment PermissionFragment on Permission {
    inheritedFromObject
    permissionLevel
    inherited
  }
`,o=(0,a.J1)`
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
`,s=(0,a.J1)`
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
`,l=(0,a.J1)`
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
`,c=(0,a.J1)`
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
`,u=(0,a.J1)`
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
`,d=(0,a.J1)`
  fragment LakehouseListFragment on Lakehouse {
    ...LakehouseBasicAttributesFragment
    permissions @include(if: $withPermissions)
  }
  ${l}
`,p=(0,a.J1)`
  fragment LakehouseForMutationFragment on Lakehouse {
    ...LakehouseBasicAttributesFragment
    ...LakehouseAdvancedAttributesFragment
    permissions @include(if: $withPermissions)
  }
  ${l}
  ${c}
`,m=(0,a.J1)`
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
`},962179:(e,t,r)=>{function a(e){return"databricks_internal"===e.type}function n(e){return"databricks_cluster"===e.type||"cluster"===e.type}function i(e){return"statements"in e}r.d(t,{PG:()=>a,n9:()=>i,y0:()=>n})},962664:(e,t,r)=>{r.d(t,{N:()=>d});var a=r(610435),n=r(692738),i=r(768622),o=r(332702),s=r(497895),l=r(161330),c=r(174541),u=r(574132);let d=(0,n.forwardRef)(({item:e,index:t,comboboxState:r,selectedItems:d,selectedMatcher:p,textOverflowMode:m="multiline",isDisabled:f,disabledReason:g,hintContent:h,onClick:v,children:b,...y},E)=>{let{highlightedIndex:S,getItemProps:C,isOpen:A}=r,I=S===t,{theme:T}=(0,s.wn)(),w=p?d.some(t=>p(t,e)):d.includes(e),x=(0,n.useRef)(null);(0,n.useImperativeHandle)(E,()=>x.current);let{onClick:_,...R}=C({item:e,index:t,disabled:f,onMouseUp:e=>{e.stopPropagation(),y.onMouseUp?.(e)},ref:x});return(0,n.useEffect)(()=>{if(A&&S===t&&x.current){let e=x.current.closest("ul");if(!e)return;let t=e.scrollTop,r=e.scrollTop+e.clientHeight,a=x.current.offsetTop,n=x.current.offsetTop+x.current.clientHeight;(a<t||n>r)&&x.current?.scrollIntoView({block:"nearest"})}},[S,t,A,x]),(0,a.Y)("li",{role:"option","aria-selected":w,disabled:f,onClick:e=>{v?.(e),_(e)},css:[(0,c.RB)(T),(0,i.Jq)(T,I,f)],...R,...y,children:(0,a.Y)(o.Sc,{componentId:"codegen_design-system_src_design-system_typeaheadcombobox_typeaheadcomboboxcheckboxitem.tsx_92",disabled:f,isChecked:w,css:(0,c.WS)(T,m),tabIndex:-1,onClick:e=>{e.stopPropagation()},children:(0,a.FD)("label",{children:[f&&g?(0,a.FD)("div",{css:{display:"flex"},children:[(0,a.Y)("div",{children:b}),(0,a.Y)("div",{css:(0,c.eO)(T),children:(0,a.Y)(l.I,{componentId:"typeahead-combobox-checkbox-item-disabled-reason-info-tooltip",content:g})})]}):b,(0,a.Y)(u.y,{disabled:f,children:h})]})})})});d.defaultProps={_type:"TypeaheadComboboxCheckboxItem"}},999157:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",d:"M11.5.94 7.47 4.97l1.06 1.06 2.22-2.22v8.38L8.53 9.97l-1.06 1.06 4.03 4.03 4.03-4.03-1.06-1.06-2.22 2.22V3.81l2.22 2.22 1.06-1.06zM6 3.5H1V5h5zM6 11.5H1V13h5zM1 7.5h5V9H1z"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="SortUnsortedIcon";let l=s}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/35717.e3146bdad6.chunk.js.map