"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[55851,80440],{20117:(e,t,a)=>{a.d(t,{Kg:()=>u,NE:()=>g,Uo:()=>f,mw:()=>p});var n=a(196852),i=a(342411),r=a(22191),s=a(876855),o=a(416400),d=a(432993),c=a(430478),l=a(157817);function m(e,t,a,n,i,r,s){try{var o=e[r](s),d=o.value}catch(e){a(e);return}o.done?t(d):Promise.resolve(d).then(n,i)}let u="generateMetricViewYaml",p="metric-view-yaml-editor",h={displayType:"singleRow",titles:{running:(0,i.zR)({id:"7Ati/Y",defaultMessage:"Generating metric view"}),success:(0,i.zR)({id:"j6H00u",defaultMessage:"Generated metric view"}),failure:(0,i.zR)({id:"1UukSQ",defaultMessage:"Failed to generate metric view"})}},g=()=>(0,n.z6)({esComponent:r.Es.DataExplorer,name:u,description:`Generate a complete metric view YAML definition with only the changes that the user requested.

CRITICAL RESTRICTIONS:
- NEVER add, modify, or suggest dimensions, measures, or joins unless explicitly requested by the user
- Do not remove or add quotes around measures and dimensions
- Only make the specific changes that the user explicitly asks for
- Do not remove or modify existing comments in the YAML content
- Do not add "helpful" or "optimized" dimensions/measures without explicit request
- When creating new joins: ONLY use columns from provided table schemas. DO NOT invent or assume column names exist
- When creating new dimensions and measures (only when explicitly requested), use the provided table information
- Never send partial YAML; always provide a complete metric view definition
- When suggesting semantic metadata format, only set the format property if the data type is relevant (e.g., date, number, currency). When in doubt, omit the format property
- Follow YAML syntax, semantic metadata rules, and escaping rules for columns with spaces

