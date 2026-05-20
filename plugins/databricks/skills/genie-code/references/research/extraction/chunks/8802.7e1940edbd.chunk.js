"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[8802],{10680:(e,t,a)=>{a.d(t,{p:()=>p});var n=a(610435),r=a(692738),i=a(160603),o=a(441535),s=a(304926),l=a(518726),c=a(449853),d=a(742996);function u({children:e}){return(0,n.Y)(l.Q,{provider:i.QueryClientProvider,clientAccessor:c.queryClientByWorkspace,children:e})}function p(){let e=(0,s.jE)(),t=(0,o.W)("databricks.fe.filebrowser.enableSharedQueryClient",!1),a=t?e:c.queryClientByWorkspace.getActiveValue(),n=(0,r.useCallback)(a=>t?e.invalidateQueries(a):c.queryClientByWorkspace.getActiveValue().invalidateQueries(a),[t,e]),i=(0,r.useCallback)(()=>n((0,d.f)({})),[n]);return{FileBrowserQueryClientProvider:t?r.Fragment:u,queryClient:a,invalidateFileBrowserQueries:n,invalidateAllFilesQueries:i}}},37761:(e,t,a)=>{a.d(t,{Gz:()=>p,Zu:()=>f,M6:()=>m});var n=a(692738),r=a(928878),i=a.n(r),o=a(90114),s=a.n(o),l=a(141078);let c=(0,l.J1)`
  query GetDatabricksSettingsForJobs @component(name: "Workflows.Tasks.SQL") {
    settings {
      jobsSqlFileTaskUIEnabled
    }
  }
