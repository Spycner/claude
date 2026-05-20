"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[45738],{21191:(e,t,r)=>{r.d(t,{L:()=>n,b:()=>l});var i=r(141078),s=r(732948),a=r(949957);let n=(0,i.J1)`
  mutation autogenClusterResize($input: ClusterResizeClusterInput!, $skipPolicy: Boolean = true)
  @component(name: "Clusters.UI") {
    clusterResizeCluster(input: $input) {
      entity {
        ...AutogenClusterListTableFragment
      }
      apiError {
        ...ApiErrorFragment
      }
    }
  }
  ${a.Lu}
  ${s.M}
`,l=e=>(0,i.n_)(n,e)},118903:(e,t,r)=>{r.d(t,{H:()=>l,P:()=>u});var i=r(141078),s=r(417695),a=r(677933);let n=(0,i.J1)`
  mutation clusterEditPolicy($input: ClusterEditPolicyInput!) @component(name: "Clusters.UI") {
    clusterEditPolicy(input: $input) {
      apiError {
        code
        message
        helpUrl
        traceId
      }
    }
  }
`;function l(){return(0,s.t)(n,(e,t)=>{let r=e?.data?.clusterEditPolicy?.apiError;return{policyId:t.policyId||null,error:r?new a.hD(r.message??"",r?.code||void 0):null}})}let u=e=>(0,i.n_)(n,e)},160500:(e,t,r)=>{r.d(t,{p:()=>o});var i=r(141078),s=r(342295),a=r(732948),n=r(949957),l=r(823182);let u=(0,i.J1)`
  mutation autogenClusterRestart($input: ClusterRestartClusterInput!, $skipPolicy: Boolean = true)
  @component(name: "Clusters.UI") {
    clusterRestartCluster(input: $input) {
      entity {
        ...AutogenClusterListTableFragment
      }
      apiError {
        ...ApiErrorFragment
      }
    }
  }
  ${n.Lu}
  ${a.M}
