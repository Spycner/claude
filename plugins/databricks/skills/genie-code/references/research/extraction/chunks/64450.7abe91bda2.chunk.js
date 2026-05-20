(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[1809,47930,64450],{17272:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});let n={}},19246:(e,t,a)=>{"use strict";a.d(t,{m:()=>l});var n=a(610435),r=a(660488),i=a(429608),s=a(497895),o=a(123252);let l=({dangerouslySetAntdProps:e,...t})=>{let{theme:a}=(0,s.wn)();return(0,n.Y)(i.wC,{children:(0,n.Y)(r.A,{...(0,o.VG)(),mouseLeaveDelay:.25,...t,overlayStyle:{zIndex:a.options.zIndexBase+50,...t.overlayStyle},...e})})}},21255:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function s(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M5.5 6a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5z",clipRule:"evenodd"})})}let o=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:s}));o.displayName="StopCircleIcon";let l=o},25602:(e,t,a)=>{"use strict";if(a.d(t,{Es:()=>E,Rg:()=>R,Wy:()=>D,rO:()=>k}),13057==a.j)var n,r=a(610435);var i=a(359419),s=a.n(i),o=a(189219),l=a.n(o),u=a(90114),d=a.n(u),c=a(692738),m=a(412514);if(13057==a.j)var p=a(30472);if(13057==a.j)var f=a(886100);if(13057==a.j)var g=a(22191);if(13057==a.j)var b=a(412836);if(13057==a.j)var y=a(844760);if(13057==a.j)var h=a(205827);var S=a(361772);if(13057==a.j)var T=a(993533);if(13057==a.j)var v=a(206419);function I(e,t,a,n,r,i,s){try{var o=e[i](s),l=o.value}catch(e){a(e);return}o.done?t(l):Promise.resolve(l).then(n,r)}var E=((n={}).BREAKGLASS="breakglass",n.YAML_SYNC="yaml_sync",n.REDEPLOYMENT_REQUIRED="redeployment_required",n.NONE="none",n);let A=c.createContext({data:null,loading:!1,isJobDABControlled:!1,deploymentUiMode:"none"});function k({job:e,children:t}){let a=(0,p.Su)(),n=e.settings?.editMode===T.Do2.UI_LOCKED,i=e.settings?.deployment?.metadataFilePath,s=(0,b.IT)({queryKey:["deploymentMetadata",e.id,i],queryFn:()=>(0,y.S)(`/ajax-api/2.0/workspace/export?path=${encodeURIComponent(i)}&direct_download=true`).then(e=>e.json()).then(C),enabled:!!i&&(n||a)&&i?.startsWith("/"),refetchOnWindowFocus:!1}),o=(0,v.x)(e)&&n,l=a&&(0,v.x)(e)&&(0,h.M6)(s.data)&&(0,h.D5)(s.data)&&!!i,u=s.isLoading?"none":l?n?"redeployment_required":"yaml_sync":"breakglass";return(0,r.Y)(A.Provider,{value:{data:s.data?.config??null,loading:s.isLoading&&"idle"!==s.fetchStatus,isJobDABControlled:o,deploymentUiMode:a?u:"breakglass"},children:t})}function R(){let e=c.useContext(A),t=!s()(e?.data?.bundle?.git),a=e?.data?.bundle?.git?.origin_url?.startsWith("https://")&&(0,S.NK)(e?.data?.workspace?.file_path);return{...e,canOpenGitFolder:a,bundleHasGitSettings:t}}function C(e){var t;return(t=function*(){if(!l()(e)||l()(e)&&!("version"in e))return null;try{if(1===e.version)return yield N.validate(e,{strict:!0});return f.iT.sev2(g.Es.WorkflowsAuthoringDABs,"jaws:dab_deployment_metadata:unknown_version",`Unknown DAB deployment metadata file version: ${e.version}`),null}catch(e){return null}},function(){var e=this,a=arguments;return new Promise(function(n,r){var i=t.apply(e,a);function s(e){I(i,n,r,s,o,"next",e)}function o(e){I(i,n,r,s,o,"throw",e)}s(void 0)})})()}function D(e,t){let a=Object.values(t?.resources?.jobs??{}).find(({id:t})=>t===String(e));return a?.relative_path??""}let N=m.Ik().shape({version:m.ai().oneOf([1]).required(),config:m.Ik().shape({bundle:m.Ik().shape({git:m.Ik().shape({branch:m.Yj().notRequired(),origin_url:m.Yj().notRequired(),commit:m.Yj().notRequired(),bundle_root_path:m.Yj().notRequired()}).required()}).required(),workspace:m.Ik().shape({file_path:m.Yj().required()}),resources:m.Ik().shape({jobs:m.RZ(e=>m.Ik(d()(e,()=>m.Ik().shape({id:m.Yj(),relative_path:m.Yj().required()}))))})}).required(),extra:m.Ik().shape({git_folder_path:m.Yj().notRequired()}).notRequired()})},27148:(e,t,a)=>{"use strict";a.d(t,{HI:()=>S,hE:()=>k,xO:()=>R,Qx:()=>g,Io:()=>E,sQ:()=>A,R2:()=>v,Oy:()=>b,WK:()=>y,Me:()=>h,bM:()=>D,hK:()=>C,hW:()=>T});var n=a(778529),r=a.n(n),i=a(342411);if(13057==a.j)var s=a(115957);if(13057==a.j)var o=a(817148);var l=a(886100),u=a(22191),d=a(976988);function c(e,t=!1){if((0,d.KV)()&&!t)return l.iT.sev2(u.Es.WorkflowsOrchestration,"Unexpected value received",{operationContext:e}),e;throw Error("Unexpected code path reached")}if(13057==a.j)var m=a(429978);var p=a(993533),f=a(846665);function g(e){if(!e||0===e.startTime)return 0;if(null!==e.runDuration&&void 0!==e.runDuration)return e.runDuration;let t=[e?.setupDuration,e?.executionDuration,e?.cleanupDuration].reduce((e,t)=>e+(t??0),0),a=(e?.endTime??0)-(e?.startTime??0);return t>0?t:a}function b(e){return[p.vQ9.PENDING,p.vQ9.RUNNING,p.vQ9.TERMINATING,p.vQ9.QUEUED].includes(e?.lifeCycleState)}function y(e){if(!e)return!1;let t=e?.state;if(!t)return!1;switch(t){case p.YLF.PENDING:case p.YLF.RUNNING:case p.YLF.QUEUED:case p.YLF.TERMINATING:return!0;case p.YLF.BLOCKED:case p.YLF.TERMINATED:case p.YLF.STATE_UNSPECIFIED:case p.YLF.WAITING:break;default:(0,f.dr)(t,`Unknown state ${t}`)}return!1}function h(e){return[p.vQ9.BLOCKED,p.vQ9.PENDING,p.vQ9.RUNNING,p.vQ9.QUEUED,p.vQ9.WAITING_FOR_RETRY].includes(e?.lifeCycleState)}function S(e){if(e)return[p.vn$.MANAGE_RUN,p.vn$.MANAGE,p.vn$.IS_OWNER].includes(e)&&(0,s.zl)(o.g3.JOB_RUNS_MANAGE);return!1}function T(e){if(!r()(m.Z.find(t=>t===e)))return e;c(e)}function v(e){if(!e?.lifeCycleState)return"INTERNAL_ERROR";if(e?.resultState===p.qEk.CANCELED&&e.lifeCycleState===p.vQ9.TERMINATED||e?.resultState===p.qEk.CANCELED&&e.lifeCycleState===p.vQ9.INTERNAL_ERROR)return"CANCELED";if(e?.resultState===p.qEk.SUCCESS&&e.lifeCycleState===p.vQ9.SKIPPED)return"SKIPPED_BY_CUSTOMER_CODE";if(e?.resultState===p.qEk.SUCCESS)return"SUCCEEDED";if(e?.resultState===p.qEk.SUCCESS_WITH_FAILURES)return"SUCCEEDED_WITH_FAILURES";if(e?.resultState===p.qEk.FAILED)return"FAILED";if(e?.resultState===p.qEk.TIMEDOUT)return"TIMED_OUT";if(e.userCancelledOrTimedout&&[p.vQ9.BLOCKED,p.vQ9.RUNNING,p.vQ9.PENDING].includes(e.lifeCycleState))return"CANCELING";let t=e.resultState;if(e.lifeCycleState===p.vQ9.SKIPPED&&t&&t in D)return t;return e.lifeCycleState}function I(e){if(!e||!e.state)return c(e,!0),"PENDING";let t=e.state;if(t===p.YLF.STATE_UNSPECIFIED)return c(t,!0),"PENDING";if(t===p.YLF.QUEUED)return"QUEUED";if(t===p.YLF.PENDING){if(e.cancellationDetails?.reason)return"CANCELING";return"PENDING"}if(t===p.YLF.RUNNING){if(e.cancellationDetails?.reason)return"CANCELING";return"RUNNING"}if(t===p.YLF.TERMINATED){if(e.terminationDetails?.type===p.pwc.SUCCESS){if(e.terminationDetails?.code===p.TFN.SUCCESS_WITH_FAILURES)return"SUCCEEDED_WITH_FAILURES";if(e.terminationDetails?.code===p.TFN.USER_CANCELED)return"CANCELED";return"SUCCEEDED"}if(e.terminationDetails?.type===p.pwc.CLIENT_ERROR){if(e.cancellationDetails?.reason===p.Q5Q.TIMED_OUT)return"TIMED_OUT";if(e.terminationDetails?.code===p.TFN.RUN_EXECUTION_ERROR&&e.queueDetails?.code===p.wi6.MAX_CONCURRENT_RUNS_REACHED&&e.terminationDetails?.message)return"FAILED";if(e.terminationDetails?.code===p.TFN.SKIPPED||e.terminationDetails?.code===p.TFN.MAX_CONCURRENT_RUNS_EXCEEDED)return"SKIPPED";if(e.terminationDetails?.code===p.TFN.CANCELED||e.terminationDetails?.code===p.TFN.CANCELLED)return"CANCELED";if(e.queueDetails?.code===p.wi6.MAX_CONCURRENT_RUNS_REACHED)return"EVICTED"}return"FAILED"}if(t===p.YLF.TERMINATING)return"SUCCEEDED";if(t===p.YLF.BLOCKED)return"BLOCKED";return"CANCELED"}function E(e){return D[v(e)].stableStatus}function A(e){return D[I(e)].stableStatus}function k(e,t){return t.formatMessage(D[v(e)].displayStatus)}function R(e,t){return t.formatMessage(D[I(e)].displayStatus)}function C(e){return Object.values(D).map(e=>e.stableStatus).find(t=>t===e)}let D={CANCELED:{displayStatus:(0,i.zR)({id:"Y2lhhW",defaultMessage:"Canceled"}),stableStatus:"Canceled"},CANCELING:{displayStatus:(0,i.zR)({id:"R4AX5a",defaultMessage:"Canceling"}),stableStatus:"Canceling"},SUCCEEDED:{displayStatus:(0,i.zR)({id:"YBKGyy",defaultMessage:"Succeeded"}),stableStatus:"Succeeded"},SUCCEEDED_WITH_FAILURES:{displayStatus:(0,i.zR)({id:"EWCRN4",defaultMessage:"Succeeded with failures"}),stableStatus:"Succeeded with failures"},FAILED:{displayStatus:(0,i.zR)({id:"WBg03E",defaultMessage:"Failed"}),stableStatus:"Failed"},TIMED_OUT:{displayStatus:(0,i.zR)({id:"LGUt4t",defaultMessage:"Timed out"}),stableStatus:"Timed out"},INTERNAL_ERROR:{displayStatus:(0,i.zR)({id:"WU2dEd",defaultMessage:"Internal error"}),stableStatus:"Internal error"},BLOCKED:{displayStatus:(0,i.zR)({id:"o073/U",defaultMessage:"Blocked"}),stableStatus:"Blocked"},PENDING:{displayStatus:(0,i.zR)({id:"vJ2SGQ",defaultMessage:"Pending"}),stableStatus:"Pending"},RUNNING:{displayStatus:(0,i.zR)({id:"GFE/hp",defaultMessage:"Running"}),stableStatus:"Running"},SKIPPED:{displayStatus:(0,i.zR)({id:"JjSXvn",defaultMessage:"Skipped"}),stableStatus:"Skipped"},EXCLUDED:{displayStatus:(0,i.zR)({id:"RuEiKV",defaultMessage:"Excluded"}),stableStatus:"Excluded"},UPSTREAM_EVICTED:{displayStatus:(0,i.zR)({id:"92cTa6",defaultMessage:"Upstream evicted"}),stableStatus:"Upstream evicted"},UPSTREAM_FAILED:{displayStatus:(0,i.zR)({id:"F8SjrR",defaultMessage:"Upstream failed"}),stableStatus:"Upstream failed"},UPSTREAM_CANCELED:{displayStatus:(0,i.zR)({id:"PLmzBH",defaultMessage:"Upstream canceled"}),stableStatus:"Upstream canceled"},SKIPPED_BY_CUSTOMER_CODE:{displayStatus:(0,i.zR)({id:"JjSXvn",defaultMessage:"Skipped"}),stableStatus:"Skipped"},TERMINATED:{displayStatus:(0,i.zR)({id:"+XXo4R",defaultMessage:"Terminated"}),stableStatus:"Terminated"},TERMINATING:{displayStatus:(0,i.zR)({id:"gXfh2k",defaultMessage:"Terminating"}),stableStatus:"Terminating"},WAITING_FOR_RETRY:{displayStatus:(0,i.zR)({id:"1ypivJ",defaultMessage:"Waiting for retry"}),stableStatus:"Waiting for retry"},QUEUED:{displayStatus:(0,i.zR)({id:"ddE990",defaultMessage:"Queued"}),stableStatus:"Queued"},EVICTED:{displayStatus:(0,i.zR)({id:"4UoNsY",defaultMessage:"Evicted"}),stableStatus:"Evicted"},MAX_CONCURRENT_RUN_REACHED:{displayStatus:(0,i.zR)({id:"S5mrsA",defaultMessage:"Max concurrent runs reached"}),stableStatus:"Maximum concurrent runs reached"},DISABLED:{displayStatus:(0,i.zR)({id:"hTaDHI",defaultMessage:"Disabled"}),stableStatus:"Disabled"}}},50470:(e,t,a)=>{"use strict";a.d(t,{h:()=>r});var n=a(141078);let r=(0,n.J1)`
  query UserActivityInfo($type: UseractivityAssetType!, $id: String!) @component(name: "Lakeview.DatabricksOne") {
    userActivityInfo(assetType: $type, assetId: $id) {
      assetType
      assetId
      isFavorite
    }
  }
`},66018:(e,t,a)=>{"use strict";a.d(t,{o:()=>s});var n=a(692738),r=a(488655),i=a(720263);function s(){let e=(0,r.Zp)(),t=(0,n.useCallback)((t,a={})=>{e(t,a)},[e]),a=(0,n.useCallback)((e,a)=>{t(i.hk.getPipelineListRoute(e),a)},[t]),s=(0,n.useCallback)(e=>{t(i.hk.getPipelineCreateRoute(),e)},[t]),o=(0,n.useCallback)((e,a)=>{let n="/editor/pipelines/new",r=new URLSearchParams({contextId:"workspace",...e?{pathName:e}:{}}).toString();t(r?`${n}?${r}`:n,a)},[t]),l=(0,n.useCallback)((e,a,n,{showSourceCodePopover:r,preserveSearchParams:s,...o}={})=>{t(i.hk.getPipelineDetailsRoute(e,a,n,{showSourceCodePopover:r,preserveSearchParams:s}),o)},[t]);return{navigateToPipelineList:a,navigateToPipelineCreate:s,navigateToPipelineEditorCreate:o,navigateToPipelineDetails:l,navigateToPipelineSettings:(0,n.useCallback)((e,{lastUpdateId:a,...n}={})=>{t(i.hk.getPipelineSettingsRoute(e,{lastUpdateId:a}),n)},[t]),navigateToPipelineCreateFromSampleData:(0,n.useCallback)(e=>{t(i.hk.getPipelineCreateFromSampleDataRoute(),e)},[t])}}},68925:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function s(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("path",{fill:"currentColor",d:"M6.94 8 4.97 6.03l1.06-1.06L8 6.94l1.97-1.97 1.06 1.06L9.06 8l1.97 1.97-1.06 1.06L8 9.06l-1.97 1.97-1.06-1.06z"}),(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13",clipRule:"evenodd"})]})}let o=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:s}));o.displayName="XCircleIcon";let l=o},78373:(e,t,a)=>{"use strict";a.d(t,{$:()=>p,G:()=>m});var n=a(252513),r=a.n(n),i=a(391854),s=a.n(i),o=a(485669),l=a(488655),u=a(971384),d=a(737358),c=a(846007);let m={getLocation:()=>window.location||{},getUrlSearchParams:()=>new URLSearchParams(m.getLocation().search),getUrlSearchParam:e=>m.getUrlSearchParams().get(e),setUrlSearchParam:(e,t)=>{let a=m.getUrlSearchParams();a.set(e,t);let{pathname:n,hash:r}=m.getLocation();return(0,l.oo)({pathname:n,search:a.toString(),hash:r},{replace:!0})},deleteUrlSearchParam:e=>{let t=m.getUrlSearchParams();t.delete(e);let{pathname:a,hash:n}=m.getLocation();window.history.replaceState(null,"",`${a}?${t.toString()}${n}`)},removeView(e,t){let a;t=void 0===t||t,console.log("Removing view",e.name,t);window.router.recentViewRoutes=s()(window.router.recentViewRoutes,e),e.remove(),delete window.fragmentToView[a],t&&r().history.fragment===a&&window.router.navigateHome()},openNotebookInNewTab(e){let t=(0,o.f_)({id:String(e)});(0,u.Lz)((0,d.AO)((0,c.t4)(t.toString())),{openInNewTab:!0})},addMlflowExperiment(e=""){(0,l.oo)(`/ml/createExperiment/${e}`)}};function p(e){let t=e.startsWith("/")?e.substring(1):e;return`#workspace/${encodeURIComponent(t)}`}},112807:(e,t,a)=>{"use strict";e.exports=a(731707)},118799:(e,t,a)=>{"use strict";a.d(t,{L:()=>k});var n=a(610435),r=a(956935),i=a(497895),s=a(286342),o=a(79128),l=a(465946),u=a(943844),d=a(382908),c=a(764236),m=a(79570),p=a(944552),f=a(342411),g=a(190645),b=a(153184),y=a(692738),h=a(802582),S=a(222572);function T(e,t,a,n,r,i,s){try{var o=e[i](s),l=o.value}catch(e){a(e);return}o.done?t(l):Promise.resolve(l).then(n,r)}function v({theme:e,componentId:t,onBeforeReload:a}){let r=(0,f.tz)().formatMessage({id:"X26IEC",defaultMessage:"Reload this page for change to take place. The change only applies to you in this workspace and won't affect other users."}),i=(0,y.useCallback)(()=>{var e;return(e=function*(){yield a?.(),window.location.reload()},function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function s(e){T(i,n,r,s,o,"next",e)}function o(e){T(i,n,r,s,o,"throw",e)}s(void 0)})})()},[a]);return(0,n.Y)(h.p,{title:r,children:(0,n.Y)(o.$n,{componentId:t,size:"small",type:"link",style:{fontWeight:e.typography.typographyBoldFontWeight},onClick:i,icon:(0,n.Y)(S.A,{}),children:(0,n.Y)(f.sA,{id:"oSFyWV",defaultMessage:"Reload page"})})})}var I=a(303575),E=a(631661);let A={popoverContent:(0,r.AH)({maxWidth:345,boxSizing:"content-box"}),flexRow:(0,r.AH)({display:"flex",alignItems:"center"}),tag:e=>(0,r.AH)({marginRight:0,"& > div":{cursor:"pointer !important"},"&:hover":{"& > div":{backgroundColor:e.colors.actionDefaultBackgroundHover}},"&:active":{"& > div":{backgroundColor:e.colors.actionDefaultBackgroundPress}}}),headerRow:(0,r.AH)({display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"})};function k({children:e,featureName:t,needReload:a=!1,initialStatus:r,onPreviewStatusChange:y,confirmationMessage:h,componentId:S,popoverZIndexOverride:T,toggleDisabledReason:R,feedbackLinkProps:C,hidePreviewLabel:D}){let{theme:N}=(0,i.wn)(),{shouldReload:M,status:P,onStatusChange:w,isCommitting:_}=(0,I.g)({initialStatus:r,onPreviewStatusChange:y,needReload:a}),x=(0,f.tz)(),O={clickToViewDetails:x.formatMessage({id:"+HXo89",defaultMessage:"Click to view details"}),on:x.formatMessage({id:"2RifD2",defaultMessage:"ON"}),off:x.formatMessage({id:"vcu12D",defaultMessage:"OFF"})},L=x.formatMessage({id:"63tpkX",defaultMessage:"{featureName}: {status}"},{featureName:t,status:"on"===P?O.on:O.off}),$=e=>{w(e?"on":"off")};return(0,n.FD)(s.Root,{componentId:"codegen_web-shared-ui_src_previewtag_previewtag.tsx_153",children:[(0,n.Y)(s.Trigger,{asChild:!0,children:(0,n.Y)(o.$n,{componentId:S?`${S}.trigger`:"codegen_web-shared-ui_src_previewtag_previewtag.tsx_99",type:"link","aria-label":L,title:O.clickToViewDetails,children:(0,n.FD)(l.v,{componentId:"web-shared-ui.preview-tag",css:A.tag(N),children:[(0,n.Y)("span",{children:L}),(0,n.Y)(u.A,{})]})})}),(0,n.FD)(s.Content,{align:"start",side:"bottom",collisionPadding:8,css:A.popoverContent,style:T?{zIndex:T}:void 0,children:[(0,n.FD)("div",{css:A.headerRow,children:[(0,n.FD)("div",{css:A.flexRow,children:[(0,n.Y)(d.o.Text,{bold:!0,css:{marginRight:N.spacing.xs},children:t}),!D&&(0,n.Y)(g.W,{})]}),C&&(0,n.Y)(b.A,{...C})]}),(0,n.Y)(c.h,{size:"sm"}),(0,n.Y)("div",{css:A.flexRow,children:(0,n.Y)(m.m,{componentId:"codegen_web-shared-ui_src_previewtag_previewtag.tsx_189",content:R,delayDuration:0,...T?{css:{zIndex:T+1}}:{},children:(0,n.FD)("div",{css:A.flexRow,children:[(0,n.Y)(E.u,{componentId:S?`${S}.confirm_modal`:"codegen_web-shared-ui_src_previewtag_previewtag.tsx_179",title:(0,n.Y)(f.sA,{id:"cTjPJV",defaultMessage:"Are you sure?"}),message:h,onConfirm:()=>w("off"===P?"on":"off"),children:e=>(0,n.Y)(p.d,{componentId:S?`${S}.toggle`:"codegen_web-shared-ui_src_previewtag_previewtag.tsx_183",onChange:h?e:$,checked:"on"===P,disabled:!!R||_})}),(0,n.Y)(d.o.Text,{bold:!0,css:{marginRight:N.spacing.xs},children:"on"===P?O.on:O.off}),M&&(0,n.Y)(v,{componentId:`${S}.toggle.reload`,theme:N})]})})}),(0,n.Y)(c.h,{size:"sm"}),e,(0,n.Y)(s.Arrow,{})]})]})}},138865:(e,t,a)=>{"use strict";a(331763),a(17272),a(565431)},154968:(e,t,a)=>{"use strict";a.d(t,{n:()=>r});var n=a(141078);let r=(0,n.J1)`
  fragment PipelineApiErrorFields on ApiError {
    code
    message
    helpUrl
    traceId
    errorDetails {
      ... on ErrorDetailErrorInfo {
        reason
        domain
        metadata
      }
      ... on ErrorDetailRequestInfo {
        requestId
        servingData
      }
    }
  }
`},159705:(e,t,a)=>{"use strict";a.d(t,{Nw:()=>i,hG:()=>r,iU:()=>s,vi:()=>o});var n=a(141078);let r=(0,n.J1)`
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
`,s=(0,n.J1)`
  fragment StringSettingFragment on SettingspolicySetting {
    isMutable
    ref
    value {
      stringVal {
        value
      }
    }
  }
`,o=(0,n.J1)`
  fragment SettingsApiErrorFragment on ApiError {
    code
    message
    helpUrl
    traceId
  }
`},168351:(e,t,a)=>{"use strict";a.d(t,{v:()=>f});var n=a(610435),r=a(692738),i=a(336330),s=a(258182),o=a(679360),l=a(568721),u=a(549761),d=a(726977),c=a(22191),m=a(759458),p=a(88277);function f(){let e=(0,m.Pj)((0,p.p)(),e=>e.notifications),[t,a]=r.useState(0);return(0,r.useEffect)(()=>{let e=new ResizeObserver(e=>{let{height:t}=e[0].contentRect;a(t+12)}),t=document.querySelector("#dubois-notification-portal ol");return t&&e.observe(t),()=>e.disconnect()},[]),(0,n.FD)(s.Provider,{children:[e.map(e=>{if("globalNotification"===e.apiType)return(0,n.Y)(g,{notification:e},e.uid);if("legacyNotification"===e.apiType)return(0,n.Y)(h,{notification:e},e.uid);return(0,n.Y)(n.FK,{})}),(0,n.Y)(s.Viewport,{css:{transform:`translateY(${t}px)`}})]})}function g({notification:e}){let{message:t,autoDismiss:a,level:m,title:f,uid:h,dismissible:S,children:T,esComponent:v,errorBoundaryId:I,initiatorStack:E}=e,A=()=>p.y.removeNotification(h),{uiDeployableId:k}=(0,o.K8)(),R=!!f,C="number"==typeof h?h.toString():h,D=(0,r.useCallback)((e,{componentStack:t})=>{(0,l.wV)(e,E),(0,u.n8)(e,t,I??d.s.MonolithUiGlobalNotification,v??c.Es.UiObservability,k,!1)},[v,I,E,k]);return(0,n.Y)(i.tH,{onError:D,fallback:(0,n.Y)(n.FK,{}),children:(0,n.FD)(s.Root,{componentId:"codegen_webapp_js_notifications_notficationsv2.tsx_91",id:C,severity:m,duration:y(a),open:!0,onClick:void 0===S||"both"===S||"click"===S?A:void 0,onOpenChange:A,children:[R?(0,n.Y)(s.Title,{children:f}):(0,n.Y)(s.Title,{asChild:!0,children:(0,n.Y)(b,{title:t})}),R&&(0,n.Y)(s.Description,{children:t||T}),(void 0===S||"both"===S||"button"===S)&&(0,n.Y)(s.Close,{componentId:"codegen_webapp_js_notifications_notficationsv2.tsx_107",onClick:A})]})})}let b=r.forwardRef(({title:e},t)=>(0,n.Y)("div",{ref:t,children:e}));function y(e){if(void 0===e)return;if(0===e)return 1/0;return 1e3*e}function h({notification:e}){let{message:t,description:a,uid:r,onClick:i,onClose:o,duration:l,type:u}=e,d=()=>{o?.(),p.y.removeNotification(r)};return(0,n.FD)(s.Root,{componentId:"codegen_webapp_js_notifications_notficationsv2.tsx_145",id:r,duration:y(null===l?void 0:l),onClick:()=>{i?.(),d()},onOpenChange:d,open:!0,severity:u,children:[(0,n.Y)(s.Title,{children:t}),a&&(0,n.Y)(s.Description,{children:a}),(0,n.Y)(s.Close,{componentId:"codegen_webapp_js_notifications_notficationsv2.tsx_155",onClick:d})]})}},171016:(e,t,a)=>{"use strict";a.d(t,{$J:()=>S,C8:()=>g,Kv:()=>T,PP:()=>f,_V:()=>y,eF:()=>b,f4:()=>h});var n=a(610435),r=a(692738),i=a(342411);if(13057==a.j)var s=a(996286);if(13057==a.j)var o=a(980355);var l=a(993533),u=a(889885);if(13057==a.j)var d=a(532973);if(13057==a.j)var c=a(715370);var m=a(550487);if(13057==a.j)var p=a(822369);function f(e){let t={};if(!e)return t;for(let a of e)t[a.jobId]=a;return t}function g(e){let{data:t,permissionLevels:a}=e,n=(0,i.tz)(),g=(0,o.L)(),b=c.R.useSelector(d.g);return(0,r.useMemo)(()=>(function(e){let t,a,{aclFilter:n,sortBy:r,textFilter:i,pagination:o}=e.state,d=e.data?.jobs?.edges,c=e.permissionLevels?.jobListPermissionLevels.manageAllJobs,g=f(e.permissionLevels?.jobListPermissionLevels.permissionLevels),b=(0,p.o)()??!0;if(d&&void 0!==c){let p=i.current.trim().toLowerCase().split(/\s+/g),f=(0,s.b1)(),y=d.filter(t=>(function(e){let{aclFilter:t,aclsEnabled:a,job:n,manageAllJobs:r,permissionsData:i,userId:s}=e;switch(t){case null:case m.bv.ALL:return!0;case m.bv.OWNED_BY_ME:if(!a)return n?.node?.creator?.id===s;return i[n.node.id]?.isOwner??!1;case m.bv.ACCESSIBLE_BY_ME:return r||!!i[n.node.id];default:throw Error("Unexpected AclFilterType")}})({job:t,aclFilter:n,aclsEnabled:b,manageAllJobs:c,permissionsData:g,userId:(0,u.FI)("userId")?(0,u.FI)("userId").toString():""})&&function(e,t,a,n,r){if(0===e.length)return!0;let i=r.map(e=>String(e.getText(t,a,n))).join(" ").toLowerCase();return e.every(e=>i.includes(e))}(p,t,e.intl,e.nodeTypes,f));!function(e,t,a,n,r){if(!t)return;let i=r.find(({columnKey:e})=>e===t.column);if(!i)return;let s=t.direction===l.DKo.ASC?1:-1;e.sort((e,t)=>{let r=i.getSortValue(e,a,n),o=i.getSortValue(t,a,n);if("number"==typeof r&&"number"==typeof o)return(r-o)*s;return String(r).toLowerCase().localeCompare(String(o).toLowerCase())*s})}(y,r,e.intl,e.nodeTypes,f),t=y.slice(o.offset,o.offset+o.limit),a=y?.length}return{paginatedData:t,permissionsDataByJobId:g,manageAllJobs:e.permissionLevels?.jobListPermissionLevels.manageAllJobs??!1,totalCount:a}})({state:g,data:t,permissionLevels:a,intl:n,nodeTypes:b}),[g,t,a,n,b])}function b(e){switch(e){case m.bv.ACCESSIBLE_BY_ME:return Object.values(l.vn$).join(",");case m.bv.ALL:return null;case m.bv.OWNED_BY_ME:return l.vn$.IS_OWNER;default:throw Error("Unexpected AclFilterType")}}function y(e,t,a,n){let r=[];for(let[a,n]of(e&&r.push(`query:"${e}"`),t.entries())){let e=null===n?`tags."${a}":"*"`:`tags."${a}":"${n}"`;r.push(e)}if(a&&r.push("isFavorite=true"),n.length>0){let e=n.map(e=>`runAs=${e}`).join(" OR ");r.push(`(${e})`)}return r.join(" AND ")}function h(e){let t=new Map;return e.forEach(e=>{let a=e.trim().match(/^"([^"]*)":"([^"]*)"$/);a&&!t.has(a[1])&&t.set(a[1],"*"===a[2]?null:a[2])}),t}function S(e,t,a){if(!t[`${e}Forbidden`])return null;if("textSearch"===e)return v.cannotUseTextSearch;if("tags"===e)return v.cannotUseTags;if("favorites"===e){if(a)return v.cannotUseFavoritesSystemManaged;return v.cannotUseFavorites}if("runAs"===e)return v.cannotUseRunAs;if("pipelineType"===e)return v.cannotUsePipelineType;else if("systemManagedType"===e)return v.cannotUseSystemManagedType;else if("health"===e)return v.cannotUseHealth;return null}let T=(0,i.YK)({cannotUseFavoritesSystemManaged:{id:"NQ+8Zc",defaultMessage:"System-managed jobs cannot be added to favorites"}}),v={cannotUseTextSearch:(0,n.Y)(i.sA,{id:"sZhi6C",defaultMessage:"Combining text search with selected filters is not available. Reset filters to use text search"}),cannotUseRunAs:(0,n.Y)(i.sA,{id:"L9b2aT",defaultMessage:"Combining Run as with selected filters is not available. Reset filters to select Run as"}),cannotUseTags:(0,n.Y)(i.sA,{id:"AruLcg",defaultMessage:"Combining tags with selected filters is not available. Reset filters to select tags"}),cannotUseFavorites:(0,n.Y)(i.sA,{id:"HbHnva",defaultMessage:"Combining favorites with selected filters is not available. Reset filters to select favorites"}),cannotUseFavoritesSystemManaged:(0,n.Y)(i.sA,{...T.cannotUseFavoritesSystemManaged}),cannotUsePipelineType:(0,n.Y)(i.sA,{id:"2vAALN",defaultMessage:"Filtering by pipeline type with the selected filters is not available. Reset filters to filter by pipeline type"}),cannotUseSystemManagedType:(0,n.Y)(i.sA,{id:"jdNacz",defaultMessage:"Filtering by system managed type with the selected filters is not available. Reset filters to filter by type"}),cannotUseHealth:(0,n.Y)(i.sA,{id:"wZlRzF",defaultMessage:"Filtering by health with the selected filters is not available. Reset filters to filter by health"})}},173773:(e,t,a)=>{"use strict";a.d(t,{Ej:()=>i,qc:()=>s,vO:()=>o,wt:()=>r});var n=a(141078);let r=(0,n.J1)`
  fragment RecommendedAsset on RecommendationAsset {
    id
    type
    name
    userActivityInfo {
      assetId
      assetType
      isFavorite
    }
    treeNode {
      name
      fullPath
      owner {
        fullname
        email
        id
      }
      modifiedAt
    }
    unityCatalogSecurable {
      name
      fullName
      securableKind
    }
  }
`;(0,n.J1)`
  fragment RecommendedAssetWithThumbnail on RecommendationAsset {
    ...RecommendedAsset
    thumbnailUrl(uiMode: $uiMode)
  }
`;let i=(0,n.J1)`
  fragment RecommendationRelevanceReason on RecommendationRelevanceReason {
    relevanceTime
    type
    viewMetadata {
      viewFrequency
    }
  }
`,s=(0,n.J1)`
  fragment RecommendedAssetRecommendation on RecommendationAssetRecommendation {
    asset {
      ...RecommendedAsset
    }
    relevanceReason {
      ...RecommendationRelevanceReason
    }
  }
`;(0,n.J1)`
  fragment RecommendedAssetRecommendationWithThumbnail on RecommendationAssetRecommendation {
    asset {
      ...RecommendedAssetWithThumbnail
    }
    relevanceReason {
      ...RecommendationRelevanceReason
    }
  }
`;let o=(0,n.J1)`
  fragment RecommendedAssetsResponse on RecommendationAssetRecommendations {
    nextPageToken
    assetRecommendations {
      ...RecommendedAssetRecommendation
    }
    recommendationTraceId
    apiError {
      code
      message
    }
  }
`;(0,n.J1)`
  fragment RecommendedAssetsResponseWithThumbnail on RecommendationAssetRecommendations {
    nextPageToken
    assetRecommendations {
      ...RecommendedAssetRecommendationWithThumbnail
    }
    recommendationTraceId
    apiError {
      code
      message
    }
  }
`},201334:(e,t,a)=>{"use strict";a.d(t,{A:()=>b});var n=a(657709),r=a(513384),i=a(378003),s=a(324399),o=a(692738),l=a(783772),u=a.n(l),d=a(251881),c=a(331379),m=a(716667),p=a(382001),f=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};(0,m.P)("top","middle","bottom","stretch"),(0,m.P)("start","end","center","space-around","space-between");var g=o.forwardRef(function(e,t){var a=o.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),l=(0,s.A)(a,2),m=l[0],g=l[1],b=o.useRef();b.current=e.gutter,o.useEffect(function(){var e=p.Ay.subscribe(function(e){var t=b.current||0;(!Array.isArray(t)&&"object"===(0,i.A)(t)||Array.isArray(t)&&("object"===(0,i.A)(t[0])||"object"===(0,i.A)(t[1])))&&g(e)});return function(){p.Ay.unsubscribe(e)}},[]);var y=function(){var t=[0,0],a=e.gutter,n=void 0===a?0:a;return(Array.isArray(n)?n:[n,0]).forEach(function(e,a){if("object"===(0,i.A)(e))for(var n=0;n<p.ye.length;n++){var r=p.ye[n];if(m[r]&&void 0!==e[r]){t[a]=e[r];break}}else t[a]=e||0}),t};return o.createElement(d.TG,null,function(a){var i,s=a.getPrefixCls,l=a.direction,d=e.prefixCls,m=e.justify,p=e.align,g=e.className,b=e.style,h=e.children,S=f(e,["prefixCls","justify","align","className","style","children"]),T=s("row",d),v=y(),I=u()(T,(i={},(0,r.A)(i,"".concat(T,"-").concat(m),m),(0,r.A)(i,"".concat(T,"-").concat(p),p),(0,r.A)(i,"".concat(T,"-rtl"),"rtl"===l),i),g),E=(0,n.A)((0,n.A)((0,n.A)({},v[0]>0?{marginLeft:-(v[0]/2),marginRight:-(v[0]/2)}:{}),v[1]>0?{marginTop:-(v[1]/2),marginBottom:v[1]/2}:{}),b),A=(0,n.A)({},S);return delete A.gutter,o.createElement(c.A.Provider,{value:{gutter:v}},o.createElement("div",(0,n.A)({},A,{className:I,style:E,ref:t}),h))})});g.displayName="Row";let b=g},203796:(e,t,a)=>{"use strict";a.d(t,{n:()=>i});var n=a(692738),r=a(337706);function i({name:e,defaultValue:t,codec:a,historyAction:s="replace",errorMode:o}){let l=(0,n.useCallback)(n=>{let r=n.get(e);if(null===r)return t;try{return a.deserialize(r)}catch(e){if("throw"===o)throw e;return t}},[e,t,a,o]),[u,d]=(0,r.ok)();return[(0,n.useMemo)(()=>l(u),[u,l]),(0,n.useCallback)((t,n)=>{d(n=>{let r="function"==typeof t?t(l(n)):t;return void 0===r?n.delete(e):n.set(e,a.serialize(r)),n},{replace:"replace"===s,...n})},[s,e,l,a,d])]}},205827:(e,t,a)=>{"use strict";function n(e){let t=e?.extra?.git_folder_path;if(!t)return!1;return t.startsWith("/Workspace")}function r(e){return e?.config?.bundle?.target}function i(e){return e?.config?.bundle?.name}function s(e){return e?.config?.bundle?.mode==="development"}a.d(t,{D5:()=>s,M6:()=>n,V7:()=>r,WF:()=>i})},206419:(e,t,a)=>{"use strict";a.d(t,{A:()=>i,x:()=>r});var n=a(993533);function r(e){return e?.settings?.deployment?.kind===n.k0f.BUNDLE}function i(e){return e?.jobType===n.YxN.SYSTEM_MANAGED}},232284:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function s(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("path",{fill:"currentColor",d:"M8 1c.664 0 1.282.2 1.797.542l-.014.072-.062.357-.357.062c-.402.07-.765.245-1.06.493a1.75 1.75 0 1 0 0 3.447c.295.25.658.424 1.06.494l.357.062.062.357.014.072A3.25 3.25 0 1 1 8 1"}),(0,n.Y)("path",{fill:"currentColor",d:"M9.59 4.983A.75.75 0 0 1 9.62 3.51l.877-.152a.75.75 0 0 0 .61-.61l.153-.878a.75.75 0 0 1 1.478 0l.152.877a.75.75 0 0 0 .61.61l.878.153a.75.75 0 0 1 0 1.478l-.877.152a.75.75 0 0 0-.61.61l-.153.878a.75.75 0 0 1-1.478 0l-.152-.877a.75.75 0 0 0-.61-.61l-.878-.153z"}),(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.164 12.287A8.74 8.74 0 0 1 8 9a8.74 8.74 0 0 1 6.836 3.287.75.75 0 0 1 .164.469v1.494a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75v-1.494a.75.75 0 0 1 .164-.469m1.336.74v.473h11v-.474A7.23 7.23 0 0 0 8 10.5c-2.2 0-4.17.978-5.5 2.526",clipRule:"evenodd"})]})}let o=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:s}));o.displayName="UserSparkleIcon";let l=o},239362:(e,t,a)=>{"use strict";a.d(t,{Bv:()=>p,L1:()=>c,Lw:()=>l,Wg:()=>u,qe:()=>m,qk:()=>f,yu:()=>d});var n=a(141078),r=a(831358),i=a(691515),s=a(543963);let o=(0,n.J1)`
  fragment RunDetailsSectionFragment on JobsRun {
    jobId
    runId
    numberInJob
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
    status @include(if: $includeRunStatus) {
      ...RunStatusFragment
    }
    runType
  }

  ${s.DP}
  ${s.WB}
`,l=(0,n.J1)`
  fragment JobRunTriggerInfo on JobsRunTriggerInfo {
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
    sqlCondition {
      conditionEvaluationSatisfied
      conditionEvaluationSqlSessionId
    }
  }
`,u=(0,n.J1)`
  fragment JobRunDetailsSectionFragment on JobsRun {
    ...RunDetailsSectionFragment
    trigger
    triggerInfo {
      ...JobRunTriggerInfo
    }
    runName
    effectivePerformanceTarget
    effectiveUsagePolicyId
  }

  ${l}
  ${o}
`,d=(0,n.J1)`
  fragment TaskRunDetailsSectionFragment on JobsRun {
    ...RunDetailsSectionFragment
    parentRunId
    taskKey
    creatorUserName
    creatorUser {
      ...RichUserData
    }
    creatorPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
      ...AclPrincipalData
    }
    forEachIndex
    jobRunId
  }

  ${o}
  ${r.j}
  ${r.E}
