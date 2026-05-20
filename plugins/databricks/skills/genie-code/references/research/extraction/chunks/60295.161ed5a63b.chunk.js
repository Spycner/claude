"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[10740,60295],{16589:(e,t,a)=>{a.d(t,{Hq:()=>E,IA:()=>A,oA:()=>g});var r=a(692738);if(13057==a.j)var n=a(817148);if(13057==a.j)var o=a(115957);var i=a(441535),s=a(141078),l=a(690037),c=a(833161),d=a(483588),u=a(255844),m=a(707076),f=a(948555),p=a(889054);let g=()=>{let e=(0,i.W)("databricks.userActivity.conf.enablePipelinesInRecentsFrontend",!1),t=(0,u.zs)(),a=[d.z$1.ALERT,d.z$1.ALERT_V2,d.z$1.APP,d.z$1.APP_USE,d.z$1.DASHBOARD,d.z$1.DASHBOARD_V3,d.z$1.DATA_ROOM,d.z$1.ENDPOINT,d.z$1.ENDPOINT_CENTRIC_ENDPOINT,d.z$1.EXPERIMENT,d.z$1.FEATURE_TABLE,d.z$1.FILE,d.z$1.FOLDER,d.z$1.JOB,d.z$1.LIBRARY,d.z$1.MODEL,d.z$1.NOTEBOOK,d.z$1.PROJECT,d.z$1.QUERY,d.z$1.UC_CATALOG,d.z$1.UC_SCHEMA,d.z$1.UC_TABLE,d.z$1.UC_MODEL,d.z$1.UC_VOLUME,d.z$1.UC_FUNCTION,d.z$1.MARKETPLACE_LISTING,d.z$1.DESIGNER_FILE];return e&&(a.push(d.z$1.PIPELINE),t&&a.push(d.z$1.PIPELINE_EDITOR)),a},E=e=>{let t=(0,i.W)("databricks.userActivity.conf.enablePipelinesInRecentsFrontend",!1),a=(0,i.W)("databricks.fe.userActivity.enableAppsInRecents",!1),r=(0,u.zs)(),s=(0,i.W)("designer",!1)&&(0,i.W)("databricks.fe.lakebuilder.enableDesignerFile",!1)&&(0,i.W)("databricks.lakebuilder.enableDesignerFileRecentRegistry",!1),l=e.workspace.allowed,c=e.redash.allowed,m=[];return c&&m.push(d.z$1.ALERT,d.z$1.DASHBOARD_V3,d.z$1.QUERY),l&&m.push(d.z$1.ENDPOINT,d.z$1.ENDPOINT_CENTRIC_ENDPOINT,d.z$1.EXPERIMENT,d.z$1.FEATURE_TABLE,d.z$1.FILE,d.z$1.LIBRARY,d.z$1.MODEL,d.z$1.NOTEBOOK),(l||c)&&m.push(d.z$1.JOB),m.push(d.z$1.UC_CATALOG,d.z$1.UC_SCHEMA,d.z$1.UC_TABLE,d.z$1.UC_MODEL,d.z$1.UC_VOLUME,d.z$1.UC_FUNCTION),l&&t&&(0,o.zl)(n.g3.PIPELINES)&&(m.push(d.z$1.PIPELINE),r&&m.push(d.z$1.PIPELINE_EDITOR)),c&&(0,o.zl)(n.g3.GENIE)&&m.push(d.z$1.DATA_ROOM),l&&a&&(0,o.zl)(n.g3.APPS)&&m.push(d.z$1.APP),c&&(0,o.zl)(n.g3.ALERTS)&&m.push(d.z$1.ALERT_V2),l&&s&&m.push(d.z$1.DESIGNER_FILE),m},A=(e,t,a=!1,n="no-cache")=>{let o=(0,m.MH)();void 0===t&&(t=(0,c.q)());let{loading:i,data:d}=(0,s.IT)(f.s,{skip:!o||a,variables:{count:e,...t&&{filter:{types:t.filter(e=>void 0!==e)}}},fetchPolicy:n}),{isLoading:u,data:g}=(0,l.k)({assetTypes:t?.map(e=>p.eH[e]).filter(e=>void 0!==e),numRecents:e,queryOptions:{enabled:!o&&!a}}),E=d?.useractivityListRecentAssets?.assets,A=(0,r.useMemo)(()=>E?.map(e=>({id:e.asset.id,name:e.asset.name,type:p.eH[e.asset.type],lastAccessedTimestamp:parseInt(e.viewTime),ucSecurableKind:e.asset.unityCatalogSecurable?.securableKind})).filter(e=>e.type),[E]);return{isLoading:o?i:u,data:o?A:g,hasMoreData:!o||!!d?.useractivityListRecentAssets?.nextPageToken}}},37844:(e,t,a)=>{a.d(t,{X:()=>i});var r=a(889620),n=a(485669),o=a(889900);function i({includeContext:e=!1}={}){if(e)return`${o.Q8}?${n.bJ}=${r.H.WORKSPACE.id}`;return o.Q8}},108167:(e,t,a)=>{a.d(t,{$G:()=>L,CJ:()=>N,Dm:()=>Y,Dn:()=>M,EF:()=>B,G$:()=>k,IX:()=>x,Ll:()=>y,Lr:()=>O,Sq:()=>z,bu:()=>_,cJ:()=>I,eo:()=>$,gW:()=>S,jV:()=>w,p8:()=>F,v8:()=>R,vX:()=>D});var r,n=a(610435),o=a(16778),i=a.n(o),s=a(692738),l=a(955897),c=a(342411),d=a(441535),u=a(967166),m=a(5697),f=a(707076),p=a(210785),g=a(141078),E=a(921195),A=a(660618),b=a(873092),h=a(611824),T=a(425628),v=a(765288);function P(e,t,a,r,n,o,i){try{var s=e[o](i),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}let R=/^$|^\S(?:.*\S)?$/,I={key:void 0,value:""};function y(e){return e.reduce((e,t)=>(e[t.key]=t,e),{})}function O(e){let{discoveryTags:t,governedTags:a,governedTagKeys:r}=e.reduce((e,t)=>("string"==typeof t?e.discoveryTags.push({name:t,type:p.P.DISCOVERY}):(e.governedTags.push({name:t.key,type:p.P.GOVERNED,tagId:t.id,allowedValues:t.values?.map(e=>e.name),namespace:t.namespace}),e.governedTagKeys.add(t.key)),e),{governedTags:[],governedTagKeys:new Set,discoveryTags:[]}),n=t.filter(({name:e})=>!r.has(e));return a.concat(n).sort((e,t)=>e.name.localeCompare(t.name))}function k(e,t){if(t&&t.length>0){if(!(void 0!==e&&e)||!t.includes(e))return!0}else if(e&&e.trim()?.length>0)return!0;return!1}let w=(e,t)=>t?(0,n.Y)(c.sA,{id:"ES6F5Q",defaultMessage:"{tagValue} is not an allowed value for tag key {tagKey}",values:{tagValue:t,tagKey:e}}):(0,n.Y)(c.sA,{id:"fDVsd8",defaultMessage:"A value is required for tag key {tagKey}",values:{tagKey:e}});function D(e,t,a){let r=(0,h._)();if(!t?.name||!r)return;if(t.type===p.P.DISCOVERY)return{icon:(0,n.Y)(l.A,{style:a})};return(0,E.Y8)(e,t?.namespace,a)}let C=["system.","class."];function L(e,t){if(C.some(t=>e.startsWith(t)))if(e===_)return{formattedTagKey:i()(t),formattedTagValue:void 0};else{let[,a]=e.split(".");return{formattedTagKey:a,formattedTagValue:t}}return{formattedTagKey:e,formattedTagValue:t}}let S="system.Certified",N="system.Deprecated",_="system.certification_status";var B=((r={}).CERTIFIED="certified",r.DEPRECATED="deprecated",r.NONE="none",r);let $=[S,N];function x(e){if((0,b.e)()){let t=e.find(e=>e.tag_key===_);return{isCertified:t?.tag_value==="certified",isDeprecated:t?.tag_value==="deprecated"}}return{isCertified:e.some(e=>e.tag_key===S),isDeprecated:e.some(e=>e.tag_key===N)}}function F(e){if(!(0,b.e)())return!1;switch(e){case m.Z6.Notebook:return(0,d.W)("databricks.fe.filebrowser.enableNotebookTagging",!1);case m.Z6.Lakeview:return(0,v.w)();case m.Z6.DataRoom:return(0,T.g)();default:return!1}}function M(e,t){let a=e.startsWith("system."),r=t.startsWith("system.");if(e===_&&t!==_)return 1;if(e!==_&&t===_||a&&!r)return -1;if(!a&&r)return 1;return e.localeCompare(t)}function z(){let e=(0,g.mK)(),t=(0,f.Kt)(),a=(0,u.hG)(),r=(0,s.useRef)(a);return(0,s.useCallback)((a,n,o)=>{var i;return(i=function*(){if(a===A.UQ)return[];return r.current({governance_ui_log:{event_name:"fetchTablesWithDeprecatedTagQuery"}}),t&&(0,b.e)()?e.query({query:U,variables:{catalog:a,schema:n,limit:o},fetchPolicy:"cache-first"}).then(e=>e.data.searchmidtierSearchUnifiedSearch?.results?.map(e=>({catalog:a,schema:n,entity:e.name})).filter(e=>!!e.entity)??[]).catch(()=>[]):t&&(0,b.w)()?e.query({query:W,variables:{catalog:a,schema:n,limit:o},fetchPolicy:"cache-first"}).then(e=>e.data.searchmidtierSearchUnifiedSearch?.results?.map(e=>({catalog:a,schema:n,entity:e.name})).filter(e=>!!e.entity)??[]).catch(()=>[]):[]},function(){var e=this,t=arguments;return new Promise(function(a,r){var n=i.apply(e,t);function o(e){P(n,a,r,o,s,"next",e)}function s(e){P(n,a,r,o,s,"throw",e)}o(void 0)})})()},[e,t])}let W=(0,g.J1)`
  query DeprecatedUcTablesPerSchemaLegacySearch($catalog: String!, $schema: String!, $limit: Int!)
  @component(name: "DBSQLX.CatalogExplorer") {
    searchmidtierSearchUnifiedSearch(
      input: {
        filters: {
          resultTypes: [TABLE]
          tagNames: ["system.Deprecated"]
          catalogNames: [$catalog]
          schemaNames: [$schema]
        }
        pageSize: $limit
      }
    ) {
      results {
        name
        ucEntityMetadata {
          catalogName
          schemaName
        }
      }
    }
  }
`,U=(0,g.J1)`
  query DeprecatedUcTablesPerSchemaV2Search($catalog: String!, $schema: String!, $limit: Int!)
  @component(name: "DBSQLX.CatalogExplorer") {
    searchmidtierSearchUnifiedSearch(
      input: {
        filters: {
          resultTypes: [TABLE]
          tagsFilter: {
            tags: [{ tagName: "system.certification_status", tagValue: "deprecated" }, { tagName: "system.Deprecated" }]
          }
          isMetadataSearch: true
          catalogNames: [$catalog]
          schemaNames: [$schema]
        }
        pageSize: $limit
      }
    ) {
      results {
        name
        ucEntityMetadata {
          catalogName
          schemaName
        }
      }
    }
  }
`,Y=(0,g.J1)`
  fragment EntityTagsData on SearchmidtierSearchUnifiedResult {
    tags {
      tag_key: name
      tag_value: value
    }
  }
