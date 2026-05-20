"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[46596],{7319:(e,t,a)=>{a.d(t,{_:()=>o,h:()=>i});var r=a(692738),n=a(879612);function i(e){if(!e)return!1;return"CONNECTION_HTTP_OAUTH_U2M_MAPPING"===e||"CONNECTION_HTTP_DCR"===e||"CONNECTION_SLACK_OAUTH_U2M_MAPPING"===e}function o(e){let t=(0,n.x5)({isUcEnabled:!0});return(0,r.useMemo)(()=>{if(!e)return!1;if(t.data?.kinds){let a=t.data.kinds.find(t=>t.securable_kind===e);return a?.capabilities?.includes("HAS_GENERIC_ACCESS_TOKEN_FLOW")??!1}return i(e)},[e,t.data])}},21255:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M5.5 6a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="StopCircleIcon";let l=s},26446:(e,t,a)=>{a.d(t,{HT:()=>c,M8:()=>d,Pf:()=>s,bp:()=>l,gb:()=>r,iN:()=>u,pP:()=>n,xB:()=>p});let r=1e3,n={enableAccountGroups:!1,enableAccountServicePrincipals:!1,enableAccountUsers:!1,enableWorkspaceGroups:!1,enableWorkspaceServicePrincipals:!1,enableWorkspaceUsers:!1},i=/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,o={admins:"Admins",users:"All workspace users","account users":"All account users"},s=e=>{if(!e)return e;return o[e]??e},l=e=>{let t=new Map;return e.forEach(e=>{let a=c(e)||e.name;t.has(a)||t.set(a,[]),t.get(a)?.push(e)}),t},u=e=>{switch(e.kind){case"user":return e.fullName;case"serviceprincipal":return e.name;case"group":return e.displayName;default:return""}},c=e=>{switch(e.kind){case"user":case"group":return e.name||"";case"serviceprincipal":return e.applicationId||"";default:return""}},d=({uniqueName:e,id:t,kind:a,displayName:r})=>{switch(a){case"user":return{id:t||"",optionId:`user.${t}`,kind:a,name:e||"",fullName:r||"",title:""};case"serviceprincipal":return{id:t||"",optionId:`serviceprincipal.${t}`,kind:a,name:r||"",applicationId:e||"",title:""};case"group":return{id:t||"",optionId:`group.${t}`,kind:a,name:e||"",displayName:s(e||""),title:""};default:return}};function p(e){return e?i.test(e)?"serviceprincipal":"user":void 0}},30975:(e,t,a)=>{a.d(t,{u:()=>u});var r=a(412836),n=a(927239),i=a(595615),o=a(660618),s=a(733337);function l(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}function u(){let{invalidate:e}=(0,i.rA)();return(0,r.n_)(e=>{var t;return(t=function*(){return yield(0,s.nr)(`${o.bY}/catalogs`,{method:"POST",body:JSON.stringify({...e,storage_root:e.storage_root?encodeURI(e.storage_root):void 0})})},function(){var e=this,a=arguments;return new Promise(function(r,n){var i=t.apply(e,a);function o(e){l(i,r,n,o,s,"next",e)}function s(e){l(i,r,n,o,s,"throw",e)}o(void 0)})})()},{onSuccess:()=>{e([n.xQ])}})}},38301:(e,t,a)=>{a.d(t,{$:()=>T,V:()=>C});var r=a(610435);a(692738);var n=a(497895),i=a(382908),o=a(964133),s=a(332702),l=a(339518),u=a(407374),c=a(126927),d=a(342411),p=a(817148),f=a(115957),E=a(819524),m=a(441535),A=a(657825),g=a(217985),S=a(850723),h=a(641760),_=a(633203),v=a(759838);function T({form:e,onChange:t,securableType:a,renderDatabricksManagedStorageUI:I,showHint:R=!0,description:O}){let b=(0,d.tz)(),{theme:y}=(0,n.wn)(),{databricksManagedStorage:N,storage_root:L,storage_sub_path:M}=e.watch(),w=(0,S.O)().data?.region??"",D=!(0,h.sJ)()||(0,A.fo)()===A.hQ.ServerlessOnly,U=C(w)&&((0,m.W)("enable_arclight",null)??(0,m.W)("databricks.fe.accountsui.enableDatabricksManagedStorageUIInCatalogCreation",!1))&&(0,f.zl)(p.g3.CATALOG_DEFAULT_STORAGE)&&D,P=(0,v.Hi)("/explore/locations/create","/"),k=(0,r.Y)(d.sA,{id:"ZqI9g7",defaultMessage:"Catalogs that use default storage are only accessible from this workspace by default. You can grant other workspaces access, but they must use serverless compute to access data in the catalog. <linkText>Learn more.</linkText>",values:{linkText:e=>(0,r.Y)(i.o.Link,{href:E.Ay.DEFAULT_STORAGE,target:"_blank",componentId:"uc_entity.storage_location.default_storage_binding_alert.learn_more_link",children:e})}});return(0,r.FD)("div",{children:[(0,r.Y)(o.D.Label,{htmlFor:"storage_root",children:b.formatMessage({id:"zlkkH+",defaultMessage:"Storage location"})}),(0,r.FD)("div",{css:{display:"flex",flexDirection:"column",gap:y.spacing.md},children:[O&&(0,r.Y)(o.D.Hint,{children:O}),U&&I&&(0,r.Y)(s.Sc,{componentId:"codegen_web-shared_src_metastore_uc_components_storagelocation.tsx_59",isChecked:N,onChange:e=>{t("databricksManagedStorage",e)},children:(0,r.Y)(d.sA,{id:"y/NQmc",defaultMessage:"Use default storage "})}),(0,h.mC)()&&N&&(0,r.Y)(l.F,{componentId:"uc_entity.storage_location.default_storage_binding_alert",message:k,type:"info"}),(!U||!N)&&(0,r.FD)(r.FK,{children:[R&&(0,r.Y)(o.D.Hint,{children:b.formatMessage({id:"yzS8mp",defaultMessage:"Cloud storage location used for managed tables and volumes in this catalog. If not specified, it defaults to the metastore root location."})}),(0,r.FD)("section",{css:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:y.spacing.xs,marginBottom:y.spacing.sm},children:[(0,r.Y)(_.Y,{value:L?.name,onChange:e=>{t("storage_root",e)}}),(0,r.Y)(u.p,{componentId:"codegen_web-shared_src_metastore_uc_components_storagelocation.tsx_104",type:"text",placeholder:b.formatMessage({id:"3vZbc1",defaultMessage:"sub/path"}),value:M,onChange:({target:{value:e}})=>{t("storage_sub_path",e)},"aria-label":b.formatMessage({id:"yVOx68",defaultMessage:"Subpath"})}),(0,r.FD)(g.N,{componentId:"create-external-location-link",target:"_blank",to:P,asTypographyLink:!0,children:[b.formatMessage({id:"tvzOlX",defaultMessage:"Create a new external location"})," ",(0,r.Y)(c.A,{})]})]}),L&&(0,r.Y)("section",{css:{padding:`${y.spacing.sm}px ${y.spacing.md}px`,margin:`${y.spacing.sm}px 0`,background:y.colors.backgroundSecondary,borderRadius:y.legacyBorders.borderRadiusMd},children:(0,r.Y)(i.o.Text,{children:(0,v.xT)(L?.url,M)})})]})]})]})}function C(e){if((0,m.W)("databricks.objectstoragelm.skipArclightAvailableRegionsCheck",!1))return!0;let t=JSON.parse((0,m.W)("databricks.objectstoragelm.arclightAvailableRegions",null));if(null===t)return!0;return t.includes(e)}},39566:(e,t,a)=>{a.d(t,{B8:()=>u,DI:()=>l,RX:()=>d,TW:()=>p,Wd:()=>s,od:()=>c});var r,n,i,o,s=((r={}).SAAS="saas",r.DB="db",r.BRICKSTORE="brickstore",r.COMMUNITY="community",r.FOREIGN_CATALOG="foreign_catalog",r.FILESYSTEM="filesystem",r),l=((n={}).QUERY="query",n.CDC="cdc",n);let u={MYSQL:"MYSQL",POSTGRESQL:"POSTGRESQL",SQLSERVER:"SQLSERVER",SALESFORCE:"SALESFORCE",WORKDAY_RAAS:"WORKDAY_RAAS",GA4_RAW_DATA:"GA4_RAW_DATA",SERVICENOW:"SERVICENOW",MANAGED_POSTGRESQL:"MANAGED_POSTGRESQL",ORACLE:"ORACLE",SHAREPOINT:"SHAREPOINT",DYNAMICS365:"DYNAMICS365",TERADATA:"TERADATA",NETSUITE:"NETSUITE",GENERIC_LAKEFLOW_CONNECT:"GENERIC_LAKEFLOW_CONNECT",JIRA:"JIRA",CONFLUENCE:"CONFLUENCE",GOOGLE_ADS:"GOOGLE_ADS",ZENDESK:"ZENDESK",HUBSPOT:"HUBSPOT",SALESFORCE_MARKETING_CLOUD:"SALESFORCE_MARKETING_CLOUD",META_MARKETING:"META_MARKETING",OUTLOOK:"OUTLOOK",JDBC:"JDBC",FOREIGN_CATALOG:"FOREIGN_CATALOG",REDSHIFT:"REDSHIFT",SNOWFLAKE:"SNOWFLAKE",SYNAPSE:"SYNAPSE",BIGQUERY:"BIGQUERY",TIKTOK_ADS:"TIKTOK_ADS",WORKDAY_HCM:"WORKDAY_HCM",GITHUB:"GITHUB",SMARTSHEET:"SMARTSHEET",VEEVA_VAULT:"VEEVA_VAULT"},c={MYSQL:"MYSQL",POSTGRESQL:"POSTGRESQL",SQLSERVER:"SQLSERVER",SALESFORCE:"SALESFORCE",WORKDAY_RAAS:"WORKDAY_RAAS",GA4_RAW_DATA:"GA4_RAW_DATA",SERVICENOW:"SERVICENOW",MANAGED_POSTGRESQL:"MANAGED_POSTGRESQL",ORACLE:"ORACLE",SHAREPOINT:"SHAREPOINT",DYNAMICS365:"DYNAMICS365",TERADATA:"TERADATA",NETSUITE:"NETSUITE",GENERIC_LAKEFLOW_CONNECT:"GENERIC_LAKEFLOW_CONNECT",JIRA:"JIRA",CONFLUENCE:"CONFLUENCE",GOOGLE_ADS:"GOOGLE_ADS",ZENDESK:"ZENDESK",HUBSPOT:"HUBSPOT",SALESFORCE_MARKETING_CLOUD:"SALESFORCE_MARKETING_CLOUD",WORKDAY_HCM:"WORKDAY_HCM",META_MARKETING:"META_MARKETING",OUTLOOK:"OUTLOOK",JDBC:"JDBC",FOREIGN_CATALOG:"FOREIGN_CATALOG",REDSHIFT:"REDSHIFT",SNOWFLAKE:"SNOWFLAKE",SYNAPSE:"SYNAPSE",BIGQUERY:"BIGQUERY",TIKTOK_ADS:"TIKTOK_ADS",GITHUB:"GITHUB",SMARTSHEET:"SMARTSHEET",VEEVA_VAULT:"VEEVA_VAULT",ZENDESK_COMMUNITY:"ZENDESK_COMMUNITY",GITHUB_COMMUNITY:"GITHUB_COMMUNITY",STRIPE_COMMUNITY:"STRIPE_COMMUNITY",HUBSPOT_COMMUNITY:"HUBSPOT_COMMUNITY",ZOHO_CRM_COMMUNITY:"ZOHO_CRM_COMMUNITY"};var d=((i={}).CONNECTION="connection",i.PIPELINE="pipeline",i.GATEWAY="gateway",i.VALIDATION="validation",i.SOURCE="source",i.DESTINATION="destination",i.SCHEDULE="schedule",i.BRICKSTORE_SOURCE="brickstore_source",i.DESTINATION_WITH_PIPELINE="destination_with_pipeline",i.PIPELINE_CONFIGURATION="pipeline_configuration",i.REPORT="report",i.DATABASE_SETUP="database_setup",i.COMMUNITY_CONFIG="community_config",i.FOREIGN_CATALOG_SOURCE="foreign_catalog_source",i),p=((o={}).PREVIEW="preview",o.COMMUNITY="community",o.NOTEBOOK="notebook",o.MANAGED_INGESTION="mi",o)},40938:(e,t,a)=>{a.d(t,{Y:()=>n});var r=a(441535);function n(){return(0,r.W)("databricks.fe.tagpolicy.enableV2TagPolicyAPIs",!1)}},55079:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",d:"M12.5 8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CircleIcon";let l=s},55749:(e,t,a)=>{a.d(t,{F:()=>r,X:()=>n});class r extends Error{constructor(e,t){super(e),this.name="SqlQueryError",this.cause=t}}let n=1e6},74348:(e,t,a)=>{a.d(t,{h:()=>h});var r=a(610435),n=a(692738),i=a(441535),o=a(140718),s=a(342411),l=a(125230),u=a(350318);let c=({value:e,onChange:t,error:a,...n})=>{let i=(0,s.tz)(),c=(0,u.ce)(),{data:d,isLoading:p}=(0,l.Nx)({enabled:c,pageSize:l.Ml});return(0,r.Y)(o.XA,{allowClear:!0,width:"100%",value:e,onChange:e=>t(e.target.value),label:i.formatMessage({id:"Dh2KGp",defaultMessage:"Project"}),placeholder:i.formatMessage({id:"aerQeA",defaultMessage:"Select project"}),contentProps:{matchTriggerWidth:!0,loading:c&&p},validationState:a?"error":void 0,...n,children:d?.map(e=>(0,r.Y)(o.wS,{value:e.id,children:(0,r.Y)("span",{children:e.name})},e.id))})};var d=a(466213),p=a(497895),f=a(996648),E=a(927802),m=a(684944),A=a(461815),g=a(768622);let S=({id:e,onChange:t,error:a})=>{let i=(0,s.tz)(),{theme:o}=(0,p.wn)(),[c,S]=(0,d.d7)("",300),h=(0,u.ce)(),{data:_,isLoading:v}=(0,l.Nx)({enabled:h,pageSize:l.Ml,filter:c}),T=(0,n.useCallback)(e=>{t(e?.id)},[t]),C=(0,f.SY)({componentId:"web-shared.brickstore.DatabaseProjectSelectV2",allItems:_??[],items:_??[],setItems:()=>{},itemToString:e=>e?.name??"",formOnChange:T});(0,n.useEffect)(()=>{S(C.inputValue.trim())},[S,C.inputValue]);let I={"&.error":{borderColor:`${o.colors.red500} !important`}};return(0,r.FD)(E.h,{id:e,multiSelect:!1,comboboxState:C,children:[(0,r.Y)(m.$,{formOnChange:T,placeholder:i.formatMessage({id:"aerQeA",defaultMessage:"Select project"}),className:a?"error":"",dangerouslyAppendEmotionCSS:I,comboboxState:C}),(0,r.Y)(A.i,{width:300,loading:h&&v,comboboxState:C,children:_?.map((e,t)=>(0,r.Y)(g.bb,{item:e,index:t,comboboxState:C,children:e.name},`project-${e.id}`))})]})},h=e=>{let t=(0,n.useMemo)(()=>(0,i.W)("databricks.fe.lakebase.useDatabaseProjectSelectV2",!1)?S:c,[]);return(0,r.Y)(t,{...e})}},75036:(e,t,a)=>{a.d(t,{e:()=>o,s:()=>i});var r,n=a(696514),i=((r={}).DONE="done",r.CANCELED="canceled",r);let o=(0,n.fH)("Filebrowser::SelectFolderNode")},96437:(e,t,a)=>{a.d(t,{F0:()=>s,OU:()=>l,TS:()=>n.TS,c2:()=>c,kW:()=>u,lD:()=>i,nk:()=>n.nk,sN:()=>o});var r=a(141078),n=a(246635);let i=(0,r.J1)`
  ${n.BH}
  fragment LakeviewDraftDashboardResponseFragment on LakeviewconfigModelsDashboard {
    name
    displayName
    warehouseId
    warehouseType
    etag
    folderNodeInternalName
    lifecycleState
    pageOrder {
      name
    }
    datasetOrder {
      name
    }
    variables @includeSafex(name: "databricks.fe.visualizations.enableFieldVariable", defaultValue: false) {
      name
      field {
        options {
          expression
        }
      }
    }
    uiSettings {
      locale
      theme {
        ...LakeviewDashboardThemeFragment
      }
      genieSpace {
        isEnabled
        overrideId
        enablementMode
      }
      applyModeEnabled
    }
    __typename
  }
`,o=(0,r.J1)`
  ${n.TS}
  fragment LakeviewconfigDatasetResponseFragment on LakeviewconfigModelsDataset {
    name
    query
    displayName
    etag
    preferLowCode
    customerRefId @includeSafex(name: "databricks.fe.lakeview.enableStableIdsInUrl", defaultValue: false)
    datasetParameters {
      ...LakeviewconfigDatasetParametersFragment
    }
    columns {
      displayName
      description
      expression
    }
    catalog
    schema
    assetName
    metricViewConfig
    materializationSettings
      @includeSafex(name: "databricks.fe.lakeview.enableDatasetPublishMaterialization", defaultValue: false) {
      materializeOnPublish
    }
  }
`,s=(0,r.J1)`
  fragment LakeviewconfigPageResponseFragment on LakeviewconfigModelsPage {
    __typename
    name
    displayName
    etag
    pageType
    customerRefId @includeSafex(name: "databricks.fe.lakeview.enableStableIdsInUrl", defaultValue: false)
    widgetOrder {
      name
    }
    layout {
      widgetPositions {
        width
        height
        xCoordinate
        yCoordinate
        widgetName
      }
      layoutVersion @includeSafex(name: "databricks.fe.lakeview.enableDenserGridLayout", defaultValue: false)
    }
  }
`,l=(0,r.J1)`
  fragment LakeviewconfigWidgetFragment on LakeviewconfigModelsWidget {
    name
    displayName
    customerRefId @includeSafex(name: "databricks.fe.lakeview.enableStableIdsInUrl", defaultValue: false)
    queries {
      queryName
      query {
        datasetName
        fields {
          fieldName
          expression
          variable @includeSafex(name: "databricks.fe.visualizations.enableFieldVariable", defaultValue: false)
        }
        parameters {
          parameterName
          keyword
        }
        parameterValues {
          keyword
          selection {
            values {
              dataType
              values {
                value
              }
            }
            range {
              dataType
              min {
                value
              }
              max {
                value
              }
            }
          }
        }
        filters {
          expression
        }
        cubeGroupingSets {
          sets {
            fieldNames
          }
        }
        disaggregatedData
        orderBys {
          direction
          expression
        }
      }
    }
    renderSpec {
      widgetType
      textBoxRenderSpec {
        content
        contentType
        widgetSettings {
          verticalAlign
        }
      }
      vizRenderSpec {
        rawJson
      }
      widgetBackgroundColor @includeSafex(name: "databricks.fe.lakeview.enableWidgetLevelStyle", defaultValue: false) {
        light
        dark
      }
      widgetBorderColor @includeSafex(name: "databricks.fe.lakeview.enableWidgetLevelStyle", defaultValue: false) {
        light
        dark
      }
    }
    etag
  }
`,u=(0,r.J1)`
  fragment LakeviewconfigBookmarkResponseFragment on lakeviewconfigModels_Bookmark {
    name
    displayName
    customerRefId
    etag
    widgetSelections {
      widgetName
      selectionJson
    }
  }
`,c=(0,r.J1)`
  ${i}
  ${o}
  ${l}
  ${s}
  fragment LakeviewconfigWidgetAndPositionFragment on LakeviewconfigServicesWidgetCreateAndPositionWidgetResponse {
    dashboard
      @includeSafex(name: "databricks.fe.lakeview.enableCopyPasteWidgetToAnotherDashboard", defaultValue: false) {
      ...LakeviewDraftDashboardResponseFragment
    }
    datasets
      @includeSafex(name: "databricks.fe.lakeview.enableCopyPasteWidgetToAnotherDashboard", defaultValue: false) {
      ...LakeviewconfigDatasetResponseFragment
    }
    widget {
      ...LakeviewconfigWidgetFragment
    }
    parentPage {
      ...LakeviewconfigPageResponseFragment
    }
  }
`},140718:(e,t,a)=>{a.d(t,{XA:()=>h,lQ:()=>T,wS:()=>v});var r=a(610435),n=a(692738),i=a(46e3),o=a(806773),s=a(370427),l=a(907046),u=a(99442),c=a(224098),d=a(545251),p=a(53333),f=a(661748);let E=(0,n.createContext)(void 0),m=[c.s7.OnValueChange,c.s7.OnView],A=[c.s7.OnValueChange],g=(e,t)=>{for(let a of n.Children.toArray(e))if(n.isValidElement(a)){if(a.type===v&&a.props.value===t)return a;if(a.props.children){let e=g(a.props.children,t);if(e)return e}}},S=(e,t)=>{let a=g(e,t);if(n.isValidElement(a))return a.props.children;return""},h=(0,n.forwardRef)(({defaultValue:e,name:t,placeholder:a,children:s,contentProps:l,onChange:d,onOpenChange:g,id:h,label:v,value:T,validationState:C,forceCloseOnEscape:I,componentId:R,analyticsEvents:O,valueHasNoPii:b,...y},N)=>{let L=(0,f.W)("databricks.fe.observability.defaultComponentView.simpleSelect",!1),[M]=(0,n.useState)(()=>{if(T)return S(s,T);return""}),w=(0,n.useRef)(null);(0,n.useImperativeHandle)(N,()=>w.current,[]);let D=(0,n.useRef)(T),[U,P]=(0,n.useState)(T),[k,x]=(0,n.useState)(M),G=void 0!==T,F=(0,n.useMemo)(()=>O??(L?m:A),[O,L]),Y=(0,c.ei)({componentType:c.v_.SimpleSelect,componentId:R,analyticsEvents:F,valueHasNoPii:b}),{elementRef:H}=(0,p.z)({onView:Y.onView,value:T??e});(0,n.useEffect)(()=>{void 0!==T&&T!==D.current&&(P(T),D.current=T)},[T]),(0,n.useEffect)(()=>{if(G)return;let t=w.current,a=e||t?.value||"";P(a),D.current=a},[G,e,T]),(0,n.useEffect)(()=>{x(S(s,U||""))},[U,s]);let $=(0,n.useCallback)(e=>{Y.onValueChange(e),w.current?.setAttribute("value",e||""),P(e),x(S(s,e)),d&&d({target:{name:t,type:"select",value:e},type:"change"})},[Y,s,d,t]),W=(0,n.useMemo)(()=>({value:U,onChange:$}),[U,$]),V=(0,n.useCallback)(()=>{$("")},[$]);return(0,r.Y)(E.Provider,{value:W,children:(0,r.Y)(i.l,{componentId:void 0,value:U,placeholder:a,label:v??y["aria-label"],id:h,children:(0,r.FD)(_,{onOpenChange:g,children:[(0,r.Y)(u.b,{ref:H,...y,validationState:C,onClear:V,id:h,value:U,...Y.dataComponentProps,children:k||a}),(0,r.Y)("input",{type:"hidden",ref:w}),(0,r.Y)(o.g,{forceCloseOnEscape:I,...l,children:s})]})})})}),_=({children:e,onOpenChange:t})=>{let{isOpen:a}=(0,d.w)();return(0,n.useEffect)(()=>{t&&t(!!a)},[a,t]),(0,r.Y)(r.FK,{children:e})},v=(0,n.forwardRef)(({value:e,children:t,...a},i)=>{let o=(0,n.useContext)(E);if(!o)throw Error("SimpleSelectOption must be used within a SimpleSelect");let{onChange:l}=o,u=(0,n.useCallback)(({value:e})=>{l(e)},[l]);return(0,r.Y)(s.O,{...a,ref:i,value:e,onChange:u,children:t})}),T=({children:e,label:t,...a})=>{if(!(0,n.useContext)(E))throw Error("SimpleSelectOptionGroup must be used within a SimpleSelect");return(0,r.Y)(l.n,{...a,name:t,children:e})}},150190:(e,t,a)=>{a.d(t,{H:()=>s});var r=a(160603),n=a(733845),i=a(302118);function o(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}function s(e){let t=(0,n.O)();return(0,r.useQuery)(["get_user_info"],()=>{var e;return(e=function*(){if(t)return yield i.k.getUserInfo();return{is_metastore_admin:!1}},function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function s(e){o(i,r,n,s,l,"next",e)}function l(e){o(i,r,n,s,l,"throw",e)}s(void 0)})})()},e)}},159150:(e,t,a)=>{a.d(t,{w:()=>r});function r(e){let t=new Map;return e.forEach(({column_name:e,data_type:a})=>{t.set(e,{name:e,type:a?.toLowerCase(),partition:!1,fields:[],comment:void 0,originalColumnData:{name:e,type_text:a?.toLowerCase(),comment:""}})}),e.forEach(({column_name:e,parent_column:a})=>{if(a&&""!==a){let r=t.get(a),n=t.get(e);r&&n&&r?.fields?.push(n)}}),{columns:Array.from(t.values()).filter(t=>!e.some(e=>e.column_name===t.name&&""!==e.parent_column)),metadata:{}}}},165091:(e,t,a)=>{a.d(t,{q:()=>o});var r=a(412836),n=a(302118);function i(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}function o(){return(0,r.n_)(({catalog:e,payload:t})=>{var a;return(a=function*(){return yield n.k.updateCatalog(e,t)},function(){var e=this,t=arguments;return new Promise(function(r,n){var o=a.apply(e,t);function s(e){i(o,r,n,s,l,"next",e)}function l(e){i(o,r,n,s,l,"throw",e)}s(void 0)})})()})}},192464:(e,t,a)=>{a.d(t,{Os:()=>c,TT:()=>d,T_:()=>p,mr:()=>u});var r=a(159150),n=a(988512),i=a(55749),o=a(103341);function s(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}function l(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function o(e){s(i,r,n,o,l,"next",e)}function l(e){s(i,r,n,o,l,"throw",e)}o(void 0)})}}function u(e){return l(function*(e,t=i.X){let a=(0,n.y)(e).generateGetPostgresDatabasesSql();return(0,o.M)({dataSource:e,queryString:a,queryName:"get_postgres_databases",options:{limit:t}})}).apply(this,arguments)}function c(e,t,a){return l(function*(){let r=(0,n.y)(t).generateGetPostgresSchemasSql(e),s={limit:a||i.X,catalog:e};if(t?.disableSystemQueries)return[];return yield(0,o.M)({dataSource:t,queryString:r,queryName:"get_postgres_schemas",options:s})})()}function d(e,t,a,r,s,u){return l(function*(){let l=(0,n.y)(a).generateGetPostgresTablesSql(e,t),c={limit:r||i.X,errorFilters:s,ignoreError:u,catalog:e};if(a?.disableSystemQueries)return[];return yield(0,o.M)({dataSource:a,queryString:l,queryName:"get_postgres_tables",options:c})})()}function p(e){return l(function*({dataSource:e,catalog:t,schema:a,table:i,errorFilters:s,ignoreError:l,ignoreTableNotFound:u=!1}){try{let u=(0,n.y)(e).generateGetPostgresCompositeTypeSql(a,i),c=yield(0,o.M)({dataSource:e,queryString:u,queryName:"get_postgres_columns",options:{errorFilters:s,ignoreError:l,catalog:t}});return(0,r.w)(c)}catch(t){let e=t?.message??"";if(u&&[/TABLE_OR_VIEW_NOT_FOUND/].some(t=>t.test(e)))return{metadata:{},columns:[]};throw t}}).apply(this,arguments)}},194452:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1 3a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0zm2-.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0V3a.5.5 0 0 0-.5-.5m3.378-.628c.482 0 .872-.39.872-.872h1.5v4.25H10v1.5H6v-1.5h1.25V3.206c-.27.107-.564.166-.872.166H6v-1.5zm5 0c.482 0 .872-.39.872-.872h1.5v4.25H15v1.5h-4v-1.5h1.25V3.206c-.27.107-.564.166-.872.166H11v-1.5zM6 11a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0zm2-.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m-6.622-.378c.482 0 .872-.39.872-.872h1.5v4.25H5V15H1v-1.5h1.25v-2.044c-.27.107-.564.166-.872.166H1v-1.5zm10 0c.482 0 .872-.39.872-.872h1.5v4.25H15V15h-4v-1.5h1.25v-2.044c-.27.107-.564.166-.872.166H11v-1.5z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="BinaryIcon";let l=s},210556:(e,t,a)=>{a.d(t,{f:()=>o});var r=a(610435),n=a(906169),i=a(429608);let o=({dangerouslySetAntdProps:e,...t})=>(0,r.Y)(i.wC,{children:(0,r.Y)(n.A,{...t,...e})})},212536:(e,t,a)=>{a.d(t,{_:()=>T});var r=a(610435),n=a(956935),i=a(813342),o=a.n(i),s=a(692738),l=a(284260),u=a(497895),c=a(996648),d=a(927802),p=a(684944),f=a(461815),E=a(768622),m=a(639712),A=a(382908),g=a(804723),S=a(79128),h=a(194901),_=a(217985);function v(e,t){return e.name.includes(t)}function T({id:e="uc-selector",componentId:t="web-shared_uc-selector",placeholder:a,allItems:i,loading:S,value:h,onChange:I,icon:R,disabled:O,emptyText:b,width:y=240,getFooter:N,matchTriggerWidth:L=!1,validationState:M,getItemState:w,optionHintContentField:D,filterFn:U,optionAddon:P,maxHeight:k,selectAllLabel:x,overflowEllipsis:G=!1,getOpenInNewTabURL:F}){let[Y,H]=s.useState(i),$=(0,s.useRef)(),{theme:W}=(0,u.wn)();(0,s.useEffect)(()=>{S||H(i)},[i,S]);let V=(0,s.useMemo)(()=>x&&h===x?{name:x}:i.find(e=>e.name===h),[i,x,h]),B=(0,c.SY)({componentId:t,allItems:i,items:Y,setItems:H,itemToString:e=>e.name,matcher:U||v,initialInputValue:h,formValue:V,onStateChange({selectedItem:e,type:t}){switch(t){case c.HM.ItemClick:case c.HM.InputKeyDownEnter:e?.name&&I(e.name);break;case c.HM.FunctionReset:I(void 0)}}}),K=N?.({hideMenuOnClick:B.closeMenu,onAddItem:B.selectItem}),z=x?(0,r.Y)(C,{componentId:"uc-selector-select-all-entity-button",isChecked:V?.name===x,onClick:()=>{B.selectItem({name:x}),B.closeMenu(),I(x)},children:x}):void 0,q=(0,l.z)({size:Y.length,parentRef:$,estimateSize:(0,s.useCallback)(()=>D?48:W.general.heightSm,[D,W.general.heightSm]),overscan:30});return(0,r.FD)(d.h,{comboboxState:B,style:{width:y},children:[(0,r.Y)(p.$,{id:e,placeholder:a,comboboxState:B,clearInputValueOnFocus:!0,prefix:R,disabled:O,"data-testid":`uc-selector-${e}`,validationState:M,allowClear:!x||V?.name!==x,dangerouslyAppendEmotionCSS:G?(0,n.AH)({input:{textOverflow:"ellipsis !important",whiteSpace:"nowrap"}}):void 0}),(0,r.FD)(f.i,{loading:S,comboboxState:B,width:L?void 0:240,maxHeight:k??5.5*W.general.heightSm,virtualizerRef:$,listWrapperHeight:q.totalSize,emptyText:b,matchTriggerWidth:L,children:[q.virtualItems.map(e=>{let t=Y[e.index],{disableReason:a}=w?.(t)??{};return(0,r.Y)(E.bb,{item:t,index:e.index,comboboxState:B,isDisabled:void 0!==a,disabledReason:a,style:(0,m.D7)(e),hintContent:D&&t[D],title:t.name,css:{label:{textOverflow:"ellipsis",whiteSpace:"nowrap",width:"100%"},'[data-component-id="uc-selector.open-in-new-tab.link"]':{opacity:0},'&:hover [data-component-id="uc-selector.open-in-new-tab.link"]':{opacity:1}},children:(0,r.FD)("div",{css:{display:"flex",alignItems:"center",flexWrap:"nowrap"},children:[P&&P(t),(0,r.Y)(A.o.Text,{ellipsis:!0,css:{marginBottom:void 0!==a?W.spacing.xs:void 0,color:void 0!==a?W.colors.actionDisabledText+"!important":void 0},children:t.name}),F&&void 0===a&&(0,r.Y)(_.N,{asTypographyLink:!0,to:F(t),openInNewTab:!0,componentId:"uc-selector.open-in-new-tab.link",css:{marginLeft:"auto"}})]})},`item-${t.name}`)}),(!o()(K)||!o()(z))&&(0,r.FD)(g.S,{children:[!o()(z)&&z,!o()(K)&&K]})]})]})}let C=({isChecked:e,children:t,...a})=>{let{theme:i}=(0,u.wn)(),o={...(0,n.AH)((0,m.dg)({border:"none",width:"100%","span:not(.anticon)":{marginLeft:i.spacing.xs},span:{color:`${i.colors.textPrimary} !important`}}))};return(0,r.Y)(S.$n,{...a,type:"tertiary",className:"combobox-footer-add-button all-entity-button",icon:e?(0,r.Y)(h.A,{}):(0,r.Y)("div",{style:{width:i.general.iconFontSize}}),css:o,children:t})}},217002:(e,t,a)=>{a.d(t,{i:()=>r});let r=e=>["get_storage_credential",e]},220978:(e,t,a)=>{a.d(t,{f:()=>o});var r=a(141078),n=a(96437);let i=(0,r.J1)`
  ${n.nk}
  mutation CreateSampleDashboardMutation(
    $input: LakeviewconfigServicesTemplatedashboardCreateSampleDashboardRequestInput!
  ) @component(name: "Lakeview.Dashboards") {
    lakeviewconfigServicesTemplatedashboardCreateSampleDashboard(input: $input) {
      dashboardName
      apiError {
        ...LakeviewApiErrorFragment
      }
    }
  }
`,o=({onCompleted:e,onError:t})=>(0,r.n_)(i,{onCompleted:e,onError:t})},242995:(e,t,a)=>{a.d(t,{h:()=>o,j:()=>i});var r,n=a(696514),i=((r={}).DONE="done",r.CANCELED="canceled",r);let o=(0,n.fH)("Filebrowser::SaveAsFolderNode")},283009:(e,t,a)=>{a.d(t,{a:()=>s});var r=a(610435);a(692738);var n=a(79128),i=a(79570),o=a(180864);function s({buttonProps:e,componentId:t,copyText:a,copyTooltip:l,isInsideInputGroup:u=!1,onCopy:c,tooltipProps:d}){let{actionIcon:p,copy:f,handleTooltipOpenChange:E,tooltipOpen:m,tooltipMessage:A}=(0,o.L)(a,l,c),g=(0,r.Y)(n.$n,{"aria-label":A,componentId:t,icon:p,onClick:f,size:"small",...e}),S=(0,r.Y)(n.$n,{"aria-label":A,componentId:t,onClick:f,...e,children:p});return(0,r.Y)(i.m,{componentId:`${t}-tooltip`,content:A,onOpenChange:E,open:m,...d,children:u?S:g})}},290766:(e,t,a)=>{a.d(t,{T:()=>l});var r=a(65061),n=a(960718),i=a(141078);let o=(0,i.J1)`
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
`,l=(e,t)=>(0,r.IT)(t?s:o,{fetchPolicy:"cache-and-network",...e})},295423:(e,t,a)=>{a.d(t,{f:()=>u});var r=a(692738),n=a(671244),i=a(653542),o=a(49586),s=a(209908);let l=50,u=({enableAccountGroups:e=!1,enableAccountServicePrincipals:t=!1,enableAccountUsers:a=!1,enableWorkspaceGroups:u=!0,enableWorkspaceServicePrincipals:c=!0,enableWorkspaceUsers:d=!0,filterText:p="",principalIdsForFiltering:f=[],principalUniqueNamesForFiltering:E=[],limit:m=l,useLite:A,skip:g=!1,isCache:S=!1}={})=>{let h=(0,s.VM)({ids:f,uniqueNames:E}),_=(0,s.L5)({ids:f,uniqueNames:E}),{subjects:v,isLoading:T,error:C,hasNextPage:I}=(0,o.zo)({source:"account",filter:p,filterPredicate:h,first:m,skip:!a||g,useLite:A,isCache:S}),{subjects:R,isLoading:O,error:b,hasNextPage:y}=(0,n.Bi)({source:"account",filter:p,filterPredicate:_,first:m,skip:!e||g,useLite:A,isCache:S}),{subjects:N,isLoading:L,error:M,hasNextPage:w}=(0,i.Q_)({source:"account",filter:p,filterPredicate:h,first:m,skip:!t||g,useLite:A,isCache:S}),{subjects:D,isLoading:U,error:P,hasNextPage:k}=(0,o.zo)({source:"workspace",filter:p,filterPredicate:h,first:m,skip:!d||g,useLite:A,isCache:S}),{subjects:x,isLoading:G,error:F,hasNextPage:Y}=(0,n.Bi)({source:"workspace",filter:p,filterPredicate:_,first:m,skip:!u||g,useLite:A,isCache:S}),{subjects:H,isLoading:$,error:W,hasNextPage:V}=(0,i.Q_)({source:"workspace",filter:p,filterPredicate:h,first:m,skip:!c||g,useLite:A,isCache:S}),B=(0,r.useMemo)(()=>{let t=[...x,...R];if(e&&u)return t.filter((e,t,a)=>t===a.findIndex(t=>t.id===e.id));return t},[R,e,u,x]),K=(0,r.useMemo)(()=>{let e=[...H,...N];if(t&&c)return e.filter((e,t,a)=>t===a.findIndex(t=>t.id===e.id));return e},[N,t,c,H]),z=(0,r.useMemo)(()=>{let e=[...D,...v];if(a&&d)return e.filter((e,t,a)=>t===a.findIndex(t=>t.id===e.id));return e},[v,a,d,D]),{subjects:q,hasNextPage:Q}=(0,r.useMemo)(()=>(0,s.GF)(p,m,B,K,z),[p,m,B,K,z]),J=(0,r.useMemo)(()=>({accountGroups:O,accountServicePrincipals:L,accountUsers:T,groups:G,servicePrincipals:$,users:U,some:O||L||T||G||$||U}),[O,L,T,G,$,U]),j=(0,r.useMemo)(()=>({accountGroups:b??null,accountServicePrincipals:M??null,accountUsers:C??null,groups:F??null,servicePrincipals:W??null,users:P??null}),[b,M,C,F,W,P]);return{allSubjectsMap:(0,r.useMemo)(()=>(0,s.ne)(B,K,z),[B,K,z]),errors:j,hasNextPage:!!(q.length===m&&(I||y||w||k||Y||V)||Q),isLoading:J,subjects:q}}},302136:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(692738),n=a(967166);function i(){let e=(0,n.hG)();return(0,r.useCallback)(t=>e({uc_api_ui_log:t}),[e])}},308879:(e,t,a)=>{a.d(t,{L:()=>l,u:()=>u});var r=a(689262),n=a(686560),i=a(441535),o=a(709262),s=a(805287);let l=()=>({isEnabled:u()}),u=()=>(0,s.gz)({cloud:"AWS",userCanUseDatabricksWorkspace:(0,n.d)("userCanUseDatabricksWorkspace_new",!1),userCanUseSqlService:(0,n.d)("userCanUseSqlService_new",!1),enableSqlService:(0,r.b)("enableSqlService",(0,n.d)("enableSqlService",!1),()=>(0,n.d)("dbSqlEnabled_new",!1)),centralizedLoginEnabled:(0,r.b)("centralizedLoginEnabled",(0,n.d)("centralizedLoginEnabled",!1),()=>(0,i.W)("databricks.fe.centralizedLoginEnabled",!1))})[o.EU].allowed},311529:(e,t,a)=>{a.d(t,{F:()=>i,x:()=>o});var r,n=a(696514),i=((r={}).DONE="done",r);let o=(0,n.fH)("Filebrowser::Share")},319241:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M2 1.75A.75.75 0 0 1 2.75 1h6a.75.75 0 0 1 .53.22l4.5 4.5c.141.14.22.331.22.53v9a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1-.75-.75zm1.5.75v12h9V7H8.75A.75.75 0 0 1 8 6.25V2.5zm6 1.06 1.94 1.94H9.5z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="FileIcon";let l=s},320126:(e,t,a)=>{a.d(t,{B:()=>d});var r=a(610435),n=a(219830),i=a(403166),o=a(964133),s=a(944552),l=a(342411),u=a(441535);let c=({value:e,label:t,popoverContent:a})=>(0,r.FD)("div",{style:{display:"flex",gridRow:"label"},children:[(0,r.Y)(n.sx,{value:e,css:{marginRight:0},children:t}),a&&(0,r.Y)("div",{css:{display:"flex",alignItems:"center",paddingTop:1,marginLeft:-6},children:(0,r.Y)(i.U,{children:a})})]}),d=({componentId:e,isAutoscalingSelected:t,formField:a,onChange:i})=>{let{formatMessage:d}=(0,l.tz)(),p=(0,u.W)("databricks.fe.lakebase.hideBetaBadge",!1),f=(0,u.W)("databricks.fe.lakebase.replaceAutoscalingSwitchWithSelector",!1);if(!p||!f)return(0,r.FD)("div",{css:{display:"flex",justifyContent:"space-between"},children:[(0,r.Y)(o.D.Label,{htmlFor:"autoscaling-beta-switch",infoPopoverContents:d(p?{id:"J/59kJ",defaultMessage:"Enable Lakebase Postgres Autoscaling for branching, instant restore, and other advanced features. HA is currently offered only in the Lakebase Provisioned Preview."}:{id:"uCfnkC",defaultMessage:"Enable to use the latest version of Lakebase Postgres, the Autoscaling beta (for evaluation only). For production, leave disabled to use standard Lakebase Postgres."}),infoPopoverProps:{popoverProps:{style:{maxWidth:400}}},children:d(p?{id:"FEhQrw",defaultMessage:"Autoscaling"}:{id:"GWIlJr",defaultMessage:"Autoscaling Beta"})}),(0,r.Y)(s.d,{componentId:e,id:"autoscaling-beta-switch",...a,checked:t,onChange:i})]});return(0,r.FD)("div",{children:[(0,r.Y)(o.D.Label,{htmlFor:"database-type-radio-group",children:(0,r.Y)(l.sA,{id:"yRfOwP",defaultMessage:"Database type"})}),(0,r.FD)(n.sx.HorizontalGroup,{componentId:"catalogCreation.lakebaseDatabaseType",id:"database-type-radio-group",...a,name:a?.name??"autoscalingBeta",value:t?"autoscaling":"provisioned",onChange:e=>{i("autoscaling"===e.target.value)},children:[(0,r.Y)(c,{value:"autoscaling",label:d({id:"Qgmeqm",defaultMessage:"Autoscaling"}),popoverContent:d({id:"3ySzDc",defaultMessage:"Autoscaling compute with branching, instant restore, and advanced features."})}),(0,r.Y)(c,{value:"provisioned",label:d({id:"y4pkKO",defaultMessage:"Provisioned"}),popoverContent:d({id:"9mNQM6",defaultMessage:"High availability (HA) and integration with Databricks apps."})})]})]})}},322227:(e,t,a)=>{a.d(t,{$:()=>i,x:()=>o});var r,n=a(696514),i=((r={}).DONE="done",r.CANCELLED="cancelled",r);let o=(0,n.fH)("Filebrowser::Move")},342145:(e,t,a)=>{a.d(t,{$y:()=>d,B_:()=>v,FQ:()=>m,OD:()=>s,T4:()=>o,U1:()=>A,UX:()=>f,Yu:()=>S,bB:()=>i,cC:()=>E,k0:()=>n,nU:()=>u,sO:()=>_,sh:()=>c,wp:()=>l,xY:()=>p,xe:()=>h,zD:()=>g});var r=a(141078);let n=(0,r.J1)`
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
`,u=(0,r.J1)`
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
`,c=(0,r.J1)`
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
`,d=(0,r.J1)`
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
`,f=(0,r.J1)`
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
`,E=(0,r.J1)`
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
`,m=(0,r.J1)`
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
`,A=(0,r.J1)`
  query getAccountUsersCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountUsersCount {
      totalCount
    }
  }
`,g=(0,r.J1)`
  query getAccountServicePrincipalsCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountServicePrincipalsCount {
      totalCount
    }
  }
`,S=(0,r.J1)`
  query getAccountGroupsCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountGroupsCount {
      totalCount
    }
  }
`,h=(0,r.J1)`
  query getWorkspaceUsersCount($shouldGetDirectlyAssignedOnly: Boolean) @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceUsersCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`,_=(0,r.J1)`
  query getWorkspaceServicePrincipalsCount($shouldGetDirectlyAssignedOnly: Boolean)
  @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceServicePrincipalsCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`,v=(0,r.J1)`
  query getWorkspaceGroupsCount($shouldGetDirectlyAssignedOnly: Boolean) @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceGroupsCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`},350487:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.78 3.97 5.03 1.22a.75.75 0 0 0-1.06 0L1.22 3.97a.75.75 0 0 0 0 1.06l2.75 2.75a.75.75 0 0 0 1.06 0l2.75-2.75a.75.75 0 0 0 0-1.06m-1.59.53L4.5 6.19 2.81 4.5 4.5 2.81zM15 11.75a3.25 3.25 0 1 0-6.5 0 3.25 3.25 0 0 0 6.5 0M11.75 10a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5",clipRule:"evenodd"}),(0,r.Y)("path",{fill:"currentColor",d:"M14.25 1H9v1.5h4.5V7H15V1.75a.75.75 0 0 0-.75-.75M1 9v5.25c0 .414.336.75.75.75H7v-1.5H2.5V9z"})]})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="ConnectIcon";let l=s},351089:(e,t,a)=>{a.d(t,{v:()=>u,y:()=>c});var r=a(412836),n=a(733337),i=a(660618),o=a(927239),s=a(595615);function l(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}let u=e=>"isDatabaseCatalog"in e&&!0===e.isDatabaseCatalog;function c(){let{invalidate:e}=(0,s.rA)();return(0,r.n_)(({name:e,databaseName:t,instanceName:a,groupOwner:r,authAsGroup:o,createDatabaseIfNotExists:s})=>{var u;return(u=function*(){let r=new URL(`${i.e0}/catalogs`,window.location.href);return yield(0,n.nr)(r.toString(),{method:"POST",body:JSON.stringify({name:e,database_name:t,database_instance_name:a,create_database_if_not_exists:!!s})})},function(){var e=this,t=arguments;return new Promise(function(a,r){var n=u.apply(e,t);function i(e){l(n,a,r,i,o,"next",e)}function o(e){l(n,a,r,i,o,"throw",e)}i(void 0)})})()},{onSuccess:()=>{e([o.xQ])}})}},352185:(e,t,a)=>{a.d(t,{A6:()=>_,Ds:()=>p,FI:()=>d,I7:()=>c,m1:()=>u});var r,n,i,o=a(446835),s=a.n(o),l=a(978679),u=((r={}).CONFIGURATION="configuration",r.NOTEBOOKS="notebooks",r.LIBRARIES="libraries",r.SPARK_UI="sparkUi",r.DRIVER_LOGS="driverLogs",r.METRICS="metrics",r.SPARK_CLUSTER_UI="sparkClusterUi",r.APPS="apps",r.EVENTS="events",r);let c="/compute";var d=((n={}).InteractiveListPage="interactive",n.AutomatedListPage="automated",n.SqlWarehouses="sql-warehouses",n.BrickIndex="vector-search",n.BrickStore="online-stores",n.DatabaseInstances="database-instances",n.InstancePools="instance-pools",n.ClusterPolicies="policies",n.LakehouseApps="apps",n.GpuPools="gpu-pools",n.Serverless="serverless",n),p=((i={}).New="new",i.Edit="edit",i);let f=function e(...t){let a=RegExp("(^/*)|(/*$)","g"),r=s()(t).map(e=>e.trim().replace(a,"")).join("/"),n=r?`/${r}`:"",i=t=>t?e(n,t)():n;return i.append=(...t)=>e(n,...t),i}(c),E=f.append("instance-pools"),m=f.append("policies"),A=f.append("sparkui"),g=f.append("clusters"),S=f.append("database-instances");function h(e){return["driver",e].filter(l.zz).join("-")}let _={clusterMainPage:e=>f(e),sqlWarehouse:{create:()=>f.append("sql-warehouses")("new")},brickStore:{list:()=>_.clusterMainPage("online-stores"),view:e=>f.append("online-stores")(e)},databaseInstances:{list:()=>_.clusterMainPage("database-instances"),view:e=>S(e),edit:e=>S.append(e)("edit")},cluster:{view(e,t,a){let r=g.append(e);if(!t||"configuration"===t)return r();if("driverLogs"===t)return r("driver-logs");if("sparkUi"===t)return r("spark-ui");if("sparkClusterUi"===t)return r.append("spark-compute-ui")(("MASTER"===a?"master":a)??"master");return r(t)},edit:e=>g.append(e)("edit"),new:(e={})=>{let t="policyId"in e?`?policyId=${e.policyId}`:"",a="clone"in e?`?clone=${e.clone}`:"";return g.append("new")(a||t)}},sparkUi:{driverUi:(e,t)=>A.append(e)(`driver${t?`-${t}`:""}`),logs:(e,t)=>{let a=A.append(e)("driver-logs");if(!t?.jobId&&!t?.runId)return a;let r=new URLSearchParams;return t.jobId&&r.set("jobId",String(t.jobId)),t.runId&&r.set("runId",String(t.runId)),`${a}?${r}`},uiWithPath:e=>A.append(e)(),metrics:e=>A.append(e)("metrics"),stage:(e,t,a,r)=>A.append(e,h(t))(`stages/stage?id=${a}&attempt=0${void 0!==r?"&o="+r:""}`),job:(e,t,a,r)=>A.append(e,h(t))(`jobs/job?id=${a}${void 0!==r?"&o="+r:""}`)},brickIndex:{list:()=>_.clusterMainPage("vector-search"),view:e=>f.append("vector-search")(e)},policy:{view:e=>m(e),create:()=>m("new"),clone:e=>_.policy.create()+`?clone=${e}`,edit:e=>m.append(e)("edit")},pool:{view:e=>E(e),create:()=>E("new"),edit:e=>E.append(e)("edit")}}},353684:(e,t,a)=>{a.d(t,{I:()=>g,j:()=>S});var r=a(160603),n=a(409989),i=a(412836),o=a(217002),s=a(539305),l=a(841734),u=a(29824),c=a(660618),d=a(165091),p=a(166893),f=a(372854);function E(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}function m(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function o(e){E(i,r,n,o,s,"next",e)}function s(e){E(i,r,n,o,s,"throw",e)}o(void 0)})}}let A={[u.an.EXTERNAL_LOCATION]:s.C,[u.an.STORAGE_CREDENTIAL]:o.i,[u.an.CREDENTIAL]:o.i,[u.an.CATALOG]:l.ry};function g(e){let t=(0,r.useQueryClient)(),a=f.RF[e];return(0,i.n_)(({securableName:e,payload:t})=>m(function*(){return function(t){return m(function*(){let r,i=yield n.pY.patch((r=encodeURIComponent(e),`${c.bY}/bindings/${a}/${r}`),t);return((i?.data||i)??null).bindings})()}(t)})(),{onSuccess:(r,n)=>{let{securableName:o}=n;if(i.aH.getActiveValue().invalidateQueries(["workspace_bindings:v1",a,o]),A[e]){t.resetQueries(A[e](o));let a=((e,t)=>{switch(e){case u.an.EXTERNAL_LOCATION:return["authz_eval","external_location",t];case u.an.STORAGE_CREDENTIAL:return["authz_eval","storage_credential",t];case u.an.CREDENTIAL:return["authz_eval","credential",t];default:return[]}})(e,o);a&&t.refetchQueries(a)}}})}function S(){let e=(0,d.q)(),t=g(u.an.CATALOG);return(0,i.n_)(({catalogName:a,payload:r})=>m(function*(){e.isSuccess||(yield e.mutateAsync({catalog:a,payload:{isolation_mode:p.ZB.ISOLATED}})),r.add&&r.add.length>0&&(yield t.mutateAsync({securableName:a,payload:r}))})())}},397136:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M3 1.75A.75.75 0 0 1 3.75 1h10.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V12.5H1V11h2V8.75H1v-1.5h2V5H1V3.5h2zm1.5.75v11H6v-11zm3 0v11h6v-11z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="NotebookIcon";let l=s},402720:(e,t,a)=>{let r;a.d(t,{P:()=>u});var n=a(610435),i=a(400136),o=a(591333),s=a(429608),l=a(866370);let u=((r=({dangerouslySetAntdProps:e,label:t,loadingDescription:a="LegacySkeleton",...r})=>{let u=r.loading??!0;return(0,n.Y)(s.wC,{children:(0,n.FD)(o.U,{label:t,children:[u&&(0,n.Y)(l.G,{description:a}),(0,n.Y)(i.A,{...r,...e})]})})}).Button=i.A.Button,r.Image=i.A.Image,r.Input=i.A.Input,r)},404991:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m2.207-10.189a2.25 2.25 0 0 1-1.457 2.56V9h-1.5V7.75A.75.75 0 0 1 8 7a.75.75 0 1 0-.75-.75h-1.5a2.25 2.25 0 0 1 4.457-.439M7.25 10.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="QuestionMarkFillIcon";let l=s},424489:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",d:"M12.125 8.864a.75.75 0 0 0 0-1.3l-6-3.464A.75.75 0 0 0 5 4.75v6.928a.75.75 0 0 0 1.125.65z"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="PlayIcon";let l=s},434288:(e,t,a)=>{a.d(t,{l:()=>r});let r=(0,a(342411).YK)({requestPermissions:{id:"CrJ5nP",defaultMessage:"Request permissions"},requestDeltaSharingPermissions:{id:"P0HsgX",defaultMessage:"Request Delta Sharing permissions"},requestAccessDisabledTooltip:{id:"LW+CW/",defaultMessage:"Requests for access are not enabled for this object. Please contact the object owner or administrator for additional permissions."},requestAccessDeltaSharingRecipientDisabledTooltip:{id:"HX5unK",defaultMessage:"Requests for access are not enabled for this object. Please contact the object owner or administrator for USE_PROVIDER permissions."},requestAccessDeltaSharingProviderDisabledTooltip:{id:"pdgj40",defaultMessage:"Requests for access are not enabled for this object. Please contact the object owner or administrator for CREATE_RECIPIENT and CREATE_SHARE permissions."},requestAccessDisabledMultipleTooltip:{id:"b2k+c/",defaultMessage:"Requests for access are not enabled for these objects. Please contact the object owners or administrators for additional permissions."}})},438965:(e,t,a)=>{a.d(t,{Y:()=>o});var r=a(879612),n=a(29824),i=a(641760);function o(e){let t=(0,i.ei)(),a=(0,r.xO)({securableType:n.an.CATALOG,securableKind:e},{isUcEnabled:t});return!!a?.includes("BROWSE")}},459528:(e,t,a)=>{a.d(t,{E:()=>n,v:()=>i});var r=a(696514);let n=(0,r.fH)("Clusters::ExecuteSql"),i=(0,r.fH)("Clusters::CancelSql")},482921:(e,t,a)=>{a.d(t,{G:()=>i,M:()=>n});var r,n=((r={}).ONLY_CLUSTER="ONLY_CLUSTER",r.ONLY_WAREHOUSE="ONLY_WAREHOUSE",r.WAREHOUSE_AND_CLUSTER="WAREHOUSE_AND_CLUSTER",r);let i=(e,t)=>{if(!t&&e)return"ONLY_CLUSTER";if(!e)return"ONLY_WAREHOUSE";return"WAREHOUSE_AND_CLUSTER"}},505544:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.727 3.695c-.225.192-.227.298-.227.305s.002.113.227.305c.223.19.59.394 1.108.58C4.865 5.256 6.337 5.5 8 5.5s3.135-.244 4.165-.615c.519-.186.885-.39 1.108-.58.225-.192.227-.298.227-.305s-.002-.113-.227-.305c-.223-.19-.59-.394-1.108-.58C11.135 2.744 9.663 2.5 8 2.5s-3.135.244-4.165.615c-.519.186-.885.39-1.108.58M13.5 5.94a7 7 0 0 1-.826.358C11.442 6.74 9.789 7 8 7s-3.442-.26-4.673-.703a7 7 0 0 1-.827-.358V8c0 .007.002.113.227.305.223.19.59.394 1.108.58C4.865 9.256 6.337 9.5 8 9.5s3.135-.244 4.165-.615c.519-.186.885-.39 1.108-.58.225-.192.227-.298.227-.305zM15 8V4c0-.615-.348-1.1-.755-1.447-.41-.349-.959-.63-1.571-.85C11.442 1.26 9.789 1 8 1s-3.442.26-4.673.703c-.613.22-1.162.501-1.572.85C1.348 2.9 1 3.385 1 4v8c0 .615.348 1.1.755 1.447.41.349.959.63 1.572.85C4.558 14.74 6.21 15 8 15s3.441-.26 4.674-.703c.612-.22 1.161-.501 1.571-.85.407-.346.755-.832.755-1.447zm-1.5 1.939a7 7 0 0 1-.826.358C11.442 10.74 9.789 11 8 11s-3.442-.26-4.673-.703a7 7 0 0 1-.827-.358V12c0 .007.002.113.227.305.223.19.59.394 1.108.58 1.03.371 2.502.615 4.165.615s3.135-.244 4.165-.615c.519-.186.885-.39 1.108-.58.225-.192.227-.298.227-.305z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="DatabaseIcon";let l=s},509695:(e,t,a)=>{a.d(t,{h:()=>c,p:()=>u});var r=a(610435),n=a(452137),i=a.n(n),o=a(692738),s=a(566512);let l=(0,o.createContext)(void 0),u=({children:e})=>{let[t,a]=(0,s.o)();return(0,r.FD)(l.Provider,{value:t,children:[e,a]})},c=()=>{let e=(0,o.useContext)(l);return i()(null!=e,"Must wrap child in NotificationProvider"),e}},509901:(e,t,a)=>{a.d(t,{Yf:()=>p,gf:()=>E,ok:()=>d,s5:()=>f});var r=a(413063),n=a.n(r),i=a(692738),o=a(412836),s=a(425373),l=a(302118);function u(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}function c(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function o(e){u(i,r,n,o,s,"next",e)}function s(e){u(i,r,n,o,s,"throw",e)}o(void 0)})}}function d(e,t,a){let r=(0,i.useCallback)(({key:e,...t})=>({queryKey:["authz_eval",...e],queryFn:({signal:e})=>c(function*(){return yield l.k.authzEval(t,a?{signal:e}:void 0)})()}),[a]);return(0,o.IT)({...r(e),...t})}function p(e,t,a){var r,i,o;let u,d=(0,s.E)({queries:(r=e,i=t,o=a,u=["authz_eval"].concat(r),n()(Object.entries(i.actions),f).map((e,t)=>{let a=e.reduce((e,t)=>(e[t[0]]=t[1],e),{});return{queryKey:[...u,t],queryFn:()=>{var e;return e={actions:a,include_argument_metadata:i.include_argument_metadata},c(function*(){return yield l.k.authzEval(e)})()},enabled:o?.enabled,refetchOnWindowFocus:o?.refetchOnWindowFocus==="always"||!!o?.refetchOnWindowFocus,staleTime:o?.staleTime}}))}),p=d.some(e=>e.isLoading);if(p)return{isLoading:p,data:null,isError:!1,errors:[]};let E=d.reduce((e,t)=>(t.error&&e.push(t.error),e),[]);if(E.length>0)return{isLoading:p,data:null,isError:!0,errors:E};return{isLoading:p,data:d.reduce((e,t)=>{if(t.data&&t.data?.actions)return{actions:{...e.actions,...t.data.actions}};return e},{actions:{}}),isError:!1,errors:[]}}let f=100;function E(e){e.invalidateQueries(["authz_eval"])}},520682:(e,t,a)=>{a.d(t,{h:()=>o});var r=a(141078),n=a(96437);let i=(0,r.J1)`
  ${n.nk}
  query ListSampleDashboardsQuery($input: LakeviewconfigServicesTemplatedashboardListSampleDashboardsRequestInput!)
  @component(name: "Lakeview.Dashboards") {
    lakeviewconfigServicesTemplatedashboardListSampleDashboards(input: $input) {
      sampleDashboards {
        description
        displayName
        sampleDashboardId
      }
      apiError {
        ...LakeviewApiErrorFragment
      }
    }
  }
`,o=({onCompleted:e,onError:t})=>(0,r.IT)(i,{variables:{input:{}},fetchPolicy:"network-only",pollInterval:0,onCompleted:e,onError:t})},539305:(e,t,a)=>{a.d(t,{C:()=>r});let r=e=>["get_external_location",e]},566825:(e,t,a)=>{a.d(t,{Ay:()=>h,Ns:()=>A,ZC:()=>S,r:()=>g});var r=a(987962),n=a.n(r),i=a(623576),o=a.n(i),s=a(189219),l=a.n(s),u=a(923305),c=a(651139),d=a(949313),p=a(670943),f=a(924636),E=a(984741),m=a(885364);function A(e){return n()(e,"job.id")?(0,d.Ec)(e.job.id,1e3):e}let g=["get-data-sources"],S=(0,E.to)("sql/images/db-logos"),h={query:()=>(0,p.Ym)()?c.pY.get(f.bI).then(e=>e?.data_sources||[]):c.pY.get((0,u.Hi)("api/data_sources")),get:({id:e})=>c.pY.get((0,u.Hi)(`api/data_sources/${e}`)),types:()=>c.pY.get((0,u.Hi)("api/data_sources/types")),create:e=>c.pY.post((0,u.Hi)("api/data_sources"),e),save:e=>c.pY.post((0,u.Hi)(`api/data_sources/${e.id}`),e),test:e=>c.pY.post((0,u.Hi)(`api/data_sources/${e.id}/test`)),delete:({id:e})=>c.pY.delete((0,u.Hi)(`api/data_sources/${e}`)),fetchSchema:(e,t=!1)=>{let a={};return t&&(a.refresh=!0),c.pY.get((0,u.Hi)(`api/data_sources/${e.id}/schema`),{params:a}).then(e=>{if(n()(e,"job"))return(0,d.Ec)(e.job.id).catch(t=>1===t.code?[]:Promise.reject(Error(e.job.error)));return n()(e,"schema")?e.schema:Promise.reject()}).then(e=>o()(e,e=>{var t;return{...e,columns:(t=e.columns,o()(t,e=>l()(e)?e:{name:e})),type:e.type}}))},fetchColumns:(e,t,a)=>c.pY.get((0,u.Hi)(`api/data_sources/${e}/${t}/columns/${a}`)).then(A).then((0,m.g)("DataSource.fetchColumns"))}},571739:(e,t,a)=>{a.d(t,{J:()=>i,z:()=>o});var r,n=a(696514),i=((r={}).DONE="done",r.CANCELLED="cancelled",r);let o=(0,n.fH)("Filebrowser::Clone")},572382:(e,t,a)=>{a.d(t,{CU:()=>s,U1:()=>l,iC:()=>o,kc:()=>n,sT:()=>i});var r=a(32121);function n(e){return e?.edges.map(e=>e.node)}function i({networkStatus:e}){return e===r.pT.fetchMore}function o({networkStatus:e}){return e===r.pT.refetch}function s({networkStatus:e}){return e===r.pT.poll}function l({__typename:e,...t}){return t}},574132:(e,t,a)=>{a.d(t,{y:()=>i});var r=a(610435);a(692738);var n=a(497895);let i=({disabled:e,children:t})=>{let{theme:a}=(0,n.wn)();return(0,r.Y)("div",{css:{color:a.colors.textSecondary,fontSize:a.typography.fontSizeSm,...e&&{color:a.colors.actionDisabledText}},children:t})}},581716:(e,t,a)=>{a.d(t,{UM:()=>c,hs:()=>p,pu:()=>d,rs:()=>m,tn:()=>E,w$:()=>u,xf:()=>f});var r,n,i,o,s,l,u=((r={}).USERNAME_PASSWORD="USERNAME_PASSWORD",r.OAUTH_GOOGLE_SERVICE_ACCOUNT="OAUTH_GOOGLE_SERVICE_ACCOUNT",r.OAUTH_U2M="OAUTH_U2M",r.OAUTH_M2M="OAUTH_M2M",r.OAUTH_U2M_MAPPING="OAUTH_U2M_MAPPING",r.OAUTH_ACCESS_TOKEN="OAUTH_ACCESS_TOKEN",r.OAUTH_REFRESH_TOKEN="OAUTH_REFRESH_TOKEN",r.OAUTH_RESOURCE_OWNER_PASSWORD="OAUTH_RESOURCE_OWNER_PASSWORD",r.BEARER_TOKEN="BEARER_TOKEN",r.PEM_PRIVATE_KEY="PEM_PRIVATE_KEY",r.SERVICE_CREDENTIAL="SERVICE_CREDENTIAL",r.OAUTH_MTLS="OAUTH_MTLS",r.ANY_STATIC_CREDENTIAL="ANY_STATIC_CREDENTIAL",r.SSWS_TOKEN="SSWS_TOKEN",r.OAUTH_DCR="OAUTH_DCR",r),c=((n={}).ACTIVE="ACTIVE",n.FAILED="FAILED",n.PROVISIONING="PROVISIONING",n),d=((i={}).MYSQL="MYSQL",i.MONGODB="MONGODB",i.POSTGRESQL="POSTGRESQL",i.MANAGED_POSTGRESQL="MANAGED_POSTGRESQL",i.SNOWFLAKE="SNOWFLAKE",i.REDSHIFT="REDSHIFT",i.SQLDW="SQLDW",i.SQLSERVER="SQLSERVER",i.DATABRICKS="DATABRICKS",i.SALESFORCE="SALESFORCE",i.SALESFORCE_DATA_CLOUD="SALESFORCE_DATA_CLOUD",i.SALESFORCE_DATA_CLOUD_FILE_SHARING="SALESFORCE_DATA_CLOUD_FILE_SHARING",i.TERADATA="TERADATA",i.ORACLE="ORACLE",i.BIGQUERY="BIGQUERY",i.NETSUITE="NETSUITE",i.WORKDAY_RAAS="WORKDAY_RAAS",i.WORKDAY_ACTIVITY_LOGGING="WORKDAY_ACTIVITY_LOGGING",i.WORKDAY_HCM="WORKDAY_HCM",i.SERVICENOW="SERVICENOW",i.VECTOR_INDEX="VECTOR_INDEX",i.FABRIC="FABRIC",i.ONELAKE="ONELAKE",i.HIVE_METASTORE="HIVE_METASTORE",i.GLUE="GLUE",i.GA4_RAW_DATA="GA4_RAW_DATA",i.GOOGLE_DRIVE="GOOGLE_DRIVE",i.SHAREPOINT="SHAREPOINT",i.ONEDRIVE="ONEDRIVE",i.HTTP="HTTP",i.POWER_BI="POWER_BI",i.SFTP="SFTP",i.DYNAMICS365="DYNAMICS365",i.DBT_PLATFORM="DBT_PLATFORM",i.JIRA="JIRA",i.CONFLUENCE="CONFLUENCE",i.GITHUB="GITHUB",i.HUBSPOT="HUBSPOT",i.ZENDESK="ZENDESK",i.SLACK_AUDIT_LOGS="SLACK_AUDIT_LOGS",i.SLACK_ACCESS_AND_INTEGRATION_LOGS="SLACK_ACCESS_AND_INTEGRATION_LOGS",i.META_MARKETING="META_MARKETING",i.SALESFORCE_MARKETING_CLOUD="SALESFORCE_MARKETING_CLOUD",i.JDBC="JDBC",i.GENERIC_LAKEFLOW_CONNECT="GENERIC_LAKEFLOW_CONNECT",i.SLACK="SLACK",i.KAFKA="KAFKA",i.RABBITMQ="RABBITMQ",i.GOOGLE_ADS="GOOGLE_ADS",i.OUTLOOK="OUTLOOK",i.PALANTIR="PALANTIR",i.BIGLAKE="BIGLAKE",i.GOOGLE_CLOUD_LAKEHOUSE="GOOGLE_CLOUD_LAKEHOUSE",i.TIKTOK_ADS="TIKTOK_ADS",i.CROWDSTRIKE_EVENT_STREAM="CROWDSTRIKE_EVENT_STREAM",i.ONE_PASSWORD_EVENT_LOGS="ONE_PASSWORD_EVENT_LOGS",i.OKTA_SYSTEM_LOGS="OKTA_SYSTEM_LOGS",i.AKAMAI_WAF="AKAMAI_WAF",i.M365_AUDIT_LOGS="M365_AUDIT_LOGS",i.SMARTSHEET="SMARTSHEET",i.AWS_SECRETS_MANAGER="AWS_SECRETS_MANAGER",i.VEEVA_VAULT="VEEVA_VAULT",i),p=((o={}).BUILTIN="BUILTIN",o.EXTERNAL="EXTERNAL",o.GLUE="GLUE",o.NONE="NONE",o),f=((s={}).USES_USERNAME_PASSWORD="USES_USERNAME_PASSWORD",s.USES_OAUTH_GOOGLE_SERVICE_ACCOUNT="USES_OAUTH_GOOGLE_SERVICE_ACCOUNT",s.USES_OAUTH_USER_AUTHORIZATION="USES_OAUTH_USER_AUTHORIZATION",s.USES_OAUTH_ACCESS_TOKEN="USES_OAUTH_ACCESS_TOKEN",s.USES_OAUTH_REFRESH_TOKEN="USES_OAUTH_REFRESH_TOKEN",s.USES_OAUTH_RESOURCE_OWNER_PASSWORD="USES_OAUTH_RESOURCE_OWNER_PASSWORD",s.USES_BEARER_TOKEN="USES_BEARER_TOKEN",s.USES_PEM_PRIVATE_KEY="USES_PEM_PRIVATE_KEY",s.USES_OAUTH_M2M="USES_OAUTH_M2M",s.USES_OAUTH_U2M_SHARED="USES_OAUTH_U2M_SHARED",s.USES_OAUTH_U2M_CUSTOM_APP="USES_OAUTH_U2M_CUSTOM_APP",s.USES_OAUTH_U2M_MAPPING="USES_OAUTH_U2M_MAPPING",s.USES_SERVICE_CREDENTIAL="USES_SERVICE_CREDENTIAL",s.USES_OAUTH_MTLS="USES_OAUTH_MTLS",s.USES_ANY_STATIC_CREDENTIAL="USES_ANY_STATIC_CREDENTIAL",s.USES_SSWS_TOKEN="USES_SSWS_TOKEN",s.USES_DCR="USES_DCR",s),E=((l={}).BEFORE_ACCESS_TOKEN="BEFORE_ACCESS_TOKEN",l.BEFORE_AUTHORIZATION_CODE="BEFORE_AUTHORIZATION_CODE",l);let m={OAUTH_ACCESS_TOKEN:"USES_OAUTH_ACCESS_TOKEN",OAUTH_U2M:"USES_OAUTH_USER_AUTHORIZATION",USERNAME_PASSWORD:"USES_USERNAME_PASSWORD",OAUTH_GOOGLE_SERVICE_ACCOUNT:"USES_OAUTH_GOOGLE_SERVICE_ACCOUNT",OAUTH_REFRESH_TOKEN:"USES_OAUTH_REFRESH_TOKEN",OAUTH_RESOURCE_OWNER_PASSWORD:"USES_OAUTH_RESOURCE_OWNER_PASSWORD",BEARER_TOKEN:"USES_BEARER_TOKEN",PEM_PRIVATE_KEY:"USES_PEM_PRIVATE_KEY",OAUTH_M2M:"USES_OAUTH_M2M",OAUTH_U2M_MAPPING:"USES_OAUTH_U2M_MAPPING",SERVICE_CREDENTIAL:"USES_SERVICE_CREDENTIAL",OAUTH_MTLS:"USES_OAUTH_MTLS",ANY_STATIC_CREDENTIAL:"USES_ANY_STATIC_CREDENTIAL",SSWS_TOKEN:"USES_SSWS_TOKEN",OAUTH_DCR:"USES_DCR"}},583971:(e,t,a)=>{a.d(t,{Ri:()=>d});var r=a(733337),n=a(641760),i=a(278983);function o(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}function s(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function s(e){o(i,r,n,s,l,"next",e)}function l(e){o(i,r,n,s,l,"throw",e)}s(void 0)})}}let l=[1,1,2,3,5,8,13,21],u=l.length;function c(e){return e instanceof n.XD}function d(e,t){return s(function*(e,t,a=1e3){let n=0,o=null;for(;n<u;)try{return yield(0,r.nr)(e,t)}catch(e){if(o=e,c(e)&&function(e){if(!c(e))return!1;return 429===e.response.status}(e))(0,i.y)("clientsideEvent",{eventType:"ApiFetchRetry",eventName:"RetryAttempt",retryCount:n}),yield function(e){return s(function*(e,t=1e3){let a=function(e,t=1e3){let a=Math.min(e,l.length-1);return l[a]*t}(e,t);return new Promise(e=>setTimeout(e,a))}).apply(this,arguments)}(n,a),n++;else break}throw c(o)&&n===u&&(0,i.y)("clientsideEvent",{eventType:"ApiFetchRetry",eventName:"MaxRetryAttemptReached",errorCode:o?.response?.status,retryCount:n}),o}).apply(this,arguments)}},585703:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M5 8a3 3 0 1 0 6 0 3 3 0 0 0-6 0m3-4.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CircleOutlineIcon";let l=s},595615:(e,t,a)=>{a.d(t,{AO:()=>d,Ox:()=>f,RK:()=>m,ic:()=>A,rA:()=>E,uV:()=>p});var r=a(692738),n=a(160603),i=a(441535),o=a(412836),s=a(425373);function l(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}(0,n.setLogger)({log:console.log,warn:console.warn,error:()=>{}});let u={retry:!1,refetchOnWindowFocus:!1,staleTime:3e5},c=new Map;function d(e){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),a={...u,...e,enabled:e?.enabled!==!1&&t},r={...u,...e,enabled:e?.enabled!==!1&&!t};c.set(JSON.stringify(e.queryKey),e.queryKey);let s=(0,o.IT)(a),l=(0,n.useQuery)(r);return t?s:l}function p({queries:e}){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),a=e.map(e=>({...u,...e,enabled:e?.enabled!==!1&&t})),r=e.map(e=>({...u,...e,enabled:e?.enabled!==!1&&!t}));e.forEach(e=>c.set(JSON.stringify(e.queryKey),e.queryKey));let o=(0,s.E)({queries:a}),l=(0,n.useQueries)(r);return t?o:l}function f({queryFn:e}){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),a=(0,n.useQueryClient)(),s=e();return(0,r.useCallback)((e,r={})=>t?o.aH.getActiveValue().fetchQuery({...r,...s(e)},u):a.fetchQuery({...r,...s(e)},u),[s,t,a])}function E(){let[e,t]=(0,r.useState)(0),a=(0,n.useQueryClient)(),s=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1);return{invalidate:(e,r)=>{var n;return(n=function*(){t(e=>e+1);try{if(e)yield s?o.aH.getActiveValue().invalidateQueries(e):a.invalidateQueries(e),c.delete(JSON.stringify(e));else{let e=Array.from(c.values()).filter(e=>{if(!Array.isArray(e))return!1;if(!r)return!0;return e.some(e=>"string"==typeof e&&e.includes(r))}).filter(e=>void 0!==e).map(e=>s?o.aH.getActiveValue().invalidateQueries(e):a.invalidateQueries(e));yield Promise.allSettled(e),c=new Map}}finally{t(e=>e-1)}},function(){var e=this,t=arguments;return new Promise(function(a,r){var i=n.apply(e,t);function o(e){l(i,a,r,o,s,"next",e)}function s(e){l(i,a,r,o,s,"throw",e)}o(void 0)})})()},isLoadingInvalidation:e>0}}function m(e){for(let t of e){let e=t.isIdle??void 0;if(!A({isIdle:e,status:t.status??void 0,fetchStatus:t.fetchStatus??void 0}))return!1}return!0}function A(e){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),a=e.isIdle??!1;if(t)return"fetchStatus"in e&&"loading"===e.status&&"idle"===e.fetchStatus;return a}},598296:(e,t,a)=>{a.d(t,{an:()=>o,cf:()=>s,yh:()=>l});var r,n,i,o=((r={}).METASTORE="METASTORE",r.CATALOG="CATALOG$",r.DATABASE="DATABASE",r.TABLE="TABLE",r.VIEW="VIEW",r.STORAGE_CREDENTIAL="STORAGE_CREDENTIAL",r.EXTERNAL_LOCATION="EXTERNAL_LOCATION",r.FUNCTION="FUNCTION",r.REGISTERED_MODEL="REGISTERED_MODEL",r.VOLUME="VOLUME",r.CONNECTION="CONNECTION",r.EXTERNAL_METADATA="EXTERNAL_METADATA",r),s=((n={}).ALL="ALL",n.USAGE="USAGE",n.SELECT="SELECT",n.CREATE="CREATE",n.MODIFY="MODIFY",n.READ_METADATA="READ_METADATA",n.READ_FILES="READ_FILES",n.WRITE_FILES="WRITE_FILES",n.CREATE_TABLE="CREATE_TABLE",n.CREATE_MOUNT="CREATE_MOUNT",n.USE_CATALOG="USE_CATALOG",n.USE_SCHEMA="USE_SCHEMA",n.CREATE_SCHEMA="CREATE_SCHEMA",n.CREATE_VIEW="CREATE_VIEW",n.CREATE_FUNCTION="CREATE_FUNCTION",n.CREATE_EXTERNAL_TABLE="CREATE_EXTERNAL_TABLE",n.CREATE_MODEL="CREATE_MODEL",n.EXECUTE="EXECUTE",n.ALL_PRIVILEGES="ALL_PRIVILEGES",n),l=((i={}).NOT_OWNER="NOT_OWNER",i.REQUIRES_ANY_PRIVILEGE="REQUIRES_ANY_PRIVILEGE",i.REQUIRES_ANY_NON_BROWSE_PRIVILEGE="REQUIRES_ANY_NON_BROWSE_PRIVILEGE",i.REQUIRES_PRIVILEGES="REQUIRES_PRIVILEGES",i.NOT_UPDATABLE_IN_CURRENT_WORKSPACE="NOT_UPDATABLE_IN_CURRENT_WORKSPACE",i.DOES_NOT_EXIST="DOES_NOT_EXIST",i)},599349:(e,t,a)=>{a.d(t,{M:()=>p});var r=a(610435),n=a(956935),i=a(692738),o=a(5421),s=a(79128),l=a(497895),u=a(369291),c=a(174541),d=a(639712);let p=(0,i.forwardRef)(({children:e,...t},a)=>{let{theme:i}=(0,l.wn)(),{isInsideTypeaheadCombobox:p,componentId:f}=(0,o.T)();if(!p)throw Error("`TypeaheadComboboxAddButton` must be used within `TypeaheadCombobox`");return(0,r.Y)(s.$n,{...t,componentId:`${f}.add_option`,type:"tertiary",onClick:e=>{e.stopPropagation(),t.onClick?.(e)},onMouseUp:e=>{e.stopPropagation(),t.onMouseUp?.(e)},className:"combobox-footer-add-button",css:{...(0,c.RB)(i),...(0,n.AH)((0,d.dg)({width:"100%",padding:0,display:"flex",alignItems:"center",borderRadius:0,"&:focus":{background:i.colors.actionTertiaryBackgroundHover,outline:"none"}}))},icon:(0,r.Y)(u.A,{}),ref:a,children:e})})},604808:(e,t,a)=>{a.d(t,{O:()=>n});var r=a(686560);function n(){let e=(0,r.d)("unityCatalogServiceEnabled",!1),t=(0,r.d)("isMetastoreInstalled_new",!1);return e&&t}},605107:(e,t,a)=>{a.d(t,{X:()=>i});var r=a(610435),n=a(497895);let i=({children:e,...t})=>{let{theme:a}=(0,n.wn)();return(0,r.Y)("div",{...t,css:{display:"flex",flexDirection:"row",alignItems:"flex-start",padding:`${a.spacing.xs}px ${a.spacing.lg/2}px`,alignSelf:"stretch",fontWeight:400,color:a.colors.textSecondary},children:e})}},613319:(e,t,a)=>{a.d(t,{R:()=>o});var r=a(751777),n=a(235257),i=a(441535);function o({itemId:e,invalidateAssetData:t=!1}={}){if(!(0,i.W)("databricks.fe.schemabrowser.newTree",!1))return;if(!e)return void(0,r.Pv)({treeEventIdentifier:n.M.UC_SCHEMA_BROWSER,invalidationEventType:n.Zk.INVALIDATE_ALL});if(t)return void(0,r.Pv)({treeEventIdentifier:n.M.UC_SCHEMA_BROWSER,invalidationEventType:n.Zk.INVALIDATE_ASSET_AND_CHILDREN,itemId:e});(0,r.Pv)({treeEventIdentifier:n.M.UC_SCHEMA_BROWSER,invalidationEventType:n.Zk.INVALIDATE_ASSET_CHILDREN,itemId:e})}},615693:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1 1.75A.75.75 0 0 1 1.75 1h12.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75zm1.5.75v3h11v-3zm0 11V7H5v6.5zm4 0h3V7h-3zM11 7v6.5h2.5V7z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="TableIcon";let l=s},618519:(e,t,a)=>{a.d(t,{Y:()=>O,q:()=>b});var r=a(692738),n=a(927239),i=a(758396),o=a(711489),s=a(657825),l=a(886100),u=a(22191),c=a(747129),d=a(595615),p=a(77240),f=a(710343),E=a(302118),m=a(733337),A=a(660618),g=a(641760),S=a(192464),h=a(862294),_=a(302136);function v(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}function T(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function o(e){v(i,r,n,o,s,"next",e)}function s(e){v(i,r,n,o,s,"throw",e)}o(void 0)})}}let C=[/^Fetch request failed due to expired CSRF token/,/^Fetch request failed due expired user session/];function I(){let e=(0,_.A)(),t="http://go/dduipd/list_catalogs";return(0,r.useCallback)(({withWorkspaceBindings:a,includeBrowse:r})=>({queryKey:[n.xQ,!0===a,!0===r],queryFn:()=>T(function*(){try{let n=yield T(function*(){return e({rpc:o.Uz.UcApiRpcName.LIST_CATALOGS}),E.k.getCatalogs(r,a)})();return l.iT.sev2BurnRate(u.Es.DataExplorer,t,c.i1.P99,c.Ip.Min10,!0),n.catalogs??[]}catch(e){return(0,m.Ur)(e)||e instanceof g.XD&&404===e.response.status&&"FEATURE_DISABLED"===e.response.data.error_code&&e.response.data.message.includes("STANDARD_TIER")||e?.errorType===i.pB.EXPIRED_CSRF_TOKEN||e?.errorType===i.pB.EXPIRED_SESSION||C.some(t=>e?.message?.match(t))||l.iT.sev2BurnRate(u.Es.DataExplorer,t,c.i1.P99,c.Ip.Min10,!1,e),[]}})()}),[e])}function R(){let e=(0,g.ei)()&&(0,g.n_)()&&!(0,s.gK)(),t=(0,h.zx)({enabled:e}),a=(0,d.Ox)({queryFn:I}),i=!!e&&t.data?.settingspolicyserviceGetSettingRestWithoutSettingName?.setting?.value?.boolVal?.value,o=t.isLoading,l=!e||!1===i&&!1===o;return(0,r.useCallback)(({showNonUCCatalogs:e,sampleCatalogEnabled:t,withWorkspaceBindings:r,includeBrowse:i,dataSource:o,isPostgres:u=!1})=>({queryKey:[n.xQ,!0===e,!0===t,!0===r,!0===i,!0===l,u?(0,f.ud)(o):""],queryFn:()=>T(function*(){let n=(0,g.ei)(),c=(0,s.gK)(),d=[];if(u&&o?.type===p.ol.DATABASE_INSTANCE)return(0,S.mr)(o);if(n){let e=yield a({withWorkspaceBindings:r,includeBrowse:i});d.push(...e)}return e&&(!c&&l&&d.push({name:A.UQ}),t&&!d.some(({name:e})=>e===A.lx)&&d.push({name:A.lx})),d.sort((e,t)=>e.name.localeCompare(t.name))})()}),[l,a])}function O(e,t){let a=R();return(0,d.AO)({...a(e),keepPreviousData:!0,...t})}function b(){return(0,d.Ox)({queryFn:R})}},633203:(e,t,a)=>{a.d(t,{Y:()=>T});var r=a(610435),n=a(692738),i=a(430939),o=a(599349),s=a(342411),l=a(737358),u=a(971384),c=a(846007),d=a(212536),p=a(649934),f=a(786504),E=a(160603),m=a(670757),A=a(302118);function g(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}var S=a(733845),h=a(150190),_=a(694205),v=a(850723);function T({value:e,onChange:t,disabled:a,validationState:o,componentId:l="web-shared_external-location-selector",matchTriggerWidth:u,externalLocationQueryOptions:c,externalLocationOptionHintContentField:I,filterFn:R,optionAddon:O,recentlyUsedExternalLocation:b,maxHeight:y}){let N,L,M,w,D,U,P,k=(0,s.tz)(),x=(0,v.O)(),G=(0,_.v)(c),F=(0,n.useMemo)(()=>(function(e,t){if(!t)return e;if(e){let a=e?.findIndex(e=>e.name===t?.name);if(a>=0){let r=[...e];return r.splice(a,1),r.unshift(t),r}}return e})(G.data?.external_locations,b),[G.data?.external_locations,b]),Y=(N=(0,h.H)(),L=(0,S.O)(),M=(0,f.Pu)().authorize(p.E.CreateStorageCredential()),w=function(e,t){let{includeUnbound:a,purpose:r=m._7.STORAGE}=t||{};return(0,E.useQuery)(["list_storage_credentials",a,r],()=>{var e;return(e=function*(){return yield A.k.listCredentials({includeUnbound:a,purpose:r})},function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function o(e){g(i,r,n,o,s,"next",e)}function s(e){g(i,r,n,o,s,"throw",e)}o(void 0)})})()},e)}({enabled:L},{purpose:m._7.STORAGE}),D=M.response?.authorized===!0,U=!!N.data?.is_metastore_admin,P=!!w.data?.credentials?.length,U||D||P);return(0,r.Y)(d._,{id:"external-location-selector",componentId:l,icon:(0,r.Y)(i.A,{}),value:e,onChange:e=>t(F?.find(({name:t})=>t===e)),allItems:F??[],loading:G.isLoading||x.isLoading,disabled:a,validationState:o,placeholder:k.formatMessage({id:"+dNT3n",defaultMessage:"Select external location"}),width:"100%",matchTriggerWidth:u,getItemState:e=>({disableReason:e.url===x.data?.storage_root?k.formatMessage({id:"m2FYsa",defaultMessage:"Metastore default external location cannot be used here"}):void 0}),optionHintContentField:I,getFooter:Y?C:void 0,filterFn:R,optionAddon:O,maxHeight:y})}function C({hideMenuOnClick:e}){let t=(0,s.tz)();return(0,r.Y)(o.M,{componentId:"external-location-selector-v2_create-new-button",onClick:function(){(0,u.Lz)((0,l.AO)((0,c.t4)("/explore/locations/create")),{openInNewTab:!0}),e()},children:t.formatMessage({id:"hYd46j",defaultMessage:"Create new external location"})})}},655841:(e,t,a)=>{a.d(t,{GX:()=>d,HA:()=>i,Ij:()=>c,U8:()=>n,_:()=>o,e:()=>l,fq:()=>p,n$:()=>u,r4:()=>s});var r=a(141078);let n=(0,r.J1)`
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
`,u=(0,r.J1)`
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
`,c=(0,r.J1)`
  mutation GetOrCreateIdpUser($input: AclmanagerIdentityapiGetOrCreateUserRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateUser(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,d=(0,r.J1)`
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
`},659573:(e,t,a)=>{a.d(t,{D:()=>i,v:()=>o});var r,n=a(696514),i=((r={}).DONE="done",r.CANCELLED="cancelled",r);let o=(0,n.fH)("Filebrowser::ShareLink")},662874:(e,t,a)=>{a.d(t,{DK:()=>c,Go:()=>u,WL:()=>s,t2:()=>l});var r=a(610435),n=a(692738),i=a(745444),o=a(962179);let s=n.createContext(()=>void 0);function l({children:e}){let{lakehouseMap:t}=(0,i.j)(),a=(0,n.useCallback)(e=>t[e],[t]);return(0,r.Y)(s.Provider,{value:a,children:e})}function u(e){let t=(0,n.useContext)(s);return(0,n.useMemo)(()=>e.map(e=>{if(!(0,o.PG)(e))return e;let a=t(e.endpoint_id??"");return{...e,lakehouse:a}}),[e,t])}function c(e){let t=(0,n.useContext)(s);return(0,n.useMemo)(()=>{if(e){let a=t(e.endpoint_id??"");return{...e,lakehouse:a}}},[e,t])}},681134:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(141078);let n=(0,r.J1)`
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
`;function i(){return(0,r.n_)(n)}},683003:(e,t,a)=>{a.d(t,{B:()=>s});var r=a(610435),n=a(545251),i=a(497895),o=a(174541);let s=({children:e,...t})=>{let{theme:a}=(0,i.wn)(),{isInsideDialogCombobox:s}=(0,n.w)();if(!s)throw Error("`DialogComboboxFooter` must be used within `DialogCombobox`");return(0,r.Y)("div",{...t,css:(0,o.UA)(a),children:e})}},691069:(e,t,a)=>{a.d(t,{C:()=>u});var r=a(610435);a(692738);var n=a(497895),i=a(465082),o=a(26971),s=a(777517),l=a(342411);let u=({kind:e,disabled:t,style:a})=>{let{theme:u}=(0,n.wn)(),c=(0,l.tz)(),d={alignItems:"center",background:t?void 0:u.colors.backgroundSecondary,borderRadius:30,color:t?u.colors.actionDisabledText:u.colors.textSecondary,display:"flex",fontSize:20,height:30,justifyContent:"center",width:30};switch(e){case"user":return(0,r.Y)(i.A,{title:c.formatMessage({id:"9vv8Gs",defaultMessage:"User"}),css:a||d});case"group":return(0,r.Y)(o.A,{title:c.formatMessage({id:"Qzw3C/",defaultMessage:"Group"}),css:a||d});case"serviceprincipal":return(0,r.Y)(s.A,{title:c.formatMessage({id:"QrVB43",defaultMessage:"Service Principal"}),css:a||d});default:return null}}},694205:(e,t,a)=>{a.d(t,{v:()=>o});var r=a(160603),n=a(302118);function i(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}function o(e,t){return(0,r.useQuery)(["list_external_locations",t],()=>{var e;return(e=function*(){return yield n.k.getExternalLocations(t)},function(){var t=this,a=arguments;return new Promise(function(r,n){var o=e.apply(t,a);function s(e){i(o,r,n,s,l,"next",e)}function l(e){i(o,r,n,s,l,"throw",e)}s(void 0)})})()},e)}},703140:(e,t,a)=>{a.d(t,{C:()=>o});var r=a(759901),n=a.n(r);a(649917);var i=a(834405);class o{static getTimeZone(){return n().tz.guess()}static formatTimeZone(e){let t=n().tz.zone(o.getTimeZone());if(t){let a=e instanceof Date?e.getTime():Date.now();return t.abbr(a)||""}return""}static formatDate(e,t={omitSeconds:!1}){let a=t.omitSeconds?"YYYY-MM-DD HH:mm":"YYYY-MM-DD HH:mm:ss";return n()(e).format(a)}static formatDurationAgo(e){return n()(e).fromNow()}static formatTimestamp(e,t,a){if(!e)return"";if(t)return(0,i.r6)(e,t,a);let r=new Date(e);return o.formatDate(r)+" "+o.formatTimeZone(r)}static formatTimestampNicely(e,t,a){if(!e)return"";if(t)return(0,i.r6)(e,t,a);let r=new Date(e);return n().tz(r,o.getTimeZone()).format("MMM D YYYY, HH:mm A")+" "+o.formatTimeZone(r)}static formatTimestampShort(e,t){if(!e)return"";if(t)return t.formatDate(e,{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"});let a=new Date(e);return n().tz(a,o.getTimeZone()).format("MMM DD, HH:mm")}static formatDateFromTimestamp(e,t){if(!e)return"";if(t)return t.formatDate(e,{month:"short",day:"2-digit"});let a=new Date(e);return n().tz(a,o.getTimeZone()).format("MMM DD")}static formatDuration(e,t){return(e<0?"-":"")+n().duration(e,"seconds").format(t||"h[h] m[m] s[s]")}static factorMs(e){if(e%36e5==0)return{time:e/36e5,unit:36e5,label:"hour"};if(e%6e4==0)return{time:e/6e4,unit:6e4,label:"min"};if(e%1e3==0)return{time:e/1e3,unit:1e3,label:"sec"};return{time:e,unit:1,label:"ms"}}}},708396:(e,t,a)=>{a.d(t,{R:()=>s});var r=a(441535),n=a(141078),i=a(641760);let o=(0,n.J1)`
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
`;function s({type:e,fullName:t,skip:a=!1}){let l=(0,r.W)("databricks.fe.rfa.skipNonUcSecurables",!1),u=t.split(".")[0],c=l&&!(0,i.jN)({catalog:u}),{data:d,loading:p,error:f}=(0,n.IT)(o,{variables:{fullName:t,type:e},skip:!e||a||c});return{isLoading:p,isEnabled:!c&&d?.requestforaccessGetStatus?.isEnabled,error:f}}},722651:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8.646.368a.75.75 0 0 0-1.292 0l-3.25 5.5A.75.75 0 0 0 4.75 7h6.5a.75.75 0 0 0 .646-1.132zM8 2.224 9.936 5.5H6.064zM8.5 9.25a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1-.75-.75zM10 10v3.5h3.5V10zM1 11.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M4.25 10a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="DataIcon";let l=s},731547:(e,t,a)=>{a.d(t,{a:()=>d});var r=a(610435),n=a(692738),i=a(497895),o=a(382908),s=a(342411),l=a(283009),u=a(180864);function c({className:e,children:t,onClick:a,copyTooltip:n,copyText:o}){let{theme:l}=(0,i.wn)(),u=(0,s.tz)(),d=l.colors.actionDefaultBackgroundHover,p=n??u.formatMessage({id:"vgZBTO",defaultMessage:"Copy {copyText} to clipboard"},{copyText:o});return(0,r.Y)("span",{onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),a())},role:"button",tabIndex:0,"aria-label":p,className:e,css:{display:"inline-block",cursor:"pointer",padding:`${l.spacing.xs}px ${l.spacing.sm}px`,margin:`0 -${l.spacing.sm}px`,borderRadius:l.borders.borderRadiusSm,transition:"background-color 200ms ease",userSelect:"none","&:hover, &:focus-visible":{backgroundColor:d},"&:hover .copyable-icon, &:focus-visible .copyable-icon":{opacity:1}},onClick:a,children:t})}function d({children:e,className:t,clickToCopy:a=!1,componentId:s,copyPlacement:p="center",copyText:f,copyTooltip:E,onCopy:m,stretch:A=!1}){let{theme:g}=(0,i.wn)(),S=f??e,{actionIcon:h,copy:_}=(0,u.L)(S,E,m),v=n.useCallback(e=>({display:e?"inline":void 0,wordBreak:"break-word",overflowWrap:"anywhere"}),[]),T=n.useCallback(e=>()=>{let t=e?g.spacing.sm:g.spacing.md,a=e?0:g.spacing.sm;return{display:e?"inline-flex":"flex",alignItems:"center",alignSelf:e||"top"!==p?void 0:"flex-start",margin:`${a}px ${a}px ${a}px ${t}px`,transition:"opacity 200ms ease",color:g.colors.textSecondary,flexShrink:0,verticalAlign:e?"middle":void 0,opacity:0}},[p,g]);if(a){let a="inline"===p,n=T(a);return(0,r.Y)(c,{className:t,onClick:_,copyTooltip:E,copyText:S,children:a?(0,r.FD)("div",{children:[(0,r.Y)(o.o.Text,{css:v(!0),children:e}),(0,r.Y)("span",{className:"copyable-icon","data-testid":"copyable-icon",css:n,children:h})]}):(0,r.FD)("span",{css:{display:"flex",alignItems:"top"===p?"flex-start":"center",flexWrap:"nowrap",width:A?"100%":"auto",maxWidth:"100%"},children:[(0,r.Y)("span",{css:{display:"flex",alignItems:"center",minWidth:0,flex:"1 1 auto"},children:(0,r.Y)(o.o.Text,{css:v(!1),children:e})}),(0,r.Y)("span",{className:"copyable-icon","data-testid":"copyable-icon",css:n,children:h})]})})}return(0,r.FD)("span",{css:{display:"flex",alignItems:"stretch"},children:[(0,r.Y)("span",{css:{display:"flex",alignItems:"center",width:A?"100%":void 0,overflow:"hidden"},children:(0,r.Y)(o.o.Text,{css:{width:A?"100%":void 0,maxWidth:"100%"},children:e})}),(0,r.Y)("span",{css:{display:"flex",alignItems:"center"===p?"center":"start",marginLeft:g.spacing.sm},children:(0,r.Y)(l.a,{componentId:s,copyText:S,copyTooltip:E,onCopy:m})})]})}},733052:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(610435);a(692738);var n=a(802582);function i({primary:e=!1,srSilent:t=!1,children:a,placement:o,title:s,dataTestId:l,arrowPointAtCenter:u,...c}){return(0,r.Y)(n.p,{silenceScreenReader:t,useAsLabel:e,placement:o,title:s,dataTestId:l,arrowPointAtCenter:u,...c,children:a})}},733337:(e,t,a)=>{a.d(t,{Ky:()=>c,Ur:()=>d,nr:()=>u});var r=a(583971),n=a(641760),i=a(441535),o=a(19123);function s(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}function l(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function o(e){s(i,r,n,o,l,"next",e)}function l(e){s(i,r,n,o,l,"throw",e)}o(void 0)})}}function u(e,t){return l(function*(){let a=yield(0,o.h)(e,t);if(!a.ok){let t;try{t=yield a.json()}catch(e){}throw new n.XD(e,a,t)}return yield a.json()})()}function c(e,t,a,n,o){return l(function*(){let s,l={response:[],next_page_token:void 0},u=(0,i.W)("databricks.fe.uc.defaultPaginationWindowSize",0),c=void 0!==n?n:u;do{let n=a?.useCentralPagination?{"pagination_context.max_results":c,...a?.queryParameters}:{[o??"max_results"]:c,...a?.queryParameters};s&&(a?.useCentralPagination?n["pagination_context.page_token"]=s:n.page_token=s);let i=new URLSearchParams(n),u=`${e}?${i}`;try{let e=yield(0,r.Ri)(u,a);if(!e)break;let n=yield t(e);n&&l.response.push(...n),a?.useCentralPagination?(l.next_page_token=e.pagination?.next_page_token,s=e.pagination?.next_page_token):(l.next_page_token=e.next_page_token,s=e.next_page_token)}catch(e){throw e}}while(s);return l.response})()}function d(e){return e instanceof n.XD&&404===e.response.status&&"METASTORE_DOES_NOT_EXIST"===e.response.data.error_code}},733845:(e,t,a)=>{a.d(t,{O:()=>o});var r=a(686560),n=a(689262),i=a(441535);function o(){let e=(0,n.b)("unityCatalogServiceEnabled",(0,r.d)("unityCatalogServiceEnabled",!1),()=>(0,i.W)("databricks.unitycatalog.enableUnityCatalogService",!1)),t=(0,r.d)("isMetastoreInstalled_new",!1);return e&&t}},745444:(e,t,a)=>{a.d(t,{j:()=>c});var r=a(298280),n=a.n(r),i=a(692738),o=a(919505),s=a(290766),l=a(572382),u=a(441535);function c({enableLiveUpdates:e=!0,fetchPolicy:t="cache-and-network",useMinimalQuery:a=!1,isEnabled:r=!0}={}){let d=(0,u.W)("databricks.fe.redash.listPollingInterval",5e3),[p,f]=(0,i.useState)(()=>(0,u.W)("databricks.fe.redash.enableWarehouseEventSubscription",!1)),E=e&&p&&!a,{data:m,loading:A,refetch:g}=(0,s.T)({pollInterval:e&&!E?d:0,fetchPolicy:t,nextFetchPolicy:E?"cache-first":void 0,skip:!r},a);return(0,o.A)({skip:!E||!r,refetchLakehouseStates:g,setEnableSubscription:f}),{loaded:!A,lakehouseMap:(0,i.useMemo)(()=>n()((0,l.kc)(m?.lakehouses),e=>e?.id),[m?.lakehouses])}}},751097:(e,t,a)=>{a.d(t,{P:()=>i,x:()=>o});var r,n=a(696514),i=((r={}).DONE="done",r.CANCELLED="cancelled",r);let o=(0,n.fH)("Filebrowser::SelectLocation")},752634:(e,t,a)=>{a.d(t,{f:()=>s});var r=a(610435),n=a(673655),i=a(429608);let o=8,s=({gutter:e=o,...t})=>(0,r.Y)(i.wC,{children:(0,r.Y)(n.A,{gutter:e,...t})})},759838:(e,t,a)=>{a.d(t,{Hi:()=>i,QX:()=>o,xT:()=>s});var r=a(250912),n=a.n(r);function i(e,t="/sql"){var a;if(/^(https?:\/\/|blob:|mailto:)/.test(e))return e;return(a=function(...e){return e.map(e=>n()(e,"/")).join("/")}(t,e)).startsWith("/")?a:`/${a}`}let o=/^(?!.*(\.| |\/)).*/;function s(e,t){if(!e)return"";let a=e.endsWith("/");return e+(t?a?t:`/${t}`:"")}},768622:(e,t,a)=>{a.d(t,{Jq:()=>h,bb:()=>v});var r=a(610435),n=a(956935),i=a(802558),o=a.n(i),s=a(91958),l=a.n(s),u=a(692738),c=a(497895),d=a(194901),p=a(161330),f=a(174541),E=a(574132),m=a(639712);let A={paddingTop:2},g={width:16,flexShrink:0},S={display:"flex"},h=l()((e,t,a)=>(0,n.AH)({...a&&{pointerEvents:"none",color:e.colors.actionDisabledText},...t&&{background:e.colors.actionTertiaryBackgroundHover}}),(e,t,a)=>`${(0,m.H6)(e)}|${t}|${!!a}`),_=l()((e,t)=>(0,n.AH)({marginLeft:e.spacing.sm,fontSize:e.typography.fontSizeBase,fontStyle:"normal",fontWeight:400,cursor:"pointer",overflow:"hidden",wordBreak:"break-word",..."ellipsis"===t&&{textOverflow:"ellipsis",whiteSpace:"nowrap"}}),(e,t)=>`${(0,m.H6)(e)}|${t}`),v=(0,u.forwardRef)(({item:e,index:t,comboboxState:a,textOverflowMode:n="multiline",isDisabled:i,disabledReason:s,hintContent:l,onClick:m,children:v,...T},C)=>{let{selectedItem:I,highlightedIndex:R,getItemProps:O,isOpen:b}=a,y=o()(I,e),N=R===t,{theme:L}=(0,c.wn)(),M=(0,u.useRef)(null);(0,u.useImperativeHandle)(C,()=>M.current);let{onClick:w,...D}=O({item:e,index:t,disabled:i,onMouseUp:e=>{e.stopPropagation(),T.onMouseUp?.(e)},ref:M});return(0,u.useEffect)(()=>{if(b&&R===t&&M.current){let e=M.current.closest("ul");if(!e)return;let t=e.scrollTop,a=e.scrollTop+e.clientHeight,r=M.current.offsetTop,n=M.current.offsetTop+M.current.clientHeight;(r<t||n>a)&&M.current?.scrollIntoView({block:"nearest"})}},[R,t,b,M]),(0,r.FD)("li",{role:"option","aria-selected":y,"aria-disabled":i,onClick:e=>{m?.(e),w?.(e)},css:[(0,f.RB)(L),h(L,N,i)],...D,...T,children:[y?(0,r.Y)(d.A,{css:A}):(0,r.Y)("div",{style:g}),(0,r.FD)("label",{css:_(L,n),children:[i&&s?(0,r.FD)("div",{css:S,children:[(0,r.Y)("div",{children:v}),(0,r.Y)("div",{css:(0,f.eO)(L),children:(0,r.Y)(p.I,{componentId:"typeahead-combobox-menu-item-disabled-reason-info-tooltip",side:"right",content:s})})]}):v,(0,r.Y)(E.y,{disabled:i,children:l})]})]})});v.defaultProps={_type:"TypeaheadComboboxMenuItem"}},775041:(e,t,a)=>{a.d(t,{Jq:()=>A,OI:()=>O,wW:()=>g});var r=a(692738),n=a(342411),i=a(302409),o=a(77240),s=a(581716);let l="18.0",u=["13.3","14.3"],c="16.1",d="16.1",p="16.3.1",f="18.0",E="18.2",m="18.2";function A(e){return e?.match(/(?:\d+\.)+x(?=-)/)?.[0]||""}function g(e,t){return e.localeCompare(t,void 0,{numeric:!0})>=0}function S(e){return e?.includes("FABRIC")}function h(e){return e?.includes("HIVE_METASTORE")}function _(e,t){return e?.includes("ORACLE")||t===s.pu.ORACLE}function v(e,t){return e?.includes("TERADATA")||t===s.pu.TERADATA}function T(e,t){return e?.includes("SFTP")||t===s.pu.SFTP}function C(e,t){return e?.includes("PALANTIR")||t===s.pu.PALANTIR}function I(e,t){return e?.includes("BIGLAKE")||t===s.pu.BIGLAKE}function R(e,t){return e?.includes("GOOGLE_CLOUD_LAKEHOUSE")||t===s.pu.GOOGLE_CLOUD_LAKEHOUSE}function O(){let e=(0,n.tz)(),t=(0,r.useCallback)(({computeResource:e,requiredVersion:t,securableKind:a,connectionType:r})=>{if(function(e){let{clusterId:t,preferInteractiveServerless:a}=e;if(a)return!0;return!!t&&null!==t.toLowerCase().match(/[0-9a-fA-F]{16}/)}(e))return!0;if(e.type===o.ol.CLUSTER){let{sparkVersion:n,accessMode:o}=e;if(!(0,i.QC)({access_mode:o??void 0},!0))return!1;let s=A(n);if(S(a))return g(s,l);if(h(a))return u.some(e=>s.startsWith(e))||g(s,"15.0");if(_(a,r))return g(s,c);else if(v(a,r))return g(s,d);else if(T(a,r))return g(s,p);else if(C(a,r))return g(s,f);else if(I(a,r))return g(s,E);else if(R(a,r))return g(s,m);return g(s,t??"13.1")}if(e.type===o.ol.REDASH_SQL_WAREHOUSE)return"PRO"===e.warehouseType;return!1},[]),a=(0,r.useCallback)(e=>{if(e.type===o.ol.REDASH_SQL_WAREHOUSE)return"PRO"===e.warehouseType&&!0===e.enableDatabricksCompute;return!1},[]),s=(0,r.useCallback)(({isBrickstoreOnlineView:e,dataSource:t})=>e&&t?.status.isReady&&!a(t),[a]),O=(0,r.useCallback)(({isForeignData:e,securableKind:a,dataSource:r})=>e&&r?.status.isReady&&!t({computeResource:r,securableKind:a}),[t]),b=e.formatMessage({id:"FOz8nd",defaultMessage:"Data may be out of date"}),y=e.formatMessage({id:"8rFek8",defaultMessage:"Please use cluster with DBR version 13.1 and above or Pro/Serverless warehouse to refresh the data"}),N=e.formatMessage({id:"Ole8Yw",defaultMessage:"Please use cluster with DBR version 13.3, 14.3, or 15.0 and above or Pro/Serverless warehouse to refresh the data"}),L=(0,r.useCallback)(t=>e.formatMessage({id:"Q5K+Zr",defaultMessage:"Please use cluster with DBR version {minVersion} and above or Pro/Serverless warehouse to refresh the data"},{minVersion:t}),[e]),M=e.formatMessage({id:"PNwB4O",defaultMessage:"Foreign data requires compute. Please use cluster with DBR version 13.1 and above or Pro/Serverless warehouse"}),w=e.formatMessage({id:"GphsgR",defaultMessage:"Please use cluster with DBR version 13.1 and above or Pro/Serverless warehouse"}),D=e.formatMessage({id:"2JadI/",defaultMessage:"Please use cluster with DBR version 13.3, 14.3, or 15.0 and above or Pro/Serverless warehouse"}),U=e.formatMessage({id:"u6wa/l",defaultMessage:"Foreign data requires compute. Please use cluster with DBR version 13.3, 14.3, or 15.0 and above or Pro/Serverless warehouse"}),P=(0,r.useCallback)(t=>e.formatMessage({id:"zVN9+v",defaultMessage:"Foreign data requires compute. Please use cluster with DBR version {minVersion} and above or Pro/Serverless warehouse"},{minVersion:t}),[e]),k=(0,r.useCallback)((e,t)=>{if(S(e))return P(l);if(h(e))return U;if(_(e,t))return P(c);if(v(e,t))return P(d);if(T(e,t))return P(p);else if(C(e,t))return P(f);else if(I(e,t))return P(E);else if(R(e,t))return P(m);return M},[P,M,U]);return{isComputeMeetQueryFedRequirements:t,showUnqualifiedComputeWarning:O,showOnlineViewUnqualifiedComputeWarning:s,ucCacheNonEmptyWarning:b,getUcCacheNonEmptyWarningDescription:(0,r.useCallback)(e=>{if(S(e))return"";if(h(e))return N;if(_(e))return L(c);if(v(e))return L(d);if(T(e))return L(p);else if(C(e))return L(f);else if(I(e))return L(E);else if(R(e))return L(m);return y},[L,y,N]),unqualifiedMessage:w,unqualifiedMessageForHMS:D,getUnqualifiedComputeWarning:k}}},777517:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 0a.75.75 0 0 1 .75.75V3h5.5a.75.75 0 0 1 .75.75V6h.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75H15v2.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V12H.75a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 .75 6H1V3.75A.75.75 0 0 1 1.75 3h5.5V.75A.75.75 0 0 1 8 0M2.5 4.5v9h11v-9zM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6.25 2.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="RobotIcon";let l=s},786504:(e,t,a)=>{a.d(t,{Pu:()=>l,gc:()=>o,se:()=>s});var r=a(610435),n=a(692738);class i{data;constructor(e){this.data=e}authorize(e){if(this.data.isLoading)return{isLoading:!0,response:void 0};if(this.data.error)return{isLoading:!1,response:{authorized:!1},error:this.data.error};if("string"==typeof e)return{isLoading:!1,response:this.data.data?.actions[e]};if("evaluate"in e)return e.evaluate(this);return{isLoading:!1,response:this.data.data?.actions[JSON.stringify(e)]}}}let o=(0,n.createContext)({authorize:e=>({isLoading:!0,response:void 0})});function s({children:e,response:t}){return(0,r.Y)(o.Provider,{value:new i(t),children:e})}function l(){return(0,n.useContext)(o)}},787395:(e,t,a)=>{a.d(t,{C:()=>s});var r=a(623124),n=a(200356),i=a(962179);let o=(e,t)=>!!(e.endpoint_id&&t[e.endpoint_id].enableDatabricksCompute),s=(e,t)=>e.find(e=>o(e,t)&&(0,r.jB)(e,t))??e.find(e=>(0,r.jB)(e,t))??e.find(e=>o(e,t))??e.find(e=>(function(e,t){if((0,i.PG)(e))return e.endpoint_id&&t[e.endpoint_id]?.state===n.tXm.STARTING;if((0,i.y0)(e))return e.cluster.state&&[n.Ol$.PENDING,n.Ol$.RESTARTING].includes(e.cluster.state);return!0})(e,t))??e?.[0]},787473:(e,t,a)=>{a.d(t,{o:()=>l});var r=a(610435);a(692738);var n=a(497895),i=a(382908),o=a(126927),s=a(342411);function l({href:e,style:t,componentId:a}){let u=(0,s.tz)(),{theme:c}=(0,n.wn)();return(0,r.FD)(i.o.Link,{style:{paddingLeft:c.spacing.xs,fontWeight:c.typography.typographyRegularFontWeight,...t},href:e,target:"_blank",componentId:a??"codegen_web-shared_src_metastore_components_learnmorelink.tsx_22",children:[u.formatMessage({id:"ag6OMp",defaultMessage:"Learn more"}),(0,r.Y)(o.A,{style:{marginLeft:c.spacing.xs,verticalAlign:"text-top"}})]})}},797246:(e,t,a)=>{a.d(t,{DN:()=>u,Ix:()=>c,Jk:()=>d,OF:()=>s,nX:()=>p,nw:()=>l});var r=a(342411),n=a(641760),i=a(29824),o=a(150924);let s=(0,n.zt)()?(0,r.zR)({id:"oUyUvJ",defaultMessage:"You are only permitted to see metadata for this asset. Request additional permissions from the object's page"}):(0,r.zR)({id:"m+UfjI",defaultMessage:"You are only permitted to see metadata for this asset. Please contact the owner for additional permission"}),l=(0,r.zR)({id:"H1i5CS",defaultMessage:"Online store catalog"}),u={[i.an.CATALOG]:(0,r.zR)({id:"gST/Fz",defaultMessage:"catalog"}),[i.an.DATABASE]:(0,r.zR)({id:"Q2CEcK",defaultMessage:"schema"}),[i.an.TABLE]:(0,r.zR)({id:"MnQokr",defaultMessage:"table"}),[i.an.VIEW]:(0,r.zR)({id:"1/D8JH",defaultMessage:"view"}),[i.an.MATERIALIZED_VIEW]:(0,r.zR)({id:"F9towg",defaultMessage:"materialized view"}),[i.an.STREAMING_TABLE]:(0,r.zR)({id:"c71VXl",defaultMessage:"streaming table"}),[i.an.VOLUME]:(0,r.zR)({id:"upmcHZ",defaultMessage:"volume"}),[i.an.FUNCTION]:(0,r.zR)({id:"aP8Sqb",defaultMessage:"function"}),[i.an.FUNCTION_FEATURE_SPEC]:(0,r.zR)({id:"7qdK7+",defaultMessage:"function feature spec"}),[i.an.REGISTERED_MODEL]:(0,r.zR)({id:"3Y7acL",defaultMessage:"model"}),[i.an.REGISTERED_MODEL_VERSION]:(0,r.zR)({id:"vo02Jv",defaultMessage:"model version"}),[i.an.STORAGE_CREDENTIAL]:(0,r.zR)({id:"XkdeUT",defaultMessage:"storage credential"}),[i.an.CREDENTIAL]:(0,r.zR)({id:"XXi9AE",defaultMessage:"credential"}),[i.an.EXTERNAL_LOCATION]:(0,r.zR)({id:"gpTkYX",defaultMessage:"external location"}),[i.an.INBOUND_SHARED_NOTEBOOK_FILE]:(0,r.zR)({id:"2QTgI/",defaultMessage:"shared notebook file"}),[i.an.CONNECTION]:(0,r.zR)({id:"L+HZOe",defaultMessage:"connection"}),[i.an.SHARE]:(0,r.zR)({id:"HQxjso",defaultMessage:"share"}),[i.an.RECIPIENT]:(0,r.zR)({id:"M7UQAS",defaultMessage:"recipient"}),[i.an.PROVIDER]:(0,r.zR)({id:"PvVChz",defaultMessage:"provider"}),[i.an.METASTORE]:(0,r.zR)({id:"2irW3W",defaultMessage:"metastore"}),[i.an.COLUMN]:(0,r.zR)({id:"fwB/LS",defaultMessage:"column"}),[i.an.VOLUME_FILE]:(0,r.zR)({id:"5Cy++b",defaultMessage:"volume file"}),[i.an.VOLUME_FOLDER]:(0,r.zR)({id:"dOa8bp",defaultMessage:"volume folder"}),[i.an.CLEAN_ROOM]:(0,r.zR)({id:"OZVVYP",defaultMessage:"clean room"}),[i.an.VECTOR_INDEX]:(0,r.zR)({id:"w5dYYn",defaultMessage:"vector search index"}),[i.an.ONLINE_VIEW]:(0,r.zR)({id:"mbZFpH",defaultMessage:"online table"}),[i.an.METRIC_VIEW]:(0,r.zR)({id:"q71GSt",defaultMessage:"metric view"}),[i.an.EXTERNAL_METADATA]:(0,r.zR)({id:"gqNYH3",defaultMessage:"external metadata"}),[i.an.SECRET]:(0,r.zR)({id:"Y8FCE6",defaultMessage:"secret"})},c=(0,r.YK)({[i.an.CATALOG]:{id:"9Q4FT5",defaultMessage:"Catalog"},[i.an.DATABASE]:{id:"FWxl06",defaultMessage:"Schema"},[i.an.TABLE]:{id:"6soA0k",defaultMessage:"Table"},[i.an.VIEW]:{id:"Rw416Q",defaultMessage:"View"},[i.an.MATERIALIZED_VIEW]:{id:"WUAUbP",defaultMessage:"Materialized view"},[i.an.STREAMING_TABLE]:{id:"Zi/bxb",defaultMessage:"Streaming table"},[i.an.VOLUME]:{id:"1dS20z",defaultMessage:"Volume"},[i.an.FUNCTION]:{id:"VI+Sr3",defaultMessage:"Function"},[i.an.FUNCTION_FEATURE_SPEC]:{id:"sqDlGe",defaultMessage:"Function feature spec"},[i.an.REGISTERED_MODEL]:{id:"I01Ad4",defaultMessage:"Model"},[i.an.REGISTERED_MODEL_VERSION]:{id:"LRV0mb",defaultMessage:"Model version"},[i.an.STORAGE_CREDENTIAL]:{id:"bDEJaI",defaultMessage:"Storage credential"},[i.an.CREDENTIAL]:{id:"8m1U4P",defaultMessage:"Credential"},[i.an.EXTERNAL_LOCATION]:{id:"u7bRXy",defaultMessage:"External location"},[i.an.INBOUND_SHARED_NOTEBOOK_FILE]:{id:"pK4mvH",defaultMessage:"Shared notebook file"},[i.an.CONNECTION]:{id:"rR5RDl",defaultMessage:"Connection"},[i.an.SHARE]:{id:"bH4BVe",defaultMessage:"Share"},[i.an.RECIPIENT]:{id:"NfAkZZ",defaultMessage:"Recipient"},[i.an.PROVIDER]:{id:"5G2SGs",defaultMessage:"Provider"},[i.an.METASTORE]:{id:"lTi56H",defaultMessage:"Metastore"},[i.an.COLUMN]:{id:"ZUOQQ7",defaultMessage:"Column"},[i.an.VOLUME_FILE]:{id:"X/RWP6",defaultMessage:"Volume file"},[i.an.VOLUME_FOLDER]:{id:"B0vUyp",defaultMessage:"Volume folder"},[i.an.CLEAN_ROOM]:{id:"nEeSuH",defaultMessage:"Clean Room"},[i.an.VECTOR_INDEX]:{id:"d57N3p",defaultMessage:"Vector search index"},[i.an.ONLINE_VIEW]:{id:"p2r9Bh",defaultMessage:"Synced table"},[i.an.METRIC_VIEW]:{id:"tjJpp8",defaultMessage:"Metric view"},[i.an.EXTERNAL_METADATA]:{id:"RySBlN",defaultMessage:"External metadata"},[i.an.SECRET]:{id:"QLRlWq",defaultMessage:"Secret"}}),d={[i.an.FUNCTION]:(0,r.YK)({[o.x.FUNCTION_PROCEDURE]:{id:"3ramAO",defaultMessage:"Procedure"},[o.x.FUNCTION]:{id:"qCivWh",defaultMessage:"Function"},[o.x.FUNCTION_FEATURE_SPEC]:{id:"NMoL5P",defaultMessage:"Function feature spec"}})},p=(0,r.YK)({[i.an.CATALOG]:{id:"MFr8uI",defaultMessage:"Database"},[i.an.DATABASE]:{id:"8dUzvc",defaultMessage:"Schema"},[i.an.TABLE]:{id:"bqMEiN",defaultMessage:"Table"},[i.an.VIEW]:{id:"bAdJFD",defaultMessage:"View"},[i.an.FUNCTION]:{id:"OMHm4k",defaultMessage:"Function"},[i.an.COLUMN]:{id:"sFXezj",defaultMessage:"Column"}})},800205:(e,t,a)=>{a.d(t,{h:()=>u});var r=a(441535),n=a(733337),i=a(660618),o=a(595615),s=a(302118);function l(e,t,a){return(0,o.AO)({queryKey:["data_explorer_samples_schema",t],queryFn:()=>(0,n.nr)(`${i.bY}/schemas/${encodeURIComponent(e)}.${encodeURIComponent(t)}?include_browse=true`),...a})}function u(e){var t;let a=(0,r.W)("databricks.fe.marketplace.enableNewUCBasedSamplesUI",!1),n=(t={enabled:e===i.lx&&a,keepPreviousData:!0},(0,o.AO)({queryKey:["data_explorer_samples_catalog_details"],queryFn:function(){return s.k.getCatalogDetails(i.lx)},...t})),u=l(e,"nyctaxi",{enabled:e===i.lx&&a,keepPreviousData:!0}),c=l(e,"tpch",{enabled:e===i.lx&&a,keepPreviousData:!0});return e===i.lx&&n.isSuccess&&u.isSuccess&&c.isSuccess&&a}},802582:(e,t,a)=>{a.d(t,{p:()=>h});var r=a(610435),n=a(956935),i=a(889486),o=a(778529),s=a.n(o),l=a(91958),u=a.n(l),c=a(692738),d=a(429608),p=a(497895),f=a(639712),E=a(863802);let m=["hover","focus"],A=u()(e=>({backgroundColor:"#2F3941",lineHeight:"22px",padding:"4px 8px",boxShadow:e.general.shadowLow,...(0,f.WO)(e)})),g=u()(e=>({zIndex:e.options.zIndexBase+70}),e=>String(e.options.zIndexBase)),S=u()(e=>(0,n.AH)({...(0,d.Cx)(e)})),h=({children:e,title:t,placement:a="top",dataTestId:n,dangerouslySetAntdProps:o,silenceScreenReader:l=!1,useAsLabel:u=!1,...h})=>{let{theme:_}=(0,p.wn)(),v=(0,c.useRef)(null),T=(0,E.Y)("dubois-tooltip-component-"),C=o?.id?o?.id:T;if(!t)return(0,r.Y)(c.Fragment,{children:e});let I=l?{}:{"aria-live":"polite","aria-relevant":"additions"};n&&(I["data-testid"]=n);let R=t&&c.isValidElement(t)?c.cloneElement(t,I):(0,r.Y)("span",{...I,children:t}),O={"aria-hidden":!1},b=e=>{if(!v.current||e.currentTarget.hasAttribute("aria-describedby")||e.currentTarget.hasAttribute("aria-labelledby"))return;C&&(e.currentTarget.setAttribute("aria-live","polite"),u?e.currentTarget.setAttribute("aria-labelledby",C):e.currentTarget.setAttribute("aria-describedby",C))},y=e=>{if(!v||!e.currentTarget.hasAttribute("aria-describedby")&&!e.currentTarget.hasAttribute("aria-labelledby"))return;u?e.currentTarget.removeAttribute("aria-labelledby"):e.currentTarget.removeAttribute("aria-describedby"),e.currentTarget.removeAttribute("aria-live")},N={onMouseEnter:e=>{b(e)},onMouseLeave:e=>{y(e)},onFocus:e=>{b(e)},onBlur:e=>{y(e)}},L=c.isValidElement(e)?c.cloneElement(e,{...O,...N,...e.props}):s()(e)?e:(0,r.Y)("span",{...O,...N,children:e}),{overlayInnerStyle:M,overlayStyle:w,...D}=o||{},U=M?{backgroundColor:"#2F3941",lineHeight:"22px",padding:"4px 8px",boxShadow:_.general.shadowLow,...M,...(0,f.WO)(_)}:A(_),P=w?{zIndex:_.options.zIndexBase+70,...w}:g(_);return(0,r.Y)(d.wC,{children:(0,r.Y)(i.A,{id:C,ref:v,title:R,placement:a,trigger:m,overlayInnerStyle:U,overlayStyle:P,css:S(_.options.enableAnimation),...D,...h,children:L})})}},804723:(e,t,a)=>{a.d(t,{S:()=>l});var r=a(610435),n=a(5421),i=a(497895),o=a(174541);let s=({children:e,...t})=>{let{theme:a}=(0,i.wn)(),{isInsideTypeaheadCombobox:s}=(0,n.T)();if(!s)throw Error("`TypeaheadComboboxFooter` must be used within `TypeaheadComboboxMenu`");return(0,r.Y)("div",{...t,css:(0,o.UA)(a),children:e})};s.defaultProps={_type:"TypeaheadComboboxFooter"};let l=s},811133:(e,t,a)=>{a.d(t,{Cw:()=>p,IV:()=>d});var r=a(452137),n=a.n(r),i=a(29824),o=a(641760),s=a(302118),l=a(412836);function u(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}function c(){return({objectType:e,metastore:t,catalog:a,database:r,table:l,credential:c,location:d,connection:p,permissionChanges:f,updateType:E,cleanRoom:m,externalMetadata:A})=>{var g;return(g=function*(){n()((0,o.jN)({catalog:a,objectType:e}),`Object type ${e} is not a valid Unity Catalog securable type`);let u={changes:f.map(e=>{if("add"===E)return{principal:e.Principal,remove:[],add:e.ActionTypes};return{principal:e.Principal,remove:e.ActionTypes,add:[]}})},g="";switch(e){case i.an.STORAGE_CREDENTIAL:case i.an.CREDENTIAL:n()(void 0!==c,"Credential must be set"),g=c;break;case i.an.EXTERNAL_LOCATION:n()(void 0!==d,"Location must be set"),g=d;break;case i.an.CONNECTION:n()(void 0!==p,"Location must be set"),g=p;break;case i.an.METASTORE:n()(void 0!==t,"Metastore must be set"),g=t;break;case i.an.CATALOG:n()(void 0!==a,"Catalog must be set"),g=a;break;case i.an.DATABASE:n()(void 0!==r,"Schema must be set"),g=`${a}.${r}`;break;case i.an.CLEAN_ROOM:n()(void 0!==m,"Clean room must be set"),g=m;break;case i.an.EXTERNAL_METADATA:n()(void 0!==A,"External metadata must be set"),g=A;break;case i.an.TABLE:default:n()(void 0!==r,"Schema must be set"),n()(void 0!==l,"Table must be set"),g=`${a}.${r}.${l}`}return s.k.setPermissions(e,g,u)},function(){var e=this,t=arguments;return new Promise(function(a,r){var n=g.apply(e,t);function i(e){u(n,a,r,i,o,"next",e)}function o(e){u(n,a,r,i,o,"throw",e)}i(void 0)})})()}}function d(){let e=c();return(0,l.n_)(e)}function p(){return(0,l.n_)(function(e){let t=c();return Promise.all(e.map(e=>t(e)))})}},820097:(e,t,a)=>{a.d(t,{H:()=>i,Z:()=>o});var r,n=a(696514),i=((r={}).DONE="done",r.CANCELLED="cancelled",r);let o=(0,n.fH)("Filebrowser::CloneRedashToLakeview")},823825:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,r.Y)("g",{clipPath:"url(#ModelsIcon_svg__a)",children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M0 4.75a2.75 2.75 0 0 1 5.145-1.353l4.372-.95a2.75 2.75 0 1 1 3.835 2.823l.282 2.257a2.75 2.75 0 1 1-2.517 4.46l-2.62 1.145.003.118a2.75 2.75 0 1 1-4.415-2.19L3.013 7.489A2.75 2.75 0 0 1 0 4.75M2.75 3.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m2.715 1.688q.027-.164.033-.333l4.266-.928a2.75 2.75 0 0 0 2.102 1.546l.282 2.257c-.377.165-.71.412-.976.719zM4.828 6.55a2.8 2.8 0 0 1-.413.388l1.072 3.573q.13-.012.263-.012c.945 0 1.778.476 2.273 1.202l2.5-1.093a2.8 2.8 0 0 1 .012-.797zM12 10.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M5.75 12a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M11 2.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0",clipRule:"evenodd"})}),(0,r.Y)("defs",{children:(0,r.Y)("clipPath",{children:(0,r.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="ModelsIcon";let l=s},829845:(e,t,a)=>{a.d(t,{BC:()=>m,E$:()=>h,PT:()=>g,Th:()=>S,UA:()=>_,dG:()=>p,rD:()=>E,tg:()=>A,x3:()=>f});var r=a(820097),n=a(571739),i=a(437475),o=a(322227),s=a(242995),l=a(75036),u=a(751097),c=a(659573),d=a(311529);let p=(e,t,a,r)=>o.x.call({name:e,internalName:t,initialOpenFolderName:a,initialOpenFolderInternalName:r}),f=e=>n.z.call(e),E=e=>r.Z.call(e),m=e=>i.V1.call(e),A=(e,t,a)=>d.x.call({name:e,internalName:t,...a}),g=e=>c.v.call(e),S=e=>l.e.call(e),h=e=>s.h.call(e),_=e=>u.x.call(e)},834343:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,r.Y)("g",{clipPath:"url(#SearchIcon_svg__a)",children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a7 7 0 1 0 4.39 12.453l2.55 2.55 1.06-1.06-2.55-2.55A7 7 0 0 0 8 1M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0",clipRule:"evenodd"})}),(0,r.Y)("defs",{children:(0,r.Y)("clipPath",{children:(0,r.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="SearchIcon";let l=s},841734:(e,t,a)=>{a.d(t,{dS:()=>l,lm:()=>u,ry:()=>o});var r=a(692738),n=a(595615),i=a(302118);let o=e=>["data_explorer_catalog_details",e];function s(){return(0,r.useCallback)(({catalog:e})=>({queryFn:()=>i.k.getCatalogDetails(e)}),[])}function l(e,t){return(0,n.AO)({queryKey:o(e),queryFn:function(){return i.k.getCatalogDetails(e)},...t})}function u(){return(0,n.Ox)({queryFn:s})}},848737:(e,t,a)=>{a.d(t,{d:()=>E});var r=a(610435),n=a(692738),i=a(545251),o=a(305404),s=a(994796),l=a(497895),u=a(834343),c=a(407374),d=a(469490),p=a(569546);let f=e=>{if("string"==typeof e||"number"==typeof e)return e.toString();if(n.isValidElement(e)&&e.props.children)return n.Children.toArray(e.props.children).map(f).join(" ");return""},E=(0,n.forwardRef)(({onChange:e,onSearch:t,virtualized:a,children:E,hasWrapper:m,controlledValue:A,setControlledValue:g,rightSearchControls:S,...h},_)=>{let{theme:v}=(0,l.wn)(),{componentId:T}=(0,i.w)(),{isInsideDialogComboboxOptionList:C}=(0,o.r)(),I=`no-result-${(0,p.B)()}`,R=(0,n.useRef)(null);(0,n.useImperativeHandle)(_,()=>R.current);let[O,b]=n.useState();if(!C)throw Error("`DialogComboboxOptionListSearch` must be used within `DialogComboboxOptionList`");let y=E;if(O&&!a&&void 0===A){var N;let e;N=m?E.props.children:E,e=O.toLowerCase(),y=n.Children.map(N,t=>{if(n.isValidElement(t)){let a=t.props.__EMOTION_TYPE_PLEASE_DO_NOT_USE__?.defaultProps._TYPE??t.props._TYPE;if("DialogComboboxOptionListSelectItem"===a||"DialogComboboxOptionListCheckboxItem"===a){let a=f(t).toLowerCase(),r=t.props.value?.toLowerCase()??"";return a.includes(e)||r.includes(e)?t:null}}return t})?.filter(e=>e),m&&(y=n.cloneElement(E,{},y))}let L=(0,n.useRef)(null);(0,n.useEffect)(()=>{if(!L.current)return;let e=(0,s.aV)(L.current);if(e){let t=(0,s.kQ)(e),a=e?.[0];a&&(0,s.ed)(a,t,!1)}},[O]);let M=n.Children.toArray(m?E.props.children:E).some(e=>n.isValidElement(e)),w=m&&y?.props.children?.length||!m&&y?.length;return(0,n.useEffect)(()=>{w||R.current?.input?.setAttribute("aria-activedescendant",I)},[w,I,R.current?.input?.value]),(0,r.FD)(r.FK,{children:[(0,r.Y)("div",{ref:L,css:{padding:`${v.spacing.sm}px ${v.spacing.lg/2}px ${v.spacing.sm}px`,width:"100%",boxSizing:"border-box",position:"sticky",top:0,background:v.colors.backgroundPrimary,zIndex:v.options.zIndexBase+1},children:(0,r.FD)("div",{css:{display:"flex",flexDirection:"row",gap:v.spacing.sm},children:[(0,r.Y)(c.p,{componentId:T?`${T}.search`:"codegen_design_system_src_design_system_dialogcombobox_dialogcomboboxoptionlistsearch.tsx_173",type:"search",name:"search",ref:R,prefix:(0,r.Y)(u.A,{}),placeholder:"Search",onChange:e=>{a||b(e.target.value),g?.(e.target.value),t?.(e.target.value)},onKeyDown:e=>{(e=>{if("ArrowDown"!==e.key&&"ArrowUp"!==e.key&&"Enter"!==e.key)return;e.preventDefault();let t=(0,s.aV)(e.target);if(!t)return;let a=(0,s.kQ)(t);if("ArrowDown"===e.key||"ArrowUp"===e.key)if(a){let r=(0,s.oS)(a,"ArrowDown"===e.key?"next":"previous");if(r)(0,s.ed)(r,a,!1);else if("ArrowDown"===e.key){let e=t[0];(0,s.ed)(e,a,!1)}else if("ArrowUp"===e.key){let e=t[t.length-1];(0,s.ed)(e,a,!1)}}else{let a="ArrowDown"===e.key?t[0]:t[t.length-1];a&&(0,s.ed)(a,void 0,!1)}else"Enter"===e.key&&a&&a.click()})(e),h.onKeyDown?.(e)},value:A??O,shouldPreventFormSubmission:!0,...h}),S]})}),a?E:w&&M?(0,r.Y)("div",{"aria-live":"polite",css:{width:"100%"},children:y}):(0,r.Y)(d.i,{id:I})]})})},850723:(e,t,a)=>{a.d(t,{J:()=>o,O:()=>s});var r=a(160603),n=a(302118);function i(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}let o=["get_metastore_summary"];function s({fallback:e,useQueryOptions:t}={}){return(0,r.useQuery)({queryKey:o,queryFn:()=>{var t;return(t=function*(){return e?yield n.k.getMetastoreSummaryWithFallBack():yield n.k.getMetastoreSummary()},function(){var e=this,a=arguments;return new Promise(function(r,n){var o=t.apply(e,a);function s(e){i(o,r,n,s,l,"next",e)}function l(e){i(o,r,n,s,l,"throw",e)}s(void 0)})})()},...t})}},861403:(e,t,a)=>{a.d(t,{b:()=>f});var r=a(778529),n=a.n(r),i=a(536717),o=a.n(i),s=a(692738),l=a(342411),u=a(595338);let c=/summary:\s*(.*?)(?=,\s*data:)/s;var d=a(482921),p=a(308879);function f(e,t=!0,a=!1){let r=(0,l.tz)(),{isEnabled:i}=(0,p.L)();return(0,s.useMemo)(()=>{let s=e;if(n()(s))return;if((0,u.F0)(e)?s=function(e,t){if(t.response?.status===429)return e.formatMessage({id:"O57kaK",defaultMessage:"Error 429: Too many requests. Please wait a moment and try again. If the issue persists, consider adjusting your request frequency or reaching out to support for assistance."});{let e=t.response?.data;return e?.message??e}}(r,e):e instanceof Error&&(s=function(e,t){if(t&&e.cause&&"string"==typeof e.cause)return e.cause;if("SqlQueryError"!==e.name)return e.message;var a=e.message;let r=a.match(/Details:\s*([^,]*)/);if(r&&r.length>=0)return r[0];return a}(e,a)),o()(s)){var l=s,p=r,f=t,E=i;if(l.includes("Catalog namespace is not supported")||l.includes("Unity catalog is not enabled"))switch((0,d.G)(f,E)){case d.M.ONLY_CLUSTER:return p.formatMessage({id:"Z2EuPV",defaultMessage:"This cluster is incompatible with sample data for Unity Catalog tables. Please use Databricks Runtime 11.1 or higher or contact Databricks for assistance."});case d.M.ONLY_WAREHOUSE:return p.formatMessage({id:"Uvfp1K",defaultMessage:"This warehouse is incompatible with sample data for Unity Catalog tables. Please use Databricks Runtime 11.1 or higher or contact Databricks for assistance."});case d.M.WAREHOUSE_AND_CLUSTER:return p.formatMessage({id:"u0m7LZ",defaultMessage:"This warehouse or cluster is incompatible with sample data for Unity Catalog tables. Please use Databricks Runtime 11.1 or higher or contact Databricks for assistance."});default:return""}let e=l.match(c);if(e)return e[0].trim();return l}return JSON.stringify(s)},[e,r,a,t,i])||""}},862294:(e,t,a)=>{a.d(t,{GF:()=>m,dD:()=>E,zx:()=>f});var r=a(692738),n=a(686560),i=a(141078),o=a(595615),s=a(641760);function l(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}let u=(0,i.J1)`
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
`,p=(e,t,a)=>({input:{key:{typeName:"workspace",name:e},setting:{typeName:"disable_legacy_access",name:""},...t&&{sessionToken:t},...a}});function f(e){let t=(()=>{let e=(0,n.d)("currentWorkspaceId",""),[t]=(0,i._l)(d,{variables:p(e),fetchPolicy:"cache-and-network"});return(0,r.useCallback)(()=>({queryKey:["DISABLE_LEGACY_ACCESS_SETTING_QUERY"],queryFn:()=>{var e;return(e=function*(){let{data:e}=yield t();return e},function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function o(e){l(i,r,n,o,s,"next",e)}function s(e){l(i,r,n,o,s,"throw",e)}o(void 0)})})()}}),[t])})();return(0,o.AO)({queryKey:t().queryKey,queryFn:t().queryFn,keepPreviousData:!0,...e,enabled:(0,s.n_)()})}function E(e){return!!(0,s.n_)()&&!!e?.settingspolicyserviceGetSettingRestWithoutSettingName?.setting?.value?.boolVal?.value}function m(){var e;let t,a=(0,s.n_)(),r=(e={skip:!a},t=(0,n.d)("currentWorkspaceId",""),(0,i.IT)(d,{variables:p(t),fetchPolicy:"cache-and-network",skip:e?.skip}));return{data:!!a&&!!r.data?.settingspolicyserviceGetSettingRestWithoutSettingName?.setting?.value?.boolVal?.value,loading:r.loading,error:r.error}}},869061:(e,t,a)=>{a.d(t,{BV:()=>ew,F:()=>ex,OH:()=>eP,Qz:()=>eG,VT:()=>eU,e0:()=>ek,qu:()=>eD});var r=a(610435);a(692738);var n=a(820648),i=a(505544),o=a(615693),s=a(611791),l=a(784141),u=a(932273),c=a(325382),d=a(319241),p=a(1459),f=a(823825),E=a(815367),m=a(209246),A=a(657252),g=a(430939),S=a(295575),h=a(572599),_=a(397136),v=a(973492),T=a(298500),C=a(889187),I=a(350487),R=a(826279),O=a(194452),b=a(95853),y=a(983972),N=a(704882),L=a(191283),M=a(571117),w=a(518695),D=a(722651),U=a(750269),P=a(587012),k=a(237534),x=a(123577),G=a(194556),F=a(478848),Y=a(302999),H=a(5654),$=a(150788),W=a(359911),V=a(469030),B=a(749298),K=a(630100),z=a(725321),q=a(341231),Q=a(587987),J=a(166525),j=a(609952),X=a(848833),Z=a(60297),ee=a(84796),et=a(829708),ea=a(606295),er=a(732941),en=a(652600),ei=a(609951),eo=a(353492),es=a(227460),el=a(708174),eu=a(243393),ec=a(745387),ed=a(676526),ep=a(522194),ef=a(856879),eE=a(953087),em=a(475621),eA=a(70482),eg=a(961945),eS=a(297979),eh=a(29893),e_=a(988011),ev=a(543525),eT=a(441143),eC=a(545760),eI=a(608759),eR=a(194960),eO=a(265913),eb=a(710814),ey=a(29824),eN=a(581716),eL=a(150924),eM=a(641760);let ew={[ey.an.CATALOG]:n.A,[ey.an.DATABASE]:i.A,[ey.an.TABLE]:o.A,[ey.an.COLUMN]:void 0,[ey.an.VIEW]:s.A,[ey.an.STREAMING_TABLE]:l.A,[ey.an.MATERIALIZED_VIEW]:u.A,[ey.an.VOLUME]:c.A,[ey.an.VOLUME_FILE]:d.A,[ey.an.VOLUME_FOLDER]:p.A,[ey.an.REGISTERED_MODEL]:f.A,[ey.an.REGISTERED_MODEL_VERSION]:f.A,[ey.an.FUNCTION]:E.A,[ey.an.FUNCTION_FEATURE_SPEC]:m.A,[ey.an.STORAGE_CREDENTIAL]:A.A,[ey.an.CREDENTIAL]:A.A,[ey.an.EXTERNAL_LOCATION]:g.A,[ey.an.CONNECTION]:S.A,[ey.an.SHARE]:void 0,[ey.an.RECIPIENT]:void 0,[ey.an.PROVIDER]:void 0,[ey.an.METASTORE]:void 0,[ey.an.CLEAN_ROOM]:h.A,[ey.an.INBOUND_SHARED_NOTEBOOK_FILE]:_.A,[ey.an.VECTOR_INDEX]:v.A,[ey.an.ONLINE_VIEW]:T.A,[ey.an.METRIC_VIEW]:C.A,[ey.an.EXTERNAL_METADATA]:I.A,[ey.an.SECRET]:A.A},eD={[ey.$C.BIGINT]:R.A,[ey.$C.BINARY]:O.A,[ey.$C.BOOLEAN]:function(e){return(0,r.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 95.986 88.359",...e,children:[(0,r.Y)("defs",{children:(0,r.Y)("filter",{id:"checkbox_source_svg__a",x:0,width:1,y:0,height:1,colorInterpolationFilters:"sRGB",children:(0,r.Y)("feGaussianBlur",{})})}),(0,r.Y)("path",{style:{lineHeight:"normal",fontVariantLigatures:"normal",fontVariantPosition:"normal",fontVariantCaps:"normal",fontVariantNumeric:"normal",fontVariantAlternates:"normal",fontVariantEastAsian:"normal",fontFeatureSettings:"normal",fontVariationSettings:"normal",textIndent:0,textAlign:"start",textDecorationLine:"none",textDecorationStyle:"solid",textDecorationColor:"#000",textTransform:"none",textOrientation:"mixed",whiteSpace:"normal",shapeMargin:0,inlineSize:0,isolation:"auto",mixBlendMode:"normal"},d:"M1288.725-1007.719l-.801.801-64.416 64.414-18.973-18.97-12.894 12.896 31.867 31.857 78.113-78.115zm-123.116.469V-882.516h132.67v-94.558l-18.226 18.228v58.106h-96.217v-88.273h71.764l18.238-18.237z",transform:"matrix(.70572 0 0 .70572 -822.588 711.163)",fontWeight:400,fontFamily:"sans-serif",overflow:"visible",fill:"currentColor",filter:"url(#checkbox_source_svg__a)",enableBackground:"accumulate"})]})},[ey.$C.DATE]:b.A,[ey.$C.DECIMAL]:y.A,[ey.$C.DOUBLE]:y.A,[ey.$C.FLOAT]:y.A,[ey.$C.INT]:R.A,[ey.$C.INTERVAL]:R.A,[ey.$C.SMALLINT]:R.A,[ey.$C.STRING]:N.A,[ey.$C.TIMESTAMP]:L.A,[ey.$C.TINYINT]:R.A,[ey.$C.ARRAY]:M.A,[ey.$C.MAP]:w.A,[ey.$C.STRUCT]:w.A,[ey.$C.CHAR]:N.A,[ey.$C.VARCHAR]:N.A,[ey.$C.GENERAL]:D.A,[ey.$C.GEOMETRY]:U.A};function eU(e){return eD[(0,eM.lA)(e)]??D.A}let eP={[eN.pu.MONGODB]:P,[eN.pu.MYSQL]:k.A,[eN.pu.POSTGRESQL]:x.A,[eN.pu.MANAGED_POSTGRESQL]:x.A,[eN.pu.REDSHIFT]:G,[eN.pu.SNOWFLAKE]:F,[eN.pu.SQLDW]:Y,[eN.pu.SQLSERVER]:H,[eN.pu.DATABRICKS]:$,[eN.pu.VECTOR_INDEX]:$,[eN.pu.SALESFORCE]:W,[eN.pu.SALESFORCE_DATA_CLOUD]:W,[eN.pu.SALESFORCE_DATA_CLOUD_FILE_SHARING]:W,[eN.pu.TERADATA]:V,[eN.pu.ORACLE]:B,[eN.pu.BIGQUERY]:K,[eN.pu.NETSUITE]:z,[eN.pu.WORKDAY_RAAS]:q,[eN.pu.WORKDAY_ACTIVITY_LOGGING]:q,[eN.pu.WORKDAY_HCM]:q,[eN.pu.SERVICENOW]:Q,[eN.pu.SHAREPOINT]:J,[eN.pu.ONEDRIVE]:j.A,[eN.pu.ONELAKE]:X.A,[eN.pu.FABRIC]:X.A,[eN.pu.HIVE_METASTORE]:Z,[eN.pu.GLUE]:Z,[eN.pu.GA4_RAW_DATA]:ee.A,[eN.pu.GOOGLE_DRIVE]:et.A,[eN.pu.HTTP]:ea.A,[eN.pu.POWER_BI]:er.A,[eN.pu.DBT_PLATFORM]:en,[eN.pu.SFTP]:ei.A,[eN.pu.DYNAMICS365]:eo.A,[eN.pu.JIRA]:es,[eN.pu.CONFLUENCE]:el,[eN.pu.GITHUB]:eu,[eN.pu.HUBSPOT]:ec,[eN.pu.ZENDESK]:ed,[eN.pu.SLACK_AUDIT_LOGS]:ep,[eN.pu.SLACK_ACCESS_AND_INTEGRATION_LOGS]:ep,[eN.pu.META_MARKETING]:ef,[eN.pu.SALESFORCE_MARKETING_CLOUD]:W,[eN.pu.JDBC]:eE,[eN.pu.GENERIC_LAKEFLOW_CONNECT]:"",[eN.pu.SLACK]:ep,[eN.pu.KAFKA]:em.A,[eN.pu.RABBITMQ]:"",[eN.pu.GOOGLE_ADS]:eA,[eN.pu.OUTLOOK]:eg.A,[eN.pu.PALANTIR]:eS.A,[eN.pu.BIGLAKE]:K,[eN.pu.GOOGLE_CLOUD_LAKEHOUSE]:K,[eN.pu.TIKTOK_ADS]:eh,[eN.pu.CROWDSTRIKE_EVENT_STREAM]:e_,[eN.pu.ONE_PASSWORD_EVENT_LOGS]:ev,[eN.pu.OKTA_SYSTEM_LOGS]:eT,[eN.pu.AKAMAI_WAF]:eC,[eN.pu.M365_AUDIT_LOGS]:eI,[eN.pu.SMARTSHEET]:eR,[eN.pu.AWS_SECRETS_MANAGER]:eO.A,[eN.pu.VEEVA_VAULT]:eb.A},ek={[ey.an.FUNCTION]:{[eL.x.FUNCTION]:E.A,[eL.x.FUNCTION_PROCEDURE]:U.A,[eL.x.FUNCTION_FEATURE_SPEC]:m.A}};function ex(e){if(e){let t=ew[e];if(t)return t}return ew[ey.an.TABLE]}function eG(e,t){return eP[e]}},885364:(e,t,a)=>{a.d(t,{g:()=>o,u:()=>i});var r=a(987962),n=a.n(r);class i extends Error{__initiatorStack;errorCode;constructor(e,t,...a){super(t,...a),Error.captureStackTrace&&Error.captureStackTrace(this,i),this.name="SchemaLoadError",this.errorCode=e}isWaitingForEndpoint(){return 3===this.errorCode}}function o(e){return t=>{if(n()(t,"error")){let a=new i(t.error.code,`${t.error.message} (${e})`);return a.__initiatorStack=Error().stack,Promise.reject(a)}return t}}},886688:(e,t,a)=>{a.d(t,{U:()=>l,u:()=>u});var r=a(689262),n=a(686560),i=a(709262),o=a(805287);let s=()=>(0,o.gz)({cloud:"AWS",userCanUseDatabricksWorkspace:(0,n.d)("userCanUseDatabricksWorkspace_new",!1),userCanUseSqlService:(0,n.d)("userCanUseSqlService_new",!1),enableSqlService:(0,r.b)("enableSqlService",(0,n.d)("enableSqlService",!1),()=>(0,n.d)("dbSqlEnabled_new",!1)),centralizedLoginEnabled:(0,n.d)("centralizedLoginEnabled",!1)}),l=()=>s()[i.EU].availableInEnvironment,u=()=>s()[i.EU].allowed},889187:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.75 1a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75H4v-1.5H2.5V7H5v2h1.5V7h3v2H11V7h2.5v2H15V1.75a.75.75 0 0 0-.75-.75zM13.5 5.5v-3h-11v3z",clipRule:"evenodd"}),(0,r.Y)("path",{fill:"currentColor",d:"M5 11v3.25c0 .414.336.75.75.75h9.5a.75.75 0 0 0 .75-.75V11h-1.5v2.5h-.875V12h-1.5v1.5h-.875V11h-1.5v2.5h-.875V12h-1.5v1.5H6.5V11z"})]})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="TableMeasureIcon";let l=s},902310:(e,t,a)=>{a.d(t,{_:()=>d,t:()=>p});var r=a(441535),n=a(412836),i=a(733337),o=a(660618),s=a(927239),l=a(595615),u=a(125230);function c(e,t,a,r,n,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}let d=e=>"isLakebaseServerlessCatalog"in e&&!0===e.isLakebaseServerlessCatalog;function p(){let{invalidate:e}=(0,l.rA)(),t=(0,r.W)("databricks.fe.lakebase.useNewCatalogsSyncedTablesApi",!1);return(0,n.n_)(({name:e,databaseProjectId:a,databaseBranchId:r,postgresDatabaseName:n,createDatabaseIfNotExists:s})=>{var l;return(l=function*(){if(!t)return yield(0,i.nr)(`${o.e0}/catalogs`,{method:"POST",body:JSON.stringify({name:e,database_project_id:a,database_branch_id:r,database_name:n,create_database_if_not_exists:s})});{let t=yield(0,u._J)(a,r);return yield(0,i.nr)(`/ajax-api/2.0/postgres/catalogs?catalog_id=${encodeURIComponent(e)}`,{method:"POST",body:JSON.stringify({spec:{branch:`projects/${t.project_slug}/branches/${t.slug}`,create_database_if_missing:s,postgres_database:n}})}),{name:e,databaseProjectId:a,databaseBranchId:r,postgresDatabaseName:n,createDatabaseIfNotExists:s}}},function(){var e=this,t=arguments;return new Promise(function(a,r){var n=l.apply(e,t);function i(e){c(n,a,r,i,o,"next",e)}function o(e){c(n,a,r,i,o,"throw",e)}i(void 0)})})()},{onSuccess:()=>{e([s.xQ])}})}},907046:(e,t,a)=>{a.d(t,{n:()=>i});var r=a(610435),n=a(939578);let i=e=>{let{name:t,children:a,...i}=e;return(0,r.FD)(r.FK,{children:[(0,r.Y)(n.y,{...i,children:t}),a]})}},913372:(e,t,a)=>{a.d(t,{GY:()=>l,a6:()=>u,c3:()=>s,nu:()=>d,qT:()=>p,tB:()=>c});var r,n=a(692738),i=a(686560),o=a(141078),s=((r={}).LAST_SELECTED_WAREHOUSE="",r);function l(e){return Object.values(s).includes(e)}let u=(0,o.J1)`
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
`,c=(e={})=>{let t=(0,i.d)("currentWorkspaceId","");return(0,o.IT)(u,{variables:{workspaceId:t},...e})};function d(e,t={}){let a=(0,i.d)("currentWorkspaceId","");return e.query({...t,query:u,variables:{workspaceId:a}})}function p(){let e=(0,o.mK)();return(0,n.useMemo)(()=>d.bind(null,e),[e])}},919505:(e,t,a)=>{a.d(t,{A:()=>m});var r=a(514503),n=a.n(r),i=a(692738),o=a(200356),s=a(65061),l=a(960718),u=a(441535),c=a(141078),d=a(886100),p=a(22191),f=a(278983);let E=(0,c.J1)`
  subscription WarehouseEventSubscription($ignoreScaledEvent: Boolean) @component(name: "DBSQLX.WareHouseUI") {
    warehouseEvent(ignoreScaledEvent: $ignoreScaledEvent) {
      warehouseId
      eventName
      eventTimeMs
    }
  }
`;function m({skip:e,refetchLakehouseStates:t,setEnableSubscription:a}){let r=(0,i.useMemo)(()=>{let e=(0,u.W)("databricks.fe.redash.warehouses.event.debounceWait",1e3)+Math.floor(500*Math.random());return n()(t,e)},[t]),c=(0,i.useRef)(!1);return(0,s.sw)(E,{variables:{ignoreScaledEvent:!0},shouldResubscribe:!0,skip:e,onSubscriptionData({subscriptionData:e,client:n}){if(e?.data?.warehouseEvent){let{warehouseId:a}=e.data.warehouseEvent;"0"!==a||c.current?"0"===a?t():function(e,t,a){let{warehouseId:r,eventName:n}=t;(n||"undefined")in o.tXm&&e.cache.updateFragment({fragment:l.xz,id:e.cache.identify({__typename:"Lakehouse",id:r})},e=>{if(e)return{...e,state:n,health:null}})||a()}(n,e.data.warehouseEvent,r):c.current=!0}else d.iT.sev2(p.Es.RedashCore,"warehouseEvent.subscription.onSubscriptionData.unexpectedData",{subscriptionData:e}),a(!1)},onError(e){(function(e){if(e?.[0]){let t=e[0],a=t.code??"unknown",r=t instanceof CloseEvent?"CloseEvent":t.type??"unknown";(0,f.y)("clientsideEvent",{eventName:"warehouse_subscription_error",eventType:`warehouse_subscription_error_${r}`,errorCode:a})}else d.iT.sev2(p.Es.RedashCore,"warehouseEvent.subscription.onUnexpectedError",{rawError:e})})(e),a(!1)}})}},920174:(e,t,a)=>{a.d(t,{E:()=>i});var r=a(441535),n=a(886688);function i(){let e=(0,r.W)("databricks.warehouses.defaultWarehouseSettingEnabled",!1),t=(0,r.W)("databricks.fe.warehouses.defaultWarehouseSettingUIEnabled",!1),a=(0,r.W)("default_wh_setting",!1);return e&&(a||t)&&(0,n.u)()}},927239:(e,t,a)=>{a.d(t,{Fj:()=>l,OS:()=>r,U_:()=>s,Xq:()=>d,Zl:()=>u,a:()=>c,c_:()=>n,ie:()=>p,pu:()=>o,xQ:()=>i});let r="data_explorer_tables",n="data_explorer_table_details",i="metadata_catalogs",o="metadata_databases",s="data_explorer_volumes",l="volume_files",u="all_volume_files",c=["list_connections"],d="get_connection",p="user_credentials"},932273:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.75 1a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75H8v-1.5H6.5V7h7v2H15V1.75a.75.75 0 0 0-.75-.75zM5 7H2.5v6.5H5zm8.5-1.5v-3h-11v3z",clipRule:"evenodd"}),(0,r.Y)("path",{fill:"currentColor",d:"m8.43 11.512 3-3.5 1.14.976-1.94 2.262H14a.75.75 0 0 1 .57 1.238l-3 3.5-1.14-.976 1.94-2.262H9a.75.75 0 0 1-.57-1.238"})]})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="TableLightningIcon";let l=s},936743:(e,t,a)=>{a.d(t,{G:()=>s,l:()=>o});var r=a(610435),n=a(692738),i=a(62947);let o=e=>{switch(e.kind){case"group":return{group_name:e.name,group_id:e.id};case"user":return{user_name:e.name,user_id:e.id};case"serviceprincipal":return{service_principal_display_name:e.displayName,service_principal_id:e.id,service_principal_name:e.applicationId}}},s=({onUpdate:e,onUpdateSubject:t,showAccountLevelEntities:a,...s})=>{let l=(0,n.useCallback)(a=>{let r;Array.isArray(a)?r=a.map(e=>o(e)):void 0!==a&&(r=o(a)),e&&e(r),t&&t(a)},[e,t]);return(0,r.Y)(i.T,{enableAccountGroups:!!a,enableAccountServicePrincipals:!!a,enableAccountUsers:!!a,enableWorkspaceGroups:!a,enableWorkspaceServicePrincipals:!a,enableWorkspaceUsers:!a,onUpdate:e||t?l:void 0,...s})}},939578:(e,t,a)=>{a.d(t,{y:()=>o});var r=a(610435),n=a(545251),i=a(605107);let o=({children:e,...t})=>{let{isInsideDialogCombobox:a}=(0,n.w)();if(!a)throw Error("`DialogComboboxSectionHeader` must be used within `DialogCombobox`");return(0,r.Y)(i.X,{...t,children:e})}},960718:(e,t,a)=>{a.d(t,{MS:()=>d,SN:()=>p,vP:()=>c,xz:()=>f});var r=a(141078);let n=(0,r.J1)`
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
`,u=(0,r.J1)`
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
`,c=(0,r.J1)`
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
  ${u}
  ${s}
`,d=(0,r.J1)`
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
  ${u}
`,f=(0,r.J1)`
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
`},962179:(e,t,a)=>{function r(e){return"databricks_internal"===e.type}function n(e){return"databricks_cluster"===e.type||"cluster"===e.type}function i(e){return"statements"in e}a.d(t,{PG:()=>r,n9:()=>i,y0:()=>n})},962664:(e,t,a)=>{a.d(t,{N:()=>d});var r=a(610435),n=a(692738),i=a(768622),o=a(332702),s=a(497895),l=a(161330),u=a(174541),c=a(574132);let d=(0,n.forwardRef)(({item:e,index:t,comboboxState:a,selectedItems:d,selectedMatcher:p,textOverflowMode:f="multiline",isDisabled:E,disabledReason:m,hintContent:A,onClick:g,children:S,...h},_)=>{let{highlightedIndex:v,getItemProps:T,isOpen:C}=a,I=v===t,{theme:R}=(0,s.wn)(),O=p?d.some(t=>p(t,e)):d.includes(e),b=(0,n.useRef)(null);(0,n.useImperativeHandle)(_,()=>b.current);let{onClick:y,...N}=T({item:e,index:t,disabled:E,onMouseUp:e=>{e.stopPropagation(),h.onMouseUp?.(e)},ref:b});return(0,n.useEffect)(()=>{if(C&&v===t&&b.current){let e=b.current.closest("ul");if(!e)return;let t=e.scrollTop,a=e.scrollTop+e.clientHeight,r=b.current.offsetTop,n=b.current.offsetTop+b.current.clientHeight;(r<t||n>a)&&b.current?.scrollIntoView({block:"nearest"})}},[v,t,C,b]),(0,r.Y)("li",{role:"option","aria-selected":O,disabled:E,onClick:e=>{g?.(e),y(e)},css:[(0,u.RB)(R),(0,i.Jq)(R,I,E)],...N,...h,children:(0,r.Y)(o.Sc,{componentId:"codegen_design-system_src_design-system_typeaheadcombobox_typeaheadcomboboxcheckboxitem.tsx_92",disabled:E,isChecked:O,css:(0,u.WS)(R,f),tabIndex:-1,onClick:e=>{e.stopPropagation()},children:(0,r.FD)("label",{children:[E&&m?(0,r.FD)("div",{css:{display:"flex"},children:[(0,r.Y)("div",{children:S}),(0,r.Y)("div",{css:(0,u.eO)(R),children:(0,r.Y)(l.I,{componentId:"typeahead-combobox-checkbox-item-disabled-reason-info-tooltip",content:m})})]}):S,(0,r.Y)(c.y,{disabled:E,children:A})]})})})});d.defaultProps={_type:"TypeaheadComboboxCheckboxItem"}},983972:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),i=a(375214);function o(e){return(0,r.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M3 10a3 3 0 1 0 6 0V6a3 3 0 0 0-6 0zm3 1.5A1.5 1.5 0 0 1 4.5 10V6a1.5 1.5 0 1 1 3 0v4A1.5 1.5 0 0 1 6 11.5M10 10a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm3 1.5a1.5 1.5 0 0 1-1.5-1.5V6a1.5 1.5 0 0 1 3 0v4a1.5 1.5 0 0 1-1.5 1.5",clipRule:"evenodd"}),(0,r.Y)("path",{fill:"currentColor",d:"M1 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"})]})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:o}));s.displayName="DecimalIcon";let l=s}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/46596.fad99726cb.chunk.js.map