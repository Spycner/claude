(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[58060],{26093:(e,i,n)=>{"use strict";n.d(i,{x:()=>r});var t=n(141078),a=n(655841);let r=e=>(0,t.n_)(a.Ij,e)},90397:(e,i,n)=>{"use strict";n.d(i,{U:()=>c});var t=n(610435),a=n(778063),r=n(956935),l=n(224959);n(692738);var o=n(497895),s=n(845766);let c=e=>{let{theme:i}=(0,o.wn)(),{fieldName:n,validate:c,validationMessageStyling:d,css:u,...p}=e,[m,v]=(0,l.Mt)({name:n,validate:c}),f=!!(v.error&&v.touched),g=e.validateWarning?.(v.value),y={...p,validateStatus:(()=>{if(f)return"error";if(g)return"warning";return"success"})(),help:(()=>{if(f)return(0,t.FD)("span",{css:d,children:[(0,t.Y)(a.A,{})," ",v.error]});if(g)return g;return p.help})()},I=[{form:(0,r.AH)({marginBottom:i.spacing.md})}.form,u].filter(e=>null!=e),h=1===I.length?I[0]:(0,r.AH)(I);return(0,t.Y)(s.SQ.Item,{...y,css:h,"data-testid":"formik-form-item"})}},222950:e=>{var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"aclmanagerIdentityapiGetServicePrincipalQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"AclmanagerIdentityapiGetServicePrincipalRequestInput"}}},directives:[]}],directives:[{kind:"Directive",name:{kind:"Name",value:"component"},arguments:[{kind:"Argument",name:{kind:"Name",value:"name"},value:{kind:"StringValue",value:"IdentityMgmt.UserGroup",block:!1}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"aclmanagerIdentityapiGetServicePrincipal"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"apiError"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"code"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"applicationId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"principal"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"legacyUserId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"displayName"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:366}};i.loc.source={body:'query aclmanagerIdentityapiGetServicePrincipalQuery($input: AclmanagerIdentityapiGetServicePrincipalRequestInput!)\n@component(name: "IdentityMgmt.UserGroup") {\n  aclmanagerIdentityapiGetServicePrincipal(input: $input) {\n    apiError {\n      code\n      message\n    }\n    applicationId\n    principal {\n      legacyUserId\n      externalId\n      displayName\n    }\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var n={};function t(e,i){for(var n=0;n<e.definitions.length;n++){var t=e.definitions[n];if(t.name&&t.name.value==i)return t}}i.definitions.forEach(function(e){if(e.name){var i=new Set;!function e(i,n){if("FragmentSpread"===i.kind)n.add(i.name.value);else if("VariableDefinition"===i.kind){var t=i.type;"NamedType"===t.kind&&n.add(t.name.value)}i.selectionSet&&i.selectionSet.selections.forEach(function(i){e(i,n)}),i.variableDefinitions&&i.variableDefinitions.forEach(function(i){e(i,n)}),i.definitions&&i.definitions.forEach(function(i){e(i,n)})}(e,i),n[e.name.value]=i}}),e.exports=i,e.exports.aclmanagerIdentityapiGetServicePrincipalQuery=function(e,i){var a={kind:e.kind,definitions:[t(e,i)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var r=n[i]||new Set,l=new Set,o=new Set;for(r.forEach(function(e){o.add(e)});o.size>0;){var s=o;o=new Set,s.forEach(function(e){l.has(e)||(l.add(e),(n[e]||new Set).forEach(function(e){o.add(e)}))})}return l.forEach(function(i){var n=t(e,i);n&&a.definitions.push(n)}),a}(i,"aclmanagerIdentityapiGetServicePrincipalQuery")},361509:e=>{var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"DeleteAccountServicePrincipalMutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"accountId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"servicePrincipalId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"accountServicePrincipalDelete"},arguments:[{kind:"Argument",name:{kind:"Name",value:"accountId"},value:{kind:"Variable",name:{kind:"Name",value:"accountId"}}},{kind:"Argument",name:{kind:"Name",value:"servicePrincipalId"},value:{kind:"Variable",name:{kind:"Name",value:"servicePrincipalId"}}}],directives:[{kind:"Directive",name:{kind:"Name",value:"rest"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"StringValue",value:"ScimCollectionResponse",block:!1}},{kind:"Argument",name:{kind:"Name",value:"path"},value:{kind:"StringValue",value:"/accounts/{args.accountId}/scim/v2/ServicePrincipals/{args.servicePrincipalId}",block:!1}},{kind:"Argument",name:{kind:"Name",value:"method"},value:{kind:"StringValue",value:"DELETE",block:!1}},{kind:"Argument",name:{kind:"Name",value:"endpoint"},value:{kind:"StringValue",value:"apiV2_1",block:!1}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"NoResponse"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:407}};i.loc.source={body:'mutation DeleteAccountServicePrincipalMutation($accountId: ID!, $servicePrincipalId: ID!) {\n  accountServicePrincipalDelete(accountId: $accountId, servicePrincipalId: $servicePrincipalId)\n    @rest(\n      type: "ScimCollectionResponse"\n      path: "/accounts/{args.accountId}/scim/v2/ServicePrincipals/{args.servicePrincipalId}"\n      method: "DELETE"\n      endpoint: "apiV2_1"\n    ) {\n    NoResponse\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var n={};function t(e,i){for(var n=0;n<e.definitions.length;n++){var t=e.definitions[n];if(t.name&&t.name.value==i)return t}}i.definitions.forEach(function(e){if(e.name){var i=new Set;!function e(i,n){if("FragmentSpread"===i.kind)n.add(i.name.value);else if("VariableDefinition"===i.kind){var t=i.type;"NamedType"===t.kind&&n.add(t.name.value)}i.selectionSet&&i.selectionSet.selections.forEach(function(i){e(i,n)}),i.variableDefinitions&&i.variableDefinitions.forEach(function(i){e(i,n)}),i.definitions&&i.definitions.forEach(function(i){e(i,n)})}(e,i),n[e.name.value]=i}}),e.exports=i,e.exports.DeleteAccountServicePrincipalMutation=function(e,i){var a={kind:e.kind,definitions:[t(e,i)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var r=n[i]||new Set,l=new Set,o=new Set;for(r.forEach(function(e){o.add(e)});o.size>0;){var s=o;o=new Set,s.forEach(function(e){l.has(e)||(l.add(e),(n[e]||new Set).forEach(function(e){o.add(e)}))})}return l.forEach(function(i){var n=t(e,i);n&&a.definitions.push(n)}),a}(i,"DeleteAccountServicePrincipalMutation")},452184:(e,i,n)=>{"use strict";n.r(i),n.d(i,{RouteComponent:()=>H,UpdateAccountServicePrincipal:()=>j});var t=n(610435),a=n(224959),r=n(692738),l=n(204600),o=n(285893),s=n(828757),c=n(332098),d=n(467774),u=n(90397),p=n(775980),m=n(332340),v=n(921673),f=n(141078),g=n(361509),y=n.n(g),I=n(973172),h=n(382908),k=n(342411);function S(e,i,n,t,a,r,l){try{var o=e[r](l),s=o.value}catch(e){n(e);return}o.done?i(s):Promise.resolve(s).then(t,a)}let b=()=>{let e={modalDescriptionText:(0,k.tz)().formatMessage({id:"f06IBu",defaultMessage:"Any automated tools, running jobs, and applications using this service principal will no longer be able to access Databricks."})},[i,n]=r.useState(void 0),a=()=>n(void 0);return{showModal:e=>n(e),hide:a,DeleteAccountServicePrincipalModal:n=>{let{onDelete:r}=n,{accountId:l}=(0,c.C6)().getLoadedSessionData(),[o,{loading:s,error:d}]=((e,i={})=>{let[n,t]=(0,f.n_)(y(),i);return[i=>n({variables:{accountId:e,servicePrincipalId:i}}),t]})(l),u={...n,loading:s,onDelete:()=>{var e;return(e=function*(){if(i)try{yield o(i),a(),r&&r()}catch(e){}},function(){var i=this,n=arguments;return new Promise(function(t,a){var r=e.apply(i,n);function l(e){S(r,t,a,l,o,"next",e)}function o(e){S(r,t,a,l,o,"throw",e)}l(void 0)})})()},onCancel:a,visible:void 0!==i,errorMsg:d?d.message:void 0};return(0,t.Y)(I.T,{...u,children:(0,t.Y)(h.o.Text,{children:e.modalDescriptionText})})}}};var A=n(974717),P=n(901741),_=n(596502),$=n(391249),M=n(863212),Y=n(940289),N=n(861166),x=n(79128),D=n(876726),T=n(140078),G=n(810152),E=n(648782),C=n(872899),L=n(441535),w=n(414181),F=n(696569);let U=()=>{let e=(0,k.tz)();return{uuidLabel:e.formatMessage({id:"Q3SB/R",defaultMessage:"UUID"}),nameLabel:e.formatMessage({id:"aKhvoP",defaultMessage:"Name"}),saveButtonText:e.formatMessage({id:"vIDp19",defaultMessage:"Save"}),cancelButtonText:e.formatMessage({id:"p8sp+m",defaultMessage:"Cancel"}),errorTitle:e.formatMessage({id:"LG0yEZ",defaultMessage:"Error"}),generalInformationTitle:e.formatMessage({id:"k/+61i",defaultMessage:"General information"}),notFoundTitle:e.formatMessage({id:"VgHy/j",defaultMessage:"Not found"}),deleteButtonText:e.formatMessage({id:"lnhsQl",defaultMessage:"Delete"}),updateServiceText:e.formatMessage({id:"HfA+cp",defaultMessage:"Updating service principal"}),unnamedServicePrincipalText:e.formatMessage({id:"S40gRK",defaultMessage:"Unnamed service principal"}),notSpecifiedText:e.formatMessage({id:"l2XuSX",defaultMessage:"Not Specified"}),idLabel:e.formatMessage({id:"L8BG4Q",defaultMessage:"ID"}),idpIdLabel:e.formatMessage({id:"Ok+aKN",defaultMessage:"External ID (from identity provider)"})}};var R=n(591826);let V=()=>{let e=U(),{servicePrincipalId:i=""}=(0,E.g)(),n=(0,P.d)(),{accountId:a,viewConfig:l,oauthConfig:o}=(0,c.C6)().getLoadedSessionData(),s=l?.enableOauthSecretsUi,u=(0,L.W)("databricks.fe.identity.preferInternalIdInAccountUrl",!1),{data:p,loading:v,error:f,refetch:g}=(0,R.A)({urlServicePrincipalIdentifier:i,accountId:a}),{showModal:y,DeleteAccountServicePrincipalModal:I}=b(),{goToRoute:k}=(0,$.Nu)(),S=(0,r.useMemo)(()=>({children:e.deleteButtonText,onClick:()=>y(p?.servicePrincipalId??""),danger:!0,componentId:"SeamlessServicePrincipalsLayout.DeleteServicePrincipal",disabled:!p?.servicePrincipalId}),[e,p,y]),_=p?.applicationId,M=p?.servicePrincipalId,Y=(0,r.useMemo)(()=>({secretsEndpointPath:`/accounts/${a}/servicePrincipals/${M}/credentials/secrets`}),[a,M]),x=p?.displayName||e.unnamedServicePrincipalText;if(v)return(0,t.Y)(m.X,{});if(f)return(0,t.Y)("div",{css:n.errorPage,children:(0,t.Y)("div",{css:{padding:"48px 32px"},children:(0,t.Y)(D.S,{image:(0,t.Y)(T.A,{}),title:e.errorTitle,description:f.message})})});return(0,t.FD)(A.k,{className:"db-UpdateAccountServicePrincipal",headerProps:{title:x,dropdownItems:[S]},css:n.root,isSeamlessView:!0,children:[(0,t.Y)(I,{componentId:"SeamlessServicePrincipalsLayout.DeleteServicePrincipalModal",onDelete:k}),(0,t.Y)(h.o.Title,{level:3,children:e.generalInformationTitle}),(0,t.FD)(N.$,{direction:"vertical",children:[M&&(0,t.Y)(d.V,{label:e.idLabel,value:M}),(0,t.Y)(d.V,{label:e.idpIdLabel,value:i}),(0,t.Y)(d.V,{label:e.uuidLabel,value:_||e.notSpecifiedText}),(0,t.Y)(d.V,{label:e.nameLabel,value:p?.displayName||e.notSpecifiedText})]}),s&&!u&&(0,t.Y)(w.$G.Provider,{value:Y,children:(0,t.Y)(F.H,{accountId:a,oauthConfig:o,clientId:_||"",servicePrincipalId:i,servicePrincipalNeedsProvisioning:!p?.isProvisioned,onGenerateModalClose:()=>g?.()})})]})};function q(e,i,n,t,a,r,l){try{var o=e[r](l),s=o.value}catch(e){n(e);return}o.done?i(s):Promise.resolve(s).then(t,a)}let{Title:B}=h.o,O=(0,t.Y)(k.sA,{id:"NsY99L",defaultMessage:"Display name must be less than 100 characters"}),z=l.Ik().shape({displayName:l.Yj().max(100,()=>O).required(()=>M.q.required)}),j=()=>{let e=U(),{servicePrincipalId:i=""}=(0,E.g)(),{accountId:n,viewConfig:l}=(0,c.C6)().getLoadedSessionData(),f=(0,Y.A)(),{isEnabled:g}=(0,C.Im)(),{hasSyncCompleted:y}=(0,v.J)(i,"serviceprincipal",{skip:!i}),I=(0,P.d)(),{goToRoute:h}=(0,$.Nu)(),{data:k,loading:S,error:M}=(0,o.o)(n,i,{skip:f||!y}),[L,{loading:w,error:F}]=(0,s.iy)(n),{showModal:R,DeleteAccountServicePrincipalModal:O}=b(),j=l?.enableOauthSecretsUi,H=k?.accountServicePrincipal,J=H?.externalId,Q=!g||!J,X=H?.displayName||H?.applicationId,W={displayName:H?.displayName||H?.applicationId||""},Z=(0,r.useMemo)(()=>({children:e.deleteButtonText,onClick:()=>R(H?.id??""),danger:!0,componentId:"Accounts-UI.UpdateAccountServicePrincipal.DeleteServicePrincipal"}),[e,H,R]);if(f)return(0,t.Y)(V,{});if(S||!y)return(0,t.Y)(m.X,{});if(M)return(0,t.Y)("div",{css:I.errorPage,children:(0,t.Y)("div",{css:{padding:"48px 32px"},children:(0,t.Y)(D.S,{image:(0,t.Y)(T.A,{}),title:e.errorTitle,description:M.message})})});if(!H?.applicationId)return(0,t.Y)("div",{css:I.errorPage,children:(0,t.Y)("div",{css:{padding:"48px 32px"},children:(0,t.Y)(D.S,{image:(0,t.Y)(T.A,{}),title:e.notFoundTitle,description:""})})});return(0,t.FD)(A.k,{className:"db-UpdateAccountServicePrincipal",headerProps:{title:X,dropdownItems:H?[Z]:void 0},css:I.root,children:[(0,t.FD)(N.$,{direction:"vertical",style:{width:"100%"},children:[F&&(0,_._)(F),w&&(0,t.FD)(N.$,{direction:"vertical",style:{width:"100%"},children:[(0,t.Y)(B,{level:5,children:e.updateServiceText}),(0,t.Y)(G.I,{})]})]}),(0,t.Y)(O,{componentId:"codegen_accounts_ui_app_src_accounts-console-ui_pages_accountusers_updateaccountserviceprincipal_updateaccountserviceprincipal.tsx_202",onDelete:h}),j&&(0,t.Y)(B,{level:3,children:e.generalInformationTitle}),(0,t.Y)(a.l1,{initialValues:W,onSubmit:e=>{var n;return(n=function*(){let{displayName:n}=e;try{yield L(i,{displayName:n}),h()}catch(e){}},function(){var e=this,i=arguments;return new Promise(function(t,a){var r=n.apply(e,i);function l(e){q(r,t,a,l,o,"next",e)}function o(e){q(r,t,a,l,o,"throw",e)}l(void 0)})})()},validationSchema:z,children:n=>(0,t.FD)(a.lV,{css:{display:"flex",flexDirection:"column"},children:[H?(0,t.FD)(N.$,{direction:"vertical",children:[(0,t.Y)(d.V,{label:e.idLabel,value:i}),J&&(0,t.Y)(d.V,{label:e.idpIdLabel,value:J}),(0,t.Y)(d.V,{label:e.uuidLabel,value:H.applicationId}),Q?(0,t.Y)(N.$,{size:"middle",css:I.inputRow,children:(0,t.Y)(u.U,{required:!0,fieldName:"displayName",label:e.nameLabel,..._.G,children:(0,t.Y)(p.j,{componentId:"codegen_accounts_ui_app_src_accounts-console-ui_pages_accountusers_updateaccountserviceprincipal_updateaccountserviceprincipal.tsx_123",fieldName:"displayName",disabled:w||!Q})})}):(0,t.Y)(d.V,{label:e.nameLabel,value:H.displayName||H.applicationId||e.notSpecifiedText})]}):void 0,Q&&(i=>{let{displayName:n}=i.values,a=n!==H?.displayName;return(0,t.FD)(N.$,{size:"small",children:[(0,t.Y)(x.$n,{componentId:"codegen_accounts_ui_app_src_pages_accountusers_updateaccountserviceprincipal_updateaccountserviceprincipal.tsx_118",type:"primary",htmlType:"submit",disabled:w||!a,children:e.saveButtonText}),(0,t.Y)(x.$n,{componentId:"codegen_accounts_ui_app_src_pages_accountusers_updateaccountserviceprincipal_updateaccountserviceprincipal.tsx_121",onClick:h,disabled:w,children:e.cancelButtonText})]})})(n)]})})]})},H=j},467774:(e,i,n)=>{"use strict";n.d(i,{V:()=>l});var t=n(610435);n(692738);var a=n(497895),r=n(382908);let l=({label:e,value:i})=>{let{theme:n}=(0,a.wn)();return(0,t.FD)("div",{css:{marginBottom:n.spacing.lg},children:[(0,t.Y)("div",{css:{marginBottom:n.spacing.md},children:(0,t.Y)(r.o.Text,{bold:!0,children:e})}),(0,t.Y)("div",{children:i})]})}},596502:(e,i,n)=>{"use strict";n.d(i,{G:()=>r,_:()=>l});var t=n(610435);n(692738);var a=n(339518);let r={labelCol:{span:24}},l=e=>(0,t.Y)(a.F,{componentId:"codegen_accounts_ui_app_src_accounts-console-ui_pages_accountusers_utils_updateaccountprincipal_updateaccountprincipalutils.tsx_25",type:"error",message:e.message})},655841:(e,i,n)=>{"use strict";n.d(i,{GX:()=>u,HA:()=>r,Ij:()=>d,U8:()=>a,_:()=>l,e:()=>s,fq:()=>p,n$:()=>c,r4:()=>o});var t=n(141078);let a=(0,t.J1)`
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
`,r=(0,t.J1)`
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
`,l=(0,t.J1)`
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
`,o=(0,t.J1)`
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
`,s=(0,t.J1)`
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
`,c=(0,t.J1)`
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
`,d=(0,t.J1)`
  mutation GetOrCreateIdpUser($input: AclmanagerIdentityapiGetOrCreateUserRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateUser(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,u=(0,t.J1)`
  mutation GetOrCreateIdpGroup($input: AclmanagerIdentityapiGetOrCreateGroupRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateGroup(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,p=(0,t.J1)`
  mutation GetOrCreateIdpServicePrincipal($input: AclmanagerIdentityapiGetOrCreateServicePrincipalRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateServicePrincipal(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`},675823:(e,i,n)=>{"use strict";n.d(i,{z:()=>r});var t=n(141078),a=n(655841);let r=e=>(0,t.n_)(a.GX,e)},730072:(e,i,n)=>{"use strict";n.d(i,{y:()=>c});var t=n(692738),a=n(483588),r=n(675823),l=n(123061),o=n(26093);function s(e,i,n,t,a,r,l){try{var o=e[r](l),s=o.value}catch(e){n(e);return}o.done?i(s):Promise.resolve(s).then(t,a)}let c=()=>{let[e]=(0,o.x)(),[i]=(0,l.$)(),[n]=(0,r.z)();return(0,t.useCallback)((t,r)=>{var l;return(l=function*(){let l={userId:t,sourceIdp:a.GbL.SOURCE_IDP_ATTRIBUTE_AAD},o={groupId:t,sourceIdp:a.GbL.SOURCE_IDP_ATTRIBUTE_AAD};switch(r){case"user":yield e({variables:{input:l}});break;case"group":yield n({variables:{input:o}});break;case"serviceprincipal":yield i({variables:{input:l}})}},function(){var e=this,i=arguments;return new Promise(function(n,t){var a=l.apply(e,i);function r(e){s(a,n,t,r,o,"next",e)}function o(e){s(a,n,t,r,o,"throw",e)}r(void 0)})})()},[e,i,n])}},775980:(e,i,n)=>{"use strict";n.d(i,{j:()=>l});var t=n(610435),a=n(224959);n(692738);var r=n(407374);let l=e=>{let{fieldName:i,overrideDisplayValue:n,...l}=e,[o,s,c]=(0,a.Mt)(i),d={...l,onChange:i=>{let n=i.target.value||"";c.setValue(n),e.onChange&&e.onChange(i)},onBlur:()=>{c.setTouched(!0),c.setValue(o.value?.trim()||"")},value:n||o.value,name:e.name||i,"aria-label":l["aria-label"]||i};return(0,t.Y)(r.p,{...d,"data-testid":l["data-testid"]??"formik-form-input"})}},814954:(e,i,n)=>{"use strict";n.d(i,{A:()=>r});var t=n(715908);function a(e){return e===Object(e)&&0!==Object.keys(e).length}let r=function(e,i){var n,r,l,o=!e.ownerDocument.documentElement.contains(e);if(a(i)&&"function"==typeof i.behavior)return i.behavior(o?[]:(0,t.A)(e,i));if(o)return;var s=function(e){if(!1===e)return{block:"end",inline:"nearest"};if(a(e))return e;return{block:"start",inline:"nearest"}}(i);return n=(0,t.A)(e,s),void 0===(r=s.behavior)&&(r="auto"),l="scrollBehavior"in document.body.style,void n.forEach(function(e){var i=e.el,n=e.top,t=e.left;i.scroll&&l?i.scroll({top:n,left:t,behavior:r}):(i.scrollTop=n,i.scrollLeft=t)})}},845766:(e,i,n)=>{"use strict";n.d(i,{SQ:()=>g});var t=n(610435),a=n(956935),r=n(251545),l=n(91958),o=n.n(l),s=n(692738),c=n(532111),d=n(429608),u=n(497895),p=n(639712),m=n(123252);let v=o()(({theme:e,clsPrefix:i})=>(({theme:e,clsPrefix:i})=>{let n=`.${i}-form-item-label`,t=`.${i}-form-item-control-input`,r=`.${i}-form-item-explain`,l=`.${i}-form-item-has-error`;return(0,a.AH)({[n]:{fontWeight:e.typography.typographyBoldFontWeight,lineHeight:e.typography.lineHeightBase,".anticon":{fontSize:e.general.iconFontSize}},[r]:{fontSize:e.typography.fontSizeSm,margin:0,[`&${r}-success`]:{color:e.colors.textValidationSuccess},[`&${r}-warning`]:{color:e.colors.textValidationDanger},[`&${r}-error`]:{color:e.colors.textValidationDanger},[`&${r}-validating`]:{color:e.colors.textSecondary}},[t]:{minHeight:e.general.heightSm},[`${t} input[disabled]`]:{border:"none"},[`&${l} input:focus`]:(0,p.dg)({boxShadow:"none"}),...(0,d.Cx)(e.options.enableAnimation)})})({theme:e,clsPrefix:i}),({theme:e,clsPrefix:i})=>`${(0,p.H6)(e)}|${i}`);function f(e,i){if(!("object"==typeof e&&null!==e&&"validator"in e&&"function"==typeof e.validator))return e;let n=i.wrap(e.validator);if(n===e.validator)return e;return{...e,validator:n}}let g=Object.assign((0,s.forwardRef)(function({dangerouslySetAntdProps:e,children:i,...n},a){let l={...n,layout:n.layout||"vertical",requiredMark:n.requiredMark||!1};return(0,t.Y)(d.wC,{children:(0,t.Y)(r.A,{...(0,m.VG)(),...l,colon:!1,ref:a,...e,children:(0,t.Y)(d.dg,{children:i})})})}),{Item:({dangerouslySetAntdProps:e,children:i,...n})=>{let{theme:a,classNamePrefix:l}=(0,u.wn)(),o=(0,c.HY)(),p=(0,s.useMemo)(()=>(function(e,i){if(!e||0===e.length)return e;let n=!1,t=e.map(e=>{let t=function(e,i){if("function"==typeof e)return n=>f(e(n),i);return f(e,i)}(e,i);return n||=t!==e,t});return n?t:e})(n.rules,o),[o,n.rules]);return(0,t.Y)(d.wC,{children:(0,t.Y)(r.A.Item,{...(0,m.VG)(),...n,rules:p,css:v({theme:a,clsPrefix:l}),...e,children:i})})},List:r.A.List,useForm:r.A.useForm})},863212:(e,i,n)=>{"use strict";n.d(i,{q:()=>r});var t=n(610435);n(692738);var a=n(342411);let r={required:(0,t.Y)(a.sA,{id:"v7HtyB",defaultMessage:"Required"}),requiredField:e=>(0,t.Y)(a.sA,{id:"/55wLH",defaultMessage:"Required if {field} provided",values:{field:e}}),min:e=>(0,t.Y)(a.sA,{id:"SJycjC",defaultMessage:"This field must be at least {minLength} characters long",values:{minLength:e}}),max:e=>(0,t.Y)(a.sA,{id:"TyTZyk",defaultMessage:"This field can be at most {maxLength} characters long",values:{maxLength:e}}),validUrl:(0,t.Y)(a.sA,{id:"nAkXo5",defaultMessage:"Enter a valid URL"}),validAccountName:(0,t.Y)(a.sA,{id:"njvRX1",defaultMessage:"Account name must be less than 300 characters"}),validEmail:(0,t.Y)(a.sA,{id:"9Svx98",defaultMessage:"Enter a valid email address"}),validFirstName:(0,t.Y)(a.sA,{id:"zLFRjc",defaultMessage:"First name must be less than 100 characters"}),validLastName:(0,t.Y)(a.sA,{id:"8jFPll",defaultMessage:"Last name must be less than 100 characters"}),validIamRoleArn:(0,t.Y)(a.sA,{id:"jfIrZZ",defaultMessage:"Please insert a valid IAM role ARN (arn:partition:service:region:account:resource)"}),validStoreRoot:e=>(0,t.Y)(a.sA,{id:"LBe/BJ",defaultMessage:"Invalid format: {storageRootLabel}",values:{storageRootLabel:e}}),validAzureAccessConnectorId:(0,t.Y)(a.sA,{id:"/PYyKu",defaultMessage:"Invalid access connector id format"}),retentionMinDays:(0,t.Y)(a.sA,{id:"NxROqR",defaultMessage:"Retention must be at least 30 days"}),retentionMaxDays:(0,t.Y)(a.sA,{id:"wI4XzA",defaultMessage:"Retention must not exceed 3650 days"})}},872899:(e,i,n)=>{"use strict";n.d(i,{gb:()=>p,Im:()=>v,Tn:()=>m});var t=n(483588),a=n(441535),r=n(686560),l=n(141078),o=n(778529),s=n.n(o),c=n(496720);let d="aclmanagerAimcontrolpolicyGetAimControlPolicy",u=(0,l.J1)`
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
`,p=e=>(0,l.IT)(u,e);(({query:e,response:i,variables:n})=>({debug:t=!1,graphQLErrors:a,networkError:r,override:o,result:d,variables:u,...p}={})=>{let m=(0,c.h1)({},n,u),v=(0,c.h1)({},i,o);return t&&console.log(`
Type: mockResponse

Operation: ${(0,l.n4)(e)}

Variables: ${(0,c.GP)(m)}

Response: ${(0,c.GP)(v)}

GraphQL Errors: ${(0,c.GP)(a?.map(c.XY))}

Network Error: ${(0,c.GP)(r?(0,c.XY)(r):void 0)}

`),{error:r?(0,c.XY)(r):void 0,request:{query:e,variables:m},result:s()(d)?{data:v,errors:a?.map(e=>(0,c.XY)(e))??void 0}:d,...p}})({query:u,response:{[d]:{__typename:"AclmanagerAimcontrolpolicyAimControlPolicy",state:t.zYk.ALLOW_ALL,apiError:null,oktaIdpConfig:null,entraIdIdpConfig:null}},variables:{input:{}}});let m=(e,i)=>{if(!i)return;e.writeQuery({query:u,variables:{input:{}},data:{[d]:{...i,apiError:null}}})},v=()=>{let e=0===(0,r.d)("orgId_new",0)||(0,r.d)("identityFederationEnabled",!1),i=(0,a.W)("databricks.identity.seamless.seamlessOnboardingAvailable",!0),{data:n,loading:l,error:o}=p({variables:{input:{}},skip:!i||!e});if(!e||!i)return{isEnabled:!1,loading:!1,error:void 0};let s=n?.aclmanagerAimcontrolpolicyGetAimControlPolicy,c=!!s?.apiError;return{isEnabled:!!(!o&&!c&&!l&&s?.state!==null&&s?.state!==void 0&&s?.state!==t.zYk.DISABLED&&s?.state!==t.zYk.STATE_UNSPECIFIED),loading:l,error:o||(c?{message:s?.apiError?.message??"Unknown error"}:void 0)}}},921673:(e,i,n)=>{"use strict";n.d(i,{J:()=>s});var t=n(692738),a=n(940289),r=n(441535),l=n(730072),o=n(872899);let s=(e,i,n)=>{let{skip:s=!1}=n??{},c=(0,r.W)("databricks.fe.identity.preferInternalIdInAccountUrl",!1),[d,u]=(0,t.useState)(!1),p=(0,t.useRef)(!1),m=(0,l.y)(),{isEnabled:v,loading:f}=(0,o.Im)(),g=!(0,a.A)()&&/^\d+$/.test(e);return(0,t.useEffect)(()=>{if(f)return;if(s||!g||!v||!c)return void u(!0);p.current||(p.current=!0,m(e,i).finally(()=>{u(!0)}))},[e,i,s,g,v,f,m,c]),{hasSyncCompleted:d}}},973172:(e,i,n)=>{"use strict";n.d(i,{T:()=>v});var t=n(610435),a=n(956935),r=n(224959);n(692738);var l=n(204600),o=n(90397),s=n(775980),c=n(861166),d=n(694762),u=n(339518),p=n(342411);let m="userConfirmation",v=e=>{let i,n={title:(i=(0,p.tz)()).formatMessage({id:"d2ZFKg",defaultMessage:"Confirm delete"}),ok:i.formatMessage({id:"9r8ZuW",defaultMessage:"Confirm delete"}),cancelText:i.formatMessage({id:"PrZulp",defaultMessage:"Cancel"})},{onDelete:v,onCancel:f,loading:g=!1,errorMsg:y,deleteConfirmationConfig:I,children:h,title:k=n.title,okText:S=n.ok}=e,b=I?.confirmationInput.trim(),A=b?l.Ik().shape({userConfirmation:l.Yj().test("caseInsensitiveMatch",`Must match "${b}"`,e=>!!e&&e.toLowerCase().trim()===b.toLowerCase()).required("Required")}):void 0,P={...e,title:k,okText:S,cancelText:n.cancelText,okButtonProps:{loading:g},onCancel:f};return(0,t.Y)(r.l1,{initialValues:{[m]:""},validationSchema:A,onSubmit:()=>{v&&v()},children:e=>(0,t.Y)(d.ZF,{...P,onOk:()=>{I?e.handleSubmit():v&&v()},children:(0,t.FD)(c.$,{css:(0,a.AH)({width:"100%"}),direction:"vertical",size:"middle",children:[(()=>{if(!I)return h;let{confirmationText:e,confirmationInput:i}=I;return(0,t.Y)(r.lV,{children:(0,t.FD)(c.$,{direction:"vertical",size:"middle",children:[h,(0,t.Y)(o.U,{fieldName:m,label:(0,t.Y)("span",{css:{whiteSpace:"pre"},children:e}),dangerouslySetAntdProps:{labelCol:{span:24}},validationMessageStyling:{whiteSpace:"pre"},children:(0,t.Y)(s.j,{componentId:"codegen_accounts_ui_app_src_accounts-console-ui_components_surfaces_deletemodal_deletemodal.tsx_104",fieldName:m,name:m,placeholder:i})})]})})})(),y&&(0,t.Y)(u.F,{componentId:"codegen_accounts_ui_app_src_accounts-console-ui_components_surfaces_deletemodal_deletemodal.tsx_134",type:"error",message:y})]})})})}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/58060.adecb2ae6a.chunk.js.map