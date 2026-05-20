"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[44405,84885],{45458:(e,a,t)=>{t.d(a,{H:()=>s,b:()=>i});var r=t(692738);let s=(0,r.createContext)({});function i(){return(0,r.useContext)(s)}},75036:(e,a,t)=>{t.d(a,{e:()=>n,s:()=>i});var r,s=t(696514),i=((r={}).DONE="done",r.CANCELED="canceled",r);let n=(0,s.fH)("Filebrowser::SelectFolderNode")},97553:(e,a,t)=>{t.d(a,{$k:()=>d,Cm:()=>o,Gh:()=>u,K6:()=>l,NA:()=>c,rX:()=>n});var r=t(610435),s=t(956935);t(692738);var i=t(497895);let n={maxWidth:300},o={minWidth:150,maxWidth:300,maxHeight:400},l=33,d=(e,a)=>t=>{e.some(e=>e===t)?a(e.filter(e=>e!==t)):a(e.concat([t]).sort())},c={selectMulti:(0,s.AH)({".du-bois-light-select-selector":{"> .du-bois-light-select-selection-placeholder":{color:"#20272E!important"}},".du-bois-dark-select-selector":{"> .du-bois-dark-select-selection-placeholder":{color:"#ffffffd6!important"}},":not(.zzz).du-bois-light-select-open .du-bois-light-select-selection-placeholder":{visibility:"hidden"},":not(.zzz).du-bois-dark-select-open .du-bois-dark-select-selection-placeholder":{visibility:"hidden"},width:"200px"}),dialogComboboxOptionListWithMaxWidth:(0,s.AH)({'> div[aria-live="polite"]':{width:"100%"}}),dialogComboboxSectionHeaderWithEllipsis:(0,s.AH)({textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"})},u=({children:e})=>{let{theme:a}=(0,i.wn)();return(0,r.Y)("div",{"aria-live":"assertive",css:{color:a.colors.textSecondary,textAlign:"center",padding:"6px 32px 6px 12px",width:"100%",boxSizing:"border-box"},children:e})}},133290:(e,a,t)=>{t.d(a,{A:()=>s,x:()=>n});var r=t(225577);let s=(0,r.A)("div",{target:"evr0e70"})(({theme:e})=>({margin:"0 auto",maxWidth:e.responsive.breakpoints.xl,minWidth:e.responsive.breakpoints.xs,paddingBottom:0,width:"100%",overflow:"hidden",display:"flex",flexDirection:"column",flex:"1 1 0px"})),i=(0,r.A)("div",{target:"evr0e71"})(({theme:e})=>({[e.responsive.mediaQueries.md]:{marginInline:"calc(-50vw + 50%)",paddingInline:"calc(50vw - 50%)"}})),n=(0,r.A)(i,{target:"evr0e72"})(({backgroundColor:e,theme:a})=>({backgroundColor:e,[a.responsive.mediaQueries.md]:{marginInline:"calc(-50cqw + 50%)",paddingInline:"calc(50cqw - 50%)"}}))},144510:(e,a,t)=>{t.d(a,{DG:()=>h,Ps:()=>c,QG:()=>f,Y:()=>m,_c:()=>d,hs:()=>u});var r=t(787038),s=t(620275),i=t(686560),n=t(441535),o=t(986784),l=t(641760);function d(){return(0,i.d)("dbSqlEnabled_new",!1)&&(0,i.d)("userCanUseSqlService_new",!1)&&(0,n.W)("databricks.fe.centralizedLoginEnabled",!1)}function c(){if(!d()&&!(0,s.s4)())return!1;return(0,o.i)()}function u(){if(!d()&&!(0,s.s4)())return!1;return(0,r.q)()}function m(){return(0,l.ei)()&&!(0,s.s4)()}function h(){let e=(0,i.d)("dbSqlEnabled_new",!1)&&(0,i.d)("userCanUseSqlService_new",!1);return(!(0,n.W)("databricks.fe.centralizedLoginEnabled",!1)||!e||(0,i.d)("userCanUseDatabricksWorkspace_new",!1))&&!(0,s.s4)()}function f(){return(0,n.W)("designer",!1)&&(0,n.W)("databricks.fe.lakebuilder.enableDesignerFile",!1)&&(0,n.W)("databricks.lakebuilder.enableDesignerFileRecentRegistry",!1)&&(0,n.W)("databricks.lakebuilder.enableDesignerFileRecommendations",!1)}},173773:(e,a,t)=>{t.d(a,{Ej:()=>i,qc:()=>n,vO:()=>o,wt:()=>s});var r=t(141078);let s=(0,r.J1)`
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
`;let i=(0,r.J1)`
  fragment RecommendationRelevanceReason on RecommendationRelevanceReason {
    relevanceTime
    type
    viewMetadata {
      viewFrequency
    }
  }
`,n=(0,r.J1)`
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
`;let o=(0,r.J1)`
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
`},176304:(e,a,t)=>{t.d(a,{P0:()=>s,Vw:()=>i});var r=t(441535);function s(){return!!((0,r.W)("alerts_v2",null)??(0,r.W)("databricks.alerts.v2.preview.enabled",!1))}function i(){return s()&&!!((0,r.W)("alertv2_job_task",null)??((0,r.W)("databricks.fe.alerts.enableAlertV2TasksInJobs",!1)&&(0,r.W)("databricks.redashv2.enableAlertV2JobTask",!1)))}},194942:(e,a,t)=>{t.d(a,{_:()=>s});var r=t(441535);function s(){return(0,r.W)("databricks.fe.search.enableFeaturedTagInDiscover",!1)}},227583:(e,a,t)=>{t.d(a,{A:()=>l});var r=t(610435),s=t(692738),i=t(375214);function n(e){return(0,r.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,r.FD)("g",{fill:"currentColor",fillRule:"evenodd",clipPath:"url(#VisibleIcon_svg__a)",clipRule:"evenodd",children:[(0,r.Y)("path",{d:"M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6M6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"}),(0,r.Y)("path",{d:"M8 2A8.39 8.39 0 0 0 .028 7.777a.75.75 0 0 0 0 .466 8.389 8.389 0 0 0 15.944 0 .75.75 0 0 0 0-.466A8.39 8.39 0 0 0 8 2m0 10.52a6.89 6.89 0 0 1-6.465-4.51 6.888 6.888 0 0 1 12.93 0A6.89 6.89 0 0 1 8 12.52"})]}),(0,r.Y)("defs",{children:(0,r.Y)("clipPath",{children:(0,r.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let o=(0,s.forwardRef)((e,a)=>(0,r.Y)(i.I,{ref:a,...e,component:n}));o.displayName="VisibleIcon";let l=o},242995:(e,a,t)=>{t.d(a,{h:()=>n,j:()=>i});var r,s=t(696514),i=((r={}).DONE="done",r.CANCELED="canceled",r);let n=(0,s.fH)("Filebrowser::SaveAsFolderNode")},262989:(e,a,t)=>{t.d(a,{h:()=>o});var r=t(692738),s=t(53333),i=t(87008),n=t(87221);function o(e,a){let t=(0,n.ki)(),o=(0,i.e)(),l=(0,r.useCallback)(()=>{t({eventType:"component_view",eventEntity:{entityType:"component",entitySubType:e,entityId:a,entityViewId:o},eventPayload:{interactionSubject:!0}})},[a,e,t,o]);return(0,s.z)({onView:l,resetKey:`${e}:${a}`})}},272285:(e,a,t)=>{t.d(a,{$g:()=>p,DZ:()=>A,QJ:()=>S,Th:()=>v,Ul:()=>g});var r=t(141078);let s=(0,r.J1)`
  fragment DiscoverSearchResultTitleData on SearchmidtierSearchUnifiedResult {
    name
    updatedAt
  }
`,i=(0,r.J1)`
  fragment DiscoverSearchResultOwnerData on SearchmidtierSearchUnifiedResult {
    owner {
      id
      fullname
      email
    }
    ownerId
  }
`,n=(0,r.J1)`
  fragment DiscoverSearchResultDescriptionData on SearchmidtierSearchUnifiedResult {
    description
    ucEntityMetadata {
      comments
    }
    dataRoom {
      description
    }
  }
`,o=(0,r.J1)`
  fragment DiscoverSearchResultIconData on SearchmidtierSearchUnifiedResult {
    resultType
    browseOnly
    ucEntityMetadata {
      securableKind
    }
  }
`,l=(0,r.J1)`
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
`,d=(0,r.J1)`
  fragment DiscoverSearchResultTableLocationData on SearchmidtierSearchUnifiedResult {
    ucEntityMetadata {
      catalogName
      schemaName
    }
  }
`,c=(0,r.J1)`
  fragment DiscoverSearchResultWorkspaceFullPathData on SearchmidtierSearchUnifiedResult {
    treeNode {
      fullPath
      id
      parent {
        id
      }
    }
  }
`,u=(0,r.J1)`
  fragment DiscoverSearchResultUrlData on SearchmidtierSearchUnifiedResult {
    id
    resultType
    name
    ucEntityMetadata {
      catalogName
      schemaName
    }
  }
`,m=(0,r.J1)`
  fragment DiscoverSearchResultThumbnailData on SearchmidtierSearchUnifiedResult {
    id
    name
    resultType
    thumbnailUrl(uiMode: $uiMode)
  }
`,h=(0,r.J1)`
  fragment DiscoverSearchResultTagsData on SearchmidtierSearchUnifiedResult {
    tags {
      name
      value
    }
  }
`,f=(0,r.J1)`
  fragment DiscoverSearchResultFavoriteStatusData on SearchmidtierSearchUnifiedResult {
    userActivityInfo {
      assetType
      assetId
      isFavorite
    }
  }