`,c=(0,n.J1)`
  fragment TaskTypeDetailsFragment on JobsJobTask {
    alertTask @includeSafex(name: "alertv2_job_task", defaultValue: false) {
      alertId
      warehouseId
      workspacePath
      subscribers {
        userName
        destinationId
      }
    }
    notebookTask {
      notebookPath
    }
    sparkJarTask {
      mainClassName
    }
    sparkPythonTask {
      pythonFile
    }
    sparkSubmitTask {
      parameters
    }
    shellCommandTask {
      command
    }
    pipelineTask {
      pipelineId
      parameters {
        fullRefresh
      }
    }
    cleanRoomNotebookTask {
      cleanRoomName
      notebookName
    }
    cleanRoomsNotebookTask {
      cleanRoomName
      notebookName
    }
    cleanRoomsJarTask {
      cleanRoomName
      jarAnalysisName
    }
    pythonWheelTask {
      entryPoint
      packageName
    }
    dbtTask {
      projectDirectory
      commands
      source
    }
    sqlTask {
      alert {
        alertId
      }
      dashboard {
        dashboardId
      }
      query {
        queryId
      }
      file {
        path
        source
      }
      parameters {
        key
        value
      }
    }
    runJobTask {
      jobId
    }
    conditionTask {
      left
      right
      op
      outcome
    }
    simulationTask {
      controlId
    }
    dashboardTask @includeSafex(name: "databricks.fe.lakeview.enableLakeviewSubscriptionsInJobs", defaultValue: false) {
      dashboardId
      warehouseId
      subscription {
        customSubject
        paused
        subscribers {
          destinationId
          userName
        }
      }
    }
    forEachTask {
      inputs
      concurrency
    }
    ...ForEachTaskStats
    powerBiTask @includeSafex(name: "power_bi_task", defaultValue: false) {
      powerBiModel {
        workspaceName
        modelName
      }
    }
  }

  ${i.d}
`,m=(0,n.J1)`
  fragment TaskTypeDetailsOverridingParametersFragment on JobsRunParameters {
    sqlParams {
      key
      value
    }
    dbtCommands
    sparkSubmitParams
    pipelineParams {
      fullRefresh
    }
  }
`,p=(0,n.J1)`
  fragment TaskGitSourceSnapshotFragment on JobsRunTask {
    gitSource {
      gitSnapshot {
        usedCommit
      }
    }
  }
`,f=(0,n.J1)`
  fragment RunJobParameter on JobsRunJobLevelParameters {
    name
    default
    value
  }
