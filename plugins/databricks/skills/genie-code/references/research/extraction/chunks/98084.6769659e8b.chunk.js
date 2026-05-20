"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[98084],{476616:(e,t,a)=>{a.d(t,{IO:()=>o,PS:()=>i,vi:()=>n});var r=a(141078);let n=(0,r.J1)`
  fragment ApiErrorFragment on ApiError {
    code
    message
    helpUrl
    traceId
  }
`,o=(0,r.J1)`
  fragment PartnerhubConnectionPayload on PartnerhubConnectionPayload {
    cloud
    destinationLocation
    hostname
    httpPath
    port
    servicePrincipalId
    region
    userInfo {
      email
      displayName
    }
  }
`,i=(0,r.J1)`
  fragment partnerHubRequirementFragment on PartnerhubRequirement {
    servicePrincipal {
      name
    }
    destLocation {
      location
    }
    sqlEndpoint {
      existingId
      newEndpoint {
        confs {
          confPairs {
            key
            value
          }
        }
        config {
          name
          size
          clusterSize
          minNumClusters
          maxNumClusters
          autoStopMins
          instanceProfileArn
          spotInstancePolicy
          enablePhoton
          enableServerlessCompute
          enableDatabricksCompute
          disableUc
          warehouseType
          tags {
            customTags {
              key
              value
            }
          }
        }
      }
      supportedWarehouseSkus
    }
    cluster {
      name
    }
    catalog {
      name
    }
    datasourceConnector {
      name
    }
  }
`},654172:(e,t,a)=>{a.d(t,{R:()=>u,g:()=>p});var r=a(610435),n=a(407374),o=a(497895),i=a(752634),s=a(210556),c=a(964133),l=a(731547),d=a(823423);function u({label:e,onCopy:t,value:a,extra:o,required:i,tooltipContent:s}){if(!a)return null;return(0,r.Y)(p,{label:e,extra:o,required:i,tooltipContent:s,children:(0,r.Y)(l.a,{componentId:"partner-connect-form-copyable-input-copy-button",copyText:a,onCopy:t,stretch:!0,children:(0,r.Y)(n.p,{componentId:"partner-connect-form-copyable-input",value:a,readOnly:!0})})})}function p({label:e,children:t,extra:a,style:n,required:l,tooltipContent:u}){let{theme:b}=(0,o.wn)();return(0,r.FD)(i.f,{css:{marginBottom:b.spacing.lg},children:[(0,r.FD)(s.f,{span:10,css:{display:"flex",alignItems:"center",...n},children:[(0,r.Y)(c.D.Label,{css:{marginBottom:0},required:l,children:e}),u&&(0,r.Y)(d.I,{title:u})]}),(0,r.Y)(s.f,{span:14,css:{paddingLeft:"0 !important"},children:t}),(0,r.Y)(s.f,{span:14,offset:10,children:a})]})}},698084:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var r=a(610435),n=a(856794),o=a(766151),i=a(703961),s=a(519487),c=a(846127),l=a(813342),d=a.n(l),u=a(692738),p=a(200356),b=a(127647),h=a(382908),m=a(497895),g=a(764236),f=a(339518),k=a(79128),y=a(810152),v=a(74438),E=a(407374),I=a(342411),S=a(441535),P=a(971384),C=a(654172),A=a(930155),F=a(65061),Y=a(476616),w=a(141078);let T=(0,w.J1)`
  query partnerhubGetFabricConnections($input: PartnerhubGetFabricConnectionsRequestInput!)
  @component(name: "PartnerEco.PartnerConnect") {
    partnerhubGetFabricConnections(input: $input) {
      apiError {
        ...ApiErrorFragment
      }
      connections {
        id
        displayName
        workspaceUrl
        connectivityType
      }
    }
  }
  ${Y.vi}
`,M=(0,w.J1)`
  query partnerhubGetFabricWorkspaces($input: PartnerhubGetFabricWorkspacesRequestInput!)
  @component(name: "PartnerEco.PartnerConnect") {
    partnerhubGetFabricWorkspaces(input: $input) {
      apiError {
        ...ApiErrorFragment
      }
      workspaces {
        id
        displayName
        type
      }
    }
  }
  ${Y.vi}
`,L=(0,w.J1)`
  query partnerhubGetOneLakePublishStatus($input: PartnerhubGetOneLakePublishStatusRequestInput!)
  @component(name: "PartnerEco.PartnerConnect") {
    partnerhubGetOneLakePublishStatus(input: $input) {
      apiError {
        ...ApiErrorFragment
      }
      status
      mirroredItemId
      displayName
      fabricItemUrl
      statusMessage
      fabricWorkspaceId
    }
  }
  ${Y.vi}