`},123229:(e,t,a)=>{a.d(t,{$:()=>o});var r=a(681512),n=a(262550);function o(){return window.prefs||new n.A("global",r.sA)}},127833:(e,t,a)=>{let r;a.d(t,{Fj:()=>d,rv:()=>s});var n=a(610435);a(692738);var o=a(64837),i=a(88277);function s(){return[d(),(0,n.Y)(l,{},"context")]}function l(){return null}class c{open(e){let t=(0,i.p)();if(t.getState().notifications.find(t=>t.uid===e.key))return;t.setState(t=>({notifications:[...t.notifications,{...e,uid:e.key||(0,o.A)(),apiType:"legacyNotification"}]}))}info(e){this.open({...e,type:"info"})}success(e){this.open({...e,type:"success"})}error(e){this.open({...e,type:"error"})}warning(e){this.open({...e,type:"warning"})}warn(e){this.open({...e,type:"warning"})}close(e){(0,i.p)().setState(t=>({notifications:t.notifications.filter(t=>t.uid!==e)}))}}function d(){return r||(r=new c),r}},134943:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),o=a(375214);function i(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.197 1.243A.75.75 0 0 1 12.75 1h1.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.553-.243l-.892-.973A5.5 5.5 0 0 0 8 10.051V13a2 2 0 1 1-4 0v-3a3 3 0 0 1 0-6h3.25a5.5 5.5 0 0 0 4.055-1.784zM6.5 8.5v-3H4a1.5 1.5 0 1 0 0 3zm-1 1.5v3a.5.5 0 0 0 1 0v-3zm6.911.77A7 7 0 0 0 8 8.54V5.46a7 7 0 0 0 4.411-2.23l.669-.73h.42v9h-.42z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(o.I,{ref:t,...e,component:i}));s.displayName="MegaphoneIcon";let l=s},143818:(e,t,a)=>{a.d(t,{Ew:()=>p,Hs:()=>m,P3:()=>c,YU:()=>f,hj:()=>d,oP:()=>u});var r=a(342411),n=a(889620),o=a(494650),i=a(5697),s=a(943545),l=a(150001);function c(e){return e===n.H.SQL_EDITOR.id}function d(e){return!e.isSystem&&!c(e.id)}function u(e){if(!d(e))return!1;return e.contextFlavor?.snapshot===!0||e.id.startsWith(n.H.WORKSPACE_SESSION_PREFIX)}function m(e){if(!e)return!1;if((0,l.b)())return!0;return e.tabs.length>0}let f=(0,r.YK)({gitFolder:{id:"/EHeA+",defaultMessage:"Cannot set a Git folder as the root for spaces."},pipelineFolder:{id:"P/1NA9",defaultMessage:"Cannot set a pipeline folder as the root for spaces."},dabBundleFolder:{id:"b+HN/q",defaultMessage:"Cannot set a Databricks Asset Bundle folder as the root for spaces."}});function p(e){if(e.type===i.Z6.Pipeline)return"pipelineFolder";if((0,o.ps)(e))return"dabBundleFolder";if((0,s.V3)(e)||(0,s.pP)(e))return"gitFolder"}},150001:(e,t,a)=>{a.d(t,{b:()=>n});var r=a(441535);function n(){return(0,r.W)("databricks.fe.authoringContextSpaces",!1)}},161926:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),o=a(375214);function i(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a5 5 0 0 0-5 5v1.99c0 .674-.2 1.332-.573 1.892l-1.301 1.952A.75.75 0 0 0 1.75 13h3.5v.25a2.75 2.75 0 1 0 5.5 0V13h3.5a.75.75 0 0 0 .624-1.166l-1.301-1.952A3.4 3.4 0 0 1 13 7.99V6a5 5 0 0 0-5-5m1.25 12h-2.5v.25a1.25 1.25 0 1 0 2.5 0zM4.5 6a3.5 3.5 0 1 1 7 0v1.99c0 .97.287 1.918.825 2.724l.524.786H3.15l.524-.786A4.9 4.9 0 0 0 4.5 7.99z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(o.I,{ref:t,...e,component:i}));s.displayName="NotificationIcon";let l=s},173753:(e,t,a)=>{a.d(t,{Iz:()=>P,K3:()=>A,OU:()=>k,RZ:()=>y,Y5:()=>I,gL:()=>O,lv:()=>R,re:()=>w});var r=a(692738),n=a(22191),o=a(886100),i=a(889620),s=a(722381),l=a(849072),c=a(150001),d=a(648082),u=a(457708),m=a(143818),f=a(754054);function p(){return(0,s.FL)("authoring-context-history",1,!0)}function g(){return(0,s.FL)("authoring-context-last-restore-surface-id",1,!0)}function E(){if(!(0,d.s)())return;try{let e=localStorage.getItem(g());if(!e)return;return e}catch(e){o.iT.log(n.Es.Notebooks,"Failed to read last restore authoring surface id from local storage",e);return}}function A(e){if(!(0,d.s)())return;try{localStorage.setItem(g(),e),window.postMessage({type:"authoring-context-history-update"},window.location.origin)}catch(e){o.iT.log(n.Es.Notebooks,"Failed to persist last restore authoring surface id",e)}}function b(){let e=p();try{return JSON.parse(localStorage.getItem(e)||"[]").filter(e=>!i.H.isWorkspaceThreadContextId(e.id))}catch(e){return o.iT.log(n.Es.Notebooks,"Failed to parse focus folder history from local storage",e),[]}}function h(e){let t=p();try{localStorage.setItem(t,JSON.stringify(e)),window.postMessage({type:"authoring-context-history-update"},window.location.origin)}catch(e){o.iT.log(n.Es.Notebooks,"Failed to set focus folder history in local storage",e)}}function T(e){return e.sort((e,t)=>t.lastAccess-e.lastAccess)}function v(e){let{snapshotEntries:t,otherEntries:a}=T(e).reduce((e,t)=>(t.contextFlavor?.snapshot===!0?e.snapshotEntries.push(t):e.otherEntries.push(t),e),{snapshotEntries:[],otherEntries:[]}),r=t.slice(0,10);for(let e of t.slice(10))l.qE.deleteSnapshotMetadata(e.id);return T([...a,...r]).slice(0,100)}function P(){let e=p(),t=b(),[a,n]=(0,r.useState)(t);return(0,r.useEffect)(()=>{let t=t=>{t.key===e&&n(b())},a=e=>{if(e.origin!==window.location.origin)return;e.data?.type==="authoring-context-history-update"&&n(b())};return window.addEventListener("message",a),window.addEventListener("storage",t),()=>{window.removeEventListener("message",a),window.removeEventListener("storage",t)}},[n,e]),a}function R(e){return b().find(t=>t.id===e)}function I(e,t){if(e.id===i.H.WORKSPACE.id||i.H.isWorkspaceThreadContextId(e.id))return;if((0,m.P3)(e.id)){if(!(0,c.b)())return}else if((0,f.I)(e.id))return;let a=b(),r=a.findIndex(t=>t.id===e.id);if(-1!==r){let n=a[r],o=t?.refreshAuthoringRecency===!0?Date.now():n.lastAccess;a[r]=(0,c.b)()?{...n,...e,...n.contextFlavor?.snapshot||n.id.startsWith(i.H.WORKSPACE_SESSION_PREFIX)?{name:e.name??n.name}:{},...(0,m.P3)(e.id)?{spaceColorIndex:void 0}:{},...(0,m.P3)(e.id)&&void 0===n.pinned?{pinned:!0}:{},lastAccess:o,createdAt:n.createdAt}:{...e,lastAccess:o,createdAt:n.createdAt}}else a.push({...e,lastAccess:Date.now(),createdAt:Date.now(),...(0,c.b)()&&(0,m.P3)(e.id)?{pinned:!0}:{}});try{h(v(a))}catch(e){o.iT.log(n.Es.Notebooks,"Failed to set focus folder history in local storage",e)}}function y(e){let t="string"==typeof e?e:e.id;if(i.H.isWorkspaceThreadContextId(t)||(0,c.b)()&&(0,m.P3)(t))return;let a=b(),r=a.filter(e=>e.id!==t);if(r.length===a.length)return;try{h(v(r))}catch(e){o.iT.log(n.Es.Notebooks,"Failed to set focus folder history in local storage",e)}!function(e){if(!(0,d.s)())return;try{E()===e&&(localStorage.removeItem(g()),window.postMessage({type:"authoring-context-history-update"},window.location.origin))}catch(e){o.iT.log(n.Es.Notebooks,"Failed to clear last restore authoring surface id",e)}}(t)}function O(e,t){if(!(0,c.b)())return;let a="string"==typeof e?e:e.id;if(a===i.H.WORKSPACE.id)return;let r=t;if((0,m.P3)(a)){let{name:e,spaceColorIndex:a,...n}=t;if(0===Object.keys(n).length)return;r=n}let s=b(),l=s.findIndex(e=>e.id===a);if(-1===l)return;let d=r.spaceColorIndex;if(void 0!==d&&(d<0||d>=u.Tr))return;s[l]={...s[l],...r};try{h(v(s))}catch(e){o.iT.log(n.Es.Notebooks,"Failed to update authoring context history in local storage",e)}}function k(e){if(!(0,c.b)())return;let t="string"==typeof e?e:e.id;if((0,m.P3)(t))return;let a=b().find(e=>e.id===t);if(!a)return;(a.contextFlavor?.snapshot||t.startsWith(i.H.WORKSPACE_SESSION_PREFIX)||t.startsWith("folder:")||t.startsWith("pipeline:"))&&l.qE.deleteSnapshotMetadata(t),y(t)}function w(){let e=T([...b()]);if((0,d.s)()){let e=E();if(void 0!==e){if((0,f.I)(e))return;let t=R(e);if(t)return t}}return e.find(e=>!(0,f.I)(e.id))}},173773:(e,t,a)=>{a.d(t,{Ej:()=>o,qc:()=>i,vO:()=>s,wt:()=>n});var r=a(141078);let n=(0,r.J1)`
  fragment RecommendedAsset on RecommendationAsset {
    id
    type
    name
    userActivityInfo {
      assetId
      assetType
      isFavorite
    }
    treeNode {
      name
      fullPath
      owner {
        fullname
        email
        id
      }
      modifiedAt
    }
    unityCatalogSecurable {
      name
      fullName
      securableKind
    }
  }
`;(0,r.J1)`
  fragment RecommendedAssetWithThumbnail on RecommendationAsset {
    ...RecommendedAsset
    thumbnailUrl(uiMode: $uiMode)
  }
`;let o=(0,r.J1)`
  fragment RecommendationRelevanceReason on RecommendationRelevanceReason {
    relevanceTime
    type
    viewMetadata {
      viewFrequency
    }
  }
`,i=(0,r.J1)`
  fragment RecommendedAssetRecommendation on RecommendationAssetRecommendation {
    asset {
      ...RecommendedAsset
    }
    relevanceReason {
      ...RecommendationRelevanceReason
    }
  }
`;(0,r.J1)`
  fragment RecommendedAssetRecommendationWithThumbnail on RecommendationAssetRecommendation {
    asset {
      ...RecommendedAssetWithThumbnail
    }
    relevanceReason {
      ...RecommendationRelevanceReason
    }
  }
`;let s=(0,r.J1)`
  fragment RecommendedAssetsResponse on RecommendationAssetRecommendations {
    nextPageToken
    assetRecommendations {
      ...RecommendedAssetRecommendation
    }
    recommendationTraceId
    apiError {
      code
      message
    }
  }
`;(0,r.J1)`
  fragment RecommendedAssetsResponseWithThumbnail on RecommendationAssetRecommendations {
    nextPageToken
    assetRecommendations {
      ...RecommendedAssetRecommendationWithThumbnail
    }
    recommendationTraceId
    apiError {
      code
      message
    }
  }
