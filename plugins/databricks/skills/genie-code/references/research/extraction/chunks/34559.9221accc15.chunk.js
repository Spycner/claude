"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[34559],{191187:(e,r,t)=>{t.d(r,{A:()=>c});var a=t(610435),n=t(692738),i=t(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M4 15v-2.354a2.751 2.751 0 0 1 0-5.292V1h1.5v6.354a2.751 2.751 0 0 1 0 5.292V15zm.75-3.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5M10.5 1v2.354a2.751 2.751 0 0 0 0 5.292V15H12V8.646a2.751 2.751 0 0 0 0-5.292V1zm.75 3.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,r)=>(0,a.Y)(i.I,{ref:r,...e,component:o}));s.displayName="SlidersIcon";let c=s},465082:(e,r,t)=>{t.d(r,{A:()=>c});var a=t(610435),n=t(692738),i=t(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a3.25 3.25 0 1 0 0 6.5A3.25 3.25 0 0 0 8 1M6.25 4.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M8 9a8.74 8.74 0 0 0-6.836 3.287.75.75 0 0 0-.164.469v1.494c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75v-1.494a.75.75 0 0 0-.164-.469A8.74 8.74 0 0 0 8 9m-5.5 4.5v-.474A7.23 7.23 0 0 1 8 10.5c2.2 0 4.17.978 5.5 2.526v.474z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,r)=>(0,a.Y)(i.I,{ref:r,...e,component:o}));s.displayName="UserIcon";let c=s},484082:(e,r,t)=>{t.d(r,{y:()=>ei});var a=t(610435),n=t(243562),i=t(153769),o=t(564468),s=t(819832),c=t(441535),d=t(632528),l=t.n(d),u=t(692738),m=t(497895),h=t(141078),f=t(108167),p=t(45458),g=t(272285),S=t(993533),v=t(736996),y=t(4597);function T(e,r,t,a,n,i,o){try{var s=e[i](o),c=s.value}catch(e){t(e);return}s.done?r(c):Promise.resolve(c).then(a,n)}let I=(0,h.J1)`
  query DiscoverPageAssetRecommendations(
    $pageSize: Int
    $resultsPerTypeCount: Int
    $filter: RecommendationAssetFilterInput
    $uiMode: ThumbnailsThumbnailUiMode
    $recommendationTraceId: String
  ) @component(name: "LakehouseCollaboration.DiscoveryAndRecommendation") {
    recommendationGetAssetRecommendations(
      input: {
        pageSize: $pageSize
        resultsPerTypeCount: $resultsPerTypeCount
        context: { page: DISCOVER_PAGE }
        filter: $filter
        recommendationTraceId: $recommendationTraceId
      }
    ) {
      assetRecommendations {
        ...DiscoverRecommendationAssetWithThumbnailData
      }
      recommendationTraceId
      apiError {
        message
        code
      }
    }
  }
  ${g.DZ}
`;function R(e,r,t,a,n,i,o){try{var s=e[i](o),c=s.value}catch(e){t(e);return}s.done?r(c):Promise.resolve(c).then(a,n)}let D=(0,h.J1)`
  query DiscoverPageFeaturedAssetRecommendations(
    $pageSize: Int
    $resultsPerTypeCount: Int
    $filter: RecommendationAssetFilterInput
    $uiMode: ThumbnailsThumbnailUiMode
    $recommendationTraceId: String
  ) @component(name: "LakehouseCollaboration.DiscoveryAndRecommendation") {
    recommendationGetAssetRecommendations(
      input: {
        pageSize: $pageSize
        resultsPerTypeCount: $resultsPerTypeCount
        context: { page: DISCOVER_PAGE }
        filter: $filter
        recommendationTraceId: $recommendationTraceId
      }
    ) {
      assetRecommendations {
        ...DiscoverRecommendationAssetWithThumbnailData
      }
      recommendationTraceId
      apiError {
        message
        code
      }
    }
  }
  ${g.DZ}
`;function U(e,r,t,a,n,i,o){try{var s=e[i](o),c=s.value}catch(e){t(e);return}s.done?r(c):Promise.resolve(c).then(a,n)}let P=(0,h.J1)`
  query DiscoverPageMetricViewRecommendations(
    $filter: RecommendationAssetFilterInput
    $pageSize: Int
    $recommendationTraceId: String
  ) @component(name: "LakehouseCollaboration.DiscoveryAndRecommendation") {
    recommendationGetAssetRecommendations(
      input: {
        filter: $filter
        pageSize: $pageSize
        recommendationTraceId: $recommendationTraceId
        context: { page: DISCOVER_PAGE }
      }
    ) {
      assetRecommendations {
        ...DiscoverRecommendationAssetData
      }
      recommendationTraceId
      apiError {
        message
        code
      }
    }
  }
  ${g.Th}
