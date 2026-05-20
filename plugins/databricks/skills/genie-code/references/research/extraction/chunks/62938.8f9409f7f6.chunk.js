"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[62938],{108118:(e,i,t)=>{t.d(i,{A:()=>o});var a=t(610435),l=t(692738),n=t(375214);function r(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.762 8.04a.75.75 0 0 1 .553.03l3.25 1.5q.045.02.09.048l.004.003q.016.011.031.024.023.014.044.032.059.05.106.111a.75.75 0 0 1 .16.462v3.5a.75.75 0 0 1-.435.68l-3.242 1.496-.006.003-.002.002-.013.005a.8.8 0 0 1-.251.062h-.102a.8.8 0 0 1-.25-.062l-.014-.005-.01-.005-3.24-1.495A.75.75 0 0 1 8 13.75v-3.5q0-.053.007-.104l.006-.03a.8.8 0 0 1 .047-.159l.007-.019.025-.048.017-.029.01-.015.023-.035.024-.03a.76.76 0 0 1 .268-.212h.002l3.25-1.5zM9.5 13.27l1.75.807V12.23l-1.75-.807zm3.25-1.04v1.847l1.75-.807v-1.848zm-2.21-1.981 1.46.675 1.46-.674L12 9.575z",clipRule:"evenodd"}),(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8.75 0c.199 0 .39.08.53.22l4.5 4.5.094.114A.75.75 0 0 1 14 5.25v1.944l-1.057-.487-.199-.08a2 2 0 0 0-.244-.07V6H8.75A.75.75 0 0 1 8 5.25V1.5H3.5v12h3v.25c0 .455.138.887.38 1.25H2.75a.75.75 0 0 1-.75-.75V.75l.004-.077A.75.75 0 0 1 2.75 0zm.75 4.5h1.94L9.5 2.56z",clipRule:"evenodd"})]})}let s=(0,l.forwardRef)((e,i)=>(0,a.Y)(n.I,{ref:i,...e,component:r}));s.displayName="FileCubeIcon";let o=s},439313:(e,i,t)=>{t.d(i,{u:()=>p});var a=t(610435),l=t(692738),n=t(342411),r=t(794876),s=t(395711),o=t(993533);function d(e,i){let{data:t,previousData:a,error:n,loading:s}=(0,r.yZ)({skip:!i,returnPartialData:!0,variables:{input:{orderBy:["name asc"],filter:""===e?void 0:`name LIKE '%${e}%'`,maxResults:25}},fetchPolicy:"network-only"});return{items:(0,l.useMemo)(()=>{let e=(t??a)?.deltapipelinesList?.statuses?.filter(e=>e.state!==o.X_e.DELETED&&!!e.pipelineId);if(!e)return[];return e.map(e=>({id:e.pipelineId?.toString(),name:e.name||""}))},[t,a]),loading:s,error:n}}let p=({id:e,value:i,setValue:t})=>{let l=(0,n.tz)();return(0,a.Y)(s.O,{id:e,value:i,setValue:t,componentId:"dabs-authoring.select-pipeline-combobox",placeholder:l.formatMessage({id:"YzRudw",defaultMessage:"Select pipeline"}),errorMessage:(0,n.zR)({id:"mocsu1",defaultMessage:"Error fetching pipelines: {error}"}),useResourceData:d})}},772117:(e,i,t)=>{t.a(e,async(e,a)=>{try{t.r(i),t.d(i,{useModal:()=>o});var l=t(342411),n=t(382563),r=t(439313),s=e([n]);function o(){let e=(0,l.tz)();return(0,n.hS)({resourceType:"pipeline",SearchComponent:r.u,title:e.formatMessage({id:"xITMw2",defaultMessage:"Add existing pipeline"}),comboboxLabel:e.formatMessage({id:"EREATu",defaultMessage:"Select pipeline"}),viewResourceLabel:e.formatMessage({id:"dDVJ/X",defaultMessage:"View pipeline"}),deploymentOptionsLabel:e.formatMessage({id:"88uSAb",defaultMessage:"When should the existing pipeline be updated?"}),bindOptionDescription:(0,l.zR)({id:"+NieEL",defaultMessage:"The pipeline is updated when you deploy to {target}."}),duplicateDescription:(0,l.zR)({id:"20PVSb",defaultMessage:"Imports the pipeline definition and source files without binding them to a deployment target. You can manually bind it later. {learnMoreLink}"})})}n=(s.then?(await s)():s)[0],a()}catch(e){a(e)}})},794876:(e,i,t)=>{t.d(i,{FY:()=>n,eq:()=>s,yZ:()=>r});var a=t(141078),l=t(911489);let n=(0,a.J1)`
  query PipelineListQuery($input: DeltapipelinesListPipelinesInput!) @component(name: "Workflows.Observability.Lists") {
    deltapipelinesList: jobsListPipelines(input: $input) {
      nextPageToken
      prevPageToken
      statuses {
        runAsUserName
        permissionLevel
        latestUpdates {
          creationTime
          state
          updateId
        }
        name
        pipelineId
        state
        ownerPrincipal @includeSafex(name: "databricks.fe.enrichPrincipalUi", defaultValue: false) {
          id
          uniqueName
          kind
          displayName
        }
        userActivityInfo
          @includeSafex(name: "databricks.fe.pipelines.enablePipelinesTableFavoriteIndicator", defaultValue: false) {
          assetType
          assetId
          isFavorite
        }
      }
      apiError {
        ...PipelineApiErrorFields
      }
    }
  }
  ${l.n}
`;function r({variables:e={input:{}},...i}={}){let t={...e.input};return"string"==typeof t.pageToken&&(delete t.filter,delete t.orderBy),(0,a.IT)(n,{variables:{input:t},...i})}function s(e={}){return(0,a._l)(n,e)}},911489:(e,i,t)=>{t.d(i,{n:()=>l});var a=t(141078);let l=(0,a.J1)`
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
`}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/62938.8f9409f7f6.chunk.js.map