`},186381:(e,t,a)=>{a.d(t,{BY:()=>c,F:()=>i,KI:()=>l,Rb:()=>o,Rl:()=>s,eu:()=>u,qi:()=>n,r1:()=>d});var r=a(337706);let n="pipelineId",o="autoConnectPipeline",i="initiallyOpenRootFolders",s="ensureOpenPanels",l="configureRootFolder",c="agentCreatedPipeline",d="redirectToSourceFile";function u(){let[e]=(0,r.ok)(),t=e.get(n);return{pipelineIdQueryParam:t,pipelineNameQueryParam:e.get("pipelineName"),autoConnectPipelineQueryParam:e.get(o)}}},210785:(e,t,a)=>{a.d(t,{P:()=>n});var r,n=((r={}).GOVERNED="GOVERNED",r.DISCOVERY="DISCOVERY",r)},231223:(e,t,a)=>{a.d(t,{J:()=>o,S:()=>n});var r=a(141078);let n=(0,r.J1)`
  query ListDomains($pageSize: Int, $pageToken: String, $includeTagMetadata: Boolean, $mode: DomainsReadRequestMode)
  @component(name: "LakehouseCollaboration.DiscoveryAndRecommendation") {
    domainsListDomains(
      input: { pageSize: $pageSize, pageToken: $pageToken, includeTagMetadata: $includeTagMetadata, mode: $mode }
    ) {
      domains {
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
        parentDomainId
      }
      nextPageToken
      apiError {
        code
        message
        helpUrl
        traceId
      }
    }
  }
`;function o(e,t={}){return(0,r.IT)(n,{variables:e,...t})}},246700:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),o=a(375214);function i(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.367 3.29a.75.75 0 0 1 .547.443 5.001 5.001 0 0 1-6.072 6.736l-3.187 3.186a2.341 2.341 0 0 1-3.31-3.31L5.53 7.158a5.001 5.001 0 0 1 6.736-6.072.75.75 0 0 1 .237 1.22L10.5 4.312V5.5h1.19l2.003-2.004a.75.75 0 0 1 .674-.206m-.56 2.214L12.53 6.78A.75.75 0 0 1 12 7H9.75A.75.75 0 0 1 9 6.25V4a.75.75 0 0 1 .22-.53l1.275-1.276a3.501 3.501 0 0 0-3.407 4.865.75.75 0 0 1-.16.823l-3.523 3.523a.84.84 0 1 0 1.19 1.19L8.118 9.07a.75.75 0 0 1 .823-.16 3.5 3.5 0 0 0 4.865-3.407",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(o.I,{ref:t,...e,component:i}));s.displayName="WrenchIcon";let l=s},298734:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),o=a(375214);function i(e){return(0,r.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,r.FD)("g",{fill:"currentColor",fillRule:"evenodd",clipPath:"url(#GearIcon_svg__a)",clipRule:"evenodd",children:[(0,r.Y)("path",{d:"M7.984 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-1.5 3a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"}),(0,r.Y)("path",{d:"M7.966 0q-.51 0-1.005.063a.75.75 0 0 0-.62.51l-.639 1.946q-.315.13-.61.294L3.172 2.1a.75.75 0 0 0-.784.165c-.481.468-.903.996-1.255 1.572a.75.75 0 0 0 .013.802l1.123 1.713a6 6 0 0 0-.15.66L.363 8.07a.75.75 0 0 0-.36.716c.067.682.22 1.34.447 1.962a.75.75 0 0 0 .635.489l2.042.19q.195.276.422.529l-.27 2.032a.75.75 0 0 0 .336.728 8 8 0 0 0 1.812.874.75.75 0 0 0 .778-.192l1.422-1.478a6 6 0 0 0 .677 0l1.422 1.478a.75.75 0 0 0 .778.192 8 8 0 0 0 1.812-.874.75.75 0 0 0 .335-.728l-.269-2.032a6 6 0 0 0 .422-.529l2.043-.19a.75.75 0 0 0 .634-.49c.228-.621.38-1.279.447-1.961a.75.75 0 0 0-.36-.716l-1.756-1.056a6 6 0 0 0-.15-.661l1.123-1.713a.75.75 0 0 0 .013-.802 8 8 0 0 0-1.255-1.572.75.75 0 0 0-.784-.165l-1.92.713q-.295-.163-.61-.294L9.589.573a.75.75 0 0 0-.619-.51A8 8 0 0 0 7.965 0m-.95 3.328.597-1.819a7 7 0 0 1 .705 0l.597 1.819a.75.75 0 0 0 .472.476q.519.177.97.468a.75.75 0 0 0 .668.073l1.795-.668q.234.264.44.552l-1.05 1.6a.75.75 0 0 0-.078.667q.181.501.24 1.05a.75.75 0 0 0 .359.567l1.642.988q-.06.351-.156.687l-1.909.178a.75.75 0 0 0-.569.353q-.287.463-.672.843a.75.75 0 0 0-.219.633l.252 1.901a7 7 0 0 1-.635.306l-1.33-1.381a.75.75 0 0 0-.63-.225 4.5 4.5 0 0 1-1.08 0 .75.75 0 0 0-.63.225l-1.33 1.381a7 7 0 0 1-.634-.306l.252-1.9a.75.75 0 0 0-.219-.634 4.5 4.5 0 0 1-.672-.843.75.75 0 0 0-.569-.353l-1.909-.178a7 7 0 0 1-.156-.687L3.2 8.113a.75.75 0 0 0 .36-.567q.056-.549.239-1.05a.75.75 0 0 0-.078-.666L2.67 4.229q.206-.288.44-.552l1.795.668a.75.75 0 0 0 .667-.073c.3-.193.626-.351.97-.468a.75.75 0 0 0 .472-.476"})]}),(0,r.Y)("defs",{children:(0,r.Y)("clipPath",{children:(0,r.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(o.I,{ref:t,...e,component:i}));s.displayName="GearIcon";let l=s},401160:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),o=a(375214);function i(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.75 1a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75V1.75a.75.75 0 0 0-.75-.75zM7.5 2.5h-4v6.055l1.495-1.36a.75.75 0 0 1 1.01 0L7.5 8.555zm-4 8.082 2-1.818 2.246 2.041A.75.75 0 0 0 9 10.25V2.5h3.5v12h-9z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(o.I,{ref:t,...e,component:i}));s.displayName="BookIcon";let l=s},417469:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),o=a(375214);function i(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",d:"m5.5 2 1.06 1.06-3.53 3.531L1 4.561 2.06 3.5l.97.97zM15.03 4.53h-7v-1.5h7zM1.03 14.53v-1.5h14v1.5zM8.03 9.53h7v-1.5h-7zM6.56 8.06 5.5 7 3.03 9.47l-.97-.97L1 9.56l2.03 2.031z"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(o.I,{ref:t,...e,component:i}));s.displayName="ChecklistIcon";let l=s},425628:(e,t,a)=>{a.d(t,{g:()=>i});var r=a(542908),n=a(620275),o=a(441535);function i(){return!(0,r.B)()&&!(0,n.s4)()&&((0,o.W)("enable_lakeview_tags",!1)||(0,o.W)("databricks.fe.lakeview.enableLakeviewTags",!1))}},429072:(e,t,a)=>{a.d(t,{WO:()=>d,Wi:()=>c,YD:()=>u,wB:()=>m,zJ:()=>l});var r,n,o,i,s,l=((r={}).CREATOR="roles/tagPolicy.creator",r.MANAGER="roles/tagPolicy.manager",r.ASSIGNER="roles/tagPolicy.assigner",r),c=((n={}).CREATE="account/createTagPolicy",n.UPDATE="tagPolicy/update",n.DELETE="tagPolicy/delete",n.GET_RULESET="tagPolicy.ruleSet/get",n.UPDATE_RULESET="tagPolicy.ruleSet/update",n.ASSIGN="tagPolicy/assign",n.ACCOUNT_GET_RULESET="account.ruleSet/get",n.ACCOUNT_UPDATE_RULESET="account.ruleSet/update",n),d=((o={}).DEFAULT="DEFAULT",o.SYSTEM="SYSTEM",o),u=((i={}).DEFAULT="TAG_POLICY_NAMESPACE_DEFAULT",i.SYSTEM="TAG_POLICY_NAMESPACE_SYSTEM",i),m=((s={}).TAG_LEVEL="TAG_LEVEL",s.ACCOUNT_LEVEL="ACCOUNT_LEVEL",s)},457708:(e,t,a)=>{a.d(t,{Tr:()=>o,UG:()=>s,oo:()=>i});var r=a(150001);let n=[e=>e.colors.actionPrimaryBackgroundDefault,e=>e.colors.actionDangerPrimaryBackgroundDefault,e=>e.colors.textValidationSuccess,e=>e.colors.textValidationWarning,e=>e.colors.textValidationDanger,e=>e.colors.borderWarning,e=>e.colors.progressFill,e=>e.colors.actionDefaultIconHover],o=n.length;function i(e){if(void 0===e)return;if(e>=0&&e<o)return e}function s(e,t){if(!(0,r.b)())return e.colors.actionPrimaryBackgroundDefault;let a=n.map(t=>t(e)),o=Math.max(0,Math.min(t,a.length-1));return a[o]??e.colors.actionPrimaryBackgroundDefault}},586129:(e,t,a)=>{a.d(t,{j:()=>i});var r=a(542908),n=a(620275),o=a(441535);function i(){return!(0,r.B)()&&!(0,n.s4)()&&((0,o.W)("enable_lakeview_tags",!1)||(0,o.W)("databricks.fe.lakeview.enableLakeviewTags",!1))}},617933:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),o=a(375214);function i(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.75 1a.75.75 0 0 0-.75.75v6.089c0 .38-.173.739-.47.976l-2.678 2.143A2.27 2.27 0 0 0 3.27 15h9.46a2.27 2.27 0 0 0 1.418-4.042L11.47 8.815A1.25 1.25 0 0 1 11 7.839V1.75a.75.75 0 0 0-.75-.75zm.75 6.839V2.5h3v5.339c0 .606.2 1.188.559 1.661H5.942A2.75 2.75 0 0 0 6.5 7.839M4.2 11 2.79 12.13a.77.77 0 0 0 .48 1.37h9.461a.77.77 0 0 0 .481-1.37L11.8 11z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(o.I,{ref:t,...e,component:i}));s.displayName="BeakerIcon";let l=s},622120:(e,t,a)=>{a.d(t,{DY:()=>g,H6:()=>m,YR:()=>p,mc:()=>f});var r=a(141078),n=a(173773);let o=(0,r.J1)`
  fragment SuggestedAsset on UseractivityAsset {
    id
    type
    name
    userActivityInfo {
      assetId
      assetType
      isFavorite
    }
    treeNode {
      name
      fullPath
      owner {
        fullname
        email
        id
      }
      modifiedAt
    }
    unityCatalogSecurable {
      name
      fullName
      securableKind
    }
  }
`,i=(0,r.J1)`
  fragment SuggestedAssetWithThumbnail on UseractivityAsset {
    ...SuggestedAsset
    thumbnailUrl(uiMode: $uiMode)
  }
`,s=(0,r.J1)`
  fragment RelevanceReason on UseractivityRelevanceReason {
    timestamp
    type
    viewMetadata {
      viewFrequency
    }
  }
`,l=(0,r.J1)`
  fragment AssetRecommendation on UseractivityAssetRecommendation {
    asset {
      ...SuggestedAsset
    }
    relevanceReason {
      ...RelevanceReason
    }
  }
`,c=(0,r.J1)`
  fragment AssetRecommendationWithThumbnail on UseractivityAssetRecommendation {
    asset {
      ...SuggestedAssetWithThumbnail
    }
    relevanceReason {
      ...RelevanceReason
    }
  }
`,d=(0,r.J1)`
  fragment SuggestedAssetsResponse on UseractivityGetAssetRecommendationsResponse {
    nextPageToken
    assetRecommendations {
      ...AssetRecommendation
    }
    recommendationTraceId
    apiError {
      code
      message
    }
  }
`,u=(0,r.J1)`
  fragment SuggestedAssetsResponseWithThumbnail on UseractivityGetAssetRecommendationsResponse {
    nextPageToken
    assetRecommendations {
      ...AssetRecommendationWithThumbnail
    }
    recommendationTraceId
    apiError {
      code
      message
    }
  }
