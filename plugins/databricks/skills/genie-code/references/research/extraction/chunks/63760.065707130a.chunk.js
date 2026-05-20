"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[63760],{76995:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(544004),i=r.n(n),a=r(536717),s=r.n(a);i().setConfig({ADD_ATTR:["target"]}),i().addHook("afterSanitizeAttributes",function(e){let t=e.getAttribute("target");s()(t)&&"_blank"===t.toLowerCase()?e.setAttribute("rel","noopener noreferrer"):e.removeAttribute("target")});let o=i().sanitize},90710:(e,t,r)=>{r.d(t,{Y:()=>d});var n=r(610435),i=r(956935),a=r(692738),s=r(497895),o=r(861166),l=r(997791),c=r(639712),u=r(123252);let d=({breadcrumbs:e,title:t,titleAddOns:r,dangerouslyAppendEmotionCSS:d,buttons:p,children:m,titleElementLevel:g,allowTitleWrap:h=!0,...v})=>{let f,{classNamePrefix:_,theme:y}=(0,s.wn)(),b=Array.isArray(p)?p:p?[p]:[],k={titleWrapper:(0,i.AH)({display:"flex",alignItems:"flex-start",justifyContent:"space-between",flexWrap:h?"wrap":"nowrap",rowGap:y.spacing.sm,...0===b.length&&{paddingTop:e?0:y.spacing.xs/2,paddingBottom:y.spacing.xs/2}}),breadcrumbWrapper:(0,i.AH)({lineHeight:y.typography.lineHeightBase,marginBottom:y.spacing.xs}),title:(0,i.AH)({marginTop:0,marginBottom:"0 !important",alignSelf:"stretch",...!h&&{flex:1,minWidth:0}}),titleIfOtherElementsPresent:(0,i.AH)({marginTop:2}),buttonContainer:(0,i.AH)({marginLeft:8}),titleAddOnsWrapper:(0,i.AH)({display:"inline-flex",verticalAlign:"middle",alignItems:"center",flexWrap:"wrap",marginLeft:y.spacing.sm,gap:y.spacing.xs})};return(0,n.FD)("div",{...(0,u.VG)(),css:[(f={[`.${_}-breadcrumb`]:{lineHeight:y.typography.lineHeightBase}},(0,i.AH)((0,c.dg)(f))),d],...v,children:[e&&(0,n.Y)("div",{css:k.breadcrumbWrapper,children:e}),(0,n.FD)("div",{css:k.titleWrapper,children:[(0,n.FD)(l.h,{level:2,elementLevel:g,css:[k.title,(p||e)&&k.titleIfOtherElementsPresent],children:[t,r&&(0,n.Y)("span",{css:k.titleAddOnsWrapper,children:r})]}),p&&(0,n.Y)("div",{css:k.buttonContainer,children:(0,n.Y)(o.$,{dangerouslySetAntdProps:{wrap:!0},size:8,children:b.filter(Boolean).map((e,t)=>{let r=`dubois-header-button-${t}`;return a.isValidElement(e)?a.cloneElement(e,{key:e.key||r}):(0,n.Y)(a.Fragment,{children:e},r)})})})]})]})}},150190:(e,t,r)=>{r.d(t,{H:()=>o});var n=r(160603),i=r(733845),a=r(302118);function s(e,t,r,n,i,a,s){try{var o=e[a](s),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(n,i)}function o(e){let t=(0,i.O)();return(0,n.useQuery)(["get_user_info"],()=>{var e;return(e=function*(){if(t)return yield a.k.getUserInfo();return{is_metastore_admin:!1}},function(){var t=this,r=arguments;return new Promise(function(n,i){var a=e.apply(t,r);function o(e){s(a,n,i,o,l,"next",e)}function l(e){s(a,n,i,o,l,"throw",e)}o(void 0)})})()},e)}},223689:(e,t,r)=>{r.d(t,{I:()=>l});var n=r(692738),i=r(200356),a=r(441535),s=r(896388),o=r(559706);function l(){let e=(0,o.vt)(),t=(0,a.W)("databricks.fe.marketplace.databricksProviderId",""),{providers:r}=(0,s.a)({skip:e,fetchPolicy:"cache-first"}),l=(0,n.useMemo)(()=>{let e=new Set;for(let t of r??[])t?.id&&e.add(t.id);return e},[r]),c=(0,n.useCallback)(r=>{if(e||!r.detail?.assets?.includes(i.gBq.ASSET_TYPE_APP))return!0;let n=r.summary?.providerId;if(!n)return!1;if(t&&n===t)return!0;return l.has(n)},[e,t,l]);return(0,n.useCallback)(e=>e.filter(c),[c])}},259058:(e,t,r)=>{r.d(t,{P:()=>u});var n=r(610435);r(692738);var i=r(499348),a=r(497895);function s({children:e}){let{theme:t}=(0,a.wn)();return(0,n.Y)("div",{css:{backgroundColor:t.colors.backgroundPrimary,width:"100%",display:"flex"},children:e})}var o=r(786582),l=r(815797),c=r(509695);function u({children:e}){return(0,l.jo)(),(0,n.Y)(s,{children:(0,n.Y)(o.IU,{children:(0,n.Y)(c.p,{children:(0,n.Y)(i.A,{children:e})})})})}},306357:(e,t,r)=>{r.d(t,{ED:()=>p,PF:()=>l,qZ:()=>m});var n=r(166),i=r.n(n),a=r(34116),s=r.n(a),o=r(692738);let l={partnerConnectListings:[],loading:!1},c={allPartnersAsProviders:[],loading:!1},u={partnerConnectListings:[],readonlyPartners:[],loading:!1},d={featuredPartnerListings:[],loading:!1},p=o.createContext({isPartnerConnectEnabled:!1,refetchPartners:s(),isPartnerConnectLoading:!1,getPartnerIdFromMarketplaceListingID:()=>void 0,getPartnerIdFromMarketplaceProviderID:()=>void 0,getPartnerAsProvider:()=>void 0,getPartnerListingsForProvider:()=>l,getPartnerAsListing:()=>void 0,connectedPartnerIntegrations:[],getFeaturedPartnerListings:()=>d,getAllPartnersAsProviders:()=>c,getAllPartnersAsListings:()=>u,mapToDataProductWithPartnerIntegrationAttributes:i(),getPartnerForListingID:()=>void 0,partnerCategories:[],allPartners:[]});function m(){return o.useContext(p)}},357403:(e,t,r)=>{r.r(t),r.d(t,{RequireDatabricksSession:()=>V});var n,i=r(610435),a=r(813342),s=r.n(a),o=r(692738),l=r(3393),c=r(437178),u=r(93353),d=r(441560),p=r(583075),m=r(680519),g=r.n(m),h=r(801938),v=r(341300),f=((n=f||{}).CLICK="fe_interaction_click",n),_=r(521198),y=r(605321),b=r(6e4),k=r(624704),P=r(342411),A=r(605945),C=r(141078),I=r(278983),L=r(886100),S=r(22191),E=r(747129),T=r(205048),w=r(929117),F=r(956935),x=r(497895),M=r(694762),z=r(465082),Y=r(382908),R=r(955210);let D=function({workspaces:e,domainSuffix:t,closeDialogOnSelect:r,onClose:n,...a}){let s=(0,P.tz)(),{theme:o}=(0,x.wn)(),{closeDialog:l}=(0,_.Ww)();return(0,i.Y)(M.aF,{...a,title:s.formatMessage({id:"Eb3/PS",defaultMessage:"Choose Workspace"}),dangerouslySetAntdProps:{closable:!1,maskClosable:!1},footer:null,children:(0,i.Y)("ul",{className:"legacy-ul",style:{listStyleType:"none",padding:0},children:e?.map(e=>{let a={};if(r)a.onClick=()=>{l(),n?.(e)};else{let r;(r=new URL(window.location.href)).searchParams.set("o",`${e.orgId}`),r.host=(e.useRegionalUrl?e.azureLocation:e.deploymentName)+"."+t,r.protocol="https",a.href=r.toString()}let s=e.name;return e.owner&&(s+=" ("+e.owner+")"),(0,i.Y)("a",{title:s,...a,"data-skip-router":!0,children:(0,i.Y)(F.Z2,{children:({css:t})=>(0,i.FD)("li",{className:t({display:"flex",alignItems:"center",padding:o.spacing.md,gap:o.spacing.md,"&:hover,&:focus":{backgroundColor:o.colors.actionDefaultBackgroundHover}}),children:[(0,i.Y)(z.A,{}),(0,i.FD)("div",{style:{flexGrow:1},children:[(0,i.Y)(Y.o.Title,{style:{marginTop:0},level:4,children:e.name}),(0,i.Y)(Y.o.Text,{color:"secondary",children:e.owner})]}),(0,i.Y)(R.A,{})]})})},`${e.orgId}`)})})})};var O=r(994393),$=r(506645);function H(e,t,r,n,i,a,s){try{var o=e[a](s),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(n,i)}function B(){let e=(0,O.useMutation)(()=>{var e;return(e=function*(){yield d.A.refreshDatabricksSession()},function(){var t=this,r=arguments;return new Promise(function(n,i){var a=e.apply(t,r);function s(e){H(a,n,i,s,o,"next",e)}function o(e){H(a,n,i,s,o,"throw",e)}s(void 0)})})()});return(0,$.sc)({name:"DbsqlRefreshSessionPolicy",handleCsrfHasExpired:()=>{if(e.isLoading)return;e.mutate()},handleSessionHasExpired:()=>{},handleUserHasLoggedIn:()=>{},handleUserHasLoggedOut:()=>{}}),null}var G=r(675298);let N=()=>{o.useEffect(()=>{(0,I.y)("clientsideEvent",{eventName:"databricksSQLAccessDenied"})},[]);let e="For access to Databricks SQL, contact your Databricks representative.";return(0,i.Y)(l.Ay,{error:Error(e),message:e})};function q(e){e&&L.iT.sev2BurnRate(S.Es.DbsqlUi,"session_missing_settings",E.i1.P99,E.Ip.Min10,!!e.settings,e.settings?void 0:Error())}function V({children:e,fallback:t=null}){let[r,n]=(0,o.useState)(void 0),[a,s]=(0,o.useState)(!0),l=(0,G.E)(),{openDialog:m,dialogNode:f}=(0,_.sp)(D),b=(0,o.useCallback)((e,t)=>new Promise(r=>{m({componentId:"codegen_redash_app_src_app_extensions_edge_components_requiredatabrickssession.tsx_79",workspaces:e,domainSuffix:t,onClose:r})}),[m]);if((0,o.useEffect)(()=>{let e=!1,t=W();return(0,A.mt)(t),(0,u.Nt)({}),s(!0),d.A.requireDatabricksSession(b,t).then(t=>{e||((0,p.ow)(t.settings),q(t),n(t),(0,u.Nt)({o:Number(t.settings.currentWorkspaceId)}),(0,A.mt)(Number(t.settings.currentWorkspaceId)))}).catch(()=>{e||n(void 0)}).finally(()=>{s(!1)}),()=>{e=!0}},[b]),(0,o.useEffect)(()=>d.A.subscribeSessionChanges(e=>{q(e),n(e)}),[]),(0,o.useEffect)(()=>{r?.settingsOverrides&&k.A.warning((0,i.Y)(P.sA,{id:"kIK0AR",defaultMessage:"Some local settings overrides were detected and applied:"}),(0,i.Y)("pre",{className:"legacy-pre",style:{display:"block"},children:JSON.stringify(r.settingsOverrides,null,4)}),{key:"settingsOverrides",duration:10})},[r]),!function({enabled:e=!0}={}){let{portalContainer:t,appRoot:r}=(0,h.Xd)();(0,o.useEffect)(()=>{if(!e)return;let n=new Set([r,t]),i=e=>{if(!e.composed)return;let t=e.composedPath(),r=g()(t,"dataset.analyticsId");r&&r instanceof HTMLElement&&(0,v.$G)("fe_interaction_click","element",r.dataset.analyticsId)};return n.forEach(e=>{e.addEventListener("click",i,!0)}),()=>{n.forEach(e=>{e.removeEventListener("click",i,!0)})}},[e,r,t])}({enabled:!!r}),!r||!r.settings)return(0,i.FD)(i.FK,{children:[(0,i.Y)(T.R,{loading:a,description:w.z.REQUIRE_DATABRICKS_SESSION}),t]});if(l&&!r.settings.enableSqlService)return(0,i.Y)(N,{});void 0===(Number(r.settings.currentWorkspaceId)??W())&&L.iT.sev2(S.Es.DbsqlUi,"orgID_undefined_graphql_client");let I=(0,y.H4)();return(0,i.FD)(c.A.Provider,{value:r,children:[(0,i.Y)(B,{}),(0,i.FD)(C.XM,{client:I,children:[f,e]})]})}function W(){let e=b.Ay.search?.o;return s()(e)?e:Number(e)}},397136:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(610435),i=r(692738),a=r(375214);function s(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M3 1.75A.75.75 0 0 1 3.75 1h10.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V12.5H1V11h2V8.75H1v-1.5h2V5H1V3.5h2zm1.5.75v11H6v-11zm3 0v11h6v-11z",clipRule:"evenodd"})})}let o=(0,i.forwardRef)((e,t)=>(0,n.Y)(a.I,{ref:t,...e,component:s}));o.displayName="NotebookIcon";let l=o},433961:(e,t,r)=>{r.d(t,{K:()=>E});var n=r(610435),i=r(956935),a=r(557832),s=r.n(a),o=r(254292),l=r.n(o),c=r(465129),u=r.n(c),d=r(324844),p=r.n(d),m=r(692738),g=r(497895),h=r(445929),v=r(79128),f=r(955210),_=r(943844),y=r(382908),b=r(802582),k=r(513820),P=r(658345),A=r(806932);let C=new(r.n(A)()),I=C.renderer.rules.link_open||function(e,t,r,n,i){return i.renderToken(e,t,r)};C.renderer.rules.link_open=function(e,t,r,n,i){let a=e[t].attrIndex("target");if(a<0)e[t].attrPush(["target","_blank"]);else{let r=e[t].attrs;r&&(r[a][1]="_blank")}return I(e,t,r,n,i)};var L=r(754275),S=r(449929);let E=({message:e,messageInMarkdown:t=!1,compact:r=!1,copyTooltip:a="Copy",copyTextFunc:o,clearTooltip:c="Close",clearFunc:d,"data-testid":A,styles:I={},otherActions:E=[],otherActionsSize:T=0})=>{let w=(0,L.B)(),[F,x]=(0,m.useState)(!0),{theme:M,getPrefixedClassName:z}=(0,g.wn)(),Y=z("typography"),[R,D]=(0,m.useState)(!0),O=u()(p()(s()([o,d],l())))+1,$=M.spacing.xs,H=(0,m.useMemo)(()=>{let t=e.trim();if(r&&F)return t.split(/\r?\n/)[0];return t},[e,r,F]),B=(0,m.useCallback)(t=>{null!=t&&D(t.parentElement.offsetWidth<t.parentElement.scrollWidth||e.trim()!==H)},[e,H]),G={display:"flex",alignItems:"center",justifyContent:"center"},N={fontFamily:"monospace","::first-letter":{textTransform:"capitalize"},paddingBottom:M.spacing.sm},q={background:M.colors.backgroundSecondary,border:`solid 1px ${M.colors.border}`,borderRadius:M.legacyBorders.borderRadiusMd,padding:`${M.spacing.sm}px ${M.spacing.sm}px 0`,display:"flex",overflowY:"auto",flexWrap:"wrap"};return(0,n.FD)("div",{css:(0,i.AH)({...q,...I}),role:"alert","aria-labelledby":w,"data-testid":A,children:[(0,n.Y)(h.A,{css:(0,i.AH)("font-size:",20,"px;margin-right:",$,"px;color:",M.colors.textValidationDanger,";")}),(0,n.FD)("div",{css:(0,i.AH)("flex:1 1;transition:width 0.5s;.",Y,"{margin-bottom:0;}width:",`calc(100% - ${(24+$)*(1+O)}px - ${T}px)`,";"),children:[r&&R&&(0,n.Y)(v.$n,{componentId:"codegen_web-shared_src_error-message_errormessage.tsx_126",css:(0,i.AH)({...G,marginRight:$,float:"left"}),icon:F?(0,n.Y)(f.A,{}):(0,n.Y)(_.A,{}),"aria-label":F?"Expand":"Collapse",onClick:()=>{x(!F)},size:"small"})," ",(0,n.Y)(y.o,{children:r&&F?(0,n.Y)(y.o.Text,{id:w,ellipsis:!0,css:(0,i.AH)({...N,width:`calc(100% - ${24+$}px)`}),children:(0,n.Y)("span",{ref:B,children:t?(0,n.Y)(S.P,{children:C.renderInline(H)}):H})}):(0,n.Y)(y.o.Paragraph,{id:w,css:(0,i.AH)({...N,whiteSpace:"break-spaces"}),children:t?(0,n.Y)(S.P,{children:C.renderInline(H)}):H})})]}),E,o&&(0,n.Y)(b.p,{title:a,children:(0,n.Y)(v.$n,{componentId:"codegen_web-shared_src_error-message_errormessage.tsx_156",css:(0,i.AH)({...G,marginLeft:$}),icon:(0,n.Y)(k.A,{css:(0,i.AH)("color:",M.colors.textSecondary,";")}),onClick:o,"aria-label":"Copy",size:"small"})}),d&&(0,n.Y)(b.p,{title:c,children:(0,n.Y)(v.$n,{componentId:"codegen_web-shared_src_error-message_errormessage.tsx_176",css:(0,i.AH)({...G,marginLeft:$}),icon:(0,n.Y)(P.A,{css:(0,i.AH)("color:",M.colors.textSecondary,";")}),onClick:d,"aria-label":"Close",size:"small"})})]})}},449929:(e,t,r)=>{r.d(t,{P:()=>o});var n=r(610435),i=r(692738),a=r(497895),s=r(76995);let o=i.memo(i.forwardRef(function({children:e,compact:t=!1,css:r,...i},o){let{theme:l}=(0,a.wn)(),c={"h1, h2, h3, h4, h5, h6":{color:l.colors.textPrimary},blockquote:{padding:`${l.spacing.sm}px ${l.spacing.md}px`,margin:`0 0 ${l.spacing.md}px`,borderLeft:`5px solid ${l.colors.grey100}`,"& p:last-child, & ul:last-child, & ol:last-child":{marginBottom:0}}},u={"*:first-child":{marginTop:0},"*:last-child":{marginBottom:0},h1:{fontSize:l.typography.fontSizeMd,lineHeight:l.typography.lineHeightMd,fontWeight:l.typography.typographyBoldFontWeight,color:l.colors.textSecondary},"h2, h3, h4, h5, h6":{fontSize:l.typography.fontSizeSm,lineHeight:l.typography.lineHeightSm,fontWeight:l.typography.typographyBoldFontWeight,color:l.colors.textSecondary},"p, span, ul, ol":{fontSize:l.typography.fontSizeSm,lineHeight:l.typography.lineHeightSm,color:l.colors.textSecondary}};return(0,n.Y)("div",{...i,ref:o,css:{...c,...t?u:{},...r},dangerouslySetInnerHTML:{__html:(0,s.A)(e)}})}))},464830:(e,t,r)=>{r.d(t,{i:()=>a});var n=r(689017),i=r(711489);function a(e){let{VisualizationAction_Type:t,VisualizationSource_Type:r}=i.Uo;switch(e.metricName){case"VisualizationRenderEvent":return void(0,n.wi)({visualization_log:{action:t.RENDER,visualization_type:e.visualizationType,visualization_chart_type:s(e.visualizationChartType),renderer_type:function(e){let{RendererType_Type:t}=i.Uo;if(!e)return;switch(e){case"vega-lite":return t.VEGA_LITE;case"plotly":return t.PLOTLY;default:return t.TYPE_UNSPECIFIED}}(e.rendererType),num_marks:e.numMarks,num_series:e.numSeries,render_time_in_ms:e.renderTimeInMs,is_limited_marks:e.isLimitedMarks,usage_metadata:{source:r.REDASH,id:e.vizId,ui_source:e.sections.join(">")},regional_only_context_json:JSON.stringify(e.blob)}});case"VisualizationFrontendTransformEvent":return void(0,n.wi)({visualization_log:{action:t.TRANSFORM,visualization_type:e.visualizationType,visualization_chart_type:s(e.visualizationChartType),visualization_aggregation_functions:e.visualizationAggregationFunctions,is_backend_transform:e.isBackendTransform,input_data_column_count:e.inputDataColumnCount,input_data_row_count:e.inputDataRowCount,output_data_column_count:e.outputDataColumnCount,output_data_row_count:e.outputDataRowCount,transform_column_count:e.transformColumnCount,transform_time_in_ms:e.transformTimeInMs,transform_type:function(e){let{VisualizationLog_TransformType_Type:t}=i.Uo;if(!e)return;switch(e){case"Aggregation":return t.AGGREGATION;case"Filtering":return t.FILTERING;case"Filtering and Aggregation":return t.FILTERING_AND_AGGREGATION;default:return t.TYPE_UNSPECIFIED}}(e.transformType),usage_metadata:{source:r.REDASH,id:e.vizId,ui_source:e.sections.join(">")},regional_only_context_json:JSON.stringify(e.blob)}});case"VisualizationEditorSessionEvent":(0,n.wi)({visualization_log:{action:t.EDIT,visualization_type:e.visualizationType,visualization_chart_type:s(e.visualizationChartType),visualization_editor_session_id:e.visualizationEditorSessionId,event_type:e.visualizationEditorSessionEndType,visualization_charts_explored_in_editor:e.visualizationChartsExploredInEditor,visualization_time_spent_in_editor_in_ms:e.visualizationTimeSpentInEditorInMs,visualization_num_of_edits:e.visualizationNumOfEdits,usage_metadata:{source:r.REDASH,id:e.vizId,ui_source:e.sections.join(">")},regional_only_context_json:JSON.stringify(e.blob)}});return;case"VisualizationThirdPartyApiEvent":return void(0,n.wi)({visualization_log:{action:t.THIRD_PARTY_API_CALL,visualization_type:e.visualizationType,visualization_chart_type:s(e.visualizationChartType),visualization_num_of_third_party_api_calls:e.visualizationNumOfThirdPartyApiCalls,usage_metadata:{source:r.REDASH,id:e.vizId,ui_source:e.sections.join(">")},regional_only_context_json:JSON.stringify(e.blob)}})}}function s(e){let{VisualizationLog_VisualizationChartType_Type:t}=i.Uo;if(!e)return;switch(e){case"line":return t.LINE;case"column":return t.COLUMN;case"combo":return t.COMBO;case"area":return t.AREA;case"pie":return t.PIE;case"heatmap":return t.HEATMAP;case"scatter":return t.SCATTER;case"bubble":return t.BUBBLE;case"box":return t.BOX;case"histogram":return t.HISTOGRAM;case"custom":return t.CUSTOM;case"Table":return t.TABLE;case"Table Heatmap":return t.TABLE_HEATMAP;case"Table Col Heatmap":return t.TABLE_COL_HEATMAP;case"Table Row Heatmap":return t.TABLE_ROW_HEATMAP;case"Exportable TSV":return t.EXPORTABLE_TSV;default:return t.TYPE_UNSPECIFIED}}},465082:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(610435),i=r(692738),a=r(375214);function s(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a3.25 3.25 0 1 0 0 6.5A3.25 3.25 0 0 0 8 1M6.25 4.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M8 9a8.74 8.74 0 0 0-6.836 3.287.75.75 0 0 0-.164.469v1.494c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75v-1.494a.75.75 0 0 0-.164-.469A8.74 8.74 0 0 0 8 9m-5.5 4.5v-.474A7.23 7.23 0 0 1 8 10.5c2.2 0 4.17.978 5.5 2.526v.474z",clipRule:"evenodd"})})}let o=(0,i.forwardRef)((e,t)=>(0,n.Y)(a.I,{ref:t,...e,component:s}));o.displayName="UserIcon";let l=o},499348:(e,t,r)=>{let n;r.d(t,{A:()=>v});var i=r(610435),a=r(692738),s=r(724221),o=r(801938);function l(){return void 0===n&&(n=/[?&]embed=1/.test(r.g?.location?.search)),n}var c=r(783772),u=r.n(c),d=r(507204);function p({children:e}){(0,d.F)();let t=u()("databricks-application-wrapper");return(0,i.Y)("div",{className:t,"data-testid":"ApplicationWrapper",children:e})}let m=function({children:e,contentRef:t}){let{onReady:r}=(0,o.Xd)();return(0,a.useEffect)(()=>{r()},[r]),(0,i.Y)(p,{children:(0,i.Y)("div",{className:"dbsql-app-layout-content",ref:t,children:e})})};var g=r(858383);let h=a.lazy(()=>(()=>{let e=()=>r.e(86051).then(r.bind(r,86051));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(86051,"./EmbeddedApplicationLayout","lazy",e);return e()})());function v({children:e,bodyClass:t,resetPageScroll:r=!0}){let n,c,u=l()?h:m,{appRoot:d,portalContainer:p}=(0,o.Xd)(),f=(0,s.O)(),_=(n=(0,a.useRef)(null),c=(0,g.zy)(),(0,a.useEffect)(()=>{r&&n.current&&n.current.scrollTo(0,0)},[c.pathname,r]),n);return(0,a.useLayoutEffect)(()=>(f&&(d.classList.add("app-top-toolbar-spacing"),p.classList.add("app-top-toolbar-spacing")),t&&(d.classList.add(t),p.classList.add(t)),()=>{f&&(d.classList.remove("app-top-toolbar-spacing"),p.classList.remove("app-top-toolbar-spacing")),t&&(d.classList.remove(t),p.classList.remove(t))}),[t,d,p,f]),(0,i.Y)(u,{contentRef:l()?void 0:_,children:e})}},505544:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(610435),i=r(692738),a=r(375214);function s(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.727 3.695c-.225.192-.227.298-.227.305s.002.113.227.305c.223.19.59.394 1.108.58C4.865 5.256 6.337 5.5 8 5.5s3.135-.244 4.165-.615c.519-.186.885-.39 1.108-.58.225-.192.227-.298.227-.305s-.002-.113-.227-.305c-.223-.19-.59-.394-1.108-.58C11.135 2.744 9.663 2.5 8 2.5s-3.135.244-4.165.615c-.519.186-.885.39-1.108.58M13.5 5.94a7 7 0 0 1-.826.358C11.442 6.74 9.789 7 8 7s-3.442-.26-4.673-.703a7 7 0 0 1-.827-.358V8c0 .007.002.113.227.305.223.19.59.394 1.108.58C4.865 9.256 6.337 9.5 8 9.5s3.135-.244 4.165-.615c.519-.186.885-.39 1.108-.58.225-.192.227-.298.227-.305zM15 8V4c0-.615-.348-1.1-.755-1.447-.41-.349-.959-.63-1.571-.85C11.442 1.26 9.789 1 8 1s-3.442.26-4.673.703c-.613.22-1.162.501-1.572.85C1.348 2.9 1 3.385 1 4v8c0 .615.348 1.1.755 1.447.41.349.959.63 1.572.85C4.558 14.74 6.21 15 8 15s3.441-.26 4.674-.703c.612-.22 1.161-.501 1.571-.85.407-.346.755-.832.755-1.447zm-1.5 1.939a7 7 0 0 1-.826.358C11.442 10.74 9.789 11 8 11s-3.442-.26-4.673-.703a7 7 0 0 1-.827-.358V12c0 .007.002.113.227.305.223.19.59.394 1.108.58 1.03.371 2.502.615 4.165.615s3.135-.244 4.165-.615c.519-.186.885-.39 1.108-.58.225-.192.227-.298.227-.305z",clipRule:"evenodd"})})}let o=(0,i.forwardRef)((e,t)=>(0,n.Y)(a.I,{ref:t,...e,component:s}));o.displayName="DatabaseIcon";let l=o},507204:(e,t,r)=>{r.d(t,{F:()=>s});var n=r(692738),i=r(71135),a=r(208562);function s(){let{settings:e,loaded:t}=n.useContext(i.U),{branch:r}=e;return(0,n.useEffect)(()=>{if(!t)return;(0,a.e4)({branch:r})},[r,t]),{loaded:t}}},521198:(e,t,r)=>{r.d(t,{Ww:()=>u,sp:()=>c});var n=r(610435),i=r(34116),a=r.n(i),s=r(692738);let o=s.createContext({closeDialog:a()}),l={defaultVisible:!1,destroyOnClose:!0};function c(e,t,r){let i={...l,...r},[a,c]=(0,s.useState)(i.defaultVisible),[u,d]=(0,s.useState)(),p=(0,s.useCallback)(e=>{d(e),c(!0)},[]),m=(0,s.useCallback)(()=>{c(!1)},[]),g=(0,s.useMemo)(()=>({closeDialog:m}),[m]);return{dialogNode:(0,n.Y)(n.FK,{children:(!i.destroyOnClose||a)&&(0,n.Y)(o.Provider,{value:g,children:(0,n.Y)(e,{onCancel:m,...t,...u,visible:a})})}),openDialog:p,closeDialog:m}}function u(){return(0,s.useContext)(o)}},583971:(e,t,r)=>{r.d(t,{Ri:()=>d});var n=r(733337),i=r(641760),a=r(278983);function s(e,t,r,n,i,a,s){try{var o=e[a](s),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(n,i)}function o(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var a=e.apply(t,r);function o(e){s(a,n,i,o,l,"next",e)}function l(e){s(a,n,i,o,l,"throw",e)}o(void 0)})}}let l=[1,1,2,3,5,8,13,21],c=l.length;function u(e){return e instanceof i.XD}function d(e,t){return o(function*(e,t,r=1e3){let i=0,s=null;for(;i<c;)try{return yield(0,n.nr)(e,t)}catch(e){if(s=e,u(e)&&function(e){if(!u(e))return!1;return 429===e.response.status}(e))(0,a.y)("clientsideEvent",{eventType:"ApiFetchRetry",eventName:"RetryAttempt",retryCount:i}),yield function(e){return o(function*(e,t=1e3){let r=function(e,t=1e3){let r=Math.min(e,l.length-1);return l[r]*t}(e,t);return new Promise(e=>setTimeout(e,r))}).apply(this,arguments)}(i,r),i++;else break}throw u(s)&&i===c&&(0,a.y)("clientsideEvent",{eventType:"ApiFetchRetry",eventName:"MaxRetryAttemptReached",errorCode:s?.response?.status,retryCount:i}),s}).apply(this,arguments)}},615693:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(610435),i=r(692738),a=r(375214);function s(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1 1.75A.75.75 0 0 1 1.75 1h12.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75zm1.5.75v3h11v-3zm0 11V7H5v6.5zm4 0h3V7h-3zM11 7v6.5h2.5V7z",clipRule:"evenodd"})})}let o=(0,i.forwardRef)((e,t)=>(0,n.Y)(a.I,{ref:t,...e,component:s}));o.displayName="TableIcon";let l=o},702478:(e,t,r)=>{r.d(t,{D:()=>o,M:()=>l});var n=r(610435),i=r(692738),a=r(815797);let s=i.createContext({marketplaceRole:"consumer",isWorkspaceAdmin:!1,isMetastoreOwner:!1}),o=()=>i.useContext(s);function l({marketplaceRole:e="consumer",children:t}){let{isWorkspaceAdmin:r,isMetastoreOwner:o}=(0,a.ie)(),c=i.useMemo(()=>({marketplaceRole:e,isWorkspaceAdmin:r,isMetastoreOwner:o}),[e,r,o]);return(0,n.Y)(s.Provider,{value:c,children:t})}},733337:(e,t,r)=>{r.d(t,{Ky:()=>u,Ur:()=>d,nr:()=>c});var n=r(583971),i=r(641760),a=r(441535),s=r(19123);function o(e,t,r,n,i,a,s){try{var o=e[a](s),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(n,i)}function l(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var a=e.apply(t,r);function s(e){o(a,n,i,s,l,"next",e)}function l(e){o(a,n,i,s,l,"throw",e)}s(void 0)})}}function c(e,t){return l(function*(){let r=yield(0,s.h)(e,t);if(!r.ok){let t;try{t=yield r.json()}catch(e){}throw new i.XD(e,r,t)}return yield r.json()})()}function u(e,t,r,i,s){return l(function*(){let o,l={response:[],next_page_token:void 0},c=(0,a.W)("databricks.fe.uc.defaultPaginationWindowSize",0),u=void 0!==i?i:c;do{let i=r?.useCentralPagination?{"pagination_context.max_results":u,...r?.queryParameters}:{[s??"max_results"]:u,...r?.queryParameters};o&&(r?.useCentralPagination?i["pagination_context.page_token"]=o:i.page_token=o);let a=new URLSearchParams(i),c=`${e}?${a}`;try{let e=yield(0,n.Ri)(c,r);if(!e)break;let i=yield t(e);i&&l.response.push(...i),r?.useCentralPagination?(l.next_page_token=e.pagination?.next_page_token,o=e.pagination?.next_page_token):(l.next_page_token=e.next_page_token,o=e.next_page_token)}catch(e){throw e}}while(o);return l.response})()}function d(e){return e instanceof i.XD&&404===e.response.status&&"METASTORE_DOES_NOT_EXIST"===e.response.data.error_code}},733845:(e,t,r)=>{r.d(t,{O:()=>s});var n=r(686560),i=r(689262),a=r(441535);function s(){let e=(0,i.b)("unityCatalogServiceEnabled",(0,n.d)("unityCatalogServiceEnabled",!1),()=>(0,a.W)("databricks.unitycatalog.enableUnityCatalogService",!1)),t=(0,n.d)("isMetastoreInstalled_new",!1);return e&&t}},754275:(e,t,r)=>{r.d(t,{B:()=>i});var n=r(910825);function i(){return`id-${(0,n.j)()}`}},786582:(e,t,r)=>{r.d(t,{IU:()=>O,DG:()=>$});var n=r(610435),i=r(359419),a=r.n(i),s=r(692738),o=r(306357),l=r(65061),c=r(141078),u=r(299873),d=r(223689);let p=(0,c.J1)`
  query MarketplaceGetPublishedListingForConsumer(
    $input: MarketplaceGetPublishedListingForConsumerInput!
    $includeProviderSummary: Boolean = false
  ) @component(name: "LakehouseCollaboration.Marketplace") {
    marketplaceGetPublishedListingForConsumer(input: $input) {
      listing {
        ...ListingFragment
      }
    }
  }
  ${u.Xc}
`;function m(e,t){let r=(0,d.I)(),{data:n,...i}=(0,l.IT)(p,{variables:{input:{id:e}},fetchPolicy:"cache-and-network",...t});return{listing:(0,s.useMemo)(()=>{let e=n?.marketplaceGetPublishedListingForConsumer?.listing;if(!e)return e;return r([e])[0]},[n,r]),...i}}function g(e,t){let{getPartnerIdFromMarketplaceListingID:r,getPartnerAsListing:n,isPartnerConnectLoading:i}=(0,o.qZ)(),a=r(e),s=m(e,{...t,skip:!e||!!a});if(a&&e)return{listing:n(a,e),loading:i,error:null};return s}var h=r(441535);let v=(0,c.J1)`
  query MarketplaceGetPublishedProviderForConsumer(
    $input: MarketplaceGetPublishedProviderForConsumerInput!
    $includeProviderIcons: Boolean = true
  ) @component(name: "LakehouseCollaboration.Marketplace") {
    marketplaceGetPublishedProviderForConsumer(input: $input) {
      provider {
        ...ProviderFragment
      }
    }
  }
  ${u.uW}
`;function f(e,t){let r=(0,h.W)("databricks.fe.marketplace.enableProviderIconsEndpoints",!1),{data:n,...i}=(0,l.IT)(v,{variables:{includeProviderIcons:!r,input:{id:e}},fetchPolicy:"cache-and-network",skip:!e,...t});return{provider:n?.marketplaceGetPublishedProviderForConsumer?.provider??void 0,...i}}function _(e,t){let{getPartnerIdFromMarketplaceProviderID:r,getPartnerAsProvider:n,isPartnerConnectLoading:i}=(0,o.qZ)(),a=r(e),s=f(e,{...t,skip:!e||!!a});if(a&&e)return{provider:n(a,e),loading:i,error:null};return s}let y=(0,c.J1)`
  query MarketplaceBatchGetListings(
    $input: MarketplaceBatchGetListingsRequestInput!
    $includeProviderSummary: Boolean = false
  ) @component(name: "LakehouseCollaboration.Marketplace") {
    marketplaceBatchGetListings(input: $input) {
      listings {
        ...ListingFragment
      }
    }
  }
  ${u.Xc}
`;function b(e,t){let r=(0,d.I)(),{data:n,...i}=(0,l.IT)(y,{variables:{input:{ids:e}},...t});return{listings:(0,s.useMemo)(()=>r(n?.marketplaceBatchGetListings?.listings??[]),[n,r]),...i}}let k=(0,c.J1)`
  query MarketplaceBatchGetProviders(
    $input: MarketplaceBatchGetProvidersRequestInput!
    $includeProviderIcons: Boolean = true
  ) @component(name: "LakehouseCollaboration.Marketplace") {
    marketplaceBatchGetProviders(input: $input) {
      providers {
        ...ProviderFragment
      }
    }
  }
  ${u.uW}
`;function P(e,t){let r=(0,h.W)("databricks.fe.marketplace.enableProviderIconsEndpoints",!1),{data:n,...i}=(0,l.IT)(k,{variables:{includeProviderIcons:!r,input:{ids:e}},...t});return{providers:(0,s.useMemo)(()=>n?.marketplaceBatchGetProviders?.providers??[],[n]),...i}}var A=r(200356),C=r(559706);let I=(0,c.J1)`
  query MarketplaceGetHomepageSections(
    $assetsOverride: [MarketplaceAssetType!]
    $databricksProviderId: String!
    $includeProviderSummary: Boolean = false
    $includeAppsSection: Boolean = false
  ) @component(name: "LakehouseCollaboration.Marketplace") {
    DATABRICKS: marketplaceGetPublishedListingsForConsumer(
      input: {
        externalApiVersion: { major: 2, minor: 1 }
        pageSize: 5
        providerIds: [$databricksProviderId]
        assets: $assetsOverride
      }
    ) {
      listings {
        ...ListingFragment
      }
    }
    EXCHANGES: marketplaceGetPublishedListingsForConsumer(
      input: {
        externalApiVersion: { major: 2, minor: 1 }
        pageSize: 5
        isPrivateExchange: true
        assets: $assetsOverride
      }
    ) {
      listings {
        ...ListingFragment
      }
    }
    FINANCIAL: marketplaceGetPublishedListingsForConsumer(
      input: {
        externalApiVersion: { major: 2, minor: 1 }
        pageSize: 5
        categories: [FINANCIAL]
        assets: $assetsOverride
      }
    ) {
      listings {
        ...ListingFragment
      }
    }
    FREE: marketplaceGetPublishedListingsForConsumer(
      input: { externalApiVersion: { major: 2, minor: 1 }, pageSize: 5, isFree: true, assets: $assetsOverride }
    ) {
      listings {
        ...ListingFragment
      }
    }
    HEALTH: marketplaceGetPublishedListingsForConsumer(
      input: { externalApiVersion: { major: 2, minor: 1 }, pageSize: 5, categories: [HEALTH], assets: $assetsOverride }
    ) {
      listings {
        ...ListingFragment
      }
    }
    MEDIA: marketplaceGetPublishedListingsForConsumer(
      input: { externalApiVersion: { major: 2, minor: 1 }, pageSize: 5, categories: [MEDIA], assets: $assetsOverride }
    ) {
      listings {
        ...ListingFragment
      }
    }
    MODELS: marketplaceGetPublishedListingsForConsumer(
      input: { externalApiVersion: { major: 2, minor: 1 }, pageSize: 5, assets: [ASSET_TYPE_MODEL] }
    ) {
      listings {
        ...ListingFragment
      }
    }
    NEW: marketplaceGetPublishedListingsForConsumer(
      input: { externalApiVersion: { major: 2, minor: 1 }, pageSize: 5, sortBy: SORT_BY_DATE, assets: $assetsOverride }
    ) {
      listings {
        ...ListingFragment
      }
    }
    POPULAR: marketplaceGetPublishedListingsForConsumer(
      input: {
        externalApiVersion: { major: 2, minor: 1 }
        pageSize: 5
        sortBy: SORT_BY_POPULARITY
        isAscending: false
        excludedProviderIds: [$databricksProviderId]
        assets: $assetsOverride
      }
    ) {
      listings {
        ...ListingFragment
      }
    }
    RETAIL: marketplaceGetPublishedListingsForConsumer(
      input: { externalApiVersion: { major: 2, minor: 1 }, pageSize: 5, categories: [RETAIL], assets: $assetsOverride }
    ) {
      listings {
        ...ListingFragment
      }
    }
    STAFF_PICKS: marketplaceGetPublishedListingsForConsumer(
      input: { externalApiVersion: { major: 2, minor: 1 }, pageSize: 5, isStaffPick: true, assets: $assetsOverride }
    ) {
      listings {
        ...ListingFragment
      }
    }
    APPS: marketplaceGetPublishedListingsForConsumer(
      input: { externalApiVersion: { major: 2, minor: 1 }, pageSize: 5, assets: [ASSET_TYPE_APP] }
    ) @include(if: $includeAppsSection) {
      listings {
        ...ListingFragment
      }
    }
    TRANSPORTATION: marketplaceGetPublishedListingsForConsumer(
      input: {
        externalApiVersion: { major: 2, minor: 1 }
        pageSize: 5
        categories: [TRANSPORTATION_AND_LOGISTICS]
        assets: $assetsOverride
      }
    ) {
      listings {
        ...ListingFragment
      }
    }
  }
  ${u.Xc}
`;function L(e){let t=(0,h.W)("databricks.fe.marketplace.databricksProviderId",""),r=(0,h.W)("databricks.fe.marketplace.enableProviderSummaryInHomepage",!1),n=(0,C.UC)(),i=(0,d.I)(),a=n?[]:Object.values(A.gBq).filter(e=>e!==A.gBq.ASSET_TYPE_APP),{data:o,...c}=(0,l.IT)(I,{...e,variables:{assetsOverride:a,databricksProviderId:t,includeProviderSummary:r,includeAppsSection:(0,C.Yq)()}});return{data:(0,s.useMemo)(()=>{if(!o)return o;let e={};for(let[t,r]of Object.entries(o))r&&Array.isArray(r.listings)?e[t]={...r,listings:i(r.listings)}:e[t]=r;return e},[o,i]),...c}}var S=r(916419),E=r(488690);let T=(0,c.J1)`
  query MarketplaceGetPublishedListingsForConsumer(
    $input: MarketplaceGetPublishedListingsForConsumerInput = {}
    $includeProviderSummary: Boolean = false
  ) @component(name: "LakehouseCollaboration.Marketplace") {
    marketplaceGetPublishedListingsForConsumer(input: $input) {
      listings {
        ...ListingFragment
      }
      apiError {
        ...ApiErrorFragment
      }
    }
  }
  ${u.Xc}
  ${E.vi}
`;function w(e={}){let t=(0,C.UC)(),r=(0,d.I)(),{data:n,...i}=(0,l.IT)(T,e);return{listings:(0,s.useMemo)(()=>{let e=n?.marketplaceGetPublishedListingsForConsumer?.listings??[];return r(t?e:e.filter(e=>!e.detail?.assets?.includes(A.gBq.ASSET_TYPE_APP)))},[n,t,r]),...i}}function F(e,t={}){return w({variables:{input:{externalApiVersion:{major:2,minor:1},...e}},...t})}let x=(0,c.J1)`
  query MarketplaceListPublishedProvidersForConsumer(
    $input: MarketplaceListPublishedProvidersForConsumerInput = {}
    $includeProviderIcons: Boolean = true
  ) @component(name: "LakehouseCollaboration.Marketplace") {
    marketplaceListPublishedProvidersForConsumer(input: $input) {
      providers {
        ...ProviderFragment
      }
      apiError {
        ...ApiErrorFragment
      }
    }
  }
  ${u.uW}
  ${E.vi}
`;function M({includePartnerIntegrations:e,...t}={}){let r=(0,h.W)("databricks.fe.marketplace.enableProviderIconsEndpoints",!1),{data:n,...i}=(0,l.IT)(x,{fetchPolicy:"cache-first",...t,variables:{includeProviderIcons:!r,...t?.variables}}),{getAllPartnersAsProviders:a,isPartnerConnectEnabled:c}=(0,o.qZ)(),{providers:u,loading:d}=(0,s.useMemo)(()=>{let t=n?.marketplaceListPublishedProvidersForConsumer?.providers??[];if(e&&c&&t.length>0){let{loading:e,allPartnersAsProviders:r}=a();return{providers:[...t,...r],loading:i.loading||e}}return{providers:t,loading:i.loading}},[n?.marketplaceListPublishedProvidersForConsumer?.providers,a,e,c,i.loading]);return{providers:u,...i,loading:d}}function z(e,t={}){return M({variables:{input:{externalApiVersion:{major:2,minor:1},...e}},...t})}let Y=(0,c.J1)`
  query MarketplaceBatchGetProviderIconsForConsumer($input: MarketplaceBatchGetProviderIconsForConsumerRequestInput!)
  @component(name: "LakehouseCollaboration.Marketplace") {
    marketplaceBatchGetProviderIconsForConsumer(input: $input) {
      icons {
        ...ProviderIconFragment
      }
      apiError {
        ...ApiErrorFragment
      }
    }
  }
  ${E.FO}
  ${E.vi}
`;function R(e){return(0,c._l)(Y,e)}let D=s.createContext({isOpenMarketplace:!1});function O({children:e}){let{isPartnerConnectEnabled:t}=(0,o.qZ)();return(0,n.Y)(D.Provider,{value:{isOpenMarketplace:!1,useBatchGetListingsQuery:b,useBatchGetProviderIconsQuery:R,useBatchGetProvidersQuery:P,useGetHomepageSectionsQuery:L,useGetInstalledIdsQuery:S.e,useGetPaginatedListingsForConsumerQuery:F,useGetPublishedListingForConsumerQuery:t?g:m,useGetPublishedListingsForConsumerQuery:w,useGetPublishedProviderForConsumerQuery:t?_:f,useListPaginatedProvidersForConsumerQuery:z,useListPublishedProvidersForConsumerQuery:M},children:e})}function $(){let e=s.useContext(D);if(a()(e))throw Error("useMarketplace must be used within a MarketplaceContext");return e}},802582:(e,t,r)=>{r.d(t,{p:()=>y});var n=r(610435),i=r(956935),a=r(889486),s=r(778529),o=r.n(s),l=r(91958),c=r.n(l),u=r(692738),d=r(429608),p=r(497895),m=r(639712),g=r(863802);let h=["hover","focus"],v=c()(e=>({backgroundColor:"#2F3941",lineHeight:"22px",padding:"4px 8px",boxShadow:e.general.shadowLow,...(0,m.WO)(e)})),f=c()(e=>({zIndex:e.options.zIndexBase+70}),e=>String(e.options.zIndexBase)),_=c()(e=>(0,i.AH)({...(0,d.Cx)(e)})),y=({children:e,title:t,placement:r="top",dataTestId:i,dangerouslySetAntdProps:s,silenceScreenReader:l=!1,useAsLabel:c=!1,...y})=>{let{theme:b}=(0,p.wn)(),k=(0,u.useRef)(null),P=(0,g.Y)("dubois-tooltip-component-"),A=s?.id?s?.id:P;if(!t)return(0,n.Y)(u.Fragment,{children:e});let C=l?{}:{"aria-live":"polite","aria-relevant":"additions"};i&&(C["data-testid"]=i);let I=t&&u.isValidElement(t)?u.cloneElement(t,C):(0,n.Y)("span",{...C,children:t}),L={"aria-hidden":!1},S=e=>{if(!k.current||e.currentTarget.hasAttribute("aria-describedby")||e.currentTarget.hasAttribute("aria-labelledby"))return;A&&(e.currentTarget.setAttribute("aria-live","polite"),c?e.currentTarget.setAttribute("aria-labelledby",A):e.currentTarget.setAttribute("aria-describedby",A))},E=e=>{if(!k||!e.currentTarget.hasAttribute("aria-describedby")&&!e.currentTarget.hasAttribute("aria-labelledby"))return;c?e.currentTarget.removeAttribute("aria-labelledby"):e.currentTarget.removeAttribute("aria-describedby"),e.currentTarget.removeAttribute("aria-live")},T={onMouseEnter:e=>{S(e)},onMouseLeave:e=>{E(e)},onFocus:e=>{S(e)},onBlur:e=>{E(e)}},w=u.isValidElement(e)?u.cloneElement(e,{...L,...T,...e.props}):o()(e)?e:(0,n.Y)("span",{...L,...T,children:e}),{overlayInnerStyle:F,overlayStyle:x,...M}=s||{},z=F?{backgroundColor:"#2F3941",lineHeight:"22px",padding:"4px 8px",boxShadow:b.general.shadowLow,...F,...(0,m.WO)(b)}:v(b),Y=x?{zIndex:b.options.zIndexBase+70,...x}:f(b);return(0,n.Y)(d.wC,{children:(0,n.Y)(a.A,{id:A,ref:k,title:I,placement:r,trigger:h,overlayInnerStyle:z,overlayStyle:Y,css:_(b.options.enableAnimation),...M,...y,children:w})})}},811747:(e,t,r)=>{r.d(t,{g:()=>_});var n=r(610435),i=r(692738),a=r(63837),s=r(357403),o=r(627714),l=r(224156);r(402217),r(342411);var c=r(205048),u=r(929117),d=r(858383),p=r(263190);r(499348);var m=r(3393),g=r(464830);function h(e){let{error:t,handleError:r,clearError:a}=(0,m.fj)(),{pathname:s,search:o,hash:l}=(0,d.zy)();if((0,i.useEffect)(a,[a,s,o,l]),t)return(0,n.Y)(m.Ay,{error:t});return(0,n.FD)(n.FK,{children:[e.render?.(r),e.children]})}function v({render:e,children:t,routeKey:r}){return(0,o.x8)(),(0,n.Y)(l.j$,{render:s=>(0,n.Y)(p.JG,{recordEvent:g.i,flags:s,children:(0,n.Y)(a.Z,{children:(0,n.Y)(i.Fragment,{children:(0,n.Y)(h,{render:e,children:t})},r)})})})}function f({children:e}){return(0,n.Y)(i.Suspense,{fallback:(0,n.Y)(c.R,{loading:!0,description:u.z.REQUIRE_REDASH_USER_SESSION}),children:e})}function _({children:e,id:t,render:r}){return(0,n.Y)(s.RequireDatabricksSession,{children:(0,n.Y)(f,{children:(0,n.Y)(v,{routeKey:t,render:r,children:e})})})}},815797:(e,t,r)=>{r.d(t,{G0:()=>m,Io:()=>g,ie:()=>f,jo:()=>h,kY:()=>v,qf:()=>p});var n,i,a=r(692738),s=r(936985),o=r(529484),l=r(641760),c=r(150190),u=r(820628),d=r(786582),p=((n={}).ConsumerDataRequestAbandon="consumerDataRequestAbandon",n.ConsumerDataRequestFailure="consumerDataRequestFailure",n.ConsumerDataRequestStart="consumerDataRequestStart",n.ConsumerDataRequestSuccess="consumerDataRequestSuccess",n.ConsumerListingPageLoad="consumerListingPageLoad",n.ConsumerOpenData="consumerOpenData",n.ConsumerProviderPageLoad="consumerProviderPageLoad",n.ConsumerSearch="consumerSearch",n.MarketplacePageLoad="marketplacePageLoad",n.SurveyClicked="surveyClicked",n.awsLoginClicked="awsLoginClicked",n.azureLoginClicked="azureLoginClicked",n.gcpLoginClicked="gcpLoginClicked",n.getInstantAccessClicked="getInstantAccessClicked",n.listingCardClicked="listingCardClicked",n.tryForFreeClicked="tryForFreeClicked",n),m=((i={}).ActivePersona="active_persona",i.DataCategory="data_category",i.DataType="data_type",i.HttpStatusCode="http_status_code",i.IsFree="is_free",i.IsMetastoreOwner="is_metastore_owner",i.IsUCEnabled="is_uc_enabled",i.IsWorkspaceAdmin="is_workspace_admin",i.ListingFulfillmentType="listing_fulfillment_type",i.ListingId="listing_id",i.MarketplaceRole="marketplace_role",i.MetastoreId="metastore_id",i.MarketplaceModelTask="marketplace_model_task",i.PageDisabled="page_disabled",i.ProviderId="provider_id",i.ResultCount="count_search_results",i.SearchInput="search_input",i.SurveyId="survey_id",i.TouchedFields="touched_fields",i);function g(){let e,{isWorkspaceAdmin:t,isMetastoreOwner:r}=f(),{isOpenMarketplace:n}=(0,d.DG)(),i=(e=(0,l.ei)(),(0,a.useCallback)(t=>{if(!t.startsWith("consumer"))return null;return{is_uc_enabled:e}},[e])),s=(0,a.useMemo)(()=>({marketplace_role:"consumer",is_workspace_admin:t,is_metastore_owner:r}),[r,t]),c=(0,a.useCallback)((e,t)=>{let r=i(e);(0,o.Z)(e,"marketplace",void 0,{...s,...r,...t})},[s,i]);return{recordMarketplaceEvent:n?()=>{}:c,commonTags:s}}function h(e){let t,{commonTags:r}=g(),{isLoading:n}=f(),{isOpenMarketplace:i}=(0,d.DG)(),s=(0,a.useRef)(""),l=(t=(0,u.UA)(),t?.[0]?.pageId||"unknown"),c=(0,a.useCallback)(()=>{let t={...r,page_disabled:e,currentRouteId:l};if(i)return;n||l===s.current||((0,o.Z)("view","page",l,t),s.current=l)},[r,l,e,i,n]);(0,a.useEffect)(()=>{c()},[c])}function v(e,t){let{recordMarketplaceEvent:r}=g(),{isOpenMarketplace:n}=(0,d.DG)(),{isLoading:i}=f(),s=(0,a.useRef)(!1),o=(0,a.useCallback)(()=>{if(n)return;i||s.current||(r(e,t),s.current=!0)},[e,t,n,i,r]);(0,a.useEffect)(()=>{o()},[o])}function f(){let e=(0,s.Ay)("isAdmin"),t=(0,l.ei)(),r=(0,c.H)({refetchOnWindowFocus:!1,enabled:t});return{isMetastoreOwner:r.data?.is_metastore_admin??!1,isWorkspaceAdmin:e,isLoading:r.isLoading}}},823825:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(610435),i=r(692738),a=r(375214);function s(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("g",{clipPath:"url(#ModelsIcon_svg__a)",children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M0 4.75a2.75 2.75 0 0 1 5.145-1.353l4.372-.95a2.75 2.75 0 1 1 3.835 2.823l.282 2.257a2.75 2.75 0 1 1-2.517 4.46l-2.62 1.145.003.118a2.75 2.75 0 1 1-4.415-2.19L3.013 7.489A2.75 2.75 0 0 1 0 4.75M2.75 3.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m2.715 1.688q.027-.164.033-.333l4.266-.928a2.75 2.75 0 0 0 2.102 1.546l.282 2.257c-.377.165-.71.412-.976.719zM4.828 6.55a2.8 2.8 0 0 1-.413.388l1.072 3.573q.13-.012.263-.012c.945 0 1.778.476 2.273 1.202l2.5-1.093a2.8 2.8 0 0 1 .012-.797zM12 10.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M5.75 12a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M11 2.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0",clipRule:"evenodd"})}),(0,n.Y)("defs",{children:(0,n.Y)("clipPath",{children:(0,n.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let o=(0,i.forwardRef)((e,t)=>(0,n.Y)(a.I,{ref:t,...e,component:s}));o.displayName="ModelsIcon";let l=o},896388:(e,t,r)=>{r.d(t,{a:()=>o,f:()=>s});var n=r(141078),i=r(186694),a=r(488690);let s=(0,n.J1)`
  query MarketplaceListProviders @component(name: "LakehouseCollaboration.Marketplace") {
    marketplaceListProviders(input: {}) {
      providers {
        businessContactEmail
        description
        iconFilePath
        darkModeIconFilePath
        id
        isFeatured
        name
        publishedBy
        supportContactEmail
        companyWebsiteLink
        iconFileId
        darkModeIconFileId
      }
      apiError {
        ...ApiErrorFragment
      }
    }
  }
  ${a.vi}
`;function o(e){let{data:t,...r}=(0,i.T)(s,{...e});return{providers:t?.marketplaceListProviders?.providers??void 0,...r}}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/63760.065707130a.chunk.js.map