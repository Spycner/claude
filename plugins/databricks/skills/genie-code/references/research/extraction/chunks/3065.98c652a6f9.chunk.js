"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[3065],{26446:(e,t,r)=>{r.d(t,{HT:()=>u,M8:()=>p,Pf:()=>l,bp:()=>o,gb:()=>n,iN:()=>c,pP:()=>a,xB:()=>d});let n=1e3,a={enableAccountGroups:!1,enableAccountServicePrincipals:!1,enableAccountUsers:!1,enableWorkspaceGroups:!1,enableWorkspaceServicePrincipals:!1,enableWorkspaceUsers:!1},i=/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,s={admins:"Admins",users:"All workspace users","account users":"All account users"},l=e=>{if(!e)return e;return s[e]??e},o=e=>{let t=new Map;return e.forEach(e=>{let r=u(e)||e.name;t.has(r)||t.set(r,[]),t.get(r)?.push(e)}),t},c=e=>{switch(e.kind){case"user":return e.fullName;case"serviceprincipal":return e.name;case"group":return e.displayName;default:return""}},u=e=>{switch(e.kind){case"user":case"group":return e.name||"";case"serviceprincipal":return e.applicationId||"";default:return""}},p=({uniqueName:e,id:t,kind:r,displayName:n})=>{switch(r){case"user":return{id:t||"",optionId:`user.${t}`,kind:r,name:e||"",fullName:n||"",title:""};case"serviceprincipal":return{id:t||"",optionId:`serviceprincipal.${t}`,kind:r,name:n||"",applicationId:e||"",title:""};case"group":return{id:t||"",optionId:`group.${t}`,kind:r,name:e||"",displayName:l(e||""),title:""};default:return}};function d(e){return e?i.test(e)?"serviceprincipal":"user":void 0}},90710:(e,t,r)=>{r.d(t,{Y:()=>p});var n=r(610435),a=r(956935),i=r(692738),s=r(497895),l=r(861166),o=r(997791),c=r(639712),u=r(123252);let p=({breadcrumbs:e,title:t,titleAddOns:r,dangerouslyAppendEmotionCSS:p,buttons:d,children:m,titleElementLevel:g,allowTitleWrap:f=!0,...y})=>{let I,{classNamePrefix:h,theme:A}=(0,s.wn)(),v=Array.isArray(d)?d:d?[d]:[],b={titleWrapper:(0,a.AH)({display:"flex",alignItems:"flex-start",justifyContent:"space-between",flexWrap:f?"wrap":"nowrap",rowGap:A.spacing.sm,...0===v.length&&{paddingTop:e?0:A.spacing.xs/2,paddingBottom:A.spacing.xs/2}}),breadcrumbWrapper:(0,a.AH)({lineHeight:A.typography.lineHeightBase,marginBottom:A.spacing.xs}),title:(0,a.AH)({marginTop:0,marginBottom:"0 !important",alignSelf:"stretch",...!f&&{flex:1,minWidth:0}}),titleIfOtherElementsPresent:(0,a.AH)({marginTop:2}),buttonContainer:(0,a.AH)({marginLeft:8}),titleAddOnsWrapper:(0,a.AH)({display:"inline-flex",verticalAlign:"middle",alignItems:"center",flexWrap:"wrap",marginLeft:A.spacing.sm,gap:A.spacing.xs})};return(0,n.FD)("div",{...(0,u.VG)(),css:[(I={[`.${h}-breadcrumb`]:{lineHeight:A.typography.lineHeightBase}},(0,a.AH)((0,c.dg)(I))),p],...y,children:[e&&(0,n.Y)("div",{css:b.breadcrumbWrapper,children:e}),(0,n.FD)("div",{css:b.titleWrapper,children:[(0,n.FD)(o.h,{level:2,elementLevel:g,css:[b.title,(d||e)&&b.titleIfOtherElementsPresent],children:[t,r&&(0,n.Y)("span",{css:b.titleAddOnsWrapper,children:r})]}),d&&(0,n.Y)("div",{css:b.buttonContainer,children:(0,n.Y)(l.$,{dangerouslySetAntdProps:{wrap:!0},size:8,children:v.filter(Boolean).map((e,t)=>{let r=`dubois-header-button-${t}`;return i.isValidElement(e)?i.cloneElement(e,{key:e.key||r}):(0,n.Y)(i.Fragment,{children:e},r)})})})]})]})}},316097:(e,t,r)=>{r.d(t,{M:()=>o});var n=r(610435);r(692738);var a=r(814510),i=r(342411),s=r(662013),l=r(217985);function o({componentId:e,children:t}){let r=(0,s.Fq)();return(0,n.FD)(a.Q,{children:[(0,n.Y)(a.Q.Item,{children:(0,n.Y)(l.N,{componentId:e,to:r?"/settings/governance/data":"/explore/data",asAnchorTag:!0,children:r?(0,n.Y)(i.sA,{id:"4D/lka",defaultMessage:"Governance"}):(0,n.Y)(i.sA,{id:"NR3w+3",defaultMessage:"Catalog Explorer"})})}),t]})}},595615:(e,t,r)=>{r.d(t,{AO:()=>p,Ox:()=>m,RK:()=>f,ic:()=>y,rA:()=>g,uV:()=>d});var n=r(692738),a=r(160603),i=r(441535),s=r(412836),l=r(425373);function o(e,t,r,n,a,i,s){try{var l=e[i](s),o=l.value}catch(e){r(e);return}l.done?t(o):Promise.resolve(o).then(n,a)}(0,a.setLogger)({log:console.log,warn:console.warn,error:()=>{}});let c={retry:!1,refetchOnWindowFocus:!1,staleTime:3e5},u=new Map;function p(e){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),r={...c,...e,enabled:e?.enabled!==!1&&t},n={...c,...e,enabled:e?.enabled!==!1&&!t};u.set(JSON.stringify(e.queryKey),e.queryKey);let l=(0,s.IT)(r),o=(0,a.useQuery)(n);return t?l:o}function d({queries:e}){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),r=e.map(e=>({...c,...e,enabled:e?.enabled!==!1&&t})),n=e.map(e=>({...c,...e,enabled:e?.enabled!==!1&&!t}));e.forEach(e=>u.set(JSON.stringify(e.queryKey),e.queryKey));let s=(0,l.E)({queries:r}),o=(0,a.useQueries)(n);return t?s:o}function m({queryFn:e}){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),r=(0,a.useQueryClient)(),l=e();return(0,n.useCallback)((e,n={})=>t?s.aH.getActiveValue().fetchQuery({...n,...l(e)},c):r.fetchQuery({...n,...l(e)},c),[l,t,r])}function g(){let[e,t]=(0,n.useState)(0),r=(0,a.useQueryClient)(),l=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1);return{invalidate:(e,n)=>{var a;return(a=function*(){t(e=>e+1);try{if(e)yield l?s.aH.getActiveValue().invalidateQueries(e):r.invalidateQueries(e),u.delete(JSON.stringify(e));else{let e=Array.from(u.values()).filter(e=>{if(!Array.isArray(e))return!1;if(!n)return!0;return e.some(e=>"string"==typeof e&&e.includes(n))}).filter(e=>void 0!==e).map(e=>l?s.aH.getActiveValue().invalidateQueries(e):r.invalidateQueries(e));yield Promise.allSettled(e),u=new Map}}finally{t(e=>e-1)}},function(){var e=this,t=arguments;return new Promise(function(r,n){var i=a.apply(e,t);function s(e){o(i,r,n,s,l,"next",e)}function l(e){o(i,r,n,s,l,"throw",e)}s(void 0)})})()},isLoadingInvalidation:e>0}}function f(e){for(let t of e){let e=t.isIdle??void 0;if(!y({isIdle:e,status:t.status??void 0,fetchStatus:t.fetchStatus??void 0}))return!1}return!0}function y(e){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),r=e.isIdle??!1;if(t)return"fetchStatus"in e&&"loading"===e.status&&"idle"===e.fetchStatus;return r}},655841:(e,t,r)=>{r.d(t,{GX:()=>p,HA:()=>i,Ij:()=>u,U8:()=>a,_:()=>s,e:()=>o,fq:()=>d,n$:()=>c,r4:()=>l});var n=r(141078);let a=(0,n.J1)`
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
`,i=(0,n.J1)`
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
`,s=(0,n.J1)`
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
`,l=(0,n.J1)`
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
`,o=(0,n.J1)`
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
  ${a}
