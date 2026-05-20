"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[70354],{16851:(e,t,n)=>{n.a(e,async(e,a)=>{try{n.d(t,{q:()=>v});var s=n(610435),o=n(956935),i=n(916424),r=n.n(i),l=n(692738),d=n(497895),u=n(225352),c=n(12414),p=n(342411),g=n(954879),m=n(562536),f=n(570059),h=n(299007),b=e([h,f]);[h,f]=b.then?(await b)():b;let y=({deployed:e,pending:t})=>{let{theme:n}=(0,d.wn)(),[a,i]=(0,l.useState)([]),c=(0,l.useMemo)(()=>{let n=new Intl.Collator;return e.concat(t).sort((e,t)=>n.compare(e.name,t.name))},[e,t]),g=r()(c,({type:e})=>e),f=Object.keys(g),b=f.map(e=>({title:(0,s.Y)("div",{css:{color:n.colors.textSecondary},children:(0,s.Y)(p.sA,{...(0,m.nJ)(e)})}),key:e,children:g[e].map(e=>({title:"created"===e.modification?(0,s.Y)(h._A,{resource:e}):(0,s.Y)(h.vA,{resource:e}),key:e.id||e.name,isLeaf:!0}))})),y={css:(0,o.AH)("font-size:",n.typography.fontSizeSm,"px;.du-bois-light-tree-indent,.du-bois-dark-tree-indent{width:0;}.du-bois-light-tree-switcher-noop + .du-bois-light-tree-node-content-wrapper,.du-bois-dark-tree-switcher-noop + .du-bois-dark-tree-node-content-wrapper{margin-left:0 !important;}.du-bois-light-tree-list-holder-inner > .du-bois-light-tree-treenode-switcher-open:not(div:first-of-type),.du-bois-light-tree-list-holder-inner > .du-bois-light-tree-treenode-switcher-close:not(div:first-of-type),.du-bois-dark-tree-list-holder-inner > .du-bois-dark-tree-treenode-switcher-open:not(div:first-of-type),.du-bois-dark-tree-list-holder-inner > .du-bois-dark-tree-treenode-switcher-close:not(div:first-of-type){margin-top:",n.spacing.sm+2,"px;}.du-bois-light-tree-node-content-wrapper,.du-bois-dark-tree-node-content-wrapper{display:flex;align-items:center;overflow:hidden;&.du-bois-light-tree-node-content-wrapper-normal:hover,&.du-bois-light-tree-node-content-wrapper-normal:focus-within,&.du-bois-dark-tree-node-content-wrapper-normal:hover,&.du-bois-dark-tree-node-content-wrapper-normal:focus-within{background-color:",n.colors.actionDefaultBackgroundHover," !important;}}.du-bois-light-tree-treenode__customize .du-bois-dark-tree-treenode__customize{padding-left:0 !important;}margin:0 -",n.spacing.xs,"px;scrollbar-width:thin;overflow:auto;flex:1;min-height:0;")};return(0,s.Y)(u.P,{...y,mode:"default",expandedKeys:f.filter(e=>!a.includes(e)),onExpand:(e,{expanded:t,node:n})=>i(e=>{if(t)return e.filter(e=>e!==n.key);return e.concat(String(n.key))}),treeData:b,size:"xx-small",dangerouslySetAntdProps:{showIcon:!1}})},v=({assets:e=[],pendingAssets:t=[],assetsLoading:n})=>{let a=(0,g.I)(e=>e.isRootBundleDataLoading),o=(0,g.I)(e=>e.target);if(n&&!e.length||a)return(0,s.Y)(k,{});if(!n&&!e.length&&!t.length)return(0,s.Y)(f.U,{target:o});return(0,s.Y)(y,{deployed:e,pending:t})},k=()=>{let{theme:e}=(0,d.wn)(),{formatMessage:t}=(0,p.tz)(),[n,a]=(0,l.useState)(t({id:"7EtWcO",defaultMessage:"Loading..."}));return(0,l.useEffect)(()=>{let e=setTimeout(()=>{a(t({id:"bpFd/s",defaultMessage:"Still loading..."}))},2e4);return()=>clearTimeout(e)},[t]),(0,s.FD)("div",{css:{color:e.colors.textSecondary,marginTop:e.spacing.sm,height:`${e.spacing.xs+e.spacing.md}px`},children:[(0,s.Y)(c.y,{css:{marginRight:e.spacing.md}}),n]})};a()}catch(e){a(e)}})},39528:(e,t,n)=>{if(n.d(t,{P:()=>v,R:()=>b}),13057==n.j)var a=n(610435);var s=n(778529),o=n.n(s);if(n(692738),13057==n.j)var i=n(295169);if(13057==n.j)var r=n(339518);if(13057==n.j)var l=n(79128);var d=n(342411);if(13057==n.j)var u=n(441535);var c=n(141078);if(13057==n.j)var p=n(121294);if(13057==n.j)var g=n(993533);if(13057==n.j)var m=n(924876);if(13057==n.j)var f=n(158197);if(13057==n.j)var h=n(70203);let b=(0,c.J1)`
  query JobContinuousTriggerState($jobId: Long!) @component(name: "Workflows.Triggers.Continuous") {
    jobsGetJob(input: { jobId: $jobId, includeTriggerState: true }) {
      job {
        triggerState {
          continuous {
            nextAttemptMs
            consecutiveFailures
            isBackingOff
          }
        }
      }
    }
  }
`;function y({consecutiveFailures:e,formattedTime:t,hasActiveRun:n,isBackingOff:s}){let o=(0,u.W)("databricks.elasticspark.continuousJob.exponentialBackoffHealthyDurationThresholdSeconds",1800)/60;if(s)return(0,a.Y)(d.sA,{id:"4l1Tw7",defaultMessage:"This job has failed {consecutiveFailures} times in a row, each with less than {healthyRunDuration} minutes run duration. The next retry will happen {formattedTime}. The job will return to a healthy state after a successful run or a run that takes at least {healthyRunDuration} minutes. Restarting the job manually will reset the backoff counter.",values:{consecutiveFailures:e,healthyRunDuration:o,formattedTime:t}});if(n)return(0,a.Y)(d.sA,{id:"G4h9QP",defaultMessage:"This job has failed {consecutiveFailures} times in a row, each with less than {healthyRunDuration} minutes run duration. A retry is currently ongoing. The job will return to a healthy state after a successful run or a run that takes at least {healthyRunDuration} minutes. Restarting the job manually will reset the backoff counter.",values:{consecutiveFailures:e,healthyRunDuration:o}});return(0,a.Y)(d.sA,{id:"yC4eDG",defaultMessage:"The last run terminated recently, the waiting time until next run will be calculated shortly. The job will return to a healthy state after a successful run or a run that takes at least {healthyRunDuration} minutes. Restarting the job manually will reset the backoff counter.",values:{consecutiveFailures:e,healthyRunDuration:o}})}function v({jobId:e,jobName:t,pauseStatus:n}){let s,k=n===g.wB8.PAUSED,{activeContinuousRunData:I,activeContinuousRunLoading:x,isRestartRunLoading:R}=(0,h.lz)(),{data:Y,loading:w}=(0,c.IT)(b,{variables:{jobId:e},fetchPolicy:"cache-and-network",pollInterval:(0,m.tj)(),skip:k}),T=I?.jobsListRunsPaginated?.jobsRuns?.edges?.length??0,{jobRunNowAutogen:M}=f.O.useJobRunNowAutogen({jobId:e,jobName:t});if(k)return null;if(x||w)return(0,a.FD)("div",{css:e=>({padding:e.spacing.sm,display:"flex",flexDirection:"column",gap:e.spacing.sm,height:62,boxSizing:"border-box",alignContent:"flex-start"}),"data-testid":"continuous-trigger-state-loading",children:[(0,a.Y)(i.x,{style:{height:16,width:"25%",paddingLeft:23}}),(0,a.Y)(i.x,{style:{height:16,width:"100%",paddingLeft:23}})]});let A=Y?.jobsGetJob?.job?.triggerState,S=Y?.jobsGetJob?.job?.triggerState?.continuous?.isBackingOff??!1,j=A?.continuous?.consecutiveFailures,D=Math.max(0,Math.round((((Number.isNaN(s=parseInt(Y?.jobsGetJob?.job?.triggerState?.continuous?.nextAttemptMs??"0",10))?null:s)??0)-Date.now())/1e3));if(o()(j)||j<=(0,u.W)("databricks.elasticspark.continuousJob.exponentialBackoffFailureUiLimit",5))return null;let C=(0,a.Y)(p.L,{initialCountdownTimeS:D});return(0,a.Y)(r.F,{componentId:"codegen_webapp_js_jaws_runs_runs_list_continuous_continuoustriggerstate.tsx_163",action:(0,a.Y)(l.$n,{componentId:"codegen_webapp_js_jaws_runs_runs_list_continuous_continuoustriggerstate.tsx_167",onClick:()=>M(),loading:R,children:(0,a.Y)(d.sA,{id:"TVHylN",defaultMessage:"Restart run"})}),message:(0,a.Y)(d.sA,{id:"yKGmhm",defaultMessage:"Failure mode - job is in exponential backoff"}),description:(0,a.Y)(y,{consecutiveFailures:j,formattedTime:C,hasActiveRun:T>0,isBackingOff:S}),type:"warning",closable:!1})}},51471:(e,t,n)=>{n.d(t,{u:()=>l});var a=n(610435);n(692738);var s=n(497895),o=n(339518),i=n(332702),r=n(342411);let l=({isConfirmed:e,setIsConfirmed:t})=>{let{theme:n}=(0,s.wn)(),l=(0,a.Y)(r.sA,{id:"0CSrOU",defaultMessage:"Pipeline deletion"}),d=(0,a.Y)(r.sA,{id:"uBR4lI",defaultMessage:"This action will result in the deletion of one or more Pipelines along with the Streaming Tables (STs) and Materialized Views (MVs) managed by them."});return(0,a.Y)(o.F,{componentId:"dabs-authoring.deployment-modal.pipeline-deletion-confirmation",css:{marginTop:n.spacing.lg},message:l,type:"warning",closable:!1,description:(0,a.FD)(a.FK,{children:[d,(0,a.Y)(i.Sc,{css:{marginTop:n.spacing.sm,label:{color:n.colors.textValidationWarning,fontWeight:600}},componentId:"dabs-authoring.deployment-modal.pipeline-deletion-confirmation.checkbox",isChecked:e,onChange:t,"aria-label":"Label",children:(0,a.Y)(r.sA,{id:"+5wnFK",defaultMessage:"I understand"})})]})})}},70203:(e,t,n)=>{n.d(t,{jG:()=>c,lz:()=>p});var a=n(610435),s=n(692738),o=n(141078),i=n(993533),r=n(262031),l=n(924876);let d=(0,o.J1)`
  query JobContinuousActiveRun($jobId: ID!, $first: Int!, $after: String!)
  @component(name: "Workflows.Triggers.Continuous") {
    jobsListRunsPaginated(jobId: $jobId, first: $first, after: $after, activeOnly: true) {
      jobsRuns {
        edges {
          node {
            runId
          }
        }
      }
    }
  }