`,g=(0,r.J1)`
  fragment DiscoverSearchResultAllAssetData on SearchmidtierSearchUnifiedResult {
    id
    ...DiscoverSearchResultTitleData
    ...DiscoverSearchResultDescriptionData
    ...DiscoverSearchResultTagsData
    ...DiscoverSearchResultIconData
    ...DiscoverSearchResultFavoriteStatusData
    ...DiscoverSearchResultUrlData
  }
  ${s}
  ${n}
  ${h}
  ${o}
  ${f}
  ${u}
`,p=(0,r.J1)`
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
  ${s}
  ${i}
  ${o}
  ${n}
  ${l}
  ${d}
  ${c}
  ${u}
  ${m}
  ${h}
  ${f}
`,S=(0,r.J1)`
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
  ${s}
  ${i}
  ${o}
  ${n}
  ${l}
  ${d}
  ${u}
  ${h}
  ${f}
`,v=(0,r.J1)`
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
`,A=(0,r.J1)`
  fragment DiscoverRecommendationAssetWithThumbnailData on RecommendationAssetRecommendation {
    ...DiscoverRecommendationAssetData
    asset {
      thumbnailUrl(uiMode: $uiMode)
    }
  }
  ${v}
`},301171:(e,a,t)=>{t.d(a,{v:()=>d});var r=t(610435);t(692738);var s=t(382908),i=t(342411),n=t(853762),o=t(771994),l=t(214060);let d={noMoreResultsPleaseNarrowSearch:(0,r.Y)(i.sA,{id:"EXxUmv",defaultMessage:"Not the results you expected? Try using different keywords, checking for typos, or adjusting filters."}),schemaFilterError:(0,r.Y)(i.sA,{id:"ioUsml",defaultMessage:"Error loading schemas"}),catalogFilterError:(0,r.Y)(i.sA,{id:"g9VKGo",defaultMessage:"Error loading catalogs"}),tagFilterError:(0,r.Y)(i.sA,{id:"BAVUZT",defaultMessage:"Error loading tags"}),typeForMoreUsers:e=>(0,r.Y)(i.sA,{id:"JAa9+n",defaultMessage:"The first {count} users are displayed. Search to narrow results.",values:{count:e}}),modalTitle:(0,r.Y)(i.sA,{id:"wALXhh",defaultMessage:"Search"}),searchBarSubmitButton:(0,r.Y)(i.sA,{id:"I2wVEx",defaultMessage:"Search"}),searchBarPlaceholder:(e,a)=>1===a.length?e.formatMessage({id:"InuxyD",defaultMessage:"Search for {fileType}"},{fileType:a[0]}):e.formatMessage({id:"eadQlj",defaultMessage:"Search for {firstFileType}, {secondFileType}, and more"},{firstFileType:a[0],secondFileType:a[1]}),searchMode:e=>e.formatMessage({id:"Gt2A4i",defaultMessage:"Search mode"}),semantic:e=>e.formatMessage({id:"wrfBCo",defaultMessage:"Semantic search"}),keyword:e=>e.formatMessage({id:"tZBt78",defaultMessage:"Keyword search"}),anytime:e=>e.formatMessage({id:"5my7Ui",defaultMessage:"Anytime"}),lastModified:e=>e.formatMessage({id:"CvWHjn",defaultMessage:"Last modified"}),last24hours:e=>e.formatMessage({id:"EA3yHn",defaultMessage:"Within 24 hours"}),last7days:e=>e.formatMessage({id:"fuQYvC",defaultMessage:"Within 7 days"}),last30days:e=>e.formatMessage({id:"Hb5Asz",defaultMessage:"Within 30 days"}),catalogLabel:e=>e.formatMessage({id:"LfFo2Z",defaultMessage:"Catalog"}),schemaLabel:e=>e.formatMessage({id:"MI82Ep",defaultMessage:"Schema"}),tagLabel:e=>e.formatMessage({id:"H1NmgQ",defaultMessage:"Tag"}),userLabel:(0,r.Y)(i.sA,{id:"XFerZS",defaultMessage:"Owner"}),partnerCategoryLabel:(0,r.Y)(i.sA,{id:"2k6uJ5",defaultMessage:"Categories"}),marketplaceCategoryLabel:(0,r.Y)(i.sA,{id:"f2vlXl",defaultMessage:"Categories"}),multipleSelectedUsersLabel:e=>(0,r.Y)(i.sA,{id:"EDAphJ",defaultMessage:"{count} users",values:{count:e}}),multipleSelectedCatalogsLabel:e=>(0,r.Y)(i.sA,{id:"sFdX5u",defaultMessage:"{count} catalogs",values:{count:e}}),multipleSelectedTagsLabel:e=>(0,r.Y)(i.sA,{id:"COBuf/",defaultMessage:"{count} tags",values:{count:e}}),multipleSelectedSchemasLabel:e=>(0,r.Y)(i.sA,{id:"N3koON",defaultMessage:"{count} schemas",values:{count:e}}),selected:(0,r.Y)(i.sA,{id:"oRK8zV",defaultMessage:"Selected"}),me:(0,r.Y)(i.sA,{id:"zv7JsD",defaultMessage:"Me"}),everyone:(0,r.Y)(i.sA,{id:"/Dq46W",defaultMessage:"Everyone"}),fileTypeLabel:(0,r.Y)(i.sA,{id:"aGb5NR",defaultMessage:"Type"}),multipleSelectedFileTypesLabel:e=>(0,r.Y)(i.sA,{id:"CfWj68",defaultMessage:"{count} types",values:{count:e}}),sort:e=>e.formatMessage({id:"zRqlun",defaultMessage:"Sort by"}),relevance:e=>e.formatMessage({id:"hiRkob",defaultMessage:"Most relevant"}),popularity:e=>e.formatMessage({id:"hyZsg/",defaultMessage:"Most popular"}),searchmidtierResultMessage:(e,a)=>{switch(a){case o.If.DOCUMENTATION:return e.formatMessage({id:"pu8E+G",defaultMessage:"Documents"});case o.If.PROJECT:return(0,l.Q)()?e.formatMessage({id:"m2VEDE",defaultMessage:"Git folders"}):e.formatMessage({id:"Vce5FG",defaultMessage:"Repos"});case o.If.FILE:return e.formatMessage({id:"P9WXfC",defaultMessage:"Files"});case o.If.FOLDER:return e.formatMessage({id:"ii5y22",defaultMessage:"Folders"});case o.If.LIBRARY:return e.formatMessage({id:"rVC3Xq",defaultMessage:"Libraries"});case o.If.TABLE:return e.formatMessage({id:"kNHLDl",defaultMessage:"Tables"});case o.If.METRIC_VIEW:return e.formatMessage({id:"fm8QIi",defaultMessage:"Metric views"});case o.If.VOLUME:return e.formatMessage({id:"AGr2pF",defaultMessage:"Volumes"});case o.If.FUNCTION:return e.formatMessage({id:"JhdnX6",defaultMessage:"Functions"});case o.If.NOTEBOOK:return e.formatMessage({id:"iIT2GO",defaultMessage:"Notebooks"});case o.If.MLFLOW_EXPERIMENT:return e.formatMessage({id:"PZyeta",defaultMessage:"Experiments"});case o.If.QUERY:return e.formatMessage({id:"r37QiN",defaultMessage:"Queries"});case o.If.ALERT:return e.formatMessage({id:"1PsxP7",defaultMessage:"Legacy Alerts"});case o.If.ALERT_V2:return e.formatMessage({id:"Fccfue",defaultMessage:"Alerts"});case o.If.PIPELINE:return e.formatMessage({id:"2JGQlt",defaultMessage:"Pipelines"});case o.If.DBSQL_DASHBOARD:return e.formatMessage({id:"InkkPP",defaultMessage:"Dashboards"});case o.If.JOB:return e.formatMessage({id:"gLNYHR",defaultMessage:"Jobs"});case o.If.ML_MODEL:return e.formatMessage({id:"6YNBeQ",defaultMessage:"Models"});case o.If.PARTNER:return e.formatMessage({id:"ai5xOS",defaultMessage:"Partners"});case o.If.MARKETPLACE:return e.formatMessage({id:"vrBCdZ",defaultMessage:"Marketplace"});case o.If.DATA_ROOM:return e.formatMessage({id:"GC9aHp",defaultMessage:"Genie spaces"});case o.If.ML_ENDPOINT:return e.formatMessage({id:"FJa/HC",defaultMessage:"Endpoints"});case o.If.CATALOG:case o.If.SCHEMA:case o.If.NAV_LINK:case o.If.APP:case o.If.DESIGNER_FILE:case o.If.LAKEWATCH_QUERY:return""}},clearNavigationalSearchInput:(0,r.Y)(i.sA,{id:"aqx4a0",defaultMessage:"Clear"}),resetFilters:(0,r.Y)(i.sA,{id:"xqIJoR",defaultMessage:"Reset filters"}),allTab:(0,r.Y)(i.sA,{id:"ZtTd77",defaultMessage:"All"}),viewAllResults:(0,r.Y)(i.sA,{id:"im2CfH",defaultMessage:"View all"}),viewAllResultsWithType:(e,a)=>e.formatMessage({id:"YUp8It",defaultMessage:"View all {fileType}"},{fileType:a}),defaultSearchError:(0,r.Y)(i.sA,{id:"LPHoZf",defaultMessage:"An error occurred while fetching search results. Please try again later."}),searchQueryTooLong:(0,r.Y)(i.sA,{id:"MZjOEX",defaultMessage:"The max allowed input length is {maxLength}. Please try again with a shortened search term.",values:{maxLength:100}}),noResults:(0,r.Y)(i.sA,{id:"69/sr2",defaultMessage:"No results matched your search."}),noQuery:(0,r.Y)(i.sA,{id:"Ds2vL2",defaultMessage:"Type in a query and press enter to search"}),lastModifiedTimeText:e=>(0,r.Y)(i.sA,{id:"CV9ZrO",defaultMessage:"modified {time}",values:{time:e}}),more:(0,r.Y)(i.sA,{id:"+PHNYN",defaultMessage:"More"}),unityCatalogUpgrade:(0,r.Y)(i.sA,{id:"A6Qlf7",defaultMessage:"Upgrade to Unity Catalog to search tables. Tables in the Hive Metastore aren't searchable."}),unityCatalogTables:(0,r.Y)(i.sA,{id:"oQI1QJ",defaultMessage:"Only showing results for tables in Unity Catalog. Tables in the Hive Metastore aren't searchable."}),ucModelNoResults:(0,r.Y)(i.sA,{id:"N1S9o+",defaultMessage:"No result matches were found for models in Unity Catalog."}),ucModelWorkspaceRedirect:e=>(0,r.Y)(i.sA,{id:"S1FQwL",defaultMessage:"To search for models in the current workspace, go to the <link>models page</link>.",values:{link:a=>(0,r.Y)(s.o.Link,{componentId:"codegen_webapp_js_search_v2search_i18n.tsx_424",href:e,children:a})}}),modelWorkspaceInfo:e=>(0,r.Y)(i.sA,{id:"1w6C0v",defaultMessage:"Only showing results for models in Unity Catalog. Search for models in the current workspace in the <link>workspace model registry</link>.",values:{link:a=>(0,r.Y)(s.o.Link,{componentId:"codegen_webapp_js_search_v2search_i18n.tsx_431",href:e,children:a})}}),jobId:e=>(0,r.Y)(i.sA,{id:"IcylbC",defaultMessage:"Job ID: {jobId}",values:{jobId:e}}),jobServicePrincipalOwner:(0,r.Y)(i.sA,{id:"9926x/",defaultMessage:"Service principal owner"}),lastJobRun:(0,r.Y)(i.sA,{id:"oPpdT/",defaultMessage:"Last run:"}),openFullPageSearch:(e,a)=>e.formatMessage({id:"K4NWC5",defaultMessage:"Show all results for ''{searchValue}'' in a full page"},{searchValue:a}),openEmptyFullPageSearch:e=>e.formatMessage({id:"kwrEEs",defaultMessage:"Open search in a full page"}),newTab:(0,r.Y)(i.sA,{id:"Mh6Fw/",defaultMessage:"Open in a new tab"}),enter:(0,r.Y)(i.sA,{id:"Rhf1Qy",defaultMessage:"Enter"}),openAdvancedSearch:(e,a)=>{if(a)return e.formatMessage({id:"B/IQP7",defaultMessage:"Show all results for ''{searchValue}''"},{searchValue:a});return e.formatMessage({id:"qay3aB",defaultMessage:"Open advanced search"})},itemViewedTime:(e,a=!1)=>{let t=new Date(e);return a?(0,r.Y)(i.sA,{id:"pE6SrH",defaultMessage:"Viewed {timeAgo}",values:{timeAgo:(0,r.Y)(n.f,{date:t})}}):(0,r.Y)(i.sA,{id:"87kVKV",defaultMessage:"viewed {timeAgo}",values:{timeAgo:(0,r.Y)(n.f,{date:t})}})},relatedContentSubtitle:e=>(0,r.Y)(i.sA,{id:"X/uBJA",defaultMessage:'related to "{pageName}"',values:{pageName:e}}),relatedContentLabel:e=>e.formatMessage({id:"0SQTVq",defaultMessage:"Suggested"}),recentsLabel:e=>e.formatMessage({id:"IIR4ht",defaultMessage:"Recents"}),productsAndPagesLabel:e=>e.formatMessage({id:"BpFmuq",defaultMessage:"Products and Pages"})}},311529:(e,a,t)=>{t.d(a,{F:()=>i,x:()=>n});var r,s=t(696514),i=((r={}).DONE="done",r);let n=(0,s.fH)("Filebrowser::Share")},322227:(e,a,t)=>{t.d(a,{$:()=>i,x:()=>n});var r,s=t(696514),i=((r={}).DONE="done",r.CANCELLED="cancelled",r);let n=(0,s.fH)("Filebrowser::Move")},381421:(e,a,t)=>{t.d(a,{Cn:()=>d,Ff:()=>m,UQ:()=>u,as:()=>f,kO:()=>l,q_:()=>c,uu:()=>h});var r=t(214369),s=t(771994),i=t(841710),n=t(736996),o=t(993533);let l=e=>{switch(e){case i.W9.DASHBOARD_LAKEVIEW:return s.An.DASHBOARD;case i.W9.NOTEBOOK:return s.An.NOTEBOOK;case i.W9.QUERY:return s.An.QUERY;case i.W9.UC_TABLE:return s.An.TABLE;case i.W9.DATA_ROOM:return s.An.DATA_ROOM;case i.W9.UC_TABLE_METRIC_VIEW:return s.An.METRIC_VIEW;case i.W9.UC_MODEL:return s.An.MODEL;case i.W9.ENDPOINT:return s.An.ENDPOINT;case i.W9.APP:return s.An.APP;default:return}},d=e=>{switch(e){case s.An.DASHBOARD:return i.W9.DASHBOARD_LAKEVIEW;case s.An.NOTEBOOK:return i.W9.NOTEBOOK;case s.An.QUERY:return i.W9.QUERY;case s.An.TABLE:return i.W9.UC_TABLE;case s.An.METRIC_VIEW:return i.W9.UC_TABLE_METRIC_VIEW;case s.An.DATA_ROOM:return i.W9.DATA_ROOM;case s.An.MODEL:return i.W9.UC_MODEL;case s.An.ENDPOINT:return i.W9.ENDPOINT;case s.An.APP:return i.W9.APP;default:return}},c=e=>{switch(e){case i.W9.UC_TABLE_METRIC_VIEW:case i.W9.UC_MODEL:return o.GLR.UPDATED_AT;default:return o.GLR.POPULARITY}},u=e=>e.map(l).filter(e=>void 0!==e),m=e=>{if(e.filters?.securableKinds?.includes(n.a2))return[i.W9.UC_TABLE_METRIC_VIEW];return e.filters?.assetTypes??[]},h=e=>{if(!e.filters)return{query:e.query};let a=((e,a)=>{let t=e.map(d).filter(e=>void 0!==e);if(e.includes(s.An.TABLE)&&a?.includes(n.a2))return t.push(i.W9.UC_TABLE_METRIC_VIEW),t.filter(e=>e!==i.W9.UC_TABLE);return t})(e.filters.searchTypeGroups??[],e.filters.securableKinds),t=0===a.length?void 0:[a[0]];return{query:e.query,filters:{assetTypes:t,ownerSlugs:e.filters.ownerSlugs,tagNames:e.filters.tags?.map(e=>e.value?`${e.name}${r.h}${e.value}`:e.name),domainNames:e.filters.domainNames,securableKinds:t?.includes(i.W9.UC_TABLE_METRIC_VIEW)?[n.a2]:void 0,lastEditedAfter:e.filters.lastEditedAfter,folderPath:e.filters.folderPath,catalogNames:e.filters.catalogNames,schemaNames:e.filters.schemaNames,certificationStatuses:e.filters.certificationStatuses,discoverFeatured:e.filters.discoverFeatured}}},f=e=>{if(!e.filters)return{query:e.query};let a=u(e.filters.assetTypes??[]);return{query:e.query,filters:{searchTypeGroups:a.length>0?a:void 0,ownerSlugs:e.filters.ownerSlugs,tags:e.filters.tagNames?.map(e=>{let[a,t]=e.split(r.h,2);return t?{name:a,value:t}:{name:a}}),domainNames:e.filters.domainNames,securableKinds:e.filters.securableKinds,lastEditedAfter:e.filters.lastEditedAfter,folderPath:e.filters.folderPath,catalogNames:e.filters.catalogNames,schemaNames:e.filters.schemaNames,certificationStatuses:e.filters.certificationStatuses,discoverFeatured:e.filters.discoverFeatured}}}},434422:(e,a,t)=>{t.d(a,{s:()=>n});var r=t(441535),s=t(118389),i=t(707076);let n=()=>{let e=(0,r.W)("discover_page",!1);return(0,i.MH)()&&(0,i.Kt)()&&(0,s.P)()&&e}},454157:(e,a,t)=>{t.d(a,{Cx:()=>d,E:()=>f,Qn:()=>h,SE:()=>l,mw:()=>c,o5:()=>m,qt:()=>g,uM:()=>p,us:()=>o});var r=t(771994),s=t(852683),i=t(548857),n=t(583489);let o=e=>{switch(e){case r.ed.PAST_DAY:return n.R4;case r.ed.PAST_7_DAYS:return n.Om;case r.ed.PAST_30_DAYS:return n.O5;default:return 0}},l=e=>{switch(e){case n.R4:return r.ed.PAST_DAY;case n.Om:return r.ed.PAST_7_DAYS;case n.O5:return r.ed.PAST_30_DAYS;default:return}},d=({query:e,filters:a,sortOrder:t})=>({searchEntityTypes:a?.searchTypeGroups?.join(",")||"",searchQuery:e||"",searchQueryLength:e?.length||0,searchSubmitFilterCatalogCount:a?.catalogNames?.length||0,searchSubmitFilterDateModified:a?.lastEditedAfter?o(a.lastEditedAfter):void 0,searchSubmitFilterMarketplaceCategoryCount:a?.categories?.length||0,searchSubmitFilterPartnerCategoryCount:a?.categories?.length||0,searchSubmitFilterSchemaCount:a?.schemaNames?.length||0,searchSubmitFilterTagCount:a?.tags?.length||0,searchSubmitFilterUserCount:a?.ownerSlugs?.length||0,searchSubmitQueryQuoteStyle:(0,s.F)(e||""),searchSubmitSortField:t?.criteria??void 0,searchSubmitFilterLocationDepth:a?.folderPath?a.folderPath.split("/").filter(e=>e.length>0).length:void 0,searchSubmitFilterTrashed:!!a?.trashed}),c=e=>d((0,i.B_)(e)),u=e=>Object.values(e.filters??{}).some(e=>{if("boolean"==typeof e)return!0;return e?.length>0}),m=e=>!e.query&&!u(e),h=e=>{if(e.query)return!1;let{filters:a}=e;if(!a)return!1;let{domainNames:t,...r}=a;if(!t||1!==t.length)return!1;if(u({filters:r})){let{discoverFeatured:e,searchTypeGroups:a,...t}=r;return!0===e&&a?.length===1&&!u({filters:t})}return!0},f=e=>{if(e.query)return!1;let{filters:a}=e;if(!a)return!1;let{searchTypeGroups:t,discoverFeatured:r,...s}=a;if(!t||1!==t.length||!0!==r)return!1;return!u({filters:s})},g=({searchQueryObject:e,supportedFilters:a})=>{if(!e.filters)return 0;return Object.entries(e.filters).reduce((e,[t,r])=>{if(a.includes(t)){if(Array.isArray(r))return e+r.length;if(null!=r)return e+1}return e},0)},p=({searchQueryObject:e,supportedFilters:a})=>g({searchQueryObject:e,supportedFilters:a})},463909:(e,a,t)=>{t.d(a,{X:()=>d});var r=t(610435),s=t(692738),i=t(641163);function n(e,a,t,r,s,i,n){try{var o=e[i](n),l=o.value}catch(e){t(e);return}o.done?a(l):Promise.resolve(l).then(r,s)}function o(e){return function(){var a=this,t=arguments;return new Promise(function(r,s){var i=e.apply(a,t);function o(e){n(i,r,s,o,l,"next",e)}function l(e){n(i,r,s,o,l,"throw",e)}o(void 0)})}}let l=(0,s.forwardRef)(({useHookImpl:e},a)=>{let[t,r]=e();return(0,s.useImperativeHandle)(a,()=>({call:(...e)=>r(...e)}),[r]),t??null});function d(e){let a,t;return function(){let[,n]=(0,s.useState)(0),[d,c]=(0,s.useState)(!1),u=(0,s.useRef)();u.current=t;let[m,h]=(0,i.D)(()=>{let e;return[new Promise(a=>{e=a}),e]}),f=(0,s.useRef)(null),g=(0,s.useCallback)(e=>{f.current=e,h()},[h]),p=(0,s.useCallback)((...r)=>o(function*(){if(void 0===t)try{c(!0),yield o(function*(){if(void 0===t){let r;(void 0===a||"error"===a.status)&&(a=r={status:"pending",promise:e().then(e=>(r.status="success",e),e=>{throw r.status="error",e})}),t=yield a.promise}if("function"!=typeof t)throw Error("Lazy modal hook is not a function. Make sure you are importing the correct module and referencing the correct export.")})()}finally{c(!1)}return void 0===u.current&&n(e=>e+1),yield m,f.current?.call(...r)})(),[m]);return[t?(0,r.Y)(l,{useHookImpl:t,ref:g}):null,p,d]}}},471186:(e,a,t)=>{t.d(a,{x:()=>r});let r=t(126001).A},480244:(e,a,t)=>{t.d(a,{b:()=>h});var r=t(692738),s=t(136079),i=t(866440),n=t(907600),o=t(848001),l=t(565974),d=t(45458),c=t(454157),u=t(996021);function m(e,a,t,r,s,i,n){try{var o=e[i](n),l=o.value}catch(e){t(e);return}o.done?a(l):Promise.resolve(l).then(r,s)}let h=()=>{let e=(0,n.p)(),a=(0,l.Lr)(),t=(0,s.GF)(),h=(0,i.Q)(),{dashboardPublishState:f,statusState:g}=(0,d.b)();return(0,r.useCallback)(r=>{var s;return(s=function*(){let{filters:s}=r,{ownerSlugs:i,folderPath:n,searchTypeGroups:l,lastEditedAfter:d,catalogNames:m,categories:p,providerIds:S,schemaNames:v,tags:A,certificationStatuses:R,domainNames:y,trashed:b,isFavorite:T,securableKinds:D,isSharedWithMe:M,ids:I,fullNames:E,statusState:O}=s??{},w=l?.length?l:(0,o.Lg)(t),C=d?(Date.now()-(0,c.us)(d)).toString():void 0,N=i?Promise.all(i.map(e)).then(e=>e.map(e=>e??"INVALID_ID")):Promise.resolve(void 0),$=n?a(n).then(e=>e??"INVALID_ID"):Promise.resolve(void 0),P=h(y),[L,U,F]=yield Promise.all([N,$,P]),_=(0,u.am)(R),x=(0,u.jb)(A?.map(e=>({tagName:e.name,tagValue:e.value}))??[]),k=(0,u.RW)(y?[...y,...F]:void 0),Y=(0,u.MR)((0,u.MR)(_,x),k);return{resultTypes:(0,o.lU)(w),catalogNames:m,categories:p,ownerIds:L,providerIds:S,schemaNames:v,lastEditedAfter:C,ancestorTreeId:U,isDeleted:b,isFavorite:T??void 0,isSharedWithMe:M??void 0,statusState:(O??g)||void 0,securableKinds:D,ids:I,fullNames:E,...Y&&{isMetadataSearch:!0,tagsFilter:Y},...f&&{dashboardPublishState:f}}},function(){var e=this,a=arguments;return new Promise(function(t,r){var i=s.apply(e,a);function n(e){m(i,t,r,n,o,"next",e)}function o(e){m(i,t,r,n,o,"throw",e)}n(void 0)})})()},[e,a,t,h,g,f])}},508634:(e,a,t)=>{t.d(a,{d:()=>c});var r=t(692738),s=t(771994),i=t(480244),n=t(45458),o=t(841710),l=t(381421);function d(e,a,t,r,s,i,n){try{var o=e[i](n),l=o.value}catch(e){t(e);return}o.done?a(l):Promise.resolve(l).then(r,s)}function c(){let e=(0,i.b)(),{dashboardPublishState:a,statusState:t}=(0,n.b)();return(0,r.useCallback)(r=>{var i;return(i=function*(){let{filters:i}=r,n=i?.assetTypes?(0,l.UQ)(i.assetTypes):void 0;n?.includes(s.An.METRIC_VIEW)&&(n=n.map(e=>e===s.An.METRIC_VIEW?s.An.TABLE:e));let d=yield e({filters:{searchTypeGroups:n,ownerSlugs:i?.ownerSlugs,securableKinds:i?.securableKinds,lastEditedAfter:i?.lastEditedAfter,folderPath:i?.folderPath,catalogNames:i?.catalogNames,schemaNames:i?.schemaNames,ids:i?.ids,fullNames:i?.fullNames,tags:i?.tagNames?.map(e=>{let a=e.split("=");return a.length>1?{name:a[0],value:a[1]}:{name:a[0]}})??[],domainNames:i?.domainNames,certificationStatuses:i?.certificationStatuses}}),c=d.statusState??t;return{ownerIds:d.ownerIds,resultTypes:d.resultTypes?.filter(e=>(0,o.iq)(e)),...d.tagsFilter&&{isMetadataSearch:!0},tagsFilter:d.tagsFilter,securableKinds:d.securableKinds,lastEditedAfter:d.lastEditedAfter,ancestorTreeId:d.ancestorTreeId,catalogNames:d.catalogNames,schemaNames:d.schemaNames,ids:d.ids,fullNames:d.fullNames,...c&&{statusState:c},...a&&{dashboardPublishState:a}}},function(){var e=this,a=arguments;return new Promise(function(t,r){var s=i.apply(e,a);function n(e){d(s,t,r,n,o,"next",e)}function o(e){d(s,t,r,n,o,"throw",e)}n(void 0)})})()},[e,t,a])}},513517:(e,a,t)=>{t.d(a,{A:()=>l});var r=t(610435),s=t(692738),i=t(375214);function n(e){return(0,r.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,r.FD)("g",{fill:"currentColor",clipPath:"url(#HistoryIcon_svg__a)",children:[(0,r.Y)("path",{d:"m3.507 7.73.963-.962 1.06 1.06-2.732 2.732L-.03 7.732l1.06-1.06.979.978a7 7 0 1 1 2.041 5.3l1.061-1.06a5.5 5.5 0 1 0-1.604-4.158"}),(0,r.Y)("path",{d:"M8.25 8V4h1.5v3.69l1.78 1.78-1.06 1.06-2-2A.75.75 0 0 1 8.25 8"})]}),(0,r.Y)("defs",{children:(0,r.Y)("clipPath",{children:(0,r.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let o=(0,s.forwardRef)((e,a)=>(0,r.Y)(i.I,{ref:a,...e,component:n}));o.displayName="HistoryIcon";let l=o},553935:(e,a,t)=>{t.d(a,{A:()=>l});var r=t(610435),s=t(692738),i=t(375214);function n(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.75 1a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5A.75.75 0 0 0 7 6.25v-4.5A.75.75 0 0 0 6.25 1zm.75 4.5v-3h3v3zM1.75 9a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-4.5A.75.75 0 0 0 6.25 9zm.75 4.5v-3h3v3zM9 1.75A.75.75 0 0 1 9.75 1h4.5a.75.75 0 0 1 .75.75v4.49a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 6.24zm1.5.75v2.99h3V2.5zM9.75 9a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75zm.75 4.5v-3h3v3z",clipRule:"evenodd"})})}let o=(0,s.forwardRef)((e,a)=>(0,r.Y)(i.I,{ref:a,...e,component:n}));o.displayName="GridIcon";let l=o},565974:(e,a,t)=>{t.d(a,{Lr:()=>c,hu:()=>u,lZ:()=>m});var r=t(692738),s=t(141078);function i(e,a,t,r,s,i,n){try{var o=e[i](n),l=o.value}catch(e){t(e);return}o.done?a(l):Promise.resolve(l).then(r,s)}function n(e){return function(){var a=this,t=arguments;return new Promise(function(r,s){var n=e.apply(a,t);function o(e){i(n,r,s,o,l,"next",e)}function l(e){i(n,r,s,o,l,"throw",e)}o(void 0)})}}let o=(0,s.J1)`
  query SearchPageGetTreeIdByPath($fullPath: String!) @component(name: "Search.WorkspaceSearch") {
    treeNodeByPath(fullPath: $fullPath) {
      id
    }
  }
