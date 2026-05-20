"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[65577],{95853:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.5 0v2H1.75a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75V2.75a.75.75 0 0 0-.75-.75H11.5V0H10v2H6V0zm9 3.5v2h-11v-2zM2.5 7v6.5h11V7z",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="CalendarIcon";let l=s},108167:(e,t,a)=>{a.d(t,{$G:()=>U,CJ:()=>w,Dm:()=>x,Dn:()=>G,EF:()=>V,G$:()=>L,IX:()=>H,Ll:()=>h,Lr:()=>N,Sq:()=>K,bu:()=>y,cJ:()=>p,eo:()=>F,gW:()=>P,jV:()=>M,p8:()=>Y,v8:()=>v,vX:()=>C});var n,r=a(610435),i=a(16778),o=a.n(i),s=a(692738),l=a(955897),E=a(342411),d=a(441535),A=a(967166),u=a(5697),c=a(707076),R=a(210785),T=a(141078),S=a(921195),m=a(660618),f=a(873092),O=a(611824),_=a(425628),I=a(765288);function g(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}let v=/^$|^\S(?:.*\S)?$/,p={key:void 0,value:""};function h(e){return e.reduce((e,t)=>(e[t.key]=t,e),{})}function N(e){let{discoveryTags:t,governedTags:a,governedTagKeys:n}=e.reduce((e,t)=>("string"==typeof t?e.discoveryTags.push({name:t,type:R.P.DISCOVERY}):(e.governedTags.push({name:t.key,type:R.P.GOVERNED,tagId:t.id,allowedValues:t.values?.map(e=>e.name),namespace:t.namespace}),e.governedTagKeys.add(t.key)),e),{governedTags:[],governedTagKeys:new Set,discoveryTags:[]}),r=t.filter(({name:e})=>!n.has(e));return a.concat(r).sort((e,t)=>e.name.localeCompare(t.name))}function L(e,t){if(t&&t.length>0){if(!(void 0!==e&&e)||!t.includes(e))return!0}else if(e&&e.trim()?.length>0)return!0;return!1}let M=(e,t)=>t?(0,r.Y)(E.sA,{id:"ES6F5Q",defaultMessage:"{tagValue} is not an allowed value for tag key {tagKey}",values:{tagValue:t,tagKey:e}}):(0,r.Y)(E.sA,{id:"fDVsd8",defaultMessage:"A value is required for tag key {tagKey}",values:{tagKey:e}});function C(e,t,a){let n=(0,O._)();if(!t?.name||!n)return;if(t.type===R.P.DISCOVERY)return{icon:(0,r.Y)(l.A,{style:a})};return(0,S.Y8)(e,t?.namespace,a)}let D=["system.","class."];function U(e,t){if(D.some(t=>e.startsWith(t)))if(e===y)return{formattedTagKey:o()(t),formattedTagValue:void 0};else{let[,a]=e.split(".");return{formattedTagKey:a,formattedTagValue:t}}return{formattedTagKey:e,formattedTagValue:t}}let P="system.Certified",w="system.Deprecated",y="system.certification_status";var V=((n={}).CERTIFIED="certified",n.DEPRECATED="deprecated",n.NONE="none",n);let F=[P,w];function H(e){if((0,f.e)()){let t=e.find(e=>e.tag_key===y);return{isCertified:t?.tag_value==="certified",isDeprecated:t?.tag_value==="deprecated"}}return{isCertified:e.some(e=>e.tag_key===P),isDeprecated:e.some(e=>e.tag_key===w)}}function Y(e){if(!(0,f.e)())return!1;switch(e){case u.Z6.Notebook:return(0,d.W)("databricks.fe.filebrowser.enableNotebookTagging",!1);case u.Z6.Lakeview:return(0,I.w)();case u.Z6.DataRoom:return(0,_.g)();default:return!1}}function G(e,t){let a=e.startsWith("system."),n=t.startsWith("system.");if(e===y&&t!==y)return 1;if(e!==y&&t===y||a&&!n)return -1;if(!a&&n)return 1;return e.localeCompare(t)}function K(){let e=(0,T.mK)(),t=(0,c.Kt)(),a=(0,A.hG)(),n=(0,s.useRef)(a);return(0,s.useCallback)((a,r,i)=>{var o;return(o=function*(){if(a===m.UQ)return[];return n.current({governance_ui_log:{event_name:"fetchTablesWithDeprecatedTagQuery"}}),t&&(0,f.e)()?e.query({query:b,variables:{catalog:a,schema:r,limit:i},fetchPolicy:"cache-first"}).then(e=>e.data.searchmidtierSearchUnifiedSearch?.results?.map(e=>({catalog:a,schema:r,entity:e.name})).filter(e=>!!e.entity)??[]).catch(()=>[]):t&&(0,f.w)()?e.query({query:B,variables:{catalog:a,schema:r,limit:i},fetchPolicy:"cache-first"}).then(e=>e.data.searchmidtierSearchUnifiedSearch?.results?.map(e=>({catalog:a,schema:r,entity:e.name})).filter(e=>!!e.entity)??[]).catch(()=>[]):[]},function(){var e=this,t=arguments;return new Promise(function(a,n){var r=o.apply(e,t);function i(e){g(r,a,n,i,s,"next",e)}function s(e){g(r,a,n,i,s,"throw",e)}i(void 0)})})()},[e,t])}let B=(0,T.J1)`
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
`,b=(0,T.J1)`
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
`,x=(0,T.J1)`
  fragment EntityTagsData on SearchmidtierSearchUnifiedResult {
    tags {
      tag_key: name
      tag_value: value
    }
  }
`},118389:(e,t,a)=>{a.d(t,{P:()=>r});var n=a(441535);function r(){return(0,n.W)("discover_page",!1)&&(0,n.W)("domains",!1)}},123791:(e,t,a)=>{a.d(t,{$:()=>m,l:()=>S});var n=a(692738),r=a(536717),i=a.n(r),o=a(412836),s=a(869087),l=a(533044),E=a(871893),d=a(84457),A=a(153361),u=a(473697);function c(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function R(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){c(i,n,r,o,s,"next",e)}function s(e){c(i,n,r,o,s,"throw",e)}o(void 0)})}}let T=e=>{if(!e)return null;if(e?.categorical)return"categorical";if(e?.categorical_list)return"categorical_list";if(e?.text)return"text";if(e?.text_list)return"text_list";if(e?.numeric)return"numeric";return null},S=e=>{let t=T(e);if(!t||!(e=>{if("object"!=typeof e||null===e||Array.isArray(e)||!i()(e.name)||!e.name||"FEEDBACK"!==e.type&&"EXPECTATION"!==e.type)return!1;return!!T(e)})(e))return null;return{...e,dataType:t}},m=e=>{let{data:t,loading:a,apiError:r,refetch:c}=(0,u.L)({experimentId:e&&(0,A.K_)()?e:void 0,options:{skip:!(0,A.K_)()}}),{reviewApp:T,isLoading:m,error:f}=(0,l.JZ)((0,A.K_)()&&e||""),O=(0,n.useMemo)(()=>{if(!t?.experiment)return[];let e=t.experiment.tags?.find(e=>e.key===E.IK);if(!e?.value)return[];let a=(0,d.pt)(e.value);if(Array.isArray(a))return a.filter(e=>i()(e));return[]},[t]),_=(0,n.useMemo)(()=>{if(!T?.labeling_schemas)return[];return T.labeling_schemas.map(S).filter(e=>null!==e)},[T]),I=(0,n.useMemo)(()=>{if(0===O.length)return[];return O.map(e=>_.find(t=>t.name===e)).filter(e=>null!==e)},[O,_]),{mutateAsync:g}=(0,o.n_)({mutationFn:t=>R(function*(){if(!e)throw Error("No experiment ID provided");if(O.includes(t))return;let a=[...O,t];yield s.x.setExperimentTag({experiment_id:e,key:E.IK,value:JSON.stringify(a)}),yield c()})()}),{mutateAsync:v}=(0,o.n_)({mutationFn:t=>R(function*(){if(!e)throw Error("No experiment ID provided");let a=O.filter(e=>e!==t);yield s.x.setExperimentTag({experiment_id:e,key:E.IK,value:JSON.stringify(a)}),yield c()})()});return{schemas:I,allAvailableSchemas:_,isLoading:a||m,error:r||f,addSchema:g,removeSchema:v}}},137626:(e,t,a)=>{a.d(t,{F:()=>l});var n=a(596686),r=a(692738),i=a(442492),o=a(993204);function s(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}let l=({traceSearchLocations:e,reviewAppId:t,labelingSessionId:a,traceIdToItemIdMap:l})=>{let E=(0,i.C)(),d=(0,o.A)();return(0,r.useMemo)(()=>{if(e.some(n.zW))return{isDisabled:!0,disabledReason:d.formatMessage({id:"HvhDF1",defaultMessage:"Trace deletion is not supported for traces located in Unity Catalog schema. You can delete traces from corresponding Delta table."})};return{deleteTraces:(e,n)=>{var r;return(r=function*(){return E.mutateAsync({experimentId:e,traceRequestIds:n,reviewAppId:t,labelingSessionId:a,traceIdToItemIdMap:l})},function(){var e=this,t=arguments;return new Promise(function(a,n){var i=r.apply(e,t);function o(e){s(i,a,n,o,l,"next",e)}function l(e){s(i,a,n,o,l,"throw",e)}o(void 0)})})()}}},[e,d,t,a,l,E])}},150190:(e,t,a)=>{a.d(t,{H:()=>s});var n=a(160603),r=a(733845),i=a(302118);function o(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function s(e){let t=(0,r.O)();return(0,n.useQuery)(["get_user_info"],()=>{var e;return(e=function*(){if(t)return yield i.k.getUserInfo();return{is_metastore_admin:!1}},function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function s(e){o(i,n,r,s,l,"next",e)}function l(e){o(i,n,r,s,l,"throw",e)}s(void 0)})})()},e)}},153785:(e,t,a)=>{a.d(t,{$:()=>l});var n=a(768847),r=a(869087),i=a(692738),o=a(84457);function s(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}let l=({onSuccess:e,existingTagKeys:t=[]})=>{let{showEditTagsModal:a,EditTagsModal:l}=(0,n.Q)({saveTagsHandler:(e,t,a)=>{var n;return(n=function*(){if(!e.traceRequestId)return;let n=e.traceRequestId,i=a.filter(({key:e,value:a})=>!t.some(({key:t,value:n})=>t===e&&a===n)),o=t.filter(({key:e})=>!a.some(({key:t})=>e===t));return Promise.all([...i.map(({key:e,value:t})=>r.x.setExperimentTraceTagV3(n,e,t)),...o.map(({key:e})=>r.x.deleteExperimentTraceTagV3(n,e))])},function(){var e=this,t=arguments;return new Promise(function(a,r){var i=n.apply(e,t);function o(e){s(i,a,r,o,l,"next",e)}function l(e){s(i,a,r,o,l,"throw",e)}o(void 0)})})()},valueRequired:!0,allAvailableTags:t.filter(e=>e&&!e.startsWith(o.nt)),onSuccess:e});return{showEditTagsModalForTrace:(0,i.useCallback)(e=>{if(!e.trace_id)return;let t=Object.entries(e.tags??{}).map(([e,t])=>({key:e,value:t})).filter(({key:e})=>e&&!e.startsWith(o.nt))||[];a({traceRequestId:e.trace_id,tags:t||[]})},[a]),EditTagsModal:l}}},161926:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a5 5 0 0 0-5 5v1.99c0 .674-.2 1.332-.573 1.892l-1.301 1.952A.75.75 0 0 0 1.75 13h3.5v.25a2.75 2.75 0 1 0 5.5 0V13h3.5a.75.75 0 0 0 .624-1.166l-1.301-1.952A3.4 3.4 0 0 1 13 7.99V6a5 5 0 0 0-5-5m1.25 12h-2.5v.25a1.25 1.25 0 1 0 2.5 0zM4.5 6a3.5 3.5 0 1 1 7 0v1.99c0 .97.287 1.918.825 2.724l.524.786H3.15l.524-.786A4.9 4.9 0 0 0 4.5 7.99z",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="NotificationIcon";let l=s},173773:(e,t,a)=>{a.d(t,{Ej:()=>i,qc:()=>o,vO:()=>s,wt:()=>r});var n=a(141078);let r=(0,n.J1)`
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
`;(0,n.J1)`
  fragment RecommendedAssetWithThumbnail on RecommendationAsset {
    ...RecommendedAsset
    thumbnailUrl(uiMode: $uiMode)
  }
