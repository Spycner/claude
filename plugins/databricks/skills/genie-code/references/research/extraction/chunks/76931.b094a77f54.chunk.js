"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[76931],{345935:(e,t,n)=>{n.d(t,{m:()=>c});var s=n(692738),a=n(483588),i=n(141078),o=n(707076);function r(e,t,n,s,a,i,o){try{var r=e[i](o),m=r.value}catch(e){n(e);return}r.done?t(m):Promise.resolve(m).then(s,a)}let m=(0,i.J1)`
  query DBOneListRecents($input: UseractivityListRecentAssetsRequestInput!, $uiMode: ThumbnailsThumbnailUiMode)
  @component(name: "Lakeview.DatabricksOne") {
    useractivityListRecentAssets(input: $input) {
      assets {
        viewTime
        asset {
          name
          id
          type
          userActivityInfo {
            isFavorite
            assetId
            assetType
          }
          treeNode {
            modifiedAt
            owner {
              id
              fullname
              email
            }
          }
          modifiedAt
          thumbnailUrl(uiMode: $uiMode)
          appMetadata {
            url
            computeState
            creator {
              id
              fullname
              email
            }
          }
        }
      }
      nextPageToken
    }
  }
`,c=e=>{let{skip:t,...n}=e||{},c=e?.variables?.input||{},u=e?.variables?.uiMode,{data:d,loading:l,error:p,fetchMore:R}=(0,i.IT)(m,{skip:!(0,o.MH)()||t,variables:{input:c,uiMode:u},...n}),v=(0,s.useCallback)(e=>{let t=new Map;for(let n of e)n.asset?.type===a.z$1.APP&&n.asset?.id&&t.set(n.asset.id,n);let n=new Set;return e.reduce((e,s)=>{let i=s.asset?.id;if((s.asset?.type===a.z$1.APP||s.asset?.type===a.z$1.APP_USE)&&i){if(n.has(i))return e;n.add(i),e.push({...t.get(i)??s,viewTime:s.viewTime})}else e.push(s);return e},[])},[]);return{recents:(0,s.useMemo)(()=>v(d?.useractivityListRecentAssets?.assets??[]),[d,v]),loading:l,error:p,fetchMore:()=>{var e;return(e=function*(){let e=d?.useractivityListRecentAssets?.nextPageToken;if(!e)return;yield R({variables:{input:{...c,pageToken:e},uiMode:u},updateQuery:(e,{fetchMoreResult:t})=>{if(!t)return e;return{useractivityListRecentAssets:{__typename:"UseractivityListRecentAssetsResponse",assets:[...e?.useractivityListRecentAssets?.assets||[],...t?.useractivityListRecentAssets?.assets||[]],nextPageToken:t?.useractivityListRecentAssets?.nextPageToken??null}}}})},function(){var t=this,n=arguments;return new Promise(function(s,a){var i=e.apply(t,n);function o(e){r(i,s,a,o,m,"next",e)}function m(e){r(i,s,a,o,m,"throw",e)}o(void 0)})})()},hasMore:!!(!p&&d?.useractivityListRecentAssets?.nextPageToken)}}},503498:(e,t,n)=>{n.d(t,{l:()=>r});var s=n(692738),a=n(141078),i=n(707076);let o=(0,a.J1)`
  query DBOneListTrending(
    $userActivityTypes: [UseractivityAssetType!]!
    $numResults: Int!
    $uiMode: ThumbnailsThumbnailUiMode
  ) @component(name: "Lakeview.DatabricksOne") {
    useractivityListPopularAssets(
      input: { requestScope: REQUEST_SCOPE_WORKSPACE, numResults: $numResults, filter: { types: $userActivityTypes } }
    ) {
      assets {
        asset {
          id
          name
          type
          modifiedAt
          treeNode {
            fullPath
            owner {
              id
              fullname
              email
            }
            modifiedAt
            __typename
          }
          appMetadata {
            url
            computeState
            creator {
              id
              fullname
              email
            }
          }
          thumbnailUrl(uiMode: $uiMode)
        }
        popularity {
          bucket
          viewerCount
        }
      }
      apiError {
        code
        message
      }
      recommendationTraceId
    }
  }
