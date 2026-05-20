"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[57978,84885],{58766:(e,a,t)=>{t.d(a,{r:()=>s});let s=(0,t(342411).zR)({id:"7zTp2B",defaultMessage:"{tabCount, plural, =1 {1 tab} other {{tabCount} tabs}}"})},75612:(e,a,t)=>{t.d(a,{HA:()=>u,RY:()=>l,Xw:()=>o,ZS:()=>i,az:()=>r,bI:()=>n,rd:()=>s});let s=1020,n=450,i=250,r="30%",o="OBJECT_TYPE_UNSPECIFIED",l="SQL_QUERY",u=6048e5},217304:(e,a,t)=>{t.d(a,{K:()=>i});var s=t(706274),n=t(883972);function i(){return(0,s.K)(n.pb.lakeboxMonitor,{end:!0})}},239362:(e,a,t)=>{t.d(a,{Bv:()=>m,L1:()=>c,Lw:()=>l,Wg:()=>u,qe:()=>p,qk:()=>g,yu:()=>d});var s=t(141078),n=t(831358),i=t(691515),r=t(543963);let o=(0,s.J1)`
  fragment RunDetailsSectionFragment on JobsRun {
    jobId
    runId
    numberInJob
    durationInfo {
      startTime
      endTime
      executionDuration
      setupDuration
      startTime
      cleanupDuration
      runDuration
      queueDuration @include(if: $includeQueueDuration)
      waitDuration
      estimatedWaitingEndTime
        @includeSafex(name: "databricks.elasticspark.performance.enableWaitingState", defaultValue: false)
    }
    runTimings @includeSafex(name: "databricks.fe.jaws.enableRunTimings", defaultValue: false) {
      executionTimestamps {
        queuedMs
        waitingForResourcesOrPythonStartingMs
        libraryInstallationMs
        runningMs
      }
      repairsAccumulatedDurations {
        queuedAccumulatedMs
        waitingForResourcesOrPythonStartingAccumulatedMs
        runningAccumulatedMs
      }
    }
    state {
      ...RunStateFragment
    }
    status @include(if: $includeRunStatus) {
      ...RunStatusFragment
    }
    runType
  }

  ${r.DP}
  ${r.WB}
`,l=(0,s.J1)`
  fragment JobRunTriggerInfo on JobsRunTriggerInfo {
    runJobTask {
      runId
      jobId
      taskKey
      parentRunId
    }
    table {
      details {
        tableName
        version
        commitTimestamp
      }
    }
    sqlCondition {
      conditionEvaluationSatisfied
      conditionEvaluationSqlSessionId
    }
  }
`,u=(0,s.J1)`
  fragment JobRunDetailsSectionFragment on JobsRun {
    ...RunDetailsSectionFragment
    trigger
    triggerInfo {
      ...JobRunTriggerInfo
    }
    runName
    effectivePerformanceTarget
    effectiveUsagePolicyId
  }

  ${l}
  ${o}
`,d=(0,s.J1)`
  fragment TaskRunDetailsSectionFragment on JobsRun {
    ...RunDetailsSectionFragment
    parentRunId
    taskKey
    creatorUserName
    creatorUser {
      ...RichUserData
    }
    creatorPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
      ...AclPrincipalData
    }
    forEachIndex
    jobRunId
  }

  ${o}
  ${n.j}
  ${n.E}
`,c=(0,s.J1)`
  fragment TaskTypeDetailsFragment on JobsJobTask {
    alertTask @includeSafex(name: "alertv2_job_task", defaultValue: false) {
      alertId
      warehouseId
      workspacePath
      subscribers {
        userName
        destinationId
      }
    }
    notebookTask {
      notebookPath
    }
    sparkJarTask {
      mainClassName
    }
    sparkPythonTask {
      pythonFile
    }
    sparkSubmitTask {
      parameters
    }
    shellCommandTask {
      command
    }
    pipelineTask {
      pipelineId
      parameters {
        fullRefresh
      }
    }
    cleanRoomNotebookTask {
      cleanRoomName
      notebookName
    }
    cleanRoomsNotebookTask {
      cleanRoomName
      notebookName
    }
    cleanRoomsJarTask {
      cleanRoomName
      jarAnalysisName
    }
    pythonWheelTask {
      entryPoint
      packageName
    }
    dbtTask {
      projectDirectory
      commands
      source
    }
    sqlTask {
      alert {
        alertId
      }
      dashboard {
        dashboardId
      }
      query {
        queryId
      }
      file {
        path
        source
      }
      parameters {
        key
        value
      }
    }
    runJobTask {
      jobId
    }
    conditionTask {
      left
      right
      op
      outcome
    }
    simulationTask {
      controlId
    }
    dashboardTask @includeSafex(name: "databricks.fe.lakeview.enableLakeviewSubscriptionsInJobs", defaultValue: false) {
      dashboardId
      warehouseId
      subscription {
        customSubject
        paused
        subscribers {
          destinationId
          userName
        }
      }
    }
    forEachTask {
      inputs
      concurrency
    }
    ...ForEachTaskStats
    powerBiTask @includeSafex(name: "power_bi_task", defaultValue: false) {
      powerBiModel {
        workspaceName
        modelName
      }
    }
  }

  ${i.d}
`,p=(0,s.J1)`
  fragment TaskTypeDetailsOverridingParametersFragment on JobsRunParameters {
    sqlParams {
      key
      value
    }
    dbtCommands
    sparkSubmitParams
    pipelineParams {
      fullRefresh
    }
  }
`,m=(0,s.J1)`
  fragment TaskGitSourceSnapshotFragment on JobsRunTask {
    gitSource {
      gitSnapshot {
        usedCommit
      }
    }
  }
`,g=(0,s.J1)`
  fragment RunJobParameter on JobsRunJobLevelParameters {
    name
    default
    value
  }
