"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[38236],{78373:(e,t,r)=>{r.d(t,{$:()=>m,G:()=>p});var s=r(252513),i=r.n(s),a=r(391854),n=r.n(a),o=r(485669),l=r(488655),u=r(971384),c=r(737358),d=r(846007);let p={getLocation:()=>window.location||{},getUrlSearchParams:()=>new URLSearchParams(p.getLocation().search),getUrlSearchParam:e=>p.getUrlSearchParams().get(e),setUrlSearchParam:(e,t)=>{let r=p.getUrlSearchParams();r.set(e,t);let{pathname:s,hash:i}=p.getLocation();return(0,l.oo)({pathname:s,search:r.toString(),hash:i},{replace:!0})},deleteUrlSearchParam:e=>{let t=p.getUrlSearchParams();t.delete(e);let{pathname:r,hash:s}=p.getLocation();window.history.replaceState(null,"",`${r}?${t.toString()}${s}`)},removeView(e,t){let r;t=void 0===t||t,console.log("Removing view",e.name,t);window.router.recentViewRoutes=n()(window.router.recentViewRoutes,e),e.remove(),delete window.fragmentToView[r],t&&i().history.fragment===r&&window.router.navigateHome()},openNotebookInNewTab(e){let t=(0,o.f_)({id:String(e)});(0,u.Lz)((0,c.AO)((0,d.t4)(t.toString())),{openInNewTab:!0})},addMlflowExperiment(e=""){(0,l.oo)(`/ml/createExperiment/${e}`)}};function m(e){let t=e.startsWith("/")?e.substring(1):e;return`#workspace/${encodeURIComponent(t)}`}},81208:(e,t,r)=>{r.d(t,{DN:()=>l,ih:()=>c,r4:()=>u,rT:()=>o});var s,i=r(981158),a=r(889885);let{TOP_LINK_IDENTIFIER:n}=i.A;var o=((s={}).ALPHA="ALPHA",s.TYPE="TYPE",s);let l="sortSetting",u={method:"ALPHA",descending:!1},c=e=>{if(!e)return(e,t)=>d(E,e,t);let t=h(e),r=e.descending?-1:1;return(e,s)=>d(t,e,s)*r},d=(e,t,r)=>{let s=e.findIndex(e=>e(t)),i=e.findIndex(e=>e(r));if(s!==i)return s-i;if(p(t)&&t.sortIndex!==r.sortIndex)return t.sortIndex-r.sortIndex;return y(t.name,r.name)},p=e=>void 0!==e.sortIndex,m=e=>e.isSystemFolder,f=e=>{let t=(0,a.FI)("user");return e.isHomeFolder&&t&&t===e.name},b=e=>{let t=(0,a.FI)("user");return e.isProjectFolder&&t&&t===e.name},g=e=>e.isProjectsFolder,S=()=>!0,y=(e,t)=>{if(null==e){if(null==t)return 0;return -1}return e.localeCompare(t)},h=e=>{if("TYPE"===e.method)return v;return E},E=[p,g,f,b,m,S],v=[e=>e.display===n,p,g,f,b,m,e=>e.hasChildren,e=>e.url&&e.url.match(/^#library/),S]},95040:(e,t,r)=>{r.d(t,{HD:()=>c,Ni:()=>o,Oq:()=>n,cg:()=>l,em:()=>i,k3:()=>a,wd:()=>u});var s=r(911571);let i="DELETE_GROUP_REQUEST",a="GRANT_OR_REVOKE_ENTITLEMENT_REQUEST",n="GRANT_OR_REVOKE_ENTITLEMENT_SUCCEEDED";function o(e,t,r){return{type:i,payload:{groupId:e,groupName:t,onDeleteSuccess:r}}}let l="DELETE_ROLES_REQUEST",u=(0,s.y)(l,"DELETE_ROLES_SUCCEEDED","DELETE_ROLES_FAILED")();function c(e){return{type:a,payload:e}}},101170:(e,t,r)=>{if(r.d(t,{nk:()=>l,xk:()=>o}),13057==r.j)var s,i=r(899490);var a=r(889885);if(13057==r.j)var n=r(957833);var o=((s={}).AllowCreateCluster="allow-cluster-create",s.SqlAnalyticsAccess="databricks-sql-access",s.WorkspaceAccess="workspace-access",s.ConsumerAccess="workspace-consume",s);function l(){let e=(0,a.FI)("centralizedLoginEnabled")&&(0,a.FI)("enableSqlService");return{"allow-cluster-create":i.Lh.areClusterBlueprintsEnabled()?{name:n.BH,tooltip:n.YM}:{name:n.Nu},...e&&{"databricks-sql-access":{name:"Databricks SQL access"}},...e&&{"workspace-access":{name:"Workspace access"}},"workspace-consume":{name:"Consumer access"}}}},102416:(e,t,r)=>{if(r.d(t,{L:()=>l,R:()=>o}),/^(13057|85670)$/.test(r.j))var s=r(610435);var i=r(692738),a=r(628209),n=r(940912);let o=e=>(t,r)=>{let s=e(t,r),i=s.subscribe.bind(s);return s.subscribe=e=>i((0,n.yB)().wrapNoProxy(e)),s};function l({children:e}){let t=(0,i.useContext)(a.ty),r=(0,i.useMemo)(()=>{if(!t)return null;let e=(0,n.yB)(),{subscription:r,...s}=t,i=r.addNestedSub.bind(r),a={...r,addNestedSub:t=>i(e.wrapNoProxy(t))};return{...s,subscription:a}},[t]);if(!r)return(0,s.Y)(s.FK,{children:e});return(0,s.Y)(a.ty.Provider,{value:r,children:e})}},128613:(e,t,r)=>{r.d(t,{OT:()=>p,_u:()=>d,j6:()=>c});var s=r(614441),i=r(117623),a=r(152251);function n(e,t,r,s,i,a,n){try{var o=e[a](n),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(s,i)}function o(e){return function(){var t=this,r=arguments;return new Promise(function(s,i){var a=e.apply(t,r);function o(e){n(a,s,i,o,l,"next",e)}function l(e){n(a,s,i,o,l,"throw",e)}o(void 0)})}}class l{response;timestamp;get(){if(!this.response)return;let e=Date.now();if(this.timestamp&&e<6e5+this.timestamp)return this.response}put(e){e.itemsPerPage>1e3&&(this.response=e,this.timestamp=Date.now())}}class u{groupsScimService;usersScimService;servicePrincipalsScimService;fullListCache;constructor(e,t=new s.Q(e+"/Groups"),r=new a.S(e+"/Users"),n=new i.e(e+"/ServicePrincipals"),o={users:new l,groups:new l,servicePrincipals:new l}){this.groupsScimService=t,this.usersScimService=r,this.servicePrincipalsScimService=n,this.fullListCache=o}getGroups(e){return this.groupsScimService.query(e)}getGroup(e,t){return this.groupsScimService.get(e,t)}deleteGroup(e){return this.groupsScimService.remove(e)}createGroup({groupName:e,isExclusive:t}){if(t)return this.groupsScimService.createExclusiveGroup({groupName:e});return this.groupsScimService.create({groupName:e})}addRolesToGroup(e,t){return this.groupsScimService.addRoles(e,t)}removeRolesFromGroup(e,t){return this.groupsScimService.removeRoles(e,t)}removeParentFromGroup(e,t){return this.groupsScimService.removeParent(e,t)}addMembersToGroup(e,t){return this.groupsScimService.addMembers(e,t)}removeMemberFromGroup(e,t){return this.groupsScimService.removeMember(e,t)}renameGroup(e,t){return this.groupsScimService.changeName(e,t)}getUsers(e){return this.usersScimService.query(e)}getUser(e){return this.usersScimService.get(e)}addEntitlements(e,t){return this.groupsScimService.addEntitlements(e,t)}removeEntitlements(e,t){return this.groupsScimService.removeEntitlements(e,t)}patchGroupEntitlements(e,t,r){return this.groupsScimService.patchEntitlements(e,t,r)}addUserEntitlements(e,t){return this.usersScimService.addEntitlements(e,t)}removeUserEntitlements(e,t){return this.usersScimService.removeEntitlements(e,t)}patchUserEntitlements(e,t,r){return this.usersScimService.patchEntitlements(e,t,r)}getServicePrincipals(e){return this.servicePrincipalsScimService.query(e)}getServicePrincipal(e,t){return this.servicePrincipalsScimService.get(e,t)}addServicePrincipal(e,t,r,s,i){return this.servicePrincipalsScimService.addServicePrincipal(e,t,r,s,i)}deleteServicePrincipal(e){return this.servicePrincipalsScimService.remove(e)}assignServicePrincipal(e){return this.servicePrincipalsScimService.assignServicePrincipal(e)}updateServicePrincipal(e,t,r,s,i){return this.servicePrincipalsScimService.updateServicePrincipal(e,t,r,s,i)}patchServicePrincipalEntitlements(e,t,r){return this.servicePrincipalsScimService.patchEntitlements(e,t,r)}createUser(e){return this.usersScimService.createUser(e)}getAllUsers=()=>o(function*(){let e=this.fullListCache.users.get();if(e)return e;return e=yield this.getUsers({attributes:["displayName","userName"]}),this.fullListCache.users.put(e),e}).call(this);getAllGroups=()=>o(function*(){let e=this.fullListCache.groups.get();if(e)return e;return e=yield this.getGroups({attributes:["displayName","userName"]}),this.fullListCache.groups.put(e),e}).call(this);getAllServicePrincipals=()=>o(function*(){let e=this.fullListCache.servicePrincipals.get();if(e)return e;return e=yield this.getServicePrincipals({attributes:["displayName","userName"]}),this.fullListCache.servicePrincipals.put(e),e}).call(this)}let c=new u("/ajax-api/2.0/preview/scim/v2"),d=new u("/ajax-api/2.0/preview/admin/scim/v2"),p=new u("/ajax-api/2.0/account/scim/v2")},134702:(e,t,r)=>{let s;r.r(t),r.d(t,{getReduxStore:()=>a});var i=r(499132);function a(){return void 0===s&&(s=(0,i.U)()),s}},193665:(e,t,r)=>{r.d(t,{Qk:()=>i,d$:()=>o,dk:()=>u,ic:()=>n,pC:()=>l,u9:()=>a});var s=r(141078);let i=(0,s.J1)`
  fragment SparkInfoFragment on SparkInfo {
    sparkContextId
    driverHealthy
    jdbcPort
    driver {
      ...SparkNodeFragment
    }
    executors {
      ...SparkNodeFragment
    }
  }