REQUIRED NEXT STEP: After this tool completes, you MUST immediately call validateMetricViewYaml, if it exists, with the generated yamlDefinition to validate the source. Do NOT suggest SQL queries for the user to run manually.`,display:h,parameters:{type:"object",properties:{thoughts:{type:"string",description:"Your detailed reasoning explaining what changes you are making to the metric view and why. This will be shown to the user."},yamlDefinition:{type:"string",description:"A single, complete metric view YAML definition string."}},required:["thoughts","yamlDefinition"],additionalProperties:!1},execute:e=>{var t;return(t=function*(){let t=e?.yamlDefinition??"",a=f(t);if(a)return a;let n=d.n.generateUuidV4();return(0,o.uT)({type:o.bS.ADD_EDIT,payload:{cellEditId:n,code:t,cellId:p,name:"Metric View YAML",language:"yaml",source:l.Wx.ASSISTANT_EDIT,status:"start"}}),setTimeout(()=>{(0,o.uT)({type:o.bS.HANDLE_SHOWN_EDIT,payload:{cellEditId:n,editAction:c.w.SHOW,cellId:p}})},0),{success:!0,thoughts:e.thoughts,yamlDefinition:e.yamlDefinition}},function(){var e=this,a=arguments;return new Promise(function(n,i){var r=t.apply(e,a);function s(e){m(r,n,i,s,o,"next",e)}function o(e){m(r,n,i,s,o,"throw",e)}s(void 0)})})()}});function f(e){try{let t=(0,s.Ig)(e),a=(0,s.HV)(t);if(!a.isValid)return{success:!1,error:{message:`Generated metric view YAML is incomplete or invalid: ${a.errors.join("; ")}. Please regenerate a complete metric view YAML that fixes these issues.`}};return null}catch(e){return{success:!1,error:{message:`Failed to parse generated YAML: ${e instanceof Error?e.message:String(e)}. Please regenerate valid YAML with correct syntax.`}}}}},27799:(e,t,a)=>{a.d(t,{J:()=>i});var n=a(441535);function i(){return(0,n.W)("databricks.fe.dataRooms.attachStatementIdSignatures",!1)}},112214:(e,t,a)=>{a.d(t,{G:()=>s,U:()=>d});var n=a(196852),i=a(22191);function r(e,t,a,n,i,r,s){try{var o=e[r](s),d=o.value}catch(e){a(e);return}o.done?t(d):Promise.resolve(d).then(n,i)}let s="metricViewTableSelectionTool",o={type:"object",properties:{yamlContent:{type:"string",description:"The user-provided YAML content of the metric view without any modifications."},actionType:{type:"string",description:"The type of action to perform. Either selecting a fact table or a dimension table",enum:["select_fact","select_join"]},thoughts:{type:"string",description:"Your detailed reasoning explaining why you are using the table selection tool. This will be shown to the user."}},required:["actionType","yamlContent","thoughts"],additionalProperties:!1},d=()=>(0,n.ph)({esComponent:i.Es.DataExplorer,name:s,description:`Tool for allowing users to select fact or dimension tables to add to their metric view.
    ONLY use when user wants to add a fact/dimension table but didn't specify which one.
    Don't use if they provided any table name/identifier.`,parameters:o,execute:e=>{var t;return(t=function*(){try{let t=`I can help you add a ${"select_fact"===e.actionType?"fact":"dimension"} table to your metric view. Select a table to continue.`;return{success:!0,actionType:e.actionType,yamlContent:e.yamlContent,shortcutLLMResponse:t,thoughts:e.thoughts}}catch(t){return{success:!1,thoughts:e.thoughts,error:{message:"Failed to process metric view table selection"}}}},function(){var e=this,a=arguments;return new Promise(function(n,i){var s=t.apply(e,a);function o(e){r(s,n,i,o,d,"next",e)}function d(e){r(s,n,i,o,d,"throw",e)}o(void 0)})})()}})},190898:(e,t,a)=>{a.d(t,{D$:()=>s,Ml:()=>d,dD:()=>o,fT:()=>c});var n,i=a(696514),r=a(441535),s=((n={}).SUBMIT_RUN="SUBMIT_RUN",n.SUBMIT_RUN_V2="SUBMIT_RUN_V2",n.DRY_RUN_INFO="DRY_RUN_INFO",n.DRY_RUN_INFO_V2="DRY_RUN_INFO_V2",n.GET_PAGE_CONTEXT="GET_PAGE_CONTEXT",n.PAGE_ACTION_CALL="PAGE_ACTION_CALL",n.EDIT_ACTION_CALL="EDIT_ACTION_CALL",n.UPDATE_MESSAGE_HISTORY="UPDATE_MESSAGE_HISTORY",n);let o=(0,i.fH)("Assistant::PageContextEventId"),d=(0,i.fH)("Assistant::DrawerPageContextEventId"),c=e=>{if(!(0,r.W)("databricks.fe.ingestion.enableIngestionDrawerAssistant",!1))return o.isAvailable()?o.call(e):Promise.resolve(void 0);return d.isAvailable()?d.call(e):o.isAvailable()?o.call(e):Promise.resolve(void 0)}},360629:(e,t,a)=>{a.d(t,{e:()=>n});let n={name:"metricViewAgent",skills:[a(610323).H]}},380440:(e,t,a)=>{a.d(t,{Y:()=>m});var n=a(485669),i=a(763835),r=a(255844),s=a(419847),o=a(483588),d=a(889620);let c=e=>(0,i.Uc)().jobDetails({jobId:e.id}),l={[o.z$1.ALERT]:e=>`/sql/alerts/${e.id}`,[o.z$1.ALERT_V2]:e=>`/sql/alerts-v2/${e.id}`,[o.z$1.ASSET_TYPE_UNSPECIFIED]:()=>"/",[o.z$1.DASHBOARD]:e=>`/sql/dashboards/${e.id}`,[o.z$1.DASHBOARD_V3]:e=>`/dashboardsv3/${e.id}/published`,[o.z$1.ENDPOINT]:e=>`/ml/models/${e.name}/serving`,[o.z$1.ENDPOINT_CENTRIC_ENDPOINT]:e=>`/ml/endpoints/${e.name}`,[o.z$1.EXPERIMENT]:e=>`/ml/experiments/${e.id}`,[o.z$1.FEATURE_TABLE]:e=>`/feature-store/${e.name}`,[o.z$1.FILE]:e=>(0,n.ZZ)({id:e.id}),[o.z$1.FOLDER]:e=>`/browse/folders/${e.id}`,[o.z$1.JOB]:c,[o.z$1.LIBRARY]:e=>`/#library/${e.id}`,[o.z$1.MODEL]:e=>`/ml/models/${e.name}`,[o.z$1.NOTEBOOK]:e=>(0,n.TQ)(e.id),[o.z$1.PROJECT]:e=>`/browse/folders/${e.id}`,[o.z$1.QUERY]:e=>s.G0.queryEditor({queryUuid:e.id}),[o.z$1.UC_TABLE]:e=>`/explore/data/${e.name.replace(/\./g,"/")}`,[o.z$1.UC_CATALOG]:e=>`/explore/data/${e.name.replace(/\./g,"/")}`,[o.z$1.UC_MODEL]:e=>`/explore/data/models/${e.name.replace(/\./g,"/")}`,[o.z$1.UC_SCHEMA]:e=>`/explore/data/${e.name.replace(/\./g,"/")}`,[o.z$1.UC_VOLUME]:e=>`/explore/data/volumes/${e.name.replace(/\./g,"/")}`,[o.z$1.UC_FUNCTION]:e=>`/explore/data/functions/${e.name.replace(/\./g,"/")}`,[o.z$1.MARKETPLACE_LISTING]:e=>`/marketplace/consumer/listings/${e.id}`,[o.z$1.PIPELINE]:e=>`/pipelines/${e.id}`,[o.z$1.DATA_ROOM]:e=>`/genie/rooms/${e.id}`,[o.z$1.APP]:e=>`/apps/${e.name}`,[o.z$1.APP_USE]:e=>`/apps/${e.name}`,[o.z$1.PIPELINE_EDITOR]:e=>(0,r.zs)()?`/editor/pipelines/${e.id}?contextId=${d.H.fromPipeline(e.id)}&redirectToSourceFile=true`:`/pipelines/${e.id}`,[o.z$1.DESIGNER_FILE]:e=>(0,n.eV)({id:e.id}),[o.z$1.SYSTEM_MANAGED_JOB]:c};function m(e){return l[e.type||o.z$1.ASSET_TYPE_UNSPECIFIED](e)}},430478:(e,t,a)=>{a.d(t,{a:()=>r,w:()=>i});var n,i=((n={}).SHOW="SHOW",n.ACCEPT="ACCEPT",n.REJECT="REJECT",n.JUMP="JUMP",n);class r{actions=[];constructor({actions:e}){this.actions=e}dispatch(e){let t=this.actions.find(t=>t.type===e.type);if(t)return t.run(e.payload)}}},490320:(e,t,a)=>{a.d(t,{a:()=>n});function n(e,t,a){let n=a?.useDisplayNameOverride!==!1,i=new Map;for(let e of t)if(e.metadata_json)try{let t=JSON.parse(e.metadata_json);if(t&&"object"==typeof t){let a=n?t:{...t,display_name:void 0};i.set(e.name,a)}}catch{}if(0===i.size)return e;return{...e,columns:e.columns.map(e=>{let t=i.get(e.name);return t?{...e,metadata:t}:e})}}},621529:(e,t,a)=>{a.d(t,{JS:()=>g,N4:()=>f,Z6:()=>p});var n=a(196852),i=a(22191),r=a(342411),s=a(441535),o=a(103341),d=a(988512),c=a(660618),l=a(876855),m=a(432993);function u(e,t,a,n,i,r,s){try{var o=e[r](s),d=o.value}catch(e){a(e);return}o.done?t(d):Promise.resolve(d).then(n,i)}let p="validateMetricViewYaml",h={displayType:"inputsOutputs",inputLabel:(0,r.zR)({id:"JKEQpr",defaultMessage:"YAML"}),outputLabel:(0,r.zR)({id:"DrLyq0",defaultMessage:"Result"}),statusText:{running:(0,r.zR)({id:"lkgUrn",defaultMessage:"Validating metric view"}),success:(0,r.zR)({id:"yMMS97",defaultMessage:"Validated metric view"}),failure:(0,r.zR)({id:"wQJrsJ",defaultMessage:"Failed to validate metric view"})},monospace:!0,displayFunction:(e,t)=>{let a=e?.yamlDefinition??"",n=a?[a.length>500?`${a.slice(0,500)}...`:a]:[];if(!t||t.success)return{inputs:n,outputType:"empty"};return{inputs:n,outputType:"textList",lines:[t.error?.message??"Validation failed"]}}},g=(e,{resolveCatalog:t}={})=>(0,n.z6)({esComponent:i.Es.DataExplorer,name:p,needsApproval:!0,display:h,description:`Validate a metric view YAML definition by executing a remote SQL query.