`,d={},u={jobsSqlFileTaskUIEnabled:!0},p=n.createContext(null);function m(){let e,t=(e=function(){let{data:e,loading:t}=(0,l.IT)(c,{fetchPolicy:"cache-and-network",pollInterval:0});if(t)return d;return s()(e?.settings??{},e=>e??void 0)}(),(0,n.useMemo)(()=>i()({...u},e),[e]));return(0,n.useMemo)(()=>({settings:{...u,...t}}),[t])}function f(){let e=(0,n.useContext)(p),t=m();return e??t}},81659:(e,t,a)=>{a.d(t,{o:()=>p});var n=a(610435),r=a(956935),i=a(986912),o=a(497895),s=a(866370),l=a(59723),c=a(123252);let d=(0,r.AH)({cursor:"progress",width:"100%",height:28,display:"flex",justifyContent:"flex-start",alignItems:"center"}),u=(0,r.AH)({borderRadius:"var(--border-radius)",height:12,width:"100%"}),p=({label:e,seed:t="",frameRate:a=60,style:r,loading:p=!0,loadingDescription:m="TitleSkeleton",...f})=>{let{theme:b}=(0,o.wn)(),g=(0,i.PT)(t)[0];return(0,n.FD)("div",{...(0,c.VG)(),css:d,style:{...r,"--border-radius":`${b.general.borderRadiusBase}px`},...f,children:[p&&(0,n.Y)(s.G,{description:m}),(0,n.Y)("span",{css:l.Q,children:e}),(0,n.Y)("div",{"aria-hidden":!0,css:[u,(0,i.q5)(b,a),{width:`calc(100% - ${g}px)`}]})]})}},120764:(e,t,a)=>{if(a.d(t,{S0:()=>A,T3:()=>R}),13057==a.j)var n=a(817148);if(13057==a.j)var r=a(352185);if(13057==a.j)var i=a(441535);if(13057==a.j)var o=a(22191);var s=a(87221);if(13057==a.j)var l=a(352954);if(13057==a.j)var c=a(919119);var d=a(993533),u=a(434700);if(13057==a.j)var p=a(911937);if(13057==a.j)var m=a(954557);if(13057==a.j)var f=a(823182);let b=(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(59276),a.e(37072),a.e(47589),a.e(17258),a.e(70426),a.e(19533),a.e(59032),a.e(67705)]).then(a.bind(a,927814));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(927814,"./ClusterMainTabs","lazy",e);return e()})()),g=(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(3752),a.e(54497),a.e(7473),a.e(36993),a.e(67590),a.e(51545),a.e(6932),a.e(20022),a.e(18294),a.e(5033),a.e(97768),a.e(24685),a.e(59276),a.e(59794),a.e(78580),a.e(55616),a.e(3330),a.e(92170),a.e(37797),a.e(11184),a.e(44004),a.e(52426),a.e(12514),a.e(22886),a.e(45854),a.e(32828),a.e(20556),a.e(40972),a.e(29580),a.e(92922),a.e(6198),a.e(95470),a.e(84245),a.e(97421),a.e(20806),a.e(47404),a.e(31083),a.e(78756),a.e(11136),a.e(64898),a.e(20805),a.e(80159),a.e(4065),a.e(75031),a.e(46729),a.e(44258),a.e(25642),a.e(36525),a.e(36933),a.e(14770),a.e(13015),a.e(2347),a.e(16506),a.e(95258),a.e(42797),a.e(68775),a.e(11022),a.e(49029),a.e(10133),a.e(84283),a.e(44341),a.e(98317),a.e(43587),a.e(35711),a.e(8089),a.e(23197),a.e(10095),a.e(62621),a.e(45738),a.e(19604),a.e(1377),a.e(17292),a.e(54894),a.e(83750),a.e(70231),a.e(92480),a.e(47323),a.e(92792),a.e(63121),a.e(79832),a.e(65084),a.e(81647),a.e(8260),a.e(27241),a.e(71046),a.e(71713),a.e(36176),a.e(46822),a.e(37140),a.e(36739),a.e(89478),a.e(13915),a.e(50536),a.e(47506),a.e(4340),a.e(95150),a.e(49019),a.e(2602),a.e(79547),a.e(83537),a.e(50621),a.e(17456),a.e(84736),a.e(47838),a.e(34678),a.e(95789),a.e(33364),a.e(38757),a.e(23516),a.e(49390),a.e(92926),a.e(51751),a.e(11528),a.e(65141),a.e(42389),a.e(57005),a.e(47399),a.e(83324),a.e(92417),a.e(44330),a.e(13535),a.e(38599)]).then(a.bind(a,248100));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(248100,"./clusters/ClusterDetail","lazy",e);return e()})()),h=(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(67590),a.e(5033),a.e(78580),a.e(55616),a.e(3330),a.e(11184),a.e(52426),a.e(22886),a.e(21141),a.e(68775),a.e(11022),a.e(49029),a.e(10133),a.e(43587),a.e(23197),a.e(10095),a.e(62621),a.e(45738),a.e(19604),a.e(99918),a.e(3341),a.e(73208),a.e(18080),a.e(49934),a.e(30908),a.e(25230),a.e(96226),a.e(90719),a.e(65376),a.e(87058)]).then(a.bind(a,624730));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(624730,"./tabs/BrickIndexListTab","lazy",e);return e()})()),k="compute.main-page.all-purpose",v="compute.main-page.automated",y="compute.main-page.sql-warehouses",I="compute.main-page.brickindex",T="compute.main-page.brickstore",w="compute.main-page.instance-pools",_="compute.main-page.gpu-pools",S="compute.main-page.policies",M="compute.main-page.apps",P="compute.main-page.database-instances",C="compute.main-page.serverless",A=new Set([k,v,y,I,T,w,_,S,M,P,C]),E=[d.e2L.UI,d.e2L.API],x={productEntityChain:[{productEntityType:s.Lm.CLUSTER,routeParamId:"computeId"}]},R=()=>[{pageId:"compute.root",esComponent:o.Es.ClustersUi,path:"/compute",element:(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(10095),a.e(45738),a.e(52530)]).then(a.bind(a,411877));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(411877,"./ClusterOutlet","lazy",e);return e()})()),children:[{pageId:"compute.main-page",path:"",element:b,children:[{access:n.g3.COMPUTE_ALL_PURPOSE,pageId:k,path:r.FI.InteractiveListPage,element:(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(20022),a.e(59794),a.e(12514),a.e(63630),a.e(10095),a.e(45738),a.e(5830),a.e(36739),a.e(47506),a.e(49019),a.e(75343),a.e(42389),a.e(75698),a.e(87003),a.e(64109)]).then(a.bind(a,964109));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(964109,"./tabs/InteractiveClustersListTab","lazy",e);return e()})()),...(0,i.W)("databricks.fe.clustercontrols.enableClusterQueriesPrefetch",!1)?{prefetchQueries:[{query:f.lc,variables:{input:{pageToken:(0,l.Ut)("pToken",{defaultValue:""}),pageSize:(0,l.au)("number",(0,l.Ut)("pSize",{defaultValue:"20"})),filterBy:{clusterName:(0,l.Ut)("cnf",{defaultValue:void 0}),creatorUserId:(0,l.Ut)("creator"),isPinned:(0,l.Ut)("pinned"),clusterSources:E,canInteractWith:!1},sortBy:{field:"DEFAULT",direction:"ASC"}},skipPolicy:!1}}]}:{}},{access:n.g3.COMPUTE_JOB,pageId:v,path:r.FI.AutomatedListPage,element:(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(20022),a.e(59794),a.e(12514),a.e(63630),a.e(10095),a.e(45738),a.e(5830),a.e(36739),a.e(47506),a.e(49019),a.e(75343),a.e(42389),a.e(75698),a.e(87003),a.e(10091)]).then(a.bind(a,610091));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(610091,"./tabs/AutomatedClustersListTab","lazy",e);return e()})())},{access:n.g3.SQL_WAREHOUSES,pageId:y,path:r.FI.SqlWarehouses,element:(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(67590),a.e(51545),a.e(20022),a.e(97768),a.e(59794),a.e(3330),a.e(59316),a.e(5400),a.e(63819),a.e(78332),a.e(45893),a.e(10229),a.e(3711),a.e(36768),a.e(356),a.e(99918),a.e(5830),a.e(30908),a.e(75041),a.e(7984),a.e(11798),a.e(13199),a.e(57958),a.e(35814),a.e(11926),a.e(61149),a.e(21410),a.e(10458),a.e(70297),a.e(33470),a.e(37702)]).then(a.bind(a,756430));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(756430,"./tabs/SqlWarehousesListTab","lazy",e);return e()})()),esComponent:o.Es.WarehouseUI},{access:n.g3.SQL_WAREHOUSES,pageId:y,path:`${r.FI.SqlWarehouses}/new`,element:(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(67590),a.e(51545),a.e(20022),a.e(97768),a.e(59794),a.e(3330),a.e(59316),a.e(5400),a.e(63819),a.e(78332),a.e(45893),a.e(10229),a.e(3711),a.e(36768),a.e(356),a.e(99918),a.e(5830),a.e(30908),a.e(75041),a.e(7984),a.e(11798),a.e(13199),a.e(57958),a.e(35814),a.e(11926),a.e(61149),a.e(21410),a.e(10458),a.e(70297),a.e(33470),a.e(37702)]).then(a.bind(a,756430));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(756430,"./tabs/SqlWarehousesListTab","lazy",e);return e()})()),esComponent:o.Es.WarehouseUI},{access:n.g3.COMPUTE_VECTOR_SEARCH,pageId:I,path:r.FI.BrickIndex,element:h,esComponent:o.Es.Brickindex},{access:n.g3.COMPUTE_ONLINE_STORES,pageId:T,path:r.FI.BrickStore,element:(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(25230),a.e(40223)]).then(a.bind(a,940223));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(940223,"./tabs/BrickStoreListTab","lazy",e);return e()})()),esComponent:o.Es.Brickstore},{access:n.g3.COMPUTE_INSTANCE_POOLS,pageId:w,path:r.FI.InstancePools,element:(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(20022),a.e(59794),a.e(10095),a.e(45738),a.e(90036)]).then(a.bind(a,498693));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(498693,"./tabs/InstancePoolsListTab","lazy",e);return e()})())},{access:n.g3.COMPUTE_GPU_POOLS,pageId:_,path:r.FI.GpuPools,element:(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(20022),a.e(59794),a.e(59202),a.e(78884)]).then(a.bind(a,332277));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(332277,"./tabs/GpuPoolsListTab","lazy",e);return e()})())},{access:n.g3.COMPUTE_CLUSTER_POLICIES,pageId:S,path:r.FI.ClusterPolicies,element:(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(20022),a.e(59794),a.e(10095),a.e(45738),a.e(72991)]).then(a.bind(a,762462));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(762462,"./tabs/ClusterPoliciesListTab","lazy",e);return e()})()),...(0,i.W)("databricks.fe.clustercontrols.enableClusterListPrefetch",!1)?{prefetchQueries:[{query:m.A,variables:{input:{}}}]}:{}},{access:n.g3.APPS,pageId:M,path:r.FI.LakehouseApps,element:(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(36993),a.e(20022),a.e(59794),a.e(79715),a.e(42934),a.e(13546),a.e(10740),a.e(3789),a.e(51987),a.e(36516),a.e(64741),a.e(37235)]).then(a.bind(a,100966));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(100966,"./tabs/LakehouseAppsListTab","lazy",e);return e()})()),esComponent:o.Es.LakehouseApps},{access:n.g3.COMPUTE_DATABASE_INSTANCES,pageId:P,path:r.FI.DatabaseInstances,element:(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(67590),a.e(59794),a.e(32828),a.e(40972),a.e(99918),a.e(83750),a.e(92480),a.e(30908),a.e(25230),a.e(57958),a.e(39712),a.e(22203),a.e(98693)]).then(a.bind(a,975242));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(975242,"./tabs/DatabaseInstancesListTab","lazy",e);return e()})()),esComponent:o.Es.Brickstore},{pageId:C,path:r.FI.Serverless,element:(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(20022),a.e(85393)]).then(a.bind(a,985393));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(985393,"./tabs/ServerlessListTab","lazy",e);return e()})())},{pageId:"compute.main-page.catch-all",path:"*",element:(0,c.P)()},{pageId:"compute.main-page.index",path:"",element:(0,c.P)()}]},{access:n.g3.COMPUTE_VECTOR_SEARCH,pageId:"component.main-page.brickindex.detail",path:`${r.FI.BrickIndex}/:endpointName`,element:(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(3752),a.e(36993),a.e(67590),a.e(51545),a.e(6932),a.e(18294),a.e(5033),a.e(97768),a.e(24685),a.e(59276),a.e(59794),a.e(78580),a.e(55616),a.e(3330),a.e(92170),a.e(11184),a.e(44004),a.e(52426),a.e(22886),a.e(32828),a.e(40972),a.e(29580),a.e(92922),a.e(95470),a.e(84245),a.e(97421),a.e(20806),a.e(47404),a.e(31083),a.e(11136),a.e(64898),a.e(25642),a.e(36525),a.e(2347),a.e(71066),a.e(42797),a.e(68775),a.e(11022),a.e(49029),a.e(10133),a.e(84283),a.e(44341),a.e(43587),a.e(8089),a.e(23197),a.e(10095),a.e(62621),a.e(45738),a.e(19604),a.e(1377),a.e(83750),a.e(92480),a.e(47323),a.e(92792),a.e(63121),a.e(79832),a.e(65084),a.e(81647),a.e(8260),a.e(71046),a.e(71713),a.e(36176),a.e(46822),a.e(37140),a.e(18080),a.e(89478),a.e(30908),a.e(13915),a.e(50536),a.e(4340),a.e(57005),a.e(47399),a.e(90719),a.e(65376),a.e(55589)]).then(a.bind(a,403767));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(403767,"./brickindex/Endpoint","lazy",e);return e()})()),esComponent:o.Es.Brickindex},{access:n.g3.COMPUTE_ALL_PURPOSE_CREATE,pageId:"compute.clusters.create",path:"/compute/clusters/new",element:(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(32305),a.e(36993),a.e(67590),a.e(51545),a.e(20022),a.e(18294),a.e(5033),a.e(59276),a.e(78580),a.e(55616),a.e(3330),a.e(37797),a.e(11184),a.e(52426),a.e(12514),a.e(22886),a.e(6198),a.e(95470),a.e(80159),a.e(47589),a.e(4065),a.e(75031),a.e(44258),a.e(43164),a.e(13015),a.e(15254),a.e(42797),a.e(68775),a.e(11022),a.e(49029),a.e(10133),a.e(84283),a.e(44341),a.e(98317),a.e(43587),a.e(35711),a.e(8089),a.e(23197),a.e(10095),a.e(62621),a.e(45738),a.e(19604),a.e(1377),a.e(70231),a.e(27241),a.e(36739),a.e(47506),a.e(49019),a.e(40211),a.e(84736),a.e(47838),a.e(34678),a.e(95789),a.e(33364),a.e(49390),a.e(65141),a.e(44330),a.e(31154),a.e(77111)]).then(a.bind(a,482387));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(482387,"./clusters/ClusterCreate","lazy",e);return e()})())},{access:n.g3.COMPUTE,pageId:"compute.clusters.detail",path:"/compute/clusters/:computeId",element:(0,c.P)(),...(0,i.W)("databricks.fe.clustercontrols.enableClusterDetailQueriesPrefetch",!1)?{prefetchQueries:[{query:p.Z5,variables:{input:{clusterId:(0,l.tR)("computeId")}}}]}:{},children:[{pageId:"compute.clusters.detail.configuration",path:"",element:g,observability:x},{pageId:"compute.clusters.detail.notebooks",path:"notebooks",element:g,observability:x},{pageId:"compute.clusters.detail.libraries",path:"libraries",element:g,observability:x},{pageId:"compute.clusters.detail.events",path:"events",element:g,observability:x},{pageId:"compute.clusters.detail.spark-ui",path:"spark-ui",element:g,observability:x},{pageId:"compute.clusters.detail.driver-logs",path:"driver-logs",element:g,observability:x},{pageId:"compute.clusters.detail.metrics",path:"metrics",element:g,observability:x},{pageId:"compute.clusters.detail.apps",path:"apps",element:g,observability:x},{pageId:"compute.clusters.detail.spark-compute-ui",path:"spark-compute-ui/:sparkNodeId",element:g,observability:x},{pageId:"compute.clusters.edit",path:"edit",element:(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(36993),a.e(67590),a.e(51545),a.e(20022),a.e(18294),a.e(5033),a.e(59276),a.e(78580),a.e(55616),a.e(3330),a.e(37797),a.e(11184),a.e(52426),a.e(12514),a.e(22886),a.e(6198),a.e(95470),a.e(80159),a.e(47589),a.e(4065),a.e(75031),a.e(44258),a.e(43164),a.e(13015),a.e(15254),a.e(42797),a.e(68775),a.e(11022),a.e(49029),a.e(10133),a.e(84283),a.e(44341),a.e(98317),a.e(43587),a.e(35711),a.e(8089),a.e(23197),a.e(10095),a.e(62621),a.e(45738),a.e(19604),a.e(1377),a.e(70231),a.e(27241),a.e(36739),a.e(47506),a.e(49019),a.e(84736),a.e(47838),a.e(34678),a.e(95789),a.e(33364),a.e(49390),a.e(65141),a.e(44330),a.e(31154),a.e(65890)]).then(a.bind(a,654684));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(654684,"./clusters/ClusterEdit","lazy",e);return e()})()),observability:x}]},{access:n.g3.COMPUTE_INSTANCE_POOLS,pageId:"compute.warm-pools.detail",path:"instance-pools/:poolId",element:(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(36993),a.e(67590),a.e(20022),a.e(18294),a.e(5033),a.e(59276),a.e(59794),a.e(78580),a.e(55616),a.e(21234),a.e(3330),a.e(11184),a.e(52426),a.e(12514),a.e(22886),a.e(6198),a.e(80159),a.e(47589),a.e(4065),a.e(46729),a.e(13015),a.e(9837),a.e(68775),a.e(11022),a.e(49029),a.e(10133),a.e(98317),a.e(43587),a.e(23197),a.e(10095),a.e(62621),a.e(45738),a.e(19604),a.e(70231),a.e(36739),a.e(47506),a.e(49019),a.e(47838),a.e(65141),a.e(5707),a.e(12153),a.e(61837)]).then(a.bind(a,859748));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(859748,"./pools/PoolDetail","lazy",e);return e()})()),observability:{productEntityChain:[{productEntityType:s.Lm.INSTANCE_POOL,routeParamId:"poolId"}]}},{access:n.g3.COMPUTE_INSTANCE_POOLS,pageId:"compute.warm-pools.create",path:"instance-pools/new",element:(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(36993),a.e(18294),a.e(5033),a.e(59276),a.e(78580),a.e(55616),a.e(3330),a.e(11184),a.e(52426),a.e(12514),a.e(22886),a.e(6198),a.e(80159),a.e(47589),a.e(4065),a.e(46729),a.e(13015),a.e(9837),a.e(68775),a.e(11022),a.e(49029),a.e(10133),a.e(98317),a.e(43587),a.e(23197),a.e(10095),a.e(62621),a.e(45738),a.e(19604),a.e(70231),a.e(36739),a.e(47506),a.e(49019),a.e(47838),a.e(65141),a.e(5707),a.e(12153),a.e(53449)]).then(a.bind(a,324461));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(324461,"./pools/PoolCreate","lazy",e);return e()})())},{access:n.g3.COMPUTE_INSTANCE_POOLS,pageId:"compute.warm-pools.edit",path:"instance-pools/:poolId/edit",element:(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(36993),a.e(18294),a.e(5033),a.e(59276),a.e(78580),a.e(55616),a.e(3330),a.e(11184),a.e(52426),a.e(12514),a.e(22886),a.e(6198),a.e(80159),a.e(47589),a.e(4065),a.e(46729),a.e(13015),a.e(9837),a.e(68775),a.e(11022),a.e(49029),a.e(10133),a.e(98317),a.e(43587),a.e(23197),a.e(10095),a.e(62621),a.e(45738),a.e(19604),a.e(70231),a.e(36739),a.e(47506),a.e(49019),a.e(47838),a.e(65141),a.e(5707),a.e(12153),a.e(44260)]).then(a.bind(a,607528));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(607528,"./pools/PoolEdit","lazy",e);return e()})()),observability:{productEntityChain:[{productEntityType:s.Lm.INSTANCE_POOL,routeParamId:"poolId"}]}},{pageId:"compute.policies",path:"policies",element:(0,c.P)(),children:[{access:n.g3.COMPUTE_CLUSTER_POLICIES,pageId:"compute.policies.create",path:"new",element:(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(3752),a.e(32305),a.e(54497),a.e(7473),a.e(20872),a.e(36993),a.e(67590),a.e(51545),a.e(6932),a.e(20022),a.e(18294),a.e(5033),a.e(1291),a.e(97768),a.e(24685),a.e(59276),a.e(99406),a.e(59794),a.e(78580),a.e(55616),a.e(21234),a.e(3330),a.e(59316),a.e(37797),a.e(11184),a.e(52426),a.e(12514),a.e(22886),a.e(45854),a.e(72263),a.e(86412),a.e(20556),a.e(35747),a.e(29580),a.e(6198),a.e(95470),a.e(5400),a.e(20806),a.e(47404),a.e(20805),a.e(80159),a.e(4065),a.e(75031),a.e(78332),a.e(13526),a.e(6854),a.e(13686),a.e(46729),a.e(44258),a.e(36933),a.e(77435),a.e(14770),a.e(13015),a.e(16506),a.e(9103),a.e(42797),a.e(68775),a.e(11022),a.e(49029),a.e(10133),a.e(43927),a.e(18650),a.e(87122),a.e(12674),a.e(4828),a.e(84283),a.e(44341),a.e(98317),a.e(43587),a.e(35711),a.e(8089),a.e(23197),a.e(10095),a.e(62621),a.e(45738),a.e(19604),a.e(356),a.e(1377),a.e(17292),a.e(34607),a.e(54694),a.e(65484),a.e(54894),a.e(79331),a.e(45524),a.e(55851),a.e(70231),a.e(23145),a.e(14528),a.e(59498),a.e(13691),a.e(35094),a.e(97091),a.e(56129),a.e(27241),a.e(36739),a.e(10297),a.e(24283),a.e(47506),a.e(95150),a.e(49019),a.e(73089),a.e(2602),a.e(79547),a.e(83596),a.e(83537),a.e(50621),a.e(17456),a.e(84736),a.e(57978),a.e(47838),a.e(23055),a.e(55404),a.e(34678),a.e(68569),a.e(98120),a.e(95789),a.e(42170),a.e(33364),a.e(48387),a.e(97236),a.e(9701),a.e(2720),a.e(59815),a.e(38757),a.e(42522),a.e(91322),a.e(88329),a.e(56843),a.e(23516),a.e(49390),a.e(60467),a.e(92926),a.e(51751),a.e(65141),a.e(8423),a.e(42389),a.e(60295),a.e(75698),a.e(92417),a.e(11445),a.e(76834),a.e(39216),a.e(63933)]).then(a.bind(a,751931));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(751931,"./policies/PolicyCreate","lazy",e);return e()})())},{access:n.g3.COMPUTE_CLUSTER_POLICIES,pageId:"compute.policies.view",path:":policyId",element:(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(3752),a.e(32305),a.e(54497),a.e(7473),a.e(20872),a.e(36993),a.e(67590),a.e(51545),a.e(6932),a.e(20022),a.e(18294),a.e(5033),a.e(1291),a.e(97768),a.e(24685),a.e(59276),a.e(99406),a.e(59794),a.e(78580),a.e(55616),a.e(21234),a.e(3330),a.e(59316),a.e(37797),a.e(11184),a.e(52426),a.e(12514),a.e(22886),a.e(45854),a.e(72263),a.e(86412),a.e(20556),a.e(35747),a.e(29580),a.e(6198),a.e(95470),a.e(5400),a.e(20806),a.e(47404),a.e(20805),a.e(80159),a.e(4065),a.e(75031),a.e(78332),a.e(13526),a.e(6854),a.e(13686),a.e(46729),a.e(44258),a.e(36933),a.e(77435),a.e(14770),a.e(13015),a.e(16506),a.e(9103),a.e(42797),a.e(68775),a.e(11022),a.e(49029),a.e(10133),a.e(43927),a.e(18650),a.e(87122),a.e(12674),a.e(4828),a.e(84283),a.e(44341),a.e(98317),a.e(43587),a.e(35711),a.e(8089),a.e(23197),a.e(10095),a.e(62621),a.e(45738),a.e(19604),a.e(356),a.e(1377),a.e(17292),a.e(34607),a.e(54694),a.e(65484),a.e(54894),a.e(79331),a.e(45524),a.e(55851),a.e(70231),a.e(23145),a.e(14528),a.e(59498),a.e(13691),a.e(35094),a.e(97091),a.e(56129),a.e(27241),a.e(36739),a.e(10297),a.e(24283),a.e(47506),a.e(95150),a.e(49019),a.e(73089),a.e(2602),a.e(79547),a.e(83596),a.e(83537),a.e(50621),a.e(17456),a.e(84736),a.e(57978),a.e(47838),a.e(23055),a.e(55404),a.e(34678),a.e(68569),a.e(98120),a.e(95789),a.e(42170),a.e(33364),a.e(48387),a.e(97236),a.e(9701),a.e(2720),a.e(59815),a.e(38757),a.e(42522),a.e(91322),a.e(88329),a.e(56843),a.e(23516),a.e(49390),a.e(60467),a.e(92926),a.e(51751),a.e(65141),a.e(8423),a.e(42389),a.e(60295),a.e(75698),a.e(92417),a.e(11445),a.e(76834),a.e(39216),a.e(65527)]).then(a.bind(a,768325));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(768325,"./policies/PolicyDetail","lazy",e);return e()})()),observability:{productEntityChain:[{productEntityType:s.Lm.CLUSTER_POLICY,routeParamId:"policyId"}]}},{access:n.g3.COMPUTE_CLUSTER_POLICIES,pageId:"compute.policies.edit",path:":policyId/edit",element:(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(3752),a.e(32305),a.e(54497),a.e(7473),a.e(20872),a.e(36993),a.e(67590),a.e(51545),a.e(6932),a.e(20022),a.e(18294),a.e(5033),a.e(1291),a.e(97768),a.e(24685),a.e(59276),a.e(99406),a.e(59794),a.e(78580),a.e(55616),a.e(21234),a.e(3330),a.e(59316),a.e(37797),a.e(11184),a.e(52426),a.e(12514),a.e(22886),a.e(45854),a.e(72263),a.e(86412),a.e(20556),a.e(35747),a.e(29580),a.e(6198),a.e(95470),a.e(5400),a.e(20806),a.e(47404),a.e(20805),a.e(80159),a.e(4065),a.e(75031),a.e(78332),a.e(13526),a.e(6854),a.e(13686),a.e(46729),a.e(44258),a.e(36933),a.e(77435),a.e(14770),a.e(13015),a.e(16506),a.e(9103),a.e(42797),a.e(68775),a.e(11022),a.e(49029),a.e(10133),a.e(43927),a.e(18650),a.e(87122),a.e(12674),a.e(4828),a.e(84283),a.e(44341),a.e(98317),a.e(43587),a.e(35711),a.e(8089),a.e(23197),a.e(10095),a.e(62621),a.e(45738),a.e(19604),a.e(356),a.e(1377),a.e(17292),a.e(34607),a.e(54694),a.e(65484),a.e(54894),a.e(79331),a.e(45524),a.e(55851),a.e(70231),a.e(23145),a.e(14528),a.e(59498),a.e(13691),a.e(35094),a.e(97091),a.e(56129),a.e(27241),a.e(36739),a.e(10297),a.e(24283),a.e(47506),a.e(95150),a.e(49019),a.e(73089),a.e(2602),a.e(79547),a.e(83596),a.e(83537),a.e(50621),a.e(17456),a.e(84736),a.e(57978),a.e(47838),a.e(23055),a.e(55404),a.e(34678),a.e(68569),a.e(98120),a.e(95789),a.e(42170),a.e(33364),a.e(48387),a.e(97236),a.e(9701),a.e(2720),a.e(59815),a.e(38757),a.e(42522),a.e(91322),a.e(88329),a.e(56843),a.e(23516),a.e(49390),a.e(60467),a.e(92926),a.e(51751),a.e(65141),a.e(8423),a.e(42389),a.e(60295),a.e(75698),a.e(92417),a.e(11445),a.e(76834),a.e(39216),a.e(58480)]).then(a.bind(a,374600));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(374600,"./policies/PolicyEdit","lazy",e);return e()})()),observability:{productEntityChain:[{productEntityType:s.Lm.CLUSTER_POLICY,routeParamId:"policyId"}]}}]},{access:n.g3.COMPUTE_ONLINE_STORES,pageId:"compute.main-page.sub",path:`${r.FI.BrickStore}/:storeName`,element:(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(3752),a.e(67590),a.e(6932),a.e(97768),a.e(24685),a.e(55616),a.e(3330),a.e(92170),a.e(44004),a.e(32828),a.e(40972),a.e(29580),a.e(92922),a.e(84245),a.e(97421),a.e(20806),a.e(47404),a.e(31083),a.e(11136),a.e(64898),a.e(25642),a.e(36525),a.e(86869),a.e(30140),a.e(89650),a.e(2347),a.e(10095),a.e(83750),a.e(92480),a.e(47323),a.e(92792),a.e(63121),a.e(79832),a.e(65084),a.e(81647),a.e(8260),a.e(71046),a.e(71713),a.e(36176),a.e(46822),a.e(37140),a.e(89478),a.e(13915),a.e(50536),a.e(4340),a.e(57005),a.e(47399),a.e(51380)]).then(a.bind(a,193319));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(193319,"./brickStore/BrickStore","lazy",e);return e()})()),esComponent:o.Es.Brickstore},{access:n.g3.COMPUTE_DATABASE_INSTANCES,esComponent:o.Es.Brickstore,pageId:"compute.database-instances",path:`${r.FI.DatabaseInstances}/:databaseInstanceName`,element:(0,u.D)(()=>(()=>{let e=()=>a.e(16561).then(a.bind(a,216561));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(216561,"./databaseInstances/DatabaseInstanceLakebaseRedirectWrapper","lazy",e);return e()})()),children:[{pageId:"compute.database-instances.detail",path:"",element:(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(3752),a.e(32305),a.e(36993),a.e(67590),a.e(51545),a.e(6932),a.e(18294),a.e(5033),a.e(1291),a.e(97768),a.e(24685),a.e(59276),a.e(99406),a.e(78580),a.e(55616),a.e(3330),a.e(92170),a.e(59316),a.e(37797),a.e(11184),a.e(44004),a.e(52426),a.e(12514),a.e(22886),a.e(45854),a.e(72263),a.e(86412),a.e(32828),a.e(40972),a.e(35747),a.e(29580),a.e(92922),a.e(6198),a.e(84245),a.e(97421),a.e(20806),a.e(47404),a.e(31083),a.e(11136),a.e(64898),a.e(13526),a.e(25642),a.e(36525),a.e(2347),a.e(95258),a.e(16242),a.e(42797),a.e(68775),a.e(11022),a.e(49029),a.e(10133),a.e(43927),a.e(18650),a.e(87122),a.e(12674),a.e(4828),a.e(84283),a.e(98317),a.e(43587),a.e(35711),a.e(23197),a.e(10095),a.e(62621),a.e(45738),a.e(19604),a.e(356),a.e(17292),a.e(34607),a.e(54694),a.e(65484),a.e(54894),a.e(79331),a.e(45524),a.e(83750),a.e(55851),a.e(70231),a.e(23145),a.e(14528),a.e(92480),a.e(47323),a.e(92792),a.e(59498),a.e(63121),a.e(13691),a.e(35094),a.e(97091),a.e(79832),a.e(56129),a.e(65084),a.e(81647),a.e(8260),a.e(71046),a.e(71713),a.e(36176),a.e(46822),a.e(37140),a.e(89478),a.e(13915),a.e(50536),a.e(4340),a.e(95150),a.e(73089),a.e(57978),a.e(59909),a.e(57005),a.e(47399),a.e(39712),a.e(82802)]).then(a.bind(a,602869));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(602869,"./databaseInstances/DatabaseInstanceDetail","lazy",e);return e()})())},{pageId:"compute.database-instances.edit",path:"edit",element:(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(36993),a.e(67590),a.e(32828),a.e(40972),a.e(3910),a.e(99918),a.e(83750),a.e(92480),a.e(30908),a.e(25230),a.e(57958),a.e(22203),a.e(28498)]).then(a.bind(a,762876));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(762876,"./databaseInstances/DatabaseInstanceEdit","lazy",e);return e()})())}]},{access:n.g3.COMPUTE,pageId:"compute.spark-ui",path:"sparkui",element:(0,c.P)(),children:[{pageId:"compute.spark-ui.driver-logs",path:":clusterId/driver-logs",element:(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(36993),a.e(20022),a.e(18294),a.e(5033),a.e(59794),a.e(12514),a.e(43164),a.e(50799),a.e(51783),a.e(48387),a.e(83324),a.e(47930),a.e(53074)]).then(a.bind(a,276293));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(276293,"./sparkUi/DriverLogs","lazy",e);return e()})()),observability:{productEntityChain:[{productEntityType:s.Lm.CLUSTER,routeParamId:"clusterId"}]}},{pageId:"compute.spark-ui.metrics",path:":clusterId/metrics",element:(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(3752),a.e(36993),a.e(67590),a.e(6932),a.e(5033),a.e(97768),a.e(24685),a.e(59794),a.e(55616),a.e(3330),a.e(92170),a.e(44004),a.e(32828),a.e(20556),a.e(40972),a.e(29580),a.e(92922),a.e(84245),a.e(97421),a.e(20806),a.e(47404),a.e(31083),a.e(78756),a.e(11136),a.e(64898),a.e(80159),a.e(4065),a.e(25642),a.e(36525),a.e(2347),a.e(95258),a.e(72605),a.e(10095),a.e(45738),a.e(83750),a.e(92480),a.e(47323),a.e(92792),a.e(63121),a.e(79832),a.e(65084),a.e(81647),a.e(8260),a.e(71046),a.e(71713),a.e(36176),a.e(46822),a.e(37140),a.e(89478),a.e(13915),a.e(50536),a.e(4340),a.e(57005),a.e(47399),a.e(13535),a.e(79818)]).then(a.bind(a,629904));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(629904,"./sparkUi/Metrics","lazy",e);return e()})()),observability:{productEntityChain:[{productEntityType:s.Lm.CLUSTER,routeParamId:"clusterId"}]}},{pageId:"compute.spark-ui.view",path:":clusterId/:root/*",element:(0,u.D)(()=>(()=>{let e=()=>a.e(1257).then(a.bind(a,1257));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(1257,"./sparkUi/SparkUi","lazy",e);return e()})()),observability:{productEntityChain:[{productEntityType:s.Lm.CLUSTER,routeParamId:"clusterId"}]}},{pageId:"compute.spark-ui.view",path:"*",element:(0,u.D)(()=>(()=>{let e=()=>a.e(86400).then(a.bind(a,386400));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(386400,"./sparkUi/LegacySparkUiCatchall","lazy",e);return e()})())}]},{access:n.g3.COMPUTE_GPU_POOLS,esComponent:o.Es.AIRuntime,pageId:"compute.gpu-pools.detail",path:"gpu-pools/:gpuPoolId",element:(0,u.D)(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(36993),a.e(20022),a.e(59276),a.e(59794),a.e(47589),a.e(51503),a.e(59202),a.e(59032),a.e(68037)]).then(a.bind(a,368037));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(368037,"./gpu_pools/GpuPoolDetail","lazy",e);return e()})())}]}]},126987:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.004 9.602a2.751 2.751 0 1 0 3.371 3.47 2.751 2.751 0 0 0 5.25 0 2.751 2.751 0 1 0 3.371-3.47A2.75 2.75 0 0 0 11.25 7h-2.5v-.604a2.751 2.751 0 1 0-1.5 0V7h-2.5a2.75 2.75 0 0 0-2.746 2.602M2.75 11a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m4.5-2.5h-2.5a1.25 1.25 0 0 0-1.242 1.106 2.76 2.76 0 0 1 1.867 1.822A2.76 2.76 0 0 1 7.25 9.604zm1.5 0v1.104c.892.252 1.6.942 1.875 1.824a2.76 2.76 0 0 1 1.867-1.822A1.25 1.25 0 0 0 11.25 8.5zM12 12.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m-5.25 0a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0M8 5a1.25 1.25 0 1 1 0-2.5A1.25 1.25 0 0 1 8 5",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="TreeIcon";let l=s},148122:(e,t,a)=>{if(a.d(t,{FS:()=>d,MI:()=>u,X1:()=>s,nu:()=>p,rc:()=>c,ug:()=>l,xQ:()=>m}),13057==a.j)var n,r=a(441535);if(13057==a.j)var i=a(227937);if(13057==a.j)var o=a(830792);let s=60,l=0,c=200;var d=((n={}).toggleSideNav="toggleSideNav",n.enterSideNavMenu="enterSideNavMenu",n.leaveSideNavMenu="leaveSideNavMenu",n.openNavMenu="openNavMenu",n);let u=()=>(0,r.W)("databricks.fe.queryInsights.enableQueryHistoryWithoutDbsqlEntitlements",!1),p=e=>{let t=(0,r.W)("databricks.fe.eda.enableUnifiedHighlightOnWorkspace",!0),a=(0,o.y)().canUseWorkspace;return t&&(0,i.vy)()&&a&&"sql-editor"!==e},m=()=>(0,r.W)("databricks.fe.renameMachineLearningToAiMl.enabled",!1)},155769:(e,t,a)=>{a.d(t,{H:()=>o,t:()=>i});var n=a(610435);a(692738);var r=a(342411);let i={maxHeight:700},o={cancelButtonText:(0,n.Y)(r.sA,{id:"ESxpRz",defaultMessage:"Cancel"}),modalTitle:(0,n.Y)(r.sA,{id:"RLYm2M",defaultMessage:"Add Repo"}),modalTitleInWorkspace:(0,n.Y)(r.sA,{id:"ruoUc9",defaultMessage:"Create Git folder"}),submitButtonText:(0,n.Y)(r.sA,{id:"bJ1VKN",defaultMessage:"Create Repo"}),submitButtonTextInWorkspace:(0,n.Y)(r.sA,{id:"hN83iv",defaultMessage:"Create Git folder"})}},159705:(e,t,a)=>{a.d(t,{Nw:()=>i,hG:()=>r,iU:()=>o,vi:()=>s});var n=a(141078);let r=(0,n.J1)`
  fragment BooleanSettingFragment on SettingspolicySetting {
    isMutable
    ref
    value {
      boolVal {
        value
      }
    }
  }