`;let i=(0,n.J1)`
  fragment RecommendationRelevanceReason on RecommendationRelevanceReason {
    relevanceTime
    type
    viewMetadata {
      viewFrequency
    }
  }
`,o=(0,n.J1)`
  fragment RecommendedAssetRecommendation on RecommendationAssetRecommendation {
    asset {
      ...RecommendedAsset
    }
    relevanceReason {
      ...RecommendationRelevanceReason
    }
  }
`;(0,n.J1)`
  fragment RecommendedAssetRecommendationWithThumbnail on RecommendationAssetRecommendation {
    asset {
      ...RecommendedAssetWithThumbnail
    }
    relevanceReason {
      ...RecommendationRelevanceReason
    }
  }
`;let s=(0,n.J1)`
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
`;(0,n.J1)`
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
`},194452:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1 3a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0zm2-.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0V3a.5.5 0 0 0-.5-.5m3.378-.628c.482 0 .872-.39.872-.872h1.5v4.25H10v1.5H6v-1.5h1.25V3.206c-.27.107-.564.166-.872.166H6v-1.5zm5 0c.482 0 .872-.39.872-.872h1.5v4.25H15v1.5h-4v-1.5h1.25V3.206c-.27.107-.564.166-.872.166H11v-1.5zM6 11a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0zm2-.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m-6.622-.378c.482 0 .872-.39.872-.872h1.5v4.25H5V15H1v-1.5h1.25v-2.044c-.27.107-.564.166-.872.166H1v-1.5zm10 0c.482 0 .872-.39.872-.872h1.5v4.25H15V15h-4v-1.5h1.25v-2.044c-.27.107-.564.166-.872.166H11v-1.5z",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="BinaryIcon";let l=s},203796:(e,t,a)=>{a.d(t,{n:()=>i});var n=a(692738),r=a(337706);function i({name:e,defaultValue:t,codec:a,historyAction:o="replace",errorMode:s}){let l=(0,n.useCallback)(n=>{let r=n.get(e);if(null===r)return t;try{return a.deserialize(r)}catch(e){if("throw"===s)throw e;return t}},[e,t,a,s]),[E,d]=(0,r.ok)();return[(0,n.useMemo)(()=>l(E),[E,l]),(0,n.useCallback)((t,n)=>{d(n=>{let r="function"==typeof t?t(l(n)):t;return void 0===r?n.delete(e):n.set(e,a.serialize(r)),n},{replace:"replace"===o,...n})},[o,e,l,a,d])]}},210785:(e,t,a)=>{a.d(t,{P:()=>r});var n,r=((n={}).GOVERNED="GOVERNED",n.DISCOVERY="DISCOVERY",n)},231223:(e,t,a)=>{a.d(t,{J:()=>i,S:()=>r});var n=a(141078);let r=(0,n.J1)`
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
`;function i(e,t={}){return(0,n.IT)(r,{variables:e,...t})}},295423:(e,t,a)=>{a.d(t,{f:()=>E});var n=a(692738),r=a(671244),i=a(653542),o=a(49586),s=a(209908);let l=50,E=({enableAccountGroups:e=!1,enableAccountServicePrincipals:t=!1,enableAccountUsers:a=!1,enableWorkspaceGroups:E=!0,enableWorkspaceServicePrincipals:d=!0,enableWorkspaceUsers:A=!0,filterText:u="",principalIdsForFiltering:c=[],principalUniqueNamesForFiltering:R=[],limit:T=l,useLite:S,skip:m=!1,isCache:f=!1}={})=>{let O=(0,s.VM)({ids:c,uniqueNames:R}),_=(0,s.L5)({ids:c,uniqueNames:R}),{subjects:I,isLoading:g,error:v,hasNextPage:p}=(0,o.zo)({source:"account",filter:u,filterPredicate:O,first:T,skip:!a||m,useLite:S,isCache:f}),{subjects:h,isLoading:N,error:L,hasNextPage:M}=(0,r.Bi)({source:"account",filter:u,filterPredicate:_,first:T,skip:!e||m,useLite:S,isCache:f}),{subjects:C,isLoading:D,error:U,hasNextPage:P}=(0,i.Q_)({source:"account",filter:u,filterPredicate:O,first:T,skip:!t||m,useLite:S,isCache:f}),{subjects:w,isLoading:y,error:V,hasNextPage:F}=(0,o.zo)({source:"workspace",filter:u,filterPredicate:O,first:T,skip:!A||m,useLite:S,isCache:f}),{subjects:H,isLoading:Y,error:G,hasNextPage:K}=(0,r.Bi)({source:"workspace",filter:u,filterPredicate:_,first:T,skip:!E||m,useLite:S,isCache:f}),{subjects:B,isLoading:b,error:x,hasNextPage:W}=(0,i.Q_)({source:"workspace",filter:u,filterPredicate:O,first:T,skip:!d||m,useLite:S,isCache:f}),k=(0,n.useMemo)(()=>{let t=[...H,...h];if(e&&E)return t.filter((e,t,a)=>t===a.findIndex(t=>t.id===e.id));return t},[h,e,E,H]),z=(0,n.useMemo)(()=>{let e=[...B,...C];if(t&&d)return e.filter((e,t,a)=>t===a.findIndex(t=>t.id===e.id));return e},[C,t,d,B]),$=(0,n.useMemo)(()=>{let e=[...w,...I];if(a&&A)return e.filter((e,t,a)=>t===a.findIndex(t=>t.id===e.id));return e},[I,a,A,w]),{subjects:J,hasNextPage:Q}=(0,n.useMemo)(()=>(0,s.GF)(u,T,k,z,$),[u,T,k,z,$]),q=(0,n.useMemo)(()=>({accountGroups:N,accountServicePrincipals:D,accountUsers:g,groups:Y,servicePrincipals:b,users:y,some:N||D||g||Y||b||y}),[N,D,g,Y,b,y]),X=(0,n.useMemo)(()=>({accountGroups:L??null,accountServicePrincipals:U??null,accountUsers:v??null,groups:G??null,servicePrincipals:x??null,users:V??null}),[L,U,v,G,x,V]);return{allSubjectsMap:(0,n.useMemo)(()=>(0,s.ne)(k,z,$),[k,z,$]),errors:X,hasNextPage:!!(J.length===T&&(p||M||P||F||K||W)||Q),isLoading:q,subjects:J}}},296027:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M9.49.04a.75.75 0 0 1 .51.71V6h3.25a.75.75 0 0 1 .596 1.206l-6.5 8.5A.75.75 0 0 1 6 15.25V10H2.75a.75.75 0 0 1-.596-1.206l6.5-8.5A.75.75 0 0 1 9.491.04M4.269 8.5H6.75a.75.75 0 0 1 .75.75v3.785L11.732 7.5H9.25a.75.75 0 0 1-.75-.75V2.965z",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="LightningIcon";let l=s},357548:(e,t,a)=>{a.d(t,{A:()=>i,Su:()=>o,eJ:()=>s});var n=a(342411),r=a(641760);let i=(0,n.zR)({id:"cWOjzx",defaultMessage:"My Data"}),o=(0,n.zR)({id:"wfEfNF",defaultMessage:"My Files"});function s(e,t,a,n){if((0,r.Sg)(t,a,n))return e.formatMessage(o)}},394244:(e,t,a)=>{a.d(t,{AY:()=>r,VL:()=>i,ar:()=>s,sG:()=>l,ur:()=>o});var n=a(1859);function r(e){return`ingestion-${e}-`}let i=e=>({name:`${r(e)}open`,defaultValue:!1,codec:n.XE,historyAction:"push",errorMode:"throw"}),o=()=>({name:"subId",defaultValue:void 0,codec:n._p,historyAction:"push",errorMode:"throw"}),s=e=>({name:`${r(e)}-catalog`,defaultValue:void 0,codec:n._p,historyAction:"push",errorMode:"throw"}),l=e=>({name:`${r(e)}-schema`,defaultValue:void 0,codec:n._p,historyAction:"push",errorMode:"throw"})},401160:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.75 1a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75V1.75a.75.75 0 0 0-.75-.75zM7.5 2.5h-4v6.055l1.495-1.36a.75.75 0 0 1 1.01 0L7.5 8.555zm-4 8.082 2-1.818 2.246 2.041A.75.75 0 0 0 9 10.25V2.5h3.5v12h-9z",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="BookIcon";let l=s},425628:(e,t,a)=>{a.d(t,{g:()=>o});var n=a(542908),r=a(620275),i=a(441535);function o(){return!(0,n.B)()&&!(0,r.s4)()&&((0,i.W)("enable_lakeview_tags",!1)||(0,i.W)("databricks.fe.lakeview.enableLakeviewTags",!1))}},429072:(e,t,a)=>{a.d(t,{WO:()=>d,Wi:()=>E,YD:()=>A,wB:()=>u,zJ:()=>l});var n,r,i,o,s,l=((n={}).CREATOR="roles/tagPolicy.creator",n.MANAGER="roles/tagPolicy.manager",n.ASSIGNER="roles/tagPolicy.assigner",n),E=((r={}).CREATE="account/createTagPolicy",r.UPDATE="tagPolicy/update",r.DELETE="tagPolicy/delete",r.GET_RULESET="tagPolicy.ruleSet/get",r.UPDATE_RULESET="tagPolicy.ruleSet/update",r.ASSIGN="tagPolicy/assign",r.ACCOUNT_GET_RULESET="account.ruleSet/get",r.ACCOUNT_UPDATE_RULESET="account.ruleSet/update",r),d=((i={}).DEFAULT="DEFAULT",i.SYSTEM="SYSTEM",i),A=((o={}).DEFAULT="TAG_POLICY_NAMESPACE_DEFAULT",o.SYSTEM="TAG_POLICY_NAMESPACE_SYSTEM",o),u=((s={}).TAG_LEVEL="TAG_LEVEL",s.ACCOUNT_LEVEL="ACCOUNT_LEVEL",s)},442492:(e,t,a)=>{a.d(t,{C:()=>E});var n=a(304926),r=a(412836),i=a(869087),o=a(615919),s=a(533044);function l(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}let E=()=>{let e=(0,n.jE)();return(0,r.n_)({mutationFn:({experimentId:e,traceRequestIds:t,reviewAppId:a,labelingSessionId:n,traceIdToItemIdMap:r})=>{var o;return(o=function*(){let o=[];for(let e=0;e<t.length;e+=100)o.push(t.slice(e,e+100));if(a&&n&&r){let e=t.map(e=>r.get(e)).filter(e=>void 0!==e);e.length>0&&(yield(0,s.US)(a,n,e))}let l=o.map(t=>i.x.deleteTracesV3(e,t));return{traces_deleted:(yield Promise.all(l)).reduce((e,t)=>e+t.traces_deleted,0)}},function(){var e=this,t=arguments;return new Promise(function(a,n){var r=o.apply(e,t);function i(e){l(r,a,n,i,s,"next",e)}function s(e){l(r,a,n,i,s,"throw",e)}i(void 0)})})()},onSuccess:()=>(0,o.BL)({queryClient:e})})}},518117:(e,t,a)=>{a.d(t,{x:()=>o});var n=a(692738),r=a(203796),i=a(394244);function o({drawerKey:e}){let[t,a]=(0,r.n)((0,i.VL)(e)),[s,l]=(0,r.n)((0,i.ur)());return{isOpen:t,subId:s,openIngestionDrawer:(0,n.useCallback)(e=>{a(!0),l(e)},[a,l])}}},518695:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",d:"M5.5 2a2.75 2.75 0 0 0-2.75 2.75v1C2.75 6.44 2.19 7 1.5 7H1v2h.5c.69 0 1.25.56 1.25 1.25v1A2.75 2.75 0 0 0 5.5 14H6v-1.5h-.5c-.69 0-1.25-.56-1.25-1.25v-1c0-.93-.462-1.752-1.168-2.25A2.75 2.75 0 0 0 4.25 5.75v-1c0-.69.56-1.25 1.25-1.25H6V2zM13.25 4.75A2.75 2.75 0 0 0 10.5 2H10v1.5h.5c.69 0 1.25.56 1.25 1.25v1c0 .93.462 1.752 1.168 2.25a2.75 2.75 0 0 0-1.168 2.25v1c0 .69-.56 1.25-1.25 1.25H10V14h.5a2.75 2.75 0 0 0 2.75-2.75v-1c0-.69.56-1.25 1.25-1.25h.5V7h-.5c-.69 0-1.25-.56-1.25-1.25z"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="BracketsCurlyIcon";let l=s},557351:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("path",{fill:"currentColor",d:"M4 4h3v1.5H4a2.5 2.5 0 0 0 0 5h3V12H4a4 4 0 0 1 0-8M12 10.5H9V12h3a4 4 0 0 0 0-8H9v1.5h3a2.5 2.5 0 0 1 0 5"}),(0,n.Y)("path",{fill:"currentColor",d:"M4 8.75h8v-1.5H4z"})]})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="LinkIcon";let l=s},581716:(e,t,a)=>{a.d(t,{UM:()=>d,hs:()=>u,pu:()=>A,rs:()=>T,tn:()=>R,w$:()=>E,xf:()=>c});var n,r,i,o,s,l,E=((n={}).USERNAME_PASSWORD="USERNAME_PASSWORD",n.OAUTH_GOOGLE_SERVICE_ACCOUNT="OAUTH_GOOGLE_SERVICE_ACCOUNT",n.OAUTH_U2M="OAUTH_U2M",n.OAUTH_M2M="OAUTH_M2M",n.OAUTH_U2M_MAPPING="OAUTH_U2M_MAPPING",n.OAUTH_ACCESS_TOKEN="OAUTH_ACCESS_TOKEN",n.OAUTH_REFRESH_TOKEN="OAUTH_REFRESH_TOKEN",n.OAUTH_RESOURCE_OWNER_PASSWORD="OAUTH_RESOURCE_OWNER_PASSWORD",n.BEARER_TOKEN="BEARER_TOKEN",n.PEM_PRIVATE_KEY="PEM_PRIVATE_KEY",n.SERVICE_CREDENTIAL="SERVICE_CREDENTIAL",n.OAUTH_MTLS="OAUTH_MTLS",n.ANY_STATIC_CREDENTIAL="ANY_STATIC_CREDENTIAL",n.SSWS_TOKEN="SSWS_TOKEN",n.OAUTH_DCR="OAUTH_DCR",n),d=((r={}).ACTIVE="ACTIVE",r.FAILED="FAILED",r.PROVISIONING="PROVISIONING",r),A=((i={}).MYSQL="MYSQL",i.MONGODB="MONGODB",i.POSTGRESQL="POSTGRESQL",i.MANAGED_POSTGRESQL="MANAGED_POSTGRESQL",i.SNOWFLAKE="SNOWFLAKE",i.REDSHIFT="REDSHIFT",i.SQLDW="SQLDW",i.SQLSERVER="SQLSERVER",i.DATABRICKS="DATABRICKS",i.SALESFORCE="SALESFORCE",i.SALESFORCE_DATA_CLOUD="SALESFORCE_DATA_CLOUD",i.SALESFORCE_DATA_CLOUD_FILE_SHARING="SALESFORCE_DATA_CLOUD_FILE_SHARING",i.TERADATA="TERADATA",i.ORACLE="ORACLE",i.BIGQUERY="BIGQUERY",i.NETSUITE="NETSUITE",i.WORKDAY_RAAS="WORKDAY_RAAS",i.WORKDAY_ACTIVITY_LOGGING="WORKDAY_ACTIVITY_LOGGING",i.WORKDAY_HCM="WORKDAY_HCM",i.SERVICENOW="SERVICENOW",i.VECTOR_INDEX="VECTOR_INDEX",i.FABRIC="FABRIC",i.ONELAKE="ONELAKE",i.HIVE_METASTORE="HIVE_METASTORE",i.GLUE="GLUE",i.GA4_RAW_DATA="GA4_RAW_DATA",i.GOOGLE_DRIVE="GOOGLE_DRIVE",i.SHAREPOINT="SHAREPOINT",i.ONEDRIVE="ONEDRIVE",i.HTTP="HTTP",i.POWER_BI="POWER_BI",i.SFTP="SFTP",i.DYNAMICS365="DYNAMICS365",i.DBT_PLATFORM="DBT_PLATFORM",i.JIRA="JIRA",i.CONFLUENCE="CONFLUENCE",i.GITHUB="GITHUB",i.HUBSPOT="HUBSPOT",i.ZENDESK="ZENDESK",i.SLACK_AUDIT_LOGS="SLACK_AUDIT_LOGS",i.SLACK_ACCESS_AND_INTEGRATION_LOGS="SLACK_ACCESS_AND_INTEGRATION_LOGS",i.META_MARKETING="META_MARKETING",i.SALESFORCE_MARKETING_CLOUD="SALESFORCE_MARKETING_CLOUD",i.JDBC="JDBC",i.GENERIC_LAKEFLOW_CONNECT="GENERIC_LAKEFLOW_CONNECT",i.SLACK="SLACK",i.KAFKA="KAFKA",i.RABBITMQ="RABBITMQ",i.GOOGLE_ADS="GOOGLE_ADS",i.OUTLOOK="OUTLOOK",i.PALANTIR="PALANTIR",i.BIGLAKE="BIGLAKE",i.GOOGLE_CLOUD_LAKEHOUSE="GOOGLE_CLOUD_LAKEHOUSE",i.TIKTOK_ADS="TIKTOK_ADS",i.CROWDSTRIKE_EVENT_STREAM="CROWDSTRIKE_EVENT_STREAM",i.ONE_PASSWORD_EVENT_LOGS="ONE_PASSWORD_EVENT_LOGS",i.OKTA_SYSTEM_LOGS="OKTA_SYSTEM_LOGS",i.AKAMAI_WAF="AKAMAI_WAF",i.M365_AUDIT_LOGS="M365_AUDIT_LOGS",i.SMARTSHEET="SMARTSHEET",i.AWS_SECRETS_MANAGER="AWS_SECRETS_MANAGER",i.VEEVA_VAULT="VEEVA_VAULT",i),u=((o={}).BUILTIN="BUILTIN",o.EXTERNAL="EXTERNAL",o.GLUE="GLUE",o.NONE="NONE",o),c=((s={}).USES_USERNAME_PASSWORD="USES_USERNAME_PASSWORD",s.USES_OAUTH_GOOGLE_SERVICE_ACCOUNT="USES_OAUTH_GOOGLE_SERVICE_ACCOUNT",s.USES_OAUTH_USER_AUTHORIZATION="USES_OAUTH_USER_AUTHORIZATION",s.USES_OAUTH_ACCESS_TOKEN="USES_OAUTH_ACCESS_TOKEN",s.USES_OAUTH_REFRESH_TOKEN="USES_OAUTH_REFRESH_TOKEN",s.USES_OAUTH_RESOURCE_OWNER_PASSWORD="USES_OAUTH_RESOURCE_OWNER_PASSWORD",s.USES_BEARER_TOKEN="USES_BEARER_TOKEN",s.USES_PEM_PRIVATE_KEY="USES_PEM_PRIVATE_KEY",s.USES_OAUTH_M2M="USES_OAUTH_M2M",s.USES_OAUTH_U2M_SHARED="USES_OAUTH_U2M_SHARED",s.USES_OAUTH_U2M_CUSTOM_APP="USES_OAUTH_U2M_CUSTOM_APP",s.USES_OAUTH_U2M_MAPPING="USES_OAUTH_U2M_MAPPING",s.USES_SERVICE_CREDENTIAL="USES_SERVICE_CREDENTIAL",s.USES_OAUTH_MTLS="USES_OAUTH_MTLS",s.USES_ANY_STATIC_CREDENTIAL="USES_ANY_STATIC_CREDENTIAL",s.USES_SSWS_TOKEN="USES_SSWS_TOKEN",s.USES_DCR="USES_DCR",s),R=((l={}).BEFORE_ACCESS_TOKEN="BEFORE_ACCESS_TOKEN",l.BEFORE_AUTHORIZATION_CODE="BEFORE_AUTHORIZATION_CODE",l);let T={OAUTH_ACCESS_TOKEN:"USES_OAUTH_ACCESS_TOKEN",OAUTH_U2M:"USES_OAUTH_USER_AUTHORIZATION",USERNAME_PASSWORD:"USES_USERNAME_PASSWORD",OAUTH_GOOGLE_SERVICE_ACCOUNT:"USES_OAUTH_GOOGLE_SERVICE_ACCOUNT",OAUTH_REFRESH_TOKEN:"USES_OAUTH_REFRESH_TOKEN",OAUTH_RESOURCE_OWNER_PASSWORD:"USES_OAUTH_RESOURCE_OWNER_PASSWORD",BEARER_TOKEN:"USES_BEARER_TOKEN",PEM_PRIVATE_KEY:"USES_PEM_PRIVATE_KEY",OAUTH_M2M:"USES_OAUTH_M2M",OAUTH_U2M_MAPPING:"USES_OAUTH_U2M_MAPPING",SERVICE_CREDENTIAL:"USES_SERVICE_CREDENTIAL",OAUTH_MTLS:"USES_OAUTH_MTLS",ANY_STATIC_CREDENTIAL:"USES_ANY_STATIC_CREDENTIAL",SSWS_TOKEN:"USES_SSWS_TOKEN",OAUTH_DCR:"USES_DCR"}},586129:(e,t,a)=>{a.d(t,{j:()=>o});var n=a(542908),r=a(620275),i=a(441535);function o(){return!(0,n.B)()&&!(0,r.s4)()&&((0,i.W)("enable_lakeview_tags",!1)||(0,i.W)("databricks.fe.lakeview.enableLakeviewTags",!1))}},596526:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.625 1.1a.75.75 0 0 1 .75 0l6.25 3.61a.75.75 0 0 1 .375.65v8.89a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75V10H7v4.25a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75V5.355a.75.75 0 0 1 .375-.65zM2.5 5.79V13.5h3V9.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v4.25h3V5.792L8 2.616z",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="HomeIcon";let l=s},611824:(e,t,a)=>{a.d(t,{_:()=>r});var n=a(441535);function r(){return(0,n.W)("enable_gov_tag",null)??(0,n.W)("databricks.fe.uc.enableGovTag",!1)}},617775:(e,t,a)=>{a.d(t,{E:()=>n});function n(){return window.settings?.cloud||"AWS"}},622120:(e,t,a)=>{a.d(t,{DY:()=>T,H6:()=>u,YR:()=>R,mc:()=>c});var n=a(141078),r=a(173773);let i=(0,n.J1)`
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
`,o=(0,n.J1)`
  fragment SuggestedAssetWithThumbnail on UseractivityAsset {
    ...SuggestedAsset
    thumbnailUrl(uiMode: $uiMode)
  }
