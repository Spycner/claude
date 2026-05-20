"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[69022],{15568:(e,a,t)=>{t.d(a,{o:()=>l});var i=t(610435);t(692738);var r=t(497895),n=t(258182),s=t(79128),o=t(342411),d=t(608752);let l=({onBookTime:e,onDismiss:a})=>{let{theme:t}=(0,r.wn)();return(0,i.FD)(d.A,{onDismiss:a,children:[(0,i.Y)(n.Title,{children:(0,i.Y)(o.sA,{id:"uBLglZ",defaultMessage:"Share your demo experience"})}),(0,i.FD)(n.Description,{children:[(0,i.Y)("div",{css:{marginBottom:t.spacing.md},children:(0,i.Y)(o.sA,{id:"28RWh2",defaultMessage:"We saw you trying out our demos! We'd love to hear your thoughts on what worked well and what we can improve. Book a quick 20-minute chat to share your feedback."})}),(0,i.Y)("div",{css:{display:"flex",justifyContent:"flex-end"},children:(0,i.Y)(s.$n,{componentId:"demo-feedback-prompt-notification.book-time",type:"primary",onClick:e,children:(0,i.Y)(o.sA,{id:"9b3hD0",defaultMessage:"Book a time"})})})]})]})}},96437:(e,a,t)=>{t.d(a,{F0:()=>o,OU:()=>d,TS:()=>r.TS,c2:()=>u,kW:()=>l,lD:()=>n,nk:()=>r.nk,sN:()=>s});var i=t(141078),r=t(246635);let n=(0,i.J1)`
  ${r.BH}
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
`,s=(0,i.J1)`
  ${r.TS}
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
`,o=(0,i.J1)`
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
`,d=(0,i.J1)`
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
`,l=(0,i.J1)`
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
`,u=(0,i.J1)`
  ${n}
  ${s}
  ${d}
  ${o}
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
`},151586:(e,a,t)=>{t.d(a,{E:()=>i});let i=(0,t(342411).YK)({dashboardName:{id:"YCzShb",defaultMessage:"Bike share data analysis"},buildPageDisplayName:{id:"jXldPx",defaultMessage:"Build with Genie"},dashboardPageDisplayName:{id:"eyF7WG",defaultMessage:"Dashboard"},headerWidgetDisplayName:{id:"ufOLCS",defaultMessage:"Header"},moduleTitle:{id:"DHqSC/",defaultMessage:"Bike sharing analysis dashboard"},subtitle:{id:"jhpgpb",defaultMessage:"Build a dashboard step by step on bike-share data — explore, chart with Genie, publish."},scenario:{id:"xnHbNQ",defaultMessage:"You're a data analyst at a bike-sharing company. Your pipeline already turns raw trip records into clean tables — now stakeholders need to see the numbers. You'll build the dashboard step by step: explore the trips data, add a revenue-by-station chart with Genie, and publish so the whole team can read it."},learningObjectiveQueryData:{id:"0Npsio",defaultMessage:"Query and explore bike-share trip data"},learningObjectiveScatter:{id:"Wj4DX5",defaultMessage:"Track revenue and ridership with KPIs and trend charts"},learningObjectiveDashboard:{id:"DnkuKa",defaultMessage:"Ask Genie questions about your data in natural language"},learningObjectiveGenie:{id:"wRYoP5",defaultMessage:"Prompt Genie to generate dashboards"},viewTripsTitle:{id:"yeArng",defaultMessage:"Explore the data"},viewTripsSummary:{id:"v0M11c",defaultMessage:"Every dashboard starts with data. Each row of this dataset is a bike trip — pickup and dropoff stations, fare amount, and duration in hours."},viewTripsInstruction1:{id:"18IgZU",defaultMessage:"Have Genie count the trips in your dataset:"},viewTripsInstruction2:{id:"6Szinl",defaultMessage:"Try asking Genie other questions about the data — then click Next when you are ready."},buildBarChartWithGenieTitle:{id:"Uz+7EJ",defaultMessage:"Create a visualization"},buildBarChartWithGenieSummary:{id:"ifPAyU",defaultMessage:"Use the AI prompt to generate a chart, or configure one manually in the right panel."},buildBarChartWithGenieInstruction1:{id:"9YPDgH",defaultMessage:"Copy this prompt, paste it into the AI bar on the empty chart, and press Send:"},buildBarChartWithGeniePrompt:{id:"KUle6a",defaultMessage:"Show total revenue by station as a bar chart"},tourTheDashboardTitle:{id:"eiBRdk",defaultMessage:"See the full dashboard"},tourTheDashboardSummary:{id:"XiEqGq",defaultMessage:"Real dashboards combine multiple charts. This one pairs KPIs at the top with trend lines and a station breakdown."},tourTheDashboardInstruction1:{id:"75Xl8m",defaultMessage:"Take a look around — then click Next when you are ready to publish."},completionTitle:{id:"75z4cr",defaultMessage:"You're a dashboard pro \uD83C\uDF89"},completionSubtitle:{id:"0+zlMD",defaultMessage:"You took a raw dataset and turned it into an analytics dashboard. Publish it to share with your team."}})},156280:(e,a,t)=>{t.d(a,{D:()=>eo});var i,r,n,s=t(692738),o=t(342411),d=t(488655),l=t(899831),u=t(91192),g=t(151586);let c=(0,o.zR)({id:"lxsi97",defaultMessage:"Open the dashboard"}),p=(0,o.zR)({id:"jDUEPO",defaultMessage:"Ask Genie"}),m=(0,o.YK)({label:{id:"Z4D3tG",defaultMessage:"Publish"}});var h=t(373037),f=t(370463),b=t(287788),v=t(993520),y=t(844760),w=t(229880);function k(e,a,t,i,r,n,s){try{var o=e[n](s),d=o.value}catch(e){t(e);return}o.done?a(d):Promise.resolve(d).then(i,r)}function S(e){return function(){var a=this,t=arguments;return new Promise(function(i,r){var n=e.apply(a,t);function s(e){k(n,i,r,s,o,"next",e)}function o(e){k(n,i,r,s,o,"throw",e)}s(void 0)})}}let T="dbacademy",D="default",M=`${T}.${D}.silver_bike_events`;var E=((i={}).Uploading="uploading",i.Materializing="materializing",i),C=((r={}).Checking="checking",r.Starting="starting",r),A=((n={}).Idle="idle",n.CheckingWarehouse="checking-warehouse",n.StartingWarehouse="starting-warehouse",n.UploadingData="uploading-data",n.BuildingTable="building-table",n.CreatingDashboard="creating-dashboard",n);class x extends Error{failureReason;constructor(e,a){super(a),this.failureReason=e}}function N(e){switch(e){case"checking":return"warehouseDiscovery";case"starting":return"warehouseStart"}}function I(e){switch(e){case"checking":return"checking-warehouse";case"starting":return"starting-warehouse"}}let R=(0,o.YK)({checkingWarehouseTitle:{id:"q3KKng",defaultMessage:"Checking your workspace"},checkingWarehouseSubtitle:{id:"6RVnap",defaultMessage:"Looking for an available SQL warehouse."},startingWarehouseTitle:{id:"MwoAX6",defaultMessage:"Starting SQL warehouse"},startingWarehouseSubtitle:{id:"k9tEF4",defaultMessage:"This can take up to a minute on first start."},uploadingDataTitle:{id:"FvP0Hf",defaultMessage:"Uploading bike share data"},uploadingDataSubtitle:{id:"gB9TMz",defaultMessage:"Copying the sample rides into your workspace volume."},buildingTableTitle:{id:"DQrT8O",defaultMessage:"Preparing dataset"},buildingTableSubtitle:{id:"KOzQQx",defaultMessage:"Building the silver_bike_events table so the dashboard has data to plot."},creatingDashboardTitle:{id:"6LPdsT",defaultMessage:"Creating dashboard"},creatingDashboardSubtitle:{id:"oBjSfA",defaultMessage:"Setting up your bike share analysis dashboard."}});var L=t(961953),_=t(141078),P=t(846643),$=t(560997);let F={version:3,frame:{title:"Daily Revenue by Rider Type",showTitle:!0,showDescription:!1},widgetType:"line",encodings:{x:{fieldName:"ride_date",scale:{type:"temporal"},displayName:"Date"},y:{fieldName:"daily_revenue",scale:{type:"quantitative"},displayName:"Daily Revenue"},color:{fieldName:"rider_type",scale:{type:"categorical"},displayName:"Rider Type"}}},O={version:2,widgetType:"counter",encodings:{value:{fieldName:"total_revenue",displayName:"Total Revenue",format:{type:"number-currency",currencyCode:"USD",decimalPlaces:{type:"exact",places:0},abbreviation:"none"}}},frame:{title:"Total Revenue",showTitle:!0}},W={version:2,widgetType:"counter",encodings:{value:{fieldName:"total_trips",displayName:"Total Trips",format:{type:"number-plain",decimalPlaces:{type:"exact",places:0},abbreviation:"none"}}},frame:{title:"Total Trips",showTitle:!0}},B={version:2,widgetType:"counter",encodings:{value:{fieldName:"avg_fare",displayName:"Avg Fare per Trip",format:{type:"number-currency",currencyCode:"USD",decimalPlaces:{type:"exact",places:2},abbreviation:"none"}}},frame:{title:"Avg Fare per Trip",showTitle:!0}},U={version:3,frame:{title:"Top Stations by Total Revenue",showTitle:!0,showDescription:!1},widgetType:"bar",encodings:{x:{fieldName:"station",scale:{type:"categorical"},displayName:"Station"},y:{fieldName:"total_revenue",scale:{type:"quantitative"},displayName:"Total Revenue"}}};function Y(e){return{displayName:"Total Revenue by Station",rawJsonContent:U,datasetName:e,queryFields:[{fieldName:"station",expression:"`Station`"},{fieldName:"total_revenue",expression:"`Total Revenue`"}],position:V}}let q={version:3,widgetType:"bar",encodings:{}},H={width:12,height:8,x:0,y:0},z={width:6,height:2,x:0,y:0},J={width:2,height:2,x:6,y:0},G={width:2,height:2,x:8,y:0},j={width:2,height:2,x:10,y:0},V={width:12,height:5,x:0,y:2},K={width:12,height:5,x:0,y:7};function Z(e,a,t,i,r,n,s){try{var o=e[n](s),d=o.value}catch(e){t(e);return}o.done?a(d):Promise.resolve(d).then(i,r)}function Q(e){return function(){var a=this,t=arguments;return new Promise(function(i,r){var n=e.apply(a,t);function s(e){Z(n,i,r,s,o,"next",e)}function o(e){Z(n,i,r,s,o,"throw",e)}s(void 0)})}}let X="dashboards/",ee=(0,_.J1)`
  mutation E2EDashboardCreateAndInitializeMutation(
    $input: LakeviewconfigServicesDashboardCreateAndInitializeDashboardRequestInput!
  ) @component(name: "EnduserExp.Sign-in & Sign-Up") {
    lakeviewconfigServicesDashboardCreateAndInitializeDashboard(input: $input) {
      dashboard {
        name
        displayName
      }
      pages {
        name
        displayName
        etag
        customerRefId
      }
      datasets {
        name
        displayName
        etag
        customerRefId
      }
      apiError {
        code
        message
        traceId
      }
    }
  }
