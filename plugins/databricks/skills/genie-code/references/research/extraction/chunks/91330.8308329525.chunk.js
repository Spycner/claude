"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[91330],{7319:(e,t,r)=>{r.d(t,{_:()=>o,h:()=>i});var a=r(692738),n=r(879612);function i(e){if(!e)return!1;return"CONNECTION_HTTP_OAUTH_U2M_MAPPING"===e||"CONNECTION_HTTP_DCR"===e||"CONNECTION_SLACK_OAUTH_U2M_MAPPING"===e}function o(e){let t=(0,n.x5)({isUcEnabled:!0});return(0,a.useMemo)(()=>{if(!e)return!1;if(t.data?.kinds){let r=t.data.kinds.find(t=>t.securable_kind===e);return r?.capabilities?.includes("HAS_GENERIC_ACCESS_TOKEN_FLOW")??!1}return i(e)},[e,t.data])}},21255:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M5.5 6a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="StopCircleIcon";let l=s},26446:(e,t,r)=>{r.d(t,{HT:()=>d,M8:()=>u,Pf:()=>s,bp:()=>l,gb:()=>a,iN:()=>c,pP:()=>n,xB:()=>p});let a=1e3,n={enableAccountGroups:!1,enableAccountServicePrincipals:!1,enableAccountUsers:!1,enableWorkspaceGroups:!1,enableWorkspaceServicePrincipals:!1,enableWorkspaceUsers:!1},i=/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,o={admins:"Admins",users:"All workspace users","account users":"All account users"},s=e=>{if(!e)return e;return o[e]??e},l=e=>{let t=new Map;return e.forEach(e=>{let r=d(e)||e.name;t.has(r)||t.set(r,[]),t.get(r)?.push(e)}),t},c=e=>{switch(e.kind){case"user":return e.fullName;case"serviceprincipal":return e.name;case"group":return e.displayName;default:return""}},d=e=>{switch(e.kind){case"user":case"group":return e.name||"";case"serviceprincipal":return e.applicationId||"";default:return""}},u=({uniqueName:e,id:t,kind:r,displayName:a})=>{switch(r){case"user":return{id:t||"",optionId:`user.${t}`,kind:r,name:e||"",fullName:a||"",title:""};case"serviceprincipal":return{id:t||"",optionId:`serviceprincipal.${t}`,kind:r,name:a||"",applicationId:e||"",title:""};case"group":return{id:t||"",optionId:`group.${t}`,kind:r,name:e||"",displayName:s(e||""),title:""};default:return}};function p(e){return e?i.test(e)?"serviceprincipal":"user":void 0}},39566:(e,t,r)=>{r.d(t,{B8:()=>c,DI:()=>l,RX:()=>u,TW:()=>p,Wd:()=>s,od:()=>d});var a,n,i,o,s=((a={}).SAAS="saas",a.DB="db",a.BRICKSTORE="brickstore",a.COMMUNITY="community",a.FOREIGN_CATALOG="foreign_catalog",a.FILESYSTEM="filesystem",a),l=((n={}).QUERY="query",n.CDC="cdc",n);let c={MYSQL:"MYSQL",POSTGRESQL:"POSTGRESQL",SQLSERVER:"SQLSERVER",SALESFORCE:"SALESFORCE",WORKDAY_RAAS:"WORKDAY_RAAS",GA4_RAW_DATA:"GA4_RAW_DATA",SERVICENOW:"SERVICENOW",MANAGED_POSTGRESQL:"MANAGED_POSTGRESQL",ORACLE:"ORACLE",SHAREPOINT:"SHAREPOINT",DYNAMICS365:"DYNAMICS365",TERADATA:"TERADATA",NETSUITE:"NETSUITE",GENERIC_LAKEFLOW_CONNECT:"GENERIC_LAKEFLOW_CONNECT",JIRA:"JIRA",CONFLUENCE:"CONFLUENCE",GOOGLE_ADS:"GOOGLE_ADS",ZENDESK:"ZENDESK",HUBSPOT:"HUBSPOT",SALESFORCE_MARKETING_CLOUD:"SALESFORCE_MARKETING_CLOUD",META_MARKETING:"META_MARKETING",OUTLOOK:"OUTLOOK",JDBC:"JDBC",FOREIGN_CATALOG:"FOREIGN_CATALOG",REDSHIFT:"REDSHIFT",SNOWFLAKE:"SNOWFLAKE",SYNAPSE:"SYNAPSE",BIGQUERY:"BIGQUERY",TIKTOK_ADS:"TIKTOK_ADS",WORKDAY_HCM:"WORKDAY_HCM",GITHUB:"GITHUB",SMARTSHEET:"SMARTSHEET",VEEVA_VAULT:"VEEVA_VAULT"},d={MYSQL:"MYSQL",POSTGRESQL:"POSTGRESQL",SQLSERVER:"SQLSERVER",SALESFORCE:"SALESFORCE",WORKDAY_RAAS:"WORKDAY_RAAS",GA4_RAW_DATA:"GA4_RAW_DATA",SERVICENOW:"SERVICENOW",MANAGED_POSTGRESQL:"MANAGED_POSTGRESQL",ORACLE:"ORACLE",SHAREPOINT:"SHAREPOINT",DYNAMICS365:"DYNAMICS365",TERADATA:"TERADATA",NETSUITE:"NETSUITE",GENERIC_LAKEFLOW_CONNECT:"GENERIC_LAKEFLOW_CONNECT",JIRA:"JIRA",CONFLUENCE:"CONFLUENCE",GOOGLE_ADS:"GOOGLE_ADS",ZENDESK:"ZENDESK",HUBSPOT:"HUBSPOT",SALESFORCE_MARKETING_CLOUD:"SALESFORCE_MARKETING_CLOUD",WORKDAY_HCM:"WORKDAY_HCM",META_MARKETING:"META_MARKETING",OUTLOOK:"OUTLOOK",JDBC:"JDBC",FOREIGN_CATALOG:"FOREIGN_CATALOG",REDSHIFT:"REDSHIFT",SNOWFLAKE:"SNOWFLAKE",SYNAPSE:"SYNAPSE",BIGQUERY:"BIGQUERY",TIKTOK_ADS:"TIKTOK_ADS",GITHUB:"GITHUB",SMARTSHEET:"SMARTSHEET",VEEVA_VAULT:"VEEVA_VAULT",ZENDESK_COMMUNITY:"ZENDESK_COMMUNITY",GITHUB_COMMUNITY:"GITHUB_COMMUNITY",STRIPE_COMMUNITY:"STRIPE_COMMUNITY",HUBSPOT_COMMUNITY:"HUBSPOT_COMMUNITY",ZOHO_CRM_COMMUNITY:"ZOHO_CRM_COMMUNITY"};var u=((i={}).CONNECTION="connection",i.PIPELINE="pipeline",i.GATEWAY="gateway",i.VALIDATION="validation",i.SOURCE="source",i.DESTINATION="destination",i.SCHEDULE="schedule",i.BRICKSTORE_SOURCE="brickstore_source",i.DESTINATION_WITH_PIPELINE="destination_with_pipeline",i.PIPELINE_CONFIGURATION="pipeline_configuration",i.REPORT="report",i.DATABASE_SETUP="database_setup",i.COMMUNITY_CONFIG="community_config",i.FOREIGN_CATALOG_SOURCE="foreign_catalog_source",i),p=((o={}).PREVIEW="preview",o.COMMUNITY="community",o.NOTEBOOK="notebook",o.MANAGED_INGESTION="mi",o)},40938:(e,t,r)=>{r.d(t,{Y:()=>n});var a=r(441535);function n(){return(0,a.W)("databricks.fe.tagpolicy.enableV2TagPolicyAPIs",!1)}},55079:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",d:"M12.5 8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CircleIcon";let l=s},74348:(e,t,r)=>{r.d(t,{h:()=>y});var a=r(610435),n=r(692738),i=r(441535),o=r(140718),s=r(342411),l=r(125230),c=r(350318);let d=({value:e,onChange:t,error:r,...n})=>{let i=(0,s.tz)(),d=(0,c.ce)(),{data:u,isLoading:p}=(0,l.Nx)({enabled:d,pageSize:l.Ml});return(0,a.Y)(o.XA,{allowClear:!0,width:"100%",value:e,onChange:e=>t(e.target.value),label:i.formatMessage({id:"Dh2KGp",defaultMessage:"Project"}),placeholder:i.formatMessage({id:"aerQeA",defaultMessage:"Select project"}),contentProps:{matchTriggerWidth:!0,loading:d&&p},validationState:r?"error":void 0,...n,children:u?.map(e=>(0,a.Y)(o.wS,{value:e.id,children:(0,a.Y)("span",{children:e.name})},e.id))})};var u=r(466213),p=r(497895),f=r(996648),m=r(927802),g=r(684944),h=r(461815),v=r(768622);let b=({id:e,onChange:t,error:r})=>{let i=(0,s.tz)(),{theme:o}=(0,p.wn)(),[d,b]=(0,u.d7)("",300),y=(0,c.ce)(),{data:S,isLoading:A}=(0,l.Nx)({enabled:y,pageSize:l.Ml,filter:d}),I=(0,n.useCallback)(e=>{t(e?.id)},[t]),E=(0,f.SY)({componentId:"web-shared.brickstore.DatabaseProjectSelectV2",allItems:S??[],items:S??[],setItems:()=>{},itemToString:e=>e?.name??"",formOnChange:I});(0,n.useEffect)(()=>{b(E.inputValue.trim())},[b,E.inputValue]);let C={"&.error":{borderColor:`${o.colors.red500} !important`}};return(0,a.FD)(m.h,{id:e,multiSelect:!1,comboboxState:E,children:[(0,a.Y)(g.$,{formOnChange:I,placeholder:i.formatMessage({id:"aerQeA",defaultMessage:"Select project"}),className:r?"error":"",dangerouslyAppendEmotionCSS:C,comboboxState:E}),(0,a.Y)(h.i,{width:300,loading:y&&A,comboboxState:E,children:S?.map((e,t)=>(0,a.Y)(v.bb,{item:e,index:t,comboboxState:E,children:e.name},`project-${e.id}`))})]})},y=e=>{let t=(0,n.useMemo)(()=>(0,i.W)("databricks.fe.lakebase.useDatabaseProjectSelectV2",!1)?b:d,[]);return(0,a.Y)(t,{...e})}},75036:(e,t,r)=>{r.d(t,{e:()=>o,s:()=>i});var a,n=r(696514),i=((a={}).DONE="done",a.CANCELED="canceled",a);let o=(0,n.fH)("Filebrowser::SelectFolderNode")},84008:(e,t,r)=>{r.d(t,{n:()=>p});var a=r(610435),n=r(956935),i=r(783772),o=r.n(i),s=r(692738),l=r(325056),c=r(114826),d=r(497895),u=r(382908);let p=(0,s.forwardRef)(function({children:e,className:t,ellipsis:r=!1,multiline:i=!1,align:p="left",style:f,wrapContent:m=!0,...g},h){let{size:v,grid:b}=(0,s.useContext)(l.G),{classNamePrefix:y}=(0,d.wn)(),S=(0,n.AH)({[`& > .${y}-typography > a.${y}-typography-ellipsis`]:{display:"block"}}),A="md";"small"===v&&(A="sm");let I=!0===m?(0,a.Y)(u.o.Text,{ellipsis:!i,size:A,title:!i&&"string"==typeof e&&e||void 0,css:{"&:has(> button)":{overflow:"visible"}},children:e}):e;return(0,a.Y)("div",{...g,role:"cell",style:{textAlign:p,...f},ref:h,css:[b?void 0:c.PV.cell,S],className:o()(b&&c.lH.cell,t),children:I})})},114826:(e,t,r)=>{r.d(t,{Ay:()=>m,M0:()=>f,PV:()=>d,TJ:()=>u,lH:()=>c,yA:()=>p});var a=r(956935),n=r(469723),i=r.n(n),o=r(322560),s=r.n(o);function l(){return s()(20,()=>i()(35).toString(36)).join("")}let c={cell:`js--ds-table-cell-${l()}`,header:`js--ds-table-header-${l()}`,row:`js--ds-table-row-${l()}`},d={cell:(0,a.AH)({display:"inline-grid",position:"relative",flex:1,boxSizing:"border-box",paddingLeft:"var(--table-spacing-sm)",paddingRight:"var(--table-spacing-sm)",wordBreak:"break-word",overflow:"hidden","& .anticon":{verticalAlign:"text-bottom"}}),header:(0,a.AH)({fontWeight:"bold",alignItems:"flex-end",display:"flex",overflow:"hidden","&[aria-sort]":{cursor:"pointer",userSelect:"none"},".table-header-text":{color:"var(--table-header-text-color)"},".table-header-icon-container":{color:"var(--table-header-sort-icon-color)",display:"none"},"&[aria-sort]:hover":{".table-header-icon-container, .table-header-text":{color:"var(--table-header-focus-color)"}},"&[aria-sort]:active":{".table-header-icon-container, .table-header-text":{color:"var(--table-header-active-color)"}},'&:hover, &[aria-sort="ascending"], &[aria-sort="descending"]':{".table-header-icon-container":{display:"inline"}}}),row:(0,a.AH)({display:"flex","&.table-isHeader":{"> *":{backgroundColor:"var(--table-header-background-color)"},".table-isScrollable &":{position:"sticky",top:0,zIndex:1}},'.table-row-select-cell input[type="checkbox"] ~ *':{opacity:"var(--row-checkbox-opacity, 0)"},"&:not(.table-row-isGrid)&:hover":{"&:not(.table-isHeader)":{backgroundColor:"var(--table-row-hover)"},'.table-row-select-cell input[type="checkbox"] ~ *':{opacity:1}},'.table-row-select-cell input[type="checkbox"]:focus ~ *':{opacity:1},"> *":{paddingTop:"var(--table-row-vertical-padding)",paddingBottom:"var(--table-row-vertical-padding)",borderBottom:"1px solid",borderColor:"var(--table-separator-color)"},"&.table-row-isGrid > *":{borderRight:"1px solid",borderColor:"var(--table-separator-color)"},"&.table-row-isGrid > :first-of-type":{borderLeft:"1px solid",borderColor:"var(--table-separator-color)"},"&.table-row-isGrid.table-isHeader:first-of-type > *":{borderTop:"1px solid",borderColor:"var(--table-separator-color)"}})},u=`hide-icon-button-${l()}`,p=`skip-hide-icon-button-${l()}`,f=(0,a.AH)({[`.${u} button.${p}`]:{opacity:"1 !important",transition:"opacity 0.1s ease !important"},[`.${u} button:has(> span.anticon[role="img"]:only-child),
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
    .${u} button[aria-expanded="true"]:has(i.fa:only-child),`]:{opacity:1}}),m={tableWrapper:(0,a.AH)({"&.table-isScrollable":{overflow:"auto"},display:"flex",flexDirection:"column",height:"100%",[`.${c.cell}`]:d.cell,[`.${c.header}`]:d.header,[`.${c.row}`]:d.row}),table:(0,a.AH)({".table-isScrollable &":{overflow:"auto"}}),headerButtonTarget:(0,a.AH)({alignItems:"flex-end",display:"flex",overflow:"hidden",width:"100%",justifyContent:"inherit","&:focus":{".table-header-text":{color:"var(--table-header-focus-color)"},".table-header-icon-container":{color:"var(--table-header-focus-color)",display:"inline"}},"&:active":{".table-header-icon-container, .table-header-text":{color:"var(--table-header-active-color)"}}}),sortHeaderIconOnRight:(0,a.AH)({marginLeft:"var(--table-spacing-xs)"}),sortHeaderIconOnLeft:(0,a.AH)({marginRight:"var(--table-spacing-xs)"}),checkboxCell:(0,a.AH)({display:"flex",alignItems:"center",flex:0,paddingLeft:"var(--table-spacing-sm)",paddingTop:0,paddingBottom:0,minWidth:"var(--table-spacing-md)",maxWidth:"var(--table-spacing-md)",boxSizing:"content-box !important",overflow:"hidden"}),resizeHandleContainer:(0,a.AH)({position:"absolute",right:-3,top:"var(--table-spacing-sm)",bottom:"var(--table-spacing-sm)",width:"var(--table-spacing-sm)",display:"flex",justifyContent:"center",cursor:"col-resize",userSelect:"none",touchAction:"none",zIndex:1}),resizeHandle:(0,a.AH)({width:1,background:"var(--table-resize-handle-color)"}),paginationContainer:(0,a.AH)({display:"flex",justifyContent:"flex-end",paddingTop:"var(--table-spacing-sm)",paddingBottom:"var(--table-spacing-sm)"})}},140718:(e,t,r)=>{r.d(t,{XA:()=>y,lQ:()=>I,wS:()=>A});var a=r(610435),n=r(692738),i=r(46e3),o=r(806773),s=r(370427),l=r(907046),c=r(99442),d=r(224098),u=r(545251),p=r(53333),f=r(661748);let m=(0,n.createContext)(void 0),g=[d.s7.OnValueChange,d.s7.OnView],h=[d.s7.OnValueChange],v=(e,t)=>{for(let r of n.Children.toArray(e))if(n.isValidElement(r)){if(r.type===A&&r.props.value===t)return r;if(r.props.children){let e=v(r.props.children,t);if(e)return e}}},b=(e,t)=>{let r=v(e,t);if(n.isValidElement(r))return r.props.children;return""},y=(0,n.forwardRef)(({defaultValue:e,name:t,placeholder:r,children:s,contentProps:l,onChange:u,onOpenChange:v,id:y,label:A,value:I,validationState:E,forceCloseOnEscape:C,componentId:w,analyticsEvents:_,valueHasNoPii:T,...O},x)=>{let P=(0,f.W)("databricks.fe.observability.defaultComponentView.simpleSelect",!1),[R]=(0,n.useState)(()=>{if(I)return b(s,I);return""}),M=(0,n.useRef)(null);(0,n.useImperativeHandle)(x,()=>M.current,[]);let N=(0,n.useRef)(I),[k,$]=(0,n.useState)(I),[D,U]=(0,n.useState)(R),L=void 0!==I,Y=(0,n.useMemo)(()=>_??(P?g:h),[_,P]),G=(0,d.ei)({componentType:d.v_.SimpleSelect,componentId:w,analyticsEvents:Y,valueHasNoPii:T}),{elementRef:H}=(0,p.z)({onView:G.onView,value:I??e});(0,n.useEffect)(()=>{void 0!==I&&I!==N.current&&($(I),N.current=I)},[I]),(0,n.useEffect)(()=>{if(L)return;let t=M.current,r=e||t?.value||"";$(r),N.current=r},[L,e,I]),(0,n.useEffect)(()=>{U(b(s,k||""))},[k,s]);let B=(0,n.useCallback)(e=>{G.onValueChange(e),M.current?.setAttribute("value",e||""),$(e),U(b(s,e)),u&&u({target:{name:t,type:"select",value:e},type:"change"})},[G,s,u,t]),W=(0,n.useMemo)(()=>({value:k,onChange:B}),[k,B]),F=(0,n.useCallback)(()=>{B("")},[B]);return(0,a.Y)(m.Provider,{value:W,children:(0,a.Y)(i.l,{componentId:void 0,value:k,placeholder:r,label:A??O["aria-label"],id:y,children:(0,a.FD)(S,{onOpenChange:v,children:[(0,a.Y)(c.b,{ref:H,...O,validationState:E,onClear:F,id:y,value:k,...G.dataComponentProps,children:D||r}),(0,a.Y)("input",{type:"hidden",ref:M}),(0,a.Y)(o.g,{forceCloseOnEscape:C,...l,children:s})]})})})}),S=({children:e,onOpenChange:t})=>{let{isOpen:r}=(0,u.w)();return(0,n.useEffect)(()=>{t&&t(!!r)},[r,t]),(0,a.Y)(a.FK,{children:e})},A=(0,n.forwardRef)(({value:e,children:t,...r},i)=>{let o=(0,n.useContext)(m);if(!o)throw Error("SimpleSelectOption must be used within a SimpleSelect");let{onChange:l}=o,c=(0,n.useCallback)(({value:e})=>{l(e)},[l]);return(0,a.Y)(s.O,{...r,ref:i,value:e,onChange:c,children:t})}),I=({children:e,label:t,...r})=>{if(!(0,n.useContext)(m))throw Error("SimpleSelectOptionGroup must be used within a SimpleSelect");return(0,a.Y)(l.n,{...r,name:t,children:e})}},150190:(e,t,r)=>{r.d(t,{H:()=>s});var a=r(160603),n=r(733845),i=r(302118);function o(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function s(e){let t=(0,n.O)();return(0,a.useQuery)(["get_user_info"],()=>{var e;return(e=function*(){if(t)return yield i.k.getUserInfo();return{is_metastore_admin:!1}},function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function s(e){o(i,a,n,s,l,"next",e)}function l(e){o(i,a,n,s,l,"throw",e)}s(void 0)})})()},e)}},161330:(e,t,r)=>{r.d(t,{I:()=>d});var a=r(610435),n=r(91958),i=r.n(n),o=r(79570),s=r(497895),l=r(201828);let c=i()(e=>({color:e.colors.textSecondary})),d=({content:e,iconTitle:t="More information",...r})=>{let{theme:n}=(0,s.wn)();return(0,a.Y)(o.m,{content:e,...r,children:(0,a.Y)(l.A,{tabIndex:0,"aria-hidden":"false","aria-label":t,alt:t,css:c(n)})})}},242995:(e,t,r)=>{r.d(t,{h:()=>o,j:()=>i});var a,n=r(696514),i=((a={}).DONE="done",a.CANCELED="canceled",a);let o=(0,n.fH)("Filebrowser::SaveAsFolderNode")},267084:(e,t,r)=>{r.d(t,{MC:()=>f,Nj:()=>g,QE:()=>h,Qn:()=>m,UZ:()=>v,XO:()=>d,eE:()=>p,mb:()=>u,pW:()=>c});var a,n,i,o,s,l,c=((a={}).AWS_SSE_S3="AWS_SSE_S3",a.AWS_SSE_KMS="AWS_SSE_KMS",a),d=((n={}).AUTOMATIC_AQS="managed_aqs",n.PROVIDED_AQS="provided_aqs",n.AUTOMATIC_SQS="managed_sqs",n.PROVIDED_SQS="provided_sqs",n.AUTOMATIC_PUBSUB="managed_pubsub",n.PROVIDED_PUBSUB="provided_pubsub",n);let u=["managed_aqs","managed_sqs","managed_pubsub"],p=["provided_aqs","provided_sqs","provided_pubsub"];var f=((i={}).AUTOMATIC="managed_aqs",i.PROVIDED="provided_aqs",i),m=((o={}).AUTOMATIC="managed_sqs",o.PROVIDED="provided_sqs",o),g=((s={}).AUTOMATIC="managed_pubsub",s.PROVIDED="provided_pubsub",s),h=((l={}).OPEN_IN_ACCOUNT="ISOLATION_MODE_OPEN_IN_ACCOUNT",l.OPEN="ISOLATION_MODE_OPEN",l.ISOLATED="ISOLATION_MODE_ISOLATED",l);let v={ISOLATION_MODE_OPEN_IN_ACCOUNT:"OPEN_IN_ACCOUNT",ISOLATION_MODE_OPEN:"OPEN",ISOLATION_MODE_ISOLATED:"ISOLATED"}},282109:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1 3.5h10V2H1zm0 8h4V10H1zm7-4H1V6h7zm3.5 7.56 4.03-4.03-1.06-1.06-2.22 2.22V6h-1.5v6.19L8.53 9.97l-1.06 1.06z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="SortDescendingIcon";let l=s},283009:(e,t,r)=>{r.d(t,{a:()=>s});var a=r(610435);r(692738);var n=r(79128),i=r(79570),o=r(180864);function s({buttonProps:e,componentId:t,copyText:r,copyTooltip:l,isInsideInputGroup:c=!1,onCopy:d,tooltipProps:u}){let{actionIcon:p,copy:f,handleTooltipOpenChange:m,tooltipOpen:g,tooltipMessage:h}=(0,o.L)(r,l,d),v=(0,a.Y)(n.$n,{"aria-label":h,componentId:t,icon:p,onClick:f,size:"small",...e}),b=(0,a.Y)(n.$n,{"aria-label":h,componentId:t,onClick:f,...e,children:p});return(0,a.Y)(i.m,{componentId:`${t}-tooltip`,content:h,onOpenChange:m,open:g,...u,children:c?b:v})}},293418:(e,t,r)=>{r.d(t,{H:()=>u,g:()=>d});var a=r(610435),n=r(783772),i=r.n(n),o=r(692738),s=r(325056),l=r(114826),c=r(497895);let d=(0,o.createContext)({isHeader:!1}),u=(0,o.forwardRef)(function({children:e,className:t,style:r,isHeader:n=!1,skipIconHiding:u=!1,verticalAlignment:p,...f},m){let g,{size:h,grid:v}=(0,o.useContext)(s.G),{theme:b}=(0,c.wn)();return g=n&&"default"===h?b.spacing.sm:"default"===h?6:b.spacing.xs,(0,a.Y)(d.Provider,{value:(0,o.useMemo)(()=>({isHeader:n}),[n]),children:(0,a.Y)("div",{...f,ref:m,role:"row",style:{...r,"--table-row-vertical-padding":`${g}px`},css:[!n&&!u&&l.M0,!v&&l.PV.row],className:i()(t,v&&l.lH.row,{"table-isHeader":n,"table-row-isGrid":v}),children:e})})})},295423:(e,t,r)=>{r.d(t,{f:()=>c});var a=r(692738),n=r(671244),i=r(653542),o=r(49586),s=r(209908);let l=50,c=({enableAccountGroups:e=!1,enableAccountServicePrincipals:t=!1,enableAccountUsers:r=!1,enableWorkspaceGroups:c=!0,enableWorkspaceServicePrincipals:d=!0,enableWorkspaceUsers:u=!0,filterText:p="",principalIdsForFiltering:f=[],principalUniqueNamesForFiltering:m=[],limit:g=l,useLite:h,skip:v=!1,isCache:b=!1}={})=>{let y=(0,s.VM)({ids:f,uniqueNames:m}),S=(0,s.L5)({ids:f,uniqueNames:m}),{subjects:A,isLoading:I,error:E,hasNextPage:C}=(0,o.zo)({source:"account",filter:p,filterPredicate:y,first:g,skip:!r||v,useLite:h,isCache:b}),{subjects:w,isLoading:_,error:T,hasNextPage:O}=(0,n.Bi)({source:"account",filter:p,filterPredicate:S,first:g,skip:!e||v,useLite:h,isCache:b}),{subjects:x,isLoading:P,error:R,hasNextPage:M}=(0,i.Q_)({source:"account",filter:p,filterPredicate:y,first:g,skip:!t||v,useLite:h,isCache:b}),{subjects:N,isLoading:k,error:$,hasNextPage:D}=(0,o.zo)({source:"workspace",filter:p,filterPredicate:y,first:g,skip:!u||v,useLite:h,isCache:b}),{subjects:U,isLoading:L,error:Y,hasNextPage:G}=(0,n.Bi)({source:"workspace",filter:p,filterPredicate:S,first:g,skip:!c||v,useLite:h,isCache:b}),{subjects:H,isLoading:B,error:W,hasNextPage:F}=(0,i.Q_)({source:"workspace",filter:p,filterPredicate:y,first:g,skip:!d||v,useLite:h,isCache:b}),q=(0,a.useMemo)(()=>{let t=[...U,...w];if(e&&c)return t.filter((e,t,r)=>t===r.findIndex(t=>t.id===e.id));return t},[w,e,c,U]),V=(0,a.useMemo)(()=>{let e=[...H,...x];if(t&&d)return e.filter((e,t,r)=>t===r.findIndex(t=>t.id===e.id));return e},[x,t,d,H]),z=(0,a.useMemo)(()=>{let e=[...N,...A];if(r&&u)return e.filter((e,t,r)=>t===r.findIndex(t=>t.id===e.id));return e},[A,r,u,N]),{subjects:K,hasNextPage:Q}=(0,a.useMemo)(()=>(0,s.GF)(p,g,q,V,z),[p,g,q,V,z]),j=(0,a.useMemo)(()=>({accountGroups:_,accountServicePrincipals:P,accountUsers:I,groups:L,servicePrincipals:B,users:k,some:_||P||I||L||B||k}),[_,P,I,L,B,k]),J=(0,a.useMemo)(()=>({accountGroups:T??null,accountServicePrincipals:R??null,accountUsers:E??null,groups:Y??null,servicePrincipals:W??null,users:$??null}),[T,R,E,Y,W,$]);return{allSubjectsMap:(0,a.useMemo)(()=>(0,s.ne)(q,V,z),[q,V,z]),errors:J,hasNextPage:!!(K.length===g&&(C||O||M||D||G||F)||Q),isLoading:j,subjects:K}}},308879:(e,t,r)=>{r.d(t,{L:()=>l,u:()=>c});var a=r(689262),n=r(686560),i=r(441535),o=r(709262),s=r(805287);let l=()=>({isEnabled:c()}),c=()=>(0,s.gz)({cloud:"AWS",userCanUseDatabricksWorkspace:(0,n.d)("userCanUseDatabricksWorkspace_new",!1),userCanUseSqlService:(0,n.d)("userCanUseSqlService_new",!1),enableSqlService:(0,a.b)("enableSqlService",(0,n.d)("enableSqlService",!1),()=>(0,n.d)("dbSqlEnabled_new",!1)),centralizedLoginEnabled:(0,a.b)("centralizedLoginEnabled",(0,n.d)("centralizedLoginEnabled",!1),()=>(0,i.W)("databricks.fe.centralizedLoginEnabled",!1))})[o.EU].allowed},311529:(e,t,r)=>{r.d(t,{F:()=>i,x:()=>o});var a,n=r(696514),i=((a={}).DONE="done",a);let o=(0,n.fH)("Filebrowser::Share")},314775:(e,t,r)=>{r.d(t,{A:()=>C});var a=r(610435),n=r(644091),i=r(783772),o=r.n(i),s=r(692738),l=r(325056),c=r(293418),d=r(114826),u=r(79128),p=r(224098),f=r(497895),m=r(814947),g=r(282109),h=r(999157),v=r(653800),b=r(837334),y=r(286342),S=r(382908),A=r(661748),I=r(53333);let E=(0,s.forwardRef)(function({style:e,resizeHandler:t,increaseWidthHandler:r,decreaseWidthHandler:n,children:i,...o},l){let{isHeader:p}=(0,s.useContext)(c.g);if(!p)throw Error("`TableHeaderResizeHandle` must be used within a `TableRow` with `isHeader` set to true.");let[m,g]=(0,s.useState)(!1),h=(0,s.useRef)(null),A=(0,s.useRef)(null),I=(0,s.useRef)(!0),E=(0,s.useRef)(!1),{theme:C}=(0,f.wn)(),w=(0,s.useCallback)(e=>{if(!r||!n)return void t?.(e);if(m&&!I.current)return;I.current=!1,h.current={x:e.clientX,y:e.clientY},A.current=e,E.current=!1;let a=e=>{h.current&&Math.abs(e.clientX-h.current.x)>2&&A.current&&(E.current=!0,t?.(A.current),document.removeEventListener("pointermove",a))},i=()=>{h.current=null,document.removeEventListener("pointermove",a),document.removeEventListener("pointerup",i)};document.addEventListener("pointermove",a),document.addEventListener("pointerup",i)},[m,t,r,n]),_=(0,s.useCallback)(e=>{if(E.current){e.preventDefault(),e.stopPropagation(),E.current=!1;return}},[]),T=(0,a.Y)("div",{...o,ref:l,onPointerDown:w,onClick:_,css:d.Ay.resizeHandleContainer,style:e,role:"button","aria-label":"Resize Column",children:(0,a.Y)("div",{css:d.Ay.resizeHandle})});return r&&n?(0,a.FD)(y.Root,{componentId:"codegen_design-system_src_design-system_tableui_tableheader.tsx_114",onOpenChange:g,children:[(0,a.Y)(y.Trigger,{asChild:!0,children:T}),(0,a.FD)(y.Content,{side:"top",align:"center",sideOffset:0,minWidth:135,style:{padding:`${C.spacing.sm} ${C.spacing.md} ${C.spacing.md} ${C.spacing.sm}`},children:[(0,a.FD)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,a.Y)(S.o.Title,{style:{marginBottom:0,marginTop:0},children:"Resize Column"}),(0,a.FD)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,a.Y)(u.$n,{onClick:()=>{n()},size:"small",componentId:"design_system.adjustable_width_header.decrease_width_button",icon:(0,a.Y)(v.A,{}),style:{backgroundColor:C.colors.actionTertiaryBackgroundHover}}),(0,a.Y)(u.$n,{onClick:()=>{r()},size:"small",componentId:"design_system.adjustable_width_header.increase_width_button",icon:(0,a.Y)(b.A,{})})]})]}),(0,a.Y)(y.Arrow,{})]})]}):T}),C=(0,s.forwardRef)(function({children:e,ellipsis:t=!1,multiline:r=!1,sortable:i,sortDirection:u,onToggleSort:f,style:v,className:b,isResizing:y=!1,align:C="left",wrapContent:w=!0,column:_,header:T,setColumnSizing:O,componentId:x,analyticsEvents:P,"aria-label":R,...M},N){let k,$=(0,A.W)("databricks.fe.observability.defaultComponentView.tableHeader",!1),D=_?.getCanResize()||M.resizable||!1,U=T?.getResizeHandler()||M.resizeHandler,L=_&&T&&O,{size:Y,grid:G}=(0,s.useContext)(l.G),{isHeader:H}=(0,s.useContext)(c.g),[B,W]=(0,s.useState)(u),F=(0,s.useMemo)(()=>P??($?[p.s7.OnValueChange,p.s7.OnView]:[p.s7.OnValueChange]),[P,$]),q=(0,p.ei)({componentType:p.v_.TableHeader,componentId:x,analyticsEvents:F,valueHasNoPii:!0}),{elementRef:V}=(0,I.z)({onView:q.onView,value:B}),z=(0,n.SV)([N,V]);if(!H)throw Error("`TableHeader` a must be used within a `TableRow` with `isHeader` set to true.");let K=(0,a.Y)(a.FK,{});i&&("asc"===u?(K=(0,a.Y)(m.A,{}),k="ascending"):"desc"===u?(K=(0,a.Y)(g.A,{}),k="descending"):"none"===u&&(K=(0,a.Y)(h.A,{}),k="none")),(0,s.useEffect)(()=>{u!==B&&(W(u),q.onValueChange(u))},[u,B,q]);let Q="right"===C,j="md";"small"===Y&&(j="sm");let J=w?(0,a.Y)(S.o.Text,{className:"table-header-text",ellipsis:!r,size:j,title:!r&&"string"==typeof e&&e||void 0,bold:!0,children:e}):e,X=(0,s.useCallback)(e=>()=>{_&&O&&O(t=>({...t,[_.id]:e}))},[_,O]),Z=(0,s.useCallback)(()=>{_&&O&&X(_.getSize()+10)()},[_,O,X]),ee=(0,s.useCallback)(()=>{_&&O&&X(_.getSize()-10)()},[_,O,X]),et=D&&U?(0,a.Y)(E,{style:{height:"default"===Y?"20px":"16px"},resizeHandler:U,increaseWidthHandler:L?Z:void 0,decreaseWidthHandler:L?ee:void 0}):null,er=i&&!y;return(0,a.FD)("div",{...M,ref:z,css:G?void 0:[d.PV.cell,d.PV.header],className:o()(G&&d.lH.cell,G&&d.lH.header,{"table-header-isGrid":G},b),role:"columnheader","aria-sort":i&&k||void 0,style:{justifyContent:C,textAlign:C,...v},"aria-label":er?void 0:R,...q.dataComponentProps,children:[er?(0,a.FD)("div",{css:[d.Ay.headerButtonTarget],role:"button",tabIndex:0,onClick:f,onKeyDown:e=>{if(i&&("Enter"===e.key||" "===e.key))return e.preventDefault(),f?.(e)},"aria-label":er?R:void 0,children:[Q?(0,a.Y)("span",{className:"table-header-icon-container",css:[d.Ay.sortHeaderIconOnLeft],children:K}):null,J,Q?null:(0,a.Y)("span",{className:"table-header-icon-container",css:[d.Ay.sortHeaderIconOnRight],children:K})]}):J,et]})})},320126:(e,t,r)=>{r.d(t,{B:()=>u});var a=r(610435),n=r(219830),i=r(403166),o=r(964133),s=r(944552),l=r(342411),c=r(441535);let d=({value:e,label:t,popoverContent:r})=>(0,a.FD)("div",{style:{display:"flex",gridRow:"label"},children:[(0,a.Y)(n.sx,{value:e,css:{marginRight:0},children:t}),r&&(0,a.Y)("div",{css:{display:"flex",alignItems:"center",paddingTop:1,marginLeft:-6},children:(0,a.Y)(i.U,{children:r})})]}),u=({componentId:e,isAutoscalingSelected:t,formField:r,onChange:i})=>{let{formatMessage:u}=(0,l.tz)(),p=(0,c.W)("databricks.fe.lakebase.hideBetaBadge",!1),f=(0,c.W)("databricks.fe.lakebase.replaceAutoscalingSwitchWithSelector",!1);if(!p||!f)return(0,a.FD)("div",{css:{display:"flex",justifyContent:"space-between"},children:[(0,a.Y)(o.D.Label,{htmlFor:"autoscaling-beta-switch",infoPopoverContents:u(p?{id:"J/59kJ",defaultMessage:"Enable Lakebase Postgres Autoscaling for branching, instant restore, and other advanced features. HA is currently offered only in the Lakebase Provisioned Preview."}:{id:"uCfnkC",defaultMessage:"Enable to use the latest version of Lakebase Postgres, the Autoscaling beta (for evaluation only). For production, leave disabled to use standard Lakebase Postgres."}),infoPopoverProps:{popoverProps:{style:{maxWidth:400}}},children:u(p?{id:"FEhQrw",defaultMessage:"Autoscaling"}:{id:"GWIlJr",defaultMessage:"Autoscaling Beta"})}),(0,a.Y)(s.d,{componentId:e,id:"autoscaling-beta-switch",...r,checked:t,onChange:i})]});return(0,a.FD)("div",{children:[(0,a.Y)(o.D.Label,{htmlFor:"database-type-radio-group",children:(0,a.Y)(l.sA,{id:"yRfOwP",defaultMessage:"Database type"})}),(0,a.FD)(n.sx.HorizontalGroup,{componentId:"catalogCreation.lakebaseDatabaseType",id:"database-type-radio-group",...r,name:r?.name??"autoscalingBeta",value:t?"autoscaling":"provisioned",onChange:e=>{i("autoscaling"===e.target.value)},children:[(0,a.Y)(d,{value:"autoscaling",label:u({id:"Qgmeqm",defaultMessage:"Autoscaling"}),popoverContent:u({id:"3ySzDc",defaultMessage:"Autoscaling compute with branching, instant restore, and advanced features."})}),(0,a.Y)(d,{value:"provisioned",label:u({id:"y4pkKO",defaultMessage:"Provisioned"}),popoverContent:u({id:"9mNQM6",defaultMessage:"High availability (HA) and integration with Databricks apps."})})]})]})}},322227:(e,t,r)=>{r.d(t,{$:()=>i,x:()=>o});var a,n=r(696514),i=((a={}).DONE="done",a.CANCELLED="cancelled",a);let o=(0,n.fH)("Filebrowser::Move")},325056:(e,t,r)=>{r.d(t,{G:()=>u,X:()=>p});var a=r(610435),n=r(783772),i=r.n(n),o=r(692738),s=r(114826),l=r(623369),c=r(497895),d=r(123252);let u=(0,o.createContext)({size:"default",grid:!1}),p=(0,o.forwardRef)(function({children:e,size:t="default",someRowsSelected:r,style:n,pagination:p,empty:f,className:m,scrollable:g=!1,grid:h=!1,noMinHeight:v=!1,onScroll:b,...y},S){let{theme:A}=(0,c.wn)(),I=(0,o.useRef)(null);(0,o.useImperativeHandle)(S,()=>I.current);let E=v?{}:{minHeight:!f&&p?150:100};return(0,a.Y)(l.vR.Provider,{value:l.pz,children:(0,a.Y)(u.Provider,{value:(0,o.useMemo)(()=>({size:t,someRowsSelected:r,grid:h}),[t,r,h]),children:(0,a.FD)("div",{...(0,d.VG)(),...y,style:{...n,"--table-header-active-color":A.colors.actionDefaultTextPress,colorScheme:A.isDarkMode?"dark":void 0,"--table-header-background-color":A.colors.backgroundPrimary,"--table-header-focus-color":A.colors.actionDefaultTextHover,"--table-header-sort-icon-color":A.colors.textSecondary,"--table-header-text-color":A.colors.actionDefaultTextDefault,"--table-row-hover":A.colors.tableRowHover,"--table-separator-color":A.colors.border,"--table-resize-handle-color":A.colors.borderDecorative,"--table-spacing-md":`${A.spacing.md}px`,"--table-spacing-sm":`${A.spacing.sm}px`,"--table-spacing-xs":`${A.spacing.xs}px`},css:[s.Ay.tableWrapper,E],className:i()({"table-isScrollable":g,"table-isGrid":h},m),children:[(0,a.FD)("div",{role:"table",ref:I,css:[s.Ay.table,g&&{flex:"initial !important"}],tabIndex:g?0:-1,onScroll:b,children:[e,f&&(0,a.Y)("div",{css:{padding:A.spacing.lg},children:f})]}),!f&&p&&(0,a.Y)("div",{css:s.Ay.paginationContainer,children:p})]})})})})},342145:(e,t,r)=>{r.d(t,{$y:()=>u,B_:()=>A,FQ:()=>g,OD:()=>s,T4:()=>o,U1:()=>h,UX:()=>f,Yu:()=>b,bB:()=>i,cC:()=>m,k0:()=>n,nU:()=>c,sO:()=>S,sh:()=>d,wp:()=>l,xY:()=>p,xe:()=>y,zD:()=>v});var a=r(141078);let n=(0,a.J1)`
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
`,m=(0,a.J1)`
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
`,S=(0,a.J1)`
  query getWorkspaceServicePrincipalsCount($shouldGetDirectlyAssignedOnly: Boolean)
  @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceServicePrincipalsCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`,A=(0,a.J1)`
  query getWorkspaceGroupsCount($shouldGetDirectlyAssignedOnly: Boolean) @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceGroupsCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`},352185:(e,t,r)=>{r.d(t,{A6:()=>S,Ds:()=>p,FI:()=>u,I7:()=>d,m1:()=>c});var a,n,i,o=r(446835),s=r.n(o),l=r(978679),c=((a={}).CONFIGURATION="configuration",a.NOTEBOOKS="notebooks",a.LIBRARIES="libraries",a.SPARK_UI="sparkUi",a.DRIVER_LOGS="driverLogs",a.METRICS="metrics",a.SPARK_CLUSTER_UI="sparkClusterUi",a.APPS="apps",a.EVENTS="events",a);let d="/compute";var u=((n={}).InteractiveListPage="interactive",n.AutomatedListPage="automated",n.SqlWarehouses="sql-warehouses",n.BrickIndex="vector-search",n.BrickStore="online-stores",n.DatabaseInstances="database-instances",n.InstancePools="instance-pools",n.ClusterPolicies="policies",n.LakehouseApps="apps",n.GpuPools="gpu-pools",n.Serverless="serverless",n),p=((i={}).New="new",i.Edit="edit",i);let f=function e(...t){let r=RegExp("(^/*)|(/*$)","g"),a=s()(t).map(e=>e.trim().replace(r,"")).join("/"),n=a?`/${a}`:"",i=t=>t?e(n,t)():n;return i.append=(...t)=>e(n,...t),i}(d),m=f.append("instance-pools"),g=f.append("policies"),h=f.append("sparkui"),v=f.append("clusters"),b=f.append("database-instances");function y(e){return["driver",e].filter(l.zz).join("-")}let S={clusterMainPage:e=>f(e),sqlWarehouse:{create:()=>f.append("sql-warehouses")("new")},brickStore:{list:()=>S.clusterMainPage("online-stores"),view:e=>f.append("online-stores")(e)},databaseInstances:{list:()=>S.clusterMainPage("database-instances"),view:e=>b(e),edit:e=>b.append(e)("edit")},cluster:{view(e,t,r){let a=v.append(e);if(!t||"configuration"===t)return a();if("driverLogs"===t)return a("driver-logs");if("sparkUi"===t)return a("spark-ui");if("sparkClusterUi"===t)return a.append("spark-compute-ui")(("MASTER"===r?"master":r)??"master");return a(t)},edit:e=>v.append(e)("edit"),new:(e={})=>{let t="policyId"in e?`?policyId=${e.policyId}`:"",r="clone"in e?`?clone=${e.clone}`:"";return v.append("new")(r||t)}},sparkUi:{driverUi:(e,t)=>h.append(e)(`driver${t?`-${t}`:""}`),logs:(e,t)=>{let r=h.append(e)("driver-logs");if(!t?.jobId&&!t?.runId)return r;let a=new URLSearchParams;return t.jobId&&a.set("jobId",String(t.jobId)),t.runId&&a.set("runId",String(t.runId)),`${r}?${a}`},uiWithPath:e=>h.append(e)(),metrics:e=>h.append(e)("metrics"),stage:(e,t,r,a)=>h.append(e,y(t))(`stages/stage?id=${r}&attempt=0${void 0!==a?"&o="+a:""}`),job:(e,t,r,a)=>h.append(e,y(t))(`jobs/job?id=${r}${void 0!==a?"&o="+a:""}`)},brickIndex:{list:()=>S.clusterMainPage("vector-search"),view:e=>f.append("vector-search")(e)},policy:{view:e=>g(e),create:()=>g("new"),clone:e=>S.policy.create()+`?clone=${e}`,edit:e=>g.append(e)("edit")},pool:{view:e=>m(e),create:()=>m("new"),edit:e=>m.append(e)("edit")}}},402720:(e,t,r)=>{let a;r.d(t,{P:()=>c});var n=r(610435),i=r(400136),o=r(591333),s=r(429608),l=r(866370);let c=((a=({dangerouslySetAntdProps:e,label:t,loadingDescription:r="LegacySkeleton",...a})=>{let c=a.loading??!0;return(0,n.Y)(s.wC,{children:(0,n.FD)(o.U,{label:t,children:[c&&(0,n.Y)(l.G,{description:r}),(0,n.Y)(i.A,{...a,...e})]})})}).Button=i.A.Button,a.Image=i.A.Image,a.Input=i.A.Input,a)},404991:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m2.207-10.189a2.25 2.25 0 0 1-1.457 2.56V9h-1.5V7.75A.75.75 0 0 1 8 7a.75.75 0 1 0-.75-.75h-1.5a2.25 2.25 0 0 1 4.457-.439M7.25 10.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="QuestionMarkFillIcon";let l=s},418230:(e,t,r)=>{r.d(t,{U:()=>i});var a=r(692738),n=r(829478);function i(e){var t;return t=a.useMemo(()=>window.matchMedia(e),[e]),(0,n.useSyncExternalStore)(a.useCallback(e=>(t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}),[t]),()=>t.matches)}},424489:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",d:"M12.125 8.864a.75.75 0 0 0 0-1.3l-6-3.464A.75.75 0 0 0 5 4.75v6.928a.75.75 0 0 0 1.125.65z"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="PlayIcon";let l=s},434288:(e,t,r)=>{r.d(t,{l:()=>a});let a=(0,r(342411).YK)({requestPermissions:{id:"CrJ5nP",defaultMessage:"Request permissions"},requestDeltaSharingPermissions:{id:"P0HsgX",defaultMessage:"Request Delta Sharing permissions"},requestAccessDisabledTooltip:{id:"LW+CW/",defaultMessage:"Requests for access are not enabled for this object. Please contact the object owner or administrator for additional permissions."},requestAccessDeltaSharingRecipientDisabledTooltip:{id:"HX5unK",defaultMessage:"Requests for access are not enabled for this object. Please contact the object owner or administrator for USE_PROVIDER permissions."},requestAccessDeltaSharingProviderDisabledTooltip:{id:"pdgj40",defaultMessage:"Requests for access are not enabled for this object. Please contact the object owner or administrator for CREATE_RECIPIENT and CREATE_SHARE permissions."},requestAccessDisabledMultipleTooltip:{id:"b2k+c/",defaultMessage:"Requests for access are not enabled for these objects. Please contact the object owners or administrators for additional permissions."}})},450275:(e,t,r)=>{r.d(t,{d:()=>s,v:()=>n});var a,n=((a={}).Bytes="Bytes",a.KiloBytes="KiloBytes",a.MegaBytes="MegaBytes",a.GigaBytes="GigaBytes",a.TeraBytes="TeraBytes",a.PetaBytes="PetaBytes",a.ExaBytes="ExaBytes",a.ZettaBytes="ZettaBytes",a.YottaBytes="YottaBytes",a);let i={Bytes:0,KiloBytes:1,MegaBytes:2,GigaBytes:3,TeraBytes:4,PetaBytes:5,ExaBytes:6,ZettaBytes:7,YottaBytes:8},o=["Bytes","KiloBytes","MegaBytes","GigaBytes","TeraBytes","PetaBytes","ExaBytes","ZettaBytes","YottaBytes"];function s(e,t="Bytes"){if(e<0)return{size:e,sizeUnit:t};let r=e*Math.pow(1024,i[t]),a=Math.floor(Math.log(r)/Math.log(1024));return{size:r/Math.pow(1024,a=Math.min(Math.max(a,0),o.length-1)),sizeUnit:o[a]}}},459528:(e,t,r)=>{r.d(t,{E:()=>n,v:()=>i});var a=r(696514);let n=(0,a.fH)("Clusters::ExecuteSql"),i=(0,a.fH)("Clusters::CancelSql")},465082:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a3.25 3.25 0 1 0 0 6.5A3.25 3.25 0 0 0 8 1M6.25 4.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M8 9a8.74 8.74 0 0 0-6.836 3.287.75.75 0 0 0-.164.469v1.494c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75v-1.494a.75.75 0 0 0-.164-.469A8.74 8.74 0 0 0 8 9m-5.5 4.5v-.474A7.23 7.23 0 0 1 8 10.5c2.2 0 4.17.978 5.5 2.526v.474z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="UserIcon";let l=s},482921:(e,t,r)=>{r.d(t,{G:()=>i,M:()=>n});var a,n=((a={}).ONLY_CLUSTER="ONLY_CLUSTER",a.ONLY_WAREHOUSE="ONLY_WAREHOUSE",a.WAREHOUSE_AND_CLUSTER="WAREHOUSE_AND_CLUSTER",a);let i=(e,t)=>{if(!t&&e)return"ONLY_CLUSTER";if(!e)return"ONLY_WAREHOUSE";return"WAREHOUSE_AND_CLUSTER"}},509695:(e,t,r)=>{r.d(t,{h:()=>d,p:()=>c});var a=r(610435),n=r(452137),i=r.n(n),o=r(692738),s=r(566512);let l=(0,o.createContext)(void 0),c=({children:e})=>{let[t,r]=(0,s.o)();return(0,a.FD)(l.Provider,{value:t,children:[e,r]})},d=()=>{let e=(0,o.useContext)(l);return i()(null!=e,"Must wrap child in NotificationProvider"),e}},571739:(e,t,r)=>{r.d(t,{J:()=>i,z:()=>o});var a,n=r(696514),i=((a={}).DONE="done",a.CANCELLED="cancelled",a);let o=(0,n.fH)("Filebrowser::Clone")},574132:(e,t,r)=>{r.d(t,{y:()=>i});var a=r(610435);r(692738);var n=r(497895);let i=({disabled:e,children:t})=>{let{theme:r}=(0,n.wn)();return(0,a.Y)("div",{css:{color:r.colors.textSecondary,fontSize:r.typography.fontSizeSm,...e&&{color:r.colors.actionDisabledText}},children:t})}},583971:(e,t,r)=>{r.d(t,{Ri:()=>u});var a=r(733337),n=r(641760),i=r(278983);function o(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function s(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function s(e){o(i,a,n,s,l,"next",e)}function l(e){o(i,a,n,s,l,"throw",e)}s(void 0)})}}let l=[1,1,2,3,5,8,13,21],c=l.length;function d(e){return e instanceof n.XD}function u(e,t){return s(function*(e,t,r=1e3){let n=0,o=null;for(;n<c;)try{return yield(0,a.nr)(e,t)}catch(e){if(o=e,d(e)&&function(e){if(!d(e))return!1;return 429===e.response.status}(e))(0,i.y)("clientsideEvent",{eventType:"ApiFetchRetry",eventName:"RetryAttempt",retryCount:n}),yield function(e){return s(function*(e,t=1e3){let r=function(e,t=1e3){let r=Math.min(e,l.length-1);return l[r]*t}(e,t);return new Promise(e=>setTimeout(e,r))}).apply(this,arguments)}(n,r),n++;else break}throw d(o)&&n===c&&(0,i.y)("clientsideEvent",{eventType:"ApiFetchRetry",eventName:"MaxRetryAttemptReached",errorCode:o?.response?.status,retryCount:n}),o}).apply(this,arguments)}},595615:(e,t,r)=>{r.d(t,{AO:()=>u,Ox:()=>f,RK:()=>g,ic:()=>h,rA:()=>m,uV:()=>p});var a=r(692738),n=r(160603),i=r(441535),o=r(412836),s=r(425373);function l(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}(0,n.setLogger)({log:console.log,warn:console.warn,error:()=>{}});let c={retry:!1,refetchOnWindowFocus:!1,staleTime:3e5},d=new Map;function u(e){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),r={...c,...e,enabled:e?.enabled!==!1&&t},a={...c,...e,enabled:e?.enabled!==!1&&!t};d.set(JSON.stringify(e.queryKey),e.queryKey);let s=(0,o.IT)(r),l=(0,n.useQuery)(a);return t?s:l}function p({queries:e}){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),r=e.map(e=>({...c,...e,enabled:e?.enabled!==!1&&t})),a=e.map(e=>({...c,...e,enabled:e?.enabled!==!1&&!t}));e.forEach(e=>d.set(JSON.stringify(e.queryKey),e.queryKey));let o=(0,s.E)({queries:r}),l=(0,n.useQueries)(a);return t?o:l}function f({queryFn:e}){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),r=(0,n.useQueryClient)(),s=e();return(0,a.useCallback)((e,a={})=>t?o.aH.getActiveValue().fetchQuery({...a,...s(e)},c):r.fetchQuery({...a,...s(e)},c),[s,t,r])}function m(){let[e,t]=(0,a.useState)(0),r=(0,n.useQueryClient)(),s=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1);return{invalidate:(e,a)=>{var n;return(n=function*(){t(e=>e+1);try{if(e)yield s?o.aH.getActiveValue().invalidateQueries(e):r.invalidateQueries(e),d.delete(JSON.stringify(e));else{let e=Array.from(d.values()).filter(e=>{if(!Array.isArray(e))return!1;if(!a)return!0;return e.some(e=>"string"==typeof e&&e.includes(a))}).filter(e=>void 0!==e).map(e=>s?o.aH.getActiveValue().invalidateQueries(e):r.invalidateQueries(e));yield Promise.allSettled(e),d=new Map}}finally{t(e=>e-1)}},function(){var e=this,t=arguments;return new Promise(function(r,a){var i=n.apply(e,t);function o(e){l(i,r,a,o,s,"next",e)}function s(e){l(i,r,a,o,s,"throw",e)}o(void 0)})})()},isLoadingInvalidation:e>0}}function g(e){for(let t of e){let e=t.isIdle??void 0;if(!h({isIdle:e,status:t.status??void 0,fetchStatus:t.fetchStatus??void 0}))return!1}return!0}function h(e){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),r=e.isIdle??!1;if(t)return"fetchStatus"in e&&"loading"===e.status&&"idle"===e.fetchStatus;return r}},599349:(e,t,r)=>{r.d(t,{M:()=>p});var a=r(610435),n=r(956935),i=r(692738),o=r(5421),s=r(79128),l=r(497895),c=r(369291),d=r(174541),u=r(639712);let p=(0,i.forwardRef)(({children:e,...t},r)=>{let{theme:i}=(0,l.wn)(),{isInsideTypeaheadCombobox:p,componentId:f}=(0,o.T)();if(!p)throw Error("`TypeaheadComboboxAddButton` must be used within `TypeaheadCombobox`");return(0,a.Y)(s.$n,{...t,componentId:`${f}.add_option`,type:"tertiary",onClick:e=>{e.stopPropagation(),t.onClick?.(e)},onMouseUp:e=>{e.stopPropagation(),t.onMouseUp?.(e)},className:"combobox-footer-add-button",css:{...(0,d.RB)(i),...(0,n.AH)((0,u.dg)({width:"100%",padding:0,display:"flex",alignItems:"center",borderRadius:0,"&:focus":{background:i.colors.actionTertiaryBackgroundHover,outline:"none"}}))},icon:(0,a.Y)(c.A,{}),ref:r,children:e})})},604808:(e,t,r)=>{r.d(t,{O:()=>n});var a=r(686560);function n(){let e=(0,a.d)("unityCatalogServiceEnabled",!1),t=(0,a.d)("isMetastoreInstalled_new",!1);return e&&t}},605107:(e,t,r)=>{r.d(t,{X:()=>i});var a=r(610435),n=r(497895);let i=({children:e,...t})=>{let{theme:r}=(0,n.wn)();return(0,a.Y)("div",{...t,css:{display:"flex",flexDirection:"row",alignItems:"flex-start",padding:`${r.spacing.xs}px ${r.spacing.lg/2}px`,alignSelf:"stretch",fontWeight:400,color:r.colors.textSecondary},children:e})}},653800:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("path",{fill:"currentColor",d:"M11.5 8.75h-7v-1.5h7z"}),(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.75 1a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75V1.75a.75.75 0 0 0-.75-.75zm.75 12.5v-11h11v11z",clipRule:"evenodd"})]})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="MinusSquareIcon";let l=s},655841:(e,t,r)=>{r.d(t,{GX:()=>u,HA:()=>i,Ij:()=>d,U8:()=>n,_:()=>o,e:()=>l,fq:()=>p,n$:()=>c,r4:()=>s});var a=r(141078);let n=(0,a.J1)`
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
`},673036:(e,t,r)=>{r.d(t,{w:()=>i});var a=r(610435),n=r(497895);let i=e=>{let{theme:t}=(0,n.wn)();return(0,a.Y)("div",{...e,css:{display:"flex",flexDirection:"row",alignItems:"center",margin:`${t.spacing.xs}px ${t.spacing.lg/2}px`,border:`1px solid ${t.colors.borderDecorative}`,borderBottom:0,alignSelf:"stretch"}})}},691069:(e,t,r)=>{r.d(t,{C:()=>c});var a=r(610435);r(692738);var n=r(497895),i=r(465082),o=r(26971),s=r(777517),l=r(342411);let c=({kind:e,disabled:t,style:r})=>{let{theme:c}=(0,n.wn)(),d=(0,l.tz)(),u={alignItems:"center",background:t?void 0:c.colors.backgroundSecondary,borderRadius:30,color:t?c.colors.actionDisabledText:c.colors.textSecondary,display:"flex",fontSize:20,height:30,justifyContent:"center",width:30};switch(e){case"user":return(0,a.Y)(i.A,{title:d.formatMessage({id:"9vv8Gs",defaultMessage:"User"}),css:r||u});case"group":return(0,a.Y)(o.A,{title:d.formatMessage({id:"Qzw3C/",defaultMessage:"Group"}),css:r||u});case"serviceprincipal":return(0,a.Y)(s.A,{title:d.formatMessage({id:"QrVB43",defaultMessage:"Service Principal"}),css:r||u});default:return null}}},708396:(e,t,r)=>{r.d(t,{R:()=>s});var a=r(441535),n=r(141078),i=r(641760);let o=(0,n.J1)`
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
`;function s({type:e,fullName:t,skip:r=!1}){let l=(0,a.W)("databricks.fe.rfa.skipNonUcSecurables",!1),c=t.split(".")[0],d=l&&!(0,i.jN)({catalog:c}),{data:u,loading:p,error:f}=(0,n.IT)(o,{variables:{fullName:t,type:e},skip:!e||r||d});return{isLoading:p,isEnabled:!d&&u?.requestforaccessGetStatus?.isEnabled,error:f}}},733337:(e,t,r)=>{r.d(t,{Ky:()=>d,Ur:()=>u,nr:()=>c});var a=r(583971),n=r(641760),i=r(441535),o=r(19123);function s(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function l(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){s(i,a,n,o,l,"next",e)}function l(e){s(i,a,n,o,l,"throw",e)}o(void 0)})}}function c(e,t){return l(function*(){let r=yield(0,o.h)(e,t);if(!r.ok){let t;try{t=yield r.json()}catch(e){}throw new n.XD(e,r,t)}return yield r.json()})()}function d(e,t,r,n,o){return l(function*(){let s,l={response:[],next_page_token:void 0},c=(0,i.W)("databricks.fe.uc.defaultPaginationWindowSize",0),d=void 0!==n?n:c;do{let n=r?.useCentralPagination?{"pagination_context.max_results":d,...r?.queryParameters}:{[o??"max_results"]:d,...r?.queryParameters};s&&(r?.useCentralPagination?n["pagination_context.page_token"]=s:n.page_token=s);let i=new URLSearchParams(n),c=`${e}?${i}`;try{let e=yield(0,a.Ri)(c,r);if(!e)break;let n=yield t(e);n&&l.response.push(...n),r?.useCentralPagination?(l.next_page_token=e.pagination?.next_page_token,s=e.pagination?.next_page_token):(l.next_page_token=e.next_page_token,s=e.next_page_token)}catch(e){throw e}}while(s);return l.response})()}function u(e){return e instanceof n.XD&&404===e.response.status&&"METASTORE_DOES_NOT_EXIST"===e.response.data.error_code}},733845:(e,t,r)=>{r.d(t,{O:()=>o});var a=r(686560),n=r(689262),i=r(441535);function o(){let e=(0,n.b)("unityCatalogServiceEnabled",(0,a.d)("unityCatalogServiceEnabled",!1),()=>(0,i.W)("databricks.unitycatalog.enableUnityCatalogService",!1)),t=(0,a.d)("isMetastoreInstalled_new",!1);return e&&t}},768622:(e,t,r)=>{r.d(t,{Jq:()=>y,bb:()=>A});var a=r(610435),n=r(956935),i=r(802558),o=r.n(i),s=r(91958),l=r.n(s),c=r(692738),d=r(497895),u=r(194901),p=r(161330),f=r(174541),m=r(574132),g=r(639712);let h={paddingTop:2},v={width:16,flexShrink:0},b={display:"flex"},y=l()((e,t,r)=>(0,n.AH)({...r&&{pointerEvents:"none",color:e.colors.actionDisabledText},...t&&{background:e.colors.actionTertiaryBackgroundHover}}),(e,t,r)=>`${(0,g.H6)(e)}|${t}|${!!r}`),S=l()((e,t)=>(0,n.AH)({marginLeft:e.spacing.sm,fontSize:e.typography.fontSizeBase,fontStyle:"normal",fontWeight:400,cursor:"pointer",overflow:"hidden",wordBreak:"break-word",..."ellipsis"===t&&{textOverflow:"ellipsis",whiteSpace:"nowrap"}}),(e,t)=>`${(0,g.H6)(e)}|${t}`),A=(0,c.forwardRef)(({item:e,index:t,comboboxState:r,textOverflowMode:n="multiline",isDisabled:i,disabledReason:s,hintContent:l,onClick:g,children:A,...I},E)=>{let{selectedItem:C,highlightedIndex:w,getItemProps:_,isOpen:T}=r,O=o()(C,e),x=w===t,{theme:P}=(0,d.wn)(),R=(0,c.useRef)(null);(0,c.useImperativeHandle)(E,()=>R.current);let{onClick:M,...N}=_({item:e,index:t,disabled:i,onMouseUp:e=>{e.stopPropagation(),I.onMouseUp?.(e)},ref:R});return(0,c.useEffect)(()=>{if(T&&w===t&&R.current){let e=R.current.closest("ul");if(!e)return;let t=e.scrollTop,r=e.scrollTop+e.clientHeight,a=R.current.offsetTop,n=R.current.offsetTop+R.current.clientHeight;(a<t||n>r)&&R.current?.scrollIntoView({block:"nearest"})}},[w,t,T,R]),(0,a.FD)("li",{role:"option","aria-selected":O,"aria-disabled":i,onClick:e=>{g?.(e),M?.(e)},css:[(0,f.RB)(P),y(P,x,i)],...N,...I,children:[O?(0,a.Y)(u.A,{css:h}):(0,a.Y)("div",{style:v}),(0,a.FD)("label",{css:S(P,n),children:[i&&s?(0,a.FD)("div",{css:b,children:[(0,a.Y)("div",{children:A}),(0,a.Y)("div",{css:(0,f.eO)(P),children:(0,a.Y)(p.I,{componentId:"typeahead-combobox-menu-item-disabled-reason-info-tooltip",side:"right",content:s})})]}):A,(0,a.Y)(m.y,{disabled:i,children:l})]})]})});A.defaultProps={_type:"TypeaheadComboboxMenuItem"}},777517:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 0a.75.75 0 0 1 .75.75V3h5.5a.75.75 0 0 1 .75.75V6h.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75H15v2.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V12H.75a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 .75 6H1V3.75A.75.75 0 0 1 1.75 3h5.5V.75A.75.75 0 0 1 8 0M2.5 4.5v9h11v-9zM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6.25 2.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="RobotIcon";let l=s},800205:(e,t,r)=>{r.d(t,{h:()=>c});var a=r(441535),n=r(733337),i=r(660618),o=r(595615),s=r(302118);function l(e,t,r){return(0,o.AO)({queryKey:["data_explorer_samples_schema",t],queryFn:()=>(0,n.nr)(`${i.bY}/schemas/${encodeURIComponent(e)}.${encodeURIComponent(t)}?include_browse=true`),...r})}function c(e){var t;let r=(0,a.W)("databricks.fe.marketplace.enableNewUCBasedSamplesUI",!1),n=(t={enabled:e===i.lx&&r,keepPreviousData:!0},(0,o.AO)({queryKey:["data_explorer_samples_catalog_details"],queryFn:function(){return s.k.getCatalogDetails(i.lx)},...t})),c=l(e,"nyctaxi",{enabled:e===i.lx&&r,keepPreviousData:!0}),d=l(e,"tpch",{enabled:e===i.lx&&r,keepPreviousData:!0});return e===i.lx&&n.isSuccess&&c.isSuccess&&d.isSuccess&&r}},804723:(e,t,r)=>{r.d(t,{S:()=>l});var a=r(610435),n=r(5421),i=r(497895),o=r(174541);let s=({children:e,...t})=>{let{theme:r}=(0,i.wn)(),{isInsideTypeaheadCombobox:s}=(0,n.T)();if(!s)throw Error("`TypeaheadComboboxFooter` must be used within `TypeaheadComboboxMenu`");return(0,a.Y)("div",{...t,css:(0,o.UA)(r),children:e})};s.defaultProps={_type:"TypeaheadComboboxFooter"};let l=s},814947:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",d:"m11.5.94 4.03 4.03-1.06 1.06-2.22-2.22V10h-1.5V3.81L8.53 6.03 7.47 4.97zM1 4.5h4V6H1zM1 12.5h10V14H1zM8 8.5H1V10h7z"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="SortAscendingIcon";let l=s},820097:(e,t,r)=>{r.d(t,{H:()=>i,Z:()=>o});var a,n=r(696514),i=((a={}).DONE="done",a.CANCELLED="cancelled",a);let o=(0,n.fH)("Filebrowser::CloneRedashToLakeview")},829845:(e,t,r)=>{r.d(t,{BC:()=>g,E$:()=>y,PT:()=>v,Th:()=>b,UA:()=>S,dG:()=>p,rD:()=>m,tg:()=>h,x3:()=>f});var a=r(820097),n=r(571739),i=r(437475),o=r(322227),s=r(242995),l=r(75036),c=r(751097),d=r(659573),u=r(311529);let p=(e,t,r,a)=>o.x.call({name:e,internalName:t,initialOpenFolderName:r,initialOpenFolderInternalName:a}),f=e=>n.z.call(e),m=e=>a.Z.call(e),g=e=>i.V1.call(e),h=(e,t,r)=>u.x.call({name:e,internalName:t,...r}),v=e=>d.v.call(e),b=e=>l.e.call(e),y=e=>s.h.call(e),S=e=>c.x.call(e)},834343:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("g",{clipPath:"url(#SearchIcon_svg__a)",children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a7 7 0 1 0 4.39 12.453l2.55 2.55 1.06-1.06-2.55-2.55A7 7 0 0 0 8 1M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0",clipRule:"evenodd"})}),(0,a.Y)("defs",{children:(0,a.Y)("clipPath",{children:(0,a.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="SearchIcon";let l=s},837334:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("path",{fill:"currentColor",d:"M7.25 7.25V4.5h1.5v2.75h2.75v1.5H8.75v2.75h-1.5V8.75H4.5v-1.5z"}),(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1 1.75A.75.75 0 0 1 1.75 1h12.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75zm1.5.75v11h11v-11z",clipRule:"evenodd"})]})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="PlusSquareIcon";let l=s},848737:(e,t,r)=>{r.d(t,{d:()=>m});var a=r(610435),n=r(692738),i=r(545251),o=r(305404),s=r(994796),l=r(497895),c=r(834343),d=r(407374),u=r(469490),p=r(569546);let f=e=>{if("string"==typeof e||"number"==typeof e)return e.toString();if(n.isValidElement(e)&&e.props.children)return n.Children.toArray(e.props.children).map(f).join(" ");return""},m=(0,n.forwardRef)(({onChange:e,onSearch:t,virtualized:r,children:m,hasWrapper:g,controlledValue:h,setControlledValue:v,rightSearchControls:b,...y},S)=>{let{theme:A}=(0,l.wn)(),{componentId:I}=(0,i.w)(),{isInsideDialogComboboxOptionList:E}=(0,o.r)(),C=`no-result-${(0,p.B)()}`,w=(0,n.useRef)(null);(0,n.useImperativeHandle)(S,()=>w.current);let[_,T]=n.useState();if(!E)throw Error("`DialogComboboxOptionListSearch` must be used within `DialogComboboxOptionList`");let O=m;if(_&&!r&&void 0===h){var x;let e;x=g?m.props.children:m,e=_.toLowerCase(),O=n.Children.map(x,t=>{if(n.isValidElement(t)){let r=t.props.__EMOTION_TYPE_PLEASE_DO_NOT_USE__?.defaultProps._TYPE??t.props._TYPE;if("DialogComboboxOptionListSelectItem"===r||"DialogComboboxOptionListCheckboxItem"===r){let r=f(t).toLowerCase(),a=t.props.value?.toLowerCase()??"";return r.includes(e)||a.includes(e)?t:null}}return t})?.filter(e=>e),g&&(O=n.cloneElement(m,{},O))}let P=(0,n.useRef)(null);(0,n.useEffect)(()=>{if(!P.current)return;let e=(0,s.aV)(P.current);if(e){let t=(0,s.kQ)(e),r=e?.[0];r&&(0,s.ed)(r,t,!1)}},[_]);let R=n.Children.toArray(g?m.props.children:m).some(e=>n.isValidElement(e)),M=g&&O?.props.children?.length||!g&&O?.length;return(0,n.useEffect)(()=>{M||w.current?.input?.setAttribute("aria-activedescendant",C)},[M,C,w.current?.input?.value]),(0,a.FD)(a.FK,{children:[(0,a.Y)("div",{ref:P,css:{padding:`${A.spacing.sm}px ${A.spacing.lg/2}px ${A.spacing.sm}px`,width:"100%",boxSizing:"border-box",position:"sticky",top:0,background:A.colors.backgroundPrimary,zIndex:A.options.zIndexBase+1},children:(0,a.FD)("div",{css:{display:"flex",flexDirection:"row",gap:A.spacing.sm},children:[(0,a.Y)(d.p,{componentId:I?`${I}.search`:"codegen_design_system_src_design_system_dialogcombobox_dialogcomboboxoptionlistsearch.tsx_173",type:"search",name:"search",ref:w,prefix:(0,a.Y)(c.A,{}),placeholder:"Search",onChange:e=>{r||T(e.target.value),v?.(e.target.value),t?.(e.target.value)},onKeyDown:e=>{(e=>{if("ArrowDown"!==e.key&&"ArrowUp"!==e.key&&"Enter"!==e.key)return;e.preventDefault();let t=(0,s.aV)(e.target);if(!t)return;let r=(0,s.kQ)(t);if("ArrowDown"===e.key||"ArrowUp"===e.key)if(r){let a=(0,s.oS)(r,"ArrowDown"===e.key?"next":"previous");if(a)(0,s.ed)(a,r,!1);else if("ArrowDown"===e.key){let e=t[0];(0,s.ed)(e,r,!1)}else if("ArrowUp"===e.key){let e=t[t.length-1];(0,s.ed)(e,r,!1)}}else{let r="ArrowDown"===e.key?t[0]:t[t.length-1];r&&(0,s.ed)(r,void 0,!1)}else"Enter"===e.key&&r&&r.click()})(e),y.onKeyDown?.(e)},value:h??_,shouldPreventFormSubmission:!0,...y}),b]})}),r?m:M&&R?(0,a.Y)("div",{"aria-live":"polite",css:{width:"100%"},children:O}):(0,a.Y)(u.i,{id:C})]})})},850723:(e,t,r)=>{r.d(t,{J:()=>o,O:()=>s});var a=r(160603),n=r(302118);function i(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}let o=["get_metastore_summary"];function s({fallback:e,useQueryOptions:t}={}){return(0,a.useQuery)({queryKey:o,queryFn:()=>{var t;return(t=function*(){return e?yield n.k.getMetastoreSummaryWithFallBack():yield n.k.getMetastoreSummary()},function(){var e=this,r=arguments;return new Promise(function(a,n){var o=t.apply(e,r);function s(e){i(o,a,n,s,l,"next",e)}function l(e){i(o,a,n,s,l,"throw",e)}s(void 0)})})()},...t})}},861403:(e,t,r)=>{r.d(t,{b:()=>f});var a=r(778529),n=r.n(a),i=r(536717),o=r.n(i),s=r(692738),l=r(342411),c=r(595338);let d=/summary:\s*(.*?)(?=,\s*data:)/s;var u=r(482921),p=r(308879);function f(e,t=!0,r=!1){let a=(0,l.tz)(),{isEnabled:i}=(0,p.L)();return(0,s.useMemo)(()=>{let s=e;if(n()(s))return;if((0,c.F0)(e)?s=function(e,t){if(t.response?.status===429)return e.formatMessage({id:"O57kaK",defaultMessage:"Error 429: Too many requests. Please wait a moment and try again. If the issue persists, consider adjusting your request frequency or reaching out to support for assistance."});{let e=t.response?.data;return e?.message??e}}(a,e):e instanceof Error&&(s=function(e,t){if(t&&e.cause&&"string"==typeof e.cause)return e.cause;if("SqlQueryError"!==e.name)return e.message;var r=e.message;let a=r.match(/Details:\s*([^,]*)/);if(a&&a.length>=0)return a[0];return r}(e,r)),o()(s)){var l=s,p=a,f=t,m=i;if(l.includes("Catalog namespace is not supported")||l.includes("Unity catalog is not enabled"))switch((0,u.G)(f,m)){case u.M.ONLY_CLUSTER:return p.formatMessage({id:"Z2EuPV",defaultMessage:"This cluster is incompatible with sample data for Unity Catalog tables. Please use Databricks Runtime 11.1 or higher or contact Databricks for assistance."});case u.M.ONLY_WAREHOUSE:return p.formatMessage({id:"Uvfp1K",defaultMessage:"This warehouse is incompatible with sample data for Unity Catalog tables. Please use Databricks Runtime 11.1 or higher or contact Databricks for assistance."});case u.M.WAREHOUSE_AND_CLUSTER:return p.formatMessage({id:"u0m7LZ",defaultMessage:"This warehouse or cluster is incompatible with sample data for Unity Catalog tables. Please use Databricks Runtime 11.1 or higher or contact Databricks for assistance."});default:return""}let e=l.match(d);if(e)return e[0].trim();return l}return JSON.stringify(s)},[e,a,r,t,i])||""}},886688:(e,t,r)=>{r.d(t,{U:()=>l,u:()=>c});var a=r(689262),n=r(686560),i=r(709262),o=r(805287);let s=()=>(0,o.gz)({cloud:"AWS",userCanUseDatabricksWorkspace:(0,n.d)("userCanUseDatabricksWorkspace_new",!1),userCanUseSqlService:(0,n.d)("userCanUseSqlService_new",!1),enableSqlService:(0,a.b)("enableSqlService",(0,n.d)("enableSqlService",!1),()=>(0,n.d)("dbSqlEnabled_new",!1)),centralizedLoginEnabled:(0,n.d)("centralizedLoginEnabled",!1)}),l=()=>s()[i.EU].availableInEnvironment,c=()=>s()[i.EU].allowed},907046:(e,t,r)=>{r.d(t,{n:()=>i});var a=r(610435),n=r(939578);let i=e=>{let{name:t,children:r,...i}=e;return(0,a.FD)(a.FK,{children:[(0,a.Y)(n.y,{...i,children:t}),r]})}},920174:(e,t,r)=>{r.d(t,{E:()=>i});var a=r(441535),n=r(886688);function i(){let e=(0,a.W)("databricks.warehouses.defaultWarehouseSettingEnabled",!1),t=(0,a.W)("databricks.fe.warehouses.defaultWarehouseSettingUIEnabled",!1),r=(0,a.W)("default_wh_setting",!1);return e&&(r||t)&&(0,n.u)()}},936743:(e,t,r)=>{r.d(t,{G:()=>s,l:()=>o});var a=r(610435),n=r(692738),i=r(62947);let o=e=>{switch(e.kind){case"group":return{group_name:e.name,group_id:e.id};case"user":return{user_name:e.name,user_id:e.id};case"serviceprincipal":return{service_principal_display_name:e.displayName,service_principal_id:e.id,service_principal_name:e.applicationId}}},s=({onUpdate:e,onUpdateSubject:t,showAccountLevelEntities:r,...s})=>{let l=(0,n.useCallback)(r=>{let a;Array.isArray(r)?a=r.map(e=>o(e)):void 0!==r&&(a=o(r)),e&&e(a),t&&t(r)},[e,t]);return(0,a.Y)(i.T,{enableAccountGroups:!!r,enableAccountServicePrincipals:!!r,enableAccountUsers:!!r,enableWorkspaceGroups:!r,enableWorkspaceServicePrincipals:!r,enableWorkspaceUsers:!r,onUpdate:e||t?l:void 0,...s})}},939578:(e,t,r)=>{r.d(t,{y:()=>o});var a=r(610435),n=r(545251),i=r(605107);let o=({children:e,...t})=>{let{isInsideDialogCombobox:r}=(0,n.w)();if(!r)throw Error("`DialogComboboxSectionHeader` must be used within `DialogCombobox`");return(0,a.Y)(i.X,{...t,children:e})}},962664:(e,t,r)=>{r.d(t,{N:()=>u});var a=r(610435),n=r(692738),i=r(768622),o=r(332702),s=r(497895),l=r(161330),c=r(174541),d=r(574132);let u=(0,n.forwardRef)(({item:e,index:t,comboboxState:r,selectedItems:u,selectedMatcher:p,textOverflowMode:f="multiline",isDisabled:m,disabledReason:g,hintContent:h,onClick:v,children:b,...y},S)=>{let{highlightedIndex:A,getItemProps:I,isOpen:E}=r,C=A===t,{theme:w}=(0,s.wn)(),_=p?u.some(t=>p(t,e)):u.includes(e),T=(0,n.useRef)(null);(0,n.useImperativeHandle)(S,()=>T.current);let{onClick:O,...x}=I({item:e,index:t,disabled:m,onMouseUp:e=>{e.stopPropagation(),y.onMouseUp?.(e)},ref:T});return(0,n.useEffect)(()=>{if(E&&A===t&&T.current){let e=T.current.closest("ul");if(!e)return;let t=e.scrollTop,r=e.scrollTop+e.clientHeight,a=T.current.offsetTop,n=T.current.offsetTop+T.current.clientHeight;(a<t||n>r)&&T.current?.scrollIntoView({block:"nearest"})}},[A,t,E,T]),(0,a.Y)("li",{role:"option","aria-selected":_,disabled:m,onClick:e=>{v?.(e),O(e)},css:[(0,c.RB)(w),(0,i.Jq)(w,C,m)],...x,...y,children:(0,a.Y)(o.Sc,{componentId:"codegen_design-system_src_design-system_typeaheadcombobox_typeaheadcomboboxcheckboxitem.tsx_92",disabled:m,isChecked:_,css:(0,c.WS)(w,f),tabIndex:-1,onClick:e=>{e.stopPropagation()},children:(0,a.FD)("label",{children:[m&&g?(0,a.FD)("div",{css:{display:"flex"},children:[(0,a.Y)("div",{children:b}),(0,a.Y)("div",{css:(0,c.eO)(w),children:(0,a.Y)(l.I,{componentId:"typeahead-combobox-checkbox-item-disabled-reason-info-tooltip",content:g})})]}):b,(0,a.Y)(d.y,{disabled:m,children:h})]})})})});u.defaultProps={_type:"TypeaheadComboboxCheckboxItem"}},999157:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",d:"M11.5.94 7.47 4.97l1.06 1.06 2.22-2.22v8.38L8.53 9.97l-1.06 1.06 4.03 4.03 4.03-4.03-1.06-1.06-2.22 2.22V3.81l2.22 2.22 1.06-1.06zM6 3.5H1V5h5zM6 11.5H1V13h5zM1 7.5h5V9H1z"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="SortUnsortedIcon";let l=s}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/91330.8308329525.chunk.js.map