`,s=(0,n.J1)`
  fragment RelevanceReason on UseractivityRelevanceReason {
    timestamp
    type
    viewMetadata {
      viewFrequency
    }
  }
`,l=(0,n.J1)`
  fragment AssetRecommendation on UseractivityAssetRecommendation {
    asset {
      ...SuggestedAsset
    }
    relevanceReason {
      ...RelevanceReason
    }
  }
`,E=(0,n.J1)`
  fragment AssetRecommendationWithThumbnail on UseractivityAssetRecommendation {
    asset {
      ...SuggestedAssetWithThumbnail
    }
    relevanceReason {
      ...RelevanceReason
    }
  }
`,d=(0,n.J1)`
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
`,A=(0,n.J1)`
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
`,u=(0,n.J1)`
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
  ${i}
  ${o}
  ${s}
  ${E}
  ${A}
`,c=(0,n.J1)`
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
  ${i}
  ${s}
  ${l}
  ${d}
`,R=(0,n.J1)`
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
`,T=(0,n.J1)`
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
  ${r.wt}
  ${r.Ej}
  ${r.qc}
  ${r.vO}
`},657418:(e,t,a)=>{a.d(t,{G:()=>o,p:()=>i});var n=a(350318),r=a(441535);function i(){return null!==o()}let o=()=>{let e=(0,r.W)("databricks.unitycatalog.enableOnlineCatalogs",!1),t=(0,r.W)("databricks.unitycatalog.enableNewBrickstoreUCModel",!1)||(0,n.ce)();return e?"v1":t?"v2":null}},668904:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("path",{fill:"currentColor",d:"M3.848 10.627 4 9.75l.152.877a1.5 1.5 0 0 0 1.221 1.22L6.25 12l-.877.152a1.5 1.5 0 0 0-1.22 1.221L4 14.25l-.152-.877a1.5 1.5 0 0 0-1.221-1.22L1.75 12l.877-.152a1.5 1.5 0 0 0 1.22-1.221"}),(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M4 9a.75.75 0 0 1 .739.621l.152.877a.75.75 0 0 0 .61.61l.878.153a.75.75 0 0 1 0 1.478l-.877.152a.75.75 0 0 0-.61.61l-.153.878a.75.75 0 0 1-1.478 0l-.152-.877a.75.75 0 0 0-.61-.61l-.878-.153a.75.75 0 0 1 0-1.478l.877-.152a.75.75 0 0 0 .61-.61l.153-.878A.75.75 0 0 1 4 9m0 2.92-.08.08q.042.039.08.08.038-.042.08-.08zM10 0c.36 0 .67.257.737.611l.264 1.398A3.75 3.75 0 0 0 13.99 5l1.398.264a.75.75 0 0 1 0 1.474l-1.398.264A3.75 3.75 0 0 0 11 9.99l-.264 1.398a.75.75 0 0 1-1.474 0l-.264-1.398A3.75 3.75 0 0 0 6.01 7l-1.398-.264a.75.75 0 0 1 0-1.474l1.398-.264A3.75 3.75 0 0 0 9 2.01L9.263.611A.75.75 0 0 1 10 0m0 3.682A5.26 5.26 0 0 1 7.682 6 5.26 5.26 0 0 1 10 8.318 5.26 5.26 0 0 1 12.318 6 5.26 5.26 0 0 1 10 3.682",clipRule:"evenodd"})]})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="SparkleDoubleIcon";let l=s},704882:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.25 1h2.174a2.126 2.126 0 0 1 1.81 3.243 2.126 2.126 0 0 1-1.36 3.761H6.25a.75.75 0 0 1-.75-.75V1.75A.75.75 0 0 1 6.25 1M7 6.504V5.252h1.874a.626.626 0 1 1 0 1.252zm2.05-3.378c0 .345-.28.625-.625.626H7.001L7 2.5h1.424c.346 0 .626.28.626.626M3.307 6a.75.75 0 0 1 .697.473L6.596 13H4.982l-.238-.6H1.855l-.24.6H0l2.61-6.528A.75.75 0 0 1 3.307 6m-.003 2.776.844 2.124H2.455z",clipRule:"evenodd"}),(0,n.Y)("path",{fill:"currentColor",d:"M12.5 15a2.5 2.5 0 0 0 2.5-2.5h-1.5a1 1 0 1 1-2 0v-1.947c0-.582.472-1.053 1.053-1.053.523 0 .947.424.947.947v.053H15v-.053A2.447 2.447 0 0 0 12.553 8 2.553 2.553 0 0 0 10 10.553V12.5a2.5 2.5 0 0 0 2.5 2.5"})]})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="LettersIcon";let l=s},733845:(e,t,a)=>{a.d(t,{O:()=>o});var n=a(686560),r=a(689262),i=a(441535);function o(){let e=(0,r.b)("unityCatalogServiceEnabled",(0,n.d)("unityCatalogServiceEnabled",!1),()=>(0,i.W)("databricks.unitycatalog.enableUnityCatalogService",!1)),t=(0,n.d)("isMetastoreInstalled_new",!1);return e&&t}},754275:(e,t,a)=>{a.d(t,{B:()=>r});var n=a(910825);function r(){return`id-${(0,n.j)()}`}},762494:(e,t,a)=>{a.d(t,{G:()=>E,e:()=>A});var n,r=a(299089),i=a.n(r),o=a(886100),s=a(747129);function l(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}var E=((n={}).unknown="unknown",n.workspaceSettingDisabled="workspaceSettingDisabled",n.browserPermissionDenied="browserPermissionDenied",n.documentNotFocused="documentNotFocused",n);let d=[{reason:"documentNotFocused",regex:/document is not focused/i},{reason:"browserPermissionDenied",regex:/write permission denied|write is not allowed|user denied permission/i},{reason:"browserPermissionDenied",regex:/Clipboard API has been blocked because of a permissions policy/i},{reason:"browserPermissionDenied",regex:/The request is not allowed by the user agent or the platform in the current context, possibly because the user denied permission./i},{reason:"browserPermissionDenied",regex:/Failed to execute 'write' on 'Clipboard': Write permission denied/i}];function A(e){var t;return(t=function*({content:e,onSuccess:t,onError:a,alertConfig:n}){try{yield navigator.clipboard.writeText(e),u({...n,isSuccessful:!0}),t?.(e);return}catch(t){let e=function({error:e,alertConfig:t}){let a=d.find(t=>t.regex.test(e instanceof Error?e.message:String(e)));if(t.alertKnownErrors||!a){let a=JSON.stringify({err:e instanceof Error?i()(e,["message","stack"]):e,...t.eventData});u({...t,isSuccessful:!1,debugBlob:a})}return a}({error:t,alertConfig:n});a?.(e?.reason??"unknown")}},function(){var e=this,a=arguments;return new Promise(function(n,r){var i=t.apply(e,a);function o(e){l(i,n,r,o,s,"next",e)}function s(e){l(i,n,r,o,s,"throw",e)}o(void 0)})}).apply(this,arguments)}function u({es:e,eventId:t,isSuccessful:a,debugBlob:n}){o.iT.sev2BurnRate(e,"codegen_no_dynamic_js_packages_web_shared_src_utils_copyutils_100",s.i1.P99,s.Ip.Min10,a,n)}},765288:(e,t,a)=>{a.d(t,{w:()=>o});var n=a(441535),r=a(586129),i=a(873092);function o(){return(0,i.w)()&&(0,r.j)()&&(0,n.W)("databricks.fe.lakeview.enableDashboardCertification",!1)}},797246:(e,t,a)=>{a.d(t,{DN:()=>E,Ix:()=>d,Jk:()=>A,OF:()=>s,nX:()=>u,nw:()=>l});var n=a(342411),r=a(641760),i=a(29824),o=a(150924);let s=(0,r.zt)()?(0,n.zR)({id:"oUyUvJ",defaultMessage:"You are only permitted to see metadata for this asset. Request additional permissions from the object's page"}):(0,n.zR)({id:"m+UfjI",defaultMessage:"You are only permitted to see metadata for this asset. Please contact the owner for additional permission"}),l=(0,n.zR)({id:"H1i5CS",defaultMessage:"Online store catalog"}),E={[i.an.CATALOG]:(0,n.zR)({id:"gST/Fz",defaultMessage:"catalog"}),[i.an.DATABASE]:(0,n.zR)({id:"Q2CEcK",defaultMessage:"schema"}),[i.an.TABLE]:(0,n.zR)({id:"MnQokr",defaultMessage:"table"}),[i.an.VIEW]:(0,n.zR)({id:"1/D8JH",defaultMessage:"view"}),[i.an.MATERIALIZED_VIEW]:(0,n.zR)({id:"F9towg",defaultMessage:"materialized view"}),[i.an.STREAMING_TABLE]:(0,n.zR)({id:"c71VXl",defaultMessage:"streaming table"}),[i.an.VOLUME]:(0,n.zR)({id:"upmcHZ",defaultMessage:"volume"}),[i.an.FUNCTION]:(0,n.zR)({id:"aP8Sqb",defaultMessage:"function"}),[i.an.FUNCTION_FEATURE_SPEC]:(0,n.zR)({id:"7qdK7+",defaultMessage:"function feature spec"}),[i.an.REGISTERED_MODEL]:(0,n.zR)({id:"3Y7acL",defaultMessage:"model"}),[i.an.REGISTERED_MODEL_VERSION]:(0,n.zR)({id:"vo02Jv",defaultMessage:"model version"}),[i.an.STORAGE_CREDENTIAL]:(0,n.zR)({id:"XkdeUT",defaultMessage:"storage credential"}),[i.an.CREDENTIAL]:(0,n.zR)({id:"XXi9AE",defaultMessage:"credential"}),[i.an.EXTERNAL_LOCATION]:(0,n.zR)({id:"gpTkYX",defaultMessage:"external location"}),[i.an.INBOUND_SHARED_NOTEBOOK_FILE]:(0,n.zR)({id:"2QTgI/",defaultMessage:"shared notebook file"}),[i.an.CONNECTION]:(0,n.zR)({id:"L+HZOe",defaultMessage:"connection"}),[i.an.SHARE]:(0,n.zR)({id:"HQxjso",defaultMessage:"share"}),[i.an.RECIPIENT]:(0,n.zR)({id:"M7UQAS",defaultMessage:"recipient"}),[i.an.PROVIDER]:(0,n.zR)({id:"PvVChz",defaultMessage:"provider"}),[i.an.METASTORE]:(0,n.zR)({id:"2irW3W",defaultMessage:"metastore"}),[i.an.COLUMN]:(0,n.zR)({id:"fwB/LS",defaultMessage:"column"}),[i.an.VOLUME_FILE]:(0,n.zR)({id:"5Cy++b",defaultMessage:"volume file"}),[i.an.VOLUME_FOLDER]:(0,n.zR)({id:"dOa8bp",defaultMessage:"volume folder"}),[i.an.CLEAN_ROOM]:(0,n.zR)({id:"OZVVYP",defaultMessage:"clean room"}),[i.an.VECTOR_INDEX]:(0,n.zR)({id:"w5dYYn",defaultMessage:"vector search index"}),[i.an.ONLINE_VIEW]:(0,n.zR)({id:"mbZFpH",defaultMessage:"online table"}),[i.an.METRIC_VIEW]:(0,n.zR)({id:"q71GSt",defaultMessage:"metric view"}),[i.an.EXTERNAL_METADATA]:(0,n.zR)({id:"gqNYH3",defaultMessage:"external metadata"}),[i.an.SECRET]:(0,n.zR)({id:"Y8FCE6",defaultMessage:"secret"})},d=(0,n.YK)({[i.an.CATALOG]:{id:"9Q4FT5",defaultMessage:"Catalog"},[i.an.DATABASE]:{id:"FWxl06",defaultMessage:"Schema"},[i.an.TABLE]:{id:"6soA0k",defaultMessage:"Table"},[i.an.VIEW]:{id:"Rw416Q",defaultMessage:"View"},[i.an.MATERIALIZED_VIEW]:{id:"WUAUbP",defaultMessage:"Materialized view"},[i.an.STREAMING_TABLE]:{id:"Zi/bxb",defaultMessage:"Streaming table"},[i.an.VOLUME]:{id:"1dS20z",defaultMessage:"Volume"},[i.an.FUNCTION]:{id:"VI+Sr3",defaultMessage:"Function"},[i.an.FUNCTION_FEATURE_SPEC]:{id:"sqDlGe",defaultMessage:"Function feature spec"},[i.an.REGISTERED_MODEL]:{id:"I01Ad4",defaultMessage:"Model"},[i.an.REGISTERED_MODEL_VERSION]:{id:"LRV0mb",defaultMessage:"Model version"},[i.an.STORAGE_CREDENTIAL]:{id:"bDEJaI",defaultMessage:"Storage credential"},[i.an.CREDENTIAL]:{id:"8m1U4P",defaultMessage:"Credential"},[i.an.EXTERNAL_LOCATION]:{id:"u7bRXy",defaultMessage:"External location"},[i.an.INBOUND_SHARED_NOTEBOOK_FILE]:{id:"pK4mvH",defaultMessage:"Shared notebook file"},[i.an.CONNECTION]:{id:"rR5RDl",defaultMessage:"Connection"},[i.an.SHARE]:{id:"bH4BVe",defaultMessage:"Share"},[i.an.RECIPIENT]:{id:"NfAkZZ",defaultMessage:"Recipient"},[i.an.PROVIDER]:{id:"5G2SGs",defaultMessage:"Provider"},[i.an.METASTORE]:{id:"lTi56H",defaultMessage:"Metastore"},[i.an.COLUMN]:{id:"ZUOQQ7",defaultMessage:"Column"},[i.an.VOLUME_FILE]:{id:"X/RWP6",defaultMessage:"Volume file"},[i.an.VOLUME_FOLDER]:{id:"B0vUyp",defaultMessage:"Volume folder"},[i.an.CLEAN_ROOM]:{id:"nEeSuH",defaultMessage:"Clean Room"},[i.an.VECTOR_INDEX]:{id:"d57N3p",defaultMessage:"Vector search index"},[i.an.ONLINE_VIEW]:{id:"p2r9Bh",defaultMessage:"Synced table"},[i.an.METRIC_VIEW]:{id:"tjJpp8",defaultMessage:"Metric view"},[i.an.EXTERNAL_METADATA]:{id:"RySBlN",defaultMessage:"External metadata"},[i.an.SECRET]:{id:"QLRlWq",defaultMessage:"Secret"}}),A={[i.an.FUNCTION]:(0,n.YK)({[o.x.FUNCTION_PROCEDURE]:{id:"3ramAO",defaultMessage:"Procedure"},[o.x.FUNCTION]:{id:"qCivWh",defaultMessage:"Function"},[o.x.FUNCTION_FEATURE_SPEC]:{id:"NMoL5P",defaultMessage:"Function feature spec"}})},u=(0,n.YK)({[i.an.CATALOG]:{id:"MFr8uI",defaultMessage:"Database"},[i.an.DATABASE]:{id:"8dUzvc",defaultMessage:"Schema"},[i.an.TABLE]:{id:"bqMEiN",defaultMessage:"Table"},[i.an.VIEW]:{id:"bAdJFD",defaultMessage:"View"},[i.an.FUNCTION]:{id:"OMHm4k",defaultMessage:"Function"},[i.an.COLUMN]:{id:"sFXezj",defaultMessage:"Column"}})},848001:(e,t,a)=>{a.d(t,{K:()=>V,LI:()=>P,Lg:()=>w,kn:()=>C,lU:()=>y,sj:()=>D});var n=a(610435),r=a(615693),i=a(325382),o=a(397136),s=a(126001),l=a(323935),E=a(485065),d=a(452233),A=a(563521),u=a(1459),c=a(319241),R=a(753427),T=a(401160),S=a(161926),m=a(24027),f=a(617933),O=a(823825),_=a(873393),I=a(815367),g=a(350487),v=a(918071),p=a(946590),h=a(889187),N=a(483588),L=a(707076),M=a(771994);let C={[N.FKF.ALERT]:M.An.ALERT,[N.FKF.DASHBOARD]:M.An.DASHBOARD,[N.FKF.DASHBOARD_V3]:M.An.DASHBOARD,[N.FKF.FILE]:M.An.FILE,[N.FKF.FOLDER]:M.An.FOLDER,[N.FKF.JOB]:M.An.JOB,[N.FKF.PIPELINE]:M.An.PIPELINE,[N.FKF.LIBRARY]:M.An.LIBRARY,[N.FKF.MARKETPLACE_LISTING]:M.An.MARKETPLACE,[N.FKF.ENDPOINT_CENTRIC_ENDPOINT]:M.An.ENDPOINT,[N.FKF.UC_MODEL]:M.An.MODEL,[N.FKF.UC_FUNCTION]:M.An.FUNCTION,[N.FKF.EXPERIMENT]:M.An.EXPERIMENT,[N.FKF.NOTEBOOK]:M.An.NOTEBOOK,[N.FKF.PROJECT]:M.An.REPO,[N.FKF.QUERY]:M.An.QUERY,[N.FKF.UC_TABLE]:M.An.TABLE,[N.FKF.UC_VOLUME]:M.An.VOLUME,[N.FKF.DATA_ROOM]:M.An.DATA_ROOM},D={[M.If.ALERT]:M.An.ALERT,[M.If.ALERT_V2]:M.An.ALERT_V2,[M.If.APP]:M.An.APP,[M.If.DBSQL_DASHBOARD]:M.An.DASHBOARD,[M.If.FILE]:M.An.FILE,[M.If.FOLDER]:M.An.FOLDER,[M.If.JOB]:M.An.JOB,[M.If.PIPELINE]:M.An.PIPELINE,[M.If.LIBRARY]:M.An.LIBRARY,[M.If.MARKETPLACE]:M.An.MARKETPLACE,[M.If.ML_ENDPOINT]:M.An.ENDPOINT,[M.If.ML_MODEL]:M.An.MODEL,[M.If.FUNCTION]:M.An.FUNCTION,[M.If.MLFLOW_EXPERIMENT]:M.An.EXPERIMENT,[M.If.NOTEBOOK]:M.An.NOTEBOOK,[M.If.DESIGNER_FILE]:M.An.DESIGNER_FILE,[M.If.PARTNER]:M.An.PARTNER,[M.If.PROJECT]:M.An.REPO,[M.If.QUERY]:M.An.QUERY,[M.If.TABLE]:M.An.TABLE,[M.If.VOLUME]:M.An.VOLUME,[M.If.DATA_ROOM]:M.An.DATA_ROOM,[M.If.METRIC_VIEW]:M.An.METRIC_VIEW},U={[N.iId.ALERT]:M.An.ALERT,[N.iId.ALERT_V2]:M.An.ALERT_V2,[N.iId.DASHBOARD_LAKEVIEW]:M.An.DASHBOARD,[N.iId.DASHBOARD_REDASH]:M.An.DASHBOARD,[N.iId.FILE]:M.An.FILE,[N.iId.FOLDER]:M.An.FOLDER,[N.iId.JOB]:M.An.JOB,[N.iId.PIPELINE]:M.An.PIPELINE,[N.iId.LIBRARY]:M.An.LIBRARY,[N.iId.MARKETPLACE]:M.An.MARKETPLACE,[N.iId.ML_ENDPOINT]:M.An.ENDPOINT,[N.iId.ML_MODEL]:M.An.MODEL,[N.iId.FUNCTION]:M.An.FUNCTION,[N.iId.MLFLOW_EXPERIMENT]:M.An.EXPERIMENT,[N.iId.NOTEBOOK]:M.An.NOTEBOOK,[N.iId.DESIGNER_FILE]:M.An.DESIGNER_FILE,[N.iId.PARTNER]:M.An.PARTNER,[N.iId.PROJECT]:M.An.REPO,[N.iId.QUERY]:M.An.QUERY,[N.iId.TABLE]:M.An.TABLE,[N.iId.VOLUME]:M.An.VOLUME,[N.iId.DATA_ROOM]:M.An.DATA_ROOM,[N.iId.APP]:M.An.APP};function P(e,t){if(!e)return null;let a=e.toUpperCase();if(M.im[a])return M.im[a];if((t??w()).includes(a))return a;return null}let w=(e=!1)=>(0,L.bz)(!0,e).flatMap(e=>{let t=D[e];return t?[t]:[]}),y=e=>Object.values(N.iId).filter(t=>{if(t===N.iId.DASHBOARD_REDASH)return!1;let a=U[t];return void 0!==a&&e.includes(a)}),V=e=>{switch(e){case M.An.TABLE:return(0,n.Y)(r.A,{});case M.An.VOLUME:return(0,n.Y)(i.A,{});case M.An.NOTEBOOK:return(0,n.Y)(o.A,{});case M.An.DESIGNER_FILE:return(0,n.Y)(s.A,{});case M.An.JOB:return(0,n.Y)(l.A,{});case M.An.PIPELINE:return(0,n.Y)(E.A,{});case M.An.QUERY:return(0,n.Y)(d.A,{});case M.An.DASHBOARD:return(0,n.Y)(A.A,{});case M.An.FOLDER:return(0,n.Y)(u.A,{});case M.An.FILE:return(0,n.Y)(c.A,{});case M.An.REPO:return(0,n.Y)(R.A,{});case M.An.LIBRARY:return(0,n.Y)(T.A,{});case M.An.ALERT:case M.An.ALERT_V2:return(0,n.Y)(S.A,{});case M.An.APP:return(0,n.Y)(m.A,{});case M.An.EXPERIMENT:return(0,n.Y)(f.A,{});case M.An.MODEL:return(0,n.Y)(O.A,{});case M.An.ENDPOINT:return(0,n.Y)(_.A,{});case M.An.FUNCTION:return(0,n.Y)(I.A,{});case M.An.PARTNER:return(0,n.Y)(g.A,{});case M.An.MARKETPLACE:return(0,n.Y)(v.A,{});case M.An.DATA_ROOM:return(0,n.Y)(p.A,{});case M.An.METRIC_VIEW:return(0,n.Y)(h.A,{});default:return(0,n.Y)(c.A,{})}}},850723:(e,t,a)=>{a.d(t,{J:()=>o,O:()=>s});var n=a(160603),r=a(302118);function i(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}let o=["get_metastore_summary"];function s({fallback:e,useQueryOptions:t}={}){return(0,n.useQuery)({queryKey:o,queryFn:()=>{var t;return(t=function*(){return e?yield r.k.getMetastoreSummaryWithFallBack():yield r.k.getMetastoreSummary()},function(){var e=this,a=arguments;return new Promise(function(n,r){var o=t.apply(e,a);function s(e){i(o,n,r,s,l,"next",e)}function l(e){i(o,n,r,s,l,"throw",e)}s(void 0)})})()},...t})}},869061:(e,t,a)=>{a.d(t,{BV:()=>eP,F:()=>eH,OH:()=>eV,Qz:()=>eY,VT:()=>ey,e0:()=>eF,qu:()=>ew});var n=a(610435);a(692738);var r=a(820648),i=a(505544),o=a(615693),s=a(611791),l=a(784141),E=a(932273),d=a(325382),A=a(319241),u=a(1459),c=a(823825),R=a(815367),T=a(209246),S=a(657252),m=a(430939),f=a(295575),O=a(572599),_=a(397136),I=a(973492),g=a(298500),v=a(889187),p=a(350487),h=a(826279),N=a(194452),L=a(95853),M=a(983972),C=a(704882),D=a(191283),U=a(571117),P=a(518695),w=a(722651),y=a(750269),V=a(587012),F=a(237534),H=a(123577),Y=a(194556),G=a(478848),K=a(302999),B=a(5654),b=a(150788),x=a(359911),W=a(469030),k=a(749298),z=a(630100),$=a(725321),J=a(341231),Q=a(587987),q=a(166525),X=a(609952),j=a(848833),Z=a(60297),ee=a(84796),et=a(829708),ea=a(606295),en=a(732941),er=a(652600),ei=a(609951),eo=a(353492),es=a(227460),el=a(708174),eE=a(243393),ed=a(745387),eA=a(676526),eu=a(522194),ec=a(856879),eR=a(953087),eT=a(475621),eS=a(70482),em=a(961945),ef=a(297979),eO=a(29893),e_=a(988011),eI=a(543525),eg=a(441143),ev=a(545760),ep=a(608759),eh=a(194960),eN=a(265913),eL=a(710814),eM=a(29824),eC=a(581716),eD=a(150924),eU=a(641760);let eP={[eM.an.CATALOG]:r.A,[eM.an.DATABASE]:i.A,[eM.an.TABLE]:o.A,[eM.an.COLUMN]:void 0,[eM.an.VIEW]:s.A,[eM.an.STREAMING_TABLE]:l.A,[eM.an.MATERIALIZED_VIEW]:E.A,[eM.an.VOLUME]:d.A,[eM.an.VOLUME_FILE]:A.A,[eM.an.VOLUME_FOLDER]:u.A,[eM.an.REGISTERED_MODEL]:c.A,[eM.an.REGISTERED_MODEL_VERSION]:c.A,[eM.an.FUNCTION]:R.A,[eM.an.FUNCTION_FEATURE_SPEC]:T.A,[eM.an.STORAGE_CREDENTIAL]:S.A,[eM.an.CREDENTIAL]:S.A,[eM.an.EXTERNAL_LOCATION]:m.A,[eM.an.CONNECTION]:f.A,[eM.an.SHARE]:void 0,[eM.an.RECIPIENT]:void 0,[eM.an.PROVIDER]:void 0,[eM.an.METASTORE]:void 0,[eM.an.CLEAN_ROOM]:O.A,[eM.an.INBOUND_SHARED_NOTEBOOK_FILE]:_.A,[eM.an.VECTOR_INDEX]:I.A,[eM.an.ONLINE_VIEW]:g.A,[eM.an.METRIC_VIEW]:v.A,[eM.an.EXTERNAL_METADATA]:p.A,[eM.an.SECRET]:S.A},ew={[eM.$C.BIGINT]:h.A,[eM.$C.BINARY]:N.A,[eM.$C.BOOLEAN]:function(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 95.986 88.359",...e,children:[(0,n.Y)("defs",{children:(0,n.Y)("filter",{id:"checkbox_source_svg__a",x:0,width:1,y:0,height:1,colorInterpolationFilters:"sRGB",children:(0,n.Y)("feGaussianBlur",{})})}),(0,n.Y)("path",{style:{lineHeight:"normal",fontVariantLigatures:"normal",fontVariantPosition:"normal",fontVariantCaps:"normal",fontVariantNumeric:"normal",fontVariantAlternates:"normal",fontVariantEastAsian:"normal",fontFeatureSettings:"normal",fontVariationSettings:"normal",textIndent:0,textAlign:"start",textDecorationLine:"none",textDecorationStyle:"solid",textDecorationColor:"#000",textTransform:"none",textOrientation:"mixed",whiteSpace:"normal",shapeMargin:0,inlineSize:0,isolation:"auto",mixBlendMode:"normal"},d:"M1288.725-1007.719l-.801.801-64.416 64.414-18.973-18.97-12.894 12.896 31.867 31.857 78.113-78.115zm-123.116.469V-882.516h132.67v-94.558l-18.226 18.228v58.106h-96.217v-88.273h71.764l18.238-18.237z",transform:"matrix(.70572 0 0 .70572 -822.588 711.163)",fontWeight:400,fontFamily:"sans-serif",overflow:"visible",fill:"currentColor",filter:"url(#checkbox_source_svg__a)",enableBackground:"accumulate"})]})},[eM.$C.DATE]:L.A,[eM.$C.DECIMAL]:M.A,[eM.$C.DOUBLE]:M.A,[eM.$C.FLOAT]:M.A,[eM.$C.INT]:h.A,[eM.$C.INTERVAL]:h.A,[eM.$C.SMALLINT]:h.A,[eM.$C.STRING]:C.A,[eM.$C.TIMESTAMP]:D.A,[eM.$C.TINYINT]:h.A,[eM.$C.ARRAY]:U.A,[eM.$C.MAP]:P.A,[eM.$C.STRUCT]:P.A,[eM.$C.CHAR]:C.A,[eM.$C.VARCHAR]:C.A,[eM.$C.GENERAL]:w.A,[eM.$C.GEOMETRY]:y.A};function ey(e){return ew[(0,eU.lA)(e)]??w.A}let eV={[eC.pu.MONGODB]:V,[eC.pu.MYSQL]:F.A,[eC.pu.POSTGRESQL]:H.A,[eC.pu.MANAGED_POSTGRESQL]:H.A,[eC.pu.REDSHIFT]:Y,[eC.pu.SNOWFLAKE]:G,[eC.pu.SQLDW]:K,[eC.pu.SQLSERVER]:B,[eC.pu.DATABRICKS]:b,[eC.pu.VECTOR_INDEX]:b,[eC.pu.SALESFORCE]:x,[eC.pu.SALESFORCE_DATA_CLOUD]:x,[eC.pu.SALESFORCE_DATA_CLOUD_FILE_SHARING]:x,[eC.pu.TERADATA]:W,[eC.pu.ORACLE]:k,[eC.pu.BIGQUERY]:z,[eC.pu.NETSUITE]:$,[eC.pu.WORKDAY_RAAS]:J,[eC.pu.WORKDAY_ACTIVITY_LOGGING]:J,[eC.pu.WORKDAY_HCM]:J,[eC.pu.SERVICENOW]:Q,[eC.pu.SHAREPOINT]:q,[eC.pu.ONEDRIVE]:X.A,[eC.pu.ONELAKE]:j.A,[eC.pu.FABRIC]:j.A,[eC.pu.HIVE_METASTORE]:Z,[eC.pu.GLUE]:Z,[eC.pu.GA4_RAW_DATA]:ee.A,[eC.pu.GOOGLE_DRIVE]:et.A,[eC.pu.HTTP]:ea.A,[eC.pu.POWER_BI]:en.A,[eC.pu.DBT_PLATFORM]:er,[eC.pu.SFTP]:ei.A,[eC.pu.DYNAMICS365]:eo.A,[eC.pu.JIRA]:es,[eC.pu.CONFLUENCE]:el,[eC.pu.GITHUB]:eE,[eC.pu.HUBSPOT]:ed,[eC.pu.ZENDESK]:eA,[eC.pu.SLACK_AUDIT_LOGS]:eu,[eC.pu.SLACK_ACCESS_AND_INTEGRATION_LOGS]:eu,[eC.pu.META_MARKETING]:ec,[eC.pu.SALESFORCE_MARKETING_CLOUD]:x,[eC.pu.JDBC]:eR,[eC.pu.GENERIC_LAKEFLOW_CONNECT]:"",[eC.pu.SLACK]:eu,[eC.pu.KAFKA]:eT.A,[eC.pu.RABBITMQ]:"",[eC.pu.GOOGLE_ADS]:eS,[eC.pu.OUTLOOK]:em.A,[eC.pu.PALANTIR]:ef.A,[eC.pu.BIGLAKE]:z,[eC.pu.GOOGLE_CLOUD_LAKEHOUSE]:z,[eC.pu.TIKTOK_ADS]:eO,[eC.pu.CROWDSTRIKE_EVENT_STREAM]:e_,[eC.pu.ONE_PASSWORD_EVENT_LOGS]:eI,[eC.pu.OKTA_SYSTEM_LOGS]:eg,[eC.pu.AKAMAI_WAF]:ev,[eC.pu.M365_AUDIT_LOGS]:ep,[eC.pu.SMARTSHEET]:eh,[eC.pu.AWS_SECRETS_MANAGER]:eN.A,[eC.pu.VEEVA_VAULT]:eL.A},eF={[eM.an.FUNCTION]:{[eD.x.FUNCTION]:R.A,[eD.x.FUNCTION_PROCEDURE]:y.A,[eD.x.FUNCTION_FEATURE_SPEC]:T.A}};function eH(e){if(e){let t=eP[e];if(t)return t}return eP[eM.an.TABLE]}function eY(e,t){return eV[e]}},873092:(e,t,a)=>{a.d(t,{e:()=>i,w:()=>o});var n=a(441535),r=a(611824);function i(){return(0,r._)()&&(0,n.W)("databricks.unifiedTagging.enableCertificationStatusSystemTag",!1)}function o(){return(0,r._)()&&((0,n.W)("databricks.unifiedTagging.enableLegacyCertificationSystemTags",!0)||i())}},884028:(e,t,a)=>{if(a.d(t,{Fn:()=>E,iu:()=>l}),13057==a.j)var n=a(610435);var r=a(692738);if(13057==a.j)var i=a(394244);if(13057==a.j)var o=a(203796);let s=r.createContext({addOnSuccess:()=>{},removeOnSuccess:()=>{},notifyOnSuccess:()=>{}});function l({children:e}){let[t]=(0,o.n)((0,i.ur)()),[a,E]=(0,r.useState)([]),d=(0,r.useCallback)(e=>{E(t=>[...t,e])},[]),A=(0,r.useCallback)(e=>{E(t=>t.filter(t=>t!==e))},[]),u=(0,r.useCallback)(e=>{for(let n of a)n(e,t)},[a,t]);return(0,n.Y)(s.Provider,{value:{addOnSuccess:d,removeOnSuccess:A,notifyOnSuccess:u},children:e})}function E(){return(0,r.useContext)(s)}},889187:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.75 1a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75H4v-1.5H2.5V7H5v2h1.5V7h3v2H11V7h2.5v2H15V1.75a.75.75 0 0 0-.75-.75zM13.5 5.5v-3h-11v3z",clipRule:"evenodd"}),(0,n.Y)("path",{fill:"currentColor",d:"M5 11v3.25c0 .414.336.75.75.75h9.5a.75.75 0 0 0 .75-.75V11h-1.5v2.5h-.875V12h-1.5v1.5h-.875V11h-1.5v2.5h-.875V12h-1.5v1.5H6.5V11z"})]})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="TableMeasureIcon";let l=s},918071:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.52 2.3a.75.75 0 0 1 .6-.3h7.76a.75.75 0 0 1 .6.3l2.37 3.158a.75.75 0 0 1 .15.45v.842q0 .059-.009.115A2.31 2.31 0 0 1 14 8.567v5.683a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1-.75-.75V8.567A2.31 2.31 0 0 1 1 6.75v-.841a.75.75 0 0 1 .15-.45zm7.605 6.068c.368.337.847.557 1.375.6V13.5h-9V8.968a2.3 2.3 0 0 0 1.375-.6c.411.377.96.607 1.563.607.602 0 1.15-.23 1.562-.607.411.377.96.607 1.563.607.602 0 1.15-.23 1.562-.607m2.375-2.21v.532l-.001.019a.813.813 0 0 1-1.623 0l-.008-.076a1 1 0 0 0 .012-.133V4zm-3.113.445a1 1 0 0 0-.013.106.813.813 0 0 1-1.624-.019V3.5h1.63v3q0 .053.007.103M7.25 3.5v3.19l-.001.019a.813.813 0 0 1-1.623 0l-.006-.064V3.5zM4.12 4 2.5 6.16v.531l.001.019a.813.813 0 0 0 1.619.045z",clipRule:"evenodd"})})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="StorefrontIcon";let l=s},918526:(e,t,a)=>{a.d(t,{j:()=>d});var n=a(610435),r=a(995470);a(692738);var i=a(497895),o=a(227195),s=a(705639),l=a(639712),E=a(99206);let d=({trigger:e,content:t,side:a="top",sideOffset:i=4,align:s="center",minWidth:l=220,maxWidth:E,backgroundColor:d,withArrow:A=!0,...c})=>{let{getPopupContainer:R}=(0,o.G)(),T=u({minWidth:l,maxWidth:E,backgroundColor:d});return(0,n.FD)(r.bL,{...c,children:[(0,n.Y)(r.l9,{asChild:!0,children:e}),(0,n.Y)(r.ZL,{container:R&&R(),children:(0,n.FD)(r.UC,{side:a,sideOffset:i,align:s,css:T.content,children:[t,A&&(0,n.Y)(r.i3,{css:T.arrow})]})})]})},A={arrowWidth:12,arrowHeight:6,arrowBottomLength:()=>30,arrowSide(){return 2*(this.arrowHeight**2*2)**.5},arrowStrokeWidth:()=>2},u=({minWidth:e,maxWidth:t,backgroundColor:a})=>{let{theme:n}=(0,i.wn)();return{content:{backgroundColor:a??n.colors.backgroundPrimary,color:n.colors.textPrimary,lineHeight:n.typography.lineHeightBase,border:`1px solid ${n.colors.border}`,borderRadius:(0,E.S)(s.c.POPOVER_BORDER_RADIUS,n.borders.borderRadiusSm),padding:`${n.spacing.sm}px`,boxShadow:n.shadows.lg,userSelect:"none",zIndex:n.options.zIndexBase+30,minWidth:e,maxWidth:t,...(0,l.WO)(n),a:(0,l.dg)({color:n.colors.actionTertiaryTextDefault,cursor:"default","&:hover, &:focus":{color:n.colors.actionTertiaryTextHover}}),"&:focus-visible":{outlineStyle:"solid",outlineWidth:"2px",outlineOffset:"1px",outlineColor:n.colors.actionDefaultBorderFocus}},arrow:{fill:a??n.colors.backgroundPrimary,height:A.arrowHeight,stroke:n.colors.borderDecorative,strokeDashoffset:-A.arrowBottomLength(),strokeDasharray:A.arrowBottomLength()+2*A.arrowSide(),strokeWidth:A.arrowStrokeWidth(),width:A.arrowWidth,position:"relative",top:-1,zIndex:n.options.zIndexBase+30}}}},921195:(e,t,a)=>{a.d(t,{Hn:()=>g,Kt:()=>T,MH:()=>m,MZ:()=>S,Ng:()=>I,Y8:()=>f,i3:()=>_,k_:()=>O});var n,r=a(610435),i=a(16778),o=a.n(i),s=a(246700),l=a(405706);if(13057==a.j)var E=a(79570);if(13057==a.j)var d=a(465946);var A=a(686560);if(13057==a.j)var u=a(337706);if(13057==a.j)var c=a(737358);var R=a(429072),T=((n={}).SERVING="SERVING",n.MANAGEMENT="MANAGEMENT",n);function S(e,t){let a=(0,A.d)("accountId",""),n=`accounts/${a}`;return!e&&t?`${n}/tagPolicies/${t}`:n}function m(e){return e===R.WO.SYSTEM}let f=(e,t,a)=>{if(m(t))return{icon:(0,r.Y)(s.A,{style:a??{marginRight:e.spacing.xs}}),color:"indigo"};return{icon:(0,r.Y)(l.A,{style:a??{marginRight:e.spacing.xs}}),color:"turquoise"}};function O(e,t,a){let{icon:n,color:i}=f(e,a,{marginRight:0}),s=a===R.WO.DEFAULT?t.formatMessage({id:"Q5nQMu",defaultMessage:"User-Defined"}):o()(a);if(!n)return(0,r.Y)(r.FK,{});return(0,r.Y)(E.m,{componentId:"discovery.data_explorer.governed_tag_list.tag_type_tooltip",content:s,children:(0,r.Y)(d.v,{componentId:"discovery.data_explorer.governed_tag_list.tag_type_icon",color:i,"aria-label":s,children:n})})}function _(e){switch(e){case R.YD.DEFAULT:return R.WO.DEFAULT;case R.YD.SYSTEM:return R.WO.SYSTEM;default:return}}function I(e){let t="/governance/governed-tags";return e?`${t}/${encodeURIComponent(e)}`:t}function g(){return(0,c.AO)({pathname:I(),search:(0,u.XZ)({tab:"automations"})})}},932273:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.75 1a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75H8v-1.5H6.5V7h7v2H15V1.75a.75.75 0 0 0-.75-.75zM5 7H2.5v6.5H5zm8.5-1.5v-3h-11v3z",clipRule:"evenodd"}),(0,n.Y)("path",{fill:"currentColor",d:"m8.43 11.512 3-3.5 1.14.976-1.94 2.262H14a.75.75 0 0 1 .57 1.238l-3 3.5-1.14-.976 1.94-2.262H9a.75.75 0 0 1-.57-1.238"})]})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="TableLightningIcon";let l=s},955897:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("path",{fill:"currentColor",d:"M5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"}),(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.768 1.018a.75.75 0 0 0-.75.75v6.1c0 .199.079.39.22.53l6.884 6.885a.75.75 0 0 0 1.06 0l6.101-6.1a.75.75 0 0 0 0-1.061L8.4 1.237a.75.75 0 0 0-.53-.22zm6.884 12.674L2.518 7.557v-5.04h5.04l6.134 6.135z",clipRule:"evenodd"})]})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="TagIcon";let l=s},982188:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("path",{fill:"currentColor",d:"M7.25 0v2h1.5V0zM16 7.25h-2v1.5h2zM0 7.25h2v1.5H0zM13.127 1.813l-1.415 1.414 1.061 1.06 1.414-1.414zM2.874 1.813l1.414 1.414-1.06 1.06-1.415-1.414z"}),(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 8.221C3.25 5.61 5.382 3.5 8 3.5s4.75 2.109 4.75 4.721a4.7 4.7 0 0 1-.985 2.879c-.754.973-1.33 1.776-1.33 2.644v1.506a.75.75 0 0 1-.75.75h-3.37a.75.75 0 0 1-.75-.75v-1.506c0-.868-.576-1.67-1.33-2.644A4.7 4.7 0 0 1 3.25 8.22M8 5C6.2 5 4.75 6.447 4.75 8.221c0 .738.25 1.417.67 1.96l.044.056c.284.366.612.789.897 1.263h3.278c.285-.474.613-.897.897-1.263l.043-.056c.422-.543.671-1.222.671-1.96C11.25 6.447 9.8 5 8 5m-.934 8.744c0-.256-.03-.504-.081-.744h2.03q-.079.36-.08.744v.756h-1.87z",clipRule:"evenodd"})]})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="LightbulbIcon";let l=s},983972:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M3 10a3 3 0 1 0 6 0V6a3 3 0 0 0-6 0zm3 1.5A1.5 1.5 0 0 1 4.5 10V6a1.5 1.5 0 1 1 3 0v4A1.5 1.5 0 0 1 6 11.5M10 10a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm3 1.5a1.5 1.5 0 0 1-1.5-1.5V6a1.5 1.5 0 0 1 3 0v4a1.5 1.5 0 0 1-1.5 1.5",clipRule:"evenodd"}),(0,n.Y)("path",{fill:"currentColor",d:"M1 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"})]})}let s=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));s.displayName="DecimalIcon";let l=s}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/65577.f7671ea993.chunk.js.map