`;var $=t(207524);function b(e,r,t,a,n,i,o){try{var s=e[i](o),c=s.value}catch(e){t(e);return}s.done?r(c):Promise.resolve(c).then(a,n)}let k=(0,h.J1)`
  query DiscoverPageMetricViewFeaturedRecommendations(
    $filter: RecommendationAssetFilterInput
    $pageSize: Int
    $recommendationTraceId: String
  ) @component(name: "LakehouseCollaboration.DiscoveryAndRecommendation") {
    recommendationGetAssetRecommendations(
      input: {
        filter: $filter
        pageSize: $pageSize
        recommendationTraceId: $recommendationTraceId
        context: { page: DISCOVER_PAGE }
      }
    ) {
      assetRecommendations {
        ...DiscoverRecommendationAssetData
      }
      recommendationTraceId
      apiError {
        message
        code
      }
    }
  }
  ${g.Th}
`;var A=t(841710),M=t(190903),C=t(733748),E=t(219569),w=t(432993),_=t(760345),x=t(508634),F=t(381421);function O(e,r,t,a,n,i,o){try{var s=e[i](o),c=s.value}catch(e){t(e);return}s.done?r(c):Promise.resolve(c).then(a,n)}function G(e){return function(){var r=this,t=arguments;return new Promise(function(a,n){var i=e.apply(r,t);function o(e){O(i,a,n,o,s,"next",e)}function s(e){O(i,a,n,o,s,"throw",e)}o(void 0)})}}function z(e,r,t,a,n,i,o){try{var s=e[i](o),c=s.value}catch(e){t(e);return}s.done?r(c):Promise.resolve(c).then(a,n)}function q(e){return function(){var r=this,t=arguments;return new Promise(function(a,n){var i=e.apply(r,t);function o(e){z(i,a,n,o,s,"next",e)}function s(e){z(i,a,n,o,s,"throw",e)}o(void 0)})}}let L=(0,h.J1)`
  query DiscoverPageMetricViewSearch(
    $pageToken: String
    $query: SearchmidtierSearchUnifiedQueryInput
    $filters: SearchmidtierSearchUnifiedFiltersInput
    $pageSize: Int
    $searchId: String
    $context: SearchmidtierSearchUnifiedContextInput
  ) @component(name: "Search.WorkspaceSearch") {
    searchmidtierSearchUnifiedSearch(
      input: {
        pageToken: $pageToken
        query: $query
        filters: $filters
        sortOrder: { criteria: UPDATED_AT }
        pageSize: $pageSize
        searchId: $searchId
        context: $context
      }
    ) {
      apiError {
        message
        code
      }
      nextPageToken
      results {
        ...DiscoverSearchResultUcData
      }
      partialFailures {
        failureType
      }
    }
  }
  ${g.QJ}
`;function N(e,r,t,a,n,i,o){try{var s=e[i](o),c=s.value}catch(e){t(e);return}s.done?r(c):Promise.resolve(c).then(a,n)}function V(e){return function(){var r=this,t=arguments;return new Promise(function(a,n){var i=e.apply(r,t);function o(e){N(i,a,n,o,s,"next",e)}function s(e){N(i,a,n,o,s,"throw",e)}o(void 0)})}}let K=(0,h.J1)`
  query DiscoverPageMetricViewFeaturedSearch(
    $pageToken: String
    $query: SearchmidtierSearchUnifiedQueryInput
    $filters: SearchmidtierSearchUnifiedFiltersInput
    $pageSize: Int
    $searchId: String
    $context: SearchmidtierSearchUnifiedContextInput
  ) @component(name: "Search.WorkspaceSearch") {
    searchmidtierSearchUnifiedSearch(
      input: {
        pageToken: $pageToken
        query: $query
        filters: $filters
        sortOrder: { criteria: UPDATED_AT }
        pageSize: $pageSize
        searchId: $searchId
        context: $context
      }
    ) {
      apiError {
        message
        code
      }
      nextPageToken
      results {
        ...DiscoverSearchResultUcData
      }
      partialFailures {
        failureType
      }
    }
  }
  ${g.QJ}
`;function J(e,r,t,a,n,i,o){try{var s=e[i](o),c=s.value}catch(e){t(e);return}s.done?r(c):Promise.resolve(c).then(a,n)}function Y(e){return function(){var r=this,t=arguments;return new Promise(function(a,n){var i=e.apply(r,t);function o(e){J(i,a,n,o,s,"next",e)}function s(e){J(i,a,n,o,s,"throw",e)}o(void 0)})}}let W=(0,h.J1)`
  query DiscoverPageUpdatedAtSearch(
    $pageToken: String
    $query: SearchmidtierSearchUnifiedQueryInput
    $filters: SearchmidtierSearchUnifiedFiltersInput
    $pageSize: Int
    $searchId: String
    $context: SearchmidtierSearchUnifiedContextInput
  ) @component(name: "Search.WorkspaceSearch") {
    searchmidtierSearchUnifiedSearch(
      input: {
        pageToken: $pageToken
        query: $query
        filters: $filters
        sortOrder: { criteria: UPDATED_AT }
        pageSize: $pageSize
        searchId: $searchId
        context: $context
      }
    ) {
      apiError {
        message
        code
      }
      nextPageToken
      results {
        ...DiscoverSearchResultUcData
      }
      partialFailures {
        failureType
      }
    }
  }
  ${g.QJ}
