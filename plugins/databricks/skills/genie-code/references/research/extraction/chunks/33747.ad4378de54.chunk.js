"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[33747],{533747:(e,t,u)=>{u.r(t),u.d(t,{SimulationTaskRunOutput:()=>o});var r=u(610435);u(692738);var n=u(382908),l=u(342411),a=u(141078),s=u(964470);let i=(0,a.J1)`
  query GetSimulationTaskRunOutput($runId: Long) @component(name: "Workflows.Tasks.Other") {
    jobsGetRunOutput(input: { runId: $runId }) {
      runOutput {
        simulationOutput {
          result
          parameters {
            key
            value
          }
          ranAsUser
        }
      }
    }
  }
`;function o({taskRun:e}){let{data:t,loading:u,error:d}=(0,a.IT)(i,{variables:{runId:e.runId}}),p=t?.jobsGetRunOutput?.runOutput?.simulationOutput;return(0,r.FD)(s.T,{loading:u,error:d?.message||!p&&(0,r.Y)(l.sA,{id:"JHpqw8",defaultMessage:"No output"}),children:[p&&(0,r.FD)(r.FK,{children:[(0,r.FD)(n.o.Title,{level:3,children:["Simulation task result:"," ",t?.jobsGetRunOutput?.runOutput?.simulationOutput?.result??"No results were returned"]}),(0,r.FD)(n.o.Title,{level:4,children:["Ran as: ",p?.ranAsUser]}),(0,r.Y)(n.o.Title,{level:4,children:"Resolved parameters"}),(0,r.Y)("ul",{children:p.parameters?.map(e=>(0,r.FD)("li",{children:[(0,r.Y)("b",{children:e.key})," = ",e.value]},e.key))})]}),(0,r.Y)(n.o.Title,{level:3,children:"Raw data returned:"}),(0,r.Y)("code",{lang:"json",children:JSON.stringify(t,null,2)})]})}},964470:(e,t,u)=>{u.d(t,{T:()=>s});var r=u(610435);u(692738);var n=u(295169),l=u(339518),a=u(342411);function s({error:e,loading:t,loadingSkeleton:u,contentCss:i,children:o}){let d=(0,a.tz)();if(t)return(0,r.Y)("div",{role:"alert","aria-live":"polite",children:u??(0,r.Y)(n.x,{label:d.formatMessage({id:"/2IQBh",defaultMessage:"Loading task output"})})});return(0,r.FD)(r.FK,{children:[e&&(0,r.Y)(l.F,{componentId:"codegen_web-shared_src_jaws_task-run-output_taskbaserunoutput.tsx_36",type:"error",closable:!1,message:e}),(0,r.Y)("div",{css:i,children:o})]})}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/33747.ad4378de54.chunk.js.map