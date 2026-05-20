"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[73360],{4223:(e,t,a)=>{a.d(t,{M:()=>s});var r=a(610435),o=a(497895),n=a(797580);let s=({children:e,style:t})=>{let{theme:a}=(0,o.wn)();return(0,r.Y)("div",{css:{display:"flex",flexDirection:"column",height:"calc(100vh - 78px)",paddingLeft:a.spacing.md,paddingRight:a.spacing.md,paddingTop:a.spacing.md,...(0,n.V)(a.colors.actionDefaultBackgroundHover,a.colors.backgroundSecondary,a.colors.backgroundPrimary)},style:t,children:e})}},11039:(e,t,a)=>{a.d(t,{g:()=>i});var r=a(692738),o=a(749565),n=a(677505);function s(e,t,a,r,o,n,s){try{var i=e[n](s),l=i.value}catch(e){a(e);return}i.done?t(l):Promise.resolve(l).then(r,o)}let i=()=>{let e=(0,o.useGlobalChatStore)();return{openAssistant:(0,r.useCallback)((t,a=!1)=>{var r;return(r=function*(){let r=t.trim();if(r){if(e.toggleAssistant({overrideVisibility:!0}),a){e.dispatch({type:n.e.CREATE_NEW_THREAD,payload:{}});let t=o.useGlobalChatStore.getState().loadThreadPromise;t&&(yield t)}setTimeout(()=>{e.pageTriggeredChatEvent({message:r,messageTags:[],requireOpenAssistant:!0})},0)}},function(){var e=this,t=arguments;return new Promise(function(a,o){var n=r.apply(e,t);function i(e){s(n,a,o,i,l,"next",e)}function l(e){s(n,a,o,i,l,"throw",e)}i(void 0)})})()},[e])}}},65061:(e,t,a)=>{a.d(t,{IT:()=>i,_l:()=>n._l,n_:()=>n.n_,sw:()=>s.s});var r=a(692738),o=a(32121),n=a(141078),s=a(710283);let i=(e,t)=>{let a=(0,n.IT)(e,t);return!function(e,t){let a=(0,r.useRef)(0),{startPolling:n,stopPolling:s,error:i,networkStatus:l}=e;(0,r.useEffect)(()=>{if(!t||l&&l<o.pT.ready)return;if(i){let e=a.current+1,r=t*Math.pow(2,e);r<36e5?(n(r),a.current=e):(s(),a.current=0)}else a.current>0&&(n(t),a.current=0)},[i,t,n,s,l])}(a,t?.pollInterval),a}},71135:(e,t,a)=>{a.d(t,{U:()=>o.U,w:()=>r.w});var r=a(457428);a(434542);var o=a(437178)},72067:(e,t,a)=>{a.d(t,{v:()=>i});var r=a(610435),o=a(308664),n=a(692738),s=a(863708);function i({onReset:e,children:t,...a}){let{reset:l}=(0,o.h)(),c=(0,n.useCallback)(t=>{l(),e?.(t)},[l,e]);return(0,r.Y)(s.JR,{onReset:c,...a,children:t})}},88144:(e,t,a)=>{a.d(t,{S:()=>s});var r=a(141078),o=a(715370);let n=(0,r.J1)`
  mutation CreateFolderMutation($input: CreateFolderInput!) @component(name: "Notebook.Notebooks") {
    createFolder(input: $input) @rest(type: "CreateFolderResponse", path: "/workspace/mkdirs", method: "POST") {
      errors @type(name: "ApiError") {
        code
        message
        helpUrl
        traceId
      }
    }
  }