`;function Z(e,r,t,a,n,i,o){try{var s=e[i](o),c=s.value}catch(e){t(e);return}s.done?r(c):Promise.resolve(c).then(a,n)}function B(e){return function(){var r=this,t=arguments;return new Promise(function(a,n){var i=e.apply(r,t);function o(e){Z(i,a,n,o,s,"next",e)}function s(e){Z(i,a,n,o,s,"throw",e)}o(void 0)})}}let Q=(0,h.J1)`
  query DiscoverPageUpdatedAtFeaturedSearch(
    $pageToken: String
    $query: SearchmidtierSearchUnifiedQueryInput
    $filters: SearchmidtierSearchUnifiedFiltersInput
    $pageSize: Int
    $searchId: String
    $context: SearchmidtierSearchUnifiedContextInput
  ) @component(name: "Search.WorkspaceSearch") {
    searchmidtierSearchUnifiedSearch(
      input: {
        pageToken: $pageToken
        query: $query
        filters: $filters
        sortOrder: { criteria: UPDATED_AT }
        pageSize: $pageSize
        searchId: $searchId
        context: $context
      }
    ) {
      apiError {
        message
        code
      }
      nextPageToken
      results {
        ...DiscoverSearchResultUcData
      }
      partialFailures {
        failureType
      }
    }
  }
  ${g.QJ}
