"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[6049],{278536:(e,t,a)=>{a.d(t,{n:()=>s});let r="#CC3352",i="#F69CAD",n="#C4CDD4",d="#308813",s={"Internal error":r,Failed:r,Skipped:i,"Upstream failed":i,"Upstream canceled":i,Evicted:i,"Upstream evicted":i,"Timed out":i,Canceled:i,Canceling:i,"Maximum concurrent runs reached":i,Pending:n,Terminated:n,Terminating:n,Blocked:n,Queued:n,SkippedByCustomerCode:"#CCCCCC",Excluded:"#5A5A5A",Disabled:"#5A5A5A",Running:"#4FB26E",Succeeded:d,"Succeeded with failures":d,"Waiting for retry":"#FACB66"}},349267:(e,t,a)=>{a.d(t,{U:()=>d});var r=a(141078),i=a(599298);let n=(0,r.J1)`
  query LakeviewPublishedDashboardGetQuery(
    $input: LakeviewconfigServicesPublisheddashboardGetPublishedDashboardRequestInput!
  ) @component(name: "Lakeview.Dashboards") {
    lakeviewconfigServicesPublisheddashboardGetPublishedDashboard(input: $input) {
      name
      displayName
      pages {
        widgets {
          displayName
          customerRefId
          renderSpec {
            vizRenderSpec {
              rawJson
            }
          }
        }
      }
      apiError {
        code
        message
        traceId
      }
    }
  }
`,d=e=>(0,r.IT)(n,{variables:{input:{name:e}},skip:!(0,i.wp)(e),fetchPolicy:"no-cache"})},532411:(e,t,a)=>{a.d(t,{H6:()=>i,Hz:()=>l,LK:()=>o,Us:()=>c,Vu:()=>s,_1:()=>d,tk:()=>n});var r=a(956935);let i=5,n=.75,d=8,s=e=>e.colors.blue400,l=e=>e.colors.blue600,o=e=>e.colors.blue600;function c(e){let t=e.isDarkMode?e.colors.actionDefaultBackgroundHover:e.colors.blue100;return{handleRight:(0,r.AH)({background:"transparent",borderColor:"transparent",right:0,top:28}),handleLeft:(0,r.AH)({background:"transparent",borderColor:"transparent",left:-3,top:28}),titleText:(0,r.AH)({width:"230px",lineHeight:`${e.typography.lineHeightSm} !important`}),backgroundHack:(0,r.AH)({"&:hover":{backgroundColor:t},borderRadius:"4px",width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:0})}}},599298:(e,t,a)=>{a.d(t,{ZN:()=>n,wp:()=>i});let r="dashboards";function i(e){if(null==e)return!1;let[t,a,...i]=e.split("/");return 0===i.length&&t===r&&null!=a&&a.length>0}function n(e){return e.replace(r,`${r}v3`)}},603602:(e,t,a)=>{a.r(t),a.d(t,{LakeviewDashboardTaskRunDagNode:()=>d});var r=a(610435);a(692738);var i=a(221970),n=a(891089);function d({baseTaskNodeProps:e,taskRun:t,ariaLabel:a}){return(0,r.Y)(i.a,{baseTaskNodeProps:e,taskRun:t,ariaLabel:a,children:(0,r.Y)(n.R,{taskSettings:t.settings})})}},777229:(e,t,a)=>{a.d(t,{F:()=>i});var r=a(886100);function i(e,{eventId:t,failExplicitly:a=!1,esComponent:n}){if(!a)return r.iT.sev2(n,"jaws:unreachable-code-path",{unexpectedValue:e,eventId:t}),e;throw Error(`Exhaustive check failed: ${JSON.stringify(e)} is unexpected or it was not exhaustively checked.`)}},891089:(e,t,a)=>{a.d(t,{R:()=>b});var r=a(610435);a(692738);var i=a(497895),n=a(563521),d=a(802582),s=a(382908),l=a(342411),o=a(349267),c=a(941635),u=a(402720);function h(){let e=(0,l.tz)();return(0,r.Y)("div",{css:{width:"100%"},"aria-label":e.formatMessage({id:"USxZV6",defaultMessage:"loading"}),"aria-busy":"true",children:(0,r.Y)(u.P,{active:!0,paragraph:{rows:0,style:{margin:0,padding:0}},title:{width:"100%",style:{height:20,margin:0,padding:0}}})})}function p({icon:e,children:t,...a}){return(0,r.FD)("div",{...a,css:{display:"flex",alignItems:"center",gap:8,whiteSpace:"nowrap"},role:"row",children:[e&&(0,r.Y)("div",{role:"cell",css:{display:"flex",alignItems:"center"},children:e}),t]})}function b({taskSettings:e}){let t,{theme:a}=(0,i.wn)(),d=e.task.dashboardTask?.dashboardId,s=(0,c.Ij)(d),{data:u,loading:f}=(0,o.U)(s),k=u?.lakeviewconfigServicesPublisheddashboardGetPublishedDashboard?.displayName;return t=f?(0,r.Y)(h,{}):k?(0,r.Y)(g,{textContent:k,style:{color:a.colors.textValidationInfo}}):d?(0,r.Y)(g,{textContent:(0,r.Y)(l.sA,{id:"gyEHVz",defaultMessage:"The selected dashboard with id: {dashboardId} is not published.",values:{dashboardId:d}}),style:{color:a.colors.textValidationDanger}}):(0,r.Y)(g,{textContent:(0,r.Y)(l.sA,{id:"q73791",defaultMessage:"No dashboard specified"}),style:{color:a.colors.textPlaceholder}}),(0,r.Y)(p,{icon:(0,r.Y)(n.A,{"data-testid":"lakeviewDashboard-dag-dashboard-icon"}),children:t})}function g({textContent:e,style:t}){return(0,r.Y)(d.p,{title:e,children:(0,r.Y)(s.o.Text,{ellipsis:!0,style:t,children:e})})}},941635:(e,t,a)=>{a.d(t,{Ij:()=>i,wp:()=>n,x7:()=>d});let r="dashboards";function i(e){if(!e)return"";return`${r}/${e}`}function n(e){if(null==e)return!1;let[t,a,...i]=e.split("/");return 0===i.length&&t===r&&null!==a&&a.length>0}function d(e){return e.split("/")[1]}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/6049.23262d320b.chunk.js.map