`},244438:(e,a,t)=>{t.d(a,{J:()=>E});var s=t(839562),n=t(22191),i=t(475654),r=t(87221),o=t(312900),l=t(434700);let u=(0,l.D)(()=>(()=>{let e=()=>Promise.all([t.e(62394),t.e(83472)]).then(t.bind(t,883472));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(883472,"./CreateNotebookRoute","lazy",e);return e()})()),d=(0,l.D)(()=>(()=>{let e=()=>Promise.all([t.e(62280),t.e(62394),t.e(3752),t.e(32305),t.e(54497),t.e(33764),t.e(78277),t.e(7473),t.e(20872),t.e(36993),t.e(67590),t.e(51545),t.e(6932),t.e(20022),t.e(18294),t.e(5033),t.e(1291),t.e(97768),t.e(24685),t.e(59276),t.e(99406),t.e(59794),t.e(78580),t.e(55616),t.e(21234),t.e(3330),t.e(92170),t.e(59316),t.e(37797),t.e(11184),t.e(1990),t.e(44004),t.e(78632),t.e(52426),t.e(12514),t.e(39676),t.e(31813),t.e(51362),t.e(22886),t.e(26881),t.e(61951),t.e(45854),t.e(29143),t.e(72263),t.e(24959),t.e(86412),t.e(32828),t.e(20556),t.e(40972),t.e(35747),t.e(29580),t.e(92922),t.e(6198),t.e(95470),t.e(5400),t.e(84245),t.e(97421),t.e(20806),t.e(37072),t.e(47404),t.e(10596),t.e(63819),t.e(60675),t.e(31083),t.e(78756),t.e(11136),t.e(64898),t.e(89187),t.e(20805),t.e(81318),t.e(80159),t.e(97786),t.e(70419),t.e(46184),t.e(14243),t.e(4065),t.e(86107),t.e(17007),t.e(75031),t.e(47017),t.e(78332),t.e(50670),t.e(13526),t.e(49342),t.e(6854),t.e(13686),t.e(46729),t.e(20689),t.e(67403),t.e(44258),t.e(71944),t.e(4256),t.e(97527),t.e(22249),t.e(51778),t.e(63116),t.e(98437),t.e(98947),t.e(26378),t.e(52009),t.e(59419),t.e(79601),t.e(72712),t.e(77104),t.e(69756),t.e(7612),t.e(59352),t.e(36933),t.e(77435),t.e(4980),t.e(4977),t.e(64864),t.e(55076),t.e(33352),t.e(52853),t.e(33719),t.e(20928),t.e(20091),t.e(62567),t.e(61349),t.e(31921),t.e(94737),t.e(42797),t.e(68775),t.e(11022),t.e(49029),t.e(10133),t.e(43927),t.e(18650),t.e(87122),t.e(12674),t.e(4828),t.e(84283),t.e(44341),t.e(98317),t.e(43587),t.e(35711),t.e(8089),t.e(23197),t.e(90489),t.e(64666),t.e(10095),t.e(30259),t.e(62621),t.e(45738),t.e(19604),t.e(13962),t.e(22831),t.e(80086),t.e(51818),t.e(87385),t.e(58415),t.e(356),t.e(1377),t.e(17292),t.e(34607),t.e(54694),t.e(65484),t.e(54894),t.e(79331),t.e(45524),t.e(83750),t.e(55851),t.e(70231),t.e(23145),t.e(14528),t.e(92480),t.e(47323),t.e(92792),t.e(59498),t.e(63121),t.e(13691),t.e(35094),t.e(97091),t.e(79832),t.e(56129),t.e(79637),t.e(65084),t.e(81647),t.e(8260),t.e(27241),t.e(71046),t.e(71713),t.e(36176),t.e(46822),t.e(36921),t.e(62762),t.e(37140),t.e(18080),t.e(48898),t.e(82031),t.e(42272),t.e(36739),t.e(89478),t.e(10297),t.e(95996),t.e(44084),t.e(30908),t.e(24283),t.e(13915),t.e(50536),t.e(47506),t.e(4340),t.e(60548),t.e(95150),t.e(49019),t.e(73089),t.e(2602),t.e(79547),t.e(84056),t.e(73306),t.e(83596),t.e(83537),t.e(50621),t.e(40211),t.e(43057),t.e(17456),t.e(84736),t.e(47838),t.e(23055),t.e(55404),t.e(34678),t.e(60687),t.e(68569),t.e(98120),t.e(95789),t.e(42170),t.e(33364),t.e(28449),t.e(48387),t.e(71553),t.e(97236),t.e(79579),t.e(9701),t.e(2720),t.e(59815),t.e(38757),t.e(42522),t.e(35813),t.e(91322),t.e(33584),t.e(50068),t.e(88329),t.e(56843),t.e(58446),t.e(23516),t.e(29672),t.e(33754),t.e(6850),t.e(65421),t.e(37445),t.e(49390),t.e(2661),t.e(18397),t.e(39579),t.e(16796),t.e(23490),t.e(2919),t.e(4994),t.e(60467),t.e(48383),t.e(17404),t.e(21799),t.e(44857),t.e(56999),t.e(9320),t.e(92926),t.e(51751),t.e(69394),t.e(71182),t.e(57512),t.e(2825),t.e(80060),t.e(96067),t.e(23376),t.e(5362),t.e(22505),t.e(53024),t.e(11528),t.e(43082),t.e(91668),t.e(48457),t.e(72360),t.e(14003),t.e(72826),t.e(9509),t.e(50460),t.e(66233),t.e(5589),t.e(19154),t.e(97821),t.e(794),t.e(48686),t.e(16192),t.e(19986),t.e(559),t.e(98821),t.e(83907),t.e(46137),t.e(61399),t.e(55728),t.e(45582),t.e(25417),t.e(11999),t.e(15580),t.e(52269),t.e(35326),t.e(89405),t.e(66915),t.e(65620),t.e(68824),t.e(37347),t.e(72266),t.e(40777),t.e(97524),t.e(38544),t.e(72170),t.e(2626),t.e(68415),t.e(13546),t.e(3078),t.e(48537),t.e(46241),t.e(62564),t.e(28453),t.e(11282),t.e(8802),t.e(15650),t.e(7154),t.e(50092),t.e(11669),t.e(77748),t.e(6683),t.e(402),t.e(36390),t.e(45392),t.e(81839),t.e(26107),t.e(23774),t.e(43756),t.e(85703),t.e(28970),t.e(31474),t.e(67108)]).then(t.bind(t,516736));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(516736,"./FilesRoute","lazy",e);return e()})()),c=(0,l.D)(()=>(()=>{let e=()=>Promise.all([t.e(62280),t.e(62394),t.e(3752),t.e(32305),t.e(54497),t.e(33764),t.e(78277),t.e(7473),t.e(20872),t.e(36993),t.e(67590),t.e(51545),t.e(6932),t.e(20022),t.e(18294),t.e(5033),t.e(1291),t.e(97768),t.e(24685),t.e(59276),t.e(99406),t.e(59794),t.e(78580),t.e(55616),t.e(21234),t.e(3330),t.e(92170),t.e(59316),t.e(37797),t.e(11184),t.e(1990),t.e(44004),t.e(78632),t.e(52426),t.e(12514),t.e(39676),t.e(31813),t.e(51362),t.e(22886),t.e(26881),t.e(61951),t.e(45854),t.e(29143),t.e(72263),t.e(24959),t.e(86412),t.e(32828),t.e(20556),t.e(40972),t.e(35747),t.e(29580),t.e(92922),t.e(6198),t.e(95470),t.e(5400),t.e(84245),t.e(97421),t.e(20806),t.e(37072),t.e(47404),t.e(10596),t.e(63819),t.e(60675),t.e(31083),t.e(78756),t.e(11136),t.e(64898),t.e(89187),t.e(20805),t.e(81318),t.e(80159),t.e(97786),t.e(70419),t.e(46184),t.e(14243),t.e(4065),t.e(86107),t.e(17007),t.e(75031),t.e(47017),t.e(78332),t.e(50670),t.e(13526),t.e(49342),t.e(6854),t.e(13686),t.e(46729),t.e(20689),t.e(67403),t.e(45893),t.e(44258),t.e(10229),t.e(71944),t.e(4256),t.e(97527),t.e(22249),t.e(51778),t.e(63116),t.e(98437),t.e(98947),t.e(26378),t.e(52009),t.e(59419),t.e(79601),t.e(72712),t.e(77104),t.e(69756),t.e(7612),t.e(59352),t.e(36933),t.e(77435),t.e(4980),t.e(4977),t.e(64864),t.e(55076),t.e(33352),t.e(52853),t.e(33719),t.e(35550),t.e(20928),t.e(20091),t.e(62567),t.e(31556),t.e(61349),t.e(31921),t.e(42797),t.e(68775),t.e(11022),t.e(49029),t.e(10133),t.e(43927),t.e(18650),t.e(87122),t.e(12674),t.e(4828),t.e(84283),t.e(44341),t.e(98317),t.e(43587),t.e(35711),t.e(8089),t.e(23197),t.e(90489),t.e(64666),t.e(10095),t.e(30259),t.e(62621),t.e(45738),t.e(19604),t.e(13962),t.e(22831),t.e(80086),t.e(51818),t.e(87385),t.e(58415),t.e(356),t.e(1377),t.e(17292),t.e(34607),t.e(54694),t.e(65484),t.e(54894),t.e(79331),t.e(45524),t.e(83750),t.e(55851),t.e(70231),t.e(23145),t.e(14528),t.e(92480),t.e(47323),t.e(92792),t.e(59498),t.e(63121),t.e(13691),t.e(35094),t.e(97091),t.e(79832),t.e(56129),t.e(79637),t.e(65084),t.e(81647),t.e(8260),t.e(27241),t.e(71046),t.e(71713),t.e(36176),t.e(46822),t.e(36921),t.e(62762),t.e(37140),t.e(18080),t.e(48898),t.e(82031),t.e(42272),t.e(36739),t.e(89478),t.e(10297),t.e(95996),t.e(44084),t.e(30908),t.e(24283),t.e(13915),t.e(50536),t.e(47506),t.e(4340),t.e(60548),t.e(95150),t.e(49019),t.e(73089),t.e(2602),t.e(79547),t.e(84056),t.e(73306),t.e(83596),t.e(83537),t.e(50621),t.e(40211),t.e(43057),t.e(17456),t.e(84736),t.e(47838),t.e(23055),t.e(55404),t.e(34678),t.e(60687),t.e(68569),t.e(98120),t.e(95789),t.e(42170),t.e(33364),t.e(28449),t.e(48387),t.e(71553),t.e(97236),t.e(79579),t.e(9701),t.e(2720),t.e(59815),t.e(38757),t.e(75041),t.e(42522),t.e(35813),t.e(91322),t.e(33584),t.e(7984),t.e(50068),t.e(88329),t.e(56843),t.e(58446),t.e(23516),t.e(29672),t.e(33754),t.e(6850),t.e(65421),t.e(37445),t.e(49390),t.e(2661),t.e(18397),t.e(39579),t.e(16796),t.e(23490),t.e(2919),t.e(4994),t.e(60467),t.e(13199),t.e(48383),t.e(17404),t.e(21799),t.e(44857),t.e(56999),t.e(9320),t.e(92926),t.e(51751),t.e(69394),t.e(71182),t.e(57512),t.e(2825),t.e(80060),t.e(96067),t.e(23376),t.e(5362),t.e(22505),t.e(53024),t.e(11528),t.e(43082),t.e(91668),t.e(48457),t.e(35814),t.e(72360),t.e(14003),t.e(72826),t.e(9509),t.e(50460),t.e(66233),t.e(5589),t.e(19154),t.e(97821),t.e(794),t.e(48686),t.e(16192),t.e(19986),t.e(559),t.e(98821),t.e(83907),t.e(46137),t.e(61399),t.e(11926),t.e(55728),t.e(45582),t.e(25417),t.e(11999),t.e(15580),t.e(52269),t.e(35326),t.e(89405),t.e(66915),t.e(65620),t.e(68824),t.e(37347),t.e(72266),t.e(40777),t.e(97524),t.e(38544),t.e(72170),t.e(2626),t.e(68415),t.e(13546),t.e(3078),t.e(48537),t.e(46241),t.e(62564),t.e(28453),t.e(11282),t.e(8802),t.e(15650),t.e(7154),t.e(50092),t.e(33463),t.e(11669),t.e(77748),t.e(6683),t.e(402),t.e(36390),t.e(45392),t.e(35684),t.e(81839),t.e(26107),t.e(23774),t.e(69186),t.e(43756),t.e(85703),t.e(28970),t.e(31474),t.e(12541),t.e(40380),t.e(33398),t.e(33692),t.e(49682),t.e(87737),t.e(59343),t.e(9252),t.e(79291),t.e(51862)]).then(t.bind(t,986216));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(986216,"./EditorRouteWrapper","lazy",e);return e()})()),p=(0,l.D)(()=>(()=>{let e=()=>t.e(34686).then(t.bind(t,934686));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(934686,"./EmptyRoute","lazy",e);return e()})()),m=(0,l.D)(()=>(()=>{let e=()=>Promise.all([t.e(62280),t.e(62394),t.e(3752),t.e(32305),t.e(54497),t.e(33764),t.e(78277),t.e(7473),t.e(20872),t.e(36993),t.e(67590),t.e(51545),t.e(6932),t.e(20022),t.e(18294),t.e(5033),t.e(1291),t.e(97768),t.e(24685),t.e(59276),t.e(99406),t.e(59794),t.e(78580),t.e(55616),t.e(21234),t.e(3330),t.e(92170),t.e(59316),t.e(37797),t.e(11184),t.e(1990),t.e(44004),t.e(78632),t.e(52426),t.e(12514),t.e(39676),t.e(31813),t.e(51362),t.e(22886),t.e(26881),t.e(61951),t.e(45854),t.e(29143),t.e(72263),t.e(24959),t.e(86412),t.e(32828),t.e(20556),t.e(40972),t.e(35747),t.e(29580),t.e(92922),t.e(6198),t.e(95470),t.e(5400),t.e(84245),t.e(97421),t.e(20806),t.e(37072),t.e(47404),t.e(10596),t.e(63819),t.e(60675),t.e(31083),t.e(78756),t.e(11136),t.e(64898),t.e(89187),t.e(20805),t.e(81318),t.e(80159),t.e(97786),t.e(70419),t.e(46184),t.e(14243),t.e(4065),t.e(86107),t.e(17007),t.e(75031),t.e(47017),t.e(78332),t.e(50670),t.e(13526),t.e(49342),t.e(6854),t.e(13686),t.e(46729),t.e(20689),t.e(67403),t.e(44258),t.e(71944),t.e(4256),t.e(97527),t.e(22249),t.e(51778),t.e(63116),t.e(98437),t.e(98947),t.e(26378),t.e(52009),t.e(59419),t.e(79601),t.e(72712),t.e(77104),t.e(69756),t.e(7612),t.e(59352),t.e(36933),t.e(77435),t.e(4980),t.e(4977),t.e(64864),t.e(55076),t.e(33352),t.e(52853),t.e(33719),t.e(20928),t.e(20091),t.e(62567),t.e(61349),t.e(31921),t.e(42797),t.e(68775),t.e(11022),t.e(49029),t.e(10133),t.e(43927),t.e(18650),t.e(87122),t.e(12674),t.e(4828),t.e(84283),t.e(44341),t.e(98317),t.e(43587),t.e(35711),t.e(8089),t.e(23197),t.e(90489),t.e(64666),t.e(10095),t.e(30259),t.e(62621),t.e(45738),t.e(19604),t.e(13962),t.e(22831),t.e(80086),t.e(51818),t.e(87385),t.e(58415),t.e(356),t.e(1377),t.e(17292),t.e(34607),t.e(54694),t.e(65484),t.e(54894),t.e(79331),t.e(45524),t.e(83750),t.e(55851),t.e(70231),t.e(23145),t.e(14528),t.e(92480),t.e(47323),t.e(92792),t.e(59498),t.e(63121),t.e(13691),t.e(35094),t.e(97091),t.e(79832),t.e(56129),t.e(79637),t.e(65084),t.e(81647),t.e(8260),t.e(27241),t.e(71046),t.e(71713),t.e(36176),t.e(46822),t.e(36921),t.e(62762),t.e(37140),t.e(18080),t.e(48898),t.e(82031),t.e(42272),t.e(36739),t.e(89478),t.e(10297),t.e(95996),t.e(44084),t.e(30908),t.e(24283),t.e(13915),t.e(50536),t.e(47506),t.e(4340),t.e(60548),t.e(95150),t.e(49019),t.e(73089),t.e(2602),t.e(79547),t.e(84056),t.e(73306),t.e(83596),t.e(83537),t.e(50621),t.e(40211),t.e(43057),t.e(17456),t.e(84736),t.e(47838),t.e(23055),t.e(55404),t.e(34678),t.e(60687),t.e(68569),t.e(98120),t.e(95789),t.e(42170),t.e(33364),t.e(28449),t.e(48387),t.e(71553),t.e(97236),t.e(79579),t.e(9701),t.e(2720),t.e(59815),t.e(38757),t.e(42522),t.e(35813),t.e(91322),t.e(33584),t.e(50068),t.e(88329),t.e(56843),t.e(58446),t.e(23516),t.e(29672),t.e(33754),t.e(6850),t.e(65421),t.e(37445),t.e(49390),t.e(2661),t.e(18397),t.e(39579),t.e(16796),t.e(23490),t.e(2919),t.e(4994),t.e(60467),t.e(48383),t.e(17404),t.e(21799),t.e(44857),t.e(56999),t.e(9320),t.e(92926),t.e(51751),t.e(69394),t.e(71182),t.e(57512),t.e(2825),t.e(80060),t.e(96067),t.e(23376),t.e(5362),t.e(22505),t.e(53024),t.e(11528),t.e(43082),t.e(91668),t.e(48457),t.e(72360),t.e(14003),t.e(72826),t.e(9509),t.e(50460),t.e(66233),t.e(5589),t.e(19154),t.e(97821),t.e(794),t.e(48686),t.e(16192),t.e(19986),t.e(559),t.e(98821),t.e(83907),t.e(46137),t.e(61399),t.e(55728),t.e(45582),t.e(25417),t.e(11999),t.e(15580),t.e(52269),t.e(35326),t.e(89405),t.e(66915),t.e(65620),t.e(68824),t.e(37347),t.e(72266),t.e(40777),t.e(97524),t.e(38544),t.e(72170),t.e(2626),t.e(68415),t.e(13546),t.e(3078),t.e(48537),t.e(46241),t.e(62564),t.e(28453),t.e(11282),t.e(8802),t.e(15650),t.e(7154),t.e(50092),t.e(11669),t.e(77748),t.e(6683),t.e(402),t.e(36390),t.e(45392),t.e(81839),t.e(26107),t.e(23774),t.e(43756),t.e(85703),t.e(28970),t.e(31474),t.e(5380)]).then(t.bind(t,761952));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(761952,"./NotebookRoute","lazy",e);return e()})()),g=(0,l.D)(()=>(()=>{let e=()=>Promise.all([t.e(62280),t.e(62394),t.e(3752),t.e(32305),t.e(54497),t.e(33764),t.e(78277),t.e(7473),t.e(20872),t.e(36993),t.e(67590),t.e(51545),t.e(6932),t.e(20022),t.e(18294),t.e(5033),t.e(1291),t.e(97768),t.e(24685),t.e(59276),t.e(99406),t.e(59794),t.e(78580),t.e(55616),t.e(21234),t.e(3330),t.e(92170),t.e(59316),t.e(37797),t.e(11184),t.e(1990),t.e(44004),t.e(78632),t.e(52426),t.e(12514),t.e(39676),t.e(31813),t.e(51362),t.e(22886),t.e(26881),t.e(61951),t.e(45854),t.e(29143),t.e(72263),t.e(24959),t.e(86412),t.e(32828),t.e(20556),t.e(40972),t.e(35747),t.e(29580),t.e(92922),t.e(6198),t.e(95470),t.e(5400),t.e(84245),t.e(97421),t.e(20806),t.e(37072),t.e(47404),t.e(10596),t.e(63819),t.e(60675),t.e(31083),t.e(78756),t.e(11136),t.e(64898),t.e(89187),t.e(20805),t.e(81318),t.e(80159),t.e(70419),t.e(46184),t.e(14243),t.e(4065),t.e(86107),t.e(17007),t.e(75031),t.e(78332),t.e(50670),t.e(13526),t.e(49342),t.e(6854),t.e(13686),t.e(46729),t.e(44258),t.e(97527),t.e(22249),t.e(98437),t.e(98947),t.e(26378),t.e(52009),t.e(59419),t.e(79601),t.e(72712),t.e(77104),t.e(69756),t.e(7612),t.e(59352),t.e(36933),t.e(77435),t.e(55076),t.e(33352),t.e(52853),t.e(33719),t.e(20091),t.e(42797),t.e(68775),t.e(11022),t.e(49029),t.e(10133),t.e(43927),t.e(18650),t.e(87122),t.e(12674),t.e(4828),t.e(84283),t.e(44341),t.e(98317),t.e(43587),t.e(35711),t.e(8089),t.e(23197),t.e(90489),t.e(64666),t.e(10095),t.e(30259),t.e(62621),t.e(45738),t.e(19604),t.e(13962),t.e(22831),t.e(80086),t.e(51818),t.e(87385),t.e(58415),t.e(356),t.e(1377),t.e(17292),t.e(34607),t.e(54694),t.e(65484),t.e(54894),t.e(79331),t.e(45524),t.e(83750),t.e(55851),t.e(70231),t.e(23145),t.e(14528),t.e(92480),t.e(47323),t.e(92792),t.e(59498),t.e(63121),t.e(13691),t.e(35094),t.e(97091),t.e(79832),t.e(56129),t.e(79637),t.e(65084),t.e(81647),t.e(8260),t.e(27241),t.e(71046),t.e(71713),t.e(36176),t.e(46822),t.e(36921),t.e(62762),t.e(37140),t.e(18080),t.e(48898),t.e(82031),t.e(42272),t.e(36739),t.e(89478),t.e(10297),t.e(95996),t.e(44084),t.e(30908),t.e(24283),t.e(13915),t.e(50536),t.e(47506),t.e(4340),t.e(60548),t.e(49019),t.e(73089),t.e(2602),t.e(79547),t.e(84056),t.e(73306),t.e(83596),t.e(83537),t.e(50621),t.e(40211),t.e(43057),t.e(17456),t.e(84736),t.e(47838),t.e(23055),t.e(55404),t.e(34678),t.e(60687),t.e(68569),t.e(98120),t.e(95789),t.e(42170),t.e(33364),t.e(28449),t.e(48387),t.e(71553),t.e(97236),t.e(79579),t.e(9701),t.e(2720),t.e(59815),t.e(38757),t.e(42522),t.e(35813),t.e(91322),t.e(33584),t.e(50068),t.e(88329),t.e(56843),t.e(58446),t.e(23516),t.e(29672),t.e(33754),t.e(6850),t.e(37445),t.e(49390),t.e(2661),t.e(18397),t.e(39579),t.e(16796),t.e(23490),t.e(2919),t.e(4994),t.e(60467),t.e(48383),t.e(17404),t.e(21799),t.e(44857),t.e(56999),t.e(9320),t.e(92926),t.e(51751),t.e(71182),t.e(57512),t.e(2825),t.e(80060),t.e(5362),t.e(22505),t.e(53024),t.e(11528),t.e(43082),t.e(91668),t.e(48457),t.e(14003),t.e(72826),t.e(9509),t.e(5589),t.e(19154),t.e(48686),t.e(16192),t.e(559),t.e(98821),t.e(83907),t.e(46137),t.e(15580),t.e(97524),t.e(68415),t.e(8802),t.e(33463),t.e(81839),t.e(33692),t.e(9252),t.e(71853)]).then(t.bind(t,809252));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(809252,"./NotebookDashboardRoute","lazy",e);return e()})()),f=(0,l.D)(()=>(()=>{let e=()=>Promise.all([t.e(62280),t.e(62394),t.e(3752),t.e(32305),t.e(54497),t.e(33764),t.e(78277),t.e(7473),t.e(20872),t.e(36993),t.e(67590),t.e(51545),t.e(6932),t.e(20022),t.e(18294),t.e(5033),t.e(1291),t.e(97768),t.e(24685),t.e(59276),t.e(99406),t.e(59794),t.e(78580),t.e(55616),t.e(21234),t.e(3330),t.e(92170),t.e(59316),t.e(37797),t.e(11184),t.e(1990),t.e(44004),t.e(78632),t.e(52426),t.e(12514),t.e(39676),t.e(31813),t.e(51362),t.e(22886),t.e(26881),t.e(45854),t.e(72263),t.e(86412),t.e(32828),t.e(20556),t.e(40972),t.e(35747),t.e(29580),t.e(92922),t.e(6198),t.e(95470),t.e(5400),t.e(84245),t.e(97421),t.e(20806),t.e(37072),t.e(47404),t.e(10596),t.e(63819),t.e(60675),t.e(31083),t.e(78756),t.e(11136),t.e(64898),t.e(89187),t.e(20805),t.e(81318),t.e(80159),t.e(97786),t.e(70419),t.e(46184),t.e(14243),t.e(4065),t.e(86107),t.e(17007),t.e(75031),t.e(47017),t.e(78332),t.e(50670),t.e(13526),t.e(49342),t.e(6854),t.e(13686),t.e(20689),t.e(44258),t.e(4256),t.e(97527),t.e(22249),t.e(63116),t.e(98437),t.e(98947),t.e(26378),t.e(52009),t.e(79601),t.e(72712),t.e(77104),t.e(69756),t.e(59352),t.e(77435),t.e(64864),t.e(33352),t.e(33719),t.e(81627),t.e(42797),t.e(68775),t.e(11022),t.e(49029),t.e(10133),t.e(43927),t.e(18650),t.e(87122),t.e(12674),t.e(4828),t.e(84283),t.e(44341),t.e(98317),t.e(43587),t.e(35711),t.e(8089),t.e(23197),t.e(90489),t.e(64666),t.e(10095),t.e(30259),t.e(62621),t.e(45738),t.e(19604),t.e(13962),t.e(22831),t.e(80086),t.e(51818),t.e(87385),t.e(58415),t.e(356),t.e(1377),t.e(17292),t.e(34607),t.e(54694),t.e(65484),t.e(54894),t.e(79331),t.e(45524),t.e(83750),t.e(55851),t.e(70231),t.e(23145),t.e(14528),t.e(92480),t.e(47323),t.e(92792),t.e(59498),t.e(63121),t.e(13691),t.e(35094),t.e(97091),t.e(79832),t.e(56129),t.e(79637),t.e(65084),t.e(81647),t.e(8260),t.e(27241),t.e(71046),t.e(71713),t.e(36176),t.e(46822),t.e(36921),t.e(62762),t.e(37140),t.e(18080),t.e(48898),t.e(82031),t.e(42272),t.e(36739),t.e(89478),t.e(10297),t.e(95996),t.e(44084),t.e(30908),t.e(24283),t.e(13915),t.e(50536),t.e(47506),t.e(4340),t.e(60548),t.e(49019),t.e(73089),t.e(2602),t.e(79547),t.e(84056),t.e(73306),t.e(83596),t.e(83537),t.e(50621),t.e(40211),t.e(43057),t.e(17456),t.e(84736),t.e(47838),t.e(23055),t.e(55404),t.e(34678),t.e(60687),t.e(68569),t.e(98120),t.e(95789),t.e(42170),t.e(33364),t.e(28449),t.e(48387),t.e(71553),t.e(97236),t.e(79579),t.e(9701),t.e(2720),t.e(59815),t.e(38757),t.e(42522),t.e(35813),t.e(91322),t.e(33584),t.e(50068),t.e(88329),t.e(56843),t.e(29672),t.e(33754),t.e(6850),t.e(37445),t.e(2661),t.e(18397),t.e(39579),t.e(16796),t.e(23490),t.e(2919),t.e(4994),t.e(48383),t.e(44857),t.e(9320),t.e(51751),t.e(23376),t.e(22505),t.e(91668),t.e(48457),t.e(50460),t.e(5589),t.e(19154),t.e(794),t.e(48686),t.e(16192),t.e(559),t.e(83907),t.e(61399),t.e(55728),t.e(52269),t.e(35326),t.e(66915),t.e(65620),t.e(38544),t.e(72170),t.e(2626),t.e(3078),t.e(48537),t.e(46241),t.e(77748),t.e(23774),t.e(33398),t.e(87737),t.e(32815)]).then(t.bind(t,887774));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(887774,"./ProjectRoute","lazy",e);return e()})()),b=(0,l.D)(()=>(()=>{let e=()=>t.e(11060).then(t.bind(t,611060));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(611060,"./WorkspacePathRedirect","lazy",e);return e()})()),E=[{pageId:"editor.queries.legacy",esComponent:n.Es.Notebooks,path:"/queries/:segments",element:(0,l.D)(()=>(()=>{let e=()=>t.e(72856).then(t.bind(t,372856));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(372856,"./LegacyQueriesPathRedirect","lazy",e);return e()})())},{pageId:"editor.index",esComponent:n.Es.Notebooks,path:s.xn,element:c,children:[{pageId:"editor.workspace.path",esComponent:n.Es.Notebooks,path:"workspace/*",element:b},{pageId:i.o.WEBAPP_FILE,esComponent:n.Es.Notebooks,path:s.CN[i.o.WEBAPP_FILE],element:d,observability:{urlParamTagMapping:{pipelineId:"pipeline_id",contextId:"authoring_context_id"},productEntityChain:[{productEntityType:r.Lm.FILE,routeParamId:"id"}]}},{pageId:i.o.WEBAPP_FILE_NEW,esComponent:n.Es.Notebooks,path:s.CN[i.o.WEBAPP_FILE_NEW],element:(0,l.D)(()=>(()=>{let e=()=>Promise.all([t.e(62394),t.e(92867)]).then(t.bind(t,792867));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(792867,"./NewFileRoute","lazy",e);return e()})())},{pageId:i.o.LSP_SYSTEM_MODULE_SOFT_TAB_OPEN,path:s.CN[i.o.LSP_SYSTEM_MODULE_SOFT_TAB_OPEN],element:p},{pageId:i.o.WEBAPP_FILE_LANDING_PAGE,esComponent:n.Es.Notebooks,path:s.CN[i.o.WEBAPP_FILE_LANDING_PAGE],element:p},{pageId:i.o.WEBAPP_FILE_REVISION,esComponent:n.Es.Notebooks,path:s.CN[i.o.WEBAPP_FILE_REVISION],element:d},{pageId:s.ht,esComponent:n.Es.Notebooks,path:s.CN[s.ht],element:u},{pageId:s.ht,esComponent:n.Es.Notebooks,path:`${s.CN[s.ht]}/:parentId`,element:u},{pageId:i.o.WEBAPP_NOTEBOOK,esComponent:n.Es.Notebooks,path:s.CN[i.o.WEBAPP_NOTEBOOK],element:m,observability:{urlParamTagMapping:{pipelineId:"pipeline_id",contextId:"authoring_context_id"},productEntityChain:[{productEntityType:r.Lm.NOTEBOOK,routeParamId:"id"}]}},{pageId:i.o.WEBAPP_NOTEBOOK_REVISION,esComponent:n.Es.Notebooks,path:s.CN[i.o.WEBAPP_NOTEBOOK_REVISION],element:m,observability:{urlParamTagMapping:{pipelineId:"pipeline_id",contextId:"authoring_context_id"},productEntityChain:[{productEntityType:r.Lm.NOTEBOOK,routeParamId:"id"}]}},{pageId:i.o.WEBAPP_NOTEBOOK_REVISION_MFFLOW,esComponent:n.Es.Notebooks,path:s.CN[i.o.WEBAPP_NOTEBOOK_REVISION_MFFLOW],element:m,observability:{productEntityChain:[{productEntityType:r.Lm.NOTEBOOK,routeParamId:"id"}]}},{pageId:i.o.WEBAPP_FOLDER,esComponent:n.Es.Notebooks,path:s.CN[i.o.WEBAPP_FOLDER],element:c},{pageId:i.o.WEBAPP_PIPELINE_EDITOR_GRAPH,esComponent:n.Es.WorkflowsAuthoring,path:s.CN[i.o.WEBAPP_PIPELINE_EDITOR_GRAPH],element:c,observability:{urlParamTagMapping:{pipelineId:"pipeline_id",contextId:"authoring_context_id"}}},{pageId:i.o.WEBAPP_PIPELINE_EDITOR_LANDING_PAGE,esComponent:n.Es.WorkflowsAuthoring,path:s.CN[i.o.WEBAPP_PIPELINE_EDITOR_LANDING_PAGE],element:c,observability:{urlParamTagMapping:{pipelineId:"pipeline_id",contextId:"authoring_context_id"}}},{pageId:s.cN.VISUAL_PIPELINE_NEW,esComponent:n.Es.LakeBuilder,path:s.CN[s.cN.VISUAL_PIPELINE_NEW],element:(0,l.D)(()=>(()=>{let e=()=>Promise.all([t.e(62280),t.e(62394),t.e(32305),t.e(67590),t.e(51545),t.e(6932),t.e(18294),t.e(5033),t.e(1291),t.e(97768),t.e(24685),t.e(99406),t.e(78580),t.e(55616),t.e(3330),t.e(59316),t.e(37797),t.e(11184),t.e(52426),t.e(12514),t.e(22886),t.e(45854),t.e(72263),t.e(86412),t.e(35747),t.e(6198),t.e(13526),t.e(82982),t.e(42797),t.e(68775),t.e(11022),t.e(49029),t.e(10133),t.e(43927),t.e(18650),t.e(87122),t.e(12674),t.e(4828),t.e(84283),t.e(98317),t.e(43587),t.e(35711),t.e(23197),t.e(10095),t.e(62621),t.e(45738),t.e(19604),t.e(356),t.e(17292),t.e(34607),t.e(54694),t.e(65484),t.e(54894),t.e(79331),t.e(45524),t.e(55851),t.e(70231),t.e(23145),t.e(14528),t.e(59498),t.e(13691),t.e(35094),t.e(97091),t.e(56129),t.e(10297),t.e(24283),t.e(40211),t.e(35813),t.e(81839),t.e(87448)]).then(t.bind(t,428116));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(428116,"$project/lakebuilder/LakeBuilderVisualPipelineCreationPage","lazy",e);return e()})())},{pageId:s.cN.HEADLESS_AGENT,esComponent:n.Es.LakeBuilder,path:s.CN[s.cN.HEADLESS_AGENT],element:(0,l.D)(()=>(()=>{let e=()=>Promise.all([t.e(62280),t.e(62394),t.e(5033),t.e(3341),t.e(73208),t.e(35756),t.e(62322)]).then(t.bind(t,601824));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(601824,"$project/lakebuilder/tools/headless-agent/browser/HeadlessTestPage","lazy",e);return e()})())},{pageId:s.cN.DESIGNER_FILE_NEW,esComponent:n.Es.LakeBuilder,path:s.CN[s.cN.DESIGNER_FILE_NEW],element:(0,l.D)(()=>(()=>{let e=()=>Promise.all([t.e(62280),t.e(62394),t.e(32305),t.e(67590),t.e(51545),t.e(6932),t.e(18294),t.e(5033),t.e(1291),t.e(97768),t.e(24685),t.e(99406),t.e(78580),t.e(55616),t.e(3330),t.e(59316),t.e(37797),t.e(11184),t.e(52426),t.e(12514),t.e(22886),t.e(45854),t.e(72263),t.e(86412),t.e(35747),t.e(6198),t.e(13526),t.e(51580),t.e(42797),t.e(68775),t.e(11022),t.e(49029),t.e(10133),t.e(43927),t.e(18650),t.e(87122),t.e(12674),t.e(4828),t.e(84283),t.e(98317),t.e(43587),t.e(35711),t.e(23197),t.e(10095),t.e(62621),t.e(45738),t.e(19604),t.e(356),t.e(17292),t.e(34607),t.e(54694),t.e(65484),t.e(54894),t.e(79331),t.e(45524),t.e(55851),t.e(70231),t.e(23145),t.e(14528),t.e(59498),t.e(13691),t.e(35094),t.e(97091),t.e(56129),t.e(40211),t.e(35813),t.e(81839),t.e(62466)]).then(t.bind(t,311538));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(311538,"$project/lakebuilder/LakeBuilderDesignerFileNewPage","lazy",e);return e()})())},{pageId:s.cN.DESIGNER_FILE,esComponent:n.Es.LakeBuilder,path:s.CN[s.cN.DESIGNER_FILE],element:m},{pageId:s.cN.DESIGNER_FILE_REVISION,esComponent:n.Es.LakeBuilder,path:s.CN[s.cN.DESIGNER_FILE_REVISION],element:m},{pageId:i.o.WEBAPP_PROJECT_LANDING_PAGE,esComponent:n.Es.DabsAuthoring,path:s.CN[i.o.WEBAPP_PROJECT_LANDING_PAGE],element:f},{pageId:i.o.WEBAPP_REPO_LANDING_PAGE,esComponent:n.Es.Repos,path:s.CN[i.o.WEBAPP_REPO_LANDING_PAGE],element:c},{pageId:i.o.WEBAPP_REPO_LANDING_PAGE,esComponent:n.Es.Repos,path:`${s.CN[i.o.WEBAPP_REPO_LANDING_PAGE]}/:tab`,element:c},{pageId:i.o.WEBAPP_NOTEBOOK_DASHBOARD,esComponent:n.Es.Notebooks,path:s.CN[i.o.WEBAPP_NOTEBOOK_DASHBOARD],element:g,observability:{productEntityChain:[{productEntityType:r.Lm.NOTEBOOK,routeParamId:"id"}]}},{pageId:s.Xy,esComponent:n.Es.Notebooks,path:s.jn,element:g,observability:{productEntityChain:[{productEntityType:r.Lm.NOTEBOOK,routeParamId:"id"}]}},{pageId:s.iL.LANDING_PAGE,esComponent:n.Es.Notebooks,path:s.CN[s.iL.LANDING_PAGE],element:p},{pageId:s.iL.NEW_QUERY,esComponent:n.Es.Notebooks,path:s.CN[s.iL.NEW_QUERY],element:p},{pageId:s.iL.QUERIES,esComponent:n.Es.Notebooks,path:s.CN[s.iL.QUERIES],element:p,observability:{productEntityChain:[{productEntityType:r.Lm.QUERY,routeParamId:"id"}]}},{pageId:s.iL.REVISION,esComponent:n.Es.Notebooks,path:s.CN[s.iL.REVISION],element:p,observability:{productEntityChain:[{productEntityType:r.Lm.QUERY,routeParamId:"id"}]}},{pageId:s.iL.UUID_REDIRECT,esComponent:n.Es.Notebooks,path:s.CN[s.iL.UUID_REDIRECT],element:p},{pageId:s.Sm.LANDING_PAGE,esComponent:n.Es.Notebooks,path:s.CN[s.Sm.LANDING_PAGE],element:p},{pageId:s.Sm.NEW_ALERT,esComponent:n.Es.Notebooks,path:s.CN[s.Sm.NEW_ALERT],element:p},{pageId:s.Sm.ALERTS,esComponent:n.Es.Notebooks,path:s.CN[s.Sm.ALERTS],element:p,observability:{productEntityChain:[{productEntityType:r.Lm.ALERT,routeParamId:"id"}]}},{pageId:o.UV,esComponent:n.Es.DataExplorer,path:"explore/data/:catalog/:schema/:table",element:p,observability:{productEntityChain:[{productEntityType:r.Lm.TABLE,routeParamId:"table"}]}},{pageId:o.YU,esComponent:n.Es.FileBrowser,path:"browse/folders/:folderId",element:p,observability:{productEntityChain:[{productEntityType:r.Lm.FOLDER,routeParamId:"folderId"}]}},{pageId:o.D8,esComponent:n.Es.WorkflowsAuthoring,path:"jobs/:jobId/*",element:p,observability:{productEntityChain:[{productEntityType:r.Lm.JOB,routeParamId:"jobId"}]}},{pageId:o.LO,esComponent:n.Es.LakehouseApps,path:"apps/:appName",element:p},{pageId:o.LO,esComponent:n.Es.LakehouseApps,path:"apps/:appName/edit",element:p},{pageId:o.LO,esComponent:n.Es.LakehouseApps,path:"apps/:appName/:tab",element:p}]}]},264010:(e,a,t)=>{t.d(a,{DN:()=>r,Gs:()=>n,Se:()=>i});var s,n=((s={}).LandingPage="landing page",s.NewQuery="new query",s.ExistingQuery="existing query",s.UuidRedirect="uuid redirect",s.QueryLandingPage="query landing page",s.NewAlert="new alert",s.ExistingAlert="existing alert",s.AlertLandingPage="alert landing page",s.NewNotebook="new notebook",s.ExistingNotebook="existing notebook",s.ExistingNotebookDashboard="existing notebook dashboard",s.NotebookLandingPage="notebook landing page",s.NewDesignerFile="new designer file",s.ExistingDesignerFile="existing designer file",s.NewFile="new file",s.ExistingFile="existing file",s.FileLandingPage="file landing page",s.JobEditor="job editor",s.PipelineLandingPage="pipeline landing page",s.PipelineGraphPage="pipeline graph page",s.GitFolderLandingPage="git folder landing page",s.PreviouslyOpenedSystemModule="previously opened system module",s.DabLandingPage="dab landing page",s.ExistingTableDetails="existing table details",s.ExistingFolderDetails="existing folder details",s.ExistingJob="existing job",s.ExistingAppDetails="existing app details",s);let i="WorkspaceTabTrigger",r="application/x-databricks-workspace-tab"},272285:(e,a,t)=>{t.d(a,{$g:()=>b,DZ:()=>T,QJ:()=>E,Th:()=>I,Ul:()=>f});var s=t(141078);let n=(0,s.J1)`
  fragment DiscoverSearchResultTitleData on SearchmidtierSearchUnifiedResult {
    name
    updatedAt
  }