`,a=(0,s.J1)`
  fragment SparkNodeFragment on SparkNode {
    privateIp
    publicDns
    nodeId
    instanceId
    startTimestamp
    nodeAwsAttributes {
      isSpot
    }
    hostPrivateIp
  }
`,n=(0,s.J1)`
  fragment CombinedCluster on Cluster {
    id
    creator {
      id
      name
      orgId
    }
    pinnedByUserName
    sparkInfo {
      ...SparkInfoFragment
    }
    attributes {
      name
      workloadType {
        clients {
          jobs
          notebooks
        }
      }
      sparkVersion
      useMlRuntime
      isSingleNode
      sparkConf {
        key
        value
      }
      awsAttributes {
        firstOnDemand
        availability
        zoneId
        instanceProfileArn
        spotBidPricePercent
        ebsVolumesSpec {
          ebsVolumeType
          ebsVolumeSize
          ebsVolumeCount
          ebsVolumeIops
          ebsVolumeThroughput
        }
      }
      azureAttributes {
        logAnalyticsInfo {
          logAnalyticsWorkspaceId
          logAnalyticsPrimaryKey
        }
        firstOnDemand
        availability
        spotBidMaxPrice
      }
      gcpAttributes {
        usePreemptibleExecutors
        localSsdCount
        googleServiceAccount
        availability
        zoneId
      }
      nodeTypeId
      driverNodeTypeId
      sshPublicKeys
      customTags {
        key
        value
      }
      clusterLogConf {
        s3 {
          destination
          endpoint
          region
          enableEncryption
          encryptionType
          kmsKey
          cannedAcl
        }
        dbfs {
          destination
        }
        volumes {
          destination
        }
      }
      sparkEnvVars {
        key
        value
      }
      autoterminationMinutes
      noDriverDaemon
      enableElasticDisk
      diskSpec {
        # diskType {
        #  azureDiskVolumeType
        # }
        diskSize
        diskCount
      }
      source
      initScripts {
        s3 {
          destination
          endpoint
          region
          enableEncryption
          encryptionType
          kmsKey
          cannedAcl
        }
        dbfs {
          destination
        }
        gcs {
          destination
        }
        file {
          destination
        }
        abfss {
          destination
        }
        workspace {
          destination
        }
        volumes {
          destination
        }
      }
      dockerImage {
        url
        basicAuth {
          username
          password
        }
      }
      instancePoolId
      driverInstancePoolId
      instanceSource {
        nodeTypeId
        instancePoolId
      }
      driverInstanceSource {
        nodeTypeId
        instancePoolId
      }
      singleUser {
        name
      }
      legacyPolicy {
        id
      }
      enableLocalDiskEncryption
      dataSecurityMode
      accessMode
      runtimeEngine
      enableServerlessCompute
      virtualClusterSize
      kind
    }
    state
    stateMessage
    clusterTimes {
      startTime
      terminatedTime
      lastActivityTime
      lastStateLossTime
    }
    size {
      autoscale {
        minWorkers
        maxWorkers
      }
      numWorkers
    }
    memoryMb
    clusterCores
    defaultTags {
      key
      value
    }
    logStatus {
      lastAttempted
      lastException
    }
    terminationReason {
      code
      parameters {
        key
        value
      }
    }
    notebooks {
      id
      creator
      lastCommandRunTime
    }
  }
  ${i}
  ${a}
`,o=(0,s.J1)`
  query FilteredClusterListQuery($first: Int!, $filterBy: ClusterFilter, $orderBy: [ClusterSortOrder!])
  @component(name: "Notebook.Notebooks") {
    clusterList(first: $first, filterBy: $filterBy, orderBy: $orderBy) {
      edges {
        node {
          id
          state
          attributes {
            source
          }
          sparkInfo {
            driverHealthy
          }
        }
      }
    }
  }
`,l=(0,s.J1)`
  query clusterById($id: String!) @component(name: "Clusters.UI") {
    cluster(id: $id) {
      ...CombinedCluster
      permissionLevel
      libraryCount
    }
  }
  ${n}
`,u=(0,s.J1)`
  query LibraryViewClusterListQuery($first: Int!, $filterBy: ClusterFilter, $orderBy: [ClusterSortOrder!])
  @component(name: "Workspace.LibrariesUI") {
    clusterList(first: $first, filterBy: $filterBy, orderBy: $orderBy) {
      edges {
        node {
          id
          state
          attributes {
            source
            name
            dataSecurityMode
            accessMode
            sparkVersion
            kind
            enableServerlessCompute
          }
          sparkInfo {
            driverHealthy
          }
        }
      }
    }
  }
