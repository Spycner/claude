"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[29139],{25602:(e,t,r)=>{if(r.d(t,{Es:()=>R,Rg:()=>I,Wy:()=>S,rO:()=>Y}),13057==r.j)var a,n=r(610435);var i=r(359419),s=r.n(i),o=r(189219),l=r.n(o),u=r(90114),d=r.n(u),c=r(692738),p=r(412514);if(13057==r.j)var f=r(30472);if(13057==r.j)var m=r(886100);if(13057==r.j)var g=r(22191);if(13057==r.j)var h=r(412836);if(13057==r.j)var b=r(844760);if(13057==r.j)var y=r(205827);var v=r(361772);if(13057==r.j)var x=r(993533);if(13057==r.j)var k=r(206419);function w(e,t,r,a,n,i,s){try{var o=e[i](s),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(a,n)}var R=((a={}).BREAKGLASS="breakglass",a.YAML_SYNC="yaml_sync",a.REDEPLOYMENT_REQUIRED="redeployment_required",a.NONE="none",a);let A=c.createContext({data:null,loading:!1,isJobDABControlled:!1,deploymentUiMode:"none"});function Y({job:e,children:t}){let r=(0,f.Su)(),a=e.settings?.editMode===x.Do2.UI_LOCKED,i=e.settings?.deployment?.metadataFilePath,s=(0,h.IT)({queryKey:["deploymentMetadata",e.id,i],queryFn:()=>(0,b.S)(`/ajax-api/2.0/workspace/export?path=${encodeURIComponent(i)}&direct_download=true`).then(e=>e.json()).then(_),enabled:!!i&&(a||r)&&i?.startsWith("/"),refetchOnWindowFocus:!1}),o=(0,k.x)(e)&&a,l=r&&(0,k.x)(e)&&(0,y.M6)(s.data)&&(0,y.D5)(s.data)&&!!i,u=s.isLoading?"none":l?a?"redeployment_required":"yaml_sync":"breakglass";return(0,n.Y)(A.Provider,{value:{data:s.data?.config??null,loading:s.isLoading&&"idle"!==s.fetchStatus,isJobDABControlled:o,deploymentUiMode:r?u:"breakglass"},children:t})}function I(){let e=c.useContext(A),t=!s()(e?.data?.bundle?.git),r=e?.data?.bundle?.git?.origin_url?.startsWith("https://")&&(0,v.NK)(e?.data?.workspace?.file_path);return{...e,canOpenGitFolder:r,bundleHasGitSettings:t}}function _(e){var t;return(t=function*(){if(!l()(e)||l()(e)&&!("version"in e))return null;try{if(1===e.version)return yield T.validate(e,{strict:!0});return m.iT.sev2(g.Es.WorkflowsAuthoringDABs,"jaws:dab_deployment_metadata:unknown_version",`Unknown DAB deployment metadata file version: ${e.version}`),null}catch(e){return null}},function(){var e=this,r=arguments;return new Promise(function(a,n){var i=t.apply(e,r);function s(e){w(i,a,n,s,o,"next",e)}function o(e){w(i,a,n,s,o,"throw",e)}s(void 0)})})()}function S(e,t){let r=Object.values(t?.resources?.jobs??{}).find(({id:t})=>t===String(e));return r?.relative_path??""}let T=p.Ik().shape({version:p.ai().oneOf([1]).required(),config:p.Ik().shape({bundle:p.Ik().shape({git:p.Ik().shape({branch:p.Yj().notRequired(),origin_url:p.Yj().notRequired(),commit:p.Yj().notRequired(),bundle_root_path:p.Yj().notRequired()}).required()}).required(),workspace:p.Ik().shape({file_path:p.Yj().required()}),resources:p.Ik().shape({jobs:p.RZ(e=>p.Ik(d()(e,()=>p.Ik().shape({id:p.Yj(),relative_path:p.Yj().required()}))))})}).required(),extra:p.Ik().shape({git_folder_path:p.Yj().notRequired()}).notRequired()})},37761:(e,t,r)=>{r.d(t,{Gz:()=>p,Zu:()=>m,M6:()=>f});var a=r(692738),n=r(928878),i=r.n(n),s=r(90114),o=r.n(s),l=r(141078);let u=(0,l.J1)`
  query GetDatabricksSettingsForJobs @component(name: "Workflows.Tasks.SQL") {
    settings {
      jobsSqlFileTaskUIEnabled
    }
  }
`,d={},c={jobsSqlFileTaskUIEnabled:!0},p=a.createContext(null);function f(){let e,t=(e=function(){let{data:e,loading:t}=(0,l.IT)(u,{fetchPolicy:"cache-and-network",pollInterval:0});if(t)return d;return o()(e?.settings??{},e=>e??void 0)}(),(0,a.useMemo)(()=>i()({...c},e),[e]));return(0,a.useMemo)(()=>({settings:{...c,...t}}),[t])}function m(){let e=(0,a.useContext)(p),t=f();return e??t}},39746:(e,t,r)=>{r.d(t,{A:()=>y});var a=r(657709),n=r(378003),i=r(324399),s=r(692738),o=r(952928),l=r(783772),u=r.n(l),d=r(97787),c=r(55446),p=r(513266),f=r(32493),m=r(600097),g=c.A.Option;function h(e){return e&&e.type&&(e.type.isSelectOption||e.type.isSelectOptGroup)}var b=s.forwardRef(function(e,t){var r,l,b=e.prefixCls,y=e.className,v=e.children,x=e.dataSource,k=(0,o.A)(v);1===k.length&&(0,m.zO)(k[0])&&!h(k[0])&&(r=(0,i.A)(k,1)[0]);var w=r?function(){return r}:void 0;return l=k.length&&h(k[0])?v:x?x.map(function(e){if((0,m.zO)(e))return e;switch((0,n.A)(e)){case"string":return s.createElement(g,{key:e,value:e},e);case"object":var t=e.value;return s.createElement(g,{key:t,value:t},e.text);default:throw Error("AutoComplete[dataSource] only supports type `string[] | Object[]`.")}}):[],s.useEffect(function(){(0,f.A)(!("dataSource"in e),"AutoComplete","`dataSource` is deprecated, please use `options` instead."),(0,f.A)(!r||!("size"in e),"AutoComplete","You need to control style self instead of setting `size` when using customize input.")},[]),s.createElement(p.TG,null,function(r){var n=(0,r.getPrefixCls)("select",b);return s.createElement(c.A,(0,a.A)({ref:t},(0,d.A)(e,["dataSource"]),{prefixCls:n,className:u()("".concat(n,"-auto-complete"),y),mode:c.A.SECRET_COMBOBOX_MODE_DO_NOT_USE,getInputElement:w}),l)})});b.Option=g;let y=b},47460:(e,t,r)=>{r.d(t,{B6:()=>b,F$:()=>c,F3:()=>g,IT:()=>f,Mk:()=>m,TJ:()=>x,UH:()=>w,a4:()=>k,e0:()=>u,ed:()=>p,hh:()=>y,ju:()=>o,mv:()=>v,pE:()=>d,q3:()=>R,r6:()=>h});var a=r(965772),n=r(501132),i=r(162210),s=r(659587);function o(e){if(void 0===e)return;let t=i.BrowserUtils.generateGUID(),r=e.get("id");if(void 0===r)return;return{requestId:t,notebookId:r}}let l=e=>{let t=(0,a.fw)(e);if(t&&t.major<=10)return!0;return!1},u=(e,t)=>!l(t)||"Cluster"!==e,d=(e,t)=>"Cluster"!==e||t!==s.$L.INTERACTIVE_SERVERLESS,c=(e,t)=>l(t)&&"Runtime"===e?"Cluster and Runtime":e,p=(e,t)=>t&&"Runtime"===e?"Default":e,f="cluster state is unknown",m="notebook is not attached to a usable cluster",g="Unsupported Language on SQL Warehouse",h="Please contact the owner or an administrator for access",b="listLibrariesResponse",y="listLibrariesClusterChange",v="listLibrariesRefreshButton",x="listLibrariesRefreshIcon",k="listLibrariesPanelOpen",w=(e,t)=>{e&&e.recordClientsideEvent("listLibrariesCategoryChange",t)},R=e=>e===n.W.NOTEBOOK_LIBRARIES_PANEL||e===n.W.NOTEBOOK_ENVIRONMENT_PANEL},47708:(e,t,r)=>{r.d(t,{c:()=>s});var a=r(610435),n=r(692738),i=r(342411);let s=({onRefresh:e,children:t})=>{let r=(0,n.useCallback)(()=>e(),[e]);return(0,a.FD)("h5",{className:"job-list-fetch-error",css:{marginLeft:"12px"},children:[t,(0,a.Y)("div",{children:(0,a.Y)("a",{onClick:r,children:(0,a.Y)(i.sA,{id:"BL3CPE",defaultMessage:"Retry"})})})]})}},68453:(e,t,r)=>{r.d(t,{v:()=>l});var a=r(610435);r(692738);var n=r(79128),i=r(217247),s=r(955210),o=r(342411);let l=e=>{let{currentPageToken:t,prevPageToken:r,nextPageToken:l,loading:u,onClick:d}=e,{formatMessage:c}=(0,o.tz)();return(0,a.FD)("div",{css:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"8px"},"data-testid":"pagination-widget",children:[(0,a.Y)(n.$n,{componentId:"codegen_no_dynamic_webapp_web_js_jaws_common_cursorpagination_33",icon:(0,a.Y)(i.A,{}),disabled:u||!r||!t||"null"===t,onClick:()=>r&&d(r),type:"tertiary",htmlType:"button",title:c({id:"8euhYE",defaultMessage:"Previous page"}),children:c({id:"hDQiNq",defaultMessage:"Previous"})}),(0,a.Y)(n.$n,{componentId:"codegen_no_dynamic_webapp_web_js_jaws_common_cursorpagination_48",endIcon:(0,a.Y)(s.A,{}),disabled:u||!l,onClick:()=>l&&d(l),type:"tertiary",htmlType:"button",title:c({id:"iYRooy",defaultMessage:"Next page"}),children:c({id:"2Zojvu",defaultMessage:"Next"})})]})}},74363:(e,t,r)=>{var a,n,i;r.d(t,{A:()=>s});let s=(n=(a=r(629379).A).getIn,i=a.empty,function(e,t){return function(r){var a=t||function(e){return n(e,"form")};return n(a(r),e+".syncErrors")||i}})},155769:(e,t,r)=>{r.d(t,{H:()=>s,t:()=>i});var a=r(610435);r(692738);var n=r(342411);let i={maxHeight:700},s={cancelButtonText:(0,a.Y)(n.sA,{id:"ESxpRz",defaultMessage:"Cancel"}),modalTitle:(0,a.Y)(n.sA,{id:"RLYm2M",defaultMessage:"Add Repo"}),modalTitleInWorkspace:(0,a.Y)(n.sA,{id:"ruoUc9",defaultMessage:"Create Git folder"}),submitButtonText:(0,a.Y)(n.sA,{id:"bJ1VKN",defaultMessage:"Create Repo"}),submitButtonTextInWorkspace:(0,a.Y)(n.sA,{id:"hN83iv",defaultMessage:"Create Git folder"})}},159705:(e,t,r)=>{r.d(t,{Nw:()=>i,hG:()=>n,iU:()=>s,vi:()=>o});var a=r(141078);let n=(0,a.J1)`
  fragment BooleanSettingFragment on SettingspolicySetting {
    isMutable
    ref
    value {
      boolVal {
        value
      }
    }
  }
`,i=(0,a.J1)`
  fragment BooleanSettingV2Fragment on SettingspolicySettingsv2SettingValue {
    isSetByUser
    value {
      boolVal
    }
  }
`,s=(0,a.J1)`
  fragment StringSettingFragment on SettingspolicySetting {
    isMutable
    ref
    value {
      stringVal {
        value
      }
    }
  }
`,o=(0,a.J1)`
  fragment SettingsApiErrorFragment on ApiError {
    code
    message
    helpUrl
    traceId
  }
`},185162:(e,t,r)=>{r.d(t,{_:()=>o});var a=r(141078);let n=(0,a.J1)`
  fragment BooleanSettingV2Fragment on SettingspolicySettingsv2SettingValue {
    name
    isSetByUser
    visibility @includeSafex(name: "databricks.fe.settings.settingV2FragmentReturnVisibility", defaultValue: false)
    value {
      boolVal
    }
  }
