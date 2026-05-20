"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[48951,83425,84885],{75036:(e,a,t)=>{t.d(a,{e:()=>i,s:()=>n});var s,r=t(696514),n=((s={}).DONE="done",s.CANCELED="canceled",s);let i=(0,r.fH)("Filebrowser::SelectFolderNode")},108167:(e,a,t)=>{t.d(a,{$G:()=>w,CJ:()=>_,Dm:()=>K,Dn:()=>$,EF:()=>F,G$:()=>L,IX:()=>U,Ll:()=>S,Lr:()=>y,Sq:()=>B,bu:()=>C,cJ:()=>D,eo:()=>Y,gW:()=>b,jV:()=>O,p8:()=>k,v8:()=>I,vX:()=>N});var s,r=t(610435),n=t(16778),i=t.n(n),o=t(692738),d=t(955897),l=t(342411),c=t(441535),u=t(967166),g=t(5697),m=t(707076),f=t(210785),A=t(141078),h=t(921195),M=t(660618),E=t(873092),p=t(611824),R=t(425628),T=t(765288);function v(e,a,t,s,r,n,i){try{var o=e[n](i),d=o.value}catch(e){t(e);return}o.done?a(d):Promise.resolve(d).then(s,r)}let I=/^$|^\S(?:.*\S)?$/,D={key:void 0,value:""};function S(e){return e.reduce((e,a)=>(e[a.key]=a,e),{})}function y(e){let{discoveryTags:a,governedTags:t,governedTagKeys:s}=e.reduce((e,a)=>("string"==typeof a?e.discoveryTags.push({name:a,type:f.P.DISCOVERY}):(e.governedTags.push({name:a.key,type:f.P.GOVERNED,tagId:a.id,allowedValues:a.values?.map(e=>e.name),namespace:a.namespace}),e.governedTagKeys.add(a.key)),e),{governedTags:[],governedTagKeys:new Set,discoveryTags:[]}),r=a.filter(({name:e})=>!s.has(e));return t.concat(r).sort((e,a)=>e.name.localeCompare(a.name))}function L(e,a){if(a&&a.length>0){if(!(void 0!==e&&e)||!a.includes(e))return!0}else if(e&&e.trim()?.length>0)return!0;return!1}let O=(e,a)=>a?(0,r.Y)(l.sA,{id:"ES6F5Q",defaultMessage:"{tagValue} is not an allowed value for tag key {tagKey}",values:{tagValue:a,tagKey:e}}):(0,r.Y)(l.sA,{id:"fDVsd8",defaultMessage:"A value is required for tag key {tagKey}",values:{tagKey:e}});function N(e,a,t){let s=(0,p._)();if(!a?.name||!s)return;if(a.type===f.P.DISCOVERY)return{icon:(0,r.Y)(d.A,{style:t})};return(0,h.Y8)(e,a?.namespace,t)}let P=["system.","class."];function w(e,a){if(P.some(a=>e.startsWith(a)))if(e===C)return{formattedTagKey:i()(a),formattedTagValue:void 0};else{let[,t]=e.split(".");return{formattedTagKey:t,formattedTagValue:a}}return{formattedTagKey:e,formattedTagValue:a}}let b="system.Certified",_="system.Deprecated",C="system.certification_status";var F=((s={}).CERTIFIED="certified",s.DEPRECATED="deprecated",s.NONE="none",s);let Y=[b,_];function U(e){if((0,E.e)()){let a=e.find(e=>e.tag_key===C);return{isCertified:a?.tag_value==="certified",isDeprecated:a?.tag_value==="deprecated"}}return{isCertified:e.some(e=>e.tag_key===b),isDeprecated:e.some(e=>e.tag_key===_)}}function k(e){if(!(0,E.e)())return!1;switch(e){case g.Z6.Notebook:return(0,c.W)("databricks.fe.filebrowser.enableNotebookTagging",!1);case g.Z6.Lakeview:return(0,T.w)();case g.Z6.DataRoom:return(0,R.g)();default:return!1}}function $(e,a){let t=e.startsWith("system."),s=a.startsWith("system.");if(e===C&&a!==C)return 1;if(e!==C&&a===C||t&&!s)return -1;if(!t&&s)return 1;return e.localeCompare(a)}function B(){let e=(0,A.mK)(),a=(0,m.Kt)(),t=(0,u.hG)(),s=(0,o.useRef)(t);return(0,o.useCallback)((t,r,n)=>{var i;return(i=function*(){if(t===M.UQ)return[];return s.current({governance_ui_log:{event_name:"fetchTablesWithDeprecatedTagQuery"}}),a&&(0,E.e)()?e.query({query:x,variables:{catalog:t,schema:r,limit:n},fetchPolicy:"cache-first"}).then(e=>e.data.searchmidtierSearchUnifiedSearch?.results?.map(e=>({catalog:t,schema:r,entity:e.name})).filter(e=>!!e.entity)??[]).catch(()=>[]):a&&(0,E.w)()?e.query({query:V,variables:{catalog:t,schema:r,limit:n},fetchPolicy:"cache-first"}).then(e=>e.data.searchmidtierSearchUnifiedSearch?.results?.map(e=>({catalog:t,schema:r,entity:e.name})).filter(e=>!!e.entity)??[]).catch(()=>[]):[]},function(){var e=this,a=arguments;return new Promise(function(t,s){var r=i.apply(e,a);function n(e){v(r,t,s,n,o,"next",e)}function o(e){v(r,t,s,n,o,"throw",e)}n(void 0)})})()},[e,a])}let V=(0,A.J1)`
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
`,x=(0,A.J1)`
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
`,K=(0,A.J1)`
  fragment EntityTagsData on SearchmidtierSearchUnifiedResult {
    tags {
      tag_key: name
      tag_value: value
    }
  }
`},118389:(e,a,t)=>{t.d(a,{P:()=>r});var s=t(441535);function r(){return(0,s.W)("discover_page",!1)&&(0,s.W)("domains",!1)}},173773:(e,a,t)=>{t.d(a,{Ej:()=>n,qc:()=>i,vO:()=>o,wt:()=>r});var s=t(141078);let r=(0,s.J1)`
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
`;(0,s.J1)`
  fragment RecommendedAssetWithThumbnail on RecommendationAsset {
    ...RecommendedAsset
    thumbnailUrl(uiMode: $uiMode)
  }
`;let n=(0,s.J1)`
  fragment RecommendationRelevanceReason on RecommendationRelevanceReason {
    relevanceTime
    type
    viewMetadata {
      viewFrequency
    }
  }
`,i=(0,s.J1)`
  fragment RecommendedAssetRecommendation on RecommendationAssetRecommendation {
    asset {
      ...RecommendedAsset
    }
    relevanceReason {
      ...RecommendationRelevanceReason
    }
  }
`;(0,s.J1)`
  fragment RecommendedAssetRecommendationWithThumbnail on RecommendationAssetRecommendation {
    asset {
      ...RecommendedAssetWithThumbnail
    }
    relevanceReason {
      ...RecommendationRelevanceReason
    }
  }
