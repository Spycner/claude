"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[3217,30355,60051,70165],{2769:(e,t,i)=>{i.d(t,{NF:()=>o,NL:()=>s,Nq:()=>a,iI:()=>r,ms:()=>l,n7:()=>n});let n='"Menlo", "Monaco", "Consolas", "Ubuntu Mono", "Source Code Pro", monospace',r=13,o=22,a=16,s=13,l=12},40984:(e,t,i)=>{i.d(t,{S:()=>a,a:()=>o});let n=e=>e.filter(e=>void 0!==e).join(",").toLowerCase(),r=e=>{let t=0;for(let i=0;i<e.length;i++)t=(t<<5)-t+e.charCodeAt(i)|0;return t},o=({query:e,location:t,source:i})=>r(n([e,t?.first_line,t?.first_column,i])),a=({query:e,location:t,catalog:i,schema:o,precedingCreatedIdentifiers:a})=>r(n([e,t?.first_line,t?.first_column,i,o,...a]))},134763:(e,t,i)=>{i.d(t,{DY:()=>c,LS:()=>u,sE:()=>l});var n=i(610435),r=i(692738),o=i(394917),a=i(886100),s=i(22191);let l=r.createContext(void 0);function u({children:e}){let t=(0,o.f)();return(0,n.Y)(l.Provider,{value:t,children:e})}function c(){let e=r.useContext(l);if(void 0===e)return a.iT.sev2(s.Es.Editor,"AutoInlineSuggestionContextProvider","useAutoInlineSuggestionEnabled must be used within a AutoInlineSuggestionContextProvider",!0),(0,o.W)();return e}},149216:(e,t,i)=>{i.d(t,{b:()=>n});let n=(0,i(480006).u1)("keybindingService")},162539:(e,t,i)=>{i.d(t,{o:()=>s});var n=i(483588),r=i(441535),o=i(29824);function a(e,t,i,n,r,o,a){try{var s=e[o](a),l=s.value}catch(e){i(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}let s=(e,t)=>{var i;return(i=function*(){let i=t.query.trim(),{data:a}=yield e.query({query:t.queryDocument,variables:{query:i,filters:{resultTypes:[n.iId.VOLUME],...t.excludeBrowseOnly&&{aclFilter:{allowUcBrowseOnly:!1}}},sortOrder:{criteria:n.noI.NAME,ascending:!0},enableCrossRanking:!!(0,r.W)("databricks.fe.assetSelectors.enableCrossRanking",!1),pageSize:t.pageSize,pageToken:t.pageToken},fetchPolicy:t.fetchPolicy}),s=a?.searchmidtierSearchUnifiedSearch,l=s?.apiError;return{results:(s?.results??[]).flatMap(e=>{let t=(e=>{if(!e)return null;let{name:t,description:i,ucEntityMetadata:n,browseOnly:r}=e,a=n?.catalogName,s=n?.schemaName;if(!t||!a||!s)return null;return{name:t,full_name:[a,s,t].join("."),catalog_name:a,schema_name:s,comment:i??void 0,securable_type:o.an.VOLUME,browse_only:r??!1}})(e);return t?[t]:[]}),nextPageToken:s?.nextPageToken??void 0,apiError:l?{message:l.message??"",code:l.code??""}:null}},function(){var e=this,t=arguments;return new Promise(function(n,r){var o=i.apply(e,t);function s(e){a(o,n,r,s,l,"next",e)}function l(e){a(o,n,r,s,l,"throw",e)}s(void 0)})})()}},192502:(e,t,i)=>{i.a(e,async(e,n)=>{try{i.r(t),i.d(t,{default:()=>O});var r=i(610435),o=i(444148),a=i.n(o),s=i(915862),l=i.n(s),u=i(515332),c=i.n(u),d=i(692738),m=i(343378),h=i(497895),f=i(764236),p=i(503217),g=i(342411),y=i(441535),b=i(929117),v=i(629355),E=i(123964),C=i(381817),k=i(397821),w=i(973781),P=i(31623),S=i(235549),_=i(295275),T=i(584529),x=i(437197),A=i(831970),I=i(604105),R=i(181440),M=i(345958),D=i(26355),L=e([p]);function O({isUnityCatalog:e}){let t,i=(0,g.tz)(),{metadata:n,isLoading:o,securableKind:a,viewDefinition:s,properties:l,dataSourceFormat:u,tableType:c,catalog:d,schema:f,table:y}=(0,E.useTableDetailsPage)(),{theme:C}=(0,h.wn)(),P=(0,M.$)(),{unifiedDataSource:_}=(0,R.useDataExplorerDataSourceContext)(),I=(0,v.wn)(a)&&(0,w.U)(),{data:L,isLoading:q}=(0,k.H)(d,f,y,_,{enabled:I});if(!(0,A.j)())return(0,r.Y)(z,{isUnityCatalog:e});if(o)return(0,r.Y)(m.M,{description:b.z.TABLE_DETAIL_METADATA});let N=(0,v.NQ)(a,c);if(I){if(q)return(0,r.Y)(m.M,{description:b.z.TABLE_DETAIL_METADATA});t=L}else t=s??l?.["metric_view.raw_yml"];if(I)return t?(0,r.Y)(p.ReadOnlyCodeBlock,{theme:C.isDarkMode?"databricks-unified-dark":"databricks-unified-light",language:"yaml",visibleLines:16,actionButtons:[{buttonId:"copy",onClick:()=>{P("metric_view_copy_yaml_definition",{})},tooltipContent:i.formatMessage({id:"YuvYVc",defaultMessage:"Copy to clipboard"})}],menuBarProps:{title:i.formatMessage({id:"0wyq3P",defaultMessage:"Definition"})},children:t.trim()}):null;let F=(0,r.Y)(x.u,{entityType:"TABLE",titleText:(0,D.c)(N,u,i),data:n??{},loading:o,securableKind:a});return(0,r.FD)(T.i,{children:[F,e&&(0,r.Y)(S.M,{})]})}function z({isUnityCatalog:e}){let t,i=(0,g.tz)(),{metadata:n,isLoading:o,securableKind:s,viewDefinition:u,properties:T,catalog:x,schema:A,table:D}=(0,E.useTableDetailsPage)(),{unifiedDataSource:L}=(0,R.useDataExplorerDataSourceContext)(),{theme:O}=(0,h.wn)(),q=(0,M.$)(),F=(0,v.wn)(s)&&(0,w.U)(),{data:Y,isLoading:W}=(0,k.H)(x,A,D,L,{enabled:F}),U=(0,d.useMemo)(()=>i.formatMessage({id:"XeeWI3",defaultMessage:"(empty)"}),[i]),Q=(0,d.useMemo)(()=>n??{},[n]);"TABLE_DB_STORAGE"===Q.securable_kind&&(Q.storage_location=i.formatMessage(C.OT));let B=(0,d.useMemo)(()=>{let e,t=Object.keys(Q).reduce((t,i)=>{if(!N(s,(0,I.D)(s)).has(i))return t;let n=Q[i];if(i.endsWith("Properties")&&"string"==typeof n&&n.length>2){if(n.length>2){let e=n.substring(1,n.length-1).split(/,(?=[^,]+=)/g);return t[l()(i)]=e.reduce((e,t)=>{let[i,n]=t.split("=");return""!==i.trim()&&(e[i]=n),e},{}),t}return t[l()(i)]=U,t}if("object"==typeof n&&null!==n){let r=n;r="properties"===i?a()(r,(e,t)=>t.startsWith("spark.internal")):r,(0,I.D)(s)&&(r="properties"===i?a()(r,(e,t)=>t.startsWith("delta")):r),(0,y.W)("databricks.fe.discovery.enableProfilingStatsUi",!1)&&(r="properties"===i?a()(r,(e,t)=>t.startsWith("spark.sql.statistics.colStats")||t.startsWith("spark.sql.statistics.historyColStats")):r);try{r=JSON.parse(r)}catch{}return Object.keys(r).forEach(t=>{t.includes("dbfsStorageLocationForDisplay")&&(e=r[t],delete r[t])}),t[l()(i)]=Object.keys(r).length?r:U,t}return t[l()(i)]=c()(n),t},{});return e&&(t[l()("storage_location")]=e),t},[U,Q,s]);if(o)return(0,r.Y)(m.M,{description:b.z.TABLE_DETAIL_METADATA});if(F){if(W)return(0,r.Y)(m.M,{description:b.z.TABLE_DETAIL_METADATA});t=Y}else t=u??T?.["metric_view.raw_yml"];if(F)return t?(0,r.Y)(p.ReadOnlyCodeBlock,{theme:O.isDarkMode?"databricks-unified-dark":"databricks-unified-light",language:"yaml",visibleLines:16,actionButtons:[{buttonId:"copy",onClick:()=>{q("metric_view_copy_yaml_definition",{})},tooltipContent:i.formatMessage({id:"YuvYVc",defaultMessage:"Copy to clipboard"})}],menuBarProps:{title:i.formatMessage({id:"0wyq3P",defaultMessage:"Definition"})},children:t.trim()}):null;let $=(0,r.Y)(P.R,{loading:o,metadata:B});return(0,r.FD)(r.FK,{children:[(0,r.Y)(_.w,{title:i.formatMessage({id:"e2j/qn",defaultMessage:"About this table"}),children:$}),(0,r.Y)(f.h,{size:"sm"}),e&&(0,r.FD)(r.FK,{children:[(0,r.Y)(S.M,{}),(0,r.Y)(f.h,{size:"md"})]})]})}p=(L.then?(await L)():L)[0];let q=["TABLE_DELTA"],N=(e,t)=>{let i=new Set(["Created By","created_at","Is_managed_location","Last Access","Location","Properties","Type","created_at","created_by",...t?[]:["delta_runtime_properties_kvpairs"],"pipeline_id","properties","provisioning_info","sql_path","storage_credential_name","storage_location","table_id","type",...t?[]:["delta_uniform_iceberg"]]);return q.includes(e??"")||(i.add("updated_at"),i.add("updated_by")),i};n()}catch(e){n(e)}})},204892:(e,t,i)=>{i.d(t,{O:()=>a,P:()=>s});var n=i(278983),r=i(689017),o=i(711489);class a extends Error{status;code;source;data;constructor(e,t,i,n){super(t),this.status=e,this.code=t,this.source=i,this.data=n}}let s=(e,t,i,a,s,l,u)=>{(0,r.wi)({lakesense_log:{event_type:l??o.J5.LakesenseEventType_Type.TYPE_UNSPECIFIED,event_name:`${e}: ${t}`,lakesense_trace_id:s,lakesense_client_id:i,model_type:u}}),(0,n.y)("clientsideEvent",{eventType:"InlineAssistantError",eventName:`${e}: ${t}`,lakesenseTraceId:s,lakesenseClientId:i,modelType:u},a)}},325334:(e,t,i)=>{i.d(t,{G:()=>r.G,T:()=>n.T});var n=i(841508),r=i(565082)},340632:(e,t,i)=>{i.d(t,{P:()=>r,y:()=>o});var n=i(141078);function r({catalog:e,schema:t,skip:i=!1,withSecrets:a=!1,onCompleted:s}){let l=[e,t].join(".");return(0,n.IT)(o,{variables:{schemaFullName:l,withSecrets:a},skip:i,onCompleted:s})}let o=(0,n.J1)`
  query GetUcSchemaInfoQuery($schemaFullName: String!, $withSecrets: Boolean! = false)
  @component(name: "DBSQLX.CatalogExplorer") {
    unityCatalogSchemaNameReference(fullName: $schemaFullName) {
      schema {
        managedCatalogSchemaInfo {
          schemaId
          name
          catalogName
          catalogType
          securableKind
          browseOnly
          owner
          comment
          createdAt
          createdBy
          updatedAt
          updatedBy
          storageRoot
          storageLocation
          propertiesKvpairs {
            _json
          }
          provisioningInfo {
            state
            details
          }
          deltaSharingValidThroughTimestamp
          secretStorage @include(if: $withSecrets) {
            connectionName
            storageType
          }
        }
        tables(maxResults: 20) {
          nodes {
            managedCatalogTableInfo {
              tableId
              tableType
              name
              comment
              owner
              createdAt
            }
          }
          nextPageToken
        }
        volumes(maxResults: 20) {
          nodes {
            managedCatalogVolumeInfo {
              name
              owner
              createdAt
            }
          }
          nextPageToken
        }
        functions(maxResults: 20) {
          nodes {
            managedCatalogFunctionInfo {
              name
              owner
              createdAt
            }
          }
          nextPageToken
        }
        models(maxResults: 20) {
          nodes {
            managedCatalogRegisteredModelInfo {
              name
              owner
              createdAt
            }
          }
          nextPageToken
        }
        secrets(maxResults: 20) @include(if: $withSecrets) {
          nodes {
            managedCatalogSecretInfo {
              name
              effectiveOwner
              createTime
            }
          }
          nextPageToken
        }
      }
    }
  }
