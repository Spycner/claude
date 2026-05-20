"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[23820,30355,74052,75343],{1459:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(610435),n=a(692738),i=a(375214);function l(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M0 2.75A.75.75 0 0 1 .75 2h3.922c.729 0 1.428.29 1.944.805L7.811 4h7.439a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1-.75-.75zm1.5.75v9h13v-7h-7a.75.75 0 0 1-.53-.22L5.555 3.866a1.25 1.25 0 0 0-.883-.366z",clipRule:"evenodd"})})}let o=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:l}));o.displayName="FolderIcon";let s=o},24027:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(610435),n=a(692738),i=a(375214);function l(e){return(0,r.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.03 3.5A4.516 4.516 0 0 0 6.115 5H2.373l2.975 3.5h8.28l-.637-.752c.42-.28.79-.628 1.095-1.028l1.737 2.044A.751.751 0 0 1 15.252 10h-1.78l2.351 2.764A.75.75 0 0 1 15.252 14H5.002a.75.75 0 0 1-.571-.264l-4.252-5A.75.75 0 0 1 .749 7.5h1.78L.18 4.736A.752.752 0 0 1 .749 3.5zM2.373 9l2.975 3.5h8.28L11.504 10H5.002a.75.75 0 0 1-.571-.264L3.805 9z",clipRule:"evenodd"}),(0,r.Y)("path",{fill:"currentColor",d:"M10.5.5c.426 0 .79.306.863.725l.178 1.023a.875.875 0 0 0 .712.712l1.023.178a.875.875 0 0 1 0 1.724l-1.023.178a.875.875 0 0 0-.712.712l-.178 1.023a.875.875 0 0 1-1.724 0L9.46 5.752a.875.875 0 0 0-.712-.712l-1.023-.178a.876.876 0 0 1 0-1.724L8.75 2.96a.875.875 0 0 0 .712-.712l.178-1.023A.876.876 0 0 1 10.5.5"})]})}let o=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:l}));o.displayName="CustomAppIcon";let s=o},96437:(e,t,a)=>{a.d(t,{F0:()=>o,OU:()=>s,TS:()=>n.TS,c2:()=>c,kW:()=>d,lD:()=>i,nk:()=>n.nk,sN:()=>l});var r=a(141078),n=a(246635);let i=(0,r.J1)`
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
`,l=(0,r.J1)`
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
`,o=(0,r.J1)`
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
`,s=(0,r.J1)`
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
`,d=(0,r.J1)`
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
  ${l}
  ${s}
  ${o}
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
`},142807:(e,t,a)=>{a.r(t),a.d(t,{RouteComponent:()=>M});var r=a(610435),n=a(692738),i=a(280465),l=a(754546),o=a(342411),s=a(483588),d=a(115957),c=a(817148),u=a(620275),A=a(726977),f=a(22191),p=a(829339),E=a(771994),m=a(430604),S=a(417958),g=a(942678),_=a(630085),h=a(564468);function T(e,t,a,r,n,i,l){try{var o=e[i](l),s=o.value}catch(e){a(e);return}o.done?t(s):Promise.resolve(s).then(r,n)}function I(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function l(e){T(i,r,n,l,o,"next",e)}function o(e){T(i,r,n,l,o,"throw",e)}l(void 0)})}}let R=()=>Promise.resolve(),C=[s.noI.SCORE,s.noI.NAME,s.noI.UPDATED_AT];function v(){let e=(0,h.KK)(),t=(0,n.useRef)(),[a,r]=(0,n.useState)(!1),i=(0,_.IB)({numResults:20,skip:!a,assetTypes:[s.z$1.DASHBOARD_V3]}),l=i.assets.map(e=>e.id).join(","),o=(0,n.useMemo)(()=>""===l?[]:l.split(","),[l]),d=e.performSearch,c=(0,n.useCallback)(e=>I(function*(){t.current=e;let{isPopular:a,...n}=e.filters??{},i=!0===a;if(r(i),i){if(0===o.length)return;return d({...e,filters:{...n,ids:o}})}return d({...e,filters:n})})(),[o,d]);(0,n.useLayoutEffect)(()=>{let e=t.current;if(!e)return;let{isPopular:a,...r}=e.filters??{},n=""===l?[]:l.split(",");!0===a&&n.length>0?d({...e,filters:{...r,ids:n}}):!0!==a&&d({...e,filters:r})},[l,d]);let u=i.isLoading||o.length>0&&(e.loading||void 0===e.searchId),A=(0,n.useMemo)(()=>{if(!a)return e.results;if(u||0===o.length)return[];return e.results},[a,u,e.results,o]),[f,p]=(0,n.useState)(!1),E=e.fetchMore,m=(0,n.useCallback)(()=>I(function*(){p(!0);try{yield E()}finally{p(!1)}})(),[E]),S=a?u:e.loading||f;return{...e,results:A,performSearch:c,loading:S,hasMore:!a&&e.hasMore,fetchMore:a?R:m,disablePagination:a,supportedSortCriteria:a?[]:C}}let O={criteria:s.noI.UPDATED_AT,ascending:!1},N=()=>["name","tags","owner","modified_date"],U=["popular"],L=()=>{let e=(0,o.tz)(),t=e.formatMessage({id:"51RnN0",defaultMessage:"Dashboards"});(0,p.r)({title:t});let a=e.formatMessage(g.c.allDashboards),n=e.formatMessage(g.c.filteredDashboards),s=(0,u.s4)(),_=(0,d.zl)(c.g3.DASHBOARDS_CREATE)&&!s;return(0,r.Y)(m.O,{title:t,searchHook:v,defaultResultsTitle:a,filteredResultsTitle:n,suggestedAssets:"until-query-or-filter",lockedSearchTypeGroup:E.An.DASHBOARD,defaultResultView:S.TF.LIST,storageKeyPrefix:"dashboards",persistFilters:!0,defaultSortOrder:O,defaultVisibleColumns:N,errorBoundaryId:A.s.LakeviewDashboardsListPage,esComponent:f.Es.SearchUI,extraQuickFilterIds:U,headerActions:_?[i.iS,(0,r.Y)(l.B,{activeDashboardListTab:i.hi.LAKEVIEW,type:"primary"},"CreateDashboardButton")]:[]})};var w=a(499348),D=a(811747);function M(){return(0,r.Y)(D.g,{children:(0,r.Y)(w.A,{children:(0,r.Y)(L,{})})})}},144729:(e,t,a)=>{a.d(t,{T:()=>r.T,n:()=>i});var r=a(777776),n=a(201927);function i(){return(0,n.G)()&&window.location.pathname.startsWith("/embed/")}},194452:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(610435),n=a(692738),i=a(375214);function l(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1 3a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0zm2-.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0V3a.5.5 0 0 0-.5-.5m3.378-.628c.482 0 .872-.39.872-.872h1.5v4.25H10v1.5H6v-1.5h1.25V3.206c-.27.107-.564.166-.872.166H6v-1.5zm5 0c.482 0 .872-.39.872-.872h1.5v4.25H15v1.5h-4v-1.5h1.25V3.206c-.27.107-.564.166-.872.166H11v-1.5zM6 11a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0zm2-.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m-6.622-.378c.482 0 .872-.39.872-.872h1.5v4.25H5V15H1v-1.5h1.25v-2.044c-.27.107-.564.166-.872.166H1v-1.5zm10 0c.482 0 .872-.39.872-.872h1.5v4.25H15V15h-4v-1.5h1.25v-2.044c-.27.107-.564.166-.872.166H11v-1.5z",clipRule:"evenodd"})})}let o=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:l}));o.displayName="BinaryIcon";let s=o},214060:(e,t,a)=>{a.d(t,{Q:()=>i});var r=a(234383),n=a(889885);let i=()=>(0,n.FI)("enableFilesInWorkspace")&&(0,r.$i)()},234383:(e,t,a)=>{a.d(t,{$i:()=>s,Wn:()=>c,lh:()=>p,of:()=>u,qL:()=>f,uK:()=>A,wI:()=>d});var r=a(419374),n=a(441535);if(13057==a.j)var i=a(707076);var l=a(805287),o=a(889885);let s=()=>{let e=(0,l.gz)((0,o.CV)());return!!(r.p.isProjectTypeInWorkspaceEnabled()&&(e.workspace.allowed||e["machine-learning"].allowed))},d=()=>(0,i.Kt)()&&(0,i.MH)()&&(0,n.W)("databricks.fe.filebrowser.enableFilebrowserSharedWithMePage",!1),c=()=>(0,n.W)("databricks.fe.filebrowser.disableDatabricksYmlFileName",!1),u=()=>(0,n.W)("databricks.fe.filebrowser.enableWorkspaceAssetMetadataPanel",!1),A=()=>(0,n.W)("databricks.fe.filebrowser.enableWorkspaceNodeActionsMenuReorg",!1),f=()=>(0,n.W)("databricks.fe.ub.enableUnifiedBrowseSidebar",!1),p=()=>(0,n.W)("com.databricks.projects.enableGitFolderWithoutRemote",!1)},243562:(e,t,a)=>{a.d(t,{q:()=>c});var r=a(692738),n=a(118389),i=a(758666),l=a(823910),o=a(965545),s=a(397382),d=a(60701);let c=(0,a(953902).j7)(s.N,{oldHook:d.d,newHook:function(){let e=(0,n.P)(),{data:t=!1}=(0,i.st)({permission:o.I.CREATE},{enabled:e}),{data:a,loading:s}=(0,l.S)({},{skip:!e}),d=r.useMemo(()=>[...a?.recommendationGetDomainRecommendations?.domainRecommendations??[]].filter(({domain:e})=>e&&(t||!e?.effectiveDraft)).map(({domain:e})=>e),[a?.recommendationGetDomainRecommendations?.domainRecommendations,t]);return{domains:d,loading:s,error:a?.recommendationGetDomainRecommendations?.apiError,recommendationTraceId:a?.recommendationGetDomainRecommendations?.recommendationTraceId}}})},307342:(e,t,a)=>{a.d(t,{S:()=>o});var r=a(610435);a(692738);var n=a(497895),i=a(382908),l=a(465946);let o=({icon:e,displayValue:t,tag:a})=>{let{theme:o}=(0,n.wn)();return(0,r.FD)("span",{css:{display:"flex",alignItems:"center",gap:o.spacing.xs},children:[(0,r.Y)("span",{css:{display:"flex",alignItems:"center",color:o.colors.textSecondary},children:e||null}),(0,r.Y)(i.o.Text,{ellipsis:!0,children:t}),a?.label?(0,r.Y)(l.v,{componentId:"filter-panel-option-display-tag",color:a.color??"default",children:a.label}):null]})}},319241:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(610435),n=a(692738),i=a(375214);function l(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M2 1.75A.75.75 0 0 1 2.75 1h6a.75.75 0 0 1 .53.22l4.5 4.5c.141.14.22.331.22.53v9a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1-.75-.75zm1.5.75v12h9V7H8.75A.75.75 0 0 1 8 6.25V2.5zm6 1.06 1.94 1.94H9.5z",clipRule:"evenodd"})})}let o=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:l}));o.displayName="FileIcon";let s=o},342145:(e,t,a)=>{a.d(t,{$y:()=>u,B_:()=>T,FQ:()=>E,OD:()=>o,T4:()=>l,U1:()=>m,UX:()=>f,Yu:()=>g,bB:()=>i,cC:()=>p,k0:()=>n,nU:()=>d,sO:()=>h,sh:()=>c,wp:()=>s,xY:()=>A,xe:()=>_,zD:()=>S});var r=a(141078);let n=(0,r.J1)`
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
`,l=(0,r.J1)`
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
`,o=(0,r.J1)`
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
`,s=(0,r.J1)`
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
`,d=(0,r.J1)`
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
`,A=(0,r.J1)`
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
`,p=(0,r.J1)`
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
`,E=(0,r.J1)`
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
`,m=(0,r.J1)`
  query getAccountUsersCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountUsersCount {
      totalCount
    }
  }
`,S=(0,r.J1)`
  query getAccountServicePrincipalsCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountServicePrincipalsCount {
      totalCount
    }
  }
