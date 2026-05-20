"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[64596],{7373:(e,t,o)=>{o.d(t,{n:()=>r,o:()=>n});var i=o(141078);let r=(0,i.J1)`
  fragment SettingsApiErrorFragment on ApiError {
    code
    message
    helpUrl
    traceId
  }
`,n=["RESOURCE_CONFLICT"]},98129:(e,t,o)=>{o.d(t,{w:()=>i});let i="workspace_dashboard_theme"},135092:(e,t,o)=>{o.d(t,{A:()=>s});var i=o(610435),r=o(692738),n=o(375214);function a(e){return(0,i.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,i.Y)("g",{clipPath:"url(#ThumbsDownIcon_svg__a)",children:(0,i.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.655 2.274a.8.8 0 0 0-.528-.19h-1.044v5.833h1.044a.79.79 0 0 0 .79-.643V2.725a.8.8 0 0 0-.262-.451m-3.072 6.233V2.083H3.805a.58.58 0 0 0-.583.496v.001l-.92 6a.585.585 0 0 0 .583.67h3.782a.75.75 0 0 1 .75.75v2.667a1.25 1.25 0 0 0 .8 1.166zm1.238.91L9.352 14.97a.75.75 0 0 1-.685.446 2.75 2.75 0 0 1-2.75-2.75V10.75h-3.02A2.082 2.082 0 0 1 .82 8.354l.92-6A2.085 2.085 0 0 1 3.816.584h9.29a2.29 2.29 0 0 1 2.303 1.982 1 1 0 0 1 .007.1v4.667a1 1 0 0 1-.007.1 2.29 2.29 0 0 1-2.303 1.984z",clipRule:"evenodd"})}),(0,i.Y)("defs",{children:(0,i.Y)("clipPath",{children:(0,i.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let l=(0,r.forwardRef)((e,t)=>(0,i.Y)(n.I,{ref:t,...e,component:a}));l.displayName="ThumbsDownIcon";let s=l},191897:(e,t,o)=>{o.d(t,{Gj:()=>u,NC:()=>g,cm:()=>s,jG:()=>d,lq:()=>f});var i=o(610435),r=o(692738),n=o(342411),a=o(686560),l=o(141078);function s({settingTypeName:e,sessionToken:t,additionalQueryVariables:o}){return{input:{key:{typeName:"workspace",name:(0,a.d)("currentWorkspaceId","")},setting:{typeName:e,name:""},...t&&{sessionToken:t},...o}}}function d({query:e,settingTypeName:t},{onCompleted:o,...i}={}){let r=(0,n.tz)(),{sessionToken:a,setSessionToken:u}=g(),{data:c,loading:f,error:p}=(0,l.IT)(e,{variables:s({sessionToken:a,settingTypeName:t}),fetchPolicy:"cache-first",onCompleted:e=>{let t=e.settingspolicyserviceGetSettingRest?.sessionToken;t&&u(t),o?.(e)},...i}),v=c?.settingspolicyserviceGetSettingRest?.apiError;if(p||v)return{error:p??Error(r.formatMessage({id:"ubcsd7",defaultMessage:"Failed to get dashboard embedding setting: {error}"},{error:v?.message??v?.code}))};return{data:c,loading:f}}function u({mutation:e,settingTypeName:t},{onCompleted:o,update:i,...r}={}){let{sessionToken:n,setSessionToken:a}=g(),[d,c]=(0,l.n_)(e,{onCompleted:e=>{let t=e.settingspolicyserviceSetSettingsRest?.sessionToken;t&&a(t),o?.(e)},update:i,...r});return[e=>d({variables:s({settingTypeName:t,sessionToken:n,additionalQueryVariables:{settingPayload:{storedValue:e}}})}),c]}let c=(0,r.createContext)({sessionToken:"",setSessionToken:()=>{}});function g(){return(0,r.useContext)(c)}function f({children:e}){let[t,o]=(0,r.useState)("");return(0,i.Y)(c.Provider,{value:{sessionToken:t,setSessionToken:o},children:e})}},210300:(e,t,o)=>{o.d(t,{RR:()=>l,SM:()=>a});var i=o(141078),r=o(7373);let n=(0,i.J1)`
  fragment DashboardWorkspaceThemeFragment on SettingspolicySetting {
    isMutable
    ref
    value {
      workspaceDashboardThemeVal {
        canvasBackgroundColor {
          light
          dark
        }
        widgetBackgroundColor {
          light
          dark
        }
        widgetBorderColor {
          light
          dark
        }
        fontColor {
          light
          dark
        }
        selectionColor {
          light
          dark
        }
        visualizationColor01
        visualizationColor02
        visualizationColor03
        visualizationColor04
        visualizationColor05
        visualizationColor06
        visualizationColor07
        visualizationColor08
        visualizationColor09
        visualizationColor10
        visualizationColor11
        visualizationColor12
        visualizationColor13
        visualizationColor14
        visualizationColor15
        visualizationColor16
        visualizationColor17
        visualizationColor18
        visualizationColor19
        visualizationColor20
        widgetHeaderAlignment
        fontFamily
      }
    }
  }