`,i=(0,n.J1)`
  fragment BooleanSettingV2Fragment on SettingspolicySettingsv2SettingValue {
    isSetByUser
    value {
      boolVal
    }
  }
`,o=(0,n.J1)`
  fragment StringSettingFragment on SettingspolicySetting {
    isMutable
    ref
    value {
      stringVal {
        value
      }
    }
  }
`,s=(0,n.J1)`
  fragment SettingsApiErrorFragment on ApiError {
    code
    message
    helpUrl
    traceId
  }
`},168351:(e,t,a)=>{a.d(t,{v:()=>f});var n=a(610435),r=a(692738),i=a(336330),o=a(258182),s=a(679360),l=a(568721),c=a(549761),d=a(726977),u=a(22191),p=a(759458),m=a(88277);function f(){let e=(0,p.Pj)((0,m.p)(),e=>e.notifications),[t,a]=r.useState(0);return(0,r.useEffect)(()=>{let e=new ResizeObserver(e=>{let{height:t}=e[0].contentRect;a(t+12)}),t=document.querySelector("#dubois-notification-portal ol");return t&&e.observe(t),()=>e.disconnect()},[]),(0,n.FD)(o.Provider,{children:[e.map(e=>{if("globalNotification"===e.apiType)return(0,n.Y)(b,{notification:e},e.uid);if("legacyNotification"===e.apiType)return(0,n.Y)(k,{notification:e},e.uid);return(0,n.Y)(n.FK,{})}),(0,n.Y)(o.Viewport,{css:{transform:`translateY(${t}px)`}})]})}function b({notification:e}){let{message:t,autoDismiss:a,level:p,title:f,uid:k,dismissible:v,children:y,esComponent:I,errorBoundaryId:T,initiatorStack:w}=e,_=()=>m.y.removeNotification(k),{uiDeployableId:S}=(0,s.K8)(),M=!!f,P="number"==typeof k?k.toString():k,C=(0,r.useCallback)((e,{componentStack:t})=>{(0,l.wV)(e,w),(0,c.n8)(e,t,T??d.s.MonolithUiGlobalNotification,I??u.Es.UiObservability,S,!1)},[I,T,w,S]);return(0,n.Y)(i.tH,{onError:C,fallback:(0,n.Y)(n.FK,{}),children:(0,n.FD)(o.Root,{componentId:"codegen_webapp_js_notifications_notficationsv2.tsx_91",id:P,severity:p,duration:h(a),open:!0,onClick:void 0===v||"both"===v||"click"===v?_:void 0,onOpenChange:_,children:[M?(0,n.Y)(o.Title,{children:f}):(0,n.Y)(o.Title,{asChild:!0,children:(0,n.Y)(g,{title:t})}),M&&(0,n.Y)(o.Description,{children:t||y}),(void 0===v||"both"===v||"button"===v)&&(0,n.Y)(o.Close,{componentId:"codegen_webapp_js_notifications_notficationsv2.tsx_107",onClick:_})]})})}let g=r.forwardRef(({title:e},t)=>(0,n.Y)("div",{ref:t,children:e}));function h(e){if(void 0===e)return;if(0===e)return 1/0;return 1e3*e}function k({notification:e}){let{message:t,description:a,uid:r,onClick:i,onClose:s,duration:l,type:c}=e,d=()=>{s?.(),m.y.removeNotification(r)};return(0,n.FD)(o.Root,{componentId:"codegen_webapp_js_notifications_notficationsv2.tsx_145",id:r,duration:h(null===l?void 0:l),onClick:()=>{i?.(),d()},onOpenChange:d,open:!0,severity:c,children:[(0,n.Y)(o.Title,{children:t}),a&&(0,n.Y)(o.Description,{children:a}),(0,n.Y)(o.Close,{componentId:"codegen_webapp_js_notifications_notficationsv2.tsx_155",onClick:d})]})}},185162:(e,t,a)=>{a.d(t,{_:()=>s});var n=a(141078);let r=(0,n.J1)`
  fragment BooleanSettingV2Fragment on SettingspolicySettingsv2SettingValue {
    name
    isSetByUser
    visibility @includeSafex(name: "databricks.fe.settings.settingV2FragmentReturnVisibility", defaultValue: false)
    value {
      boolVal
    }
  }