`,D=(0,w.J1)`
  mutation publishCatalogToOneLake($input: PartnerhubPublishCatalogToOneLakeRequestInput!)
  @component(name: "PartnerEco.PartnerConnect") {
    partnerhubPublishCatalogToOneLake(input: $input) {
      apiError {
        ...ApiErrorFragment
      }
      mirroredItemId
      displayName
      fabricItemUrl
      fabricWorkspaceId
      status
      statusMessage
      operationId
    }
  }
  ${Y.vi}
`;function N(e,t,a,r,n,o,i){try{var s=e[o](i),c=s.value}catch(e){a(e);return}s.done?t(c):Promise.resolve(c).then(r,n)}function G(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var o=e.apply(t,a);function i(e){N(o,r,n,i,s,"next",e)}function s(e){N(o,r,n,i,s,"throw",e)}i(void 0)})}}let{Paragraph:O}=h.o,U=["https://api.fabric.microsoft.com/Item.ReadWrite.All","https://api.fabric.microsoft.com/Workspace.Read.All","https://api.fabric.microsoft.com/Connection.ReadWrite.All"],W=({catalogName:e,onClose:t})=>{let[a,n]=(0,u.useState)(void 0),{instance:l,accounts:d,inProgress:p}=(0,c.dk)(),[b,y]=(0,u.useState)(void 0),[v,E]=(0,u.useState)(void 0),[S,P]=(0,u.useState)(!1),[F,Y]=(0,u.useState)(void 0),w=(0,u.useRef)(!1),[T,M]=(0,u.useState)(1),[L,D]=(0,u.useState)(void 0),[N,W]=(0,u.useState)({id:void 0,displayName:void 0}),[_,z]=(0,u.useState)(e),q=(0,I.tz)(),{theme:R}=(0,m.wn)(),B=(0,u.useCallback)(()=>G(function*(){if(p===o.T$.None&&d.length>0&&!w.current){w.current=!0;let e={account:d[0],scopes:U};l.acquireTokenSilent(e).then(e=>{n(e.accessToken),y(e.expiresOn?.getTime())}).catch(t=>G(function*(){if(t instanceof i.CB||t instanceof s.j){let t=yield l.acquireTokenPopup(e);n(t.accessToken),y(t.expiresOn?.getTime());return}E(t)})()).catch(e=>G(function*(){E(e)})())}})(),[l,d,p]),J=(0,u.useCallback)(()=>G(function*(){w.current=!1,B()})(),[B]);(0,u.useEffect)(()=>{B()},[T,B]),(0,u.useEffect)(()=>{if(b){let e=setTimeout(()=>{w.current=!1,M(e=>e+1)},Math.max(b-Date.now()-1e4,1e4));return()=>{clearTimeout(e)}}},[b,T]);let j=(0,u.useCallback)(()=>{l.loginPopup({scopes:U}).catch(e=>{E(e)})},[l]),H=(()=>{if(v)return v.message||q.formatMessage({id:"T+NhiW",defaultMessage:"An error occurred. Please try again."})})(),K=(0,I.zR)({id:"uh21EQ",defaultMessage:"Successfully published catalog to OneLake."});return(0,r.FD)(r.FK,{children:[(0,r.FD)("div",{css:{paddingTop:R.spacing.lg,paddingBottom:R.spacing.lg},children:[(0,r.Y)(O,{children:(0,r.Y)(I.sA,{id:"2Y1Mmb",defaultMessage:"Publish your Unity Catalog catalog to Microsoft Fabric. This creates a mirrored Azure Databricks Catalog item in your target Fabric workspace."})}),(0,r.Y)(g.h,{size:"sm"}),(0,r.Y)(C.g,{label:(0,r.Y)(I.sA,{id:"h0QgVn",defaultMessage:"Catalog"}),tooltipContent:(0,r.Y)(I.sA,{id:"El/PjP",defaultMessage:"The Unity Catalog catalog to publish to OneLake."}),children:(0,r.Y)(h.o.Text,{children:e})}),(0,r.Y)(c.e7,{children:(0,r.Y)($,{aadToken:a,selectedConnection:L,setSelectedConnection:D,selectedWorkspace:N,setSelectedWorkspace:W,displayName:_,setDisplayName:z,onError:E,refreshToken:J,disabled:S})}),H&&(0,r.Y)(f.F,{componentId:"publish-to-onelake-error-alert",css:{marginBottom:R.spacing.md},type:"error",closable:!1,message:H}),H&&(e=>{if(!e)return!1;return["Access denied","401","403","PERMISSION_DENIED","Unauthorized","Forbidden"].some(t=>e.includes(t))})(H)&&(0,r.Y)(f.F,{componentId:"publish-to-onelake-permissions-info-alert",css:{marginBottom:R.spacing.md},type:"info",closable:!1,message:(0,r.Y)(I.sA,{id:"aTZBkG",defaultMessage:"Please verify:{br}{br}<b>Databricks:</b> SELECT on schemas/tables, USE_CATALOG, USE_SCHEMA{br}<b>Fabric:</b> Workspace Contributor role, connection creation permissions{br}{br}Please also verify with your admin that you have capacity assigned to the workspace.",values:{br:(0,r.Y)("br",{}),b:e=>(0,r.Y)(h.o.Text,{bold:!0,children:e})}})}),S&&(0,r.Y)(f.F,{componentId:"publish-to-onelake-success-alert",css:{marginBottom:R.spacing.md},type:"info",closable:!1,message:q.formatMessage(K)})]}),(0,r.FD)(A.O,{children:[(0,r.Y)(k.$n,{componentId:"publish-to-onelake-close",onClick:t,children:(0,r.Y)(I.sA,{id:"he7dmR",defaultMessage:"Cancel"})}),(0,r.Y)(c.e7,{children:(0,r.Y)(x,{aadToken:a,catalogName:e,connectionId:L?.id,workspace:N,displayName:_,onPublishSuccess:P,onFabricItemUrl:Y,onError:E,disabled:S,fabricItemUrl:F})}),(0,r.Y)(c.hj,{children:(0,r.Y)(k.$n,{componentId:"publish-to-onelake-connect-msft-id",type:"primary",loading:p!==o.T$.None,onClick:j,children:(0,r.Y)(I.sA,{id:"8bwUjG",defaultMessage:"Connect to Microsoft Entra ID"})})})]})]})};function $({aadToken:e,selectedConnection:t,setSelectedConnection:a,selectedWorkspace:n,setSelectedWorkspace:o,displayName:i,setDisplayName:s,onError:c,refreshToken:l,disabled:u}){let{connections:p,loading:b}=function(e={}){let t=(0,F.IT)(T,e);return{connections:t?.data?.partnerhubGetFabricConnections?.connections??[],loading:t.loading,error:t.error??t?.data?.partnerhubGetFabricConnections?.apiError}}({skip:d()(e),variables:{input:{aadToken:e}},onCompleted:e=>G(function*(){if(e?.partnerhubGetFabricConnections?.apiError?.message)c(Error(e?.partnerhubGetFabricConnections?.apiError?.message)),e?.partnerhubGetFabricConnections?.apiError?.message?.includes("AAD token expired")&&(yield l());else{c(void 0);let r=e?.partnerhubGetFabricConnections?.connections;r&&1===r.length&&!t&&a(r[0])}})(),onError:e=>G(function*(){c(e)})()}),{workspaces:m,loading:g}=function(e={}){let t=(0,F.IT)(M,e);return{workspaces:t?.data?.partnerhubGetFabricWorkspaces?.workspaces??[],loading:t.loading,error:t.error??t?.data?.partnerhubGetFabricWorkspaces?.apiError}}({skip:d()(e),variables:{input:{aadToken:e}},onCompleted:e=>G(function*(){e?.partnerhubGetFabricWorkspaces?.apiError?.message?(c(Error(e?.partnerhubGetFabricWorkspaces?.apiError?.message)),e?.partnerhubGetFabricWorkspaces?.apiError?.message?.includes("AAD token expired")&&(yield l())):c(void 0)})(),onError:e=>G(function*(){c(e)})()}),k=window.location.hostname,S=p.filter(({id:e,workspaceUrl:t})=>!d()(e)&&(!t||k.includes(t.replace(/^https?:\/\//,"").split("/")[0])||t.includes(k))).map(({displayName:e,id:t,workspaceUrl:a})=>({label:`${e}${a?` (${a})`:""}`,value:t})),P=m.filter(({id:e})=>!d()(e)).map(({displayName:e,id:t})=>({label:e??"",value:t??""})),A=!b&&0===p.length;return(0,r.FD)(r.FK,{children:[(0,r.Y)(C.g,{label:(0,r.Y)(I.sA,{id:"3f8W26",defaultMessage:"Databricks connection"}),tooltipContent:(0,r.Y)(I.sA,{id:"BvtMjU",defaultMessage:"Select an existing Fabric Azure Databricks workspace connection. For details on how to create a connection, visit <docLink>documentation</docLink>.",values:{docLink:e=>(0,r.Y)(h.o.Link,{componentId:"publish-to-onelake-connection-tooltip-doc-link",href:"https://learn.microsoft.com/en-us/fabric/mirroring/azure-databricks-tutorial#create-a-mirrored-database-from-azure-databricks",openInNewTab:!0,children:e})}}),required:!0,children:b?(0,r.Y)(y.I,{label:(0,r.Y)(I.sA,{id:"uc9wNi",defaultMessage:"Loading connections"})}):A?(0,r.Y)(f.F,{componentId:"publish-to-onelake-no-connections-alert",type:"warning",closable:!1,message:(0,r.Y)(I.sA,{id:"9cG4FP",defaultMessage:"No Azure Databricks connections found. <docLink>Create an Azure Databricks workspace connection</docLink> in Microsoft Fabric first.",values:{docLink:e=>(0,r.Y)(h.o.Link,{componentId:"publish-to-onelake-no-connections-doc-link",href:"https://learn.microsoft.com/en-us/fabric/database/mirrored-database/azure-databricks-tutorial#create-a-connection-to-the-azure-databricks-workspace",openInNewTab:!0,children:e})}})}):(0,r.Y)(v._v,{"data-testid":"publish-to-onelake-connections",style:{width:"100%"},placeholder:(0,r.Y)(I.sA,{id:"vEVuPJ",defaultMessage:"Select a Databricks connection"}),dangerouslySetAntdProps:{showSearch:!0,dropdownStyle:{pointerEvents:"all"}},optionFilterProp:"label",options:S,value:t?.id,onChange:e=>{let t=p.find(t=>t.id===e);t&&a(t)},disabled:u})}),(0,r.Y)(C.g,{label:(0,r.Y)(I.sA,{id:"g/ji5G",defaultMessage:"Fabric workspace"}),tooltipContent:(0,r.Y)(I.sA,{id:"23/EJ/",defaultMessage:"Select the Microsoft Fabric workspace where the mirrored catalog will be created."}),required:!0,children:g?(0,r.Y)(y.I,{label:(0,r.Y)(I.sA,{id:"UY9z/L",defaultMessage:"Loading Fabric workspaces"})}):(0,r.Y)(v._v,{"data-testid":"publish-to-onelake-workspaces",style:{width:"100%"},placeholder:(0,r.Y)(I.sA,{id:"23QWbZ",defaultMessage:"Select a Fabric workspace"}),dangerouslySetAntdProps:{showSearch:!0,dropdownStyle:{pointerEvents:"all"}},optionFilterProp:"label",options:P,value:n.id,onChange:e=>{let t=m.find(t=>t.id===e);t&&o({id:t.id,displayName:t.displayName})},disabled:u})}),(0,r.Y)(C.g,{label:(0,r.Y)(I.sA,{id:"AOp/1D",defaultMessage:"Display name"}),tooltipContent:(0,r.Y)(I.sA,{id:"EnTiy2",defaultMessage:"The name that will be shown for this mirrored catalog in Microsoft Fabric."}),required:!0,children:(0,r.Y)(E.p,{componentId:"publish-to-onelake-display-name",value:i,onChange:e=>s(e.target.value),placeholder:i,disabled:u})})]})}function x({aadToken:e,catalogName:t,connectionId:a,workspace:n,displayName:o,onPublishSuccess:i,onFabricItemUrl:s,onError:l,disabled:h,fabricItemUrl:m}){let[g,f]=(0,u.useState)(void 0),[y,v]=(0,u.useState)(!1),E=(0,u.useRef)(void 0),S=(0,I.tz)(),{accounts:C}=(0,c.dk)(),{data:A,error:Y,stopPolling:w}=function(e={}){let t=(0,F.IT)(L,e);return{data:t?.data?.partnerhubGetOneLakePublishStatus,loading:t.loading,error:t.error??t?.data?.partnerhubGetOneLakePublishStatus?.apiError,startPolling:t.startPolling,stopPolling:t.stopPolling}}({skip:!g||!y,variables:{input:{operationId:g??"",fabricWorkspaceId:n.id??"",aadToken:e,displayName:o}},pollInterval:5e3*!!y});(0,u.useEffect)(()=>{if(!Y||!y)return;let e="object"==typeof Y&&"message"in Y?Y.message:String(Y);w(),v(!1),l(Error(e))},[Y,y,w,l]),(0,u.useEffect)(()=>{if(!A||!y)return;let e=A.status;e===p.AD1.ONE_LAKE_PUBLISH_STATUS_SUCCESS?(w(),v(!1),i(!0),s(A.fabricItemUrl??void 0),l(void 0)):e===p.AD1.ONE_LAKE_PUBLISH_STATUS_FAILED?(w(),v(!1),l(Error(A.statusMessage||S.formatMessage({id:"JF4kfI",defaultMessage:"Failed to publish catalog to OneLake."})))):E.current&&Date.now()-E.current>3e5&&(w(),v(!1),l(Error(S.formatMessage({id:"e+KPXW",defaultMessage:"Publishing timed out. Please check the Fabric workspace for the mirrored catalog status."}))))},[A,y,w,i,s,l,S]);let[T,{loading:M}]=((e={})=>(0,F.n_)(D,e))(),N=M||y;return(0,r.Y)(k.$n,{componentId:"publish-to-onelake-publish-button",type:"primary",onClick:m?()=>{if(m){let e=C[0]?.tenantId,t=e?`${m}${m.includes("?")?"&":"?"}ctid=${e}`:m;(0,P.Lz)(t,{openInNewTab:!0})}}:()=>G(function*(){if(!a)return void l(Error("Please select a Databricks connection."));try{l(void 0);let r=yield T({variables:{input:{aadToken:e,fabricWorkspaceId:n.id,catalogName:t,fabricConnectionId:a,displayName:o,autoSync:!0}}}),c=r?.data?.partnerhubPublishCatalogToOneLake;if(c?.apiError)return void l(Error(c.apiError.message||S.formatMessage({id:"h6FuIZ",defaultMessage:"Failed to create mirrored catalog in Fabric. Please verify the Fabric workspace has an active capacity assigned and you have the required permissions."})));let d=c?.status;if(d===p.AD1.ONE_LAKE_PUBLISH_STATUS_SUCCESS)i(!0),s(c?.fabricItemUrl??void 0);else if(d===p.AD1.ONE_LAKE_PUBLISH_STATUS_PENDING){let e=c?.operationId;if(!e)return void l(Error("Server returned pending status without an operation ID."));f(e),E.current=Date.now(),v(!0)}else l(Error(c?.statusMessage||"Failed to publish catalog to OneLake."))}catch(e){l(e)}})(),loading:N,disabled:!m&&(d()(a)||d()(n.id)||!o||h),children:m?(0,r.Y)(b.S,{children:(0,r.Y)(I.sA,{id:"Fmjxon",defaultMessage:"Open in Fabric"})}):y?(0,r.Y)(I.sA,{id:"94mRAS",defaultMessage:"Creating mirrored catalog..."}):(0,r.Y)(I.sA,{id:"fF7mEH",defaultMessage:"Publish"})})}let _=function(e){let t=(0,S.W)("databricks.fe.partnerconnect.publishToOneLakeAppId",""),a=(0,S.W)("databricks.fe.partnerconnect.publishToOneLakeFabricAuthority",""),o={auth:{clientId:t,...a?{authority:a}:{},redirectUri:`${window.location.protocol}//${window.location.hostname}${window.location.port?":"+window.location.port:""}`}},i=new n.v(o);return(0,r.Y)(c.r7,{instance:i,children:(0,r.Y)(W,{...e})})}},823423:(e,t,a)=>{a.d(t,{I:()=>c});var r=a(610435),n=a(497895),o=a(802582),i=a(201828),s=a(342411);function c({title:e,placement:t,className:a}){let{theme:l}=(0,n.wn)(),d=(0,s.tz)();return(0,r.Y)(o.p,{placement:t??"top",title:e,dangerouslySetAntdProps:{overlayStyle:{maxWidth:"300px"}},children:(0,r.Y)("span",{children:(0,r.Y)(i.A,{css:{fontSize:l.typography.fontSizeMd,marginRight:l.spacing.xs,marginLeft:l.spacing.xs,color:l.colors.textSecondary},"aria-hidden":"false",className:a,"aria-label":d.formatMessage({id:"Ib8QDe",defaultMessage:"info"})})})})}},930155:(e,t,a)=>{a.d(t,{O:()=>o});var r=a(610435),n=a(497895);let o=({children:e})=>{let{theme:t}=(0,n.wn)();return(0,r.Y)("div",{css:{paddingTop:t.spacing.sm,paddingBottom:t.spacing.sm,display:"flex",borderTopColor:t.isDarkMode?t.colors.border:t.colors.grey200,borderTopStyle:"solid",borderTopWidth:"1px",justifyContent:"flex-end",flexDirection:"row-reverse",columnGap:t.spacing.sm,marginLeft:-t.spacing.lg,paddingLeft:t.spacing.lg,paddingRight:t.spacing.lg,width:`calc(100% + ${2*t.spacing.lg}px)`,flexWrap:"wrap-reverse"},children:e})}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/98084.6769659e8b.chunk.js.map