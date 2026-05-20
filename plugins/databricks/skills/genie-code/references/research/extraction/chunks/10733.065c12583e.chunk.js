"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[10733],{30302:(e,t,r)=>{r.d(t,{Du:()=>o,I$:()=>l,mk:()=>c});var i=r(610435);r(692738);var n=r(342411),a=r(375001),s=r(889885);let l=({id:e,email:t,isIndirect:r,kind:i})=>{if(r)return{isDeleteDisabled:!0,disabledDeleteReason:"user"===i?d.indirectUserReason:d.indirectServicePrincipalReason};if(!e)return{isDeleteDisabled:!0,disabledDeleteReason:d.externalUserReason};if(Number(e)===(0,s.FI)("userId"))return{isDeleteDisabled:!0,disabledDeleteReason:d.ownUserReason};if(!e||!t)return{isDeleteDisabled:!0};return{isDeleteDisabled:!1}},o=({groupName:e,isIndirect:t})=>{if(e&&a.K.includes(e))return{isDeleteDisabled:!0,disabledDeleteReason:d.systemReservedGroup};if(t)return{isDeleteDisabled:!0,disabledDeleteReason:d.indirectGroupReason};return{isDeleteDisabled:!1}},c=(e,t,r)=>r&&!e&&!!t,d={indirectUserReason:(0,i.Y)(n.sA,{id:"8RR+5f",defaultMessage:"User assigned through a group cannot be deleted"}),indirectGroupReason:(0,i.Y)(n.sA,{id:"Eb0otX",defaultMessage:"Group assigned through a group cannot be deleted"}),indirectServicePrincipalReason:(0,i.Y)(n.sA,{id:"xyUu4M",defaultMessage:"Service principal assigned through a group cannot be deleted"}),externalUserReason:(0,i.Y)(n.sA,{id:"jNNKdL",defaultMessage:"This user cannot be removed from the workspace. The user has access via a parent group from EntraId."}),ownUserReason:(0,i.Y)(n.sA,{id:"BqK1oo",defaultMessage:"Cannot delete yourself"}),systemReservedGroup:(0,i.Y)(n.sA,{id:"5ywO4c",defaultMessage:"Cannot delete system reserved group"})}},50799:(e,t,r)=>{r.d(t,{c:()=>l});var i=r(610435);r(692738);var n=r(342411),a=r(829339),s=r(528366);function l({title:e,...t}){let r=(0,n.tz)().formatMessage({id:"EKXooY",defaultMessage:"Settings"});return(0,a.r)({title:`${e} - ${r}`}),(0,i.Y)(s.c,{...t,id:"content",title:r})}},90710:(e,t,r)=>{r.d(t,{Y:()=>p});var i=r(610435),n=r(956935),a=r(692738),s=r(497895),l=r(861166),o=r(997791),c=r(639712),d=r(123252);let p=({breadcrumbs:e,title:t,titleAddOns:r,dangerouslyAppendEmotionCSS:p,buttons:u,children:m,titleElementLevel:g,allowTitleWrap:f=!0,...I})=>{let y,{classNamePrefix:A,theme:b}=(0,s.wn)(),h=Array.isArray(u)?u:u?[u]:[],v={titleWrapper:(0,n.AH)({display:"flex",alignItems:"flex-start",justifyContent:"space-between",flexWrap:f?"wrap":"nowrap",rowGap:b.spacing.sm,...0===h.length&&{paddingTop:e?0:b.spacing.xs/2,paddingBottom:b.spacing.xs/2}}),breadcrumbWrapper:(0,n.AH)({lineHeight:b.typography.lineHeightBase,marginBottom:b.spacing.xs}),title:(0,n.AH)({marginTop:0,marginBottom:"0 !important",alignSelf:"stretch",...!f&&{flex:1,minWidth:0}}),titleIfOtherElementsPresent:(0,n.AH)({marginTop:2}),buttonContainer:(0,n.AH)({marginLeft:8}),titleAddOnsWrapper:(0,n.AH)({display:"inline-flex",verticalAlign:"middle",alignItems:"center",flexWrap:"wrap",marginLeft:b.spacing.sm,gap:b.spacing.xs})};return(0,i.FD)("div",{...(0,d.VG)(),css:[(y={[`.${A}-breadcrumb`]:{lineHeight:b.typography.lineHeightBase}},(0,n.AH)((0,c.dg)(y))),p],...I,children:[e&&(0,i.Y)("div",{css:v.breadcrumbWrapper,children:e}),(0,i.FD)("div",{css:v.titleWrapper,children:[(0,i.FD)(o.h,{level:2,elementLevel:g,css:[v.title,(u||e)&&v.titleIfOtherElementsPresent],children:[t,r&&(0,i.Y)("span",{css:v.titleAddOnsWrapper,children:r})]}),u&&(0,i.Y)("div",{css:v.buttonContainer,children:(0,i.Y)(l.$,{dangerouslySetAntdProps:{wrap:!0},size:8,children:h.filter(Boolean).map((e,t)=>{let r=`dubois-header-button-${t}`;return a.isValidElement(e)?a.cloneElement(e,{key:e.key||r}):(0,i.Y)(a.Fragment,{children:e},r)})})})]})]})}},156443:(e,t,r)=>{r.d(t,{z:()=>c});var i=r(610435);r(692738);var n=r(814510),a=r(382908),s=r(342411),l=r(217985);let o={WORKSPACE_SETTINGS:{link:null,display:(0,i.Y)(s.sA,{id:"uUw8ad",defaultMessage:"Workspace settings"}),trackingControlId:null},IDENTITY_AND_ACCESS:{link:"/settings/workspace/identity-and-access/",display:(0,i.Y)(s.sA,{id:"LqFZSz",defaultMessage:"Identity and access"}),trackingControlId:"breadcrumbs.identity_and_access"},INSTANCE_PROFILES:{link:"/settings/workspace/security/instance-profiles/",display:(0,i.Y)(s.sA,{id:"VU6gxF",defaultMessage:"Instance profiles"}),trackingControlId:"breadcrumbs.instance_profiles"},USERS:{link:"/settings/workspace/identity-and-access/users",display:(0,i.Y)(s.sA,{id:"47PbSj",defaultMessage:"Users"}),trackingControlId:"breadcrumbs.users"},GROUPS:{link:"/settings/workspace/identity-and-access/groups",display:(0,i.Y)(s.sA,{id:"4fcJfT",defaultMessage:"Groups"}),trackingControlId:"breadcrumbs.groups"},SERVICE_PRINCIPALS:{link:"/settings/workspace/identity-and-access/service-principals",display:(0,i.Y)(s.sA,{id:"w8kQZW",defaultMessage:"Service principals"}),trackingControlId:"breadcrumbs.service_principals"},SECURITY:{link:"/settings/workspace/security/",display:(0,i.Y)(s.sA,{id:"e0raXN",defaultMessage:"Security"}),trackingControlId:"breadcrumbs.security"},NOTIFICATIONS:{link:"/settings/workspace/notifications/",display:(0,i.Y)(s.sA,{id:"mFnLw7",defaultMessage:"Notifications"}),trackingControlId:"breadcrumbs.notifications"},COMPUTE:{link:"/settings/workspace/compute/",display:(0,i.Y)(s.sA,{id:"Kk2C/3",defaultMessage:"Compute"}),trackingControlId:"breadcrumbs.compute"},ADVANCED:{link:"/settings/workspace/advanced/",display:(0,i.Y)(s.sA,{id:"FJAlZA",defaultMessage:"Advanced"}),trackingControlId:"breadcrumbs.advanced"},APPEARANCE:{link:"/settings/workspace/appearance/",display:(0,i.Y)(s.sA,{id:"XdWR+h",defaultMessage:"Appearance"}),trackingControlId:"breadcrumbs.appearance"},FLEX:{link:"/settings/workspace/flex/",display:(0,i.Y)(s.sA,{id:"8vzJpP",defaultMessage:"Flex"}),trackingControlId:"breadcrumbs.flex"},INIT_SCRIPTS:{link:"/settings/workspace/compute/global-init-scripts",display:(0,i.Y)(s.sA,{id:"MJooaf",defaultMessage:"Init scripts"}),trackingControlId:"breadcrumbs.initScripts"}},c=({breadcrumbIds:e,originId:t,additionalBreadcrumbs:r=[]})=>(0,i.FD)(n.Q,{children:[e.map(e=>{let{link:t,display:r,trackingControlId:s}=o[e];return(0,i.Y)(n.Q.Item,{children:t&&s?(0,i.Y)(l.N,{asChild:!0,to:t,componentId:"codegen_no_dynamic_webapp_web_js_settings_components_breadcrumbitems_139",children:(0,i.Y)(a.o.Link,{componentId:"codegen_webapp_js_settings_components_breadcrumbitems.tsx_131",children:r})}):r},"trackingControlId")}),r]})},375001:(e,t,r)=>{r.d(t,{E:()=>n,K:()=>i});let i=["users","admins","externalUsers"],n=["account users","DB - RESERVED - account admins","DB - RESERVED - Databricks support"]},465082:(e,t,r)=>{r.d(t,{A:()=>o});var i=r(610435),n=r(692738),a=r(375214);function s(e){return(0,i.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,i.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a3.25 3.25 0 1 0 0 6.5A3.25 3.25 0 0 0 8 1M6.25 4.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M8 9a8.74 8.74 0 0 0-6.836 3.287.75.75 0 0 0-.164.469v1.494c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75v-1.494a.75.75 0 0 0-.164-.469A8.74 8.74 0 0 0 8 9m-5.5 4.5v-.474A7.23 7.23 0 0 1 8 10.5c2.2 0 4.17.978 5.5 2.526v.474z",clipRule:"evenodd"})})}let l=(0,n.forwardRef)((e,t)=>(0,i.Y)(a.I,{ref:t,...e,component:s}));l.displayName="UserIcon";let o=l},528366:(e,t,r)=>{r.d(t,{c:()=>c});var i=r(610435);r(692738);var n=r(497895),a=r(764236);function s({"aria-labelledby":e,children:t,height:r,id:n,role:a="region"}){return(0,i.Y)("div",{"aria-labelledby":e,css:{overflow:"auto","@media (prefers-reduced-motion: no-preference)":{scrollBehavior:"smooth"},"&:focus:not(:focus-visible)":{outline:"none"}},id:n,role:a,style:{height:r},tabIndex:0,children:t})}var l=r(754275);let o={full:void 0,slim:"80ch"};function c({children:e,renderHeader:t,id:r,size:d="slim",title:p,showSpacingUnderHeader:u=!0}){let{theme:m}=(0,n.wn)(),g=(0,l.B)(),f=(0,l.B)();return(0,i.FD)(s,{"aria-labelledby":`${g} ${f}`,height:"100%",id:r,children:[(0,i.Y)("span",{hidden:!0,id:g,children:p}),(0,i.FD)("div",{css:{boxSizing:"content-box",maxWidth:o[d],marginInline:"auto",padding:m.spacing.lg},children:[t(f),u&&(0,i.FD)(i.FK,{children:[(0,i.Y)(a.h,{}),(0,i.Y)(a.h,{})]}),(0,i.Y)("div",{css:{display:"flex",flexDirection:"column",gap:3*m.spacing.md},children:e})]})]})}},537287:(e,t,r)=>{r.d(t,{XI:()=>d,ZN:()=>c,cd:()=>n,wL:()=>o});var i=r(993533);function n(e){return!!e&&e!==i.ezR.NONE&&e!==i.ezR.UNSPECIFIED}let a={[i.ezR.GPU_1xA10]:"A10",[i.ezR.GPU_1xH100]:"1xH100",[i.ezR.GPU_8xH100]:"H100"},s={[i.ezR.GPU_1xA10]:"GPU 1xA10",[i.ezR.GPU_1xH100]:"GPU 1xH100",[i.ezR.GPU_8xH100]:"GPU 8xH100"},l=Object.fromEntries(Object.entries(a).map(([e,t])=>[t,e]));function o(e){if(!n(e))return null;return s[e]??null}function c(e){if(!e)return null;return l[e]??null}function d(e){return null!=e&&e in a?e:c(e)}},624912:(e,t,r)=>{r.d(t,{l:()=>l});var i,n=r(610435),a=r(692738),s=r(488655);let l=(i=r(550385).T_,function(e,t){return function(r){let l=(0,s.Zp)(),o=i.canView(e);return a.useEffect(()=>{o||l("/")},[o,l]),o?(0,n.Y)(t,{...r}):null}})},655841:(e,t,r)=>{r.d(t,{GX:()=>p,HA:()=>a,Ij:()=>d,U8:()=>n,_:()=>s,e:()=>o,fq:()=>u,n$:()=>c,r4:()=>l});var i=r(141078);let n=(0,i.J1)`
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
`,a=(0,i.J1)`
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
  ${n}
`,s=(0,i.J1)`
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
  ${n}
`,l=(0,i.J1)`
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
  ${n}
`,o=(0,i.J1)`
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
  ${n}
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
  ${n}
`,d=(0,i.J1)`
  mutation GetOrCreateIdpUser($input: AclmanagerIdentityapiGetOrCreateUserRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateUser(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,p=(0,i.J1)`
  mutation GetOrCreateIdpGroup($input: AclmanagerIdentityapiGetOrCreateGroupRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateGroup(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,u=(0,i.J1)`
  mutation GetOrCreateIdpServicePrincipal($input: AclmanagerIdentityapiGetOrCreateServicePrincipalRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateServicePrincipal(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`},777517:(e,t,r)=>{r.d(t,{A:()=>o});var i=r(610435),n=r(692738),a=r(375214);function s(e){return(0,i.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,i.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 0a.75.75 0 0 1 .75.75V3h5.5a.75.75 0 0 1 .75.75V6h.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75H15v2.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V12H.75a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 .75 6H1V3.75A.75.75 0 0 1 1.75 3h5.5V.75A.75.75 0 0 1 8 0M2.5 4.5v9h11v-9zM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6.25 2.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"})})}let l=(0,n.forwardRef)((e,t)=>(0,i.Y)(a.I,{ref:t,...e,component:s}));l.displayName="RobotIcon";let o=l},783992:(e,t,r)=>{r.d(t,{g:()=>s});var i=r(326081),n=r(141078);let a=(0,n.J1)`
  query CheckPolicyQuery($input: AccesscontrolOrgaclpermissionIsPermittedRequestInput!)
  @component(name: "LegacyDataAccess.TableACLs") {
    accesscontrolOrgaclpermissionIsPermitted(input: $input) {
      apiError {
        code
        message
      }
      evaluationResult {
        isAccessEventPermitted
      }
    }
  }
`;function s(e,t=!1){return(0,n.IT)(a,{variables:e,skip:(0,i.G)()||t})}},791229:(e,t,r)=>{r.d(t,{U:()=>l,a:()=>s});var i=r(537287),n=r(993533),a=r(521200);let s=e=>{if(!e)return!1;{let{kind:t,enableServerlessCompute:r,enable_serverless_compute:i}=e;if(t===n.ch$.SERVERLESS_PREVIEW||t===n.ch$.SERVERLESS_REPL_VM)return!0;if(void 0!==r)return r;if(void 0!==i)return i}if("attrs"in e){let{kind:t,enableServerlessCompute:r}=e.attrs??{};return t===n.ch$.SERVERLESS_PREVIEW||t===n.ch$.SERVERLESS_REPL_VM||r}if("attributes"in e){let{kind:t,enableServerlessCompute:r}=e.attributes??{};return t===n.ch$.SERVERLESS_PREVIEW||t===n.ch$.SERVERLESS_REPL_VM||r}};function l(e,t){return(0,a.Qb)()&&!!s(e)&&(0,i.cd)(t)}},814510:(e,t,r)=>{let i;r.d(t,{Q:()=>p});var n=r(610435),a=r(956935),s=r(930125),l=r(429608),o=r(497895),c=r(955210),d=r(123252);let p=((i=({dangerouslySetAntdProps:e,includeTrailingCaret:t=!0,...r})=>{let{theme:p,classNamePrefix:u}=(0,o.wn)(),m=`.${u}-breadcrumb-separator`,g=(0,a.AH)({"span:last-child a":{color:p.colors.primary,":hover, :focus":{color:"#2272B4"}},a:{"&:focus-visible":{outlineColor:`${p.colors.actionDefaultBorderFocus} !important`,outlineStyle:"auto !important"}},[m]:{fontSize:p.general.iconFontSize,"& .anticon":{fontSize:13}},"& > span":{display:"inline-flex",alignItems:"center"}});return(0,n.Y)(l.wC,{children:(0,n.FD)(s.A,{...(0,d.VG)(),separator:(0,n.Y)(c.A,{}),...r,...e,css:(0,a.AH)((0,l.Cx)(p.options.enableAnimation),g),children:[r.children,t&&r.children&&(0,n.Y)(i.Item,{children:" "})]})})}).Item=s.A.Item,i.Separator=s.A.Separator,i)},866941:(e,t,r)=>{r.d(t,{r:()=>l});var i=r(610435);r(692738);var n=r(497895),a=r(90710),s=r(382908);function l({breadcrumbs:e,heading:t,subheading:r,showBorderUnderHeader:o=!0}){let{theme:c}=(0,n.wn)();return(0,i.FD)("header",{css:o?{borderBlockEnd:`1px solid ${c.colors.border}`,paddingBlockEnd:c.spacing.md}:{},children:[(0,i.Y)(a.Y,{breadcrumbs:e,title:t}),r&&(0,i.Y)(s.o.Paragraph,{color:"secondary",withoutMargins:!0,children:r})]})}},872899:(e,t,r)=>{r.d(t,{gb:()=>u,Im:()=>g,Tn:()=>m});var i=r(483588),n=r(441535),a=r(686560),s=r(141078),l=r(778529),o=r.n(l),c=r(496720);let d="aclmanagerAimcontrolpolicyGetAimControlPolicy",p=(0,s.J1)`
  query GetAimControlPolicy($input: AclmanagerAimcontrolpolicyGetAimControlPolicyRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerAimcontrolpolicyGetAimControlPolicy(input: $input) {
      state
      apiError {
        message
      }
      oktaIdpConfig {
        oktaOrgUrl
        clientId
      }
      entraIdIdpConfig {
        tenantId
        entraId1PAuth {
          __typename
        }
        entraId3PFederatedCredentialAuth {
          clientId
          issuerUrl
          subjectId
        }
      }
    }
  }
`,u=e=>(0,s.IT)(p,e);(({query:e,response:t,variables:r})=>({debug:i=!1,graphQLErrors:n,networkError:a,override:l,result:d,variables:p,...u}={})=>{let m=(0,c.h1)({},r,p),g=(0,c.h1)({},t,l);return i&&console.log(`
Type: mockResponse

Operation: ${(0,s.n4)(e)}

Variables: ${(0,c.GP)(m)}

Response: ${(0,c.GP)(g)}

GraphQL Errors: ${(0,c.GP)(n?.map(c.XY))}

Network Error: ${(0,c.GP)(a?(0,c.XY)(a):void 0)}

`),{error:a?(0,c.XY)(a):void 0,request:{query:e,variables:m},result:o()(d)?{data:g,errors:n?.map(e=>(0,c.XY)(e))??void 0}:d,...u}})({query:p,response:{[d]:{__typename:"AclmanagerAimcontrolpolicyAimControlPolicy",state:i.zYk.ALLOW_ALL,apiError:null,oktaIdpConfig:null,entraIdIdpConfig:null}},variables:{input:{}}});let m=(e,t)=>{if(!t)return;e.writeQuery({query:p,variables:{input:{}},data:{[d]:{...t,apiError:null}}})},g=()=>{let e=0===(0,a.d)("orgId_new",0)||(0,a.d)("identityFederationEnabled",!1),t=(0,n.W)("databricks.identity.seamless.seamlessOnboardingAvailable",!0),{data:r,loading:s,error:l}=u({variables:{input:{}},skip:!t||!e});if(!e||!t)return{isEnabled:!1,loading:!1,error:void 0};let o=r?.aclmanagerAimcontrolpolicyGetAimControlPolicy,c=!!o?.apiError;return{isEnabled:!!(!l&&!c&&!s&&o?.state!==null&&o?.state!==void 0&&o?.state!==i.zYk.DISABLED&&o?.state!==i.zYk.STATE_UNSPECIFIED),loading:s,error:l||(c?{message:o?.apiError?.message??"Unknown error"}:void 0)}}},913574:(e,t,r)=>{r.d(t,{p:()=>i});let i={group:(e,t=!1)=>`/settings/workspace/identity-and-access/groups/${e}${t?"?isExternal=true":""}`,groupPermissions:(e,t=!1)=>`/settings/workspace/identity-and-access/groups/${e}/permissions${t?"?isExternal=true":""}`,groupGitIntegration:(e,t=!1)=>`/settings/workspace/identity-and-access/groups/${e}/git-integration${t?"?isExternal=true":""}`,users:()=>"/settings/workspace/identity-and-access/users",user:(e,t=!1)=>`/settings/workspace/identity-and-access/users/${e}${t?"?isExternal=true":""}`,servicePrincipal:(e,t=!1)=>`/settings/workspace/identity-and-access/service-principals/${e}${t?"?isExternal=true":""}`}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/10733.065c12583e.chunk.js.map