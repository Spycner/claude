"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[66655],{26093:(e,t,r)=>{r.d(t,{x:()=>n});var i=r(141078),a=r(655841);let n=e=>(0,i.n_)(a.Ij,e)},77781:(e,t,r)=>{r.d(t,{y:()=>S});var i=r(610435),a=r(692738),n=r(57793),s=r(710056),o=r(391249),l=r(465946),p=r(876726),d=r(140078),c=r(441535),u=r(205048),m=r(929117),g=r(858383),f=r(648782),y=r(872899),I=r(342411),h=r(901741),v=r(436424),T=r(640681),A=r(711151),b=r(79570),G=r(647660),x=r(375001),P=r(510308);let $=({children:e,groupName:t,isSeamlessView:r,isExclusiveView:n})=>{let s,l={membersText:(s=(0,I.tz)()).formatMessage({id:"gxlcdD",defaultMessage:"Members"}),groupInformation:s.formatMessage({id:"EZU/X/",defaultMessage:"Group information"}),permissionsText:s.formatMessage({id:"UeLR3Q",defaultMessage:"Permissions"}),loadingPermissionsTooltip:s.formatMessage({id:"HeE9lA",defaultMessage:"Checking access privileges..."}),notPermittedToPermissionsTabTooltip:s.formatMessage({id:"7M5q3Y",defaultMessage:"This account does not have access to view permissions for this principal"}),isPermissionsPermittedToGetErrorTitle:s.formatMessage({id:"TiIPQw",defaultMessage:"Something went wrong"}),isPermissionsPermittedToGetErrorDescription:s.formatMessage({id:"WxAwBf",defaultMessage:"We were unable to check if this user can view permissions, please try again later"}),rolesText:s.formatMessage({id:"+mneRr",defaultMessage:"Roles"})},{pathname:p}=(0,g.zy)(),{groupId:d=""}=(0,f.g)(),c=(0,A.e)(),{goToRoute:u}=(0,o.Nx)(),{goToRoute:m}=(0,o.E_)(),{goToRoute:y}=(0,o.G8)(),{goToRoute:h}=(0,o.L3)(),{goToRoute:$}=(0,o.c8)(),{goToRoute:E}=(0,o.Z5)(),{goToRoute:M}=(0,o.vt)(),{goToRoute:k}=(0,o.gd)(),{data:S,loading:C}=(0,v.Q)({principalId:d,principalType:P.JG.GROUP,variables:{permission:T.iX.GET_GROUP_RULE_SET},additionalQueryOptions:{skip:!0}}),R=S?.accountConsoleIsPermitted?.errors?.[0]?.message,Y=S?.accountConsoleIsPermitted?.isPermitted||!0,U=[];n||U.push({text:l.membersText,key:"members",disabled:!1}),(r||t&&!x.E.includes(t))&&U.push({text:l.groupInformation,key:"information",disabled:!1}),U.push({text:l.rolesText,key:"roles",disabled:!1}),U.push({text:l.permissionsText,key:"permissions",disabled:C||!Y,tooltipContent:R?l.isPermissionsPermittedToGetErrorDescription:C?l.loadingPermissionsTooltip:Y?void 0:l.notPermittedToPermissionsTabTooltip});let w=U.map(({text:e,key:t,disabled:r,tooltipContent:a})=>({key:t,disabled:r,tabContents:(0,i.Y)(b.m,{componentId:"AccountsUI.GroupDetailsTabsLayout.TabTooltip",content:a,children:(0,i.Y)("span",{children:e})})})),D=(0,a.useMemo)(()=>p.match(/^\/user-management\/groups\/[0-9a-f-]+\/(?<activeTab>\w+)/)?.groups?.activeTab,[p]),L=n?"information":"members",F=D??L;return(0,i.FD)("div",{css:c.root,children:[(0,i.FD)(G.Root,{componentId:"accounts-group-details-tabs-layout-tabs",defaultValue:L,value:F,onValueChange:e=>{switch(e){case"members":r?$(d):u(d);break;case"information":r?E(d):m(d);break;case"roles":r?k(d):h(d);break;case"permissions":r?M(d):y(d);break;default:return}},children:[(0,i.Y)(G.List,{children:w.map(({key:e,disabled:t,tabContents:r})=>(0,i.Y)(G.Trigger,{value:e,disabled:t,children:r},e))}),w.map(({key:e})=>(0,i.Y)(G.Content,{value:e},e))]}),e]})};var E=r(548804),M=r(332340),k=r(940289);let S=e=>{let t,r={groupsLabel:(t=(0,I.tz)()).formatMessage({id:"GS8MpL",defaultMessage:"Groups"}),exclusiveLabel:t.formatMessage({id:"qxBkn9",defaultMessage:"Exclusive"}),addGroupText:t.formatMessage({id:"VmyS6k",defaultMessage:"Add group"}),unnamedGroupText:t.formatMessage({id:"kTadxz",defaultMessage:"Unnamed group"}),errorTitle:t.formatMessage({id:"ASHuf+",defaultMessage:"Error"}),notFoundTitle:t.formatMessage({id:"0x3ozH",defaultMessage:"Not found"}),invalidGroupId:t.formatMessage({id:"YoqOdI",defaultMessage:"Invalid group ID"})},{pathname:a}=(0,g.zy)(),v=(0,h.d)(),{groupId:T=""}=(0,f.g)(),A=-1!==a.search(/^\/user-management\/groups$/),b=-1!==a.search(/^\/user-management\/groups\/[0-9a-z]+/),G=-1!==a.search(/^\/user-management\/groups\/add/),{goToRoute:x}=(0,o.jb)(),{goToRoute:P}=(0,o.VL)(),{goToRoute:S}=(0,o.Nx)(),{goToRoute:C}=(0,o.c8)(),{goToRoute:R}=(0,o.E_)(),Y=(0,k.A)(),{groupName:U,externalId:w,groupId:D,loading:L,error:F,isGroupIdInvalid:z,isExclusive:_}=(0,n.H)(T),{isEnabled:q}=(0,y.Im)(),O=(0,c.W)("databricks.fe.accountsui.enableExclusiveGroupsUi",!1),B=(0,c.W)("databricks.fe.deprecateExclusiveGroupsUi",!1),N={...e,headerProps:{...e.headerProps,title:(0,i.FD)(i.FK,{children:[e?.headerProps?.title||U||""," ",!B&&O&&_&&(0,i.Y)(l.v,{componentId:"AccountsUi.AccountGroupsLayout.ExclusiveGroup.Tag",children:r.exclusiveLabel})]})},breadcrumbItems:(()=>{let t={label:r.groupsLabel,onClick:x},i={label:r.addGroupText,onClick:P},a={label:e?.headerProps?.title||U||D||w||"",onClick:()=>{_?R(T):w&&q?C(w):S(T)}};if(F)return[t];if(G)return[t,i];if(b){if(z)return[t];return[t,a]}})(),showSeparator:!(A||b||w)},H=(0,o.OQ)(),V=_&&H;if(L)return(0,i.FD)(i.FK,{children:[(0,i.Y)(u.R,{loading:!0,description:m.z.USER_MANAGEMENT_DATA_LOADING}),(0,i.Y)(M.X,{})]});if(!G&&b){if(!T||z||V)return(0,i.Y)(s.C,{...N,children:(0,i.Y)("div",{css:v.errorPage,children:(0,i.Y)("div",{css:{padding:"48px 32px"},children:(0,i.Y)(p.S,{image:(0,i.Y)(d.A,{}),title:r.notFoundTitle,description:""})})})});if(F)return(0,i.Y)("div",{css:v.errorPage,children:(0,i.Y)("div",{css:{padding:"48px 32px"},children:(0,i.Y)(p.S,{image:(0,i.Y)(d.A,{}),title:r.errorTitle,description:F.message})})});if(!w&&!D)return(0,i.Y)("div",{css:v.errorPage,children:(0,i.Y)("div",{css:{padding:"48px 32px"},children:(0,i.Y)(p.S,{image:(0,i.Y)(d.A,{}),title:r.notFoundTitle,description:""})})})}return(0,i.Y)(s.C,{...N,children:(()=>{let{children:t}=e;if(G)return t;if(A)return(0,i.Y)(E.P,{children:t});if(b)return(0,i.Y)($,{children:t,groupName:U,isSeamlessView:Y,isExclusiveView:_});return t})()})}},123061:(e,t,r)=>{r.d(t,{$:()=>n});var i=r(141078),a=r(655841);let n=e=>(0,i.n_)(a.fq,e)},375001:(e,t,r)=>{r.d(t,{E:()=>a,K:()=>i});let i=["users","admins","externalUsers"],a=["account users","DB - RESERVED - account admins","DB - RESERVED - Databricks support"]},548804:(e,t,r)=>{r.d(t,{P:()=>u});var i,a=r(610435);r(692738);var n=r(98812),s=r(711151),o=r(391249),l=r(647660),p=r(858383),d=r(342411),c=((i={}).USERS="users",i.GROUPS="groups",i.SERVICE_PRINCIPALS="serviceprincipals",i);let u=e=>{let t,r={serviceText:(t=(0,d.tz)()).formatMessage({id:"hdjTti",defaultMessage:"Service principals"}),usersText:t.formatMessage({id:"o3s9GT",defaultMessage:"Users"}),groupsText:t.formatMessage({id:"qX+e8a",defaultMessage:"Groups"})},{children:i}=e,{pathname:u}=(0,p.zy)(),m=(0,s.e)(),g=(0,n.w4)("enableGroupsUi"),f=(0,n.w4)("enableServicePrincipalsUi"),{goToRoute:y}=(0,o.XT)(),{goToRoute:I}=(0,o.jb)(),{goToRoute:h}=(0,o.Nu)(),v=[{text:r.usersText,key:"users"},...f?[{text:r.serviceText,key:"serviceprincipals"}]:[],...g?[{text:r.groupsText,key:"groups"}]:[]],T=(()=>{for(let e in c)if(({}).hasOwnProperty.call(c,e)){let t=c[e];if(u.endsWith(t))return t}})()??"users";return g?(0,a.FD)("div",{css:m.root,children:[(0,a.FD)(l.Root,{componentId:"accounts-users-groups-tabs-layout-tabs",defaultValue:"users",value:T,onValueChange:e=>{switch(e){case"users":y();break;case"serviceprincipals":h();break;case"groups":I();break;default:return}},children:[(0,a.Y)(l.List,{children:v.map(({text:e,key:t})=>(0,a.Y)(l.Trigger,{value:t,children:e},t))}),v.map(({key:e})=>(0,a.Y)(l.Content,{value:e},e))]}),i]}):(0,a.Y)("div",{children:i})}},655841:(e,t,r)=>{r.d(t,{GX:()=>c,HA:()=>n,Ij:()=>d,U8:()=>a,_:()=>s,e:()=>l,fq:()=>u,n$:()=>p,r4:()=>o});var i=r(141078);let a=(0,i.J1)`
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
`,n=(0,i.J1)`
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
  ${a}