`,l=(0,s.J1)`
  query SearchPageGetPathByTreeId($id: ID!) @component(name: "Search.WorkspaceSearch") {
    treeNode(id: $id) {
      id
      fullPath
    }
  }
`,d=e=>{if(e?.treeNodeByPath&&["Directory","Repo"].includes(e.treeNodeByPath.__typename))return e.treeNodeByPath.id},c=()=>{let e=(0,s.mK)();return(0,r.useCallback)(a=>n(function*(){let{data:t}=yield e.query({query:o,variables:{fullPath:a}});return d(t)})(),[e])},u=e=>{let{data:a,loading:t}=(0,s.IT)(o,{variables:{fullPath:e||""},skip:!e});return{id:d(a),loading:t}},m=()=>{let e=(0,s.mK)();return(0,r.useCallback)(a=>n(function*(){let{data:t}=yield e.query({query:l,variables:{id:a}});return t.treeNode?.fullPath})(),[e])}},571739:(e,a,t)=>{t.d(a,{J:()=>i,z:()=>n});var r,s=t(696514),i=((r={}).DONE="done",r.CANCELLED="cancelled",r);let n=(0,s.fH)("Filebrowser::Clone")},572766:(e,a,t)=>{t.r(a),t.d(a,{AccountDiscoverSearchPage:()=>b});var r=t(610435),s=t(446835),i=t.n(s),n=t(692738),o=t(497895),l=t(342411),d=t(136079),c=t(801686),u=t(863708),m=t(22191),h=t(726977),f=t(134256),g=t(771994),p=t(736886),S=t(190903),v=t(381421),A=t(722481),R=t(731023),y=t(417958);function b(){let{theme:e}=(0,o.wn)();return(0,r.Y)(u.JR,{esComponent:m.Es.SearchUI,errorBoundaryId:h.s.GlobalSearchPage,fallback:(0,r.Y)("div",{css:{margin:e.spacing.lg,height:"100%"},children:(0,r.Y)(f.T,{showTryAgainButton:!1,message:(0,r.Y)(l.sA,{id:"bEE8YS",defaultMessage:"Error showing search results"}),description:(0,r.Y)(l.sA,{id:"AhJXQI",defaultMessage:"Try again later"})})}),children:(0,r.Y)(A.S,{children:(0,r.Y)(p.P,{children:(0,r.Y)(c.ap,{children:(0,r.Y)(I,{})})})})})}let T=[g.An.DASHBOARD,g.An.DATA_ROOM],D={[g.An.DASHBOARD]:[y.TF.LIST,y.TF.GRID],[g.An.DATA_ROOM]:[y.TF.LIST,y.TF.GRID],[g.An.APP]:[y.TF.LIST,y.TF.GRID]},M=["name","modified_date","owner","workspace"];function I(){let{theme:e}=(0,o.wn)(),a=(0,d.bE)(e,"account"),t=(0,n.useMemo)(()=>(0,d.DN)()?[...T,g.An.APP]:T,[]),s=(0,n.useMemo)(()=>i()([g.XV.TYPE,(0,d.ku)()?g.XV.FAVORITED:void 0,(0,d.jC)()?g.XV.CERTIFICATION_STATUS:void 0,g.XV.OWNER,g.XV.DISCOVER_FEATURED,(0,d.Bx)()?g.XV.DOMAIN:void 0,g.XV.SORT,g.XV.MODIFIED,(0,d.DN)()?g.XV.INCLUDE_UNAVAILABLE:void 0]),[]),l=(0,n.useCallback)(e=>(function({collection:e,inEditSectionsMode:a},t){if(e.collectionType===S.XN.Domains||e.collectionType===S.XN.SubDomains||e.collectionType===S.XN.DomainAssets)return!0;if(e.collectionType===S.XN.Search){let r=(0,v.kO)(e.resultType);if(!r||!t.includes(r))return!1;return!e.hidden&&!a}return!1})(e,t),[t]);return(0,r.Y)(R.s,{backgroundColor:a,defaultSearchTypeGroups:t,allSupportedSearchControlKeys:s,shouldDisplayCollection:l,domainAssetsLockedColumns:M,storageKeyPrefix:"account-search-page",filterPanelSource:"account",resultViewsByTypeGroup:D,domainsViewAllUrl:"/one/discover/domains",source:"account"})}},583489:(e,a,t)=>{t.d(a,{O5:()=>g,Om:()=>f,R4:()=>h,ST:()=>m});var r=t(610435);t(692738);var s=t(236574),i=t(932284),n=t(382831),o=t(999785),l=t(697632),d=t(342411),c=t(97553),u=t(301171);let m=({dateModifiedMsAgo:e,updateDateModifiedMsAgo:a})=>{let t=(0,d.tz)(),m=p(t),h=m.find(a=>a.value===e),f=h&&h.value>0?[h.label]:[];return(0,r.FD)(s.A,{componentId:"codegen_webapp_js_search_v2search_search-modal_filters_lastmodifiedselect.tsx_28",label:u.v.lastModified(t),value:f,children:[(0,r.Y)(i.g,{"data-testid":"lastmodified_select",allowClear:!1,...c.rX}),(0,r.Y)(n.d,{...c.Cm,children:(0,r.Y)(o.H,{children:m.map(e=>(0,r.Y)(l.cr,{value:e.label,onChange:()=>a(e.value),checked:h&&e.value===h.value},e.value))})})]})},h=864e5,f=6048e5,g=2592e6,p=e=>[{label:u.v.anytime(e),value:0},{label:u.v.last24hours(e),value:h},{label:u.v.last7days(e),value:f},{label:u.v.last30days(e),value:g}]},591014:(e,a,t)=>{t.d(a,{T:()=>r,o:()=>s});let r=(0,t(342411).YK)({objectName:{id:"ScbO6k",defaultMessage:"Visual data prep"},objectNameLowerCase:{id:"TNPvVr",defaultMessage:"visual data prep"},newObject:{id:"SyflR2",defaultMessage:"New {objectNameLowerCase}"},productName:{id:"/3qpv0",defaultMessage:"Visual data prep"},navName:{id:"v1Jhls",defaultMessage:"Visual data prep"},listingPageAllObjects:{id:"NXoIWm",defaultMessage:"All visual data prep files"},listingPageFilteredObjects:{id:"74qg2Z",defaultMessage:"Filtered visual data prep files"},listingPageCreateButton:{id:"rlAqh6",defaultMessage:"Create visual data prep"},aboutLabel:{id:"yMgFgb",defaultMessage:"About this {objectName}"},cannotCreate:{id:"4oBytw",defaultMessage:"Cannot create {objectName}"},failedToCreate:{id:"qjnvFq",defaultMessage:"Failed to create {objectName}. Please try again."},loadErrorTitle:{id:"GnFfAH",defaultMessage:"{objectName} failed to load"},loadErrorContent:{id:"X0C/bZ",defaultMessage:"An unexpected error occurred loading the {objectNameLowerCase}. Please wait and refresh the page, or click below to return to the home page."},notFoundTitle:{id:"Zo+5WN",defaultMessage:"{objectName} does not exist"},notFoundContent:{id:"p7eHr5",defaultMessage:"The specified {objectNameLowerCase} was not found. Double check the URL to make sure you're accessing a valid {objectNameLowerCase}."},warehouseRequired:{id:"qsfdG6",defaultMessage:"{objectName} can only be attached to Pro or Serverless SQL Warehouses"},defaultDesignerFileName:{id:"sn+HwE",defaultMessage:"{objectName} {dateString}"},featureNotAvailable:{id:"nPa++M",defaultMessage:"This feature is not available in your workspace."},featureNotAvailableMessage:{id:"Y5WcN3",defaultMessage:"{objectName} is not available in this workspace. Please contact your administrator to enable this feature."},workspaceEntitlementRequiredMessage:{id:"imulee",defaultMessage:"{objectName} requires Databricks workspace access. Your current entitlements do not include workspace access. Please contact your administrator."}}),s="Designer File"},622120:(e,a,t)=>{t.d(a,{DY:()=>g,H6:()=>m,YR:()=>f,mc:()=>h});var r=t(141078),s=t(173773);let i=(0,r.J1)`
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
`,n=(0,r.J1)`
  fragment SuggestedAssetWithThumbnail on UseractivityAsset {
    ...SuggestedAsset
    thumbnailUrl(uiMode: $uiMode)
  }
