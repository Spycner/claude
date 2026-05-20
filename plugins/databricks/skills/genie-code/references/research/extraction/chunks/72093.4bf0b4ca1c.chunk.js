"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[72093],{19246:(e,t,n)=>{n.d(t,{m:()=>s});var a=n(610435),i=n(660488),r=n(429608),o=n(497895),l=n(123252);let s=({dangerouslySetAntdProps:e,...t})=>{let{theme:n}=(0,o.wn)();return(0,a.Y)(r.wC,{children:(0,a.Y)(i.A,{...(0,l.VG)(),mouseLeaveDelay:.25,...t,overlayStyle:{zIndex:n.options.zIndexBase+50,...t.overlayStyle},...e})})}},90710:(e,t,n)=>{n.d(t,{Y:()=>u});var a=n(610435),i=n(956935),r=n(692738),o=n(497895),l=n(861166),s=n(997791),d=n(639712),c=n(123252);let u=({breadcrumbs:e,title:t,titleAddOns:n,dangerouslyAppendEmotionCSS:u,buttons:p,children:m,titleElementLevel:f,allowTitleWrap:g=!0,...v})=>{let y,{classNamePrefix:b,theme:h}=(0,o.wn)(),E=Array.isArray(p)?p:p?[p]:[],S={titleWrapper:(0,i.AH)({display:"flex",alignItems:"flex-start",justifyContent:"space-between",flexWrap:g?"wrap":"nowrap",rowGap:h.spacing.sm,...0===E.length&&{paddingTop:e?0:h.spacing.xs/2,paddingBottom:h.spacing.xs/2}}),breadcrumbWrapper:(0,i.AH)({lineHeight:h.typography.lineHeightBase,marginBottom:h.spacing.xs}),title:(0,i.AH)({marginTop:0,marginBottom:"0 !important",alignSelf:"stretch",...!g&&{flex:1,minWidth:0}}),titleIfOtherElementsPresent:(0,i.AH)({marginTop:2}),buttonContainer:(0,i.AH)({marginLeft:8}),titleAddOnsWrapper:(0,i.AH)({display:"inline-flex",verticalAlign:"middle",alignItems:"center",flexWrap:"wrap",marginLeft:h.spacing.sm,gap:h.spacing.xs})};return(0,a.FD)("div",{...(0,c.VG)(),css:[(y={[`.${b}-breadcrumb`]:{lineHeight:h.typography.lineHeightBase}},(0,i.AH)((0,d.dg)(y))),u],...v,children:[e&&(0,a.Y)("div",{css:S.breadcrumbWrapper,children:e}),(0,a.FD)("div",{css:S.titleWrapper,children:[(0,a.FD)(s.h,{level:2,elementLevel:f,css:[S.title,(p||e)&&S.titleIfOtherElementsPresent],children:[t,n&&(0,a.Y)("span",{css:S.titleAddOnsWrapper,children:n})]}),p&&(0,a.Y)("div",{css:S.buttonContainer,children:(0,a.Y)(l.$,{dangerouslySetAntdProps:{wrap:!0},size:8,children:E.filter(Boolean).map((e,t)=>{let n=`dubois-header-button-${t}`;return r.isValidElement(e)?r.cloneElement(e,{key:e.key||n}):(0,a.Y)(r.Fragment,{children:e},n)})})})]})]})}},122194:(e,t,n)=>{n.d(t,{M:()=>r,v:()=>i});var a=n(627023);let i=e=>e?.startsWith("agent")??!1,r=e=>{let t=e?.config;if(!t?.traffic_config?.routes)return;let n=t.traffic_config.routes.filter(e=>(e.traffic_percentage??0)>0).sort((e,t)=>(t.traffic_percentage??0)-(e.traffic_percentage??0)),i=(0,a.b$)(t);for(let e of n){let t=(0,a.cW)(e),n=i.find(e=>e.name===t);if(n&&"environment_vars"in n&&n.environment_vars){let e;if(Array.isArray(n.environment_vars)){let t=n.environment_vars.find(e=>"MLFLOW_EXPERIMENT_ID"===e.key);e=t?.value}else e=n.environment_vars.MLFLOW_EXPERIMENT_ID;if(e)return e}}}},137052:(e,t,n)=>{n.d(t,{s:()=>i});var a=n(441535);let i=()=>({rateLimitsEnabled:(0,a.W)("databricks.ai.gateway.enableAiGatewayRateLimitsForAgents",!1),tokenBasedRateLimitsEnabled:!1,guardrailsEnabled:!1,customGuardrailsEnabled:!1,usageMonitoringTablesEnabled:(0,a.W)("databricks.ai.gateway.enableAiGatewayUsageTrackingForAgents",!1),fallbacksEnabled:!1})},140718:(e,t,n)=>{n.d(t,{XA:()=>h,lQ:()=>C,wS:()=>S});var a=n(610435),i=n(692738),r=n(46e3),o=n(806773),l=n(370427),s=n(907046),d=n(99442),c=n(224098),u=n(545251),p=n(53333),m=n(661748);let f=(0,i.createContext)(void 0),g=[c.s7.OnValueChange,c.s7.OnView],v=[c.s7.OnValueChange],y=(e,t)=>{for(let n of i.Children.toArray(e))if(i.isValidElement(n)){if(n.type===S&&n.props.value===t)return n;if(n.props.children){let e=y(n.props.children,t);if(e)return e}}},b=(e,t)=>{let n=y(e,t);if(i.isValidElement(n))return n.props.children;return""},h=(0,i.forwardRef)(({defaultValue:e,name:t,placeholder:n,children:l,contentProps:s,onChange:u,onOpenChange:y,id:h,label:S,value:C,validationState:A,forceCloseOnEscape:w,componentId:T,analyticsEvents:I,valueHasNoPii:k,...x},M)=>{let $=(0,m.W)("databricks.fe.observability.defaultComponentView.simpleSelect",!1),[_]=(0,i.useState)(()=>{if(C)return b(l,C);return""}),P=(0,i.useRef)(null);(0,i.useImperativeHandle)(M,()=>P.current,[]);let G=(0,i.useRef)(C),[Y,N]=(0,i.useState)(C),[L,D]=(0,i.useState)(_),O=void 0!==C,U=(0,i.useMemo)(()=>I??($?g:v),[I,$]),R=(0,c.ei)({componentType:c.v_.SimpleSelect,componentId:T,analyticsEvents:U,valueHasNoPii:k}),{elementRef:B}=(0,p.z)({onView:R.onView,value:C??e});(0,i.useEffect)(()=>{void 0!==C&&C!==G.current&&(N(C),G.current=C)},[C]),(0,i.useEffect)(()=>{if(O)return;let t=P.current,n=e||t?.value||"";N(n),G.current=n},[O,e,C]),(0,i.useEffect)(()=>{D(b(l,Y||""))},[Y,l]);let F=(0,i.useCallback)(e=>{R.onValueChange(e),P.current?.setAttribute("value",e||""),N(e),D(b(l,e)),u&&u({target:{name:t,type:"select",value:e},type:"change"})},[R,l,u,t]),V=(0,i.useMemo)(()=>({value:Y,onChange:F}),[Y,F]),W=(0,i.useCallback)(()=>{F("")},[F]);return(0,a.Y)(f.Provider,{value:V,children:(0,a.Y)(r.l,{componentId:void 0,value:Y,placeholder:n,label:S??x["aria-label"],id:h,children:(0,a.FD)(E,{onOpenChange:y,children:[(0,a.Y)(d.b,{ref:B,...x,validationState:A,onClear:W,id:h,value:Y,...R.dataComponentProps,children:L||n}),(0,a.Y)("input",{type:"hidden",ref:P}),(0,a.Y)(o.g,{forceCloseOnEscape:w,...s,children:l})]})})})}),E=({children:e,onOpenChange:t})=>{let{isOpen:n}=(0,u.w)();return(0,i.useEffect)(()=>{t&&t(!!n)},[n,t]),(0,a.Y)(a.FK,{children:e})},S=(0,i.forwardRef)(({value:e,children:t,...n},r)=>{let o=(0,i.useContext)(f);if(!o)throw Error("SimpleSelectOption must be used within a SimpleSelect");let{onChange:s}=o,d=(0,i.useCallback)(({value:e})=>{s(e)},[s]);return(0,a.Y)(l.O,{...n,ref:r,value:e,onChange:d,children:t})}),C=({children:e,label:t,...n})=>{if(!(0,i.useContext)(f))throw Error("SimpleSelectOptionGroup must be used within a SimpleSelect");return(0,a.Y)(s.n,{...n,name:t,children:e})}},161330:(e,t,n)=>{n.d(t,{I:()=>c});var a=n(610435),i=n(91958),r=n.n(i),o=n(79570),l=n(497895),s=n(201828);let d=r()(e=>({color:e.colors.textSecondary})),c=({content:e,iconTitle:t="More information",...n})=>{let{theme:i}=(0,l.wn)();return(0,a.Y)(o.m,{content:e,...n,children:(0,a.Y)(s.A,{tabIndex:0,"aria-hidden":"false","aria-label":t,alt:t,css:d(i)})})}},212336:(e,t,n)=>{n.r(t),n.d(t,{EditEndpointAiGatewayPageContainer:()=>H,default:()=>z});var a=n(610435),i=n(497895),r=n(339518),o=n(79128),l=n(722606),s=n(692738),d=n(561587),c=n(321527),u=n(441535),p=n(701181),m=n(461813),f=n(658501),g=n(416457),v=n(420750),y=n(923108),b=n(812542),h=n(391337),E=n(690963);let S=(0,E.J1)`
  mutation PutEndpointAiGatewayConfigMutation($data: ModelservingapiPutInferenceEndpointAiGatewayInput!)
  @component(name: "CustomModelServing.CPU") {
    modelservingapiPutInferenceEndpointAiGateway(input: $data) {
      apiError {
        code
        message
        traceId
      }
    }
  }