`,s=e=>o.R.useMutation(n,e)},104634:(e,t,a)=>{a.d(t,{J:()=>d,YE:()=>i,wr:()=>c,x8:()=>l});var r=a(645787),o=a(222716);function n(e,t,a,r,o,n,s){try{var i=e[n](s),l=i.value}catch(e){a(e);return}i.done?t(l):Promise.resolve(l).then(r,o)}function s(e){return function(){var t=this,a=arguments;return new Promise(function(r,o){var s=e.apply(t,a);function i(e){n(s,r,o,i,l,"next",e)}function l(e){n(s,r,o,i,l,"throw",e)}i(void 0)})}}function i(e){return s(function*(){let t=yield e();for(let a=0;a<2&&t.httpError;a++){let r=1e3*Math.pow(2,a);yield new Promise(e=>setTimeout(e,r)),t=yield e()}return t})()}function l(e,t,a){return{success:!1,error:{message:`This tool call did not succeed because the plan file could not be ${"read"===t?"read":"saved"} at this time (HTTP ${e}). `+("save"===t?"The step status was not updated. ":"")+(a?`You should call ${a} again to retry.`:"You should call this tool again to retry.")}}}function c(e,t){return s(function*(){try{let t=yield(0,o.rN)({type:o.Bo.GET_FILE_CONTENT,payload:{objectId:e}});if("string"==typeof t)return{success:!0,content:t}}catch{}let a=yield i(()=>(0,r.qQ)(t,"file"));if(a.httpError)return{success:!1,status:a.status};return{success:!0,content:a.data,sha:a.sha??void 0}})()}function d(e,t,a,n){return s(function*(){let s=!1;try{let t=yield(0,o.rN)({type:o.Bo.UPDATE_FILE_CONTENT,payload:{objectId:e,content:a}});s=!0===t}catch{}if(s)return{success:!0};let l=yield i(()=>(0,r.Lt)(t,a,n,"file"));if(l.httpError)return{success:!1,status:l.status};return{success:!0}})()}},108437:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(190656),o=a(516031),n=a(612732);let s=function(){let e=(0,r.f)();return{withPermissions:e,withActiveClusters:(0,o.c)(),withBudgetPolicy:(0,n.E)()}}},121143:(e,t,a)=>{a.d(t,{Q8:()=>p,_j:()=>m,ez:()=>h,r2:()=>u,yz:()=>d});var r=a(610435),o=a(692738),n=a(464991),s=a(993533),i=a(281063),l=a(927174),c=a(598987);let d="000000000000000d",u=(0,o.createContext)(void 0);function p({children:e}){let[t,a]=(0,i.B)("selected-warehouse",void 0),{data:h,isPending:m}=(0,c.h)(),{data:g,loading:f}=(0,n.CK)({enableLiveUpdates:!0}),x=m||f,v=(0,o.useMemo)(()=>{let e=g?.lakehouses?.edges?.filter(e=>e.node.id!==d),a=e?.find(e=>e.node.id===t)?.node,r=e?.find(e=>e.node.id===h?.spec.defaultSQLWarehouse)?.node,o=e?.find(e=>e.node.state===s.tXm.RUNNING)?.node;return a??r??o},[g,h?.spec.defaultSQLWarehouse,t]),{isAutoStarted:y}=(0,l.q)(v),b=(0,o.useMemo)(()=>({currentWarehouse:v?{id:v.id,name:v.name,autoStarted:y,state:v.state||void 0,health:v.health?.status||void 0}:void 0,setCurrentWarehouseId:a,loading:x}),[v,y,a,x]);return(0,r.Y)(u.Provider,{value:b,children:e})}function h(){let e=(0,o.useContext)(u);if(!e)throw Error("useWarehouseContext must be used within a WarehouseContextProvider");return e}function m(){let{currentWarehouse:e}=h();return e?.state===s.tXm.RUNNING?{currentWarehouse:e}:{currentWarehouse:void 0}}},142857:(e,t,a)=>{a.d(t,{r:()=>d});var r=a(610435),o=a(692738),n=a(419604),s=a(999919),i=a(897643);function l(e,t,a,r,o,n,s){try{var i=e[n](s),l=i.value}catch(e){a(e);return}i.done?t(l):Promise.resolve(l).then(r,o)}function c(e){return function(){var t=this,a=arguments;return new Promise(function(r,o){var n=e.apply(t,a);function s(e){l(n,r,o,s,i,"next",e)}function i(e){l(n,r,o,s,i,"throw",e)}s(void 0)})}}let d=(0,n.yS)(()=>{let e=(0,o.useMemo)(()=>({type:"lakewatch",id:"",name:"Lakewatch"}),[]),t=(0,o.useMemo)(()=>[],[]),a=(0,o.useCallback)(()=>c(function*(){return[]})(),[]),n=(0,o.useCallback)(()=>c(function*(){return"# Lakewatch chat page\n\nYou are a helpful assistant for this Lakewatch chat page. Answer questions and guide users using the Lakewatch tools and navigation to lakewatch pages as needed.\n"})(),[]),l=(0,o.useCallback)(()=>t,[t]),d=(0,o.useCallback)(()=>[],[]);return(0,r.Y)(i.a,{agentName:s.w.defaultAgent,pageObject:e,loadPageContext:a,loadPageInstructions:n,loadPageTools:l,loadPageSkills:d})})},181376:(e,t,a)=>{a.d(t,{E:()=>n,n:()=>s});var r,o,n=((r={}).ExploreDataIndex="discovery.data_explorer.data.index",r.ExploreDataHiveCatalog="discovery.data_explorer.data.hive_catalog",r.ExploreDataSamplesCatalog="discovery.data_explorer.data.samples_catalog",r.ExploreDataCatalog="discovery.data_explorer.data.catalog",r.ExploreDataCreateCatalog="discovery.data_explorer.catalogs.create",r.ExploreDataHiveSchema="discovery.data_explorer.data.hive_schema",r.ExploreDataSamplesSchema="discovery.data_explorer.data.samples_schema",r.ExploreDataDatabase="discovery.data_explorer.data.schema",r.ExploreDataHiveTable="discovery.data_explorer.data.hive_table",r.ExploreDataSamplesTable="discovery.data_explorer.data.samples_table",r.ExploreDataTable="discovery.data_explorer.data.table",r.ExploreMetricViewCreate="discovery.data_explorer.metric_view.create",r.ExploreMetricView="discovery.data_explorer.metric_view",r.ExploreDataVolume="discovery.data_explorer.data.volume",r.ExploreDataFunction="discovery.data_explorer.data.function",r.ExploreDataModel="discovery.data_explorer.data.model",r.ExploreGraph="discovery.data_explorer.graph",r.ExploreDataNotebookFile="discovery.data_explorer.data.notebook",r.ExploreDataSecret="discovery.data_explorer.data.secret",r.ExploreDataModelVersion="discovery.data_explorer.data.model.version",r.ExploreCredentialsIndex="discovery.data_explorer.credentials.index",r.ExploreCredentialsCredential="discovery.data_explorer.credentials.credential",r.ExploreLocationsIndex="discovery.data_explorer.locations.index",r.ExploreLocationsLocation="discovery.data_explorer.locations.location",r.ExploreLocationsCreateLocation="discovery.data_explorer.locations.create_location",r.ExploreLocationsEditLocation="discovery.data_explorer.locations.edit_location",r.ExploreLocationsLocationBrowse="discovery.data_explorer.locations.location.browse",r.ExploreLocationsLocationWorkspace="discovery.data_explorer.locations.location.workspace",r.ExploreLocationsLocationPermission="discovery.data_explorer.locations.location.permission",r.ExploreConnectionsIndex="discovery.data_explorer.connections.index",r.ExploreConnectionsConnection="discovery.data_explorer.connections.connection",r.ExploreConnectionsCreateConnection="discovery.data_explorer.connections.create_connection",r.ExploreConnectionsEditConnection="discovery.data_explorer.connections.edit_connection",r.ExploreExternalMetadataIndex="discovery.data_explorer.external_metadata.index",r.ExploreExternalMetadataMetadata="discovery.data_explorer.external_metadata.metadata",r.ExploreExternalMetadataCreateMetadata="discovery.data_explorer.external_metadata.create_metadata",r.ExploreExternalMetadataMetadataLineage="discovery.data_explorer.external_metadata.lineage",r.ExploreUcUpgradeDatabase="unity_catalog.upgrade.schema",r.ExploreUcUpgradeTable="unity_catalog.upgrade.table",r.ExploreUcTableConversion="unity_catalog.convert.table",r.ExploreSharingIndex="delta_sharing.shares.index",r.ExploreSharingShares="delta_sharing.shares.shares",r.ExploreSharingShare="delta_sharing.shares.share",r.ExploreSharingCreateShareData="delta_sharing.shares.share.create_data",r.ExploreSharingEditShareData="delta_sharing.shares.share.edit_data",r.ExploreSharingEditShareNotebook="delta_sharing.shares.share.edit_notebook",r.ExploreSharingRecipients="delta_sharing.shares.recipients.list",r.ExploreSharingRecipient="delta_sharing.shares.recipients.detail",r.ExploreSharingProviders="delta_sharing.shares.providers.list",r.ExploreSharingProvider="delta_sharing.shares.providers.detail",r.ExploreDataTableCreateSearchIndex="discovery.data_explorer.data.table.create_search_index",r.ExploreDataTableEditLineageRelationship="discovery.data_explorer.data.table.edit_lineage_relationship",r.ExploreDataModelVersionEditLineageRelationship="discovery.data_explorer.data.model.version.edit_lineage_relationship",r.ExploreMetastore="unity_catalog.metastore.settings",r.DataIndex="discovery.data_explorer.legacy.index",r.DataDatabase="discovery.data_explorer.legacy.database",r.DataTable="discovery.data_explorer.legacy.table",r),s=((o={}).ExploreDataIndex="/explore/data",o.ExploreDataHiveCatalog="/explore/data/hive_metastore",o.ExploreDataSamplesCatalog="/explore/data/samples",o.ExploreDataCatalog="/explore/data/:catalog",o.ExploreDataCreateCatalog="/explore/catalogs/:catalog/configure",o.ExploreDataHiveSchema="/explore/data/hive_metastore/:schema",o.ExploreDataSamplesSchema="/explore/data/samples/:schema",o.ExploreDataDatabase="/explore/data/:catalog/:schema",o.ExploreDataHiveTable="/explore/data/hive_metastore/:schema/:table",o.ExploreDataSamplesTable="/explore/data/samples/:schema/:table",o.ExploreDataTable="/explore/data/:catalog/:schema/:table",o.ExploreDataVolume="/explore/data/volumes/:catalog/:schema/:volume",o.ExploreDataFunction="/explore/data/functions/:catalog/:schema/:ucFunction",o.ExploreDataModel="/explore/data/models/:catalog/:schema/:model",o.ExploreGraph="/explore/graph/:catalog/:schema/:name",o.ExploreDataNotebookFile="/explore/data/notebooks/:catalog/:notebook",o.ExploreDataModelVersion="/explore/data/models/:catalog/:schema/:model/version/:modelVersion",o.ExploreDataSecret="/explore/data/secrets/:catalog/:schema/:secret",o.ExploreCredentialsIndex="/explore/credentials",o.ExploreCredentialsCredential="/explore/credentials/:credential",o.ExploreLocationsIndex="/explore/locations",o.ExploreLocationsLocation="/explore/locations/:location",o.ExploreLocationsCreateLocation="/explore/locations/create",o.ExploreLocationsEditLocation="/explore/locations/:location/edit",o.ExploreLocationsLocationBrowse="/explore/locations/:location/browse",o.ExploreLocationsLocationWorkspace="/explore/locations/:location/workspace",o.ExploreLocationsLocationPermission="/explore/locations/:location/permission",o.ExploreConnectionsIndex="/explore/connections",o.ExploreConnectionsConnection="/explore/connections/:connection",o.ExploreConnectionsCreateConnection="/explore/connections/create",o.ExploreConnectionsEditConnection="/explore/connections/:connection/edit",o.ExploreExternalMetadataIndex="/explore/external-metadata",o.ExploreExternalMetadataMetadata="/explore/external-metadata/:externalMetadata",o.ExploreExternalMetadataCreateMetadata="/explore/external-metadata/create",o.ExploreExternalMetadataMetadataLineage="/explore/external-metadata/:metadata/lineage",o.ExploreUcUpgradeDatabase="/explore/upgrade/:schema",o.ExploreUcUpgradeTable="/explore/upgrade/:schema/:table",o.ExploreUcTableConversion="/explore/convert/:catalog/:schema",o.ExploreDataTableCreateSearchIndex="/explore/data/:catalog/:schema/:table/create-search-index",o.ExploreDataTableEditLineageRelationship="/explore/data/:catalog/:schema/:table/edit-relationship/:externalLineageId",o.ExploreDataModelVersionEditLineageRelationship="/explore/data/models/:catalog/:schema/:model/version/:modelVersion/edit-relationship/:externalLineageId",o.ExploreMetastore="/explore/metastore",o.ExploreMetricViewCreate="/explore/metric_view/create",o.ExploreMetricView="/explore/metric_view/:metricView/edit",o.DataIndex="/data",o.DataDatabase="/data/:catalog/:database",o.DataTable="/data/:catalog/:database/:table",o)},190656:(e,t,a)=>{a.d(t,{f:()=>o});var r=a(936985);function o(){let e=(0,r.mJ)()||{};if(!e.enableClusterAclsByTier||!1===e.enableClusterAclsConfig)return!1;return!0}},202387:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{r:()=>k});var o=a(610435),n=a(883678),s=a(692738),i=a(342411),l=a(134256),c=a(22191),d=a(726977),u=a(337833),p=a(563959),h=a(114437),m=a(749565),g=a(677505),f=a(72067),x=a(296955),v=a(228947),y=e([p]);p=(y.then?(await y)():y)[0];let E=(0,i.YK)({unableToLoadChat:{id:"F4V7EU",defaultMessage:"Unable to load lakewatch genie"}}),w=()=>(0,o.FD)("div",{css:{height:"100%",display:"flex",flexDirection:"column",overflow:"auto"},children:[(0,o.Y)(u.rb,{}),(0,o.Y)(u.H5,{})]});function b(){let e=(0,i.tz)();return(0,o.Y)(l.T,{showTryAgainButton:!0,message:e.formatMessage(E.unableToLoadChat)})}let k=(0,n.PA)(()=>{let e=(0,m.useGlobalChatStore)(e=>e.activePanel),t=(0,m.useGlobalChatStore)(e=>e.dispatch),a=(0,m.useGlobalChatStore)(e=>e.threadId),r=(0,m.useGlobalChatStore)(e=>e.loadThread),[n,i]=(0,v.O)(),[l,u]=(0,x.Y)();return(0,s.useEffect)(()=>{m.useGlobalChatStore.setState({activePanel:h.Zk.THREAD}),n?t({type:g.e.SWITCH_THREAD,payload:{threadId:n}}):l?t({type:g.e.SWITCH_THREAD,payload:{threadId:l}}):m.useGlobalChatStore.getState().createnewThread()},[]),(0,s.useEffect)(()=>{a&&(r(),u(a),i(a))},[a,r,u,i]),(0,o.Y)("div",{css:{height:"100%"},children:(0,o.Y)(f.v,{esComponent:c.Es.Lakewatch,errorBoundaryId:d.s.LakewatchChatView,FallbackComponent:b,children:(0,o.FD)("div",{css:{position:"relative",height:"100%",display:"flex",flexDirection:"column"},children:[e===h.Zk.THREAD&&(0,o.Y)(p.w,{disableAutoloadThread:!0}),e===h.Zk.SETTINGS&&(0,o.Y)(w,{})]})})})});r()}catch(e){r(e)}})},228947:(e,t,a)=>{a.d(t,{O:()=>s});var r=a(692738),o=a(337706);let n="threadId";function s(){let[e,t]=(0,o.ok)(e=>e.get(n));return[e,(0,r.useCallback)(e=>{t(t=>(e?t.set(n,e):t.delete(n),t))},[t])]}},251709:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{p:()=>_,w:()=>C});var o=a(610435),n=a(692738),s=a(342411),i=a(845690),l=a(134256),c=a(22191),d=a(726977),u=a(829339),p=a(714953),h=a(749565),m=a(542516),g=a(72067),f=a(4223),x=a(505566),v=a(202387),y=a(712689),b=a(142857),E=a(960719),w=a(639408),k=e([y,v]);function C(){let e=(0,p.ht)(e=>e.isVisible),t=(0,p.ht)(e=>e.setVisibility),[a,r]=(0,i.Mj)({key:"lakewatch-chat-page-sidebar-expanded",version:1,initialValue:!1});return(0,n.useEffect)(()=>(t(!0),()=>{t(e)}),[]),(0,o.Y)(x.p,{children:(0,o.FD)("div",{css:{height:"100%",width:"100%",display:"flex",overflow:"hidden"},children:[(0,o.Y)(b.r,{}),(0,o.Y)(y.B,{isOpen:a,onOpenChange:r}),(0,o.Y)("div",{css:{display:"flex",flexDirection:"column",flexGrow:1,overflow:"hidden",position:"relative"},children:(0,o.Y)(v.r,{})})]})})}function S(){let e=(0,s.tz)();return(0,o.Y)(l.T,{showTryAgainButton:!0,message:e.formatMessage({id:"7KlbtM",defaultMessage:"Unable to load lakewatch chat"})})}function _(){let e=(0,s.tz)(),{loading:t,disabledReason:a,enabled:r}=(0,E.D)(),n=(0,h.useGlobalChatStore)(e=>e.threadTitle),i=e.formatMessage({id:"+IcMvZ",defaultMessage:"Genie"}),l=n&&!(0,m.XB)(n)?n:i;return(0,u.r)({title:l}),(0,o.Y)(f.M,{style:{paddingTop:0,paddingLeft:0},children:(0,o.FD)(g.v,{esComponent:c.Es.Lakewatch,errorBoundaryId:d.s.LakewatchChat,FallbackComponent:S,children:[!t&&r&&(0,o.Y)(C,{}),!t&&!r&&(0,o.Y)(w.K,{componentId:"lakewatch.chat.page.agent-mode-not-enabled",title:a})]})})}[y,v]=k.then?(await k)():k,r()}catch(e){r(e)}})},281063:(e,t,a)=>{a.d(t,{B:()=>s});var r=a(692738),o=a(682785),n=a(288840);let s=(e,t,a=n.wt)=>{let s=(0,r.useMemo)(()=>Array.isArray(e)?e:[e],[e]),[i,l]=(0,r.useState)(()=>(0,n.Oi)(s,t,a)),c=(0,o._6)((0,r.useCallback)(e=>{(0,n.G_)(s,e,a)},[s,a]),1);return(0,r.useEffect)(()=>{c(i)},[i,c]),[i,l]}},288840:(e,t,a)=>{a.d(t,{G_:()=>l,Oi:()=>i,Wh:()=>s,wt:()=>n});var r=a(722381),o=a(845690);let n=1,s=(e,t=n,a=!0)=>{let o=Array.isArray(e)?e:[e],s=`lakewatch/${o.join("-")}`;return(0,r.FL)(s,t,a)},i=(e,t,a=n,r=!0)=>{let i=s(e,a);return(0,o._S)(i,a,r,t)},l=(e,t,a=n,r=!0)=>{let i=s(e,a,r);(0,o.AP)(i,a,r,t)}},296955:(e,t,a)=>{a.d(t,{Y:()=>n});var r=a(692738),o=a(845690);function n(){let[e,t]=(0,o.Mj)({key:"lakewatch_genie_page_last_active_thread",version:1,initialValue:{threadId:null,threadModifiedTime:null}}),a=(0,r.useMemo)(()=>{if(!e.threadId||!e.threadModifiedTime||Date.now()-e.threadModifiedTime>36e5)return null;return e.threadId},[e]);return(0,r.useMemo)(()=>[a,e=>t({threadId:e,threadModifiedTime:Date.now()})],[a,t])}},334017:(e,t,a)=>{a.d(t,{F_:()=>s,ed:()=>i,m8:()=>o,p6:()=>n});var r=a(697453);let o=20;function n(e,t,a){r.ds.isAvailable()&&r.ds.call({title:{value:e},description:{value:t},root:{componentId:"dbsql.edge.form.error_notification",severity:"error",isCloseable:!0,duration:(a?.duration??8)*1e3}})}function s(e){let t=e?.map(e=>e?.message).filter(Boolean);return t?.length?t.join(" "):void 0}function i(e,t,a){let r=s(t);r&&n(e,r,a)}},398915:(e,t,a)=>{a.d(t,{bA:()=>u,qK:()=>p,wi:()=>h});var r=a(65061),o=a(960718),n=a(441535),s=a(141078),i=a(748592),l=a(108437);let c=(0,i.W)(()=>(0,n.W)("databricks.fe.warehouses.useSlimLakehousesQueryForList",!1)?(0,s.J1)`
        query LakehousesForRedashBasic @component(name: "DBSQLX.WareHouseUI") {
          lakehouses(view: BASIC) {
            edges {
              node {
                id
                name
              }
              cursor
            }
          }
        }
      `:(0,s.J1)`
        query LakehousesForRedashBasicBulk @component(name: "DBSQLX.WareHouseUI") {
          lakehouses {
            edges {
              node {
                id
                name
              }
              cursor
            }
          }
        }
      `),d=(0,i.W)(()=>(0,n.W)("databricks.fe.warehouses.useSlimLakehousesQueryForList",!1)?(0,s.J1)`
        query LakehousesForRedashSlim($withPermissions: Boolean!, $withActiveClusters: Boolean!)
        @component(name: "DBSQLX.WareHouseUI") {
          lakehouses(view: UI) {
            edges {
              node {
                ...LakehouseListFragment
              }
              cursor
            }
          }
        }
        ${o.MS}
      `:(0,s.J1)`
        query LakehousesForRedash($withPermissions: Boolean!, $withActiveClusters: Boolean!)
        @component(name: "DBSQLX.WareHouseUI") {
          lakehouses {
            edges {
              node {
                ...LakehouseForMutationFragment
              }
              cursor
            }
          }
        }
        ${o.SN}
      `),u=()=>d.getActiveValue(),p=e=>(0,r.IT)(c.getActiveValue(),{fetchPolicy:"cache-and-network",...e,variables:{...e?.variables}}),h=e=>{let t=(0,l.A)();return(0,r.IT)(u(),{fetchPolicy:"cache-and-network",...e,variables:{...e?.variables,...t}})}},408174:(e,t,a)=>{a.d(t,{Hc:()=>p,kT:()=>h});var r=a(692738),o=a(886100),n=a(989266),s=a(22191),i=a(141078),l=a(930908);function c(e,t,a,r,o,n,s){try{var i=e[n](s),l=i.value}catch(e){a(e);return}i.done?t(l):Promise.resolve(l).then(r,o)}function d(e){return function(){var t=this,a=arguments;return new Promise(function(r,o){var n=e.apply(t,a);function s(e){c(n,r,o,s,i,"next",e)}function i(e){c(n,r,o,s,i,"throw",e)}s(void 0)})}}let u=(0,i.J1)`
  query ListBudgetPoliciesQuery($input: BudgetpolicyListBudgetPoliciesRequestInput!)
  @component(name: "MoneyInfra.CostManagement") {
    serverlesspolicyListBudgetPolicies(input: $input) {
      policies {
        policyId
        policyName
        creatorUserId
        customTags {
          key
          value
        }
        rateLimitConfig
        isEditable
          @includeSafex(
            name: "databricks.fe.clustercontrols.enableBudgetPolicyAdminUiPublicPreview"
            defaultValue: false
          )
        isDeletable
          @includeSafex(
            name: "databricks.fe.clustercontrols.enableBudgetPolicyAdminUiPublicPreview"
            defaultValue: false
          )
      }
      apiError {
        code
        message
        helpUrl
        traceId
      }
      previousPageToken
      nextPageToken
    }
  }