`,i=(0,s.J1)`
  fragment DiscoverSearchResultOwnerData on SearchmidtierSearchUnifiedResult {
    owner {
      id
      fullname
      email
    }
    ownerId
  }
`,r=(0,s.J1)`
  fragment DiscoverSearchResultDescriptionData on SearchmidtierSearchUnifiedResult {
    description
    ucEntityMetadata {
      comments
    }
    dataRoom {
      description
    }
  }
`,o=(0,s.J1)`
  fragment DiscoverSearchResultIconData on SearchmidtierSearchUnifiedResult {
    resultType
    browseOnly
    ucEntityMetadata {
      securableKind
    }
  }
`,l=(0,s.J1)`
  fragment DiscoverSearchResultPopularityData on SearchmidtierSearchUnifiedResult {
    popularity {
      bucket
      count
    }
    liveUsageInfo {
      bucket
      count
    }
    resultType
  }
`,u=(0,s.J1)`
  fragment DiscoverSearchResultTableLocationData on SearchmidtierSearchUnifiedResult {
    ucEntityMetadata {
      catalogName
      schemaName
    }
  }
`,d=(0,s.J1)`
  fragment DiscoverSearchResultWorkspaceFullPathData on SearchmidtierSearchUnifiedResult {
    treeNode {
      fullPath
      id
      parent {
        id
      }
    }
  }
`,c=(0,s.J1)`
  fragment DiscoverSearchResultUrlData on SearchmidtierSearchUnifiedResult {
    id
    resultType
    name
    ucEntityMetadata {
      catalogName
      schemaName
    }
  }
`,p=(0,s.J1)`
  fragment DiscoverSearchResultThumbnailData on SearchmidtierSearchUnifiedResult {
    id
    name
    resultType
    thumbnailUrl(uiMode: $uiMode)
  }
`,m=(0,s.J1)`
  fragment DiscoverSearchResultTagsData on SearchmidtierSearchUnifiedResult {
    tags {
      name
      value
    }
  }
`,g=(0,s.J1)`
  fragment DiscoverSearchResultFavoriteStatusData on SearchmidtierSearchUnifiedResult {
    userActivityInfo {
      assetType
      assetId
      isFavorite
    }
  }
`,f=(0,s.J1)`
  fragment DiscoverSearchResultAllAssetData on SearchmidtierSearchUnifiedResult {
    id
    ...DiscoverSearchResultTitleData
    ...DiscoverSearchResultDescriptionData
    ...DiscoverSearchResultTagsData
    ...DiscoverSearchResultIconData
    ...DiscoverSearchResultFavoriteStatusData
    ...DiscoverSearchResultUrlData
  }
  ${n}
  ${r}
  ${m}
  ${o}
  ${g}
  ${c}
`,b=(0,s.J1)`
  fragment DiscoverSearchResultData on SearchmidtierSearchUnifiedResult {
    id
    ...DiscoverSearchResultTitleData
    ...DiscoverSearchResultOwnerData
    ...DiscoverSearchResultIconData
    ...DiscoverSearchResultDescriptionData
    ...DiscoverSearchResultPopularityData
    ...DiscoverSearchResultTableLocationData
    ...DiscoverSearchResultWorkspaceFullPathData
    ...DiscoverSearchResultUrlData
    ...DiscoverSearchResultThumbnailData
    ...DiscoverSearchResultTagsData
    ...DiscoverSearchResultFavoriteStatusData
  }
  ${n}
  ${i}
  ${o}
  ${r}
  ${l}
  ${u}
  ${d}
  ${c}
  ${p}
  ${m}
  ${g}
`,E=(0,s.J1)`
  fragment DiscoverSearchResultUcData on SearchmidtierSearchUnifiedResult {
    id
    ...DiscoverSearchResultTitleData
    ...DiscoverSearchResultOwnerData
    ...DiscoverSearchResultIconData
    ...DiscoverSearchResultDescriptionData
    ...DiscoverSearchResultPopularityData
    ...DiscoverSearchResultTableLocationData
    ...DiscoverSearchResultUrlData
    ...DiscoverSearchResultTagsData
    ...DiscoverSearchResultFavoriteStatusData
  }
  ${n}
  ${i}
  ${o}
  ${r}
  ${l}
  ${u}
  ${c}
  ${m}
  ${g}
`,I=(0,s.J1)`
  fragment DiscoverRecommendationAssetData on RecommendationAssetRecommendation {
    asset {
      name
      id
      type
      modifiedAt
      tags {
        tagName
        tagValue
      }
      unityCatalogSecurable {
        searchIndexData {
          description
          ownerId
          owner {
            fullname
            email
          }
        }
        securableKind
        fullName
        ... on UnityCatalogTable {
          id
          name
        }
      }
      treeNode {
        name
        fullPath
        owner {
          fullname
          email
        }
        ... on DataRoomTreeNode {
          id
          name
          dataRoom {
            description
          }
        }
      }
      userActivityInfo {
        assetType
        assetId
        popularity {
          bucket
          viewerCount
        }
      }
      owner {
        id
        fullname
        email
      }
    }
    relevanceReason {
      trendingMetadata {
        queryCount
        viewerCount
      }
      viewMetadata {
        viewFrequency
      }
      type
      relevanceTime
      description
    }
  }
`,T=(0,s.J1)`
  fragment DiscoverRecommendationAssetWithThumbnailData on RecommendationAssetRecommendation {
    ...DiscoverRecommendationAssetData
    asset {
      thumbnailUrl(uiMode: $uiMode)
    }
  }
  ${I}
`},287393:(e,a,t)=>{t.d(a,{JB:()=>o,aZ:()=>u,fg:()=>l});var s=t(141078),n=t(831358),i=t(659789);let r=(0,s.J1)`
  fragment ResetRunAsJob on Job {
    id
    runAsUserName
    runAsOwner
    runAsUser {
      ...RichUserData
    }
    runAsPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
      ...AclPrincipalData
    }
    effectiveUsagePolicyId
      @includeSafex(name: "databricks.elasticspark.budgetpolicies.enableUsagePoliciesInJobs", defaultValue: false)
    settings {
      name
      usagePolicyId
      tasks {
        taskKey
      }
      gitSource {
        gitProvider
      }
    }
    creator {
      name
    }
  }

  ${n.j}
  ${n.E}
`,o=(0,s.J1)`
  mutation JobResetRunAsAutogen($input: JobsUpdateJobInput!) @component(name: "Workflows.Orchestration.Other") {
    updateAndGetJob(input: $input) {
      apiError {
        ...ApiErrorFields
      }
      job {
        ...ResetRunAsJob
      }
    }
  }
  ${i.n}
  ${r}
`,l=(0,s.J1)`
  fragment JobConfigRunAs on Job {
    id
    runAsUserName
    runAsUser {
      ...RichUserData
    }
    runAsPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
      ...AclPrincipalData
    }
    runAsOwner
    effectiveUsagePolicyId
      @includeSafex(name: "databricks.elasticspark.budgetpolicies.enableUsagePoliciesInJobs", defaultValue: false)
    settings {
      name
      usagePolicyId
      tasks {
        taskKey
      }
      gitSource {
        gitProvider
      }
    }
    creator {
      name
    }
  }
  ${n.j}
  ${n.E}
`,u=(0,s.J1)`
  fragment JobDescription on JobSettings {
    description
  }