`,m=(0,r.J1)`
  query ListSuggestedAssets(
    $userActivityTypes: [UseractivityAssetType!]
    $pageSize: Int!
    $pageToken: String
    $page: UseractivityPage
    $uiMode: ThumbnailsThumbnailUiMode
    $recommendationTraceId: String
  ) @component(name: "Lakeview.DatabricksOne") {
    useractivityGetAssetRecommendations(
      input: {
        pageSize: $pageSize
        filter: { types: $userActivityTypes }
        context: { page: $page }
        pageToken: $pageToken
        recommendationTraceId: $recommendationTraceId
      }
    ) {
      ...SuggestedAssetsResponseWithThumbnail
    }
  }
  ${o}
  ${i}
  ${s}
  ${c}
  ${u}
`,f=(0,r.J1)`
  query ListHomepageSuggestedAssets(
    $userActivityTypes: [UseractivityAssetType!]
    $pageSize: Int!
    $pageToken: String
    $page: UseractivityPage
    $recommendationTraceId: String
  ) @component(name: "Lakeview.DatabricksOne") {
    useractivityGetAssetRecommendations(
      input: {
        pageSize: $pageSize
        filter: { types: $userActivityTypes }
        context: { page: $page }
        pageToken: $pageToken
        recommendationTraceId: $recommendationTraceId
      }
    ) {
      ...SuggestedAssetsResponse
    }
  }
  ${o}
  ${s}
  ${l}
  ${d}
`,p=(0,r.J1)`
  query GetUserProfileSuggestions @component(name: "LakehouseCollaboration.DiscoveryAndRecommendation") {
    recommendation_getUserProfile {
      recommendedOwnerUserIds
      recommendedAssetTypes
      recommendedTagPairs {
        key
        value
      }
      recommendationTraceId
    }
  }
`,g=(0,r.J1)`
  query ListHomepageSuggestedAssetsShadow(
    $types: [RecommendationAssetType!]
    $pageSize: Int!
    $pageToken: String
    $page: RecommendationPage
    $recommendationTraceId: String
  ) @component(name: "LakehouseCollaboration.DiscoveryAndRecommendation") {
    recommendationGetAssetRecommendations(
      input: {
        pageSize: $pageSize
        filter: { types: $types }
        context: { page: $page }
        pageToken: $pageToken
        recommendationTraceId: $recommendationTraceId
      }
    ) {
      ...RecommendedAssetsResponse
    }
  }
  ${n.wt}
  ${n.Ej}
  ${n.qc}
  ${n.vO}
`},640893:(e,t,a)=>{a.d(t,{F:()=>d});var r=a(16589),n=a(886100),o=a(22191),i=a(278983),s=a(19123),l=a(707076);function c(e,t,a,r,n,o,i){try{var s=e[o](i),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}let d=({id:e,type:t,lastAccessedTimestamp:a},d)=>{var u;return(u=function*(){if((0,i.y)("assetView",{assetType:t,assetId:e}),(0,l.MH)()&&(0,r.oA)().includes(t))try{let r=yield(0,s.h)("/ajax-api/2.0/user-activity/view",{method:"POST",body:JSON.stringify({asset:{id:e,type:t},timestamp:a})});r.ok?d?.():n.iT.log(o.Es.DatabricksOne,"UserActivityWarning",`Received ${r.status} code when registering view`)}catch(e){n.iT.log(o.Es.DatabricksOne,"Error registering view",e)}},function(){var e=this,t=arguments;return new Promise(function(a,r){var n=u.apply(e,t);function o(e){c(n,a,r,o,i,"next",e)}function i(e){c(n,a,r,o,i,"throw",e)}o(void 0)})})()}},648082:(e,t,a)=>{a.d(t,{s:()=>n});var r=a(441535);let n=()=>(0,r.W)("databricks.fe.authoringContextRestoreLastContext",!1)},656280:(e,t,a)=>{a.d(t,{$R:()=>p,C$:()=>s,CU:()=>R,DS:()=>h,Kq:()=>g,Mp:()=>b,RZ:()=>I,aU:()=>A,bP:()=>m,cb:()=>o,db:()=>l,e8:()=>T,m9:()=>c,md:()=>i,og:()=>v,tQ:()=>f,vB:()=>E,wx:()=>P});var r=a(441535),n=a(811362);let o=e=>new Promise(t=>setTimeout(t,e)),i=(e,t)=>({type:t,etag:e.etag,reviews:e.reviews,runner_collaborator_aliases:e.runner_collaborator_aliases,review_state:e.review_state,owner_global_metastore_id:e.owner_global_metastore_id,owner_collaborator_alias:e.owner_collaborator_alias,added_at:e.added_at}),s={notebook:n.BV.NOTEBOOK,jar_analysis:n.BV.JAR},l={notebook:n.Yh.NOTEBOOK,jar_analysis:n.Yh.JAR},c={notebook:{approved:n.Jm.APPROVED,pending:n.Jm.PENDING,rejected:n.Jm.REJECTED,autoApprovedSubReason:n.g4.AUTO_APPROVED},jar_analysis:{approved:n.XV.APPROVED,pending:n.XV.PENDING,rejected:n.XV.REJECTED,autoApprovedSubReason:n.Ig.AUTO_APPROVED}},d=["notebook","jar_analysis"],u=[n.BV.NOTEBOOK,n.BV.JAR],m=e=>d.includes(e),f=e=>m(e.type),p=e=>u.includes(e);function g(){return(0,r.W)("databricks.fe.uc.enableCleanRoom",!1)}function E(){return(0,r.W)("databricks.fe.clean.room.enableCleanRoomJobsScheduleButton",!1)}function A(){return(0,r.W)("databricks.fe.clean.room.enableCleanRoomsFirewallSupport",!1)}function b(){return(0,r.W)("databricks.fe.clean.room.enableShortTermPrivateLinkSupport",!1)}function h(){return(0,r.W)("databricks.cleanroom.enableModelInCleanRoom",!1)}function T(){return(0,r.W)("databricks.fe.delta-sharing.enableSAPBDCConnector",!1)}function v(){return(0,r.W)("databricks.fe.delta-sharing.enableSAPBDCMarketplaceEntrypoint",!1)}function P(){return(0,r.W)("cleanroom_jar_task",!1)}function R(){return(0,r.W)("cr_shared_output",!1)}function I(){return(0,r.W)("cr_packaged_mode",!1)}},690037:(e,t,a)=>{a.d(t,{k:()=>i});var r=a(160603),n=a(141078),o=a(889054);function i({assetTypes:e,numRecents:t,queryOptions:a}){let s=(0,n.mK)();return(0,r.useQuery)("unified_recents",()=>(0,o.A3)({numRecents:t,apolloClient:s,assetTypes:e??void 0}),a)}},706344:(e,t,a)=>{a.d(t,{lZ:()=>T});var r=a(610435),n=a(956935),o=a(692738),i=a(72954),s=a(79128),l=a(224098),c=a(497895),d=a(134943),u=a(664093),m=a(140078),f=a(658345),p=a(382908),g=a(123252),E=a(53333);let{Text:A,Paragraph:b}=p.o,h={info:(0,r.Y)(d.A,{"data-testid":"level-info-icon"}),info_light_purple:(0,r.Y)(d.A,{"data-testid":"level-info-light-purple-icon"}),info_dark_purple:(0,r.Y)(d.A,{"data-testid":"level-info-dark-purple-icon"}),warning:(0,r.Y)(u.A,{"data-testid":"level-warning-icon"}),error:(0,r.Y)(m.A,{"data-testid":"level-error-icon"})},T=e=>{let t,{level:a,message:d,description:u,ctaText:m,onAccept:p,closable:T,onClose:v,closeButtonAriaLabel:P,componentId:R,analyticsEvents:I=[l.s7.OnView]}=e,[y,O]=o.useState(!1),{theme:k}=(0,c.wn)(),w=(t=({info_light_purple:{backgroundDefaultColor:k.isDarkMode?"#6E2EC729":"#ECE1FC",actionButtonBackgroundHoverColor:k.colors.actionDefaultBackgroundHover,actionButtonBackgroundPressColor:k.colors.actionDefaultBackgroundPress,textColor:k.colors.actionDefaultTextDefault,textHoverColor:"#92A4B38F",textPressColor:k.colors.actionDefaultTextDefault,borderDefaultColor:k.isDarkMode?"#955CE5":"#E2D0FB",actionBorderColor:"#92A4B38F",closeIconColor:k.isDarkMode?"#92A4B3":"#5F7281",iconColor:k.colors.purple,actionButtonBorderHoverColor:k.colors.actionDefaultBorderHover,actionButtonBorderPressColor:k.colors.actionDefaultBorderPress,closeIconBackgroundHoverColor:k.colors.actionTertiaryBackgroundHover,closeIconTextHoverColor:k.colors.actionTertiaryTextHover,closeIconBackgroundPressColor:k.colors.actionDefaultBackgroundPress,closeIconTextPressColor:k.colors.actionTertiaryTextPress},info_dark_purple:{backgroundDefaultColor:k.isDarkMode?"#BC92F7DB":k.colors.purple,actionButtonBackgroundHoverColor:k.isDarkMode?"#BC92F7DB":k.colors.purple,actionButtonBackgroundPressColor:k.isDarkMode?"#BC92F7DB":k.colors.purple,textColor:k.colors.actionPrimaryTextDefault,textHoverColor:k.colors.actionPrimaryTextHover,textPressColor:k.colors.actionPrimaryTextPress,borderDefaultColor:k.isDarkMode?"#BC92F7DB":k.colors.purple},info:{backgroundDefaultColor:k.isDarkMode?"#BC92F7DB":k.colors.purple,actionButtonBackgroundHoverColor:k.isDarkMode?"#BC92F7DB":k.colors.purple,actionButtonBackgroundPressColor:k.isDarkMode?"#BC92F7DB":k.colors.purple,textColor:k.colors.actionPrimaryTextDefault,textHoverColor:k.colors.actionPrimaryTextHover,textPressColor:k.colors.actionPrimaryTextPress,borderDefaultColor:k.isDarkMode?"#BC92F7DB":k.colors.purple},warning:{backgroundDefaultColor:k.colors.tagLemon,actionButtonBackgroundHoverColor:k.colors.tagLemon,actionButtonBackgroundPressColor:k.colors.tagLemon,textColor:i.s.grey800,textHoverColor:i.s.grey800,textPressColor:i.s.grey800,borderDefaultColor:k.colors.tagLemon},error:{backgroundDefaultColor:k.colors.actionDangerPrimaryBackgroundDefault,actionButtonBackgroundHoverColor:k.colors.actionDangerPrimaryBackgroundHover,actionButtonBackgroundPressColor:k.colors.actionDangerPrimaryBackgroundPress,textColor:k.colors.actionPrimaryTextDefault,textHoverColor:k.colors.actionPrimaryTextHover,textPressColor:k.colors.actionPrimaryTextPress,borderDefaultColor:k.colors.actionDangerPrimaryBackgroundDefault}})[e.level],{banner:(0,n.AH)("max-height:",82,"px;display:flex;align-items:center;width:100%;padding:8px;box-sizing:border-box;background-color:",t.backgroundDefaultColor,";border:1px solid ",t.borderDefaultColor,";"),iconContainer:(0,n.AH)("display:flex;color:",t.iconColor?t.iconColor:t.textColor,";align-self:",e.description?"flex-start":"center",";box-sizing:border-box;max-width:60px;padding-top:4px;padding-bottom:4px;padding-right:",k.spacing.xs,"px;"),mainContent:(0,n.AH)("flex-direction:column;align-self:",e.description?"flex-start":"center",";display:flex;box-sizing:border-box;padding-right:",k.spacing.sm,"px;padding-top:2px;padding-bottom:2px;min-width:",k.spacing.lg,"px;width:100%;"),messageTextBlock:(0,n.AH)("display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;&&{color:",t.textColor,";}"),descriptionBlock:(0,n.AH)("display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;&&{color:",t.textColor,";}"),rightContainer:(0,n.AH)("margin-left:auto;display:flex;align-items:center;"),closeIconContainer:(0,n.AH)("display:flex;margin-left:",k.spacing.xs,"px;box-sizing:border-box;line-height:0;"),closeButton:(0,n.AH)("cursor:pointer;background:none;border:none;margin:0;&&{height:24px !important;width:24px !important;padding:",k.spacing.xs,"px !important;box-shadow:unset !important;}&&:hover{background-color:transparent !important;border-color:",t.textHoverColor,"!important;color:",t.closeIconTextHoverColor?t.closeIconTextHoverColor:t.textColor,"!important;background-color:",t.closeIconBackgroundHoverColor?t.closeIconBackgroundHoverColor:t.backgroundDefaultColor,"!important;}&&:active{border-color:",t.actionBorderColor,"!important;color:",t.closeIconTextPressColor?t.closeIconTextPressColor:t.textColor,"!important;background-color:",t.closeIconBackgroundPressColor?t.closeIconBackgroundPressColor:t.backgroundDefaultColor,"!important;}"),closeIcon:(0,n.AH)("color:",t.closeIconColor?t.closeIconColor:t.textColor,"!important;"),actionButtonContainer:(0,n.AH)("margin-right:",k.spacing.xs,"px;"),actionButton:(0,n.AH)("color:",t.textColor,"!important;border-color:",t.actionBorderColor?t.actionBorderColor:t.textColor,"!important;box-shadow:unset !important;&:focus,&:hover{border-color:",t.actionButtonBorderHoverColor?t.actionButtonBorderHoverColor:t.textHoverColor,"!important;color:",t.textColor,"!important;background-color:",t.actionButtonBackgroundHoverColor,"!important;}&:active{border-color:",t.actionButtonBorderPressColor?t.actionButtonBorderPressColor:t.actionBorderColor,"!important;color:",t.textPressColor,"!important;background-color:",t.actionButtonBackgroundPressColor,"!important;}a{color:",k.colors.actionPrimaryTextDefault,";}a:focus,a:hover{color:",t.textHoverColor,";text-decoration:none;}a:active{color:",t.textPressColor,"        text-decoration:none;}")}),D=(0,o.useMemo)(()=>I,[I]),C=(0,l.ei)({componentType:l.v_.Banner,componentId:R,componentSubType:l.Ie[a],analyticsEvents:D}),{elementRef:L}=(0,E.z)({onView:C.onView}),S=p&&m?(0,r.Y)("div",{css:w.actionButtonContainer,children:(0,r.Y)(s.$n,{componentId:`${R}.accept`,onClick:p,css:w.actionButton,size:"small",children:m})}):null,N=!1!==T?(0,r.Y)("div",{css:w.closeIconContainer,children:(0,r.Y)(s.$n,{componentId:`${R}.close`,css:w.closeButton,onClick:()=>{v&&v(),O(!0)},"aria-label":P??"Close","data-testid":"banner-dismiss",children:(0,r.Y)(f.A,{css:w.closeIcon})})}):null;return(0,r.Y)(r.FK,{children:!y&&(0,r.FD)("div",{ref:L,...(0,g.VG)(),css:w.banner,className:"banner","data-testid":e["data-testid"],role:"alert",children:[(0,r.Y)("div",{css:w.iconContainer,children:h[a]}),(0,r.FD)("div",{css:w.mainContent,children:[(0,r.Y)(A,{size:"md",bold:!0,css:w.messageTextBlock,title:d,children:d}),u&&(0,r.Y)(b,{withoutMargins:!0,css:w.descriptionBlock,title:u,children:u})]}),(0,r.FD)("div",{css:w.rightContainer,children:[S,N]})]})})}},711442:(e,t,a)=>{a.d(t,{a:()=>i,s:()=>o});var r=a(488655);let n=e=>"object"==typeof e&&"replace"in e&&e.replace;function o({getRoute:e,legacyOptions:t}){let a=e();(0,r.oo)(a,{replace:n(t)})}function i({getRoute:e,legacyOptions:t}){let a=e();(0,r.oo)(a,{replace:n(t)})}},753427:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),o=a(375214);function i(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M0 2.75A.75.75 0 0 1 .75 2h3.922c.729 0 1.428.29 1.944.805L7.811 4h7.439a.75.75 0 0 1 .75.75V8h-1.5V5.5h-7a.75.75 0 0 1-.53-.22L5.555 3.866a1.25 1.25 0 0 0-.883-.366H1.5v9H5V14H.75a.75.75 0 0 1-.75-.75zM9 8.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M7 9a2 2 0 1 1 3.778.917c.376.58.888 1.031 1.414 1.227a2 2 0 1 1-.072 1.54c-.977-.207-1.795-.872-2.37-1.626v1.087a2 2 0 1 1-1.5 0v-1.29A2 2 0 0 1 7 9m7 2.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m-5 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(o.I,{ref:t,...e,component:i}));s.displayName="FolderBranchIcon";let l=s},754054:(e,t,a)=>{a.d(t,{I:()=>o});var r=a(889620),n=a(227937);let o=e=>(0,n.fq)()?e===r.H.WORKSPACE_ID||e===r.H.SQL_EDITOR_ID:e===r.H.WORKSPACE_ID},765288:(e,t,a)=>{a.d(t,{w:()=>i});var r=a(441535),n=a(586129),o=a(873092);function i(){return(0,o.w)()&&(0,n.j)()&&(0,r.W)("databricks.fe.lakeview.enableDashboardCertification",!1)}},776869:(e,t,a)=>{a.d(t,{$:()=>n,U:()=>o});var r=a(141078);(0,r.J1)`
  mutation jobsJobCreate($input: JobsCreateJobInput!) @component(name: "Workflows.Orchestration.Other") {
    jobsCreateJob(input: $input) {
      jobId
    }
  }
