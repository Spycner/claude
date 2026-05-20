"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[54665],{1459:(e,a,r)=>{r.d(a,{A:()=>l});var t=r(610435),o=r(692738),s=r(375214);function i(e){return(0,t.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,t.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M0 2.75A.75.75 0 0 1 .75 2h3.922c.729 0 1.428.29 1.944.805L7.811 4h7.439a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1-.75-.75zm1.5.75v9h13v-7h-7a.75.75 0 0 1-.53-.22L5.555 3.866a1.25 1.25 0 0 0-.883-.366z",clipRule:"evenodd"})})}let n=(0,o.forwardRef)((e,a)=>(0,t.Y)(s.I,{ref:a,...e,component:i}));n.displayName="FolderIcon";let l=n},118675:(e,a,r)=>{r.d(a,{p:()=>o});var t,o=((t={}).ConfigureDataAccess="1",t.GrantPermissions="2",t.ReviewSQLWarehouses="3",t.FirstQuery="4",t.SampleDashboards="5",t.ExploreData="6",t)},160353:(e,a,r)=>{r.r(a),r.d(a,{RouteComponent:()=>j});var t=r(610435),o=r(499348),s=r(811747),i=r(506245),n=r(342411),l=r(646184),d=r(740752),c=r(988744),h=r(359419),g=r.n(h),u=r(173463),m=r.n(u),p=r(692738);let f=r.p+"static/media/default-dashboard-thumbnail.38fb85e910.png",b=r.p+"static/media/sample_gallery_header_graphic.be9fd9a670.png";var y=r(913573),v=r(270654),k=r(465416),w=r(745444),S=r(36377),C=r(220978),x=r(520682),Y=r(382908),D=r(497895),M=r(764236),B=r(79128),A=r(991102),E=r(339518),L=r(757927),_=r(886100),F=r(22191),I=r(747129),T=r(697453),R=r(488655),z=r(984741),N=r(533011),P=r(118675),q=r(787395);let{Text:U}=Y.o,$=(0,n.YK)({listSampleDashboardsError:{id:"e8pPDh",defaultMessage:"Failed to list sample dashboards: {error}"},createSampleDashboardError:{id:"fpXCnS",defaultMessage:"Failed to create sample dashboard: {error}"}}),H=(0,n.YK)({loadSampleDashboardsError:{id:"KMvEHR",defaultMessage:"Failed to load sample dashboards list"},createSampleDashboardError:{id:"7FqjHO",defaultMessage:"Failed to create sample dashboard"},noEndpointsForAdminsRenamed:{id:"bUg8+a",defaultMessage:"No SQL warehouses found. <link>Create SQL warehouses</link>"},noEndpointsForNonAdminsRenamed:{id:"hZAk7a",defaultMessage:"No SQL warehouses found. Ask your administrator to create one. <link>Learn more</link>"}});function K({children:e}){return(0,t.Y)(v.A,{type:"LAKEHOUSES",css:{fontSize:"inherit"},showTooltip:!1,children:e})}function W(){let{theme:e}=(0,D.wn)();return(0,t.Y)(l.A,{loading:!0,css:{width:400,height:500,cursor:"default",backgroundColor:e.colors.backgroundPrimary,boxShadow:`5px 5px 10px ${e.isDarkMode?e.colors.grey700:e.colors.grey200}`,":hover":{boxShadow:`5px 5px 10px ${e.isDarkMode?e.colors.grey600:e.colors.grey300}`},background:e.colors.backgroundPrimary,border:`1px solid ${e.colors.borderDecorative}`,borderRadius:e.legacyBorders.borderRadiusMd},cover:(0,t.Y)("div",{css:{height:350,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:e.colors.backgroundSecondary},children:(0,t.Y)(d.A.Image,{css:{".ant-skeleton-image":{background:"none"}}})})})}function G(){let{theme:e}=(0,D.wn)();return(0,t.FD)("div",{css:{backgroundColor:e.colors.backgroundSecondary,fontFamily:"Helvetica Neue",display:"flex",justifyContent:"center",alignContent:"center"},children:[(0,t.FD)(c.A,{css:{margin:e.spacing.sm},span:8,children:[(0,t.Y)(Y.o.Title,{level:1,children:(0,t.Y)(n.sA,{id:"ZUXMc1",defaultMessage:"Dashboard Samples Gallery"})}),(0,t.Y)(M.h,{}),(0,t.Y)(n.sA,{id:"QE4gu8",defaultMessage:"The samples in this gallery take you from zero to dashboard instantly. Click <b>Import</b> on a sample to receive a dashboard containing rich visualizations and associated queries, both of which you can enhance and share."})]}),(0,t.Y)(c.A,{css:{margin:e.spacing.sm},children:(0,t.Y)("img",{src:b,alt:"header_graphic",css:{height:250}})})]})}function V({listDashboardsLoading:e,sampleDashboards:a,inFlightCreateId:r,handleCreateSampleDashboard:o,createInProgress:s,dataSourcesLoading:i}){let{theme:n}=(0,D.wn)();return(0,t.FD)("div",{style:{marginTop:n.spacing.md,display:"flex",justifyContent:"center"},children:[e&&m()(2).map(e=>(0,t.Y)(c.A,{css:{margin:n.spacing.md},children:(0,t.Y)(W,{})},`${e}`)),!e&&a.map(e=>(0,t.Y)(Q,{dashboard:e,inFlightCreateId:r,handleCreateSampleDashboard:o,createInProgress:s,dataSourcesLoading:i},e.id))]})}function Q({dashboard:e,inFlightCreateId:a,handleCreateSampleDashboard:r,createInProgress:o,dataSourcesLoading:s}){let i=(0,n.tz)(),{theme:d}=(0,D.wn)();return(0,t.Y)(c.A,{css:{margin:d.spacing.md},"data-testid":e.id,children:(0,t.Y)(l.A,{css:{"&.ant-card":{width:400,height:500,boxShadow:`5px 5px 10px ${d.isDarkMode?d.colors.grey700:d.colors.grey200}`,":hover":{boxShadow:`5px 5px 10px ${d.isDarkMode?d.colors.grey600:d.colors.grey300}`},cursor:"default",border:`1px solid ${d.colors.backgroundSecondary}`,background:d.colors.backgroundSecondary,borderRadius:d.legacyBorders.borderRadiusMd}},cover:(0,t.Y)(L.b,{src:(0,z.to)(`sql/images/sample-thumbnails/${e.id}.png`),onError:e=>{e.currentTarget.src!==f&&(e.currentTarget.src=f)},alt:e.displayName||"thumbnail",height:"350",css:{objectFit:"cover"}}),children:(0,t.FD)("div",{css:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[(0,t.FD)("div",{css:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[(0,t.Y)(Y.o.Title,{level:3,css:{marginTop:d.spacing.xs,marginBottom:d.spacing.xs},children:e.displayName}),(0,t.Y)(B.$n,{componentId:"lakeview_sample_dashboard_import_button",icon:(0,t.Y)(A.A,{}),disabled:o&&a!==e.id||s,onClick:()=>r(e.id),loading:s||a===e.id&&o,children:(0,t.Y)(n.sA,{id:"cxl50U",defaultMessage:"Import"})})]}),(0,t.FD)("div",{children:[(0,t.Y)(L.b,{src:(0,z.to)("sql/images/db-logos/databricks.png"),width:"20",alt:i.formatMessage({id:"x5La5Y",defaultMessage:"Databricks Logo"})})," ",(0,t.Y)(U,{children:(0,t.Y)(n.sA,{id:"b9HhGS",defaultMessage:"by Databricks"})})]}),(0,t.Y)("div",{children:(0,t.Y)(Y.o.Paragraph,{children:e.description})})]})})})}function Z(){let e=(0,n.tz)(),{theme:a}=(0,D.wn)(),r=(0,R.Zp)(),o=(0,t.Y)(N.A,{tutorialId:P.p.SampleDashboards,title:(0,t.Y)(n.sA,{id:"N0/E0l",defaultMessage:"Import sample dashboard"}),description:(0,t.FD)(t.FK,{children:[(0,t.Y)(n.sA,{id:"Bm6oKq",defaultMessage:" <p>You can discover insights from your query results with a wide variety of rich visualizations. Databricks SQL allows you to organize visualizations into dashboards with an intuitive drag-and-drop interface. You can then share your dashboards with others, both within and outside your organization, without the need to grant viewers direct access to the underlying data. To keep everyone current, you can configure dashboards to automatically refresh, as well as to alert viewers to meaningful changes in the data.</p> <p>A dashboard gallery is available to help you get started.</p>"}),(0,t.Y)(v.A,{showTooltip:!1,renderAsLink:!0,type:"DASHBOARDS",css:{fontSize:"inherit"},children:(0,t.Y)(n.sA,{id:"e2LMKt",defaultMessage:"Learn more about dashboards"})})]})}),[s,i]=(0,p.useState)(null),[l,d]=(0,p.useState)(!1),{dataSourcesLoaded:c,dataSources:h}=(0,S.A)(),{lakehouseMap:u,loaded:m}=(0,w.j)({enableLiveUpdates:!1,fetchPolicy:"cache-first",useMinimalQuery:!0}),f=(0,k.z)(),b=!f.loading&&f.hasCreateClusterEntitlement,{loading:Y,data:M,error:B}=(0,x.h)({onCompleted:a=>{a.lakeviewconfigServicesTemplatedashboardListSampleDashboards?.apiError&&z(e.formatMessage(H.loadSampleDashboardsError))},onError:a=>{z(e.formatMessage(H.loadSampleDashboardsError));let r=e.formatMessage($.listSampleDashboardsError,{error:a.message});_.iT.sev2BurnRate(F.Es.Lakeview,"https://go/lvalert/lakeview.sampleDashboards.list.apolloError",I.i1.P9999,I.Ip.Min10,!1,{errorMessage:r})}}),[A,{loading:L}]=(0,C.f)({onCompleted:a=>{i(null);let t=a.lakeviewconfigServicesTemplatedashboardCreateSampleDashboard;if(t?.apiError)z(e.formatMessage(H.createSampleDashboardError));else{let e=t?.dashboardName,a=e?.split("/")[1];r(`/sql/dashboardsv3/${a}`)}},onError:a=>{i(null),z(e.formatMessage(H.createSampleDashboardError));let r=e.formatMessage($.createSampleDashboardError,{error:a.message});_.iT.sev2BurnRate(F.Es.Lakeview,"https://go/lvalert/lakeview.sampleDashboards.create.apolloError",I.i1.P9999,I.Ip.Min10,!1,{errorMessage:r})}}),z=e=>{T.ds.call({isCloseable:!0,root:{componentId:"codegen_redash_app_src_app_pages_dashboards_lakeviewsampledashboards.tsx_470",duration:3e3,severity:"error"},title:{value:e}})};if(M?.lakeviewconfigServicesTemplatedashboardListSampleDashboards?.apiError||B)return(0,t.Y)(n.sA,{id:"i/c/od",defaultMessage:"Error"});return(0,t.FD)("div",{css:{backgroundColor:a.colors.backgroundPrimary,flex:1},children:[o,l&&(0,t.Y)(E.F,{componentId:"codegen_redash_app_src_app_pages_dashboards_lakeviewsampledashboards.tsx_491",type:"warning",message:function(){if(b)return e.formatMessage(H.noEndpointsForAdminsRenamed,{link:e=>(0,t.Y)(y.A,{componentId:"lakeview.sampleDashboards.noEndpointsForAdminsLink",href:"warehouses/new",children:e})});return e.formatMessage(H.noEndpointsForNonAdminsRenamed,{link:e=>(0,t.Y)(K,{children:e})})}(),onClose:()=>d(!1)}),(0,t.Y)(G,{}),(0,t.Y)(V,{listDashboardsLoading:Y,sampleDashboards:M?.lakeviewconfigServicesTemplatedashboardListSampleDashboards?.sampleDashboards?.map(e=>({id:e.sampleDashboardId,displayName:e.displayName,description:e.description}))||[],inFlightCreateId:s,handleCreateSampleDashboard:e=>{h.length>0?(i(e),A({variables:{input:{sampleDashboardId:e,warehouseId:(0,q.C)(h,u).endpoint_id}}})):d(!0)},createInProgress:L,dataSourcesLoading:!c||!m&&g()(u)})]})}function j(){return(0,i.n)((0,n.zR)({id:"l2iQkn",defaultMessage:"Sample Dashboards"})),(0,t.Y)(s.g,{children:(0,t.Y)(o.A,{children:(0,t.Y)(Z,{})})})}},161330:(e,a,r)=>{r.d(a,{I:()=>c});var t=r(610435),o=r(91958),s=r.n(o),i=r(79570),n=r(497895),l=r(201828);let d=s()(e=>({color:e.colors.textSecondary})),c=({content:e,iconTitle:a="More information",...r})=>{let{theme:o}=(0,n.wn)();return(0,t.Y)(i.m,{content:e,...r,children:(0,t.Y)(l.A,{tabIndex:0,"aria-hidden":"false","aria-label":a,alt:a,css:d(o)})})}},191283:(e,a,r)=>{r.d(a,{A:()=>l});var t=r(610435),o=r(692738),s=r(375214);function i(e){return(0,t.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,t.Y)("path",{fill:"currentColor",d:"M7.25 4v4c0 .199.079.39.22.53l2 2 1.06-1.06-1.78-1.78V4z"}),(0,t.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0",clipRule:"evenodd"})]})}let n=(0,o.forwardRef)((e,a)=>(0,t.Y)(s.I,{ref:a,...e,component:i}));n.displayName="ClockIcon";let l=n},246635:(e,a,r)=>{r.d(a,{BH:()=>i,Dx:()=>n,TS:()=>s,nk:()=>o});var t=r(141078);let o=(0,t.J1)`
  fragment LakeviewApiErrorFragment on ApiError {
    code
    message
    traceId
  }
`,s=(0,t.J1)`
  fragment LakeviewconfigDatasetParametersFragment on LakeviewconfigModelsParametersParameter {
    displayName
    keyword
    dataType
    complexType
    defaultSelection {
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
      operator {
        operator
      }
    }
  }
`,i=(0,t.J1)`
  fragment LakeviewDashboardThemeFragment on LakeviewconfigModelsUisettingsUiSettingsDashboardTheme {
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
    visualizationColors
    widgetHeaderAlignment
    fontFamily
    textBoxVerticalAlign
    widgetPadding
    widgetMargin
    widgetCornerRadius
    widgetShadow
    markCornerRadius
    sentimentColors {
      negative {
        light
        dark
      }
      positive {
        light
        dark
      }
      neutral {
        light
        dark
      }
    }
    gridLineColor {
      light
      dark
    }
    axisLineColor {
      light
      dark
    }
    continuousGradient
      @includeSafex(name: "databricks.fe.lakeview.enableThemeContinuousGradient", defaultValue: false) {
      lightMode {
        fromCategoricalIndex
        color
        colorScheme
        customSequential {
          start
          end
        }
        customDiverging {
          start
          mid
          end
        }
      }
      darkMode {
        fromCategoricalIndex
        color
        colorScheme
        customSequential {
          start
          end
        }
        customDiverging {
          start
          mid
          end
        }
      }
    }
    fontSettings {
      base {
        fontFamily
        textCase
        fontColor {
          light
          dark
        }
        fontSize
        fontWeight
      }
      widgetTitle {
        fontFamily
        textCase
        fontColor {
          light
          dark
        }
        fontSize
        fontWeight
      }
      widgetDescription {
        fontFamily
        textCase
        fontColor {
          light
          dark
        }
        fontSize
        fontWeight
      }
      fieldTitle {
        fontFamily
        textCase
        fontColor {
          light
          dark
        }
        fontSize
        fontWeight
      }
      fieldValue {
        fontFamily
        textCase
        fontColor {
          light
          dark
        }
        fontSize
        fontWeight
      }
    }
  }
`,n=(0,t.J1)`
  fragment LakeviewconfigPublishedWidgetFragment on LakeviewconfigModelsPublishedWidget {
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
            operator {
              operator
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
  }
`},270654:(e,a,r)=>{r.d(a,{A:()=>g});var t=r(610435);r(692738);var o=r(778529),s=r.n(o),i=r(611798),n=r(913573),l=r(733052);function d({className:e,tooltip:a,"data-analytics-id":r,url:o,children:i}){let c=(0,t.FD)("span",{children:[a,(0,t.Y)("i",{className:"fa fa-external-link",style:{marginLeft:5}})]});return(0,t.Y)(l.A,{title:s()(a)?null:(0,t.Y)("a",{className:e,href:o,target:"_blank",rel:"noopener noreferrer",children:c}),children:s()(o)?(0,t.Y)("span",{className:e,children:i}):(0,t.Y)(n.A,{componentId:"codegen_redash_app_src_app_components_helptrigger_components_trigger.tsx_41",href:o,className:e,rel:"noopener noreferrer",target:"_blank","data-analytics-id":r,children:i})})}let c=(0,t.Y)("i",{className:"fa fa-question-circle","aria-hidden":"true"}),h=function({type:e,href:a,title:r,className:o,"data-analytics-id":n,showTooltip:l=!0,renderAsLink:h=!1,children:g=c}){let{href:u,title:m}=(0,i.wM)({type:e,href:a,title:r,showTooltip:l});if(s()(u))return null;return(0,t.Y)(t.FK,{children:(0,t.Y)(d,{css:{fontSize:15,"&:hover":{cursor:"pointer"}},className:o,url:u,tooltip:m,"data-analytics-id":n,children:g})})};function g(e){return(0,t.Y)(h,{...e})}},418230:(e,a,r)=>{r.d(a,{U:()=>s});var t=r(692738),o=r(829478);function s(e){var a;return a=t.useMemo(()=>window.matchMedia(e),[e]),(0,o.useSyncExternalStore)(t.useCallback(e=>(a.addEventListener("change",e),()=>{a.removeEventListener("change",e)}),[a]),()=>a.matches)}},450275:(e,a,r)=>{r.d(a,{d:()=>n,v:()=>o});var t,o=((t={}).Bytes="Bytes",t.KiloBytes="KiloBytes",t.MegaBytes="MegaBytes",t.GigaBytes="GigaBytes",t.TeraBytes="TeraBytes",t.PetaBytes="PetaBytes",t.ExaBytes="ExaBytes",t.ZettaBytes="ZettaBytes",t.YottaBytes="YottaBytes",t);let s={Bytes:0,KiloBytes:1,MegaBytes:2,GigaBytes:3,TeraBytes:4,PetaBytes:5,ExaBytes:6,ZettaBytes:7,YottaBytes:8},i=["Bytes","KiloBytes","MegaBytes","GigaBytes","TeraBytes","PetaBytes","ExaBytes","ZettaBytes","YottaBytes"];function n(e,a="Bytes"){if(e<0)return{size:e,sizeUnit:a};let r=e*Math.pow(1024,s[a]),t=Math.floor(Math.log(r)/Math.log(1024));return{size:r/Math.pow(1024,t=Math.min(Math.max(t,0),i.length-1)),sizeUnit:i[t]}}},465416:(e,a,r)=>{r.d(a,{z:()=>i});var t=r(65061),o=r(141078);let s=(0,o.J1)`
  # eslint-disable-next-line @databricks/graphql-component
  query CanCreateClusterForRedash @component(name: "DBSQLX.WareHouseUI") {
    currentUser {
      permissions {
        clusters {
          hasCreateClusterEntitlement
        }
      }
    }
  }
`;function i(){let e=(0,t.IT)(s,{fetchPolicy:"cache-and-network"}),a=e.data?.currentUser?.permissions?.clusters;return{loading:e.loading,hasCreateClusterEntitlement:a?.hasCreateClusterEntitlement}}},533011:(e,a,r)=>{r.d(a,{A:()=>l});var t=r(610435),o=r(694762),s=r(342411),i=r(692738),n=r(488655);function l({children:e,title:a,description:r,tutorialId:d}){let c=(0,s.tz)(),[h,g]=function(e){let[a,r]=(0,i.useState)(!1),t=(0,n.Zp)(),{search:o,...s}=window.location;return(0,i.useEffect)(()=>{let a=new URLSearchParams(o);a.get("onboarding")===e&&(a.delete("onboarding"),r(!0),t({...s,search:a.toString()},{replace:!0}))},[t,e,o,s]),[a,()=>r(!1)]}(d);return(0,t.FD)(o.aF,{componentId:"codegen_web-shared_src_onboarding_components_tutorialmodal.tsx_20",title:a,visible:h,onCancel:g,onOk:g,okText:c.formatMessage({id:"GjSEOy",defaultMessage:"Close"}),children:[(0,t.Y)("div",{children:r}),(0,t.Y)("div",{children:e})]})}},757927:(e,a,r)=>{r.d(a,{b:()=>i});var t=r(610435);r(692738);var o=r(737358),s=r(846007);function i({src:e="",alt:a="",...r}){let n=(0,o.AO)((0,s.t4)(e));return(0,t.Y)("img",{src:n,alt:a,...r})}},913573:(e,a,r)=>{r.d(a,{A:()=>p});var t=r(610435),o=r(692738),s=r(923305),i=r(794938),n=r(6e4),l=r(497937),d=r(497895),c=r(79128),h=r(846007),g=r(217985),u=r(349297);let m=o.forwardRef(({noBasePath:e=!1,children:a,onClick:r,href:c,to:m,componentId:p,...f},b)=>{let y,v=(0,l.Zp)(),k=(0,n.CV)(),{theme:w}=(0,d.wn)(),S=(0,o.useCallback)(e=>{r&&r(e),e.defaultPrevented||(0,u.A)(e,v)},[r,v]);if(m&&!k){if("string"==typeof m&&(0,s.Eq)(m))throw Error("<Link to={...}> format does not accept absolute URLs. Please <ExternalLink> instead.");let{pathname:e,search:a,hash:r}=(0,h.t4)(m);y=`${e??"/"}${a??""}${r??""}`}else if(c){let a=c.startsWith("/#");y=(0,i.E)(c,e||a)}let C={color:w.colors.actionTertiaryTextDefault,textDecoration:"none",...f.style};return k&&m?(0,t.Y)(g.N,{to:m,onClick:r,componentId:p,...f,ref:b,style:C,asAnchorTag:!0,children:a}):(0,t.Y)("a",{...f,href:y,ref:b,onClick:S,style:C,children:a})});m.Button=function({children:e,noBasePath:a=!1,onClick:r,...s}){s.href&&(s={...s,href:(0,i.E)(s.href,a)});let n=(0,l.Zp)(),d=(0,o.useCallback)(e=>{r&&r(e),e.defaultPrevented||(0,u.A)(e,n)},[r,n]);return(0,t.Y)(c.$n,{...s,onClick:d,children:e})};let p=m},991102:(e,a,r)=>{r.d(a,{A:()=>l});var t=r(610435),o=r(692738),s=r(375214);function i(e){return(0,t.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,t.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.394 5.586a4.752 4.752 0 0 1 9.351.946 3.75 3.75 0 0 1-.668 7.464L12 14H4a.8.8 0 0 1-.179-.021 4.25 4.25 0 0 1-.427-8.393m.72 6.914h7.762a.8.8 0 0 1 .186-.008q.092.008.188.008a2.25 2.25 0 0 0 0-4.5H12a.75.75 0 0 1-.75-.75v-.5a3.25 3.25 0 0 0-6.475-.402.75.75 0 0 1-.698.657 2.75 2.75 0 0 0-.024 5.488z",clipRule:"evenodd"})})}let n=(0,o.forwardRef)((e,a)=>(0,t.Y)(s.I,{ref:a,...e,component:i}));n.displayName="CloudIcon";let l=n}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/54665.e006000ec2.chunk.js.map