`;let o=(0,s.J1)`
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
`;(0,s.J1)`
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
`},210785:(e,a,t)=>{t.d(a,{P:()=>r});var s,r=((s={}).GOVERNED="GOVERNED",s.DISCOVERY="DISCOVERY",s)},227583:(e,a,t)=>{t.d(a,{A:()=>d});var s=t(610435),r=t(692738),n=t(375214);function i(e){return(0,s.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,s.FD)("g",{fill:"currentColor",fillRule:"evenodd",clipPath:"url(#VisibleIcon_svg__a)",clipRule:"evenodd",children:[(0,s.Y)("path",{d:"M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6M6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"}),(0,s.Y)("path",{d:"M8 2A8.39 8.39 0 0 0 .028 7.777a.75.75 0 0 0 0 .466 8.389 8.389 0 0 0 15.944 0 .75.75 0 0 0 0-.466A8.39 8.39 0 0 0 8 2m0 10.52a6.89 6.89 0 0 1-6.465-4.51 6.888 6.888 0 0 1 12.93 0A6.89 6.89 0 0 1 8 12.52"})]}),(0,s.Y)("defs",{children:(0,s.Y)("clipPath",{children:(0,s.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let o=(0,r.forwardRef)((e,a)=>(0,s.Y)(n.I,{ref:a,...e,component:i}));o.displayName="VisibleIcon";let d=o},231223:(e,a,t)=>{t.d(a,{J:()=>n,S:()=>r});var s=t(141078);let r=(0,s.J1)`
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
`;function n(e,a={}){return(0,s.IT)(r,{variables:e,...a})}},242995:(e,a,t)=>{t.d(a,{h:()=>i,j:()=>n});var s,r=t(696514),n=((s={}).DONE="done",s.CANCELED="canceled",s);let i=(0,r.fH)("Filebrowser::SaveAsFolderNode")},246700:(e,a,t)=>{t.d(a,{A:()=>d});var s=t(610435),r=t(692738),n=t(375214);function i(e){return(0,s.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,s.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.367 3.29a.75.75 0 0 1 .547.443 5.001 5.001 0 0 1-6.072 6.736l-3.187 3.186a2.341 2.341 0 0 1-3.31-3.31L5.53 7.158a5.001 5.001 0 0 1 6.736-6.072.75.75 0 0 1 .237 1.22L10.5 4.312V5.5h1.19l2.003-2.004a.75.75 0 0 1 .674-.206m-.56 2.214L12.53 6.78A.75.75 0 0 1 12 7H9.75A.75.75 0 0 1 9 6.25V4a.75.75 0 0 1 .22-.53l1.275-1.276a3.501 3.501 0 0 0-3.407 4.865.75.75 0 0 1-.16.823l-3.523 3.523a.84.84 0 1 0 1.19 1.19L8.118 9.07a.75.75 0 0 1 .823-.16 3.5 3.5 0 0 0 4.865-3.407",clipRule:"evenodd"})})}let o=(0,r.forwardRef)((e,a)=>(0,s.Y)(n.I,{ref:a,...e,component:i}));o.displayName="WrenchIcon";let d=o},272285:(e,a,t)=>{t.d(a,{$g:()=>h,DZ:()=>p,QJ:()=>M,Th:()=>E,Ul:()=>A});var s=t(141078);let r=(0,s.J1)`
  fragment DiscoverSearchResultTitleData on SearchmidtierSearchUnifiedResult {
    name
    updatedAt
  }
`,n=(0,s.J1)`
  fragment DiscoverSearchResultOwnerData on SearchmidtierSearchUnifiedResult {
    owner {
      id
      fullname
      email
    }
    ownerId
  }
`,i=(0,s.J1)`
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
`,d=(0,s.J1)`
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
`,l=(0,s.J1)`
  fragment DiscoverSearchResultTableLocationData on SearchmidtierSearchUnifiedResult {
    ucEntityMetadata {
      catalogName
      schemaName
    }
  }
`,c=(0,s.J1)`
  fragment DiscoverSearchResultWorkspaceFullPathData on SearchmidtierSearchUnifiedResult {
    treeNode {
      fullPath
      id
      parent {
        id
      }
    }
  }
`,u=(0,s.J1)`
  fragment DiscoverSearchResultUrlData on SearchmidtierSearchUnifiedResult {
    id
    resultType
    name
    ucEntityMetadata {
      catalogName
      schemaName
    }
  }
`,g=(0,s.J1)`
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
`,f=(0,s.J1)`
  fragment DiscoverSearchResultFavoriteStatusData on SearchmidtierSearchUnifiedResult {
    userActivityInfo {
      assetType
      assetId
      isFavorite
    }
  }
`,A=(0,s.J1)`
  fragment DiscoverSearchResultAllAssetData on SearchmidtierSearchUnifiedResult {
    id
    ...DiscoverSearchResultTitleData
    ...DiscoverSearchResultDescriptionData
    ...DiscoverSearchResultTagsData
    ...DiscoverSearchResultIconData
    ...DiscoverSearchResultFavoriteStatusData
    ...DiscoverSearchResultUrlData
  }
  ${r}
  ${i}
  ${m}
  ${o}
  ${f}
  ${u}
`,h=(0,s.J1)`
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
  ${r}
  ${n}
  ${o}
  ${i}
  ${d}
  ${l}
  ${c}
  ${u}
  ${g}
  ${m}
  ${f}
`,M=(0,s.J1)`
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
  ${r}
  ${n}
  ${o}
  ${i}
  ${d}
  ${l}
  ${u}
  ${m}
  ${f}
`,E=(0,s.J1)`
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
`,p=(0,s.J1)`
  fragment DiscoverRecommendationAssetWithThumbnailData on RecommendationAssetRecommendation {
    ...DiscoverRecommendationAssetData
    asset {
      thumbnailUrl(uiMode: $uiMode)
    }
  }
  ${E}