`,i=(0,n.J1)`
  fragment SettingsApiErrorFragment on ApiError {
    code
    message
    helpUrl
    traceId
  }
`,o=(0,n.J1)`
  query GetSettingV2Query($input: SettingspolicyserviceGetSettingV2RestRequestInput!)
  @component(name: "IdentityMgmt.InternalServices") {
    settingspolicyserviceGetSettingV2Rest(input: $input) {
      apiError {
        ...SettingsApiErrorFragment
      }
      settingValue {
        ...BooleanSettingV2Fragment
      }
    }
  }
  ${i}
  ${r}
`,s=(e,t,a,r,i)=>(0,n.IT)(o,{variables:{input:{scope:a,resourceId:t,settingName:e}},fetchPolicy:"cache-and-network",...i})},191984:(e,t,a)=>{a.d(t,{V:()=>s,_:()=>o});var n=a(141078),r=a(563861),i=a(730543);let o=(0,n.J1)`
  mutation NotebookCreateJobMutation($input: JobCreateInput!) @component(name: "Notebook.Notebooks") {
    jobCreate(input: $input) {
      errors {
        ...NotebookApiErrorFields
      }
      entity {
        id
      }
    }
  }
  ${r.vi}
`,s=e=>i.O.useMutation(o,e)},192651:(e,t,a)=>{a.d(t,{F:()=>r});class n{snacks=[];listeners=new Set;subscribe=e=>(this.listeners.add(e),()=>{this.listeners.delete(e)});getSnapshot=()=>this.snacks;notifyListeners(){this.listeners.forEach(e=>e())}addSnack(e){let t=e.uid??crypto.randomUUID();if(this.doesSnackExist(t))return t;let a={...e,id:t,open:!0,vertical:e.vertical||"top",horizontal:e.horizontal||"center",autoDismiss:e.autoDismiss??3e3};return this.snacks=[...this.snacks,a],this.notifyListeners(),t}closeSnack(e){if(!this.doesSnackExist(e))return;this.snacks=this.snacks.map(t=>t.id===e?{...t,open:!1}:t),this.notifyListeners()}deleteSnack(e){if(!this.doesSnackExist(e))return;this.snacks=this.snacks.filter(t=>t.id!==e),this.notifyListeners()}doesSnackExist(e){return this.snacks.some(t=>t.id===e)}reset(){this.snacks=[],this.notifyListeners()}}let r=new n},203796:(e,t,a)=>{a.d(t,{n:()=>i});var n=a(692738),r=a(337706);function i({name:e,defaultValue:t,codec:a,historyAction:o="replace",errorMode:s}){let l=(0,n.useCallback)(n=>{let r=n.get(e);if(null===r)return t;try{return a.deserialize(r)}catch(e){if("throw"===s)throw e;return t}},[e,t,a,s]),[c,d]=(0,r.ok)();return[(0,n.useMemo)(()=>l(c),[c,l]),(0,n.useCallback)((t,n)=>{d(n=>{let r="function"==typeof t?t(l(n)):t;return void 0===r?n.delete(e):n.set(e,a.serialize(r)),n},{replace:"replace"===o,...n})},[o,e,l,a,d])]}},227583:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.FD)("g",{fill:"currentColor",fillRule:"evenodd",clipPath:"url(#VisibleIcon_svg__a)",clipRule:"evenodd",children:[(0,n.Y)("path",{d:"M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6M6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"}),(0,n.Y)("path",{d:"M8 2A8.39 8.39 0 0 0 .028 7.777a.75.75 0 0 0 0 .466 8.389 8.389 0 0 0 15.944 0 .75.75 0 0 0 0-.466A8.39 8.39 0 0 0 8 2m0 10.52a6.89 6.89 0 0 1-6.465-4.51 6.888 6.888 0 0 1 12.93 0A6.89 6.89 0 0 1 8 12.52"})]}),(0,n.Y)("defs",{children:(0,n.Y)("clipPath",{children:(0,n.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="VisibleIcon";let l=s},235419:(e,t,a)=>{a.d(t,{T9:()=>u,h3:()=>d,n4:()=>p});var n=a(610435),r=a(621058),i=a.n(r),o=a(342411),s=a(441535),l=a(13451),c=a(686560);let d=(0,n.Y)(o.sA,{id:"4/mwdU",defaultMessage:"Tokens are disabled for your organization or you do not have permissions to use them. Please contact your administrator for more information."}),u=(0,n.Y)(o.sA,{id:"ikgjOf",defaultMessage:"Tokens are disabled for your organization. Please contact your administrator if you want them to be enabled."});class p{static tokensEnabled(){return(0,s.W)("databricks.webapp.enableTokens",!0)&&(0,l.e)("enableTokensConfig",!0)}static canUseTokens(){if(p.workspaceApprovedForTokenManagement())return(0,c.d)("userCanUseTokens_new",!1);return!0}static workspaceApprovedForTokenManagement(){return(0,s.W)("databricks.webapp.tierFlags.enableTokenManagementForTier",!1)&&(0,c.d)("dbTokenAclsAreInitialized",!1)}static tokensFeatureFlag(){return(0,s.W)("databricks.webapp.enableTokens",!0)}static toggleSetting(e,t,a){window.recordEvent("workspaceStateToggle",{personalAccessTokenState:e}),e?i().ajax({type:"POST",url:"/token/disable",success:e=>t(e),error:()=>a()}):i().ajax({type:"POST",url:"/token/enable",success:e=>t(e),error:()=>a()})}static personalAccessTokenDisabledForAccount(){return(0,s.W)("dff-safe.disable-personal-access-token-for-accounts",!1)}}},257476:(e,t,a)=>{a.d(t,{M:()=>d});var n=a(610435);a(692738);var r=a(497895),i=a(81659),o=a(810152),s=a(342411),l=a(205048);let c=(0,s.zR)({id:"7M1pmp",defaultMessage:"Loading..."});function d({description:e}){let{theme:t}=(0,r.wn)();return(0,n.FD)("div",{"data-testid":"PageBlockingSkeleton",css:{margin:t.spacing.lg},children:[(0,n.Y)(l.R,{loading:!0,description:e}),(0,n.Y)(i.o,{label:(0,n.Y)(s.sA,{...c}),style:{width:289}}),[...[,,,].keys()].map(e=>(0,n.Y)(o.I,{label:(0,n.Y)(s.sA,{...c}),seed:`s-${e}`},e))]})}},258182:(e,t,a)=>{a.d(t,{Close:()=>M,Description:()=>S,Provider:()=>P,Root:()=>w,Title:()=>_,Viewport:()=>C});var n=a(610435),r=a(956935),i=a(593932),o=a(692738),s=a(79128),l=a(224098),c=a(429608),d=a(497895),u=a(658345),p=a(40894),m=a(705639),f=a(639712),b=a(53333),g=a(123252),h=a(661748),k=a(99206);let v=e=>e.preventDefault(),y=(0,r.i7)({from:{opacity:1},to:{opacity:0}}),I=(0,r.i7)({from:{transform:"translateX(calc(100% + 12px))"},to:{transform:"translateX(0)"}}),T=(0,r.i7)({from:{transform:"translateX(var(--radix-toast-swipe-end-x))"},to:{transform:"translateX(calc(100% + 12px))"}}),w=(0,o.forwardRef)(function({children:e,severity:t="info",componentId:a,analyticsEvents:s=[l.s7.OnView],...c},u){let{theme:w,classNamePrefix:_}=(0,d.wn)(),S=(0,o.useMemo)(()=>s,[s]),M=(0,l.ei)({componentType:l.v_.Notification,componentId:a,componentSubType:l.Ie[t],analyticsEvents:S,shouldStartInteraction:!1}),{elementRef:P}=(0,b.z)({onView:M.onView});return(0,n.Y)(i.bL,{ref:u,role:"listitem",css:(0,r.AH)({"&&":{position:"relative",display:"grid",background:w.colors.backgroundPrimary,padding:12,columnGap:4,boxShadow:w.shadows.lg,borderRadius:(0,k.S)(m.c.POPOVER_BORDER_RADIUS,w.borders.borderRadiusSm),lineHeight:"20px",borderColor:`1px solid ${w.colors.border}`,gridTemplateRows:"[header] auto [content] auto",gridTemplateColumns:"[icon] auto [content] 1fr [close] auto",...(0,f.WO)(w)},[`.${_}-notification-severity-icon`]:{gridRow:"header / content",gridColumn:"icon / icon",display:"inline-flex",alignItems:"center"},[`.${_}-btn`]:{display:"inline-flex",alignItems:"center",justifyContent:"center"},[`.${_}-notification-info-icon`]:{color:w.colors.textSecondary},[`.${_}-notification-success-icon`]:{color:w.colors.textValidationSuccess},[`.${_}-notification-warning-icon`]:{color:w.colors.textValidationWarning},[`.${_}-notification-error-icon`]:{color:w.colors.textValidationDanger},'&&[data-state="open"]':{animation:`${I} 300ms cubic-bezier(0.16, 1, 0.3, 1)`},'&[data-state="closed"]':{animation:`${y} 100ms ease-in`},'&[data-swipe="move"]':{transform:"translateX(var(--radix-toast-swipe-move-x))"},'&[data-swipe="cancel"]':{transform:"translateX(0)",transition:"transform 200ms ease-out"},'&[data-swipe="end"]':{animation:`${T} 100ms ease-out`}}),...c,...(0,g.VG)(),...(0,h.W)("databricks.fe.designsystem.notification.disableSwipeToClose",!1)?{onSwipeMove:v,onSwipeEnd:v}:{},children:(0,n.FD)("span",{role:"status","aria-live":"polite","aria-atomic":"true",style:{display:"contents"},children:[(0,n.Y)(p.z,{className:`${_}-notification-severity-icon ${_}-notification-${t}-icon`,severity:t,ref:P}),e]})})}),_=(0,o.forwardRef)(function({children:e,...t},a){let{theme:o}=(0,d.wn)();return(0,n.Y)(i.hE,{ref:a,css:(0,r.AH)({fontWeight:o.typography.typographyBoldFontWeight,color:o.colors.textPrimary,gridRow:"header / header",gridColumn:"content / content",userSelect:"text"}),...t,children:e})}),S=(0,o.forwardRef)(function({children:e,...t},a){let{theme:o}=(0,d.wn)();return(0,n.Y)(i.VY,{ref:a,css:(0,r.AH)({marginTop:4,color:o.colors.textPrimary,gridRow:"content / content",gridColumn:"content / content",userSelect:"text",wordBreak:"break-word"}),...t,children:e})}),M=(0,o.forwardRef)(function(e,t){let{theme:a}=(0,d.wn)(),{closeLabel:o,componentId:l,analyticsEvents:c,...p}=e;return(0,n.Y)("div",{style:{gridColumn:"close / close",gridRow:"header / content",width:20},children:(0,n.Y)(i.bm,{ref:t,css:(0,r.AH)({color:a.colors.textSecondary,position:"absolute",right:6,top:6}),...p,asChild:!0,children:(0,n.Y)(s.$n,{componentId:l||"codegen_design-system_src_design-system_notification_notification.tsx_224",analyticsEvents:c,icon:(0,n.Y)(u.A,{}),"aria-label":o??p["aria-label"]??"Close notification"})})})}),P=({children:e,...t})=>(0,n.Y)(i.Kq,{...t,children:e}),C=e=>{let{theme:t}=(0,d.wn)();return(0,n.Y)(i.LM,{className:c.Nb,style:{position:"fixed",top:0,right:0,display:"flex",flexDirection:"column",padding:12,gap:12,width:440,listStyle:"none",zIndex:t.options.zIndexBase+100,outline:"none",maxWidth:`calc(100% - ${t.spacing.lg}px)`},...e})}},258844:(e,t,a)=>{a.d(t,{C:()=>o,h:()=>i});var n=a(497895),r=a(418230);let i=()=>{let{theme:e}=(0,n.wn)(),t=(0,r.U)(`(max-width: ${e.responsive.breakpoints.sm}px)`);return{isSmallScreen:t,isShortScreen:(0,r.U)(`(max-height: ${e.responsive.breakpoints.sm}px)`),isMediumScreen:(0,r.U)(`(max-width: ${e.responsive.breakpoints.lg}px)`)}},o=()=>{let e=window.matchMedia("(max-width: 576px)").matches;return{isSmallScreen:e,isShortScreen:window.matchMedia("(max-height: 576px)").matches,isMediumScreen:window.matchMedia("(max-width: 992px)").matches}}},270493:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("g",{clipPath:"url(#CursorIcon_svg__a)",children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.22 1.22a.75.75 0 0 1 .802-.169l13.5 5.25a.75.75 0 0 1-.043 1.413L9.597 9.597l-1.883 5.882a.75.75 0 0 1-1.413.043l-5.25-13.5a.75.75 0 0 1 .169-.802m1.847 1.847 3.864 9.937 1.355-4.233a.75.75 0 0 1 .485-.485l4.233-1.355z",clipRule:"evenodd"})}),(0,n.Y)("defs",{children:(0,n.Y)("clipPath",{children:(0,n.Y)("path",{fill:"#fff",d:"M16 0H0v16h16z"})})})]})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CursorIcon";let l=s},285376:(e,t,a)=>{if(a.d(t,{J:()=>r}),13057==a.j)var n=a(441535);let r=()=>(0,n.W)("databricks.fe.jaws.enableJobsMatrixViewLatestTasksOnly",!0)},295423:(e,t,a)=>{a.d(t,{f:()=>c});var n=a(692738),r=a(671244),i=a(653542),o=a(49586),s=a(209908);let l=50,c=({enableAccountGroups:e=!1,enableAccountServicePrincipals:t=!1,enableAccountUsers:a=!1,enableWorkspaceGroups:c=!0,enableWorkspaceServicePrincipals:d=!0,enableWorkspaceUsers:u=!0,filterText:p="",principalIdsForFiltering:m=[],principalUniqueNamesForFiltering:f=[],limit:b=l,useLite:g,skip:h=!1,isCache:k=!1}={})=>{let v=(0,s.VM)({ids:m,uniqueNames:f}),y=(0,s.L5)({ids:m,uniqueNames:f}),{subjects:I,isLoading:T,error:w,hasNextPage:_}=(0,o.zo)({source:"account",filter:p,filterPredicate:v,first:b,skip:!a||h,useLite:g,isCache:k}),{subjects:S,isLoading:M,error:P,hasNextPage:C}=(0,r.Bi)({source:"account",filter:p,filterPredicate:y,first:b,skip:!e||h,useLite:g,isCache:k}),{subjects:A,isLoading:E,error:x,hasNextPage:R}=(0,i.Q_)({source:"account",filter:p,filterPredicate:v,first:b,skip:!t||h,useLite:g,isCache:k}),{subjects:B,isLoading:D,error:L,hasNextPage:O}=(0,o.zo)({source:"workspace",filter:p,filterPredicate:v,first:b,skip:!u||h,useLite:g,isCache:k}),{subjects:$,isLoading:W,error:z,hasNextPage:F}=(0,r.Bi)({source:"workspace",filter:p,filterPredicate:y,first:b,skip:!c||h,useLite:g,isCache:k}),{subjects:U,isLoading:j,error:Y,hasNextPage:N}=(0,i.Q_)({source:"workspace",filter:p,filterPredicate:v,first:b,skip:!d||h,useLite:g,isCache:k}),V=(0,n.useMemo)(()=>{let t=[...$,...S];if(e&&c)return t.filter((e,t,a)=>t===a.findIndex(t=>t.id===e.id));return t},[S,e,c,$]),J=(0,n.useMemo)(()=>{let e=[...U,...A];if(t&&d)return e.filter((e,t,a)=>t===a.findIndex(t=>t.id===e.id));return e},[A,t,d,U]),q=(0,n.useMemo)(()=>{let e=[...B,...I];if(a&&u)return e.filter((e,t,a)=>t===a.findIndex(t=>t.id===e.id));return e},[I,a,u,B]),{subjects:G,hasNextPage:Q}=(0,n.useMemo)(()=>(0,s.GF)(p,b,V,J,q),[p,b,V,J,q]),H=(0,n.useMemo)(()=>({accountGroups:M,accountServicePrincipals:E,accountUsers:T,groups:W,servicePrincipals:j,users:D,some:M||E||T||W||j||D}),[M,E,T,W,j,D]),K=(0,n.useMemo)(()=>({accountGroups:P??null,accountServicePrincipals:x??null,accountUsers:w??null,groups:z??null,servicePrincipals:Y??null,users:L??null}),[P,x,w,z,Y,L]);return{allSubjectsMap:(0,n.useMemo)(()=>(0,s.ne)(V,J,q),[V,J,q]),errors:K,hasNextPage:!!(G.length===b&&(_||C||R||O||F||N)||Q),isLoading:H,subjects:G}}},324361:(e,t,a)=>{a.d(t,{X:()=>i});var n=a(692738),r=a(813378);function i({freezeDetectionContextBlob:e,isInDev:t,esComponent:a}){(0,n.useEffect)(()=>{let n=(0,r.k4)(a);return n.monitor({freezeDetectionContextBlob:e,isInDev:t}),()=>{n.stopMonitoring()}},[])}},329061:(e,t,a)=>{a.d(t,{$:()=>r,o:()=>s});var n=a(956935);let r=(0,n.AH)("background:linear-gradient(\n    137deg,rgba(238,86,118,0.16) 26.3%,rgba(202,66,224,0.16) 55.61%,rgba(66,153,224,0.16) 81.9%\n  ) !important;"),i=(0,n.AH)("&:hover{",r,"    transition:background ",.3,"s linear;}"),o=(0,n.AH)(r,"  &:hover{",r,"    transition:background ",.3,"s linear;}"),s=e=>{if(e)return o;return i}},394244:(e,t,a)=>{a.d(t,{AY:()=>r,VL:()=>i,ar:()=>s,sG:()=>l,ur:()=>o});var n=a(1859);function r(e){return`ingestion-${e}-`}let i=e=>({name:`${r(e)}open`,defaultValue:!1,codec:n.XE,historyAction:"push",errorMode:"throw"}),o=()=>({name:"subId",defaultValue:void 0,codec:n._p,historyAction:"push",errorMode:"throw"}),s=e=>({name:`${r(e)}-catalog`,defaultValue:void 0,codec:n._p,historyAction:"push",errorMode:"throw"}),l=e=>({name:`${r(e)}-schema`,defaultValue:void 0,codec:n._p,historyAction:"push",errorMode:"throw"})},418230:(e,t,a)=>{a.d(t,{U:()=>i});var n=a(692738),r=a(829478);function i(e){var t;return t=n.useMemo(()=>window.matchMedia(e),[e]),(0,r.useSyncExternalStore)(n.useCallback(e=>(t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}),[t]),()=>t.matches)}},449669:(e,t,a)=>{a.d(t,{I:()=>s});var n=a(610435);a(692738);var r=a(876726),i=a(140078),o=a(342411);function s(){let e=(0,o.tz)();return(0,n.Y)(r.S,{title:e.formatMessage(l.title),description:e.formatMessage(l.description),image:(0,n.Y)(i.A,{})})}let l=(0,o.YK)({title:{id:"UeUmAD",defaultMessage:"Error"},description:{id:"BCf2+O",defaultMessage:"An unexpected error has occurred. Please wait a bit and refresh the page or contact support."}})},482129:(e,t,a)=>{let n;a.d(t,{ro:()=>c,vU:()=>l});var r=a(692738),i=a(123229),o=a(976988);function s(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}let l=()=>(0,o.yz)()||(0,i.$)().get("enableEmployeeTools");function c(){let[e,t]=(0,r.useState)(n);return(0,r.useEffect)(()=>{var e;if(!l())return;let r=!1;return(e=function*(){if(n=yield(()=>{let e=()=>Promise.all([a.e(62280),a.e(20022),a.e(59794),a.e(93932),a.e(16548)]).then(a.bind(a,987587));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(987587,"./EmployeeToolsImpl","lazy",e);return e()})(),r)return;t(n)},function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){s(i,n,r,o,l,"next",e)}function l(e){s(i,n,r,o,l,"throw",e)}o(void 0)})})(),()=>{r=!0}},[]),e}},496720:(e,t,a)=>{a.d(t,{GP:()=>s,XY:()=>l,h1:()=>o});var n=a(928878),r=a.n(n);let i=(e,t)=>{if(Array.isArray(e)&&Array.isArray(t)&&!t.length)return t},o=(...e)=>r()(...e,i),s=e=>JSON.stringify(e,null,2),l=e=>{if(e instanceof Error)return e.isMock=!0,e;return{...e,isMock:!0}}},505566:(e,t,a)=>{a.d(t,{h:()=>l,p:()=>s});var n=a(610435),r=a(692738),i=a(127833);let o=r.createContext(void 0),s=({children:e})=>{let[t,a]=(0,i.rv)();return(0,n.FD)(o.Provider,{value:{notificationAPI:t},children:[e,a]})},l=()=>{let e=r.useContext(o);if(!e)throw Error("useNotification() hook may only be used within <NotificationProvider>. This is an internal filebrowser component, not a Du Bois component.");return e.notificationAPI}},508247:(e,t,a)=>{if(a.d(t,{I:()=>i,U:()=>r}),13057==a.j)var n=a(706274);let r="/ml/evals/:instanceId/*",i=()=>(0,n.K)(r)},518117:(e,t,a)=>{a.d(t,{x:()=>o});var n=a(692738),r=a(203796),i=a(394244);function o({drawerKey:e}){let[t,a]=(0,r.n)((0,i.VL)(e)),[s,l]=(0,r.n)((0,i.ur)());return{isOpen:t,subId:s,openIngestionDrawer:(0,n.useCallback)(e=>{a(!0),l(e)},[a,l])}}},531835:(e,t,a)=>{if(a.d(t,{B:()=>c,T:()=>d}),13057==a.j)var n=a(610435);if(a(692738),13057==a.j)var r=a(382908);var i=a(342411),o=a(441535);if(13057==a.j)var s=a(620839);if(13057==a.j)var l=a(67656);let c=e=>(0,o.W)("databricks.fe.budget_policy.renameServerlessPolicy",!1)?(0,n.Y)(i.sA,{id:"17TJzc",defaultMessage:"Serverless usage policies allow administrators to enforce certain cost attribution tags for serverless compute in notebooks, jobs, and DLT pipelines. Each policy can be assigned to users, groups, or service principals in order to enforce tagging requirements. <link>Learn more</link>",values:{link:e=>(0,n.Y)(r.o.Link,{componentId:"codegen_no_dynamic_webapp_web_js_settings_common_utils_budgetpolicyutils_18",href:l.R.getDbGuideUrl(s.A.BUDGET_POLICY),openInNewTab:!0,children:e})}}):(0,n.Y)(i.sA,{id:"kYtWU5",defaultMessage:"Serverless budget policies allow administrators to enforce certain cost attribution tags for serverless compute in notebooks, jobs, and DLT pipelines. Each policy can be assigned to users, groups, or service principals in order to enforce tagging requirements. <link>Learn more</link>",values:{link:e=>(0,n.Y)(r.o.Link,{componentId:"codegen_no_dynamic_webapp_web_js_settings_common_utils_budgetpolicyutils_35",href:l.R.getDbGuideUrl(s.A.BUDGET_POLICY),openInNewTab:!0,children:e})}});function d(){return(0,o.W)("databricks.budgetPolicies.isBudgetPoliciesEnableOnRegion",!1)&&((0,o.W)("budget_policy",null)??((0,o.W)("databricks.fe.clustercontrols.enableBudgetPoliciesUi",!1)||(0,o.W)("databricks.budgetPolicies.enableBudgetPoliciesFeatureByPercentage",!1)))}},550385:(e,t,a)=>{a.d(t,{Qy:()=>z,T_:()=>N,zt:()=>F});var n=a(115957),r=a(817148),i=a(920174),o=a(30472),s=a(136079),l=a(620275),c=a(326081),d=a(803939),u=a(686560),p=a(441535),m=a(13451),f=a(419374),b=a(120183),g=a(657825),h=a(641760),k=a(662013),v=a(411695),y=a(560287),I=a(805287),T=a(299147),w=a(531835),_=a(944389),S=a(482129),M=a(371303),P=a(822369),C=a(889885),A=a(783487),E=a(502581),x=a(235419),R=a(341957);function B(){return(0,g.fo)()===g.hQ.ServerlessOnly}function D(){let e=(0,I.gz)((0,C.CV)()).redash;return e.allowed&&e.availableInEnvironment}function L(){return(0,M.sT)("databricks.fe.enableWebhookDestinationsForAdminConsole",!1)}function O(){return"AWS"===(0,C.FI)("cloud")&&!B()}function $(){return!!(0,p.W)("databricks.webapp.enableGlobalInitScriptsUi",!0)&&!B()}function W(){return(0,I.gz)((0,C.CV)()).redash.allowed&&0!==(0,C.FI)("orgId")}let z=()=>{if((0,p.W)("com.databricks.backend.cluster.migrateDefaultPackageRepositoriesEnablementToPreview",!1))return(0,p.W)("pkg_repo_ui_cluster",!1)||(0,p.W)("pkg_repo_api_cluster",!1);return(0,p.W)("databricks.fe.enableDefaultPythonPackageRepositoriesInClassic",!1)},F=()=>(0,p.W)("pkg_repo_dlt",!1);function U(){return(0,v.UO)()||z()||F()}function j(){let e=(0,d.ew)();return(0,v.UO)()&&e}let Y={settings:{user:{"/profile":{"display-name":{},groups:{},"multi-factor-authentication":{[T.B]:()=>(0,p.W)("mfa_seamless_login",null)??(0,p.W)("databricks.auth.enableMfaForAccountSeamlessLogin",!1)},password:{[T.B]:()=>!1}},"/preferences":{"#general":{language:{[T.B]:()=>(0,p.W)("databricks.fe.config.wexp.enableLanguagePanel",!0)}},"#appearance":{theme:{[T.B]:()=>!0}}},"/developer":{links:{"#access-tokens":{[T.B]:()=>x.n4.tokensFeatureFlag()},"#query-snippets":{[T.B]:()=>(0,p.W)("databricks.fe.monolith.enableMigratedSqlQuerySnippetsLocation",!1)?(0,I.HB)():D()}},"#editor-settings":{[T.B]:()=>!(0,l.s4)()},"/access-tokens":{[T.B]:()=>x.n4.tokensFeatureFlag()&&(x.n4.tokensEnabled()||(0,p.W)("databricks.oauth.enableDatabricksSessionGrantTypeInSettingsUi",!1))&&x.n4.canUseTokens()&&!(0,R.C)()},"/query-snippets":{[T.B]:()=>(0,p.W)("databricks.fe.monolith.enableMigratedSqlQuerySnippetsLocation",!1)?(0,I.HB)():D()}},"/linked-accounts":{"#git-integration":{[T.B]:()=>(0,C.FI)("enableProjectTypeInWorkspace",!1)&&!(0,l.s4)()}},"/notifications":{},"/employee-tools":{[T.B]:()=>(0,S.vU)()}},governance:{[T.B]:()=>!!(0,k.Fq)()},workspace:{[T.B]:()=>(0,u.d)("isAdmin_new",!1),"/appearance":{"#sql":{[T.B]:W,plotly:{},"date-format":{},"time-format":{}},"#ai-bi":{[T.B]:()=>W(),"workspace-theme":{}},"#workspace":{name:{[T.B]:()=>A.T.getCloudProvider()!==A.L.Azure&&!(0,c.G)()},label:{[T.B]:()=>!(0,c.G)()}},"#databricks-one":{[T.B]:()=>(0,s.G9)()&&(0,u.d)("isAdmin_new",!1),"databricks-one-homepage":{}}},"/identity-and-access":{"#management-and-permissions":{users:{},groups:{},"service-principals":{[T.B]:()=>!!(0,p.W)("databricks.webapp.enableServicePrincipalsUi",!1)}},"#sso-and-sync":{sso:{[T.B]:()=>!!(0,p.W)("databricks.webapp.enableSingleSignOn",!0)}}},"/flex":{[T.B]:()=>(0,p.W)("databricks.fe.accountsui.isUnityFlexUpgradeEnabled",!1)},"/security":{"#data-security":{"instance-profiles":{[T.B]:O},"table-access-control":{[T.B]:()=>!B()&&_.A.tableAclsFeatureFlag()},"default-data-security-mode":{[T.B]:()=>!(0,c.G)()},"disable-legacy-access":{[T.B]:function(){let e=(0,u.d)("isUcOnlyEnforcementHmsOnlyExcludedAccount",!1);return(!(0,h.SB)()||e)&&(0,h.n_)()&&!(0,g.gK)()}},"disable-dbfs":{[T.B]:function(){return!(0,h.SB)()&&(0,h.n_)()&&(0,p.W)("databricks.settingspolicy.enableDisableLegacyDbfsSetting",!1)&&!(0,g.gK)()}}},"#external-access":{[T.B]:()=>(0,b.V)(),"dashboard-embedding-access-control":{}},"#egress-and-ingress":{"notebook-results-download":{},"notebook-exporting":{},"sql-results-download":{},"mlflow-run-artifact-download":{},"upload-data-using-ui":{},"notebook-table-clipboard-features":{},"store-interactive-notebook-results-in-customer-account":{[T.B]:()=>(0,p.W)("databricks.notebook.workspace-enable-storing-command-results-in-dbfs",!0)&&!(0,g.Lh)()},"volume-files-download":{[T.B]:()=>!0}},"/instance-profiles":{[T.B]:()=>O()&&(0,p.W)("databricks.webapp.tierFlags.enableInstanceProfilesByTier",!0)}},"/compute":{"#default-warehouse":{[T.B]:i.E},"#sql-warehouses":{[T.B]:W},"#environments":{[T.B]:function(){return U()||j()},"default-package-repositories":{[T.B]:U},"default-base-environments":{[T.B]:j}},"#policies":{[T.B]:w.T},"/budget-policies":{[T.B]:()=>(0,w.T)()&&(0,n.zl)(r.g3.COMPUTE_BUDGET_POLICIES)},"#serverless-interactive":{[T.B]:()=>(0,v.UO)(),"serverless-interactive-queries":{}},"#clusters":{[T.B]:()=>(0,I.gz)((0,C.CV)()).workspace.allowed&&!B(),"global-init-scripts":{[T.B]:$},"web-terminal":{},"rstudio-home-directory":{},"libraries-and-init-scripts":{[T.B]:()=>!!(0,p.W)("dff-safe.databricks.manager.unitycatalog.enableLibraryAndInitScriptOnSharedClusters",!1)},"ebs-ssd-gp3":{[T.B]:()=>A.T.getCloudProvider()===A.L.AWS&&!(0,m.e)("enableGp3",!1)},"enforce-user-isolation":{[T.B]:()=>!!(0,M.sT)("databricks.manager.enforceUserIsolation",!1)},"automatic-restart-of-long-running-clusters":{[T.B]:()=>!!(0,p.W)("databricks.webapp.enableAutorestartPanel",!1)&&A.T.getCloudProvider()!==A.L.GCP},"enforce-aws-instance-metadata":{[T.B]:()=>!!(0,p.W)("databricks.webapp.enableImdsV2AdminConfPanel",!1)&&A.T.getCloudProvider()===A.L.AWS},"flexible-node-types":{[T.B]:()=>(0,p.W)("databricks.fe.clustercontrols.enableFlexibleNodeTypesWorkspaceSetting",!1)}},"/global-init-scripts":{[T.B]:$},"/sql-warehouses":{[T.B]:W},"/default-package-repositories":{[T.B]:U},"/workspace-base-environments":{[T.B]:j}},"/usage":{[T.B]:()=>(0,p.W)("workspace_cost_chart",!1)&&(0,n.zl)(r.g3.WORKSPACE_USAGE)},"/development":{"#repos":{[T.B]:()=>(0,C.FI)("enableProjectTypeInWorkspace",!1),"git-url-allow-list":{},"enable-project-allow-list":{},"repos-ipynb-integration":{[T.B]:()=>!0}},"#dabsAuthoring":{[T.B]:()=>(0,C.FI)("enableProjectTypeInWorkspace",!1)&&(0,o.JN)()&&(0,o.qn)()}},"/notifications":{"#notification-destinations":{[T.B]:L},"#email":{sql:{[T.B]:W},mlflow:{[T.B]:()=>!(0,p.W)("dff-safe.disable-databricks-mlflow-autologging",!1)},operationalEmails:{[T.B]:()=>!!(0,p.W)("databricks.fe.notifications.enableOperationalEmailCustomRecipient",!1)}},"#promotional":{inProductTours:{[T.B]:()=>!1}},"/notification-destinations":{[T.B]:L}},"/advanced":{[T.B]:()=>!0,"#access-control":{"workspace-acl":{[T.B]:()=>(0,p.W)("databricks.fe.accesscontrol.enableWorkspaceAdminSettings",!0)||!(0,C.Nm)("enableWorkspaceAclsConfig",()=>"true"===(0,m.e)("enableWorkspaceAclsConfig","false"))},"cluster-and-jobs-acl":{[T.B]:()=>(0,p.W)("databricks.fe.accesscontrol.enableWorkspaceAdminSettings",!0)||!_.A.clusterAclsEnabled()},"password-usage":{[T.B]:()=>!!f.p.enableSingleSignOnLogin()},"workspace-access":{[T.B]:()=>(0,p.W)("databricks.fe.enableWorkspaceAccessCustomerApprovalUI",!1)},"personal-access-tokens":{[T.B]:()=>x.n4.tokensFeatureFlag()},"consumer-default-access-tool":{[T.B]:()=>(0,p.W)("databricks.fe.enableConsumerDefaultAccessSettings",!1)},"restrict-sharing-exclusive-groups":{[T.B]:()=>(0,y.d)()},"#workspace-admin-controls":{[T.B]:()=>!!f.p.enableViewAclsAdminControls(),"workspace-visibility-control":{[T.B]:()=>((0,p.W)("databricks.fe.accesscontrol.enableWorkspaceAdminSettings",!0)||!(0,C.Nm)("enforceWorkspaceViewAcls",f.p.enforceWorkspaceViewAcls))&&!!(0,C.Nm)("enableWorkspaceAclsConfig",()=>"true"===(0,m.e)("enableWorkspaceAclsConfig","false"))},"cluster-visibility-control":{[T.B]:()=>((0,p.W)("databricks.fe.accesscontrol.enableWorkspaceAdminSettings",!0)||!f.p.enforceClusterViewAcls())&&"true"===(0,m.e)("enableClusterAclsConfig","false")},"job-visibility-control":{[T.B]:()=>((0,p.W)("databricks.fe.accesscontrol.enableWorkspaceAdminSettings",!0)||!f.p.enableJobViewAcls())&&!!(0,P.o)()}}},"#storage":{},"#external-integrations":{"sso-ideas-config":{[T.B]:()=>E.t.ssoFeatureFlag()},"sso-support-config":{[T.B]:()=>E.t.ssoFeatureFlag()},"usage-analytics":{[T.B]:()=>(0,p.W)("databricks.webapp.enableHeapAnalyticsAdminUi",!1)}},"#other":{}}}}},N=(0,T.u)(Y)},554245:(e,t,a)=>{a.d(t,{g:()=>r});var n=a(802472);function r(){return document.getElementById(n.l)||document.getElementById("test-portal-container")||document.body}},593167:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(610435),r=a(692738);class i extends r.Component{timeoutId;constructor(e){super(e),this.state={hidden:!0},this.timeoutId=null}componentDidMount(){this.timeoutId=window.setTimeout(()=>{this.setState({hidden:!1})},this.props.delay??60)}componentWillUnmount(){null!==this.timeoutId&&window.clearTimeout(this.timeoutId)}render(){let{children:e}=this.props,{hidden:t}=this.state;if(t)return"";return(0,n.Y)(n.FK,{children:e})}}let o=i},597341:(e,t,a)=>{if(a.d(t,{N8:()=>b,TU:()=>f,ge:()=>m}),13057==a.j)var n=a(610435);if(a(692738),13057==a.j)var r=a(497895);if(13057==a.j)var i=a(908712);if(13057==a.j)var o=a(112439);if(13057==a.j)var s=a(407075);var l=a(342411);if(13057==a.j)var c=a(878407);if(13057==a.j)var d=a(706274);if(13057==a.j)var u=a(858383);if(13057==a.j)var p=a(81547);let m="/ml/review/*",f=()=>(0,d.K)(m),b=()=>{let e=(0,l.tz)(),{theme:t}=(0,r.wn)(),{pathname:a}=(0,u.zy)(),d=[...a.matchAll(/(?<basePath>\/ml\/review\/\S+\/\d+)(\/\w*)?/g)][0]?.groups?.basePath;if(!d)return null;return(0,n.FD)(n.FK,{children:[(0,n.Y)(p.j,{id:c.I.RagStudioInstructions,icon:(0,n.Y)(i.A,{}),name:e.formatMessage({id:"nhsV6Q",defaultMessage:"Instructions"}),to:`${d}/instructions`,css:{marginTop:t.spacing.sm}}),(0,n.Y)(p.j,{id:c.I.RagStudioReview,icon:(0,n.Y)(o.A,{}),name:e.formatMessage({id:"8JGGr2",defaultMessage:"Chats to Review"}),to:`${d}/review`}),(0,n.Y)(p.j,{id:c.I.RagStudioChat,icon:(0,n.Y)(s.A,{}),name:e.formatMessage({id:"DnN7Ov",defaultMessage:"Test the bot"}),to:`${d}/chat`})]})}},641208:(e,t,a)=>{a.d(t,{dN:()=>M,gg:()=>S,m0:()=>v,lJ:()=>T,DH:()=>k,mb:()=>_,yy:()=>w,T:()=>I,go:()=>y});var n=a(141078),r=a(239362),i=a(543963),o=a(831358),s=a(984568);let l=(0,n.J1)`
  fragment JobsSortableTask on JobsTaskSettings {
    taskKey
    dependsOn {
      taskKey
    }
  }