`},247930:(e,t,a)=>{"use strict";a.d(t,{Ab:()=>p,Ly:()=>d,V9:()=>c,vs:()=>m});var n=a(610435);a(692738);var r=a(342411),i=a(703140),s=a(993533);if(13057==a.j)var o=a(548387);let l={Pending:!0,Running:!0,"Waiting for retry":!1,Terminating:!0,Queued:!0,Succeeded:!1,"Succeeded with failures":!1,Terminated:!1,"Internal error":!1,Failed:!1,Skipped:!1,SkippedByCustomerCode:!1,Blocked:!1,Canceled:!1,Canceling:!1,"Upstream failed":!1,Excluded:!1,"Upstream canceled":!1,"Timed out":!1,Evicted:!1,"Upstream evicted":!1,"Maximum concurrent runs reached":!1,Disabled:!1},u={Pending:!0,Running:!0,"Waiting for retry":!0,Blocked:!0,Queued:!0,Terminating:!1,Succeeded:!1,"Succeeded with failures":!1,Terminated:!1,"Internal error":!1,Failed:!1,Skipped:!1,SkippedByCustomerCode:!1,Canceled:!1,Canceling:!1,"Upstream failed":!1,Excluded:!1,"Upstream canceled":!1,"Timed out":!1,Evicted:!1,"Upstream evicted":!1,"Maximum concurrent runs reached":!1,Disabled:!1};class d{static getCurrentTime(e){return e.wsClient.serverTime()}static getDuration({connection:e,active:t,startTime:a,durationMillis:n,runDurationMillis:r}){if(null!==r)return r;return t?(e?d.getCurrentTime(e):Date.now())-(a??0):n}static getDurationDescription(e,t,a,n,r,s,o,l){let u=d.getDuration({connection:e,active:t,startTime:a,durationMillis:n,runDurationMillis:r});if(l){if(s)return"-";u-=o??0}return u>=0?i.C.formatDuration(Math.ceil(u/1e3)):"-"}static formatRunTriggerString(e,t=s.gG_.JOB_RUN){if(t===s.gG_.SUBMIT_RUN)return f.trigger.byRunsSubmitAPI;if(t===s.gG_.WORKFLOW_RUN)return f.trigger.byNotebookWorkflow;if(!e)return null;if("PERIODIC"===e)return f.trigger.scheduler;if("RETRY"===e)return f.trigger.schedulerRetry;if("RUN_JOB_TASK"===e)return f.trigger.anotherJob;if("FILE_ARRIVAL"===e)return f.trigger.fileArrivalTrigger;if("CONTINUOUS"===e)return f.trigger.continuous;else if("TABLE"===e)return f.trigger.table;else if("MODEL"===e)return f.trigger.model;return f.trigger.manual}static formatPipelineUpdateCauseString(e){if(!e)return null;switch(e){case s.uI$.RETRY_ON_FAILURE:return(0,n.Y)(r.sA,{id:"I4GeS9",defaultMessage:"Retry on failure"});case s.uI$.API_CALL:return(0,n.Y)(r.sA,{id:"gn1KTj",defaultMessage:"By pipelines API"});case s.uI$.SCHEMA_EXPLORATION:return(0,n.Y)(r.sA,{id:"4krnWe",defaultMessage:"By schema exploration"});case s.uI$.SCHEMA_CHANGE:return(0,n.Y)(r.sA,{id:"x0jvqe",defaultMessage:"By schema change"});case s.uI$.USER_ACTION:return(0,n.Y)(r.sA,{id:"5DtLYo",defaultMessage:"Manually"});case s.uI$.DBSQL_REQUEST:return(0,n.Y)(r.sA,{id:"hEHnR7",defaultMessage:"By SQL request"});case s.uI$.START_RESOURCES:return(0,n.Y)(r.sA,{id:"epgcxe",defaultMessage:"Start resources"});case s.uI$.INFRASTRUCTURE_MAINTENANCE:return(0,n.Y)(r.sA,{id:"TKhUUb",defaultMessage:"By infrastructure maintenance"});case s.uI$.JOB_TASK:return(0,n.Y)(r.sA,{id:"U+qief",defaultMessage:"By job task"});case s.uI$.SETTINGS_CHANGE:return(0,n.Y)(r.sA,{id:"uwlXDF",defaultMessage:"Settings change"});case s.uI$.SERVICE_UPGRADE:return(0,n.Y)(r.sA,{id:"g/FGkc",defaultMessage:"By service upgrade"});default:return null}}static getFriendlyStatus(e){return({SkippedByCustomerCode:"Skipped",Cancelled:"Canceled",Cancelling:"Canceling"})[e]??e}static formatRunTerminationCategory(e){return e?"["+e+"] ":""}static correctRunStateMessage(e){let t={cancelled:"canceled"};for(let a in t)t.hasOwnProperty(a)&&(e=e.replaceAll(a,t[a]));return e.replace(/\.$/,"")}static isActiveStatus(e){return!0===l[e]}static isActiveStatusTyped(e){return!0===l[e]}static isCancellableStatus(e){return!0===u[e]}static isSkippedStatus(e){return["Skipped","SkippedByCustomerCode","Upstream failed","Upstream canceled","Excluded","Disabled"].includes(e)}static isRunAssociatedWithAJob(e){return![s.gG_.SUBMIT_RUN,s.gG_.WORKFLOW_RUN].includes(e??s.gG_.JOB_RUN)}}function c(e){let t={notebookParams:void 0,jarParams:void 0,pythonParams:void 0,sparkSubmitParams:void 0,pythonNamedParams:void 0,dbtCommands:void 0,sqlParams:void 0,pipelineParams:void 0};return e?.notebookParams&&e?.notebookParams.length>0&&(t.notebookParams=new Map,e.notebookParams.map(o.qt).forEach(e=>{t.notebookParams.set(e.key,e)})),e?.jarParams&&e?.jarParams.length>0&&(t.jarParams=e?.jarParams),e?.pythonParams&&e?.pythonParams.length>0&&(t.pythonParams=e?.pythonParams),e?.sparkSubmitParams&&e?.sparkSubmitParams?.length>0&&(t.sparkSubmitParams=e?.sparkSubmitParams),e?.pythonNamedParams&&e?.pythonNamedParams?.length>0&&(t.pythonNamedParams=new Map,e.pythonNamedParams.map(o.qt).forEach(e=>{t.pythonNamedParams.set(e.key,e)})),e?.dbtCommands&&e?.dbtCommands.length>0&&(t.dbtCommands=e?.dbtCommands),e?.pipelineParams&&(t.pipelineParams=(0,o.qt)(e?.pipelineParams??{})),e?.sqlParams&&e?.sqlParams.length>0&&(t.sqlParams=new Map,e?.sqlParams.map(o.qt).forEach(e=>{t.sqlParams.set(e.key,e)})),{...t,notebookParams:t?.notebookParams?[...t.notebookParams.values()]:void 0,pythonNamedParams:t?.pythonNamedParams?[...t.pythonNamedParams.values()]:void 0,sqlParams:t?.sqlParams?[...t?.sqlParams.values()]:void 0}}function m(e,t){if(t&&t.length>0)return t.map(e=>`${e.name}: ${e.value??e.default}`).sort().join(", ");let a=[];if(e?.notebookParams&&e?.notebookParams.length>0){let t=e?.notebookParams.map(e=>e.key+": "+e.value);a.push(t.join(", "))}if(e?.jarParams&&e?.jarParams.length>0&&a.push(JSON.stringify(e?.jarParams)),e?.pythonParams&&e?.pythonParams.length>0&&a.push(JSON.stringify(e?.pythonParams)),e?.sparkSubmitParams&&e?.sparkSubmitParams?.length>0&&a.push(JSON.stringify(e?.sparkSubmitParams)),e?.pythonNamedParams&&e?.pythonNamedParams?.length>0){let t=e?.pythonNamedParams.map(e=>e.key+": "+e.value);a.push(t.join(", "))}if(e?.dbtCommands&&e?.dbtCommands.length>0&&a.push(JSON.stringify(e?.dbtCommands)),e?.pipelineParams&&a.push((0,n.Y)(r.sA,{id:"SsVQMX",defaultMessage:"Full refresh"})+": "+e?.pipelineParams.fullRefresh),e?.sqlParams&&e?.sqlParams.length>0){let t=e?.sqlParams.map(e=>e.key+": "+e.value);a.push(t.join(", "))}return a.join("; ")}function p(e){var t;if(!e)return[];let a=e.runOutput;return[{error:a?.error??void 0,error_trace:a?.commonNotebookOutput?.errorTrace??void 0,info:a?.info??void 0,logs:a?.commonNotebookOutput?.logs??void 0,logs_truncated:a?.commonNotebookOutput?.logsTruncated??void 0,notebook_output:a?.notebookOutput?{}:void 0,sql_output:a?.sqlOutput?{...(t=a?.sqlOutput).queryOutput&&{query_output:{...t.queryOutput?.queryText&&{query_text:t.queryOutput?.queryText},...t.queryOutput?.outputLink&&{output_link:t.queryOutput?.outputLink},...t.queryOutput?.warehouseId&&{warehouse_id:t.queryOutput?.warehouseId},...t.queryOutput?.sqlStatements&&{sql_statements:t.queryOutput?.sqlStatements?.map(e=>({lookup_key:e.lookupKey??void 0}))}}},...t.fileOutput&&{file_output:{...t.fileOutput?.queryText&&{query_text:t.fileOutput?.queryText},...t.fileOutput?.warehouseId&&{warehouse_id:t.fileOutput?.warehouseId},...t.fileOutput?.sqlStatements&&{sql_statements:t.fileOutput?.sqlStatements?.map(e=>({lookup_key:e.lookupKey??void 0}))},...t.fileOutput?.queryResult&&{query_result:{columns:t.fileOutput?.queryResult?.columns?.map(e=>({name:e.name??void 0,type:e.type??void 0})),rows:t.fileOutput?.queryResult?.rows?.map(e=>({values:e?.values?.map(e=>({string_value:e.stringValue??void 0}))}))}}}},...t.alertOutput&&{alert_output:{...t.alertOutput?.queryText&&{query_text:t.alertOutput?.queryText},...t.alertOutput?.outputLink&&{output_link:t.alertOutput?.outputLink},...t.alertOutput?.warehouseId&&{warehouse_id:t.alertOutput?.warehouseId},...t.alertOutput?.alertState&&{alert_state:t.alertOutput?.alertState},...t.alertOutput?.sqlStatements&&{sql_statements:t.alertOutput?.sqlStatements?.map(e=>({lookup_key:e.lookupKey??void 0}))}}},...t.dashboardOutput&&{dashboard_output:{widgets:t.dashboardOutput?.widgets?.map(e=>({widget_id:e.widgetId??"",widget_title:e.widgetTitle??"",start_time:Number(e.startTime),end_time:Number(e.endTime),status:e.status,...e.error&&{error:{message:e.error.message??""}}}))}}}:void 0,pipeline_output:a?.pipelineOutput?{pipeline_id:a?.pipelineOutput?.pipelineRequestId??"",pipeline_update_id:a?.pipelineOutput?.pipelineUpdateId??""}:void 0,run_job_output:a?.runJobOutput?.runId?{run_id:Number(a.runJobOutput.runId)}:void 0,dbt_output:a?.dbtOutput?{artifacts_link:a?.dbtOutput?.artifactsLink??""}:void 0,dbt_platform_output:a?.dbtPlatformOutput?{dbt_platform_job_run_url:a?.dbtPlatformOutput?.dbtPlatformJobRunUrl??""}:void 0,spark_jar_output:a?.sparkJarOutput?{stdout:a?.sparkJarOutput?.stdout??void 0,stderr:a?.sparkJarOutput?.stderr??void 0}:void 0,condition_output:a?.conditionOutput?{__typename:"JobsConditionTask",left:a?.conditionOutput?.left??null,right:a?.conditionOutput?.right??null,op:a?.conditionOutput?.op??null,outcome:a?.conditionOutput?.outcome??null}:void 0}]}let f={trigger:{anotherJob:(0,n.Y)(r.sA,{id:"qg1x0k",defaultMessage:"By another job"}),scheduler:(0,n.Y)(r.sA,{id:"e57LVD",defaultMessage:"By scheduler"}),schedulerRetry:(0,n.Y)(r.sA,{id:"XY5r/h",defaultMessage:"By retry scheduler"}),manual:(0,n.Y)(r.sA,{id:"pBUrLU",defaultMessage:"Manually"}),byRunsSubmitAPI:(0,n.Y)(r.sA,{id:"G30cQM",defaultMessage:"By runs submit API"}),byNotebookWorkflow:(0,n.Y)(r.sA,{id:"bPCUpP",defaultMessage:"By notebook workflow"}),continuous:(0,n.Y)(r.sA,{id:"CRXUfy",defaultMessage:"Continuously"}),fileArrivalTrigger:(0,n.Y)(r.sA,{id:"2W2nXn",defaultMessage:"By file arrival"}),table:(0,n.Y)(r.sA,{id:"/GhlfS",defaultMessage:"By table update"}),model:(0,n.Y)(r.sA,{id:"IkN9VL",defaultMessage:"By model update"})}}},257476:(e,t,a)=>{"use strict";a.d(t,{M:()=>d});var n=a(610435);a(692738);var r=a(497895),i=a(81659),s=a(810152),o=a(342411),l=a(205048);let u=(0,o.zR)({id:"7M1pmp",defaultMessage:"Loading..."});function d({description:e}){let{theme:t}=(0,r.wn)();return(0,n.FD)("div",{"data-testid":"PageBlockingSkeleton",css:{margin:t.spacing.lg},children:[(0,n.Y)(l.R,{loading:!0,description:e}),(0,n.Y)(i.o,{label:(0,n.Y)(o.sA,{...u}),style:{width:289}}),[...[,,,].keys()].map(e=>(0,n.Y)(s.I,{label:(0,n.Y)(o.sA,{...u}),seed:`s-${e}`},e))]})}},274269:(e,t,a)=>{"use strict";a.d(t,{F:()=>r});var n=a(692738);function r(e=!1,t){let{onOpen:a,onClose:i}=t||{},[s,o]=(0,n.useState)(e),l=(0,n.useCallback)(()=>{o(e=>{if(!e)return a?.(),!0;return e})},[a]),u=(0,n.useCallback)(()=>{o(e=>{if(e)return i?.(),!1;return e})},[i]),d=(0,n.useCallback)(()=>{s?u():l()},[u,l,s]);return[s,{open:l,close:u,toggle:d}]}},285376:(e,t,a)=>{"use strict";if(a.d(t,{J:()=>r}),13057==a.j)var n=a(441535);let r=()=>(0,n.W)("databricks.fe.jaws.enableJobsMatrixViewLatestTasksOnly",!0)},287393:(e,t,a)=>{"use strict";a.d(t,{JB:()=>o,aZ:()=>u,fg:()=>l});var n=a(141078),r=a(831358),i=a(659789);let s=(0,n.J1)`
  fragment ResetRunAsJob on Job {
    id
    runAsUserName
    runAsOwner
    runAsUser {
      ...RichUserData
    }
    runAsPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
      ...AclPrincipalData
    }
    effectiveUsagePolicyId
      @includeSafex(name: "databricks.elasticspark.budgetpolicies.enableUsagePoliciesInJobs", defaultValue: false)
    settings {
      name
      usagePolicyId
      tasks {
        taskKey
      }
      gitSource {
        gitProvider
      }
    }
    creator {
      name
    }
  }

  ${r.j}
  ${r.E}
`,o=(0,n.J1)`
  mutation JobResetRunAsAutogen($input: JobsUpdateJobInput!) @component(name: "Workflows.Orchestration.Other") {
    updateAndGetJob(input: $input) {
      apiError {
        ...ApiErrorFields
      }
      job {
        ...ResetRunAsJob
      }
    }
  }
  ${i.n}
  ${s}
`,l=(0,n.J1)`
  fragment JobConfigRunAs on Job {
    id
    runAsUserName
    runAsUser {
      ...RichUserData
    }
    runAsPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
      ...AclPrincipalData
    }
    runAsOwner
    effectiveUsagePolicyId
      @includeSafex(name: "databricks.elasticspark.budgetpolicies.enableUsagePoliciesInJobs", defaultValue: false)
    settings {
      name
      usagePolicyId
      tasks {
        taskKey
      }
      gitSource {
        gitProvider
      }
    }
    creator {
      name
    }
  }
  ${r.j}
  ${r.E}
`,u=(0,n.J1)`
  fragment JobDescription on JobSettings {
    description
  }
`},292436:(e,t,a)=>{"use strict";a.d(t,{Y:()=>r});var n=a(441535);function r(){if((0,n.W)("excl_data_access",!1))return!0;return(0,n.W)("databricks.fe.wexp.enableRoleSwitcherInWorkspaceSelector",!1)}},319683:(e,t,a)=>{"use strict";a.d(t,{$:()=>i,_:()=>r});var n=a(5697);let r=e=>[n.Z6.Folder,n.Z6.Project,n.Z6.Root].some(t=>t===e),i=(e,t)=>t.some(t=>{if(r(e))return t===n.Z6.Folder;return t===e})},329061:(e,t,a)=>{"use strict";a.d(t,{$:()=>r,o:()=>o});var n=a(956935);let r=(0,n.AH)("background:linear-gradient(\n    137deg,rgba(238,86,118,0.16) 26.3%,rgba(202,66,224,0.16) 55.61%,rgba(66,153,224,0.16) 81.9%\n  ) !important;"),i=(0,n.AH)("&:hover{",r,"    transition:background ",.3,"s linear;}"),s=(0,n.AH)(r,"  &:hover{",r,"    transition:background ",.3,"s linear;}"),o=e=>{if(e)return s;return i}},330842:(e,t,a)=>{"use strict";a.d(t,{Te:()=>D,wE:()=>N,Ay:()=>M});var n=a(610435),r=a(956935),i=a(692738),s=a(553662),o=a(497895),l=a(68925),u=a(513378),d=a(802627),c=a(375214);function m(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("path",{fill:"currentColor",d:"M2.371 3.853a.75.75 0 0 1 .745-.007l6.25 3.5a.75.75 0 0 1 0 1.308l-6.25 3.5A.75.75 0 0 1 2 11.5v-7l.007-.099a.75.75 0 0 1 .364-.548"}),(0,n.Y)("path",{fill:"currentColor",d:"M14.636 7.357a.75.75 0 0 1 0 1.287l-5.833 3.5-.772-1.287L12.792 8 7.864 5.044l.772-1.287z"})]})}let p=(0,i.forwardRef)((e,t)=>(0,n.Y)(c.I,{ref:t,...e,component:m}));p.displayName="PlayDoubleIcon";var f=a(742557),g=a(21255),b=a(833218),y=a(623749),h=a(191283),S=a(79570),T=a(342411),v=a(247930),I=a(27148),E=a(942170);let A=({stableStatus:e,...t})=>(0,n.Y)(s.A,{color:"success",...t}),k=(e,t)=>a=>{let{theme:r}=(0,o.wn)(),{color:i,...s}=t||{};return(0,n.Y)(e,{...i?{color:i}:{css:{color:`${r.colors.textSecondary} !important`}},...s,...a})},R={"Internal error":k(l.A,{color:"danger"}),Running:k(u.A,{spin:!0,color:"success"}),Failed:k(l.A,{color:"danger"}),Pending:k(d.A),Skipped:k(p),SkippedByCustomerCode:k(p),Succeeded:k(f.A,{color:"success"}),"Succeeded with failures":k(s.A,{color:"success"}),Terminated:k(g.A),Terminating:k(f.A,{color:"success"}),Blocked:k(b.A),"Timed out":({stableStatus:e,...t})=>(0,n.Y)("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNTAwMTEgMi4yNUgxMC41MDAxQzEwLjkxMjYgMi4yNSAxMS4yNTAxIDEuOTEyNSAxMS4yNTAxIDEuNUMxMS4yNTAxIDEuMDg3NSAxMC45MTI2IDAuNzUgMTAuNTAwMSAwLjc1SDcuNTAwMTFDNy4wODc2MSAwLjc1IDYuNzUwMTEgMS4wODc1IDYuNzUwMTEgMS41QzYuNzUwMTEgMS45MTI1IDcuMDg3NjEgMi4yNSA3LjUwMDExIDIuMjVaTTkuMDAwMTEgNkM4LjYxNzYxIDYgOC4zMTAxMSA2LjI5MjUgOC4yNjUxMSA2LjY2NzVMOS43NTAxMSA4LjE0NVY2Ljc1QzkuNzUwMTEgNi4zMzc1IDkuNDEyNjEgNiA5LjAwMDExIDZaTTkuMDAwMTEgNC41QzExLjkwMjYgNC41IDE0LjI1MDEgNi44NDc1IDE0LjI1MDEgOS43NUMxNC4yNTAxIDEwLjU5IDE0LjA0NzYgMTEuMzg1IDEzLjY5NTEgMTIuMDlMMTQuNzk3NiAxMy4xOTI1QzE1LjM5NzYgMTIuMTg3NSAxNS43NTAxIDExLjAxIDE1Ljc1MDEgOS43NUMxNS43NTAxIDguMTYgMTUuMTk1MSA2LjY5NzUgMTQuMjcyNiA1LjU0MjVMMTQuODM1MSA0Ljk4QzE1LjEyMDEgNC42OTUgMTUuMTI3NiA0LjIyMjUgMTQuODM1MSAzLjkzTDE0LjgyNzYgMy45MjI1QzE0LjUzNTEgMy42MyAxNC4wNzAxIDMuNjM3NSAxMy43Nzc2IDMuOTIyNUwxMy4yMTUxIDQuNDg1QzEyLjA1MjYgMy41NTUgMTAuNTkwMSAzIDkuMDAwMTEgM0M3Ljc1NTExIDMgNi41ODUxMSAzLjM2IDUuNTcyNjEgMy45Njc1TDYuNjYwMTEgNS4wNTVDNy4zNjUxMSA0LjcwMjUgOC4xNjAxMSA0LjUgOS4wMDAxMSA0LjVaTTE1LjE0MjYgMTUuNjZMMi45MDI2MSAzLjQyQzIuNjEwMTEgMy4xMjc1IDIuMTM3NjEgMy4xMjc1IDEuODQ1MTEgMy40MkMxLjU1MjYxIDMuNzEyNSAxLjU1MjYxIDQuMTg1IDEuODQ1MTEgNC40Nzc1TDMuMzk3NjEgNi4wM0MyLjcwNzYxIDcuMDY1IDIuMjg3NjEgOC4yNzI1IDIuMjUwMTEgOS41N0MyLjE1MjYxIDEzLjM4IDUuMjA1MTEgMTYuNSA5LjAwMDExIDE2LjVDMTAuMzgwMSAxNi41IDExLjY2MjYgMTYuMDg3NSAxMi43MzUxIDE1LjM3NUwxNC4wNzc2IDE2LjcxNzVDMTQuMzcwMSAxNy4wMSAxNC44NDI2IDE3LjAxIDE1LjEzNTEgMTYuNzE3NUMxNS40MzUxIDE2LjQyNSAxNS40MzUxIDE1Ljk1MjUgMTUuMTQyNiAxNS42NlpNOS4wMDAxMSAxNUM2LjA5NzYxIDE1IDMuNzUwMTEgMTIuNjUyNSAzLjc1MDExIDkuNzVDMy43NTAxMSA4Ljc4MjUgNC4wMTI2MSA3Ljg4MjUgNC40NzAxMSA3LjExTDExLjY0NzYgMTQuMjg3NUMxMC44Njc2IDE0LjczNzUgOS45Njc2MSAxNSA5LjAwMDExIDE1WiIgZmlsbD0iIzY0NzI3RCIvPgo8L3N2Zz4K",css:{..."Running"===e?{animation:`${C} 1.5s linear infinite`}:{}},...t}),Canceled:k(y.A),Canceling:k(y.A),"Waiting for retry":k(h.A),"Upstream failed":k(p),Excluded:k(p),"Upstream canceled":k(p),Queued:k(h.A),Evicted:k(p),"Upstream evicted":k(p),"Maximum concurrent runs reached":k(p),Disabled:k(b.A)},C=(0,r.i7)("from{transform:rotate(0deg);}to{transform:rotate(359deg);}");function D({stableStatus:e,isLastRunColumn:t=!1,...a}){let r=(0,i.useMemo)(()=>t||"Succeeded with failures"!==e?R[e]:A,[e,t]);return(0,n.Y)(r,{"aria-hidden":!0,...a,stableStatus:e})}function N({state:e,terminationCode:t,children:a}){let r=(0,T.tz)(),s=(0,I.hE)(e,r),o=(0,i.useMemo)(()=>(0,I.Io)(e),[e]),l=e?.stateMessage?v.Ly.correctRunStateMessage(e.stateMessage):null,u=(0,E.xI)(t),d=l?u?`[${u}] ${l}`:l:null;return(0,n.Y)(n.FK,{children:d?(0,n.Y)(S.m,{content:d,componentId:"jobs.run-state-icon-tooltip",children:(0,n.FD)("div",{css:{display:"flex",alignItems:"center",gap:4},children:[(0,n.Y)(D,{"data-testid":"job-run-state-icon",stableStatus:o,css:{verticalAlign:"middle"},alt:s}),(0,n.Y)("span",{children:a})]})}):(0,n.FD)("div",{css:{display:"flex",alignItems:"center",gap:4},children:[(0,n.Y)(D,{"data-testid":"job-run-state-icon",stableStatus:o,css:{verticalAlign:"middle"},alt:s}),(0,n.Y)("span",{children:a})]})})}let M=13057==a.j?R:null},331379:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});let n=(0,a(692738).createContext)({})},351318:(e,t,a)=>{"use strict";let n;a.d(t,{W:()=>d});var r=a(610435),i=a(956935),s=a(421203),o=a(429608),l=a(497895),u=a(123252);let d=((n=({dangerouslySetAntdProps:e,...t})=>(0,r.Y)(o.wC,{children:(0,r.Y)(s.A,{...(0,u.VG)(),...t,...e})})).Item=s.A.Item,n.ItemGroup=s.A.ItemGroup,n.SubMenu=function({dangerouslySetAntdProps:e,...t}){let{theme:a}=(0,l.wn)();return(0,r.Y)(i.Z2,{children:({css:n})=>(0,r.Y)(s.A.SubMenu,{...(0,u.VG)(),popupClassName:n({zIndex:a.options.zIndexBase+50}),popupOffset:[-6,-10],...t,...e})})},n)},351532:(e,t,a)=>{"use strict";a.d(t,{Uh:()=>o,tV:()=>s,w_:()=>l,xr:()=>i});var n=a(141078),r=a(367313);function i(e={}){return(0,n.IT)(r.fP,{fetchPolicy:"cache-and-network",...e})}function s(e={}){return(0,n.IT)(r.UK,{fetchPolicy:"cache-and-network",errorPolicy:"all",...e})}function o(e={}){return(0,n.IT)(r.Uk,{fetchPolicy:"cache-and-network",errorPolicy:"all",...e})}function l(e={}){return(0,n.IT)(r.ix,{fetchPolicy:"cache-and-network",errorPolicy:"all",...e})}},357548:(e,t,a)=>{"use strict";a.d(t,{A:()=>i,Su:()=>s,eJ:()=>o});var n=a(342411),r=a(641760);let i=(0,n.zR)({id:"cWOjzx",defaultMessage:"My Data"}),s=(0,n.zR)({id:"wfEfNF",defaultMessage:"My Files"});function o(e,t,a,n){if((0,r.Sg)(t,a,n))return e.formatMessage(s)}},366795:(e,t,a)=>{"use strict";function n(e,t,a){if(null==t||"string"!=typeof t)return a;for(let a in e)if(e[a]===t)return e[a];return a}a.d(t,{S:()=>n})},367295:(e,t,a)=>{"use strict";a.d(t,{L:()=>s});var n=a(371303),r=a(726583),i=a(924876);function s(){return{includeSubscriptions:(0,n.sT)("databricks.fe.jaws.enableDashboardSubscriptionsUi",!1),includeJobInRunJobTask:!0,includeJobParameters:(0,r.ue)(),includeTaskDependencyOutcome:!0,includeTriggerState:!0,includePeriodicTrigger:!0,includeOnStreamingBacklogExceeded:(0,i.cG)(),includeSourceInDbtAndSqlFile:!0}}},382001:(e,t,a)=>{"use strict";a.d(t,{Ay:()=>d,ye:()=>i});var n=a(513384),r=a(657709),i=["xxl","xl","lg","md","sm","xs"],s={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},o=new Map,l=-1,u={};let d={matchHandlers:{},dispatch:function(e){return u=e,o.forEach(function(e){return e(u)}),o.size>=1},subscribe:function(e){return o.size||this.register(),l+=1,o.set(l,e),e(u),l},unsubscribe:function(e){o.delete(e),o.size||this.unregister()},unregister:function(){var e=this;Object.keys(s).forEach(function(t){var a=s[t],n=e.matchHandlers[a];null==n||n.mql.removeListener(null==n?void 0:n.listener)}),o.clear()},register:function(){var e=this;Object.keys(s).forEach(function(t){var a=s[t],i=function(a){var i=a.matches;e.dispatch((0,r.A)((0,r.A)({},u),(0,n.A)({},t,i)))},o=window.matchMedia(a);o.addListener(i),e.matchHandlers[a]={mql:o,listener:i},i(o)})}}},396063:(e,t,a)=>{"use strict";a.d(t,{S:()=>o});var n=a(595615),r=a(302118),i=a(641760);function s(e,t,a,n,r,i,s){try{var o=e[i](s),l=o.value}catch(e){a(e);return}o.done?t(l):Promise.resolve(l).then(n,r)}function o(e){return(0,n.AO)({queryKey:["get_default_catalog_query"],queryFn:function(){var e;return(e=function*(){let e=yield r.k.getCurrentMetastoreAssignment();return e?.default_catalog_name||""},function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){s(i,n,r,o,l,"next",e)}function l(e){s(i,n,r,o,l,"throw",e)}o(void 0)})})()},refetchOnWindowFocus:!1,enabled:(0,i.ei)(),...e})}},401600:(e,t,a)=>{"use strict";a.d(t,{j:()=>m});var n=a(610435),r=a(692738),i=a(342411),s=a(395711),o=a(993533),l=a(550487),u=a(351532),d=a(171016);function c(e,t){let{data:a,previousData:n,error:i,loading:s}=(0,u.Uh)({skip:!t,variables:{limit:25,permissions:(0,d.eF)(l.bv.ACCESSIBLE_BY_ME),sortBy:o.S4R.CREATION_DATE,sortOrder:o.DKo.ASC,jobNameOrId:e},fetchPolicy:"network-only"});return{items:(0,r.useMemo)(()=>{let e=(a??n)?.jobsListJobs?.jobs;if(!e)return[];return e.filter(e=>null!==e.jobId).map(e=>({id:e.jobId?.toString(),name:e.settings?.name||""}))},[a,n]),loading:s,error:i}}let m=({id:e,value:t,setValue:a})=>{let r=(0,i.tz)();return(0,n.Y)(s.O,{id:e,value:t,setValue:a,componentId:"dabs-authoring.select-job-combobox",placeholder:r.formatMessage({id:"/Vyeg1",defaultMessage:"Select job"}),errorMessage:(0,i.zR)({id:"2BSCmf",defaultMessage:"Error fetching jobs: {error}"}),useResourceData:c})}},429978:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});let n=["Succeeded","Succeeded with failures","Pending","Running","Terminating","Terminated","Internal error","Failed","Skipped","SkippedByCustomerCode","Blocked","Timed out","Canceled","Canceling","Waiting for retry","Upstream failed","Excluded","Upstream canceled","Queued","Evicted","Upstream evicted","Maximum concurrent runs reached","Disabled"]},449669:(e,t,a)=>{"use strict";a.d(t,{I:()=>o});var n=a(610435);a(692738);var r=a(876726),i=a(140078),s=a(342411);function o(){let e=(0,s.tz)();return(0,n.Y)(r.S,{title:e.formatMessage(l.title),description:e.formatMessage(l.description),image:(0,n.Y)(i.A,{})})}let l=(0,s.YK)({title:{id:"UeUmAD",defaultMessage:"Error"},description:{id:"BCf2+O",defaultMessage:"An unexpected error has occurred. Please wait a bit and refresh the page or contact support."}})},470109:function(e,t,a){var n=a(173564);(function(){var t,a,r,i;"u">typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=n&&n.hrtime?(e.exports=function(){return(t()-i)/1e6},a=n.hrtime,i=(t=function(){var e;return 1e9*(e=a())[0]+e[1]})()-1e9*n.uptime()):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return new Date().getTime()-r},r=new Date().getTime())}).call(this)},471186:(e,t,a)=>{"use strict";a.d(t,{x:()=>n});let n=a(126001).A},471236:(e,t,a)=>{"use strict";a.d(t,{BC:()=>p,J8:()=>m,Oi:()=>u,Ps:()=>c,S_:()=>l,e5:()=>d,q5:()=>o});var n=a(610435),r=a(342411),i=a(483588),s=a(441535);let o=(0,r.zR)({id:"LQom4G",defaultMessage:"The selected budget policy has exceeded the budget limit."});function l(e){return e?.currentLimitEnforcementActivation?.state===i.dt3.STATE_ACTIVATED}(0,r.zR)({id:"nEtQxT",defaultMessage:"Unknown"});let u=(0,r.zR)({id:"Mrl67e",defaultMessage:"Default policy"}),d=(0,r.zR)({id:"5VcR5f",defaultMessage:"Unrestricted policy"});function c(e){return(0,s.W)("databricks.fe.budget_policy.renameServerlessPolicy",!1)?e.formatMessage({id:"osrxfh",defaultMessage:"Serverless usage policy"}):e.formatMessage({id:"MqrIs4",defaultMessage:"Serverless budget policy"})}function m(e,t,a,n){if(t)return;if(a)return e.formatMessage({id:"wZxcdf",defaultMessage:"Unable to load budget policy"});if(n?.apiError?.code==="NOT_FOUND"||n?.apiError?.code==="PERMISSION_DENIED")return e.formatMessage({id:"wy2qii",defaultMessage:"The existing budget policy is not found or cannot be accessed"});if(n?.apiError?.code==="DEADLINE_EXCEEDED"||n?.apiError?.code==="TEMPORARY_UNAVAILABLE")return e.formatMessage({id:"78gnl+",defaultMessage:"Temporarily unable to load budget policy"})}function p(e,t){if(t)switch(e){case i.XRW.RATE_LIMIT_CONFIG_SMALL:return(0,n.Y)(r.sA,{id:"KJN9Dw",defaultMessage:"S"});case i.XRW.RATE_LIMIT_CONFIG_MEDIUM:return(0,n.Y)(r.sA,{id:"frAwhr",defaultMessage:"M"});case i.XRW.RATE_LIMIT_CONFIG_LARGE:return(0,n.Y)(r.sA,{id:"XNqoXQ",defaultMessage:"L"});case i.XRW.RATE_LIMIT_CONFIG_XLARGE:return(0,n.Y)(r.sA,{id:"E8vV1K",defaultMessage:"XL"});case i.XRW.RATE_LIMIT_CONFIG_XXLARGE:return(0,n.Y)(r.sA,{id:"6stnzj",defaultMessage:"XXL"});case i.XRW.RATE_LIMIT_CONFIG_UNSPECIFIED:default:return}switch(e){case i.XRW.RATE_LIMIT_CONFIG_SMALL:return(0,n.Y)(r.sA,{id:"0Qej58",defaultMessage:"Small"});case i.XRW.RATE_LIMIT_CONFIG_MEDIUM:return(0,n.Y)(r.sA,{id:"GkJl7c",defaultMessage:"Medium"});case i.XRW.RATE_LIMIT_CONFIG_LARGE:return(0,n.Y)(r.sA,{id:"PycVbu",defaultMessage:"Large"});case i.XRW.RATE_LIMIT_CONFIG_XLARGE:return(0,n.Y)(r.sA,{id:"o2xFgP",defaultMessage:"X-Large"});case i.XRW.RATE_LIMIT_CONFIG_XXLARGE:return(0,n.Y)(r.sA,{id:"X6/nCe",defaultMessage:"XX-Large"});case i.XRW.RATE_LIMIT_CONFIG_UNSPECIFIED:default:return}}},505566:(e,t,a)=>{"use strict";a.d(t,{h:()=>l,p:()=>o});var n=a(610435),r=a(692738),i=a(127833);let s=r.createContext(void 0),o=({children:e})=>{let[t,a]=(0,i.rv)();return(0,n.FD)(s.Provider,{value:{notificationAPI:t},children:[e,a]})},l=()=>{let e=r.useContext(s);if(!e)throw Error("useNotification() hook may only be used within <NotificationProvider>. This is an internal filebrowser component, not a Du Bois component.");return e.notificationAPI}},518117:(e,t,a)=>{"use strict";a.d(t,{x:()=>s});var n=a(692738),r=a(203796),i=a(394244);function s({drawerKey:e}){let[t,a]=(0,r.n)((0,i.VL)(e)),[o,l]=(0,r.n)((0,i.ur)());return{isOpen:t,subId:o,openIngestionDrawer:(0,n.useCallback)(e=>{a(!0),l(e)},[a,l])}}},524191:(e,t,a)=>{"use strict";a.d(t,{j:()=>c});var n=a(610435);a(692738);var r=a(497895),i=a(79128),s=a(538160),o=a(687828),l=a(161330),u=a(342411),d=a(411695);function c({loading:e,disabled:t,onClickCreateWithoutDeployment:a,componentId:m,form:p,hideCreateWithoutDeploymentOption:f}){let{theme:g}=(0,r.wn)(),b=m||"dabs-authoring.create-resource-definition-form.create-button",y={css:{marginLeft:g.spacing.sm},componentId:b,loading:e,disabled:t,type:"primary",htmlType:"submit",form:p};if(!(0,d.ER)())return(0,n.Y)(i.$n,{...y,children:(0,n.Y)(u.sA,{id:"/aCCsS",defaultMessage:"Add"})});let h=(0,n.Y)(u.sA,{id:"0s+E1k",defaultMessage:"Add and deploy"});if(f)return(0,n.Y)(i.$n,{...y,children:h});return(0,n.Y)(s.f,{...y,menu:(0,n.Y)(o.Content,{align:"end",children:(0,n.FD)(o.Item,{componentId:`${b}.create-without-deployment`,onClick:a,children:[(0,n.Y)(u.sA,{id:"KN2c63",defaultMessage:"Only add, deploy later"}),(0,n.Y)("span",{css:{marginLeft:g.spacing.xs},children:(0,n.Y)(l.I,{componentId:`${b}.create-without-deployment-tooltip`,content:(0,n.Y)(u.sA,{id:"TCpx8I",defaultMessage:"Add resource without deploying it to the workspace"})})})]})}),children:h})}},538160:(e,t,a)=>{"use strict";a.d(t,{f:()=>k});var n=a(610435),r=a(956935),i=a(91958),s=a.n(i),o=a(692738),l=a(600295),u=a(464953),d=a(660488),c=a(783772),m=a.n(c),p=a(79128),f=a(687828),g=a(227195),b=a(497895),y=a(943844);let h=u.A.Group,S=e=>{let{theme:t}=(0,b.wn)(),{getPopupContainer:a,getPrefixCls:r}=(0,g.G)(),{type:i,danger:s,disabled:u,loading:c,onClick:S,htmlType:T,children:v,className:I,overlay:E,trigger:A,align:k,open:R,onOpenChange:C,placement:D,getPopupContainer:N,href:M,icon:P=(0,n.Y)(l.A,{}),title:w,buttonsRender:_=e=>e,mouseEnterDelay:x,mouseLeaveDelay:O,overlayClassName:L,overlayStyle:$,destroyPopupOnHide:F,menuButtonLabel:U="Open dropdown",menu:j,leftButtonIcon:J,dropdownMenuRootProps:Y,"aria-label":B,componentId:q,analyticsEvents:W,form:z,...V}=e,G=r("dropdown-button"),Q={align:k,overlay:E,disabled:u,trigger:u?[]:A,onOpenChange:C,getPopupContainer:N||a,mouseEnterDelay:x,mouseLeaveDelay:O,overlayClassName:L,overlayStyle:$,destroyPopupOnHide:F};"open"in e&&(Q.open=R),"placement"in e?Q.placement=D:Q.placement="bottomRight";let[K,H]=_([(0,n.FD)(p.$n,{componentId:q?`${q}.primary_button`:"codegen_design-system_src_design-system_splitbutton_dropdown_dropdownbutton.tsx_148",type:i,form:z,danger:s,disabled:u,loading:c,onClick:S,htmlType:T,href:M,title:w,icon:v&&J?J:void 0,"aria-label":B,size:e.size,css:{borderTopRightRadius:"0 !important",borderBottomRightRadius:"0 !important"},children:[J&&!v?J:void 0,v]}),(0,n.Y)(p.$n,{componentId:q?`${q}.dropdown_button`:"codegen_design-system_src_design-system_splitbutton_dropdown_dropdownbutton.tsx_166",type:i,danger:s,disabled:u,"aria-label":U,size:e.size,css:{borderTopLeftRadius:"0 !important",borderBottomLeftRadius:"0 !important",..."small"===e.size?{"&&&":{paddingLeft:`${t.spacing.xs}px !important`,paddingRight:`${t.spacing.xs}px !important`,width:"24px !important"}}:{}},children:P||(0,n.Y)(y.A,{})})]);return(0,n.FD)(h,{...V,className:m()(G,I),children:[K,void 0!==E?(0,n.Y)(d.A,{...Q,overlay:E,children:H}):(0,n.FD)(f.Root,{...Y,itemHtmlType:"submit"===T?"submit":void 0,children:[(0,n.Y)(f.Trigger,{disabled:u,asChild:!0,children:H}),j&&o.cloneElement(j,{align:j.props.align||"end"})]})]})};var T=a(817262),v=a(429608),I=a(639712);let E={display:"inline-flex",position:"relative",verticalAlign:"middle"},A=s()(function(e,t,a){let n=`.${e}-btn`,i=`.${e}-btn-primary`,s=`.${e}-dropdown-trigger`,o=`.${e}-btn-group-sm`,l={[n]:{...(0,T.o8)(t),boxShadow:t.shadows.xs,height:"small"===a?t.general.iconSize:t.general.heightSm,padding:"4px 12px","&:focus-visible":{outlineStyle:"solid",outlineWidth:"2px",outlineOffset:"-2px",outlineColor:t.colors.actionDefaultBorderFocus},".anticon, &:focus-visible .anticon":{color:t.colors.textSecondary},"&:hover .anticon":{color:t.colors.actionDefaultIconHover},"&:active .anticon":{color:t.colors.actionDefaultIconPress}},[`${n}:first-of-type`]:{borderTopRightRadius:"0px !important",borderBottomRightRadius:"0px !important"},[i]:{...(0,T.p_)(t),boxShadow:t.shadows.xs,"&:first-of-type":{borderRight:`1px solid ${t.colors.actionPrimaryTextDefault}`,marginRight:1},[s]:{borderLeft:`1px solid ${t.colors.actionPrimaryTextDefault}`},"&:focus-visible":{outlineStyle:"solid",outlineWidth:"1px",outlineOffset:"-3px",outlineColor:t.colors.white},".anticon, &:hover .anticon, &:active .anticon, &:focus-visible .anticon":{color:t.colors.actionPrimaryIcon}},[s]:{padding:3,borderLeftColor:"transparent",width:t.general.heightSm},[`&${o}`]:{[s]:{padding:5}},"&&":{[`[disabled], ${i}[disabled]`]:{...(0,T.J5)(t),boxShadow:"none","&:first-of-type":{borderRight:`1px solid ${t.colors.actionPrimaryIcon}`,marginRight:1},[s]:{borderLeft:`1px solid ${t.colors.actionPrimaryIcon}`},".anticon, &:hover .anticon, &:active .anticon, &:focus-visible .anticon":{color:t.colors.actionDisabledText}},[`${i}[disabled]`]:{...(0,T.LM)(t),".anticon, &:hover .anticon, &:active .anticon, &:focus-visible .anticon":{color:t.colors.actionPrimaryTextDefault}}},[`${n}:not(:first-of-type)`]:{width:t.general.heightSm,padding:"3px !important",borderTopLeftRadius:"0px !important",borderBottomLeftRadius:"0px !important"},...(0,v.Cx)(t.options.enableAnimation)},u=(0,I.dg)(l);return(0,r.AH)(u)},(e,t,a)=>`${(0,I.H6)(t)}|${e}|${a??""}|${!!t.options.enableAnimation}`),k=e=>{let{theme:t,classNamePrefix:a}=(0,b.wn)(),{children:r,icon:i,deprecatedMenu:s,type:l,loading:u,loadingButtonStyles:d,placement:c,dangerouslySetAntdProps:m,size:f,...g}=e,h=t.general.iconFontSize+24+2*t.general.borderWidth,[T,I]=(0,o.useState)(h),k=(0,o.useCallback)(e=>{if(void 0===u)return;e&&!u&&I(e.getBoundingClientRect().width)},[u]),C=(0,o.useMemo)(()=>({width:T,fontSize:t.general.iconFontSize,...d}),[T,t.general.iconFontSize,d]),D=(0,o.useMemo)(()=>({fontSize:t.general.iconFontSize}),[t.general.iconFontSize]);return(0,n.Y)(v.wC,{children:(0,n.Y)("div",{ref:k,css:E,children:u?(0,n.Y)(p.$n,{componentId:"codegen_design-system_src_design-system_splitbutton_splitbutton.tsx_163",type:"default"===l?void 0:l,style:C,loading:!0,htmlType:e.htmlType,title:e.title,className:e.className,size:e.size,children:r}):(0,n.Y)(S,{...g,size:e.size,overlay:s,trigger:R,css:A(a,t,f),icon:(0,n.Y)(y.A,{css:D,"aria-hidden":"true"}),placement:c||"bottomRight",type:"default"===l?void 0:l,leftButtonIcon:i,...m,children:r})})})},R=["click"]},538421:(e,t,a)=>{"use strict";a.d(t,{Hc:()=>l,SB:()=>s,vF:()=>o,x9:()=>i});var n=a(141078),r=a(949957);let i=300,s=(0,n.J1)`
  query BudgetPolicyListQuery($input: BudgetpolicyListBudgetPoliciesRequestInput!)
  @component(name: "MoneyInfra.CostManagement") {
    serverlesspolicyListBudgetPolicies(input: $input) {
      policies {
        policyId
        policyName
        creatorUserId
        customTags {
          key
          value
        }
        rateLimitConfig
        isEditable
          @includeSafex(
            name: "databricks.fe.clustercontrols.enableBudgetPolicyAdminUiPublicPreview"
            defaultValue: false
          )
        isDeletable
          @includeSafex(
            name: "databricks.fe.clustercontrols.enableBudgetPolicyAdminUiPublicPreview"
            defaultValue: false
          )
        bindingWorkspaceIds
      }
      apiError {
        ...ApiErrorFragment
      }
      previousPageToken
      nextPageToken
    }
  }
  ${r.Lu}
