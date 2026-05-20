"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[63958],{100666:(e,t,r)=>{r.d(t,{Ek:()=>a,_x:()=>n,jQ:()=>i});let a=e=>({op:"add",path:"members",value:e.map(e=>({value:e}))}),n=e=>({op:"remove",path:`members[value eq "${e}"]`}),i=e=>({op:"replace",path:"displayName",value:e})},276422:(e,t,r)=>{r.d(t,{Uj:()=>o});var a=r(16778),n=r.n(a),i=r(928516),s=r.n(i);class o{static USER_SCHEMA="urn:ietf:params:scim:schemas:core:2.0:User";static SERVICE_PRINCIPAL_SCHEMA="urn:ietf:params:scim:schemas:core:2.0:ServicePrincipal";static GROUP_SCHEMA="urn:ietf:params:scim:schemas:core:2.0:Group";static PATCH_OP_SCHEMA="urn:ietf:params:scim:api:messages:2.0:PatchOp";static DATABRICKS_GROUP_EXTENSION_SCHEMA="urn:ietf:params:scim:schemas:extension:databricks:2.0:Group";static getRequestLevelDenormalizer=(e=["operations"])=>({requestLevelDenormalizer:t=>{if("databricksScimGroupExtension"===t)return o.DATABRICKS_GROUP_EXTENSION_SCHEMA;return e.includes(t)?n()(t):s()(t)}});static getUpdateDisplayNameOperation=e=>({op:"replace",path:"displayName",value:[{value:e}]});static getUpdateUserNamesOperation=(e,t)=>({op:"replace",path:e,value:t});static getUpdateRoleOperation=(e,t)=>t?{op:"add",path:"roles",value:[{value:e}]}:{op:"remove",path:`roles[value eq "${e}"]`};static getFilterQuery=(e,t,r)=>`${e} ${"substringMatch"===t?"co":"eq"} "${r}"`}},391249:(e,t,r)=>{r.d(t,{E_:()=>d,G8:()=>y,L3:()=>I,Nu:()=>b,Nx:()=>g,OQ:()=>s,R8:()=>A,Td:()=>p,VL:()=>m,Vw:()=>l,XT:()=>o,Y5:()=>G,Z5:()=>k,b1:()=>S,bH:()=>$,c8:()=>f,gJ:()=>P,gd:()=>v,jb:()=>c,jy:()=>T,nA:()=>E,p4:()=>C,rz:()=>u,vt:()=>R});var a=r(692738),n=r(494105),i=r(858383);let s=()=>{let{pathname:e}=(0,i.zy)();return -1!==e.search(/^\/user-management\/groups\/[0-9a-z]+\/members/)},o=()=>{let{pathname:e,goToRoute:t}=(0,n.S)();return{pathname:e,goToRoute:(0,a.useCallback)(()=>t("/user-management/users"),[t])}},l=()=>{let{pathname:e,goToRoute:t}=(0,n.S)();return{pathname:e,goToRoute:(0,a.useCallback)(()=>t("/user-management/users/add"),[t])}},u=()=>{let{pathname:e,goToRoute:t}=(0,n.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/users/${e}`),[t])}},p=()=>{let{pathname:e,goToRoute:t}=(0,n.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/users/${e}/roles`),[t])}},c=()=>{let{pathname:e,goToRoute:t}=(0,n.S)();return{pathname:e,goToRoute:(0,a.useCallback)(()=>t("/user-management/groups"),[t])}},m=()=>{let{pathname:e,goToRoute:t}=(0,n.S)();return{pathname:e,goToRoute:(0,a.useCallback)(()=>t("/user-management/groups/add"),[t])}},g=()=>{let{pathname:e,goToRoute:t}=(0,n.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/groups/${e}/members`),[t])}},d=()=>{let{pathname:e,goToRoute:t}=(0,n.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/groups/${e}/information`),[t])}},I=()=>{let{pathname:e,goToRoute:t}=(0,n.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/groups/${e}/roles`),[t])}},y=()=>{let{pathname:e,goToRoute:t}=(0,n.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/groups/${e}/permissions`),[t])}},$=()=>{let{pathname:e,goToRoute:t}=(0,n.S)();return{pathname:e,goToRoute:(0,a.useCallback)(()=>t("/user-management/serviceprincipals/add"),[t])}},A=()=>{let{pathname:e,goToRoute:t}=(0,n.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/serviceprincipals/${e}/info`),[t])}},S=()=>{let{pathname:e,goToRoute:t}=(0,n.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/serviceprincipals/${e}/credentials-and-secrets`),[t])}},b=()=>{let{pathname:e,goToRoute:t}=(0,n.S)();return{pathname:e,goToRoute:(0,a.useCallback)(()=>t("/user-management/serviceprincipals"),[t])}},C=()=>{let{pathname:e,goToRoute:t}=(0,n.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/serviceprincipals/${e}/roles`),[t])}},f=()=>{let{pathname:e,goToRoute:t}=(0,n.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/groups/${e}/members`,{isExternal:"true"}),[t])}},k=()=>{let{pathname:e,goToRoute:t}=(0,n.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/groups/${e}/information`,{isExternal:"true"}),[t])}},v=()=>{let{pathname:e,goToRoute:t}=(0,n.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/groups/${e}/roles`,{isExternal:"true"}),[t])}},E=()=>{let{pathname:e,goToRoute:t}=(0,n.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/users/${e}`,{isExternal:"true"}),[t])}},G=()=>{let{pathname:e,goToRoute:t}=(0,n.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/users/${e}/roles`,{isExternal:"true"}),[t])}},T=()=>{let{pathname:e,goToRoute:t}=(0,n.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/serviceprincipals/${e}/info`,{isExternal:"true"}),[t])}},P=()=>{let{pathname:e,goToRoute:t}=(0,n.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/serviceprincipals/${e}/permissions`),[t])}},R=()=>{let{pathname:e,goToRoute:t}=(0,n.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/groups/${e}/permissions`,{isExternal:"true"}),[t])}}},655841:(e,t,r)=>{r.d(t,{GX:()=>c,HA:()=>i,Ij:()=>p,U8:()=>n,_:()=>s,e:()=>l,fq:()=>m,n$:()=>u,r4:()=>o});var a=r(141078);let n=(0,a.J1)`
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
`,i=(0,a.J1)`
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
`,s=(0,a.J1)`
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
`,o=(0,a.J1)`
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
`,l=(0,a.J1)`
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
`,u=(0,a.J1)`
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
`,p=(0,a.J1)`
  mutation GetOrCreateIdpUser($input: AclmanagerIdentityapiGetOrCreateUserRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateUser(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,c=(0,a.J1)`
  mutation GetOrCreateIdpGroup($input: AclmanagerIdentityapiGetOrCreateGroupRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateGroup(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,m=(0,a.J1)`
  mutation GetOrCreateIdpServicePrincipal($input: AclmanagerIdentityapiGetOrCreateServicePrincipalRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateServicePrincipal(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`},848634:(e,t,r)=>{r.d(t,{a:()=>n});var a=r(441535);let n=()=>{if((0,a.W)("databricks.fe.disableExternalGroupsUi",!1))return!1;let e=(0,a.W)("databricks.fe.showExternalLabel",!1);return(0,a.W)("external_groups",null)??e}},872899:(e,t,r)=>{r.d(t,{gb:()=>m,Im:()=>d,Tn:()=>g});var a=r(483588),n=r(441535),i=r(686560),s=r(141078),o=r(778529),l=r.n(o),u=r(496720);let p="aclmanagerAimcontrolpolicyGetAimControlPolicy",c=(0,s.J1)`
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
`,m=e=>(0,s.IT)(c,e);(({query:e,response:t,variables:r})=>({debug:a=!1,graphQLErrors:n,networkError:i,override:o,result:p,variables:c,...m}={})=>{let g=(0,u.h1)({},r,c),d=(0,u.h1)({},t,o);return a&&console.log(`
Type: mockResponse

Operation: ${(0,s.n4)(e)}

Variables: ${(0,u.GP)(g)}

Response: ${(0,u.GP)(d)}

GraphQL Errors: ${(0,u.GP)(n?.map(u.XY))}

Network Error: ${(0,u.GP)(i?(0,u.XY)(i):void 0)}

`),{error:i?(0,u.XY)(i):void 0,request:{query:e,variables:g},result:l()(p)?{data:d,errors:n?.map(e=>(0,u.XY)(e))??void 0}:p,...m}})({query:c,response:{[p]:{__typename:"AclmanagerAimcontrolpolicyAimControlPolicy",state:a.zYk.ALLOW_ALL,apiError:null,oktaIdpConfig:null,entraIdIdpConfig:null}},variables:{input:{}}});let g=(e,t)=>{if(!t)return;e.writeQuery({query:c,variables:{input:{}},data:{[p]:{...t,apiError:null}}})},d=()=>{let e=0===(0,i.d)("orgId_new",0)||(0,i.d)("identityFederationEnabled",!1),t=(0,n.W)("databricks.identity.seamless.seamlessOnboardingAvailable",!0),{data:r,loading:s,error:o}=m({variables:{input:{}},skip:!t||!e});if(!e||!t)return{isEnabled:!1,loading:!1,error:void 0};let l=r?.aclmanagerAimcontrolpolicyGetAimControlPolicy,u=!!l?.apiError;return{isEnabled:!!(!o&&!u&&!s&&l?.state!==null&&l?.state!==void 0&&l?.state!==a.zYk.DISABLED&&l?.state!==a.zYk.STATE_UNSPECIFIED),loading:s,error:o||(u?{message:l?.apiError?.message??"Unknown error"}:void 0)}}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/63958.4c5063de95.chunk.js.map