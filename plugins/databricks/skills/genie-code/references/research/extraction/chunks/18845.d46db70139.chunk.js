"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[18845],{206072:(e,a,t)=>{t.d(a,{$:()=>u,N:()=>p});var r=t(692738),n=t(927239),i=t(660618),o=t(733337),l=t(595615);function s(e,a,t,r,n,i,o){try{var l=e[i](o),s=l.value}catch(e){t(e);return}l.done?a(s):Promise.resolve(s).then(r,n)}function d(){let e=`${i.bY}/connections`;return(0,r.useCallback)(()=>({queryKey:[n.a],queryFn:()=>{var a;return(a=function*(){return yield(0,o.Ky)(e,e=>e.connections)},function(){var e=this,t=arguments;return new Promise(function(r,n){var i=a.apply(e,t);function o(e){s(i,r,n,o,l,"next",e)}function l(e){s(i,r,n,o,l,"throw",e)}o(void 0)})})()}}),[e])}function u(e){let a=d();return(0,l.AO)({...a(),...e})}function p(){return(0,l.Ox)({queryFn:d})}},217930:(e,a,t)=>{t.d(a,{NV:()=>s,XS:()=>u,Y5:()=>l,ek:()=>d});var r,n=t(751777),i=t(235257),o=t(311642);let l=["useractivityListFavoriteAssets","userActivityInfos"],s=e=>{l.forEach(a=>e.evict({fieldName:a,broadcast:!0})),e.gc()};var d=((r={}).AlertPageHeader="alert_page_header",r.AlertsListPage="alerts_list_page",r.AlertsV2PageHeader="alerts_v2_page_header",r.AlertsV2ListPage="alerts_v2_list_page",r.DatabricksOne="databricks_one",r.DashboardPageHeader="dashboard_page_header",r.DashboardTable="dashboard_table",r.LegacyDashboardTable="legacy_dashboard_table",r.FavoritesTable="favorites_table",r.PopularTable="popular_table",r.LakeviewDashboardPageHeader="lakeview_dashboard_page_header",r.LakeviewPublishedDashboardPageHeader="lakeview_published_dashboard_page_header",r.QueryEditorControls="query_editor_controls",r.QueryListTable="query_list_table",r.JobsListTable="jobs_list_table",r.JobDetailsHeader="job_details_header",r.LibraryPage="library_page",r.NotebookHeader="notebook_header",r.FilebrowserTable="filebrowser_table",r.FavoritesPage="favorites_page",r.FilebrowserHeader="filebrowser_header",r.SchemaBrowser="schema_browser",r.CatalogExplorerFavList="catalog-explorer-fav-list",r.CatalogExplorerDetailPage="catalog-explorer-detail-page",r.BrowserMetadataPreview="browser-metadata-preview",r.PipelineAuthoringHeader="pipeline_authoring_header",r.PipelineDetailsPageHeader="pipeline_details_page_header",r.PipelinesTable="pipelines_table",r.DataRoomHeader="data_room_header",r.DataRoomTable="data_room_table",r.UCModelsPage="uc_models_page",r.AppDetailsHeader="app_details_header",r.AppsTable="apps_table",r.WorkspaceAssetsMetadataPanel="workspace_assets_metadata_panel",r.DesignerFile="designer_file",r.SearchResultsTable="search_results_table",r);function u(){(0,n.Pv)({treeEventIdentifier:i.M.UC_SCHEMA_BROWSER,invalidationEventType:i.Zk.INVALIDATE_ASSET_CHILDREN,itemId:o.FP})}},235250:(e,a,t)=>{t.d(a,{u:()=>y});var r=t(441535),n=t(840924),i=t(141078);let o=(0,i.J1)`
  fragment ApiError on ApiError {
    code
    message
  }
`,l=(0,i.J1)`
  fragment ExternalMetadataInfoFragment on MetadatalineageapiserverExternalMetadata {
    columns
    createTime
    createdBy
    description
    entityType
    id
    properties {
      key
      value
    }
    metastoreId
    name
    owner
    securableKind
    securableType
    systemType
    updateTime
    updatedBy
    url
  }
`,s=(0,i.J1)`
  query ListExternalMetadata($pageSize: Int, $pageToken: String) @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverListExternalMetadataV2(input: { pageSize: $pageSize, pageToken: $pageToken }) {
      apiError {
        ...ApiError
      }
      externalMetadata {
        ...ExternalMetadataInfoFragment
      }
      nextPageToken
    }
  }
  ${l}
  ${o}
