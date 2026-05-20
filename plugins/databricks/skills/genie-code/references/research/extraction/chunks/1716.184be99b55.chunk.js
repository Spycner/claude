"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[1716],{26446:(e,n,t)=>{t.d(n,{HT:()=>c,M8:()=>p,Pf:()=>o,bp:()=>l,gb:()=>r,iN:()=>u,pP:()=>a,xB:()=>d});let r=1e3,a={enableAccountGroups:!1,enableAccountServicePrincipals:!1,enableAccountUsers:!1,enableWorkspaceGroups:!1,enableWorkspaceServicePrincipals:!1,enableWorkspaceUsers:!1},i=/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,s={admins:"Admins",users:"All workspace users","account users":"All account users"},o=e=>{if(!e)return e;return s[e]??e},l=e=>{let n=new Map;return e.forEach(e=>{let t=c(e)||e.name;n.has(t)||n.set(t,[]),n.get(t)?.push(e)}),n},u=e=>{switch(e.kind){case"user":return e.fullName;case"serviceprincipal":return e.name;case"group":return e.displayName;default:return""}},c=e=>{switch(e.kind){case"user":case"group":return e.name||"";case"serviceprincipal":return e.applicationId||"";default:return""}},p=({uniqueName:e,id:n,kind:t,displayName:r})=>{switch(t){case"user":return{id:n||"",optionId:`user.${n}`,kind:t,name:e||"",fullName:r||"",title:""};case"serviceprincipal":return{id:n||"",optionId:`serviceprincipal.${n}`,kind:t,name:r||"",applicationId:e||"",title:""};case"group":return{id:n||"",optionId:`group.${n}`,kind:t,name:e||"",displayName:o(e||""),title:""};default:return}};function d(e){return e?i.test(e)?"serviceprincipal":"user":void 0}},122535:(e,n,t)=>{t.d(n,{N:()=>a});var r,a=((r={}).NOT_FOUND="NOT_FOUND",r.MULTIPLE_FOUND="MULTIPLE_FOUND",r.INVALID_ID="INVALID_ID",r.SERVER_ERROR="SERVER_ERROR",r)},140005:(e,n,t)=>{t.d(n,{U:()=>c});var r=t(692738),a=t(141078),i=t(122535),s=t(886100),o=t(22191),l=t(747129),u=t(342145);function c({skip:e}={}){let[n,t]=(0,r.useState)(),{data:p,error:d,loading:m}=(0,a.IT)(u.FQ,{skip:e,fetchPolicy:"cache-first",notifyOnNetworkStatusChange:!0,variables:{first:2,filter:'groupname="account users"'},onError(e){s.iT.sev2BurnRate(o.Es.UserAuthenticationAndManagement,"filebrowser.sharemodal.useAccountUsersGroupPrincipal.queryError",l.i1.P999,l.Ip.Min10,!1,{error:e})},onCompleted(e){t(void 0);let n=e?.allAccountGroups?.groups;n?.[0]?n?.[1]?(t({errorCode:i.N.MULTIPLE_FOUND}),s.iT.sev2BurnRate(o.Es.UserAuthenticationAndManagement,"filebrowser.sharemodal.useAccountUsersGroupPrincipal.multipleAccountUsersGroupsFound",l.i1.P999,l.Ip.Min10,!1,{data:e})):n?.[0]?.id?t(void 0):(t({errorCode:i.N.INVALID_ID}),s.iT.sev2BurnRate(o.Es.UserAuthenticationAndManagement,"filebrowser.sharemodal.useAccountUsersGroupPrincipal.invalidId",l.i1.P999,l.Ip.Min10,!1,{data:e})):(t({errorCode:i.N.NOT_FOUND}),s.iT.sev2BurnRate(o.Es.UserAuthenticationAndManagement,"filebrowser.sharemodal.useAccountUsersGroupPrincipal.accountUsersGroupNotFound",l.i1.P999,l.Ip.Min10,!1,{data:e}))}});if(m)return{loading:!0};let y=p?.allAccountGroups?.groups?.[0]?.id,E=y?`principals/${y}`:void 0,f=d?{errorCode:i.N.SERVER_ERROR,message:d.message}:n;if(void 0!==f)return{loading:!1,error:f};return{data:E,loading:m}}},203101:(e,n,t)=>{t.d(n,{m:()=>i});var r=t(934730),a=t(412836);let i=(e,n)=>(0,a.IT)(["objectsPermissions",{name:e.name}],()=>(0,r.p)(e),{enabled:n,useErrorBoundary:!1})},250213:(e,n,t)=>{t.d(n,{LD:()=>s,Ll:()=>o,qk:()=>l,sG:()=>u});let r=".designer",a={SQL:`${r}.sql`,PYTHON_SOURCE:`${r}.py`,PYTHON_JUPYTER:`${r}.ipynb`},i=Object.values(a);function s(e){if(!e)return!1;return e.endsWith(a.SQL)||e.endsWith(a.PYTHON_SOURCE)||e.endsWith(a.PYTHON_JUPYTER)}let o=()=>a.PYTHON_JUPYTER,l=e=>{for(let n of i)if(e.endsWith(n))return e.slice(0,-n.length);return e},u=(e,n)=>{let t=i.find(e=>n.endsWith(e));if(t&&!e.endsWith(t))return e+t;return e}},272033:(e,n,t)=>{t.r(n),t.d(n,{ShareLinkModal:()=>T});var r=t(610435),a=t(225577),i=t(692738),s=t(694762),o=t(79128),l=t(557351),u=t(382908),c=t(295169),p=t(342411),d=t(483588),m=t(700365),y=t(929117),E=t(711489),f=t(62947),g=t(860567),_=t(184123),v=t(141078);let h=(0,v.J1)`
  mutation ShareLinkMutation($input: UseractivityShareLinkRequestInput!) @component(name: "DBSQLX.FileBrowser") {
    useractivityShareLink(input: $input) {
      apiError {
        code
        message
      }
    }
  }
