"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[21018],{7319:(e,a,t)=>{t.d(a,{_:()=>o,h:()=>n});var r=t(692738),i=t(879612);function n(e){if(!e)return!1;return"CONNECTION_HTTP_OAUTH_U2M_MAPPING"===e||"CONNECTION_HTTP_DCR"===e||"CONNECTION_SLACK_OAUTH_U2M_MAPPING"===e}function o(e){let a=(0,i.x5)({isUcEnabled:!0});return(0,r.useMemo)(()=>{if(!e)return!1;if(a.data?.kinds){let t=a.data.kinds.find(a=>a.securable_kind===e);return t?.capabilities?.includes("HAS_GENERIC_ACCESS_TOKEN_FLOW")??!1}return n(e)},[e,a.data])}},26446:(e,a,t)=>{t.d(a,{HT:()=>d,M8:()=>u,Pf:()=>l,bp:()=>s,gb:()=>r,iN:()=>c,pP:()=>i,xB:()=>p});let r=1e3,i={enableAccountGroups:!1,enableAccountServicePrincipals:!1,enableAccountUsers:!1,enableWorkspaceGroups:!1,enableWorkspaceServicePrincipals:!1,enableWorkspaceUsers:!1},n=/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,o={admins:"Admins",users:"All workspace users","account users":"All account users"},l=e=>{if(!e)return e;return o[e]??e},s=e=>{let a=new Map;return e.forEach(e=>{let t=d(e)||e.name;a.has(t)||a.set(t,[]),a.get(t)?.push(e)}),a},c=e=>{switch(e.kind){case"user":return e.fullName;case"serviceprincipal":return e.name;case"group":return e.displayName;default:return""}},d=e=>{switch(e.kind){case"user":case"group":return e.name||"";case"serviceprincipal":return e.applicationId||"";default:return""}},u=({uniqueName:e,id:a,kind:t,displayName:r})=>{switch(t){case"user":return{id:a||"",optionId:`user.${a}`,kind:t,name:e||"",fullName:r||"",title:""};case"serviceprincipal":return{id:a||"",optionId:`serviceprincipal.${a}`,kind:t,name:r||"",applicationId:e||"",title:""};case"group":return{id:a||"",optionId:`group.${a}`,kind:t,name:e||"",displayName:l(e||""),title:""};default:return}};function p(e){return e?n.test(e)?"serviceprincipal":"user":void 0}},40938:(e,a,t)=>{t.d(a,{Y:()=>i});var r=t(441535);function i(){return(0,r.W)("databricks.fe.tagpolicy.enableV2TagPolicyAPIs",!1)}},74348:(e,a,t)=>{t.d(a,{h:()=>y});var r=t(610435),i=t(692738),n=t(441535),o=t(140718),l=t(342411),s=t(125230),c=t(350318);let d=({value:e,onChange:a,error:t,...i})=>{let n=(0,l.tz)(),d=(0,c.ce)(),{data:u,isLoading:p}=(0,s.Nx)({enabled:d,pageSize:s.Ml});return(0,r.Y)(o.XA,{allowClear:!0,width:"100%",value:e,onChange:e=>a(e.target.value),label:n.formatMessage({id:"Dh2KGp",defaultMessage:"Project"}),placeholder:n.formatMessage({id:"aerQeA",defaultMessage:"Select project"}),contentProps:{matchTriggerWidth:!0,loading:d&&p},validationState:t?"error":void 0,...i,children:u?.map(e=>(0,r.Y)(o.wS,{value:e.id,children:(0,r.Y)("span",{children:e.name})},e.id))})};var u=t(466213),p=t(497895),f=t(996648),b=t(927802),h=t(684944),g=t(461815),m=t(768622);let v=({id:e,onChange:a,error:t})=>{let n=(0,l.tz)(),{theme:o}=(0,p.wn)(),[d,v]=(0,u.d7)("",300),y=(0,c.ce)(),{data:S,isLoading:A}=(0,s.Nx)({enabled:y,pageSize:s.Ml,filter:d}),C=(0,i.useCallback)(e=>{a(e?.id)},[a]),w=(0,f.SY)({componentId:"web-shared.brickstore.DatabaseProjectSelectV2",allItems:S??[],items:S??[],setItems:()=>{},itemToString:e=>e?.name??"",formOnChange:C});(0,i.useEffect)(()=>{v(w.inputValue.trim())},[v,w.inputValue]);let I={"&.error":{borderColor:`${o.colors.red500} !important`}};return(0,r.FD)(b.h,{id:e,multiSelect:!1,comboboxState:w,children:[(0,r.Y)(h.$,{formOnChange:C,placeholder:n.formatMessage({id:"aerQeA",defaultMessage:"Select project"}),className:t?"error":"",dangerouslyAppendEmotionCSS:I,comboboxState:w}),(0,r.Y)(g.i,{width:300,loading:y&&A,comboboxState:w,children:S?.map((e,a)=>(0,r.Y)(m.bb,{item:e,index:a,comboboxState:w,children:e.name},`project-${e.id}`))})]})},y=e=>{let a=(0,i.useMemo)(()=>(0,n.W)("databricks.fe.lakebase.useDatabaseProjectSelectV2",!1)?v:d,[]);return(0,r.Y)(a,{...e})}},75036:(e,a,t)=>{t.d(a,{e:()=>o,s:()=>n});var r,i=t(696514),n=((r={}).DONE="done",r.CANCELED="canceled",r);let o=(0,i.fH)("Filebrowser::SelectFolderNode")},114826:(e,a,t)=>{t.d(a,{Ay:()=>b,M0:()=>f,PV:()=>d,TJ:()=>u,lH:()=>c,yA:()=>p});var r=t(956935),i=t(469723),n=t.n(i),o=t(322560),l=t.n(o);function s(){return l()(20,()=>n()(35).toString(36)).join("")}let c={cell:`js--ds-table-cell-${s()}`,header:`js--ds-table-header-${s()}`,row:`js--ds-table-row-${s()}`},d={cell:(0,r.AH)({display:"inline-grid",position:"relative",flex:1,boxSizing:"border-box",paddingLeft:"var(--table-spacing-sm)",paddingRight:"var(--table-spacing-sm)",wordBreak:"break-word",overflow:"hidden","& .anticon":{verticalAlign:"text-bottom"}}),header:(0,r.AH)({fontWeight:"bold",alignItems:"flex-end",display:"flex",overflow:"hidden","&[aria-sort]":{cursor:"pointer",userSelect:"none"},".table-header-text":{color:"var(--table-header-text-color)"},".table-header-icon-container":{color:"var(--table-header-sort-icon-color)",display:"none"},"&[aria-sort]:hover":{".table-header-icon-container, .table-header-text":{color:"var(--table-header-focus-color)"}},"&[aria-sort]:active":{".table-header-icon-container, .table-header-text":{color:"var(--table-header-active-color)"}},'&:hover, &[aria-sort="ascending"], &[aria-sort="descending"]':{".table-header-icon-container":{display:"inline"}}}),row:(0,r.AH)({display:"flex","&.table-isHeader":{"> *":{backgroundColor:"var(--table-header-background-color)"},".table-isScrollable &":{position:"sticky",top:0,zIndex:1}},'.table-row-select-cell input[type="checkbox"] ~ *':{opacity:"var(--row-checkbox-opacity, 0)"},"&:not(.table-row-isGrid)&:hover":{"&:not(.table-isHeader)":{backgroundColor:"var(--table-row-hover)"},'.table-row-select-cell input[type="checkbox"] ~ *':{opacity:1}},'.table-row-select-cell input[type="checkbox"]:focus ~ *':{opacity:1},"> *":{paddingTop:"var(--table-row-vertical-padding)",paddingBottom:"var(--table-row-vertical-padding)",borderBottom:"1px solid",borderColor:"var(--table-separator-color)"},"&.table-row-isGrid > *":{borderRight:"1px solid",borderColor:"var(--table-separator-color)"},"&.table-row-isGrid > :first-of-type":{borderLeft:"1px solid",borderColor:"var(--table-separator-color)"},"&.table-row-isGrid.table-isHeader:first-of-type > *":{borderTop:"1px solid",borderColor:"var(--table-separator-color)"}})},u=`hide-icon-button-${s()}`,p=`skip-hide-icon-button-${s()}`,f=(0,r.AH)({[`.${u} button.${p}`]:{opacity:"1 !important",transition:"opacity 0.1s ease !important"},[`.${u} button:has(> span.anticon[role="img"]:only-child),
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
    .${u} button[aria-expanded="true"]:has(i.fa:only-child),`]:{opacity:1}}),b={tableWrapper:(0,r.AH)({"&.table-isScrollable":{overflow:"auto"},display:"flex",flexDirection:"column",height:"100%",[`.${c.cell}`]:d.cell,[`.${c.header}`]:d.header,[`.${c.row}`]:d.row}),table:(0,r.AH)({".table-isScrollable &":{overflow:"auto"}}),headerButtonTarget:(0,r.AH)({alignItems:"flex-end",display:"flex",overflow:"hidden",width:"100%",justifyContent:"inherit","&:focus":{".table-header-text":{color:"var(--table-header-focus-color)"},".table-header-icon-container":{color:"var(--table-header-focus-color)",display:"inline"}},"&:active":{".table-header-icon-container, .table-header-text":{color:"var(--table-header-active-color)"}}}),sortHeaderIconOnRight:(0,r.AH)({marginLeft:"var(--table-spacing-xs)"}),sortHeaderIconOnLeft:(0,r.AH)({marginRight:"var(--table-spacing-xs)"}),checkboxCell:(0,r.AH)({display:"flex",alignItems:"center",flex:0,paddingLeft:"var(--table-spacing-sm)",paddingTop:0,paddingBottom:0,minWidth:"var(--table-spacing-md)",maxWidth:"var(--table-spacing-md)",boxSizing:"content-box !important",overflow:"hidden"}),resizeHandleContainer:(0,r.AH)({position:"absolute",right:-3,top:"var(--table-spacing-sm)",bottom:"var(--table-spacing-sm)",width:"var(--table-spacing-sm)",display:"flex",justifyContent:"center",cursor:"col-resize",userSelect:"none",touchAction:"none",zIndex:1}),resizeHandle:(0,r.AH)({width:1,background:"var(--table-resize-handle-color)"}),paginationContainer:(0,r.AH)({display:"flex",justifyContent:"flex-end",paddingTop:"var(--table-spacing-sm)",paddingBottom:"var(--table-spacing-sm)"})}},140718:(e,a,t)=>{t.d(a,{XA:()=>y,lQ:()=>C,wS:()=>A});var r=t(610435),i=t(692738),n=t(46e3),o=t(806773),l=t(370427),s=t(907046),c=t(99442),d=t(224098),u=t(545251),p=t(53333),f=t(661748);let b=(0,i.createContext)(void 0),h=[d.s7.OnValueChange,d.s7.OnView],g=[d.s7.OnValueChange],m=(e,a)=>{for(let t of i.Children.toArray(e))if(i.isValidElement(t)){if(t.type===A&&t.props.value===a)return t;if(t.props.children){let e=m(t.props.children,a);if(e)return e}}},v=(e,a)=>{let t=m(e,a);if(i.isValidElement(t))return t.props.children;return""},y=(0,i.forwardRef)(({defaultValue:e,name:a,placeholder:t,children:l,contentProps:s,onChange:u,onOpenChange:m,id:y,label:A,value:C,validationState:w,forceCloseOnEscape:I,componentId:k,analyticsEvents:x,valueHasNoPii:$,...E},M)=>{let P=(0,f.W)("databricks.fe.observability.defaultComponentView.simpleSelect",!1),[T]=(0,i.useState)(()=>{if(C)return v(l,C);return""}),L=(0,i.useRef)(null);(0,i.useImperativeHandle)(M,()=>L.current,[]);let H=(0,i.useRef)(C),[O,N]=(0,i.useState)(C),[D,G]=(0,i.useState)(T),F=void 0!==C,R=(0,i.useMemo)(()=>x??(P?h:g),[x,P]),Y=(0,d.ei)({componentType:d.v_.SimpleSelect,componentId:k,analyticsEvents:R,valueHasNoPii:$}),{elementRef:_}=(0,p.z)({onView:Y.onView,value:C??e});(0,i.useEffect)(()=>{void 0!==C&&C!==H.current&&(N(C),H.current=C)},[C]),(0,i.useEffect)(()=>{if(F)return;let a=L.current,t=e||a?.value||"";N(t),H.current=t},[F,e,C]),(0,i.useEffect)(()=>{G(v(l,O||""))},[O,l]);let q=(0,i.useCallback)(e=>{Y.onValueChange(e),L.current?.setAttribute("value",e||""),N(e),G(v(l,e)),u&&u({target:{name:a,type:"select",value:e},type:"change"})},[Y,l,u,a]),U=(0,i.useMemo)(()=>({value:O,onChange:q}),[O,q]),W=(0,i.useCallback)(()=>{q("")},[q]);return(0,r.Y)(b.Provider,{value:U,children:(0,r.Y)(n.l,{componentId:void 0,value:O,placeholder:t,label:A??E["aria-label"],id:y,children:(0,r.FD)(S,{onOpenChange:m,children:[(0,r.Y)(c.b,{ref:_,...E,validationState:w,onClear:W,id:y,value:O,...Y.dataComponentProps,children:D||t}),(0,r.Y)("input",{type:"hidden",ref:L}),(0,r.Y)(o.g,{forceCloseOnEscape:I,...s,children:l})]})})})}),S=({children:e,onOpenChange:a})=>{let{isOpen:t}=(0,u.w)();return(0,i.useEffect)(()=>{a&&a(!!t)},[t,a]),(0,r.Y)(r.FK,{children:e})},A=(0,i.forwardRef)(({value:e,children:a,...t},n)=>{let o=(0,i.useContext)(b);if(!o)throw Error("SimpleSelectOption must be used within a SimpleSelect");let{onChange:s}=o,c=(0,i.useCallback)(({value:e})=>{s(e)},[s]);return(0,r.Y)(l.O,{...t,ref:n,value:e,onChange:c,children:a})}),C=({children:e,label:a,...t})=>{if(!(0,i.useContext)(b))throw Error("SimpleSelectOptionGroup must be used within a SimpleSelect");return(0,r.Y)(s.n,{...t,name:a,children:e})}},242995:(e,a,t)=>{t.d(a,{h:()=>o,j:()=>n});var r,i=t(696514),n=((r={}).DONE="done",r.CANCELED="canceled",r);let o=(0,i.fH)("Filebrowser::SaveAsFolderNode")},308879:(e,a,t)=>{t.d(a,{L:()=>s,u:()=>c});var r=t(689262),i=t(686560),n=t(441535),o=t(709262),l=t(805287);let s=()=>({isEnabled:c()}),c=()=>(0,l.gz)({cloud:"AWS",userCanUseDatabricksWorkspace:(0,i.d)("userCanUseDatabricksWorkspace_new",!1),userCanUseSqlService:(0,i.d)("userCanUseSqlService_new",!1),enableSqlService:(0,r.b)("enableSqlService",(0,i.d)("enableSqlService",!1),()=>(0,i.d)("dbSqlEnabled_new",!1)),centralizedLoginEnabled:(0,r.b)("centralizedLoginEnabled",(0,i.d)("centralizedLoginEnabled",!1),()=>(0,n.W)("databricks.fe.centralizedLoginEnabled",!1))})[o.EU].allowed},320126:(e,a,t)=>{t.d(a,{B:()=>u});var r=t(610435),i=t(219830),n=t(403166),o=t(964133),l=t(944552),s=t(342411),c=t(441535);let d=({value:e,label:a,popoverContent:t})=>(0,r.FD)("div",{style:{display:"flex",gridRow:"label"},children:[(0,r.Y)(i.sx,{value:e,css:{marginRight:0},children:a}),t&&(0,r.Y)("div",{css:{display:"flex",alignItems:"center",paddingTop:1,marginLeft:-6},children:(0,r.Y)(n.U,{children:t})})]}),u=({componentId:e,isAutoscalingSelected:a,formField:t,onChange:n})=>{let{formatMessage:u}=(0,s.tz)(),p=(0,c.W)("databricks.fe.lakebase.hideBetaBadge",!1),f=(0,c.W)("databricks.fe.lakebase.replaceAutoscalingSwitchWithSelector",!1);if(!p||!f)return(0,r.FD)("div",{css:{display:"flex",justifyContent:"space-between"},children:[(0,r.Y)(o.D.Label,{htmlFor:"autoscaling-beta-switch",infoPopoverContents:u(p?{id:"J/59kJ",defaultMessage:"Enable Lakebase Postgres Autoscaling for branching, instant restore, and other advanced features. HA is currently offered only in the Lakebase Provisioned Preview."}:{id:"uCfnkC",defaultMessage:"Enable to use the latest version of Lakebase Postgres, the Autoscaling beta (for evaluation only). For production, leave disabled to use standard Lakebase Postgres."}),infoPopoverProps:{popoverProps:{style:{maxWidth:400}}},children:u(p?{id:"FEhQrw",defaultMessage:"Autoscaling"}:{id:"GWIlJr",defaultMessage:"Autoscaling Beta"})}),(0,r.Y)(l.d,{componentId:e,id:"autoscaling-beta-switch",...t,checked:a,onChange:n})]});return(0,r.FD)("div",{children:[(0,r.Y)(o.D.Label,{htmlFor:"database-type-radio-group",children:(0,r.Y)(s.sA,{id:"yRfOwP",defaultMessage:"Database type"})}),(0,r.FD)(i.sx.HorizontalGroup,{componentId:"catalogCreation.lakebaseDatabaseType",id:"database-type-radio-group",...t,name:t?.name??"autoscalingBeta",value:a?"autoscaling":"provisioned",onChange:e=>{n("autoscaling"===e.target.value)},children:[(0,r.Y)(d,{value:"autoscaling",label:u({id:"Qgmeqm",defaultMessage:"Autoscaling"}),popoverContent:u({id:"3ySzDc",defaultMessage:"Autoscaling compute with branching, instant restore, and advanced features."})}),(0,r.Y)(d,{value:"provisioned",label:u({id:"y4pkKO",defaultMessage:"Provisioned"}),popoverContent:u({id:"9mNQM6",defaultMessage:"High availability (HA) and integration with Databricks apps."})})]})]})}},322227:(e,a,t)=>{t.d(a,{$:()=>n,x:()=>o});var r,i=t(696514),n=((r={}).DONE="done",r.CANCELLED="cancelled",r);let o=(0,i.fH)("Filebrowser::Move")},434288:(e,a,t)=>{t.d(a,{l:()=>r});let r=(0,t(342411).YK)({requestPermissions:{id:"CrJ5nP",defaultMessage:"Request permissions"},requestDeltaSharingPermissions:{id:"P0HsgX",defaultMessage:"Request Delta Sharing permissions"},requestAccessDisabledTooltip:{id:"LW+CW/",defaultMessage:"Requests for access are not enabled for this object. Please contact the object owner or administrator for additional permissions."},requestAccessDeltaSharingRecipientDisabledTooltip:{id:"HX5unK",defaultMessage:"Requests for access are not enabled for this object. Please contact the object owner or administrator for USE_PROVIDER permissions."},requestAccessDeltaSharingProviderDisabledTooltip:{id:"pdgj40",defaultMessage:"Requests for access are not enabled for this object. Please contact the object owner or administrator for CREATE_RECIPIENT and CREATE_SHARE permissions."},requestAccessDisabledMultipleTooltip:{id:"b2k+c/",defaultMessage:"Requests for access are not enabled for these objects. Please contact the object owners or administrators for additional permissions."}})},508335:(e,a,t)=>{t.d(a,{L:()=>p,n:()=>f});var r=t(610435),i=t(692738),n=t(497895),o=t(820648),l=t(74438),s=t(342411),c=t(618519),d=t(166893),u=t(839798);function p(e){let a=(0,c.Y)({showNonUCCatalogs:e.showNonUcCatalogs,withWorkspaceBindings:!1,includeBrowse:!1});return(0,r.Y)(f,{...e,isLoadingCatalogs:a.isLoading,catalogs:a.data})}function f({value:e,onChange:a,selectDefaultCatalogOnLoad:t,showReadonlyCatalogs:c=!0,showInternalCatalogs:p=!0,disabled:b,testid:h="catalog-selector",style:g,catalogsRef:m,isLoadingCatalogs:v,catalogs:y,optionLabelProp:S,additionalSelectGroups:A}){let C=(0,s.tz)(),{theme:w}=(0,n.wn)(),I=(0,i.useMemo)(()=>(m&&(m.current=y),(y??[]).filter(({catalog_type:e})=>{if(!c&&e===d.Oc.DELTASHARING_CATALOG||!p&&e===d.Oc.INTERNAL_CATALOG)return!1;return!0})),[y,m,c,p]);return(0,i.useEffect)(()=>{!t||e||v||a(I?.[0]?.name)},[I,t]),(0,r.Y)(u._,{testid:h,icon:(0,r.Y)(o.A,{"aria-hidden":"true",css:{color:w.colors.textSecondary}}),value:e,onChange:a,options:A?void 0:I?.map(({name:e})=>(0,u.F)(e))||[],optionLabelProp:S,loading:v,disabled:b,"aria-label":C.formatMessage({id:"i8HI05",defaultMessage:"Catalog"}),placeholder:C.formatMessage({id:"By6lid",defaultMessage:"Select catalog"}),style:g,children:A&&(0,r.FD)(r.FK,{children:[(0,r.Y)(l._v.OptGroup,{label:C.formatMessage({id:"Z9mu9d",defaultMessage:"Existing catalogs"}),children:I?.map(({name:e})=>(0,r.FD)(l._v.Option,{value:e,title:e,label:e,children:[(0,r.Y)(o.A,{"aria-hidden":"true",css:{color:w.colors.textSecondary}})," ",e]},e))}),A]})})}},565747:(e,a,t)=>{t.d(a,{BT:()=>g,Hq:()=>h,to:()=>m});var r=t(610435),i=t(846044),n=t.n(i),o=t(692738),l=t(497895),s=t(505544),c=t(74438),d=t(342411),u=t(649934),p=t(641760),f=t(863081),b=t(839798);function h({showReadonlySchemas:e,dataSource:a,catalog:t,isDataSourceReady:r,useQueryOptions:i,unifiedDataSource:n}){let l=(0,f.w$)({catalog:t,dataSource:n},{...i,enabled:(i?.enabled??!0)&&((e,a,t)=>{if(!t)return!1;return(0,p.jN)({catalog:t})||void 0!==e&&a})(a?.id,r,t)});return{schemas:(0,o.useMemo)(()=>{if(!e)return(l.data??[]).filter(({name:e,owner:a})=>{if("information_schema"===e&&"System user"===a)return!1;return!0});return l.data},[l.data,e]),isLoadingSchemas:l.isLoading,isError:l.isError}}function g({catalog:e,value:a,onChange:t,dataSource:i,isDataSourceReady:n,selectDefaultSchemaOnLoad:o,showReadonlySchemas:l=!0,disabled:s,withAuthCheck:c=!1,testid:d="schema-selector",style:u}){let{schemas:p,isLoadingSchemas:f}=h({dataSource:i,catalog:e,isDataSourceReady:n,showReadonlySchemas:l});return(0,r.Y)(m,{schemas:p,isLoadingSchemas:f,disabled:s,testid:d,value:a,selectDefaultSchemaOnLoad:o,catalog:e,style:u,onChange:t,withAuthCheck:c})}function m({catalog:e,value:a,onChange:t,schemas:i,isLoadingSchemas:p,selectDefaultSchemaOnLoad:h,disabled:g,testid:v="schema-selector",style:y,id:S,withAuthCheck:A=!1}){let C=(0,d.tz)(),{theme:w}=(0,l.wn)(),I=(0,f.oX)({schemasRequest:{data:i,isLoading:p},authzAction:u.E.CreateTable,catalog:e,doAuthCheck:A}),k=(0,o.useMemo)(()=>A&&I.schemas&&!I.isLoading?n()(i??[],e=>I.schemas.some(a=>a.name===e.name)):void 0,[i,I,A]),[x,$]=k||[];return(0,o.useEffect)(()=>{a&&((A?x:i)?.find(({name:e})=>e===a)||!e)||(h?t((e=>{if(!e||!e.length)return;return e.some(({name:e})=>"default"===e)?"default":e[0].name})(A?x:i)):t(void 0))},[i,h,e,A]),(0,r.Y)(b._,{id:S,testid:v,"aria-label":C.formatMessage({id:"t1UOCX",defaultMessage:"Schema"}),icon:(0,r.Y)(s.A,{css:{color:w.colors.textSecondary}}),value:a,onChange:t,options:A?void 0:i?.map(({name:e})=>(0,b.F)(e))||[],loading:p||I.isLoading,disabled:!e||g,placeholder:C.formatMessage({id:"bN/Bwa",defaultMessage:"Select schema"}),style:y,children:A&&k?(0,r.FD)(r.FK,{children:[x?.map(({name:e})=>(0,r.FD)(c._v.Option,{value:e,title:e,disabled:!!g,children:[(0,r.Y)(s.A,{css:{marginRight:"6px",color:w.colors.textSecondary}}),e]},e)),$?.map(({name:e})=>(0,r.FD)(c._v.Option,{value:e,title:e,disabled:!0,children:[(0,r.Y)(s.A,{css:{marginRight:"6px",color:w.colors.textSecondary}}),e]},e))]}):void 0})}},571739:(e,a,t)=>{t.d(a,{J:()=>n,z:()=>o});var r,i=t(696514),n=((r={}).DONE="done",r.CANCELLED="cancelled",r);let o=(0,i.fH)("Filebrowser::Clone")},574132:(e,a,t)=>{t.d(a,{y:()=>n});var r=t(610435);t(692738);var i=t(497895);let n=({disabled:e,children:a})=>{let{theme:t}=(0,i.wn)();return(0,r.Y)("div",{css:{color:t.colors.textSecondary,fontSize:t.typography.fontSizeSm,...e&&{color:t.colors.actionDisabledText}},children:a})}},595615:(e,a,t)=>{t.d(a,{AO:()=>u,Ox:()=>f,RK:()=>h,ic:()=>g,rA:()=>b,uV:()=>p});var r=t(692738),i=t(160603),n=t(441535),o=t(412836),l=t(425373);function s(e,a,t,r,i,n,o){try{var l=e[n](o),s=l.value}catch(e){t(e);return}l.done?a(s):Promise.resolve(s).then(r,i)}(0,i.setLogger)({log:console.log,warn:console.warn,error:()=>{}});let c={retry:!1,refetchOnWindowFocus:!1,staleTime:3e5},d=new Map;function u(e){let a=(0,n.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),t={...c,...e,enabled:e?.enabled!==!1&&a},r={...c,...e,enabled:e?.enabled!==!1&&!a};d.set(JSON.stringify(e.queryKey),e.queryKey);let l=(0,o.IT)(t),s=(0,i.useQuery)(r);return a?l:s}function p({queries:e}){let a=(0,n.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),t=e.map(e=>({...c,...e,enabled:e?.enabled!==!1&&a})),r=e.map(e=>({...c,...e,enabled:e?.enabled!==!1&&!a}));e.forEach(e=>d.set(JSON.stringify(e.queryKey),e.queryKey));let o=(0,l.E)({queries:t}),s=(0,i.useQueries)(r);return a?o:s}function f({queryFn:e}){let a=(0,n.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),t=(0,i.useQueryClient)(),l=e();return(0,r.useCallback)((e,r={})=>a?o.aH.getActiveValue().fetchQuery({...r,...l(e)},c):t.fetchQuery({...r,...l(e)},c),[l,a,t])}function b(){let[e,a]=(0,r.useState)(0),t=(0,i.useQueryClient)(),l=(0,n.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1);return{invalidate:(e,r)=>{var i;return(i=function*(){a(e=>e+1);try{if(e)yield l?o.aH.getActiveValue().invalidateQueries(e):t.invalidateQueries(e),d.delete(JSON.stringify(e));else{let e=Array.from(d.values()).filter(e=>{if(!Array.isArray(e))return!1;if(!r)return!0;return e.some(e=>"string"==typeof e&&e.includes(r))}).filter(e=>void 0!==e).map(e=>l?o.aH.getActiveValue().invalidateQueries(e):t.invalidateQueries(e));yield Promise.allSettled(e),d=new Map}}finally{a(e=>e-1)}},function(){var e=this,a=arguments;return new Promise(function(t,r){var n=i.apply(e,a);function o(e){s(n,t,r,o,l,"next",e)}function l(e){s(n,t,r,o,l,"throw",e)}o(void 0)})})()},isLoadingInvalidation:e>0}}function h(e){for(let a of e){let e=a.isIdle??void 0;if(!g({isIdle:e,status:a.status??void 0,fetchStatus:a.fetchStatus??void 0}))return!1}return!0}function g(e){let a=(0,n.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),t=e.isIdle??!1;if(a)return"fetchStatus"in e&&"loading"===e.status&&"idle"===e.fetchStatus;return t}},599349:(e,a,t)=>{t.d(a,{M:()=>p});var r=t(610435),i=t(956935),n=t(692738),o=t(5421),l=t(79128),s=t(497895),c=t(369291),d=t(174541),u=t(639712);let p=(0,n.forwardRef)(({children:e,...a},t)=>{let{theme:n}=(0,s.wn)(),{isInsideTypeaheadCombobox:p,componentId:f}=(0,o.T)();if(!p)throw Error("`TypeaheadComboboxAddButton` must be used within `TypeaheadCombobox`");return(0,r.Y)(l.$n,{...a,componentId:`${f}.add_option`,type:"tertiary",onClick:e=>{e.stopPropagation(),a.onClick?.(e)},onMouseUp:e=>{e.stopPropagation(),a.onMouseUp?.(e)},className:"combobox-footer-add-button",css:{...(0,d.RB)(n),...(0,i.AH)((0,u.dg)({width:"100%",padding:0,display:"flex",alignItems:"center",borderRadius:0,"&:focus":{background:n.colors.actionTertiaryBackgroundHover,outline:"none"}}))},icon:(0,r.Y)(c.A,{}),ref:t,children:e})})},604808:(e,a,t)=>{t.d(a,{O:()=>i});var r=t(686560);function i(){let e=(0,r.d)("unityCatalogServiceEnabled",!1),a=(0,r.d)("isMetastoreInstalled_new",!1);return e&&a}},655841:(e,a,t)=>{t.d(a,{GX:()=>u,HA:()=>n,Ij:()=>d,U8:()=>i,_:()=>o,e:()=>s,fq:()=>p,n$:()=>c,r4:()=>l});var r=t(141078);let i=(0,r.J1)`
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
`,n=(0,r.J1)`
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
  ${i}
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
  ${i}
