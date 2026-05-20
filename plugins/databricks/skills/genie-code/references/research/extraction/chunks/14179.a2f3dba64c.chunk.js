(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[14179],{65050:e=>{var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"UpdateRuleSetMutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"accountId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"UpdateRuleSetInput"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"updateRuleSet"},arguments:[{kind:"Argument",name:{kind:"Name",value:"accountId"},value:{kind:"Variable",name:{kind:"Name",value:"accountId"}}},{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[{kind:"Directive",name:{kind:"Name",value:"rest"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"StringValue",value:"RuleSet",block:!1}},{kind:"Argument",name:{kind:"Name",value:"path"},value:{kind:"StringValue",value:"/preview/accounts/{args.accountId}/access-control/rule-sets",block:!1}},{kind:"Argument",name:{kind:"Name",value:"method"},value:{kind:"StringValue",value:"PUT",block:!1}},{kind:"Argument",name:{kind:"Name",value:"bodyKey"},value:{kind:"StringValue",value:"input",block:!1}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"etag"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"grantRules"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"principals"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"role"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:366}};n.loc.source={body:'mutation UpdateRuleSetMutation($accountId: ID!, $input: UpdateRuleSetInput!) {\n  updateRuleSet(accountId: $accountId, input: $input)\n    @rest(\n      type: "RuleSet"\n      path: "/preview/accounts/{args.accountId}/access-control/rule-sets"\n      method: "PUT"\n      bodyKey: "input"\n    ) {\n    name\n    etag\n    grantRules {\n      principals\n      role\n    }\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function a(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}n.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,i){if("FragmentSpread"===n.kind)i.add(n.name.value);else if("VariableDefinition"===n.kind){var a=n.type;"NamedType"===a.kind&&i.add(a.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,i)}),n.definitions&&n.definitions.forEach(function(n){e(n,i)})}(e,n),i[e.name.value]=n}}),e.exports=n,e.exports.UpdateRuleSetMutation=function(e,n){var t={kind:e.kind,definitions:[a(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=i[n]||new Set,l=new Set,d=new Set;for(r.forEach(function(e){d.add(e)});d.size>0;){var o=d;d=new Set,o.forEach(function(e){l.has(e)||(l.add(e),(i[e]||new Set).forEach(function(e){d.add(e)}))})}return l.forEach(function(n){var i=a(e,n);i&&t.definitions.push(i)}),t}(n,"UpdateRuleSetMutation")},222950:e=>{var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"aclmanagerIdentityapiGetServicePrincipalQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"AclmanagerIdentityapiGetServicePrincipalRequestInput"}}},directives:[]}],directives:[{kind:"Directive",name:{kind:"Name",value:"component"},arguments:[{kind:"Argument",name:{kind:"Name",value:"name"},value:{kind:"StringValue",value:"IdentityMgmt.UserGroup",block:!1}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"aclmanagerIdentityapiGetServicePrincipal"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"apiError"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"code"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"applicationId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"principal"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"legacyUserId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"displayName"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:366}};n.loc.source={body:'query aclmanagerIdentityapiGetServicePrincipalQuery($input: AclmanagerIdentityapiGetServicePrincipalRequestInput!)\n@component(name: "IdentityMgmt.UserGroup") {\n  aclmanagerIdentityapiGetServicePrincipal(input: $input) {\n    apiError {\n      code\n      message\n    }\n    applicationId\n    principal {\n      legacyUserId\n      externalId\n      displayName\n    }\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function a(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}n.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,i){if("FragmentSpread"===n.kind)i.add(n.name.value);else if("VariableDefinition"===n.kind){var a=n.type;"NamedType"===a.kind&&i.add(a.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,i)}),n.definitions&&n.definitions.forEach(function(n){e(n,i)})}(e,n),i[e.name.value]=n}}),e.exports=n,e.exports.aclmanagerIdentityapiGetServicePrincipalQuery=function(e,n){var t={kind:e.kind,definitions:[a(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=i[n]||new Set,l=new Set,d=new Set;for(r.forEach(function(e){d.add(e)});d.size>0;){var o=d;d=new Set,o.forEach(function(e){l.has(e)||(l.add(e),(i[e]||new Set).forEach(function(e){d.add(e)}))})}return l.forEach(function(n){var i=a(e,n);i&&t.definitions.push(i)}),t}(n,"aclmanagerIdentityapiGetServicePrincipalQuery")},227985:e=>{var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetRuleSetQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"accountId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"name"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"etag"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getRuleSet"},arguments:[{kind:"Argument",name:{kind:"Name",value:"accountId"},value:{kind:"Variable",name:{kind:"Name",value:"accountId"}}},{kind:"Argument",name:{kind:"Name",value:"name"},value:{kind:"Variable",name:{kind:"Name",value:"name"}}},{kind:"Argument",name:{kind:"Name",value:"etag"},value:{kind:"Variable",name:{kind:"Name",value:"etag"}}}],directives:[{kind:"Directive",name:{kind:"Name",value:"rest"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"StringValue",value:"RuleSet",block:!1}},{kind:"Argument",name:{kind:"Name",value:"path"},value:{kind:"StringValue",value:"/preview/accounts/{args.accountId}/access-control/rule-sets?etag={args.etag}&name={args.name}",block:!1}},{kind:"Argument",name:{kind:"Name",value:"method"},value:{kind:"StringValue",value:"GET",block:!1}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"etag"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"grantRules"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"type"},arguments:[{kind:"Argument",name:{kind:"Name",value:"name"},value:{kind:"StringValue",value:"GrantRule",block:!1}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"principals"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"role"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:404}};n.loc.source={body:'query GetRuleSetQuery($accountId: ID!, $name: String!, $etag: String!) {\n  getRuleSet(accountId: $accountId, name: $name, etag: $etag)\n    @rest(\n      type: "RuleSet"\n      path: "/preview/accounts/{args.accountId}/access-control/rule-sets?etag={args.etag}&name={args.name}"\n      method: "GET"\n    ) {\n    name\n    etag\n    grantRules @type(name: "GrantRule") {\n      principals\n      role\n    }\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function a(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}n.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,i){if("FragmentSpread"===n.kind)i.add(n.name.value);else if("VariableDefinition"===n.kind){var a=n.type;"NamedType"===a.kind&&i.add(a.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,i)}),n.definitions&&n.definitions.forEach(function(n){e(n,i)})}(e,n),i[e.name.value]=n}}),e.exports=n,e.exports.GetRuleSetQuery=function(e,n){var t={kind:e.kind,definitions:[a(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=i[n]||new Set,l=new Set,d=new Set;for(r.forEach(function(e){d.add(e)});d.size>0;){var o=d;d=new Set,o.forEach(function(e){l.has(e)||(l.add(e),(i[e]||new Set).forEach(function(e){d.add(e)}))})}return l.forEach(function(n){var i=a(e,n);i&&t.definitions.push(i)}),t}(n,"GetRuleSetQuery")},233426:e=>{var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"aclmanagerIdentityapiGetUserQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"AclmanagerIdentityapiGetUserRequestInput"}}},directives:[]}],directives:[{kind:"Directive",name:{kind:"Name",value:"component"},arguments:[{kind:"Argument",name:{kind:"Name",value:"name"},value:{kind:"StringValue",value:"IdentityMgmt.UserGroup",block:!1}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"aclmanagerIdentityapiGetUser"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"apiError"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"code"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"userName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"principal"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"legacyUserId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalId"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"profile"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"firstName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lastName"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"principal"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"displayName"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:398}};n.loc.source={body:'query aclmanagerIdentityapiGetUserQuery($input: AclmanagerIdentityapiGetUserRequestInput!)\n@component(name: "IdentityMgmt.UserGroup") {\n  aclmanagerIdentityapiGetUser(input: $input) {\n    apiError {\n      code\n      message\n    }\n    userName\n    principal {\n      legacyUserId\n      externalId\n    }\n    profile {\n      firstName\n      lastName\n    }\n    principal {\n      displayName\n    }\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function a(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}n.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,i){if("FragmentSpread"===n.kind)i.add(n.name.value);else if("VariableDefinition"===n.kind){var a=n.type;"NamedType"===a.kind&&i.add(a.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,i)}),n.definitions&&n.definitions.forEach(function(n){e(n,i)})}(e,n),i[e.name.value]=n}}),e.exports=n,e.exports.aclmanagerIdentityapiGetUserQuery=function(e,n){var t={kind:e.kind,definitions:[a(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=i[n]||new Set,l=new Set,d=new Set;for(r.forEach(function(e){d.add(e)});d.size>0;){var o=d;d=new Set,o.forEach(function(e){l.has(e)||(l.add(e),(i[e]||new Set).forEach(function(e){d.add(e)}))})}return l.forEach(function(n){var i=a(e,n);i&&t.definitions.push(i)}),t}(n,"aclmanagerIdentityapiGetUserQuery")},550709:(e,n,i)=>{"use strict";i.d(n,{A2:()=>y,G7:()=>v,Kx:()=>k,Wh:()=>g,Xh:()=>S,ex:()=>f});var a,t=i(692738),r=i(141078),l=i(227985),d=i.n(l),o=i(233426),u=i.n(o),s=i(65050),c=i.n(s),m=i(222950),p=i.n(m),v=((a={}).MARKETPLACE_ADMIN="roles/marketplace.admin",a.BILLING_ADMIN="roles/billing.admin",a);function k(e,n="",i={}){return(0,r.IT)(d(),{variables:{accountId:e,name:`accounts/${e}/ruleSets/default`,etag:n},...i})}function g(e={}){let[n,i]=(0,r.n_)(c(),{awaitRefetchQueries:!0,...e});return[(e,i)=>n({variables:{accountId:e,input:{name:i.name,ruleSet:i.ruleSet}},refetchQueries:n=>[{query:d(),variables:{accountId:e,name:i.name,etag:n.data?.updateRuleSet?.etag||""}}]}),i]}function f(e,n={}){let[i,a]=(0,r.n_)(c(),{awaitRefetchQueries:!0,...n});return[(n,a)=>i({variables:{accountId:n,input:{name:a.name,ruleSet:a.ruleSet}},refetchQueries:i=>[{query:d(),variables:{accountId:n,name:a.name,etag:i.data?.updateRuleSet?.etag||""}},{query:u(),variables:{input:{userId:e}}}]}),a]}function y(e,n={}){let[i,a]=(0,r.n_)(c(),{awaitRefetchQueries:!0,...n});return[(n,a)=>i({variables:{accountId:n,input:{name:a.name,ruleSet:a.ruleSet}},refetchQueries:i=>[{query:d(),variables:{accountId:n,name:a.name,etag:i.data?.updateRuleSet?.etag||""}},{query:p(),variables:{input:{servicePrincipalId:e}}}]}),a]}function S(e,n,i="",a={}){let{data:r,loading:l,error:d}=k(e,i,{fetchPolicy:"cache-first",...a});return{rbacRoles:t.useMemo(()=>{var e,i;return e=r,i=n,e?.getRuleSet?.grantRules?.filter(e=>e.principals?.includes(i)).map(e=>e.role||"").filter(e=>""!==e)||[]},[n,r]),rbacLoading:l,fetchRbacError:d,ruleSet:r}}},655841:(e,n,i)=>{"use strict";i.d(n,{GX:()=>c,HA:()=>r,Ij:()=>s,U8:()=>t,_:()=>l,e:()=>o,fq:()=>m,n$:()=>u,r4:()=>d});var a=i(141078);let t=(0,a.J1)`
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
  ${t}
`,l=(0,a.J1)`
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
  ${t}
`,d=(0,a.J1)`
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
  ${t}
`,o=(0,a.J1)`
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
  ${t}
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
  ${t}
`,s=(0,a.J1)`
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
`},872899:(e,n,i)=>{"use strict";i.d(n,{gb:()=>m,Im:()=>v,Tn:()=>p});var a=i(483588),t=i(441535),r=i(686560),l=i(141078),d=i(778529),o=i.n(d),u=i(496720);let s="aclmanagerAimcontrolpolicyGetAimControlPolicy",c=(0,l.J1)`
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
`,m=e=>(0,l.IT)(c,e);(({query:e,response:n,variables:i})=>({debug:a=!1,graphQLErrors:t,networkError:r,override:d,result:s,variables:c,...m}={})=>{let p=(0,u.h1)({},i,c),v=(0,u.h1)({},n,d);return a&&console.log(`
Type: mockResponse

Operation: ${(0,l.n4)(e)}

Variables: ${(0,u.GP)(p)}

Response: ${(0,u.GP)(v)}

GraphQL Errors: ${(0,u.GP)(t?.map(u.XY))}

Network Error: ${(0,u.GP)(r?(0,u.XY)(r):void 0)}

`),{error:r?(0,u.XY)(r):void 0,request:{query:e,variables:p},result:o()(s)?{data:v,errors:t?.map(e=>(0,u.XY)(e))??void 0}:s,...m}})({query:c,response:{[s]:{__typename:"AclmanagerAimcontrolpolicyAimControlPolicy",state:a.zYk.ALLOW_ALL,apiError:null,oktaIdpConfig:null,entraIdIdpConfig:null}},variables:{input:{}}});let p=(e,n)=>{if(!n)return;e.writeQuery({query:c,variables:{input:{}},data:{[s]:{...n,apiError:null}}})},v=()=>{let e=0===(0,r.d)("orgId_new",0)||(0,r.d)("identityFederationEnabled",!1),n=(0,t.W)("databricks.identity.seamless.seamlessOnboardingAvailable",!0),{data:i,loading:l,error:d}=m({variables:{input:{}},skip:!n||!e});if(!e||!n)return{isEnabled:!1,loading:!1,error:void 0};let o=i?.aclmanagerAimcontrolpolicyGetAimControlPolicy,u=!!o?.apiError;return{isEnabled:!!(!d&&!u&&!l&&o?.state!==null&&o?.state!==void 0&&o?.state!==a.zYk.DISABLED&&o?.state!==a.zYk.STATE_UNSPECIFIED),loading:l,error:d||(u?{message:o?.apiError?.message??"Unknown error"}:void 0)}}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/14179.a2f3dba64c.chunk.js.map