`,a=(0,i.J1)`
  query GetDashboardWorkspaceThemeQuery($input: SettingspolicyserviceGetSettingRestRequestInput!)
  @component(name: "Lakeview.Dashboards") {
    settingspolicyserviceGetSettingRest(input: $input) {
      apiError {
        ...SettingsApiErrorFragment
      }
      sessionToken
      setting {
        ...DashboardWorkspaceThemeFragment
      }
    }
  }
  ${r.n}
  ${n}
`,l=(0,i.J1)`
  mutation UpdateDashboardWorkspaceThemeMutation($input: SettingspolicyserviceSetSettingRestRequestInput!)
  @component(name: "Lakeview.Dashboards") {
    settingspolicyserviceSetSettingsRest(input: $input) {
      apiError {
        ...SettingsApiErrorFragment
      }
      sessionToken
      setting {
        ...DashboardWorkspaceThemeFragment
      }
    }
  }
  ${r.n}
  ${n}
`},212788:(e,t,o)=>{o.d(t,{m:()=>i});let i=(0,o(692738).createContext)(void 0)},340668:(e,t,o)=>{o.d(t,{r:()=>R});var i=o(22191),r=o(27934),n=o(911090),a=o(98538),l=o(717346),s=o(221951),d=o(84296),u=o(933569),c=o(176258),g=o(284822),f=o(257424);function p(e){return e.map(e=>e.fieldName)}var v=o(910655),C=o(320507),h=o(562476),m=o(931234),E=o(636620),T=o(817828),y=o(918857),k=o(580845);function R(e,t){let o=e.__unwrap__().spec,R=o.renderSpec;if(!(d.Bv.isRenderSpec(R)||d.Fq.isRenderSpec(R)||f.D.isRenderSpec(R)))return;let A=(0,k.E2)(o);if(A instanceof C.mQ)return;if(function(e){if("line"!==e.widgetType&&"area"!==e.widgetType||!(0,T.f1)(e.encodings.color))return!1;let t=e.encodings.color.field;if((0,y.Bb)(e.encodings)){if("x"===(0,m.$)(e))return e.encodings.x?.field===t;return e.encodings.y?.field===t}if((0,y.a4)(e.encodings))return e.encodings.x?.field===t;if((0,y.Vp)(e.encodings))return e.encodings.y?.field===t;if((0,y.zt)(e.encodings))return e.encodings.x?.field===t;return(0,n.K)(e.encodings,i.Es.Visualizations),!1}(A.getOutput()))return{reason:"LineAreaChartUsingSameFieldForIndependentAxisAndColor"};let w=(0,r.F)(R);if(0===w.length)return{reason:"ZeroFieldChart"};if(1===w.length)return{reason:"OneFieldChart"};let{mainGroupingResult:_}=(0,E.ii)(t).getMainQueryResultset();if(0===_.columns.length||0===_.rows.length)return{reason:"EmptyResultset"};if(1===_.columns.length)return{reason:"SingleColumnResultset"};let S=function(e,t){if((0,l.W)(e))return t*function(e){let{encodings:t}=e;if((0,s.G5)(t))return 1;if((0,s.Zs)(t))return p(t.y.fields).length;if((0,s.e7)(t))return p(t.x.fields).length;if((0,s.S5)(t))return[...p(t.y.primary.fields),...p(t.y.secondary.fields)].length;return(0,n.K)(t,i.Es.Visualizations),1}(e);if((0,a.$)(e))return t*function(e){let{encodings:t}=e;return[...p(t.y.primary.fields),...p(t.y.secondary.fields)].length}(e);if(d.Fq.isWidgetType(e.widgetType)||c.r.isWidgetType(e.widgetType)||d.az.isWidgetType(e.widgetType)||u.G.isWidgetType(e.widgetType)||g.B.isWidgetType(e.widgetType)||f.D.isWidgetType(e.widgetType)||d.dq.isWidgetType(e.widgetType)||d.RT.isWidgetType(e.widgetType))return t;if("boxplot"===e.widgetType||"rule"===e.widgetType||"tick"===e.widgetType)return t;(0,n.K)(e.widgetType,i.Es.Visualizations)}(R,_.rows.length);if(0===S)return{reason:"ZeroMaxPossibleMarkChart"};if(1===S&&"symbol-map"!==e.getWidgetType()&&"choropleth-map"!==e.getWidgetType())return{reason:"OneMaxPossibleMarkChart"};if(function({columnSchemaMap:e,flattenedEncodings:t}){for(let o of t){let t=e.get(o.fieldEncoding.fieldName)?.type,r=void 0===t?void 0:(0,v.B)(t),a=o.channelScaleType;if(void 0!==r&&void 0!==a&&!function(e,t){if("categorical"===t)return!0;if("temporal"===t)return h.uH.some(t=>t===e);if("quantitative"===t)return h.X1.some(t=>t===e);return(0,n.K)(t,i.Es.Visualizations),!1}(r,a))return!0}return!1}({columnSchemaMap:_.columnSchemaMap,flattenedEncodings:w}))return{reason:"ColumnTypeAndScaleTypeMismatch"}}},372279:(e,t,o)=>{o.d(t,{G:()=>r});var i=o(697453);function r({title:e,description:t,severity:o}){return i.ds.call({root:{componentId:"codegen_webapp_js_data-rooms_utils_notifications.tsx_12",duration:3e3,severity:o},title:{value:e,...!t?{style:{fontWeight:"normal"}}:{}},...t?{description:{value:t}}:{}})}},525906:(e,t,o)=>{o.d(t,{i:()=>u});var i=o(610435),r=o(692738),n=o(216092),a=o(441535),l=o(617444),s=o(970593),d=o(212788);let u=({children:e})=>{let t=(0,n._)((0,a.W)("databricks.datarooms.applyWorkspaceThemeToVizToolsLabs","off")),{data:o}=(0,l.C)({skip:!t}),u=(0,r.useMemo)(()=>t&&o?(0,s.gk)(o):void 0,[t,o]);return(0,i.Y)(d.m.Provider,{value:u,children:e})}},576988:(e,t,o)=>{o.d(t,{A:()=>s});var i=o(610435),r=o(692738),n=o(375214);function a(e){return(0,i.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 17",...e,children:(0,i.Y)("path",{fill:"currentColor",d:"M12.06 1.06 11 0 8.03 2.97 5.06 0 4 1.06l4.03 4.031zM4 15l4.03-4.03L12.06 15 11 16.06l-2.97-2.969-2.97 2.97z"})})}let l=(0,r.forwardRef)((e,t)=>(0,i.Y)(n.I,{ref:t,...e,component:a}));l.displayName="ExpandLessIcon";let s=l},606947:(e,t,o)=>{o.d(t,{E5:()=>u,kC:()=>s,wf:()=>c,wt:()=>d,xi:()=>g});var i,r,n,a,l,s=((i={}).VIEWER="VIEWER",i.EMBEDDED_CREDENTIALS="EMBEDDED_CREDENTIALS",i),d=((r={}).INTEGRATION_SOURCE_TYPE_UNSPECIFIED="INTEGRATION_SOURCE_TYPE_UNSPECIFIED",r.PUBLISHED_DASHBOARD="PUBLISHED_DASHBOARD",r.DRAFT_DASHBOARD="DRAFT_DASHBOARD",r.SNAP="SNAP",r.CATALOG_EXPLORER="CATALOG_EXPLORER",r),u=((n={}).DATA_ROOM_FEATURE_UNSPECIFIED="DATA_ROOM_FEATURE_UNSPECIFIED",n.DATA_ROOM_FEATURE_RESEARCH_AGENT="DATA_ROOM_FEATURE_RESEARCH_AGENT",n.DATA_ROOM_FEATURE_PYTHON_VERIFICATION="DATA_ROOM_FEATURE_PYTHON_VERIFICATION",n),c=((a={}).AppError="dataRoomsError",a.ChatAction="dataRoomsChatAction",a.ChatCompletionFetchError="dataRoomsCompletionFetchError",a.ChatError="dataRoomsChatError",a.PageVisit="dataRoomsPageVisit",a.FeedbackVote="dataRoomsFeedbackVote",a.FeedbackMessage="dataRoomsFeedbackMessage",a),g=((l={}).SAMPLE_QUESTION="SAMPLE_QUESTION",l.BENCHMARK="BENCHMARK",l.BENCHMARK_SUGGESTION="BENCHMARK_SUGGESTION",l.EXPLORATION="EXPLORATION",l)},616603:(e,t,o)=>{o.d(t,{Az:()=>i,E_:()=>l,_O:()=>r,v7:()=>a,vs:()=>n});let i="Genie",r="space",n="spaces",a="Space",l=350},617444:(e,t,o)=>{o.d(t,{C:()=>u});var i=o(886100),r=o(22191),n=o(747129),a=o(191897),l=o(210300),s=o(857765),d=o(98129);function u({skip:e=!1}={}){let{data:t,loading:o,error:c}=(0,a.jG)({query:l.SM,settingTypeName:d.w},{skip:e});if(e)return{isLoading:!1,isMutable:!1,data:void 0};if(o)return{isLoading:o};if(c)return{error:c};let g=t?.settingspolicyserviceGetSettingRest?.setting,f=g?.isMutable,p=g?.value?.workspaceDashboardThemeVal;if(void 0===f)return i.iT.sev2BurnRate(r.Es.Lakeview,"lakeview.dashboardWorkspaceTheme.settings.invalidSettings",n.i1.P99,n.Ip.Min10,!1,{data:t,error:c}),{error:Error("Unknown server error")};if(!p)return{isMutable:f,data:void 0,isLoading:o};let v={...p.canvasBackgroundColor&&{canvasBackgroundColor:{light:p.canvasBackgroundColor.light??void 0,dark:p.canvasBackgroundColor.dark??void 0}},...p.widgetBackgroundColor&&{widgetBackgroundColor:{light:p.widgetBackgroundColor.light??void 0,dark:p.widgetBackgroundColor.dark??void 0}},...p.widgetBorderColor&&{widgetBorderColor:{light:p.widgetBorderColor.light??void 0,dark:p.widgetBorderColor.dark??void 0}},...p.fontColor&&{fontColor:{light:p.fontColor.light??void 0,dark:p.fontColor.dark??void 0}},...p.selectionColor&&{selectionColor:{light:p.selectionColor.light??void 0,dark:p.selectionColor.dark??void 0}},...p.fontFamily&&{fontFamily:p.fontFamily}},C=(0,s.yy)(p);C.length>0&&(v.visualizationColors=C);let h=(0,s.U0)(p.widgetHeaderAlignment??void 0);if(h&&(v.widgetHeaderAlignment=h),0===Object.keys(v).length)return{isMutable:f,data:void 0,isLoading:o};return{isMutable:f,data:v,isLoading:o}}},651487:(e,t,o)=>{o.d(t,{$O:()=>i.$O,Cm:()=>i.Cm,KF:()=>i.KF,M2:()=>i.M2,Mq:()=>i.Mq,NU:()=>i.NU,OP:()=>i.OP,P:()=>i.P,PK:()=>i.PK,Q7:()=>i.Q7,QE:()=>i.QE,Ty:()=>i.Ty,U:()=>i.U,VK:()=>i.VK,Vf:()=>i.Vf,XB:()=>i.XB,_D:()=>i._D,_L:()=>i._L,by:()=>i.by,g7:()=>i.g7,hU:()=>i.hU,iK:()=>i.iK,kG:()=>i.kG,kW:()=>i.kW,oT:()=>i.oT,ox:()=>i.ox,pW:()=>i.pW,qX:()=>i.qX,rS:()=>i.rS,rX:()=>i.rX,rc:()=>i.rc,sV:()=>i.sV,so:()=>i.so,u:()=>i.u,uF:()=>i.uF,w7:()=>i.w7,xc:()=>i.xc,yY:()=>i.yY,z0:()=>i.z0,zw:()=>i.zw});var i=o(636176)},767546:(e,t,o)=>{o.r(t),o.d(t,{CustomDashboardThemeContext:()=>l.m,DownloadTableVizCsvButton:()=>u.a,DynamicChart:()=>i.A,HeliosChart:()=>r.j,HeliosChartWithEditorHooks:()=>n.C,HeliosEditorContentPanel:()=>a.r,WorkspaceThemeProvider:()=>s.i,invalidVisualizationErrorMessage:()=>i.r,useHeliosChartDataAndTelemetry:()=>d.k,useHeliosQualityCheck:()=>d.f});var i=o(976242),r=o(885189),n=o(798942),a=o(488742),l=o(212788),s=o(525906),d=o(129299),u=o(625516)},771244:(e,t,o)=>{o.d(t,{Z:()=>a,u:()=>n});var i=o(509023),r=o(404834);function n(e,t){let o=(0,i.g)((0,r.BM)(e));(0,r._q)(o,`${t}.csv`)}function a(e){let t=(0,i.g)((0,r.BM)(e));return navigator.clipboard.writeText(t)}},857765:(e,t,o)=>{o.d(t,{U0:()=>l,eg:()=>s,yy:()=>a});var i=o(483588);let r=["visualizationColor01","visualizationColor02","visualizationColor03","visualizationColor04","visualizationColor05","visualizationColor06","visualizationColor07","visualizationColor08","visualizationColor09","visualizationColor10","visualizationColor11","visualizationColor12","visualizationColor13","visualizationColor14","visualizationColor15","visualizationColor16","visualizationColor17","visualizationColor18","visualizationColor19","visualizationColor20"];function n(e){if(!e)return null;let t={...void 0!==e.light?{light:e.light}:{},...void 0!==e.dark?{dark:e.dark}:{}};return Object.keys(t).length>0?t:null}function a(e){if(!e)return[];let t=[];for(let o of r){let i=e[o];null!=i&&t.push(i)}return t}function l(e){if(!e)return;switch(e){case"LEFT":return"left";case"CENTER":return"center";case"RIGHT":return"right";default:return}}function s(e){let t=n(e.canvasBackgroundColor),o=n(e.widgetBackgroundColor),a=n(e.widgetBorderColor),l=n(e.fontColor),s=n(e.selectionColor),d=function(e){if(!e)return null;switch(e.toLowerCase()){case"left":return i.P7A.LEFT;case"center":return i.P7A.CENTER;case"right":return i.P7A.RIGHT;default:return null}}(e.widgetHeaderAlignment),u=function(e){if(!e||0===e.length)return{};let t={};return e.slice(0,20).forEach((e,o)=>{let i=r[o];i&&(t[i]=e)}),t}(e.visualizationColors);return{...null!==t?{canvasBackgroundColor:t}:{},...null!==o?{widgetBackgroundColor:o}:{},...null!==a?{widgetBorderColor:a}:{},...null!==l?{fontColor:l}:{},...null!==s?{selectionColor:s}:{},...u,...null!==d?{widgetHeaderAlignment:d}:{},...void 0!==e.fontFamily?{fontFamily:e.fontFamily}:{}}}},931234:(e,t,o)=>{o.d(t,{$:()=>a,U:()=>n});var i=o(84431),r=o(887458);function n(e,t){let o=(0,i.dL)(e,t);return(0,r.E)(o)}function a(e){let t=(0,i.GR)(e);return(0,r.E)(t)}},944316:(e,t,o)=>{o.d(t,{J:()=>p});var i=o(610435),r=o(692738),n=o(22191),a=o(342411),l=o(863708),s=o(497895),d=o(664093),u=o(382908),c=o(79128);function g({title:e,body:t,tryAgain:o}){let{theme:r}=(0,s.wn)();return(0,i.FD)("div",{css:{borderRadius:r.borders.borderRadiusMd,border:`${r.general.borderWidth}px solid ${r.colors.border}`,padding:r.spacing.md,display:"flex",flexDirection:"column",alignItems:"center",color:r.colors.textSecondary,gap:r.spacing.sm},children:[(0,i.Y)(d.A,{css:{fontSize:60}}),(0,i.Y)(u.o.Paragraph,{css:{maxWidth:r.responsive.breakpoints.sm,marginBottom:"0px !important"},children:e}),t&&(0,i.Y)(u.o.Hint,{css:{marginBottom:"0px !important"},children:t}),o&&(0,i.Y)(c.$n,{componentId:"data_rooms.error.try_again",onClick:()=>o?.(),children:(0,i.Y)(a.sA,{id:"3Nt+vu",defaultMessage:"Try again"})})]})}function f({message:e,resetErrorBoundary:t}){let o=(0,a.tz)();return(0,i.Y)(g,{title:o.formatMessage(e),tryAgain:t})}function p({allowReset:e=!0,children:t,errorBoundaryId:o,message:a,errorFilter:s,resetKey:d}){let u=(0,r.useMemo)(()=>({resetErrorBoundary:t})=>(0,i.Y)(f,{message:a,resetErrorBoundary:e?t:void 0}),[e,a]);return(0,i.Y)(l.JR,{esComponent:n.Es.DataRooms,errorBoundaryId:o,FallbackComponent:u,errorFilter:s,resetKey:d,children:t})}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/64596.18dbb648ea.chunk.js.map