`,o=e=>(0,s.Z)(u,{...e,refetchQueries:[l.lc],awaitRefetchQueries:!0})},179258:(e,t,r)=>{r.d(t,{$l:()=>I,QS:()=>M,Qw:()=>w,Sd:()=>b,ts:()=>E});var i=r(610435);r(692738);var s=r(465946),a=r(236574),n=r(932284),l=r(382831),u=r(999785),o=r(848737),c=r(697632),d=r(342411),p=r(101938),m=r(475654),f=r(205048),v=r(929117),y=r(233472);let g=(0,d.zR)({id:"b053tl",defaultMessage:"All nodes"}),C=(0,d.zR)({id:"vu6/cZ",defaultMessage:"Only executor nodes"}),h=(0,d.zR)({id:"HW4Jfw",defaultMessage:"By node"}),b=Object.freeze({id:"",ip:"",driver:!1}),I=Object.freeze({id:"executor_only",ip:"",driver:!1,executorOnly:!0}),E=Object.freeze({id:"by_node",ip:"",driver:!1,byNodeView:!0}),M=e=>e!==b.id&&e!==I.id&&e!==E.id,w=({clusterId:e,currentInstance:t,onInstanceListError:r,setCurrentInstance:M,startTime:w,endTime:P,isExecutorsOnlyEnabled:A=!1,isByNodeViewInSelectEnabled:L=!1})=>{let O=(0,d.tz)(),{startInteraction:T}=(0,p.XT)(),{getInstanceIds:R,data:U,errorMessage:$,loading:D}=(0,y.k)({variables:{clusterId:e,endTime:P,startTime:w}});$&&r($);let F=e=>{if(e.byNodeView)return O.formatMessage(h);if(e.executorOnly)return O.formatMessage(C);if(!e.id)return O.formatMessage(g);return(0,i.FD)("span",{children:[e.ip??O.formatMessage({id:"tP4nLn",defaultMessage:"Unknown IP (instance id: {id})"},{id:e.id})," ",e.driver&&(0,i.Y)(s.v,{componentId:"codegen_webapp_js_clusters_pages_cluster_metrics_page_instanceselect.tsx_84",title:"Driver",children:O.formatMessage({id:"AtRdGE",defaultMessage:"Driver"})})]})},_=[b];A&&_.push(I),L&&_.push(E);let k=[..._,...U?(U.instances??[]).filter(e=>e.id).sort((e,t)=>e.driver===t.driver?0:e.driver?-1:1).map(e=>({id:e.id??"",ip:e.ip,driver:!!e.driver})):[],...!U&&t?.id&&!t.executorOnly&&!t.byNodeView?[t]:[]];return(0,i.FD)(i.FK,{children:[(0,i.Y)(f.R,{loading:D,description:v.z.CLUSTER_METRICS_INSTANCES_LOADING}),(0,i.FD)(a.A,{componentId:"cluster-metrics-instance-select",id:"cluster-metrics-instance-select",value:t?[t.id]:[],children:[(0,i.Y)(n.g,{allowClear:!1,width:200,placeholder:O.formatMessage({id:"qEMfZL",defaultMessage:"Select an instance"}),onFocus:()=>{T(m.o.WEBAPP_CLUSTERS_METRICS_OPEN_INSTANCE_SELECT),R({variables:{input:{clusterId:e,endTime:P,startTime:w}}})},withInlineLabel:!1,"aria-label":"Resource",renderDisplayedValue:e=>{let t=k.find(t=>t.id===e);return t?F(t):e}}),(0,i.Y)(l.d,{width:200,maxHeight:300,children:(0,i.Y)(u.H,{loading:D,withProgressiveLoading:!0,children:(0,i.Y)(o.d,{children:k.map(e=>(0,i.Y)(c.cr,{value:e.id,onChange:e=>{M(k.find(t=>t.id===e)||null)},checked:t?.id===e.id,children:F(e)},e.id))})})})]})]})}},192776:(e,t,r)=>{r.d(t,{W:()=>l});var i=r(610435);r(692738);var s=r(342411),a=r(289298),n=r(869580);class l{static confirm(e){return new Promise(t=>{n.A.confirm({confirmButton:(0,i.Y)(s.sA,{id:"1emBWn",defaultMessage:"Confirm"}),cancelButton:(0,i.Y)(s.sA,{id:"rzx5db",defaultMessage:"Cancel"}),message:e,confirm:()=>t(!0),cancel:()=>t(!1)})})}static showError(e,t){(0,a.i)().addNotification({title:e,message:t,autoDismiss:5,position:"tr",level:"error"})}}},210287:(e,t,r)=>{r.d(t,{M:()=>v,m:()=>y});var i=r(446835),s=r.n(i),a=r(344833),n=r.n(a),l=r(778529),u=r.n(l),o=r(692738),c=r(849873),d=r(899490),p=r(730543),m=r(359358),f=r(954557);function v(e={}){let t=p.O.useQuery(f.A,{skip:!d.Lh.areClusterBlueprintsEnabled(),variables:{input:{}},...e});return{data:(0,o.useMemo)(()=>t.data&&{clusterPolicyList:s()(t.data?.clusterListPolicies?.policies?.map(y.mapGraphqlToClusterPolicy)??[])},[t.data]),error:t.error,loading:t.loading}}class y{static mapGraphqlToClusterPolicy(e){let t;try{if("string"!=typeof e?.policyOwnAttributes?.definition)throw Error();t=JSON.parse(e?.policyOwnAttributes?.definition),(u()(t)||"object"!=typeof t||Array.isArray(t))&&(t={})}catch{console.error(`Cannot parse definition for cluster policy ${e.policyId}`);return}return{id:e.policyId,name:e?.policyOwnAttributes?.name??"",isDefault:e.isDefault??!1,definition:t,description:e.policyOwnAttributes.description??void 0,maxClustersPerUser:e.policyOwnAttributes.maxClustersPerUser,policyFamilyId:e.policyOwnAttributes.policyFamilyId,policyFamilyVersion:e.policyOwnAttributes.policyFamilyVersion,policyFamilyLatestVersion:e.policyFamilyLatestVersion,libraries:e.policyOwnAttributes.libraries??null}}static getAllowedClusterSources(e){let t=new c.xR(e.definition.cluster_source||void 0),r=new c.xR(e.definition.cluster_type||void 0),i=m.L.filter(e=>t.validateSingleValue(e).isValid),s=d.lx.filter(e=>r.validateSingleValue(e).isValid);return n()(i.map(d.Lh.clusterSourceToClusterType),s)}}},233472:(e,t,r)=>{r.d(t,{k:()=>a});var i=r(730543),s=r(910165);let a=e=>{let[t,{data:r,error:a,loading:n}]=i.O.useLazyQuery(s.CF,{...e,variables:{input:{...e.variables}}});return{getInstanceIds:t,data:r?.clustermetricsGetInstanceIds??void 0,errorMessage:a?.message??r?.clustermetricsGetInstanceIds?.apiError?.message??void 0,loading:n}}},251439:(e,t,r)=>{r.d(t,{j:()=>l,p:()=>n});var i=r(141078),s=r(732948),a=r(949957);let n=(0,i.J1)`
  mutation autogenClusterEdit($input: ClusterEditClusterInput!, $skipPolicy: Boolean = true)
  @component(name: "Clusters.UI") {
    clusterEditCluster(input: $input) {
      entity {
        ...AutogenClusterListTableFragment
      }
      apiError {
        ...ApiErrorFragment
      }
    }
  }
  ${a.Lu}
  ${s.M}