`,u=(0,s.createContext)(void 0);function c({children:e,jobId:t,continuous:n}){let[p,g]=(0,s.useState)(!1),m=!n||n.pauseStatus===i.wB8.PAUSED,{data:f,loading:h}=(0,o.IT)(d,{variables:{jobId:t.toString(),first:1,after:(0,r.I)(0)},fetchPolicy:"cache-and-network",pollInterval:(0,l.tj)(),skip:m,onCompleted:e=>{(e.jobsListRunsPaginated?.jobsRuns?.edges?.length??0)>0&&g(!1)}});return(0,a.Y)(u.Provider,{value:{activeContinuousRunData:f,activeContinuousRunLoading:h,isRestartRunLoading:p,setIsRestartRunLoading:g},children:e})}function p(){let e=(0,s.useContext)(u);if(!e)throw Error("useContinuousJobState should be used within < ContinuousJobStateProvider /> only");let{isRestartRunLoading:t,setIsRestartRunLoading:n,activeContinuousRunData:a,activeContinuousRunLoading:o}=e;return{disableRestartRunButton:function(){0===(a?.jobsListRunsPaginated?.jobsRuns?.edges?.length??0)&&n(!0)},isRestartRunLoading:t,activeContinuousRunData:a,activeContinuousRunLoading:o}}},121294:(e,t,n)=>{if(n.d(t,{L:()=>i}),13057==n.j)var a=n(610435);var s=n(692738),o=n(342411);function i({initialCountdownTimeS:e}){let[t,n]=(0,s.useState)(e);if((0,s.useEffect)(()=>{n(e);let t=setTimeout(()=>{n(0)},1e3*e);return()=>{clearTimeout(t)}},[e]),t<=0)return(0,a.Y)(o.sA,{id:"oKj46u",defaultMessage:"shortly"});return(0,a.Y)(o.uZ,{value:e,numeric:"auto",updateIntervalInSeconds:1})}},129196:(e,t,n)=>{n.d(t,{n:()=>r});var a=n(342411),s=n(141078),o=n(406949),i=n(367313);let r=({id:e,name:t,successMessage:n,errorMessage:r})=>{let d=(0,a.tz)(),[u,c]=(0,s.n_)(i.ol),p=(0,o.KK)({performMutation:()=>u({variables:{input:{id:e.toString(),onlyQueued:!0}}}),extractDataField:e=>e.jobCancelAllRuns,successMessage:d.formatMessage(n??l.successNotification,{name:t}),errorMessage:d.formatMessage(r??l.errorNotification,{name:t}),catchRequestRejections:!0});return{jobCancelAllQueuedRuns:c.loading?()=>{}:p,jobCancelAllQueuedRunsResult:c}},l={successNotification:(0,a.zR)({id:"Rw2q1b",defaultMessage:'Successfully cancelled all queued runs for job "{name}"'}),errorNotification:(0,a.zR)({id:"DDXiwe",defaultMessage:'Error cancelling all queued runs for job "{name}'})}},143737:(e,t,n)=>{n.a(e,async(e,a)=>{try{n.d(t,{C:()=>b});var s=n(610435);n(692738);var o=n(497895),i=n(79128),r=n(943844),l=n(79570),d=n(687828),u=n(342411),c=n(255844),p=n(5697),g=n(954879),m=n(685745),f=n(419180),h=n(374535);function b({disabled:e}){let{theme:t}=(0,o.wn)(),n=(0,g.I)(e=>e.projectRootFolderNode),a=(0,u.tz)().formatMessage({id:"yHBVeF",defaultMessage:"Add a resource definition"}),y=n&&(0,h.bV)(n,p.rc.ModifyPermissions),v=e||!y,k=(0,c.MR)(),[I,x]=(0,f.$C)(),[R,Y]=(0,f.ym)(),[w,T]=(0,f.$h)(),[M,A]=(0,f.yx)(),{options:S,modals:j}=(0,m.k)(),D=(0,s.Y)(i.$n,{disabled:e||!y,componentId:"dabs-authoring.deployments-side-panel.new-resource-button",size:"small",endIcon:(0,s.Y)(r.A,{}),"aria-label":a,title:a,children:(0,s.Y)(u.sA,{id:"+hidV0",defaultMessage:"Add"})});if(!y)return(0,s.Y)(l.m,{componentId:"dabs-authoring.deployments-side-panel.new-resource-button.tooltip",content:(0,s.Y)(u.sA,{id:"PNizmq",defaultMessage:"You do not have permission to create resource definitions"}),children:D});if(v)return D;return(0,s.FD)(s.FK,{children:[(0,s.FD)(d.Root,{children:[(0,s.Y)(d.Trigger,{asChild:!0,children:D}),(0,s.FD)(d.Content,{side:"bottom",css:{minWidth:200},children:[(0,s.FD)(d.Group,{children:[(0,s.Y)(d.Label,{css:{fontSize:t.typography.fontSizeSm},children:(0,s.Y)(u.sA,{id:"HvI2AA",defaultMessage:"Create"})}),(0,s.Y)(d.Item,{componentId:"dabs-authoring.deployments-side-panel.new-resource-button.job-definition",onClick:x,children:(0,s.Y)(u.sA,{id:"Iq6mGV",defaultMessage:"New job definition"})}),k?(0,s.Y)(d.Item,{componentId:"dabs-authoring.deployments-side-panel.new-resource-button.pipeline-definition",onClick:()=>T(),children:(0,s.Y)(u.sA,{id:"x7EDc8",defaultMessage:"New ETL pipeline"})}):(0,s.Y)(d.Item,{componentId:"dabs-authoring.deployments-side-panel.new-resource-button.pipeline-definition",onClick:Y,children:(0,s.Y)(u.sA,{id:"YAnzfO",defaultMessage:"New pipeline definition"})}),(0,s.Y)(d.Item,{componentId:"dabs-authoring.deployments-side-panel.new-resource-button.dashboard-definition",onClick:A,children:(0,s.Y)(u.sA,{id:"fFTymR",defaultMessage:"New dashboard definition"})})]}),(0,s.Y)(d.Separator,{}),(0,s.FD)(d.Group,{children:[(0,s.Y)(d.Label,{css:{fontSize:t.typography.fontSizeSm},children:(0,s.Y)(u.sA,{id:"hGtTHh",defaultMessage:"Add existing"})}),S.map(({key:e,componentId:t,onClick:n,text:a})=>(0,s.Y)(d.Item,{componentId:t,onClick:n,children:a},e))]})]})]}),I,R,w,M,j]})}a()}catch(e){a(e)}})},158197:(e,t,n)=>{n.d(t,{O:()=>j});var a=n(129196),s=n(367851),o=n(342411),i=n(726583),r=n(107109),l=n(406949),d=n(367295),u=n(376544),c=n(715370),p=n(384044),g=n(1571),m=n(625241),f=n(740006),h=n(384097),b=n(960268),y=n(775029),v=n(367313);function k(e,t,n,a,s,o,i){try{var r=e[o](i),l=r.value}catch(e){n(e);return}r.done?t(l):Promise.resolve(l).then(a,s)}let I={refetchQueries:[v.UK]},x={refetchQueries:[v.ix]},R={successNotification:(0,o.zR)({id:"7UOnUo",defaultMessage:"Successfully created job"}),errorNotification:(0,o.zR)({id:"x3b6WU",defaultMessage:"Error creating job"})};var Y=n(476277),w=n(541862);let T={confirmDeleteTitle:(0,o.zR)({id:"TTAHEq",defaultMessage:'Deleting "{name}"'}),confirmDeleteQuestion:(0,o.zR)({id:"Q0aEl/",defaultMessage:'Are you sure you want to delete "{name}"? This action cannot be undone.'}),confirmDeleteButtonLabel:(0,o.zR)({id:"4NOLh4",defaultMessage:"Delete job"}),successNotification:(0,o.zR)({id:"WJgPb/",defaultMessage:'Successfully deleted job "{name}"'}),errorNotification:(0,o.zR)({id:"799cag",defaultMessage:'Error deleting job "{name}"'})};var M=n(617301),A=n(321537),S=n(418627);let j={useJobCreate:({onComplete:e,onError:t,suppressSuccessMessage:n=!1})=>{let[a,s]=c.R.useMutation(u.jb,(0,i.iQ)()?x:I),o=c.R.useIntl(),v=(0,l.gm)({performMutation:(e,{createAsUntouched:t}={})=>{let n;return a({variables:{input:{...(n=function(e,{createAsUntouched:t}={createAsUntouched:void 0}){let{taskKey:n,...a}=e.toJS();return a=(0,m.fixJarPythonParams)(a),a=(0,m.fixPythonWheelParams)(a),a=function(e){let t=!1;for(let n of(0,p.DT)().filter(e=>["NotebookTask","DbtTask","SparkPythonTask"].includes(e.data))){let a=n.value;(e.task?.hasOwnProperty(a)||(0,g.m4)(e.tasks)?.some(e=>e.task?.hasOwnProperty(a)))&&(t=!0)}return(e.task?.sqlTask?.file||(0,g.m4)(e.tasks)?.some(e=>e.task?.sqlTask?.file))&&(t=!0),t||delete e.gitSource,e}(a=(0,m.addMissingValuesToKVInput)(a)),a=(0,m.fixSqlTaskParams)(a),a=(0,h.I)(a),a=(0,m.fixDbtTaskType)(a),(a=(0,m.fixConditionTaskType)(a)).jobClusters&&(a=(0,f.bI)(a)),a=(0,b.kq)(a),(a=(0,m.addQueueingField)(a)).performanceTarget=(0,y.z)(a),a.name=(a.name?.trim()?a.name:"")||a.tasks?.[0]?.taskKey||n,{settings:a,useApi21:!0,createAsUntouched:t}}(e,{createAsUntouched:t}),{settings:n.settings?(0,r.Hm)(n.settings,o):null,accessControlList:null,jobType:null,runAsUserName:null,isFromRedash:n.isFromRedash??null,createAsUntouched:n.createAsUntouched??null,externalApiVersion:null}),externalApiVersion:{major:2,minor:1}},...(0,d.L)()}})},extractDataField:e=>e.createAndGetJob,onComplete:t=>e(t?.job),onError:t,successMessage:n?void 0:o.formatMessage(R.successNotification),errorMessage:o.formatMessage(R.errorNotification),catchRequestRejections:!1});return{confirmAndCreate:s.loading?(...e)=>{var t;return(t=function*(){},function(){var e=this,n=arguments;return new Promise(function(a,s){var o=t.apply(e,n);function i(e){k(o,a,s,i,r,"next",e)}function r(e){k(o,a,s,i,r,"throw",e)}i(void 0)})})()}:v,createResult:s}},useJobUpdate:A.K,useJobRunNow:M.Y,useJobRunNowAutogen:M.v,useJobDelete:({onComplete:e,id:t,name:n})=>{let a={update:(0,w.O)(t),refetchQueries:[v.UK]},s={refetchQueries:[v.ix]},{jawsDialogBox:o}=(0,Y.iK)(),[r,d]=c.R.useMutation(u.Qj),p=c.R.useIntl(),g=(0,l.gm)({performMutation:()=>r({variables:{input:{jobId:t}},...(0,i.iQ)()?s:a}),extractDataField:e=>e.jobsDeleteJob,onComplete:e,id:t,successMessage:p.formatMessage(T.successNotification,{name:n}),errorMessage:p.formatMessage(T.errorNotification,{name:n}),catchRequestRejections:!0});return{jobDelete:d.loading?()=>{}:()=>{o.confirm({title:p.formatMessage(T.confirmDeleteTitle,{name:n}),message:p.formatMessage(T.confirmDeleteQuestion,{name:n}),confirmButton:p.formatMessage(T.confirmDeleteButtonLabel),confirm:g,danger:!0})},jobDeleteResult:d}},useUnsavedFormContext:S.f,useJobCancelAllRuns:s.C,useJobCancelAllQueuedRuns:a.n}},299007:(e,t,n)=>{n.a(e,async(e,a)=>{try{n.d(t,{_A:()=>C,vA:()=>D});var s,o=n(610435),i=n(956935),r=n(12414),l=n(497895),d=n(252641),u=n(79128),c=n(639712),p=n(79570),g=n(128572),m=n(424489),f=n(508507),h=n(342411),b=n(30472),y=n(255844),v=n(217985),k=n(737358),I=n(889620),x=n(850630),R=n(954879),Y=n(562536),w=n(74917),T=n(895363),M=n(617301),A=n(993533),S=n(249113),j=((s={}).link="link",s.run="run",s.stop="stop",s["go-to-pipeline-editor"]="go-to-pipeline-editor",s["go-to-job-task-editor"]="go-to-job-task-editor",s["draft-dashboard"]="draft-dashboard",s["not-deployed"]="not-deployed",s.loading="loading",s);let e={name:"loading",tooltip:void 0,icon:e=>(0,o.Y)(r.y,{...e,"data-testid":"deployed-list-item-spinner"}),do:void 0},D=e=>{let t=N[e.resource.type]||F;return(0,o.Y)(t,{...e})},C=e=>{let t=_[e.resource.type]||P;return(0,o.Y)(t,{...e})},$=({resource:e,pending:t,url:n,children:a})=>{let{theme:s}=(0,l.wn)(),r=(0,Y.sW)(e),d=(0,i.AH)("text-decoration:",n?"none":"unset",";color:inherit;width:100%;display:flex;align-items:center;height:",3*s.spacing.sm,"px;overflow:hidden;&[data-pending]{color:",s.colors.actionDisabledText,";}&:hover,&:focus,&:focus-within{.deployment-resource-action-container{position:unset;right:unset;opacity:1;}}.deployment-resource-action-container{position:absolute;right:",s.spacing.xs,"px;opacity:0;button{color:",s.colors.textSecondary,";}button:hover,button:focus{color:",s.colors.actionTertiaryTextHover,";}}"),u=(0,i.AH)("[data-pending] > &{color:inherit;}color:",s.colors.textSecondary,";"),c={css:d,"data-pending":t,"data-testid":`${t?"pending":"deployed"}-list-item`};if(n)return(0,o.FD)(v.N,{componentId:"dabs-authoring.deployments-side-panel.deployed-resource.link",asAnchorTag:!0,to:n,openInNewTab:!0,...c,children:[(0,o.Y)(r,{css:u}),a]});return(0,o.FD)("div",{...c,children:[(0,o.Y)(r,{css:u}),a]})},P=({resource:e,actions:t=[]})=>{let n=(0,R.I)(e=>e.target),{formatMessage:a}=(0,h.tz)(),s=[{name:"not-deployed",tooltip:a({id:"B8xjlh",defaultMessage:"Resource not deployed yet in {target}"},{target:n}),icon:d.A,do:void 0},...t];return(0,o.Y)(F,{resource:e,actions:s,pending:!0})},F=({resource:e,actions:t=[],pending:n})=>{let{theme:a}=(0,l.wn)(),s=n?void 0:(0,Y.ID)(e),i=`dabs-authoring.deployments-side-panel.${n?"pending":"deployed"}-resource`;return(0,o.FD)($,{url:s,resource:e,pending:n,children:[(0,o.Y)("span",{css:{textDecoration:"none",verticalAlign:"text-bottom",marginLeft:a.spacing.sm,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1},children:e.name}),(0,o.Y)("div",{className:"deployment-resource-action-container",children:t.map(e=>{let t=`${i}.${j[e.name]}`,n="href"in e?{href:e.href,target:"_blank"}:{onClick:t=>{t.preventDefault(),e.do?.()}},s=(0,o.Y)(u.$n,{componentId:t,"aria-label":e.tooltip,className:"deployment-resource-action",size:"small",type:"tertiary",...n,disabled:"do"in e&&void 0===e.do,icon:(0,o.Y)(e.icon,{css:(0,c.dg)({color:a.colors.textSecondary,"&:hover":{color:a.colors.actionTertiaryTextHover},"&&":{width:"100%",height:"100%",display:"inline-flex",alignItems:"center",justifyContent:"center"}})})},e.name);return e.tooltip?(0,o.Y)(p.m,{componentId:`${t}.tooltip`,content:e.tooltip,side:"bottom",children:s},e.name):s})})]})},N={alerts:F,apps:F,catalogs:F,clusters:F,dashboards:F,database_catalogs:F,database_instances:F,experiments:F,external_locations:F,jobs:({resource:t})=>{let{jobRunNow:n,jobRunNowResult:a}=(0,M.Y)({jobId:Number(t.id),reload:()=>{}}),{formatMessage:s}=(0,h.tz)(),i=(0,R.I)(e=>e.target),r=(0,R.I)(e=>e.targets),l=!!i&&r[i]?.mode==="development",d=[];if(t.id&&(0,b.Su)()&&l){let e=`/jobs/${t.id}/tasks`;d.push({name:"go-to-job-task-editor",tooltip:s({id:"iTY9cl",defaultMessage:"Go to task editor"}),icon:g.A,href:e})}return d.push(a.loading?e:{name:"run",tooltip:s({id:"GHtwFg",defaultMessage:"Run job"}),icon:m.A,do:()=>n({jobId:Number(t.id)})}),(0,o.Y)(F,{resource:t,actions:d})},model_serving_endpoints:F,models:F,pipelines:({resource:t})=>{let{formatMessage:n}=(0,h.tz)(),a=(0,y.MR)(),{pipelineRunNow:s,pipelineStopNow:i,pipelineState:r}=(0,T.I)(t.name,t.id),l=!!(r&&r===A.mtr.RUNNING),d=!l&&r&&!(0,w.B)(r),u=r?` (${n((0,S.Vs)(r))})`:"",c=[];if(d)c.push(e);else if(l){let e=n({id:"qlwtq/",defaultMessage:"Stop pipeline"});c.push({name:"stop",tooltip:`${e}${u}`,icon:f.A,do:i})}else{let e=n({id:"zG7YBE",defaultMessage:"Run pipeline"});c.push({name:"run",tooltip:`${e}${u}`,icon:m.A,do:s})}if(t.id&&"pipelines"===t.type&&t.sourceLinkedDeployment&&a){let e=new I.H(I.H.fromPipeline(t.id)),a=(0,x.gX)(e,{}),s="string"==typeof a?a:(0,k.AO)(a);c.unshift({name:"go-to-pipeline-editor",tooltip:n({id:"xbiDQw",defaultMessage:"Go to pipeline editor"}),icon:g.A,href:s})}return(0,o.Y)(F,{resource:t,actions:c})},postgres_branches:F,postgres_endpoints:F,postgres_projects:F,quality_monitors:F,registered_models:F,schemas:F,secret_scopes:F,sql_warehouses:F,synced_database_tables:F,vector_search_endpoints:F,volumes:F},_={alerts:P,apps:P,catalogs:P,clusters:P,dashboards:P,database_catalogs:P,database_instances:P,experiments:P,external_locations:P,jobs:P,model_serving_endpoints:P,models:P,pipelines:P,postgres_branches:P,postgres_endpoints:P,postgres_projects:P,quality_monitors:P,registered_models:P,schemas:P,secret_scopes:P,sql_warehouses:P,synced_database_tables:P,vector_search_endpoints:P,volumes:P};a()}catch(e){a(e)}})},339917:(e,t,n)=>{n.a(e,async(e,a)=>{try{n.d(t,{Y:()=>v});var s=n(610435),o=n(692738),i=n(694762),r=n(382908),l=n(497895),d=n(12414),u=n(342411),c=n(133398),p=n(954879),g=n(577830),m=n(246378),f=n(131845),h=n(51471),b=e([f,c]);[f,c]=b.then?(await b)():b;let v=()=>{let[e,t]=(0,o.useState)(!1),n=(0,o.useCallback)(()=>{t(!0)},[t]),a=e&&(0,s.Y)(y,{close:()=>t(!1)});return{doDestroy:n,destroyModal:a}};function y({close:e}){let{formatMessage:t}=(0,u.tz)(),n=(0,p.I)(e=>e.projectName()),a=(0,p.I)(e=>e.setIsAssetsLoading),l=(0,p.I)(e=>e.runner),d=(0,p.I)(e=>e.target),[b,v]=(0,o.useState)(!1),I=(0,f.g)(),{assets:x,isLoading:R}=(0,g.iQ)(),Y=(0,m.lQ)(l,d,"destroy"),w=x?.map(e=>({id:e.id,name:e.name,type:e.type,modification:"deleted"}))||[],T=w.some(e=>"pipelines"===e.type),M=R||T&&!b;return(0,s.Y)(i.ZF,{componentId:"dabs-authoring.undeploy-modal","data-testid":"destroy-modal",destroyOnClose:!0,okText:t({id:"TBFxNt",defaultMessage:"Delete"}),cancelText:t({id:"9/5bQN",defaultMessage:"Cancel"}),visible:!0,title:t({id:"zIiAQf",defaultMessage:"Delete deployed resources"}),okButtonProps:{disabled:M},onOk:()=>{"running"!==Y.status&&d&&(l?.destroy(d),a(!0),I()),e()},onCancel:()=>{Y.cancel(),e()},children:R?(0,s.Y)(k,{}):(0,s.FD)(s.FK,{children:[(0,s.Y)(u.sA,{id:"kGCmjJ",defaultMessage:"The deployed resources of the deployment bundle <b>{projectName}</b> for the target <strong>{target}</strong> will be permanently deleted.",values:{projectName:n,target:d}}),(0,s.Y)(r.o.Title,{level:3,children:(0,s.Y)(u.sA,{id:"5BPN8A",defaultMessage:"Resource summary"})}),(0,s.Y)(c.ChangedResourcesTable,{tableData:w}),T&&(0,s.Y)(h.u,{isConfirmed:b,setIsConfirmed:v})]})})}let k=()=>{let{theme:e}=(0,l.wn)();return(0,s.FD)("div",{css:{color:e.colors.textSecondary,height:e.spacing.lg},children:[(0,s.Y)(d.y,{css:{marginRight:e.spacing.xs}}),(0,s.Y)(u.sA,{id:"APXY6I",defaultMessage:"Reviewing resources to be deleted..."})]})};a()}catch(e){a(e)}})},357719:(e,t,n)=>{n.d(t,{c:()=>o});var a=n(342411),s=n(181105);let o=e=>{let{formatMessage:t}=(0,a.tz)();if(!e)return{message:null,details:null};if(e instanceof s.ZR)return{message:e.displayMessage,details:e.message};return{message:t({id:"stojC0",defaultMessage:"There was an unexpected error loading deployed resources, please refresh the page"}),details:null}}},367851:(e,t,n)=>{n.d(t,{C:()=>r});var a=n(342411),s=n(141078),o=n(406949),i=n(367313);let r=({id:e,name:t,successMessage:n,errorMessage:r})=>{let d=(0,a.tz)(),[u,c]=(0,s.n_)(i.ol);return{jobCancelAllRuns:(0,o.KK)({performMutation:()=>u({variables:{input:{id:e.toString()}}}),extractDataField:e=>e.jobCancelAllRuns,id:e,successMessage:d.formatMessage(n??l.successNotification,{name:t}),errorMessage:d.formatMessage(r??l.errorNotification,{name:t}),catchRequestRejections:!0}),jobCancelAllRunsResult:c}},l={successNotification:(0,a.zR)({id:"FeDQG7",defaultMessage:'Successfully cancelled all runs for job "{name}"'}),errorNotification:(0,a.zR)({id:"zJ+NIn",defaultMessage:'Error cancelling all runs for job "{name}'})}},418627:(e,t,n)=>{n.d(t,{D:()=>r,f:()=>l});var a=n(610435),s=n(692738),o=n(846665);let i=(0,s.createContext)({isDirty:!1,setIsDirty:o.tE}),r=({children:e})=>{let[t,n]=(0,s.useState)(!1);return(0,a.Y)(i.Provider,{value:{isDirty:t,setIsDirty:n},children:e})},l=()=>(0,s.useContext)(i)},434122:(e,t,n)=>{n.d(t,{n:()=>d});var a=n(886100),s=n(22191),o=n(747129),i=n(190537);function r(e,t,n,a,s,o,i){try{var r=e[o](i),l=r.value}catch(e){n(e);return}r.done?t(l):Promise.resolve(l).then(a,s)}let l=a.iT.sev2BurnRateLogger({esComponent:s.Es.DabsAuthoring,eventId:"Failed to attach notebook during tryReconnect",sloTarget:o.i1.P99,minFailures:o.Ip.Min0});function d(e){var t;return(t=function*(){try{yield e?.connect(),yield e?.detachAndAttachServerless(),l.success()}catch(n){let e,t;if(e=n instanceof Error?n.message:String(n),null!=(t=(0,i.Mo)(e))&&new t(e).isUserError)return;l.failure(n)}},function(){var e=this,n=arguments;return new Promise(function(a,s){var o=t.apply(e,n);function i(e){r(o,a,s,i,l,"next",e)}function l(e){r(o,a,s,i,l,"throw",e)}i(void 0)})})()}},548141:(e,t,n)=>{n.a(e,async(e,a)=>{try{n.d(t,{H:()=>e});var s=n(610435),o=n(692738),i=n(694762),r=n(382908),l=n(764236),d=n(342411),u=n(954879);function c({visible:e,onOk:t,onCancel:n}){return(0,s.FD)(i.aF,{visible:e,componentId:"dabs-authoring.revoke-execution-consent-modal",title:(0,s.Y)(d.sA,{id:"vaxJWM",defaultMessage:"Revoke Python code execution consent"}),onOk:t,onCancel:n,okText:(0,s.Y)(d.sA,{id:"7vExqI",defaultMessage:"Revoke consent"}),cancelText:(0,s.Y)(d.sA,{id:"aOUC32",defaultMessage:"Cancel"}),children:[(0,s.Y)(r.o.Text,{children:(0,s.Y)(d.sA,{id:"hvE2EM",defaultMessage:"After revoking consent, Python code in this bundle will no longer be executed during deployment. You can grant consent again at any time."})}),(0,s.Y)(l.h,{size:"lg",shrinks:!1})]})}let e=()=>{let e=(0,u.I)(e=>e.runner),[t,n]=(0,o.useState)(!1),a=(0,o.useCallback)(()=>{if(!e)return;n(!1),e.setHasRestrictedExecutionConsent(!1)},[e]),i=(0,o.useCallback)(()=>{n(!1)},[]),r=(0,o.useCallback)(()=>{n(!0)},[]);return[(0,o.useMemo)(()=>t?(0,s.Y)(c,{visible:t,onOk:a,onCancel:i}):null,[t,a,i]),r]};a()}catch(e){a(e)}})},570059:(e,t,n)=>{n.a(e,async(e,a)=>{try{n.d(t,{U:()=>e});var s=n(610435);n(692738);var o=n(497895),i=n(342411),r=n(954879),l=n(643162);let e=({target:e})=>{let{theme:t}=(0,o.wn)(),n=(0,r.I)(e=>e.targets);if(!e)return null;let a=(0,s.Y)(l.W,{target:e,mode:n[e]?.mode});return(0,s.Y)("div",{"data-testid":"no-deployed-resources-message",css:{color:t.colors.textSecondary,margin:`${t.spacing.sm}px ${t.spacing.md}px`},children:(0,s.Y)(i.sA,{id:"puv/VM",defaultMessage:"No resources deployed to {target} yet",values:{target:a}})})};a()}catch(e){a(e)}})},617301:(e,t,n)=>{n.d(t,{Y:()=>f,v:()=>h});var a=n(610435);n(692738);var s=n(342411),o=n(441535),i=n(763835),r=n(217985),l=n(406949),d=n(376544),u=n(993533),c=n(715370),p=n(641208),g=n(39528),m=n(886110);let f=e=>{let[t,n]=c.R.useMutation(d.xe,{refetchQueries:[m.kC,p.m0],awaitRefetchQueries:!0}),s=c.R.useIntl();return{jobRunNow:(0,l.gm)({performMutation:(n,a)=>t({variables:{input:{jobId:n?.jobId??e.jobId,parameters:n?.parameters,queue:n?.queue,jobParameters:n?.jobParameters,only:n?.only,...n?.performanceTarget&&{performanceTarget:n.performanceTarget},externalApiVersion:{major:2,minor:1}},includeRunId:!0}}),extractDataField:e=>e.jobsRunNow,onComplete:t=>e.reload(t),id:e=>`${e.runId}`,successMessage:(e,t,n)=>{let a=n??t?.performanceTarget,i=a===u.gpx.PERFORMANCE_OPTIMIZED,r=(0,o.W)("databricks.fe.lakeflow.enableWarmpoolNotificationInStaging",!1)&&i;return s.formatMessage(r?b.successNotificationInStagingWithPerformanceOptimized:b.successNotification,{runId:e.runId,performanceTarget:a})},successMessageChildren:t=>(0,a.Y)(r.N,{componentId:"codegen_webapp_js_jaws_hooks_usejobrunnow.tsx_54",to:(0,i.Uc)().runDetails({jobId:e.jobId,runId:t.numberInJob??""}),asAnchorTag:!0,children:s.formatMessage(b.viewRunDetailsNotificationButton)}),errorMessage:s.formatMessage(b.errorNotification),catchRequestRejections:!0}),jobRunNowResult:n}},h=e=>{let[t,n]=c.R.useMutation(d.xe,{refetchQueries:[g.R]}),a=c.R.useIntl();return{jobRunNowAutogen:(0,l.gm)({performMutation:n=>t({variables:{input:{jobId:e.jobId,externalApiVersion:{major:2,minor:1}},includeRunId:!1}}),extractDataField:e=>e.jobsRunNow,successMessage:t=>a.formatMessage(b.continuousJobSuccessNotification,{name:e.jobName}),errorMessage:a.formatMessage(b.continuousJobErrorNotification),catchRequestRejections:!0}),jobRunNowAutogenResult:n}},b={successNotification:(0,s.zR)({id:"oohWbt",defaultMessage:"Triggered run{performanceTarget, select, STANDARD{ in standard mode} PERFORMANCE_OPTIMIZED{ in performance-optimized mode} other{} }: {runId}"}),successNotificationInStagingWithPerformanceOptimized:(0,s.zR)({id:"pw2Ey9",defaultMessage:"Triggered run{performanceTarget, select, STANDARD{ in standard mode} PERFORMANCE_OPTIMIZED{ in performance-optimized mode} other{} }: {runId}. Performance optimized is not available on staging, expect longer startup times."}),viewRunDetailsNotificationButton:(0,s.zR)({id:"tKgOPB",defaultMessage:"View run"}),errorNotification:(0,s.zR)({id:"skJAIa",defaultMessage:"Failed to start run"}),continuousJobSuccessNotification:(0,s.zR)({id:"rh12kz",defaultMessage:'Restarting run for job "{name}". A new run will start shortly'}),continuousJobErrorNotification:(0,s.zR)({id:"xzbqrI",defaultMessage:"Failed to restart job"})}},643162:(e,t,n)=>{n.d(t,{B:()=>I,W:()=>w});var a=n(610435),s=n(16778),o=n.n(s);n(692738);var i=n(497895),r=n(12414),l=n(943844),d=n(46e3),u=n(99442),c=n(639712),p=n(806773),g=n(907046),m=n(465946),f=n(382908),h=n(370427),b=n(342411),y=n(30472),v=n(723075),k=n(911320);let I=({targets:e,setSelectedTarget:t,selectedTarget:n,loading:s})=>{let{theme:o}=(0,i.wn)(),m=T(e,t),f=(0,y.IB)(),h=f?(0,a.FD)("div",{css:{position:"relative",width:"100%"},children:[(0,a.Y)(b.sA,{id:"fsiusy",defaultMessage:"Target:"}),n&&(0,a.FD)(a.FK,{children:["\xa0",(0,a.Y)(w,{target:n,mode:e[n]?.mode})]}),s&&(0,a.Y)(r.y,{css:{position:"absolute",right:o.spacing.xs},"data-testid":"dabs-authoring.deployments-side-panel.target-selector.loading"})]}):(0,a.FD)(a.FK,{children:[(0,a.Y)(b.sA,{id:"fsiusy",defaultMessage:"Target:"}),"\xa0",n&&(0,a.Y)(w,{target:n,mode:e[n]?.mode})]});if(f&&!n&&s)return(0,a.FD)(k.B,{rounded:"bottom",role:"combobox",disabled:!0,children:[(0,a.Y)("div",{css:{flex:"1 1 0"},children:h}),(0,a.Y)(l.A,{css:{color:o.colors.textSecondary,marginLeft:o.spacing.xs}})]});return(0,a.Y)(a.FK,{children:(0,a.FD)(d.l,{id:"target-selector",componentId:"dabs-authoring.deployments-side-panel.target-selector",value:n||"",children:[(0,a.Y)(u.b,{width:"100%",isBare:!1,css:{background:o.colors.backgroundSecondary,borderRadius:`0 0 ${o.borders.borderRadiusSm}px ${o.borders.borderRadiusSm}px`,textAlign:"left",button:(0,c.dg)({border:"none",padding:`${o.spacing.xs}px ${o.spacing.sm}px`,"& > :first-child":{flex:"1 1 0"}})},children:h}),(0,a.Y)(p.g,{matchTriggerWidth:!0,textOverflowMode:"ellipsis",children:R.map(e=>m[e]&&(0,a.Y)(g.n,{name:M(e),children:m[e]||[]},e))})]})})},x="other",R=["development","production",x],Y={development:"lemon",production:"turquoise",[x]:void 0},w=({target:e,mode:t,disabled:n=!1})=>{let{formatMessage:s}=(0,b.tz)(),{theme:o}=(0,i.wn)(),r=Y[!function(e){if(!e)return!1;return R.includes(e)}(t)?x:t];return(0,a.Y)(a.FK,{children:(0,a.Y)(m.v,{color:r,css:{marginRight:0,maxWidth:"70%",...n&&{opacity:.5,color:o.colors.textSecondary}},componentId:"dabs-authoring.deployments-side-panel.target-selector.mode-tag","aria-label":s({id:"t8j8BP",defaultMessage:"Target"}),children:(0,a.Y)(f.o.Text,{ellipsis:!0,css:{maxWidth:"100%"},children:e})})})},T=(e,t)=>{let{theme:n}=(0,i.wn)(),{formatMessage:s}=(0,b.tz)(),o={};for(let[i,r]of Object.entries(e)){let e="development"===r.mode||"production"===r.mode?r.mode:x;o[e]||(o[e]=[]);let l=!(0,v.i8)(r),d=l?s({id:"1UU74j",defaultMessage:"(Disabled)"}):r.default?s({id:"SjXbmY",defaultMessage:"(Default)"}):void 0;o[e].push((0,a.FD)(h.O,{value:i,onChange:()=>{t(i)},disabled:!(0,v.i8)(r),disabledReason:l?s({id:"a0cuz0",defaultMessage:"Deployment to other workspaces is not supported"}):void 0,children:[(0,a.Y)(w,{target:i,mode:e}),d&&(0,a.Y)("span",{css:{marginLeft:n.spacing.xs},children:d})]},i))}return o},M=e=>{if(e===x)return"Other";return`${o()(e)} mode`}},685745:(e,t,n)=>{n.d(t,{k:()=>i});var a=n(610435),s=n(342411),o=n(419180);function i(){let[e,t]=(0,o.WR)(),[n,i]=(0,o.L$)(),[r,l]=(0,o.TA)();return{options:[{key:"job",componentId:"dabs-authoring.deployments-side-panel.new-resource-button.add-existing-job",text:(0,a.Y)(s.sA,{id:"TGjUwb",defaultMessage:"Add existing job"}),onClick:()=>t()},{key:"pipeline",componentId:"dabs-authoring.deployments-side-panel.new-resource-button.add-existing-pipeline",text:(0,a.Y)(s.sA,{id:"J1HwAN",defaultMessage:"Add existing pipeline"}),onClick:()=>i()},{key:"dashboard",componentId:"dabs-authoring.deployments-side-panel.new-resource-button.add-existing-dashboard",text:(0,a.Y)(s.sA,{id:"lBR5hE",defaultMessage:"Add existing dashboard"}),onClick:()=>l()}],modals:(0,a.FD)(a.FK,{children:[e,n,r]})}}},704561:(e,t,n)=>{n.d(t,{a:()=>i});var a=n(610435),s=n(692738),o=n(917612);let i=e=>{let[t,n]=(0,s.useState)(!1),i=(0,s.useCallback)(()=>{n(!0)},[]),r=(0,s.useCallback)(()=>{n(!1)},[]);return[t?(0,a.Y)(o.V,{visible:t,onOk:()=>{n(!1),e?.()},onCancel:r}):null,i]}},714141:(e,t,n)=>{n.a(e,async(e,a)=>{try{n.d(t,{S:()=>j,c:()=>C});var s=n(610435),o=n(692738),i=n(497895),r=n(79128),l=n(7754),d=n(840438),u=n(445929),c=n(382908),p=n(694762),g=n(599352),m=n(339518),f=n(503217),h=n(342411),b=n(30472),y=n(485669),v=n(488655),k=n(840698),I=n(738419),x=n(190537),R=n(853341),Y=n(357719),w=n(487137),T=n(352010),M=n(954879),A=n(990786),S=e([f,k,T]);[f,k,T]=S.then?(await S)():S;let C=({componentId:e,error:t,diagnoseDetails:n,onSelectBudgetPolicy:a,onGrantRestrictedExecutionConsent:p,onRetry:g,wide:m})=>{let{theme:f}=(0,i.wn)(),{message:y,details:v}=(0,Y.c)(t),[T,M]=(0,o.useState)(!1),S=(0,b.zu)(),C=t instanceof x.gd,$=t instanceof x.tk,[P,F]=(0,o.useState)(!1),N=(0,o.useRef)(t);if((0,o.useEffect)(()=>{t!==N.current&&(F(!1),N.current=t)},[t]),P)return null;return(0,s.FD)("div",{"data-testid":e,css:{position:"relative",background:$?f.colors.backgroundWarning:f.colors.actionDangerDefaultBackgroundDefault,marginTop:m?0:f.spacing.sm,padding:m?f.spacing.md-f.spacing.xs:`${f.spacing.lg}px ${f.spacing.md}px`,borderRadius:f.spacing.sm,border:`1px solid ${$?f.colors.borderWarning:f.colors.borderDanger}`,textAlign:m?"unset":"center",color:$?f.colors.textPrimary:f.colors.actionDangerDefaultTextDefault,fontWeight:"bold",...m&&{display:"flex",alignItems:"center",gap:f.spacing.sm}},children:[$&&(0,s.Y)(r.$n,{componentId:`${e}.dismiss-button`,onClick:()=>F(!0),size:"small",type:"tertiary",icon:(0,s.Y)(l.A,{}),"aria-label":"Dismiss",css:{position:"absolute",top:f.spacing.xs,right:f.spacing.xs}}),t instanceof R.Vp?(0,s.Y)(D,{visible:T,details:v,onClose:()=>M(!1)}):(0,s.Y)(j,{visible:T,details:v,onClose:()=>M(!1)}),$?(0,s.Y)(d.A,{css:{marginBottom:m?0:f.spacing.sm}}):(0,s.Y)(u.A,{css:{marginBottom:m?0:f.spacing.sm}}),(0,s.Y)(c.o.Truncate,{lines:m?1:4,children:y??void 0}),C?(0,s.Y)(I.c,{inline:m,componentId:`${e}.set-budget-policy-button`,onSelectBudgetPolicy:a}):$&&p?(0,s.Y)(A.J,{inline:m,componentId:`${e}.grant-consent-button`,onGrantConsent:p}):(0,s.FD)("div",{css:{display:"flex",gap:f.spacing.sm,marginTop:m?0:f.spacing.md,marginLeft:"auto",justifyContent:m?"flex-end":"center"},children:[(0,w.$d)(t)&&g&&(0,s.Y)(r.$n,{onClick:g,componentId:`${e}.retry-button`,children:(0,s.Y)(h.sA,{id:"5Ckhxo",defaultMessage:"Retry"})}),S&&n&&!(0,w.$d)(t)&&(0,s.Y)(k.h,{componentId:`${e}.diagnose-error`,error:t,source:n.source}),v&&(0,s.Y)(r.$n,{onClick:()=>M(!0),componentId:`${e}.see-details-button`,children:(0,s.Y)(h.sA,{id:"cxfzQt",defaultMessage:"See details"})})]})]})};function j({visible:e,details:t,onClose:n,title:a}){let o=a??(0,s.Y)(h.sA,{id:"29S+nK",defaultMessage:"Deployment Bundle Error"});return(0,s.Y)(p.aF,{componentId:"dabs-authoring.bundle-error-modal",destroyOnClose:!0,okText:(0,s.Y)(h.sA,{id:"mVe+jT",defaultMessage:"Ok"}),visible:e,title:o,onOk:n,onCancel:n,children:(0,s.Y)(g.Z,{componentId:"dabs-authoring.bundle-error-modal.card",children:(0,s.Y)(T.aF,{output:t||""})})})}function D({visible:e,onClose:t,details:n}){let a=(0,M.I)(e=>e.rootDatabricksYamlFolderNode),{theme:o}=(0,i.wn)();return(0,s.Y)(p.aF,{componentId:"dabs-authoring.config-error-modal",destroyOnClose:!0,okText:(0,s.Y)(h.sA,{id:"351TXu",defaultMessage:"Edit bundle config"}),cancelText:(0,s.Y)(h.sA,{id:"ymWnx+",defaultMessage:"Cancel"}),visible:e,title:(0,s.Y)(h.sA,{id:"CB0Bsm",defaultMessage:"Bundle config error"}),onOk:()=>{t();let e=(0,y.ZZ)({id:a?.name?.split("/")[1]||""});(0,v.oo)(e)},onCancel:()=>{t()},children:(0,s.Y)(m.F,{componentId:"dabs-authoring.config-error-modal.alert",closable:!1,message:(0,s.Y)(s.FK,{children:(0,s.Y)(f.ReadOnlyCodeBlock,{theme:o.isDarkMode?"databricks-unified-dark":"databricks-unified-light",language:"text",children:n||""})}),type:"error"})})}a()}catch(e){a(e)}})},738419:(e,t,n)=>{n.d(t,{c:()=>r});var a=n(610435);n(692738);var s=n(497895),o=n(79128),i=n(342411);let r=({componentId:e,onSelectBudgetPolicy:t,inline:n})=>{let{theme:r}=(0,s.wn)();return(0,a.Y)(o.$n,{css:{marginTop:n?0:r.spacing.md,marginLeft:"auto"},onClick:t,componentId:e,children:(0,a.Y)(i.sA,{id:"RW/Tbi",defaultMessage:"Select usage policy"})})}},831337:(e,t,n)=>{n.d(t,{C:()=>c});var a=n(610435),s=n(692738),o=n(79128),i=n(79570),r=n(342411),l=n(181105),d=n(411695),u=n(691914);let c=({componentId:e,target:t,children:n,doDeploy:c,configError:p,...g})=>{let m=(0,s.useMemo)(()=>{if(!(0,d.ER)())return(0,u.E)({showLearnMoreLink:!0});if(!t)return(0,a.Y)(r.sA,{id:"S0ShOi",defaultMessage:"Select a target to deploy the bundle"});if(p)return p instanceof l.ZR?p.displayMessage:(0,a.Y)(r.sA,{id:"8/yHIv",defaultMessage:"Bundle config error"});return null},[t,p]);return m?(0,a.Y)(i.m,{componentId:`${e}.disabled-tooltip`,content:m,children:(0,a.Y)(o.$n,{componentId:e,disabled:!0,...g,children:n})},"deploy-button"):(0,a.Y)(o.$n,{componentId:e,onClick:c,...g,children:n},"deploy-button")}},886110:(e,t,n)=>{n.d(t,{CG:()=>u,aD:()=>m,gy:()=>g,kC:()=>p});var a=n(141078),s=n(831358);if(13057==n.j)var o=n(726583);var i=n(543963);let r=(0,a.J1)`
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
  ${i.WB}
