"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[72388],{48687:(e,a,t)=>{t.d(a,{HA:()=>N});var r=t(456934),i=t(928516),n=t.n(i),o=t(441535),l=t(159286),s=t(846643),d=t(686914),u=t(774562),c=t(141078),f=t(886100),m=t(22191),h=t(747129),g=t(181105),p=t(570321),v=t(874824),w=t(55193),k=t(612196),b=t(210549);function y(e,a,t,r,i,n,o){try{var l=e[n](o),s=l.value}catch(e){t(e);return}l.done?a(s):Promise.resolve(s).then(r,i)}function S(e){return function(){var a=this,t=arguments;return new Promise(function(r,i){var n=e.apply(a,t);function o(e){y(n,r,i,o,l,"next",e)}function l(e){y(n,r,i,o,l,"throw",e)}o(void 0)})}}let x=()=>({graphqlRetryLinkMaxAttempt:5}),C=(e,a)=>(a,t)=>S(function*(){let r;t.headers=new Headers({...t.headers,...yield(r=t.body,S(function*(){return{"x-databricks-operation-identifier":yield(0,s.m)(r)}})())});let i=((e,a,t)=>{if("/graphql"===e){let{operationName:t}=JSON.parse(a.body);if(t&&!a.headers.has("X-Databricks-Attach-Aad-Token-For-Graphql"))return e+"/"+t}return e})(a,t,0),n=(0,o.W)("databricks.fe.infra.enableFetchOrFailForApolloClient",!1),l=(0,o.W)("databricks.fe.infra.enableFetchOrFailForRESTLink",!1),d=a.includes("graphql");return(0,w.y)(e,d?n:l)(i,t)})(),I=(0,c.S5)(e=>{let a=e.networkError;a&&a.result&&a.result.message&&(a.message=a.result.message)}),P=new Map,N=(e={})=>{let{requestContext:a=v.T.Auto}=e,t=(0,k.ls)(a)??"AC",i=P.get(t);if(void 0!==i)return i;let s=p.e.isAvailable();f.iT.sev2BurnRate(m.Es.GqlInfra,"SAFE flag values not available.",h.i1.P99,h.Ip.Min10,s,"safex not available at when getting graphql client");let w=(({additionalTestLinks:e=[],requestContext:a=v.T.Auto,apolloCache:t=new c.D9,getConfig:i=x}={})=>{let s,f,m=(0,u.P)({httpLinkParams:{fetch:C(a??v.T.Auto,i)},wsLinkParams:{refreshCsrfToken:()=>(0,b.ud)(a),requestContext:a},retryLinkParams:{maxAttemptCount:i().graphqlRetryLinkMaxAttempt}},[...e,I,((e,a)=>{let t,i=new r.RestLink({uri:"/ajax-api/2.0",endpoints:{redashApi:"/sql/api",webhooksPreviewApi:"/webhooks-preview/api",notebooksImportApi:"/serialize",accounts:"/accounts",apiV2_1:"/ajax-api/2.1"},credentials:"same-origin",headers:{"Content-Type":"application/json"},customFetch:(t=C(e,a),(e,a)=>S(function*(){let r;try{r=yield t(e,a)}catch(e){if(e instanceof g.m_&&e.response)r=e.response;else throw e}if(!e.includes("graphql")&&!r.ok){let a;if((0,o.W)("databricks.fe.infra.restEndpointsToThrowError",[]).some(a=>e.includes(a)))throw(0,g.CW)({},r.status);let t=[],i=yield r.text();try{a=JSON.parse(i)}catch(e){if(e instanceof SyntaxError)t.push({code:"RESPONSE_NOT_JSON",message:i});else throw e}return a&&t.push({code:a.error_code,message:a.message,errorDetails:a.details}),new Response(JSON.stringify({errors:t}),{status:200,statusText:"OK",headers:r.headers})}return r})()),fieldNameNormalizer:(e,a)=>{if(a&&a.length>0&&["query_result","visualizations"].includes(a[0])||a&&a.length>0&&"Resources"===a[0]||"$$value"===e)return e;return n()(e)}});if((0,l.Af)()){let e=i.request.bind(i),a=i.customFetch;i.request=(t,r)=>{let n=t.getContext(),o=n?.currentImplicitContext;if(o){i.customFetch=o.wrap(a);try{return e(t,r)}finally{i.customFetch=a}}return e(t,r)}}return i})(a??v.T.Auto,i),(0,d.j)("genai",(s=a??v.T.Auto,f=i,(0,c.$9)({uri:"/api/2.0/genai-mapi/universegraphql",credentials:"same-origin",fetch:C(s,f)})))]);return new c.Ri({cache:t,link:m,connectToDevTools:(0,o.W)("databricks.fe.infra.enableApolloClientDevTools",!1),defaultOptions:{watchQuery:{errorPolicy:"all"},query:{errorPolicy:"all"},mutate:{errorPolicy:"all"}}})})(e);return P.set(t,w),w}},201927:(e,a,t)=>{t.d(a,{G:()=>r});function r(){try{return window.top!==window}catch(e){return!0}}},246635:(e,a,t)=>{t.d(a,{BH:()=>o,Dx:()=>l,TS:()=>n,nk:()=>i});var r=t(141078);let i=(0,r.J1)`
  fragment LakeviewApiErrorFragment on ApiError {
    code
    message
    traceId
  }
