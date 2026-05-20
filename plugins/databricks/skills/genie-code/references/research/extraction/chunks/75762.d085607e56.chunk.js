"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[75762],{92614:(e,a,t)=>{t.d(a,{Hv:()=>r,Kv:()=>d,Ms:()=>p,Zl:()=>u,_w:()=>i,dT:()=>g,oq:()=>h,pd:()=>l,s:()=>c,wF:()=>o,z0:()=>s});var n=t(1859);function r(){return"/explore/cleanrooms"}function i(){return"/explore/cleanrooms/create"}function o(e){return`/explore/cleanrooms/${encodeURIComponent(e)}`}function s(e,a,t,n){return`/explore/cleanrooms/${encodeURIComponent(e)}/notebooks/${encodeURIComponent(a)}${t?`?${m}=${t}${n?`&${_}=true`:""}&activeTab=preview`:""}`}function l(e,a,t,n){return`/explore/cleanrooms/${encodeURIComponent(e)}/jars/${encodeURIComponent(a)}${t?`?${m}=${t}${n?`&${_}=true`:""}&activeTab=preview`:""}`}function c(e,a){return`/explore/cleanrooms/${encodeURIComponent(e)}/tables/${encodeURIComponent(a)}`}function d(e){return`/explore/cleanrooms/${encodeURIComponent(e)}/edit_table`}function u(e,a){return`/explore/cleanrooms/${encodeURIComponent(e)}/edit_notebook${a?`?notebook=${encodeURIComponent(a)}`:""}`}function p(e,a,t){return`/explore/cleanrooms/${encodeURIComponent(e)}/edit_analysis${a||t?`?${new URLSearchParams({...a&&{analysis:a},...t&&{type:t}}).toString()}`:""}`}let m="version",h={name:m,defaultValue:void 0,codec:n._p,errorMode:"defaultValue"},_="diffToLatest",g={name:_,defaultValue:!1,codec:n.XE,errorMode:"defaultValue"}},93492:(e,a,t)=>{t.d(a,{T7:()=>p,wl:()=>u});var n=t(610435),r=t(632528),i=t.n(r),o=t(692738),s=t(79570),l=t(465946),c=t(342411),d=t(649649);function u(){let e=(0,c.tz)();return(0,n.Y)(s.m,{componentId:"clean-room-details-self-collaboration-tag-tooltip",content:e.formatMessage({id:"WQdwu1",defaultMessage:"A Clean Room is Internal when every collaborator belongs to the same organization."}),children:(0,n.Y)(l.v,{tabIndex:0,componentId:"clean-room-details-self-collaboration-tag",title:e.formatMessage({id:"d7ioGM",defaultMessage:"Internal"}),children:e.formatMessage({id:"JhYCXT",defaultMessage:"Internal"})})})}let p=e=>{let{remote_detailed_info:a,local_collaborator_alias:t}=(0,d.aj)(e,{retryOnMount:!1}).data||{},{collaborators:n}=a||{collaborators:[]},r=!!(0,o.useMemo)(()=>{if(0===n.length)return!1;return 1===i()(n,"global_metastore_id").length},[n]),s=(0,o.useCallback)(e=>n.find(a=>a.collaborator_alias===e)?.display_name||"",[n]),l=(0,o.useCallback)(e=>e.map(e=>{let a=n.find(a=>e?.owner_collaborator_alias===a.collaborator_alias);return{...e,owner:{...e.owner,display_name:a?.display_name,organization_name:a?.organization_name}}}),[n]),c=s(t??"");return{isSelfCollaboration:r,currentUserCollaboratorAlias:t||"",currentUserDisplayName:c||"",getDisplayNameForCollaboratorAlias:s,fillAssetOwnerData:l,findCollaboratorByAlias:(0,o.useCallback)(e=>n.find(a=>e===a.collaborator_alias),[n]),collaborators:n}}},149601:(e,a,t)=>{t.d(a,{A:()=>l});var n=t(610435),r=t(692738),i=t(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"m8.03 1 7.03 7.03L14 9.091l-5.22-5.22v11.19h-1.5V3.87l-5.22 5.22L1 8.031z",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,a)=>(0,n.Y)(i.I,{ref:a,...e,component:o}));s.displayName="ArrowUpIcon";let l=s},151037:(e,a,t)=>{t.d(a,{DE:()=>S,L9:()=>g,VL:()=>f,nb:()=>E,y5:()=>C});var n,r=t(610435),i=t(34116),o=t.n(i),s=t(692738),l=t(43680),c=t(649649),d=t(850723),u=t(455843),p=t(490434),m=t(524013),h=t(863980),_=t(279402),g=((n={}).UpdateTablePartition="update_delta_sharing_share_table_partition",n.UpdateEntityTablesError="edit_delta_sharing_share_tables_error",n.UpdateEntityTablesSuccess="edit_delta_sharing_share_tables_success",n.ClickDeltaSharingCatalogExplorer="click_delta_sharing_inbound",n.ClickCloseDeltaSharingCatalogExplorer="click_delta_sharing_outbound",n.SwitchToDeltaSharingRecipientsTab="swtich_to_delta_sharing_recipients_list_tab",n.SwitchToDeltaSharingSharesTab="swtich_to_delta_sharing_shares_list_tab",n.DisplayDeltaSharingOutboundTagsFail="display_delta_sharing_outbound_tags_fail",n.LoadDeltaShareFailed="load_delta_sharing_identifier_fail",n.ViewDeltaSharingProviders="view_delta_sharing_providers_list",n.OpenAddDeltaShareRecipientModal="open_add_delta_sharing_recipients_to_share_modal",n.CloseAddDeltaShareRecipientModal="close_add_delta_sharing_recipients_to_share_modal",n.CreateDeltaShareRecipientSuccess="create_delta_sharing_recipient_to_add_success",n.CreateDeltaShareRecipientError="create_delta_sharing_recipient_to_add_error",n.AddDeltaShareRecipientsError="add_delta_sharing_recipients_to_share_error",n.AddDeltaShareRecipientsSuccess="add_delta_sharing_recipients_to_share_success",n.CreateNewDeltaShareAttempt="create_delta_sharing_share_attempt",n.CreateNewDeltaShareSuccess="create_delta_sharing_share_success",n.CreateNewDeltaShareError="create_delta_sharing_share_error",n.UpdateDeltaShareAttempt="update_delta_sharing_share_attempt",n.UpdateDeltaShareSuccess="update_delta_sharing_share_success",n.UpdateDeltaShareError="update_delta_sharing_share_error",n.DeleteDeltaShareAttempt="delete_delta_sharing_share_attempt",n.DeleteDeltaShareSuccess="delete_delta_sharing_share_success",n.DeleteDeltaShareError="delete_delta_sharing_share_error",n.CreateDeltaSharingRecipientError="create_delta_sharing_recipient_error",n.CreateDeltaSharingRecipientSuccess="create_delta_sharing_recipient_success",n.OpenCreateDeltaSharingRecipient="open_create_delta_sharing_recipient_modal",n.CloseCreateDeltaSharingRecipient="close_create_delta_sharing_recipient_modal",n.ViewDeltaShareProviderDetails="view_delta_sharing_provider_details",n.SwitchToDeltaShareProviderSharesTab="swtich_to_delta_sharing_provider_shares_tab",n.SwitchToDeltaShareProviderDetailTab="swtich_to_delta_sharing_provider_details_tab",n.ShowShareSchemaWarningModal="edit_delta_sharing_share_show_schema_warning",n.ShareSchemaWarningModalSchemaShared="edit_delta_sharing_share_schema_shared",n.ShareSchemaWarningModalCancelled="edit_delta_sharing_share_share_schema_cancelled",n.ShowShareSchemaInsteadModal="edit_delta_sharing_share_show_schema_instead",n.ShareSchemaInsteadModalSchemaShared="edit_delta_sharing_share_share_schema_instead",n.ShareSchemaInsteadModalSelectAll="edit_delta_sharing_share_select_all_tables",n.ViewDeltaSharingSharesList="view_delta_sharing_shares_list",n.GrantDeltaShareToRecipientSuccess="grant_delta_sharing_share_to_recipient_success",n.GrantDeltaShareToRecipientError="grant_delta_sharing_share_to_recipient_error",n.OpenGrantDeltaShareToRecipientModal="open_grant_delta_sharing_share_to_recipient_modal",n.CloseGrantDeltaShareToRecipientModal="close_grant_delta_sharing_share_to_recipient_modal",n.ViewDeltaShareDetails="view_delta_sharing_share_details",n.SwitchToDeltaShareAssetsTab="switch_to_delta_sharing_share_assets_tab",n.SwitchToDeltaShareRecipientsTab="switch_to_delta_sharing_share_recipients_tab",n.OpenRevokeDeltaShareRecipientFromShare="open_revoke_delta_sharing_recipient_from_share_modal",n.CloseRevokeDeltaShareRecipientFromShare="close_revoke_delta_sharing_recipient_from_share_modal",n.RevokeDeltaShareRecipientFromShareError="revoke_delta_sharing_recipient_from_share_error",n.RevokeDeltaShareRecipientFromShareSuccess="revoke_delta_sharing_recipient_from_share_success",n.OpenRevokeDeltaShareFromRecipient="open_revoke_delta_sharing_share_from_recipient_modal",n.CloseRevokeDeltaShareFromRecipient="close_revoke_delta_sharing_share_from_recipient_modal",n.RevokeDeltaShareFromRecipientError="revoke_delta_sharing_share_from_recipient_error",n.RevokeDeltaShareFromRecipientSuccess="revoke_delta_sharing_share_from_recipient_success",n.RotateDeltaSharingRecipientTokenSuccess="rotate_delta_sharing_recipeint_token_success",n.RotateDeltaSharingRecipientTokenError="rotate_delta_sharing_recipeint_token_fail",n.CopyDeltaSharingIdentifier="copy_delta_sharing_identifier",n.UpdateDeltaSharingRecipientPropertiesSuccess="update_delta_sharing_recipient_properties_success",n.UpdateDeltaSharingRecipientPropertiesError="update_delta_sharing_recipient_properties_fail",n.ViewDeltaSharingRecipientsList="view_delta_sharing_recipients_list",n.AddDeltaSharingShareNotebookSuccess="add_delta_sharing_share_notebook_success",n.DeleteDeltaSharingShareNotebookSuccess="delete_delta_sharing_share_notebook_success",n.CopyDeltaSharingRecipientActivationLink="copy_delta_sharing_recipient_activation_link",n.ViewDeltaSharingRecipientDetails="view_delta_sharing_recipient_details",n.SwitchToDeltaSharingRecipientDetailsTab="switch_to_delta_sharing_recipient_details_tab",n.SwitchToDeltaSharingRecipientSharesTab="switch_to_delta_sharing_recipient_shares_tab",n.SwitchToDeltaSharingRecipientIpAccessTab="switch_to_delta_sharing_recipient_$ip_access_tab",n.AddDeltaSharingIpAccessSuccess="add_delta_sharing_ip_access_list_success",n.AddDeltaSharingIpAccessError="add_delta_sharing_ip_access_list_error",n.DeleteDeltaSharingIpAccessSuccess="delete_delta_sharing_ip_access_list_success",n.DeleteDeltaSharingIpAccessError="delete_delta_sharing_ip_access_list_error",n.DeltaShareDetailsLoaded="DeltaShareDetailsLoaded",n.CleanRoomDetailsLoaded="CleanRoomDetailsLoaded",n.CleanRoomNotebookTaskOutputSchemaLinkClicked="CleanRoomNotebookTaskOutputSchemaLinkClicked",n.CleanRoomNotebookTaskLinkClicked="CleanRoomNotebookTaskLinkClicked",n.CleanRoomNotebookLinkClickedFromTasksTable="CleanRoomNotebookLinkClickedFromTasksTable",n.CleanRoomJarAnalysisTaskLinkClicked="CleanRoomJarAnalysisTaskLinkClicked",n.CleanRoomJarAnalysisLinkClickedFromTasksTable="CleanRoomJarAnalysisLinkClickedFromTasksTable",n.DataSharingAddNotebookNoMetastoreRootStorage="DataSharingAddNotebookNoMetastoreRootStorage",n.CreateShareWizardLoaded="CreateShareWizardLoaded",n.CreateShareWizardCanceled="CreateShareWizardCanceled",n.CreateShareWizardClickSubmit="CreateShareWizardClickSubmit",n.CreateShareWizardClickNext="CreateShareWizardClickNext",n.CreateShareWizardClickBack="CreateShareWizardClickBack",n.CleanRoomNotebookParametersParsingResult="CleanRoomNotebookParametersParsingResult",n.QuickSharingModalOpen="QuickSharingModalOpen",n.QuickSharingModalClose="QuickSharingModalClose",n.QuickSharingModalSubmit="QuickSharingModalSubmit",n.QuickSharingModalSuccess="QuickSharingModalSuccess",n.QuickSharingModalError="QuickSharingModalError",n.TableColumnAliasesCreateStarted="TableColumnAliasesCreateStarted",n.TableColumnAliasesCreateSuccess="TableColumnAliasesCreateSuccess",n.TableColumnAliasesCreateCancel="TableColumnAliasesCreateCancel",n.RecipientTokenLifetimeUpdateSuccess="RecipientTokenLifetimeUpdateSuccess",n.RecipientTokenLifetimeUpdateError="RecipientTokenLifetimeUpdateError",n.CleanRoomNotebookRenderErrorContentDomainUnreachable="CleanRoomNotebookRenderErrorContentDomainUnreachable",n.CleanRoomNotebookRenderError="CleanRoomNotebookRenderError",n.CleanRoomNotebookRenderUserContentDomainFetchFailed="CleanRoomNotebookRenderUserContentDomainFetchFailed",n.CleanRoomCreateOutputCatalogFromDetailsSuccess="CleanRoomCreateOutputCatalogFromDetailsSuccess",n.TableSharingHistoryEnabled="TableSharingHistoryEnabled",n.TableSharingHistoryDisabled="TableSharingHistoryDisabled",n.CleanRoomNotebookCreateModelFailed="CleanRoomNotebookCreateModelFailed",n.CleanRoomNotebookCreateModelSuccess="CleanRoomNotebookCreateModelSuccess",n.PublishToMarketplaceModalOpen="PublishToMarketplaceModalOpen",n.PublishToMarketplaceModalClose="PublishToMarketplaceModalClose",n.PublishToMarketplaceModalSubmit="PublishToMarketplaceModalSubmit",n.PublishToMarketplaceModalSuccess="PublishToMarketplaceModalSuccess",n.PublishToMarketplaceModalError="PublishToMarketplaceModalError",n);let b=s.createContext({recordEvent:o()}),f=()=>s.useContext(b).recordEvent;function S({children:e,entityType:a,shareId:t,localCleanRoomMetastoreId:n,centralCleanRoomId:i}){let o=(0,s.useMemo)(()=>({dataSharingEntityType:a,dataSharingDeltaShareId:t,dataSharingCentralCleanRoomId:i,dataSharingLocalCleanRoomMetastoreId:n}),[a,i,n,t]);return(0,r.Y)(u.r,{id:p.o.DATA_SHARING,tags:o,children:(0,r.Y)(k,{children:e})})}function k({children:e}){let a=(0,m.df)(),t=(0,s.useCallback)((e,t)=>{a("redashEvent",{eventType:"DataSharing",eventName:e,...t,redashAction:e})},[a]);return(0,r.Y)(b.Provider,{value:(0,s.useMemo)(()=>({recordEvent:t}),[t]),children:e})}function E({children:e}){let{cleanRoom:a}=(0,h.Ve)(),t=(0,d.O)({useQueryOptions:{enabled:!!a,refetchOnWindowFocus:!1}}),n=(0,c.aj)(a??"",{enabled:!!a,refetchOnWindowFocus:!1,retryOnMount:!1});return(0,r.Y)(S,{entityType:"clean-room",localCleanRoomMetastoreId:t.data?.global_metastore_id,centralCleanRoomId:n.data?.remote_detailed_info?.central_clean_room_id,children:e})}function C({children:e}){let{share:a}=(0,_.useDataExplorerContext)(),t=(0,l.pt)(a??"",{enabled:!!a,refetchOnWindowFocus:!1});return(0,r.Y)(S,{shareId:t?.data?.share_id,entityType:"delta-share",children:e})}},187480:(e,a,t)=>{t.d(a,{q:()=>u,y:()=>p});var n=t(610435),r=t(452137),i=t.n(r);t(692738);var o=t(339518),s=t(342411),l=t(649649),c=t(811362),d=t(863980);let u=()=>{let e=(0,s.tz)();return(0,n.Y)(o.F,{style:{width:"100%",alignSelf:"flex-start"},componentId:"clean-room-detail-alert-other-collaborator-deleted",type:"warning",closable:!1,message:e.formatMessage({id:"xmw+oH",defaultMessage:"Other collaborators have left, and the clean room is no longer usable. Please delete the clean room."})})},p=({children:e})=>{let{cleanRoom:a}=(0,d.Ve)();i()(void 0!==a,"Clean Room must be set");let t=(0,l.aj)(a);return t?.data?.status===c.RB.DELETED?(0,n.Y)(u,{}):(0,n.Y)(n.FK,{children:e})}},279695:(e,a,t)=>{t.d(a,{c:()=>o});var n=t(610435),r=t(881859),i=t(187480);let o=({children:e})=>(0,n.Y)(i.y,{children:(0,n.Y)(r.t,{children:e})})},290766:(e,a,t)=>{t.d(a,{T:()=>l});var n=t(65061),r=t(960718),i=t(141078);let o=(0,i.J1)`
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
  ${r.xz}
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
`,l=(e,a)=>(0,n.IT)(a?s:o,{fetchPolicy:"cache-and-network",...e})},537901:(e,a,t)=>{t.r(a),t.d(a,{RouteComponent:()=>D,default:()=>I});var n=t(610435),r=t(989118),i=t(971496),o=t(279695),s=t(181440),l=t(509695),c=t(452137),d=t.n(c),u=t(427518),p=t.n(u),m=t(692738),h=t(497895),_=t(499918),g=t(342411),b=t(649649),f=t(811362),S=t(656280),k=t(133293),E=t(93492),C=t(863980),v=t(602996),T=t(920003),R=t(606546);function w(){let e=(0,g.tz)(),a=(0,l.h)(),{theme:t}=(0,h.wn)(),{cleanRoom:r,showCleanRoom:i}=(0,C.Ve)();d()(void 0!==r,"Clean Room must be set");let[o,s]=(0,m.useState)(),{currentUserCollaboratorAlias:c}=(0,E.T7)(r),u=(0,b.rK)(r,{staleTime:0}),w=(0,m.useCallback)(e=>o?.remote_detailed_info.collaborators.find(e=>e.collaborator_alias===c)?.collaborator_alias??e.catalogAlias,[o?.remote_detailed_info.collaborators,c]),{mutate:y,isLoading:I}=(0,b.dc)(r),D=(0,k.Uf)({cleanRoom:r,eventNamePrefix:"clean_room_edit_tables"}),L=o?.remote_detailed_info.egress_network_policy?.internet_access?.restriction_mode===f.z3.RESTRICTED_ACCESS;return(0,n.Y)(T.Wg,{breadcrumbs:D,useGetEntityDataObjects:()=>{let e=(0,b.aj)(r);return o||e.isLoading||p()(()=>s(e.data)),u},mapRequestDataToSharedData:v.fb,getDefaultCatalogAlias:w,entityTypeName:"clean room",entityName:r,entityOwner:o?.owner,showEntity:i,handleSave:(o,s)=>{let l=e=>{let a={};for(let t of e)a[t.name]=t;return a},c=l(o),d=l(s),p=(e,a)=>e.filter(a).map(e=>(0,v.Qp)({...e,catalogAlias:w(e)})),m=p(s,e=>!(e.name in c)),h=p(o,e=>!(e.name in d)),g=p(s,e=>e.name in c&&!(0,R.Xv)({...e,catalogAlias:w(e)},c[e.name]));if(!m.length&&!h.length&&!g.length)return void i(r);y({objectsToAdd:m,objectsToRemove:h,objectsToUpdate:g},{onSettled:o=>{o&&!o?.hasErrors?i(r):(u.refetch(),o?.mutationErrors?.forEach(r=>{let{actionType:i,assetName:o,errorMessage:s}=r;a.error({message:e.formatMessage({id:"1DaP08",defaultMessage:"Failed to {actionType} an asset. Please retry."},{actionType:i}),description:(0,n.FD)("div",{css:{display:"flex",flexDirection:"column",rowGap:t.spacing.sm},children:[(0,n.Y)("div",{css:{marginTop:t.spacing.xs},children:e.formatMessage({id:"asqI8T",defaultMessage:"{assetName}"},{assetName:o})}),(0,n.Y)(_.n,{componentId:"clean-room-asset-management-display-error-message-accordian",children:(0,n.Y)(_.n.Panel,{header:e.formatMessage({id:"sbK6Hn",defaultMessage:"Error Details"}),children:s},o)})]}),duration:0})}))}})},isMutationLoading:I,canSelectSchema:!1,canSelectVolumes:!0,canSelectModels:(0,S.DS)(),canSelectViews:!0,canSelectMaterializedViews:!1,canSelectMetricViews:!1,emptyStateDescription:e.formatMessage({id:"L7cuPe",defaultMessage:"Add assets to the Clean Room by selecting assets on the right. Selected assets will appear here, and you can configure the details."}),isRestrictedNetworkAccess:L})}function y(){return(0,n.Y)(i.V,{children:(0,n.Y)(l.p,{children:(0,n.Y)(r.q,{value:{requireSqlService:!0},children:(0,n.Y)(s.DataExplorerDataSourceContextProvider,{children:(0,n.Y)(o.c,{children:(0,n.Y)(w,{})})})})})})}let I=y;function D(){return(0,n.Y)(y,{})}},566825:(e,a,t)=>{t.d(a,{Ay:()=>S,Ns:()=>g,ZC:()=>f,r:()=>b});var n=t(987962),r=t.n(n),i=t(623576),o=t.n(i),s=t(189219),l=t.n(s),c=t(923305),d=t(651139),u=t(949313),p=t(670943),m=t(924636),h=t(984741),_=t(885364);function g(e){return r()(e,"job.id")?(0,u.Ec)(e.job.id,1e3):e}let b=["get-data-sources"],f=(0,h.to)("sql/images/db-logos"),S={query:()=>(0,p.Ym)()?d.pY.get(m.bI).then(e=>e?.data_sources||[]):d.pY.get((0,c.Hi)("api/data_sources")),get:({id:e})=>d.pY.get((0,c.Hi)(`api/data_sources/${e}`)),types:()=>d.pY.get((0,c.Hi)("api/data_sources/types")),create:e=>d.pY.post((0,c.Hi)("api/data_sources"),e),save:e=>d.pY.post((0,c.Hi)(`api/data_sources/${e.id}`),e),test:e=>d.pY.post((0,c.Hi)(`api/data_sources/${e.id}/test`)),delete:({id:e})=>d.pY.delete((0,c.Hi)(`api/data_sources/${e}`)),fetchSchema:(e,a=!1)=>{let t={};return a&&(t.refresh=!0),d.pY.get((0,c.Hi)(`api/data_sources/${e.id}/schema`),{params:t}).then(e=>{if(r()(e,"job"))return(0,u.Ec)(e.job.id).catch(a=>1===a.code?[]:Promise.reject(Error(e.job.error)));return r()(e,"schema")?e.schema:Promise.reject()}).then(e=>o()(e,e=>{var a;return{...e,columns:(a=e.columns,o()(a,e=>l()(e)?e:{name:e})),type:e.type}}))},fetchColumns:(e,a,t)=>d.pY.get((0,c.Hi)(`api/data_sources/${e}/${a}/columns/${t}`)).then(g).then((0,_.g)("DataSource.fetchColumns"))}},572382:(e,a,t)=>{t.d(a,{CU:()=>s,U1:()=>l,iC:()=>o,kc:()=>r,sT:()=>i});var n=t(32121);function r(e){return e?.edges.map(e=>e.node)}function i({networkStatus:e}){return e===n.pT.fetchMore}function o({networkStatus:e}){return e===n.pT.refetch}function s({networkStatus:e}){return e===n.pT.poll}function l({__typename:e,...a}){return a}},602996:(e,a,t)=>{t.d(a,{BN:()=>S,Bj:()=>E,E$:()=>k,Pt:()=>b,Q3:()=>p,Qp:()=>v,SM:()=>f,f3:()=>T,fb:()=>d,fe:()=>u,fx:()=>g,mV:()=>h,nW:()=>_,po:()=>m,sp:()=>C});var n=t(725958),r=t(811362),i=t(656280),o=t(929013),s=t(29824),l=t(606546);let c={table:o.zq.TABLE,volume:o.zq.VOLUME,view:o.zq.VIEW,foreign_table:o.zq.FOREIGN_TABLE,model:o.zq.MODEL},d=e=>e.filter(e=>e.local_details).map(e=>{let{name:a="",owner:t}=e,n=a.split(".");return{...(0,l.xK)(u(e)),catalogAlias:t?.collaborator_alias||n[0]}}),u=e=>{let{name:a="",type:t,local_details:n}=e,r=a.split("."),i=r.slice(1).join(".");return{data_object_type:c[t],name:n?.local_name??"",shared_as:i,string_shared_as:i,catalog_name:r[0],full_alias:a,history_data_sharing_status:n?.history_data_sharing_status,partitions:n?.partitions}};function p(e,a){let t=e?.find(e=>e?.type==="notebook"&&e?.name===a),n=t?.data;return{notebookInfo:n,notebookAsset:t,owner:t?.owner??(n?.owner_global_metastore_id?{global_metastore_id:n?.owner_global_metastore_id,collaborator_alias:n?.owner_collaborator_alias}:void 0)}}function m(e,a,t){let n=e?.find(e=>e?.name===a&&e?.type===t),r=n?.data;return{analysisInfo:r,analysisAsset:n,owner:n?.owner??(r?.owner_global_metastore_id?{global_metastore_id:r?.owner_global_metastore_id,collaborator_alias:r?.owner_collaborator_alias}:void 0)}}let h=e=>[{id:"column",header:e.formatMessage({id:"JPdsAP",defaultMessage:"Column"}),accessorKey:"name",sortingFn:"basic"},{id:"type",header:e.formatMessage({id:"vMRFhH",defaultMessage:"Type"}),accessorKey:"type_text",sortingFn:"basic"}],_=e=>{switch(e){case"view":return o.zq.VIEW;case"foreign_table":return o.zq.FOREIGN_TABLE;case"volume":return o.zq.VOLUME;default:return o.zq.TABLE}},g=e=>["table","view","foreign_table"].includes(e),b={table:s.an.TABLE,volume:s.an.VOLUME,view:s.an.VIEW,foreign_table:s.an.TABLE,model:s.an.REGISTERED_MODEL},f=e=>{switch(e){case o.zq.TABLE:return r.BV.TABLE;case o.zq.VOLUME:return r.BV.VOLUME;case o.zq.VIEW:return r.BV.VIEW;case o.zq.FOREIGN_TABLE:return r.BV.FOREIGN_TABLE;case o.zq.MODEL:return r.BV.MODEL;default:return r.BV.TABLE}},S=(e,a)=>!!e?.find(e=>(0,i.tQ)(e)&&e?.name===a),k=(e,a)=>{let[,t,n,r,i,...o]=e.split("/");if("Volumes"!==t||!n||!r||!i)return e;let s=`${n}.${r}.${i}`,l=a.find(e=>"volume"===e.type&&e.name===s),c=l?.local_details?.local_name;if(!c)return e;let[d]=c.split(".");if(!d)return e;return["",t,d,r,i,...o].join("/")},E=(e=[],a)=>e.filter(e=>e.owner?.collaborator_alias===a).reduce((e,a)=>("notebook"===a.type&&a.name&&e.set(a.name,a),e),new Map),C=(e=[],a)=>e.filter(e=>e.owner?.collaborator_alias===a).reduce((e,a)=>((0,i.tQ)(a)&&a.name&&e.set(a.name,a),e),new Map),v=e=>{let{data_object_type:a,name:t,partitions:r,catalogAlias:i,history_data_sharing_status:s}=e,l=(e=>{let a=e.schemaAlias||e.schema;switch(e.data_object_type){case o.zq.MODEL:return`${e.catalogAlias}.${a}.${e.modelAlias||e.model}`;case o.zq.VOLUME:return`${e.catalogAlias}.${a}.${e.volumeAlias||e.volume}`;default:return`${e.catalogAlias}.${a}.${e.tableAlias||e.table}`}})(e),c=(e=>{switch(e){case o.zq.TABLE:return"table_local_details";case o.zq.VOLUME:return"volume_local_details";case o.zq.VIEW:return"view_local_details";case o.zq.FOREIGN_TABLE:return"foreign_table_local_details";case o.zq.MODEL:return"model_local_details";default:return"table_local_details"}})(a),d=(0,n.omitBy)(n.isNil,{local_name:t,partitions:r,history_data_sharing_status:s});return{name:l,asset_type:f(a),catalog:i,[c]:d}},T=e=>{if(!e)return{isPackagedCleanRoom:!1,isConsumerView:!1};let{package_provider_collaborator_alias:a}=e.remote_detailed_info,t=!!a;return{isPackagedCleanRoom:t,isConsumerView:t&&e.local_collaborator_alias!==a}}},662874:(e,a,t)=>{t.d(a,{DK:()=>d,Go:()=>c,WL:()=>s,t2:()=>l});var n=t(610435),r=t(692738),i=t(745444),o=t(962179);let s=r.createContext(()=>void 0);function l({children:e}){let{lakehouseMap:a}=(0,i.j)(),t=(0,r.useCallback)(e=>a[e],[a]);return(0,n.Y)(s.Provider,{value:t,children:e})}function c(e){let a=(0,r.useContext)(s);return(0,r.useMemo)(()=>e.map(e=>{if(!(0,o.PG)(e))return e;let t=a(e.endpoint_id??"");return{...e,lakehouse:t}}),[e,a])}function d(e){let a=(0,r.useContext)(s);return(0,r.useMemo)(()=>{if(e){let t=a(e.endpoint_id??"");return{...e,lakehouse:t}}},[e,a])}},675175:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(692738);function r(e){let a=(0,n.useRef)({value:e,previous:e});return(0,n.useMemo)(()=>(a.current.value!==e&&(a.current.previous=a.current.value,a.current.value=e),a.current.previous),[e])}},708082:(e,a,t)=>{t.d(a,{GD:()=>r,GU:()=>d,Yc:()=>c,au:()=>l,cF:()=>n,hx:()=>s,hz:()=>i,jE:()=>u,p$:()=>o});let n=/^\S*$/,r=/^(https:\/\/)([\w-]+\.)*[\w-]+\.[\w]{2,}(?::\d{1,5})?(?:\/[^\s]*)?$/,i=/((git|ssh|http(s)?)|(git@[\w.]+))(:(\/\/)?)(github|bitbucket|gitlab|user@dev.azure|git-codecommit)([\w.@:/\-~]+)(\.git)(\/)?/,o=/\S/,s=/^[a-z]+:[a-z0-9-]+:([a-f\d]{8}-[a-f\d]{4}-4[a-f\d]{3}-[89aAbB][a-f\d]{3}-[a-f\d]{12})$/,l=/^[\w-+]+(?:\.[\w-+]+)*@(?!-)[\w-]+(?:\.[a-zA-Z]{2,})+$/,c=/^[0-9]*$/,d=/^\s*[A-Za-z0-9].*/,u=/^[^.\s/]+$/},733052:(e,a,t)=>{t.d(a,{A:()=>i});var n=t(610435);t(692738);var r=t(802582);function i({primary:e=!1,srSilent:a=!1,children:t,placement:o,title:s,dataTestId:l,arrowPointAtCenter:c,...d}){return(0,n.Y)(r.p,{silenceScreenReader:a,useAsLabel:e,placement:o,title:s,dataTestId:l,arrowPointAtCenter:c,...d,children:t})}},735617:(e,a,t)=>{t.d(a,{FR:()=>c,bo:()=>d,jj:()=>l,oK:()=>u});var n,r,i=t(737358),o=t(337706),s=t(817392),l=((n={}).ALL="all",n.PIPELINE="pipeline",n.ALL_DATABRICKS="all_databricks",n),c=((r={}).DataIngestionIndex="/dataingestion/add",r.DataIngestionFileUpload="/dataingestion/upload/file",r.DataIngestionExternalLocation="/dataingestion/external-location",r);let d={BASE:"/ingestion",ADD_DATA:"add",PIPELINE_SETUP:"pipelines/setup",DBFS_BASE:"/tables/new",DBFS:"dbfs",FILE:"file",S3:"s3"},u=({withLegacySqlPrefix:e}={withLegacySqlPrefix:!1})=>({addData:e=>(0,i.AO)({pathname:`${d.BASE}/${d.ADD_DATA}`,search:e&&(0,o.XZ)(e)}),setup:e=>(0,i.AO)({pathname:`${d.BASE}/${d.PIPELINE_SETUP}`,search:e&&(0,o.XZ)(e)}),fileUpload(){if((0,s.bf)())return"/dataingestion/upload/file";return this.dbfsTableImportUpload()},externalLocation:()=>"/dataingestion/external-location",dbfsTableImportUpload:()=>`${d.DBFS_BASE}/${d.FILE}`,dbfsTableImportBrowse:()=>`${d.DBFS_BASE}/${d.DBFS}`,s3TableImport:()=>`${d.DBFS_BASE}/${d.S3}`})},745444:(e,a,t)=>{t.d(a,{j:()=>d});var n=t(298280),r=t.n(n),i=t(692738),o=t(919505),s=t(290766),l=t(572382),c=t(441535);function d({enableLiveUpdates:e=!0,fetchPolicy:a="cache-and-network",useMinimalQuery:t=!1,isEnabled:n=!0}={}){let u=(0,c.W)("databricks.fe.redash.listPollingInterval",5e3),[p,m]=(0,i.useState)(()=>(0,c.W)("databricks.fe.redash.enableWarehouseEventSubscription",!1)),h=e&&p&&!t,{data:_,loading:g,refetch:b}=(0,s.T)({pollInterval:e&&!h?u:0,fetchPolicy:a,nextFetchPolicy:h?"cache-first":void 0,skip:!n},t);return(0,o.A)({skip:!h||!n,refetchLakehouseStates:b,setEnableSubscription:m}),{loaded:!g,lakehouseMap:(0,i.useMemo)(()=>r()((0,l.kc)(_?.lakehouses),e=>e?.id),[_?.lakehouses])}}},817392:(e,a,t)=>{t.d(a,{$G:()=>k,CP:()=>x,Ip:()=>b,JA:()=>S,Kq:()=>L,Kx:()=>F,Lo:()=>c,MD:()=>T,Ot:()=>y,QL:()=>l,QV:()=>p,RC:()=>w,UB:()=>A,Uj:()=>I,XV:()=>C,a7:()=>B,ab:()=>g,bb:()=>z,bf:()=>d,c_:()=>E,eV:()=>_,gw:()=>U,h:()=>$,ik:()=>u,nl:()=>f,q2:()=>P,qg:()=>h,qu:()=>D,r1:()=>M,r5:()=>m,s_:()=>N,t4:()=>v,tj:()=>R,w_:()=>O,wn:()=>W});var n=t(13451),r=t(686560),i=t(441535),o=t(858239),s=t(39566);function l(){return(0,n.e)("enableUploadDataUis",!0)}function c(){return(0,n.e)("enableDbfsFileBrowser",!1)}function d(){return(0,i.W)("databricks.fe.ingestion.enableLocalFileUpload",!1)}function u(){return l()&&d()}function p(){return(0,r.d)("workspaceHasDbfsRootEnabled",!0)&&(c()||l())}function m(e){if(void 0===e)return!1;return(0,i.W)("databricks.fe.ingestion.enableDPM",!0)&&((0,i.W)("databricks.deltapipelines.ungateDirectPublishingModeForManagedIngestionPipeline",!1)&&e===s.DI.QUERY||(0,i.W)("databricks.deltapipelines.ungateDirectPublishingModeForCdcIngestionPipeline",!1)&&e===s.DI.CDC)}function h(){return(0,i.W)("databricks.fe.ingestion.wizardPipelineNameValidationDebounceMillis",300)}function _(){return(0,i.W)("databricks.fe.ingestion.enableWorkdayIncrementalRowsUI",!1)}function g(e){return({[o.t.TEST_DRAWER]:!1,[o.t.LAKEFLOW_CREATE_PIPELINE]:(0,i.W)("databricks.fe.ingestion.drawer.createPipeline",!0),[o.t.LAKEFLOW_CREATE_PIPELINE_FROM_LANDING_CARD]:(0,i.W)("databricks.fe.ingestion.drawer.createPipeline",!0),[o.t.EDIT_PIPELINE]:(0,i.W)("databricks.fe.ingestion.drawer.editPipeline",!0),[o.t.NOTEBOOK_CREATE_TABLE]:(0,i.W)("databricks.fe.ingestion.drawer.notebook",!1),[o.t.ADD_DATA_PAGE_CREATE_PIPELINE]:(0,i.W)("databricks.fe.ingestion.drawer.addDataPipeline",!0),[o.t.LAKEFLOW_JOBS_CREATE_PIPELINE]:!0,[o.t.LAKEFLOW_CONNECT_CREATE_DATASET_DRAWER_KEY]:!0,[o.t.LAKEBUILDER_CREATE_TABLE]:!0,[o.t.LAKEFLOW_JOBS_EDIT_PIPELINE]:!0,[o.t.UC_ASSET_SELECTOR_CREATE_TABLE]:!0,[o.t.ADD_DATA_PAGE_CREATE_TABLE]:(0,i.W)("databricks.fe.ingestion.drawer.addDataPageCreateTable",!1),[o.t.FOREIGN_CATALOG_CREATE_PIPELINE]:(0,i.W)("databricks.fe.ingestion.enableForeignCatalogIngestion",!1),[o.t.CATALOG_EXPLORER_ADD_DATA]:(0,i.W)("databricks.fe.ingestion.drawer.catalogExplorerAddData",!1)})[e]}function b(){return(0,i.W)("databricks.ingestion.schemaExploration.useExploreMode",!1)}function f(){return(0,i.W)("databricks.fe.ingestion.enableAssistantButtonForIngestionWizardErrors",!1)}function S(){return((0,i.W)("budget_policy",null)??!1)&&(0,i.W)("databricks.fe.ingestion.enablePipelineBudgetPolicy",!1)}function k(e,a){if(!e||a!==s.DI.CDC)return!1;return!!((0,i.W)("dlt-pipelines.cdcApplier.sourceValidation",!1)&&(0,i.W)("dlt-pipelines.cdcApplier.sourceValidation.sources","SQLSERVER").split(",").includes(e))}function E(){return(0,i.W)("databricks.deltapipelines.enableMandatorySlotConfigChecksForPostgres",!1)}function C(){return(0,i.W)("databricks.deltapipelines.enableOptionalSlotConfigForPostgres",!1)}function v(){return(0,i.W)("generic_lfc",!1)}function T(){return(0,i.W)("databricks.fe.ingestion.dataSourceTileRedesign",!1)}function R(){return(0,i.W)("cloudfiles_excel",!1)}function w(){return(0,i.W)("databricks.fe.ingestion.enableIngestionDrawerAssistant",!1)}function y(){return(0,i.W)("databricks.fe.ingestion.enableAddDataPageAssistant",!1)}function I(){return(0,i.W)("databricks.fe.ingestion.connector.community.githubRepo","https://github.com/databrickslabs/lakeflow-community-connectors")}function D(){return(0,i.W)("databricks.fe.ingestion.connector.zerobus_ingest.notebook.enabled",!1)}function L(){return(0,i.W)("databricks.fe.ingestion.connector.sharepoint_notebook.enabled",!1)&&(0,i.W)("sharepoint_connector",!1)}function A(){return(0,i.W)("databricks.fe.ingestion.connector.google_drive_notebook.enabled",!1)&&(0,i.W)("gdrive_connector",!1)}function M(){return(0,i.W)("databricks.fe.ingestion.enableJiraConfluenceSpacesCell",!1)}function $(){return(0,i.W)("databricks.fe.ingestion.enableForeignCatalogIngestion",!1)}function P(){return(0,i.W)("databricks.deltapipelines.allowCleanupResourcesOnDeletion",!1)}function F(){return(0,i.W)("databricks.fe.ingestion.enableDirectCdcInIngestionWizard",!1)}function N(){return(0,i.W)("databricks.fe.ingestion.enableAutomaticPrimaryKey",!1)}function x(){return(0,i.W)("databricks.fe.ingestion.enableEditPrimaryKeyInReport",!1)}function W(){return(0,i.W)("databricks.fe.ingestion.enableFullRefresh",!1)}function B(){return(0,i.W)("databricks.fe.ingestion.enableClassicComputeForQBC",!1)}function U(){return(0,i.W)("databricks.fe.ingestion.enableSharedConnectionModal",!1)}function O(){return(0,i.W)("databricks.usagePolicies.enableEntitlement",!1)}function z(){return(0,i.W)("private_network_gateway",!1)||(0,i.W)("databricks.lakehouseNetworkManager.privateNetworkGateway.enabledForE2Account",!1)}},840924:(e,a,t)=>{t.d(a,{v:()=>b});var n=t(483588),r=t(441535),i=t(141078);let o=(0,i.J1)`
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
`;function h(e,a,t,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){t(e);return}s.done?a(l):Promise.resolve(l).then(n,r)}function _(e,a,t,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){t(e);return}s.done?a(l):Promise.resolve(l).then(n,r)}function g(e){var a;return(a=function*({query:e,client:a,extractResponse:t,extractToken:n,extractContinueFetching:i,extractMetadata:o,variables:s,maxResults:l,maxPages:c}){let d=[],u=s.pageToken??null,p=0,m=null,h=(0,r.W)("databricks.fe.data.defaultLineagePaginationSize",100),_=s.pageSize??h,g=l??1e3,b=c&&c>0&&Number.isFinite(c)?c:1/0,f=!0,S=0;do try{let{data:r}=yield a.query({query:e,variables:{...s,pageSize:_,pageToken:u},fetchPolicy:"network-only"});if(!r)break;let l=t(r);l&&d.push(...l),u=n(r),p=d.length,f=!i||i(r),m=o?o(m,r):m,S++}catch(e){throw e}while(u&&p<g&&S<b&&f);return{response:d,pageToken:u,metadata:m}},function(){var e=this,t=arguments;return new Promise(function(n,r){var i=a.apply(e,t);function o(e){_(i,n,r,o,s,"next",e)}function s(e){_(i,n,r,o,s,"throw",e)}o(void 0)})}).apply(this,arguments)}let b={listSecurableBySecurable:(e,a,t)=>{let i=Math.max((0,r.W)("databricks.fe.discovery.pagesToFetchAllAssets",2),1),o=a.securableResponseFilter===n.osA.ALL_ASSETS_FLATTENED?i:void 0;return g({client:e,query:d,variables:a,extractResponse:e=>e.metadatalineageapiserverListSecurableLineagesBySecurable?.lineages??[],extractToken:e=>e.metadatalineageapiserverListSecurableLineagesBySecurable?.nextPageToken??null,maxResults:o?1/0:t,maxPages:o})},listEntityBySecurable:(e,a,t)=>g({client:e,query:u,variables:a,extractResponse:e=>e.metadatalineageapiserverListEntityLineagesBySecurable?.lineages??[],extractToken:e=>e.metadatalineageapiserverListEntityLineagesBySecurable?.nextPageToken??null,maxResults:t}),listColumnLineage:(e,a)=>(function(e){var a;return(a=function*({query:e,client:a,variables:t,extractResponse:n}){try{let{data:r}=yield a.query({query:e,variables:t,fetchPolicy:"network-only"});return n(r)}catch(e){throw e}},function(){var e=this,t=arguments;return new Promise(function(n,r){var i=a.apply(e,t);function o(e){h(i,n,r,o,s,"next",e)}function s(e){h(i,n,r,o,s,"throw",e)}o(void 0)})}).apply(this,arguments)})({client:e,query:m,variables:a,extractResponse:e=>e?.metadatalineageapiserverListColumnLineages?.lineages??[]}),listExternalLineage:(e,a,t)=>g({client:e,query:p,variables:a,extractResponse:e=>e?.metadatalineageapiserverListExternalLineageRelationships?.externalLineageRelationships??[],extractToken:e=>e.metadatalineageapiserverListExternalLineageRelationships?.nextPageToken??null,maxResults:t})}},841942:(e,a,t)=>{t.d(a,{Cg:()=>i,F6:()=>c,Nw:()=>l,_m:()=>s,my:()=>n,s0:()=>o,w4:()=>r});let n=6048e5,r=864e5,i=6e4,o=36e5,s=1e3,l=43200,c=1440},863980:(e,a,t)=>{t.d(a,{Ve:()=>p,Xh:()=>u});var n=t(610435),r=t(692738),i=t(92614),o=t(733845),s=t(747206),l=t(488655),c=t(648782);let d=r.createContext({isUnityCatalogActive:!1,showCleanRooms:()=>{},showCleanRoomCreate:()=>{},showCleanRoom:()=>{},showEditCleanRoomTable:()=>{},showEditCleanRoomNotebook:()=>{},showEditCleanRoomAnalysis:()=>{},showCleanRoomNotebook:()=>{},showCleanRoomCollaboratorTable:()=>{},showDataEntity:()=>{},table:void 0,notebook:void 0,jarAnalysis:void 0,cleanRoom:void 0});function u({children:e}){let a=(0,l.Zp)(),t=(0,o.O)(),{cleanRoom:p,notebook:m,jarAnalysis:h,tableFullName:_}=(0,c.g)(),g=(0,r.useMemo)(()=>({isUnityCatalogActive:t,cleanRoom:p,notebook:m,jarAnalysis:h,table:_,showCleanRooms:()=>a((0,i.Hv)()),showCleanRoomCreate:()=>a((0,i._w)()),showCleanRoom:e=>a((0,i.wF)(e)),showEditCleanRoomTable:e=>a((0,i.Kv)(e)),showEditCleanRoomNotebook:(e,t)=>a((0,i.Zl)(e,t)),showEditCleanRoomAnalysis:(e,t,n)=>a((0,i.Ms)(e,t,n)),showCleanRoomNotebook:(e,t,n,r)=>a((0,i.z0)(e,t,n,r)),showCleanRoomCollaboratorTable:(e,t)=>a((0,i.s)(e,t)),showDataEntity:e=>a((0,s.Hp)(e))}),[t,p,m,h,_,a]);return(0,n.Y)(d.Provider,{value:g,children:e})}function p(){return(0,r.useContext)(d)}},881859:(e,a,t)=>{t.d(a,{p:()=>h,t:()=>g});var n=t(610435),r=t(452137),i=t.n(r);t(692738);var o=t(339518),s=t(497895),l=t(382908),c=t(342411),d=t(649649),u=t(811362),p=t(819524),m=t(863980);let h=({cleanRoomComplianceStandards:e})=>{let a=(0,c.tz)();return(0,n.Y)(o.F,{componentId:"clean-room-detail-missing-csp-alert",type:"warning",closable:!1,message:a.formatMessage({id:"Qw7TzS",defaultMessage:"You have limited access to the clean room because your workspace is not compliant with the clean room's security settings."}),description:(0,n.Y)(_,{cleanRoomComplianceStandards:e})})},_=({cleanRoomComplianceStandards:e})=>{let{theme:a}=(0,s.wn)();return(0,n.FD)("div",{children:[e?.length&&(0,n.FD)(n.FK,{children:[(0,n.Y)(c.sA,{id:"58BxT7",defaultMessage:"To fully access the clean room, use a workspace that has the following set of compliance standards:"}),(0,n.Y)("ul",{className:"legacy-ul",children:e?.map(e=>(0,n.Y)("li",{children:e},e))})]}),(0,n.Y)("div",{style:{marginTop:a.spacing.md},children:(0,n.Y)(c.sA,{id:"1Zwaci",defaultMessage:"View our documentation to {link}",values:{link:(0,n.Y)(l.o.Link,{componentId:"clean-room-detail-missing-csp-alert-documentation-link",href:p.Ay.SECURITY_PROFILE,openInNewTab:!0,children:(0,n.Y)(c.sA,{id:"6IeDQ1",defaultMessage:"learn more"})})}})})]})},g=({children:e})=>{let{cleanRoom:a}=(0,m.Ve)();i()(void 0!==a,"Clean Room must be set");let t=(0,d.aj)(a);return t?.data?.access_restricted===u.eF.CSP_MISMATCH?(0,n.Y)(h,{cleanRoomComplianceStandards:t?.data?.remote_detailed_info?.compliance_security_profile?.compliance_standards}):(0,n.Y)(n.FK,{children:e})}},885364:(e,a,t)=>{t.d(a,{g:()=>o,u:()=>i});var n=t(987962),r=t.n(n);class i extends Error{__initiatorStack;errorCode;constructor(e,a,...t){super(a,...t),Error.captureStackTrace&&Error.captureStackTrace(this,i),this.name="SchemaLoadError",this.errorCode=e}isWaitingForEndpoint(){return 3===this.errorCode}}function o(e){return a=>{if(r()(a,"error")){let t=new i(a.error.code,`${a.error.message} (${e})`);return t.__initiatorStack=Error().stack,Promise.reject(t)}return a}}},919505:(e,a,t)=>{t.d(a,{A:()=>_});var n=t(514503),r=t.n(n),i=t(692738),o=t(200356),s=t(65061),l=t(960718),c=t(441535),d=t(141078),u=t(886100),p=t(22191),m=t(278983);let h=(0,d.J1)`
  subscription WarehouseEventSubscription($ignoreScaledEvent: Boolean) @component(name: "DBSQLX.WareHouseUI") {
    warehouseEvent(ignoreScaledEvent: $ignoreScaledEvent) {
      warehouseId
      eventName
      eventTimeMs
    }
  }