`},356579:(e,t,i)=>{i.d(t,{O4:()=>v,om:()=>b});var n=i(610435),r=i(247066),o=i(692738),a=i(886100),s=i(22191),l=i(748592),u=i(759458),c=i(40984),d=i(221095),m=i(105026);let h={max:1e3,ttl:18e6},f=()=>({max:1e3,ttl:18e6,maxSize:(0,m._Z)(),sizeCalculation:d.$}),p=(e={})=>(0,u.Ay)((t,i)=>({module:"default",syntaxParseResultCache:new r.q((0,m.GF)()?f():h),getSyntaxParseResultFromCache:({query:e,location:t,source:n})=>{let r=(0,c.a)({query:e,location:t,source:n}),{syntaxParseResultCache:o}=i(),a=o.get(r);if(!1===a)return null;return a},setSyntaxParseResultInCache:({query:e,location:t,source:n,syntaxError:r})=>{let o=(0,c.a)({query:e,location:t,source:n}),{syntaxParseResultCache:a}=i();a.set(o,r??!1)},tokenParseResultCache:new r.q((0,m.GF)()?f():h),getTokenParseResultFromCache:({query:e,location:t,catalog:n,schema:r,precedingCreatedIdentifiers:o})=>{let a=(0,c.S)({query:e,location:t,catalog:n,schema:r,precedingCreatedIdentifiers:o}),{tokenParseResultCache:s}=i();return s.get(a)},setTokenParseResultInCache:({query:e,location:t,catalog:n,schema:r,tokens:o,precedingCreatedIdentifiers:a})=>{let s=(0,c.S)({query:e,location:t,catalog:n,schema:r,precedingCreatedIdentifiers:a}),{tokenParseResultCache:l}=i();l.set(s,o)},clearTokenParseResultCache:()=>{let{tokenParseResultCache:e}=i();e.clear()},...e})),g=(0,l.W)(()=>p(),!0),y=(0,o.createContext)(null),b=({module:e,children:t})=>{let[i]=(0,o.useState)(()=>p({module:e}));return(0,n.Y)(y.Provider,{value:i,children:t})};function v(e,t){let i,n=(i=(0,o.useContext)(y)??g.getActiveValue(),(0,o.useEffect)(()=>{if("default"===i.getState().module){let e=Error();a.iT.sev3(s.Es.Editor,"EditorSqlGlobalContextStoreProvider not found in the component tree",e.stack)}},[i]),i);return(0,u.Pj)(n,e,t)}},365184:(e,t,i)=>{i.d(t,{Ft:()=>s,V7:()=>a,Xo:()=>l,ok:()=>r,xb:()=>o});var n=i(812145);function r(e,t){if(!e)throw Error(t?`Assertion failed (${t})`:"Assertion Failed")}function o(e,t="Unreachable"){throw Error(t)}function a(e){e||(0,n.dz)(new n.D7("Soft Assertion Failed"))}function s(e){e()||(e(),(0,n.dz)(new n.D7("Assertion Failed")))}function l(e,t){let i=0;for(;i<e.length-1;){if(!t(e[i],e[i+1]))return!1;i++}return!0}},385123:(e,t,i)=>{i.d(t,{Jf:()=>a,o_:()=>o});var n=i(806932);let r=new(i.n(n)()),o=e=>{let t=r.parse(e,{});return(t.find(e=>"fence"===e.type&&"code"===e.tag)?.content??"").trimEnd()},a=(e,t,i)=>{let n=e.trim().match(/^\s*%([\w-]+)(\s|$)/);if(n&&n.length>=2&&["scala","python","r","sql","py","md","markdown","md-sandbox"].includes(n[1])&&!t.includes(`%${n[1]}`)&&!i.includes(`%${n[1]}`))return`%${n[1]}
${t}`;return t}},394917:(e,t,i)=>{i.d(t,{W:()=>a,f:()=>s});var n=i(141078),r=i(441535),o=i(956963);let a=()=>(0,r.W)("databricks.editor.ghostTextWorkspaceEnable",!1)&&(0,r.W)("databricks.conversation.conf.enableGhostText",!0);function s(){let e=a(),t="ghosttext-code-completion",{data:i}=(0,n.IT)(o.Y,{variables:{input:{modelNames:[t],clientId:"inline-completion"}},skip:!e||!(0,r.W)("databricks.fe.enableAssistantModelAvailabilityCheck",!1),fetchPolicy:"cache-first"}),s=(i?.conversationGetModelStatus?.modelStatuses??[]).find(e=>e.name===t);if(!s)return!1;return e&&!!s.isAvailable}},397821:(e,t,i)=>{i.d(t,{H:()=>s});var n=i(441535),r=i(77240),o=i(595615),a=i(127910);function s(e,t,i,s,l){let u=s?s.type===r.ol.CLUSTER?s.clusterId:s.type===r.ol.REDASH_SQL_WAREHOUSE?s.warehouseId:void 0:void 0,c=(0,n.W)("databricks.fe.metricViews.enableDescribeExtendedAsJson",!0);return(0,o.AO)({queryKey:["metricViewYamlWithMetadata",e,t,i,u],queryFn:()=>(0,a.zr)(e,t,i,s,c),staleTime:3e5,...l})}},488759:(e,t,i)=>{i.d(t,{W:()=>o});var n=i(36287),r=i(22967);class o{static{this.zero=new o(0,0)}static lengthDiffNonNegative(e,t){if(t.isLessThan(e))return o.zero;if(e.lineCount===t.lineCount)return new o(0,t.columnCount-e.columnCount);return new o(t.lineCount-e.lineCount,t.columnCount)}static betweenPositions(e,t){if(e.lineNumber===t.lineNumber)return new o(0,t.column-e.column);return new o(t.lineNumber-e.lineNumber,t.column-1)}static ofRange(e){return o.betweenPositions(e.getStartPosition(),e.getEndPosition())}static ofText(e){let t=0,i=0;for(let n of e)"\n"===n?(t++,i=0):i++;return new o(t,i)}constructor(e,t){this.lineCount=e,this.columnCount=t}isZero(){return 0===this.lineCount&&0===this.columnCount}isLessThan(e){if(this.lineCount!==e.lineCount)return this.lineCount<e.lineCount;return this.columnCount<e.columnCount}isGreaterThan(e){if(this.lineCount!==e.lineCount)return this.lineCount>e.lineCount;return this.columnCount>e.columnCount}isGreaterThanOrEqualTo(e){if(this.lineCount!==e.lineCount)return this.lineCount>e.lineCount;return this.columnCount>=e.columnCount}equals(e){return this.lineCount===e.lineCount&&this.columnCount===e.columnCount}compare(e){if(this.lineCount!==e.lineCount)return this.lineCount-e.lineCount;return this.columnCount-e.columnCount}add(e){if(0===e.lineCount)return new o(this.lineCount,this.columnCount+e.columnCount);return new o(this.lineCount+e.lineCount,e.columnCount)}createRange(e){if(0===this.lineCount)return new r.Q(e.lineNumber,e.column,e.lineNumber,e.column+this.columnCount);return new r.Q(e.lineNumber,e.column,e.lineNumber+this.lineCount,this.columnCount+1)}toRange(){return new r.Q(1,1,this.lineCount+1,this.columnCount+1)}addToPosition(e){if(0===this.lineCount)return new n.y(e.lineNumber,e.column+this.columnCount);return new n.y(e.lineNumber+this.lineCount,this.columnCount+1)}toString(){return`${this.lineCount},${this.columnCount}`}}},498635:(e,t,i)=>{i.a(e,async(e,n)=>{try{i.d(t,{cz:()=>c,nk:()=>l,q0:()=>u});var r=i(940912),o=i(723562),a=i(214056),s=e([a]);a=(s.then?(await s)():s)[0];let d=new Map;function l(e,t,i){var n;n=i.id,d.has(n)||d.set(i.id,{refCount:0,callbacks:new WeakMap,disposer:(0,a.Q)().addEditorAction({...i,run:(0,o.VJ)((e,...t)=>{let n=u(i.id,e);return n&&n(e,...t)},t)})});let s=d.get(i.id);return s.refCount++,s.callbacks.set(e,(0,r.yB)().wrapNoProxy(i.run)),{dispose:()=>{s.refCount--,s.callbacks.delete(e),0===s.refCount&&(s.disposer.dispose(),d.delete(i.id))}}}function u(e,t){return d.get(e)?.callbacks.get(t)}function c(){d.clear()}n()}catch(e){n(e)}})},502451:(e,t,i)=>{i.d(t,{N:()=>r});var n=i(441535);function r(){return(0,n.W)("databricks.fe.unifiedTagging.enableGetTagApiForEditorStrikethrough",!1)}},503217:(e,t,i)=>{i.a(e,async(e,n)=>{try{i.r(t),i.d(t,{CodeBlockWrapper:()=>r.G,HighlightedCode:()=>o.d,HighlightedCodeForStreaming:()=>o.O,ReadOnlyCodeBlock:()=>a.p});var r=i(981463),o=i(26150),a=i(803134),s=e([o,a]);[o,a]=s.then?(await s)():s,n()}catch(e){n(e)}})},526147:(e,t,i)=>{i.d(t,{O4:()=>n.O4,g2:()=>r.g,kh:()=>r.k,om:()=>n.om});var n=i(356579),r=i(886493)},529711:(e,t,i)=>{i.d(t,{A:()=>d,y:()=>c});var n,r=i(610435),o=i(692738),a=i(723562),s=((n=s||{})[n.RUNNING=0]="RUNNING",n[n.PAUSED=1]="PAUSED",n);let l=()=>console.error("not implemented"),u=o.createContext({clearAppSubscribers:l,getTopics:l,pauseAppSubscribers:l,publish:l,removeAll:l,resumeAppSubscribers:l,subscribe:l,subscribeOnce:l});function c({children:e}){let t=(0,o.useRef)({}),i=(0,o.useRef)({}),n=(0,a.iB)(),s=(0,o.useCallback)((e,r,o,a)=>{t.current.hasOwnProperty(e)||(t.current[e]=[]),a&&i.current.hasOwnProperty(e)&&(n(r,"sqleReact")(i.current[e]),delete i.current[e]);let s=t.current[e].push({listener:n(r,"sqleReact"),app:o,state:0})-1;return{remove:()=>{delete t.current[e][s]}}},[n]),l=(0,o.useCallback)(e=>{t.current[e]=[]},[]),d=(0,o.useCallback)((e,n)=>{if(!t.current.hasOwnProperty(e))return;t.current[e].forEach(e=>{0===e.state&&e.listener(n)}),i.current[e]=n},[]),m=(0,o.useCallback)((e,t,i)=>{let n=s(e,e=>{t(e),n.remove()},i);return n},[s]),h=(0,o.useCallback)(()=>t.current,[]),f=(0,o.useCallback)((e,i)=>{i&&Object.keys(t.current).forEach(n=>{t.current[n].forEach(t=>{t.app&&(t.app===i||t.app.split("-")[0]===i)&&(t.state=e)})})},[]),p=(0,o.useCallback)(e=>{f(1,e)},[f]),g=(0,o.useCallback)(e=>{f(0,e)},[f]),y=(0,o.useCallback)(e=>{e&&Object.keys(t.current).forEach(i=>{t.current[i]=t.current[i].filter(t=>t.app!==e)})},[]),b=(0,o.useMemo)(()=>({clearAppSubscribers:y,getTopics:h,pauseAppSubscribers:p,publish:d,removeAll:l,resumeAppSubscribers:g,subscribe:s,subscribeOnce:m}),[y,h,p,d,l,g,s,m]);return(0,r.Y)(u.Provider,{value:b,children:e})}let d=()=>(0,o.useContext)(u)},569885:(e,t,i)=>{i.d(t,{EY:()=>w,Qw:()=>k,ZP:()=>C,bA:()=>P,ns:()=>E});var n=i(692738),r=i(141078),o=i(837213),a=i(441535),s=i(169750),l=i(21994),u=i(667936),c=i(880797),d=i(267647),m=i(222006),h=i(570512),f=i(935963),p=i(607030),g=i(511022),y=i(629033);function b(e,t,i,n,r,o,a){try{var s=e[o](a),l=s.value}catch(e){i(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function v(e){return function(){var t=this,i=arguments;return new Promise(function(n,r){var o=e.apply(t,i);function a(e){b(o,n,r,a,s,"next",e)}function s(e){b(o,n,r,a,s,"throw",e)}a(void 0)})}}let E="/optimize",C="Optimize my code",k=`You are an SQL Analyst and performance expert in Databricks SQL. Your job is first to find some of the following optimizations, then propose a new SQL query in a code block with the optimizations applied.

