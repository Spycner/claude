"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[24283],{933:(e,t,n)=>{n.d(t,{E:()=>s,F:()=>r});var i=n(610435),a=n(692738);let l=(0,a.createContext)(null);function r(){return(0,a.useContext)(l)}function s({surface:e,children:t}){return(0,i.Y)(l.Provider,{value:e,children:t})}},8323:(e,t,n)=>{n.d(t,{Pg:()=>o,c2:()=>r,nZ:()=>s});var i=n(141078),a=n(154968),l=n(618646);let r=(0,i.J1)`
  query GetPipelineUpdateQuery($input: DeltapipelinesGetUpdateInput!)
  @component(name: "Workflows.Observability.Lists") {
    deltapipelinesGetUpdate: jobsGetPipelineUpdate(input: $input) {
      update {
        pipelineId
        updateId
        state
        validateOnly
        exploreOnly
        clusterId
        creationTime
        startTime
        endTime
        development
        fullRefresh
        fullRefreshSelection
        refreshSelection
        mode
        parameters @includeSafex(name: "pipeline_parameters", defaultValue: false) {
          key
          value
        }
        config {
          ...PipelineUpdateSettingsFragment
        }
      }
      apiError {
        ...PipelineApiErrorFields
      }
    }
  }
  ${a.n}
  ${l.i}
`;function s({variables:e,...t}={}){return(0,i.IT)(r,{variables:e,...t})}function o(e={}){return(0,i._l)(r,e)}},61911:(e,t,n)=>{n.d(t,{f:()=>a});var i=n(441535);function a(){if((0,i.W)("databricks.lakeflow.continuousPipelinesInJobs.preview.forceDisable",!1))return!1;if((0,i.W)("databricks.lakeflow.continuousPipelinesInJobs.preview.forceEnable",!1))return!0;if(!(0,i.W)("databricks.lakeflow.continuousPipelinesInJobs.shouldDeserializeUpdateCauseDetails",!1))return!1;return(0,i.W)("lf_continuous_unif",!1)}},74917:(e,t,n)=>{n.d(t,{B:()=>a});var i=n(74360);function a(e){return!!(e&&i.jN[e]===i.WK.TERMINAL)}},78703:(e,t,n)=>{n.d(t,{dx:()=>F,c3:()=>_});var i=n(154313);let a=e=>BigInt(e),l=a("0x9E3779B1"),r=a("0x85EBCA77"),s=a("0xC2B2AE3D"),o=a("0x9E3779B185EBCA87"),u=a("0xC2B2AE3D27D4EB4F"),p=a("0x165667B19E3779F9"),d=a("0x85EBCA77C2B2AE63"),c=a("0x27D4EB2F165667C5"),m=a("0x165667919E3779F9"),f=a("0x9FB21C651E98DF25"),g=i.Buffer.from("b8fe6c3923a44bbe7c01812cf721ad1cded46de9839097db7240a4a4b7b3671fcb79e64eccc0e578825ad07dccff7221b8084674f743248ee03590e6813a264c3c2852bb91c300cb88d0658b1b532ea371644897a20df94e3819ef46a9deacd8a8fa763fe39c343ff9dcbbc7c70b4f1d8a51e04bcdb45931c89f7ec9d9787364eac5ac8334d3ebc3c581a0fffa1363eb170ddd51b7f0da49d316552629d4689e2b16be587d47a1fc8ff8b8d17ad031ce45cb3a8f95160428afd7fbcabb4b407e","hex"),v=(a(1)<<a(128))-a(1),y=(a(1)<<a(64))-a(1),I=(a(1)<<a(32))-a(1);function h(e,t=0){let n=Math.max(0,t),a=Math.max(0,e.length-n);return i.Buffer.from(e.buffer,e.byteOffset+n,a)}let E=(e,t)=>(e&I)*(t&I)&y,P=e=>{if(!e)throw Error("Assert failed")};function S(e,t,n){for(let i=0;i<8;i++){let l=t.readBigUInt64LE(8*i),r=l^n.readBigUInt64LE(8*i);e[1^i]+=l,e[i]+=E(r,r>>a(32))}return e}function b(e,t,n,i){for(let a=0;a<i;a++)S(e,h(t,64*a),h(n,8*a));return e}function w(e,t){for(let i=0;i<8;i++){var n;let r=t.readBigUInt64LE(8*i),s=e[i];s=((n=s)^n>>a(47)^r)*l,e[i]=s&y}return e}function D(e,t){return k(e[0]^t.readBigUInt64LE(0),e[1]^t.readBigUInt64LE(8))}function T(e,t,n){let i=n;return i+=D(e.slice(0),h(t,0)),i+=D(e.slice(2),h(t,16)),i+=D(e.slice(4),h(t,32)),L((i+=D(e.slice(6),h(t,48)))&y)}function k(e,t){let n=e*t&v;return n&y^n>>a(64)}function U(e,t,n){return k((e.readBigUInt64LE(0)^t.readBigUInt64LE(0)+n)&y,(e.readBigUInt64LE(8)^t.readBigUInt64LE(8)-n)&y)}function R(e,t,n,i,l){let r=e&y,s=e>>a(64)&y;return r+=U(t,i,l),r^=n.readBigUInt64LE(0)+n.readBigUInt64LE(8),r&=y,s+=U(n,h(i,16),l),s^=t.readBigUInt64LE(0)+t.readBigUInt64LE(8),(s&=y)<<a(64)|r}function L(e){return e^=e>>a(37),e*=m,e&=y,e^=e>>a(32)}function N(e){return e^=e>>a(33),e*=u,e&=y,e^=e>>a(29),e*=p,e&=y,e^=e>>a(32)}function A(e){return~e+a(1)&y}var x=n(889885);function C(e){let t=Array.from(e,e=>e.toString(16).padStart(2,"0")).join("");return[t.slice(0,8),t.slice(8,12),t.slice(12,16),t.slice(16,20),t.slice(20)].join("-")}function B(e){let t=function(e){let t=new Uint8Array(2*e.length);for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);t[2*n]=255&i,t[2*n+1]=i>>>8&255}return t}(e),n=(function(e,t=a(0)){let n=e.byteLength;if(n<=16)return function(e,t){var n,l,s,p,d,c;let m=e.byteLength;if(P(m<=16),m>8){let l,s,p,d,c,m,f,h,E;return P((l=e.byteLength)>=9&&l<=16),s=(g.readBigUInt64LE(32)^g.readBigUInt64LE(40))+t&y,p=(g.readBigUInt64LE(48)^g.readBigUInt64LE(56))-t&y,m=((c=(e.readBigUInt64LE(0)^(d=e.readBigUInt64LE(l-8))^s)*o)&y)+(a(l-1)<<a(54)),c=c&(v^y)|m,d^=p,c+=d+(d&I)*(r-a(1))<<a(64),c&=v,c^=(n=c>>a(64),(f=i.Buffer.allocUnsafe(8)).writeBigUInt64LE(n),f.readBigUInt64BE()),E=L((h=(c&y)*u+((c>>a(64))*u<<a(64))&v)&y),E|L(h>>a(64))<<a(64)}if(m>=4){let n,i,r,u,p,d;return P((n=e.byteLength)>=4&&n<=8),i=e.readUInt32LE(0),r=e.readUInt32LE(n-4),u=a(i)|a(r)<<a(32),p=(u^(g.readBigUInt64LE(16)^g.readBigUInt64LE(24))+t&y)*(o+(a(n)<<a(2)))&v,p+=(p&y)<<a(65),p&=v,p^=p>>a(67),d=(s=((l=p&y)^l>>a(35))*f&y)^s>>a(28),d|L(p>>a(64))<<a(64)}if(m>0){let n,i,l,r;return P((n=e.byteLength)>0&&n<=3),l=((i=a(e.readUInt8(n-1))|a(n<<8)|a(e.readUInt8(0)<<16)|a(e.readUInt8(n>>1)<<24))^(a(g.readUInt32LE(0))^a(g.readUInt32LE(4)))+t)&y,r=(a(g.readUInt32LE(8))^a(g.readUInt32LE(12)))-t,N((((d=p=((p=((p=i)&a(65535))<<a(16)|(p&a(0xffff0000))>>a(16))&a(0xff00ff))<<a(8)|(p&a(0xff00ff00))>>a(8))<<(c=a(13))|d>>a(32)-c)&I^r)&y)<<a(64)|N(l)}return N(t^g.readBigUInt64LE(64)^g.readBigUInt64LE(72))|N(t^g.readBigUInt64LE(80)^g.readBigUInt64LE(88))<<a(64)}(e,t);if(n<=128)return function(e,t,n){let i=a(e.byteLength)*o&y,l=a(e.byteLength-1)/a(32);for(;l>=0;){let a=Number(l);i=R(i,h(e,16*a),h(e,e.byteLength-16*(a+1)),h(t,32*a),n),l--}let r=i+(i>>a(64))&y;r=L(r);let s=(i&y)*o+(i>>a(64))*d+(a(e.byteLength)-n&y)*u&y;return r|(s=A(L(s)))<<a(64)}(e,g,t);if(n<=240)return function(e,t,n){let i=a(e.byteLength)*o&y;for(let a=32;a<160;a+=32)i=R(i,h(e,a-32),h(e,a-16),h(t,a-32),n);i=L(i&y)|L(i>>a(64))<<a(64);for(let a=160;a<=e.byteLength;a+=32)i=R(i,h(e,a-32),h(e,a-16),h(t,3+a-160),n);let l=(i=R(i,h(e,e.byteLength-16),h(e,e.byteLength-32),h(t,103),A(n)))+(i>>a(64))&y;l=L(l);let r=(i&y)*o+(i>>a(64))*d+(a(e.byteLength)-n&y)*u&y;return l|(r=A(L(r)))<<a(64)}(e,g,t);let m=new BigUint64Array(new ArrayBuffer(64));m[0]=s,m[1]=o,m[2]=u,m[3]=p,m[4]=d,m[5]=r,m[6]=c,m[7]=l;let E=T(m=function(e,t,n,i,a){let l=Math.floor((n.byteLength-64)/8),r=64*l,s=Math.floor((t.byteLength-1)/r);for(let i=0;i<s;i++)e=a(e=b(e,h(t,i*r),n,l),h(n,n.byteLength-64));{let a=Math.floor((t.byteLength-1-r*s)/64);e=i(e=b(e,h(t,s*r),n,a),h(t,t.byteLength-64),h(n,n.byteLength-64-7))}return e}(m,e,g,S,w),h(g,11),a(e.byteLength)*o&y);return T(m,h(g,g.byteLength-64-11),~(a(e.byteLength)*u)&y)<<a(64)|E})(i.Buffer.from(t)).toString(16);n.length<32&&(n="0".repeat(32-n.length)+n);let m=function(e){let t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++)t[n]=parseInt(e.slice(2*n,2*n+2),16);return t}(n),E=new Uint8Array(16);return E.set(m.subarray(8,16),0),E.set(m.subarray(0,8),8),E}function F(e,t){let n=(0,x.FI)("currentWorkspaceId");return C(B(`${n}/${e}/dataset/${t}`))}function _(e,t){let n=(0,x.FI)("currentWorkspaceId");return C(B(`${n}/${e}/sink/${t}`))}},83854:(e,t,n)=>{n.d(t,{A:()=>s,s:()=>r});var i=n(141078),a=n(154968);let l=(0,i.J1)`
  query ListPipelineUpdatesQuery($input: DeltapipelinesListUpdatesInput!, $includeSelectionDetails: Boolean = false)
  @component(name: "Workflows.Observability.Lists") {
    deltapipelinesListUpdates: jobsListPipelineUpdates(input: $input) {
      nextPageToken
      prevPageToken
      updates {
        creationTime
        state
        updateId
        validateOnly
        exploreOnly
        endTime
        fullRefresh @include(if: $includeSelectionDetails)
        refreshSelection @include(if: $includeSelectionDetails)
        fullRefreshSelection @include(if: $includeSelectionDetails)
      }
      apiError {
        ...PipelineApiErrorFields
      }
    }
  }
  ${a.n}