`,u=(0,n.J1)`
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
`,d=(0,n.J1)`
  mutation GetOrCreateIdpServicePrincipal($input: AclmanagerIdentityapiGetOrCreateServicePrincipalRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateServicePrincipal(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`},691069:(e,t,r)=>{r.d(t,{C:()=>c});var n=r(610435);r(692738);var a=r(497895),i=r(465082),s=r(26971),l=r(777517),o=r(342411);let c=({kind:e,disabled:t,style:r})=>{let{theme:c}=(0,a.wn)(),u=(0,o.tz)(),p={alignItems:"center",background:t?void 0:c.colors.backgroundSecondary,borderRadius:30,color:t?c.colors.actionDisabledText:c.colors.textSecondary,display:"flex",fontSize:20,height:30,justifyContent:"center",width:30};switch(e){case"user":return(0,n.Y)(i.A,{title:u.formatMessage({id:"9vv8Gs",defaultMessage:"User"}),css:r||p});case"group":return(0,n.Y)(s.A,{title:u.formatMessage({id:"Qzw3C/",defaultMessage:"Group"}),css:r||p});case"serviceprincipal":return(0,n.Y)(l.A,{title:u.formatMessage({id:"QrVB43",defaultMessage:"Service Principal"}),css:r||p});default:return null}}},777517:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(610435),a=r(692738),i=r(375214);function s(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 0a.75.75 0 0 1 .75.75V3h5.5a.75.75 0 0 1 .75.75V6h.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75H15v2.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V12H.75a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 .75 6H1V3.75A.75.75 0 0 1 1.75 3h5.5V.75A.75.75 0 0 1 8 0M2.5 4.5v9h11v-9zM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6.25 2.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"})})}let l=(0,a.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:s}));l.displayName="RobotIcon";let o=l},814510:(e,t,r)=>{let n;r.d(t,{Q:()=>p});var a=r(610435),i=r(956935),s=r(930125),l=r(429608),o=r(497895),c=r(955210),u=r(123252);let p=((n=({dangerouslySetAntdProps:e,includeTrailingCaret:t=!0,...r})=>{let{theme:p,classNamePrefix:d}=(0,o.wn)(),m=`.${d}-breadcrumb-separator`,g=(0,i.AH)({"span:last-child a":{color:p.colors.primary,":hover, :focus":{color:"#2272B4"}},a:{"&:focus-visible":{outlineColor:`${p.colors.actionDefaultBorderFocus} !important`,outlineStyle:"auto !important"}},[m]:{fontSize:p.general.iconFontSize,"& .anticon":{fontSize:13}},"& > span":{display:"inline-flex",alignItems:"center"}});return(0,a.Y)(l.wC,{children:(0,a.FD)(s.A,{...(0,u.VG)(),separator:(0,a.Y)(c.A,{}),...r,...e,css:(0,i.AH)((0,l.Cx)(p.options.enableAnimation),g),children:[r.children,t&&r.children&&(0,a.Y)(n.Item,{children:" "})]})})}).Item=s.A.Item,n.Separator=s.A.Separator,n)}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/3065.98c652a6f9.chunk.js.map