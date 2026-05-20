"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[14133,69258],{46471:(e,a,t)=>{t.d(a,{_:()=>i});var r=t(441535);function i(){let e=(0,r.W)("databricks.fe.visualizations.enableVizSemanticModel",!1),a=(0,r.W)("databricks.fe.lakeview.enableSemanticModels",!1),t=(0,r.W)("aibi_dashboard_relationships",!1);return e&&a||t}},57833:(e,a,t)=>{var r=t(610435),i=t(22191),s=t(726977),n=t(237241),o=t(216354);t(111671);var d=t(480039),l=t(956578);function u(){return(0,r.Y)(l.l,{basePrefix:"/",enableNavigationIntent:!1,routes:(0,d.Z)()})}class c extends n.N{static get observedAttributes(){return[...super.observedAttributes]}constructor(){super({cacheKey:o.J,renderRootComponent:()=>(0,r.Y)(u,{}),enablePanelBoundary:!0,esComponent:i.Es.Lakeview,errorBoundaryId:s.s.LakeviewRoot})}}customElements.define(o.J,c),(0,t(724221).K)(!0)},63837:(e,a,t)=>{t.d(a,{Z:()=>d,q:()=>n});var r=t(610435),i=t(692738);class s{all=new Map;subscribers=new Set;set(e,a){this.all.set(e,a),this.notifyChange()}remove(e){this.all.delete(e),this.notifyChange()}subscribe(e){return this.subscribers.add(e),()=>{this.subscribers.delete(e)}}notifyChange(){for(let e of this.subscribers)e(this.all)}}let n=new s,o=i.createContext(null),d=({children:e})=>{let[,a]=(0,i.useState)({}),t=()=>a({});return(0,i.useEffect)(()=>{n.all.size&&t();let e=n.subscribe(()=>{t()});return()=>{e()}},[]),(0,r.FD)(o.Provider,{value:n.all,children:[(0,r.Y)(l,{}),e]})},l=()=>{let e=(()=>{let e=(0,i.useContext)(o);if(!e)throw Error("Must wrap application in ModalProvider");return e})();return(0,r.Y)(r.FK,{children:[...e.entries()].map(([e,a])=>(0,r.Y)(i.Fragment,{children:a},e))})}},216354:(e,a,t)=>{t.d(a,{J:()=>r});let r="databricks-lakeview"},246635:(e,a,t)=>{t.d(a,{BH:()=>n,Dx:()=>o,TS:()=>s,nk:()=>i});var r=t(141078);let i=(0,r.J1)`
  fragment LakeviewApiErrorFragment on ApiError {
    code
    message
    traceId
  }
`,s=(0,r.J1)`
  fragment LakeviewconfigDatasetParametersFragment on LakeviewconfigModelsParametersParameter {
    displayName
    keyword
    dataType
    complexType
    defaultSelection {
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
      operator {
        operator
      }
    }
  }
`,n=(0,r.J1)`
  fragment LakeviewDashboardThemeFragment on LakeviewconfigModelsUisettingsUiSettingsDashboardTheme {
    canvasBackgroundColor {
      light
      dark
    }
    widgetBackgroundColor {
      light
      dark
    }
    widgetBorderColor {
      light
      dark
    }
    fontColor {
      light
      dark
    }
    selectionColor {
      light
      dark
    }
    visualizationColors
    widgetHeaderAlignment
    fontFamily
    textBoxVerticalAlign
    widgetPadding
    widgetMargin
    widgetCornerRadius
    widgetShadow
    markCornerRadius
    sentimentColors {
      negative {
        light
        dark
      }
      positive {
        light
        dark
      }
      neutral {
        light
        dark
      }
    }
    gridLineColor {
      light
      dark
    }
    axisLineColor {
      light
      dark
    }
    continuousGradient
      @includeSafex(name: "databricks.fe.lakeview.enableThemeContinuousGradient", defaultValue: false) {
      lightMode {
        fromCategoricalIndex
        color
        colorScheme
        customSequential {
          start
          end
        }
        customDiverging {
          start
          mid
          end
        }
      }
      darkMode {
        fromCategoricalIndex
        color
        colorScheme
        customSequential {
          start
          end
        }
        customDiverging {
          start
          mid
          end
        }
      }
    }
    fontSettings {
      base {
        fontFamily
        textCase
        fontColor {
          light
          dark
        }
        fontSize
        fontWeight
      }
      widgetTitle {
        fontFamily
        textCase
        fontColor {
          light
          dark
        }
        fontSize
        fontWeight
      }
      widgetDescription {
        fontFamily
        textCase
        fontColor {
          light
          dark
        }
        fontSize
        fontWeight
      }
      fieldTitle {
        fontFamily
        textCase
        fontColor {
          light
          dark
        }
        fontSize
        fontWeight
      }
      fieldValue {
        fontFamily
        textCase
        fontColor {
          light
          dark
        }
        fontSize
        fontWeight
      }
    }
  }