`,c=(0,n.J1)`
  fragment TaskStateTooltipFragment on JobsRunTask {
    runId
    ...TaskGitSourceSnapshotFragment
    clusterInstance {
      clusterId
    }
    durationInfo {
      startTime
      endTime
      executionDuration
      setupDuration
      startTime
      cleanupDuration
      runDuration
      queueDuration @include(if: $includeQueueDuration)
      waitDuration
      estimatedWaitingEndTime
        @includeSafex(name: "databricks.elasticspark.performance.enableWaitingState", defaultValue: false)
    }
    runTimings @includeSafex(name: "databricks.fe.jaws.enableRunTimings", defaultValue: false) {
      executionTimestamps {
        queuedMs
        waitingForResourcesOrPythonStartingMs
        libraryInstallationMs
        runningMs
      }
      repairsAccumulatedDurations {
        queuedAccumulatedMs
        waitingForResourcesOrPythonStartingAccumulatedMs
        runningAccumulatedMs
      }
    }
    state {
      ...RunStateFragment
    }
    status {
      ...RunStatusFragment
    }
    settings {
      taskKey
      dependsOn {
        taskKey
      }
      task {
        ...TaskTypeDetailsFragment
      }
      clusterSpec {
        existingClusterId
        newCluster {
          ...JobsNewClusterDetails
        }
        jobClusterKey
      }
    }
    effectivePerformanceTarget
    effectiveCompute {
      hardwareAccelerator
      memory
    }
  }

  ${r.L1}
  ${s.f5}
  ${i.DP}
  ${i.WB}
  ${r.Bv}
  ${o.j}
  ${o.E}