`,r=({numResults:e=50,userActivityTypes:t,skip:n=!1,uiMode:r})=>{let{data:m,loading:c,error:u}=(0,a.IT)(o,{skip:!(0,i.MH)()||n,variables:{numResults:e,userActivityTypes:t,uiMode:r}});return{trending:(0,s.useMemo)(()=>m?.useractivityListPopularAssets?.assets??[],[m]),loading:c,error:u,recommendationTraceId:m?.useractivityListPopularAssets?.recommendationTraceId??void 0}}},906488:(e,t,n)=>{n.d(t,{qS:()=>S});var s=n(802558),a=n.n(s),i=n(692738),o=n(483588),r=n(3024),m=n(441535),c=n(141078),u=n(108167),d=n(432993);let l=(0,c.J1)`
  fragment DB1RecommendedAsset on RecommendationAsset {
    id
    type
    name
    modifiedAt
    appMetadata {
      url
      computeState
      creator {
        fullname
        email
        id
        __typename
      }
    }
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
    tags {
      tagName
      tagValue
    }
  }
`,p=(0,c.J1)`
  fragment DB1RecommendedAssetWithThumbnail on RecommendationAsset {
    ...DB1RecommendedAsset
    thumbnailUrl(uiMode: $uiMode)
  }
`,R=(0,c.J1)`
  fragment DB1RecommendationRelevanceReason on RecommendationRelevanceReason {
    relevanceTime
    type
    viewMetadata {
      viewFrequency
    }
  }
`,v=(0,c.J1)`
  fragment DB1RecommendedAssetRecommendationWithThumbnail on RecommendationAssetRecommendation {
    asset {
      ...DB1RecommendedAssetWithThumbnail
    }
    relevanceReason {
      ...DB1RecommendationRelevanceReason
    }
  }
`,A=(0,c.J1)`
  fragment DB1RecommendedAssetsResponseWithThumbnail on RecommendationAssetRecommendations {
    nextPageToken
    assetRecommendations {
      ...DB1RecommendedAssetRecommendationWithThumbnail
    }
    recommendationTraceId
    apiError {
      code
      message
    }
  }
`;function g(e,t,n,s,a,i,o){try{var r=e[i](o),m=r.value}catch(e){n(e);return}r.done?t(m):Promise.resolve(m).then(s,a)}let y=(0,c.J1)`
  fragment DB1SuggestedAsset on UseractivityAsset {
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
`,T=(0,c.J1)`
  fragment DB1SuggestedAssetWithThumbnail on UseractivityAsset {
    ...DB1SuggestedAsset
    thumbnailUrl(uiMode: $uiMode)
  }
`,f=(0,c.J1)`
  fragment DB1RelevanceReason on UseractivityRelevanceReason {
    timestamp
    type
    viewMetadata {
      viewFrequency
    }
  }
`,h=(0,c.J1)`
  fragment DB1AssetRecommendationWithThumbnail on UseractivityAssetRecommendation {
    asset {
      ...DB1SuggestedAssetWithThumbnail
    }
    relevanceReason {
      ...DB1RelevanceReason
    }
  }
`,b=(0,c.J1)`
  fragment DB1SuggestedAssetsResponseWithThumbnail on UseractivityGetAssetRecommendationsResponse {
    nextPageToken
    assetRecommendations {
      ...DB1AssetRecommendationWithThumbnail
    }
    recommendationTraceId
    apiError {
      code
      message
    }
  }
`,k=(0,c.J1)`
  query DatabricksOneSuggestedAssets(
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
      ...DB1SuggestedAssetsResponseWithThumbnail
    }
  }
  ${y}
  ${T}
  ${f}
  ${h}
  ${b}
`,$=(0,c.J1)`
  query DatabricksOneSuggestedAssetsShadow(
    $types: [RecommendationAssetType!]
    $pageSize: Int!
    $pageToken: String
    $page: RecommendationPage
    $uiMode: ThumbnailsThumbnailUiMode
    $recommendationTraceId: String
    $tagsFilter: RecommendationTagsFilterInput
  ) @component(name: "LakehouseCollaboration.DiscoveryAndRecommendation") {
    recommendationGetAssetRecommendations(
      input: {
        pageSize: $pageSize
        filter: { types: $types, tagsFilter: $tagsFilter }
        context: { page: $page }
        pageToken: $pageToken
        recommendationTraceId: $recommendationTraceId
      }
    ) {
      ...DB1RecommendedAssetsResponseWithThumbnail
    }
  }
  ${l}
  ${p}
  ${R}
  ${v}
  ${A}
