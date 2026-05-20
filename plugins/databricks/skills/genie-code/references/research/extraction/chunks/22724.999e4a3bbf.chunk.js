(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[22724],{26093:(e,t,n)=>{"use strict";n.d(t,{x:()=>r});var a=n(141078),i=n(655841);let r=e=>(0,a.n_)(i.Ij,e)},123061:(e,t,n)=>{"use strict";n.d(t,{$:()=>r});var a=n(141078),i=n(655841);let r=e=>(0,a.n_)(i.fq,e)},138909:(e,t,n)=>{var a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"UpdateAccountGroupMutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"accountId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"groupId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"AccountConsoleScimUpdateOperationInput"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"requestLevelDenormalizer"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"RestFunction"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"accountConsoleAccountGroupUpdate"},arguments:[{kind:"Argument",name:{kind:"Name",value:"accountId"},value:{kind:"Variable",name:{kind:"Name",value:"accountId"}}},{kind:"Argument",name:{kind:"Name",value:"groupId"},value:{kind:"Variable",name:{kind:"Name",value:"groupId"}}},{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[{kind:"Directive",name:{kind:"Name",value:"rest"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"StringValue",value:"ScimGroup",block:!1}},{kind:"Argument",name:{kind:"Name",value:"path"},value:{kind:"StringValue",value:"/accounts/{args.accountId}/scim/v2/Groups/{args.groupId}",block:!1}},{kind:"Argument",name:{kind:"Name",value:"method"},value:{kind:"StringValue",value:"PATCH",block:!1}},{kind:"Argument",name:{kind:"Name",value:"fieldNameDenormalizer"},value:{kind:"Variable",name:{kind:"Name",value:"requestLevelDenormalizer"}}},{kind:"Argument",name:{kind:"Name",value:"endpoint"},value:{kind:"StringValue",value:"apiV2_1",block:!1}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ScimGroupFragment"},directives:[]}]}}]}}],loc:{start:0,end:543}};a.loc.source={body:'#import "./ScimGroupFragment.gql"\n\nmutation UpdateAccountGroupMutation(\n  $accountId: ID!\n  $groupId: ID!\n  $input: AccountConsoleScimUpdateOperationInput!\n  $requestLevelDenormalizer: RestFunction!\n) {\n  accountConsoleAccountGroupUpdate(accountId: $accountId, groupId: $groupId, input: $input)\n    @rest(\n      type: "ScimGroup"\n      path: "/accounts/{args.accountId}/scim/v2/Groups/{args.groupId}"\n      method: "PATCH"\n      fieldNameDenormalizer: $requestLevelDenormalizer\n      endpoint: "apiV2_1"\n    ) {\n    ...ScimGroupFragment\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};a.definitions=a.definitions.concat(n(309986).definitions.filter(function(e){if("FragmentDefinition"!==e.kind)return!0;var t=e.name.value;if(i[t])return!1;return i[t]=!0,!0}));var r={};function o(e,t){for(var n=0;n<e.definitions.length;n++){var a=e.definitions[n];if(a.name&&a.name.value==t)return a}}a.definitions.forEach(function(e){if(e.name){var t=new Set;!function e(t,n){if("FragmentSpread"===t.kind)n.add(t.name.value);else if("VariableDefinition"===t.kind){var a=t.type;"NamedType"===a.kind&&n.add(a.name.value)}t.selectionSet&&t.selectionSet.selections.forEach(function(t){e(t,n)}),t.variableDefinitions&&t.variableDefinitions.forEach(function(t){e(t,n)}),t.definitions&&t.definitions.forEach(function(t){e(t,n)})}(e,t),r[e.name.value]=t}}),e.exports=a,e.exports.UpdateAccountGroupMutation=function(e,t){var n={kind:e.kind,definitions:[o(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var a=r[t]||new Set,i=new Set,s=new Set;for(a.forEach(function(e){s.add(e)});s.size>0;){var l=s;s=new Set,l.forEach(function(e){i.has(e)||(i.add(e),(r[e]||new Set).forEach(function(e){s.add(e)}))})}return i.forEach(function(t){var a=o(e,t);a&&n.definitions.push(a)}),n}(a,"UpdateAccountGroupMutation")},276422:(e,t,n)=>{"use strict";n.d(t,{Uj:()=>s});var a=n(16778),i=n.n(a),r=n(928516),o=n.n(r);class s{static USER_SCHEMA="urn:ietf:params:scim:schemas:core:2.0:User";static SERVICE_PRINCIPAL_SCHEMA="urn:ietf:params:scim:schemas:core:2.0:ServicePrincipal";static GROUP_SCHEMA="urn:ietf:params:scim:schemas:core:2.0:Group";static PATCH_OP_SCHEMA="urn:ietf:params:scim:api:messages:2.0:PatchOp";static DATABRICKS_GROUP_EXTENSION_SCHEMA="urn:ietf:params:scim:schemas:extension:databricks:2.0:Group";static getRequestLevelDenormalizer=(e=["operations"])=>({requestLevelDenormalizer:t=>{if("databricksScimGroupExtension"===t)return s.DATABRICKS_GROUP_EXTENSION_SCHEMA;return e.includes(t)?i()(t):o()(t)}});static getUpdateDisplayNameOperation=e=>({op:"replace",path:"displayName",value:[{value:e}]});static getUpdateUserNamesOperation=(e,t)=>({op:"replace",path:e,value:t});static getUpdateRoleOperation=(e,t)=>t?{op:"add",path:"roles",value:[{value:e}]}:{op:"remove",path:`roles[value eq "${e}"]`};static getFilterQuery=(e,t,n)=>`${e} ${"substringMatch"===t?"co":"eq"} "${n}"`}},391249:(e,t,n)=>{"use strict";n.d(t,{E_:()=>g,G8:()=>f,L3:()=>v,Nu:()=>A,Nx:()=>m,OQ:()=>o,R8:()=>y,Td:()=>c,VL:()=>p,Vw:()=>l,XT:()=>s,Y5:()=>R,Z5:()=>$,b1:()=>I,bH:()=>k,c8:()=>b,gJ:()=>G,gd:()=>C,jb:()=>d,jy:()=>T,nA:()=>h,p4:()=>S,rz:()=>u,vt:()=>E});var a=n(692738),i=n(494105),r=n(858383);let o=()=>{let{pathname:e}=(0,r.zy)();return -1!==e.search(/^\/user-management\/groups\/[0-9a-z]+\/members/)},s=()=>{let{pathname:e,goToRoute:t}=(0,i.S)();return{pathname:e,goToRoute:(0,a.useCallback)(()=>t("/user-management/users"),[t])}},l=()=>{let{pathname:e,goToRoute:t}=(0,i.S)();return{pathname:e,goToRoute:(0,a.useCallback)(()=>t("/user-management/users/add"),[t])}},u=()=>{let{pathname:e,goToRoute:t}=(0,i.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/users/${e}`),[t])}},c=()=>{let{pathname:e,goToRoute:t}=(0,i.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/users/${e}/roles`),[t])}},d=()=>{let{pathname:e,goToRoute:t}=(0,i.S)();return{pathname:e,goToRoute:(0,a.useCallback)(()=>t("/user-management/groups"),[t])}},p=()=>{let{pathname:e,goToRoute:t}=(0,i.S)();return{pathname:e,goToRoute:(0,a.useCallback)(()=>t("/user-management/groups/add"),[t])}},m=()=>{let{pathname:e,goToRoute:t}=(0,i.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/groups/${e}/members`),[t])}},g=()=>{let{pathname:e,goToRoute:t}=(0,i.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/groups/${e}/information`),[t])}},v=()=>{let{pathname:e,goToRoute:t}=(0,i.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/groups/${e}/roles`),[t])}},f=()=>{let{pathname:e,goToRoute:t}=(0,i.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/groups/${e}/permissions`),[t])}},k=()=>{let{pathname:e,goToRoute:t}=(0,i.S)();return{pathname:e,goToRoute:(0,a.useCallback)(()=>t("/user-management/serviceprincipals/add"),[t])}},y=()=>{let{pathname:e,goToRoute:t}=(0,i.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/serviceprincipals/${e}/info`),[t])}},I=()=>{let{pathname:e,goToRoute:t}=(0,i.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/serviceprincipals/${e}/credentials-and-secrets`),[t])}},A=()=>{let{pathname:e,goToRoute:t}=(0,i.S)();return{pathname:e,goToRoute:(0,a.useCallback)(()=>t("/user-management/serviceprincipals"),[t])}},S=()=>{let{pathname:e,goToRoute:t}=(0,i.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/serviceprincipals/${e}/roles`),[t])}},b=()=>{let{pathname:e,goToRoute:t}=(0,i.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/groups/${e}/members`,{isExternal:"true"}),[t])}},$=()=>{let{pathname:e,goToRoute:t}=(0,i.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/groups/${e}/information`,{isExternal:"true"}),[t])}},C=()=>{let{pathname:e,goToRoute:t}=(0,i.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/groups/${e}/roles`,{isExternal:"true"}),[t])}},h=()=>{let{pathname:e,goToRoute:t}=(0,i.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/users/${e}`,{isExternal:"true"}),[t])}},R=()=>{let{pathname:e,goToRoute:t}=(0,i.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/users/${e}/roles`,{isExternal:"true"}),[t])}},T=()=>{let{pathname:e,goToRoute:t}=(0,i.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/serviceprincipals/${e}/info`,{isExternal:"true"}),[t])}},G=()=>{let{pathname:e,goToRoute:t}=(0,i.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/serviceprincipals/${e}/permissions`),[t])}},E=()=>{let{pathname:e,goToRoute:t}=(0,i.S)();return{pathname:e,goToRoute:(0,a.useCallback)(e=>t(`/user-management/groups/${e}/permissions`,{isExternal:"true"}),[t])}}},612426:(e,t,n)=>{"use strict";n.r(t),n.d(t,{RouteComponent:()=>L});var a,i=n(610435),r=n(692738),o=n(57793),s=n(276422),l=n(141078),u=n(58275),c=n.n(u),d=n(212500),p=n.n(d),m=n(138909),g=n.n(m),v=n(332098),f=n(332340),k=n(901741),y=n(391249),I=n(339518),A=n(861166),S=n(441535),b=n(205048),$=n(929117),C=n(648782),h=n(720022),R=n(817588),T=n.n(R),G=n(457621),E=n(944552),N=n(342411);let P=()=>{let e=(0,N.tz)();return{accountAdminText:e.formatMessage({id:"RM6qSa",defaultMessage:"Account admin"}),accountAdminDescriptionText:e.formatMessage({id:"IABloi",defaultMessage:"Can manage workspaces, users & groups, cloud resources and settings. This only indicates direct assignment of the role."}),roleNameText:e.formatMessage({id:"DXqpYA",defaultMessage:"Role Name"}),descriptionText:e.formatMessage({id:"pKPbvG",defaultMessage:"Description"})}};var U=((a={})[a.SCIM_USER_ROLE=0]="SCIM_USER_ROLE",a[a.RBAC_ROLE=1]="RBAC_ROLE",a);let _=(0,h.FB)(),x=[],D=({role:e,updateRoleLoading:t,onChangeRoleValue:n})=>(0,i.Y)(E.d,{componentId:"AccountGroupRoles.RoleSwitchCell",label:"\xa0",checked:e.assigned,onChange:t=>n?.(e.key,t),dangerouslySetAntdProps:{loading:t}}),M=({loading:e,onChangeRoleValue:t,principalRoles:n,updateRoleLoading:a})=>{let o=P(),s=(({principalRoles:e})=>{let t=P();return[{key:"account_admin",displayName:t.accountAdminText,description:t.accountAdminDescriptionText,assigned:T()(e,["value","account_admin"]),type:U.SCIM_USER_ROLE}]})({principalRoles:n}),l=r.useCallback(e=>(0,i.Y)(D,{role:e.row.original,updateRoleLoading:a,onChangeRoleValue:t}),[a,t]),u=r.useMemo(()=>[_.accessor("assigned",{header:"",cell:l,meta:{width:"60px"}}),_.accessor("displayName",{header:o.roleNameText,meta:{width:"30%"}}),_.accessor("description",{header:o.descriptionText})],[o.descriptionText,o.roleNameText,l]);return(0,i.Y)(G.X,{columns:u,data:s,enableGlobalFilter:!1,initialSortingState:x,initialPaginationState:{pageIndex:0,pageSize:s.length},loading:e})};function O(e,t,n,a,i,r,o){try{var s=e[r](o),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(a,i)}let L=()=>{let{accountId:e}=(0,v.C6)().getLoadedSessionData(),{groupId:t=""}=(0,C.g)(),n=(0,k.d)(),{goToRoute:a}=(0,y.L3)(),r=(0,S.W)("databricks.fe.identity.preferInternalIdInAccountUrl",!1),{groupId:u,externalId:d,roles:m,loading:h,error:R,provisionGroup:T}=(0,o.H)(t),G=!!d,E=!!u,[N,{loading:P,error:U}]=((e,t={})=>{let[n,a]=(0,l.n_)(g(),t);return[(t,{role:a,assigned:i})=>n({variables:{accountId:e,groupId:t,input:{schemas:[s.Uj.PATCH_OP_SCHEMA],operations:[s.Uj.getUpdateRoleOperation(a,i)]},...s.Uj.getRequestLevelDenormalizer()},refetchQueries:[{query:c(),variables:{accountId:e,groupId:t}}],awaitRefetchQueries:!0}),a]})(e),[_,{loading:x,error:D}]=((e,t,n={})=>{let[a,i]=(0,l.n_)(g(),n);return[(n,{role:i,assigned:r})=>a({variables:{accountId:e,groupId:n,input:{schemas:[s.Uj.PATCH_OP_SCHEMA],operations:[s.Uj.getUpdateRoleOperation(i,r)]},...s.Uj.getRequestLevelDenormalizer()},refetchQueries:[{query:p(),variables:{accountId:e,groupId:t}},{query:c(),variables:{accountId:e,groupId:n}}],awaitRefetchQueries:!0}),i]})(e,t),L=U||D,q=e=>(0,i.Y)(I.F,{componentId:"AccountGroupRoles.ErrorMessageAlert",message:e.message,type:"error"});return h?(0,i.Y)(f.X,{}):(0,i.FD)("div",{className:"db-AccountGroupRoles",css:n.root,children:[(0,i.Y)(b.R,{loading:h,description:$.z.USER_MANAGEMENT_DATA_LOADING}),(0,i.Y)(A.$,{direction:"vertical",size:"large",style:{width:"100%"},children:R?(0,i.Y)(i.FK,{children:R&&q(R)}):(0,i.FD)(A.$,{direction:"vertical",size:"large",style:{width:"100%"},children:[L&&q(L),(0,i.Y)(M,{loading:h,principalRoles:m??null,updateRoleLoading:P||x,onChangeRoleValue:(e,t)=>{var n;return(n=function*(){if(G){let n=E?u:yield T?.();n&&(yield _(n,{role:e,assigned:t}),!E&&r&&a(n))}else yield N(u,{role:e,assigned:t})},function(){var e=this,t=arguments;return new Promise(function(a,i){var r=n.apply(e,t);function o(e){O(r,a,i,o,s,"next",e)}function s(e){O(r,a,i,o,s,"throw",e)}o(void 0)})})()}})]})})]})}},655841:(e,t,n)=>{"use strict";n.d(t,{GX:()=>d,HA:()=>r,Ij:()=>c,U8:()=>i,_:()=>o,e:()=>l,fq:()=>p,n$:()=>u,r4:()=>s});var a=n(141078);let i=(0,a.J1)`
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
`,r=(0,a.J1)`
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
  ${i}
`,o=(0,a.J1)`
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
  ${i}
`,s=(0,a.J1)`
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
  ${i}
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
  ${i}
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
  ${i}
`,c=(0,a.J1)`
  mutation GetOrCreateIdpUser($input: AclmanagerIdentityapiGetOrCreateUserRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateUser(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,d=(0,a.J1)`
  mutation GetOrCreateIdpGroup($input: AclmanagerIdentityapiGetOrCreateGroupRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateGroup(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,p=(0,a.J1)`
  mutation GetOrCreateIdpServicePrincipal($input: AclmanagerIdentityapiGetOrCreateServicePrincipalRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateServicePrincipal(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`},675823:(e,t,n)=>{"use strict";n.d(t,{z:()=>r});var a=n(141078),i=n(655841);let r=e=>(0,a.n_)(i.GX,e)},872899:(e,t,n)=>{"use strict";n.d(t,{gb:()=>p,Im:()=>g,Tn:()=>m});var a=n(483588),i=n(441535),r=n(686560),o=n(141078),s=n(778529),l=n.n(s),u=n(496720);let c="aclmanagerAimcontrolpolicyGetAimControlPolicy",d=(0,o.J1)`
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
`,p=e=>(0,o.IT)(d,e);(({query:e,response:t,variables:n})=>({debug:a=!1,graphQLErrors:i,networkError:r,override:s,result:c,variables:d,...p}={})=>{let m=(0,u.h1)({},n,d),g=(0,u.h1)({},t,s);return a&&console.log(`
Type: mockResponse

Operation: ${(0,o.n4)(e)}

Variables: ${(0,u.GP)(m)}

Response: ${(0,u.GP)(g)}

GraphQL Errors: ${(0,u.GP)(i?.map(u.XY))}

Network Error: ${(0,u.GP)(r?(0,u.XY)(r):void 0)}

`),{error:r?(0,u.XY)(r):void 0,request:{query:e,variables:m},result:l()(c)?{data:g,errors:i?.map(e=>(0,u.XY)(e))??void 0}:c,...p}})({query:d,response:{[c]:{__typename:"AclmanagerAimcontrolpolicyAimControlPolicy",state:a.zYk.ALLOW_ALL,apiError:null,oktaIdpConfig:null,entraIdIdpConfig:null}},variables:{input:{}}});let m=(e,t)=>{if(!t)return;e.writeQuery({query:d,variables:{input:{}},data:{[c]:{...t,apiError:null}}})},g=()=>{let e=0===(0,r.d)("orgId_new",0)||(0,r.d)("identityFederationEnabled",!1),t=(0,i.W)("databricks.identity.seamless.seamlessOnboardingAvailable",!0),{data:n,loading:o,error:s}=p({variables:{input:{}},skip:!t||!e});if(!e||!t)return{isEnabled:!1,loading:!1,error:void 0};let l=n?.aclmanagerAimcontrolpolicyGetAimControlPolicy,u=!!l?.apiError;return{isEnabled:!!(!s&&!u&&!o&&l?.state!==null&&l?.state!==void 0&&l?.state!==a.zYk.DISABLED&&l?.state!==a.zYk.STATE_UNSPECIFIED),loading:o,error:s||(u?{message:l?.apiError?.message??"Unknown error"}:void 0)}}},901741:(e,t,n)=>{"use strict";n.d(t,{d:()=>o});var a=n(956935),i=n(850455),r=n(497895);let o=()=>{let{theme:e}=(0,r.wn)();return{root:(0,a.AH)({width:"100%",height:"auto",paddingBottom:e.spacing.lg,"> *":{width:"100%"}}),caption:(0,a.AH)({color:e.colors.textSecondary}),formSection:(0,a.AH)({marginBottom:i.Z.spacing.xlg}),inputRow:(0,a.AH)({alignItems:"baseline","> *":{width:"256px"}}),errorPage:(0,a.AH)({display:"flex",flexDirection:"column",height:"100%",justifyContent:"center"}),link:(0,a.AH)({fontSize:e.typography.fontSizeMd})}}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/22724.999e4a3bbf.chunk.js.map