"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[77790],{62521:(e,t,a)=>{a.d(t,{_:()=>r});var n=a(610435);function r({children:e,...t}){return(0,n.Y)("div",{...t,css:{flex:1,maxWidth:"100%",overflow:"hidden"},children:e})}},118675:(e,t,a)=>{a.d(t,{p:()=>r});var n,r=((n={}).ConfigureDataAccess="1",n.GrantPermissions="2",n.ReviewSQLWarehouses="3",n.FirstQuery="4",n.SampleDashboards="5",n.ExploreData="6",n)},149601:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"m8.03 1 7.03 7.03L14 9.091l-5.22-5.22v11.19h-1.5V3.87l-5.22 5.22L1 8.031z",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="ArrowUpIcon";let l=s},185793:(e,t,a)=>{a.d(t,{DB:()=>o,JY:()=>l,UC:()=>u,g7:()=>p,mg:()=>d});var n,r=a(6e4),i=a(732735),o=((n={}).FIRST_QUERY="tutorialYourFirstQuery",n.DCL="tutorialDCLQuery",n.CREATE_TABLE="onboardingCreateTable",n);let s={tutorialYourFirstQuery:e=>{let t=e.formatMessage({id:"0yqbdd",defaultMessage:"We've given you a sample query below to help get started."}),a=e.formatMessage({id:"C94m3f",defaultMessage:'Just hit "Run" to run the query and get your results.'});return new i.X({query:`-- ${t}
-- ${a}
SELECT
  concat(pickup_zip, '-', dropoff_zip) as route,
  AVG(fare_amount) as average_fare