`,i=(0,a.J1)`
  fragment SettingsApiErrorFragment on ApiError {
    code
    message
    helpUrl
    traceId
  }
`,s=(0,a.J1)`
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
  ${n}
`,o=(e,t,r,n,i)=>(0,a.IT)(s,{variables:{input:{scope:r,resourceId:t,settingName:e}},fetchPolicy:"cache-and-network",...i})},188139:(e,t,r)=>{if(r.d(t,{k:()=>o}),13057==r.j)var a=r(610435);if(r(692738),13057==r.j)var n=r(726910);if(13057==r.j)var i=r(754218);if(13057==r.j)var s=r(847419);function o({sqlFileOutput:{file_output:e},sqlTaskRun:{state:t}}){let{query_text:r,query_result:l}=e,u=l?(0,a.Y)(n.L,{sqlFileQueryResult:l}):(0,a.Y)(s.G,{state:t});return(0,a.Y)(i.v,{queryText:r,bottomView:u})}},205165:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function s(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("path",{fill:"currentColor",d:"M2.5 1a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75H6V4H3.25V2.5h9.5V4H10v1.5h3.5a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 13.5 1z"}),(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M0 12.25c0-1.26.848-2.322 2.004-2.648A2.75 2.75 0 0 1 4.75 7h2.5V4h1.5v3h2.5a2.75 2.75 0 0 1 2.746 2.602 2.751 2.751 0 1 1-3.371 3.47 2.751 2.751 0 0 1-5.25 0A2.751 2.751 0 0 1 0 12.25M2.75 11a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m2.625.428a2.76 2.76 0 0 0-1.867-1.822A1.25 1.25 0 0 1 4.75 8.5h2.5v1.104c-.892.252-1.6.942-1.875 1.824M8.75 9.604V8.5h2.5c.642 0 1.17.483 1.242 1.106a2.76 2.76 0 0 0-1.867 1.822A2.76 2.76 0 0 0 8.75 9.604M12 12.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m-5.25 0a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0",clipRule:"evenodd"})]})}let o=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:s}));o.displayName="WorkspacesIcon";let l=o},205827:(e,t,r)=>{function a(e){let t=e?.extra?.git_folder_path;if(!t)return!1;return t.startsWith("/Workspace")}function n(e){return e?.config?.bundle?.target}function i(e){return e?.config?.bundle?.name}function s(e){return e?.config?.bundle?.mode==="development"}r.d(t,{D5:()=>s,M6:()=>a,V7:()=>n,WF:()=>i})},206419:(e,t,r)=>{r.d(t,{A:()=>i,x:()=>n});var a=r(993533);function n(e){return e?.settings?.deployment?.kind===a.k0f.BUNDLE}function i(e){return e?.jobType===a.YxN.SYSTEM_MANAGED}},244235:(e,t,r)=>{if(r.d(t,{Y:()=>u}),13057==r.j)var a=r(610435);if(r(692738),13057==r.j)var n=r(382908);if(13057==r.j)var i=r(437962);if(13057==r.j)var s=r(465946);var o=r(342411);if(13057==r.j)var l=r(286467);function u({sqlDashboardOutput:e,sqlTaskRun:t}){if(!(0,l.gg)(t)?.sqlTask?.dashboard?.dashboardId)return(0,a.Y)(n.o.Paragraph,{children:"Could not obtain the Dashboard ID. Try again later."});let r=[{title:(0,a.Y)(o.sA,{id:"XJSN3B",defaultMessage:"Status"}),dataIndex:"status",key:"status",render:e=>(0,a.Y)(c,{status:e}),width:60},{title:(0,a.Y)(o.sA,{id:"EWmW+b",defaultMessage:"Title"}),dataIndex:"widget_title",key:"widget_title"},{title:(0,a.Y)(o.sA,{id:"6eNlOH",defaultMessage:"Status details"}),dataIndex:"error",key:"error",render:e=>(0,a.Y)(n.o.Text,{children:e&&e.message})}],s=e.dashboard_output.widgets?.map(e=>({key:e.widget_id,...e}));return(0,a.FD)(a.FK,{children:[(0,a.Y)(n.o.Title,{level:3,children:(0,a.Y)(o.sA,{id:"zG1Y+z",defaultMessage:"Widgets"})}),(0,a.Y)(i.q,{columns:r,dataSource:s,pagination:!1})]})}let d={CANCELLED:"charcoal",FAILED:"coral",PENDING:"turquoise",RUNNING:"lemon",SUCCESS:"lime"};function c({status:e}){return(0,a.Y)(s.v,{componentId:"codegen_webapp_js_jaws_runs_details_sql_sqldashboardoutputviewer.tsx_112",color:d[e],children:e})}},261860:(e,t,r)=>{r.d(t,{$H:()=>f,Ad:()=>c,EL:()=>l,NX:()=>n,Rs:()=>h,Tq:()=>u,Yk:()=>d,bK:()=>s,g8:()=>o,gD:()=>y,gh:()=>m,pE:()=>i,v6:()=>p,vb:()=>g});var a=r(956935);let n="var(--runs-matrix-cell-width, 24px)",i="var(--runs-matrix-unit-width, 16px)",s="var(--runs-matrix-unit-radius, 4px)",o="var(--runs-matrix-task-name-width, 200px)",l="var(--runs-matrix-header-height, 150px)",u="var(--runs-matrix-task-row-height, 24px)",d="var(--runs-matrix-table-min-height, 250px)",c="var(--runs-matrix-padding-right, 55px)",p="var(--runs-matrix-padding-left, 20px)",f="var(--runs-matrix-padding-top, 45px)",m="var(--runs-matrix-run-state-margin-bottom, 4px)",g="@container sidebar (max-width: 500px)",h="hidden-xs",b=(0,a.i7)(`
    0%   { opacity:1; }
    50%  { opacity:0.25; }
    100% { opacity:1; }
