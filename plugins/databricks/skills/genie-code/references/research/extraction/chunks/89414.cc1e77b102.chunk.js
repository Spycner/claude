(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[5830,89414,99918],{1647:(e,t,i)=>{"use strict";i.d(t,{A:()=>l});var n=i(610435),a=i(692738),r=i(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 17 17",...e,children:[(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.5 4.5v10h1v-10zM1 3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM6.5 1.5v13h2v-13zM6 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z",clipRule:"evenodd"}),(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"m11.63 7.74 1.773 6.773.967-.254-1.773-6.771zm-.864-1.324a1 1 0 0 0-.714 1.221l2.026 7.74a1 1 0 0 0 1.22.713l1.936-.506a1 1 0 0 0 .714-1.22l-2.026-7.74a1 1 0 0 0-1.22-.714z",clipRule:"evenodd"})]})}let s=(0,a.forwardRef)((e,t)=>(0,n.Y)(r.I,{ref:t,...e,component:o}));s.displayName="BooksIcon";let l=s},8323:(e,t,i)=>{"use strict";i.d(t,{Pg:()=>l,c2:()=>o,nZ:()=>s});var n=i(141078),a=i(154968),r=i(618646);let o=(0,n.J1)`
  query GetPipelineUpdateQuery($input: DeltapipelinesGetUpdateInput!)
  @component(name: "Workflows.Observability.Lists") {
    deltapipelinesGetUpdate: jobsGetPipelineUpdate(input: $input) {
      update {
        pipelineId
        updateId
        state
        validateOnly
        exploreOnly
        clusterId
        creationTime
        startTime
        endTime
        development
        fullRefresh
        fullRefreshSelection
        refreshSelection
        mode
        parameters @includeSafex(name: "pipeline_parameters", defaultValue: false) {
          key
          value
        }
        config {
          ...PipelineUpdateSettingsFragment
        }
      }
      apiError {
        ...PipelineApiErrorFields
      }
    }
  }
  ${a.n}
  ${r.i}
`;function s({variables:e,...t}={}){return(0,n.IT)(o,{variables:e,...t})}function l(e={}){return(0,n._l)(o,e)}},12099:(e,t,i)=>{"use strict";function n(e,t){e({eventType:"component_view",eventEntity:{entityType:"component",entitySubType:"div",entityId:t.shown},eventPayload:{interactionSubject:!0}})}function a(e,t){e({eventType:"component_click",eventEntity:{entityType:"component",entitySubType:"button",entityId:t.dismiss},eventPayload:{interactionSubject:!0}})}function r(e,t){e({eventType:"component_click",eventEntity:{entityType:"component",entitySubType:"button",entityId:t.openLesson},eventPayload:{interactionSubject:!0}})}function o(e,t){e({eventType:"component_click",eventEntity:{entityType:"component",entitySubType:"button",entityId:t},eventPayload:{interactionSubject:!0}})}i.d(t,{CP:()=>n,L3:()=>r,fD:()=>o,m$:()=>a})},26093:(e,t,i)=>{"use strict";i.d(t,{x:()=>r});var n=i(141078),a=i(655841);let r=e=>(0,n.n_)(a.Ij,e)},26446:(e,t,i)=>{"use strict";i.d(t,{HT:()=>c,M8:()=>u,Pf:()=>s,bp:()=>l,gb:()=>n,iN:()=>d,pP:()=>a,xB:()=>p});let n=1e3,a={enableAccountGroups:!1,enableAccountServicePrincipals:!1,enableAccountUsers:!1,enableWorkspaceGroups:!1,enableWorkspaceServicePrincipals:!1,enableWorkspaceUsers:!1},r=/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,o={admins:"Admins",users:"All workspace users","account users":"All account users"},s=e=>{if(!e)return e;return o[e]??e},l=e=>{let t=new Map;return e.forEach(e=>{let i=c(e)||e.name;t.has(i)||t.set(i,[]),t.get(i)?.push(e)}),t},d=e=>{switch(e.kind){case"user":return e.fullName;case"serviceprincipal":return e.name;case"group":return e.displayName;default:return""}},c=e=>{switch(e.kind){case"user":case"group":return e.name||"";case"serviceprincipal":return e.applicationId||"";default:return""}},u=({uniqueName:e,id:t,kind:i,displayName:n})=>{switch(i){case"user":return{id:t||"",optionId:`user.${t}`,kind:i,name:e||"",fullName:n||"",title:""};case"serviceprincipal":return{id:t||"",optionId:`serviceprincipal.${t}`,kind:i,name:n||"",applicationId:e||"",title:""};case"group":return{id:t||"",optionId:`group.${t}`,kind:i,name:e||"",displayName:s(e||""),title:""};default:return}};function p(e){return e?r.test(e)?"serviceprincipal":"user":void 0}},60701:(e,t,i)=>{"use strict";i.d(t,{P:()=>d,d:()=>l});var n=i(692738),a=i(118389),r=i(758666),o=i(231223),s=i(965545);function l(){let e=(0,a.P)(),{data:t=!1}=(0,r.st)({permission:s.I.CREATE},{enabled:e}),{data:i,loading:l}=(0,o.J)({includeTagMetadata:!0},{skip:!e});return{domains:n.useMemo(()=>d(i?.domainsListDomains?.domains??[],t),[i?.domainsListDomains?.domains,t]),loading:l,error:i?.domainsListDomains?.apiError,recommendationTraceId:void 0}}function d(e,t){return[...e].filter(e=>t||!e.effectiveDraft).sort((e,t)=>e.tagKey&&t.tagKey?e.tagKey.localeCompare(t.tagKey):0)}},62947:(e,t,i)=>{"use strict";i.d(t,{T:()=>M,M:()=>$});var n=i(610435),a=i(956935),r=i(692738),o=i(466213),s=i(497895),l=i(402720),d=i(74438),c=i(342411),u=i(382908),p=i(12414),g=i(475654),m=i(929117),f=i(205048);let h=({children:e,filterText:t,hasAllErrors:i,hasSomeError:a,hasNextPage:r,hasSuggestedChoices:o,isCompletedAll:l,limit:d})=>{let h=(0,c.tz)(),{theme:v}=(0,s.wn)(),y={padding:v.spacing.sm,marginLeft:v.spacing.xs/2,marginRight:v.spacing.xs/2};if(!t){if(o)return(0,n.FD)("div",{children:[(0,n.Y)(u.o.Text,{color:"secondary",css:{...y,display:"inline-block",paddingBottom:v.spacing.sm+v.spacing.xs},children:(0,n.Y)(c.sA,{id:"GJfggg",defaultMessage:"Suggested choices"})}),e]});return(0,n.Y)(u.o.Text,{color:"secondary",css:{...y,display:"inline-block"},children:(0,n.Y)(c.sA,{id:"C+kAoz",defaultMessage:"Type to search..."})})}let I=(0,n.Y)(u.o.Text,{color:"secondary",css:{...y,display:"inline-block",paddingBottom:v.spacing.sm+v.spacing.xs},children:(0,n.Y)(c.sA,{id:"+BgjsE",defaultMessage:'Results for "{filterText}"',values:{filterText:t}})});if(!l)return(0,n.FD)("div",{children:[I,(0,n.Y)("div",{css:{...y,display:"flex",justifyContent:"center",paddingTop:0},children:(0,n.Y)(p.y,{"aria-label":h.formatMessage({id:"97631c",defaultMessage:"Loading"})})}),(0,n.Y)(f.R,{allowlist:[g.o.WEBAPP_SUBJECT_SELECTOR_DROPDOWN_SEARCH],description:m.z.SUBJECT_SELECTOR_OPTIONS_LOADING,loading:!0})]});if(i)return(0,n.FD)("div",{children:[I,(0,n.Y)("div",{css:{...y,paddingTop:v.spacing.sm+v.spacing.xs,borderTop:`1px solid ${v.colors.border}`},children:(0,n.Y)(u.o.Text,{color:"error",children:(0,n.Y)(c.sA,{id:"nbxaoP",defaultMessage:"Failed to load all options."})})})]});return(0,n.FD)("div",{children:[I,e,(a||r)&&(0,n.FD)("div",{css:{...y,paddingTop:v.spacing.sm+v.spacing.xs,borderTop:`1px solid ${v.colors.border}`},children:[a&&(0,n.Y)(u.o.Text,{color:"error",children:(0,n.Y)(c.sA,{id:"4DLYsj",defaultMessage:"Failed to load some options."})}),a&&r&&" ",r&&(0,n.Y)(u.o.Text,{color:"secondary",children:(0,n.Y)(c.sA,{id:"yfYFLo",defaultMessage:"The first {limit} options are displayed. Type to narrow search.",values:{limit:d}})})]})]})};var v=i(133288),y=i(671244),I=i(653542),b=i(49586),S=i(209908);let w=e=>e.map(e=>`email="${(0,S.IW)(e)}"`).join(" OR "),k=e=>e.map(e=>`groupname="${(0,S.IW)(e)}"`).join(" OR "),E=e=>!(e&&e.length>0),A=5;var T=i(749314),x=i(437885);let P=(e,t,i)=>{let{disabled:a=!1,disabledReason:r}=i?i(e):{disabledReason:void 0},o=(e=>{if("user"===e.kind&&e.fullName&&e.fullName!==e.displayName||"serviceprincipal"===e.kind&&e.name)return!0;return!1})(e),s="group"===e.kind?e.title:e.applicationId||e.name;return{className:o?x.kW:x.PL,disabled:a,"data-testid":`${e.kind}.${s}`,get label(){return(0,n.Y)(T.r,{disabled:a,disabledReason:r,subject:e})},key:`${e.kind}.${e.id}`,role:"option",title:e.title,value:e.optionId,"aria-label":e.title}};var C=i(686560),D=i(441535),_=i(101938);let R=()=>!0,L=50,$=(0,r.createContext)({}),M=({dangerouslySetAntdProps:e,disabledFn:t,enableAccountGroups:i=!1,enableAccountServicePrincipals:u=!1,enableAccountUsers:p=!1,enableWorkspaceGroups:m=!0,enableWorkspaceServicePrincipals:f=!0,enableWorkspaceUsers:S=!0,initialSubjects:T,isLoading:M,limit:N=L,onBlur:Y,onChange:O,onDropdownVisibleChange:F,onUpdate:U,onSearch:B,suggestedChoices:z,provisionSource:G,filterInactive:W=!1,dropdownFooter:V,...H})=>{let K=(0,c.tz)(),{classNamePrefix:j,theme:q}=(0,s.wn)(),{startInteraction:J}=(0,_.XT)(),[X,Z]=(0,r.useState)(""),[Q]=(0,o.d7)(X.trim(),300),ee=(0,C.d)("accountId_new",""),et=(0,D.W)("databricks.fe.identity.useGranularListPrincipalsParams",!1),{mappedPrincipals:ei,principals:en,loading:ea,error:er}=(0,v.a5)({accountId:ee,filter:Q,includeWorkspaceIdentities:m||f||S,includeAccountIdentities:i||u||p,includeGroups:i||m,includeServicePrincipals:u||f,includeUsers:p||S,...et&&{includeWorkspaceUsers:S,includeWorkspaceGroups:m,includeWorkspaceServicePrincipals:f,includeAccountUsers:p,includeAccountGroups:i,includeAccountServicePrincipals:u}},{skip:!Q},W),eo=(0,r.useRef)(new Map);(0,r.useEffect)(()=>{if(!T)return;Array.isArray(T)?T.forEach(e=>{eo.current.set(e.optionId,e)}):eo.current.set(T.optionId,T)},[T]);let es=(0,r.useMemo)(()=>en.map(e=>P(e,q,t)),[t,q,en]),el=(0,r.useMemo)(()=>ei,[ei]),{suggestedChoices:ed}=(({disabledFn:e,limit:t=A,skip:i,suggestedChoices:n})=>{let{subjects:a,isLoading:o,error:s}=(0,y.Bi)({filterPredicate:k(n?.workspaceGroups||[]),first:t,source:"workspace",isCache:!0,skip:E(n?.workspaceGroups)||i}),{subjects:l,isLoading:d,error:c}=(0,y.Bi)({filterPredicate:k(n?.accountGroups||[]),first:t,source:"account",isCache:!0,skip:E(n?.accountGroups)||i}),{subjects:u,isLoading:p,error:g}=(0,I.Q_)({filterPredicate:w(n?.workspaceServicePrincipals||[]),first:t,source:"workspace",isCache:!0,skip:E(n?.workspaceServicePrincipals)||i}),{subjects:m,isLoading:f,error:h}=(0,I.Q_)({filterPredicate:w(n?.accountServicePrincipals||[]),first:t,source:"account",isCache:!0,skip:E(n?.accountServicePrincipals)||i}),{subjects:v,isLoading:S,error:T}=(0,b.zo)({filterPredicate:w(n?.workspaceUsers||[]),first:t,source:"workspace",isCache:!0,skip:E(n?.workspaceUsers)||i}),{subjects:x,isLoading:P,error:C}=(0,b.zo)({filterPredicate:w(n?.accountUsers||[]),first:t,source:"account",isCache:!0,skip:E(n?.accountUsers)||i});return{suggestedChoices:(0,r.useMemo)(()=>[...v,...x,...a,...l,...u,...m].filter(t=>{if(e&&e(t).disabled)return!1;return!0}).slice(0,t),[l,m,x,e,t,a,u,v]),isLoading:o||d||p||f||S||P,error:s||c||g||h||T||C}})({disabledFn:t,suggestedChoices:z});(0,r.useEffect)(()=>{ed.forEach(e=>{eo.current.set(e.optionId,e)})},[ed]);let ec=(0,r.useMemo)(()=>ed.map(e=>P(e,q,t)),[ed,t,q]),eu=(0,r.useMemo)(()=>{if(!T)return[];if(Array.isArray(T))return T.map(e=>P(e,q));return[P(T,q)]},[T,q]),ep=(0,r.useCallback)(e=>{B&&B(e),Z(e)},[B]),eg=(0,r.useCallback)((e,t)=>{let i;O&&O(e,t),Z(""),Array.isArray(e)?(e.map(e=>el.get(e)).filter(e=>void 0!==e).forEach(e=>{eo.current.set(e.optionId,e)}),i=e.map(e=>eo.current.get(e)).filter(e=>void 0!==e)):i=el.get(e)||eo.current.get(e),U&&U(i)},[O,U,el]),em=(0,r.useCallback)(e=>{Y&&Y(e),Z("")},[Y]),[ef,eh]=(0,r.useState)(!1),ev=(0,r.useCallback)(e=>{F&&F(e),ef||eh(e)},[ef,F]);(0,r.useEffect)(()=>{Q&&J(g.o.WEBAPP_SUBJECT_SELECTOR_DROPDOWN_SEARCH)},[Q,J]);let ey=(0,r.useCallback)(e=>{let t=!ea,i=!!er;return(0,n.FD)(n.FK,{children:[(0,n.Y)(h,{filterText:Q,hasSomeError:i,hasAllErrors:i,hasNextPage:!1,hasSuggestedChoices:ec.length>0,isCompletedAll:t,limit:N,children:e}),V]})},[Q,V,N,er,ea,ec]),eI=(0,r.useMemo)(()=>{if(!ef)return eu;if(Q)return es;return ec},[Q,ef,eu,es,ec]),eb=(0,r.useMemo)(()=>eI.map((e,t)=>({...e,"aria-posinset":t+1,"aria-setsize":eI.length})),[eI]);if(M)return(0,n.Y)("div",{"aria-label":K.formatMessage({id:"FzYxgk",defaultMessage:"Loading..."}),css:{width:"100%"},children:(0,n.Y)(l.P.Button,{active:!0,size:"small",css:{width:"100% !important"}})});let eS=H["aria-label"]||H["aria-labelledby"]?H["aria-label"]:K.formatMessage({id:"CyZW2/",defaultMessage:"Subject Select"});return(0,n.FD)($.Provider,{value:{provisionSource:G},children:[(0,n.Y)(a.mL,{styles:[(0,a.AH)(".",j,"-select-item-option.",x.kW,".",x.kW,".",x.kW,"{height:48px !important;padding-top:2px !important;padding-bottom:2px !important;}.",j,"-select-item-option.",x.PL,".",x.PL,".",x.PL,"{height:40px !important;padding-top:5px !important;padding-bottom:5px !important;}.",j,"-select-selection-item-content .",x.Tp,"{display:none !important;}.",j,"-select-selection-item .",x.Tp,"{display:none !important;}")]}),(0,n.Y)(d._v,{allowClear:!0,"aria-label":eS,dangerouslySetAntdProps:{showSearch:!0,dropdownRender:ey,...e||{}},filterOption:R,onBlur:em,onChange:eg,onDropdownVisibleChange:ev,onSearch:ep,options:eb,...H})]})}},67105:(e,t,i)=>{"use strict";i.d(t,{r:()=>u});var n=i(692738),a=i(342411),r=i(483588),o=i(141078),s=i(675823),l=i(123061),d=i(26093);function c(e,t,i,n,a,r,o){try{var s=e[r](o),l=s.value}catch(e){i(e);return}s.done?t(l):Promise.resolve(l).then(n,a)}let u=e=>{let t=(0,a.tz)(),[i,u]=(0,n.useState)(),[p,{loading:g,error:m}]=(0,d.x)(),[f,{loading:h,error:v}]=(0,s.z)(),[y,{loading:I,error:b}]=(0,l.$)();return[({id:i,applicationId:n,kind:a})=>{var s;return(s=function*(){if(u(void 0),"user"===a)return p({variables:{input:{externalId:i,sourceIdp:r.GbL.SOURCE_IDP_ATTRIBUTE_AAD,...void 0!==e&&{provisionSource:e}}}}).then(e=>(e.data?.aclmanagerIdentityapiGetOrCreateUser?.apiError&&u(new o.K4({errorMessage:t.formatMessage({id:"zrcKC3",defaultMessage:"Failed to provision user. Please ensure the user is active in the tenant."})})),e.data?.aclmanagerIdentityapiGetOrCreateUser??null));if("group"===a)return f({variables:{input:{externalId:i,sourceIdp:r.GbL.SOURCE_IDP_ATTRIBUTE_AAD,...void 0!==e&&{provisionSource:e}}}}).then(e=>(e.data?.aclmanagerIdentityapiGetOrCreateGroup?.apiError&&u(new o.K4({errorMessage:t.formatMessage({id:"y/440Q",defaultMessage:"Failed to provision group. Please ensure the group is active in the tenant."})})),e.data?.aclmanagerIdentityapiGetOrCreateGroup??null));if("serviceprincipal"===a)return y({variables:{input:{externalId:i,sourceIdp:r.GbL.SOURCE_IDP_ATTRIBUTE_AAD,...void 0!==e&&{provisionSource:e}}}}).then(e=>(e.data?.aclmanagerIdentityapiGetOrCreateServicePrincipal?.apiError&&u(new o.K4({errorMessage:t.formatMessage({id:"CV0/wy",defaultMessage:"Failed to provision service principal. Please ensure the service principal is active in the tenant."})})),e.data?.aclmanagerIdentityapiGetOrCreateServicePrincipal??null));return null},function(){var e=this,t=arguments;return new Promise(function(i,n){var a=s.apply(e,t);function r(e){c(a,i,n,r,o,"next",e)}function o(e){c(a,i,n,r,o,"throw",e)}r(void 0)})})()},{loading:g||h||I,error:i||m||v||b}]}},74360:(e,t,i)=>{"use strict";i.d(t,{An:()=>Q,Ct:()=>I,EF:()=>D,Ev:()=>ee,GS:()=>_,Is:()=>O,JX:()=>v,MP:()=>K,Rj:()=>x,Uv:()=>z,V5:()=>A,WK:()=>j,Wn:()=>y,YI:()=>Y,_4:()=>C,_p:()=>L,aY:()=>H,bk:()=>V,do:()=>E,eS:()=>F,fZ:()=>T,ik:()=>B,jN:()=>J,jW:()=>b,jr:()=>et,jy:()=>W,k3:()=>X,k8:()=>k,my:()=>S,nb:()=>N,o4:()=>P,r2:()=>q,rG:()=>Z,v2:()=>R,vz:()=>G,x0:()=>$,xB:()=>M,xi:()=>U,y3:()=>w});var n,a,r,o,s,l,d,c,u,p,g,m=i(819524),f=i(993533),h=i(962200);let v=445,y=24,I=50,b=255,S=3e3,w=300,k="_NONE_ID_",E="_NONE_INSTANCE_PROFILE_",A=250,T=20;var x=((n={}).PIPELINE_PAGE_ERROR="pipelinePageError",n.PIPELINE_DETAILS_PAGE_ACTION="pipelineDetailsPageAction",n.PIPELINE_SOURCE_EDITOR_ACTION="pipelineSourceEditorAction",n.PIPELINE_MAIN_PAGE_ACTION="pipelineMainPageAction",n.PIPELINE_CREATE_FROM_SAMPLE_DATA_PAGE_ACTION="pipelineCreatePipelineFromSampleDataPageAction",n.PIPELINE_CREATE_ACTION="pipelineCreateAction",n.PIPELINE_EDIT_ACTION="pipelineEditAction",n.PIPELINE_SETTINGS_PAGE_ACTION="pipelineSettingsPageAction",n),P=((a={}).ON_UPDATE_SUCCESS="on-update-success",a.ON_UPDATE_FAILURE="on-update-failure",a.ON_UPDATE_FATAL_FAILURE="on-update-fatal-failure",a.ON_FLOW_FAILURE="on-flow-failure",a);let C=P;var D=((r={}).DETAILS="DETAILS",r.DATA_QUALITY="DATA_QUALITY",r.SCHEMA="SCHEMA",r.FLOWS="FLOWS",r),_=((o={}).PIPELINE_DETAILS="PIPELINE_DETAILS",o.UPDATE_DETAILS="UPDATE_DETAILS",o),R=((s={}).DEVELOPMENT="development",s.PRODUCTION="production",s);let L={top:!1,right:!1,bottom:!1,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},$=4;var M=((l={}).ASC="asc",l.DESC="desc",l);let N="8.3.x-scala2.12",Y={AWS:m.Ay.DELTA_LIVE_TABLES_PRICING_AWS,Azure:m.Ay.DELTA_LIVE_TABLES_PRICING_AZURE,GCP:m.Ay.DELTA_LIVE_TABLES_PRICING_GCP},O="default",F="maintenance",U="updates";var B=((d={}).DETAILS_HEADER="details-header",d.PIPELINES_LIST="pipelines-list",d.EVENT_LOG="event-log",d.SCHEDULING="scheduling",d.SETTINGS_FORM="settings-form",d.CREATE_PIPELINE="create-pipeline",d.EDIT_PIPELINE="edit-pipeline",d.CREATE_PIPELINE_FROM_SAMPLE_DATA="create-pipeline-from-sample-data",d);let z="hive_metastore";var G=((c={})[c.SECOND=1e3]="SECOND",c[c.MINUTE=6e4]="MINUTE",c[c.HOUR=36e5]="HOUR",c[c.DAY=864e5]="DAY",c),W=((u={}).BACKLOG_BYTES="BACKLOG_BYTES",u.BACKLOG_FILES="BACKLOG_FILES",u.BACKLOG_RECORDS="BACKLOG_RECORDS",u.BACKLOG_SECONDS="BACKLOG_SECONDS",u);f.B_t.MAX,f.B_t.MAX,f.B_t.MAX,f.B_t.MAX;let V=["BACKLOG_SECONDS","BACKLOG_BYTES","BACKLOG_RECORDS","BACKLOG_FILES"];var H=((p={}).ETL="etl",p.INGESTION="ingestion",p);let K={[f.wGY.BRICKINDEX]:!1,[f.wGY.BRICKSTORE]:!1,[f.wGY.DATABASE_TABLE_SYNC]:!1,[f.wGY.CDC_APPLIER]:!1,[f.wGY.DBSQL]:!1,[f.wGY.INGESTION_GATEWAY]:"ingestion",[f.wGY.MANAGED_INGESTION]:"ingestion",[f.wGY.METRIC_VIEW]:!1,[f.wGY.FEATURE_STORE_STREAMING]:!1,[f.wGY.FEATURE_STORE_BATCH]:!1,[f.wGY.PIPELINE_TYPE_UNSPECIFIED]:!1,[f.wGY.PUSH_INGESTION]:!1,[f.wGY.WORKSPACE]:"etl"};var j=((g={})[g.TEMPORARY=0]="TEMPORARY",g[g.TERMINAL=1]="TERMINAL",g);let q={[f.cml.COMPLETED]:1,[f.cml.EXCLUDED]:1,[f.cml.FAILED]:1,[f.cml.IDLE]:0,[f.cml.PLANNING]:0,[f.cml.QUEUED]:0,[f.cml.RUNNING]:0,[f.cml.SKIPPED]:1,[f.cml.STARTING]:0,[f.cml.STOPPED]:1,MULTISTATUS:0,MULTI_FLOW:0,NODE_STATUS_UNSPECIFIED:0},J={[f.mtr.CANCELED]:1,[f.mtr.COMPLETED]:1,[f.mtr.CREATED]:0,[f.mtr.FAILED]:1,[f.mtr.INITIALIZING]:0,[f.mtr.QUEUED]:0,[f.mtr.RESETTING]:0,[f.mtr.RUNNING]:0,[f.mtr.SETTING_UP_TABLES]:0,[f.mtr.STOPPING]:0,[f.mtr.WAITING_FOR_RESOURCES]:0},X={[f.X_e.DELETED]:1,[f.X_e.DEPLOYING]:0,[f.X_e.FAILED]:1,[f.X_e.IDLE]:1,[f.X_e.NOT_RESTORED]:1,[f.X_e.RECOVERING]:0,[f.X_e.RESETTING]:0,[f.X_e.RESTORING]:0,[f.X_e.RUNNING]:0,[f.X_e.STARTING]:0,[f.X_e.STOPPING]:0},Z=new Set([f.cml.STARTING,f.cml.RUNNING,f.cml.COMPLETED]);Object.values(f.mtr).filter(e=>0===J[e]),Object.values(f.mtr).filter(e=>1===J[e]);let Q=[f.mtr.RESETTING,f.mtr.STOPPING],ee=[f.mtr.CREATED,f.mtr.WAITING_FOR_RESOURCES,f.mtr.INITIALIZING,f.mtr.RESETTING,f.mtr.SETTING_UP_TABLES,f.mtr.RUNNING],et={[f.oLM.MATERIALIZED_VIEW]:f.FIE.USER_VISIBLE_NODE_TYPE_MATERIALIZED_VIEW,[f.oLM.STREAMING_TABLE]:f.FIE.USER_VISIBLE_NODE_TYPE_STREAMING_TABLE,[f.oLM.VIEW]:f.FIE.USER_VISIBLE_NODE_TYPE_VIEW,[f.oLM.DATASET_TYPE_UNKNOWN]:f.FIE.USER_VISIBLE_NODE_TYPE_UNKNOWN,[h.uH]:f.FIE.USER_VISIBLE_NODE_TYPE_SINK}},96437:(e,t,i)=>{"use strict";i.d(t,{F0:()=>s,OU:()=>l,TS:()=>a.TS,c2:()=>c,kW:()=>d,lD:()=>r,nk:()=>a.nk,sN:()=>o});var n=i(141078),a=i(246635);let r=(0,n.J1)`
  ${a.BH}
  fragment LakeviewDraftDashboardResponseFragment on LakeviewconfigModelsDashboard {
    name
    displayName
    warehouseId
    warehouseType
    etag
    folderNodeInternalName
    lifecycleState
    pageOrder {
      name
    }
    datasetOrder {
      name
    }
    variables @includeSafex(name: "databricks.fe.visualizations.enableFieldVariable", defaultValue: false) {
      name
      field {
        options {
          expression
        }
      }
    }
    uiSettings {
      locale
      theme {
        ...LakeviewDashboardThemeFragment
      }
      genieSpace {
        isEnabled
        overrideId
        enablementMode
      }
      applyModeEnabled
    }
    __typename
  }
`,o=(0,n.J1)`
  ${a.TS}
  fragment LakeviewconfigDatasetResponseFragment on LakeviewconfigModelsDataset {
    name
    query
    displayName
    etag
    preferLowCode
    customerRefId @includeSafex(name: "databricks.fe.lakeview.enableStableIdsInUrl", defaultValue: false)
    datasetParameters {
      ...LakeviewconfigDatasetParametersFragment
    }
    columns {
      displayName
      description
      expression
    }
    catalog
    schema
    assetName
    metricViewConfig
    materializationSettings
      @includeSafex(name: "databricks.fe.lakeview.enableDatasetPublishMaterialization", defaultValue: false) {
      materializeOnPublish
    }
  }
`,s=(0,n.J1)`
  fragment LakeviewconfigPageResponseFragment on LakeviewconfigModelsPage {
    __typename
    name
    displayName
    etag
    pageType
    customerRefId @includeSafex(name: "databricks.fe.lakeview.enableStableIdsInUrl", defaultValue: false)
    widgetOrder {
      name
    }
    layout {
      widgetPositions {
        width
        height
        xCoordinate
        yCoordinate
        widgetName
      }
      layoutVersion @includeSafex(name: "databricks.fe.lakeview.enableDenserGridLayout", defaultValue: false)
    }
  }
`,l=(0,n.J1)`
  fragment LakeviewconfigWidgetFragment on LakeviewconfigModelsWidget {
    name
    displayName
    customerRefId @includeSafex(name: "databricks.fe.lakeview.enableStableIdsInUrl", defaultValue: false)
    queries {
      queryName
      query {
        datasetName
        fields {
          fieldName
          expression
          variable @includeSafex(name: "databricks.fe.visualizations.enableFieldVariable", defaultValue: false)
        }
        parameters {
          parameterName
          keyword
        }
        parameterValues {
          keyword
          selection {
            values {
              dataType
              values {
                value
              }
            }
            range {
              dataType
              min {
                value
              }
              max {
                value
              }
            }
          }
        }
        filters {
          expression
        }
        cubeGroupingSets {
          sets {
            fieldNames
          }
        }
        disaggregatedData
        orderBys {
          direction
          expression
        }
      }
    }
    renderSpec {
      widgetType
      textBoxRenderSpec {
        content
        contentType
        widgetSettings {
          verticalAlign
        }
      }
      vizRenderSpec {
        rawJson
      }
      widgetBackgroundColor @includeSafex(name: "databricks.fe.lakeview.enableWidgetLevelStyle", defaultValue: false) {
        light
        dark
      }
      widgetBorderColor @includeSafex(name: "databricks.fe.lakeview.enableWidgetLevelStyle", defaultValue: false) {
        light
        dark
      }
    }
    etag
  }
`,d=(0,n.J1)`
  fragment LakeviewconfigBookmarkResponseFragment on lakeviewconfigModels_Bookmark {
    name
    displayName
    customerRefId
    etag
    widgetSelections {
      widgetName
      selectionJson
    }
  }
`,c=(0,n.J1)`
  ${r}
  ${o}
  ${l}
  ${s}
  fragment LakeviewconfigWidgetAndPositionFragment on LakeviewconfigServicesWidgetCreateAndPositionWidgetResponse {
    dashboard
      @includeSafex(name: "databricks.fe.lakeview.enableCopyPasteWidgetToAnotherDashboard", defaultValue: false) {
      ...LakeviewDraftDashboardResponseFragment
    }
    datasets
      @includeSafex(name: "databricks.fe.lakeview.enableCopyPasteWidgetToAnotherDashboard", defaultValue: false) {
      ...LakeviewconfigDatasetResponseFragment
    }
    widget {
      ...LakeviewconfigWidgetFragment
    }
    parentPage {
      ...LakeviewconfigPageResponseFragment
    }
  }
`},107296:(e,t,i)=>{"use strict";i.d(t,{G:()=>a});var n=i(697453);function a({title:e,description:t,severity:i}){return n.ds.call({root:{componentId:"data-rooms.notification.root",duration:3e3,severity:i},title:{value:e,...!t?{style:{fontWeight:"normal"}}:{}},...t?{description:{value:t}}:{}})}},107774:(e,t,i)=>{"use strict";i.d(t,{X:()=>a});var n=i(441535);function a(){return(0,n.W)("databricks.fe.discover.areSubDomainsEnabled",!1)}},115057:(e,t,i)=>{"use strict";i.d(t,{t:()=>o});var n=i(692738),a=i(373037);let r=({floatingX:e,floatingY:t})=>{let{floatingX:i,floatingY:n,floatingWidth:r,floatingHeight:o}=a.u.getState(),s=Math.max(0,window.innerWidth-r),l=Math.max(0,window.innerHeight-o),d=Math.max(0,Math.min(s,e)),c=Math.max(0,Math.min(l,t));if(d===i&&c===n)return;a.u.setState({floatingX:d,floatingY:c})},o=()=>{let[e,t]=(0,n.useState)(!1),i=(0,n.useRef)({x:0,y:0}),o=(0,n.useRef)({left:0,top:0}),s=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let{floatingX:e,floatingY:t}=a.u.getState();r({floatingX:e,floatingY:t})},[]),(0,n.useEffect)(()=>()=>{s.current&&(document.removeEventListener("mousemove",s.current.move),document.removeEventListener("mouseup",s.current.up),s.current=null)},[]),{handleMouseDown:(0,n.useCallback)(e=>{e.stopPropagation(),e.preventDefault(),t(!0),i.current={x:e.clientX,y:e.clientY};let{floatingX:n,floatingY:l}=a.u.getState();o.current={left:n,top:l};let d=e=>{e.stopPropagation(),e.preventDefault();let t=e.clientX-i.current.x,n=e.clientY-i.current.y;r({floatingX:o.current.left+t,floatingY:o.current.top+n})},c=()=>{t(!1),document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",c),s.current=null};s.current&&(document.removeEventListener("mousemove",s.current.move),document.removeEventListener("mouseup",s.current.up)),s.current={move:d,up:c},document.addEventListener("mousemove",d),document.addEventListener("mouseup",c)},[]),dragging:e}}},123061:(e,t,i)=>{"use strict";i.d(t,{$:()=>r});var n=i(141078),a=i(655841);let r=e=>(0,n.n_)(a.fq,e)},133288:(e,t,i)=>{"use strict";i.d(t,{a5:()=>f});var n=i(141078),a=i(655841),r=i(209908),o=i(483588),s=i(26446),l=i(441535);let d=(0,n.J1)`
  fragment IdentityIdapi2UserFragment on IdentityIdapi2User {
    userName
    principal {
      ...IdentityIdapi2PrincipalFragment
    }
  }
  ${a.U8}
`,c=(0,n.J1)`
  fragment IdentityIdapi2GroupFragment on IdentityIdapi2Group {
    groupName
    principal {
      ...IdentityIdapi2PrincipalFragment
    }
  }
  ${a.U8}
`,u=(0,n.J1)`
  fragment IdentityIdapi2ServicePrincipalFragment on IdentityIdapi2ServicePrincipal {
    applicationId
    principal {
      ...IdentityIdapi2PrincipalFragment
    }
  }
  ${a.U8}
`,p=(0,n.J1)`
  query listPrincipals(
    $accountId: String
    $filter: String
    $includeAccountIdentities: Boolean
    $includeGroups: Boolean
    $includeServicePrincipals: Boolean
    $includeUsers: Boolean
    $includeWorkspaceIdentities: Boolean
    $includeWorkspaceUsers: Boolean
    $includeWorkspaceGroups: Boolean
    $includeWorkspaceServicePrincipals: Boolean
    $includeAccountUsers: Boolean
    $includeAccountGroups: Boolean
    $includeAccountServicePrincipals: Boolean
    $pageSize: Int
    $pageToken: String
  ) @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiListPrincipals(
      input: {
        accountId: $accountId
        filter: $filter
        includeAccountIdentities: $includeAccountIdentities
        includeGroups: $includeGroups
        includeServicePrincipals: $includeServicePrincipals
        includeUsers: $includeUsers
        includeWorkspaceIdentities: $includeWorkspaceIdentities
        includeWorkspaceUsers: $includeWorkspaceUsers
        includeWorkspaceGroups: $includeWorkspaceGroups
        includeWorkspaceServicePrincipals: $includeWorkspaceServicePrincipals
        includeAccountUsers: $includeAccountUsers
        includeAccountGroups: $includeAccountGroups
        includeAccountServicePrincipals: $includeAccountServicePrincipals
        pageSize: $pageSize
        pageToken: $pageToken
      }
    ) {
      apiError {
        message
      }
      nextPageToken
      principals {
        user {
          ...IdentityIdapi2UserFragment
        }
        group {
          ...IdentityIdapi2GroupFragment
        }
        servicePrincipal {
          ...IdentityIdapi2ServicePrincipalFragment
        }
      }
    }
  }
  ${d}
  ${c}
  ${u}
`,g=(e,t=!1)=>{if(!e)return;if(!e.legacyUserId)return"idp";if(t&&!e.accountId)return"workspace";return"account"},m=e=>{if("idp"!==g(e))return;return e?.sourceIdp??o.GbL.SOURCE_IDP_ATTRIBUTE_AAD},f=(e,t={},i=!1)=>{let a=(0,l.W)("databricks.fe.identity.hideInactivePrincipalsInNonAdminView",!1),{principals:d,...c}=((e,t={})=>{let{data:i,error:a,...r}=(0,n.IT)(p,{variables:e,nextFetchPolicy:"no-cache",...t}),{principals:o,apiError:s}=i?.aclmanagerIdentityapiListPrincipals??{};return{principals:o,error:a??(s?Error(s.message??""):void 0),...r}})(e,t),u=d?.map(({group:e,user:t,servicePrincipal:i})=>t?(({userName:e,principal:t},i=!1)=>({id:t?.legacyUserId||t?.externalId,isAccount:"account"===g(t),source:g(t),isAccountAdmin:void 0,isIndirect:void 0,isWorkspaceAdmin:void 0,kind:"user",optionId:`user.${e}`,name:e,displayName:e,fullName:t?.displayName,status:i?t?.status===o.apL.PRINCIPAL_STATUS_INACTIVE?o.J0P.INACTIVE:o.J0P.ACTIVE:void 0,title:t?.displayName&&e!==t?.displayName?`${t?.displayName} (${e||""})`:e||"",sourceIdp:m(t)}))(t,a):e?(({groupName:e,principal:t},i=!1)=>({id:t?.legacyUserId||t?.externalId,isAccount:"account"===g(t,!0),source:g(t,!0),kind:"group",optionId:`group.${e}`,displayName:(0,s.Pf)(e),name:e||"",title:`${(0,s.Pf)(e)||""}`,isWorkspaceLocalGroup:"workspace"===g(t,!0),sourceIdp:m(t),status:i?t?.status===o.apL.PRINCIPAL_STATUS_INACTIVE?o.J0P.INACTIVE:o.J0P.ACTIVE:void 0}))(e,a):i?(({applicationId:e,principal:t},i=!1)=>({id:t?.legacyUserId||t?.externalId,isAccount:"account"===g(t),source:g(t),isAccountAdmin:void 0,kind:"serviceprincipal",optionId:`serviceprincipal.${e}`,name:t?.displayName||"",displayName:`${t?.displayName||""} (${e||""})`,applicationId:e,status:i?t?.status===o.apL.PRINCIPAL_STATUS_INACTIVE?o.J0P.INACTIVE:o.J0P.ACTIVE:void 0,title:`${t?.displayName||""} (${e||""})`,sourceIdp:m(t)}))(i,a):null).filter(h).filter(e=>!i||e.status!==o.J0P.INACTIVE)??[];return{principals:u,mappedPrincipals:(0,r.ne)(u),...c}},h=e=>null!==e},140718:(e,t,i)=>{"use strict";i.d(t,{XA:()=>I,lQ:()=>w,wS:()=>S});var n=i(610435),a=i(692738),r=i(46e3),o=i(806773),s=i(370427),l=i(907046),d=i(99442),c=i(224098),u=i(545251),p=i(53333),g=i(661748);let m=(0,a.createContext)(void 0),f=[c.s7.OnValueChange,c.s7.OnView],h=[c.s7.OnValueChange],v=(e,t)=>{for(let i of a.Children.toArray(e))if(a.isValidElement(i)){if(i.type===S&&i.props.value===t)return i;if(i.props.children){let e=v(i.props.children,t);if(e)return e}}},y=(e,t)=>{let i=v(e,t);if(a.isValidElement(i))return i.props.children;return""},I=(0,a.forwardRef)(({defaultValue:e,name:t,placeholder:i,children:s,contentProps:l,onChange:u,onOpenChange:v,id:I,label:S,value:w,validationState:k,forceCloseOnEscape:E,componentId:A,analyticsEvents:T,valueHasNoPii:x,...P},C)=>{let D=(0,g.W)("databricks.fe.observability.defaultComponentView.simpleSelect",!1),[_]=(0,a.useState)(()=>{if(w)return y(s,w);return""}),R=(0,a.useRef)(null);(0,a.useImperativeHandle)(C,()=>R.current,[]);let L=(0,a.useRef)(w),[$,M]=(0,a.useState)(w),[N,Y]=(0,a.useState)(_),O=void 0!==w,F=(0,a.useMemo)(()=>T??(D?f:h),[T,D]),U=(0,c.ei)({componentType:c.v_.SimpleSelect,componentId:A,analyticsEvents:F,valueHasNoPii:x}),{elementRef:B}=(0,p.z)({onView:U.onView,value:w??e});(0,a.useEffect)(()=>{void 0!==w&&w!==L.current&&(M(w),L.current=w)},[w]),(0,a.useEffect)(()=>{if(O)return;let t=R.current,i=e||t?.value||"";M(i),L.current=i},[O,e,w]),(0,a.useEffect)(()=>{Y(y(s,$||""))},[$,s]);let z=(0,a.useCallback)(e=>{U.onValueChange(e),R.current?.setAttribute("value",e||""),M(e),Y(y(s,e)),u&&u({target:{name:t,type:"select",value:e},type:"change"})},[U,s,u,t]),G=(0,a.useMemo)(()=>({value:$,onChange:z}),[$,z]),W=(0,a.useCallback)(()=>{z("")},[z]);return(0,n.Y)(m.Provider,{value:G,children:(0,n.Y)(r.l,{componentId:void 0,value:$,placeholder:i,label:S??P["aria-label"],id:I,children:(0,n.FD)(b,{onOpenChange:v,children:[(0,n.Y)(d.b,{ref:B,...P,validationState:k,onClear:W,id:I,value:$,...U.dataComponentProps,children:N||i}),(0,n.Y)("input",{type:"hidden",ref:R}),(0,n.Y)(o.g,{forceCloseOnEscape:E,...l,children:s})]})})})}),b=({children:e,onOpenChange:t})=>{let{isOpen:i}=(0,u.w)();return(0,a.useEffect)(()=>{t&&t(!!i)},[i,t]),(0,n.Y)(n.FK,{children:e})},S=(0,a.forwardRef)(({value:e,children:t,...i},r)=>{let o=(0,a.useContext)(m);if(!o)throw Error("SimpleSelectOption must be used within a SimpleSelect");let{onChange:l}=o,d=(0,a.useCallback)(({value:e})=>{l(e)},[l]);return(0,n.Y)(s.O,{...i,ref:r,value:e,onChange:d,children:t})}),w=({children:e,label:t,...i})=>{if(!(0,a.useContext)(m))throw Error("SimpleSelectOptionGroup must be used within a SimpleSelect");return(0,n.Y)(l.n,{...i,name:t,children:e})}},151586:(e,t,i)=>{"use strict";i.d(t,{E:()=>n});let n=(0,i(342411).YK)({dashboardName:{id:"YCzShb",defaultMessage:"Bike share data analysis"},buildPageDisplayName:{id:"jXldPx",defaultMessage:"Build with Genie"},dashboardPageDisplayName:{id:"eyF7WG",defaultMessage:"Dashboard"},headerWidgetDisplayName:{id:"ufOLCS",defaultMessage:"Header"},moduleTitle:{id:"DHqSC/",defaultMessage:"Bike sharing analysis dashboard"},subtitle:{id:"jhpgpb",defaultMessage:"Build a dashboard step by step on bike-share data — explore, chart with Genie, publish."},scenario:{id:"xnHbNQ",defaultMessage:"You're a data analyst at a bike-sharing company. Your pipeline already turns raw trip records into clean tables — now stakeholders need to see the numbers. You'll build the dashboard step by step: explore the trips data, add a revenue-by-station chart with Genie, and publish so the whole team can read it."},learningObjectiveQueryData:{id:"0Npsio",defaultMessage:"Query and explore bike-share trip data"},learningObjectiveScatter:{id:"Wj4DX5",defaultMessage:"Track revenue and ridership with KPIs and trend charts"},learningObjectiveDashboard:{id:"DnkuKa",defaultMessage:"Ask Genie questions about your data in natural language"},learningObjectiveGenie:{id:"wRYoP5",defaultMessage:"Prompt Genie to generate dashboards"},viewTripsTitle:{id:"yeArng",defaultMessage:"Explore the data"},viewTripsSummary:{id:"v0M11c",defaultMessage:"Every dashboard starts with data. Each row of this dataset is a bike trip — pickup and dropoff stations, fare amount, and duration in hours."},viewTripsInstruction1:{id:"18IgZU",defaultMessage:"Have Genie count the trips in your dataset:"},viewTripsInstruction2:{id:"6Szinl",defaultMessage:"Try asking Genie other questions about the data — then click Next when you are ready."},buildBarChartWithGenieTitle:{id:"Uz+7EJ",defaultMessage:"Create a visualization"},buildBarChartWithGenieSummary:{id:"ifPAyU",defaultMessage:"Use the AI prompt to generate a chart, or configure one manually in the right panel."},buildBarChartWithGenieInstruction1:{id:"9YPDgH",defaultMessage:"Copy this prompt, paste it into the AI bar on the empty chart, and press Send:"},buildBarChartWithGeniePrompt:{id:"KUle6a",defaultMessage:"Show total revenue by station as a bar chart"},tourTheDashboardTitle:{id:"eiBRdk",defaultMessage:"See the full dashboard"},tourTheDashboardSummary:{id:"XiEqGq",defaultMessage:"Real dashboards combine multiple charts. This one pairs KPIs at the top with trend lines and a station breakdown."},tourTheDashboardInstruction1:{id:"75Xl8m",defaultMessage:"Take a look around — then click Next when you are ready to publish."},completionTitle:{id:"75z4cr",defaultMessage:"You're a dashboard pro \uD83C\uDF89"},completionSubtitle:{id:"0+zlMD",defaultMessage:"You took a raw dataset and turned it into an analytics dashboard. Publish it to share with your team."}})},170638:(e,t,i)=>{"use strict";i.d(t,{Yd:()=>r,Ov:()=>o.O,tF:()=>s.t});var n=i(141078),a=i(96437);let r=(0,n.J1)`
  ${a.nk}
  ${a.c2}
  mutation WidgetCreateAndPositionMutation(
    $widget: LakeviewconfigModelsWidgetInput!
    $parent: String!
    $widgetPosition: LakeviewconfigServicesWidgetCreateAndPositionWidgetRequestWidgetPositionInput!
    $parentPageEtag: String!
    $widgetToCreate: LakeviewconfigServicesCommonWidgetToCreateInput
    $parentPageLayout: LakeviewconfigModelsPageLayoutInput
    $widgetOrder: [LakeviewconfigModelsOrderInput!]
    $datasets: [LakeviewconfigServicesCommonDatasetToCreateInput!]
  ) @component(name: "Lakeview.Dashboards") {
    lakeviewconfigServicesWidgetCreateAndPositionWidget(
      input: {
        widget: $widget
        parent: $parent
        widgetPosition: $widgetPosition
        parentPageEtag: $parentPageEtag
        widgetToCreate: $widgetToCreate
        parentPageLayout: $parentPageLayout
        widgetOrder: $widgetOrder
        datasets: $datasets
      }
    ) {
      ...LakeviewconfigWidgetAndPositionFragment
      apiError {
        ...LakeviewApiErrorFragment
      }
    }
  }
`;var o=i(758946),s=i(614516)},175291:(e,t,i)=>{"use strict";i.d(t,{N:()=>o,X:()=>s});var n=i(692738),a=i(107774);function r(e){return null!=e.tagKey}function o(e){if(!(0,a.X)())return{domainHierarchy:{},subDomainIdToParentDomain:{}};let t=new Map(e.map(e=>[e.domainId,e])),i={},n={};for(let a of e){if(null==a.domainId||null==a.parentDomainId||!r(a))continue;let e=t.get(a.parentDomainId);null!=e&&r(e)&&(i[e.tagKey]??=[],i[e.tagKey].push(a),n[a.domainId]=e)}return{domainHierarchy:i,subDomainIdToParentDomain:n}}function s(e){return(0,n.useMemo)(()=>o(e),[e])}},183136:(e,t,i)=>{"use strict";i.d(t,{P:()=>a});var n=i(141078);let a=(0,n.J1)`
  fragment LakeviewSemanticModel on lakeviewconfigModels_SemanticModel {
    name
    displayName
    sources {
      name
      datasetName
    }
    relationships {
      name
      leftSourceName
      rightSourceName
      on
      cardinality
    }
    measures {
      name
      expression
    }
    etag
    createdTimestamp {
      seconds
      nanos
    }
    userLastUpdatedTimestamp {
      seconds
      nanos
    }
  }
`},187441:(e,t,i)=>{"use strict";i.d(t,{A:()=>l});var n=i(610435),a=i(692738),r=i(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 17",...e,children:(0,n.Y)("path",{fill:"currentColor",d:"M3.75 2A2.75 2.75 0 0 0 1 4.75v6.5A2.75 2.75 0 0 0 3.75 14H5.5v-1.5H3.75c-.69 0-1.25-.56-1.25-1.25v-6.5c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v6.5c0 .69-.56 1.25-1.25 1.25H9.81l.97-.97-1.06-1.06-2.78 2.78 2.78 2.78 1.06-1.06-.97-.97h2.44A2.75 2.75 0 0 0 15 11.25v-6.5A2.75 2.75 0 0 0 12.25 2z"})})}let s=(0,a.forwardRef)((e,t)=>(0,n.Y)(r.I,{ref:t,...e,component:o}));s.displayName="LoopIcon";let l=s},214369:(e,t,i)=>{"use strict";i.d(t,{K:()=>a,h:()=>n});let n="=";class a{tagKey;tagValue;value;tagKeySearchResult;constructor(e,t,i=!1){this.tagKey=e,this.tagValue=t,this.value=`${this.tagKey}${this.tagValue?`${n}${this.tagValue}`:""}`,this.tagKeySearchResult=i}canHaveChildren(){return!this.tagValue}getValue(){return this.value}getDisplayValue(){return this.tagValue?`${this.tagKey}:${this.tagValue}`:this.tagKey}isChild(){return!!this.tagValue}getParent(){return new a(this.tagKey,void 0)}isChildOf(e){return e instanceof a&&e.tagKey===this.tagKey&&!!this.tagValue}isLoading(){return!1}getTagName(){return this.tagKey}getTagValue(){return this.tagValue}isTagKeySearchResult(){return this.tagKeySearchResult}}},222572:(e,t,i)=>{"use strict";i.d(t,{A:()=>l});var n=i(610435),a=i(692738),r=i(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1 8a7 7 0 0 1 11.85-5.047l.65.594V2H15v4h-4V4.5h1.32l-.496-.453-.007-.007a5.5 5.5 0 1 0 .083 7.839l1.063 1.058A7 7 0 0 1 1 8",clipRule:"evenodd"})})}let s=(0,a.forwardRef)((e,t)=>(0,n.Y)(r.I,{ref:t,...e,component:o}));s.displayName="RefreshIcon";let l=s},276166:(e,t,i)=>{"use strict";i.d(t,{P:()=>n});let n=e=>t=>{e.forEach(e=>{"function"==typeof e?e(t):null!==e&&(e.current=t)})}},283009:(e,t,i)=>{"use strict";i.d(t,{a:()=>s});var n=i(610435);i(692738);var a=i(79128),r=i(79570),o=i(180864);function s({buttonProps:e,componentId:t,copyText:i,copyTooltip:l,isInsideInputGroup:d=!1,onCopy:c,tooltipProps:u}){let{actionIcon:p,copy:g,handleTooltipOpenChange:m,tooltipOpen:f,tooltipMessage:h}=(0,o.L)(i,l,c),v=(0,n.Y)(a.$n,{"aria-label":h,componentId:t,icon:p,onClick:g,size:"small",...e}),y=(0,n.Y)(a.$n,{"aria-label":h,componentId:t,onClick:g,...e,children:p});return(0,n.Y)(r.m,{componentId:`${t}-tooltip`,content:h,onOpenChange:m,open:f,...u,children:d?y:v})}},283302:(e,t,i)=>{"use strict";i.d(t,{k:()=>s});var n=i(692738),a=i(252212),r=i(141267);let o={pipExpanded:{"view-trips-dataset":r.yY.TUTORIALS_E2E_DASHBOARD_DEMO_PIP_EXPANDED_VIEW_TRIPS_DATASET,"build-bar-chart-with-genie":r.yY.TUTORIALS_E2E_DASHBOARD_DEMO_PIP_EXPANDED_BUILD_BAR_CHART_WITH_GENIE,"tour-the-dashboard":r.yY.TUTORIALS_E2E_DASHBOARD_DEMO_PIP_EXPANDED_TOUR_THE_DASHBOARD,complete:r.yY.TUTORIALS_E2E_DASHBOARD_DEMO_PIP_EXPANDED_COMPLETE},pipMinimized:{"view-trips-dataset":r.yY.TUTORIALS_E2E_DASHBOARD_DEMO_PIP_MINIMIZED_VIEW_TRIPS_DATASET,"build-bar-chart-with-genie":r.yY.TUTORIALS_E2E_DASHBOARD_DEMO_PIP_MINIMIZED_BUILD_BAR_CHART_WITH_GENIE,"tour-the-dashboard":r.yY.TUTORIALS_E2E_DASHBOARD_DEMO_PIP_MINIMIZED_TOUR_THE_DASHBOARD,complete:r.yY.TUTORIALS_E2E_DASHBOARD_DEMO_PIP_MINIMIZED_COMPLETE}},s=(e,t)=>{let i=(0,r.qB)(o[t][e]),s=(0,n.useCallback)(e=>i({activeTimeMs:e.totalActiveMs}),[i]);return(0,a.d)({onReport:s,thresholdMs:2e3})}},308879:(e,t,i)=>{"use strict";i.d(t,{L:()=>l,u:()=>d});var n=i(689262),a=i(686560),r=i(441535),o=i(709262),s=i(805287);let l=()=>({isEnabled:d()}),d=()=>(0,s.gz)({cloud:"AWS",userCanUseDatabricksWorkspace:(0,a.d)("userCanUseDatabricksWorkspace_new",!1),userCanUseSqlService:(0,a.d)("userCanUseSqlService_new",!1),enableSqlService:(0,n.b)("enableSqlService",(0,a.d)("enableSqlService",!1),()=>(0,a.d)("dbSqlEnabled_new",!1)),centralizedLoginEnabled:(0,n.b)("centralizedLoginEnabled",(0,a.d)("centralizedLoginEnabled",!1),()=>(0,r.W)("databricks.fe.centralizedLoginEnabled",!1))})[o.EU].allowed},356964:(e,t,i)=>{"use strict";i.d(t,{M:()=>a,x:()=>r});var n=i(141078);let a=(0,n.J1)`
  mutation CreateDomain($input: domains_CreateDomainRequestInput!)
  @component(name: "LakehouseCollaboration.DiscoveryAndRecommendation")
  @throwOnFieldError {
    domains_create(input: $input) {
      domainId
      tagKey
      tagMetadata {
        description
      }
      icon {
        name
        color
      }
      subtitle
      description
    }
  }
`;function r(e){return(0,n.n_)(a,{errorPolicy:"all",...e})}},370463:(e,t,i)=>{"use strict";i.d(t,{Mo:()=>a,TE:()=>o,X9:()=>s,vQ:()=>r});var n=i(151586);let a=["view-trips-dataset","build-bar-chart-with-genie","tour-the-dashboard","complete"],r=a.length,o=e=>a.includes(e);function s(e){let t,i,a,r,o,s,l,d,c,u,p,g,m;return[{id:"view-trips-dataset",title:(t=n.E.viewTripsTitle,e.formatMessage(t)),summary:(i=n.E.viewTripsSummary,e.formatMessage(i)),instructions:[{text:(a=n.E.viewTripsInstruction1,e.formatMessage(a))},{text:(r=n.E.viewTripsInstruction2,e.formatMessage(r))}]},{id:"build-bar-chart-with-genie",title:(o=n.E.buildBarChartWithGenieTitle,e.formatMessage(o)),summary:(s=n.E.buildBarChartWithGenieSummary,e.formatMessage(s)),instructions:[{text:(l=n.E.buildBarChartWithGenieInstruction1,e.formatMessage(l)),codeBlock:(d=n.E.buildBarChartWithGeniePrompt,e.formatMessage(d)),codeBlockLanguage:"text"}]},{id:"tour-the-dashboard",title:(c=n.E.tourTheDashboardTitle,e.formatMessage(c)),summary:(u=n.E.tourTheDashboardSummary,e.formatMessage(u)),instructions:[{text:(p=n.E.tourTheDashboardInstruction1,e.formatMessage(p))}]},{id:"complete",title:(g=n.E.completionTitle,e.formatMessage(g)),summary:(m=n.E.completionSubtitle,e.formatMessage(m))}]}},370781:(e,t,i)=>{"use strict";i.d(t,{f:()=>r});var n=i(692738),a=i(681695);function r(){return(0,n.useCallback)(e=>a.Ye.call({callback:e}),[])}},391375:(e,t,i)=>{"use strict";i.d(t,{Nf:()=>E,cf:()=>k,pd:()=>h});var n=i(610435),a=i(956935),r=i(692738),o=i(497895),s=i(382908),l=i(79128),d=i(810026),c=i(342411),u=i(714953),p=i(899831),g=i(373037),m=i(91192);let f=(0,c.YK)({completionFallback:{id:"F0VI2A",defaultMessage:"You are done."},publish:{id:"/SPYnH",defaultMessage:"Publish"}}),h=({lessonId:e})=>{if(e!==m.xs)return null;return(0,n.Y)(v,{})},v=()=>{let e=(0,u.ht)(e=>e.isVisible),t=(0,u.ht)(e=>e.width);return(0,r.useEffect)(()=>{let{floatingWidth:i,floatingX:n}=g.u.getState(),a=Math.max(0,window.innerWidth-i-p.jD),r=Math.max(0,a-t-p.jD),o=e?r:a;o!==n&&g.u.setState({floatingX:o})},[e,t]),null},y=(0,a.i7)({"0%":{opacity:0,transform:"translateY(4px)"},"100%":{opacity:1,transform:"translateY(0)"}}),I=(0,a.i7)({"0%":{opacity:0,transform:"scale(0.6)"},"100%":{opacity:1,transform:"scale(1)"}}),b=(0,a.i7)({"0%":{opacity:0,transform:"scale(0.8)"},"40%":{opacity:.6,transform:"scale(1.15)"},"100%":{opacity:0,transform:"scale(1.4)"}}),S=(0,a.i7)({"0%":{strokeDashoffset:19},"100%":{strokeDashoffset:0}}),w=(0,a.i7)({"0%":{opacity:0},"100%":{opacity:1}}),k=({title:e,subtitle:t})=>{let{theme:i}=(0,o.wn)(),{formatMessage:a}=(0,c.tz)(),r=t??e??a(f.completionFallback),l=i.colors.textValidationSuccess,d=`color-mix(in srgb, ${l} 10%, transparent)`,u=`color-mix(in srgb, ${l} 25%, transparent)`;return(0,n.FD)("div",{css:{display:"flex",flexDirection:"column",alignItems:"center",gap:12,paddingTop:i.spacing.md,paddingBottom:i.spacing.md,textAlign:"center",animation:`${y} 300ms ease-out both`},children:[(0,n.FD)("div",{css:{position:"relative",width:40,height:40,display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,n.Y)("span",{"aria-hidden":!0,css:{position:"absolute",inset:0,borderRadius:"50%",backgroundColor:u,pointerEvents:"none",animation:`${b} 900ms ease-out 120ms both`}}),(0,n.Y)("div",{css:{position:"relative",width:40,height:40,borderRadius:"50%",backgroundColor:d,display:"flex",alignItems:"center",justifyContent:"center",animation:`${I} 350ms cubic-bezier(0.2, 0.8, 0.2, 1) 80ms both`},children:(0,n.Y)("svg",{"aria-hidden":!0,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",css:{display:"block",overflow:"visible"},children:(0,n.Y)("path",{d:"M4 11 L8.5 15.5 L16 6",stroke:l,strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:19,css:{animation:`${S} 420ms cubic-bezier(0.65, 0, 0.35, 1) 220ms both`}})})})]}),(0,n.Y)(s.o.Text,{size:"sm",color:"secondary",css:{animation:`${w} 300ms ease-out 280ms both`},children:r})]})},E=({stepId:e})=>{let{formatMessage:t}=(0,c.tz)();return(0,n.Y)(l.$n,{componentId:"tutorials.e2eDashboardDemo.publish",type:"primary",icon:(0,n.Y)(d.A,{}),onClick:()=>{document.querySelector('button[data-component-id="lakeview.draft.header.publishbutton"]')?.click()},children:t(f.publish)})}},424489:(e,t,i)=>{"use strict";i.d(t,{A:()=>l});var n=i(610435),a=i(692738),r=i(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",d:"M12.125 8.864a.75.75 0 0 0 0-1.3l-6-3.464A.75.75 0 0 0 5 4.75v6.928a.75.75 0 0 0 1.125.65z"})})}let s=(0,a.forwardRef)((e,t)=>(0,n.Y)(r.I,{ref:t,...e,component:o}));s.displayName="PlayIcon";let l=s},430750:(e,t,i)=>{"use strict";i.d(t,{M6:()=>P,ZT:()=>T,dh:()=>x});var n=i(610435),a=i(692738),r=i(497895),o=i(382908),s=i(79128),l=i(201513),d=i(943844),c=i(658345),u=i(12414),p=i(217247),g=i(955210),m=i(308675),f=i(424489),h=i(342411),v=i(929117),y=i(262989),I=i(959240),b=i(276166),S=i(799738),w=i(856325),k=i(750363),E=i(469e3);let A=a.lazy(()=>(()=>{let e=()=>Promise.all([i.e(62280),i.e(92922),i.e(10596),i.e(97786),i.e(47017),i.e(20689),i.e(83552),i.e(67403),i.e(17160),i.e(72865)]).then(i.bind(i,772865));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(772865,"../../MarkdownView","lazy",e);return e()})().then(e=>({default:e.MarkdownView}))),T=({componentId:e,destinationLabel:t,onClick:i})=>{let{theme:a}=(0,r.wn)(),l=a.isDarkMode?{backgroundColor:`color-mix(in srgb, ${a.colors.yellow500} 10%, ${a.colors.backgroundSecondary})`,borderColor:`color-mix(in srgb, ${a.colors.yellow500} 20%, ${a.colors.border})`}:{backgroundColor:a.colors.yellow100,borderColor:a.colors.yellow300};return(0,n.FD)("div",{"data-testid":"tutorial-pip-off-route-banner",css:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:a.spacing.sm,padding:`${a.spacing.sm}px ${a.spacing.md}px`,backgroundColor:l.backgroundColor,borderBottom:`1px solid ${l.borderColor}`,flexShrink:0},children:[(0,n.Y)(o.o.Text,{css:{flex:1,minWidth:0},children:(0,n.Y)(h.sA,{id:"9aIUAW",defaultMessage:"{destinationLabel} to follow along with this step.",values:{destinationLabel:t}})}),(0,n.Y)(s.$n,{componentId:e,onClick:i,children:(0,n.Y)(h.sA,{id:"x6BPxo",defaultMessage:"Take me there"})})]})},x=({lessonId:e,lessonTitle:t,currentStep:i,currentStepIndex:a,totalSteps:m,hasNextLesson:f,nextLessonTitle:x,takeMeThereBanner:P,onBackToCourse:C,onMinimize:D,onClose:_,onPrevStep:R,onNextStep:L,onNextLesson:$,onFinishCourse:M,onAction:N,onHeaderMouseDown:Y,isDragging:O=!1,rootRef:F})=>{let{theme:U}=(0,r.wn)(),B=(0,S.bc)(S.z.VIMEO_PLAYER_SDK),z=a>=m-1,G=`${e}.${i.stepId}`,W=`tutorial-pip.expanded.${G}`,V=`tutorial-pip-back-to-course.${G}`,H=`tutorial-pip-minimize.${G}`,K=`tutorial-pip-close.${G}`,j=`tutorial-pip-prev.${G}`,q=`tutorial-pip-next-lesson.${G}`,J=`tutorial-pip-back-to-course-footer.${G}`,X=`tutorial-pip-next.${G}`,Z=`tutorial-pip-take-me-there.${G}`,{elementRef:Q}=(0,y.h)("div",W),ee=F?(0,b.P)([Q,F]):Q,et=i.vimeoId||i.videoUrl?(0,E.b)(e,"pipExpanded"):void 0;return(0,n.FD)("div",{ref:ee,css:{display:"flex",flexDirection:"column",height:"100%",overflow:"hidden"},children:[(0,n.FD)("div",{onMouseDown:Y,css:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:`${U.spacing.sm}px ${U.spacing.md}px`,borderBottom:`1px solid ${U.colors.border}`,backgroundColor:U.colors.backgroundSecondary,cursor:O?"grabbing":"grab",userSelect:"none",flexShrink:0},children:[(0,n.Y)(s.$n,{componentId:V,icon:(0,n.Y)(l.A,{css:{width:U.general.iconFontSize,height:U.general.iconFontSize,color:U.colors.textSecondary}}),type:"tertiary",size:"small",onMouseDown:e=>e.stopPropagation(),onClick:e=>{e.stopPropagation(),C()},css:{paddingInline:0,color:U.colors.textSecondary},children:(0,n.Y)(o.o.Text,{size:"md",color:"secondary",children:(0,n.Y)(h.sA,{id:"UUoukf",defaultMessage:"Back to course"})})}),(0,n.FD)("div",{css:{display:"flex",alignItems:"center",gap:U.spacing.xs},children:[(0,n.Y)(s.$n,{componentId:H,icon:(0,n.Y)(d.A,{css:{width:U.general.iconFontSize,height:U.general.iconFontSize,color:U.colors.textSecondary}}),size:"small",type:"tertiary","aria-label":"Minimize tutorial panel",onMouseDown:e=>e.stopPropagation(),onClick:e=>{e.stopPropagation(),D()}}),(0,n.Y)(s.$n,{componentId:K,icon:(0,n.Y)(c.A,{css:{width:U.general.iconFontSize,height:U.general.iconFontSize,color:U.colors.textSecondary}}),size:"small",type:"tertiary","aria-label":"Close tutorial panel",onClick:e=>{e.stopPropagation(),_()}})]})]}),P&&(0,n.Y)(T,{componentId:Z,...P}),(0,n.FD)("div",{css:{flex:1,overflowY:"auto",padding:`${U.spacing.md}px ${U.spacing.md}px ${U.spacing.lg}px`,display:"flex",flexDirection:"column"},children:[B&&i.vimeoId&&(0,n.Y)("div",{css:{borderRadius:U.borders.borderRadiusLg,overflow:"hidden",flexShrink:0,marginBottom:U.spacing.md},children:(0,n.Y)(k.c,{entityId:et,mediaKey:i.vimeoId,videoId:i.vimeoId,autoplay:!0})}),!B&&i.videoUrl&&(0,n.Y)("div",{css:{borderRadius:U.borders.borderRadiusLg,overflow:"hidden",flexShrink:0,marginBottom:U.spacing.md},children:(0,n.Y)(w.K,{entityId:et,mediaKey:i.videoUrl,src:i.videoUrl,controls:!0,autoPlay:!0,css:{width:"100%",height:"auto",display:"block"}})}),(0,n.Y)(o.o.Text,{color:"secondary",size:"sm",children:t}),(0,n.Y)(o.o.Text,{bold:!0,css:{"&&":{fontSize:15,lineHeight:"20px"},marginBottom:U.spacing.md},children:i.title}),i.content&&(0,n.Y)("div",{css:{color:U.colors.textSecondary,fontSize:U.typography.fontSizeBase,lineHeight:U.typography.lineHeightBase,"& p":{marginTop:0,marginBottom:U.spacing.sm},"& p:last-child":{marginBottom:0}},children:(0,n.Y)(I.t,{description:v.z.GENERIC_SUSPENSE,fallback:(0,n.Y)("div",{css:{display:"flex",justifyContent:"center",padding:U.spacing.lg},children:(0,n.Y)(u.y,{})}),children:(0,n.Y)(A,{markdown:i.content})})}),i.actions&&i.actions.length>0?(0,n.Y)("div",{css:{display:"flex",flexWrap:"wrap",gap:U.spacing.sm,marginTop:U.spacing.md},children:i.actions.map(e=>(0,n.Y)(s.$n,{componentId:"tutorial-pip-action",type:"tertiary",size:"small",onClick:()=>N?.(e),children:e.label},e.id))}):null,z&&f&&x?(0,n.FD)("div",{"data-testid":"tutorial-pip-next-lesson-preview",css:{display:"flex",flexDirection:"column",padding:U.spacing.md,border:`1px solid ${U.colors.border}`,borderRadius:U.borders.borderRadiusMd},children:[(0,n.Y)(o.o.Text,{bold:!0,children:(0,n.Y)(h.sA,{id:"HgqADB",defaultMessage:"Next lesson"})}),(0,n.Y)(o.o.Text,{children:x})]}):null]}),(0,n.Y)("div",{css:{display:"flex",flexDirection:"column",gap:U.spacing.md,padding:`${U.spacing.md}px ${U.spacing.md}px`,backgroundColor:U.colors.backgroundPrimary,flexShrink:0,boxShadow:U.shadows.lg.replace(/^0px 2px/,"0px -2px")},children:(0,n.FD)("div",{css:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:U.spacing.sm},children:[(0,n.Y)(s.$n,{componentId:j,icon:(0,n.Y)(p.A,{}),disabled:0===a,onClick:R,children:(0,n.Y)(h.sA,{id:"q+7jTE",defaultMessage:"Previous"})}),(0,n.Y)(o.o.Text,{size:"sm",css:{flexShrink:0},children:(0,n.Y)(h.sA,{id:"MbnpYr",defaultMessage:"{current} of {total}",values:{current:a+1,total:m}})}),z&&f?(0,n.Y)(s.$n,{componentId:q,endIcon:(0,n.Y)(g.A,{}),type:"primary",onClick:$,children:(0,n.Y)(h.sA,{id:"6wHO9B",defaultMessage:"Next lesson"})}):z?(0,n.Y)(s.$n,{componentId:J,endIcon:(0,n.Y)(g.A,{}),type:"primary",onClick:M,children:(0,n.Y)(h.sA,{id:"r95nZd",defaultMessage:"Back to course"})}):(0,n.Y)(s.$n,{componentId:X,endIcon:(0,n.Y)(g.A,{}),type:"primary",onClick:L,children:(0,n.Y)(h.sA,{id:"nTgl0+",defaultMessage:"Next"})})]})})]})},P=({lessonId:e,currentStepId:t,lessonTitle:i,currentStepTitle:a,takeMeThereBanner:d,headerIcon:u,onBackToCourse:p,backToCourseLabel:g,onExpand:v,onClose:I,rootRef:S})=>{let{theme:w}=(0,r.wn)(),k=`${e}.${t}`,E=`tutorial-pip.minimized.${k}`,A=`tutorial-pip-minimized-back-to-course.${k}`,x=`tutorial-pip-minimized-expand.${k}`,P=`tutorial-pip-minimized-close.${k}`,C=`tutorial-pip-take-me-there.${k}`,{elementRef:D}=(0,y.h)("div",E),_=S?(0,b.P)([D,S]):D;return(0,n.FD)("div",{ref:_,"data-testid":"tutorial-pip-minimized-entry",css:{position:"fixed",right:w.spacing.lg,bottom:w.spacing.lg,zIndex:w.options.zIndexBase-1,display:"flex",flexDirection:"column",width:`min(420px, calc(100vw - ${2*w.spacing.lg}px))`,border:`1px solid ${w.colors.border}`,borderRadius:w.borders.borderRadiusMd,backgroundColor:w.colors.backgroundPrimary,boxShadow:w.shadows.lg,overflow:"hidden"},children:[(0,n.FD)("div",{css:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:`${w.spacing.sm}px ${w.spacing.md}px`,borderBottom:`1px solid ${w.colors.border}`,backgroundColor:w.colors.backgroundSecondary,flexShrink:0},children:[p?(0,n.Y)(s.$n,{componentId:A,icon:(0,n.Y)(l.A,{css:{width:w.general.iconFontSize,height:w.general.iconFontSize,color:w.colors.textSecondary}}),type:"tertiary",onClick:p,css:{paddingInline:0,color:w.colors.textSecondary},children:(0,n.Y)(o.o.Text,{size:"md",color:"secondary",children:g??(0,n.Y)(h.sA,{id:"06II1L",defaultMessage:"Back to course"})})}):null,(0,n.FD)("div",{css:{display:"flex",alignItems:"center",gap:w.spacing.xs},children:[(0,n.Y)(s.$n,{componentId:x,icon:(0,n.Y)(m.A,{}),type:"tertiary","aria-label":"Expand tutorial panel",onClick:v}),(0,n.Y)(s.$n,{componentId:P,icon:(0,n.Y)(c.A,{}),type:"tertiary","aria-label":"Close tutorial panel",onClick:I})]})]}),d&&(0,n.Y)(T,{componentId:C,...d}),(0,n.Y)("div",{css:{padding:w.spacing.md,display:"flex",flexDirection:"column",gap:w.spacing.sm},children:(0,n.FD)("div",{css:{display:"flex",alignItems:"center",gap:w.spacing.sm},children:[(0,n.Y)("div",{"data-testid":"tutorial-pip-minimized-header-icon",css:{width:48,height:48,borderRadius:w.borders.borderRadiusMd,backgroundColor:w.colors.grey100,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:u??(0,n.Y)(f.A,{css:{color:w.colors.textSecondary}})}),(0,n.FD)("div",{css:{display:"flex",flexDirection:"column",minWidth:0},children:[(0,n.Y)(o.o.Text,{color:"secondary",css:{fontSize:w.typography.fontSizeSm},children:i}),(0,n.Y)(o.o.Text,{bold:!0,children:a})]})]})})]})}},437885:(e,t,i)=>{"use strict";i.d(t,{PL:()=>a,Tp:()=>r,kW:()=>n});let n="tall-item-workaround",a="short-item-workaround",r="hide-display-name"},440765:(e,t,i)=>{"use strict";i.d(t,{b:()=>r});var n=i(441535),a=i(434422);let r=()=>{if(!(0,a.s)())return!1;return(0,n.W)("databricks.fe.assistant.enableDiscoveryPageAgent",!1)}},465082:(e,t,i)=>{"use strict";i.d(t,{A:()=>l});var n=i(610435),a=i(692738),r=i(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a3.25 3.25 0 1 0 0 6.5A3.25 3.25 0 0 0 8 1M6.25 4.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M8 9a8.74 8.74 0 0 0-6.836 3.287.75.75 0 0 0-.164.469v1.494c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75v-1.494a.75.75 0 0 0-.164-.469A8.74 8.74 0 0 0 8 9m-5.5 4.5v-.474A7.23 7.23 0 0 1 8 10.5c2.2 0 4.17.978 5.5 2.526v.474z",clipRule:"evenodd"})})}let s=(0,a.forwardRef)((e,t)=>(0,n.Y)(r.I,{ref:t,...e,component:o}));s.displayName="UserIcon";let l=s},479448:(e,t,i)=>{"use strict";i.d(t,{A:()=>l});var n=i(610435),a=i(692738),r=i(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("path",{fill:"currentColor",d:"M7.25 4.25V6H5.5v1.5h1.75v1.75h1.5V7.5h1.75V6H8.75V4.25zM10.5 10.5h-5V12h5z"}),(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.75 1a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75V1.75a.75.75 0 0 0-.75-.75zm.75 12.5v-11h11v11z",clipRule:"evenodd"})]})}let s=(0,a.forwardRef)((e,t)=>(0,n.Y)(r.I,{ref:t,...e,component:o}));s.displayName="PlusMinusSquareIcon";let l=s},482921:(e,t,i)=>{"use strict";i.d(t,{G:()=>r,M:()=>a});var n,a=((n={}).ONLY_CLUSTER="ONLY_CLUSTER",n.ONLY_WAREHOUSE="ONLY_WAREHOUSE",n.WAREHOUSE_AND_CLUSTER="WAREHOUSE_AND_CLUSTER",n);let r=(e,t)=>{if(!t&&e)return"ONLY_CLUSTER";if(!e)return"ONLY_WAREHOUSE";return"WAREHOUSE_AND_CLUSTER"}},491859:(e,t,i)=>{"use strict";i.d(t,{q:()=>_});var n=i(610435),a=i(799738),r=i(497895),o=i(382908),s=i(79128),l=i(658345),d=i(342411),c=i(87221),u=i(488655),p=i(12099),g=i(306555),m=i(282253),f=i(406130),h=i(773848),v=i(373037);let y=({config:e,onHideNudge:t})=>{let{entryPoint:i,course:a,observabilityIds:y}=e,{theme:I}=(0,r.wn)(),b=(0,d.tz)(),S=(0,u.Zp)(),w=(0,c.ki)(),k=(0,v.u)(e=>e.showFundamentalsLessonSession),E=b.formatMessage({id:"FJUMp2",defaultMessage:"Learn how to use {surfaceName}"},{surfaceName:b.formatMessage(a.surfaceLabel)}),A=b.formatMessage({id:"j8p6v/",defaultMessage:"Start lesson: {title}"},{title:E});return(0,n.FD)("div",{"data-testid":"learning-nudge-card",css:{position:"fixed",bottom:24,right:24,width:320,zIndex:I.options.zIndexBase-2,backgroundColor:I.colors.backgroundPrimary,borderRadius:I.borders.borderRadiusMd,border:`2px solid ${I.colors.border}`,boxShadow:I.shadows.lg,display:"flex",flexDirection:"column",overflow:"hidden",animation:"learningNudgeSlideIn 300ms ease-out","@keyframes learningNudgeSlideIn":{from:{opacity:0,transform:"translateY(16px)"},to:{opacity:1,transform:"translateY(0)"}}},children:[(0,n.FD)("div",{css:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:I.spacing.sm,padding:`${I.spacing.sm}px ${I.spacing.md}px`,backgroundColor:I.colors.backgroundSecondary,borderBottom:`1px solid ${I.colors.border}`,flexShrink:0},children:[(0,n.Y)(o.o.Text,{bold:!0,css:{flex:1,minWidth:0},children:E}),(0,n.Y)(s.$n,{componentId:"learning-nudge.dismiss",icon:(0,n.Y)(l.A,{}),size:"small",type:"tertiary","aria-label":"Dismiss learning nudge",onClick:()=>{(0,p.m$)(w,y),(0,g.HH)(i),t()},css:{flexShrink:0}})]}),(0,n.Y)("button",{type:"button","data-component-id":"learning-nudge.open-lesson",onClick:()=>{let e=(0,m.K_)(a.lessonSlug);if(!e)return void t();let n=b.formatMessage(m.DZ.courseTitle),r=(0,m.Zh)(e,b),o=(0,m.$)(e)??0,s=r[o]?.destinationRoute??e.destinationRoute,l=(0,m.jl)(e),d=l>=0&&l<m.Yq.length-1?m.Yq[l+1]:null,c=d?(0,m.cw)(d,n,b):void 0;if(k({sessionKind:"fundamentals",moduleId:m.M4,moduleTitle:n,lessonId:e.id,lessonTitle:b.formatMessage(e.title),destinationRoute:s,destinationLabel:b.formatMessage(e.destinationLabel),backToCourseRoute:(0,h.K)(e.slug),steps:r,currentStepIndex:o,totalModules:m.Xj,nextLessonSession:c}),e.needsProvisioning){let t=new URLSearchParams({[f.dK]:"1",[f.uW]:String(o)});S(`${(0,h.K)(e.slug)}?${t.toString()}`)}(0,g.ox)(y.lessonClosed),(0,p.L3)(w,y),(0,g.HH)(i),t()},"aria-label":A,css:{display:"block",padding:0,border:"none",background:"transparent",cursor:"pointer",width:"100%","&:focus-visible":{outline:`2px solid ${I.colors.actionPrimaryBackgroundDefault}`,outlineOffset:-2}},children:a.gifUrl?(0,n.Y)("img",{src:a.gifUrl,alt:"",css:{display:"block",width:"100%",height:"auto"}}):(0,n.Y)("div",{css:{width:"100%",aspectRatio:"16 / 9",backgroundColor:I.colors.backgroundSecondary}})})]})};var I=i(692738),b=i(858383),S=i(441535);let w=i.p+"static/media/assets-and-folders.8ad53ce6d4.png",k=i.p+"static/media/catalog-explorer.821b5abdc3.png",E=i.p+"static/media/create-notebook-ui.c1ac614fad.png";var A=i(438133);let T={workspace:{lessonSlug:"assets-and-folders",surfaceLabel:m.DZ.workspaceSurfaceLabel,gifUrl:w},catalog:{lessonSlug:"catalog-explorer",surfaceLabel:m.DZ.catalogSurfaceLabel,gifUrl:k},notebook:{lessonSlug:"create-notebook-ui",surfaceLabel:m.DZ.notebookSurfaceLabel,gifUrl:E}},x={workspace:{shown:"learning_nudge.shown.assets_and_folders",dismiss:"learning_nudge.dismiss.assets_and_folders",openLesson:"learning_nudge.open_lesson.assets_and_folders",lessonClosed:"learning_nudge.lesson_closed.assets_and_folders"},catalog:{shown:"learning_nudge.shown.catalog_explorer",dismiss:"learning_nudge.dismiss.catalog_explorer",openLesson:"learning_nudge.open_lesson.catalog_explorer",lessonClosed:"learning_nudge.lesson_closed.catalog_explorer"},notebook:{shown:"learning_nudge.shown.create_notebook_ui",dismiss:"learning_nudge.dismiss.create_notebook_ui",openLesson:"learning_nudge.open_lesson.create_notebook_ui",lessonClosed:"learning_nudge.lesson_closed.create_notebook_ui"}},P=Object.fromEntries(A.B.map(e=>[e.entryPoint,{...e,course:T[e.entryPoint],observabilityIds:x[e.entryPoint]}]));var C=i(832993);let D=()=>{let{hideNudge:e,visibleNudge:t}=function(){let e=(0,c.ki)(),t=(0,b.zy)(e=>e.pathname),i=(0,C.YB)(),[n,a]=(0,I.useState)(null),r=(0,I.useRef)(),o=(0,I.useMemo)(()=>(function(e){let t=(0,A.t)(e);if(!t)return null;let i=P[t.entryPoint];if(!i||!(0,m.K_)(i.course.lessonSlug))return null;return i})(t),[t]),s=(0,I.useCallback)(()=>{r.current&&(clearTimeout(r.current),r.current=void 0)},[]),l=(0,I.useCallback)(()=>{s(),a(null)},[s]);return(0,I.useEffect)(()=>{if(s(),!o||i||(0,g.gO)(o.entryPoint))return void a(null);if(n===o.entryPoint)return;return a(null),r.current=setTimeout(()=>{a(o.entryPoint),(0,p.CP)(e,o.observabilityIds)},1e3*(0,S.W)("databricks.sisu.experiments.learningNudgeDwellTime",15)),s},[s,i,o,e,n]),{hideNudge:l,visibleNudge:o?.entryPoint===n?o:null}}();if(!t)return null;return(0,n.Y)(y,{config:t,onHideNudge:e})},_=()=>{if(!(0,a.bc)(a.z.LEARNING_ENTRY_POINT_NUDGE)||!(0,a.sr)())return null;return(0,n.Y)(D,{})}},499153:(e,t,i)=>{"use strict";i.a(e,async(e,n)=>{try{i.d(t,{N:()=>H});var a=i(610435),r=i(154313),o=i(692738),s=i(497895),l=i(382908),d=i(79128),c=i(513820),u=i(201513),p=i(943844),g=i(658345),m=i(742557),f=i(503217),h=i(342411),v=i(262989),y=i(536796),I=i(87221),b=i(488655),S=i(858383),w=i(276166),k=i(609875),E=i(430750),A=i(938320),T=i(960790),x=i(373037),P=i(115057),C=i(993533),D=i(74360),_=i(499868),R=i(8323),L=i(980150),$=e([f]);function M(e,t,i,n,a,r,o){try{var s=e[r](o),l=s.value}catch(e){i(e);return}s.done?t(l):Promise.resolve(l).then(n,a)}function N(e){return function(){var t=this,i=arguments;return new Promise(function(n,a){var r=e.apply(t,i);function o(e){M(r,n,a,o,s,"next",e)}function s(e){M(r,n,a,o,s,"throw",e)}o(void 0)})}}function Y(e,t){let i=-1;for(let n=e.length-1;n>=0;n--){let a=e[n];if(a&&F(a).some(e=>(0,T.ln)(t,e))){i=n;break}}if(i>=0)return i;for(let i=e.length-1;i>=0;i--){let n=e[i];if(n&&U(t,n))return i}return -1}f=($.then?(await $)():$)[0];let B=(0,h.YK)({backToCourse:{id:"WcHnkh",defaultMessage:"Back to course"},minimizePanel:{id:"EriJAp",defaultMessage:"Minimize tutorial panel"},closePanel:{id:"XszFfj",defaultMessage:"Close tutorial panel"},previousStep:{id:"5y6Tna",defaultMessage:"Previous"},nextStep:{id:"TeVu6t",defaultMessage:"Next"},goToDemoPage:{id:"SRMFQR",defaultMessage:"Go to demo page"},doItForMe:{id:"BKzDw5",defaultMessage:"Do it for me"}});function O(e){return e?.sessionKind==="pipeline-demo"?e:null}function F(e){return Array.from(new Set([e.destinationRoute,...(e.routeLinks??[]).map(e=>e.destinationRoute)].filter(Boolean)))}function U(e,t){return F(t).some(t=>(0,T.nN)(e,t))}let z=({stage:e})=>{let t,{theme:i}=(0,s.wn)();return(0,a.FD)("div",{css:{display:"flex",flexDirection:"column",gap:i.spacing.sm},children:[(0,a.Y)(l.o.Title,{level:4,withoutMargins:!0,children:e.title}),e.summary?(0,a.Y)(l.o.Text,{color:"secondary",size:"sm",children:e.summary}):null,e.instructions&&e.instructions.length>0?(t=e.instructions.length>1?"ol":"ul",(0,a.Y)(t,{css:{margin:0,paddingLeft:i.spacing.lg,display:"flex",flexDirection:"column",gap:i.spacing.sm},children:e.instructions.map((e,t)=>(0,a.FD)("li",{children:[(0,a.Y)(l.o.Text,{color:"secondary",size:"sm",children:e.text}),e.codeBlock?(0,a.FD)("div",{css:{marginTop:i.spacing.xs,border:`1px solid ${i.colors.border}`,borderRadius:i.borders.borderRadiusMd,overflow:"hidden"},children:[(0,a.FD)("div",{css:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:`${i.spacing.xs}px ${i.spacing.sm}px`,backgroundColor:i.colors.backgroundSecondary,borderBottom:`1px solid ${i.colors.border}`},children:[(0,a.Y)(l.o.Text,{bold:!0,size:"sm",children:(e.codeBlockLanguage??"text").toUpperCase()}),(0,a.Y)(d.$n,{componentId:"pipeline-demo-pip.copy-code",size:"small",type:"tertiary",icon:(0,a.Y)(c.A,{}),onClick:()=>{navigator.clipboard.writeText(e.codeBlock??"")}})]}),(0,a.Y)("div",{css:{"& > div":{border:"none",borderRadius:0}},children:(0,a.Y)(f.ReadOnlyCodeBlock,{theme:i.isDarkMode?"databricks-unified-dark":"databricks-unified-light",language:e.codeBlockLanguage??"text",children:e.codeBlock})})]}):null]},t))})):null]})},G=({takeMeThereBanner:e,currentStageIndex:t,isDoItForMeLoading:i,canDoItForMe:n,isOnCoursePage:r,onSelectStage:o,onDoItForMe:c,rootRef:m})=>{let{theme:f}=(0,s.wn)(),{formatMessage:y}=(0,h.tz)(),I=(0,b.Zp)(),S=(0,x.u)(e=>e.lessonSession),k=O(S),A=(0,x.u)(e=>e.minimize),T=(0,x.u)(e=>e.hide),{handleMouseDown:C,dragging:D}=(0,P.t)(),{elementRef:_}=(0,v.h)("div","tutorial-pip-pipeline-demo-expanded");if(!k)return null;let{steps:R}=k;if(0===R.length)throw Error("Expected pipeline demo stages");let L=R[t]??R[0],$=t>=R.length-1,M=(0,w.P)([_,m]),N=y({id:"X1eT+c",defaultMessage:"Step {current} of {total}"},{current:t+1,total:R.length});return(0,a.FD)("div",{ref:M,css:{display:"flex",flexDirection:"column",height:"100%",overflow:"hidden"},children:[(0,a.FD)("div",{onMouseDown:C,css:{display:"flex",flexDirection:"column",padding:`${f.spacing.sm}px ${f.spacing.md}px`,borderBottom:`1px solid ${f.colors.border}`,backgroundColor:f.colors.backgroundSecondary,cursor:D?"grabbing":"grab",userSelect:"none",flexShrink:0,gap:f.spacing.sm},children:[(0,a.FD)("div",{css:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r?null:(0,a.Y)(d.$n,{componentId:"tutorial-pip.pipeline-demo.back-to-course",icon:(0,a.Y)(u.A,{css:{width:f.general.iconFontSize,height:f.general.iconFontSize,color:f.colors.textSecondary}}),type:"tertiary",size:"small",onMouseDown:e=>e.stopPropagation(),onClick:e=>{e.stopPropagation(),k&&(I(k.backToCourseRoute),A())},css:{paddingInline:0,color:f.colors.textSecondary},children:(0,a.Y)(l.o.Text,{size:"md",color:"secondary",children:y(B.backToCourse)})}),(0,a.FD)("div",{css:{display:"flex",alignItems:"center",gap:f.spacing.xs},children:[(0,a.Y)(d.$n,{componentId:"tutorial-pip.pipeline-demo.minimize",icon:(0,a.Y)(p.A,{css:{width:f.general.iconFontSize,height:f.general.iconFontSize,color:f.colors.textSecondary}}),size:"small",type:"tertiary","aria-label":y(B.minimizePanel),onMouseDown:e=>e.stopPropagation(),onClick:e=>{e.stopPropagation(),A()}}),(0,a.Y)(d.$n,{componentId:"tutorial-pip.pipeline-demo.close",icon:(0,a.Y)(g.A,{css:{width:f.general.iconFontSize,height:f.general.iconFontSize,color:f.colors.textSecondary}}),size:"small",type:"tertiary","aria-label":y(B.closePanel),onClick:e=>{e.stopPropagation(),T()}})]})]}),(0,a.FD)("div",{css:{display:"flex",flexDirection:"column",gap:f.spacing.xs},children:[(0,a.Y)(l.o.Text,{size:"sm",color:"secondary",children:N}),(0,a.Y)("div",{role:"progressbar","aria-valuenow":t+1,"aria-valuemin":1,"aria-valuemax":R.length,"aria-label":N,css:{backgroundColor:f.colors.grey200,height:f.spacing.xs,width:"100%",borderRadius:f.borders.borderRadiusSm},children:(0,a.Y)("div",{css:{backgroundColor:f.colors.actionPrimaryBackgroundDefault,height:"100%",width:`${(t+1)/R.length*100}%`,borderRadius:f.borders.borderRadiusSm,transition:"width 300ms ease-in-out"}})})]})]}),e?(0,a.Y)(E.ZT,{componentId:"tutorial-pip.pipeline-demo.take-me-there",...e}):null,(0,a.Y)("div",{css:{flex:1,overflowY:"auto",padding:`${f.spacing.md}px ${f.spacing.md}px ${f.spacing.lg}px`,display:"flex",flexDirection:"column",gap:f.spacing.md},children:L?(0,a.Y)(z,{stage:L}):null}),(0,a.FD)("div",{css:{display:"flex",justifyContent:"space-between",gap:f.spacing.sm,padding:`${f.spacing.sm}px ${f.spacing.md}px`,borderTop:`1px solid ${f.colors.border}`,flexShrink:0},children:[!(t<=0)&&(0,a.Y)(d.$n,{componentId:"tutorial-pip.pipeline-demo.previous-stage",type:"tertiary",onClick:()=>o(t-1),children:y(B.previousStep)}),(0,a.FD)("div",{css:{display:"flex",gap:f.spacing.sm,marginLeft:"auto"},children:[n&&!$?(0,a.Y)(d.$n,{componentId:"tutorial-pip.pipeline-demo.do-it-for-me",type:"tertiary",loading:i,disabled:i,onClick:c,children:y(B.doItForMe)}):null,$?(0,a.Y)(d.$n,{componentId:"tutorial-pip.pipeline-demo.go-to-demo-page",type:"primary",onClick:()=>{I(k.backToCourseRoute),A()},children:y(B.goToDemoPage)}):(0,a.Y)(d.$n,{componentId:"tutorial-pip.pipeline-demo.next-stage",type:n?"tertiary":"primary",onClick:()=>o(t+1),children:y(B.nextStep)})]})]})]})},W=e=>{let{ref:t}=(0,L.L)("pipExpanded");return(0,a.Y)(G,{...e,rootRef:t})},V=e=>{let{ref:t}=(0,L.L)("pipMinimized");return(0,a.Y)(E.M6,{...e,rootRef:t})},H=()=>{let e=(0,b.Zp)(),t=(0,S.zy)(e=>e.pathname),{theme:i}=(0,s.wn)(),n=(0,x.u)(e=>e.hide),l=(0,x.u)(e=>e.minimize),d=(0,x.u)(e=>e.restore),c=(0,x.u)(e=>e.setPipelineDemoStepIndex),u=(0,x.u)(e=>e.lessonSession),p=O(u),[g]=(0,k.K)(),[f]=(0,_.c)(),[h,v]=(0,o.useState)(!1),w=(0,o.useRef)(!1),[E,P]=(0,o.useState)(null),[L,$]=(0,o.useState)(null),M=(0,o.useRef)(new Map),{data:B}=(0,R.nZ)({variables:{input:{pipelineId:L??"",updateId:E??""}},skip:!E||!L,pollInterval:D.my,fetchPolicy:"network-only"});(0,o.useEffect)(()=>{if(!E||!B)return;let e=B.deltapipelinesGetUpdate?.update?.state,t=B.deltapipelinesGetUpdate?.apiError;(e===C.mtr.COMPLETED||e===C.mtr.FAILED||e===C.mtr.CANCELED||t)&&(L&&M.current.delete(L),P(null),$(null),v(!1),w.current=!1)},[B,E,L]),(0,o.useEffect)(()=>{if(!p)return;let e=p.steps[p.currentStepIndex],i=null!==e&&U(t,e)?p.currentStepIndex:p.steps.findIndex(e=>U(t,e)),n=i>=0?i:p.currentStepIndex,a=p.steps[n]?.pipelineId??p.steps[0]?.pipelineId??null;if(E&&L&&a&&a!==L)M.current.set(L,E),P(null),$(null),v(!1),w.current=!1;else if(!E&&a){let e=M.current.get(a);e&&($(a),P(e),v(!0),w.current=!0)}},[E,p,t,L]);let z=(0,o.useRef)(null),G=()=>{null!==z.current&&(clearTimeout(z.current),z.current=null)};(0,o.useEffect)(()=>G,[]),(0,o.useEffect)(()=>{if(!p)return void G();if((0,T.nN)(t,p.backToCourseRoute)){G(),n();return}let e=p.steps[p.currentStepIndex];if(e&&U(t,e)){G(),d();return}let i=Y(p.steps,t);i>=0?(G(),d(),i!==p.currentStepIndex&&c(i)):p.steps.some(e=>U(t,e))||null!==z.current||(z.current=setTimeout(()=>{z.current=null,l()},600))},[n,d,l,t,p,c]);let H=(0,o.useCallback)(i=>{if(!p)return;let n=Math.min(Math.max(i,0),p.steps.length-1),a=p.steps[n];if(!a?.destinationRoute)return;c(n),(0,T.ln)(t,a.destinationRoute)||e(a.destinationRoute)},[e,t,p,c]),K=(0,o.useCallback)(e=>N(function*(){if(h)return;let t=e.instructions?.find(e=>e.codeBlock),i=t?.codeBlock,n=t?.codeBlockTargetKey,a=e.routeLinks?.find(e=>n?e.targetKey===n:e.notebookPath);if(!i||!a?.notebookPath||!e.pipelineId||w.current)return;w.current=!0,v(!0);let o=!1;try{yield g({variables:{input:{path:a.notebookPath,content:r.Buffer.from(i).toString("base64"),format:C.J6F.SOURCE,language:C.KVK.SQL,overwrite:!0}}});let t=yield f({variables:{input:{pipelineId:e.pipelineId,development:!0,cause:C.uI$.USER_ACTION}}}),n=t?.data?.deltapipelinesStart?.updateId;n&&($(e.pipelineId),P(n),o=!0)}catch{}finally{o||(v(!1),w.current=!1)}})(),[g,h,f]);if(!p)return null;let j=p.steps[p.currentStepIndex],q=null!==j&&U(t,j)?p.currentStepIndex:Y(p.steps,t),J=q>=0?q:p.currentStepIndex,X=p.steps[J]??p.steps[0];if(!X)return null;let Z=J>=p.steps.length-1,Q=!!(X.instructions?.some(e=>e.codeBlock)&&X.routeLinks?.some(e=>e.notebookPath)&&X.pipelineId),ee=(0,T.nN)(t,p.backToCourseRoute),et=F(X).some(e=>(0,T.nN)(t,e)),ei=J===p.steps.length-1,en=et||ei?void 0:{destinationLabel:p.destinationLabel,onClick:()=>{X?.destinationRoute&&e(X.destinationRoute)}};return(0,a.Y)(y.S,{entitiesToAppend:[{type:I.Lm.TUTORIAL_STEP,id:X.stepId}],children:(0,a.Y)(A.g,{minimizedContent:(0,a.Y)(V,{lessonId:p.lessonId,currentStepId:X.stepId,lessonTitle:p.lessonTitle,currentStepTitle:X.title,takeMeThereBanner:en,headerIcon:Z?(0,a.Y)(m.A,{"data-testid":"pipeline-demo-pip-minimized-complete-icon",css:{color:i.colors.green500}}):void 0,onBackToCourse:ee?void 0:()=>{e(p.backToCourseRoute),l()},onExpand:d,onClose:n},`${p.lessonId}:${X.stepId}:minimized`),expandedContent:(0,a.Y)(W,{takeMeThereBanner:en,currentStageIndex:J,isDoItForMeLoading:h,canDoItForMe:Q,isOnCoursePage:ee,onSelectStage:H,onDoItForMe:()=>K(X),onAutoCompleteAndAdvance:()=>N(function*(){let e=Math.min(J+1,p.steps.length-1);H(e);try{yield K(X)}catch{H(J)}})()},`${p.lessonId}:${X.stepId}:expanded`)})})};n()}catch(e){n(e)}})},499868:(e,t,i)=>{"use strict";i.d(t,{c:()=>o});var n=i(141078),a=i(154968);let r=(0,n.J1)`
  mutation StartPipelineMutation($input: DeltapipelinesStartUpdateInput!)
  @component(name: "Workflows.Orchestration.Other") {
    deltapipelinesStart: jobsStartPipeline(input: $input) {
      updateId
      apiError {
        ...PipelineApiErrorFields
      }
    }
  }
  ${a.n}
`,o=e=>(0,n.n_)(r,e)},499918:(e,t,i)=>{"use strict";let n;i.d(t,{n:()=>w,v:()=>b});var a=i(610435),r=i(956935),o=i(942849),s=i(91958),l=i.n(s),d=i(692738),c=i(874938),u=i(224098),p=i(429608),g=i(497895),m=i(943844),f=i(53333),h=i(639712),v=i(123252),y=i(661748);let I=l()((e,t,i,n,a,o,s)=>(function({clsPrefix:e,theme:t,alignContentToEdge:i,isLeftAligned:n,secondaryStyle:a,contentPadding:o,headerWidth:s}){let l=`.${e}-item`,d=`${l}-active`,c=`.${e}-header`,u=`.${e}-content`,g=`.${e}-content-box`,m=`.${e}-arrow`,f={border:"0 none",background:"none",[l]:{border:"0 none",[`&:not(${l}-disabled):hover`]:{[c]:{color:t.colors.actionPrimaryBackgroundHover},[m]:{color:t.colors.actionPrimaryBackgroundHover}},[`&:not(${l}-disabled):active`]:{[c]:{color:t.colors.actionPrimaryBackgroundPress},[m]:{color:t.colors.actionPrimaryBackgroundPress}}},[c]:{...n&&{display:"inline-flex",alignItems:"center"},"&:focus-visible":{outlineColor:`${t.colors.actionDefaultBorderFocus} !important`,outlineStyle:"auto !important"}},[`& > ${l} > ${c} > ${m}`]:{fontSize:t.general.iconFontSize,right:i||n?0:12,...n&&{verticalAlign:"middle",marginTop:-2}},[m]:{color:t.colors.textSecondary},[`& > ${d} > ${c} > ${m}`]:{transform:n?"rotate(180deg)":"translateY(-50%) rotate(180deg)"},[u]:{border:"0 none",backgroundColor:t.colors.backgroundPrimary},[g]:{padding:o?i?"8px 0px 16px":"8px 16px 16px":0},[`& > ${l} > ${c}`]:{padding:"6px 44px 6px 0",lineHeight:t.typography.lineHeightBase,color:a?t.colors.textSecondary:t.colors.textPrimary,fontWeight:a?400:600,..."fit-content"===s&&{width:"fit-content"}},...(0,p.Cx)(t.options.enableAnimation)};return(0,r.AH)(f)})({clsPrefix:e,theme:t,alignContentToEdge:i,isLeftAligned:n,secondaryStyle:a,contentPadding:o,headerWidth:s}),(e,t,i,n,a,r,o)=>`${(0,h.H6)(t)}|${e}|${i}|${n}|${a}|${r}|${o}`),b=({dangerouslySetAntdProps:e,dangerouslyAppendEmotionCSS:t,children:i,...n})=>(0,a.Y)(p.wC,{children:(0,a.Y)(o.A.Panel,{...n,...e,css:t,children:(0,a.Y)(p.dg,{children:i})})});function S({dangerouslySetAntdProps:e,dangerouslyAppendEmotionCSS:t,displayMode:i="multiple",analyticsEvents:n,componentId:r,valueHasNoPii:s,onChange:l,alignContentToEdge:c=!1,chevronAlignment:h="right",secondaryStyle:b=!1,contentPadding:w=!0,headerWidth:k="full",...E}){let A=(0,y.W)("databricks.fe.observability.defaultComponentView.accordion",!1),{theme:T,getPrefixedClassName:x}=(0,g.wn)(),P=x("collapse"),C=(0,d.useMemo)(()=>n??(A?[u.s7.OnValueChange,u.s7.OnView]:[u.s7.OnValueChange]),[n,A]),D=(0,u.ei)({componentType:u.v_.Accordion,componentId:r,analyticsEvents:C,valueHasNoPii:s}),{elementRef:_}=(0,f.z)({onView:D.onView}),R=(0,d.useCallback)(e=>{Array.isArray(e)?D.onValueChange(JSON.stringify(e)):D.onValueChange(e),l?.(e)},[D,l]),L="left"===h,$=(0,d.useMemo)(()=>[I(P,T,c,L,b,w,k),t,(0,v.De)(T)],[P,T,c,L,b,w,k,t]),{dataComponentProps:M}=D,N=(0,d.useCallback)(()=>(0,a.Y)(m.A,{...M,ref:_}),[M,_]);return(0,a.Y)(p.wC,{children:(0,a.Y)(o.A,{expandIcon:N,expandIconPosition:h,accordion:"single"===i,...E,...e,css:$,onChange:R})})}let w=((n=e=>{if((0,y.W)("databricks.fe.designsystem.useRadixAccordion",!1)&&!e.useLegacyAccordion)return(0,a.Y)(c.R,{...e});return(0,a.Y)(S,{...e})}).Panel=b,n)},529068:(e,t,i)=>{"use strict";i.d(t,{A:()=>l});var n=i(610435),a=i(692738),r=i(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 17 16",...e,children:(0,n.Y)("path",{fill:"currentColor",d:"M4.03 12.06 5.091 11l-2.97-2.97 2.97-2.97L4.031 4 0 8.03zM12.091 4l4.03 4.03-4.03 4.03-1.06-1.06L14 8.03l-2.97-2.97z"})})}let s=(0,a.forwardRef)((e,t)=>(0,n.Y)(r.I,{ref:t,...e,component:o}));s.displayName="CodeIcon";let l=s},560997:(e,t,i)=>{"use strict";i.d(t,{Z:()=>u,s:()=>p});var n=i(961953),a=i(716962),r=i(846643),o=i(750848),s=i(844760);function l(e,t,i,n,a,r,o){try{var s=e[r](o),l=s.value}catch(e){i(e);return}s.done?t(l):Promise.resolve(l).then(n,a)}function d(e){return function(){var t=this,i=arguments;return new Promise(function(n,a){var r=e.apply(t,i);function o(e){l(r,n,a,o,s,"next",e)}function s(e){l(r,n,a,o,s,"throw",e)}o(void 0)})}}let c=(0,n.y)(a.Yd);function u(e){return d(function*({pageName:e,spec:t,existingPositions:i}){let n=(0,o.BZ)(),a=!t.datasetName,l={displayName:t.displayName,renderSpec:{widgetType:"VIZ",textBoxRenderSpec:null,vizRenderSpec:{rawJson:JSON.stringify(t.rawJsonContent)}},queries:a?[]:[{queryName:"main_query",query:{datasetName:t.datasetName,disaggregatedData:!0,fields:t.queryFields??[]}}]},d={width:t.position.width,height:t.position.height,xCoordinate:t.position.x,yCoordinate:t.position.y},u={widgetPositions:[...i,{widgetName:n,...d}]},p=JSON.stringify({operationName:"WidgetCreateAndPositionMutation",query:c,variables:{widget:l,parent:e,widgetPosition:d,parentPageEtag:"0",parentPageLayout:u,widgetToCreate:{widget:l,tempName:n}}}),g=yield(0,s.S)("/graphql/WidgetCreateAndPositionMutation",{method:"POST",headers:{"Content-Type":"application/json","x-databricks-operation-identifier":yield(0,r.m)(p)},body:p});if(!g.ok)throw Error(`Failed to create widget (HTTP ${g.status})`);let m=yield g.json();if(m.errors?.length)throw Error(m.errors[0].message);let f=m.data?.lakeviewconfigServicesWidgetCreateAndPositionWidget?.apiError;if(f?.message)throw Error(f.message);let h=m.data?.lakeviewconfigServicesWidgetCreateAndPositionWidget?.parentPage?.layout?.widgetPositions;return{updatedLayout:h?h.map(e=>({widgetName:e.widgetName,width:e.width,height:e.height,xCoordinate:e.xCoordinate,yCoordinate:e.yCoordinate})):[...i,{widgetName:n,...d}]}}).apply(this,arguments)}function p(e){return d(function*({pageName:e,spec:t,existingPositions:i}){let n=(0,o.BZ)(),a={displayName:t.displayName,renderSpec:{widgetType:"TEXT_BOX",vizRenderSpec:null,textBoxRenderSpec:{content:t.markdown,contentType:"MARKDOWN"}},queries:[]},l={width:t.position.width,height:t.position.height,xCoordinate:t.position.x,yCoordinate:t.position.y},d={widgetPositions:[...i,{widgetName:n,...l}]},u=JSON.stringify({operationName:"WidgetCreateAndPositionMutation",query:c,variables:{widget:a,parent:e,widgetPosition:l,parentPageEtag:"0",parentPageLayout:d,widgetToCreate:{widget:a,tempName:n}}}),p=yield(0,s.S)("/graphql/WidgetCreateAndPositionMutation",{method:"POST",headers:{"Content-Type":"application/json","x-databricks-operation-identifier":yield(0,r.m)(u)},body:u});if(!p.ok)throw Error(`Failed to create text widget (HTTP ${p.status})`);let g=yield p.json();if(g.errors?.length)throw Error(g.errors[0].message);let m=g.data?.lakeviewconfigServicesWidgetCreateAndPositionWidget?.apiError;if(m?.message)throw Error(m.message);let f=g.data?.lakeviewconfigServicesWidgetCreateAndPositionWidget?.parentPage?.layout?.widgetPositions;return{updatedLayout:f?f.map(e=>({widgetName:e.widgetName,width:e.width,height:e.height,xCoordinate:e.xCoordinate,yCoordinate:e.yCoordinate})):[...i,{widgetName:n,...l}]}}).apply(this,arguments)}},574132:(e,t,i)=>{"use strict";i.d(t,{y:()=>r});var n=i(610435);i(692738);var a=i(497895);let r=({disabled:e,children:t})=>{let{theme:i}=(0,a.wn)();return(0,n.Y)("div",{css:{color:i.colors.textSecondary,fontSize:i.typography.fontSizeSm,...e&&{color:i.colors.actionDisabledText}},children:t})}},605107:(e,t,i)=>{"use strict";i.d(t,{X:()=>r});var n=i(610435),a=i(497895);let r=({children:e,...t})=>{let{theme:i}=(0,a.wn)();return(0,n.Y)("div",{...t,css:{display:"flex",flexDirection:"row",alignItems:"flex-start",padding:`${i.spacing.xs}px ${i.spacing.lg/2}px`,alignSelf:"stretch",fontWeight:400,color:i.colors.textSecondary},children:e})}},607074:(e,t,i)=>{"use strict";i.d(t,{A:()=>l});var n=i(610435),a=i(692738),r=i(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.5 9V6h3v3zm3 1.5v3h-3v-3zm1.5-.75v-9a.75.75 0 0 0-.75-.75h-4.5A.75.75 0 0 0 5 .75v13.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75zM6.5 4.5v-3h3v3z",clipRule:"evenodd"})})}let s=(0,a.forwardRef)((e,t)=>(0,n.Y)(r.I,{ref:t,...e,component:o}));s.displayName="ColumnIcon";let l=s},609128:(e,t,i)=>{"use strict";i.d(t,{A:()=>l});var n=i(610435),a=i(692738),r=i(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",...e,children:(0,n.Y)("path",{fill:"currentColor",d:"M4 21v-2h12v2zm5.65-4.85L4 10.5l2.1-2.15L11.8 14zM16 9.8l-5.65-5.7L12.5 2l5.65 5.65zM20.6 20 7.55 6.95l1.4-1.4L22 18.6z"})})}let s=(0,a.forwardRef)((e,t)=>(0,n.Y)(r.I,{ref:t,...e,component:o}));s.displayName="GavelIcon";let l=s},609875:(e,t,i)=>{"use strict";i.d(t,{K:()=>o});var n=i(141078),a=i(715370);let r=(0,n.J1)`
  mutation CreateNotebookFromSourceMutation($input: CreateNotebookFromSourceInput!)
  @component(name: "Notebook.Notebooks") {
    createNotebookFromSource(input: $input)
      @rest(type: "CreateNotebookFromSourceResponse", path: "/workspace/import", method: "POST") {
      objectId
      errors @type(name: "ApiError") {
        code
        message
        helpUrl
        traceId
      }
    }
  }
`,o=e=>a.R.useMutation(r,e)},614516:(e,t,i)=>{"use strict";i.d(t,{t:()=>r});var n=i(141078),a=i(96437);let r=(0,n.J1)`
  ${a.nk}
  ${a.OU}
  mutation WidgetUpdateMutation($input: LakeviewconfigServicesWidgetUpdateWidgetRequestInput!)
  @component(name: "Lakeview.Dashboards") {
    lakeviewconfigServicesWidgetUpdateWidget(input: $input) {
      ...LakeviewconfigWidgetFragment
      apiError {
        ...LakeviewApiErrorFragment
      }
    }
  }
`},618297:e=>{var t="u">typeof Element,i="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,r){try{return function e(r,o){if(r===o)return!0;if(r&&o&&"object"==typeof r&&"object"==typeof o){var s,l,d,c;if(r.constructor!==o.constructor)return!1;if(Array.isArray(r)){if((s=r.length)!=o.length)return!1;for(l=s;0!=l--;)if(!e(r[l],o[l]))return!1;return!0}if(i&&r instanceof Map&&o instanceof Map){if(r.size!==o.size)return!1;for(c=r.entries();!(l=c.next()).done;)if(!o.has(l.value[0]))return!1;for(c=r.entries();!(l=c.next()).done;)if(!e(l.value[1],o.get(l.value[0])))return!1;return!0}if(n&&r instanceof Set&&o instanceof Set){if(r.size!==o.size)return!1;for(c=r.entries();!(l=c.next()).done;)if(!o.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(r)&&ArrayBuffer.isView(o)){if((s=r.length)!=o.length)return!1;for(l=s;0!=l--;)if(r[l]!==o[l])return!1;return!0}if(r.constructor===RegExp)return r.source===o.source&&r.flags===o.flags;if(r.valueOf!==Object.prototype.valueOf&&"function"==typeof r.valueOf&&"function"==typeof o.valueOf)return r.valueOf()===o.valueOf();if(r.toString!==Object.prototype.toString&&"function"==typeof r.toString&&"function"==typeof o.toString)return r.toString()===o.toString();if((s=(d=Object.keys(r)).length)!==Object.keys(o).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(o,d[l]))return!1;if(t&&r instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==d[l]&&"__v"!==d[l]&&"__o"!==d[l]||!r.$$typeof)&&!e(r[d[l]],o[d[l]]))return!1;return!0}return r!=r&&o!=o}(e,r)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},618646:(e,t,i)=>{"use strict";i.d(t,{i:()=>a});var n=i(141078);let a=(0,n.J1)`
  fragment PipelineUpdateSettingsFragment on DeltapipelinesPipelineSpec {
    name
    continuous
    dbrVersion
    edition
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
    catalog
    schema
    serverless
    photon
    development
    pipelineType
    budgetPolicyId
    tags {
      key
      value
    }
  }
`},636063:(e,t,i)=>{"use strict";i.d(t,{I:()=>s});var n=i(846643),a=i(844760);function r(e,t,i,n,a,r,o){try{var s=e[r](o),l=s.value}catch(e){i(e);return}s.done?t(l):Promise.resolve(l).then(n,a)}let o=`
  mutation DatasetUpdateMutation(
    $input: LakeviewconfigServicesDatasetUpdateDatasetRequestInput!
  ) {
    lakeviewconfigServicesDatasetUpdateDataset(input: $input) {
      dataset {
        name
        etag
      }
      apiError {
        code
        message
        traceId
      }
    }
  }
`;function s(e){var t;return(t=function*({name:e,displayName:t,query:i,etag:r,catalog:s,schema:l,customerRefId:d}){let c=JSON.stringify({operationName:"DatasetUpdateMutation",query:o,variables:{input:{dataset:{name:e,displayName:t,query:i,etag:r,catalog:s,schema:l,customerRefId:d}}}}),u=yield(0,a.S)("/graphql/DatasetUpdateMutation",{method:"POST",headers:{"Content-Type":"application/json","x-databricks-operation-identifier":yield(0,n.m)(c)},body:c});if(!u.ok)throw Error(`Failed to update dataset (HTTP ${u.status})`);let p=yield u.json();if(p.errors?.length)throw Error(p.errors[0].message);let g=p.data?.lakeviewconfigServicesDatasetUpdateDataset?.apiError;if(g?.message)throw Error(g.message);return{updatedEtag:p.data?.lakeviewconfigServicesDatasetUpdateDataset?.dataset?.etag??null}},function(){var e=this,i=arguments;return new Promise(function(n,a){var o=t.apply(e,i);function s(e){r(o,n,a,s,l,"next",e)}function l(e){r(o,n,a,s,l,"throw",e)}s(void 0)})}).apply(this,arguments)}},640456:(e,t,i)=>{"use strict";i.a(e,async(e,n)=>{try{i.d(t,{M:()=>j});var a=i(610435),r=i(692738),o=i(497895),s=i(382908),l=i(79128),d=i(335083),c=i(513820),u=i(201513),p=i(943844),g=i(658345),m=i(742557),f=i(503217),h=i(342411),v=i(329061),y=i(416400),I=i(262989),b=i(536796),S=i(87221),w=i(488655),k=i(858383),E=i(276166),A=i(749565),T=i(391375),x=i(430750),P=i(938320),C=i(960790),D=i(373037),_=i(115057),R=i(370463),L=i(636063),$=i(560997),M=i(617575),N=i(283302),Y=e([f]);function O(e,t,i,n,a,r,o){try{var s=e[r](o),l=s.value}catch(e){i(e);return}s.done?t(l):Promise.resolve(l).then(n,a)}f=(Y.then?(await Y)():Y)[0];let G=(0,h.YK)({backToDemo:{id:"dNvn2D",defaultMessage:"Back to demo"},minimizePanel:{id:"EriJAp",defaultMessage:"Minimize tutorial panel"},closePanel:{id:"XszFfj",defaultMessage:"Close tutorial panel"},previousStep:{id:"5y6Tna",defaultMessage:"Previous"},nextStep:{id:"TeVu6t",defaultMessage:"Next"},goToDemoPage:{id:"SRMFQR",defaultMessage:"Go to demo page"}});function F(e){return e?.sessionKind==="pipeline-demo"?e:null}function U(e){return Array.from(new Set([e.destinationRoute,...(e.routeLinks??[]).map(e=>e.destinationRoute)].filter(Boolean)))}function B(e,t){return U(t).some(t=>(0,C.nN)(e,t))}function z(e,t){let i=-1;for(let n=e.length-1;n>=0;n--){let a=e[n];if(a&&U(a).some(e=>(0,C.ln)(t,e))){i=n;break}}if(i>=0)return i;for(let i=e.length-1;i>=0;i--){let n=e[i];if(n&&B(t,n))return i}return -1}let W=({stage:e,onInlineAction:t,isInlineActionLoading:i})=>{let n,{theme:u}=(0,o.wn)(),p=(0,r.useRef)(0);return(0,a.FD)("div",{css:{display:"flex",flexDirection:"column",gap:u.spacing.sm},children:[(0,a.Y)(s.o.Title,{level:4,withoutMargins:!0,children:e.title}),e.summary?(0,a.Y)(s.o.Text,{color:"secondary",size:"sm",children:e.summary}):null,e.instructions&&e.instructions.length>0?(n=e.instructions.length>1?"ol":"ul",(0,a.Y)(n,{css:{margin:0,paddingLeft:u.spacing.lg,display:"flex",flexDirection:"column",gap:u.spacing.sm},children:e.instructions.map((e,n)=>{let r,o;return(0,a.FD)("li",{children:[(0,a.Y)(s.o.Text,{color:"secondary",size:"sm",children:e.text}),e.inlineAction&&t?(0,a.Y)("div",{css:{marginTop:u.spacing.xs},children:(r=e.inlineAction,o="dispatchAgentChatPrompt"===r.actionType,(0,a.Y)(l.$n,{componentId:"tutorials.e2eDashboardDemo.inline-action",size:"small",type:o?void 0:"primary",icon:o?(0,a.Y)(d.A,{color:"ai"}):void 0,loading:i,disabled:i,onClick:()=>{let e=Date.now();if(e-p.current<1500)return;p.current=e,t(r)},css:o?[{"&&&&":(0,v.o)(!1),border:"2px solid transparent !important",background:`linear-gradient(${u.colors.backgroundPrimary}, ${u.colors.backgroundPrimary}) padding-box, ${u.gradients.aiBorderGradient} border-box`}]:void 0,children:r.label}))}):null,e.codeBlock?(0,a.FD)("div",{css:{marginTop:u.spacing.xs,border:`1px solid ${u.colors.border}`,borderRadius:u.borders.borderRadiusMd,overflow:"hidden"},children:[(0,a.FD)("div",{css:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:`${u.spacing.xs}px ${u.spacing.sm}px`,backgroundColor:u.colors.backgroundSecondary,borderBottom:`1px solid ${u.colors.border}`},children:[(0,a.Y)(s.o.Text,{bold:!0,size:"sm",children:(e.codeBlockLanguage??"text").toUpperCase()}),(0,a.Y)(l.$n,{componentId:"e2e-dashboard-demo-pip.copy-code",size:"small",type:"tertiary",icon:(0,a.Y)(c.A,{}),onClick:()=>{navigator.clipboard.writeText(e.codeBlock??"")}})]}),(0,a.Y)("div",{css:{"& > div":{border:"none",borderRadius:0}},children:(0,a.Y)(f.ReadOnlyCodeBlock,{theme:u.isDarkMode?"databricks-unified-dark":"databricks-unified-light",language:e.codeBlockLanguage??"text",children:e.codeBlock})})]}):null]},n)})})):null]})},V=({takeMeThereBanner:e,currentStageIndex:t,isDoItForMeLoading:i,canDoItForMe:n,isOnCoursePage:r,onSelectStage:c,onDoItForMe:m,rootRef:f})=>{let y,b,S,{theme:k}=(0,o.wn)(),{formatMessage:A}=(0,h.tz)(),P=(0,w.Zp)(),C=(0,D.u)(e=>e.lessonSession),R=F(C),L=(0,D.u)(e=>e.minimize),$=(0,D.u)(e=>e.hide),{handleMouseDown:M,dragging:N}=(0,_.t)(),{elementRef:Y}=(0,I.h)("div","tutorial-pip-e2e-dashboard-demo-expanded");if(!R)return null;let{steps:O}=R;if(0===O.length)throw Error("Expected pipeline demo stages");let U=O[t]??O[0],B=t>=O.length-1,z=(0,E.P)([Y,f]),V=A({id:"s1KJLt",defaultMessage:"Step {current} of {total}"},{current:t+1,total:O.length});return(0,a.FD)("div",{ref:z,css:{display:"flex",flexDirection:"column",height:"100%",overflow:"hidden"},children:[(0,a.FD)("div",{onMouseDown:M,css:{display:"flex",flexDirection:"column",padding:`${k.spacing.sm}px ${k.spacing.md}px`,borderBottom:`1px solid ${k.colors.border}`,backgroundColor:k.colors.backgroundSecondary,cursor:N?"grabbing":"grab",userSelect:"none",flexShrink:0,gap:k.spacing.sm},children:[(0,a.FD)("div",{css:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r?null:(0,a.Y)(l.$n,{componentId:"tutorial-pip.e2e-dashboard-demo.back-to-demo",icon:(0,a.Y)(u.A,{css:{width:k.general.iconFontSize,height:k.general.iconFontSize,color:k.colors.textSecondary}}),type:"tertiary",size:"small",onMouseDown:e=>e.stopPropagation(),onClick:e=>{e.stopPropagation(),R&&(P(R.backToCourseRoute),L())},css:{paddingInline:0,color:k.colors.textSecondary},children:(0,a.Y)(s.o.Text,{size:"md",color:"secondary",children:A(G.backToDemo)})}),(0,a.FD)("div",{css:{display:"flex",alignItems:"center",gap:k.spacing.xs},children:[(0,a.Y)(l.$n,{componentId:"tutorial-pip.e2e-dashboard-demo.minimize",icon:(0,a.Y)(p.A,{css:{width:k.general.iconFontSize,height:k.general.iconFontSize,color:k.colors.textSecondary}}),size:"small",type:"tertiary","aria-label":A(G.minimizePanel),onMouseDown:e=>e.stopPropagation(),onClick:e=>{e.stopPropagation(),L()}}),(0,a.Y)(l.$n,{componentId:"tutorial-pip.e2e-dashboard-demo.close",icon:(0,a.Y)(g.A,{css:{width:k.general.iconFontSize,height:k.general.iconFontSize,color:k.colors.textSecondary}}),size:"small",type:"tertiary","aria-label":A(G.closePanel),onClick:e=>{e.stopPropagation(),$()}})]})]}),(0,a.FD)("div",{css:{display:"flex",flexDirection:"column",gap:k.spacing.xs},children:[(0,a.Y)(s.o.Text,{size:"sm",color:"secondary",children:V}),(0,a.Y)("div",{role:"progressbar","aria-valuenow":t+1,"aria-valuemin":1,"aria-valuemax":O.length,"aria-label":V,css:{backgroundColor:k.colors.grey200,height:k.spacing.xs,width:"100%",borderRadius:k.borders.borderRadiusSm},children:(0,a.Y)("div",{css:{backgroundColor:k.colors.actionPrimaryBackgroundDefault,height:"100%",width:`${(t+1)/O.length*100}%`,borderRadius:k.borders.borderRadiusSm,transition:"width 300ms ease-in-out"}})})]})]}),e?(0,a.Y)(x.ZT,{componentId:"tutorial-pip.e2e-dashboard-demo.take-me-there",...e}):null,(0,a.Y)("div",{css:{flex:1,overflowY:"auto",padding:`${k.spacing.md}px ${k.spacing.md}px ${k.spacing.lg}px`,display:"flex",flexDirection:"column",gap:k.spacing.md},children:B&&(R.completionTitle||R.completionSubtitle)?(0,a.Y)(T.cf,{title:R.completionTitle,subtitle:R.completionSubtitle}):U?(0,a.Y)(W,{stage:U,onInlineAction:n?m:void 0,isInlineActionLoading:i}):null}),(0,a.FD)("div",{css:{display:"flex",justifyContent:"space-between",gap:k.spacing.sm,padding:`${k.spacing.sm}px ${k.spacing.md}px`,borderTop:`1px solid ${k.colors.border}`,flexShrink:0},children:[!(t<=0)&&(0,a.Y)(l.$n,{componentId:"tutorial-pip.e2e-dashboard-demo.previous-stage",type:"tertiary",onClick:()=>c(t-1),children:A(G.previousStep)}),(0,a.FD)("div",{css:{display:"flex",gap:k.spacing.sm,marginLeft:"auto"},children:[n&&U.actions?.[0]&&!U.instructions?.some(e=>e.inlineAction?.id===U.actions?.[0]?.id)?(y=U.actions[0],S=(b="dispatchAgentChatPrompt"===y.actionType)?(0,a.Y)(d.A,{color:"ai"}):void 0,(0,a.Y)(l.$n,{componentId:"tutorial-pip.e2e-dashboard-demo.step-action",icon:S,type:b?void 0:"primary",loading:i,disabled:i,onClick:m,css:b?[{"&&&&":(0,v.o)(!1),border:"2px solid transparent !important",background:`linear-gradient(${k.colors.backgroundPrimary}, ${k.colors.backgroundPrimary}) padding-box, ${k.gradients.aiBorderGradient} border-box`}]:void 0,children:y.label})):null,B?(0,a.Y)(T.Nf,{stepId:U.stepId}):(0,a.Y)(l.$n,{componentId:"tutorial-pip.e2e-dashboard-demo.next-stage",type:n?"tertiary":"primary",disabled:i&&!!U.actions?.[0],onClick:()=>c(t+1),children:A(G.nextStep)})]})]})]})},H=({stepId:e,...t})=>{let{ref:i}=(0,N.k)(e,"pipExpanded");return(0,a.Y)(V,{...t,rootRef:i})},K=({stepId:e,...t})=>{let{ref:i}=(0,N.k)(e,"pipMinimized");return(0,a.Y)(x.M6,{...t,rootRef:i})},j=()=>{let e=(0,w.Zp)(),{formatMessage:t}=(0,h.tz)(),i=(0,k.zy)(e=>e.pathname),{theme:n}=(0,o.wn)(),s=(0,D.u)(e=>e.hide),l=(0,D.u)(e=>e.minimize),d=(0,D.u)(e=>e.restore),c=(0,D.u)(e=>e.setPipelineDemoStepIndex),u=(0,D.u)(e=>e.applyPipelineDemoWidgetBuildResult),p=(0,D.u)(e=>e.markPipelineDemoStepBuilt),g=(0,D.u)(e=>e.lessonSession),f=F(g),[v,I]=(0,r.useState)(!1);(0,r.useEffect)(()=>{if(!f)return;if((0,C.nN)(i,f.backToCourseRoute))return void s();let e=f.steps[f.currentStepIndex];if(e&&B(i,e))return void d();let t=z(f.steps,i);t>=0&&(d(),t!==f.currentStepIndex&&c(t))},[s,d,i,f,c]);let E=(0,r.useCallback)(t=>{if(!f)return;let n=Math.min(Math.max(t,0),f.steps.length-1),a=f.steps[n];if(!a?.destinationRoute)return;c(n);let r=a.destinationRoute.includes("/dashboardsv3/")&&(i===`${a.destinationRoute}/pages`||i.startsWith(`${a.destinationRoute}/pages/`));(0,C.ln)(i,a.destinationRoute)||r||(e(a.destinationRoute),window.dispatchEvent(new PopStateEvent("popstate")))},[e,i,f,c]),_=(0,r.useCallback)(e=>{var t;return(t=function*(){let t=e.actions?.find(e=>"dispatchAgentChatPrompt"===e.actionType);if(!t&&v)return;if(t&&"dispatchAgentChatPrompt"===t.actionType){if((0,y.uT)({type:y.bS.PAGE_TRIGGERED_CHAT_EVENT,payload:{message:t.prompt,messageTags:["e2e-dashboard-demo"],hideUserMessage:!1}}),f?.observabilityInstallId){let i=A.useGlobalChatStore.getState().threadId??null;(0,M.vW)(M.ZR.E2E_DASHBOARD_DEMO_AGENT_PROMPT_DISPATCHED,{success:!0,installId:f.observabilityInstallId,stepId:e.stepId,promptId:t.id,threadId:i})}return}let i=e.actions?.find(e=>"buildLakeviewDatasetSql"===e.actionType);if(i&&"buildLakeviewDatasetSql"===i.actionType){if(f?.completedBuildStepIds?.includes(e.stepId))return;I(!0);try{yield(0,L.I)({name:i.datasetName,displayName:i.datasetDisplayName,query:i.answerSql,etag:i.etag,catalog:i.catalog,schema:i.schema,customerRefId:i.customerRefId}),p(e.stepId),window.location.assign(`${window.location.pathname}${window.location.search}`)}finally{I(!1)}return}let n=e.actions?.find(e=>"buildLakeviewWidget"===e.actionType);if(n&&"buildLakeviewWidget"===n.actionType){let t=f?.completedBuildStepIds?.includes(e.stepId)??!1,i=f?.dashboardPageName;if(t||!i)return;I(!0);try{let t=n.prerequisiteDatasetUpdate;t&&!f?.completedBuildStepIds?.includes(t.gatingCompletedStepId)&&t&&(yield(0,L.I)({name:t.datasetName,displayName:t.datasetDisplayName,query:t.answerSql,etag:t.etag,catalog:t.catalog,schema:t.schema,customerRefId:t.customerRefId}).catch(e=>{let i=e instanceof Error?e.message:String(e);throw Error(`Prerequisite dataset update failed for ${t.datasetDisplayName}: ${i}`)}),p(t.gatingCompletedStepId));let{updatedLayout:a}=yield(0,$.Z)({pageName:i,spec:n.widgetSpec,existingPositions:f?.widgetLayout??[]});u(e.stepId,a),window.location.assign(`${window.location.pathname}${window.location.search}`)}finally{I(!1)}}},function(){var e=this,i=arguments;return new Promise(function(n,a){var r=t.apply(e,i);function o(e){O(r,n,a,o,s,"next",e)}function s(e){O(r,n,a,o,s,"throw",e)}o(void 0)})})()},[u,v,p,f]);if(!f)return null;let N=f.steps[f.currentStepIndex],Y=null!==N&&B(i,N)?f.currentStepIndex:z(f.steps,i),W=Y>=0?Y:f.currentStepIndex,j=f.steps[W]??f.steps[0];if(!j)return null;let q=W>=f.steps.length-1,J=j.actions?.some(e=>"buildLakeviewWidget"===e.actionType)??!1,X=j.actions?.some(e=>"buildLakeviewDatasetSql"===e.actionType)??!1,Z=j.actions?.some(e=>"dispatchAgentChatPrompt"===e.actionType)??!1,Q=(J||X)&&(f.completedBuildStepIds?.includes(j.stepId)??!1),ee=J&&!Q&&!!f.dashboardPageName||X&&!Q||Z,et=(0,C.nN)(i,f.backToCourseRoute),ei=U(j).some(e=>(0,C.nN)(i,e)),en=W===f.steps.length-1,ea=ei||en?void 0:{destinationLabel:f.destinationLabel,onClick:()=>{j?.destinationRoute&&e(j.destinationRoute)}},er=(0,R.TE)(j.stepId)?j.stepId:null;return(0,a.FD)(b.S,{entitiesToAppend:[{type:S.Lm.TUTORIAL_STEP,id:j.stepId}],children:[(0,a.Y)(T.pd,{lessonId:f.lessonId}),(0,a.Y)(P.g,{resizable:!0,minimizedContent:er?(0,a.Y)(K,{stepId:er,lessonId:f.lessonId,currentStepId:j.stepId,lessonTitle:f.lessonTitle,currentStepTitle:j.title,takeMeThereBanner:ea,headerIcon:q?(0,a.Y)(m.A,{"data-testid":"pipeline-demo-pip-minimized-complete-icon",css:{color:n.colors.green500}}):void 0,onBackToCourse:et?void 0:()=>{e(f.backToCourseRoute),l()},backToCourseLabel:t(G.backToDemo),onExpand:d,onClose:s},`${f.lessonId}:${j.stepId}:minimized`):(0,a.Y)(x.M6,{lessonId:f.lessonId,currentStepId:j.stepId,lessonTitle:f.lessonTitle,currentStepTitle:j.title,takeMeThereBanner:ea,headerIcon:q?(0,a.Y)(m.A,{"data-testid":"pipeline-demo-pip-minimized-complete-icon",css:{color:n.colors.green500}}):void 0,onBackToCourse:et?void 0:()=>{e(f.backToCourseRoute),l()},backToCourseLabel:t(G.backToDemo),onExpand:d,onClose:s},`${f.lessonId}:${j.stepId}:minimized`),expandedContent:er?(0,a.Y)(H,{stepId:er,takeMeThereBanner:ea,currentStageIndex:W,isDoItForMeLoading:v,canDoItForMe:ee,isOnCoursePage:et,onSelectStage:E,onDoItForMe:()=>_(j)},`${f.lessonId}:${j.stepId}:expanded`):(0,a.Y)(V,{takeMeThereBanner:ea,currentStageIndex:W,isDoItForMeLoading:v,canDoItForMe:ee,isOnCoursePage:et,onSelectStage:E,onDoItForMe:()=>_(j),rootRef:null},`${f.lessonId}:${j.stepId}:expanded`)})]})};n()}catch(e){n(e)}})},655841:(e,t,i)=>{"use strict";i.d(t,{GX:()=>u,HA:()=>r,Ij:()=>c,U8:()=>a,_:()=>o,e:()=>l,fq:()=>p,n$:()=>d,r4:()=>s});var n=i(141078);let a=(0,n.J1)`
  fragment IdentityIdapi2PrincipalFragment on IdentityIdapi2Principal {
    displayName
    externalId
    status
    legacyUserId
    accountId
    sourceIdp
    accountBoundaryCheckState
    exclusivityType
      @includeSafex(name: "databricks.fe.accountsui.queryGroupExclusivityTypeForSeamlessAccounts", defaultValue: false)
  }
`,r=(0,n.J1)`
  query BatchIdentityApiGetPrincipalsQuery($input: AclmanagerIdentityapiBatchGetPrincipalsRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiBatchGetPrincipals(input: $input) {
      apiError {
        message
      }
      responses {
        principal {
          ...IdentityIdapi2PrincipalFragment
        }
        isDirectlyAssigned
        isAccountAdmin
        memberCount
        lastActiveTime
      }
    }
  }
  ${a}
`,o=(0,n.J1)`
  query seamlessListUsers($first: Int!, $after: String, $filter: String, $onlyAccountAdmins: Boolean)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiListUsers(
      input: { filter: $filter, pageSize: $first, pageToken: $after, onlyAccountAdmins: $onlyAccountAdmins }
    ) {
      apiError {
        message
      }
      tooManyResults
      nextPageToken
      entities {
        userName
        principal {
          ...IdentityIdapi2PrincipalFragment
        }
      }
    }
  }
  ${a}
`,s=(0,n.J1)`
  query seamlessListServicePrincipals($first: Int!, $after: String, $filter: String, $onlyAccountAdmins: Boolean)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiListServicePrincipals(
      input: { filter: $filter, pageSize: $first, pageToken: $after, onlyAccountAdmins: $onlyAccountAdmins }
    ) {
      apiError {
        message
      }
      tooManyResults
      nextPageToken
      entities {
        applicationId
        principal {
          ...IdentityIdapi2PrincipalFragment
        }
      }
    }
  }
  ${a}
`,l=(0,n.J1)`
  query seamlessListGroups(
    $first: Int!
    $after: String
    $filter: String
    $onlyAccountAdmins: Boolean
    $onlyExclusiveGroups: Boolean
  ) @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiListGroups(
      input: {
        filter: $filter
        pageSize: $first
        pageToken: $after
        onlyAccountAdmins: $onlyAccountAdmins
        onlyExclusiveGroups: $onlyExclusiveGroups
      }
    ) {
      apiError {
        message
      }
      tooManyResults
      nextPageToken
      entities {
        groupName
        principal {
          ...IdentityIdapi2PrincipalFragment
        }
      }
    }
  }
  ${a}
