"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[81277],{133288:(e,r,o)=>{o.d(r,{a5:()=>I});var n=o(141078),t=o(655841),i=o(209908),a=o(483588),c=o(26446),s=o(441535);let l=(0,n.J1)`
  fragment IdentityIdapi2UserFragment on IdentityIdapi2User {
    userName
    principal {
      ...IdentityIdapi2PrincipalFragment
    }
  }
  ${t.U8}
`,d=(0,n.J1)`
  fragment IdentityIdapi2GroupFragment on IdentityIdapi2Group {
    groupName
    principal {
      ...IdentityIdapi2PrincipalFragment
    }
  }
  ${t.U8}
`,u=(0,n.J1)`
  fragment IdentityIdapi2ServicePrincipalFragment on IdentityIdapi2ServicePrincipal {
    applicationId
    principal {
      ...IdentityIdapi2PrincipalFragment
    }
  }
  ${t.U8}
`,p=(0,n.J1)`
  query listPrincipals(
    $accountId: String
    $filter: String
    $includeAccountIdentities: Boolean
    $includeGroups: Boolean
    $includeServicePrincipals: Boolean
    $includeUsers: Boolean
    $includeWorkspaceIdentities: Boolean
    $includeWorkspaceUsers: Boolean
    $includeWorkspaceGroups: Boolean
    $includeWorkspaceServicePrincipals: Boolean
    $includeAccountUsers: Boolean
    $includeAccountGroups: Boolean
    $includeAccountServicePrincipals: Boolean
    $pageSize: Int
    $pageToken: String
  ) @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiListPrincipals(
      input: {
        accountId: $accountId
        filter: $filter
        includeAccountIdentities: $includeAccountIdentities
        includeGroups: $includeGroups
        includeServicePrincipals: $includeServicePrincipals
        includeUsers: $includeUsers
        includeWorkspaceIdentities: $includeWorkspaceIdentities
        includeWorkspaceUsers: $includeWorkspaceUsers
        includeWorkspaceGroups: $includeWorkspaceGroups
        includeWorkspaceServicePrincipals: $includeWorkspaceServicePrincipals
        includeAccountUsers: $includeAccountUsers
        includeAccountGroups: $includeAccountGroups
        includeAccountServicePrincipals: $includeAccountServicePrincipals
        pageSize: $pageSize
        pageToken: $pageToken
      }
    ) {
      apiError {
        message
      }
      nextPageToken
      principals {
        user {
          ...IdentityIdapi2UserFragment
        }
        group {
          ...IdentityIdapi2GroupFragment
        }
        servicePrincipal {
          ...IdentityIdapi2ServicePrincipalFragment
        }
      }
    }
  }
  ${l}
  ${d}
  ${u}