`},216105:(e,t,r)=>{r.d(t,{GA:()=>o,Hb:()=>c,JS:()=>n,PZ:()=>y,VY:()=>u,aW:()=>S,bY:()=>i,dZ:()=>m,hx:()=>p,l3:()=>f,ln:()=>l,o6:()=>a,uP:()=>s,vs:()=>d,wf:()=>g});let s="Form Submit Error",i="Form Submit Success",a="Form View",n="Notebook Attached To Cluster",o="Notebook Schema Browser View",l="Run Command",u="Notification Event",c="Add Members Modal Close",d="Add Members Event",p="Add Members Modal Open",m="Group Members Page Load",f="Remove Member Event";var b,g=((b={}).FormSubmit="Form Submit",b.FormView="Form View",b.HomeViewDropzone="homeViewDropzone",b.UserJourney="User Journey",b);let S=e=>{switch(e){case"Form Submit":return"formSubmit";case"Form View":return"formView";default:return e}},y=e=>{switch(e){case s:return"formSubmitError";case i:return"formSubmitSuccess";case a:return"formView";default:return e}}},235969:(e,t,r)=>{r.d(t,{HW:()=>a,KP:()=>n,Mz:()=>o});var s,i,a=((s={}).MEMBERS="members",s.PERMISSIONS="permissions",s.GIT_INTEGRATION="git-integration",s),n=((i={}).USER="USER",i.ADMIN="ADMIN",i);let o="/ajax-api/2.0/preview/roleassignments/principals"},271048:(e,t,r)=>{r.d(t,{Jy:()=>o,Vp:()=>l,Yp:()=>u,Zy:()=>c});var s=r(252850),i=r.n(s),a=r(623797);let n=i().fromJS({currentModal:{modalName:void 0,modalParams:{}},previousModal:{modalName:void 0,modalParams:{}},confirmationModalState:{isOpen:!1}});function o(e){return e.getIn(["modals","currentModal"])}function l(e){return e.getIn(["modals","previousModal"])}function u(e){return e.getIn(["modals","confirmationModalState"])}function c(e=n,t){switch(t.type){case a.e$:case a.kw:return e.set("previousModal",e.get("currentModal")).set("currentModal",t.payload);case a.Xw:return e.set("previousModal",e.get("currentModal")).set("currentModal",n.get("currentModal"));case a.i$:return e.set("confirmationModalState",t.payload).setIn(["confirmationModalState","isOpen"],!0);case a.nz:return e.setIn(["confirmationModalState","isOpen"],!1);case a.tt:return e.setIn(["confirmationModalState","isConfirming"],!0);default:return e}}},271280:(e,t,r)=>{r.d(t,{Ar:()=>p,Zw:()=>d,k:()=>c,sf:()=>u});var s=r(252850),i=r.n(s),a=r(457369),n=r(386954),o=r(53911);let l=i().fromJS({clusterLibraryStatuses:{},libraryClusterStatuses:{library:void 0,statuses:void 0}});function u(e,t){return e.getIn(["libraries","clusterLibraryStatuses",t])}function c(e,t){if(t.equals(e.getIn(["libraries","libraryClusterStatuses","library"])))return e.getIn(["libraries","libraryClusterStatuses","statuses"])}function d(e){return e.getIn(["libraries","sparkPackages"])}function p(e=l,t){switch(t.type){case(0,a.ec)(n.Bb):{let r=o.GD.fromJs(t.payload);return e.setIn(["clusterLibraryStatuses",r.getClusterId()],r.get("library_statuses"))}case(0,a.ec)(n.Az):{let{library:r}=t.meta,s=(t.payload&&t.payload.statuses||[]).map(e=>o.GD.fromJs(e));return e.setIn(["libraryClusterStatuses","library"],r).setIn(["libraryClusterStatuses","statuses"],i().List(s))}case(0,a.ec)(n.F6):{let r=t.payload&&t.payload.packages||[];return e.set("sparkPackages",i().fromJS(r))}default:return e}}},319989:(e,t,r)=>{let s;r.d(t,{C7:()=>y,Hd:()=>E});var i=r(342411);if(13057==r.j)var a=r(441535);var n=r(835617);if(13057==r.j)var o=r(879857);var l=r(11538),u=r(82102),c=r(789559),d=r(81208),p=r(981158);if(13057==r.j)var m=r(78373);var f=r(262550),b=r(134702);function g(e,t,r,s,i,a,n){try{var o=e[a](n),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(s,i)}function S(e){return function(){var t=this,r=arguments;return new Promise(function(s,i){var a=e.apply(t,r);function n(e){g(a,s,i,n,o,"next",e)}function o(e){g(a,s,i,n,o,"throw",e)}n(void 0)})}}function y(){if(void 0===s){let e=i.Sd.createIntlWithLocale(),t=p.A.WORKSPACE_FOLDER_ID,r=new l.A({id:t,parentId:t,name:e.formatMessage(n.f.workspaceTitle),pathName:"/",type:p.A.FOLDER_TYPE}),a=(0,b.getReduxStore)();(s=new c.a(r,(0,u.$o)(),{store:a})).startWatching(()=>{});let o=new f.A("fileBrowserView").get(d.DN)||Object.assign({},d.r4);s.setSortSetting(o)}return s}class h{TogglerImpl;pendingLoad;searchPanelToggler;sidebar;constructor(e){this.sidebar=e}doLoad(){return S(function*(){let e=yield(()=>{let e=()=>Promise.all([r.e(62280),r.e(7473),r.e(159),r.e(74767),r.e(95600),r.e(95150),r.e(87828),r.e(51751),r.e(14045),r.e(19729),r.e(2338),r.e(69166)]).then(r.bind(r,869712));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(869712,"./SearchPanelToggler","lazy",e);return e()})();this.TogglerImpl=e.SearchPanelTogglerImpl,this.searchPanelToggler=new this.TogglerImpl(i.Sd.createIntlWithLocale(),this.sidebar,y())}).call(this)}load(){return S(function*(){return this.pendingLoad||(this.pendingLoad=this.doLoad()),this.pendingLoad}).call(this)}toggleSearchPanel(e,t,r){return S(function*(){if(this.searchPanelToggler||(yield this.load()),!this.searchPanelToggler)throw Error("Failed to load search panel");this.searchPanelToggler.toggleSearchPanel(e,t,r)}).call(this)}readjustMenuPosition(){this.searchPanelToggler?.readjustMenuPosition()}immediateHide(){this.searchPanelToggler?.immediateHide()}}function E(e){(0,a.W)("databricks.fe.infra.lazyInitTreeProvider",!0)||y();let t=new h(e);return(0,o.q)("remove",function({detail:{model:e}}){let t=e.get("viewRoute")||e.get("type")+"/"+e.get("id");window.fragmentToView.hasOwnProperty(t)&&m.G.removeView(window.fragmentToView[t])}),{searchPanelToggler:t}}},352120:(e,t,r)=>{r.d(t,{An:()=>b,BB:()=>h,BY:()=>f,Cz:()=>S,Td:()=>y,Tx:()=>m,hy:()=>g});var s=r(87868),i=r(237996),a=r(621058),n=r.n(a),o=r(475654);if(/^(13057|85670)$/.test(r.j))var l=r(681695);if(/^(13057|85670)$/.test(r.j))var u=r(172826);var c=r(846007);if(/^(13057|85670)$/.test(r.j))var d=r(646831);let p={".*:any":o.o.WEBAPP_EMPTY,"":o.o.WEBAPP_HOME,"create/cluster(?*query)":o.o.WEBAPP_CLUSTERS_CREATE,"setting/clusters/:clusterId/edit":o.o.WEBAPP_CLUSTERS_EDIT,"setting/clusters/:clusterId/:tab":o.o.WEBAPP_CLUSTERS_DETAIL,"clusters/:clusterId/:tab":o.o.WEBAPP_CLUSTERS_DETAIL,"dashboard/:id":o.o.WEBAPP_DASHBOARD,"dashboard/:id/:mode":o.o.WEBAPP_DASHBOARD,"experimental/*subroute":o.o.WEBAPP_EXPERIMENTAL,"folder/:id":o.o.WEBAPP_FOLDER,"library/:name":o.o.WEBAPP_LIBRARY,"files/:treeNodeId":o.o.WEBAPP_FILE,"notebook/:id":o.o.WEBAPP_NOTEBOOK,"notebook/:id/command/:commandId":o.o.WEBAPP_NOTEBOOK,"notebook/:id/resultsOnly":o.o.WEBAPP_NOTEBOOK_RESULT,"notebook/:id/revision/:revisionTimestamp":o.o.WEBAPP_NOTEBOOK_REVISION,"notebook/:id/revision/:revisionTimestamp/mlflow/run/:mlflowRunId":o.o.WEBAPP_NOTEBOOK_REVISION_MFFLOW,"notebook/:id/environment":o.o.WEBAPP_NOTEBOOK_ENVIRONMENT,"notebook/:id/sideView":o.o.WEBAPP_NOTEBOOK_SIDEVIEW,"notebook/:nbid/dashboard/:dashboardId":o.o.WEBAPP_NOTEBOOK_DASHBOARD,"notebook/:nbid/dashboard/:dashboardId/:mode":o.o.WEBAPP_NOTEBOOK_DASHBOARD,"setting/:name":o.o.WEBAPP_SETTING,"setting/:name/:tab":o.o.WEBAPP_SETTING,"setting/accounts":o.o.WEBAPP_SETTING_ACCOUNTS,"setting/clusters":o.o.WEBAPP_CLUSTERS,"setting/clusters/automated":o.o.WEBAPP_CLUSTERS_JOB_CLUSTER_LIST,"setting/clusters/interactive":o.o.WEBAPP_CLUSTERS,"shell/:id":o.o.WEBAPP_SHELL,"table/:catalog/:database/:name":o.o.WEBAPP_SCHEMA_BROWSING_THREE_LEVEL,"table/:database/:name":o.o.WEBAPP_SCHEMA_BROWSING_TWO_LEVEL,"table/:name":o.o.WEBAPP_DEPRECATED_TABLE_ENDPOINT,"workspace/*path":o.o.WEBAPP_WORKSPACE,"mlflow/experiments":o.o.MLFLOW_EXPERIMENT_OBSERVATORY_LIST},m=[o.o.WEBAPP_NOTEBOOK,o.o.WEBAPP_NOTEBOOK_RESULT,o.o.WEBAPP_NOTEBOOK_REVISION,o.o.WEBAPP_NOTEBOOK_REVISION_MFFLOW];function f(e,t,r,s){r||(r=this[t]);let i=(function(...s){let i=Date.now(),a=p[e]??o.o.WEBAPP_UNKNOWN;p[e]||(a=`${a} [${e}]`);let n=a===o.o.WEBAPP_HOME,u=window.router.trackAsyncNavigation(a,{isSimpleHomepageEnabled:!0===n}),c=r.apply(this,s),m=Date.now()-i,f=(0,d.Q)(c);if(f){if(!n){let e=()=>{var e,t,r,s,i;return e=a,t="backbone-router",r=u?.id,s=u?.rootInteractionId,i=u?.traceSpan,void setTimeout(()=>setTimeout(()=>l.gr.dispatch({pageId:e,pageViewId:t,interactionId:r,rootInteractionId:s,traceSpan:i}),0),0)};f.then(e,e)}window.router.setNewRouteNavigationPromise(f)}else u?.cancel();return window.recordEvent("clientSideRoute",{route:e,routeName:t,routeTime:m}),c}).bind(this);return s.call(this,e,t,i)}function b(){let e=document.getElementById("emotion-container-webapp-css")??document.body;return(0,s.A)({container:e,key:"webapp-css"})}function g(){if(!function(e){let t=n()(e);if(t.length>0)try{return(0,u.hF)(t[0])}catch(e){console.error(e)}return!1}("#topbar .tb-title")){let e=document.querySelector("#topbar .tb-title");e&&(e.textContent="")}}function S(e){if(!e)return"#";return e.startsWith("#")?e:`#${e}`}function y(e){let{pathname:t,search:r,hash:s}=(0,c.t4)(e);return(0,i.AO)({pathname:t,search:r,hash:s})}function h(e){let t=new URL(window.location.href),r=t.searchParams.get(e);return t.searchParams.delete(e),window.history.replaceState(null,"",t),r}},386954:(e,t,r)=>{r.d(t,{$u:()=>f,Az:()=>S,Bb:()=>d,F6:()=>h,Pg:()=>b,Sj:()=>p,Wz:()=>y,Yf:()=>g,jm:()=>m,pD:()=>v});var s=r(452137),i=r.n(s),a=r(621058),n=r.n(a),o=r(844760),l=r(53911),u=r(384187),c=r(677933);let d="LOAD_CLUSTER_LIBRARY_STATUSES";function p(e){return{type:d,payload:new Promise((t,r)=>{u.q.clusterStatus({data:{cluster_id:e},success:t,error:(0,c.Ft)(r)})})}}function m(e,t){i()(t instanceof l.wp,"libraryProto must of type Library");let r={cluster_id:e,libraries:[t.toJS()]};return{type:"INSTALL_LIBRARY",payload:(0,o.S)("/ajax-api/2.0/libraries/install",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(r)})}}let f="UNINSTALL_LIBRARIES_REQUEST",b="UNINSTALL_LIBRARIES_SUCCEEDED";function g(e,t,r){return{type:f,payload:{clusterId:e,libraryProtos:t,clusterName:r}}}let S="LIST_ACTIVE_CLUSTER_INSTALL_STATUSES";function y(e){return{type:S,meta:{library:e},payload:new Promise((t,r)=>{u.q.listActiveClusterInstallStatusesForLibrary({data:{library:e.toJS()},success:t,error:(0,c.Ft)(r)})})}}let h="LOAD_SPARK_PACKAGES",E=`/proxy/${encodeURIComponent("http://spark-packages.org/api/v1/packages?&num_releases=-1&published_packages_only=true&with_rating=true")}`;function v(){return{type:h,payload:new Promise((e,t)=>{n().ajax({url:E,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",success:e,error:t})})}}},393213:(e,t,r)=>{function s(e,t,r,s,i,a,n){try{var o=e[a](n),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(s,i)}function i(e){return function(){var t=this,r=arguments;return new Promise(function(i,a){var n=e.apply(t,r);function o(e){s(n,i,a,o,l,"next",e)}function l(e){s(n,i,a,o,l,"throw",e)}o(void 0)})}}r.d(t,{Kn:()=>u,L9:()=>l,Mr:()=>p,Yz:()=>a,gT:()=>o,hk:()=>c,sk:()=>n,sq:()=>d});let a="admin",n="Admin access",o="Can manage this workspace and its users, groups, resources, and settings",l="admins";function u(e){return e?.some(e=>e.name===l)??!1}function c(e){return e?.some(e=>e.display===l)??!1}function d(e,t){return i(function*(){let r=yield e.getGroups({filter:`displayName eq "${l}"`}),s=r.Resources?.find(e=>e.displayName===l);if(!s)throw Error("Could not find the admins group.");return e.addMembersToGroup(s.id,[t])})()}function p(e,t,r){return i(function*(){return e.removeParentFromGroup(t,r)})()}},537767:(e,t,r)=>{r.d(t,{AK:()=>n,pb:()=>o,rA:()=>a,sM:()=>l});var s=r(141078),i=r(221762);let a=(0,s.J1)`
  query DbrReleasesQuery @component(name: "Clusters.UI") {
    dbrReleases {
      key
      displayName
      dbrVersion {
        major
        feature
        patch
      }
      category
      capabilities
      images {
        key
        capabilities
      }
      deprecated
      customerVisible
      sparkVersion
      scalaVersion
      gpuSupport
      scalaVersion
      isEOL
      eolDate
      eosDate
    }
  }
