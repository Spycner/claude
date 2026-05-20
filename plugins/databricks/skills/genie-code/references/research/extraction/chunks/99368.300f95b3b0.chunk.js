"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[20997,43378,99368],{27297:(e,s,t)=>{t.d(s,{D:()=>M,F:()=>E});var a=t(610435),r=t(497895),n=t(339518),o=t(861403),i=t(595338),l=t(692738),d=t(876726),c=t(405706),u=t(79128),m=t(342411),g=t(488655),p=t(759721),f=t(42797),h=t(136012);function _({dataExplorerTrackingObject:e,objectName:s,objectType:t}){let n=(0,m.tz)(),{theme:o}=(0,r.wn)(),i=(0,h.QQ)(),E=(0,g.Zp)();return(0,l.useEffect)(()=>{i(`visit_${e}_access_restricted`)},[i,e]),(0,a.Y)("div",{css:{marginTop:o.spacing.lg},children:(0,a.Y)(d.S,{image:(0,a.Y)(c.A,{}),title:n.formatMessage({id:"hm1JEa",defaultMessage:"Sorry, you can't access this resource"}),description:n.formatMessage({id:"LJ3boh",defaultMessage:"Request permissions below. You can also ask an administrator for permissions. <link>Learn more</link>"},{link:e=>null}),button:(0,a.FD)("div",{css:{display:"flex",flexDirection:"column",gap:o.spacing.md},children:[(0,a.Y)(p.c,{isReadOnly:!0,objectName:s,objectType:t,componentId:e,hasBrowsePrivilege:!1,accessRequestOrigin:f.Rj.NoPermissionDetailsView}),(0,a.Y)(u.$n,{onClick:()=>E("/explore/data"),componentId:`catalog_explorer_return_home_button_${e}`,children:(0,a.Y)(m.sA,{id:"2o/+g9",defaultMessage:"Return to home"})})]})})})}function E(e){if((0,i.F0)(e))return e.response?.status===403&&e.response.data?.message?.includes("User does not have");return!1}function M({error:e,children:s,objectType:t,isUnityCatalog:i,objectName:l,dataExplorerTrackingObject:d,customErrors:c=[],isRequestAccessEnabled:u=!1}){let{theme:m}=(0,r.wn)(),g=(0,o.b)(e);for(let[s,t]of c)if(s(g,e))return(0,a.Y)(a.FK,{children:t});if(E(e)&&i&&u)return(0,a.Y)(_,{dataExplorerTrackingObject:d,objectName:l,objectType:t});if(e?.graphQLErrors&&e?.graphQLErrors.length>0){let s=e.graphQLErrors.map(e=>e.extensions?.apiError?.message||e.message).filter((e,s,t)=>t.indexOf(e)===s),t=1===s.length?s[0]:s.map((e,s)=>`${s+1}. ${e}`).join("\n");if(t?.trim())return(0,a.Y)(n.F,{componentId:"discovery.data_explorer.entity_details_error_wrapper_graphql_error",message:t,type:"error",css:{margin:`${m.spacing.md}px 0px`,whiteSpace:"pre-wrap"}})}if(g)return(0,a.Y)(n.F,{componentId:"codegen_redash_app_src_app_pages_data_entitydetailserrorwrapper.tsx_70",message:g,type:"error",css:{margin:`${m.spacing.md}px 0px`}});return(0,a.Y)(a.FK,{children:s})}},161711:(e,s,t)=>{t.d(s,{O:()=>r});var a,r=((a={}).INTERNAL_ERROR="INTERNAL_ERROR",a.BAD_REQUEST="BAD_REQUEST",a.PERMISSION_DENIED="PERMISSION_DENIED",a.UNAUTHENTICATED="UNAUTHENTICATED",a.NOT_FOUND="NOT_FOUND",a.ALREADY_EXISTS="ALREADY_EXISTS",a.RESOURCE_CONFLICT="RESOURCE_CONFLICT",a)},235403:(e,s,t)=>{t.d(s,{T:()=>M});var a=t(610435);t(692738);var r=t(382908),n=t(497895),o=t(742557),i=t(68925),l=t(664093),d=t(752634),c=t(12414),u=t(339518),m=t(342411),g=t(489681),p=t(787473),f=t(67656),h=t(670757);let{Text:_,Paragraph:E}=r.o;function M({validateCredentialResponse:e,validateFileEventsResponse:s,isMetastoreCreate:t=!1}){let b=(0,m.tz)(),{theme:v}=(0,n.wn)(),{alertMessages:y,prettyOpName:S,prettyFileEventsOpName:A,getLocationType:k}=function({isMetastoreCreate:e=!1}){let s=(0,m.tz)(),{theme:t}=(0,n.wn)(),o=s.formatMessage({id:"5WAmAw",defaultMessage:"Metastores require a directory path."}),i=s.formatMessage({id:"AmK7Y2",defaultMessage:"All Permissions Confirmed"});return{alertMessages:{singleFile:{success:()=>(0,a.Y)(u.F,{componentId:"codegen_web-shared_src_metastore_components_externallocationvalidationresultpanel_usemessages.tsx_23",type:"warning",closable:!1,message:s.formatMessage({id:"siBrO6",defaultMessage:"Single Read-only File"}),description:s.formatMessage({id:"SEnkwB",defaultMessage:"This External Location is a single file, not a directory. The associated Storage Credential grants permission to read its content."})}),failure:()=>(0,a.Y)(u.F,{componentId:"codegen_web-shared_src_metastore_components_externallocationvalidationresultpanel_usemessages.tsx_40",type:"error",closable:!1,message:s.formatMessage({id:"rW+DUC",defaultMessage:"Missing Permissions"}),description:s.formatMessage({id:"8xFKRZ",defaultMessage:"This External Location is a single file. The associated Storage Credential does not grant permission to read from the file."})}),isSingleFile:()=>(0,a.Y)(u.F,{componentId:"codegen_web-shared_src_metastore_components_externallocationvalidationresultpanel_usemessages.tsx_57",type:"error",closable:!1,message:s.formatMessage({id:"agPjFY",defaultMessage:"Invalid location"}),description:s.formatMessage({id:"e5Bhid",defaultMessage:"This path appears to be a single file. Metastores require a directory path."})})},directory:{success:()=>(0,a.Y)(u.F,{componentId:"codegen_web-shared_src_metastore_components_externallocationvalidationresultpanel_usemessages.tsx_73",type:"info",closable:!1,message:i,description:s.formatMessage({id:"r4ykog",defaultMessage:"The associated Storage Credential grants permission to perform all necessary operations."})}),successButFileEventFail:()=>(0,a.Y)(u.F,{componentId:"codegen_web-shared_src_metastore_components_externallocationvalidationresultpanel_usemessages.tsx_success_but_file_event_fail",type:"warning",closable:!1,message:s.formatMessage({id:"P/ZD87",defaultMessage:"All Permissions Except File Events Confirmed"}),description:s.formatMessage({id:"1SdfVu",defaultMessage:"This storage credential has been successfully validated for all operations except file events. If you are confident that the file events permissions are correctly configured, you may proceed to force-create the location."})}),skipped:()=>(0,a.Y)(u.F,{componentId:"codegen_web-shared_src_metastore_components_externallocationvalidationresultpanel_usemessages.tsx_85",type:"warning",closable:!1,message:s.formatMessage({id:"Bms0xk",defaultMessage:"All Permissions Skipped"}),description:s.formatMessage({id:"8e6SGL",defaultMessage:"The permissions check for associated Storage Credential are all skipped because Path does not exist."})}),readonly:()=>(0,a.Y)(u.F,{componentId:"codegen_web-shared_src_metastore_components_externallocationvalidationresultpanel_usemessages.tsx_102",type:"warning",closable:!1,message:s.formatMessage({id:"Iu+/gQ",defaultMessage:"Read-only Permissions"}),description:s.formatMessage({id:"G8R3NY",defaultMessage:"The associated Storage Credential grants permission to read content, but not to perform all necessary write operations."})}),locationEmpty:()=>(0,a.Y)(u.F,{componentId:"codegen_web-shared_src_metastore_components_externallocationvalidationresultpanel_usemessages.tsx_119",type:"warning",closable:!1,message:s.formatMessage({id:"5o46BS",defaultMessage:"Unable to verify all permissions"}),description:s.formatMessage({id:"tql6hv",defaultMessage:"This may be due to the location being empty. If you think this is the case, you can go ahead and use this external location, otherwise check the storage credential."})}),pathNotExists:()=>(0,a.Y)(u.F,{componentId:"codegen_web-shared_src_metastore_components_externallocationvalidationresultpanel_usemessages.tsx_136",type:"warning",closable:!1,message:s.formatMessage({id:"FHeIQF",defaultMessage:"Path does not exist"}),description:s.formatMessage({id:"zloRGD",defaultMessage:"Although all permissions have been confirmed, the specified path does not exist."})}),hierarchicalNamespaceDisabled:()=>(0,a.Y)(u.F,{componentId:"codegen_web-shared_src_metastore_components_externallocationvalidationresultpanel_usemessages.tsx_152",type:"error",closable:!1,message:s.formatMessage({id:"FCp9pF",defaultMessage:"Hierarchical Namespace (HNS) not enabled"}),description:s.formatMessage({id:"0J8Jxw",defaultMessage:"Azure storage account does not have hierarchical namespace (HNS) enabled."})}),failure:()=>(0,a.Y)(u.F,{componentId:"codegen_web-shared_src_metastore_components_externallocationvalidationresultpanel_usemessages.tsx_168",type:"error",closable:!1,message:s.formatMessage({id:"wlKnaJ",defaultMessage:"Missing Permissions"}),description:s.formatMessage({id:"tO3jKr",defaultMessage:"The associated Storage Credential does not grant permission to perform all necessary operations."})}),readMessageFailed:e=>(0,a.Y)(u.F,{componentId:"codegen_web-shared_src_metastore_components_externallocationvalidationresultpanel_usemessages.tsx_185",type:"error",closable:!1,message:s.formatMessage({id:"kYWikF",defaultMessage:"File Events Read Failed"}),description:e}),fileEventsFailed:e=>{let n=f.R.getDbGuideUrl(g.A.EXTERNAL_LOCATION_FILE_EVENTS_DOCS);return(0,a.Y)(u.F,{componentId:"codegen_web-shared_src_metastore_components_externallocationvalidationresultpanel_usemessages.tsx_file_events_failed",type:"warning",closable:!1,message:s.formatMessage({id:"1FwVXl",defaultMessage:"File Events Permissions Not Verified"}),description:(0,a.FD)(a.FK,{children:[(0,a.Y)("div",{children:s.formatMessage({id:"9mK+F3",defaultMessage:"Your storage credential can read and write to this location, but file events permissions could not be verified. File events are optional but recommended; they improve ingestion performance and reduce cloud storage listing costs."})}),e&&(0,a.FD)("div",{css:{marginTop:t.spacing.sm,whiteSpace:"pre-line"},children:[(0,a.Y)(r.o.Text,{bold:!0,children:s.formatMessage({id:"NZHmzD",defaultMessage:"Details:"})})," ",e]}),n&&(0,a.FD)("div",{css:{marginTop:t.spacing.sm},children:[(0,a.Y)(r.o.Text,{bold:!0,children:s.formatMessage({id:"WNs2x9",defaultMessage:"To fix:"})})," ",(0,a.Y)(r.o.Link,{href:n,openInNewTab:!0,componentId:"file_events_failed_docs_link",children:s.formatMessage({id:"GGVTbK",defaultMessage:"Learn how to configure file events permissions."})})]}),(0,a.FD)("div",{css:{marginTop:t.spacing.sm},children:[(0,a.Y)(r.o.Text,{bold:!0,children:s.formatMessage({id:"KeJieC",defaultMessage:"To skip for now:"})})," ",s.formatMessage({id:"SOIG48",defaultMessage:"Force create the location. Ingestion will fall back to directory listing, which is slower and may increase storage listing costs."})]})]})})}},storageCredential:{success:()=>(0,a.Y)(u.F,{componentId:"codegen_web-shared_src_metastore_components_externallocationvalidationresultpanel_usemessages.tsx_199",type:"info",closable:!1,message:i,description:s.formatMessage({id:"ZUQYzL",defaultMessage:"The storage credential grants permission to perform all necessary operations."})}),failure:e=>(0,a.Y)(u.F,{componentId:"codegen_web-shared_src_metastore_components_externallocationvalidationresultpanel_usemessages.tsx_210",type:"error",closable:!1,message:s.formatMessage({id:"Bebctg",defaultMessage:"Missing Permissions"}),description:e})},unknown:{failure:()=>(0,a.Y)(u.F,{componentId:"codegen_web-shared_src_metastore_components_externallocationvalidationresultpanel_usemessages.tsx_224",type:"error",closable:!1,message:s.formatMessage({id:"qPdcV/",defaultMessage:"Could not access location"}),description:s.formatMessage({id:"ZfT+gH",defaultMessage:"This path doesn't exist or we couldn't access it with the credential provided.{metastoreRequireDirectory}"},{metastoreRequireDirectory:e?` ${o}`:""})}),permissionDenied:()=>(0,a.Y)(u.F,{componentId:"codegen_web-shared_src_metastore_components_externallocationvalidationresultpanel_usemessages.tsx_246",type:"error",closable:!1,message:s.formatMessage({id:"JPu1nK",defaultMessage:"Permission Denied"}),description:s.formatMessage({id:"VzU3hc",defaultMessage:"Please double check that the path and the storage credential are valid."})})}},prettyOpName:e=>{switch(e){case h.kh.READ:return s.formatMessage({id:"OD7xZv",defaultMessage:"Read"});case h.kh.WRITE:return s.formatMessage({id:"Sb2WTm",defaultMessage:"Write"});case h.kh.LIST:return s.formatMessage({id:"1zt6h5",defaultMessage:"List"});case h.kh.DELETE:return s.formatMessage({id:"S5gZdu",defaultMessage:"Delete"});case h.kh.PATH_EXISTS:return s.formatMessage({id:"JMr+cs",defaultMessage:"Path Exists"});case h.kh.HIERARCHICAL_NAMESPACE_ENABLED:return s.formatMessage({id:"JU5hTd",defaultMessage:"Hierarchical Namespace Enabled"});case h.kh.READ_MESSAGE:return s.formatMessage({id:"cO1dT2",defaultMessage:"File Events Read"});case h.MI.ASSUME_ROLE:return s.formatMessage({id:"N5gpnq",defaultMessage:"Assume Role"});case h.MI.EXTERNAL_ID_CONDITION:return s.formatMessage({id:"hnLvLu",defaultMessage:"External ID Condition"});case h.MI.SELF_ASSUME_ROLE:return s.formatMessage({id:"6nyprO",defaultMessage:"Self Assume Role"})}},prettyFileEventsOpName:e=>{switch(e){case h.TU.PROVISION:return s.formatMessage({id:"5M4P9Y",defaultMessage:"File Events Resource Provision"});case h.TU.READ_QUEUE:return s.formatMessage({id:"UJmCjD",defaultMessage:"Read File Event Queue"});case h.TU.PURGE_QUEUE:return s.formatMessage({id:"Jx58Jd",defaultMessage:"Purge File Event Queue"});case h.TU.TEARDOWN:return s.formatMessage({id:"j2pAH2",defaultMessage:"File Events Resource Teardown"})}},getLocationType:function(e){let t;return t=!0===e?s.formatMessage({id:"/t8yoR",defaultMessage:"Directory"}):!1===e?s.formatMessage({id:"5Jw/gp",defaultMessage:"File"}):s.formatMessage({id:"yXZb/h",defaultMessage:"Unknown"}),s.formatMessage({id:"bu+YOo",defaultMessage:"<b>Location Type: </b>{locationType}"},{locationType:t})}}}({isMetastoreCreate:t}),F=b.formatMessage({id:"r4SgGD",defaultMessage:"Testing ..."}),I=(e,s,t)=>(0,a.FD)(a.FK,{children:[(0,a.Y)(_,{css:{color:`${e} !important`},children:t}),"\xa0",(0,a.Y)(_,{css:{color:e,minWidth:"4em"},children:s})]}),w=e=>{switch(e){case h.yX.PASS:return I(v.colors.textValidationSuccess,b.formatMessage({id:"+B99E1",defaultMessage:"Success"}),(0,a.Y)(o.A,{}));case h.yX.FAIL:return I(v.colors.textValidationDanger,b.formatMessage({id:"/Jw82e",defaultMessage:"Failed"}),(0,a.Y)(i.A,{}));case h.yX.SKIP:return I(v.colors.textValidationWarning,b.formatMessage({id:"8dkROZ",defaultMessage:"Skipped"}),(0,a.Y)(l.A,{}))}},T=e.results?.some(e=>e.configuration_operation),D=e.isLoading||s?.isLoading,R=e?.isSuccess||s?.isSuccess;return(0,a.FD)(a.FK,{children:[D&&(0,a.Y)(d.f,{style:{justifyContent:"center",padding:v.spacing.lg},children:(0,a.FD)("div",{style:{verticalAlign:"middle"},children:[(0,a.Y)(c.y,{size:"large"}),(0,a.Y)(_,{style:{marginLeft:v.spacing.lg},children:F})]})},"spinner"),R&&(0,a.FD)("div",{children:[!T&&(0,a.Y)(E,{children:(0,a.Y)(_,{children:k(e.isDir)})},"isDir"),(0,a.FD)(E,{css:{paddingLeft:v.spacing.lg},children:[e.isSuccess&&e.results.map(e=>{let s=e.operation||e.queue_operation||e.configuration_operation;return s?(0,a.FD)(d.f,{children:[w(e.result),(0,a.FD)(_,{bold:!0,children:["\xa0-\xa0",S(s)]})]},s):null}),s?.isSuccess&&s.results.map(e=>e.operation&&e.result&&e.result!==h.yX.SKIP?(0,a.FD)(d.f,{children:[w(e.result),(0,a.FD)(_,{bold:!0,children:["\xa0-\xa0",A(e.operation)]})]},`file-events-${e.operation}`):null)]},"ops"),R&&((e,a)=>{let r=new Map(e.results.map(e=>[e.operation||e.queue_operation||e.configuration_operation,{result:e.result,message:e.message}])),n=a?.results?new Map(a.results.map(e=>[e.operation,{result:e.result,message:e.message}])):new Map,o=r.get(h.MI.ASSUME_ROLE)&&r.get(h.MI.SELF_ASSUME_ROLE)&&r.get(h.MI.EXTERNAL_ID_CONDITION),i=r.get(h.kh.READ)?.result===h.yX.FAIL;if(!0===e.isDir){let t=r.get(h.kh.READ)?.result===h.yX.PASS&&r.get(h.kh.LIST)?.result===h.yX.PASS,o=r.get(h.kh.WRITE)?.result===h.yX.PASS&&r.get(h.kh.DELETE)?.result===h.yX.PASS,i=n.get(h.TU.PROVISION)?.result===h.yX.PASS&&n.get(h.TU.READ_QUEUE)?.result===h.yX.PASS&&n.get(h.TU.PURGE_QUEUE)?.result===h.yX.PASS&&n.get(h.TU.TEARDOWN)?.result===h.yX.PASS,l=n.get(h.TU.PROVISION)?.result===h.yX.SKIP&&n.get(h.TU.READ_QUEUE)?.result===h.yX.PASS&&n.get(h.TU.PURGE_QUEUE)?.result===h.yX.PASS&&n.get(h.TU.TEARDOWN)?.result===h.yX.SKIP,d=e.results.every(({result:e})=>e===h.yX.SKIP),c=r.get(h.kh.PATH_EXISTS)?.result===h.yX.FAIL,u=r.get(h.kh.READ)?.result===h.yX.SKIP,m=r.get(h.kh.HIERARCHICAL_NAMESPACE_ENABLED)&&r.get(h.kh.HIERARCHICAL_NAMESPACE_ENABLED)?.result===h.yX.FAIL,g=r.get(h.kh.READ_MESSAGE)&&r.get(h.kh.READ_MESSAGE)?.result===h.yX.FAIL,p=n.size>0;if(m)return y.directory.hierarchicalNamespaceDisabled();if(g)return y.directory.readMessageFailed(r.get(h.kh.READ_MESSAGE)?.message||"");if(t&&o&&c)return y.directory.pathNotExists();else if(t&&o&&!c){if(p&&!i&&!l){let e=a?.results.find(e=>e.result===h.yX.FAIL),s=e?.message||"";return y.directory.fileEventsFailed(s)}if(s?.isError)return y.directory.successButFileEventFail();return y.directory.success()}else if(t)return y.directory.readonly();else if(d)return y.directory.skipped();else if(u)return y.directory.locationEmpty();else return y.directory.failure()}if(!1===e.isDir){if(t)return y.singleFile.isSingleFile();return r.get(h.kh.READ)?.result===h.yX.PASS?y.singleFile.success():y.singleFile.failure()}if(i&&r.get(h.kh.READ)?.message?.startsWith("PERMISSION_DENIED"))return y.unknown.permissionDenied();{if(!o)return y.unknown.failure();let e=[r.get(h.MI.ASSUME_ROLE),r.get(h.MI.SELF_ASSUME_ROLE),r.get(h.MI.EXTERNAL_ID_CONDITION)].find(e=>e?.result===h.yX.FAIL);if(e)return y.storageCredential.failure(e.message||"");return y.storageCredential.success()}})(e,s)]}),e.isError&&(0,a.Y)(u.F,{componentId:"codegen_web-shared_src_metastore_components_externallocationvalidationresultpanel_externallocationvalidationresultpanel.tsx_195",message:e.error?.message||b.formatMessage({id:"Txn1fo",defaultMessage:"An error occurred while validating."}),type:"error",closable:!1}),!e.isError&&s?.isError&&(0,a.Y)(u.F,{componentId:"file-events-validation-error-alert",message:(0,a.FD)(a.FK,{children:[s?.error?.message?b.formatMessage({id:"/b6dYb",defaultMessage:"File events permission check encountered an error: {errorMessage}. This does not affect your ability to read or write data; file events are an optimization to make cloud storage ingestion faster and cheaper. You can force create the location now and troubleshoot file events later."},{errorMessage:s.error.message}):b.formatMessage({id:"vwIpv/",defaultMessage:"File events permission check encountered an unexpected error. This does not affect your ability to read or write data; file events are an optimization to make cloud storage ingestion faster and cheaper. You can force create the location now and troubleshoot file events later."}),(0,a.Y)(p.o,{href:g.A.EXTERNAL_LOCATION_FILE_EVENTS_DOCS})]}),type:"error",closable:!1,css:{marginTop:v.spacing.lg}})]})}},290766:(e,s,t)=>{t.d(s,{T:()=>l});var a=t(65061),r=t(960718),n=t(141078);let o=(0,n.J1)`
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
`,i=(0,n.J1)`
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
`,l=(e,s)=>(0,a.IT)(s?i:o,{fetchPolicy:"cache-and-network",...e})},343378:(e,s,t)=>{t.d(s,{M:()=>o});var a=t(610435);t(692738);var r=t(12414),n=t(205048);function o({description:e}){return(0,a.FD)("div",{"data-testid":"PageBlockingSpinner",css:{display:"flex",alignItems:"center",justifyContent:"center",margin:"30px"},children:[(0,a.Y)(n.R,{loading:!0,description:e}),(0,a.Y)(r.y,{})]})}},349126:(e,s,t)=>{t.d(s,{F:()=>E});var a=t(610435),r=t(692738),n=t(79570),o=t(687828),i=t(910414),l=t(342411),d=t(686560),c=t(641760),u=t(936743),m=t(49586),g=t(42797),p=t(708396),f=t(816803),h=t(434288),_=t(73416);function E({eventTrackingObject:e,isReadOnly:s,objectName:t,objectType:M,securableKind:b,accessRequestOrigin:v}){let y=(0,l.tz)(),S=(0,d.d)("userId",-1),{user:A,isLoading:k}=(0,m.Qm)({id:S?.toString(),skip:S<0||!(0,c.zt)()}),{showRequestAccessModal:F,RequestAccessModal:I}=(0,g.kJ)({isReadOnly:s,objectName:t,objectType:M,securableKind:b,initialUser:A,accessRequestOrigin:v,formFieldsToShow:Object.values(f.V)}),{isEnabled:w,isLoading:T}=(0,p.R)({fullName:t,type:(0,_.K)(M),skip:!(0,c.zt)()}),D=(0,r.useCallback)(()=>{F({principal:A?(0,u.l)(A):null})},[F,A]);return{DropdownMenuItem:(0,a.Y)(n.m,{componentId:"uc_request_access_dropdownMenuItem.tooltip",content:!1===w?y.formatMessage(h.l.requestAccessDisabledTooltip):void 0,side:"left",children:(0,a.Y)("div",{children:(0,a.FD)(o.Item,{onClick:D,componentId:`uc_request_access_dropdownMenuItem.${e}.${v}`,disabled:k||T||!1===w,children:[(0,a.Y)(o.IconWrapper,{children:(0,a.Y)(i.A,{})}),y.formatMessage(h.l.requestPermissions)]})})}),Modal:I}}},376338:(e,s,t)=>{t.d(s,{O:()=>o});var a=t(692738),r=t(686560),n=t(150190);function o(){let[e,s]=(0,a.useState)(),t=(0,n.H)({cacheTime:1/0}),o=(0,r.d)("isAdmin",!1);return(0,a.useEffect)(()=>{if(t.isFetched){let e=[];t.data?.is_metastore_admin&&e.push("METASTORE_ADMIN"),o&&e.push("WORKSPACE_ADMIN"),s(e.length?e.join("_AND_"):"NON_ADMIN")}},[t.isFetched,t.data?.is_metastore_admin,o]),e}},395646:(e,s,t)=>{t.d(s,{K:()=>l});var a=t(610435),r=t(692738),n=t(694762),o=t(79128),i=t(342411);let l=({title:e,request:s,mutation:t,content:l})=>{let d=(0,i.tz)(),[c,u]=(0,r.useState)(!1),m=()=>{t.reset(),u(!1)},g=d.formatMessage({id:"wKPIt3",defaultMessage:"Done"}),p=d.formatMessage({id:"N1Tvxa",defaultMessage:"Cancel"});return{showSingleRequestModal:()=>{void 0!==s&&(u(!0),t.mutate(s))},SingleRequestModal:(0,a.Y)(n.aF,{componentId:"codegen_redash_app_src_app_pages_data_hooks_usesinglerequestinformationmodal.tsx_56",visible:c,title:e,onCancel:m,footer:[t.isLoading&&(0,a.Y)(o.$n,{componentId:"codegen_redash_app_src_app_pages_data_hooks_usesinglerequestinformationmodal.tsx_64",onClick:m,children:p},"cancel"),(0,a.Y)(o.$n,{componentId:"codegen_redash_app_src_app_pages_data_hooks_usesinglerequestinformationmodal.tsx_68",type:"primary",disabled:!(t.isSuccess||t.isError),onClick:m,children:g},"save")],children:l})}}},471452:(e,s,t)=>{t.d(s,{z:()=>a});function a(e){return{isLoading:e.isLoading,isSuccess:e.isSuccess,isError:e.isError,error:e.error?.response?.data,isDir:e.data?.isDir,results:e.data?.results||[]}}},566825:(e,s,t)=>{t.d(s,{Ay:()=>M,Ns:()=>h,ZC:()=>E,r:()=>_});var a=t(987962),r=t.n(a),n=t(623576),o=t.n(n),i=t(189219),l=t.n(i),d=t(923305),c=t(651139),u=t(949313),m=t(670943),g=t(924636),p=t(984741),f=t(885364);function h(e){return r()(e,"job.id")?(0,u.Ec)(e.job.id,1e3):e}let _=["get-data-sources"],E=(0,p.to)("sql/images/db-logos"),M={query:()=>(0,m.Ym)()?c.pY.get(g.bI).then(e=>e?.data_sources||[]):c.pY.get((0,d.Hi)("api/data_sources")),get:({id:e})=>c.pY.get((0,d.Hi)(`api/data_sources/${e}`)),types:()=>c.pY.get((0,d.Hi)("api/data_sources/types")),create:e=>c.pY.post((0,d.Hi)("api/data_sources"),e),save:e=>c.pY.post((0,d.Hi)(`api/data_sources/${e.id}`),e),test:e=>c.pY.post((0,d.Hi)(`api/data_sources/${e.id}/test`)),delete:({id:e})=>c.pY.delete((0,d.Hi)(`api/data_sources/${e}`)),fetchSchema:(e,s=!1)=>{let t={};return s&&(t.refresh=!0),c.pY.get((0,d.Hi)(`api/data_sources/${e.id}/schema`),{params:t}).then(e=>{if(r()(e,"job"))return(0,u.Ec)(e.job.id).catch(s=>1===s.code?[]:Promise.reject(Error(e.job.error)));return r()(e,"schema")?e.schema:Promise.reject()}).then(e=>o()(e,e=>{var s;return{...e,columns:(s=e.columns,o()(s,e=>l()(e)?e:{name:e})),type:e.type}}))},fetchColumns:(e,s,t)=>c.pY.get((0,d.Hi)(`api/data_sources/${e}/${s}/columns/${t}`)).then(h).then((0,f.g)("DataSource.fetchColumns"))}},572382:(e,s,t)=>{t.d(s,{CU:()=>i,U1:()=>l,iC:()=>o,kc:()=>r,sT:()=>n});var a=t(32121);function r(e){return e?.edges.map(e=>e.node)}function n({networkStatus:e}){return e===a.pT.fetchMore}function o({networkStatus:e}){return e===a.pT.refetch}function i({networkStatus:e}){return e===a.pT.poll}function l({__typename:e,...s}){return s}},660488:(e,s,t)=>{t.d(s,{A:()=>a});let a=t(815645).A},662874:(e,s,t)=>{t.d(s,{DK:()=>c,Go:()=>d,WL:()=>i,t2:()=>l});var a=t(610435),r=t(692738),n=t(745444),o=t(962179);let i=r.createContext(()=>void 0);function l({children:e}){let{lakehouseMap:s}=(0,n.j)(),t=(0,r.useCallback)(e=>s[e],[s]);return(0,a.Y)(i.Provider,{value:t,children:e})}function d(e){let s=(0,r.useContext)(i);return(0,r.useMemo)(()=>e.map(e=>{if(!(0,o.PG)(e))return e;let t=s(e.endpoint_id??"");return{...e,lakehouse:t}}),[e,s])}function c(e){let s=(0,r.useContext)(i);return(0,r.useMemo)(()=>{if(e){let t=s(e.endpoint_id??"");return{...e,lakehouse:t}}},[e,s])}},683003:(e,s,t)=>{t.d(s,{B:()=>i});var a=t(610435),r=t(545251),n=t(497895),o=t(174541);let i=({children:e,...s})=>{let{theme:t}=(0,n.wn)(),{isInsideDialogCombobox:i}=(0,r.w)();if(!i)throw Error("`DialogComboboxFooter` must be used within `DialogCombobox`");return(0,a.Y)("div",{...s,css:(0,o.UA)(t),children:e})}},733052:(e,s,t)=>{t.d(s,{A:()=>n});var a=t(610435);t(692738);var r=t(802582);function n({primary:e=!1,srSilent:s=!1,children:t,placement:o,title:i,dataTestId:l,arrowPointAtCenter:d,...c}){return(0,a.Y)(r.p,{silenceScreenReader:s,useAsLabel:e,placement:o,title:i,dataTestId:l,arrowPointAtCenter:d,...c,children:t})}},745444:(e,s,t)=>{t.d(s,{j:()=>c});var a=t(298280),r=t.n(a),n=t(692738),o=t(919505),i=t(290766),l=t(572382),d=t(441535);function c({enableLiveUpdates:e=!0,fetchPolicy:s="cache-and-network",useMinimalQuery:t=!1,isEnabled:a=!0}={}){let u=(0,d.W)("databricks.fe.redash.listPollingInterval",5e3),[m,g]=(0,n.useState)(()=>(0,d.W)("databricks.fe.redash.enableWarehouseEventSubscription",!1)),p=e&&m&&!t,{data:f,loading:h,refetch:_}=(0,i.T)({pollInterval:e&&!p?u:0,fetchPolicy:s,nextFetchPolicy:p?"cache-first":void 0,skip:!a},t);return(0,o.A)({skip:!p||!a,refetchLakehouseStates:_,setEnableSubscription:g}),{loaded:!h,lakehouseMap:(0,n.useMemo)(()=>r()((0,l.kc)(f?.lakehouses),e=>e?.id),[f?.lakehouses])}}},844284:(e,s,t)=>{t.d(s,{n:()=>l});var a=t(610435),r=t(687828),n=t(161926),o=t(342411),i=t(839977);function l({eventTrackingObject:e,objectName:s,objectType:t}){let{setRequestAccessDestinationModal:d,showSetRequestAccessDestinationModal:c}=(0,i.l)({objectName:s,objectType:t});return{DropdownMenuItem:(0,a.FD)(r.Item,{onClick:c,componentId:`manage_request_access_destinations_dropdownMenuItem_${e}`,children:[(0,a.Y)(r.IconWrapper,{children:(0,a.Y)(n.A,{})}),(0,a.Y)(o.sA,{id:"C6PGaR",defaultMessage:"Manage access request destinations"})]}),Modal:d}}},885364:(e,s,t)=>{t.d(s,{g:()=>o,u:()=>n});var a=t(987962),r=t.n(a);class n extends Error{__initiatorStack;errorCode;constructor(e,s,...t){super(s,...t),Error.captureStackTrace&&Error.captureStackTrace(this,n),this.name="SchemaLoadError",this.errorCode=e}isWaitingForEndpoint(){return 3===this.errorCode}}function o(e){return s=>{if(r()(s,"error")){let t=new n(s.error.code,`${s.error.message} (${e})`);return t.__initiatorStack=Error().stack,Promise.reject(t)}return s}}},919505:(e,s,t)=>{t.d(s,{A:()=>f});var a=t(514503),r=t.n(a),n=t(692738),o=t(200356),i=t(65061),l=t(960718),d=t(441535),c=t(141078),u=t(886100),m=t(22191),g=t(278983);let p=(0,c.J1)`
  subscription WarehouseEventSubscription($ignoreScaledEvent: Boolean) @component(name: "DBSQLX.WareHouseUI") {
    warehouseEvent(ignoreScaledEvent: $ignoreScaledEvent) {
      warehouseId
      eventName
      eventTimeMs
    }
  }
