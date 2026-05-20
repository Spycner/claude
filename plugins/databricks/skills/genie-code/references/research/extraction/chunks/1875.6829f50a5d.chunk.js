"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[1875],{12528:(e,t,n)=>{n.d(t,{A:()=>l});var i=n(141078),a=n(787571);let r=(0,i.J1)`
  query GetInferenceEndpointForTile($data: ModelservingapiGetInferenceEndpointInput!)
  @component(name: "AgentBricks.AIFunction") {
    modelservingapiGetInferenceEndpoint(input: $data) {
      apiError {
        ...TileApiErrorFragment
      }
      endpoint {
        name
        id
        task
        state {
          configUpdate
          ready
          suspend
        }
        config {
          config {
            servedEntities {
              name
              scaleToZeroEnabled
              state {
                deployment
                deploymentStateMessage
              }
              foundationModel {
                name
              }
            }
          }
        }
      }
    }
  }
  ${a.BP}
`,l=e=>(0,i.IT)(r,e)},17095:(e,t,n)=>{n.d(t,{Aj:()=>o,hJ:()=>s,uD:()=>l});var i=n(692738),a=n(993533);let r=[a.uZV.COMPLETED,a.uZV.FAILED,a.uZV.CANCELLED,a.VU3.COMPLETED,a.VU3.FAILED,a.VU3.CANCELLED];function l(e){return e===a.uZV.CREATED||e===a.VU3.CREATED}function o(e){return e===a.uZV.COMPLETED||e===a.VU3.COMPLETED}function s(e,t){let n=(0,i.useRef)(void 0);(0,i.useEffect)(()=>{let i=n.current;if(n.current=e,!t||!(e&&r.includes(e))||i!==a.uZV.CREATED&&i!==a.VU3.CREATED)return;t(e)},[e,t])}},19802:(e,t,n)=>{n.d(t,{X:()=>o});var i=n(610435);n(692738);var a=n(382908),r=n(620839),l=n(67656);let o=e=>e.formatMessage({id:"jY4BUk",defaultMessage:"Agent Bricks may use endpoints hosted on Databricks Inc. <link>Documentation & License</link>"},{link:e=>(0,i.Y)(a.o.Link,{componentId:"tiles.legal.claude-legal-disclaimer.link",href:l.R.getDbGuideUrl(r.A.AI_BUILDER_CLAUDE_LEGAL_DISCLAIMER),openInNewTab:!0,children:e})})},162068:(e,t,n)=>{n.d(t,{bQ:()=>l,kN:()=>o});var i=n(610435),a=n(692738),r=n(497895);function l(e){let{theme:t}=(0,r.wn)(),n=a.useMemo(()=>e.config.views.find(t=>t.key===e.activeKey),[e.config.views,e.activeKey]),l=n?{rendererProps:{activeKey:n.key,loadingTile:e.loadingTile,tileId:e.tileId,tileName:e.tileName,navigateToView:e.navigateToView,tileType:e.tileType},activeView:n}:null;return(0,i.Y)("div",{css:{display:"flex",gap:t.spacing.sm,minHeight:0,flexGrow:1},children:l&&(0,i.Y)("div",{css:{paddingBlock:t.spacing[o],paddingTop:e.removeTopPadding?0:void 0,paddingBottom:e.removeBottomPadding?0:void 0,flexGrow:1,minWidth:0,minHeight:0,display:"flex",flexDirection:"column"},children:(0,a.createElement)(e.renderer,l.rendererProps)})})}let o="md"},165499:(e,t,n)=>{n.d(t,{j:()=>u});var i=n(610435),a=n(497895),r=n(814510),l=n(342411),o=n(217985),s=n(206346);function u({tileType:e,componentId:t}){let n=(0,l.tz)(),{theme:d}=(0,a.wn)();return(0,i.FD)(r.Q,{includeTrailingCaret:!1,children:[(0,i.Y)(r.Q.Item,{children:(0,i.Y)(o.N,{componentId:t,to:"/ml/bricks",asAnchorTag:!0,children:(0,i.Y)(l.sA,{id:"tfpRz7",defaultMessage:"Agents"})})}),(0,i.Y)(r.Q.Item,{css:{color:d.colors.textSecondary},children:(0,s.WW)({type:e,intl:n})})]})}},226211:(e,t,n)=>{n.d(t,{A:()=>s});var i=n(610435),a=n(692738),r=n(375214);function l(e){return(0,i.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,i.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 12V4h1.5v8zm-5.5 0V4H6v8z",clipRule:"evenodd"})})}let o=(0,a.forwardRef)((e,t)=>(0,i.Y)(r.I,{ref:t,...e,component:l}));o.displayName="PauseIcon";let s=o},248316:(e,t,n)=>{n.d(t,{U:()=>f});var i=n(610435),a=n(927504),r=n(692738),l=n(497895),o=n(375214);function s(e){return(0,i.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,i.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M15 6.75H1v-1.5h14zm0 4.75H1V10h14z",clipRule:"evenodd"})})}let u=(0,r.forwardRef)((e,t)=>(0,i.Y)(o.I,{ref:t,...e,component:s}));u.displayName="ResizeIcon";var d=n(79128),c=n(120132),p=n(162068);let m=640,g={left:!0,right:!1,top:!1,bottom:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},f=({left:e,right:t,options:n,leftPaneWrapper:o,rightPaneWrapper:s,resizableStyles:f})=>{let{theme:v}=(0,l.wn)(),R=(0,r.useMemo)(()=>({split:{display:"flex",height:n?.useSimpleHeight?"100%":`calc(100% + 2 * ${v.spacing[p.kN]}px)`,minHeight:0,marginBlock:n?.disableNegativeMargins?void 0:-v.spacing[p.kN],overflowX:"hidden"},pane:{display:"flex",flex:"1 1 0",overflowY:"auto",paddingBottom:0,minWidth:0,minHeight:0},divider:{width:1,background:v.colors.border,alignSelf:"stretch"}}),[v,n?.disableNegativeMargins,n?.useSimpleHeight]),[h,E]=(0,r.useState)(!1),y=(0,r.useMemo)(()=>({".hoverline":{background:v.colors.actionDefaultBorderHover},".resizeIcon":{color:v.colors.actionDefaultBorderHover}}),[v]),T=(0,i.Y)("div",{css:{height:"100%",width:"100%",boxSizing:"border-box",display:"flex",flexDirection:"column",paddingBlock:v.spacing.md,paddingInline:v.spacing.lg,...n?.leftPanelStyles},children:e}),b=(0,i.Y)("div",{css:{height:"100%",width:"100%",boxSizing:"border-box",display:"flex",flexDirection:"column",paddingBlock:v.spacing.md,paddingInline:v.spacing.lg,...n?.rightPanelStyles},children:t}),I=n?.collapsible&&n?.isCollapsed,C=n?.collapsible,{panelWidth:_,setPanelWidth:A,isAnimating:M,isFullyClosed:w,showContent:O}=((e,t=m)=>{let[n,i]=(0,r.useState)(e?0:t),[a,l]=(0,r.useState)(!1),[o,s]=(0,r.useState)(!!e),[u,d]=(0,r.useState)(!e),c=(0,r.useRef)(e);return(0,r.useEffect)(()=>{if(c.current===e)return;c.current=e,l(!0);let n=[];return e?(i(0),d(!1),n.push(setTimeout(()=>s(!0),250))):(s(!1),d(!1),i(t),n.push(setTimeout(()=>d(!0),300))),n.push(setTimeout(()=>l(!1),300)),()=>n.forEach(clearTimeout)},[e,t]),{panelWidth:n,setPanelWidth:i,isAnimating:a,isFullyClosed:o,showContent:u}})(I,n?.defaultRightPaneWidth);return(0,i.FD)("div",{css:R.split,children:[(0,i.Y)("div",{css:{...R.pane,overflow:o?"hidden":void 0,overflowY:o?void 0:"auto",paddingBottom:0,paddingRight:w?v.spacing.xs:0,flexDirection:o?"column":void 0,position:o?"relative":void 0,containerName:"tiles-split-configure-layout-left-panel",containerType:"inline-size"},children:o?o(T):T}),(0,i.Y)("div",{css:{...R.divider,opacity:+!I,transition:M?"opacity 0.3s ease-in-out":void 0}}),(0,i.Y)(a.c,{css:{display:"flex",...f,transition:M?"width 0.3s ease-in-out":void 0,overflow:I?"hidden":void 0,pointerEvents:M?"none":void 0},size:{width:_,height:"100%"},minWidth:I||M?0:350,maxWidth:"50%",enable:I?{}:g,onResizeStart:()=>E(!0),onResizeStop:(e,t,n,i)=>{E(!1),I||A(Math.max(_+i.width,350))},handleStyles:{left:{left:-1,display:I?"none":void 0}},handleComponent:{left:I?void 0:(0,i.FD)("div",{css:{top:0,bottom:0,width:8,position:"absolute",zIndex:1e3,"&:hover":y,...h?y:{}},children:[(0,i.Y)("div",{className:"hoverline",css:{height:"100%",width:2}}),n?.hideHandle?void 0:(0,i.Y)(u,{className:"resizeIcon",css:{position:"absolute",color:v.colors.textPlaceholder,top:"50%",left:0,transform:"translateY(-50%) rotate(90deg)"}})]})},children:(0,i.Y)("div",{css:{display:"flex",opacity:+!!O,transition:M?"opacity 0.2s ease-in-out":void 0,width:"100%",height:"100%",overflow:s?"hidden":void 0,overflowY:s?void 0:"auto",paddingBottom:s?void 0:0,minHeight:0},children:s?s(b):b})}),C&&(0,i.Y)("div",{css:{width:40*!!I,transition:M?"width 0.3s ease-in-out":void 0,flexShrink:0,display:"flex",alignItems:"start",paddingTop:v.spacing.md,overflow:"hidden"},children:(0,i.Y)(d.$n,{css:{flexShrink:0,marginLeft:v.spacing.xs,opacity:+!!w,transition:M?"opacity 0.05s ease-in-out":void 0,pointerEvents:w?"auto":"none"},componentId:"automated-tile-header-toggle-panel",icon:(0,i.Y)(c.A,{}),onClick:n?.onToggleCollapse,"aria-label":n?.collapseButtonLabel})})]})}},292946:(e,t,n)=>{n.d(t,{ku:()=>d,vV:()=>c});var i=n(610435),a=n(692738),r=n(561587),l=n(407374),o=n(964133),s=n(342411),u=n(448826);function d({field:e,control:t,...n}){let a=c(),s=(0,r.as)({control:t,name:e,rules:{validate:a}});return(0,i.FD)(i.FK,{children:[(0,i.Y)(l.p,{...s.field,...n}),s.fieldState.error&&s.fieldState.error.message&&(0,i.Y)(o.D.Message,{message:s.fieldState.error.message,type:"error"})]})}let c=()=>{let e=(0,s.tz)();return(0,a.useCallback)(t=>{for(let n of p){let i=n.validate(t);if(i)return e.formatMessage(i)}},[e])},p=[{type:"required",validate:e=>{if(!e)return(0,s.zR)({id:"iGKuEn",defaultMessage:"Name is required"})}},{type:"pattern",validate:e=>{if(!u.v.test(e))return(0,s.zR)({id:"+Hwa3W",defaultMessage:"Invalid pattern. Only letters, numbers, and dashes are allowed"})}},{type:"maxLength",validate:e=>{if(e.length>64)return(0,s.zR)({id:"ZyFLZV",defaultMessage:"Name must be 64 characters or fewer"})}}]},405487:(e,t,n)=>{n.d(t,{n:()=>C,X:()=>_});var i=n(610435),a=n(692738),r=n(497895),l=n(79570),o=n(79128),s=n(873393),u=n(694762),d=n(126927),c=n(342411),p=n(217985),m=n(12528),g=n(465252),f=n(382908),v=n(810152),R=n(465946),h=n(953565),E=n(993533);let y=({tile:e,tileType:t})=>{let{theme:n}=(0,r.wn)(),{data:l,loading:o}=(0,m.A)({skip:!e?.servingEndpointName,variables:{data:{name:e?.servingEndpointName}},pollInterval:1e4}),s=(0,a.useMemo)(()=>{let e=l?.modelservingapiGetInferenceEndpoint?.endpoint?.state;return(0,h.t)(e??null)},[l]),u=l?.modelservingapiGetInferenceEndpoint?.endpoint?.config?.config?.servedEntities?.[0]?.foundationModel?.name,d=t!==E.oa0.KA&&t!==E.oa0.MAS&&(u||o);if(e&&!e.servingEndpointName)return null;return(0,i.FD)("div",{css:{display:"flex",flexDirection:"column",padding:n.spacing.md,border:`1px solid ${n.colors.border}`,borderRadius:n.borders.borderRadiusMd},children:[(0,i.Y)(f.o.Title,{withoutMargins:!0,level:5,children:(0,i.Y)(c.sA,{id:"7WmWBY",defaultMessage:"Deployed Agent"})}),e?(0,i.FD)("div",{css:{display:"flex",gap:n.spacing.sm,alignItems:"center",flexWrap:"wrap"},children:[(0,i.Y)(f.o.Text,{color:"secondary",children:(0,i.Y)(c.sA,{id:"n5CEvG",defaultMessage:"Endpoint: <endpointName>{servingEndpointName}</endpointName>",values:{servingEndpointName:e.servingEndpointName,endpointName:t=>{let n;return e.servingEndpointName?(0,i.Y)(p.N,{componentId:"tiles.use.deploy.endpointDetailsLink",to:(n=e.servingEndpointName,`/ml/endpoints/${n}`),asTypographyLink:!0,children:t}):(0,i.Y)(v.I,{})}}})}),d&&(0,i.FD)(i.FK,{children:[(0,i.Y)(f.o.Text,{color:"secondary",children:"•"}),(0,i.Y)(f.o.Text,{color:"secondary",css:{display:"flex",alignItems:"center",gap:n.spacing.xs},children:(0,i.Y)(c.sA,{id:"4RiqCY",defaultMessage:"Model: <modelNameWrapper>{modelName}</modelNameWrapper>",values:{modelName:o?(0,i.Y)(v.I,{css:{width:100},label:(0,i.Y)(c.sA,{id:"R0rr/d",defaultMessage:"Loading served model name"})}):u,modelNameWrapper:e=>(0,i.Y)(f.o.Text,{children:e})}})})]}),s&&!o&&(0,i.FD)(i.FK,{children:[(0,i.Y)(f.o.Text,{color:"secondary",children:"•"}),(0,i.Y)(R.v,{color:s.color,icon:s.icon,componentId:"tiles.use.deploy.endpointStatusTag",children:s.text})]})]}):(0,i.Y)(v.I,{label:(0,i.Y)(c.sA,{id:"IF5s7D",defaultMessage:"Loading deployed Agent"})})]})},T=e=>`/ml/endpoints/${e}`;function b({statusTag:e,className:t}){let{theme:n}=(0,r.wn)();if(!e)return null;let a={lime:n.colors.lime,indigo:n.colors.indigo,coral:n.colors.coral,brown:n.colors.brown}[e.color]||n.colors.brown;return(0,i.Y)("div",{css:{borderRadius:"50%",backgroundColor:a,border:`1px solid ${n.colors.backgroundPrimary}`,zIndex:1},"data-testid":`endpoint-status-bubble-${e.state}`,className:t})}let I=()=>{let{tileApi:e}=(0,g.f)(),{data:t,error:n}=(0,m.A)({skip:!e.tile?.servingEndpointName,variables:{data:{name:e.tile?.servingEndpointName}},pollInterval:1e4});return(0,a.useMemo)(()=>{if(n&&!t||t?.modelservingapiGetInferenceEndpoint?.apiError)return{text:"Error",icon:null,color:"coral",testId:"endpoint-status-bubble-error",state:"not-ready"};let e=t?.modelservingapiGetInferenceEndpoint?.endpoint?.state;return e?(0,h.t)(e):null},[t,n])};function C({tileType:e}){let t=(0,c.tz)(),n=(0,a.useRef)(null),{tileApi:r}=(0,g.f)(),[m,f]=(0,a.useState)(!1),v=I();return(0,i.FD)(i.FK,{children:[(0,i.Y)(l.m,{componentId:"codegen_no_dynamic_webapp_web_js_genai_tiles_components_shared_endpointstatusbuttonwithmodal_91",content:t.formatMessage({id:"XaANMs",defaultMessage:"See Agent status"}),children:(0,i.Y)(o.$n,{ref:n,icon:(0,i.FD)("div",{css:{position:"relative"},children:[(0,i.Y)(s.A,{}),(0,i.Y)(b,{statusTag:v,css:{position:"absolute",width:7,height:7,transform:"translate(2px, 0px)",bottom:0,right:0}})]}),componentId:"codegen_no_dynamic_webapp_web_js_genai_tiles_components_shared_endpointstatusbuttonwithmodal_106",onClick:()=>{n.current?.blur(),f(!0)},"aria-label":t.formatMessage({id:"t1gjXY",defaultMessage:"View agent endpoint status"})})}),(0,i.Y)(u.aF,{componentId:"codegen_no_dynamic_webapp_web_js_genai_tiles_components_shared_endpointstatusbuttonwithmodal_116",visible:m,onCancel:()=>f(!1),title:(0,i.Y)(c.sA,{id:"gVrjcJ",defaultMessage:"Agent status"}),footer:r.tile?.servingEndpointName?(0,i.Y)(p.N,{openInNewTab:!0,componentId:"codegen_no_dynamic_webapp_web_js_genai_tiles_components_shared_endpointstatusbuttonwithmodal_127",to:T(r.tile?.servingEndpointName),asAnchorTag:!0,children:(0,i.Y)(o.$n,{componentId:"codegen_no_dynamic_webapp_web_js_genai_tiles_components_shared_endpointstatusbuttonwithmodal_133",type:"primary",endIcon:(0,i.Y)(d.A,{}),children:(0,i.Y)(c.sA,{id:"yalhX2",defaultMessage:"See endpoint details"})})}):null,children:r.tile?.servingEndpointName?(0,i.Y)(y,{tile:r.tile,tileType:e}):(0,i.Y)(c.sA,{id:"hkKXX8",defaultMessage:"No agent found"})})]})}function _({size:e}){let{tileApi:t}=(0,g.f)(),{theme:n}=(0,r.wn)(),a=I(),l=(0,i.Y)(o.$n,{icon:(0,i.Y)(b,{statusTag:a,css:{marginRight:1.5*n.spacing.xs,width:9,height:9}}),componentId:"tiles.shared.header.endpoint-status-button",endIcon:(0,i.Y)(d.A,{}),size:e,children:(0,i.Y)(c.sA,{id:"UXuK7h",defaultMessage:"Endpoint"})});if(t.tile?.servingEndpointName)return(0,i.Y)(p.N,{openInNewTab:!0,componentId:"codegen_no_dynamic_webapp_web_js_genai_tiles_components_shared_endpointstatusbuttonwithmodal_127",to:t.tile?.servingEndpointName?T(t.tile?.servingEndpointName):"",asChild:!0,children:l});return l}},478761:(e,t,n)=>{n.d(t,{g:()=>H});var i=n(321234),a=n(773345),r=n.n(a),l=n(692738),o=n(342411),s=n(886100),u=n(747129),d=n(148570),c=n(398752),p=n(993533),m=n(289298),g=n(594023),f=n(17095),v=n(141078),R=n(787571);let h=(0,v.J1)`
  fragment TilesEvaluationRunFragment on TilesEvaluationRun {
    jobRunId
    state
    mlflowRunId
    tileId
    jobRunEvents {
      eventType
      eventData
      creationTimestampMs
    }
    name
    tileModelName
    dataset {
      ...AiDatasetFragment
    }
  }
  ${R.f3}