`},293723:(e,a,t)=>{t.d(a,{w:()=>n});var s=t(706274);function n(){return(0,s.K)("/oauth-prompt/app-consent")}},294909:(e,a,t)=>{t.d(a,{S:()=>d,z:()=>c});var s=t(845690),n=t(858383),i=t(759458),r=t(217304),o=t(293723),l=t(860742),u=t(999162);let d=(0,i.Ay)(e=>({collapseEnabled:"true"===(0,u.lG)(),toggleCollapseSetting:()=>e(e=>{let a=String(!e.collapseEnabled);return(0,s.AP)(u.gn,u.JB,!0,a),{collapseEnabled:!e.collapseEnabled}}),refresh:()=>e({collapseEnabled:"true"===(0,u.lG)()})})),c=()=>{let{collapseEnabled:e}=d(),a=(0,n.zy)(({pathname:e,hash:a})=>(0,u.Zd)({pathname:e,hash:a})),t=(0,o.w)(),s=(0,l.useIsSelectGroupPage)(),i=(0,r.K)();if(t||s||i)return!1;return!e||!a}},301171:(e,a,t)=>{t.d(a,{v:()=>u});var s=t(610435);t(692738);var n=t(382908),i=t(342411),r=t(853762),o=t(771994),l=t(214060);let u={noMoreResultsPleaseNarrowSearch:(0,s.Y)(i.sA,{id:"EXxUmv",defaultMessage:"Not the results you expected? Try using different keywords, checking for typos, or adjusting filters."}),schemaFilterError:(0,s.Y)(i.sA,{id:"ioUsml",defaultMessage:"Error loading schemas"}),catalogFilterError:(0,s.Y)(i.sA,{id:"g9VKGo",defaultMessage:"Error loading catalogs"}),tagFilterError:(0,s.Y)(i.sA,{id:"BAVUZT",defaultMessage:"Error loading tags"}),typeForMoreUsers:e=>(0,s.Y)(i.sA,{id:"JAa9+n",defaultMessage:"The first {count} users are displayed. Search to narrow results.",values:{count:e}}),modalTitle:(0,s.Y)(i.sA,{id:"wALXhh",defaultMessage:"Search"}),searchBarSubmitButton:(0,s.Y)(i.sA,{id:"I2wVEx",defaultMessage:"Search"}),searchBarPlaceholder:(e,a)=>1===a.length?e.formatMessage({id:"InuxyD",defaultMessage:"Search for {fileType}"},{fileType:a[0]}):e.formatMessage({id:"eadQlj",defaultMessage:"Search for {firstFileType}, {secondFileType}, and more"},{firstFileType:a[0],secondFileType:a[1]}),searchMode:e=>e.formatMessage({id:"Gt2A4i",defaultMessage:"Search mode"}),semantic:e=>e.formatMessage({id:"wrfBCo",defaultMessage:"Semantic search"}),keyword:e=>e.formatMessage({id:"tZBt78",defaultMessage:"Keyword search"}),anytime:e=>e.formatMessage({id:"5my7Ui",defaultMessage:"Anytime"}),lastModified:e=>e.formatMessage({id:"CvWHjn",defaultMessage:"Last modified"}),last24hours:e=>e.formatMessage({id:"EA3yHn",defaultMessage:"Within 24 hours"}),last7days:e=>e.formatMessage({id:"fuQYvC",defaultMessage:"Within 7 days"}),last30days:e=>e.formatMessage({id:"Hb5Asz",defaultMessage:"Within 30 days"}),catalogLabel:e=>e.formatMessage({id:"LfFo2Z",defaultMessage:"Catalog"}),schemaLabel:e=>e.formatMessage({id:"MI82Ep",defaultMessage:"Schema"}),tagLabel:e=>e.formatMessage({id:"H1NmgQ",defaultMessage:"Tag"}),userLabel:(0,s.Y)(i.sA,{id:"XFerZS",defaultMessage:"Owner"}),partnerCategoryLabel:(0,s.Y)(i.sA,{id:"2k6uJ5",defaultMessage:"Categories"}),marketplaceCategoryLabel:(0,s.Y)(i.sA,{id:"f2vlXl",defaultMessage:"Categories"}),multipleSelectedUsersLabel:e=>(0,s.Y)(i.sA,{id:"EDAphJ",defaultMessage:"{count} users",values:{count:e}}),multipleSelectedCatalogsLabel:e=>(0,s.Y)(i.sA,{id:"sFdX5u",defaultMessage:"{count} catalogs",values:{count:e}}),multipleSelectedTagsLabel:e=>(0,s.Y)(i.sA,{id:"COBuf/",defaultMessage:"{count} tags",values:{count:e}}),multipleSelectedSchemasLabel:e=>(0,s.Y)(i.sA,{id:"N3koON",defaultMessage:"{count} schemas",values:{count:e}}),selected:(0,s.Y)(i.sA,{id:"oRK8zV",defaultMessage:"Selected"}),me:(0,s.Y)(i.sA,{id:"zv7JsD",defaultMessage:"Me"}),everyone:(0,s.Y)(i.sA,{id:"/Dq46W",defaultMessage:"Everyone"}),fileTypeLabel:(0,s.Y)(i.sA,{id:"aGb5NR",defaultMessage:"Type"}),multipleSelectedFileTypesLabel:e=>(0,s.Y)(i.sA,{id:"CfWj68",defaultMessage:"{count} types",values:{count:e}}),sort:e=>e.formatMessage({id:"zRqlun",defaultMessage:"Sort by"}),relevance:e=>e.formatMessage({id:"hiRkob",defaultMessage:"Most relevant"}),popularity:e=>e.formatMessage({id:"hyZsg/",defaultMessage:"Most popular"}),searchmidtierResultMessage:(e,a)=>{switch(a){case o.If.DOCUMENTATION:return e.formatMessage({id:"pu8E+G",defaultMessage:"Documents"});case o.If.PROJECT:return(0,l.Q)()?e.formatMessage({id:"m2VEDE",defaultMessage:"Git folders"}):e.formatMessage({id:"Vce5FG",defaultMessage:"Repos"});case o.If.FILE:return e.formatMessage({id:"P9WXfC",defaultMessage:"Files"});case o.If.FOLDER:return e.formatMessage({id:"ii5y22",defaultMessage:"Folders"});case o.If.LIBRARY:return e.formatMessage({id:"rVC3Xq",defaultMessage:"Libraries"});case o.If.TABLE:return e.formatMessage({id:"kNHLDl",defaultMessage:"Tables"});case o.If.METRIC_VIEW:return e.formatMessage({id:"fm8QIi",defaultMessage:"Metric views"});case o.If.VOLUME:return e.formatMessage({id:"AGr2pF",defaultMessage:"Volumes"});case o.If.FUNCTION:return e.formatMessage({id:"JhdnX6",defaultMessage:"Functions"});case o.If.NOTEBOOK:return e.formatMessage({id:"iIT2GO",defaultMessage:"Notebooks"});case o.If.MLFLOW_EXPERIMENT:return e.formatMessage({id:"PZyeta",defaultMessage:"Experiments"});case o.If.QUERY:return e.formatMessage({id:"r37QiN",defaultMessage:"Queries"});case o.If.ALERT:return e.formatMessage({id:"1PsxP7",defaultMessage:"Legacy Alerts"});case o.If.ALERT_V2:return e.formatMessage({id:"Fccfue",defaultMessage:"Alerts"});case o.If.PIPELINE:return e.formatMessage({id:"2JGQlt",defaultMessage:"Pipelines"});case o.If.DBSQL_DASHBOARD:return e.formatMessage({id:"InkkPP",defaultMessage:"Dashboards"});case o.If.JOB:return e.formatMessage({id:"gLNYHR",defaultMessage:"Jobs"});case o.If.ML_MODEL:return e.formatMessage({id:"6YNBeQ",defaultMessage:"Models"});case o.If.PARTNER:return e.formatMessage({id:"ai5xOS",defaultMessage:"Partners"});case o.If.MARKETPLACE:return e.formatMessage({id:"vrBCdZ",defaultMessage:"Marketplace"});case o.If.DATA_ROOM:return e.formatMessage({id:"GC9aHp",defaultMessage:"Genie spaces"});case o.If.ML_ENDPOINT:return e.formatMessage({id:"FJa/HC",defaultMessage:"Endpoints"});case o.If.CATALOG:case o.If.SCHEMA:case o.If.NAV_LINK:case o.If.APP:case o.If.DESIGNER_FILE:case o.If.LAKEWATCH_QUERY:return""}},clearNavigationalSearchInput:(0,s.Y)(i.sA,{id:"aqx4a0",defaultMessage:"Clear"}),resetFilters:(0,s.Y)(i.sA,{id:"xqIJoR",defaultMessage:"Reset filters"}),allTab:(0,s.Y)(i.sA,{id:"ZtTd77",defaultMessage:"All"}),viewAllResults:(0,s.Y)(i.sA,{id:"im2CfH",defaultMessage:"View all"}),viewAllResultsWithType:(e,a)=>e.formatMessage({id:"YUp8It",defaultMessage:"View all {fileType}"},{fileType:a}),defaultSearchError:(0,s.Y)(i.sA,{id:"LPHoZf",defaultMessage:"An error occurred while fetching search results. Please try again later."}),searchQueryTooLong:(0,s.Y)(i.sA,{id:"MZjOEX",defaultMessage:"The max allowed input length is {maxLength}. Please try again with a shortened search term.",values:{maxLength:100}}),noResults:(0,s.Y)(i.sA,{id:"69/sr2",defaultMessage:"No results matched your search."}),noQuery:(0,s.Y)(i.sA,{id:"Ds2vL2",defaultMessage:"Type in a query and press enter to search"}),lastModifiedTimeText:e=>(0,s.Y)(i.sA,{id:"CV9ZrO",defaultMessage:"modified {time}",values:{time:e}}),more:(0,s.Y)(i.sA,{id:"+PHNYN",defaultMessage:"More"}),unityCatalogUpgrade:(0,s.Y)(i.sA,{id:"A6Qlf7",defaultMessage:"Upgrade to Unity Catalog to search tables. Tables in the Hive Metastore aren't searchable."}),unityCatalogTables:(0,s.Y)(i.sA,{id:"oQI1QJ",defaultMessage:"Only showing results for tables in Unity Catalog. Tables in the Hive Metastore aren't searchable."}),ucModelNoResults:(0,s.Y)(i.sA,{id:"N1S9o+",defaultMessage:"No result matches were found for models in Unity Catalog."}),ucModelWorkspaceRedirect:e=>(0,s.Y)(i.sA,{id:"S1FQwL",defaultMessage:"To search for models in the current workspace, go to the <link>models page</link>.",values:{link:a=>(0,s.Y)(n.o.Link,{componentId:"codegen_webapp_js_search_v2search_i18n.tsx_424",href:e,children:a})}}),modelWorkspaceInfo:e=>(0,s.Y)(i.sA,{id:"1w6C0v",defaultMessage:"Only showing results for models in Unity Catalog. Search for models in the current workspace in the <link>workspace model registry</link>.",values:{link:a=>(0,s.Y)(n.o.Link,{componentId:"codegen_webapp_js_search_v2search_i18n.tsx_431",href:e,children:a})}}),jobId:e=>(0,s.Y)(i.sA,{id:"IcylbC",defaultMessage:"Job ID: {jobId}",values:{jobId:e}}),jobServicePrincipalOwner:(0,s.Y)(i.sA,{id:"9926x/",defaultMessage:"Service principal owner"}),lastJobRun:(0,s.Y)(i.sA,{id:"oPpdT/",defaultMessage:"Last run:"}),openFullPageSearch:(e,a)=>e.formatMessage({id:"K4NWC5",defaultMessage:"Show all results for ''{searchValue}'' in a full page"},{searchValue:a}),openEmptyFullPageSearch:e=>e.formatMessage({id:"kwrEEs",defaultMessage:"Open search in a full page"}),newTab:(0,s.Y)(i.sA,{id:"Mh6Fw/",defaultMessage:"Open in a new tab"}),enter:(0,s.Y)(i.sA,{id:"Rhf1Qy",defaultMessage:"Enter"}),openAdvancedSearch:(e,a)=>{if(a)return e.formatMessage({id:"B/IQP7",defaultMessage:"Show all results for ''{searchValue}''"},{searchValue:a});return e.formatMessage({id:"qay3aB",defaultMessage:"Open advanced search"})},itemViewedTime:(e,a=!1)=>{let t=new Date(e);return a?(0,s.Y)(i.sA,{id:"pE6SrH",defaultMessage:"Viewed {timeAgo}",values:{timeAgo:(0,s.Y)(r.f,{date:t})}}):(0,s.Y)(i.sA,{id:"87kVKV",defaultMessage:"viewed {timeAgo}",values:{timeAgo:(0,s.Y)(r.f,{date:t})}})},relatedContentSubtitle:e=>(0,s.Y)(i.sA,{id:"X/uBJA",defaultMessage:'related to "{pageName}"',values:{pageName:e}}),relatedContentLabel:e=>e.formatMessage({id:"0SQTVq",defaultMessage:"Suggested"}),recentsLabel:e=>e.formatMessage({id:"IIR4ht",defaultMessage:"Recents"}),productsAndPagesLabel:e=>e.formatMessage({id:"BpFmuq",defaultMessage:"Products and Pages"})}},312900:(e,a,t)=>{t.d(a,{D8:()=>u,LO:()=>d,UV:()=>o,YU:()=>l,ZC:()=>p,pc:()=>c,wN:()=>m});var s=t(839562),n=t(475654),i=t(820628),r=t(264010);let o="editor.explore.data.table",l="editor.browse.folders",u="editor.jobs.details",d="editor.apps.details",c={"editor.index":r.Gs.LandingPage,[s.iL.LANDING_PAGE]:r.Gs.QueryLandingPage,[s.iL.QUERIES]:r.Gs.ExistingQuery,[s.iL.REVISION]:r.Gs.ExistingQuery,[s.iL.NEW_QUERY]:r.Gs.NewQuery,[s.iL.UUID_REDIRECT]:r.Gs.UuidRedirect,[s.Sm.ALERTS]:r.Gs.ExistingAlert,[s.Sm.NEW_ALERT]:r.Gs.NewAlert,[s.Sm.LANDING_PAGE]:r.Gs.AlertLandingPage,[n.o.WEBAPP_NOTEBOOK]:r.Gs.ExistingNotebook,[n.o.WEBAPP_NOTEBOOK_REVISION]:r.Gs.ExistingNotebook,[n.o.WEBAPP_NOTEBOOK_REVISION_MFFLOW]:r.Gs.ExistingNotebook,[n.o.WEBAPP_NOTEBOOK_DASHBOARD]:r.Gs.ExistingNotebookDashboard,[n.o.WEBAPP_NOTEBOOK_LANDING_PAGE]:r.Gs.NotebookLandingPage,[n.o.WEBAPP_REPO_LANDING_PAGE]:r.Gs.GitFolderLandingPage,[s.ht]:r.Gs.NewNotebook,[n.o.WEBAPP_FILE]:r.Gs.ExistingFile,[n.o.WEBAPP_FILE_NEW]:r.Gs.NewFile,[n.o.WEBAPP_FILE_LANDING_PAGE]:r.Gs.FileLandingPage,[n.o.WEBAPP_FILE_REVISION]:r.Gs.ExistingFile,[n.o.WEBAPP_FOLDER]:r.Gs.LandingPage,[n.o.WEBAPP_PIPELINE_EDITOR_LANDING_PAGE]:r.Gs.PipelineLandingPage,[n.o.WEBAPP_PIPELINE_EDITOR_GRAPH]:r.Gs.PipelineGraphPage,[n.o.WEBAPP_JOB_EDITOR]:r.Gs.JobEditor,[n.o.LSP_SYSTEM_MODULE_SOFT_TAB_OPEN]:r.Gs.PreviouslyOpenedSystemModule,[n.o.WEBAPP_PROJECT_LANDING_PAGE]:r.Gs.DabLandingPage,[s.cN.DESIGNER_FILE]:r.Gs.ExistingDesignerFile,[s.cN.DESIGNER_FILE_NEW]:r.Gs.NewDesignerFile,[s.cN.DESIGNER_FILE_REVISION]:r.Gs.ExistingDesignerFile,[o]:r.Gs.ExistingTableDetails,[l]:r.Gs.ExistingFolderDetails,[u]:r.Gs.ExistingJob,[d]:r.Gs.ExistingAppDetails},p=e=>{switch(e){case r.Gs.LandingPage:case r.Gs.PipelineLandingPage:case r.Gs.DabLandingPage:case r.Gs.GitFolderLandingPage:return"landing-page";case r.Gs.PipelineGraphPage:return"pipeline-graph";case r.Gs.QueryLandingPage:case r.Gs.ExistingQuery:case r.Gs.NewQuery:case r.Gs.UuidRedirect:return"query";case r.Gs.NewNotebook:case r.Gs.NotebookLandingPage:case r.Gs.ExistingNotebook:case r.Gs.ExistingNotebookDashboard:return"notebook";case r.Gs.NewDesignerFile:case r.Gs.ExistingDesignerFile:return"designer";case r.Gs.FileLandingPage:case r.Gs.NewFile:case r.Gs.ExistingFile:case r.Gs.JobEditor:return"file";case r.Gs.PreviouslyOpenedSystemModule:return"module";case r.Gs.AlertLandingPage:case r.Gs.ExistingAlert:case r.Gs.NewAlert:return"alert";case r.Gs.ExistingTableDetails:return"table-details";case r.Gs.ExistingFolderDetails:return"folder-details";case r.Gs.ExistingJob:return"job";case r.Gs.ExistingAppDetails:return"app-details"}},m=()=>{let e=(0,i.UA)();return c[e&&e.length>1?e[1].pageId:"editor.index"]}},367295:(e,a,t)=>{t.d(a,{L:()=>r});var s=t(371303),n=t(726583),i=t(924876);function r(){return{includeSubscriptions:(0,s.sT)("databricks.fe.jaws.enableDashboardSubscriptionsUi",!1),includeJobInRunJobTask:!0,includeJobParameters:(0,n.ue)(),includeTaskDependencyOutcome:!0,includeTriggerState:!0,includePeriodicTrigger:!0,includeOnStreamingBacklogExceeded:(0,i.cG)(),includeSourceInDbtAndSqlFile:!0}}},397382:(e,a,t)=>{t.d(a,{N:()=>n});var s=t(441535);function n(){return(0,s.W)("databricks.fe.discover.domainsRecommendations",!1)}},431750:(e,a,t)=>{t.d(a,{l:()=>o});var s=t(692738),n=t(623797);function i(e,a,t,s,n,i,r){try{var o=e[i](r),l=o.value}catch(e){t(e);return}o.done?a(l):Promise.resolve(l).then(s,n)}let r=s.lazy(()=>{var e;return(e=function*(){return{default:(yield(()=>{let e=()=>Promise.all([t.e(62280),t.e(20806),t.e(47404),t.e(80159),t.e(4065),t.e(46729),t.e(30140),t.e(14770),t.e(5830),t.e(89643),t.e(46927)]).then(t.bind(t,389643));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(389643,"./PermissionModal","lazy",e);return e()})()).PermissionModal}},function(){var a=this,t=arguments;return new Promise(function(s,n){var r=e.apply(a,t);function o(e){i(r,s,n,o,l,"next",e)}function l(e){i(r,s,n,o,l,"throw",e)}o(void 0)})})()}),o=e=>(0,n.EV)(r,"PermissionModal",e)},434422:(e,a,t)=>{t.d(a,{s:()=>r});var s=t(441535),n=t(118389),i=t(707076);let r=()=>{let e=(0,s.W)("discover_page",!1);return(0,i.MH)()&&(0,i.Kt)()&&(0,n.P)()&&e}},454438:(e,a,t)=>{t.d(a,{A:()=>l});var s=t(610435),n=t(692738),i=t(375214);function r(e){return(0,s.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,s.Y)("path",{fill:"currentColor",d:"M12 12H8v-1.5h4zM5.53 11.53 7.56 9.5 5.53 7.47 4.47 8.53l.97.97-.97.97z"}),(0,s.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.75 1a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75V1.75a.75.75 0 0 0-.75-.75zm.75 3V2.5h11V4zm0 1.5v8h11v-8z",clipRule:"evenodd"})]})}let o=(0,n.forwardRef)((e,a)=>(0,s.Y)(i.I,{ref:a,...e,component:r}));o.displayName="QueryEditorIcon";let l=o},520256:(e,a,t)=>{function s(e,a,t,s,n,i,r){try{var o=e[i](r),l=o.value}catch(e){t(e);return}o.done?a(l):Promise.resolve(l).then(s,n)}function n(e,a){var t;return(t=function*(){return(yield e.post("/ajax-api/2.0/data-rooms/tools/recommend-spaces",a)).data},function(){var e=this,a=arguments;return new Promise(function(n,i){var r=t.apply(e,a);function o(e){s(r,n,i,o,l,"next",e)}function l(e){s(r,n,i,o,l,"throw",e)}o(void 0)})})()}t.d(a,{c:()=>n})},543963:(e,a,t)=>{t.d(a,{DP:()=>n,WB:()=>i,cn:()=>r});var s=t(141078);let n=(0,s.J1)`
  fragment RunStateFragment on JobsRunState {
    durationWarningExceeded
    lifeCycleState
    resultState
    stateMessage
    userCancelledOrTimedout
    queueReason @include(if: $includeQueueReason)
  }