`,p=e=>(0,i.IT)(u,e);function h(){let{doListBudgetPolicies:e}=(()=>{let[e,{data:t,loading:a,error:o}]=(0,i._l)(u),n=t?.serverlesspolicyListBudgetPolicies?.apiError?.message??o?.message??null,s=t?.serverlesspolicyListBudgetPolicies?.nextPageToken??null,l=t?.serverlesspolicyListBudgetPolicies?.previousPageToken??null,c=t?.serverlesspolicyListBudgetPolicies?.policies??[];return{doListBudgetPolicies:(0,r.useCallback)(t=>e(t),[e]),listBudgetPoliciesQueryState:{loading:a,apiError:t?.serverlesspolicyListBudgetPolicies?.apiError??null,errorMessage:n,data:t?{policies:c,nextPageToken:s,previousPageToken:l}:null}}})();return(0,r.useCallback)(()=>d(function*(){return o.iT.sev2IfThrows(s.Es.MoneyInfraCostManagement,"Failed to get first alphebetical budget policy id",()=>d(function*(){let t=yield e({variables:{input:{...(0,l.Ku)(),sortSpec:{field:n.t7.POLICY_NAME}}}});return t.data?.serverlesspolicyListBudgetPolicies?.policies?.[0]?.policyId})()).value})(),[e])}},411056:(e,t,a)=>{a.d(t,{a:()=>u,f:()=>p});var r=a(692738),o=a(65061),n=a(334017),s=a(342411),i=a(141078);function l(e,t,a,r,o,n,s){try{var i=e[n](s),l=i.value}catch(e){a(e);return}i.done?t(l):Promise.resolve(l).then(r,o)}function c(e){return function(){var t=this,a=arguments;return new Promise(function(r,o){var n=e.apply(t,a);function s(e){l(n,r,o,s,i,"next",e)}function i(e){l(n,r,o,s,i,"throw",e)}s(void 0)})}}let d=(0,i.J1)`
  mutation startCluster($input: ClusterStartInput!) @component(name: "DBSQLX.CatalogExplorer") {
    clusterStart(input: $input) {
      errors {
        code
        message
      }
      entity {
        id
        state
      }
    }
  }