`,d=(0,n.J1)`
  query seamlessListDirectGroupMembers(
    $first: Int!
    $after: String
    $groupId: LongString
    $externalId: String
    $filter: String
  ) @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiListDirectGroupMembers(
      input: { pageSize: $first, pageToken: $after, groupId: $groupId, externalId: $externalId, filter: $filter }
    ) {
      apiError {
        message
      }
      nextPageToken
      entities {
        group {
          groupName
          principal {
            ...IdentityIdapi2PrincipalFragment
          }
        }
        user {
          userName
          principal {
            ...IdentityIdapi2PrincipalFragment
          }
        }
        servicePrincipal {
          applicationId
          principal {
            ...IdentityIdapi2PrincipalFragment
          }
        }
      }
    }
  }
  ${a}
`,c=(0,n.J1)`
  mutation GetOrCreateIdpUser($input: AclmanagerIdentityapiGetOrCreateUserRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateUser(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,u=(0,n.J1)`
  mutation GetOrCreateIdpGroup($input: AclmanagerIdentityapiGetOrCreateGroupRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateGroup(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,p=(0,n.J1)`
  mutation GetOrCreateIdpServicePrincipal($input: AclmanagerIdentityapiGetOrCreateServicePrincipalRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateServicePrincipal(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`},675823:(e,t,i)=>{"use strict";i.d(t,{z:()=>r});var n=i(141078),a=i(655841);let r=e=>(0,n.n_)(a.GX,e)},683003:(e,t,i)=>{"use strict";i.d(t,{B:()=>s});var n=i(610435),a=i(545251),r=i(497895),o=i(174541);let s=({children:e,...t})=>{let{theme:i}=(0,r.wn)(),{isInsideDialogCombobox:s}=(0,a.w)();if(!s)throw Error("`DialogComboboxFooter` must be used within `DialogCombobox`");return(0,n.Y)("div",{...t,css:(0,o.UA)(i),children:e})}},691069:(e,t,i)=>{"use strict";i.d(t,{C:()=>d});var n=i(610435);i(692738);var a=i(497895),r=i(465082),o=i(26971),s=i(777517),l=i(342411);let d=({kind:e,disabled:t,style:i})=>{let{theme:d}=(0,a.wn)(),c=(0,l.tz)(),u={alignItems:"center",background:t?void 0:d.colors.backgroundSecondary,borderRadius:30,color:t?d.colors.actionDisabledText:d.colors.textSecondary,display:"flex",fontSize:20,height:30,justifyContent:"center",width:30};switch(e){case"user":return(0,n.Y)(r.A,{title:c.formatMessage({id:"9vv8Gs",defaultMessage:"User"}),css:i||u});case"group":return(0,n.Y)(o.A,{title:c.formatMessage({id:"Qzw3C/",defaultMessage:"Group"}),css:i||u});case"serviceprincipal":return(0,n.Y)(s.A,{title:c.formatMessage({id:"QrVB43",defaultMessage:"Service Principal"}),css:i||u});default:return null}}},716962:(e,t,i)=>{"use strict";i.d(t,{gd:()=>r,Pj:()=>o,Zz:()=>s,xu:()=>l,mF:()=>d,fZ:()=>c,QX:()=>p,y1:()=>g,_W:()=>u,Nf:()=>m.N,gB:()=>f,EE:()=>v,fT:()=>y,Yd:()=>I.Yd,Ov:()=>I.Ov,tF:()=>I.tF});var n=i(141078),a=i(96437);let r=(0,n.J1)`
  ${a.kW}
  mutation BookmarkCreateMutation($input: lakeviewConfigBookmark_CreateBookmarkRequestInput!)
  @component(name: "Lakeview.Dashboards") {
    lakeviewConfigBookmark_create(input: $input) {
      ...LakeviewconfigBookmarkResponseFragment
    }
  }
`,o=(0,n.J1)`
  mutation BookmarkDeleteMutation($input: lakeviewConfigBookmark_DeleteBookmarkRequestInput!)
  @component(name: "Lakeview.Dashboards") {
    lakeviewConfigBookmark_delete(input: $input) {
      __typename
    }
  }
`,s=(0,n.J1)`
  ${a.kW}
  mutation BookmarkUpdateMutation($input: lakeviewConfigBookmark_UpdateBookmarkRequestInput!)
  @component(name: "Lakeview.Dashboards") {
    lakeviewConfigBookmark_update(input: $input) {
      ...LakeviewconfigBookmarkResponseFragment
    }
  }
`,l=(0,n.J1)`
  ${a.nk}
  ${a.lD}
  mutation DashboardUpdateMutation($input: LakeviewconfigServicesDashboardUpdateDashboardRequestInput!)
  @component(name: "Lakeview.Dashboards") {
    lakeviewconfigServicesDashboardUpdateDashboard(input: $input) {
      ...LakeviewDraftDashboardResponseFragment
      apiError {
        ...LakeviewApiErrorFragment
      }
    }
  }
`,d=(0,n.J1)`
  ${a.lD}
  ${a.nk}
  mutation DatasetDeleteDatasetAndUpdateOrderMutation(
    $input: LakeviewconfigServicesDatasetDeleteDatasetAndUpdateOrderRequestInput!
  ) @component(name: "Lakeview.Dashboards") {
    lakeviewconfigServicesDatasetDeleteDatasetAndUpdateOrder(input: $input) {
      apiError {
        ...LakeviewApiErrorFragment
      }
      dashboard {
        ...LakeviewDraftDashboardResponseFragment
      }
      __typename
    }
  }
`,c=(0,n.J1)`
  ${a.nk}
  ${a.TS}
  ${a.sN}
  mutation DatasetUpdateMutation($input: LakeviewconfigServicesDatasetUpdateDatasetRequestInput!)
  @component(name: "Lakeview.Dashboards") {
    lakeviewconfigServicesDatasetUpdateDataset(input: $input) {
      ...LakeviewconfigDatasetResponseFragment
      apiError {
        ...LakeviewApiErrorFragment
      }
    }
  }
`,u=(0,n.J1)`
  ${a.nk}
  ${a.F0}
  mutation PageUpdateMutation($input: LakeviewconfigServicesPageUpdatePageRequestInput!)
  @component(name: "Lakeview.Dashboards") {
    lakeviewconfigServicesPageUpdatePage(input: $input) {
      ...LakeviewconfigPageResponseFragment
      apiError {
        ...LakeviewApiErrorFragment
      }
    }
  }
`,p=(0,n.J1)`
  ${a.nk}
  ${a.F0}
  ${a.lD}
  ${a.sN}
  ${a.OU}
  mutation PageCreateAndOrderMutation(
    $page: LakeviewconfigModelsPageInput!
    $parent: String!
    $parentDashboardEtag: String!
    $datasets: [LakeviewconfigServicesCommonDatasetToCreateInput!]
    $widgets: [LakeviewconfigServicesCommonWidgetToCreateInput!]
  ) @component(name: "Lakeview.Dashboards") {
    lakeviewconfigServicesPageCreateAndOrderPage(
      input: {
        page: $page
        parent: $parent
        parentDashboardEtag: $parentDashboardEtag
        datasets: $datasets
        widgets: $widgets
      }
    ) {
      apiError {
        ...LakeviewApiErrorFragment
      }
      dashboard {
        ...LakeviewDraftDashboardResponseFragment
      }
      datasets {
        ...LakeviewconfigDatasetResponseFragment
      }
      page {
        ...LakeviewconfigPageResponseFragment
      }
      widgets {
        ...LakeviewconfigWidgetFragment
      }
    }
  }
`,g=(0,n.J1)`
  ${a.nk}
  ${a.F0}
  ${a.lD}
  ${a.sN}
  ${a.OU}
  mutation PageCreateAndOrderWithWidgetsMutation(
    $page: LakeviewconfigModelsPageInput!
    $parent: String!
    $parentDashboardEtag: String!
    $datasets: [LakeviewconfigServicesCommonDatasetToCreateInput!]
    $widgets: [LakeviewconfigServicesCommonWidgetToCreateInput!]
    $pageOrder: [LakeviewconfigModelsOrderInput!]
  ) @component(name: "Lakeview.Dashboards") {
    lakeviewconfigServicesPageCreateAndOrderPage(
      input: {
        page: $page
        parent: $parent
        parentDashboardEtag: $parentDashboardEtag
        datasets: $datasets
        widgets: $widgets
        pageOrder: $pageOrder
      }
    ) {
      apiError {
        ...LakeviewApiErrorFragment
      }
      dashboard {
        ...LakeviewDraftDashboardResponseFragment
      }
      datasets {
        ...LakeviewconfigDatasetResponseFragment
      }
      page {
        ...LakeviewconfigPageResponseFragment
      }
      widgets {
        ...LakeviewconfigWidgetFragment
      }
    }
  }
`;var m=i(754559);let f=(0,n.J1)`
  ${a.nk}
  mutation DraftPublishedDashboardDeleteAllRevisionsMutation(
    $input: LakeviewconfigServicesPublisheddashboardDeleteAllPublishedDashboardRevisionsRequestInput!
  ) @component(name: "Lakeview.Dashboards") {
    lakeviewconfigServicesPublisheddashboardDeleteAllPublishedDashboardRevisions(input: $input) {
      apiError {
        ...LakeviewApiErrorFragment
      }
    }
  }
`;var h=i(183136);let v=(0,n.J1)`
  ${h.P}
  mutation SemanticModelCreateMutation($input: lakeviewConfigSemanticModel_CreateSemanticModelRequestInput!)
  @component(name: "Lakeview.Dashboards") {
    lakeviewConfigSemanticModel_create(input: $input) {
      ...LakeviewSemanticModel
    }
  }
`,y=(0,n.J1)`
  ${h.P}
  mutation SemanticModelUpdateMutation($input: lakeviewConfigSemanticModel_UpdateSemanticModelRequestInput!)
  @component(name: "Lakeview.Dashboards") {
    lakeviewConfigSemanticModel_update(input: $input) {
      ...LakeviewSemanticModel
    }
  }
`;var I=i(170638)},740054:(e,t,i)=>{"use strict";i.d(t,{TW:()=>_,lK:()=>Y,lX:()=>L,sF:()=>M,wb:()=>$,yL:()=>N,zR:()=>O});var n=i(610435),a=i(615693),r=i(607074),o=i(505544),s=i(397136),l=i(529068),d=i(452233),c=i(319241),u=i(1459),p=i(485065),g=i(563521),m=i(323935),f=i(335083),h=i(873393),v=i(1647),y=i(24027),I=i(126001),b=i(946590),S=i(187441),w=i(479448),k=i(609128),E=i(957729),A=i(884598),T=i(722651),x=i(26971),P=i(792575),C=i(776041);let D={table:{icon:a.A,assetType:C.Sy.TABLE,supportsReferencePreview:!0,hrefFragment:"#table"},column:{icon:r.A},volume:{icon:o.A},notebook:{icon:s.A,assetType:C.Sy.NOTEBOOK,supportsReferencePreview:!0,isWorkspaceAsset:!0,hrefFragment:"#notebook-",hrefIdPattern:/#notebook-(\d+)/},cell:{icon:l.A},query:{icon:d.A,assetType:C.Sy.QUERY,supportsReferencePreview:!0,isWorkspaceAsset:!0,hrefFragment:"#query-",hrefIdPattern:/#query-([\w-]+)/},queryProfile:{icon:d.A},topquery:{icon:d.A},file:{icon:c.A,assetType:C.Sy.FILE,supportsReferencePreview:!0,isWorkspaceAsset:!0,hrefFragment:"#file-",hrefIdPattern:/#file-(\w+)/},folder:{icon:u.A,assetType:C.Sy.DIRECTORY,supportsReferencePreview:!0,isWorkspaceAsset:!0,hrefFragment:"#folder-",hrefIdPattern:/#folder-(\d+)/},directory:{icon:u.A,assetType:C.Sy.DIRECTORY},pipeline:{icon:p.A,assetType:C.Sy.PIPELINE,isWorkspaceAsset:!0,hrefFragment:"#pipeline-",hrefIdPattern:/#pipeline-([\w-]+)/},dashboard:{icon:g.A,assetType:C.Sy.DASHBOARD,supportsReferencePreview:!0,isWorkspaceAsset:!0,hrefFragment:"#dashboard-",hrefIdPattern:/#dashboard-([\w-]+)/},job:{icon:m.A,assetType:C.Sy.JOB,supportsReferencePreview:!0,isWorkspaceAsset:!0,hrefFragment:"#job-",hrefIdPattern:/#job-(\d+)/},agentBrick:{icon:f.A},servingEndpoint:{icon:h.A},skill:{icon:v.A,assetType:C.Sy.SKILL,supportsReferencePreview:!0,hrefFragment:"#user-skill-",hrefIdPattern:/#user-skill-([\w-]+)/},app:{icon:y.A,assetType:C.Sy.APP,hrefFragment:"#app-",hrefIdPattern:/#app-([\w-]+)/},designerFile:{icon:I.A,assetType:C.Sy.DESIGNER_FILE,hrefFragment:"#designerFile-",hrefIdPattern:/#designerFile-([\w-]+)/},dataroom:{icon:b.A},genie:{icon:b.A,assetType:C.Sy.GENIE,hrefFragment:"#genie-",hrefIdPattern:/#genie-([\w-]+)/},scheduledGenieCode:{icon:S.A,assetType:C.Sy.SCHEDULED_GENIE_CODE,hrefFragment:"panel=automations&automationId=",hrefIdPattern:/automationId=([\w-]+)/},mlflowEvaluationRun:{icon:w.A},mlflowDataset:{icon:o.A},mlflowJudge:{icon:k.A},mlflowLabelingSchema:{icon:E.A},doc:{icon:A.A},cdpAttribute:{icon:T.A},cdpAudience:{icon:x.A},widget:{icon:P.A}},_=Object.entries(D).filter(([e,t])=>t.isWorkspaceAsset).map(([e])=>e),R=a.A;function L(e){return D[e??""]?.icon??R}function $(e,t,i=!1){let a=L(e);return i?(0,n.Y)(a,{css:t}):(0,n.Y)(a,{style:t})}function M(e){return D[e]?.assetType}function N(e){return D[e]?.supportsReferencePreview===!0}function Y(e){return`/editor/folders/workspace?mode=chat&panel=automations&automationId=${e}`}function O(e){for(let t of Object.values(D))if(t.hrefFragment&&t.assetType&&e.includes(t.hrefFragment))if(!t.hrefIdPattern)return{assetType:t.assetType,assetId:null};else{let i=e.match(t.hrefIdPattern);if(i?.[1])return{assetType:t.assetType,assetId:i[1]}}return null}},749314:(e,t,i)=>{"use strict";i.d(t,{r:()=>w});var n=i(610435),a=i(692738),r=i(497895),o=i(379045),s=i(79570),l=i(664093),d=i(382908),c=i(161330),u=i(342411),p=i(437885),g=i(483588);let m={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},f={[g.GbL.SOURCE_IDP_ATTRIBUTE_AAD]:"Microsoft Entra ID",[g.GbL.SOURCE_IDP_ATTRIBUTE_OKTA]:"Okta"},h=({color:e,disabled:t,disabledReason:i,name:a,sourceIdpName:o})=>{let{theme:s}=(0,r.wn)(),l=(0,u.tz)();return(0,n.FD)("div",{css:{display:"flex",alignItems:"center",overflow:"hidden",gap:s.spacing.xs},children:[(0,n.Y)(d.o.Text,{css:{...m,flexShrink:1,maxWidth:"100%",display:"inline-block",color:e},children:a||""}),t&&i&&(0,n.Y)(c.I,{content:i??"disabled",componentId:"displayName.disabled-reason.tooltip"}),o&&(0,n.Y)(d.o.Text,{color:"secondary",css:{color:e,fontStyle:"italic"},children:l.formatMessage({id:"vSe1Wh",defaultMessage:"In {sourceIdpName}"},{sourceIdpName:o})})]})},v=({disabled:e=!1,disabledReason:t,subject:i})=>{let{theme:a}=(0,r.wn)(),o=e?`${a.colors.actionDisabledText} !important`:void 0,s=i.sourceIdp&&i.sourceIdp!==g.GbL.SOURCE_IDP_ATTRIBUTE_UNSPECIFIED?f[i.sourceIdp]:void 0;switch(i.kind){case"user":if(i.fullName&&i.fullName!==i.displayName)return(0,n.FD)("div",{css:{overflow:"hidden"},children:[(0,n.Y)(h,{color:o,disabled:e,disabledReason:t,name:i.fullName,sourceIdpName:s})," ",(0,n.Y)(d.o.Text,{color:"secondary",className:p.Tp,css:{...m,maxWidth:"100%",display:"inline-block",color:o},children:i.displayName})]});return(0,n.Y)(h,{color:o,disabled:e,disabledReason:t,name:i.displayName,sourceIdpName:s});case"group":return(0,n.Y)(h,{color:o,disabled:e,disabledReason:t,name:i.displayName,sourceIdpName:s});case"serviceprincipal":if(!i.name)return(0,n.Y)(h,{color:o,disabled:e,disabledReason:t,name:i.applicationId,sourceIdpName:s});return(0,n.FD)("div",{css:{overflow:"hidden"},children:[(0,n.Y)(h,{color:o,disabled:e,disabledReason:t,name:i.name,sourceIdpName:s})," ",(0,n.Y)(d.o.Text,{color:"secondary",className:p.Tp,css:{...m,maxWidth:"100%",display:"inline-block",color:o},children:i.applicationId})]})}};var y=i(691069),I=i(62947),b=i(67105);function S(e,t,i,n,a,r,o){try{var s=e[r](o),l=s.value}catch(e){i(e);return}s.done?t(l):Promise.resolve(l).then(n,a)}let w=({subject:e,disabled:t,disabledReason:i})=>{let{theme:d}=(0,r.wn)(),{provisionSource:c}=(0,a.useContext)(I.M),[u,{loading:g,error:m}]=(0,b.r)(c),f={alignItems:"center",display:"flex",fontSize:20,height:30,justifyContent:"center",width:30},h=(0,a.useCallback)(i=>{var n;return(n=function*(){if(t||"idp"!==e.source)return;i.stopPropagation();let n=e=>{e.preventDefault(),e.stopPropagation()};document.addEventListener("keydown",n,!0),document.addEventListener("mousedown",n,!0);try{let t=yield u(e);if(t?.apiError!==null)return;e.id=t.name?.split("/").pop()??"",e.source="account";let n=i.target.closest('[role="option"]');n?.click()}catch(e){}finally{document.removeEventListener("keydown",n,!0),document.removeEventListener("mousedown",n,!0)}},function(){var e=this,t=arguments;return new Promise(function(i,a){var r=n.apply(e,t);function o(e){S(r,i,a,o,s,"next",e)}function s(e){S(r,i,a,o,s,"throw",e)}o(void 0)})})()},[t,e,u]);return(0,n.FD)("div",{css:{display:"flex",alignItems:"center",gap:d.spacing.sm,marginRight:d.spacing.xs},onClick:h,children:[(0,n.FD)("div",{className:p.Tp,css:{display:"flex",alignItems:"center",marginLeft:d.spacing.xs,marginRight:d.spacing.xs},children:[g&&(0,n.Y)(o.A,{spin:!0,css:f,"data-testid":"loading"}),m&&(0,n.Y)(s.m,{componentId:"codegen_web-shared_src_subject-select_subjectlabel.tsx_1",content:m.message,children:(0,n.Y)(l.A,{color:"warning",css:f,"data-testid":"error"})}),!g&&!m&&(0,n.Y)(y.C,{kind:e.kind,disabled:t})]}),(0,n.Y)(v,{disabled:t,disabledReason:i,subject:e})]})}},750848:(e,t,i)=>{"use strict";i.d(t,{BZ:()=>a});var n=i(754469);function a(){let e=(0,n.P)((0,n.D)());return`temp/widgets/${e}`}},754469:(e,t,i)=>{"use strict";function n(){return window.crypto.randomUUID().replace(/-/g,"")}function a(e){let t=e.replace(/-/g,"");if(!/^[0-9a-fA-F]{32}$/.test(t))throw Error("Invalid UUID format");let i=BigInt("0x"+t.slice(0,16))^BigInt("0x"+t.slice(16,32));return((Number(i>>BigInt(32)&BigInt(0xffffffff))^Number(i&BigInt(0xffffffff)))>>>0).toString(16).padStart(8,"0")}i.d(t,{D:()=>n,P:()=>a})},754559:(e,t,i)=>{"use strict";i.d(t,{N:()=>r});var n=i(141078),a=i(96437);let r=(0,n.J1)`
  ${a.nk}
  mutation DraftPublishedDashboardCreateMutation(
    $input: LakeviewconfigServicesPublisheddashboardCreatePublishedDashboardRequestInput!
  ) @component(name: "Lakeview.Dashboards") {
    lakeviewconfigServicesPublisheddashboardCreatePublishedDashboard(input: $input) {
      publishedDashboard {
        name
        revisionId
        credentialsEmbedded
        revisionCreateTime {
          seconds
        }
        featureStates {
          enableGenieSpace
        }
        genieSpace {
          overrideId
        }
        datasets {
          name
          query
        }
        servicePrincipalId
      }
      apiError {
        ...LakeviewApiErrorFragment
      }
    }
  }
`},758666:(e,t,i)=>{"use strict";i.d(t,{Qr:()=>c,st:()=>u});var n=i(692738),a=i(686560),r=i(733337),o=i(660618),s=i(595615);function l(e,t,i,n,a,r,o){try{var s=e[r](o),l=s.value}catch(e){i(e);return}s.done?t(l):Promise.resolve(l).then(n,a)}function d(e){return function(){var t=this,i=arguments;return new Promise(function(n,a){var r=e.apply(t,i);function o(e){l(r,n,a,o,s,"next",e)}function s(e){l(r,n,a,o,s,"throw",e)}o(void 0)})}}function c({permission:e}){return n.useCallback(()=>({queryKey:(({permission:e})=>["is-permitted-domain-policy",{permission:e}])({permission:e}),queryFn:()=>d(function*(){return function(e){return d(function*({permission:e}){let t=(0,a.d)("accountId",""),i=`accounts/${t}`,n=`${o.Je}/is-permitted?resource=${i}&permission=${e}&consistency_token=`,s=yield(0,r.nr)(n);return s?.is_permitted}).apply(this,arguments)}({permission:e})})()}),[e])}function u({permission:e},t){let i=c({permission:e});return(0,s.AO)({...i(),...t})}},758946:(e,t,i)=>{"use strict";i.d(t,{O:()=>r});var n=i(141078),a=i(96437);let r=(0,n.J1)`
  ${a.nk}
  ${a.F0}
  mutation WidgetDeleteAndUpdateLayoutMutation(
    $input: LakeviewconfigServicesWidgetDeleteWidgetAndUpdateLayoutRequestInput!
  ) @component(name: "Lakeview.Dashboards") {
    lakeviewconfigServicesWidgetDeleteWidgetAndUpdateLayout(input: $input) {
      parentPage {
        ...LakeviewconfigPageResponseFragment
      }
      __typename
      apiError {
        ...LakeviewApiErrorFragment
      }
    }
  }
`},768622:(e,t,i)=>{"use strict";i.d(t,{Jq:()=>I,bb:()=>S});var n=i(610435),a=i(956935),r=i(802558),o=i.n(r),s=i(91958),l=i.n(s),d=i(692738),c=i(497895),u=i(194901),p=i(161330),g=i(174541),m=i(574132),f=i(639712);let h={paddingTop:2},v={width:16,flexShrink:0},y={display:"flex"},I=l()((e,t,i)=>(0,a.AH)({...i&&{pointerEvents:"none",color:e.colors.actionDisabledText},...t&&{background:e.colors.actionTertiaryBackgroundHover}}),(e,t,i)=>`${(0,f.H6)(e)}|${t}|${!!i}`),b=l()((e,t)=>(0,a.AH)({marginLeft:e.spacing.sm,fontSize:e.typography.fontSizeBase,fontStyle:"normal",fontWeight:400,cursor:"pointer",overflow:"hidden",wordBreak:"break-word",..."ellipsis"===t&&{textOverflow:"ellipsis",whiteSpace:"nowrap"}}),(e,t)=>`${(0,f.H6)(e)}|${t}`),S=(0,d.forwardRef)(({item:e,index:t,comboboxState:i,textOverflowMode:a="multiline",isDisabled:r,disabledReason:s,hintContent:l,onClick:f,children:S,...w},k)=>{let{selectedItem:E,highlightedIndex:A,getItemProps:T,isOpen:x}=i,P=o()(E,e),C=A===t,{theme:D}=(0,c.wn)(),_=(0,d.useRef)(null);(0,d.useImperativeHandle)(k,()=>_.current);let{onClick:R,...L}=T({item:e,index:t,disabled:r,onMouseUp:e=>{e.stopPropagation(),w.onMouseUp?.(e)},ref:_});return(0,d.useEffect)(()=>{if(x&&A===t&&_.current){let e=_.current.closest("ul");if(!e)return;let t=e.scrollTop,i=e.scrollTop+e.clientHeight,n=_.current.offsetTop,a=_.current.offsetTop+_.current.clientHeight;(n<t||a>i)&&_.current?.scrollIntoView({block:"nearest"})}},[A,t,x,_]),(0,n.FD)("li",{role:"option","aria-selected":P,"aria-disabled":r,onClick:e=>{f?.(e),R?.(e)},css:[(0,g.RB)(D),I(D,C,r)],...L,...w,children:[P?(0,n.Y)(u.A,{css:h}):(0,n.Y)("div",{style:v}),(0,n.FD)("label",{css:b(D,a),children:[r&&s?(0,n.FD)("div",{css:y,children:[(0,n.Y)("div",{children:S}),(0,n.Y)("div",{css:(0,g.eO)(D),children:(0,n.Y)(p.I,{componentId:"typeahead-combobox-menu-item-disabled-reason-info-tooltip",side:"right",content:s})})]}):S,(0,n.Y)(m.y,{disabled:r,children:l})]})]})});S.defaultProps={_type:"TypeaheadComboboxMenuItem"}},773848:(e,t,i)=>{"use strict";i.d(t,{K:()=>r,dp:()=>n,eM:()=>a});let n="fundamentals-v2",a=`/tutorial/${n}`,r=e=>`${a}/${e}`},776041:(e,t,i)=>{"use strict";i.d(t,{Bx:()=>s,Dd:()=>o,Sx:()=>a,Sy:()=>r,TK:()=>n});let n=["folder"];function a(e){return 6e4*e}let r={TABLE:"table",NOTEBOOK:"notebook",QUERY:"query",DASHBOARD:"dashboard",PIPELINE:"pipeline",FILE:"file",DIRECTORY:"directory",JOB:"job",SKILL:"skill",APP:"app",DESIGNER_FILE:"designerFile",GENIE:"genie",SCHEDULED_GENIE_CODE:"scheduledGenieCode"},o=Object.values(r);function s(e,t){let i=o.indexOf(e.assetType),n=o.indexOf(t.assetType);return(-1===i?99:i)-(-1===n?99:n)}},777517:(e,t,i)=>{"use strict";i.d(t,{A:()=>l});var n=i(610435),a=i(692738),r=i(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 0a.75.75 0 0 1 .75.75V3h5.5a.75.75 0 0 1 .75.75V6h.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75H15v2.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V12H.75a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 .75 6H1V3.75A.75.75 0 0 1 1.75 3h5.5V.75A.75.75 0 0 1 8 0M2.5 4.5v9h11v-9zM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6.25 2.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"})})}let s=(0,a.forwardRef)((e,t)=>(0,n.Y)(r.I,{ref:t,...e,component:o}));s.displayName="RobotIcon";let l=s},792575:(e,t,i)=>{"use strict";i.d(t,{A:()=>l});var n=i(610435),a=i(692738),r=i(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("path",{fill:"currentColor",d:"M1 1v13.25c0 .414.336.75.75.75H15v-1.5H2.5V1z"}),(0,n.Y)("path",{fill:"currentColor",d:"m15.03 5.03-1.06-1.06L9.5 8.44 7 5.94 3.47 9.47l1.06 1.06L7 8.06l2.5 2.5z"})]})}let s=(0,a.forwardRef)((e,t)=>(0,n.Y)(r.I,{ref:t,...e,component:o}));s.displayName="ChartLineIcon";let l=s},823622:(e,t,i)=>{"use strict";i.d(t,{q:()=>b});var n=i(610435),a=i(692738),r=i(488655),o=i(858383),s=i(430750),l=i(938320),d=i(960790),c=i(373037),u=i(115057),p=i(282253),g=i(406130),m=i(219368),f=i(749721),h=i(706949);let v=({takeMeThereBanner:e,rootRef:t})=>{let i=(0,r.Zp)(),o=(0,c.u)(e=>e.lessonSession?.sessionKind==="fundamentals"?e.lessonSession:null),l=(0,c.u)(e=>e.hide),d=(0,c.u)(e=>e.minimize),f=(0,c.u)(e=>e.showFundamentalsLessonSession),v=(0,c.u)(e=>e.setFundamentalsLessonStepIndex),{markModuleComplete:y}=(0,m.m)({courseId:o?.moduleId??"",totalModules:o?.totalModules}),I=(0,h.Gs)(e=>e.setHasCompletedLesson),{handleMouseDown:b,dragging:S}=(0,u.t)(),w=(0,a.useCallback)(()=>{if(!o)return;i(o.backToCourseRoute),l()},[o,i,l]),k=(0,a.useCallback)(()=>{if(!o)return;y(o.lessonId),I(!0),i(o.backToCourseRoute),l()},[l,o,y,i,I]),E=(0,a.useCallback)(e=>{if(!o)return;let t=o.steps[e];if(!t)return;let n=t.destinationRoute??o.destinationRoute;v(e),i(n)},[o,i,v]),A=(0,a.useCallback)(()=>{if(!o||o.currentStepIndex<=0)return;E(o.currentStepIndex-1)},[o,E]),T=(0,a.useCallback)(()=>{if(!o)return;o.currentStepIndex<o.steps.length-1&&E(o.currentStepIndex+1)},[o,E]),x=(0,a.useCallback)(()=>{if(!o)return;let e=o.nextLessonSession;if(!e)return;let t=(0,p.wm)(e.lessonId),n=t?(0,p.$)(t)??0:0;if(y(o.lessonId),I(!0),f({...e,currentStepIndex:n}),e.needsProvisioning){let t=new URLSearchParams({[g.dK]:"1",[g.uW]:String(n)});i(`${e.backToCourseRoute}?${t.toString()}`);return}i(e.destinationRoute)},[o,y,i,I,f]);if(!o||0===o.steps.length)return null;let P=o.steps[o.currentStepIndex];if(!P)return null;return(0,n.Y)(s.dh,{lessonId:o.lessonId,lessonTitle:o.lessonTitle,currentStep:P,currentStepIndex:o.currentStepIndex,totalSteps:o.steps.length,hasNextLesson:!!o.nextLessonSession,nextLessonTitle:o.nextLessonSession?.lessonTitle,takeMeThereBanner:e,onBackToCourse:w,onMinimize:d,onClose:l,onPrevStep:A,onNextStep:T,onNextLesson:x,onFinishCourse:k,onHeaderMouseDown:b,isDragging:S,rootRef:t})},y=({lessonId:e,takeMeThereBanner:t})=>{let{ref:i}=(0,f.n)(e,"pipExpanded");return(0,n.Y)(v,{takeMeThereBanner:t,rootRef:i})},I=e=>{let{ref:t}=(0,f.n)(e.lessonId,"pipMinimized");return(0,n.Y)(s.M6,{...e,rootRef:t})},b=()=>{let e,t,i=(0,r.Zp)(),s=(0,o.zy)(e=>e.pathname);e=(0,h.Gs)(e=>Object.keys(e.activeSurfaces).length>0),t=(0,h.Gs)(e=>e.addCourseActiveTime),(0,a.useEffect)(()=>{if(!e)return;let i=Date.now(),n=window.setInterval(()=>{let e=Date.now();t(e-i),i=e},1e3);return()=>{window.clearInterval(n)}},[e,t]);let u=(0,c.u)(e=>e.hide),p=(0,c.u)(e=>e.restore),g=(0,c.u)(e=>e.lessonSession);if(!g||"fundamentals"!==g.sessionKind)return null;let m=g.steps[g.currentStepIndex]?.destinationRoute,f=m??g.destinationRoute,v=(0,d.NR)(s,g.destinationRoute,g.backToCourseRoute)||void 0!==m&&(0,d.nN)(s,m),b=g.steps[0];if(!b)return null;let S=g.steps[g.currentStepIndex],w=v?void 0:{destinationLabel:g.destinationLabel,onClick:()=>i(f)};return(0,n.Y)(l.g,{minimizedContent:(0,n.Y)(I,{lessonId:g.lessonId,currentStepId:S?.stepId??b.stepId,lessonTitle:g.lessonTitle,currentStepTitle:S?.title??"",takeMeThereBanner:w,onBackToCourse:()=>{i(g.backToCourseRoute),u()},onExpand:p,onClose:u},`${g.lessonId}:minimized`),expandedContent:(0,n.Y)(y,{lessonId:g.lessonId,takeMeThereBanner:w},`${g.lessonId}:expanded`)})}},861403:(e,t,i)=>{"use strict";i.d(t,{b:()=>g});var n=i(778529),a=i.n(n),r=i(536717),o=i.n(r),s=i(692738),l=i(342411),d=i(595338);let c=/summary:\s*(.*?)(?=,\s*data:)/s;var u=i(482921),p=i(308879);function g(e,t=!0,i=!1){let n=(0,l.tz)(),{isEnabled:r}=(0,p.L)();return(0,s.useMemo)(()=>{let s=e;if(a()(s))return;if((0,d.F0)(e)?s=function(e,t){if(t.response?.status===429)return e.formatMessage({id:"O57kaK",defaultMessage:"Error 429: Too many requests. Please wait a moment and try again. If the issue persists, consider adjusting your request frequency or reaching out to support for assistance."});{let e=t.response?.data;return e?.message??e}}(n,e):e instanceof Error&&(s=function(e,t){if(t&&e.cause&&"string"==typeof e.cause)return e.cause;if("SqlQueryError"!==e.name)return e.message;var i=e.message;let n=i.match(/Details:\s*([^,]*)/);if(n&&n.length>=0)return n[0];return i}(e,i)),o()(s)){var l=s,p=n,g=t,m=r;if(l.includes("Catalog namespace is not supported")||l.includes("Unity catalog is not enabled"))switch((0,u.G)(g,m)){case u.M.ONLY_CLUSTER:return p.formatMessage({id:"Z2EuPV",defaultMessage:"This cluster is incompatible with sample data for Unity Catalog tables. Please use Databricks Runtime 11.1 or higher or contact Databricks for assistance."});case u.M.ONLY_WAREHOUSE:return p.formatMessage({id:"Uvfp1K",defaultMessage:"This warehouse is incompatible with sample data for Unity Catalog tables. Please use Databricks Runtime 11.1 or higher or contact Databricks for assistance."});case u.M.WAREHOUSE_AND_CLUSTER:return p.formatMessage({id:"u0m7LZ",defaultMessage:"This warehouse or cluster is incompatible with sample data for Unity Catalog tables. Please use Databricks Runtime 11.1 or higher or contact Databricks for assistance."});default:return""}let e=l.match(c);if(e)return e[0].trim();return l}return JSON.stringify(s)},[e,n,i,t,r])||""}},874938:(e,t,i)=>{"use strict";i.d(t,{R:()=>v});var n=i(610435),a=i(956935),r=i(148070),o=i(692738),s=i(224098),l=i(429608),d=i(497895),c=i(943844),u=i(53333),p=i(123252),g=i(661748);function m(e){if(null==e)return;if(Array.isArray(e))return e.length>0?String(e[0]):void 0;return String(e)}function f(e){if(null==e)return;if(Array.isArray(e))return e.map(String);return[String(e)]}function h({header:e,panelKey:t,collapsible:i,forceRender:a,destroyInactivePanel:o,children:s,dangerouslyAppendEmotionCSS:l,dangerouslySetAntdProps:d,isLeftAligned:u,clsPrefix:p}){let g=d?.showArrow!==!1,m=[`${p}-item`,d?.className].filter(Boolean).join(" ");return(0,n.FD)(r.q7,{value:t,disabled:"disabled"===i,"data-radix-accordion-item":"",className:m,style:d?.style,css:l,children:[(0,n.Y)(r.Y9,{css:{margin:0,fontWeight:"inherit",fontSize:"inherit"},children:(0,n.Y)(r.l9,{"data-radix-accordion-trigger":"",className:`${p}-header`,children:u?(0,n.FD)(n.FK,{children:[g&&(0,n.Y)(c.A,{"data-radix-accordion-chevron":"",className:`${p}-arrow`}),e]}):(0,n.FD)(n.FK,{children:[e,g&&(0,n.Y)(c.A,{"data-radix-accordion-chevron":"",className:`${p}-arrow`})]})})}),(0,n.Y)(r.UC,{"data-radix-accordion-content":"",className:`${p}-content`,forceMount:!!(a||!1===o)||void 0,children:(0,n.Y)("div",{"data-radix-accordion-content-inner":"",className:`${p}-content-box`,children:s})})]})}function v({displayMode:e="multiple",activeKey:t,defaultActiveKey:i,onChange:c,alignContentToEdge:y=!1,chevronAlignment:I="right",secondaryStyle:b=!1,contentPadding:S=!0,headerWidth:w="full",destroyInactivePanel:k,analyticsEvents:E,componentId:A,valueHasNoPii:T,dangerouslyAppendEmotionCSS:x,children:P,collapsible:C,dangerouslySetAntdProps:D,useLegacyAccordion:_,...R}){let L=(0,g.W)("databricks.fe.observability.defaultComponentView.accordion",!1),{theme:$,getPrefixedClassName:M}=(0,d.wn)(),N=M("collapse"),Y=[N,D?.className].filter(Boolean).join(" "),O="left"===I,F=(0,o.useMemo)(()=>E??(L?[s.s7.OnValueChange,s.s7.OnView]:[s.s7.OnValueChange]),[E,L]),U=(0,s.ei)({componentType:s.v_.Accordion,componentId:A,analyticsEvents:F,valueHasNoPii:T}),{elementRef:B}=(0,u.z)({onView:U.onView}),z=(0,o.useCallback)(e=>{let t=e||void 0;U.onValueChange(t),void 0!==t?c?.(t):c?.(void 0)},[U,c]),G=(0,o.useCallback)(e=>{U.onValueChange(JSON.stringify(e)),c?.(e)},[U,c]),W=o.Children.toArray(P).filter(e=>o.isValidElement(e)),V="single"===e?m(t):f(t),H="single"===e?m(i):f(i),K=W.map(e=>{let{header:t,collapsible:i,forceRender:a,children:r,dangerouslyAppendEmotionCSS:o,dangerouslySetAntdProps:s}=e.props,l=String(e.key??"").replace(/^\.\$/,"");return(0,n.Y)(h,{header:t,panelKey:l,collapsible:i??C,forceRender:a,destroyInactivePanel:k,dangerouslyAppendEmotionCSS:o,dangerouslySetAntdProps:s,isLeftAligned:O,clsPrefix:N,children:r},l)}),j=(0,o.useMemo)(()=>[function({theme:e,alignContentToEdge:t,isLeftAligned:i,secondaryStyle:n,contentPadding:r,headerWidth:o}){let s={border:"0 none",background:"none","& > [data-radix-accordion-item]":{border:"0 none"},"& [data-radix-accordion-trigger]":{all:"unset",boxSizing:"border-box",display:"flex",alignItems:"center",width:"fit-content"===o?"fit-content":"100%",padding:"6px 44px 6px 0",lineHeight:e.typography.lineHeightBase,color:n?e.colors.textSecondary:e.colors.textPrimary,fontWeight:n?400:600,cursor:"pointer",flexDirection:i?"row-reverse":"row",justifyContent:i?"flex-end":"flex-start",gap:8*!!i,position:"relative","&:not([data-disabled]):hover":{color:e.colors.actionPrimaryBackgroundHover,"& [data-radix-accordion-chevron]":{color:e.colors.actionPrimaryBackgroundHover}},"&:not([data-disabled]):active":{color:e.colors.actionPrimaryBackgroundPress,"& [data-radix-accordion-chevron]":{color:e.colors.actionPrimaryBackgroundPress}},"&:focus-visible":{outlineColor:`${e.colors.actionDefaultBorderFocus}`,outlineStyle:"auto"},"&[data-disabled]":{cursor:"not-allowed",opacity:.5}},"& [data-radix-accordion-chevron]":{color:e.colors.textSecondary,fontSize:e.general.iconFontSize,transition:"transform 200ms ease",position:i?"static":"absolute",right:i?void 0:12*!t},'& [data-radix-accordion-trigger][data-state="open"] [data-radix-accordion-chevron]':{transform:"rotate(180deg)"},"& [data-radix-accordion-content]":{overflow:"hidden",backgroundColor:e.colors.backgroundPrimary},'& [data-radix-accordion-content][data-state="open"]':{animation:"radix-accordion-slide-down 200ms ease-out"},'& [data-radix-accordion-content][data-state="closed"]':{animation:"radix-accordion-slide-up 200ms ease-out",display:"none"},"& [data-radix-accordion-content-inner]":{padding:r?t?"8px 0px 16px":"8px 16px 16px":0},"@keyframes radix-accordion-slide-down":{from:{height:0},to:{height:"var(--radix-accordion-content-height)"}},"@keyframes radix-accordion-slide-up":{from:{height:"var(--radix-accordion-content-height)"},to:{height:0}},...(0,l.Cx)(e.options.enableAnimation)};return(0,a.AH)(s)}({theme:$,alignContentToEdge:y,isLeftAligned:O,secondaryStyle:b,contentPadding:S,headerWidth:w}),x,(0,p.De)($)],[$,y,O,b,S,w,x]);if("single"===e)return(0,n.Y)(r.bL,{type:"single",value:V,defaultValue:H,onValueChange:z,collapsible:!0,className:Y,style:D?.style,css:j,ref:B,...U.dataComponentProps,...R,children:K});return(0,n.Y)(r.bL,{type:"multiple",value:V,defaultValue:H,onValueChange:G,className:Y,style:D?.style,css:j,ref:B,...U.dataComponentProps,...R,children:K})}},901520:(e,t,i)=>{"use strict";i.a(e,async(e,n)=>{try{i.r(t),i.d(t,{TutorialPiP:()=>v});var a=i(610435),r=i(692738),o=i(87221),s=i(640456),l=i(823622),d=i(499153),c=i(373037),u=i(91192),p=i(491859),g=i(12099),m=i(306555),f=e([s,d]);function h(e){let t=(0,m.eh)();t&&(0,g.fD)(e,t)}[s,d]=f.then?(await f)():f;let v=()=>{let e=(0,c.u)(e=>e.isVisible),t=(0,c.u)(e=>e.lessonSession),i=(0,o.ki)(),n=(0,r.useRef)(i);n.current=i;let g=(0,r.useRef)(t);if((0,r.useEffect)(()=>{let e=null!==g.current;g.current=t,e&&null===t&&h(i)},[t,i]),(0,r.useEffect)(()=>()=>h(n.current),[]),!e||!t)return(0,a.Y)(p.q,{});if("pipeline-demo"===t.sessionKind&&t.lessonId===u.xs)return(0,a.Y)(s.M,{});return"pipeline-demo"===t.sessionKind?(0,a.Y)(d.N,{}):(0,a.Y)(l.q,{})};n()}catch(e){n(e)}})},907046:(e,t,i)=>{"use strict";i.d(t,{n:()=>r});var n=i(610435),a=i(939578);let r=e=>{let{name:t,children:i,...r}=e;return(0,n.FD)(n.FK,{children:[(0,n.Y)(a.y,{...r,children:t}),i]})}},936743:(e,t,i)=>{"use strict";i.d(t,{G:()=>s,l:()=>o});var n=i(610435),a=i(692738),r=i(62947);let o=e=>{switch(e.kind){case"group":return{group_name:e.name,group_id:e.id};case"user":return{user_name:e.name,user_id:e.id};case"serviceprincipal":return{service_principal_display_name:e.displayName,service_principal_id:e.id,service_principal_name:e.applicationId}}},s=({onUpdate:e,onUpdateSubject:t,showAccountLevelEntities:i,...s})=>{let l=(0,a.useCallback)(i=>{let n;Array.isArray(i)?n=i.map(e=>o(e)):void 0!==i&&(n=o(i)),e&&e(n),t&&t(i)},[e,t]);return(0,n.Y)(r.T,{enableAccountGroups:!!i,enableAccountServicePrincipals:!!i,enableAccountUsers:!!i,enableWorkspaceGroups:!i,enableWorkspaceServicePrincipals:!i,enableWorkspaceUsers:!i,onUpdate:e||t?l:void 0,...s})}},938320:(e,t,i)=>{"use strict";i.d(t,{g:()=>d});var n=i(610435),a=i(692738),r=i(317258),o=i(497895),s=i(899831),l=i(373037);let d=({expandedContent:e,minimizedContent:t,resizable:i=!0})=>{let{theme:d}=(0,o.wn)(),c=(0,l.u)(e=>e.isMinimized),u=(0,l.u)(e=>e.floatingX),p=(0,l.u)(e=>e.floatingY),g=(0,l.u)(e=>e.floatingWidth),m=(0,l.u)(e=>e.floatingHeight),f=(0,a.useCallback)((e,{size:t,handle:i})=>{let n=l.u.getState();l.u.setState({floatingWidth:t.width,floatingHeight:t.height,...i.includes("n")?{floatingY:n.floatingY-(t.height-n.floatingHeight)}:{},...i.includes("w")?{floatingX:n.floatingX-(t.width-n.floatingWidth)}:{}})},[]);(0,a.useEffect)(()=>{let e=()=>{l.u.setState(e=>{let t=Math.min(e.floatingWidth,window.innerWidth-48),i=Math.min(e.floatingHeight,window.innerHeight-48);return{floatingWidth:t,floatingHeight:i,floatingX:Math.min(e.floatingX,window.innerWidth-t),floatingY:Math.min(e.floatingY,window.innerHeight-i)}})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let h=(0,a.useMemo)(()=>({position:"fixed",left:u,top:p,width:g,height:m,zIndex:d.options.zIndexBase+100,backgroundColor:d.colors.backgroundPrimary,borderRadius:d.borders.borderRadiusMd,border:`1px solid ${d.colors.border}`,boxShadow:d.shadows.xl,contain:"paint",display:"flex",flexDirection:"column",overflow:"hidden"}),[u,p,g,m,d]);if(c)return(0,n.Y)(n.FK,{children:t});if(!i)return(0,n.Y)("div",{"data-testid":"tutorial-pip-panel",css:h,children:e});return(0,n.Y)(r.Resizable,{height:m,width:g,minConstraints:[s.mn,280],maxConstraints:[window.innerWidth-48,window.innerHeight-48],onResize:f,resizeHandles:["n","s","nw","ne","se","sw"],children:(0,n.Y)("div",{"data-testid":"tutorial-pip-panel",css:{...h,".react-resizable-handle-n, .react-resizable-handle-s":{position:"absolute",left:0,right:0,height:8,cursor:"ns-resize",zIndex:1},".react-resizable-handle-n":{top:-4},".react-resizable-handle-s":{bottom:-4}},children:e})})}},939578:(e,t,i)=>{"use strict";i.d(t,{y:()=>o});var n=i(610435),a=i(545251),r=i(605107);let o=({children:e,...t})=>{let{isInsideDialogCombobox:i}=(0,a.w)();if(!i)throw Error("`DialogComboboxSectionHeader` must be used within `DialogCombobox`");return(0,n.Y)(r.X,{...t,children:e})}},957729:(e,t,i)=>{"use strict";i.d(t,{A:()=>l});var n=i(610435),a=i(692738),r=i(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.75 1a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75V1.75a.75.75 0 0 0-.75-.75zm.75 12.5v-11h11v11zM5 6h2.25v5.5h1.5V6H11V4.5H5z",clipRule:"evenodd"})})}let s=(0,a.forwardRef)((e,t)=>(0,n.Y)(r.I,{ref:t,...e,component:o}));s.displayName="TextBoxIcon";let l=s},960790:(e,t,i)=>{"use strict";i.d(t,{NR:()=>s,ln:()=>o,nN:()=>r});let n=e=>{if("/"!==e&&e.endsWith("/"))return e.slice(0,-1);return e},a=e=>{try{return new URL(e,window.location.origin).pathname}catch{return e.split("?")[0]??e}},r=(e,t)=>{let i=n(e),r=n(a(t));if(!r)return!1;return i===r||i.startsWith(`${r}/`)},o=(e,t)=>{let i=n(e),r=n(a(t));if(!r)return!1;return i===r},s=(e,t,i)=>r(e,t)||r(e,i)},962200:(e,t,i)=>{"use strict";i.d(t,{DC:()=>g,DL:()=>l,L2:()=>c,Vp:()=>h,hw:()=>p,uH:()=>f,v4:()=>m,ws:()=>d,x6:()=>u});var n,a,r,o,s=i(993533);let l=s.Gvj;var d=((n={}).MULTI_FLOW="MULTI_FLOW",n),c=((a={}).ALL="ALL",a.INFO="INFO",a.WARN="WARN",a.ERROR="ERROR",a);let u={ALL:[l.INFO,l.WARN,l.ERROR],INFO:[l.INFO],WARN:[l.WARN],ERROR:[l.ERROR]};var p=((r={}).CREATE_UPDATE="create_update",r.UPDATE_PROGRESS="update_progress",r.DATASET_DEFINITION="dataset_definition",r.FLOW_DEFINITION="flow_definition",r.SINK_DEFINITION="sink_definition",r.FLOW_PROGRESS="flow_progress",r.DATA_SAMPLE="data_sample",r.GRAPH_CREATED="graph_created",r.PLANNING_INFORMATION="planning_information",r),g=((o={}).CREATE_UPDATE_DETAILS_SUMMARY="create_update_details_summary",o.UPDATE_PROGRESS_SUMMARY="update_progress_summary",o.DATASET_DEFINITION_SUMMARY="dataset_definition_summary",o.SINK_DEFINITION_SUMMARY="sink_definition_summary",o.FLOW_DEFINITION_SUMMARY="flow_definition_summary",o.FLOW_PROGRESS_SUMMARY="flow_progress_summary",o.DATA_SAMPLE_SUMMARY="data_sample_summary",o.TIME_SERIES_SUMMARY="time_series_summary",o);let m="reset_action",f="SINK",h=new Set([s.oLM.TABLE,s.oLM.MATERIALIZED_VIEW,s.oLM.STREAMING_TABLE,f])},965545:(e,t,i)=>{"use strict";i.d(t,{I:()=>o,j:()=>r});var n,a,r=((n={}).MANAGER="roles/discovery.manager",n),o=((a={}).VIEW="domain/view",a.CREATE="account/createDomain",a.DELETE="domain/delete",a.ACCOUNT_GET_RULESET="account.ruleSet/get",a.ACCOUNT_UPDATE_RULESET="account.ruleSet/update",a)},966602:e=>{"use strict";function t(e){this._maxSize=e,this.clear()}t.prototype.clear=function(){this._size=0,this._values=Object.create(null)},t.prototype.get=function(e){return this._values[e]},t.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),!(e in this._values)&&this._size++,this._values[e]=t};var i=/[^.^\]^[]+|(?=\[\]|\.\.)/g,n=/^\d+$/,a=/^\d/,r=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,o=/^\s*(['"]?)(.*?)(\1)\s*$/,s=new t(512),l=new t(512),d=new t(512);function c(e){return s.get(e)||s.set(e,u(e).map(function(e){return e.replace(o,"$2")}))}function u(e){return e.match(i)||[""]}function p(e){return"string"==typeof e&&e&&-1!==["'",'"'].indexOf(e.charAt(0))}e.exports={Cache:t,split:u,normalizePath:c,setter:function(e){var t=c(e);return l.get(e)||l.set(e,function(e,i){for(var n=0,a=t.length,r=e;n<a-1;){var o=t[n];if("__proto__"===o||"constructor"===o||"prototype"===o)return e;r=r[t[n++]]}r[t[n]]=i})},getter:function(e,t){var i=c(e);return d.get(e)||d.set(e,function(e){for(var n=0,a=i.length;n<a;)if(null==e&&t)return;else e=e[i[n++]];return e})},join:function(e){return e.reduce(function(e,t){return e+(p(t)||n.test(t)?"["+t+"]":(e?".":"")+t)},"")},forEach:function(e,t,i){!function(e,t,i){var o,s,l,d,c=e.length;for(s=0;s<c;s++)(o=e[s])&&(function(e){return!p(e)&&(e.match(a)&&!e.match(n)||r.test(e))}(o)&&(o='"'+o+'"'),l=!(d=p(o))&&/^\d+$/.test(o),t.call(i,o,d,l,s,e))}(Array.isArray(e)?e:u(e),t,i)}}},980150:(e,t,i)=>{"use strict";i.d(t,{L:()=>s});var n=i(692738),a=i(252212),r=i(141267);let o={pipExpanded:r.yY.TUTORIALS_BUILD_DATA_PIPELINE_DEMO_PIP_EXPANDED,pipMinimized:r.yY.TUTORIALS_BUILD_DATA_PIPELINE_DEMO_PIP_MINIMIZED},s=e=>{let t=(0,r.qB)(o[e]),i=(0,n.useCallback)(e=>t({activeTimeMs:e.totalActiveMs}),[t]);return(0,a.d)({onReport:i,thresholdMs:2e3})}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/89414.cc1e77b102.chunk.js.map