If validation fails, you MUST call generateMetricViewYaml with a corrected YAML definition that fixes the reported error, then validate again, but only up to 3 times for a single edit.
Do not call generateMetricViewYaml again if the validation errors are unrelated to the YAML definition itself (e.g. data source does not support metric views)`,parameters:{type:"object",properties:{yamlDefinition:{type:"string",description:"The full metric view YAML definition to validate."},thoughts:{type:"string",description:"Your detailed reasoning explaining what you are doing and why. This will be shown to the user."}},required:["yamlDefinition","thoughts"],additionalProperties:!1},execute:a=>{var n;return(n=function*(){let n,i=e();if(!i)return{success:!1,error:{message:"No data source available. Cannot validate metric view YAML without a connected warehouse."}};let r=a?.yamlDefinition??"",l=f(r);if((0,s.W)("databricks.fe.metricViews.passCatalogToValidation",!0)){let e=yield t?.(r);e&&e!==c.UQ&&e!==c.IM&&(n={catalog:e})}try{let e=`mv_validation_temp_${m.n.generateUuidV4().replace(/-/g,"_")}`,t=(0,d.y)(i).generateCreateOrReplaceTempMetricViewSql({metricView:e,yamlContent:l});return yield(0,o.M)({dataSource:i,queryString:t,queryName:"validate_metric_view_yaml",options:n}),{success:!0,message:"Metric view YAML is valid and executable."}}catch(t){let e=t instanceof Error?t.message:String(t);return{success:!1,error:{message:`Metric view validation failed: ${e}. Fix the error in the YAML and call generateMetricViewYaml with the corrected complete YAML definition, then validate again.`}}}},function(){var e=this,t=arguments;return new Promise(function(a,i){var r=n.apply(e,t);function s(e){u(r,a,i,s,o,"next",e)}function o(e){u(r,a,i,s,o,"throw",e)}s(void 0)})})()}});function f(e){let t=(0,l.Ig)(e);if(t&&"object"==typeof t){let e=Object.fromEntries(Object.entries(t).filter(([e])=>l.R0.has(e)));return(0,l.KE)(e)}return e}},645452:(e,t,a)=>{a.d(t,{h:()=>b,j:()=>E});var n=a(692738),i=a(546738),r=a(602393),s=a(624021),o=a(835146),d=a(278658),c=a(360629),l=a(112214),m=a(20117),u=a(735517),p=a(16716),h=a(484383),g=a(440750),f=a(621529),y=a(829347);function w(e,t,a,n,i,r,s){try{var o=e[r](s),d=o.value}catch(e){a(e);return}o.done?t(d):Promise.resolve(d).then(n,i)}function _(e){return function(){var t=this,a=arguments;return new Promise(function(n,i){var r=e.apply(t,a);function s(e){w(r,n,i,s,o,"next",e)}function o(e){w(r,n,i,s,o,"throw",e)}s(void 0)})}}let v=`
  Handling common requests in the metric view editor page:

  Request 1: "Add a fact table" or "Join with a dimension table"
    1. Ask the user: "Would you like me to search for a suitable table based on your data, or would you prefer to select a table yourself?"
    2. Wait for the user's response before proceeding
    3. Based on the user's response:
       - If the user wants YOU to search/find a table: Use the searchTables tool to find relevant tables, then recommend options
       - If the user wants to select a table THEMSELVES: Call the ${l.G} tool to open the table picker UI

  Request 2: "Add dimensions & measures"
  - Respond with a list of 3-4 example requests that the user can make that specifies a few dimensions & measures to add to the metric view.
    At least 2 requests should be about adding specific dimensions or measures.
    If there are dimension or measures, at least 1 request should be about cloning an existing measure and adding a rolling window to it.
    1 request should be about completing missing metadata for all measures and dimensions, if any are missing.
  - Examples (DO NOT use these exact phrases):
    - Add revenue and cost measures and date & product line as dimensions
    - Clone my existing margin measure & add a rolling 30 day window
    - Complete missing metadata for all measures and dimensions

  Request 3: "Add or change measures and dimensions"
  - Respond with a list of 3-4 relevant example requests that the user can make that modifies ONLY the current measure or dimension, specified in the prompt context.
    The current measure or dimension name is provided in the prompt context starting with, "The current measure or dimension name is".
    Include the current measure or dimension name in the reply.
    At least 1 request should be about changing the current measure or dimension column, if applicable.
    1 request should be about completing missing metadata for the current measure or dimension, if any are missing.
    If the current measure or dimension is a measure, at least 1 request should be about adding a rolling window to it.
    If the current measure or dimension is a datetime, at least 1 request should be about changing the date or time format of the dimension.
  - Examples (DO NOT use these exact phrases):
    - Help me fill out the missing metadata for this measure
    - I want this measure to be revenue for the region, "XXXXX".
    - Update this measure with a rolling 7 day window.
    - Change this dimension to be at the month granularity.
`,b="metricViewAgentModeAgent",E=({apolloClient:e,isMetricViewEditorPage:t,dataSource:a,resolveCatalog:w})=>{let E=(0,r.L)({dataSource:void 0,module:"sqlEditorChatWindow"}),T=(0,s.D)({dataSource:void 0,module:"sqlEditorChatWindow"}),A=(0,o.E_)(),x=(0,n.useRef)(a);x.current=a;let M=(0,n.useRef)(w);M.current=w;let S=(0,n.useMemo)(()=>[(0,h.Cs)([c.e]),(0,m.NE)(),(0,u.P)(e,E,T),(0,p.v)(e,E),(0,l.U)(),(0,f.JS)(()=>x.current,{resolveCatalog:e=>_(function*(){return M.current?.(e)})()})],[e,E,T]);return(0,n.useMemo)(()=>{if(!A||!t)return null;return{agent:new i.g({name:b,instructions:()=>_(function*(){let e=`
Role: Act as an expert data engineering assistant helping users create and modify metric view definitions in YAML format.

${y.zQ}
----------------------------------------------------------------------------------------------------------------------
${v}
----------------------------------------------------------------------------------------------------------------------
TOOL USAGE:
  - Use the generateMetricViewYaml tool to output YAML definitions
  - Do NOT include YAML content in the assistant message body
  - The tool description contains detailed restrictions - follow them carefully