`,i=(0,s.J1)`
  fragment RunStatusFragment on JobsRunStatus {
    queueDetails @include(if: $includeQueueReason) {
      code
      message
    }
    state
    description @includeSafex(name: "lakeflow_runs_list", defaultValue: false)
    cancellationDetails @includeSafex(name: "lakeflow_runs_list", defaultValue: false) {
      reason
    }
    terminationDetails {
      code
      message
      type
    }
  }
`,r=(0,s.J1)`
  fragment RunEdgesFragment on RunConnection {
    edges {
      node {
        status
        statusV2 {
          ...RunStatusFragment
        }
        idInJob
        startTime
      }
    }
  }
  ${i}
`},657465:(e,a,t)=>{t.d(a,{MX:()=>s,RX:()=>l,X_:()=>i,jF:()=>n,mk:()=>o,zs:()=>r});let s="assistant",n="assistant.submit_prompt",i="assistant.stop_generating",r="assistant.new_thread",o="assistant.get_run_status",l="assistant.start_agent_run"},659789:(e,a,t)=>{t.d(a,{M:()=>i,n:()=>n});var s=t(141078);let n=(0,s.J1)`
  fragment ApiErrorFields on ApiError {
    code
    message
  }
`,i=(0,s.J1)`
  fragment RunParameters on RunParameters {
    jarParams
    notebookParams {
      key
      value
    }
    pythonParams
    sparkSubmitParams
    pythonNamedParams {
      key
      value
    }
    sqlParams {
      key
      value
    }
    dbtCommands
    pipelineParams {
      fullRefresh
    }
  }
`},691515:(e,a,t)=>{t.d(a,{d:()=>n});var s=t(141078);let n=(0,s.J1)`
  fragment ForEachTaskStats on JobsJobTask {
    forEachTask {
      stats {
        taskRunStats {
          scheduledIterations
          activeIterations
          totalIterations
          failedIterations
          completedIterations
          succeededIterations
        }
        errorMessageStats {
          errorMessage
          count
          terminationCategory
        }
      }
    }
  }
`},733965:(e,a,t)=>{t.d(a,{h:()=>l});var s=t(692738),n=t(141078);if(13057==t.j)var i=t(886100);if(13057==t.j)var r=t(22191);let o=(0,n.J1)`
  query GetAssumableServicePrincipals {
    getAssumableServicePrincipals
      @rest(
        type: "GetAssumableServicePrincipalsResponse"
        path: "/preview/access-control/assumable-service-principals"
        method: "GET"
      ) {
      __typename
      servicePrincipals @type(name: "AssumableServicePrincipalResponse") {
        __typename
        id
        displayName
        applicationId
      }
    }
  }
`,l=e=>{let{data:a,loading:t,error:l}=(0,n.IT)(o,{...e});return{data:(0,s.useMemo)(()=>(a?.getAssumableServicePrincipals?.servicePrincipals??[]).flatMap(e=>{if(!e.id)return i.iT.log(r.Es.GqlInfra,"Received an assumable service principal with missing id",e),[];return[{userId:e.id.toString(),name:e.displayName||""}]}),[a]),loading:t,error:l}}},736996:(e,a,t)=>{if(t.d(a,{LZ:()=>i,V8:()=>o,X4:()=>g,ZQ:()=>l,Zu:()=>r,a2:()=>d,eh:()=>u,lf:()=>c,xs:()=>p,yt:()=>m}),13057==t.j)var s=t(497895);var n=t(993533);let i=8,r=12,o=24,l=60,u="system.Featured",d="TABLE_METRIC_VIEW";function c(e){let{theme:a}=(0,s.wn)();return e?0:2*a.spacing.lg}let p=[n.Clx.DASHBOARD_V3,n.Clx.DATA_ROOM,n.Clx.NOTEBOOK,n.Clx.QUERY,n.Clx.UC_TABLE,n.Clx.UC_MODEL,n.Clx.ENDPOINT_CENTRIC_ENDPOINT],m=[n.iId.ML_MODEL,n.iId.ML_ENDPOINT],g=[n.iId.ML_MODEL]},759141:(e,a,t)=>{t.d(a,{B:()=>o,f:()=>l});var s,n=t(22191),i=t(747129),r=t(536152),o=((s={})[s.NotebookBrowserNotifications=0]="NotebookBrowserNotifications",s[s.PythonFormatHandler=1]="PythonFormatHandler",s[s.useGitProvider=2]="useGitProvider",s[s.NotebookImporter=3]="NotebookImporter",s[s.AutoClusterAttachV2=4]="AutoClusterAttachV2",s);function l(e){return a=>{let t,s;a instanceof Error?(t=a.message||"No error message provided",s=a.stack):t=`Non-Error type received: ${JSON.stringify(a)}`;let o=`Message: ${t}
Stack: ${s||"No stack trace available"}`;r.Q.sev2BurnRate(n.Es.Notebooks,`ES-988440: GenericCatch triggered in callsite: ${e}`,i.i1.P99,i.Ip.Min10,!1,o)}}},799738:(e,a,t)=>{t.d(a,{M7:()=>m,Y:()=>p,bc:()=>u,sr:()=>d,vO:()=>c,xH:()=>l,z:()=>o});var s,n=t(817148),i=t(686560),r=t(441535),o=((s={}).IN_PRODUCT_SURVEY="IN_PRODUCT_SURVEY",s.NEW_HOME_PAGE="NEW_HOME_PAGE",s.CALENDAR_BOOKING_LINK="CALENDAR_BOOKING_LINK",s.TUTORIALS_PAGE_SURVEY="TUTORIALS_PAGE_SURVEY",s.RUN_TUTORIAL_NOTEBOOK="RUN_TUTORIAL_NOTEBOOK",s.TUTORIALS_PAGE_VIDEO_AUTO_PLAY_DISABLED="TUTORIALS_PAGE_VIDEO_AUTO_PLAY_DISABLED",s.TUTORIALS_PAGE_VIDEO_AUTO_MUTE="TUTORIALS_PAGE_VIDEO_AUTO_MUTE",s.ACTIVE_TIME_TRACKING="ACTIVE_TIME_TRACKING",s.PRE_BUILT_DEMOS="PRE_BUILT_DEMOS",s.FILE_BROWSER_TREE_ENABLED="FILE_BROWSER_TREE_ENABLED",s.RESUME_LEARNING_HERO="RESUME_LEARNING_HERO",s.DEMO_INLINE_FEEDBACK="DEMO_INLINE_FEEDBACK",s.FUNDAMENTALS_V2="FUNDAMENTALS_V2",s.VIMEO_PLAYER_SDK="VIMEO_PLAYER_SDK",s.LEARN_PAGE="LEARN_PAGE",s.BUILD_DATA_PIPELINE_DEMO="BUILD_DATA_PIPELINE_DEMO",s.E2E_DASHBOARD_DEMO="E2E_DASHBOARD_DEMO",s.COMPLETION_READINESS_TARGETING="COMPLETION_READINESS_TARGETING",s.PLAYGROUND_MODEL_GATEKEEPER_LIMIT="PLAYGROUND_MODEL_GATEKEEPER_LIMIT",s.GET_STARTED_DATA_ENGINEERING_DEMO="GET_STARTED_DATA_ENGINEERING_DEMO",s.LEARNING_ENTRY_POINT_NUDGE="LEARNING_ENTRY_POINT_NUDGE",s.GET_STARTED_MACHINE_LEARNING_TUTORIAL="GET_STARTED_MACHINE_LEARNING_TUTORIAL",s.REPRISE_DEMOS="REPRISE_DEMOS",s);let l=()=>(0,i.d)("workspaceCustomBranding","")===n.u7.PHAROS,u=e=>{if(!l())return!1;switch(e){case"IN_PRODUCT_SURVEY":return(0,r.W)("databricks.sisu.experiments.isInProductSurveyEnabled",!1);case"NEW_HOME_PAGE":return(0,r.W)("databricks.sisu.experiments.isNewHomePageEnabled",!1);case"CALENDAR_BOOKING_LINK":return(0,r.W)("databricks.sisu.experiments.calendarBookingLinkEnabled",!1);case"TUTORIALS_PAGE_SURVEY":return(0,r.W)("databricks.sisu.experiments.isTutorialsPageSurveyEnabled",!1);case"RUN_TUTORIAL_NOTEBOOK":return(0,r.W)("databricks.sisu.experiments.isRunTutorialNotebookEnabled",!1);case"TUTORIALS_PAGE_VIDEO_AUTO_PLAY_DISABLED":return(0,r.W)("databricks.sisu.experiments.isTutorialsPageVideoAutoPlayDisabled",!1);case"TUTORIALS_PAGE_VIDEO_AUTO_MUTE":return(0,r.W)("databricks.sisu.experiments.isTutorialsPageVideoAutoMuteEnabled",!1);case"ACTIVE_TIME_TRACKING":return(0,r.W)("databricks.sisu.experiments.isActiveTimeTrackingEnabled",!1);case"PRE_BUILT_DEMOS":return(0,r.W)("databricks.sisu.experiments.isPreBuiltDemosEnabled",!1);case"FILE_BROWSER_TREE_ENABLED":return(0,r.W)("databricks.sisu.experiments.isFileBrowserTreeEnabled",!1);case"RESUME_LEARNING_HERO":return(0,r.W)("databricks.sisu.experiments.isResumeLearningHeroEnabled",!1);case"DEMO_INLINE_FEEDBACK":return(0,r.W)("databricks.sisu.experiments.isDemoInlineFeedbackEnabled",!1);case"FUNDAMENTALS_V2":return(0,r.W)("databricks.sisu.experiments.isFundamentalsV2Enabled",!1);case"VIMEO_PLAYER_SDK":return(0,r.W)("databricks.sisu.experiments.isVimeoPlayerSdkEnabled",!1);case"LEARN_PAGE":return(0,r.W)("databricks.sisu.experiments.isLearnPageEnabled",!1);case"BUILD_DATA_PIPELINE_DEMO":return(0,r.W)("databricks.sisu.experiments.isBuildDataPipelineDemoEnabled",!1);case"E2E_DASHBOARD_DEMO":return(0,r.W)("databricks.sisu.experiments.isE2EDashboardDemoEnabled",!1);case"COMPLETION_READINESS_TARGETING":return(0,r.W)("databricks.sisu.experiments.isCompletionReadinessTargetingEnabled",!1);case"PLAYGROUND_MODEL_GATEKEEPER_LIMIT":return(0,r.W)("databricks.sisu.experiments.isPlaygroundModelGatekeeperLimitEnabled",!1);case"GET_STARTED_DATA_ENGINEERING_DEMO":return(0,r.W)("databricks.sisu.experiments.isGetStartedDataEngineeringDemoEnabled",!1);case"LEARNING_ENTRY_POINT_NUDGE":return(0,r.W)("databricks.sisu.experiments.isLearningEntryPointNudgeEnabled",!1);case"GET_STARTED_MACHINE_LEARNING_TUTORIAL":return(0,r.W)("databricks.sisu.experiments.isGetStartedMachineLearningTutorialEnabled",!1);case"REPRISE_DEMOS":return(0,r.W)("databricks.sisu.experiments.isRepriseDemosEnabled",!1);default:return!1}},d=()=>{let e=(0,r.W)("databricks.sisu.experiments.learningNudgeUserCreatedAfter",0);if(0===e)return!0;let a=(0,i.d)("accountCreationTimeMillis",0);return a>0&&a>=e},c=()=>(0,r.W)("databricks.sisu.experiments.googleCalendarAppointmentLink","https://calendar.app.google/g68GxhXkFyXEEgdx5"),p=()=>(0,r.W)("databricks.sisu.experiments.demoPageSurveyUrl","https://docs.google.com/forms/d/e/1FAIpQLSex8dndHhU23aBx7VBLzOeKZNLMC_PMBeUkT7B3KwFY6vcZnQ/viewform?usp=pp_url&entry.2082114165=<account-id>&entry.1589857392=<demo-name>"),m=()=>{if(!l())return"default";let e=(0,r.W)("databricks.sisu.experiments.homepageVariant","");if("v4"===e||"new"===e)return e;if(u("NEW_HOME_PAGE"))return"new";return"default"}},823910:(e,a,t)=>{t.d(a,{S:()=>i,_:()=>n});var s=t(141078);let n=(0,s.J1)`
  query ListRecommendedDomains($pageSize: Int, $pageToken: String, $recommendationTraceId: String)
  @component(name: "LakehouseCollaboration.DiscoveryAndRecommendation") {
    recommendationGetDomainRecommendations(
      input: { pageSize: $pageSize, pageToken: $pageToken, recommendationTraceId: $recommendationTraceId }
    ) {
      domainRecommendations {
        domain {
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
          draft
          effectiveDraft
          technicalOwnerIds
          businessOwnerIds
          createTime
          parentDomainId
        }
        relevanceScore
      }
      recommendationTraceId
      nextPageToken
      apiError {
        code
        message
        helpUrl
        traceId
      }
    }
  }
