(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[99596],{22756:(e,n,i)=>{"use strict";i.d(n,{m:()=>t});var a,t=((a={}).RECOMMENDATIONS="recommendations",a.FAVORITES="favorites",a.RECENTS="recents",a.TRENDING="trending",a)},49519:(e,n,i)=>{"use strict";i.r(n),i.d(n,{RouteComponent:()=>_,default:()=>z});var a=i(610435),t=i(692738),s=i(332098),r=i(342411),d=i(483588),o=i(136079),m=i(768010),l=i(22756),c=i(329018),u=i(29444),v=i(595915),k=i(550396),g=i(172522),f=i(667297),p=i(686560),S=i(260167),N=i(726977),A=i(829339),T=i(771994),h=i(108167),b=i(497895),y=i(22191),R=i(886100),F=i(583812),E=i(825011),w=i(141078),O=i(738643),D=i.n(O);function M(e,n,i,a,t,s,r){try{var d=e[s](r),o=d.value}catch(e){i(e);return}d.done?n(o):Promise.resolve(o).then(a,t)}function $(e){return function(){var n=this,i=arguments;return new Promise(function(a,t){var s=e.apply(n,i);function r(e){M(s,a,t,r,d,"next",e)}function d(e){M(s,a,t,r,d,"throw",e)}r(void 0)})}}var I=i(518312),L=i.n(I);function P(e,n,i,a,t,s,r){try{var d=e[s](r),o=d.value}catch(e){i(e);return}d.done?n(o):Promise.resolve(o).then(a,t)}function U(e){return function(){var n=this,i=arguments;return new Promise(function(a,t){var s=e.apply(n,i);function r(e){P(s,a,t,r,d,"next",e)}function d(e){P(s,a,t,r,d,"throw",e)}r(void 0)})}}var V=i(975984),C=i(309073);let q=()=>{let e=(0,r.tz)(),{username:n,userId:i}=(0,s.C6)().getLoadedSessionData(),O=i??(0,p.d)("userId_new",-1).toString(),M=(0,o.BA)(),I=(0,o.ks)(),P=(0,o.c8)();(0,A.r)({title:e.formatMessage({id:"Hbi9oJ",defaultMessage:"For You"})});let{searchQueryObject:q,setSearchQueryObject:z,dbOneFilters:_}=(0,m.a)(C.BC),x=(0,t.useMemo)(()=>{if(!q.filters?.searchTypeGroups)return[d.z$1.DATA_ROOM,d.z$1.DASHBOARD_V3];return q.filters.searchTypeGroups.map(e=>{if(e===T.An.DASHBOARD)return d.z$1.DASHBOARD_V3;if(e===T.An.DATA_ROOM)return d.z$1.DATA_ROOM;return null}).filter(e=>null!==e)},[q.filters?.searchTypeGroups]),G=(0,t.useMemo)(()=>{if(q.filters?.isFavorite)return l.m.FAVORITES;if(_.isRecent)return l.m.RECENTS;if(_.isTrending)return l.m.TRENDING;return l.m.RECOMMENDATIONS},[q.filters?.isFavorite,_.isRecent,_.isTrending]),J=q.filters?.certificationStatuses?.includes(h.EF.CERTIFIED)??!1,Q=(0,S.J)(()=>{z({...q,filters:{...q.filters,certificationStatuses:void 0}})});(0,t.useEffect)(()=>{if(G===l.m.RECOMMENDATIONS||!q.filters?.certificationStatuses?.length)return;Q()},[G,q.filters?.certificationStatuses]);let{data:j,loading:W,error:Y,hasMore:B,fetchMore:H,recommendationTraceId:K}=function({resultTypes:e,queryType:n,isCertifiedFilterSelected:i=!1}){let{theme:a}=(0,b.wn)(),s=(0,o.BA)(),r=(0,o.ks)(),m=(0,o.c8)(),c=s&&n===l.m.FAVORITES,u=r&&n===l.m.RECENTS,v=m&&n===l.m.TRENDING,k=a.isDarkMode?d.Jic.UI_MODE_DARK:d.Jic.UI_MODE_DEFAULT,{loading:g,error:f,hasMore:p,fetchMore:S,results:N,performListFavorites:A}=(({resultTypes:e,pageSize:n,uiMode:i})=>{let[a,{data:s,fetchMore:r,loading:d}]=(0,w._l)(D(),{notifyOnNetworkStatusChange:!0}),[o,m]=(0,t.useState)(!1),l=(0,t.useCallback)(()=>$(function*(){m(!0),yield a({variables:{filter:{types:e},pageSize:n,uiMode:i},fetchPolicy:"cache-first"}),m(!1)})(),[a,e,n,i]),c=s?.assetaggregationListFavoriteAccountAssets?.apiError||void 0,u=o?[]:s?.assetaggregationListFavoriteAccountAssets?.assets??[];return{performListFavorites:l,fetchMore:()=>$(function*(){s?.assetaggregationListFavoriteAccountAssets?.nextPageToken&&(yield r({variables:{pageToken:s.assetaggregationListFavoriteAccountAssets.nextPageToken,uiMode:i}}))})(),hasMore:!!(s?.assetaggregationListFavoriteAccountAssets?.nextPageToken&&!c),loading:o||d,error:c,results:u}})({resultTypes:e,pageSize:25,uiMode:k});(0,t.useEffect)(()=>{c&&A()},[A,c]);let{loading:T,error:h,hasMore:O,fetchMore:M,results:I,performListRecents:P}=(({resultTypes:e,pageSize:n,uiMode:i})=>{let[a,{data:s,fetchMore:r,loading:d}]=(0,w._l)(L(),{notifyOnNetworkStatusChange:!0}),[o,m]=(0,t.useState)(!1),l=(0,t.useCallback)(()=>U(function*(){m(!0),yield a({variables:{filter:{types:e},numResults:n,uiMode:i},fetchPolicy:"cache-first"}),m(!1)})(),[a,e,n,i]),c=s?.assetaggregationListRecentAccountAssets?.apiError||void 0,u=o?[]:s?.assetaggregationListRecentAccountAssets?.assets??[];return{performListRecents:l,fetchMore:()=>U(function*(){s?.assetaggregationListRecentAccountAssets?.nextPageToken&&(yield r({variables:{pageToken:s.assetaggregationListRecentAccountAssets.nextPageToken,uiMode:i}}))})(),hasMore:!!(s?.assetaggregationListRecentAccountAssets?.nextPageToken&&!c),loading:o||d,error:c,results:u}})({resultTypes:e,pageSize:25,uiMode:k});(0,t.useEffect)(()=>{u&&P()},[P,u]);let{loading:C,error:q,results:z,performListTrending:_,recommendationTraceId:x}=(0,V.q)({resultTypes:e,uiMode:k});(0,t.useEffect)(()=>{v&&_()},[_,v]);let{loading:G,error:J,assetRecommendations:Q,hasMore:j,fetchMore:W,recommendationTraceId:Y,performSearch:B}=(0,E.m)({resultTypes:e,page:d.SWw.DATABRICKS_ONE_FOR_YOU_PAGE,pageSize:25,uiMode:k,isCertifiedFilterSelected:i});return(0,t.useEffect)(()=>{c||u||B()},[B,c,u]),(0,t.useMemo)(()=>{if(n===l.m.FAVORITES)if(s)return{data:N?.map(e=>(0,F.vW)({asset:e.asset,relevanceReason:{type:d.vUL.FAVORITED},source:"account"})).filter(e=>null!==e),loading:g,error:f??void 0,hasMore:p,fetchMore:S,recommendationTraceId:void 0};else R.iT.sev2(y.Es.DatabricksOne,"attempted-list-favorites-when-not-enabled-in-account-dbone");else if(n===l.m.RECENTS)if(r)return{data:I?.map(e=>(0,F.vW)({asset:e.asset,relevanceReason:{type:d.vUL.VIEWED,timestamp:e.viewTime},source:"account"})).filter(e=>null!==e),loading:T,error:h??void 0,hasMore:O,fetchMore:M,recommendationTraceId:void 0};else R.iT.sev2(y.Es.DatabricksOne,"attempted-list-recents-when-not-enabled-in-account-dbone");else if(n===l.m.TRENDING)if(m)return{data:z?.map(e=>(0,F.vW)({asset:e.asset,relevanceReason:{type:d.vUL.TRENDING},source:"account"})).filter(e=>null!==e),loading:C,error:q??void 0,hasMore:!1,recommendationTraceId:x};else R.iT.sev2(y.Es.DatabricksOne,"attempted-list-trending-when-not-enabled-in-account-dbone");return{data:Q?.map(e=>(0,F.vW)({...e,source:"account"})).filter(e=>null!==e),loading:G,error:J??void 0,hasMore:j,fetchMore:W,recommendationTraceId:Y??void 0}},[Q,N,n,s,g,f,p,S,I,T,h,O,M,z,C,q,x,r,m,G,J,j,W,Y])}({resultTypes:x,queryType:G,isCertifiedFilterSelected:J}),{FAVORITE_COLUMN:Z,NAME_COLUMN:X,RELEVANCE_REASON_COLUMN:ee,UPDATED_AT_COLUMN:en,OWNER_COLUMN:ei,WORKSPACE_COLUMN:ea}=(0,c.Z)("account"),et=[X,ee,en,ei,ea];return(0,o.tn)()&&et.unshift(Z),(0,a.Y)(u.u,{errorBoundaryId:N.s.DatabricksOneAccountLevelForYouPage,header:(0,a.Y)(v.j,{title:(0,a.Y)(r.sA,{id:"/eqjey",defaultMessage:"For you"})}),source:"account",currentUser:{email:n,id:O},results:(0,a.Y)(k.Z,{data:j,columns:et,isLoading:W,hasMore:B,fetchMore:H,hasError:!!Y,recommendationTraceId:K??"",supportedSearchTypeGroups:C.BC,source:"account"}),filters:[g.k.DashboardType,g.k.GenieSpaceType,...(0,o.$A)()&&G===l.m.RECOMMENDATIONS?[g.k.Certified]:[],...M?[g.k.Favorite]:[],...I?[g.k.Recent]:[],...P?[g.k.Trending]:[]],searchFilterPanelFilters:[f.G.Type,...(0,o.$A)()?[f.G.Status]:[],...M||I?[f.G.ForYou]:[]],supportedSearchTypeGroups:C.BC})},z=q,_=q},173773:(e,n,i)=>{"use strict";i.d(n,{Ej:()=>s,qc:()=>r,vO:()=>d,wt:()=>t});var a=i(141078);let t=(0,a.J1)`
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
`;(0,a.J1)`
  fragment RecommendedAssetWithThumbnail on RecommendationAsset {
    ...RecommendedAsset
    thumbnailUrl(uiMode: $uiMode)
  }
`;let s=(0,a.J1)`
  fragment RecommendationRelevanceReason on RecommendationRelevanceReason {
    relevanceTime
    type
    viewMetadata {
      viewFrequency
    }
  }
`,r=(0,a.J1)`
  fragment RecommendedAssetRecommendation on RecommendationAssetRecommendation {
    asset {
      ...RecommendedAsset
    }
    relevanceReason {
      ...RecommendationRelevanceReason
    }
  }
`;(0,a.J1)`
  fragment RecommendedAssetRecommendationWithThumbnail on RecommendationAssetRecommendation {
    asset {
      ...RecommendedAssetWithThumbnail
    }
    relevanceReason {
      ...RecommendationRelevanceReason
    }
  }
`;let d=(0,a.J1)`
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
`;(0,a.J1)`
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
`},260167:(e,n,i)=>{"use strict";i.d(n,{J:()=>o});var a=i(692738),t=i(738421);let s=a.useInsertionEffect;function r(){throw Error("A function wrapped in useEffectEvent can't be called during rendering.")}a.createContext(!0);let d=t.rs;function o(e){let n=a.useRef(r);return s(()=>{n.current=e},[e]),(...e)=>(d()&&r(),(0,n.current)(...e))}},262989:(e,n,i)=>{"use strict";i.d(n,{h:()=>d});var a=i(692738),t=i(53333),s=i(87008),r=i(87221);function d(e,n){let i=(0,r.ki)(),d=(0,s.e)(),o=(0,a.useCallback)(()=>{i({eventType:"component_view",eventEntity:{entityType:"component",entitySubType:e,entityId:n,entityViewId:d},eventPayload:{interactionSubject:!0}})},[n,e,i,d]);return(0,t.z)({onView:o,resetKey:`${e}:${n}`})}},518312:e=>{var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"DatabricksOneAccountListRecentsQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pageToken"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"numResults"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"filter"}},type:{kind:"NamedType",name:{kind:"Name",value:"UseractivityListRecentAssetsRequestFilterInput"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uiMode"}},type:{kind:"NamedType",name:{kind:"Name",value:"ThumbnailsThumbnailUiMode"}},directives:[]}],directives:[{kind:"Directive",name:{kind:"Name",value:"component"},arguments:[{kind:"Argument",name:{kind:"Name",value:"name"},value:{kind:"StringValue",value:"Lakeview.DatabricksOne",block:!1}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"assetaggregationListRecentAccountAssets"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"pageToken"},value:{kind:"Variable",name:{kind:"Name",value:"pageToken"}}},{kind:"ObjectField",name:{kind:"Name",value:"numResults"},value:{kind:"Variable",name:{kind:"Name",value:"numResults"}}},{kind:"ObjectField",name:{kind:"Name",value:"filter"},value:{kind:"Variable",name:{kind:"Name",value:"filter"}}},{kind:"ObjectField",name:{kind:"Name",value:"requestScope"},value:{kind:"EnumValue",value:"REQUEST_SCOPE_ACCOUNT"}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"apiError"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"code"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"nextPageToken"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"assets"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"asset"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"workspace"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"workspaceName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"workspaceFqdn"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"workspaceId"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbnailUrl"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uiMode"},value:{kind:"Variable",name:{kind:"Name",value:"uiMode"}}}],directives:[]},{kind:"Field",name:{kind:"Name",value:"modifiedAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"owner"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"fullname"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"userActivityInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isFavorite"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"viewTime"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:843}};n.loc.source={body:'query DatabricksOneAccountListRecentsQuery(\n  $pageToken: String\n  $numResults: Int\n  $filter: UseractivityListRecentAssetsRequestFilterInput\n  $uiMode: ThumbnailsThumbnailUiMode\n) @component(name: "Lakeview.DatabricksOne") {\n  assetaggregationListRecentAccountAssets(\n    input: { pageToken: $pageToken, numResults: $numResults, filter: $filter, requestScope: REQUEST_SCOPE_ACCOUNT }\n  ) {\n    apiError {\n      message\n      code\n    }\n    nextPageToken\n    assets {\n      asset {\n        workspace {\n          workspaceName\n          workspaceFqdn\n          workspaceId\n        }\n        name\n        id\n        type\n        thumbnailUrl(uiMode: $uiMode)\n        modifiedAt\n        owner {\n          email\n          fullname\n          id\n        }\n        userActivityInfo {\n          isFavorite\n        }\n      }\n      viewTime\n    }\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function a(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}n.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,i){if("FragmentSpread"===n.kind)i.add(n.name.value);else if("VariableDefinition"===n.kind){var a=n.type;"NamedType"===a.kind&&i.add(a.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,i)}),n.definitions&&n.definitions.forEach(function(n){e(n,i)})}(e,n),i[e.name.value]=n}}),e.exports=n,e.exports.DatabricksOneAccountListRecentsQuery=function(e,n){var t={kind:e.kind,definitions:[a(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var s=i[n]||new Set,r=new Set,d=new Set;for(s.forEach(function(e){d.add(e)});d.size>0;){var o=d;d=new Set,o.forEach(function(e){r.has(e)||(r.add(e),(i[e]||new Set).forEach(function(e){d.add(e)}))})}return r.forEach(function(n){var i=a(e,n);i&&t.definitions.push(i)}),t}(n,"DatabricksOneAccountListRecentsQuery")},537015:e=>{var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"DatabricksOneAccountListTrendingQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"numResults"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"filter"}},type:{kind:"NamedType",name:{kind:"Name",value:"UseractivityListPopularAssetsRequestFilterInput"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uiMode"}},type:{kind:"NamedType",name:{kind:"Name",value:"ThumbnailsThumbnailUiMode"}},directives:[]}],directives:[{kind:"Directive",name:{kind:"Name",value:"component"},arguments:[{kind:"Argument",name:{kind:"Name",value:"name"},value:{kind:"StringValue",value:"Lakeview.DatabricksOne",block:!1}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"assetaggregationListPopularAccountAssets"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"numResults"},value:{kind:"Variable",name:{kind:"Name",value:"numResults"}}},{kind:"ObjectField",name:{kind:"Name",value:"filter"},value:{kind:"Variable",name:{kind:"Name",value:"filter"}}},{kind:"ObjectField",name:{kind:"Name",value:"requestScope"},value:{kind:"EnumValue",value:"REQUEST_SCOPE_ACCOUNT"}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"assets"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"asset"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"workspace"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"workspaceId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"workspaceName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"workspaceFqdn"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"modifiedAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"owner"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"fullname"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"treeNode"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"fullPath"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"owner"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"fullname"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"modifiedAt"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"appMetadata"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"computeState"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"creator"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"fullname"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"thumbnailUrl"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uiMode"},value:{kind:"Variable",name:{kind:"Name",value:"uiMode"}}}],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"popularity"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"bucket"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"viewerCount"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"apiError"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"code"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"recommendationTraceId"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:1107}};n.loc.source={body:'query DatabricksOneAccountListTrendingQuery(\n  $numResults: Int\n  $filter: UseractivityListPopularAssetsRequestFilterInput\n  $uiMode: ThumbnailsThumbnailUiMode\n) @component(name: "Lakeview.DatabricksOne") {\n  assetaggregationListPopularAccountAssets(\n    input: { numResults: $numResults, filter: $filter, requestScope: REQUEST_SCOPE_ACCOUNT }\n  ) {\n    assets {\n      asset {\n        workspace {\n          workspaceId\n          workspaceName\n          workspaceFqdn\n        }\n        id\n        name\n        type\n        modifiedAt\n        owner {\n          email\n          fullname\n          id\n        }\n        treeNode {\n          fullPath\n          owner {\n            id\n            fullname\n            email\n          }\n          modifiedAt\n        }\n        appMetadata {\n          url\n          computeState\n          creator {\n            id\n            fullname\n            email\n          }\n        }\n        thumbnailUrl(uiMode: $uiMode)\n      }\n      popularity {\n        bucket\n        viewerCount\n      }\n    }\n    apiError {\n      code\n      message\n    }\n    recommendationTraceId\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function a(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}n.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,i){if("FragmentSpread"===n.kind)i.add(n.name.value);else if("VariableDefinition"===n.kind){var a=n.type;"NamedType"===a.kind&&i.add(a.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,i)}),n.definitions&&n.definitions.forEach(function(n){e(n,i)})}(e,n),i[e.name.value]=n}}),e.exports=n,e.exports.DatabricksOneAccountListTrendingQuery=function(e,n){var t={kind:e.kind,definitions:[a(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var s=i[n]||new Set,r=new Set,d=new Set;for(s.forEach(function(e){d.add(e)});d.size>0;){var o=d;d=new Set,o.forEach(function(e){r.has(e)||(r.add(e),(i[e]||new Set).forEach(function(e){d.add(e)}))})}return r.forEach(function(n){var i=a(e,n);i&&t.definitions.push(i)}),t}(n,"DatabricksOneAccountListTrendingQuery")},553935:(e,n,i)=>{"use strict";i.d(n,{A:()=>o});var a=i(610435),t=i(692738),s=i(375214);function r(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.75 1a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5A.75.75 0 0 0 7 6.25v-4.5A.75.75 0 0 0 6.25 1zm.75 4.5v-3h3v3zM1.75 9a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-4.5A.75.75 0 0 0 6.25 9zm.75 4.5v-3h3v3zM9 1.75A.75.75 0 0 1 9.75 1h4.5a.75.75 0 0 1 .75.75v4.49a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 6.24zm1.5.75v2.99h3V2.5zM9.75 9a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75zm.75 4.5v-3h3v3z",clipRule:"evenodd"})})}let d=(0,t.forwardRef)((e,n)=>(0,a.Y)(s.I,{ref:n,...e,component:r}));d.displayName="GridIcon";let o=d},622120:(e,n,i)=>{"use strict";i.d(n,{DY:()=>g,H6:()=>u,YR:()=>k,mc:()=>v});var a=i(141078),t=i(173773);let s=(0,a.J1)`
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
`,r=(0,a.J1)`
  fragment SuggestedAssetWithThumbnail on UseractivityAsset {
    ...SuggestedAsset
    thumbnailUrl(uiMode: $uiMode)
  }
`,d=(0,a.J1)`
  fragment RelevanceReason on UseractivityRelevanceReason {
    timestamp
    type
    viewMetadata {
      viewFrequency
    }
  }
`,o=(0,a.J1)`
  fragment AssetRecommendation on UseractivityAssetRecommendation {
    asset {
      ...SuggestedAsset
    }
    relevanceReason {
      ...RelevanceReason
    }
  }
`,m=(0,a.J1)`
  fragment AssetRecommendationWithThumbnail on UseractivityAssetRecommendation {
    asset {
      ...SuggestedAssetWithThumbnail
    }
    relevanceReason {
      ...RelevanceReason
    }
  }
`,l=(0,a.J1)`
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
`,c=(0,a.J1)`
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
`,u=(0,a.J1)`
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
  ${s}
  ${r}
  ${d}
  ${m}
  ${c}
`,v=(0,a.J1)`
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
  ${s}
  ${d}
  ${o}
  ${l}
`,k=(0,a.J1)`
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
`,g=(0,a.J1)`
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
  ${t.wt}
  ${t.Ej}
  ${t.qc}
  ${t.vO}
`},738643:e=>{var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"DatabricksOneAccountListFavoritesQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pageToken"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pageSize"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"filter"}},type:{kind:"NamedType",name:{kind:"Name",value:"UseractivityListFavoriteAssetsRequestFilterInput"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uiMode"}},type:{kind:"NamedType",name:{kind:"Name",value:"ThumbnailsThumbnailUiMode"}},directives:[]}],directives:[{kind:"Directive",name:{kind:"Name",value:"component"},arguments:[{kind:"Argument",name:{kind:"Name",value:"name"},value:{kind:"StringValue",value:"Lakeview.DatabricksOne",block:!1}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"assetaggregationListFavoriteAccountAssets"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"pageToken"},value:{kind:"Variable",name:{kind:"Name",value:"pageToken"}}},{kind:"ObjectField",name:{kind:"Name",value:"pageSize"},value:{kind:"Variable",name:{kind:"Name",value:"pageSize"}}},{kind:"ObjectField",name:{kind:"Name",value:"filter"},value:{kind:"Variable",name:{kind:"Name",value:"filter"}}},{kind:"ObjectField",name:{kind:"Name",value:"requestScope"},value:{kind:"EnumValue",value:"REQUEST_SCOPE_ACCOUNT"}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"apiError"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"code"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"nextPageToken"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"assets"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"asset"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"workspace"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"workspaceName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"workspaceFqdn"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbnailUrl"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uiMode"},value:{kind:"Variable",name:{kind:"Name",value:"uiMode"}}}],directives:[]},{kind:"Field",name:{kind:"Name",value:"modifiedAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"owner"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"fullname"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}]}}]}}]}}],loc:{start:0,end:748}};n.loc.source={body:'query DatabricksOneAccountListFavoritesQuery(\n  $pageToken: String\n  $pageSize: Int\n  $filter: UseractivityListFavoriteAssetsRequestFilterInput\n  $uiMode: ThumbnailsThumbnailUiMode\n) @component(name: "Lakeview.DatabricksOne") {\n  assetaggregationListFavoriteAccountAssets(\n    input: { pageToken: $pageToken, pageSize: $pageSize, filter: $filter, requestScope: REQUEST_SCOPE_ACCOUNT }\n  ) {\n    apiError {\n      message\n      code\n    }\n    nextPageToken\n    assets {\n      asset {\n        workspace {\n          workspaceName\n          workspaceFqdn\n        }\n        name\n        id\n        type\n        thumbnailUrl(uiMode: $uiMode)\n        modifiedAt\n        owner {\n          email\n          fullname\n          id\n        }\n      }\n    }\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function a(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}n.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,i){if("FragmentSpread"===n.kind)i.add(n.name.value);else if("VariableDefinition"===n.kind){var a=n.type;"NamedType"===a.kind&&i.add(a.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,i)}),n.definitions&&n.definitions.forEach(function(n){e(n,i)})}(e,n),i[e.name.value]=n}}),e.exports=n,e.exports.DatabricksOneAccountListFavoritesQuery=function(e,n){var t={kind:e.kind,definitions:[a(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var s=i[n]||new Set,r=new Set,d=new Set;for(s.forEach(function(e){d.add(e)});d.size>0;){var o=d;d=new Set,o.forEach(function(e){r.has(e)||(r.add(e),(i[e]||new Set).forEach(function(e){d.add(e)}))})}return r.forEach(function(n){var i=a(e,n);i&&t.definitions.push(i)}),t}(n,"DatabricksOneAccountListFavoritesQuery")},975984:(e,n,i)=>{"use strict";i.d(n,{q:()=>l});var a=i(692738),t=i(483588),s=i(136079),r=i(141078),d=i(537015),o=i.n(d);function m(e,n,i,a,t,s,r){try{var d=e[s](r),o=d.value}catch(e){i(e);return}d.done?n(o):Promise.resolve(o).then(a,t)}let l=({resultTypes:e,initialPending:n=!1,uiMode:i})=>{let[d,{data:l,loading:c}]=(0,r._l)(o(),{notifyOnNetworkStatusChange:!0}),[u,v]=(0,a.useState)(n),k=(0,s.Xi)(),g=(0,a.useCallback)(()=>{var n;return(n=function*(){v(!0);let n={filter:{types:[...e,...k?[t.z$1.APP_USE,t.z$1.APP]:[]]},numResults:50,uiMode:i};yield d({variables:n,fetchPolicy:"cache-first"}),v(!1)},function(){var e=this,i=arguments;return new Promise(function(a,t){var s=n.apply(e,i);function r(e){m(s,a,t,r,d,"next",e)}function d(e){m(s,a,t,r,d,"throw",e)}r(void 0)})})()},[d,e,i,k]),f=l?.assetaggregationListPopularAccountAssets?.apiError||void 0,p=l?.assetaggregationListPopularAccountAssets?.recommendationTraceId??void 0,S=u?[]:l?.assetaggregationListPopularAccountAssets?.assets??[];return{performListTrending:g,loading:u||c,error:f,results:S,recommendationTraceId:p}}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/99596.c15062483d.chunk.js.map