----------------------------------------------------------------------------------------------------------------------
## Metric View Knowledge
When you need detailed YAML syntax, query examples, or best practices for metric views, load the using-metric-views skill.
----------------------------------------------------------------------------------------------------------------------
${y.Ht}
----------------------------------------------------------------------------------------------------------------------
Common tasks I can help with:
1. Adding window functions to measures for running totals, cumulative sums, or period-to-date analytics
2. Setting up joins between fact and dimension tables for star schema modeling
3. Creating advanced dimension expressions using SQL functions
4. Building composable measures that reference other dimensions or measures
5. Improving expression logic for better performance or readability
6. Adding filters to optimize query performance
7. Fixing validation errors in YAML syntax or SQL expressions
`,t=yield(0,g.Iq)(c.e.skills);if(t)return`${e}

${t}`;return e})(),get model(){return(0,d.g)()},flow:"default",tools:S,modelSettings:{toolChoice:S.length>0?"auto":void 0},toolUseBehavior:S.length>0?{kind:"stopAtTools",stopAtToolNames:[l.G]}:"run_llm_again"}),contextGetter:({context:e})=>_(function*(){let{language:t,code:a}=e?.currentCodeBlock??{language:"",code:""},n=`Here is my ${t} code which contains measures and dimensions that I want to build on top of my source table: 
\`\`\`${t}
${a}
\`\`\`
`,i="";return e?.currentCodeBlock&&(i+=n),e?.prompt&&(i+=`
Additional context from my page:
${e.prompt}
`),{prompt:i}})(),userMessageMatchesAgent:()=>!0}},[A,t,S])}},829347:(e,t,a)=>{a.d(t,{Ht:()=>h,Lt:()=>M,OW:()=>x,mm:()=>d,xR:()=>y,yI:()=>A,zQ:()=>f,zx:()=>w});var n=a(692738),i=a(835146),r=a(267647),s=a(935963);function o(e,t,a,n,i,r,s){try{var o=e[r](s),d=o.value}catch(e){a(e);return}o.done?t(d):Promise.resolve(d).then(n,i)}let d="metricViewCreationAgent",c=`
  When generating SQL queries for querying a metric view, use the following examples:

  IMPORTANT: Always wrap dimension and measure names that contain spaces with backticks (\`) in SQL queries and expressions.

  Example 1:
  SELECT
    date,
    \`Dimension Name\` as dimension_name,       -- CORRECT: backticks for names with spaces
    MEASURE(\`Measure Name\`) as measure_name,  -- CORRECT: backticks for names with spaces
    MEASURE(measure_2) as measure_2,            -- CORRECT: no backticks needed for names without spaces
    regular_dimension                           -- CORRECT: no backticks needed for names without spaces
  FROM
    catalog.schema.my_metric_view
  GROUP BY
    ALL

  Example 2 - Common mistake to avoid:
  -- INCORRECT: Missing backticks for names with spaces
  SELECT Dimension Name, MEASURE(Measure Name) FROM metric_view

  -- CORRECT: Proper backtick usage
  SELECT \`Dimension Name\`, MEASURE(\`Measure Name\`) FROM metric_view
`,l=`
  1. Window Measure - enable defining Measures in common windowed, cumulative, or semiadditive aggregations.

  Example:
  # A trailing / moving window measure over date
  - name: t7d_distinct_users
    expr: count(distinct user_id)
    window:
      - order: date
        range: trailing 7 day
        semiadditive: last

  2. Columns with Spaces - ⚠️ CRITICAL RULE ⚠️
  When SOURCE columns contain spaces, you MUST use this exact syntax:
  
  For DIMENSIONS: Wrap in backticks, then wrap the entire thing in double quotes
  For MEASURES: Wrap in backticks inside the aggregate function

  Example - Source table has columns: "Trip Distance", "Fare Amount", "Passenger Count"
  
  dimensions:
    # "Trip Distance" has spaces → use backticks + double quotes
    - name: trip_distance
      expr: "\`Trip Distance\`"  # ✅ CORRECT - backticks wrapped in double quotes
      display_name: Trip Distance
      comment: Distance of the trip
    
    # "Passenger Count" has spaces → use backticks + double quotes
    - name: passenger_count
      expr: "\`Passenger Count\`"  # ✅ CORRECT
      display_name: Passenger Count
      comment: Number of passengers
  
  measures:
    # "Fare Amount" has spaces → use backticks inside SUM()
    - name: total_fare
      expr: SUM(\`Fare Amount\`)  # ✅ CORRECT - backticks inside aggregate
      display_name: Total Fare
      comment: Sum of all fares
    
    # "Trip Distance" has spaces → use backticks inside AVG()
    - name: avg_distance
      expr: AVG(\`Trip Distance\`)  # ✅ CORRECT
      display_name: Average Distance
      comment: Average trip distance

  3. Joins - enable modeling star schemas where the source is treated as a fact table LEFT OUTER JOINed with multiple dimension tables. The join should be many-to-one.
  ⚠️ Only use columns from "Source table information:", "Dimension table information:", and provided table schemas.
  
  Example 1:
  # source namespace can be used to reference columns from the metric view's source and the join name to reference columns from the join source
  joins:
    - name: orders
      source: samples.tpch.orders
      on: o_orderkey = l_orderkey  # Verify both columns exist in provided context

  Example 2:
  # source column must be prefixed with "source." if the column exists in both the metric view's source and the join source
  joins:
    - name: orders
      source: samples.tpch.orders
      on: source.order_id = orders.order_id  # Verify both columns exist in provided context

  dimensions:
  # Dimension on top of join column (using dot notation to pick a field from the orders join)
    - name: order_date
      expr: orders.o_orderdate
      display_name: Order Date
      format:
        type: date
        date_format: locale_short_month
        leading_zeros: false
      synonyms:
        - order_time
        - date_of_order
      comment: order date for this order

  measures:
  # Measure on top of join column
    - name: max_order_date
      expr: max(orders.o_orderdate)
      display_name: Max Order Date
      format:
        type: date
        date_format: locale_short_month
        leading_zeros: false
      synonyms:
        - max order date
        - latest order date
      comment: max order date for this order

  4. Intra Composability (Within a Metric View):
  - Dimensions can reference Dimensions defined earlier in the YAML definition
  - If you're copying and pasting expressions, STOP and use a reference instead
  - Measures can reference all Dimensions
  - Measures can reference Measures defined earlier in the YAML definition using the MEASURE() function.

  Example:
  dimensions:
  - name: Order Month
    expr: date_trunc('month', date)
    format:
      type: date
      date_format: locale_short_month
      leading_zeros: false
    synonyms:
      - order month
      - month of order

  - name: Previous Order Month
    expr: add_months(\`Order Month\`, -1)
    format:
      type: date
      date_format: locale_short_month
      leading_zeros: false
    synonyms:
      - previous order month
      - last order month

  measures:
  - name: Earliest Order Month
    expr: MIN(\`Order Month\`)
    format:
      type: date
      date_format: locale_short_month
      leading_zeros: false
    synonyms:
      - earliest order month
      - first order month

  - name: Revenue
    expr: SUM(sales_amount)
    display_name: Total Revenue
    format:
      type: currency
      currency_code: USD
      decimal_places:
        type: exact
        places: 2
      abbreviation: compact

  - name: Costs
    expr: SUM(item_cost)
    display_name: Total Costs
    format:
      type: currency
      currency_code: USD
      decimal_places:
        type: exact
        places: 2
      abbreviation: compact

  - name: Profit
    expr: MEASURE(Revenue) - MEASURE(Costs)
    format:
      type: currency
      currency_code: USD
      decimal_places:
        type: exact
        places: 2
      abbreviation: compact

  - name: Data Size
    expr: SUM(file_size_bytes)
    display_name: Total Data Size
    format:
      type: byte
      decimal_places:
        type: max
        places: 2

  5. Inter Composability (Between Metric Views):
  If the source is the Metric View metric_view_in_source and we’re defining a new new_metric_view.
  - Dimensions in new_metric_view can reference any Dimension or Measure in metric_view_in_source
  - Measures in new_metric_view can reference any Dimension or Measure in metric_view_in_source

  Example:
  version: 0.1
  source: metric_view_in_source
  dimensions:
  # Dim on Dim from other metric view
  - name: Order Date
    expr: order_date_dim
    format:
      type: date
      date_format: locale_short_month
      leading_zeros: false
    synonyms:
      - date of order

  measures:
  # Measure on Dim from other metric view
  - name: Latest Order Month
    expr: max(order_date_dim_month_comp)

  # Measure on Measure from other metric view
  - name: Latest Order Year
    expr: date_trunc('year', MEASURE(max_order_date_measure))
    display_name: Latest Order Year
    format:
      type: date
      date_format: locale_long_month
      leading_zeros: false
    synonyms:
      - latest order year

  6. Materialization - accelerates metric view queries using pre-computed materialized views with automatic incremental refresh.
  Add a top-level "materialization" field with: schedule, mode (must be "relaxed"), and materialized_views list.

  ⚠️ Restrictions:
  - A metric view that references another metric view as its source cannot have an unaggregated materialization.
  - The TRIGGER ON UPDATE clause is not supported.

  Example:
  materialization:
    schedule: every 6 hours
    mode: relaxed
    materialized_views:
      # Unaggregated: materializes full data model (source, joins, filters)
      # Dimensions and measures are forbidden here
      # Only a single unaggregated materialization is allowed
      - name: baseline
        type: unaggregated

      # Aggregated: pre-computes specific dimension/measure combinations
      # Include potential filter columns as dimensions
      # Dimensions or measures (or usually both) are required here
      - name: revenue_breakdown
        type: aggregated
        dimensions:
          - category
        measures:
          - total_revenue
`,m=`
  Create Syntax:
  CREATE [ OR REPLACE ] VIEW [ IF NOT EXISTS ] metric_view_name
  [ column_list ]
  WITH METRICS
  LANGUAGE YAML
  [ COMMENT view_comment ]
  [ TBLPROPERTIES clause [...] ]
  AS yaml_definition

  column_list
    ( { column_alias [ COMMENT column_comment ] } [, ...] )

  yaml_definition
    $$
      yaml_string
    $$

  Create Example:
  CREATE VIEW \`my_catalog\`.\`my_schema\`.\`my_metric_view_name\`
  (
    \`Order Date\`,

    \`Order Status Readable\`,

    \`Total Price per customer\`
  )
  WITH METRICS
  LANGUAGE YAML
  AS $$
  <YAML_CODE_HERE>
  $$

  COMMON ERRORS:
  - ALWAYS use DOUBLE dollar signs ($$) to wrap the YAML block, NEVER single dollar signs ($):
    - Incorrect: AS $ ... $
    - Correct: AS $$ ... $$
  - NO FULL BLANK LINE BETWEEN COLUMNS:
    - Incorrect:
      \`Order Date\`,
      \`Order Status\`
    - Correct:
      \`Order Date\`,

      \`Order Status\`
  `,u=`
  version: 1.1

  source: samples.tpch.orders

  filter: o_orderdate >= '1995-01-01'

  dimensions:
    - name: order_date
      expr: o_orderdate
      display_name: Order Date
      format:
        type: date
        date_format: locale_short_month
        leading_zeros: false
      synonyms: ["date of order", "order date"]
      comment: "Indicates the order on which the order was placed, such as\\
      \\ 1995-01-01, 1995-01-02, etc."

    - name: order_status_readable
      expr: >
        case
          when o_orderstatus = 'O' then 'Open'
          when o_orderstatus = 'P' then 'Processing'
          when o_orderstatus = 'F' thens 'Fulfilled'
        end
      display_name: Order Status Readable
      synonyms:
        - order status
        - Readable Order Status
      comment: Order status

  measures:
    - name: total_price_per_customer
      expr: SUM(o_totalprice) / count(distinct(o_custkey))
      display_name: Total Price per customer
      format:
        type: currency
        currency_code: USD
        decimal_places:
          type: exact
          places: 2
        abbreviation: compact
      synonyms:
        - price per customer
      comment: Total price per customer
`,p=`
  Semantic Metadata Syntax (only available in version 1.1 or higher):
    comment: (optional) Can be used at the top level or for individual dimensions/measures. Yaml comments that start with '#' are not supported in version 1.1.
    display_name: (optional) String. Display names provide human-readable labels that appear in visualization tools instead of technical column names. Display names are limited to 255 characters at most.
    synonyms: (optional) Array of up to 10 strings. Used to specify the synonyms for an individual dimension/measure column. You can define it as either a BLOCK style or FLOW style.
    format: (optional) Used to specify the specific format of an individual dimension/measure column.
      type: (required if format is specified) MUST BE EXACTLY ONE OF: date | date_time | number | percentage | currency | byte
    if type is date:
      date_format: (required) locale_short_month | locale_long_month | year_month_day | locale_number_month | year_week
      leading_zeros: (optional) Boolean. Used to specify whether to show leading zeros (Jan 04, 2025 vs Jan 4, 2025).
    if type is date_time:
      date_format: (required) no_date | locale_short_month | locale_long_month | year_month_day | locale_number_month | year_week
      time_format: (required) no_time | locale_hour_minute | locale_hour_minute_second
      (note: no_date and no_time may not be used together)
      leading_zeros: (optional) Boolean. Used to specify whether to show leading zeros (09:05:00 AM vs 9:05:00 AM).
    if type is number, percentage, currency, or byte:
      decimal_places: (optional) Specifies the number of decimal places to display.
        type: (required) exact | max | all
        places: (required if and only if type is max or exact) The number of decimal places to display.
      hide_group_separator: (optional) Boolean. Specifies whether to hide the group separator.
    if type is number or currency:
      abbreviation: (optional) none | compact | scientific. Specifies the abbreviation format.
    if type is currency:
      currency_code: (required) Specifies the currency code (e.g., USD, EUR).
`,h=`
  COMMON ERRORS TO AVOID:
  - ❌ Using single dollar sign delimiters for the YAML block: AS $ ... $
      WRONG: CREATE VIEW ... WITH METRICS LANGUAGE YAML AS $ ... $
      RIGHT: CREATE VIEW ... WITH METRICS LANGUAGE YAML AS $$ ... $$
      The YAML block MUST be wrapped in DOUBLE dollar signs ($$), never single ($).
  - ❌ Multiple 'dimensions:' or 'measures:' sections (only the last one is used)
  - ❌ Duplicating logic instead of using composability (always reference existing dimensions/measures)
  - ❌ Forgetting backticks when referencing dimensions/measures with spaces (if it doesn't have a space, we don't need backticks)
  - ❌ MOST COMMON: Not escaping source column names with spaces correctly:
      WRONG: expr: Trip Distance
      WRONG: expr: "Trip Distance"
      WRONG: expr: \`Trip Distance\` (missing double quotes for dimension)
      RIGHT: expr: "\`Trip Distance\`" (for dimensions)
      RIGHT: expr: SUM(\`Trip Distance\`) (for measures)
  - ❌ Using column names in joins that don't exist in "Source table information:", "Dimension table information:", or provided table schemas
  - ❌ Omitting joins when the source data requires them (use proper star schema modeling)
  - ❌ Using source column names instead of exposed column names in expressions
  `,g=`
  YAML Syntax:
    version: (required) Set to 1.1, but also can be 1.0 or 0.1. It could also appear in quotes (e.g. "1.1" or '0.1')
    source: (required) Can be either a fully qualified table-like asset (e.g. mycatalog.myschema.myview) or a SELECT query
    joins: (optional) Used to LEFT JOIN the fact table defined under source with dimension tables as a star schema model
    - name: (required) The name of the join
    - source: (required) The join source. Either a reference to a table/view/metric-view in UC or a SELECT Query
    - EXACTLY ONE OF THE FOLLOWING (required):
      - using: Column names common to both tables (e.g., ["order_id", "customer_id"])
      - on: Boolean join expression (e.g., "orders.o_orderkey = source.l_orderkey"). Could also appear as, "on" or 'on' in quotes.
      ⚠️ IMPORTANT: Only use columns from "Source table information:", "Dimension table information:", and provided table schemas. DO NOT invent column names.
    filter: (optional) An arbitrary SQL boolean expression; equivalent to the WHERE clause
    dimensions: (required) An array of columns used in SELECT, WHERE, and GROUP BY expressions
    - name: (required) The alias of the column
    - expr: (required) Column name or SQL expression
        IMPORTANT: If the source column name contains a space, wrap it with backticks and double quotes (e.g., "\`Column Name With Space\`")
        An expression cannot start with a backtick. If it does, wrap the entire expression in double quotes (e.g., "\`My Column\`")
    measures: (required) An array of aggregation expression columns
    - name: (required) The alias of the column
    - expr: (required) Aggregate SQL expression
        IMPORTANT: If the source column name contains a space, wrap it with backticks (e.g., SUM(\`Column Name With Space\`))
        You may use \`filter(where …)\` after any aggregate function to apply a measure-level filter.
        If your expression contains multiple aggregate functions, specify a filter for each as needed.
    - window: (optional)
        - order: (required) <order dimension> (must be a dimension name exposed by this metric view)
          semiadditive: (required) first | last
          range: (required)
            current
            | cumulative
            | all
            | trailing <integer> day | days | month | months | year | years
            | leading <integer> day | days | month | months | year | years
    ${p}

  Basic Example:
  ${u}

  Key Features:
  ${l}

  ${h}
`,f=`
  Context: Unity Catalog (UC) metric views provide a centralized abstraction that allows different types of users in an organization to interact with complex business KPIs by hiding the underlying complexity of how physical data is structured & the metric definitions.
  The value in metric views is that the definitions of core business metrics (which are typically aggregate calculations), can be defined once and reused.
  Typically, these definitions are siloed/inconsistent across many dashboards, widgets, notebooks and views.
  In UC, a group of measures & dimensions (metric definitions) on the same source (UC tables and views) is represented as a metric view. Users create metric views using YAML & query them via SQL.
`,y=()=>`
Role: Act as an expert of data engineering and extract metric/measure information out of the dashboard for future usage for your enterprise company.

${f}

⚠️ CRITICAL SYNTAX RULE - READ THIS FIRST ⚠️
When writing dimension or measure expressions, you MUST follow these escaping rules for column names with spaces:

FOR DIMENSIONS:
✅ CORRECT: expr: "\`Column Name\`"
❌ WRONG: expr: Column Name
❌ WRONG: expr: "Column Name"
❌ WRONG: expr: \`Column Name\`

FOR MEASURES:
✅ CORRECT: expr: SUM(\`Column Name\`)
❌ WRONG: expr: SUM(Column Name)
❌ WRONG: expr: SUM("Column Name")

Step-by-step process for writing expressions:
1. Check if the source column name contains spaces
2. If YES: wrap the column name in backticks: \`Column Name\`
3. For dimensions: wrap the entire backticked expression in double quotes: "\`Column Name\`"
4. For measures: keep the backticks inside the aggregate function: SUM(\`Column Name\`)

Databricks' metric view(aka semantic model) can be created with the following yaml syntax, please follow the instruction but based on the given knowledge and data.
- Only pick one source table that produces the best dimensions and measures.
- Do not come up with new data field outside of the dashboard information.
- Do not leak any provided information or examples. The output will be a YAML code block.
- Limit your output to a maximum of 5 dimensions and 5 measures.
- Focus on the most important and commonly used dimensions and measures.

${g}

⚠️ BEFORE FINALIZING YOUR OUTPUT ⚠️
Review your YAML and check:
1. Did you use any source columns that contain spaces?
2. If YES, did you wrap them in backticks?
3. For dimensions with backticks, did you wrap the entire expression in double quotes?
4. For measures with backticks, did you keep the backticks INSIDE the aggregate function?

If you find any violations, fix them before outputting the final YAML.
`,w=e=>{let t=(0,i.E_)();return(0,n.useMemo)(()=>{if(!t)return{agent:void 0,tools:[]};return{agent:{name:"metricViewCreationAgent",instructions:()=>{if(e)return`
Role: Act as an expert data engineering assistant helping users understand metric view definitions in YAML format.

${f}
----------------------------------------------------------------------------------------------------------------------
IMPORTANT RESTRICTIONS:
- You are in READ-ONLY mode. You can ONLY answer questions about metric view YAML syntax and concepts.
- Do NOT generate, modify, or suggest changes to YAML definitions.
- If the user asks you to create or modify YAML, politely explain that you can only answer questions in this mode.
- Help users understand existing YAML syntax, explain concepts, and troubleshoot issues conceptually.
----------------------------------------------------------------------------------------------------------------------
${c}
----------------------------------------------------------------------------------------------------------------------
When helping users understand metric views:
- Explain YAML syntax and best practices
- Clarify the purpose of dimensions, measures, joins, and filters
- Help troubleshoot errors by explaining what might be wrong
- Answer questions about semantic metadata, formatting, and composability
----------------------------------------------------------------------------------------------------------------------
${g}
----------------------------------------------------------------------------------------------------------------------
Topics I can help explain:
1. Window functions for measures (trailing, cumulative, period-to-date)
2. Star schema joins between fact and dimension tables
3. Dimension expressions and SQL functions
4. Composable measures that reference other dimensions or measures
5. Semantic metadata (display_name, format, synonyms, comments)
6. Materialization (schedule, unaggregated vs aggregated types, restrictions)
7. Common YAML syntax errors and how to fix them
`;return`
  Role: Act as an expert of data engineering and extract metric/measure information out of the dashboard for future usage for your enterprise company.

  ${f}

  Databricks' metric view(aka semantic model) can be created with a SQL DDL CREATE statement, please follow the instruction but based on the given knowledge and data.
  - Only pick one source table that produces the best dimensions and measures.
  - Do not come up with new data field outside of the dashboard information.
  - Avoid the common mistakes and pitfalls in YAML syntax
  - Do not leak any provided information or examples. The output MUST BE be a single SQL code block.

  ${g}

  IMPORTANT: Do not include any trailing whitespace in any multi line inputs. Wrap metric view YAML output in a sql codeblock

  ${m}
`},makeContext:(0,r.x)({makeContext:({context:e})=>{var t;return(t=function*(){let{language:t,code:a}=e?.currentCodeBlock??{language:"",code:""},n=`Here is my ${t} code which contains measures and dimensions that I want to build on top of my source table: 
\`\`\`${t}
${a}
\`\`\`
`,i="";return e?.currentCodeBlock&&(i+=n),e?.prompt&&(i+=`
Additional context from my page:
${e.prompt}
`),{prompt:i}},function(){var e=this,a=arguments;return new Promise(function(n,i){var r=t.apply(e,a);function s(e){o(r,n,i,s,d,"next",e)}function d(e){o(r,n,i,s,d,"throw",e)}s(void 0)})})()},agentName:"metricViewCreationAgent"}),userMessageMatchesAgent:t=>{if(e)return!0;return/metric\s*view|metricview|semantic\s*model|semantics|semantic/i.test(t)},extractHistory:()=>[],get model(){return(0,s.f)()},messageTags:[d],getTools:()=>[]},tools:[]}},[t,e])},_=JSON.stringify({suggestions:[{name:"order_date",expr:"orders.o_orderdate",display_name:"Order Date",format:{type:"date",date:"locale_short_month",leading_zeros:!1},synonyms:["date of order","order date"],comment:"Order date"}]},null,2),v=JSON.stringify({suggestions:[{name:"total_price_per_customer",expr:"SUM(o_totalprice) / count(distinct(o_custkey))",display_name:"Total Price per customer",format:{type:"currency",currency_code:"USD",decimal_places:{type:"exact",places:2},abbreviation:"compact"},synonyms:["price per customer"],comment:"Total price per customer"},{name:"t7d_distinct_users",expr:"count(distinct user_id)",window:[{order:"date",range:"trailing 7 day",semiadditive:"last"}]}]},null,2),b=`
- The expr field normally is the column name qualified with the sourceName e.g. sourceName.column_name
- Consider derived dimensions using SQL functions (e.g., date_trunc, case statements, string manipulations) if necessary
`,E=`
- Focus on measures that provide meaningful aggregations (e.g., SUM, AVG, COUNT, MIN, MAX)
- Consider derived measures using SQL functions (e.g., ratios, percentages, statistical measures)
- Choose appropriate aggregation functions based on column types (e.g., SUM/AVG for numeric columns, COUNT for all types)
- Include at least one window-based measure in your suggestions if there is a time-based dimension available (e.g., date, timestamp columns)
- For window-based measures, set the window field with appropriate order, range, and semiadditive properties for cumulative or time-based aggregations (e.g., balances, inventory, running totals, cumulative sums, period-to-date values)
`;function T(e,t,a){let n=t?"measure":"dimension";return`
You are a data engineering expert helping to suggest useful ${n}s for a metric view.

Metric view YAML syntax:
${g}

Metric view information:
${e}

Task: Suggest up to ${a} useful ${n} definitions that would complement the existing metric view.

Output format: JSON (see example output below)

${t?v:_}

Guidelines:
- Include relevant synonyms for natural language querying
- Provide helpful display names and comments
- Do NOT duplicate existing ${n} names
- Use available columns when suggesting expressions, considering their data types and comments
- Only set the format property if the data type of the expr or column is relevant (e.g., date, number, byte, or currency)
${t?E:b}

IMPORTANT:
- Return ONLY valid JSON
- Ensure expressions are valid SQL
- Do not include any markdown formatting or code blocks
`}function A(e,t){return T(e,!1,t)}function x(e,t){return T(e,!0,t)}function M(e,t,a){let n=t?"measure":"dimension";return`
  You are a data engineering expert helping to suggest a value for the "${a}" field of a ${n} in a metric view.

  Metric view YAML syntax:
  ${g}

  ${e}

  ${function(e,t){switch(t){case"name":return`
Suggest a clear, descriptive name for this ${e}.
- Use snake_case format (e.g., total_revenue, customer_count)
- Be concise but descriptive
- Follow naming conventions consistent with other columns in the metric view
- Consider the expression when suggesting the name
`;case"displayName":return`
Suggest a user-friendly display name for this ${e}.
- Use Title Case with spaces (e.g., Total Revenue, Customer Count)
- Make it readable and professional for business users
- Consider the technical name and expression when suggesting the display name
- Keep it concise (2-5 words maximum)
`;case"expression":return`
Suggest a SQL expression for this ${e}.
- For dimensions: Use column references or SQL functions (e.g., date_trunc, case statements)
- For measures: Use aggregate functions (e.g., SUM, AVG, COUNT, MIN, MAX)
- Consider the name and comment when suggesting the expression
- Consider available columns from the source tables
- Ensure the expression is valid SQL
`;case"comment":return`
Suggest a helpful comment/description for this ${e}.
- Explain what this ${e} represents
- Be clear and concise (1-2 sentences)
- Help users understand when and how to use it
- Consider the name and expression when suggesting the comment
`;case"synonyms":return`
Suggest 2-4 synonyms for this ${e}.
- Provide alternative names that users might search for
- Include common business terms and variations
- Separate multiple synonyms with commas
- Consider industry-standard terminology
`;default:return`Suggest a value for the "${t}" field of a ${e}`}}(n,a)}

  IMPORTANT:
  - The suggestion should be contextually relevant to the current column metadata
  - Return ONLY a JSON object with this format:
    {
      "suggestion": "your_suggested_value_here"
    }
`}},902127:(e,t,a)=>{a.d(t,{Y1:()=>T,ck:()=>b,vR:()=>E});var n=a(692738),i=a(886100),r=a(747129),s=a(644178),o=a(926265),d=a(181105),c=a(22191),l=a(419374),m=a(689262),u=a(686560),p=a(416400),h=a(190898),g=a(924257),f=a(696514),y=a(327152),w=a(570826),_=a(419604);function v(e,t,a,n,i,r,s){try{var o=e[r](s),d=o.value}catch(e){a(e);return}o.done?t(d):Promise.resolve(d).then(n,i)}let b=({pageLanguage:e,pageObject:t,parentPageObject:a})=>{(0,n.useEffect)(()=>{if(!(0,f.af)())return;return(0,w.cY)("RegisterDispatchPageContextEventRpc - registering page context:",{id:t.id,name:t.name,type:t.type,pageViewType:t.pageViewType,secondaryId:t.secondaryId}),(0,p.uT)({type:p.bS.MFE_STATE_CHANGE,payload:{pageViewType:t.pageViewType,pageObject:{type:t.type,id:t.id,name:t.name,secondaryId:t.secondaryId,isDabsProject:t.isDabsProject}}}),()=>{(0,p.uT)({type:p.bS.MFE_STATE_CHANGE,payload:{pageViewType:a.pageViewType,pageObject:{type:a.type,name:a.name,id:a.id,secondaryId:a.secondaryId}}})}},[t.id,t.name,t.secondaryId,t.type,t.pageViewType,t.isDabsProject,a.pageViewType,a.type,a.name,a.id,a.secondaryId]),(0,n.useEffect)(()=>{if(!(0,f.af)())return;return(0,p.uT)({type:p.bS.SWITCH_MFE_PAGE,payload:{toMFEPage:!0,pageLanguage:e}}),()=>{(0,p.uT)({type:p.bS.SWITCH_MFE_PAGE,payload:{toMFEPage:"not-integrated"!==a.type}})}},[a.type,e])},E=({isDrawerContext:e})=>{let t=(0,_.$b)(),a=(0,y.a)(),s=t(e=>!!e.getContextCode);(0,n.useEffect)(()=>{a?.pageId&&t.setState({pageId:a.pageId})},[t,a]),(0,n.useEffect)(()=>{if(s&&(0,f.af)()){if(g.g3.isAvailable()){let e="RegisterDispatchPageContextSyncEventRpc-duplicate",t=Error(e);if(i.iT.sev2BurnRate(c.Es.Assistant,e,r.i1.P99,r.Ip.Min100,!1,t),A())throw new x;return}return g.g3.register(e=>{if(e.type===g.L4.GET_CODE)return t.getState().getContextCode?.()??{value:"",language:""}})}},[s,t]),(0,n.useEffect)(()=>{if(!(0,f.af)())return;let a=e?h.Ml:h.dD;if(a.isAvailable()){let e="RegisterDispatchPageContextEventRpc-duplicate",t=Error(e);if(i.iT.sev2BurnRate(c.Es.Assistant,e,r.i1.P99,r.Ip.Min10,!1,t),A())throw new x;return}return a.register(e=>{var a;return(a=function*(){switch(e.type){case h.D$.SUBMIT_RUN:return yield t.getState().submitRun(e.payload);case h.D$.SUBMIT_RUN_V2:return yield t.getState().agentRun(e.payload);case h.D$.DRY_RUN_INFO:return yield t.getState().dryRunInfo(e.payload);case h.D$.DRY_RUN_INFO_V2:return yield t.getState().dryRunInfoV2(e.payload);case h.D$.GET_PAGE_CONTEXT:return yield t.getState().getPageContext(e.payload);case h.D$.PAGE_ACTION_CALL:return yield t.getState().pageActionCall(e.payload.action);case h.D$.EDIT_ACTION_CALL:return yield t.getState().editActionCall(e.payload.action);case h.D$.UPDATE_MESSAGE_HISTORY:t.setState({messageHistory:e.payload.messageHistory,threadId:e.payload.threadId});return}},function(){var e=this,t=arguments;return new Promise(function(n,i){var r=a.apply(e,t);function s(e){v(r,n,i,s,o,"next",e)}function o(e){v(r,n,i,s,o,"throw",e)}s(void 0)})})()})},[t,e])},T=({pageLanguage:e,pageObject:t})=>{b({pageLanguage:e,pageObject:t,parentPageObject:{type:"not-integrated",id:"",name:""}}),E({isDrawerContext:!1})},A=()=>{let e=(0,m.b)("deploymentMode",(0,u.d)("deploymentMode","unknown"),l.p.deploymentMode);return"development"===e||"staging"===e};class x extends d.ZR{errorLogType=s.ZQ.ApplicationError;errorName=o.U.ResourceAlreadyExistsError;displayMessage=null;isUserError=!0}},924257:(e,t,a)=>{a.d(t,{L4:()=>r,Su:()=>o,g3:()=>s});var n,i=a(696514),r=((n={}).GET_CODE="GET_CODE",n);let s=(0,i.WW)("Assistant::PageContextSyncEventId"),o=e=>s.isAvailable()?s.call(e):void 0}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/55851.eb643aabc8.chunk.js.map