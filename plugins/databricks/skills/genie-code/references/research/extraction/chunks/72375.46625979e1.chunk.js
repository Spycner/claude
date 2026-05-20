"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[72375],{272375:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{samplePatternRules:()=>l});var i=r(645696),n=r(441535),s=r(22191),o=r(659587),c=e([i]);function p(){return(0,n.W)("databricks.fe.pythonx.flint.sampleRules.enabled",!1)}i=(c.then?(await c)():c)[0];let l=[{code:"SAMPLE001",description:"Detect incompatible DataFrame.cache usage",query:`
      (call
        (attribute
          object: (identifier)
          attribute: (identifier) @attr (#eq? @attr "cache")
        ) 
      ) @target
    `,captureNames:["target"],severity:()=>(0,i.getMonacoApi)().MarkerSeverity.Error,message:"DataFrame.cache is not supported in serverless mode",enabled:()=>p(),esComponent:s.Es.Pylsp},{code:"SAMPLE002",description:"Detect deprecated dlt.table usage (should use pyspark.pipelines instead)",query:`
      (attribute
        object: (identifier) @obj (#eq? @obj "dlt")
        attribute: (identifier) @attr (#match? @attr "^(table|materialized_view|view|expect|expect_or_drop|expect_or_fail|expect_all|expect_all_or_drop|expect_all_or_fail)$")
      ) @target
    `,captureNames:["target"],severity:()=>(0,i.getMonacoApi)().MarkerSeverity.Warning,message:e=>{let t=e.replace("@","");return`Consider using '@pyspark.pipelines.${t}' instead of '@${t}' for better compatibility`},enabled:()=>p(),esComponent:s.Es.Pylsp},{code:"SAMPLE003",description:"Detect dlt imports (informational)",query:`
      (import_statement
        name: (dotted_name) @name (#match? @name "^dlt$")
      ) @target
    `,captureNames:["target"],severity:()=>(0,i.getMonacoApi)().MarkerSeverity.Hint,message:"DLT import detected. Consider migrating to pyspark.pipelines for long-term support",enabled:()=>p(),esComponent:s.Es.Pylsp},{code:"SAMPLE010",description:"Detect anti-patterns in function bodies",query:"(function_definition) @target",captureNames:["target"],severity:()=>(0,i.getMonacoApi)().MarkerSeverity.Warning,message:"structural",enabled:()=>p(),esComponent:s.Es.Pylsp,subRules:[{code:"SAMPLE011",description:"Detect print() calls in function body",query:'(call function: (identifier) @fn (#eq? @fn "print")) @target',captureNames:["target"],severity:()=>(0,i.getMonacoApi)().MarkerSeverity.Hint,message:"Consider using logging instead of print for production code",enabled:()=>p(),esComponent:s.Es.Pylsp},{code:"SAMPLE012",description:"Detect time.sleep() in function body",query:`
          (call
            function: (attribute
              object: (identifier) @mod (#eq? @mod "time")
              attribute: (identifier) @attr (#eq? @attr "sleep")
            )
          ) @target
        `,captureNames:["target"],severity:()=>(0,i.getMonacoApi)().MarkerSeverity.Warning,message:"Avoid blocking time.sleep(); use asyncio.sleep or scheduling instead",enabled:()=>p(),esComponent:s.Es.Pylsp}]},{code:"SAMPLE020",description:"Serverless v2/v3: detect pass statement (example)",query:"(pass_statement) @target",captureNames:["target"],severity:()=>(0,i.getMonacoApi)().MarkerSeverity.Hint,message:"Serverless v2/v3 only (SAMPLE020)",enabled:()=>p(),esComponent:s.Es.Pylsp,backendRequirements:[{clusterType:[o.$L.INTERACTIVE_SERVERLESS],version:["2","3"]}]}];a()}catch(e){a(e)}})}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/72375.46625979e1.chunk.js.map