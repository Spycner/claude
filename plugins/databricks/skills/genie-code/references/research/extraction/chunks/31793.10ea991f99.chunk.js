(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[31793,83425],{118389:(e,n,t)=>{"use strict";t.d(n,{P:()=>i});var a=t(441535);function i(){return(0,a.W)("discover_page",!1)&&(0,a.W)("domains",!1)}},160142:(e,n,t)=>{"use strict";t.d(n,{I:()=>o});var a=t(610435);t(692738);var i=t(210556);let r={1:24,2:12,3:8,4:6,6:4},s={1:{xs:1,sm:1,md:1,lg:1},2:{xs:1,sm:2,md:2,lg:2},3:{xs:1,sm:2,md:3,lg:3},4:{xs:2,sm:2,md:4,lg:4},6:{xs:2,sm:3,md:4,lg:6}};function o({children:e,columnsPerRow:n,responsiveOverrides:t={}}){let d=s[n],c={xs:t.xs??d.xs,sm:t.sm??d.sm,md:t.md??d.md,lg:t.lg??d.lg},m={xs:r[c.xs],sm:r[c.sm],md:r[c.md],lg:r[c.lg]};return(0,a.Y)(i.f,{...m,children:e})}},173773:(e,n,t)=>{"use strict";t.d(n,{Ej:()=>r,qc:()=>s,vO:()=>o,wt:()=>i});var a=t(141078);let i=(0,a.J1)`
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
`;let r=(0,a.J1)`
  fragment RecommendationRelevanceReason on RecommendationRelevanceReason {
    relevanceTime
    type
    viewMetadata {
      viewFrequency
    }
  }
`,s=(0,a.J1)`
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
`},231223:(e,n,t)=>{"use strict";t.d(n,{J:()=>r,S:()=>i});var a=t(141078);let i=(0,a.J1)`
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
`;function r(e,n={}){return(0,a.IT)(i,{variables:e,...n})}},262989:(e,n,t)=>{"use strict";t.d(n,{h:()=>o});var a=t(692738),i=t(53333),r=t(87008),s=t(87221);function o(e,n){let t=(0,s.ki)(),o=(0,r.e)(),d=(0,a.useCallback)(()=>{t({eventType:"component_view",eventEntity:{entityType:"component",entitySubType:e,entityId:n,entityViewId:o},eventPayload:{interactionSubject:!0}})},[n,e,t,o]);return(0,i.z)({onView:d,resetKey:`${e}:${n}`})}},339798:(e,n,t)=>{"use strict";t.d(n,{Q:()=>r,r:()=>i});var a=t(124235);let i=e=>(0,a.cX)()?e.metaKey:e.ctrlKey,r=()=>(0,a.cX)()?"⌘":"Ctrl"},397382:(e,n,t)=>{"use strict";t.d(n,{N:()=>i});var a=t(441535);function i(){return(0,a.W)("databricks.fe.discover.domainsRecommendations",!1)}},470801:(e,n,t)=>{"use strict";t.d(n,{V:()=>m});var a=t(692738),i=t(483588),r=t(141078),s=t(596189),o=t.n(s);function d(e,n,t,a,i,r,s){try{var o=e[r](s),d=o.value}catch(e){t(e);return}o.done?n(d):Promise.resolve(d).then(a,i)}let c=[i.iId.DASHBOARD_LAKEVIEW,i.iId.DATA_ROOM];function m(){let e=(0,r.mK)();return(0,a.useCallback)((n,t,a,i)=>{var r;return(r=function*(){let r=yield e.query({query:o(),variables:{filters:{tagsFilter:{tags:[{tagName:n}]},resultTypes:t?.resultTypes??c,...t},pageSize:a,...i?{sourceInfo:{sourceId:i}}:{}}});return{count:r.data?.assetaggregationSearchAccountUnified?.results?.length??0,hasMore:!!r.data?.assetaggregationSearchAccountUnified?.nextPageToken}},function(){var e=this,n=arguments;return new Promise(function(t,a){var i=r.apply(e,n);function s(e){d(i,t,a,s,o,"next",e)}function o(e){d(i,t,a,s,o,"throw",e)}s(void 0)})})()},[e])}},488809:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});var a=t(610435),i=t(382908),r=t(342411);function s(){return(0,a.Y)(i.o.Paragraph,{withoutMargins:!0,children:(0,a.Y)(r.sA,{id:"DPmb/v",defaultMessage:"Curated spaces that organize work by business function and make trusted content easier to find."})})}},529554:(e,n,t)=>{"use strict";t.d(n,{I:()=>h});var a=t(610435),i=t(692738),r=t(497895),s=t(764236),o=t(342411),d=t(483588),c=t(29444),m=t(595915),u=t(695771),l=t(526956),A=t(488809),g=t(441535),R=t(726977),f=t(221884),I=t(337706),E=t(771994),p=t(254856);let v=[d.iId.DASHBOARD_LAKEVIEW,d.iId.DATA_ROOM],T=(0,o.zR)({id:"5zoPuV",defaultMessage:"Search across domains..."}),h=e=>{let{currentUser:n}=e,t=e.source??"workspace",h=(0,o.tz)(),{theme:O}=(0,r.wn)(),[S,k]=i.useState(""),[D]=(0,I.ok)(),L="true"===D.get("isGTM"),y=(0,i.useMemo)(()=>({resultTypes:v,...(0,g.W)("databricks.fe.dbone.filterByPublishedDashboards",!1)?{dashboardPublishState:d.iGQ.DASHBOARD_PUBLISHED}:{}}),[]),N=i.useCallback(e=>`/one/search?${(0,I.XZ)({q:`${E.XV.DOMAIN}:${(0,p.cl)(e)}`,...L?{isGTM:"true"}:{}})}`,[L]);return(0,a.Y)(f.d$,{children:(0,a.Y)(c.u,{errorBoundaryId:R.s.DatabricksOneDomainsPage,currentUser:n,source:t,header:(0,a.FD)("div",{css:l.OH,children:[(0,a.Y)(m.j,{title:(0,a.Y)(o.sA,{id:"tlpike",defaultMessage:"Domains"}),source:t}),(0,a.Y)(A.Z,{}),(0,a.Y)(s.h,{size:"md"}),(0,a.Y)(u.D,{searchValue:S,setSearchValue:k,placeholder:h.formatMessage(T)}),(0,a.Y)(s.h,{size:"md"}),(0,a.Y)("div",{css:{borderBottom:`1px solid ${O.colors.border}`}})]}),filters:[],searchFilterPanelFilters:[],results:(0,a.Y)("div",{css:{width:"100%",paddingTop:O.spacing.md},children:"account"===e.source?(0,a.Y)(l.jC,{searchValue:S,getUrl:N,filterOverrides:y,sourceId:d.nZp.DATABRICKS_ONE,source:e.source,fetchSingleDomainAssetCount:e.fetchSingleDomainAssetCount}):(0,a.Y)(l.jC,{searchValue:S,getUrl:N,filterOverrides:y,sourceId:d.nZp.DATABRICKS_ONE,source:e.source})}),hideFilters:!0})})}},553935:(e,n,t)=>{"use strict";t.d(n,{A:()=>d});var a=t(610435),i=t(692738),r=t(375214);function s(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.75 1a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5A.75.75 0 0 0 7 6.25v-4.5A.75.75 0 0 0 6.25 1zm.75 4.5v-3h3v3zM1.75 9a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-4.5A.75.75 0 0 0 6.25 9zm.75 4.5v-3h3v3zM9 1.75A.75.75 0 0 1 9.75 1h4.5a.75.75 0 0 1 .75.75v4.49a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 6.24zm1.5.75v2.99h3V2.5zM9.75 9a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75zm.75 4.5v-3h3v3z",clipRule:"evenodd"})})}let o=(0,i.forwardRef)((e,n)=>(0,a.Y)(r.I,{ref:n,...e,component:s}));o.displayName="GridIcon";let d=o},596189:e=>{var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"AccountDomainAssetsQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"filters"}},type:{kind:"NamedType",name:{kind:"Name",value:"SearchmidtierSearchUnifiedFiltersInput"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pageSize"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"sourceInfo"}},type:{kind:"NamedType",name:{kind:"Name",value:"LoggingSearchmidtierSourceInfoInput"}},directives:[]}],directives:[{kind:"Directive",name:{kind:"Name",value:"component"},arguments:[{kind:"Argument",name:{kind:"Name",value:"name"},value:{kind:"StringValue",value:"Lakeview.DatabricksOne",block:!1}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"assetaggregationSearchAccountUnified"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"filters"},value:{kind:"Variable",name:{kind:"Name",value:"filters"}}},{kind:"ObjectField",name:{kind:"Name",value:"pageSize"},value:{kind:"Variable",name:{kind:"Name",value:"pageSize"}}},{kind:"ObjectField",name:{kind:"Name",value:"sourceInfo"},value:{kind:"Variable",name:{kind:"Name",value:"sourceInfo"}}},{kind:"ObjectField",name:{kind:"Name",value:"searchScope"},value:{kind:"EnumValue",value:"ACCOUNT"}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"apiError"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"code"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"nextPageToken"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"results"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:446}};n.loc.source={body:'query AccountDomainAssetsQuery(\n  $filters: SearchmidtierSearchUnifiedFiltersInput\n  $pageSize: Int\n  $sourceInfo: LoggingSearchmidtierSourceInfoInput\n) @component(name: "Lakeview.DatabricksOne") {\n  assetaggregationSearchAccountUnified(\n    input: { filters: $filters, pageSize: $pageSize, sourceInfo: $sourceInfo, searchScope: ACCOUNT }\n  ) {\n    apiError {\n      message\n      code\n    }\n    nextPageToken\n    results {\n      name\n    }\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var t={};function a(e,n){for(var t=0;t<e.definitions.length;t++){var a=e.definitions[t];if(a.name&&a.name.value==n)return a}}n.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,t){if("FragmentSpread"===n.kind)t.add(n.name.value);else if("VariableDefinition"===n.kind){var a=n.type;"NamedType"===a.kind&&t.add(a.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,t)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,t)}),n.definitions&&n.definitions.forEach(function(n){e(n,t)})}(e,n),t[e.name.value]=n}}),e.exports=n,e.exports.AccountDomainAssetsQuery=function(e,n){var i={kind:e.kind,definitions:[a(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var r=t[n]||new Set,s=new Set,o=new Set;for(r.forEach(function(e){o.add(e)});o.size>0;){var d=o;o=new Set,d.forEach(function(e){s.has(e)||(s.add(e),(t[e]||new Set).forEach(function(e){o.add(e)}))})}return s.forEach(function(n){var t=a(e,n);t&&i.definitions.push(t)}),i}(n,"AccountDomainAssetsQuery")},622120:(e,n,t)=>{"use strict";t.d(n,{DY:()=>R,H6:()=>l,YR:()=>g,mc:()=>A});var a=t(141078),i=t(173773);let r=(0,a.J1)`
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
`,s=(0,a.J1)`
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
`,d=(0,a.J1)`
  fragment AssetRecommendation on UseractivityAssetRecommendation {
    asset {
      ...SuggestedAsset
    }
    relevanceReason {
      ...RelevanceReason
    }
  }
`,c=(0,a.J1)`
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
`,u=(0,a.J1)`
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
`,l=(0,a.J1)`
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
  ${r}
  ${s}
  ${o}
  ${c}
  ${u}
`,A=(0,a.J1)`
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
  ${r}
  ${o}
  ${d}
  ${m}
`,g=(0,a.J1)`
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
`,R=(0,a.J1)`
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
`},636991:(e,n,t)=>{"use strict";t.r(n),t.d(n,{RouteComponent:()=>u,default:()=>m});var a=t(610435);t(692738);var i=t(332098),r=t(136079),s=t(529554),o=t(686560),d=t(470801);let c=()=>{let{username:e,userId:n}=(0,i.C6)().getLoadedSessionData(),t=n??(0,o.d)("userId_new",-1).toString(),c=(0,d.V)();if(!(0,r.Bx)())return null;return(0,a.Y)(s.I,{currentUser:{email:e,id:t},source:"account",fetchSingleDomainAssetCount:c})},m=c,u=c},695771:(e,n,t)=>{"use strict";t.d(n,{A:()=>p,D:()=>E});var a=t(610435),i=t(225577),r=t(692738),s=t(466213),o=t(497895),d=t(407374),c=t(834343),m=t(79128),u=t(658345),l=t(342411),A=t(726977),g=t(339798),R=t(217337),f=t(277449),I=t(768010);let E=r.forwardRef(({searchValue:e,setSearchValue:n,placeholder:t},i)=>{let r=(0,l.tz)(),{theme:s,getPrefixedClassName:A}=(0,o.wn)(),g=r.formatMessage({id:"hKvyU4",defaultMessage:"Search content..."});return(0,a.Y)(v,{children:(0,a.Y)(d.p,{ref:i,componentId:"dbone.search.input",value:e,onChange:e=>n(e.target.value),placeholder:t??g,prefix:(0,a.Y)(c.A,{}),suffix:(0,a.Y)(m.$n,{icon:(0,a.Y)(u.A,{}),componentId:"dbone.search.input.clear-button","aria-label":r.formatMessage({id:"uP1uWo",defaultMessage:"Clear search"}),onClick:()=>n(""),css:{borderRadius:`${s.borders.borderRadiusFull}px !important`}}),dangerouslyAppendEmotionCSS:{"&&":{border:"none !important",[`&.${A("input-affix-wrapper-focused")}`]:{"&&, &:focus":{outline:"none!important"}}}}})})}),p=({supportedSearchTypeGroups:e})=>{let{searchQueryObject:n,setSearchQueryObject:t}=(0,I.a)(e),i=(0,r.useRef)(null),[o,d]=(0,r.useState)(n.query??""),[c]=(0,s.d7)(o,500),m=(0,r.useRef)(n);m.current=n;let u=(0,r.useRef)(!1);return(0,r.useEffect)(()=>{u.current=!0,t({...m.current,query:c})},[c,t]),(0,r.useEffect)(()=>{if(u.current){u.current=!1;return}d(n.query??"")},[n.query,d]),(0,r.useEffect)(()=>{let e=e=>{(0,g.r)(e)&&"p"===e.key&&(e.preventDefault(),i.current?.focus())};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[]),(0,a.Y)(R.l,{errorBoundaryId:A.s.DatabricksOneSearchInput,children:(0,a.Y)(E,{searchValue:o,setSearchValue:d,ref:i})})},v=(0,i.A)("div",{target:"evjre9u0"})(({theme:e})=>({borderRadius:"16px",border:`1px solid ${e.colors.border}`,boxShadow:e.shadows.md,backdropFilter:"blur(4px)",height:`${e.general.heightBase}px`,display:"flex",flexDirection:"column",justifyContent:"center",...(0,f.hY)(e)}))},823910:(e,n,t)=>{"use strict";t.d(n,{S:()=>r,_:()=>i});var a=t(141078);let i=(0,a.J1)`
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
`;function r(e,n={}){return(0,a.IT)(i,{variables:e,...n})}},848001:(e,n,t)=>{"use strict";t.d(n,{K:()=>Y,LI:()=>P,Lg:()=>M,kn:()=>N,lU:()=>$,sj:()=>b});var a=t(610435),i=t(615693),r=t(325382),s=t(397136),o=t(126001),d=t(323935),c=t(485065),m=t(452233),u=t(563521),l=t(1459),A=t(319241),g=t(753427),R=t(401160),f=t(161926),I=t(24027),E=t(617933),p=t(823825),v=t(873393),T=t(815367),h=t(350487),O=t(918071),S=t(946590),k=t(889187),D=t(483588),L=t(707076),y=t(771994);let N={[D.FKF.ALERT]:y.An.ALERT,[D.FKF.DASHBOARD]:y.An.DASHBOARD,[D.FKF.DASHBOARD_V3]:y.An.DASHBOARD,[D.FKF.FILE]:y.An.FILE,[D.FKF.FOLDER]:y.An.FOLDER,[D.FKF.JOB]:y.An.JOB,[D.FKF.PIPELINE]:y.An.PIPELINE,[D.FKF.LIBRARY]:y.An.LIBRARY,[D.FKF.MARKETPLACE_LISTING]:y.An.MARKETPLACE,[D.FKF.ENDPOINT_CENTRIC_ENDPOINT]:y.An.ENDPOINT,[D.FKF.UC_MODEL]:y.An.MODEL,[D.FKF.UC_FUNCTION]:y.An.FUNCTION,[D.FKF.EXPERIMENT]:y.An.EXPERIMENT,[D.FKF.NOTEBOOK]:y.An.NOTEBOOK,[D.FKF.PROJECT]:y.An.REPO,[D.FKF.QUERY]:y.An.QUERY,[D.FKF.UC_TABLE]:y.An.TABLE,[D.FKF.UC_VOLUME]:y.An.VOLUME,[D.FKF.DATA_ROOM]:y.An.DATA_ROOM},b={[y.If.ALERT]:y.An.ALERT,[y.If.ALERT_V2]:y.An.ALERT_V2,[y.If.APP]:y.An.APP,[y.If.DBSQL_DASHBOARD]:y.An.DASHBOARD,[y.If.FILE]:y.An.FILE,[y.If.FOLDER]:y.An.FOLDER,[y.If.JOB]:y.An.JOB,[y.If.PIPELINE]:y.An.PIPELINE,[y.If.LIBRARY]:y.An.LIBRARY,[y.If.MARKETPLACE]:y.An.MARKETPLACE,[y.If.ML_ENDPOINT]:y.An.ENDPOINT,[y.If.ML_MODEL]:y.An.MODEL,[y.If.FUNCTION]:y.An.FUNCTION,[y.If.MLFLOW_EXPERIMENT]:y.An.EXPERIMENT,[y.If.NOTEBOOK]:y.An.NOTEBOOK,[y.If.DESIGNER_FILE]:y.An.DESIGNER_FILE,[y.If.PARTNER]:y.An.PARTNER,[y.If.PROJECT]:y.An.REPO,[y.If.QUERY]:y.An.QUERY,[y.If.TABLE]:y.An.TABLE,[y.If.VOLUME]:y.An.VOLUME,[y.If.DATA_ROOM]:y.An.DATA_ROOM,[y.If.METRIC_VIEW]:y.An.METRIC_VIEW},F={[D.iId.ALERT]:y.An.ALERT,[D.iId.ALERT_V2]:y.An.ALERT_V2,[D.iId.DASHBOARD_LAKEVIEW]:y.An.DASHBOARD,[D.iId.DASHBOARD_REDASH]:y.An.DASHBOARD,[D.iId.FILE]:y.An.FILE,[D.iId.FOLDER]:y.An.FOLDER,[D.iId.JOB]:y.An.JOB,[D.iId.PIPELINE]:y.An.PIPELINE,[D.iId.LIBRARY]:y.An.LIBRARY,[D.iId.MARKETPLACE]:y.An.MARKETPLACE,[D.iId.ML_ENDPOINT]:y.An.ENDPOINT,[D.iId.ML_MODEL]:y.An.MODEL,[D.iId.FUNCTION]:y.An.FUNCTION,[D.iId.MLFLOW_EXPERIMENT]:y.An.EXPERIMENT,[D.iId.NOTEBOOK]:y.An.NOTEBOOK,[D.iId.DESIGNER_FILE]:y.An.DESIGNER_FILE,[D.iId.PARTNER]:y.An.PARTNER,[D.iId.PROJECT]:y.An.REPO,[D.iId.QUERY]:y.An.QUERY,[D.iId.TABLE]:y.An.TABLE,[D.iId.VOLUME]:y.An.VOLUME,[D.iId.DATA_ROOM]:y.An.DATA_ROOM,[D.iId.APP]:y.An.APP};function P(e,n){if(!e)return null;let t=e.toUpperCase();if(y.im[t])return y.im[t];if((n??M()).includes(t))return t;return null}let M=(e=!1)=>(0,L.bz)(!0,e).flatMap(e=>{let n=b[e];return n?[n]:[]}),$=e=>Object.values(D.iId).filter(n=>{if(n===D.iId.DASHBOARD_REDASH)return!1;let t=F[n];return void 0!==t&&e.includes(t)}),Y=e=>{switch(e){case y.An.TABLE:return(0,a.Y)(i.A,{});case y.An.VOLUME:return(0,a.Y)(r.A,{});case y.An.NOTEBOOK:return(0,a.Y)(s.A,{});case y.An.DESIGNER_FILE:return(0,a.Y)(o.A,{});case y.An.JOB:return(0,a.Y)(d.A,{});case y.An.PIPELINE:return(0,a.Y)(c.A,{});case y.An.QUERY:return(0,a.Y)(m.A,{});case y.An.DASHBOARD:return(0,a.Y)(u.A,{});case y.An.FOLDER:return(0,a.Y)(l.A,{});case y.An.FILE:return(0,a.Y)(A.A,{});case y.An.REPO:return(0,a.Y)(g.A,{});case y.An.LIBRARY:return(0,a.Y)(R.A,{});case y.An.ALERT:case y.An.ALERT_V2:return(0,a.Y)(f.A,{});case y.An.APP:return(0,a.Y)(I.A,{});case y.An.EXPERIMENT:return(0,a.Y)(E.A,{});case y.An.MODEL:return(0,a.Y)(p.A,{});case y.An.ENDPOINT:return(0,a.Y)(v.A,{});case y.An.FUNCTION:return(0,a.Y)(T.A,{});case y.An.PARTNER:return(0,a.Y)(h.A,{});case y.An.MARKETPLACE:return(0,a.Y)(O.A,{});case y.An.DATA_ROOM:return(0,a.Y)(S.A,{});case y.An.METRIC_VIEW:return(0,a.Y)(k.A,{});default:return(0,a.Y)(A.A,{})}}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/31793.10ea991f99.chunk.js.map