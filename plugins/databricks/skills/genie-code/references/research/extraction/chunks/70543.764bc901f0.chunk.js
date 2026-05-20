"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[70543],{26446:(e,t,i)=>{i.d(t,{HT:()=>d,M8:()=>p,Pf:()=>s,bp:()=>l,gb:()=>n,iN:()=>c,pP:()=>r,xB:()=>u});let n=1e3,r={enableAccountGroups:!1,enableAccountServicePrincipals:!1,enableAccountUsers:!1,enableWorkspaceGroups:!1,enableWorkspaceServicePrincipals:!1,enableWorkspaceUsers:!1},o=/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,a={admins:"Admins",users:"All workspace users","account users":"All account users"},s=e=>{if(!e)return e;return a[e]??e},l=e=>{let t=new Map;return e.forEach(e=>{let i=d(e)||e.name;t.has(i)||t.set(i,[]),t.get(i)?.push(e)}),t},c=e=>{switch(e.kind){case"user":return e.fullName;case"serviceprincipal":return e.name;case"group":return e.displayName;default:return""}},d=e=>{switch(e.kind){case"user":case"group":return e.name||"";case"serviceprincipal":return e.applicationId||"";default:return""}},p=({uniqueName:e,id:t,kind:i,displayName:n})=>{switch(i){case"user":return{id:t||"",optionId:`user.${t}`,kind:i,name:e||"",fullName:n||"",title:""};case"serviceprincipal":return{id:t||"",optionId:`serviceprincipal.${t}`,kind:i,name:n||"",applicationId:e||"",title:""};case"group":return{id:t||"",optionId:`group.${t}`,kind:i,name:e||"",displayName:s(e||""),title:""};default:return}};function u(e){return e?o.test(e)?"serviceprincipal":"user":void 0}},81659:(e,t,i)=>{i.d(t,{o:()=>u});var n=i(610435),r=i(956935),o=i(986912),a=i(497895),s=i(866370),l=i(59723),c=i(123252);let d=(0,r.AH)({cursor:"progress",width:"100%",height:28,display:"flex",justifyContent:"flex-start",alignItems:"center"}),p=(0,r.AH)({borderRadius:"var(--border-radius)",height:12,width:"100%"}),u=({label:e,seed:t="",frameRate:i=60,style:r,loading:u=!0,loadingDescription:m="TitleSkeleton",...g})=>{let{theme:f}=(0,a.wn)(),h=(0,o.PT)(t)[0];return(0,n.FD)("div",{...(0,c.VG)(),css:d,style:{...r,"--border-radius":`${f.general.borderRadiusBase}px`},...g,children:[u&&(0,n.Y)(s.G,{description:m}),(0,n.Y)("span",{css:l.Q,children:e}),(0,n.Y)("div",{"aria-hidden":!0,css:[p,(0,o.q5)(f,i),{width:`calc(100% - ${h}px)`}]})]})}},242439:(e,t,i)=>{i.d(t,{o:()=>d});var n=i(610435),r=i(692738),o=i(497895),a=i(382908),s=i(79128),l=i(943844),c=i(955210);function d({title:e,titleElement:t,description:i,children:p,titleWidth:u=216,isCollapsible:m=!1,defaultOpen:g}){let{theme:f}=(0,o.wn)(),[h,_]=(0,r.useState)(g||!m);return(0,n.FD)("div",{css:{padding:`${f.spacing.lg}px 0 ${f.spacing.lg}px`,borderBottom:`1px solid ${f.colors.border}`,display:"flex",gap:f.spacing.lg,"&:first-child":{paddingTop:0},"&:last-child":{border:0},"@media (max-width: 1439px)":{flexDirection:"column",gap:f.spacing.md}},children:[(0,n.FD)("div",{css:{width:u,flexShrink:0,"@media (max-width: 1439px)":{width:"100%"}},children:[(0,n.FD)("div",{css:{display:"flex",gap:4,alignItems:"center"},children:[(0,n.Y)(a.o.Title,{level:3,withoutMargins:!0,children:t??e}),m&&(0,n.Y)(s.$n,{componentId:"codegen_mlflow_app_src_endpoints_components_endpoint-form_advancedconfiguration.tsx_39",size:"small",onClick:()=>_(e=>!e),icon:h?(0,n.Y)(l.A,{}):(0,n.Y)(c.A,{}),"aria-label":`Open ${e} section`,"aria-expanded":h})]}),i&&h&&(0,n.Y)(a.o.Text,{color:"secondary",css:{display:"inline-block",marginTop:f.spacing.xs},children:i})]}),(0,n.Y)("div",{css:{display:h?"block":"none",flexGrow:1},children:p}),(0,n.Y)("div",{css:{display:h?"none":"block",flexGrow:1},children:(0,n.Y)(a.o.Text,{color:"secondary",children:i})})]})}},295423:(e,t,i)=>{i.d(t,{f:()=>c});var n=i(692738),r=i(671244),o=i(653542),a=i(49586),s=i(209908);let l=50,c=({enableAccountGroups:e=!1,enableAccountServicePrincipals:t=!1,enableAccountUsers:i=!1,enableWorkspaceGroups:c=!0,enableWorkspaceServicePrincipals:d=!0,enableWorkspaceUsers:p=!0,filterText:u="",principalIdsForFiltering:m=[],principalUniqueNamesForFiltering:g=[],limit:f=l,useLite:h,skip:_=!1,isCache:y=!1}={})=>{let v=(0,s.VM)({ids:m,uniqueNames:g}),x=(0,s.L5)({ids:m,uniqueNames:g}),{subjects:I,isLoading:w,error:A,hasNextPage:b}=(0,a.zo)({source:"account",filter:u,filterPredicate:v,first:f,skip:!i||_,useLite:h,isCache:y}),{subjects:k,isLoading:Y,error:C,hasNextPage:S}=(0,r.Bi)({source:"account",filter:u,filterPredicate:x,first:f,skip:!e||_,useLite:h,isCache:y}),{subjects:$,isLoading:P,error:R,hasNextPage:F}=(0,o.Q_)({source:"account",filter:u,filterPredicate:v,first:f,skip:!t||_,useLite:h,isCache:y}),{subjects:M,isLoading:G,error:T,hasNextPage:D}=(0,a.zo)({source:"workspace",filter:u,filterPredicate:v,first:f,skip:!p||_,useLite:h,isCache:y}),{subjects:N,isLoading:B,error:j,hasNextPage:L}=(0,r.Bi)({source:"workspace",filter:u,filterPredicate:x,first:f,skip:!c||_,useLite:h,isCache:y}),{subjects:H,isLoading:O,error:U,hasNextPage:E}=(0,o.Q_)({source:"workspace",filter:u,filterPredicate:v,first:f,skip:!d||_,useLite:h,isCache:y}),z=(0,n.useMemo)(()=>{let t=[...N,...k];if(e&&c)return t.filter((e,t,i)=>t===i.findIndex(t=>t.id===e.id));return t},[k,e,c,N]),q=(0,n.useMemo)(()=>{let e=[...H,...$];if(t&&d)return e.filter((e,t,i)=>t===i.findIndex(t=>t.id===e.id));return e},[$,t,d,H]),V=(0,n.useMemo)(()=>{let e=[...M,...I];if(i&&p)return e.filter((e,t,i)=>t===i.findIndex(t=>t.id===e.id));return e},[I,i,p,M]),{subjects:K,hasNextPage:W}=(0,n.useMemo)(()=>(0,s.GF)(u,f,z,q,V),[u,f,z,q,V]),J=(0,n.useMemo)(()=>({accountGroups:Y,accountServicePrincipals:P,accountUsers:w,groups:B,servicePrincipals:O,users:G,some:Y||P||w||B||O||G}),[Y,P,w,B,O,G]),Q=(0,n.useMemo)(()=>({accountGroups:C??null,accountServicePrincipals:R??null,accountUsers:A??null,groups:j??null,servicePrincipals:U??null,users:T??null}),[C,R,A,j,U,T]);return{allSubjectsMap:(0,n.useMemo)(()=>(0,s.ne)(z,q,V),[z,q,V]),errors:Q,hasNextPage:!!(K.length===f&&(b||S||F||D||L||E)||W),isLoading:J,subjects:K}}},599352:(e,t,i)=>{i.d(t,{Z:()=>I});var n=i(610435),r=i(956935),o=i(644091),a=i(813342),s=i.n(a),l=i(692738),c=i(224098),d=i(429608),p=i(497895),u=i(81659),m=i(810152),g=i(705639),f=i(53333),h=i(123252),_=i(661748),y=i(99206);function v(e,t,i,n,r,o,a){try{var s=e[o](a),l=s.value}catch(e){i(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function x(e){return function(){var t=this,i=arguments;return new Promise(function(n,r){var o=e.apply(t,i);function a(e){v(o,n,r,a,s,"next",e)}function s(e){v(o,n,r,a,s,"throw",e)}a(void 0)})}}let I=({children:e,customLoadingContent:t,dangerouslyAppendEmotionCSS:i,loading:a,loadingDescription:u,width:m,bottomBarContent:v,topBarContent:I,disableHover:A,onClick:b,href:k,navigateFn:Y,anchorProps:C,componentId:S,analyticsEvents:$,shouldStartInteraction:P,...R})=>{let F=(0,_.W)("databricks.fe.observability.defaultComponentView.card",!1),{theme:M}=(0,p.wn)(),G=!s()(I),T=!s()(v),D=(0,r.AH)(function(e){let{theme:t,width:i,hasTopBar:n,hasBottomBar:o,isInteractive:a}=e,s=a?{border:`1px solid ${t.colors.actionDefaultBorderHover}`,boxShadow:t.shadows.md}:{};return(0,r.AH)({color:t.colors.textPrimary,backgroundColor:t.colors.backgroundPrimary,position:"relative",display:"flex",justifyContent:"flex-start",flexDirection:"column",paddingRight:n||o?0:t.spacing.md,paddingLeft:n||o?0:t.spacing.md,paddingTop:n?0:t.spacing.md,paddingBottom:o?0:t.spacing.md,width:i??"fit-content",borderRadius:(0,y.S)(g.c.INFO_CONTAINER_BORDER_RADIUS,t.borders.borderRadiusMd),borderColor:t.colors.border,borderWidth:"1px",borderStyle:"solid","&:hover":s,"&:focus":s,cursor:a?"pointer":"default",boxShadow:t.shadows.sm,transition:"box-shadow 0.2s ease-in-out",textDecoration:"none !important",...(0,d.Cx)(t.options.enableAnimation)})}({theme:M,width:m,hasBottomBar:T,hasTopBar:G,isInteractive:!A&&!a&&(!!k||!!b||!!Y)})),N=l.useRef(null),B=v?(0,n.Y)("div",{css:(0,r.AH)((0,r.AH)({marginTop:M.spacing.sm,borderBottomRightRadius:(0,y.S)(g.c.INFO_CONTAINER_BORDER_RADIUS,M.borders.borderRadiusSm),borderBottomLeftRadius:(0,y.S)(g.c.INFO_CONTAINER_BORDER_RADIUS,M.borders.borderRadiusSm),overflow:"hidden"})),children:v}):null,j=I?(0,n.Y)("div",{css:(0,r.AH)((0,r.AH)({marginBottom:M.spacing.sm,borderTopRightRadius:(0,y.S)(g.c.INFO_CONTAINER_BORDER_RADIUS,M.borders.borderRadiusSm),borderTopLeftRadius:(0,y.S)(g.c.INFO_CONTAINER_BORDER_RADIUS,M.borders.borderRadiusSm),overflow:"hidden"})),children:I}):null,L=G||T?M.spacing.lg:0,H=(0,l.useMemo)(()=>$??(F?[c.s7.OnClick,c.s7.OnView]:[c.s7.OnClick]),[$,F]),O=(0,c.ei)({componentType:c.v_.Card,componentId:S,analyticsEvents:H,shouldStartInteraction:P}),{elementRef:U}=(0,f.z)({onView:O.onView}),E=(0,o.SV)([N,U]),z=(0,l.useCallback)(()=>x(function*(){Y&&(yield Y())})(),[Y]),q=(0,l.useCallback)(e=>x(function*(){O.onClick(e),yield z(),b?.(e),N.current?.blur()})(),[z,O,b]),V=(0,l.useCallback)(e=>x(function*(){O.onClick(e),e.preventDefault(),yield z(),b?.(e)})(),[z,O,b]),K=(0,n.Y)("div",{ref:E,tabIndex:k?void 0:0,...(0,h.VG)(),css:k?[]:[D,i],onClick:a||k?void 0:q,...R,onKeyDown:e=>x(function*(){let t="Enter"===e.key,i=" "===e.key,n=e.target===e.currentTarget;(t||i)&&n&&(yield V(e)),R.onKeyDown?.(e)})(),...O.dataComponentProps,children:a?(0,n.Y)(w,{width:m,customLoadingContent:t,loadingDescription:u}):(0,n.FD)(n.FK,{children:[j,(0,n.Y)("div",{css:{padding:`0px ${L}px`,flexGrow:1},children:e}),B]})});return k?(0,n.Y)("a",{css:[D,i],href:k,...C,children:K}):K};function w({customLoadingContent:e,width:t,loadingDescription:i}){if(e)return(0,n.Y)(n.FK,{children:e});return(0,n.FD)("div",{css:{width:t??300},children:[(0,n.Y)(u.o,{label:"Loading...",style:{width:"50%"},loadingDescription:i}),[...[,,,].keys()].map(e=>(0,n.Y)(m.I,{label:"Loading..."},e))]})}},655841:(e,t,i)=>{i.d(t,{GX:()=>p,HA:()=>o,Ij:()=>d,U8:()=>r,_:()=>a,e:()=>l,fq:()=>u,n$:()=>c,r4:()=>s});var n=i(141078);let r=(0,n.J1)`
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
`,o=(0,n.J1)`
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
  ${r}