`,l=e=>(0,i.n_)(n,e)},328957:(e,t,r)=>{r.d(t,{x1:()=>y,zY:()=>f});var i=r(916424),s=r.n(i),a=r(778529),n=r.n(a),l=r(90114),u=r.n(l),o=r(946766),c=r.n(o),d=r(173463),p=r.n(d),m=r(810095);let f=(e,t,r,i)=>{if(!e)return;if(0===e.length)return{};let a=Number(i)||6e4,n=s()(e,e=>e.chartKey);return u()(n,(e,i)=>{let s=new Map,n=[],l=c()(e.map(e=>e.samples?.[0].timestamp??r));if(void 0===l)return{data:[],seriesKeys:n};let u="unknown_series";for(let n of(1===e.length&&(u=i),p()(t+(l-t)%a,r+1,a)))s.set(n,{timestamp:Number(n)});if(e.forEach(e=>{let a=e.seriesKey??u;n.push(a),e.samples?.forEach(e=>{let n=e.timestamp;if(n<t||n>r)return;s.get(n)[a]=v(i,Number(e.value))})}),(0,m.rH)(i)?.postAggMetricTransformer){let[e,t]=(0,m.rH)(i).postAggMetricTransformer(s,n);return{data:e,seriesKeys:t}}return{data:[...s.values()],seriesKeys:n}})},v=(e,t)=>{if("DCGM_FI_DEV_FB_USED"===e)return 1024*t*1024;let r=(0,m.rH)(e);if(r?.isGpu&&r?.shouldShowPercentageNumber)return t/100;return t},y=(e,t=!1)=>{if(!e)return{data:[],nominalSeriesKeys:[]};let r=t?e.filter(e=>!e.driver):e,i=Math.ceil(Math.sqrt(r.length)),s=new Set,a=r.sort((e,t)=>(t.cpuUsage??-1)-(e.cpuUsage??-1)).map((e,t)=>{let r=Math.floor(t/i),a=g(e);return Object.keys(a).forEach(e=>s.add(e)),{...a,x:t%i,y:r}});return s.delete("cpuUsage"),s.delete("__typename"),s.delete("hostname"),{data:a,nominalSeriesKeys:[...s]}},g=e=>{let{driver:t,...r}=e;return{...r,nodeRole:n()(t)?"Unknown":t?"Driver":"Executor"}}},342295:(e,t,r)=>{r.d(t,{Z:()=>a});var i=r(730543),s=r(902957);function a(e,t){let r=i.O.useDispatch(),[a,...n]=i.O.useMutation(e,t);return[(...e)=>(r((0,s.gf)()),a(...e).finally(()=>r((0,s.vs)()))),...n]}},356973:(e,t,r)=>{r.d(t,{L:()=>o,f:()=>u});var i=r(141078),s=r(730543),a=r(677933),n=r(954557);function l(e,t,r,i,s,a,n){try{var l=e[a](n),u=l.value}catch(e){r(e);return}l.done?t(u):Promise.resolve(u).then(i,s)}let u=(0,i.J1)`
  mutation clusterPolicyDelete($input: ClusterDeletePolicyInput!) @component(name: "Clusters.UI") {
    clusterDeletePolicy(input: $input) {
      apiError {
        code
        message
        helpUrl
        traceId
      }
    }
  }