`,u=e=>{let t=(0,s.tz)(),[a,i]=(0,o.n_)(d,{variables:{input:{id:e}}});return[(0,r.useCallback)(()=>c(function*(){let e=t.formatMessage({id:"YHEFlQ",defaultMessage:"Error while starting cluster."});try{let{data:t,errors:r}=yield a(),o=[...r||[],...t?.clusterStart?.errors||[]];return(0,n.ed)(e,o),i}catch(t){(0,n.ed)(e,[t])}})(),[t,a,i]),i]},p=()=>{let e=(0,s.tz)(),[t,a]=(0,o.n_)(d);return[(0,r.useCallback)(r=>c(function*(){let o=e.formatMessage({id:"YHEFlQ",defaultMessage:"Error while starting cluster."});try{let{data:e,errors:s}=yield t({variables:{input:{id:r}}}),i=[...s||[],...e?.clusterStart?.errors||[]];return(0,n.ed)(o,i),a}catch(e){(0,n.ed)(o,[e])}})(),[e,t,a]),a]}},427558:(e,t,a)=>{a.d(t,{HD:()=>i,UQ:()=>c});var r=a(692738),o=a(737358),n=a(846007),s=a(488655);let i=e=>(0,o.AO)((0,n.t4)(e)),l=e=>i(`/lakewatch${e}`),c=()=>{let e=(0,s.Zp)(),t=(0,r.useCallback)((t,a)=>{e(l(t),a)},[e]),a=(0,r.useCallback)(e=>l(e),[]),o=(0,r.useCallback)(e=>i(`/editor/notebooks/${e}`),[]),n=(0,r.useCallback)((t,a)=>{e(i(t),a)},[e]);return{navigate:e,navigateWithinLakewatch:t,navigateWithinDatabricks:n,generateLakewatchRoute:a,generateNotebookUrl:o}}},434542:()=>{},437178:(e,t,a)=>{a.d(t,{A:()=>o,U:()=>r});let r=a(692738).createContext({loaded:!1}),o=r},457428:(e,t,a)=>{a.d(t,{w:()=>r});let r=new Map;[{id:"AWS",name:"Amazon Web Services",vendor:"Amazon",helpBaseUrl:"https://docs.databricks.com"},{id:"Azure",name:"Microsoft Azure",vendor:"Microsoft",helpBaseUrl:"https://learn.microsoft.com/azure/databricks"},{id:"GCP",name:"Google Cloud",vendor:"Google",helpBaseUrl:"https://docs.gcp.databricks.com"}].forEach(e=>{r.set(e.id,e)})},458709:(e,t,a)=>{a.d(t,{Ht:()=>y,cQ:()=>m,d3:()=>b});var r=a(342411),o=a(22191),n=a(196852),s=a(289841),i=a(886100),l=a(370437),c=a(104634),d=a(222716);function u(e,t,a,r,o,n,s){try{var i=e[n](s),l=i.value}catch(e){a(e);return}i.done?t(l):Promise.resolve(l).then(r,o)}function p(e){return function(){var t=this,a=arguments;return new Promise(function(r,o){var n=e.apply(t,a);function s(e){u(n,r,o,s,i,"next",e)}function i(e){u(n,r,o,s,i,"throw",e)}s(void 0)})}}let h={type:"object",properties:{thoughts:{type:"string",description:"Reasoning for updating this step status."},stepNumber:{type:"number",description:'The 1-based step number matching the "### N." heading in the plan file.'},newStatus:{type:"string",enum:["in-progress","completed"],description:"The new status for the step."},startNextStep:{type:"boolean",description:'When true and newStatus is "completed", automatically marks the immediate next step as "in-progress" if it is pending. Use this instead of making a separate call to avoid concurrent file edit errors.'}},required:["thoughts","stepNumber","newStatus","startNextStep"],additionalProperties:!1};function m(e){let t,a=[],r=/^###\s+(\d+)\.\s+(.+)$/gm;for(;null!==(t=r.exec(e));){let r=parseInt(t[1],10),o=t[2].trim(),n=e.slice(t.index+t[0].length).match(/^\s*status:\s*(pending|in-progress|completed)/m),s=n?.[1]??"pending";a.push({number:r,title:o,status:s})}return a}function g(e,t,a){let r=RegExp(`^###\\s+${t}\\.\\s+.+$`,"m").exec(e);if(!r)throw Error(`Step ${t} not found in plan file`);let o=e.slice(r.index+r[0].length).match(/^(\s*status:\s*)(pending|in-progress|completed)/m);if(o&&void 0!==o.index){let t=r.index+r[0].length+o.index,n=e.slice(0,t),s=e.slice(t+o[0].length);return n+o[1]+a+s}let n=r.index+r[0].length;return e.slice(0,n)+`
status: ${a}`+e.slice(n)}function f(e,t){return e.replace(/^(status:\s*)(pending|in-progress|completed)/m,`$1${t}`)}function x(e){return e.map(e=>({id:e.number,title:e.title,description:"",status:"pending"===e.status?"not-started":e.status}))}let v={displayType:"singleRow",titles:{running:(0,r.zR)({id:"/D3zkc",defaultMessage:"Updating plan progress"}),success:(0,r.zR)({id:"iyhhRx",defaultMessage:"Updated plan progress"}),failure:(0,r.zR)({id:"2l1wZ5",defaultMessage:"Failed to update plan progress"})}},y=()=>(0,n.z6)({esComponent:o.Es.Assistant,name:"updatePlanStep",description:"Update the status of a step in the active plan file. Use this to mark steps as in-progress before starting work, then completed after finishing. When completing a step, set startNextStep to true to automatically mark the next pending step as in-progress in the same call.",parameters:h,toolResultCompactionConfig:s.iF,display:v,execute:({stepNumber:e,newStatus:t,startNextStep:a},r)=>p(function*(){try{let o,n=yield(0,d.rN)({type:d.Bo.GET_ACTIVE_PLAN,payload:{sessionId:r.agentIds.sessionId}});if(!n)return{success:!1,error:{message:"No active plan. Execute a plan first."}};let s=yield(0,c.wr)(n.objectId,n.planFilePath);if(!s.success)return(0,c.x8)(s.status,"read","updatePlanStep");let i=s.content,l=s.sha;if(i=g(i,e,t),"completed"===t&&a){let t=m(i),a=t.findIndex(t=>t.number===e),r=a>=0?t[a+1]:void 0;r&&"pending"===r.status&&(i=g(i,r.number,"in-progress"),o=r)}let u=m(i),p=u.filter(a=>"completed"===a.status||a.number===e&&"completed"===t).length===u.length;i=p?f(i,"completed"):f(i,"in-progress");let h=yield(0,c.J)(n.objectId,n.planFilePath,i,l);if(!h.success)return(0,c.x8)(h.status,"save","updatePlanStep");let v=m(i);yield(0,d.rN)({type:d.Bo.SET_TODOS,payload:{todos:x(v),sessionId:r.agentIds.sessionId}}),p&&(yield(0,d.rN)({type:d.Bo.SET_ACTIVE_PLAN,payload:{activePlan:null,sessionId:r.agentIds.sessionId}}));let y=v.filter(e=>"completed"===e.status).length,b=`Step ${e} marked ${t}. Progress: ${y}/${u.length}.`;return o&&(b+=` Step ${o.number} (${o.title}) is now in-progress.`),p&&(b+=" Plan completed!"),{success:!0,message:b}}catch(e){return{success:!1,error:{message:(0,l.u1)(e)}}}})()}),b=()=>p(function*(){let e=yield(0,d.rN)({type:d.Bo.GET_ACTIVE_PLAN,payload:{}});if(!e)return null;try{let t=yield(0,c.wr)(e.objectId,e.planFilePath);if(!t.success)return{prompt:`

