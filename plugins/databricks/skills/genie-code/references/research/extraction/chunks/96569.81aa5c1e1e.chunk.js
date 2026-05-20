"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[96569],{414181:(e,t,a)=>{a.d(t,{$G:()=>h,vI:()=>S,v0:()=>M,aW:()=>E,Cu:()=>y,Zt:()=>_,g4:()=>v});var r=a(692738),n=a(441535),i=a(141078);let s=(0,i.J1)`
  fragment ScimAccountGroupFragment on ScimAccountGroup {
    id
    displayName
    members @type(name: "ScimAccountGroupMember") {
      value
      display
      ref
    }
    roles @type(name: "ScimAccountAttribute") {
      value
      type
    }
  }
`;(0,i.J1)`
  ${s}

  query GetAccountGroupsQuery__deduped($accountId: ID!, $queryParams: GetScimAccountGroupsInput!) {
    accountGroups(accountId: $accountId, queryParams: $queryParams)
      @rest(
        type: "ScimGroupCollectionResponse"
        path: "/accounts/{args.accountId}/scim/v2/Groups?{args.queryParams}"
        method: "GET"
      ) {
      totalResults
      startIndex
      itemsPerPage
      resources @type(name: "ScimAccountGroup") {
        ...ScimAccountGroupFragment
      }
    }
  }
`;let o=(0,i.J1)`
  fragment ScimAccountServicePrincipalFragment on ScimAccountServicePrincipal {
    roles @type(name: "ScimAccountAttribute") {
      value
      type
    }
    applicationId
    id
    displayName
    active
  }
`;(0,i.J1)`
  ${o}

  query GetAccountServicePrincipalsQuery__deduped(
    $accountId: ID!
    $queryParams: GetScimAccountServicePrincipalsInput!
  ) {
    accountServicePrincipals(accountId: $accountId, queryParams: $queryParams)
      @rest(
        type: "ScimCollectionResponse"
        path: "/accounts/{args.accountId}/scim/v2/ServicePrincipals?{args.queryParams}"
        method: "GET"
      ) {
      totalResults
      startIndex
      itemsPerPage
      resources @type(name: "ScimAccountServicePrincipal") {
        ...ScimAccountServicePrincipalFragment
      }
    }
  }
`;let c=(0,i.J1)`
  fragment ScimAccountUserFragment on ScimAccountUser {
    id
    displayName
    userName
    name @type(name: "ScimAccountUserName") {
      familyName
      givenName
    }
    emails @type(name: "ScimAccountEmail") {
      type
      value
      primary
    }
    active
    roles @type(name: "ScimAccountAttribute") {
      value
      type
    }
  }
`;(0,i.J1)`
  ${c}

  query GetAccountUsersQuery__deduped($accountId: ID!, $queryParams: GetScimAccountUsersInput!) {
    accountUsers(accountId: $accountId, queryParams: $queryParams)
      @rest(
        type: "ScimCollectionResponse"
        path: "/accounts/{args.accountId}/scim/v2/Users?{args.queryParams}"
        method: "GET"
      ) {
      totalResults
      startIndex
      itemsPerPage
      resources @type(name: "ScimAccountUser") {
        ...ScimAccountUserFragment
      }
    }
  }
`;let l=(0,i.J1)`
  mutation OauthDeleteSecretMutation($path: String!, $secretId: ID!) {
    oauthSecretDelete(path: $path, secretId: $secretId, input: {})
      @rest(type: "NoResponse", path: "{args.path}/{args.secretId}", method: "DELETE") {
      NoResponse
    }
  }
`,d=(0,i.J1)`
  mutation OauthGenerateSecretMutation($path: String!, $lifetime: String) {
    oauthSecretGenerate(path: $path, input: { lifetime: $lifetime })
      @rest(type: "OauthGenerateSecretResponse", path: $path, method: "POST") {
      secret
    }
  }
`,u=(0,i.J1)`
  query OauthSecretsQuery($path: String!) {
    oauthSecrets(path: $path) @rest(type: "OauthSecretsResponse", path: $path, method: "GET") {
      secrets {
        createTime
        id
        expireTime
      }
      errors {
        code
        message
      }
    }
  }
`,p=(0,i.J1)`
  query GetAccountTokenTtlQuery($accountId: ID!) @component(name: "IdentityMgmt.UserGroup") {
    settings(accountId: $accountId) {
      tokenTtl
    }
  }