`),y=`${b} 4s ease infinite`},278536:(e,t,r)=>{r.d(t,{n:()=>o});let a="#CC3352",n="#F69CAD",i="#C4CDD4",s="#308813",o={"Internal error":a,Failed:a,Skipped:n,"Upstream failed":n,"Upstream canceled":n,Evicted:n,"Upstream evicted":n,"Timed out":n,Canceled:n,Canceling:n,"Maximum concurrent runs reached":n,Pending:i,Terminated:i,Terminating:i,Blocked:i,Queued:i,SkippedByCustomerCode:"#CCCCCC",Excluded:"#5A5A5A",Disabled:"#5A5A5A",Running:"#4FB26E",Succeeded:s,"Succeeded with failures":s,"Waiting for retry":"#FACB66"}},281564:(e,t,r)=>{if(r.d(t,{V:()=>u}),13057==r.j)var a=r(610435);var n=r(692738);if(13057==r.j)var i=r(339518);var s=r(342411),o=r(542272);let l=13057==r.j?n.memo(o.kP):null;function u(e){let t=e.truncated??!1,r=e.columns??[],n=e.rows??[],u=r.map(e=>({name:e.name??"",type:e.type??"string"})),d={columns:(0,o.L9)(u),rows:n};return(0,a.FD)(a.FK,{children:[t&&(0,a.Y)(i.F,{componentId:"codegen_webapp_js_jaws_runs_details_sql_resultsviewer.tsx_46",type:"info",message:(0,a.Y)(s.sA,{id:"Ho/Qio",defaultMessage:"Limiting display to {numberOfRows} rows.",values:{numberOfRows:n.length}})}),(0,a.Y)(l,{spec:{type:"TABLE",options:{columns:r,condensed:!0,withRowNumber:!0}},data:d})]})}},286467:(e,t,r)=>{r.d(t,{Cr:()=>d,I$:()=>o,Ml:()=>c,P2:()=>u,bM:()=>s,gg:()=>i,nr:()=>l,rg:()=>f,sn:()=>p,xG:()=>g,y2:()=>m});var a=r(778529),n=r.n(a);function i(e){return e.tasks?.[0]?.settings?.task}function s(e){return e.tasks?.[0]}function o(e){return e.tasks?.[0]?.clusterInstance}function l(e){return e.tasks?.[0]?.settings?.clusterSpec}function u(e){let t=e.tasks?.[0]?.settings?.task;return!["runJobTask","conditionTask","forEachTask","simulationTask","lakeviewDashboardTask","alertTask"].some(e=>!!t?.[e])}function d(e){return new Set(e?.tasks?.map(e=>e.settings?.taskKey)??[]).size}function c(e){if(n()(e)||!n()(e.parentRunId))return!1;return d(e)>1}function p(e,t){if(t&&c(t))return t;return e}function f(e){return e.runId===e?.tasks?.[0]?.runId&&!e.parentRunId}function m(e){if(!e)return;let t=Object.entries(e).find(([e,t])=>"__typename"!==e&&t?.__typename);return t?.[1]?.__typename}function g(e){return m(i(e))}},292436:(e,t,r)=>{r.d(t,{Y:()=>n});var a=r(441535);function n(){if((0,a.W)("excl_data_access",!1))return!0;return(0,a.W)("databricks.fe.wexp.enableRoleSwitcherInWorkspaceSelector",!1)}},304241:(e,t,r)=>{r(801138),t.parse=r(577773)},366709:(e,t,r)=>{r.d(t,{BP:()=>d,Gh:()=>f,kG:()=>c,z4:()=>m,zu:()=>g});var a=r(610435);r(692738);var n=r(79570),i=r(382908),s=r(342411),o=r(620839),l=r(558709),u=r(924876);let d=()=>(0,a.Y)(p,{children:(0,a.Y)(s.sA,{id:"7SsJJD",defaultMessage:"Performance optimized"})}),c=()=>(0,a.Y)(p,{children:(0,a.Y)(s.sA,{id:"O81nMM",defaultMessage:"Performance optimized"})}),p=({children:e})=>{let{formatMessage:t}=(0,s.tz)();return(0,a.FD)("div",{css:{flexShrink:1},children:[e,(0,a.Y)(n.m,{side:"left",content:(0,a.Y)(m,{}),componentId:"performance-target-info-tooltip",children:(0,a.Y)(l.K,{"aria-label":t({id:"SUSBJl",defaultMessage:"More information"}),css:e=>({display:"inline-block",paddingLeft:e.spacing.xs})})})]})},f=()=>(0,a.Y)(s.sA,{id:"iHgVUv",defaultMessage:"Performance optimized"}),m=()=>{if((0,u.yd)())return(0,a.Y)(s.sA,{id:"551w/Q",defaultMessage:"<b>Performance-optimized mode</b>{br}Fast, performant compute startup and execution speed.{br}{br}<b>Standard mode</b>{br}Disabling performance optimization gives you startup times similar to Classic infrastructure and reduces your cost.{br}{br}<i>Currently only applies to certain Serverless workloads. Serverless usage policies can limit execution speed.</i>",values:{i:e=>(0,a.Y)("p",{style:{fontStyle:"italic"},children:e}),br:(0,a.Y)("br",{}),b:e=>(0,a.Y)("b",{children:e})}});return(0,a.Y)(s.sA,{id:"Hgj35e",defaultMessage:"<b>Performance-optimized mode</b>{br}Fast, performant compute startup and execution speed.{br}{br}<b>Standard mode</b>{br}Disabling performance optimization gives you startup times similar to Classic infrastructure and reduces your cost.{br}{br}<i>Currently only applies to certain Serverless workloads.</i>",values:{i:e=>(0,a.Y)("p",{style:{fontStyle:"italic"},children:e}),br:(0,a.Y)("br",{}),b:e=>(0,a.Y)("b",{children:e})}})},g=()=>(0,a.Y)(s.sA,{id:"5oE6pF",defaultMessage:"Performance-optimized mode improves startup and execution speed. Disabling performance optimization gives you startup times similar to classic infrastructure and reduces your cost. Currently only applies to certain Serverless workloads. <p>Learn more</p>",values:{p:e=>(0,a.Y)(i.o.Link,{componentId:"jobs_run_with_different_settings_compute_performance_target_learn_more",href:o.A.JOBS_PERFORMANCE_MODE,target:"_blank",rel:"noopener noreferrer",children:e})}})},366795:(e,t,r)=>{r.d(t,{S:()=>a});function a(e,t,r){if(null==t||"string"!=typeof t)return r;for(let r in e)if(e[r]===t)return e[r];return r}},367426:(e,t,r)=>{if(r.d(t,{x:()=>l}),13057==r.j)var a=r(610435);if(r(692738),13057==r.j)var n=r(281564);let i=new Map([["string","string"],["integer","number"],["float","number"],["boolean","boolean"],["datetime","datetime"],["date","datetime"]]),s="string";function o(e){return i.get(e??s)??s}function l({queryResultData:e}){let t=e.columns??[],r=e.rows??[],i=t.map(e=>({name:e.name,title:e.friendly_name,type:o(e.type),displayAs:o(e.type),booleanValues:[]}));return(0,a.Y)(n.V,{columns:i,rows:r,truncated:e.truncated})}},379164:(e,t,r)=>{r.d(t,{CO:()=>v,qJ:()=>g,r6:()=>h,sA:()=>b});var a=r(974091),n=r.n(a),i=r(536717),s=r.n(i),o=r(90114),l=r.n(o),u=r(916424),d=r.n(u),c=r(773345),p=r.n(c),f=r(886100),m=r(22191);function g(e){return l()(d()(e,e=>e.settings?.taskKey),e=>p()(e,e=>e.attemptNumber??0))}let h=(e,t)=>{let r=e.map(({tasks:e})=>g(e??[])),a=n()(t?.map(({taskKey:e})=>[e,[]]));return l()(a,(e,t)=>r.map(e=>e[t]))},b=e=>{let t=(e=>{let t=n()(e.map(({taskKey:e})=>[e,[]]));for(let n of e??[])for(let s of n?.dependsOn??[]){var r,a,i;s.taskKey&&n.taskKey&&(r=t[s.taskKey],a=n.taskKey,i=e,r?r.push(a):f.iT.sev2(m.Es.WorkflowsObservabilityLists,"dependent task not found in job spec",JSON.stringify(i)))}return t})(e),r=[],a=e.reduce((e,t)=>(t.taskKey&&(e[t.taskKey]=t),e),{}),[i,s]=e.reduce(([e,t],r)=>(r.taskKey&&(e[r.taskKey]=r.dependsOn?.length??0,0===e[r.taskKey]&&t.push(r)),[e,t]),[{},[]]),o=[];for(;s.length;){let e=s.shift();if(e&&e.taskKey){for(let n of(r.push(e),t[e.taskKey]))i[n]-=1,0===i[n]&&o.push(a[n]);0===s.length&&(s=y(o),o=[])}}if(r.length!==e.length)throw Error("Cyclic dependency found");return r},y=e=>[...e].sort((e,t)=>{if(s()(e.taskKey)&&s()(t.taskKey))return e.taskKey.toLowerCase().localeCompare(t.taskKey.toLowerCase(),"en",{numeric:!0});return f.iT.sev2(m.Es.WorkflowsObservabilityLists,"JaWS: null taskKey was passed to tasks sorting function. The matrix view sorting order is undefined",{taskKeyA:e.taskKey,taskKeyB:t.taskKey}),0});function v(e){switch(e){case"Internal error":case"Failed":case"Terminated":case"Terminating":case"Blocked":case"Timed out":case"Canceled":case"Canceling":return!0;default:return!1}}},440214:(e,t,r)=>{r.d(t,{j:()=>ea});var a=r(610435),n=r(692738),i=r(497895),s=r(382908),o=r(79128),l=r(308675),u=r(943844),d=r(553935),c=r(342411),p=r(79570),f=r(664093),m=r(703140),g=r(763835),h=r(278536),b=r(217985),y=r(372493);let v=(0,n.forwardRef)(({"aria-label":e,...t},r)=>(0,a.Y)("div",{ref:r,role:"table",css:{position:"relative",minHeight:0,maxHeight:"calc(100%)",textAlign:"left",overflow:"hidden",fontSize:13,fontFamily:"inherit"},"aria-label":e,...t})),x=(0,n.forwardRef)(({...e},t)=>(0,a.Y)("div",{ref:t,role:"rowgroup",css:{fontSize:13,minHeight:0,maxHeight:"100%",overflow:"auto",width:"100%","&:focus":{outline:"none"}},...e})),k=(0,n.forwardRef)(({height:e,...t},r)=>(0,a.Y)("div",{ref:r,css:t=>({boxSizing:"border-box",display:"flex",alignItems:"center",borderBottom:`1px solid ${t.colors.borderDecorative}`,minHeight:e,"&:last-of-type":{borderBottom:"none"},"&:hover":{backgroundColor:t.colors.tableRowHover},transition:"background 0.3s"}),role:"row","data-testid":"jaws-row",...t})),w=(0,n.forwardRef)(({...e},t)=>(0,a.Y)("div",{ref:t,role:"cell",css:e=>({color:e.colors.textPrimary,boxSizing:"border-box",height:"100%",display:"flex",alignItems:"center"}),...e}));var R=r(261860);let A={minWidth:R.NX+" !important",display:"flex",height:"100%",alignItems:"flex-end",position:"relative"},Y=e=>({minWidth:R.g8,maxWidth:R.g8,position:"sticky",left:0,height:"100%",backgroundColor:e.colors.backgroundPrimary,zIndex:2}),I={width:"fit-content",minWidth:`calc(100% - ${R.Ad})`,padding:0,"& > div:first-of-type":{marginLeft:"4px"},transition:"none"},_=e=>({"&::before":{content:'""',position:"absolute",backgroundColor:e.colors.borderValidationWarning,top:0,left:0,right:0,bottom:0,opacity:.6}});var S=r(379164),T=r(547903),j=r(27148),C=r(870981),E=r(247930);let D=({run:e,maxDuration:t,canRunJob:r,durationWarningMilliseconds:n,excludeQueuedDuration:s})=>{let{theme:o}=(0,i.wn)(),{connection:l}=(0,T.Ei)(),u=(0,c.tz)(),d=e.state?.durationWarningExceeded===!0;return(0,a.Y)(y.ok,{run:e,taskRuns:e.tasks,canRunJob:r,children:(0,a.Y)(b.N,{componentId:"runs.matrix_view.run_indicator_click",to:(0,g.Uc)().runDetails({jobId:e.jobId??"",runId:e.runId??""}),"aria-label":u.formatMessage({id:"UIyztt",defaultMessage:"Go to job run"}),css:[A,{position:"relative","&:hover > div":{outline:`2px solid ${o.colors.primary}`,border:"1px solid white"},maxHeight:"105px",...d&&_(o)}],"data-testid":"run-state-indicator",asAnchorTag:!0,children:(0,a.Y)("div",{style:{height:`${z(l,e,s)/t*(n>t?70:100)}px`,backgroundColor:h.n[(0,j.Io)(e.state)],backgroundImage:(0,S.CO)((0,j.Io)(e.state))?"repeating-linear-gradient(-45deg, rgba(255,255,255, 0.25), rgba(255,255,255, 0.25) 1px, transparent 1px, transparent 6px)":"none"},css:{zIndex:1,width:R.pE,minHeight:"12px",position:"relative",margin:"auto",marginBottom:R.gh,borderRadius:R.bK,animation:(0,j.Oy)(e.state)?R.gD:void 0}})})})},$=({children:e})=>(0,a.Y)("div",{css:A,children:e}),M=()=>{let{theme:e}=(0,i.wn)();return(0,a.Y)("div",{css:{position:"absolute",bottom:"4px",left:"50%",width:"1px",height:"100px",backgroundColor:e.colors.borderDecorative},className:R.Rs})},F=()=>{let{theme:e}=(0,i.wn)(),t=Array(7).fill(0).map((t,r)=>(0,a.Y)("div",{css:{position:"absolute",height:"105px",width:"1px",top:"0px",backgroundColor:e.colors.borderDecorative},style:{left:6===r?"calc(100% - 1px)":`${16.666666666666668*r}%`}},r));return(0,a.Y)("div",{css:{display:"none",[R.vb]:{display:"block"}},children:t})},L=({run:e,maxDuration:t,displayTickMarkup:r,canRunJob:n,durationWarningMilliseconds:s,excludeQueuedDuration:o})=>{let l=(0,c.tz)(),u=(0,a.Y)(D,{run:e,maxDuration:t,canRunJob:n,durationWarningMilliseconds:s,excludeQueuedDuration:o}),{theme:d}=(0,i.wn)();if(!r)return(0,a.Y)($,{children:u});return(0,a.FD)($,{children:[u,(0,a.Y)(M,{}),(0,a.Y)("span",{css:{position:"absolute",left:0,top:-35,color:d.colors.actionDefaultTextDefault,fontSize:d.typography.fontSizeSm,whiteSpace:"nowrap",overflow:"hidden"},className:R.Rs,children:m.C.formatDateFromTimestamp(e.durationInfo?.startTime??0,l)})]})},P=({className:e,backgroundColor:t,lineStyle:r,top:n})=>{let{theme:s}=(0,i.wn)();return(0,a.Y)("div",{css:{position:"absolute",height:"1px",width:"100%",right:0,borderTop:`1px ${r??"solid"} ${t??s.colors.borderDecorative}`},style:{top:n},className:e})},N=({className:e,children:t,color:r,top:n})=>{let{theme:s}=(0,i.wn)();return(0,a.Y)("span",{css:{position:"absolute",right:"5px",width:"auto",color:r??s.colors.actionDefaultTextDefault,fontSize:s.typography.fontSizeSm,textAlign:"right"},className:e,style:{top:n},children:t})},q=({runs:e,canRunJob:t,durationWarningSeconds:r,excludeQueuedDuration:n})=>{let{connection:s}=(0,T.Ei)(),o=Math.max(1,...e.map(e=>z(s,e,n)).filter(e=>e>0)),{theme:l}=(0,i.wn)(),u=e.some(e=>(0,j.Oy)(e.state)),d=1e3*r;return(0,C.Q)({interval:3e3,enabled:u}),(0,a.FD)(k,{height:R.EL,css:[I,{":hover":{backgroundColor:"transparent"},borderBottom:`1px solid ${l.colors.borderDecorative}`,height:R.EL,alignItems:"stretch",paddingTop:R.$H}],children:[(0,a.Y)(w,{css:[Y,{borderRight:`1px solid ${l.colors.borderDecorative}`}],className:R.Rs,children:(0,a.Y)(W,{maxDuration:o,durationWarningMilliseconds:d})}),(0,a.FD)(w,{css:{position:"relative",alignItems:"flex-end",height:"auto",justifyContent:"flex-end",flex:1},children:[(0,a.Y)(O,{maxDuration:o,durationWarningMilliseconds:d}),(0,a.Y)(F,{}),e.map((e,r)=>(0,a.Y)(L,{run:e,maxDuration:o,displayTickMarkup:r%6==0,canRunJob:t,durationWarningMilliseconds:d,excludeQueuedDuration:n},e.runId))]})]})},O=({maxDuration:e,durationWarningMilliseconds:t})=>{let{theme:r}=(0,i.wn)(),n=m.C.formatDuration(t/1e3)!==m.C.formatDuration(e/1e3);if(!e&&0===t)return(0,a.Y)(a.FK,{});if(e&&0===t)return(0,a.FD)(a.FK,{children:[(0,a.Y)(P,{top:0}),(0,a.Y)(P,{top:50})]});if(!e&&0!==t)return(0,a.Y)(P,{top:71,backgroundColor:r.colors.textValidationWarning,lineStyle:"dashed"});if(t<=e)return(0,a.FD)(a.FK,{children:[(0,a.Y)(P,{top:0}),(0,a.Y)(P,{top:0+(1-t/e)*100,backgroundColor:r.colors.textValidationWarning,lineStyle:"dashed"}),(0,a.Y)(P,{top:50})]});return(0,a.FD)(a.FK,{children:[(0,a.Y)(P,{top:0,backgroundColor:r.colors.textValidationWarning,lineStyle:"dashed"}),n&&(0,a.Y)(P,{top:30}),(0,a.Y)(P,{top:n?65:50})]})},W=({maxDuration:e,durationWarningMilliseconds:t})=>{let{theme:r}=(0,i.wn)(),n=m.C.formatDuration(t/1e3)!==m.C.formatDuration(e/1e3),s=(1-t/e)*100;if(!e&&0===t)return(0,a.Y)(a.FK,{});if(e&&0===t||(s<10||s>30&&s<70)&&t<=e)return(0,a.FD)(a.FK,{children:[(0,a.Y)(N,{top:-8,children:m.C.formatDuration(e/1e3)}),(0,a.Y)(N,{top:40,children:m.C.formatDuration(e/2/1e3)})]});if(!e&&0!==t)return(0,a.Y)(N,{top:16,color:r.colors.textValidationWarning,children:(0,a.Y)(B,{durationWarningMilliseconds:t})});if(t<=e)return(0,a.FD)(a.FK,{children:[(0,a.Y)(N,{top:-8,children:m.C.formatDuration(e/1e3)}),(0,a.Y)(N,{top:-8+s,color:r.colors.textValidationWarning,children:(0,a.Y)(B,{durationWarningMilliseconds:t})}),(0,a.Y)(N,{top:40,children:m.C.formatDuration(e/2/1e3)})]});return(0,a.FD)(a.FK,{children:[(0,a.Y)(N,{top:-8,color:r.colors.textValidationWarning,children:(0,a.Y)(B,{durationWarningMilliseconds:t})}),n&&(0,a.Y)(N,{top:16,children:m.C.formatDuration(e/1e3)}),(0,a.Y)(N,{top:n?55:40,children:m.C.formatDuration(e/2/1e3)})]})},z=(e,t,r)=>{let a=t.durationInfo?.queueDuration??0;return E.Ly.getDuration({connection:e,active:(0,j.Oy)(t.state),startTime:t.durationInfo?.startTime??void 0,durationMillis:(0,j.Qx)(t.durationInfo),runDurationMillis:t.durationInfo?.runDuration??null})-(r?a:0)},B=({durationWarningMilliseconds:e})=>{let{theme:t}=(0,i.wn)();return(0,a.Y)(p.m,{content:(0,a.Y)(c.sA,{id:"NE9MTv",defaultMessage:"Duration warning threshold"}),side:"bottom",componentId:"jobs.runs-matrix.duration-warning-threshold-tooltip",children:(0,a.FD)("div",{"data-testid":"duration-warning-label",children:[(0,a.Y)(f.A,{css:{marginRight:t.spacing.xs},size:5}),m.C.formatDuration(e/1e3)]})})};var V=r(295169);function J(){let{theme:e}=(0,i.wn)();return(0,a.Y)(v,{css:{flex:1,position:"relative",overflowX:"auto",pointerEvents:"none"},children:(0,a.FD)(x,{children:[(0,a.FD)(k,{height:R.EL,css:[{alignItems:"stretch",borderBottom:0},I],children:[(0,a.Y)(w,{css:[Y,{borderRight:"1px transparent"}],className:R.Rs}),(0,a.Y)(w,{css:{position:"relative",alignItems:"flex-end",height:"auto",justifyContent:"flex-end",flex:1},children:Array(10).fill(0).map((e,t)=>(0,a.Y)($,{children:(0,a.Y)(V.x,{style:{width:R.pE,height:50+t%2*50,margin:"0 auto 5px auto"}})},t))})]}),[,,,,,].fill(0).map((t,r)=>(0,a.FD)(k,{height:R.Tq,css:[{borderBottom:0},I],children:[(0,a.Y)(w,{css:Y,"data-testid":"task-key-column",className:R.Rs,children:(0,a.Y)(V.x,{style:{width:100+r%3*50,height:R.pE}})}),(0,a.Y)(w,{css:{justifyContent:"flex-end",flex:1,height:"100%"},"data-testid":"task-runs-column",children:Array(10).fill(0).map((t,r)=>(0,a.Y)($,{children:(0,a.Y)(V.x,{style:{position:"relative",width:R.pE,height:R.pE,borderRadius:e.legacyBorders.borderRadiusMd,margin:"0 auto"}})},r))})]},r))]})})}var U=r(956935),K=r(524178);let H=({taskRun:e,run:t,taskRunRowClassNames:r,canRunJob:n})=>{let s=(0,j.Io)(e.state),{theme:o}=(0,i.wn)(),l=e.state?.durationWarningExceeded===!0,u=(0,c.tz)();return(0,a.Y)(y.qE,{run:e,parentRun:t,canRunJob:n,children:(0,a.Y)(b.N,{componentId:"runs.matrix_view.task_indicator_click",to:(0,g.Uc)().runDetails({jobId:t.jobId??"",runId:e.runId??""}),className:r.stateLink,"aria-label":u.formatMessage({id:"n6LeQo",defaultMessage:"Go to task run"}),css:{position:"relative",...l&&_(o)},"data-testid":"task-state-indicator",asAnchorTag:!0,children:(0,a.Y)("div",{className:(0,K.A)({[r.stateIcon]:!0,[r.stateIconActive]:(0,j.Oy)(e.state)}),style:{zIndex:1,backgroundColor:h.n[s],backgroundImage:(0,S.CO)(s)?"repeating-linear-gradient(-45deg, rgba(255,255,255, 0.25), rgba(255,255,255, 0.25) 1px, transparent 1px, transparent 6px)":"none"}})})})},Q=({taskKey:e,taskRuns:t,runs:r,canRunJob:n})=>{let{theme:o}=(0,i.wn)();return(0,a.Y)(U.Z2,{children:({css:i})=>{let l={stateLink:i([A,{"&:hover > div":{outline:`2px solid ${o.colors.primary}`,border:"1px solid white"}}]),stateIcon:i({position:"relative",width:R.pE,height:R.pE,margin:"auto",borderRadius:R.bK}),stateIconActive:i({animation:R.gD})};return(0,a.FD)(k,{height:R.Tq,css:[I,{borderBottom:`1px solid ${o.colors.borderDecorative}!important`,height:R.Tq,"&:hover":{"--hover-background-color":o.colors.tableRowHover}}],"data-testid":"tasks-row",children:[(0,a.Y)(w,{css:[Y,{borderRight:`1px solid ${o.colors.borderDecorative}`}],"data-testid":"task-key-column",className:R.Rs,children:(0,a.Y)(s.o.Text,{ellipsis:!0,dangerouslySetAntdProps:{title:e},children:e})}),(0,a.Y)(w,{css:{justifyContent:"flex-end",flex:1,height:"100%"},"data-testid":"task-runs-column",children:t.map((e,t)=>{if(!e)return(0,a.Y)("div",{css:A},t);return(0,a.Y)(H,{taskRun:e,run:r[t],taskRunRowClassNames:l,canRunJob:n},e.runId)})})]})}})};var G=r(620839),X=r(643853),Z=r(47708);let ee=e=>({width:"48px",height:"12px !important",borderRadius:"1em",position:"absolute",left:"50%",transform:"translateX(-50%)",backgroundColor:`${e.colors.backgroundPrimary} !important`,"&:hover":{backgroundColor:`${e.colors.backgroundPrimary} !important`}}),et=e=>({fontSize:"16px",verticalAlign:"middle",color:e.colors.textPrimary}),er=(e,t=0)=>({position:"absolute",transformOrigin:"left top",transform:`rotate(-90deg) translateX(calc(-50% - ${e} / 2))`,top:t,left:0,zIndex:3}),ea=({queryResult:e,canRunJob:t,excludeQueuedDuration:r,hideTaskRuns:d})=>{let{loading:p,data:f,error:m,refetch:g}=e,{theme:h}=(0,i.wn)(),[b,y]=(0,n.useState)(!1),k=(0,n.useRef)(null),w=(0,n.useRef)(null);if((0,n.useLayoutEffect)(()=>{p||w?.current?.scrollTo?.({left:w.current.scrollWidth})},[w,p]),p)return(0,a.Y)(J,{});if(m||!f)return(0,a.Y)(Z.c,{onRefresh:g,children:(0,a.Y)(c.sA,{id:"ZpUDfQ",defaultMessage:"Error fetching runs for the view"})});let A=[...f?.jobsListRunsPaginated?.jobsRuns?.edges?.map(({node:e})=>e)??[]].reverse(),Y=(0,S.sA)(f?.jobsGetJob?.job?.settings?.tasks??[]),I=(0,S.r6)(A,f?.jobsGetJob?.job?.settings?.tasks??[]),_=Y.length>5&&!d,T=(0,X.tW)(f?.jobsGetJob?.job?.settings?.health)??0;return(0,a.FD)("div",{style:{position:"relative"},"data-testid":"runs-matrix-view",css:{[R.vb]:{"--runs-matrix-cell-width":"20px","--runs-matrix-unit-width":"12px","--runs-matrix-unit-radius":"2px","--runs-matrix-padding-right":"0px","--runs-matrix-padding-left":"0px","--runs-matrix-padding-top":"0px","--runs-matrix-run-state-margin-bottom":"0px","--runs-matrix-task-row-height":"20px","--runs-matrix-header-height":"105px","--runs-matrix-table-min-height":"205px",[`& .${R.Rs}`]:{display:"none"}}},children:[(0,a.FD)(v,{css:{flex:1,position:"relative",overflowX:"auto",paddingLeft:R.v6,minHeight:R.Yk,maxHeight:`calc(5 * ${R.Tq} + ${R.EL})`,overflowY:"auto"},style:b||!_?{maxHeight:"600px"}:{},ref:k,children:[(0,a.Y)(s.o.Text,{style:er(R.EL),className:R.Rs,children:(0,a.Y)(c.sA,{id:"VhO8rO",defaultMessage:"Run total duration"})}),(0,a.Y)(s.o.Text,{style:er(`(${R.Yk} - ${R.EL})`,R.EL),className:R.Rs,children:(0,a.Y)(c.sA,{id:"1vtiCs",defaultMessage:"Tasks"})}),(0,a.FD)(x,{ref:w,children:[(0,a.Y)(q,{runs:A,canRunJob:t,durationWarningSeconds:T,excludeQueuedDuration:r}),!d&&Y.map(e=>(0,a.Y)(Q,{taskKey:e.taskKey??"",runs:A,taskRuns:I[e.taskKey??""],canRunJob:t},e.taskKey??""))]}),d&&(0,a.Y)(en,{})]}),(0,a.Y)(ei,{tableRef:k,tableExpanded:b}),_&&(0,a.FD)("div",{css:{width:"100%",position:"relative",zIndex:5,boxSizing:"border-box",paddingLeft:R.v6,paddingRight:R.Ad},children:[(0,a.Y)("div",{css:{width:"100%",borderTop:`1px solid ${h.colors.borderDecorative}`}}),(0,a.Y)("div",{css:{position:"relative",top:"-6px"},children:(0,a.Y)(o.$n,{componentId:"codegen_webapp_js_jaws_runs_runs_matrix_view_expandablerunsmatrixview.tsx_149","data-testid":"expand-button",onClick:()=>{y(!b)},css:ee,children:b?(0,a.Y)(l.A,{"data-testid":"button-icon-up",css:et}):(0,a.Y)(u.A,{"data-testid":"button-icon-down",css:et})})})]})]})},en=()=>(0,a.FD)("div",{css:e=>({height:"120px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",color:e.colors.textSecondary,backgroundColor:e.colors.backgroundSecondary}),children:[(0,a.Y)(d.A,{}),(0,a.Y)("span",{style:{marginTop:8,fontSize:12},children:(0,a.Y)(c.sA,{id:"ViVCZy",defaultMessage:"The job has too many tasks to render in this view. Please select a specific run to view the task list. <link>Learn more</link>",values:{link:e=>(0,a.Y)(s.o.Link,{componentId:"RunMatrixView.JumboJobsTaskRunsPlaceholder",openInNewTab:!0,href:G.A.LARGE_JOBS_MATRIX_VIEW,children:e})}})})]});function ei({tableRef:e,tableExpanded:t}){let[r,i]=(0,n.useState)(!1),s=(0,n.useCallback)(()=>{let t=e.current;t&&t.scrollTop===t.scrollHeight-t.offsetHeight?i(!0):i(!1)},[e]);return(0,n.useEffect)(()=>{let t=e.current;return t?.addEventListener("scroll",s),()=>t?.removeEventListener("scroll",s)},[s,e]),(0,n.useEffect)(s,[s,t]),r?null:(0,a.Y)("div",{css:e=>({position:"absolute",bottom:0,left:0,right:0,background:`linear-gradient(transparent, ${e.colors.backgroundPrimary})`,height:`calc(2 * ${R.Tq})`,zIndex:4,pointerEvents:"none"})})}},442493:(e,t,r)=>{r.d(t,{a:()=>n});var a,n=((a={}).Notebook="notebook",a.Cluster="cluster",a.Runtime="runtime",a)},460507:(e,t,r)=>{r.d(t,{A:()=>C});var a,n,i,s,o,l,u,d,c,p=r(657709),f=r(542936),m=r(155026),g=r(692738),h=r(157698),b=r.n(h),y=r(452137),v=r.n(y),x=r(143148),k=r(90114),w=r.n(k),R=r(628209),A=r(593886),Y=r(74992),I=r(918058),_=["_reduxForm","value"],S=r(94491),T=r(672582),j=function(e,t){return e&&function(){for(var r=Array.isArray(e)?e:[e],a=0;a<r.length;a++){var n,i=r[a].apply(r,arguments);if(i)return(n={})[t]=i,n}}};let C=(n=(a=r(629379).A).deepEqual,i=a.getIn,s=a.size,o=a.equals,l=a.orderChanged,(u=function(e){function t(){for(var t,r=arguments.length,a=Array(r),n=0;n<r;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))||this).ref=g.createRef(),t.getValue=function(e){return t.props.value&&i(t.props.value,String(e))},t}(0,m.A)(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(e){var t=this,r=this.props.value,a=e.value;if(r&&a){var i=o(a,r),s=l(r,a);if((r.length||r.size)!==(a.length||a.size)||i&&s||e.rerenderOnEveryChange&&r.some(function(e,t){return!n(e,a[t])}))return!0}var u=Object.keys(e),d=Object.keys(this.props);return!!(this.props.children||e.children||u.length!==d.length||u.some(function(r){return!~_.indexOf(r)&&!n(t.props[r],e[r])}))},r.getRenderedComponent=function(){return this.ref.current},r.render=function(){var e,t,r,n,i,s,o,l,u,d,c,f,m,h,b,y,v,k,w,R,A,Y,I,_,S,T,j,C,E,D=this.props,$=D.component,M=D.forwardRef,F=D.name,L=D._reduxForm,P=(D.validate,D.warn,D.rerenderOnEveryChange,(0,x.A)(D,["component","forwardRef","name","_reduxForm","validate","warn","rerenderOnEveryChange"])),N=(e=L.form,t=L.sectionPrefix,r=this.getValue,n=a.getIn,i=P.arrayInsert,s=P.arrayMove,o=P.arrayPop,l=P.arrayPush,u=P.arrayRemove,d=P.arrayRemoveAll,c=P.arrayShift,f=P.arraySplice,m=P.arraySwap,h=P.arrayUnshift,b=P.asyncError,y=P.dirty,v=P.length,k=P.pristine,w=P.submitError,P.state,R=P.submitFailed,A=P.submitting,Y=P.syncError,I=P.syncWarning,_=P.value,S=P.props,T=(0,x.A)(P,["arrayInsert","arrayMove","arrayPop","arrayPush","arrayRemove","arrayRemoveAll","arrayShift","arraySplice","arraySwap","arrayUnshift","asyncError","dirty","length","pristine","submitError","state","submitFailed","submitting","syncError","syncWarning","value","props"]),j=Y||b||w,C=t?F.replace(t+".",""):F,E=(0,p.A)({fields:{_isFieldArray:!0,forEach:function(e){return(_||[]).forEach(function(t,r){return e(C+"["+r+"]",r,E.fields)})},get:r,getAll:function(){return _},insert:i,length:v,map:function(e){return(_||[]).map(function(t,r){return e(C+"["+r+"]",r,E.fields)})},move:s,name:F,pop:function(){return o(),n(_,String(v-1))},push:l,reduce:function(e,t){return(_||[]).reduce(function(t,r,a){return e(t,C+"["+a+"]",a,E.fields)},t)},remove:u,removeAll:d,shift:function(){return c(),n(_,"0")},splice:f,swap:m,unshift:h},meta:{dirty:y,error:j,form:e,warning:I,invalid:!!j,pristine:k,submitting:A,submitFailed:R,valid:!j}},S,{},T));return M&&(N.ref=this.ref),(0,g.createElement)($,N)},(0,f.A)(t,[{key:"dirty",get:function(){return this.props.dirty}},{key:"pristine",get:function(){return this.props.pristine}},{key:"value",get:function(){return this.props.value}}]),t}(g.Component)).propTypes={component:I.A,props:b().object,rerenderOnEveryChange:b().bool},u.defaultProps={rerenderOnEveryChange:!1},d=(0,R.Ng)(function(e,t){var r,a,o=t.name,l=t._reduxForm,u=l.initialValues,d=(0,l.getFormState)(e),c=i(d,"initial."+o)||u&&i(u,o),p=i(d,"values."+o),f=i(d,"submitting"),m=(r=i(d,"syncErrors"),Y.A.getIn(r,o+"._error")),g=(a=i(d,"syncWarnings"),i(a,o+"._warning")),h=n(p,c);return{asyncError:i(d,"asyncErrors."+o+"._error"),dirty:!h,pristine:h,state:i(d,"fields."+o),submitError:i(d,"submitErrors."+o+"._error"),submitFailed:i(d,"submitFailed"),submitting:f,syncError:m,syncWarning:g,value:p,length:s(p)}},function(e,t){var r=t.name,a=t._reduxForm,n=a.arrayInsert,i=a.arrayMove,s=a.arrayPop,o=a.arrayPush,l=a.arrayRemove,u=a.arrayRemoveAll,d=a.arrayShift,c=a.arraySplice,p=a.arraySwap,f=a.arrayUnshift;return w()({arrayInsert:n,arrayMove:i,arrayPop:s,arrayPush:o,arrayRemove:l,arrayRemoveAll:u,arrayShift:d,arraySplice:c,arraySwap:p,arrayUnshift:f},function(t){return(0,A.zH)(t.bind(null,r),e)})},void 0,{forwardRef:!0})(u),(c=function(e){function t(t){var r;if((r=e.call(this,t)||this).ref=g.createRef(),!t._reduxForm)throw Error("FieldArray must be inside a component decorated with reduxForm()");return r}(0,m.A)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;this.props._reduxForm.register(this.name,"FieldArray",function(){return j(e.props.validate,"_error")},function(){return j(e.props.warn,"_warning")})},r.UNSAFE_componentWillReceiveProps=function(e){var t=(0,S.A)(this.props,this.props.name),r=(0,S.A)(e,e.name);t!==r&&(this.props._reduxForm.unregister(t),this.props._reduxForm.register(r,"FieldArray"))},r.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},r.getRenderedComponent=function(){return v()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to FieldArray"),this.ref&&this.ref.current.getRenderedComponent()},r.render=function(){return(0,g.createElement)(d,(0,p.A)({},this.props,{name:this.name,ref:this.ref}))},(0,f.A)(t,[{key:"name",get:function(){return(0,S.A)(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.ref||this.ref.current.dirty}},{key:"pristine",get:function(){return!!(this.ref&&this.ref.current.pristine)}},{key:"value",get:function(){return this.ref?this.ref.current.value:void 0}}]),t}(g.Component)).propTypes={name:b().string.isRequired,component:I.A,props:b().object,validate:b().oneOfType([b().func,b().arrayOf(b().func)]),warn:b().oneOfType([b().func,b().arrayOf(b().func)]),forwardRef:b().bool,_reduxForm:b().object},(0,T.Po)(c))},497275:(e,t,r)=>{r.d(t,{oA:()=>$,Jd:()=>E,fN:()=>L,CW:()=>D});var a=r(610435),n=r(692738),i=r(79570),s=r(342411),o=r(295169),l=r(382908),u=r(126927),d=r(79128),c=r(694762),p=r(339518),f=r(225352),m=r(615693),g=r(217985),h=r(737358);let b=(e,t)=>{if(e.catalogName!==t.catalogName)return t.catalogName?e.catalogName?.localeCompare(t.catalogName)??1:-1;if(e.schemaName!==t.schemaName)return t.schemaName?e.schemaName?.localeCompare(t.schemaName)??1:-1;if(e.name!==t.name)return t.name?e.name?.localeCompare(t.name)??1:-1;return 0},y=e=>{let t=[...e];return t.sort(b),t},v=({data:e})=>{let t=(0,s.tz)(),r=(0,n.useMemo)(()=>{let r=[];return e.upstreamTables?.length&&r.push(x({tables:y(e.upstreamTables.filter(e=>null!==e)),title:t.formatMessage(k.upstreamTitle,{tablesCount:e.upstreamTables.length,isSingleTable:1===e.upstreamTables.length}),key:"upstream"})),e.downstreamTables?.length&&r.push(x({tables:y(e.downstreamTables.filter(e=>null!==e)),title:t.formatMessage(k.downstreamTitle,{tablesCount:e.downstreamTables.length,isSingleTable:1===e.downstreamTables.length}),key:"downstream"})),r},[e,t]);return(0,a.Y)(f.P,{defaultExpandedKeys:["upstream","downstream"],mode:"default",treeData:r,"data-testid":"jobs-lineage-table-tree"})},x=({tables:e,title:t,key:r})=>({key:r,title:t,children:e.map((e,t)=>({key:`${r}-${t}`,title:(({table:e,testId:t})=>{let r=e?.hasPermission??!0?(0,a.Y)(i.m,{content:w.viewInTheDataExplorer,componentId:"lineage-table-row-data-explorer-link-tooltip",children:(0,a.Y)(g.N,{componentId:"codegen_webapp_js_jaws_jobs_side_panel_lineagetabletree.tsx_111",to:(0,h.tW)("/explore/data/:catalogName/:schemaName/:name",{catalogName:e.catalogName??"",schemaName:e.schemaName??"",name:e.name??""}),asChild:!0,children:(0,a.FD)(l.o.Link,{componentId:"codegen_webapp_js_jaws_jobs_side_panel_lineagetabletree.tsx_122",ellipsis:!0,"data-testid":t,title:`${e.catalogName}.${e.schemaName}.${e.name}`,children:[e.catalogName,".",e.schemaName,".",e.name]})})}):(0,a.Y)(i.m,{content:w.insufficientPrivileges,componentId:"lineage-table-row-insufficient-privileges-tooltip",children:(0,a.Y)("span",{children:(0,a.Y)(l.o.Text,{color:"secondary","data-testid":t,children:w.masked})})});return(0,a.FD)("div",{css:e=>({display:"flex",gap:e.spacing.sm,alignItems:"center"}),children:[(0,a.Y)(m.A,{}),r]})})({table:e,testId:`jobs-lineage-${r}-${t}`})}))}),k={upstreamTitle:(0,s.zR)({id:"LEwgKt",defaultMessage:"Upstream {isSingleTable, select, true {table} other {tables}} read by this job ({tablesCount})"}),downstreamTitle:(0,s.zR)({id:"yLov8W",defaultMessage:"Downstream {isSingleTable, select, true {table} other {tables}} written to by this job ({tablesCount})"})},w={masked:(0,a.Y)(s.sA,{id:"Yuo1zW",defaultMessage:"Masked"}),insufficientPrivileges:(0,a.Y)(s.sA,{id:"1r+OJH",defaultMessage:"Insufficient privileges to view this table"}),viewInTheDataExplorer:(0,a.Y)(s.sA,{id:"+eeVie",defaultMessage:"View in the Catalog Explorer"})},R=({data:e,isModalVisible:t,handleCancel:r})=>(0,a.FD)(c.aF,{componentId:"codegen_webapp_js_jaws_jobs_side_panel_modals_lineagemodal.tsx_21",title:(0,a.Y)(l.o.Text,{size:"xl",ellipsis:!0,children:A.modalTitle}),cancelText:(0,a.Y)(s.sA,{id:"vzEllG",defaultMessage:"Close"}),visible:t,onCancel:r,"aria-label":"Lineage","data-testid":"jobs-lineage-modal",cancelButtonProps:{"data-testid":"jobs-lineage-modal-cancel-button"},children:[(0,a.Y)(p.F,{componentId:"codegen_webapp_js_jaws_jobs_side_panel_modals_lineagemodal.tsx_36",type:"info",message:A.lineageInfoWarning,closable:!1,"data-testid":"jobs-lineage-modal-alert",css:e=>({marginBottom:e.spacing.lg})}),(0,a.Y)(v,{data:e})]}),A={lineageInfoWarning:(0,a.Y)(s.sA,{id:"MAui1F",defaultMessage:"The following is the combined lineage data from runs of this job in the past 30 days."}),modalTitle:(0,a.Y)(s.sA,{id:"wK/S2D",defaultMessage:"Tables related to this job"})};var Y=r(620839),I=r(67656);let _=({data:e,loading:t})=>{let[r,i]=(0,n.useState)(!1);if(t)return(0,a.Y)(o.x,{"data-testid":"jobs-lineage-value-loading-skeleton",style:{width:130,height:20}});if(0===(e.downstreamTables?.length??0)+(e.upstreamTables?.length??0)){let e=I.R.getDbGuideUrl(Y.A.LINEAGE_DOCS);return(0,a.FD)(a.FK,{children:[(0,a.Y)(l.o.Text,{color:"secondary","data-testid":"jobs-lineage-value-field",css:{display:"flex",alignItems:"center"},children:S.noLineage(e.length)}),e.length>0&&(0,a.FD)(l.o.Link,{componentId:"codegen_webapp_js_jaws_jobs_side_panel_lineagevaluefield.tsx_50","data-testid":"jobs-lineage-info-button",href:e,target:"_blank",children:[S.learnMore," ",(0,a.Y)(u.A,{})]})]})}let c=e.upstreamTables?.length??0,p=e.downstreamTables?.length??0,f=e.hasMoreUpstream&&c>0?`${c}+`:c,m=e.hasMoreDownstream&&p>0?`${p}+`:p;return(0,a.FD)(a.FK,{children:[(0,a.Y)(d.$n,{componentId:"codegen_webapp_js_jaws_jobs_side_panel_lineagevaluefield.tsx_67",type:"link",onClick:()=>{i(!0)},"data-testid":"jobs-lineage-modal-button",css:{whiteSpace:"normal",textAlign:"left"},children:(0,a.Y)(s.sA,{id:"+yaZ1c",defaultMessage:"{upstreamTablesCount} upstream {isSingleUpstreamTable, select, true {table} other {tables}}, {downstreamTablesCount} downstream {isSingleDownstreamTable, select, true {table} other {tables}}",values:{upstreamTablesCount:f,downstreamTablesCount:m,isSingleUpstreamTable:1===c,isSingleDownstreamTable:1===p}})}),(0,a.Y)(R,{data:e,isModalVisible:r,handleCancel:()=>{i(!1)}})]})},S={noLineage:e=>(0,a.Y)(s.sA,{id:"AU13An",defaultMessage:"No lineage information for this job{docLinkNum, plural, =0 {} other {. }}",values:{docLinkNum:e}}),learnMore:(0,a.Y)(s.sA,{id:"mOaW/9",defaultMessage:"Learn more"})};var T=r(663415),j=r(558709),C=r(921625);let E={upstreamTables:[],downstreamTables:[],hasMoreDownstream:!1,hasMoreUpstream:!1},D=()=>(0,T.Hx)(),$=({tooltipDescriptor:e,data:t,loading:r})=>(0,a.Y)(C.K,{keyField:(0,a.FD)("span",{style:{display:"inline-flex",alignItems:"center"},children:[F.lineage," ",(0,a.Y)(M,{tooltipDescriptor:e})]}),valueField:(0,a.Y)(_,{data:t,loading:r}),testId:"jobs-lineage",compact:!0}),M=({tooltipDescriptor:e})=>(0,a.Y)(i.m,{side:"left",content:e,componentId:"lineage-key-value-info-tooltip",children:(0,a.Y)(j.K,{})}),F={lineage:(0,a.Y)(s.sA,{id:"PFP5pg",defaultMessage:"Lineage"})},L={jobDetails:(0,a.Y)(s.sA,{id:"GEhcGr",defaultMessage:"<p>Aggregated lineage information of the job.</p><p>Lineage includes all the tables this job reads from (upstream) as well as all the tables this job writes into (downstream). This feature is only available for Unity Catalog tables.</p>",values:{p:e=>(0,a.Y)("p",{children:e})}}),jobRunDetails:(0,a.Y)(s.sA,{id:"RIIt1E",defaultMessage:"<p>Aggregated lineage information of the job. May not be accurate for this particular job run.</p><p>Lineage includes all the tables this job reads from (upstream) as well as all the tables this job writes into (downstream). This feature is only available for Unity Catalog tables.</p>",values:{p:e=>(0,a.Y)("p",{children:e})}}),taskRunDetails:(0,a.Y)(s.sA,{id:"XnYp3a",defaultMessage:"<p>Aggregated lineage information of the job. May not be related to this particular task run.</p><p>Lineage includes all the tables this job reads from (upstream) as well as all the tables this job writes into (downstream). This feature is only available for Unity Catalog tables.</p>",values:{p:e=>(0,a.Y)("p",{children:e})}})}},501132:(e,t,r)=>{r.d(t,{W:()=>n});var a,n=((a={}).NOTEBOOK_LIBRARIES_PANEL="notebookLibrariesPanel",a.NOTEBOOK_ENVIRONMENT_PANEL="notebookEnvironmentPanel",a.JOB_RUN="jobRun",a)},552653:(e,t,r)=>{if(r.d(t,{K:()=>i}),13057==r.j)var a=r(610435);if(r(692738),13057==r.j)var n=r(847419);function i({sqlAlertOutput:e,sqlTaskRun:t}){return(0,a.Y)(n.M,{sqlQueryOutput:{query_output:e.alert_output},sqlTaskRun:t})}},568017:(e,t,r)=>{if(r.d(t,{A:()=>d}),13057==r.j)var a=r(610435);if(r(692738),13057==r.j)var n=r(497895);if(13057==r.j)var i=r(339518);if(13057==r.j)var s=r(12414);var o=r(342411);if(13057==r.j)var l=r(367426);if(13057==r.j)var u=r(996938);function d({queryResultsLink:e}){let t=e.replace("/sql/api",""),{data:r,loading:c,error:p}=(0,u.e)({variables:{queryPath:t}}),{theme:f}=(0,n.wn)();if(p)return(0,a.Y)(i.F,{componentId:"codegen_webapp_js_jaws_runs_details_sql_fetchanddisplayqueryresults.tsx_46",type:"error",css:{marginTop:26,maxHeight:"none"},message:(0,a.Y)(o.sA,{id:"/tQIm4",defaultMessage:"Error occurred while obtaining results: {errorMessage}",values:{errorMessage:p.message}}),closable:!1});if(c)return(0,a.FD)("div",{style:{padding:`${f.spacing.md}px 0`},children:[(0,a.Y)(s.y,{})," ",(0,a.Y)(o.sA,{id:"QEbCql",defaultMessage:"Fetching output..."})]});if(!r||!r.queryResultFromPath?.query_result)return(0,a.Y)(i.F,{componentId:"codegen_webapp_js_jaws_runs_details_sql_fetchanddisplayqueryresults.tsx_78",type:"error",css:{marginTop:26,maxHeight:"none"},message:(0,a.Y)(o.sA,{id:"lAuUoF",defaultMessage:"No results were found: the query results may no longer be available or you may not have permissions to view it."})});let m=(0,a.Y)(l.x,{queryResultData:r.queryResultFromPath.query_result.data});if(f.isDarkMode)return(0,a.Y)("div",{css:{"& .ant-table, & .ant-table-thead > tr > th, & .ant-table-thead > tr > td":{color:"rgb(23, 19, 15)"},"& .ant-table":{backgroundColor:"rgb(238, 232, 227)"}},children:m});return m}},577773:e=>{for(var t="(?:\\|\\||\\&\\&|;;|\\|\\&|\\<\\(|\\<\\<\\<|>>|>\\&|<\\&|[&;()|<>])",r=RegExp("^"+t+"$"),a="|&;()<> \\t",n=/^#$/,i="",s=0;s<4;s++)i+=(0x100000000*Math.random()).toString(16);var o=RegExp("^"+i);e.exports=function(e,s,l){var u=function(e,s,o){o||(o={});var l=o.escape||"\\",u=function(e,t){for(var r,a=t.lastIndex,n=[];r=t.exec(e);)n.push(r),t.lastIndex===r.index&&(t.lastIndex+=1);return t.lastIndex=a,n}(e,RegExp(["("+t+")","("+("(\\"+l+"['\""+a+"]|[^\\s'\""+a)+"])+|\"((\\\\\"|[^\"])*?)\"|'((\\\\'|[^'])*?)')+"].join("|"),"g"));if(0===u.length)return[];s||(s={});var d=!1;return u.map(function(t){var a,o=t[0];if(!o||d)return;if(r.test(o))return{op:o};var u=!1,c=!1,p="",f=!1;function m(){a+=1;var e,t,r=o.charAt(a);if("{"===r){if(a+=1,"}"===o.charAt(a))throw Error("Bad substitution: "+o.slice(a-2,a+1));if((e=o.indexOf("}",a))<0)throw Error("Bad substitution: "+o.slice(a));t=o.slice(a,e),a=e}else if(/[*@#?$!_-]/.test(r))t=r,a+=1;else{var n=o.slice(a);(e=n.match(/[^\w\d_]/))?(t=n.slice(0,e.index),a+=e.index-1):(t=n,a=o.length)}var l=s,u=t,d="function"==typeof l?l(u):l[u];if(void 0===d&&""!=u?d="":void 0===d&&(d="$"),"object"==typeof d)return""+i+JSON.stringify(d)+i;return""+d}for(a=0;a<o.length;a++){var g=o.charAt(a);if(f=f||!u&&("*"===g||"?"===g),c)p+=g,c=!1;else if(u)g===u?u=!1:"'"==u?p+=g:g===l?(a+=1,'"'===(g=o.charAt(a))||g===l||"$"===g?p+=g:p+=l+g):"$"===g?p+=m():p+=g;else if('"'===g||"'"===g)u=g;else if(r.test(g))return{op:o};else if(n.test(g)){d=!0;var h={comment:e.slice(t.index+a+1)};if(p.length)return[p,h];return[h]}else g===l?c=!0:"$"===g?p+=m():p+=g}if(f)return{op:"glob",pattern:p};return p}).reduce(function(e,t){return void 0===t?e:e.concat(t)},[])}(e,s,l);if("function"!=typeof s)return u;return u.reduce(function(e,t){if("object"==typeof t)return e.concat(t);var r=t.split(RegExp("("+i+".*?"+i+")","g"));if(1===r.length)return e.concat(r[0]);return e.concat(r.filter(Boolean).map(function(e){if(o.test(e))return JSON.parse(e.split(i)[1]);return e}))},[])}},726910:(e,t,r)=>{if(r.d(t,{L:()=>l}),13057==r.j)var a=r(610435);if(r(692738),13057==r.j)var n=r(281564);let i=new Map([["string","string"],["boolean","boolean"],["tinyint","number"],["smallint","number"],["int","number"],["bigint","number"],["float","number"],["double","number"],["char","string"],["varchar","string"],["date","datetime"],["timestamp","datetime"],["interval_year_month","datetime"],["interval_day_time","datetime"],["binary","string"],["decimal","string"],["array","string"],["map","string"],["struct","string"],["uniontype","string"],["user_defined","string"]]),s="string";function o(e){return i.get(e??s)??s}function l({sqlFileQueryResult:e}){let t=(e.columns??[]).map(e=>({name:e.name,type:o(e.type),displayAs:o(e.type),booleanValues:[]})),r=e.rows?.map(e=>t.map(e=>({name:e.name,type:e.type})).map((t,r)=>[t.name,e?.values?.at(r)?.string_value??null]).reduce((e,t)=>(e[t[0]]=t[1],e),{}))??[];return(0,a.Y)(n.V,{columns:t,rows:r,truncated:e.truncated})}},754218:(e,t,r)=>{if(r.d(t,{v:()=>c}),13057==r.j)var a=r(610435);var n=r(692738);if(13057==r.j)var i=r(497895);if(13057==r.j)var s=r(12414);var o=r(342411);if(13057==r.j)var l=r(929117);if(13057==r.j)var u=r(959240);let d=13057==r.j?n.lazy(()=>(()=>{let e=()=>Promise.all([r.e(62280),r.e(1990),r.e(78632),r.e(39676),r.e(31813),r.e(51362),r.e(26881),r.e(90489),r.e(64666),r.e(30259),r.e(13962),r.e(22831),r.e(80086),r.e(51818),r.e(87385),r.e(58415),r.e(79637),r.e(62762),r.e(48898),r.e(61652),r.e(23237),r.e(49177),r.e(156),r.e(12937),r.e(40183)]).then(r.bind(r,503217));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(503217,"@databricks/editor/codeBlock","lazy",e);return e()})().then(e=>({default:e.ReadOnlyCodeBlock}))):null;function c({queryText:e,bottomView:t}){let r=(0,o.tz)(),{theme:n}=(0,i.wn)();return(0,a.FD)("div",{css:{paddingTop:n.spacing.sm},children:[e&&(0,a.Y)("div",{role:"document","aria-label":r.formatMessage({id:"kqK6EI",defaultMessage:"Query Text"}),style:{marginBottom:n.spacing.sm},children:(0,a.Y)(u.t,{description:l.z.JOBS_RUNS_LOADING,fallback:(0,a.Y)(s.y,{size:"small"}),children:(0,a.Y)(d,{language:"sql",theme:n.isDarkMode?"databricks-unified-dark":"databricks-unified-light",menuBarProps:{},actionButtons:[{buttonId:"copy"}],children:e})})}),t]})}},796775:(e,t,r)=>{r.d(t,{d:()=>i,m:()=>n});var a=r(988759);let n=(0,r(696514).fH)("PersonaNav::ActivePersona"),i=(0,a.g)("Nav::openAppSwitcher")},801138:e=>{e.exports=function(e){return e.map(function(e){if(""===e)return"''";if(e&&"object"==typeof e)return e.op.replace(/(.)/g,"\\$1");if(/["\s\\]/.test(e)&&!/'/.test(e))return"'"+e.replace(/(['])/g,"\\$1")+"'";if(/["'\s]/.test(e))return'"'+e.replace(/(["\\$`!])/g,"\\$1")+'"';return String(e).replace(/([A-Za-z]:)?([#!"$&'()*,:;<=>?@[\\\]^`{|}])/g,"$1\\$2")}).join(" ")}},804584:(e,t,r)=>{r.d(t,{R:()=>o});var a=r(610435),n=r(956935),i=r(692738),s=r(497895);let o=(0,i.forwardRef)(function({children:e,style:t,className:r,actions:i,...o},l){let{theme:u}=(0,s.wn)(),d={layout:(0,n.AH)({display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:"var(--table-filter-layout-group-margin)",columnGap:"var(--table-filter-layout-group-margin)",rowGap:"var(--table-filter-layout-item-gap)",flexWrap:"wrap"}),filters:(0,n.AH)({display:"flex",flexWrap:"wrap",flexDirection:"row",alignItems:"center",gap:"var(--table-filter-layout-item-gap)",marginRight:"var(--table-filter-layout-group-margin)",flex:1}),filterActions:(0,n.AH)({display:"flex",flexWrap:"wrap",gap:"var(--table-filter-layout-item-gap)",alignSelf:"flex-start"})};return(0,a.FD)("div",{...o,ref:l,style:{"--table-filter-layout-item-gap":`${u.spacing.sm}px`,"--table-filter-layout-group-margin":`${u.spacing.md}px`,...t},css:d.layout,className:r,children:[(0,a.Y)("div",{css:d.filters,children:e}),i&&(0,a.Y)("div",{css:d.filterActions,children:i})]})})},847419:(e,t,r)=>{if(r.d(t,{G:()=>g,M:()=>m}),13057==r.j)var a=r(610435);var n=r(778529),i=r.n(n);if(r(692738),13057==r.j)var s=r(497895);var o=r(342411);if(13057==r.j)var l=r(568017);if(13057==r.j)var u=r(754218);var d=r(889885);if(13057==r.j)var c=r(27148);if(13057==r.j)var p=r(286467);if(13057==r.j)var f=r(175328);function m({sqlQueryOutput:{query_output:e},sqlTaskRun:t}){let{query_text:r,output_link:n}=e,s=(0,p.gg)(t),o=function(e,t){let r=(0,d.FI)("orgId"),a=(0,f.fc)(e);r&&a.append("o",r.toString());let n=t?.sqlTask?.query?.queryId;if(i()(n))return`/sql/editor${a.toString()?`?${a.toString()}`:""}`;return`/sql/editor/${n}${a.toString()?`?${a.toString()}`:""}`}({query_output:e},s),c=(0,a.Y)(a.FK,{children:n?(0,a.Y)(l.A,{queryResultsLink:n,queryId:s?.sqlTask?.query?.queryId,queryLink:o}):(0,a.Y)(g,{state:t.state})});return(0,a.Y)(u.v,{queryText:r,bottomView:c})}function g({state:e}){let{theme:t}=(0,s.wn)(),r=(0,c.Oy)(e)?(0,a.Y)("pre",{children:(0,a.Y)(o.sA,{id:"fLqHiz",defaultMessage:"The output will be available once the task execution is completed."})}):(0,a.Y)("pre",{children:(0,a.Y)(o.sA,{id:"/HsDHb",defaultMessage:"No output available."})});return(0,a.Y)("div",{css:{marginLeft:t.spacing.md,marginRight:t.spacing.md},children:r})}},848473:(e,t,r)=>{r.d(t,{Zg:()=>n,_M:()=>l,cL:()=>s,n_:()=>i,tA:()=>o});var a=r(892826);a.A.arrayInsert,a.A.arrayMove,a.A.arrayPop,a.A.arrayPush,a.A.arrayRemove,a.A.arrayRemoveAll,a.A.arrayShift,a.A.arraySplice,a.A.arraySwap,a.A.arrayUnshift,a.A.autofill,a.A.blur;var n=a.A.change;a.A.clearAsyncError,a.A.clearFields,a.A.clearSubmit,a.A.clearSubmitErrors,a.A.destroy,a.A.focus;var i=a.A.initialize;a.A.registerField;var s=a.A.reset;a.A.resetSection,a.A.setSubmitFailed,a.A.setSubmitSucceeded,a.A.startAsyncValidation,a.A.startSubmit,a.A.stopAsyncValidation,a.A.stopSubmit;var o=a.A.submit,l=a.A.touch;a.A.unregisterField,a.A.untouch,a.A.updateSyncWarnings,a.A.updateSyncErrors},886110:(e,t,r)=>{r.d(t,{CG:()=>d,aD:()=>m,gy:()=>f,kC:()=>p});var a=r(141078),n=r(831358);if(13057==r.j)var i=r(726583);var s=r(543963);let o=(0,a.J1)`
  fragment RunsListTableColumns_RunNode on Run {
    status
    active
    message
    runId
    idInJob
    startTime
    durationMillis
    queueDuration @include(if: $includeQueueDuration)
    queueReason @include(if: $includeQueueReason)
    trigger
    triggerInfo {
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
    clusterId
    sparkContextId
    clusterInfo {
      attributes {
        sparkVersion
        enableServerlessCompute
        kind
      }
    }
    overridingParameters {
      jarParams
      notebookParams {
        key
        value
      }
      pythonParams
      sparkSubmitParams
      pythonNamedParams {
        key
        value
      }
      sqlParams {
        key
        value
      }
      dbtCommands
      pipelineParams {
        fullRefresh
      }
    }
    jobParameters @include(if: $includeJobParameters) {
      name
      default
      value
    }
  }
`,l=(0,a.J1)`
  fragment LakeflowRunJobRunFragment on LakeflowLakeflowRunJobRun {
    jobParameters {
      name
      default
      value
    }
    overridingParameters {
      jarParams
      notebookParams {
        key
        value
      }
      pythonParams
      sparkSubmitParams
      pythonNamedParams {
        key
        value
      }
      sqlParams {
        key
        value
      }
      dbtCommands
      pipelineParams {
        fullRefresh
      }
    }
    durationWarningExceeded
    durationInfo {
      startTime
      endTime
      executionDuration
      setupDuration
      cleanupDuration
      runDuration
      queueDuration @include(if: $includeQueueDuration)
      waitDuration
      estimatedWaitingEndTime
        @includeSafex(name: "databricks.elasticspark.performance.enableWaitingState", defaultValue: false)
    }
    triggerType
    triggerInfo {
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
      sqlCondition @includeSafex(name: "sql_cond_triggers", defaultValue: false) {
        conditionEvaluationSatisfied
        conditionEvaluationSqlSessionId
      }
    }
  }
  ${s.WB}
`,u=(0,a.J1)`
  fragment LakeflowRunPipelineUpdateFragment on LakeflowLakeflowRunPipelineUpdate {
    cause
    details {
      pipelineTask {
        runId
        jobId
        taskKey
        parentRunId
      }
    }
    parameters @includeSafex(name: "pipeline_parameters", defaultValue: false) {
      key
      value
    }
  }
`,d=(0,a.J1)`
  fragment RunsListTableColumns_JobsRunNode on JobsRun {
    jobId
    runId
    numberInJob
    runType
    creatorUserName
    creatorUser {
      ...RichUserData
    }
    creatorPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
      ...AclPrincipalData
    }
    runName
    originalAttemptRunId
    durationInfo {
      startTime
      endTime
      executionDuration
      setupDuration
      cleanupDuration
      runDuration
      queueDuration @include(if: $includeQueueDuration)
      waitDuration
      estimatedWaitingEndTime
        @includeSafex(name: "databricks.elasticspark.performance.enableWaitingState", defaultValue: false)
    }
    state {
      resultState
      lifeCycleState
      userCancelledOrTimedout
      stateMessage
      durationWarningExceeded
      queueReason @include(if: $includeQueueReason)
    }
    status @include(if: $includeRunStatus) {
      ...RunStatusFragment
    }
    trigger
    triggerInfo {
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
      sqlCondition @includeSafex(name: "sql_cond_triggers", defaultValue: false) {
        conditionEvaluationSatisfied
        conditionEvaluationSqlSessionId
      }
    }
    overridingParameters {
      jarParams
      notebookParams {
        key
        value
      }
      pythonParams
      sparkSubmitParams
      pythonNamedParams {
        key
        value
      }
      sqlParams {
        key
        value
      }
      dbtCommands
      pipelineParams {
        fullRefresh
      }
    }
    clusterInstance {
      clusterId
      sparkContextId
      clusterInfo {
        attributes {
          sparkVersion
          enableServerlessCompute
          kind
        }
      }
    }
    tasks @include(if: $expandTasks) {
      runId
    }
    jobParameters @include(if: $includeJobParameters) {
      name
      default
      value
    }
  }
  ${s.WB}
  ${n.j}
  ${n.E}
`;(0,a.J1)`
  fragment RunsListTable_RunNode on Run {
    ...RunsListTableColumns_RunNode
  }
  ${o}
`;let c=(0,a.J1)`
  fragment RunsListTable_JobsRunNode on JobsRun {
    ...RunsListTableColumns_JobsRunNode
  }
  ${d}
`,p=(0,a.J1)`
  query ListCombinedRunsTableQuery(
    $jobId: ID!
    $first: Int!
    $after: String
    $startTimeFrom: Long
    $startTimeTo: Long
    $expandTriggerInfo: Boolean
    $expandTasks: Boolean = false
    $includeQueueDuration: Boolean = false
    $includeQueueReason: Boolean = false
    $includeJobParameters: Boolean = false
    $includeRunStatus: Boolean = false
  ) @component(name: "Workflows.Observability.Lists") {
    activeRuns: jobsListRunsPaginated(
      jobId: $jobId
      first: $first
      after: $after
      activeOnly: true
      expandTriggerInfo: $expandTriggerInfo
      expandTasks: $expandTasks
      startTimeFrom: $startTimeFrom
      startTimeTo: $startTimeTo
    ) {
      jobsRuns {
        edges {
          node {
            ...RunsListTable_JobsRunNode
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
    completedRuns: jobsListRunsPaginated(
      jobId: $jobId
      first: $first
      after: $after
      completedOnly: true
      expandTriggerInfo: $expandTriggerInfo
      expandTasks: $expandTasks
      startTimeFrom: $startTimeFrom
      startTimeTo: $startTimeTo
    ) {
      jobsRuns {
        edges {
          node {
            ...RunsListTable_JobsRunNode
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  }
  ${c}
`;function f({jobId:e,first:t,after:r,startTimeFrom:a,startTimeTo:n,expandTasks:s}){return{query:p,variables:{jobId:e,first:t,after:r,expandTriggerInfo:!0,expandTasks:s,startTimeFrom:a,startTimeTo:n,includeJobParameters:(0,i.ue)(),includeRunStatus:!0,includeQueueDuration:!0,includeQueueReason:!0}}}(0,a.J1)`
  query ListLakeflowRunsQuery($pageSize: Int!) @component(name: "Workflows.Observability.Lists") {
    lakeflowListLakeflowRuns(input: { pageSize: $pageSize }) {
      lakeflowRuns {
        __typename
        id
        runAsUserId
        runAsUser {
          id
        }
        runAsPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
          id
        }
      }
      apiError {
        code
        message
      }
    }
  }
`;let m=(0,a.J1)`
  query RecentRunsQueryV2Autogen(
    $limit: Int
    $pageToken: String
    $sortBy: LakeflowListLakeflowRunsRequestSortBy
    $sortOrder: LakeflowListLakeflowRunsRequestSortOrder
    $filtersAssetIds: [String!]
    $filtersRunAsNames: [String!]
    $filtersRunId: String
    $filtersRunStatus: LakeflowListLakeflowRunsRequestFiltersRunStatusFilter
    $filtersRunTypes: [LakeflowListLakeflowRunsRequestFiltersRunTypeFilter!]
    $filtersUserVisibleTerminationLabel: String
    $filtersFrom: WellKnownTimestamp
    $filtersTo: WellKnownTimestamp
    $includeQueueDuration: Boolean = false
    $includeQueueReason: Boolean = false
  ) @component(name: "Workflows.Observability.Lists") {
    lakeflowListLakeflowRuns(
      input: {
        pageSize: $limit
        pageToken: $pageToken
        sortBy: $sortBy
        sortOrder: $sortOrder
        filters: {
          assetIds: $filtersAssetIds
          runAsNames: $filtersRunAsNames
          runId: $filtersRunId
          runStatus: $filtersRunStatus
          runTypes: $filtersRunTypes
          userVisibleTerminationLabel: $filtersUserVisibleTerminationLabel
          orderingTimeFromTime: $filtersFrom
          orderingTimeUntilTime: $filtersTo
        }
        includeFields: { includeTriggerInfo: true, includePermissionLevel: true }
      }
    ) {
      apiError {
        code
        message
      }
      nextPageToken
      prevPageToken
      lakeflowRuns {
        id
        name
        assetName
        runAsUserId
        assetType
        assetPermissionLevel
        assetId
        startTime
        endTime
        assetPermissionLevel
        status {
          ...RunStatusFragment
        }
        runAsUser {
          ...RichUserData
        }
        runAsPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
          ...AclPrincipalData
        }
        jobRun {
          ...LakeflowRunJobRunFragment
        }
        pipelineUpdate {
          ...LakeflowRunPipelineUpdateFragment
        }
      }
    }
  }
  ${l}
  ${u}
  ${s.WB}
  ${n.j}
  ${n.E}
`},899136:(e,t,r)=>{r.d(t,{H0:()=>f,Kt:()=>m,RI:()=>p,T2:()=>h,uT:()=>g});var a=r(610435),n=r(692738),i=r(497895),s=r(955210),o=r(217247),l=r(79570),u=r(79128),d=r(342411),c=r(912882);let p=e=>{let{children:t,panelId:r="databricks-side-panel",initialRightSideOpen:i=!0}=e,[s,o]=(0,n.useState)(i);return(0,a.Y)(c.U,{value:{rightSideOpen:s,setRightSideOpen:o,panelId:r},children:t})},f=({children:e})=>(0,a.Y)("div",{style:{display:"flex",flexGrow:1,minHeight:0,alignItems:"stretch"},children:e}),m=({children:e})=>(0,a.Y)(p,{children:(0,a.Y)(f,{children:e})}),g=e=>{let{children:t}=e;return(0,a.Y)("div",{css:{display:"flex",flexDirection:"column",height:"100%",position:"relative",flex:1,overflow:"auto"},children:t})},h=e=>{let{children:t,rightSideButtonComponent:r=b,width:n="35%",minWidth:i=370,maxWidth:s=540}=e,{rightSideOpen:o,panelId:l}=(0,c.O)();return(0,a.FD)("div",{css:e=>({maxWidth:o?s:25,minWidth:o?i:void 0,width:n,position:"relative",height:"100%",borderLeft:`1px solid ${e.colors.border}`}),children:[(0,a.Y)(r,{}),(0,a.Y)("div",{id:l,role:"region",css:{display:o?"flex":"none",flexDirection:"column",height:"100%",overflowY:"auto",boxSizing:"border-box"},children:t})]})},b=()=>{let{rightSideOpen:e,setRightSideOpen:t,panelId:r}=(0,c.O)(),n=(0,d.tz)(),{theme:p}=(0,i.wn)(),f=e?n.formatMessage({id:"mMTCJd",defaultMessage:"Hide side panel"}):n.formatMessage({id:"0ftuMR",defaultMessage:"Show side panel"}),m=e?s.A:o.A;return(0,a.Y)("div",{css:{position:"absolute",top:0,left:0,height:46,transform:"translateX(-50%)",display:"flex",alignItems:"center"},children:(0,a.Y)(l.m,{componentId:"webapp.ui-building-blocks.side-panel-layout.toggle-tooltip",content:(0,a.Y)("span",{children:f}),side:"left",children:(0,a.Y)("div",{css:{borderRadius:p.borders.borderRadiusSm,width:p.spacing.lg,height:p.spacing.lg,backgroundColor:"var(--primary-background-color)"},children:(0,a.Y)(u.$n,{componentId:"webapp.side_panel_layout.show_hide",css:{maxHeight:24,borderRadius:p.borders.borderRadiusSm,"&&":{padding:"0px !important"}},onClick:()=>t(e=>!e),"aria-label":f,"aria-expanded":e,"aria-controls":r,children:(0,a.Y)(m,{css:{width:22,height:22,"& > svg":{width:"100%",height:"100%"}}})})})})})}},912882:(e,t,r)=>{r.d(t,{O:()=>s,U:()=>i});var a=r(692738);let n=(0,a.createContext)(null),i=n.Provider,s=()=>{let e=(0,a.useContext)(n);if(!e)throw Error("useSidePanelContext must be used within a <SidePanelContext.Provider>");return e}},929530:(e,t,r)=>{r.d(t,{Bd:()=>c,hL:()=>d,sy:()=>l});var a=r(34116),n=r.n(a),i=r(371964),s=r(30472),o=r(953902);let l=(0,i.vt)()(e=>({unsyncedResourceIds:{},scheduleSync:(t,r)=>e(e=>({unsyncedResourceIds:{...e.unsyncedResourceIds,[t]:{status:"scheduled",shouldReconnectRunner:r}}})),runSync:t=>e(e=>({unsyncedResourceIds:{...e.unsyncedResourceIds,[t]:{status:"in-progress"}}})),completeSync:t=>e(e=>{if(e.unsyncedResourceIds[t]?.status!=="in-progress")return e;let{[t]:r,...a}=e.unsyncedResourceIds;return{unsyncedResourceIds:a}}),failSync:(t,r,a)=>e(e=>({unsyncedResourceIds:{...e.unsyncedResourceIds,[t]:{status:"error",error:r,yamlFileURL:a}}}))})),u={unsyncedResourceIds:{},scheduleSync:n(),runSync:n(),completeSync:n(),failSync:n()},d=(0,o.j7)(s.Su,{newHook:function(e){return c(t=>t.unsyncedResourceIds[e]?.status==="error")},oldHook:()=>!1}),c=(0,o.j7)(s.Su,{newHook:function(e){return l(e)},oldHook:e=>e(u)})},950757:(e,t,r)=>{r.r(t),r.d(t,{LazyJobRunsWidget:()=>p});var a=r(610435),n=r(692738),i=r(497895),s=r(12414),o=r(382908),l=r(342411),u=r(141078),d=r(641208),c=r(440214);let p=({jobId:e,maxRuns:t=10})=>{let{theme:r}=(0,i.wn)(),p=parseInt(e,10),f=(0,u.IT)(d.m0,{variables:{jobId:e,jobIdLong:p,first:t,offset:btoa("arrayconnection:0"),expandTasks:!0,expandTriggerInfo:!1,includeQueueDuration:!1,includeQueueReason:!1,includeJobParameters:!1,includeRunStatus:!0,latestTasksOnly:!1,lazyLoadTaskTooltip:!0},fetchPolicy:"cache-first"}),{loading:m,error:g,data:h}=f,b=(0,n.useMemo)(()=>{let e=h?.jobsListRunsPaginated?.jobsRuns?.edges;return e&&e.length>0},[h]);if(m)return(0,a.FD)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",minHeight:200,gap:r.spacing.md},children:[(0,a.Y)(s.y,{}),(0,a.Y)(o.o.Text,{color:"secondary",children:(0,a.Y)(l.sA,{id:"ZIrVBe",defaultMessage:"Loading runs..."})})]});if(g)return(0,a.Y)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",minHeight:200,padding:r.spacing.lg},children:(0,a.Y)(o.o.Text,{style:{color:r.colors.textValidationDanger},children:(0,a.Y)(l.sA,{id:"EghkW/",defaultMessage:"Failed to load job runs: {error}",values:{error:g.message}})})});if(!b)return(0,a.Y)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",minHeight:200,padding:r.spacing.lg},children:(0,a.Y)(o.o.Text,{color:"secondary",children:(0,a.Y)(l.sA,{id:"GqpIOn",defaultMessage:"No runs found for this job"})})});return(0,a.Y)("div",{style:{width:"100%",minHeight:200,overflow:"hidden"},"data-testid":"job-runs-matrix-widget",children:(0,a.Y)(c.j,{queryResult:f,canRunJob:!1,excludeQueuedDuration:!1,hideTaskRuns:!1})})}},957041:(e,t,r)=>{r.d(t,{A:()=>o});var a,n=r(452137),i=r.n(n),s=r(74992);let o=(a=r(629379).A.getIn,function(e,t){i()(e,"Form value must be specified");var r=t||function(e){return a(e,"form")};return function(t){for(var n=arguments.length,o=Array(n>1?n-1:0),l=1;l<n;l++)o[l-1]=arguments[l];return i()(o.length,"No fields specified"),1===o.length?a(r(t),e+".values."+o[0]):o.reduce(function(n,i){var o=a(r(t),e+".values."+i);return void 0===o?n:s.A.setIn(n,i,o)},{})}})},968944:(e,t,r)=>{r.d(t,{w:()=>s});var a=r(610435);r(692738);var n=r(295169),i=r(342411);let s=({height:e,width:t="10px",index:r})=>{let{formatMessage:s}=(0,i.tz)();return(0,a.Y)("div",{"aria-label":s((0,i.zR)({id:"psNpoT",defaultMessage:"Loading..."})),children:(0,a.Y)(n.x,{css:{height:`${e||"32px"} !important`,width:`${t} !important`},loading:!0},`genericSkeleton_${r}`)})}},984519:(e,t,r)=>{r.d(t,{c:()=>a});let a=(0,r(696514).fH)("Jaws::CloneJob")},990272:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function s(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M2 1.75A.75.75 0 0 1 2.75 1h10.5a.75.75 0 0 1 .75.75v7.465a5.75 5.75 0 0 1-2.723 4.889l-2.882 1.784a.75.75 0 0 1-.79 0l-2.882-1.784A5.75 5.75 0 0 1 2 9.214zm1.5.75V7h3.75V2.5zm5.25 0V7h3.75V2.5zm3.75 6H8.75v5.404l1.737-1.076A4.25 4.25 0 0 0 12.5 9.215zm-5.25 5.404V8.5H3.5v.715a4.25 4.25 0 0 0 2.013 3.613z",clipRule:"evenodd"})})}let o=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:s}));o.displayName="ShieldIcon";let l=o},996938:(e,t,r)=>{if(r.d(t,{e:()=>o}),13057==r.j)var a=r(321234);var n=r(141078);if(13057==r.j)var i=r(993533);let s=(0,n.J1)`
  query SqlQueryResultForWorkflows($queryPath: String!) @component(name: "Workflows.Tasks.SQL") {
    queryResultFromPath(queryPath: $queryPath)
      @rest(type: "QueryResult", path: "{args.queryPath}.json", method: "GET", endpoint: "redashApi") {
      query_result {
        data {
          columns {
            name
            friendly_name
            type
          }
          rows
          truncated
        }
        id
        query
      }
    }
  }
`;function o(e){let t=(0,n.IT)(s,e);return(0,a.jM)(t,e=>{e.data?.queryResultFromPath.query_result?.data.columns.forEach(e=>{e.type=e.type in i.UBz?i.UBz[e.type]:i.UBz.complex})})}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/29139.0fb86535d1.chunk.js.map