`;function S({filter:e,pageSize:t=10,page:n=o.SWw.DATABRICKS_ONE_HOME_PAGE,query:s=k,skip:l=!1,uiMode:p,isCertifiedFilterSelected:R=!1}){let v=(0,i.useRef)({filter:e,pageSize:t,page:n,uiMode:p}),A=(0,i.useRef)(d.n.generateUuidV4()),y={filter:e,pageSize:t,page:n,uiMode:p};a()(y,v.current)||(v.current=y,A.current=d.n.generateUuidV4());let T=A.current,f=(0,m.W)("databricks.fe.discover.useRecommendationServiceDBOne",!1),h=(n===o.SWw.DATABRICKS_ONE_HOME_PAGE||n===o.SWw.DATABRICKS_ONE_FOR_YOU_PAGE)&&(0,m.W)("databricks.fe.discover.enableShadowDBOneRecommendationRequests",!1)&&!f,b=(0,i.useMemo)(()=>{let s={pageSize:t,page:n,recommendationTraceId:T};return e&&(s.userActivityTypes=e),p&&(s.uiMode=p),s},[t,n,T,e,p]),P=(0,i.useMemo)(()=>{let s={pageSize:t,page:I(n)};e&&(s.types=M(e)),p&&(s.uiMode=p);let a=R?{tags:[{tagName:u.bu,tagValue:u.EF.CERTIFIED}]}:void 0;return a&&(s.tagsFilter=a),s},[e,t,n,p,R]),{data:w,fetchMore:D,loading:B,error:G,refetch:E,networkStatus:U}=(0,c.IT)(s,{variables:b,notifyOnNetworkStatusChange:!0,skip:l||f}),{data:O,fetchMore:_,loading:C,error:L,refetch:W,networkStatus:x}=(0,c.IT)($,{variables:P,notifyOnNetworkStatusChange:!0,skip:l||!f}),N=(0,i.useMemo)(()=>{let s={pageSize:t,page:I(n)};return e&&(s.types=M(e)),s},[e,t,n]);(0,c.IT)($,{variables:N,notifyOnNetworkStatusChange:!0,skip:!h});let F=(0,i.useMemo)(()=>{let e;if(f){let t=O?.recommendationGetAssetRecommendations?.assetRecommendations||[];e=(0,r.TK)(t)}else{let t=w?.useractivityGetAssetRecommendations?.assetRecommendations||[];e=(0,r.R4)(t)}return e.map(e=>(0,r.CH)(e)).filter(e=>null!==e)},[f,O,w]),J=f?C:B,q=f?L:G,z=f?W:E,K=f?x:U,H=f?O?.recommendationGetAssetRecommendations?.apiError:w?.useractivityGetAssetRecommendations?.apiError,j=f?O?.recommendationGetAssetRecommendations?.nextPageToken:w?.useractivityGetAssetRecommendations?.nextPageToken,Q=f?O?.recommendationGetAssetRecommendations?.recommendationTraceId:w?.useractivityGetAssetRecommendations?.recommendationTraceId;return{loading:J,error:H||q,assetRecommendations:F,fetchMore:()=>{var e;return(e=function*(){if(f){let e=O?.recommendationGetAssetRecommendations?.nextPageToken,t=O?.recommendationGetAssetRecommendations?.recommendationTraceId;e&&(yield _({variables:{pageToken:e,...P,recommendationTraceId:t},updateQuery:(e,{fetchMoreResult:t})=>{if(!t)return e;let n=e?.recommendationGetAssetRecommendations?.assetRecommendations||[],s=t?.recommendationGetAssetRecommendations?.assetRecommendations||[];return{...t,recommendationGetAssetRecommendations:{...t.recommendationGetAssetRecommendations,assetRecommendations:[...n,...s]}}}}))}else{let e=w?.useractivityGetAssetRecommendations?.nextPageToken;e&&(yield D({variables:{pageToken:e,...b},updateQuery:(e,{fetchMoreResult:t})=>{if(!t)return e;let n=e?.useractivityGetAssetRecommendations?.assetRecommendations||[],s=t?.useractivityGetAssetRecommendations?.assetRecommendations||[];return{...t,useractivityGetAssetRecommendations:{...t.useractivityGetAssetRecommendations,assetRecommendations:[...n,...s]}}}}))}},function(){var t=this,n=arguments;return new Promise(function(s,a){var i=e.apply(t,n);function o(e){g(i,s,a,o,r,"next",e)}function r(e){g(i,s,a,o,r,"throw",e)}o(void 0)})})()},hasMore:!!(j&&!(H||q)),refetch:z,networkStatus:K,recommendationTraceId:f?Q||"":T||Q||""}}function M(e){let t=new Set(Object.values(o.Clx));return e.map(e=>{if(t.has(e))return e;return null}).filter(e=>null!==e)}function I(e){if(new Set(Object.values(o.jbe)).has(e))return e;return o.jbe.PAGE_UNSPECIFIED}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/76931.b094a77f54.chunk.js.map