`,o=()=>{let[e,{data:t,loading:a,error:r}]=(0,n._l)(s),i=t?.serverlesspolicyListBudgetPolicies?.apiError?.message??r?.message??null,o=t?.serverlesspolicyListBudgetPolicies?.nextPageToken??null,l=t?.serverlesspolicyListBudgetPolicies?.previousPageToken??null,u=t?.serverlesspolicyListBudgetPolicies?.policies??[];return{doListBudgetPolicies:e,listBudgetPoliciesQueryState:{loading:a,errorMessage:i,apiError:t?.serverlesspolicyListBudgetPolicies?.apiError?.message??null,data:t?{policies:u,nextPageToken:o,previousPageToken:l}:null}}},l=e=>(0,n.IT)(s,e)},543963:(e,t,a)=>{"use strict";a.d(t,{DP:()=>r,WB:()=>i,cn:()=>s});var n=a(141078);let r=(0,n.J1)`
  fragment RunStateFragment on JobsRunState {
    durationWarningExceeded
    lifeCycleState
    resultState
    stateMessage
    userCancelledOrTimedout
    queueReason @include(if: $includeQueueReason)
  }
`,i=(0,n.J1)`
  fragment RunStatusFragment on JobsRunStatus {
    queueDetails @include(if: $includeQueueReason) {
      code
      message
    }
    state
    description @includeSafex(name: "lakeflow_runs_list", defaultValue: false)
    cancellationDetails @includeSafex(name: "lakeflow_runs_list", defaultValue: false) {
      reason
    }
    terminationDetails {
      code
      message
      type
    }
  }
`,s=(0,n.J1)`
  fragment RunEdgesFragment on RunConnection {
    edges {
      node {
        status
        statusV2 {
          ...RunStatusFragment
        }
        idInJob
        startTime
      }
    }
  }
  ${i}