`,n=(0,r.J1)`
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
`,o=(0,r.J1)`
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
`,l=(0,r.J1)`
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
`},394244:(e,a,t)=>{t.d(a,{AY:()=>i,VL:()=>n,ar:()=>l,sG:()=>s,ur:()=>o});var r=t(1859);function i(e){return`ingestion-${e}-`}let n=e=>({name:`${i(e)}open`,defaultValue:!1,codec:r.XE,historyAction:"push",errorMode:"throw"}),o=()=>({name:"subId",defaultValue:void 0,codec:r._p,historyAction:"push",errorMode:"throw"}),l=e=>({name:`${i(e)}-catalog`,defaultValue:void 0,codec:r._p,historyAction:"push",errorMode:"throw"}),s=e=>({name:`${i(e)}-schema`,defaultValue:void 0,codec:r._p,historyAction:"push",errorMode:"throw"})},436420:(e,a,t)=>{t.d(a,{N:()=>o});var r=t(141078),i=t(246635);let n=(0,r.J1)`
  ${i.Dx}
  fragment LakeviewconfigPublishedPageFragment on LakeviewconfigModelsPublishedPage {
    name
    displayName
    widgetOrder {
      name
    }
    customerRefId @includeSafex(name: "databricks.fe.lakeview.enableStableIdsInUrl", defaultValue: false)
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
    widgets {
      ...LakeviewconfigPublishedWidgetFragment
    }
    pageType
  }
`,o=(0,r.J1)`
  ${i.nk}
  ${i.Dx}
  ${i.TS}
  ${n}
  ${i.BH}
  query PublishedDashboardGetQueryWithDatasets(
    $input: LakeviewconfigServicesPublisheddashboardGetPublishedDashboardRequestInput!
  ) @component(name: "Lakeview.Dashboards") {
    lakeviewconfigServicesPublisheddashboardGetPublishedDashboard(input: $input) {
      name
      displayName
      warehouseId
      warehouseType
      revisionId
      publishedByUserId
      folderNodeInternalName
      revisionCreateTime {
        seconds
        nanos
      }
      semanticModels @includeSafex(name: "databricks.fe.lakeview.enableSemanticModels", defaultValue: false) {
        sources {
          name
          datasetName
        }
      }
      featureStates {
        enableGenieSpace
        enableMaterialization
      }
      genieSpace {
        overrideId
      }
      page {
        ...LakeviewconfigPublishedPageFragment
      }
      datasets {
        query
        name
        displayName
        assetName
        metricViewConfig
        catalog
        schema
        customerRefId @includeSafex(name: "databricks.fe.lakeview.enableStableIdsInUrl", defaultValue: false)
        datasetParameters {
          ...LakeviewconfigDatasetParametersFragment
        }
        columns {
          displayName
          expression
          description
        }
      }
      credentialsEmbedded
      servicePrincipalId
        @includeSafex(name: "databricks.fe.lakeview.enableServicePrincipalPublish", defaultValue: false)
      apiError {
        ...LakeviewApiErrorFragment
      }
      pages {
        ...LakeviewconfigPublishedPageFragment
      }
      pageOrder {
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
        applyModeEnabled
        theme {
          ...LakeviewDashboardThemeFragment
        }
      }
    }
  }