`;function r({variables:e={input:{}},...t}={}){return(0,i.IT)(l,{variables:e,...t})}function s(e={}){return(0,i._l)(l,e)}},99249:(e,t,n)=>{n.d(t,{r:()=>a});var i=n(442628);function a(){return(0,i.yr)(e=>e.entityInfoEnablement)}},131172:(e,t,n)=>{function i(e,t,n,i,a,l,r){try{var s=e[l](r),o=s.value}catch(e){n(e);return}s.done?t(o):Promise.resolve(o).then(i,a)}function a(e){var t;return(t=function*({fetchPaginatedList:e,maxResultsPerPage:t}){let n,i=[],a=null,l=0;for(;l<10&&(a||0===l);)try{let n=yield e(a);n.results?.forEach(e=>{i.push(e)});let r=n.results?.length??0;a=0===r||r<t?null:n.nextPageToken??null,l+=1}catch(e){n=e;break}return{results:i,hasReachedFetchLimit:!(l<10),error:n}},function(){var e=this,n=arguments;return new Promise(function(a,l){var r=t.apply(e,n);function s(e){i(r,a,l,s,o,"next",e)}function o(e){i(r,a,l,s,o,"throw",e)}s(void 0)})}).apply(this,arguments)}n.d(t,{g:()=>a})},141797:(e,t,n)=>{n.d(t,{h:()=>r});var i=n(141078),a=n(154968);let l=(0,i.J1)`
  query PipelineGetMinimalDataQuery($input: DeltapipelinesGetPipelineInput!)
  @component(name: "Workflows.Observability.Lists") {
    deltapipelinesGet: jobsGetPipeline(input: $input) {
      status {
        name
        pipelineId
        spec {
          pipelineType
        }
        parameters @includeSafex(name: "pipeline_parameters", defaultValue: false) {
          key
          value
        }
      }
      apiError {
        ...PipelineApiErrorFields
      }
    }
  }
  ${a.n}
`;function r({variables:e,...t}={}){return(0,i.IT)(l,{variables:e,...t})}},167154:(e,t,n)=>{n.d(t,{f:()=>a});var i=n(441535);function a(){return(0,i.W)("databricks.fe.lakeflow.maxEventResultsPerPage",250)}},231827:(e,t,n)=>{n.d(t,{$B:()=>d,$S:()=>c,Gt:()=>u,SR:()=>o,fn:()=>m,jP:()=>p});var i=n(141078),a=n(154968);let l=(0,i.J1)`
  fragment ListPipelineEventsFragment on DeltapipelinesListPipelineEventsResponse {
    events {
      id
      level
      message
      timestamp
      eventType
      origin {
        clusterId
        datasetName
        sinkName
        flowId
        flowName
        sourceName
        maintenanceId
        pipelineId
        pipelineName
        tableId
        updateId
        sourceCodeLocation {
          path
          lineNumber
          endingLineNumber
          columnNumber
          endingColumnNumber
          notebookCellNumber
        }
      }
      error {
        exceptions {
          errorClass
          message
          className
          sqlState
          shortMessage
        }
      }
      details {
        createUpdate {
          cause
          validateOnly
          exploreOnly
          development
          config {
            continuous
            edition
            development
            clusters {
              label
              spec {
                attrs {
                  policyId
                  nodeTypeId
                  driverNodeTypeId
                  runtimeEngine
                  customTags {
                    key
                    value
                  }
                  awsAttributes {
                    instanceProfileArn
                  }
                }
                size {
                  numWorkers
                  autoscale {
                    minWorkers
                    maxWorkers
                    mode
                  }
                }
              }
            }
            catalog
            schema
            serverless
            photon
            pipelineType
            budgetPolicyId
            tags {
              key
              value
            }
            _json
          }
          fullRefresh
          refreshSelection
          fullRefreshSelection
          runtimeVersion {
            dbrVersion
            channel
          }
        }
        updateProgress {
          state
        }
        datasetDefinition {
          comment
          datasetType
          isPrivate
          expectations {
            action
            dataset
            invariant
            name
          }
          metastoreName
          notebookPath
          partitionColumns
          path
          schema {
            comment
            dataType
            name
            path
          }
          schemaJson
          tableProperties {
            key
            value
          }
        }
        sinkDefinition {
          format
          options {
            key
            value
          }
        }
        flowDefinition {
          comment
          explainText
          flowType
          inputDatasets
          outputDataset
          outputSink
          schema {
            comment
            dataType
            name
            path
          }
          schemaJson
        }
        flowProgress {
          status
          dataQuality {
            droppedRecords
            warnedRecords
            expectations {
              dataset
              failedRecords
              name
              passedRecords
            }
          }
          metrics {
            backlogBytes
            backlogSeconds
            backlogRecords
            backlogFiles
            numOutputRows
            numUpsertedRows
            numDeletedRows
            sourceMetrics {
              sourceName
              backlogBytes
              backlogSeconds
              backlogRecords
              backlogFiles
            }
          }
          streamingMetrics
            @includeSafex(name: "databricks.fe.pipelines.enableDataFreshnessMetric", defaultValue: false) {
            eventTime {
              min
              max
            }
          }
        }
        dataSample {
          data
          truncated
        }
        planningInformation {
          techniqueInformation {
            maintenanceType
            isChosen
          }
          optimizationInsights {
            descriptiveMessage
            issueClass
            targetDatasets {
              table
              database
              catalog
            }
          }
        }
        operationProgress {
          type
          status
          cdcSetupValidationReport {
            databaseVersion
            results {
              type
              status
              sourceObject {
                objectType
                catalogName
                schemaName
                objectName
              }
              message
              fixInstructions
            }
          }
        }
      }
    }
    apiError {
      ...PipelineApiErrorFields
    }
  }
  ${a.n}
`,r=(0,i.J1)`
  query ListPipelineEventsQuery($input: DeltapipelinesListPipelineEventsInput!)
  @component(name: "Workflows.Observability.Lists") {
    deltapipelinesEvents: jobsPipelineEvents(input: $input) {
      ...ListPipelineEventsFragment
      nextPageToken
      prevPageToken
    }
  }
  ${l}
`,s=(0,i.J1)`
  query ListPipelineEventGeneralInfosQuery($input: DeltapipelinesListPipelineEventsInput!)
  @component(name: "Workflows.Observability.Lists") {
    deltapipelinesEvents: jobsPipelineEvents(input: $input) {
      events {
        id
        level
        message
        timestamp
        eventType
        origin {
          datasetName
          flowName
          sinkName
          updateId
        }
      }
      nextPageToken
      prevPageToken
      apiError {
        ...PipelineApiErrorFields
      }
    }
  }
  ${a.n}
`,o=()=>100;function u(){return r}function p(e){return(0,i._l)(r,e)}function d(e){return(0,i._l)(s,e)}function c(e){return(0,i.IT)(s,e)}function m(e){return null!==e.id&&null!==e.level&&null!==e.origin&&null!==e.timestamp}},263732:(e,t,n)=>{n.d(t,{C_:()=>o,gU:()=>s,zU:()=>u});var i=n(141078),a=n(154968);let l=(0,i.J1)`
  fragment PipelineEventQueryFragment on DeltapipelinesListPipelineEventsResponse {
    events {
      _json
      id
      level
      message
      timestamp
      eventType
      error {
        exceptions {
          errorClass
          stack {
            declaringClass
            methodName
            lineNumber
            fileName
          }
          message
          shortMessage
          className
          sqlState
        }
      }
      origin {
        flowName
        datasetName
        sinkName
        updateId
      }
    }
  }
`,r=(0,i.J1)`
  query PipelineEventQuery($input: DeltapipelinesListPipelineEventsInput!)
  @component(name: "Workflows.Observability.Lists") {
    deltapipelinesEvents: jobsPipelineEvents(input: $input) {
      ...PipelineEventQueryFragment
      apiError {
        ...PipelineApiErrorFields
      }
    }
  }
  ${l}
  ${a.n}
`;function s(e,t){var n;let{data:a,error:l,loading:s}=(0,i.IT)(r,{skip:null===e||null===t,variables:{input:{maxResults:1,orderBy:["timestamp asc"],pipelineId:e,sinceEventId:t}}}),o=a?.deltapipelinesEvents?.apiError??void 0,u=a?.deltapipelinesEvents?.events?.[0];if(void 0===u||null===(n=u).id||null===n.level||null===n.timestamp)return{apiError:o,data:void 0,error:l,loading:s};return{apiError:o,data:u,error:l,loading:s}}function o({pipelineId:e,eventId:t}={}){return(0,i._l)(r,{variables:{input:{maxResults:1,orderBy:["timestamp asc"],pipelineId:e,sinceEventId:t}}})}function u(e){return null!==e.id&&null!==e.level&&null!==e.timestamp&&null!==e.origin}},335987:(e,t,n)=>{n.d(t,{n:()=>s});var i=n(441535),a=n(255844),l=n(8698),r=n(411424);function s(){let[e]=(0,l.Fg)(r.p.LakeFlowPipelinesMultifileAuthoring),[t,n]=(0,l.Fg)(r.p.LakeflowNewPipelinesMonitoringUi),s=(0,i.W)("databricks.fe.lakeflow.forceEnableNewPipelinesMonitoringUI",!1),o=(0,a.zs)()&&e&&(0,i.W)("databricks.fe.lakeflow.enableNewPipelinesMonitoringUI",!1);return{enableOptIn:o,isOptInSet:t&&o||s,setOptIn:e=>{n(e)},isMonitoringUIForced:s}}},352746:(e,t,n)=>{n.d(t,{U:()=>s,l:()=>r});var i=n(141078),a=n(154968);let l=(0,i.J1)`
  fragment PipelineListEventSummariesFields on DeltapipelinesListEventSummariesResponse {
    nextPageToken
    prevEventsPageToken
    nextEventsPageToken
    eventSummaries {
      eventSummaryType
      origin {
        clusterId
        datasetName
        sinkName
        flowId
        flowName
        sourceName
        maintenanceId
        pipelineId
        pipelineName
        tableId
        updateId
        sourceCodeLocation {
          path
          lineNumber
          endingLineNumber
          columnNumber
          endingColumnNumber
          notebookCellNumber
        }
      }
      details {
        updateProgressSummary {
          timestampUpdateStatus {
            timestamp
            state
          }
        }
        flowProgressSummary {
          flowName
          flowId
          startTimestamp
          completeTimestamp
          flowStatus
          flowMetricsSnapshot {
            numOutputRows
            numUpsertedRows
            numDeletedRows
            backlogBytes
            backlogSeconds
            backlogRecords
            backlogFiles
            sourceMetrics {
              sourceName
              backlogBytes
              backlogSeconds
              backlogRecords
              backlogFiles
            }
          }
          dataQualityMetricsSnapshot {
            droppedRecords
            warnedRecords
            expectations {
              name
              dataset
              passedRecords
              failedRecords
            }
          }
          streamingMetricsSnapshot
            @includeSafex(name: "databricks.fe.pipelines.enableDataFreshnessMetric", defaultValue: false) {
            latestEventTimes {
              min
              max
            }
          }
          lastBatchCompleteTimestamp
        }
        dataSampleSummary {
          dataSample {
            data
            truncated
          }
        }
        createUpdateDetailsSummary {
          details {
            cause
            validateOnly
            exploreOnly
            config {
              continuous
              edition
              clusters {
                label
                spec {
                  attrs {
                    policyId
                    nodeTypeId
                    driverNodeTypeId
                    runtimeEngine
                    customTags {
                      key
                      value
                    }
                    awsAttributes {
                      instanceProfileArn
                    }
                  }
                  size {
                    numWorkers
                    autoscale {
                      minWorkers
                      maxWorkers
                      mode
                    }
                  }
                }
              }
              catalog
              schema
              serverless
              photon
              pipelineType
              # value set at the pipeline level
              development
              budgetPolicyId
              tags {
                key
                value
              }
              _json
            }
            fullRefresh
            refreshSelection
            fullRefreshSelection
            # value used for the update
            development
            runtimeVersion {
              dbrVersion
              channel
            }
          }
          creationTime
        }
        datasetDefinitionSummary {
          definition {
            comment
            datasetType
            isPrivate
            expectations {
              action
              dataset
              invariant
              name
            }
            metastoreName
            notebookPath
            partitionColumns
            path
            schema @skip(if: $skipFetchingSchema) {
              comment
              dataType
              name
              path
            }
            schemaJson
            tableProperties {
              key
              value
            }
          }
        }
        sinkDefinitionSummary {
          definition {
            format
            options {
              key
              value
            }
          }
        }
        flowDefinitionSummary {
          definition {
            comment
            explainText
            flowType
            inputDatasets
            outputDataset
            outputSink
            schema @skip(if: $skipFetchingSchema) {
              comment
              dataType
              name
              path
            }
            schemaJson
          }
        }
      }
      errorDetailsSummary {
        errorEventId
      }
    }
  }