`,d=(0,i.J1)`
  query GetExternalMetadata($nameArg: String!) @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverGetExternalMetadataV2(input: { name: $nameArg }) {
      apiError {
        ...ApiError
      }
      ...ExternalMetadataInfoFragment
    }
  }
  ${l}
  ${o}
`,u=(0,i.J1)`
  mutation CreateExternalMetadata($input: MetadatalineageapiserverCreateExternalMetadataRequestInput!)
  @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverCreateExternalMetadataV2(input: $input) {
      apiError {
        ...ApiError
      }
      ...ExternalMetadataInfoFragment
    }
  }

  ${l}
  ${o}
`,p=(0,i.J1)`
  mutation CreateLineageRelationship($input: MetadatalineageapiserverCreateExternalLineageRelationshipRequestInput!)
  @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverCreateExternalLineageRelationship(input: $input) {
      apiError {
        ...ApiError
      }
    }
  }
  ${o}
`,c=(0,i.J1)`
  mutation UpdateExternalMetadata($input: MetadatalineageapiserverUpdateExternalMetadataRequestInput!)
  @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverUpdateExternalMetadataV2(input: $input) {
      apiError {
        ...ApiError
      }
      ...ExternalMetadataInfoFragment
    }
  }

  ${l}
  ${o}
`,m=(0,i.J1)`
  mutation DeleteExternalMetadata($input: MetadatalineageapiserverDeleteExternalMetadataRequestInput!)
  @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverDeleteExternalMetadataV2(input: $input) {
      apiError {
        ...ApiError
      }
    }
  }
  ${o}
`,g=(0,i.J1)`
  mutation DeleteLineageRelationship($input: MetadatalineageapiserverDeleteExternalLineageRelationshipRequestInput!)
  @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverDeleteExternalLineageRelationship(input: $input) {
      apiError {
        ...ApiError
      }
    }
  }
  ${o}
`,h=(0,i.J1)`
  mutation UpdateLineageRelationship($input: MetadatalineageapiserverUpdateExternalLineageRelationshipRequestInput!)
  @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverUpdateExternalLineageRelationship(input: $input) {
      apiError {
        ...ApiError
      }
    }
  }
  ${o}
