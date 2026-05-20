"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[9765],{2382:(e,t,a)=>{a.d(t,{z:()=>l});var r=a(297768),n=a(886100),o=a(22191),i=a(747129);let l=(e,t,a)=>{if(!t)return new Set;let l=new Set([t.IDENTIFIER,t.BACKQUOTED_IDENTIFIER,t.STRING,t.DOUBLEQUOTED_STRING,t.INTEGER_VALUE,t.DECIMAL_VALUE,t.RIGHT_PAREN,t.RIGHT_BRACKET,t.BIGINT_LITERAL,t.SMALLINT_LITERAL,t.TINYINT_LITERAL,t.FLOAT_LITERAL,t.DOUBLE_LITERAL,t.BIGDECIMAL_LITERAL]);try{let s=e?.trim();if(!s)return new Set;let c=r.Zo.fromString(s),u=new t(c);u.removeErrorListeners(),u.addErrorListener({syntaxError:()=>{},reportAttemptingFullContext:()=>{},reportContextSensitivity:()=>{},reportAmbiguity:()=>{}});let d=new r.jB(u);d.fill();let m=new Set,p=t.WS,f=t.WS;for(let e=0;d.get(e).type!==r.ou.EOF;e++){let r=d.get(e);if(r.type===t.SIMPLE_COMMENT||r.type===t.BRACKETED_COMMENT)continue;let n=e>=2&&a(d.get(e-2));if(!l.has(p)&&!n&&f===t.COLON&&r.text){if(r.type===t.IDENTIFIER||a(r))m.add(r.text);else if(r.type===t.BACKQUOTED_IDENTIFIER){let e=r.text,t=e.substring(1,e.length-1);t.trim().length>0&&m.add(t)}}p=f,f=r.type}return n.iT.sev2BurnRate(o.Es.Lakeview,"Lexing query text for SEA parameter markers",i.i1.P99,i.Ip.Min10,!0),m}catch(a){return n.iT.sev2BurnRate(o.Es.Lakeview,"Lexing query text for SEA parameter markers",i.i1.P99,i.Ip.Min10,!1,{error:a,lexer:t?.name,queryText:e}),new Set}}},63687:(e,t,a)=>{a.d(t,{Ue:()=>m,Xx:()=>f,Yi:()=>p,pd:()=>d,y3:()=>u});var r,n,o,i=a(928516),l=a.n(i),s=a(90114),c=a.n(s),u=((r={}).SQL_EDITOR="sqlEditor",r.DASHBOARD_UI="dashboardUI",r.VIZ_EDITOR_UI="vizEditorUI",r.ALERT_UI="alertUI",r.ALERT_V2_UI="alertV2UI",r.DATA_EXPLORER_UI="dataExplorerUI",r.SMALL_FILE_UPLOAD_UI="smallFileUploadUI",r.EXTERNAL_LOCATION_FILE_UPLOAD_UI="externalLocationFileUploadUI",r.LAKEVIEW_DASHBOARD_UI="lakeviewDashboardUI",r.STANDALONE_ALERTS="standaloneAlerts",r.EXCEL_ADD_IN="excelAddIn",r),d=((n={}).INTERACTIVE="interactive",n.MANUAL="manual",n),m=((o={}).RUN_BUTTON="runButton",o.APPLY_PARAMETERS="applyParameters",o.REFRESH_PARAMETERS="refreshParameters",o.QUICK_FILTERS="quickFilters",o.SCHEMA_BROWSER_UI="schemaBrowserUI",o.REFRESH_BUTTON="refreshButton",o.WIDGET_REFRESH="widgetRefresh",o.INGESTION_PREVIEW_TABLE="ingestionPreviewTable",o.INGESTION_CREATE_TABLE="ingestionCreateTable",o.SAMPLE_DATA_EXPLORER="sampleDataExplorer",o.NONE="none",o);function p(e){return e&&{"X-Databricks-Dbsql-Trigger-Source":e.triggerSource,"X-Databricks-Dbsql-Trigger-Execution-Type":e.executionType,"X-Databricks-Dbsql-Trigger-Execution-Detail":e.executionDetail||"none"}}function f(e){if(e){let t={dbsqlTriggerSource:e.triggerSource,dbsqlTriggerExecutionType:e.executionType,dbsqlTriggerExecutionDetail:e.executionDetail||"none"};return{"X-Databricks-Dbsql-Attribution-Flags":JSON.stringify(c()(t,l()))}}}},65061:(e,t,a)=>{a.d(t,{IT:()=>l,_l:()=>o._l,n_:()=>o.n_,sw:()=>i.s});var r=a(692738),n=a(32121),o=a(141078),i=a(710283);let l=(e,t)=>{let a=(0,o.IT)(e,t);return!function(e,t){let a=(0,r.useRef)(0),{startPolling:o,stopPolling:i,error:l,networkStatus:s}=e;(0,r.useEffect)(()=>{if(!t||s&&s<n.pT.ready)return;if(l){let e=a.current+1,r=t*Math.pow(2,e);r<36e5?(o(r),a.current=e):(i(),a.current=0)}else a.current>0&&(o(t),a.current=0)},[l,t,o,i,s])}(a,t?.pollInterval),a}},101913:(e,t,a)=>{a.d(t,{BX:()=>n,Iz:()=>r,Mb:()=>o,yC:()=>i});let r=(e,t)=>{t&&(e.fields_to_update=Object.keys(t))};function n(e){if(e)try{return{serialized_parameters:JSON.stringify(e)}}catch(e){}return{}}function o(e){if(e)try{return{serialized_query_plan:JSON.stringify(e)}}catch(e){}return{}}function i(e){return{filters:e.map(e=>({id:e.id,values:e.values.map(e=>({kind:e.kind,type:e.type.toUpperCase(),value:e.value})),type:e.type}))}}},144198:(e,t,a)=>{a.a(e,async(e,r)=>{try{let m;a.d(t,{q:()=>p});var n=a(645696),o=a(405664),i=a(39677),l=a(487909),s=e([n]);function c(e,t,a,r,n,o,i){try{var l=e[o](i),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(r,n)}function u(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var o=e.apply(t,a);function i(e){c(o,r,n,i,l,"next",e)}function l(e){c(o,r,n,i,l,"throw",e)}i(void 0)})}}function d(e){let t=e?l.n.peekUndo():l.n.peekRedo();if(t instanceof o.P)return e?t.undoCursorPosition:t.redoCursorPosition}n=(s.then?(await s)():s)[0];let p=(e,t={})=>({setup:({editorInstance:a})=>{let{KeyMod:r,KeyCode:o}=(0,n.getMonacoApi)();a.onDidChangeCursorPosition(t=>{let r=a.getPosition();r&&(0,i.Ns)(e,{lineNumber:r.lineNumber,column:r.column})}),a.onDidChangeModelContent(()=>{let e=m;m=void 0,e&&requestAnimationFrame(()=>{a.setPosition(e),a.revealPositionInCenter(e)})}),a.addAction({id:"lakeview.undo",label:"Lakeview Undo",keybindings:[r.CtrlCmd|o.KeyZ],run:()=>u(function*(){yield t.beforeUndoRedo?.(),(0,i.XJ)();let e=d(!0);e&&(m=e),yield l.n.undo()})()}),a.addAction({id:"lakeview.redo",label:"Lakeview Redo",keybindings:[r.CtrlCmd|r.Shift|o.KeyZ,r.CtrlCmd|o.KeyY],run:()=>u(function*(){yield t.beforeUndoRedo?.(),(0,i.XJ)();let e=d(!1);e&&(m=e),yield l.n.redo()})()})}});r()}catch(e){r(e)}})},172601:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{DashboardLocalMetricView:()=>c});var n=a(610435),o=a(883678),i=a(311682),l=a(374104),s=e([i,l]);[i,l]=s.then?(await s)():s;let c=(0,o.PA)(function({datasetName:e,readOnly:t,hideGraphUI:a}){let r=(0,l.K)(e,{readOnly:t,hideGraphUI:a});return(0,n.Y)("div",{style:{width:"100%",height:"100%"},children:(0,n.Y)(i.s,{...r,children:(0,n.Y)(i.T,{overrideCss:{width:"100%"}},e)})})});r()}catch(e){r(e)}})},181376:(e,t,a)=>{a.d(t,{E:()=>o,n:()=>i});var r,n,o=((r={}).ExploreDataIndex="discovery.data_explorer.data.index",r.ExploreDataHiveCatalog="discovery.data_explorer.data.hive_catalog",r.ExploreDataSamplesCatalog="discovery.data_explorer.data.samples_catalog",r.ExploreDataCatalog="discovery.data_explorer.data.catalog",r.ExploreDataCreateCatalog="discovery.data_explorer.catalogs.create",r.ExploreDataHiveSchema="discovery.data_explorer.data.hive_schema",r.ExploreDataSamplesSchema="discovery.data_explorer.data.samples_schema",r.ExploreDataDatabase="discovery.data_explorer.data.schema",r.ExploreDataHiveTable="discovery.data_explorer.data.hive_table",r.ExploreDataSamplesTable="discovery.data_explorer.data.samples_table",r.ExploreDataTable="discovery.data_explorer.data.table",r.ExploreMetricViewCreate="discovery.data_explorer.metric_view.create",r.ExploreMetricView="discovery.data_explorer.metric_view",r.ExploreDataVolume="discovery.data_explorer.data.volume",r.ExploreDataFunction="discovery.data_explorer.data.function",r.ExploreDataModel="discovery.data_explorer.data.model",r.ExploreGraph="discovery.data_explorer.graph",r.ExploreDataNotebookFile="discovery.data_explorer.data.notebook",r.ExploreDataSecret="discovery.data_explorer.data.secret",r.ExploreDataModelVersion="discovery.data_explorer.data.model.version",r.ExploreCredentialsIndex="discovery.data_explorer.credentials.index",r.ExploreCredentialsCredential="discovery.data_explorer.credentials.credential",r.ExploreLocationsIndex="discovery.data_explorer.locations.index",r.ExploreLocationsLocation="discovery.data_explorer.locations.location",r.ExploreLocationsCreateLocation="discovery.data_explorer.locations.create_location",r.ExploreLocationsEditLocation="discovery.data_explorer.locations.edit_location",r.ExploreLocationsLocationBrowse="discovery.data_explorer.locations.location.browse",r.ExploreLocationsLocationWorkspace="discovery.data_explorer.locations.location.workspace",r.ExploreLocationsLocationPermission="discovery.data_explorer.locations.location.permission",r.ExploreConnectionsIndex="discovery.data_explorer.connections.index",r.ExploreConnectionsConnection="discovery.data_explorer.connections.connection",r.ExploreConnectionsCreateConnection="discovery.data_explorer.connections.create_connection",r.ExploreConnectionsEditConnection="discovery.data_explorer.connections.edit_connection",r.ExploreExternalMetadataIndex="discovery.data_explorer.external_metadata.index",r.ExploreExternalMetadataMetadata="discovery.data_explorer.external_metadata.metadata",r.ExploreExternalMetadataCreateMetadata="discovery.data_explorer.external_metadata.create_metadata",r.ExploreExternalMetadataMetadataLineage="discovery.data_explorer.external_metadata.lineage",r.ExploreUcUpgradeDatabase="unity_catalog.upgrade.schema",r.ExploreUcUpgradeTable="unity_catalog.upgrade.table",r.ExploreUcTableConversion="unity_catalog.convert.table",r.ExploreSharingIndex="delta_sharing.shares.index",r.ExploreSharingShares="delta_sharing.shares.shares",r.ExploreSharingShare="delta_sharing.shares.share",r.ExploreSharingCreateShareData="delta_sharing.shares.share.create_data",r.ExploreSharingEditShareData="delta_sharing.shares.share.edit_data",r.ExploreSharingEditShareNotebook="delta_sharing.shares.share.edit_notebook",r.ExploreSharingRecipients="delta_sharing.shares.recipients.list",r.ExploreSharingRecipient="delta_sharing.shares.recipients.detail",r.ExploreSharingProviders="delta_sharing.shares.providers.list",r.ExploreSharingProvider="delta_sharing.shares.providers.detail",r.ExploreDataTableCreateSearchIndex="discovery.data_explorer.data.table.create_search_index",r.ExploreDataTableEditLineageRelationship="discovery.data_explorer.data.table.edit_lineage_relationship",r.ExploreDataModelVersionEditLineageRelationship="discovery.data_explorer.data.model.version.edit_lineage_relationship",r.ExploreMetastore="unity_catalog.metastore.settings",r.DataIndex="discovery.data_explorer.legacy.index",r.DataDatabase="discovery.data_explorer.legacy.database",r.DataTable="discovery.data_explorer.legacy.table",r),i=((n={}).ExploreDataIndex="/explore/data",n.ExploreDataHiveCatalog="/explore/data/hive_metastore",n.ExploreDataSamplesCatalog="/explore/data/samples",n.ExploreDataCatalog="/explore/data/:catalog",n.ExploreDataCreateCatalog="/explore/catalogs/:catalog/configure",n.ExploreDataHiveSchema="/explore/data/hive_metastore/:schema",n.ExploreDataSamplesSchema="/explore/data/samples/:schema",n.ExploreDataDatabase="/explore/data/:catalog/:schema",n.ExploreDataHiveTable="/explore/data/hive_metastore/:schema/:table",n.ExploreDataSamplesTable="/explore/data/samples/:schema/:table",n.ExploreDataTable="/explore/data/:catalog/:schema/:table",n.ExploreDataVolume="/explore/data/volumes/:catalog/:schema/:volume",n.ExploreDataFunction="/explore/data/functions/:catalog/:schema/:ucFunction",n.ExploreDataModel="/explore/data/models/:catalog/:schema/:model",n.ExploreGraph="/explore/graph/:catalog/:schema/:name",n.ExploreDataNotebookFile="/explore/data/notebooks/:catalog/:notebook",n.ExploreDataModelVersion="/explore/data/models/:catalog/:schema/:model/version/:modelVersion",n.ExploreDataSecret="/explore/data/secrets/:catalog/:schema/:secret",n.ExploreCredentialsIndex="/explore/credentials",n.ExploreCredentialsCredential="/explore/credentials/:credential",n.ExploreLocationsIndex="/explore/locations",n.ExploreLocationsLocation="/explore/locations/:location",n.ExploreLocationsCreateLocation="/explore/locations/create",n.ExploreLocationsEditLocation="/explore/locations/:location/edit",n.ExploreLocationsLocationBrowse="/explore/locations/:location/browse",n.ExploreLocationsLocationWorkspace="/explore/locations/:location/workspace",n.ExploreLocationsLocationPermission="/explore/locations/:location/permission",n.ExploreConnectionsIndex="/explore/connections",n.ExploreConnectionsConnection="/explore/connections/:connection",n.ExploreConnectionsCreateConnection="/explore/connections/create",n.ExploreConnectionsEditConnection="/explore/connections/:connection/edit",n.ExploreExternalMetadataIndex="/explore/external-metadata",n.ExploreExternalMetadataMetadata="/explore/external-metadata/:externalMetadata",n.ExploreExternalMetadataCreateMetadata="/explore/external-metadata/create",n.ExploreExternalMetadataMetadataLineage="/explore/external-metadata/:metadata/lineage",n.ExploreUcUpgradeDatabase="/explore/upgrade/:schema",n.ExploreUcUpgradeTable="/explore/upgrade/:schema/:table",n.ExploreUcTableConversion="/explore/convert/:catalog/:schema",n.ExploreDataTableCreateSearchIndex="/explore/data/:catalog/:schema/:table/create-search-index",n.ExploreDataTableEditLineageRelationship="/explore/data/:catalog/:schema/:table/edit-relationship/:externalLineageId",n.ExploreDataModelVersionEditLineageRelationship="/explore/data/models/:catalog/:schema/:model/version/:modelVersion/edit-relationship/:externalLineageId",n.ExploreMetastore="/explore/metastore",n.ExploreMetricViewCreate="/explore/metric_view/create",n.ExploreMetricView="/explore/metric_view/:metricView/edit",n.DataIndex="/data",n.DataDatabase="/data/:catalog/:database",n.DataTable="/data/:catalog/:database/:table",n)},197459:(e,t,a)=>{a.d(t,{c:()=>s});var r=a(610435),n=a(944464),o=a.n(n);a(692738);var i=a(342411),l=a(735919);let s=o()(()=>new Promise((e,t)=>{l.k.confirm({title:(0,r.Y)(i.sA,{id:"Q69qbJ",defaultMessage:"Session expiring"}),body:(0,r.Y)(i.sA,{id:"Q2jwxA",defaultMessage:"The STS session for your IAM role is about to expire. Please click here to get a new session."}),okText:(0,r.Y)(i.sA,{id:"gY/Rhz",defaultMessage:"Confirm"}),cancelText:(0,r.Y)(i.sA,{id:"QoX+L+",defaultMessage:"Cancel"}),onOk:()=>{let e=btoa(window.location.pathname+window.location.search),t=btoa(window.location.hash);window.location.replace(`/saml/auth?hash=${t}&next_url=${e}`)},onCancel:()=>t()})}),5e3,{trailing:!1})},206717:(e,t,a)=>{a.d(t,{G$:()=>l,x$:()=>i});var r=a(141078),n=a(491438);function o(e,t,a,r,n,o,i){try{var l=e[o](i),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(r,n)}let i=(0,r.J1)`
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
`;function l(e,t,a){var r;return(r=function*(e,t,{maxResults:a=100,pageToken:r,metastoreScope:o}={},l){let{data:s}=yield e.query({query:i,variables:{schemaFullName:t,maxResults:a,pageToken:r},context:(0,n.Xe)(o),fetchPolicy:l});return s.unityCatalogSchemaNameReference?.schema?.tables??null},function(){var e=this,t=arguments;return new Promise(function(a,n){var i=r.apply(e,t);function l(e){o(i,a,n,l,s,"next",e)}function s(e){o(i,a,n,l,s,"throw",e)}l(void 0)})}).apply(this,arguments)}},215911:(e,t,a)=>{a.d(t,{BC:()=>i,Bp:()=>l,gU:()=>o});var r=a(441535),n=a(686560);function o(){let e=(0,r.W)("uc_secrets",!1);return(0,r.W)("databricks.fe.discovery.enableUCSecrets",!1)&&e}function i(){let e=(0,r.W)("uc_secrets",!1);return(0,r.W)("databricks.fe.discovery.enableUCSecrets",!1)&&e}function l(){let e=(0,n.d)("cloud","AWS");return i()&&(0,r.W)("databricks.fe.discovery.enableUCSecretsExternalAws",!1)&&"AWS"===e}},250748:()=>{},306229:(e,t,a)=>{a.d(t,{R:()=>c,Dm:()=>m,rC:()=>u.r});var r=a(941614),n=a(18748),o=a(340939),i=a(63707),l=a(409911),s=a(416741);let c=(0,r.K0)({key:"lakeview-datasetIsStaleSelectorFamily",get:e=>({get:t})=>{let a=t((0,l.n)(e));if((0,n.H4)(a))return!1;let r=t((0,s.K)(e)),c="query";(0,i.CQ)()&&void 0!==a.metricViewConfig&&(c="metricViewConfig");let u=[c,"parameters","catalog","schema"];return(0,o.D)(a,r,u)}});var u=a(427524);function d(e,t,a,r,n,o,i){try{var l=e[o](i),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(r,n)}function m(e){return{commitDataset:(0,r.Zs)(({snapshot:{getPromise:t},set:a})=>({cancel:r}={cancel:!1},o="query")=>{var c;return(c=function*(){let c=yield t((0,l.n)(e)),{query:u="",metricViewConfig:d=""}=(0,n.b)(c);if((0,i.CQ)()){let t="query"===o?u:d;a((0,s.K)(e),{...c,...!r&&{acceptStaleResultsAfterEpochTimeMs:Date.now()},[o]:r?void 0:t})}else a((0,s.K)(e),{...c,...!r&&{acceptStaleResultsAfterEpochTimeMs:Date.now()},query:r?void 0:u})},function(){var e=this,t=arguments;return new Promise(function(a,r){var n=c.apply(e,t);function o(e){d(n,a,r,o,i,"next",e)}function i(e){d(n,a,r,o,i,"throw",e)}o(void 0)})})()},[e])}}},311682:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{T:()=>n.T,s:()=>o.s}),a(250748);var n=a(271068),o=a(688463),i=e([n]);n=(i.then?(await i)():i)[0],r()}catch(e){r(e)}})},338418:(e,t,a)=>{a.d(t,{I:()=>l,p:()=>i});var r=a(886100),n=a(22191),o=a(747129);function i(e,t){r.iT.sev2BurnRate(n.Es.RedashCore,"http://go/redash/fe/alert/redash.fe.executionStatus.apiError",o.i1.P999,o.Ip.Min10,!e,{...t,error:e})}function l(e,t){r.iT.sev2BurnRate(n.Es.RedashCore,"http://go/redash/fe/alert/redash.fe.executionResult.apiError",o.i1.P999,o.Ip.Min10,!e,{...t,error:e})}},340939:(e,t,a)=>{a.d(t,{D:()=>s});var r=a(802558),n=a.n(r),o=a(299089),i=a.n(o),l=a(18748);function s(e,t,a){if((0,l.H4)(e))return!1;let r=i()(e,a),o=i()(t,a);return!n()(r,o)}},344918:(e,t,a)=>{a.d(t,{$:()=>i,X:()=>o});var r=a(483588),n=a(617293);function o(e){return e.toSorted((e,t)=>{let a=e.catalogType===r._E1.USER_HOME_CATALOG;if(a!==(t.catalogType===r._E1.USER_HOME_CATALOG))return a?-1:1;let o=!!e.isDefault;if(!!t.isDefault!==o)return o?-1:1;let i=e.name===n.oD;if(i!==(t.name===n.oD))return i?-1:1;let l=!!e.browse_only;if(!!t.browse_only!==l)return l?1:-1;return e.name.localeCompare(t.name)})}function i(e){return e.toSorted((e,t)=>{let a=e.name===n.Ef;if(a!==(t.name===n.Ef))return a?-1:1;return e.name.localeCompare(t.name)})}},349297:(e,t,a)=>{a.d(t,{A:()=>c,e:()=>u});var r=a(536717),n=a.n(r),o=a(692738),i=a(801938),l=a(497937),s=a(341300);function c(e,t){if(e.defaultPrevented)return;let a=function(e){for(;e;){if(e instanceof HTMLAnchorElement)return e;e=e?.parentNode}return null}(e.target instanceof Node?e.target:null),r=a&&a.getAttribute("href");if(!a||!r||a.hasAttribute("download")||a.dataset.skiprouter||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return;let o=a.getAttribute("target");if(n()(o)&&"_blank"===o.toLowerCase())return;e.preventDefault(),t(r)}function u(e){let{appRoot:t,portalContainer:a}=(0,i.Xd)(),r=(0,l.Zp)();(0,o.useEffect)(()=>{if(!e)return;let n=new Set([t,a]);function o(e){return e.defaultPrevented||(0,s.$G)("global_navigation_intent"),c(e,r)}return n.forEach(e=>{e.addEventListener("click",o,!1)}),()=>{n.forEach(e=>{e.removeEventListener("click",o,!1)})}},[t,a,e,r])}},374104:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{K:()=>A});var n=a(692738),o=a(941614),i=a(441535),l=a(660618),s=a(876855),c=a(278983),u=a(22191),d=a(266925),m=a(404386),p=a(63707),f=a(686471),g=a(302701),h=a(144198),y=a(880784),v=a(889258),x=a(460603),E=a(388690),b=a(306229),C=a(416741),w=a(35587),T=a(537583),_=e([h]);function I(e,t,a,r,n,o,i){try{var l=e[o](i),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(r,n)}function S(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var o=e.apply(t,a);function i(e){I(o,r,n,i,l,"next",e)}function l(e){I(o,r,n,i,l,"throw",e)}i(void 0)})}}function A(e,t={}){let a=(0,v.E)(e),r=(0,o.vc)((0,C.K)(e)),_=(0,E.YZ)(e),I=(0,T.EL)(),{commitDataset:D}=(0,b.Dm)(e),R=a.metricViewConfig||(0,m.Vm)(),{isLoading:L,defaultCatalogName:N}=(0,o.vc)(y.r),P=(0,p.Xj)(),k=(0,n.useRef)(0),M=(0,n.useRef)({committedMetricViewYaml:r.metricViewConfig,defaultCatalogIsLoading:L,defaultCatalogName:N});M.current={committedMetricViewYaml:r.metricViewConfig,defaultCatalogIsLoading:L,defaultCatalogName:N};let O=(0,n.useCallback)((e,{isStructuralChange:t=!1}={})=>S(function*(){try{let a=(0,s.HV)(e).isValid,r=++k.current,{defaultCatalogIsLoading:n,defaultCatalogName:o}=M.current,i=P&&!n&&(o===l.UQ||o===l.IM)?yield(0,g.$)(e,o).catch(()=>void 0):void 0;if(r!==k.current||(yield _(t=>({...t,metricViewConfig:e,...void 0!==i&&t.catalog!==i&&{catalog:i}}),t?{action:"noop"}:void 0),r!==k.current))return;a&&e!==M.current.committedMetricViewYaml&&(yield D(void 0,"metricViewConfig")),t||(0,c.y)("clientsideEvent",{eventType:"dashboard_local_metric_view",eventName:"dlmv_update"})}catch{}})(),[P,_,D]),$=(0,n.useMemo)(()=>({metricViewYaml:R,setMetricViewYaml:O}),[R,O]),F=(0,n.useMemo)(()=>({unifiedDataSource:I,isDataSourceReady:I?.status.isReady??!1,embedded:!0,esComponent:u.Es.Lakeview,resolvedCatalog:a.catalog??void 0}),[I,a.catalog]),U=(0,i.W)("databricks.fe.lakeview.enableLakeviewQueryForAuthoringQueries",!1),q=(0,n.useCallback)(({flushPendingYamlChanges:t})=>(0,p.of)()?[(0,h.q)(e,{beforeUndoRedo:()=>S(function*(){let e,a=yield(0,x.i)(),r=new Promise(t=>{let r,n=()=>{void 0!==r&&window.clearTimeout(r),e&&a.unregisterPlugin(e),t()};e={initialize:e=>{e.on("queue.empty",n),r=window.setTimeout(n,5e3)},cleanup:e=>{e.off("queue.empty",n),void 0!==r&&window.clearTimeout(r)}},a.registerPlugin(e)}),n=!1;try{(n=yield t())&&(yield r)}finally{!n&&e&&a.unregisterPlugin(e)}})()})]:[],[e]),B=(0,n.useMemo)(()=>({disableAssistantAutoOpen:!0,preferLowCodeUI:!0,disableAbandonChangesPrompt:!0,autoGenerateInitialFields:!0,hideColumnTags:!0,useInternalAssistantContext:!1,hideMaterializationUI:!0,requireTargetCatalog:!U&&void 0,readOnly:t.readOnly??!1,hideGraphUI:t.hideGraphUI??!1,editorPlugins:q}),[t.readOnly,t.hideGraphUI,q,U]),V=(0,n.useMemo)(()=>U?{useExecutePreviewQuery:t=>(0,f.kD)(t,e),useCreateTempMetricView:t=>(0,f.pv)(t,e),useValidateJoins:t=>(function({metricView:e,dataSourceReady:t},a){let r=(0,n.useMemo)(()=>e?(0,d.JJ)(e):[],[e]),[o]=(0,w.eC)([a]);if(!t||0===r.length)return{isValidating:!1,joinsWithErrors:[]};if("loading"===o.status)return{isValidating:!0,joinsWithErrors:[]};if("error"===o.status){let e=o.errorMessage??"Unknown error";return{isValidating:!1,joinsWithErrors:r.map(t=>({join:t,error:e}))}}return{isValidating:!1,joinsWithErrors:[]}})(t,e)}:{},[e,U]);return(0,n.useMemo)(()=>({state:$,app:F,capabilities:B,query:V}),[$,F,B,V])}h=(_.then?(await _)():_)[0],r()}catch(e){r(e)}})},427524:(e,t,a)=>{a.d(t,{r:()=>f});var r=a(941614),n=a(953902),o=a(876665),i=a(255118),l=a(255791),s=a(582951),c=a(448003),u=a(409911);function d(e,t,a,r,n,o,i){try{var l=e[o](i),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(r,n)}function m(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var o=e.apply(t,a);function i(e){d(o,r,n,i,l,"next",e)}function l(e){d(o,r,n,i,l,"throw",e)}i(void 0)})}}let p=(0,n.j7)(l.X,{oldHook:function(){return(0,r.Zs)(({snapshot:{getPromise:e},set:t})=>()=>m(function*(){(0,i.hY)({predicate:()=>!0})})())},newHook:s.wO});function f(){return{refreshDashboard:(0,r.Zs)(({snapshot:{getPromise:e},set:t,transact_UNSTABLE:a})=>()=>m(function*(){let t=yield e(c.u),r=yield Promise.all(t.map(t=>e((0,u.n)(t))));a(({set:e})=>{let a=Date.now();t.map((t,n)=>e((0,o.a)(t),{...r[n],acceptStaleResultsAfterEpochTimeMs:a}))})})(),[]),cancelRefresh:p()}}},428296:(e,t,a)=>{a.d(t,{DI:()=>i,WO:()=>n,mk:()=>s,nW:()=>o,pJ:()=>l});var r=a(141078);function n({catalog:e,schema:t,table:a,skip:o=!1,onCompleted:l}){let s=[e,t,a].join(".");return(0,r.IT)(i,{variables:{tableFullName:s},skip:o,onCompleted:l})}let o=(0,r.J1)`
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
`,i=(0,r.J1)`
  ${o}
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
`;function l({catalog:e,schema:t,table:a,skip:n=!1,onCompleted:o}){let i=[e,t,a].join(".");return(0,r.IT)(s,{variables:{tableFullName:i},skip:n,onCompleted:o})}let s=(0,r.J1)`
  ${o}
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
`},497937:(e,t,a)=>{a.d(t,{Zp:()=>d});var r=a(692738),n=a(923305),o=a(591105),i=a(794938),l=a(6e4),s=a(681695),c=a(488655);function u(e,t,a,r,n,o,i){try{var l=e[o](i),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(r,n)}let d=(0,l.CV)()?c.Zp:function(){return(0,r.useCallback)((e,{replace:t=!1,state:a={}}={})=>{((e,t=!1)=>{var a;return(a=function*(){yield(0,o.y)(10);let a="boolean"==typeof t?{replace:t,triggerRouteChange:!1,noBasePath:!1}:t,r=(0,n.Eq)(e),c=window.location.origin,u=!r||e===c||e.startsWith(`${c}/`);if(r||e.startsWith("/"),!u){window.location.href=e;return}r||a.noBasePath||(e=(0,n.Hi)(e));let d=new URL(e=i.y.adjustUrl(e),window.location.origin);if(s.GZ.isAvailable())return void(yield s.GZ.call({href:`${d.pathname}${d.search}${d.hash}`,replace:a.replace}));if(!(0,n.U0)(d.pathname)){window.location.href=e;return}l.Ay.update({path:d.pathname,search:d.search,hash:d.hash},a.replace,{triggerRouteChange:a.triggerRouteChange})},function(){var e=this,t=arguments;return new Promise(function(r,n){var o=a.apply(e,t);function i(e){u(o,r,n,i,l,"next",e)}function l(e){u(o,r,n,i,l,"throw",e)}i(void 0)})})()})(e,{replace:t,noBasePath:!0,...a})},[])}},498250:(e,t,a)=>{a.d(t,{aQ:()=>i,xS:()=>o});var r=a(141078);function n(e,t,a,r,n,o,i){try{var l=e[o](i),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(r,n)}let o=(0,r.J1)`
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
`;function i(e,t,a){var r;return(r=function*(e,t,{maxResults:a=100,pageToken:r}={},n){let{data:i}=yield e.query({query:o,variables:{schemaFullName:t,maxResults:a,pageToken:r},fetchPolicy:n});return i.unityCatalogSchemaNameReference?.schema?.functions??null},function(){var e=this,t=arguments;return new Promise(function(a,o){var i=r.apply(e,t);function l(e){n(i,a,o,l,s,"next",e)}function s(e){n(i,a,o,l,s,"throw",e)}l(void 0)})}).apply(this,arguments)}},556215:(e,t,a)=>{a.d(t,{L4:()=>l,l3:()=>i,nb:()=>s});var r,n=a(342411),o=a(357548),i=((r={}).MY_ORGANIZATION="My organization",r.DELTA_SHARES_RECEIVED="Delta Shares received",r.LEGACY="Legacy",r.OUTSIDE_WORKSPACE="Outside this workspace",r.HOME_VOLUME="Home volume",r);let l={"My organization":(0,n.zR)({id:"EiZa9Z",defaultMessage:"My organization"}),"Delta Shares received":(0,n.zR)({id:"Mfcnof",defaultMessage:"Delta Shares received"}),Legacy:(0,n.zR)({id:"WWW5DS",defaultMessage:"Legacy"}),"Outside this workspace":(0,n.zR)({id:"9JBqq2",defaultMessage:"Outside this workspace"}),"Home volume":o.A};function s(e,t,a,r,n){let o=[];for(let[i,l]of e){let e=t(i);o.push({id:a(e),data:e,children:l.map(e=>({id:a(e),data:e})),metadata:r(i),defaultExpanded:n?.(i)})}return o}},572538:(e,t,a)=>{a.d(t,{Vl:()=>o,ih:()=>i});var r=a(141078);function n(e,t,a,r,n,o,i){try{var l=e[o](i),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(r,n)}let o=(0,r.J1)`
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
`;function i(e,t,a){var r;return(r=function*(e,t,{maxResults:a=100,pageToken:r}={},n){let{data:i}=yield e.query({query:o,variables:{schemaFullName:t,maxResults:a,pageToken:r},fetchPolicy:n});return i.unityCatalogSchemaNameReference?.schema?.volumes??null},function(){var e=this,t=arguments;return new Promise(function(a,o){var i=r.apply(e,t);function l(e){n(i,a,o,l,s,"next",e)}function s(e){n(i,a,o,l,s,"throw",e)}l(void 0)})}).apply(this,arguments)}},591105:(e,t,a)=>{a.d(t,{y:()=>r});let r=(e=0)=>new Promise(t=>setTimeout(t,e))},609378:(e,t,a)=>{a.d(t,{Kr:()=>l,Wz:()=>s,ZY:()=>i});var r=a(141078),n=a(491438);function o(e,t,a,r,n,o,i){try{var l=e[o](i),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(r,n)}function i({catalog:e,metastoreScope:t,skip:a=!1,onCompleted:o}){return(0,r.IT)(l,{variables:{catalogName:e??""},context:(0,n.Xe)(t),skip:a,onCompleted:o})}let l=(0,r.J1)`
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
`;function s(e,t,a){var r;return(r=function*(e,t,{maxResults:a=20,pageToken:r,metastoreScope:o}={},i){let{data:s}=yield e.query({query:l,variables:{catalogName:t,schemasMaxResults:a,schemasPageToken:r},context:(0,n.Xe)(o),fetchPolicy:i}),c=s.unityCatalogCatalogNameReference?.catalog?.schemas;return{ucSchemas:c?.nodes??[],nextPageToken:c?.nextPageToken??null}},function(){var e=this,t=arguments;return new Promise(function(a,n){var i=r.apply(e,t);function l(e){o(i,a,n,l,s,"next",e)}function s(e){o(i,a,n,l,s,"throw",e)}l(void 0)})}).apply(this,arguments)}},673298:(e,t,a)=>{a.d(t,{Rf:()=>h,Ys:()=>y,fx:()=>x});var r=a(483588),n=a(617293),o=a(680479),i=a(29824),l=a(491438),s=a(556215),c=a(311642),u=a(344918);function d(e,t,a,r,n,o,i){try{var l=e[o](i),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(r,n)}function m(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var o=e.apply(t,a);function i(e){d(o,r,n,i,l,"next",e)}function l(e){d(o,r,n,i,l,"throw",e)}i(void 0)})}}let p=(e,t,a,r,n)=>({key:e,filter:(Array.isArray(t)?t:[t]).map(e=>`type=${e}`).join(" OR "),includeBrowse:r,includeUnbound:n,targetGroup:a}),{MY_ORGANIZATION:f,DELTA_SHARES_RECEIVED:g}=s.l3;function h({includeBrowse:e,includeUnbound:t}){return[p("my_org_managed","MANAGED_CATALOG",f,e,t),p("my_org_managed_online","MANAGED_ONLINE_CATALOG",f,e,t),p("my_org_foreign","FOREIGN_CATALOG",f,e,t),p("my_org_internal_system",["INTERNAL_CATALOG","SYSTEM_CATALOG"],f,e,t),p("delta_sharing","DELTASHARING_CATALOG",g,e,t)]}function y(e,t,a,r){return m(function*(){let n=a.map(a=>()=>m(function*(){let n,i=[];do{let s=yield function(e,t,a,r){return m(function*(){let{data:n}=yield e.query({query:o.I,variables:{maxResults:c.WX,pageToken:a??null,omitAuthorizedPaths:!0,filter:r?.filter,includeBrowse:r?.includeBrowse,includeUnbound:r?.includeUnbound},fetchPolicy:t,context:(0,l.Xe)(r?.metastoreScope),canonizeResults:!1});return{items:n?.unityCatalogCatalogs?.nodes??[],nextPageToken:n?.unityCatalogCatalogs?.nextPageToken??null}})()}(e,t,n,{filter:a.filter,includeBrowse:a.includeBrowse,includeUnbound:a.includeUnbound,metastoreScope:r});i.push(...s.items),n=s.nextPageToken??void 0}while(n);return i})()),i=yield m(function*(){let e=Array(n.length),t=0;return yield Promise.all(Array.from({length:Math.min(10,n.length)},()=>m(function*(){for(;t<n.length;){let a=t++;try{e[a]={status:"fulfilled",value:yield n[a]()}}catch(t){e[a]={status:"rejected",reason:t}}}})())),e})(),s=new Map;return i.forEach((e,t)=>{let r=a[t];"fulfilled"===e.status?s.set(r.key,{streamKey:r.key,config:r,items:e.value}):s.set(r.key,{streamKey:r.key,config:r,items:[],failed:!0,error:e.reason})}),s})()}let v=()=>{let e=globalThis.scheduler;if(e?.yield)return e.yield();return new Promise(e=>setTimeout(e,0))};function x(e,t){return m(function*(){let a=new Map;for(let[,r]of e)for(let e of r.items){if(null==e||null==e.name)continue;let n=e.managedCatalogCatalogInfo?.accessibleInCurrentWorkspace===!1,o=n?s.l3.OUTSIDE_WORKSPACE:r.config.targetGroup,l=function(e,t){let a=e.name??"",r={objectType:i.an.CATALOG,catalog:a,securable_id:e.id,securableKind:e.securableKind??void 0};return(0,c.hf)({name:a,type:c.Hl.CATALOG,fullName:a,browse_only:e.managedCatalogCatalogInfo?.browseOnly??!1,accessible:t.accessible,securableKind:e.securableKind??void 0,catalogType:e.managedCatalogCatalogInfo?.catalogType??void 0,isDefault:!!(t.defaultCatalogName&&e.name===t.defaultCatalogName),dataEntity:r,needsCompute:t.isForeignDataRequireCompute?.(e.securableKind??void 0)})}(e,{defaultCatalogName:t.defaultCatalogName,isForeignDataRequireCompute:t.isForeignDataRequireCompute,accessible:!n&&void 0}),u=a.get(o)??[];u.push(l),a.set(o,u)}return yield v(),function(e){let t=e.get(s.l3.MY_ORGANIZATION);if(!t)return;let a=[],o=[];for(let e of t)e.name===n.Ef||e.securableKind===r.T_5.CATALOG_DELTASHARING?a.push(e):o.push(e);if(0===a.length)return;e.set(s.l3.MY_ORGANIZATION,o);let i=e.get(s.l3.DELTA_SHARES_RECEIVED)??[];i.push(...a),e.set(s.l3.DELTA_SHARES_RECEIVED,i)}(a),yield v(),function(e){for(let[t,a]of e){let r=new Set;e.set(t,a.filter(e=>{let t=function(e){if(e.dataEntity?.securable_id)return`id:${e.dataEntity.securable_id}`;return`name:${e.name}|kind:${e.securableKind}|browse:${e.browse_only}|accessible:${e.accessible}`}(e);if(r.has(t))return!1;return r.add(t),!0}))}}(a),yield v(),function(e){let t={[s.l3.MY_ORGANIZATION]:u.X,[s.l3.DELTA_SHARES_RECEIVED]:u.$,[s.l3.OUTSIDE_WORKSPACE]:e=>e.toSorted((e,t)=>e.name.localeCompare(t.name))};for(let[a,r]of e){let n=t[a];n&&e.set(a,n(r))}}(a),a})()}},680479:(e,t,a)=>{a.d(t,{I:()=>n});var r=a(141078);let n=(0,r.J1)`
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
`},686471:(e,t,a)=>{a.d(t,{pv:()=>p,kD:()=>P});var r=a(692738),n=a(953902),o=a(205227),i=a(398331),l=a(526212),s=a(255791),c=a(207966),u=a(582951);function d(e){if(e.sql_type)return(0,o.CX)(e.sql_type);return(0,c.K)(e.type??"string").toLowerCase()}function m({isLoading:e,isFetching:t,isFetched:a,isSuccess:r,isError:n,status:o,data:i,error:l}){return{isLoading:e,isFetching:t,isFetched:a,isSuccess:r,isError:n,status:o,data:i,error:l,isIdle:!1,isFetchedAfterMount:!1,isRefetching:!1,isPreviousData:!1,isPlaceholderData:!1,isStale:!1,isLoadingError:!1,isRefetchError:!1,dataUpdatedAt:0,errorUpdatedAt:0,failureCount:0,failureReason:null,errorUpdateCount:0,refetch:()=>Promise.resolve({}),remove:()=>{}}}let p=(0,n.j7)(s.X,{oldHook:function({useQueryOptions:e},t){let a=e?.enabled!==!1,n=(0,i.A)((0,l.fs)(t));return(0,r.useMemo)(()=>{let e=n.data?.type==="success"?n.data.columns:void 0,t=n.isIdle||n.isLoading||n.isFetching,r=!t&&(n.isError||void 0===e),o=e?.map(e=>({col_name:e.name,data_type:d(e),comment:""})),i=r?n.error??Error(n.data?.type==="error"?n.data.error.message:"Failed to describe metric view"):n.error;return{...n,isLoading:a&&!!n.isLoading,isFetching:a&&!!n.isFetching,isFetched:a&&!t,isSuccess:a&&!t&&!r,data:a?o:void 0,error:i}},[a,n])},newHook:function({useQueryOptions:e},t){let a=e?.enabled!==!1,n=(0,u.pp)(t,{caller:"useDashboardCreateTempMetricView",callInstanceId:t});return(0,r.useMemo)(()=>{if(!a)return m({isLoading:!1,isFetching:!1,isFetched:!1,isSuccess:!1,isError:!1,status:"loading",data:void 0,error:void 0});if(!n||"loading"===n.status||"no-queries"===n.status)return m({isLoading:!0,isFetching:!0,isFetched:!1,isSuccess:!1,isError:!1,status:"loading",data:void 0,error:void 0});switch(n.status){case"error":return m({isLoading:!1,isFetching:!1,isFetched:!0,isSuccess:!1,isError:!0,status:"error",data:void 0,error:Error(n.error.message)});case"success":return m({isLoading:!1,isFetching:!1,isFetched:!0,isSuccess:!0,isError:!1,status:"success",data:n.data.columns.map(e=>({col_name:e.name,data_type:d(e),comment:""})),error:void 0})}},[a,n])}});var f=a(266925),g=a(404386),h=a(994393),y=a(941614);function v(e,t,a){let r=e=>({isIdle:!1,dataUpdatedAt:0,errorUpdatedAt:0,failureCount:0,failureReason:null,errorUpdateCount:0,isStale:!1,isLoadingError:!1,isPlaceholderData:!1,isPreviousData:!1,isRefetchError:!1,isRefetching:!1,refetch:()=>Promise.resolve({}),remove:()=>{},previewType:a,...e}),n=()=>r({data:void 0,error:null,isLoading:!0,isFetching:!0,isError:!1,isSuccess:!1,isFetched:!1,isFetchedAfterMount:!1,isInitialLoading:!0,status:"loading"});if(void 0===e||"loading"===e.status)return n();switch(e.status){case"error":return r({data:void 0,error:Error(e.error.error.message),isLoading:!1,isFetching:!1,isError:!0,isSuccess:!1,isFetched:!0,isFetchedAfterMount:!0,isInitialLoading:!1,status:"error"});case"success":return r({data:e.data?.[0]?x(e.data[0],t):void 0,error:null,isLoading:!1,isFetching:!1,isError:!1,isSuccess:!0,isFetched:!0,isFetchedAfterMount:!0,isInitialLoading:!1,status:"success"});case"no-queries":return r({data:void 0,error:null,isLoading:!1,isFetching:!1,isError:!1,isSuccess:!0,isFetched:!0,isFetchedAfterMount:!0,isInitialLoading:!1,status:"success"});default:return n()}}function x(e,t){if(!e)return{query:t,error:"Query did not return a result"};if("success"!==e.type)return{query:t,error:e.error.message};let{columns:a,rows:r}=e.data;return{query:t,data:r,schema:{columns:a.map((e,t)=>{let a=e.sql_type||e.type||"string";return{name:e.name,position:t,type_text:a,type_name:a}})}}}var E=a(193602),b=a(889258),C=a(255118);function w(e,t,a,r,n,o,i){try{var l=e[o](i),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(r,n)}let T=(0,n.j7)(s.X,{oldHook:function({metricViewYaml:e,metricView:t,useQueryOptions:a},r){let{name:n,warehouseId:o,warehouseType:i}=(0,y.vc)(E.A),{catalog:l}=(0,b.E)(r),s=t?.dimensions?.map(e=>e.name)??[],c=!!(a?.enabled!==!1&&t&&s.length>0&&o);return{...(0,h.useQuery)(["dataModelPreviewQuery",r,e,l,o],()=>{var t;return(t=function*(){let[t]=yield(0,C.Rw)({dataset:{name:r,metricViewConfig:e,catalog:l},dimensionNames:s,dashboardName:n,warehouseId:o,warehouseType:i});return x(t,s.join(", "))},function(){var e=this,a=arguments;return new Promise(function(r,n){var o=t.apply(e,a);function i(e){w(o,r,n,i,l,"next",e)}function l(e){w(o,r,n,i,l,"throw",e)}i(void 0)})})()},{enabled:c,refetchOnWindowFocus:!1,refetchOnMount:!1,refetchOnReconnect:!1}),previewType:"dataModel"}},newHook:function({metricViewYaml:e,metricView:t,useQueryOptions:a},n){let{name:o,warehouseId:i,warehouseType:l}=(0,y.vc)(E.A),{catalog:s}=(0,b.E)(n),c=(0,r.useMemo)(()=>t?.dimensions?.map(e=>e.name)??[],[t]),d=!!(a?.enabled!==!1&&t&&c.length>0&&i),m={datasetName:n,disaggregatedData:!0,fields:c.map(e=>({fieldName:e,expression:`\`${e}\``})),context:{datasets:[{name:n,metricViewConfig:e,catalog:s,columns:[]}],warehouseId:i,warehouseType:l,dashboardName:o,type:"Authoring",rowLimit:100},type:"QuerySpec",describe:!1};return v((0,u.pl)({registration:{logicalId:(0,u.mF)(`preview:dataModel:${n}:${e}:${s??""}:${i??""}`),resourceName:n,queries:[m],label:`preview:dataModel:${n}`},enabled:d},{caller:"useDataModelPreviewQuery",callInstanceId:n}),c.join(", "),"dataModel")}});var _=a(651487),I=a(602782);function S(e,t,a,r,n,o,i){try{var l=e[o](i),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(r,n)}let A=(0,n.j7)(s.X,{oldHook:function({metricViewYaml:e,selectedMeasureOrDimension:t,useQueryOptions:a},r){let{name:n,warehouseId:o,warehouseType:i}=(0,y.vc)(E.A),{catalog:l}=(0,b.E)(r),s=t?.name,c=!!(a?.enabled!==!1&&s&&o);return{...(0,h.useQuery)(["dimensionPreviewQuery",r,s,t?.expr,l,o],()=>{var t;return(t=function*(){let[t]=yield(0,C.s$)({dataset:{name:r,metricViewConfig:e,catalog:l},dimensionName:s??"",dashboardName:n,warehouseId:o,warehouseType:i});return x(t,s??"")},function(){var e=this,a=arguments;return new Promise(function(r,n){var o=t.apply(e,a);function i(e){S(o,r,n,i,l,"next",e)}function l(e){S(o,r,n,i,l,"throw",e)}i(void 0)})})()},{enabled:c,refetchOnWindowFocus:!1,refetchOnMount:!1,refetchOnReconnect:!1}),previewType:"dimension"}},newHook:function({metricViewYaml:e,selectedMeasureOrDimension:t,useQueryOptions:a},r){let{name:n,warehouseId:o,warehouseType:i}=(0,y.vc)(E.A),{catalog:l}=(0,b.E)(r),s=t?.name,c=!!(a?.enabled!==!1&&s&&o),d={datasetName:r,disaggregatedData:!1,fields:[{fieldName:s??"",expression:`\`${s}\``},{fieldName:I.k,expression:"COUNT(*)"}],orderBys:[{direction:_.OP.DESC,expression:I.k}],context:{datasets:[{name:r,metricViewConfig:e,catalog:l,columns:[]}],warehouseId:o,warehouseType:i,dashboardName:n,type:"Authoring",rowLimit:100},type:"QuerySpec",describe:!1};return v((0,u.pl)({registration:{logicalId:(0,u.mF)(`preview:dimension:${r}:${s}:${e}:${l??""}:${o??""}`),resourceName:r,queries:[d],label:`preview:dimension:${r}/${s}`},enabled:c},{caller:"useDimensionPreviewQuery",callInstanceId:`${r}:${s??""}`}),s??"","dimension")}});function D(e,t,a,r,n,o,i){try{var l=e[o](i),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(r,n)}let R=(0,n.j7)(s.X,{oldHook:function({metricViewYaml:e,selectedMeasureOrDimension:t,groupByColNames:a,useQueryOptions:r},n){let{name:o,warehouseId:i,warehouseType:l}=(0,y.vc)(E.A),{catalog:s}=(0,b.E)(n),c=t?.name,u=!!(r?.enabled!==!1&&c&&i);return{...(0,h.useQuery)(["measurePreviewQuery",n,c,t?.expr,a,s,i],()=>{var t;return(t=function*(){let[t]=yield(0,C.I5)({dataset:{name:n,metricViewConfig:e,catalog:s},measureName:c??"",dashboardName:o,groupByColNames:a?.filter(Boolean),warehouseId:i,warehouseType:l});return x(t,`MEASURE("${c}")`)},function(){var e=this,a=arguments;return new Promise(function(r,n){var o=t.apply(e,a);function i(e){D(o,r,n,i,l,"next",e)}function l(e){D(o,r,n,i,l,"throw",e)}i(void 0)})})()},{enabled:u,refetchOnWindowFocus:!1,refetchOnMount:!1,refetchOnReconnect:!1}),previewType:"measure"}},newHook:function({metricViewYaml:e,selectedMeasureOrDimension:t,groupByColNames:a,useQueryOptions:r},n){let{name:o,warehouseId:i,warehouseType:l}=(0,y.vc)(E.A),{catalog:s}=(0,b.E)(n),c=t?.name,d=t?.expr,m=!!(r?.enabled!==!1&&c&&i),p=a?.filter(Boolean)??[],f=[{fieldName:c??"",expression:`MEASURE(\`${c}\`)`},...p.map(e=>({fieldName:e,expression:`\`${e}\``}))],g=(0,u.pl)({registration:{logicalId:(0,u.mF)(`preview:measure:${n}:${c}:${d}:${e}:${s??""}:${p.join(",")}:${i??""}`),resourceName:n,queries:[{datasetName:n,disaggregatedData:!1,fields:f,context:{datasets:[{name:n,metricViewConfig:e,catalog:s,columns:[]}],warehouseId:i,warehouseType:l,dashboardName:o,type:"Authoring",rowLimit:100},type:"QuerySpec",describe:!1}],label:`preview:measure:${n}/${c}`},enabled:m},{caller:"useMeasurePreviewQuery",callInstanceId:`${n}:${c??""}`});return v(g,`MEASURE("${c}")`,"measure")}});function L(e,t,a,r,n,o,i){try{var l=e[o](i),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(r,n)}let N=(0,n.j7)(s.X,{oldHook:function({sourceNameOrSql:e,useQueryOptions:t},a){let{name:r,warehouseId:n,warehouseType:o}=(0,y.vc)(E.A),{catalog:i}=(0,b.E)(a),l=!!(t?.enabled!==!1&&void 0!==e&&n);return{...(0,h.useQuery)(["sourcePreviewQuery",e,i,n],()=>{var t;return(t=function*(){let[t]=yield(0,C.rT)({sourceNameOrSql:e??"",datasetName:a,dashboardName:r,warehouseId:n,warehouseType:o,catalog:i});return x(t,e??"")},function(){var e=this,a=arguments;return new Promise(function(r,n){var o=t.apply(e,a);function i(e){L(o,r,n,i,l,"next",e)}function l(e){L(o,r,n,i,l,"throw",e)}i(void 0)})})()},{enabled:l,refetchOnWindowFocus:!1}),previewType:"source"}},newHook:function({sourceNameOrSql:e,useQueryOptions:t},a){let{name:n,warehouseId:o,warehouseType:i}=(0,y.vc)(E.A),{catalog:l}=(0,b.E)(a),s=!!(t?.enabled!==!1&&void 0!==e&&o),[c,d]=(0,r.useState)(0),m=(0,u.pl)({registration:{logicalId:(0,u.mF)(`preview:source:${a}:${e}:${l??""}:${o??""}:${c}`),resourceName:a,queries:[{type:"DatasetQuerySpec",datasetName:a,describe:!1,context:{type:"Authoring",datasets:[{name:a,query:e??"",columns:[],catalog:l}],dashboardName:n,warehouseId:o,warehouseType:i,rowLimit:100}}],label:`preview:source:${a}`},enabled:s},{caller:"useSourcePreviewQuery",callInstanceId:a}),p=v(m,e??"","source"),f=(0,r.useCallback)(()=>(d(e=>e+1),Promise.resolve({})),[]);return{...p,refetch:f}}});function P(e,t){let a=void 0!==e.sourceNameOrSql,r=void 0!==e.selectedMeasureOrDimension&&"measure"===e.selectedMeasureOrDimension.internalOnlyColumnType,n=void 0!==e.selectedMeasureOrDimension&&"dimension"===e.selectedMeasureOrDimension.internalOnlyColumnType,o=!a&&!r&&!n,i=!a&&!o||e.useQueryOptions?.enabled!==!1,l=a&&(0,f.TA)(e.sourceNameOrSql??"")?`SELECT * FROM ${(0,g.qs)(e.sourceNameOrSql??"")} LIMIT 100`:e.sourceNameOrSql,s=N({...e,sourceNameOrSql:l,useQueryOptions:{...e.useQueryOptions,enabled:i&&a}},t),c=R({...e,useQueryOptions:{...e.useQueryOptions,enabled:i&&r}},t),u=A({...e,useQueryOptions:{...e.useQueryOptions,enabled:i&&n}},t),d=T({...e,useQueryOptions:{...e.useQueryOptions,enabled:i&&o}},t);if(a)return{...s,previewType:"source"};if(r)return{...c,previewType:"measure"};if(n)return{...u,previewType:"dimension"};return{...d,previewType:"dataModel"}}},710283:(e,t,a)=>{a.d(t,{s:()=>l});var r=a(650003),n=a(692738),o=a(141078),i=a(940912);function l(e,t){let a=(0,o.mK)(t?.client),[l,s]=(0,n.useState)(()=>{if(t?.skip)return null;return a.subscribe({query:e,variables:t?.variables,fetchPolicy:t?.fetchPolicy,context:{...t?.context,currentImplicitContext:(0,i.yB)()}})}),c=(0,n.useRef)(!1);(0,n.useEffect)(()=>()=>{c.current=!0},[]);let u=(0,n.useRef)({client:a,subscription:e,options:t});(0,n.useEffect)(()=>{let n=t?.shouldResubscribe;"function"==typeof n&&(n=!!n(t)),t?.skip?(!t?.skip!=!u.current.options?.skip||c.current)&&(s(null),c.current=!1):(!1!==n&&(a!==u.current.client||e!==u.current.subscription||t?.fetchPolicy!==u.current.options?.fetchPolicy||!t?.skip!=!u.current.options?.skip||!(0,r.L)(t?.variables,u.current.options?.variables))||c.current)&&(s(a.subscribe({query:e,variables:t?.variables,fetchPolicy:t?.fetchPolicy,context:{...t?.context,currentImplicitContext:(0,i.yB)()}})),c.current=!1),Object.assign(u.current,{client:a,subscription:e,options:t})},[a,e,t,c.current]),(0,n.useEffect)(()=>{if(!l)return;let e=l.subscribe({next(e){let r={loading:!1,data:e.data,error:void 0,variables:t?.variables};u.current.options?.onSubscriptionData?.({client:a,subscriptionData:r})},error(e){u.current.options?.onError?.(e)},complete(){u.current.options?.onSubscriptionComplete?.()}});return()=>{e.unsubscribe()}},[l])}},794938:(e,t,a)=>{a.d(t,{E:()=>c,y:()=>i});var r=a(514503),n=a.n(r),o=a(923305);let i={adjustUrl:a(93353).WI},l=new Set,s=new Set;function c(e,t){let a=(0,o.Eq)(e),r=window.location.origin;if(!(!a||e===r||e.startsWith(`${r}/`)))return e;return t||a||(e=(0,o.Hi)(e)),e=i.adjustUrl(e)}n()(()=>{console.warn(`[Deprecation warning] Relative hrefs in <Link> are deprecated. Prefix hrefs with '/', e.g. <Link href="/dashboards">.
The following URLs were called as relative:
`,[...s].map(e=>`- ${e}`).join("\n")),s.forEach(e=>l.add(e)),s.clear()},3e3)},846312:(e,t,a)=>{a.d(t,{Qp:()=>o,xH:()=>i});var r=a(141078);function n(e,t,a,r,n,o,i){try{var l=e[o](i),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(r,n)}let o=(0,r.J1)`
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
`;function i(e,t,a){var r;return(r=function*(e,t,{maxResults:a=100,pageToken:r}={},n){let{data:i}=yield e.query({query:o,variables:{schemaFullName:t,maxResults:a,pageToken:r},fetchPolicy:n});return i.unityCatalogSchemaNameReference?.schema?.models??null},function(){var e=this,t=arguments;return new Promise(function(a,o){var i=r.apply(e,t);function l(e){n(i,a,o,l,s,"next",e)}function s(e){n(i,a,o,l,s,"throw",e)}l(void 0)})}).apply(this,arguments)}},866153:(e,t,a)=>{a.d(t,{I:()=>n,w:()=>r});let r=(e,t)=>e.type>=t.ACCESS&&e.type<=t.ZONE,n=(e,t)=>e.type>=t.ADD&&e.type<=t.ZONE},889258:(e,t,a)=>{a.d(t,{E:()=>n});var r=a(841171);function n(e){return(0,r.WD)().config.getDataset(e)}},948555:(e,t,a)=>{a.d(t,{s:()=>n});var r=a(141078);let n=(0,r.J1)`
  query UserRecents__deduped($count: Int!, $filter: UseractivityListRecentAssetsRequestFilterInput)
  @component(name: "Lakeview.DatabricksOne") {
    useractivityListRecentAssets(input: { numResults: $count, filter: $filter }) {
      assets {
        asset {
          name
          id
          type
          unityCatalogSecurable {
            securableKind
          }
        }
        viewTime
      }
      nextPageToken
    }
  }
`},964942:(e,t,a)=>{a.d(t,{Ku:()=>i,L3:()=>o});var r=a(141078);function n(e,t,a,r,n,o,i){try{var l=e[o](i),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(r,n)}let o=(0,r.J1)`
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
`;function i(e,t,a){var r;return(r=function*(e,t,{maxResults:a=100,pageToken:r,enabled:n=!0}={},i){if(!n)return null;let{data:l}=yield e.query({query:o,variables:{schemaFullName:t,maxResults:a,pageToken:r},fetchPolicy:i});return l.unityCatalogSchemaNameReference?.schema?.secrets??null},function(){var e=this,t=arguments;return new Promise(function(a,o){var i=r.apply(e,t);function l(e){n(i,a,o,l,s,"next",e)}function s(e){n(i,a,o,l,s,"throw",e)}l(void 0)})}).apply(this,arguments)}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/9765.82459b0683.chunk.js.map