`,r=(0,i.J1)`
  query PipelineListEventSummariesQuery(
    $input: DeltapipelinesListEventSummariesInput!
    $skipFetchingSchema: Boolean = false
  ) @component(name: "Workflows.Observability.Lists") {
    deltapipelinesListEventSummaries: jobsListPipelineEventSummaries(input: $input) {
      ...PipelineListEventSummariesFields
      apiError {
        ...PipelineApiErrorFields
      }
    }
  }
  ${l}
  ${a.n}
`;function s(e={}){return(0,i._l)(r,{...e,variables:{...e.variables,input:e.variables?.input??{}}})}},379851:(e,t,n)=>{n.d(t,{o:()=>E});var i=n(112807),a=n(632528),l=n.n(a),r=n(692738),s=n(418834),o=n(622246),u=n(74917),p=n(962200),d=n(74360),c=n(889145),m=n(410297),f=n(724283),g=n(263732),v=n(231827),y=n(568012);function I(e,t,n,i,a,l,r){try{var s=e[l](r),o=s.value}catch(e){n(e);return}s.done?t(o):Promise.resolve(o).then(i,a)}function h(e){return function(){var t=this,n=arguments;return new Promise(function(i,a){var l=e.apply(t,n);function r(e){I(l,i,a,r,s,"next",e)}function s(e){I(l,i,a,r,s,"throw",e)}r(void 0)})}}function E(e,t){let n=(0,s.E)(),{getInitialUpdateDetails:a,listEventSummariesError:I}=(0,o.c)(),[E,P]=(0,r.useState)(null),[S,b]=(0,r.useState)(!1),[w,D]=(0,r.useState)(null),[T,k]=(0,r.useState)(void 0),[U,R]=(0,r.useState)(void 0),L=U||T||void 0,[N,A]=(0,r.useState)(void 0),[x,{loading:C}]=f.z.usePipelineEventsLazy({fetchPolicy:"network-only"}),[B,F]=(0,r.useState)(null),[_,{loading:$}]=f.z.usePipelineEventGeneralInfosLazy({fetchPolicy:"network-only"}),[M,O]=(0,r.useState)(!1),[W,G]=(0,r.useState)(!1),{state:j}=E||{},J=(0,u.B)(j);(0,r.useEffect)(()=>{O(J)},[t,J]);let[q,Q]=(0,r.useState)(!1),z=(0,r.useRef)(void 0),K=(0,r.useRef)(void 0),V=(0,r.useRef)(d.xB.ASC),Y=(0,r.useCallback)(t=>h(function*(){let n=_({variables:{input:{maxResults:(0,v.SR)(),pipelineId:e,pageToken:t}}});z.current=n;let{data:i}=yield n;if(n!==z.current)return;let{events:a,prevPageToken:l}=i?.deltapipelinesEvents||{};if(!a)return;return{eventsForDisplay:a.filter(g.zU),prevPageToken:l}})(),[_,e]),H=(0,r.useCallback)(()=>h(function*(){if(D({pipelineId:e,selectedUpdateId:t}),!e||!t)return;P(null),k(void 0),R(void 0),F(null),b(!0);let n=yield a({pipelineId:e,selectedUpdateId:t});if(!n)return void b(!1);let{updateDetails:i,nextEventsPageToken:l,prevEventsPageToken:r}=n;if(P(i??null),k(l),G(!1),b(!1),null!==r){let e=yield Y(r??null);if(!e)return;F(e.eventsForDisplay),A(e.prevPageToken)}})(),[Y,a,e,t]);(0,r.useEffect)(()=>{H()},[H,t]),(0,r.useEffect)(()=>{W&&H()},[H,W]),(0,i.default)(()=>h(function*(){if(!e)return;if(!E||!L||W||C||S||J){(!L||J)&&O(!0);return}let i=z.current,{data:a}=yield x({variables:{input:{maxResults:(0,v.SR)(),pipelineId:e,pageToken:L}}}),{events:r,apiError:s}=a?.deltapipelinesEvents||{},o=s?.code==="BAD_REQUEST";G(o);let u=r&&r.length>0,d=u&&r[0].origin?.updateId!==t,m=K.current===a;if(!u||m)return void O(!0);if(!E||d||o||i!==z.current)return;K.current=a;let{nextPageToken:f}=a?.deltapipelinesEvents||{};f&&R(f);let g=r.filter(v.fn);if(P(g.reduce(y.pp,E)),B){let t=g.filter(e=>e.level!==p.DL.METRICS);F(i=>{let a=[...i??[],...t.map(e=>({__typename:e.__typename,id:e.id,level:e.level,eventType:e.eventType,message:e.message,timestamp:e.timestamp,origin:{__typename:e.origin.__typename,datasetName:e.origin.datasetName,flowName:e.origin.flowName,sinkName:e.origin.sinkName,updateId:e.origin.updateId}}))],r=l()(a,"id"),s=a.length-r.length;return s>0&&c.h.logEvent(n,"duplicateEventsLoadedDuringPolling",{deltaPipelinesPipelineId:e},{nextEventsToken:L,nextEventsPageTokenFromPolling:U,nextEventsPageTokenFromSnapshot:T,numDuplicateEvents:s,newEventIds:t.map(e=>e.id),prevEventIds:(i??[]).map(e=>e.id)}),r})}O(!0)})(),3e3);let Z=(0,r.useCallback)(()=>h(function*(){if(null===e||null===t||null===B||0===B.length||q||!N)return;Q(!0);let i=z.current,{data:a}=yield _({variables:{input:{pipelineId:e,pageToken:N,maxResults:(0,v.SR)()}}});if(i!==z.current)return;let r=[...(a?.deltapipelinesEvents?.events??[]).filter(g.zU),...B],s=l()(r,"id"),o=r.length-s.length;o>0&&c.h.logEvent(n,"duplicateEventsLoadedDuringInfiniteScrolling",{deltaPipelinesPipelineId:e},{prevPageToken:N,numDuplicateEvents:o}),s.sort((e,t)=>new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime()),F(s),A((V.current===d.xB.ASC?a?.deltapipelinesEvents?.prevPageToken:a?.deltapipelinesEvents?.nextPageToken)||null),Q(!1)})(),[n,B,q,_,e,N,t]),X=(0,r.useCallback)(n=>h(function*(){if(null===t)return;F(null);let i=_({variables:{input:{maxResults:(0,v.SR)(),pipelineId:e,filter:(0,m._)(t,n),orderBy:["timestamp desc"]}}});z.current=i;let{data:a}=yield i;if(i!==z.current)return;let l=(a?.deltapipelinesEvents?.events||[]).filter(g.zU);l.sort((e,t)=>new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime()),F(l),V.current=d.xB.DESC,A(a?.deltapipelinesEvents?.nextPageToken)})(),[e,t,_]);if(w?.pipelineId!==e||w?.selectedUpdateId!==t)return{updateDetails:null,isLoadingUpdateDetails:!0,isLoadingEventsForDisplay:!0,isLatestEventFetched:!1,error:void 0,eventsForDisplay:null,loadOlderEvents:Z,applyFilterForEventDisplay:X};return{updateDetails:E,isLoadingUpdateDetails:S,isLoadingEventsForDisplay:$,isLatestEventFetched:M,error:I,eventsForDisplay:B,loadOlderEvents:Z,applyFilterForEventDisplay:X}}},399936:(e,t,n)=>{n.d(t,{Y:()=>u});var i=n(759458),a=n(802558),l=n.n(a);let r=Object.freeze({data:null,schema:null,overflow:!1,filters:[],filterMode:"client"});var s=n(863364),o=n(935846);function u({pipelineId:e=null,updateDetailsStore:t=(0,o.tm)(),elementInteractionsStore:n=(0,s.T)(),datasetPreviewsStore:a=(0,i.Ay)((e,t)=>{let n=(n,i)=>{e(({entries:e})=>{let a=t().get(n);return{entries:{...e,[JSON.stringify(n)]:{...a,...i(a)}}}})};return{entries:{},cache:(e,{data:t,schema:i,overflow:a})=>n(e,()=>({data:t,schema:i,overflow:a})),get:e=>t().entries[JSON.stringify(e)]??r,setFilters:(e,t)=>{let i=!1;return n(e,e=>(i="server"===e.filterMode&&!l()(t,e.filters),{filters:t,...i?{data:null,schema:null,overflow:!1}:{}})),{didInvalidateCache:i}},setFilterMode:(e,t)=>{let i=!1;return n(e,e=>(i=t!==e.filterMode&&e.filters.length>0,{filterMode:t,...i?{data:null,schema:null,overflow:!1}:{}})),{didInvalidateCache:i}}}}),dabsStore:p=(0,i.vt)(e=>({isBreakglassAllowed:!1,isModified:!1,...void 0,setIsModified:t=>e({isModified:t}),setIsBreakglassAllowed:t=>e({isBreakglassAllowed:t}),set:t=>e(t),reset:()=>e({isModified:!1,isBreakglassAllowed:!1})})),isVisualEditorActive:d=!1,entityInfoEnablement:c={nodeSchemaEnabled:!1,nodeExpectationsEnabled:!1,dagEnabled:!1,pipelineIssuesEnabled:!1,isLoading:!0,nodeCount:null}}={}){return(0,i.Ay)((i,l)=>({pipelineId:e,updateDetailsStore:t,elementInteractionsStore:n,datasetPreviewsStore:a,isVisualEditorActive:d,dabsStore:p,entityInfoEnablement:c,toggleVisualEditor:e=>i({isVisualEditorActive:e??!l().isVisualEditorActive}),setEntityInfoEnablement:e=>i({entityInfoEnablement:{...l().entityInfoEnablement,...e}})}))}},402478:(e,t,n)=>{n.d(t,{i:()=>f});var i=n(692738),a=n(22191),l=n(61911),r=n(773631),s=n(886100),o=n(141078),u=n(154968);function p(e,t,n,i,a,l,r){try{var s=e[l](r),o=s.value}catch(e){n(e);return}s.done?t(o):Promise.resolve(o).then(i,a)}let d=(0,o.J1)`
  query QueryJobsByPipeline($filterBy: JobsQueryJobsFilterByInput!, $limit: Int!, $offset: Int!)
  @component(name: "Workflows.Orchestration.Other") {
    jobsQueryJobs(input: { filterBy: $filterBy, expandTasks: true, limit: $limit, offset: $offset }) {
      jobs {
        jobId
        settings {
          continuous {
            pauseStatus
          }
        }
      }
    }
  }