`;function o(){let[e]=s.O.useMutation(u,{refetchQueries:[{query:n.A,variables:{input:{}}}]});return t=>{var r;return(r=function*(){let r;try{r=yield e({variables:{input:{policyId:t}}})}catch(e){throw new a.hD(e.message)}let i=r?.data?.clusterDeletePolicy?.apiError;if(i)throw new a.hD(i?.message??"",i?.code??void 0)},function(){var e=this,t=arguments;return new Promise(function(i,s){var a=r.apply(e,t);function n(e){l(a,i,s,n,u,"next",e)}function u(e){l(a,i,s,n,u,"throw",e)}n(void 0)})})()}}},359358:(e,t,r)=>{r.d(t,{B:()=>s,L:()=>i});let i=["UI","API","JOB","PIPELINE","PIPELINE_MAINTENANCE"],s=0x7fffffff},417695:(e,t,r)=>{r.d(t,{t:()=>u});var i=r(289298),s=r(934858),a=r(730543),n=r(677933);function l(e,t,r,i,s,a,n){try{var l=e[a](n),u=l.value}catch(e){r(e);return}l.done?t(u):Promise.resolve(u).then(i,s)}function u(e,t){let r=a.O.useIntl(),[u]=a.O.useMutation(e);return(e,a,o,c)=>{var d;return(d=function*(){let l;try{l=yield u({variables:{input:function(e){if(e.policyOwnAttributes?.maxClustersPerUser===null){let{maxClustersPerUser:t,...r}=e.policyOwnAttributes;return{...e,policyOwnAttributes:r}}return e}(e)}})}catch(e){throw new n.hD(e.message)}let{policyId:d,error:p}=t(l,e);if(p)throw p;if(!d)throw Error("no policy id provided in clusterPolicyEdit mutation");if(c){let e=(a||[]).filter(e=>!e.permission.inherited).map(s.$W);try{yield o.setPermissions(d,e)}catch(e){(0,i.i)().addNotification({level:"error",message:r.formatMessage({id:"5hwzTi",defaultMessage:"Error setting permissions."})})}}return d},function(){var e=this,t=arguments;return new Promise(function(r,i){var s=d.apply(e,t);function a(e){l(s,r,i,a,n,"next",e)}function n(e){l(s,r,i,a,n,"throw",e)}a(void 0)})})()}}},542811:(e,t,r)=>{r.d(t,{D8:()=>m,eY:()=>f,ep:()=>y,fD:()=>v,nW:()=>p});var i=r(692738),s=r(141078),a=r(32121),n=r(849873),l=r(899490),u=r(730543),o=r(741052),c=r(954557);function d(e,t,r,i,s,a,n){try{var l=e[a](n),u=l.value}catch(e){r(e);return}l.done?t(u):Promise.resolve(u).then(i,s)}function p(e,t,r=!1){let i=u.O.useIntl(),a=u.O.useQuery(c.Rp,{variables:{input:{policyId:e}},skip:!e||r,fetchPolicy:t});if(a.data&&a.data.clusterGetPolicy?.policy){let e=l.Lh.fromGraphqlBlueprint(a.data.clusterGetPolicy.policy);if(!e)return{error:new s.K4({errorMessage:i.formatMessage({id:"yhOPpU",defaultMessage:"Invalid cluster policy {name}"},{name:a.data.clusterGetPolicy.policy?.policyOwnAttributes?.name})}),loading:a.loading};return{data:{blueprint:e},error:a.error,loading:a.loading}}return{error:a.error,loading:a.loading}}let m=({clusterType:e,useQueryHookOptions:{skip:t,...r}={}}={})=>{let{refetch:s,...n}=u.O.useQuery(c.A,{variables:{input:{}},skip:!l.Lh.areClusterBlueprintsEnabled()||!0===t,fetchPolicy:"cache-and-network",...r}),o=(0,i.useCallback)(t=>{var r;return(r=function*(){let r=yield s(t);return{...r,data:{blueprintList:l.Lh.mapBlueprintListResultToUsableBlueprints(r?.data,e)}}},function(){var e=this,t=arguments;return new Promise(function(i,s){var a=r.apply(e,t);function n(e){d(a,i,s,n,l,"next",e)}function l(e){d(a,i,s,n,l,"throw",e)}n(void 0)})})()},[e,s]),p=(0,i.useMemo)(()=>l.Lh.mapBlueprintListResultToUsableBlueprints(n?.data,e),[n?.data,e]),m=n.loading&&!n.data||n.networkStatus===a.pT.refetch;return{data:{blueprintList:p},error:n.error,loading:m,refetch:o}},f=(e={})=>(0,s.IT)(c.ZK,{variables:{input:{}},...e}),v={usePolicyFamilyList:({variables:e={input:{}},...t})=>u.O.useQuery(c.ZK,{variables:e,...t}),usePolicyFamily:(e,t,r={})=>u.O.useQuery(c.dx,{variables:{input:{policyFamilyId:e,version:t}},...r,skip:r.skip||!e})},y=()=>{let{data:e,loading:t}=m({clusterType:"JOB",useQueryHookOptions:{fetchPolicy:"cache-first"}}),r=g(e);return(0,o.OD)()?{loading:t,firstServerlessPolicy:r}:{loading:!1}},g=e=>(0,o.OD)()?(e?.blueprintList||[]).find(e=>{let t=e.policies.enable_serverless_compute,r=new n.xR(t);return t&&r.validateSingleValue(!0).isValid}):void 0},696931:(e,t,r)=>{r.d(t,{h:()=>o,od:()=>u,w5:()=>c});var i=r(610435);r(692738);var s=r(342411),a=r(328957),n=r(715370),l=r(910165);let u=e=>({skip:e,fetchPolicy:"network-only",notifyOnNetworkStatusChange:!0}),o=e=>{let{data:t,error:r,loading:i,refetch:s}=n.R.useQuery(l.zg,{variables:{input:{clusterId:e.variables.clusterId,endTime:e.variables.endTime,startTime:e.variables.startTime}},...u(e.skip)}),{instanceCpuUsage:o,apiError:d}=t?.clustermetricsGetClusterHeatmap||{};return{clusterMetricsHeatmapMetaData:(0,a.x1)(o,e.excludeDriver),refetchHeatmap:t=>s({input:{...e.variables,...t}}),errorMessage:d?.message??(r?c.QUERY_FAILURE:void 0),loading:i}},c={QUERY_FAILURE:(0,i.Y)(s.sA,{id:"jh9wO0",defaultMessage:"Unable to get metrics. Please try again later"})}},701150:(e,t,r)=>{r.d(t,{q:()=>l,r:()=>u});var i=r(141078),s=r(417695),a=r(677933);let n=(0,i.J1)`
  mutation clusterCreatePolicy($input: ClusterCreatePolicyInput!) @component(name: "Clusters.UI") {
    clusterCreatePolicy(input: $input) {
      policyId
      apiError {
        code
        message
        helpUrl
        traceId
      }
    }
  }