`},295423:(e,a,t)=>{t.d(a,{f:()=>l});var s=t(692738),r=t(671244),n=t(653542),i=t(49586),o=t(209908);let d=50,l=({enableAccountGroups:e=!1,enableAccountServicePrincipals:a=!1,enableAccountUsers:t=!1,enableWorkspaceGroups:l=!0,enableWorkspaceServicePrincipals:c=!0,enableWorkspaceUsers:u=!0,filterText:g="",principalIdsForFiltering:m=[],principalUniqueNamesForFiltering:f=[],limit:A=d,useLite:h,skip:M=!1,isCache:E=!1}={})=>{let p=(0,o.VM)({ids:m,uniqueNames:f}),R=(0,o.L5)({ids:m,uniqueNames:f}),{subjects:T,isLoading:v,error:I,hasNextPage:D}=(0,i.zo)({source:"account",filter:g,filterPredicate:p,first:A,skip:!t||M,useLite:h,isCache:E}),{subjects:S,isLoading:y,error:L,hasNextPage:O}=(0,r.Bi)({source:"account",filter:g,filterPredicate:R,first:A,skip:!e||M,useLite:h,isCache:E}),{subjects:N,isLoading:P,error:w,hasNextPage:b}=(0,n.Q_)({source:"account",filter:g,filterPredicate:p,first:A,skip:!a||M,useLite:h,isCache:E}),{subjects:_,isLoading:C,error:F,hasNextPage:Y}=(0,i.zo)({source:"workspace",filter:g,filterPredicate:p,first:A,skip:!u||M,useLite:h,isCache:E}),{subjects:U,isLoading:k,error:$,hasNextPage:B}=(0,r.Bi)({source:"workspace",filter:g,filterPredicate:R,first:A,skip:!l||M,useLite:h,isCache:E}),{subjects:V,isLoading:x,error:K,hasNextPage:J}=(0,n.Q_)({source:"workspace",filter:g,filterPredicate:p,first:A,skip:!c||M,useLite:h,isCache:E}),W=(0,s.useMemo)(()=>{let a=[...U,...S];if(e&&l)return a.filter((e,a,t)=>a===t.findIndex(a=>a.id===e.id));return a},[S,e,l,U]),j=(0,s.useMemo)(()=>{let e=[...V,...N];if(a&&c)return e.filter((e,a,t)=>a===t.findIndex(a=>a.id===e.id));return e},[N,a,c,V]),H=(0,s.useMemo)(()=>{let e=[..._,...T];if(t&&u)return e.filter((e,a,t)=>a===t.findIndex(a=>a.id===e.id));return e},[T,t,u,_]),{subjects:z,hasNextPage:G}=(0,s.useMemo)(()=>(0,o.GF)(g,A,W,j,H),[g,A,W,j,H]),Q=(0,s.useMemo)(()=>({accountGroups:y,accountServicePrincipals:P,accountUsers:v,groups:k,servicePrincipals:x,users:C,some:y||P||v||k||x||C}),[y,P,v,k,x,C]),q=(0,s.useMemo)(()=>({accountGroups:L??null,accountServicePrincipals:w??null,accountUsers:I??null,groups:$??null,servicePrincipals:K??null,users:F??null}),[L,w,I,$,K,F]);return{allSubjectsMap:(0,s.useMemo)(()=>(0,o.ne)(W,j,H),[W,j,H]),errors:q,hasNextPage:!!(z.length===A&&(D||O||b||Y||B||J)||G),isLoading:Q,subjects:z}}},301171:(e,a,t)=>{t.d(a,{v:()=>l});var s=t(610435);t(692738);var r=t(382908),n=t(342411),i=t(853762),o=t(771994),d=t(214060);let l={noMoreResultsPleaseNarrowSearch:(0,s.Y)(n.sA,{id:"EXxUmv",defaultMessage:"Not the results you expected? Try using different keywords, checking for typos, or adjusting filters."}),schemaFilterError:(0,s.Y)(n.sA,{id:"ioUsml",defaultMessage:"Error loading schemas"}),catalogFilterError:(0,s.Y)(n.sA,{id:"g9VKGo",defaultMessage:"Error loading catalogs"}),tagFilterError:(0,s.Y)(n.sA,{id:"BAVUZT",defaultMessage:"Error loading tags"}),typeForMoreUsers:e=>(0,s.Y)(n.sA,{id:"JAa9+n",defaultMessage:"The first {count} users are displayed. Search to narrow results.",values:{count:e}}),modalTitle:(0,s.Y)(n.sA,{id:"wALXhh",defaultMessage:"Search"}),searchBarSubmitButton:(0,s.Y)(n.sA,{id:"I2wVEx",defaultMessage:"Search"}),searchBarPlaceholder:(e,a)=>1===a.length?e.formatMessage({id:"InuxyD",defaultMessage:"Search for {fileType}"},{fileType:a[0]}):e.formatMessage({id:"eadQlj",defaultMessage:"Search for {firstFileType}, {secondFileType}, and more"},{firstFileType:a[0],secondFileType:a[1]}),searchMode:e=>e.formatMessage({id:"Gt2A4i",defaultMessage:"Search mode"}),semantic:e=>e.formatMessage({id:"wrfBCo",defaultMessage:"Semantic search"}),keyword:e=>e.formatMessage({id:"tZBt78",defaultMessage:"Keyword search"}),anytime:e=>e.formatMessage({id:"5my7Ui",defaultMessage:"Anytime"}),lastModified:e=>e.formatMessage({id:"CvWHjn",defaultMessage:"Last modified"}),last24hours:e=>e.formatMessage({id:"EA3yHn",defaultMessage:"Within 24 hours"}),last7days:e=>e.formatMessage({id:"fuQYvC",defaultMessage:"Within 7 days"}),last30days:e=>e.formatMessage({id:"Hb5Asz",defaultMessage:"Within 30 days"}),catalogLabel:e=>e.formatMessage({id:"LfFo2Z",defaultMessage:"Catalog"}),schemaLabel:e=>e.formatMessage({id:"MI82Ep",defaultMessage:"Schema"}),tagLabel:e=>e.formatMessage({id:"H1NmgQ",defaultMessage:"Tag"}),userLabel:(0,s.Y)(n.sA,{id:"XFerZS",defaultMessage:"Owner"}),partnerCategoryLabel:(0,s.Y)(n.sA,{id:"2k6uJ5",defaultMessage:"Categories"}),marketplaceCategoryLabel:(0,s.Y)(n.sA,{id:"f2vlXl",defaultMessage:"Categories"}),multipleSelectedUsersLabel:e=>(0,s.Y)(n.sA,{id:"EDAphJ",defaultMessage:"{count} users",values:{count:e}}),multipleSelectedCatalogsLabel:e=>(0,s.Y)(n.sA,{id:"sFdX5u",defaultMessage:"{count} catalogs",values:{count:e}}),multipleSelectedTagsLabel:e=>(0,s.Y)(n.sA,{id:"COBuf/",defaultMessage:"{count} tags",values:{count:e}}),multipleSelectedSchemasLabel:e=>(0,s.Y)(n.sA,{id:"N3koON",defaultMessage:"{count} schemas",values:{count:e}}),selected:(0,s.Y)(n.sA,{id:"oRK8zV",defaultMessage:"Selected"}),me:(0,s.Y)(n.sA,{id:"zv7JsD",defaultMessage:"Me"}),everyone:(0,s.Y)(n.sA,{id:"/Dq46W",defaultMessage:"Everyone"}),fileTypeLabel:(0,s.Y)(n.sA,{id:"aGb5NR",defaultMessage:"Type"}),multipleSelectedFileTypesLabel:e=>(0,s.Y)(n.sA,{id:"CfWj68",defaultMessage:"{count} types",values:{count:e}}),sort:e=>e.formatMessage({id:"zRqlun",defaultMessage:"Sort by"}),relevance:e=>e.formatMessage({id:"hiRkob",defaultMessage:"Most relevant"}),popularity:e=>e.formatMessage({id:"hyZsg/",defaultMessage:"Most popular"}),searchmidtierResultMessage:(e,a)=>{switch(a){case o.If.DOCUMENTATION:return e.formatMessage({id:"pu8E+G",defaultMessage:"Documents"});case o.If.PROJECT:return(0,d.Q)()?e.formatMessage({id:"m2VEDE",defaultMessage:"Git folders"}):e.formatMessage({id:"Vce5FG",defaultMessage:"Repos"});case o.If.FILE:return e.formatMessage({id:"P9WXfC",defaultMessage:"Files"});case o.If.FOLDER:return e.formatMessage({id:"ii5y22",defaultMessage:"Folders"});case o.If.LIBRARY:return e.formatMessage({id:"rVC3Xq",defaultMessage:"Libraries"});case o.If.TABLE:return e.formatMessage({id:"kNHLDl",defaultMessage:"Tables"});case o.If.METRIC_VIEW:return e.formatMessage({id:"fm8QIi",defaultMessage:"Metric views"});case o.If.VOLUME:return e.formatMessage({id:"AGr2pF",defaultMessage:"Volumes"});case o.If.FUNCTION:return e.formatMessage({id:"JhdnX6",defaultMessage:"Functions"});case o.If.NOTEBOOK:return e.formatMessage({id:"iIT2GO",defaultMessage:"Notebooks"});case o.If.MLFLOW_EXPERIMENT:return e.formatMessage({id:"PZyeta",defaultMessage:"Experiments"});case o.If.QUERY:return e.formatMessage({id:"r37QiN",defaultMessage:"Queries"});case o.If.ALERT:return e.formatMessage({id:"1PsxP7",defaultMessage:"Legacy Alerts"});case o.If.ALERT_V2:return e.formatMessage({id:"Fccfue",defaultMessage:"Alerts"});case o.If.PIPELINE:return e.formatMessage({id:"2JGQlt",defaultMessage:"Pipelines"});case o.If.DBSQL_DASHBOARD:return e.formatMessage({id:"InkkPP",defaultMessage:"Dashboards"});case o.If.JOB:return e.formatMessage({id:"gLNYHR",defaultMessage:"Jobs"});case o.If.ML_MODEL:return e.formatMessage({id:"6YNBeQ",defaultMessage:"Models"});case o.If.PARTNER:return e.formatMessage({id:"ai5xOS",defaultMessage:"Partners"});case o.If.MARKETPLACE:return e.formatMessage({id:"vrBCdZ",defaultMessage:"Marketplace"});case o.If.DATA_ROOM:return e.formatMessage({id:"GC9aHp",defaultMessage:"Genie spaces"});case o.If.ML_ENDPOINT:return e.formatMessage({id:"FJa/HC",defaultMessage:"Endpoints"});case o.If.CATALOG:case o.If.SCHEMA:case o.If.NAV_LINK:case o.If.APP:case o.If.DESIGNER_FILE:case o.If.LAKEWATCH_QUERY:return""}},clearNavigationalSearchInput:(0,s.Y)(n.sA,{id:"aqx4a0",defaultMessage:"Clear"}),resetFilters:(0,s.Y)(n.sA,{id:"xqIJoR",defaultMessage:"Reset filters"}),allTab:(0,s.Y)(n.sA,{id:"ZtTd77",defaultMessage:"All"}),viewAllResults:(0,s.Y)(n.sA,{id:"im2CfH",defaultMessage:"View all"}),viewAllResultsWithType:(e,a)=>e.formatMessage({id:"YUp8It",defaultMessage:"View all {fileType}"},{fileType:a}),defaultSearchError:(0,s.Y)(n.sA,{id:"LPHoZf",defaultMessage:"An error occurred while fetching search results. Please try again later."}),searchQueryTooLong:(0,s.Y)(n.sA,{id:"MZjOEX",defaultMessage:"The max allowed input length is {maxLength}. Please try again with a shortened search term.",values:{maxLength:100}}),noResults:(0,s.Y)(n.sA,{id:"69/sr2",defaultMessage:"No results matched your search."}),noQuery:(0,s.Y)(n.sA,{id:"Ds2vL2",defaultMessage:"Type in a query and press enter to search"}),lastModifiedTimeText:e=>(0,s.Y)(n.sA,{id:"CV9ZrO",defaultMessage:"modified {time}",values:{time:e}}),more:(0,s.Y)(n.sA,{id:"+PHNYN",defaultMessage:"More"}),unityCatalogUpgrade:(0,s.Y)(n.sA,{id:"A6Qlf7",defaultMessage:"Upgrade to Unity Catalog to search tables. Tables in the Hive Metastore aren't searchable."}),unityCatalogTables:(0,s.Y)(n.sA,{id:"oQI1QJ",defaultMessage:"Only showing results for tables in Unity Catalog. Tables in the Hive Metastore aren't searchable."}),ucModelNoResults:(0,s.Y)(n.sA,{id:"N1S9o+",defaultMessage:"No result matches were found for models in Unity Catalog."}),ucModelWorkspaceRedirect:e=>(0,s.Y)(n.sA,{id:"S1FQwL",defaultMessage:"To search for models in the current workspace, go to the <link>models page</link>.",values:{link:a=>(0,s.Y)(r.o.Link,{componentId:"codegen_webapp_js_search_v2search_i18n.tsx_424",href:e,children:a})}}),modelWorkspaceInfo:e=>(0,s.Y)(n.sA,{id:"1w6C0v",defaultMessage:"Only showing results for models in Unity Catalog. Search for models in the current workspace in the <link>workspace model registry</link>.",values:{link:a=>(0,s.Y)(r.o.Link,{componentId:"codegen_webapp_js_search_v2search_i18n.tsx_431",href:e,children:a})}}),jobId:e=>(0,s.Y)(n.sA,{id:"IcylbC",defaultMessage:"Job ID: {jobId}",values:{jobId:e}}),jobServicePrincipalOwner:(0,s.Y)(n.sA,{id:"9926x/",defaultMessage:"Service principal owner"}),lastJobRun:(0,s.Y)(n.sA,{id:"oPpdT/",defaultMessage:"Last run:"}),openFullPageSearch:(e,a)=>e.formatMessage({id:"K4NWC5",defaultMessage:"Show all results for ''{searchValue}'' in a full page"},{searchValue:a}),openEmptyFullPageSearch:e=>e.formatMessage({id:"kwrEEs",defaultMessage:"Open search in a full page"}),newTab:(0,s.Y)(n.sA,{id:"Mh6Fw/",defaultMessage:"Open in a new tab"}),enter:(0,s.Y)(n.sA,{id:"Rhf1Qy",defaultMessage:"Enter"}),openAdvancedSearch:(e,a)=>{if(a)return e.formatMessage({id:"B/IQP7",defaultMessage:"Show all results for ''{searchValue}''"},{searchValue:a});return e.formatMessage({id:"qay3aB",defaultMessage:"Open advanced search"})},itemViewedTime:(e,a=!1)=>{let t=new Date(e);return a?(0,s.Y)(n.sA,{id:"pE6SrH",defaultMessage:"Viewed {timeAgo}",values:{timeAgo:(0,s.Y)(i.f,{date:t})}}):(0,s.Y)(n.sA,{id:"87kVKV",defaultMessage:"viewed {timeAgo}",values:{timeAgo:(0,s.Y)(i.f,{date:t})}})},relatedContentSubtitle:e=>(0,s.Y)(n.sA,{id:"X/uBJA",defaultMessage:'related to "{pageName}"',values:{pageName:e}}),relatedContentLabel:e=>e.formatMessage({id:"0SQTVq",defaultMessage:"Suggested"}),recentsLabel:e=>e.formatMessage({id:"IIR4ht",defaultMessage:"Recents"}),productsAndPagesLabel:e=>e.formatMessage({id:"BpFmuq",defaultMessage:"Products and Pages"})}},311529:(e,a,t)=>{t.d(a,{F:()=>n,x:()=>i});var s,r=t(696514),n=((s={}).DONE="done",s);let i=(0,r.fH)("Filebrowser::Share")},322227:(e,a,t)=>{t.d(a,{$:()=>n,x:()=>i});var s,r=t(696514),n=((s={}).DONE="done",s.CANCELLED="cancelled",s);let i=(0,r.fH)("Filebrowser::Move")},397382:(e,a,t)=>{t.d(a,{N:()=>r});var s=t(441535);function r(){return(0,s.W)("databricks.fe.discover.domainsRecommendations",!1)}},425628:(e,a,t)=>{t.d(a,{g:()=>i});var s=t(542908),r=t(620275),n=t(441535);function i(){return!(0,s.B)()&&!(0,r.s4)()&&((0,n.W)("enable_lakeview_tags",!1)||(0,n.W)("databricks.fe.lakeview.enableLakeviewTags",!1))}},429072:(e,a,t)=>{t.d(a,{WO:()=>c,Wi:()=>l,YD:()=>u,wB:()=>g,zJ:()=>d});var s,r,n,i,o,d=((s={}).CREATOR="roles/tagPolicy.creator",s.MANAGER="roles/tagPolicy.manager",s.ASSIGNER="roles/tagPolicy.assigner",s),l=((r={}).CREATE="account/createTagPolicy",r.UPDATE="tagPolicy/update",r.DELETE="tagPolicy/delete",r.GET_RULESET="tagPolicy.ruleSet/get",r.UPDATE_RULESET="tagPolicy.ruleSet/update",r.ASSIGN="tagPolicy/assign",r.ACCOUNT_GET_RULESET="account.ruleSet/get",r.ACCOUNT_UPDATE_RULESET="account.ruleSet/update",r),c=((n={}).DEFAULT="DEFAULT",n.SYSTEM="SYSTEM",n),u=((i={}).DEFAULT="TAG_POLICY_NAMESPACE_DEFAULT",i.SYSTEM="TAG_POLICY_NAMESPACE_SYSTEM",i),g=((o={}).TAG_LEVEL="TAG_LEVEL",o.ACCOUNT_LEVEL="ACCOUNT_LEVEL",o)},434422:(e,a,t)=>{t.d(a,{s:()=>i});var s=t(441535),r=t(118389),n=t(707076);let i=()=>{let e=(0,s.W)("discover_page",!1);return(0,n.MH)()&&(0,n.Kt)()&&(0,r.P)()&&e}},513517:(e,a,t)=>{t.d(a,{A:()=>d});var s=t(610435),r=t(692738),n=t(375214);function i(e){return(0,s.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,s.FD)("g",{fill:"currentColor",clipPath:"url(#HistoryIcon_svg__a)",children:[(0,s.Y)("path",{d:"m3.507 7.73.963-.962 1.06 1.06-2.732 2.732L-.03 7.732l1.06-1.06.979.978a7 7 0 1 1 2.041 5.3l1.061-1.06a5.5 5.5 0 1 0-1.604-4.158"}),(0,s.Y)("path",{d:"M8.25 8V4h1.5v3.69l1.78 1.78-1.06 1.06-2-2A.75.75 0 0 1 8.25 8"})]}),(0,s.Y)("defs",{children:(0,s.Y)("clipPath",{children:(0,s.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let o=(0,r.forwardRef)((e,a)=>(0,s.Y)(n.I,{ref:a,...e,component:i}));o.displayName="HistoryIcon";let d=o},553935:(e,a,t)=>{t.d(a,{A:()=>d});var s=t(610435),r=t(692738),n=t(375214);function i(e){return(0,s.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,s.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.75 1a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5A.75.75 0 0 0 7 6.25v-4.5A.75.75 0 0 0 6.25 1zm.75 4.5v-3h3v3zM1.75 9a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-4.5A.75.75 0 0 0 6.25 9zm.75 4.5v-3h3v3zM9 1.75A.75.75 0 0 1 9.75 1h4.5a.75.75 0 0 1 .75.75v4.49a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 6.24zm1.5.75v2.99h3V2.5zM9.75 9a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75zm.75 4.5v-3h3v3z",clipRule:"evenodd"})})}let o=(0,r.forwardRef)((e,a)=>(0,s.Y)(n.I,{ref:a,...e,component:i}));o.displayName="GridIcon";let d=o},571739:(e,a,t)=>{t.d(a,{J:()=>n,z:()=>i});var s,r=t(696514),n=((s={}).DONE="done",s.CANCELLED="cancelled",s);let i=(0,r.fH)("Filebrowser::Clone")},583971:(e,a,t)=>{t.d(a,{Ri:()=>u});var s=t(733337),r=t(641760),n=t(278983);function i(e,a,t,s,r,n,i){try{var o=e[n](i),d=o.value}catch(e){t(e);return}o.done?a(d):Promise.resolve(d).then(s,r)}function o(e){return function(){var a=this,t=arguments;return new Promise(function(s,r){var n=e.apply(a,t);function o(e){i(n,s,r,o,d,"next",e)}function d(e){i(n,s,r,o,d,"throw",e)}o(void 0)})}}let d=[1,1,2,3,5,8,13,21],l=d.length;function c(e){return e instanceof r.XD}function u(e,a){return o(function*(e,a,t=1e3){let r=0,i=null;for(;r<l;)try{return yield(0,s.nr)(e,a)}catch(e){if(i=e,c(e)&&function(e){if(!c(e))return!1;return 429===e.response.status}(e))(0,n.y)("clientsideEvent",{eventType:"ApiFetchRetry",eventName:"RetryAttempt",retryCount:r}),yield function(e){return o(function*(e,a=1e3){let t=function(e,a=1e3){let t=Math.min(e,d.length-1);return d[t]*a}(e,a);return new Promise(e=>setTimeout(e,t))}).apply(this,arguments)}(r,t),r++;else break}throw c(i)&&r===l&&(0,n.y)("clientsideEvent",{eventType:"ApiFetchRetry",eventName:"MaxRetryAttemptReached",errorCode:i?.response?.status,retryCount:r}),i}).apply(this,arguments)}},586129:(e,a,t)=>{t.d(a,{j:()=>i});var s=t(542908),r=t(620275),n=t(441535);function i(){return!(0,s.B)()&&!(0,r.s4)()&&((0,n.W)("enable_lakeview_tags",!1)||(0,n.W)("databricks.fe.lakeview.enableLakeviewTags",!1))}},591014:(e,a,t)=>{t.d(a,{T:()=>s,o:()=>r});let s=(0,t(342411).YK)({objectName:{id:"ScbO6k",defaultMessage:"Visual data prep"},objectNameLowerCase:{id:"TNPvVr",defaultMessage:"visual data prep"},newObject:{id:"SyflR2",defaultMessage:"New {objectNameLowerCase}"},productName:{id:"/3qpv0",defaultMessage:"Visual data prep"},navName:{id:"v1Jhls",defaultMessage:"Visual data prep"},listingPageAllObjects:{id:"NXoIWm",defaultMessage:"All visual data prep files"},listingPageFilteredObjects:{id:"74qg2Z",defaultMessage:"Filtered visual data prep files"},listingPageCreateButton:{id:"rlAqh6",defaultMessage:"Create visual data prep"},aboutLabel:{id:"yMgFgb",defaultMessage:"About this {objectName}"},cannotCreate:{id:"4oBytw",defaultMessage:"Cannot create {objectName}"},failedToCreate:{id:"qjnvFq",defaultMessage:"Failed to create {objectName}. Please try again."},loadErrorTitle:{id:"GnFfAH",defaultMessage:"{objectName} failed to load"},loadErrorContent:{id:"X0C/bZ",defaultMessage:"An unexpected error occurred loading the {objectNameLowerCase}. Please wait and refresh the page, or click below to return to the home page."},notFoundTitle:{id:"Zo+5WN",defaultMessage:"{objectName} does not exist"},notFoundContent:{id:"p7eHr5",defaultMessage:"The specified {objectNameLowerCase} was not found. Double check the URL to make sure you're accessing a valid {objectNameLowerCase}."},warehouseRequired:{id:"qsfdG6",defaultMessage:"{objectName} can only be attached to Pro or Serverless SQL Warehouses"},defaultDesignerFileName:{id:"sn+HwE",defaultMessage:"{objectName} {dateString}"},featureNotAvailable:{id:"nPa++M",defaultMessage:"This feature is not available in your workspace."},featureNotAvailableMessage:{id:"Y5WcN3",defaultMessage:"{objectName} is not available in this workspace. Please contact your administrator to enable this feature."},workspaceEntitlementRequiredMessage:{id:"imulee",defaultMessage:"{objectName} requires Databricks workspace access. Your current entitlements do not include workspace access. Please contact your administrator."}}),r="Designer File"},622120:(e,a,t)=>{t.d(a,{DY:()=>A,H6:()=>g,YR:()=>f,mc:()=>m});var s=t(141078),r=t(173773);let n=(0,s.J1)`
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
`,i=(0,s.J1)`
  fragment SuggestedAssetWithThumbnail on UseractivityAsset {
    ...SuggestedAsset
    thumbnailUrl(uiMode: $uiMode)
  }