`,d=(0,n.J1)`
  fragment JobsJobTasksDependencies on JobsJob {
    jobId
    settings {
      durationWarningSeconds
      health {
        rules {
          metric
          op
          value
        }
      }
      tasks {
        ...JobsSortableTask
      }
    }
  }
  ${l}
`,u=(0,n.J1)`
  fragment TaskStateTooltipRunFragment on JobsRun {
    jobId
    runId
    runName
    creatorUserName
    creatorUser {
      ...RichUserData
    }
    creatorPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
      ...AclPrincipalData
    }
    jobClusters {
      newCluster {
        ...JobsNewClusterDetails
      }
      jobClusterKey
    }
    overridingParameters {
      ...TaskTypeDetailsOverridingParametersFragment
    }
  }
  ${s.f5}
  ${r.qe}
  ${o.j}
  ${o.E}
`;if(13057==a.j)var p=a(285376);if(13057==a.j)var m=a(756340);var f=a(659789);let b=(0,n.J1)`
  fragment RunTaskSettings on RunTaskSettings {
    taskKey
    description
    dependsOn {
      ...TaskDependency
    }
    runIf
    task {
      ...TaskAction
    }
    clusterSpec {
      ...ClusterDetails
    }
    timeoutSeconds
    durationWarningSeconds
  }
  ${s.lu}
  ${s.IB}
  ${s.VM}
`,g=(0,n.J1)`
  fragment RunTask on RunTask {
    id
    settings {
      ...RunTaskSettings
    }
    status
    active
    message
    startTime
    durationMillis
    clusterId
    sparkContextId
  }
  ${b}
`,h=(0,n.J1)`
  fragment RunTriggerInfo on RunTriggerInfo {
    runJobTask {
      runId
      jobId
      taskKey
      parentRunId
    }
    table {
      details {
        tableName
        version
        commitTimestamp
      }
    }
  }