## Plan Execution Status
The plan file could not be read at this time. An active plan exists at: ${e.planFilePath}
Continue working on the plan. Use \`updatePlanStep\` to mark steps as in-progress/completed. When completing a step, set startNextStep: true to also start the next step.
Do NOT use \`manageTodoList\` — the plan file is the source of truth.
`};let a=t.content,r=t.sha,o=m(a);if(0===o.length)return null;yield(0,d.rN)({type:d.Bo.SET_TODOS,payload:{todos:x(o)}});let n=o.filter(e=>"completed"===e.status).length;if(n===o.length){let t=f(a,"completed");return yield(0,c.J)(e.objectId,e.planFilePath,t,r),yield(0,d.rN)({type:d.Bo.SET_ACTIVE_PLAN,payload:{activePlan:null}}),null}let s=o.find(e=>"in-progress"===e.status),i=o.filter(e=>"pending"===e.status).slice(0,3),l=`

## Plan Execution Status
Progress: ${n}/${o.length} steps completed
`;if(s&&(l+=`
**Currently in progress:** Step ${s.number}. ${s.title}
`),i.length>0)for(let e of(l+=`**Next steps:**
`,i))l+=`- Step ${e.number}. ${e.title}
`;return{prompt:l+="\nUse `updatePlanStep` to mark steps as in-progress/completed. When completing a step, set startNextStep: true to also start the next step.\nDo NOT use `manageTodoList` — the plan file is the source of truth.\n"}}catch(t){return i.iT.log(o.Es.Assistant,"buildPlanContext_failed",t),{prompt:`

## Plan Execution Status
The plan file could not be read at this time. An active plan exists at: ${e.planFilePath}
Continue working on the plan. Use \`updatePlanStep\` to mark steps as in-progress/completed. When completing a step, set startNextStep: true to also start the next step.
Do NOT use \`manageTodoList\` — the plan file is the source of truth.
`}}})()},481968:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{ChatPage:()=>o.w,RouteComponent:()=>o.p});var o=a(251709),n=e([o]);o=(n.then?(await n)():n)[0],r()}catch(e){r(e)}})},516031:(e,t,a)=>{a.d(t,{c:()=>o});var r=a(441535);function o(){let e=(0,r.W)("databricks.fe.redash.warehouseMonitorStatsNewApi",!1),t=(0,r.W)("databricks.sqlgateway.proxy.getWarehouseStatsInternal.enabled",!1);return e&&t}},558026:(e,t,a)=>{a.d(t,{A:()=>g,J:()=>m});var r=a(813342),o=a.n(r),n=a(692738),s=a(65061),i=a(334017),l=a(342411),c=a(141078),d=a(398915),u=a(108437),p=a(960718);function h(e,t,a,r,o,n,s){try{var i=e[n](s),l=i.value}catch(e){a(e);return}i.done?t(l):Promise.resolve(l).then(r,o)}let m=(0,c.J1)`
  mutation startLakehouseForRedash(
    $input: LakehouseStartInput!
    $withPermissions: Boolean!
    $withActiveClusters: Boolean!
    $withBudgetPolicy: Boolean = false
  ) @component(name: "DBSQLX.WareHouseUI") {
    lakehouseStart(input: $input) {
      entity {
        ...FullLakehouseFragment
      }
      errors {
        message
        code
        helpUrl
        traceId
      }
    }
  }
  ${p.vP}
`,g=e=>{let t,a=(0,l.tz)(),[r,c]=(t=(0,u.A)(),(0,s.n_)(m,{variables:{input:{id:e},...t},refetchQueries:[{query:(0,d.bA)(),variables:t}]}));return[(0,n.useCallback)(()=>{var e;return(e=function*(){let e=a.formatMessage({id:"EEt+YV",defaultMessage:"Error while starting SQL warehouse."});try{let t=yield r(),a=o()(t)?[]:[...t.errors??[],...t.data?.lakehouseStart?.errors??[]];return(0,i.ed)(e,a,{duration:i.m8}),t}catch(t){(0,i.ed)(e,[t],{duration:i.m8})}},function(){var t=this,a=arguments;return new Promise(function(r,o){var n=e.apply(t,a);function s(e){h(n,r,o,s,i,"next",e)}function i(e){h(n,r,o,s,i,"throw",e)}s(void 0)})})()},[r,a]),c]}},598987:(e,t,a)=>{a.d(t,{h:()=>s,n:()=>i});var r=a(553200),o=a(526157),n=a(382953);let s=({refetchInterval:e=!1,enabled:t=!0,throwOnError:a,refetchOnWindowFocus:n}={})=>(0,o.I)({...(0,r.XWh)(),refetchInterval:e,enabled:t,...void 0!==a?{throwOnError:a}:{},...void 0!==n?{refetchOnWindowFocus:n}:{}}),i=()=>{let e=(0,n.jE)();return t=>{e.setQueryData((0,r.eic)(),t)}}},612732:(e,t,a)=>{a.d(t,{E:()=>o});var r=a(441535);function o(){return(0,r.W)("databricks.fe.warehouses.budgetPolicyEnabledForWarehouses",!1)}},639408:(e,t,a)=>{a.d(t,{K:()=>h});var r=a(610435),o=a(692738),n=a(497895),s=a(382908),i=a(335083),l=a(339518),c=a(342411),d=a(329061),u=a(326410),p=a(11039);function h({componentId:e,type:t="error",title:a,description:m,error:g,moreDetails:f,closable:x=!1,onRetry:v,retryLabel:y,assistantTrigger:b,monospace:E=!1,...w}){let k=(0,c.tz)(),{theme:C}=(0,n.wn)(),{openAssistant:S}=(0,p.g)(),_=g?(0,u.p0)(g):m,P=E&&void 0!==_?(0,r.Y)(s.o.Text,{css:{fontFamily:"monospace",whiteSpace:"pre",display:"block",color:"inherit !important"},children:_}):_,L=(0,o.useMemo)(()=>{let e=[];return v&&e.push({children:y??k.formatMessage({id:"8U/Kek",defaultMessage:"Retry"}),componentId:"lakewatch.error-message.retry",onClick:v}),b&&e.push({children:b.title,css:[{"&&&&":(0,d.o)(!1)}],icon:(0,r.Y)(i.A,{color:"ai"}),componentId:"lakewatch.error-message.assistant-trigger",onClick:()=>S(b.message)}),e},[k,v,y,b,S]);return(0,r.Y)("div",{css:{display:"flex",flex:1,flexDirection:"column",padding:C.spacing.md,paddingTop:C.spacing.lg},...w,children:(0,r.Y)(l.F,{componentId:e,closable:x,message:a,type:t,description:P,actions:L,showMoreContent:f})})}},641596:(e,t,a)=>{a.d(t,{l:()=>i,u:()=>l});var r=a(610435),o=a(692738),n=a(124235);let s=(0,o.createContext)(void 0),i=({children:e})=>{let[t,a]=(0,o.useState)(!1),[i,l]=(0,o.useState)(new Map),c=(0,o.useRef)(null);(0,o.useEffect)(()=>{let e=e=>{c.current&&c.current.contains(e.target)&&a(!0)},t=e=>{c.current&&!c.current.contains(e.relatedTarget)&&a(!1)};return document.addEventListener("focusin",e),document.addEventListener("focusout",t),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t)}},[]),(0,o.useEffect)(()=>{if(!t)return;let e=e=>{let t=(0,n.cX)();for(let a of i.values()){let{keybinding:r,onTrigger:o}=a;if(e.key!==r.key||(t?e.metaKey:e.ctrlKey)!==(r.ctrlOrCmd??!1))continue;let n=r.shift??!1;if(e.shiftKey!==n)continue;let s=r.alt??!1;if(e.altKey===s){e.preventDefault(),o();break}}};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[t,i]);let d=(0,o.useCallback)(e=>{l(t=>new Map(t).set(e.id,e))},[]),u=(0,o.useCallback)(e=>{l(t=>{let a=new Map(t);return a.delete(e),a})},[]),p=(0,o.useCallback)(()=>Array.from(i.values()),[i]),h=(0,o.useMemo)(()=>({isFocused:t,registerShortcut:d,unregisterShortcut:u,getRegisteredShortcuts:p}),[t,d,u,p]);return(0,r.Y)(s.Provider,{value:h,children:(0,r.Y)("div",{ref:c,css:{height:"100%"},children:e})})},l=({keybinding:e,onTrigger:t,enabled:a})=>{let r=(0,o.useContext)(s),n=(0,o.useRef)(),i=(0,o.useRef)(t),l=(0,o.useRef)(null),c=(0,o.useRef)(null);(0,o.useEffect)(()=>{i.current=t},[t]),(0,o.useEffect)(()=>{r&&(l.current=r.registerShortcut,c.current=r.unregisterShortcut)},[r]);let{key:d,ctrlOrCmd:u,shift:p,alt:h}=e;(0,o.useEffect)(()=>{if(!l.current||!a)return;let e=`${d}-${u?"ctrl":""}-${p?"shift":""}-${h?"alt":""}-${Date.now()}-${Math.random()}`;return n.current=e,l.current({id:e,keybinding:{key:d,ctrlOrCmd:u,shift:p,alt:h},onTrigger:()=>i.current()}),()=>{e&&c.current&&c.current(e)}},[d,u,p,h,a])}},647672:(e,t,a)=>{a.d(t,{m:()=>m});var r=a(610435),o=a(883678),n=a(497895),s=a(79570),i=a(79128),l=a(168277),c=a(128572),d=a(342411),u=a(749565),p=a(677505);let h=(0,d.YK)({newChat:{id:"wCASgn",defaultMessage:"New chat"},expandSidebar:{id:"7l65tS",defaultMessage:"Expand sidebar"}}),m=(0,o.PA)(({onExpand:e})=>{let{theme:t}=(0,n.wn)(),a=(0,d.tz)(),o=(0,u.useGlobalChatStore)(e=>e.dispatch),m=(0,u.useGlobalChatStore)(e=>e.isLoadingPanel);return(0,r.FD)("div",{css:{display:"flex",flexDirection:"column",alignItems:"center",gap:t.spacing.sm,height:"100%"},children:[(0,r.Y)(s.m,{componentId:"lakewatch.chat.sidebar.expand-sidebar-tooltip",content:a.formatMessage(h.expandSidebar),side:"right",children:(0,r.Y)(i.$n,{componentId:"lakewatch.chat.sidebar.expand",icon:(0,r.Y)(l.A,{}),onClick:e,"aria-label":a.formatMessage(h.expandSidebar)})}),(0,r.Y)(s.m,{componentId:"lakewatch.chat.sidebar.new-chat-button-tooltip",content:a.formatMessage(h.newChat),side:"right",children:(0,r.Y)(i.$n,{componentId:"lakewatch.chat.sidebar.new-chat-collapsed",icon:(0,r.Y)(c.A,{}),onClick:()=>{o({type:p.e.CREATE_NEW_THREAD,payload:{}})},disabled:m,"aria-label":a.formatMessage(h.newChat)})})]})})},682972:(e,t,a)=>{a.d(t,{E:()=>m,b:()=>g});var r=a(610435);a(692738);var o=a(497895),n=a(295169),s=a(382908),i=a(79570),l=a(465946),c=a(577780),d=a(342411),u=a(874976),p=a(846947);let h=({tagCount:e=3})=>{let{theme:t}=(0,o.wn)(),a=[60,120,80,90];return(0,r.Y)("div",{css:{display:"flex",flexWrap:"wrap",gap:t.spacing.sm,rowGap:t.spacing.sm},children:Array.from({length:e}).map((e,t)=>(0,r.Y)(n.x,{css:{height:20,width:a[t%a.length]},loading:!0},t))})},m=({budgetPolicy:e,loading:t,visibleTagsCount:a,...n})=>{let{theme:m}=(0,o.wn)(),g=[...e?.customTags||[]].sort();if(t)return(0,r.Y)(h,{});let f=(0,r.Y)(s.o.Text,{color:"secondary",children:(0,r.Y)(d.sA,{id:"DqWWVE",defaultMessage:"Selected policy has no tags"})});if((0,p.CN)())return(0,r.Y)("div",{css:{display:"flex",flexWrap:"wrap",rowGap:m.spacing.sm},...n,children:(0,r.Y)(u.N,{componentIdPrefix:"budget-policies",hideLabel:!0,tags:g.map(e=>({tag_key:e.key??"",tag_value:e.value??""})),isEditable:!1,isTagsLoading:!1,emptyComponent:f,showInOverflow:void 0!==a&&g.length>a,visibleTagsCount:void 0!==a?a:void 0})});if(0===g.length)return f;let x=m.spacing.xs,v={marginBottom:-m.spacing.xs/2,marginTop:-m.spacing.xs/2},y={marginBottom:m.spacing.xs/2,marginTop:m.spacing.xs/2},b=g.map(e=>(0,r.Y)(i.m,{componentId:"budget-policy-details_tags_tooltip",content:`${e.key}: ${e.value}`,children:(0,r.Y)("div",{css:y,children:(0,r.Y)(l.v,{componentId:"BudgetPolicyTags_Tag",style:{maxWidth:"100%"},children:(0,r.Y)(s.o.Text,{ellipsis:!0,style:{maxWidth:"100%"},children:e.value?e.value:e.key})})})},e.key));if(void 0!==a&&g.length>a)return(0,r.Y)("div",{css:{display:"flex",flexWrap:"wrap",rowGap:x,...v},...n,children:(0,r.Y)(c.n,{css:{flexWrap:"wrap",maxHeight:300,overflowY:"auto"},visibleItemsCount:a,children:b})});return(0,r.Y)("div",{css:{display:"flex",flexWrap:"wrap",rowGap:x,...v},...n,children:b})},g=({budgetPolicy:e})=>{let{theme:t}=(0,o.wn)(),a=(0,d.tz)(),n=!!e?.customTags?.length,i={textAlign:"center",marginLeft:t.spacing.md,marginRight:t.spacing.md};return(0,r.FD)(r.FK,{children:[(0,r.Y)(s.o.Text,{bold:!0,children:a.formatMessage({id:"7SSpi1",defaultMessage:"Tags"})}),(0,r.Y)(m,{css:[n?{maxWidth:"95%","div div":{maxWidth:"100%"}}:i,{marginTop:t.spacing.sm}],budgetPolicy:e})]})}},710283:(e,t,a)=>{a.d(t,{s:()=>i});var r=a(650003),o=a(692738),n=a(141078),s=a(940912);function i(e,t){let a=(0,n.mK)(t?.client),[i,l]=(0,o.useState)(()=>{if(t?.skip)return null;return a.subscribe({query:e,variables:t?.variables,fetchPolicy:t?.fetchPolicy,context:{...t?.context,currentImplicitContext:(0,s.yB)()}})}),c=(0,o.useRef)(!1);(0,o.useEffect)(()=>()=>{c.current=!0},[]);let d=(0,o.useRef)({client:a,subscription:e,options:t});(0,o.useEffect)(()=>{let o=t?.shouldResubscribe;"function"==typeof o&&(o=!!o(t)),t?.skip?(!t?.skip!=!d.current.options?.skip||c.current)&&(l(null),c.current=!1):(!1!==o&&(a!==d.current.client||e!==d.current.subscription||t?.fetchPolicy!==d.current.options?.fetchPolicy||!t?.skip!=!d.current.options?.skip||!(0,r.L)(t?.variables,d.current.options?.variables))||c.current)&&(l(a.subscribe({query:e,variables:t?.variables,fetchPolicy:t?.fetchPolicy,context:{...t?.context,currentImplicitContext:(0,s.yB)()}})),c.current=!1),Object.assign(d.current,{client:a,subscription:e,options:t})},[a,e,t,c.current]),(0,o.useEffect)(()=>{if(!i)return;let e=i.subscribe({next(e){let r={loading:!1,data:e.data,error:void 0,variables:t?.variables};d.current.options?.onSubscriptionData?.({client:a,subscriptionData:r})},error(e){d.current.options?.onError?.(e)},complete(){d.current.options?.onSubscriptionComplete?.()}});return()=>{e.unsubscribe()}},[i])}},712689:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{B:()=>c});var o=a(610435),n=a(497895),s=a(647672),i=a(972916),l=e([i]);i=(l.then?(await l)():l)[0];let c=({isOpen:e,onOpenChange:t})=>{let{theme:a}=(0,n.wn)();return(0,o.Y)("div",{css:{display:"flex",flexDirection:"column",height:"100%",width:e?240:48,flexShrink:0,transition:"width 0.2s ease",boxSizing:"border-box",borderRight:`1px solid ${a.colors.border}`,paddingTop:a.spacing.sm,paddingRight:a.spacing.sm,paddingLeft:a.spacing.sm},children:e?(0,o.Y)(i.M,{onCollapse:()=>t(!1)}):(0,o.Y)(s.m,{onExpand:()=>t(!0)})})};r()}catch(e){r(e)}})},758242:(e,t,a)=>{a.d(t,{H:()=>x});var r=a(692738),o=a(257861),n=a(411056),s=a(813342),i=a.n(s),l=a(65061),c=a(334017),d=a(342411),u=a(108437),p=a(558026),h=a(398915);function m(e,t,a,r,o,n,s){try{var i=e[n](s),l=i.value}catch(e){a(e);return}i.done?t(l):Promise.resolve(l).then(r,o)}var g=a(962179);let f=["TERMINATED","TERMINATING","UNKNOWN"];function x(){let[e]=(()=>{let e=(0,d.tz)(),t=(0,u.A)(),[a,o]=(0,l.n_)(p.J);return[(0,r.useCallback)(r=>{var o;return(o=function*(){let o=e.formatMessage({id:"EEt+YV",defaultMessage:"Error while starting SQL warehouse."});try{let e={input:{id:r},...t},n={refetchQueries:[{query:(0,h.bA)(),variables:t}]},s=yield a({variables:e,...n}),l=i()(s)?[]:[...s.errors??[],...s.data?.lakehouseStart?.errors??[]];return(0,c.ed)(o,l,{duration:c.m8}),s}catch(e){(0,c.ed)(o,[e],{duration:c.m8})}},function(){var e=this,t=arguments;return new Promise(function(a,r){var n=o.apply(e,t);function s(e){m(n,a,r,s,i,"next",e)}function i(e){m(n,a,r,s,i,"throw",e)}s(void 0)})})()},[a,e,t]),o]})(),[t]=(0,n.f)();return{startEndpoint:(0,r.useCallback)(a=>{if(!a)return;let r=a?.endpoint_id??"";if((0,g.y0)(a))return t(r);return e(r)},[t,e]),startUnifiedPickerEndpoint:(0,r.useCallback)(a=>{if(!a)return;let r=a?.id??"";if(a.type!==o.Q.CLUSTER)return e(r);if(a.compute.state&&f.includes(a.compute.state))return t(r)},[t,e])}}},797580:(e,t,a)=>{a.d(t,{V:()=>r});let r=(e,t,a)=>({scrollbarColor:`${e} transparent`,"&::-webkit-scrollbar":{width:"0.5rem",height:"0.5rem"},"&::-webkit-scrollbar-thumb":{borderRadius:"0.25rem",backgroundColor:e},"&::-webkit-scrollbar-track":{borderRadius:"0.25rem",backgroundColor:t},"&::-webkit-scrollbar-corner":{backgroundColor:a}})},927174:(e,t,a)=>{a.d(t,{q:()=>i});var r=a(692738),o=a(758242),n=a(257861),s=a(993533);function i(e){let{startUnifiedPickerEndpoint:t}=(0,o.H)(),a=(0,r.useRef)(new Set);return(0,r.useEffect)(()=>{e&&(e.state===s.tXm.STOPPED||null===e.state)?a.current.has(e.id)||(a.current.add(e.id),t({type:n.Q.SQL_WAREHOUSE,id:e.id,compute:e})):e?.state===s.tXm.RUNNING&&a.current.delete(e.id)},[e,t]),{isAutoStarted:void 0!==e&&a.current.has(e.id)}}},936985:(e,t,a)=>{a.d(t,{Ay:()=>p,mJ:()=>d,wy:()=>u});var r=a(323598),o=a.n(r),n=a(692738),s=a(71135),i=a(22191),l=a(886100),c=a(570321);function d(){return n.useContext(s.U).settings}function u(e,t){let a=d(),r=null,n=!1;c.e.isAvailable()&&(r=c.e.call({flagName:e,defaultValue:null}),n=c.e.call({flagName:"databricks.fe.redash.useGetFlagValueSyncRpcForUseConf",defaultValue:!1}));let s=o()(a,[e]);if(n||l.iT.log(i.Es.GqlInfra,"useConfLegacyFallback",`confKey=${e}`),n)if(null!==r)return r;else return void 0!==s&&l.iT.sev2(i.Es.GqlInfra,"useConf: flagValue is empty and sessionConfigValue is defined",`confKey=${e}, sessionConfigValue=${s}, flagValue=${r}`),t;if(void 0===s)return t;return s}let p=u},960718:(e,t,a)=>{a.d(t,{MS:()=>u,SN:()=>p,vP:()=>d,xz:()=>h});var r=a(141078);let o=(0,r.J1)`
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
`,n=(0,r.J1)`
  fragment PermissionFragment on Permission {
    inheritedFromObject
    permissionLevel
    inherited
  }
`,s=(0,r.J1)`
  fragment AccessControlFragment on AccessControl {
    principalName {
      ...PrincipalNameFragment
    }
    allPermissions {
      ...PermissionFragment
    }
  }
  ${o}
  ${n}
`,i=(0,r.J1)`
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
  ${s}
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
  ${i}
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
`,h=(0,r.J1)`
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
`},960719:(e,t,a)=>{a.d(t,{D:()=>n});var r=a(672952),o=a(874779);let n=()=>{let{loading:e,value:t,disabledReason:a}=(0,r.LL)(),n=(0,o.C)();return{loading:e,enabled:t&&n,disabledReason:n?a:"lakewatch preview is not enabled"}}},962179:(e,t,a)=>{function r(e){return"databricks_internal"===e.type}function o(e){return"databricks_cluster"===e.type||"cluster"===e.type}function n(e){return"statements"in e}a.d(t,{PG:()=>r,n9:()=>n,y0:()=>o})},972916:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.d(t,{M:()=>v});var o=a(610435),n=a(883678),s=a(497895),i=a(382908),l=a(79570),c=a(79128),d=a(120132),u=a(128572),p=a(342411),h=a(148537),m=a(749565),g=a(677505),f=e([h]);h=(f.then?(await f)():f)[0];let x=(0,p.YK)({newChat:{id:"m2fzls",defaultMessage:"New chat"},collapseSidebar:{id:"B3Tz4D",defaultMessage:"Collapse sidebar"},sidebarTitle:{id:"O0jdSH",defaultMessage:"Chats"}}),v=(0,n.PA)(({onCollapse:e})=>{let{theme:t}=(0,s.wn)(),a=(0,p.tz)(),r=(0,m.useGlobalChatStore)(e=>e.dispatch),n=(0,m.useGlobalChatStore)(e=>e.isLoadingPanel);return(0,o.FD)("div",{css:{minHeight:0,height:"100%",display:"flex",flexDirection:"column",boxSizing:"border-box"},children:[(0,o.FD)("div",{css:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:t.spacing.md},children:[(0,o.Y)(i.o.Title,{level:4,css:{margin:"0 !important"},children:a.formatMessage(x.sidebarTitle)}),(0,o.Y)(l.m,{componentId:"lakewatch.chat.sidebar.collapse-sidebar-tooltip",content:a.formatMessage(x.collapseSidebar),children:(0,o.Y)(c.$n,{componentId:"lakewatch.chat.sidebar.collapse",icon:(0,o.Y)(d.A,{}),onClick:e,"aria-label":a.formatMessage(x.collapseSidebar)})})]}),(0,o.Y)("div",{css:{marginBottom:t.spacing.md},children:(0,o.Y)(c.$n,{componentId:"lakewatch.chat.sidebar.new-chat",icon:(0,o.Y)(u.A,{}),onClick:()=>{r({type:g.e.CREATE_NEW_THREAD,payload:{}})},disabled:n,css:{width:"100%",justifyContent:"flex-start"},children:a.formatMessage(x.newChat)})}),(0,o.Y)(h.ThreadListContent,{componentIdPrefix:"lakewatch.chat.thread_list"})]})});r()}catch(e){r(e)}})}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/73360.cdd49cac73.chunk.js.map