`;function l(){return(0,s.t)(n,e=>{let t=e?.data?.clusterCreatePolicy?.apiError;return{policyId:e?.data?.clusterCreatePolicy?.policyId??null,error:t?new a.hD(t.message??"",t?.code||void 0):null}})}let u=e=>(0,i.n_)(n,e)},715370:(e,t,r)=>{r.d(t,{R:()=>$});var i=r(701150),s=r(356973),a=r(118903),n=r(542811),l=r(210287),u=r(825543),o=r(141078),c=r(521200),d=r(791229),p=r(730543),m=r(732948),f=r(457034),v=r(610435),y=r(657970),g=r.n(y);r(692738);var C=r(342411),h=r(192776),b=r(160500),I=r(837963),E=r(995348);function M(e,t,r,i,s,a,n){try{var l=e[a](n),u=l.value}catch(e){r(e);return}l.done?t(u):Promise.resolve(u).then(i,s)}let w=()=>[(e,t)=>{var r;return(r=function*(){let{confirmationMessage:r,errorTitle:i,shouldConfirm:s,getErrorsFromData:a,...n}=t;if(s&&!(yield h.W.confirm(r)))return;let l=yield e(n),u=[...l.errors||[],...a?.(l.data)||[]];if(u.length>0)return void h.W.showError(i,u[0].message||"Unknown error");return l},function(){var e=this,t=arguments;return new Promise(function(i,s){var a=r.apply(e,t);function n(e){M(a,i,s,n,l,"next",e)}function l(e){M(a,i,s,n,l,"throw",e)}n(void 0)})})()}],P=()=>{let[e]=(0,I.K)(),[t]=w();return[({clusterId:r,clusterName:i},s={})=>t(e,g()({shouldConfirm:!0,errorTitle:(0,v.Y)(C.sA,{id:"Xb1VoI",defaultMessage:"Could not start cluster {clusterName}.",values:{clusterName:i}}),confirmationMessage:(0,v.Y)(C.sA,{id:"ijI/iv",defaultMessage:"Are you sure you want to start cluster {clusterName}?",values:{clusterName:i}})},{variables:{input:{clusterId:r}},getErrorsFromData:e=>e?.clusterStartCluster?.apiError?[e?.clusterStartCluster?.apiError]:null},s))]},A=()=>{let[e]=(0,E.v)(),[t]=w();return[({clusterId:r,clusterName:i},s={})=>t(e,g()({shouldConfirm:!0,errorTitle:(0,v.Y)(C.sA,{id:"HxHYMP",defaultMessage:"Could not terminate cluster {clusterName}.",values:{clusterName:i}}),confirmationMessage:(0,v.Y)(C.sA,{id:"D+PtaW",defaultMessage:"Are you sure you want to terminate cluster {clusterName}?",values:{clusterName:i}})},{variables:{input:{clusterId:r}},getErrorsFromData:e=>e?.clusterDeleteCluster?.apiError?[e?.clusterDeleteCluster?.apiError]:null},s))]},L=()=>{let[e]=(0,b.p)(),[t]=w();return[({clusterId:r,clusterName:i},s={})=>t(e,g()({shouldConfirm:!0,errorTitle:(0,v.Y)(C.sA,{id:"zGODJU",defaultMessage:"Could not restart cluster {clusterName}.",values:{clusterName:i}}),confirmationMessage:(0,v.Y)(C.sA,{id:"gyi0b2",defaultMessage:"Are you sure you want to restart cluster {clusterName}?",values:{clusterName:i}})},{variables:{input:{clusterId:r}},getErrorsFromData:e=>e?.clusterRestartCluster?.apiError?[e?.clusterRestartCluster?.apiError]:null},s))]};var O=r(137773),T=r(188584),R=r(179258);let U=e=>{let{skip:t,variables:r}=e,{instanceId:i,...s}=r,a=(0,u.t)({skip:t||(0,R.QS)(i),variables:s}),n=(0,u.o)({skip:t||!(0,R.QS)(i),variables:r});if((0,R.QS)(i))return n;return a};class $ extends p.O{static useCanCreateCluster(e){return(0,O.gj)(void 0,{skip:e})}static useBlueprintList(e){return(0,n.D8)(e)}static useClusterPolicyList(e={}){return(0,l.M)(e)}static useClusterPolicyCreate(){return(0,i.q)()}static useClusterPolicyUpdate(){return(0,a.H)()}static useClusterPolicyDelete(){return(0,s.L)()}static useBlueprint(e,t,r){return(0,n.nW)(e,t,r)}static useClusterListForTable(e,t){return(e=>{let{data:t,error:r,loading:i}=p.O.useQuery(m.I,{...e,variables:{first:1e4,filterBy:{},skipPolicy:!0,...e?.variables}}),s=(t?.clusterListClustersPaginated?.errors??[])[0];if(s)return{data:void 0,error:new o.K4({errorMessage:s.message??void 0}),loading:i};let a=t?.clusterListClustersPaginated?.edges.map(f.am).filter(e=>(0,c.Qb)()||!(0,d.a)(e));return{data:a&&{clusterList:a},error:r,loading:i}})(Object.assign({},t,{variables:{...t?{...t.variables,skipPolicy:!e}:{}},skip:t?.skip}))}static useClusterActionHookWrapper(){return w()}static useClusterMetricsList=u.t;static useInstanceMetricsList=u.o;static useClusterOrInstanceMetricsList=U;static useClusterStart=P;static useClusterTerminate=A;static useClusterRestart=L;static useFirstServerlessPolicy(){return(0,n.ep)()}static useDbrRelease=T.TH}},825543:(e,t,r)=>{r.d(t,{o:()=>m,t:()=>p});var i=r(886100),s=r(22191),a=r(747129),n=r(328957),l=r(696931),u=r(993533),o=r(730543),c=r(910165);let d=(e,t,r,n,l)=>{let u=`Error for clusterId=${e}`;t&&(u+=`, instanceId=${t}`),u+=`, startTime=${r}, endTime=${n}: ${l??"Query failed"}`,i.iT.sev1BurnRate(s.Es.GPU,"GPU metrics error",a.i1.P99,a.Ip.Min10,!1,u)},p=e=>{let{data:t,error:r,loading:i,refetch:s}=o.O.useQuery(c.Q3,{variables:{input:e.variables},...(0,l.od)(e.skip)}),{metrics:a,apiError:p,step:m}=t?.clustermetricsGetClusterLevelMetrics||{},f=(0,n.zY)(a,e.variables.startTime,e.variables.endTime,m),v=p?.message;return(p||r)&&e.variables.category===u.Q0t.GPU&&d(e.variables.clusterId,null,e.variables.startTime,e.variables.endTime,v??null),{data:f&&{metricsList:f},refetch:t=>s({input:{...e.variables,...t}}),errorMessage:v??(r?l.w5.QUERY_FAILURE:void 0),loading:i}},m=e=>{let{data:t,error:r,loading:i,refetch:s}=o.O.useQuery(c.RI,{variables:{input:e.variables},...(0,l.od)(e.skip)}),{metrics:a,apiError:p,step:m}=t?.clustermetricsGetInstanceLevelMetrics||{},f=(0,n.zY)(a,e.variables.startTime,e.variables.endTime,m),v=p?.message;return(p||r)&&e.variables.category===u.Q0t.GPU&&d(e.variables.clusterId,e.variables.instanceId,e.variables.startTime,e.variables.endTime,v??null),{data:f&&{metricsList:f},refetch:t=>s({input:{...e.variables,...t}}),errorMessage:v??(r?l.w5.QUERY_FAILURE:void 0),loading:i}}},837963:(e,t,r)=>{r.d(t,{K:()=>o});var i=r(141078),s=r(342295),a=r(732948),n=r(949957),l=r(823182);let u=(0,i.J1)`
  mutation autogenClusterStart($input: ClusterStartClusterInput!, $skipPolicy: Boolean = true)
  @component(name: "Clusters.UI") {
    clusterStartCluster(input: $input) {
      entity {
        ...AutogenClusterListTableFragment
      }
      apiError {
        ...ApiErrorFragment
      }
    }
  }
  ${n.Lu}
  ${a.M}