`,c=(0,o.J1)`
  mutation PauseJobForPipelineStop($jobId: Long!, $pauseStatus: JobsSchedulePauseStatus!)
  @component(name: "Workflows.Orchestration.Other") {
    jobsUpdateJob(
      input: {
        jobId: $jobId
        newSettings: { continuous: { pauseStatus: $pauseStatus } }
        externalApiVersion: { major: 2, minor: 2 }
      }
    ) {
      apiError {
        code
        message
      }
    }
  }
`,m=(0,o.J1)`
  mutation StopPipelineMutation($input: DeltapipelinesStopPipelineInput!)
  @component(name: "Workflows.Orchestration.Other") {
    deltapipelinesStop: jobsStopPipeline(input: $input) {
      apiError {
        ...PipelineApiErrorFields
      }
    }
  }
  ${u.n}
`,f=e=>{let t=(0,o.mK)(),[n,u]=(0,o.n_)(m,e);return[(0,i.useCallback)(e=>{var i;return(i=function*(){let i=e?.variables?.input?.pipelineId;if((0,l.f)()&&i)try{let{data:e}=yield t.query({query:d,variables:{filterBy:{task:{pipelineTask:{pipelineId:i}}},limit:100,offset:0},fetchPolicy:"network-only"}),n=(e?.jobsQueryJobs?.jobs??[]).filter(e=>e?.settings&&(0,r.kQ)(e.settings)&&!(0,r.Ms)(e.settings));yield Promise.all(n.map(e=>t.mutate({mutation:c,variables:{jobId:parseInt(e?.jobId?.toString()??"0",10),pauseStatus:"PAUSED"}})))}catch(e){s.iT.sev2(a.Es.WorkflowsOrchestration,"lakeflow.pipelines.stop.pause-schedules-error",e)}return n(e)},function(){var e=this,t=arguments;return new Promise(function(n,a){var l=i.apply(e,t);function r(e){p(l,n,a,r,s,"next",e)}function s(e){p(l,n,a,r,s,"throw",e)}r(void 0)})})()},[t,n]),u]}},418834:(e,t,n)=>{n.d(t,{E:()=>s,f:()=>o});var i=n(610435),a=n(692738),l=n(74360);let r=(0,a.createContext)(l.Rj.PIPELINE_DETAILS_PAGE_ACTION);function s(){return(0,a.useContext)(r)}function o({eventType:e,children:t}){return(0,i.Y)(r.Provider,{value:e,children:t})}},442628:(e,t,n)=>{n.d(t,{NX:()=>m,cu:()=>d,yr:()=>c});var i=n(610435),a=n(692738),l=n(759458),r=n(935846),s=n(863364),o=n(399936);let u=(0,a.createContext)(null),p=(0,o.Y)({pipelineId:null,updateDetailsStore:r.ox,elementInteractionsStore:s.y});function d({children:e,store:t}){return(0,i.Y)(u.Provider,{value:t,children:e})}function c(e,t){let n=(0,a.useContext)(u);return(0,l.Pj)(n??p,e,t)}function m(e,t){let n=c(e=>e.elementInteractionsStore);return(0,l.Pj)(n,e,t)}},444840:(e,t,n)=>{n.d(t,{$i:()=>r,fN:()=>a,h7:()=>l});var i=n(141078);let a=(0,i.J1)`
  query GetPipelineUpdateEntity($pipelineId: String!, $updateId: String!)
  @component(name: "Workflows.Observability.Lists") {
    lakeflowGetPipelineUpdateEntity(input: { pipelineId: $pipelineId, updateId: $updateId }) {
      executionTimeline {
        state
        transitionTime
      }
    }
  }
`;function l(){return(0,i._l)(a,{errorPolicy:"all",fetchPolicy:"no-cache"})}function r(e,t){let n=e?.lakeflowGetPipelineUpdateEntity?.executionTimeline;if(!n||0===n.length)return;let i=new Map;for(let e of n)e.state&&e.transitionTime&&i.set(e.state,e.transitionTime);return!i.has("CREATED")&&t&&i.set("CREATED",t),i.size>0?i:void 0}},459950:(e,t,n)=>{n.d(t,{V:()=>o,e:()=>s});var i=n(141078),a=n(154968);let l=(0,i.J1)`
  mutation CreatePipelineMutation($input: PipelineCreateSpecInput!) @component(name: "Workflows.Authoring.UI") {
    pipelinesCreate(input: $input) @rest(type: "PipelinesCreatePipelineResponse", path: "/pipelines", method: "POST") {
      errors @type(name: "ApiError") {
        ...PipelineApiErrorFields
      }
      pipelineId
    }
  }
  ${a.n}
`,r=(0,i.J1)`
  mutation CreatePipelineGraphQLMutation($input: DeltapipelinesCreatePipelineInput!)
  @component(name: "Workflows.Authoring.UI") {
    jobsCreatePipeline(input: $input) {
      apiError {
        ...PipelineApiErrorFields
      }
      pipelineId
    }
  }
  ${a.n}
`,s=e=>(0,i.n_)(l,e),o=e=>(0,i.n_)(r,e)},483686:(e,t,n)=>{n.d(t,{Hk:()=>l,JS:()=>a,RU:()=>u,VI:()=>o,Yt:()=>r,_K:()=>s,iR:()=>p});var i=n(441535);function a(){return(0,i.W)("databricks.fe.lakeflow.usePipelineEntitiesAPIs",!1)}function l(){return(0,i.W)("databricks.fe.lakeflow.usePipelineEntitiesAPIsForExpectations",!1)}function r(){return(0,i.W)("databricks.fe.lakeflow.usePipelineEntitiesAPIsForSchemas",!1)}function s(){return(0,i.W)("databricks.fe.lakeflow.usePipelineEntitiesAPIsForIssues",!1)}function o(){return a()&&(0,i.W)("databricks.fe.lakeflow.usePipelineEntitiesSubscription",!1)}function u(){return(0,i.W)("databricks.fe.lakeflow.pipelines.editor.usePipelineEntitiesAPIs",!1)}function p(){return(0,i.W)("databricks.fe.lakeflow.pipelineEntitiesPollIntervalMs",3e4)}},499868:(e,t,n)=>{n.d(t,{c:()=>r});var i=n(141078),a=n(154968);let l=(0,i.J1)`
  mutation StartPipelineMutation($input: DeltapipelinesStartUpdateInput!)
  @component(name: "Workflows.Orchestration.Other") {
    deltapipelinesStart: jobsStartPipeline(input: $input) {
      updateId
      apiError {
        ...PipelineApiErrorFields
      }
    }
  }
  ${a.n}