`,n=e=>(0,s.IT)(a,{...e,skip:e?.skip}),o=()=>{let e=(0,i.HA)();return e.readQuery({query:a})?.dbrReleases},l=()=>new Set(o()?.map(e=>e.images).flat().map(e=>e?.key).filter(Boolean))},574526:(e,t,r)=>{r.d(t,{AC:()=>u,W4:()=>l,w6:()=>c});var s=r(124185),i=r(19123),a=r(677933);function n(e,t,r,s,i,a,n){try{var o=e[a](n),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(s,i)}function o(e){return function(){var t=this,r=arguments;return new Promise(function(s,i){var a=e.apply(t,r);function o(e){n(a,s,i,o,l,"next",e)}function l(e){n(a,s,i,o,l,"throw",e)}o(void 0)})}}let l=(e,t,r,a,n)=>{let o=new URL(e,window.origin);return o.search=new URLSearchParams(a).toString(),(0,i.h)(o.toString(),{method:t,credentials:"same-origin",headers:{"Content-Type":"application/json","X-CSRF-Token":(0,s.m)(),...n||{}},...r?{body:JSON.stringify(r)}:{}})},u=(e,t,r,s,i)=>o(function*(){let n,o=yield l(e,t,r,s,i);try{n=yield o.json()}catch(r){throw Error(`Server response is malformed (${t}: ${e})`)}if(!o.ok){if(n.message)throw new a.hD(n.message+` (${t}: ${e})`,n.errorCode);throw new a.hD(o.statusText+` (${t}: ${e})`,o.status?.toString())}return n})(),c=(e,t,r,s)=>o(function*(){let i=yield l(e,t,r,s);if(!i.ok&&404!==i.status)throw new a.hD(`${i.status?.toString()} ${i.statusText} (${t}: ${e})`,i.status?.toString());return{status:i.status,response:i.ok?yield i.json():{}}})()},585169:(e,t,r)=>{function s(e){return!0===/^[a-z_][a-z0-9_]*$/.test(e)}function i(e){return!1===/[,`"';]/.test(e)}r.d(t,{EG:()=>i,OX:()=>s,P9:()=>a,qx:()=>o});let a=",|'|\"|;|`|\\[|\\]|\\{|\\}|\\(|\\)|=|&|\\n|\\t| ",n=RegExp(a,"i");function o(e){return!1===n.test(e)}},623797:(e,t,r)=>{r.d(t,{AS:()=>c,D6:()=>f,DN:()=>g,EV:()=>l,HO:()=>S,Sq:()=>h,Xw:()=>o,Zj:()=>E,e$:()=>a,gn:()=>u,i$:()=>d,kw:()=>n,nz:()=>p,tt:()=>m,vq:()=>y,wW:()=>b});var s=r(252850),i=r.n(s);let a="SHOW_MODAL",n="SHOW_MODAL_COMPONENT",o="HIDE_MODAL";function l(e,t,r){return{type:n,payload:i().fromJS({modalComponentFn:()=>e,modalName:t,modalParams:r})}}function u(e,t,r,s){return{type:n,payload:i().fromJS({fallbackComponentFn:()=>s,modalComponentFn:()=>e,modalName:t,modalParams:r,isDuboisModal:!0})}}function c(){return{type:o}}let d="SHOW_CONFIRMATION_MODAL",p="HIDE_CONFIRMATION_MODAL",m="CONFIRM_CONFIRMATION_MODAL",f="CANCEL_CONFIRMATION_MODAL";function b(e){return{type:d,payload:i().fromJS(e)}}function g(){return{type:p}}function S(){return{type:m}}function y(){return{type:f}}let h="SHOW_DELETE_CONFIRMATION_MODAL";function E(e){return{type:h,payload:e}}},646831:(e,t,r)=>{r.d(t,{Q:()=>s});function s(e){if(null!==e&&"object"==typeof e&&"function"==typeof e.then)return e;return null}},677933:(e,t,r)=>{r.d(t,{Ft:()=>m,K$:()=>function e(t){let r=[];for(let s of(void 0!==t.path&&r.push(t),t.inner)){let t=e(s);r.push(...t)}return r},Pr:()=>S,QX:()=>h,_k:()=>g,d7:()=>f,dA:()=>y,hD:()=>p,tS:()=>b});var s=r(860862),i=r.n(s),a=r(692738),n=r(177414),o=r(441535),l=r(940912),u=r(181105),c=r(94601),d=r(279384);class p extends Error{errorCode;__initiatorStack;constructor(e,t){super(e),this.errorCode=t,Object.setPrototypeOf(this,p.prototype)}}let m=e=>(0,l.yB)().wrap((t,r)=>{if("abort"!==r){let r=g(t),s=new p(r,(0,c.ay)(t));if(s.__initiatorStack=t.__initiatorStack,(0,o.W)("databricks.fe.infra.swapApiErrorToPredefinedError",!1)){let i=t.status,a=u.Un.getNetworkRequestErrorDetailsFromObject({status:i,reason:r}),n=(0,u.CW)(a,i,s);e("Unknown Error"===r?new u.l6(a,s):n)}else e(s)}}),f=e=>e instanceof p||e instanceof u.ZR;function b(e,t,r){if(!t)return{};try{e.validateSync(t,{abortEarly:!1,...r||{}})}catch(e){if("ValidationError"===e.name){let t,r;return t={},Object.keys(r=function e(t){let r={};for(let s of(void 0!==t.path&&(r[t.path]=t.message),t.inner)){let t=e(s);r={...r,...t}}return r}(e)).forEach(e=>{i()(t,e,r[e],e=>{if(e&&"string"==typeof e)return e})}),t}throw e}return{}}function g(e){let{status:t}=e;if(0===t)return"Request failed to send. Check your internet connection";if(t>=400&&t<500){if(e.responseJSON){if(e.responseJSON.message)return e.responseJSON.message;if(e.responseJSON.detail)return e.responseJSON.detail}if(e.responseText)return e.responseText}if(t>=500)return`Request Failed: ${e.statusText}`;if(200===t&&e.responseText){var r,s;if(!(e.responseText.includes("500 Server Error")&&(r=e.responseText,/<\/?[a-z][\s\S]*>/i.test(r))))return`Request Failed: ${e.responseText}`;{let t,r,i,a;return`Request Failed: ${s=e.responseText,r=(t=new DOMParser().parseFromString(s,"text/html")).querySelector("title"),i=r?.textContent.trim()||"",a=t.querySelectorAll("h2"),i+" "+(a?.[0]?.textContent?.trim()||"")}`}}return"Unknown Error"}function S(e){let t=e.replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/\n/g," ").match(/Reason:\s*<pre>(.*?)<\/pre>/);return t?t[1].trim():e}function y(e,t={}){return new Promise((r,s)=>{e(t).then(r,m(s))})}class h{static validateReduxForm(e,t,r){if(!t)return{};return b(e,t.toJS(),r)}static getValidateReduxForm(e){return t=>h.validateReduxForm(e,t,{})}static maybeThrowSubmissionError(e){let t=h.getErrorMessages(e);if(t&&t.length>0)throw new n.n({_error:t.join(". ")})}static maybeShowErrors(e){let t=h.getErrorMessages(e);t&&t.length>0&&(0,d.Q)(t.join(" "),10)}static getErrorMessages(e){return(e||[]).map(e=>e.message).filter(Boolean)}static stringifyYupError(e,t){if(a.isValidElement(t)){let{values:r,...s}=t.props;return e.formatMessage(s,r)}return t}}},741052:(e,t,r)=>{r.d(t,{$$:()=>em,$b:()=>R,Ag:()=>A,At:()=>eb,B3:()=>eS,BU:()=>ey,DL:()=>eZ,Dt:()=>J,EK:()=>S,EP:()=>eR,Eh:()=>ei,FQ:()=>es,FX:()=>k,Gf:()=>eI,Gh:()=>j,JP:()=>ec,K0:()=>Z,K6:()=>v,KA:()=>M,Kq:()=>eJ,Kt:()=>et,L1:()=>W,L6:()=>E,MK:()=>V,NF:()=>ea,Np:()=>x,Ny:()=>C,OD:()=>T,OE:()=>F,OQ:()=>G,QA:()=>ex,Rn:()=>eF,SB:()=>eh,SN:()=>eM,TO:()=>eD,TQ:()=>eK,WO:()=>eB,XD:()=>ez,XY:()=>Y,Xj:()=>b,YI:()=>en,Z4:()=>eP,ZZ:()=>er,_E:()=>y,_T:()=>eO,_z:()=>ej,bD:()=>e_,bq:()=>eW,by:()=>eT,c8:()=>g,cX:()=>ev,d9:()=>e$,dM:()=>eC,e4:()=>q,e9:()=>eN,eA:()=>eg,eO:()=>D,eW:()=>eH,f_:()=>eu,gL:()=>ek,hE:()=>el,hN:()=>eE,hS:()=>eV,hU:()=>eQ,hp:()=>ef,iN:()=>L,in:()=>ed,jB:()=>ew,jG:()=>H,k7:()=>K,kA:()=>eU,kX:()=>P,ke:()=>eY,kx:()=>X,mE:()=>eA,oh:()=>_,ov:()=>eX,q:()=>$,rZ:()=>eG,sO:()=>eL,uB:()=>ep,us:()=>h,uz:()=>eo,vm:()=>w,w6:()=>O,wO:()=>U,xD:()=>N,xJ:()=>eq,y0:()=>B,yY:()=>I,z6:()=>Q});var s=r(22191),i=r(886100),a=r(178615),n=r(326081),o=r(686560),l=r(441535),u=r(13451),c=r(965772),d=r(371303),p=r(889885),m=r(783487),f=r(118944);function b(){return(0,o.d)("isMetastoreInstalled_new",!1)}function g(){return!!((0,d.sT)("databricks.manager.enablePolicyFamilyForAllWorkspaces",!1)&&(0,d.sT)("databricks.fe.enablePolicyFamilyUi",!0))}function S(){return!!(0,p.Nm)("enableServicePrincipalClusters",()=>(0,d.sT)("databricks.manager.servicePrincipalClusters.enabled",!1)&&((0,l.W)("dff-safe.databricks-manager-servicePrincipalClustersEnabled",!1)||(0,o.d)("shardName","").startsWith("test-shard-")))}function y(){return!(0,n.G)()}let h=()=>(0,p.FI)("cloud")===m.L.Azure&&(0,d.sT)("databricks.manager.enableAzureSpotVM",!0),E=()=>(0,l.W)("databricks.fe.clustercontrols.enableGcpConfidentialCompute",!1),v=()=>(0,l.W)("databricks.fe.clustercontrols.enableSimpleFormSpotDriverWarning",!1),k=()=>(0,d.sT)("databricks.fe.enableIgnorePhotonOnByDefaultWhenUsingPolicies",!1),_=()=>(0,l.W)("databricks.fe.clustercontrols.enablePhotonByDefaultWithPolicies",!1),P=()=>(0,l.W)("databricks.fe.enableClusterCreateDefaultToFirstPolicy.safex",!1),I=()=>Object.keys((0,f.dh)()??{}).includes("WSFS"),T=()=>(0,l.W)("databricks.fe.enablePolicyForServerlessCompute",!1),A=()=>(0,l.W)("databricks.fe.clustersUI.enableUCCompatibleSharedCompute",!1),C=()=>A()&&b(),w=()=>!(0,l.W)("databricks.fe.clustercontrols.hideSimpleClusterUxToggle",!1),W=()=>!(0,l.W)("databricks.fe.clustercontrols.simpleClusterUxToggleDefaultOff",!1)&&(z()||(0,l.W)("databricks.fe.clustercontrols.simpleClusterUxToggleDefaultOn",!1)),L=()=>(0,l.W)("databricks.fe.clustercontrols.forceSimpleClusterForm",!1),O=()=>(0,l.W)("databricks.fe.clustercontrols.enableClusterEventsDateTimeFilter",!1),N=()=>!(0,l.W)("databricks.fe.clustercontrols.hideJobsSimpleClusterUxToggle",!1),R=()=>!(0,l.W)("databricks.fe.clustercontrols.jobsSimpleClusterUxToggleDefaultOff",!1)&&(z()||(0,l.W)("databricks.fe.clustercontrols.jobsSimpleClusterUxToggleDefaultOnWithoutA2g",!1)),B=()=>(0,l.W)("databricks.fe.clustercontrols.simpleClusterFormToggleOffExpirationSeconds",0),F=()=>(0,l.W)("databricks.fe.clustercontrols.newClusterFormAutoMode",!1),D=e=>b()&&(0,c.Uv)((0,c.fw)(e),{major:13,minor:3}),M=e=>b()&&(0,c.Uv)((0,c.fw)(e),{major:15,minor:4}),V=()=>(0,l.W)("databricks.fe.clustercontrols.shouldEnableClusterLevelGPUMetrics",!1),$=()=>(0,l.W)("databricks.clustercontrols.enableLibrariesInPoliciesByWorkspace",!1)||(0,l.W)("databricks.clustercontrols.enableLibrariesInPoliciesByRegion",!1),U=()=>(0,l.W)("databricks.fe.clustercontrols.showWorkspaceDBFSDeprecationSetting",!1),x=()=>(0,l.W)("databricks.fe.clustercontrols.enableFleetNodeTypeDefault",!1),J=()=>(0,l.W)("databricks.fe.clustercontrols.enableClusterFormFeedback",!1),G=()=>!((0,l.W)("databricks.auth.disableGroupClusters",!1)||!1===(0,l.W)("enable_a2g_clusters",null))&&((0,l.W)("enable_a2g_clusters",null)??(0,l.W)("databricks.fe.clustersUi.enableGroupClusterUi",!1))&&!!(!(0,l.W)("databricks.fe.clustersUi.disableGroupClustersWhenNoWorkspaceAcls",!1)||(0,p.Nm)("enableWorkspaceAclsConfig",()=>"true"===(0,u.e)("enableWorkspaceAclsConfig","false"))),z=()=>!!(0,l.W)("enable_a2g_clusters",null),j=()=>(0,l.W)("databricks.fe.clustercontrols.enableSparkUiForReverseProxy",!1),H=()=>(0,l.W)("databricks.fe.clustercontrols.listJobCompliancePageSize",30),q=()=>(0,l.W)("databricks.fe.clustercontrols.shouldShowPoolAutoterminationMinutesInGcp",!1),Y=()=>(0,l.W)("databricks.fe.clustercontrols.enableRefreshedClusterActionsModals",!1);function K(){return(0,l.W)("databricks.manager.allowSharedAccessModeWithSingleNodeCluster",!1)}let Q=()=>(0,l.W)("databricks.fe.clustercontrols.enableLowMemoryPhotonWarning",!1),X=()=>(0,l.W)("cld_to_volumes",!1),Z=()=>(0,l.W)("databricks.manager.allowVolumesLogDeliveryForGroupClusters",!1),ee=(e,t)=>{try{return new RegExp(e)}catch(r){return i.iT.sev2(s.Es.ClustersUi,"safex value is not a regex",{value:e,name:t}),RegExp("")}},et=()=>(0,l.W)("databricks.fe.clustercontrols.maxClusterTagKeyLength",63),er=()=>(0,a.J)((0,l.W)("databricks.fe.clustercontrols.clusterTagReservedPrefixes","[]"),s.Es.ClustersUi),es=()=>ee((0,l.W)("databricks.fe.clustercontrols.clusterTagValidKeyRegex",""),"clusterTagValidKeyRegex"),ei=()=>(0,l.W)("databricks.fe.clustercontrols.maxClusterTagValueLength",63),ea=()=>ee((0,l.W)("databricks.fe.clustercontrols.clusterTagValidValueRegex",""),"clusterTagValidKeyRegex"),en=()=>(0,l.W)("databricks.fe.clustercontrols.showReleaseVersion",!1),eo=()=>(0,l.W)("databricks.fe.clustercontrols.enableUiSparkVersionPolicyValidation",!1),el=()=>(0,l.W)("databricks.fe.clusters.enableMetricsHeatmapV2",!1),eu=()=>(0,l.W)("databricks.fe.clustercontrols.enableMetricsGraphsTwoColumnLayout",!1),ec=()=>(0,l.W)("databricks.fe.clustercontrols.enableExecutorsOnlyMetrics",!1),ed=()=>(0,l.W)("databricks.fe.clustercontrols.enableByNodeViewInInstanceSelect",!1),ep=()=>(0,l.W)("databricks.fe.clustercontrols.enableNodeTypeFlexibilityUI",!0),em=()=>(0,l.W)("databricks.manager.enableNodeTypeFlexibility",!1),ef=()=>(0,l.W)("databricks.fe.clustercontrols.showCombineMetricGraph",!1),eb=()=>(0,l.W)("databricks.fe.clustercontrols.enableDetailedMemoryCharts",!1),eg=()=>(0,l.W)("databricks.fe.clustercontrols.enableGcMetricsCharts",!1),eS=()=>(0,l.W)("databricks.fe.clustercontrols.enableTaskSlotUtilizationChart",!1),ey=()=>(0,l.W)("databricks.fe.clustercontrols.enableSparkMetricsV2Charts",!1),eh=()=>(0,l.W)("databricks.fe.clustercontrols.enableClickableHeatmapV2",!1),eE=()=>(0,l.W)("databricks.fe.clustercontrols.enableNodeInfoReactQuery",!1),ev=()=>(0,l.W)("databricks.fe.clustercontrols.enableClusterConfigByGraphQl",!0),ek=()=>(0,l.W)("databricks.fe.clustercontrols.silenceClusterFormAlertOnWorkspaceNotReady",!1),e_=()=>eI()&&(0,l.W)("databricks.fe.clustercontrols.enableQuotaFallbackForPolicy",!1),eP=()=>eI()&&(0,l.W)("databricks.fe.clustercontrols.enableAnythingSuitableQuotaFallback",!1),eI=()=>{let e=(0,p.FI)("cloud");return e===m.L.Azure&&(0,l.W)("databricks.fe.clustercontrols.enableAzureQuotaFallback",!1)||e===m.L.GCP&&(0,l.W)("databricks.fe.clustercontrols.enableGcpQuotaFallback",!1)},eT=()=>{switch((0,p.FI)("cloud")){case m.L.Azure:try{let e=JSON.parse((0,l.W)("databricks.fe.clustercontrols.azureNodeTypeFallbackList",'["Standard_D4ds_v5","Standard_D4ds_v4","Standard_D4ads_v5","Standard_D4s_v3","Standard_D4a_v4", "Standard_DC4as_v5"]'));if(!Array.isArray(e))throw Error("invalid");return e}catch(e){return i.iT.sev2(s.Es.ClustersUi,"azureNodeTypeFallbackList is invalid"),[]}case m.L.GCP:try{let e=(0,l.W)("databricks.fe.clustercontrols.gcpNodeTypeFallbackList",'["n2-highmem-4","n2d-highmem-4","n1-highmem-4"]'),t=JSON.parse(String(e));if(!Array.isArray(t))throw Error("invalid");return t}catch(e){return i.iT.sev2(s.Es.ClustersUi,"gcpNodeTypeFallbackList is invalid"),[]}default:return[]}},eA=()=>{switch((0,p.FI)("cloud")){case m.L.Azure:return Number((0,l.W)("databricks.fe.clustercontrols.azureQuotaThreshold",4));case m.L.GCP:return Number((0,l.W)("databricks.fe.clustercontrols.gcpQuotaThreshold",4));default:return 4}},eC=()=>{switch((0,p.FI)("cloud")){case m.L.Azure:return["Standard_DS3_v2","Standard_D4ds_v5"];case m.L.GCP:return["n2-highmem-4"];default:return[]}},ew=()=>(0,l.W)("databricks.fe.clustercontrols.enableSingleUserAccessModeFallbackInSimpleForm",!1),eW=()=>(0,l.W)("databricks.fe.clustercontrols.showAwsGovcloudS3Regions",!1),eL=()=>(0,l.W)("databricks.fe.clustercontrols.listNodeTypesIncompletePollingPeriodMillis",6e4),eO=()=>(0,l.W)("databricks.fe.clustercontrols.listNodeTypesPollingPeriodMillis",6e5),eN=()=>(0,l.W)("databricks.fe.clustercontrols.shouldMakeMetricChartLocalTime",!1),eR=()=>(0,l.W)("databricks.fe.clustercontrols.disableClusterListNoQuotaWarning",!1),eB=()=>(0,l.W)("databricks.fe.clustercontrols.clusterListParamsWithWebSharedLocalStorage",!1),eF=()=>(0,l.W)("databricks.fe.clustercontrols.enableOptionalPolicyInferredDefaultFix",!1),eD=()=>(0,l.W)("databricks.manager.enableDeferredPolicyEnforcement",!1),eM=()=>(0,l.W)("databricks.fe.clustercontrols.enableFlexibleNodeTypesWhatsNewItem",!1),eV=()=>(0,l.W)("databricks.fe.clustercontrols.enableRHFClusterCreateModal",!1),e$=()=>(0,l.W)("databricks.fe.clustercontrols.hidePythonVersionField",!1),eU=()=>(0,l.W)("databricks.fe.clustercontrols.enableDbrReleaseDropdownMigration",!1),ex=()=>(0,l.W)("databricks.fe.clustercontrols.enableEnforceUserIsolationInSimpleForm",!1),eJ=()=>(0,l.W)("databricks.fe.clustercontrols.showDbrDeprecationUi",!1),eG=()=>(0,l.W)("databricks.fe.clustercontrols.showNewPolicyFormNudge",!1),ez=()=>(0,l.W)("databricks.manager.enableAWSContextIdFleet",!1),ej=()=>(0,l.W)("databricks.fe.clustercontrols.enableDomReaderAssistantContext",!1),eH=()=>(0,l.W)("databricks.fe.clustercontrols.enableRecoverDefaultJobClusterWithSimpleForm",!1),eq=()=>(0,l.W)("databricks.fe.clustercontrols.fixServicePrincipalPolicyFilter",!1),eY=()=>(0,l.W)("databricks.fe.clustercontrols.enableImprovedAutoDsmHandling",!1),eK=()=>(0,l.W)("databricks.fe.clustercontrols.oldPolicyFormPreferenceExpirationSeconds",0),eQ=()=>(0,l.W)("databricks.fe.clustercontrols.enableChangeClusterOwnerUI",!1),eX=()=>(0,l.W)("databricks.fe.clustercontrols.useDisplayNameForRuntimeVersion",!1),eZ=()=>(0,l.W)("serverless_compute",!1)},836498:(e,t,r)=>{r.d(t,{hH:()=>l,mB:()=>c,oF:()=>u});var s=r(574526);let i="/ajax-api/2.0/mlflow",a=13057==r.j?`${i}/databricks/experiments/search`:null,n=`${i}/experiments/get`,o=`${i}/experiments/get-by-name`,l=({filter:e,order_by:t,max_results:r=1500,page_token:i})=>(0,s.AC)(a,"POST",{filter:e,order_by:t,max_results:r,page_token:i}),u=({experiment_id:e})=>(0,s.w6)(n,"GET",void 0,{experiment_id:e}),c=({experiment_name:e})=>(0,s.w6)(o,"GET",void 0,{experiment_name:e})},879857:(e,t,r)=>{r.d(t,{n:()=>a,q:()=>n});let s=null;function i(){return s||(s=new EventTarget),s}function a(e,t){let r=new CustomEvent(e,{detail:t});i().dispatchEvent(r)}function n(e,t){let r=e=>{t(e)};return i().addEventListener(e,r),()=>{i().removeEventListener(e,r)}}},899490:(e,t,r)=>{r.d(t,{L9:()=>S,Lh:()=>g,NR:()=>f,lx:()=>b});var s=r(610435);r(692738);var i=r(342411),a=r(419374),n=r(849873),o=r(993533),l=r(944389),u=r(864833),c=r(299914),d=r(293186),p=r(741052);let m=`${u.W.LIST_PAGE}/cluster-policies`,f={LIST:m,CREATE:`${m}/create`,VIEW:`${m}/:id`,EDIT:`${m}/:id/edit`},b=["all-purpose","job","dlt"];class g{static mapBlueprintListResultToUsableBlueprints(e,t){let r=[];return e?.clusterListPolicies?.policies&&(r=e.clusterListPolicies.policies.map(e=>g.fromGraphqlBlueprint(e)).filter(e=>void 0!==e)),g.filterBlueprintsByType(r,t)}static areClusterBlueprintsEnabled(){return a.p.enableClusterBlueprints()}static canCreateBlueprintClusters(e){if(!g.areClusterBlueprintsEnabled())return!1;if(void 0===e)return!0;return e.length>0}static canUseUnrestricted(e){if(!g.areClusterBlueprintsEnabled()||!l.A.clusterAclsEnabled())return!0;return c.F.isAdmin()||e}static validateBlueprintSparkConfEntries(e,t){return(0,n.Gj)(e?.toJS()||{},"spark_conf",t).validation}static validateBlueprintSparkEnvVars(e,t){return(0,n.Gj)(e?.toJS()||{},"spark_env_vars",t).validation}static validateBlueprintClusterTagsEntries(e,t,r){let s=e?.toJS()||{};return r.forEach(e=>s[e.key]=e.value),g.getCustomTagValidators(t).map(({policyValidator:e,matchGroups:[,t]})=>{let r=s[t];return e.validateSingleValue(r,`custom_tags.${t}`)})}static validateBlueprintInitScripts=(e,t)=>t.toJS().init_scripts?.map((t,r)=>{let i=[];if(t.dbfs){let s=t.dbfs.destination;i.push((0,n.eY)(e,e=>`init_scripts.${e}.dbfs.destination`,r).validateSingleValue(s).errorMessage)}if(t.s3){let s=t.s3.destination,a=t.s3.region;i.push((0,n.eY)(e,e=>`init_scripts.${e}.s3.destination`,r).validateSingleValue(s).errorMessage,(0,n.eY)(e,e=>`init_scripts.${e}.s3.region`,r).validateSingleValue(a).errorMessage)}if(t.file){let s=t.file.destination;i.push((0,n.eY)(e,e=>`init_scripts.${e}.file.destination`,r).validateSingleValue(s).errorMessage)}if(t.gcs){let s=t.gcs.destination;i.push((0,n.eY)(e,e=>`init_scripts.${e}.gcs.destination`,r).validateSingleValue(s).errorMessage)}if(t.workspace){let s=t.workspace.destination;i.push((0,n.eY)(e,e=>`init_scripts.${e}.workspace.destination`,r).validateSingleValue(s).errorMessage)}if(t.volumes){let s=t.volumes.destination;i.push((0,n.eY)(e,e=>`init_scripts.${e}.volumes.destination`,r).validateSingleValue(s).errorMessage)}let a=i.filter(Boolean);return 0!==a.length&&(0,s.Y)("div",{children:a.map(e=>(0,s.Y)("p",{children:e}))})})||[];static areAllFieldsValid(e,t,r,s,i){if(!g.areClusterBlueprintsEnabled()||!e||g.getAllFieldValidations(e,t,r,s,i).every(e=>e.isValid))return!0;return!1}static getAllErrorMessages(e,t,r,s,i){if(!e)return[];return g.getAllFieldValidations(e,t,r,s,i).filter(e=>!e.isValid).map(e=>e.errorMessage).filter(Boolean)}static getFieldAttributes(e,t,r,s,i){let a=d.a.getInfoMap(),l=[a.driverInstancePoolId,a.clusterName,a.nodeTypeId,a.driverNodeTypeId,a.instancePoolId,a["awsAttributes.zoneId"],a["gcpAttributes.zoneId"],a["azureAttributes.firstOnDemand"],a["azureAttributes.availability"],a.numWorkers,a["autoscale.maxWorkers"],a["autoscale.minWorkers"],a.dbusPerHour,a.googleServiceAccount,a["gcpAttributes.availability"],a["gcpAttributes.localSsdCount"],a["gcpAttributes.confidentialComputeType"],a.dataSecurityMode,a.accessMode,a.singleUserName,a["dockerImage.url"],a["dockerImage.basicAuth.username"],a["dockerImage.basicAuth.password"],a.runtimeEngine,a.sparkVersion,a.enableServerlessCompute,a["workerNodeTypeFlexibility.alternateNodeTypeIds"],a["driverNodeTypeFlexibility.alternateNodeTypeIds"],a["workerNodeTypeFlexibility.awsContextId"],a["driverNodeTypeFlexibility.awsContextId"]],u={};for(let a of l){let l,c=(0,n.WM)(e,a.path,a.policyAlias);if((0,p.ke)()&&("data_security_mode"===a.path||"access_mode"===a.path)&&t.data_security_mode===o.U5x.DATA_SECURITY_MODE_AUTO){u[a.path]={isValid:!0,...c.getPresentationAttributes()};continue}l=a.getPoolValue?g.getPoolInheritedValidationsForField(a,e,t,r,s):{cluster:c.validatePossibleValues(a.getValues?a.getValues(t,r,s,i):[a.getValue(t,r,s)],a.fieldName)},u[a.path]={isValid:Object.values(l).filter(Boolean).every(e=>e.isValid),errorContent:l.cluster?.errorMessage,workerPoolErrorContent:l.workerPool?.errorMessage,driverPoolErrorContent:l.driverPool?.errorMessage,...c.getPresentationAttributes()}}return u}static getValidationsFromFieldAttributes(e){return Object.keys(e).map(t=>{let{errorContent:r,workerPoolErrorContent:s,driverPoolErrorContent:i}=e[t],a=[r,s,i].filter(Boolean);if(0===a.length)return[{isValid:!0,errorMessage:void 0,meta:{path:t}}];return a.map(e=>({isValid:!1,errorMessage:e,meta:{path:t}}))}).reduce((e,t)=>e.concat(t),[])}static getAllFieldValidations(e,t,r,s,i){let a=(t,r,s)=>g.validateBlueprintPath(e,t,r,s),o=i=>Object.values(g.getPoolInheritedValidationsForField(i,e,t,r,s)).filter(Boolean),l=t.aws_attributes,u=t.azure_attributes,c=d.a.getInfoMap(),p=t.toJS().init_scripts||[],m=g.getFieldAttributes(e,t,r,s,i);return[a("autotermination_minutes",t.autotermination_minutes||0,"Autotermination minutes"),...o(c.availability),...o(c["awsAttributes.zoneId"]),...o(c["azureAttributes.spotBidMaxPrice"]),a("aws_attributes.first_on_demand",l?.first_on_demand||0,"On-demand first"),a("azure_attributes.log_analytics_info.log_analytics_workspace_id",u?.log_analytics_info?.log_analytics_workspace_id,"Azure Log Analytics Agent Workspace Id"),a("azure_attributes.log_analytics_info.log_analytics_primary_key",u?.log_analytics_info?.log_analytics_primary_key,"Azure Log Analytics Agent Primary Key"),a("aws_attributes.instance_profile_arn",l?.instance_profile_arn,"Instance Profile"),...o(c.spotBidPricePercent),...o(c.ebsVolumeType),...o(c.ebsVolumeCount),...o(c.ebsVolumeSize),a("cluster_log_conf.type",t.getClusterLogType(),"Log Destination"),a("cluster_log_conf.path",t.getClusterLogPath(),"Log Path"),a("cluster_log_conf.region",t.getClusterLogRegion(),"Log Region"),...o(c.enableElasticDisk),a("enable_local_disk_encryption",t.enable_local_disk_encryption,"Enable Encryption on Local Disks"),...g.validateBlueprintSparkConfEntries(t.spark_conf,e),...g.validateBlueprintSparkEnvVars(t.spark_env_vars,e),...g.validateBlueprintClusterTagsEntries(t.custom_tags,e,r?.clusterAttributes.customTags||[]),...n.bo.validateValueArray(t.ssh_public_keys?.toJS()||[],e,"ssh_public_keys.*","SSH Public Key"),...n.bo.validateValueArray(p.map(e=>e.dbfs?.destination)||[],e,"init_scripts.*.dbfs.destination","Init script DBFS destination",p.map(e=>!e.dbfs)),...n.bo.validateValueArray(p.map(e=>e.s3?.destination)||[],e,"init_scripts.*.s3.destination","Init script S3 destination",p.map(e=>!e.s3)),...n.bo.validateValueArray(p.map(e=>e.file?.destination)||[],e,"init_scripts.*.file.destination","Init script FILE destination",p.map(e=>!e.file)),...n.bo.validateValueArray(p.map(e=>e.gcs?.destination)||[],e,"init_scripts.*.gcs.destination","Init script GCS destination",p.map(e=>!e.gcs)),...n.bo.validateValueArray(p.map(e=>e.workspace?.destination)||[],e,"init_scripts.*.workspace.destination","Init script WSFS destination",p.map(e=>!e.workspace)),...n.bo.validateValueArray(p.map(e=>e.volumes?.destination)||[],e,"init_scripts.*.volumes.destination","Init script Volumes destination",p.map(e=>!e.volumes)),...n.bo.validateValueArray(p.map(e=>e.s3?.region)||[],e,"init_scripts.*.s3.region","Init script S3 region",p.map(e=>!e.s3)),a("workload_type.clients.jobs",t.workload_type?.clients?.jobs??!0,"Workload type jobs"),a("workload_type.clients.notebooks",t.workload_type?.clients?.notebooks??!0,"Workload type notebooks"),...g.getValidationsFromFieldAttributes(m)].filter(Boolean)}static getPoolInheritedValidationsForField(e,t,r,s,i){let a=(r,s)=>g.validateBlueprintPath(t,e.path,r,s);if(!e.getPoolValue||!s&&!i)return{cluster:a(e.getValue(r),e.fieldName)};if(s&&s.id===i?.id)return{workerPool:a(e.getPoolValue(s),`${e.fieldName} from pool`)};return{workerPool:s?a(e.getPoolValue(s),`${e.fieldName} from worker pool`):void 0,driverPool:i?a(e.getPoolValue(i),`${e.fieldName} from driver pool`):void 0,cluster:s&&i?void 0:a(e.getValue(r),e.fieldName)}}static filterBlueprintsByType(e,t){if(!t)return e;let r=g.clusterSourceToClusterType(t);return e.filter(e=>(0,n.WM)(e,"cluster_source").validateSingleValue(t).isValid&&(0,n.WM)(e,"cluster_type").validateSingleValue(r).isValid)}static clusterSourceToClusterType(e){if("JOB"===e)return"job";if("PIPELINE"===e||"PIPELINE_MAINTENANCE"===e)return"dlt";return"all-purpose"}static toGraphqlBlueprint({id:e,name:t,isDefault:r,policies:s,description:i,policyFamilyId:a,policyFamilyDefinitionOverrides:n,policyFamilyLatestVersion:o,policyFamilyVersion:l}){return{__typename:"ClusterPolicy",policyId:e,isDefault:r??!1,policyFamilyLatestVersion:o??null,policyOwnAttributes:{__typename:"ClusterPolicyOwnAttributes",name:t,definition:JSON.stringify(s),description:i??null,policyFamilyId:a??null,policyFamilyVersion:l??null,policyFamilyDefinitionOverrides:n??null,maxClustersPerUser:null,libraries:null}}}static fromGraphqlBlueprint(e){if(!e)return;let{policyId:t,policyFamilyLatestVersion:r,isDefault:s,policyOwnAttributes:i}=e,{definition:a,description:n,name:o=null,policyFamilyId:l,policyFamilyVersion:u,policyFamilyDefinitionOverrides:c,maxClustersPerUser:d,libraries:p}=i??{},m={};try{if(m=JSON.parse(a??"{}"),null===m||"object"!=typeof m||Array.isArray(m))throw Error("Invalid policy")}catch(e){console.error(`Error occurred while parsing cluster policy: ${t} (${o})`);return}return{id:t,name:o,isDefault:s||!1,policies:m,description:n,policyFamilyId:l,policyFamilyLatestVersion:r,policyFamilyVersion:u,policyFamilyDefinitionOverrides:c,maxClustersPerUser:d,libraries:p}}static enableAutoscalingCheckboxStatus(e,t){let r=(0,n.WM)(e,"autoscale.min_workers"),a=(0,n.WM)(e,"autoscale.max_workers"),o=(0,n.WM)(e,"num_workers"),l=r.isHidden()&&a.isHidden();if((!r.allowsUndefined()||!a.allowsUndefined())&&!t)return{enabledState:"Default",error:(0,s.Y)(i.sA,{id:"H5rvlS",defaultMessage:"Autoscaling must be enabled"})};if(!o.allowsUndefined()&&t)return{enabledState:"Default",error:(0,s.Y)(i.sA,{id:"Xdp/GI",defaultMessage:"Autoscaling must be disabled"})};if(l||o.isHidden())return{enabledState:"Hidden"};if(!r.allowsUndefined()||!a.allowsUndefined()||!o.allowsUndefined())return{enabledState:"ReadOnly"};return{enabledState:"Default"}}static autopilotOptionsSectionIsVisible(e,t){let r="Hidden"===g.enableAutoscalingCheckboxStatus(e,t).enabledState,s=(0,n.WM)(e,"enable_elastic_disk").isHidden(),i=(0,n.WM)(e,"autotermination_minutes").isHidden();return!r||!s||!i}static isSpotBidPriceVisible(e){let t=d.a.getInfoMap();return!(0,n.WM)(e,t.spotBidPricePercent.path).isHidden()}static ebsVolumeFieldsAreVisible(e){let t=d.a.getInfoMap(),r=(0,n.WM)(e,t.ebsVolumeType.path).isHidden(),s=(0,n.WM)(e,t.ebsVolumeSize.path).isHidden(),i=(0,n.WM)(e,t.ebsVolumeCount.path).isHidden();return!r||!s||!i}static validateBlueprintPath(e,t,r,s){return(0,n.WM)(e,t).validateSingleValue(r,s)}static validateBlueprintField(e,t,r){return g.validateBlueprintPath(e,r.path,r.getValue(t),r.fieldName)}static getIdFromCluster(e){return e.policy_id}static setIdForCluster(e,t){return e.set("policy_id",t)}static getPrettyDefinition(e){try{return JSON.stringify(JSON.parse(e),null,2)}catch(t){return e}}static buildErrorTooltipContent(e){if(e.length>0)return e.map((e,t)=>(0,s.Y)("div",{css:e=>({padding:`${e.spacing.xs}px ${e.spacing.sm}px`}),children:e},t))}static getCustomTagValidators(e){return n.bo.getValidatorsMatchingPatternForBlueprint(e,/^custom_tags\.(.*)/)}}let S=e=>{if("string"!=typeof e)return[];let t=e.split(",").map(e=>e.trim());if(1===t.length&&""===t[0])return[];return t}},949957:(e,t,r)=>{r.d(t,{BJ:()=>d,BS:()=>y,Fh:()=>m,Lu:()=>l,Sr:()=>p,WI:()=>g,d5:()=>b,i2:()=>v,lK:()=>h,lO:()=>a,ln:()=>u,ur:()=>o,yr:()=>S,zB:()=>k});var s=r(141078),i=r(193665);let a=(0,s.J1)`
  query clusterListAbstract(
    $first: Int!
    $filterBy: ClusterFilter
    $orderBy: [ClusterSortOrder!]
    $withInstanceProfileArn: Boolean!
  ) @component(name: "Clusters.UI") {
    clusterList(first: $first, filterBy: $filterBy, orderBy: $orderBy) {
      edges {
        node {
          id
          attributes {
            name
            awsAttributes @include(if: $withInstanceProfileArn) {
              instanceProfileArn
            }
          }
          creator {
            id
            name
          }
        }
      }
    }
  }