`;function _({skip:e,refetchLakehouseStates:a,setEnableSubscription:t}){let n=(0,i.useMemo)(()=>{let e=(0,c.W)("databricks.fe.redash.warehouses.event.debounceWait",1e3)+Math.floor(500*Math.random());return r()(a,e)},[a]),d=(0,i.useRef)(!1);return(0,s.sw)(h,{variables:{ignoreScaledEvent:!0},shouldResubscribe:!0,skip:e,onSubscriptionData({subscriptionData:e,client:r}){if(e?.data?.warehouseEvent){let{warehouseId:t}=e.data.warehouseEvent;"0"!==t||d.current?"0"===t?a():function(e,a,t){let{warehouseId:n,eventName:r}=a;(r||"undefined")in o.tXm&&e.cache.updateFragment({fragment:l.xz,id:e.cache.identify({__typename:"Lakehouse",id:n})},e=>{if(e)return{...e,state:r,health:null}})||t()}(r,e.data.warehouseEvent,n):d.current=!0}else u.iT.sev2(p.Es.RedashCore,"warehouseEvent.subscription.onSubscriptionData.unexpectedData",{subscriptionData:e}),t(!1)},onError(e){(function(e){if(e?.[0]){let a=e[0],t=a.code??"unknown",n=a instanceof CloseEvent?"CloseEvent":a.type??"unknown";(0,m.y)("clientsideEvent",{eventName:"warehouse_subscription_error",eventType:`warehouse_subscription_error_${n}`,errorCode:t})}else u.iT.sev2(p.Es.RedashCore,"warehouseEvent.subscription.onUnexpectedError",{rawError:e})})(e),t(!1)}})}},947105:(e,a,t)=>{t.d(a,{CU:()=>$,z6:()=>M});var n=t(657709),r=t(692738),i=t(667559),o=t(610001),s=t(825795),l=t(858893),c=t(278344),d=t(338557),u=t(692973),p=t(166904),m=t(675175),h=t(805074);let _="Radio",[g,b]=(0,s.A)(_),[f,S]=g(_),k=(0,r.forwardRef)((e,a)=>{let{__scopeRadio:t,name:s,checked:c=!1,required:d,disabled:u,value:p="on",onCheck:m,...h}=e,[_,g]=(0,r.useState)(null),b=(0,o.s)(a,e=>g(e)),S=(0,r.useRef)(!1),k=!_||!!_.closest("form");return(0,r.createElement)(f,{scope:t,checked:c,disabled:u},(0,r.createElement)(l.sG.button,(0,n.A)({type:"button",role:"radio","aria-checked":c,"data-state":v(c),"data-disabled":u?"":void 0,disabled:u,value:p},h,{ref:b,onClick:(0,i.m)(e.onClick,e=>{c||null==m||m(),k&&(S.current=e.isPropagationStopped(),S.current||e.stopPropagation())})})),k&&(0,r.createElement)(C,{control:_,bubbles:!S.current,name:s,value:p,checked:c,required:d,disabled:u,style:{transform:"translateX(-100%)"}}))}),E=(0,r.forwardRef)((e,a)=>{let{__scopeRadio:t,forceMount:i,...o}=e,s=S("RadioIndicator",t);return(0,r.createElement)(h.C,{present:i||s.checked},(0,r.createElement)(l.sG.span,(0,n.A)({"data-state":v(s.checked),"data-disabled":s.disabled?"":void 0},o,{ref:a})))}),C=e=>{let{control:a,checked:t,bubbles:i=!0,...o}=e,s=(0,r.useRef)(null),l=(0,m.Z)(t),c=(0,p.X)(a);return(0,r.useEffect)(()=>{let e=s.current,a=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(l!==t&&a){let n=new Event("click",{bubbles:i});a.call(e,t),e.dispatchEvent(n)}},[l,t,i]),(0,r.createElement)("input",(0,n.A)({type:"radio","aria-hidden":!0,defaultChecked:t},o,{tabIndex:-1,ref:s,style:{...e.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function v(e){return e?"checked":"unchecked"}let T=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],R="RadioGroup",[w,y]=(0,s.A)(R,[c.RG,b]),I=(0,c.RG)(),D=b(),[L,A]=w(R),M=(0,r.forwardRef)((e,a)=>{let{__scopeRadioGroup:t,name:i,defaultValue:o,value:s,required:p=!1,disabled:m=!1,orientation:h,dir:_,loop:g=!0,onValueChange:b,...f}=e,S=I(t),k=(0,u.jH)(_),[E,C]=(0,d.i)({prop:s,defaultProp:o,onChange:b});return(0,r.createElement)(L,{scope:t,name:i,required:p,disabled:m,value:E,onValueChange:C},(0,r.createElement)(c.bL,(0,n.A)({asChild:!0},S,{orientation:h,dir:k,loop:g}),(0,r.createElement)(l.sG.div,(0,n.A)({role:"radiogroup","aria-required":p,"aria-orientation":h,"data-disabled":m?"":void 0,dir:k},f,{ref:a}))))}),$=(0,r.forwardRef)((e,a)=>{let{__scopeRadioGroup:t,disabled:s,...l}=e,d=A("RadioGroupItem",t),u=d.disabled||s,p=I(t),m=D(t),h=(0,r.useRef)(null),_=(0,o.s)(a,h),g=d.value===l.value,b=(0,r.useRef)(!1);return(0,r.useEffect)(()=>{let e=e=>{T.includes(e.key)&&(b.current=!0)},a=()=>b.current=!1;return document.addEventListener("keydown",e),document.addEventListener("keyup",a),()=>{document.removeEventListener("keydown",e),document.removeEventListener("keyup",a)}},[]),(0,r.createElement)(c.q7,(0,n.A)({asChild:!0},p,{focusable:!u,active:g}),(0,r.createElement)(k,(0,n.A)({disabled:u,required:d.required,checked:g},m,l,{name:d.name,ref:_,onCheck:()=>d.onValueChange(l.value),onKeyDown:(0,i.m)(e=>{"Enter"===e.key&&e.preventDefault()}),onFocus:(0,i.m)(l.onFocus,()=>{var e;b.current&&(null==(e=h.current)||e.click())})})))})},960718:(e,a,t)=>{t.d(a,{MS:()=>u,SN:()=>p,vP:()=>d,xz:()=>m});var n=t(141078);let r=(0,n.J1)`
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
`,i=(0,n.J1)`
  fragment PermissionFragment on Permission {
    inheritedFromObject
    permissionLevel
    inherited
  }