`,o=e=>(0,s.Z)(u,{...e,refetchQueries:[l.lc],awaitRefetchQueries:!0})},902957:(e,t,r)=>{r.d(t,{Wr:()=>v,GJ:()=>y,eO:()=>f,vs:()=>m,gf:()=>p});var i=r(610435);r(692738);var s=r(342411),a=r(141078),n=r(949957);let l=(0,a.J1)`
  mutation autogenClusterDelete($input: ClusterPermanentDeleteClusterInput!) @component(name: "Clusters.UI") {
    clusterPermanentDeleteCluster(input: $input) {
      apiError {
        ...ApiErrorFragment
      }
    }
  }
  ${n.Lu}
`;var u=r(251439),o=r(21191),c=r(823182),d=r(536227);function p(){return{type:"START_CLUSTER_MUTATION"}}function m(){return{type:"FINISH_CLUSTER_MUTATION"}}function f(e,t,r){return(0,d.W7)({confirmationOptions:{componentId:"compute.clusters.detail.delete-confirm",title:(0,i.Y)(s.sA,{id:"7x8gVJ",defaultMessage:'Deleting "{clusterName}".',values:{clusterName:t}}),children:(0,i.Y)("div",{children:(0,i.Y)(s.sA,{id:"GQOCwE",defaultMessage:'<p>Deleting a cluster terminates the cluster and removes its configuration. You cannot undo this action.</p><p>Are you sure you want to delete "<strong>{clusterName}</strong>"?</p>',values:{clusterName:t}})}),renderErrorMessage:e=>(0,i.FD)("p",{children:[(0,i.Y)(s.sA,{id:"lbq4wG",defaultMessage:"Failed to delete compute"}),": ",e.message]}),confirmText:(0,i.Y)(s.sA,{id:"phEEYI",defaultMessage:"Delete"}),confirmClassName:"btn-danger"},successTitle:(0,i.Y)(s.sA,{id:"E/OyaO",defaultMessage:'Deleting "{clusterName}".',values:{clusterName:t}}),successMessage:(0,i.Y)(s.sA,{id:"XOUxep",defaultMessage:"The compute will be removed from this list after it has terminated and its configuration has been removed."}),onMutationSuccess:r,mutationOptions:{mutation:l,variables:{input:{clusterId:e}},refetchQueries:[c.lc],awaitRefetchQueries:!0},parseErrorResponse:e=>e.clusterPermanentDeleteCluster?.apiError?.message??void 0})}function v(e,t,r){return(0,d.W7)({mutationOptions:{mutation:u.p,variables:{input:e}},parseErrorResponse:e=>e.clusterEditCluster?.apiError?.message??void 0,onMutationSuccess:t,onMutationError:r})}function y(e,t,r){return(0,d.W7)({mutationOptions:{mutation:o.L,variables:{input:e}},parseErrorResponse:e=>e.clusterResizeCluster?.apiError?.message??void 0,onMutationSuccess:t,onMutationError:r})}},910165:(e,t,r)=>{r.d(t,{CF:()=>a,Q3:()=>l,RI:()=>u,zg:()=>n});var i=r(141078),s=r(949957);let a=(0,i.J1)`
  query listInstanceIdsForMetrics($input: ClustermetricsGetInstanceIdsRequestInput!) @component(name: "Clusters.UI") {
    clustermetricsGetInstanceIds(input: $input) {
      apiError {
        ...ApiErrorFragment
      }
      instanceIds
      instances {
        id
        ip
        driver
      }
    }
  }
  ${s.Lu}