`,n=(0,s.J1)`
  fragment ClusterDetailsByIdFragment on Cluster {
    id
    state
    memoryMb
    clusterCores
    attributes {
      name
      sparkVersion
      useMlRuntime
      source
      isServerless
      enableServerlessCompute
      virtualClusterSize
      kind
      hasTableAcls
      workloadType {
        clients {
          jobs
          notebooks
        }
      }
      runtimeEngine
    }
    creator {
      id
      name
    }
    sparkInfo {
      ...SparkInfoFragment
    }
  }
  ${i.Qk}
  ${i.u9}
`;(0,s.J1)`
  query clusterDetailsById($id: String!) @component(name: "Clusters.UI") {
    cluster(id: $id) {
      ...ClusterDetailsByIdFragment
    }
  }
  ${n}
  ${i.Qk}
  ${i.u9}
`,(0,s.J1)`
  subscription clusterDetailsByIdSubscription($clusterId: String!) @component(name: "ServingInfra.GraphQLService") {
    cluster(clusterId: $clusterId) {
      ...ClusterDetailsByIdFragment
    }
  }
  ${n}
  ${i.Qk}
  ${i.u9}
`;let o=(0,s.J1)`
  query fullClusterById($id: String!) @component(name: "Clusters.UI") {
    cluster(id: $id) {
      ...CombinedCluster
      permissions
    }
  }
  ${i.ic}
