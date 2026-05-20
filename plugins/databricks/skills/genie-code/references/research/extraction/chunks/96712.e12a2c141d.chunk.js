"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[96712],{147084:(e,t,r)=>{r.d(t,{Ke:()=>I,Nt:()=>y,R6:()=>A,UC:()=>k,bL:()=>P,l9:()=>$,z3:()=>g});var n=r(692738),a=r(140261),i=r(466005),o=r(849767),l=r(603934),s=r(488287),c=r(431137),u=r(456611),d=r(527843),p=r(187530),f="Collapsible",[m,g]=(0,i.A)(f),[v,h]=m(f),y=n.forwardRef((e,t)=>{let{__scopeCollapsible:r,open:a,defaultOpen:i,disabled:l,onOpenChange:s,...u}=e,[m,g]=(0,o.i)({prop:a,defaultProp:i??!1,onChange:s,caller:f});return(0,p.jsx)(v,{scope:r,disabled:l,contentId:(0,d.B)(),open:m,onOpenToggle:n.useCallback(()=>g(e=>!e),[g]),children:(0,p.jsx)(c.sG.div,{"data-state":b(m),"data-disabled":l?"":void 0,...u,ref:t})})});y.displayName=f;var w="CollapsibleTrigger",A=n.forwardRef((e,t)=>{let{__scopeCollapsible:r,...n}=e,i=h(w,r);return(0,p.jsx)(c.sG.button,{type:"button","aria-controls":i.contentId,"aria-expanded":i.open||!1,"data-state":b(i.open),"data-disabled":i.disabled?"":void 0,disabled:i.disabled,...n,ref:t,onClick:(0,a.mK)(e.onClick,i.onOpenToggle)})});A.displayName=w;var C="CollapsibleContent",I=n.forwardRef((e,t)=>{let{forceMount:r,...n}=e,a=h(C,e.__scopeCollapsible);return(0,p.jsx)(u.C,{present:r||a.open,children:({present:e})=>(0,p.jsx)(x,{...n,ref:t,present:e})})});I.displayName=C;var x=n.forwardRef((e,t)=>{let{__scopeCollapsible:r,present:a,children:i,...o}=e,u=h(C,r),[d,f]=n.useState(a),m=n.useRef(null),g=(0,s.s)(t,m),v=n.useRef(0),y=v.current,w=n.useRef(0),A=w.current,I=u.open||d,x=n.useRef(I),P=n.useRef(void 0);return n.useEffect(()=>{let e=requestAnimationFrame(()=>x.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,l.N)(()=>{let e=m.current;if(e){P.current=P.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();v.current=t.height,w.current=t.width,x.current||(e.style.transitionDuration=P.current.transitionDuration,e.style.animationName=P.current.animationName),f(a)}},[u.open,a]),(0,p.jsx)(c.sG.div,{"data-state":b(u.open),"data-disabled":u.disabled?"":void 0,id:u.contentId,hidden:!I,...o,ref:g,style:{"--radix-collapsible-content-height":y?`${y}px`:void 0,"--radix-collapsible-content-width":A?`${A}px`:void 0,...e.style},children:I&&i})});function b(e){return e?"open":"closed"}var P=y,$=A,k=I},161330:(e,t,r)=>{r.d(t,{I:()=>u});var n=r(610435),a=r(91958),i=r.n(a),o=r(79570),l=r(497895),s=r(201828);let c=i()(e=>({color:e.colors.textSecondary})),u=({content:e,iconTitle:t="More information",...r})=>{let{theme:a}=(0,l.wn)();return(0,n.Y)(o.m,{content:e,...r,children:(0,n.Y)(s.A,{tabIndex:0,"aria-hidden":"false","aria-label":t,alt:t,css:c(a)})})}},325382:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(610435),a=r(692738),i=r(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.FD)("g",{fill:"currentColor",clipPath:"url(#FolderCloudIcon_svg__a)",children:[(0,n.Y)("path",{d:"M.75 2a.75.75 0 0 0-.75.75v10.5c0 .414.336.75.75.75H3v-1.5H1.5v-9h3.172c.331 0 .649.132.883.366L6.97 5.28c.14.141.331.22.53.22h7V8H16V4.75a.75.75 0 0 0-.75-.75H7.81L6.617 2.805A2.75 2.75 0 0 0 4.672 2z"}),(0,n.Y)("path",{fillRule:"evenodd",d:"M10.179 7a3.61 3.61 0 0 0-3.464 2.595 3.251 3.251 0 0 0 .443 6.387.8.8 0 0 0 .163.018h5.821C14.758 16 16 14.688 16 13.107c0-1.368-.931-2.535-2.229-2.824A3.61 3.61 0 0 0 10.18 7m-2.805 7.496q.023 0 .044.004h5.555a1 1 0 0 1 .1-.002l.07.002c.753 0 1.357-.607 1.357-1.393s-.604-1.393-1.357-1.393h-.107a.75.75 0 0 1-.75-.75v-.357a2.107 2.107 0 0 0-4.199-.26.75.75 0 0 1-.698.656 1.75 1.75 0 0 0-.015 3.493",clipRule:"evenodd"})]}),(0,n.Y)("defs",{children:(0,n.Y)("clipPath",{children:(0,n.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let l=(0,a.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));l.displayName="FolderCloudIcon";let s=l},342145:(e,t,r)=>{r.d(t,{$y:()=>d,B_:()=>C,FQ:()=>g,OD:()=>l,T4:()=>o,U1:()=>v,UX:()=>f,Yu:()=>y,bB:()=>i,cC:()=>m,k0:()=>a,nU:()=>c,sO:()=>A,sh:()=>u,wp:()=>s,xY:()=>p,xe:()=>w,zD:()=>h});var n=r(141078);let a=(0,n.J1)`
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
`,l=(0,n.J1)`
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
`,s=(0,n.J1)`
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
`,c=(0,n.J1)`
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
`,u=(0,n.J1)`
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
`,d=(0,n.J1)`
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
`,m=(0,n.J1)`
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
`,v=(0,n.J1)`
  query getAccountUsersCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountUsersCount {
      totalCount
    }
  }