`,o=(0,r.J1)`
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
`,d=(0,r.J1)`
  fragment AssetRecommendationWithThumbnail on UseractivityAssetRecommendation {
    asset {
      ...SuggestedAssetWithThumbnail
    }
    relevanceReason {
      ...RelevanceReason
    }
  }
`,c=(0,r.J1)`
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
  ${i}
  ${n}
  ${o}
  ${d}
  ${u}
`,h=(0,r.J1)`
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
  ${o}
  ${l}
  ${c}
`,f=(0,r.J1)`
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
  ${s.wt}
  ${s.Ej}
  ${s.qc}
  ${s.vO}
`},659573:(e,a,t)=>{t.d(a,{D:()=>i,v:()=>n});var r,s=t(696514),i=((r={}).DONE="done",r.CANCELLED="cancelled",r);let n=(0,s.fH)("Filebrowser::ShareLink")},667048:(e,a,t)=>{t.d(a,{AV:()=>d,BC:()=>m,KF:()=>n,Lh:()=>o,Z6:()=>u,ao:()=>l,cz:()=>c,nQ:()=>h});var r=t(483588),s=t(141078),i=t(919681);let n=["name"],o=(0,s.J1)`
  query SearchPageSearch(
    $pageToken: String
    $query: SearchmidtierSearchUnifiedQueryInput
    $filters: SearchmidtierSearchUnifiedFiltersInput
    $exclusionFilters: SearchmidtierSearchUnifiedFiltersInput
    $sortOrder: SearchmidtierSearchUnifiedSortOrderInput
    $pageSize: Int
    $searchId: String
    $context: SearchmidtierSearchUnifiedContextInput
    $uiMode: ThumbnailsThumbnailUiMode
    $featureFlags: SearchmidtierSearchUnifiedFeatureFlagsInput
  ) @component(name: "DBSQLX.SearchUI") {
    searchmidtierSearchUnifiedSearch(
      input: {
        pageToken: $pageToken
        query: $query
        filters: $filters
        exclusionFilters: $exclusionFilters
        sortOrder: $sortOrder
        pageSize: $pageSize
        searchId: $searchId
        context: $context
        sourceInfo: { sourceId: FULL_PAGE_SEARCH }
        featureFlags: $featureFlags
      }
    ) {
      apiError {
        message
        code
      }
      nextPageToken
      results {
        ...SearchResultDataWebapp
      }
      partialFailures {
        failureType
      }
    }
  }
  ${i.zB}