`,f=(e,r=!1)=>{if(!e)return;if(!e.legacyUserId)return"idp";if(r&&!e.accountId)return"workspace";return"account"},g=e=>{if("idp"!==f(e))return;return e?.sourceIdp??a.GbL.SOURCE_IDP_ATTRIBUTE_AAD},I=(e,r={},o=!1)=>{let t=(0,s.W)("databricks.fe.identity.hideInactivePrincipalsInNonAdminView",!1),{principals:l,...d}=((e,r={})=>{let{data:o,error:t,...i}=(0,n.IT)(p,{variables:e,nextFetchPolicy:"no-cache",...r}),{principals:a,apiError:c}=o?.aclmanagerIdentityapiListPrincipals??{};return{principals:a,error:t??(c?Error(c.message??""):void 0),...i}})(e,r),u=l?.map(({group:e,user:r,servicePrincipal:o})=>r?(({userName:e,principal:r},o=!1)=>({id:r?.legacyUserId||r?.externalId,isAccount:"account"===f(r),source:f(r),isAccountAdmin:void 0,isIndirect:void 0,isWorkspaceAdmin:void 0,kind:"user",optionId:`user.${e}`,name:e,displayName:e,fullName:r?.displayName,status:o?r?.status===a.apL.PRINCIPAL_STATUS_INACTIVE?a.J0P.INACTIVE:a.J0P.ACTIVE:void 0,title:r?.displayName&&e!==r?.displayName?`${r?.displayName} (${e||""})`:e||"",sourceIdp:g(r)}))(r,t):e?(({groupName:e,principal:r},o=!1)=>({id:r?.legacyUserId||r?.externalId,isAccount:"account"===f(r,!0),source:f(r,!0),kind:"group",optionId:`group.${e}`,displayName:(0,c.Pf)(e),name:e||"",title:`${(0,c.Pf)(e)||""}`,isWorkspaceLocalGroup:"workspace"===f(r,!0),sourceIdp:g(r),status:o?r?.status===a.apL.PRINCIPAL_STATUS_INACTIVE?a.J0P.INACTIVE:a.J0P.ACTIVE:void 0}))(e,t):o?(({applicationId:e,principal:r},o=!1)=>({id:r?.legacyUserId||r?.externalId,isAccount:"account"===f(r),source:f(r),isAccountAdmin:void 0,kind:"serviceprincipal",optionId:`serviceprincipal.${e}`,name:r?.displayName||"",displayName:`${r?.displayName||""} (${e||""})`,applicationId:e,status:o?r?.status===a.apL.PRINCIPAL_STATUS_INACTIVE?a.J0P.INACTIVE:a.J0P.ACTIVE:void 0,title:`${r?.displayName||""} (${e||""})`,sourceIdp:g(r)}))(o,t):null).filter(m).filter(e=>!o||e.status!==a.J0P.INACTIVE)??[];return{principals:u,mappedPrincipals:(0,i.ne)(u),...d}},m=e=>null!==e},198316:(e,r,o)=>{o.d(r,{f:()=>k});var n=o(610435),t=o(956935),i=o(644091),a=o(532744),c=o(91958),s=o.n(c),l=o(692738),d=o(224098),u=o(497895),p=o(375214),f=o(194901),g=o(705639),I=o(639712),m=o(123252),v=o(661748),h=o(99206),y=o(53333);let A=[d.s7.OnValueChange,d.s7.OnView],P=[d.s7.OnValueChange],b={display:"flex"},T=s()((e,r,o)=>(0,t.AH)({display:"inline-flex",alignItems:"center",justifyContent:"center",whiteSpace:"nowrap",...!o&&{boxShadow:e.shadows.xs},border:`1px solid ${e.colors.actionDefaultBorderDefault}`,borderRadius:(0,h.S)(g.c.ACTION_BORDER_RADIUS,e.borders.borderRadiusSm),backgroundColor:"transparent",color:e.colors.actionDefaultTextDefault,height:e.general.heightSm,padding:"0 12px",fontSize:e.typography.fontSizeBase,lineHeight:`${e.typography.lineHeightBase}px`,'&[data-state="off"] .togglebutton-icon-wrapper':{color:e.colors.textSecondary},'&[data-state="off"]:hover .togglebutton-icon-wrapper':{color:e.colors.actionDefaultTextHover},'&[data-state="on"]':{backgroundColor:e.colors.actionDefaultBackgroundPress,color:e.colors.actionDefaultTextPress,borderColor:e.colors.actionDefaultBorderPress},"&:hover":{cursor:"pointer",color:e.colors.actionDefaultTextHover,backgroundColor:e.colors.actionDefaultBackgroundHover,borderColor:e.colors.actionDefaultBorderHover,"& > svg":{stroke:e.colors.actionDefaultBorderHover}},"&:disabled":{cursor:"default",borderColor:e.colors.actionDisabledBorder,color:e.colors.actionDisabledText,backgroundColor:"transparent",boxShadow:"none","& > svg":{stroke:e.colors.border}},...!o&&{"&&":{padding:"4px 12px",..."small"===r&&{padding:"0 8px"}}},...o&&{width:e.general.heightSm,border:"none"},..."small"===r&&{height:24,lineHeight:e.typography.lineHeightBase,...o&&{width:24,paddingTop:0,paddingBottom:0,verticalAlign:"middle"}}}),(e,r,o)=>`${(0,I.H6)(e)}|${r}|${o}`),C=s()(e=>({stroke:e.colors.border})),$=e=>(0,n.Y)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,n.Y)("rect",{x:"0.5",y:"0.5",width:"15",height:"15",rx:"3.5"})}),w=(0,l.forwardRef)((e,r)=>(0,n.Y)(p.I,{ref:r,...e,component:$})),k=(0,l.forwardRef)(({children:e,pressed:r,defaultPressed:o,icon:t,size:c="middle",componentId:s,analyticsEvents:p,...g},I)=>{let h=(0,v.W)("databricks.fe.observability.defaultComponentView.toggleButton",!1),{theme:$}=(0,u.wn)(),[k,S]=l.useState(o),U=(0,l.useMemo)(()=>p??(h?A:P),[p,h]),x=(0,d.ei)({componentType:d.v_.ToggleButton,componentId:s,analyticsEvents:U,valueHasNoPii:!0}),{elementRef:B}=(0,y.z)({onView:x.onView,value:r??o}),E=(0,i.SV)([I,B]),N=(0,l.useCallback)(e=>{x.onValueChange(e),g.onPressedChange?.(e),S(e)},[x,g]);(0,l.useEffect)(()=>{S(r)},[r]);let R=!e&&!!t,D=(0,l.useMemo)(()=>R?b:{...b,marginRight:$.spacing.xs},[R,$.spacing.xs]),_=k?(0,n.Y)(f.A,{}):(0,n.Y)(w,{css:C($)});return(0,n.FD)(a.b,{...(0,m.VG)(),css:T($,c,R),...g,pressed:k,onPressedChange:N,ref:E,...x.dataComponentProps,children:[(0,n.Y)("span",{className:"togglebutton-icon-wrapper",style:D,children:t||_}),e]})})},218832:(e,r,o)=>{o.d(r,{B:()=>t});var n=o(478126);let t={[n.GbL.SOURCE_IDP_ATTRIBUTE_AAD]:"Entra ID",[n.GbL.SOURCE_IDP_ATTRIBUTE_OKTA]:"Okta"}},276137:(e,r,o)=>{o.d(r,{o:()=>s});var n=o(610435);o(692738);var t=o(497895),i=o(382908),a=o(79570),c=o(201828);let s=({name:e,tooltip:r})=>{let{theme:o}=(0,t.wn)();return(0,n.FD)(i.o.Text,{css:{display:"flex",alignItems:"center"},children:[e,(0,n.Y)(a.m,{componentId:"AccountsUi.UserManagement.SourceCell.InfoTooltip",content:r,children:(0,n.Y)(c.A,{css:{color:`${o.colors.textSecondary} !important`,marginLeft:o.spacing.xs}})})]})}},517806:(e,r,o)=>{o.d(r,{A:()=>s});var n=o(610435),t=o(692738),i=o(375214);function a(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m3.5-7.25h-7v-1.5h7z",clipRule:"evenodd"})})}let c=(0,t.forwardRef)((e,r)=>(0,n.Y)(i.I,{ref:r,...e,component:a}));c.displayName="MinusCircleFillIcon";let s=c},532744:(e,r,o)=>{o.d(r,{b:()=>l,l:()=>s});var n=o(657709),t=o(692738),i=o(667559),a=o(338557),c=o(858893);let s=(0,t.forwardRef)((e,r)=>{let{pressed:o,defaultPressed:s=!1,onPressedChange:l,...d}=e,[u=!1,p]=(0,a.i)({prop:o,onChange:l,defaultProp:s});return(0,t.createElement)(c.sG.button,(0,n.A)({type:"button","aria-pressed":u,"data-state":u?"on":"off","data-disabled":e.disabled?"":void 0},d,{ref:r,onClick:(0,i.m)(e.onClick,()=>{e.disabled||p(!u)})}))}),l=s},599349:(e,r,o)=>{o.d(r,{M:()=>p});var n=o(610435),t=o(956935),i=o(692738),a=o(5421),c=o(79128),s=o(497895),l=o(369291),d=o(174541),u=o(639712);let p=(0,i.forwardRef)(({children:e,...r},o)=>{let{theme:i}=(0,s.wn)(),{isInsideTypeaheadCombobox:p,componentId:f}=(0,a.T)();if(!p)throw Error("`TypeaheadComboboxAddButton` must be used within `TypeaheadCombobox`");return(0,n.Y)(c.$n,{...r,componentId:`${f}.add_option`,type:"tertiary",onClick:e=>{e.stopPropagation(),r.onClick?.(e)},onMouseUp:e=>{e.stopPropagation(),r.onMouseUp?.(e)},className:"combobox-footer-add-button",css:{...(0,d.RB)(i),...(0,t.AH)((0,u.dg)({width:"100%",padding:0,display:"flex",alignItems:"center",borderRadius:0,"&:focus":{background:i.colors.actionTertiaryBackgroundHover,outline:"none"}}))},icon:(0,n.Y)(l.A,{}),ref:o,children:e})})},612849:(e,r,o)=>{o.d(r,{t:()=>c});var n=o(561587),t=function(e,r,o){if(e&&"reportValidity"in e){var t=(0,n.Jt)(o,r);e.setCustomValidity(t&&t.message||""),e.reportValidity()}},i=function(e,r){var o=function(o){var n=r.fields[o];n&&n.ref&&"reportValidity"in n.ref?t(n.ref,o,e):n.refs&&n.refs.forEach(function(r){return t(r,o,e)})};for(var n in r.fields)o(n)},a=function(e,r){r.shouldUseNativeValidation&&i(e,r);var o={};for(var t in e){var a=(0,n.Jt)(r.fields,t);(0,n.hZ)(o,t,Object.assign(e[t],{ref:a&&a.ref}))}return o},c=function(e,r,o){return void 0===r&&(r={}),void 0===o&&(o={}),function(t,c,s){try{return Promise.resolve(function(n){try{var a=(r.context,Promise.resolve(e["sync"===o.mode?"validateSync":"validate"](t,Object.assign({abortEarly:!1},r,{context:c}))).then(function(e){return s.shouldUseNativeValidation&&i({},s),{values:o.rawValues?t:e,errors:{}}}))}catch(e){return n(e)}return a&&a.then?a.then(void 0,n):a}(function(e){var r;if(!e.inner)throw e;return{values:{},errors:a((r=!s.shouldUseNativeValidation&&"all"===s.criteriaMode,(e.inner||[]).reduce(function(e,o){if(e[o.path]||(e[o.path]={message:o.message,type:o.type}),r){var t=e[o.path].types,i=t&&t[o.type];e[o.path]=(0,n.Gb)(o.path,r,e,o.type,i?[].concat(i,o.message):o.message)}return e},{})),s)}}))}catch(e){return Promise.reject(e)}}}},623749:(e,r,o)=>{o.d(r,{A:()=>s});var n=o(610435),t=o(692738),i=o(375214);function a(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("path",{fill:"currentColor",d:"M4.5 8.75v-1.5h7v1.5z"}),(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13",clipRule:"evenodd"})]})}let c=(0,t.forwardRef)((e,r)=>(0,n.Y)(i.I,{ref:r,...e,component:a}));c.displayName="MinusCircleIcon";let s=c},849865:(e,r,o)=>{o.d(r,{q:()=>i});var n=o(483588);let t={[n.GbL.SOURCE_IDP_ATTRIBUTE_AAD]:"Microsoft Entra ID",[n.GbL.SOURCE_IDP_ATTRIBUTE_OKTA]:"Okta"},i=e=>{if(!e||e===n.GbL.SOURCE_IDP_ATTRIBUTE_UNSPECIFIED)return"Microsoft Entra ID";return t[e]??"Microsoft Entra ID"}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/81277.d9ae81aa01.chunk.js.map