`;var X=t(363665),j=t(483438),H=t(778114),ee=t(393185);function er(e,r,t,a,n,i,o){try{var s=e[i](o),c=s.value}catch(e){t(e);return}s.done?r(c):Promise.resolve(c).then(a,n)}var et=t(514528),ea=t(737709);let en={usePerformSearch:o.AY,useGetDomains:n.q,useGetDomainAssetCount:i.FJ,useGetCollections:function({publishedName:e,draftName:r,skipDraft:t,skip:a}){let{data:n,loading:i,error:o}=(0,h.IT)(ea.XA,{variables:{publishedName:e,draftName:r,skipDraft:t},skip:a});return(0,u.useMemo)(()=>({publishedSections:n?.discover_pagePublished?.config?.sections,draftSections:n?.discover_pageDraft?.config?.sections,loading:i,error:o}),[n?.discover_pagePublished?.config?.sections,n?.discover_pageDraft?.config?.sections,i,o])},useAggregatedDiscoverData:function(e){let r=(0,c.W)("databricks.fe.discover.isDiscoverMigratedToRecommendationService",!1),t=!(0,ee.V)(e)&&r,a=function(){let{performSearch:e,loading:r,error:t,partialFailures:a,results:n,searchId:i,fetchMore:o,hasMore:s}=function(){let{theme:e}=(0,m.wn)(),r=(0,x.d)(),[t,{data:a,fetchMore:n,loading:i}]=(0,h._l)(_.Z,{notifyOnNetworkStatusChange:!0,fetchPolicy:"cache-first"}),[o,s]=(0,u.useState)(!1),[c,d]=(0,u.useState)(void 0),l=(0,u.useRef)(void 0),f=(0,u.useCallback)(({variables:a})=>G(function*(){l.current=a,s(!0),d(void 0);let n=w.n.generateUuidV4(),i=yield r(a),{query:o}=a,c=a.filters?.assetTypes?.length===1,u=c&&a.filters?.assetTypes?.includes(A.W9.UC_TABLE)||!c,m={pageSize:c?v.Zu:v.LZ,query:{query:o,searchMode:S.YD3.KEYWORD,enableCrossRanking:!1},filters:{...i,resultTypes:c?i?.resultTypes:i?.resultTypes?.filter(e=>!v.yt.includes(e)),isMetadataSearch:!0,tagsFilter:(0,$.RI)(i?.tagsFilter)},exclusionFilters:{securableKinds:u?[v.a2]:[]},sortOrder:{criteria:c?(0,F.q_)(a.filters?.assetTypes?.[0]):S.GLR.POPULARITY},uiMode:e.isDarkMode?S.Jic.UI_MODE_DARK:S.Jic.UI_MODE_DEFAULT};yield t({variables:m,onCompleted:()=>{d(n),s(!1)}})})(),[t,r,e]),p=a?.searchmidtierSearchUnifiedSearch?.apiError||void 0,g=o?[]:a?.searchmidtierSearchUnifiedSearch?.results??[],y=a?.searchmidtierSearchUnifiedSearch?.partialFailures||[];return{performSearch:f,fetchMore:()=>G(function*(){a?.searchmidtierSearchUnifiedSearch?.nextPageToken&&(yield n({variables:{pageToken:a.searchmidtierSearchUnifiedSearch.nextPageToken}}))})(),hasMore:!!(a?.searchmidtierSearchUnifiedSearch?.nextPageToken&&!p),loading:o||i,error:p,partialFailures:y,results:g,searchId:c}}(),{performSearch:c,loading:d,error:l,partialFailures:f,results:p,searchId:g,fetchMore:y,hasMore:T}=(0,E.s)(),{performRecommendation:I,results:R,loading:D,fetchMore:U,hasMore:P}=(0,C.Q)(),{performSearch:b,loading:k,error:M,partialFailures:O,results:z,searchId:N}=function(){let e=(0,x.d)(),[r,{data:t,fetchMore:a,loading:n}]=(0,h._l)(K,{notifyOnNetworkStatusChange:!0}),[i,o]=(0,u.useState)(!1),[s,c]=(0,u.useState)(void 0),d=t?.searchmidtierSearchUnifiedSearch?.apiError||void 0,l=i?[]:t?.searchmidtierSearchUnifiedSearch?.results??[],m=t?.searchmidtierSearchUnifiedSearch?.partialFailures||[];return{performSearch:({variables:t})=>V(function*(){o(!0),c(void 0);let a=w.n.generateUuidV4(),n=yield e(t),{query:i}=t,s={pageSize:v.LZ,query:{query:i,searchMode:S.YD3.KEYWORD,enableCrossRanking:!1},filters:{...n,resultTypes:[S.iId.TABLE],securableKinds:[v.a2],isMetadataSearch:!0,tagsFilter:(0,$.RI)(n?.tagsFilter)}};yield r({variables:s,onCompleted:()=>{c(a),o(!1)}})})(),fetchMore:()=>V(function*(){t?.searchmidtierSearchUnifiedSearch?.nextPageToken&&(yield a({variables:{pageToken:t.searchmidtierSearchUnifiedSearch.nextPageToken}}))})(),hasMore:!!(t?.searchmidtierSearchUnifiedSearch?.nextPageToken&&!d),loading:i||n,error:d,partialFailures:m,results:l,searchId:s}}(),{performSearch:J,loading:Z,error:et,partialFailures:ea,results:en,searchId:ei}=function(){let e=(0,x.d)(),[r,{data:t,fetchMore:a,loading:n}]=(0,h._l)(L,{notifyOnNetworkStatusChange:!0}),[i,o]=(0,u.useState)(!1),[s,c]=(0,u.useState)(void 0),d=t?.searchmidtierSearchUnifiedSearch?.apiError||void 0,l=i?[]:t?.searchmidtierSearchUnifiedSearch?.results??[],m=t?.searchmidtierSearchUnifiedSearch?.partialFailures||[];return{performSearch:({variables:t})=>q(function*(){o(!0),c(void 0);let a=w.n.generateUuidV4(),n=yield e(t),{query:i}=t,s={pageSize:v.LZ,query:{query:i,searchMode:S.YD3.KEYWORD,enableCrossRanking:!1},filters:{...n,resultTypes:[S.iId.TABLE],securableKinds:[v.a2]}};yield r({variables:s,onCompleted:()=>{c(a),o(!1)}})})(),fetchMore:()=>q(function*(){t?.searchmidtierSearchUnifiedSearch?.nextPageToken&&(yield a({variables:{pageToken:t.searchmidtierSearchUnifiedSearch.nextPageToken}}))})(),hasMore:!!(t?.searchmidtierSearchUnifiedSearch?.nextPageToken&&!d),loading:i||n,error:d,partialFailures:m,results:l,searchId:s}}(),{performSearch:eo,loading:es,error:ec,partialFailures:ed,results:el,searchId:eu}=function(){let e=(0,x.d)(),[r,{data:t,fetchMore:a,loading:n}]=(0,h._l)(Q,{notifyOnNetworkStatusChange:!0}),[i,o]=(0,u.useState)(!1),[s,c]=(0,u.useState)(void 0),d=t?.searchmidtierSearchUnifiedSearch?.apiError||void 0,l=i?[]:t?.searchmidtierSearchUnifiedSearch?.results??[],m=t?.searchmidtierSearchUnifiedSearch?.partialFailures||[];return{performSearch:({variables:t})=>B(function*(){o(!0),c(void 0);let a=w.n.generateUuidV4(),n=yield e(t),{query:i}=t,s={pageSize:v.LZ,query:{query:i,searchMode:S.YD3.KEYWORD,enableCrossRanking:!1},filters:{...n,resultTypes:v.X4,isMetadataSearch:!0,tagsFilter:(0,$.RI)(n?.tagsFilter)}};yield r({variables:s,onCompleted:()=>{c(a),o(!1)}})})(),fetchMore:()=>B(function*(){t?.searchmidtierSearchUnifiedSearch?.nextPageToken&&(yield a({variables:{pageToken:t.searchmidtierSearchUnifiedSearch.nextPageToken}}))})(),hasMore:!!(t?.searchmidtierSearchUnifiedSearch?.nextPageToken&&!d),loading:i||n,error:d,partialFailures:m,results:l,searchId:s}}(),{performSearch:em,loading:eh,error:ef,partialFailures:ep,results:eg,searchId:eS}=function(){let e=(0,x.d)(),[r,{data:t,fetchMore:a,loading:n}]=(0,h._l)(W,{notifyOnNetworkStatusChange:!0}),[i,o]=(0,u.useState)(!1),[s,c]=(0,u.useState)(void 0),d=t?.searchmidtierSearchUnifiedSearch?.apiError||void 0,l=i?[]:t?.searchmidtierSearchUnifiedSearch?.results??[],m=t?.searchmidtierSearchUnifiedSearch?.partialFailures||[];return{performSearch:({variables:t})=>Y(function*(){o(!0),c(void 0);let a=w.n.generateUuidV4(),n=yield e(t),{query:i}=t,s={pageSize:v.LZ,query:{query:i,searchMode:S.YD3.KEYWORD,enableCrossRanking:!1},filters:{...n,resultTypes:v.X4}};yield r({variables:s,onCompleted:()=>{c(a),o(!1)}})})(),fetchMore:()=>Y(function*(){t?.searchmidtierSearchUnifiedSearch?.nextPageToken&&(yield a({variables:{pageToken:t.searchmidtierSearchUnifiedSearch.nextPageToken}}))})(),hasMore:!!(t?.searchmidtierSearchUnifiedSearch?.nextPageToken&&!d),loading:i||n,error:d,partialFailures:m,results:l,searchId:s}}(),[ev,ey]=(0,u.useState)(!1),eT=(0,u.useRef)(!1),eI=(0,u.useRef)(!1),eR=(0,u.useRef)(!1),eD=(0,u.useCallback)((r,t)=>{var a;return(a=function*(){eR.current=!0;let a=(0,ee.Kg)(r);ey(a);let n=t===S.SWw.DATABRICKS_ONE_FOR_YOU_PAGE;e({variables:r});let i=(0,H.K)()&&!(0,ee.$0)(r)&&!n;eT.current=i,i&&(b({variables:r}),J({variables:r}));let o=(0,j.G)()&&!(0,ee.$0)(r)&&!n;eI.current=o,o&&(eo({variables:r}),em({variables:r})),a?I(r,t):c({variables:r})},function(){var e=this,r=arguments;return new Promise(function(t,n){var i=a.apply(e,r);function o(e){er(i,t,n,o,s,"next",e)}function s(e){er(i,t,n,o,s,"throw",e)}o(void 0)})})()},[e,I,c,b,J,eo,em]),{processedFeaturedResults:eU,processedPopularResults:eP,processedRecommendationsResults:e$,processedMetricViewFeaturedResults:eb,processedMetricViewFallbackResults:ek,processedUpdatedAtFeaturedResults:eA,processedUpdatedAtResults:eM}=function({featuredResults:e=[],popularResults:r=[],recommendationsResults:t=[],metricViewFeaturedResults:a=[],metricViewFallbackResults:n=[],updatedAtFeaturedResults:i=[],updatedAtResults:o=[],featuredSearchId:s,popularSearchId:c,metricViewFeaturedSearchId:d,metricViewFallbackSearchId:l,updatedAtFeaturedSearchId:m,updatedAtSearchId:h}){let f=(0,u.useMemo)(()=>{let r=new Set;return e.forEach(e=>{e.id&&r.add(e.id)}),r},[e]),p=(0,u.useMemo)(()=>{let e=new Set;return a?.forEach(r=>{r.id&&e.add(r.id)}),e},[a]),g=(0,u.useMemo)(()=>{let e=new Set;return i.forEach(r=>{r.id&&e.add(r.id)}),e},[i]),S=(0,u.useMemo)(()=>e.map(e=>({...e,source:X.f.CURATION,trackingSearchId:s})),[e,s]),v=(0,u.useMemo)(()=>r.filter(e=>e.id&&!f.has(e.id)).map(e=>({...e,source:X.f.POPULAR,trackingSearchId:c})),[r,f,c]),y=(0,u.useMemo)(()=>t.filter(e=>e.id&&!f.has(e.id)),[t,f]),T=(0,u.useMemo)(()=>a?.map(e=>({...e,source:X.f.CURATION,trackingSearchId:d}))||[],[a,d]),I=(0,u.useMemo)(()=>n.filter(e=>e.id&&!p.has(e.id)).map(e=>({...e,source:X.f.POPULAR,trackingSearchId:l})),[n,p,l]);return{processedFeaturedResults:S,processedPopularResults:v,processedRecommendationsResults:y,processedMetricViewFeaturedResults:T,processedMetricViewFallbackResults:I,processedUpdatedAtFeaturedResults:(0,u.useMemo)(()=>i.map(e=>({...e,source:X.f.CURATION,trackingSearchId:m})),[i,m]),processedUpdatedAtResults:(0,u.useMemo)(()=>o.filter(e=>e.id&&!g.has(e.id)).map(e=>({...e,source:X.f.POPULAR,trackingSearchId:h})),[o,g,h])}}({featuredResults:n,popularResults:p,recommendationsResults:R,metricViewFeaturedResults:z,metricViewFallbackResults:en,updatedAtFeaturedResults:el,updatedAtResults:eg,featuredSearchId:i,popularSearchId:g,metricViewFeaturedSearchId:N,metricViewFallbackSearchId:ei,updatedAtFeaturedSearchId:eu,updatedAtSearchId:eS}),eC=r||d||D||k||Z||es||eh,eE=!!(t||l||M||et||ec||ef),ew=eC||!eT.current?[]:eb,e_=eC||!eT.current?[]:ek,ex=eC||!eI.current?[]:eA,eF=eC||!eI.current?[]:eM;return{performAggregatedSearch:eD,fetchMoreFeatured:o,fetchMoreRecommendations:ev?U:y,hasMoreFeatured:s,hasMoreRecommendations:ev?P:T,hasSearched:eR.current,loading:eC,hasError:eE,error:t||l||M||et||ec||ef,partialFailures:[...a||[],...f||[],...O||[],...ea||[],...ed||[],...ep||[]],featuredResults:eU,popularResults:ev?[]:eP,recommendationsResults:ev?e$:[],metricViewFeaturedResults:ew,metricViewFallbackResults:e_,updatedAtFeaturedResults:ex,updatedAtResults:eF}}(),{recommendedAssets:n,loading:i}=function({skip:e}){let{performGetRecommendations:r,loading:t,assets:a,recommendationTraceId:n}=function(){let{theme:e}=(0,m.wn)(),{dashboardPublishState:r}=(0,p.b)(),[t,{data:a,loading:n}]=(0,h._l)(I,{notifyOnNetworkStatusChange:!0}),[i,o]=u.useState(!1),s=u.useCallback(({recommendationTraceId:a})=>{var n;return(n=function*(){o(!0);let n={filter:{types:v.xs,exclusionFilter:{securableKinds:[v.a2]},...r&&{dashboardPublishState:r}},resultsPerTypeCount:v.LZ,uiMode:e.isDarkMode?S.Jic.UI_MODE_DARK:S.Jic.UI_MODE_DEFAULT,recommendationTraceId:a};yield t({variables:n,onCompleted:()=>{o(!1)},onError:()=>{o(!1)}})},function(){var e=this,r=arguments;return new Promise(function(t,a){var i=n.apply(e,r);function o(e){T(i,t,a,o,s,"next",e)}function s(e){T(i,t,a,o,s,"throw",e)}o(void 0)})})()},[t,e.isDarkMode,r]),c=u.useMemo(()=>i?[]:(a?.recommendationGetAssetRecommendations?.assetRecommendations??[]).filter(e=>null!==e.asset).map(({asset:e,relevanceReason:r})=>({asset:{...e,tags:[...e.tags??[],{__typename:"RecommendationTagsFilterTag",tagName:f.bu,tagValue:f.EF.CERTIFIED}]},relevanceReason:r})),[a?.recommendationGetAssetRecommendations?.assetRecommendations,i]),d=u.useMemo(()=>a?.recommendationGetAssetRecommendations?.recommendationTraceId||void 0,[a?.recommendationGetAssetRecommendations?.recommendationTraceId]);return{performGetRecommendations:s,loading:i||n,assets:u.useMemo(()=>c.map(({asset:e,relevanceReason:r})=>(0,y._)({asset:e,relevanceReason:r,recommendationTraceId:d})).filter(e=>null!==e),[c,d]),recommendationTraceId:d}}(),{performGetRecommendations:i,loading:o,assets:s,recommendationTraceId:c}=function(){let{theme:e}=(0,m.wn)(),{dashboardPublishState:r}=(0,p.b)(),[t,{data:a,loading:n}]=(0,h._l)(D,{notifyOnNetworkStatusChange:!0}),[i,o]=u.useState(!1),s=u.useCallback(({recommendationTraceId:a})=>{var n;return(n=function*(){o(!0);let n={resultsPerTypeCount:v.LZ,filter:{types:v.xs,exclusionFilter:{securableKinds:[v.a2]},...r&&{dashboardPublishState:r}},uiMode:e.isDarkMode?S.Jic.UI_MODE_DARK:S.Jic.UI_MODE_DEFAULT,recommendationTraceId:a};yield t({variables:n,onCompleted:()=>{o(!1)},onError:()=>{o(!1)}})},function(){var e=this,r=arguments;return new Promise(function(t,a){var i=n.apply(e,r);function o(e){R(i,t,a,o,s,"next",e)}function s(e){R(i,t,a,o,s,"throw",e)}o(void 0)})})()},[t,e.isDarkMode,r]),c=u.useMemo(()=>i?[]:(a?.recommendationGetAssetRecommendations?.assetRecommendations??[]).filter(e=>null!==e.asset).map(({asset:e,relevanceReason:r})=>({asset:{...e,tags:[...e.tags??[],{__typename:"RecommendationTagsFilterTag",tagName:f.bu,tagValue:f.EF.CERTIFIED}]},relevanceReason:r})),[a?.recommendationGetAssetRecommendations?.assetRecommendations,i]),d=u.useMemo(()=>a?.recommendationGetAssetRecommendations?.recommendationTraceId||void 0,[a?.recommendationGetAssetRecommendations?.recommendationTraceId]);return{performGetRecommendations:s,loading:i||n,assets:u.useMemo(()=>c.map(({asset:e,relevanceReason:r})=>(0,y._)({asset:e,relevanceReason:r,recommendationTraceId:d})).filter(e=>null!==e),[c,d]),recommendationTraceId:d}}(),{performGetRecommendations:d,loading:g,assets:C,recommendationTraceId:E}=function(){let[e,{data:r,loading:t}]=(0,h._l)(P,{notifyOnNetworkStatusChange:!0,fetchPolicy:"cache-first"}),[a,n]=u.useState(!1),i=u.useCallback(({pageSize:r=v.LZ,recommendationTraceId:t})=>{var a;return(a=function*(){n(!0);let a={pageSize:r,filter:{types:[S.Clx.UC_TABLE],securableKinds:[v.a2]},recommendationTraceId:t};yield e({variables:a,onCompleted:()=>{n(!1)},onError:()=>{n(!1)}})},function(){var e=this,r=arguments;return new Promise(function(t,n){var i=a.apply(e,r);function o(e){U(i,t,n,o,s,"next",e)}function s(e){U(i,t,n,o,s,"throw",e)}o(void 0)})})()},[e]),o=a?[]:(r?.recommendationGetAssetRecommendations?.assetRecommendations??[]).map(({asset:e,relevanceReason:r})=>({asset:e,relevanceReason:r})).filter(e=>null!==e.asset),s=r?.recommendationGetAssetRecommendations?.recommendationTraceId||void 0;return{performGetRecommendations:i,loading:a||t,assets:o.map(({asset:e,relevanceReason:r})=>(0,y._)({asset:e,relevanceReason:r,recommendationTraceId:s})).filter(e=>null!==e),recommendationTraceId:s}}(),{performGetRecommendations:w,loading:_,assets:x,recommendationTraceId:F}=function(){let[e,{data:r,loading:t}]=(0,h._l)(k,{notifyOnNetworkStatusChange:!0,fetchPolicy:"cache-first"}),[a,n]=u.useState(!1),i=u.useCallback(({pageSize:r=v.LZ,recommendationTraceId:t})=>{var a;return(a=function*(){n(!0);let a={pageSize:r,filter:{types:[S.Clx.UC_TABLE],securableKinds:[v.a2],tagsFilter:(0,$.j8)((0,$.RI)())},recommendationTraceId:t};yield e({variables:a,onCompleted:()=>{n(!1)},onError:()=>{n(!1)}})},function(){var e=this,r=arguments;return new Promise(function(t,n){var i=a.apply(e,r);function o(e){b(i,t,n,o,s,"next",e)}function s(e){b(i,t,n,o,s,"throw",e)}o(void 0)})})()},[e]),o=a?[]:(r?.recommendationGetAssetRecommendations?.assetRecommendations??[]).filter(e=>null!==e.asset).map(({asset:e,relevanceReason:r})=>({asset:{...e,tags:[...e.tags??[],{__typename:"RecommendationTagsFilterTag",tagName:f.bu,tagValue:f.EF.CERTIFIED}]},relevanceReason:r})),s=r?.recommendationGetAssetRecommendations?.recommendationTraceId||void 0;return{performGetRecommendations:i,loading:a||t,assets:o.map(({asset:e,relevanceReason:r})=>(0,y._)({asset:e,relevanceReason:r,recommendationTraceId:s})).filter(e=>null!==e),recommendationTraceId:s}}(),O=u.useMemo(()=>l()([...s,...a],"id"),[a,s]),G=u.useMemo(()=>(function(e){let r={};for(let t of e){let e=(0,M.Oo)(t);e&&(r[e]||(r[e]=[]),r[e].push(t))}return r})(O),[O]),z=u.useMemo(()=>l()([...x,...C],"id"),[x,C]);return u.useEffect(()=>{if(e)return;r({recommendationTraceId:n}),i({recommendationTraceId:c}),d({recommendationTraceId:E}),w({recommendationTraceId:F})},[E,F,c,n,r,i,d,w,e]),{recommendedAssets:u.useMemo(()=>({...G,[A.W9.UC_TABLE_METRIC_VIEW]:z}),[G,z]),loading:g||_||t||o}}({skip:!t});return{...a,loading:a.loading||i,recommendedAssets:n,isRecommendationServiceActive:t}},usePerformDomainAssetsDiscoverSearch:et.l,useGetKnowledgePages:()=>({knowledgePages:[],loading:!1,error:void 0})};function ei({children:e}){return(0,a.Y)(s.SearchDiscoverDataFetchersContext.Provider,{value:en,children:e})}},733748:(e,r,t)=>{t.d(r,{Q:()=>S});var a=t(692738),n=t(497895),i=t(441535),o=t(141078),s=t(432993),c=t(760345),d=t(508634),l=t(993533),u=t(841710),m=t(736996);function h(e,r,t,a,n,i,o){try{var s=e[i](o),c=s.value}catch(e){t(e);return}s.done?r(c):Promise.resolve(c).then(a,n)}function f(e){return function(){var r=this,t=arguments;return new Promise(function(a,n){var i=e.apply(r,t);function o(e){h(i,a,n,o,s,"next",e)}function s(e){h(i,a,n,o,s,"throw",e)}o(void 0)})}}function p(){return(0,i.W)("databricks.fe.discover.useRecommendationService",!1)}let g=(0,o.J1)`
  query DiscoverPageRecommendations(
    $pageSize: Int
    $resultsPerTypeCount: Int
    $pageToken: String
    $assetTypes: [UseractivityAssetType!]
    $uiMode: ThumbnailsThumbnailUiMode
    $overrideDataSources: [UseractivityDataSourceType!]
    $recommendationTraceId: String
    $page: UseractivityPage
  ) @component(name: "DBSQLX.Search") {
    useractivityGetAssetRecommendations(
      input: {
        pageToken: $pageToken
        pageSize: $pageSize
        resultsPerTypeCount: $resultsPerTypeCount
        context: { page: $page }
        filter: { types: $assetTypes }
        overrideDataSources: $overrideDataSources
        recommendationTraceId: $recommendationTraceId
      }
    ) {
      apiError {
        message
        code
      }
      assetRecommendations {
        asset {
          name
          id
          type
          modifiedAt
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
          thumbnailUrl(uiMode: $uiMode)
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
          timestamp
          description
        }
      }
      nextPageToken
      recommendationTraceId
    }
  }
