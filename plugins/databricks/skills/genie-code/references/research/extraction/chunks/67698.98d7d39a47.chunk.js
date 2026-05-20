"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[67698],{245317:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{serverlessCompatibilityRules:()=>k});var s=r(645696),n=r(441535),i=r(22191),o=r(659587),c=r(348987),p=e([s,c]);function l(){return(0,n.W)("databricks.fe.pythonx.flint.serverlessCompatibility.enabled",!1)}function u(){return l()&&!((0,n.W)("databricks.fe.pythonx.flint.pysparkConnectIncompatible.enabled",!1)&&(0,n.W)("databricks.fe.pythonx.flint.pysparkConnectIncompatible.visible.enabled",!1))}[s,c]=p.then?(await p)():p;let d=[{clusterType:[o.$L.INTERACTIVE_SERVERLESS]}],k=[{code:"SRVLS01",description:"Detect RDD API usage not supported in serverless",query:c.r0,captureNames:["attr"],severity:()=>(0,s.getMonacoApi)().MarkerSeverity.Error,message:"RDD APIs are not supported in serverless compute",fixHint:()=>"Rewrite using DataFrame/Dataset APIs instead of RDD. Replace sc.parallelize() with spark.createDataFrame(), sc.textFile() with spark.read.text(), .map()/.flatMap()/.filter() with DataFrame .select()/.withColumn()/.where(). Do NOT comment out the code.",enabled:()=>u(),esComponent:i.Es.Pylsp,backendRequirements:d},{code:"SRVLS02",description:"Detect caching methods not supported in serverless",query:c.sN,captureNames:["attr"],severity:()=>(0,s.getMonacoApi)().MarkerSeverity.Error,message:"Caching methods (cache, persist, unpersist, etc.) are not supported in serverless compute",fixHint:()=>"Remove the caching call. Serverless compute manages caching automatically. Simply remove .cache(), .persist(), or .unpersist() from the DataFrame chain. Do NOT comment out the code.",enabled:()=>u(),esComponent:i.Es.Pylsp,backendRequirements:d},{code:"SRVLS03",description:"Detect SparkContext/SQLContext usage not supported in serverless",query:c.be,captureNames:["target"],severity:()=>(0,s.getMonacoApi)().MarkerSeverity.Error,message:"SparkContext, SQLContext, and spark configuration APIs are not supported in serverless compute",fixHint:()=>"Rewrite using the SparkSession `spark` object and DataFrame APIs. Replace sc.parallelize() with spark.createDataFrame(), sc.textFile() with spark.read.text(), sqlContext.sql() with spark.sql(), sc.setLogLevel() by removing it, spark.conf.set() with spark.conf comments. Do NOT comment out the code.",enabled:()=>u(),esComponent:i.Es.Pylsp,backendRequirements:d},{code:"SRVLS04",description:"Detect global temp view creation not supported in serverless",query:c.Rf,captureNames:["attr"],severity:()=>(0,s.getMonacoApi)().MarkerSeverity.Error,message:"createOrReplaceGlobalTempView() is not supported in serverless compute",fixHint:()=>"Replace createOrReplaceGlobalTempView() with createOrReplaceTempView(). Session-scoped temp views work on serverless. Do NOT comment out the code.",enabled:()=>l(),esComponent:i.Es.Pylsp,backendRequirements:d},{code:"SRVLS05",description:"Detect DBFS functions not supported in serverless",query:c.ye,captureNames:["method_name"],severity:()=>(0,s.getMonacoApi)().MarkerSeverity.Error,message:"DBFS mount operations (mount, unmount, etc.) are not supported in serverless compute",fixHint:()=>"Replace DBFS mount operations with Unity Catalog volumes or direct cloud storage paths. Use spark.read/write with cloud paths (e.g., s3://, abfss://, gs://) instead of /mnt/ paths. Do NOT comment out the code.",enabled:()=>u(),esComponent:i.Es.Pylsp,backendRequirements:d}];a()}catch(e){a(e)}})},272377:(e,t,r)=>{r.d(t,{w:()=>i});var a=r(383437),s=r(728918);function n(e,t,r,a,s,n,i){try{var o=e[n](i),c=o.value}catch(e){r(e);return}o.done?t(c):Promise.resolve(c).then(a,s)}let i=({code:e,query:t})=>{var r;return(r=function*(){let{parser:r,language:n}=yield(0,s.k)(),i=r.parse(e);if(!i)return!1;return new a.XK(n,t).captures(i.rootNode).length>0},function(){var e=this,t=arguments;return new Promise(function(a,s){var i=r.apply(e,t);function o(e){n(i,a,s,o,c,"next",e)}function c(e){n(i,a,s,o,c,"throw",e)}o(void 0)})})()}},348987:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{$m:()=>y,NP:()=>b,Rf:()=>m,be:()=>k,bk:()=>h,en:()=>g,q9:()=>_,r0:()=>l,sN:()=>u,ye:()=>f});var s=r(775683),n=r(272377),i=r(763472),o=e([i]);function c(e,t,r,a,s,n,i){try{var o=e[n](i),c=o.value}catch(e){r(e);return}o.done?t(c):Promise.resolve(c).then(a,s)}function p(e){return class{#e;constructor(e=!0){this.#e=e}detect(t){var r;return(r=function*(){let r=t.getTopLevelCommands(),a=this.#e?s.matchPythonAstQuery:n.w;if(0===r.length)return!0;return!(yield a({code:(0,i.EM)(t),query:e}))},function(){var e=this,t=arguments;return new Promise(function(a,s){var n=r.apply(e,t);function i(e){c(n,a,s,i,o,"next",e)}function o(e){c(n,a,s,i,o,"throw",e)}i(void 0)})}).call(this)}}}i=(o.then?(await o)():o)[0];let l=`
  (attribute
    attribute: (identifier) @attr
    (#eq? @attr "rdd")
  )
`,u=`
  (attribute
    attribute: (identifier) @attr
    (#any-of? @attr "cache" "persist" "unpersist" "cacheTable" "uncacheTable" "clearCache")
  )
`,d=["spark.connect.perserveOptionCasing","spark.connect.session.planCompression.defaultAlgorithm","spark.connect.session.planCompression.threshold","spark.databricks.cloudProvider","spark.databricks.clusterUsageTags.clusterId","spark.databricks.clusterUsageTags.sparkImageLabel","spark.databricks.driverEndpointId","spark.databricks.dynamicSparkConf.snapshotId","spark.databricks.execution.timeout","spark.databricks.usagePolicy","spark.databricks.usagePolicyId","spark.databricks.workspaceUrl","spark.python.sql.dataFrameDebugging.enabled","spark.sql.ansi.enabled","spark.sql.connect.serverStacktrace.enabled","spark.sql.connect.streaming.serverSideListener.enabled","spark.sql.execution.arrow.pyspark.selfDestruct.enabled","spark.sql.execution.arrow.useLargeVarTypes","spark.sql.execution.pandas.convertToArrowArraySafely","spark.sql.execution.pandas.inferPandasDictAsMap","spark.sql.execution.pandas.structHandlingMode","spark.sql.execution.pyspark.binaryAsBytes","spark.sql.execution.pythonUDF.arrow.enabled","spark.sql.execution.pythonUDTF.arrow.enabled","spark.sql.files.maxPartitionBytes","spark.sql.legacy.timeParserPolicy","spark.sql.pyspark.inferNestedDictAsStruct.enabled","spark.sql.pyspark.jvmStacktrace.enabled","spark.sql.pyspark.legacy.inferArrayTypeFromFirstElement.enabled","spark.sql.pyspark.legacy.inferMapTypeFromFirstPair.enabled","spark.sql.repl.eagerEval.enabled","spark.sql.repl.eagerEval.maxNumRows","spark.sql.repl.eagerEval.truncate","spark.sql.session.localRelationBatchOfChunksSizeBytes","spark.sql.session.localRelationCacheThreshold","spark.sql.session.localRelationChunkSizeBytes","spark.sql.session.localRelationChunkSizeRows","spark.sql.session.localRelationSizeLimit","spark.sql.session.timeZone","spark.sql.shuffle.partitions","spark.sql.timestampType"].map(e=>`"${e}"`).join(" "),k=`
  ; Match function calls and attribute access on sc, sparkContext, sqlContext
  (call
    function: (identifier) @target
    (#match? @target "^(sc|sparkContext|sqlContext)$")
  )
  (attribute
    object: (identifier) @target
    (#match? @target "^(sc|sparkContext|sqlContext)$")
  )

  ; spark.sparkContext, spark._sc (always incompatible)
  (attribute
    object: (identifier) @_spark_obj
    attribute: (identifier) @target
    (#eq? @_spark_obj "spark")
    (#match? @target "^(sparkContext|_sc)$")
  )

  ; spark.conf.get("non-allowlisted-key")
  (call
    function: (attribute
      object: (attribute
        object: (identifier) @_spark_obj2
        attribute: (identifier) @_conf_attr
      )
      attribute: (identifier) @_get_method
    )
    arguments: (argument_list
      . (string (string_content) @target)
    )
    (#eq? @_spark_obj2 "spark")
    (#eq? @_conf_attr "conf")
    (#eq? @_get_method "get")
    (#not-any-of? @target ${d})
  )

  ; spark.conf.<method>(...) where method is not "get" (e.g. set, getAll)
  (call
    function: (attribute
      object: (attribute
        object: (identifier) @_spark_obj3
        attribute: (identifier) @_conf_attr2
      )
      attribute: (identifier) @target
    )
    (#eq? @_spark_obj3 "spark")
    (#eq? @_conf_attr2 "conf")
    (#not-eq? @target "get")
  )

  ; stuff.spark_conf/spark_config.get("non-allowlisted-key") (e.g. get_ipython().spark_config)
  (call
    function: (attribute
      object: (attribute
        attribute: (identifier) @_spark_config_attr
      )
      attribute: (identifier) @_spark_config_method
    )
    arguments: (argument_list
      . (string (string_content) @target)
    )
    (#any-of? @_spark_config_attr "spark_conf" "spark_config")
    (#eq? @_spark_config_method "get")
    (#not-any-of? @target ${d})
  )

  ; stuff.spark_conf/spark_config.<method>(...) where method is not "get"
  (call
    function: (attribute
      object: (attribute
        attribute: (identifier) @_spark_config_attr2
      )
      attribute: (identifier) @target
    )
    (#any-of? @_spark_config_attr2 "spark_conf" "spark_config")
    (#not-eq? @target "get")
  )
`,m=`
  (attribute
    attribute: (identifier) @attr
    (#eq? @attr "createOrReplaceGlobalTempView")
  )
`,f=` (
  call
    function: (
      attribute
        object: (
          attribute
            object: (identifier) @object_name
            attribute: (identifier) @fs_attr
        )
        attribute: (identifier) @method_name
    )
    arguments: (argument_list) @args
  (#eq? @object_name "dbutils")
  (#eq? @fs_attr "fs")
  (#match? @method_name "^(mount|mounts|refreshMounts|unmount|updateMount|cacheTable|uncacheTable|cacheFiles|uncacheFiles)$")
)
`,b=p(l),g=p(u),h=p(k),y=p(m),_=p(f);a()}catch(e){a(e)}})}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/67698.98d7d39a47.chunk.js.map