`;var E=t(483588);function v(e,a,t,r,n,i,o){try{var l=e[i](o),s=l.value}catch(e){t(e);return}l.done?a(s):Promise.resolve(s).then(r,n)}var b=t(261557);function f(e,a,t,r,n,i,o){try{var l=e[i](o),s=l.value}catch(e){t(e);return}l.done?a(s):Promise.resolve(s).then(r,n)}function x(e){return function(){var a=this,t=arguments;return new Promise(function(r,n){var i=e.apply(a,t);function o(e){f(i,r,n,o,l,"next",e)}function l(e){f(i,r,n,o,l,"throw",e)}o(void 0)})}}let y={listExternalMetadata:(e,a)=>x(function*(){let{defaultPaginationSize:t,maxResults:n}={defaultPaginationSize:(0,r.W)("databricks.fe.data.defaultLineagePaginationSize",100),maxResults:(0,r.W)("databricks.fe.data.defaultExternalMetadataMaxResults",1e3)};return a.pageSize=t,function(e){var a;return(a=function*({query:e,client:a,extractResponse:t,extractToken:r,extractContinueFetching:n,extractMetadata:i,extractApiError:o,variables:l,maxResults:s,fetchPolicy:d="network-only"}){let u=[],p=l.pageToken??null,c=0,m=null,g=l.pageSize??100,h=s??1e3,E=!0;do try{let{data:s}=yield a.query({query:e,variables:{...l,pageSize:g,pageToken:p},fetchPolicy:d});if(!s)break;let h=o?o(s):null;if(h)throw Error(h);let v=t(s);v&&u.push(...v),p=r(s),c=u.length,E=!n||n(s),m=i?i(m,s):m}catch(e){throw e}while(p&&c<h&&E);return{response:u,pageToken:p,metadata:m}},function(){var e=this,t=arguments;return new Promise(function(r,n){var i=a.apply(e,t);function o(e){v(i,r,n,o,l,"next",e)}function l(e){v(i,r,n,o,l,"throw",e)}o(void 0)})}).apply(this,arguments)}({client:e,query:s,variables:a,maxResults:n,extractResponse:e=>e.metadatalineageapiserverListExternalMetadataV2?.externalMetadata??[],extractToken:e=>e.metadatalineageapiserverListExternalMetadataV2?.nextPageToken??null,extractApiError:e=>e.metadatalineageapiserverListExternalMetadataV2?.apiError?e.metadatalineageapiserverListExternalMetadataV2.apiError.message||e.metadatalineageapiserverListExternalMetadataV2.apiError.code:null})})(),getExternalMetadata:(e,a)=>x(function*(){let{data:t}=yield e.query({query:d,variables:{nameArg:a},fetchPolicy:"network-only"});if(t.metadatalineageapiserverGetExternalMetadataV2?.apiError)throw Error(t.metadatalineageapiserverGetExternalMetadataV2.apiError.message||"Failed to get external metadata");return t.metadatalineageapiserverGetExternalMetadataV2})(),createExternalMetadata:(e,a)=>x(function*(){try{let t=yield e.mutate({mutation:u,variables:{input:{externalMetadata:a}},fetchPolicy:"network-only"});if(t.errors)throw Error("Failed to create external metadata",{cause:t.errors});let{data:r}=t;if(r.metadatalineageapiserverCreateExternalMetadataV2?.apiError)throw Error(r.metadatalineageapiserverCreateExternalMetadataV2.apiError.message);return r.metadatalineageapiserverCreateExternalMetadataV2}catch(e){throw e}})(),createLineageRelationship:(e,a)=>x(function*(){let t=yield e.mutate({mutation:p,variables:{input:{externalLineageRelationship:a}},fetchPolicy:"network-only"});if(t.errors)throw Error("Failed to create external metadata",{cause:t.errors});let{data:r}=t;if(r.metadatalineageapiserverCreateExternalLineageRelationship?.apiError)throw Error(r.metadatalineageapiserverCreateExternalLineageRelationship.apiError.message);return r.metadatalineageapiserverCreateExternalLineageRelationship})(),updateExternalMetadata:(e,a,t)=>x(function*(){try{if(!a)throw Error("External metadata is undefined");let r=yield e.mutate({mutation:c,variables:{input:{externalMetadata:a,updateMask:t}},fetchPolicy:"network-only"});if(r.errors)throw Error("Failed to update external metadata",{cause:r.errors});let{data:n}=r;if(n.metadatalineageapiserverUpdateExternalMetadataV2?.apiError)throw Error(n.metadatalineageapiserverUpdateExternalMetadataV2.apiError.message);return n.metadatalineageapiserverUpdateExternalMetadataV2}catch(e){throw e}})(),deleteExternalMetadata:(e,a)=>x(function*(){try{let t=yield e.mutate({mutation:m,variables:{input:{name:a}},fetchPolicy:"network-only"});if(t.errors)throw Error("Failed to delete external metadata",{cause:t.errors});let{data:r}=t;if(r.metadatalineageapiserverDeleteExternalMetadataV2?.apiError)throw Error(r.metadatalineageapiserverDeleteExternalMetadataV2.apiError.message);return a}catch(e){throw e}})(),getLineageRelationship:(e,a,t)=>x(function*(){let[r,i]=yield Promise.all([n.v.listExternalLineage(e,{objectInfo:a,lineageDirection:E.HWc.UPSTREAM}),n.v.listExternalLineage(e,{objectInfo:a,lineageDirection:E.HWc.DOWNSTREAM})]),o=r.response.find(e=>e.externalLineageInfo?.id===t);if(o)return(0,b.F2)(o,a,E.HWc.UPSTREAM);let l=i.response.find(e=>e.externalLineageInfo?.id===t);if(l)return(0,b.F2)(l,a,E.HWc.DOWNSTREAM);throw Error("External lineage relationship not found")})(),updateLineageRelationship:(e,a,t)=>x(function*(){let r=yield e.mutate({mutation:h,variables:{input:{externalLineageRelationship:a,updateMask:t}},fetchPolicy:"network-only"});if(r.errors)throw Error("Failed to update external lineage relationship",{cause:r.errors});let{data:n}=r;if(n.metadatalineageapiserverUpdateExternalLineageRelationship?.apiError)throw Error(n.metadatalineageapiserverUpdateExternalLineageRelationship.apiError.message)})(),deleteLineageRelationship:(e,a)=>x(function*(){let t=yield e.mutate({mutation:g,variables:{input:{externalLineageRelationship:a}},fetchPolicy:"network-only"});if(t.errors)throw Error("Failed to delete external lineage relationship",{cause:t.errors});let{data:r}=t;if(r.metadatalineageapiserverDeleteExternalLineageRelationship?.apiError)throw Error(r.metadatalineageapiserverDeleteExternalLineageRelationship.apiError.message)})()}},237509:(e,a,t)=>{t.d(a,{P:()=>d,k:()=>u});var r=t(692738),n=t(141078),i=t(235250),o=t(261557),l=t(595615);function s(e,a,t,r,n,i,o){try{var l=e[i](o),s=l.value}catch(e){t(e);return}l.done?a(s):Promise.resolve(s).then(r,n)}let d=["list_external_metadata"];function u(e){let a=(0,n.mK)(),t=(0,r.useCallback)(()=>({queryKey:d,queryFn:()=>{var e;return(e=function*(){let{response:e}=yield i.u.listExternalMetadata(a,{pageSize:100,pageToken:void 0});return e.map(e=>(0,o.je)(e))},function(){var a=this,t=arguments;return new Promise(function(r,n){var i=e.apply(a,t);function o(e){s(i,r,n,o,l,"next",e)}function l(e){s(i,r,n,o,l,"throw",e)}o(void 0)})})()}}),[a]);return(0,l.AO)({...t(),...e})}},261557:(e,a,t)=>{t.d(a,{F2:()=>o,Uf:()=>s,je:()=>l});var r=t(22191),n=t(483588),i=t(886100);function o(e,a,t){let o=e.externalLineageInfo;if(!o?.id)throw Error("External lineage relationship response is missing id");let l=function(e){if(e.tableInfo?.name&&e.tableInfo.schemaName&&e.tableInfo.catalogName)return{table:{name:`${e.tableInfo.catalogName}.${e.tableInfo.schemaName}.${e.tableInfo.name}`}};if(e.modelInfo?.modelName&&e.modelInfo.version)return{modelVersion:{name:e.modelInfo.modelName,version:e.modelInfo.version}};if(e.fileInfo?.path)return{path:{url:e.fileInfo.path}};if(e.externalMetadataInfo?.name)return{externalMetadata:{name:e.externalMetadataInfo.name}};throw i.iT.sev2(r.Es.MetadataIntelligenceUI,"External lineage relationship fragment missing peer info",{externalLineageId:e.externalLineageInfo?.id}),Error("External lineage relationship fragment is missing peer info")}(e),s=t===n.HWc.UPSTREAM;return{id:o.id,query:o.query??void 0,source:s?l:a,target:s?a:l,columns:(o.columns??[]).flatMap(e=>null!=e.source&&null!=e.target?[{source:e.source,target:e.target}]:[]),properties:(o.properties??[]).flatMap(e=>null!=e.key&&null!=e.value?[{key:e.key,value:e.value}]:[])}}function l(e){return{id:e.id||"",name:e.name||"",owner:e.owner??void 0,systemType:e.systemType||n.hWH.OTHER,entityType:e.entityType||"",url:e.url??void 0,columns:e.columns??void 0,properties:e.properties?e.properties.map(e=>({key:null===e.key?void 0:e.key,value:null===e.value?void 0:e.value})):void 0,comment:e.description??void 0,created_at:e.createTime?new Date(e.createTime).getTime():void 0,created_by:e.createdBy??void 0,updated_at:e.updateTime?new Date(e.updateTime).getTime():void 0,updated_by:e.updatedBy??void 0,securable_kind:e.securableKind??void 0,securable_type:e.securableType??void 0}}function s(e){let a=e.properties?.reduce((e,a)=>(a.key&&a.value&&e.push({key:a.key,value:a.value}),e),[]);return Object.fromEntries(Object.entries({name:e.name,systemType:e.systemType,entityType:e.entityType,description:e.comment,url:e.url,columns:e.columns,properties:a,owner:e.owner}).filter(([e,a])=>void 0!==a))}},279402:(e,a,t)=>{t.r(a),t.d(a,{DataExplorerContext:()=>C,DataExplorerContextProvider:()=>w,DataExplorerSection:()=>f,DeltaSharingEntity:()=>x,EditShareEntity:()=>y,useDataExplorerContext:()=>M});var r,n,i,o=t(610435),l=t(452137),s=t.n(l),d=t(692738),u=t(673240),p=t(217930),c=t(441535),m=t(660618),g=t(747206),h=t(483588),E=t(604808),v=t(589111),b=t(509695),f=((r={}).Data="data",r.Sharing="sharing",r.CleanRoom="CleanRoom",r.Credentials="credentials",r.Locations="locations",r.Connections="connections",r.ExternalMetadata="external-metadata",r),x=((n={}).Shares="shares",n.Recipients="recipients",n.Providers="providers",n),y=((i={}).DataObjects="dataObjects",i.Notebooks="notebooks",i);let C=d.createContext({activeSection:"data",showCleanRooms:()=>({}),showDataEntity:()=>({}),showCatalog:()=>({}),showDatabase:()=>({}),showTableDetailsTab:()=>({}),showVolume:()=>({}),showUcFunction:()=>({}),showModel:()=>({}),showModelVersion:()=>({}),showNotebook:()=>({}),showShare:()=>({}),showEditShareData:()=>({}),showEditShareNotebook:()=>({}),showRecipient:()=>({}),showProvider:()=>({}),isUnityCatalogActive:!1,setFilteredObjectTypes:()=>({}),showEntityByType:()=>({}),showCreatePolicy:()=>({}),onRegisterViewUpdate:()=>{}});function w({section:e,catalog:a,schema:t,table:r,volume:n,ucFunction:i,model:l,modelVersion:f,notebook:x,share:y,recipient:M,provider:_,browse:k,workspace:I,permission:L,connection:T,createConnection:R,createLocation:P,deltaSharingEntity:U,editShare:S,children:D}){let{filteredObjectTypes:$}=(0,v.v)(),A=(0,u.Ck)(),F=(0,E.O)();void 0!==a||F||(a=m.UQ);let V=(0,d.useCallback)(()=>{A("/explore/cleanrooms")},[A]),O=(0,d.useCallback)(e=>{A((0,g.Hp)(e))},[A]),q=(0,d.useCallback)((e=a)=>{s()(e,"Catalog must be set"),A((0,g.db)(e))},[A,a]),z=(0,d.useCallback)((e,t=a)=>{s()(t,"Catalog must be set"),A((0,g.ps)(e,t))},[A,a]),H=(0,d.useCallback)((e,r=t,n=a)=>{s()(r,"Schema must be set"),s()(n,"Catalog must be set"),A((0,g.ff)(e,r,n))},[A,t,a]),N=(0,d.useCallback)((e,r,n=t,i=a)=>{s()(n,"Schema must be set"),s()(i,"Catalog must be set"),A((0,g.V6)(e,r,n,i),{},{activeTab:r})},[A,t,a]),W=(0,d.useCallback)((e,r=t,n=a)=>{s()(r,"Schema must be set"),s()(n,"Catalog must be set"),A((0,g.IM)(e,r,n))},[A,t,a]),J=(0,d.useCallback)((e,r=t,n=a)=>{s()(r,"Schema must be set"),s()(n,"Catalog must be set"),A((0,g.E3)(e,r,n))},[A,t,a]),j=(0,d.useCallback)((e,r=t,n=a,i)=>{if(s()(r,"Schema must be set"),s()(n,"Catalog must be set"),a===n&&t===r&&l===e&&f&&i)return;A((0,g.Th)(e,r,n))},[A,t,a,l,f]),B=(0,d.useCallback)((e,r,n=t,i=a)=>{s()(n,"Schema must be set"),s()(i,"Catalog must be set"),A((0,g.xU)(e,r,n,i))},[A,t,a]),K=(0,d.useCallback)((e,t=a)=>{s()(t,"Catalog must be set"),A((0,g.yX)(e,t))},[A,a]),G=(0,d.useCallback)(e=>{A(`/explore/sharing/shares/${encodeURIComponent(e)}`)},[A]),Q=(0,d.useCallback)(e=>{A(`/explore/sharing/shares/${encodeURIComponent(e)}/edit_data`)},[A]),Y=(0,d.useCallback)(e=>{A(`/explore/sharing/shares/${encodeURIComponent(e)}/edit_notebook`)},[A]),X=(0,d.useCallback)(e=>{A(`/explore/sharing/recipients/${encodeURIComponent(e)}`)},[A]),Z=(0,d.useCallback)(e=>{A(`/explore/sharing/providers/${encodeURIComponent(e)}`)},[A]),ee=(0,d.useCallback)((e,a,t,r)=>{switch(e){case h.z$1.UC_CATALOG:q(a);break;case h.z$1.UC_SCHEMA:s()(t,"Schema is required for schema entity"),z(t,a);break;case h.z$1.UC_TABLE:s()(r,"Entity is required for table entity"),H(r,t,a);break;case h.z$1.UC_MODEL:s()(r,"Entity is required for model entity"),j(r,t,a);break;case h.z$1.UC_VOLUME:s()(r,"Entity is required for volume entity"),W(r,t,a);break;case h.z$1.UC_FUNCTION:s()(r,"Entity is required for function entity"),J(r,t,a)}},[q,z,H,j,W,J]),ea=(0,d.useCallback)(e=>{A(`/governance/policies/create?entity=${e}`)},[A]),et=(0,d.useCallback)(()=>{(0,c.W)("databricks.fe.schemabrowser.newTree",!1)&&(0,p.XS)()},[]),{setFilteredObjectTypes:er}=(0,v.y)(),en=(0,d.useMemo)(()=>({activeSection:e,showCleanRooms:V,createLocation:P,showDataEntity:O,catalog:a,showCatalog:q,schema:t,showDatabase:z,table:r,showTableDetailsTab:N,volume:n,showVolume:W,ucFunction:i,showUcFunction:J,model:l,showModel:j,modelVersion:f,showModelVersion:B,notebook:x,showNotebook:K,share:y,editShare:S,showShare:G,showEditShareData:Q,showEditShareNotebook:Y,recipient:M,showRecipient:X,provider:_,showProvider:Z,browse:k,workspace:I,permission:L,connection:T,deltaSharingEntity:U,isUnityCatalogActive:F,filteredObjectTypes:$,setFilteredObjectTypes:er,showEntityByType:ee,showCreatePolicy:ea,onRegisterViewUpdate:et}),[e,V,P,O,a,q,t,z,r,N,n,W,i,J,l,j,f,B,x,K,y,S,G,Q,Y,M,X,_,Z,k,I,L,T,U,F,$,er,ee,ea,et]);return(0,o.Y)(C.Provider,{value:en,children:(0,o.Y)(b.p,{children:D})})}function M(){let e=(0,d.useContext)(C);if(s()(null!=e,"Must wrap child in DataExplorerContextProvider"),void 0===e)throw Error("useDataExplorerContext must be used within a DataExplorerContextProvider");return e}},454496:(e,a,t)=>{t.d(a,{S:()=>o});var r=t(879612),n=t(29824),i=t(279402);function o(){let{isUnityCatalogActive:e}=(0,i.useDataExplorerContext)(),a=(0,r.Pf)({isUcEnabled:e});return!!a?.includes(n.an.CONNECTION)}},818845:(e,a,t)=>{t.d(a,{d:()=>h});var r=t(692738),n=t(604808),i=t(115957),o=t(817148),l=t(786504),s=t(649934),d=t(850723),u=t(206072),p=t(237509),c=t(670757),m=t(454496),g=t(43680);let h=({enabled:e=!0}={})=>{let a=(0,n.O)()&&e,t=(0,g._A)({enabled:e}),h=(0,d.O)({useQueryOptions:{enabled:e}}),E=(0,g.eH)({enabled:a},{purpose:"ALL"}),v=(0,u.$)({enabled:a}),b=(0,g.vM)({enabled:a}),f=(0,m.S)(),x=(0,l.Pu)().authorize(s.E.CreateConnection()),y=(0,l.Pu)().authorize(s.E.CreateStorageCredential()),C=(0,l.Pu)().authorize(s.E.CreateServiceCredential()),w=(0,l.Pu)().authorize(s.E.CreateExternalMetadata()),M=(0,p.k)({enabled:a}),_=!!M.data?.length,k=w.response?.authorized===!0||_,I=f&&(0,i.zl)(o.g3.LAKEHOUSE_FEDERATION)&&(x.response?.authorized===!0||!!v.data?.length),L=(0,i.zl)(o.g3.LAKEHOUSE_FEDERATION)&&x.response?.authorized===!0,T=b.isLoading&&v.isLoading&&E.isLoading&&M.isLoading,R=!!t.data?.is_metastore_admin,P=y.response?.authorized===!0,U=!!E.data?.credentials?.length,S=!!E.data?.credentials?.some(e=>e.purpose===c._7.STORAGE),D=C.response?.authorized===!0,$=R||P||D,A=$||U,F=!!b.data?.external_locations?.length,V=R||P||S||F,O=R||P||S,q=A||V||I||k,z=t.isLoading||h.isLoading||T;return(0,r.useMemo)(()=>({canViewCredential:A,canCreateCredential:$,canCreateStorageCredential:R||P,canCreateServiceCredential:R||D,canViewLocation:V,canCreateLocation:O,canViewConnection:I,canCreateConnection:L,externalDataEnabled:q,isLoading:z,isMetastoreAdmin:R,canViewExternalMetadata:k}),[A,$,R,P,D,V,O,I,L,q,z,k])}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/18845.d46db70139.chunk.js.map