`;function S(){let{theme:e}=(0,n.wn)(),r=(0,d.d)(),[t,h]=(0,a.useState)(!1),[S,v]=(0,a.useState)(void 0),[y,{data:T,loading:I,fetchMore:R}]=(0,o._l)(g,{notifyOnNetworkStatusChange:!0,fetchPolicy:"cache-first"}),[D,{data:U,loading:P,fetchMore:$}]=(0,o._l)(c.q,{notifyOnNetworkStatusChange:!0,fetchPolicy:"cache-first"}),b=p()?U:T,k=p()?P:I,A=p()?$:R,M=(0,a.useCallback)((t,a=l.SWw.DISCOVER_PAGE)=>f(function*(){h(!0),v(void 0);let n=s.n.generateUuidV4(),o=yield r(t),c=o.resultTypes?.map(e=>u.DV[e]).filter(e=>!!e)??[],d=t.filters?.assetTypes?.length===1,f=a===l.SWw.DATABRICKS_ONE_FOR_YOU_PAGE,g=d||f?{pageSize:m.V8}:{resultsPerTypeCount:m.LZ},S=(()=>{let e=(0,i.W)("databricks.fe.search.recommendationOverrideSources","");if(!e)return[];let r=e.split(",").map(e=>e.trim().toUpperCase()),t=[];for(let e of r)(Object.values(l.oeF).includes(e)||Object.values(l.zeF).includes(e))&&t.push(e);return t})(),T={...g,assetTypes:c,...o.dashboardPublishState&&{dashboardPublishState:o.dashboardPublishState},uiMode:e.isDarkMode?l.Jic.UI_MODE_DARK:l.Jic.UI_MODE_DEFAULT,overrideDataSources:S.length>0?S:void 0,page:a},I={...g,assetTypes:c,uiMode:e.isDarkMode?l.Jic.UI_MODE_DARK:l.Jic.UI_MODE_DEFAULT,overrideDataSources:S.length>0?S:void 0,recommendationTraceId:n,page:a};try{p()?yield D({variables:T}):(yield y({variables:I}),v(n))}finally{h(!1)}})(),[r,e.isDarkMode,D,y]),C=t?[]:(p()?b?.recommendationGetAssetRecommendations?.assetRecommendations:b?.useractivityGetAssetRecommendations?.assetRecommendations)?.map(({asset:e,relevanceReason:r})=>{if(!e||!e?.id)return null;let t=e.unityCatalogSecurable?.__typename==="UnityCatalogTable"&&e.unityCatalogSecurable.searchIndexData?.description?e.unityCatalogSecurable.searchIndexData.description:e.treeNode?.__typename==="DataRoomTreeNode"?e.treeNode.dataRoom?.description:null;return{...e,name:e.unityCatalogSecurable?.fullName??e.treeNode?.name??e.name??e.id,type:e?.type,description:t,ucEntityMetadata:{securableKind:e.unityCatalogSecurable?.securableKind},thumbnailUrl:e.thumbnailUrl,popularity:e.userActivityInfo?.popularity,relevanceReason:r,trackingRecommendationTraceId:p()?b?.recommendationGetAssetRecommendations?.recommendationTraceId:S}}).filter(e=>null!==e)??[],E=p()?b?.recommendationGetAssetRecommendations:b?.useractivityGetAssetRecommendations;return{performRecommendation:M,fetchMore:()=>f(function*(){let e=p()?b?.recommendationGetAssetRecommendations:b?.useractivityGetAssetRecommendations;e?.nextPageToken&&(yield A({variables:{pageToken:e.nextPageToken,...p()&&{recommendationTraceId:e.recommendationTraceId}}}))})(),loading:k,results:C,recommendationTraceId:p()?E?.recommendationTraceId??void 0:S,hasMore:!!E?.nextPageToken}}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/34559.9221accc15.chunk.js.map