`;var A=t(505566),R=t(580500),I=t(5697),S=t(855176),N=t(327304);let T=i.forwardRef((e,n)=>{let t=(0,A.h)(),[a,T]=(0,i.useState)(!1),[O,U]=(0,i.useState)(void 0),[b,w]=(0,i.useState)([]),G=(0,i.useRef)(()=>{}),$=(0,i.useRef)(()=>{}),{copyNodeURL:C}=(0,g.B)(E.uy.EventName.COPY_SHARE_URL),D=(0,_.q)(),Y=(0,S.h)();(0,i.useImperativeHandle)(n,()=>({actionHandler:({node:e,afterShareLink:n,afterCancel:t})=>{T(!0),U(e),t&&($.current=t),n&&(G.current=n),Y({action:E.uy.EventName.SHARE_LINK_OPEN,node:e})}}));let F=void 0===O||D,{loading:x,permissions:H}=(0,m.F)({nodeName:O?.name||"",nodeInternalName:O?.internal_name,isEffectiveAccountOnlyUser:D,skip:F}),B=(0,i.useMemo)(()=>D?P:{enableAccountUsers:H?.canShareToAllAccountUsers,enableWorkspaceUsers:H?.canShareToAllWorkspaceUsers,enableWorkspaceGroups:!1,enableWorkspaceServicePrincipals:!1},[D,H]),[V,{loading:W}]=(({onCompleted:e,onError:n})=>(0,v.n_)(h,{onCompleted:e,onError:n}))({onCompleted:e=>{e.useractivityShareLink?.apiError?t.error({message:k.shareLinkErrorMessage}):(t.success({message:k.shareLinkSuccessMessage}),T(!1),w([]),G.current())},onError:()=>{t.error({message:k.shareLinkErrorMessage})}}),q=(0,i.useCallback)(e=>{Array.isArray(e)&&w(e)},[]),z=(0,i.useCallback)(()=>{T(!1),w([]),$.current?.()},[]),J=(0,i.useCallback)(()=>{if(!O)return;let e=(0,R.Uk)(O.name),n=(0,I.ES)(O.type),t=b.map(e=>({principal:`principals/${e.id}`}));Y({action:E.uy.EventName.SHARE_LINK_SEND,node:O,sharePrincipleTypeAggregation:(0,N.t)(b)}),V({variables:{input:{asset:{id:e,name:O.node_name,type:n},principals:t}}})},[O,b,V,Y]);if(!O)return null;return(0,r.FD)(s.aF,{componentId:"codegen_webapp_js_workspace_features_actions_sharelinkmodal.tsx_151",destroyOnClose:!0,visible:a,onCancel:z,title:O.node_name?(0,r.Y)(p.sA,{id:"GUQ8ZY",defaultMessage:"Send the link for {nodeName}",values:{nodeName:O.node_name}}):k.shareLinkModalDefaultTitle,footer:(0,r.FD)(L,{children:[(0,r.Y)(M,{children:(0,r.Y)(o.$n,{componentId:"filebrowser.share_link_modal.copy_link",type:"link",icon:(0,r.Y)(l.A,{}),onClick:()=>{C(O)},children:k.copyLinkButtonLabel})}),(0,r.FD)(M,{children:[(0,r.Y)(o.$n,{componentId:"filebrowser.share_link_modal.cancel",onClick:z,children:k.cancelButtonLabel}),(0,r.Y)(o.$n,{componentId:"filebrowser.share_link_modal.send",type:"primary",onClick:J,loading:W,disabled:0===b.length,children:k.sendButtonLabel})]})]}),children:[(0,r.Y)(u.o.Paragraph,{children:(0,r.Y)(p.sA,{id:"rJaXgw",defaultMessage:"Recipients will be able to view {nodeName}",values:{nodeName:O.node_name}})}),x?(0,r.Y)(c.x,{label:k.loadingSkeletonLabel,loadingDescription:y.z.FILEBROWSER_SHARE_LINK_PERMISSIONS_LOADING,style:{height:32,width:"100%"}}):(0,r.Y)(f.T,{"data-testid":"share-link-modal-subject-select",css:{width:"100%"},...B,placeholder:k.subjectSelectPlaceholder,mode:"multiple",onUpdate:q,disabled:W,provisionSource:d.cMI.PROVISION_SOURCE_FILE})]})}),P={enableAccountUsers:!0,enableWorkspaceGroups:!1,enableWorkspaceServicePrincipals:!1,enableWorkspaceUsers:!1},k={shareLinkModalDefaultTitle:(0,r.Y)(p.sA,{id:"9dlimr",defaultMessage:"Send the link"}),sendButtonLabel:(0,r.Y)(p.sA,{id:"ZRo+je",defaultMessage:"Send"}),cancelButtonLabel:(0,r.Y)(p.sA,{id:"eem3mm",defaultMessage:"Cancel"}),copyLinkButtonLabel:(0,r.Y)(p.sA,{id:"9h60yu",defaultMessage:"Copy Link"}),subjectSelectPlaceholder:(0,r.Y)(p.sA,{id:"4oKf9x",defaultMessage:"Type to add multiple users"}),shareLinkSuccessMessage:(0,r.Y)(p.sA,{id:"g+xURD",defaultMessage:"The link has been shared successfully."}),shareLinkErrorMessage:(0,r.Y)(p.sA,{id:"iqJXTF",defaultMessage:"Failed to share the link."}),loadingSkeletonLabel:(0,r.Y)(p.sA,{id:"aAvdpP",defaultMessage:"Loading..."})},L=(0,a.A)("div",{target:"eat6kot0"})({display:"flex",justifyContent:"space-between",alignItems:"center"}),M=(0,a.A)("div",{target:"eat6kot1"})(({theme:e})=>({display:"flex",alignItems:"center",gap:e.spacing.xs}))},327304:(e,n,t)=>{t.d(n,{F:()=>a,t:()=>i});var r=t(460997);function a(e){if(!e||0===e.length)return;return e.reduce((e,n)=>{let t;return e[t=n.group_name&&r.P.hasOwnProperty(n.group_name)?`all_${n.group_name.replace(/ /g,"")}`:`${n.source??"unknown"}_${(0,r.fz)(n)??"unknown"}`]?e[t]++:e[t]=1,e},{})}function i(e){if(!e||0===e.length)return;return a(e.map(e=>({...(0,r.nu)(e),source:e.source})))}},329099:(e,n,t)=>{t.d(n,{EJ:()=>f,Eu:()=>c,I1:()=>u,JS:()=>E,Oo:()=>_,l4:()=>d,rF:()=>p,rc:()=>m,wV:()=>y});var r,a,i,s,o=t(610435);t(692738);var l=t(342411),u=((r={}).Python="python",r.SQL="sql",r.Scala="scala",r.R="r",r),c=((a={}).CSS="css",a.HTML="html",a.Java="java",a.JavaScript="javascript",a.JSON="json",a.Markdown="markdown",a.PG="pgsql",a.Plain="plain",a.Python="python",a.R="r",a.Scala="scala",a.Shell="sh",a.SQL="sql",a.TypeScript="typescript",a.XML="xml",a.YAML="yaml",a);let p={py:"py",md:"md",mdSandbox:"md-sandbox"},d={sql:"SQL",python:"Python",r:"R",scala:"Scala",markdown:"Markdown",run:"Run Notebook"},m={py:"Python",md:"Markdown"};var y=((i={}).Python="python",i.Scala="scala",i.SQL="sql",i.R="r",i.Markdown="markdown",i);let E=[{name:"Markdown",formattedMessage:(0,o.Y)(l.sA,{id:"xgYBvc",defaultMessage:"Markdown"})},{name:"Python",formattedMessage:(0,o.Y)(l.sA,{id:"chXIsn",defaultMessage:"Python"})},{name:"SQL",formattedMessage:(0,o.Y)(l.sA,{id:"cmxKCK",defaultMessage:"SQL"})},{name:"Scala",formattedMessage:(0,o.Y)(l.sA,{id:"wEJXV9",defaultMessage:"Scala"})},{name:"R",formattedMessage:(0,o.Y)(l.sA,{id:"RDG8ln",defaultMessage:"R"})}],f={markdown:"md",md:"md",python:"python",scala:"scala",sql:"sql",r:"r"};var g=((s={})[s.twoSpacesIndentUnit=2]="twoSpacesIndentUnit",s[s.fourSpacesIndentUnit=4]="fourSpacesIndentUnit",s);function _(){return Object.keys(g).filter(e=>"number"==typeof g[e]).map(e=>parseInt(g[e],10))}},460997:(e,n,t)=>{t.d(n,{E2:()=>_,KM:()=>v,P:()=>c,TI:()=>h,fz:()=>E,nu:()=>f,oQ:()=>R,x0:()=>g,x8:()=>A,xV:()=>d});var r=t(610435);t(139259),t(581488),t(840866),t(692738);var a=t(497895),i=t(382908),s=t(79570),o=t(342411);let l="serviceprincipal",u="group",c={admins:"Admins",users:"All workspace users","account users":"All account users"};function p(e){if(!e)return e;return c[e]??e}function d(e){return!e||0===Object.keys(e).length}let m={user_name:"user",group_name:u,service_principal_name:l},y=Object.keys(m);function E(e){for(let n of y)if(void 0!==e[n])return m[n]}function f(e){return({user:{user_name:e.name},group:{group_name:e.name},serviceprincipal:{service_principal_name:e.name,application_id:e.applicationId}})[e.kind]}function g(e){let n=E(e),t=_(e);return`${n}.${t}`}function _(e){let n=p(e.group_name),t=[e.service_principal_name,n,e.user_name].find(e=>void 0!==e);if(!t)return"";return e.service_principal_name&&e.application_id&&(t=`${t} (${e.application_id})`),t}function v(e){let n=p(e.group_name),t=[e.service_principal_display_name,n,e.user_full_name].find(e=>void 0!==e);if(!t)return;return t}function h(e){let n=p(e.group_name),t=[e.service_principal_name,n,e.user_name].find(e=>void 0!==e);if(!t)return"";return t}function A(e){return e?.replace("principals/","")||e}function R(e){let{theme:n}=(0,a.wn)(),t=E(e),c=v(e),p=h(e),d=(0,r.Y)(i.o.Text,{"data-testid":"principal-text",ellipsis:!0,css:{paddingLeft:n.spacing.sm},children:c||p});if(t===u)return d;let m=function(e){let n=(0,o.tz)(),t=E(e);if(t===u)return null;let r=v(e),a=h(e),i=t===l;return void 0!==r?n.formatMessage(I.fullNameTooltip,{isSP:i,username:a}):n.formatMessage(i?I.usernameTooltipSP:I.usernameTooltipUser)}(e);return(0,r.Y)(s.m,{side:"top",align:"start",content:m,componentId:"principal-text-tooltip",children:(0,r.Y)("span",{children:d})})}let I={fullNameTooltip:(0,o.zR)({id:"6ZKCbF",defaultMessage:"{isSP, select, true {Service principal's UUID} other {User's email}}: {username}"}),usernameTooltipUser:(0,o.zR)({id:"Ie1iLy",defaultMessage:"This user did not configure their full name"}),usernameTooltipSP:(0,o.zR)({id:"Au1O0S",defaultMessage:"This service principal doesn't have a display name"})}},465082:(e,n,t)=>{t.d(n,{A:()=>l});var r=t(610435),a=t(692738),i=t(375214);function s(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a3.25 3.25 0 1 0 0 6.5A3.25 3.25 0 0 0 8 1M6.25 4.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M8 9a8.74 8.74 0 0 0-6.836 3.287.75.75 0 0 0-.164.469v1.494c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75v-1.494a.75.75 0 0 0-.164-.469A8.74 8.74 0 0 0 8 9m-5.5 4.5v-.474A7.23 7.23 0 0 1 8 10.5c2.2 0 4.17.978 5.5 2.526v.474z",clipRule:"evenodd"})})}let o=(0,a.forwardRef)((e,n)=>(0,r.Y)(i.I,{ref:n,...e,component:s}));o.displayName="UserIcon";let l=o},537287:(e,n,t)=>{t.d(n,{XI:()=>c,ZN:()=>u,cd:()=>a,wL:()=>l});var r=t(993533);function a(e){return!!e&&e!==r.ezR.NONE&&e!==r.ezR.UNSPECIFIED}let i={[r.ezR.GPU_1xA10]:"A10",[r.ezR.GPU_1xH100]:"1xH100",[r.ezR.GPU_8xH100]:"H100"},s={[r.ezR.GPU_1xA10]:"GPU 1xA10",[r.ezR.GPU_1xH100]:"GPU 1xH100",[r.ezR.GPU_8xH100]:"GPU 8xH100"},o=Object.fromEntries(Object.entries(i).map(([e,n])=>[n,e]));function l(e){if(!a(e))return null;return s[e]??null}function u(e){if(!e)return null;return o[e]??null}function c(e){return null!=e&&e in i?e:u(e)}},655841:(e,n,t)=>{t.d(n,{GX:()=>p,HA:()=>i,Ij:()=>c,U8:()=>a,_:()=>s,e:()=>l,fq:()=>d,n$:()=>u,r4:()=>o});var r=t(141078);let a=(0,r.J1)`
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
`,i=(0,r.J1)`
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
`,s=(0,r.J1)`
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
`,o=(0,r.J1)`
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
`,l=(0,r.J1)`
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
`,u=(0,r.J1)`
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
`,c=(0,r.J1)`
  mutation GetOrCreateIdpUser($input: AclmanagerIdentityapiGetOrCreateUserRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateUser(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,p=(0,r.J1)`
  mutation GetOrCreateIdpGroup($input: AclmanagerIdentityapiGetOrCreateGroupRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateGroup(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,d=(0,r.J1)`
  mutation GetOrCreateIdpServicePrincipal($input: AclmanagerIdentityapiGetOrCreateServicePrincipalRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateServicePrincipal(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`},691069:(e,n,t)=>{t.d(n,{C:()=>u});var r=t(610435);t(692738);var a=t(497895),i=t(465082),s=t(26971),o=t(777517),l=t(342411);let u=({kind:e,disabled:n,style:t})=>{let{theme:u}=(0,a.wn)(),c=(0,l.tz)(),p={alignItems:"center",background:n?void 0:u.colors.backgroundSecondary,borderRadius:30,color:n?u.colors.actionDisabledText:u.colors.textSecondary,display:"flex",fontSize:20,height:30,justifyContent:"center",width:30};switch(e){case"user":return(0,r.Y)(i.A,{title:c.formatMessage({id:"9vv8Gs",defaultMessage:"User"}),css:t||p});case"group":return(0,r.Y)(s.A,{title:c.formatMessage({id:"Qzw3C/",defaultMessage:"Group"}),css:t||p});case"serviceprincipal":return(0,r.Y)(o.A,{title:c.formatMessage({id:"QrVB43",defaultMessage:"Service Principal"}),css:t||p});default:return null}}},700365:(e,n,t)=>{t.d(n,{F:()=>s});var r=t(140005),a=t(812159),i=t(203101);function s({nodeName:e,nodeInternalName:n,isEffectiveAccountOnlyUser:t=!1,skip:o=!1}){let{data:l,loading:u}=(0,r.U)({skip:o}),{data:c,loading:p}=(0,a.i)({skip:o||t}),{data:d,isLoading:m}=(0,i.m)({name:e,internal_name:n},!o);if(o)return{loading:!1};if(u||p||m)return{loading:!0};let y=[...d?.permissions??[],...d?.expanded_permissions??[]],E=!!l&&y.some(e=>e.principal===l),f=!!c&&y.some(e=>e.principal===c);if(t)return{loading:!1,permissions:{canShareToAllWorkspaceUsers:!1,canShareToAllAccountUsers:E}};return{loading:!1,permissions:{canShareToAllWorkspaceUsers:E||f,canShareToAllAccountUsers:E}}}},777517:(e,n,t)=>{t.d(n,{A:()=>l});var r=t(610435),a=t(692738),i=t(375214);function s(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 0a.75.75 0 0 1 .75.75V3h5.5a.75.75 0 0 1 .75.75V6h.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75H15v2.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V12H.75a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 .75 6H1V3.75A.75.75 0 0 1 1.75 3h5.5V.75A.75.75 0 0 1 8 0M2.5 4.5v9h11v-9zM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6.25 2.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"})})}let o=(0,a.forwardRef)((e,n)=>(0,r.Y)(i.I,{ref:n,...e,component:s}));o.displayName="RobotIcon";let l=o},791229:(e,n,t)=>{t.d(n,{U:()=>o,a:()=>s});var r=t(537287),a=t(993533),i=t(521200);let s=e=>{if(!e)return!1;{let{kind:n,enableServerlessCompute:t,enable_serverless_compute:r}=e;if(n===a.ch$.SERVERLESS_PREVIEW||n===a.ch$.SERVERLESS_REPL_VM)return!0;if(void 0!==t)return t;if(void 0!==r)return r}if("attrs"in e){let{kind:n,enableServerlessCompute:t}=e.attrs??{};return n===a.ch$.SERVERLESS_PREVIEW||n===a.ch$.SERVERLESS_REPL_VM||t}if("attributes"in e){let{kind:n,enableServerlessCompute:t}=e.attributes??{};return n===a.ch$.SERVERLESS_PREVIEW||n===a.ch$.SERVERLESS_REPL_VM||t}};function o(e,n){return(0,i.Qb)()&&!!s(e)&&(0,r.cd)(n)}},812159:(e,n,t)=>{t.d(n,{i:()=>c});var r=t(692738),a=t(141078),i=t(122535),s=t(886100),o=t(22191),l=t(747129),u=t(342145);function c({skip:e}={}){let[n,t]=(0,r.useState)(),{data:p,error:d,loading:m}=(0,a.IT)(u.nU,{skip:e,fetchPolicy:"cache-first",notifyOnNetworkStatusChange:!0,variables:{first:2,filter:'groupname="users"'},onError(e){s.iT.sev2BurnRate(o.Es.UserAuthenticationAndManagement,"filebrowser.shareLinkModal.useWorkspaceUsersGroupPrincipal.queryError",l.i1.P999,l.Ip.Min10,!1,{error:e})},onCompleted(e){t(void 0);let n=e?.allWorkspaceGroups?.groups;n?.[0]?n?.[1]?(t({errorCode:i.N.MULTIPLE_FOUND}),s.iT.sev2BurnRate(o.Es.UserAuthenticationAndManagement,"filebrowser.shareLinkModal.useWorkspaceUsersGroupPrincipal.multipleWorkspaceUsersGroupsFound",l.i1.P999,l.Ip.Min10,!1,{data:e})):n?.[0]?.id?t(void 0):(t({errorCode:i.N.INVALID_ID}),s.iT.sev2BurnRate(o.Es.UserAuthenticationAndManagement,"filebrowser.shareLinkModal.useWorkspaceUsersGroupPrincipal.invalidId",l.i1.P999,l.Ip.Min10,!1,{data:e})):(t({errorCode:i.N.NOT_FOUND}),s.iT.sev2BurnRate(o.Es.UserAuthenticationAndManagement,"filebrowser.shareLinkModal.useWorkspaceUsersGroupPrincipal.workspaceUsersGroupNotFound",l.i1.P999,l.Ip.Min10,!1,{data:e}))}});if(m)return{loading:!0};let y=p?.allWorkspaceGroups?.groups?.[0]?.id,E=y?`principals/${y}`:void 0,f=d?{errorCode:i.N.SERVER_ERROR,message:d.message}:n;if(void 0!==f)return{loading:!1,error:f};return{data:E,loading:m}}},855176:(e,n,t)=>{t.d(n,{B:()=>y,h:()=>d});var r=t(692738),a=t(485669),i=t(967166),s=t(87221),o=t(711489),l=t(580500),u=t(5697);let c=e=>{if(!e)return o.uy.NodeType.UNKNOWN;switch(e){case u.Z6.Root:return o.uy.NodeType.ROOT;case u.Z6.Folder:return o.uy.NodeType.FOLDER;case u.Z6.Project:return o.uy.NodeType.PROJECT;case u.Z6.Notebook:return o.uy.NodeType.NOTEBOOK;case u.Z6.Experiment:return o.uy.NodeType.EXPERIMENT;case u.Z6.Library:return o.uy.NodeType.LIBRARY;case u.Z6.Dashboard:return o.uy.NodeType.DASHBOARD;case u.Z6.Query:return o.uy.NodeType.QUERY;case u.Z6.Alert:return o.uy.NodeType.ALERT;case u.Z6.AlertV2:return o.uy.NodeType.ALERT_V2;case u.Z6.File:return o.uy.NodeType.FILE;case u.Z6.Symlink:return o.uy.NodeType.SYMLINK;case u.Z6.Lakeview:return o.uy.NodeType.LAKEVIEW;case u.Z6.DataRoom:return o.uy.NodeType.DATA_ROOM;case u.Z6.Pipeline:return o.uy.NodeType.PIPELINE;case u.Z6.LakewatchQuery:return o.uy.NodeType.LAKEWATCH_QUERY;default:return o.uy.NodeType.UNKNOWN}},p=e=>{if(!e)throw Error("node required to log action");return e},d=()=>{let e=(0,i.hG)();return(0,r.useCallback)(({action:n,node:t,source:r,eventType:a,nodeId:i,notifyNewUsers:s,sharePrincipleTypeAggregation:d})=>{let y=r||m();switch(n){case o.uy.EventName.IMPORT:e({filebrowser_actions_log:{event_name:n,event_type:a,source:y}});break;case o.uy.EventName.OPEN:case o.uy.EventName.OPEN_GIT:case o.uy.EventName.OPEN_GIT_BY_TAG:case o.uy.EventName.CREATE:case o.uy.EventName.CLONE:case o.uy.EventName.CLONE_REDASH_TO_LAKEVIEW:case o.uy.EventName.COPY_URL:case o.uy.EventName.COPY_SHARE_URL:case o.uy.EventName.COPY_PATH:case o.uy.EventName.COPY_RELATIVE_PATH:case o.uy.EventName.COPY_SYMLINK_TARGET_PATH:case o.uy.EventName.RENAME:case o.uy.EventName.MOVE:case o.uy.EventName.DRAG_MOVE:case o.uy.EventName.DELETE:case o.uy.EventName.SHARE:case o.uy.EventName.SHARE_MODIFY:case o.uy.EventName.SHARE_TO_ORG:case o.uy.EventName.SHARE_LINK_OPEN:{let r=p(t);e({filebrowser_actions_log:{event_name:n,event_type:a,source:y,is_in_repo:(0,l.gg)(r),node_type:c(r.type),node_id:i??r.name}});break}case o.uy.EventName.SHARE_ADD:{let r=p(t);e({filebrowser_actions_log:{event_name:n,event_type:a,source:y,is_in_repo:(0,l.gg)(r),node_type:c(r.type),node_id:r.name,share_add_notify_new_users:s,share_principle_type_agg:JSON.stringify(d)}});break}case o.uy.EventName.SHARE_LINK_SEND:{let r=p(t);e({filebrowser_actions_log:{event_name:n,event_type:a,source:y,is_in_repo:(0,l.gg)(r),node_type:c(r.type),node_id:r.name,share_principle_type_agg:JSON.stringify(d)}});break}case o.uy.EventName.BULK_DELETE:case o.uy.EventName.BULK_MOVE:case o.uy.EventName.DRAG_BULK_MOVE:case o.uy.EventName.IMPORT_DROP_START:e({filebrowser_actions_log:{event_name:n,event_type:a,source:y}});break;case o.uy.EventName.EMPTY_TRASH:e({filebrowser_actions_log:{event_name:n,event_type:a,source:y,node_type:o.uy.NodeType.FOLDER,node_id:u.RJ.Trash}});break;case o.uy.EventName.NAVIGATE_TRASH:case o.uy.EventName.NAVIGATE_HOME:case o.uy.EventName.NAVIGATE_FAVORITES:case o.uy.EventName.NAVIGATE_SHARED_WITH_ME:case o.uy.EventName.NAVIGATE_FOLDER:e({filebrowser_actions_log:{event_name:n,event_type:a,source:y,node_type:t?.type?c(t.type):void 0,node_id:t?.name}});break;case o.uy.EventName.SORT_CREATE_TIME:case o.uy.EventName.SORT_NAME:case o.uy.EventName.SORT_TYPE:case o.uy.EventName.SORT_OWNER:case o.uy.EventName.BACK:e({filebrowser_actions_log:{event_name:n,event_type:a,source:y}})}},[e])},m=()=>{let e=window.location;if((0,a.Fu)(e)||(0,a.hW)(e))return o.uy.TrackingSource.SIDEBAR_BROWSER;if(e.pathname?.startsWith("/sql"))return o.uy.TrackingSource.DBSQL;if(e.pathname?.startsWith("/browse"))return o.uy.TrackingSource.FULL_PAGE_BROWSER},y=e=>{let n=(0,s.ki)();if(!(0,l._p)(e.type))return()=>{};let t=e.attributes?.folder_type,r={eventType:"component_click",eventEntity:{entityType:"component",entitySubType:"link"},eventPayload:{interactionSubject:!0}};if(t&&t===u.DZ.HOME&&e.attributes?.path_name?.startsWith("/Repos/"))return()=>n({...r,eventEntity:{...r.eventEntity,entityId:"FOLDER_REPOS_HOME"}});if(t===u.DZ.HOME)return()=>n({...r,eventEntity:{...r.eventEntity,entityId:"FOLDER_HOME"}});if(t===u.DZ.SHARED)return()=>n({...r,eventEntity:{...r.eventEntity,entityId:"FOLDER_SHARED"}});if(t===u.DZ.USERS)return()=>n({...r,eventEntity:{...r.eventEntity,entityId:"FOLDER_USERS"}});if(e.type===u.Z6.Root){if("Workspace"===e.node_name)return()=>n({...r,eventEntity:{...r.eventEntity,entityId:"FOLDER_WORKSPACE"}});if("Repos"===e.node_name)return()=>n({...r,eventEntity:{...r.eventEntity,entityId:"FOLDER_REPOS"}})}return()=>n({...r,eventEntity:{...r.eventEntity,entityId:"FOLDER_NON_SYSTEM_FOLDER"}})}},860567:(e,n,t)=>{t.d(n,{B:()=>m});var r=t(692738),a=t(328842),i=t(342411),s=t(441535),o=t(711489),l=t(83891),u=t(889885),c=t(505566),p=t(835711),d=t(855176);let m=(e=o.uy.EventName.COPY_URL)=>{let n=(0,i.tz)(),t=(0,a.useClipboard)(),m=(0,c.h)(),y=(0,u.FI)("orgId"),E=(0,d.h)();return{copyNodeURL:r.useCallback(e=>{let r=(0,p.g6)(e),a=!!e&&(0,l.Y)(e)&&(0,s.W)("databricks.fe.assistant.enableThreadSharing",!1),i=new URL(e?a?"/":(0,p.XL)(e):"/browse",document.baseURI);i.search=r(y,window.location.search,i),t.copy(i.href),E({action:o.uy.EventName.COPY_URL,node:e}),m.success({message:n.formatMessage({id:"jxN8Nb",defaultMessage:"URL copied to clipboard"})})},[t,n,m,y,E])}}},934730:(e,n,t)=>{t.d(n,{p:()=>i});var r=t(409989);function a(e,n,t,r,a,i,s){try{var o=e[i](s),l=o.value}catch(e){t(e);return}o.done?n(l):Promise.resolve(l).then(r,a)}let i=e=>{var n;return(n=function*(){let{data:n}=yield r.pY.get("/ajax-api/2.0/accesspolicies",{params:e});return n},function(){var e=this,t=arguments;return new Promise(function(r,i){var s=n.apply(e,t);function o(e){a(s,r,i,o,l,"next",e)}function l(e){a(s,r,i,o,l,"throw",e)}o(void 0)})})()}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/1716.184be99b55.chunk.js.map