`,l=(0,s.J1)`
  query DashboardListingPageSearch(
    $pageToken: String
    $query: SearchmidtierSearchUnifiedQueryInput
    $filters: SearchmidtierSearchUnifiedFiltersInput
    $exclusionFilters: SearchmidtierSearchUnifiedFiltersInput
    $sortOrder: SearchmidtierSearchUnifiedSortOrderInput
    $pageSize: Int
    $searchId: String
    $context: SearchmidtierSearchUnifiedContextInput
    $uiMode: ThumbnailsThumbnailUiMode
    $featureFlags: SearchmidtierSearchUnifiedFeatureFlagsInput
    $sourceInfo: LoggingSearchmidtierSourceInfoInput!
  ) @component(name: "DBSQLX.SearchUI") {
    searchmidtierSearchUnifiedSearch(
      input: {
        pageToken: $pageToken
        query: $query
        filters: $filters
        exclusionFilters: $exclusionFilters
        sortOrder: $sortOrder
        pageSize: $pageSize
        searchId: $searchId
        context: $context
        sourceInfo: $sourceInfo
        featureFlags: $featureFlags
      }
    ) {
      apiError {
        message
        code
      }
      nextPageToken
      results {
        ...SearchResultDataWebapp
      }
      partialFailures {
        failureType
      }
    }
  }
  ${i.zB}