`,o=(0,i.J1)`
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
`,l=(0,i.J1)`
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
`,p=(0,i.J1)`
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
`,c=(0,i.J1)`
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
`},675823:(e,t,r)=>{r.d(t,{z:()=>n});var i=r(141078),a=r(655841);let n=e=>(0,i.n_)(a.GX,e)},710056:(e,t,r)=>{r.d(t,{C:()=>l});var i=r(610435);r(692738);var a=r(236382),n=r(273378),s=r(497895),o=r(814510);let l=e=>{let{className:t,children:r,headerProps:l,breadcrumbItems:p=[],showSeparator:d=!0}=e,{theme:c}=(0,s.wn)(),{title:u,...m}=l;return(0,i.FD)("div",{className:t,css:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,i.Y)(a.j,{title:u,breadcrumbs:p.length>0?(0,i.Y)(o.Q,{children:p.map(({label:e,onClick:t},r)=>(0,i.Y)(o.Q.Item,{children:t?(0,i.Y)("a",{role:"link",onClick:t,children:e}):e},r))}):void 0,...m}),d&&(0,i.Y)(n.c,{style:{margin:`${c.spacing.sm}px 0`}}),r]})}},711151:(e,t,r)=>{r.d(t,{e:()=>n});var i=r(956935),a=r(497895);let n=()=>{let{theme:e}=(0,a.wn)();return{root:(0,i.AH)({minHeight:0,flexGrow:1,display:"flex",flexDirection:"column"}),tabs:(0,i.AH)({marginBottom:e.spacing.lg})}}},814510:(e,t,r)=>{let i;r.d(t,{Q:()=>c});var a=r(610435),n=r(956935),s=r(930125),o=r(429608),l=r(497895),p=r(955210),d=r(123252);let c=((i=({dangerouslySetAntdProps:e,includeTrailingCaret:t=!0,...r})=>{let{theme:c,classNamePrefix:u}=(0,l.wn)(),m=`.${u}-breadcrumb-separator`,g=(0,n.AH)({"span:last-child a":{color:c.colors.primary,":hover, :focus":{color:"#2272B4"}},a:{"&:focus-visible":{outlineColor:`${c.colors.actionDefaultBorderFocus} !important`,outlineStyle:"auto !important"}},[m]:{fontSize:c.general.iconFontSize,"& .anticon":{fontSize:13}},"& > span":{display:"inline-flex",alignItems:"center"}});return(0,a.Y)(o.wC,{children:(0,a.FD)(s.A,{...(0,d.VG)(),separator:(0,a.Y)(p.A,{}),...r,...e,css:(0,n.AH)((0,o.Cx)(c.options.enableAnimation),g),children:[r.children,t&&r.children&&(0,a.Y)(i.Item,{children:" "})]})})}).Item=s.A.Item,i.Separator=s.A.Separator,i)},872899:(e,t,r)=>{r.d(t,{gb:()=>u,Im:()=>g,Tn:()=>m});var i=r(483588),a=r(441535),n=r(686560),s=r(141078),o=r(778529),l=r.n(o),p=r(496720);let d="aclmanagerAimcontrolpolicyGetAimControlPolicy",c=(0,s.J1)`
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
`,u=e=>(0,s.IT)(c,e);(({query:e,response:t,variables:r})=>({debug:i=!1,graphQLErrors:a,networkError:n,override:o,result:d,variables:c,...u}={})=>{let m=(0,p.h1)({},r,c),g=(0,p.h1)({},t,o);return i&&console.log(`
Type: mockResponse