`,g=(0,r.J1)`
  query getAccountGroupsCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountGroupsCount {
      totalCount
    }
  }
`,_=(0,r.J1)`
  query getWorkspaceUsersCount($shouldGetDirectlyAssignedOnly: Boolean) @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceUsersCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`,h=(0,r.J1)`
  query getWorkspaceServicePrincipalsCount($shouldGetDirectlyAssignedOnly: Boolean)
  @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceServicePrincipalsCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`,T=(0,r.J1)`
  query getWorkspaceGroupsCount($shouldGetDirectlyAssignedOnly: Boolean) @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceGroupsCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`},350487:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(610435),n=a(692738),i=a(375214);function l(e){return(0,r.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.78 3.97 5.03 1.22a.75.75 0 0 0-1.06 0L1.22 3.97a.75.75 0 0 0 0 1.06l2.75 2.75a.75.75 0 0 0 1.06 0l2.75-2.75a.75.75 0 0 0 0-1.06m-1.59.53L4.5 6.19 2.81 4.5 4.5 2.81zM15 11.75a3.25 3.25 0 1 0-6.5 0 3.25 3.25 0 0 0 6.5 0M11.75 10a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5",clipRule:"evenodd"}),(0,r.Y)("path",{fill:"currentColor",d:"M14.25 1H9v1.5h4.5V7H15V1.75a.75.75 0 0 0-.75-.75M1 9v5.25c0 .414.336.75.75.75H7v-1.5H2.5V9z"})]})}let o=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:l}));o.displayName="ConnectIcon";let s=o},357764:(e,t,a)=>{a.d(t,{G:()=>A,T:()=>f});var r=a(610435),n=a(692738),i=a(342411),l=a(686560),o=a(601110),s=a(575343),d=a(907600);function c(e,t,a,r,n,i,l){try{var o=e[i](l),s=o.value}catch(e){a(e);return}o.done?t(s):Promise.resolve(s).then(r,n)}function u(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function l(e){c(i,r,n,l,o,"next",e)}function o(e){c(i,r,n,l,o,"throw",e)}l(void 0)})}}let A=({selectedUserSlugs:e,updateSelectedUserSlugs:t,enableAccountUsers:a=!1})=>{let{getUserIdByEmail:r,getUserEmailByUserId:l}=(0,n.useContext)(o.j)??{},[s,c]=(0,n.useState)([]),A=(0,d.p)(),f=(0,d.X)(),p=(0,n.useMemo)(()=>e.join(","),[e]),E=(0,i.tz)();return(0,n.useEffect)(()=>{u(function*(){c((yield Promise.all(e.map(e=>u(function*(){let t=a&&r?yield r(e):yield A(e);return{slug:e,userId:t}})()))).map(({slug:e,userId:t})=>t??E.formatMessage({id:"Le2TEm",defaultMessage:"Unknown user ({email})"},{email:e})))})()},[a,A,r,p]),{selectedIds:s,setSelectedIds:(0,n.useCallback)(e=>{u(function*(){t((yield Promise.all(e.map(e=>u(function*(){return a&&l?yield l(e):yield f(e)})()))).filter(e=>!!e))})()},[a,f,l,t])}},f=({selectedUserSlugs:e,updateSelectedUserSlugs:t,dialogComboBoxTriggerProps:a,enableWorkspaceUsers:n,enableAccountUsers:i,currentUser:o})=>{let{selectedIds:d,setSelectedIds:c}=A({selectedUserSlugs:e,updateSelectedUserSlugs:t,enableAccountUsers:i}),u={email:(0,l.d)("user_new",""),id:(0,l.d)("userId_new",-1)?.toString()};return(0,r.Y)(s.f,{currentUser:o??u,enableWorkspaceGroups:!1,enableWorkspaceServicePrincipals:!1,enableWorkspaceUsers:n,enableAccountUsers:i,selectedIds:d,setSelectedIds:c,dialogComboBoxTriggerProps:a})}},389883:(e,t,a)=>{a.d(t,{y:()=>s});var r=a(610435),n=a(692738),i=a(342411),l=a(518389),o=a(771994);function s({lastEditedAfter:e,handleUpdate:t,handleClear:a}){let d=(0,i.tz)(),c=n.useMemo(()=>[{value:o.ed.PAST_DAY,selected:e===o.ed.PAST_DAY,display:d.formatMessage({id:"EA3yHn",defaultMessage:"Within 24 hours"})},{value:o.ed.PAST_7_DAYS,selected:e===o.ed.PAST_7_DAYS,display:d.formatMessage({id:"fuQYvC",defaultMessage:"Within 7 days"})},{value:o.ed.PAST_30_DAYS,selected:e===o.ed.PAST_30_DAYS,display:d.formatMessage({id:"Hb5Asz",defaultMessage:"Within 30 days"})}],[e,d]);return(0,r.Y)(l.Z,{id:o.XV.MODIFIED,componentId:"search_page.filter-panel.last-modified",title:d.formatMessage({id:"dVhXCJ",defaultMessage:"Last Modified"}),options:c,onChange:t,onClear:()=>a(o.XV.MODIFIED)})}},397136:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(610435),n=a(692738),i=a(375214);function l(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M3 1.75A.75.75 0 0 1 3.75 1h10.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V12.5H1V11h2V8.75H1v-1.5h2V5H1V3.5h2zm1.5.75v11H6v-11zm3 0v11h6v-11z",clipRule:"evenodd"})})}let o=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:l}));o.displayName="NotebookIcon";let s=o},402720:(e,t,a)=>{let r;a.d(t,{P:()=>d});var n=a(610435),i=a(400136),l=a(591333),o=a(429608),s=a(866370);let d=((r=({dangerouslySetAntdProps:e,label:t,loadingDescription:a="LegacySkeleton",...r})=>{let d=r.loading??!0;return(0,n.Y)(o.wC,{children:(0,n.FD)(l.U,{label:t,children:[d&&(0,n.Y)(s.G,{description:a}),(0,n.Y)(i.A,{...r,...e})]})})}).Button=i.A.Button,r.Image=i.A.Image,r.Input=i.A.Input,r)},443785:(e,t,a)=>{a.d(t,{VN:()=>g});var r=a(610435),n=a(692738),i=a(497895),l=a(561733),o=a(342411),s=a(638570),d=a(307342),c=a(965545),u=a(758666),A=a(340701),f=a(314109),p=a(671039),E=a(175291),m=a(107774),S=a(243562);function g({source:e,...t}){if("account"===e)return(0,r.Y)(_,{...t});return(0,r.Y)(h,{...t})}function _(e){let{data:t}=(0,p.Q)({}),a=n.useMemo(()=>(t?.unifiedTaggingCentralDomains_listDomains?.domains??[]).filter(e=>e.tagKey&&!e.effectiveDraft),[t?.unifiedTaggingCentralDomains_listDomains?.domains]);return(0,r.Y)(T,{...e,domains:a})}function h({parentDomainTagKey:e,...t}){let{data:a=!1}=(0,u.st)({permission:c.I.CREATE}),{domains:i,loading:l}=(0,S.q)(),{domainHierarchy:o}=(0,E.X)(i??[]),s=n.useMemo(()=>(e?o[e]??[]:i??[]).filter(e=>e.tagKey&&(a||!e.effectiveDraft)),[e,i,o,a]);if(e&&0===s.length&&!l&&(0,m.X)())return null;return(0,r.Y)(T,{...t,domains:s})}function T({id:e,componentId:t,title:a,onChange:c,onClear:u,options:p,domains:E}){let m=(0,o.tz)(),{theme:S}=(0,i.wn)(),g=(0,A.P)(),_=n.useMemo(()=>E.sort((e,t)=>e.tagKey&&t.tagKey?e.tagKey.localeCompare(t.tagKey):0).map(e=>({value:e.tagKey??"",selected:p.some(t=>t.value===e.tagKey),display:(0,r.Y)(d.S,{icon:e.icon?.name&&g.get(e.icon.name)?(0,r.Y)("span",{css:{"> *":{color:(0,f.C)(e.icon?.color,S),width:S.general.iconFontSize,height:S.general.iconFontSize}},children:g.get(e.icon.name)}):(0,r.Y)("span",{css:{color:(0,f.n)(e.tagKey??"",S)},children:(0,r.Y)(l.A,{})}),displayValue:e.tagKey??"",tag:e.effectiveDraft?{label:m.formatMessage({id:"hgdanE",defaultMessage:"Draft"})}:void 0})})),[E,p,g,S,m]);return(0,r.Y)(s.A,{id:e,componentId:t,title:a,onChange:c,onClear:u,options:_,initialDisplayCount:5,alwaysShowSelected:!0,allowShowAll:!0,includeSearch:!0})}},494650:(e,t,a)=>{a.d(t,{Cx:()=>u,HW:()=>m,Jh:()=>d,Ly:()=>h,Nt:()=>_,OU:()=>T,Ue:()=>A,VM:()=>c,W$:()=>I,aD:()=>s,cE:()=>o,jT:()=>l,oJ:()=>g,oN:()=>R,pR:()=>S,ps:()=>f,vM:()=>p,yU:()=>E});var r=a(5697),n=a(858383),i=a(737358);let l=".job.yml",o=".pipeline.yml",s=".dashboard.yml",d="databricks.yml",c=e=>e.attributes?.project_attributes?.ancestor_project_name,u=e=>!!c(e),A=e=>e.attributes?.project_attributes?.databricks_yml_node_name,f=e=>!!A(e),p=e=>e.type===r.Z6.File&&S(e.node_name),E=e=>e.type===r.Z6.File&&g(e.node_name),m=e=>e.type===r.Z6.File&&_(e.node_name),S=e=>e?.endsWith(s),g=e=>e?.endsWith(l),_=e=>e?.endsWith(o),h=e=>e.type===r.Z6.File&&T(e.node_name)&&!!e.attributes?.project_attributes?.ancestor_project_name,T=e=>e===d;function I(e){return(0,i.B6)("/editor/bundles/:folderId",e)}function R(){return(0,n.zy)(e=>!!I(e.pathname))}},505544:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(610435),n=a(692738),i=a(375214);function l(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.727 3.695c-.225.192-.227.298-.227.305s.002.113.227.305c.223.19.59.394 1.108.58C4.865 5.256 6.337 5.5 8 5.5s3.135-.244 4.165-.615c.519-.186.885-.39 1.108-.58.225-.192.227-.298.227-.305s-.002-.113-.227-.305c-.223-.19-.59-.394-1.108-.58C11.135 2.744 9.663 2.5 8 2.5s-3.135.244-4.165.615c-.519.186-.885.39-1.108.58M13.5 5.94a7 7 0 0 1-.826.358C11.442 6.74 9.789 7 8 7s-3.442-.26-4.673-.703a7 7 0 0 1-.827-.358V8c0 .007.002.113.227.305.223.19.59.394 1.108.58C4.865 9.256 6.337 9.5 8 9.5s3.135-.244 4.165-.615c.519-.186.885-.39 1.108-.58.225-.192.227-.298.227-.305zM15 8V4c0-.615-.348-1.1-.755-1.447-.41-.349-.959-.63-1.571-.85C11.442 1.26 9.789 1 8 1s-3.442.26-4.673.703c-.613.22-1.162.501-1.572.85C1.348 2.9 1 3.385 1 4v8c0 .615.348 1.1.755 1.447.41.349.959.63 1.572.85C4.558 14.74 6.21 15 8 15s3.441-.26 4.674-.703c.612-.22 1.161-.501 1.571-.85.407-.346.755-.832.755-1.447zm-1.5 1.939a7 7 0 0 1-.826.358C11.442 10.74 9.789 11 8 11s-3.442-.26-4.673-.703a7 7 0 0 1-.827-.358V12c0 .007.002.113.227.305.223.19.59.394 1.108.58 1.03.371 2.502.615 4.165.615s3.135-.244 4.165-.615c.519-.186.885-.39 1.108-.58.225-.192.227-.298.227-.305z",clipRule:"evenodd"})})}let o=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:l}));o.displayName="DatabaseIcon";let s=o},518389:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(610435),n=a(692738),i=a(343088);let l=({id:e,includeSearch:t,title:a,options:l,allowShowAll:o,onChange:s,onClear:d,componentId:c,initialDisplayCount:u=7,alwaysShowSelected:A=!1,displayNumberSelectedOptions:f=!0,required:p=!1})=>{let E=n.useCallback(t=>{s({id:e,currentSelection:{value:t.value,selected:!0},allSelections:[t.value]})},[e,s]);return(0,r.Y)(i._,{id:e,includeSearch:t,title:a,options:l,allowShowAll:o,onChange:E,onClear:d,componentId:c,initialDisplayCount:u,alwaysShowSelected:A,optionType:"radio",displayNumberSelectedOptions:f,required:p})}},563521:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(610435),n=a(692738),i=a(375214);function l(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1 1.75A.75.75 0 0 1 1.75 1h12.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75zm1.5 8.75v3h4.75v-3zm0-1.5h4.75V2.5H2.5zm6.25-6.5v3h4.75v-3zm0 11V7h4.75v6.5z",clipRule:"evenodd"})})}let o=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:l}));o.displayName="DashboardIcon";let s=o},575343:(e,t,a)=>{a.d(t,{f:()=>G});var r=a(610435),n=a(692738),i=a(466213),l=a(236574),o=a(932284),s=a(382831),d=a(999785),c=a(848737),u=a(697632),A=a(683003),f=a(295169),p=a(342411),E=a(497895),m=a(12414),S=a(382908);let g=e=>{if("user"===e.kind)return e.fullName&&e.fullName!==e.name?`${e.fullName} (${e.name})`:e.name;if("serviceprincipal"===e.kind)return e.name&&e.displayName?e.displayName:e.applicationId||"";if("group"===e.kind&&e.displayName)return e.displayName;return e.name},_=({isLoading:e,hasError:t,hasNextPage:a,hasResults:n,limit:i})=>{let{theme:l}=(0,E.wn)();if(e)return(0,r.Y)("div",{css:{height:32,width:"100%",maxWidth:350,display:"flex",alignItems:"center"},children:(0,r.Y)(m.y,{label:h.loading,css:{margin:"auto"}})});let o=!n&&!t;if(!o&&!a&&!t)return null;return(0,r.Y)("div",{css:{alignItems:"center",borderTop:a?`1px solid ${l.colors.borderDecorative}`:void 0,paddingTop:l.spacing.sm,display:"flex",margin:`0px ${l.spacing.xs}px`},children:(0,r.FD)(S.o.Paragraph,{color:t?"error":void 0,css:{paddingLeft:l.spacing.md,paddingRight:l.spacing.md},children:[o&&h.noResults,a&&!o&&h.hasNextPage(i),t&&h.failedToLoad]})})},h={loading:(0,r.Y)(p.sA,{id:"WtKJak",defaultMessage:"Loading"}),failedToLoad:(0,r.Y)(p.sA,{id:"6lrzMH",defaultMessage:"Failed to load all options"}),hasNextPage:e=>(0,r.Y)(p.sA,{id:"zsuBc5",defaultMessage:"The first {limit} options are displayed. Type to narrow search.",values:{limit:e}}),noResults:(0,r.Y)(p.sA,{id:"MeZWxo",defaultMessage:"No results found"})};var T=a(930355),I=a(465082),R=a(26971),C=a(777517);let v=({id:e,label:t,kind:a,checked:n,handleChange:i,isSingleTypeSelect:l,multiselect:o,disabled:s})=>{let d=o?T.j:u.cr,c=t||e;return(0,r.Y)(d,{value:c,onChange:()=>i(e),checked:n,title:c,disabled:s,children:(0,r.FD)("div",{css:{display:"flex",alignItems:"center",maxWidth:"100%"},children:[(0,r.Y)(O,{isSingleTypeSelect:l,kind:a}),(0,r.Y)(S.o.Text,{ellipsis:!0,children:c})]})},e)},O=({kind:e,isSingleTypeSelect:t})=>{let{theme:a}=(0,E.wn)(),n=(0,p.tz)();if(t)return null;let i={color:a.colors.textSecondary,marginRight:a.spacing.sm};switch(e){case"user":return(0,r.Y)(I.A,{title:N.iconLabelUser(n),css:i});case"group":return(0,r.Y)(R.A,{title:N.iconLabelGroup(n),css:i});case"serviceprincipal":return(0,r.Y)(C.A,{title:N.iconLabelServicePrincipal(n),css:i});default:return null}},N={iconLabelGroup:e=>e.formatMessage({id:"eUW4Zt",defaultMessage:"Group"}),iconLabelUser:e=>e.formatMessage({id:"bNYRGZ",defaultMessage:"User"}),iconLabelServicePrincipal:e=>e.formatMessage({id:"FUnTNO",defaultMessage:"Service principal"})};var U=a(475654),L=a(929117),w=a(101938),D=a(205048),M=a(110253),b=a(671244),y=a(653542),P=a(49586),Y=a(295423);let x=50,H=new Map,G=e=>{let{selectedIds:t}=e,[a,l]=(0,n.useState)(""),[o]=(0,i.d7)(a,300),[s,d]=(0,n.useState)(Date.now().toString()),c=t.filter(e=>!H.get(e)),u=c.map(e=>`id=${e}`).join(" OR "),{subjects:A}=(0,P.zo)({skip:!1===e.enableWorkspaceUsers||!u,first:c.length,filterPredicate:u}),{subjects:f}=(0,P.zo)({skip:!1===e.enableAccountUsers||!u,first:c.length,filterPredicate:u,source:"account"}),{subjects:p}=(0,b.Bi)({skip:!1===e.enableWorkspaceGroups||!u,first:c.length,filterPredicate:u}),{subjects:E}=(0,y.Q_)({skip:!1===e.enableWorkspaceServicePrincipals||!u,first:c.length,filterPredicate:u});(0,n.useEffect)(()=>{[...A,...f,...p,...E].forEach(e=>{H.set(e.id,{kind:e.kind,label:g(e)})}),d(Date.now().toString())},[A,f,p,E]);let m=(0,Y.f)({enableAccountUsers:e.enableAccountUsers??!1,enableWorkspaceGroups:e.enableWorkspaceGroups??!0,enableWorkspaceServicePrincipals:e.enableWorkspaceServicePrincipals??!0,enableWorkspaceUsers:e.enableWorkspaceUsers??!0,filterText:o,limit:e.limit??x,useLite:!0});return(0,r.Y)(M.ci,{interaction:null,enabled:!0,children:(0,r.Y)(V,{...e,...m,filter:o,setFilterText:l,subjectCacheKey:s})})},k=[],V=({dialogComboBoxProps:e,dialogComboBoxTriggerProps:t,currentUser:a,enableAccountUsers:i=!1,enableWorkspaceGroups:f=!0,enableWorkspaceServicePrincipals:E=!0,enableWorkspaceUsers:m=!0,label:S,loading:h,limit:T=x,setSelectedIds:I,selectedIds:R=k,errors:C,hasNextPage:O,isLoading:N,subjects:M,filter:b,setFilterText:y,multiSelect:P=!0,maxSelected:Y,subjectCacheKey:G,componentId:V,disableAnyOption:$=!1})=>{let K=(0,p.tz)(),z=B.me(K),J=(0,n.useMemo)(()=>new Set(R),[R]),q=void 0!==Y&&R.length>=Y,Q=Number(i)+Number(f)+Number(m)+Number(E)===1,j=i&&N.accountUsers||f&&N.groups||E&&N.servicePrincipals||m&&N.users,Z=!!C.accountUsers&&i||!!C.groups&&f||!!C.servicePrincipals&&E||!!C.users&&m,X=(0,n.useRef)(!1),{startInteraction:ee}=(0,w.XT)();(0,n.useEffect)(()=>{X.current&&ee(b?U.o.WEBAPP_SUBJECT_FILTER_SEARCH_WITH_TERM:U.o.WEBAPP_SUBJECT_FILTER_LOAD)},[b,ee]);let et=(0,n.useMemo)(()=>F({currentUser:a?{...a,fullName:z}:void 0,enableWorkspaceUsers:m,enableAccountUsers:i,filter:b,hasError:Z,limit:T,subjects:j?[]:M}),[a,z,m,i,b,Z,j,T,M]),ea=(0,n.useMemo)(()=>et.filter(e=>!J.has(e.id)),[et,J]),er=(0,n.useMemo)(()=>R.map(e=>H.get(e)?.label||(j?"":e)),[R,G]);if((0,n.useEffect)(()=>{et.forEach(e=>{H.set(e.id,{kind:e.kind,label:g(e)})})},[et]),h)return(0,r.Y)(W,{});let en=P?e=>{R.includes(e)?I(R.filter(t=>t!==e)):I([...R,e])}:e=>I([e]),ei=()=>{I([])};return(0,r.FD)(r.FK,{children:[(0,r.FD)(l.A,{componentId:V||"WebShared_SubjectFilter",value:er,...e,multiSelect:P,label:S||B.defaultLabel,onOpenChange:e=>{X.current=e,e&&ee(b?U.o.WEBAPP_SUBJECT_FILTER_SEARCH_WITH_TERM:U.o.WEBAPP_SUBJECT_FILTER_LOAD)},children:[(0,r.Y)(o.g,{onClear:ei,maxWidth:350,showTagAfterValueCount:1,...t}),(0,r.FD)(s.d,{minWidth:250,maxWidth:350,maxHeight:400,onCloseAutoFocus:()=>y(""),children:[(0,r.Y)(d.H,{children:(0,r.FD)(c.d,{onSearch:y,virtualized:!0,children:[!$&&!P&&!b&&(0,r.Y)(u.cr,{value:B.any(K),onChange:ei,checked:0===R.length,title:B.any(K)},"any"),R.map(e=>(0,r.Y)(v,{id:e,kind:H.get(e)?.kind,label:H.get(e)?.label||e,checked:!0,handleChange:en,isSingleTypeSelect:Q,multiselect:P},e)),ea.map(e=>(0,r.Y)(v,{id:e.id,kind:e.kind,label:g(e),checked:!1,handleChange:en,isSingleTypeSelect:Q,multiselect:P,disabled:q},e.id))]})}),(0,r.Y)(A.B,{css:{padding:0},children:(0,r.Y)(_,{isLoading:j,hasError:Z,hasNextPage:O,hasResults:!!M.length,limit:T})})]})]}),(0,r.Y)(D.R,{allowlist:[U.o.WEBAPP_SUBJECT_FILTER_SEARCH_WITH_TERM,U.o.WEBAPP_SUBJECT_FILTER_LOAD],description:b?L.z.SUBJECT_FILTER_SEARCH_WITH_TERM_LOADING:L.z.SUBJECT_FILTER_SEARCH_WITHOUT_TERM_LOADING,loading:j})]})},W=()=>(0,r.Y)(f.x,{label:B.loadingLabel,style:{width:85,height:"32px"}}),F=({currentUser:e,enableWorkspaceUsers:t,enableAccountUsers:a,filter:r,hasError:n,limit:i,subjects:l})=>{if(!t&&!a||!e)return l;if(n)return[];if(r&&!e.email.toLocaleLowerCase().includes(r.toLocaleLowerCase()))return l;let o=l.find(t=>t.id===e.id);if(!o)return[{fullName:e.fullName,id:e.id,optionId:`user.${e.id}`,kind:"user",name:e.email,title:e.email},...l].slice(0,i);return o.fullName=e.fullName,[o,...l.filter(t=>t.id!==e.id)].slice(0,i)},B={defaultLabel:(0,r.Y)(p.sA,{id:"lygz4C",defaultMessage:"Owner"}),loadingLabel:(0,r.Y)(p.sA,{id:"FzYxgk",defaultMessage:"Loading..."}),me:e=>e.formatMessage({id:"3YaYqM",defaultMessage:"Me"}),any:e=>e.formatMessage({id:"hlql3T",defaultMessage:"Any"})}},581716:(e,t,a)=>{a.d(t,{UM:()=>c,hs:()=>A,pu:()=>u,rs:()=>E,tn:()=>p,w$:()=>d,xf:()=>f});var r,n,i,l,o,s,d=((r={}).USERNAME_PASSWORD="USERNAME_PASSWORD",r.OAUTH_GOOGLE_SERVICE_ACCOUNT="OAUTH_GOOGLE_SERVICE_ACCOUNT",r.OAUTH_U2M="OAUTH_U2M",r.OAUTH_M2M="OAUTH_M2M",r.OAUTH_U2M_MAPPING="OAUTH_U2M_MAPPING",r.OAUTH_ACCESS_TOKEN="OAUTH_ACCESS_TOKEN",r.OAUTH_REFRESH_TOKEN="OAUTH_REFRESH_TOKEN",r.OAUTH_RESOURCE_OWNER_PASSWORD="OAUTH_RESOURCE_OWNER_PASSWORD",r.BEARER_TOKEN="BEARER_TOKEN",r.PEM_PRIVATE_KEY="PEM_PRIVATE_KEY",r.SERVICE_CREDENTIAL="SERVICE_CREDENTIAL",r.OAUTH_MTLS="OAUTH_MTLS",r.ANY_STATIC_CREDENTIAL="ANY_STATIC_CREDENTIAL",r.SSWS_TOKEN="SSWS_TOKEN",r.OAUTH_DCR="OAUTH_DCR",r),c=((n={}).ACTIVE="ACTIVE",n.FAILED="FAILED",n.PROVISIONING="PROVISIONING",n),u=((i={}).MYSQL="MYSQL",i.MONGODB="MONGODB",i.POSTGRESQL="POSTGRESQL",i.MANAGED_POSTGRESQL="MANAGED_POSTGRESQL",i.SNOWFLAKE="SNOWFLAKE",i.REDSHIFT="REDSHIFT",i.SQLDW="SQLDW",i.SQLSERVER="SQLSERVER",i.DATABRICKS="DATABRICKS",i.SALESFORCE="SALESFORCE",i.SALESFORCE_DATA_CLOUD="SALESFORCE_DATA_CLOUD",i.SALESFORCE_DATA_CLOUD_FILE_SHARING="SALESFORCE_DATA_CLOUD_FILE_SHARING",i.TERADATA="TERADATA",i.ORACLE="ORACLE",i.BIGQUERY="BIGQUERY",i.NETSUITE="NETSUITE",i.WORKDAY_RAAS="WORKDAY_RAAS",i.WORKDAY_ACTIVITY_LOGGING="WORKDAY_ACTIVITY_LOGGING",i.WORKDAY_HCM="WORKDAY_HCM",i.SERVICENOW="SERVICENOW",i.VECTOR_INDEX="VECTOR_INDEX",i.FABRIC="FABRIC",i.ONELAKE="ONELAKE",i.HIVE_METASTORE="HIVE_METASTORE",i.GLUE="GLUE",i.GA4_RAW_DATA="GA4_RAW_DATA",i.GOOGLE_DRIVE="GOOGLE_DRIVE",i.SHAREPOINT="SHAREPOINT",i.ONEDRIVE="ONEDRIVE",i.HTTP="HTTP",i.POWER_BI="POWER_BI",i.SFTP="SFTP",i.DYNAMICS365="DYNAMICS365",i.DBT_PLATFORM="DBT_PLATFORM",i.JIRA="JIRA",i.CONFLUENCE="CONFLUENCE",i.GITHUB="GITHUB",i.HUBSPOT="HUBSPOT",i.ZENDESK="ZENDESK",i.SLACK_AUDIT_LOGS="SLACK_AUDIT_LOGS",i.SLACK_ACCESS_AND_INTEGRATION_LOGS="SLACK_ACCESS_AND_INTEGRATION_LOGS",i.META_MARKETING="META_MARKETING",i.SALESFORCE_MARKETING_CLOUD="SALESFORCE_MARKETING_CLOUD",i.JDBC="JDBC",i.GENERIC_LAKEFLOW_CONNECT="GENERIC_LAKEFLOW_CONNECT",i.SLACK="SLACK",i.KAFKA="KAFKA",i.RABBITMQ="RABBITMQ",i.GOOGLE_ADS="GOOGLE_ADS",i.OUTLOOK="OUTLOOK",i.PALANTIR="PALANTIR",i.BIGLAKE="BIGLAKE",i.GOOGLE_CLOUD_LAKEHOUSE="GOOGLE_CLOUD_LAKEHOUSE",i.TIKTOK_ADS="TIKTOK_ADS",i.CROWDSTRIKE_EVENT_STREAM="CROWDSTRIKE_EVENT_STREAM",i.ONE_PASSWORD_EVENT_LOGS="ONE_PASSWORD_EVENT_LOGS",i.OKTA_SYSTEM_LOGS="OKTA_SYSTEM_LOGS",i.AKAMAI_WAF="AKAMAI_WAF",i.M365_AUDIT_LOGS="M365_AUDIT_LOGS",i.SMARTSHEET="SMARTSHEET",i.AWS_SECRETS_MANAGER="AWS_SECRETS_MANAGER",i.VEEVA_VAULT="VEEVA_VAULT",i),A=((l={}).BUILTIN="BUILTIN",l.EXTERNAL="EXTERNAL",l.GLUE="GLUE",l.NONE="NONE",l),f=((o={}).USES_USERNAME_PASSWORD="USES_USERNAME_PASSWORD",o.USES_OAUTH_GOOGLE_SERVICE_ACCOUNT="USES_OAUTH_GOOGLE_SERVICE_ACCOUNT",o.USES_OAUTH_USER_AUTHORIZATION="USES_OAUTH_USER_AUTHORIZATION",o.USES_OAUTH_ACCESS_TOKEN="USES_OAUTH_ACCESS_TOKEN",o.USES_OAUTH_REFRESH_TOKEN="USES_OAUTH_REFRESH_TOKEN",o.USES_OAUTH_RESOURCE_OWNER_PASSWORD="USES_OAUTH_RESOURCE_OWNER_PASSWORD",o.USES_BEARER_TOKEN="USES_BEARER_TOKEN",o.USES_PEM_PRIVATE_KEY="USES_PEM_PRIVATE_KEY",o.USES_OAUTH_M2M="USES_OAUTH_M2M",o.USES_OAUTH_U2M_SHARED="USES_OAUTH_U2M_SHARED",o.USES_OAUTH_U2M_CUSTOM_APP="USES_OAUTH_U2M_CUSTOM_APP",o.USES_OAUTH_U2M_MAPPING="USES_OAUTH_U2M_MAPPING",o.USES_SERVICE_CREDENTIAL="USES_SERVICE_CREDENTIAL",o.USES_OAUTH_MTLS="USES_OAUTH_MTLS",o.USES_ANY_STATIC_CREDENTIAL="USES_ANY_STATIC_CREDENTIAL",o.USES_SSWS_TOKEN="USES_SSWS_TOKEN",o.USES_DCR="USES_DCR",o),p=((s={}).BEFORE_ACCESS_TOKEN="BEFORE_ACCESS_TOKEN",s.BEFORE_AUTHORIZATION_CODE="BEFORE_AUTHORIZATION_CODE",s);let E={OAUTH_ACCESS_TOKEN:"USES_OAUTH_ACCESS_TOKEN",OAUTH_U2M:"USES_OAUTH_USER_AUTHORIZATION",USERNAME_PASSWORD:"USES_USERNAME_PASSWORD",OAUTH_GOOGLE_SERVICE_ACCOUNT:"USES_OAUTH_GOOGLE_SERVICE_ACCOUNT",OAUTH_REFRESH_TOKEN:"USES_OAUTH_REFRESH_TOKEN",OAUTH_RESOURCE_OWNER_PASSWORD:"USES_OAUTH_RESOURCE_OWNER_PASSWORD",BEARER_TOKEN:"USES_BEARER_TOKEN",PEM_PRIVATE_KEY:"USES_PEM_PRIVATE_KEY",OAUTH_M2M:"USES_OAUTH_M2M",OAUTH_U2M_MAPPING:"USES_OAUTH_U2M_MAPPING",SERVICE_CREDENTIAL:"USES_SERVICE_CREDENTIAL",OAUTH_MTLS:"USES_OAUTH_MTLS",ANY_STATIC_CREDENTIAL:"USES_ANY_STATIC_CREDENTIAL",SSWS_TOKEN:"USES_SSWS_TOKEN",OAUTH_DCR:"USES_DCR"}},615693:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(610435),n=a(692738),i=a(375214);function l(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1 1.75A.75.75 0 0 1 1.75 1h12.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75zm1.5.75v3h11v-3zm0 11V7H5v6.5zm4 0h3V7h-3zM11 7v6.5h2.5V7z",clipRule:"evenodd"})})}let o=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:l}));o.displayName="TableIcon";let s=o},630169:(e,t,a)=>{a.d(t,{c:()=>c});var r=a(610435),n=a(692738),i=a(79128),l=a(497895),o=a(802582),s=a(286342),d=a(123252);let c=({items:e,renderLabel:t,tooltipText:a,ariaLabel:c="More items",...u})=>{let{theme:A}=(0,l.wn)(),[f,p]=(0,n.useState)(!0),E=`+${e.length}`,m=(0,r.Y)("span",{css:{lineHeight:0},...(0,d.VG)(),children:(0,r.Y)(s.Trigger,{asChild:!0,children:(0,r.Y)(i.$n,{componentId:"something",type:"link",children:t?t(E):E})})});return f&&(m=(0,r.Y)(o.p,{title:a||"See more items",children:m})),(0,r.FD)(s.Root,{componentId:"codegen_design-system_src_design-system_overflow_overflowpopover.tsx_37",onOpenChange:e=>p(!e),children:[m,(0,r.Y)(s.Content,{align:"start","aria-label":c,...u,...(0,d.VG)(),children:(0,r.Y)("div",{css:{display:"flex",flexDirection:"column",gap:A.spacing.xs},children:e.map((e,t)=>(0,r.Y)("div",{children:e},`overflow-${t}`))})})]})}},722651:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(610435),n=a(692738),i=a(375214);function l(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8.646.368a.75.75 0 0 0-1.292 0l-3.25 5.5A.75.75 0 0 0 4.75 7h6.5a.75.75 0 0 0 .646-1.132zM8 2.224 9.936 5.5H6.064zM8.5 9.25a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1-.75-.75zM10 10v3.5h3.5V10zM1 11.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M4.25 10a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5",clipRule:"evenodd"})})}let o=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:l}));o.displayName="DataIcon";let s=o},753427:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(610435),n=a(692738),i=a(375214);function l(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M0 2.75A.75.75 0 0 1 .75 2h3.922c.729 0 1.428.29 1.944.805L7.811 4h7.439a.75.75 0 0 1 .75.75V8h-1.5V5.5h-7a.75.75 0 0 1-.53-.22L5.555 3.866a1.25 1.25 0 0 0-.883-.366H1.5v9H5V14H.75a.75.75 0 0 1-.75-.75zM9 8.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M7 9a2 2 0 1 1 3.778.917c.376.58.888 1.031 1.414 1.227a2 2 0 1 1-.072 1.54c-.977-.207-1.795-.872-2.37-1.626v1.087a2 2 0 1 1-1.5 0v-1.29A2 2 0 0 1 7 9m7 2.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m-5 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",clipRule:"evenodd"})})}let o=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:l}));o.displayName="FolderBranchIcon";let s=o},777776:(e,t,a)=>{a.d(t,{T:()=>r});function r(e,t,a,r){let n=["lakeview",e,t,a.toLowerCase().replace(/[^a-z0-9]/g,"")];return r?.widgetType&&n.push(r.widgetType),n.push("loading"),r?.widgetId&&n.push(r.widgetId),r?.datasetName&&n.push(r.datasetName),n.join(".")}},802582:(e,t,a)=>{a.d(t,{p:()=>_});var r=a(610435),n=a(956935),i=a(889486),l=a(778529),o=a.n(l),s=a(91958),d=a.n(s),c=a(692738),u=a(429608),A=a(497895),f=a(639712),p=a(863802);let E=["hover","focus"],m=d()(e=>({backgroundColor:"#2F3941",lineHeight:"22px",padding:"4px 8px",boxShadow:e.general.shadowLow,...(0,f.WO)(e)})),S=d()(e=>({zIndex:e.options.zIndexBase+70}),e=>String(e.options.zIndexBase)),g=d()(e=>(0,n.AH)({...(0,u.Cx)(e)})),_=({children:e,title:t,placement:a="top",dataTestId:n,dangerouslySetAntdProps:l,silenceScreenReader:s=!1,useAsLabel:d=!1,..._})=>{let{theme:h}=(0,A.wn)(),T=(0,c.useRef)(null),I=(0,p.Y)("dubois-tooltip-component-"),R=l?.id?l?.id:I;if(!t)return(0,r.Y)(c.Fragment,{children:e});let C=s?{}:{"aria-live":"polite","aria-relevant":"additions"};n&&(C["data-testid"]=n);let v=t&&c.isValidElement(t)?c.cloneElement(t,C):(0,r.Y)("span",{...C,children:t}),O={"aria-hidden":!1},N=e=>{if(!T.current||e.currentTarget.hasAttribute("aria-describedby")||e.currentTarget.hasAttribute("aria-labelledby"))return;R&&(e.currentTarget.setAttribute("aria-live","polite"),d?e.currentTarget.setAttribute("aria-labelledby",R):e.currentTarget.setAttribute("aria-describedby",R))},U=e=>{if(!T||!e.currentTarget.hasAttribute("aria-describedby")&&!e.currentTarget.hasAttribute("aria-labelledby"))return;d?e.currentTarget.removeAttribute("aria-labelledby"):e.currentTarget.removeAttribute("aria-describedby"),e.currentTarget.removeAttribute("aria-live")},L={onMouseEnter:e=>{N(e)},onMouseLeave:e=>{U(e)},onFocus:e=>{N(e)},onBlur:e=>{U(e)}},w=c.isValidElement(e)?c.cloneElement(e,{...O,...L,...e.props}):o()(e)?e:(0,r.Y)("span",{...O,...L,children:e}),{overlayInnerStyle:D,overlayStyle:M,...b}=l||{},y=D?{backgroundColor:"#2F3941",lineHeight:"22px",padding:"4px 8px",boxShadow:h.general.shadowLow,...D,...(0,f.WO)(h)}:m(h),P=M?{zIndex:h.options.zIndexBase+70,...M}:S(h);return(0,r.Y)(u.wC,{children:(0,r.Y)(i.A,{id:R,ref:T,title:v,placement:a,trigger:E,overlayInnerStyle:y,overlayStyle:P,css:g(h.options.enableAnimation),...b,..._,children:w})})}},823825:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(610435),n=a(692738),i=a(375214);function l(e){return(0,r.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,r.Y)("g",{clipPath:"url(#ModelsIcon_svg__a)",children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M0 4.75a2.75 2.75 0 0 1 5.145-1.353l4.372-.95a2.75 2.75 0 1 1 3.835 2.823l.282 2.257a2.75 2.75 0 1 1-2.517 4.46l-2.62 1.145.003.118a2.75 2.75 0 1 1-4.415-2.19L3.013 7.489A2.75 2.75 0 0 1 0 4.75M2.75 3.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m2.715 1.688q.027-.164.033-.333l4.266-.928a2.75 2.75 0 0 0 2.102 1.546l.282 2.257c-.377.165-.71.412-.976.719zM4.828 6.55a2.8 2.8 0 0 1-.413.388l1.072 3.573q.13-.012.263-.012c.945 0 1.778.476 2.273 1.202l2.5-1.093a2.8 2.8 0 0 1 .012-.797zM12 10.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M5.75 12a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M11 2.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0",clipRule:"evenodd"})}),(0,r.Y)("defs",{children:(0,r.Y)("clipPath",{children:(0,r.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let o=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:l}));o.displayName="ModelsIcon";let s=o},834343:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(610435),n=a(692738),i=a(375214);function l(e){return(0,r.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,r.Y)("g",{clipPath:"url(#SearchIcon_svg__a)",children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a7 7 0 1 0 4.39 12.453l2.55 2.55 1.06-1.06-2.55-2.55A7 7 0 0 0 8 1M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0",clipRule:"evenodd"})}),(0,r.Y)("defs",{children:(0,r.Y)("clipPath",{children:(0,r.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let o=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:l}));o.displayName="SearchIcon";let s=o},848737:(e,t,a)=>{a.d(t,{d:()=>p});var r=a(610435),n=a(692738),i=a(545251),l=a(305404),o=a(994796),s=a(497895),d=a(834343),c=a(407374),u=a(469490),A=a(569546);let f=e=>{if("string"==typeof e||"number"==typeof e)return e.toString();if(n.isValidElement(e)&&e.props.children)return n.Children.toArray(e.props.children).map(f).join(" ");return""},p=(0,n.forwardRef)(({onChange:e,onSearch:t,virtualized:a,children:p,hasWrapper:E,controlledValue:m,setControlledValue:S,rightSearchControls:g,..._},h)=>{let{theme:T}=(0,s.wn)(),{componentId:I}=(0,i.w)(),{isInsideDialogComboboxOptionList:R}=(0,l.r)(),C=`no-result-${(0,A.B)()}`,v=(0,n.useRef)(null);(0,n.useImperativeHandle)(h,()=>v.current);let[O,N]=n.useState();if(!R)throw Error("`DialogComboboxOptionListSearch` must be used within `DialogComboboxOptionList`");let U=p;if(O&&!a&&void 0===m){var L;let e;L=E?p.props.children:p,e=O.toLowerCase(),U=n.Children.map(L,t=>{if(n.isValidElement(t)){let a=t.props.__EMOTION_TYPE_PLEASE_DO_NOT_USE__?.defaultProps._TYPE??t.props._TYPE;if("DialogComboboxOptionListSelectItem"===a||"DialogComboboxOptionListCheckboxItem"===a){let a=f(t).toLowerCase(),r=t.props.value?.toLowerCase()??"";return a.includes(e)||r.includes(e)?t:null}}return t})?.filter(e=>e),E&&(U=n.cloneElement(p,{},U))}let w=(0,n.useRef)(null);(0,n.useEffect)(()=>{if(!w.current)return;let e=(0,o.aV)(w.current);if(e){let t=(0,o.kQ)(e),a=e?.[0];a&&(0,o.ed)(a,t,!1)}},[O]);let D=n.Children.toArray(E?p.props.children:p).some(e=>n.isValidElement(e)),M=E&&U?.props.children?.length||!E&&U?.length;return(0,n.useEffect)(()=>{M||v.current?.input?.setAttribute("aria-activedescendant",C)},[M,C,v.current?.input?.value]),(0,r.FD)(r.FK,{children:[(0,r.Y)("div",{ref:w,css:{padding:`${T.spacing.sm}px ${T.spacing.lg/2}px ${T.spacing.sm}px`,width:"100%",boxSizing:"border-box",position:"sticky",top:0,background:T.colors.backgroundPrimary,zIndex:T.options.zIndexBase+1},children:(0,r.FD)("div",{css:{display:"flex",flexDirection:"row",gap:T.spacing.sm},children:[(0,r.Y)(c.p,{componentId:I?`${I}.search`:"codegen_design_system_src_design_system_dialogcombobox_dialogcomboboxoptionlistsearch.tsx_173",type:"search",name:"search",ref:v,prefix:(0,r.Y)(d.A,{}),placeholder:"Search",onChange:e=>{a||N(e.target.value),S?.(e.target.value),t?.(e.target.value)},onKeyDown:e=>{(e=>{if("ArrowDown"!==e.key&&"ArrowUp"!==e.key&&"Enter"!==e.key)return;e.preventDefault();let t=(0,o.aV)(e.target);if(!t)return;let a=(0,o.kQ)(t);if("ArrowDown"===e.key||"ArrowUp"===e.key)if(a){let r=(0,o.oS)(a,"ArrowDown"===e.key?"next":"previous");if(r)(0,o.ed)(r,a,!1);else if("ArrowDown"===e.key){let e=t[0];(0,o.ed)(e,a,!1)}else if("ArrowUp"===e.key){let e=t[t.length-1];(0,o.ed)(e,a,!1)}}else{let a="ArrowDown"===e.key?t[0]:t[t.length-1];a&&(0,o.ed)(a,void 0,!1)}else"Enter"===e.key&&a&&a.click()})(e),_.onKeyDown?.(e)},value:m??O,shouldPreventFormSubmission:!0,..._}),g]})}),a?p:M&&D?(0,r.Y)("div",{"aria-live":"polite",css:{width:"100%"},children:U}):(0,r.Y)(u.i,{id:C})]})})},869061:(e,t,a)=>{a.d(t,{BV:()=>eM,F:()=>ex,OH:()=>eP,Qz:()=>eH,VT:()=>ey,e0:()=>eY,qu:()=>eb});var r=a(610435);a(692738);var n=a(820648),i=a(505544),l=a(615693),o=a(611791),s=a(784141),d=a(932273),c=a(325382),u=a(319241),A=a(1459),f=a(823825),p=a(815367),E=a(209246),m=a(657252),S=a(430939),g=a(295575),_=a(572599),h=a(397136),T=a(973492),I=a(298500),R=a(889187),C=a(350487),v=a(826279),O=a(194452),N=a(95853),U=a(983972),L=a(704882),w=a(191283),D=a(571117),M=a(518695),b=a(722651),y=a(750269),P=a(587012),Y=a(237534),x=a(123577),H=a(194556),G=a(478848),k=a(302999),V=a(5654),W=a(150788),F=a(359911),B=a(469030),$=a(749298),K=a(630100),z=a(725321),J=a(341231),q=a(587987),Q=a(166525),j=a(609952),Z=a(848833),X=a(60297),ee=a(84796),et=a(829708),ea=a(606295),er=a(732941),en=a(652600),ei=a(609951),el=a(353492),eo=a(227460),es=a(708174),ed=a(243393),ec=a(745387),eu=a(676526),eA=a(522194),ef=a(856879),ep=a(953087),eE=a(475621),em=a(70482),eS=a(961945),eg=a(297979),e_=a(29893),eh=a(988011),eT=a(543525),eI=a(441143),eR=a(545760),eC=a(608759),ev=a(194960),eO=a(265913),eN=a(710814),eU=a(29824),eL=a(581716),ew=a(150924),eD=a(641760);let eM={[eU.an.CATALOG]:n.A,[eU.an.DATABASE]:i.A,[eU.an.TABLE]:l.A,[eU.an.COLUMN]:void 0,[eU.an.VIEW]:o.A,[eU.an.STREAMING_TABLE]:s.A,[eU.an.MATERIALIZED_VIEW]:d.A,[eU.an.VOLUME]:c.A,[eU.an.VOLUME_FILE]:u.A,[eU.an.VOLUME_FOLDER]:A.A,[eU.an.REGISTERED_MODEL]:f.A,[eU.an.REGISTERED_MODEL_VERSION]:f.A,[eU.an.FUNCTION]:p.A,[eU.an.FUNCTION_FEATURE_SPEC]:E.A,[eU.an.STORAGE_CREDENTIAL]:m.A,[eU.an.CREDENTIAL]:m.A,[eU.an.EXTERNAL_LOCATION]:S.A,[eU.an.CONNECTION]:g.A,[eU.an.SHARE]:void 0,[eU.an.RECIPIENT]:void 0,[eU.an.PROVIDER]:void 0,[eU.an.METASTORE]:void 0,[eU.an.CLEAN_ROOM]:_.A,[eU.an.INBOUND_SHARED_NOTEBOOK_FILE]:h.A,[eU.an.VECTOR_INDEX]:T.A,[eU.an.ONLINE_VIEW]:I.A,[eU.an.METRIC_VIEW]:R.A,[eU.an.EXTERNAL_METADATA]:C.A,[eU.an.SECRET]:m.A},eb={[eU.$C.BIGINT]:v.A,[eU.$C.BINARY]:O.A,[eU.$C.BOOLEAN]:function(e){return(0,r.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 95.986 88.359",...e,children:[(0,r.Y)("defs",{children:(0,r.Y)("filter",{id:"checkbox_source_svg__a",x:0,width:1,y:0,height:1,colorInterpolationFilters:"sRGB",children:(0,r.Y)("feGaussianBlur",{})})}),(0,r.Y)("path",{style:{lineHeight:"normal",fontVariantLigatures:"normal",fontVariantPosition:"normal",fontVariantCaps:"normal",fontVariantNumeric:"normal",fontVariantAlternates:"normal",fontVariantEastAsian:"normal",fontFeatureSettings:"normal",fontVariationSettings:"normal",textIndent:0,textAlign:"start",textDecorationLine:"none",textDecorationStyle:"solid",textDecorationColor:"#000",textTransform:"none",textOrientation:"mixed",whiteSpace:"normal",shapeMargin:0,inlineSize:0,isolation:"auto",mixBlendMode:"normal"},d:"M1288.725-1007.719l-.801.801-64.416 64.414-18.973-18.97-12.894 12.896 31.867 31.857 78.113-78.115zm-123.116.469V-882.516h132.67v-94.558l-18.226 18.228v58.106h-96.217v-88.273h71.764l18.238-18.237z",transform:"matrix(.70572 0 0 .70572 -822.588 711.163)",fontWeight:400,fontFamily:"sans-serif",overflow:"visible",fill:"currentColor",filter:"url(#checkbox_source_svg__a)",enableBackground:"accumulate"})]})},[eU.$C.DATE]:N.A,[eU.$C.DECIMAL]:U.A,[eU.$C.DOUBLE]:U.A,[eU.$C.FLOAT]:U.A,[eU.$C.INT]:v.A,[eU.$C.INTERVAL]:v.A,[eU.$C.SMALLINT]:v.A,[eU.$C.STRING]:L.A,[eU.$C.TIMESTAMP]:w.A,[eU.$C.TINYINT]:v.A,[eU.$C.ARRAY]:D.A,[eU.$C.MAP]:M.A,[eU.$C.STRUCT]:M.A,[eU.$C.CHAR]:L.A,[eU.$C.VARCHAR]:L.A,[eU.$C.GENERAL]:b.A,[eU.$C.GEOMETRY]:y.A};function ey(e){return eb[(0,eD.lA)(e)]??b.A}let eP={[eL.pu.MONGODB]:P,[eL.pu.MYSQL]:Y.A,[eL.pu.POSTGRESQL]:x.A,[eL.pu.MANAGED_POSTGRESQL]:x.A,[eL.pu.REDSHIFT]:H,[eL.pu.SNOWFLAKE]:G,[eL.pu.SQLDW]:k,[eL.pu.SQLSERVER]:V,[eL.pu.DATABRICKS]:W,[eL.pu.VECTOR_INDEX]:W,[eL.pu.SALESFORCE]:F,[eL.pu.SALESFORCE_DATA_CLOUD]:F,[eL.pu.SALESFORCE_DATA_CLOUD_FILE_SHARING]:F,[eL.pu.TERADATA]:B,[eL.pu.ORACLE]:$,[eL.pu.BIGQUERY]:K,[eL.pu.NETSUITE]:z,[eL.pu.WORKDAY_RAAS]:J,[eL.pu.WORKDAY_ACTIVITY_LOGGING]:J,[eL.pu.WORKDAY_HCM]:J,[eL.pu.SERVICENOW]:q,[eL.pu.SHAREPOINT]:Q,[eL.pu.ONEDRIVE]:j.A,[eL.pu.ONELAKE]:Z.A,[eL.pu.FABRIC]:Z.A,[eL.pu.HIVE_METASTORE]:X,[eL.pu.GLUE]:X,[eL.pu.GA4_RAW_DATA]:ee.A,[eL.pu.GOOGLE_DRIVE]:et.A,[eL.pu.HTTP]:ea.A,[eL.pu.POWER_BI]:er.A,[eL.pu.DBT_PLATFORM]:en,[eL.pu.SFTP]:ei.A,[eL.pu.DYNAMICS365]:el.A,[eL.pu.JIRA]:eo,[eL.pu.CONFLUENCE]:es,[eL.pu.GITHUB]:ed,[eL.pu.HUBSPOT]:ec,[eL.pu.ZENDESK]:eu,[eL.pu.SLACK_AUDIT_LOGS]:eA,[eL.pu.SLACK_ACCESS_AND_INTEGRATION_LOGS]:eA,[eL.pu.META_MARKETING]:ef,[eL.pu.SALESFORCE_MARKETING_CLOUD]:F,[eL.pu.JDBC]:ep,[eL.pu.GENERIC_LAKEFLOW_CONNECT]:"",[eL.pu.SLACK]:eA,[eL.pu.KAFKA]:eE.A,[eL.pu.RABBITMQ]:"",[eL.pu.GOOGLE_ADS]:em,[eL.pu.OUTLOOK]:eS.A,[eL.pu.PALANTIR]:eg.A,[eL.pu.BIGLAKE]:K,[eL.pu.GOOGLE_CLOUD_LAKEHOUSE]:K,[eL.pu.TIKTOK_ADS]:e_,[eL.pu.CROWDSTRIKE_EVENT_STREAM]:eh,[eL.pu.ONE_PASSWORD_EVENT_LOGS]:eT,[eL.pu.OKTA_SYSTEM_LOGS]:eI,[eL.pu.AKAMAI_WAF]:eR,[eL.pu.M365_AUDIT_LOGS]:eC,[eL.pu.SMARTSHEET]:ev,[eL.pu.AWS_SECRETS_MANAGER]:eO.A,[eL.pu.VEEVA_VAULT]:eN.A},eY={[eU.an.FUNCTION]:{[ew.x.FUNCTION]:p.A,[ew.x.FUNCTION_PROCEDURE]:y.A,[ew.x.FUNCTION_FEATURE_SPEC]:E.A}};function ex(e){if(e){let t=eM[e];if(t)return t}return eM[eU.an.TABLE]}function eH(e,t){return eP[e]}},889187:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(610435),n=a(692738),i=a(375214);function l(e){return(0,r.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.75 1a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75H4v-1.5H2.5V7H5v2h1.5V7h3v2H11V7h2.5v2H15V1.75a.75.75 0 0 0-.75-.75zM13.5 5.5v-3h-11v3z",clipRule:"evenodd"}),(0,r.Y)("path",{fill:"currentColor",d:"M5 11v3.25c0 .414.336.75.75.75h9.5a.75.75 0 0 0 .75-.75V11h-1.5v2.5h-.875V12h-1.5v1.5h-.875V11h-1.5v2.5h-.875V12h-1.5v1.5H6.5V11z"})]})}let o=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:l}));o.displayName="TableMeasureIcon";let s=o},913573:(e,t,a)=>{a.d(t,{A:()=>E});var r=a(610435),n=a(692738),i=a(923305),l=a(794938),o=a(6e4),s=a(497937),d=a(497895),c=a(79128),u=a(846007),A=a(217985),f=a(349297);let p=n.forwardRef(({noBasePath:e=!1,children:t,onClick:a,href:c,to:p,componentId:E,...m},S)=>{let g,_=(0,s.Zp)(),h=(0,o.CV)(),{theme:T}=(0,d.wn)(),I=(0,n.useCallback)(e=>{a&&a(e),e.defaultPrevented||(0,f.A)(e,_)},[a,_]);if(p&&!h){if("string"==typeof p&&(0,i.Eq)(p))throw Error("<Link to={...}> format does not accept absolute URLs. Please <ExternalLink> instead.");let{pathname:e,search:t,hash:a}=(0,u.t4)(p);g=`${e??"/"}${t??""}${a??""}`}else if(c){let t=c.startsWith("/#");g=(0,l.E)(c,e||t)}let R={color:T.colors.actionTertiaryTextDefault,textDecoration:"none",...m.style};return h&&p?(0,r.Y)(A.N,{to:p,onClick:a,componentId:E,...m,ref:S,style:R,asAnchorTag:!0,children:t}):(0,r.Y)("a",{...m,href:g,ref:S,onClick:I,style:R,children:t})});p.Button=function({children:e,noBasePath:t=!1,onClick:a,...i}){i.href&&(i={...i,href:(0,l.E)(i.href,t)});let o=(0,s.Zp)(),d=(0,n.useCallback)(e=>{a&&a(e),e.defaultPrevented||(0,f.A)(e,o)},[a,o]);return(0,r.Y)(c.$n,{...i,onClick:d,children:e})};let E=p},930355:(e,t,a)=>{a.d(t,{j:()=>p});var r=a(610435),n=a(692738),i=a(545251),l=a(305404),o=a(994796),s=a(332702),d=a(497895),c=a(201828),u=a(79570),A=a(174541);let f=(0,n.forwardRef)(({value:e,checked:t,indeterminate:a,onChange:n,children:f,disabledReason:p,_TYPE:E,...m},S)=>{let{theme:g}=(0,d.wn)(),{textOverflowMode:_,contentWidth:h,disableMouseOver:T,setDisableMouseOver:I}=(0,i.w)(),{isInsideDialogComboboxOptionList:R,setLookAhead:C,lookAhead:v}=(0,l.r)();if(!R)throw Error("`DialogComboboxOptionListCheckboxItem` must be used within `DialogComboboxOptionList`");let O=t=>{n&&n(e,t)},N=f??e;return m.disabled&&p&&(N=(0,r.FD)("div",{css:{display:"flex"},children:[(0,r.Y)("div",{children:N}),(0,r.Y)("div",{css:{display:"flex"},children:(0,r.Y)(u.m,{componentId:"dialog-combobox-option-list-checkbox-item-disabled-reason-tooltip",content:p,side:"right",children:(0,r.Y)("span",{css:[(0,A.eO)(g),{display:"flex",alignItems:"center",alignSelf:"flex-start",marginTop:g.spacing.xs/2}],children:(0,r.Y)(c.A,{"aria-label":"Disabled status information","aria-hidden":"false"})})})})]})),(0,r.Y)("div",{ref:S,role:"option","aria-selected":!a&&t,css:[(0,A.RB)(g)],...m,onClick:e=>{m.disabled?e.preventDefault():O(e)},tabIndex:-1,...(0,o.Js)(O,{onKeyDown:m.onKeyDown,onMouseEnter:m.onMouseEnter,onDefaultKeyDown:e=>(0,o.pY)(e,C,v),disableMouseOver:T,setDisableMouseOver:I}),children:(0,r.Y)(s.Sc,{componentId:"codegen_design-system_src_design-system_dialogcombobox_dialogcomboboxoptionlistcheckboxitem.tsx_86",disabled:m.disabled,isChecked:a?null:t,css:[(0,A.WS)(g,_),h?{"& > span:last-of-type":{width:(0,o.x9)(g,h)}}:{}],tabIndex:-1,onClick:e=>{e.stopPropagation(),O(e)},children:(0,r.Y)("div",{css:{maxWidth:"100%"},children:N})})})});f.defaultProps={_TYPE:"DialogComboboxOptionListCheckboxItem"};let p=f},932273:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(610435),n=a(692738),i=a(375214);function l(e){return(0,r.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.75 1a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75H8v-1.5H6.5V7h7v2H15V1.75a.75.75 0 0 0-.75-.75zM5 7H2.5v6.5H5zm8.5-1.5v-3h-11v3z",clipRule:"evenodd"}),(0,r.Y)("path",{fill:"currentColor",d:"m8.43 11.512 3-3.5 1.14.976-1.94 2.262H14a.75.75 0 0 1 .57 1.238l-3 3.5-1.14-.976 1.94-2.262H9a.75.75 0 0 1-.57-1.238"})]})}let o=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:l}));o.displayName="TableLightningIcon";let s=o},983972:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(610435),n=a(692738),i=a(375214);function l(e){return(0,r.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M3 10a3 3 0 1 0 6 0V6a3 3 0 0 0-6 0zm3 1.5A1.5 1.5 0 0 1 4.5 10V6a1.5 1.5 0 1 1 3 0v4A1.5 1.5 0 0 1 6 11.5M10 10a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm3 1.5a1.5 1.5 0 0 1-1.5-1.5V6a1.5 1.5 0 0 1 3 0v4a1.5 1.5 0 0 1-1.5 1.5",clipRule:"evenodd"}),(0,r.Y)("path",{fill:"currentColor",d:"M1 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"})]})}let o=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:l}));o.displayName="DecimalIcon";let s=o},990272:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(610435),n=a(692738),i=a(375214);function l(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M2 1.75A.75.75 0 0 1 2.75 1h10.5a.75.75 0 0 1 .75.75v7.465a5.75 5.75 0 0 1-2.723 4.889l-2.882 1.784a.75.75 0 0 1-.79 0l-2.882-1.784A5.75 5.75 0 0 1 2 9.214zm1.5.75V7h3.75V2.5zm5.25 0V7h3.75V2.5zm3.75 6H8.75v5.404l1.737-1.076A4.25 4.25 0 0 0 12.5 9.215zm-5.25 5.404V8.5H3.5v.715a4.25 4.25 0 0 0 2.013 3.613z",clipRule:"evenodd"})})}let o=(0,n.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:l}));o.displayName="ShieldIcon";let s=o}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/23820.ee9b14e2a9.chunk.js.map