`,l=(0,s.J1)`
  fragment ApiErrorFragment on ApiError {
    code
    message
    helpUrl
    traceId
  }
`,u=(0,s.J1)`
  fragment ClusterListTableFragment on Cluster {
    id
    state
    memoryMb
    clusterCores
    attributes {
      name
      sparkVersion
      runtimeEngine
      sparkConf {
        key
        value
      }
      nodeTypeId
      driverNodeTypeId
      hasTableAcls
      isServerless
      enableServerlessCompute
      virtualClusterSize
      kind
      source
    }
    size {
      autoscale {
        minWorkers
        maxWorkers
      }
      numWorkers
    }
    clusterTimes {
      terminatedTime
    }
    defaultTags {
      key
      value
    }
    notebooks {
      id
      creator
      lastCommandRunTime
    }
    sparkInfo {
      ...SparkInfoFragment
    }
    creator {
      id
      name
    }
    stateMessage
    terminationReason {
      code
      parameters {
        key
        value
      }
    }
    pinnedByUserName
    permissions
  }
  ${i.Qk}
  ${i.u9}
`,c=(0,s.J1)`
  fragment ClusterListTableFragmentWithPolicy on Cluster {
    id
    state
    memoryMb
    clusterCores
    attributes {
      name
      sparkVersion
      runtimeEngine
      sparkConf {
        key
        value
      }
      nodeTypeId
      driverNodeTypeId
      hasTableAcls
      isServerless
      enableServerlessCompute
      virtualClusterSize
      kind
      source
      legacyPolicy {
        name
        policyFamilyId
      }
      useMlRuntime
    }
    size {
      autoscale {
        minWorkers
        maxWorkers
      }
      numWorkers
    }
    clusterTimes {
      terminatedTime
    }
    notebooks {
      id
      creator
      lastCommandRunTime
    }
    sparkInfo {
      ...SparkInfoFragment
    }
    defaultTags {
      key
      value
    }
    creator {
      id
      name
    }
    stateMessage
    terminationReason {
      code
      parameters {
        key
        value
      }
    }
    pinnedByUserName
    permissions
  }
  ${i.Qk}
  ${i.u9}