`,o=(0,r.J1)`
  fragment LakeviewconfigPublishedWidgetFragment on LakeviewconfigModelsPublishedWidget {
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
            operator {
              operator
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
  }
`},258182:(e,a,t)=>{t.d(a,{Close:()=>w,Description:()=>L,Provider:()=>y,Root:()=>A,Title:()=>v,Viewport:()=>k});var r=t(610435),i=t(956935),s=t(593932),n=t(692738),o=t(79128),d=t(224098),l=t(429608),u=t(497895),c=t(658345),_=t(40894),p=t(705639),S=t(639712),b=t(53333),E=t(123252),m=t(661748),I=t(99206);let f=e=>e.preventDefault(),h=(0,i.i7)({from:{opacity:1},to:{opacity:0}}),T=(0,i.i7)({from:{transform:"translateX(calc(100% + 12px))"},to:{transform:"translateX(0)"}}),g=(0,i.i7)({from:{transform:"translateX(var(--radix-toast-swipe-end-x))"},to:{transform:"translateX(calc(100% + 12px))"}}),A=(0,n.forwardRef)(function({children:e,severity:a="info",componentId:t,analyticsEvents:o=[d.s7.OnView],...l},c){let{theme:A,classNamePrefix:v}=(0,u.wn)(),L=(0,n.useMemo)(()=>o,[o]),w=(0,d.ei)({componentType:d.v_.Notification,componentId:t,componentSubType:d.Ie[a],analyticsEvents:L,shouldStartInteraction:!1}),{elementRef:y}=(0,b.z)({onView:w.onView});return(0,r.Y)(s.bL,{ref:c,role:"listitem",css:(0,i.AH)({"&&":{position:"relative",display:"grid",background:A.colors.backgroundPrimary,padding:12,columnGap:4,boxShadow:A.shadows.lg,borderRadius:(0,I.S)(p.c.POPOVER_BORDER_RADIUS,A.borders.borderRadiusSm),lineHeight:"20px",borderColor:`1px solid ${A.colors.border}`,gridTemplateRows:"[header] auto [content] auto",gridTemplateColumns:"[icon] auto [content] 1fr [close] auto",...(0,S.WO)(A)},[`.${v}-notification-severity-icon`]:{gridRow:"header / content",gridColumn:"icon / icon",display:"inline-flex",alignItems:"center"},[`.${v}-btn`]:{display:"inline-flex",alignItems:"center",justifyContent:"center"},[`.${v}-notification-info-icon`]:{color:A.colors.textSecondary},[`.${v}-notification-success-icon`]:{color:A.colors.textValidationSuccess},[`.${v}-notification-warning-icon`]:{color:A.colors.textValidationWarning},[`.${v}-notification-error-icon`]:{color:A.colors.textValidationDanger},'&&[data-state="open"]':{animation:`${T} 300ms cubic-bezier(0.16, 1, 0.3, 1)`},'&[data-state="closed"]':{animation:`${h} 100ms ease-in`},'&[data-swipe="move"]':{transform:"translateX(var(--radix-toast-swipe-move-x))"},'&[data-swipe="cancel"]':{transform:"translateX(0)",transition:"transform 200ms ease-out"},'&[data-swipe="end"]':{animation:`${g} 100ms ease-out`}}),...l,...(0,E.VG)(),...(0,m.W)("databricks.fe.designsystem.notification.disableSwipeToClose",!1)?{onSwipeMove:f,onSwipeEnd:f}:{},children:(0,r.FD)("span",{role:"status","aria-live":"polite","aria-atomic":"true",style:{display:"contents"},children:[(0,r.Y)(_.z,{className:`${v}-notification-severity-icon ${v}-notification-${a}-icon`,severity:a,ref:y}),e]})})}),v=(0,n.forwardRef)(function({children:e,...a},t){let{theme:n}=(0,u.wn)();return(0,r.Y)(s.hE,{ref:t,css:(0,i.AH)({fontWeight:n.typography.typographyBoldFontWeight,color:n.colors.textPrimary,gridRow:"header / header",gridColumn:"content / content",userSelect:"text"}),...a,children:e})}),L=(0,n.forwardRef)(function({children:e,...a},t){let{theme:n}=(0,u.wn)();return(0,r.Y)(s.VY,{ref:t,css:(0,i.AH)({marginTop:4,color:n.colors.textPrimary,gridRow:"content / content",gridColumn:"content / content",userSelect:"text",wordBreak:"break-word"}),...a,children:e})}),w=(0,n.forwardRef)(function(e,a){let{theme:t}=(0,u.wn)(),{closeLabel:n,componentId:d,analyticsEvents:l,..._}=e;return(0,r.Y)("div",{style:{gridColumn:"close / close",gridRow:"header / content",width:20},children:(0,r.Y)(s.bm,{ref:a,css:(0,i.AH)({color:t.colors.textSecondary,position:"absolute",right:6,top:6}),..._,asChild:!0,children:(0,r.Y)(o.$n,{componentId:d||"codegen_design-system_src_design-system_notification_notification.tsx_224",analyticsEvents:l,icon:(0,r.Y)(c.A,{}),"aria-label":n??_["aria-label"]??"Close notification"})})})}),y=({children:e,...a})=>(0,r.Y)(s.Kq,{...a,children:e}),k=e=>{let{theme:a}=(0,u.wn)();return(0,r.Y)(s.LM,{className:l.Nb,style:{position:"fixed",top:0,right:0,display:"flex",flexDirection:"column",padding:12,gap:12,width:440,listStyle:"none",zIndex:a.options.zIndexBase+100,outline:"none",maxWidth:`calc(100% - ${a.spacing.lg}px)`},...e})}},403286:(e,a,t)=>{t.d(a,{CN:()=>n,Qf:()=>c,R6:()=>o,VZ:()=>s,YW:()=>u,eE:()=>i,x6:()=>d,yO:()=>r});let r={ALERTS_LIST:"dbsql.alerts_list.index",ALERTS_LIST_ALL:"dbsql.alerts_list.all",ALERTS_LIST_MY:"dbsql.alerts_list.my",ALERTS_LIST_ADMIN:"dbsql.alerts_list.admin"},i={ALERTS_NEW:"dbsql.alerts.new",ALERTS_VIEW:"dbsql.alerts.view",ALERTS_EDIT:"dbsql.alerts.edit"},s={ALERTS_V2_LIST_ALL:"dbsql.alerts_v2_list.all",ALERTS_V2_LIST_FAVORITES:"dbsql.alerts_v2_list.favorites",ALERTS_V2_LIST_MY:"dbsql.alerts_v2_list.my"},n={EDITOR_NEW:"dbsql.editor.new",EDITOR_ROOT:"dbsql.editor.index",EDITOR_SET_TAB:"dbsql.editor.query"},o={LEGACY_EDITOR_QUERY:"dbsql.editor_legacy.redirect.query",LEGACY_EDITOR_SOURCE:"dbsql.editor_legacy.redirect.source"},d={QUERIES_LIST:"dbsql.queries_list.index",QUERIES_LIST_ALL:"dbsql.queries_list.all",QUERIES_LIST_MY:"dbsql.queries_list.my",QUERIES_LIST_ADMIN:"dbsql.queries_list.admin",QUERIES_LIST_FAVORITES:"dbsql.queries_list.favorites"},l={...o,DATA_SOURCES_LIST:"dbsql.data_sources_list.index",DATA_SOURCES_NEW:"dbsql.data_sources_list.new",DATA_SOURCES_EDIT:"dbsql.data_sources.edit",DESTINATIONS_LIST:"dbsql.destinations_list.redirect.index",DESTINATIONS_NEW:"dbsql.destinations_list.redirect.new",DESTINATIONS_EDIT:"dbsql.destinations.redirect.edit",PAT_SETTINGS:"dbsql.settings.pat_list.redirect",SQL_SETTINGS_EDGE:"dbsql.settings.edge_general_settings.redirect",USER_ACCOUNT_SETTINGS:"dbsql.settings.user_account.redirect"},u={LAKEHOUSE_SETTINGS:"dbsql.warehouses.mfe_settings",QUERY_SNIPPETS:"dbsql.query_snippets",...r,...i,...s,ALERTS_V2_NEW:"dbsql.alerts_v2.new",ALERTS_V2_VIEW:"dbsql.alerts_v2.view",ALERTS_V2_EDIT:"dbsql.alerts_v2.edit",ALERTS_V2_EVALUATION_DETAILS:"dbsql.alerts_v2.evaluation_details",...n,LAKEHOUSES_LIST:"dbsql.warehouses_list.index",LAKEHOUSES_NEW:"dbsql.warehouses_list.new",LAKEHOUSES_EDIT:"dbsql.warehouses.edit",LAKEHOUSES_VIEW:"dbsql.warehouses.view.index",LAKEHOUSES_VIEW_TAB:"dbsql.warehouses.view.tab",...d,...l,SQL_SETTINGS_FLAGS:"dbsql.dev_settings.flags.all",SQL_SETTINGS_FLAG_PREVIEW:"dbsql.dev_settings.flags.single",DASHBOARDS_LIST_DEFAULT:"dbsql.dashboards.list",DASHBOARDS_LIST_ALL:"dbsql.dashboards.all",DASHBOARDS_LIST_FAVORITES:"dbsql.dashboards.favorites",DASHBOARDS_LIST_MY:"dbsql.dashboards.my",DASHBOARDS_LIST_ADMIN:"dbsql.dashboards.admin",DASHBOARDS_NEW:"dbsql.dashboards.new",DASHBOARDS_VIEW_EDIT:"dbsql.dashboards.view_edit",DASHBOARDS_SAMPLE_DASHBOARDS:"dbsql.dashboards.samples",UNSUBSCRIBE:"dbsql.subscriptions.unsubscribe"},c={[u.ALERTS_LIST]:"/sql/alerts",[u.ALERTS_LIST_ALL]:"/sql/alerts/all",[u.ALERTS_LIST_MY]:"/sql/alerts/my",[u.ALERTS_LIST_ADMIN]:"/sql/alerts/admin",[u.ALERTS_NEW]:"/sql/alerts/new",[u.ALERTS_VIEW]:"/sql/alerts/:alertId",[u.ALERTS_EDIT]:"/sql/alerts/:alertId/edit",[u.ALERTS_V2_LIST_ALL]:"/sql/alerts-v2/all",[u.ALERTS_V2_LIST_FAVORITES]:"/sql/alerts-v2/all?view=favorites",[u.ALERTS_V2_LIST_MY]:"/sql/alerts-v2",[u.ALERTS_V2_NEW]:"/sql/alerts-v2/new",[u.ALERTS_V2_VIEW]:"/sql/alerts-v2/:alertId",[u.ALERTS_V2_EDIT]:"/sql/alerts-v2/:alertId/edit",[u.ALERTS_V2_EVALUATION_DETAILS]:"/sql/alerts-v2/:alertId/evaluations/:taskRunId",[u.DASHBOARDS_VIEW_EDIT]:"/sql/dashboards/:dashboardId",[u.DASHBOARDS_LIST_DEFAULT]:"/sql/dashboards",[u.DASHBOARDS_LIST_ALL]:"/sql/dashboards/all",[u.DASHBOARDS_LIST_FAVORITES]:"/sql/dashboards/favorites",[u.DASHBOARDS_LIST_MY]:"/sql/dashboards/my",[u.DASHBOARDS_LIST_ADMIN]:"/sql/dashboards/admin",[u.DASHBOARDS_NEW]:"/sql/dashboards/new",[u.DASHBOARDS_SAMPLE_DASHBOARDS]:"/sql/dashboards/samples",[u.DATA_SOURCES_LIST]:"/sql/data_sources",[u.DATA_SOURCES_NEW]:"/sql/data_sources/new",[u.DATA_SOURCES_EDIT]:"/sql/data_sources/:dataSourceId",[u.DESTINATIONS_LIST]:"/sql/destinations",[u.DESTINATIONS_NEW]:"/sql/destinations/new",[u.DESTINATIONS_EDIT]:"/sql/destinations/:destinationId",[u.EDITOR_NEW]:"/sql/editor/new",[u.EDITOR_ROOT]:"/sql/editor",[u.EDITOR_SET_TAB]:"/sql/editor/:queryId",[u.LAKEHOUSE_SETTINGS]:"/sql/settings/warehouses",[u.LAKEHOUSES_EDIT]:"/sql/warehouses/:id/edit",[u.LAKEHOUSES_LIST]:"/sql/warehouses",[u.LAKEHOUSES_NEW]:"/sql/warehouses/new",[u.LAKEHOUSES_VIEW]:"/sql/warehouses/:id",[u.LAKEHOUSES_VIEW_TAB]:"/sql/warehouses/:id/:tab",[u.LEGACY_EDITOR_QUERY]:"/sql/queries/:queryId",[u.LEGACY_EDITOR_SOURCE]:"/sql/queries/:queryId/source",[u.PAT_SETTINGS]:"/sql/personal_access_tokens",[u.SQL_SETTINGS_EDGE]:"/sql/settings/general",[u.SQL_SETTINGS_FLAGS]:"/sql/settings/flags",[u.SQL_SETTINGS_FLAG_PREVIEW]:"/sql/settings/preview",[u.QUERIES_LIST]:"/sql/queries",[u.QUERIES_LIST_ALL]:"/sql/queries/all",[u.QUERIES_LIST_MY]:"/sql/queries/my",[u.QUERIES_LIST_ADMIN]:"/sql/queries/admin",[u.QUERIES_LIST_FAVORITES]:"/sql/queries/favorites",[u.QUERY_SNIPPETS]:"/sql/query-snippets",[u.USER_ACCOUNT_SETTINGS]:"/sql/account",[u.UNSUBSCRIBE]:"/sql/unsubscribe/:subscriptionId"}},436420:(e,a,t)=>{t.d(a,{N:()=>n});var r=t(141078),i=t(246635);let s=(0,r.J1)`
  ${i.Dx}
  fragment LakeviewconfigPublishedPageFragment on LakeviewconfigModelsPublishedPage {
    name
    displayName
    widgetOrder {
      name
    }
    customerRefId @includeSafex(name: "databricks.fe.lakeview.enableStableIdsInUrl", defaultValue: false)
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
    widgets {
      ...LakeviewconfigPublishedWidgetFragment
    }
    pageType
  }
`,n=(0,r.J1)`
  ${i.nk}
  ${i.Dx}
  ${i.TS}
  ${s}
  ${i.BH}
  query PublishedDashboardGetQueryWithDatasets(
    $input: LakeviewconfigServicesPublisheddashboardGetPublishedDashboardRequestInput!
  ) @component(name: "Lakeview.Dashboards") {
    lakeviewconfigServicesPublisheddashboardGetPublishedDashboard(input: $input) {
      name
      displayName
      warehouseId
      warehouseType
      revisionId
      publishedByUserId
      folderNodeInternalName
      revisionCreateTime {
        seconds
        nanos
      }
      semanticModels @includeSafex(name: "databricks.fe.lakeview.enableSemanticModels", defaultValue: false) {
        sources {
          name
          datasetName
        }
      }
      featureStates {
        enableGenieSpace
        enableMaterialization
      }
      genieSpace {
        overrideId
      }
      page {
        ...LakeviewconfigPublishedPageFragment
      }
      datasets {
        query
        name
        displayName
        assetName
        metricViewConfig
        catalog
        schema
        customerRefId @includeSafex(name: "databricks.fe.lakeview.enableStableIdsInUrl", defaultValue: false)
        datasetParameters {
          ...LakeviewconfigDatasetParametersFragment
        }
        columns {
          displayName
          expression
          description
        }
      }
      credentialsEmbedded
      servicePrincipalId
        @includeSafex(name: "databricks.fe.lakeview.enableServicePrincipalPublish", defaultValue: false)
      apiError {
        ...LakeviewApiErrorFragment
      }
      pages {
        ...LakeviewconfigPublishedPageFragment
      }
      pageOrder {
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
        applyModeEnabled
        theme {
          ...LakeviewDashboardThemeFragment
        }
      }
    }
  }
`},480039:(e,a,t)=>{t.d(a,{Z:()=>o});var r=t(986784),i=t(589300),s=t(812426);let n=[s.sL,s.yS,s.IY];function o({includeSqlRoutes:e=!0}={}){let a,t,d,l=(0,r.i)(),u=(0,i.Q)(),c=l?[...n]:[],_=(a=(0,r.i)(),t=(0,s.q5)(),d=[s.XM,t,s.sg],a?d:[s.XM]);return u&&c.push(s.S8),[...e?_:[],...c]}},589300:(e,a,t)=>{t.d(a,{Q:()=>i});var r=t(986784);function i(){return(0,r.i)()}},593771:(e,a,t)=>{t.d(a,{X:()=>n,k:()=>s});var r,i=t(846078),s=((r={}).HOME="lakeview.redirect.listing.filebrowser",r.NEW="lakeview.new",r.DASHBOARD="lakeview.dashboards.detail",r.PUBLISHED_DRAFT_REDIRECT="lakeview.dashboards.detail.redirect",r.PUBLISHED="lakeview.dashboards.published",r.PUBLISHED_PAGE_VIEW="lakeview.dashboards.published.page_view",r.PUBLISHED_SINGLE_PAGE_VIEW="lakeview.dashboards.published.single_page_view",r.SNAPSHOT="lakeview.dashboards.snapshot",r.SNAPSHOT_PAGE_VIEW="lakeview.dashboards.snapshot.page_view",r.SNAPSHOT_SINGLE_PAGE_VIEW="lakeview.dashboards.snapshot.single_page_view",r.DATASETS="lakeview.dashboards.datasets",r.DATASETS_DEFAULT="lakeview.dashboards.datasets.default",r.PAGES="lakeview.dashboards.pages",r.SINGLE_PAGE_VIEW="lakeview.dashboards.single_page_view",r.ACCOUNT_ONLY_USER_DASHBOARD_LIST="lakeview.dashboards.accountonlyuser.list",r.DATA_ROUTE_FOR_DATASETS_SEMANTIC_MODEL="lakeview.dashboards.datasets.or.semantic_model",r.SEMANTIC_MODEL_VIEW="lakeview.dashboards.semantic_model.view",r);let n={"lakeview.redirect.listing.filebrowser":i.LN,"lakeview.new":`${i.LN}/new`,"lakeview.dashboards.detail":`${i.LN}/:dashboardId`,"lakeview.dashboards.datasets.default":"datasets","lakeview.dashboards.datasets":"datasets/:datasetId","lakeview.dashboards.pages":"","lakeview.dashboards.single_page_view":"pages/:pageId","lakeview.dashboards.published":`${i.U1}/:dashboardId/published`,"lakeview.dashboards.published.single_page_view":"pages/:pageId","lakeview.dashboards.published.page_view":"","lakeview.dashboards.snapshot":`${i.U1}/:dashboardId/snapshot`,"lakeview.dashboards.snapshot.single_page_view":"pages/:pageId","lakeview.dashboards.snapshot.page_view":"","lakeview.dashboards.detail.redirect":`${i.U1}/:dashboardId`,"lakeview.dashboards.accountonlyuser.list":i.Vy,"lakeview.dashboards.datasets.or.semantic_model":"","lakeview.dashboards.semantic_model.view":"relationships"}},630482:(e,a,t)=>{t.d(a,{P:()=>s});var r=t(483588),i=t(901838);function s(){let e=(0,i.H)();if("UI"!==e.type)return{source:r.JMN.SOURCE_SCHEDULED_JOB};if(e.isEmbedded)return{source:r.JMN.SOURCE_EMBEDDED_UI,domain:e.domain};return{source:r.JMN.SOURCE_UI}}},646216:(e,a,t)=>{var r=t(610435),i=t(322435),s=t(500710),n=t.n(s),o=t(63837);["info","success","error","warn","warning","confirm"].forEach(e=>{i.A[e]=a=>{let t=n()(),{onCancel:s,onOk:d,content:l,...u}=a,c={onOk:(...e)=>{d?.(...e),_()},onCancel:(...e)=>{s?.(...e),_()},visible:!0,cancelButtonProps:{...u.cancelButtonProps,..."confirm"!==e&&{style:{display:"none"}}},children:l},_=()=>{o.q.set(t,(0,r.Y)(i.A,{...u,...c,visible:!1,afterClose:()=>{o.q.remove(t)}}))};return o.q.set(t,(0,r.Y)(i.A,{...u,...c})),{destroy:_,update:e=>{o.q.set(t,(0,r.Y)(i.A,{...u,...e,...c}))}}}})},812426:(e,a,t)=>{t.d(a,{IY:()=>N,S8:()=>C,XM:()=>I,eJ:()=>b,q5:()=>U,sL:()=>L,sg:()=>f,yS:()=>g});var r=t(342411),i=t(817148),s=t(22191),n=t(87221),o=t(774540),d=t(352954),l=t(593771),u=t(935376),c=t(630482),_=t(964015),p=t(436420),S=t(46471);let b=(0,r.zR)({id:"X2Hbtc",defaultMessage:"Dashboards"}),E=(0,o.e)(()=>(()=>{let e=()=>Promise.all([t.e(62280),t.e(62394),t.e(3752),t.e(67590),t.e(51545),t.e(6932),t.e(97768),t.e(24685),t.e(78580),t.e(55616),t.e(3330),t.e(92170),t.e(59316),t.e(44004),t.e(54511),t.e(159),t.e(32828),t.e(40972),t.e(35747),t.e(29580),t.e(92922),t.e(95470),t.e(74767),t.e(5400),t.e(84245),t.e(97421),t.e(37072),t.e(10596),t.e(63819),t.e(31083),t.e(11136),t.e(64898),t.e(97786),t.e(47017),t.e(78332),t.e(20689),t.e(67403),t.e(45893),t.e(10229),t.e(22249),t.e(51778),t.e(25556),t.e(19619),t.e(41614),t.e(14679),t.e(1650),t.e(77438),t.e(42797),t.e(356),t.e(83750),t.e(92480),t.e(47323),t.e(92792),t.e(63121),t.e(79832),t.e(65084),t.e(81647),t.e(8260),t.e(71046),t.e(71713),t.e(36176),t.e(46822),t.e(70510),t.e(37140),t.e(18080),t.e(89478),t.e(13915),t.e(50536),t.e(4340),t.e(75041),t.e(65421),t.e(66233),t.e(43883),t.e(69092),t.e(54588),t.e(54179),t.e(68792),t.e(22700),t.e(73719),t.e(21185),t.e(66591),t.e(11062),t.e(59014),t.e(39482),t.e(46724),t.e(54027),t.e(97946),t.e(25767)]).then(t.bind(t,823134));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(823134,"../ui/publish/subpage/pages/PagesPage","lazy",e);return e()})()),m=(0,o.e)(()=>(()=>{let e=()=>Promise.all([t.e(62280),t.e(62394),t.e(3752),t.e(32305),t.e(36993),t.e(67590),t.e(51545),t.e(6932),t.e(20022),t.e(18294),t.e(5033),t.e(1291),t.e(97768),t.e(24685),t.e(59276),t.e(99406),t.e(78580),t.e(55616),t.e(21234),t.e(3330),t.e(92170),t.e(59316),t.e(37797),t.e(11184),t.e(1990),t.e(44004),t.e(78632),t.e(52426),t.e(12514),t.e(39676),t.e(31813),t.e(51362),t.e(22886),t.e(26881),t.e(45854),t.e(159),t.e(72263),t.e(86412),t.e(32828),t.e(20556),t.e(40972),t.e(35747),t.e(29580),t.e(92922),t.e(6198),t.e(95470),t.e(5400),t.e(84245),t.e(97421),t.e(20806),t.e(37072),t.e(47404),t.e(10596),t.e(63819),t.e(60675),t.e(31083),t.e(11136),t.e(64898),t.e(89187),t.e(20805),t.e(97786),t.e(86107),t.e(47017),t.e(78332),t.e(13526),t.e(20689),t.e(67403),t.e(45893),t.e(10229),t.e(4256),t.e(22249),t.e(51778),t.e(98947),t.e(25556),t.e(9136),t.e(29488),t.e(19619),t.e(41614),t.e(14679),t.e(24325),t.e(1650),t.e(36537),t.e(93406),t.e(18164),t.e(42797),t.e(68775),t.e(11022),t.e(49029),t.e(10133),t.e(43927),t.e(18650),t.e(87122),t.e(12674),t.e(4828),t.e(84283),t.e(44341),t.e(98317),t.e(43587),t.e(35711),t.e(8089),t.e(23197),t.e(90489),t.e(64666),t.e(10095),t.e(30259),t.e(62621),t.e(45738),t.e(19604),t.e(13962),t.e(22831),t.e(80086),t.e(51818),t.e(87385),t.e(58415),t.e(356),t.e(1377),t.e(17292),t.e(34607),t.e(54694),t.e(65484),t.e(54894),t.e(79331),t.e(45524),t.e(83750),t.e(55851),t.e(70231),t.e(23145),t.e(14528),t.e(92480),t.e(47323),t.e(92792),t.e(59498),t.e(63121),t.e(13691),t.e(35094),t.e(97091),t.e(79832),t.e(56129),t.e(79637),t.e(65084),t.e(81647),t.e(8260),t.e(71046),t.e(71713),t.e(36176),t.e(46822),t.e(36921),t.e(62762),t.e(70510),t.e(11577),t.e(37140),t.e(18080),t.e(62707),t.e(48898),t.e(96931),t.e(89478),t.e(13915),t.e(50536),t.e(4340),t.e(60548),t.e(95150),t.e(2602),t.e(79547),t.e(84056),t.e(73306),t.e(83537),t.e(50621),t.e(43057),t.e(17456),t.e(57978),t.e(78284),t.e(75041),t.e(33584),t.e(7984),t.e(29672),t.e(65421),t.e(37445),t.e(78777),t.e(83147),t.e(80708),t.e(66233),t.e(91596),t.e(61399),t.e(41777),t.e(2701),t.e(69092),t.e(65620),t.e(93109),t.e(95541),t.e(54179),t.e(68792),t.e(22700),t.e(73719),t.e(6334),t.e(21185),t.e(66591),t.e(11062),t.e(60299),t.e(39886),t.e(21822),t.e(39482),t.e(25254),t.e(18906),t.e(45578),t.e(52070),t.e(6076),t.e(68014),t.e(71445),t.e(9765),t.e(78032),t.e(97946),t.e(99994),t.e(83222),t.e(85070)]).then(t.bind(t,666969));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(666969,"../ui/draft/subpage/pages/PagesPage","lazy",e);return e()})()),I={access:i.g3.DASHBOARDS,pageId:l.k.HOME,path:l.X[l.k.HOME],element:(0,o.e)(()=>(()=>{let e=()=>t.e(52291).then(t.bind(t,252291));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(252291,"./Lakeview","lazy",e);return e()})()),esComponent:s.Es.Lakeview},f={access:i.g3.DASHBOARDS_CREATE,pageId:l.k.NEW,path:l.X[l.k.NEW],element:(0,o.e)(()=>(()=>{let e=()=>Promise.all([t.e(62280),t.e(62394),t.e(59316),t.e(5400),t.e(63819),t.e(78332),t.e(45893),t.e(10229),t.e(76362),t.e(75041),t.e(8932)]).then(t.bind(t,370166));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(370166,"../ui/new","lazy",e);return e()})()),esComponent:s.Es.Lakeview},h={pageId:l.k.SNAPSHOT_SINGLE_PAGE_VIEW,path:l.X[l.k.SNAPSHOT_SINGLE_PAGE_VIEW],element:E,esComponent:s.Es.Lakeview,observability:{productEntityChain:[{productEntityType:n.Lm.LAKEVIEW_DASHBOARD,routeParamId:"dashboardId"}],urlParamTagMapping:{[_.B]:"fullscreenWidgetUrlParam"}}},T={pageId:l.k.SNAPSHOT_PAGE_VIEW,path:l.X[l.k.SNAPSHOT_PAGE_VIEW],element:E,esComponent:s.Es.Lakeview,observability:{productEntityChain:[{productEntityType:n.Lm.LAKEVIEW_DASHBOARD,routeParamId:"dashboardId"}],urlParamTagMapping:{[_.B]:"fullscreenWidgetUrlParam"}}},g={pageId:l.k.SNAPSHOT,path:l.X[l.k.SNAPSHOT],element:(0,o.e)(()=>(()=>{let e=()=>Promise.all([t.e(62280),t.e(62394),t.e(3752),t.e(36993),t.e(67590),t.e(51545),t.e(6932),t.e(97768),t.e(24685),t.e(78580),t.e(55616),t.e(3330),t.e(92170),t.e(59316),t.e(37797),t.e(44004),t.e(54511),t.e(159),t.e(32828),t.e(40972),t.e(35747),t.e(29580),t.e(92922),t.e(95470),t.e(74767),t.e(5400),t.e(84245),t.e(97421),t.e(37072),t.e(10596),t.e(63819),t.e(31083),t.e(11136),t.e(64898),t.e(97786),t.e(47017),t.e(78332),t.e(20689),t.e(67403),t.e(45893),t.e(10229),t.e(22249),t.e(51778),t.e(25556),t.e(19619),t.e(41614),t.e(14679),t.e(1650),t.e(46398),t.e(42797),t.e(356),t.e(83750),t.e(92480),t.e(47323),t.e(92792),t.e(63121),t.e(79832),t.e(65084),t.e(81647),t.e(8260),t.e(71046),t.e(71713),t.e(36176),t.e(46822),t.e(70510),t.e(37140),t.e(18080),t.e(89478),t.e(13915),t.e(50536),t.e(4340),t.e(75041),t.e(7984),t.e(65421),t.e(66233),t.e(43883),t.e(69092),t.e(54588),t.e(54179),t.e(68792),t.e(22700),t.e(73719),t.e(21185),t.e(66591),t.e(11062),t.e(59014),t.e(21822),t.e(39482),t.e(46724),t.e(12681),t.e(54027),t.e(90785),t.e(35941),t.e(62803),t.e(28629),t.e(4707)]).then(t.bind(t,604707));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(604707,"../ui/snapshot/DashboardSnapshotPage","lazy",e);return e()})()),esComponent:s.Es.Lakeview,children:[T,h]},A={pageId:l.k.PUBLISHED_SINGLE_PAGE_VIEW,path:l.X[l.k.PUBLISHED_SINGLE_PAGE_VIEW],element:E,esComponent:s.Es.Lakeview,observability:{productEntityChain:[{productEntityType:n.Lm.LAKEVIEW_DASHBOARD,routeParamId:"dashboardId"}],urlParamTagMapping:{[_.B]:"fullscreenWidgetUrlParam"}}},v={pageId:l.k.PUBLISHED_PAGE_VIEW,path:l.X[l.k.PUBLISHED_PAGE_VIEW],element:E,esComponent:s.Es.Lakeview,observability:{productEntityChain:[{productEntityType:n.Lm.LAKEVIEW_DASHBOARD,routeParamId:"dashboardId"}],urlParamTagMapping:{[_.B]:"fullscreenWidgetUrlParam"}}},L={pageId:l.k.PUBLISHED,path:l.X[l.k.PUBLISHED],element:(0,o.e)(()=>(()=>{let e=()=>Promise.all([t.e(62280),t.e(62394),t.e(3752),t.e(36993),t.e(67590),t.e(51545),t.e(6932),t.e(97768),t.e(24685),t.e(78580),t.e(55616),t.e(3330),t.e(92170),t.e(59316),t.e(37797),t.e(44004),t.e(54511),t.e(159),t.e(32828),t.e(40972),t.e(35747),t.e(29580),t.e(92922),t.e(95470),t.e(74767),t.e(5400),t.e(84245),t.e(97421),t.e(37072),t.e(10596),t.e(63819),t.e(31083),t.e(11136),t.e(64898),t.e(97786),t.e(47017),t.e(78332),t.e(20689),t.e(67403),t.e(45893),t.e(10229),t.e(22249),t.e(51778),t.e(25556),t.e(19619),t.e(41614),t.e(14679),t.e(1650),t.e(46398),t.e(42797),t.e(356),t.e(83750),t.e(92480),t.e(47323),t.e(92792),t.e(63121),t.e(79832),t.e(65084),t.e(81647),t.e(8260),t.e(71046),t.e(71713),t.e(36176),t.e(46822),t.e(70510),t.e(37140),t.e(18080),t.e(89478),t.e(13915),t.e(50536),t.e(4340),t.e(75041),t.e(7984),t.e(65421),t.e(66233),t.e(43883),t.e(69092),t.e(54588),t.e(54179),t.e(68792),t.e(22700),t.e(73719),t.e(21185),t.e(66591),t.e(11062),t.e(59014),t.e(21822),t.e(39482),t.e(46724),t.e(12681),t.e(54027),t.e(90785),t.e(35941),t.e(62803),t.e(28629),t.e(34618)]).then(t.bind(t,291871));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(291871,"../ui/publish/DashboardPublishPage","lazy",e);return e()})()),esComponent:s.Es.Lakeview,children:[v,A],prefetchQueries:[{query:u.s,variables:{}},{query:p.N,variables:{input:{name:(0,d.tR)("dashboardId",{prefix:"dashboards/"}),callerMetadata:(0,c.P)()}}}],prefetchEnabledFlag:"databricks.fe.redash.graphql.enablePrefetchQueries"},w={pageId:l.k.DATASETS,path:l.X[l.k.DATASETS],element:(0,o.e)(()=>(()=>{let e=()=>Promise.all([t.e(62280),t.e(62394),t.e(3752),t.e(32305),t.e(36993),t.e(67590),t.e(51545),t.e(6932),t.e(20022),t.e(18294),t.e(5033),t.e(1291),t.e(97768),t.e(24685),t.e(59276),t.e(99406),t.e(78580),t.e(55616),t.e(21234),t.e(3330),t.e(92170),t.e(59316),t.e(37797),t.e(11184),t.e(1990),t.e(44004),t.e(78632),t.e(52426),t.e(12514),t.e(39676),t.e(31813),t.e(51362),t.e(22886),t.e(26881),t.e(45854),t.e(159),t.e(72263),t.e(86412),t.e(32828),t.e(20556),t.e(40972),t.e(35747),t.e(29580),t.e(92922),t.e(6198),t.e(95470),t.e(5400),t.e(84245),t.e(97421),t.e(20806),t.e(37072),t.e(47404),t.e(10596),t.e(63819),t.e(60675),t.e(31083),t.e(11136),t.e(64898),t.e(89187),t.e(20805),t.e(97786),t.e(86107),t.e(47017),t.e(78332),t.e(13526),t.e(20689),t.e(67403),t.e(45893),t.e(10229),t.e(4256),t.e(22249),t.e(51778),t.e(98947),t.e(25556),t.e(9136),t.e(29488),t.e(19619),t.e(41614),t.e(14679),t.e(24325),t.e(1650),t.e(36537),t.e(93406),t.e(18164),t.e(42797),t.e(68775),t.e(11022),t.e(49029),t.e(10133),t.e(43927),t.e(18650),t.e(87122),t.e(12674),t.e(4828),t.e(84283),t.e(44341),t.e(98317),t.e(43587),t.e(35711),t.e(8089),t.e(23197),t.e(90489),t.e(64666),t.e(10095),t.e(30259),t.e(62621),t.e(45738),t.e(19604),t.e(13962),t.e(22831),t.e(80086),t.e(51818),t.e(87385),t.e(58415),t.e(356),t.e(1377),t.e(17292),t.e(34607),t.e(54694),t.e(65484),t.e(54894),t.e(79331),t.e(45524),t.e(83750),t.e(55851),t.e(70231),t.e(23145),t.e(14528),t.e(92480),t.e(47323),t.e(92792),t.e(59498),t.e(63121),t.e(13691),t.e(35094),t.e(97091),t.e(79832),t.e(56129),t.e(79637),t.e(65084),t.e(81647),t.e(8260),t.e(71046),t.e(71713),t.e(36176),t.e(46822),t.e(36921),t.e(62762),t.e(70510),t.e(11577),t.e(37140),t.e(18080),t.e(62707),t.e(48898),t.e(96931),t.e(89478),t.e(13915),t.e(50536),t.e(4340),t.e(60548),t.e(95150),t.e(2602),t.e(79547),t.e(84056),t.e(73306),t.e(83537),t.e(50621),t.e(43057),t.e(17456),t.e(57978),t.e(78284),t.e(75041),t.e(33584),t.e(7984),t.e(29672),t.e(65421),t.e(37445),t.e(78777),t.e(83147),t.e(80708),t.e(66233),t.e(91596),t.e(61399),t.e(41777),t.e(2701),t.e(69092),t.e(65620),t.e(93109),t.e(95541),t.e(54179),t.e(68792),t.e(22700),t.e(73719),t.e(6334),t.e(21185),t.e(66591),t.e(11062),t.e(60299),t.e(39886),t.e(21822),t.e(39482),t.e(25254),t.e(18906),t.e(45578),t.e(52070),t.e(6076),t.e(68014),t.e(71445),t.e(9765),t.e(78032),t.e(97946),t.e(99994),t.e(83222),t.e(85070)]).then(t.bind(t,181363));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(181363,"../ui/draft/subpage/datasets/DatasetsPage","lazy",e);return e()})()),esComponent:s.Es.Lakeview,observability:{productEntityChain:[{productEntityType:n.Lm.LAKEVIEW_DASHBOARD,routeParamId:"dashboardId"}]}},y={pageId:l.k.DATASETS_DEFAULT,path:l.X[l.k.DATASETS_DEFAULT],element:(0,o.e)(()=>(()=>{let e=()=>Promise.all([t.e(62280),t.e(62394),t.e(3752),t.e(32305),t.e(36993),t.e(67590),t.e(51545),t.e(6932),t.e(20022),t.e(18294),t.e(5033),t.e(1291),t.e(97768),t.e(24685),t.e(59276),t.e(99406),t.e(78580),t.e(55616),t.e(21234),t.e(3330),t.e(92170),t.e(59316),t.e(37797),t.e(11184),t.e(1990),t.e(44004),t.e(78632),t.e(52426),t.e(12514),t.e(39676),t.e(31813),t.e(51362),t.e(22886),t.e(26881),t.e(45854),t.e(159),t.e(72263),t.e(86412),t.e(32828),t.e(20556),t.e(40972),t.e(35747),t.e(29580),t.e(92922),t.e(6198),t.e(95470),t.e(5400),t.e(84245),t.e(97421),t.e(20806),t.e(37072),t.e(47404),t.e(10596),t.e(63819),t.e(60675),t.e(31083),t.e(11136),t.e(64898),t.e(89187),t.e(20805),t.e(86107),t.e(78332),t.e(13526),t.e(45893),t.e(10229),t.e(4256),t.e(22249),t.e(51778),t.e(98947),t.e(25556),t.e(9136),t.e(29488),t.e(19619),t.e(41614),t.e(14679),t.e(24325),t.e(36537),t.e(93406),t.e(18824),t.e(42797),t.e(68775),t.e(11022),t.e(49029),t.e(10133),t.e(43927),t.e(18650),t.e(87122),t.e(12674),t.e(4828),t.e(84283),t.e(44341),t.e(98317),t.e(43587),t.e(35711),t.e(8089),t.e(23197),t.e(90489),t.e(64666),t.e(10095),t.e(30259),t.e(62621),t.e(45738),t.e(19604),t.e(13962),t.e(22831),t.e(80086),t.e(51818),t.e(87385),t.e(58415),t.e(356),t.e(1377),t.e(17292),t.e(34607),t.e(54694),t.e(65484),t.e(54894),t.e(79331),t.e(45524),t.e(83750),t.e(55851),t.e(70231),t.e(23145),t.e(14528),t.e(92480),t.e(47323),t.e(92792),t.e(59498),t.e(63121),t.e(13691),t.e(35094),t.e(97091),t.e(79832),t.e(56129),t.e(79637),t.e(65084),t.e(81647),t.e(8260),t.e(71046),t.e(71713),t.e(36176),t.e(46822),t.e(36921),t.e(62762),t.e(70510),t.e(11577),t.e(37140),t.e(18080),t.e(62707),t.e(48898),t.e(96931),t.e(89478),t.e(13915),t.e(50536),t.e(4340),t.e(60548),t.e(95150),t.e(2602),t.e(79547),t.e(84056),t.e(73306),t.e(83537),t.e(50621),t.e(43057),t.e(17456),t.e(57978),t.e(78284),t.e(75041),t.e(33584),t.e(7984),t.e(29672),t.e(65421),t.e(37445),t.e(78777),t.e(83147),t.e(80708),t.e(66233),t.e(91596),t.e(61399),t.e(41777),t.e(2701),t.e(69092),t.e(65620),t.e(93109),t.e(95541),t.e(54179),t.e(68792),t.e(22700),t.e(73719),t.e(6334),t.e(11062),t.e(60299),t.e(39886),t.e(21822),t.e(25254),t.e(18906),t.e(45578),t.e(52070),t.e(6076),t.e(68014),t.e(71445),t.e(9765),t.e(78032),t.e(99994),t.e(61929)]).then(t.bind(t,382122));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(382122,"../ui/draft/subpage/datasets/DatasetsDefaultPage","lazy",e);return e()})()),esComponent:s.Es.Lakeview,observability:{productEntityChain:[{productEntityType:n.Lm.LAKEVIEW_DASHBOARD,routeParamId:"dashboardId"}]}},k={pageId:l.k.PAGES,path:l.X[l.k.PAGES],element:m,esComponent:s.Es.Lakeview,observability:{productEntityChain:[{productEntityType:n.Lm.LAKEVIEW_DASHBOARD,routeParamId:"dashboardId"}]}},D={pageId:l.k.SINGLE_PAGE_VIEW,path:l.X[l.k.SINGLE_PAGE_VIEW],element:m,esComponent:s.Es.Lakeview,observability:{productEntityChain:[{productEntityType:n.Lm.LAKEVIEW_DASHBOARD,routeParamId:"dashboardId"}]}},R={pageId:l.k.DATASETS,path:l.X[l.k.DATASETS],element:(0,o.e)(()=>(()=>{let e=()=>Promise.all([t.e(62280),t.e(62394),t.e(3752),t.e(32305),t.e(36993),t.e(67590),t.e(51545),t.e(6932),t.e(20022),t.e(18294),t.e(5033),t.e(1291),t.e(97768),t.e(24685),t.e(59276),t.e(99406),t.e(78580),t.e(55616),t.e(21234),t.e(3330),t.e(92170),t.e(59316),t.e(37797),t.e(11184),t.e(1990),t.e(44004),t.e(78632),t.e(52426),t.e(12514),t.e(39676),t.e(31813),t.e(51362),t.e(22886),t.e(26881),t.e(45854),t.e(159),t.e(72263),t.e(86412),t.e(32828),t.e(20556),t.e(40972),t.e(35747),t.e(29580),t.e(92922),t.e(6198),t.e(95470),t.e(5400),t.e(84245),t.e(97421),t.e(20806),t.e(37072),t.e(47404),t.e(10596),t.e(63819),t.e(60675),t.e(31083),t.e(11136),t.e(64898),t.e(89187),t.e(20805),t.e(97786),t.e(86107),t.e(47017),t.e(78332),t.e(13526),t.e(20689),t.e(67403),t.e(45893),t.e(10229),t.e(4256),t.e(22249),t.e(51778),t.e(98947),t.e(25556),t.e(9136),t.e(29488),t.e(19619),t.e(41614),t.e(14679),t.e(24325),t.e(1650),t.e(36537),t.e(93406),t.e(18164),t.e(42797),t.e(68775),t.e(11022),t.e(49029),t.e(10133),t.e(43927),t.e(18650),t.e(87122),t.e(12674),t.e(4828),t.e(84283),t.e(44341),t.e(98317),t.e(43587),t.e(35711),t.e(8089),t.e(23197),t.e(90489),t.e(64666),t.e(10095),t.e(30259),t.e(62621),t.e(45738),t.e(19604),t.e(13962),t.e(22831),t.e(80086),t.e(51818),t.e(87385),t.e(58415),t.e(356),t.e(1377),t.e(17292),t.e(34607),t.e(54694),t.e(65484),t.e(54894),t.e(79331),t.e(45524),t.e(83750),t.e(55851),t.e(70231),t.e(23145),t.e(14528),t.e(92480),t.e(47323),t.e(92792),t.e(59498),t.e(63121),t.e(13691),t.e(35094),t.e(97091),t.e(79832),t.e(56129),t.e(79637),t.e(65084),t.e(81647),t.e(8260),t.e(71046),t.e(71713),t.e(36176),t.e(46822),t.e(36921),t.e(62762),t.e(70510),t.e(11577),t.e(37140),t.e(18080),t.e(62707),t.e(48898),t.e(96931),t.e(89478),t.e(13915),t.e(50536),t.e(4340),t.e(60548),t.e(95150),t.e(2602),t.e(79547),t.e(84056),t.e(73306),t.e(83537),t.e(50621),t.e(43057),t.e(17456),t.e(57978),t.e(78284),t.e(75041),t.e(33584),t.e(7984),t.e(29672),t.e(65421),t.e(37445),t.e(78777),t.e(83147),t.e(80708),t.e(66233),t.e(91596),t.e(61399),t.e(41777),t.e(2701),t.e(69092),t.e(65620),t.e(93109),t.e(95541),t.e(54179),t.e(68792),t.e(22700),t.e(73719),t.e(6334),t.e(21185),t.e(66591),t.e(11062),t.e(60299),t.e(39886),t.e(21822),t.e(39482),t.e(25254),t.e(18906),t.e(45578),t.e(52070),t.e(6076),t.e(68014),t.e(71445),t.e(9765),t.e(78032),t.e(97946),t.e(99994),t.e(83222),t.e(85070)]).then(t.bind(t,216827));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(216827,"../ui/draft/subpage/datasets/DatasetsResultsPage","lazy",e);return e()})()),esComponent:s.Es.Lakeview,observability:{productEntityChain:[{productEntityType:n.Lm.LAKEVIEW_DASHBOARD,routeParamId:"dashboardId"}]}},P={pageId:l.k.DATASETS_DEFAULT,path:l.X[l.k.DATASETS_DEFAULT],element:(0,o.e)(()=>(()=>{let e=()=>Promise.all([t.e(62280),t.e(62394),t.e(3752),t.e(32305),t.e(36993),t.e(67590),t.e(51545),t.e(6932),t.e(20022),t.e(18294),t.e(5033),t.e(1291),t.e(97768),t.e(24685),t.e(59276),t.e(99406),t.e(78580),t.e(55616),t.e(21234),t.e(3330),t.e(92170),t.e(59316),t.e(37797),t.e(11184),t.e(1990),t.e(44004),t.e(78632),t.e(52426),t.e(12514),t.e(39676),t.e(31813),t.e(51362),t.e(22886),t.e(26881),t.e(45854),t.e(159),t.e(72263),t.e(86412),t.e(32828),t.e(20556),t.e(40972),t.e(35747),t.e(29580),t.e(92922),t.e(6198),t.e(95470),t.e(5400),t.e(84245),t.e(97421),t.e(20806),t.e(37072),t.e(47404),t.e(10596),t.e(63819),t.e(60675),t.e(31083),t.e(11136),t.e(64898),t.e(89187),t.e(20805),t.e(86107),t.e(78332),t.e(13526),t.e(45893),t.e(10229),t.e(4256),t.e(22249),t.e(51778),t.e(98947),t.e(25556),t.e(9136),t.e(29488),t.e(19619),t.e(41614),t.e(14679),t.e(24325),t.e(36537),t.e(93406),t.e(42797),t.e(68775),t.e(11022),t.e(49029),t.e(10133),t.e(43927),t.e(18650),t.e(87122),t.e(12674),t.e(4828),t.e(84283),t.e(44341),t.e(98317),t.e(43587),t.e(35711),t.e(8089),t.e(23197),t.e(90489),t.e(64666),t.e(10095),t.e(30259),t.e(62621),t.e(45738),t.e(19604),t.e(13962),t.e(22831),t.e(80086),t.e(51818),t.e(87385),t.e(58415),t.e(356),t.e(1377),t.e(17292),t.e(34607),t.e(54694),t.e(65484),t.e(54894),t.e(79331),t.e(45524),t.e(83750),t.e(55851),t.e(70231),t.e(23145),t.e(14528),t.e(92480),t.e(47323),t.e(92792),t.e(59498),t.e(63121),t.e(13691),t.e(35094),t.e(97091),t.e(79832),t.e(56129),t.e(79637),t.e(65084),t.e(81647),t.e(8260),t.e(71046),t.e(71713),t.e(36176),t.e(46822),t.e(36921),t.e(62762),t.e(70510),t.e(11577),t.e(37140),t.e(18080),t.e(62707),t.e(48898),t.e(96931),t.e(89478),t.e(13915),t.e(50536),t.e(4340),t.e(60548),t.e(95150),t.e(2602),t.e(79547),t.e(84056),t.e(73306),t.e(83537),t.e(50621),t.e(43057),t.e(17456),t.e(57978),t.e(78284),t.e(75041),t.e(33584),t.e(7984),t.e(29672),t.e(65421),t.e(37445),t.e(78777),t.e(83147),t.e(80708),t.e(66233),t.e(91596),t.e(61399),t.e(41777),t.e(2701),t.e(69092),t.e(65620),t.e(93109),t.e(95541),t.e(54179),t.e(68792),t.e(22700),t.e(73719),t.e(6334),t.e(11062),t.e(60299),t.e(39886),t.e(21822),t.e(25254),t.e(18906),t.e(45578),t.e(52070),t.e(6076),t.e(68014),t.e(71445),t.e(9765),t.e(78032),t.e(99994),t.e(78193)]).then(t.bind(t,216827));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(216827,"../ui/draft/subpage/datasets/DatasetsResultsPage","lazy",e);return e()})()),esComponent:s.Es.Lakeview,observability:{productEntityChain:[{productEntityType:n.Lm.LAKEVIEW_DASHBOARD,routeParamId:"dashboardId"}]}},q={pageId:l.k.SEMANTIC_MODEL_VIEW,path:l.X[l.k.SEMANTIC_MODEL_VIEW],element:(0,o.e)(()=>(()=>{let e=()=>Promise.all([t.e(62280),t.e(62394),t.e(3752),t.e(67590),t.e(6932),t.e(20022),t.e(18294),t.e(97768),t.e(24685),t.e(59276),t.e(99406),t.e(78580),t.e(55616),t.e(21234),t.e(3330),t.e(92170),t.e(59316),t.e(1990),t.e(44004),t.e(78632),t.e(39676),t.e(31813),t.e(54511),t.e(159),t.e(32828),t.e(40972),t.e(35747),t.e(29580),t.e(92922),t.e(5400),t.e(84245),t.e(97421),t.e(37072),t.e(63819),t.e(60675),t.e(31083),t.e(11136),t.e(64898),t.e(78332),t.e(45893),t.e(10229),t.e(22249),t.e(51778),t.e(25556),t.e(19619),t.e(41614),t.e(14679),t.e(93406),t.e(53284),t.e(68775),t.e(43927),t.e(18650),t.e(87122),t.e(12674),t.e(4828),t.e(43587),t.e(64666),t.e(356),t.e(83750),t.e(92480),t.e(47323),t.e(92792),t.e(63121),t.e(79832),t.e(65084),t.e(81647),t.e(8260),t.e(71046),t.e(71713),t.e(36176),t.e(46822),t.e(62762),t.e(37140),t.e(18080),t.e(89478),t.e(13915),t.e(50536),t.e(4340),t.e(84056),t.e(73306),t.e(43057),t.e(75041),t.e(29672),t.e(65421),t.e(66233),t.e(69092),t.e(54179),t.e(68792),t.e(22700),t.e(73719),t.e(21822),t.e(45578),t.e(71445),t.e(34768),t.e(71915)]).then(t.bind(t,10946));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(10946,"../ui/draft/subpage/SemanticModelPage/SemanticModelPage","lazy",e);return e()})()),esComponent:s.Es.Lakeview},O={pageId:l.k.DATA_ROUTE_FOR_DATASETS_SEMANTIC_MODEL,path:"",element:(0,o.e)(()=>(()=>{let e=()=>Promise.all([t.e(62280),t.e(62394),t.e(3752),t.e(32305),t.e(36993),t.e(67590),t.e(51545),t.e(6932),t.e(20022),t.e(18294),t.e(5033),t.e(1291),t.e(97768),t.e(24685),t.e(59276),t.e(99406),t.e(78580),t.e(55616),t.e(21234),t.e(3330),t.e(92170),t.e(59316),t.e(37797),t.e(11184),t.e(1990),t.e(44004),t.e(78632),t.e(52426),t.e(12514),t.e(39676),t.e(31813),t.e(51362),t.e(22886),t.e(26881),t.e(45854),t.e(159),t.e(72263),t.e(86412),t.e(32828),t.e(20556),t.e(40972),t.e(35747),t.e(29580),t.e(92922),t.e(6198),t.e(95470),t.e(5400),t.e(84245),t.e(97421),t.e(20806),t.e(37072),t.e(47404),t.e(10596),t.e(63819),t.e(60675),t.e(31083),t.e(11136),t.e(64898),t.e(89187),t.e(20805),t.e(97786),t.e(86107),t.e(47017),t.e(78332),t.e(13526),t.e(20689),t.e(67403),t.e(45893),t.e(10229),t.e(4256),t.e(22249),t.e(51778),t.e(98947),t.e(25556),t.e(9136),t.e(29488),t.e(19619),t.e(41614),t.e(14679),t.e(24325),t.e(1650),t.e(36537),t.e(93406),t.e(18164),t.e(42797),t.e(68775),t.e(11022),t.e(49029),t.e(10133),t.e(43927),t.e(18650),t.e(87122),t.e(12674),t.e(4828),t.e(84283),t.e(44341),t.e(98317),t.e(43587),t.e(35711),t.e(8089),t.e(23197),t.e(90489),t.e(64666),t.e(10095),t.e(30259),t.e(62621),t.e(45738),t.e(19604),t.e(13962),t.e(22831),t.e(80086),t.e(51818),t.e(87385),t.e(58415),t.e(356),t.e(1377),t.e(17292),t.e(34607),t.e(54694),t.e(65484),t.e(54894),t.e(79331),t.e(45524),t.e(83750),t.e(55851),t.e(70231),t.e(23145),t.e(14528),t.e(92480),t.e(47323),t.e(92792),t.e(59498),t.e(63121),t.e(13691),t.e(35094),t.e(97091),t.e(79832),t.e(56129),t.e(79637),t.e(65084),t.e(81647),t.e(8260),t.e(71046),t.e(71713),t.e(36176),t.e(46822),t.e(36921),t.e(62762),t.e(70510),t.e(11577),t.e(37140),t.e(18080),t.e(62707),t.e(48898),t.e(96931),t.e(89478),t.e(13915),t.e(50536),t.e(4340),t.e(60548),t.e(95150),t.e(2602),t.e(79547),t.e(84056),t.e(73306),t.e(83537),t.e(50621),t.e(43057),t.e(17456),t.e(57978),t.e(78284),t.e(75041),t.e(33584),t.e(7984),t.e(29672),t.e(65421),t.e(37445),t.e(78777),t.e(83147),t.e(80708),t.e(66233),t.e(91596),t.e(61399),t.e(41777),t.e(2701),t.e(69092),t.e(65620),t.e(93109),t.e(95541),t.e(54179),t.e(68792),t.e(22700),t.e(73719),t.e(6334),t.e(21185),t.e(66591),t.e(11062),t.e(60299),t.e(39886),t.e(21822),t.e(39482),t.e(25254),t.e(18906),t.e(45578),t.e(52070),t.e(6076),t.e(68014),t.e(71445),t.e(9765),t.e(78032),t.e(97946),t.e(99994),t.e(83222),t.e(85070)]).then(t.bind(t,525325));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(525325,"../ui/draft/subpage/data/DataPage","lazy",e);return e()})()),esComponent:s.Es.Lakeview,children:[q,P,R]},N={pageId:l.k.PUBLISHED_DRAFT_REDIRECT,path:l.X[l.k.PUBLISHED_DRAFT_REDIRECT],element:(0,o.e)(()=>(()=>{let e=()=>Promise.all([t.e(62280),t.e(54059)]).then(t.bind(t,254059));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(254059,"./components/DashboardDraftRedirect","lazy",e);return e()})()),esComponent:s.Es.Lakeview,observability:{productEntityChain:[{productEntityType:n.Lm.LAKEVIEW_DASHBOARD,routeParamId:"dashboardId"}]}},C={pageId:l.k.ACCOUNT_ONLY_USER_DASHBOARD_LIST,path:l.X[l.k.ACCOUNT_ONLY_USER_DASHBOARD_LIST],element:(0,o.e)(()=>(()=>{let e=()=>Promise.all([t.e(62280),t.e(62394),t.e(67590),t.e(51545),t.e(20022),t.e(5033),t.e(97768),t.e(59794),t.e(78580),t.e(3330),t.e(59316),t.e(54511),t.e(5400),t.e(63819),t.e(78332),t.e(45893),t.e(10229),t.e(3711),t.e(11925),t.e(42797),t.e(49029),t.e(10133),t.e(356),t.e(99918),t.e(5830),t.e(3341),t.e(73208),t.e(42934),t.e(70510),t.e(11577),t.e(62707),t.e(96931),t.e(75041),t.e(7984),t.e(13199),t.e(35814),t.e(11926),t.e(46596),t.e(26861),t.e(21055)]).then(t.bind(t,389343));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(389343,"../ui/account-only-user-view/AccountOnlyUserDashboardListPage","lazy",e);return e()})()),esComponent:s.Es.Lakeview};function U(){let e=[y,w,k,D];return(0,S._)()&&(e=[k,D,O]),{access:i.g3.DASHBOARDS_EDIT,pageId:l.k.DASHBOARD,path:l.X[l.k.DASHBOARD],element:(0,o.e)(()=>(()=>{let e=()=>Promise.all([t.e(62280),t.e(62394),t.e(3752),t.e(67590),t.e(6932),t.e(97768),t.e(24685),t.e(55616),t.e(3330),t.e(92170),t.e(59316),t.e(44004),t.e(54511),t.e(159),t.e(32828),t.e(40972),t.e(29580),t.e(92922),t.e(74767),t.e(5400),t.e(84245),t.e(97421),t.e(63819),t.e(31083),t.e(11136),t.e(64898),t.e(78332),t.e(45893),t.e(10229),t.e(83750),t.e(92480),t.e(47323),t.e(92792),t.e(63121),t.e(79832),t.e(65084),t.e(81647),t.e(8260),t.e(71046),t.e(71713),t.e(36176),t.e(46822),t.e(37140),t.e(89478),t.e(13915),t.e(50536),t.e(4340),t.e(75041),t.e(34768),t.e(31780)]).then(t.bind(t,485020));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(485020,"../ui/draft/DashboardPage","lazy",e);return e()})()),esComponent:s.Es.Lakeview,children:e}}},846078:(e,a,t)=>{t.d(a,{Ax:()=>b,JQ:()=>E,KD:()=>S,LH:()=>f,LN:()=>s,NP:()=>p,U1:()=>i,V1:()=>c,Vy:()=>n,ci:()=>u,g3:()=>d,gt:()=>I,oB:()=>m,vz:()=>_,wE:()=>l});let r="/embed/dashboardsv3",i="/dashboardsv3",s=`/sql${i}`,n="/dashboards";function o(e){if(e.startsWith("dashboards/"))return e.split("/").slice(1).join("/");return e}function d(e,a){let t=a.replace(e,"");return`${s}/${o(e)}${t}`}function l(e){return`${s}/${o(e)}`}function u(e){return`${i}/${o(e)}/published`}function c(e,a){let t=a.replace(e,"");return`${i}/${o(e)}/published${t}`}function _(e){return u(e)}function p(e,a){let t=a.replace(e,"");return`${i}/${o(e)}/snapshot${t}`}function S(e){return`${i}/${o(e)}/snapshot`}function b(){return`${s}/new`}function E(e,a){let t=a.replace(e,"");return`${r}/${o(e)}${t}`}function m(e){return`${r}/${o(e)}`}function I(e){return e.includes(i)}function f(e){return e.includes(s)}},901838:(e,a,t)=>{t.d(a,{H:()=>l});var r=t(441535),i=t(846078),s=t(737358),n=t(201927);let o=()=>{let e=new URLSearchParams(window.location.search).get("scheduleName")??void 0,a=Number(new URLSearchParams(window.location.search).get("jobId")??void 0),t=Number(new URLSearchParams(window.location.search).get("runId")??void 0),o=!!(0,s.B6)(`${i.U1}/:dashboardId/snapshot/*`,window.location.pathname);if(void 0!==e)return{type:"Subscription",scheduleName:e,jobId:isNaN(a)?void 0:a,runId:isNaN(t)?void 0:t};{if(o)return{type:"Snapshot",jobId:isNaN(a)?void 0:a,runId:isNaN(t)?void 0:t};let e=(0,n.G)()&&window.location.pathname.startsWith("/embed/");return{type:"UI",isEmbedded:e,get domain(){return e?function(){try{let e=new URL(document.referrer).hostname??"",a=(0,r.W)("databricks.fe.lakeview.recordableEmbeddedUIDomainsForAudit","");if(!a)return;let t=JSON.parse(a).map(e=>RegExp(`\\b${e}\\b`,"i")).find(a=>a.test(e));return t?t.source.replace(/\\b/g,""):void 0}catch{return}}():void 0}}}},d=o();function l(e,a){let t=e?o():d;if(a)return{...t,traceSpan:a};return t}},917950:(e,a,t)=>{t.d(a,{A:()=>i});var r=t(513384);function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?Object(arguments[a]):{},i=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&i.push.apply(i,Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.forEach(function(a){(0,r.A)(e,a,t[a])})}return e}},943336:(e,a,t)=>{t.d(a,{R:()=>l});var r=t(692738),i=t(441535),s=t(940912),n=t(967166),o=t(87221),d=t(327152);let l=e=>{let a=e?.ref,t=e?.disabled,l=(0,n.hG)(),u=(0,r.useCallback)(e=>a=>{var t;a.stopPropagation();let{pageId:r,pageViewId:s}=(0,d.t)()??{pageId:"",pageViewId:""},[n,u]=(0,i.W)("databricks.fe.observability.enableClipboardAnalyticsParentWalk",!0)?function(e){let a=e,t=0;for(;a&&t<50;){let e=a.dataset?.componentType,r=a.dataset?.componentId;if(e&&r)return[e,r];a=a.parentElement,t++}return[void 0,void 0]}(a.target):(t=a.target,[t?.dataset?.componentType,t?.dataset?.componentId]);(0,o.s_)(l,{eventType:e,eventPayload:{interactionSubject:!0,referrerEntity:n&&u?{entityType:"component",entitySubType:n,entityId:u}:void 0},eventEntity:{entityType:"page",entitySubType:void 0,entityId:r,entityViewId:s},eventClientSource:"unified_router"})},[l]);(0,r.useEffect)(()=>{if(t)return;if(a&&!a.current)throw Error("useSetupClipboardObserver was called with an empty ref");let e=a?.current??document,r=(0,s.yB)(),i=r.wrap(u("page_clipboard_cut"));e.addEventListener("cut",i);let n=r.wrap(u("page_clipboard_copy"));e.addEventListener("copy",n);let o=r.wrap(u("page_clipboard_paste"));return e.addEventListener("paste",o),()=>{e.removeEventListener("cut",i),e.removeEventListener("copy",n),e.removeEventListener("paste",o)}},[u,l,a,t])}},956578:(e,a,t)=>{t.d(a,{l:()=>A});var r=t(610435);t(111671),t(646216);var i=t(692738),s=t(923305),n=t(403286),o=t(6e4),d=t(402217),l=t(258182),u=t(441535),c=t(943336),_=t(110253),p=t(959240),S=t(535936),b=t(984251),E=t(702465),m=t(464782),I=t(624704);let f={init(){window.addEventListener("offline",()=>{I.A.warning("Please check your Internet connection",null,{key:"connectionNotification",duration:null}),window.addEventListener("online",function e(){I.A.close("connectionNotification"),window.removeEventListener("online",e)})})}};function h({basePrefix:e,enableNavigationIntent:a,legacyRoutes:t,routes:s,updateRouterMetadata:n,routerMetadata:o}){return(0,i.useEffect)(()=>{f.init()},[]),(0,r.Y)(E.GF,{children:(0,r.Y)(m.x,{basePrefix:e,enableNavigationIntent:a,legacyRoutes:t,routes:s,updateRouterMetadata:n,routerMetadata:o})})}let T=i.lazy(()=>(()=>{let e=()=>Promise.all([t.e(62280),t.e(54497),t.e(33764),t.e(78277),t.e(36993),t.e(59276),t.e(59794),t.e(44004),t.e(159),t.e(20556),t.e(74767),t.e(78756),t.e(89187),t.e(81318),t.e(47589),t.e(70419),t.e(46184),t.e(14243),t.e(88591),t.e(47323),t.e(92792),t.e(63121),t.e(79832),t.e(36921),t.e(37140),t.e(82031),t.e(42272),t.e(11798),t.e(87828),t.e(83885)]).then(t.bind(t,887496));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(887496,"@databricks/dbsql/src/app/config","lazy",e);return e()})().then(()=>({default:()=>null})));function g({children:e}){if((0,u.W)("databricks.fe.dbsqlx.skipConfigLoading",!1))return(0,r.Y)(r.FK,{children:e});return(0,r.FD)(p.t,{fallback:null,children:[(0,r.Y)(T,{}),e]})}function A({basePrefix:e=(0,s.DT)(),enableNavigationIntent:a,legacyRoutes:t=d.Ay,routes:u=[]}){let p=(0,b.i)(e,u,t.items),E=(0,i.useCallback)((e,{pageId:a})=>{let t=e?.pageId,r=e=>Object.values(n.CN).includes(e);if(void 0!==t&&r(t)&&r(a))return!1;return!0},[]),{routerInteraction:m,updateRouterMetadata:I,routerMetadata:f}=(0,S.q)(p,o.b6,E);return(0,c.R)(),(0,r.Y)(g,{children:(0,r.Y)(l.Provider,{children:(0,r.FD)("div",{id:"dbsql-app-root",className:"dbsql-ui-container","data-heap-redact-attributes":"aria-label,data-testid,title",children:[(0,r.Y)(_.ci,{interaction:m,enabled:!0,children:(0,r.Y)(h,{basePrefix:e,enableNavigationIntent:a,legacyRoutes:t,routes:u,updateRouterMetadata:I,routerMetadata:f})}),(0,r.Y)(l.Viewport,{})]})})})}},964015:(e,a,t)=>{t.d(a,{B:()=>r});let r="fullscreenWidget"}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/69258.d8484ca14d.chunk.js.map