`,r=e=>(0,i.n_)(l,e)},568012:(e,t,n)=>{n.d(t,{Jx:()=>E,TA:()=>y,_N:()=>I,bg:()=>P,mJ:()=>c,nc:()=>p,p$:()=>g,pp:()=>d,qC:()=>v,ul:()=>f,yR:()=>h,ye:()=>S});var i=n(631377),a=n.n(i),l=n(74917),r=n(962200),s=n(993533),o=n(74360),u=n(410297);let p={__typename:"DeltapipelinesUpdateDetails",pipelineId:null,updateId:null,state:null,creationTime:null,startTime:null,completeTime:null,clusterId:null,settings:null,lastStateBeforeFailure:null,latestUpdateProgressErrorEventId:void 0,flows:[],datasets:[],sinks:[],fullRefresh:null,refreshSelection:null,fullRefreshSelection:null,refreshSelectionByPath:null,fullRefreshSelectionByPath:null,prevEventsPageToken:null,nextEventsPageToken:null,validateOnly:null,exploreOnly:null,development:null,mode:null,parameters:null,timeSeriesSummaries:[],updateProgressSummary:void 0};function d(e,t){if(t===r.v4)return p;switch(t.eventType){case r.hw.CREATE_UPDATE:return c({state:e,timestamp:t.timestamp,origin:t.origin,details:t.details?.createUpdate});case r.hw.UPDATE_PROGRESS:return g({state:e,updateState:t.details?.updateProgress?.state??null,timestamp:t.timestamp,clusterId:t.origin.clusterId,level:t.level,id:t.id});case r.hw.DATASET_DEFINITION:return v({state:e,origin:t.origin,details:t.details?.datasetDefinition});case r.hw.SINK_DEFINITION:return y({state:e,origin:t.origin,details:t.details?.sinkDefinition});case r.hw.FLOW_DEFINITION:return I({state:e,origin:t.origin,details:t.details?.flowDefinition});case r.hw.FLOW_PROGRESS:return function(e,t){let{flowProgress:n}=t.details??{},{flowName:i}=t.origin,l=e.flows?.find(e=>e.name===i);if(!l||!n)return e;let r=a()(l),o=[...e.flows.filter(e=>e.name!==i),r],p={...e,flows:o},d=n.metrics?.sourceMetrics?.map(e=>e.sourceName).filter(e=>null!==e)??[];d.length>0&&(r.sourceNames=[...new Set([...r.sourceNames??[],...d])]);let c=null!==t.origin.flowId&&t.origin.flowId!==r.currentFlowId;c&&(r.currentFlowId=t.origin.flowId),null!==n.status&&(r.flowStatus=n.status),n.status===s.cml.STARTING?r.startTimestamp=t.timestamp:n.status===s.cml.COMPLETED&&(r.completeTimestamp=t.timestamp),n.status===s.cml.FAILED?r.latestErrorEventId=t.id:null!==n.status&&(r.latestErrorEventId=null),r.totalOutputRows=function(e,t,n){var i;let a=(i=t,h(i.metrics?.numOutputRows,i.metrics?.numUpsertedRows,i.metrics?.numDeletedRows));if(n)return a;if(null===e.totalOutputRows&&null===a)return null;return(e.totalOutputRows??0)+(a??0)}(r,n,c);let m=function(e,t,n){let i=t.metrics?.numDeletedRows;if(n)return i??null;if(null===e.totalDeletedRows&&null===i)return null;let a=i??0;return"string"==typeof e.totalDeletedRows&&""!==e.totalDeletedRows&&(a+=Number(e.totalDeletedRows)),a}(r,n,c);r.totalDeletedRows=null===m?null:m.toString();let f=function(e,t,n){let i=t.metrics?.numUpsertedRows;if(n)return i??null;if(null===e.totalUpsertedRows&&null===i)return null;let a=i??0;return"string"==typeof e.totalUpsertedRows&&""!==e.totalUpsertedRows&&(a+=Number(e.totalUpsertedRows)),a}(r,n,c);r.totalUpsertedRows=null===f?null:f.toString();let g=n.streamingMetrics?.eventTime;if(g&&(r.streamingMetricsSnapshot={__typename:"DeltapipelinesEventsummariesStreamingMetricsSummary",latestEventTimes:{__typename:"DeltapipelinesEventsEventsEventTimeStats",min:u.jD.getLatestTimestamp(r.streamingMetricsSnapshot?.latestEventTimes?.min,g.min),max:u.jD.getLatestTimestamp(r.streamingMetricsSnapshot?.latestEventTimes?.max,g.max)}}),t.message?.startsWith("Completed a streaming update")&&g&&(r.lastBatchCompleteTimestamp=t.timestamp),!n.dataQuality)return p;c?(r.totalDroppedRecords=n.dataQuality.droppedRecords,r.totalWarnedRecords=null!==n.dataQuality.warnedRecords?parseInt(n.dataQuality.warnedRecords,10):null):(r.totalDroppedRecords=(r.totalDroppedRecords??0)+(n.dataQuality.droppedRecords??0),r.totalWarnedRecords=(r.totalWarnedRecords??0)+parseInt(n.dataQuality.warnedRecords??"0",10));let{expectations:v}=n.dataQuality;return E(p,v,c)}(e,t);case r.hw.DATA_SAMPLE:return P({state:e,origin:t.origin,details:t.details?.dataSample});case r.hw.PLANNING_INFORMATION:return S({state:e,origin:t.origin,details:t.details?.planningInformation,id:t.id});default:return e}}function c({state:e,timestamp:t,origin:n,details:i}){let a=e.updateProgressSummary?new Map(e.updateProgressSummary):void 0;return null!==t&&(void 0===a&&(a=new Map),a.set(s.mtr.CREATED,t)),{...e,pipelineId:n.pipelineId,updateId:n.updateId,creationTime:t,state:s.mtr.CREATED,fullRefresh:i?.fullRefresh??null,refreshSelection:i?.refreshSelection??null,fullRefreshSelection:i?.fullRefreshSelection??null,validateOnly:i?.validateOnly??null,exploreOnly:i?.exploreOnly??null,development:i?.development??i?.config?.development??null,settings:{name:n.pipelineName,dbrVersion:i?.runtimeVersion?.dbrVersion??null,continuous:i?.config?.continuous??null,edition:i?.config?.edition??null,channel:i?.runtimeVersion?.channel??null,clusters:i?.config?.clusters??null,catalog:i?.config?.catalog??null,schema:i?.config?.schema??null,development:i?.config?.development??null,photon:i?.config?.photon??null,serverless:i?.config?.serverless??null,pipelineType:i?.config?.pipelineType??null,budgetPolicyId:i?.config?.budgetPolicyId??null,tags:i?.config?.tags??[],__typename:"DeltapipelinesPipelineSpec",_json:i?.config?._json??null},updateProgressSummary:a,cause:i?.cause}}let m={[s.mtr.COMPLETED]:s.cml.COMPLETED,[s.mtr.FAILED]:s.cml.STOPPED,[s.mtr.CANCELED]:s.cml.STOPPED};function f(e,t,n){let i=e.flows&&e.flows.map(e=>{let{flowStatus:i}=e;if(!(i&&o.r2[i]===o.WK.TEMPORARY))return e;let a=m[t];return{...e,flowStatus:a,completeTimestamp:t===s.mtr.COMPLETED?n:e.completeTimestamp}});return{...e,flows:i}}function g({state:e,updateState:t,timestamp:n,clusterId:i,level:a,id:r}){let{state:o}=e;if((0,l.B)(o))return e;let{completeTime:u,startTime:p}=e;(0,l.B)(t)?u=n:t===s.mtr.INITIALIZING&&(p=n);let d=t===s.mtr.FAILED?e.state:null,c=e;(0,l.B)(t)&&(c=f(e,t,u));let m=e.updateProgressSummary?new Map(e.updateProgressSummary):void 0;return t&&(void 0===m&&(m=new Map),m.set(t,n)),{...c,clusterId:i??c.clusterId,state:t??null,lastStateBeforeFailure:d??null,startTime:p,completeTime:u,updateProgressSummary:m,latestUpdateProgressErrorEventId:a===s.Gvj.ERROR&&void 0!==r?r:c.latestUpdateProgressErrorEventId}}function v({state:e,origin:t,details:n}){let i={__typename:"DeltapipelinesDatasetSummary",name:t.datasetName,dataSample:null,definition:n??null,expectationMetrics:null};return{...e,datasets:[...e.datasets??[],{...i,sourceCodeLocation:t?.sourceCodeLocation}]}}function y({state:e,origin:t,details:n}){if(!t||!n||!t.sinkName)return e;let i={__typename:"DeltapipelinesSinkSummary",name:t.sinkName,definition:{format:n.format,options:n.options||[],__typename:"DeltapipelinesEventsEventsSinkDefinition"},sourceCodeLocation:t.sourceCodeLocation};return{...e,sinks:[...e.sinks??[],i]}}function I({state:e,origin:t,details:n}){let i={__typename:"DeltapipelinesFlowSummary",name:t.flowName,definition:n??null,currentFlowId:null,flowStatus:null,startTimestamp:null,completeTimestamp:null,totalDroppedRecords:null,totalWarnedRecords:null,totalOutputRows:null,latestErrorEventId:null,totalUpsertedRows:null,totalDeletedRows:null,streamingMetricsSnapshot:null,lastBatchCompleteTimestamp:null};return{...e,flows:[...e.flows??[],i]}}function h(e,t,n){if(null!=e)return e;if(null!=t)return t-(n??0);return null}function E(e,t,n){if(!t)return e;return t.forEach(t=>{let i=e.datasets.find(e=>e.name===t.dataset);if(!i)return;let l=a()(i),r=[...e.datasets.filter(e=>e.name!==t.dataset),l];e={...e,datasets:r},l.expectationMetrics||(l.expectationMetrics=[]);let s=l.expectationMetrics.find(e=>e.name===t.name);s&&!n?(s.passedRecords=(s.passedRecords??0)+(t.passedRecords??0),s.failedRecords=(s.failedRecords??0)+(t.failedRecords??0)):(l.expectationMetrics=l.expectationMetrics.filter(e=>e!==s),l.expectationMetrics.push(t))}),e}function P({state:e,origin:t,details:n}){if(null===e.datasets)return e;let{datasetName:i}=t;if(null===i)return e;let a=e.datasets.findIndex(e=>e.name===i);if(-1===a)return e;let l={...e.datasets[a],dataSample:n??null},r=[...e.datasets.slice(0,a),l,...e.datasets.slice(a+1)];return{...e,datasets:r}}function S({state:e,origin:t,details:n,id:i}){if(null===t.flowName||null===e.flows)return e;let a=e.flows.findIndex(e=>e.name===t.flowName);if(-1===a)return e;let l={...e.flows[a],planningInformation:n?{eventId:i,...n}:null};return{...e,flows:[...e.flows.slice(0,a),l,...e.flows.slice(a+1)]}}},618646:(e,t,n)=>{n.d(t,{i:()=>a});var i=n(141078);let a=(0,i.J1)`
  fragment PipelineUpdateSettingsFragment on DeltapipelinesPipelineSpec {
    name
    continuous
    dbrVersion
    edition
    channel
    clusters {
      label
      spec {
        attrs {
          policyId
          nodeTypeId
          driverNodeTypeId
          runtimeEngine
          customTags {
            key
            value
          }
          awsAttributes {
            instanceProfileArn
          }
        }
        size {
          numWorkers
          autoscale {
            minWorkers
            maxWorkers
            mode
          }
        }
      }
    }
    catalog
    schema
    serverless
    photon
    development
    pipelineType
    budgetPolicyId
    tags {
      key
      value
    }
  }
`},622246:(e,t,n)=>{n.d(t,{$:()=>N,c:()=>L});var i=n(692738),a=n(141078),l=n(255844),r=n(911489),s=n(962200),o=n(167154),u=n(131172);function p(e,t,n,i,a,l,r){try{var s=e[l](r),o=s.value}catch(e){n(e);return}s.done?t(o):Promise.resolve(o).then(i,a)}function d(e){return function(){var t=this,n=arguments;return new Promise(function(i,a){var l=e.apply(t,n);function r(e){p(l,i,a,r,s,"next",e)}function s(e){p(l,i,a,r,s,"throw",e)}r(void 0)})}}let c=(0,a.J1)`
  fragment ListPipelinePlanningInformationEventsFragment on DeltapipelinesListPipelineEventsResponse {
    events {
      id
      message
      timestamp
      level
      eventType
      origin {
        flowName
      }
      details {
        planningInformation {
          techniqueInformation {
            maintenanceType
            isChosen
          }
          optimizationInsights {
            issueClass
          }
        }
      }
    }
    apiError {
      ...PipelineApiErrorFields
    }
    nextPageToken
  }
  ${r.n}
`,m=(0,a.J1)`
  query ListPipelinePlanningInformationEventsQuery($input: DeltapipelinesListPipelineEventsInput!)
  @component(name: "Workflows.Observability.Lists") {
    deltapipelinesEvents: jobsPipelineEvents(input: $input) {
      ...ListPipelinePlanningInformationEventsFragment
    }
  }
  ${c}