`;function f({skip:e,refetchLakehouseStates:s,setEnableSubscription:t}){let a=(0,n.useMemo)(()=>{let e=(0,d.W)("databricks.fe.redash.warehouses.event.debounceWait",1e3)+Math.floor(500*Math.random());return r()(s,e)},[s]),c=(0,n.useRef)(!1);return(0,i.sw)(p,{variables:{ignoreScaledEvent:!0},shouldResubscribe:!0,skip:e,onSubscriptionData({subscriptionData:e,client:r}){if(e?.data?.warehouseEvent){let{warehouseId:t}=e.data.warehouseEvent;"0"!==t||c.current?"0"===t?s():function(e,s,t){let{warehouseId:a,eventName:r}=s;(r||"undefined")in o.tXm&&e.cache.updateFragment({fragment:l.xz,id:e.cache.identify({__typename:"Lakehouse",id:a})},e=>{if(e)return{...e,state:r,health:null}})||t()}(r,e.data.warehouseEvent,a):c.current=!0}else u.iT.sev2(m.Es.RedashCore,"warehouseEvent.subscription.onSubscriptionData.unexpectedData",{subscriptionData:e}),t(!1)},onError(e){(function(e){if(e?.[0]){let s=e[0],t=s.code??"unknown",a=s instanceof CloseEvent?"CloseEvent":s.type??"unknown";(0,g.y)("clientsideEvent",{eventName:"warehouse_subscription_error",eventType:`warehouse_subscription_error_${a}`,errorCode:t})}else u.iT.sev2(m.Es.RedashCore,"warehouseEvent.subscription.onUnexpectedError",{rawError:e})})(e),t(!1)}})}},945161:(e,s,t)=>{t.d(s,{K:()=>n});var a=t(610435),r=t(861403);function n({error:e}){let s=(0,r.b)(e);return(0,a.Y)(a.FK,{children:s})}},947105:(e,s,t)=>{t.d(s,{CU:()=>C,z6:()=>L});var a=t(657709),r=t(692738),n=t(667559),o=t(610001),i=t(825795),l=t(858893),d=t(278344),c=t(338557),u=t(692973),m=t(166904),g=t(675175),p=t(805074);let f="Radio",[h,_]=(0,i.A)(f),[E,M]=h(f),b=(0,r.forwardRef)((e,s)=>{let{__scopeRadio:t,name:i,checked:d=!1,required:c,disabled:u,value:m="on",onCheck:g,...p}=e,[f,h]=(0,r.useState)(null),_=(0,o.s)(s,e=>h(e)),M=(0,r.useRef)(!1),b=!f||!!f.closest("form");return(0,r.createElement)(E,{scope:t,checked:d,disabled:u},(0,r.createElement)(l.sG.button,(0,a.A)({type:"button",role:"radio","aria-checked":d,"data-state":S(d),"data-disabled":u?"":void 0,disabled:u,value:m},p,{ref:_,onClick:(0,n.m)(e.onClick,e=>{d||null==g||g(),b&&(M.current=e.isPropagationStopped(),M.current||e.stopPropagation())})})),b&&(0,r.createElement)(y,{control:f,bubbles:!M.current,name:i,value:m,checked:d,required:c,disabled:u,style:{transform:"translateX(-100%)"}}))}),v=(0,r.forwardRef)((e,s)=>{let{__scopeRadio:t,forceMount:n,...o}=e,i=M("RadioIndicator",t);return(0,r.createElement)(p.C,{present:n||i.checked},(0,r.createElement)(l.sG.span,(0,a.A)({"data-state":S(i.checked),"data-disabled":i.disabled?"":void 0},o,{ref:s})))}),y=e=>{let{control:s,checked:t,bubbles:n=!0,...o}=e,i=(0,r.useRef)(null),l=(0,g.Z)(t),d=(0,m.X)(s);return(0,r.useEffect)(()=>{let e=i.current,s=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(l!==t&&s){let a=new Event("click",{bubbles:n});s.call(e,t),e.dispatchEvent(a)}},[l,t,n]),(0,r.createElement)("input",(0,a.A)({type:"radio","aria-hidden":!0,defaultChecked:t},o,{tabIndex:-1,ref:i,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function S(e){return e?"checked":"unchecked"}let A=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],k="RadioGroup",[F,I]=(0,i.A)(k,[d.RG,_]),w=(0,d.RG)(),T=_(),[D,R]=F(k),L=(0,r.forwardRef)((e,s)=>{let{__scopeRadioGroup:t,name:n,defaultValue:o,value:i,required:m=!1,disabled:g=!1,orientation:p,dir:f,loop:h=!0,onValueChange:_,...E}=e,M=w(t),b=(0,u.jH)(f),[v,y]=(0,c.i)({prop:i,defaultProp:o,onChange:_});return(0,r.createElement)(D,{scope:t,name:n,required:m,disabled:g,value:v,onValueChange:y},(0,r.createElement)(d.bL,(0,a.A)({asChild:!0},M,{orientation:p,dir:b,loop:h}),(0,r.createElement)(l.sG.div,(0,a.A)({role:"radiogroup","aria-required":m,"aria-orientation":p,"data-disabled":g?"":void 0,dir:b},E,{ref:s}))))}),C=(0,r.forwardRef)((e,s)=>{let{__scopeRadioGroup:t,disabled:i,...l}=e,c=R("RadioGroupItem",t),u=c.disabled||i,m=w(t),g=T(t),p=(0,r.useRef)(null),f=(0,o.s)(s,p),h=c.value===l.value,_=(0,r.useRef)(!1);return(0,r.useEffect)(()=>{let e=e=>{A.includes(e.key)&&(_.current=!0)},s=()=>_.current=!1;return document.addEventListener("keydown",e),document.addEventListener("keyup",s),()=>{document.removeEventListener("keydown",e),document.removeEventListener("keyup",s)}},[]),(0,r.createElement)(d.q7,(0,a.A)({asChild:!0},m,{focusable:!u,active:h}),(0,r.createElement)(b,(0,a.A)({disabled:u,required:c.required,checked:h},g,l,{name:c.name,ref:f,onCheck:()=>c.onValueChange(l.value),onKeyDown:(0,n.m)(e=>{"Enter"===e.key&&e.preventDefault()}),onFocus:(0,n.m)(l.onFocus,()=>{var e;_.current&&(null==(e=p.current)||e.click())})})))})},960718:(e,s,t)=>{t.d(s,{MS:()=>u,SN:()=>m,vP:()=>c,xz:()=>g});var a=t(141078);let r=(0,a.J1)`
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
`,n=(0,a.J1)`
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
  ${r}
  ${n}
`,i=(0,a.J1)`
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
`,d=(0,a.J1)`
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
`,c=(0,a.J1)`
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
  ${d}
  ${i}
`,u=(0,a.J1)`
  fragment LakehouseListFragment on Lakehouse {
    ...LakehouseBasicAttributesFragment
    permissions @include(if: $withPermissions)
  }
  ${l}
`,m=(0,a.J1)`
  fragment LakehouseForMutationFragment on Lakehouse {
    ...LakehouseBasicAttributesFragment
    ...LakehouseAdvancedAttributesFragment
    permissions @include(if: $withPermissions)
  }
  ${l}
  ${d}
`,g=(0,a.J1)`
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
`},962179:(e,s,t)=>{function a(e){return"databricks_internal"===e.type}function r(e){return"databricks_cluster"===e.type||"cluster"===e.type}function n(e){return"statements"in e}t.d(s,{PG:()=>a,n9:()=>n,y0:()=>r})}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/99368.300f95b3b0.chunk.js.map