`,ea=(0,o.YK)({totalRevenue:{id:"fCKyBV",defaultMessage:"Total Revenue"},totalTrips:{id:"p1zECV",defaultMessage:"Total Trips"},avgFarePerTrip:{id:"nA52np",defaultMessage:"Avg Fare per Trip"},dailyRevenueByRiderType:{id:"nnPJF+",defaultMessage:"Daily Revenue by Rider Type"}}),et=`SELECT
  CAST(SUM(ride_revenue) AS DECIMAL(19,2)) AS \`Total Revenue\`,
  COUNT(*) AS \`Total Trips\`,
  CAST(AVG(ride_revenue) AS DECIMAL(19,2)) AS \`Avg Fare\`
FROM ${M}
WHERE ride_date IS NOT NULL`,ei=`SELECT
  ride_date AS \`Date\`,
  user_type AS \`Rider Type\`,
  CAST(SUM(ride_revenue) AS DECIMAL(19,2)) AS \`Daily Revenue\`
FROM ${M}
WHERE ride_date IS NOT NULL
GROUP BY ride_date, user_type
ORDER BY ride_date, user_type`,er=[{displayName:u.e9,query:`-- One row per ride: the row-per-event view the dashboard reads from.
SELECT
  ride_date,
  DAYOFWEEK(ride_date) AS day_of_week,
  bike_id,
  user_type,
  start_station_id AS pickup_zip,
  end_station_id AS dropoff_zip,
  CONCAT(start_station_id, '-', end_station_id) AS route,
  CAST(DATEDIFF(MINUTE, start_time, end_time) / 60.0 AS DECIMAL(10,2)) AS trip_duration_hours,
  ride_revenue AS fare_amount
FROM ${M}
WHERE ride_date IS NOT NULL`,catalog:T,schema:D},{displayName:u.$y,query:`-- Pre-aggregated rollup: one row per origin station, sorted by revenue.
SELECT
  CAST(REPLACE(REPLACE(start_station_id, 'STATION_', ''), 'station_', '') AS STRING) AS \`Station\`,
  COUNT(*) AS \`Number Trips\`,
  CAST(SUM(ride_revenue) AS DECIMAL(19,2)) AS \`Total Revenue\`
FROM ${M}
WHERE ride_date IS NOT NULL
GROUP BY start_station_id
ORDER BY \`Total Revenue\` DESC`,catalog:T,schema:D},{displayName:u._5,query:et,catalog:T,schema:D},{displayName:u._Y,query:ei,catalog:T,schema:D}];var en=t(617575);function es(e,a,t,i,r,n,s){try{var o=e[n](s),d=o.value}catch(e){t(e);return}o.done?a(d):Promise.resolve(d).then(i,r)}function eo(){let e=(0,o.tz)(),a=(0,d.Zp)(),i=(0,h.u)(e=>e.showPipelineDemoSession),r=(0,en.xA)(),n=(0,s.useRef)(!1),[k,_]=(0,s.useState)(A.Idle),[U,V]=(0,s.useState)(null),Z=(0,s.useCallback)((t,r)=>{let n=e.formatMessage(g.E.moduleTitle),s=(0,f.X9)(e),o=Math.min(Math.max(r?.currentStepIndex??0,0),Math.max(s.length-1,0)),d=function({intl:e,dashboard:a,stepDefinitions:t,moduleTitle:i,currentStepIndex:r=0,observabilityInstallId:n,observabilityEntryMode:s}){let o=(0,u.M6)(a.dashboardId),d=[{id:"view-trips-dataset",label:e.formatMessage(p),actionType:"dispatchAgentChatPrompt",prompt:"How many trips are in this dataset?"}],h=[{id:"complete",label:e.formatMessage(m.label),actionType:"publishDashboard"}],f=(0,u.YN)(a.dashboardId,a.buildPageName),b=(0,u.YN)(a.dashboardId,a.dashboardPageName),v=t.map(e=>({id:e.id,stepId:e.id,title:e.title,summary:e.summary,instructions:function(e){if("view-trips-dataset"!==e.id||!e.instructions?.length)return e.instructions;let[a,...t]=e.instructions;return[{...a,inlineAction:d[0]},...t]}(e),destinationRoute:function(e){if("view-trips-dataset"===e&&a.tripsCustomerRefId)return(0,u.VG)(a.dashboardId,a.tripsCustomerRefId);if("build-bar-chart-with-genie"===e)return a.buildPageName?f:b;if("tour-the-dashboard"===e||"complete"===e)return b;return o}(e.id),actions:function(e){if("view-trips-dataset"===e)return d;if("complete"===e)return h}(e.id)})),y=0===v.length?0:Math.min(Math.max(r,0),v.length-1);return{sessionKind:"pipeline-demo",moduleId:u.xs,moduleTitle:i,lessonId:u.xs,lessonTitle:i,destinationRoute:v[y]?.destinationRoute??u.K3,destinationLabel:e.formatMessage(c),backToCourseRoute:u.K3,currentStepIndex:y,steps:v,completionTitle:e.formatMessage(g.E.completionTitle),completionSubtitle:e.formatMessage(g.E.completionSubtitle),floatingDimensions:{width:l.RG,height:l.sr},observabilityInstallId:n,observabilityEntryMode:s,observabilityStartedAtMs:n?Date.now():void 0,observabilityLastStepEnteredAtMs:n?Date.now():void 0}}({intl:e,dashboard:t,stepDefinitions:s,moduleTitle:n,currentStepIndex:o,observabilityInstallId:r?.observabilityInstallId,observabilityEntryMode:r?.observabilityEntryMode});a(d.destinationRoute),i(d)},[e,a,i]),et=(0,s.useCallback)((a=!1)=>{var i;return(i=function*(){var i,s;if(n.current)return;n.current=!0,V(null);let o=(0,u.Ui)(),d=Date.now(),l={tutorialId:u.xs,templateVersion:u.ag,contentHash:(0,u.t_)(),installId:o,stepCount:String(f.vQ)},c=a?"explore":"launch";r(en.ZR.E2E_DASHBOARD_DEMO_LAUNCH,{success:!0,installId:o,entryMode:c,templateVersion:u.ag,contentHash:(0,u.t_)()});let p=C.Checking,m=E.Uploading;try{let n,h,k=yield S(function*(){try{let e=yield(0,y.S)(`/ajax-api/2.1/unity-catalog/tables/${encodeURIComponent(M)}`,{method:"GET"});if(e.ok)return!0;if(404===e.status)return!1;let a=yield e.text().catch(()=>"");if(a.includes("RESOURCE_DOES_NOT_EXIST")||a.includes("TABLE_DOES_NOT_EXIST"))return!1;return!0}catch{return!0}})();try{p=C.Checking,_(I(p)),n=yield(0,b.rP)()}catch(e){throw new x(N(p),e instanceof Error?e.message:String(e))}try{p=C.Starting,_(I(p)),yield(0,b.c5)(n.id,3e5)}catch(e){throw new x(N(p),e instanceof Error?e.message:String(e))}if(!k)try{yield function(e){return S(function*({warehouseId:e,onPhase:a}){let i;a?.("uploading");let{default:r}=yield(()=>{let e=()=>t.e(78473).then(t.t.bind(t,878473,17));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(878473,"../hooks/build-data-pipeline-rides.csv.md?raw","lazy",e);return e()})();yield(0,b.Fr)({fileOrBlob:new Blob([r],{type:"text/csv;charset=utf-8"}),destinationVolumeFolder:(0,w.Ud)(),destinationFilename:w.aZ}),a?.("materializing");let n=yield(0,v.xj)(e,(i=(0,w.bV)().replace(/'/g,"''"),`CREATE OR REPLACE TABLE ${M} AS
SELECT
  TO_DATE(start_time) AS ride_date,
  ride_id,
  CAST(start_time AS TIMESTAMP) AS start_time,
  CAST(end_time AS TIMESTAMP) AS end_time,
  start_station_id,
  end_station_id,
  bike_id,
  user_type,
  CAST(
    CASE
      WHEN user_type = 'member' THEN (DATEDIFF(MINUTE, CAST(start_time AS TIMESTAMP), CAST(end_time AS TIMESTAMP)) / 60.0) * 10.0
      ELSE (DATEDIFF(MINUTE, CAST(start_time AS TIMESTAMP), CAST(end_time AS TIMESTAMP)) / 60.0) * 15.0
    END AS DECIMAL(19,4)
  ) AS ride_revenue
FROM read_files('${i}', format => 'csv', header => true)
WHERE DATEDIFF(MINUTE, CAST(start_time AS TIMESTAMP), CAST(end_time AS TIMESTAMP)) > 0`),{omitQueryInErrorLog:!0});if(n.error)throw Error(`Failed to materialize ${M}: ${n.error}`)}).apply(this,arguments)}({warehouseId:n.id,onPhase:e=>{m=e,_(function(e){switch(e){case E.Uploading:return"uploading-data";case E.Materializing:return"building-table"}}(e))}})}catch(e){throw new x(function(e){switch(e){case E.Uploading:return"silverTableUpload";case E.Materializing:return"silverTableMaterialize"}}(m),e instanceof Error?e.message:String(e))}_(A.CreatingDashboard);let T=e.formatMessage(g.E.dashboardName),D=e.formatMessage(g.E.buildPageDisplayName),R=e.formatMessage(g.E.dashboardPageDisplayName);try{h=yield(i={dashboard:{displayName:T,warehouseId:n.id},datasets:er,pages:[{displayName:D},{displayName:R}]},Q(function*(){let e=JSON.stringify({operationName:"E2EDashboardCreateAndInitializeMutation",query:(0,L.y)(ee),variables:{input:i}}),a=yield(0,y.S)("/graphql/E2EDashboardCreateAndInitializeMutation",{method:"POST",headers:{"Content-Type":"application/json","x-databricks-operation-identifier":yield(0,P.m)(e)},body:e});if(!a.ok)throw Error(`Failed to create dashboard (HTTP ${a.status})`);return a.json()})())}catch(e){throw new x("dashboardCreate",e instanceof Error?e.message:String(e))}if(h.errors?.length)throw new x("dashboardCreate",h.errors[0].message);let U=h.data?.lakeviewconfigServicesDashboardCreateAndInitializeDashboard;if(U?.apiError?.message)throw new x("dashboardCreate",U.apiError.message);if(!U?.dashboard?.name)throw new x("dashboardCreate","Dashboard was created without a name");let V=U.datasets?.find(e=>e.displayName===u.e9),et=U.datasets?.find(e=>e.displayName===u._5),ei=U.datasets?.find(e=>e.displayName===u.$y),es=U.datasets?.find(e=>e.displayName===u._Y),eo=U.pages?.find(e=>e.displayName===D),ed=U.pages?.find(e=>e.displayName===R),el={dashboardId:(s=U.dashboard.name).startsWith(X)?s.slice(X.length):s,dashboardName:U.dashboard.displayName||T,tripsCustomerRefId:V?.customerRefId??void 0,buildPageName:eo?.name??void 0,dashboardPageName:ed?.name??void 0},eu=[];if(eo?.name){let{failures:e}=yield function(e){return Q(function*({pageName:e,stationRevenueDatasetName:a}){let t=[];try{yield(0,$.Z)({pageName:e,spec:a?Y(a):{displayName:"",rawJsonContent:q,position:H},existingPositions:[]})}catch(a){let e=a instanceof Error?a.message:String(a);t.push(`Bar chart: ${e}`)}return{failures:t}}).apply(this,arguments)}({pageName:eo.name,stationRevenueDatasetName:a?ei?.name??void 0:void 0});eu.push(...e)}if(ed?.name&&et?.name&&ei?.name&&es?.name){let{failures:a}=yield function(e){return Q(function*({pageName:e,summaryDatasetName:a,stationRevenueDatasetName:t,dailyRevenueDatasetName:i,intl:r}){let n=[{displayName:r.formatMessage(ea.totalRevenue),rawJsonContent:O,datasetName:a,queryFields:[{fieldName:"total_revenue",expression:"`Total Revenue`"}],position:J},{displayName:r.formatMessage(ea.totalTrips),rawJsonContent:W,datasetName:a,queryFields:[{fieldName:"total_trips",expression:"`Total Trips`"}],position:G},{displayName:r.formatMessage(ea.avgFarePerTrip),rawJsonContent:B,datasetName:a,queryFields:[{fieldName:"avg_fare",expression:"`Avg Fare`"}],position:j},Y(t),{displayName:r.formatMessage(ea.dailyRevenueByRiderType),rawJsonContent:F,datasetName:i,queryFields:[{fieldName:"ride_date",expression:"`Date`"},{fieldName:"rider_type",expression:"`Rider Type`"},{fieldName:"daily_revenue",expression:"`Daily Revenue`"}],position:K}],s=[],o=[];try{let{updatedLayout:a}=yield(0,$.s)({pageName:e,spec:{displayName:r.formatMessage(g.E.headerWidgetDisplayName),markdown:"# Bike Share Analytics",position:z},existingPositions:o});o=a}catch(a){let e=a instanceof Error?a.message:String(a);s.push(`Header: ${e}`)}for(let a of n)try{let{updatedLayout:t}=yield(0,$.Z)({pageName:e,spec:a,existingPositions:o});o=t}catch(t){let e=t instanceof Error?t.message:String(t);s.push(`${a.displayName}: ${e}`)}return{failures:s}}).apply(this,arguments)}({pageName:ed.name,summaryDatasetName:et.name,stationRevenueDatasetName:ei.name,dailyRevenueDatasetName:es.name,intl:e});eu.push(...a)}eu.length?r(en.ZR.E2E_DASHBOARD_DEMO_INSTALL_RESULT,{success:!1,failureReason:"dashboardCreate",errorMessage:`Pre-built widgets failed: ${eu.join("; ")}`,...l,dashboardId:el.dashboardId,elapsedMs:Date.now()-d}):r(en.ZR.E2E_DASHBOARD_DEMO_INSTALL_RESULT,{success:!0,...l,dashboardId:el.dashboardId,elapsedMs:Date.now()-d}),Z(el,{currentStepIndex:a?Math.max(f.Mo.indexOf("complete"),0):void 0,observabilityInstallId:o,observabilityEntryMode:c})}catch(t){let e=t instanceof Error?t.message:String(t),a=function(e){if(e.includes("CATALOG_NOT_FOUND")||e.includes("SCHEMA_NOT_FOUND")||e.includes(`Catalog '${T}'`)||e.includes(`catalog '${T}'`))return`Your workspace is missing the \`${T}\` catalog (or the \`${D}\` schema inside it) that this demo writes to. Ask a workspace admin to create the catalog, or contact Databricks support.`;return e}(e);r(en.ZR.E2E_DASHBOARD_DEMO_INSTALL_RESULT,{success:!1,failureReason:t instanceof x?t.failureReason:void 0,errorMessage:e,...l,elapsedMs:Date.now()-d}),V(a)}finally{_(A.Idle),n.current=!1}},function(){var e=this,a=arguments;return new Promise(function(t,r){var n=i.apply(e,a);function s(e){es(n,t,r,s,o,"next",e)}function o(e){es(n,t,r,s,o,"throw",e)}s(void 0)})})()},[e,Z,r]),ei=(0,s.useCallback)(()=>et(!1),[et]),eo=(0,s.useCallback)(()=>et(!0),[et]),ed=k===A.Idle?null:function(e,a){switch(a){case A.CheckingWarehouse:return{title:e.formatMessage(R.checkingWarehouseTitle),subtitle:e.formatMessage(R.checkingWarehouseSubtitle)};case A.StartingWarehouse:return{title:e.formatMessage(R.startingWarehouseTitle),subtitle:e.formatMessage(R.startingWarehouseSubtitle)};case A.UploadingData:return{title:e.formatMessage(R.uploadingDataTitle),subtitle:e.formatMessage(R.uploadingDataSubtitle)};case A.BuildingTable:return{title:e.formatMessage(R.buildingTableTitle),subtitle:e.formatMessage(R.buildingTableSubtitle)};case A.CreatingDashboard:return{title:e.formatMessage(R.creatingDashboardTitle),subtitle:e.formatMessage(R.creatingDashboardSubtitle)}}}(e,k);return{isInstalling:k!==A.Idle,error:U,provisioningTitle:ed?.title??null,provisioningSubtitle:ed?.subtitle??null,launchDemo:ei,exploreResult:eo}}},170638:(e,a,t)=>{t.d(a,{Yd:()=>n,Ov:()=>s.O,tF:()=>o.t});var i=t(141078),r=t(96437);let n=(0,i.J1)`
  ${r.nk}
  ${r.c2}
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
`;var s=t(758946),o=t(614516)},176126:(e,a,t)=>{t.d(a,{Q:()=>d});var i=t(610435),r=t(956935),n=t(497895),s=t(382908);let o=(0,r.i7)("0%{transform:translateX(-100%);}100%{transform:translateX(386%);}"),d=({title:e,subtitle:a})=>{let{theme:t}=(0,n.wn)();return(0,i.Y)("div",{"data-testid":"fundamentals-provisioning-overlay",css:{position:"absolute",inset:0,zIndex:10,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:t.colors.backgroundPrimary,padding:t.spacing.xl},children:(0,i.FD)("div",{css:{display:"flex",flexDirection:"column",alignItems:"center",gap:t.spacing.md,width:"100%",maxWidth:250,textAlign:"center"},children:[(0,i.Y)(s.o.Title,{level:2,withoutMargins:!0,children:e}),(0,i.Y)(s.o.Text,{color:"secondary",children:a}),(0,i.Y)("div",{role:"progressbar","aria-label":`${e} ${a}`,css:{width:"100%",maxWidth:240,height:t.spacing.sm,marginTop:t.spacing.xs,backgroundColor:t.colors.borderDecorative,borderRadius:t.borders.borderRadiusMd,overflow:"hidden",position:"relative"},children:(0,i.Y)("div",{css:{width:"35%",height:"100%",borderRadius:t.borders.borderRadiusMd,backgroundColor:t.colors.actionPrimaryBackgroundDefault,animation:`${o} 1.8s ease-in-out infinite`,"@media (prefers-reduced-motion: reduce)":{animation:"none"}}})})]})})}},183136:(e,a,t)=>{t.d(a,{P:()=>r});var i=t(141078);let r=(0,i.J1)`
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
`},200179:(e,a,t)=>{t.a(e,async(e,i)=>{try{t.r(a),t.d(a,{RouteComponent:()=>N});var r=t(610435),n=t(692738),s=t(497895),o=t(814510),d=t(382908),l=t(79128),u=t(339518),g=t(742557),c=t(342411),p=t(863708),m=t(22191),h=t(726977),f=t(829339),b=t(217985),v=t(488655),y=t(799738),w=t(176126),k=t(870310),S=t(782342),T=t(53904),D=t(151586),M=t(156280),E=e([k]);k=(E.then?(await E)():E)[0];let C=(0,c.YK)({breadcrumbHome:{id:"YcYVqv",defaultMessage:"Home"},ctaHeading:{id:"pfbUm4",defaultMessage:"Ready to build?"},takeTheTour:{id:"wiGRcA",defaultMessage:"Build it myself"},scenarioHeading:{id:"/VJ9jO",defaultMessage:"Scenario"},learningObjectivesHeading:{id:"cTui1V",defaultMessage:"What you'll learn"},dashboardImageAlt:{id:"2VOMSf",defaultMessage:"Bike sharing analysis dashboard"}}),A=(0,k.B)("e2e-dashboard-demo"),x=()=>{let{theme:e}=(0,s.wn)(),a=(0,c.tz)(),{isInstalling:t,error:i,provisioningTitle:n,provisioningSubtitle:p,launchDemo:m,exploreResult:h}=(0,M.D)(),v=(0,y.bc)(y.z.DEMO_INLINE_FEEDBACK),k=a.formatMessage(D.E.moduleTitle),E=a.formatMessage(D.E.subtitle),A=a.formatMessage(D.E.scenario),x=[a.formatMessage(D.E.learningObjectiveQueryData),a.formatMessage(D.E.learningObjectiveScatter),a.formatMessage(D.E.learningObjectiveDashboard),a.formatMessage(D.E.learningObjectiveGenie)];return(0,f.r)({title:k}),(0,r.FD)("div",{css:{width:"100%",maxWidth:896,margin:"0 auto",display:"flex",flexDirection:"column",gap:e.spacing.xl,position:"relative",padding:`0 ${e.spacing.lg}px ${e.spacing.xl}px`},children:[t&&n&&p?(0,r.Y)(w.Q,{title:n,subtitle:p}):null,(0,r.FD)("div",{css:{display:"flex",flexDirection:"column",gap:e.spacing.sm},children:[(0,r.FD)(o.Q,{children:[(0,r.Y)(o.Q.Item,{children:(0,r.Y)(b.N,{to:"/",asTypographyLink:!0,componentId:"tutorials.e2e-dashboard-demo.breadcrumb.home",children:a.formatMessage(C.breadcrumbHome)})}),(0,r.Y)(o.Q.Item,{children:k})]}),(0,r.Y)(d.o.Title,{level:2,withoutMargins:!0,children:k})]}),(0,r.FD)("div",{css:{display:"grid",gridTemplateColumns:"1fr 240px",border:`1px solid ${e.colors.border}`,borderRadius:e.borders.borderRadiusXl,overflow:"hidden",maxHeight:392,[`@media (max-width: ${e.responsive.breakpoints.md-1}px)`]:{gridTemplateColumns:"1fr",maxHeight:"none"}},children:[(0,r.Y)("div",{css:{display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden"},children:(0,r.Y)("img",{src:S,alt:a.formatMessage(C.dashboardImageAlt),css:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})}),(0,r.FD)("div",{css:{display:"flex",flexDirection:"column",justifyContent:"center",gap:24,padding:`${e.spacing.xl}px 28px`,borderLeft:`1px solid ${e.colors.border}`,backgroundColor:e.colors.backgroundSecondary},children:[(0,r.FD)("div",{css:{display:"flex",flexDirection:"column",gap:e.spacing.sm},children:[(0,r.Y)(d.o.Title,{level:4,withoutMargins:!0,children:a.formatMessage(C.ctaHeading)}),(0,r.Y)(d.o.Text,{color:"secondary",css:{"&&":{fontSize:13,lineHeight:e.typography.lineHeightBase}},children:E})]}),(0,r.FD)("div",{css:{display:"flex",flexDirection:"column",gap:e.spacing.sm},children:[(0,r.Y)(l.$n,{componentId:"e2e-dashboard-demo.build-it-myself",type:"primary",size:"middle",loading:t,onClick:()=>{m()},children:a.formatMessage(C.takeTheTour)}),(0,r.Y)(d.o.Link,{componentId:"e2e-dashboard-demo.explore-result",disabled:t,onClick:()=>{h()},css:{"&&":{fontSize:13,lineHeight:e.typography.lineHeightBase,color:e.colors.textSecondary,textAlign:"center",textDecoration:"none"},"&&:hover, &&:focus, &&:active":{color:e.colors.textPrimary,textDecoration:"none"}},children:a.formatMessage({id:"w319iT",defaultMessage:"or explore the result →"})})]}),i?(0,r.Y)(u.F,{componentId:"e2e-dashboard-demo.install-error",type:"error",message:i,closable:!1}):null]})]}),(0,r.FD)("div",{css:{display:"flex",flexDirection:"column",gap:e.spacing.sm},children:[(0,r.Y)(d.o.Title,{level:3,withoutMargins:!0,children:a.formatMessage(C.scenarioHeading)}),(0,r.Y)(d.o.Text,{color:"secondary",css:{"&&":{fontSize:13,lineHeight:e.typography.lineHeightBase}},children:A})]}),(0,r.FD)("div",{css:{display:"flex",flexDirection:"column",gap:e.spacing.sm},children:[(0,r.Y)(d.o.Title,{level:3,withoutMargins:!0,children:a.formatMessage(C.learningObjectivesHeading)}),(0,r.Y)("ul",{css:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:e.spacing.xs},children:x.map(a=>(0,r.FD)("li",{css:{display:"flex",alignItems:"flex-start",gap:e.spacing.sm},children:[(0,r.Y)(g.A,{css:{color:e.colors.textValidationSuccess,marginTop:2,flexShrink:0}}),(0,r.Y)(d.o.Text,{css:{"&&":{fontSize:13,lineHeight:e.typography.lineHeightBase}},children:a})]},a))})]}),v?(0,r.Y)(T.v6,{storageKey:"demo_inline_feedback_collected:e2e-dashboard-demo"}):null]})},N=()=>{let{theme:e}=(0,s.wn)(),a=(0,v.Zp)(),t=(0,y.xH)();if((0,n.useEffect)(()=>{t||a("/",{replace:!0})},[t,a]),!t)return null;return(0,r.Y)("div",{"data-testid":"e2e-dashboard-demo-page",css:{display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing.lg,paddingBottom:0,margin:0,width:"100%",height:"100%",overflowY:"auto",boxSizing:"border-box"},children:(0,r.Y)(p.JR,{esComponent:m.Es.SignInSignUp,errorBoundaryId:h.s.TutorialPage,FallbackComponent:A,children:(0,r.Y)(x,{})})})};i()}catch(e){i(e)}})},370463:(e,a,t)=>{t.d(a,{Mo:()=>r,TE:()=>s,X9:()=>o,vQ:()=>n});var i=t(151586);let r=["view-trips-dataset","build-bar-chart-with-genie","tour-the-dashboard","complete"],n=r.length,s=e=>r.includes(e);function o(e){let a,t,r,n,s,o,d,l,u,g,c,p,m;return[{id:"view-trips-dataset",title:(a=i.E.viewTripsTitle,e.formatMessage(a)),summary:(t=i.E.viewTripsSummary,e.formatMessage(t)),instructions:[{text:(r=i.E.viewTripsInstruction1,e.formatMessage(r))},{text:(n=i.E.viewTripsInstruction2,e.formatMessage(n))}]},{id:"build-bar-chart-with-genie",title:(s=i.E.buildBarChartWithGenieTitle,e.formatMessage(s)),summary:(o=i.E.buildBarChartWithGenieSummary,e.formatMessage(o)),instructions:[{text:(d=i.E.buildBarChartWithGenieInstruction1,e.formatMessage(d)),codeBlock:(l=i.E.buildBarChartWithGeniePrompt,e.formatMessage(l)),codeBlockLanguage:"text"}]},{id:"tour-the-dashboard",title:(u=i.E.tourTheDashboardTitle,e.formatMessage(u)),summary:(g=i.E.tourTheDashboardSummary,e.formatMessage(g)),instructions:[{text:(c=i.E.tourTheDashboardInstruction1,e.formatMessage(c))}]},{id:"complete",title:(p=i.E.completionTitle,e.formatMessage(p)),summary:(m=i.E.completionSubtitle,e.formatMessage(m))}]}},560997:(e,a,t)=>{t.d(a,{Z:()=>g,s:()=>c});var i=t(961953),r=t(716962),n=t(846643),s=t(750848),o=t(844760);function d(e,a,t,i,r,n,s){try{var o=e[n](s),d=o.value}catch(e){t(e);return}o.done?a(d):Promise.resolve(d).then(i,r)}function l(e){return function(){var a=this,t=arguments;return new Promise(function(i,r){var n=e.apply(a,t);function s(e){d(n,i,r,s,o,"next",e)}function o(e){d(n,i,r,s,o,"throw",e)}s(void 0)})}}let u=(0,i.y)(r.Yd);function g(e){return l(function*({pageName:e,spec:a,existingPositions:t}){let i=(0,s.BZ)(),r=!a.datasetName,d={displayName:a.displayName,renderSpec:{widgetType:"VIZ",textBoxRenderSpec:null,vizRenderSpec:{rawJson:JSON.stringify(a.rawJsonContent)}},queries:r?[]:[{queryName:"main_query",query:{datasetName:a.datasetName,disaggregatedData:!0,fields:a.queryFields??[]}}]},l={width:a.position.width,height:a.position.height,xCoordinate:a.position.x,yCoordinate:a.position.y},g={widgetPositions:[...t,{widgetName:i,...l}]},c=JSON.stringify({operationName:"WidgetCreateAndPositionMutation",query:u,variables:{widget:d,parent:e,widgetPosition:l,parentPageEtag:"0",parentPageLayout:g,widgetToCreate:{widget:d,tempName:i}}}),p=yield(0,o.S)("/graphql/WidgetCreateAndPositionMutation",{method:"POST",headers:{"Content-Type":"application/json","x-databricks-operation-identifier":yield(0,n.m)(c)},body:c});if(!p.ok)throw Error(`Failed to create widget (HTTP ${p.status})`);let m=yield p.json();if(m.errors?.length)throw Error(m.errors[0].message);let h=m.data?.lakeviewconfigServicesWidgetCreateAndPositionWidget?.apiError;if(h?.message)throw Error(h.message);let f=m.data?.lakeviewconfigServicesWidgetCreateAndPositionWidget?.parentPage?.layout?.widgetPositions;return{updatedLayout:f?f.map(e=>({widgetName:e.widgetName,width:e.width,height:e.height,xCoordinate:e.xCoordinate,yCoordinate:e.yCoordinate})):[...t,{widgetName:i,...l}]}}).apply(this,arguments)}function c(e){return l(function*({pageName:e,spec:a,existingPositions:t}){let i=(0,s.BZ)(),r={displayName:a.displayName,renderSpec:{widgetType:"TEXT_BOX",vizRenderSpec:null,textBoxRenderSpec:{content:a.markdown,contentType:"MARKDOWN"}},queries:[]},d={width:a.position.width,height:a.position.height,xCoordinate:a.position.x,yCoordinate:a.position.y},l={widgetPositions:[...t,{widgetName:i,...d}]},g=JSON.stringify({operationName:"WidgetCreateAndPositionMutation",query:u,variables:{widget:r,parent:e,widgetPosition:d,parentPageEtag:"0",parentPageLayout:l,widgetToCreate:{widget:r,tempName:i}}}),c=yield(0,o.S)("/graphql/WidgetCreateAndPositionMutation",{method:"POST",headers:{"Content-Type":"application/json","x-databricks-operation-identifier":yield(0,n.m)(g)},body:g});if(!c.ok)throw Error(`Failed to create text widget (HTTP ${c.status})`);let p=yield c.json();if(p.errors?.length)throw Error(p.errors[0].message);let m=p.data?.lakeviewconfigServicesWidgetCreateAndPositionWidget?.apiError;if(m?.message)throw Error(m.message);let h=p.data?.lakeviewconfigServicesWidgetCreateAndPositionWidget?.parentPage?.layout?.widgetPositions;return{updatedLayout:h?h.map(e=>({widgetName:e.widgetName,width:e.width,height:e.height,xCoordinate:e.xCoordinate,yCoordinate:e.yCoordinate})):[...t,{widgetName:i,...d}]}}).apply(this,arguments)}},614516:(e,a,t)=>{t.d(a,{t:()=>n});var i=t(141078),r=t(96437);let n=(0,i.J1)`
  ${r.nk}
  ${r.OU}
  mutation WidgetUpdateMutation($input: LakeviewconfigServicesWidgetUpdateWidgetRequestInput!)
  @component(name: "Lakeview.Dashboards") {
    lakeviewconfigServicesWidgetUpdateWidget(input: $input) {
      ...LakeviewconfigWidgetFragment
      apiError {
        ...LakeviewApiErrorFragment
      }
    }
  }
`},716962:(e,a,t)=>{t.d(a,{gd:()=>n,Pj:()=>s,Zz:()=>o,xu:()=>d,mF:()=>l,fZ:()=>u,QX:()=>c,y1:()=>p,_W:()=>g,Nf:()=>m.N,gB:()=>h,EE:()=>b,fT:()=>v,Yd:()=>y.Yd,Ov:()=>y.Ov,tF:()=>y.tF});var i=t(141078),r=t(96437);let n=(0,i.J1)`
  ${r.kW}
  mutation BookmarkCreateMutation($input: lakeviewConfigBookmark_CreateBookmarkRequestInput!)
  @component(name: "Lakeview.Dashboards") {
    lakeviewConfigBookmark_create(input: $input) {
      ...LakeviewconfigBookmarkResponseFragment
    }
  }
`,s=(0,i.J1)`
  mutation BookmarkDeleteMutation($input: lakeviewConfigBookmark_DeleteBookmarkRequestInput!)
  @component(name: "Lakeview.Dashboards") {
    lakeviewConfigBookmark_delete(input: $input) {
      __typename
    }
  }
`,o=(0,i.J1)`
  ${r.kW}
  mutation BookmarkUpdateMutation($input: lakeviewConfigBookmark_UpdateBookmarkRequestInput!)
  @component(name: "Lakeview.Dashboards") {
    lakeviewConfigBookmark_update(input: $input) {
      ...LakeviewconfigBookmarkResponseFragment
    }
  }
`,d=(0,i.J1)`
  ${r.nk}
  ${r.lD}
  mutation DashboardUpdateMutation($input: LakeviewconfigServicesDashboardUpdateDashboardRequestInput!)
  @component(name: "Lakeview.Dashboards") {
    lakeviewconfigServicesDashboardUpdateDashboard(input: $input) {
      ...LakeviewDraftDashboardResponseFragment
      apiError {
        ...LakeviewApiErrorFragment
      }
    }
  }
`,l=(0,i.J1)`
  ${r.lD}
  ${r.nk}
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
`,u=(0,i.J1)`
  ${r.nk}
  ${r.TS}
  ${r.sN}
  mutation DatasetUpdateMutation($input: LakeviewconfigServicesDatasetUpdateDatasetRequestInput!)
  @component(name: "Lakeview.Dashboards") {
    lakeviewconfigServicesDatasetUpdateDataset(input: $input) {
      ...LakeviewconfigDatasetResponseFragment
      apiError {
        ...LakeviewApiErrorFragment
      }
    }
  }
`,g=(0,i.J1)`
  ${r.nk}
  ${r.F0}
  mutation PageUpdateMutation($input: LakeviewconfigServicesPageUpdatePageRequestInput!)
  @component(name: "Lakeview.Dashboards") {
    lakeviewconfigServicesPageUpdatePage(input: $input) {
      ...LakeviewconfigPageResponseFragment
      apiError {
        ...LakeviewApiErrorFragment
      }
    }
  }
`,c=(0,i.J1)`
  ${r.nk}
  ${r.F0}
  ${r.lD}
  ${r.sN}
  ${r.OU}
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
`,p=(0,i.J1)`
  ${r.nk}
  ${r.F0}
  ${r.lD}
  ${r.sN}
  ${r.OU}
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
`;var m=t(754559);let h=(0,i.J1)`
  ${r.nk}
  mutation DraftPublishedDashboardDeleteAllRevisionsMutation(
    $input: LakeviewconfigServicesPublisheddashboardDeleteAllPublishedDashboardRevisionsRequestInput!
  ) @component(name: "Lakeview.Dashboards") {
    lakeviewconfigServicesPublisheddashboardDeleteAllPublishedDashboardRevisions(input: $input) {
      apiError {
        ...LakeviewApiErrorFragment
      }
    }
  }
`;var f=t(183136);let b=(0,i.J1)`
  ${f.P}
  mutation SemanticModelCreateMutation($input: lakeviewConfigSemanticModel_CreateSemanticModelRequestInput!)
  @component(name: "Lakeview.Dashboards") {
    lakeviewConfigSemanticModel_create(input: $input) {
      ...LakeviewSemanticModel
    }
  }
`,v=(0,i.J1)`
  ${f.P}
  mutation SemanticModelUpdateMutation($input: lakeviewConfigSemanticModel_UpdateSemanticModelRequestInput!)
  @component(name: "Lakeview.Dashboards") {
    lakeviewConfigSemanticModel_update(input: $input) {
      ...LakeviewSemanticModel
    }
  }
`;var y=t(170638)},750848:(e,a,t)=>{t.d(a,{BZ:()=>r});var i=t(754469);function r(){let e=(0,i.P)((0,i.D)());return`temp/widgets/${e}`}},754469:(e,a,t)=>{function i(){return window.crypto.randomUUID().replace(/-/g,"")}function r(e){let a=e.replace(/-/g,"");if(!/^[0-9a-fA-F]{32}$/.test(a))throw Error("Invalid UUID format");let t=BigInt("0x"+a.slice(0,16))^BigInt("0x"+a.slice(16,32));return((Number(t>>BigInt(32)&BigInt(0xffffffff))^Number(t&BigInt(0xffffffff)))>>>0).toString(16).padStart(8,"0")}t.d(a,{D:()=>i,P:()=>r})},754559:(e,a,t)=>{t.d(a,{N:()=>n});var i=t(141078),r=t(96437);let n=(0,i.J1)`
  ${r.nk}
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
`},758946:(e,a,t)=>{t.d(a,{O:()=>n});var i=t(141078),r=t(96437);let n=(0,i.J1)`
  ${r.nk}
  ${r.F0}
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
`},782342:(e,a,t)=>{e.exports=t.p+"static/media/bike-share-analytics-banner.2a88f77c60.png"}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/69022.0baecc7bb5.chunk.js.map