`},513517:(e,a,t)=>{t.d(a,{A:()=>s});var r=t(610435),i=t(692738),n=t(375214);function o(e){return(0,r.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,r.FD)("g",{fill:"currentColor",clipPath:"url(#HistoryIcon_svg__a)",children:[(0,r.Y)("path",{d:"m3.507 7.73.963-.962 1.06 1.06-2.732 2.732L-.03 7.732l1.06-1.06.979.978a7 7 0 1 1 2.041 5.3l1.061-1.06a5.5 5.5 0 1 0-1.604-4.158"}),(0,r.Y)("path",{d:"M8.25 8V4h1.5v3.69l1.78 1.78-1.06 1.06-2-2A.75.75 0 0 1 8.25 8"})]}),(0,r.Y)("defs",{children:(0,r.Y)("clipPath",{children:(0,r.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let l=(0,i.forwardRef)((e,a)=>(0,r.Y)(n.I,{ref:a,...e,component:o}));l.displayName="HistoryIcon";let s=l},551851:(e,a,t)=>{t.d(a,{w:()=>d});var r=t(455527),i=t(281902),n=t(961953),o=t(141078),l=t(278983);let s="_UndefinedFieldsRemoved",d=(0,o.S5)(({networkError:e,operation:a,forward:t})=>{var d,c,f;let m;if(e&&(d=a,"OperationDefinition"!==(m=(0,o.Vn)(d.query)).kind||"subscription"!==m.operation)){let d=e.result?.errors||[];try{let e,l=(c=d)&&c.length?c.filter(e=>e?.extensions?.code==="ValidationError"&&(e.message.includes("FieldUndefined")||e.message.includes("UnknownType"))).flatMap(e=>e.locations).filter(e=>void 0!==e):[],m=(f=d,e=/Unknown type ([^\s]+) @ '([^']+)'/,f&&f.length?f.filter(e=>e?.extensions?.code==="ValidationError"&&e.message.includes("UnknownType")).filter(e=>!e.locations?.length).flatMap(e=>e.message).map(a=>{let t=a.match(e);return null!==t?t[2]:""}).filter(e=>!!e):[]);if(l.length>0||m.length>0){let e=(0,r.YR)((0,i.qg)((0,n.y)(a.query)),{OperationDefinition:e=>({...e,name:{...e.name,value:(e?.name?.value||"")+s}}),InlineFragment(e){if(u(e.typeCondition,l))return null},FragmentDefinition(e){if(m.includes(e.name.value))return null},FragmentSpread(e){if(m.includes(e.name.value))return null},Field(e){if(u(e,l))return{kind:"Field",alias:e.alias?e.alias:e.name,name:{kind:"Name",value:"_null"},arguments:e.arguments,directives:e.directives,selectionSet:void 0}}}),d=(0,o.ki)(a.getContext(),{...a,query:e,operationName:a.operationName+s});return t(d)}}catch(e){(0,l.y)("clientsideEvent",{eventType:"invariantViolation",eventName:"IgnoreFieldUndefinedErorrLinkException"},e.toString())}}});function u(e,a){let t=e?.loc?.startToken;if(!t)return!1;return a.some(e=>t.line===e.line&&t.column===e.column)}},586852:(e,a,t)=>{t.d(a,{A:()=>s});var r=t(610435),i=t(692738),n=t(375214);function o(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"m15.06 8.03-7.03 7.03L6.97 14l5.22-5.22H1v-1.5h11.19L6.97 2.06 8.03 1z",clipRule:"evenodd"})})}let l=(0,i.forwardRef)((e,a)=>(0,r.Y)(n.I,{ref:a,...e,component:o}));l.displayName="ArrowRightIcon";let s=l},630482:(e,a,t)=>{t.d(a,{P:()=>n});var r=t(483588),i=t(901838);function n(){let e=(0,i.H)();if("UI"!==e.type)return{source:r.JMN.SOURCE_SCHEDULED_JOB};if(e.isEmbedded)return{source:r.JMN.SOURCE_EMBEDDED_UI,domain:e.domain};return{source:r.JMN.SOURCE_UI}}},699420:(e,a,t)=>{t.r(a),t.d(a,{default:()=>x});var r=t(610435),i=t(692738);t(413179),t(911024);var n=t(559178),o=t(22191),l=t(726977),s=t(379045),d=t(215288),u=t(576655),c=t(147403),f=t(141078),m=t(863708),h=t(48687),g=t(313957),p=t(746758),v=t(492482),w=t(642102);function k(e,a,t,r,i,n,o){try{var l=e[n](o),s=l.value}catch(e){t(e);return}l.done?a(s):Promise.resolve(s).then(r,i)}function b({orgId:e,esComponent:a,errorBoundaryId:t,children:i}){if(!(0,g.c)())return(0,r.Y)(r.FK,{});return(0,r.Y)(u.N4,{context:{type:"workspace",id:e},children:(0,r.Y)(f.XM,{client:(0,h.HA)(),children:(0,r.Y)(y,{orgId:e,esComponent:a,errorBoundaryId:t,children:i})})})}function y({orgId:e,esComponent:a,errorBoundaryId:n,children:o}){let l=(0,i.useMemo)(()=>(function(e){let a=(0,d.s$)(w.M),r=(0,c.oQ)();if(a.isInitialized()&&r)return{read(){}};return(0,p.Z)(()=>{var i;return(i=function*(){let{BrowserUtils:i}=yield(()=>{let e=()=>Promise.resolve().then(t.bind(t,162210));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(162210,"@databricks/webapp/js/user_platform/BrowserUtils","eager",e);return e()})();if(!e)throw Error("No orgId");let n=a.isInitialized()?Promise.resolve():i.getSettings(e,void 0,()=>{throw Error("Settings load failed")}),o=r?Promise.resolve():i.getPublicSettings(a=>{(0,c.CQ)(a,e)});yield Promise.all([o,n])},function(){var e=this,a=arguments;return new Promise(function(t,r){var n=i.apply(e,a);function o(e){k(n,t,r,o,l,"next",e)}function l(e){k(n,t,r,o,l,"throw",e)}o(void 0)})})()})})(e),[e]);return(0,r.Y)(m.JR,{esComponent:a,errorBoundaryId:n,FallbackComponent:v.T,children:(0,r.Y)(i.Suspense,{fallback:(0,r.Y)(s.A,{spin:!0,"data-testid":"embedded-workspace-loading-spinner"}),children:(0,r.Y)(S,{settingsResource:l,children:o})})})}function S({settingsResource:e,children:a}){return e.read(),(0,r.Y)(r.FK,{children:a})}let x=({workspaceId:e,dashboardId:a})=>(0,r.Y)(b,{orgId:e,esComponent:o.Es.CustomerPlatform,errorBoundaryId:l.s.LakeviewStandaloneDashboard,children:(0,r.Y)(n.m,{dashboardId:a})})},901838:(e,a,t)=>{t.d(a,{H:()=>d});var r=t(441535),i=t(846078),n=t(737358),o=t(201927);let l=()=>{let e=new URLSearchParams(window.location.search).get("scheduleName")??void 0,a=Number(new URLSearchParams(window.location.search).get("jobId")??void 0),t=Number(new URLSearchParams(window.location.search).get("runId")??void 0),l=!!(0,n.B6)(`${i.U1}/:dashboardId/snapshot/*`,window.location.pathname);if(void 0!==e)return{type:"Subscription",scheduleName:e,jobId:isNaN(a)?void 0:a,runId:isNaN(t)?void 0:t};{if(l)return{type:"Snapshot",jobId:isNaN(a)?void 0:a,runId:isNaN(t)?void 0:t};let e=(0,o.G)()&&window.location.pathname.startsWith("/embed/");return{type:"UI",isEmbedded:e,get domain(){return e?function(){try{let e=new URL(document.referrer).hostname??"",a=(0,r.W)("databricks.fe.lakeview.recordableEmbeddedUIDomainsForAudit","");if(!a)return;let t=JSON.parse(a).map(e=>RegExp(`\\b${e}\\b`,"i")).find(a=>a.test(e));return t?t.source.replace(/\\b/g,""):void 0}catch{return}}():void 0}}}},s=l();function d(e,a){let t=e?l():s;if(a)return{...t,traceSpan:a};return t}},916573:(e,a,t)=>{t.d(a,{A:()=>s});var r=t(610435),i=t(692738),n=t(375214);function o(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M16 8a.75.75 0 0 1-.435.68l-13.5 6.25a.75.75 0 0 1-1.02-.934L3.202 8 1.044 2.004a.75.75 0 0 1 1.021-.935l13.5 6.25A.75.75 0 0 1 16 8m-11.473.75-1.463 4.065L13.464 8l-10.4-4.815L4.527 7.25H8v1.5z",clipRule:"evenodd"})})}let l=(0,i.forwardRef)((e,a)=>(0,r.Y)(n.I,{ref:a,...e,component:o}));l.displayName="SendIcon";let s=l}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/72388.b6f4c3a4d2.chunk.js.map