Please use your own judgment as to whether or not you should suggest the optimizations. In particular, you must follow these guiding principles:
1. Leverage the schema of the active tables, it contains their columns names, types and if they are partitioned or not
2. You might see some examples of SQL queries, especially use their WHERE clauses and SELECT columns as inspiration
3. Check missing WHERE clause on at least one partition column, e.g. "some_partition_column = 'some_value_in_column'"
4. Check missing WHERE clause on at least one date/time column, e.g. not having "some_date_column >= date_sub(current_date(), 30)"
5. If it is a "SELECT *", propose a "SELECT" with a subset of 3-6 popular/useful columns
6. If there is no "LIMIT" propose "LIMIT 1000" to avoid returning too many rows
7. Use Common Table Expressions (CTE) on statement of more than 50 lines or doing sub queries.

Those are the guidelines when rewriting the query if you found some optimizations:
1. EDIT the SQL code with the optimizations, do not just add them as comments
2. Say you could not find optimizations if you can't find any
3. Do not change existing logic that would produce different results
4. Do not change code comments, text case, formatting that are not related to the optimizations
5. "GROUP BY ALL" is a valid SQL syntax shortcut representing all the columns in the SELECT clause
6. DO NOT list or talk about the optimization rules you did not apply in the new code

If asked for some follow-up questions here is some inspiration:
1. Propose to look at more documentation
2. Ask to analyse the query profile
3. Show how to check the query plans with the "EXPLAIN" command
`,w="optimizeCodeAgent",P=({getTablesInAllCodeBlocks:e,source:t,userId:i,...b})=>{let C=(0,r.mK)();return(0,n.useMemo)(()=>({name:w,makeContext:(0,d.x)({makeContext:({context:t={},userMessage:n,promptId:r})=>v(function*(){let{currentCodeBlock:o={language:"",code:""}}=t??{},{language:d,code:E}=o,k={index:1,sourceMap:{}},P={contextObject:t,apolloClient:C,agentName:w,userMessage:n,lakesenseTraceId:r,getTablesInAllCodeBlocks:e,citations:k,promptBuilderOptions:{isCompletion:(0,a.W)("databricks.fe.editor.enableCitationV2",!1)},...b},S={[s.E.RELEVANT_TABLE]:()=>(0,l.TN)({...P}),[s.E.USER_QUERIES]:()=>(0,u.$O)({...P,userId:i}),[s.E.NOTEBOOK_CELLS]:()=>(0,m.Bc)({...P,userId:i}),[s.E.DOCS_SEARCH]:()=>v(function*(){let e=yield(0,g.kA)({model:(0,f.f)(),messageHistory:[],newUserMessage:{role:p.oW.user,content:`The Databricks SQL query is:
\`\`\`sql
${E}
\`\`\`

In two steps:

1. Find 1 to 3 SQL query optimization areas for this particular query:

<possible optimization area 1>
<possible optimization area 2>
<possible optimization area 3>

2. Recommend a Web search query I could use to find documentations for each of those optimization areas.

Reply with only the search queries in this exact format:

<possible search query 1>
<possible search query 2>
<possible search query 3>
`},metadata:{clientId:y.O.EditorAssistant,traceId:r??"",agentName:w},stream:!1}),t=e[0].message.content?.toLowerCase().split("\n").filter(e=>""!==e.trim()).map(e=>`"${e}"`).join(" OR ")??"/optimizer optimize SQL";return(0,c.ar)({...P,query:t})})()},_=yield Promise.all(Object.values(S).map(e=>e())),T=_.filter(e=>""!==e.prompt).map(e=>e.prompt.slice(0,6e3)).join("\n");return{prompt:`Here is the sql code to optimize: 
\`\`\`${d}
${E}
\`\`\`
${T}`,citations:k,...(0,h.Az)(_)}})(),agentName:w}),userMessageMatchesAgent:e=>e.startsWith(E),extractHistory:()=>[],get model(){return(0,f.f)()},instructions:e=>k+(e.includes("gpt-4")?(0,a.W)("databricks.fe.editor.enableCitationV2",!1)?`

${o.u4}`:`

${o.nA}`:"")+(e.includes("gpt-4")?`
${o.Eq}`:""),responseFormat:(0,a.W)("databricks.fe.editor.streamingStructureOutput",!1)?S:void 0}),[C,e,b,i])},S={type:"json_schema",json_schema:{strict:!0,name:"response",schema:{type:"object",properties:{response:{type:"string",description:"Optimized code"},citations:{type:"array",items:{type:"object",properties:{url:{type:"string",description:"Url of the citation, link of the citation"},text:{type:"string",description:"Name of a citation, it can be several words that describe the citation"},type:{type:"string",description:"Type of a citation, it can be a doc, notebook, query ..."}},description:"If you cite anything in the context BEGIN_RELATED_PASSAGES part to generate the optimize code, please provide the citation here",required:["url","text","type"],additionalProperties:!1}}},required:["response","citations"],additionalProperties:!1}}}},596185:(e,t,i)=>{i.d(t,{I:()=>n,d:()=>r});let n=e=>({name:e,signature:e+"()",arguments:[],returnTypes:[],draggable:e+"()",examples:[]}),r=e=>({name:e.name,signature:`${e.name}(${e.input_params?.parameters.map(e=>e.name).join(", ")??""})`,arguments:e.input_params?.parameters.map(e=>[{name:e.name,type:e.type_name}])??[],altArguments:[],description:e.comment,body:e.routine_definition,returnTypes:e.data_type?[e.data_type]:[],returnDoc:"",draggable:`${e.name}()`,described:!1,isWindow:!1,isAggregate:!1,needsDescriptionFetched:!1,examples:[]})},628363:(e,t,i)=>{i.d(t,{I:()=>o});var n=i(692738),r=i(698744);function o({editorInstance:e,afterLineNumber:t,heightInPx:i,heightInLines:a,children:s,scrollOnRender:l,existingSelection:u}){let c=(0,n.useRef)(null),d=(0,n.useRef)({domNode:document.createElement("div"),afterLineNumber:t,heightInPx:i,heightInLines:a});return(0,n.useEffect)(()=>{d.current.afterLineNumber=t,d.current.heightInLines=a,d.current.heightInPx=i,e?.changeViewZones(({layoutZone:n})=>{null!==c.current&&(n(c.current),i&&i>1&&l?requestAnimationFrame(()=>{requestAnimationFrame(()=>{l(e,t),u&&e?.setSelection(u)})}):u&&e?.setSelection(u))})},[t,i,a,e,l,u]),(0,n.useEffect)(()=>(e?.changeViewZones(({addZone:e})=>{c.current=e(d.current)}),()=>{e?.changeViewZones(({removeZone:e})=>{null!==c.current&&(e(c.current),c.current=null)})}),[e]),(0,r.createPortal)(s,d.current.domNode)}},662013:(e,t,i)=>{i.d(t,{Fi:()=>d,Fq:()=>a,Px:()=>m,dw:()=>l,eR:()=>s,gs:()=>c,yX:()=>u});var n=i(342411),r=i(441535),o=i(921195);function a(){return!!(0,r.W)("data_gov_dashboard",null)&&(0,r.W)("databricks.fe.uc.enableGovHub",!1)}function s(){return l()&&(0,r.W)("databricks.fe.datamonitoring.dqmCatalogExplorerEntrypointEnabled",!1)}function l(){let e=(0,r.W)("dm_anomaly_detection",null)??(0,r.W)("anomaly_detection_ws",null)??(0,r.W)("databricks.datamonitoring.enableAnomalyDetection",!1);return(0,r.W)("databricks.datamonitoring.dataMonitoringEnabledForShard",!1)&&e}function u(){let e=(0,r.W)("dataclassificationws",!1)||(0,r.W)("dataclassificationv2",!1),t=(0,r.W)("databricks.dataclassification.enabledRegions",!1);return e&&t}let c={govHub:{label:(0,n.zR)({id:"In+N7F",defaultMessage:"Governance Hub"}),description:(0,n.zR)({id:"YlR3y/",defaultMessage:"Centralized data governance hub"}),url:"/settings/governance/data"},dataAdmin:{label:(0,n.zR)({id:"RmoZJl",defaultMessage:"Data Administration"}),description:(0,n.zR)({id:"B1ozy1",defaultMessage:"Manage metastore configurations"}),url:"/governance/metastore"},tagPolicies:{label:(0,n.zR)({id:"HEJw16",defaultMessage:"Governed Tags"}),description:(0,n.zR)({id:"GgHEzk",defaultMessage:"Tag usage controls"}),get url(){return(0,o.Ng)()}},manageDiscover:{label:(0,n.zR)({id:"MWi/p0",defaultMessage:"Manage Discovery"}),description:(0,n.zR)({id:"zZZqgy",defaultMessage:"Organize data assets by business area or function"}),url:"/governance/manage-discover"},dataQuality:{label:(0,n.zR)({id:"LidA53",defaultMessage:"Data Quality Monitoring"}),description:(0,n.zR)({id:"CDMKT9",defaultMessage:"Monitor quality incidents"}),url:"/governance/data-quality-monitoring"},dataClassification:{label:(0,n.zR)({id:"20rqnv",defaultMessage:"Data Classification"}),description:(0,n.zR)({id:"xp7jGj",defaultMessage:"Automatically detect sensitive data"}),url:"/governance/data-classification"}};function d(){return!!(0,r.W)("databricks.fe.uc.disableSystemTableService",!1)}function m(){return(0,r.W)("databricks.fe.uc.enableManagePermissions",!1)}},662237:(e,t,i)=>{i.d(t,{c:()=>o,r:()=>a});var n=i(141078),r=i(707076);let o=(0,n.J1)`
  query listFavoriteAssets($numFavorites: Int!, $assetTypes: [UseractivityAssetType!])
  @component(name: "Lakeview.DatabricksOne")
  @latencyBurnRateAlert(sloTarget: P99, threshold: 2000, minFailures: MIN100, alertSeverity: SEV2) {
    useractivityListFavoriteAssets(
      input: { pageSize: $numFavorites, orderBy: "favorite_time desc", filter: { types: $assetTypes } }
    ) {
      apiError {
        code
      }
      assets {
        asset {
          id
          name
          type
          treeNode {
            fullPath
          }
          unityCatalogSecurable {
            securableKind
          }
        }
        favoriteTime
      }
      recommendationTraceId
    }
  }
`;function a(e,t,i=!1){let s=(0,r.MH)(),{loading:l,data:u,error:c,refetch:d}=(0,n.IT)(o,{notifyOnNetworkStatusChange:!0,skip:i||!s,variables:{numFavorites:e,assetTypes:t}});return{loading:l,favorites:u?.useractivityListFavoriteAssets?.assets?.map(e=>{if(!e?.favoriteTime||!e?.asset?.id||!e?.asset?.name||!e?.asset?.type)return null;return{...e.asset,favoriteTime:e.favoriteTime,id:e.asset.id,name:e.asset.name,type:e.asset.type}}).filter(e=>!!e),error:u?.useractivityListFavoriteAssets?.apiError||c?.networkError,refetch:d,recommendationTraceId:u?.useractivityListFavoriteAssets?.recommendationTraceId??""}}},670874:(e,t,i)=>{i.d(t,{CJ:()=>h,F6:()=>g,Fl:()=>p,RG:()=>d,XD:()=>m,dy:()=>f,lP:()=>c});var n,r,o,a,s,l,u,c=((n={}).Empty="empty",n.Generating="generating",n.Deciding="deciding",n),d=((r={}).ChangeSuggested="Change-Suggested",r.PromptSubmitted="Prompt-Submitted",r.PromptResult="Prompt-Result",r),m=((o={}).AutoRename="autoRename",o.Generate="generate",o.Edit="edit",o.Fix="fix",o.AddComments="addComments",o.Explain="explain",o.Prettify="prettify",o.Optimize="optimize",o),h=((a={}).NoCodeResponse="NoCodeResponse",a.NaturalLanguageResponse="NaturalLanguageResponse",a),f=((s={}).Empty="empty",s.Input="input",s.Modifying="modifying",s.Generating="generating",s.Deciding="deciding",s.Error="error",s.NaturalLanguageResponse="NaturalLanguageResponse",s),p=((l={}).Inline="inline",l.Header="header",l),g=((u={}).PlaceholderLink="placeholderLink",u.LineHintLink="lineHintLink",u.SelectionWidget="selectionWidget",u.KeyboardShortcut="keyboardShortcut",u.KeyboardShortcutInline="keyboardShortcutInline",u.HeaderButton="headerButton",u.ContextMenu="contextMenu",u.EditorCommand="editorCommand",u.CellDivider="cellDivider",u)},723562:(e,t,i)=>{i.d(t,{DQ:()=>S,Er:()=>P,H6:()=>T,PD:()=>k,VJ:()=>A,iB:()=>x});var n=i(610435),r=i(944464),o=i.n(r),a=i(692738),s=i(336330),l=i(876726),u=i(140078),c=i(342411),d=i(441535),m=i(726977),h=i(278983),f=i(863708),p=i(22191),g=i(782357);let y={notebookEditor:m.s.UnifiedEditorNotebookEditor,notebookDiffViewer:m.s.UnifiedEditorNotebookDiffViewer,jobsEditor:m.s.UnifiedEditorJobsEditor,lakebuilderEditor:m.s.UnifiedEditorLakebuilderEditor,lakeviewEditor:m.s.UnifiedEditorLakeviewEditor,repoGitDiffCode:m.s.UnifiedEditorRepoGitDiffCode,repoGitMergeConflict:m.s.UnifiedEditorRepoGitMergeConflict,sqleReact:m.s.UnifiedEditorSqleReact,test:m.s.Test,storybook:m.s.Storybook,sqleAutocomplete:m.s.UnifiedEditorSqleAutocomplete,sqleFixme:m.s.UnifiedEditorSqleFixme,sqleDetails:m.s.UnifiedEditorSqleDetails,assistantCell:m.s.AssistantCell,assistantInput:m.s.AssistantPanel,jobsValueReferencesEditor:m.s.JobsUiRoot,dataRoomsEditor:m.s.DataRoomsRoot,playgroundEditor:m.s.PlaygroundChat,standaloneAlerts:m.s.StandaloneAlerts,ingestionPipelineEditor:m.s.IngestionPageWrapper,cleanroomNotebookContentView:m.s.CleanRoomNotebookContentView,lakeflowSettings:m.s.LakeflowPipelineAuthoringSettingsPanel,lakeviewCustomCalcExpressionEditor:m.s.UnifiedEditorLakeviewCustomCalcExpressionEditor,antlrIntellisense:m.s.UnifiedEditorAntlrIntellisense,staticNotebookEditor:m.s.UnifiedEditorStaticNotebookEditor,systemModule:m.s.UnifiedEditorSystemModule,lakeflowConversionWidget:m.s.UnifiedEditorLakeflowConversionWidget,clusterEditor:m.s.UnifiedEditorClusterEditor,sampleDataSQLEditor:m.s.UnifiedEditorSampleDataSqlEditor,policyFunctionEditor:m.s.UnifiedEditorPolicyFunctionEditor,lakewatchEditor:m.s.UnifiedEditorLakewatchEditor,lakewatchJsonEditor:m.s.UnifiedEditorLakewatchJsonEditor,lakewatchYamlEditor:m.s.UnifiedEditorLakewatchYamlEditor,mlflowEvalDatasetsJsonEditor:m.s.UnifiedEditorMlflowEvalDatasetsJsonEditor,dynamicWidgetSourceQueryEditor:m.s.DynamicWidgetSourceQueryEditor,richSqlEditor:m.s.UnifiedEditorRichSqlEditor},b=["No React Error Decoder link found","can't access dead object","Loading chunk"];function v(e){let t=e instanceof Error?e.message:String(e);return b.some(e=>t.match(e))}function E(e,t,i){(0,h.y)("clientsideEvent",{eventType:e,eventName:t},i)}let C=o()(E,3e4);function k(e,t,i){let n=t instanceof Error?t.message:String(t);((0,d.W)("databricks.fe.editor.throttleRecordUnifiedEditorError",!1)?C:E)(void 0===i?"UnifiedEditorCaughtError":"UnifiedEditorErrorBoundary",e,n)}function w(){return(0,n.Y)(l.S,{"data-testid":"fallback",title:(0,n.Y)(c.sA,{id:"qAdWdK",defaultMessage:"Error"}),description:(0,n.Y)(c.sA,{id:"kcl7GO",defaultMessage:"An error occurred while rendering this editor."}),image:(0,n.Y)(u.A,{})})}let P=({module:e,children:t})=>{let i=y[e];return(0,n.Y)(f.JR,{fallback:(0,n.Y)(w,{}),esComponent:p.Es.Editor,errorBoundaryId:i,errorFilter:v,onErrorCallback:(t,i)=>k(e,t,i.componentStack),children:t})},S=()=>{let{showErrorNotification:e}=(0,a.useContext)(g.h);return(0,a.useCallback)((t,i,n)=>{k(t,i,n),e(t)},[e])},_=()=>null,T=(e,t)=>(0,a.forwardRef)((i,r)=>{let o=S();return(0,n.Y)(s.tH,{fallback:(0,n.Y)(_,{}),onError:(e,i)=>o(t,e,i.componentStack),children:(0,n.Y)(e,{ref:r,...i})})}),x=()=>{let e=S();return(0,a.useCallback)((t,i)=>(...n)=>{try{return t(...n)}catch(t){e(i,t)}},[e])},A=(e,t)=>(...i)=>{try{return e(...i)}catch(e){k(t,e)}}},743603:(e,t,i)=>{i.a(e,async(e,n)=>{try{i.d(t,{O:()=>l});var r=i(692738),o=i(698744),a=i(214056),s=e([a]);a=(s.then?(await s)():s)[0];let l=({editorInstance:e,placeholder:t,isEnabled:i,showOnlyWhenFocused:n})=>{let s=(0,r.useRef)(null),l=(0,r.useCallback)(e=>{if(!s.current){let i=document.createElement("div");i.setAttribute("style",e),i.setAttribute("class","monaco-placeholder"),(0,o.render)(t,i),s.current=i}let i=s.current;return{getId:()=>"placeholder",suppressMouseDown:!0,getDomNode:()=>i,getPosition:()=>({position:{column:1,lineNumber:1},positionAffinity:4,preference:[0]})}},[t]),u=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(e&&i){let t=()=>{u.current&&e.removeContentWidget(u.current),u.current=null},i=()=>{if(!e.getValue()&&(!n||e.hasTextFocus()))if(u.current)e.layoutContentWidget(u.current);else{let t=l(`width: max-content;
color: var(--vscode-input-placeholderForeground);
line-height: ${e.getOption((0,a.Q)().EditorOption.lineHeight)}px;
font-size: ${e.getOption((0,a.Q)().EditorOption.fontSize)}px;
font-family: ${e.getOption((0,a.Q)().EditorOption.fontFamily)};
`);e.addContentWidget(t),u.current=t}else t()};(!n||e.hasTextFocus())&&i();let r=[];return r.push(e.onDidFocusEditorText(()=>i())),r.push(e.onDidBlurEditorText(()=>i())),r.push(e.onDidChangeModelContent(()=>{i()})),()=>{r.forEach(e=>e.dispose()),t(),s.current&&((0,o.unmountComponentAtNode)(s.current),s.current=null)}}},[e,i,l,n]),{placeholderWidgetRef:u}};n()}catch(e){n(e)}})},780092:(e,t,i)=>{i.d(t,{r:()=>m});var n=i(692738),r=i(483588),o=i(234969),a=i(158555),s=i(662237),l=i(660618),u=i(641760),c=i(927811);let d=["recents","favorites","home"];function m({enabled:e=!1,dedupPriority:t=d}={}){let i=!e,{recents:h,loading:f}=(0,o.C)({selectableTypes:[a.h8.VOLUME],skip:i}),{favorites:p,loading:g}=(0,s.r)(5,[r.z$1.UC_VOLUME],i),y=(0,u.pC)(),{data:b,isLoading:v}=(0,c.Y)({enabled:e&&y}),E=(0,n.useMemo)(()=>{if(!b?.name)return;let e=b.name;return{full_name:`${e}.${l.E2}.${l.$3}`,name:l.$3,catalog_name:e,schema_name:l.E2,securable_type:a.h8.VOLUME,securable_kind:r.T_5.VOLUME_STANDARD}},[b]),C=(0,n.useMemo)(()=>(p??[]).map(e=>{let[t,i,n]=e.name.split(".");return{full_name:e.name,name:n,catalog_name:t,schema_name:i,securable_type:a.h8.VOLUME,securable_kind:r.T_5.VOLUME_STANDARD}}),[p]),k=(0,n.useMemo)(()=>(h??[]).filter(e=>"VOLUME"===e.securable_type),[h]),{home:w,recents:P,favorites:S}=(0,n.useMemo)(()=>{let e=new Set,i={home:[],recents:[],favorites:[]},n={home:E?[E]:[],recents:k,favorites:C};for(let r of t){let t=n[r].filter(t=>!e.has(t.full_name??""));for(let i of t)i.full_name&&e.add(i.full_name);i[r]=t}return i},[E,k,C,t]);return{homeVolume:w[0],favoriteVolumes:S,recentVolumes:P,isLoading:f||g||e&&y&&v,recentsLoading:f,favoritesLoading:g,homeCatalogLoading:v}}},782357:(e,t,i)=>{i.d(t,{F:()=>l,h:()=>s});var n=i(610435),r=i(692738),o=i(258182),a=i(342411);let s=r.createContext({showErrorNotification:()=>{}}),l=({children:e})=>{let[t,i]=(0,r.useState)(null),a=(0,r.useCallback)(e=>i(e),[]);return(0,n.Y)(o.Provider,{children:(0,n.FD)(s.Provider,{value:{showErrorNotification:a},children:[e,(0,n.Y)(u,{module:t,setModule:i}),(0,n.Y)(o.Viewport,{})]})})},u=({module:e,setModule:t})=>(0,n.FD)(o.Root,{componentId:"codegen_editor_src_utils_components_errornotification.tsx_48",onOpenChange:e=>{e||t(null)},open:null!==e,severity:"error",duration:3e3,children:[(0,n.Y)(o.Title,{children:(0,n.Y)(a.sA,{id:"5By2Yp",defaultMessage:`Something went wrong with {module, select,
            sqleAutocomplete {SQL autocomplete}
            sqleFixme {SQL error highlighting}
            sqleDetails {SQL hover details}
            other {the editor}
          }.`,values:{module:e}})}),(0,n.Y)(o.Close,{componentId:"codegen_editor_src_utils_components_errornotification.tsx_61"})]})},785582:(e,t,i)=>{i.d(t,{m:()=>n});class n extends Promise{onCancel;cancelPrevented;completed;cancelled;constructor(e){let t,i=!1;super((n,r)=>e(e=>{i=!0,n(e)},e=>{i=!0,r(e)},e=>t=e)),this.onCancel=t,this.completed=()=>i}cancel(){this.completed()||this.cancelled||this.cancelPrevented||(this.onCancel&&this.onCancel(),this.cancelled=!0)}preventCancel(){this.cancelPrevented=!0}static reject(e){return new n((t,i)=>{i(e)})}static resolve(e){return new n(t=>{t(e)})}}},859508:(e,t,i)=>{i.d(t,{C:()=>o});var n=i(692738),r=i(967166);function o(){let e=(0,r.hG)(),t=(0,n.useRef)(e);return(0,n.useCallback)((e,i)=>{t.current({catalog_explorer_ui_log:{event_name:e,event_payload:i}})},[])}},860097:(e,t,i)=>{var n=i(389527);function r(e,t,i,n,r){this.mid=e,this.left=t,this.right=i,this.leftPoints=n,this.rightPoints=r,this.count=(t?t.count:0)+(i?i.count:0)+n.length}e.exports=function(e){if(!e||0===e.length)return new y(null);return new y(g(e))};var o=r.prototype;function a(e,t){e.mid=t.mid,e.left=t.left,e.right=t.right,e.leftPoints=t.leftPoints,e.rightPoints=t.rightPoints,e.count=t.count}function s(e,t){var i=g(t);e.mid=i.mid,e.left=i.left,e.right=i.right,e.leftPoints=i.leftPoints,e.rightPoints=i.rightPoints,e.count=i.count}function l(e,t){var i=e.intervals([]);i.push(t),s(e,i)}function u(e,t){var i=e.intervals([]),n=i.indexOf(t);if(n<0)return 0;return i.splice(n,1),s(e,i),1}function c(e,t,i){for(var n=0;n<e.length&&e[n][0]<=t;++n){var r=i(e[n]);if(r)return r}}function d(e,t,i){for(var n=e.length-1;n>=0&&e[n][1]>=t;--n){var r=i(e[n]);if(r)return r}}function m(e,t){for(var i=0;i<e.length;++i){var n=t(e[i]);if(n)return n}}function h(e,t){return e-t}function f(e,t){var i=e[0]-t[0];if(i)return i;return e[1]-t[1]}function p(e,t){var i=e[1]-t[1];if(i)return i;return e[0]-t[0]}function g(e){if(0===e.length)return null;for(var t=[],i=0;i<e.length;++i)t.push(e[i][0],e[i][1]);t.sort(h);for(var n=t[t.length>>1],o=[],a=[],s=[],i=0;i<e.length;++i){var l=e[i];l[1]<n?o.push(l):n<l[0]?a.push(l):s.push(l)}var u=s.slice();return s.sort(f),u.sort(p),new r(n,g(o),g(a),s,u)}function y(e){this.root=e}o.intervals=function(e){return e.push.apply(e,this.leftPoints),this.left&&this.left.intervals(e),this.right&&this.right.intervals(e),e},o.insert=function(e){var t=this.count-this.leftPoints.length;if(this.count+=1,e[1]<this.mid)this.left?4*(this.left.count+1)>3*(t+1)?l(this,e):this.left.insert(e):this.left=g([e]);else if(e[0]>this.mid)this.right?4*(this.right.count+1)>3*(t+1)?l(this,e):this.right.insert(e):this.right=g([e]);else{var i=n.ge(this.leftPoints,e,f),r=n.ge(this.rightPoints,e,p);this.leftPoints.splice(i,0,e),this.rightPoints.splice(r,0,e)}},o.remove=function(e){var t=this.count-this.leftPoints;if(e[1]<this.mid){if(!this.left)return 0;if(4*(this.right?this.right.count:0)>3*(t-1))return u(this,e);var i=this.left.remove(e);if(2===i)return this.left=null,this.count-=1,1;return 1===i&&(this.count-=1),i}if(e[0]>this.mid){if(!this.right)return 0;if(4*(this.left?this.left.count:0)>3*(t-1))return u(this,e);var i=this.right.remove(e);if(2===i)return this.right=null,this.count-=1,1;return 1===i&&(this.count-=1),i}if(1===this.count)if(this.leftPoints[0]===e)return 2;else return 0;if(1===this.leftPoints.length&&this.leftPoints[0]===e){if(this.left&&this.right){for(var r=this,o=this.left;o.right;)r=o,o=o.right;if(r===this)o.right=this.right;else{var s=this.left,i=this.right;r.count-=o.count,r.right=o.left,o.left=s,o.right=i}a(this,o),this.count=(this.left?this.left.count:0)+(this.right?this.right.count:0)+this.leftPoints.length}else this.left?a(this,this.left):a(this,this.right);return 1}for(var s=n.ge(this.leftPoints,e,f);s<this.leftPoints.length&&this.leftPoints[s][0]===e[0];++s)if(this.leftPoints[s]===e){this.count-=1,this.leftPoints.splice(s,1);for(var i=n.ge(this.rightPoints,e,p);i<this.rightPoints.length;++i)if(this.rightPoints[i][1]!==e[1])break;else if(this.rightPoints[i]===e)return this.rightPoints.splice(i,1),1}return 0},o.queryPoint=function(e,t){if(e<this.mid){if(this.left){var i=this.left.queryPoint(e,t);if(i)return i}return c(this.leftPoints,e,t)}if(!(e>this.mid))return m(this.leftPoints,t);if(this.right){var i=this.right.queryPoint(e,t);if(i)return i}return d(this.rightPoints,e,t)},o.queryInterval=function(e,t,i){if(e<this.mid&&this.left){var n=this.left.queryInterval(e,t,i);if(n)return n}if(t>this.mid&&this.right){var n=this.right.queryInterval(e,t,i);if(n)return n}if(t<this.mid)return c(this.leftPoints,t,i);if(e>this.mid)return d(this.rightPoints,e,i);return m(this.leftPoints,i)};var b=y.prototype;b.insert=function(e){this.root?this.root.insert(e):this.root=new r(e[0],null,null,[e],[e])},b.remove=function(e){if(this.root){var t=this.root.remove(e);return 2===t&&(this.root=null),0!==t}return!1},b.queryPoint=function(e,t){if(this.root)return this.root.queryPoint(e,t)},b.queryInterval=function(e,t,i){if(e<=t&&this.root)return this.root.queryInterval(e,t,i)},Object.defineProperty(b,"count",{get:function(){if(this.root)return this.root.count;return 0}}),Object.defineProperty(b,"intervals",{get:function(){if(this.root)return this.root.intervals([]);return[]}})},886493:(e,t,i)=>{i.d(t,{g:()=>o,k:()=>a});var n=i(102876),r=i(356579);let o=()=>{let[e,t]=(0,r.O4)(e=>[e.getSyntaxParseResultFromCache,e.setSyntaxParseResultInCache],n.x);return[e,t]},a=()=>{let[e,t]=(0,r.O4)(e=>[e.getTokenParseResultFromCache,e.setTokenParseResultInCache],n.x);return[e,t]}},930355:(e,t,i)=>{i.d(t,{j:()=>f});var n=i(610435),r=i(692738),o=i(545251),a=i(305404),s=i(994796),l=i(332702),u=i(497895),c=i(201828),d=i(79570),m=i(174541);let h=(0,r.forwardRef)(({value:e,checked:t,indeterminate:i,onChange:r,children:h,disabledReason:f,_TYPE:p,...g},y)=>{let{theme:b}=(0,u.wn)(),{textOverflowMode:v,contentWidth:E,disableMouseOver:C,setDisableMouseOver:k}=(0,o.w)(),{isInsideDialogComboboxOptionList:w,setLookAhead:P,lookAhead:S}=(0,a.r)();if(!w)throw Error("`DialogComboboxOptionListCheckboxItem` must be used within `DialogComboboxOptionList`");let _=t=>{r&&r(e,t)},T=h??e;return g.disabled&&f&&(T=(0,n.FD)("div",{css:{display:"flex"},children:[(0,n.Y)("div",{children:T}),(0,n.Y)("div",{css:{display:"flex"},children:(0,n.Y)(d.m,{componentId:"dialog-combobox-option-list-checkbox-item-disabled-reason-tooltip",content:f,side:"right",children:(0,n.Y)("span",{css:[(0,m.eO)(b),{display:"flex",alignItems:"center",alignSelf:"flex-start",marginTop:b.spacing.xs/2}],children:(0,n.Y)(c.A,{"aria-label":"Disabled status information","aria-hidden":"false"})})})})]})),(0,n.Y)("div",{ref:y,role:"option","aria-selected":!i&&t,css:[(0,m.RB)(b)],...g,onClick:e=>{g.disabled?e.preventDefault():_(e)},tabIndex:-1,...(0,s.Js)(_,{onKeyDown:g.onKeyDown,onMouseEnter:g.onMouseEnter,onDefaultKeyDown:e=>(0,s.pY)(e,P,S),disableMouseOver:C,setDisableMouseOver:k}),children:(0,n.Y)(l.Sc,{componentId:"codegen_design-system_src_design-system_dialogcombobox_dialogcomboboxoptionlistcheckboxitem.tsx_86",disabled:g.disabled,isChecked:i?null:t,css:[(0,m.WS)(b,v),E?{"& > span:last-of-type":{width:(0,s.x9)(b,E)}}:{}],tabIndex:-1,onClick:e=>{e.stopPropagation(),_(e)},children:(0,n.Y)("div",{css:{maxWidth:"100%"},children:T})})})});h.defaultProps={_TYPE:"DialogComboboxOptionListCheckboxItem"};let f=h},956963:(e,t,i)=>{i.d(t,{Y:()=>r});var n=i(141078);let r=(0,n.J1)`
  query ConversationModelStatus($input: ConversationGetModelStatusRequestInput!)
  @component(name: "Workspace.Assistant") {
    conversationGetModelStatus(input: $input) {
      modelStatuses {
        isAvailable
        name
      }
      apiError {
        code
        message
      }
    }
  }
`},976477:(e,t,i)=>{i.d(t,{$e:()=>C,Cc:()=>E,JE:()=>b,_S:()=>y,fh:()=>k,vd:()=>v});var n=i(692738),r=i(141078),o=i(278983),a=i(837213),s=i(441535),l=i(169750),u=i(21994),c=i(267647),d=i(667936),m=i(222006),h=i(570512),f=i(377936),p=i(935963);function g(e,t,i,n,r,o,a){try{var s=e[o](a),l=s.value}catch(e){i(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}let y="optimizeProfileAgent",b="/analyze",v="Analyze my profile",E=`You are a Databricks experienced data engineer who is debugging Databricks SQL queries and Python Spark DataFrames to find possible speed optimizations.

<<<Guidelines for Optimizations>>
You have access to the Query Profile top level metrics.

The top level metrics to size the query are:
- "rowsReadCount", "readBytes" (in general 10GB or less is not much data worth mentioning), "readPartitionsCount", "readFilesCount"
- If "totalTimeMs" is under 10000, we can still find optimizations but keep in mind the query is not that big
- If present, the "Costliest Query Operators" will tell in percentage which operations are taking the most time, memory or number of rows (more than 70% is worth mentioning)

The Optimization opportunities we are looking for are in priority:
1. Only related to scans and by modifying the query to read less data:
- Partitions skipped ("readPartitionsCount", "totalPartitionsCount") - do we still read too many partitions?
- Files skipped ("readFilesCount", "totalFilesCount", "prunedFilesCount") - are we still reading too many files?
- Bytes pruned ("readBytes", "prunedBytes") - are still reading too much data?
2. If the first "Costliest Query Operators" are not all "Scan Table", we can suggest optimizations on them
4. Focuses in particular on the WHERE clauses.
3. Never recommend to create indexes, materialized views, or any other database objects

<<<Guidelines for reply message>>
Explain if you see bad scan patterns and suggest optimizations.
- If the query is reading from cache, JUST SAY SO and say you cannot suggest optimizations (otherwise say nothing about it).
- Do not cite any of the Query Profile "metric names" or "Costliest Query Operators", just explain them in human terms (but CITE them as Query Profile relevant contexts).
- Be concise and only talk about optimization opportunities that you have data to back up.
- Use the higher up KB, MB, GB, TB instead of bytes to make it easier to read for humans.
- Have at least one Query Profile citation.

Please use your own judgment as to whether or not you should suggest a new SQL optimized query. In particular, you must follow these guiding principles:
1. Leverage the schema of the active tables, it contains their columns names, types and if they are partitioned or not
2. You might see some examples of SQL queries, especially use their WHERE clauses as inspiration
3. Do not change existing logic that would produce different results
4. Do not change code comments, text case, formatting that are not related to the optimizations

If asked for some follow-up questions and you need inspiration:
1. Recommend more aggressive filters if possible, especially on the partition columns, dates, or other columns with high cardinality
2. For metrics sometimes without a value (e.g. totalPartitionsCount is null), explain the user how to find them
3. Manually inspect more metrics in the query profile panel
`,C=`
You are a Databricks-experienced data engineer specializing in query performance optimization for Databricks SQL and Spark DataFrame workloads.

Your goal: analyze the provided Query Profile and Query Insights to find concrete optimization opportunities focused on reducing data scanned, avoiding expensive operators, and improving WHERE clauses — without changing query logic.

---

<<<Guidelines for Optimization Reasoning>>>

You have access to:
- Query Profile top-level metrics:
  - rowsReadCount, readBytes, readPartitionsCount, readFilesCount
  - Queries under 10 GB read or 10 s runtime are small but can still be optimized.
- Costliest Query Operators:
  - If one operator takes >70% of total time or memory, mention it.
- Query Insights:
  - Automated Databricks recommendations. Always address these first.

Optimization priorities:
1) Query Insights (system recommendations)
   - Each insight includes a suggested action — restate it clearly.
   - Merge any metric-based evidence that supports the same recommendation.
   - Always cite as Query Insight with the provided citation format.
2) Scan-related metrics
   - Look for unskipped partitions, files, or bytes.
   - Discuss whether pruning can be improved via WHERE clause filters.
3) Non-scan operators (e.g., join, aggregation)
   - Only mention if they dominate total runtime.
4) WHERE clause review
   - Suggest tighter filters using existing columns, especially partition columns.
5) Never suggest indexes, materialized views, or any other database objects.

---

<<<Guidelines for Reply Message>>>

Overall structure:
- Output must be in structured bullet points only (no paragraphs). Each bullet must be short, specific, and human-readable.
- Follow the outline below. If no findings exist for a section, omit that section entirely.
- If no Query Insights available, skip the first section and start with Metrics & Scan Patterns.

Output template:
## Query Insights
- Each insight must have its **own bullet point** and a short recommended action.
- Write in the format:
  Observation. → Recommendation.
  Example:
  Partition key unfiltered on birthDate. → Add a filter on birthDate to enable partition pruning and reduce scanned data.
  Optimizer statistics are partial. → Allow predictive optimization to collect stats or trigger manual ANALYZE if needed.
- If metrics support the same insight, merge the metric evidence into the corresponding insight bullet point (e.g., "supported by metrics showing 80% of data read unnecessarily").

## Metrics & Scan Patterns
- [Metric-based findings not already merged with insights, written as: Observation. → Recommendation.]

## Other Observations
- [Optional notes on join, aggregation, or filter logic, written in the same format.]

Merging rules (critical):
- Before generating output, compare all metric findings against the Query Insights.
- If both point to the same optimization (e.g., pruning partitions, filtering dates, skipping small files):
  - Merge them into the Query Insights section only.
- Do not repeat similar content in Metrics & Scan Patterns.

Tone and precision:
- Use human-readable units (KB, MB, GB, TB).
- Avoid using negative terms towards the systems, like "bad", "poor", "limitation" or "inefficient".
- Include at least one Query Profile citation.
- If the query reads from cache, state that and stop — do not continue.
- Do not mention metric or operator names literally; describe them in plain terms.
- Maintain consistent “Observation. → Recommendation.” phrasing in every bullet point.

---

<<<New SQL Optimized Query>>>

If you identified any optimization opportunity that can be safely expressed as a SQL rewrite, you need to output an optimized query. If not, skip this section.

Rules:
- Preserve identical logic and final output (no semantic change).
- You may tighten WHERE clauses, modify function parameter, replace functions, add missing partition filters, or apply safe join/order hints.
  - For partition filters, look at column names and types to be more specific. Do not suggest things like "IS NOT NULL"
- Keep all comments, casing, and formatting.

---

<<<Follow-up Questions (if asked)>>>

- Suggest stronger filters on partitions or dates.
- Explain how to check missing metrics (e.g., totalPartitionsCount).
- Guide the user to manually inspect Query Profile panels.

---

<<<Goal>>>

Deliver concise, sectioned, bullet-pointed recommendations that are:
- Grounded in Query Insights and Profile data.
- Merged intelligently to avoid duplication.
- Include a New SQL Optimized Query when applicable.
`,k=({getTablesInAllCodeBlocks:e,source:t,userId:v,...k})=>{let w=(0,r.mK)();return(0,n.useMemo)(()=>({name:y,makeContext:(0,c.x)({makeContext:({context:t={},userMessage:n,promptId:r})=>{var a;return(a=function*(){let{currentCodeBlock:a={language:"",code:""}}=t??{},{language:c,code:p}=a,g={index:1,sourceMap:{}},{getQueryProfileContext:b,getQueryInsightsContext:E}=yield(()=>{let e=()=>Promise.all([i.e(62280),i.e(62394),i.e(62621),i.e(25230),i.e(84904),i.e(66537)]).then(i.bind(i,731261));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(731261,"../context/configurableContext","lazy",e);return e()})(),C=/^\/analyze Query [0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(n||""),P=[];C&&(P=n?.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i)||[],(0,o.y)("clientsideEvent",{eventType:"optimize-profile",eventName:`analyze-${P.slice(0,1).join(",")}`,lakesenseTraceId:r,source:c}));let S={contextObject:t,apolloClient:w,agentName:y,userMessage:n,lakesenseTraceId:r,statementIds:P,getTablesInAllCodeBlocks:e,citations:g,promptBuilderOptions:{isCompletion:(0,s.W)("databricks.fe.editor.enableCitationV2",!1)},...k},_={[l.E.RELEVANT_TABLE]:()=>(0,u.TN)({...S}),[l.E.QUERY_PROFILE]:()=>b({...S}),[l.E.USER_QUERIES]:()=>(0,d.$O)({...S,userId:v}),[l.E.NOTEBOOK_CELLS]:()=>(0,m.Bc)({...S,userId:v})};(0,f.Yg)()&&(_[l.E.QUERY_INSIGHTS]=()=>E({...S}));let T=yield Promise.all(Object.values(_).map(e=>e())),x=T.filter(e=>""!==e.prompt).map(e=>e.prompt.slice(0,6e3)).join("\n");return{prompt:`Here is the code to optimize: 
\`\`\`${c}
${p}
\`\`\`
${x}`,citations:g,...(0,h.Az)(T)}},function(){var e=this,t=arguments;return new Promise(function(i,n){var r=a.apply(e,t);function o(e){g(r,i,n,o,s,"next",e)}function s(e){g(r,i,n,o,s,"throw",e)}o(void 0)})})()},agentName:y}),userMessageMatchesAgent:e=>e.startsWith(b),extractHistory:()=>[],get model(){return(0,p.f)()},instructions:e=>((0,f.Yg)()?C:E)+(e.includes("gpt-4")?(0,s.W)("databricks.fe.editor.enableCitationV2",!1)?`

${a.u4}`:`

${a.nA}`:"")+(e.includes("gpt-4")?`
${a.Eq}`:"")}),[w,e,k,v])}},977532:(e,t,i)=>{i.a(e,async(e,n)=>{try{i.d(t,{o:()=>s});var r=i(124235),o=i(83722),a=e([o]);function s(){let e=null;return{setup:({editorInstance:t})=>{let i,n=t._standaloneKeybindingService,a=(i=!(0,r.f8)(),(0,o.d)().flatMap(({command:e,keybindings:t,keybindingsOnWindows:n})=>(n&&i?n:t??[]).map(t=>({keybinding:t,command:"-"+e})))).filter(e=>(function(e,t){if(t?._dynamicKeybindings?.some?.(t=>t.command===e.command))return!1;return!0})(e,n));a.length>0&&(e=n.addDynamicKeybindings(a))},tearDown:()=>e?.dispose?.()}}o=(a.then?(await a)():a)[0],n()}catch(e){n(e)}})},986291:(e,t,i)=>{i.d(t,{G:()=>n});let n=(0,i(480006).u1)("themeService")}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/60051.cad836e0bf.chunk.js.map