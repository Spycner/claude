"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[59043],{205242:(e,t,n)=>{n.d(t,{N:()=>r});var i=n(141078);let r=(0,i.J1)`
  query NPSListNotificationDestinations($scopeId: String!, $scopeType: notificationsservice_ScopeType!)
  @component(name: "EnduserExp.CustomerEngagementPlatform") {
    notifications_allDestinations(scope: { id: $scopeId, scopeType: $scopeType }) {
      allNotificationDestinations {
        destinationId
        destinationName
        destinationType
      }
    }
  }
`},314823:(e,t,n)=>{n.d(t,{A:()=>s,Z:()=>o});var i=n(651139),r=n(441535),a=n(887047);let o=(0,n(984741).to)("sql/images/destinations"),s={query:()=>i.pY.get("/ajax-api/2.0/webhook-notifications/webhooks").then(e=>(e?.webhooks||[]).map(e=>({...e,icon:(0,a._o)(e?.type)}))),get:({id:e})=>{if((0,r.W)("databricks.webhooknotifications.useWNSForCrud",!1))return i.pY.get(`/ajax-api/2.0/webhook-notifications/webhooks/${e}`).then(e=>{let t=e?.webhook||{};return{...t,icon:(0,a._o)(t?.type)}});return i.pY.get(`api/destinations/${e}`)},types:()=>i.pY.get("api/destinations/types"),create:e=>i.pY.post("api/destinations",e),save:e=>i.pY.post(`api/destinations/${e.id}`,e),delete:({id:e})=>i.pY.delete(`api/destinations/${e}`)}},404323:(e,t,n)=>{n.d(t,{Oh:()=>D,fr:()=>w,gU:()=>Y,oV:()=>M,z8:()=>R});var i=n(610435),r=n(632528),a=n.n(r),o=n(692738),s=n(994393),c=n(466213),l=n(393257),p=n(314823),u=n(497895),d=n(74438),m=n(834343),f=n(996648),g=n(927802),y=n(30560),I=n(461815),h=n(768622),$=n(342411),b=n(441535),S=n(686560),k=n(483588),v=n(810658),A=n(133288),T=n(295423);let P={[k.eoT.SLACK]:"slack",[k.eoT.EMAILS]:"email",[k.eoT.GENERIC_WEBHOOK]:"webhook",[k.eoT.PAGER_DUTY]:"pagerduty",[k.eoT.MS_TEAMS]:"microsoft_teams"};function x(e){if(!e.destinationId||!e.destinationName)return null;return{id:e.destinationId,name:e.destinationName,type:(e.destinationType&&P[e.destinationType])??"webhook",icon:"DEPRECATED"}}function E({skip:e}){let{data:t,loading:n,error:i}=(0,v.Q)(6e4,{stableCache:!0,skip:e}),r=(0,o.useMemo)(()=>(t?.notifications_allDestinations?.allNotificationDestinations??[]).map(x).filter(e=>null!==e),[t]);return(0,o.useMemo)(()=>({data:r,isLoading:n,hasError:!!i}),[r,n,i])}function G(){return(0,b.W)("databricks.notifications.useNPSForSubscriberPickers",!1)&&(0,b.W)("databricks.webhooknotifications.estorePrimary",!1)}function w(){let e=G(),{data:t,isLoading:n}=E({skip:!e}),i=(0,o.useMemo)(()=>new Map(t.map(e=>[e.id,e])),[t]);return(0,o.useMemo)(()=>({useNps:e,isLoading:n,destinations:i}),[e,n,i])}let C=e=>e,M=(e,t,n)=>({name:e,type:"email",id:e,icon:"DEPRECATED",isUser:!0,provisioningId:n,username:e,userId:t});function Y({showCurrentUser:e=!1,destinationsFilter:t=C,userFilterText:n,enableIdp:i=!1}={}){let r=(0,o.useRef)(new Map),u=G(),d=E({skip:!u}),m=function({skip:e}){return(0,s.useQuery)(["alert-destinations"],()=>p.A.query(),{enabled:!e})}({skip:u}),{data:f,isLoading:g}=u?d:m;(0,o.useEffect)(()=>{r.current.clear()},[u]);let[y]=(0,c.d7)(n,300),I=(0,b.W)("databricks.alerts.v2.enableIdpUsersSubscription",!1),h=(0,S.d)("accountId_new",""),{principals:$,loading:k}=(0,A.a5)({includeAccountIdentities:!1,includeGroups:!1,includeServicePrincipals:!1,includeUsers:!0,includeWorkspaceIdentities:!0,pageSize:100,filter:y,accountId:h},{skip:!I}),{subjects:v,isLoading:P}=(0,T.f)({enableWorkspaceUsers:!!n,enableWorkspaceGroups:!1,enableWorkspaceServicePrincipals:!1,useLite:!0,filterText:n,skip:I}),x=P.users||k,w=(0,o.useMemo)(()=>{let e=I?$:v;return(I?a()($||[],e=>e.id):e||[]).map(e=>M(e.name,Number(e.id),"idp"===e.source?e.id:void 0))},[$,v,I]);(0,o.useEffect)(()=>{w.forEach(e=>{e.username&&r.current.set(e.username,e)})},[w]),(0,o.useEffect)(()=>{(f||[]).forEach(e=>{r.current.set(e.id,e)})},[f]);let D=(0,o.useMemo)(()=>(f?t(f):[]).concat(e?w:w.filter(({id:e})=>e!==`${l.N.id}`)),[w,f,e,t]);return{allDestinations:r.current,destinations:D,loading:x||g}}function D({item:e}){return(0,i.FD)("div",{css:{display:"flex",alignItems:"center"},children:[(0,i.Y)("img",{src:`${p.Z}/${e.type}.png`,alt:e.name,css:{width:"25px",height:"25px"}}),(0,i.Y)("span",{style:{flex:"1 1 auto"},children:e.name})]})}function N({destinations:e,...t}){let{theme:n}=(0,u.wn)();return(0,i.Y)(d._v,{...t,"data-testid":"DestinationAndUserSelect",dangerouslySetAntdProps:{showSearch:!0},css:{width:"100%","& input":{paddingLeft:`${n.spacing.lg}px !important`}},placeholder:(0,i.FD)(i.FK,{children:[(0,i.Y)(m.A,{css:{marginRight:n.spacing.sm}}),(0,i.Y)($.sA,{id:"WdCNiQ",defaultMessage:"Search to add users or destinations"})]}),filterOption:!1,children:e.map(e=>(0,i.Y)(d._v.Option,{value:e.id,children:(0,i.Y)(D,{item:e})},e.id))})}function U({destinations:e,onChange:t,loading:n,onSearch:r,disabled:a}){let s=(0,o.useCallback)(e=>{e[0]&&t?.(e[0].id)},[t]),c=(0,f.SY)({componentId:"destination-and-user-select",allItems:e,items:e,setInputValue:r,itemToString:e=>e.name,multiSelect:!0,selectedItems:[],setSelectedItems:s}),l=(0,f.Rj)([],s,c),p=(0,$.tz)();return(0,i.FD)(g.h,{"data-testid":"DestinationAndUserSelect",id:"destination-and-user-select",comboboxState:c,multiSelect:!0,children:[(0,i.Y)(y.W,{disabled:a,placeholder:p.formatMessage({id:"WdCNiQ",defaultMessage:"Search to add users or destinations"}),comboboxState:c,multipleSelectionState:l,selectedItems:[],setSelectedItems:s,getSelectedItemLabel:e=>e.name,width:"100%",css:{"*:first":{width:"100%"}}}),(0,i.Y)(I.i,{comboboxState:c,loading:n,maxWidth:400,maxHeight:300,children:e.map((e,t)=>(0,i.Y)(h.bb,{item:e,index:t,comboboxState:c,children:(0,i.Y)(D,{item:e})},e.id))})]})}function R({useTypeaheadCombobox:e=!1,...t}){return e?(0,i.Y)(U,{...t}):(0,i.Y)(N,{...t})}},574132:(e,t,n)=>{n.d(t,{y:()=>a});var i=n(610435);n(692738);var r=n(497895);let a=({disabled:e,children:t})=>{let{theme:n}=(0,r.wn)();return(0,i.Y)("div",{css:{color:n.colors.textSecondary,fontSize:n.typography.fontSizeSm,...e&&{color:n.colors.actionDisabledText}},children:t})}},655841:(e,t,n)=>{n.d(t,{GX:()=>u,HA:()=>a,Ij:()=>p,U8:()=>r,_:()=>o,e:()=>c,fq:()=>d,n$:()=>l,r4:()=>s});var i=n(141078);let r=(0,i.J1)`
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
  ${r}