`,d=(0,s.J1)`
  query GenericUlpSearch(
    $pageToken: String
    $query: SearchmidtierSearchUnifiedQueryInput
    $filters: SearchmidtierSearchUnifiedFiltersInput
    $exclusionFilters: SearchmidtierSearchUnifiedFiltersInput
    $sortOrder: SearchmidtierSearchUnifiedSortOrderInput
    $pageSize: Int
    $searchId: String
    $context: SearchmidtierSearchUnifiedContextInput
    $uiMode: ThumbnailsThumbnailUiMode
    $featureFlags: SearchmidtierSearchUnifiedFeatureFlagsInput
    $sourceInfo: LoggingSearchmidtierSourceInfoInput!
  ) @component(name: "DBSQLX.SearchUI") {
    searchmidtierSearchUnifiedSearch(
      input: {
        pageToken: $pageToken
        query: $query
        filters: $filters
        exclusionFilters: $exclusionFilters
        sortOrder: $sortOrder
        pageSize: $pageSize
        searchId: $searchId
        context: $context
        sourceInfo: $sourceInfo
        featureFlags: $featureFlags
      }
    ) {
      apiError {
        message
        code
      }
      nextPageToken
      results {
        ...SearchResultDataWebapp
      }
      partialFailures {
        failureType
      }
    }
  }
  ${i.zB}