`,E=(0,v.J1)`
  fragment EvalResultFragment on TilesEvalResult {
    tileModelName
    metricKey
    name
    value
    unit
    higherIsBetter
  }
`,y=(0,v.J1)`
  fragment TilesQualityReportFragment on TilesQualityReport {
    jobRunId
    mlflowRunId
    tileModelName
    dataset {
      ...AiDatasetFragment
    }
    evalResults {
      ...EvalResultFragment
      children {
        ...EvalResultFragment
        children {
          ...EvalResultFragment
          children {
            ...EvalResultFragment
            children {
              ...EvalResultFragment
              children {
                ...EvalResultFragment
                children {
                  ...EvalResultFragment
                  children {
                    ...EvalResultFragment
                    children {
                      ...EvalResultFragment
                      children {
                        ...EvalResultFragment
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ${R.f3}
  ${E}
`,T=(0,v.J1)`
  mutation CancelEvaluationRun($input: TilesCancelEvaluationRunRequestInput!)
  @component(name: "AgentBricks.AIFunction") {
    tilesCancelEvaluationRun(input: $input) {
      apiError {
        ...TileApiErrorFragment
      }
      ...TilesEvaluationRunFragment
    }
  }
  ${R.BP}
  ${h}
`,b=e=>(0,v.n_)(T,e),I=(0,v.J1)`
  mutation CreateEvaluationRun($input: TilesCreateEvaluationRunRequestInput!)
  @component(name: "AgentBricks.AIFunction") {
    tilesCreateEvaluationRun(input: $input) {
      apiError {
        ...TileApiErrorFragment
      }
      ...TilesEvaluationRunFragment
    }
  }
  ${R.BP}
  ${h}
`,C=e=>(0,v.n_)(I,e),_=(0,v.J1)`
  query GetTileEvaluationRun($input: TilesGetEvaluationRunRequestInput!) @component(name: "AgentBricks.AIFunction") {
    tilesGetEvaluationRun(input: $input) {
      apiError {
        ...TileApiErrorFragment
      }
      ...TilesEvaluationRunFragment
    }
  }
  ${R.BP}
  ${h}
`;var A=n(698514),M=n(736392);function w(e,t,n,i,a,r,l){try{var o=e[r](l),s=o.value}catch(e){n(e);return}o.done?t(s):Promise.resolve(s).then(i,a)}function O(e){return function(){var t=this,n=arguments;return new Promise(function(i,a){var r=e.apply(t,n);function l(e){w(r,i,a,l,o,"next",e)}function o(e){w(r,i,a,l,o,"throw",e)}l(void 0)})}}let L=(0,v.J1)`
  query ListTileEvaluationRuns($input: TilesListEvaluationRunsRequestInput!)
  @component(name: "AgentBricks.AIFunction") {
    tilesListEvaluationRuns(input: $input) {
      apiError {
        ...TileApiErrorFragment
      }
      evaluationRuns {
        ...TilesEvaluationRunFragment
      }
      nextPageToken
    }
  }
  ${R.BP}
  ${h}
`;function S(e,t,n,i,a,r,l){try{var o=e[r](l),s=o.value}catch(e){n(e);return}o.done?t(s):Promise.resolve(s).then(i,a)}function F(e){return function(){var t=this,n=arguments;return new Promise(function(i,a){var r=e.apply(t,n);function l(e){S(r,i,a,l,o,"next",e)}function o(e){S(r,i,a,l,o,"throw",e)}l(void 0)})}}let k=(0,v.J1)`
  query ListTileQualityReports($input: TilesListQualityReportsRequestInput!)
  @component(name: "AgentBricks.AIFunction") {
    tilesListQualityReports(input: $input) {
      apiError {
        ...TileApiErrorFragment
      }
      qualityReports {
        ...TilesQualityReportFragment
      }
      nextPageToken
    }
  }
  ${R.BP}
  ${y}
`;var D=n(842704);let N=e=>{if(!e)return null;return{...e,evalResults:(0,D.du)(e.evalResults)}},Y=(0,v.J1)`
  mutation CancelTileOptimizationRun($input: TilesCancelOptimizationRunRequestInput!)
  @component(name: "AgentBricks.AIFunction") {
    tilesCancelOptimizationRun(input: $input) {
      apiError {
        ...TileApiErrorFragment
      }
      state
      jobRunId
    }
  }
  ${R.BP}
`,z=(0,v.J1)`
  mutation CreateOptimizationRun($input: TilesCreateOptimizationRunRequestInput!)
  @component(name: "AgentBricks.AIFunction") {
    tilesCreateOptimizationRun(input: $input) {
      ...TilesOptimizationRunFragment
      apiError {
        ...TileApiErrorFragment
      }
    }
  }
  ${R.Uj}
  ${R.BP}
`,x=(0,v.J1)`
  query ListOptimizationRuns($input: TilesListOptimizationRunsRequestInput!)
  @component(name: "AgentBricks.AIFunction") {
    tilesListOptimizationRuns(input: $input) {
      optimizationRuns {
        ...TilesOptimizationRunFragment
      }
      nextPageToken
      apiError {
        ...TileApiErrorFragment
      }
    }
  }
  ${R.Uj}
  ${R.BP}
`;var P=n(835445),B=n(915512),$=n(693361),V=n(12528),U=n(953565);let Z=e=>e===p.oa0.KA||e===p.oa0.MAS;function H(e){let t,n,a,{tileId:R}=e,h=(0,o.tz)(),E=(0,l.useCallback)(({message:e})=>{(0,m.i)().addErrorNotification({dismissible:"button",title:h.formatMessage({id:"A/CLvC",defaultMessage:"Failed to save"}),message:e})},[h]),y=(0,M.W)({variables:{input:{tileId:R??""}},skip:!R,fetchPolicy:"cache-and-network"}),T=y.data?.tilesGetTile??void 0,I=(t={pollInterval:2e4,skip:!T||!T.latestOptimizationRunVersion,variables:{input:{tileId:R}}},(0,v.IT)(x,t)),w=(0,l.useMemo)(()=>{let e=I.data?.tilesListOptimizationRuns?.optimizationRuns??[],t=e.find(e=>e.version===T?.latestOptimizationRunVersion),n=r()(e.filter(e=>e.state===p.VU3.COMPLETED),e=>{let t=e.jobRunEvents?.find(e=>e.eventType===p.qfx.CREATED);return t?.creationTimestampMs??0});return{latest:t,lastSuccessful:n,list:e,loading:I.loading,hasInitialized:!y.loading&&T&&(!T.latestOptimizationRunVersion||!!I.data)}},[I.loading,y.loading,I.data,T]),S=(0,B.ez)({tileType:e.tileType,tile:T,tileLoading:y.loading}),D=(0,$.Q)({variables:{input:{tileId:R??""}},skip:!R}),H=(0,l.useMemo)(()=>{let e=(D.data?.tilesListTileModels?.tileModels??[]).find(e=>"0"===e.optimizationRunVersion);return e?.tileModelType??p.O0l.HIGH_QUALITY},[D.data]),{status:G,isReady:q,isLoading:K}=((e,t)=>{let{enabled:n=!0}=t||{},{data:i,loading:a}=(0,V.A)({skip:!e||!n,variables:{data:{name:e}},pollInterval:1e4}),r=i?.modelservingapiGetInferenceEndpoint?.endpoint?.state??null,o=i?.modelservingapiGetInferenceEndpoint?.endpoint?.state?.ready==="READY";return{status:(0,l.useMemo)(()=>(0,U.t)(r),[r]),isReady:o,isLoading:a}})(T?.servingEndpointName,{enabled:!!T}),[j,Q]=(n={variables:{input:{tileId:R}},update:(0,g.j)((0,g.t)()({query:M.fv,variables:{input:{tileId:R}},update:(0,i.jM)((e,t)=>{if(!e||!e.tilesGetTile||t.tilesCreateOptimizationRun?.apiError||!t.tilesCreateOptimizationRun?.version)return;e.tilesGetTile.latestOptimizationRunVersion=t.tilesCreateOptimizationRun.version})}),(0,g.t)()({query:x,variables:{input:{tileId:R}},update:(e,t)=>({tilesListOptimizationRuns:{__typename:"TilesListOptimizationRunsResponse",apiError:e?.tilesListOptimizationRuns?.apiError??null,optimizationRuns:[t.tilesCreateOptimizationRun,...e?.tilesListOptimizationRuns?.optimizationRuns??[]].filter(c.a),nextPageToken:e?.tilesListOptimizationRuns?.nextPageToken??null}})})),onCompleted:t=>{let n=t.tilesCreateOptimizationRun?.apiError;s.iT.sev2BurnRate((0,A.u)(e.tileType),"AiBricksCreateOptimizationRun-react-query-burnrate",u.i1.P99,u.Ip.Min0,!n,n,!1),n&&E({message:n.message})},onError:t=>{s.iT.sev2BurnRate((0,A.u)(e.tileType),"AiBricksCreateOptimizationRun-react-query-burnrate",u.i1.P99,u.Ip.Min0,!1,t,!1),E({message:t.message})}},(0,v.n_)(z,n)),[J,W]=(a={update:(0,g.t)()({query:x,variables:{input:{tileId:R}},update:(0,i.jM)((e,t)=>{let n=(e?.tilesListOptimizationRuns?.optimizationRuns??[]).findIndex(e=>e.jobRunId===t.tilesCancelOptimizationRun?.jobRunId);-1!==n&&e?.tilesListOptimizationRuns?.optimizationRuns&&(t.tilesCancelOptimizationRun?.state?e.tilesListOptimizationRuns.optimizationRuns[n].state=t.tilesCancelOptimizationRun.state:t.tilesCancelOptimizationRun?.apiError||(e.tilesListOptimizationRuns.optimizationRuns[n].state=p.VU3.CANCELLED))})}),onCompleted:t=>{let n=t.tilesCancelOptimizationRun?.apiError;s.iT.sev2BurnRate((0,A.u)(e.tileType),"AiBricksCancelOptimizationRun-react-mutation-burnrate",u.i1.P99,u.Ip.Min0,!n,n,!1),n&&E({message:n.message})},onError:t=>{s.iT.sev2BurnRate((0,A.u)(e.tileType),"AiBricksCancelOptimizationRun-react-mutation-burnrate",u.i1.P99,u.Ip.Min0,!1,t,!1),E({message:t.message})}},(0,v.n_)(Y,a)),X=(0,l.useCallback)(()=>{if(w.latest?.state===p.VU3.CREATED&&!Q.loading)return J({variables:{input:{tileId:R,version:w.latest.version}}});return Promise.resolve("no-running-optimization-run")},[J,w?.latest,R,Q.loading]),[ee,et]=(0,P.z)(e.tileType),en=(({tileId:e,mlflowRunId:t,tileType:n,surfaceErrorMessage:i,skip:a})=>{let[r,{data:o,loading:d,startPolling:c,stopPolling:p,called:m}]=(0,v._l)(_,{notifyOnNetworkStatusChange:!1});(0,l.useEffect)(()=>{if(a||!e||!t)return;r({variables:{input:{tileId:e,mlflowRunId:t}}})},[e,t,a,r]);let g=o?.tilesGetEvaluationRun??null,R=g?.state??null,h=(0,f.uD)(R);(0,l.useEffect)(()=>{if(!m)return;if(a)return void p();return(0,f.uD)(R)?c(1e4):p(),()=>p()},[R,a,c,p,m]);let[E,y]=C({variables:{input:{tileId:e,mlflowRunId:t}},refetchQueries:[M.fv,_],onCompleted:a=>O(function*(){yield r({variables:{input:{tileId:e,mlflowRunId:t}}});let l=a.tilesCreateEvaluationRun?.apiError;s.iT.sev2BurnRate((0,A.u)(n),"AiBricksCreateEvaluationRun-react-mutation-burnrate",u.i1.P99,u.Ip.Min0,!l,l,!1),l&&i({message:l.message})})(),onError:e=>{s.iT.sev2BurnRate((0,A.u)(n),"AiBricksCreateEvaluationRun-react-mutation-burnrate",u.i1.P99,u.Ip.Min0,!1,e,!1),i({message:e.message})}}),[T,I]=b({variables:{input:{tileId:e,mlflowRunId:t}},refetchQueries:[_],onCompleted:a=>O(function*(){yield r({variables:{input:{tileId:e,mlflowRunId:t}}});let l=a.tilesCancelEvaluationRun?.apiError;s.iT.sev2BurnRate((0,A.u)(n),"AiBricksCancelEvaluationRun-react-mutation-burnrate",u.i1.P99,u.Ip.Min0,!l,l,!1),l&&i({message:l.message})})(),onError:e=>{s.iT.sev2BurnRate((0,A.u)(n),"AiBricksCancelEvaluationRun-react-mutation-burnrate",u.i1.P99,u.Ip.Min0,!1,e,!1),i({message:e.message})}}),w=(0,l.useCallback)(()=>{if(!h)return i({message:"Evaluation run has already terminated. It cannot be cancelled."}),Promise.resolve("already-terminal");return p(),T()},[h,T,p,i]);return{loading:d,firstLoadDone:m&&!d,current:g,createEvaluationRun:{mutate:E,loading:y.loading},cancelEvaluationRun:{mutate:w,loading:I.loading},listEvaluationRuns:{runs:[g],loading:!1,error:null,refetch:()=>Promise.resolve({data:null,loading:!1,networkStatus:7})}}})({tileId:R,mlflowRunId:S?.mlflowRunId,tileType:e.tileType,surfaceErrorMessage:E,skip:(0,d.KV)(e.tileType)||Z(e.tileType)||!R}),ei=(({tileId:e,tileType:t,surfaceErrorMessage:n,skip:i,tileModelsQuery:a})=>{let r,o=a.data,d=a.loading,[c,{data:p,loading:m,error:g,refetch:f,called:R}]=(r={variables:{input:{tileId:e,pageSize:100}},fetchPolicy:"network-only",notifyOnNetworkStatusChange:!1},(0,v._l)(k,r));(0,l.useEffect)(()=>{if(i||!e)return;c({onCompleted:e=>{let i=e.tilesListQualityReports?.apiError;i&&(s.iT.sev2BurnRate((0,A.u)(t),"ListTileQualityReports-gql-query-burnrate",u.i1.P99,u.Ip.Min0,!1,i,!1),n({message:i.message}))},onError:e=>{s.iT.sev2BurnRate((0,A.u)(t),"ListTileQualityReports-gql-query-burnrate",u.i1.P99,u.Ip.Min0,!1,e,!1),n({message:e.message})}})},[i,e,c,t,n]);let{optimizedReport:h,baselineReport:E,allQualityReports:y}=(0,l.useMemo)(()=>{let e=o?.tilesListTileModels?.tileModels??[],t=p?.tilesListQualityReports?.qualityReports??[],n=e.find(e=>e.optimizationRunVersion&&Number(e.optimizationRunVersion)>0),i=e.find(e=>!e.optimizationRunVersion||0===Number(e.optimizationRunVersion)),a=t.map(N).filter(e=>null!==e);return{optimizedReport:(n?.name?a.find(e=>e.tileModelName===n.name):null)??null,baselineReport:(i?.name?a.find(e=>e.tileModelName===i.name):null)??null,allQualityReports:a}},[o,p]);return{loading:m||d,firstLoadDone:R&&!m&&!d,optimizedReport:h,baselineReport:E,listQualityReports:{reports:y,loading:m,error:g,refetch:(0,l.useCallback)(()=>{if(!e)return Promise.resolve({reports:[],error:"Missing required parameters"});return f()},[f,e])}}})({tileId:R,tileType:e.tileType,surfaceErrorMessage:E,tileModelsQuery:D,skip:!(0,d.y7)()||Z(e.tileType)}),ea=(({tileId:e,groundingRunMlflowRunId:t,tileType:n,surfaceErrorMessage:i,skip:a,onRunCompleted:r})=>{let o,[d,{data:c,loading:m,error:g,refetch:R,startPolling:h,stopPolling:E,called:y}]=(o={variables:{input:{tileId:e,pageSize:100}},fetchPolicy:"network-only",notifyOnNetworkStatusChange:!1},(0,v._l)(L,o));(0,l.useEffect)(()=>{if(a||!e)return;d({onCompleted:e=>{let t=e.tilesListEvaluationRuns?.apiError;t&&s.iT.sev2BurnRate((0,A.u)(n),"ListTileEvaluationRuns-gql-query-burnrate",u.i1.P99,u.Ip.Min0,!1,t,!1)},onError:e=>{s.iT.sev2BurnRate((0,A.u)(n),"ListTileEvaluationRuns-gql-query-burnrate",u.i1.P99,u.Ip.Min0,!1,e,!1)}})},[a,e,d,n]);let T=(0,l.useMemo)(()=>c?.tilesListEvaluationRuns?.evaluationRuns??[],[c]),I=(0,l.useMemo)(()=>{if(!T.length)return null;return T[0]??null},[T]),_=I?.state??null,w=(0,f.uD)(_);(0,f.hJ)(_,e=>{e===p.uZV.COMPLETED&&r?.()}),(0,l.useEffect)(()=>{if(a)return void E();return(0,f.uD)(_)?h(1e4):E(),()=>E()},[_,a,h,E]);let[O,S]=C({variables:{input:{tileId:e,mlflowRunId:t}},refetchQueries:[M.fv,L],onCompleted:e=>F(function*(){yield R();let t=e?.tilesCreateEvaluationRun?.apiError;s.iT.sev2BurnRate((0,A.u)(n),"AiBricksCreateEvaluationRun-react-mutation-burnrate",u.i1.P99,u.Ip.Min0,!t,t,!1),t&&i({message:t.message})})(),onError:e=>{s.iT.sev2BurnRate((0,A.u)(n),"AiBricksCreateEvaluationRun-react-mutation-burnrate",u.i1.P99,u.Ip.Min0,!1,e,!1),i({message:e.message})}}),[k,D]=b({variables:{input:{tileId:e,mlflowRunId:t}},refetchQueries:[L],onCompleted:e=>F(function*(){yield R();let t=e?.tilesCancelEvaluationRun?.apiError;s.iT.sev2BurnRate((0,A.u)(n),"AiBricksCancelEvaluationRun-react-mutation-burnrate",u.i1.P99,u.Ip.Min0,!t,t,!1),t&&i({message:t.message})})(),onError:e=>{s.iT.sev2BurnRate((0,A.u)(n),"AiBricksCancelEvaluationRun-react-mutation-burnrate",u.i1.P99,u.Ip.Min0,!1,e,!1),i({message:e.message})}}),N=(0,l.useCallback)(()=>{if(!w)return i({message:"Evaluation run has already terminated. It cannot be cancelled."}),Promise.resolve("already-terminal");if(!I?.mlflowRunId)return i({message:"We could not find an existing evaluation run to cancel."}),Promise.resolve("no-evaluation-run");return E(),k({variables:{input:{tileId:e,mlflowRunId:I?.mlflowRunId}}})},[w,k,E,i,e,I?.mlflowRunId]),Y=(0,l.useCallback)(()=>{if(!e)return Promise.resolve({runs:[],error:"Missing required parameters"});return R()},[R,e]);return{loading:m,firstLoadDone:y&&!m,current:I,createEvaluationRun:{mutate:O,loading:S.loading},cancelEvaluationRun:{mutate:N,loading:D.loading},listEvaluationRuns:{runs:T,loading:m,error:g,refetch:Y}}})({tileId:R,groundingRunMlflowRunId:S?.mlflowRunId,tileType:e.tileType,surfaceErrorMessage:E,skip:!(0,d.KV)(e.tileType)||Z(e.tileType),onRunCompleted:ei.listQualityReports?.refetch});return(0,f.hJ)(w.latest?.state,e=>{e===p.VU3.COMPLETED&&(ei.listQualityReports?.refetch?.(),D.refetch())}),(0,l.useMemo)(()=>({tileId:R,tile:T,loadingTile:y.loading,optimizationRuns:w,evaluationRuns:(0,d.KV)(e.tileType)?ea:en,qualityReports:ei,deleteTile:{mutate:ee,loading:et.loading},createOptimizationRun:{mutate:j,loading:Q.loading},cancelRunningOptimizationRun:{mutate:X,loading:Q.loading||W.loading},groundingRun:S,endpointStatus:G,endpointStatusIsLoading:K,endpointIsReady:q,currentBaselineModelType:H}),[R,T,y.loading,w,ee,et.loading,j,Q.loading,W.loading,X,S,G,q,K,ea,en,ei,e.tileType,H])}},599352:(e,t,n)=>{n.d(t,{Z:()=>T});var i=n(610435),a=n(956935),r=n(644091),l=n(813342),o=n.n(l),s=n(692738),u=n(224098),d=n(429608),c=n(497895),p=n(81659),m=n(810152),g=n(705639),f=n(53333),v=n(123252),R=n(661748),h=n(99206);function E(e,t,n,i,a,r,l){try{var o=e[r](l),s=o.value}catch(e){n(e);return}o.done?t(s):Promise.resolve(s).then(i,a)}function y(e){return function(){var t=this,n=arguments;return new Promise(function(i,a){var r=e.apply(t,n);function l(e){E(r,i,a,l,o,"next",e)}function o(e){E(r,i,a,l,o,"throw",e)}l(void 0)})}}let T=({children:e,customLoadingContent:t,dangerouslyAppendEmotionCSS:n,loading:l,loadingDescription:p,width:m,bottomBarContent:E,topBarContent:T,disableHover:I,onClick:C,href:_,navigateFn:A,anchorProps:M,componentId:w,analyticsEvents:O,shouldStartInteraction:L,...S})=>{let F=(0,R.W)("databricks.fe.observability.defaultComponentView.card",!1),{theme:k}=(0,c.wn)(),D=!o()(T),N=!o()(E),Y=(0,a.AH)(function(e){let{theme:t,width:n,hasTopBar:i,hasBottomBar:r,isInteractive:l}=e,o=l?{border:`1px solid ${t.colors.actionDefaultBorderHover}`,boxShadow:t.shadows.md}:{};return(0,a.AH)({color:t.colors.textPrimary,backgroundColor:t.colors.backgroundPrimary,position:"relative",display:"flex",justifyContent:"flex-start",flexDirection:"column",paddingRight:i||r?0:t.spacing.md,paddingLeft:i||r?0:t.spacing.md,paddingTop:i?0:t.spacing.md,paddingBottom:r?0:t.spacing.md,width:n??"fit-content",borderRadius:(0,h.S)(g.c.INFO_CONTAINER_BORDER_RADIUS,t.borders.borderRadiusMd),borderColor:t.colors.border,borderWidth:"1px",borderStyle:"solid","&:hover":o,"&:focus":o,cursor:l?"pointer":"default",boxShadow:t.shadows.sm,transition:"box-shadow 0.2s ease-in-out",textDecoration:"none !important",...(0,d.Cx)(t.options.enableAnimation)})}({theme:k,width:m,hasBottomBar:N,hasTopBar:D,isInteractive:!I&&!l&&(!!_||!!C||!!A)})),z=s.useRef(null),x=E?(0,i.Y)("div",{css:(0,a.AH)((0,a.AH)({marginTop:k.spacing.sm,borderBottomRightRadius:(0,h.S)(g.c.INFO_CONTAINER_BORDER_RADIUS,k.borders.borderRadiusSm),borderBottomLeftRadius:(0,h.S)(g.c.INFO_CONTAINER_BORDER_RADIUS,k.borders.borderRadiusSm),overflow:"hidden"})),children:E}):null,P=T?(0,i.Y)("div",{css:(0,a.AH)((0,a.AH)({marginBottom:k.spacing.sm,borderTopRightRadius:(0,h.S)(g.c.INFO_CONTAINER_BORDER_RADIUS,k.borders.borderRadiusSm),borderTopLeftRadius:(0,h.S)(g.c.INFO_CONTAINER_BORDER_RADIUS,k.borders.borderRadiusSm),overflow:"hidden"})),children:T}):null,B=D||N?k.spacing.lg:0,$=(0,s.useMemo)(()=>O??(F?[u.s7.OnClick,u.s7.OnView]:[u.s7.OnClick]),[O,F]),V=(0,u.ei)({componentType:u.v_.Card,componentId:w,analyticsEvents:$,shouldStartInteraction:L}),{elementRef:U}=(0,f.z)({onView:V.onView}),Z=(0,r.SV)([z,U]),H=(0,s.useCallback)(()=>y(function*(){A&&(yield A())})(),[A]),G=(0,s.useCallback)(e=>y(function*(){V.onClick(e),yield H(),C?.(e),z.current?.blur()})(),[H,V,C]),q=(0,s.useCallback)(e=>y(function*(){V.onClick(e),e.preventDefault(),yield H(),C?.(e)})(),[H,V,C]),K=(0,i.Y)("div",{ref:Z,tabIndex:_?void 0:0,...(0,v.VG)(),css:_?[]:[Y,n],onClick:l||_?void 0:G,...S,onKeyDown:e=>y(function*(){let t="Enter"===e.key,n=" "===e.key,i=e.target===e.currentTarget;(t||n)&&i&&(yield q(e)),S.onKeyDown?.(e)})(),...V.dataComponentProps,children:l?(0,i.Y)(b,{width:m,customLoadingContent:t,loadingDescription:p}):(0,i.FD)(i.FK,{children:[P,(0,i.Y)("div",{css:{padding:`0px ${B}px`,flexGrow:1},children:e}),x]})});return _?(0,i.Y)("a",{css:[Y,n],href:_,...M,children:K}):K};function b({customLoadingContent:e,width:t,loadingDescription:n}){if(e)return(0,i.Y)(i.FK,{children:e});return(0,i.FD)("div",{css:{width:t??300},children:[(0,i.Y)(p.o,{label:"Loading...",style:{width:"50%"},loadingDescription:n}),[...[,,,].keys()].map(e=>(0,i.Y)(m.I,{label:"Loading..."},e))]})}},603847:(e,t,n)=>{n.d(t,{F:()=>a,c:()=>r});var i=n(692738);let a=(0,i.createContext)(void 0),r=()=>{let e=(0,i.useContext)(a);if(!e)throw Error("useTileAppContext must be used within a TileAppContext.Provider");return e}},693361:(e,t,n)=>{n.d(t,{Q:()=>l});var i=n(141078),a=n(787571);let r=(0,i.J1)`
  query AiBricksListTileModels($input: TilesListTileModelsRequestInput!) @component(name: "AgentBricks.AIFunction") {
    tilesListTileModels(input: $input) {
      apiError {
        ...TileApiErrorFragment
      }
      nextPageToken
      tileModels {
        mlflowRunId
        name
        optimizationRunVersion
        tileId
        tileModelType
      }
    }
  }
  ${a.BP}
`,l=e=>(0,i.IT)(r,e)},756425:(e,t,n)=>{n.d(t,{$:()=>f});var i=n(692738),a=n(342411),r=n(87221),l=n(858383),o=n(488655),s=n(648782),u=n(737358),d=n(829339),c=n(936295),p=n(206346),m=n(224983),g=n(736392);function f(e){let{config:t}=e,{pathname:n}=(0,l.zy)(),f=(0,o.Zp)(),{tileId:v}=(0,s.g)(),R=(0,r.ki)(),h=(0,g.W)({variables:{input:{tileId:v??""}},skip:!v,fetchPolicy:"cache-and-network"}),E=h.data?.tilesGetTile??void 0,y=(0,i.useMemo)(()=>(0,c.Pg)({tileType:t.tileType}),[t.tileType]),T=(0,i.useMemo)(()=>t.views.find(e=>(0,u.B6)((0,m.$)({config:t,viewKey:e.key,tileId:v}),n))?.key,[n,t,v]),b=(0,i.useRef)(v);b.current=v;let I=(0,i.useCallback)((e,n)=>{let i="object"==typeof e?e.key:e,a="object"==typeof e&&e.tileId?e.tileId:b.current;R({eventType:"component_click",eventEntity:{entityType:"component",entitySubType:"button",entityId:"codegen_no_dynamic_webapp_web_js_genai_tiles_scaffolding_usetileapp_67"},eventPayload:{interactionSubject:!0,viewKey:i,tileId:a,tileType:t.tileType,previousViewKey:T}}),f((0,m.$)({config:t,viewKey:i,tileId:a}),n)},[f,t,R,T]),C=(0,a.tz)(),_=(0,i.useMemo)(()=>{if(E?.name)return E.name;if(v)return y;return(0,p.WW)({type:t.tileType,intl:C})},[E?.name,y,v,C,t.tileType]);return(0,d.r)({title:_}),{activeKey:T,tileId:v,navigateToView:I,loadingTile:h.loading,tileName:E?.name??y,tileType:t.tileType}}},802627:(e,t,n)=>{n.d(t,{A:()=>s});var i=n(610435),a=n(692738),r=n(375214);function l(e){return(0,i.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,i.FD)("g",{fill:"currentColor",clipPath:"url(#DotsCircleIcon_svg__a)",children:[(0,i.Y)("path",{d:"M6 8a.75.75 0 1 1-1.5 0A.75.75 0 0 1 6 8M8 8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M10.75 8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"}),(0,i.Y)("path",{fillRule:"evenodd",d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0",clipRule:"evenodd"})]}),(0,i.Y)("defs",{children:(0,i.Y)("clipPath",{children:(0,i.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let o=(0,a.forwardRef)((e,t)=>(0,i.Y)(r.I,{ref:t,...e,component:l}));o.displayName="DotsCircleIcon";let s=o},842704:(e,t,n)=>{n.d(t,{$I:()=>b,CH:()=>m,HF:()=>p,TG:()=>h,Wu:()=>R,cz:()=>g,d1:()=>u,du:()=>function e(t){if(!t)return[];return t.filter(e=>null!==e).map(t=>({...t,children:e(t.children)}))},eo:()=>f,hO:()=>v,kU:()=>E,o_:()=>y});var i=n(692738),a=n(342411),r=n(22191),l=n(626152),o=n(993533),s=n(885201);function u(e){switch(e){case o.yZl.OVERALL_SCORE:return(0,a.zR)({id:"pRd3Cg",defaultMessage:"Overall Quality"}).defaultMessage;case o.yZl.COST:return(0,a.zR)({id:"3dj41W",defaultMessage:"Cost"}).defaultMessage;case o.yZl.THROUGHPUT:return(0,a.zR)({id:"Mhr2zQ",defaultMessage:"Throughput"}).defaultMessage;case o.yZl.FIELD_SCORE_ACCURACY:return(0,a.zR)({id:"c/NTRw",defaultMessage:"Field Score Accuracy"}).defaultMessage;case o.yZl.GUIDELINE_SCORE:return(0,a.zR)({id:"o2LhC9",defaultMessage:"Guideline Score"}).defaultMessage;case o.yZl.SCHEMA_MATCH:return(0,a.zR)({id:"J/Kyhh",defaultMessage:"Schema Match"}).defaultMessage;case o.yZl.FIELD_SCORE_OVERALL_SCORE:return(0,a.zR)({id:"yPFzP0",defaultMessage:"Field Overall Score"}).defaultMessage;case o.yZl.FIELD_SCORE_F1:return(0,a.zR)({id:"Hve2Ec",defaultMessage:"Field F1 Score"}).defaultMessage;case o.yZl.FIELD_SCORE_PRECISION:return(0,a.zR)({id:"o+71uN",defaultMessage:"Field Precision"}).defaultMessage;case o.yZl.FIELD_SCORE_RECALL:return(0,a.zR)({id:"w/123t",defaultMessage:"Field Recall"}).defaultMessage;case o.yZl.FIELD_SCORE_OBJECT_SCORE_MEAN:return(0,a.zR)({id:"5eMdJl",defaultMessage:"Field Object Score Mean"}).defaultMessage;case o.yZl.FIELD_SCORE_SOFT_F1_MEAN:return(0,a.zR)({id:"AlLxHd",defaultMessage:"Field Soft F1 Mean"}).defaultMessage;case o.yZl.EVAL_METRIC_KEY_UNSPECIFIED:return(0,a.zR)({id:"isYbxN",defaultMessage:"Unspecified"}).defaultMessage;default:return(0,l.K)(e,r.Es.GenAIFrontend),""}}function d(e){if(!e)return[];let t=[];return!function e(n){for(let i of n)t.push(i),i.children&&e(i.children)}(e),t}function c(e,t){if(!e)return[];return d(e).filter(e=>e.metricKey===t)}function p(e){if(null==e)return null;let t=parseFloat(e);return isNaN(t)?null:t}function m(e,t,n=!0){let i;if(null===e||null===t)return null;let a=!1;return 0===t?0===e?i=0:(i=100*e,a=!0):i=(e-t)/t*100,{percentage:i,isImprovement:n?e>t:e<t,isAbsoluteChange:a}}function g(e,t){if(!e||!t)return null;let n=p(e.value),i=p(t.value);if(null===n||null===i)return null;return m(n,i,e.higherIsBetter??!0)}function f(e){if(!e)return[];let t=new Set([o.yZl.FIELD_SCORE_OVERALL_SCORE,o.yZl.GUIDELINE_SCORE,o.yZl.SCHEMA_MATCH]);return d(e).filter(e=>e.metricKey&&t.has(e.metricKey)).sort((e,t)=>{let n=e.metricKey===o.yZl.SCHEMA_MATCH,i=t.metricKey===o.yZl.SCHEMA_MATCH;return Number(n)-Number(i)})}function v(e){if(!e)return{overallScore:null,cost:null,throughput:null,schemaMatch:null};let t=c(e,o.yZl.OVERALL_SCORE),n=c(e,o.yZl.COST),i=c(e,o.yZl.THROUGHPUT),a=c(e,o.yZl.SCHEMA_MATCH);return{overallScore:t[0]??null,cost:n[0]??null,throughput:i[0]??null,schemaMatch:a[0]??null}}function R(e,t,n=e=>e.toLowerCase()){if(!t?.properties)return null;let i=(0,s.I)(t.properties),a=n(e),r=i.find(e=>e.path.join(".").toLowerCase()===a||e.path[e.path.length-1].toLowerCase()===a);if(r)return{displayName:r.path[r.path.length-1],type:r.type};return null}function h(e,t,n){let i,a=e||"Unknown";if(t===o.oa0.KIE&&n&&e){let t=R(e,n);if(t)return{displayName:t.displayName,type:t.type}}if(t===o.oa0.T2T||!n){let e=(a=a.replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase()).trim()).split(" "),t=[],n=new Set;for(let i of e){let e=i.toLowerCase();n.has(e)||(n.add(e),t.push(i))}a=t.join(" ")}return{displayName:a,type:i}}function E(e){let t=e?.value,n=e?.metricKey;if(null==t)return"-";let i="string"==typeof t?parseFloat(t):t;if(isNaN(i))return"-";switch(n){case o.yZl.COST:return T(i).formattedValue;case o.yZl.THROUGHPUT:return`${i.toFixed(1)} tok/s`;case o.yZl.OVERALL_SCORE:case o.yZl.FIELD_SCORE_ACCURACY:case o.yZl.FIELD_SCORE_OVERALL_SCORE:case o.yZl.FIELD_SCORE_F1:case o.yZl.FIELD_SCORE_PRECISION:case o.yZl.FIELD_SCORE_RECALL:case o.yZl.FIELD_SCORE_OBJECT_SCORE_MEAN:case o.yZl.FIELD_SCORE_SOFT_F1_MEAN:case o.yZl.GUIDELINE_SCORE:case o.yZl.SCHEMA_MATCH:{let e=parseFloat(i.toFixed(3)),t=e.toString();return t.includes(".")||(t=e.toFixed(1)),t}case o.yZl.EVAL_METRIC_KEY_UNSPECIFIED:default:return t.toString()}}let y=(e,t)=>(0,i.useMemo)(()=>{if(e===o.oa0.KIE&&t)try{return JSON.parse(t)}catch{}return null},[e,t]),T=e=>{if(e<100)return{formattedValue:"$",numberOfSigns:1};if(e<200)return{formattedValue:"$$",numberOfSigns:2};if(e<300)return{formattedValue:"$$$",numberOfSigns:3};return{formattedValue:"$$$$",numberOfSigns:4}},b=({totalCostSigns:e,costResult:t})=>{let n=p(t.value);if(null===n)return{formattedValue:"",numberOfSigns:0};let i=e-T(n).numberOfSigns;return{formattedValue:"$".repeat(i),numberOfSigns:i}}},877141:(e,t,n)=>{n.d(t,{B:()=>i});let i=(e,t)=>`${e}-${t??"loading"}`},953565:(e,t,n)=>{n.d(t,{t:()=>c});var i=n(610435);n(692738);var a=n(68925),r=n(742557),l=n(802627),o=n(21255),s=n(226211),u=n(342411),d=n(993533);let c=e=>{if(!e)return{text:(0,i.Y)(u.sA,{id:"92neql",defaultMessage:"Missing"}),icon:(0,i.Y)(a.A,{}),color:"brown",testId:"endpoints-list-table-missing-state",state:"missing"};if(e?.ready===d.X7f.READY)return{text:(0,i.Y)(u.sA,{id:"T+07fm",defaultMessage:"Ready"}),icon:(0,i.Y)(r.A,{}),color:"lime",testId:"endpoints-list-table-ready-state",state:"ready"};switch(e?.configUpdate){case d.hRc.IN_PROGRESS:return{text:(0,i.Y)(u.sA,{id:"8G9XYM",defaultMessage:"Updating"}),icon:(0,i.Y)(l.A,{}),color:"indigo",testId:"endpoints-list-table-updating-state",state:"updating"};case d.hRc.UPDATE_FAILED:return{text:(0,i.Y)(u.sA,{id:"r7wYTX",defaultMessage:"Update failed"}),icon:(0,i.Y)(a.A,{}),color:"coral",testId:"endpoints-list-table-failed-update-state",state:"update-failed"};case d.hRc.UPDATE_CANCELED:return{text:(0,i.Y)(u.sA,{id:"9vfm1g",defaultMessage:"Update canceled"}),icon:(0,i.Y)(o.A,{}),color:"coral",testId:"endpoints-list-table-canceled-update-state",state:"update-canceled"}}if(e?.suspend===d.GUK.STOPPED)return{text:(0,i.Y)(u.sA,{id:"048OOd",defaultMessage:"Stopped"}),icon:(0,i.Y)(s.A,{}),color:"coral",testId:"endpoints-list-table-stopped-state",state:"stopped"};return{text:(0,i.Y)(u.sA,{id:"Fy+JDS",defaultMessage:"Not ready"}),icon:(0,i.Y)(a.A,{}),color:"brown",testId:"endpoints-list-table-not-ready-state",state:"not-ready"}}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/1875.6829f50a5d.chunk.js.map