"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[10620,63983],{100885:(e,t,n)=>{n.r(t),n.d(t,{RouteComponent:()=>i.UpdateAppIntegration});var i=n(267138)},123061:(e,t,n)=>{n.d(t,{$:()=>r});var i=n(141078),a=n(655841);let r=e=>(0,i.n_)(a.fq,e)},267138:(e,t,n)=>{n.r(t),n.d(t,{RouteComponent:()=>S,UpdateAppIntegration:()=>G});var i=n(610435),a=n(692738),r=n(141078),o=n(282937),s=n.n(o),p=n(332098),c=n(281448),l=n(414181),u=n(696569);let d=({servicePrincipalId:e,clientId:t})=>{let{accountId:n,oauthConfig:r}=(0,p.C6)().getLoadedSessionData(),o=(0,a.useMemo)(()=>({secretsEndpointPath:`/accounts/${n}/servicePrincipals/${e}/credentials/secrets`}),[n,e]);return(0,i.Y)(l.$G.Provider,{value:o,children:(0,i.Y)(u.H,{accountId:n,oauthConfig:r,clientId:t,servicePrincipalId:e})})};var m=n(147508),g=n(445097),I=n(693875),y=n(339518),f=n(441535),$=n(648782),A=n(342411),P=n(224507);let G=()=>{var e;let{goToRoute:t}=(0,I.JZ)(),{integrationId:n}=(0,$.g)(),{accountId:o}=(0,p.C6)().getLoadedSessionData(),l={title:(0,A.tz)().formatMessage({id:"xHXOP5",defaultMessage:"Edit Connection"})},u=(0,f.W)("databricks.fe.auth.customAppIntegrationSPSecretsManagement",!1),G=(e=n||"undefined",(0,r.IT)(s(),{variables:{accountId:o,integrationId:e},...void 0})),{showModal:S,DeleteAppIntegrationModal:k}=(0,g.F)(),v=(0,a.useMemo)(()=>{let e=G.data?.customAppIntegration;return e?{integrationId:e.integrationId,clientId:e.clientId,name:e.name,scopes:e.scopes,confidential:e.confidential,redirectUris:e.redirectUrls.join("\n"),accessTokenTtlInMinutes:e.tokenAccessPolicy?.accessTokenTtlInMinutes||P.yH,refreshTokenTtlInMinutes:e.tokenAccessPolicy?.refreshTokenTtlInMinutes||P.Zg,enableSingleUseRefreshTokens:e.tokenAccessPolicy?.enableSingleUseRefreshTokens??!1,absoluteSessionLifetimeInMinutes:e.tokenAccessPolicy?.absoluteSessionLifetimeInMinutes??P.lI,principalId:e.principalId}:void 0},[G.data?.customAppIntegration]),C=(0,a.useCallback)(()=>{t()},[t]),M=(0,a.useCallback)(()=>{n&&v?.name&&S({integrationId:n,name:v.name,isPublished:!1})},[n,v?.name,S]);return(0,i.FD)(m.H,{title:l.title,children:[G.error&&(0,i.Y)(y.F,{componentId:"codegen_accounts_ui_app_src_accounts-console-ui_pages_settings_appintegrations_updateappintegration_updateappintegration.tsx_64",message:G.error.message,type:"error"}),(0,i.Y)(c.M,{type:"update",initialValue:v,onCancel:C,onUpdated:C,onRemove:M,loading:G.loading}),u&&v?.confidential&&v?.clientId&&v?.principalId&&(0,i.Y)(d,{servicePrincipalId:String(v.principalId),clientId:v.clientId}),(0,i.Y)(k,{componentId:"codegen_accounts_ui_app_src_accounts-console-ui_pages_settings_appintegrations_updateappintegration_updateappintegration.tsx_81",onDelete:C})]})},S=G},566512:(e,t,n)=>{n.d(t,{o:()=>u,v:()=>m});var i=n(610435),a=n(718194),r=n(692738),o=n(429608),s=n(497895),p=n(227195),c=n(658345),l=n(40894);function u(){let[e,t]=a.A.useNotification(),{getPrefixedClassName:n,theme:u}=(0,s.wn)(),{getPopupContainer:m}=(0,p.G)(),g=n("notification"),I=(0,r.useCallback)(t=>{let n={getContainer:m,...d,...t,style:{zIndex:u.options.zIndexBase+30,boxShadow:u.general.shadowLow}},a=`${g}-notice-icon-${n.type}`;n.icon=(0,i.Y)(l.z,{severity:n.type,className:a}),n.closeIcon=(0,i.Y)(c.A,{"aria-hidden":"false",css:{cursor:"pointer",fontSize:u.general.iconSize},"aria-label":n.closeLabel||"Close notification"}),e.open(n)},[e,m,u,g]);return[(0,r.useMemo)(()=>({open:I,close:e=>a.A.close(e),error:e=>I({...e,type:"error"}),warning:e=>I({...e,type:"warning"}),info:e=>I({...e,type:"info"}),success:e=>I({...e,type:"success"})}),[I]),(0,i.Y)(o.wC,{children:t})]}let d={type:"info",duration:3},m=e=>(0,r.forwardRef)((t,n)=>{let[a,r]=u();return(0,i.Y)(e,{ref:n,notificationAPI:a,notificationContextHolder:r,...t})})},655841:(e,t,n)=>{n.d(t,{GX:()=>u,HA:()=>r,Ij:()=>l,U8:()=>a,_:()=>o,e:()=>p,fq:()=>d,n$:()=>c,r4:()=>s});var i=n(141078);let a=(0,i.J1)`
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
`,r=(0,i.J1)`
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
  ${a}
`,o=(0,i.J1)`
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
  ${a}
`,s=(0,i.J1)`
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
  ${a}
`,p=(0,i.J1)`
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
  ${a}
`,c=(0,i.J1)`
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
  ${a}
`,l=(0,i.J1)`
  mutation GetOrCreateIdpUser($input: AclmanagerIdentityapiGetOrCreateUserRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateUser(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,u=(0,i.J1)`
  mutation GetOrCreateIdpGroup($input: AclmanagerIdentityapiGetOrCreateGroupRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateGroup(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,d=(0,i.J1)`
  mutation GetOrCreateIdpServicePrincipal($input: AclmanagerIdentityapiGetOrCreateServicePrincipalRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateServicePrincipal(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/10620.0ffb1d826c.chunk.js.map