"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[8603],{8603:(t,e,r)=>{r.r(e),r.d(e,{DbtPlatformTaskRunOutput:()=>m});var n=r(610435);r(692738);var a=r(339518),u=r(764236),s=r(382908),o=r(342411),l=r(141078),d=r(964470),i=r(873230),c=r(290755);let p=(0,l.J1)`
  query GetDbtPlatformTaskRunOutput($runId: Long) @component(name: "PartnerEco.DBT") {
    jobsGetRunOutput(input: { runId: $runId }) {
      runOutput {
        error
        dbtPlatformOutput {
          dbtPlatformJobRunId
          dbtPlatformJobRunUrl
          dbtPlatformJobRunOutput {
            index
            name
            status
            logs
          }
        }
      }
    }
  }
`;function m({taskRun:t}){let e=(0,o.tz)(),{data:r,loading:b,error:f}=(0,l.IT)(p,{variables:{runId:t.runId},fetchPolicy:"cache-and-network",pollInterval:5e3}),g=r?.jobsGetRunOutput?.runOutput?.error,h=r?.jobsGetRunOutput?.runOutput?.dbtPlatformOutput?.dbtPlatformJobRunOutput;if(b||!r?.jobsGetRunOutput?.runOutput?.dbtPlatformOutput)return(0,n.Y)("span",{css:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:(0,n.Y)(c.j,{})});return(0,n.FD)(d.T,{error:f?.message,children:[g&&(0,n.Y)(a.F,{componentId:"dbt-platform-task-output-error-alert",css:({spacing:t})=>({marginTop:t.md}),type:"error",closable:!1,message:g}),(0,n.Y)(u.h,{size:"md"}),h&&h.map(t=>(0,n.FD)("div",{children:[(0,n.FD)(s.o.Text,{bold:!0,css:{marginLeft:4},children:[t.name," - ",t.status]}),(0,n.Y)(i.D,{content:t.logs?t.logs:e.formatMessage({id:"1RmnV9",defaultMessage:"Waiting for logs to become available..."})}),(0,n.Y)(u.h,{size:"sm"})]},t.index)),(0,n.Y)(u.h,{size:"md"})]})}},290755:(t,e,r)=>{r.d(e,{j:()=>s});var n=r(610435);r(692738);var a=r(497895),u=r(12414);function s(){let{theme:t}=(0,a.wn)();return(0,n.Y)("div",{"data-testid":"centered-large-loading-spinner",css:{textAlign:"center",paddingtop:t.spacing.lg},children:(0,n.Y)(u.y,{size:"large"})})}},964470:(t,e,r)=>{r.d(e,{T:()=>o});var n=r(610435);r(692738);var a=r(295169),u=r(339518),s=r(342411);function o({error:t,loading:e,loadingSkeleton:r,contentCss:l,children:d}){let i=(0,s.tz)();if(e)return(0,n.Y)("div",{role:"alert","aria-live":"polite",children:r??(0,n.Y)(a.x,{label:i.formatMessage({id:"/2IQBh",defaultMessage:"Loading task output"})})});return(0,n.FD)(n.FK,{children:[t&&(0,n.Y)(u.F,{componentId:"codegen_web-shared_src_jaws_task-run-output_taskbaserunoutput.tsx_36",type:"error",closable:!1,message:t}),(0,n.Y)("div",{css:l,children:d})]})}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/8603.fbfcdf4499.chunk.js.map