`,o=(0,i.J1)`
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
`,s=(0,i.J1)`
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
`,c=(0,i.J1)`
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
`,l=(0,i.J1)`
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
`,p=(0,i.J1)`
  mutation GetOrCreateIdpUser($input: AclmanagerIdentityapiGetOrCreateUserRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateUser(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,u=(0,i.J1)`
  mutation GetOrCreateIdpGroup($input: AclmanagerIdentityapiGetOrCreateGroupRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateGroup(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,d=(0,i.J1)`
  mutation GetOrCreateIdpServicePrincipal($input: AclmanagerIdentityapiGetOrCreateServicePrincipalRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateServicePrincipal(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`},768622:(e,t,n)=>{n.d(t,{Jq:()=>$,bb:()=>S});var i=n(610435),r=n(956935),a=n(802558),o=n.n(a),s=n(91958),c=n.n(s),l=n(692738),p=n(497895),u=n(194901),d=n(161330),m=n(174541),f=n(574132),g=n(639712);let y={paddingTop:2},I={width:16,flexShrink:0},h={display:"flex"},$=c()((e,t,n)=>(0,r.AH)({...n&&{pointerEvents:"none",color:e.colors.actionDisabledText},...t&&{background:e.colors.actionTertiaryBackgroundHover}}),(e,t,n)=>`${(0,g.H6)(e)}|${t}|${!!n}`),b=c()((e,t)=>(0,r.AH)({marginLeft:e.spacing.sm,fontSize:e.typography.fontSizeBase,fontStyle:"normal",fontWeight:400,cursor:"pointer",overflow:"hidden",wordBreak:"break-word",..."ellipsis"===t&&{textOverflow:"ellipsis",whiteSpace:"nowrap"}}),(e,t)=>`${(0,g.H6)(e)}|${t}`),S=(0,l.forwardRef)(({item:e,index:t,comboboxState:n,textOverflowMode:r="multiline",isDisabled:a,disabledReason:s,hintContent:c,onClick:g,children:S,...k},v)=>{let{selectedItem:A,highlightedIndex:T,getItemProps:P,isOpen:x}=n,E=o()(A,e),G=T===t,{theme:w}=(0,p.wn)(),C=(0,l.useRef)(null);(0,l.useImperativeHandle)(v,()=>C.current);let{onClick:M,...Y}=P({item:e,index:t,disabled:a,onMouseUp:e=>{e.stopPropagation(),k.onMouseUp?.(e)},ref:C});return(0,l.useEffect)(()=>{if(x&&T===t&&C.current){let e=C.current.closest("ul");if(!e)return;let t=e.scrollTop,n=e.scrollTop+e.clientHeight,i=C.current.offsetTop,r=C.current.offsetTop+C.current.clientHeight;(i<t||r>n)&&C.current?.scrollIntoView({block:"nearest"})}},[T,t,x,C]),(0,i.FD)("li",{role:"option","aria-selected":E,"aria-disabled":a,onClick:e=>{g?.(e),M?.(e)},css:[(0,m.RB)(w),$(w,G,a)],...Y,...k,children:[E?(0,i.Y)(u.A,{css:y}):(0,i.Y)("div",{style:I}),(0,i.FD)("label",{css:b(w,r),children:[a&&s?(0,i.FD)("div",{css:h,children:[(0,i.Y)("div",{children:S}),(0,i.Y)("div",{css:(0,m.eO)(w),children:(0,i.Y)(d.I,{componentId:"typeahead-combobox-menu-item-disabled-reason-info-tooltip",side:"right",content:s})})]}):S,(0,i.Y)(f.y,{disabled:a,children:c})]})]})});S.defaultProps={_type:"TypeaheadComboboxMenuItem"}},810658:(e,t,n)=>{n.d(t,{Q:()=>p});var i=n(692738),r=n(686560),a=n(141078),o=n(483588),s=n(205242);function c(e,t,n,i,r,a,o){try{var s=e[a](o),c=s.value}catch(e){n(e);return}s.done?t(c):Promise.resolve(c).then(i,r)}function l(e){if(!e)return"";return e.map(e=>`${e.destinationId??""}|${e.destinationName??""}|${e.destinationType??""}`).sort().join("\n")}function p(e,t){let n=(0,r.d)("currentWorkspaceId",""),p={scopeId:n,scopeType:o.npF.WORKSPACE},u=t?.stableCache===!0,d=t?.skip===!0,m=e??(u?6e4:5e3),f=(0,a.mK)(),g=(0,i.useRef)(null),y=(0,i.useRef)(!1),I=(0,i.useRef)(null),h=(0,i.useRef)(0),$=(0,a.IT)(s.N,{variables:p,pollInterval:u?0:m,skip:d});(0,i.useEffect)(()=>{if(!u||null!==g.current)return;let e=$.data?.notifications_allDestinations?.allNotificationDestinations;e&&(g.current=l(e))},[$.data,u]);let b=(0,i.useCallback)(()=>{if(null!==I.current&&(clearInterval(I.current),I.current=null),h.current+=1,!u||d||m<=0)return;let e={scopeId:n,scopeType:o.npF.WORKSPACE},t=h.current;I.current=setInterval(()=>{var n;return(n=function*(){if(y.current)return;y.current=!0;try{let n=yield f.query({query:s.N,variables:e,fetchPolicy:"no-cache"});if(t!==h.current)return;let i=n.data?.notifications_allDestinations?.allNotificationDestinations,r=l(i);if(r===g.current)return;g.current=r,f.cache.writeQuery({query:s.N,variables:e,data:n.data})}catch{}finally{y.current=!1}},function(){var e=this,t=arguments;return new Promise(function(i,r){var a=n.apply(e,t);function o(e){c(a,i,r,o,s,"next",e)}function s(e){c(a,i,r,o,s,"throw",e)}o(void 0)})})()},m)},[u,d,m,f,n]);return(0,i.useEffect)(()=>(b(),()=>{null!==I.current&&(clearInterval(I.current),I.current=null),h.current+=1}),[b]),{...$,resetPolling:b}}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/59043.bcd78b7bf7.chunk.js.map