`,a=(0,n.J1)`
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
  ${r}
`,s=(0,n.J1)`
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
  ${r}
`,l=(0,n.J1)`
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
  ${r}
`,c=(0,n.J1)`
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
  ${r}
`,d=(0,n.J1)`
  mutation GetOrCreateIdpUser($input: AclmanagerIdentityapiGetOrCreateUserRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateUser(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,p=(0,n.J1)`
  mutation GetOrCreateIdpGroup($input: AclmanagerIdentityapiGetOrCreateGroupRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateGroup(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,u=(0,n.J1)`
  mutation GetOrCreateIdpServicePrincipal($input: AclmanagerIdentityapiGetOrCreateServicePrincipalRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateServicePrincipal(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`},691069:(e,t,i)=>{i.d(t,{C:()=>c});var n=i(610435);i(692738);var r=i(497895),o=i(465082),a=i(26971),s=i(777517),l=i(342411);let c=({kind:e,disabled:t,style:i})=>{let{theme:c}=(0,r.wn)(),d=(0,l.tz)(),p={alignItems:"center",background:t?void 0:c.colors.backgroundSecondary,borderRadius:30,color:t?c.colors.actionDisabledText:c.colors.textSecondary,display:"flex",fontSize:20,height:30,justifyContent:"center",width:30};switch(e){case"user":return(0,n.Y)(o.A,{title:d.formatMessage({id:"9vv8Gs",defaultMessage:"User"}),css:i||p});case"group":return(0,n.Y)(a.A,{title:d.formatMessage({id:"Qzw3C/",defaultMessage:"Group"}),css:i||p});case"serviceprincipal":return(0,n.Y)(s.A,{title:d.formatMessage({id:"QrVB43",defaultMessage:"Service Principal"}),css:i||p});default:return null}}},742259:(e,t,i)=>{i.d(t,{v:()=>a});var n=i(692738),r=i(26446),o=i(295423);let a=(e={})=>{let t=e.principalUniqueNamesForFiltering?.length??0,i=(0,o.f)(0===t||t>r.gb?{...e,limit:t,...r.pP}:{...e,limit:t}),{subjects:a}=i,s=(0,n.useMemo)(()=>(0,r.bp)(a),[a]);return{...i,uniqueNameToSubjectsMap:s}}},777517:(e,t,i)=>{i.d(t,{A:()=>l});var n=i(610435),r=i(692738),o=i(375214);function a(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 0a.75.75 0 0 1 .75.75V3h5.5a.75.75 0 0 1 .75.75V6h.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75H15v2.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V12H.75a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 .75 6H1V3.75A.75.75 0 0 1 1.75 3h5.5V.75A.75.75 0 0 1 8 0M2.5 4.5v9h11v-9zM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6.25 2.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(o.I,{ref:t,...e,component:a}));s.displayName="RobotIcon";let l=s},932592:(e,t,i)=>{i.d(t,{AD:()=>R,PB:()=>P,WO:()=>$,gV:()=>Y,lf:()=>S});var n=i(610435),r=i(692738),o=i(321527),a=i(497895),s=i(407374),l=i(382908),c=i(293418),d=i(314775),p=i(161330),u=i(84008),m=i(465946),g=i(873393),f=i(465082),h=i(26971),_=i(777517),y=i(79128),v=i(658345),x=i(62947),I=i(856116);let w={[I.L.AWS]:"https://docs.databricks.com/en/ai-gateway/index.html",[I.L.Azure]:"https://learn.microsoft.com/en-us/azure/databricks/ai-gateway/",[I.L.GCP]:"https://docs.gcp.databricks.com/en/ai-gateway/index.html"},A=({value:e,onChange:t,componentId:i,focused:r,onFocus:o,onBlur:l})=>{let{theme:c}=(0,a.wn)();return(0,n.Y)(s.p,{componentId:i,type:"text",value:e??"",placeholder:r?"":"No limit",onFocus:o,onBlur:l,onChange:({target:e})=>t(e.value),css:{width:96,"::placeholder":{color:c.colors.textSecondary}}})},b=({value:e,onChange:t,componentId:i,focused:r,onFocus:o,onBlur:l})=>{let{theme:c}=(0,a.wn)();return(0,n.Y)(s.p,{componentId:i,type:"text",value:e??"",placeholder:r?"":"No limit",onFocus:o,onBlur:l,onChange:({target:e})=>t(e.value),css:{width:96,"::placeholder":{color:c.colors.textSecondary}}})},k=({componentId:e,onClick:t})=>(0,n.Y)(l.o.Link,{componentId:e,onClick:t,onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),t())},css:{fontSize:"14px"},tabIndex:0,role:"button",children:(0,n.Y)(o.A,{id:"83sA+b",defaultMessage:"Reset"})}),Y=({isTokenBasedRateLimitsEnabled:e})=>{let{theme:t}=(0,a.wn)();return(0,n.FD)(c.H,{isHeader:!0,children:[(0,n.Y)(d.A,{componentId:"rate-limits-subject-header",css:{flex:e?12:13}}),(0,n.Y)(d.A,{componentId:"rate-limits-qpm-header",css:{flex:4,textAlign:"left"},children:(0,n.FD)("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:t.spacing.xs},children:[(0,n.Y)(o.A,{id:"uv+tUl",defaultMessage:"QPM"}),(0,n.Y)(p.I,{componentId:"mlflow.serving.ai_gateway_config.rate_limits.qpm_info_tooltip",iconTitle:"More information",content:(0,n.Y)("span",{children:"The number of queries that the endpoint can process per minute"})})]})}),e&&(0,n.Y)(d.A,{componentId:"rate-limits-tpm-header",css:{flex:4,textAlign:"left"},children:(0,n.FD)("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:t.spacing.xs},children:[(0,n.Y)(o.A,{id:"dRO0+z",defaultMessage:"TPM"}),(0,n.Y)(p.I,{componentId:"mlflow.serving.ai_gateway_config.rate_limits.tpm_info_tooltip",iconTitle:"More information",content:(0,n.Y)("span",{children:"The number of tokens that the endpoint can process per minute"})})]})}),(0,n.Y)(d.A,{componentId:"rate-limits-action-header",css:{flex:e?2:3,textAlign:"center"}})]})},C=({rateLimit:e,focusStates:t,onFocus:i,onBlur:o,onQpmChange:s,onTpmChange:l,onReset:d,cloud:g,config:f,isTokenBasedRateLimitsEnabled:h})=>{let{theme:_}=(0,a.wn)();return(0,n.FD)(c.H,{children:[(0,n.Y)(u.n,{css:{verticalAlign:"middle",height:"auto",flex:h?12:13},children:(0,n.FD)("div",{css:{display:"flex",alignItems:"center",gap:_.spacing.xs,minHeight:"48px"},children:[(0,n.FD)(m.v,{color:"default",componentId:"codegen_no_dynamic_mlflow_web_js_src_endpoints_components_endpoint_form_long_form_sections_aigatewayratelimitscomponents_251",css:{fontWeight:"bold",fontSize:18,display:"inline-flex",alignItems:"center",gap:2,width:"fit-content",minWidth:0},children:[r.cloneElement(f.tagProps.icon,{css:{width:_.general.iconFontSize,height:_.general.iconFontSize,background:"transparent",marginRight:_.spacing.xs}}),f.tagProps.text]}),(0,n.Y)(p.I,{componentId:"codegen_no_dynamic_mlflow_web_js_src_endpoints_components_endpoint_form_long_form_sections_aigatewayratelimitscomponents_274",iconTitle:"More information",content:f.tooltipProps.content})]})}),(0,n.Y)(u.n,{css:{textAlign:"left",verticalAlign:"middle",height:"auto",flex:4},children:(0,n.Y)("div",{css:{display:"flex",alignItems:"center",justifyContent:"flex-start",minHeight:"48px"},children:(0,n.Y)(A,{value:e?.calls??void 0,onChange:s,componentId:"codegen_no_dynamic_mlflow_web_js_src_endpoints_components_endpoint_form_long_form_sections_aigatewayratelimitscomponents_293",focused:!!t[f.focusKey],onFocus:()=>i(f.focusKey),onBlur:()=>o(f.focusKey)})})}),h&&(0,n.Y)(u.n,{css:{textAlign:"left",verticalAlign:"middle",height:"auto",flex:4},children:(0,n.Y)("div",{css:{display:"flex",alignItems:"center",justifyContent:"flex-start",minHeight:"48px"},children:(0,n.Y)(b,{value:e?.tokens??void 0,onChange:l||(()=>{}),componentId:"codegen_no_dynamic_mlflow_web_js_src_endpoints_components_endpoint_form_long_form_sections_aigatewayratelimitscomponents_314",focused:!!t[`${f.focusKey}_tpm`],onFocus:()=>i(`${f.focusKey}_tpm`),onBlur:()=>o(`${f.focusKey}_tpm`)})})}),(0,n.Y)(u.n,{css:{verticalAlign:"middle",height:"auto",flex:h?2:3,textAlign:"center"},children:(0,n.Y)("div",{css:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"48px"},children:(0,n.Y)(k,{componentId:"codegen_no_dynamic_mlflow_web_js_src_endpoints_components_endpoint_form_long_form_sections_aigatewayratelimitscomponents_332",onClick:d})})})]},f.key)},S=({endpointRateLimit:e,focusStates:t,onFocus:i,onBlur:r,onQpmChange:a,onTpmChange:s,onReset:c,cloud:d,isTokenBasedRateLimitsEnabled:p})=>{let u={key:"endpoint-row",focusKey:"endpoint",tagProps:{componentId:"mlflow.serving.ai_gateway_config.rate_limits.endpoint_tag",icon:(0,n.Y)(g.A,{}),text:(0,n.Y)(o.A,{id:"t/r6r9",defaultMessage:"Endpoint"})},tooltipProps:{componentId:"mlflow.serving.ai_gateway_config.rate_limits.endpoint_rate_limit_tooltip",content:(0,n.Y)("span",{children:(0,n.Y)(o.A,{id:"p30Tj/",defaultMessage:"The overall rate limit for all traffic passing through this endpoint, regardless of individual or user group limits. <link>Learn more</link>.",values:{link:e=>(0,n.Y)(l.o.Link,{componentId:"mlflow.serving.ai_gateway_config.rate_limits.endpoint_learn_more",openInNewTab:!0,href:w[d],children:e})}})})},qpmInputComponentId:"mlflow.serving.ai_gateway_config.rate_limits.endpoint_qpm_limit_input",resetComponentId:"mlflow.serving.ai_gateway_config.rate_limits.endpoint_rate_limit_reset_link",tpmInputComponentId:"mlflow.serving.ai_gateway_config.rate_limits.endpoint_tpm_limit_input"};return(0,n.Y)(C,{rateLimit:e,focusStates:t,onFocus:i,onBlur:r,onQpmChange:a,onTpmChange:s,onReset:c,cloud:d,config:u,isTokenBasedRateLimitsEnabled:p})},$=({userRateLimit:e,focusStates:t,onFocus:i,onBlur:r,onQpmChange:a,onTpmChange:s,onReset:c,cloud:d,isTokenBasedRateLimitsEnabled:p})=>{let u={key:"user-default-row",focusKey:"user",tagProps:{componentId:"mlflow.serving.ai_gateway_config.rate_limits.user_default_tag",icon:(0,n.Y)(f.A,{}),text:(0,n.Y)(o.A,{id:"rmzFV4",defaultMessage:"User (Default)"})},tooltipProps:{componentId:"mlflow.serving.ai_gateway_config.rate_limits.user_default_tooltip",content:(0,n.Y)("span",{children:(0,n.Y)(o.A,{id:"MBkIRU",defaultMessage:"A per-user default rate limit applied to users with permissions on the endpoint, unless exceptions are specified for a user, group, or service principal. <link>Learn more</link>.",values:{link:e=>(0,n.Y)(l.o.Link,{componentId:"mlflow.serving.ai_gateway_config.rate_limits.user_learn_more",openInNewTab:!0,href:w[d],children:e})}})})},qpmInputComponentId:"mlflow.serving.ai_gateway_config.rate_limits.user_qpm_limit_input",resetComponentId:"mlflow.serving.ai_gateway_config.rate_limits.user_rate_limit_reset_link",tpmInputComponentId:"mlflow.serving.ai_gateway_config.rate_limits.user_tpm_limit_input"};return(0,n.Y)(C,{rateLimit:e,focusStates:t,onFocus:i,onBlur:r,onQpmChange:a,onTpmChange:s,onReset:c,cloud:d,config:u,isTokenBasedRateLimitsEnabled:p})},P=({subject:e,subjectQpmValues:t,subjectTpmValues:i,focusStates:r,onFocus:o,onBlur:s,onQpmChange:l,onTpmChange:d,onRemove:p,isTokenBasedRateLimitsEnabled:m})=>{let{theme:g}=(0,a.wn)(),x=(e.kind||"").toLowerCase(),I=e.title||e.displayName||e.name||e.applicationId||e.id||"Unknown";return(0,n.FD)(c.H,{children:[(0,n.Y)(u.n,{css:{verticalAlign:"middle",height:"auto",flex:m?12:13},children:(0,n.FD)("div",{css:{display:"flex",alignItems:"center",gap:8,minHeight:"48px",width:"100%"},children:[(0,n.FD)("div",{css:{flexShrink:0,display:"flex",alignItems:"center"},children:["user"===x&&(0,n.Y)(f.A,{style:{fontSize:18,color:g.colors.textSecondary}}),"group"===x&&(0,n.Y)(h.A,{style:{fontSize:18,color:g.colors.textSecondary}}),"serviceprincipal"===x&&(0,n.Y)(_.A,{style:{fontSize:18,color:g.colors.textSecondary}})]}),(0,n.Y)("div",{css:{minWidth:0,flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},title:I,children:I})]})}),(0,n.Y)(u.n,{css:{textAlign:"left",verticalAlign:"middle",height:"auto",flex:4},children:(0,n.Y)("div",{css:{display:"flex",alignItems:"center",justifyContent:"flex-start",minHeight:"48px"},children:(0,n.Y)(A,{value:t[e.key]??void 0,onChange:t=>l(e.key,t),componentId:"mlflow.serving.ai_gateway_config.rate_limits.subject_input",focused:!!r[e.key],onFocus:()=>o(e.key),onBlur:()=>s(e.key)})})}),m&&(0,n.Y)(u.n,{css:{textAlign:"left",verticalAlign:"middle",height:"auto",flex:4},children:(0,n.Y)("div",{css:{display:"flex",alignItems:"center",justifyContent:"flex-start",minHeight:"48px"},children:(0,n.Y)(b,{value:i[e.key]??void 0,onChange:t=>d(e.key,t),componentId:"codegen_no_dynamic_mlflow_web_js_src_endpoints_components_endpoint_form_long_form_sections_aigatewayratelimitscomponents_598",focused:!!r[`${e.key}_tpm`],onFocus:()=>o(`${e.key}_tpm`),onBlur:()=>s(`${e.key}_tpm`)})})}),(0,n.Y)(u.n,{css:{verticalAlign:"middle",height:"auto",flex:m?2:3,textAlign:"center"},children:(0,n.Y)("div",{css:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"48px"},children:(0,n.Y)(y.$n,{componentId:"mlflow.serving.ai_gateway_config.rate_limits.remove_subject",size:"small",icon:(0,n.Y)(v.A,{}),"aria-label":`Remove rate limit for ${I}`,onClick:()=>p(e.key)})})})]},e.key)},R=({selectedSubject:e,selectedSubjectObj:t,selectedSubjectQpm:i,selectedSubjectTpm:r,onSubjectUpdate:l,onQpmChange:d,onTpmChange:p,onAdd:m,disabledFn:g,isTokenBasedRateLimitsEnabled:f})=>{let{theme:h}=(0,a.wn)();return(0,n.FD)(c.H,{children:[(0,n.Y)(u.n,{css:{verticalAlign:"middle",height:"auto",flex:f?12:13},children:(0,n.Y)("div",{css:{display:"flex",alignItems:"center",minHeight:"48px"},children:(0,n.Y)(x.T,{value:e,onUpdate:l,css:{width:"100%"},disabledFn:g,placeholder:"Select user, group, or service principal"})})}),(0,n.Y)(u.n,{css:{textAlign:"left",verticalAlign:"middle",height:"auto",flex:4},children:(0,n.Y)("div",{css:{display:"flex",alignItems:"center",justifyContent:"flex-start",minHeight:"48px"},children:(0,n.Y)(s.p,{componentId:"mlflow.serving.ai_gateway_config.rate_limits.subject_add_qpm_input",type:"number",min:0,value:i,placeholder:"No limit",onChange:({target:e})=>d(e.value),css:{width:96,"::placeholder":{color:h.colors.textSecondary}}})})}),f&&(0,n.Y)(u.n,{css:{textAlign:"left",verticalAlign:"middle",height:"auto",flex:4},children:(0,n.Y)("div",{css:{display:"flex",alignItems:"center",justifyContent:"flex-start",minHeight:"48px"},children:(0,n.Y)(s.p,{componentId:"mlflow.serving.ai_gateway_config.rate_limits.subject_add_tpm_input",type:"number",min:0,value:r,placeholder:"No limit",onChange:({target:e})=>p(e.value),css:{width:96,"::placeholder":{color:h.colors.textSecondary}}})})}),(0,n.Y)(u.n,{css:{verticalAlign:"middle",height:"auto",flex:f?2:3,textAlign:"center"},children:(0,n.Y)("div",{css:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"48px"},children:(0,n.Y)(y.$n,{componentId:"mlflow.serving.ai_gateway_config.rate_limits.add_subject_button",type:"primary",onClick:m,disabled:!t||!i&&!r,children:(0,n.Y)(o.A,{id:"VSnkg0",defaultMessage:"Add"})})})})]},"add-subject-row")}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/70543.764bc901f0.chunk.js.map