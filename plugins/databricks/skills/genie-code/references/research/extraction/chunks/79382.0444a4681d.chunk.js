"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[79382],{21255:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(610435),a=r(692738),i=r(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M5.5 6a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5z",clipRule:"evenodd"})})}let s=(0,a.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="StopCircleIcon";let l=s},161330:(e,t,r)=>{r.d(t,{I:()=>c});var n=r(610435),a=r(91958),i=r.n(a),o=r(79570),s=r(497895),l=r(201828);let d=i()(e=>({color:e.colors.textSecondary})),c=({content:e,iconTitle:t="More information",...r})=>{let{theme:a}=(0,s.wn)();return(0,n.Y)(o.m,{content:e,...r,children:(0,n.Y)(l.A,{tabIndex:0,"aria-hidden":"false","aria-label":t,alt:t,css:d(a)})})}},179246:(e,t,r)=>{r.d(t,{FS:()=>p,a4:()=>g,cL:()=>f,dO:()=>l,kW:()=>d});var n,a=r(610435),i=r(956935);r(692738);var o=r(445929),s=r(483588),l=((n={}).CONNECT="connect",n.OK="ok",n.ERROR="error",n.INACTIVE="inactive",n.STARTING="starting",n.STOPPING="stopping",n.DEGRADED="degraded",n.FAILED="failed",n.UNKNOWN="unknown",n.SOFT_ATTACH="soft_attach",n.LOADING="loading",n.DISABLED="disabled",n);function d({state:e,statusType:t,a11yLabel:r}){if("error"===t)return(0,a.Y)(c,{color:"red","data-testid":"status-icon-error","aria-label":r});if("degraded"===t)return(0,a.Y)(c,{color:"orange","data-testid":"status-icon-degraded","aria-label":r});if("failed"===t)return(0,a.Y)(c,{color:"red","data-testid":"status-icon-unhealthy","aria-label":r});switch(e){case s.Ol$.PENDING:return(0,a.Y)(g,{color:"green","data-testid":"nb-status-starting","aria-label":r});case s.Ol$.RESIZING:case s.Ol$.RUNNING:return(0,a.Y)(f,{color:"green","data-testid":"nb-status-connected","aria-label":r});case s.Ol$.RESTARTING:return(0,a.Y)(g,{color:"orange","aria-label":r});case s.Ol$.TERMINATED:return(0,a.Y)(h,{"aria-label":r});case s.Ol$.TERMINATING:return(0,a.Y)(g,{color:"red","aria-label":r});default:return(0,a.Y)(p,{"aria-label":r})}}function c({color:e,...t}){return(0,a.Y)(o.A,{css:t=>({color:Y(t)[e]}),...t})}function u({children:e}){return(0,a.Y)("div",{css:{width:16,height:16,display:"flex",alignItems:"center",justifyContent:"center"},children:e})}function p({color:e="blue",...t}){return(0,a.Y)(u,{children:(0,a.Y)("div",{css:[A(),{borderRadius:"50%"},m,C(e)],role:"img",...t})})}function f({color:e,...t}){return(0,a.Y)(u,{children:(0,a.Y)("div",{css:[A(),{borderRadius:"50%"},C(e)],role:"img",...t})})}function h({color:e="grey",...t}){return(0,a.Y)(u,{children:(0,a.Y)("div",{css:[A(),C(e)],role:"img",...t})})}function g({color:e,...t}){return(0,a.Y)(u,{children:(0,a.Y)("div",{css:[A(),{display:"flex",width:"14px",alignItems:"center",gap:"1px",position:"relative",top:0}],role:"img",...t,children:[0,1,2].map(t=>(0,a.Y)("div",{css:[function({color:e,index:t}){return r=>({height:"4px",width:"4px",borderRadius:"50%",backgroundColor:Y(r)[e],animation:`${I} 0.8s infinite linear alternate`,animationDelay:`${.4*t}s`})}({color:e,index:t})]},t))})})}function m(e){return{animation:`${!1===e.isDarkMode?y(v):y(w)} 1.75s infinite`}}let v=e=>`hsla(207 68% 42% / ${e})`,w=e=>`hsla(207 99% 72% / ${e})`,y=e=>(0,i.i7)("0%{box-shadow:0 0 0 0 ",e("0.7"),";}70%{box-shadow:0 0 0 6px ",e("0"),";}100%{box-shadow:0 0 0 0 ",e("0"),";}"),I=(0,i.i7)("from{opacity:1;}to{opacity:0;}");function A(){return{height:"8px",width:"8px"}}function Y(e){return{green:e.colors.green500,orange:e.colors.yellow500,red:e.colors.textValidationDanger,grey:e.colors.textSecondary,blue:e.colors.actionPrimaryBackgroundDefault}}function C(e){return t=>({backgroundColor:Y(t)[e]})}},180305:(e,t,r)=>{r.d(t,{V:()=>o});var n=r(610435);r(692738);var a=r(3393),i=r(342411);function o(e){let t=(0,i.tz)().formatMessage({id:"wHVY31",defaultMessage:'SQL warehouse with id "{warehouseId}" not found.'},{warehouseId:e.id});return(0,n.Y)(a.Ay,{error:Error(t),message:t})}},270654:(e,t,r)=>{r.d(t,{A:()=>p});var n=r(610435);r(692738);var a=r(778529),i=r.n(a),o=r(611798),s=r(913573),l=r(733052);function d({className:e,tooltip:t,"data-analytics-id":r,url:a,children:o}){let c=(0,n.FD)("span",{children:[t,(0,n.Y)("i",{className:"fa fa-external-link",style:{marginLeft:5}})]});return(0,n.Y)(l.A,{title:i()(t)?null:(0,n.Y)("a",{className:e,href:a,target:"_blank",rel:"noopener noreferrer",children:c}),children:i()(a)?(0,n.Y)("span",{className:e,children:o}):(0,n.Y)(s.A,{componentId:"codegen_redash_app_src_app_components_helptrigger_components_trigger.tsx_41",href:a,className:e,rel:"noopener noreferrer",target:"_blank","data-analytics-id":r,children:o})})}let c=(0,n.Y)("i",{className:"fa fa-question-circle","aria-hidden":"true"}),u=function({type:e,href:t,title:r,className:a,"data-analytics-id":s,showTooltip:l=!0,renderAsLink:u=!1,children:p=c}){let{href:f,title:h}=(0,o.wM)({type:e,href:t,title:r,showTooltip:l});if(i()(f))return null;return(0,n.Y)(n.FK,{children:(0,n.Y)(d,{css:{fontSize:15,"&:hover":{cursor:"pointer"}},className:a,url:f,tooltip:h,"data-analytics-id":s,children:p})})};function p(e){return(0,n.Y)(u,{...e})}},325382:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(610435),a=r(692738),i=r(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.FD)("g",{fill:"currentColor",clipPath:"url(#FolderCloudIcon_svg__a)",children:[(0,n.Y)("path",{d:"M.75 2a.75.75 0 0 0-.75.75v10.5c0 .414.336.75.75.75H3v-1.5H1.5v-9h3.172c.331 0 .649.132.883.366L6.97 5.28c.14.141.331.22.53.22h7V8H16V4.75a.75.75 0 0 0-.75-.75H7.81L6.617 2.805A2.75 2.75 0 0 0 4.672 2z"}),(0,n.Y)("path",{fillRule:"evenodd",d:"M10.179 7a3.61 3.61 0 0 0-3.464 2.595 3.251 3.251 0 0 0 .443 6.387.8.8 0 0 0 .163.018h5.821C14.758 16 16 14.688 16 13.107c0-1.368-.931-2.535-2.229-2.824A3.61 3.61 0 0 0 10.18 7m-2.805 7.496q.023 0 .044.004h5.555a1 1 0 0 1 .1-.002l.07.002c.753 0 1.357-.607 1.357-1.393s-.604-1.393-1.357-1.393h-.107a.75.75 0 0 1-.75-.75v-.357a2.107 2.107 0 0 0-4.199-.26.75.75 0 0 1-.698.656 1.75 1.75 0 0 0-.015 3.493",clipRule:"evenodd"})]}),(0,n.Y)("defs",{children:(0,n.Y)("clipPath",{children:(0,n.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let s=(0,a.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="FolderCloudIcon";let l=s},342145:(e,t,r)=>{r.d(t,{$y:()=>u,B_:()=>A,FQ:()=>g,OD:()=>s,T4:()=>o,U1:()=>m,UX:()=>f,Yu:()=>w,bB:()=>i,cC:()=>h,k0:()=>a,nU:()=>d,sO:()=>I,sh:()=>c,wp:()=>l,xY:()=>p,xe:()=>y,zD:()=>v});var n=r(141078);let a=(0,n.J1)`
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
`,i=(0,n.J1)`
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
`,o=(0,n.J1)`
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
`,s=(0,n.J1)`
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
`,l=(0,n.J1)`
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
`,d=(0,n.J1)`
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
`,c=(0,n.J1)`
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
`,u=(0,n.J1)`
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
`,p=(0,n.J1)`
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
`,f=(0,n.J1)`
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
`,h=(0,n.J1)`
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
`,g=(0,n.J1)`
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
`,m=(0,n.J1)`
  query getAccountUsersCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountUsersCount {
      totalCount
    }
  }
`,v=(0,n.J1)`
  query getAccountServicePrincipalsCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountServicePrincipalsCount {
      totalCount
    }
  }
`,w=(0,n.J1)`
  query getAccountGroupsCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountGroupsCount {
      totalCount
    }
  }
`,y=(0,n.J1)`
  query getWorkspaceUsersCount($shouldGetDirectlyAssignedOnly: Boolean) @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceUsersCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`,I=(0,n.J1)`
  query getWorkspaceServicePrincipalsCount($shouldGetDirectlyAssignedOnly: Boolean)
  @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceServicePrincipalsCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`,A=(0,n.J1)`
  query getWorkspaceGroupsCount($shouldGetDirectlyAssignedOnly: Boolean) @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceGroupsCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`},352185:(e,t,r)=>{r.d(t,{A6:()=>I,Ds:()=>p,FI:()=>u,I7:()=>c,m1:()=>d});var n,a,i,o=r(446835),s=r.n(o),l=r(978679),d=((n={}).CONFIGURATION="configuration",n.NOTEBOOKS="notebooks",n.LIBRARIES="libraries",n.SPARK_UI="sparkUi",n.DRIVER_LOGS="driverLogs",n.METRICS="metrics",n.SPARK_CLUSTER_UI="sparkClusterUi",n.APPS="apps",n.EVENTS="events",n);let c="/compute";var u=((a={}).InteractiveListPage="interactive",a.AutomatedListPage="automated",a.SqlWarehouses="sql-warehouses",a.BrickIndex="vector-search",a.BrickStore="online-stores",a.DatabaseInstances="database-instances",a.InstancePools="instance-pools",a.ClusterPolicies="policies",a.LakehouseApps="apps",a.GpuPools="gpu-pools",a.Serverless="serverless",a),p=((i={}).New="new",i.Edit="edit",i);let f=function e(...t){let r=RegExp("(^/*)|(/*$)","g"),n=s()(t).map(e=>e.trim().replace(r,"")).join("/"),a=n?`/${n}`:"",i=t=>t?e(a,t)():a;return i.append=(...t)=>e(a,...t),i}(c),h=f.append("instance-pools"),g=f.append("policies"),m=f.append("sparkui"),v=f.append("clusters"),w=f.append("database-instances");function y(e){return["driver",e].filter(l.zz).join("-")}let I={clusterMainPage:e=>f(e),sqlWarehouse:{create:()=>f.append("sql-warehouses")("new")},brickStore:{list:()=>I.clusterMainPage("online-stores"),view:e=>f.append("online-stores")(e)},databaseInstances:{list:()=>I.clusterMainPage("database-instances"),view:e=>w(e),edit:e=>w.append(e)("edit")},cluster:{view(e,t,r){let n=v.append(e);if(!t||"configuration"===t)return n();if("driverLogs"===t)return n("driver-logs");if("sparkUi"===t)return n("spark-ui");if("sparkClusterUi"===t)return n.append("spark-compute-ui")(("MASTER"===r?"master":r)??"master");return n(t)},edit:e=>v.append(e)("edit"),new:(e={})=>{let t="policyId"in e?`?policyId=${e.policyId}`:"",r="clone"in e?`?clone=${e.clone}`:"";return v.append("new")(r||t)}},sparkUi:{driverUi:(e,t)=>m.append(e)(`driver${t?`-${t}`:""}`),logs:(e,t)=>{let r=m.append(e)("driver-logs");if(!t?.jobId&&!t?.runId)return r;let n=new URLSearchParams;return t.jobId&&n.set("jobId",String(t.jobId)),t.runId&&n.set("runId",String(t.runId)),`${r}?${n}`},uiWithPath:e=>m.append(e)(),metrics:e=>m.append(e)("metrics"),stage:(e,t,r,n)=>m.append(e,y(t))(`stages/stage?id=${r}&attempt=0${void 0!==n?"&o="+n:""}`),job:(e,t,r,n)=>m.append(e,y(t))(`jobs/job?id=${r}${void 0!==n?"&o="+n:""}`)},brickIndex:{list:()=>I.clusterMainPage("vector-search"),view:e=>f.append("vector-search")(e)},policy:{view:e=>g(e),create:()=>g("new"),clone:e=>I.policy.create()+`?clone=${e}`,edit:e=>g.append(e)("edit")},pool:{view:e=>h(e),create:()=>h("new"),edit:e=>h.append(e)("edit")}}},397136:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(610435),a=r(692738),i=r(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M3 1.75A.75.75 0 0 1 3.75 1h10.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V12.5H1V11h2V8.75H1v-1.5h2V5H1V3.5h2zm1.5.75v11H6v-11zm3 0v11h6v-11z",clipRule:"evenodd"})})}let s=(0,a.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="NotebookIcon";let l=s},402720:(e,t,r)=>{let n;r.d(t,{P:()=>d});var a=r(610435),i=r(400136),o=r(591333),s=r(429608),l=r(866370);let d=((n=({dangerouslySetAntdProps:e,label:t,loadingDescription:r="LegacySkeleton",...n})=>{let d=n.loading??!0;return(0,a.Y)(s.wC,{children:(0,a.FD)(o.U,{label:t,children:[d&&(0,a.Y)(l.G,{description:r}),(0,a.Y)(i.A,{...n,...e})]})})}).Button=i.A.Button,n.Image=i.A.Image,n.Input=i.A.Input,n)},404991:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(610435),a=r(692738),i=r(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m2.207-10.189a2.25 2.25 0 0 1-1.457 2.56V9h-1.5V7.75A.75.75 0 0 1 8 7a.75.75 0 1 0-.75-.75h-1.5a2.25 2.25 0 0 1 4.457-.439M7.25 10.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0",clipRule:"evenodd"})})}let s=(0,a.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="QuestionMarkFillIcon";let l=s},505544:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(610435),a=r(692738),i=r(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.727 3.695c-.225.192-.227.298-.227.305s.002.113.227.305c.223.19.59.394 1.108.58C4.865 5.256 6.337 5.5 8 5.5s3.135-.244 4.165-.615c.519-.186.885-.39 1.108-.58.225-.192.227-.298.227-.305s-.002-.113-.227-.305c-.223-.19-.59-.394-1.108-.58C11.135 2.744 9.663 2.5 8 2.5s-3.135.244-4.165.615c-.519.186-.885.39-1.108.58M13.5 5.94a7 7 0 0 1-.826.358C11.442 6.74 9.789 7 8 7s-3.442-.26-4.673-.703a7 7 0 0 1-.827-.358V8c0 .007.002.113.227.305.223.19.59.394 1.108.58C4.865 9.256 6.337 9.5 8 9.5s3.135-.244 4.165-.615c.519-.186.885-.39 1.108-.58.225-.192.227-.298.227-.305zM15 8V4c0-.615-.348-1.1-.755-1.447-.41-.349-.959-.63-1.571-.85C11.442 1.26 9.789 1 8 1s-3.442.26-4.673.703c-.613.22-1.162.501-1.572.85C1.348 2.9 1 3.385 1 4v8c0 .615.348 1.1.755 1.447.41.349.959.63 1.572.85C4.558 14.74 6.21 15 8 15s3.441-.26 4.674-.703c.612-.22 1.161-.501 1.571-.85.407-.346.755-.832.755-1.447zm-1.5 1.939a7 7 0 0 1-.826.358C11.442 10.74 9.789 11 8 11s-3.442-.26-4.673-.703a7 7 0 0 1-.827-.358V12c0 .007.002.113.227.305.223.19.59.394 1.108.58 1.03.371 2.502.615 4.165.615s3.135-.244 4.165-.615c.519-.186.885-.39 1.108-.58.225-.192.227-.298.227-.305z",clipRule:"evenodd"})})}let s=(0,a.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="DatabaseIcon";let l=s},563521:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(610435),a=r(692738),i=r(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1 1.75A.75.75 0 0 1 1.75 1h12.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75zm1.5 8.75v3h4.75v-3zm0-1.5h4.75V2.5H2.5zm6.25-6.5v3h4.75v-3zm0 11V7h4.75v6.5z",clipRule:"evenodd"})})}let s=(0,a.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="DashboardIcon";let l=s},566779:(e,t,r)=>{r.r(t),r.d(t,{LakehouseEditPage:()=>E,RouteComponent:()=>G});var n=r(610435);r(692738);var a=r(200356),i=r(499348),o=r(811747),s=r(506245),l=r(351397),d=r(142744),c=r(917705),u=r(786439),p=r(210458),f=r(828866),h=r(827250),g=r(496197),m=r(758912),v=r(954456),w=r(180305),y=r(936036),I=r(28257),A=r(529484),Y=r(521198),C=r(694762),b=r(79128),S=r(295169),x=r(52430),$=r(342411),k=r(686560),P=r(488655),_=r(648782),M=r(224845),R=r(793997),N=r(817748);function D({children:e}){return(0,n.Y)("div",{style:{maxWidth:1200},children:e})}function O({id:e,endpointState:t,initialState:r,isWarehouseOwner:i,lakehouse:o}){let s=(0,$.tz)(),[d,{loading:c,blocked5xlByError:u}]=(0,I.R)(e),{openDialog:f,dialogNode:h}=(0,Y.sp)(C.ZF),g=(0,k.d)("isAdmin",!1);(0,A.$)("sql_endpoint_edit");let w=e=>t===a.tXm.RUNNING&&(r.size!==e.size||r.enablePhoton!==e.enablePhoton||!(0,l.$I)(r.tags.customTags,e.tags?.customTags??[])||r.enableDatabricksCompute!==e.enableDatabricksCompute||r.channel?.name!==e.channel?.name),{handleSubmit:y,formBodyProps:S}=(0,p.XC)({onSubmit:e=>{w(e)?f({componentId:"codegen_redash_app_src_app_extensions_edge_lakehouse_pages_lakehouseedit_lakehouseedit.tsx_71",title:(0,n.Y)($.sA,{id:"xrPiaE",defaultMessage:"Edit SQL Warehouse"}),children:(0,n.Y)("p",{className:"dbsql-legacy-p",children:(0,n.Y)($.sA,{id:"tppICQ",defaultMessage:"<p>Are you sure you want to edit warehouse <strong>{warehouseName}</strong>?</p><p>Once all open sessions are closed the warehouse will restart.</p>",values:{warehouseName:e.name}})}),okText:(0,n.Y)($.sA,{id:"j4fv2L",defaultMessage:"Confirm"}),onOk:()=>d(e)}):d(e)},initialState:r}),x=(0,P.Zp)(),_=(0,R.ko)(S.value.size)||S.value.size===a.DWz.X5LARGE&&u;return(0,n.FD)(n.FK,{children:[(0,n.Y)(m.v,{name:r?.name,buttons:[(0,n.Y)(b.$n,{componentId:"dbsql.warehouse_edit.cancel",onClick:()=>x((0,v.Q8)((0,v.kX)(e))),"data-testid":"LakehouseEdit.Cancel",children:(0,n.Y)($.sA,{id:"phK2r3",defaultMessage:"Cancel"})},"linkCancelButton"),(0,n.Y)(b.$n,{componentId:"dbsql.warehouse_edit.save",css:{marginLeft:5},type:"primary",onClick:y,loading:c,disabled:_,"data-testid":"LakehouseEdit.Save",children:(0,n.Y)("span",{children:w(S.value)?(0,n.Y)($.sA,{id:"ZsR5qv",defaultMessage:"Save and restart"}):(0,n.Y)($.sA,{id:"W2e2Qx",defaultMessage:"Save"})})},"saveLakehouseButton")]}),(0,n.FD)(D,{children:[(0,n.Y)(p.I1,{...S,disableBudgetPolicy:!i&&!g,disableBudgetPolicyReason:s.formatMessage({id:"SJt9dl",defaultMessage:"Only the warehouse owner and workspace admins can change its budget policy"}),lakehouse:o}),_&&(0,n.Y)(R.Wt,{})]}),h]})}function T(){return(0,n.FD)(n.FK,{children:[(0,n.Y)(m.S,{buttons:[(0,n.FD)("div",{css:{display:"flex",gap:8},children:[(0,n.Y)(S.x,{css:{width:68,height:32}},"skeletonFirstButton"),(0,n.Y)(S.x,{css:{marginLeft:5,width:55,height:32}},"skeletonSecondButton")]},"skeletonButtonContainer")]}),(0,n.Y)(D,{children:(0,n.Y)(f.r4,{})})]})}function E({id:e}){(0,u.Z)();let{data:t,loading:r,error:i}=(0,y.DJ)({variables:{id:e}}),o=(0,M.n)(),s=t?.lakehouse,l=s&&(0,N.E)(s),p=l?.some(e=>e.user_name===o.user_name&&"IS_OWNER"===e.permission_level)??!1,f=(0,d.V)(s,a.fFV.CAN_MANAGE),m=(0,g.c)();if((0,c.A)(i),!r&&(!s||!f))return(0,n.Y)(w.V,{id:e});return(0,n.Y)(x.f,{children:s?(0,n.Y)(O,{endpointState:s.state,initialState:(0,h.x)(s,m),lakehouse:s,id:e,isWarehouseOwner:p}):(0,n.Y)(T,{})})}function G(){let{id:e=""}=(0,_.g)();return(0,s.n)((0,$.zR)({id:"dDDK+g",defaultMessage:"SQL Warehouse"})),(0,n.Y)(o.g,{children:(0,n.Y)(i.A,{children:(0,n.Y)(E,{id:e})})})}},583971:(e,t,r)=>{r.d(t,{Ri:()=>u});var n=r(733337),a=r(641760),i=r(278983);function o(e,t,r,n,a,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(n,a)}function s(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var i=e.apply(t,r);function s(e){o(i,n,a,s,l,"next",e)}function l(e){o(i,n,a,s,l,"throw",e)}s(void 0)})}}let l=[1,1,2,3,5,8,13,21],d=l.length;function c(e){return e instanceof a.XD}function u(e,t){return s(function*(e,t,r=1e3){let a=0,o=null;for(;a<d;)try{return yield(0,n.nr)(e,t)}catch(e){if(o=e,c(e)&&function(e){if(!c(e))return!1;return 429===e.response.status}(e))(0,i.y)("clientsideEvent",{eventType:"ApiFetchRetry",eventName:"RetryAttempt",retryCount:a}),yield function(e){return s(function*(e,t=1e3){let r=function(e,t=1e3){let r=Math.min(e,l.length-1);return l[r]*t}(e,t);return new Promise(e=>setTimeout(e,r))}).apply(this,arguments)}(a,r),a++;else break}throw c(o)&&a===d&&(0,i.y)("clientsideEvent",{eventType:"ApiFetchRetry",eventName:"MaxRetryAttemptReached",errorCode:o?.response?.status,retryCount:a}),o}).apply(this,arguments)}},611824:(e,t,r)=>{r.d(t,{_:()=>a});var n=r(441535);function a(){return(0,n.W)("enable_gov_tag",null)??(0,n.W)("databricks.fe.uc.enableGovTag",!1)}},615693:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(610435),a=r(692738),i=r(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1 1.75A.75.75 0 0 1 1.75 1h12.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75zm1.5.75v3h11v-3zm0 11V7H5v6.5zm4 0h3V7h-3zM11 7v6.5h2.5V7z",clipRule:"evenodd"})})}let s=(0,a.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="TableIcon";let l=s},733337:(e,t,r)=>{r.d(t,{Ky:()=>c,Ur:()=>u,nr:()=>d});var n=r(583971),a=r(641760),i=r(441535),o=r(19123);function s(e,t,r,n,a,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(n,a)}function l(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var i=e.apply(t,r);function o(e){s(i,n,a,o,l,"next",e)}function l(e){s(i,n,a,o,l,"throw",e)}o(void 0)})}}function d(e,t){return l(function*(){let r=yield(0,o.h)(e,t);if(!r.ok){let t;try{t=yield r.json()}catch(e){}throw new a.XD(e,r,t)}return yield r.json()})()}function c(e,t,r,a,o){return l(function*(){let s,l={response:[],next_page_token:void 0},d=(0,i.W)("databricks.fe.uc.defaultPaginationWindowSize",0),c=void 0!==a?a:d;do{let a=r?.useCentralPagination?{"pagination_context.max_results":c,...r?.queryParameters}:{[o??"max_results"]:c,...r?.queryParameters};s&&(r?.useCentralPagination?a["pagination_context.page_token"]=s:a.page_token=s);let i=new URLSearchParams(a),d=`${e}?${i}`;try{let e=yield(0,n.Ri)(d,r);if(!e)break;let a=yield t(e);a&&l.response.push(...a),r?.useCentralPagination?(l.next_page_token=e.pagination?.next_page_token,s=e.pagination?.next_page_token):(l.next_page_token=e.next_page_token,s=e.next_page_token)}catch(e){throw e}}while(s);return l.response})()}function u(e){return e instanceof a.XD&&404===e.response.status&&"METASTORE_DOES_NOT_EXIST"===e.response.data.error_code}},758912:(e,t,r)=>{r.d(t,{v:()=>m,S:()=>v});var n=r(610435),a=r(913573);r(692738);var i=r(497895),o=r(402720);function s({className:e}){let{classNamePrefix:t,theme:r}=(0,i.wn)();return(0,n.Y)(o.P,{active:!0,paragraph:!1,title:!0,css:{height:r.typography.fontSizeXl,maxWidth:"50%",marginTop:"2px",[`.${t}-skeleton-title`]:{height:r.typography.fontSizeXxl,margin:0}},className:e})}var l=r(954456),d=r(814510),c=r(764236),u=r(90710),p=r(342411),f=r(175889);function h(){return(0,n.Y)(d.Q,{children:(0,n.Y)(d.Q.Item,{children:(0,n.Y)(a.A,{componentId:"codegen_redash_app_src_app_extensions_edge_lakehouse_components_lakehouseheader.tsx_23",href:(0,l.Ql)(),noBasePath:!0,children:(0,n.Y)(p.sA,{id:"S94PXS",defaultMessage:"SQL Warehouses"})})})})}function g({children:e}){return(0,n.FD)("div",{children:[(0,n.Y)(c.h,{}),e,(0,n.Y)(c.h,{})]})}function m({name:e,buttons:t,status:r}){return(0,n.Y)(g,{children:(0,n.Y)(u.Y,{title:(0,n.FD)("div",{css:e=>({display:"flex",alignItems:"center",gap:e.spacing.sm}),children:[e,(0,n.Y)(f.A,{state:r?.state,health:r?.health,shouldUseNewIcons:!0,withTooltipForHealthyState:!0,withTooltipForUnhealthyState:!0},"lakehouse-state-icon")]}),buttons:t,breadcrumbs:(0,n.Y)(h,{})})})}function v({buttons:e}){return(0,n.FD)(g,{children:[(0,n.Y)(h,{}),(0,n.FD)("div",{css:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,n.Y)(s,{}),e]})]})}},802582:(e,t,r)=>{r.d(t,{p:()=>y});var n=r(610435),a=r(956935),i=r(889486),o=r(778529),s=r.n(o),l=r(91958),d=r.n(l),c=r(692738),u=r(429608),p=r(497895),f=r(639712),h=r(863802);let g=["hover","focus"],m=d()(e=>({backgroundColor:"#2F3941",lineHeight:"22px",padding:"4px 8px",boxShadow:e.general.shadowLow,...(0,f.WO)(e)})),v=d()(e=>({zIndex:e.options.zIndexBase+70}),e=>String(e.options.zIndexBase)),w=d()(e=>(0,a.AH)({...(0,u.Cx)(e)})),y=({children:e,title:t,placement:r="top",dataTestId:a,dangerouslySetAntdProps:o,silenceScreenReader:l=!1,useAsLabel:d=!1,...y})=>{let{theme:I}=(0,p.wn)(),A=(0,c.useRef)(null),Y=(0,h.Y)("dubois-tooltip-component-"),C=o?.id?o?.id:Y;if(!t)return(0,n.Y)(c.Fragment,{children:e});let b=l?{}:{"aria-live":"polite","aria-relevant":"additions"};a&&(b["data-testid"]=a);let S=t&&c.isValidElement(t)?c.cloneElement(t,b):(0,n.Y)("span",{...b,children:t}),x={"aria-hidden":!1},$=e=>{if(!A.current||e.currentTarget.hasAttribute("aria-describedby")||e.currentTarget.hasAttribute("aria-labelledby"))return;C&&(e.currentTarget.setAttribute("aria-live","polite"),d?e.currentTarget.setAttribute("aria-labelledby",C):e.currentTarget.setAttribute("aria-describedby",C))},k=e=>{if(!A||!e.currentTarget.hasAttribute("aria-describedby")&&!e.currentTarget.hasAttribute("aria-labelledby"))return;d?e.currentTarget.removeAttribute("aria-labelledby"):e.currentTarget.removeAttribute("aria-describedby"),e.currentTarget.removeAttribute("aria-live")},P={onMouseEnter:e=>{$(e)},onMouseLeave:e=>{k(e)},onFocus:e=>{$(e)},onBlur:e=>{k(e)}},_=c.isValidElement(e)?c.cloneElement(e,{...x,...P,...e.props}):s()(e)?e:(0,n.Y)("span",{...x,...P,children:e}),{overlayInnerStyle:M,overlayStyle:R,...N}=o||{},D=M?{backgroundColor:"#2F3941",lineHeight:"22px",padding:"4px 8px",boxShadow:I.general.shadowLow,...M,...(0,f.WO)(I)}:m(I),O=R?{zIndex:I.options.zIndexBase+70,...R}:v(I);return(0,n.Y)(u.wC,{children:(0,n.Y)(i.A,{id:C,ref:A,title:S,placement:r,trigger:g,overlayInnerStyle:D,overlayStyle:O,css:w(I.options.enableAnimation),...N,...y,children:_})})}},814510:(e,t,r)=>{let n;r.d(t,{Q:()=>u});var a=r(610435),i=r(956935),o=r(930125),s=r(429608),l=r(497895),d=r(955210),c=r(123252);let u=((n=({dangerouslySetAntdProps:e,includeTrailingCaret:t=!0,...r})=>{let{theme:u,classNamePrefix:p}=(0,l.wn)(),f=`.${p}-breadcrumb-separator`,h=(0,i.AH)({"span:last-child a":{color:u.colors.primary,":hover, :focus":{color:"#2272B4"}},a:{"&:focus-visible":{outlineColor:`${u.colors.actionDefaultBorderFocus} !important`,outlineStyle:"auto !important"}},[f]:{fontSize:u.general.iconFontSize,"& .anticon":{fontSize:13}},"& > span":{display:"inline-flex",alignItems:"center"}});return(0,a.Y)(s.wC,{children:(0,a.FD)(o.A,{...(0,c.VG)(),separator:(0,a.Y)(d.A,{}),...r,...e,css:(0,i.AH)((0,s.Cx)(u.options.enableAnimation),h),children:[r.children,t&&r.children&&(0,a.Y)(n.Item,{children:" "})]})})}).Item=o.A.Item,n.Separator=o.A.Separator,n)},820648:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(610435),a=r(692738),i=r(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M14 .75a.75.75 0 0 0-.75-.75H4.5A2.5 2.5 0 0 0 2 2.5v10.75A2.75 2.75 0 0 0 4.75 16h8.5a.75.75 0 0 0 .75-.75zM3.5 4.792v8.458c0 .69.56 1.25 1.25 1.25h7.75V5h-8c-.356 0-.694-.074-1-.208m9-1.292v-2h-8a1 1 0 0 0 0 2z",clipRule:"evenodd"})})}let s=(0,a.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CatalogIcon";let l=s},822464:(e,t,r)=>{r.d(t,{W:()=>d});var n=r(610435),a=r(692738),i=r(680701),o=r(342411),s=r(88277);let l=(0,n.Y)(o.sA,{id:"GZrYVO",defaultMessage:"An error occurred"});function d(){return(0,a.useCallback)((e,t)=>{let{title:r=l,message:a=(0,n.Y)(i.y,{error:e}),key:o=e.name}=t??{},d=s.y.addErrorNotification({title:r,message:a,uid:o,autoDismiss:0});return()=>s.y.removeNotification(d.uid)},[])}},823825:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(610435),a=r(692738),i=r(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("g",{clipPath:"url(#ModelsIcon_svg__a)",children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M0 4.75a2.75 2.75 0 0 1 5.145-1.353l4.372-.95a2.75 2.75 0 1 1 3.835 2.823l.282 2.257a2.75 2.75 0 1 1-2.517 4.46l-2.62 1.145.003.118a2.75 2.75 0 1 1-4.415-2.19L3.013 7.489A2.75 2.75 0 0 1 0 4.75M2.75 3.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m2.715 1.688q.027-.164.033-.333l4.266-.928a2.75 2.75 0 0 0 2.102 1.546l.282 2.257c-.377.165-.71.412-.976.719zM4.828 6.55a2.8 2.8 0 0 1-.413.388l1.072 3.573q.13-.012.263-.012c.945 0 1.778.476 2.273 1.202l2.5-1.093a2.8 2.8 0 0 1 .012-.797zM12 10.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M5.75 12a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M11 2.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0",clipRule:"evenodd"})}),(0,n.Y)("defs",{children:(0,n.Y)("clipPath",{children:(0,n.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let s=(0,a.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="ModelsIcon";let l=s},834343:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(610435),a=r(692738),i=r(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("g",{clipPath:"url(#SearchIcon_svg__a)",children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a7 7 0 1 0 4.39 12.453l2.55 2.55 1.06-1.06-2.55-2.55A7 7 0 0 0 8 1M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0",clipRule:"evenodd"})}),(0,n.Y)("defs",{children:(0,n.Y)("clipPath",{children:(0,n.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let s=(0,a.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="SearchIcon";let l=s},848737:(e,t,r)=>{r.d(t,{d:()=>h});var n=r(610435),a=r(692738),i=r(545251),o=r(305404),s=r(994796),l=r(497895),d=r(834343),c=r(407374),u=r(469490),p=r(569546);let f=e=>{if("string"==typeof e||"number"==typeof e)return e.toString();if(a.isValidElement(e)&&e.props.children)return a.Children.toArray(e.props.children).map(f).join(" ");return""},h=(0,a.forwardRef)(({onChange:e,onSearch:t,virtualized:r,children:h,hasWrapper:g,controlledValue:m,setControlledValue:v,rightSearchControls:w,...y},I)=>{let{theme:A}=(0,l.wn)(),{componentId:Y}=(0,i.w)(),{isInsideDialogComboboxOptionList:C}=(0,o.r)(),b=`no-result-${(0,p.B)()}`,S=(0,a.useRef)(null);(0,a.useImperativeHandle)(I,()=>S.current);let[x,$]=a.useState();if(!C)throw Error("`DialogComboboxOptionListSearch` must be used within `DialogComboboxOptionList`");let k=h;if(x&&!r&&void 0===m){var P;let e;P=g?h.props.children:h,e=x.toLowerCase(),k=a.Children.map(P,t=>{if(a.isValidElement(t)){let r=t.props.__EMOTION_TYPE_PLEASE_DO_NOT_USE__?.defaultProps._TYPE??t.props._TYPE;if("DialogComboboxOptionListSelectItem"===r||"DialogComboboxOptionListCheckboxItem"===r){let r=f(t).toLowerCase(),n=t.props.value?.toLowerCase()??"";return r.includes(e)||n.includes(e)?t:null}}return t})?.filter(e=>e),g&&(k=a.cloneElement(h,{},k))}let _=(0,a.useRef)(null);(0,a.useEffect)(()=>{if(!_.current)return;let e=(0,s.aV)(_.current);if(e){let t=(0,s.kQ)(e),r=e?.[0];r&&(0,s.ed)(r,t,!1)}},[x]);let M=a.Children.toArray(g?h.props.children:h).some(e=>a.isValidElement(e)),R=g&&k?.props.children?.length||!g&&k?.length;return(0,a.useEffect)(()=>{R||S.current?.input?.setAttribute("aria-activedescendant",b)},[R,b,S.current?.input?.value]),(0,n.FD)(n.FK,{children:[(0,n.Y)("div",{ref:_,css:{padding:`${A.spacing.sm}px ${A.spacing.lg/2}px ${A.spacing.sm}px`,width:"100%",boxSizing:"border-box",position:"sticky",top:0,background:A.colors.backgroundPrimary,zIndex:A.options.zIndexBase+1},children:(0,n.FD)("div",{css:{display:"flex",flexDirection:"row",gap:A.spacing.sm},children:[(0,n.Y)(c.p,{componentId:Y?`${Y}.search`:"codegen_design_system_src_design_system_dialogcombobox_dialogcomboboxoptionlistsearch.tsx_173",type:"search",name:"search",ref:S,prefix:(0,n.Y)(d.A,{}),placeholder:"Search",onChange:e=>{r||$(e.target.value),v?.(e.target.value),t?.(e.target.value)},onKeyDown:e=>{(e=>{if("ArrowDown"!==e.key&&"ArrowUp"!==e.key&&"Enter"!==e.key)return;e.preventDefault();let t=(0,s.aV)(e.target);if(!t)return;let r=(0,s.kQ)(t);if("ArrowDown"===e.key||"ArrowUp"===e.key)if(r){let n=(0,s.oS)(r,"ArrowDown"===e.key?"next":"previous");if(n)(0,s.ed)(n,r,!1);else if("ArrowDown"===e.key){let e=t[0];(0,s.ed)(e,r,!1)}else if("ArrowUp"===e.key){let e=t[t.length-1];(0,s.ed)(e,r,!1)}}else{let r="ArrowDown"===e.key?t[0]:t[t.length-1];r&&(0,s.ed)(r,void 0,!1)}else"Enter"===e.key&&r&&r.click()})(e),y.onKeyDown?.(e)},value:m??x,shouldPreventFormSubmission:!0,...y}),w]})}),r?h:R&&M?(0,n.Y)("div",{"aria-live":"polite",css:{width:"100%"},children:k}):(0,n.Y)(u.i,{id:b})]})})},867241:(e,t,r)=>{r.d(t,{b:()=>p,t:()=>f});var n=r(610435);r(692738);var a=r(497895),i=r(379045),o=r(140078),s=r(664093),l=r(935006),d=r(498928),c=r(342411),u=r(179246);function p({statusType:e}){let t=(0,c.tz)(),{theme:r}=(0,a.wn)(),h={"data-testid":`status-indicator-${e.toLowerCase()}`,css:{fontSize:r.general.iconFontSize},"aria-label":f(t,e)};return({[u.dO.LOADING]:(0,n.Y)(i.A,{spin:!0,color:"success",...h}),[u.dO.STARTING]:(0,n.Y)(i.A,{spin:!0,color:"success",...h}),[u.dO.STOPPING]:(0,n.Y)(i.A,{spin:!0,color:"danger",...h}),[u.dO.ERROR]:(0,n.Y)(o.A,{color:"danger",...h}),[u.dO.FAILED]:(0,n.Y)(s.A,{color:"danger",...h}),[u.dO.DEGRADED]:(0,n.Y)(s.A,{color:"danger",...h}),[u.dO.OK]:(0,n.Y)(l.w,{status:"online",...h}),[u.dO.SOFT_ATTACH]:(0,n.Y)(l.w,{status:"disconnected",style:{color:r.colors.textValidationSuccess},...h}),[u.dO.INACTIVE]:(0,n.Y)(l.w,{status:"offline",...h}),[u.dO.UNKNOWN]:(0,n.Y)(d.A,{...h,css:{...h.css,color:r.colors.textSecondary}}),[u.dO.CONNECT]:(0,n.Y)(u.cL,{color:"blue"}),[u.dO.DISABLED]:(0,n.Y)(u.cL,{color:"grey"})})[e]}function f(e,t){return({[u.dO.LOADING]:e.formatMessage({id:"JbU38J",defaultMessage:"Loading"}),[u.dO.STARTING]:e.formatMessage({id:"DndMZP",defaultMessage:"Starting"}),[u.dO.STOPPING]:e.formatMessage({id:"P0xrEJ",defaultMessage:"Stopping"}),[u.dO.OK]:e.formatMessage({id:"mGJQhs",defaultMessage:"Connected"}),[u.dO.SOFT_ATTACH]:e.formatMessage({id:"cw1jKR",defaultMessage:"Soft Attach"}),[u.dO.INACTIVE]:e.formatMessage({id:"k6RHlN",defaultMessage:"Inactive"}),[u.dO.UNKNOWN]:e.formatMessage({id:"tz/q83",defaultMessage:"Unknown"}),[u.dO.ERROR]:e.formatMessage({id:"MLHD7P",defaultMessage:"Error"}),[u.dO.FAILED]:e.formatMessage({id:"TVazM5",defaultMessage:"Failed"}),[u.dO.DEGRADED]:e.formatMessage({id:"pi43I0",defaultMessage:"Degraded"}),[u.dO.CONNECT]:e.formatMessage({id:"c9NXOV",defaultMessage:"Connect"}),[u.dO.DISABLED]:e.formatMessage({id:"vZMQy3",defaultMessage:"Disabled"})})[t]}},917705:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(692738),a=r(822464);function i(e,t=!1,r=!0){let o=(0,a.W)(),s=r&&e&&!t;if((0,n.useEffect)(()=>{if(e&&!s)return o(e)},[s,e,o]),s)throw e;return e?.message}},935006:(e,t,r)=>{r.d(t,{w:()=>d});var n=r(610435),a=r(497895),i=r(55079),o=r(585703),s=r(947918);let l={online:({theme:e,style:t,...r})=>(0,n.Y)(i.A,{color:"success",css:{...t},...r}),disconnected:({theme:e,style:t,...r})=>(0,n.Y)(o.A,{css:{color:e.colors.grey500,...t},...r}),offline:({theme:e,style:t,...r})=>(0,n.Y)(s.A,{css:{color:e.colors.grey500,...t},...r})},d=e=>{let{status:t,style:r,...i}=e,{theme:o}=(0,a.wn)(),s=l[t];return(0,n.Y)(s,{theme:o,style:r,...i})}},946590:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(610435),a=r(692738),i=r(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M0 2.75A.75.75 0 0 1 .75 2H8v1.5H1.5v9h13V10H16v3.25a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1-.75-.75zm12.987-.14a.75.75 0 0 0-1.474 0l-.137.728a1.93 1.93 0 0 1-1.538 1.538l-.727.137a.75.75 0 0 0 0 1.474l.727.137c.78.147 1.39.758 1.538 1.538l.137.727a.75.75 0 0 0 1.474 0l.137-.727c.147-.78.758-1.39 1.538-1.538l.727-.137a.75.75 0 0 0 0-1.474l-.727-.137a1.93 1.93 0 0 1-1.538-1.538z",clipRule:"evenodd"})})}let s=(0,a.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="SparkleRectangleIcon";let l=s},947918:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(610435),a=r(692738),i=r(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"m11.667 5.392 1.362-1.363-1.06-1.06-9 9 1.06 1.06 1.363-1.362a4.5 4.5 0 0 0 6.276-6.276m-1.083 1.083-4.11 4.109a3 3 0 0 0 4.11-4.11M8 3.5q.606.002 1.164.152L7.811 5.006A3 3 0 0 0 5.006 7.81L3.652 9.164A4.5 4.5 0 0 1 8 3.5",clipRule:"evenodd"})})}let s=(0,a.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CircleOffIcon";let l=s}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/79382.0444a4681d.chunk.js.map