`;(0,s.J1)`
  query ClusterListTable($first: Int!, $filterBy: ClusterFilter, $orderBy: [ClusterSortOrder!])
  @component(name: "Clusters.UI") {
    clusterList(first: $first, filterBy: $filterBy, orderBy: $orderBy) {
      edges {
        node {
          ...ClusterListTableFragment
        }
      }
    }
  }
  ${u}
`;let d=(0,s.J1)`
  query ClusterListTableWithPolicy($first: Int!, $filterBy: ClusterFilter, $orderBy: [ClusterSortOrder!])
  @component(name: "Clusters.UI") {
    clusterList(first: $first, filterBy: $filterBy, orderBy: $orderBy) {
      edges {
        node {
          ...ClusterListTableFragmentWithPolicy
        }
      }
    }
  }
  ${c}
`,p=(0,s.J1)`
  mutation useClusterResize($input: ClusterResizeInput!) @component(name: "Clusters.UI") {
    clusterResize(input: $input) {
      entity {
        ...ClusterListTableFragment
      }
      errors {
        code
        message
      }
    }
  }
  ${u}
`,m=(0,s.J1)`
  mutation useClusterUpdate($input: ClusterUpdateInput!) @component(name: "Clusters.UI") {
    clusterUpdate(input: $input) {
      entity {
        ...ClusterListTableFragment
      }
      errors {
        code
        message
      }
    }
  }
  ${u}