`;var f=n(724283),g=n(231827),v=n(352746),y=n(8323),I=n(631377),h=n.n(I),E=n(568012),P=n(889145),S=n(418834),b=n(99249),w=n(74917),D=n(444840),T=n(802533);function k(e,t,n,i,a,l,r){try{var s=e[l](r),o=s.value}catch(e){n(e);return}s.done?t(o):Promise.resolve(o).then(i,a)}function U(e){return function(){var t=this,n=arguments;return new Promise(function(i,a){var l=e.apply(t,n);function r(e){k(l,i,a,r,s,"next",e)}function s(e){k(l,i,a,r,s,"throw",e)}r(void 0)})}}function R(e){let t,n,r,p=(0,S.E)(),{getPipelinePlanningInformationEvents:c}=(t=(0,a.mK)(),n=(0,o.f)(),r=(0,i.useCallback)(({pipelineId:e,updateId:i,pageToken:a})=>d(function*(){let l={input:{maxResults:n,pipelineId:e,filter:`update_id = '${i}' AND event_type = '${s.hw.PLANNING_INFORMATION}'`,pageToken:a}},r=yield t.query({query:m,fetchPolicy:"no-cache",variables:l});return{results:r.data?.deltapipelinesEvents?.events??[],nextPageToken:r.data?.deltapipelinesEvents?.nextPageToken??null}})(),[t,n]),{getPipelinePlanningInformationEvents:(0,i.useCallback)(({pipelineId:e,updateId:t})=>d(function*(){let{results:i,...a}=yield(0,u.g)({fetchPaginatedList:n=>r({pipelineId:e,updateId:t,pageToken:n}),maxResultsPerPage:n});return{...a,events:i}})(),[r,n])}),f=(0,l.MR)(),g=(0,i.useCallback)(({pipelineId:t,selectedUpdateId:n})=>U(function*(){let i=null,a=[],l=null,r=null,o=0;do{let s=yield e({input:{pipelineId:t,updateId:n,pageToken:i}});if(o++,s?.deltapipelinesListEventSummaries?.apiError?.code==="NOT_IMPLEMENTED")throw Error("Failed to request update details using listEventSummaries");let{eventSummaries:u,nextEventsPageToken:p,prevEventsPageToken:d,nextPageToken:c}=s?.deltapipelinesListEventSummaries??{};u&&(a=a.concat(u)),null===(i=c??null)&&(l=d??null,r=p??null)}while(null!==i);if(P.h.logEvent(p,"listEventSummariesPagesLoaded",{deltaPipelinesPipelineId:t,pipelineUpdateId:n},{numPagesRequested:o,numEventSummariesLoaded:a.length}),0===a.length)return null;return{updateDetails:a.reduce((e,t)=>(function(e,t){let{origin:n,details:i,errorDetailsSummary:a}=t,l={state:e,origin:n,details:i,errorDetailsSummary:a};switch(t.eventSummaryType){case s.DC.CREATE_UPDATE_DETAILS_SUMMARY:return function({state:e,origin:t,details:n}){if(!t||!n)return e;return(0,E.mJ)({state:e,timestamp:n.createUpdateDetailsSummary?.creationTime??null,origin:t,details:n.createUpdateDetailsSummary?.details})}(l);case s.DC.UPDATE_PROGRESS_SUMMARY:return function({state:e,origin:t,details:n,errorDetailsSummary:i}){let a=n?.updateProgressSummary?.timestampUpdateStatus;if(!a)return e;let l=a.filter(e=>null!==e.timestamp).map(e=>({updateState:e.state,timestamp:e.timestamp})).sort((e,t)=>e.timestamp<=t.timestamp?-1:1),r=e;l.forEach(e=>{let{updateState:n,timestamp:i}=e;r=(0,E.p$)({state:r,updateState:n,timestamp:i,clusterId:t?.clusterId??null})});let s=i?.errorEventId;return null!=s&&(r.latestUpdateProgressErrorEventId=s),r}(l);case s.DC.DATASET_DEFINITION_SUMMARY:return function({state:e,origin:t,details:n}){if(!t||!n)return e;return(0,E.qC)({state:e,origin:t,details:n.datasetDefinitionSummary?.definition})}(l);case s.DC.SINK_DEFINITION_SUMMARY:return function({state:e,origin:t,details:n}){if(!t||!n)return e;return(0,E.TA)({state:e,origin:t,details:n.sinkDefinitionSummary?.definition})}(l);case s.DC.FLOW_DEFINITION_SUMMARY:return function({state:e,origin:t,details:n}){if(!t||!n)return e;return(0,E._N)({state:e,origin:t,details:n.flowDefinitionSummary?.definition})}(l);case s.DC.FLOW_PROGRESS_SUMMARY:return function({state:e,details:t,errorDetailsSummary:n}){if(!t)return e;let{flowProgressSummary:i}=t;if(!i)return e;let{flowName:a,flowId:l,startTimestamp:r,completeTimestamp:s,flowStatus:o,flowMetricsSnapshot:u,dataQualityMetricsSnapshot:p,streamingMetricsSnapshot:d,lastBatchCompleteTimestamp:c}=i,m=e.flows?.find(e=>e.name===a);if(!m)return e;let f={...h()(m),flowStatus:o,currentFlowId:l,startTimestamp:r,completeTimestamp:s,totalDroppedRecords:p?.droppedRecords??null,totalWarnedRecords:p?.warnedRecords?parseInt(p.warnedRecords,10):null,totalOutputRows:u?.numOutputRows??null,totalUpsertedRows:u?.numUpsertedRows?.toString()??null,totalDeletedRows:u?.numDeletedRows?.toString()??null,latestErrorEventId:n?.errorEventId??null,streamingMetricsSnapshot:d,lastBatchCompleteTimestamp:c},g=u?.sourceMetrics?.map(e=>e.sourceName).filter(e=>null!==e)??[];g.length>0&&(f.sourceNames=[...new Set([...f.sourceNames??[],...g])]);let v=[...e.flows.filter(e=>e.name!==a),f],y={...e,flows:v};return(0,E.Jx)(y,p?.expectations??null,!1)}(l);case s.DC.DATA_SAMPLE_SUMMARY:return function({state:e,origin:t,details:n}){if(!t||!n)return e;return(0,E.bg)({state:e,origin:t,details:n.dataSampleSummary?.dataSample})}(l);case s.DC.TIME_SERIES_SUMMARY:return function({state:e,origin:t}){if(!t)return e;let n=e.flows,i=e.flows?.find(e=>e.name===t.flowName);if(void 0!==i&&null!==t.sourceName){let a=h()(i);a.sourceNames=[...new Set([...a.sourceNames??[],t.sourceName])],n=[...e.flows?.filter(e=>e.name!==t.flowName)??[],a]}return{...e,flows:n,timeSeriesSummaries:e.timeSeriesSummaries}}(l);default:return e}})(e,t),E.nc),nextEventsPageToken:r,prevEventsPageToken:l}})(),[e,p]);return{getInitialUpdateDetails:(0,i.useCallback)(e=>U(function*(){let[t,n]=yield Promise.all([g(e),f&&c({pipelineId:e.pipelineId,updateId:e.selectedUpdateId})]);if(!t)return null;let i=function(e){let t=(0,a.mg)(e);t.flows?.forEach(e=>{let t=null!==e.totalUpsertedRows&&void 0!==e.totalUpsertedRows?Number(e.totalUpsertedRows):e.totalUpsertedRows,n=null!==e.totalDeletedRows&&void 0!==e.totalDeletedRows?Number(e.totalDeletedRows):e.totalDeletedRows;e.totalOutputRows=(0,E.yR)(e.totalOutputRows,t,n)});let{state:n,completeTime:i}=t;return(0,w.B)(n)&&(t=(0,E.ul)(t,n,i)),t}(t.updateDetails);return n&&(i=n.events.reduce((e,t)=>t.id&&t.origin&&t.details?.planningInformation?(0,E.ye)({state:e,origin:t.origin,details:{...t.details.planningInformation,optimizationInsights:t.details.planningInformation?.optimizationInsights?.map(e=>({descriptiveMessage:null,targetDatasets:null,...e}))??null},id:t.id}):e,i)),{updateDetails:i,nextEventsPageToken:t.nextEventsPageToken,prevEventsPageToken:t.prevEventsPageToken}})(),[c,g,f])}}function L(){let[e,{error:t}]=f.z.usePipelineListEventSummariesLazy({fetchPolicy:"no-cache"}),{getInitialUpdateDetails:n}=R((0,i.useCallback)(t=>U(function*(){return(yield e({variables:t})).data})(),[e]));return{getInitialUpdateDetails:n,listEventSummariesError:t}}function N(){let{entitiesAPIEnabledForCurrentSelection:e}=(0,T.u0)(),{getInitialUpdateDetails:t}=function(){let e=(0,a.mK)(),{nodeSchemaEnabled:t}=(0,b.r)(),{getInitialUpdateDetails:n}=R((0,i.useCallback)(n=>U(function*(){let i=yield e.query({query:v.l,fetchPolicy:"no-cache",variables:{...n,skipFetchingSchema:t}});if((i.errors?.length??0)>0)throw new a.K4({graphQLErrors:i.errors});if(i.error)throw i.error;return i.data})(),[e,t]));return{getInitialUpdateDetails:(0,i.useCallback)(t=>U(function*(){let i=yield n(t);if(!i)return null;let{updateDetails:a,prevEventsPageToken:l,nextEventsPageToken:r}=i;if(null===r||(0,w.B)(a.state))return{updateDetails:a,prevEventsPageToken:l,nextEventsPageToken:r};let{data:s}=yield e.query({query:(0,g.Gt)(),fetchPolicy:"network-only",variables:{input:{maxResults:(0,g.SR)(),pageToken:r,pipelineId:t.pipelineId}}}),o=(s?.deltapipelinesEvents?.events??[]).filter(g.fn);return{updateDetails:o.reduce(E.pp,a),nextEventsPageToken:s?.deltapipelinesEvents?.nextPageToken??r,prevEventsPageToken:l,processedEvents:o}})(),[e,n])}}(),{getInitialUpdateDetails:n}=function(){let[e]=(0,y.Pg)(),[t]=(0,D.h7)();return{getInitialUpdateDetails:(0,i.useCallback)(n=>U(function*(){let[i,a]=yield Promise.all([e({variables:{input:{pipelineId:n.pipelineId,updateId:n.selectedUpdateId}},errorPolicy:"all",fetchPolicy:"no-cache"}),t({variables:{pipelineId:n.pipelineId,updateId:n.selectedUpdateId}}).catch(()=>null)]),l=i?.data?.deltapipelinesGetUpdate?.update;if(!l)return null;let{__typename:r,...s}=l;return{updateDetails:{__typename:"DeltapipelinesUpdateDetails",...s,creationTime:s.startTime,completeTime:s.endTime,settings:s.config?{...s.config,_json:null}:null,lastStateBeforeFailure:null,refreshSelectionByPath:null,fullRefreshSelectionByPath:null,flows:[],datasets:[],sinks:[],timeSeriesSummaries:[],updateProgressSummary:(0,D.$i)(a?.data,s.startTime),latestUpdateProgressErrorEventId:void 0,nextEventsPageToken:null,prevEventsPageToken:null,parameters:s.parameters?.map(e=>({__typename:"DeltapipelinesUpdateDetailsParametersEntry",key:e.key,value:e.value}))??null},nextEventsPageToken:null,prevEventsPageToken:null}})(),[e,t])}}(),l=(0,i.useRef)(e);return l.current=e,{getInitialUpdateDetails:(0,i.useCallback)(e=>U(function*(){return(l.current?n:t)(e)})(),[n,t])}}},632925:(e,t,n)=>{n.d(t,{X:()=>r});var i=n(141078),a=n(154968);let l=(0,i.J1)`
  mutation DeletePipelineMutation($input: DeltapipelinesDeletePipelineInput!)
  @component(name: "Workflows.Authoring.UI") {
    deltapipelinesDelete: jobsDeletePipeline(input: $input) {
      apiError {
        ...PipelineApiErrorFields
      }
    }
  }
  ${a.n}
`,r=e=>(0,i.n_)(l,e)},660976:(e,t,n)=>{n.d(t,{Y:()=>l});var i=n(669517),a=n(717453);function l(e){return!!((0,i.N)(e.state)&&(e.datasets?.some(e=>!!e.name)||(0,a.O)()&&e.sinks?.some(e=>!!e.name)))}},669517:(e,t,n)=>{n.d(t,{N:()=>l});var i=n(74917),a=n(993533);function l(e){return!!(e&&((0,i.B)(e)||[a.mtr.RUNNING,a.mtr.STOPPING].includes(e)))}},677276:(e,t,n)=>{n.d(t,{F:()=>o,a:()=>s});var i=n(610435),a=n(692738),l=n(187826);let r=(0,a.createContext)(null);function s({children:e,selectedUpdateId:t,setSelectedUpdateId:n}){let l=(0,a.useMemo)(()=>({selectedUpdateId:t,setSelectedUpdateId:n}),[t,n]);return(0,i.Y)(r.Provider,{value:l,children:e})}function o(){let e=(0,a.useContext)(l.ij),{selectedUpdateId:t,setSelectedUpdateId:n}=(0,a.useContext)(r)??{},i=e?.data?.pipeline,s=i?.latestUpdates?.[0]?.updateId??null,o=i?.latestUpdates?.[0]?.state??null;return(0,a.useMemo)(()=>({selectedUpdateId:t??s,setSelectedUpdateId:n??(()=>{}),latestUpdateId:s,latestUpdateState:o}),[t,n,s,o])}},717453:(e,t,n)=>{n.d(t,{O:()=>a});var i=n(441535);function a(){return(0,i.W)("databricks.fe.deltapipelines.pipelineSinksEnabled",!1)}},724283:(e,t,n)=>{n.d(t,{z:()=>k});var i=n(794876),a=n(459950),l=n(632925),r=n(692738),s=n(141078);let o=(0,s.J1)`
  mutation DryRunPipelineMutation($input: PipelineCreateSpecInput!) @component(name: "Workflows.Authoring.UI") {
    pipelinesCreate(input: $input) @rest(type: "PipelinesCreatePipelineResponse", path: "/pipelines", method: "POST") {
      effectiveSettings {
        clusters {
          numWorkers
          autoscale {
            maxWorkers
            minWorkers
            mode
          }
          instancePoolId
          label
          nodeTypeId
          driverNodeTypeId
          runtimeEngine
        }
        configuration
        continuous
        development
        libraries {
          notebook {
            path
          }
        }
        name
        storage
        target
        serverless
        photon
        edition
        dataSampling
        catalog
        channel
        schema
      }
      errors @type(name: "ApiError") {
        code
        message
        helpUrl
        traceId
      }
    }
  }