`,c=25,u=3,m={sourceId:r.nZp.DASHBOARD_LISTING_PAGE},h={}},715232:(e,a,t)=>{t.d(a,{D:()=>l,Q:()=>o});var r=t(278983),s=t(524013),i=t(858383);let n=new Set(["/search-eval-new","/search-eval"]);function o({searchUi:e,eventName:a,tags:t}){(0,r.y)("searchEvent",{searchUi:e,eventName:a,...t})}let l=()=>{let{pathname:e}=(0,i.zy)(),a=(0,s.sH)();if(n.has(e))return()=>{};return({searchUi:e,eventName:t,tags:r})=>{let{searchId:s,...i}=r||{};return a({searchId:s},"searchEvent",{searchUi:e,eventName:t,...i})}}},722481:(e,a,t)=>{t.d(a,{S:()=>o});var r=t(610435),s=t(692738),i=t(131886),n=t(819832);let o=({children:e,TrashedActionsComponent:a})=>{let{usePerformSearch:t}=(0,n.useSearchDiscoverDataFetchers)(),o=t(),l=(0,s.useMemo)(()=>({performSearchObj:o,TrashedActionsComponent:a}),[o,a]);return(0,r.Y)(i.T.Provider,{value:l,children:e})}},731023:(e,a,t)=>{t.d(a,{s:()=>O});var r=t(610435),s=t(34116),i=t.n(s),n=t(692738),o=t(497895),l=t(52430),d=t(764236),c=t(792049),u=t(771994),m=t(949034),h=t(319774),f=t(238801),g=t(381421),p=t(454157),S=t(819832),v=t(397644),A=t(855220),R=t(313639),y=t(133290),b=t(417958),T=t(625742),D=t(345214),M=t(640030),I=t(950180);function E(e,a,t,r,s,i,n){try{var o=e[i](n),l=o.value}catch(e){t(e);return}o.done?a(l):Promise.resolve(l).then(r,s)}function O({backgroundColor:e,defaultSearchTypeGroups:a,allSupportedSearchControlKeys:t,shouldDisplayCollection:s,domainAssetsLockedColumns:g,storageKeyPrefix:v,filterPanelSource:R,resultViewsByTypeGroup:D,domainsViewAllUrl:E,source:P,page:L}){var U;let{theme:F}=(0,o.wn)(),_=(0,n.useMemo)(()=>({supportedSearchTypeGroups:a,getSupportedKeys:()=>t}),[t,a]),{searchQueryString:x,searchQueryObject:k,setSearchQueryObject:Y}=(0,c.q)(_),W=(0,n.useMemo)(()=>{if(k.filters?.searchTypeGroups?.length===1&&k.filters.searchTypeGroups[0]===u.An.APP)return t.filter(e=>e!==u.XV.FAVORITED);return t},[t,k.filters?.searchTypeGroups]),{useGetDomains:B}=(0,S.useSearchDiscoverDataFetchers)(),{domains:V}=B(),{discoverSearchQueryObject:J,collections:q,collectionsLoading:Q,inEditSectionsMode:z,localDraftCollectionsActions:H,displayDiscoverResults:j,maxNumberOfCustomCollectionsReached:K}=(0,M.B)(k,P),G=(0,n.useCallback)(()=>g,[g]),X=(0,n.useMemo)(()=>(function(e){let a=e.filters?.searchTypeGroups;if(a?.length===1&&w.has(a[0]))return b.TF.GRID;return b.TF.LIST})(k),[k]);return(0,r.Y)("div",{css:{display:"flex",flexDirection:"column",alignItems:"center",padding:0,margin:0,width:"100%",height:`calc(100dvh - ${m.q7}px)`,overflowY:"hidden",overflowX:"hidden"},children:(0,r.Y)(l.f,{css:{width:"100%",display:"flex",flexDirection:"column",height:"100%",padding:0},children:(0,r.Y)(y.A,{children:(0,r.FD)("div",{css:{display:"flex",flexDirection:"column",flex:1,overflow:"hidden",minHeight:0},children:[(0,r.Y)(h.v,{discoverSearchQueryObject:J,domains:V,discoverBaseUrl:"/one/discover",searchBaseUrl:"/one/discover",homeUrl:"/one",css:{padding:`0px ${2*F.spacing.md}px`,paddingTop:F.spacing.sm}}),(0,r.FD)("div",{css:{backgroundColor:e,width:"100%",boxSizing:"border-box"},children:[(0,r.Y)(y.x,{theme:F,backgroundColor:e,children:(0,r.Y)("div",{css:{padding:`0px ${2*F.spacing.md}px`},children:(0,r.FD)(r.FK,{children:[(0,r.Y)(d.h,{size:"lg"}),(0,r.Y)(A.u,{searchQueryString:x,displayOnlySearchQuery:!0,searchQueryObject:k}),(0,r.Y)(d.h,{size:"md"})]})})}),(0,r.Y)("div",{css:{display:"flex",flexWrap:"wrap",alignItems:"center",width:"100%",padding:`0px ${2*F.spacing.md}px`,margin:"0 auto",boxSizing:"border-box",gap:F.spacing.sm},children:(0,r.Y)(C,{searchQueryObject:k,setSearchQueryObject:Y,supportedSearchControlKeys:W,source:R})}),(U=k,(U.filters?.domainNames?.length===1||(0,p.o5)(U))&&(0,r.Y)("div",{css:{width:"100%",paddingTop:F.spacing.md,paddingRight:`${2*F.spacing.md}px`,paddingLeft:`${2*F.spacing.md}px`,margin:"0 auto",boxSizing:"border-box"},children:(0,r.Y)(f.I,{discoverSearchQueryObject:J,domains:V})})),(0,r.Y)(d.h,{size:"md"}),(0,r.Y)("div",{css:{borderBottom:`1px solid ${F.colors.border}`,margin:`0 ${2*F.spacing.md}px`}})]}),(0,r.Y)("div",{css:{display:"flex",flex:"1 1 0px",overflow:"hidden",minHeight:0},children:(0,r.FD)("div",{"data-testid":"discover",css:{display:"flex",overflow:"auto",flex:1,minWidth:0,padding:`${F.spacing.md}px ${2*F.spacing.md}px`,marginBottom:F.spacing.md,boxSizing:"border-box"},children:[(0,r.Y)(I.$,{searchQueryObject:k,setSearchQueryObject:Y,searchControlKeys:W,supportedTypes:a,source:R}),(0,r.Y)("div",{css:{flex:"1 1 0",minWidth:0,display:"flex",flexDirection:"column",gap:0,rowGap:0,paddingTop:0,width:"100%",margin:"0 auto",boxSizing:"border-box"},children:j?(0,r.Y)(N,{setSearchQueryObject:Y,searchQueryObject:k,discoverSearchQueryObject:J,domains:V,collections:q,collectionsLoading:Q,inEditSectionsMode:z,maxNumberOfCustomCollectionsReached:K,onEmptyStateChange:i(),localDraftCollectionsActions:H,domainAssetRecommendationsState:$,shouldDisplayCollection:s,domainAssetsLockedColumns:g,domainAssetsTableBackgroundColor:e,domainsViewAllUrl:E,allowedSearchTypeGroups:a,page:L}):(0,r.Y)(T.L,{searchQueryObject:k,setSearchQueryObject:Y,showSuggestedAssets:!1,pageSizeOverride:50,defaultResultView:X,defaultSearchTypeGroups:a,resultViewsByTypeGroup:D,lockedColumns:G,enableOwnerAvatarInTable:!0,storageKeyPrefix:v,backgroundColor:e})})]})})]})})})})}let w=new Set([u.An.DASHBOARD,u.An.APP]);function C({searchQueryObject:e,setSearchQueryObject:a,supportedSearchControlKeys:t,source:s}){let{hasFilters:i,numSelectedFilters:o,quickFilters:l}=(0,n.useMemo)(()=>{let a=e.filters?.searchTypeGroups?.[0],r="account"===s?"accountOwnerPicker":"ownerPicker",i=t.filter(e=>e!==u.XV.SORT&&e!==u.XV.DISCOVER_FEATURED).map(e=>D.Ge[e]),n=(0,p.uM)({searchQueryObject:e,supportedFilters:i}),o=["dashboards","genieSpaces","apps","domain",r,"certified","favorited"],l={[u.An.DASHBOARD]:["dashboards","domain",r,"certified","favorited"],[u.An.DATA_ROOM]:["genieSpaces","domain",r,"certified","favorited"],[u.An.APP]:["apps","showInactiveApps","domain",r,"certified"]},d=(a?l[a]??o:o).filter(e=>t.includes(D.W3[e]));return{hasFilters:n>0,numSelectedFilters:n,quickFilters:(0,D.$C)(d,e)}},[e,t,s]);return(0,r.Y)(R.v,{searchQueryObject:e,setSearchQueryObject:a,hasFilters:i,numSelectedFilters:o,quickFilters:l})}function N({shouldDisplayCollection:e,setSearchQueryObject:a,localDraftCollectionsActions:t,...s}){let i=(0,n.useCallback)(e=>{a((0,g.as)(e))},[a]);return(0,r.Y)(v.u,{...s,...t,searchQueryString:s.searchQueryObject.query,setDiscoverSearchQueryObject:i,shouldDisplayCollection:e,suggestedAssetsViewAllUrl:"/one/discover/suggested-assets"})}let $={isPermitted:!1,assets:[],loading:!1,setAssetFeedback:i(),getAssetFeedback:()=>void 0,inCurateMode:!1,setInCurateMode:i(),hasMore:!1,fetchMore:()=>{var e;return(e=function*(){},function(){var a=this,t=arguments;return new Promise(function(r,s){var i=e.apply(a,t);function n(e){E(i,r,s,n,o,"next",e)}function o(e){E(i,r,s,n,o,"throw",e)}n(void 0)})})()}}},736996:(e,a,t)=>{t.d(a,{LZ:()=>i,V8:()=>o,X4:()=>f,ZQ:()=>l,Zu:()=>n,a2:()=>c,eh:()=>d,lf:()=>u,xs:()=>m,yt:()=>h});var r=t(497895),s=t(993533);let i=8,n=12,o=24,l=60,d="system.Featured",c="TABLE_METRIC_VIEW";function u(e){let{theme:a}=(0,r.wn)();return e?0:2*a.spacing.lg}let m=[s.Clx.DASHBOARD_V3,s.Clx.DATA_ROOM,s.Clx.NOTEBOOK,s.Clx.QUERY,s.Clx.UC_TABLE,s.Clx.UC_MODEL,s.Clx.ENDPOINT_CENTRIC_ENDPOINT],h=[s.iId.ML_MODEL,s.iId.ML_ENDPOINT],f=[s.iId.ML_MODEL]},751097:(e,a,t)=>{t.d(a,{P:()=>i,x:()=>n});var r,s=t(696514),i=((r={}).DONE="done",r.CANCELLED="cancelled",r);let n=(0,s.fH)("Filebrowser::SelectLocation")},820097:(e,a,t)=>{t.d(a,{H:()=>i,Z:()=>n});var r,s=t(696514),i=((r={}).DONE="done",r.CANCELLED="cancelled",r);let n=(0,s.fH)("Filebrowser::CloneRedashToLakeview")},841710:(e,a,t)=>{t.d(a,{DV:()=>c,LC:()=>n,W9:()=>i,iq:()=>o,pR:()=>d});var r,s=t(993533),i=((r={}).DASHBOARD_LAKEVIEW="DASHBOARD_LAKEVIEW",r.NOTEBOOK="NOTEBOOK",r.QUERY="QUERY",r.UC_TABLE="UC_TABLE",r.DATA_ROOM="DATA_ROOM",r.UC_TABLE_METRIC_VIEW="UC_TABLE_METRIC_VIEW",r.UC_MODEL="UC_MODEL",r.ENDPOINT="ENDPOINT_CENTRIC_ENDPOINT",r.APP="APP",r);let n=Object.entries({DASHBOARD_LAKEVIEW:s.iId.DASHBOARD_LAKEVIEW,NOTEBOOK:s.iId.NOTEBOOK,QUERY:s.iId.QUERY,UC_TABLE:s.iId.TABLE,DATA_ROOM:s.iId.DATA_ROOM,UC_TABLE_METRIC_VIEW:s.iId.TABLE,UC_MODEL:s.iId.ML_MODEL,ENDPOINT_CENTRIC_ENDPOINT:s.iId.ML_ENDPOINT,APP:s.iId.APP}).reduce((e,[a,t])=>({...e,[t]:e[t]??a}),{}),o=e=>Object.keys(n).includes(e),l={[s.z$1.ALERT]:s.iId.ALERT,[s.z$1.DASHBOARD]:s.iId.DASHBOARD_REDASH,[s.z$1.DASHBOARD_V3]:s.iId.DASHBOARD_LAKEVIEW,[s.z$1.EXPERIMENT]:s.iId.MLFLOW_EXPERIMENT,[s.z$1.FILE]:s.iId.FILE,[s.z$1.FOLDER]:s.iId.FOLDER,[s.z$1.JOB]:s.iId.JOB,[s.z$1.LIBRARY]:s.iId.LIBRARY,[s.z$1.NOTEBOOK]:s.iId.NOTEBOOK,[s.z$1.PROJECT]:s.iId.PROJECT,[s.z$1.QUERY]:s.iId.QUERY,[s.z$1.UC_TABLE]:s.iId.TABLE,[s.z$1.DATA_ROOM]:s.iId.DATA_ROOM,[s.z$1.UC_MODEL]:s.iId.ML_MODEL,[s.z$1.ENDPOINT_CENTRIC_ENDPOINT]:s.iId.ML_ENDPOINT,[s.z$1.APP]:s.iId.APP},d=l,c=Object.entries(l).reduce((e,[a,t])=>({...e,[t]:a}),{})},850723:(e,a,t)=>{t.d(a,{J:()=>n,O:()=>o});var r=t(160603),s=t(302118);function i(e,a,t,r,s,i,n){try{var o=e[i](n),l=o.value}catch(e){t(e);return}o.done?a(l):Promise.resolve(l).then(r,s)}let n=["get_metastore_summary"];function o({fallback:e,useQueryOptions:a}={}){return(0,r.useQuery)({queryKey:n,queryFn:()=>{var a;return(a=function*(){return e?yield s.k.getMetastoreSummaryWithFallBack():yield s.k.getMetastoreSummary()},function(){var e=this,t=arguments;return new Promise(function(r,s){var n=a.apply(e,t);function o(e){i(n,r,s,o,l,"next",e)}function l(e){i(n,r,s,o,l,"throw",e)}o(void 0)})})()},...a})}},852683:(e,a,t)=>{t.d(a,{F:()=>s});let r=[["none",/^(?:[^\\"]|\\.)*$/],["simple",/^\s*"(?:[^\\"]|\\.)*"\s*$/],["complex",/^[^"]*(?:\s|^)(?:"(?:[^\\"]|\\.)*"(?:\s[^"]+)?(?:\s|$))+$/],["unpadded",/^[^"]*(?:"(?:[^\\"]|\\.)*"[^"]*)+$/]];function s(e){for(let[a,t]of r)if(null!==t.exec(e))return a;return"invalid"}},855220:(e,a,t)=>{t.d(a,{u:()=>A});var r=t(610435),s=t(225577),i=t(692738),n=t(466213),o=t(497895),l=t(407374),d=t(834343),c=t(79128),u=t(658345),m=t(342411),h=t(858383),f=t(548857),g=t(488655),p=t(434422);let S=(0,s.A)("div",{target:"e1me0iqh0"})(({theme:e})=>({width:"100%",padding:`${e.spacing.sm} 0 ${e.spacing.sm} 0`})),v=(0,s.A)("div",{target:"e1me0iqh1"})(({theme:e})=>({borderRadius:"16px",border:`1px solid ${e.colors.border}`,boxShadow:"0 0 0 4px var(--black-alpha-02, #00000005)",backdropFilter:"blur(4px)",backgroundColor:e.colors.backgroundPrimary,height:`${e.general.heightBase}px`,display:"flex",flexDirection:"column",justifyContent:"center"})),A=({searchQueryString:e,displayOnlySearchQuery:a,searchQueryObject:t})=>{let s,A,R=(0,m.tz)(),{theme:y,getPrefixedClassName:b}=(0,o.wn)(),T=(0,i.useMemo)(()=>a?t?.query??"":e,[a,t,e]),[D,M]=(0,i.useState)(T??"");(0,i.useEffect)(()=>{M(T)},[T]);let{updateSearchQuery:I,clearSearchQuery:E}=(s=(0,g.Zp)(),A=(0,h.BF)(),{updateSearchQuery:(0,i.useCallback)((e,a)=>{let t=new URLSearchParams(a);t.set("q",e);let r=A().pathname;s({pathname:r.startsWith("/search/")||"/search"===r?"/search/results":r,search:t.toString()})},[s,A]),clearSearchQuery:(0,i.useCallback)(e=>{let a=new URLSearchParams(e);a.delete("q");let t=A().pathname;s({pathname:t.startsWith("/search/")||"/search"===t?(0,p.s)()?"/search/discover":"/search/results":t,search:a.toString()})},[s,A])}),O=(0,h.BF)(),w=(0,i.useCallback)(e=>{if(a)return(0,f.dW)({...t,query:e||void 0});return e},[a,t]),C=(0,n.YQ)(e=>{let a=w(e),t=new URLSearchParams(O().search);a.trim()?I(a,t):E(t)},250);return(0,r.Y)(S,{children:(0,r.Y)(v,{children:(0,r.Y)(l.p,{componentId:"search.keyword-search.input",value:D,onChange:e=>{let a=e.target.value;M(a),C(a)},"aria-label":R.formatMessage({id:"wxr2Cm",defaultMessage:"Search across assets..."}),placeholder:R.formatMessage({id:"wxr2Cm",defaultMessage:"Search across assets..."}),prefix:(0,r.Y)(d.A,{}),suffix:(0,r.Y)(c.$n,{icon:(0,r.Y)(u.A,{}),componentId:"search.keyword-search.clear-button","aria-label":R.formatMessage({id:"7xl4cT",defaultMessage:"Clear search"}),onClick:()=>{M("");let e=w(""),a=new URLSearchParams(O().search);e.trim()?I(e,a):E(a)},css:{borderRadius:`${y.borders.borderRadiusFull}px !important`,visibility:D?"visible":"hidden"}}),dangerouslyAppendEmotionCSS:{"&&":{border:"none !important",[`&.${b("input-affix-wrapper-focused")}`]:{"&&, &:focus":{outline:"none!important"}}}}})})})}},876070:(e,a,t)=>{t.d(a,{z:()=>s});var r,s=((r={}).SidebarV2="search-sidebar-v2",r.SidebarV1="search-sidebar-v1",r.Modal="search-modal",r.NavigationalSearchBar="navigational-search-bar",r.PopularAssetsTable="popular-assets-table",r.SearchPage="search-page",r)},919681:(e,a,t)=>{t.d(a,{aE:()=>f,it:()=>S,qE:()=>h,zB:()=>b});var r=t(141078);let s=(0,r.J1)`
  fragment SearchResultTitleData on SearchmidtierSearchUnifiedResult {
    name
    highlighting {
      name
    }
  }