`,f=(0,s.J1)`
  fragment ClusterDetailsByIdFragmentV2 on Cluster {
    id
    state
    memoryMb
    clusterCores
    terminationReason {
      code
      parameters {
        key
        value
      }
    }
    attributes {
      name
      sparkVersion
      useMlRuntime
      source
      isServerless
      enableServerlessCompute
      virtualClusterSize
      kind
      hasTableAcls
      workloadType {
        clients {
          jobs
          notebooks
        }
      }
      awsAttributes {
        availability
      }
      runtimeEngine
      nodeTypeId
      driverNodeTypeId
      instancePoolId
      driverInstancePoolId
      sparkConf {
        key
        value
      }
      customTags {
        key
        value
      }
      dataSecurityMode
      accessMode
    }
    size {
      autoscale {
        minWorkers
        maxWorkers
      }
      numWorkers
    }
    creator {
      id
      name
    }
    stateMessage
    permissionLevel
    sparkInfo {
      ...SparkInfoFragment
    }
  }
  ${i.Qk}
  ${i.u9}
`,b=(0,s.J1)`
  query clusterDetailsByIdV2($id: String!) @component(name: "Notebook.Notebooks") {
    cluster(id: $id) {
      ...ClusterDetailsByIdFragmentV2
    }
  }
  ${f}
  ${i.Qk}
  ${i.u9}
`,g=(0,s.J1)`
  subscription clusterDetailsByIdV2Subscription($id: String!) @component(name: "ServingInfra.GraphQLService") {
    cluster(clusterId: $id) {
      ...ClusterDetailsByIdFragmentV2
    }
  }
  ${f}
  ${i.Qk}
  ${i.u9}
`,S=(0,s.J1)`
  query sqlWarehouseList @component(name: "Notebook.Notebooks") {
    lakehouses(skipCannotUse: true) {
      edges {
        node {
          id
          name
          state
          size
          permissions
          enableServerlessCompute
          warehouseType
          health {
            status
          }
        }
      }
    }
  }
`,y=(0,s.J1)`
  mutation sqlWarehouseStart($input: LakehouseStartInput!) @component(name: "Notebook.Notebooks") {
    lakehouseStart(input: $input) {
      errors {
        message
        code
        helpUrl
        traceId
      }
    }
  }
`,h=(0,s.J1)`
  mutation sqlWarehouseStop($input: LakehouseStopInput!) @component(name: "Notebook.Notebooks") {
    lakehouseStop(input: $input) {
      errors {
        message
        code
        helpUrl
        traceId
      }
    }
  }
`,E=(0,s.J1)`
  fragment SqlWarehouseDetailsByIdFragment on Lakehouse {
    id
    name
    state
    size
    health {
      status
    }
    enableServerlessCompute
    permissions
    warehouseType
    tags {
      customTags {
        key
        value
      }
    }
  }
`,v=(0,s.J1)`
  query sqlWarehouseDetailsById($id: ID!) @component(name: "Notebook.Notebooks") {
    lakehouse(id: $id) {
      ...SqlWarehouseDetailsByIdFragment
    }
  }
  ${E}
`,k=(0,s.J1)`
  subscription sqlWarehouseDetailsByIdSubscription($id: ID!) @component(name: "ServingInfra.GraphQLService") {
    lakehouse(id: $id) {
      ...SqlWarehouseDetailsByIdFragment
    }
  }
  ${E}
`},957833:(e,t,r)=>{r.d(t,{BH:()=>i,Nu:()=>s,YM:()=>a});let s="Allow cluster creation",i="Allow unrestricted cluster creation",a="Users who cannot create unrestricted clusters can still create clusters using cluster policies they have access to."},981158:(e,t,r)=>{r.d(t,{A:()=>l,p:()=>o});var s=r(342411),i=r(878723);let a="#filebrowser-popup",n="#projects-filebrowser-popup",o={WORKSPACE_ID:i.YS.WORKSPACE,PROJECTS_ID:i.YS.PROJECTS,TABLES_ID:i.YS.TABLES,CLUSTERS_ID:i.wT.Clusters,LANDING_ID:"LandingPage",JOBS_ID:i.wT.Jobs,HOMEDIR_ID:"HomeFolder",SEARCH_ID:i.YS.SEARCH,EXPERIMENTS_ID:i.kd.Experiments,MODELS_ID:i.kd.Models,DATA_EXPLORER_ID:i.wT.Explore},l={UserFolderName:"Users",GroupFolderName:"Groups",SharedFolderName:"Shared",TrashFolderName:"Trash",ProjectsFolderName:"Projects",ReposFolderName:"Repos",PinIconTitle:(0,s.zR)({id:"kvZ9tr",defaultMessage:"Pin side panels"}),NonModifiableAttribute:"_db_no_modify",IsTrashFolderAttribute:"_db_is_trash",NoChildrenAttribute:"_db_no_children",FullNameAttribute:"fullname",UserIdAttribute:"userId",OwnerIdAttribute:"ownerId",RIGHT_PANE_SELECTOR:"#overallView, .tb-title-wrapper-central",TOPBAR_SELECTOR:"#topbar",TOPBAR_ACTION_BANNER_SELECTOR:"#tb-action-banner-container",FILE_BROWSER_SELECTOR:`${a} .filebrowser`,FILE_BROWSER_WRAPPER_SELECTOR:a,SEARCH_PANEL_SELECTOR:"#searchpanel-popup .searchpanel",PROJECTS_FILE_BROWSER_SELECTOR:`${n} .filebrowser`,PROJECTS_FILE_BROWSER_WRAPPER_SELECTOR:n,DATA_PANEL_SELECTOR:".data-panel",TOP_LINK_IDENTIFIER:"top-link",DEFAULT_PANEL_WIDTH:266,WORKSPACE_FOLDER_ID:0,DUMMY_USER_PROJECT_FOLDER_ID:"dummyUserProjectFolderId",PROJECT_LEARN_MORE_LINK_ID:-456,REPO_ADD_FOLDER_LINK_ID:-789,FOLDER_TYPE:"folder",MLFLOW_EXPERIMENT_TYPE:"mlflowExperiment",FILE_TYPE:"file",NOTEBOOK_TYPE:"shell",LIBRARY_TYPE:"library",DASHBOARD_TYPE:"dashboard",TABLE_TYPE:"table",PROJECT_TYPE:"project",DBSQL_DASHBOARD_TYPE:"dbsqlDashboard",QUERY_TYPE:"query",ALERT_TYPE:"alert",ALERT_V2_TYPE:"alertV2",DESIGNER_FILE_TYPE:"designerFile",DBFS_COLUMNS_LIMIT:2,DBFS_FILE_BROWSER_PAGE_SIZE:"800",DBFS_SEARCHBOX_DELAY_MS:500,...o}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/38236.b1885c4a96.chunk.js.map