`,m=(0,i.J1)`
  query GetAccountTokenTtlQueryForAccount($accountId: ID!, $settingType: String!, $settingName: String!) {
    accountSetting(accountId: $accountId, settingType: $settingType, settingName: $settingName)
      @rest(
        type: "SettingResponse"
        path: "/settings-api/account/{args.accountId}/{args.settingType}/{args.settingName}"
        method: "GET"
      ) {
      sessionToken
      setting {
        ref
        isMutable
        value {
          intVal {
            value
          }
        }
      }
    }
  }
`;var g=a(576655);let h=r.createContext(void 0);function f(){let e=(0,r.useContext)(h);if(!e)throw Error("useOauthSecretApiPathsContext must be called within an OauthSecretApiPathsContext Provider");return e}let y=(e,t)=>(0,i.IT)(u,{variables:{path:e},...t}),_=(e={})=>{let{skip:t=!1}=e,{secretsEndpointPath:a}=f();return y(a,{skip:t})},M=(e={})=>{let{secretsEndpointPath:t}=f(),[a,n]=(0,i.n_)(d,{refetchQueries:[{query:u,variables:{path:t}}],...e});return[(0,r.useCallback)(e=>a({variables:{path:t,lifetime:e}}),[a,t]),n]},S=(e,t={})=>{let{secretsEndpointPath:a}=f();return(0,i.n_)(l,{variables:{path:a,secretId:e},refetchQueries:[{query:u,variables:{path:a}}],...t})},E=(e={})=>{let[t,a]=(0,i.n_)(d,e);return[(0,r.useCallback)((e,a)=>t({variables:{path:e,lifetime:a}}),[t]),a]};function v(e){let t=(0,g.Ie)(),a=t?.type==="account",r=(0,n.W)("databricks.aclmanager.enableTokenTtl",!1),s=(0,i.IT)(m,{variables:{accountId:e,settingType:"token_ttl",settingName:""},notifyOnNetworkStatusChange:!0,errorPolicy:"all",skip:!a||!r}),o=((e,t={})=>(0,i.IT)(p,{variables:{accountId:e},...t}))(e,{skip:a||!r});if(!r)return{data:{settings:{}}};return a?s:o}},696569:(e,t,a)=>{a.d(t,{H:()=>es});var r,n=a(610435),i=a(720022),s=a(638600),o=a(760481),c=a(692738),l=a(382908),d=a(566512),u=a(79570),p=a(79128),m=a(793480),g=a(497895),h=a(830690),f=a(429608),y=a(325056),_=a(876726),M=a(293418),S=a(487404),E=a(314775),v=a(84008),T=a(262786),I=a(342411),b=a(441535),D=a(686560),A=a(109581),x=a(694762),O=a(414181),P=((r={}).OPEN_DELETE_MODAL="OPEN_DELETE_MODAL",r.OPEN_GENERATE_MODAL="OPEN_GENERATE_MODAL",r.OPEN_ENTER_LIFETIME_MODAL="OPEN_ENTER_LIFETIME_MODAL",r.SET_SECRET="SET_SECRET",r.SET_SECRET_ID="SET_SECRET_ID",r);let w={isDeleteModalOpen:!1,isGenerateModalOpen:!1,isEnterLifetimeModalOpen:!1,secret:"",secretId:""},N=(e,t)=>{let{type:a,payload:r}=t;switch(a){case"OPEN_DELETE_MODAL":return{...e,isDeleteModalOpen:r};case"OPEN_GENERATE_MODAL":return{...e,isGenerateModalOpen:r};case"OPEN_ENTER_LIFETIME_MODAL":return{...e,isEnterLifetimeModalOpen:r};case"SET_SECRET_ID":return{...e,secretId:r};case"SET_SECRET":return{...e,secret:r??""};default:return e}};function C(e,t,a,r,n,i,s){try{var o=e[i](s),c=o.value}catch(e){a(e);return}o.done?t(c):Promise.resolve(c).then(r,n)}let{Text:k}=l.o,L=({accountId:e,dispatch:t,isModalOpen:a,notification:r,secretId:i,servicePrincipalId:s})=>{let o,c={cancel:(o=(0,I.tz)()).formatMessage({id:"EY+5hQ",defaultMessage:"Cancel"}),delete:o.formatMessage({id:"+jvYC4",defaultMessage:"Delete"}),description:o.formatMessage({id:"B3x7Bh",defaultMessage:"Any applications or scripts using the secret will no longer be able to access the Databricks API. You need to modify all those applications and scripts to use a different secret for accessing the API. This cannot be undone."}),errorNotificationMessage:o.formatMessage({id:"svmMaG",defaultMessage:"Something went wrong"}),errorNotificationDescription:o.formatMessage({id:"MtwXD+",defaultMessage:"Please try again later"}),successNotificationMessage:o.formatMessage({id:"btTRPj",defaultMessage:"Success"}),successNotificationDescription:o.formatMessage({id:"Ql1+Fu",defaultMessage:"Successfully deleted secret"}),title:o.formatMessage({id:"JCCtnM",defaultMessage:"Delete secret"})},[l,{loading:d}]=(0,O.vI)(i);return(0,n.Y)(x.ZF,{componentId:"codegen_web-shared_src_principals-permissions_components_oauthsecrets_components_deletesecretmodal_deletesecretmodal.tsx_35",cancelText:c.cancel,okText:c.delete,onCancel:()=>{t({type:P.SET_SECRET_ID,payload:""}),t({type:P.OPEN_DELETE_MODAL,payload:!1})},onOk:()=>{var e;return(e=function*(){try{if(d)return;yield l(),r.success({message:c.successNotificationMessage,description:c.successNotificationDescription})}catch(e){r.error({message:c.errorNotificationMessage,description:c.errorNotificationDescription})}t({type:P.OPEN_DELETE_MODAL,payload:!1})},function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function s(e){C(i,r,n,s,o,"next",e)}function o(e){C(i,r,n,s,o,"throw",e)}s(void 0)})})()},title:c.title,visible:a,children:(0,n.Y)(k,{children:c.description})})};var Y=a(561587),G=a(732884),R=a(964133),$=a(174568),F=a(956935),H=a(754275);function q(e,t,a,r,n,i,s){try{var o=e[i](s),c=o.value}catch(e){a(e);return}o.done?t(c):Promise.resolve(c).then(r,n)}let W=({dispatch:e,isModalOpen:t,onSubmit:a,onClose:r,maxTtlDays:i})=>{let s,{handleSubmit:o,formState:{errors:c},control:l}=(0,Y.mN)(),{theme:d}=(0,g.wn)(),u=(()=>{let{theme:e}=(0,g.wn)();return{input:(0,F.AH)("background:",e.colors.backgroundSecondary,";width:120px;"),inputContainer:(0,F.AH)("margin-top:",e.spacing.md,"px;")}})(),p=(0,H.B)(),m=(0,b.W)("databricks.fe.aclmanager.servicePrincipalSecretsMaxLifetime",730),h=(0,b.W)("databricks.aclmanager.enableTokenTtl",!1)?i??m:m,f={invalidLifetimeWarning:e=>s.formatMessage({id:"grqj7O",defaultMessage:"Specify a lifetime between 1 and {maxDays} days"},{maxDays:e}),lifetimeInputLabel:(s=(0,I.tz)()).formatMessage({id:"DS8svl",defaultMessage:"Lifetime (days)"}),lifetimeInputHint:e=>s.formatMessage({id:"oDQuiH",defaultMessage:"Enter a lifetime for the new secret. Must be between 1 and {maxDays} days."},{maxDays:e}),lifetimeTitle:s.formatMessage({id:"zptHT4",defaultMessage:"Generate OAuth secret"}),generate:s.formatMessage({id:"UPnm76",defaultMessage:"Generate"}),cancel:s.formatMessage({id:"cuLFrt",defaultMessage:"Cancel"})};return(0,n.Y)(x.aF,{componentId:"web-shared_oauth-secrets_enter-lifetime-modal",title:f.lifetimeTitle,visible:t,okText:f.generate,cancelText:f.cancel,onCancel:()=>{e({type:P.OPEN_ENTER_LIFETIME_MODAL,payload:!1}),r?.()},onOk:o(t=>{a(t.lifetime),e({type:P.OPEN_ENTER_LIFETIME_MODAL,payload:!1}),r?.()}),children:(0,n.Y)(G.lV,{componentId:"web-shared_oauth-secrets_enter-lifetime-modal_form",css:{display:"flex",flexDirection:"column",gap:d.spacing.md},onSubmit:e=>{var t;return(t=function*(){return e.preventDefault()},function(){var e=this,a=arguments;return new Promise(function(r,n){var i=t.apply(e,a);function s(e){q(i,r,n,s,o,"next",e)}function o(e){q(i,r,n,s,o,"throw",e)}s(void 0)})})()},children:(0,n.FD)("div",{children:[(0,n.Y)(R.D.Label,{htmlFor:p,children:f.lifetimeInputLabel}),(0,n.Y)(R.D.Hint,{children:f.lifetimeInputHint(h)}),(0,n.FD)("div",{css:u.inputContainer,children:[(0,n.Y)($.t.Input,{componentId:"web-shared_oauth-secrets_enter-lifetime-modal_lifetime-input",css:u.input,id:p,name:"lifetime",control:l,type:"number",rules:{required:!0,validate:e=>{var t;return t=Number(e),null!=t&&!isNaN(t)&&Number.isInteger(t)&&t>0&&t<=h}},validationState:c?.lifetime?"error":void 0}),(c?.lifetime?.type==="validate"||c?.lifetime?.type==="required")&&(0,n.Y)(R.D.Message,{type:"error",message:f.invalidLifetimeWarning(h)})]})]})})})};var U=a(802582),z=a(407374);let{Link:J}=l.o;var Q=a(180864);let{Text:B}=l.o;function K({copyText:e,copyTooltip:t}){let{actionIcon:a,copy:r,tooltipMessage:i,ariaLabel:s}=(0,Q.L)(e,t);return(0,n.Y)(U.p,{title:i,children:(0,n.Y)(p.$n,{componentId:"web-shared_oauth-secrets_copy-button",onClick:r,"aria-label":s,children:a})})}let Z=({clientId:e="",dispatch:t,isModalOpen:a,secret:r="",onClose:i})=>{let s,o=(()=>{let{theme:e}=(0,g.wn)();return{input:(0,F.AH)("background:",e.colors.backgroundSecondary,";"),inputContainer:(0,F.AH)("margin-top:",e.spacing.md,"px;"),inputGroup:(0,F.AH)("padding-top:",e.spacing.sm,"px;width:100%;"),inputOverlay:(0,F.AH)("align-items:center;cursor:pointer;display:flex;height:100%;justify-content:flex-end;left:0;position:absolute;top:0;width:100%;"),warning:(0,F.AH)("&&{color:",e.colors.textValidationWarning,";}")}})(),c={clientIdHelp:(s=(0,I.tz)()).formatMessage({id:"UdZxMw",defaultMessage:"Same as the service principal UUID"}),clientIdLabel:s.formatMessage({id:"g3+ya0",defaultMessage:"Client ID"}),copyClientIdTooltip:s.formatMessage({id:"BbEFUx",defaultMessage:"Copy client id"}),copyClientIdSuccessNotificationDescription:s.formatMessage({id:"cHInWt",defaultMessage:"Copied client id"}),copySecretTooltip:s.formatMessage({id:"bQ8Z8x",defaultMessage:"Copy secret"}),copySecretSuccessNotificationDescription:s.formatMessage({id:"BwC9HB",defaultMessage:"Copied secret"}),done:s.formatMessage({id:"XvPxJ6",defaultMessage:"Done"}),description:e=>s.formatMessage({id:"Q4k65K",defaultMessage:"OAuth secret has been generated. You can now use the secret and client ID to secure authentication to the Databricks API. <link>Learn more</link>"},{link:t=>(0,n.Y)(J,{componentId:"codegen_web-shared_src_principals-permissions_components_oauthsecrets_components_generatesecretmodal_usemessages.tsx_53",href:e,target:"_blank",rel:"noopener noreferrer",children:t})}),secretLabel:s.formatMessage({id:"2q8j0b",defaultMessage:"Secret"}),successNotificationMessage:s.formatMessage({id:"o/eZ/S",defaultMessage:"Success"}),title:s.formatMessage({id:"KXe+xJ",defaultMessage:"Generate secret"}),warning:s.formatMessage({id:"IET4gE",defaultMessage:"Make sure to copy the secret now. You won't be able to see it again."})},l=(0,H.B)(),d=(0,H.B)();return(0,n.FD)(x.aF,{componentId:"codegen_web-shared_src_principals-permissions_components_oauthsecrets_components_generatesecretmodal_generatesecretmodal.tsx_52",title:c.title,visible:a,okText:c.done,onCancel:()=>{t({type:P.OPEN_GENERATE_MODAL,payload:!1}),t({type:P.SET_SECRET,payload:""}),i?.()},onOk:()=>{t({type:P.OPEN_GENERATE_MODAL,payload:!1}),t({type:P.SET_SECRET,payload:""}),i?.()},children:[(0,n.Y)(B,{children:c.description("https://docs.databricks.com/dev-tools/api/latest/authentication-oauth.html")}),(0,n.FD)(n.FK,{children:[(0,n.FD)("div",{css:o.inputContainer,children:[(0,n.Y)(R.D.Label,{htmlFor:l,children:c.secretLabel}),(0,n.FD)(z.p.Group,{css:o.inputGroup,children:[(0,n.Y)(z.p,{componentId:"codegen_web-shared_src_principals-permissions_components_oauthsecrets_components_generatesecretmodal_generatesecretmodal.tsx_70",id:l,css:o.input,readOnly:!0,value:r}),(0,n.Y)(K,{copyText:r,copyTooltip:c.copySecretTooltip})]}),(0,n.Y)(R.D.Message,{message:c.warning,type:"warning"})]}),(0,n.FD)("div",{css:o.inputContainer,children:[(0,n.Y)(R.D.Label,{htmlFor:d,children:c.clientIdLabel}),(0,n.FD)(z.p.Group,{css:o.inputGroup,children:[(0,n.Y)(z.p,{componentId:"codegen_web-shared_src_principals-permissions_components_oauthsecrets_components_generatesecretmodal_generatesecretmodal.tsx_78",id:d,css:o.input,readOnly:!0,value:e}),(0,n.Y)(K,{copyText:e,copyTooltip:c.copyClientIdTooltip})]}),(0,n.FD)(R.D.Hint,{children:[c.clientIdHelp," "]})]})]})]})},{Link:V}=l.o,j=()=>{let e=(0,I.tz)();return{createdAtColumn:e.formatMessage({id:"72XjYS",defaultMessage:"Created at"}),deleteSecretTitle:e.formatMessage({id:"20cLsN",defaultMessage:"Delete secret"}),expiresAtColumn:e.formatMessage({id:"T1ZrlW",defaultMessage:"Expires at"}),idColumn:e.formatMessage({id:"Q1V+Do",defaultMessage:"ID"}),description:t=>e.formatMessage({id:"i6uNuD",defaultMessage:"OAuth secrets can be used to secure authentication to the Databricks API. <link>Learn more</link>"},{link:e=>(0,n.Y)(V,{componentId:"codegen_web-shared_src_principals-permissions_components_oauthsecrets_usemessages.tsx_33",href:t,target:"_blank",rel:"noopener noreferrer",children:e})}),errorNotificationMessage:e.formatMessage({id:"dvVhCz",defaultMessage:"Something went wrong"}),errorNotificationDescription:e.formatMessage({id:"rZiNYh",defaultMessage:"Please try again later"}),generateSecretButton:e.formatMessage({id:"l1Ti91",defaultMessage:"Generate secret"}),successNotificationMessage:e.formatMessage({id:"o/eZ/S",defaultMessage:"Success"}),title:e.formatMessage({id:"+WLv3u",defaultMessage:"OAuth secrets"}),noData:e.formatMessage({id:"fECVRV",defaultMessage:"No OAuth secrets"}),generateSecretTooltip:e.formatMessage({id:"w+xx8k",defaultMessage:"Generating a new secret is not allowed because the account max TTL is set to 0."})}};var X=a(483588),ee=a(123061);function et(e,t,a,r,n,i,s){try{var o=e[i](s),c=o.value}catch(e){a(e);return}o.done?t(c):Promise.resolve(c).then(r,n)}let{Title:ea,Text:er}=l.o,en={id:"1 1 0%",expireTime:"0 0 20%",createTime:"0 0 20%"},ei={AWS:"https://docs.databricks.com/dev-tools/api/latest/authentication-oauth.html",Azure:"https://learn.microsoft.com/en-us/azure/databricks/dev-tools/auth/oauth-m2m",GCP:"https://docs.databricks.com/gcp/en/dev-tools/auth/oauth-m2m"},es=({accountId:e,oauthConfig:t,clientId:a,servicePrincipalId:r,servicePrincipalNeedsProvisioning:i=!1,onGenerateModalClose:s,simplified:o=!1})=>{let l=ei[(0,D.d)("cloud_new","AWS")]||ei.AWS,m=(()=>{let{theme:e}=(0,g.wn)();return{icon:(0,F.AH)("color:",e.colors.textSecondary,";"),loader:(0,F.AH)("margin-right:",e.spacing.sm,"px;"),spacer:(0,F.AH)("margin-top:",e.spacing.md,"px;")}})(),h=j(),[f,y]=(0,d.o)(),[_,M]=(0,c.useReducer)(N,w),S=(0,H.B)(),{data:E}=(0,O.g4)(e),v=(0,b.W)("databricks.aclmanager.enableTokenTtl",!1),T=E?.accountSetting?.setting?.value?.intVal?.value??E?.settings?.tokenTtl,I=v&&0===T,[A,x]=(0,c.useState)(),[C,{loading:k}]=(0,ee.$)({notifyOnNetworkStatusChange:!0}),Y=t?.maxSecretsPerServicePrincipal||5,{loading:G,data:R}=(0,O.Zt)({skip:i}),[$,{loading:q}]=(0,O.v0)(),[U,{loading:z}]=(0,O.aW)({notifyOnNetworkStatusChange:!0}),J=q||z,Q=R?.oauthSecrets?.secrets||[],B=t=>{var a;return(a=function*(){try{if(J)return;let a=t?(86400*t).toString()+"s":void 0;if(i){let t=(yield C({variables:{input:{sourceIdp:X.GbL.SOURCE_IDP_ATTRIBUTE_AAD,externalId:r}}})).data?.aclmanagerIdentityapiGetOrCreateServicePrincipal?.name?.split("/")?.at(-1);if(t){x(t);let{data:r}=yield U(`/accounts/${e}/servicePrincipals/${t}/credentials/secrets`,a);en(r?.oauthSecretGenerate?.secret)}else V("Failed to provision service principal.","Please ensure the service principal is active in the tenant.")}else{let{data:e}=yield $(a);en(e?.oauthSecretGenerate?.secret)}}catch(e){K()}},function(){var e=this,t=arguments;return new Promise(function(r,n){var i=a.apply(e,t);function s(e){et(i,r,n,s,o,"next",e)}function o(e){et(i,r,n,s,o,"throw",e)}s(void 0)})})()},K=()=>{f.error({message:h.errorNotificationMessage,description:h.errorNotificationDescription})},V=(e,t)=>{f.error({message:e,description:t})},en=e=>{M({type:P.SET_SECRET,payload:e}),M({type:P.OPEN_GENERATE_MODAL,payload:!0})};return(0,n.FD)("section",{"aria-labelledby":S,children:[(0,n.Y)(ea,{id:S,level:3,css:m.spacer,children:h.title}),(0,n.Y)(er,{children:h.description(l)}),!o&&(0,n.Y)(ed,{loading:G,maxSecrets:Y,onDelete:e=>{M({type:P.SET_SECRET_ID,payload:e}),M({type:P.OPEN_DELETE_MODAL,payload:!0})},secrets:Q}),(0,n.Y)("div",{children:(0,n.Y)(u.m,{componentId:"web-shared_oauth-secrets_generate-secret-tooltip",content:I?(0,n.Y)("div",{css:{textAlign:"center"},children:h.generateSecretTooltip}):void 0,children:(0,n.Y)(p.$n,{componentId:"web-shared_oauth-secrets_generate-secret",disabled:G||J||k||!o&&Q?.length>=Y||I,onClick:()=>{(0,b.W)("databricks.fe.aclmanager.enableServicePrincipalSecretsLifetimeFrontEnd",!1)?M({type:P.OPEN_ENTER_LIFETIME_MODAL,payload:!0}):B()},children:h.generateSecretButton})})}),_.isGenerateModalOpen&&(0,n.Y)(Z,{clientId:a,dispatch:M,isModalOpen:_.isGenerateModalOpen,secret:_.secret,onClose:()=>s?.(A)}),_.isDeleteModalOpen&&(0,n.Y)(L,{accountId:e,dispatch:M,isModalOpen:_.isDeleteModalOpen,notification:f,secretId:_.secretId,servicePrincipalId:r}),_.isEnterLifetimeModalOpen&&(0,n.Y)(W,{dispatch:M,isModalOpen:_.isEnterLifetimeModalOpen,onSubmit:e=>{B(e)},maxTtlDays:T}),y]})},eo=e=>{let{row:t}=e,{onDelete:a}=e.table.options.meta,r=j();return(0,n.Y)(p.$n,{componentId:"web-shared_oauth-secrets_delete-secret",icon:(0,n.Y)(m.A,{}),onClick:()=>a(t.original.id),size:"small",title:r.deleteSecretTitle})},ec=e=>{let{row:t}=e,{createTime:a}=t.original,r=(0,n.Y)(I.XU,{value:a,dateStyle:"medium",timeStyle:"long"});return(0,n.Y)(u.m,{componentId:"web-shared_oauth-secrets_create-time-tooltip",content:r,children:(0,n.Y)("span",{children:(0,o.A)(new Date(a),Date.now())})})},el=e=>{let{row:t}=e,{expireTime:a}=t.original;if(!a)return"Never";let r=(0,n.Y)(I.XU,{value:a,dateStyle:"medium",timeStyle:"long"});return(0,n.Y)(u.m,{componentId:"web-shared_oauth-secrets_expire-time-tooltip",content:r,children:(0,n.Y)("span",{children:(0,o.A)(new Date(a),Date.now())})})},ed=({loading:e,maxSecrets:t,onDelete:a,secrets:r})=>{let o=j(),{theme:l}=(0,g.wn)(),d={id:"expireTime",accessorKey:"expireTime",header:o.expiresAtColumn,cell:el},u=[{id:"id",accessorKey:"id",header:o.idColumn},{id:"createTime",accessorKey:"createTime",header:o.createdAtColumn,cell:ec},...(0,b.W)("databricks.fe.aclmanager.enableServicePrincipalSecretsLifetimeFrontEnd",!1)?[d]:[],{id:"deleteAction",cell:eo,meta:{isAction:!0,onDelete:a}}],[p,m]=(0,c.useState)({pageSize:t,pageIndex:0}),I=(0,c.useMemo)(()=>[{id:"createTime",desc:!0}],[]),D=(0,A.Lb)("js/packages/web-shared/src/principals-permissions/components/OauthSecrets/OauthSecrets.tsx",{data:r,columns:u,state:{pagination:p,sorting:I},getCoreRowModel:(0,i.HT)(),getSortedRowModel:(0,i.h5)(),getPaginationRowModel:(0,i.kW)(),meta:{onDelete:a}}),x=(0,n.Y)(h.dK,{componentId:"web-shared_oauth-secrets_pagination",currentPageIndex:p.pageIndex+1,numTotal:r.length,onChange:(e,t)=>{m({pageSize:t||p.pageSize,pageIndex:e-1})},pageSize:p.pageSize,hideOnSinglePage:!0});return(0,n.Y)(f.bW,{children:(0,n.Y)("div",{css:{display:"flex",flexDirection:"column",overflow:"auto",flexGrow:1},children:(0,n.FD)(y.X,{style:{marginTop:`${l.spacing.md}px`,maxWidth:"1000px"},pagination:x,empty:0!==D.getRowModel().rows.length||e?void 0:(0,n.Y)(_.S,{description:o.noData}),children:[D.getHeaderGroups().map(e=>(0,n.Y)(M.H,{isHeader:!0,children:e.headers.map(e=>"deleteAction"===e.column.id?(0,n.Y)(S.f,{},e.id):(0,n.Y)(E.A,{componentId:"web-shared_oauth-secrets_table-header",style:e.id in en?{flex:en[e.id]}:void 0,children:(0,s.Kv)(e.column.columnDef.header,e.getContext())},e.id))},e.id)),!1===e&&D.getRowModel().rows.map(e=>(0,n.Y)(M.H,{children:e.getAllCells().map(e=>"deleteAction"===e.column.id?(0,n.Y)(S.f,{children:(0,s.Kv)(e.column.columnDef.cell,e.getContext())},e.id):(0,n.Y)(v.n,{style:e.column.id in en?{flex:en[e.column.id]}:void 0,children:(0,s.Kv)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)),!0===e&&(0,n.Y)("div",{"data-testid":"loading-skeleton",children:(0,n.Y)(T.B,{table:D,numRows:t})})]})})})}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/96569.81aa5c1e1e.chunk.js.map