`,i=(0,r.J1)`
  fragment SearchResultOwnerData on SearchmidtierSearchUnifiedResult {
    owner {
      id
      fullname
      email
    }
    ownerPrincipal {
      id
      displayName
      uniqueName
      kind
    }
  }
`,n=(0,r.J1)`
  fragment SearchResultDescriptionData on SearchmidtierSearchUnifiedResult {
    description
    highlighting {
      description
    }
    ucEntityMetadata {
      comments
    }
    dataRoom {
      description
    }
  }
`,o=(0,r.J1)`
  fragment SearchResultPopularityData on SearchmidtierSearchUnifiedResult {
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
`,l=(0,r.J1)`
  fragment SearchResultIconData on SearchmidtierSearchUnifiedResult {
    resultType
    ucEntityMetadata {
      securableKind
    }
    partnerEntityMetadata {
      partnerId
    }
    browseOnly
    treeNode {
      ... on ParentTreeNode {
        projectAttributes {
          __typename
        }
      }
    }
  }
`,d=(0,r.J1)`
  fragment SearchResultRunStatusData on SearchmidtierSearchUnifiedResult {
    job {
      activeRuns(first: 1) {
        edges {
          node {
            status
          }
        }
      }
      completedRuns(first: 1) {
        edges {
          node {
            status
          }
        }
      }
    }
  }
`,c=(0,r.J1)`
  fragment SearchResultCodeHighlightData on SearchmidtierSearchUnifiedResult {
    ...SearchResultUrlData
    highlighting {
      codeFragments {
        content
        childId
        id
        language
      }
    }
  }
`,u=(0,r.J1)`
  fragment SearchResultFavoriteStatusData on SearchmidtierSearchUnifiedResult {
    userActivityInfo {
      assetType
      assetId
      isFavorite
    }
  }
`,m=(0,r.J1)`
  fragment SearchResultUpdatedAtData on SearchmidtierSearchUnifiedResult {
    updatedAt
  }
`,h=(0,r.J1)`
  fragment SearchResultTableLocationData on SearchmidtierSearchUnifiedResult {
    ucEntityMetadata {
      catalogName
      schemaName
    }
  }
`,f=(0,r.J1)`
  fragment SearchResultWorkspaceFullPathData on SearchmidtierSearchUnifiedResult {
    treeNode {
      fullPath
      isDeleted
      id
      parent {
        id
      }
    }
  }
`,g=(0,r.J1)`
  fragment SearchResultTagsData on SearchmidtierSearchUnifiedResult {
    tags {
      name
      value
    }
    marketplaceEntityMetadata {
      categories
    }
  }
`,p=(0,r.J1)`
  fragment SearchResultLastViewedAtData on SearchmidtierSearchUnifiedResult {
    userActivityInfo {
      assetType
      assetId
      lastViewedByUserAt
    }
  }
`,S=(0,r.J1)`
  fragment SearchResultUrlData on SearchmidtierSearchUnifiedResult {
    id
    resultType
    name
    ucEntityMetadata {
      catalogName
      schemaName
    }
    partnerEntityMetadata {
      partnerId
    }
    treeNode {
      ... on Repo {
        projectAttributes {
          __typename
        }
      }
      ... on Directory {
        projectAttributes {
          __typename
        }
      }
    }
  }
`,v=(0,r.J1)`
  fragment SearchResultColumnHighlightData on SearchmidtierSearchUnifiedResult {
    resultType
    highlighting {
      textFragments {
        childId
        content
        title
      }
    }
  }
`,A=(0,r.J1)`
  fragment SearchResultThumbnailData on SearchmidtierSearchUnifiedResult {
    id
    name
    resultType
    thumbnailUrl(uiMode: $uiMode)
  }
`,R=(0,r.J1)`
  fragment SearchResultMarketplaceProviderData on SearchmidtierSearchUnifiedResult {
    marketplaceEntityMetadata {
      providerId
      providerName
    }
  }
`,y=(0,r.J1)`
  fragment SearchResultAppsMetadataData on SearchmidtierSearchUnifiedResult {
    appsMetadata {
      statusState
      appsCreator {
        id
        email
        fullname
      }
    }
  }
`,b=(0,r.J1)`
  fragment SearchResultDataWebapp on SearchmidtierSearchUnifiedResult {
    id
    ...SearchResultTitleData
    ...SearchResultOwnerData
    ...SearchResultDescriptionData
    ...SearchResultPopularityData
    ...SearchResultIconData
    ...SearchResultRunStatusData
    ...SearchResultCodeHighlightData
    ...SearchResultFavoriteStatusData
    ...SearchResultUpdatedAtData
    ...SearchResultTableLocationData
    ...SearchResultWorkspaceFullPathData
    ...SearchResultTagsData
    ...SearchResultLastViewedAtData
    ...SearchResultUrlData
    ...SearchResultColumnHighlightData
    ...SearchResultThumbnailData
    ...SearchResultMarketplaceProviderData
    ...SearchResultAppsMetadataData
  }
  ${s}
  ${i}
  ${n}
  ${o}
  ${l}
  ${d}
  ${c}
  ${u}
  ${m}
  ${h}
  ${f}
  ${g}
  ${p}
  ${S}
  ${v}
  ${A}
  ${R}
  ${y}
`},967224:(e,a,t)=>{t.d(a,{O:()=>s});var r=t(441535);function s(){return(0,r.W)("databricks.fe.discover.areKnowledgePagesEnabled",!1)}},996021:(e,a,t)=>{t.d(a,{MR:()=>l,RW:()=>o,am:()=>i,jb:()=>n});var r=t(483588),s=t(108167);function i(e){if(!(e&&e.length>0))return;return n(e.map(e=>({tagName:s.bu,tagValue:e.toLowerCase()})))}function n(e){if(!(e&&e.length>0))return;return{tags:e.map(({tagName:e,tagValue:a})=>({tagName:e,...void 0!==a&&{tagValue:a}}))}}function o(e){if(!e||0===e.length)return;return n(e.map(e=>({tagName:e})))}function l(e,a){if(!e||!a)return e??a;if(e.booleanExpression?.operator===r.a69.AND&&e.booleanExpression.operands)return{booleanExpression:{operator:r.a69.AND,operands:[...e.booleanExpression.operands,a]}};return{booleanExpression:{operator:r.a69.AND,operands:[e,a]}}}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/44405.185f481501.chunk.js.map