FROM
  \`samples\`.\`nyctaxi\`.\`trips\`
GROUP BY
  1
ORDER BY
  2 DESC
LIMIT 1000`,name:"New Sample Query",...(0,i.D)(!1)})},tutorialDCLQuery:e=>{let t="user@example.com",a=e.formatMessage({id:"WxJB1+",defaultMessage:"Data Access Control"}),n=e.formatMessage({id:"B0ysLQ",defaultMessage:"Example: enable the user {userEmail} to access all tables in the default database"},{userEmail:t}),r=e.formatMessage({id:"oyZ6vb",defaultMessage:"Recommendation: Databricks recommends setting permissions for groups of users"},{userEmail:t});return new i.X({query:`-- ${a}

-- ${n}
-- REVOKE ALL PRIVILEGES ON DATABASE default FROM \`${t}\`;
-- GRANT USAGE, SELECT, READ_METADATA ON DATABASE default TO \`${t}\`;
-- SHOW GRANT \`${t}\` ON DATABASE default;

-- ${r}
-- GRANT USAGE, SELECT, READ_METADATA ON DATABASE default TO \`users\`;
SHOW GRANT ON DATABASE default;`,name:"New Sample DCL Query",...(0,i.D)(!1)})},onboardingCreateTable:e=>{let t=[e.formatMessage({id:"VoXSw0",defaultMessage:"The query below creates a new table."}),e.formatMessage({id:"jt9tAv",defaultMessage:'Just hit "Run" to run the query or make any adjustments you like.'})];return new i.X({query:`${t.map(e=>`-- ${e}`).join("\n")}
      -- Creating a sample diamonds table
      CREATE TABLE {catalogName}.{schemaName}.diamonds (
          carat FLOAT,
          cut VARCHAR(10),
          color CHAR(1),
          clarity VARCHAR(4)
      );

      -- Inserting five rows of data
      INSERT INTO {catalogName}.{schemaName}.diamonds (carat, cut, color, clarity) VALUES
          (0.23, 'Ideal', 'E', 'SI2'),
          (0.21, 'Premium', 'E', 'SI1'),
          (0.23, 'Good', 'E', 'VS1'),
          (0.29, 'Premium', 'I', 'VS2'),
          (0.31, 'Good', 'J', 'SI2');
  `,...(0,i.D)(!1)})}};function l(e,t){return s[e](t)}let c="sample";function d(){return r.Ay.search?.[c]}function u(e){let t=r.Ay.search?.o;if(!t)return`${c}=${e}`;return`${c}=${e}&o=${t}`}let p={[c]:null}},233287:(e,t,a)=>{a.d(t,{d:()=>o});var n=a(610435),r=a(956935),i=a(497895);function o({color:e}){let{theme:t}=(0,i.wn)(),a=(0,r.AH)("border-bottom:",t.general.borderWidth,"px solid ",e??t.colors.border,";");return(0,n.Y)("div",{css:a})}},234383:(e,t,a)=>{a.d(t,{$i:()=>l,Wn:()=>d,lh:()=>g,of:()=>u,qL:()=>m,uK:()=>p,wI:()=>c});var n=a(419374),r=a(441535);if(13057==a.j)var i=a(707076);var o=a(805287),s=a(889885);let l=()=>{let e=(0,o.gz)((0,s.CV)());return!!(n.p.isProjectTypeInWorkspaceEnabled()&&(e.workspace.allowed||e["machine-learning"].allowed))},c=()=>(0,i.Kt)()&&(0,i.MH)()&&(0,r.W)("databricks.fe.filebrowser.enableFilebrowserSharedWithMePage",!1),d=()=>(0,r.W)("databricks.fe.filebrowser.disableDatabricksYmlFileName",!1),u=()=>(0,r.W)("databricks.fe.filebrowser.enableWorkspaceAssetMetadataPanel",!1),p=()=>(0,r.W)("databricks.fe.filebrowser.enableWorkspaceNodeActionsMenuReorg",!1),m=()=>(0,r.W)("databricks.fe.ub.enableUnifiedBrowseSidebar",!1),g=()=>(0,r.W)("com.databricks.projects.enableGitFolderWithoutRemote",!1)},290766:(e,t,a)=>{a.d(t,{T:()=>l});var n=a(65061),r=a(960718),i=a(141078);let o=(0,i.J1)`
  query LakehouseStatesForRedash @component(name: "DBSQLX.WareHouseUI") {
    lakehouses {
      edges {
        node {
          ...LakehouseListStateFragment
        }
        cursor
      }
    }
  }
  ${r.xz}
`,s=(0,i.J1)`
  query LakehouseMinimalStatesForRedash @component(name: "DBSQLX.WareHouseUI") {
    lakehouses {
      edges {
        node {
          id
          size
          state
          disableUnityCatalog
          health {
            status
          }
          enableDatabricksCompute
          warehouseType
        }
        cursor
      }
    }
  }
`,l=(e,t)=>(0,n.IT)(t?s:o,{fetchPolicy:"cache-and-network",...e})},357403:(e,t,a)=>{a.r(t),a.d(t,{RequireDatabricksSession:()=>q});var n,r=a(610435),i=a(813342),o=a.n(i),s=a(692738),l=a(3393),c=a(437178),d=a(93353),u=a(441560),p=a(583075),m=a(680519),g=a.n(m),f=a(801938),h=a(341300),b=((n=b||{}).CLICK="fe_interaction_click",n),v=a(521198),E=a(605321),_=a(6e4),y=a(624704),k=a(342411),A=a(605945),T=a(141078),S=a(278983),I=a(886100),L=a(22191),D=a(747129),w=a(205048),C=a(929117),x=a(956935),R=a(497895),P=a(694762),Y=a(465082),F=a(382908),N=a(955210);let M=function({workspaces:e,domainSuffix:t,closeDialogOnSelect:a,onClose:n,...i}){let o=(0,k.tz)(),{theme:s}=(0,R.wn)(),{closeDialog:l}=(0,v.Ww)();return(0,r.Y)(P.aF,{...i,title:o.formatMessage({id:"Eb3/PS",defaultMessage:"Choose Workspace"}),dangerouslySetAntdProps:{closable:!1,maskClosable:!1},footer:null,children:(0,r.Y)("ul",{className:"legacy-ul",style:{listStyleType:"none",padding:0},children:e?.map(e=>{let i={};if(a)i.onClick=()=>{l(),n?.(e)};else{let a;(a=new URL(window.location.href)).searchParams.set("o",`${e.orgId}`),a.host=(e.useRegionalUrl?e.azureLocation:e.deploymentName)+"."+t,a.protocol="https",i.href=a.toString()}let o=e.name;return e.owner&&(o+=" ("+e.owner+")"),(0,r.Y)("a",{title:o,...i,"data-skip-router":!0,children:(0,r.Y)(x.Z2,{children:({css:t})=>(0,r.FD)("li",{className:t({display:"flex",alignItems:"center",padding:s.spacing.md,gap:s.spacing.md,"&:hover,&:focus":{backgroundColor:s.colors.actionDefaultBackgroundHover}}),children:[(0,r.Y)(Y.A,{}),(0,r.FD)("div",{style:{flexGrow:1},children:[(0,r.Y)(F.o.Title,{style:{marginTop:0},level:4,children:e.name}),(0,r.Y)(F.o.Text,{color:"secondary",children:e.owner})]}),(0,r.Y)(N.A,{})]})})},`${e.orgId}`)})})})};var $=a(994393),z=a(506645);function O(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function B(){let e=(0,$.useMutation)(()=>{var e;return(e=function*(){yield u.A.refreshDatabricksSession()},function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){O(i,n,r,o,s,"next",e)}function s(e){O(i,n,r,o,s,"throw",e)}o(void 0)})})()});return(0,z.sc)({name:"DbsqlRefreshSessionPolicy",handleCsrfHasExpired:()=>{if(e.isLoading)return;e.mutate()},handleSessionHasExpired:()=>{},handleUserHasLoggedIn:()=>{},handleUserHasLoggedOut:()=>{}}),null}var W=a(675298);let U=()=>{s.useEffect(()=>{(0,S.y)("clientsideEvent",{eventName:"databricksSQLAccessDenied"})},[]);let e="For access to Databricks SQL, contact your Databricks representative.";return(0,r.Y)(l.Ay,{error:Error(e),message:e})};function j(e){e&&I.iT.sev2BurnRate(L.Es.DbsqlUi,"session_missing_settings",D.i1.P99,D.Ip.Min10,!!e.settings,e.settings?void 0:Error())}function q({children:e,fallback:t=null}){let[a,n]=(0,s.useState)(void 0),[i,o]=(0,s.useState)(!0),l=(0,W.E)(),{openDialog:m,dialogNode:b}=(0,v.sp)(M),_=(0,s.useCallback)((e,t)=>new Promise(a=>{m({componentId:"codegen_redash_app_src_app_extensions_edge_components_requiredatabrickssession.tsx_79",workspaces:e,domainSuffix:t,onClose:a})}),[m]);if((0,s.useEffect)(()=>{let e=!1,t=G();return(0,A.mt)(t),(0,d.Nt)({}),o(!0),u.A.requireDatabricksSession(_,t).then(t=>{e||((0,p.ow)(t.settings),j(t),n(t),(0,d.Nt)({o:Number(t.settings.currentWorkspaceId)}),(0,A.mt)(Number(t.settings.currentWorkspaceId)))}).catch(()=>{e||n(void 0)}).finally(()=>{o(!1)}),()=>{e=!0}},[_]),(0,s.useEffect)(()=>u.A.subscribeSessionChanges(e=>{j(e),n(e)}),[]),(0,s.useEffect)(()=>{a?.settingsOverrides&&y.A.warning((0,r.Y)(k.sA,{id:"kIK0AR",defaultMessage:"Some local settings overrides were detected and applied:"}),(0,r.Y)("pre",{className:"legacy-pre",style:{display:"block"},children:JSON.stringify(a.settingsOverrides,null,4)}),{key:"settingsOverrides",duration:10})},[a]),!function({enabled:e=!0}={}){let{portalContainer:t,appRoot:a}=(0,f.Xd)();(0,s.useEffect)(()=>{if(!e)return;let n=new Set([a,t]),r=e=>{if(!e.composed)return;let t=e.composedPath(),a=g()(t,"dataset.analyticsId");a&&a instanceof HTMLElement&&(0,h.$G)("fe_interaction_click","element",a.dataset.analyticsId)};return n.forEach(e=>{e.addEventListener("click",r,!0)}),()=>{n.forEach(e=>{e.removeEventListener("click",r,!0)})}},[e,a,t])}({enabled:!!a}),!a||!a.settings)return(0,r.FD)(r.FK,{children:[(0,r.Y)(w.R,{loading:i,description:C.z.REQUIRE_DATABRICKS_SESSION}),t]});if(l&&!a.settings.enableSqlService)return(0,r.Y)(U,{});void 0===(Number(a.settings.currentWorkspaceId)??G())&&I.iT.sev2(L.Es.DbsqlUi,"orgID_undefined_graphql_client");let S=(0,E.H4)();return(0,r.FD)(c.A.Provider,{value:a,children:[(0,r.Y)(B,{}),(0,r.FD)(T.XM,{client:S,children:[b,e]})]})}function G(){let e=_.Ay.search?.o;return o()(e)?e:Number(e)}},376338:(e,t,a)=>{a.d(t,{O:()=>o});var n=a(692738),r=a(686560),i=a(150190);function o(){let[e,t]=(0,n.useState)(),a=(0,i.H)({cacheTime:1/0}),o=(0,r.d)("isAdmin",!1);return(0,n.useEffect)(()=>{if(a.isFetched){let e=[];a.data?.is_metastore_admin&&e.push("METASTORE_ADMIN"),o&&e.push("WORKSPACE_ADMIN"),t(e.length?e.join("_AND_"):"NON_ADMIN")}},[a.isFetched,a.data?.is_metastore_admin,o]),e}},464830:(e,t,a)=>{a.d(t,{i:()=>i});var n=a(689017),r=a(711489);function i(e){let{VisualizationAction_Type:t,VisualizationSource_Type:a}=r.Uo;switch(e.metricName){case"VisualizationRenderEvent":return void(0,n.wi)({visualization_log:{action:t.RENDER,visualization_type:e.visualizationType,visualization_chart_type:o(e.visualizationChartType),renderer_type:function(e){let{RendererType_Type:t}=r.Uo;if(!e)return;switch(e){case"vega-lite":return t.VEGA_LITE;case"plotly":return t.PLOTLY;default:return t.TYPE_UNSPECIFIED}}(e.rendererType),num_marks:e.numMarks,num_series:e.numSeries,render_time_in_ms:e.renderTimeInMs,is_limited_marks:e.isLimitedMarks,usage_metadata:{source:a.REDASH,id:e.vizId,ui_source:e.sections.join(">")},regional_only_context_json:JSON.stringify(e.blob)}});case"VisualizationFrontendTransformEvent":return void(0,n.wi)({visualization_log:{action:t.TRANSFORM,visualization_type:e.visualizationType,visualization_chart_type:o(e.visualizationChartType),visualization_aggregation_functions:e.visualizationAggregationFunctions,is_backend_transform:e.isBackendTransform,input_data_column_count:e.inputDataColumnCount,input_data_row_count:e.inputDataRowCount,output_data_column_count:e.outputDataColumnCount,output_data_row_count:e.outputDataRowCount,transform_column_count:e.transformColumnCount,transform_time_in_ms:e.transformTimeInMs,transform_type:function(e){let{VisualizationLog_TransformType_Type:t}=r.Uo;if(!e)return;switch(e){case"Aggregation":return t.AGGREGATION;case"Filtering":return t.FILTERING;case"Filtering and Aggregation":return t.FILTERING_AND_AGGREGATION;default:return t.TYPE_UNSPECIFIED}}(e.transformType),usage_metadata:{source:a.REDASH,id:e.vizId,ui_source:e.sections.join(">")},regional_only_context_json:JSON.stringify(e.blob)}});case"VisualizationEditorSessionEvent":(0,n.wi)({visualization_log:{action:t.EDIT,visualization_type:e.visualizationType,visualization_chart_type:o(e.visualizationChartType),visualization_editor_session_id:e.visualizationEditorSessionId,event_type:e.visualizationEditorSessionEndType,visualization_charts_explored_in_editor:e.visualizationChartsExploredInEditor,visualization_time_spent_in_editor_in_ms:e.visualizationTimeSpentInEditorInMs,visualization_num_of_edits:e.visualizationNumOfEdits,usage_metadata:{source:a.REDASH,id:e.vizId,ui_source:e.sections.join(">")},regional_only_context_json:JSON.stringify(e.blob)}});return;case"VisualizationThirdPartyApiEvent":return void(0,n.wi)({visualization_log:{action:t.THIRD_PARTY_API_CALL,visualization_type:e.visualizationType,visualization_chart_type:o(e.visualizationChartType),visualization_num_of_third_party_api_calls:e.visualizationNumOfThirdPartyApiCalls,usage_metadata:{source:a.REDASH,id:e.vizId,ui_source:e.sections.join(">")},regional_only_context_json:JSON.stringify(e.blob)}})}}function o(e){let{VisualizationLog_VisualizationChartType_Type:t}=r.Uo;if(!e)return;switch(e){case"line":return t.LINE;case"column":return t.COLUMN;case"combo":return t.COMBO;case"area":return t.AREA;case"pie":return t.PIE;case"heatmap":return t.HEATMAP;case"scatter":return t.SCATTER;case"bubble":return t.BUBBLE;case"box":return t.BOX;case"histogram":return t.HISTOGRAM;case"custom":return t.CUSTOM;case"Table":return t.TABLE;case"Table Heatmap":return t.TABLE_HEATMAP;case"Table Col Heatmap":return t.TABLE_COL_HEATMAP;case"Table Row Heatmap":return t.TABLE_ROW_HEATMAP;case"Exportable TSV":return t.EXPORTABLE_TSV;default:return t.TYPE_UNSPECIFIED}}},487781:(e,t,a)=>{a.d(t,{X:()=>l});var n=a(610435),r=a(692738),i=a(497895),o=a(870426),s=a(154753);function l({children:e,storageKey:t,defaultWidth:a=320,minWidth:c=280,maxWidth:d=680,noSideBorder:u=!0,contentPadding:p,dangerouslyAppendEmotionCSS:m,componentId:g}){let{theme:{spacing:f}}=(0,i.wn)(),h=(0,r.useMemo)(()=>t?(0,s.m)({version:1,prefix:"unified-browse-sidebar-"}):null,[t]),[b,v]=(0,r.useState)(()=>t&&h?h.get(t)?.width??a:a),[E,_]=(0,r.useState)(()=>!!t&&!!h&&(h.get(t)?.collapsed??!1)),y=(0,r.useCallback)(e=>{if(_(e),t&&h){let a=h.get(t)??{};h.set(t,{...a,collapsed:e})}},[t,h]),k=(0,r.useCallback)(e=>{if(v(e),t&&h){let a=h.get(t)??{};h.set(t,{...a,width:e})}},[t,h]),A=p?.left??f.sm,T=p?.right??f.xs;return(0,n.Y)(o.Bx,{dangerouslyAppendEmotionCSS:m,children:(0,n.Y)(o.Bx.Content,{componentId:g??"collapsible-sidebar.content",openPanelId:0,closable:!1,collapsible:!0,collapsed:E,onCollapseChange:y,width:b,minWidth:c,maxWidth:d,onResizeStop:k,noSideBorder:u,dangerouslyAppendEmotionCSS:{paddingLeft:A,paddingRight:T},children:(0,n.Y)(o.Bx.Panel,{panelId:0,children:(0,n.Y)(o.Bx.PanelBody,{dangerouslyAppendEmotionCSS:{overflowY:"hidden"},children:e})})})})}},499348:(e,t,a)=>{let n;a.d(t,{A:()=>h});var r=a(610435),i=a(692738),o=a(724221),s=a(801938);function l(){return void 0===n&&(n=/[?&]embed=1/.test(a.g?.location?.search)),n}var c=a(783772),d=a.n(c),u=a(507204);function p({children:e}){(0,u.F)();let t=d()("databricks-application-wrapper");return(0,r.Y)("div",{className:t,"data-testid":"ApplicationWrapper",children:e})}let m=function({children:e,contentRef:t}){let{onReady:a}=(0,s.Xd)();return(0,i.useEffect)(()=>{a()},[a]),(0,r.Y)(p,{children:(0,r.Y)("div",{className:"dbsql-app-layout-content",ref:t,children:e})})};var g=a(858383);let f=i.lazy(()=>(()=>{let e=()=>a.e(86051).then(a.bind(a,86051));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(86051,"./EmbeddedApplicationLayout","lazy",e);return e()})());function h({children:e,bodyClass:t,resetPageScroll:a=!0}){let n,c,d=l()?f:m,{appRoot:u,portalContainer:p}=(0,s.Xd)(),b=(0,o.O)(),v=(n=(0,i.useRef)(null),c=(0,g.zy)(),(0,i.useEffect)(()=>{a&&n.current&&n.current.scrollTo(0,0)},[c.pathname,a]),n);return(0,i.useLayoutEffect)(()=>(b&&(u.classList.add("app-top-toolbar-spacing"),p.classList.add("app-top-toolbar-spacing")),t&&(u.classList.add(t),p.classList.add(t)),()=>{b&&(u.classList.remove("app-top-toolbar-spacing"),p.classList.remove("app-top-toolbar-spacing")),t&&(u.classList.remove(t),p.classList.remove(t))}),[t,u,p,b]),(0,r.Y)(d,{contentRef:l()?void 0:v,children:e})}},507036:(e,t,a)=>{a.d(t,{B:()=>o});var n=a(610435);a(692738);var r=a(497895),i=a(52430);function o({children:e,defaultSpacing:t=!0}){let{theme:a}=(0,r.wn)(),s=(0,n.Y)("div",{css:{height:"100%",display:"flex",flex:"1 1 auto",flexDirection:"column"},children:e});if(t)return(0,n.Y)(i.f,{css:{paddingTop:a.spacing.sm,paddingBottom:a.spacing.sm,flex:"1 1 auto"},children:s});return s}},507204:(e,t,a)=>{a.d(t,{F:()=>o});var n=a(692738),r=a(71135),i=a(208562);function o(){let{settings:e,loaded:t}=n.useContext(r.U),{branch:a}=e;return(0,n.useEffect)(()=>{if(!t)return;(0,i.e4)({branch:a})},[a,t]),{loaded:t}}},521198:(e,t,a)=>{a.d(t,{Ww:()=>d,sp:()=>c});var n=a(610435),r=a(34116),i=a.n(r),o=a(692738);let s=o.createContext({closeDialog:i()}),l={defaultVisible:!1,destroyOnClose:!0};function c(e,t,a){let r={...l,...a},[i,c]=(0,o.useState)(r.defaultVisible),[d,u]=(0,o.useState)(),p=(0,o.useCallback)(e=>{u(e),c(!0)},[]),m=(0,o.useCallback)(()=>{c(!1)},[]),g=(0,o.useMemo)(()=>({closeDialog:m}),[m]);return{dialogNode:(0,n.Y)(n.FK,{children:(!r.destroyOnClose||i)&&(0,n.Y)(s.Provider,{value:g,children:(0,n.Y)(e,{onCancel:m,...t,...d,visible:i})})}),openDialog:p,closeDialog:m}}function d(){return(0,o.useContext)(s)}},522037:(e,t,a)=>{a.r(t),a.d(t,{RouteComponent:()=>eh});var n,r=a(610435),i=a(499348),o=a(811747),s=a(506245),l=a(62521),c=a(342411),d=a(692738),u=a(858383),p=a(279402),m=a(444433),g=a(181440),f=a(136012),h=a(641760),b=a(221884),v=a(497895),E=a(338422),_=a(79128),y=a(764236),k=a(418230),A=a(817392),T=a(858239),S=a(733845),I=a(959240),L=a(648782),D=a(393108),w=a(956935),C=a(487781),x=a(234383),R=a(542349),P=a(184230);let Y=()=>{let e=(0,S.O)(),{theme:{spacing:t}}=(0,v.wn)();return(0,r.Y)(C.X,{storageKey:"data-explorer-sidebar-v3",componentId:"catalog_explorer.sidebar.content",contentPadding:{left:e?t.sm:t.md,right:e?t.sm:t.xs},children:e?(0,r.Y)(D.u,{}):(0,r.FD)(r.FK,{children:[(0,r.Y)(y.h,{size:"xs",shrinks:!1}),(0,r.Y)(R.a,{})]})})},F=()=>{let e=(0,S.O)(),{theme:{spacing:t}}=(0,v.wn)(),a=(0,w.AH)("flex-basis:25vw;display:flex;flex-direction:column;flex-shrink:0;overflow-y:visible;min-width:280px;max-width:680px;padding-left:",e?t.sm:t.md,"px;padding-right:",e?t.sm:t.xs,"px;");return(0,r.Y)(P.A,{direction:"horizontal",sizeAttribute:"flex-basis",localStorageKey:"data-explorer-sidebar-v3",componentId:"catalog_explorer.sidebar.resizable",children:(0,r.Y)("div",{css:a,className:"sidebar-wrapper",children:e?(0,r.Y)(D.u,{}):(0,r.FD)(r.FK,{children:[(0,r.Y)(y.h,{size:"xs",shrinks:!1}),(0,r.Y)(R.a,{})]})})})},N=()=>(0,x.qL)()?(0,r.Y)(Y,{}):(0,r.Y)(F,{});var M=a(507036),$=a(270654),z=a(722651),O=a(533011),B=a(118675);let W=(0,r.Y)(z.A,{});var U=a(185793),j=a(34116),q=a.n(j),G=a(382908);let H=(0,d.createContext)({recordEvent:(e,t,a)=>{},conf:{isAdmin:!1,cloud:"",enableOnboarding:!1,userId:"",orgId:""}});q(),q(),q(),q();var V=a(988759),K=a(781400),Q=((n={}).TutorialAbandon="abandon",n.GuidedNavigationForCheck="navigate",n.CheckCompleted="completeCheck",n.MarkAsDone="markAsDone",n);function J({eventName:e,onClick:t=q(),...a}){var n;let i,o=(n=Q.GuidedNavigationForCheck,i=function(){let e=(0,d.useContext)(H);function t(t,a){e.recordEvent&&e.recordEvent(t,"onboarding",a)}return{recordOnboardingAction:t,recordCompletedOnboardingCheck:function(e){t("completeCheck",e)},recordMarkAsDoneOnboardingCheck:function(e){t("markAsDone",e)},withOnboardingEventRecorder:function(e,a,n){return(...r)=>(t(a,n),e(...r))}}}(),(0,K.V)((...a)=>(i.recordOnboardingAction(n,e),t(...a))));return(0,r.Y)(G.o.Link,{componentId:"codegen_web-shared_src_onboarding_components_tutoriallink.tsx_20",...a,onClick:o})}(0,V.g)("tutorial:visibility-changed"),(0,V.g)("tutorial:task-status-changed");let X=(0,r.Y)(z.A,{});var Z=a(376338),ee=a(734679);function et(){let e=(0,c.tz)(),{activeSection:t}=(0,p.useDataExplorerContext)(),a=(0,S.O)(),n=(0,r.Y)(O.A,{tutorialId:B.p.ExploreData,title:(0,r.Y)(c.sA,{id:"UONz6D",defaultMessage:"Explore available data"}),description:(0,r.FD)(r.FK,{children:[(0,r.Y)(c.sA,{id:"XUvYYr",defaultMessage:"<p>The catalog explorer (<strong>{dataIcon} Catalog</strong> in the Databricks SQL sidebar) lets you easily explore and manage permissions on schemas and tables. You can view schema details, preview sample data, and see table details and properties. Additionally, administrators can view and change owners, as well as grant and revoke permissions.</p>",values:{dataIcon:W}}),(0,r.Y)($.A,{showTooltip:!1,renderAsLink:!0,type:"DATA_EXPLORER",css:{fontSize:"inherit"},children:(0,r.Y)(c.sA,{id:"okAhfI",defaultMessage:"Learn more about the catalog explorer"})})]})}),i=(0,r.Y)(O.A,{tutorialId:B.p.GrantPermissions,title:(0,r.Y)(c.sA,{id:"vj+8m0",defaultMessage:"Grant permissions"}),description:(0,r.FD)(r.FK,{children:[(0,r.Y)(c.sA,{id:"DUxG+Y",defaultMessage:" <p>Databricks SQL provides fine-grained access control for your schemas, tables, and views. You can control this access via SQL-standard GRANT and REVOKE statements, or interactively in the data explorer (<strong>{dataIcon} Data</strong> in the Databricks SQL sidebar).</p> <p>Only administrators have access to the data you configured access to in step 1. You should now grant permissions to additional users and groups, either using the data explorer, or <sampleDclQueryLink>by submitting SQL commands in the query editor</sampleDclQueryLink>.</p> <p>Databricks strongly recommends <link>synchronizing users and groups with your identity provider</link>, and setting group-based permissions to your data.</p>",values:{link:e=>(0,r.Y)($.A,{showTooltip:!1,renderAsLink:!0,type:"USER_AND_GROUPS_OVERVIEW",css:{fontSize:"inherit"},children:e}),sampleDclQueryLink:e=>(0,r.Y)(J,{href:`queries/new?${(0,U.UC)(U.DB.DCL)}`,eventName:"grantPermissionCheckEditor",children:e}),dataIcon:X}}),(0,r.Y)($.A,{showTooltip:!1,renderAsLink:!0,type:"DATA_ACCESS_CONTROL_MANAGE_PERMISSIONS",css:{fontSize:"inherit"},children:(0,r.Y)(c.sA,{id:"SMyoE6",defaultMessage:"Learn more about data object permissions"})})]})}),{theme:{spacing:o}}=(0,v.wn)(),s=(0,Z.O)(),l=(0,f.QQ)();(0,d.useEffect)(()=>{void 0!==s&&l("visit_data_explorer",{activePersona:s,unityCatalogEnabled:a})},[l,a,s]);let u=(0,d.useMemo)(()=>a&&t!==p.DataExplorerSection.Data,[a,t]),m=(0,k.U)("(max-width: 880px)");return(0,r.FD)("div",{css:{display:"flex",flex:1,overflowY:"auto"},children:[!u&&!m&&(0,r.Y)(N,{}),(0,r.FD)("div",{"data-testid":"data-explorer-details-wrapper",css:{flex:1,overflowY:"auto",overflowX:"auto",display:"flex",flexDirection:"column"},children:[!u&&m&&(0,r.FD)(E.Root,{children:[(0,r.Y)(E.Trigger,{children:(0,r.Y)("div",{css:{padding:o.md,paddingBottom:0},children:(0,r.Y)(_.$n,{"data-testid":"data-explorer-open-sidebar",componentId:"data-explorer.open-sidebar.drawer-trigger",children:e.formatMessage({id:"PEC4V8",defaultMessage:"Browse tree"})})})}),(0,r.Y)(E.Content,{componentId:"data-explorer.sidebar.drawer",title:a?e.formatMessage({id:"IvzBK9",defaultMessage:"Data"}):e.formatMessage({id:"kkAK5j",defaultMessage:"Browse"}),position:"left",closeOnClickOutside:!0,expandContentToFullHeight:!0,children:(0,r.Y)("div",{css:{display:"flex",flexDirection:"column",height:"100%"},children:a?(0,r.Y)(D.u,{}):(0,r.FD)(r.FK,{children:[(0,r.Y)(y.h,{size:"xs",shrinks:!1}),(0,r.Y)(R.a,{})]})})})]}),(0,r.Y)(M.B,{defaultSpacing:!0,children:(0,r.Y)(L.sv,{})})]}),n,i,(0,A.ab)(T.t.CATALOG_EXPLORER_ADD_DATA)&&(0,r.Y)(I.t,{fallback:null,children:(0,r.Y)(ee.s0,{drawerKey:T.t.CATALOG_EXPLORER_ADD_DATA})})]})}var ea=a(233287),en=a(90710),er=a(153184),ei=a(719502),eo=a(22191),es=a(472990),el=a(878723);function ec(){let e=(0,f.QQ)();return(0,r.Y)(_.$n,{componentId:"codegen_redash_app_src_app_pages_data_dbfsflyouttrigger.tsx_10",onClick:t=>{window.sidebar?.openPanel(el.YS.TABLES,!1,{subTab:"DBFS"}),t.stopPropagation(),e("click_browse_dbfs_from_header")},children:(0,r.Y)(c.sA,{id:"kHHRQ3",defaultMessage:"Browse DBFS"})})}var ed=a(623124),eu=a(781275);function ep(){let e=(0,eu.Z)(),{theme:t}=(0,v.wn)(),a=(0,f.QQ)(),{dataSourceId:n,onDataSourceSelected:i,mergedDataSources:o,dataSourcesLoaded:s,clustersLoaded:l,lakehouseLoaded:d,lakehouseMap:u,refetchClusters:p,UnifiedComputeSelector:m}=(0,g.useDataExplorerDataSourceContext)(),h=[(0,r.Y)(es.h,{location:"header"},"add-data"),e&&(0,r.Y)(ec,{},"dbfs"),(0,r.Y)(ei.km,{children:m?(0,r.Y)(m,{componentId:"catalog_explorer.legacy_header.compute_selector",align:"end"}):(0,r.Y)(ed.Lj,{onDropdownVisibleChange:e=>{e&&(a("click_endpoint_selector_from_header"),p?.())},dataSources:o,dataSourcesLoaded:s&&l&&d,dataSourceId:n,onDataSourceSelected:i,lakehouseMap:u},"endpoint-selector")},"endpoint-selector-wrapper")].filter(Boolean),b=[];return b.push((0,r.Y)("div",{css:{display:"flex",marginTop:`-${t.spacing.xs}px`},children:(0,r.Y)(er.A,{parentUi:eo.Es.DataExplorer,origin:"catalog-explorer-header"})},"feedback")),(0,r.FD)("div",{style:{marginLeft:t.spacing.md,marginRight:t.spacing.md},children:[(0,r.Y)(y.h,{}),(0,r.Y)(en.Y,{title:(0,r.Y)(c.sA,{id:"u9BYvz",defaultMessage:"Catalog Explorer"}),titleAddOns:b,buttons:h}),(0,r.Y)(y.h,{size:"sm"}),(0,r.Y)(ea.d,{color:t.colors.border})]})}var em=a(452765);let eg=function({section:e,catalog:t,schema:a,table:n,volume:i,ucFunction:o,model:s,modelVersion:l,notebook:c,share:u,recipient:v,provider:E,credential:_,location:y,browse:k,workspace:A,permission:T,connection:S,createCatalog:I,createConnection:L,deltaSharingEntity:D,editShare:w}){let C=(0,d.useCallback)(()=>{if(!t||!a||!i)return{};return{entry:{observability_log:{custom_context:{is_home_volume:(0,h.Sg)(t,a,i)}}}}},[t,a,i]);return(0,r.Y)(f.yN,{context:C,children:(0,r.Y)(g.DataExplorerDataSourceContextProvider,{children:(0,r.Y)(p.DataExplorerContextProvider,{section:e,catalog:t,schema:a,table:n,volume:i,ucFunction:o,model:s,modelVersion:l,notebook:c,share:u,recipient:v,provider:E,browse:k,connection:S,createConnection:L,deltaSharingEntity:D,editShare:w,workspace:A,permission:T,children:(0,r.Y)(m.p,{source:"dataExplorer",children:(0,r.Y)(b.d$,{children:(0,r.Y)(M.B,{defaultSpacing:!1,children:(0,r.FD)(em.ComputeModalContextProvider,{children:[!(0,h.ei)()&&(0,r.Y)(ep,{}),(0,r.Y)(et,{})]})})})})})})})};var ef=a(492814);function eh(){let{legacyDataExplorerSection:e,legacyDeltaSharingEntity:t,legacyBrowse:a,legacyWorkspace:n,legacyPermission:m}=function(){let{pathname:e}=(0,u.zy)(),{legacyDataExplorerSection:t,legacyDeltaSharingEntity:a,legacyBrowse:n,legacyWorkspace:r,legacyPermission:i}=(0,d.useMemo)(()=>{let t,a,n,r,i=e.indexOf("/explore"),o=e.substring(i+8+1).split("/"),[s,l]=o,c=p.DataExplorerSection.Data;switch(s){case"credentials":c=p.DataExplorerSection.Credentials;break;case"locations":c=p.DataExplorerSection.Locations;let d=o[o.length-1];"browse"===d&&(a=!0),"workspace"===d&&(n=!0),"permission"===d&&(r=!0);break;case"connections":c=p.DataExplorerSection.Connections;break;case"external-metadata":c=p.DataExplorerSection.ExternalMetadata;break;case"sharing":switch(c=p.DataExplorerSection.Sharing,l){case"providers":t=p.DeltaSharingEntity.Providers;break;case"recipients":t=p.DeltaSharingEntity.Recipients;break;default:t=p.DeltaSharingEntity.Shares}break;case"cleanrooms":c=p.DataExplorerSection.CleanRoom;break;default:c=p.DataExplorerSection.Data}return{legacyDataExplorerSection:c,legacyDeltaSharingEntity:t,legacyBrowse:a,legacyWorkspace:n,legacyPermission:r}},[e]);return{legacyDataExplorerSection:t,legacyDeltaSharingEntity:a,legacyBrowse:n,legacyWorkspace:r,legacyPermission:i}}(),{catalog:g,schema:f,table:h,volume:b,ucFunction:v,model:E,modelVersion:_,notebook:y,share:k,recipient:A,provider:T,credential:S,location:I,connection:L,tableFullName:D}=(0,ef.E)(),w=h??b??v??E??_??y??k??A??T??S??I??L??f??g??"",C=w?(0,c.zR)({id:"xe63Xq",defaultMessage:"{entity}"}):(0,c.zR)({id:"u9BYvz",defaultMessage:"Catalog Explorer"});(0,s.n)(C,{entity:w});let x=(0,r.Y)(l._,{onClick:function(){window.sidebar?.onClickRightContent()},children:(0,r.Y)(eg,{section:e,catalog:g,schema:f,table:h??D,volume:b,ucFunction:v,model:E,modelVersion:_,notebook:y,share:k,recipient:A,provider:T,credential:S,location:I,connection:L,browse:a,workspace:n,permission:m,deltaSharingEntity:t})});return(0,r.Y)(o.g,{children:(0,r.Y)(i.A,{children:x})})}},533011:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(694762),i=a(342411),o=a(692738),s=a(488655);function l({children:e,title:t,description:a,tutorialId:c}){let d=(0,i.tz)(),[u,p]=function(e){let[t,a]=(0,o.useState)(!1),n=(0,s.Zp)(),{search:r,...i}=window.location;return(0,o.useEffect)(()=>{let t=new URLSearchParams(r);t.get("onboarding")===e&&(t.delete("onboarding"),a(!0),n({...i,search:t.toString()},{replace:!0}))},[n,e,r,i]),[t,()=>a(!1)]}(c);return(0,n.FD)(r.aF,{componentId:"codegen_web-shared_src_onboarding_components_tutorialmodal.tsx_20",title:t,visible:u,onCancel:p,onOk:p,okText:d.formatMessage({id:"GjSEOy",defaultMessage:"Close"}),children:[(0,n.Y)("div",{children:a}),(0,n.Y)("div",{children:e})]})}},566825:(e,t,a)=>{a.d(t,{Ay:()=>E,Ns:()=>h,ZC:()=>v,r:()=>b});var n=a(987962),r=a.n(n),i=a(623576),o=a.n(i),s=a(189219),l=a.n(s),c=a(923305),d=a(651139),u=a(949313),p=a(670943),m=a(924636),g=a(984741),f=a(885364);function h(e){return r()(e,"job.id")?(0,u.Ec)(e.job.id,1e3):e}let b=["get-data-sources"],v=(0,g.to)("sql/images/db-logos"),E={query:()=>(0,p.Ym)()?d.pY.get(m.bI).then(e=>e?.data_sources||[]):d.pY.get((0,c.Hi)("api/data_sources")),get:({id:e})=>d.pY.get((0,c.Hi)(`api/data_sources/${e}`)),types:()=>d.pY.get((0,c.Hi)("api/data_sources/types")),create:e=>d.pY.post((0,c.Hi)("api/data_sources"),e),save:e=>d.pY.post((0,c.Hi)(`api/data_sources/${e.id}`),e),test:e=>d.pY.post((0,c.Hi)(`api/data_sources/${e.id}/test`)),delete:({id:e})=>d.pY.delete((0,c.Hi)(`api/data_sources/${e}`)),fetchSchema:(e,t=!1)=>{let a={};return t&&(a.refresh=!0),d.pY.get((0,c.Hi)(`api/data_sources/${e.id}/schema`),{params:a}).then(e=>{if(r()(e,"job"))return(0,u.Ec)(e.job.id).catch(t=>1===t.code?[]:Promise.reject(Error(e.job.error)));return r()(e,"schema")?e.schema:Promise.reject()}).then(e=>o()(e,e=>{var t;return{...e,columns:(t=e.columns,o()(t,e=>l()(e)?e:{name:e})),type:e.type}}))},fetchColumns:(e,t,a)=>d.pY.get((0,c.Hi)(`api/data_sources/${e}/${t}/columns/${a}`)).then(h).then((0,f.g)("DataSource.fetchColumns"))}},662874:(e,t,a)=>{a.d(t,{DK:()=>d,Go:()=>c,WL:()=>s,t2:()=>l});var n=a(610435),r=a(692738),i=a(745444),o=a(962179);let s=r.createContext(()=>void 0);function l({children:e}){let{lakehouseMap:t}=(0,i.j)(),a=(0,r.useCallback)(e=>t[e],[t]);return(0,n.Y)(s.Provider,{value:a,children:e})}function c(e){let t=(0,r.useContext)(s);return(0,r.useMemo)(()=>e.map(e=>{if(!(0,o.PG)(e))return e;let a=t(e.endpoint_id??"");return{...e,lakehouse:a}}),[e,t])}function d(e){let t=(0,r.useContext)(s);return(0,r.useMemo)(()=>{if(e){let a=t(e.endpoint_id??"");return{...e,lakehouse:a}}},[e,t])}},683003:(e,t,a)=>{a.d(t,{B:()=>s});var n=a(610435),r=a(545251),i=a(497895),o=a(174541);let s=({children:e,...t})=>{let{theme:a}=(0,i.wn)(),{isInsideDialogCombobox:s}=(0,r.w)();if(!s)throw Error("`DialogComboboxFooter` must be used within `DialogCombobox`");return(0,n.Y)("div",{...t,css:(0,o.UA)(a),children:e})}},732735:(e,t,a)=>{a.d(t,{D:()=>i.D,X:()=>i.X});var n=a(866984),r=a.n(n),i=a(211122),o=a(881601);r()(i.X,o.c)},733052:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(610435);a(692738);var r=a(802582);function i({primary:e=!1,srSilent:t=!1,children:a,placement:o,title:s,dataTestId:l,arrowPointAtCenter:c,...d}){return(0,n.Y)(r.p,{silenceScreenReader:t,useAsLabel:e,placement:o,title:s,dataTestId:l,arrowPointAtCenter:c,...d,children:a})}},734679:(e,t,a)=>{a.d(t,{s0:()=>s,xE:()=>d,tc:()=>m});var n=a(610435),r=a(692738);function i(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}let o=r.lazy(()=>{var e;return(e=function*(){let{AddDataDrawer:e}=yield(()=>{let e=()=>Promise.all([a.e(13686),a.e(83652)]).then(a.bind(a,283652));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(283652,"@databricks/webapp/js/ingestion/common/drawer","lazy",e);return e()})();return{default:e}},function(){var t=this,a=arguments;return new Promise(function(n,r){var o=e.apply(t,a);function s(e){i(o,n,r,s,l,"next",e)}function l(e){i(o,n,r,s,l,"throw",e)}s(void 0)})})()});function s(e){return(0,n.Y)(o,{...e})}function l(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}let c=r.lazy(()=>{var e;return(e=function*(){return{default:(yield(()=>{let e=()=>Promise.all([a.e(13686),a.e(83652)]).then(a.bind(a,283652));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(283652,"@databricks/webapp/js/ingestion/common/drawer","lazy",e);return e()})()).CreateTableDrawer}},function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){l(i,n,r,o,s,"next",e)}function s(e){l(i,n,r,o,s,"throw",e)}o(void 0)})})()});function d(e){return(0,n.Y)(c,{...e,forceSqlWarehouse:!0})}function u(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}let p=r.lazy(()=>{var e;return(e=function*(){let{IngestionDrawerTrigger:e}=yield(()=>{let e=()=>Promise.all([a.e(13686),a.e(83652)]).then(a.bind(a,283652));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(283652,"@databricks/webapp/js/ingestion/common/drawer","lazy",e);return e()})();return{default:e}},function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){u(i,n,r,o,s,"next",e)}function s(e){u(i,n,r,o,s,"throw",e)}o(void 0)})})()});function m(e){return(0,n.Y)(p,{...e})}},735617:(e,t,a)=>{a.d(t,{FR:()=>c,bo:()=>d,jj:()=>l,oK:()=>u});var n,r,i=a(737358),o=a(337706),s=a(817392),l=((n={}).ALL="all",n.PIPELINE="pipeline",n.ALL_DATABRICKS="all_databricks",n),c=((r={}).DataIngestionIndex="/dataingestion/add",r.DataIngestionFileUpload="/dataingestion/upload/file",r.DataIngestionExternalLocation="/dataingestion/external-location",r);let d={BASE:"/ingestion",ADD_DATA:"add",PIPELINE_SETUP:"pipelines/setup",DBFS_BASE:"/tables/new",DBFS:"dbfs",FILE:"file",S3:"s3"},u=({withLegacySqlPrefix:e}={withLegacySqlPrefix:!1})=>({addData:e=>(0,i.AO)({pathname:`${d.BASE}/${d.ADD_DATA}`,search:e&&(0,o.XZ)(e)}),setup:e=>(0,i.AO)({pathname:`${d.BASE}/${d.PIPELINE_SETUP}`,search:e&&(0,o.XZ)(e)}),fileUpload(){if((0,s.bf)())return"/dataingestion/upload/file";return this.dbfsTableImportUpload()},externalLocation:()=>"/dataingestion/external-location",dbfsTableImportUpload:()=>`${d.DBFS_BASE}/${d.FILE}`,dbfsTableImportBrowse:()=>`${d.DBFS_BASE}/${d.DBFS}`,s3TableImport:()=>`${d.DBFS_BASE}/${d.S3}`})},745444:(e,t,a)=>{a.d(t,{j:()=>d});var n=a(298280),r=a.n(n),i=a(692738),o=a(919505),s=a(290766),l=a(572382),c=a(441535);function d({enableLiveUpdates:e=!0,fetchPolicy:t="cache-and-network",useMinimalQuery:a=!1,isEnabled:n=!0}={}){let u=(0,c.W)("databricks.fe.redash.listPollingInterval",5e3),[p,m]=(0,i.useState)(()=>(0,c.W)("databricks.fe.redash.enableWarehouseEventSubscription",!1)),g=e&&p&&!a,{data:f,loading:h,refetch:b}=(0,s.T)({pollInterval:e&&!g?u:0,fetchPolicy:t,nextFetchPolicy:g?"cache-first":void 0,skip:!n},a);return(0,o.A)({skip:!g||!n,refetchLakehouseStates:b,setEnableSubscription:m}),{loaded:!h,lakehouseMap:(0,i.useMemo)(()=>r()((0,l.kc)(f?.lakehouses),e=>e?.id),[f?.lakehouses])}}},781400:(e,t,a)=>{a.d(t,{V:()=>l});var n=a(254292),r=a.n(n),i=a(34116),o=a.n(i),s=a(692738);function l(e){let t=(0,s.useRef)();return t.current=r()(e)?e:o(),(0,s.useCallback)((...e)=>t.current?.(...e),[])}},811747:(e,t,a)=>{a.d(t,{g:()=>v});var n=a(610435),r=a(692738),i=a(63837),o=a(357403),s=a(627714),l=a(224156);a(402217),a(342411);var c=a(205048),d=a(929117),u=a(858383),p=a(263190);a(499348);var m=a(3393),g=a(464830);function f(e){let{error:t,handleError:a,clearError:i}=(0,m.fj)(),{pathname:o,search:s,hash:l}=(0,u.zy)();if((0,r.useEffect)(i,[i,o,s,l]),t)return(0,n.Y)(m.Ay,{error:t});return(0,n.FD)(n.FK,{children:[e.render?.(a),e.children]})}function h({render:e,children:t,routeKey:a}){return(0,s.x8)(),(0,n.Y)(l.j$,{render:o=>(0,n.Y)(p.JG,{recordEvent:g.i,flags:o,children:(0,n.Y)(i.Z,{children:(0,n.Y)(r.Fragment,{children:(0,n.Y)(f,{render:e,children:t})},a)})})})}function b({children:e}){return(0,n.Y)(r.Suspense,{fallback:(0,n.Y)(c.R,{loading:!0,description:d.z.REQUIRE_REDASH_USER_SESSION}),children:e})}function v({children:e,id:t,render:a}){return(0,n.Y)(o.RequireDatabricksSession,{children:(0,n.Y)(b,{children:(0,n.Y)(h,{routeKey:t,render:a,children:e})})})}},817392:(e,t,a)=>{a.d(t,{$G:()=>_,CP:()=>M,Ip:()=>b,JA:()=>E,Kq:()=>C,Kx:()=>F,Lo:()=>c,MD:()=>T,Ot:()=>L,QL:()=>l,QV:()=>p,RC:()=>I,UB:()=>x,Uj:()=>D,XV:()=>k,a7:()=>z,ab:()=>h,bb:()=>W,bf:()=>d,c_:()=>y,eV:()=>f,gw:()=>O,h:()=>P,ik:()=>u,nl:()=>v,q2:()=>Y,qg:()=>g,qu:()=>w,r1:()=>R,r5:()=>m,s_:()=>N,t4:()=>A,tj:()=>S,w_:()=>B,wn:()=>$});var n=a(13451),r=a(686560),i=a(441535),o=a(858239),s=a(39566);function l(){return(0,n.e)("enableUploadDataUis",!0)}function c(){return(0,n.e)("enableDbfsFileBrowser",!1)}function d(){return(0,i.W)("databricks.fe.ingestion.enableLocalFileUpload",!1)}function u(){return l()&&d()}function p(){return(0,r.d)("workspaceHasDbfsRootEnabled",!0)&&(c()||l())}function m(e){if(void 0===e)return!1;return(0,i.W)("databricks.fe.ingestion.enableDPM",!0)&&((0,i.W)("databricks.deltapipelines.ungateDirectPublishingModeForManagedIngestionPipeline",!1)&&e===s.DI.QUERY||(0,i.W)("databricks.deltapipelines.ungateDirectPublishingModeForCdcIngestionPipeline",!1)&&e===s.DI.CDC)}function g(){return(0,i.W)("databricks.fe.ingestion.wizardPipelineNameValidationDebounceMillis",300)}function f(){return(0,i.W)("databricks.fe.ingestion.enableWorkdayIncrementalRowsUI",!1)}function h(e){return({[o.t.TEST_DRAWER]:!1,[o.t.LAKEFLOW_CREATE_PIPELINE]:(0,i.W)("databricks.fe.ingestion.drawer.createPipeline",!0),[o.t.LAKEFLOW_CREATE_PIPELINE_FROM_LANDING_CARD]:(0,i.W)("databricks.fe.ingestion.drawer.createPipeline",!0),[o.t.EDIT_PIPELINE]:(0,i.W)("databricks.fe.ingestion.drawer.editPipeline",!0),[o.t.NOTEBOOK_CREATE_TABLE]:(0,i.W)("databricks.fe.ingestion.drawer.notebook",!1),[o.t.ADD_DATA_PAGE_CREATE_PIPELINE]:(0,i.W)("databricks.fe.ingestion.drawer.addDataPipeline",!0),[o.t.LAKEFLOW_JOBS_CREATE_PIPELINE]:!0,[o.t.LAKEFLOW_CONNECT_CREATE_DATASET_DRAWER_KEY]:!0,[o.t.LAKEBUILDER_CREATE_TABLE]:!0,[o.t.LAKEFLOW_JOBS_EDIT_PIPELINE]:!0,[o.t.UC_ASSET_SELECTOR_CREATE_TABLE]:!0,[o.t.ADD_DATA_PAGE_CREATE_TABLE]:(0,i.W)("databricks.fe.ingestion.drawer.addDataPageCreateTable",!1),[o.t.FOREIGN_CATALOG_CREATE_PIPELINE]:(0,i.W)("databricks.fe.ingestion.enableForeignCatalogIngestion",!1),[o.t.CATALOG_EXPLORER_ADD_DATA]:(0,i.W)("databricks.fe.ingestion.drawer.catalogExplorerAddData",!1)})[e]}function b(){return(0,i.W)("databricks.ingestion.schemaExploration.useExploreMode",!1)}function v(){return(0,i.W)("databricks.fe.ingestion.enableAssistantButtonForIngestionWizardErrors",!1)}function E(){return((0,i.W)("budget_policy",null)??!1)&&(0,i.W)("databricks.fe.ingestion.enablePipelineBudgetPolicy",!1)}function _(e,t){if(!e||t!==s.DI.CDC)return!1;return!!((0,i.W)("dlt-pipelines.cdcApplier.sourceValidation",!1)&&(0,i.W)("dlt-pipelines.cdcApplier.sourceValidation.sources","SQLSERVER").split(",").includes(e))}function y(){return(0,i.W)("databricks.deltapipelines.enableMandatorySlotConfigChecksForPostgres",!1)}function k(){return(0,i.W)("databricks.deltapipelines.enableOptionalSlotConfigForPostgres",!1)}function A(){return(0,i.W)("generic_lfc",!1)}function T(){return(0,i.W)("databricks.fe.ingestion.dataSourceTileRedesign",!1)}function S(){return(0,i.W)("cloudfiles_excel",!1)}function I(){return(0,i.W)("databricks.fe.ingestion.enableIngestionDrawerAssistant",!1)}function L(){return(0,i.W)("databricks.fe.ingestion.enableAddDataPageAssistant",!1)}function D(){return(0,i.W)("databricks.fe.ingestion.connector.community.githubRepo","https://github.com/databrickslabs/lakeflow-community-connectors")}function w(){return(0,i.W)("databricks.fe.ingestion.connector.zerobus_ingest.notebook.enabled",!1)}function C(){return(0,i.W)("databricks.fe.ingestion.connector.sharepoint_notebook.enabled",!1)&&(0,i.W)("sharepoint_connector",!1)}function x(){return(0,i.W)("databricks.fe.ingestion.connector.google_drive_notebook.enabled",!1)&&(0,i.W)("gdrive_connector",!1)}function R(){return(0,i.W)("databricks.fe.ingestion.enableJiraConfluenceSpacesCell",!1)}function P(){return(0,i.W)("databricks.fe.ingestion.enableForeignCatalogIngestion",!1)}function Y(){return(0,i.W)("databricks.deltapipelines.allowCleanupResourcesOnDeletion",!1)}function F(){return(0,i.W)("databricks.fe.ingestion.enableDirectCdcInIngestionWizard",!1)}function N(){return(0,i.W)("databricks.fe.ingestion.enableAutomaticPrimaryKey",!1)}function M(){return(0,i.W)("databricks.fe.ingestion.enableEditPrimaryKeyInReport",!1)}function $(){return(0,i.W)("databricks.fe.ingestion.enableFullRefresh",!1)}function z(){return(0,i.W)("databricks.fe.ingestion.enableClassicComputeForQBC",!1)}function O(){return(0,i.W)("databricks.fe.ingestion.enableSharedConnectionModal",!1)}function B(){return(0,i.W)("databricks.usagePolicies.enableEntitlement",!1)}function W(){return(0,i.W)("private_network_gateway",!1)||(0,i.W)("databricks.lakehouseNetworkManager.privateNetworkGateway.enabledForE2Account",!1)}},840924:(e,t,a)=>{a.d(t,{v:()=>b});var n=a(483588),r=a(441535),i=a(141078);let o=(0,i.J1)`
  fragment LineageSecurableRelationshipInfoFragment on MetadatalineageapiserverLineageInfo {
    tableInfo {
      name
      schemaName
      catalogName
      hasPermission
      tableType
      lineageTimestamp
    }
    modelInfo {
      modelName
      version
      lineageTimestamp
      mlflowModelId
    }
    functionInfo {
      functionName
      lineageTimestamp
    }
    functionInfos {
      functionId
      functionName
      lineageTimestamp
    }
    fileInfo {
      path
      hasPermission
      storageLocation
      securableName
      securableType
      lineageTimestamp
    }
    pipelineInfos {
      pipelineId
      updateId
      workspaceId
      lineageTimestamp
    }
    jobInfos {
      jobId
      workspaceId
      lineageTimestamp
    }
    notebookInfos {
      notebookId
      workspaceId
      lineageTimestamp
    }
    dashboardInfos {
      dashboardId
      dashboardType
      internalName
      workspaceId
      lineageTimestamp
    }
    dashboardV3Infos {
      dashboardId
      dashboardType
      internalName
      workspaceId
      lineageTimestamp
    }
    queryInfos {
      queryId
      workspaceId
      lineageTimestamp
    }
    servingEndpointInfos {
      servingEndpointId
      servedEntityId
      workspaceId
      lineageTimestamp
    }
    alertInfos {
      alertId
      workspaceId
      lineageTimestamp
    }
    genieSpaceInfos {
      genieSpaceId
      workspaceId
      lineageTimestamp
    }
    lineageTimestamp
  }
`,s=(0,i.J1)`
  fragment LineageEntityRelationshipInfoFragment on MetadatalineageapiserverEntityInfoPaginated {
    dashboardInfo {
      dashboardId
      dashboardType
      internalName
      workspaceId
      lineageTimestamp
    }
    jobInfo {
      jobId
      workspaceId
      lineageTimestamp
    }
    notebookInfo {
      notebookId
      workspaceId
      lineageTimestamp
    }
    queryInfo {
      queryId
      workspaceId
      lineageTimestamp
    }
    pipelineInfo {
      pipelineId
      updateId
      lineageId
      workspaceId
      lineageTimestamp
    }
    servingEndpointInfo {
      servingEndpointId
      servedEntityId
      workspaceId
      lineageTimestamp
    }
    genieSpaceInfo {
      genieSpaceId
      workspaceId
      lineageTimestamp
    }
    alertInfo {
      alertId
      workspaceId
      lineageTimestamp
    }
  }
`,l=(0,i.J1)`
  fragment ExternalLineageRelationshipObjectFragment on MetadatalineageapiserverExternalLineageRelationshipObject {
    externalMetadata {
      name
    }
    modelVersion {
      name
      version
    }
    path {
      url
    }
    table {
      name
    }
  }
`,c=(0,i.J1)`
  fragment ExternalLineageRelationshipInfoFragment on MetadatalineageapiserverExternalLineageInfo {
    tableInfo {
      name
      schemaName
      catalogName
      eventTime
    }
    modelInfo {
      modelName
      version
      eventTime
    }
    fileInfo {
      path
      storageLocation
      securableName
      securableType
      eventTime
    }
    externalLineageInfo {
      id
      query
      source {
        ...ExternalLineageRelationshipObjectFragment
      }
      target {
        ...ExternalLineageRelationshipObjectFragment
      }
      properties {
        key
        value
      }
      columns {
        source
        target
      }
    }
    externalMetadataInfo {
      entityType
      systemType
      eventTime
      name
    }
  }
  ${l}
`,d=(0,i.J1)`
  query ListSecurableLineagesBySecurable(
    $securableType: MetadatalineageapiserverSecurableType!
    $securableFullName: String!
    $subsecurableId: String
    $lineageDirection: MetadatalineageapiserverLineageDirection!
    $startTimestamp: String
    $pageSize: Int
    $pageToken: String
    $securableResponseFilter: MetadatalineageapiserverSecurableType
  ) @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverListSecurableLineagesBySecurable(
      input: {
        securableType: $securableType
        securableFullName: $securableFullName
        subsecurableId: $subsecurableId
        lineageDirection: $lineageDirection
        startTimestamp: $startTimestamp
        pageSize: $pageSize
        pageToken: $pageToken
        securableResponseFilter: $securableResponseFilter
      }
    ) {
      lineages {
        ...LineageSecurableRelationshipInfoFragment
      }
      nextPageToken
      areEntitiesTruncated
    }
  }
  ${o}
`,u=(0,i.J1)`
  query ListEntityLineagesBySecurable(
    $securableType: MetadatalineageapiserverSecurableType!
    $securableFullName: String!
    $subsecurableId: String
    $lineageDirection: MetadatalineageapiserverLineageDirection!
    $startTimestamp: String
    $pageSize: Int
    $pageToken: String
    $entityResponseFilter: MetadatalineageapiserverEntityType
  ) @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverListEntityLineagesBySecurable(
      input: {
        securableType: $securableType
        securableFullName: $securableFullName
        subsecurableId: $subsecurableId
        lineageDirection: $lineageDirection
        startTimestamp: $startTimestamp
        pageSize: $pageSize
        pageToken: $pageToken
        entityResponseFilter: $entityResponseFilter
      }
    ) {
      lineages {
        ...LineageEntityRelationshipInfoFragment
      }
      nextPageToken
    }
  }
  ${s}
`,p=(0,i.J1)`
  query ListExternalLineagesBySecurable(
    $lineageDirection: MetadatalineageapiserverDirectionLineageDirection!
    $pageSize: Int
    $pageToken: String
    $securableResponseFilter: MetadatalineageapiserverListExternalLineageRelationshipsRequestExternalLineageType
    $objectInfo: MetadatalineageapiserverExternalLineageRelationshipObjectInput!
  ) @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverListExternalLineageRelationships(
      input: {
        objectInfo: $objectInfo
        lineageDirection: $lineageDirection
        pageToken: $pageToken
        pageSize: $pageSize
        securableResponseFilter: $securableResponseFilter
      }
    ) {
      externalLineageRelationships {
        ...ExternalLineageRelationshipInfoFragment
      }
      apiError {
        code
        message
      }
      nextPageToken
    }
  }
  ${c}
`,m=(0,i.J1)`
  query ListColumnLineagesByColumn(
    $tableName: String!
    $acceptedTables: [String!]!
    $lineageDirection: MetadatalineageapiserverLineageDirection!
    $columnName: String!
    $startTimestamp: String
  ) @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverListColumnLineages(
      input: {
        acceptedTables: $acceptedTables
        lineageDirection: $lineageDirection
        tableName: $tableName
        startTimestamp: $startTimestamp
        columnName: $columnName
      }
    ) {
      lineages {
        catalogName
        schemaName
        tableName
        tableType
        workspaceId
        path
        name
        lineageTimestamp
        hasPermission
      }
    }
  }
`;function g(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function f(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function h(e){var t;return(t=function*({query:e,client:t,extractResponse:a,extractToken:n,extractContinueFetching:i,extractMetadata:o,variables:s,maxResults:l,maxPages:c}){let d=[],u=s.pageToken??null,p=0,m=null,g=(0,r.W)("databricks.fe.data.defaultLineagePaginationSize",100),f=s.pageSize??g,h=l??1e3,b=c&&c>0&&Number.isFinite(c)?c:1/0,v=!0,E=0;do try{let{data:r}=yield t.query({query:e,variables:{...s,pageSize:f,pageToken:u},fetchPolicy:"network-only"});if(!r)break;let l=a(r);l&&d.push(...l),u=n(r),p=d.length,v=!i||i(r),m=o?o(m,r):m,E++}catch(e){throw e}while(u&&p<h&&E<b&&v);return{response:d,pageToken:u,metadata:m}},function(){var e=this,a=arguments;return new Promise(function(n,r){var i=t.apply(e,a);function o(e){f(i,n,r,o,s,"next",e)}function s(e){f(i,n,r,o,s,"throw",e)}o(void 0)})}).apply(this,arguments)}let b={listSecurableBySecurable:(e,t,a)=>{let i=Math.max((0,r.W)("databricks.fe.discovery.pagesToFetchAllAssets",2),1),o=t.securableResponseFilter===n.osA.ALL_ASSETS_FLATTENED?i:void 0;return h({client:e,query:d,variables:t,extractResponse:e=>e.metadatalineageapiserverListSecurableLineagesBySecurable?.lineages??[],extractToken:e=>e.metadatalineageapiserverListSecurableLineagesBySecurable?.nextPageToken??null,maxResults:o?1/0:a,maxPages:o})},listEntityBySecurable:(e,t,a)=>h({client:e,query:u,variables:t,extractResponse:e=>e.metadatalineageapiserverListEntityLineagesBySecurable?.lineages??[],extractToken:e=>e.metadatalineageapiserverListEntityLineagesBySecurable?.nextPageToken??null,maxResults:a}),listColumnLineage:(e,t)=>(function(e){var t;return(t=function*({query:e,client:t,variables:a,extractResponse:n}){try{let{data:r}=yield t.query({query:e,variables:a,fetchPolicy:"network-only"});return n(r)}catch(e){throw e}},function(){var e=this,a=arguments;return new Promise(function(n,r){var i=t.apply(e,a);function o(e){g(i,n,r,o,s,"next",e)}function s(e){g(i,n,r,o,s,"throw",e)}o(void 0)})}).apply(this,arguments)})({client:e,query:m,variables:t,extractResponse:e=>e?.metadatalineageapiserverListColumnLineages?.lineages??[]}),listExternalLineage:(e,t,a)=>h({client:e,query:p,variables:t,extractResponse:e=>e?.metadatalineageapiserverListExternalLineageRelationships?.externalLineageRelationships??[],extractToken:e=>e.metadatalineageapiserverListExternalLineageRelationships?.nextPageToken??null,maxResults:a})}},885364:(e,t,a)=>{a.d(t,{g:()=>o,u:()=>i});var n=a(987962),r=a.n(n);class i extends Error{__initiatorStack;errorCode;constructor(e,t,...a){super(t,...a),Error.captureStackTrace&&Error.captureStackTrace(this,i),this.name="SchemaLoadError",this.errorCode=e}isWaitingForEndpoint(){return 3===this.errorCode}}function o(e){return t=>{if(r()(t,"error")){let a=new i(t.error.code,`${t.error.message} (${e})`);return a.__initiatorStack=Error().stack,Promise.reject(a)}return t}}},919505:(e,t,a)=>{a.d(t,{A:()=>f});var n=a(514503),r=a.n(n),i=a(692738),o=a(200356),s=a(65061),l=a(960718),c=a(441535),d=a(141078),u=a(886100),p=a(22191),m=a(278983);let g=(0,d.J1)`
  subscription WarehouseEventSubscription($ignoreScaledEvent: Boolean) @component(name: "DBSQLX.WareHouseUI") {
    warehouseEvent(ignoreScaledEvent: $ignoreScaledEvent) {
      warehouseId
      eventName
      eventTimeMs
    }
  }
`;function f({skip:e,refetchLakehouseStates:t,setEnableSubscription:a}){let n=(0,i.useMemo)(()=>{let e=(0,c.W)("databricks.fe.redash.warehouses.event.debounceWait",1e3)+Math.floor(500*Math.random());return r()(t,e)},[t]),d=(0,i.useRef)(!1);return(0,s.sw)(g,{variables:{ignoreScaledEvent:!0},shouldResubscribe:!0,skip:e,onSubscriptionData({subscriptionData:e,client:r}){if(e?.data?.warehouseEvent){let{warehouseId:a}=e.data.warehouseEvent;"0"!==a||d.current?"0"===a?t():function(e,t,a){let{warehouseId:n,eventName:r}=t;(r||"undefined")in o.tXm&&e.cache.updateFragment({fragment:l.xz,id:e.cache.identify({__typename:"Lakehouse",id:n})},e=>{if(e)return{...e,state:r,health:null}})||a()}(r,e.data.warehouseEvent,n):d.current=!0}else u.iT.sev2(p.Es.RedashCore,"warehouseEvent.subscription.onSubscriptionData.unexpectedData",{subscriptionData:e}),a(!1)},onError(e){(function(e){if(e?.[0]){let t=e[0],a=t.code??"unknown",n=t instanceof CloseEvent?"CloseEvent":t.type??"unknown";(0,m.y)("clientsideEvent",{eventName:"warehouse_subscription_error",eventType:`warehouse_subscription_error_${n}`,errorCode:a})}else u.iT.sev2(p.Es.RedashCore,"warehouseEvent.subscription.onUnexpectedError",{rawError:e})})(e),a(!1)}})}},960718:(e,t,a)=>{a.d(t,{MS:()=>u,SN:()=>p,vP:()=>d,xz:()=>m});var n=a(141078);let r=(0,n.J1)`
  fragment PrincipalNameFragment on PrincipalName {
    __typename
    ... on UserName {
      userName
    }
    ... on GroupName {
      groupName
    }
    ... on ServicePrincipalName {
      servicePrincipalName
    }
  }
`,i=(0,n.J1)`
  fragment PermissionFragment on Permission {
    inheritedFromObject
    permissionLevel
    inherited
  }
`,o=(0,n.J1)`
  fragment AccessControlFragment on AccessControl {
    principalName {
      ...PrincipalNameFragment
    }
    allPermissions {
      ...PermissionFragment
    }
  }
  ${r}
  ${i}
`,s=(0,n.J1)`
  fragment LakehousePermissionsFragment on Lakehouse {
    permissions @include(if: $withPermissions)
    effectivePermissions @include(if: $withPermissions) {
      objectId
      objectType
      accessControlList {
        ...AccessControlFragment
      }
    }
  }
  ${o}
`,l=(0,n.J1)`
  fragment LakehouseBasicAttributesFragment on Lakehouse {
    id
    name
    size
    state
    # TODO(LF-940) use enableServerlessCompute instead
    enableDatabricksCompute
    warehouseType
    numClusters
    numActiveClusters @include(if: $withActiveClusters)
    maxNumClusters
    creator {
      name
    }
    aclPrincipal {
      id
      displayName
      uniqueName
      kind
    }
    health {
      status
      summary
      details
    }
  }
`,c=(0,n.J1)`
  fragment LakehouseAdvancedAttributesFragment on Lakehouse {
    minNumClusters
    numActiveSessions
    autoStopMins
    instanceProfileArn
    spotInstancePolicy
    disableUnityCatalog
    enablePhoton
    jdbcUrl
    odbcParams {
      hostname
      path
      port
      protocol
    }
    tags {
      customTags {
        key
        value
      }
    }
  }
`,d=(0,n.J1)`
  fragment FullLakehouseFragment on Lakehouse {
    ...LakehouseBasicAttributesFragment
    ...LakehouseAdvancedAttributesFragment
    ...LakehousePermissionsFragment
    channel {
      dbsqlVersion
      name
    }
    budgetPolicy @include(if: $withBudgetPolicy) {
      id
    }
    effectiveBudgetPolicy @include(if: $withBudgetPolicy) {
      id
    }
  }
  ${l}
  ${c}
  ${s}
`,u=(0,n.J1)`
  fragment LakehouseListFragment on Lakehouse {
    ...LakehouseBasicAttributesFragment
    permissions @include(if: $withPermissions)
  }
  ${l}
`,p=(0,n.J1)`
  fragment LakehouseForMutationFragment on Lakehouse {
    ...LakehouseBasicAttributesFragment
    ...LakehouseAdvancedAttributesFragment
    permissions @include(if: $withPermissions)
  }
  ${l}
  ${c}
`,m=(0,n.J1)`
  fragment LakehouseListStateFragment on Lakehouse {
    id
    name
    size
    state
    enableDatabricksCompute
    warehouseType
    health {
      status
      summary
      details
    }
  }
`},962179:(e,t,a)=>{function n(e){return"databricks_internal"===e.type}function r(e){return"databricks_cluster"===e.type||"cluster"===e.type}function i(e){return"statements"in e}a.d(t,{PG:()=>n,n9:()=>i,y0:()=>r})}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/77790.88611e6896.chunk.js.map