`,o=(0,n.J1)`
  fragment AccessControlFragment on AccessControl {
    principalName {
      ...PrincipalNameFragment
    }
    allPermissions {
      ...PermissionFragment
    }
  }
  ${r}
  ${i}
`,s=(0,n.J1)`
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
`,l=(0,n.J1)`
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
`,c=(0,n.J1)`
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
`,d=(0,n.J1)`
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
`,u=(0,n.J1)`
  fragment LakehouseListFragment on Lakehouse {
    ...LakehouseBasicAttributesFragment
    permissions @include(if: $withPermissions)
  }
  ${l}
`,p=(0,n.J1)`
  fragment LakehouseForMutationFragment on Lakehouse {
    ...LakehouseBasicAttributesFragment
    ...LakehouseAdvancedAttributesFragment
    permissions @include(if: $withPermissions)
  }
  ${l}
  ${c}
`,m=(0,n.J1)`
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
`},962179:(e,a,t)=>{function n(e){return"databricks_internal"===e.type}function r(e){return"databricks_cluster"===e.type||"cluster"===e.type}function i(e){return"statements"in e}t.d(a,{PG:()=>n,n9:()=>i,y0:()=>r})},971496:(e,a,t)=>{t.d(a,{V:()=>g});var n=t(610435),r=t(3393),i=t(506245),o=t(497895),s=t(52430),l=t(342411),c=t(221884),d=t(863708),u=t(22191),p=t(726977),m=t(863980),h=t(151037);function _({children:e}){let{cleanRoom:a,notebook:t}=(0,m.Ve)(),r=a??t;return(0,i.n)((0,l.zR)({id:"7CJEIl",defaultMessage:"Clean Rooms {entity}"}),{entity:`${r?` - ${r}`:""}`}),(0,n.Y)("span",{css:{display:"flex",flexDirection:"column",height:"100%"},children:e})}function g({children:e,enablePanelBoundary:a=!0}){let{theme:t}=(0,o.wn)();return(0,n.Y)(c.d$,{children:(0,n.Y)(s.f,{css:{paddingTop:t.spacing.sm,paddingBottom:t.spacing.sm,height:"100%",boxSizing:"border-box"},children:(0,n.Y)(d.JR,{esComponent:u.Es.CleanRoom,errorBoundaryId:p.s.CleanRoomPage,fallbackRender:({error:e})=>(0,n.Y)(r.Ay,{error:e}),enabled:a,children:(0,n.Y)(m.Xh,{children:(0,n.Y)(_,{children:(0,n.Y)(h.nb,{children:e})})})})})})}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/75762.d085607e56.chunk.js.map