`,o=(0,s.J1)`
  fragment RelevanceReason on UseractivityRelevanceReason {
    timestamp
    type
    viewMetadata {
      viewFrequency
    }
  }
`,d=(0,s.J1)`
  fragment AssetRecommendation on UseractivityAssetRecommendation {
    asset {
      ...SuggestedAsset
    }
    relevanceReason {
      ...RelevanceReason
    }
  }
`,l=(0,s.J1)`
  fragment AssetRecommendationWithThumbnail on UseractivityAssetRecommendation {
    asset {
      ...SuggestedAssetWithThumbnail
    }
    relevanceReason {
      ...RelevanceReason
    }
  }
`,c=(0,s.J1)`
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
`,u=(0,s.J1)`
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
`,g=(0,s.J1)`
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
  ${n}
  ${i}
  ${o}
  ${l}
  ${u}
`,m=(0,s.J1)`
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
  ${n}
  ${o}
  ${d}
  ${c}
`,f=(0,s.J1)`
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
`,A=(0,s.J1)`
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
`},659573:(e,a,t)=>{t.d(a,{D:()=>n,v:()=>i});var s,r=t(696514),n=((s={}).DONE="done",s.CANCELLED="cancelled",s);let i=(0,r.fH)("Filebrowser::ShareLink")},715232:(e,a,t)=>{if(t.d(a,{D:()=>d,Q:()=>o}),13057==t.j)var s=t(278983);var r=t(524013),n=t(858383);let i=new Set(["/search-eval-new","/search-eval"]);function o({searchUi:e,eventName:a,tags:t}){(0,s.y)("searchEvent",{searchUi:e,eventName:a,...t})}let d=()=>{let{pathname:e}=(0,n.zy)(),a=(0,r.sH)();if(i.has(e))return()=>{};return({searchUi:e,eventName:t,tags:s})=>{let{searchId:r,...n}=s||{};return a({searchId:r},"searchEvent",{searchUi:e,eventName:t,...n})}}},733337:(e,a,t)=>{t.d(a,{Ky:()=>c,Ur:()=>u,nr:()=>l});var s=t(583971),r=t(641760),n=t(441535),i=t(19123);function o(e,a,t,s,r,n,i){try{var o=e[n](i),d=o.value}catch(e){t(e);return}o.done?a(d):Promise.resolve(d).then(s,r)}function d(e){return function(){var a=this,t=arguments;return new Promise(function(s,r){var n=e.apply(a,t);function i(e){o(n,s,r,i,d,"next",e)}function d(e){o(n,s,r,i,d,"throw",e)}i(void 0)})}}function l(e,a){return d(function*(){let t=yield(0,i.h)(e,a);if(!t.ok){let a;try{a=yield t.json()}catch(e){}throw new r.XD(e,t,a)}return yield t.json()})()}function c(e,a,t,r,i){return d(function*(){let o,d={response:[],next_page_token:void 0},l=(0,n.W)("databricks.fe.uc.defaultPaginationWindowSize",0),c=void 0!==r?r:l;do{let r=t?.useCentralPagination?{"pagination_context.max_results":c,...t?.queryParameters}:{[i??"max_results"]:c,...t?.queryParameters};o&&(t?.useCentralPagination?r["pagination_context.page_token"]=o:r.page_token=o);let n=new URLSearchParams(r),l=`${e}?${n}`;try{let e=yield(0,s.Ri)(l,t);if(!e)break;let r=yield a(e);r&&d.response.push(...r),t?.useCentralPagination?(d.next_page_token=e.pagination?.next_page_token,o=e.pagination?.next_page_token):(d.next_page_token=e.next_page_token,o=e.next_page_token)}catch(e){throw e}}while(o);return d.response})()}function u(e){return e instanceof r.XD&&404===e.response.status&&"METASTORE_DOES_NOT_EXIST"===e.response.data.error_code}},736996:(e,a,t)=>{if(t.d(a,{LZ:()=>n,V8:()=>o,X4:()=>f,ZQ:()=>d,Zu:()=>i,a2:()=>c,eh:()=>l,lf:()=>u,xs:()=>g,yt:()=>m}),13057==t.j)var s=t(497895);var r=t(993533);let n=8,i=12,o=24,d=60,l="system.Featured",c="TABLE_METRIC_VIEW";function u(e){let{theme:a}=(0,s.wn)();return e?0:2*a.spacing.lg}let g=[r.Clx.DASHBOARD_V3,r.Clx.DATA_ROOM,r.Clx.NOTEBOOK,r.Clx.QUERY,r.Clx.UC_TABLE,r.Clx.UC_MODEL,r.Clx.ENDPOINT_CENTRIC_ENDPOINT],m=[r.iId.ML_MODEL,r.iId.ML_ENDPOINT],f=[r.iId.ML_MODEL]},751097:(e,a,t)=>{t.d(a,{P:()=>n,x:()=>i});var s,r=t(696514),n=((s={}).DONE="done",s.CANCELLED="cancelled",s);let i=(0,r.fH)("Filebrowser::SelectLocation")},765288:(e,a,t)=>{t.d(a,{w:()=>i});var s=t(441535),r=t(586129),n=t(873092);function i(){return(0,n.w)()&&(0,r.j)()&&(0,s.W)("databricks.fe.lakeview.enableDashboardCertification",!1)}},820097:(e,a,t)=>{t.d(a,{H:()=>n,Z:()=>i});var s,r=t(696514),n=((s={}).DONE="done",s.CANCELLED="cancelled",s);let i=(0,r.fH)("Filebrowser::CloneRedashToLakeview")},823910:(e,a,t)=>{t.d(a,{S:()=>n,_:()=>r});var s=t(141078);let r=(0,s.J1)`
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
`;function n(e,a={}){return(0,s.IT)(r,{variables:e,...a})}},841710:(e,a,t)=>{t.d(a,{DV:()=>c,LC:()=>i,W9:()=>n,iq:()=>o,pR:()=>l});var s,r=t(993533),n=((s={}).DASHBOARD_LAKEVIEW="DASHBOARD_LAKEVIEW",s.NOTEBOOK="NOTEBOOK",s.QUERY="QUERY",s.UC_TABLE="UC_TABLE",s.DATA_ROOM="DATA_ROOM",s.UC_TABLE_METRIC_VIEW="UC_TABLE_METRIC_VIEW",s.UC_MODEL="UC_MODEL",s.ENDPOINT="ENDPOINT_CENTRIC_ENDPOINT",s.APP="APP",s);let i=Object.entries({DASHBOARD_LAKEVIEW:r.iId.DASHBOARD_LAKEVIEW,NOTEBOOK:r.iId.NOTEBOOK,QUERY:r.iId.QUERY,UC_TABLE:r.iId.TABLE,DATA_ROOM:r.iId.DATA_ROOM,UC_TABLE_METRIC_VIEW:r.iId.TABLE,UC_MODEL:r.iId.ML_MODEL,ENDPOINT_CENTRIC_ENDPOINT:r.iId.ML_ENDPOINT,APP:r.iId.APP}).reduce((e,[a,t])=>({...e,[t]:e[t]??a}),{}),o=e=>Object.keys(i).includes(e),d={[r.z$1.ALERT]:r.iId.ALERT,[r.z$1.DASHBOARD]:r.iId.DASHBOARD_REDASH,[r.z$1.DASHBOARD_V3]:r.iId.DASHBOARD_LAKEVIEW,[r.z$1.EXPERIMENT]:r.iId.MLFLOW_EXPERIMENT,[r.z$1.FILE]:r.iId.FILE,[r.z$1.FOLDER]:r.iId.FOLDER,[r.z$1.JOB]:r.iId.JOB,[r.z$1.LIBRARY]:r.iId.LIBRARY,[r.z$1.NOTEBOOK]:r.iId.NOTEBOOK,[r.z$1.PROJECT]:r.iId.PROJECT,[r.z$1.QUERY]:r.iId.QUERY,[r.z$1.UC_TABLE]:r.iId.TABLE,[r.z$1.DATA_ROOM]:r.iId.DATA_ROOM,[r.z$1.UC_MODEL]:r.iId.ML_MODEL,[r.z$1.ENDPOINT_CENTRIC_ENDPOINT]:r.iId.ML_ENDPOINT,[r.z$1.APP]:r.iId.APP},l=d,c=Object.entries(d).reduce((e,[a,t])=>({...e,[t]:a}),{})},848001:(e,a,t)=>{t.d(a,{K:()=>F,LI:()=>b,Lg:()=>_,kn:()=>N,lU:()=>C,sj:()=>P});var s=t(610435),r=t(615693),n=t(325382),i=t(397136),o=t(126001),d=t(323935),l=t(485065),c=t(452233),u=t(563521),g=t(1459),m=t(319241),f=t(753427),A=t(401160),h=t(161926),M=t(24027),E=t(617933),p=t(823825),R=t(873393),T=t(815367),v=t(350487),I=t(918071),D=t(946590),S=t(889187),y=t(483588),L=t(707076),O=t(771994);let N={[y.FKF.ALERT]:O.An.ALERT,[y.FKF.DASHBOARD]:O.An.DASHBOARD,[y.FKF.DASHBOARD_V3]:O.An.DASHBOARD,[y.FKF.FILE]:O.An.FILE,[y.FKF.FOLDER]:O.An.FOLDER,[y.FKF.JOB]:O.An.JOB,[y.FKF.PIPELINE]:O.An.PIPELINE,[y.FKF.LIBRARY]:O.An.LIBRARY,[y.FKF.MARKETPLACE_LISTING]:O.An.MARKETPLACE,[y.FKF.ENDPOINT_CENTRIC_ENDPOINT]:O.An.ENDPOINT,[y.FKF.UC_MODEL]:O.An.MODEL,[y.FKF.UC_FUNCTION]:O.An.FUNCTION,[y.FKF.EXPERIMENT]:O.An.EXPERIMENT,[y.FKF.NOTEBOOK]:O.An.NOTEBOOK,[y.FKF.PROJECT]:O.An.REPO,[y.FKF.QUERY]:O.An.QUERY,[y.FKF.UC_TABLE]:O.An.TABLE,[y.FKF.UC_VOLUME]:O.An.VOLUME,[y.FKF.DATA_ROOM]:O.An.DATA_ROOM},P={[O.If.ALERT]:O.An.ALERT,[O.If.ALERT_V2]:O.An.ALERT_V2,[O.If.APP]:O.An.APP,[O.If.DBSQL_DASHBOARD]:O.An.DASHBOARD,[O.If.FILE]:O.An.FILE,[O.If.FOLDER]:O.An.FOLDER,[O.If.JOB]:O.An.JOB,[O.If.PIPELINE]:O.An.PIPELINE,[O.If.LIBRARY]:O.An.LIBRARY,[O.If.MARKETPLACE]:O.An.MARKETPLACE,[O.If.ML_ENDPOINT]:O.An.ENDPOINT,[O.If.ML_MODEL]:O.An.MODEL,[O.If.FUNCTION]:O.An.FUNCTION,[O.If.MLFLOW_EXPERIMENT]:O.An.EXPERIMENT,[O.If.NOTEBOOK]:O.An.NOTEBOOK,[O.If.DESIGNER_FILE]:O.An.DESIGNER_FILE,[O.If.PARTNER]:O.An.PARTNER,[O.If.PROJECT]:O.An.REPO,[O.If.QUERY]:O.An.QUERY,[O.If.TABLE]:O.An.TABLE,[O.If.VOLUME]:O.An.VOLUME,[O.If.DATA_ROOM]:O.An.DATA_ROOM,[O.If.METRIC_VIEW]:O.An.METRIC_VIEW},w={[y.iId.ALERT]:O.An.ALERT,[y.iId.ALERT_V2]:O.An.ALERT_V2,[y.iId.DASHBOARD_LAKEVIEW]:O.An.DASHBOARD,[y.iId.DASHBOARD_REDASH]:O.An.DASHBOARD,[y.iId.FILE]:O.An.FILE,[y.iId.FOLDER]:O.An.FOLDER,[y.iId.JOB]:O.An.JOB,[y.iId.PIPELINE]:O.An.PIPELINE,[y.iId.LIBRARY]:O.An.LIBRARY,[y.iId.MARKETPLACE]:O.An.MARKETPLACE,[y.iId.ML_ENDPOINT]:O.An.ENDPOINT,[y.iId.ML_MODEL]:O.An.MODEL,[y.iId.FUNCTION]:O.An.FUNCTION,[y.iId.MLFLOW_EXPERIMENT]:O.An.EXPERIMENT,[y.iId.NOTEBOOK]:O.An.NOTEBOOK,[y.iId.DESIGNER_FILE]:O.An.DESIGNER_FILE,[y.iId.PARTNER]:O.An.PARTNER,[y.iId.PROJECT]:O.An.REPO,[y.iId.QUERY]:O.An.QUERY,[y.iId.TABLE]:O.An.TABLE,[y.iId.VOLUME]:O.An.VOLUME,[y.iId.DATA_ROOM]:O.An.DATA_ROOM,[y.iId.APP]:O.An.APP};function b(e,a){if(!e)return null;let t=e.toUpperCase();if(O.im[t])return O.im[t];if((a??_()).includes(t))return t;return null}let _=(e=!1)=>(0,L.bz)(!0,e).flatMap(e=>{let a=P[e];return a?[a]:[]}),C=e=>Object.values(y.iId).filter(a=>{if(a===y.iId.DASHBOARD_REDASH)return!1;let t=w[a];return void 0!==t&&e.includes(t)}),F=e=>{switch(e){case O.An.TABLE:return(0,s.Y)(r.A,{});case O.An.VOLUME:return(0,s.Y)(n.A,{});case O.An.NOTEBOOK:return(0,s.Y)(i.A,{});case O.An.DESIGNER_FILE:return(0,s.Y)(o.A,{});case O.An.JOB:return(0,s.Y)(d.A,{});case O.An.PIPELINE:return(0,s.Y)(l.A,{});case O.An.QUERY:return(0,s.Y)(c.A,{});case O.An.DASHBOARD:return(0,s.Y)(u.A,{});case O.An.FOLDER:return(0,s.Y)(g.A,{});case O.An.FILE:return(0,s.Y)(m.A,{});case O.An.REPO:return(0,s.Y)(f.A,{});case O.An.LIBRARY:return(0,s.Y)(A.A,{});case O.An.ALERT:case O.An.ALERT_V2:return(0,s.Y)(h.A,{});case O.An.APP:return(0,s.Y)(M.A,{});case O.An.EXPERIMENT:return(0,s.Y)(E.A,{});case O.An.MODEL:return(0,s.Y)(p.A,{});case O.An.ENDPOINT:return(0,s.Y)(R.A,{});case O.An.FUNCTION:return(0,s.Y)(T.A,{});case O.An.PARTNER:return(0,s.Y)(v.A,{});case O.An.MARKETPLACE:return(0,s.Y)(I.A,{});case O.An.DATA_ROOM:return(0,s.Y)(D.A,{});case O.An.METRIC_VIEW:return(0,s.Y)(S.A,{});default:return(0,s.Y)(m.A,{})}}},852683:(e,a,t)=>{t.d(a,{F:()=>r});let s=[["none",/^(?:[^\\"]|\\.)*$/],["simple",/^\s*"(?:[^\\"]|\\.)*"\s*$/],["complex",/^[^"]*(?:\s|^)(?:"(?:[^\\"]|\\.)*"(?:\s[^"]+)?(?:\s|$))+$/],["unpadded",/^[^"]*(?:"(?:[^\\"]|\\.)*"[^"]*)+$/]];function r(e){for(let[a,t]of s)if(null!==t.exec(e))return a;return"invalid"}},853762:(e,a,t)=>{t.d(a,{Z:()=>d,f:()=>l});var s=t(610435);t(692738);var r=t(79570),n=t(342411),i=t(834405);let o={noPrefix:e=>({intervals:[{seconds:31536e3,timeAgoMessage:a=>e.formatMessage({id:"NF6ePS",defaultMessage:"{count, plural, =1 {1 year} other {# years}} ago"},{count:a})},{seconds:2592e3,timeAgoMessage:a=>e.formatMessage({id:"N79Rdb",defaultMessage:"{count, plural, =1 {1 month} other {# months}} ago"},{count:a})},{seconds:86400,timeAgoMessage:a=>e.formatMessage({id:"XwD3hV",defaultMessage:"{count, plural, =1 {1 day} other {# days}} ago"},{count:a})},{seconds:3600,timeAgoMessage:a=>e.formatMessage({id:"i1Hj20",defaultMessage:"{count, plural, =1 {1 hour} other {# hours}} ago"},{count:a})},{seconds:60,timeAgoMessage:a=>e.formatMessage({id:"ZO8PZt",defaultMessage:"{count, plural, =1 {1 minute} other {# minutes}} ago"},{count:a})},{seconds:1,timeAgoMessage:a=>e.formatMessage({id:"gQB+Vs",defaultMessage:"{count, plural, =1 {1 second} other {# seconds}} ago"},{count:a})}],justNowMessage:e.formatMessage({id:"ZOsiNc",defaultMessage:"just now"})}),viewed:e=>({intervals:[{seconds:31536e3,timeAgoMessage:a=>e.formatMessage({id:"zu9xi3",defaultMessage:"Viewed {count, plural, =1 {1 year} other {# years}} ago"},{count:a})},{seconds:2592e3,timeAgoMessage:a=>e.formatMessage({id:"FOzgxE",defaultMessage:"Viewed {count, plural, =1 {1 month} other {# months}} ago"},{count:a})},{seconds:86400,timeAgoMessage:a=>e.formatMessage({id:"IwEVOL",defaultMessage:"Viewed {count, plural, =1 {1 day} other {# days}} ago"},{count:a})},{seconds:3600,timeAgoMessage:a=>e.formatMessage({id:"S9xuJ2",defaultMessage:"Viewed {count, plural, =1 {1 hour} other {# hours}} ago"},{count:a})},{seconds:60,timeAgoMessage:a=>e.formatMessage({id:"zcf18B",defaultMessage:"Viewed {count, plural, =1 {1 minute} other {# minutes}} ago"},{count:a})},{seconds:1,timeAgoMessage:a=>e.formatMessage({id:"McIjuI",defaultMessage:"Viewed {count, plural, =1 {1 second} other {# seconds}} ago"},{count:a})}],justNowMessage:e.formatMessage({id:"k0JWck",defaultMessage:"Viewed just now"})}),modified:e=>({intervals:[{seconds:31536e3,timeAgoMessage:a=>e.formatMessage({id:"iSKhoe",defaultMessage:"Modified {count, plural, =1 {1 year} other {# years}} ago"},{count:a})},{seconds:2592e3,timeAgoMessage:a=>e.formatMessage({id:"PbUKAJ",defaultMessage:"Modified {count, plural, =1 {1 month} other {# months}} ago"},{count:a})},{seconds:86400,timeAgoMessage:a=>e.formatMessage({id:"C7JdMh",defaultMessage:"Modified {count, plural, =1 {1 day} other {# days}} ago"},{count:a})},{seconds:3600,timeAgoMessage:a=>e.formatMessage({id:"7XNU4O",defaultMessage:"Modified {count, plural, =1 {1 hour} other {# hours}} ago"},{count:a})},{seconds:60,timeAgoMessage:a=>e.formatMessage({id:"EZ/c8g",defaultMessage:"Modified {count, plural, =1 {1 minute} other {# minutes}} ago"},{count:a})},{seconds:1,timeAgoMessage:a=>e.formatMessage({id:"NGVQnA",defaultMessage:"Modified {count, plural, =1 {1 second} other {# seconds}} ago"},{count:a})}],justNowMessage:e.formatMessage({id:"K7/6Pt",defaultMessage:"Modified just now"})})},d=({date:e,intl:a,tooltipFormatOptions:t,prefix:s="noPrefix"})=>{let r=Math.round((new Date().getTime()-e.getTime())/1e3),n="";try{n=(0,i.r6)(e,a,t)}catch(e){}let d=o[s](a);for(let e of d.intervals){let a=Math.floor(r/e.seconds);if(a>=1)return{displayText:e.timeAgoMessage(a),tooltipTitle:n}}return{displayText:d.justNowMessage,tooltipTitle:n}},l=({date:e,tooltipFormatOptions:a,prefix:t})=>{let{displayText:i,tooltipTitle:o}=d({date:e,intl:(0,n.tz)(),tooltipFormatOptions:a,prefix:t});return(0,s.Y)(r.m,{componentId:"web-shared.time-ago",content:o,children:(0,s.Y)("span",{children:i})})}},876070:(e,a,t)=>{t.d(a,{z:()=>r});var s,r=((s={}).SidebarV2="search-sidebar-v2",s.SidebarV1="search-sidebar-v1",s.Modal="search-modal",s.NavigationalSearchBar="navigational-search-bar",s.PopularAssetsTable="popular-assets-table",s.SearchPage="search-page",s)},921195:(e,a,t)=>{t.d(a,{Hn:()=>v,Kt:()=>A,MH:()=>M,MZ:()=>h,Ng:()=>T,Y8:()=>E,i3:()=>R,k_:()=>p});var s,r=t(610435),n=t(16778),i=t.n(n),o=t(246700),d=t(405706);if(13057==t.j)var l=t(79570);if(13057==t.j)var c=t(465946);var u=t(686560);if(13057==t.j)var g=t(337706);if(13057==t.j)var m=t(737358);var f=t(429072),A=((s={}).SERVING="SERVING",s.MANAGEMENT="MANAGEMENT",s);function h(e,a){let t=(0,u.d)("accountId",""),s=`accounts/${t}`;return!e&&a?`${s}/tagPolicies/${a}`:s}function M(e){return e===f.WO.SYSTEM}let E=(e,a,t)=>{if(M(a))return{icon:(0,r.Y)(o.A,{style:t??{marginRight:e.spacing.xs}}),color:"indigo"};return{icon:(0,r.Y)(d.A,{style:t??{marginRight:e.spacing.xs}}),color:"turquoise"}};function p(e,a,t){let{icon:s,color:n}=E(e,t,{marginRight:0}),o=t===f.WO.DEFAULT?a.formatMessage({id:"Q5nQMu",defaultMessage:"User-Defined"}):i()(t);if(!s)return(0,r.Y)(r.FK,{});return(0,r.Y)(l.m,{componentId:"discovery.data_explorer.governed_tag_list.tag_type_tooltip",content:o,children:(0,r.Y)(c.v,{componentId:"discovery.data_explorer.governed_tag_list.tag_type_icon",color:n,"aria-label":o,children:s})})}function R(e){switch(e){case f.YD.DEFAULT:return f.WO.DEFAULT;case f.YD.SYSTEM:return f.WO.SYSTEM;default:return}}function T(e){let a="/governance/governed-tags";return e?`${a}/${encodeURIComponent(e)}`:a}function v(){return(0,m.AO)({pathname:T(),search:(0,g.XZ)({tab:"automations"})})}},942678:(e,a,t)=>{t.d(a,{c:()=>s});let s=(0,t(342411).YK)({allDashboards:{id:"Ln3zDV",defaultMessage:"All dashboards"},filteredDashboards:{id:"Th0AVQ",defaultMessage:"Filtered dashboards"},allGenieSpaces:{id:"f8hbPo",defaultMessage:"All Genie spaces"},filteredGenieSpaces:{id:"wLHfP9",defaultMessage:"Filtered Genie spaces"},allModels:{id:"n44q5o",defaultMessage:"All models"},filteredModels:{id:"7tbkjY",defaultMessage:"Filtered models"}})},955897:(e,a,t)=>{t.d(a,{A:()=>d});var s=t(610435),r=t(692738),n=t(375214);function i(e){return(0,s.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,s.Y)("path",{fill:"currentColor",d:"M5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"}),(0,s.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.768 1.018a.75.75 0 0 0-.75.75v6.1c0 .199.079.39.22.53l6.884 6.885a.75.75 0 0 0 1.06 0l6.101-6.1a.75.75 0 0 0 0-1.061L8.4 1.237a.75.75 0 0 0-.53-.22zm6.884 12.674L2.518 7.557v-5.04h5.04l6.134 6.135z",clipRule:"evenodd"})]})}let o=(0,r.forwardRef)((e,a)=>(0,s.Y)(n.I,{ref:a,...e,component:i}));o.displayName="TagIcon";let d=o},967224:(e,a,t)=>{if(t.d(a,{O:()=>r}),13057==t.j)var s=t(441535);function r(){return(0,s.W)("databricks.fe.discover.areKnowledgePagesEnabled",!1)}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/48951.996e97b146.chunk.js.map