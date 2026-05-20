"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[21822],{49586:(e,r,t)=>{t.d(r,{Fi:()=>u,J9:()=>l,Qm:()=>f,g$:()=>p,si:()=>m,yS:()=>d,zJ:()=>c,zo:()=>g});var a=t(692738),n=t(141078),o=t(342145),i=t(209908),s=t(441535);let l=(e,r)=>{if(r)return r;let t=(0,i.IW)(e);if(!t)return;if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t))return`email:"${t}"`;return`email:"${t}" OR fullname:"${t}"`},c=({skip:e=!1,first:r,after:t,filter:a,filterPredicate:i,filterAdmin:c,options:u={}})=>{let d=(0,s.W)("databricks.fe.accountsui.enableAccountAdminFilter",!1),f={first:r,after:t,filter:l(a,i),filterAdmin:d&&null!=c?c:void 0};return(0,n.IT)(o.sh,{skip:e,variables:f,fetchPolicy:"no-cache",notifyOnNetworkStatusChange:!0,...u})},u=({skip:e=!1,first:r,after:t,filter:a,filterPredicate:i,options:s={}})=>(0,n.IT)(o.$y,{skip:e,variables:{first:r,after:t,filter:l(a,i)},fetchPolicy:"no-cache",notifyOnNetworkStatusChange:!0,...s}),d=({skip:e=!1})=>(0,n.IT)(o.U1,{skip:e,fetchPolicy:"no-cache",notifyOnNetworkStatusChange:!0}),f=({skip:e=!1,email:r,id:t,options:s={}})=>{let l=(0,i.IW)(r),c=(0,i.IW)(t),{data:u,loading:d,error:f,refetch:p}=(0,n.IT)(o.k0,{skip:e||!l&&!c,variables:{after:void 0,first:2,filter:l?`email="${l}"`:`id=${c}`},...s}),g=(0,a.useMemo)(()=>u?.allWorkspaceUsers?.users||[],[u]),m=1===g.length,h=d||m?null:0===g.length?"No matching user found":"Multiple matching users found",v=(0,a.useMemo)(()=>{let e=g[0];return e?(0,i.Db)([e],"workspace")[0]:null},[g]);return{refetch:p,user:m?v:null,isLoading:d,error:f?.message??h}},p=({skip:e=!1,email:r,id:t})=>{let s=(0,i.IW)(r),l=(0,i.IW)(t),{data:c,loading:u,error:d}=(0,n.IT)(o.sh,{skip:e||!s&&!l,variables:{after:void 0,first:2,filter:s?`email="${s}"`:`id=${l}`}}),f=(0,a.useMemo)(()=>c?.allAccountUsers?.users||[],[c]),p=1===f.length,g=u||p?null:0===f.length?"No matching user found":"Multiple matching users found",m=(0,a.useMemo)(()=>{let e=f[0];return e?(0,i.Db)([e],"account")[0]:null},[f]);return{user:p?m:null,isLoading:u,error:d?.message??g}},g=({source:e="workspace",...r})=>{let t=(({source:e,isCache:r,useLite:t,...s})=>{let{data:c,loading:u,error:d}=(({skip:e=!1,first:r,after:t,filter:a,filterPredicate:i,options:s={}})=>(0,n.IT)(o.k0,{skip:e,variables:{first:r,after:t,filter:l(a,i)},fetchPolicy:"no-cache",notifyOnNetworkStatusChange:!0,...s}))({...s,skip:"workspace"!==e||s.skip||t,options:r?{fetchPolicy:"cache-first"}:void 0}),{data:f,loading:p,error:g}=(({skip:e=!1,first:r,after:t,filter:a,filterPredicate:i,options:s={}})=>(0,n.IT)(o.bB,{skip:e,variables:{first:r,after:t,filter:l(a,i)},fetchPolicy:"no-cache",notifyOnNetworkStatusChange:!0,...s}))({...s,skip:"workspace"!==e||s.skip||!t,options:r?{fetchPolicy:"cache-first"}:void 0}),m=(0,a.useMemo)(()=>({data:t?f:c,loading:t?p:u,error:t?g:d}),[t,d,g,p,u,c,f]);return{subjects:(0,a.useMemo)(()=>(0,i.Db)(m.data?.allWorkspaceUsers?.users||[],"workspace"),[m]),isLoading:m.loading,error:m.error?.message??null,hasNextPage:m.data?.allWorkspaceUsers?.pageInfo?.hasNextPage}})({...r,source:e}),s=(({source:e,isCache:r,useLite:t,...n})=>{let{data:o,loading:s,error:l}=c({...n,skip:"account"!==e||n.skip||t,options:r?{fetchPolicy:"cache-first"}:void 0}),{data:d,loading:f,error:p}=u({...n,skip:"account"!==e||n.skip||!t,options:r?{fetchPolicy:"cache-first"}:void 0}),g=(0,a.useMemo)(()=>({data:t?d:o,loading:t?f:s,error:t?p:l}),[l,p,f,s,o,d,t]);return{subjects:(0,a.useMemo)(()=>(0,i.Db)(g.data?.allAccountUsers?.users||[],"account"),[g]),isLoading:g.loading,error:g.error?.message??null,hasNextPage:g.data?.allAccountUsers?.pageInfo?.hasNextPage}})({...r,source:e});switch(e){case"account":return s;case"workspace":return t;default:return{subjects:[],isLoading:!1,error:null,hasNextPage:!1}}},m=({skip:e=!1,shouldGetDirectlyAssignedOnly:r=!1})=>(0,n.IT)(o.xe,{skip:e,variables:{shouldGetDirectlyAssignedOnly:r},fetchPolicy:"no-cache"})},63707:(e,r,t)=>{t.d(r,{Bo:()=>a.B,TY:()=>n.T,Rt:()=>P.R,gw:()=>k.g,wc:()=>I.w,hN:()=>y.h,of:()=>d.o,HG:()=>i.H,ay:()=>l.a,Aj:()=>s.A,ex:()=>u.e,CQ:()=>$.C,d1:()=>w.d,Oe:()=>b.O,MD:()=>C.M,m7:()=>N.m,_F:()=>S._,yO:()=>o.y,GP:()=>f.G,tJ:()=>c.t,Kt:()=>L.K,I3:()=>A.I,cf:()=>x.c,p0:()=>ep.p,gq:()=>W.g,Bb:()=>_.B,Nx:()=>T.N,mT:()=>M.m,wt:()=>U.w,tD:()=>p.t,YK:()=>J.Y,WB:()=>G.W,bz:()=>O.b,n9:()=>R.n,yp:()=>v.y,DT:()=>q.D,Xj:()=>B.X,AX:()=>F.A,p5:()=>j.p,Mk:()=>Z.M,nR:()=>Y.n,bE:()=>m.b,ke:()=>X.k,W0:()=>D.W,Ru:()=>h.R,sT:()=>H.s,NW:()=>Q.N,l8:()=>E.l,ZU:()=>V.Z,$C:()=>z.$,al:()=>K.a,E5:()=>g.E,z_:()=>ee.z,ak:()=>er.J,PH:()=>et.P,tl:()=>ea.t,OH:()=>en.O,m5:()=>eo.m,md:()=>es,ZT:()=>el.Z,m1:()=>ec,y1:()=>ep.y,T2:()=>eu.T,v8:()=>ed,XR:()=>eg.X,ok:()=>ef.o,Hw:()=>em.H});var a=t(204725),n=t(32811),o=t(586791);t(684581);var i=t(529791),s=t(52439),l=t(308183),c=t(437639);t(907393);var u=t(152539),d=t(89167),f=t(2419),p=t(713907),g=t(110511),m=t(768564),h=t(684315),v=t(377523),y=t(768117);t(138455);var P=t(594053),k=t(893079),I=t(381331),$=t(549063),w=t(471091),b=t(489303),C=t(742991),S=t(46471),N=t(79847),A=t(685271),x=t(270343),W=t(294703),_=t(941687),T=t(34021),M=t(740931),U=t(546743),G=t(337695),O=t(51759),D=t(130647),E=t(187389),L=t(656091),R=t(12623),q=t(229335),J=t(968683),B=t(946519),F=t(51927);t(398765);var j=t(584631),Y=t(436331),X=t(776667),Z=t(13695),H=t(872991);t(509591);var Q=t(226139);t(705155);var V=t(106390),z=t(722708),K=t(471395);t(848343);var ee=t(860148),er=t(128071),et=t(609421),ea=t(628828),en=t(280967),eo=t(597163);if(/^(23057|72465)$/.test(t.j))var ei=t(441535);function es(){return(0,ei.W)("databricks.fe.lakeview.sessionEmbedStandaloneInitEnabled",!1)}var el=t(86517);if(13057==t.j)var ei=t(441535);function ec(){return(0,ei.W)("databricks.fe.lakeview.standaloneViewerStandaloneInitEnabled",!1)}var eu=t(216979);function ed(){return(0,ei.W)("databricks.fe.lakeview.tokenEmbedStandaloneInitEnabled",!1)}t(613870);var ef=t(963681),ep=t(415767),eg=t(214353),em=t(372107);t(458259)},100565:(e,r,t)=>{t.d(r,{$0:()=>i,HP:()=>o,_r:()=>s});var a=t(208941),n=t(276417);function o(e){return e.split(`/${n.bD}/`)[0]}function i(e){return e.split(`${n.bD}/`)[1]}function s(e){return e.split(`/${a.Gq}/`)[0]}},133098:(e,r,t)=>{t.d(r,{w:()=>a.w,x:()=>n.x7});var a=t(992059),n=t(636623)},142462:(e,r,t)=>{t.d(r,{qA:()=>v,bV:()=>h,KX:()=>P,JX:()=>I,Wk:()=>k,E1:()=>p,P_:()=>g,tS:()=>$,HE:()=>m,Uk:()=>f});var a,n=t(921338),o=t.n(n),i=t(676733),s=t(5697),l=t(409989),c=t(101377);function u(e,r,t,a,n,o,i){try{var s=e[o](i),l=s.value}catch(e){t(e);return}s.done?r(l):Promise.resolve(l).then(a,n)}function d(e){return function(){var r=this,t=arguments;return new Promise(function(a,n){var o=e.apply(r,t);function i(e){u(o,a,n,i,s,"next",e)}function s(e){u(o,a,n,i,s,"throw",e)}i(void 0)})}}let f=e=>e.split("/")[1];function p(e){return e?.parent||e?.options?.parent}function g(e){return void 0!==e&&!!p(e)}let m=(e,r)=>{switch(e){case s.Z6.Alert:return`alerts/${r}`;case s.Z6.AlertV2:return`alertsv2/${r}`;case s.Z6.Query:return`queries/${r}`;case s.Z6.Dashboard:return`dashboards/${r}`;default:return""}},h=(e,r)=>{if(!e.allowed_actions)return!1;let t=[s.rc.All,r];return e.allowed_actions.some(e=>t.includes(e))};var v=((a={}).RESOURCE_DOES_NOT_EXIST="RESOURCE_DOES_NOT_EXIST",a.PERMISSION_DENIED="PERMISSION_DENIED",a);let y=o().create({paramsSerializer:e=>i.stringify(e),baseURL:"/ajax-api/2.0/",...{adapter:l.UF}});y.interceptors.response.use(void 0,e=>(e.response&&e.response.data.message&&(e.response.statusText=e.response.data.message),Promise.reject(e)));let P=e=>d(function*(){let{data:r}=yield y.delete("folders",{data:e});return r})(),k=e=>d(function*(){(0,c.tK)("dbsqlx.getFolderNodePath",e.internal_name,e.name);let{data:r}=yield y.get("folders/get-folder-node-path",{params:e});return r})(),I=e=>d(function*(){(0,c.tK)("dbsqlx.getFolderNode",e.internal_name,e.name);let{data:r}=yield y.get("folders",{params:e});return r})(),$=(e={})=>d(function*(){let{data:r}=yield y.get("folders/list",{params:e});return r})()},210714:(e,r,t)=>{t.d(r,{k:()=>o});var a=t(941614),n=t(193602);let o=(0,a.gD)({key:"lakeview-dashboard-folder-node-internal-name-selector",get:({get:e})=>e(n.A).folderNodeInternalName})},227583:(e,r,t)=>{t.d(r,{A:()=>l});var a=t(610435),n=t(692738),o=t(375214);function i(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.FD)("g",{fill:"currentColor",fillRule:"evenodd",clipPath:"url(#VisibleIcon_svg__a)",clipRule:"evenodd",children:[(0,a.Y)("path",{d:"M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6M6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"}),(0,a.Y)("path",{d:"M8 2A8.39 8.39 0 0 0 .028 7.777a.75.75 0 0 0 0 .466 8.389 8.389 0 0 0 15.944 0 .75.75 0 0 0 0-.466A8.39 8.39 0 0 0 8 2m0 10.52a6.89 6.89 0 0 1-6.465-4.51 6.888 6.888 0 0 1 12.93 0A6.89 6.89 0 0 1 8 12.52"})]}),(0,a.Y)("defs",{children:(0,a.Y)("clipPath",{children:(0,a.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let s=(0,n.forwardRef)((e,r)=>(0,a.Y)(o.I,{ref:r,...e,component:i}));s.displayName="VisibleIcon";let l=s},236936:(e,r,t)=>{t.d(r,{$0:()=>n.$0,HP:()=>n.HP,WZ:()=>a.WZ,_r:()=>n._r,yR:()=>a.yR});var a=t(276417),n=t(100565)},247293:(e,r,t)=>{t.d(r,{vt:()=>s,Je:()=>d,Wh:()=>a.Wh,OQ:()=>a.OQ,wW:()=>a.wW,Eh:()=>n.E,r$:()=>a.r$,_B:()=>o._});var a=t(922020),n=t(609280),o=t(10972),i=t(18748);function s({widgetSelectorFamily:e,datasetSchemaSelectorFamily:r,datasetParametersSelectorFamily:t,datasetNamesSelector:n,datasetNamesToSemanticModelEntityNameSelector:o,widgetsCustomerRefIdToNameTupleSelector:l,widgetsUUIDToNameTupleSelector:c}){return({key:s,value:u,familyKey:d,get:f})=>{if(!u)return;let p=new URLSearchParams(decodeURIComponent(u)).entries(),g=(0,a.Wh)({widgetSelectorFamily:e,datasetSchemaSelectorFamily:r,datasetParametersSelectorFamily:t,datasetNamesSelector:n,datasetNamesToSemanticModelEntityNameSelector:o}),m=[];return p.forEach(([e,r])=>{let t=e.replace("f_",""),a=f(l)?.get(t)||f(c)?.get(t)||`${d}/widgets/${t}`;if(!r||!a||!(0,i.WZ)(a))return;let n=g({value:encodeURIComponent(r),familyKey:a,key:e,get:f});n&&m.push({selection:n,widgetName:a})}),m.length>0?m:void 0}}var l=t(503158),c=t(648938);function u(e,r,t,a,n,o,i){try{var s=e[o](i),l=s.value}catch(e){t(e);return}s.done?r(l):Promise.resolve(l).then(a,n)}function d({widgetsNameToStableIdSelectorFamily:e,pageNameToCustomerRefIdSelector:r}){return({data:t,getPromise:n,getLoadable:o,familyKey:i})=>{var s;return(s=function*(){let s={},u=(yield n(r)).get(i)||(0,l.E)(i),d=new URLSearchParams;if(t)for(let r of t){let t=yield(0,a.OQ)({data:r.selection,familyKey:r.widgetName,widgetsNameToStableIdSelectorFamily:e,getPromise:n,getLoadable:o});t.search&&Object.entries(t.search).forEach(([e,r])=>{void 0!==r&&d.set(e,decodeURIComponent(r))})}return d.size>0&&(s[`${c.o}${u}`]=encodeURIComponent(d.toString())),{search:s}},function(){var e=this,r=arguments;return new Promise(function(t,a){var n=s.apply(e,r);function o(e){u(n,t,a,o,i,"next",e)}function i(e){u(n,t,a,o,i,"throw",e)}o(void 0)})})()}}},264094:(e,r,t)=>{t.d(r,{T:()=>n,g:()=>o});var a=t(692738);let n=a.createContext(!1);function o(){return(0,a.useContext)(n)}},323140:(e,r,t)=>{t.d(r,{o:()=>i});var a=t(941614);function n(e,r,t,a,n,o,i){try{var s=e[o](i),l=s.value}catch(e){t(e);return}s.done?r(l):Promise.resolve(l).then(a,n)}let o=(0,a.eU)({key:"lakeview-dashboard-isDashboardDisabledAtom",default:!1}),i=(0,a.gD)({key:"lakeview-dashboard-isDashboardDisabledSelector",get:({get:e})=>{var r;return(r=function*(){return e(o)},function(){var e=this,t=arguments;return new Promise(function(a,o){var i=r.apply(e,t);function s(e){n(i,a,o,s,l,"next",e)}function l(e){n(i,a,o,s,l,"throw",e)}s(void 0)})})()},set:({set:e},r)=>e(o,r)})},342145:(e,r,t)=>{t.d(r,{$y:()=>d,B_:()=>I,FQ:()=>m,OD:()=>s,T4:()=>i,U1:()=>h,UX:()=>p,Yu:()=>y,bB:()=>o,cC:()=>g,k0:()=>n,nU:()=>c,sO:()=>k,sh:()=>u,wp:()=>l,xY:()=>f,xe:()=>P,zD:()=>v});var a=t(141078);let n=(0,a.J1)`
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
`,o=(0,a.J1)`
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
`,i=(0,a.J1)`
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
`,s=(0,a.J1)`
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
`,c=(0,a.J1)`
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
`,u=(0,a.J1)`
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
`,d=(0,a.J1)`
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
`,P=(0,a.J1)`
  query getWorkspaceUsersCount($shouldGetDirectlyAssignedOnly: Boolean) @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceUsersCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`,k=(0,a.J1)`
  query getWorkspaceServicePrincipalsCount($shouldGetDirectlyAssignedOnly: Boolean)
  @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceServicePrincipalsCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`,I=(0,a.J1)`
  query getWorkspaceGroupsCount($shouldGetDirectlyAssignedOnly: Boolean) @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceGroupsCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`},370923:(e,r,t)=>{t.d(r,{r:()=>b});var a=t(941614),n=t(620275),o=t(434424),i=t(278983),s=t(886100),l=t(22191),c=t(747129),u=t(19123),d=t(5697),f=t(204645),p=t(142462),g=t(636623),m=t(290001),h=t(430009),v=t(500504),y=t(210714),P=t(323140),k=t(563189);function I(e,r,t,a,n,o,i){try{var s=e[o](i),l=s.value}catch(e){t(e);return}s.done?r(l):Promise.resolve(l).then(a,n)}function $(e){return function(){var r=this,t=arguments;return new Promise(function(a,n){var o=e.apply(r,t);function i(e){I(o,a,n,i,s,"next",e)}function s(e){I(o,a,n,i,s,"throw",e)}i(void 0)})}}let w=({dashboardName:e,folderNodeInternalName:r,fileBrowserName:t})=>{if((0,o.q)()&&e)return(0,m.t)("permissionSelector.getRequestAttributes",r,{dashboardName:e}),{name:(0,g.YX)(e),internal_name:r};if(t)return t.startsWith("tree")?{internal_name:t}:{name:t};return{}},b=(0,a.gD)({key:"lakeview-dashboard-permissions-selector",get:({get:e})=>$(function*(){let r;if(e(P.o))return{canRead:!1,canEdit:!1,canManage:!1};if((0,f.q)()||(0,n.s4)())return{canRead:!0,canEdit:!1,canManage:!1};try{let t;if((0,o.q)()){let t=e(h.D),a=e(y.k);r=w({dashboardName:t,folderNodeInternalName:a})}else{let t=e(v.Z);r=w({fileBrowserName:t})}let a=yield(t=r,$(function*(){let e=new URL("/ajax-api/2.0/folders",window.location.origin);t.name&&e.searchParams.append("name",t.name),t.internal_name&&e.searchParams.append("internal_name",t.internal_name);let r=e.pathname+e.search;return(yield(0,u.h)(r)).json()})()),n=(0,p.bV)(a,d.rc.All)||(0,p.bV)(a,d.rc.Remove)||(0,p.bV)(a,d.rc.ModifyPermissions),s=n||(0,p.bV)(a,d.rc.Modify),l=n||s||(0,p.bV)(a,d.rc.Read)||(0,p.bV)(a,d.rc.Execute);return(0,i.y)("clientsideEvent",{eventName:"lakeview_dashboard_ui_permission_state",eventType:n?"can_manage":s?"can_edit":l?"can_read":"no_permissions",folderNodeId:a.name}),{canRead:l,canEdit:s,canManage:n}}catch(e){return(0,k.UG)({error:e?.message}),s.iT.sev2BurnRate(l.Es.Lakeview,"lakeview.dashbaord.authoring.permissions.error",c.i1.P99,c.Ip.Min10,!1,{error:e,...r}),{canRead:!1,canEdit:!1,canManage:!1}}})()})},434424:(e,r,t)=>{t.d(r,{q:()=>n});var a=t(441535);function n(){return(0,a.W)("databricks.fe.lakeview.includeInternalName",!1)}},492369:(e,r,t)=>{t.d(r,{g:()=>n});var a,n=((a={})[a.UNSPECIFIED=0]="UNSPECIFIED",a[a.GLOBAL_FILTER_PAGE=1]="GLOBAL_FILTER_PAGE",a)},500504:(e,r,t)=>{t.d(r,{Z:()=>i});var a=t(941614),n=t(636623),o=t(430009);let i=(0,a.gD)({key:"lakeview-dashboard-file-browser-selector",get:({get:e})=>{let r=e(o.D);return(0,n.QG)(r)}})},597563:(e,r,t)=>{t.d(r,{xY:()=>i.xY,C4:()=>a,b:()=>o,H4:()=>n,Iw:()=>i.Iw,Nd:()=>i.Nd,Nh:()=>i.Nh});let a="metricViewConfig";function n(e){return void 0!==e&&"error"in e}function o(e){if(n(e))return{name:e.name,displayName:e.displayName};return e}var i=t(73704)},636623:(e,r,t)=>{function a(e){return e.split("/")[1]}function n(e){return e.replace("dashboards/","dashboardsv3/")}t.d(r,{QG:()=>o,YX:()=>n,x7:()=>a});let o=e=>{let r,t=a(e);if((r=a(e)).length<32&&/^\d/.test(r)&&!isNaN(parseInt(r)))return`tree/${t}`;return`dashboardsv3/${t}`}},653542:(e,r,t)=>{t.d(r,{Bo:()=>d,JN:()=>p,Lr:()=>u,PO:()=>c,Q_:()=>m,cY:()=>g,ek:()=>f,sQ:()=>h});var a=t(692738),n=t(141078),o=t(342145),i=t(49586),s=t(209908),l=t(441535);let c=(e,r)=>{if(r)return r;let t=(0,s.IW)(e);return t?`email:"${t}" OR fullname:"${t}"`:void 0},u=({skip:e=!1,first:r,after:t,filter:a,filterPredicate:s,filterAdmin:c,options:u={}})=>{let d=(0,l.W)("databricks.fe.accountsui.enableAccountAdminFilter",!1),f={first:r,after:t,filter:(0,i.J9)(a,s),filterAdmin:d&&null!=c?c:void 0};return(0,n.IT)(o.xY,{skip:e,variables:f,fetchPolicy:"no-cache",notifyOnNetworkStatusChange:!0,...u})},d=({skip:e=!1,first:r,after:t,filter:a,filterPredicate:i,options:s={}})=>(0,n.IT)(o.UX,{skip:e,variables:{first:r,after:t,filter:c(a,i)},fetchPolicy:"no-cache",notifyOnNetworkStatusChange:!0,...s}),f=({skip:e=!1})=>(0,n.IT)(o.zD,{skip:e,fetchPolicy:"no-cache",notifyOnNetworkStatusChange:!0}),p=({skip:e=!1,first:r,after:t,filter:a,filterPredicate:i,options:s={}})=>(0,n.IT)(o.OD,{skip:e,variables:{first:r,after:t,filter:c(a,i)},fetchPolicy:"no-cache",notifyOnNetworkStatusChange:!0,...s}),g=({skip:e=!1,applicationId:r,options:t={}})=>{let{data:i,loading:l,error:c}=(0,n.IT)(o.T4,{skip:e,variables:{first:2,filter:`email="${(0,s.IW)(r)}"`},...t}),u=(0,a.useMemo)(()=>i?.allWorkspaceServicePrincipals?.users||[],[i]),d=1===u.length,f=l||d?null:0===u.length?"No matching service principal found":"Multiple matching service principals found",p=(0,a.useMemo)(()=>{let e=u[0];return e?(0,s.f9)([e],"workspace")[0]:null},[u]);return{servicePrincipal:d?p:null,isLoading:l,error:c?.message??f}},m=({source:e="workspace",...r})=>{let t=(({source:e,isCache:r,useLite:t,...i})=>{let{data:l,loading:u,error:d}=(({skip:e=!1,first:r,after:t,filter:a,filterPredicate:i,options:s={}})=>(0,n.IT)(o.T4,{skip:e,variables:{first:r,after:t,filter:c(a,i)},fetchPolicy:"no-cache",notifyOnNetworkStatusChange:!0,...s}))({...i,skip:"workspace"!==e||i.skip||t,options:r?{fetchPolicy:"cache-first"}:void 0}),{data:f,loading:g,error:m}=p({...i,skip:"workspace"!==e||i.skip||!t,options:r?{fetchPolicy:"cache-first"}:void 0}),h=(0,a.useMemo)(()=>({data:t?f:l,loading:t?g:u,error:t?m:d}),[t,d,m,g,u,l,f]);return{subjects:(0,a.useMemo)(()=>(0,s.f9)(h.data?.allWorkspaceServicePrincipals?.users||[],"workspace"),[h]),isLoading:h.loading,error:h.error?.message??null,hasNextPage:h.data?.allWorkspaceServicePrincipals?.pageInfo?.hasNextPage}})({...r,source:e}),i=(({source:e,isCache:r,useLite:t,...n})=>{let{data:o,loading:i,error:l}=u({...n,skip:"account"!==e||n.skip||t,options:r?{fetchPolicy:"cache-first"}:void 0}),{data:c,loading:f,error:p}=d({...n,skip:"account"!==e||n.skip||!t,options:r?{fetchPolicy:"cache-first"}:void 0}),g=(0,a.useMemo)(()=>({data:t?c:o,loading:t?f:i,error:t?p:l}),[l,p,f,i,o,c,t]);return{subjects:(0,a.useMemo)(()=>(0,s.f9)(g.data?.allAccountServicePrincipals?.users||[],"account"),[g]),isLoading:g.loading,error:g.error?.message??null,hasNextPage:g.data?.allAccountServicePrincipals?.pageInfo?.hasNextPage}})({...r,source:e});switch(e){case"account":return i;case"workspace":return t;default:return{subjects:[],isLoading:!1,error:null,hasNextPage:!1}}},h=({skip:e=!1,shouldGetDirectlyAssignedOnly:r=!1})=>(0,n.IT)(o.sO,{skip:e,variables:{shouldGetDirectlyAssignedOnly:r},fetchPolicy:"no-cache"})},671244:(e,r,t)=>{t.d(r,{Bi:()=>p,Gn:()=>u,L5:()=>s,XO:()=>l,bx:()=>d,i0:()=>g,i8:()=>f,rA:()=>c});var a=t(692738),n=t(141078),o=t(342145),i=t(209908);let s=(e,r)=>{if(r)return r;let t=(0,i.IW)(e);if(!t)return;let a=(0,i.Pf)("users"),n=(0,i.Pf)("account users");return`groupname:"${t}"${a?.toLowerCase().startsWith(t.toLowerCase())?' OR groupname="users"':""}${n?.toLowerCase().startsWith(t.toLowerCase())?' OR groupname="account users"':""}`},l=({skip:e=!1,first:r,after:t,filter:a,filterPredicate:i,options:l={}})=>(0,n.IT)(o.cC,{skip:e,variables:{first:r,after:t,filter:s(a,i)},fetchPolicy:"no-cache",notifyOnNetworkStatusChange:!0,...l}),c=({skip:e=!1,first:r,after:t,filter:a,filterPredicate:i,options:l={}})=>(0,n.IT)(o.FQ,{skip:e,variables:{first:r,after:t,filter:s(a,i)},fetchPolicy:"no-cache",notifyOnNetworkStatusChange:!0,...l}),u=({skip:e=!1})=>(0,n.IT)(o.Yu,{skip:e,fetchPolicy:"no-cache",notifyOnNetworkStatusChange:!0}),d=({skip:e=!1,first:r,after:t,filter:a,filterPredicate:i,options:l={}})=>(0,n.IT)(o.wp,{skip:e,variables:{first:r,after:t,filter:s(a,i)},fetchPolicy:"no-cache",notifyOnNetworkStatusChange:!0,...l}),f=({skip:e=!1,groupname:r,isLocalGroup:t=!1})=>{let s=(0,i.IW)(r),{data:l,loading:c,error:u}=(0,n.IT)(o.wp,{skip:e,variables:{after:void 0,first:2,filter:`groupname="${s}"`},fetchPolicy:"no-cache"}),d=(0,a.useMemo)(()=>{let e=l?.allWorkspaceGroups?.groups||[];return t?e.filter(e=>e?.isWorkspaceLocal):e},[l,t]),f=1===d.length,p=c||f?null:0===d.length?"No matching group found":"Multiple matching groups found",g=(0,a.useMemo)(()=>{let e=d[0];return e?(0,i.Fh)([e],"workspace")[0]:null},[d]);return{group:f?g:null,isLoading:c,error:u?.message??p}},p=({source:e="workspace",...r})=>{let t=(({source:e,isCache:r,useLite:t,...l})=>{let{data:c,loading:u,error:f}=d({...l,skip:"workspace"!==e||l.skip||t,options:r?{fetchPolicy:"cache-first"}:void 0}),{data:p,loading:g,error:m}=(({skip:e=!1,first:r,after:t,filter:a,filterPredicate:i,options:l={}})=>(0,n.IT)(o.nU,{skip:e,variables:{first:r,after:t,filter:s(a,i)},fetchPolicy:"no-cache",notifyOnNetworkStatusChange:!0,...l}))({...l,skip:"workspace"!==e||l.skip||!t,options:r?{fetchPolicy:"cache-first"}:void 0}),h=(0,a.useMemo)(()=>({data:t?p:c,loading:t?g:u,error:t?m:f}),[t,f,c,p,m,g,u]);return{subjects:(0,a.useMemo)(()=>(0,i.Fh)(h.data?.allWorkspaceGroups?.groups||[],"workspace"),[h]),isLoading:h.loading,error:h.error?.message??null,hasNextPage:h.data?.allWorkspaceGroups?.pageInfo?.hasNextPage}})({...r,source:e}),u=(({source:e,isCache:r,useLite:t,...n})=>{let{data:o,loading:s,error:u}=l({...n,skip:"account"!==e||n.skip||t,options:r?{fetchPolicy:"cache-first"}:void 0}),{data:d,loading:f,error:p}=c({...n,skip:"account"!==e||n.skip||!t,options:r?{fetchPolicy:"cache-first"}:void 0}),g=(0,a.useMemo)(()=>({data:t?d:o,loading:t?f:s,error:t?p:u}),[u,o,d,p,f,s,t]);return{subjects:(0,a.useMemo)(()=>(0,i.Fh)(g.data?.allAccountGroups?.groups||[],"account"),[g]),isLoading:g.loading,error:g.error?.message??null,hasNextPage:g.data?.allAccountGroups?.pageInfo?.hasNextPage}})({...r,source:e});switch(e){case"account":return u;case"workspace":return t;default:return{subjects:[],isLoading:!1,error:null,hasNextPage:!1}}},g=({skip:e=!1,shouldGetDirectlyAssignedOnly:r=!1})=>(0,n.IT)(o.B_,{skip:e,variables:{shouldGetDirectlyAssignedOnly:r},fetchPolicy:"no-cache"})},762494:(e,r,t)=>{t.d(r,{G:()=>c,e:()=>d});var a,n=t(299089),o=t.n(n),i=t(886100),s=t(747129);function l(e,r,t,a,n,o,i){try{var s=e[o](i),l=s.value}catch(e){t(e);return}s.done?r(l):Promise.resolve(l).then(a,n)}var c=((a={}).unknown="unknown",a.workspaceSettingDisabled="workspaceSettingDisabled",a.browserPermissionDenied="browserPermissionDenied",a.documentNotFocused="documentNotFocused",a);let u=[{reason:"documentNotFocused",regex:/document is not focused/i},{reason:"browserPermissionDenied",regex:/write permission denied|write is not allowed|user denied permission/i},{reason:"browserPermissionDenied",regex:/Clipboard API has been blocked because of a permissions policy/i},{reason:"browserPermissionDenied",regex:/The request is not allowed by the user agent or the platform in the current context, possibly because the user denied permission./i},{reason:"browserPermissionDenied",regex:/Failed to execute 'write' on 'Clipboard': Write permission denied/i}];function d(e){var r;return(r=function*({content:e,onSuccess:r,onError:t,alertConfig:a}){try{yield navigator.clipboard.writeText(e),f({...a,isSuccessful:!0}),r?.(e);return}catch(r){let e=function({error:e,alertConfig:r}){let t=u.find(r=>r.regex.test(e instanceof Error?e.message:String(e)));if(r.alertKnownErrors||!t){let t=JSON.stringify({err:e instanceof Error?o()(e,["message","stack"]):e,...r.eventData});f({...r,isSuccessful:!1,debugBlob:t})}return t}({error:r,alertConfig:a});t?.(e?.reason??"unknown")}},function(){var e=this,t=arguments;return new Promise(function(a,n){var o=r.apply(e,t);function i(e){l(o,a,n,i,s,"next",e)}function s(e){l(o,a,n,i,s,"throw",e)}i(void 0)})}).apply(this,arguments)}function f({es:e,eventId:r,isSuccessful:t,debugBlob:a}){i.iT.sev2BurnRate(e,"codegen_no_dynamic_js_packages_web_shared_src_utils_copyutils_100",s.i1.P99,s.Ip.Min10,t,a)}},833784:(e,r,t)=>{t.d(r,{g:()=>a.g});var a=t(492369)}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/21822.c05e58b18d.chunk.js.map