`,d=(0,a.J1)`
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
`,u=(0,a.J1)`
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
  ${i.WB}
  ${s.j}
  ${s.E}
`;(0,a.J1)`
  fragment RunsListTable_RunNode on Run {
    ...RunsListTableColumns_RunNode
  }
  ${r}
`;let c=(0,a.J1)`
  fragment RunsListTable_JobsRunNode on JobsRun {
    ...RunsListTableColumns_JobsRunNode
  }
  ${u}
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
`;function g({jobId:e,first:t,after:n,startTimeFrom:a,startTimeTo:s,expandTasks:i}){return{query:p,variables:{jobId:e,first:t,after:n,expandTriggerInfo:!0,expandTasks:i,startTimeFrom:a,startTimeTo:s,includeJobParameters:(0,o.ue)(),includeRunStatus:!0,includeQueueDuration:!0,includeQueueReason:!0}}}(0,a.J1)`
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
  ${d}
  ${i.WB}
  ${s.j}
  ${s.E}
`},895363:(e,t,n)=>{n.d(t,{I:()=>c});var a=n(692738),s=n(342411),o=n(712234),i=n(993533),r=n(724283),l=n(379851);function d(e,t,n,a,s,o,i){try{var r=e[o](i),l=r.value}catch(e){n(e);return}r.done?t(l):Promise.resolve(l).then(a,s)}function u(e){return function(){var t=this,n=arguments;return new Promise(function(a,s){var o=e.apply(t,n);function i(e){d(o,a,s,i,r,"next",e)}function r(e){d(o,a,s,i,r,"throw",e)}i(void 0)})}}let c=(e,t)=>{let n=(0,s.tz)(),[d,c]=(0,a.useState)(null),[p]=r.z.usePipelineAction(r.z.usePipelineStart,{successMessage:n.formatMessage({id:"VsWYt9",defaultMessage:'Starting pipeline "{pipelineName}".'},{pipelineName:e}),errorMessage:n.formatMessage({id:"hBLvIF",defaultMessage:'Failed to start pipeline "{pipelineName}". Make sure the pipeline is not already running.'},{pipelineName:e})}),[g]=r.z.usePipelineAction(r.z.usePipelineStop,{successMessage:n.formatMessage({id:"5e7P+q",defaultMessage:'Stopped pipeline "{pipelineName}".'},{pipelineName:e}),errorMessage:n.formatMessage({id:"XocHCM",defaultMessage:'Failed to stop pipeline "{pipelineName}".'},{pipelineName:e})}),{pipeline:m}=(0,o.z)({pipelineId:t}),f=m?.latestUpdates?.[0],h=f?.state,b=f?.updateId??null;(0,a.useEffect)(()=>{c(b)},[b]);let{updateDetails:y}=(0,l.o)(t??null,d),v=y?.state??h??null;return{pipelineRunNow:a.useCallback(()=>u(function*(){if(!t)return;let{data:e}=yield p({variables:{input:{pipelineId:t,cause:i.uI$.USER_ACTION}}});c(e?.deltapipelinesStart?.updateId??null)})(),[t,p]),pipelineStopNow:a.useCallback(()=>u(function*(){if(!t)return;yield g({variables:{input:{pipelineId:t}}})})(),[t,g]),pipelineState:v}}},911320:(e,t,n)=>{n.d(t,{B:()=>o});var a=n(610435),s=n(497895);function o({rounded:e,children:t,...n}){let{theme:i}=(0,s.wn)();return(0,a.Y)("div",{css:{position:"relative",backgroundColor:i.colors.backgroundSecondary,padding:`${i.spacing.xs}px ${i.spacing.sm}px `,boxSizing:"border-box",height:i.general.heightSm,display:"inline-flex",alignItems:"center",borderRadius:"top"===e?`${i.borders.borderRadiusSm}px ${i.borders.borderRadiusSm}px 0 0`:`0 0 ${i.borders.borderRadiusSm}px ${i.borders.borderRadiusSm}px`,cursor:n.disabled?"not-allowed":"unset"},...n,children:t})}},917612:(e,t,n)=>{n.d(t,{V:()=>g});var a=n(610435),s=n(692738),o=n(694762),i=n(382908),r=n(764236),l=n(964133),d=n(342411),u=n(930908),c=n(743048);function p(e,t,n,a,s,o,i){try{var r=e[o](i),l=r.value}catch(e){n(e);return}r.done?t(l):Promise.resolve(l).then(a,s)}let g=({visible:e,onOk:t,onCancel:n})=>{let[g,m]=(0,s.useState)((0,c.GZ)()||void 0),f=(0,s.useCallback)(()=>{var e;return(e=function*(){if(!g)return;(0,c.sk)(g),t()},function(){var t=this,n=arguments;return new Promise(function(a,s){var o=e.apply(t,n);function i(e){p(o,a,s,i,r,"next",e)}function r(e){p(o,a,s,i,r,"throw",e)}i(void 0)})})()},[g,t]),h=(0,s.useCallback)(()=>{m(void 0),n()},[n]);return(0,a.FD)(o.aF,{visible:e,componentId:"dabs-authoring.budget-policy-modal",title:(0,a.Y)(d.sA,{id:"4Gxv0I",defaultMessage:"Select usage policy"}),onOk:f,onCancel:h,okText:(0,a.Y)(d.sA,{id:"fmPkt8",defaultMessage:"Select usage policy"}),cancelText:(0,a.Y)(d.sA,{id:"8OYBdc",defaultMessage:"Cancel"}),okButtonProps:{disabled:!g},children:[(0,a.Y)(i.o.Text,{color:"secondary",size:"sm",children:(0,a.Y)(d.sA,{id:"Zxljtd",defaultMessage:"Select the usage policy to apply when running bundle commands, such as deploy."})}),(0,a.Y)(r.h,{size:"md",shrinks:!1}),(0,a.Y)(l.D.Label,{htmlFor:"bundle-budget-policy-selector",children:(0,a.Y)(d.sA,{id:"W8je4J",defaultMessage:"Usage policy"})}),(0,a.Y)(r.h,{size:"xs",shrinks:!1}),(0,a.Y)(u.n0,{id:"bundle-budget-policy-selector",width:"100%",displayTags:!0,defaultToFirstPolicyIfUnspecified:!0,value:g,onChange:e=>{m(e)}})]})}},934244:(e,t,n)=>{n.d(t,{V:()=>l});var a=n(610435);n(692738);var s=n(497895),o=n(342411),i=n(125534),r=n(573874);let l=({runner:e,target:t})=>{let{theme:n}=(0,s.wn)(),i=u(e,t),l=i?.get("finishTime");return(0,a.Y)("span",{css:{color:n.colors.textSecondary,lineHeight:`${3*n.spacing.sm}px`},children:(0,a.Y)(o.sA,{id:"eUFXKg",defaultMessage:"Last deploy: {timeAgo}",values:{timeAgo:i&&l?(0,a.Y)(r.y,{time:l}):(0,a.Y)(o.sA,{id:"LV6OhA",defaultMessage:"unknown"})}})})},d=["deploy"],u=(e,t)=>{let n=(0,i.h)(e,d,t).filter(e=>"finished"===e.get("state"));if(0===n.length)return null;return n[n.length-1]}},959115:(e,t,n)=>{n.a(e,async(e,a)=>{try{n.r(t),n.d(t,{DeploymentsSidePanel:()=>ef,DeploymentsSidePanelImpl:()=>ep});var s=n(610435),o=n(692738),i=n(12414),r=n(222572),l=n(79570),d=n(79128),u=n(687828),c=n(241393),p=n(497895),g=n(339518),m=n(382908),f=n(673163),h=n(958120),b=n(342411),y=n(30472),v=n(485669),k=n(153184),I=n(22191),x=n(134256),R=n(863708),Y=n(726977),w=n(262989),T=n(488655),M=n(858383),A=n(737358),S=n(846007),j=n(217985),D=n(411695),C=n(559056),$=n(831337),P=n(133398),F=n(954879),N=n(190537),_=n(853341),L=n(691914),z=n(714141),E=n(704561),B=n(229069),J=n(548141),O=n(577830),q=n(434122),U=n(246378),W=n(41639),V=n(26026),Q=n(608580),K=n(632515),H=n(344415),G=n(912854),Z=n(580500),X=n(143737),ee=n(911320),et=n(934244),en=n(16851),ea=n(643162),es=n(129094),eo=n(339917),ei=e([W,B,P,eo,J,Q,X,z,en]);function er(e,t,n,a,s,o,i){try{var r=e[o](i),l=r.value}catch(e){n(e);return}r.done?t(l):Promise.resolve(l).then(a,s)}function el(e){return function(){var t=this,n=arguments;return new Promise(function(a,s){var o=e.apply(t,n);function i(e){er(o,a,s,i,r,"next",e)}function r(e){er(o,a,s,i,r,"throw",e)}i(void 0)})}}[W,B,P,eo,J,Q,X,z,en]=ei.then?(await ei)():ei;let eu=({doReload:e,disabled:t,loading:n})=>{let a=(0,b.tz)(),o=n?(0,s.Y)(i.y,{"data-testid":"deployed-list-item-spinner"}):(0,s.Y)(r.A,{}),u=a.formatMessage({id:"nMWsm4",defaultMessage:"Refresh resources"});return(0,s.Y)(l.m,{componentId:"dabs-authoring.deployments-side-panel.refresh-button-tooltip",content:u,children:(0,s.Y)(d.$n,{componentId:"dabs-authoring.deployments-side-panel.refresh-button",size:"small",onClick:e,disabled:t,icon:o,"aria-label":u})})},ec=({doDestroy:e,openSettings:t,openVariables:n,areVariablesDisabled:a,openBudgetPolicyModal:o,openRevokeConsentModal:i,configError:r})=>{let l=(0,b.tz)(),p=(0,F.I)(e=>e.assets),g=(0,F.I)(e=>e.isAssetsLoading),m=(0,F.I)(e=>e.target),f=(0,F.I)(e=>e.isRootBundleDataLoading),h=(0,F.I)(e=>e.runner),k=!m||!!r||!p?.length||g||f;return(0,s.FD)(u.Root,{children:[(0,s.Y)(u.Trigger,{asChild:!0,children:(0,s.Y)(d.$n,{componentId:"dabs-authoring.deployments-side-panel.app_actions_menu","aria-label":l.formatMessage({id:"gYMn28",defaultMessage:"More"}),size:"small",icon:(0,s.Y)(c.A,{}),role:"menu"})}),(0,s.FD)(u.Content,{children:[(0,s.Y)(u.Item,{componentId:"dabs-authoring.deployments-side-panel.app_actions_menu.settings",onClick:t,children:(0,s.Y)(b.sA,{id:"pJoeXT",defaultMessage:"Open configuration"})}),(0,s.Y)(u.Item,{componentId:"dabs-authoring.deployments-side-panel.app_actions_menu.undeploy",disabled:k,onClick:e,children:(0,s.Y)(b.sA,{id:"0yVMfy",defaultMessage:"Delete deployed resources"})}),(0,s.Y)(u.Item,{componentId:"dabs-authoring.deployments-side-panel.app_actions_menu.variables",disabled:a,onClick:n,children:(0,s.Y)(b.sA,{id:"tXxA0b",defaultMessage:"Configure variable overrides"})}),(0,s.Y)(u.Item,{componentId:"dabs-authoring.deployments-side-panel.app_actions_menu.budget_policy",onClick:o,children:(0,s.Y)(b.sA,{id:"HRquJz",defaultMessage:"Select usage policy"})}),h?.hasRestrictedExecutionConsent()&&(0,s.Y)(u.Item,{componentId:"dabs-authoring.deployments-side-panel.app_actions_menu.revoke_execution_consent",onClick:i,children:(0,s.Y)(b.sA,{id:"u0UXBK",defaultMessage:"Revoke execution consent"})}),(0,y.bG)()&&(0,s.Y)(u.Item,{componentId:"dabs-authoring.deployments-side-panel.app_actions_menu.dev_runner_link",onClick:()=>el(function*(){let e=h?.getRunnerPath();if(e){(0,H.lr)(K.e$.WORKSPACE);let t=yield(0,V.T)(e);if(!t)return;window.open((0,v.f_)({id:String(t.id)}),"_blank")}})(),children:"Open runner (dev only)"})]})]})},ep=()=>{let{theme:e}=(0,p.wn)(),t=(0,T.Zp)(),n=(0,F.I)(e=>e.projectRootFolderNode),a=(0,F.I)(e=>e.rootDatabricksYamlFolderNode),r=(0,F.I)(e=>e.runner),l=(0,F.I)(e=>e.target),d=(0,F.I)(e=>e.setTarget),u=(0,F.I)(e=>e.targets),c=(0,F.I)(e=>e.setAssets),h=(0,F.I)(e=>e.resetTargetsStatus),y=(0,F.I)(e=>e.redeploymentRecommended),x=(0,F.I)(e=>e.setRedeploymentRecommended),{loading:R}=(0,W.M)(),{error:Y,reload:M}=(0,B.o)(),A=(0,F.I)(e=>e.setConfigError),{assets:S,pendingAssets:j,isLoading:C,error:V,reloadAssets:K,setLoading:H}=(0,O.iQ)(),G=(0,F.I)(e=>e.consentModalOpen),[ei,er]=(0,P.useDeployAction)(),{doDestroy:ep,destroyModal:em}=(0,eo.Y)(),ef=(0,U.lQ)(r,l,"deploy"),eh=(0,o.useRef)(G);(0,o.useLayoutEffect)(()=>{eh.current&&!G&&r?.hasRestrictedExecutionConsent()&&H(!0),eh.current=G},[G,r,H]);let eb=()=>el(function*(){H(!0),Y&&(A(void 0),h()),yield(0,q.n)(r),Y?M():K(l)})(),[ey,ev]=(0,E.a)(eb),ek=(0,o.useCallback)(()=>{if(!r)return;r.setHasRestrictedExecutionConsent(!0),H(!0),K(l)},[r,H,K,l]),[eI,ex]=(0,J.H)(),{navigateToFile:eR,disabled:eY}=(0,Q.i)(),ew=(0,o.useCallback)(()=>{if(!a)return;t((0,v.ZZ)({id:(0,Z.Uk)(a.name)}))},[a,t]),eT=(0,o.useCallback)(e=>{d(e),c(void 0),K(e)},[d,c,K]),{elementRef:eM}=(0,w.h)("div","dabs-authoring.deployments-side-panel");if(!n)return null;if(!(0,D.ER)())return(0,s.Y)(g.F,{type:"warning",componentId:"dabs-authoring.deployments-side-panel.serverless-not-enabled-alert",closable:!1,message:(0,L.E)({showLearnMoreLink:!0})});let eA=function({configError:e,assetsError:t,deployCommandStatus:n,deployCommandError:a,consentModalOpen:s,hasRestrictedExecutionConsent:o}){if(e&&!(e instanceof N.tk&&o))return{error:e,diagnoseDetails:{source:e instanceof _.Vp?"yaml-parse":"list-targets"},isLoading:s&&e instanceof N.tk};if(!e&&t&&!(t instanceof N.tk&&o))return{error:t,diagnoseDetails:{source:"summary"},isLoading:s&&t instanceof N.tk};if(!e&&!t&&"error"===n&&a instanceof N.tk&&!o)return{error:a,diagnoseDetails:{source:"deploy"},isLoading:s};return null}({configError:Y,assetsError:V,deployCommandStatus:ef.status,deployCommandError:ef.error,consentModalOpen:G,hasRestrictedExecutionConsent:r?.hasRestrictedExecutionConsent()??!1});return(0,s.FD)("div",{"data-testid":"deployments-side-panel",css:{paddingTop:e.spacing.xs,display:"flex",flexDirection:"column",height:"100%",boxSizing:"border-box"},ref:eM,children:[ei,em,ey,eI,(0,s.FD)("div",{css:{display:"flex",flexDirection:"column",alignItems:"stretch",gap:e.spacing.xs/2},children:[(0,s.Y)(ee.B,{rounded:"top",children:(0,s.FD)(m.o.Text,{ellipsis:!0,css:{maxWidth:"100%"},children:[(0,s.Y)(b.sA,{id:"cGchwy",defaultMessage:"Source:"}),"\xa0",(0,s.Y)(ed,{projectRootFolderNode:n})]})}),(0,s.Y)(ea.B,{targets:u,selectedTarget:l,setSelectedTarget:eT,loading:R}),y&&(0,s.Y)(g.F,{componentId:"dabs-authoring.deployments-side-panel.redeployment-required-alert","data-testid":"redeployment-required-alert",type:"warning",closable:!0,onClose:()=>x(!1),css:{marginTop:e.spacing.sm},message:(0,s.Y)(b.sA,{id:"eDQe8g",defaultMessage:"Bundle redeployment required"}),description:(0,s.Y)(b.sA,{id:"sDw6iq",defaultMessage:"Your bundle configuration files differ from resource settings. Please redeploy to apply changes."})}),(0,s.FD)("div",{css:{display:"flex",marginTop:e.spacing.sm},children:[(0,s.Y)($.C,{componentId:"dabs-authoring.deployments-side-panel.deploy-button",doDeploy:er,target:l,css:{marginRight:e.spacing.sm},size:"small",icon:(0,s.Y)(f.A,{}),configError:Y,children:(0,s.Y)(b.sA,{id:"YnhyYl",defaultMessage:"Deploy"})}),(0,s.Y)("div",{css:{flex:1,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:l&&r&&(0,s.Y)(et.V,{runner:r,target:l})}),(0,s.Y)(ec,{doDestroy:ep,openSettings:ew,openVariables:eR,areVariablesDisabled:eY,openBudgetPolicyModal:ev,openRevokeConsentModal:ex,configError:Y})]})]}),(0,s.Y)(eg,{}),(0,s.Y)(es.ao,{children:(0,s.FD)("div",{css:{display:"flex",flexDirection:"column",minHeight:0},"data-testid":"deployed-resources-list",children:[(0,s.FD)(m.o.Title,{level:4,css:{display:"flex","&&":{margin:0,lineHeight:"24px"}},children:[(0,s.Y)("div",{css:{flex:1,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:(0,s.Y)(b.sA,{id:"75yGzt",defaultMessage:"Bundle resources"})}),(0,s.FD)("div",{css:{display:"flex",gap:`${e.spacing.sm}px`},children:[(0,s.Y)(eu,{doReload:eb,disabled:R||C&&!Y&&!V,loading:R||C&&!!S}),(0,s.Y)(X.C,{disabled:!!Y})]})]}),eA&&(eA.isLoading?(0,s.FD)("div",{css:{color:e.colors.textSecondary,marginTop:e.spacing.sm},children:[(0,s.Y)(i.y,{css:{marginRight:e.spacing.md}}),(0,s.Y)(b.sA,{id:"7EtWcO",defaultMessage:"Loading..."})]}):(0,s.Y)(z.c,{componentId:"dabs-authoring.side-panel.error-message",error:eA.error,diagnoseDetails:eA.diagnoseDetails,onSelectBudgetPolicy:ev,onGrantRestrictedExecutionConsent:ek,onRetry:eb})),!eA&&(0,s.Y)(en.q,{assets:S,pendingAssets:j,assetsLoading:C})]})}),(0,s.Y)("div",{css:{flex:1}}),(0,s.Y)("div",{css:{display:"flex",justifyContent:"center",padding:`${e.spacing.md}px`},children:(0,s.Y)(k.A,{parentUi:I.Es.DabsAuthoring,origin:"deployments-side-panel"})})]})};function ed({projectRootFolderNode:e}){let{theme:t}=(0,p.wn)(),{formatMessage:n}=(0,b.tz)(),a=(0,G.e)(),{pathname:o}=(0,M.zy)(),i=(0,F.I)(e=>e.projectName()),r=(0,C.In)(e=>e.id),d=(0,A.B6)("/editor/bundles/:id",o),u="deployments-side-panel-bundle-name",c="dabs-authoring.deployments-side-panel.project-name-tooltip",g=(0,s.FD)(s.FK,{children:[(0,s.Y)(h.A,{"aria-hidden":"false",css:{color:a,marginRight:t.spacing.xs,verticalAlign:"sub"}}),i]});if(d)return(0,s.Y)(l.m,{componentId:c,content:(0,s.Y)(b.sA,{id:"C6yQI0",defaultMessage:"The home page is already open"}),children:(0,s.Y)("span",{"data-testid":u,children:g})});let m=(0,S.t4)({pathname:(0,v.Oz)((0,Z.Uk)(e.name)),search:"?"+new URLSearchParams({[v.bJ]:r}).toString()});return(0,s.Y)(l.m,{componentId:c,content:(0,s.Y)(b.sA,{id:"HSYr5e",defaultMessage:"Open home page"}),children:(0,s.Y)(j.N,{"data-testid":u,componentId:"dabs-authoring.deployments-side-panel.project-name",css:{textDecoration:"none"},"aria-label":n({id:"rilJOp",defaultMessage:"Source"}),to:m,asAnchorTag:!0,children:g})})}let eg=()=>{let{theme:e}=(0,p.wn)();return(0,s.Y)("div",{css:{height:"1px",borderBottom:`1px solid ${e.colors.border}`,margin:`${e.spacing.md+e.spacing.xs}px 0`}})},em=(0,s.Y)(x.T,{message:(0,s.Y)(b.sA,{id:"mE4FUP",defaultMessage:"Unable to load the deployment panel"})}),ef=(0,R.hx)(I.Es.DabsAuthoring,Y.s.DabsSidePanel,ep,em);a()}catch(e){a(e)}})},990272:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(610435),s=n(692738),o=n(375214);function i(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M2 1.75A.75.75 0 0 1 2.75 1h10.5a.75.75 0 0 1 .75.75v7.465a5.75 5.75 0 0 1-2.723 4.889l-2.882 1.784a.75.75 0 0 1-.79 0l-2.882-1.784A5.75 5.75 0 0 1 2 9.214zm1.5.75V7h3.75V2.5zm5.25 0V7h3.75V2.5zm3.75 6H8.75v5.404l1.737-1.076A4.25 4.25 0 0 0 12.5 9.215zm-5.25 5.404V8.5H3.5v.715a4.25 4.25 0 0 0 2.013 3.613z",clipRule:"evenodd"})})}let r=(0,s.forwardRef)((e,t)=>(0,a.Y)(o.I,{ref:t,...e,component:i}));r.displayName="ShieldIcon";let l=r},990786:(e,t,n)=>{n.d(t,{J:()=>r});var a=n(610435);n(692738);var s=n(497895),o=n(79128),i=n(342411);let r=({componentId:e,onGrantConsent:t,inline:n})=>{let{theme:r}=(0,s.wn)();return(0,a.Y)(o.$n,{css:{marginTop:n?0:r.spacing.md,marginLeft:"auto"},onClick:t,componentId:e,children:(0,a.Y)(i.sA,{id:"x5W3tf",defaultMessage:"Allow"})})}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/70354.2377f9f739.chunk.js.map