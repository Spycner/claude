"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[7222],{26446:(e,t,r)=>{r.d(t,{HT:()=>d,M8:()=>c,Pf:()=>i,bp:()=>l,gb:()=>a,iN:()=>u,pP:()=>n,xB:()=>f});let a=1e3,n={enableAccountGroups:!1,enableAccountServicePrincipals:!1,enableAccountUsers:!1,enableWorkspaceGroups:!1,enableWorkspaceServicePrincipals:!1,enableWorkspaceUsers:!1},s=/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,o={admins:"Admins",users:"All workspace users","account users":"All account users"},i=e=>{if(!e)return e;return o[e]??e},l=e=>{let t=new Map;return e.forEach(e=>{let r=d(e)||e.name;t.has(r)||t.set(r,[]),t.get(r)?.push(e)}),t},u=e=>{switch(e.kind){case"user":return e.fullName;case"serviceprincipal":return e.name;case"group":return e.displayName;default:return""}},d=e=>{switch(e.kind){case"user":case"group":return e.name||"";case"serviceprincipal":return e.applicationId||"";default:return""}},c=({uniqueName:e,id:t,kind:r,displayName:a})=>{switch(r){case"user":return{id:t||"",optionId:`user.${t}`,kind:r,name:e||"",fullName:a||"",title:""};case"serviceprincipal":return{id:t||"",optionId:`serviceprincipal.${t}`,kind:r,name:a||"",applicationId:e||"",title:""};case"group":return{id:t||"",optionId:`group.${t}`,kind:r,name:e||"",displayName:i(e||""),title:""};default:return}};function f(e){return e?s.test(e)?"serviceprincipal":"user":void 0}},161926:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),s=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a5 5 0 0 0-5 5v1.99c0 .674-.2 1.332-.573 1.892l-1.301 1.952A.75.75 0 0 0 1.75 13h3.5v.25a2.75 2.75 0 1 0 5.5 0V13h3.5a.75.75 0 0 0 .624-1.166l-1.301-1.952A3.4 3.4 0 0 1 13 7.99V6a5 5 0 0 0-5-5m1.25 12h-2.5v.25a1.25 1.25 0 1 0 2.5 0zM4.5 6a3.5 3.5 0 1 1 7 0v1.99c0 .97.287 1.918.825 2.724l.524.786H3.15l.524-.786A4.9 4.9 0 0 0 4.5 7.99z",clipRule:"evenodd"})})}let i=(0,n.forwardRef)((e,t)=>(0,a.Y)(s.I,{ref:t,...e,component:o}));i.displayName="NotificationIcon";let l=i},167632:(e,t,r)=>{r.d(t,{A:()=>g});var a=r(987737),n=r.n(a),s=r(651139),o=r(924636),i=r(642003),l=r(160098);function u(e){let t,{options:r,conditions:a,query_id:n,query:s,permission_tier:o,user:u,state:d,...c}=e;s?t=(0,l.L)(s):n&&(t={id:n});let f={...c,permission_tier:o??i.H.canView,state:d??"unknown",user:u,can_edit:o===i.H.canEdit||o===i.H.canManage,query:t},{op:p,query_plan:g,empty_result_state:m,alert:h,threshold:v}=a??{},{name:y,display:M,aggregation:I}=h?.column??{},{value:w,column:b}=v??{},{name:A,display:$,aggregation:C}=b??{},x=w?.string_value??w?.double_value,P={...r,column:y??"",display_column:M,aggregation:I,op:p??">",value:x,threshold_column:A,threshold_display_column:$,threshold_aggregation:C,empty_result_state:m,parent:r?.parent,query_plan:g&&JSON.parse(g)};return{...f,options:P}}var d=r(35626),c=r(953113);function f(e,t,r,a,n,s,o){try{var i=e[s](o),l=i.value}catch(e){r(e);return}i.done?t(l):Promise.resolve(l).then(a,n)}let p=e=>({...e,results:e.results?.map(u)??[]}),g={query:(e={})=>{var t;return(t=function*(){let t=(0,c.qo)(e,d.F.FILTER_UNSPECIFIED);return s.pY.get(o.F4,{params:t}).then(e=>e.data??e).then(p)},function(){var e=this,r=arguments;return new Promise(function(a,n){var s=t.apply(e,r);function o(e){f(s,a,n,o,i,"next",e)}function i(e){f(s,a,n,o,i,"throw",e)}o(void 0)})})()},myAlerts:(e={})=>{let t=(0,c.qo)(e,d.F.MY_FILTER);return s.pY.get(o.F4,{params:t}).then(e=>e.data??e).then(p)},adminAlerts:(e={})=>{let t=(0,c.qo)(e,d.F.ADMIN_FILTER);return s.pY.get(o.F4,{params:t}).then(e=>e.data??e).then(p)},get:({id:e})=>s.pY.get((0,c.We)(e)).then(e=>e.data??e).then(u),save:e=>{let t={alert:function(e){let{options:t,query:r,user:a,permission_tier:n,state:s,created_at:o,last_triggered_at:i,updated_at:u,...d}=e,c=r?(0,l.j)(r):void 0,f=c?.id;return{...d,query:c,user:a,permission_tier:n,state:s,query_id:f,...function(e){var t;let{column:r,display_column:a,aggregation:n,op:s,value:o,threshold_column:i,threshold_display_column:l,threshold_aggregation:u,empty_result_state:d,parent:c,custom_subject:f,custom_body:p,query_plan:g,folder_node_internal_name:m,notify_on_ok:h,muted:v}=e,y={op:s,query_plan:g&&JSON.stringify(g),empty_result_state:d,alert:{column:{name:r,display:a,aggregation:n}},threshold:{value:"number"==typeof(t=o)?{double_value:t}:{string_value:t}}};return i&&y.threshold&&(y.threshold.column={name:i,display:l,aggregation:u}),{conditions:y,options:{parent:c,custom_subject:f,custom_body:p,folder_node_internal_name:m,notify_on_ok:h,muted:v}}}(t)}}(e)};if(e.id)return s.pY.patch((0,c.We)(e.id),t).then(e=>e.data??e).then(u);return s.pY.post(o.F4,t).then(e=>e.data??e).then(u)},delete:e=>s.pY.delete((0,c.We)(e.id)),evaluate:e=>s.pY.post((0,c.$7)(e.id,e.query_result_id),n()(e,["id","query_result_id"])),mute:e=>s.pY.post(`api/alerts/${e.id}/mute`),unmute:e=>s.pY.delete(`api/alerts/${e.id}/mute`)}},241393:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),s=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",d:"M8 1a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 8 1M8 6.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M8 11.5A1.75 1.75 0 1 0 8 15a1.75 1.75 0 0 0 0-3.5"})})}let i=(0,n.forwardRef)((e,t)=>(0,a.Y)(s.I,{ref:t,...e,component:o}));i.displayName="OverflowIcon";let l=i},295423:(e,t,r)=>{r.d(t,{f:()=>u});var a=r(692738),n=r(671244),s=r(653542),o=r(49586),i=r(209908);let l=50,u=({enableAccountGroups:e=!1,enableAccountServicePrincipals:t=!1,enableAccountUsers:r=!1,enableWorkspaceGroups:u=!0,enableWorkspaceServicePrincipals:d=!0,enableWorkspaceUsers:c=!0,filterText:f="",principalIdsForFiltering:p=[],principalUniqueNamesForFiltering:g=[],limit:m=l,useLite:h,skip:v=!1,isCache:y=!1}={})=>{let M=(0,i.VM)({ids:p,uniqueNames:g}),I=(0,i.L5)({ids:p,uniqueNames:g}),{subjects:w,isLoading:b,error:A,hasNextPage:$}=(0,o.zo)({source:"account",filter:f,filterPredicate:M,first:m,skip:!r||v,useLite:h,isCache:y}),{subjects:C,isLoading:x,error:P,hasNextPage:k}=(0,n.Bi)({source:"account",filter:f,filterPredicate:I,first:m,skip:!e||v,useLite:h,isCache:y}),{subjects:S,isLoading:N,error:Y,hasNextPage:R}=(0,s.Q_)({source:"account",filter:f,filterPredicate:M,first:m,skip:!t||v,useLite:h,isCache:y}),{subjects:D,isLoading:T,error:U,hasNextPage:W}=(0,o.zo)({source:"workspace",filter:f,filterPredicate:M,first:m,skip:!c||v,useLite:h,isCache:y}),{subjects:z,isLoading:_,error:V,hasNextPage:E}=(0,n.Bi)({source:"workspace",filter:f,filterPredicate:I,first:m,skip:!u||v,useLite:h,isCache:y}),{subjects:G,isLoading:F,error:H,hasNextPage:O}=(0,s.Q_)({source:"workspace",filter:f,filterPredicate:M,first:m,skip:!d||v,useLite:h,isCache:y}),B=(0,a.useMemo)(()=>{let t=[...z,...C];if(e&&u)return t.filter((e,t,r)=>t===r.findIndex(t=>t.id===e.id));return t},[C,e,u,z]),q=(0,a.useMemo)(()=>{let e=[...G,...S];if(t&&d)return e.filter((e,t,r)=>t===r.findIndex(t=>t.id===e.id));return e},[S,t,d,G]),L=(0,a.useMemo)(()=>{let e=[...D,...w];if(r&&c)return e.filter((e,t,r)=>t===r.findIndex(t=>t.id===e.id));return e},[w,r,c,D]),{subjects:j,hasNextPage:J}=(0,a.useMemo)(()=>(0,i.GF)(f,m,B,q,L),[f,m,B,q,L]),K=(0,a.useMemo)(()=>({accountGroups:x,accountServicePrincipals:N,accountUsers:b,groups:_,servicePrincipals:F,users:T,some:x||N||b||_||F||T}),[x,N,b,_,F,T]),Z=(0,a.useMemo)(()=>({accountGroups:P??null,accountServicePrincipals:Y??null,accountUsers:A??null,groups:V??null,servicePrincipals:H??null,users:U??null}),[P,Y,A,V,H,U]);return{allSubjectsMap:(0,a.useMemo)(()=>(0,i.ne)(B,q,L),[B,q,L]),errors:Z,hasNextPage:!!(j.length===m&&($||k||R||W||E||O)||J),isLoading:K,subjects:j}}},319241:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),s=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M2 1.75A.75.75 0 0 1 2.75 1h6a.75.75 0 0 1 .53.22l4.5 4.5c.141.14.22.331.22.53v9a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1-.75-.75zm1.5.75v12h9V7H8.75A.75.75 0 0 1 8 6.25V2.5zm6 1.06 1.94 1.94H9.5z",clipRule:"evenodd"})})}let i=(0,n.forwardRef)((e,t)=>(0,a.Y)(s.I,{ref:t,...e,component:o}));i.displayName="FileIcon";let l=i},325048:(e,t,r)=>{r.d(t,{c:()=>a,s:()=>n});let a=e=>({display:"flex",borderBottom:`1px solid ${e.colors.actionDefaultBorderDefault}`,marginBottom:e.spacing.md,height:e.general.heightSm,boxSizing:"border-box"}),n=e=>({display:"flex",fontWeight:e.typography.typographyBoldFontWeight,fontSize:e.typography.fontSizeMd,backgroundColor:"transparent",marginRight:e.spacing.md})},342145:(e,t,r)=>{r.d(t,{$y:()=>c,B_:()=>w,FQ:()=>m,OD:()=>i,T4:()=>o,U1:()=>h,UX:()=>p,Yu:()=>y,bB:()=>s,cC:()=>g,k0:()=>n,nU:()=>u,sO:()=>I,sh:()=>d,wp:()=>l,xY:()=>f,xe:()=>M,zD:()=>v});var a=r(141078);let n=(0,a.J1)`
  query allWorkspaceUsers__deduped($first: Int!, $after: String, $filter: String)
  @component(name: "IdentityMgmt.UserGroup") {
    allWorkspaceUsers(first: $first, after: $after, filter: $filter) {
      users {
        email
        fullname
        id
        isIndirect
        isServicePrincipal
        isWorkspaceAdmin
        status
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,s=(0,a.J1)`
  query allWorkspaceUsersLite($first: Int!, $after: String, $filter: String)
  @component(name: "IdentityMgmt.UserGroup") {
    allWorkspaceUsers(first: $first, after: $after, filter: $filter) {
      users {
        email
        fullname
        id
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,o=(0,a.J1)`
  query allWorkspaceServicePrincipals__deduped($first: Int!, $after: String, $filter: String)
  @component(name: "IdentityMgmt.UserGroup") {
    allWorkspaceServicePrincipals(first: $first, after: $after, filter: $filter) {
      users {
        applicationId: email
        fullname
        id
        isIndirect
        isServicePrincipal
        isWorkspaceAdmin
        status
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,i=(0,a.J1)`
  query allWorkspaceServicePrincipalsLite($first: Int!, $after: String, $filter: String)
  @component(name: "IdentityMgmt.UserGroup") {
    allWorkspaceServicePrincipals(first: $first, after: $after, filter: $filter) {
      users {
        applicationId: email
        fullname
        id
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,l=(0,a.J1)`
  query allWorkspaceGroups($first: Int!, $after: String, $filter: String) @component(name: "IdentityMgmt.UserGroup") {
    allWorkspaceGroups(first: $first, after: $after, filter: $filter) {
      groups {
        id
        groupname
        isWorkspaceLocal
        membersCount
        isExternal
        isIndirect
        exclusivityType
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,u=(0,a.J1)`
  query allWorkspaceGroupsLite($first: Int!, $after: String, $filter: String)
  @component(name: "IdentityMgmt.UserGroup") {
    allWorkspaceGroups(first: $first, after: $after, filter: $filter) {
      groups {
        id
        groupname
        isWorkspaceLocal
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,d=(0,a.J1)`
  query allAccountUsers($first: Int!, $after: String, $filter: String, $filterAdmin: Boolean)
  @component(name: "IdentityMgmt.UserGroup") {
    allAccountUsers(first: $first, after: $after, filter: $filter, filterAdmin: $filterAdmin) {
      users {
        email
        fullname
        id
        isAccountAdmin
        isServicePrincipal
        status
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,c=(0,a.J1)`
  query allAccountUsersLite($first: Int!, $after: String, $filter: String) @component(name: "IdentityMgmt.UserGroup") {
    allAccountUsers(first: $first, after: $after, filter: $filter) {
      users {
        email
        fullname
        id
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,f=(0,a.J1)`
  query allAccountServicePrincipals($first: Int!, $after: String, $filter: String, $filterAdmin: Boolean)
  @component(name: "IdentityMgmt.UserGroup") {
    allAccountServicePrincipals(first: $first, after: $after, filter: $filter, filterAdmin: $filterAdmin) {
      users {
        applicationId: email
        fullname
        id
        isAccountAdmin
        isServicePrincipal
        status
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,p=(0,a.J1)`
  query allAccountServicePrincipalsLite($first: Int!, $after: String, $filter: String)
  @component(name: "IdentityMgmt.UserGroup") {
    allAccountServicePrincipals(first: $first, after: $after, filter: $filter) {
      users {
        applicationId: email
        fullname
        id
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,g=(0,a.J1)`
  query allAccountGroups($first: Int!, $after: String, $filter: String) @component(name: "IdentityMgmt.UserGroup") {
    allAccountGroups(first: $first, after: $after, filter: $filter) {
      groups {
        id
        groupname
        membersCount
        isExternal
        externalId
        exclusivityType
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,m=(0,a.J1)`
  query allAccountGroupsLite($first: Int!, $after: String, $filter: String) @component(name: "IdentityMgmt.UserGroup") {
    allAccountGroups(first: $first, after: $after, filter: $filter) {
      groups {
        id
        groupname
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,h=(0,a.J1)`
  query getAccountUsersCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountUsersCount {
      totalCount
    }
  }
`,v=(0,a.J1)`
  query getAccountServicePrincipalsCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountServicePrincipalsCount {
      totalCount
    }
  }
`,y=(0,a.J1)`
  query getAccountGroupsCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountGroupsCount {
      totalCount
    }
  }
`,M=(0,a.J1)`
  query getWorkspaceUsersCount($shouldGetDirectlyAssignedOnly: Boolean) @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceUsersCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`,I=(0,a.J1)`
  query getWorkspaceServicePrincipalsCount($shouldGetDirectlyAssignedOnly: Boolean)
  @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceServicePrincipalsCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`,w=(0,a.J1)`
  query getWorkspaceGroupsCount($shouldGetDirectlyAssignedOnly: Boolean) @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceGroupsCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`},397136:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),s=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M3 1.75A.75.75 0 0 1 3.75 1h10.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V12.5H1V11h2V8.75H1v-1.5h2V5H1V3.5h2zm1.5.75v11H6v-11zm3 0v11h6v-11z",clipRule:"evenodd"})})}let i=(0,n.forwardRef)((e,t)=>(0,a.Y)(s.I,{ref:t,...e,component:o}));i.displayName="NotebookIcon";let l=i},401160:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),s=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.75 1a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75V1.75a.75.75 0 0 0-.75-.75zM7.5 2.5h-4v6.055l1.495-1.36a.75.75 0 0 1 1.01 0L7.5 8.555zm-4 8.082 2-1.818 2.246 2.041A.75.75 0 0 0 9 10.25V2.5h3.5v12h-9z",clipRule:"evenodd"})})}let i=(0,n.forwardRef)((e,t)=>(0,a.Y)(s.I,{ref:t,...e,component:o}));i.displayName="BookIcon";let l=i},452233:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),s=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.FD)("g",{fill:"currentColor",clipPath:"url(#QueryIcon_svg__a)",children:[(0,a.Y)("path",{fillRule:"evenodd",d:"M2 1.75A.75.75 0 0 1 2.75 1h6a.75.75 0 0 1 .53.22l4.5 4.5c.141.14.22.331.22.53V10h-1.5V7H8.75A.75.75 0 0 1 8 6.25V2.5H3.5V16h-.75a.75.75 0 0 1-.75-.75zm7.5 1.81 1.94 1.94H9.5z",clipRule:"evenodd"}),(0,a.Y)("path",{d:"M5.53 9.97 8.56 13l-3.03 3.03-1.06-1.06L6.44 13l-1.97-1.97zM14 14.5H9V16h5z"})]}),(0,a.Y)("defs",{children:(0,a.Y)("clipPath",{children:(0,a.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let i=(0,n.forwardRef)((e,t)=>(0,a.Y)(s.I,{ref:t,...e,component:o}));i.displayName="QueryIcon";let l=i},563521:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),s=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1 1.75A.75.75 0 0 1 1.75 1h12.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75zm1.5 8.75v3h4.75v-3zm0-1.5h4.75V2.5H2.5zm6.25-6.5v3h4.75v-3zm0 11V7h4.75v6.5z",clipRule:"evenodd"})})}let i=(0,n.forwardRef)((e,t)=>(0,a.Y)(s.I,{ref:t,...e,component:o}));i.displayName="DashboardIcon";let l=i},617933:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),s=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.75 1a.75.75 0 0 0-.75.75v6.089c0 .38-.173.739-.47.976l-2.678 2.143A2.27 2.27 0 0 0 3.27 15h9.46a2.27 2.27 0 0 0 1.418-4.042L11.47 8.815A1.25 1.25 0 0 1 11 7.839V1.75a.75.75 0 0 0-.75-.75zm.75 6.839V2.5h3v5.339c0 .606.2 1.188.559 1.661H5.942A2.75 2.75 0 0 0 6.5 7.839M4.2 11 2.79 12.13a.77.77 0 0 0 .48 1.37h9.461a.77.77 0 0 0 .481-1.37L11.8 11z",clipRule:"evenodd"})})}let i=(0,n.forwardRef)((e,t)=>(0,a.Y)(s.I,{ref:t,...e,component:o}));i.displayName="BeakerIcon";let l=i},647660:(e,t,r)=>{r.d(t,{Content:()=>N,List:()=>k,Root:()=>P,Trigger:()=>S});var a=r(610435),n=r(644091),s=r(747589),o=r(659276),i=r(514503),l=r.n(i),u=r(91958),d=r.n(u),c=r(692738),f=r(79128),p=r(224098),g=r(497895),m=r(369291),h=r(7754),v=r(325048),y=r(639712),M=r(661748),I=r(53333);let w=[p.s7.OnValueChange,p.s7.OnView],b=[p.s7.OnValueChange],A=[p.s7.OnClick],$={"& > div":{display:"inline-block !important"}},C=c.createContext({activeValue:void 0,dataComponentProps:{"data-component-id":"design_system.tabs.default_component_id","data-component-type":p.v_.Tabs}}),x=c.createContext({viewportRef:{current:null}}),P=c.forwardRef(({value:e,defaultValue:t,onValueChange:r,componentId:s,analyticsEvents:i,valueHasNoPii:l,...u},d)=>{let f=(0,M.W)("databricks.fe.observability.defaultComponentView.tabs",!1),g=void 0!==e,[m,h]=c.useState(t),v=(0,c.useMemo)(()=>i??(f?w:b),[i,f]),y=(0,p.ei)({componentType:p.v_.Tabs,componentId:s,analyticsEvents:v,valueHasNoPii:l,shouldStartInteraction:!0}),{elementRef:A}=(0,I.z)({onView:y.onView,value:e??t}),$=(0,n.SV)([d,A]),x=(0,c.useCallback)(e=>{y.onValueChange(e),r&&r(e),g||h(e)},[y,r,g]),P=g?e:m,k=(0,c.useMemo)(()=>({activeValue:P,dataComponentProps:y.dataComponentProps}),[P,y.dataComponentProps]);return(0,a.Y)(C.Provider,{value:k,children:(0,a.Y)(o.bL,{value:e,defaultValue:t,onValueChange:x,...u,ref:$})})}),k=c.forwardRef(({addButtonProps:e,scrollAreaViewportCss:t,tabListCss:r,children:n,dangerouslyAppendEmotionCSS:i,shadowScrollStylesBackgroundColor:l,scrollbarHeight:u,getScrollAreaViewportRef:d,...p},h)=>{let v=c.useRef(null),{theme:y}=(0,g.wn)(),{dataComponentProps:M}=c.useContext(C),I=U(y,l,u);c.useEffect(()=>{d&&d(v.current)},[d]);let w=(0,c.useMemo)(()=>({viewportRef:v}),[]);return(0,a.Y)(x.Provider,{value:w,children:(0,a.FD)("div",{css:[I.container,i],children:[(0,a.FD)(s.bL,{type:"hover",css:I.root,children:[(0,a.Y)(s.LM,{css:[I.viewport,t,$],ref:v,children:(0,a.Y)(o.B8,{css:[I.list,r],...p,ref:h,...M,children:n})}),(0,a.Y)(s.Ze,{orientation:"horizontal",css:I.scrollbar,children:(0,a.Y)(s.zi,{css:I.thumb})})]}),e&&(0,a.Y)("div",{css:[I.addButtonContainer,e.dangerouslyAppendEmotionCSS],children:(0,a.Y)(f.$n,{icon:(0,a.Y)(m.A,{}),size:"small","aria-label":"Add tab",css:I.addButton,onClick:e.onClick,componentId:`${M["data-component-id"]}.add_tab`,className:e.className})})]})})}),S=c.forwardRef(({onClose:e,suppressDeleteClose:t,customizedCloseAriaLabel:r,value:s,disabled:i,children:u,...d},f)=>{let{theme:m}=(0,g.wn)(),v=c.useRef(null),y=(0,n.SV)([f,v]),{activeValue:M,dataComponentProps:I}=c.useContext(C),w=I["data-component-id"],{viewportRef:b}=c.useContext(x),$=void 0!==e&&!i,P=W(m,$),k=(0,p.ei)({componentType:p.v_.Button,componentId:`${w}.close_tab`,analyticsEvents:A}),S=c.useCallback(()=>{if(!v.current||!b.current||M!==s)return;let e=b.current,t=v.current,r=e.getBoundingClientRect(),a=t.getBoundingClientRect();a.left<r.left?e.scrollLeft-=r.left-a.left:a.right>r.right&&(e.scrollLeft+=a.right-r.right)},[b,M,s]);(0,c.useEffect)(()=>{S()},[S]);let N=c.useMemo(()=>l()(S,10),[S]);return(0,c.useEffect)(()=>{if(!b.current||!v.current)return;let e=new ResizeObserver(N);return e.observe(b.current),e.observe(v.current),()=>{e.disconnect(),N.cancel()}},[N,b]),(0,a.FD)(o.l9,{css:P.trigger,value:s,disabled:i,onKeyDown:r=>{$&&!t&&"Delete"===r.key&&(k.onClick(r),r.stopPropagation(),r.preventDefault(),e(s))},onMouseDown:t=>{$&&1===t.button&&(k.onClick(t),t.stopPropagation(),t.preventDefault(),e(s))},...d,ref:y,children:[u,$&&(0,a.Y)(h.A,{onMouseDown:t=>{i||0!==t.button||!1!==t.ctrlKey||(k.onClick(t),t.stopPropagation(),t.preventDefault(),e(s))},css:P.closeSmallIcon,"aria-hidden":"false","aria-label":t?r:"Press delete to close the tab"})]})}),N=c.forwardRef(({mountMode:e="active",children:t,...r},n)=>{let{theme:s}=(0,g.wn)(),i=z(s),{activeValue:l}=c.useContext(C),u=r.value===l,[d,f]=c.useState(u);return u&&!d&&f(!0),(0,a.Y)(o.UC,{css:i,...r,ref:n,forceMount:"force"===e||"preserve"===e||void 0,children:"preserve"!==e||d?t:void 0})}),Y={overflow:"hidden"},R={display:"flex",alignItems:"center"},D={flex:1},T={margin:"2px 0 6px 0"},U=d()((e,t,r)=>({container:{...(0,v.c)(e),contain:"layout paint"},root:Y,viewport:{...(0,y.ye)(e,{backgroundColor:t})},list:R,scrollbar:{display:"flex",flexDirection:"column",userSelect:"none",touchAction:"none",height:r??3},thumb:{flex:1,background:e.isDarkMode?"rgba(255, 255, 255, 0.2)":"rgba(17, 23, 28, 0.2)","&:hover":{background:e.isDarkMode?"rgba(255, 255, 255, 0.3)":"rgba(17, 23, 28, 0.3)"},borderRadius:e.borders.borderRadiusSm,position:"relative"},addButtonContainer:D,addButton:T}),(e,t,r)=>`${(0,y.H6)(e)}|${t??""}|${r??""}`),W=d()((e,t)=>({trigger:{...(0,v.s)(e),alignItems:"center",justifyContent:t?"space-between":"center",minWidth:t?e.spacing.lg+e.spacing.md:e.spacing.lg,color:e.colors.textSecondary,lineHeight:e.typography.lineHeightBase,whiteSpace:"nowrap",border:"none",padding:`${e.spacing.xs}px 0 ${e.spacing.sm}px 0`,"& > .anticon:last-of-type":{visibility:"hidden"},"&:hover":{cursor:"pointer",color:e.colors.actionDefaultTextHover,"& > .anticon:last-of-type":{visibility:"visible"}},"&:active":{color:e.colors.actionDefaultTextPress},outlineStyle:"none",outlineColor:e.colors.actionDefaultBorderFocus,"&:focus-visible":{outlineStyle:"auto"},'&[data-state="active"]':{color:e.colors.textPrimary,boxShadow:`inset 0 -4px 0 ${e.colors.actionPrimaryBackgroundDefault}`,"& > .anticon:last-of-type":{visibility:"visible"}},"&[data-disabled]":{color:e.colors.actionDisabledText,"&:hover":{cursor:"not-allowed"}}},closeSmallIcon:{marginLeft:e.spacing.xs,color:e.colors.textSecondary,"&:hover":{color:e.colors.actionDefaultTextHover},"&:active":{color:e.colors.actionDefaultTextPress}}}),(e,t)=>`${(0,y.H6)(e)}|${t}`),z=d()(e=>({color:e.colors.textPrimary,'&[data-state="inactive"]':{display:"none"}}))},653730:(e,t,r)=>{r.d(t,{FN:()=>p,Ur:()=>u,Z6:()=>c,pm:()=>i,qM:()=>f,xf:()=>g,yX:()=>l});var a,n=r(610435),s=r(342411),o=r(176304);let i={unknown:"label-warning",ok:"label-success",triggered:"label-danger",unavailable:"label-warning",trashed:"label-default"},l={unknown:"lemon",ok:"lime",triggered:"coral",unavailable:"lemon",trashed:"default"},u={unknown:(0,n.Y)(s.sA,{id:"TFSVIS",defaultMessage:"UNKNOWN"}),ok:(0,n.Y)(s.sA,{id:"ohDT5q",defaultMessage:"OK"}),triggered:(0,n.Y)(s.sA,{id:"U+z0+x",defaultMessage:"TRIGGERED"}),unavailable:(0,n.Y)(s.sA,{id:"FcSYNd",defaultMessage:"UNAVAILABLE"}),trashed:(0,n.Y)(s.sA,{id:"78kU3C",defaultMessage:"TRASHED"})},d=(e,t,r)=>{let a=[{column:t}],n=e;return"MEDIAN"===e&&(n="PERCENTILE",a.push({number:.5})),{function:n,args:a,alias:r}};function c({valueAggregation:e,valueColumn:t,valueAlias:r,thresholdAggregation:a,thresholdColumn:n,thresholdAlias:s}){let o=[d(e,t,r)];return a&&n&&s&&o.push(d(a,n,s)),{selects:o}}let f=()=>`column_${Array.from(window.crypto.getRandomValues(new Uint32Array(4))).map(e=>e.toString(16)).join("").substring(0,8)}`;var p=((a={})[a.NEW=0]="NEW",a[a.VIEW=1]="VIEW",a[a.EDIT=2]="EDIT",a);function g(e,t){let r,a,n,s,i,l=(0,o.P0)();if(!e.query)return l?t.formatMessage({id:"K8xXlT",defaultMessage:"New legacy alert"}):t.formatMessage({id:"eke56f",defaultMessage:"New alert"});return r=!1,"is null"===(a=e?.options?.op)&&(r=!0,a="is NULL"),n=`${e?.options?.display_column||e?.options?.column||""}`,e?.options?.aggregation&&(n=`${e?.options?.aggregation}(${n})`),s=`${e?.options?.value||""}`,e?.options?.threshold_column&&(s=`${e?.options?.threshold_display_column||e?.options?.threshold_column||""}`),e?.options?.threshold_aggregation&&(s=`${e?.options?.threshold_aggregation}(${s})`),i=`${e?.query?.name||""}: ${n} ${a||""}`,r||(i=`${i} ${s}`),i}},733940:(e,t,r)=>{r.d(t,{Bw:()=>d,Ft:()=>h,GN:()=>w,Ic:()=>c,Ih:()=>p,PH:()=>g,RE:()=>I,UU:()=>v,nP:()=>M,sc:()=>m,yr:()=>l,z3:()=>f});var a,n,s=r(173463),o=r.n(s),i=r(342411),l=((a={}).MINUTE="Minute",a.HOUR="Hour",a.DAY="Day",a.WORKDAY="Workday",a.WEEK="Week",a.MONTH="Month",a);let u={Minute:1,Hour:2,Day:3,Workday:4,Week:5,Month:6};var d=((n={}).SUNDAY="Sunday",n.MONDAY="Monday",n.TUESDAY="Tuesday",n.WEDNESDAY="Wednesday",n.THURSDAY="Thursday",n.FRIDAY="Friday",n.SATURDAY="Saturday",n);let c={Minute:(0,i.zR)({id:"/quv1d",defaultMessage:"{count, plural, =1 {Minute} other {Minutes}}"}),Hour:(0,i.zR)({id:"cIFu+R",defaultMessage:"{count, plural, =1 {Hour} other {Hours}}"}),Day:(0,i.zR)({id:"mlfDgB",defaultMessage:"{count, plural, =1 {Day} other {Days}}"}),Workday:(0,i.zR)({id:"aQTmip",defaultMessage:"{count, plural, =1 {Workday} other {Workdays}}"}),Week:(0,i.zR)({id:"ibGc8O",defaultMessage:"{count, plural, =1 {Week} other {Weeks}}"}),Month:(0,i.zR)({id:"JwO6Eu",defaultMessage:"{count, plural, =1 {Month} other {Months}}"})},f={Sunday:(0,i.zR)({id:"4Dujo5",defaultMessage:"Sunday"}),Monday:(0,i.zR)({id:"U4XfOA",defaultMessage:"Monday"}),Tuesday:(0,i.zR)({id:"hZ5wHV",defaultMessage:"Tuesday"}),Wednesday:(0,i.zR)({id:"8FZ8Ch",defaultMessage:"Wednesday"}),Thursday:(0,i.zR)({id:"5opZ3I",defaultMessage:"Thursday"}),Friday:(0,i.zR)({id:"Vi8MmJ",defaultMessage:"Friday"}),Saturday:(0,i.zR)({id:"oElDLm",defaultMessage:"Saturday"})},p=(e,t=1,r,a)=>Object.values(l).filter(e=>a||"Workday"!==e).filter(e=>!r||"Minute"!==e).map(r=>({label:e.formatMessage(c[r],{count:t}),value:r,data:r})),g=e=>Object.values(d).map(t=>({label:e.formatMessage(f[t]),value:`${t}`,data:t})),m=(e,t=0)=>o()(t,e).map(e=>({label:e<10?`0${e}`:`${e}`,value:`${e}`,data:e})),h=(e,t)=>("Minute"===t?[1,2,3,4,5,6,10,12,15,20,30]:[1,2,3,4,6,8,12]).map(t=>({label:e.formatMessage(w.every,{frequency:t}),value:`${t}`,data:t})),v=(e,t)=>{if(e?.paused&&!t?.paused)return 1;if(!e?.paused&&t?.paused)return -1;return y(e?.quartz_cron_schedule,t?.quartz_cron_schedule)},y=(e,t)=>{let r=M(e),a=M(t);if(!r&&!a)return 0;if(!r)return -1;if(!a)return 1;if(r.unit!==a.unit)return u[r.unit]-u[a.unit];return r.interval-a.interval},M=e=>{if(!e||0===(e.match(RegExp("^(([0-5]?\\d|\\*) )(([0-5]?\\d|\\*)((-[0-5]?\\d)?/[0-5]?\\d)? )(((2[0-3])|([0-1]?\\d)|\\*)((-(2[0-3])|([0-1]?\\d))?/[0-2]?\\d)? )((((3[0-1])|([0-2]?\\d))|(\\*|\\?)) )((\\*|\\?) )(([1-7]|MON|TUE|WED|THU|FRI|SAT|SUN|MON-FRI)|(\\*|\\?))( [?,\\*])?$","gi"))||[]).length)return;let t=e.split(" "),r={};try{let e=t.findIndex(e=>e.includes("/")),a=t.findIndex(e=>"*"===e),n=t.findIndex(e=>"?"===e);if(-1!==e){if(a!==e+1&&n!==e+1)return;switch(r.interval=parseInt(t[e].split("/")[1],10),r.unit=Object.values(l)[e-1],r.unit){case"Hour":r.hours=parseInt(t[2],10)||0;case"Minute":r.minutes=parseInt(t[1],10)||0}}else if(r.interval=1,a<4||4===n&&"*"===t[5]||3===n&&"*"===t[5])-1!==n?r.unit=Object.values(l)[Math.min(a-1,n-1)]:r.unit=Object.values(l)[a-1],isNaN(parseInt(t[2],10))||(r.hours=parseInt(t[2],10)),isNaN(parseInt(t[1],10))||(r.minutes=parseInt(t[1],10));else if(/^MON-FRI$/i.test(t[5]))r.unit="Workday",r.interval=1,r.hours=parseInt(t[2],10),r.minutes=parseInt(t[1],10);else if(r.unit=3===t.findIndex(e=>"?"===e)?"Week":"Month","Week"===r.unit){let e=parseInt(t[5],10)-1,a=Object.entries(d).find(([e])=>t[5].toUpperCase()===e.substr(0,3).toUpperCase());if(a){let[,e]=a;r.weekday=e}else{if(isNaN(e))return;r.weekday=Object.values(d)[e]}r.hours=parseInt(t[2],10),r.minutes=parseInt(t[1],10)}else r.day=parseInt(t[3],10),r.hours=parseInt(t[2],10),r.minutes=parseInt(t[1],10);if(r.seconds=parseInt(t[0],10),Object.values(r).includes(NaN))return}catch{return}return r},I=e=>{let{unit:t,interval:r,seconds:a,day:n,weekday:s}=e,{hours:o,minutes:i}=e,l=(e,t)=>e>1?`${t}/${e}`:"*";switch(t){case"Minute":return`${a} ${l(r,i)} * * * ?`;case"Hour":return`${a} ${i} ${l(r,o)} * * ?`;case"Day":return`${a} ${i} ${o} * * ?`;case"Workday":return`${a} ${i} ${o} ? * MON-FRI`;case"Week":if(s)return`${a} ${i} ${o} ? * ${s.substr(0,3)}`;case"Month":return`${a} ${i} ${o} ${n} * ?`}},w={every:(0,i.zR)({id:"n8+peH",defaultMessage:"Every {frequency}"})}},802582:(e,t,r)=>{r.d(t,{p:()=>M});var a=r(610435),n=r(956935),s=r(889486),o=r(778529),i=r.n(o),l=r(91958),u=r.n(l),d=r(692738),c=r(429608),f=r(497895),p=r(639712),g=r(863802);let m=["hover","focus"],h=u()(e=>({backgroundColor:"#2F3941",lineHeight:"22px",padding:"4px 8px",boxShadow:e.general.shadowLow,...(0,p.WO)(e)})),v=u()(e=>({zIndex:e.options.zIndexBase+70}),e=>String(e.options.zIndexBase)),y=u()(e=>(0,n.AH)({...(0,c.Cx)(e)})),M=({children:e,title:t,placement:r="top",dataTestId:n,dangerouslySetAntdProps:o,silenceScreenReader:l=!1,useAsLabel:u=!1,...M})=>{let{theme:I}=(0,f.wn)(),w=(0,d.useRef)(null),b=(0,g.Y)("dubois-tooltip-component-"),A=o?.id?o?.id:b;if(!t)return(0,a.Y)(d.Fragment,{children:e});let $=l?{}:{"aria-live":"polite","aria-relevant":"additions"};n&&($["data-testid"]=n);let C=t&&d.isValidElement(t)?d.cloneElement(t,$):(0,a.Y)("span",{...$,children:t}),x={"aria-hidden":!1},P=e=>{if(!w.current||e.currentTarget.hasAttribute("aria-describedby")||e.currentTarget.hasAttribute("aria-labelledby"))return;A&&(e.currentTarget.setAttribute("aria-live","polite"),u?e.currentTarget.setAttribute("aria-labelledby",A):e.currentTarget.setAttribute("aria-describedby",A))},k=e=>{if(!w||!e.currentTarget.hasAttribute("aria-describedby")&&!e.currentTarget.hasAttribute("aria-labelledby"))return;u?e.currentTarget.removeAttribute("aria-labelledby"):e.currentTarget.removeAttribute("aria-describedby"),e.currentTarget.removeAttribute("aria-live")},S={onMouseEnter:e=>{P(e)},onMouseLeave:e=>{k(e)},onFocus:e=>{P(e)},onBlur:e=>{k(e)}},N=d.isValidElement(e)?d.cloneElement(e,{...x,...S,...e.props}):i()(e)?e:(0,a.Y)("span",{...x,...S,children:e}),{overlayInnerStyle:Y,overlayStyle:R,...D}=o||{},T=Y?{backgroundColor:"#2F3941",lineHeight:"22px",padding:"4px 8px",boxShadow:I.general.shadowLow,...Y,...(0,p.WO)(I)}:h(I),U=R?{zIndex:I.options.zIndexBase+70,...R}:v(I);return(0,a.Y)(c.wC,{children:(0,a.Y)(s.A,{id:A,ref:w,title:C,placement:r,trigger:m,overlayInnerStyle:T,overlayStyle:U,css:y(I.options.enableAnimation),...D,...M,children:N})})}},834343:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),s=r(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("g",{clipPath:"url(#SearchIcon_svg__a)",children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a7 7 0 1 0 4.39 12.453l2.55 2.55 1.06-1.06-2.55-2.55A7 7 0 0 0 8 1M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0",clipRule:"evenodd"})}),(0,a.Y)("defs",{children:(0,a.Y)("clipPath",{children:(0,a.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let i=(0,n.forwardRef)((e,t)=>(0,a.Y)(s.I,{ref:t,...e,component:o}));i.displayName="SearchIcon";let l=i},853762:(e,t,r)=>{r.d(t,{Z:()=>l,f:()=>u});var a=r(610435);r(692738);var n=r(79570),s=r(342411),o=r(834405);let i={noPrefix:e=>({intervals:[{seconds:31536e3,timeAgoMessage:t=>e.formatMessage({id:"NF6ePS",defaultMessage:"{count, plural, =1 {1 year} other {# years}} ago"},{count:t})},{seconds:2592e3,timeAgoMessage:t=>e.formatMessage({id:"N79Rdb",defaultMessage:"{count, plural, =1 {1 month} other {# months}} ago"},{count:t})},{seconds:86400,timeAgoMessage:t=>e.formatMessage({id:"XwD3hV",defaultMessage:"{count, plural, =1 {1 day} other {# days}} ago"},{count:t})},{seconds:3600,timeAgoMessage:t=>e.formatMessage({id:"i1Hj20",defaultMessage:"{count, plural, =1 {1 hour} other {# hours}} ago"},{count:t})},{seconds:60,timeAgoMessage:t=>e.formatMessage({id:"ZO8PZt",defaultMessage:"{count, plural, =1 {1 minute} other {# minutes}} ago"},{count:t})},{seconds:1,timeAgoMessage:t=>e.formatMessage({id:"gQB+Vs",defaultMessage:"{count, plural, =1 {1 second} other {# seconds}} ago"},{count:t})}],justNowMessage:e.formatMessage({id:"ZOsiNc",defaultMessage:"just now"})}),viewed:e=>({intervals:[{seconds:31536e3,timeAgoMessage:t=>e.formatMessage({id:"zu9xi3",defaultMessage:"Viewed {count, plural, =1 {1 year} other {# years}} ago"},{count:t})},{seconds:2592e3,timeAgoMessage:t=>e.formatMessage({id:"FOzgxE",defaultMessage:"Viewed {count, plural, =1 {1 month} other {# months}} ago"},{count:t})},{seconds:86400,timeAgoMessage:t=>e.formatMessage({id:"IwEVOL",defaultMessage:"Viewed {count, plural, =1 {1 day} other {# days}} ago"},{count:t})},{seconds:3600,timeAgoMessage:t=>e.formatMessage({id:"S9xuJ2",defaultMessage:"Viewed {count, plural, =1 {1 hour} other {# hours}} ago"},{count:t})},{seconds:60,timeAgoMessage:t=>e.formatMessage({id:"zcf18B",defaultMessage:"Viewed {count, plural, =1 {1 minute} other {# minutes}} ago"},{count:t})},{seconds:1,timeAgoMessage:t=>e.formatMessage({id:"McIjuI",defaultMessage:"Viewed {count, plural, =1 {1 second} other {# seconds}} ago"},{count:t})}],justNowMessage:e.formatMessage({id:"k0JWck",defaultMessage:"Viewed just now"})}),modified:e=>({intervals:[{seconds:31536e3,timeAgoMessage:t=>e.formatMessage({id:"iSKhoe",defaultMessage:"Modified {count, plural, =1 {1 year} other {# years}} ago"},{count:t})},{seconds:2592e3,timeAgoMessage:t=>e.formatMessage({id:"PbUKAJ",defaultMessage:"Modified {count, plural, =1 {1 month} other {# months}} ago"},{count:t})},{seconds:86400,timeAgoMessage:t=>e.formatMessage({id:"C7JdMh",defaultMessage:"Modified {count, plural, =1 {1 day} other {# days}} ago"},{count:t})},{seconds:3600,timeAgoMessage:t=>e.formatMessage({id:"7XNU4O",defaultMessage:"Modified {count, plural, =1 {1 hour} other {# hours}} ago"},{count:t})},{seconds:60,timeAgoMessage:t=>e.formatMessage({id:"EZ/c8g",defaultMessage:"Modified {count, plural, =1 {1 minute} other {# minutes}} ago"},{count:t})},{seconds:1,timeAgoMessage:t=>e.formatMessage({id:"NGVQnA",defaultMessage:"Modified {count, plural, =1 {1 second} other {# seconds}} ago"},{count:t})}],justNowMessage:e.formatMessage({id:"K7/6Pt",defaultMessage:"Modified just now"})})},l=({date:e,intl:t,tooltipFormatOptions:r,prefix:a="noPrefix"})=>{let n=Math.round((new Date().getTime()-e.getTime())/1e3),s="";try{s=(0,o.r6)(e,t,r)}catch(e){}let l=i[a](t);for(let e of l.intervals){let t=Math.floor(n/e.seconds);if(t>=1)return{displayText:e.timeAgoMessage(t),tooltipTitle:s}}return{displayText:l.justNowMessage,tooltipTitle:s}},u=({date:e,tooltipFormatOptions:t,prefix:r})=>{let{displayText:o,tooltipTitle:i}=l({date:e,intl:(0,s.tz)(),tooltipFormatOptions:t,prefix:r});return(0,a.Y)(n.m,{componentId:"web-shared.time-ago",content:i,children:(0,a.Y)("span",{children:o})})}},903800:(e,t,r)=>{r.d(t,{U:()=>s});var a=r(778529),n=r.n(a);function s(e){let t=e.state;return e.is_archived?t="trashed":n()(e.query)&&(t="unavailable"),t}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/7222.d90d9a9c8a.chunk.js.map