`;var C=n(603935),A=n(956207),w=n(496869),T=n(881166),I=n(805622),k=n(641760),x=n(597283),M=n(321309),$=n(627023),_=n(934009),P=n(404527),G=n(122194),Y=n(137052),N=n(850652),L=n(813342),D=n.n(L),O=n(512438),U=n(921426),R=n(520979),B=n(984137),F=n(152748),V=n(382908);function W(e,t,n,a,i,r,o){try{var l=e[r](o),s=l.value}catch(e){n(e);return}l.done?t(s):Promise.resolve(s).then(a,i)}function K({endpointData:e,endpointName:t}){let{theme:n}=(0,i.wn)(),p=(0,f.Zp)(),m=(0,B.Q)(),v=(0,u.W)("databricks.fe.mlflow.enableTelemetryInferenceTableUI",!1)&&(0,u.W)("otel_model_serving",!1),y=(0,T.LV)(e),b=(0,T.u0)(e),[A,{loading:L,data:H,error:z}]=(0,E.n_)(S),[j,{loading:J,data:q,error:X}]=(0,h.G)(),[Q,Z]=(0,s.useState)(!1),ee=e.modelservingapiGetInferenceEndpoint?.endpoint,et=ee?.endpointType==="FOUNDATION_MODEL_API"||ee?.endpointType==="EXTERNAL_MODEL",{guardrailsSectionEnabled:en,customGuardrailsSectionEnabled:ea,inferenceTablesSectionEnabled:ei,rateLimitsSectionEnabled:er,tokenBasedRateLimitsSectionEnabled:eo,usageTrackingSectionEnabled:el,fallbacksSectionEnabled:es,isCustomModelEndpoint:ed}=(e=>{let{enabled:t,guardrailsEnabled:n,customGuardrailsEnabled:a,inferenceTablesEnabled:i,rateLimitsEnabled:r,tokenBasedRateLimitsEnabled:o,usageMonitoringTablesEnabled:l,fallbacksEnabled:s}=(0,_.h)(),{enabled:d,guardrailsEnabled:c,customGuardrailsEnabled:p,inferenceTablesEnabled:m,rateLimitsEnabled:f,tokenBasedRateLimitsEnabled:g,usageMonitoringTablesEnabled:v,fallbacksEnabled:y}=(0,N.u)(e?.routeOptimized??!1),{enabled:b,guardrailsEnabled:h,customGuardrailsEnabled:E,inferenceTablesEnabled:S,rateLimitsEnabled:C,tokenBasedRateLimitsEnabled:A,usageMonitoringTablesEnabled:w,fallbacksEnabled:T}=(0,P.N)(),{enabled:I,guardrailsEnabled:L,customGuardrailsEnabled:U,inferenceTablesEnabled:R,rateLimitsEnabled:B,tokenBasedRateLimitsEnabled:F,usageMonitoringTablesEnabled:V,fallbacksEnabled:W}=(0,P.X)(),K=(e?.config?.config??e?.pendingConfig)?.servedEntities?.some(e=>e.optimizationConfig?.llmOptimized);if(t&&K)return{guardrailsSectionEnabled:n,customGuardrailsSectionEnabled:a,rateLimitsSectionEnabled:r,tokenBasedRateLimitsSectionEnabled:o,inferenceTablesSectionEnabled:i,usageTrackingSectionEnabled:l,fallbacksSectionEnabled:s,isCustomModelEndpoint:!1};let H=(0,G.v)(e?.task),z=(0,Y.s)(),j=e?.endpointType==="FOUNDATION_MODEL_API",J=(0,x.YD)(e?.name),q=(0,x.fd)(),X=(e?.config?.config??e?.pendingConfig)?.servedEntities?.every(e=>!D()(e.type)&&e.type===M.yU.EXTERNAL_MODEL),Q=(0,$.Uu)({problem_type:e?.tileEndpointMetadata?.problemType??void 0}),Z=(0,$._g)({problem_type:e?.tileEndpointMetadata?.problemType??void 0});if(j)return{guardrailsSectionEnabled:J&&(0,u.W)("databricks.ai.gateway.enableAiGatewayApiGuardrails",!1),customGuardrailsSectionEnabled:J&&q,rateLimitsSectionEnabled:J,tokenBasedRateLimitsSectionEnabled:J&&(0,u.W)("databricks.ai.gateway.enableTokenBasedRateLimitsForAiGateway",!1),inferenceTablesSectionEnabled:J&&(0,k.ei)(),usageTrackingSectionEnabled:J&&(0,k.ei)(),fallbacksSectionEnabled:!1,isCustomModelEndpoint:!1};if(H)return{guardrailsSectionEnabled:z.guardrailsEnabled,customGuardrailsSectionEnabled:z.customGuardrailsEnabled,rateLimitsSectionEnabled:z.rateLimitsEnabled,tokenBasedRateLimitsSectionEnabled:z.tokenBasedRateLimitsEnabled,inferenceTablesSectionEnabled:!0,usageTrackingSectionEnabled:z.usageMonitoringTablesEnabled,fallbacksSectionEnabled:z.fallbacksEnabled,isCustomModelEndpoint:!1};if(!H&&!K&&!X&&!Q&&!Z&&d)return{guardrailsSectionEnabled:c,customGuardrailsSectionEnabled:p,rateLimitsSectionEnabled:f,tokenBasedRateLimitsSectionEnabled:g,inferenceTablesSectionEnabled:m,usageTrackingSectionEnabled:v,fallbacksSectionEnabled:y,isCustomModelEndpoint:!0};if(Q&&I)return{guardrailsSectionEnabled:L,customGuardrailsSectionEnabled:U,rateLimitsSectionEnabled:B,tokenBasedRateLimitsSectionEnabled:F,inferenceTablesSectionEnabled:R,usageTrackingSectionEnabled:V,fallbacksSectionEnabled:W,isCustomModelEndpoint:!1};if(Z&&b)return{guardrailsSectionEnabled:h,customGuardrailsSectionEnabled:E,rateLimitsSectionEnabled:C,tokenBasedRateLimitsSectionEnabled:A,inferenceTablesSectionEnabled:S,usageTrackingSectionEnabled:w,fallbacksSectionEnabled:T,isCustomModelEndpoint:!1};let ee=(0,x.G4)(),et=(0,x.yw)(),en=(0,O.H)({servedEntities:(e?.config?.config??e?.pendingConfig)?.servedEntities}),ea=(0,x.Nl)(en),ei=(0,x.Tj)(),er=(0,k.ei)();return{guardrailsSectionEnabled:ea,customGuardrailsSectionEnabled:q,rateLimitsSectionEnabled:ee,tokenBasedRateLimitsSectionEnabled:et,inferenceTablesSectionEnabled:er,usageTrackingSectionEnabled:er,fallbacksSectionEnabled:ei,isCustomModelEndpoint:!1}})(ee),ec=ee?.aiGateway?.inferenceTableConfig?.enabled===!0,eu=v&&ed&&!ec,ep=(0,d.mN)({defaultValues:{data:y||{},flags:b},shouldUnregister:!1,resolver:R.V,mode:"onSubmit",reValidateMode:"onBlur"}),{formState:{errors:em}}=ep,ef=(0,T.u1)(H?.modelservingapiPutInferenceEndpointAiGateway,z),eg=(0,T.u1)(q?.modelservingapiPatchInferenceEndpointTelemetryConfig,X),ev=ef||eg,ey=L||J,[eb]=(0,f.ok)(e=>e.get("returnTo")),eh=(0,s.useCallback)(()=>p(eb||(0,C.df)(t)),[t,p,eb]),eE=(0,s.useCallback)(e=>{var n;return(n=function*(){try{let n={...(0,T.OJ)(e.data,e.flags),name:t};n=(0,T.oc)(n);let a=(0,T.Lk)(n),{aiGateway:i}=a,{data:r}=yield A({variables:{data:{aiGateway:i,name:t}}});if(r?.modelservingapiPutInferenceEndpointAiGateway?.apiError)return;if(eu&&a.telemetryConfig){let{data:e}=yield j({variables:{data:{name:t,telemetryConfig:a.telemetryConfig}}});if(e?.modelservingapiPatchInferenceEndpointTelemetryConfig?.apiError)return}else if(eu&&!e.data?.aiGateway?.inferenceTableConfig?.enabled){let{data:e}=yield j({variables:{data:{name:t}}});if(e?.modelservingapiPatchInferenceEndpointTelemetryConfig?.apiError)return}t&&p(eb||(0,C.df)(t))}catch(e){g.A.logErrorAndNotifyUser(e)}},function(){var e=this,t=arguments;return new Promise(function(a,i){var r=n.apply(e,t);function o(e){W(r,a,i,o,l,"next",e)}function l(e){W(r,a,i,o,l,"throw",e)}o(void 0)})})()},[A,j,p,t,eb,eu]),eS=(0,s.useCallback)(e=>{e?.data?.aiGateway?.rateLimits&&Z(!0)},[]);return(0,a.FD)(d.Op,{...ep,children:[(0,a.FD)("div",{css:{display:"flex",flexDirection:"column",height:"100%",overflow:"hidden"},children:[ev&&(0,a.Y)(r.F,{componentId:"mlflow.serving.edit_endpoint_page.error_alert",css:{marginBottom:n.spacing.md},type:"error",message:ev}),m&&et&&(0,a.Y)(r.F,{type:"info",componentId:"mlflow.endpoints.home.info-banner",css:{marginBottom:n.spacing.md},message:(0,a.Y)(c.A,{id:"PJjdcy",defaultMessage:"Update: We just launched a more powerful AI Gateway to govern your LLM endpoints and traffic. Try it out <aiGatewayLink>here</aiGatewayLink>.",values:{aiGatewayLink:e=>(0,a.Y)(f.N_,{to:F.X.AI_GATEWAY_HOME,children:(0,a.Y)(V.o.Link,{componentId:"mlflow.endpoints.home.info-banner.ai-gateway-link",children:e})})}})}),(0,a.FD)("div",{css:{flexGrow:1,overflowY:"auto",display:"flex",gap:32},children:[(0,a.Y)("div",{css:{flexGrow:1,maxWidth:900},children:(0,a.Y)(w._,{isCollapsible:!1,guardrailsSectionEnabled:en,customGuardrailsSectionEnabled:ea,rateLimitsSectionEnabled:er,tokenBasedRateLimitsSectionEnabled:eo,inferenceTablesSectionEnabled:ei,usageTrackingSectionEnabled:el,fallbacksSectionEnabled:es,isAiGatewayV2Enabled:m,isTelemetryInferenceTableEnabled:eu})}),(0,a.Y)("div",{css:{flexShrink:0,width:320,position:"sticky",top:0},children:(0,a.Y)(l.v,{children:(0,a.Y)(I.m,{includeServedEntities:!1,includeInferenceTable:!1,includeTags:!1,includeBudgetPolicyTags:!1,includeOpenTelemetry:!1,includeAiGateway:!0,isAiGatewayV2Enabled:m,isTelemetryInferenceTableEnabled:eu})})})]}),(0,a.FD)("div",{css:{display:"flex",justifyContent:"flex-end",gap:n.spacing.sm,padding:n.spacing.md,borderTop:`1px solid ${n.colors.border}`},children:[(0,a.Y)(o.$n,{componentId:"mlflow.serving.edit_endpoint_page.cancel_button",onClick:eh,children:(0,a.Y)(c.A,{id:"8YB0dP",defaultMessage:"Cancel"})}),(0,a.Y)(o.$n,{componentId:"mlflow.serving.edit_endpoint_page.submit_button",type:"primary",onClick:ep.handleSubmit(eE,eS),loading:ey,disabled:ey,children:(0,a.Y)(c.A,{id:"//cF4O",defaultMessage:"Update"})})]})]}),(0,a.Y)(U.$,{visible:Q,onClose:()=>Z(!1)})]})}function H(){let{endpointName:e}=(0,f.g)(),t=(0,B.Q)(),{data:n,loading:i}=(0,b.N)(e),r=n?.modelservingapiGetInferenceEndpoint?.endpoint,o=r?.endpointType==="FOUNDATION_MODEL_API"||r?.endpointType==="EXTERNAL_MODEL";return(0,a.FD)(p.L,{usesFullHeight:!0,children:[(0,a.Y)(y.z,{title:t&&o?(0,a.Y)(c.A,{id:"Wuqt5r",defaultMessage:"Edit AI Gateway (Legacy)"}):(0,a.Y)(c.A,{id:"ZJuiOO",defaultMessage:"Edit AI Gateway features"}),breadcrumbs:t?[(0,a.Y)(f.N_,{to:F.X.AI_GATEWAY_HOME,children:(0,a.Y)(c.A,{id:"HyQ/GO",defaultMessage:"AI Gateway"})}),(0,a.Y)(f.N_,{to:(0,f.tW)(F.X.AI_GATEWAY_ENDPOINT_DETAILS,{endpointId:e}),children:e})]:[(0,a.Y)(f.N_,{to:C.dv.ENDPOINTS_LIST,children:(0,a.Y)(c.A,{id:"tGpu3t",defaultMessage:"Serving endpoints"})}),(0,a.Y)(f.N_,{to:(0,C.df)(e||""),children:e})]}),(()=>{if(!e)return null;if(i||!n)return(0,a.Y)(A.q,{});return(0,a.Y)(K,{endpointData:n,endpointName:e})})()]})}let z=(0,v.X)(m.A.mlflowServices.MODEL_SERVING,H)},231225:(e,t,n)=>{n.d(t,{s:()=>s});var a=n(610435),i=n(944510),r=n(382908),o=n(295169),l=n(700012);let s=({budgetPolicyId:e})=>{let{data:t,loading:n,error:s}=(0,i.$)(e),{Hint:d}=r.o;if(s||t?.serverlesspolicyGetBudgetPolicy?.apiError){if(t?.serverlesspolicyGetBudgetPolicy?.apiError&&"PERMISSION_DENIED"===t.serverlesspolicyGetBudgetPolicy.apiError.code)return(0,a.Y)(d,{"data-testid":"budget-policy-not-available",children:"Restricted access to the current policy"});return null}return n?(0,a.Y)(o.x,{label:"Loading...",style:{height:16,width:50}}):t?.serverlesspolicyGetBudgetPolicy?.customTags.length?(0,a.Y)(l.t,{tags:t.serverlesspolicyGetBudgetPolicy.customTags}):null}},241393:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(610435),i=n(692738),r=n(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",d:"M8 1a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 8 1M8 6.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M8 11.5A1.75 1.75 0 1 0 8 15a1.75 1.75 0 0 0 0-3.5"})})}let l=(0,i.forwardRef)((e,t)=>(0,a.Y)(r.I,{ref:t,...e,component:o}));l.displayName="OverflowIcon";let s=l},262786:(e,t,n)=>{n.d(t,{B:()=>y,Q:()=>v});var a=n(610435),i=n(956935),r=n(692738),o=n(986912),l=n(497895),s=n(866370),d=n(325056),c=n(84008),u=n(293418),p=n(487404),m=n(59723),f=n(123252);let g={container:(0,i.AH)({display:"flex",flexDirection:"column",alignItems:"flex-start"}),cell:(0,i.AH)({width:"100%",height:8,borderRadius:4,background:"var(--table-skeleton-color)",marginTop:"var(--table-skeleton-row-vertical-margin)",marginBottom:"var(--table-skeleton-row-vertical-margin)"})},v=({lines:e=1,seed:t="",frameRate:n=60,style:i,label:s,...c})=>{let{theme:u}=(0,l.wn)(),{size:p}=(0,r.useContext)(d.G),v=(0,o.PT)(t);return(0,a.FD)("div",{...c,...(0,f.VG)(),"aria-busy":!0,css:g.container,role:"status",style:{...i,"--table-skeleton-color":u.isDarkMode?"rgba(255, 255, 255, 0.1)":"rgba(31, 38, 45, 0.1)","--table-skeleton-row-vertical-margin":"small"===p?"4px":"6px"},children:[[...Array(e)].map((e,t)=>(0,a.Y)("div",{css:[g.cell,(0,o.q5)(u,n),{width:`calc(100% - ${v[t%v.length]}px)`}]},t)),(0,a.Y)("span",{css:m.Q,children:s})]})},y=({table:e,actionColumnIds:t=[],numRows:n=3,loading:i=!0,loadingDescription:o="Table skeleton rows",label:f})=>{let{theme:g}=(0,l.wn)(),{grid:y}=(0,r.useContext)(d.G);return(0,a.FD)(a.FK,{children:[i&&(0,a.Y)(s.G,{description:o}),(0,a.Y)("span",{css:m.Q,children:f}),[...Array(n).keys()].map(n=>(0,a.Y)(u.H,{children:e.getFlatHeaders().map(e=>{let i=e.column.columnDef.meta,r=y?{maxWidth:e.getSize()}:{flex:e.getSize()/100};return t.includes(e.id)?(0,a.Y)(p.f,{children:(0,a.Y)(v,{style:{width:g.general.iconSize}})},`cell-${e.id}-${n}`):(0,a.Y)(c.n,{style:i?.styles??(i?.width!==void 0?{maxWidth:i.width}:r),children:(0,a.Y)(v,{seed:`skeleton-${e.id}-${n}`,lines:i?.numSkeletonLines??void 0})},`cell-${e.id}-${n}`)})},n))]})}},307171:(e,t,n)=>{n.d(t,{W:()=>o});var a=n(610435);n(692738);var i=n(497895),r=n(190645);let o=({className:e})=>{let{theme:t}=(0,i.wn)();return(0,a.Y)(r.W,{className:e})}},342145:(e,t,n)=>{n.d(t,{$y:()=>u,B_:()=>S,FQ:()=>g,OD:()=>l,T4:()=>o,U1:()=>v,UX:()=>m,Yu:()=>b,bB:()=>r,cC:()=>f,k0:()=>i,nU:()=>d,sO:()=>E,sh:()=>c,wp:()=>s,xY:()=>p,xe:()=>h,zD:()=>y});var a=n(141078);let i=(0,a.J1)`
  query allWorkspaceUsers__deduped($first: Int!, $after: String, $filter: String)
  @component(name: "IdentityMgmt.UserGroup") {
    allWorkspaceUsers(first: $first, after: $after, filter: $filter) {
      users {
        email
        fullname
        id
        isIndirect
        isServicePrincipal
        isWorkspaceAdmin
        status
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,r=(0,a.J1)`
  query allWorkspaceUsersLite($first: Int!, $after: String, $filter: String)
  @component(name: "IdentityMgmt.UserGroup") {
    allWorkspaceUsers(first: $first, after: $after, filter: $filter) {
      users {
        email
        fullname
        id
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,o=(0,a.J1)`
  query allWorkspaceServicePrincipals__deduped($first: Int!, $after: String, $filter: String)
  @component(name: "IdentityMgmt.UserGroup") {
    allWorkspaceServicePrincipals(first: $first, after: $after, filter: $filter) {
      users {
        applicationId: email
        fullname
        id
        isIndirect
        isServicePrincipal
        isWorkspaceAdmin
        status
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,l=(0,a.J1)`
  query allWorkspaceServicePrincipalsLite($first: Int!, $after: String, $filter: String)
  @component(name: "IdentityMgmt.UserGroup") {
    allWorkspaceServicePrincipals(first: $first, after: $after, filter: $filter) {
      users {
        applicationId: email
        fullname
        id
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,s=(0,a.J1)`
  query allWorkspaceGroups($first: Int!, $after: String, $filter: String) @component(name: "IdentityMgmt.UserGroup") {
    allWorkspaceGroups(first: $first, after: $after, filter: $filter) {
      groups {
        id
        groupname
        isWorkspaceLocal
        membersCount
        isExternal
        isIndirect
        exclusivityType
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,d=(0,a.J1)`
  query allWorkspaceGroupsLite($first: Int!, $after: String, $filter: String)
  @component(name: "IdentityMgmt.UserGroup") {
    allWorkspaceGroups(first: $first, after: $after, filter: $filter) {
      groups {
        id
        groupname
        isWorkspaceLocal
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,c=(0,a.J1)`
  query allAccountUsers($first: Int!, $after: String, $filter: String, $filterAdmin: Boolean)
  @component(name: "IdentityMgmt.UserGroup") {
    allAccountUsers(first: $first, after: $after, filter: $filter, filterAdmin: $filterAdmin) {
      users {
        email
        fullname
        id
        isAccountAdmin
        isServicePrincipal
        status
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,u=(0,a.J1)`
  query allAccountUsersLite($first: Int!, $after: String, $filter: String) @component(name: "IdentityMgmt.UserGroup") {
    allAccountUsers(first: $first, after: $after, filter: $filter) {
      users {
        email
        fullname
        id
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,p=(0,a.J1)`
  query allAccountServicePrincipals($first: Int!, $after: String, $filter: String, $filterAdmin: Boolean)
  @component(name: "IdentityMgmt.UserGroup") {
    allAccountServicePrincipals(first: $first, after: $after, filter: $filter, filterAdmin: $filterAdmin) {
      users {
        applicationId: email
        fullname
        id
        isAccountAdmin
        isServicePrincipal
        status
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,m=(0,a.J1)`
  query allAccountServicePrincipalsLite($first: Int!, $after: String, $filter: String)
  @component(name: "IdentityMgmt.UserGroup") {
    allAccountServicePrincipals(first: $first, after: $after, filter: $filter) {
      users {
        applicationId: email
        fullname
        id
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,f=(0,a.J1)`
  query allAccountGroups($first: Int!, $after: String, $filter: String) @component(name: "IdentityMgmt.UserGroup") {
    allAccountGroups(first: $first, after: $after, filter: $filter) {
      groups {
        id
        groupname
        membersCount
        isExternal
        externalId
        exclusivityType
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,g=(0,a.J1)`
  query allAccountGroupsLite($first: Int!, $after: String, $filter: String) @component(name: "IdentityMgmt.UserGroup") {
    allAccountGroups(first: $first, after: $after, filter: $filter) {
      groups {
        id
        groupname
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,v=(0,a.J1)`
  query getAccountUsersCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountUsersCount {
      totalCount
    }
  }
`,y=(0,a.J1)`
  query getAccountServicePrincipalsCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountServicePrincipalsCount {
      totalCount
    }
  }
`,b=(0,a.J1)`
  query getAccountGroupsCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountGroupsCount {
      totalCount
    }
  }
`,h=(0,a.J1)`
  query getWorkspaceUsersCount($shouldGetDirectlyAssignedOnly: Boolean) @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceUsersCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`,E=(0,a.J1)`
  query getWorkspaceServicePrincipalsCount($shouldGetDirectlyAssignedOnly: Boolean)
  @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceServicePrincipalsCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`,S=(0,a.J1)`
  query getWorkspaceGroupsCount($shouldGetDirectlyAssignedOnly: Boolean) @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceGroupsCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`},351318:(e,t,n)=>{let a;n.d(t,{W:()=>c});var i=n(610435),r=n(956935),o=n(421203),l=n(429608),s=n(497895),d=n(123252);let c=((a=({dangerouslySetAntdProps:e,...t})=>(0,i.Y)(l.wC,{children:(0,i.Y)(o.A,{...(0,d.VG)(),...t,...e})})).Item=o.A.Item,a.ItemGroup=o.A.ItemGroup,a.SubMenu=function({dangerouslySetAntdProps:e,...t}){let{theme:n}=(0,s.wn)();return(0,i.Y)(r.Z2,{children:({css:a})=>(0,i.Y)(o.A.SubMenu,{...(0,d.VG)(),popupClassName:a({zIndex:n.options.zIndexBase+50}),popupOffset:[-6,-10],...t,...e})})},a)},353893:(e,t,n)=>{n.d(t,{Q:()=>l});var a=n(445697),i=n(712774),r=n(603935);function o(e,t,n,a,i,r,o){try{var l=e[r](o),s=l.value}catch(e){n(e);return}l.done?t(s):Promise.resolve(s).then(a,i)}class l{static getEndpoints=(e={})=>(0,a.Tt)({...e,relativeUrl:`/ajax-api/2.0/${r.NK}`});static getEndpoint=({name:e})=>(0,a.Tt)({relativeUrl:`/ajax-api/2.0/${r.NK}/${e}`});static getEndpointMetrics=({endpointName:e,servedModelName:t,startEndTimestamps:n})=>{let i={...{endpoint_name:e,start_timestamp:n.start_timestamp,end_timestamp:n.end_timestamp},served_entity_name:t};return(0,a.Tt)({relativeUrl:`/ajax-api/2.0/${r.NK}/${e}/metrics-history`,data:i})};static getEndpointMetricsHistory=({endpointName:e,startTimestamp:t,endTimestamp:n,servedEntityName:i})=>{var l;return(l=function*(){let o=yield(0,a.Tt)({relativeUrl:`/ajax-api/2.0/${r.NK}/${e}/metrics-history`,data:{start_timestamp:t,end_timestamp:n,...void 0!==i&&{served_entity_name:i}}});if("object"!=typeof o||null===o)throw Error(`Unexpected response from /metrics-history: ${typeof o}`);return o},function(){var e=this,t=arguments;return new Promise(function(n,a){var i=l.apply(e,t);function r(e){o(i,n,a,r,s,"next",e)}function s(e){o(i,n,a,r,s,"throw",e)}r(void 0)})})()};static getEndpointInputExample=({name:e})=>(0,a.Tt)({relativeUrl:`/ajax-api/2.0/serving-endpoints/${e}/input-example`});static getEndpointModelSchema=({name:e})=>(0,a.Tt)({relativeUrl:`/ajax-api/2.0/serving-endpoints/${e}/openapi`});static getServedModelBuildLogs=({endpointName:e,servedModelName:t,configVersion:n})=>(0,a.Tt)({relativeUrl:`/ajax-api/2.0/${r.NK}/${e}/served-entities/${t}/build-logs`,data:{config_version:n}});static getServedModelServiceLogs=({endpointName:e,servedModelName:t,configVersion:n})=>(0,a.Tt)({relativeUrl:`/ajax-api/2.0/${r.NK}/${e}/served-entities/${t}/logs`,data:{config_version:n}});static getEndpointEvents=({endpointName:e})=>(0,a.Tt)({relativeUrl:`/ajax-api/2.0/${r.NK}/${e}/events`});static getEndpointPermission=({name:e})=>(0,a.Tt)({relativeUrl:`/ajax-api/2.0/${r.NK}/${e}/permissions/me`});static createEndpoint=({data:e,...t})=>(0,a.B2)({...t,data:e,relativeUrl:`/ajax-api/2.0/${r.NK}`});static patchEndpointTags=({data:e})=>(0,a.pb)({data:e,relativeUrl:`/ajax-api/2.0/${r.NK}/${e.name}/tags`});static patchEndpointBudgetPolicy=({data:e})=>(0,a.pb)({data:e,relativeUrl:`/ajax-api/2.0/${r.NK}/${e.name}/budget-policy`});static patchEndpointDescription=({data:e})=>(0,a.pb)({data:e,relativeUrl:`/ajax-api/2.0/${r.NK}/${e.name}/description`});static updateEndpoint=({data:e})=>{let{name:t,config:n}=e;return(0,a.gl)({data:n,relativeUrl:`/ajax-api/2.0/${r.NK}/${t}/config`})};static deleteEndpoint=e=>(0,a.ig)({data:{},relativeUrl:`/ajax-api/2.0/${r.NK}/${e}`});static invokeEndpoint=({name:e,data:t,headers:n={}})=>{let o={"Content-Type":(0,i._q)(null,i.uc.V2),"X-Databricks-Endpoints-API-Client":"Serving Endpoints UI",...n};return(0,a.B2)({data:t,relativeUrl:`/ajax-${r.RD}/${e}/invocations`,headerOptions:o,success:({resolve:e,response:t})=>{t.text().then(n=>{e({servedModel:t.headers.get("served-model-name"),body:n})})},forceDefaultFetch:!0})};static updateEndpointRateLimits=({data:e})=>{let{name:t,rate_limits:n}=e;return(0,a.gl)({data:{rate_limits:n},relativeUrl:`/ajax-api/2.0/${r.NK}/${t}/rate-limits`})};static getScopedOAuthToken=({id:e})=>{let t=new URLSearchParams({grant_type:"urn:databricks:params:grant-type:session",scope:"all-apis",client_id:"databricks-session",authorization_details:JSON.stringify([{type:"workspace_permission",object_type:"serving-endpoints",object_path:`/serving-endpoints/${e}`,actions:["query_inference_endpoint"]}])}).toString();return(0,a.B2)({data:t,headerOptions:{"Content-Type":"application/x-www-form-urlencoded"},relativeUrl:"/oidc/v1/token"})};static getInstanceProfiles=()=>(0,a.Tt)({relativeUrl:"/ajax-api/2.0/instance-profiles/list"});static getAgent=({modelName:e,modelVersion:t})=>(0,a.Tt)({relativeUrl:`/ajax-api/2.0/rag-studio/chains/${e}/versions/${t}`});static getPtModelNames=({name:e})=>(0,a.Tt)({relativeUrl:`/ajax-api/2.0/serving-endpoints/${e}/pt-model-names`})}},391337:(e,t,n)=>{n.d(t,{G:()=>r});var a=n(690963);let i=(0,a.J1)`
  mutation PatchInferenceEndpointTelemetryConfig($data: ModelservingapiPatchInferenceEndpointTelemetryConfigInput!)
  @component(name: "CustomModelServing.CPU") {
    modelservingapiPatchInferenceEndpointTelemetryConfig(input: $data) {
      apiError {
        code
        message
      }
    }
  }
`,r=()=>(0,a.n_)(i)},404527:(e,t,n)=>{n.d(t,{N:()=>r,X:()=>i});var a=n(441535);let i=()=>({enabled:(0,a.W)("databricks.model.serving.enableAiGatewaySectionForInteractiveTileEndpoints",!1),rateLimitsEnabled:!1,tokenBasedRateLimitsEnabled:!1,inferenceTablesEnabled:!0,guardrailsEnabled:!1,customGuardrailsEnabled:!1,usageMonitoringTablesEnabled:!1,fallbacksEnabled:!1,isUsageTrackingEnabledByDefault:!1}),r=()=>({enabled:(0,a.W)("databricks.model.serving.enableAiGatewaySectionForAutomatedTileEndpoints",!1),rateLimitsEnabled:!1,tokenBasedRateLimitsEnabled:!1,inferenceTablesEnabled:!0,guardrailsEnabled:!1,customGuardrailsEnabled:!1,usageMonitoringTablesEnabled:!1,fallbacksEnabled:!1,isUsageTrackingEnabledByDefault:!1})},404991:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(610435),i=n(692738),r=n(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m2.207-10.189a2.25 2.25 0 0 1-1.457 2.56V9h-1.5V7.75A.75.75 0 0 1 8 7a.75.75 0 1 0-.75-.75h-1.5a2.25 2.25 0 0 1 4.457-.439M7.25 10.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0",clipRule:"evenodd"})})}let l=(0,i.forwardRef)((e,t)=>(0,a.Y)(r.I,{ref:t,...e,component:o}));l.displayName="QuestionMarkFillIcon";let s=l},413776:(e,t,n)=>{n.d(t,{z:()=>d});var a=n(140808),i=n(627023),r=n(772388),o=n(862286),l=n(692738),s=n(628209);let d=({workloadSize:e,workloadType:t,scaleToZero:n,minProvisionedConcurrency:d,maxProvisionedConcurrency:c,isCustomValid:u})=>{let p=(0,s.wA)();(0,l.useEffect)(()=>{p((0,r.pd)())},[p]);let m=(0,s.d4)(e=>e.entities.supportedWorkloadConfigs),f=m?.workload_configs?.find(e=>e.workload_type===t),g=(f?.workload_sizes||a.pd).find(t=>t.key===e);if(("Custom"===e||void 0===e)&&(0,o.GD)())return{workloadSizeConfig:{key:"Custom"},workloadTypeConfig:(0,a.bL)().find(e=>e.key===t),concurrencyDescription:u&&void 0!==d&&void 0!==c?(0,i.rh)(d,c):void 0};if(!g)return{};let v=(0,a.bL)().find(e=>e.key===t),y=n?0:g.min_concurrency,b=(0,i.rh)(y,g.max_concurrency);return{workloadSizeConfig:g,workloadTypeConfig:v,concurrencyDescription:b}}},420750:(e,t,n)=>{n.d(t,{X:()=>s});var a=n(610435);n(692738),n(336330);var i=n(863708),r=n(134256),o=n(461813),l=n(321527);function s(e,t,n=(0,a.Y)(l.A,{id:"4jGMiw",defaultMessage:"Unknown Error Occurred."}),d){if(d)return(0,i.hx)(o.A.mapServiceToESComponent(e),o.A.mapServiceToErrorBoundaryId(e),t,void 0,void 0,void 0,d);return(0,i.hx)(o.A.mapServiceToESComponent(e),o.A.mapServiceToErrorBoundaryId(e),t,(0,a.Y)(r.T,{message:n}))}},461813:(e,t,n)=>{n.d(t,{A:()=>d,h:()=>s}),n(692738);var a=n(22191),i=n(726977),r=n(181105),o=n(967325),l=n(941263);let s=(e,t)=>{let n;if(!(e instanceof o.s))return;let{status:a}=e,i={status:a,requestId:t};e.getErrorCode()===l.tG.RESOURCE_DOES_NOT_EXIST&&(n=new r.m_(i)),e.getErrorCode()===l.tG.PERMISSION_DENIED&&(n=new r.i_(i)),e.getErrorCode()===l.tG.INTERNAL_ERROR&&(n=new r.PO(i)),e.getErrorCode()===l.tG.INVALID_PARAMETER_VALUE&&(n=new r.v7(i));let s=e.getMessageField();return n&&s&&(n.message=s),n},d=class{static mlflowServices={MODEL_REGISTRY:"Model Registry",EXPERIMENTS:"Experiments",CHAT_SESSIONS:"Chat Sessions",MODEL_SERVING:"Model Serving",FEATURE_STORE:"Feature Store",AI_GATEWAY:"AI Gateway",RUN_TRACKING:"Run Tracking"};static mapServiceToESComponent(e){if(e===this.mlflowServices.MODEL_REGISTRY)return a.Es.ModelRegistry;if(e===this.mlflowServices.EXPERIMENTS||e===this.mlflowServices.RUN_TRACKING)return a.Es.MlExperiments;if(e===this.mlflowServices.CHAT_SESSIONS)return a.Es.MlFlowOSS;if(e===this.mlflowServices.FEATURE_STORE)return a.Es.MlFeatureStore;if(e===this.mlflowServices.MODEL_SERVING)return a.Es.MlCustomModelServingCPU;else if(e===this.mlflowServices.AI_GATEWAY)return a.Es.AiGateway;else return a.Es.MlFlow}static mapServiceToErrorBoundaryId(e){if(e===this.mlflowServices.MODEL_REGISTRY)return i.s.ModelRegistry;if(e===this.mlflowServices.EXPERIMENTS||e===this.mlflowServices.RUN_TRACKING)return i.s.MlExperiments;if(e===this.mlflowServices.CHAT_SESSIONS)return i.s.MlExperimentChatSessions;if(e===this.mlflowServices.FEATURE_STORE)return i.s.MlFeatureStore;if(e===this.mlflowServices.MODEL_SERVING)return i.s.ModelServing;else if(e===this.mlflowServices.AI_GATEWAY)return i.s.AiGateway;else return i.s.Mlflow}}},487404:(e,t,n)=>{n.d(t,{f:()=>m});var a=n(610435),i=n(956935),r=n(783772),o=n.n(r),l=n(692738),s=n(325056),d=n(293418),c=n(114826),u=n(497895);let p={container:(0,i.AH)({width:32,paddingTop:"var(--vertical-padding)",paddingBottom:"var(--vertical-padding)",display:"flex",alignItems:"start",justifyContent:"center"})},m=(0,l.forwardRef)(function({children:e,style:t,className:n,...i},r){let{size:m}=(0,l.useContext)(s.G),{isHeader:f}=(0,l.useContext)(d.g),{theme:g}=(0,u.wn)();return(0,a.Y)("div",{...i,ref:r,role:f?"columnheader":"cell",style:{...t,"--vertical-padding":"default"===m?`${g.spacing.xs}px`:0},css:p.container,className:o()(n,!f&&c.TJ),children:e})})},511833:(e,t,n)=>{n.d(t,{x:()=>p});var a=n(610435),i=n(74438),r=n(407374),o=n(321527),l=n(993204),s=n(692738),d=n(628209),c=n(772388);let u=({label:e,onChange:t,listOfValues:n,selectedValue:r,disabled:l,prefixRequired:s})=>(0,a.Y)(i._v,{value:r,onChange:t,disabled:l,placeholder:(0,a.Y)(o.A,{id:"9kR9+V",defaultMessage:"Select {label}",values:{label:e}}),css:{width:"100%"},dangerouslySetAntdProps:{showSearch:!0},"aria-label":`Select ${e}`,children:n?.map(e=>(0,a.Y)(i._v.Option,{value:e,children:e},e))});function p({autoCapture:e,onChange:t,disabled:n,prefixRequired:i}){let o=(0,l.A)(),m=(0,d.d4)(e=>e.entities.ucCatalogs),f=(0,d.d4)(e=>e.entities.ucSchemas),g=(0,d.wA)();return(0,s.useEffect)(()=>{n||g((0,c.rC)())},[g,n]),(0,s.useEffect)(()=>{e?.catalog_name&&g((0,c.Rk)(e.catalog_name))},[g,e?.catalog_name]),(0,a.FD)("div",{css:{display:"flex",gap:4},children:[(0,a.Y)(u,{disabled:n,label:"catalog",listOfValues:m?.catalogNames,selectedValue:e?.catalog_name,onChange:e=>t({catalog_name:e,schema_name:void 0})}),(0,a.Y)(u,{disabled:n,label:"schema",listOfValues:e?.catalog_name?f?.schemaNames:[],selectedValue:e?.schema_name,onChange:e=>t({schema_name:e})}),(0,a.Y)(r.p,{componentId:"codegen_mlflow_app_src_endpoints_components_endpoint-form_autocaptureconfigselector.tsx_94",disabled:n,value:e?.table_name_prefix,onChange:e=>t({table_name_prefix:e.target.value}),placeholder:i?o.formatMessage({id:"Rl1vg9",defaultMessage:"Table prefix"}):o.formatMessage({id:"2Udp8F",defaultMessage:"Table prefix (optional)"})})]})}},520979:(e,t,n)=>{function a(e,t,n,a,i,r,o){try{var l=e[r](o),s=l.value}catch(e){n(e);return}l.done?t(s):Promise.resolve(s).then(a,i)}n.d(t,{V:()=>r});let i=e=>{if(!e||""===e.trim())return!0;let t=e.trim();return/^\d+$/.test(t)},r=e=>{var t;return(t=function*(){let t={};return(e=>{if(!e||0===e.length)return!0;return e.every(e=>{let t=e.calls?.toString()||"",n=e.tokens?.toString()||"";return i(t)&&i(n)})})(e?.data?.aiGateway?.rateLimits||[])||(t.data={aiGateway:{rateLimits:{message:"Rate limits must be non-negative integers",type:"validation"}}}),{values:0===Object.keys(t).length?e:{},errors:t}},function(){var e=this,n=arguments;return new Promise(function(i,r){var o=t.apply(e,n);function l(e){a(o,i,r,l,s,"next",e)}function s(e){a(o,i,r,l,s,"throw",e)}l(void 0)})})()}},554202:(e,t,n)=>{n.d(t,{D:()=>o});var a=n(610435),i=n(321527);let r=(e=0,t=1)=>parseFloat((e*t).toFixed(3)),o=({min:e,max:t,unit:n})=>e===t?(0,a.Y)(i.A,{id:"kMgMO/",defaultMessage:"{dbu} DBU",values:{dbu:r(e,n)}}):(0,a.Y)(i.A,{id:"pU6cMJ",defaultMessage:"{minDbu}-{maxDbu} DBU",values:{minDbu:r(e,n),maxDbu:r(t,n)}})},574132:(e,t,n)=>{n.d(t,{y:()=>r});var a=n(610435);n(692738);var i=n(497895);let r=({disabled:e,children:t})=>{let{theme:n}=(0,i.wn)();return(0,a.Y)("div",{css:{color:n.colors.textSecondary,fontSize:n.typography.fontSizeSm,...e&&{color:n.colors.actionDisabledText}},children:t})}},605107:(e,t,n)=>{n.d(t,{X:()=>r});var a=n(610435),i=n(497895);let r=({children:e,...t})=>{let{theme:n}=(0,i.wn)();return(0,a.Y)("div",{...t,css:{display:"flex",flexDirection:"row",alignItems:"flex-start",padding:`${n.spacing.xs}px ${n.spacing.lg/2}px`,alignSelf:"stretch",fontWeight:400,color:n.colors.textSecondary},children:e})}},634694:(e,t,n)=>{n.d(t,{L:()=>l});var a=n(610435),i=n(661114),r=n(429608),o=n(497895);let l=({content:e,dangerouslySetAntdProps:t,...n})=>{let{theme:l}=(0,o.wn)();return(0,a.Y)(r.wC,{children:(0,a.Y)(i.A,{zIndex:l.options.zIndexBase+30,...n,content:(0,a.Y)(r.dg,{children:e})})})}},661114:(e,t,n)=>{n.d(t,{A:()=>u});var a=n(657709),i=n(692738),r=n(889486),o=n(513266),l=function(e){if(!e)return null;if("function"==typeof e)return e();return e},s=n(705214),d=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)0>t.indexOf(a[i])&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]]);return n},c=i.forwardRef(function(e,t){var n=e.prefixCls,c=e.title,u=e.content,p=d(e,["prefixCls","title","content"]),m=i.useContext(o.QO).getPrefixCls,f=m("popover",n),g=m();return i.createElement(r.A,(0,a.A)({},p,{prefixCls:f,ref:t,overlay:i.createElement(i.Fragment,null,c&&i.createElement("div",{className:"".concat(f,"-title")},l(c)),i.createElement("div",{className:"".concat(f,"-inner-content")},l(u))),transitionName:(0,s.b)(g,"zoom-big",p.transitionName)}))});c.displayName="Popover",c.defaultProps={placement:"top",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};let u=c},700012:(e,t,n)=>{n.d(t,{t:()=>s});var a=n(610435),i=n(465946),r=n(79128),o=n(658345),l=n(627023);let s=({tags:e,handleDeleteTag:t})=>e?(0,a.Y)(a.FK,{children:e.map((e,n)=>(0,a.Y)(i.v,{title:(0,l.VY)(e.key,e.value,!0)===(0,l.VY)(e.key,e.value,!1)?void 0:(0,l.VY)(e.key,e.value,!0),componentId:"mlflow.serving.endpoint-tag",children:(0,a.FD)("div",{"data-testid":t?"endpoint-tag-deletable":"endpoint-tag-view",children:[(0,l.VY)(e.key,e.value),t&&(0,a.Y)(r.$n,{componentId:"mlflow.serving.endpoint-tag-delete-button",size:"small",onClick:()=>t(e.key),icon:(0,a.Y)(o.A,{}),"data-testid":"endpoint-tag-delete-button"})]})},n))}):null},701181:(e,t,n)=>{n.d(t,{L:()=>o});var a=n(610435);n(692738);var i=n(52430),r=n(764236);function o({usesFullHeight:e=!1,children:t}){return(0,a.FD)(i.f,{css:e?l.useFullHeightLayout:l.wrapper,children:[(0,a.Y)(r.h,{css:l.fixedSpacer}),e?t:(0,a.Y)("div",{css:l.container,children:t})]})}let l={useFullHeightLayout:{height:"100%",display:"flex",flexDirection:"column","&:last-child":{flexGrow:1}},wrapper:{flex:1},fixedSpacer:{flexShrink:0},container:{width:"100%",flexGrow:1,paddingBottom:24}}},712774:(e,t,n)=>{n.d(t,{$_:()=>l,B:()=>s,BR:()=>f,IW:()=>v,Uk:()=>m,Zb:()=>g,_q:()=>d,fR:()=>u,m_:()=>c,uc:()=>o});var a=n(610435);n(422292),n(856116),n(692738);var i=n(634694),r=n(404991);let o={V1:"V1",V2:"V2"},l=36e5,s=120954e4,d=(e,t)=>{if(t===o.V1&&e&&e===p.DATAFRAME)return"application/json; format=pandas-split";return"application/json"};function c({contents:e}){return(0,a.Y)(i.L,{overlayClassName:"mlflow-serving-tooltip",content:e,placement:"bottom",children:(0,a.Y)(r.A,{css:{marginLeft:4}})})}let u={BROWSER:"Browser",CURL:"Curl",PYTHON:"Python",SQL:"SQL",OAUTH:"OAUTH"},p={DATAFRAME:"dataframe"},m={SERVICE_LOGS:"Service Logs",BUILD_LOGS:"Build Logs"};function f(e,t=o.V2,n=!1){return JSON.stringify(t===o.V1?e:n?{dataframe_split:e.inputs,params:e.params}:{dataframe_split:e},null,2)}function g(e,t=!1){return JSON.stringify(t?{inputs:e.inputs,params:e.params}:e,null,2)}function v(e){return JSON.stringify("string"==typeof e?JSON.parse(e):e,null,2)}},740091:(e,t,n)=>{n.d(t,{q:()=>r});var a=n(610435),i=n(321527);let r=({min:e,max:t})=>e===t?(0,a.Y)(i.A,{id:"9uMUNA",defaultMessage:"{pt} tokens/second",values:{pt:e}}):(0,a.Y)(i.A,{id:"gMzJXV",defaultMessage:"{min}-{max} tokens/second",values:{min:e,max:t}})},768622:(e,t,n)=>{n.d(t,{Jq:()=>h,bb:()=>S});var a=n(610435),i=n(956935),r=n(802558),o=n.n(r),l=n(91958),s=n.n(l),d=n(692738),c=n(497895),u=n(194901),p=n(161330),m=n(174541),f=n(574132),g=n(639712);let v={paddingTop:2},y={width:16,flexShrink:0},b={display:"flex"},h=s()((e,t,n)=>(0,i.AH)({...n&&{pointerEvents:"none",color:e.colors.actionDisabledText},...t&&{background:e.colors.actionTertiaryBackgroundHover}}),(e,t,n)=>`${(0,g.H6)(e)}|${t}|${!!n}`),E=s()((e,t)=>(0,i.AH)({marginLeft:e.spacing.sm,fontSize:e.typography.fontSizeBase,fontStyle:"normal",fontWeight:400,cursor:"pointer",overflow:"hidden",wordBreak:"break-word",..."ellipsis"===t&&{textOverflow:"ellipsis",whiteSpace:"nowrap"}}),(e,t)=>`${(0,g.H6)(e)}|${t}`),S=(0,d.forwardRef)(({item:e,index:t,comboboxState:n,textOverflowMode:i="multiline",isDisabled:r,disabledReason:l,hintContent:s,onClick:g,children:S,...C},A)=>{let{selectedItem:w,highlightedIndex:T,getItemProps:I,isOpen:k}=n,x=o()(w,e),M=T===t,{theme:$}=(0,c.wn)(),_=(0,d.useRef)(null);(0,d.useImperativeHandle)(A,()=>_.current);let{onClick:P,...G}=I({item:e,index:t,disabled:r,onMouseUp:e=>{e.stopPropagation(),C.onMouseUp?.(e)},ref:_});return(0,d.useEffect)(()=>{if(k&&T===t&&_.current){let e=_.current.closest("ul");if(!e)return;let t=e.scrollTop,n=e.scrollTop+e.clientHeight,a=_.current.offsetTop,i=_.current.offsetTop+_.current.clientHeight;(a<t||i>n)&&_.current?.scrollIntoView({block:"nearest"})}},[T,t,k,_]),(0,a.FD)("li",{role:"option","aria-selected":x,"aria-disabled":r,onClick:e=>{g?.(e),P?.(e)},css:[(0,m.RB)($),h($,M,r)],...G,...C,children:[x?(0,a.Y)(u.A,{css:v}):(0,a.Y)("div",{style:y}),(0,a.FD)("label",{css:E($,i),children:[r&&l?(0,a.FD)("div",{css:b,children:[(0,a.Y)("div",{children:S}),(0,a.Y)("div",{css:(0,m.eO)($),children:(0,a.Y)(p.I,{componentId:"typeahead-combobox-menu-item-disabled-reason-info-tooltip",side:"right",content:l})})]}):S,(0,a.Y)(f.y,{disabled:r,children:s})]})]})});S.defaultProps={_type:"TypeaheadComboboxMenuItem"}},774866:(e,t,n)=>{n.d(t,{Ly:()=>s,mR:()=>l,vK:()=>r,zq:()=>o});var a=n(627023),i=n(862286);let r=0,o=4,l=(e,t,n,a)=>{if(t&&n)return{isValid:!0};if(e%4!=0)return{isValid:!1,error:"Concurrency must be a multiple of 4"};if(t&&e<r)return{isValid:!1,error:`Minimum concurrency cannot be less than ${r}`};let o=(0,i.WV)();if(!t&&e>o)return{isValid:!1,error:`Maximum concurrency cannot exceed ${o}`};if(void 0!==a){if(t&&e>a)return{isValid:!1,error:"Minimum concurrency cannot exceed maximum concurrency"};if(!t&&0===e)return{isValid:!1,error:"Maximum concurrency cannot be 0"}}return{isValid:!0}},s=(e,t)=>{if((0,a.hX)(e.minProvisionedConcurrency)||(0,a.hX)(e.maxProvisionedConcurrency))return!1;let n=l(e.minProvisionedConcurrency,!0,t,e.maxProvisionedConcurrency),i=l(e.maxProvisionedConcurrency,!1,t,e.minProvisionedConcurrency);return n.isValid&&i.isValid}},812542:(e,t,n)=>{n.d(t,{N:()=>r});var a=n(690963);let i=(0,a.J1)`
  query GetEndpointDetailed($data: ModelservingapiGetInferenceEndpointInput!)
  @component(name: "CustomModelServing.CPU") {
    modelservingapiGetInferenceEndpoint(input: $data) {
      endpoint {
        id
        name
        creator
        creationTimestamp
        lastUpdatedTimestamp
        routeOptimized
        endpointUrl
        task
        endpointType
        tags {
          ...EndpointTagFragment
        }
        state {
          ...EndpointStateFragment
        }
        config {
          ...EndpointCoreConfigDetailedFragment
        }
        pendingConfig {
          ...PendingConfigFragment
        }
        aiGateway {
          ...AiGatewayFragment
        }
        tileEndpointMetadata {
          ...TileEndpointMetadataFragment
        }
        telemetryProfileTableNames {
          logsTable
          metricsTable
          tracesTable
        }
      }
    }
  }
  fragment TileEndpointMetadataFragment on ModelservingapiTileEndpointMetadata {
    problemType
  }
  fragment AiGatewayFragment on AigatewayapiAiGatewayConfig {
    guardrails {
      input {
        invalidKeywords
        piiDetection
        safety
        validTopics
        pii {
          behavior
        }
        customGuardrails {
          endpointName
        }
      }
      output {
        invalidKeywords
        piiDetection
        safety
        validTopics
        pii {
          behavior
        }
        customGuardrails {
          endpointName
        }
      }
    }
    inferenceTableConfig {
      catalogName
      schemaName
      tableNamePrefix
      enabled
    }
    rateLimits {
      calls
      tokens
      key
      renewalPeriod
      principal
    }
    usageTrackingConfig {
      enabled
    }
    fallbackConfig {
      enabled
    }
  }
  fragment PendingConfigFragment on ModelservingapiPendingConfig {
    trafficConfig {
      routes {
        servedEntityName
        servedModelName
        trafficPercentage
      }
    }
    servedEntities {
      creationTimestamp
      creator
      minDbus
      maxDbus
      entityName
      entityVersion
      instanceProfileArn
      minProvisionedConcurrency
      maxProvisionedConcurrency
      maxProvisionedThroughput
      minProvisionedThroughput
      modelName
      modelVersion
      name
      scaleToZeroEnabled
      type
      workloadSize
      workloadType

      envVars {
        envVarName
        plainTextValue
        secretKey
        secretScope
      }
      environmentVars {
        key
        value
      }
      foundationModel {
        description
        displayName
        docs
        name
        price
      }

      optimizationConfig {
        llmOptimized
      }

      state {
        deployment
        deploymentStateMessage
      }

      externalModel {
        provider
        name
        task
        ai21LabsConfig {
          ai21LabsApiKey
        }
        anthropicConfig {
          anthropicApiKey
        }
        awsBedrockConfig {
          awsAccessKeyId
          awsRegion
          awsSecretAccessKey
          bedrockProvider
          ucServiceCredentialName
        }
        googleCloudVertexAiConfig {
          privateKey
          region
          projectId
        }
        amazonBedrockConfig {
          awsAccessKeyId
          awsRegion
          awsSecretAccessKey
          bedrockProvider
          ucServiceCredentialName
        }
        cohereConfig {
          cohereApiKey
        }
        databricksModelServingConfig {
          databricksApiToken
          databricksWorkspaceUrl
        }
        openaiConfig {
          openaiApiBase
          openaiApiKey
          openaiApiType
          openaiApiVersion
          openaiDeploymentName
          openaiOrganization
        }
        palmConfig {
          palmApiKey
        }
      }
    }
    autoCaptureConfig {
      catalogName
      enabled
      schemaName
      tableNamePrefix
      state {
        payloadTable {
          name
          status
          statusMessage
        }
      }
    }
  }
  fragment EndpointStateFragment on ModelservingapiInferenceEndpointState {
    configUpdate
    ready
    suspend
    systemUpdateFailure
  }
  fragment EndpointCoreConfigDetailedFragment on ModelservingapiEndpointCoreConfigDetailed {
    configVersion
    config {
      trafficConfig {
        routes {
          servedEntityName
          servedModelName
          trafficPercentage
        }
      }
      servedEntities {
        creationTimestamp
        creator
        minDbus
        maxDbus
        entityName
        entityVersion
        instanceProfileArn
        minProvisionedConcurrency
        maxProvisionedConcurrency
        maxProvisionedThroughput
        minProvisionedThroughput
        provisionedModelUnits
        modelName
        modelVersion
        name
        scaleToZeroEnabled
        type
        workloadSize
        workloadType

        envVars {
          envVarName
          plainTextValue
          secretKey
          secretScope
        }
        environmentVars {
          key
          value
        }
        foundationModel {
          description
          displayName
          docs
          name
          price
        }

        optimizationConfig {
          llmOptimized
        }

        state {
          deployment
          deploymentStateMessage
        }

        externalModel {
          provider
          name
          task
          ai21LabsConfig {
            ai21LabsApiKey
          }
          anthropicConfig {
            anthropicApiKey
          }
          awsBedrockConfig {
            awsAccessKeyId
            awsRegion
            awsSecretAccessKey
            bedrockProvider
            ucServiceCredentialName
          }
          amazonBedrockConfig {
            awsAccessKeyId
            awsRegion
            awsSecretAccessKey
            bedrockProvider
            ucServiceCredentialName
          }
          cohereConfig {
            cohereApiBase
            cohereApiKey
          }
          googleCloudVertexAiConfig {
            privateKey
            region
            projectId
          }
          databricksModelServingConfig {
            databricksApiToken
            databricksWorkspaceUrl
          }
          openaiConfig {
            openaiApiBase
            openaiApiKey
            openaiApiType
            openaiApiVersion
            openaiDeploymentName
            openaiOrganization
            microsoftEntraTenantId
            microsoftEntraClientId
            microsoftEntraClientSecret
          }
          palmConfig {
            palmApiKey
          }
          customProviderConfig {
            apiKeyAuth {
              key
              value
              valuePlaintext
            }
            bearerTokenAuth {
              token
              tokenPlaintext
            }
            customProviderUrl
          }
        }
      }
      autoCaptureConfig {
        catalogName
        enabled
        schemaName
        tableNamePrefix
        state {
          payloadTable {
            name
            status
            statusMessage
          }
        }
      }
    }
  }
  fragment EndpointTagFragment on ModelservingapiEndpointTag {
    key
    value
  }
`,r=e=>(0,a.IT)(i,{skip:!e,fetchPolicy:"network-only",variables:{data:{name:e}}})},814510:(e,t,n)=>{let a;n.d(t,{Q:()=>u});var i=n(610435),r=n(956935),o=n(930125),l=n(429608),s=n(497895),d=n(955210),c=n(123252);let u=((a=({dangerouslySetAntdProps:e,includeTrailingCaret:t=!0,...n})=>{let{theme:u,classNamePrefix:p}=(0,s.wn)(),m=`.${p}-breadcrumb-separator`,f=(0,r.AH)({"span:last-child a":{color:u.colors.primary,":hover, :focus":{color:"#2272B4"}},a:{"&:focus-visible":{outlineColor:`${u.colors.actionDefaultBorderFocus} !important`,outlineStyle:"auto !important"}},[m]:{fontSize:u.general.iconFontSize,"& .anticon":{fontSize:13}},"& > span":{display:"inline-flex",alignItems:"center"}});return(0,i.Y)(l.wC,{children:(0,i.FD)(o.A,{...(0,c.VG)(),separator:(0,i.Y)(d.A,{}),...n,...e,css:(0,r.AH)((0,l.Cx)(u.options.enableAnimation),f),children:[n.children,t&&n.children&&(0,i.Y)(a.Item,{children:" "})]})})}).Item=o.A.Item,a.Separator=o.A.Separator,a)},873393:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(610435),i=n(692738),r=n(375214);function o(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("path",{fill:"currentColor",d:"M3.394 5.586a4.752 4.752 0 0 1 9.351.946A3.75 3.75 0 0 1 15.787 9H14.12a2.25 2.25 0 0 0-1.871-1H12a.75.75 0 0 1-.75-.75v-.5a3.25 3.25 0 0 0-6.475-.402.75.75 0 0 1-.698.657A2.75 2.75 0 0 0 4 12.49V14a.8.8 0 0 1-.179-.021 4.25 4.25 0 0 1-.427-8.393"}),(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 7a2.25 2.25 0 0 1 2.03 3.22l.5.5a2.25 2.25 0 1 1-1.06 1.06l-.5-.5A2.25 2.25 0 1 1 8 7m.75 2.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0m3.5 3.5a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0",clipRule:"evenodd"})]})}let l=(0,i.forwardRef)((e,t)=>(0,a.Y)(r.I,{ref:t,...e,component:o}));l.displayName="CloudModelIcon";let s=l},907046:(e,t,n)=>{n.d(t,{n:()=>r});var a=n(610435),i=n(939578);let r=e=>{let{name:t,children:n,...r}=e;return(0,a.FD)(a.FK,{children:[(0,a.Y)(i.y,{...r,children:t}),n]})}},921426:(e,t,n)=>{n.d(t,{$:()=>o});var a=n(610435);n(692738);var i=n(694762),r=n(321527);let o=({visible:e,onClose:t})=>(0,a.Y)(i.aF,{title:(0,a.Y)(r.A,{id:"6xCdky",defaultMessage:"Invalid Inputs"}),visible:e,onCancel:t,footer:null,componentId:"mlflow.serving.invalid_rate_limits_modal",children:(0,a.Y)(r.A,{id:"+X8JmT",defaultMessage:"Please enter non-negative integer values for all rate limits."})})},923108:(e,t,n)=>{n.d(t,{o:()=>b,z:()=>h});var a=n(610435);n(692738);var i=n(351318),r=n(19246),o=n(79128),l=n(241393),s=n(497895),d=n(90710),c=n(814510),u=n(286342),p=n(201828),m=n(764236),f=n(993204),g=n(307171),v=n(153184),y=n(22191);function b({menu:e}){let t=(0,a.Y)(i.W,{children:e.map(({id:e,itemName:t,onClick:n,href:r,...o})=>(0,a.Y)(i.W.Item,{onClick:n,href:r,"data-testid":e,...o,children:t},e))});return e.length>0?(0,a.Y)(r.m,{overlay:t,trigger:["click"],placement:"bottomLeft",arrow:!0,overlayStyle:{minWidth:160},children:(0,a.Y)(o.$n,{componentId:"codegen_mlflow_app_src_shared_building_blocks_pageheader.tsx_54",icon:(0,a.Y)(l.A,{}),"data-testid":"overflow-menu-trigger","aria-label":"Open header dropdown menu"})}):null}function h(e){let{title:t,breadcrumbs:n=[],titleAddOns:i=[],preview:r,children:l,spacerSize:b,hideSpacer:h=!1,dangerouslyAppendEmotionCSS:E,feedbackOrigin:S,infoPopover:C,esParentComponent:A}=e,{theme:w}=(0,s.wn)(),T=(0,f.A)();return(0,a.FD)(a.FK,{children:[(0,a.Y)(d.Y,{breadcrumbs:n.length>0&&(0,a.Y)(c.Q,{includeTrailingCaret:!0,children:n.map((e,t)=>(0,a.Y)(c.Q.Item,{children:e},t))}),buttons:l,title:t,titleAddOns:(0,a.FD)(a.FK,{children:[r&&(0,a.Y)(g.W,{css:{marginLeft:0}}),C&&(0,a.FD)(u.Root,{componentId:"codegen_mlflow_app_src_shared_building_blocks_pageheader.tsx_123",children:[(0,a.Y)(u.Trigger,{asChild:!0,children:(0,a.Y)(o.$n,{"aria-label":T.formatMessage({id:"DJvE8g",defaultMessage:"Page header info"}),componentId:"mlflow.shared.pageHeader",icon:(0,a.Y)(p.A,{}),css:{marginRight:w.spacing.xs}})}),(0,a.FD)(u.Content,{align:"start",children:[C,(0,a.Y)(u.Arrow,{})]})]}),S&&(0,a.Y)(v.A,{parentUi:A||y.Es.MlCustomModelServingCPU,origin:S}),i]}),dangerouslyAppendEmotionCSS:E}),(0,a.Y)(m.h,{css:{flexShrink:0,...h?{display:"none"}:{}},size:b})]})}},939578:(e,t,n)=>{n.d(t,{y:()=>o});var a=n(610435),i=n(545251),r=n(605107);let o=({children:e,...t})=>{let{isInsideDialogCombobox:n}=(0,i.w)();if(!n)throw Error("`DialogComboboxSectionHeader` must be used within `DialogCombobox`");return(0,a.Y)(r.X,{...t,children:e})}},944510:(e,t,n)=>{n.d(t,{$:()=>r});var a=n(690963);let i=(0,a.J1)`
  query ModelServingBudgetPolicyGetQuery($input: BudgetpolicyGetBudgetPolicyRequestInput!)
  @component(name: "CustomModelServing.CPU") {
    serverlesspolicyGetBudgetPolicy(input: $input) {
      policyId
      policyName
      customTags {
        key
        value
      }
      currentLimitEnforcementActivation {
        state
      }
      limitConfig {
        enforcementEnabled
        limitAmount
        limitType
      }
      apiError {
        code
        message
      }
    }
  }
`,r=(e,t=!1)=>(0,a.IT)(i,{variables:{input:{policyId:e,requireStrongConsistency:t}},skip:!e})},956207:(e,t,n)=>{n.d(t,{q:()=>l});var a=n(610435),i=n(497895),r=n(262786),o=n(81659);function l(){let{theme:e}=(0,i.wn)(),t=t=>(0,a.Y)("div",{css:{padding:e.spacing.md,border:`1px solid ${e.colors.borderDecorative}`},children:(0,a.Y)(r.Q,{lines:t})});return(0,a.FD)("div",{css:{display:"flex",gap:e.spacing.md,alignItems:"flex-start"},children:[(0,a.FD)("div",{css:{display:"flex",flexDirection:"column",gap:e.spacing.md,flex:1},children:[(0,a.Y)(o.o,{}),t(3),t(2),(0,a.Y)(o.o,{}),t(4)]}),(0,a.Y)("div",{css:{padding:e.spacing.md,border:`1px solid ${e.colors.borderDecorative}`,flexBasis:320},children:(0,a.Y)(r.Q,{lines:3})})]})}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/72093.4bf0b4ca1c.chunk.js.map