`},545626:(e,t,a)=>{"use strict";a.d(t,{Hx:()=>s,S0:()=>o,i2:()=>r});var n=a(5697);let r=new Set([n.Z6.Notebook,n.Z6.File]),i=new Set(Object.values(n.Z6));function s(e){return i.has(e)}function o(e){return"folderNode"in e}},550487:(e,t,a)=>{"use strict";a.d(t,{GF:()=>u,bv:()=>o,t1:()=>l});var n,r,i=a(419374),s=a(822369),o=((n={}).OWNED_BY_ME="owned_by_me",n.ACCESSIBLE_BY_ME="accessible_by_me",n.ALL="all",n),l=((r={}).OWNED_BY_ME="owned_by_me",r.ACCESSIBLE_BY_ME="accessible_by_me",r.ALL="all",r);function u(){let e=new Set;return e.add("owned_by_me"),i.p.enableJobViewAcls()&&(0,s.o)()||e.add("all"),(0,s.o)()&&e.add("accessible_by_me"),e}},554245:(e,t,a)=>{"use strict";a.d(t,{g:()=>r});var n=a(802472);function r(){return document.getElementById(n.l)||document.getElementById("test-portal-container")||document.body}},565431:(e,t,a)=>{"use strict";a(331763),a(724650)},573939:(e,t,a)=>{"use strict";a.d(t,{E2:()=>c,UQ:()=>d,uo:()=>m,mm:()=>p});var n=a(691238),r=a(441535),i=a(534607),s=a(631377),o=a.n(s),l=a(502039);let u={runQuery(e){let t=e.connection??window.conn,a=(e=e||{}).command||this.get("command"),n=e.bindings||this.get("bindings"),r=e.rowLimit||this.get("rowLimit"),i=e.language||"sql";this.set({state:"running",stages:[]}),this.cancelQuery(),this.lastRPC=t.wsClient.sendRPC("query",{data:{query:e.prefixComment?`${e.prefixComment}
${a}`:a,xColumns:this.get("xColumns"),yColumns:this.get("yColumns"),pivotColumns:this.get("pivotColumns"),pivotAggregation:this.get("pivotAggregation"),customPlotOptions:o()(this.get("customPlotOptions")),displayType:this.get("displayType"),language:i,bindings:n,clusterId:e.clusterId,rowLimit:r,notebookId:e.notebookId},success:(t,a)=>{if(a.clientCancelled)return;this.onQueryResult(t),e.onQuerySuccess&&e.onQuerySuccess(t)},error:(t,a)=>{this.onQueryError(t,a),e.onQueryFailure&&e.onQueryFailure(t)}})},cancelQuery(){this.lastRPC&&!this.lastRPC.completed&&this.lastRPC.cancel()},onQueryResult(e){if("html"===e.type)return this.onQueryError(e);this.set({state:"finished",running:!1,displayType:l.I.computeDisplayType(this.get("displayType"),e.type),results:e,error:null,arguments:e.arguments})},onQueryError(e,t){if(t&&t.clientCancelled)return;this.set({state:"error",error:e,displayType:"html",running:!1})},hasError(){return"error"===this.get("state")},getError(){let e=this.get("error");if(!this.hasError())return null;if("string"==typeof e)return e;if(e&&"string"==typeof e.data)return e.data;return null}},d="hive_metastore",c="default";class m{static getTableCommand(e){let t=new i.q(n.Ay.extend({runAsQuery:!0},e));return n.Ay.extend(t,u)}static getDatabasesCommand(){return m.getTableCommand({command:"show databases",rowLimit:(0,r.W)("databricks.fe.config.eda.metastoreServiceRowLimit",1e6)})}static getUseCatalogString(e){return`USE CATALOG \`${e}\`; `}static fetchDatabases(e,t,a){let n=this.getDatabasesCommand();return n.on("change",p.databasesFetchCallback.bind(p,n,t,a),this),n.runQuery(e),n}static fetchTablesListForDatabase(e,t,a,n){let r=this.getTablesListCommand(t);return r.on("change",p.tableFetchCallback.bind(p,r,a,n),this),r.runQuery(e),r}static fetchTableSchema(e,t,a){return new Promise((n,r)=>{let i=m.getSchemaCommand(t,a);i.on("change",()=>{if("finished"===i.get("state")&&n(i.get("results")),"error"===i.get("state")){let e=i.get("error");r(Error(e&&e.data))}}),i.runQuery({...e})})}static deleteTableFromDatabase(e,t,a,n,r){let i=this.getDeleteTableCommand(t,a);return i.on("change",p.deleteTableCallback.bind(p,i,n,r),this),i.runQuery({clusterId:e.clusterId}),i}static refreshCommand(e,t,a,n,r){let i=this.getRefreshCommand(t,a);return i.on("change",p.refreshTableCallback.bind(p,i,n,r),this),i.runQuery(e),i}static getRefreshCommand(e,t){let a=m.constructTableIdentifier(e,t);return m.getTableCommand({command:`refresh table ${a}`})}static getTablesListCommand(e){return m.getTableCommand({command:`show tables in \`${e}\``,rowLimit:(0,r.W)("databricks.fe.config.eda.metastoreServiceRowLimit",1e6)})}static getDeleteTableCommand(e,t){let a=m.constructTableIdentifier(t,e);return m.getTableCommand({command:`drop table ${a}`})}static constructTableIdentifier(e,t){return`\`${e}\`.\`${t}\``}static constructTableIdentifierWithCatalog(e){return`\`${e.catalogName}\`.\`${e.databaseName}\`.\`${e.tableName}\``}static getSchemaCommand(e,t){let a=m.constructTableIdentifier(e,t);return m.getTableCommand({command:`describe ${a}`})}static getPreviewCommand(e,t){let a=m.constructTableIdentifier(e,t);return m.getTableCommand({command:`select * from ${a}`})}static getPreviewCommandWithCatalog(e){let t=m.constructTableIdentifierWithCatalog(e);return m.getTableCommand({command:`select * from ${t}`})}static changeCatalog(e,t,a,n){let r=this.getTableCommand({command:m.getUseCatalogString(t)});return r.on("change",p.tableFetchCallback.bind(p,r,a,n),this),r.runQuery(e),r}static getReservoirTableDetailsCommandByTableIdentifier(e){return m.getTableCommand({command:`describe detail ${e}`})}static getReservoirTableHistoryCommandByTableIdentifier(e){return m.getTableCommand({command:`describe history ${e}`})}static isDefaultDatabase(e){return e===c}}class p{static databasesFetchCallback(e,t,a){let n=e.get("state");"finished"===n?(t&&t(e.get("results")),e.off()):"error"===n&&(a&&a(e),e.off())}static tableFetchCallback(e,t,a){let n=e.get("state");"finished"===n&&t&&t(this.getTableModelsFromQueryResults(e)),"error"===n&&a&&a(e)}static deleteTableCallback(e,t,a){let n=e.get("state");"finished"===n&&t&&t(),"error"===n&&a&&a(e)}static refreshTableCallback(e,t,a){let n=e.get("state");"finished"===n&&t&&t(),"error"===n&&a&&a()}static getTableModelsFromQueryResults(e){let t=e.get("results"),a=t.data,n=t.schema;return this.convertResultDataArraysToSchemaMap(a,n)}static convertResultDataArraysToSchemaMap(e,t){return e.map(e=>e.reduce((e,a,n)=>(e[t[n].name]=a,e),{}))}}},583298:(e,t,a)=>{"use strict";a.d(t,{v:()=>n});let n=(0,a(342411).YK)({mvStPipeline:{id:"9oNUoc",defaultMessage:"MV/ST pipeline"},mvStSchedule:{id:"YmMbFo",defaultMessage:"MV/ST schedule"},etl:{id:"H6eEZC",defaultMessage:"ETL"},ingestion:{id:"I22Iie",defaultMessage:"Ingestion"},databaseTableSync:{id:"5TPRqO",defaultMessage:"Database Table Sync"}})},589830:(e,t,a)=>{"use strict";a.d(t,{N:()=>s,U:()=>o});var n=a(441535),r=a(657825),i=a(411695);function s(){let e=(0,i.ER)(),t=(0,r.fo)()===r.hQ.ServerlessOnly,a=(0,n.W)("serverless_dlt",null)??((0,n.W)("databricks.fe.pipelines.enablePipelinesServerlessUI",!1)&&(0,n.W)("databricks.deltapipelines.safe.isServerlessEnabled",!1));return e||t||a}function o(){return s()&&(0,n.W)("databricks.fe.pipelines.enablePipelinesServerlessUIForSamplePipeline",!0)}},622120:(e,t,a)=>{"use strict";a.d(t,{DY:()=>g,H6:()=>m,YR:()=>f,mc:()=>p});var n=a(141078),r=a(173773);let i=(0,n.J1)`
  fragment SuggestedAsset on UseractivityAsset {
    id
    type
    name
    userActivityInfo {
      assetId
      assetType
      isFavorite
    }
    treeNode {
      name
      fullPath
      owner {
        fullname
        email
        id
      }
      modifiedAt
    }
    unityCatalogSecurable {
      name
      fullName
      securableKind
    }
  }
`,s=(0,n.J1)`
  fragment SuggestedAssetWithThumbnail on UseractivityAsset {
    ...SuggestedAsset
    thumbnailUrl(uiMode: $uiMode)
  }
`,o=(0,n.J1)`
  fragment RelevanceReason on UseractivityRelevanceReason {
    timestamp
    type
    viewMetadata {
      viewFrequency
    }
  }
`,l=(0,n.J1)`
  fragment AssetRecommendation on UseractivityAssetRecommendation {
    asset {
      ...SuggestedAsset
    }
    relevanceReason {
      ...RelevanceReason
    }
  }
`,u=(0,n.J1)`
  fragment AssetRecommendationWithThumbnail on UseractivityAssetRecommendation {
    asset {
      ...SuggestedAssetWithThumbnail
    }
    relevanceReason {
      ...RelevanceReason
    }
  }
`,d=(0,n.J1)`
  fragment SuggestedAssetsResponse on UseractivityGetAssetRecommendationsResponse {
    nextPageToken
    assetRecommendations {
      ...AssetRecommendation
    }
    recommendationTraceId
    apiError {
      code
      message
    }
  }
`,c=(0,n.J1)`
  fragment SuggestedAssetsResponseWithThumbnail on UseractivityGetAssetRecommendationsResponse {
    nextPageToken
    assetRecommendations {
      ...AssetRecommendationWithThumbnail
    }
    recommendationTraceId
    apiError {
      code
      message
    }
  }
`,m=(0,n.J1)`
  query ListSuggestedAssets(
    $userActivityTypes: [UseractivityAssetType!]
    $pageSize: Int!
    $pageToken: String
    $page: UseractivityPage
    $uiMode: ThumbnailsThumbnailUiMode
    $recommendationTraceId: String
  ) @component(name: "Lakeview.DatabricksOne") {
    useractivityGetAssetRecommendations(
      input: {
        pageSize: $pageSize
        filter: { types: $userActivityTypes }
        context: { page: $page }
        pageToken: $pageToken
        recommendationTraceId: $recommendationTraceId
      }
    ) {
      ...SuggestedAssetsResponseWithThumbnail
    }
  }
  ${i}
  ${s}
  ${o}
  ${u}
  ${c}
`,p=(0,n.J1)`
  query ListHomepageSuggestedAssets(
    $userActivityTypes: [UseractivityAssetType!]
    $pageSize: Int!
    $pageToken: String
    $page: UseractivityPage
    $recommendationTraceId: String
  ) @component(name: "Lakeview.DatabricksOne") {
    useractivityGetAssetRecommendations(
      input: {
        pageSize: $pageSize
        filter: { types: $userActivityTypes }
        context: { page: $page }
        pageToken: $pageToken
        recommendationTraceId: $recommendationTraceId
      }
    ) {
      ...SuggestedAssetsResponse
    }
  }
  ${i}
  ${o}
  ${l}
  ${d}
`,f=(0,n.J1)`
  query GetUserProfileSuggestions @component(name: "LakehouseCollaboration.DiscoveryAndRecommendation") {
    recommendation_getUserProfile {
      recommendedOwnerUserIds
      recommendedAssetTypes
      recommendedTagPairs {
        key
        value
      }
      recommendationTraceId
    }
  }
`,g=(0,n.J1)`
  query ListHomepageSuggestedAssetsShadow(
    $types: [RecommendationAssetType!]
    $pageSize: Int!
    $pageToken: String
    $page: RecommendationPage
    $recommendationTraceId: String
  ) @component(name: "LakehouseCollaboration.DiscoveryAndRecommendation") {
    recommendationGetAssetRecommendations(
      input: {
        pageSize: $pageSize
        filter: { types: $types }
        context: { page: $page }
        pageToken: $pageToken
        recommendationTraceId: $recommendationTraceId
      }
    ) {
      ...RecommendedAssetsResponse
    }
  }
  ${r.wt}
  ${r.Ej}
  ${r.qc}
  ${r.vO}
`},631661:(e,t,a)=>{"use strict";a.d(t,{f:()=>u,u:()=>l});var n=a(610435),r=a(694762),i=a(339518),s=a(342411),o=a(814515);let l=e=>{let[t,a]=u(e);return(0,n.FD)(n.FK,{children:[e.children(a.open),t]})},u=({componentId:e,title:t,message:a,okText:l,cancelText:u,formatError:d,onConfirm:c,onConfirmCompleted:m,okButtonProps:p,cancelButtonProps:f})=>{let g=(0,o.Y)({action:c,onActionCompleted:m}),{isLoading:b,error:y,visible:h,close:S,trigger:T}=g;return[(0,n.Y)(r.aF,{componentId:e??"codegen_web-shared-ui_src_modals_confirmmodal.tsx_31",visible:h,confirmLoading:b,okText:l||(0,n.Y)(s.sA,{id:"9p8fea",defaultMessage:"Confirm"}),cancelText:u||(0,n.Y)(s.sA,{id:"9h8V8O",defaultMessage:"Cancel"}),onOk:T,okButtonProps:p,onCancel:S,cancelButtonProps:f,title:t,children:(0,n.FD)("div",{style:{display:"flex",gap:"16",flexDirection:"column"},children:[(0,n.Y)("span",{children:a}),y&&(0,n.Y)(i.F,{componentId:e?`${e}.error_alert`:"codegen_web-shared-ui_src_modals_confirmmodal.tsx_60",type:"error",closable:!1,message:d?.(y)||(0,n.Y)(s.sA,{id:"Uiwrou",defaultMessage:"Update action failed for unknown reason"})})]})},"modal"),g]}},641208:(e,t,a)=>{"use strict";a.d(t,{dN:()=>R,gg:()=>k,m0:()=>S,lJ:()=>I,DH:()=>h,mb:()=>A,yy:()=>E,T:()=>v,go:()=>T});var n=a(141078),r=a(239362),i=a(543963),s=a(831358),o=a(984568);let l=(0,n.J1)`
  fragment JobsSortableTask on JobsTaskSettings {
    taskKey
    dependsOn {
      taskKey
    }
  }
`,u=(0,n.J1)`
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
  ${o.f5}
  ${i.DP}
  ${i.WB}
  ${r.Bv}
  ${s.j}
  ${s.E}
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
`,c=(0,n.J1)`
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
  ${o.f5}
  ${r.qe}
  ${s.j}
  ${s.E}
`;if(13057==a.j)var m=a(285376);if(13057==a.j)var p=a(756340);var f=a(659789);let g=(0,n.J1)`
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
  ${o.lu}
  ${o.IB}
  ${o.VM}
`,b=(0,n.J1)`
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
  ${g}
`,y=(0,n.J1)`
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
  ${y}
  ${b}
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
`;let h=(0,n.J1)`
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
`,S=(0,n.J1)`
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
  ${u}
  ${c}
`,T=25;function v({jobId:e,jobIdLong:t,offset:a,startTimeFrom:n,startTimeTo:r,expandTasks:i}){return{query:S,variables:{jobId:e,jobIdLong:t,first:T,offset:a,startTimeTo:r,startTimeFrom:n,latestTasksOnly:(0,m.J)(),expandTasks:i,includeRunStatus:!0,...(0,p.h)()?{lazyLoadTaskTooltip:!0,expandTriggerInfo:!1,includeQueueDuration:!1,includeQueueReason:!1}:{lazyLoadTaskTooltip:!1,expandTriggerInfo:!0,includeQueueDuration:!0,includeQueueReason:!0}}}}let I=(0,n.J1)`
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

  ${u}
`,E=(0,n.J1)`
  mutation RunRepair($input: JobsRepairRunInput!) @component(name: "Workflows.Orchestration.Other") {
    jobsRepair(input: $input) {
      repairId
      apiError {
        ...ApiErrorFields
      }
    }
  }
  ${f.n}
`,A=(0,n.J1)`
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
`,k=(0,n.J1)`
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
`,R=(0,n.J1)`
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
`},656280:(e,t,a)=>{"use strict";a.d(t,{$R:()=>f,C$:()=>o,CU:()=>E,DS:()=>S,Kq:()=>g,Mp:()=>h,RZ:()=>A,aU:()=>y,bP:()=>m,cb:()=>i,db:()=>l,e8:()=>T,m9:()=>u,md:()=>s,og:()=>v,tQ:()=>p,vB:()=>b,wx:()=>I});var n=a(441535),r=a(811362);let i=e=>new Promise(t=>setTimeout(t,e)),s=(e,t)=>({type:t,etag:e.etag,reviews:e.reviews,runner_collaborator_aliases:e.runner_collaborator_aliases,review_state:e.review_state,owner_global_metastore_id:e.owner_global_metastore_id,owner_collaborator_alias:e.owner_collaborator_alias,added_at:e.added_at}),o={notebook:r.BV.NOTEBOOK,jar_analysis:r.BV.JAR},l={notebook:r.Yh.NOTEBOOK,jar_analysis:r.Yh.JAR},u={notebook:{approved:r.Jm.APPROVED,pending:r.Jm.PENDING,rejected:r.Jm.REJECTED,autoApprovedSubReason:r.g4.AUTO_APPROVED},jar_analysis:{approved:r.XV.APPROVED,pending:r.XV.PENDING,rejected:r.XV.REJECTED,autoApprovedSubReason:r.Ig.AUTO_APPROVED}},d=["notebook","jar_analysis"],c=[r.BV.NOTEBOOK,r.BV.JAR],m=e=>d.includes(e),p=e=>m(e.type),f=e=>c.includes(e);function g(){return(0,n.W)("databricks.fe.uc.enableCleanRoom",!1)}function b(){return(0,n.W)("databricks.fe.clean.room.enableCleanRoomJobsScheduleButton",!1)}function y(){return(0,n.W)("databricks.fe.clean.room.enableCleanRoomsFirewallSupport",!1)}function h(){return(0,n.W)("databricks.fe.clean.room.enableShortTermPrivateLinkSupport",!1)}function S(){return(0,n.W)("databricks.cleanroom.enableModelInCleanRoom",!1)}function T(){return(0,n.W)("databricks.fe.delta-sharing.enableSAPBDCConnector",!1)}function v(){return(0,n.W)("databricks.fe.delta-sharing.enableSAPBDCMarketplaceEntrypoint",!1)}function I(){return(0,n.W)("cleanroom_jar_task",!1)}function E(){return(0,n.W)("cr_shared_output",!1)}function A(){return(0,n.W)("cr_packaged_mode",!1)}},659789:(e,t,a)=>{"use strict";a.d(t,{M:()=>i,n:()=>r});var n=a(141078);let r=(0,n.J1)`
  fragment ApiErrorFields on ApiError {
    code
    message
  }
`,i=(0,n.J1)`
  fragment RunParameters on RunParameters {
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
`},661152:(e,t,a)=>{"use strict";a.d(t,{I2:()=>u,TE:()=>s,cR:()=>l,oA:()=>o});var n=a(141078),r=a(154968);let i=(0,n.J1)`
  fragment PipelineGetFragment on DeltapipelinesGetPipelineResponse {
    status {
      cause
      clusterId
      health
      lastModified
      latestUpdates {
        creationTime
        state
        updateId
      }
      name
      permissionLevel
      pipelineId
      creatorUserName
      runAsUserName
      runAs {
        servicePrincipalName
        userName
      }
      effectiveBudgetPolicyId
        @includeSafex(name: "databricks.fe.pipelines.enableEffectiveBudgetPolicyIdInPipelineGet", defaultValue: false)
      ownerPrincipal @includeSafex(name: "databricks.fe.enrichPrincipalUi", defaultValue: false) {
        id
        uniqueName
        kind
        displayName
      }
      effectivePublishingMode
      effectiveEnvironmentVersion
      spec {
        _json
        name
        budgetPolicyId
        usagePolicyId @includeSafex(name: "databricks.fe.budget_policy.renameServerlessPolicy", defaultValue: false)
        configuration {
          key
          value
        }
        tags {
          key
          value
        }
        continuous
        libraries {
          notebook {
            path
          }
          file {
            path
          }
          glob {
            include
          }
        }
        rootPath
        channel
        clusters {
          label
          spec {
            attrs {
              policyId
              nodeTypeId
              driverNodeTypeId
              runtimeEngine
              customTags {
                key
                value
              }
              awsAttributes {
                instanceProfileArn
              }
            }
            size {
              numWorkers
              autoscale {
                minWorkers
                maxWorkers
                mode
              }
            }
          }
        }
        environment {
          client
          dependencies
          environmentVersion
        }
        edition
        photon
        serverless
        development
        deployment {
          kind
          metadataFilePath
        }
        storage
        catalog
        target
        schema
        eventLog {
          name
          catalog
          schema
        }
        pipelineType
        ingestionDefinition {
          connectionName
          ingestionGatewayId
          ingestFromUcForeignCatalog
            @includeSafex(name: "databricks.fe.ingestion.enableForeignCatalogIngestion", defaultValue: false)
          sourceType
          netsuiteJarPath
          objects {
            catalog {
              sourceCatalog
              destinationCatalog
              tableConfiguration {
                scdType
                primaryKeys
                salesforceIncludeFormulaFields
                includeColumns
                excludeColumns
              }
            }
            schema {
              sourceCatalog
              sourceSchema
              destinationCatalog
              destinationSchema
              tableConfiguration {
                scdType
                primaryKeys
                salesforceIncludeFormulaFields
                includeColumns
                excludeColumns
              }
              connectorOptions {
                sharepointOptions {
                  entityType
                  url
                  fileIngestionOptions
                    @includeSafex(name: "databricks.fe.ingestion.connector.sharepoint.enabled", defaultValue: false) {
                    format
                    fileFilters {
                      pathFilter
                      modifiedBefore
                      modifiedAfter
                    }
                    inferColumnTypes
                    schemaEvolutionMode
                    schemaHints
                    ignoreCorruptFiles
                    corruptRecordColumn
                    rescuedDataColumn
                    singleVariantColumn
                    readerCaseSensitive
                    formatOptions {
                      key
                      value
                    }
                  }
                }
                gdriveOptions {
                  entityType
                  url
                }
              }
            }
            table {
              sourceCatalog
              sourceSchema
              sourceTable
              destinationCatalog
              destinationSchema
              destinationTable
              tableConfiguration {
                scdType
                primaryKeys
                salesforceIncludeFormulaFields
                includeColumns
                excludeColumns
                sequenceBy
                queryBasedConnectorConfig {
                  cursorColumns
                }
                autoFullRefreshPolicy {
                  enabled
                }
              }
              connectorOptions {
                sharepointOptions {
                  entityType
                  url
                  fileIngestionOptions
                    @includeSafex(name: "databricks.fe.ingestion.connector.sharepoint.enabled", defaultValue: false) {
                    format
                    fileFilters {
                      pathFilter
                      modifiedBefore
                      modifiedAfter
                    }
                    inferColumnTypes
                    schemaEvolutionMode
                    schemaHints
                    ignoreCorruptFiles
                    corruptRecordColumn
                    rescuedDataColumn
                    singleVariantColumn
                    readerCaseSensitive
                    formatOptions {
                      key
                      value
                    }
                  }
                }
                gdriveOptions {
                  entityType
                  url
                }
                outlookOptions
                  @includeSafex(name: "databricks.fe.ingestion.connector.outlook.enabled", defaultValue: false) {
                  startDate
                  bodyFormat
                  attachmentMode
                  includeMailboxes
                  includeFolders
                  includeSenders
                  includeSubjects
                }
                metaAdsOptions {
                  level
                  breakdowns
                  actionBreakdowns
                  actionReportTime
                  actionAttributionWindows
                  startDate
                  customInsightsLookbackWindow
                  timeIncrement
                }
                smartsheetOptions {
                  enforceSchema
                }
              }
              jiraOptions
                @includeSafex(name: "databricks.fe.ingestion.enableJiraConfluenceSpacesCell", defaultValue: false) {
                includeJiraSpaces
              }
              confluenceOptions
                @includeSafex(name: "databricks.fe.ingestion.enableJiraConfluenceSpacesCell", defaultValue: false) {
                includeConfluenceSpaces
              }
            }
            report {
              sourceUrl
              destinationCatalog
              destinationSchema
              destinationTable
              tableConfiguration {
                scdType
                primaryKeys
                sequenceBy
                includeColumns
                excludeColumns
              }
            }
          }
          tableConfiguration {
            scdType
            primaryKeys
            salesforceIncludeFormulaFields
            includeColumns
            excludeColumns
            autoFullRefreshPolicy {
              enabled
            }
          }
          sourceConfigurations {
            catalog {
              sourceCatalog
              postgres {
                slotConfig {
                  slotName
                  publicationName
                }
              }
            }
          }
        }
        managedDefinition {
          databaseTableSync {
            sinks {
              destTableUcName
              destTable
            }
          }
          metricView @includeSafex(name: "databricks.fe.pipelines.enableMetricViewBacklink", defaultValue: false) {
            ucTableId
          }
        }
        gatewayDefinition {
          connectionName
          gatewayStorageCatalog
          gatewayStorageSchema
          connectionParameters {
            sourceCatalog
          }
        }
        notifications {
          emailRecipients
          alerts
        }
      }
      parameters @includeSafex(name: "pipeline_parameters", defaultValue: false) {
        key
        value
      }
      state
    }
  }
`,s=(0,n.J1)`
  query PipelineGetQuery($input: DeltapipelinesGetPipelineInput!) @component(name: "Workflows.Authoring.UI") {
    deltapipelinesGet: jobsGetPipeline(input: $input) {
      ...PipelineGetFragment
      apiError {
        ...PipelineApiErrorFields
      }
    }
  }
  ${i}
  ${r.n}
`;function o({variables:e,...t}={}){return(0,n.IT)(s,{variables:e,...t})}function l(e){return(0,n._l)(s,e)}function u({variables:e,...t}={}){let a=(0,n.IT)(s,{variables:e,...t,fetchPolicy:"cache-and-network"});if(!t.skip&&void 0===a.data&&!a.error)throw new Promise(e=>{a.observable.subscribe({next(t){t.loading||e(t)}})});return a}},674140:(e,t,a)=>{"use strict";a.d(t,{A:()=>p});var n=a(513384),r=a(657709),i=a(378003),s=a(692738),o=a(783772),l=a.n(o),u=a(331379),d=a(251881),c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},m=s.forwardRef(function(e,t){return s.createElement(d.TG,null,function(a){var o,d=a.getPrefixCls,m=a.direction,p=e.prefixCls,f=e.span,g=e.order,b=e.offset,y=e.push,h=e.pull,S=e.className,T=e.children,v=e.flex,I=e.style,E=c(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),A=d("col",p),k={};["xs","sm","md","lg","xl","xxl"].forEach(function(t){var a,s={},o=e[t];"number"==typeof o?s.span=o:"object"===(0,i.A)(o)&&(s=o||{}),delete E[t],k=(0,r.A)((0,r.A)({},k),(a={},(0,n.A)(a,"".concat(A,"-").concat(t,"-").concat(s.span),void 0!==s.span),(0,n.A)(a,"".concat(A,"-").concat(t,"-order-").concat(s.order),s.order||0===s.order),(0,n.A)(a,"".concat(A,"-").concat(t,"-offset-").concat(s.offset),s.offset||0===s.offset),(0,n.A)(a,"".concat(A,"-").concat(t,"-push-").concat(s.push),s.push||0===s.push),(0,n.A)(a,"".concat(A,"-").concat(t,"-pull-").concat(s.pull),s.pull||0===s.pull),(0,n.A)(a,"".concat(A,"-rtl"),"rtl"===m),a))});var R=l()(A,(o={},(0,n.A)(o,"".concat(A,"-").concat(f),void 0!==f),(0,n.A)(o,"".concat(A,"-order-").concat(g),g),(0,n.A)(o,"".concat(A,"-offset-").concat(b),b),(0,n.A)(o,"".concat(A,"-push-").concat(y),y),(0,n.A)(o,"".concat(A,"-pull-").concat(h),h),o),S,k);return s.createElement(u.A.Consumer,null,function(e){var a=e.gutter,n=(0,r.A)({},I);return a&&(n=(0,r.A)((0,r.A)((0,r.A)({},a[0]>0?{paddingLeft:a[0]/2,paddingRight:a[0]/2}:{}),a[1]>0?{paddingTop:a[1]/2,paddingBottom:a[1]/2}:{}),n)),v&&(n.flex=function(e){if("number"==typeof e)return"".concat(e," ").concat(e," auto");if(/^\d+(\.\d+)?(px|em|rem|%)$/.test(e))return"0 0 ".concat(e);return e}(v)),s.createElement("div",(0,r.A)({},E,{style:n,className:R,ref:t}),T)})})});m.displayName="Col";let p=m},687011:(e,t,a)=>{"use strict";a.d(t,{Y:()=>s});var n=a(692738),r=a(845690),i=a(580500);let s=()=>{let[e,t]=(0,r.Mj)({key:"lakeflow-open-in-editor-folders-map",version:1,initialValue:{},scoped:!0}),a=(0,n.useCallback)(({folderId:e,pipelineId:a})=>{t(t=>({...Object.fromEntries(Object.entries(t).filter(e=>e[1]!==a)),[e]:a}))},[t]),s=(0,n.useCallback)(({pipelineId:e})=>{t(t=>Object.fromEntries(Object.entries(t).filter(t=>t[1]!==e)))},[t]);return{getAssociatedPipeline:(0,n.useCallback)(t=>(t.startsWith("projects/")&&(t=`folders/${(0,i.Uk)(t)}`),e[t]),[e]),associatePipelineFolder:a,removePipelineAssociation:s}}},691515:(e,t,a)=>{"use strict";a.d(t,{d:()=>r});var n=a(141078);let r=(0,n.J1)`
  fragment ForEachTaskStats on JobsJobTask {
    forEachTask {
      stats {
        taskRunStats {
          scheduledIterations
          activeIterations
          totalIterations
          failedIterations
          completedIterations
          succeededIterations
        }
        errorMessageStats {
          errorMessage
          count
          terminationCategory
        }
      }
    }
  }
`},693552:(e,t,a)=>{"use strict";a.d(t,{M:()=>S,k:()=>T});var n=a(610435),r=a(956935),i=a(692738),s=a(12414),o=a(672952),l=a(863708),u=a(726977),d=a(22191),c=a(449669),m=a(497895),p=a(382908),f=a(342411);let g=({link:e})=>{let{theme:t}=(0,m.wn)(),a=e??"https://docs.databricks.com/notebooks/notebook-assistant-faq.html";return(0,n.Y)("div",{style:{display:"grid",placeItems:"center",textAlign:"center",height:"100%",color:t.colors.textSecondary},children:(0,n.Y)("div",{children:(0,n.Y)(f.sA,{id:"PrKHVe",defaultMessage:"<databricksFAQ>Genie Code</databricksFAQ> is currently disabled for your workspace. Ask your Databricks administrator to enable <enableAssistant>Genie Code</enableAssistant>.",values:{databricksFAQ:e=>(0,n.Y)(p.o.Link,{componentId:"disabled-chat-sidebar-genie-faq-link",href:a,openInNewTab:!0,children:e}),enableAssistant:e=>(0,n.Y)(p.o.Link,{componentId:"disabled-chat-sidebar-enable-assistant-link",href:`${a}#q-how-do-i-enable-databricks-assistant`,openInNewTab:!0,children:e})}})})})};var b=a(620839);function y(e,t,a,n,r,i,s){try{var o=e[i](s),l=o.value}catch(e){a(e);return}o.done?t(l):Promise.resolve(l).then(n,r)}let h=i.lazy(()=>{var e;return(e=function*(){let{ChatSidebarNativeFeaturePlugin:e}=yield(()=>{let e=()=>Promise.all([a.e(62280),a.e(6932),a.e(1291),a.e(97768),a.e(24685),a.e(99406),a.e(21234),a.e(92170),a.e(1990),a.e(78632),a.e(39676),a.e(31813),a.e(51362),a.e(26881),a.e(64724),a.e(68775),a.e(11022),a.e(43927),a.e(18650),a.e(87122),a.e(12674),a.e(4828),a.e(90489),a.e(64666),a.e(30259),a.e(13962),a.e(22831),a.e(80086),a.e(51818),a.e(87385),a.e(58415),a.e(79637),a.e(62762),a.e(48898),a.e(6431)]).then(a.bind(a,622844));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(622844,"$project/notebook/sidebar/chat/NotebookChatSidebarTextArea","lazy",e);return e()})();yield e().preload();let t=()=>Promise.all([a.e(62280),a.e(62394),a.e(3752),a.e(32305),a.e(54497),a.e(33764),a.e(78277),a.e(7473),a.e(20872),a.e(36993),a.e(67590),a.e(51545),a.e(6932),a.e(20022),a.e(18294),a.e(5033),a.e(1291),a.e(97768),a.e(24685),a.e(59276),a.e(99406),a.e(59794),a.e(78580),a.e(55616),a.e(21234),a.e(3330),a.e(92170),a.e(59316),a.e(37797),a.e(11184),a.e(1990),a.e(44004),a.e(78632),a.e(52426),a.e(12514),a.e(39676),a.e(31813),a.e(51362),a.e(22886),a.e(26881),a.e(45854),a.e(72263),a.e(86412),a.e(32828),a.e(20556),a.e(40972),a.e(35747),a.e(29580),a.e(92922),a.e(6198),a.e(95470),a.e(5400),a.e(84245),a.e(97421),a.e(20806),a.e(37072),a.e(47404),a.e(10596),a.e(63819),a.e(60675),a.e(31083),a.e(78756),a.e(11136),a.e(64898),a.e(89187),a.e(20805),a.e(81318),a.e(80159),a.e(97786),a.e(70419),a.e(46184),a.e(14243),a.e(4065),a.e(86107),a.e(17007),a.e(78332),a.e(13526),a.e(49342),a.e(6854),a.e(13686),a.e(71944),a.e(97527),a.e(22249),a.e(51778),a.e(98947),a.e(26378),a.e(52009),a.e(79601),a.e(72712),a.e(77104),a.e(69756),a.e(7612),a.e(59352),a.e(77435),a.e(33719),a.e(35550),a.e(62567),a.e(51750),a.e(17746),a.e(42797),a.e(68775),a.e(11022),a.e(49029),a.e(10133),a.e(43927),a.e(18650),a.e(87122),a.e(12674),a.e(4828),a.e(84283),a.e(44341),a.e(98317),a.e(43587),a.e(35711),a.e(8089),a.e(23197),a.e(90489),a.e(64666),a.e(10095),a.e(30259),a.e(62621),a.e(45738),a.e(19604),a.e(13962),a.e(22831),a.e(80086),a.e(51818),a.e(87385),a.e(58415),a.e(356),a.e(1377),a.e(17292),a.e(34607),a.e(54694),a.e(65484),a.e(54894),a.e(79331),a.e(45524),a.e(83750),a.e(55851),a.e(70231),a.e(23145),a.e(14528),a.e(92480),a.e(47323),a.e(92792),a.e(59498),a.e(63121),a.e(13691),a.e(35094),a.e(97091),a.e(79832),a.e(56129),a.e(79637),a.e(65084),a.e(81647),a.e(8260),a.e(27241),a.e(71046),a.e(71713),a.e(36176),a.e(46822),a.e(36921),a.e(62762),a.e(37140),a.e(18080),a.e(48898),a.e(82031),a.e(42272),a.e(36739),a.e(89478),a.e(10297),a.e(95996),a.e(44084),a.e(30908),a.e(24283),a.e(13915),a.e(50536),a.e(4340),a.e(60548),a.e(95150),a.e(73089),a.e(2602),a.e(79547),a.e(84056),a.e(73306),a.e(83596),a.e(83537),a.e(50621),a.e(40211),a.e(43057),a.e(17456),a.e(84736),a.e(57978),a.e(78284),a.e(23055),a.e(55404),a.e(60687),a.e(98120),a.e(42170),a.e(33364),a.e(28449),a.e(48387),a.e(71553),a.e(97236),a.e(79579),a.e(9701),a.e(38757),a.e(42522),a.e(35813),a.e(91322),a.e(33584),a.e(50068),a.e(29672),a.e(33754),a.e(6850),a.e(65421),a.e(37445),a.e(2661),a.e(18397),a.e(39579),a.e(16796),a.e(23490),a.e(2919),a.e(4994),a.e(48383),a.e(44857),a.e(9320),a.e(51751),a.e(69394),a.e(57512),a.e(2825),a.e(80060),a.e(23376),a.e(53024),a.e(48457),a.e(72360),a.e(14003),a.e(72826),a.e(50460),a.e(66233),a.e(97821),a.e(19986),a.e(83907),a.e(45582),a.e(11999),a.e(12729),a.e(38544),a.e(13546),a.e(48537),a.e(46241),a.e(62564),a.e(28453),a.e(50092),a.e(25706),a.e(77748),a.e(402),a.e(36390),a.e(45392),a.e(71833),a.e(12869),a.e(43756),a.e(46383),a.e(40380),a.e(70436),a.e(31190),a.e(56555)]).then(a.bind(a,466307));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(466307,"../GlobalChatSidebar","lazy",t);return t()},function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function s(e){y(i,n,r,s,o,"next",e)}function o(e){y(i,n,r,s,o,"throw",e)}s(void 0)})})()}),S=()=>{let{value:e,loading:t}=(0,o.er)();return(0,n.Y)(l.JR,{errorBoundaryId:u.s.AssistantPanelNotebook,esComponent:d.Es.Assistant,fallback:(0,n.Y)(c.I,{}),children:(0,n.Y)("div",{"data-testid":"global-chat-sidebar",css:{display:"flex",flexDirection:"column",height:"100%",width:"100%"},children:(0,n.FD)(i.Suspense,{fallback:(0,n.Y)(T,{}),children:[t&&(0,n.Y)(T,{}),!t&&e&&(0,n.Y)(h,{}),!t&&!e&&(0,n.Y)(g,{link:b.A.DATABRICKS_ASSISTANT_FAQ})]})})})},T=()=>(0,n.Y)("div",{css:{position:"relative",width:"100%",height:"100%"},children:(0,n.Y)(s.y,{css:(0,r.AH)("position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);"),label:"Loading",size:"large"})})},701200:(e,t,a)=>{"use strict";a.a(e,async(e,n)=>{try{a.d(t,{E:()=>d,v:()=>u});var r=a(610435),i=a(692738),s=a(580500),o=a(954879),l=a(419180);function u({children:t}){let{deploymentModal:a}=function(){let t=(0,o.I)(e=>e.isDabsProject),a=(0,o.I)(e=>e.projectRootFolderNode),[n,r]=(0,l.iQ)();return(0,i.useEffect)(()=>{if(!t||!a)return;let n=(0,s.Uk)(a.name);sessionStorage.getItem(e)===n&&(sessionStorage.removeItem(e),r())},[a,r,t]),{deploymentModal:n}}();return(0,r.FD)(r.FK,{children:[t,a]})}function d(t){sessionStorage.setItem(e,t)}let e="dabs_authoring.auto_open_deploy_modal";n()}catch(e){n(e)}})},716667:(e,t,a)=>{"use strict";a.d(t,{P:()=>n,p:()=>r});var n=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return t},r=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return t}},721854:(e,t,a)=>{"use strict";a.d(t,{$l:()=>m,Fn:()=>c,JT:()=>b,fQ:()=>f,pt:()=>p,u2:()=>d});var n,r,i=a(778529),s=a.n(i),o=a(692738);if(13057==a.j)var l=a(846947);if(13057==a.j)var u=a(483588);var d=((n={}).CUSTOM_TAGS="customTags",n.GOVERNED_TAGS="governedTags",n.POLICY_NAME="policyName",n.LIMIT_AMOUNT="limitAmount",n.LIMIT_TYPE="limitType",n.ENFORCEMENT_ENABLED="enforcementEnabled",n.BINDING_WORKSPACE_IDS="bindingWorkspaceIds",n.ENFORCEMENT_STATUS="enforcementStatus",n.RATE_LIMIT_CONFIG="rateLimitConfig",n);let c=o.createContext({});var m=((r={}).NAME="name",r.ID="id",r.CREATOR="creator",r.ACTIONS="actions",r);let p=e=>{let t=(0,l.CN)(),a=e?.customTags??[];return{policyId:e?.policyId??null,policyName:e?.policyName??null,customTags:a.map(e=>({key:e.key??null,value:e.value??null})),governedTags:t?a.map(e=>({key:{name:e.key??""},value:e.value??""})):void 0,creatorUserName:e?.creatorUserName??null,...(0,l.HZ)()?{bindingWorkspaceIds:e?.bindingWorkspaceIds??[]}:{},...(0,l.Ml)()?{enforcementStatus:e?.currentLimitEnforcementActivation?.state??u.dt3.STATE_UNSPECIFIED,limitType:e?.limitConfig?.limitType,limitAmount:e?.limitConfig?.limitAmount,enforcementEnabled:e?.limitConfig?.enforcementEnabled}:{},...(0,l.Ew)()?{rateLimitConfig:e?.rateLimitConfig??null}:{}}},f=e=>({policyId:e.policyId,policyName:e.policyName,customTags:g(e),...(0,l.HZ)()?{bindingWorkspaceIds:e.bindingWorkspaceIds}:{},...(0,l.Ml)()&&!s()(e.limitAmount)&&!isNaN(e.limitAmount)?{limitConfig:{limitType:e.limitType,limitAmount:e.limitAmount,enforcementEnabled:e.enforcementEnabled}}:{},...(0,l.Ew)()&&!s()(e.rateLimitConfig)?{rateLimitConfig:e.rateLimitConfig}:{}}),g=e=>{if((0,l.CN)())return e.governedTags?.filter(e=>!!e.key?.name).map(e=>({key:e.key?.name,value:e.value}));return e.customTags},b=e=>({creatorUserName:e?.creatorUserName??void 0})},724650:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});let n={}},729591:(e,t,a)=>{"use strict";a.d(t,{Xe:()=>d,aP:()=>m});var n=a(342411),r=a(141078),i=a(159705),s=a(715370);if(13057==a.j)var o=a(807633);function l(e,t,a,n,r,i,s){try{var o=e[i](s),l=o.value}catch(e){a(e);return}o.done?t(l):Promise.resolve(l).then(n,r)}let u=(0,r.J1)`
  query GetWorkspaceDefaultCatalogQuery($input: SettingspolicyserviceGetSettingWithoutSettingNameRestRequestInput!)
  @component(name: "IdentityMgmt.InternalServices") {
    settingspolicyserviceGetSettingRestWithoutSettingName(input: $input) {
      apiError {
        ...SettingsApiErrorFragment
      }
      sessionToken
      setting {
        ...StringSettingFragment
      }
    }
  }
  ${i.vi}
  ${i.iU}
`,d=(e,t,a)=>s.R.useQuery(u,{variables:{input:{key:{typeName:"workspace",name:e},setting:{typeName:"default_namespace_ws",name:""},...t&&{sessionToken:t}}},fetchPolicy:"cache-and-network",...a}),c=(0,r.J1)`
  mutation UpdateWorkspaceDefaultCatalogMutation(
    $input: SettingspolicyserviceSetSettingWithoutSettingNameRestRequestInput!
  ) @component(name: "IdentityMgmt.InternalServices") {
    settingspolicyserviceSetSettingsRestWithoutSettingName(input: $input) {
      apiError {
        ...SettingsApiErrorFragment
      }
      sessionToken
      setting {
        ...StringSettingFragment
      }
    }
  }
  ${i.vi}
  ${i.iU}
`,m=(e,t)=>{let a=(0,n.tz)(),[i,u]=s.R.useMutation(c,t);return[(t,n)=>{var s;return(s=function*(){let s={settingPayload:{storedValue:{stringVal:{value:t}}}},l=yield i({variables:p(e,n,s),refetchQueries:[(0,r.n4)(c)||""]}),u=l.data?.settingspolicyserviceSetSettingsRestWithoutSettingName?.apiError;if(u&&u.code===o.O.RESOURCE_CONFLICT)try{let t=u.message?JSON.parse(u.message):{};if(t.serializedCT)return yield i({variables:p(e,t.serializedCT,s)})}catch(e){throw Error(a.formatMessage({id:"QO8mzC",defaultMessage:"Failed to parse session token from conflict error"}))}return l},function(){var e=this,t=arguments;return new Promise(function(a,n){var r=s.apply(e,t);function i(e){l(r,a,n,i,o,"next",e)}function o(e){l(r,a,n,i,o,"throw",e)}i(void 0)})})()},u]},p=(e,t,a)=>({input:{key:{typeName:"workspace",name:e},setting:{typeName:"default_namespace_ws",name:""},...t&&{sessionToken:t},...a}})},731707:(e,t,a)=>{"use strict";var n=a(692738);t.default=function(e,t){var a=n.useRef();n.useEffect(function(){a.current=e},[e]),n.useEffect(function(){if(null!==t){var e=setInterval(function(){return a.current.apply(a,arguments)},t);return function(){return clearInterval(e)}}},[t])}},742996:(e,t,a)=>{"use strict";a.d(t,{P:()=>o,f:()=>s});var n=a(160603),r=a(721698);function i(e,t,a,n,r,i,s){try{var o=e[i](s),l=o.value}catch(e){a(e);return}o.done?t(l):Promise.resolve(l).then(n,r)}let s=e=>["files",e],o=(e,t)=>(0,n.useInfiniteQuery)(s(e),({pageParam:t})=>{var a;return(a=function*(){return(0,r.t)({...e,page_token:t})},function(){var e=this,t=arguments;return new Promise(function(n,r){var s=a.apply(e,t);function o(e){i(s,n,r,o,l,"next",e)}function l(e){i(s,n,r,o,l,"throw",e)}o(void 0)})})()},{getNextPageParam:e=>e.next_page_token,refetchOnMount:"always",...t})},756340:(e,t,a)=>{"use strict";if(a.d(t,{h:()=>r}),13057==a.j)var n=a(441535);let r=()=>(0,n.W)("databricks.fe.jaws.enableMatrixViewLazyLoadTaskRuns",!1)},764464:(e,t,a)=>{for(var n=a(470109),r="u"<typeof window?a.g:window,i=["moz","webkit"],s="AnimationFrame",o=r["request"+s],l=r["cancel"+s]||r["cancelRequest"+s],u=0;!o&&u<i.length;u++)o=r[i[u]+"Request"+s],l=r[i[u]+"Cancel"+s]||r[i[u]+"CancelRequest"+s];if(!o||!l){var d=0,c=0,m=[],p=1e3/60;o=function(e){if(0===m.length){var t=n(),a=Math.max(0,p-(t-d));d=a+t,setTimeout(function(){var e=m.slice(0);m.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(d)}catch(e){setTimeout(function(){throw e},0)}},Math.round(a))}return m.push({handle:++c,callback:e,cancelled:!1}),c},l=function(e){for(var t=0;t<m.length;t++)m[t].handle===e&&(m[t].cancelled=!0)}}e.exports=function(e){return o.call(r,e)},e.exports.cancel=function(){l.apply(r,arguments)},e.exports.polyfill=function(e){e||(e=r),e.requestAnimationFrame=o,e.cancelAnimationFrame=l}},776944:(e,t,a)=>{"use strict";a.d(t,{Ob:()=>s,fx:()=>i,zO:()=>r});var n=a(692738),r=n.isValidElement;function i(e,t,a){if(!r(e))return t;return n.cloneElement(e,"function"==typeof a?a():a)}function s(e,t){return i(e,e,t)}},796775:(e,t,a)=>{"use strict";a.d(t,{d:()=>i,m:()=>r});var n=a(988759);let r=(0,a(696514).fH)("PersonaNav::ActivePersona"),i=(0,n.g)("Nav::openAppSwitcher")},800205:(e,t,a)=>{"use strict";a.d(t,{h:()=>u});var n=a(441535),r=a(733337),i=a(660618),s=a(595615),o=a(302118);function l(e,t,a){return(0,s.AO)({queryKey:["data_explorer_samples_schema",t],queryFn:()=>(0,r.nr)(`${i.bY}/schemas/${encodeURIComponent(e)}.${encodeURIComponent(t)}?include_browse=true`),...a})}function u(e){var t;let a=(0,n.W)("databricks.fe.marketplace.enableNewUCBasedSamplesUI",!1),r=(t={enabled:e===i.lx&&a,keepPreviousData:!0},(0,s.AO)({queryKey:["data_explorer_samples_catalog_details"],queryFn:function(){return o.k.getCatalogDetails(i.lx)},...t})),u=l(e,"nyctaxi",{enabled:e===i.lx&&a,keepPreviousData:!0}),d=l(e,"tpch",{enabled:e===i.lx&&a,keepPreviousData:!0});return e===i.lx&&r.isSuccess&&u.isSuccess&&d.isSuccess&&a}},802472:(e,t,a)=>{"use strict";a.d(t,{P:()=>r,l:()=>n});let n="mfe-react-portals";function r(e){let t=e+"-mfe-root",a=e+"-mfe-react-root",r=e+"-mfe-notifications-portal-fallback",i=`
  <div id="${t}" class="mfe-root ${e}-ui-container">
    <div id="${n}"></div>
    <div id="${a}"></div>
    <div id="${r}"></div>
  </div>
  `.trim();return{mfeRootId:t,mfeReactRootId:a,mfeNotificationsPortalId:r,mfeShadowRootHtml:i}}},802627:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function s(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.FD)("g",{fill:"currentColor",clipPath:"url(#DotsCircleIcon_svg__a)",children:[(0,n.Y)("path",{d:"M6 8a.75.75 0 1 1-1.5 0A.75.75 0 0 1 6 8M8 8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M10.75 8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"}),(0,n.Y)("path",{fillRule:"evenodd",d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0",clipRule:"evenodd"})]}),(0,n.Y)("defs",{children:(0,n.Y)("clipPath",{children:(0,n.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let o=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:s}));o.displayName="DotsCircleIcon";let l=o},807091:(e,t,a)=>{"use strict";a.d(t,{QW:()=>l,dx:()=>o});var n=a(686560);if(/^(13057|85670)$/.test(a.j))var r=a(641760);if(/^(13057|85670)$/.test(a.j))var i=a(371303);var s=a(889885);function o(){return(0,s.Nm)("enablePipelinesUi",!1,()=>(0,n.d)("enablePipelinesUi",!1))}function l(){return(0,i.sT)("databricks.fe.enablePipelinesUnityCatalogSelection",!1)||(0,i.sT)("databricks.deltapipelines.isUCCatalogEnabled",!1)||(0,r.ei)()}},807633:(e,t,a)=>{"use strict";a.d(t,{O:()=>r,W:()=>i});var n,r=((n={}).INTERNAL_ERROR="INTERNAL_ERROR",n.BAD_REQUEST="BAD_REQUEST",n.PERMISSION_DENIED="PERMISSION_DENIED",n.UNAUTHENTICATED="UNAUTHENTICATED",n.NOT_FOUND="NOT_FOUND",n.ALREADY_EXISTS="ALREADY_EXISTS",n.RESOURCE_CONFLICT="RESOURCE_CONFLICT",n);let i=e=>Object.values(r).includes(e)},811362:(e,t,a)=>{"use strict";a.d(t,{BV:()=>C,Ig:()=>A,Jm:()=>v,KK:()=>N,RB:()=>R,RI:()=>k,U8:()=>M,XV:()=>E,Yh:()=>x,dD:()=>P,eF:()=>S,g4:()=>I,qE:()=>_,vQ:()=>w,z3:()=>D,z9:()=>T});var n,r,i,s,o,l,u,d,c,m,p,f,g,b,y,h,S=((n={}).NO_RESTRICTION="NO_RESTRICTION",n.CSP_MISMATCH="CSP_MISMATCH",n),T=((r={}).NOT_ELIGIBLE="NOT_ELIGIBLE",r.NOT_CREATED="NOT_CREATED",r.CREATED="CREATED",r),v=((i={}).APPROVED="APPROVED",i.REJECTED="REJECTED",i.PENDING="PENDING",i),I=((s={}).AUTO_APPROVED="AUTO_APPROVED",s.BACKFILLED="BACKFILLED",s),E=((o={}).APPROVED="APPROVED",o.REJECTED="REJECTED",o.PENDING="PENDING",o),A=((l={}).AUTO_APPROVED="AUTO_APPROVED",l),k=((u={}).ACTIVE="ACTIVE",u.CATALOG_ALIAS_CONFLICT="CATALOG_ALIAS_CONFLICT",u.PERMISSION_DENIED="PERMISSION_DENIED",u),R=((d={}).ACTIVE="ACTIVE",d.PROVISIONING="PROVISIONING",d.FAILED="FAILED",d.DELETED="DELETED",d),C=((c={}).TABLE="TABLE",c.NOTEBOOK="NOTEBOOK_FILE",c.VOLUME="VOLUME",c.VIEW="VIEW",c.FOREIGN_TABLE="FOREIGN_TABLE",c.MODEL="MODEL",c.JAR="JAR_ANALYSIS",c),D=((m={}).FULL_ACCESS="FULL_ACCESS",m.RESTRICTED_ACCESS="RESTRICTED_ACCESS",m.PRIVATE_ACCESS_ONLY="PRIVATE_ACCESS_ONLY",m),N=((p={}).FQDN="FQDN",p),M=((f={}).TCP="TCP",f),P=((g={}).NONE="NONE",g.HIPAA="HIPAA",g.PCI_DSS="PCI_DSS",g.FEDRAMP_MODERATE="FEDRAMP_MODERATE",g.IRAP_PROTECTED="IRAP_PROTECTED",g),w=((b={}).BLOCKED="BLOCKED",b.INTERNAL_ERROR="INTERNAL_ERROR",b.PENDING="PENDING",b.QUEUED="QUEUED",b.RUNNING="RUNNING",b.SKIPPED="SKIPPED",b.TERMINATED="TERMINATED",b.TERMINATING="TERMINATING",b.WAITING_FOR_RETRY="WAITING_FOR_RETRY",b),_=((y={}).RUN_RESULT_STATE_UNSPECIFIED="RUN_RESULT_STATE_UNSPECIFIED",y.CANCELED="CANCELED",y.EVICTED="EVICTED",y.EXCLUDED="EXCLUDED",y.FAILED="FAILED",y.MAXIMUM_CONCURRENT_RUNS_REACHED="MAXIMUM_CONCURRENT_RUNS_REACHED",y.SUCCESS="SUCCESS",y.SUCCESS_WITH_FAILURES="SUCCESS_WITH_FAILURES",y.SUCCESS_WITH_SKIPPED_CELLS="SUCCESS_WITH_SKIPPED_CELLS",y.TIMEDOUT="TIMEDOUT",y.UPSTREAM_CANCELED="UPSTREAM_CANCELED",y.UPSTREAM_EVICTED="UPSTREAM_EVICTED",y.UPSTREAM_FAILED="UPSTREAM_FAILED",y),x=((h={}).NOTEBOOK="NOTEBOOK",h.JAR="JAR",h)},814515:(e,t,a)=>{"use strict";a.d(t,{Y:()=>i});var n=a(692738),r=a(274269);let i=({action:e,onActionCompleted:t})=>{let[a,{open:i,close:s}]=(0,r.F)(!1),[o,l]=(0,n.useState)(null),[u,{open:d,close:c}]=(0,r.F)(!1);return{isLoading:a,error:o,visible:u,open:d,close:c,trigger:()=>{i(),l(null),e().then(()=>{t?.(),c()}).catch(e=>{l(e)}).finally(()=>{s()})}}}},822369:(e,t,a)=>{"use strict";a.d(t,{o:()=>i});var n=a(13451),r=a(889885);let i=()=>(0,r.Nm)("enableJobAclsConfig",()=>(0,n.e)("enableJobAclsConfig",!1))},833908:(e,t,a)=>{"use strict";a.d(t,{Ag:()=>S,I9:()=>I,Xo:()=>E,h0:()=>T,zw:()=>v});var n=a(452137),r=a.n(n),i=a(323598),s=a.n(i),o=a(974657),l=a.n(o),u=a(692738),d=a(160603),c=a(927239),m=a(978679),p=a(594390),f=a(595615),g=a(302118);function b(e,t,a,n,r,i,s){try{var o=e[i](s),l=o.value}catch(e){a(e);return}o.done?t(l):Promise.resolve(l).then(n,r)}function y(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function s(e){b(i,n,r,s,o,"next",e)}function o(e){b(i,n,r,s,o,"throw",e)}s(void 0)})}}function h(){return(0,u.useCallback)(({url:e,pageSize:t=1e3,nextPageToken:a})=>({queryKey:[c.Fj,e],queryFn:()=>y(function*(){r()(void 0!==e,"'url' must be set");let{files:n}=yield g.k.listVolumeFiles(e,t,a);return l()(n||[],[e=>!e.is_dir,e=>e.name])})()}),[])}function S({url:e,pageSize:t,enabled:a,refetchOnMount:n}){return(0,d.useInfiniteQuery)({queryKey:[c.Fj,e,t],queryFn:({pageParam:a})=>y(function*(){r()(void 0!==e,"'url' must be set"),r()(void 0!==t,"'pageSize' must be set");let{files:n,next_page_token:i}=yield g.k.listVolumeFiles(e,t,a);return{files:n,nextPageToken:i}})(),getNextPageParam:e=>e.nextPageToken,enabled:a,refetchOnMount:n})}function T({fetchUntilDataLength:e,dataAcessor:t,useInfiniteQuery:a}){let{hasNextPage:n,isFetching:r,fetchNextPage:i,data:o,isLoading:l,...d}=a(),c=(0,u.useMemo)(()=>o?.pages.flatMap(e=>s()(e,t))?.filter(m.zz)||[],[o?.pages,t]),p=n&&c.length<(e??0)&&!r;return(0,u.useEffect)(()=>{p&&i()},[i,p]),{hasNextPage:n,isFetching:r,fetchNextPage:i,data:o,flatData:c,totalDataLength:c.length,isLoading:l||!!p,...d}}function v(e,t){let a=h();return(0,f.AO)({...a(e),...t})}function I(e,t){let a=(0,u.useCallback)(({url:e,pageSize:t=1e3})=>({queryKey:[c.Zl,e],queryFn:()=>y(function*(){r()(void 0!==e,"'url' must be set");let a=yield g.k.listAllVolumeFiles(e,t);return l()(a||[],[e=>!e.is_dir,e=>e.name])})()}),[]);return(0,f.AO)({...a(e),...t})}function E(e){let t=h();return(0,p.V)({queries:e.map(({args:e,options:a})=>({...a,...t(e)}))})}},840805:(e,t,a)=>{"use strict";a.d(t,{o:()=>u,y:()=>d});var n=a(692738),r=a(594390),i=a(595615),s=a(302118);function o(e,t,a,n,r,i,s){try{var o=e[i](s),l=o.value}catch(e){a(e);return}o.done?t(l):Promise.resolve(l).then(n,r)}function l(){return(0,n.useCallback)(({catalog:e,schema:t,isPostgres:a})=>({queryKey:["data_explorer_models",e,t,a],queryFn:()=>{var a;return(a=function*(){return(yield s.k.getModels(e,t)).registered_models??[]},function(){var e=this,t=arguments;return new Promise(function(n,r){var i=a.apply(e,t);function s(e){o(i,n,r,s,l,"next",e)}function l(e){o(i,n,r,s,l,"throw",e)}s(void 0)})})()}}),[])}function u(e,t){let a=l();return(0,i.AO)({...a(e),...t})}function d(e){let t=l();return(0,r.V)({queries:e.map(({args:e,options:a})=>({...a,...t(e)}))})}},842972:(e,t,a)=>{"use strict";a.d(t,{m:()=>r});var n,r=((n={}).CONFIGURATION="configuration",n.NOTEBOOKS="notebooks",n.LIBRARIES="libraries",n.SPARK_UI="sparkUi",n.DRIVER_LOGS="driverLogs",n.METRICS="metrics",n.SPARK_CLUSTER_UI="sparkClusterUi",n.APPS="apps",n.EVENTS="events",n)},847446:(e,t,a)=>{"use strict";a.a(e,async(e,n)=>{try{a.r(t),a.d(t,{useModal:()=>l});var r=a(342411),i=a(382563),s=a(401600),o=e([i]);function l(){let e=(0,r.tz)();return(0,i.hS)({resourceType:"job",SearchComponent:s.j,title:e.formatMessage({id:"iiGY7p",defaultMessage:"Add existing job"}),comboboxLabel:e.formatMessage({id:"/f+Spt",defaultMessage:"Select job"}),viewResourceLabel:e.formatMessage({id:"IaP5M4",defaultMessage:"View job"}),deploymentOptionsLabel:e.formatMessage({id:"fVOmGB",defaultMessage:"When should the existing job be updated?"}),bindOptionDescription:(0,r.zR)({id:"8TlAWS",defaultMessage:"The job is updated when you deploy to {target}."}),duplicateDescription:(0,r.zR)({id:"9fdUfn",defaultMessage:"Imports the job definition and source files without binding them to a deployment target. You can manually bind it later. {learnMoreLink}"})})}i=(o.then?(await o)():o)[0],n()}catch(e){n(e)}})},884028:(e,t,a)=>{"use strict";if(a.d(t,{Fn:()=>u,iu:()=>l}),13057==a.j)var n=a(610435);var r=a(692738);if(13057==a.j)var i=a(394244);if(13057==a.j)var s=a(203796);let o=r.createContext({addOnSuccess:()=>{},removeOnSuccess:()=>{},notifyOnSuccess:()=>{}});function l({children:e}){let[t]=(0,s.n)((0,i.ur)()),[a,u]=(0,r.useState)([]),d=(0,r.useCallback)(e=>{u(t=>[...t,e])},[]),c=(0,r.useCallback)(e=>{u(t=>t.filter(t=>t!==e))},[]),m=(0,r.useCallback)(e=>{for(let n of a)n(e,t)},[a,t]);return(0,n.Y)(o.Provider,{value:{addOnSuccess:d,removeOnSuccess:c,notifyOnSuccess:m},children:e})}function u(){return(0,r.useContext)(o)}},884532:(e,t,a)=>{"use strict";a.d(t,{Gk:()=>u,J3:()=>i,Pc:()=>o,ob:()=>s});var n=a(889885),r=a(729591);let i=()=>(0,n.FI)("user")??"",s=()=>o(i().split("@")[0]),o=e=>{let t=e.toLowerCase().split("").map(l).join("");return(t=t.replace(/_+/g,"_")).replace(/^_+|_+$/g,"")},l=e=>/[a-z0-9]/i.test(e)?e:"_",u=()=>{let e=(0,n.FI)("currentWorkspaceId"),{data:t,loading:a}=(0,r.Xe)(e);return{defaultCatalog:t?.settingspolicyserviceGetSettingRestWithoutSettingName?.setting?.value?.stringVal?.value||"hive_metastore",loading:a}}},893736:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function s(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.667 6.575c1.376.452 1.376 2.398 0 2.85l-2.472.813a1.5 1.5 0 0 0-.957.957l-.813 2.472c-.452 1.376-2.398 1.376-2.85 0l-.813-2.472a1.5 1.5 0 0 0-.956-.957l-2.473-.813c-1.376-.452-1.376-2.398 0-2.85l2.473-.813a1.5 1.5 0 0 0 .956-.956l.813-2.473c.452-1.376 2.398-1.376 2.85 0l.813 2.473a1.5 1.5 0 0 0 .957.956z",clipRule:"evenodd"})})}let o=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:s}));o.displayName="SparkleFillIcon";let l=o},904995:(e,t,a)=>{"use strict";a.d(t,{D:()=>n});let n={getDebounceTimeout:()=>500,getThrottleTimeout:()=>500,WORKSPACE_RESTRICTION_ENABLED_BY_DEFAULT:!0,getDefaultBudgetPolicyPageSize:()=>20,getFetchAllPageSize:()=>1202,getFetchAllDisplayPageSize:()=>20}},915413:(e,t,a)=>{"use strict";a.d(t,{UE:()=>s,a4:()=>i,uf:()=>r});var n=a(692738);let r={sortingForbidden:!1,textSearchForbidden:!1,tagsForbidden:!1,favoritesForbidden:!1,runAsForbidden:!1,pipelineTypeForbidden:!1,systemManagedTypeForbidden:!1,healthForbidden:!1},i=(0,n.createContext)(null),s=(0,n.createContext)(null)},929530:(e,t,a)=>{"use strict";a.d(t,{Bd:()=>c,hL:()=>d,sy:()=>l});var n=a(34116),r=a.n(n),i=a(371964),s=a(30472),o=a(953902);let l=(0,i.vt)()(e=>({unsyncedResourceIds:{},scheduleSync:(t,a)=>e(e=>({unsyncedResourceIds:{...e.unsyncedResourceIds,[t]:{status:"scheduled",shouldReconnectRunner:a}}})),runSync:t=>e(e=>({unsyncedResourceIds:{...e.unsyncedResourceIds,[t]:{status:"in-progress"}}})),completeSync:t=>e(e=>{if(e.unsyncedResourceIds[t]?.status!=="in-progress")return e;let{[t]:a,...n}=e.unsyncedResourceIds;return{unsyncedResourceIds:n}}),failSync:(t,a,n)=>e(e=>({unsyncedResourceIds:{...e.unsyncedResourceIds,[t]:{status:"error",error:a,yamlFileURL:n}}}))})),u={unsyncedResourceIds:{},scheduleSync:r(),runSync:r(),completeSync:r(),failSync:r()},d=(0,o.j7)(s.Su,{newHook:function(e){return c(t=>t.unsyncedResourceIds[e]?.status==="error")},oldHook:()=>!1}),c=(0,o.j7)(s.Su,{newHook:function(e){return l(e)},oldHook:e=>e(u)})},960369:(e,t,a)=>{"use strict";a.d(t,{FK:()=>A,Kt:()=>k,Mt:()=>R,pK:()=>E});var n,r=a(610435),i=a(692738),s=a(497895),o=a(372868),l=a(749935),u=a(566512),d=a(79128),c=a(79570),m=a(342411),p=a(141078),f=a(50470),g=a(540890),b=a(305939),y=a(929117),h=a(205048),S=a(524013),T=a(707076);function v(e,t,a,n,r,i,s){try{var o=e[i](s),l=o.value}catch(e){a(e);return}o.done?t(l):Promise.resolve(l).then(n,r)}function I(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function s(e){v(i,n,r,s,o,"next",e)}function o(e){v(i,n,r,s,o,"throw",e)}s(void 0)})}}let E="non-favorited-asset-indicator";var A=((n={}).UNKNOWN="unknown",n.METADATA_PREVIEW="metadata_preview",n);let k=({isFavorite:e=!0,grayscale:t=!1,title:a})=>{let{theme:n}=(0,s.wn)(),i=t?n.colors.textSecondary:e?n.colors.tagLemon:void 0;return(0,r.Y)("div",{css:{display:"flex",justifyContent:"center",alignItems:"center",color:i},children:e?(0,r.Y)(o.A,{title:a}):(0,r.Y)(l.A,{title:a})})},R=e=>{let{asset:t}=e;return(0,r.Y)(C,{...e},`${t.type}:${t.id}`)},C=({asset:e,disabled:t=!1,tooltipTitle:a,preloadedAssetFavoriteStatus:n,tooltipSide:s,tooltipAlign:o,size:l,source:v,onBeforeChange:A,onAfterChange:R,showLoadingIndicator:C=!1,showPlaceholder:N,overrideCreateFavoriteAsset:M,overrideDeleteFavoriteAsset:P,componentIdSource:w="unknown",grayscale:_})=>{let x=(0,m.tz)(),[O,L]=(0,u.o)(),$=(0,S.df)(),F=(0,T.MH)(),[U,j]=(0,i.useState)(n);(0,i.useEffect)(()=>{j(n)},[n]);let{loading:J}=(0,p.IT)(f.h,{skip:void 0!==n||!e.id||!F,variables:e,fetchPolicy:"network-only",onCompleted:e=>j(e.userActivityInfo.isFavorite)}),Y=(0,g.s)(),B=(0,b.V)(),[q,{loading:W}]=M??Y,[z,{loading:V}]=P??B;if(!F)return null;if(J){let e=y.z.FAVORITE_ASSET_STATUS_LOADING;return N?(0,r.Y)(d.$n,{componentId:"favorite_asset_indicator_placeholder",icon:(0,r.Y)(k,{isFavorite:!1,grayscale:_}),size:l,"aria-label":x.formatMessage(D.loading),disabled:!0,loadingDescription:e,loading:!0}):(0,r.Y)(h.R,{loading:!0,description:e})}if(void 0===U)return null;let G=C&&(W||V),Q="unknown"===w?"codegen_web-shared_src_favorites_favoriteassetindicator.tsx_125":`favorite_asset_indicator.${w}`;return(0,r.FD)(r.FK,{children:[L,(0,r.Y)(c.m,{side:s,align:o,content:a??x.formatMessage(function(e,t){if(t)return e?D.removing:D.adding;return e?D.remove:D.add}(U,G)),componentId:"favorite_asset_indicator_tooltip",children:(0,r.Y)(d.$n,{componentId:Q,icon:(0,r.Y)(k,{isFavorite:U,grayscale:_}),size:l,className:U?"favorited-asset-indicator":E,onClick:()=>I(function*(){C||j(!U),$("clientsideEvent",{eventType:"unifiedFavorites",eventName:`${U?"remove":"add"}FavoriteAsset-${e.type}`,source:v});let t=yield I(function*(){try{yield A?.({isFavorite:U});let t=U?(yield z({variables:{input:{asset:e}}})).data?.useractivityDeleteFavoriteAsset:(yield q({variables:{input:{asset:e}}})).data?.useractivityCreateFavoriteAsset;return yield R?.(t?.apiError===null),t?.apiError===null}catch{return!1}})();C&&t&&j(!U),t||(j(U),O.error({message:x.formatMessage(D.updateError)}))})(),"aria-pressed":U,"aria-label":x.formatMessage(D.favorite),"data-testid":`${e.type}-${e.id}-favorite-asset-indicator`,loading:G,disabled:t})})]})},D=(0,m.YK)({remove:{id:"yWsf3y",defaultMessage:"Remove from favorites"},add:{id:"ESErrJ",defaultMessage:"Add to favorites"},favorite:{id:"y/XUvZ",defaultMessage:"Favorite"},loading:{id:"15I9Og",defaultMessage:"Loading favorite"},removing:{id:"2g8hHR",defaultMessage:"Removing from favorites"},adding:{id:"dwaN1I",defaultMessage:"Adding to favorites"},updateError:{id:"bG1jLl",defaultMessage:"Failed to update favorites. Please try again."}})},962926:(e,t,a)=>{"use strict";a.d(t,{a:()=>i});var n=a(993533),r=a(846665);function i(e){if(!e)return n.Pvb.CAN_VIEW;switch(e){case n.ytH.CAN_MANAGE:case n.ytH.CAN_MANAGE_RUN:return n.Pvb.CAN_MANAGE;case n.ytH.IS_OWNER:return n.Pvb.IS_OWNER;case n.ytH.CAN_VIEW:case n.ytH.PERMISSION_LEVEL_UNSPECIFIED:return n.Pvb.CAN_VIEW;default:throw(0,r.dr)(e,"Unknown permission level")}}},980355:(e,t,a)=>{"use strict";a.d(t,{L:()=>i,j:()=>s});var n=a(692738),r=a(915413);let i=()=>{let e=(0,n.useContext)(r.a4);if(!e)throw Error("useJobsListContext must be used within a <JobsListContext.Provider>");return e};function s({aclFilter:e,textFilter:t,tagsFilter:a,sortBy:n,pagination:i,pageToken:o,onlyFavorites:l,runAsFilter:u,assetTypeFilter:d,pipelineTypeFilter:c,systemManagedTypeFilter:m,healthFilter:p}){let f=r.uf,g=e=>{(f={...f,...e}).sortingForbidden&&(n=null),f.textSearchForbidden&&(t={current:"",previous:""}),f.tagsForbidden&&(a=new Map),f.favoritesForbidden&&(l=null),f.runAsForbidden&&(u=new Set),f.pipelineTypeForbidden&&(c=new Set),f.systemManagedTypeForbidden&&(m=new Set),f.healthForbidden&&(p=new Set)};return l&&(e=null,g({sortingForbidden:!0,textSearchForbidden:!0,tagsForbidden:!0,runAsForbidden:!0,pipelineTypeForbidden:!0,systemManagedTypeForbidden:!0,healthForbidden:!0})),u.size>0&&g({textSearchForbidden:!0,tagsForbidden:!0,favoritesForbidden:!0,healthForbidden:!0}),a.size>0&&g({textSearchForbidden:!0,favoritesForbidden:!0,runAsForbidden:!0,healthForbidden:!0}),t.current&&g({tagsForbidden:!0,favoritesForbidden:!0,runAsForbidden:!0,healthForbidden:!0}),"pipelines"!==d&&g({pipelineTypeForbidden:!0}),c.size>0&&g({favoritesForbidden:!0}),g("system_managed"===d?{favoritesForbidden:!0}:{systemManagedTypeForbidden:!0}),p.size>0&&g({favoritesForbidden:!0,textSearchForbidden:!0,tagsForbidden:!0,runAsForbidden:!0}),{aclFilter:e,textFilter:t,tagsFilter:a,sortBy:n,pagination:i,pageToken:o,onlyFavorites:l,runAsFilter:u,stateRestrictions:f,assetTypeFilter:d,pipelineTypeFilter:c,systemManagedTypeFilter:m,healthFilter:p}}},984519:(e,t,a)=>{"use strict";a.d(t,{c:()=>n});let n=(0,a(696514).fH)("Jaws::CloneJob")},984568:(e,t,a)=>{"use strict";a.d(t,{Ck:()=>Y,Go:()=>en,I2:()=>eo,IB:()=>E,KW:()=>er,Ks:()=>K,Mc:()=>et,Oj:()=>z,Pt:()=>H,S3:()=>ea,UL:()=>m,VM:()=>h,Vw:()=>W,WQ:()=>p,XP:()=>ee,YC:()=>X,YR:()=>el,Yf:()=>es,_M:()=>g,ax:()=>j,f5:()=>v,gv:()=>F,iD:()=>M,lu:()=>A,pM:()=>Z,q3:()=>q,tc:()=>D,uQ:()=>B,uv:()=>S,zQ:()=>Q});var n=a(141078),r=a(202855),i=a(831358),s=a(287393),o=a(659789),l=a(367295),u=a(239362),d=a(543963),c=a(691515);let m=(0,n.J1)`
  fragment ClusterAttributes on ClusterAttributes {
    name
    kind
    nodeTypeId
    driverNodeTypeId
    sparkVersion
    workloadType {
      clients {
        jobs
        notebooks
      }
    }
    sparkConf {
      key
      value
    }
    sparkEnvVars {
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
      confidentialComputeType
        @includeSafex(name: "databricks.fe.clustercontrols.enableGcpConfidentialCompute", defaultValue: false)
    }
    sshPublicKeys
    customTags {
      key
      value
    }
    clusterLogConf {
      dbfs {
        destination
      }
      s3 {
        destination
        region
        endpoint
        enableEncryption
        encryptionType
        kmsKey
        cannedAcl
      }
      volumes {
        destination
      }
    }
    autoterminationMinutes
    noDriverDaemon
    enableElasticDisk
    diskSpec {
      diskType {
        ebsVolumeType
        azureDiskVolumeType
      }
      diskCount
      diskSize
    }
    source
    initScripts {
      dbfs {
        destination
      }
      s3 {
        destination
        region
        endpoint
        enableEncryption
        encryptionType
        kmsKey
        cannedAcl
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
    isServerless
    hasTableAcls
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
    blueprint {
      id
      name
      policies
      groupId
    }
    singleUser {
      name
    }
    legacyPolicy {
      id
      name
      definition
    }
    enableLocalDiskEncryption
    dataSecurityMode
    accessMode
    runtimeEngine
    enableServerlessCompute
    virtualClusterSize
    useMlRuntime
    isSingleNode
    assignedPrincipal
    budgetPolicyId
    budgetPolicyResolutionResult
    budgetPolicyTags {
      key
      value
    }
    releaseVersion @includeSafex(name: "databricks.fe.clustercontrols.showReleaseVersion", defaultValue: false)
    workerNodeTypeFlexibility {
      alternateNodeTypeIds
      awsContextId
    }
    driverNodeTypeFlexibility {
      alternateNodeTypeIds
      awsContextId
    }
  }
`,p=(0,n.J1)`
  fragment JobPeriodicTrigger on TriggerSettings {
    periodic @include(if: $includePeriodicTrigger) {
      interval
      unit
    }
  }
`,f=(0,n.J1)`
  fragment ClusterClusterAttributes on ClusterClusterAttributes {
    clusterName
    kind
    nodeTypeId
    driverNodeTypeId
    sparkVersion
    workloadType {
      clients {
        jobs
        notebooks
      }
    }
    sparkConf {
      key
      value
    }
    sparkEnvVars {
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
      confidentialComputeType
        @includeSafex(name: "databricks.fe.clustercontrols.enableGcpConfidentialCompute", defaultValue: false)
    }
    sshPublicKeys
    customTags {
      key
      value
    }
    clusterLogConf {
      dbfs {
        destination
      }
      s3 {
        destination
        region
        endpoint
        enableEncryption
        encryptionType
        kmsKey
        cannedAcl
      }
      volumes {
        destination
      }
    }
    autoterminationMinutes
    noDriverDaemon
    enableElasticDisk
    diskSpec {
      diskType {
        ebsVolumeType
        azureDiskVolumeType
      }
      diskCount
      diskSize
    }
    clusterSource
    initScripts {
      dbfs {
        destination
      }
      s3 {
        destination
        region
        endpoint
        enableEncryption
        encryptionType
        kmsKey
        cannedAcl
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
    blueprintId
    singleUserName
    enableLocalDiskEncryption
    dataSecurityMode
    accessMode
    runtimeEngine
    enableServerlessCompute
    virtualClusterSize
    useMlRuntime
    isSingleNode
    assignedPrincipal

    workerNodeTypeFlexibility {
      alternateNodeTypeIds
      awsContextId
    }
    driverNodeTypeFlexibility {
      alternateNodeTypeIds
      awsContextId
    }
  }
`,g=(0,n.J1)`
  fragment ClusterSize on ClusterSize {
    autoscale {
      minWorkers
      maxWorkers
    }
    numWorkers
  }
`,b=(0,n.J1)`
  fragment ClusterClusterSize on ClusterClusterSize {
    autoscale {
      minWorkers
      maxWorkers
    }
    numWorkers
  }
`,y=(0,n.J1)`
  fragment NewClusterDetails on NewCluster {
    attrs {
      ...ClusterAttributes
    }
    size {
      ...ClusterSize
    }
  }
  ${m}
  ${g}
`,h=(0,n.J1)`
  fragment ClusterDetails on ClusterSpec {
    ... on NewCluster {
      ...NewClusterDetails
    }
    ... on ExistingCluster {
      id
      clusterInfo {
        attributes {
          name
          kind
          nodeTypeId
          driverNodeTypeId
          sparkVersion
          enableServerlessCompute
        }
        size {
          ...ClusterSize
        }
        state
        stateMessage
      }
    }
    ... on JobClusterKey {
      key
    }
  }
  ${y}
`,S=(0,n.J1)`
  fragment LightweightNewClusterDetails on NewCluster {
    attrs {
      instancePoolId
      driverInstancePoolId
      nodeTypeId
      driverNodeTypeId
      sparkVersion
      runtimeEngine
      enableServerlessCompute
      virtualClusterSize
      kind
      useMlRuntime
    }
    size {
      autoscale {
        minWorkers
        maxWorkers
      }
      numWorkers
    }
  }
`,T=(0,n.J1)`
  fragment ManagedLibrariesLibrary on ManagedLibrariesLibrary {
    jar
    egg
    pypi {
      package
      repo
    }
    maven {
      coordinates
      repo
      exclusions
    }
    cran {
      package
      repo
    }
    requirements
    whl
  }
`,v=(0,n.J1)`
  fragment JobsNewClusterDetails on JobsClusterSpecNewCluster {
    attrs {
      ...ClusterClusterAttributes
    }
    size {
      ...ClusterClusterSize
    }
  }
  ${f}
  ${b}
`,I=(0,n.J1)`
  fragment JobsClusterDetails on JobsClusterSpec {
    existingClusterId
    clusterInfo {
      attributes {
        name
        nodeTypeId
      }
      state
    }
    libraries {
      ...ManagedLibrariesLibrary
    }
    newCluster {
      ...JobsNewClusterDetails
    }
    jobClusterKey
  }
  ${T}
  ${v}
`,E=(0,n.J1)`
  fragment TaskAction on JobTask {
    ... on JobsJobTask {
      ...JobsAllTasksFragment
    }
    ... on NotebookTask {
      notebookPath
      source
      baseParameters {
        key
        value
      }
      warehouseId
    }
    ... on SparkJarTask {
      jarUri
      mainClassName
      parameters
      runAsRepl
    }
    ... on SparkPythonTask {
      pythonFile
      parameters
      source
    }
    ... on SparkSubmitTask {
      parameters
    }
    ... on ShellCommandTask {
      command
      envVars {
        key
        value
      }
    }
    ... on PipelineTask {
      pipelineId
      dltParameters: parameters {
        fullRefresh
      }
      pipelineTaskParameters @includeSafex(name: "pipeline_parameters", defaultValue: false) {
        key
        value
      }
    }
    ... on RunJobTask {
      jobId
      batchLoadJob @include(if: $includeJobInRunJobTask) {
        settings {
          name
        }
      }
      runJobParameters: parameters {
        ...RunParameters
      }
      jobParameters @include(if: $includeJobParameters) {
        key
        value
      }
    }
    ... on PythonWheelTask {
      entryPoint
      packageName
      parameters
      namedParameters {
        key
        value
      }
    }
    ... on DbtTask {
      projectDirectory
      catalog
      commands
      schema
      warehouseId
      profilesDirectory
      source @include(if: $includeSourceInDbtAndSqlFile)
    }
    ... on SqlTask {
      alert {
        alertId
        pauseSubscriptions @include(if: $includeSubscriptions)
        subscriptions @include(if: $includeSubscriptions) {
          userName
          destinationId
        }
      }
      dashboard {
        dashboardId
        pauseSubscriptions @include(if: $includeSubscriptions)
        subscriptions @include(if: $includeSubscriptions) {
          userName
          destinationId
        }
        customSubject @include(if: $includeSubscriptions)
      }
      query {
        queryId
      }
      file {
        path
        source @include(if: $includeSourceInDbtAndSqlFile)
      }
      params: parameters {
        key
        value
      }
      warehouseId
    }
    ... on ConditionTask {
      op
      left
      right
    }
  }
  ${r.m}
  ${o.M}
`,A=(0,n.J1)`
  fragment TaskDependency on TaskDependency {
    taskKey
    outcome @include(if: $includeTaskDependencyOutcome)
  }
`,k=(0,n.J1)`
  fragment RetryPolicy on JobRetryPolicy {
    maxRetries
    minRetryIntervalMillis
    retryOnTimeout
    disableAutoOptimization
  }
`,R=(0,n.J1)`
  fragment EmailNotifications on JobEmailNotifications {
    onStart
    onFailure
    onSuccess
    onDurationWarningThresholdExceeded
    onStreamingBacklogExceeded @include(if: $includeOnStreamingBacklogExceeded)
    alertOnLastAttempt
    noAlertForSkippedRuns
    noAlertForCanceledRuns
  }
`,C=(0,n.J1)`
  fragment LibraryDetails on Library {
    ... on Jar {
      jar
    }
    ... on Egg {
      egg
    }
    ... on PythonPyPi {
      pypi {
        package
        repo
      }
    }
    ... on Maven {
      maven {
        coordinates
        repo
        exclusions
      }
    }
    ... on RCran {
      cran {
        package
        repo
      }
    }
    ... on Requirements {
      requirements
    }
    ... on Wheel {
      whl
    }
  }
`,D=(0,n.J1)`
  fragment JobClusterDetails on JobCluster {
    jobClusterKey
    newCluster {
      attrs {
        ...ClusterAttributes
      }
      size {
        ...ClusterSize
      }
    }
  }
  ${m}
  ${g}
`,N=(0,n.J1)`
  fragment JobTagDetails on JobTag {
    key
    value
  }
`,M=(0,n.J1)`
  fragment JobsJobClusterDetails on JobsJobCluster {
    jobClusterKey
    newCluster {
      ...JobsNewClusterDetails
    }
  }
  ${v}
`,P=(0,n.J1)`
  fragment GitReference on GitReference {
    ... on GitTag {
      gitTag
    }
    ... on GitCommit {
      gitCommit
    }
    ... on GitBranch {
      gitBranch
    }
  }
`,w=(0,n.J1)`
  fragment GitSourceDetails on GitSource {
    gitUrl
    gitProvider
    gitBranch
    gitTag
    gitCommit
    sparseCheckout @includeSafex(name: "databricks.elasticspark.sparseCheckout.enabled", defaultValue: false) {
      patterns
    }
    gitReference {
      ...GitReference
    }
  }
  ${P}
`,_=(0,n.J1)`
  fragment JobWebhookDetails on JobsWebhookNotifications {
    onSuccess {
      id
    }
    onFailure {
      id
    }
    onStart {
      id
    }
    onDurationWarningThresholdExceeded {
      id
    }
    onStreamingBacklogExceeded @include(if: $includeOnStreamingBacklogExceeded) {
      id
    }
  }
`,x=(0,n.J1)`
  fragment NotificationSettingsDetails on JobsNotificationSettings {
    alertOnLastAttempt
    noAlertForCanceledRuns
    noAlertForSkippedRuns
  }
`,O=(0,n.J1)`
  fragment TaskDetails on TaskSettings {
    taskKey
    description
    dependsOn {
      ...TaskDependency
    }
    runIf
    timeoutSeconds
    durationWarningSeconds
    environmentKey
    compute {
      hardwareAccelerator
    }
    health {
      rules {
        metric
        op
        value
      }
    }
    retryPolicy {
      ...RetryPolicy
    }
    emailNotifications {
      ...EmailNotifications
    }
    notificationSettings {
      ...NotificationSettingsDetails
    }
    webhookNotifications
      @includeSafex(name: "databricks.elasticspark.enableJobWebhooksRollout.goc", defaultValue: false) {
      ...JobWebhookDetails
    }
    clusterSpec {
      ...ClusterDetails
    }
    libraries {
      ...LibraryDetails
    }
    task {
      ...TaskAction
    }
    disabled @includeSafex(name: "databricks.fe.jobs.disabled_tasks.schema.enabled", defaultValue: false)
  }

  ${h}
  ${k}
  ${R}
  ${E}
  ${C}
  ${A}
  ${x}
  ${_}
`,L=(0,n.J1)`
  fragment ForEachManualBridge on JobTask {
    ... on JobsJobTask {
      forEachTask {
        manualGraphQlTaskSettingsBridge {
          ...TaskDetails
        }
      }
    }
  }

  ${O}
`,$=(0,n.J1)`
  fragment JobEnvironment on JobsJobEnvironment {
    environmentKey
    spec {
      client
      environmentVersion
      dependencies
      jarDependencies
      javaDependencies
      baseEnvironment
    }
  }
`,F=(0,n.J1)`
  fragment JobConfiguration on JobSettings {
    name
    ...JobDescription
    parentPath @includeSafex(name: "databricks.fe.jaws.enableWorkspaceObjectPathInfo", defaultValue: false)
    budgetPolicyId
      @includeSafex(name: "databricks.elasticspark.budgetpolicies.enableBudgetPoliciesInJobs", defaultValue: false)
    usagePolicyId
    schedule {
      timezoneId
      quartzCronExpression
      pauseStatus
      sqlCondition @includeSafex(name: "sql_cond_triggers", defaultValue: false) {
        sqlQueryId
        warehouseId
      }
    }
    trigger {
      fileArrival {
        url
        minTimeBetweenTriggersSeconds
        waitAfterLastChangeSeconds
      }
      tableUpdate {
        tableNames
        condition
        minTimeBetweenTriggersSeconds
        waitAfterLastChangeSeconds
      }
      model @includeSafex(name: "databricks.fe.jaws.enableModelTriggerUI", defaultValue: false) {
        securableName
        aliases
        condition
        minTimeBetweenTriggersSeconds
        waitAfterLastChangeSeconds
      }
      sqlCondition @includeSafex(name: "sql_cond_triggers", defaultValue: false) {
        sqlQueryId
        warehouseId
      }
      ...JobPeriodicTrigger
      pauseStatus
    }
    continuous {
      pauseStatus
      taskRetryMode @includeSafex(name: "databricks.fe.jaws.enableContinuousTriggerAdvanced", defaultValue: false)
    }
    queue {
      enabled
      maxQueueTime
    }
    emailNotifications {
      ...EmailNotifications
    }
    notificationSettings {
      ...NotificationSettingsDetails
    }
    maxConcurrentRuns
    timeoutSeconds
    durationWarningSeconds
    health {
      rules {
        metric
        op
        value
      }
    }
    retryPolicy {
      ...RetryPolicy
    }
    clusterSpec {
      ...ClusterDetails
    }
    libraries {
      ...LibraryDetails
    }
    task {
      ...TaskAction
      ...ForEachManualBridge
    }
    tasks {
      ...TaskDetails
      task {
        ...ForEachManualBridge
      }
    }
    jobClusters {
      ...JobClusterDetails
    }
    gitSource {
      ...GitSourceDetails
    }
    tags {
      ...JobTagDetails
    }
    webhookNotifications {
      ...JobWebhookDetails
    }
    parameters @include(if: $includeJobParameters) {
      name
      default
    }
    health {
      rules {
        metric
        op
        value
      }
    }
    editMode
    deployment {
      kind
      metadataFilePath
    }
    environments {
      ...JobEnvironment
    }
    performanceTarget
  }

  ${O}
  ${p}
  ${D}
  ${w}
  ${N}
  ${_}
  ${s.aZ}
  ${L}
  ${$}
`,U=(0,n.J1)`
  fragment RunJobSettings on JobSettings {
    name
    tasks {
      taskKey
      task {
        ...TaskAction
        ... on JobsJobTask {
          forEachTask {
            manualGraphQlTaskSettingsBridge {
              taskKey
              task {
                ...TaskAction
              }
            }
          }
        }
      }
    }
    parameters @include(if: $includeJobParameters) {
      name
      default
    }
  }

  ${E}
`,j=(0,n.J1)`
  fragment JobTriggerState on Job {
    triggerState @include(if: $includeTriggerState) {
      periodic {
        nextRunTime
      }
    }
  }
`,J=(0,n.J1)`
  fragment JobConfigIdentityInfo on Job {
    id
    creatorUser {
      ...RichUserData
    }
    creatorPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
      ...AclPrincipalData
    }
    runAsUser {
      ...RichUserData
    }
    runAsPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
      ...AclPrincipalData
    }
    grants {
      permission
      aclPath
      user {
        ...RichUserData
      }
      aclPrincipal {
        ...AclPrincipalData
      }
    }
  }
  ${i.j}
  ${i.E}
`,Y=(0,n.J1)`
  query JobConfig(
    $jobId: ID!
    $useApi21: Boolean
    $includeSubscriptions: Boolean!
    $includeJobInRunJobTask: Boolean = false
    $includeJobParameters: Boolean = false
    $includeTaskDependencyOutcome: Boolean = false
    $includeTriggerState: Boolean = false
    $includePeriodicTrigger: Boolean = false
    $includeOnStreamingBacklogExceeded: Boolean = false
    $includeSourceInDbtAndSqlFile: Boolean = false
  ) @component(name: "Workflows.Orchestration.Other") {
    job(id: $jobId, useApi21: $useApi21, includeAcls: true, includeTriggerState: $includeTriggerState) {
      id
      untouched
      lastUpdatedTime
      managedBy @includeSafex(name: "databricks.fe.jaws.enableManagedByField", defaultValue: false)
      creator {
        id
        name
      }
      settings {
        ...JobConfiguration
      }
      links @includeSafex(name: "databricks.elasticspark.enableLinksUI", defaultValue: false) {
        model {
          catalog
          schema
          name
        }
      }
      effectiveBudgetPolicyId
        @includeSafex(name: "databricks.elasticspark.budgetpolicies.enableBudgetPoliciesInJobs", defaultValue: false)
      effectiveUsagePolicyId
        @includeSafex(name: "databricks.elasticspark.budgetpolicies.enableUsagePoliciesInJobs", defaultValue: false)
      permission
      jobType
      userActivityInfo @includeSafex(name: "databricks.fe.search.enableUserActivity", defaultValue: false) {
        assetType
        assetId
        isFavorite
      }
      ...JobConfigRunAs
      ...JobConfigIdentityInfo
      ...JobTriggerState
    }
  }

  ${F}
  ${s.fg}
  ${j}
  ${J}
`;function B(e){return{query:Y,variables:{jobId:e,useApi21:!0,...(0,l.L)()}}}let q=(0,n.J1)`
  query RunJobConfig(
    $jobId: ID!
    $includeSubscriptions: Boolean = false
    $includeJobInRunJobTask: Boolean = false
    $includeJobParameters: Boolean = false
    $includeSourceInDbtAndSqlFile: Boolean = false
  ) @component(name: "Workflows.Orchestration.Other") {
    job(id: $jobId, useApi21: true) {
      id
      settings {
        ...RunJobSettings
      }
    }
  }

  ${U}
`,W=(0,n.J1)`
  query RunJobAndTriggerConfig(
    $jobId: ID!
    $includeSubscriptions: Boolean = false
    $includeJobInRunJobTask: Boolean = false
    $includeJobParameters: Boolean = false
    $includeSourceInDbtAndSqlFile: Boolean = false
    $includePeriodicTrigger: Boolean = false
  ) @component(name: "Workflows.Orchestration.Other") {
    job(id: $jobId, useApi21: true) {
      id
      settings {
        ...RunJobSettings
        trigger {
          fileArrival {
            url
            minTimeBetweenTriggersSeconds
            waitAfterLastChangeSeconds
          }
          tableUpdate {
            tableNames
            condition
            minTimeBetweenTriggersSeconds
            waitAfterLastChangeSeconds
          }
          model @includeSafex(name: "databricks.fe.jaws.enableModelTriggerUI", defaultValue: false) {
            securableName
            aliases
            condition
            minTimeBetweenTriggersSeconds
            waitAfterLastChangeSeconds
          }
          sqlCondition @includeSafex(name: "sql_cond_triggers", defaultValue: false) {
            sqlQueryId
            warehouseId
          }
          ...JobPeriodicTrigger
          pauseStatus
        }
      }
    }
  }

  ${U}
  ${p}
`,z=(0,n.J1)`
  query JobParameters($jobId: ID!, $includeJobParameters: Boolean = false)
  @component(name: "Workflows.Orchestration.Other") {
    job(id: $jobId, useApi21: true) {
      id
      settings {
        parameters @include(if: $includeJobParameters) {
          name
          default
        }
      }
    }
  }
`,V=(0,n.J1)`
  fragment RunResolvedParameters on JobsResolvedValues {
    conditionTask {
      left
      right
    }
    dbtTask {
      commands
    }
    notebookTask {
      baseParameters {
        key
        value
      }
    }
    pythonWheelTask {
      namedParameters {
        key
        value
      }
      parameters
    }
    runJobTask {
      jobParameters {
        key
        value
      }
    }
    sparkJarTask {
      parameters
    }
    sparkPythonTask {
      parameters
    }
    sparkSubmitTask {
      parameters
    }
    sqlTask {
      parameters {
        key
        value
      }
    }
    forEachTask {
      inputs
    }
    cleanRoomsJarTask {
      parameters
    }
    pipelineTask @includeSafex(name: "pipeline_parameters", defaultValue: false) {
      pipelineTaskParameters {
        key
        value
      }
    }
  }
`,G=(0,n.J1)`
  fragment ForEachTaskSettings on JobsJobTask {
    forEachTask {
      task {
        clusterSpec {
          ...JobsClusterDetails
        }
        dependsOn {
          taskKey
          outcome @include(if: $includeTaskDependencyOutcome)
        }
        runIf
        description
        taskKey
        timeoutSeconds
        durationWarningSeconds
        environmentKey
        health {
          rules {
            metric
            op
            value
          }
        }
        task {
          ...JobsAllTasksFragment
        }
      }
    }
  }

  ${r.m}
  ${I}
`,Q=(0,n.J1)`
  query JobsGetJobIdFromRun($input: JobsGetRunInput!) @component(name: "Workflows.Authoring.UI") {
    jobsGetRun: jobsGetRunWithApiVersion(input: $input, useApi21: true) {
      run {
        jobId
      }
    }
  }
`,K=(0,n.J1)`
  query JobsGetRunBreadcrumb($jobId: ID!) @component(name: "Workflows.Observability.Graphs") {
    job(id: $jobId, useApi21: true) {
      settings {
        name
      }
    }
  }
`,H=(0,n.J1)`
  query JobSettingsMaxConcurrentRuns($jobId: ID!) @component(name: "Workflows.Observability.Graphs") {
    job(id: $jobId, useApi21: true) {
      settings {
        maxConcurrentRuns
      }
    }
  }
`,X=(0,n.J1)`
  query JobsGetRun(
    $input: JobsGetRunInput!
    $includeSubscriptions: Boolean!
    $useApi21: Boolean!
    $includeJobInRunJobTask: Boolean = false
    $includeQueueDuration: Boolean = false
    $includeQueueReason: Boolean = false
    $includeJobParameters: Boolean = false
    $includeResolvedValues: Boolean = false
    $includeTaskDependencyOutcome: Boolean = false
    $includeRunStatus: Boolean = false
    $includeDependencyInfo: Boolean = false
    $includeSourceInDbtAndSqlFile: Boolean = false
  ) @component(name: "Workflows.Authoring.UI") {
    jobsGetRun: jobsGetRunWithApiVersion(input: $input, useApi21: $useApi21) {
      effectivePermissionLevel
        @includeSafex(name: "databricks.fe.jaws.enablePermissionLevelInGetRun", defaultValue: false)
      run {
        ...JobRunDetailsSectionFragment
        ...TaskRunDetailsSectionFragment
        originalAttemptRunId
        runPageUrl
        runType
        description
        format
        parentRunId
        taskKey
        attemptNumber
        dependencyInfo @include(if: $includeDependencyInfo) {
          truncated
          dependencies {
            dependencyType
            language
            name
            version
          }
        }
        task {
          ...JobsAllTasksFragment
          ...ForEachTaskSettings
          ...ForEachTaskStats
        }
        tasks {
          attemptNumber
          runId
          runPageUrl
          state {
            ...RunStateFragment
          }
          status @include(if: $includeRunStatus) {
            ...RunStatusFragment
          }
          durationInfo {
            cleanupDuration
            endTime
            executionDuration
            setupDuration
            startTime
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
          clusterInstance {
            clusterId
            sparkContextId
            clusterInfo {
              attributes {
                sparkVersion
                kind
                enableServerlessCompute
              }
            }
          }
          settings {
            clusterSpec {
              ...JobsClusterDetails
            }
            dependsOn {
              taskKey
              outcome @include(if: $includeTaskDependencyOutcome)
            }
            runIf
            description
            taskKey
            timeoutSeconds
            durationWarningSeconds
            environmentKey
            health {
              rules {
                metric
                op
                value
              }
            }
            task {
              ...JobsAllTasksFragment
              ...ForEachTaskSettings
              ...ForEachTaskStats
            }
          }
          gitSource {
            gitUrl
            gitProvider
            gitBranch
            gitTag
            gitCommit
            gitSnapshot {
              usedCommit
            }
          }
          taskValueCount
          resolvedValues @include(if: $includeResolvedValues) {
            ...RunResolvedParameters
          }
          effectivePerformanceTarget
          effectiveCompute {
            hardwareAccelerator
            memory
          }
        }
        triggerInfo {
          ...JobRunTriggerInfo
        }
        clusterSpec {
          ...JobsClusterDetails
        }
        clusterInstance {
          clusterId
          sparkContextId
        }
        overridingParameters {
          notebookParams {
            key
            value
          }
          jarParams
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
        jobClusters {
          ...JobsJobClusterDetails
        }
        repairHistory {
          id
          state {
            lifeCycleState
            resultState
            stateMessage
            userCancelledOrTimedout
            queueReason @include(if: $includeQueueReason)
          }
          type
          startTime
          endTime
          tasks
          taskRunIds
          effectivePerformanceTarget
        }
        gitSource {
          gitUrl
          gitProvider
          gitBranch
          gitTag
          gitCommit
          gitSnapshot {
            usedCommit
          }
        }
        taskValueCount
        jobParameters @include(if: $includeJobParameters) {
          ...RunJobParameter
        }
        environments {
          ...JobEnvironment
        }
        effectivePerformanceTarget
      }
    }
  }

  ${r.m}
  ${I}
  ${M}
  ${u.Wg}
  ${u.yu}
  ${V}
  ${u.qk}
  ${d.WB}
  ${G}
  ${c.d}
  ${d.DP}
  ${$}
  ${u.Lw}
`,Z=(0,n.J1)`
  query ListIterationRetries($input: JobsListIterationsInput!, $includeQueueReason: Boolean = false)
  @component(name: "Workflows.Orchestration.Other") {
    jobsListIterations(input: $input) {
      iterations {
        originalAttemptRunId
        tasks {
          runId
          attemptNumber
          runPageUrl
          state {
            ...RunStateFragment
          }
          status {
            ...RunStatusFragment
          }
        }
      }

      apiError {
        message
      }
    }
  }

  ${d.WB}
  ${d.DP}
`,ee=(0,n.J1)`
  query JobsGetPermissionLevel($input: JobsGetPermissionLevelInput!) @component(name: "Workflows.Orchestration.Other") {
    jobsGetPermissionLevel(input: $input) {
      perm
    }
  }
`,et=(0,n.J1)`
  mutation TestTrigger($input: JobsTestTriggerInput!) @component(name: "Workflows.Triggers.File") {
    jobsTestTrigger(input: $input) {
      apiError {
        message
      }
      fileArrival {
        usingFileEvents
        locationName
      }
      table {
        tableStatus {
          tableName
          usingFileEvents
          locationName
          usingDeltaSharing
        }
      }
      sqlCondition {
        __typename
      }
    }
  }
`,ea=(0,n.J1)`
  query SqlAlertGet($alertId: String!) @component(name: "Workflows.Tasks.SQL") {
    sqlAlertGet(alertId: $alertId)
      @rest(type: "SqlAlert", path: "/alerts/{args.alertId}", endpoint: "redashApi", method: "GET") {
      id
      name
      permissionTier
      query {
        dataSourceId
      }
    }
  }
`,en=(0,n.J1)`
  query SqlDashboardGet($dashboardId: String!) @component(name: "Workflows.Tasks.SQL") {
    sqlDashboardGet(dashboardId: $dashboardId)
      @rest(type: "SqlDashboard", path: "/dashboards/{args.dashboardId}", endpoint: "redashApi", method: "GET") {
      id
      name
      dataSourceId
      permissionTier
      widgets {
        id
        options {
          title
          parameterMappings
          position {
            sizeX
            sizeY
            autoHeight
            row
            col
          }
        }
        visualization {
          id
          query {
            id
            dataSourceId
            options {
              parameters {
                name
                title
                value
                type
                multiValuesOptions {
                  separator
                }
                enumOptions
                queryId
              }
            }
          }
        }
      }
    }
  }
`,er=(0,n.J1)`
  query SqlQueryGet($queryId: String!) @component(name: "Workflows.Tasks.SQL") {
    sqlQueryGet(queryId: $queryId)
      @rest(type: "SqlQuery", path: "/queries/{args.queryId}", endpoint: "redashApi", method: "GET") {
      id
      name
      query
      dataSourceId
      options {
        applyAutoLimit
        parameters {
          name
          title
          type
          value
          multiValuesOptions {
            separator
          }
          enumOptions
          queryId
        }
      }
    }
  }
`,ei=(0,n.J1)`
  fragment SqlWarehouseDetails on Lakehouse {
    id
    name
    state
    size
    enableServerlessCompute
    warehouseType
  }
`,es=(0,n.J1)`
  query SqlWarehouseSelectGet($id: ID!) @component(name: "Workflows.Tasks.SQL") {
    lakehouse(id: $id) {
      ...SqlWarehouseDetails
    }
  }
  ${ei}
`,eo=(0,n.J1)`
  query SqlQueryAsDropdownOptionsGet($queryId: String!) @component(name: "Workflows.Tasks.SQL") {
    sqlQueryAsDropdownOptionsGet(queryId: $queryId)
      @rest(
        type: "[SqlQueryParameterDropdownOption]"
        path: "/queries/{args.queryId}/dropdown"
        endpoint: "redashApi"
        method: "GET"
      ) {
      value
    }
  }
`,el=(0,n.J1)`
  query ClusterNameGet($id: String!) @component(name: "Workflows.Authoring.UI") {
    cluster(id: $id) {
      id
      attributes {
        name
      }
    }
  }
`},984655:(e,t,a)=>{"use strict";a.d(t,{U:()=>h,A:()=>T});var n,r=a(610435),i=a(692738),s=a(918526),o=a(726977),l=a(22191),u=a(863708),d=a(87221),c=a(876726),m=a(140078),p=a(342411);function f(){return(0,r.Y)(c.S,{image:(0,r.Y)(m.A,{}),title:(0,r.Y)(p.sA,{id:"LTfYt9",defaultMessage:"Something went wrong"}),description:(0,r.Y)(p.sA,{id:"+IPTlk",defaultMessage:"We couldn't load your data preview card. Please try again."})})}var g=a(5697),b=a(545626);let y=null;var h=((n={}).FILEBROWSER_TREE="filebrowser-tree",n.SCHEMA_BROWSER="schema-browser",n.WORKSPACE_TABLE="workspace-table",n.UC_ASSET_SELECTOR="uc-asset-selector",n.UNKNOWN="unknown",n);let S=i.lazy(()=>(()=>{let e=()=>Promise.all([a.e(62280),a.e(62394),a.e(67590),a.e(6932),a.e(5033),a.e(92170),a.e(37797),a.e(44004),a.e(99918),a.e(3341),a.e(73208),a.e(49934),a.e(57958),a.e(35756),a.e(33872),a.e(59076),a.e(59347),a.e(39577)]).then(a.bind(a,152866));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(152866,"./UnifiedMetadataPreview","lazy",e);return e()})().then(e=>({default:e.UnifiedMetadataPreview}))),T=(0,i.memo)(function({metadataObject:e,dataSource:t,children:a,icon:n,setIsPreviewOpenCallback:c,sideOffset:m=0,isBrowseOnly:p=!1,showSampleDataPreview:h=!0,showTableSchema:T=!1,customTriggerStyle:v,surfaceArea:I="unknown"}){let[E,A]=(0,i.useState)(!1),[k,R]=(0,i.useState)(!1),C=(0,i.useRef)(null),D=(0,i.useRef)(!1),N=(0,i.useRef)(null),M=(0,d.ki)(),P=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=()=>{R(!0)},t=()=>{R(!1)};return document.addEventListener("dragstart",e,!0),document.addEventListener("dragend",t,!0),()=>{document.removeEventListener("dragstart",e,!0),document.removeEventListener("dragend",t,!0)}},[]),(0,i.useEffect)(()=>()=>{N.current?.()},[]);let w=E&&!k;(0,i.useEffect)(()=>{if(!w)return;return y&&y(!1),y=A,()=>{y===A&&(y=null)}},[w]),(0,i.useEffect)(()=>{w&&!P.current&&M({eventType:"component_view",eventEntity:{entityType:"component",entitySubType:"div",entityId:`metadata-preview.${I}.${e.objectType}`},eventPayload:{interactionSubject:!0}}),P.current=w},[w,M,I,e.objectType]);let _=(0,i.useCallback)(e=>{if(k)return;if(e&&!D.current&&!C.current?.contains(document.activeElement))return void N.current?.();N.current?.(),A(e),c&&c(e)},[c,k]);if((0,b.S0)(e)){let t=e.folderNode;if(t.attributes?.is_system_generated&&g.kb.includes(t.node_name??""))return(0,r.Y)(r.FK,{children:a})}return(0,r.Y)(s.j,{openDelay:700,open:w,onOpenChange:_,trigger:(0,r.Y)("div",{ref:C,style:v,onPointerEnter:()=>{N.current?.(),D.current=!0;let e=e=>{if(!C.current||!e.target)return;C.current.contains(e.target)||(D.current=!1,N.current?.())};document.addEventListener("pointermove",e,!0),N.current=()=>{document.removeEventListener("pointermove",e,!0),N.current=null}},onPointerLeave:()=>{D.current=!1,N.current?.()},children:a}),sideOffset:m,content:w&&(0,r.Y)("div",{onPointerLeave:()=>_(!1),onClick:e=>{e.stopPropagation(),e.preventDefault()},onContextMenu:e=>{e.preventDefault()},style:{display:"flex",flexWrap:"wrap",overflow:"hidden",width:400},children:(0,r.Y)(u.JR,{esComponent:l.Es.FileBrowser,errorBoundaryId:o.s.DataPreviewCard,fallback:(0,r.Y)(f,{}),children:(0,r.Y)(i.Suspense,{fallback:null,children:(0,r.Y)(S,{metadataObject:e,dataSource:t,icon:n,isBrowseOnly:p,showSampleDataPreview:h,showTableSchema:T})})})}),align:"start",side:"right"})})},989266:(e,t,a)=>{"use strict";a.d(t,{NY:()=>T,co:()=>S,t7:()=>h});var n,r=a(802558),i=a.n(r),s=a(944464),o=a.n(s),l=a(692738);if(13057==a.j)var u=a(466213);var d=a(342411);if(13057==a.j)var c=a(686560);if(13057==a.j)var m=a(483588);if(13057==a.j)var p=a(721854);if(13057==a.j)var f=a(471236);if(13057==a.j)var g=a(904995);if(13057==a.j)var b=a(846947);if(13057==a.j)var y=a(861728);var h=((n={}).FIELD_UNSPECIFIED="FIELD_UNSPECIFIED",n.POLICY_NAME="POLICY_NAME",n);let S=e=>{if(0===e.length)return null;return{descending:e[0].desc,field:e[0].id===p.$l.NAME?"POLICY_NAME":"FIELD_UNSPECIFIED"}},T=({doListBudgetPolicies:e,listBudgetPoliciesQueryState:t})=>{let a=(0,d.tz)(),n=[{id:p.$l.NAME,desc:!1}],[r,s]=(0,l.useState)(null),[h,T]=(0,l.useState)(n),v=S(h),[I,E]=(0,l.useState)(""),[A,k]=(0,l.useState)(""),R=(0,b.HZ)()&&g.D.WORKSPACE_RESTRICTION_ENABLED_BY_DEFAULT,[C,D]=(0,l.useState)(R),[N,M]=(0,l.useState)(R),P=(0,l.useCallback)(()=>{s(null)},[s]),w=(0,u.YQ)(e=>{k(e),P()},g.D.getDebounceTimeout()),_=o()(e=>{M(e),P()},g.D.getThrottleTimeout()),{data:x,loading:O,errorMessage:L,apiError:$}=t,F=(0,l.useRef)({});(0,l.useEffect)(()=>{let t={variables:{input:{pageSize:g.D.getDefaultBudgetPolicyPageSize(),requireStrongConsistency:!0,pageToken:r,filterBy:{...A?{policyName:A}:{},...N?{applyBindingRestriction:!0}:{}},...(0,b.I1)()?{systemDefaultPolicySortPreference:m.VH5.SYSTEM_DEFAULT_POLICY_FIRST}:{},...null===v?{}:{sortSpec:v}}},fetchPolicy:"network-only"};i()(F.current,t)||(F.current=t,e(t))},[e,F,r,N,A,v]);let U=x?.nextPageToken,j=x?.previousPageToken,J=(0,l.useMemo)(()=>(x?.policies??[]).map(e=>{let t=(0,c.d)("currentWorkspaceId","");if(e?.policyName?.includes(t)&&(0,y.i0)(e?.policyName))return{...e,displayName:a.formatMessage(f.Oi)};if((0,y.NS)(e))return{...e,displayName:a.formatMessage(f.e5)};return e}),[x,a]),Y=(0,l.useCallback)(e=>{E(e),w(e)},[w]),B=(0,l.useCallback)(()=>{let e=!C;D(e),_(e)},[_,C]);return{filter:{nameFilter:I,setNameFilter:Y,filterByCurrentWorkspace:C,toggleFilterByCurrentWorkspace:()=>B(),hasFilter:!!A||N,resetFilter:(0,l.useCallback)(()=>{k(""),E(""),M(!1),D(!1),P()},[P]),shouldShowResetButton:!!I||C},count:{showCount:!O&&(!!I||C)&&I===A&&C===N,count:U||j?g.D.getDefaultBudgetPolicyPageSize():J.length,hasAdditional:!!(U||j)},pagination:{hasNextPage:!!U,fetchNextPage:U?()=>s(U):y.tE,hasPreviousPage:!!j,fetchPreviousPage:j?()=>s(j):y.tE},sorting:{sorting:h,setSorting:e=>{T(e),s(null)}},policies:J,loading:O,errorMessage:L??void 0,apiError:$}}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/64450.7abe91bda2.chunk.js.map