`;var u=n(809546),p=n(263732),d=n(231827),c=n(661152),m=n(141797),f=n(154968);let g=(0,s.J1)`
  query PipelineGetSourceObjectDetailsQuery($input: DeltapipelinesGetSourceObjectDetailsInput!)
  @component(name: "Ingestion.IngestionConnectorFramework") {
    deltapipelinesGetSourceObjectDetails: jobsGetSourceObjectDetails(input: $input) {
      tableDetails {
        path
        columns {
          name
          destinationTypeName
          destinationTypeText
          description
          isNullable
        }
        primaryKeys
        sequenceBy
        requiredColumns
      }
      apiError {
        ...PipelineApiErrorFields
      }
      code
      message
    }
  }
  ${f.n}
`,v=(0,s.J1)`
  fragment TimeSeriesData on LakeflowTimeSeriesData {
    labels {
      name
      value
    }
    samples {
      timestamp
      value
    }
  }
`,y=(0,s.J1)`
  fragment GetTimeSeriesFields on JobsobservabilityGetTimeSeriesResponse {
    timeSeries {
      maxBacklogBytes {
        ...TimeSeriesData
      }
      maxBacklogRecords {
        ...TimeSeriesData
      }
      maxBacklogSeconds {
        ...TimeSeriesData
      }
      maxBacklogFiles {
        ...TimeSeriesData
      }
    }
    nextPageToken
  }
  ${v}
`,I=(0,s.J1)`
  query PipelineGetTimeSeriesJobsQuery($input: JobsobservabilityGetTimeSeriesInput!)
  @component(name: "Workflows.Observability.Lists") {
    jobsobservabilityGetTimeSeries(input: $input) {
      ...GetTimeSeriesFields
      apiError {
        ...PipelineApiErrorFields
      }
    }
  }
  ${f.n}
  ${y}
`;var h=n(352746),E=n(499868),P=n(402478),S=n(935301),b=n(8323),w=n(83854),D=n(889515),T=n(379851);let k={usePipelineList:i.yZ,usePipelineListLazy:i.eq,usePipelineGet:c.oA,usePipelineGetLazy:c.cR,usePipelineGetSuspense:c.I2,usePipelineGetMinimalData:m.h,usePipelineDelete:l.X,usePipelineAction:D.q,usePipelineStart:E.c,usePipelineStop:P.i,usePipelineEvent:p.gU,usePipelineEventsLazy:d.jP,usePipelineEventGeneralInfosLazy:d.$B,usePipelineEdit:u.uH,usePipelineCreate:a.e,usePipelineCreateGraphQL:a.V,usePipelineDryRun:function(){let[e,t]=(0,s.n_)(o);return[(0,r.useCallback)(t=>e({...t,variables:{...t?.variables,input:{...t?.variables?.input,dry_run:!0,run_as:void 0}}}),[e]),t]},useSelectedPipelineUpdateDetailsWithSnapshot:T.o,usePipelineGetTimeSeries:function(e={}){return(0,s.IT)(I,e)},usePipelineGetTimeSeriesLazy:function(e={}){return(0,s._l)(I,e)},usePipelineUpdateGet:b.nZ,usePipelineUpdateGetLazy:b.Pg,usePipelineUpdateDetails:S.d,usePipelineUpdateDetailsLazy:S.H,usePipelineUpdates:w.s,usePipelineUpdatesLazy:w.A,usePipelineListEventSummariesLazy:h.U,usePipelineGetSourceObjectDetails:function(e={}){return(0,s.IT)(g,e)},usePipelineGetSourceObjectDetailsLazy:function(e={}){return(0,s._l)(g,e)}}},773631:(e,t,n)=>{n.d(t,{Ms:()=>l,Rp:()=>p,Ze:()=>d,dO:()=>u,kQ:()=>r,vl:()=>o});var i=n(254292),a=n.n(i);function l(e){return e?.schedule?.pauseStatus==="PAUSED"||e?.trigger?.pauseStatus==="PAUSED"||e?.continuous?.pauseStatus==="PAUSED"}function r(e){return(e?.continuous||void 0)!==void 0}let s={periodic:function(e){return(e?.trigger?.periodic?.interval||void 0)!==void 0},cron:function(e){return(e?.schedule?.quartzCronExpression||void 0)!==void 0},continuous:r,fileArrival:function(e){return(e?.trigger?.fileArrival?.url||void 0)!==void 0},tableUpdate:function(e){return(e?.trigger?.tableUpdate?.tableNames||void 0)!==void 0},model:function(e){return(e?.trigger?.model||void 0)!==void 0}};function o(e){return!!(e?.schedule||e?.trigger||e?.continuous)}function u(e){if(!o(e))return null;for(let t in s)if(a()(s[t])&&s[t](e))return t;return e?.trigger}function p(e,t){return null!==e&&t.includes(e)}function d(e,t){if(!o(e))return!1;return p(u(e),t)}},774376:(e,t,n)=>{n.d(t,{o:()=>l});var i=n(697453),a=n(623797);class l{static confirm(e,t,n,i,l,r){return new Promise(s=>{t((0,a.wW)({title:n,confirmText:i,children:e,onConfirm:()=>{t((0,a.DN)()),s(!0)},onCancel:()=>{t((0,a.DN)()),s(!1)},getContainer:l,zIndex:r}))})}static showNotification(e,t,n,a=!0){i.ds.call({isCloseable:!0,root:{componentId:"codegen_webapp_js_pipelines_utils_pipelineactionutils.tsx_43",severity:n,duration:a?5e3:1/0},title:{value:e},description:{value:t??""}})}}},794876:(e,t,n)=>{n.d(t,{FY:()=>l,eq:()=>s,yZ:()=>r});var i=n(141078),a=n(911489);let l=(0,i.J1)`
  query PipelineListQuery($input: DeltapipelinesListPipelinesInput!) @component(name: "Workflows.Observability.Lists") {
    deltapipelinesList: jobsListPipelines(input: $input) {
      nextPageToken
      prevPageToken
      statuses {
        runAsUserName
        permissionLevel
        latestUpdates {
          creationTime
          state
          updateId
        }
        name
        pipelineId
        state
        ownerPrincipal @includeSafex(name: "databricks.fe.enrichPrincipalUi", defaultValue: false) {
          id
          uniqueName
          kind
          displayName
        }
        userActivityInfo
          @includeSafex(name: "databricks.fe.pipelines.enablePipelinesTableFavoriteIndicator", defaultValue: false) {
          assetType
          assetId
          isFavorite
        }
      }
      apiError {
        ...PipelineApiErrorFields
      }
    }
  }
  ${a.n}
`;function r({variables:e={input:{}},...t}={}){let n={...e.input};return"string"==typeof n.pageToken&&(delete n.filter,delete n.orderBy),(0,i.IT)(l,{variables:{input:n},...t})}function s(e={}){return(0,i._l)(l,e)}},802533:(e,t,n)=>{n.d(t,{$3:()=>m,lQ:()=>g,u0:()=>c,uZ:()=>f});var i=n(255844),a=n(99249),l=n(933),r=n(934583),s=n(483686),o=n(335987),u=n(74917),p=n(677276);function d(){let e=(0,l.F)(),t=(0,i.MR)();if("details"===e)return!0;if("editor"===e)return t&&(0,s.RU)();return!1}function c(){let{dagEnabled:e}=(0,a.r)(),t=g(),{selectedUpdateId:n,latestUpdateId:i,latestUpdateState:l}=(0,p.F)(),s=(0,r.F)(e=>e.hasBeenActiveInSession),o=null!==n&&n===i&&null!==l&&!(0,u.B)(l);return{isActiveUpdate:o,entitiesAPIEnabled:e||t&&(o||s),entitiesAPIEnabledForCurrentSelection:e||t&&o}}function m(){let e=(0,l.F)(),{isOptInSet:t}=(0,o.n)();return d()&&("details"!==e||t)&&(0,s.Hk)()}function f(){let e=(0,l.F)(),{isOptInSet:t}=(0,o.n)();return d()&&("details"!==e||t)&&((0,s.Yt)()||(0,s.Hk)()||(0,s._K)()||(0,s.JS)())}function g(){let e=(0,l.F)();if(!d())return!1;return"editor"===e?(0,s.RU)():(0,s.VI)()}},809546:(e,t,n)=>{n.d(t,{KW:()=>o,uH:()=>s});var i=n(141078),a=n(154968);let l=(0,i.J1)`
  mutation EditPipelineMutation($pipelineId: String!, $spec: PipelineEditSpecInput!)
  @component(name: "Workflows.Authoring.UI") {
    pipelineEdit(pipelineId: $pipelineId, spec: $spec)
      @rest(type: "PipelineEditResult", path: "/pipelines/{args.pipelineId}", method: "PUT", bodyKey: "spec") {
      errors @type(name: "ApiError") {
        ...PipelineApiErrorFields
      }
    }
  }
  ${a.n}
`,r=(0,i.J1)`
  mutation UpdatePipelineGraphQLMutation($input: DeltapipelinesEditPipelineInput!)
  @component(name: "Workflows.Authoring.UI") {
    jobsEditPipeline(input: $input) {
      apiError {
        ...PipelineApiErrorFields
      }
    }
  }
  ${a.n}