`;let n=(0,r.J1)`
  query JobNamesByIds($first: Int!, $jobIds: [Long]) @component(name: "Workflows.Observability.Lists") {
    jobs(first: $first, filterBy: { jobIds: $jobIds }) {
      edges {
        node {
          id
          settings {
            name
          }
        }
      }
    }
  }
`,o=(0,r.J1)`
  query FindTables($query: String!) @component(name: "Workflows.Triggers.Table") {
    searchmidtierSearchUnifiedSearch(
      input: {
        query: { query: $query, searchMode: SEARCH_AS_YOU_TYPE }
        filters: { resultTypes: [TABLE] }
        pageSize: 20
      }
    ) {
      results {
        id
        name
        ucEntityMetadata {
          securableKind
          catalogName
          schemaName
        }
      }
    }
  }
`},833161:(e,t,a)=>{a.d(t,{P:()=>s,q:()=>i});var r=a(441535),n=a(483588),o=a(255844);let i=()=>{let e=(0,r.W)("databricks.userActivity.conf.enablePipelinesInRecentsFrontend",!1),t=(0,r.W)("databricks.fe.userActivity.enableAppsInRecents",!1),a=(0,o.zs)(),i=(0,r.W)("designer",!1)&&(0,r.W)("databricks.fe.lakebuilder.enableDesignerFile",!1)&&(0,r.W)("databricks.lakebuilder.enableDesignerFileRecommendations",!1),s=[n.z$1.ALERT,n.z$1.ALERT_V2,n.z$1.DASHBOARD_V3,n.z$1.DATA_ROOM,n.z$1.ENDPOINT,n.z$1.ENDPOINT_CENTRIC_ENDPOINT,n.z$1.EXPERIMENT,n.z$1.FEATURE_TABLE,n.z$1.FILE,n.z$1.JOB,n.z$1.LIBRARY,n.z$1.MODEL,n.z$1.NOTEBOOK,n.z$1.QUERY,n.z$1.UC_CATALOG,n.z$1.UC_SCHEMA,n.z$1.UC_TABLE,n.z$1.UC_MODEL,n.z$1.UC_VOLUME,n.z$1.UC_FUNCTION];return e&&(s.push(n.z$1.PIPELINE),a&&s.push(n.z$1.PIPELINE_EDITOR)),t&&s.push(n.z$1.APP),i&&s.push(n.z$1.DESIGNER_FILE),s},s=()=>[n.z$1.DASHBOARD_V3,n.z$1.DATA_ROOM]},848001:(e,t,a)=>{a.d(t,{K:()=>B,LI:()=>S,Lg:()=>N,kn:()=>D,lU:()=>_,sj:()=>C});var r=a(610435),n=a(615693),o=a(325382),i=a(397136),s=a(126001),l=a(323935),c=a(485065),d=a(452233),u=a(563521),m=a(1459),f=a(319241),p=a(753427),g=a(401160),E=a(161926),A=a(24027),b=a(617933),h=a(823825),T=a(873393),v=a(815367),P=a(350487),R=a(918071),I=a(946590),y=a(889187),O=a(483588),k=a(707076),w=a(771994);let D={[O.FKF.ALERT]:w.An.ALERT,[O.FKF.DASHBOARD]:w.An.DASHBOARD,[O.FKF.DASHBOARD_V3]:w.An.DASHBOARD,[O.FKF.FILE]:w.An.FILE,[O.FKF.FOLDER]:w.An.FOLDER,[O.FKF.JOB]:w.An.JOB,[O.FKF.PIPELINE]:w.An.PIPELINE,[O.FKF.LIBRARY]:w.An.LIBRARY,[O.FKF.MARKETPLACE_LISTING]:w.An.MARKETPLACE,[O.FKF.ENDPOINT_CENTRIC_ENDPOINT]:w.An.ENDPOINT,[O.FKF.UC_MODEL]:w.An.MODEL,[O.FKF.UC_FUNCTION]:w.An.FUNCTION,[O.FKF.EXPERIMENT]:w.An.EXPERIMENT,[O.FKF.NOTEBOOK]:w.An.NOTEBOOK,[O.FKF.PROJECT]:w.An.REPO,[O.FKF.QUERY]:w.An.QUERY,[O.FKF.UC_TABLE]:w.An.TABLE,[O.FKF.UC_VOLUME]:w.An.VOLUME,[O.FKF.DATA_ROOM]:w.An.DATA_ROOM},C={[w.If.ALERT]:w.An.ALERT,[w.If.ALERT_V2]:w.An.ALERT_V2,[w.If.APP]:w.An.APP,[w.If.DBSQL_DASHBOARD]:w.An.DASHBOARD,[w.If.FILE]:w.An.FILE,[w.If.FOLDER]:w.An.FOLDER,[w.If.JOB]:w.An.JOB,[w.If.PIPELINE]:w.An.PIPELINE,[w.If.LIBRARY]:w.An.LIBRARY,[w.If.MARKETPLACE]:w.An.MARKETPLACE,[w.If.ML_ENDPOINT]:w.An.ENDPOINT,[w.If.ML_MODEL]:w.An.MODEL,[w.If.FUNCTION]:w.An.FUNCTION,[w.If.MLFLOW_EXPERIMENT]:w.An.EXPERIMENT,[w.If.NOTEBOOK]:w.An.NOTEBOOK,[w.If.DESIGNER_FILE]:w.An.DESIGNER_FILE,[w.If.PARTNER]:w.An.PARTNER,[w.If.PROJECT]:w.An.REPO,[w.If.QUERY]:w.An.QUERY,[w.If.TABLE]:w.An.TABLE,[w.If.VOLUME]:w.An.VOLUME,[w.If.DATA_ROOM]:w.An.DATA_ROOM,[w.If.METRIC_VIEW]:w.An.METRIC_VIEW},L={[O.iId.ALERT]:w.An.ALERT,[O.iId.ALERT_V2]:w.An.ALERT_V2,[O.iId.DASHBOARD_LAKEVIEW]:w.An.DASHBOARD,[O.iId.DASHBOARD_REDASH]:w.An.DASHBOARD,[O.iId.FILE]:w.An.FILE,[O.iId.FOLDER]:w.An.FOLDER,[O.iId.JOB]:w.An.JOB,[O.iId.PIPELINE]:w.An.PIPELINE,[O.iId.LIBRARY]:w.An.LIBRARY,[O.iId.MARKETPLACE]:w.An.MARKETPLACE,[O.iId.ML_ENDPOINT]:w.An.ENDPOINT,[O.iId.ML_MODEL]:w.An.MODEL,[O.iId.FUNCTION]:w.An.FUNCTION,[O.iId.MLFLOW_EXPERIMENT]:w.An.EXPERIMENT,[O.iId.NOTEBOOK]:w.An.NOTEBOOK,[O.iId.DESIGNER_FILE]:w.An.DESIGNER_FILE,[O.iId.PARTNER]:w.An.PARTNER,[O.iId.PROJECT]:w.An.REPO,[O.iId.QUERY]:w.An.QUERY,[O.iId.TABLE]:w.An.TABLE,[O.iId.VOLUME]:w.An.VOLUME,[O.iId.DATA_ROOM]:w.An.DATA_ROOM,[O.iId.APP]:w.An.APP};function S(e,t){if(!e)return null;let a=e.toUpperCase();if(w.im[a])return w.im[a];if((t??N()).includes(a))return a;return null}let N=(e=!1)=>(0,k.bz)(!0,e).flatMap(e=>{let t=C[e];return t?[t]:[]}),_=e=>Object.values(O.iId).filter(t=>{if(t===O.iId.DASHBOARD_REDASH)return!1;let a=L[t];return void 0!==a&&e.includes(a)}),B=e=>{switch(e){case w.An.TABLE:return(0,r.Y)(n.A,{});case w.An.VOLUME:return(0,r.Y)(o.A,{});case w.An.NOTEBOOK:return(0,r.Y)(i.A,{});case w.An.DESIGNER_FILE:return(0,r.Y)(s.A,{});case w.An.JOB:return(0,r.Y)(l.A,{});case w.An.PIPELINE:return(0,r.Y)(c.A,{});case w.An.QUERY:return(0,r.Y)(d.A,{});case w.An.DASHBOARD:return(0,r.Y)(u.A,{});case w.An.FOLDER:return(0,r.Y)(m.A,{});case w.An.FILE:return(0,r.Y)(f.A,{});case w.An.REPO:return(0,r.Y)(p.A,{});case w.An.LIBRARY:return(0,r.Y)(g.A,{});case w.An.ALERT:case w.An.ALERT_V2:return(0,r.Y)(E.A,{});case w.An.APP:return(0,r.Y)(A.A,{});case w.An.EXPERIMENT:return(0,r.Y)(b.A,{});case w.An.MODEL:return(0,r.Y)(h.A,{});case w.An.ENDPOINT:return(0,r.Y)(T.A,{});case w.An.FUNCTION:return(0,r.Y)(v.A,{});case w.An.PARTNER:return(0,r.Y)(P.A,{});case w.An.MARKETPLACE:return(0,r.Y)(R.A,{});case w.An.DATA_ROOM:return(0,r.Y)(I.A,{});case w.An.METRIC_VIEW:return(0,r.Y)(y.A,{});default:return(0,r.Y)(f.A,{})}}},848999:(e,t,a)=>{a.d(t,{Ef:()=>l});var r=a(223410),n=a(878723),o=a(29953);let i={notebooks:[],mlPersonaSwitches:[],hasBeenAutoOpted:!1,hasDismissedBanner:!1,bannerViews:0},s="autoOptPersonaData";class l{static getData(){if(window.prefs&&window.prefs.get(s))return window.prefs.get(s);return i}static saveData(e){if(!window.prefs)return;window.prefs.set(s,e)}static isEligibileForAutoOpt(){let{hasBeenAutoOpted:e}=this.getData();return!e&&r.T.getPersona()===n.FN.DS}static addNotebook(e){let t=this.getData(),a=t.notebooks.filter(t=>t.notebookId!==e);a.push({notebookId:e,date:Date.now()}),this.shouldAutoSwitchPersonas(a.map(e=>e.date),4)&&(t.hasBeenAutoOpted=!0,o.o.logClientSideEvent("mlGrowthExperimentEvent","autoSwitchFromNotebooks"),r.T.setPersona(n.FN.ML)),t.notebooks=a.sort((e,t)=>e.date-t.date).slice(-4),this.saveData(t),o.o.logClientSideEvent("mlGrowthExperimentEvent","mlNotebookRun",{notebookId:e})}static incrementPersonaSwitch(){let e=this.getData(),t=[...e.mlPersonaSwitches,Date.now()];this.shouldAutoSwitchPersonas(t,4)&&(e.hasBeenAutoOpted=!0,o.o.logClientSideEvent("mlGrowthExperimentEvent","autoSwitchFromPersona"),r.T.setPersona(n.FN.ML)),e.mlPersonaSwitches=t.sort((e,t)=>e-t).slice(-4),this.saveData(e),o.o.logClientSideEvent("mlGrowthExperimentEvent","manualPersonaSwitch")}static shouldAutoSwitchPersonas(e,t){if(!this.isEligibileForAutoOpt())return!1;let a=new Date().setDate(new Date().getDate()-28);return e.filter(e=>e>a).length>=t}static dismissBanner(e=!1){e&&r.T.setPersona(n.FN.DS);let t=this.getData();this.saveData({...t,hasDismissedBanner:!0}),o.o.logClientSideEvent("mlGrowthExperimentEvent",e?"undoPersonaSwitch":"dismissPersonaAutoOptBanner")}static shouldShowAutoOptBanner(){let e=this.getData();if(!e)return!1;let{hasBeenAutoOpted:t,hasDismissedBanner:a,initialBannerViewDate:o,bannerViews:i}=e;if(a)return!1;let s=new Date().setDate(new Date().getDate()-14);if(o&&o<s||i>15)return!1;return r.T.getPersona()===n.FN.ML&&t}static trackAutoOptBannerView(){let e=this.getData(),{initialBannerViewDate:t,bannerViews:a}=e,r=t?{bannerViews:a+1}:{initialBannerViewDate:Date.now(),bannerViews:1};this.saveData({...e,...r}),o.o.logClientSideEvent("mlGrowthExperimentEvent","viewPersonaAutoOptBanner")}}},873092:(e,t,a)=>{a.d(t,{e:()=>o,w:()=>i});var r=a(441535),n=a(611824);function o(){return(0,n._)()&&(0,r.W)("databricks.unifiedTagging.enableCertificationStatusSystemTag",!1)}function i(){return(0,n._)()&&((0,r.W)("databricks.unifiedTagging.enableLegacyCertificationSystemTags",!0)||o())}},883691:(e,t,a)=>{a.d(t,{R:()=>r});let r="app-top-toolbar-spacing"},889054:(e,t,a)=>{a.d(t,{eH:()=>k,VB:()=>R,A3:()=>O});var r=a(916424),n=a.n(r),o=a(139259),i=a.n(o),s=a(846044),l=a.n(s),c=a(640893),d=a(844760);function u(e,t,a,r,n,o,i){try{var s=e[o](i),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}let m=(e,{method:t,headers:a,...r}={})=>{var n;return(n=function*(){let n={method:t,credentials:"same-origin",headers:{"Content-Type":"application/json",...a},...r};return(0,d.S)(e,n)},function(){var e=this,t=arguments;return new Promise(function(a,r){var o=n.apply(e,t);function i(e){u(o,a,r,i,s,"next",e)}function s(e){u(o,a,r,i,s,"throw",e)}i(void 0)})})()};var f=a(189520),p=a(776869);function g(e,t,a,r,n,o,i){try{var s=e[o](i),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}function E(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var o=e.apply(t,a);function i(e){g(o,r,n,i,s,"next",e)}function s(e){g(o,r,n,i,s,"throw",e)}i(void 0)})}}var A=a(483588),b=a(22191),h=a(886100),T=a(301077);function v(e,t,a,r,n,o,i){try{var s=e[o](i),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(r,n)}function P(){let e=window.settings||window.top.settings;if(!e?.hasOwnProperty("user")||!e?.hasOwnProperty("orgId"))throw Error("Invalid environment for recents: user ID or org ID not found");return`${e.user}-${e.orgId}-recents-v1`}function R({id:e,type:t,name:a}){let r=Date.now(),n={id:e,type:t,name:a,lastAccessedTimestamp:r,lastValidatedTimestamp:r},o=w[t];o&&(0,c.F)({type:o,lastAccessedTimestamp:n.lastAccessedTimestamp,id:e});try{let a=I(),r=[n,...a.filter(a=>a.id!==e||a.type!==t)];y(r)}catch(e){h.iT.log(b.Es.DatabricksOne,"Unable to register recent",e)}return n}function I(){try{let e=window.localStorage.getItem(P());if(null!==e)return JSON.parse(e)}catch(e){h.iT.log(b.Es.DatabricksOne,"Unable to retrieve local recents",e)}return[]}function y(e){let t=P(),a=JSON.stringify(Object.values(n()(e,e=>e.type)).flatMap(e=>e.slice(0,30)).sort((e,t)=>t.lastAccessedTimestamp-e.lastAccessedTimestamp));(0,T.Q)(t,a,e=>{throw e})}function O(e){var t;return(t=function*({numRecents:e=15,assetTypes:t,stalenessThreshold:a=36e5,apolloClient:r}){try{void 0===t&&(t=Object.values(f.P));let o=I(),[s,c]=l()(o,e=>void 0===t||t.includes(e.type)),d=s.slice(0,e);c.push(...s.slice(e));let u=Date.now(),[g,A]=l()(d,e=>a<=0||void 0===e.name||u-e.lastValidatedTimestamp>a),T=n()(g,e=>e.type),v=[],P=[];Object.keys(T).forEach(e=>{let t,a=T[e],n=Promise.resolve([]);switch(e){case f.P.NOTEBOOK:case f.P.FILE:n=m("/ajax-api/2.0/tree/get-node-bulk",{method:"POST",body:JSON.stringify({ids:a.map(({id:e})=>parseInt(e))})}).then(e=>{if(!e.ok)throw Error("Unexpected Error in API Request");return e.json()}).then(({infos:e})=>e?a.map(t=>{let a=e.find(e=>!e.is_deleted&&parseInt(t.id)===e.id);if(void 0===a)return;let r=a.full_path;return{...t,name:r.substring(r.lastIndexOf("/")+1),ucSecurableKind:null}}).filter(e=>void 0!==e):[]);break;case f.P.EXPERIMENT:n=E(function*(){let e=a.map(e=>e.id),t=yield m("/ajax-api/2.0/mlflow/databricks/experiments/batch-get-experiments",{method:"POST",body:JSON.stringify({experiment_ids:e})});if(!t.ok)throw Error("Unexpected Error in API Request");return(yield t.json()).experiments_databricks.map(e=>{let t=a.find(t=>e.experiment.experiment_id===t.id);if(!t)return;return{...t,name:e.experiment.name.split("/").pop()??"",ucSecurableKind:null}})})();break;case f.P.MODEL:case f.P.ENDPOINT:n=E(function*(){let e=a.map(e=>e.id),t=yield m("/ajax-api/2.0/mlflow/databricks/registered-models/list-by-id",{method:"POST",body:JSON.stringify({ids:e})});if(!t.ok){if(404!==t.status&&403!==t.status)throw Error("Unexpected Error in API Request");return[]}let r=yield t.json();return r.registered_models_databricks?.map(e=>{let t=a.find(t=>t.id===e.id);if(!t)return;return{...t,name:e.name,ucSecurableKind:null}})})();break;case f.P.FEATURE_TABLE:n=E(function*(){let e=a.map(e=>e.id),t=yield m("/ajax-api/2.0/feature-store/feature-tables/get-by-ids",{method:"POST",body:JSON.stringify({ids:e})});if(!t.ok)throw Error("Unexpected Error in API Request");return(yield t.json()).feature_tables.map(e=>{let t=a.find(t=>e.id===t.id);if(!t)return;return{...t,name:e.name??"",ucSecurableKind:null}})})();break;case f.P.QUERY:case f.P.DASHBOARD:case f.P.ALERT:n=m((t={[f.P.QUERY]:"queries",[f.P.ALERT]:"alerts",[f.P.DASHBOARD]:"dashboards"},`/ajax-api/2.0/preview/sql/bulk-permissions/${t[e]}/filter`),{method:"POST",body:JSON.stringify({object_ids:a.map(({id:e})=>e)})}).then(e=>{if(!e.ok)throw Error("Unexpected Error in API Request");return e.json()}).then(({viewable_objects:e})=>a.filter(t=>t.id in e).map(t=>({...t,name:e[t.id].name,ucSecurableKind:null})));break;case f.P.ENDPOINT_CENTRIC_ENDPOINT:n=E(function*(){let e=yield m("/ajax-api/2.0/serving-endpoints",{method:"GET"});if(!e.ok)throw Error("Unexpected Error in API Request");let t=yield e.json();return a.map(e=>{let a=t.endpoints.find(t=>t.id===e.id);if(a)return{...e,name:a.name,ucSecurableKind:null}})})();break;case f.P.JOB:n=E(function*(){let e=a.map(({id:e})=>parseInt(e)),{data:t,error:n}=yield r.query({query:p.$,variables:{first:e.length,jobIds:e},fetchPolicy:"no-cache"});if(n)throw Error("Unexpected Error in API Request");return a.map(e=>{let a=t.jobs?.edges.find(t=>parseInt(e.id)===t.node.id);if(void 0===a)return;return{...e,name:a.node.settings?.name,ucSecurableKind:null}}).filter(e=>void 0!==e)})();break;case f.P.MARKETPLACE_LISTING:n=E(function*(){return a.map(e=>({...e,name:e.name,ucSecurableKind:null}))})()}v.push(n.catch(t=>(P=P.concat(a),h.iT.log(b.Es.DatabricksOne,"unifiedRecentsWarning",{error:t,assetType:e}),[])))});let R=(yield Promise.all(v)).flat().filter(e=>void 0!==e).map(e=>({...e,lastValidatedTimestamp:u})),O=i()(R.concat(A),["lastAccessedTimestamp"],["desc"]),k=i()(O.concat(c).concat(P),["lastAccessedTimestamp"],["desc"]);return y(k),O}catch(e){return h.iT.log(b.Es.DatabricksOne,"Unable to retrieve and validate recents",e),[]}},function(){var e=this,a=arguments;return new Promise(function(r,n){var o=t.apply(e,a);function i(e){v(o,r,n,i,s,"next",e)}function s(e){v(o,r,n,i,s,"throw",e)}i(void 0)})}).apply(this,arguments)}let k={[A.z$1.ALERT]:f.P.ALERT,[A.z$1.DASHBOARD]:f.P.DASHBOARD,[A.z$1.DASHBOARD_V3]:f.P.DASHBOARD_V3,[A.z$1.FILE]:f.P.FILE,[A.z$1.NOTEBOOK]:f.P.NOTEBOOK,[A.z$1.QUERY]:f.P.QUERY,[A.z$1.EXPERIMENT]:f.P.EXPERIMENT,[A.z$1.MODEL]:f.P.MODEL,[A.z$1.ENDPOINT]:f.P.ENDPOINT,[A.z$1.FEATURE_TABLE]:f.P.FEATURE_TABLE,[A.z$1.JOB]:f.P.JOB,[A.z$1.ENDPOINT_CENTRIC_ENDPOINT]:f.P.ENDPOINT_CENTRIC_ENDPOINT,[A.z$1.UC_TABLE]:f.P.TABLE,[A.z$1.UC_CATALOG]:f.P.CATALOG,[A.z$1.UC_SCHEMA]:f.P.SCHEMA,[A.z$1.UC_MODEL]:f.P.UC_MODEL,[A.z$1.UC_VOLUME]:f.P.VOLUME,[A.z$1.UC_FUNCTION]:f.P.FUNCTION,[A.z$1.MARKETPLACE_LISTING]:f.P.MARKETPLACE_LISTING,[A.z$1.PIPELINE]:f.P.PIPELINE,[A.z$1.DATA_ROOM]:f.P.DATA_ROOM,[A.z$1.APP]:f.P.APP,[A.z$1.APP_USE]:f.P.APP,[A.z$1.ALERT_V2]:f.P.ALERT_V2},w={[f.P.ALERT]:A.z$1.ALERT,[f.P.DASHBOARD]:A.z$1.DASHBOARD,[f.P.DASHBOARD_V3]:A.z$1.DASHBOARD_V3,[f.P.FILE]:A.z$1.FILE,[f.P.NOTEBOOK]:A.z$1.NOTEBOOK,[f.P.QUERY]:A.z$1.QUERY,[f.P.EXPERIMENT]:A.z$1.EXPERIMENT,[f.P.MODEL]:A.z$1.MODEL,[f.P.ENDPOINT]:A.z$1.ENDPOINT,[f.P.FEATURE_TABLE]:A.z$1.FEATURE_TABLE,[f.P.JOB]:A.z$1.JOB,[f.P.ENDPOINT_CENTRIC_ENDPOINT]:A.z$1.ENDPOINT_CENTRIC_ENDPOINT,[f.P.TABLE]:A.z$1.UC_TABLE,[f.P.CATALOG]:A.z$1.UC_CATALOG,[f.P.SCHEMA]:A.z$1.UC_SCHEMA,[f.P.UC_MODEL]:A.z$1.UC_MODEL,[f.P.VOLUME]:A.z$1.UC_VOLUME,[f.P.FUNCTION]:A.z$1.UC_FUNCTION,[f.P.MARKETPLACE_LISTING]:A.z$1.MARKETPLACE_LISTING,[f.P.PIPELINE]:A.z$1.PIPELINE,[f.P.DATA_ROOM]:A.z$1.DATA_ROOM,[f.P.APP]:A.z$1.APP,[f.P.ALERT_V2]:A.z$1.ALERT_V2,[f.P.DESIGNER_FILE]:A.z$1.DESIGNER_FILE}},889140:(e,t,a)=>{a.d(t,{t:()=>r});let r=(0,a(696514).fH)("Repos::RepoGitModal")},918071:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),o=a(375214);function i(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.52 2.3a.75.75 0 0 1 .6-.3h7.76a.75.75 0 0 1 .6.3l2.37 3.158a.75.75 0 0 1 .15.45v.842q0 .059-.009.115A2.31 2.31 0 0 1 14 8.567v5.683a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1-.75-.75V8.567A2.31 2.31 0 0 1 1 6.75v-.841a.75.75 0 0 1 .15-.45zm7.605 6.068c.368.337.847.557 1.375.6V13.5h-9V8.968a2.3 2.3 0 0 0 1.375-.6c.411.377.96.607 1.563.607.602 0 1.15-.23 1.562-.607.411.377.96.607 1.563.607.602 0 1.15-.23 1.562-.607m2.375-2.21v.532l-.001.019a.813.813 0 0 1-1.623 0l-.008-.076a1 1 0 0 0 .012-.133V4zm-3.113.445a1 1 0 0 0-.013.106.813.813 0 0 1-1.624-.019V3.5h1.63v3q0 .053.007.103M7.25 3.5v3.19l-.001.019a.813.813 0 0 1-1.623 0l-.006-.064V3.5zM4.12 4 2.5 6.16v.531l.001.019a.813.813 0 0 0 1.619.045z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(o.I,{ref:t,...e,component:i}));s.displayName="StorefrontIcon";let l=s},918526:(e,t,a)=>{a.d(t,{j:()=>d});var r=a(610435),n=a(995470);a(692738);var o=a(497895),i=a(227195),s=a(705639),l=a(639712),c=a(99206);let d=({trigger:e,content:t,side:a="top",sideOffset:o=4,align:s="center",minWidth:l=220,maxWidth:c,backgroundColor:d,withArrow:u=!0,...f})=>{let{getPopupContainer:p}=(0,i.G)(),g=m({minWidth:l,maxWidth:c,backgroundColor:d});return(0,r.FD)(n.bL,{...f,children:[(0,r.Y)(n.l9,{asChild:!0,children:e}),(0,r.Y)(n.ZL,{container:p&&p(),children:(0,r.FD)(n.UC,{side:a,sideOffset:o,align:s,css:g.content,children:[t,u&&(0,r.Y)(n.i3,{css:g.arrow})]})})]})},u={arrowWidth:12,arrowHeight:6,arrowBottomLength:()=>30,arrowSide(){return 2*(this.arrowHeight**2*2)**.5},arrowStrokeWidth:()=>2},m=({minWidth:e,maxWidth:t,backgroundColor:a})=>{let{theme:r}=(0,o.wn)();return{content:{backgroundColor:a??r.colors.backgroundPrimary,color:r.colors.textPrimary,lineHeight:r.typography.lineHeightBase,border:`1px solid ${r.colors.border}`,borderRadius:(0,c.S)(s.c.POPOVER_BORDER_RADIUS,r.borders.borderRadiusSm),padding:`${r.spacing.sm}px`,boxShadow:r.shadows.lg,userSelect:"none",zIndex:r.options.zIndexBase+30,minWidth:e,maxWidth:t,...(0,l.WO)(r),a:(0,l.dg)({color:r.colors.actionTertiaryTextDefault,cursor:"default","&:hover, &:focus":{color:r.colors.actionTertiaryTextHover}}),"&:focus-visible":{outlineStyle:"solid",outlineWidth:"2px",outlineOffset:"1px",outlineColor:r.colors.actionDefaultBorderFocus}},arrow:{fill:a??r.colors.backgroundPrimary,height:u.arrowHeight,stroke:r.colors.borderDecorative,strokeDashoffset:-u.arrowBottomLength(),strokeDasharray:u.arrowBottomLength()+2*u.arrowSide(),strokeWidth:u.arrowStrokeWidth(),width:u.arrowWidth,position:"relative",top:-1,zIndex:r.options.zIndexBase+30}}}},921195:(e,t,a)=>{a.d(t,{Hn:()=>P,Kt:()=>g,MH:()=>A,MZ:()=>E,Ng:()=>v,Y8:()=>b,i3:()=>T,k_:()=>h});var r,n=a(610435),o=a(16778),i=a.n(o),s=a(246700),l=a(405706);if(13057==a.j)var c=a(79570);if(13057==a.j)var d=a(465946);var u=a(686560);if(13057==a.j)var m=a(337706);if(13057==a.j)var f=a(737358);var p=a(429072),g=((r={}).SERVING="SERVING",r.MANAGEMENT="MANAGEMENT",r);function E(e,t){let a=(0,u.d)("accountId",""),r=`accounts/${a}`;return!e&&t?`${r}/tagPolicies/${t}`:r}function A(e){return e===p.WO.SYSTEM}let b=(e,t,a)=>{if(A(t))return{icon:(0,n.Y)(s.A,{style:a??{marginRight:e.spacing.xs}}),color:"indigo"};return{icon:(0,n.Y)(l.A,{style:a??{marginRight:e.spacing.xs}}),color:"turquoise"}};function h(e,t,a){let{icon:r,color:o}=b(e,a,{marginRight:0}),s=a===p.WO.DEFAULT?t.formatMessage({id:"Q5nQMu",defaultMessage:"User-Defined"}):i()(a);if(!r)return(0,n.Y)(n.FK,{});return(0,n.Y)(c.m,{componentId:"discovery.data_explorer.governed_tag_list.tag_type_tooltip",content:s,children:(0,n.Y)(d.v,{componentId:"discovery.data_explorer.governed_tag_list.tag_type_icon",color:o,"aria-label":s,children:r})})}function T(e){switch(e){case p.YD.DEFAULT:return p.WO.DEFAULT;case p.YD.SYSTEM:return p.WO.SYSTEM;default:return}}function v(e){let t="/governance/governed-tags";return e?`${t}/${encodeURIComponent(e)}`:t}function P(){return(0,f.AO)({pathname:v(),search:(0,m.XZ)({tab:"automations"})})}},924876:(e,t,a)=>{a.d(t,{$k:()=>el,A_:()=>w,DW:()=>x,Ew:()=>en,F2:()=>ep,FS:()=>y,HW:()=>eN,JG:()=>ee,L4:()=>P,NY:()=>Q,Nd:()=>Y,Nl:()=>X,Nm:()=>eS,O9:()=>_,Om:()=>M,PE:()=>et,PJ:()=>V,Pj:()=>eb,QN:()=>I,Ry:()=>N,Sd:()=>er,T8:()=>J,T9:()=>L,Ub:()=>eR,Uy:()=>K,VN:()=>W,VT:()=>F,Vr:()=>Z,WK:()=>D,WV:()=>G,X4:()=>$,Xh:()=>ea,Xs:()=>eO,Yb:()=>k,Yd:()=>eC,ZV:()=>S,_J:()=>ey,_n:()=>ed,aH:()=>ef,b6:()=>em,c6:()=>h,c8:()=>eL,cG:()=>T,dN:()=>ev,e:()=>C,eW:()=>eg,e_:()=>R,f2:()=>ek,gK:()=>ei,iM:()=>H,kN:()=>p,kd:()=>eT,kl:()=>eh,m2:()=>eA,mU:()=>O,mf:()=>z,mk:()=>eE,my:()=>es,sN:()=>g,sr:()=>ew,su:()=>E,tj:()=>b,uR:()=>q,uy:()=>v,vr:()=>eD,wQ:()=>eu,wu:()=>ec,x6:()=>eI,xJ:()=>eo,xb:()=>U,xr:()=>j,yD:()=>A,yd:()=>B,zu:()=>eP});var r=a(441535),n=a(726583);if(13057==a.j)var o=a(886100);if(13057==a.j)var i=a(22191);var s=a(8698),l=a(411424),c=a(707076),d=a(521200),u=a(993533);if(13057==a.j)var m=a(371303);var f=a(889885);function p(){return!!((0,m.sT)("databricks.fe.enableJobsObservabilityUI",!1)||(0,f.FI)("enableJawsObservabilityUI"))}function g(){if((0,r.W)("databricks.elasticspark.enableServerlessScalaTasks",!1))return!0;return(0,r.W)("serverless_jar_jobs",!1)}function E(){return(0,r.W)("databricks.fe.jaws.enableServerlessComputeForScalaTasksByDefault",!0)}function A(e){let t=(0,r.W)("databricks.fe.jaws.repair.unrepairableTaskTypes","[]"),a=(()=>{try{return JSON.parse(t)}catch{return}})(),n=Array.isArray(a);return n||o.iT.sev2(i.Es.WorkflowsOrchestration,"Failed to parse JSON array flag: databricks.fe.jaws.repair.unrepairableTaskTypes",JSON.stringify(t)),(n?a:[]).includes(e)}let b=()=>(0,r.W)("databricks.fe.jaws.continuousJob.triggerStatePollingIntervalMs",5e3),h=()=>(0,r.W)("databricks.elasticspark.maxCharsInJobDescription",1024),T=()=>!!(0,r.W)("databricks.elasticspark.sendingAlertsEnabled",!1)&&!!(0,r.W)("databricks.elasticspark.healthSettingsColumnEnabled",!1),v=()=>(0,r.W)("databricks.elasticspark.dependencyInfo.ui.enabled",!1),P=()=>(0,r.W)("databricks.webapp-elasticspark.enableNotebookOnWarehousesJobIntegration",!1)||(0,r.W)("databricks.webapp.enableSqlWarehouseInNotebookOnGCP",!1),R=()=>(0,n.ue)(),I=()=>(0,n.iQ)()&&(0,c.MH)(),y=()=>(0,r.W)("databricks.fe.jaws.enableTagsFilterOnJobsList",!1)&&(0,n.iQ)(),O=()=>(0,r.W)("databricks.fe.jobs.referencingValues.monaco.byot.enabled",!1),k=()=>(0,r.W)("jobs_bulk_runs",null)??(0,r.W)("databricks.fe.jobs.backfills.enabled",!1),w=()=>(0,r.W)("databricks.fe.jobs.backfills.customGranularity.enabled",!1),D=()=>w()&&(0,r.W)("databricks.fe.jobs.backfills.autoRangeFromFailures.enabled",!1),C=()=>(0,r.W)("databricks.fe.jaws.enableListViewForJobRunDetails",!1),L=()=>(0,r.W)("databricks.fe.jaws.enableListViewForEditingJob",!1),S=()=>(0,r.W)("databricks.fe.jobs.useApi22ForListJobs",!1)&&(0,r.W)("databricks.elasticspark.jobs-api.api22enabled",!1),N=()=>(0,r.W)("databricks.budgetPolicies.isBudgetPoliciesEnableOnRegion",!1)&&((0,r.W)("budget_policy",null)??(0,r.W)("databricks.budgetPolicies.enableBudgetPoliciesFeatureByPercentage",!1))&&(0,r.W)("databricks.elasticspark.budgetpolicies.enableBudgetPoliciesInJobs",!1)||_(),_=()=>(0,r.W)("usage_policy_entitle",null)??(0,r.W)("databricks.usagePolicies.enableEntitlement",!1),B=()=>(0,r.W)("usage_rate_limit",null)??(0,r.W)("databricks.budgetPolicies.enableBudgetPolicyRateLimit",!1),$=()=>(0,r.W)("databricks.fe.jobs.preselectEnabledTasksFromRun",!1),x=()=>(0,n.ue)(),F=()=>(0,r.W)("databricks.fe.jaws.ignoreSavedCreationDateSortByOnJobsList",!0),M=()=>(0,r.W)("databricks.fe.jaws.enableBetterTasksListFiltering",!1),z=()=>(0,n.ZW)()&&(0,r.W)("databricks.fe.jaws.refetchAssetsListOnMutation",!1),W=()=>(0,r.W)("databricks.fe.jaws.enableBurnRateAlertForLakeFlowList",!1),U=()=>(0,r.W)("databricks.fe.jaws.enableApi22ForUseJobData",!1),Y=()=>(0,n.ZW)()&&(0,r.W)("databricks.fe.jaws.enablePipelineTypeInUnifiedList",!1),H=()=>Y(),V=()=>Y(),j=()=>(0,n.ZW)()&&(0,r.W)("databricks.fe.jaws.enableSystemManagedJobsInUnifiedList",!1)&&(0,r.W)("databricks.elasticspark.lakeflow.returnSystemManagedResources",!1),J=()=>j()&&(0,r.W)("databricks.fe.jaws.enablePipelinesInSystemManagedTab",!1),K=()=>(0,r.W)("lakeflow_runs_list",!1)&&(0,r.W)("databricks.elasticspark.lakeflow.enableListLakeflowRunsApi",!1),G=()=>(0,r.W)("databricks.fe.jaws.showNameFilterForPipelinesInRunsList",!0),q=()=>(0,r.W)("databricks.fe.jaws.enableTaskPaletteRecentsList",!0),Q=()=>!!((0,r.W)("databricks.elasticspark.enableConfigurableTaskRetryInContinuousJobFlag",!1)&&(0,r.W)("databricks.fe.jaws.enableContinuousTriggerAdvanced",!1)),X=()=>(0,r.W)("databricks.fe.budget_policy.renameServerlessPolicy",!1),Z=()=>(0,r.W)("databricks.fe.budget_policy.enableUsagePolicyRunSidePanel",!1);function ee(){return(0,r.W)("databricks.fe.jaws.environments.enableJavaDependenciesFieldMigration",!1)}let et=()=>(0,r.W)("databricks.fe.jaws.showDockerImageInRunDetails",!0),ea=()=>(0,r.W)("system_managed_job",!1)??!1;function er(e){return ea()&&(0,r.W)("databricks.fe.jaws.enableManagedByField",!1)&&e.managedBy===u.Kmw.SCHEDULED_MV_REFRESH}let en=()=>(0,r.W)("databricks.fe.data.tableRefreshScheduleNewUI",!1),eo=()=>(0,r.W)("databricks.fe.jaws.runsLists.useAssetPermissionLevel",!1)&&K(),ei=()=>(0,r.W)("databricks.fe.jaws.environments.enableJarDependenciesSharedComponent",!1),es=()=>(0,r.W)("databricks.fe.jaws.rateLimits.maxQueries",50),el=()=>(0,r.W)("databricks.fe.jaws.enableNewTimezoneExperience",!1),ec=()=>(0,r.W)("databricks.fe.jaws.enableJobClusterPolicyComplianceUI",!1),ed=()=>(0,r.W)("databricks.fe.jaws.enableRunTimings",!1),eu=()=>(0,r.W)("sql_cond_triggers",!1),em=()=>(0,r.W)("databricks.fe.jaws.enableSafeParamRefParsing",!1),ef=()=>(0,r.W)("databricks.elasticspark.environments.allowJarTaskWithBaseEnvironment",!1),ep=()=>(0,r.W)("databricks.fe.jaws.enableAiRuntimeRunsInJobsList",!1),eg=()=>K()&&(0,d.xh)()&&(0,r.W)("databricks.fe.jaws.enableViewAllRunsInLakeflowList",!1),eE=()=>(0,r.W)("databricks.fe.jaws.enableQueryHistoryLinkInSparkColumn",!1),eA=()=>(0,r.W)("databricks.fe.jaws.enablePipelineTaskPerformanceTarget",!1),eb=()=>(0,r.W)("databricks.fe.jaws.pipelineStopAwaitConfirmedStatus",!1)&&ek(),eh=()=>(0,r.W)("databricks.fe.jaws.enableAutopilotTab",!1),eT=()=>(0,r.W)("databricks.fe.jaws.enableAlwaysShowResolvedParams",!1),ev=()=>(0,r.W)("databricks.fe.jaws.enableWorkspaceObjectPathInfo",!1),eP=()=>(0,r.W)("databricks.fe.jaws.cloneJob.provideParentPath",!1),eR=()=>!!(0,r.W)("serverless_workload_observability",!1),eI=()=>eR()&&!!(0,s.ml)(l.p.EnableServerlessObservabilityToggle),ey=()=>((0,s.Fg)(l.p.EnableServerlessObservabilityToggle),eI()),eO=()=>(0,r.W)("databricks.fe.jaws.enableTopLevelTabsOnJobsPage",!1),ek=()=>(0,r.W)("databricks.fe.jaws.enablePipelineStopSpinOnConfirm",!1),ew=()=>(0,r.W)("databricks.fe.jaws.fixDisabledFilterLayoutShift",!1),eD=()=>K()&&ew()&&(0,r.W)("databricks.fe.jaws.enableRunIdFilterInRunsList",!1),eC=()=>(0,r.W)("databricks.fe.jaws.diagnoseErrorForAllTaskTypes",!1),eL=()=>(0,r.W)("databricks.fe.jaws.jobHealth.dqmEnablement",!1),eS=()=>(0,n.ZW)()&&(0,r.W)("databricks.lakeflow.enableJobHealthPrivatePreview",!1)&&(0,r.W)("databricks.fe.lakeflow.enableJobHealthInsights",!1),eN=()=>(0,r.W)("databricks.fe.jaws.enableSkipQueryUntilFiltersReady",!1)},955897:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(610435),n=a(692738),o=a(375214);function i(e){return(0,r.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,r.Y)("path",{fill:"currentColor",d:"M5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"}),(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.768 1.018a.75.75 0 0 0-.75.75v6.1c0 .199.079.39.22.53l6.884 6.885a.75.75 0 0 0 1.06 0l6.101-6.1a.75.75 0 0 0 0-1.061L8.4 1.237a.75.75 0 0 0-.53-.22zm6.884 12.674L2.518 7.557v-5.04h5.04l6.134 6.135z",clipRule:"evenodd"})]})}let s=(0,n.forwardRef)((e,t)=>(0,r.Y)(o.I,{ref:t,...e,component:i}));s.displayName="TagIcon";let l=s}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/60295.161ed5a63b.chunk.js.map