`;function i(e,a={}){return(0,s.IT)(n,{variables:e,...a})}},841710:(e,a,t)=>{t.d(a,{DV:()=>d,LC:()=>r,W9:()=>i,iq:()=>o,pR:()=>u});var s,n=t(993533),i=((s={}).DASHBOARD_LAKEVIEW="DASHBOARD_LAKEVIEW",s.NOTEBOOK="NOTEBOOK",s.QUERY="QUERY",s.UC_TABLE="UC_TABLE",s.DATA_ROOM="DATA_ROOM",s.UC_TABLE_METRIC_VIEW="UC_TABLE_METRIC_VIEW",s.UC_MODEL="UC_MODEL",s.ENDPOINT="ENDPOINT_CENTRIC_ENDPOINT",s.APP="APP",s);let r=Object.entries({DASHBOARD_LAKEVIEW:n.iId.DASHBOARD_LAKEVIEW,NOTEBOOK:n.iId.NOTEBOOK,QUERY:n.iId.QUERY,UC_TABLE:n.iId.TABLE,DATA_ROOM:n.iId.DATA_ROOM,UC_TABLE_METRIC_VIEW:n.iId.TABLE,UC_MODEL:n.iId.ML_MODEL,ENDPOINT_CENTRIC_ENDPOINT:n.iId.ML_ENDPOINT,APP:n.iId.APP}).reduce((e,[a,t])=>({...e,[t]:e[t]??a}),{}),o=e=>Object.keys(r).includes(e),l={[n.z$1.ALERT]:n.iId.ALERT,[n.z$1.DASHBOARD]:n.iId.DASHBOARD_REDASH,[n.z$1.DASHBOARD_V3]:n.iId.DASHBOARD_LAKEVIEW,[n.z$1.EXPERIMENT]:n.iId.MLFLOW_EXPERIMENT,[n.z$1.FILE]:n.iId.FILE,[n.z$1.FOLDER]:n.iId.FOLDER,[n.z$1.JOB]:n.iId.JOB,[n.z$1.LIBRARY]:n.iId.LIBRARY,[n.z$1.NOTEBOOK]:n.iId.NOTEBOOK,[n.z$1.PROJECT]:n.iId.PROJECT,[n.z$1.QUERY]:n.iId.QUERY,[n.z$1.UC_TABLE]:n.iId.TABLE,[n.z$1.DATA_ROOM]:n.iId.DATA_ROOM,[n.z$1.UC_MODEL]:n.iId.ML_MODEL,[n.z$1.ENDPOINT_CENTRIC_ENDPOINT]:n.iId.ML_ENDPOINT,[n.z$1.APP]:n.iId.APP},u=l,d=Object.entries(l).reduce((e,[a,t])=>({...e,[t]:a}),{})},852683:(e,a,t)=>{t.d(a,{F:()=>n});let s=[["none",/^(?:[^\\"]|\\.)*$/],["simple",/^\s*"(?:[^\\"]|\\.)*"\s*$/],["complex",/^[^"]*(?:\s|^)(?:"(?:[^\\"]|\\.)*"(?:\s[^"]+)?(?:\s|$))+$/],["unpadded",/^[^"]*(?:"(?:[^\\"]|\\.)*"[^"]*)+$/]];function n(e){for(let[a,t]of s)if(null!==t.exec(e))return a;return"invalid"}},860742:(e,a,t)=>{if(t.r(a),t.d(a,{RouteComponent:()=>O,useIsSelectGroupPage:()=>$}),13057==t.j)var s,n=t(610435);var i=t(692738);if(13057==t.j)var r=t(497895);if(13057==t.j)var o=t(433858);if(13057==t.j)var l=t(79128);if(13057==t.j)var u=t(943844);if(13057==t.j)var d=t(764236);if(13057==t.j)var c=t(382908);if(13057==t.j)var p=t(687828);if(13057==t.j)var m=t(286342);var g=t(342411);if(13057==t.j)var f=t(806883);if(13057==t.j)var b=t(978415);if(13057==t.j)var E=t(13451);if(13057==t.j)var I=t(419374);if(13057==t.j)var T=t(441535);if(13057==t.j)var k=t(686560);if(13057==t.j)var S=t(771888);if(13057==t.j)var h=t(733965);if(13057==t.j)var R=t(195150);if(13057==t.j)var P=t(905468);if(13057==t.j)var A=t(488655);if(13057==t.j)var y=t(971384);if(13057==t.j)var D=t(337706);if(13057==t.j)var _=t(846007);var N=t(706274),v=t(889885);if(13057==t.j)var L=t(783487);let C="next_url";var M=((s=M||{}).Group="group",s.ServicePrincipal="service-principal",s);function O(){let e,a,t=(0,A.Zp)(),s=(0,y.SV)(),{theme:N}=(0,r.wn)(),M=(a=(e=(0,v.Nm)("loginLogo",()=>(0,E.e)("loginLogo","")))?new URL(e,window.location.origin).href:void 0,{productName:(0,v.Nm)("productName",I.p.productName),logo:a,azure:(0,v.FI)("cloud")===L.L.Azure}),O=(0,T.W)("u2m_for_sp",!1),$=(0,T.W)("databricks.fe.enableAssumeRolePhase1point5",!1)||(0,T.W)("excl_data_access",!1),[{rawMode:w,nextUrlValue:J,allParamsString:x}]=(0,D.ok)(e=>({rawMode:e.get("select_mode")||"0",nextUrlValue:e.get(C)||"",allParamsString:new URLSearchParams(Array.from(e.entries())).toString()})),B=(0,i.useMemo)(()=>{if("2"===w){if(O&&$)return"2";if(O)return"1";if($)return"0";return null}if("1"===w)return O?"1":null;if("0"===w)return $?"0":null;return null},[w,O,$]);(0,i.useEffect)(()=>{null===B&&t("/")},[t,B]);let G=(0,n.Y)(g.sA,{id:"79K16q",defaultMessage:"Authorize as.."}),F=(0,i.useMemo)(()=>({userId:"",name:(0,k.d)("userFullname_new","")||(0,k.d)("user_new","")}),[]),[W,U]=(0,i.useState)(F),[V,j]=(0,i.useState)(!1),[q,Y]=(0,i.useState)("group"),{data:K,loading:z}=(0,S.C)({skip:"1"===B||null===B}),{data:Q,loading:H}=(0,h.h)({skip:"0"===B||null===B});(0,i.useEffect)(()=>{"2"===B&&(z||K.length>0)||"0"===B?Y("group"):Y("service-principal")},[B,z,K,H,Q]),(0,i.useEffect)(()=>{U(F)},[q,F]);let Z=(0,i.useMemo)(()=>{let e=new URLSearchParams(x);return e.delete(C),"group"===q?e.set("assume_group",W.userId):e.set("assume_sp",W.userId),(0,_.yS)(`${J}&${e.toString()}`).toString()},[x,J,W,q]);(0,i.useEffect)(()=>{z||H||0!==K.length||0!==Q.length||s(Z)},[s,z,H,K,Q,Z]);let X=(0,T.W)("databricks.fe.wexp.workspaceSelectorAsDropdownMenu",!1),ee=(0,i.useCallback)(e=>a=>{let t=e.find(({userId:e})=>e===a);U(void 0===t?F:t),j(!1)},[F]);if(null===B)return null;let ea=(0,n.FD)(n.FK,{children:["2"===B&&K.length>0&&Q.length>0&&(0,n.FD)(o.d,{name:"oauth.select-group.mode",componentId:"oauth.select-group.mode",value:q,onChange:e=>Y(e.target.value),style:{justifyContent:"center",paddingBottom:`${N.spacing.md}px`},children:[(0,n.Y)(o.E,{name:"oauth.select-group.mode.group",value:"group",children:(0,n.Y)(g.sA,{id:"AR/Y3K",defaultMessage:"Group"})}),(0,n.Y)(o.E,{name:"oauth.select-group.mode.service-principal",value:"service-principal",children:(0,n.Y)(g.sA,{id:"dkUPg3",defaultMessage:"Service Principal"})})]}),"group"===q&&(0,n.Y)(R.M,{assumeableRoles:K,componentId:"oauth.select-group.select",onSelectRole:ee(K),initialSelectedRoleId:W.userId||void 0,label:(0,n.Y)(g.sA,{id:"Bs+gfL",defaultMessage:"Groups"})}),"service-principal"===q&&(0,n.Y)(R.M,{assumeableRoles:Q,componentId:"oauth.select-group.select",onSelectRole:ee(Q),initialSelectedRoleId:W.userId||void 0,label:(0,n.Y)(g.sA,{id:"B5gr0r",defaultMessage:"Service Principals"})})]}),et=(0,n.Y)("div",{style:{width:"300px"},children:(0,n.Y)(l.$n,{block:!0,endIcon:(0,n.Y)(u.A,{}),componentId:"oauth.select-group.button",dangerouslyAppendWrapperCss:{alignItems:"center",display:"flex",justifyContent:"space-between",width:"100%"},children:W.name})});return(0,n.FD)(f.Y,{children:[(0,n.FD)("div",{css:{alignItems:"center",background:N.colors.backgroundPrimary,borderRadius:2*N.legacyBorders.borderRadiusMd,boxShadow:N.general.shadowLow,display:"flex",flexDirection:"column",padding:N.spacing.lg},children:[(0,n.Y)(P.g,{...M}),(0,n.Y)(d.h,{size:"sm"}),(0,n.Y)(c.o.Paragraph,{children:G}),(0,n.Y)(d.h,{size:"sm"}),X?(0,n.FD)(p.Root,{open:V,onOpenChange:j,children:[(0,n.Y)(p.Trigger,{asChild:!0,children:et}),(0,n.Y)(p.Content,{align:"center",css:{minWidth:300,maxHeight:350,display:"flex",flexDirection:"column",overflow:"hidden",padding:`${N.spacing.sm}px 0`},children:ea})]}):(0,n.FD)(m.Root,{componentId:"oauth.select-group.popover",open:V,onOpenChange:j,children:[(0,n.Y)(m.Trigger,{asChild:!0,children:et}),(0,n.Y)(m.Content,{align:"center",minWidth:300-2*N.spacing.sm,css:{maxHeight:350,overflow:"auto"},children:ea})]}),(0,n.Y)(d.h,{size:"md"}),(0,n.Y)(l.$n,{type:"primary",block:!0,componentId:"oauth.select-group.continue",href:Z,loading:z||H,children:(0,n.Y)(g.sA,{id:"ZlCCZf",defaultMessage:"Continue"})})]}),(0,n.Y)(d.h,{size:"lg"}),(0,n.Y)(b.w,{type:b.V.POLICIES,componentId:"oauth.prompt.select-group.footer",privacyNoticeLink:(0,v.FI)("privacyPolicyLink"),termsOfUseLink:(0,v.FI)("termsOfUseLink")})]})}let $=()=>(0,N.K)("/oauth-prompt/select-group")},883972:(e,a,t)=>{t.d(a,{Be:()=>T,EQ:()=>b,GD:()=>E,H6:()=>I,Jb:()=>u,OO:()=>f,Sj:()=>g,TF:()=>o,Z1:()=>S,ac:()=>p,h:()=>r,nB:()=>c,pb:()=>d,sV:()=>l,tF:()=>m,vK:()=>h,wX:()=>k});var s=t(778529),n=t.n(s);if(13057==t.j)var i=t(737358);let r="/apps-v2",o=`${r}/app/:appName`,l=`${r}/spaces/:spaceName`,u={home:"",build:"build",appSpaces:"spaces",spaceCreate:"spaces/create",spaceDetail:"spaces/:spaceName/overview",spaceMonitor:"spaces/:spaceName/monitor",spaceSettings:"spaces/:spaceName/settings",lakebox:"lakebox",lakeboxMonitor:"lakebox/:sandboxId/monitor",create:"create",install:"install",appAuthorization:"authorization",appDeployments:"deployments",appLogs:"logs",appEnvironment:"environment",appInsights:"insights",appSettings:"settings",appOverview:"overview",uiPrimitivesDemo:"ui-primitives-demo"},d={home:r,build:`${r}/${u.build}`,appSpaces:`${r}/${u.appSpaces}`,spaceCreate:`${r}/${u.spaceCreate}`,spaceDetail:`${r}/${u.spaceDetail}`,spaceMonitor:`${r}/${u.spaceMonitor}`,spaceSettings:`${r}/${u.spaceSettings}`,lakebox:`${r}/${u.lakebox}`,lakeboxMonitor:`${r}/${u.lakeboxMonitor}`,create:`${r}/${u.create}`,install:`${r}/${u.install}`,appAuthorization:`${o}/${u.appAuthorization}`,appDeployments:`${o}/${u.appDeployments}`,appLogs:`${o}/${u.appLogs}`,appEnvironment:`${o}/${u.appEnvironment}`,appInsights:`${o}/${u.appInsights}`,appSettings:`${o}/${u.appSettings}`,appOverview:`${o}/${u.appOverview}`,uiPrimitivesDemo:`${r}/${u.uiPrimitivesDemo}`};function c(){return d.home}function p(e,a){let t=(0,i.tW)(d.appOverview,{appName:encodeURIComponent(e)});return"deployments"===a?`${t}#deployments`:t}function m(e){return(0,i.tW)(d.appDeployments,{appName:encodeURIComponent(e)})}function g(){return d.build}function f(){return d.create}function b(){return d.lakebox}function E(e){return(0,i.tW)(d.lakeboxMonitor,{sandboxId:encodeURIComponent(e)})}function I(e){var a=d.install;if(!e)return a;let t=new URLSearchParams;for(let[a,s]of Object.entries(e))n()(s)||t.append(a,s);return t.toString()?`${a}?${t}`:a}function T(){return d.appSpaces}function k(){return d.spaceCreate}function S(e){return(0,i.tW)(d.spaceDetail,{spaceName:encodeURIComponent(e)})}function h(e){return(0,i.tW)(d.spaceSettings,{spaceName:encodeURIComponent(e)})}},886110:(e,a,t)=>{t.d(a,{CG:()=>d,aD:()=>g,gy:()=>m,kC:()=>p});var s=t(141078),n=t(831358);if(13057==t.j)var i=t(726583);var r=t(543963);let o=(0,s.J1)`
  fragment RunsListTableColumns_RunNode on Run {
    status
    active
    message
    runId
    idInJob
    startTime
    durationMillis
    queueDuration @include(if: $includeQueueDuration)
    queueReason @include(if: $includeQueueReason)
    trigger
    triggerInfo {
      runJobTask {
        runId
        jobId
        taskKey
        parentRunId
      }
      table {
        details {
          tableName
          version
          commitTimestamp
        }
      }
    }
    clusterId
    sparkContextId
    clusterInfo {
      attributes {
        sparkVersion
        enableServerlessCompute
        kind
      }
    }
    overridingParameters {
      jarParams
      notebookParams {
        key
        value
      }
      pythonParams
      sparkSubmitParams
      pythonNamedParams {
        key
        value
      }
      sqlParams {
        key
        value
      }
      dbtCommands
      pipelineParams {
        fullRefresh
      }
    }
    jobParameters @include(if: $includeJobParameters) {
      name
      default
      value
    }
  }
`,l=(0,s.J1)`
  fragment LakeflowRunJobRunFragment on LakeflowLakeflowRunJobRun {
    jobParameters {
      name
      default
      value
    }
    overridingParameters {
      jarParams
      notebookParams {
        key
        value
      }
      pythonParams
      sparkSubmitParams
      pythonNamedParams {
        key
        value
      }
      sqlParams {
        key
        value
      }
      dbtCommands
      pipelineParams {
        fullRefresh
      }
    }
    durationWarningExceeded
    durationInfo {
      startTime
      endTime
      executionDuration
      setupDuration
      cleanupDuration
      runDuration
      queueDuration @include(if: $includeQueueDuration)
      waitDuration
      estimatedWaitingEndTime
        @includeSafex(name: "databricks.elasticspark.performance.enableWaitingState", defaultValue: false)
    }
    triggerType
    triggerInfo {
      runJobTask {
        runId
        jobId
        taskKey
        parentRunId
      }
      table {
        details {
          tableName
          version
          commitTimestamp
        }
      }
      sqlCondition @includeSafex(name: "sql_cond_triggers", defaultValue: false) {
        conditionEvaluationSatisfied
        conditionEvaluationSqlSessionId
      }
    }
  }
  ${r.WB}
`,u=(0,s.J1)`
  fragment LakeflowRunPipelineUpdateFragment on LakeflowLakeflowRunPipelineUpdate {
    cause
    details {
      pipelineTask {
        runId
        jobId
        taskKey
        parentRunId
      }
    }
    parameters @includeSafex(name: "pipeline_parameters", defaultValue: false) {
      key
      value
    }
  }
`,d=(0,s.J1)`
  fragment RunsListTableColumns_JobsRunNode on JobsRun {
    jobId
    runId
    numberInJob
    runType
    creatorUserName
    creatorUser {
      ...RichUserData
    }
    creatorPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
      ...AclPrincipalData
    }
    runName
    originalAttemptRunId
    durationInfo {
      startTime
      endTime
      executionDuration
      setupDuration
      cleanupDuration
      runDuration
      queueDuration @include(if: $includeQueueDuration)
      waitDuration
      estimatedWaitingEndTime
        @includeSafex(name: "databricks.elasticspark.performance.enableWaitingState", defaultValue: false)
    }
    state {
      resultState
      lifeCycleState
      userCancelledOrTimedout
      stateMessage
      durationWarningExceeded
      queueReason @include(if: $includeQueueReason)
    }
    status @include(if: $includeRunStatus) {
      ...RunStatusFragment
    }
    trigger
    triggerInfo {
      runJobTask {
        runId
        jobId
        taskKey
        parentRunId
      }
      table {
        details {
          tableName
          version
          commitTimestamp
        }
      }
      sqlCondition @includeSafex(name: "sql_cond_triggers", defaultValue: false) {
        conditionEvaluationSatisfied
        conditionEvaluationSqlSessionId
      }
    }
    overridingParameters {
      jarParams
      notebookParams {
        key
        value
      }
      pythonParams
      sparkSubmitParams
      pythonNamedParams {
        key
        value
      }
      sqlParams {
        key
        value
      }
      dbtCommands
      pipelineParams {
        fullRefresh
      }
    }
    clusterInstance {
      clusterId
      sparkContextId
      clusterInfo {
        attributes {
          sparkVersion
          enableServerlessCompute
          kind
        }
      }
    }
    tasks @include(if: $expandTasks) {
      runId
    }
    jobParameters @include(if: $includeJobParameters) {
      name
      default
      value
    }
  }
  ${r.WB}
  ${n.j}
  ${n.E}
`;(0,s.J1)`
  fragment RunsListTable_RunNode on Run {
    ...RunsListTableColumns_RunNode
  }
  ${o}
`;let c=(0,s.J1)`
  fragment RunsListTable_JobsRunNode on JobsRun {
    ...RunsListTableColumns_JobsRunNode
  }
  ${d}