`;(0,n.J1)`
  fragment RunDetails on Run {
    status
    active
    message
    runId
    idInJob
    originalAttemptId
    startTime
    durationMillis
    queueReason @include(if: $includeQueueReason)
    trigger
    triggerInfo {
      ...RunTriggerInfo
    }
    overridingParameters {
      ...RunParameters
    }
    clusterId
    sparkContextId
    runType
    tasks {
      ...RunTask
    }
    jobParameters @include(if: $includeJobParameters) {
      name
      value
      default
    }
  }
  ${h}
  ${g}
  ${f.M}
`,(0,n.J1)`
  fragment JobRunDetails on Job {
    activeRuns(first: $first, after: $after, expandTriggerInfo: $expandTriggerInfo) {
      edges {
        node {
          ...RunDetails
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;let k=(0,n.J1)`
  mutation RunCancel($input: RunCancelInput!) @component(name: "Workflows.Orchestration.Other") {
    runCancel(input: $input) {
      error {
        message
      }
      errors {
        ...ApiErrorFields
      }
    }
  }
  ${f.n}
`,v=(0,n.J1)`
  query MatrixViewRunsQuery(
    $jobId: ID!
    $jobIdLong: Long!
    $first: Int!
    $offset: String!
    $startTimeFrom: Long
    $startTimeTo: Long
    $expandTriggerInfo: Boolean
    $includeQueueDuration: Boolean = false
    $includeQueueReason: Boolean = false
    $includeJobParameters: Boolean = false
    $includeRunStatus: Boolean = false
    $latestTasksOnly: Boolean = false
    $expandTasks: Boolean = true
    $lazyLoadTaskTooltip: Boolean = false
  ) @component(name: "Workflows.Observability.Graphs") {
    jobsGetJob(input: { jobId: $jobIdLong }) {
      job {
        ...JobsJobTasksDependencies
        settings {
          parameters @include(if: $includeJobParameters) {
            name
            default
          }
        }
      }
    }
    jobsListRunsPaginated(
      jobId: $jobId
      first: $first
      after: $offset
      expandTasks: $expandTasks
      expandTriggerInfo: $expandTriggerInfo
      startTimeFrom: $startTimeFrom
      startTimeTo: $startTimeTo
      latestTasksOnly: $latestTasksOnly
    ) {
      jobsRuns {
        pageInfo {
          hasNextPage
        }
        edges {
          node {
            ...JobRunDetailsSectionFragment
            ...TaskStateTooltipRunFragment
            runPageUrl
            tasks {
              # This is only the basic information that is required to render
              # the matrix view's rectangles. Additional information like
              # notebook path, task type, etc. will be loaded lazily on
              # hover from TaskStateTooltipFragment
              runId
              runPageUrl
              state {
                ...RunStateFragment
              }
              settings {
                taskKey
                dependsOn {
                  taskKey
                }
              }
              attemptNumber
              # This will be loaded lazily on hover from
              ...TaskStateTooltipFragment @skip(if: $lazyLoadTaskTooltip)
            }
          }
        }
      }
    }
  }

  ${i.DP}
  ${d}
  ${r.Wg}
  ${c}
  ${u}
`,y=25;function I({jobId:e,jobIdLong:t,offset:a,startTimeFrom:n,startTimeTo:r,expandTasks:i}){return{query:v,variables:{jobId:e,jobIdLong:t,first:y,offset:a,startTimeTo:r,startTimeFrom:n,latestTasksOnly:(0,p.J)(),expandTasks:i,includeRunStatus:!0,...(0,m.h)()?{lazyLoadTaskTooltip:!0,expandTriggerInfo:!1,includeQueueDuration:!1,includeQueueReason:!1}:{lazyLoadTaskTooltip:!1,expandTriggerInfo:!0,includeQueueDuration:!0,includeQueueReason:!0}}}}let T=(0,n.J1)`
  query MatrixViewTooltipQuery(
    $jobId: Long!
    $runId: Long!
    $expandTriggerInfo: Boolean
    $includeQueueDuration: Boolean = false
    $includeQueueReason: Boolean = false
  ) @component(name: "Workflows.Observability.Graphs") {
    jobsGetRun: jobsGetRunWithApiVersion(
      input: { jobId: $jobId, numberInJob: $runId, expandTriggerInfo: $expandTriggerInfo, onlyLatest: true }
      useApi21: true
    ) {
      run {
        tasks {
          runPageUrl
          attemptNumber
          ...TaskStateTooltipFragment
        }
      }
    }
  }

  ${c}
`,w=(0,n.J1)`
  mutation RunRepair($input: JobsRepairRunInput!) @component(name: "Workflows.Orchestration.Other") {
    jobsRepair(input: $input) {
      repairId
      apiError {
        ...ApiErrorFields
      }
    }
  }
  ${f.n}
`,_=(0,n.J1)`
  mutation RunDelete($input: RunDeleteInput!) @component(name: "Workflows.Orchestration.Other") {
    runDelete(input: $input) {
      error {
        message
      }
      errors {
        ...ApiErrorFields
      }
    }
  }
  ${f.n}
`,S=(0,n.J1)`
  query JobRecentTerminatedRuns($id: Long!, $limit: Int!, $includeQueueReason: Boolean = false)
  @component(name: "Workflows.Observability.Lists") {
    jobsListRuns(input: { jobId: $id, state: ["TERMINATED"], limit: $limit }) {
      runs {
        numberInJob
        state {
          ...RunStateFragment
        }
      }
    }
  }
  ${i.DP}
`,M=(0,n.J1)`
  query GetRunOutput($runId: Long!, $skipAdditionalAclChecks: Boolean = false)
  @component(name: "Workflows.Observability.Graphs") {
    jobsGetRunOutput(input: { runId: $runId, skipAdditionalAclChecks: $skipAdditionalAclChecks }) {
      runOutput {
        error
        info
        commonNotebookOutput {
          logs
          logsTruncated
          errorTrace
        }
        runJobOutput {
          runId
        }
        sqlOutput {
          queryOutput {
            queryText
            outputLink
            warehouseId
            sqlStatements {
              lookupKey
            }
          }
          fileOutput {
            queryText
            warehouseId
            sqlStatements {
              lookupKey
            }
            queryResult {
              columns {
                name
                type
              }
              rows {
                values {
                  stringValue
                }
              }
              truncated
            }
          }
          alertOutput {
            queryText
            outputLink
            warehouseId
            sqlStatements {
              lookupKey
            }
            alertState
          }
          dashboardOutput {
            widgets {
              widgetId
              widgetTitle
              status
              error {
                message
              }
              startTime
              endTime
            }
          }
        }
        pipelineOutput {
          pipelineUpdateId
          pipelineRequestId
        }
        dbtOutput {
          artifactsLink
        }
        dbtPlatformOutput @includeSafex(name: "dbt_cloud_task", defaultValue: false) {
          dbtPlatformJobRunId
          dbtPlatformJobRunUrl
          dbtPlatformJobRunOutput {
            index
            name
            status
            logs
          }
        }
        notebookOutput {
          result
          truncated
        }
        sparkJarOutput {
          stdout
          stderr
        }
        conditionOutput {
          op
          left
          right
          outcome
        }
      }
    }
  }
`},662013:(e,t,a)=>{a.d(t,{Fi:()=>u,Fq:()=>o,Px:()=>p,dw:()=>l,eR:()=>s,gs:()=>d,yX:()=>c});var n=a(342411),r=a(441535),i=a(921195);function o(){return!!(0,r.W)("data_gov_dashboard",null)&&(0,r.W)("databricks.fe.uc.enableGovHub",!1)}function s(){return l()&&(0,r.W)("databricks.fe.datamonitoring.dqmCatalogExplorerEntrypointEnabled",!1)}function l(){let e=(0,r.W)("dm_anomaly_detection",null)??(0,r.W)("anomaly_detection_ws",null)??(0,r.W)("databricks.datamonitoring.enableAnomalyDetection",!1);return(0,r.W)("databricks.datamonitoring.dataMonitoringEnabledForShard",!1)&&e}function c(){let e=(0,r.W)("dataclassificationws",!1)||(0,r.W)("dataclassificationv2",!1),t=(0,r.W)("databricks.dataclassification.enabledRegions",!1);return e&&t}let d={govHub:{label:(0,n.zR)({id:"In+N7F",defaultMessage:"Governance Hub"}),description:(0,n.zR)({id:"YlR3y/",defaultMessage:"Centralized data governance hub"}),url:"/settings/governance/data"},dataAdmin:{label:(0,n.zR)({id:"RmoZJl",defaultMessage:"Data Administration"}),description:(0,n.zR)({id:"B1ozy1",defaultMessage:"Manage metastore configurations"}),url:"/governance/metastore"},tagPolicies:{label:(0,n.zR)({id:"HEJw16",defaultMessage:"Governed Tags"}),description:(0,n.zR)({id:"GgHEzk",defaultMessage:"Tag usage controls"}),get url(){return(0,i.Ng)()}},manageDiscover:{label:(0,n.zR)({id:"MWi/p0",defaultMessage:"Manage Discovery"}),description:(0,n.zR)({id:"zZZqgy",defaultMessage:"Organize data assets by business area or function"}),url:"/governance/manage-discover"},dataQuality:{label:(0,n.zR)({id:"LidA53",defaultMessage:"Data Quality Monitoring"}),description:(0,n.zR)({id:"CDMKT9",defaultMessage:"Monitor quality incidents"}),url:"/governance/data-quality-monitoring"},dataClassification:{label:(0,n.zR)({id:"20rqnv",defaultMessage:"Data Classification"}),description:(0,n.zR)({id:"xp7jGj",defaultMessage:"Automatically detect sensitive data"}),url:"/governance/data-classification"}};function u(){return!!(0,r.W)("databricks.fe.uc.disableSystemTableService",!1)}function p(){return(0,r.W)("databricks.fe.uc.enableManagePermissions",!1)}},693552:(e,t,a)=>{a.d(t,{M:()=>v,k:()=>y});var n=a(610435),r=a(956935),i=a(692738),o=a(12414),s=a(672952),l=a(863708),c=a(726977),d=a(22191),u=a(449669),p=a(497895),m=a(382908),f=a(342411);let b=({link:e})=>{let{theme:t}=(0,p.wn)(),a=e??"https://docs.databricks.com/notebooks/notebook-assistant-faq.html";return(0,n.Y)("div",{style:{display:"grid",placeItems:"center",textAlign:"center",height:"100%",color:t.colors.textSecondary},children:(0,n.Y)("div",{children:(0,n.Y)(f.sA,{id:"PrKHVe",defaultMessage:"<databricksFAQ>Genie Code</databricksFAQ> is currently disabled for your workspace. Ask your Databricks administrator to enable <enableAssistant>Genie Code</enableAssistant>.",values:{databricksFAQ:e=>(0,n.Y)(m.o.Link,{componentId:"disabled-chat-sidebar-genie-faq-link",href:a,openInNewTab:!0,children:e}),enableAssistant:e=>(0,n.Y)(m.o.Link,{componentId:"disabled-chat-sidebar-enable-assistant-link",href:`${a}#q-how-do-i-enable-databricks-assistant`,openInNewTab:!0,children:e})}})})})};var g=a(620839);function h(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}let k=i.lazy(()=>{var e;return(e=function*(){let{ChatSidebarNativeFeaturePlugin:e}=yield(()=>{let e=()=>Promise.all([a.e(62280),a.e(6932),a.e(1291),a.e(97768),a.e(24685),a.e(99406),a.e(21234),a.e(92170),a.e(1990),a.e(78632),a.e(39676),a.e(31813),a.e(51362),a.e(26881),a.e(64724),a.e(68775),a.e(11022),a.e(43927),a.e(18650),a.e(87122),a.e(12674),a.e(4828),a.e(90489),a.e(64666),a.e(30259),a.e(13962),a.e(22831),a.e(80086),a.e(51818),a.e(87385),a.e(58415),a.e(79637),a.e(62762),a.e(48898),a.e(6431)]).then(a.bind(a,622844));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(622844,"$project/notebook/sidebar/chat/NotebookChatSidebarTextArea","lazy",e);return e()})();yield e().preload();let t=()=>Promise.all([a.e(62280),a.e(62394),a.e(3752),a.e(32305),a.e(54497),a.e(33764),a.e(78277),a.e(7473),a.e(20872),a.e(36993),a.e(67590),a.e(51545),a.e(6932),a.e(20022),a.e(18294),a.e(5033),a.e(1291),a.e(97768),a.e(24685),a.e(59276),a.e(99406),a.e(59794),a.e(78580),a.e(55616),a.e(21234),a.e(3330),a.e(92170),a.e(59316),a.e(37797),a.e(11184),a.e(1990),a.e(44004),a.e(78632),a.e(52426),a.e(12514),a.e(39676),a.e(31813),a.e(51362),a.e(22886),a.e(26881),a.e(45854),a.e(72263),a.e(86412),a.e(32828),a.e(20556),a.e(40972),a.e(35747),a.e(29580),a.e(92922),a.e(6198),a.e(95470),a.e(5400),a.e(84245),a.e(97421),a.e(20806),a.e(37072),a.e(47404),a.e(10596),a.e(63819),a.e(60675),a.e(31083),a.e(78756),a.e(11136),a.e(64898),a.e(89187),a.e(20805),a.e(81318),a.e(80159),a.e(97786),a.e(70419),a.e(46184),a.e(14243),a.e(4065),a.e(86107),a.e(17007),a.e(78332),a.e(13526),a.e(49342),a.e(6854),a.e(13686),a.e(71944),a.e(97527),a.e(22249),a.e(51778),a.e(98947),a.e(26378),a.e(52009),a.e(79601),a.e(72712),a.e(77104),a.e(69756),a.e(7612),a.e(59352),a.e(77435),a.e(33719),a.e(35550),a.e(62567),a.e(51750),a.e(17746),a.e(42797),a.e(68775),a.e(11022),a.e(49029),a.e(10133),a.e(43927),a.e(18650),a.e(87122),a.e(12674),a.e(4828),a.e(84283),a.e(44341),a.e(98317),a.e(43587),a.e(35711),a.e(8089),a.e(23197),a.e(90489),a.e(64666),a.e(10095),a.e(30259),a.e(62621),a.e(45738),a.e(19604),a.e(13962),a.e(22831),a.e(80086),a.e(51818),a.e(87385),a.e(58415),a.e(356),a.e(1377),a.e(17292),a.e(34607),a.e(54694),a.e(65484),a.e(54894),a.e(79331),a.e(45524),a.e(83750),a.e(55851),a.e(70231),a.e(23145),a.e(14528),a.e(92480),a.e(47323),a.e(92792),a.e(59498),a.e(63121),a.e(13691),a.e(35094),a.e(97091),a.e(79832),a.e(56129),a.e(79637),a.e(65084),a.e(81647),a.e(8260),a.e(27241),a.e(71046),a.e(71713),a.e(36176),a.e(46822),a.e(36921),a.e(62762),a.e(37140),a.e(18080),a.e(48898),a.e(82031),a.e(42272),a.e(36739),a.e(89478),a.e(10297),a.e(95996),a.e(44084),a.e(30908),a.e(24283),a.e(13915),a.e(50536),a.e(4340),a.e(60548),a.e(95150),a.e(73089),a.e(2602),a.e(79547),a.e(84056),a.e(73306),a.e(83596),a.e(83537),a.e(50621),a.e(40211),a.e(43057),a.e(17456),a.e(84736),a.e(57978),a.e(78284),a.e(23055),a.e(55404),a.e(60687),a.e(98120),a.e(42170),a.e(33364),a.e(28449),a.e(48387),a.e(71553),a.e(97236),a.e(79579),a.e(9701),a.e(38757),a.e(42522),a.e(35813),a.e(91322),a.e(33584),a.e(50068),a.e(29672),a.e(33754),a.e(6850),a.e(65421),a.e(37445),a.e(2661),a.e(18397),a.e(39579),a.e(16796),a.e(23490),a.e(2919),a.e(4994),a.e(48383),a.e(44857),a.e(9320),a.e(51751),a.e(69394),a.e(57512),a.e(2825),a.e(80060),a.e(23376),a.e(53024),a.e(48457),a.e(72360),a.e(14003),a.e(72826),a.e(50460),a.e(66233),a.e(97821),a.e(19986),a.e(83907),a.e(45582),a.e(11999),a.e(12729),a.e(38544),a.e(13546),a.e(48537),a.e(46241),a.e(62564),a.e(28453),a.e(50092),a.e(25706),a.e(77748),a.e(402),a.e(36390),a.e(45392),a.e(71833),a.e(12869),a.e(43756),a.e(46383),a.e(40380),a.e(70436),a.e(31190),a.e(56555)]).then(a.bind(a,466307));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(466307,"../GlobalChatSidebar","lazy",t);return t()},function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){h(i,n,r,o,s,"next",e)}function s(e){h(i,n,r,o,s,"throw",e)}o(void 0)})})()}),v=()=>{let{value:e,loading:t}=(0,s.er)();return(0,n.Y)(l.JR,{errorBoundaryId:c.s.AssistantPanelNotebook,esComponent:d.Es.Assistant,fallback:(0,n.Y)(u.I,{}),children:(0,n.Y)("div",{"data-testid":"global-chat-sidebar",css:{display:"flex",flexDirection:"column",height:"100%",width:"100%"},children:(0,n.FD)(i.Suspense,{fallback:(0,n.Y)(y,{}),children:[t&&(0,n.Y)(y,{}),!t&&e&&(0,n.Y)(k,{}),!t&&!e&&(0,n.Y)(b,{link:g.A.DATABRICKS_ASSISTANT_FAQ})]})})})},y=()=>(0,n.Y)("div",{css:{position:"relative",width:"100%",height:"100%"},children:(0,n.Y)(o.y,{css:(0,r.AH)("position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);"),label:"Loading",size:"large"})})},731167:(e,t,a)=>{a.d(t,{EJ:()=>R,N7:()=>A,QF:()=>x,Sr:()=>E,Td:()=>P,er:()=>D,ur:()=>B,wn:()=>M});var n=a(452137),r=a.n(n),i=a(692738),o=a(737358),s=a(497895);if(13057==a.j)var l=a(672952);if(13057==a.j)var c=a(136079);if(13057==a.j)var d=a(620275);var u=a(418230),p=a(878723),m=a(223410),f=a(707865);if(13057==a.j)var b=a(74005);var g=a(508247),h=a(958336),k=a(714953);if(13057==a.j)var v=a(178949);if(13057==a.j)var y=a(860742);if(13057==a.j)var I=a(391763);var T=a(597341),w=a(148122),_=a(184123),S=a(846665);let M="sidebarStateChanged",P=()=>{let e=null!==(0,o.B6)(T.ge,window.location.pathname),t=null!==(0,o.B6)(g.U,window.location.pathname),a=null!==(0,o.B6)(h.v,window.location.pathname),n=null!==(0,o.B6)(f.H1,window.location.pathname);return(!(0,_.q)()||e||a)&&!t&&!n},C=()=>P()?w.ug:w.X1,A=(e=!1)=>{if(L.getIsPersonaSidebarHidden())return 0;let t=L.getPersonaSidebarEffectiveMode();switch(t){case p.zF.Expanded:if(e)return C();return w.rc;case p.zF.Collapsed:return C();default:(0,S.dr)(t,`${t} is unexpected value`)}return 0},E=()=>{if(L.getPersonaSidebarMode()===p.zF.Expanded)return w.rc;return C()},x=(e=!1)=>{let{theme:t}=(0,s.wn)(),a=(0,u.U)(`not (min-width: ${t.responsive.breakpoints.md}px)`),[,n]=(0,i.useState)({});return(0,i.useEffect)(()=>L.addListener(()=>n({}),e),[n,e]),A(a)},R=()=>{let e=D(),t=(0,k.ht)(e=>"sidebar"===e.placement?e.width:0);if(e)return t;return 0},B=()=>{let{value:e}=(0,l.er)(),{value:t}=(0,l.LL)(),a=(0,I.g)(),n=(0,y.useIsSelectGroupPage)(),r=(0,_.q)(),i=(0,T.TU)(),o=(0,h.l)(),s=(0,g.I)(),u=(0,d.s4)(),p=(0,c.GF)(),m=(0,f.Mk)(),k=(0,v.j0)(),w=(0,v.ug)(),S=(0,b.F)();if(w){if(k)return!1;if(t)return!0;return!1}return e&&!a&&!n&&!i&&!r&&!s&&!o&&!u&&!p&&!m&&!S},D=()=>{let e=B(),t=(0,k.ht)(e=>e.isVisible);return e&&t};class L{static getPersonaSidebarMode(){return L.getSidebarState().personaMenuMode||p.zF.Auto}static getPersonaSidebarEffectiveMode(){let e=L.getPersonaSidebarMode();if(e===p.zF.Expanded)return e;let{openPanel:t,expandIfNotCollapsed:a}=this.getSidebarState();return t&&a?p.zF.Expanded:p.zF.Collapsed}static getIsSidebarPanelOpen(){return!!L.getSidebarState().openPanel}static getIsAssistantVisible(){return k.ht.getState().isVisible}static getIsPersonaSidebarHidden(){return L.getSidebarState().hidden}static addListener(e,t=!1){if(!window.sidebar&&t)return()=>{};return r()(window.sidebar,"Sidebar hasn't been initialized yet"),window.sidebar.events.addEventListener(M,e),()=>{window.sidebar?.events.removeEventListener(M,e)}}static getSidebarState(){let e={personaMenuMode:m.T.getPersonaMenuMode()};return window.sidebar&&window.sidebar.state||e}}},756340:(e,t,a)=>{if(a.d(t,{h:()=>r}),13057==a.j)var n=a(441535);let r=()=>(0,n.W)("databricks.fe.jaws.enableMatrixViewLazyLoadTaskRuns",!1)},796775:(e,t,a)=>{a.d(t,{d:()=>i,m:()=>r});var n=a(988759);let r=(0,a(696514).fH)("PersonaNav::ActivePersona"),i=(0,n.g)("Nav::openAppSwitcher")},802472:(e,t,a)=>{a.d(t,{P:()=>r,l:()=>n});let n="mfe-react-portals";function r(e){let t=e+"-mfe-root",a=e+"-mfe-react-root",r=e+"-mfe-notifications-portal-fallback",i=`
  <div id="${t}" class="mfe-root ${e}-ui-container">
    <div id="${n}"></div>
    <div id="${a}"></div>
    <div id="${r}"></div>
  </div>
  `.trim();return{mfeRootId:t,mfeReactRootId:a,mfeNotificationsPortalId:r,mfeShadowRootHtml:i}}},813378:(e,t,a)=>{a.d(t,{k4:()=>c,UR:()=>l});var n=a(496720),r=a(886100),i=a(879299),o=a(951165);let s=new Map;function l(e,t){let a=s.get(e);if(!a)return;a.updateMetadata(t)}function c(e){let t=s.get(e);return t||(t=new d(e),s.set(e,t)),t}class d{isDetecting=!1;worker;sendingSignal;esComponent;constructor(e){this.esComponent=e,this.worker=null,this.sendingSignal=null,this.numberOfCallers=0}freezeDetectionContextBlob={};numberOfCallers=0;updateMetadata(e){try{e&&"object"==typeof e&&(this.freezeDetectionContextBlob=(0,n.h1)(this.freezeDetectionContextBlob,e))}catch(e){r.iT.log(this.esComponent,"FreezeDetector metadata update failed:",e)}}monitor({freezeDetectionContextBlob:e,isInDev:t}){let a=(0,o.m)();if(!a||window!==a||(this.freezeDetectionContextBlob=e,this.numberOfCallers+=1,this.isDetecting))return;let n=this.getWorker();this.isDetecting=!0,n.onmessage=e=>{let{message:a,timestamp:r}=e.data;if("are-you-alive?"===a){let{context:e}=(0,i.bR)({}),a=e?.client_context,o={message:"yes-I-am-alive",timestamp:r,freezeDetectionContextBlob:this.freezeDetectionContextBlob,window:{browserTabId:window.browserTabId,navigator:{userAgent:window.navigator.userAgent},location:{search:window.location.search}},clientContext:a,fireAlertInDev:t,esComponent:this.esComponent};n.postMessage(o)}},window.addEventListener("visibilitychange",this.sendActivationMessage)}getWorker(){return this.worker??=new Worker(new URL("/"+a.u(32837),a.b),{name:"freeze-detector"}),this.worker}sendActivationMessage=()=>{"visible"===document.visibilityState?this.getWorker().postMessage({message:"I-got-activated"}):this.getWorker().postMessage({message:"I-got-deactivated"})};stopMonitoring(){if(this.numberOfCallers-=1,this.numberOfCallers>0)return;s.delete(this.esComponent),this.isDetecting=!1,window.removeEventListener("visibilitychange",this.sendActivationMessage),this.worker?.terminate(),this.worker=null,this.freezeDetectionContextBlob={},this.sendingSignal&&(clearInterval(this.sendingSignal),this.sendingSignal=null)}getFreezeDetectionContextBlob(){return this.freezeDetectionContextBlob}}},884028:(e,t,a)=>{if(a.d(t,{Fn:()=>c,iu:()=>l}),13057==a.j)var n=a(610435);var r=a(692738);if(13057==a.j)var i=a(394244);if(13057==a.j)var o=a(203796);let s=r.createContext({addOnSuccess:()=>{},removeOnSuccess:()=>{},notifyOnSuccess:()=>{}});function l({children:e}){let[t]=(0,o.n)((0,i.ur)()),[a,c]=(0,r.useState)([]),d=(0,r.useCallback)(e=>{c(t=>[...t,e])},[]),u=(0,r.useCallback)(e=>{c(t=>t.filter(t=>t!==e))},[]),p=(0,r.useCallback)(e=>{for(let n of a)n(e,t)},[a,t]);return(0,n.Y)(s.Provider,{value:{addOnSuccess:d,removeOnSuccess:u,notifyOnSuccess:p},children:e})}function c(){return(0,r.useContext)(s)}},893736:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.667 6.575c1.376.452 1.376 2.398 0 2.85l-2.472.813a1.5 1.5 0 0 0-.957.957l-.813 2.472c-.452 1.376-2.398 1.376-2.85 0l-.813-2.472a1.5 1.5 0 0 0-.956-.957l-2.473-.813c-1.376-.452-1.376-2.398 0-2.85l2.473-.813a1.5 1.5 0 0 0 .956-.956l.813-2.473c.452-1.376 2.398-1.376 2.85 0l.813 2.473a1.5 1.5 0 0 0 .957.956z",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="SparkleFillIcon";let l=s},919119:(e,t,a)=>{a.d(t,{P:()=>l});var n=a(610435),r=a(648782),i=a(774540);function o(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function s(){return(0,n.Y)(r.sv,{})}function l(){return(0,i.e)(()=>{var e;return(e=function*(){return{RouteComponent:s}},function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function s(e){o(i,n,r,s,l,"next",e)}function l(e){o(i,n,r,s,l,"throw",e)}s(void 0)})})()})}},958336:(e,t,a)=>{if(a.d(t,{l:()=>i,v:()=>r}),13057==a.j)var n=a(706274);let r="/ml/review-v2/*",i=()=>(0,n.K)(r)},968944:(e,t,a)=>{a.d(t,{w:()=>o});var n=a(610435);a(692738);var r=a(295169),i=a(342411);let o=({height:e,width:t="10px",index:a})=>{let{formatMessage:o}=(0,i.tz)();return(0,n.Y)("div",{"aria-label":o((0,i.zR)({id:"psNpoT",defaultMessage:"Loading..."})),children:(0,n.Y)(r.x,{css:{height:`${e||"32px"} !important`,width:`${t} !important`},loading:!0},`genericSkeleton_${a}`)})}},984519:(e,t,a)=>{a.d(t,{c:()=>n});let n=(0,a(696514).fH)("Jaws::CloneJob")},990272:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M2 1.75A.75.75 0 0 1 2.75 1h10.5a.75.75 0 0 1 .75.75v7.465a5.75 5.75 0 0 1-2.723 4.889l-2.882 1.784a.75.75 0 0 1-.79 0l-2.882-1.784A5.75 5.75 0 0 1 2 9.214zm1.5.75V7h3.75V2.5zm5.25 0V7h3.75V2.5zm3.75 6H8.75v5.404l1.737-1.076A4.25 4.25 0 0 0 12.5 9.215zm-5.25 5.404V8.5H3.5v.715a4.25 4.25 0 0 0 2.013 3.613z",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="ShieldIcon";let l=s}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/8802.7e1940edbd.chunk.js.map