`,h=(0,n.J1)`
  query getAccountServicePrincipalsCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountServicePrincipalsCount {
      totalCount
    }
  }
`,y=(0,n.J1)`
  query getAccountGroupsCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountGroupsCount {
      totalCount
    }
  }
`,w=(0,n.J1)`
  query getWorkspaceUsersCount($shouldGetDirectlyAssignedOnly: Boolean) @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceUsersCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`,A=(0,n.J1)`
  query getWorkspaceServicePrincipalsCount($shouldGetDirectlyAssignedOnly: Boolean)
  @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceServicePrincipalsCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`,C=(0,n.J1)`
  query getWorkspaceGroupsCount($shouldGetDirectlyAssignedOnly: Boolean) @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceGroupsCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`},352185:(e,t,r)=>{r.d(t,{A6:()=>A,Ds:()=>p,FI:()=>d,I7:()=>u,m1:()=>c});var n,a,i,o=r(446835),l=r.n(o),s=r(978679),c=((n={}).CONFIGURATION="configuration",n.NOTEBOOKS="notebooks",n.LIBRARIES="libraries",n.SPARK_UI="sparkUi",n.DRIVER_LOGS="driverLogs",n.METRICS="metrics",n.SPARK_CLUSTER_UI="sparkClusterUi",n.APPS="apps",n.EVENTS="events",n);let u="/compute";var d=((a={}).InteractiveListPage="interactive",a.AutomatedListPage="automated",a.SqlWarehouses="sql-warehouses",a.BrickIndex="vector-search",a.BrickStore="online-stores",a.DatabaseInstances="database-instances",a.InstancePools="instance-pools",a.ClusterPolicies="policies",a.LakehouseApps="apps",a.GpuPools="gpu-pools",a.Serverless="serverless",a),p=((i={}).New="new",i.Edit="edit",i);let f=function e(...t){let r=RegExp("(^/*)|(/*$)","g"),n=l()(t).map(e=>e.trim().replace(r,"")).join("/"),a=n?`/${n}`:"",i=t=>t?e(a,t)():a;return i.append=(...t)=>e(a,...t),i}(u),m=f.append("instance-pools"),g=f.append("policies"),v=f.append("sparkui"),h=f.append("clusters"),y=f.append("database-instances");function w(e){return["driver",e].filter(s.zz).join("-")}let A={clusterMainPage:e=>f(e),sqlWarehouse:{create:()=>f.append("sql-warehouses")("new")},brickStore:{list:()=>A.clusterMainPage("online-stores"),view:e=>f.append("online-stores")(e)},databaseInstances:{list:()=>A.clusterMainPage("database-instances"),view:e=>y(e),edit:e=>y.append(e)("edit")},cluster:{view(e,t,r){let n=h.append(e);if(!t||"configuration"===t)return n();if("driverLogs"===t)return n("driver-logs");if("sparkUi"===t)return n("spark-ui");if("sparkClusterUi"===t)return n.append("spark-compute-ui")(("MASTER"===r?"master":r)??"master");return n(t)},edit:e=>h.append(e)("edit"),new:(e={})=>{let t="policyId"in e?`?policyId=${e.policyId}`:"",r="clone"in e?`?clone=${e.clone}`:"";return h.append("new")(r||t)}},sparkUi:{driverUi:(e,t)=>v.append(e)(`driver${t?`-${t}`:""}`),logs:(e,t)=>{let r=v.append(e)("driver-logs");if(!t?.jobId&&!t?.runId)return r;let n=new URLSearchParams;return t.jobId&&n.set("jobId",String(t.jobId)),t.runId&&n.set("runId",String(t.runId)),`${r}?${n}`},uiWithPath:e=>v.append(e)(),metrics:e=>v.append(e)("metrics"),stage:(e,t,r,n)=>v.append(e,w(t))(`stages/stage?id=${r}&attempt=0${void 0!==n?"&o="+n:""}`),job:(e,t,r,n)=>v.append(e,w(t))(`jobs/job?id=${r}${void 0!==n?"&o="+n:""}`)},brickIndex:{list:()=>A.clusterMainPage("vector-search"),view:e=>f.append("vector-search")(e)},policy:{view:e=>g(e),create:()=>g("new"),clone:e=>A.policy.create()+`?clone=${e}`,edit:e=>g.append(e)("edit")},pool:{view:e=>m(e),create:()=>m("new"),edit:e=>m.append(e)("edit")}}},397136:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(610435),a=r(692738),i=r(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M3 1.75A.75.75 0 0 1 3.75 1h10.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V12.5H1V11h2V8.75H1v-1.5h2V5H1V3.5h2zm1.5.75v11H6v-11zm3 0v11h6v-11z",clipRule:"evenodd"})})}let l=(0,a.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));l.displayName="NotebookIcon";let s=l},400136:(e,t,r)=>{r.d(t,{A:()=>A});var n=r(513384),a=r(657709),i=r(378003),o=r(692738),l=r(783772),s=r.n(l);let c=function(e){var t=e.prefixCls,r=e.className,n=e.width,i=e.style;return o.createElement("h3",{className:s()(t,r),style:(0,a.A)({width:n},i)})};var u=r(535881);let d=function(e){var t=function(t){var r=e.width,n=e.rows;if(Array.isArray(r))return r[t];if((void 0===n?2:n)-1===t)return r},r=e.prefixCls,n=e.className,a=e.style,i=e.rows,l=(0,u.A)(Array(i)).map(function(e,r){return o.createElement("li",{key:r,style:{width:t(r)}})});return o.createElement("ul",{className:s()(r,n),style:a},l)};var p=r(513266);let f=function(e){var t,r,i=e.prefixCls,l=e.className,c=e.style,u=e.size,d=e.shape,p=s()((t={},(0,n.A)(t,"".concat(i,"-lg"),"large"===u),(0,n.A)(t,"".concat(i,"-sm"),"small"===u),t)),f=s()((r={},(0,n.A)(r,"".concat(i,"-circle"),"circle"===d),(0,n.A)(r,"".concat(i,"-square"),"square"===d),(0,n.A)(r,"".concat(i,"-round"),"round"===d),r));return o.createElement("span",{className:s()(i,p,f,l),style:(0,a.A)((0,a.A)({},"number"==typeof u?{width:u,height:u,lineHeight:"".concat(u,"px")}:{}),c)})};var m=r(97787),g=function(e){return o.createElement(p.TG,null,function(t){var r=t.getPrefixCls,i=e.prefixCls,l=e.className,c=e.active,u=r("skeleton",i),d=(0,m.A)(e,["prefixCls"]),p=s()(u,"".concat(u,"-element"),(0,n.A)({},"".concat(u,"-active"),c),l);return o.createElement("div",{className:p},o.createElement(f,(0,a.A)({prefixCls:"".concat(u,"-avatar")},d)))})};g.defaultProps={size:"default",shape:"circle"};var v=function(e){return o.createElement(p.TG,null,function(t){var r=t.getPrefixCls,i=e.prefixCls,l=e.className,c=e.active,u=r("skeleton",i),d=(0,m.A)(e,["prefixCls"]),p=s()(u,"".concat(u,"-element"),(0,n.A)({},"".concat(u,"-active"),c),l);return o.createElement("div",{className:p},o.createElement(f,(0,a.A)({prefixCls:"".concat(u,"-button")},d)))})};v.defaultProps={size:"default"};var h=function(e){return o.createElement(p.TG,null,function(t){var r=t.getPrefixCls,i=e.prefixCls,l=e.className,c=e.active,u=r("skeleton",i),d=(0,m.A)(e,["prefixCls"]),p=s()(u,"".concat(u,"-element"),(0,n.A)({},"".concat(u,"-active"),c),l);return o.createElement("div",{className:p},o.createElement(f,(0,a.A)({prefixCls:"".concat(u,"-input")},d)))})};function y(e){if(e&&"object"===(0,i.A)(e))return e;return{}}h.defaultProps={size:"default"};var w=function(e){return o.createElement(p.TG,null,function(t){var r=t.getPrefixCls,i=t.direction,l=e.prefixCls,u=e.loading,p=e.className,m=e.children,g=e.avatar,v=e.title,h=e.paragraph,w=e.active,A=e.round,C=r("skeleton",l);if(u||!("loading"in e)){var I=!!g,x=!!v,b=!!h;if(I){var P=(0,a.A)((0,a.A)({prefixCls:"".concat(C,"-avatar")},function(e,t){if(e&&!t)return{size:"large",shape:"square"};return{size:"large",shape:"circle"}}(x,b)),y(g));k=o.createElement("div",{className:"".concat(C,"-header")},o.createElement(f,P))}if(x||b){if(x){var $,k,S,R,E,_=(0,a.A)((0,a.A)({prefixCls:"".concat(C,"-title")},function(e,t){if(!e&&t)return{width:"38%"};if(e&&t)return{width:"50%"};return{}}(I,b)),y(v));R=o.createElement(c,_)}if(b){var M,N=(0,a.A)((0,a.A)({prefixCls:"".concat(C,"-paragraph")},(M={},I&&x||(M.width="61%"),!I&&x?M.rows=3:M.rows=2,M)),y(h));E=o.createElement(d,N)}S=o.createElement("div",{className:"".concat(C,"-content")},R,E)}var Y=s()(C,($={},(0,n.A)($,"".concat(C,"-with-avatar"),I),(0,n.A)($,"".concat(C,"-active"),w),(0,n.A)($,"".concat(C,"-rtl"),"rtl"===i),(0,n.A)($,"".concat(C,"-round"),A),$),p);return o.createElement("div",{className:Y},k,S)}return m})};w.defaultProps={avatar:!1,title:!0,paragraph:!0},w.Button=v,w.Avatar=g,w.Input=h,w.Image=function(e){return o.createElement(p.TG,null,function(t){var r=t.getPrefixCls,n=e.prefixCls,a=e.className,i=e.style,l=r("skeleton",n),c=s()(l,"".concat(l,"-element"),a);return o.createElement("div",{className:c},o.createElement("div",{className:s()("".concat(l,"-image"),a),style:i},o.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(l,"-image-svg")},o.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(l,"-image-path")}))))})};let A=w},402720:(e,t,r)=>{let n;r.d(t,{P:()=>c});var a=r(610435),i=r(400136),o=r(591333),l=r(429608),s=r(866370);let c=((n=({dangerouslySetAntdProps:e,label:t,loadingDescription:r="LegacySkeleton",...n})=>{let c=n.loading??!0;return(0,a.Y)(l.wC,{children:(0,a.FD)(o.U,{label:t,children:[c&&(0,a.Y)(s.G,{description:r}),(0,a.Y)(i.A,{...n,...e})]})})}).Button=i.A.Button,n.Image=i.A.Image,n.Input=i.A.Input,n)},466213:(e,t,r)=>{r.d(t,{YQ:()=>a,d7:()=>o,dh:()=>l});var n=r(692738);function a(e,t,r){var a=this,i=(0,n.useRef)(null),o=(0,n.useRef)(0),l=(0,n.useRef)(null),s=(0,n.useRef)([]),c=(0,n.useRef)(),u=(0,n.useRef)(),d=(0,n.useRef)(e),p=(0,n.useRef)(!0);d.current=e;var f="u">typeof window,m=!t&&0!==t&&f;if("function"!=typeof e)throw TypeError("Expected a function");t=+t||0;var g=!!(r=r||{}).leading,v=!("trailing"in r)||!!r.trailing,h="maxWait"in r,y="debounceOnServer"in r&&!!r.debounceOnServer,w=h?Math.max(+r.maxWait||0,t):null;return(0,n.useEffect)(function(){return p.current=!0,function(){p.current=!1}},[]),(0,n.useMemo)(function(){var e=function(e){var t=s.current,r=c.current;return s.current=c.current=null,o.current=e,u.current=d.current.apply(r,t)},r=function(e,t){m&&cancelAnimationFrame(l.current),l.current=m?requestAnimationFrame(e):setTimeout(e,t)},n=function(e){if(!p.current)return!1;var r=e-i.current;return!i.current||r>=t||r<0||h&&e-o.current>=w},A=function(t){return l.current=null,v&&s.current?e(t):(s.current=c.current=null,u.current)},C=function e(){var a=Date.now();if(n(a))return A(a);if(p.current){var l=t-(a-i.current);r(e,h?Math.min(l,w-(a-o.current)):l)}},I=function(){if(f||y){var d=Date.now(),m=n(d);if(s.current=[].slice.call(arguments),c.current=a,i.current=d,m){if(!l.current&&p.current)return o.current=i.current,r(C,t),g?e(i.current):u.current;if(h)return r(C,t),e(i.current)}return l.current||r(C,t),u.current}};return I.cancel=function(){l.current&&(m?cancelAnimationFrame(l.current):clearTimeout(l.current)),o.current=0,s.current=i.current=c.current=l.current=null},I.isPending=function(){return!!l.current},I.flush=function(){return l.current?A(Date.now()):u.current},I},[g,h,t,w,v,m,f,y])}function i(e,t){return e===t}function o(e,t,r){var o=r&&r.equalityFn||i,l=(0,n.useRef)(e),s=(0,n.useState)({})[1],c=a((0,n.useCallback)(function(e){l.current=e,s({})},[s]),t,r),u=(0,n.useRef)(e);return o(u.current,e)||(c(e),u.current=e),[l.current,c]}function l(e,t,r){var n=void 0===r?{}:r,i=n.leading,o=n.trailing;return a(e,t,{maxWait:t,leading:void 0===i||i,trailing:void 0===o||o})}},505544:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(610435),a=r(692738),i=r(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.727 3.695c-.225.192-.227.298-.227.305s.002.113.227.305c.223.19.59.394 1.108.58C4.865 5.256 6.337 5.5 8 5.5s3.135-.244 4.165-.615c.519-.186.885-.39 1.108-.58.225-.192.227-.298.227-.305s-.002-.113-.227-.305c-.223-.19-.59-.394-1.108-.58C11.135 2.744 9.663 2.5 8 2.5s-3.135.244-4.165.615c-.519.186-.885.39-1.108.58M13.5 5.94a7 7 0 0 1-.826.358C11.442 6.74 9.789 7 8 7s-3.442-.26-4.673-.703a7 7 0 0 1-.827-.358V8c0 .007.002.113.227.305.223.19.59.394 1.108.58C4.865 9.256 6.337 9.5 8 9.5s3.135-.244 4.165-.615c.519-.186.885-.39 1.108-.58.225-.192.227-.298.227-.305zM15 8V4c0-.615-.348-1.1-.755-1.447-.41-.349-.959-.63-1.571-.85C11.442 1.26 9.789 1 8 1s-3.442.26-4.673.703c-.613.22-1.162.501-1.572.85C1.348 2.9 1 3.385 1 4v8c0 .615.348 1.1.755 1.447.41.349.959.63 1.572.85C4.558 14.74 6.21 15 8 15s3.441-.26 4.674-.703c.612-.22 1.161-.501 1.571-.85.407-.346.755-.832.755-1.447zm-1.5 1.939a7 7 0 0 1-.826.358C11.442 10.74 9.789 11 8 11s-3.442-.26-4.673-.703a7 7 0 0 1-.827-.358V12c0 .007.002.113.227.305.223.19.59.394 1.108.58 1.03.371 2.502.615 4.165.615s3.135-.244 4.165-.615c.519-.186.885-.39 1.108-.58.225-.192.227-.298.227-.305z",clipRule:"evenodd"})})}let l=(0,a.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));l.displayName="DatabaseIcon";let s=l},532744:(e,t,r)=>{r.d(t,{b:()=>c,l:()=>s});var n=r(657709),a=r(692738),i=r(667559),o=r(338557),l=r(858893);let s=(0,a.forwardRef)((e,t)=>{let{pressed:r,defaultPressed:s=!1,onPressedChange:c,...u}=e,[d=!1,p]=(0,o.i)({prop:r,onChange:c,defaultProp:s});return(0,a.createElement)(l.sG.button,(0,n.A)({type:"button","aria-pressed":d,"data-state":d?"on":"off","data-disabled":e.disabled?"":void 0},u,{ref:t,onClick:(0,i.m)(e.onClick,()=>{e.disabled||p(!d)})}))}),c=s},563521:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(610435),a=r(692738),i=r(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1 1.75A.75.75 0 0 1 1.75 1h12.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75zm1.5 8.75v3h4.75v-3zm0-1.5h4.75V2.5H2.5zm6.25-6.5v3h4.75v-3zm0 11V7h4.75v6.5z",clipRule:"evenodd"})})}let l=(0,a.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));l.displayName="DashboardIcon";let s=l},583971:(e,t,r)=>{r.d(t,{Ri:()=>d});var n=r(733337),a=r(641760),i=r(278983);function o(e,t,r,n,a,i,o){try{var l=e[i](o),s=l.value}catch(e){r(e);return}l.done?t(s):Promise.resolve(s).then(n,a)}function l(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var i=e.apply(t,r);function l(e){o(i,n,a,l,s,"next",e)}function s(e){o(i,n,a,l,s,"throw",e)}l(void 0)})}}let s=[1,1,2,3,5,8,13,21],c=s.length;function u(e){return e instanceof a.XD}function d(e,t){return l(function*(e,t,r=1e3){let a=0,o=null;for(;a<c;)try{return yield(0,n.nr)(e,t)}catch(e){if(o=e,u(e)&&function(e){if(!u(e))return!1;return 429===e.response.status}(e))(0,i.y)("clientsideEvent",{eventType:"ApiFetchRetry",eventName:"RetryAttempt",retryCount:a}),yield function(e){return l(function*(e,t=1e3){let r=function(e,t=1e3){let r=Math.min(e,s.length-1);return s[r]*t}(e,t);return new Promise(e=>setTimeout(e,r))}).apply(this,arguments)}(a,r),a++;else break}throw u(o)&&a===c&&(0,i.y)("clientsideEvent",{eventType:"ApiFetchRetry",eventName:"MaxRetryAttemptReached",errorCode:o?.response?.status,retryCount:a}),o}).apply(this,arguments)}},611824:(e,t,r)=>{r.d(t,{_:()=>a});var n=r(441535);function a(){return(0,n.W)("enable_gov_tag",null)??(0,n.W)("databricks.fe.uc.enableGovTag",!1)}},615693:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(610435),a=r(692738),i=r(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1 1.75A.75.75 0 0 1 1.75 1h12.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75zm1.5.75v3h11v-3zm0 11V7H5v6.5zm4 0h3V7h-3zM11 7v6.5h2.5V7z",clipRule:"evenodd"})})}let l=(0,a.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));l.displayName="TableIcon";let s=l},673655:(e,t,r)=>{r.d(t,{A:()=>n});let n=r(569089).A},733337:(e,t,r)=>{r.d(t,{Ky:()=>u,Ur:()=>d,nr:()=>c});var n=r(583971),a=r(641760),i=r(441535),o=r(19123);function l(e,t,r,n,a,i,o){try{var l=e[i](o),s=l.value}catch(e){r(e);return}l.done?t(s):Promise.resolve(s).then(n,a)}function s(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var i=e.apply(t,r);function o(e){l(i,n,a,o,s,"next",e)}function s(e){l(i,n,a,o,s,"throw",e)}o(void 0)})}}function c(e,t){return s(function*(){let r=yield(0,o.h)(e,t);if(!r.ok){let t;try{t=yield r.json()}catch(e){}throw new a.XD(e,r,t)}return yield r.json()})()}function u(e,t,r,a,o){return s(function*(){let l,s={response:[],next_page_token:void 0},c=(0,i.W)("databricks.fe.uc.defaultPaginationWindowSize",0),u=void 0!==a?a:c;do{let a=r?.useCentralPagination?{"pagination_context.max_results":u,...r?.queryParameters}:{[o??"max_results"]:u,...r?.queryParameters};l&&(r?.useCentralPagination?a["pagination_context.page_token"]=l:a.page_token=l);let i=new URLSearchParams(a),c=`${e}?${i}`;try{let e=yield(0,n.Ri)(c,r);if(!e)break;let a=yield t(e);a&&s.response.push(...a),r?.useCentralPagination?(s.next_page_token=e.pagination?.next_page_token,l=e.pagination?.next_page_token):(s.next_page_token=e.next_page_token,l=e.next_page_token)}catch(e){throw e}}while(l);return s.response})()}function d(e){return e instanceof a.XD&&404===e.response.status&&"METASTORE_DOES_NOT_EXIST"===e.response.data.error_code}},802582:(e,t,r)=>{r.d(t,{p:()=>w});var n=r(610435),a=r(956935),i=r(889486),o=r(778529),l=r.n(o),s=r(91958),c=r.n(s),u=r(692738),d=r(429608),p=r(497895),f=r(639712),m=r(863802);let g=["hover","focus"],v=c()(e=>({backgroundColor:"#2F3941",lineHeight:"22px",padding:"4px 8px",boxShadow:e.general.shadowLow,...(0,f.WO)(e)})),h=c()(e=>({zIndex:e.options.zIndexBase+70}),e=>String(e.options.zIndexBase)),y=c()(e=>(0,a.AH)({...(0,d.Cx)(e)})),w=({children:e,title:t,placement:r="top",dataTestId:a,dangerouslySetAntdProps:o,silenceScreenReader:s=!1,useAsLabel:c=!1,...w})=>{let{theme:A}=(0,p.wn)(),C=(0,u.useRef)(null),I=(0,m.Y)("dubois-tooltip-component-"),x=o?.id?o?.id:I;if(!t)return(0,n.Y)(u.Fragment,{children:e});let b=s?{}:{"aria-live":"polite","aria-relevant":"additions"};a&&(b["data-testid"]=a);let P=t&&u.isValidElement(t)?u.cloneElement(t,b):(0,n.Y)("span",{...b,children:t}),$={"aria-hidden":!1},k=e=>{if(!C.current||e.currentTarget.hasAttribute("aria-describedby")||e.currentTarget.hasAttribute("aria-labelledby"))return;x&&(e.currentTarget.setAttribute("aria-live","polite"),c?e.currentTarget.setAttribute("aria-labelledby",x):e.currentTarget.setAttribute("aria-describedby",x))},S=e=>{if(!C||!e.currentTarget.hasAttribute("aria-describedby")&&!e.currentTarget.hasAttribute("aria-labelledby"))return;c?e.currentTarget.removeAttribute("aria-labelledby"):e.currentTarget.removeAttribute("aria-describedby"),e.currentTarget.removeAttribute("aria-live")},R={onMouseEnter:e=>{k(e)},onMouseLeave:e=>{S(e)},onFocus:e=>{k(e)},onBlur:e=>{S(e)}},E=u.isValidElement(e)?u.cloneElement(e,{...$,...R,...e.props}):l()(e)?e:(0,n.Y)("span",{...$,...R,children:e}),{overlayInnerStyle:_,overlayStyle:M,...N}=o||{},Y=_?{backgroundColor:"#2F3941",lineHeight:"22px",padding:"4px 8px",boxShadow:A.general.shadowLow,..._,...(0,f.WO)(A)}:v(A),T=M?{zIndex:A.options.zIndexBase+70,...M}:h(A);return(0,n.Y)(d.wC,{children:(0,n.Y)(i.A,{id:x,ref:C,title:P,placement:r,trigger:g,overlayInnerStyle:Y,overlayStyle:T,css:y(A.options.enableAnimation),...N,...w,children:E})})}},820648:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(610435),a=r(692738),i=r(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M14 .75a.75.75 0 0 0-.75-.75H4.5A2.5 2.5 0 0 0 2 2.5v10.75A2.75 2.75 0 0 0 4.75 16h8.5a.75.75 0 0 0 .75-.75zM3.5 4.792v8.458c0 .69.56 1.25 1.25 1.25h7.75V5h-8c-.356 0-.694-.074-1-.208m9-1.292v-2h-8a1 1 0 0 0 0 2z",clipRule:"evenodd"})})}let l=(0,a.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));l.displayName="CatalogIcon";let s=l},823825:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(610435),a=r(692738),i=r(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("g",{clipPath:"url(#ModelsIcon_svg__a)",children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M0 4.75a2.75 2.75 0 0 1 5.145-1.353l4.372-.95a2.75 2.75 0 1 1 3.835 2.823l.282 2.257a2.75 2.75 0 1 1-2.517 4.46l-2.62 1.145.003.118a2.75 2.75 0 1 1-4.415-2.19L3.013 7.489A2.75 2.75 0 0 1 0 4.75M2.75 3.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m2.715 1.688q.027-.164.033-.333l4.266-.928a2.75 2.75 0 0 0 2.102 1.546l.282 2.257c-.377.165-.71.412-.976.719zM4.828 6.55a2.8 2.8 0 0 1-.413.388l1.072 3.573q.13-.012.263-.012c.945 0 1.778.476 2.273 1.202l2.5-1.093a2.8 2.8 0 0 1 .012-.797zM12 10.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M5.75 12a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M11 2.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0",clipRule:"evenodd"})}),(0,n.Y)("defs",{children:(0,n.Y)("clipPath",{children:(0,n.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let l=(0,a.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));l.displayName="ModelsIcon";let s=l},834343:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(610435),a=r(692738),i=r(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("g",{clipPath:"url(#SearchIcon_svg__a)",children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a7 7 0 1 0 4.39 12.453l2.55 2.55 1.06-1.06-2.55-2.55A7 7 0 0 0 8 1M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0",clipRule:"evenodd"})}),(0,n.Y)("defs",{children:(0,n.Y)("clipPath",{children:(0,n.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let l=(0,a.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));l.displayName="SearchIcon";let s=l},848737:(e,t,r)=>{r.d(t,{d:()=>m});var n=r(610435),a=r(692738),i=r(545251),o=r(305404),l=r(994796),s=r(497895),c=r(834343),u=r(407374),d=r(469490),p=r(569546);let f=e=>{if("string"==typeof e||"number"==typeof e)return e.toString();if(a.isValidElement(e)&&e.props.children)return a.Children.toArray(e.props.children).map(f).join(" ");return""},m=(0,a.forwardRef)(({onChange:e,onSearch:t,virtualized:r,children:m,hasWrapper:g,controlledValue:v,setControlledValue:h,rightSearchControls:y,...w},A)=>{let{theme:C}=(0,s.wn)(),{componentId:I}=(0,i.w)(),{isInsideDialogComboboxOptionList:x}=(0,o.r)(),b=`no-result-${(0,p.B)()}`,P=(0,a.useRef)(null);(0,a.useImperativeHandle)(A,()=>P.current);let[$,k]=a.useState();if(!x)throw Error("`DialogComboboxOptionListSearch` must be used within `DialogComboboxOptionList`");let S=m;if($&&!r&&void 0===v){var R;let e;R=g?m.props.children:m,e=$.toLowerCase(),S=a.Children.map(R,t=>{if(a.isValidElement(t)){let r=t.props.__EMOTION_TYPE_PLEASE_DO_NOT_USE__?.defaultProps._TYPE??t.props._TYPE;if("DialogComboboxOptionListSelectItem"===r||"DialogComboboxOptionListCheckboxItem"===r){let r=f(t).toLowerCase(),n=t.props.value?.toLowerCase()??"";return r.includes(e)||n.includes(e)?t:null}}return t})?.filter(e=>e),g&&(S=a.cloneElement(m,{},S))}let E=(0,a.useRef)(null);(0,a.useEffect)(()=>{if(!E.current)return;let e=(0,l.aV)(E.current);if(e){let t=(0,l.kQ)(e),r=e?.[0];r&&(0,l.ed)(r,t,!1)}},[$]);let _=a.Children.toArray(g?m.props.children:m).some(e=>a.isValidElement(e)),M=g&&S?.props.children?.length||!g&&S?.length;return(0,a.useEffect)(()=>{M||P.current?.input?.setAttribute("aria-activedescendant",b)},[M,b,P.current?.input?.value]),(0,n.FD)(n.FK,{children:[(0,n.Y)("div",{ref:E,css:{padding:`${C.spacing.sm}px ${C.spacing.lg/2}px ${C.spacing.sm}px`,width:"100%",boxSizing:"border-box",position:"sticky",top:0,background:C.colors.backgroundPrimary,zIndex:C.options.zIndexBase+1},children:(0,n.FD)("div",{css:{display:"flex",flexDirection:"row",gap:C.spacing.sm},children:[(0,n.Y)(u.p,{componentId:I?`${I}.search`:"codegen_design_system_src_design_system_dialogcombobox_dialogcomboboxoptionlistsearch.tsx_173",type:"search",name:"search",ref:P,prefix:(0,n.Y)(c.A,{}),placeholder:"Search",onChange:e=>{r||k(e.target.value),h?.(e.target.value),t?.(e.target.value)},onKeyDown:e=>{(e=>{if("ArrowDown"!==e.key&&"ArrowUp"!==e.key&&"Enter"!==e.key)return;e.preventDefault();let t=(0,l.aV)(e.target);if(!t)return;let r=(0,l.kQ)(t);if("ArrowDown"===e.key||"ArrowUp"===e.key)if(r){let n=(0,l.oS)(r,"ArrowDown"===e.key?"next":"previous");if(n)(0,l.ed)(n,r,!1);else if("ArrowDown"===e.key){let e=t[0];(0,l.ed)(e,r,!1)}else if("ArrowUp"===e.key){let e=t[t.length-1];(0,l.ed)(e,r,!1)}}else{let r="ArrowDown"===e.key?t[0]:t[t.length-1];r&&(0,l.ed)(r,void 0,!1)}else"Enter"===e.key&&r&&r.click()})(e),w.onKeyDown?.(e)},value:v??$,shouldPreventFormSubmission:!0,...w}),y]})}),r?m:M&&_?(0,n.Y)("div",{"aria-live":"polite",css:{width:"100%"},children:S}):(0,n.Y)(d.i,{id:b})]})})},906169:(e,t,r)=>{r.d(t,{A:()=>n});let n=r(712975).A},946590:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(610435),a=r(692738),i=r(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M0 2.75A.75.75 0 0 1 .75 2H8v1.5H1.5v9h13V10H16v3.25a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1-.75-.75zm12.987-.14a.75.75 0 0 0-1.474 0l-.137.728a1.93 1.93 0 0 1-1.538 1.538l-.727.137a.75.75 0 0 0 0 1.474l.727.137c.78.147 1.39.758 1.538 1.538l.137.727a.75.75 0 0 0 1.474 0l.137-.727c.147-.78.758-1.39 1.538-1.538l.727-.137a.75.75 0 0 0 0-1.474l-.727-.137a1.93 1.93 0 0 1-1.538-1.538z",clipRule:"evenodd"})})}let l=(0,a.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));l.displayName="SparkleRectangleIcon";let s=l}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/96712.e12a2c141d.chunk.js.map