`,s=e=>(0,i.n_)(l,e),o=e=>(0,i.n_)(r,e)},863364:(e,t,n)=>{n.d(t,{T:()=>d,y:()=>p});var i=n(987737),a=n.n(i),l=n(759458),r=n(993533),s=n(78703);let o=["set","reset","resetGraphInteractionFields","getIsNodeSelectedWithBottomPanelInteractions"],u=Object.freeze({selectedDatasetName:null,selectedSinkName:null,nodeSelectionShouldReturnToGraph:!1,nodeSelectionShouldSuppressBottomPanelInteractions:!1,flowQuery:"",identifiedFlowNames:[],selectedFlowNames:[],highlightedDatasetName:null,newTab:null,selectedEventId:null,selectedSettingsPanelSection:null,datasetDrawerNode:null,bottomPanelTab:{id:"update"},selectedNode:null,dagPanelWidth:null,runSelectedSqlText:null,runSelectedSqlTextVersion:0}),p=(0,l.Ay)((e,t)=>({...u,set:()=>{},reset:()=>t().set({}),resetGraphInteractionFields:()=>t().set({}),getIsNodeSelectedWithBottomPanelInteractions:()=>!1}));function d(e={}){return(0,l.Ay)((t,n)=>({...u,...e,set:e=>{let{selectionFor:n,...i}=e,l=!!n?.isSink,u=n?{selectedDatasetName:l?null:n.name,selectedSinkName:l?n.name:null,selectedNode:{ref:l?(0,s.c3)(n.pipelineId,n.name):(0,s.dx)(n.pipelineId,n.name),name:n.name,type:l?r.ADg.SINK:r.ADg.DATASET}}:{};return t({...void 0!==n||i.selectedNode||i.selectedDatasetName||i.selectedSinkName?{nodeSelectionShouldReturnToGraph:!1,nodeSelectionShouldSuppressBottomPanelInteractions:!1}:{},...u,...a()(i,o)})},reset:()=>n().set(u),resetGraphInteractionFields:(e={})=>n().set({selectedNode:null,selectedDatasetName:null,nodeSelectionShouldReturnToGraph:!1,nodeSelectionShouldSuppressBottomPanelInteractions:!1,selectedSinkName:null,flowQuery:"",identifiedFlowNames:[],selectedFlowNames:[],highlightedDatasetName:null,newTab:null,datasetDrawerNode:null,...e}),getIsNodeSelectedWithBottomPanelInteractions:()=>{let{selectedNode:e,selectedDatasetName:t,selectedSinkName:i,nodeSelectionShouldSuppressBottomPanelInteractions:a}=n();return(null!==e||null!==t||null!==i)&&!a}}))}},889145:(e,t,n)=>{n.d(t,{h:()=>a});var i=n(29953);class a{static logEvent(e,t,n,a){try{i.o.logClientSideEvent(e,t,n,void 0===a?void 0:JSON.stringify(a))}catch(e){}}}},889515:(e,t,n)=>{n.d(t,{q:()=>s});var i=n(628209),a=n(342411),l=n(774376);function r(e,t,n,i,a,l,r){try{var s=e[l](r),o=s.value}catch(e){n(e);return}s.done?t(o):Promise.resolve(o).then(i,a)}function s(e,t){let[n,s]=e(),u=(0,i.wA)(),p=(0,a.tz)();return[e=>{var i;return(i=function*(){let{title:i,confirmText:a,confirmMessage:r,successMessage:s,errorMessage:d,startActionCallback:c,successCallback:m,errorCallback:f,getContainer:g}=t;if(r&&!(yield l.o.confirm(r,u,i,a,g)))return{};c?.();let v=yield n(e);if(v.data){let{data:e}=v,t=Object.keys(e)[0],n=e[t],i=n?.apiError;if(i){let t=d||i.message;return l.o.showNotification(p.formatMessage(o.errorTitle),t,"error"),f&&f(e),v}let a=n?.errors;if(a?.length){let t=d||a.map(e=>e.message).join("\n");l.o.showNotification(p.formatMessage(o.errorTitle),t,"error"),f&&f(e)}else s&&l.o.showNotification(p.formatMessage(o.successTitle),s,"success"),m&&m(e)}return v},function(){var e=this,t=arguments;return new Promise(function(n,a){var l=i.apply(e,t);function s(e){r(l,n,a,s,o,"next",e)}function o(e){r(l,n,a,s,o,"throw",e)}s(void 0)})})()},s]}let o=(0,a.YK)({errorTitle:{id:"uHsvXi",defaultMessage:"Error"},successTitle:{id:"uq5/oX",defaultMessage:"Success"}})},911489:(e,t,n)=>{n.d(t,{n:()=>a});var i=n(141078);let a=(0,i.J1)`
  fragment PipelineApiErrorFields on ApiError {
    code
    message
    helpUrl
    traceId
    errorDetails {
      ... on ErrorDetailErrorInfo {
        reason
        domain
        metadata
      }
      ... on ErrorDetailRequestInfo {
        requestId
        servingData
      }
    }
  }
`},934583:(e,t,n)=>{n.d(t,{F:()=>p});var i=n(299089),a=n.n(i),l=n(102876),r=n(759458),s=n(442628),o=n(935846);let u=["pipelineId","updateId","isInitialLoading","isInitialLoadingNewUpdate","error","updateDetails","isStartingUpdate","hasActiveUpdate","hasBeenActiveInSession","lastUpdateDetailsWithGraph","lastKnownClusterId","previousUpdateDetails","lastKnownDatasetsByPath"];function p(e,t=l.x){let n=(0,s.yr)(e=>e.updateDetailsStore);return(0,r.Pj)(n??o.ox,t=>e({...a()(t,u),hasActiveUpdate:t.hasActiveUpdate()}),t)}},935301:(e,t,n)=>{n.d(t,{H:()=>u,d:()=>o});var i=n(141078),a=n(154968),l=n(618646);let r=(0,i.J1)`
  fragment PipelineUpdateDetailsFragment on DeltapipelinesGetUpdateDetailsResponse {
    details {
      pipelineId
      updateId
      state
      lastStateBeforeFailure
      clusterId
      creationTime
      startTime
      completeTime
      fullRefresh
      refreshSelection
      fullRefreshSelection
      refreshSelectionByPath
      fullRefreshSelectionByPath
      prevEventsPageToken
      nextEventsPageToken
      validateOnly
      exploreOnly
      development
      parameters @includeSafex(name: "pipeline_parameters", defaultValue: false) {
        key
        value
      }
      mode @includeSafex(name: "databricks.preview.metadata.lf_continuous_unif", defaultValue: false)
      settings {
        ...PipelineUpdateSettingsFragment
        _json
      }
      datasets {
        name
        definition {
          comment
          datasetType
          isPrivate
          expectations {
            action
            dataset
            invariant
            name
          }
          metastoreName
          notebookPath
          partitionColumns
          path
          schema {
            comment
            dataType
            name
            path
          }
          schemaJson
          tableProperties {
            key
            value
          }
        }
        expectationMetrics {
          name
          dataset
          failedRecords
          passedRecords
        }
        dataSample {
          data
          truncated
        }
      }
      flows {
        name
        currentFlowId
        definition {
          comment
          explainText
          flowType
          inputDatasets
          outputDataset
          outputSink
          schema {
            comment
            dataType
            name
            path
          }
          schemaJson
        }
        flowStatus
        startTimestamp
        completeTimestamp
        totalDroppedRecords
        totalOutputRows
        latestErrorEventId
        totalUpsertedRows
        totalDeletedRows
        streamingMetricsSnapshot
          @includeSafex(name: "databricks.fe.pipelines.enableDataFreshnessMetric", defaultValue: false) {
          latestEventTimes {
            min
            max
          }
        }
        lastBatchCompleteTimestamp
      }
      sinks {
        name
        definition {
          format
          options {
            key
            value
          }
        }
      }
      timeSeriesSummaries {
        details {
          timeSeriesSummary {
            name
            aggregationIntervalMs
            timeSeries {
              timestamp
              values {
                label
                value
              }
            }
          }
        }
        origin {
          flowName
          sourceName
        }
      }
    }
    apiError {
      ...PipelineApiErrorFields
    }
  }
  ${a.n}
  ${l.i}
`,s=(0,i.J1)`
  query PipelineUpdateDetailsQuery($input: DeltapipelinesGetUpdateDetailsInput!)
  @component(name: "Workflows.Observability.Lists") {
    deltapipelinesGetUpdateDetails: jobsGetPipelineUpdateDetails(input: $input) {
      ...PipelineUpdateDetailsFragment
    }
  }
  ${r}
`;function o({variables:e={input:{}},additionalSkipConditions:t,...n}={}){let{pipelineId:a,updateId:l}=e.input;return(0,i.IT)(s,{variables:e,...n,skip:!0===t||null==a||null==l})}function u(e={}){return(0,i._l)(s,e)}},935846:(e,t,n)=>{n.d(t,{G4:()=>m,R8:()=>f,ox:()=>v,tm:()=>E});var i=n(916424),a=n.n(i),l=n(987737),r=n.n(l),s=n(984741),o=n(759458),u=n(993533),p=n(660976),d=n(74917);let c=["set","reset","maybeUpdateLastKnownClusterId","updateLastKnownDatasetsByPath","hasActiveUpdate"],m="{PENDING_UPDATE_ID}";function f(e){return!!e&&e!==m}let g={pipelineId:null,updateId:null,isInitialLoading:!1,isInitialLoadingNewUpdate:!1,isStartingUpdate:!1,error:null,updateDetails:null,previousUpdateDetails:null,lastUpdateDetailsWithGraph:null,lastKnownClusterId:null,lastKnownDatasetsByPath:{},newEvents:null,isRenderingLargePipelinesEnabled:!1,hasBeenActiveInSession:!1},v=(0,o.Ay)((e,t)=>({...g,set:()=>{throw Error("Read-only PipelineUpdateDetailsStore")},reset:()=>t().set({}),maybeUpdateLastKnownClusterId:()=>t().set({}),updateLastKnownDatasetsByPath:()=>t().set({}),hasActiveUpdate:()=>!1}));function y(e,t){return!e||e.timestamp<=t.timestamp?t:e}function I(e){return{datasetName:e.name??"",datasetType:e.definition?.datasetType,startLineNumber:(e.sourceCodeLocation?.lineNumber??-1)+1,endLineNumber:e.sourceCodeLocation?.endingLineNumber?e.sourceCodeLocation.endingLineNumber+1:null,obtainedBy:"executing-code",datasetNameType:"unknown",definition:{schema:e.definition?.schema??null,isPrivate:e.definition?.isPrivate??null}}}function h({previousState:e,newState:t}){let n=e?.lastKnownClusterId??null;t?.updateDetails?.clusterId&&t?.updateDetails?.creationTime&&(n=y(n,{id:t.updateDetails.clusterId,timestamp:new Date(t.updateDetails.creationTime)}));let i=e?.lastUpdateDetailsWithGraph??null;return t?.updateDetails&&(0,p.Y)(t.updateDetails)&&(i=t.updateDetails),t.lastUpdateDetailsWithGraph&&(i=t.lastUpdateDetailsWithGraph),{previousUpdateDetails:(e?.updateId!==m&&t.updateId&&e?.updateId!==t.updateId?e?.updateDetails:e?.previousUpdateDetails)??null,lastUpdateDetailsWithGraph:i,lastKnownClusterId:n}}function E(e={}){return(0,o.Ay)((t,n)=>({...g,...h({previousState:null,newState:e}),...e,set:e=>t(t=>{var n;let i="function"==typeof e?e(t):e,l=t&&(!i.pipelineId||t.pipelineId===i.pipelineId)?t:null,o=function({previousDatasetsByPath:e,updateDetails:t}){if(!t?.datasets||!(0,p.Y)(t)||0===t.datasets.length)return e;let n=a()(t.datasets,e=>(0,s.e0)(e.sourceCodeLocation?.path)??"nolocation://"),i={...e};for(let[e,t]of Object.entries(n))i[e]=t.map(I);return i}({previousDatasetsByPath:l?.lastKnownDatasetsByPath??{},updateDetails:i.updateDetails??null});return n={...r()(t,c),...r()(i,c),...h({previousState:l,newState:i}),lastKnownDatasetsByPath:o},n.updateDetails?.exploreOnly&&(0,d.B)(n.updateDetails.state)&&n.updateDetails.settings?.pipelineType===u.wGY.WORKSPACE?{...n,updateDetails:n.lastUpdateDetailsWithGraph}:n}),reset:()=>n().set(g),maybeUpdateLastKnownClusterId:e=>t(t=>({lastKnownClusterId:y(t?.lastKnownClusterId??null,e)})),updateLastKnownDatasetsByPath:(e,n)=>t(t=>{let i={...t.lastKnownDatasetsByPath};if(e=(0,s.e0)(e),n.length>0){let a=t.lastUpdateDetailsWithGraph?.datasets;if(a?.length){let t=new Map(a.filter(e=>!!e.name).map(e=>[e.name,e]));i[e]=n.map(e=>(function({datasetWithLine:e,runtimeDatasetsByNameMap:t}){if(e.definition?.schema?.length)return e;let n=t.get(e.datasetName)?.definition?.schema,i=t.get(e.datasetName)?.definition?.isPrivate??null;if(n)return{...e,definition:{schema:n,isPrivate:i}};return e})({datasetWithLine:e,runtimeDatasetsByNameMap:t}))}else i[e]=n}else delete i[e];return{lastKnownDatasetsByPath:i}}),hasActiveUpdate:()=>{let{updateDetails:e}=n();return!!(e&&!(0,d.B)(e.state))}}))}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/24283.1502e4d1f5.chunk.js.map