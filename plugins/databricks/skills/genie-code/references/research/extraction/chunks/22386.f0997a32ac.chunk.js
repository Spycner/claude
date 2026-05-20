(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[22386],{2402:e=>{var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetEmailByUserId"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"filter"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[{kind:"Directive",name:{kind:"Name",value:"component"},arguments:[{kind:"Argument",name:{kind:"Name",value:"name"},value:{kind:"StringValue",value:"Lakeview.DatabricksOne",block:!1}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"allAccountUsers"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"Variable",name:{kind:"Name",value:"filter"}}},{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"IntValue",value:"1"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"users"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:169}};n.loc.source={body:'query GetEmailByUserId($filter: String!) @component(name: "Lakeview.DatabricksOne") {\n  allAccountUsers(filter: $filter, first: 1) {\n    users {\n      email\n    }\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var t={};function a(e,n){for(var t=0;t<e.definitions.length;t++){var a=e.definitions[t];if(a.name&&a.name.value==n)return a}}n.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,t){if("FragmentSpread"===n.kind)t.add(n.name.value);else if("VariableDefinition"===n.kind){var a=n.type;"NamedType"===a.kind&&t.add(a.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,t)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,t)}),n.definitions&&n.definitions.forEach(function(n){e(n,t)})}(e,n),t[e.name.value]=n}}),e.exports=n,e.exports.GetEmailByUserId=function(e,n){var i={kind:e.kind,definitions:[a(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var s=t[n]||new Set,r=new Set,o=new Set;for(s.forEach(function(e){o.add(e)});o.size>0;){var c=o;o=new Set,c.forEach(function(e){r.has(e)||(r.add(e),(t[e]||new Set).forEach(function(e){o.add(e)}))})}return r.forEach(function(n){var t=a(e,n);t&&i.definitions.push(t)}),i}(n,"GetEmailByUserId")},10573:e=>{var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetUserByEmail"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"filter"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[{kind:"Directive",name:{kind:"Name",value:"component"},arguments:[{kind:"Argument",name:{kind:"Name",value:"name"},value:{kind:"StringValue",value:"Lakeview.DatabricksOne",block:!1}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"allAccountUsers"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"Variable",name:{kind:"Name",value:"filter"}}},{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"IntValue",value:"1"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"users"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"fullname"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:179}};n.loc.source={body:'query GetUserByEmail($filter: String!) @component(name: "Lakeview.DatabricksOne") {\n  allAccountUsers(filter: $filter, first: 1) {\n    users {\n      id\n      fullname\n    }\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var t={};function a(e,n){for(var t=0;t<e.definitions.length;t++){var a=e.definitions[t];if(a.name&&a.name.value==n)return a}}n.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,t){if("FragmentSpread"===n.kind)t.add(n.name.value);else if("VariableDefinition"===n.kind){var a=n.type;"NamedType"===a.kind&&t.add(a.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,t)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,t)}),n.definitions&&n.definitions.forEach(function(n){e(n,t)})}(e,n),t[e.name.value]=n}}),e.exports=n,e.exports.GetUserByEmail=function(e,n){var i={kind:e.kind,definitions:[a(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var s=t[n]||new Set,r=new Set,o=new Set;for(s.forEach(function(e){o.add(e)});o.size>0;){var c=o;o=new Set,c.forEach(function(e){r.has(e)||(r.add(e),(t[e]||new Set).forEach(function(e){o.add(e)}))})}return r.forEach(function(n){var t=a(e,n);t&&i.definitions.push(t)}),i}(n,"GetUserByEmail")},173773:(e,n,t)=>{"use strict";t.d(n,{Ej:()=>s,qc:()=>r,vO:()=>o,wt:()=>i});var a=t(141078);let i=(0,a.J1)`
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
`;let o=(0,a.J1)`
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
`},262989:(e,n,t)=>{"use strict";t.d(n,{h:()=>o});var a=t(692738),i=t(53333),s=t(87008),r=t(87221);function o(e,n){let t=(0,r.ki)(),o=(0,s.e)(),c=(0,a.useCallback)(()=>{t({eventType:"component_view",eventEntity:{entityType:"component",entitySubType:e,entityId:n,entityViewId:o},eventPayload:{interactionSubject:!0}})},[n,e,t,o]);return(0,i.z)({onView:c,resetKey:`${e}:${n}`})}},320785:(e,n,t)=>{"use strict";t.r(n),t.d(n,{RouteComponent:()=>P,default:()=>G});var a=t(610435),i=t(692738),s=t(332098),r=t(764236),o=t(768010),c=t(136079),d=t(667297),m=t(29444),l=t(69469),u=t(695771),v=t(172522),f=t(686560),p=t(726977),g=t(771994),k=t(22191),y=t(886100),h=t(747129),S=t(965620),A=t(329018),R=t(583812),T=t(550396),b=t(792049),$=t(534718),w=t(309073);let I=({supportedSearchTypeGroups:e})=>{let{searchQueryObject:n}=(0,b.q)({supportedSearchTypeGroups:e}),{dbOneFilters:t}=(0,o.a)(e),{sortOrder:s}=(0,S.pG)(),{performSearch:r,results:d,loading:m,error:l,hasMore:u,fetchMore:v}=(0,$.Y)(),{FAVORITE_COLUMN:f,NAME_COLUMN:p,UPDATED_AT_COLUMN:I,OWNER_COLUMN:N,WORKSPACE_COLUMN:D}=(0,A.Z)("account"),U=(0,c.DN)();(0,i.useEffect)(()=>{let e=U?[...w.BC,g.An.APP]:w.BC,t=n.filters?.searchTypeGroups;r({...n,filters:{...n.filters,searchTypeGroups:t?.length?t:e},pageSize:w.yQ,sortOrder:s})},[n,r,s,U,t.includeUnavailable]);let E=(0,i.useMemo)(()=>d?.filter(e=>{if(!e.workspace?.workspaceFqdn)return y.iT.sev2BurnRate(k.Es.DatabricksOne,"missing-workspace-attribute-in-account-aggregated-search",h.i1.P99,h.Ip.Min0,!1,{resultId:e.id,resultType:e.resultType,resultWorkspaceId:e.workspaceId},!1,!0),!1;return!0}).map(e=>(0,R.fP)({...e,source:"account"})).filter(e=>null!==e)??[],[d]),G=[p,I,N,D];return(0,c.tn)()&&G.unshift(f),(0,a.Y)(T.Z,{data:E,columns:G,isLoading:m,hasMore:u,fetchMore:v,hasError:!!l,source:"account",supportedSearchTypeGroups:e})};var N=t(924207),D=t(88425);let U=()=>{let{username:e,userId:n}=(0,s.C6)().getLoadedSessionData(),t=n??(0,f.d)("userId_new",-1).toString(),r=(0,$.Y)(),o=(0,i.useMemo)(()=>({...r,results:(r.results??[]).map(e=>{let n=e.workspace,t=n?.workspaceId!=null?String(n.workspaceId):n?.workspaceId;return{...e,workspace:n?{...n,workspaceId:t}:n}}),error:r.error??void 0}),[r]);return(0,a.Y)(N.L,{children:(0,a.Y)(D.Y,{currentUser:{email:e,id:t},source:"account",accountSearchApi:o})})},E=[g.An.DASHBOARD,g.An.DATA_ROOM];function G(){let{username:e,userId:n}=(0,s.C6)().getLoadedSessionData(),t=n??(0,f.d)("userId_new",-1).toString(),i=(0,c.jC)(),k=(0,c.ku)(),y=(0,c.Bx)(),h=(0,c.DN)(),S=h?[...E,g.An.APP]:E,A=function(e){let{searchQueryObject:n}=(0,o.a)(e),t=n.filters;if(!t?.domainNames||1!==t.domainNames.length)return!1;let a=Object.keys(t);return 1===a.length&&"domainNames"===a[0]}(S);if(y&&A)return(0,a.Y)(U,{});let R=[d.G.Type,d.G.Owner,...i||k||h?[d.G.Status]:[],...y?[d.G.Domain]:[],d.G.Modified];return(0,a.Y)(N.L,{children:(0,a.Y)(m.u,{errorBoundaryId:p.s.DatabricksOneAccountLevelSearchPage,header:(0,a.FD)(a.FK,{children:[(0,a.Y)(l.R,{supportedSearchTypeGroups:S}),(0,a.Y)(u.A,{supportedSearchTypeGroups:S}),(0,a.Y)(r.h,{size:"md"})]}),source:"account",currentUser:{email:e,id:t},results:(0,a.Y)(I,{supportedSearchTypeGroups:S}),filters:[v.k.DashboardType,v.k.GenieSpaceType,...h?[v.k.AppType]:[],...y?[v.k.Domain]:[],v.k.Owner,...i?[v.k.Certified]:[],...k?[v.k.Favorite]:[],...h?[v.k.AppStatus]:[]],searchFilterPanelFilters:R,supportedSearchTypeGroups:S})})}let P=G},339798:(e,n,t)=>{"use strict";t.d(n,{Q:()=>s,r:()=>i});var a=t(124235);let i=e=>(0,a.cX)()?e.metaKey:e.ctrlKey,s=()=>(0,a.cX)()?"⌘":"Ctrl"},529608:(e,n,t)=>{"use strict";t.d(n,{M:()=>s,m:()=>r});var a=t(441535),i=t(118389);let s=()=>(0,i.P)(),r=()=>s()&&(0,a.W)("databricks.fe.discover.enableDiscoverInDBOne",!1)},553935:(e,n,t)=>{"use strict";t.d(n,{A:()=>c});var a=t(610435),i=t(692738),s=t(375214);function r(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.75 1a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5A.75.75 0 0 0 7 6.25v-4.5A.75.75 0 0 0 6.25 1zm.75 4.5v-3h3v3zM1.75 9a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-4.5A.75.75 0 0 0 6.25 9zm.75 4.5v-3h3v3zM9 1.75A.75.75 0 0 1 9.75 1h4.5a.75.75 0 0 1 .75.75v4.49a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 6.24zm1.5.75v2.99h3V2.5zM9.75 9a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75zm.75 4.5v-3h3v3z",clipRule:"evenodd"})})}let o=(0,i.forwardRef)((e,n)=>(0,a.Y)(s.I,{ref:n,...e,component:r}));o.displayName="GridIcon";let c=o},622120:(e,n,t)=>{"use strict";t.d(n,{DY:()=>p,H6:()=>u,YR:()=>f,mc:()=>v});var a=t(141078),i=t(173773);let s=(0,a.J1)`
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
`,o=(0,a.J1)`
  fragment RelevanceReason on UseractivityRelevanceReason {
    timestamp
    type
    viewMetadata {
      viewFrequency
    }
  }
`,c=(0,a.J1)`
  fragment AssetRecommendation on UseractivityAssetRecommendation {
    asset {
      ...SuggestedAsset
    }
    relevanceReason {
      ...RelevanceReason
    }
  }
`,d=(0,a.J1)`
  fragment AssetRecommendationWithThumbnail on UseractivityAssetRecommendation {
    asset {
      ...SuggestedAssetWithThumbnail
    }
    relevanceReason {
      ...RelevanceReason
    }
  }
`,m=(0,a.J1)`
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
`,l=(0,a.J1)`
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
  ${o}
  ${d}
  ${l}
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
  ${o}
  ${c}
  ${m}
`,f=(0,a.J1)`
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
`,p=(0,a.J1)`
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
  ${i.wt}
  ${i.Ej}
  ${i.qc}
  ${i.vO}
`},924207:(e,n,t)=>{"use strict";t.d(n,{L:()=>v});var a=t(610435),i=t(692738),s=t(601110),r=t(141078),o=t(2402),c=t.n(o),d=t(10573),m=t.n(d);function l(e,n,t,a,i,s,r){try{var o=e[s](r),c=o.value}catch(e){t(e);return}o.done?n(c):Promise.resolve(c).then(a,i)}function u(e){return function(){var n=this,t=arguments;return new Promise(function(a,i){var s=e.apply(n,t);function r(e){l(s,a,i,r,o,"next",e)}function o(e){l(s,a,i,r,o,"throw",e)}r(void 0)})}}let v=({children:e})=>{let n=(0,r.mK)(),t=(0,i.useCallback)(e=>u(function*(){let{data:t}=yield n.query({query:m(),variables:{filter:`email:"${e}"`},errorPolicy:"all",context:{queryId:`getUserId_${e}`}});return t?.allAccountUsers?.users?.[0].id??null})(),[n]),o=(0,i.useCallback)(e=>u(function*(){let{data:t}=yield n.query({query:c(),variables:{filter:`id=${e}`},errorPolicy:"all",context:{queryId:`getUserEmail_${e}`}});return t?.allAccountUsers?.users?.[0].email??null})(),[n]),d=(0,i.useMemo)(()=>({getUserIdByEmail:t,getUserEmailByUserId:o}),[t,o]);return(0,a.Y)(s.j.Provider,{value:d,children:e})}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/22386.f0997a32ac.chunk.js.map