`,p=(0,s.J1)`
  query ListCombinedRunsTableQuery(
    $jobId: ID!
    $first: Int!
    $after: String
    $startTimeFrom: Long
    $startTimeTo: Long
    $expandTriggerInfo: Boolean
    $expandTasks: Boolean = false
    $includeQueueDuration: Boolean = false
    $includeQueueReason: Boolean = false
    $includeJobParameters: Boolean = false
    $includeRunStatus: Boolean = false
  ) @component(name: "Workflows.Observability.Lists") {
    activeRuns: jobsListRunsPaginated(
      jobId: $jobId
      first: $first
      after: $after
      activeOnly: true
      expandTriggerInfo: $expandTriggerInfo
      expandTasks: $expandTasks
      startTimeFrom: $startTimeFrom
      startTimeTo: $startTimeTo
    ) {
      jobsRuns {
        edges {
          node {
            ...RunsListTable_JobsRunNode
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
    completedRuns: jobsListRunsPaginated(
      jobId: $jobId
      first: $first
      after: $after
      completedOnly: true
      expandTriggerInfo: $expandTriggerInfo
      expandTasks: $expandTasks
      startTimeFrom: $startTimeFrom
      startTimeTo: $startTimeTo
    ) {
      jobsRuns {
        edges {
          node {
            ...RunsListTable_JobsRunNode
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  }
  ${c}
`;function m({jobId:e,first:a,after:t,startTimeFrom:s,startTimeTo:n,expandTasks:r}){return{query:p,variables:{jobId:e,first:a,after:t,expandTriggerInfo:!0,expandTasks:r,startTimeFrom:s,startTimeTo:n,includeJobParameters:(0,i.ue)(),includeRunStatus:!0,includeQueueDuration:!0,includeQueueReason:!0}}}(0,s.J1)`
  query ListLakeflowRunsQuery($pageSize: Int!) @component(name: "Workflows.Observability.Lists") {
    lakeflowListLakeflowRuns(input: { pageSize: $pageSize }) {
      lakeflowRuns {
        __typename
        id
        runAsUserId
        runAsUser {
          id
        }
        runAsPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
          id
        }
      }
      apiError {
        code
        message
      }
    }
  }
`;let g=(0,s.J1)`
  query RecentRunsQueryV2Autogen(
    $limit: Int
    $pageToken: String
    $sortBy: LakeflowListLakeflowRunsRequestSortBy
    $sortOrder: LakeflowListLakeflowRunsRequestSortOrder
    $filtersAssetIds: [String!]
    $filtersRunAsNames: [String!]
    $filtersRunId: String
    $filtersRunStatus: LakeflowListLakeflowRunsRequestFiltersRunStatusFilter
    $filtersRunTypes: [LakeflowListLakeflowRunsRequestFiltersRunTypeFilter!]
    $filtersUserVisibleTerminationLabel: String
    $filtersFrom: WellKnownTimestamp
    $filtersTo: WellKnownTimestamp
    $includeQueueDuration: Boolean = false
    $includeQueueReason: Boolean = false
  ) @component(name: "Workflows.Observability.Lists") {
    lakeflowListLakeflowRuns(
      input: {
        pageSize: $limit
        pageToken: $pageToken
        sortBy: $sortBy
        sortOrder: $sortOrder
        filters: {
          assetIds: $filtersAssetIds
          runAsNames: $filtersRunAsNames
          runId: $filtersRunId
          runStatus: $filtersRunStatus
          runTypes: $filtersRunTypes
          userVisibleTerminationLabel: $filtersUserVisibleTerminationLabel
          orderingTimeFromTime: $filtersFrom
          orderingTimeUntilTime: $filtersTo
        }
        includeFields: { includeTriggerInfo: true, includePermissionLevel: true }
      }
    ) {
      apiError {
        code
        message
      }
      nextPageToken
      prevPageToken
      lakeflowRuns {
        id
        name
        assetName
        runAsUserId
        assetType
        assetPermissionLevel
        assetId
        startTime
        endTime
        assetPermissionLevel
        status {
          ...RunStatusFragment
        }
        runAsUser {
          ...RichUserData
        }
        runAsPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
          ...AclPrincipalData
        }
        jobRun {
          ...LakeflowRunJobRunFragment
        }
        pipelineUpdate {
          ...LakeflowRunPipelineUpdateFragment
        }
      }
    }
  }
  ${l}
  ${u}
  ${r.WB}
  ${n.j}
  ${n.E}
`},905468:(e,a,t)=>{if(t.d(a,{g:()=>i}),13057==t.j)var s=t(610435);if(t(692738),13057==t.j)var n=t(81683);function i(e){return(0,s.Y)(n.g,{productName:e.productName,logo:e.logo,width:"264px",azure:e.azure})}},984568:(e,a,t)=>{t.d(a,{Ck:()=>W,Go:()=>es,I2:()=>eo,IB:()=>R,KW:()=>en,Ks:()=>Q,Mc:()=>ea,Oj:()=>q,Pt:()=>H,S3:()=>et,UL:()=>p,VM:()=>I,Vw:()=>j,WQ:()=>m,XP:()=>ee,YC:()=>Z,YR:()=>el,Yf:()=>er,_M:()=>f,ax:()=>G,f5:()=>S,gv:()=>x,iD:()=>v,lu:()=>P,pM:()=>X,q3:()=>V,tc:()=>_,uQ:()=>U,uv:()=>T,zQ:()=>z});var s=t(141078),n=t(202855),i=t(831358),r=t(287393),o=t(659789),l=t(367295),u=t(239362),d=t(543963),c=t(691515);let p=(0,s.J1)`
  fragment ClusterAttributes on ClusterAttributes {
    name
    kind
    nodeTypeId
    driverNodeTypeId
    sparkVersion
    workloadType {
      clients {
        jobs
        notebooks
      }
    }
    sparkConf {
      key
      value
    }
    sparkEnvVars {
      key
      value
    }
    awsAttributes {
      firstOnDemand
      availability
      zoneId
      instanceProfileArn
      spotBidPricePercent
      ebsVolumesSpec {
        ebsVolumeType
        ebsVolumeSize
        ebsVolumeCount
        ebsVolumeIops
        ebsVolumeThroughput
      }
    }
    azureAttributes {
      logAnalyticsInfo {
        logAnalyticsWorkspaceId
        logAnalyticsPrimaryKey
      }
      firstOnDemand
      availability
      spotBidMaxPrice
    }
    gcpAttributes {
      usePreemptibleExecutors
      localSsdCount
      googleServiceAccount
      availability
      zoneId
      confidentialComputeType
        @includeSafex(name: "databricks.fe.clustercontrols.enableGcpConfidentialCompute", defaultValue: false)
    }
    sshPublicKeys
    customTags {
      key
      value
    }
    clusterLogConf {
      dbfs {
        destination
      }
      s3 {
        destination
        region
        endpoint
        enableEncryption
        encryptionType
        kmsKey
        cannedAcl
      }
      volumes {
        destination
      }
    }
    autoterminationMinutes
    noDriverDaemon
    enableElasticDisk
    diskSpec {
      diskType {
        ebsVolumeType
        azureDiskVolumeType
      }
      diskCount
      diskSize
    }
    source
    initScripts {
      dbfs {
        destination
      }
      s3 {
        destination
        region
        endpoint
        enableEncryption
        encryptionType
        kmsKey
        cannedAcl
      }
      gcs {
        destination
      }
      file {
        destination
      }
      abfss {
        destination
      }
      workspace {
        destination
      }
      volumes {
        destination
      }
    }
    isServerless
    hasTableAcls
    dockerImage {
      url
      basicAuth {
        username
        password
      }
    }
    instancePoolId
    driverInstancePoolId
    instanceSource {
      nodeTypeId
      instancePoolId
    }
    driverInstanceSource {
      nodeTypeId
      instancePoolId
    }
    blueprint {
      id
      name
      policies
      groupId
    }
    singleUser {
      name
    }
    legacyPolicy {
      id
      name
      definition
    }
    enableLocalDiskEncryption
    dataSecurityMode
    accessMode
    runtimeEngine
    enableServerlessCompute
    virtualClusterSize
    useMlRuntime
    isSingleNode
    assignedPrincipal
    budgetPolicyId
    budgetPolicyResolutionResult
    budgetPolicyTags {
      key
      value
    }
    releaseVersion @includeSafex(name: "databricks.fe.clustercontrols.showReleaseVersion", defaultValue: false)
    workerNodeTypeFlexibility {
      alternateNodeTypeIds
      awsContextId
    }
    driverNodeTypeFlexibility {
      alternateNodeTypeIds
      awsContextId
    }
  }
`,m=(0,s.J1)`
  fragment JobPeriodicTrigger on TriggerSettings {
    periodic @include(if: $includePeriodicTrigger) {
      interval
      unit
    }
  }
`,g=(0,s.J1)`
  fragment ClusterClusterAttributes on ClusterClusterAttributes {
    clusterName
    kind
    nodeTypeId
    driverNodeTypeId
    sparkVersion
    workloadType {
      clients {
        jobs
        notebooks
      }
    }
    sparkConf {
      key
      value
    }
    sparkEnvVars {
      key
      value
    }
    awsAttributes {
      firstOnDemand
      availability
      zoneId
      instanceProfileArn
      spotBidPricePercent
      ebsVolumesSpec {
        ebsVolumeType
        ebsVolumeSize
        ebsVolumeCount
        ebsVolumeIops
        ebsVolumeThroughput
      }
    }
    azureAttributes {
      logAnalyticsInfo {
        logAnalyticsWorkspaceId
        logAnalyticsPrimaryKey
      }
      firstOnDemand
      availability
      spotBidMaxPrice
    }
    gcpAttributes {
      usePreemptibleExecutors
      localSsdCount
      googleServiceAccount
      availability
      zoneId
      confidentialComputeType
        @includeSafex(name: "databricks.fe.clustercontrols.enableGcpConfidentialCompute", defaultValue: false)
    }
    sshPublicKeys
    customTags {
      key
      value
    }
    clusterLogConf {
      dbfs {
        destination
      }
      s3 {
        destination
        region
        endpoint
        enableEncryption
        encryptionType
        kmsKey
        cannedAcl
      }
      volumes {
        destination
      }
    }
    autoterminationMinutes
    noDriverDaemon
    enableElasticDisk
    diskSpec {
      diskType {
        ebsVolumeType
        azureDiskVolumeType
      }
      diskCount
      diskSize
    }
    clusterSource
    initScripts {
      dbfs {
        destination
      }
      s3 {
        destination
        region
        endpoint
        enableEncryption
        encryptionType
        kmsKey
        cannedAcl
      }
      gcs {
        destination
      }
      file {
        destination
      }
      abfss {
        destination
      }
      workspace {
        destination
      }
      volumes {
        destination
      }
    }
    dockerImage {
      url
      basicAuth {
        username
        password
      }
    }
    instancePoolId
    driverInstancePoolId
    instanceSource {
      nodeTypeId
      instancePoolId
    }
    driverInstanceSource {
      nodeTypeId
      instancePoolId
    }
    blueprintId
    singleUserName
    enableLocalDiskEncryption
    dataSecurityMode
    accessMode
    runtimeEngine
    enableServerlessCompute
    virtualClusterSize
    useMlRuntime
    isSingleNode
    assignedPrincipal

    workerNodeTypeFlexibility {
      alternateNodeTypeIds
      awsContextId
    }
    driverNodeTypeFlexibility {
      alternateNodeTypeIds
      awsContextId
    }
  }
`,f=(0,s.J1)`
  fragment ClusterSize on ClusterSize {
    autoscale {
      minWorkers
      maxWorkers
    }
    numWorkers
  }
`,b=(0,s.J1)`
  fragment ClusterClusterSize on ClusterClusterSize {
    autoscale {
      minWorkers
      maxWorkers
    }
    numWorkers
  }
`,E=(0,s.J1)`
  fragment NewClusterDetails on NewCluster {
    attrs {
      ...ClusterAttributes
    }
    size {
      ...ClusterSize
    }
  }
  ${p}
  ${f}
`,I=(0,s.J1)`
  fragment ClusterDetails on ClusterSpec {
    ... on NewCluster {
      ...NewClusterDetails
    }
    ... on ExistingCluster {
      id
      clusterInfo {
        attributes {
          name
          kind
          nodeTypeId
          driverNodeTypeId
          sparkVersion
          enableServerlessCompute
        }
        size {
          ...ClusterSize
        }
        state
        stateMessage
      }
    }
    ... on JobClusterKey {
      key
    }
  }
  ${E}
`,T=(0,s.J1)`
  fragment LightweightNewClusterDetails on NewCluster {
    attrs {
      instancePoolId
      driverInstancePoolId
      nodeTypeId
      driverNodeTypeId
      sparkVersion
      runtimeEngine
      enableServerlessCompute
      virtualClusterSize
      kind
      useMlRuntime
    }
    size {
      autoscale {
        minWorkers
        maxWorkers
      }
      numWorkers
    }
  }
`,k=(0,s.J1)`
  fragment ManagedLibrariesLibrary on ManagedLibrariesLibrary {
    jar
    egg
    pypi {
      package
      repo
    }
    maven {
      coordinates
      repo
      exclusions
    }
    cran {
      package
      repo
    }
    requirements
    whl
  }
`,S=(0,s.J1)`
  fragment JobsNewClusterDetails on JobsClusterSpecNewCluster {
    attrs {
      ...ClusterClusterAttributes
    }
    size {
      ...ClusterClusterSize
    }
  }
  ${g}
  ${b}
`,h=(0,s.J1)`
  fragment JobsClusterDetails on JobsClusterSpec {
    existingClusterId
    clusterInfo {
      attributes {
        name
        nodeTypeId
      }
      state
    }
    libraries {
      ...ManagedLibrariesLibrary
    }
    newCluster {
      ...JobsNewClusterDetails
    }
    jobClusterKey
  }
  ${k}
  ${S}
`,R=(0,s.J1)`
  fragment TaskAction on JobTask {
    ... on JobsJobTask {
      ...JobsAllTasksFragment
    }
    ... on NotebookTask {
      notebookPath
      source
      baseParameters {
        key
        value
      }
      warehouseId
    }
    ... on SparkJarTask {
      jarUri
      mainClassName
      parameters
      runAsRepl
    }
    ... on SparkPythonTask {
      pythonFile
      parameters
      source
    }
    ... on SparkSubmitTask {
      parameters
    }
    ... on ShellCommandTask {
      command
      envVars {
        key
        value
      }
    }
    ... on PipelineTask {
      pipelineId
      dltParameters: parameters {
        fullRefresh
      }
      pipelineTaskParameters @includeSafex(name: "pipeline_parameters", defaultValue: false) {
        key
        value
      }
    }
    ... on RunJobTask {
      jobId
      batchLoadJob @include(if: $includeJobInRunJobTask) {
        settings {
          name
        }
      }
      runJobParameters: parameters {
        ...RunParameters
      }
      jobParameters @include(if: $includeJobParameters) {
        key
        value
      }
    }
    ... on PythonWheelTask {
      entryPoint
      packageName
      parameters
      namedParameters {
        key
        value
      }
    }
    ... on DbtTask {
      projectDirectory
      catalog
      commands
      schema
      warehouseId
      profilesDirectory
      source @include(if: $includeSourceInDbtAndSqlFile)
    }
    ... on SqlTask {
      alert {
        alertId
        pauseSubscriptions @include(if: $includeSubscriptions)
        subscriptions @include(if: $includeSubscriptions) {
          userName
          destinationId
        }
      }
      dashboard {
        dashboardId
        pauseSubscriptions @include(if: $includeSubscriptions)
        subscriptions @include(if: $includeSubscriptions) {
          userName
          destinationId
        }
        customSubject @include(if: $includeSubscriptions)
      }
      query {
        queryId
      }
      file {
        path
        source @include(if: $includeSourceInDbtAndSqlFile)
      }
      params: parameters {
        key
        value
      }
      warehouseId
    }
    ... on ConditionTask {
      op
      left
      right
    }
  }
  ${n.m}
  ${o.M}
`,P=(0,s.J1)`
  fragment TaskDependency on TaskDependency {
    taskKey
    outcome @include(if: $includeTaskDependencyOutcome)
  }
`,A=(0,s.J1)`
  fragment RetryPolicy on JobRetryPolicy {
    maxRetries
    minRetryIntervalMillis
    retryOnTimeout
    disableAutoOptimization
  }
`,y=(0,s.J1)`
  fragment EmailNotifications on JobEmailNotifications {
    onStart
    onFailure
    onSuccess
    onDurationWarningThresholdExceeded
    onStreamingBacklogExceeded @include(if: $includeOnStreamingBacklogExceeded)
    alertOnLastAttempt
    noAlertForSkippedRuns
    noAlertForCanceledRuns
  }
`,D=(0,s.J1)`
  fragment LibraryDetails on Library {
    ... on Jar {
      jar
    }
    ... on Egg {
      egg
    }
    ... on PythonPyPi {
      pypi {
        package
        repo
      }
    }
    ... on Maven {
      maven {
        coordinates
        repo
        exclusions
      }
    }
    ... on RCran {
      cran {
        package
        repo
      }
    }
    ... on Requirements {
      requirements
    }
    ... on Wheel {
      whl
    }
  }
`,_=(0,s.J1)`
  fragment JobClusterDetails on JobCluster {
    jobClusterKey
    newCluster {
      attrs {
        ...ClusterAttributes
      }
      size {
        ...ClusterSize
      }
    }
  }
  ${p}
  ${f}
`,N=(0,s.J1)`
  fragment JobTagDetails on JobTag {
    key
    value
  }
`,v=(0,s.J1)`
  fragment JobsJobClusterDetails on JobsJobCluster {
    jobClusterKey
    newCluster {
      ...JobsNewClusterDetails
    }
  }
  ${S}
`,L=(0,s.J1)`
  fragment GitReference on GitReference {
    ... on GitTag {
      gitTag
    }
    ... on GitCommit {
      gitCommit
    }
    ... on GitBranch {
      gitBranch
    }
  }
`,C=(0,s.J1)`
  fragment GitSourceDetails on GitSource {
    gitUrl
    gitProvider
    gitBranch
    gitTag
    gitCommit
    sparseCheckout @includeSafex(name: "databricks.elasticspark.sparseCheckout.enabled", defaultValue: false) {
      patterns
    }
    gitReference {
      ...GitReference
    }
  }
  ${L}
`,M=(0,s.J1)`
  fragment JobWebhookDetails on JobsWebhookNotifications {
    onSuccess {
      id
    }
    onFailure {
      id
    }
    onStart {
      id
    }
    onDurationWarningThresholdExceeded {
      id
    }
    onStreamingBacklogExceeded @include(if: $includeOnStreamingBacklogExceeded) {
      id
    }
  }
`,O=(0,s.J1)`
  fragment NotificationSettingsDetails on JobsNotificationSettings {
    alertOnLastAttempt
    noAlertForCanceledRuns
    noAlertForSkippedRuns
  }
`,$=(0,s.J1)`
  fragment TaskDetails on TaskSettings {
    taskKey
    description
    dependsOn {
      ...TaskDependency
    }
    runIf
    timeoutSeconds
    durationWarningSeconds
    environmentKey
    compute {
      hardwareAccelerator
    }
    health {
      rules {
        metric
        op
        value
      }
    }
    retryPolicy {
      ...RetryPolicy
    }
    emailNotifications {
      ...EmailNotifications
    }
    notificationSettings {
      ...NotificationSettingsDetails
    }
    webhookNotifications
      @includeSafex(name: "databricks.elasticspark.enableJobWebhooksRollout.goc", defaultValue: false) {
      ...JobWebhookDetails
    }
    clusterSpec {
      ...ClusterDetails
    }
    libraries {
      ...LibraryDetails
    }
    task {
      ...TaskAction
    }
    disabled @includeSafex(name: "databricks.fe.jobs.disabled_tasks.schema.enabled", defaultValue: false)
  }

  ${I}
  ${A}
  ${y}
  ${R}
  ${D}
  ${P}
  ${O}
  ${M}
`,w=(0,s.J1)`
  fragment ForEachManualBridge on JobTask {
    ... on JobsJobTask {
      forEachTask {
        manualGraphQlTaskSettingsBridge {
          ...TaskDetails
        }
      }
    }
  }

  ${$}
`,J=(0,s.J1)`
  fragment JobEnvironment on JobsJobEnvironment {
    environmentKey
    spec {
      client
      environmentVersion
      dependencies
      jarDependencies
      javaDependencies
      baseEnvironment
    }
  }
`,x=(0,s.J1)`
  fragment JobConfiguration on JobSettings {
    name
    ...JobDescription
    parentPath @includeSafex(name: "databricks.fe.jaws.enableWorkspaceObjectPathInfo", defaultValue: false)
    budgetPolicyId
      @includeSafex(name: "databricks.elasticspark.budgetpolicies.enableBudgetPoliciesInJobs", defaultValue: false)
    usagePolicyId
    schedule {
      timezoneId
      quartzCronExpression
      pauseStatus
      sqlCondition @includeSafex(name: "sql_cond_triggers", defaultValue: false) {
        sqlQueryId
        warehouseId
      }
    }
    trigger {
      fileArrival {
        url
        minTimeBetweenTriggersSeconds
        waitAfterLastChangeSeconds
      }
      tableUpdate {
        tableNames
        condition
        minTimeBetweenTriggersSeconds
        waitAfterLastChangeSeconds
      }
      model @includeSafex(name: "databricks.fe.jaws.enableModelTriggerUI", defaultValue: false) {
        securableName
        aliases
        condition
        minTimeBetweenTriggersSeconds
        waitAfterLastChangeSeconds
      }
      sqlCondition @includeSafex(name: "sql_cond_triggers", defaultValue: false) {
        sqlQueryId
        warehouseId
      }
      ...JobPeriodicTrigger
      pauseStatus
    }
    continuous {
      pauseStatus
      taskRetryMode @includeSafex(name: "databricks.fe.jaws.enableContinuousTriggerAdvanced", defaultValue: false)
    }
    queue {
      enabled
      maxQueueTime
    }
    emailNotifications {
      ...EmailNotifications
    }
    notificationSettings {
      ...NotificationSettingsDetails
    }
    maxConcurrentRuns
    timeoutSeconds
    durationWarningSeconds
    health {
      rules {
        metric
        op
        value
      }
    }
    retryPolicy {
      ...RetryPolicy
    }
    clusterSpec {
      ...ClusterDetails
    }
    libraries {
      ...LibraryDetails
    }
    task {
      ...TaskAction
      ...ForEachManualBridge
    }
    tasks {
      ...TaskDetails
      task {
        ...ForEachManualBridge
      }
    }
    jobClusters {
      ...JobClusterDetails
    }
    gitSource {
      ...GitSourceDetails
    }
    tags {
      ...JobTagDetails
    }
    webhookNotifications {
      ...JobWebhookDetails
    }
    parameters @include(if: $includeJobParameters) {
      name
      default
    }
    health {
      rules {
        metric
        op
        value
      }
    }
    editMode
    deployment {
      kind
      metadataFilePath
    }
    environments {
      ...JobEnvironment
    }
    performanceTarget
  }

  ${$}
  ${m}
  ${_}
  ${C}
  ${N}
  ${M}
  ${r.aZ}
  ${w}
  ${J}
`,B=(0,s.J1)`
  fragment RunJobSettings on JobSettings {
    name
    tasks {
      taskKey
      task {
        ...TaskAction
        ... on JobsJobTask {
          forEachTask {
            manualGraphQlTaskSettingsBridge {
              taskKey
              task {
                ...TaskAction
              }
            }
          }
        }
      }
    }
    parameters @include(if: $includeJobParameters) {
      name
      default
    }
  }

  ${R}
`,G=(0,s.J1)`
  fragment JobTriggerState on Job {
    triggerState @include(if: $includeTriggerState) {
      periodic {
        nextRunTime
      }
    }
  }
`,F=(0,s.J1)`
  fragment JobConfigIdentityInfo on Job {
    id
    creatorUser {
      ...RichUserData
    }
    creatorPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
      ...AclPrincipalData
    }
    runAsUser {
      ...RichUserData
    }
    runAsPrincipal @includeSafex(name: "databricks.fe.lakeflow.usePrincipals", defaultValue: false) {
      ...AclPrincipalData
    }
    grants {
      permission
      aclPath
      user {
        ...RichUserData
      }
      aclPrincipal {
        ...AclPrincipalData
      }
    }
  }
  ${i.j}
  ${i.E}
`,W=(0,s.J1)`
  query JobConfig(
    $jobId: ID!
    $useApi21: Boolean
    $includeSubscriptions: Boolean!
    $includeJobInRunJobTask: Boolean = false
    $includeJobParameters: Boolean = false
    $includeTaskDependencyOutcome: Boolean = false
    $includeTriggerState: Boolean = false
    $includePeriodicTrigger: Boolean = false
    $includeOnStreamingBacklogExceeded: Boolean = false
    $includeSourceInDbtAndSqlFile: Boolean = false
  ) @component(name: "Workflows.Orchestration.Other") {
    job(id: $jobId, useApi21: $useApi21, includeAcls: true, includeTriggerState: $includeTriggerState) {
      id
      untouched
      lastUpdatedTime
      managedBy @includeSafex(name: "databricks.fe.jaws.enableManagedByField", defaultValue: false)
      creator {
        id
        name
      }
      settings {
        ...JobConfiguration
      }
      links @includeSafex(name: "databricks.elasticspark.enableLinksUI", defaultValue: false) {
        model {
          catalog
          schema
          name
        }
      }
      effectiveBudgetPolicyId
        @includeSafex(name: "databricks.elasticspark.budgetpolicies.enableBudgetPoliciesInJobs", defaultValue: false)
      effectiveUsagePolicyId
        @includeSafex(name: "databricks.elasticspark.budgetpolicies.enableUsagePoliciesInJobs", defaultValue: false)
      permission
      jobType
      userActivityInfo @includeSafex(name: "databricks.fe.search.enableUserActivity", defaultValue: false) {
        assetType
        assetId
        isFavorite
      }
      ...JobConfigRunAs
      ...JobConfigIdentityInfo
      ...JobTriggerState
    }
  }

  ${x}
  ${r.fg}
  ${G}
  ${F}
`;function U(e){return{query:W,variables:{jobId:e,useApi21:!0,...(0,l.L)()}}}let V=(0,s.J1)`
  query RunJobConfig(
    $jobId: ID!
    $includeSubscriptions: Boolean = false
    $includeJobInRunJobTask: Boolean = false
    $includeJobParameters: Boolean = false
    $includeSourceInDbtAndSqlFile: Boolean = false
  ) @component(name: "Workflows.Orchestration.Other") {
    job(id: $jobId, useApi21: true) {
      id
      settings {
        ...RunJobSettings
      }
    }
  }

  ${B}
`,j=(0,s.J1)`
  query RunJobAndTriggerConfig(
    $jobId: ID!
    $includeSubscriptions: Boolean = false
    $includeJobInRunJobTask: Boolean = false
    $includeJobParameters: Boolean = false
    $includeSourceInDbtAndSqlFile: Boolean = false
    $includePeriodicTrigger: Boolean = false
  ) @component(name: "Workflows.Orchestration.Other") {
    job(id: $jobId, useApi21: true) {
      id
      settings {
        ...RunJobSettings
        trigger {
          fileArrival {
            url
            minTimeBetweenTriggersSeconds
            waitAfterLastChangeSeconds
          }
          tableUpdate {
            tableNames
            condition
            minTimeBetweenTriggersSeconds
            waitAfterLastChangeSeconds
          }
          model @includeSafex(name: "databricks.fe.jaws.enableModelTriggerUI", defaultValue: false) {
            securableName
            aliases
            condition
            minTimeBetweenTriggersSeconds
            waitAfterLastChangeSeconds
          }
          sqlCondition @includeSafex(name: "sql_cond_triggers", defaultValue: false) {
            sqlQueryId
            warehouseId
          }
          ...JobPeriodicTrigger
          pauseStatus
        }
      }
    }
  }

  ${B}
  ${m}
`,q=(0,s.J1)`
  query JobParameters($jobId: ID!, $includeJobParameters: Boolean = false)
  @component(name: "Workflows.Orchestration.Other") {
    job(id: $jobId, useApi21: true) {
      id
      settings {
        parameters @include(if: $includeJobParameters) {
          name
          default
        }
      }
    }
  }
`,Y=(0,s.J1)`
  fragment RunResolvedParameters on JobsResolvedValues {
    conditionTask {
      left
      right
    }
    dbtTask {
      commands
    }
    notebookTask {
      baseParameters {
        key
        value
      }
    }
    pythonWheelTask {
      namedParameters {
        key
        value
      }
      parameters
    }
    runJobTask {
      jobParameters {
        key
        value
      }
    }
    sparkJarTask {
      parameters
    }
    sparkPythonTask {
      parameters
    }
    sparkSubmitTask {
      parameters
    }
    sqlTask {
      parameters {
        key
        value
      }
    }
    forEachTask {
      inputs
    }
    cleanRoomsJarTask {
      parameters
    }
    pipelineTask @includeSafex(name: "pipeline_parameters", defaultValue: false) {
      pipelineTaskParameters {
        key
        value
      }
    }
  }
`,K=(0,s.J1)`
  fragment ForEachTaskSettings on JobsJobTask {
    forEachTask {
      task {
        clusterSpec {
          ...JobsClusterDetails
        }
        dependsOn {
          taskKey
          outcome @include(if: $includeTaskDependencyOutcome)
        }
        runIf
        description
        taskKey
        timeoutSeconds
        durationWarningSeconds
        environmentKey
        health {
          rules {
            metric
            op
            value
          }
        }
        task {
          ...JobsAllTasksFragment
        }
      }
    }
  }

  ${n.m}
  ${h}
`,z=(0,s.J1)`
  query JobsGetJobIdFromRun($input: JobsGetRunInput!) @component(name: "Workflows.Authoring.UI") {
    jobsGetRun: jobsGetRunWithApiVersion(input: $input, useApi21: true) {
      run {
        jobId
      }
    }
  }
`,Q=(0,s.J1)`
  query JobsGetRunBreadcrumb($jobId: ID!) @component(name: "Workflows.Observability.Graphs") {
    job(id: $jobId, useApi21: true) {
      settings {
        name
      }
    }
  }
`,H=(0,s.J1)`
  query JobSettingsMaxConcurrentRuns($jobId: ID!) @component(name: "Workflows.Observability.Graphs") {
    job(id: $jobId, useApi21: true) {
      settings {
        maxConcurrentRuns
      }
    }
  }
`,Z=(0,s.J1)`
  query JobsGetRun(
    $input: JobsGetRunInput!
    $includeSubscriptions: Boolean!
    $useApi21: Boolean!
    $includeJobInRunJobTask: Boolean = false
    $includeQueueDuration: Boolean = false
    $includeQueueReason: Boolean = false
    $includeJobParameters: Boolean = false
    $includeResolvedValues: Boolean = false
    $includeTaskDependencyOutcome: Boolean = false
    $includeRunStatus: Boolean = false
    $includeDependencyInfo: Boolean = false
    $includeSourceInDbtAndSqlFile: Boolean = false
  ) @component(name: "Workflows.Authoring.UI") {
    jobsGetRun: jobsGetRunWithApiVersion(input: $input, useApi21: $useApi21) {
      effectivePermissionLevel
        @includeSafex(name: "databricks.fe.jaws.enablePermissionLevelInGetRun", defaultValue: false)
      run {
        ...JobRunDetailsSectionFragment
        ...TaskRunDetailsSectionFragment
        originalAttemptRunId
        runPageUrl
        runType
        description
        format
        parentRunId
        taskKey
        attemptNumber
        dependencyInfo @include(if: $includeDependencyInfo) {
          truncated
          dependencies {
            dependencyType
            language
            name
            version
          }
        }
        task {
          ...JobsAllTasksFragment
          ...ForEachTaskSettings
          ...ForEachTaskStats
        }
        tasks {
          attemptNumber
          runId
          runPageUrl
          state {
            ...RunStateFragment
          }
          status @include(if: $includeRunStatus) {
            ...RunStatusFragment
          }
          durationInfo {
            cleanupDuration
            endTime
            executionDuration
            setupDuration
            startTime
            runDuration
            queueDuration @include(if: $includeQueueDuration)
            waitDuration
            estimatedWaitingEndTime
              @includeSafex(name: "databricks.elasticspark.performance.enableWaitingState", defaultValue: false)
          }
          runTimings @includeSafex(name: "databricks.fe.jaws.enableRunTimings", defaultValue: false) {
            executionTimestamps {
              queuedMs
              waitingForResourcesOrPythonStartingMs
              libraryInstallationMs
              runningMs
            }
            repairsAccumulatedDurations {
              queuedAccumulatedMs
              waitingForResourcesOrPythonStartingAccumulatedMs
              runningAccumulatedMs
            }
          }
          clusterInstance {
            clusterId
            sparkContextId
            clusterInfo {
              attributes {
                sparkVersion
                kind
                enableServerlessCompute
              }
            }
          }
          settings {
            clusterSpec {
              ...JobsClusterDetails
            }
            dependsOn {
              taskKey
              outcome @include(if: $includeTaskDependencyOutcome)
            }
            runIf
            description
            taskKey
            timeoutSeconds
            durationWarningSeconds
            environmentKey
            health {
              rules {
                metric
                op
                value
              }
            }
            task {
              ...JobsAllTasksFragment
              ...ForEachTaskSettings
              ...ForEachTaskStats
            }
          }
          gitSource {
            gitUrl
            gitProvider
            gitBranch
            gitTag
            gitCommit
            gitSnapshot {
              usedCommit
            }
          }
          taskValueCount
          resolvedValues @include(if: $includeResolvedValues) {
            ...RunResolvedParameters
          }
          effectivePerformanceTarget
          effectiveCompute {
            hardwareAccelerator
            memory
          }
        }
        triggerInfo {
          ...JobRunTriggerInfo
        }
        clusterSpec {
          ...JobsClusterDetails
        }
        clusterInstance {
          clusterId
          sparkContextId
        }
        overridingParameters {
          notebookParams {
            key
            value
          }
          jarParams
          pythonParams
          sparkSubmitParams
          pythonNamedParams {
            key
            value
          }
          sqlParams {
            key
            value
          }
          dbtCommands
          pipelineParams {
            fullRefresh
          }
        }
        jobClusters {
          ...JobsJobClusterDetails
        }
        repairHistory {
          id
          state {
            lifeCycleState
            resultState
            stateMessage
            userCancelledOrTimedout
            queueReason @include(if: $includeQueueReason)
          }
          type
          startTime
          endTime
          tasks
          taskRunIds
          effectivePerformanceTarget
        }
        gitSource {
          gitUrl
          gitProvider
          gitBranch
          gitTag
          gitCommit
          gitSnapshot {
            usedCommit
          }
        }
        taskValueCount
        jobParameters @include(if: $includeJobParameters) {
          ...RunJobParameter
        }
        environments {
          ...JobEnvironment
        }
        effectivePerformanceTarget
      }
    }
  }

  ${n.m}
  ${h}
  ${v}
  ${u.Wg}
  ${u.yu}
  ${Y}
  ${u.qk}
  ${d.WB}
  ${K}
  ${c.d}
  ${d.DP}
  ${J}
  ${u.Lw}
`,X=(0,s.J1)`
  query ListIterationRetries($input: JobsListIterationsInput!, $includeQueueReason: Boolean = false)
  @component(name: "Workflows.Orchestration.Other") {
    jobsListIterations(input: $input) {
      iterations {
        originalAttemptRunId
        tasks {
          runId
          attemptNumber
          runPageUrl
          state {
            ...RunStateFragment
          }
          status {
            ...RunStatusFragment
          }
        }
      }

      apiError {
        message
      }
    }
  }

  ${d.WB}
  ${d.DP}
`,ee=(0,s.J1)`
  query JobsGetPermissionLevel($input: JobsGetPermissionLevelInput!) @component(name: "Workflows.Orchestration.Other") {
    jobsGetPermissionLevel(input: $input) {
      perm
    }
  }
`,ea=(0,s.J1)`
  mutation TestTrigger($input: JobsTestTriggerInput!) @component(name: "Workflows.Triggers.File") {
    jobsTestTrigger(input: $input) {
      apiError {
        message
      }
      fileArrival {
        usingFileEvents
        locationName
      }
      table {
        tableStatus {
          tableName
          usingFileEvents
          locationName
          usingDeltaSharing
        }
      }
      sqlCondition {
        __typename
      }
    }
  }
`,et=(0,s.J1)`
  query SqlAlertGet($alertId: String!) @component(name: "Workflows.Tasks.SQL") {
    sqlAlertGet(alertId: $alertId)
      @rest(type: "SqlAlert", path: "/alerts/{args.alertId}", endpoint: "redashApi", method: "GET") {
      id
      name
      permissionTier
      query {
        dataSourceId
      }
    }
  }
`,es=(0,s.J1)`
  query SqlDashboardGet($dashboardId: String!) @component(name: "Workflows.Tasks.SQL") {
    sqlDashboardGet(dashboardId: $dashboardId)
      @rest(type: "SqlDashboard", path: "/dashboards/{args.dashboardId}", endpoint: "redashApi", method: "GET") {
      id
      name
      dataSourceId
      permissionTier
      widgets {
        id
        options {
          title
          parameterMappings
          position {
            sizeX
            sizeY
            autoHeight
            row
            col
          }
        }
        visualization {
          id
          query {
            id
            dataSourceId
            options {
              parameters {
                name
                title
                value
                type
                multiValuesOptions {
                  separator
                }
                enumOptions
                queryId
              }
            }
          }
        }
      }
    }
  }
`,en=(0,s.J1)`
  query SqlQueryGet($queryId: String!) @component(name: "Workflows.Tasks.SQL") {
    sqlQueryGet(queryId: $queryId)
      @rest(type: "SqlQuery", path: "/queries/{args.queryId}", endpoint: "redashApi", method: "GET") {
      id
      name
      query
      dataSourceId
      options {
        applyAutoLimit
        parameters {
          name
          title
          type
          value
          multiValuesOptions {
            separator
          }
          enumOptions
          queryId
        }
      }
    }
  }
`,ei=(0,s.J1)`
  fragment SqlWarehouseDetails on Lakehouse {
    id
    name
    state
    size
    enableServerlessCompute
    warehouseType
  }
`,er=(0,s.J1)`
  query SqlWarehouseSelectGet($id: ID!) @component(name: "Workflows.Tasks.SQL") {
    lakehouse(id: $id) {
      ...SqlWarehouseDetails
    }
  }
  ${ei}
`,eo=(0,s.J1)`
  query SqlQueryAsDropdownOptionsGet($queryId: String!) @component(name: "Workflows.Tasks.SQL") {
    sqlQueryAsDropdownOptionsGet(queryId: $queryId)
      @rest(
        type: "[SqlQueryParameterDropdownOption]"
        path: "/queries/{args.queryId}/dropdown"
        endpoint: "redashApi"
        method: "GET"
      ) {
      value
    }
  }
`,el=(0,s.J1)`
  query ClusterNameGet($id: String!) @component(name: "Workflows.Authoring.UI") {
    cluster(id: $id) {
      id
      attributes {
        name
      }
    }
  }
`},991102:(e,a,t)=>{t.d(a,{A:()=>l});var s=t(610435),n=t(692738),i=t(375214);function r(e){return(0,s.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,s.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.394 5.586a4.752 4.752 0 0 1 9.351.946 3.75 3.75 0 0 1-.668 7.464L12 14H4a.8.8 0 0 1-.179-.021 4.25 4.25 0 0 1-.427-8.393m.72 6.914h7.762a.8.8 0 0 1 .186-.008q.092.008.188.008a2.25 2.25 0 0 0 0-4.5H12a.75.75 0 0 1-.75-.75v-.5a3.25 3.25 0 0 0-6.475-.402.75.75 0 0 1-.698.657 2.75 2.75 0 0 0-.024 5.488z",clipRule:"evenodd"})})}let o=(0,n.forwardRef)((e,a)=>(0,s.Y)(i.I,{ref:a,...e,component:r}));o.displayName="CloudIcon";let l=o},999162:(e,a,t)=>{t.d(a,{GA:()=>b,GB:()=>m,JB:()=>p,Zd:()=>f,aL:()=>E,gn:()=>c,lG:()=>g});var s=t(928516),n=t.n(s),i=t(485669),r=t(845690),o=t(278983);if(13057==t.j)var l=t(883691);if(13057==t.j)var u=t(949034);if(13057==t.j)var d=t(29953);let c="top-nav-collapse",p=1;function m(e){let a,t;a=l.R,document.querySelector("#overallView")?.classList.toggle(a,e),document.querySelector("#topbar")?.classList.toggle(a,e),document.querySelector("#filebrowser-popup")?.classList.toggle(a,e),document.querySelector("#searchpanel-popup")?.classList.toggle(a,e),document.querySelector("#projects-filebrowser-popup")?.classList.toggle(a,e),t=document.querySelector("#topbar"),e?t?.classList.remove("flexbox-topbar-hidden"):t?.classList.add("flexbox-topbar-hidden"),document.querySelector("#sidebar")?.classList.toggle(l.R,e),document.querySelector("#overallView")?.style.setProperty("top",e?`${u.q7}px`:"0")}let g=()=>{try{return(0,r._S)(c,p,!0,null)}catch(e){return(0,o.y)("clientsideEvent",{eventType:"failedToReadHideTopNavLocalStorage"}),null}},f=({pathname:e,hash:a})=>{let t=(0,i.Fu)({pathname:e,hash:a})||(0,i.hW)(window.location)||e?.startsWith("/queries"),s=e?.startsWith("/editor/queries"),n=e?.startsWith("/editor/pipelines"),r=e?.startsWith("/editor/designer-files");return t||s||n||r},b=()=>{if("true"!==g())return!0;return!f(window.location)},E=e=>{let{eventName:a,target:t,...s}=e,i=t?`${a}.${n()(t)}`:a;d.o.logClientSideEvent("personaNavAction",i,s)}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/57978.483f8985a0.chunk.js.map