`,l=(0,r.J1)`
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
  ${i}
`,s=(0,r.J1)`
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
  ${i}
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
  ${i}
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
`},708396:(e,a,t)=>{t.d(a,{R:()=>l});var r=t(441535),i=t(141078),n=t(641760);let o=(0,i.J1)`
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
`;function l({type:e,fullName:a,skip:t=!1}){let s=(0,r.W)("databricks.fe.rfa.skipNonUcSecurables",!1),c=a.split(".")[0],d=s&&!(0,n.jN)({catalog:c}),{data:u,loading:p,error:f}=(0,i.IT)(o,{variables:{fullName:a,type:e},skip:!e||t||d});return{isLoading:p,isEnabled:!d&&u?.requestforaccessGetStatus?.isEnabled,error:f}}},768622:(e,a,t)=>{t.d(a,{Jq:()=>y,bb:()=>A});var r=t(610435),i=t(956935),n=t(802558),o=t.n(n),l=t(91958),s=t.n(l),c=t(692738),d=t(497895),u=t(194901),p=t(161330),f=t(174541),b=t(574132),h=t(639712);let g={paddingTop:2},m={width:16,flexShrink:0},v={display:"flex"},y=s()((e,a,t)=>(0,i.AH)({...t&&{pointerEvents:"none",color:e.colors.actionDisabledText},...a&&{background:e.colors.actionTertiaryBackgroundHover}}),(e,a,t)=>`${(0,h.H6)(e)}|${a}|${!!t}`),S=s()((e,a)=>(0,i.AH)({marginLeft:e.spacing.sm,fontSize:e.typography.fontSizeBase,fontStyle:"normal",fontWeight:400,cursor:"pointer",overflow:"hidden",wordBreak:"break-word",..."ellipsis"===a&&{textOverflow:"ellipsis",whiteSpace:"nowrap"}}),(e,a)=>`${(0,h.H6)(e)}|${a}`),A=(0,c.forwardRef)(({item:e,index:a,comboboxState:t,textOverflowMode:i="multiline",isDisabled:n,disabledReason:l,hintContent:s,onClick:h,children:A,...C},w)=>{let{selectedItem:I,highlightedIndex:k,getItemProps:x,isOpen:$}=t,E=o()(I,e),M=k===a,{theme:P}=(0,d.wn)(),T=(0,c.useRef)(null);(0,c.useImperativeHandle)(w,()=>T.current);let{onClick:L,...H}=x({item:e,index:a,disabled:n,onMouseUp:e=>{e.stopPropagation(),C.onMouseUp?.(e)},ref:T});return(0,c.useEffect)(()=>{if($&&k===a&&T.current){let e=T.current.closest("ul");if(!e)return;let a=e.scrollTop,t=e.scrollTop+e.clientHeight,r=T.current.offsetTop,i=T.current.offsetTop+T.current.clientHeight;(r<a||i>t)&&T.current?.scrollIntoView({block:"nearest"})}},[k,a,$,T]),(0,r.FD)("li",{role:"option","aria-selected":E,"aria-disabled":n,onClick:e=>{h?.(e),L?.(e)},css:[(0,f.RB)(P),y(P,M,n)],...H,...C,children:[E?(0,r.Y)(u.A,{css:g}):(0,r.Y)("div",{style:m}),(0,r.FD)("label",{css:S(P,i),children:[n&&l?(0,r.FD)("div",{css:v,children:[(0,r.Y)("div",{children:A}),(0,r.Y)("div",{css:(0,f.eO)(P),children:(0,r.Y)(p.I,{componentId:"typeahead-combobox-menu-item-disabled-reason-info-tooltip",side:"right",content:l})})]}):A,(0,r.Y)(b.y,{disabled:n,children:s})]})]})});A.defaultProps={_type:"TypeaheadComboboxMenuItem"}},804723:(e,a,t)=>{t.d(a,{S:()=>s});var r=t(610435),i=t(5421),n=t(497895),o=t(174541);let l=({children:e,...a})=>{let{theme:t}=(0,n.wn)(),{isInsideTypeaheadCombobox:l}=(0,i.T)();if(!l)throw Error("`TypeaheadComboboxFooter` must be used within `TypeaheadComboboxMenu`");return(0,r.Y)("div",{...a,css:(0,o.UA)(t),children:e})};l.defaultProps={_type:"TypeaheadComboboxFooter"};let s=l},820097:(e,a,t)=>{t.d(a,{H:()=>n,Z:()=>o});var r,i=t(696514),n=((r={}).DONE="done",r.CANCELLED="cancelled",r);let o=(0,i.fH)("Filebrowser::CloneRedashToLakeview")},907046:(e,a,t)=>{t.d(a,{n:()=>n});var r=t(610435),i=t(939578);let n=e=>{let{name:a,children:t,...n}=e;return(0,r.FD)(r.FK,{children:[(0,r.Y)(i.y,{...n,children:a}),t]})}},936743:(e,a,t)=>{t.d(a,{G:()=>l,l:()=>o});var r=t(610435),i=t(692738),n=t(62947);let o=e=>{switch(e.kind){case"group":return{group_name:e.name,group_id:e.id};case"user":return{user_name:e.name,user_id:e.id};case"serviceprincipal":return{service_principal_display_name:e.displayName,service_principal_id:e.id,service_principal_name:e.applicationId}}},l=({onUpdate:e,onUpdateSubject:a,showAccountLevelEntities:t,...l})=>{let s=(0,i.useCallback)(t=>{let r;Array.isArray(t)?r=t.map(e=>o(e)):void 0!==t&&(r=o(t)),e&&e(r),a&&a(t)},[e,a]);return(0,r.Y)(n.T,{enableAccountGroups:!!t,enableAccountServicePrincipals:!!t,enableAccountUsers:!!t,enableWorkspaceGroups:!t,enableWorkspaceServicePrincipals:!t,enableWorkspaceUsers:!t,onUpdate:e||a?s:void 0,...l})}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/21018.0d0c31a734.chunk.js.map