Operation: ${(0,s.n4)(e)}

Variables: ${(0,p.GP)(m)}

Response: ${(0,p.GP)(g)}

GraphQL Errors: ${(0,p.GP)(a?.map(p.XY))}

Network Error: ${(0,p.GP)(n?(0,p.XY)(n):void 0)}

`),{error:n?(0,p.XY)(n):void 0,request:{query:e,variables:m},result:l()(d)?{data:g,errors:a?.map(e=>(0,p.XY)(e))??void 0}:d,...u}})({query:c,response:{[d]:{__typename:"AclmanagerAimcontrolpolicyAimControlPolicy",state:i.zYk.ALLOW_ALL,apiError:null,oktaIdpConfig:null,entraIdIdpConfig:null}},variables:{input:{}}});let m=(e,t)=>{if(!t)return;e.writeQuery({query:c,variables:{input:{}},data:{[d]:{...t,apiError:null}}})},g=()=>{let e=0===(0,n.d)("orgId_new",0)||(0,n.d)("identityFederationEnabled",!1),t=(0,a.W)("databricks.identity.seamless.seamlessOnboardingAvailable",!0),{data:r,loading:s,error:o}=u({variables:{input:{}},skip:!t||!e});if(!e||!t)return{isEnabled:!1,loading:!1,error:void 0};let l=r?.aclmanagerAimcontrolpolicyGetAimControlPolicy,p=!!l?.apiError;return{isEnabled:!!(!o&&!p&&!s&&l?.state!==null&&l?.state!==void 0&&l?.state!==i.zYk.DISABLED&&l?.state!==i.zYk.STATE_UNSPECIFIED),loading:s,error:o||(p?{message:l?.apiError?.message??"Unknown error"}:void 0)}}},901741:(e,t,r)=>{r.d(t,{d:()=>s});var i=r(956935),a=r(850455),n=r(497895);let s=()=>{let{theme:e}=(0,n.wn)();return{root:(0,i.AH)({width:"100%",height:"auto",paddingBottom:e.spacing.lg,"> *":{width:"100%"}}),caption:(0,i.AH)({color:e.colors.textSecondary}),formSection:(0,i.AH)({marginBottom:a.Z.spacing.xlg}),inputRow:(0,i.AH)({alignItems:"baseline","> *":{width:"256px"}}),errorPage:(0,i.AH)({display:"flex",flexDirection:"column",height:"100%",justifyContent:"center"}),link:(0,i.AH)({fontSize:e.typography.fontSizeMd})}}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/66655.bd397ee901.chunk.js.map