`,n=(0,i.J1)`
  query getClusterHeatmap($input: ClustermetricsGetClusterHeatmapRequestInput!) @component(name: "Clusters.UI") {
    clustermetricsGetClusterHeatmap(input: $input) {
      apiError {
        ...ApiErrorFragment
      }
      instanceCpuUsage {
        driver
        id
        ip
        hostname
        cpuUsage
      }
    }
  }
  ${s.Lu}
`,l=(0,i.J1)`
  query getClusterLevelMetrics($input: ClustermetricsGetClusterLevelMetricsRequestInput!)
  @component(name: "Clusters.UI") {
    clustermetricsGetClusterLevelMetrics(input: $input) {
      apiError {
        ...ApiErrorFragment
      }
      step
      metrics {
        chartKey
        samples {
          timestamp
          value
        }
        seriesKey
      }
    }
  }
  ${s.Lu}
`,u=(0,i.J1)`
  query getInstanceLevelMetrics($input: ClustermetricsGetInstanceLevelMetricsRequestInput!)
  @component(name: "Clusters.UI") {
    clustermetricsGetInstanceLevelMetrics(input: $input) {
      apiError {
        ...ApiErrorFragment
      }
      step
      metrics {
        chartKey
        samples {
          timestamp
          value
        }
        seriesKey
      }
    }
  }
  ${s.Lu}
`},995348:(e,t,r)=>{r.d(t,{v:()=>o,y:()=>u});var i=r(141078),s=r(342295),a=r(732948),n=r(949957),l=r(823182);let u=(0,i.J1)`
  mutation autogenClusterTerminate($input: ClusterDeleteClusterInput!, $skipPolicy: Boolean = true)
  @component(name: "Clusters.UI") {
    clusterDeleteCluster(input: $input) {
      entity {
        ...AutogenClusterListTableFragment
      }
      apiError {
        ...ApiErrorFragment
      }
    }
  }
  ${n.Lu}
  ${a.M}
`,o=e=>(0,s.Z)(u,{...e,refetchQueries:[l.lc],awaitRefetchQueries:!0})}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/45738.62151e83a9.chunk.js.map