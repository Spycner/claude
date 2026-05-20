"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[56439],{90710:(e,t,a)=>{a.d(t,{Y:()=>u});var r=a(610435),i=a(956935),n=a(692738),s=a(497895),l=a(861166),o=a(997791),d=a(639712),c=a(123252);let u=({breadcrumbs:e,title:t,titleAddOns:a,dangerouslyAppendEmotionCSS:u,buttons:h,children:m,titleElementLevel:p,allowTitleWrap:g=!0,...f})=>{let S,{classNamePrefix:A,theme:y}=(0,s.wn)(),M=Array.isArray(h)?h:h?[h]:[],T={titleWrapper:(0,i.AH)({display:"flex",alignItems:"flex-start",justifyContent:"space-between",flexWrap:g?"wrap":"nowrap",rowGap:y.spacing.sm,...0===M.length&&{paddingTop:e?0:y.spacing.xs/2,paddingBottom:y.spacing.xs/2}}),breadcrumbWrapper:(0,i.AH)({lineHeight:y.typography.lineHeightBase,marginBottom:y.spacing.xs}),title:(0,i.AH)({marginTop:0,marginBottom:"0 !important",alignSelf:"stretch",...!g&&{flex:1,minWidth:0}}),titleIfOtherElementsPresent:(0,i.AH)({marginTop:2}),buttonContainer:(0,i.AH)({marginLeft:8}),titleAddOnsWrapper:(0,i.AH)({display:"inline-flex",verticalAlign:"middle",alignItems:"center",flexWrap:"wrap",marginLeft:y.spacing.sm,gap:y.spacing.xs})};return(0,r.FD)("div",{...(0,c.VG)(),css:[(S={[`.${A}-breadcrumb`]:{lineHeight:y.typography.lineHeightBase}},(0,i.AH)((0,d.dg)(S))),u],...f,children:[e&&(0,r.Y)("div",{css:T.breadcrumbWrapper,children:e}),(0,r.FD)("div",{css:T.titleWrapper,children:[(0,r.FD)(o.h,{level:2,elementLevel:p,css:[T.title,(h||e)&&T.titleIfOtherElementsPresent],children:[t,a&&(0,r.Y)("span",{css:T.titleAddOnsWrapper,children:a})]}),h&&(0,r.Y)("div",{css:T.buttonContainer,children:(0,r.Y)(l.$,{dangerouslySetAntdProps:{wrap:!0},size:8,children:M.filter(Boolean).map((e,t)=>{let a=`dubois-header-button-${t}`;return n.isValidElement(e)?n.cloneElement(e,{key:e.key||a}):(0,r.Y)(n.Fragment,{children:e},a)})})})]})]})}},100458:(e,t,a)=>{a.d(t,{H:()=>i,n:()=>n});var r=a(441535);let i=()=>(0,r.W)("databricks.fe.genai.tools.enableCarouselV2",!0),n=()=>(0,r.W)("databricks.fe.genai.tools.enableMarketplaceListings",!0)},215371:(e,t,a)=>{a.d(t,{V:()=>o});var r=a(412836),i=a(472033),n=a(100458);function s(e,t,a,r,i,n,s){try{var l=e[n](s),o=l.value}catch(e){a(e);return}l.done?t(o):Promise.resolve(o).then(r,i)}let l="/ajax-api/2.1/marketplace-consumer",o=(e,t=!0)=>(0,r.IT)(["marketplace-providers",...e.sort()],()=>{var t;return(t=function*(){if(0===e.length)return[];let t=yield Promise.allSettled(e.map(e=>(0,i.E)(l,`listings/${e}`,"GET"))),a=new Set,r=new Map;t.forEach(e=>{if("fulfilled"===e.status){let t=e.value.listing;if(t){let e=t.summary?.provider_id;e&&(a.add(e),r.set(e,t.id))}}});let n=new URLSearchParams;return Array.from(a).forEach(e=>n.append("ids",e)),((yield(0,i.E)(l,`providers:batchGet?${n.toString()}`,"GET")).providers||[]).map(e=>({...e,listing_id:r.get(e.id)}))},function(){var e=this,a=arguments;return new Promise(function(r,i){var n=t.apply(e,a);function l(e){s(n,r,i,l,o,"next",e)}function o(e){s(n,r,i,l,o,"throw",e)}l(void 0)})})()},{enabled:!!(0,n.n)()&&e.length>0&&t,staleTime:1/0})},420482:(e,t,a)=>{a.d(t,{U:()=>r,s:()=>i});let r=["32d5b7b6-0fab-4bba-9c57-5de23dd58996","d9c0c130-cc18-45ac-9c19-77ec2df14310","ebc2838b-8e22-42d9-ad52-90afac1210ec","4d9f22b0-20ef-440e-be6d-eedb6f1c7fe6"],i=(e,t=!1)=>{let a=t?e.dark_mode_icon_file_path||e.icon_file_path||"":e.icon_file_path||"",r=e.listing_id?`/marketplace/consumer/listings/${e.listing_id}`:void 0;return{id:e.id,name:e.name,description:e.description||"",logo:a,marketplacePath:r}}},432944:(e,t,a)=>{a.d(t,{h:()=>e$});var r=a(610435),i=a(692738),n=a(497895),s=a(27418),l=a(232284),o=a(382908),d=a(465946),c=a(79128),u=a(126927),h=a(499918),m=a(407374),p=a(834343),g=a(140718),f=a(342411),S=a(67656),A=a(819524),y=a(148570),M=a(295169),T=a(217985);let _=({provider:e})=>{let t=(0,r.Y)(c.$n,{disabled:!e.marketplacePath,size:"small",componentId:"codegen_no_dynamic_webapp_web_js_genai_tools_components_home_marketplacecard_19",children:(0,r.Y)(f.sA,{id:"W8laI4",defaultMessage:"Install"})});return(0,r.Y)("div",{"data-componentid":`tools.home.marketplace.${e.id}.card`,css:{height:"100%"},children:(0,r.Y)(s.N,{css:{boxSizing:"border-box",height:"100%"},icon:(0,r.Y)("div",{css:{width:24,height:24,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,r.Y)("img",{src:e.logo,alt:`${e.name} logo`,css:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain"}})}),title:(0,r.Y)(o.o.Title,{level:5,withoutMargins:!0,css:{"&&":{fontWeight:500}},children:e.name}),endActions:e.marketplacePath?(0,r.Y)(T.N,{to:e.marketplacePath,componentId:"codegen_no_dynamic_webapp_web_js_genai_tools_components_home_marketplacecard_56",asChild:!0,children:t}):t,children:(0,r.Y)("div",{css:{display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"ellipsis"},children:(0,r.Y)(o.o.Hint,{children:e.description})})})})};var b=a(420482),v=a(215371);let I=()=>{let{theme:e}=(0,n.wn)(),{data:t,isLoading:a,isError:i}=(0,v.V)(b.U);if(!a&&(i||!t||0===t.length))return null;if(a)return(0,r.Y)("div",{css:{display:"flex",gap:e.spacing.sm,flexWrap:"wrap"},children:b.U.map(e=>(0,r.Y)("div",{css:{width:320,height:140,flex:"0 0 auto"},children:(0,r.Y)(M.x,{})},e))});let s=t.map(t=>(0,b.s)(t,e.isDarkMode));return(0,r.Y)("div",{css:{display:"flex",gap:e.spacing.sm,flexWrap:"wrap"},children:s.map(e=>(0,r.Y)("div",{css:{width:320,height:140,flex:"0 0 auto"},children:(0,r.Y)(_,{provider:e})},e.id))})};var R=a(217247),Y=a(955210),C=a(100458);let D=e=>{let t=(0,f.tz)(),{theme:a}=(0,n.wn)();return(0,r.Y)(s.N,{css:{boxSizing:"border-box",height:"100%"},icon:(0,r.Y)(l.A,{css:{fontSize:14}}),title:(0,r.Y)("div",{css:{display:"flex",alignItems:"center",gap:a.spacing.sm},children:(0,r.Y)(o.o.Title,{level:5,withoutMargins:!0,css:{"&&":{fontWeight:500}},children:e.name})}),"aria-label":t.formatMessage({id:"+wZGqq",defaultMessage:"{toolName} card"},{toolName:e.name}),endActions:e.endActions,componentId:"codegen_no_dynamic_webapp_web_js_genai_tools_components_home_toolshomecarousel_58",children:(0,r.FD)("div",{css:{display:"flex",flexDirection:"column",gap:a.spacing.sm},children:[(0,r.Y)(o.o.Hint,{children:e.description}),(0,r.Y)("div",{css:{display:"flex",gap:a.spacing.xs,flexWrap:"wrap"},children:e.tags.map((t,a)=>(0,r.Y)(d.v,{componentId:"tools.home.cards.tag",css:{marginRight:0},children:t},`${e.id}-${a}`))})]})})},E=()=>{let e=(0,f.tz)(),{theme:t}=(0,n.wn)(),{data:a,isLoading:s,isError:l}=(0,v.V)(b.U),d=(0,i.useRef)(null),h=t.spacing.md,m=(0,i.useCallback)(e=>{if(!d.current)return;let t=320+h,a=d.current.scrollLeft%t,r="left"===e&&0!==a?t-a:a,i=Math.floor(d.current.offsetWidth/t);d.current.scrollBy({left:"left"===e?-(t*i-r):t*i-r,behavior:"smooth"})},[h]),p=(0,i.useMemo)(()=>(0,r.Y)(D,{id:"create-tools",name:e.formatMessage({id:"3wPfG5",defaultMessage:"Create tools"}),description:e.formatMessage({id:"PzxSG8",defaultMessage:"Learn how to create tools for agents in Databricks"}),path:S.R.getDbGuideUrl(A.Ay.AGENT_FRAMEWORK_UC_FUNCTIONS_CREATE),endActions:(0,r.Y)(c.$n,{href:S.R.getDbGuideUrl(A.Ay.AGENT_FRAMEWORK_UC_FUNCTIONS_CREATE),target:"_blank",rel:"noreferrer",size:"small",endIcon:(0,r.Y)(u.A,{}),componentId:"tools.home.link.create-tools.docs",children:(0,r.Y)(f.sA,{id:"4iTiyP",defaultMessage:"Learn more"})}),openInNewTab:!0,tags:[(0,r.Y)(f.sA,{id:"hzTT6x",defaultMessage:"UC Functions"},"uc-functions"),(0,r.Y)(f.sA,{id:"Ccoy9u",defaultMessage:"Vector Search"},"vector-search"),(0,r.Y)(f.sA,{id:"Bdix0w",defaultMessage:"Genie"},"genie")]}),[e]),g=(0,i.useMemo)(()=>{if(!a||0===a.length||l)return[];return a.map(e=>(0,b.s)(e,t.isDarkMode))},[a,t.isDarkMode,l]);return(0,r.FD)("div",{css:{display:"flex",flexDirection:"column",gap:t.spacing.sm},children:[(0,C.n)()&&(0,r.FD)("div",{css:{display:"flex",alignItems:"center",gap:t.spacing.sm,justifyContent:"space-between"},children:[(0,r.FD)("div",{css:{display:"flex",alignItems:"center",gap:t.spacing.sm},children:[(0,r.Y)(o.o.Text,{withoutMargins:!0,children:(0,r.Y)(f.sA,{id:"EWHA6B",defaultMessage:"Discover"})}),(0,r.Y)(T.N,{to:"/marketplace?asset=MCP%20servers&sortBy=relevance",asChild:!0,componentId:"tools.home.carousel.see-more",children:(0,r.Y)(c.$n,{componentId:"tools.home.carousel.see-more",size:"small",children:(0,r.Y)(f.sA,{id:"QyhPl8",defaultMessage:"See more"})})})]}),(0,r.FD)("div",{css:{display:"flex",alignItems:"center",gap:t.spacing.sm},children:[(0,r.Y)(c.$n,{componentId:"tools.home.carousel.left",size:"small",icon:(0,r.Y)(R.A,{}),onClick:()=>m("left")}),(0,r.Y)(c.$n,{componentId:"tools.home.carousel.right",size:"small",icon:(0,r.Y)(Y.A,{}),onClick:()=>m("right")})]})]}),(0,r.FD)("div",{id:"tools-discover-carousel",css:{display:"flex",gap:h,flexWrap:"nowrap",overflowX:"auto"},ref:d,children:[(0,r.Y)("div",{css:{width:320,flex:"0 0 auto",paddingBottom:t.spacing.md},children:p}),(0,C.n)()&&(s?b.U.map(e=>(0,r.Y)("div",{css:{width:320,flex:"0 0 auto",paddingBottom:t.spacing.md},children:(0,r.Y)(M.x,{css:{height:140}})},e)):g.map(e=>(0,r.Y)("div",{css:{width:320,flex:"0 0 auto",paddingBottom:t.spacing.md},children:(0,r.Y)(_,{provider:e})},e.id)))]}),(0,r.Y)("hr",{css:{height:0,border:0,borderTop:`1px solid ${t.colors.border}`,margin:0}})]})};var x=a(720022),N=a(638600),w=a(318294),U=a(876726),k=a(764236),O=a(12414),$=a(505544),P=a(181828),L=a(615693),F=a(946590),G=a(815367),B=a(742557),H=a(465082),W=a(325056),z=a(293418),K=a(314775),V=a(84008),j=a(32121),J=a(109581),q=a(993533),Q=a(465376);let X=e=>{let{fetchMore:t,loading:a,canFetchMore:s,networkStatus:l,error:c}=e,u=(0,f.tz)(),h=(0,i.useRef)(null),{theme:m}=(0,n.wn)(),p=l===j.pT.fetchMore,g=(0,i.useMemo)(()=>{if(c)return(0,r.Y)(U.S,{description:(0,r.FD)("div",{children:[(0,r.Y)(o.o.Text,{children:(0,r.Y)(f.sA,{id:"don4YA",defaultMessage:"Error loading search results"})}),(0,r.Y)(k.h,{size:"sm"}),(0,r.Y)(o.o.Text,{children:c.message})]})});if(0===e.results.length&&e.loading&&!p)return(0,r.Y)(U.S,{image:(0,r.Y)(O.y,{}),description:(0,r.Y)(f.sA,{id:"WA8ue3",defaultMessage:"Loading search results"})});if(0===e.results.length&&!e.loading&&!p)return(0,r.Y)(U.S,{description:(0,r.Y)(f.sA,{id:"M3qCf9",defaultMessage:"No search results found"})});return null},[e.loading,e.results.length,c,p]),[S,A]=i.useState(""),y=(0,i.useMemo)(()=>e.results,[e.results]),M=(0,i.useMemo)(()=>[{id:"name",accessorFn:e=>({name:e.name,id:e.id}),header:u.formatMessage({id:"5xPSM+",defaultMessage:"Name"}),size:400,minSize:200,cell:({getValue:e})=>{let t=e();return(0,r.Y)(T.N,{componentId:"codegen_no_dynamic_webapp_web_js_genai_tools_components_home_toolstable_168",to:`/ml/agents/tools/${t.id}`,asTypographyLink:!0,children:t.name||""})}},{id:"tool",accessorFn:e=>e,header:u.formatMessage({id:"dyaWd7",defaultMessage:"Server Type"}),cell:({getValue:e})=>{let t=e(),a=((e,t)=>{if("isStaticServer"in e&&e.isStaticServer){if(e.id?.startsWith("dbsql:"))return t.formatMessage({id:"M/Lq6f",defaultMessage:"DBSQL MCP Server"});return t.formatMessage({id:"CQ3ZHb",defaultMessage:"Managed MCP Server"})}if((0,Q.F)(e))return t.formatMessage({id:"7MrWi4",defaultMessage:"External API"});if((0,Q.mD)(e))return t.formatMessage({id:"aIdr6J",defaultMessage:"Databricks App"});switch(e.resultType){case q.iId.TABLE:return t.formatMessage({id:"FGakDV",defaultMessage:"Vector Search Index"});case q.iId.DATA_ROOM:return t.formatMessage({id:"5RjcGh",defaultMessage:"Genie Space"});case q.iId.FUNCTION:return t.formatMessage({id:"Hmbrta",defaultMessage:"UC Function"});default:return e.resultType?.replace(/_/g," ")||""}})(t,u),i=null;return"isStaticServer"in t&&t.isStaticServer?i=(0,r.Y)($.A,{}):(0,Q.mD)(t)?i=(0,r.Y)(P.A,{}):t.resultType===q.iId.TABLE?i=(0,r.Y)(L.A,{}):t.resultType===q.iId.DATA_ROOM?i=(0,r.Y)(F.A,{}):t.resultType===q.iId.FUNCTION&&(i=(0,r.Y)(G.A,{})),(0,r.Y)(d.v,{componentId:"tools.home.table.result-type-tag",icon:i,children:a})},minSize:150},{id:"status",accessorFn:e=>e.status,header:u.formatMessage({id:"5U9dpf",defaultMessage:"Status"}),cell:({getValue:e})=>{let t=e();return(0,r.FD)("div",{css:{display:"flex",alignItems:"center",gap:"4px"},children:[t?(0,r.Y)(B.A,{color:"success"}):void 0,(0,r.Y)(o.o.Text,{children:t?u.formatMessage({id:"eGfKVs",defaultMessage:"Active"}):u.formatMessage({id:"lu4vW9",defaultMessage:"Inactive"})})]})},minSize:100},{id:"created-by",accessorFn:e=>e.owner,header:u.formatMessage({id:"2k4Q1A",defaultMessage:"Created By"}),cell:({getValue:e})=>{let t=e(),a=t?.fullname||t?.email||"";return(0,r.FD)("div",{css:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,r.Y)(H.A,{}),(0,r.Y)(o.o.Text,{children:a})]})},minSize:200}],[u]),_=(0,J.Lb)("webapp/web/js/genai/tools/components/home/ToolsTable.tsx",{data:y,getCoreRowModel:(0,x.HT)(),getFilteredRowModel:(0,x.hM)(),onGlobalFilterChange:A,state:{globalFilter:S},enableSorting:!1,columns:M}),b=_.getRowModel().rows,v=(0,w.Te)({count:b.length,estimateSize:()=>33,getScrollElement:()=>h.current,overscan:3}),I=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=I.current;if(!e)return;let r=new IntersectionObserver(e=>{let[r]=e;r.isIntersecting&&!p&&!a&&s&&t()});return r.observe(e),()=>r.disconnect()},[s,p,a,t]),(0,r.FD)(W.X,{empty:g,scrollable:!0,style:{marginBottom:m.spacing.md,width:"100%"},children:[(0,r.Y)("div",{css:{position:"sticky",top:0,zIndex:1,borderBottom:"1px solid #e0e0e0"},children:_.getHeaderGroups().map(e=>(0,r.Y)(z.H,{isHeader:!0,style:{width:"100%"},children:e.headers.map(e=>(0,r.Y)(K.A,{componentId:"codegen_no_dynamic_webapp_web_js_genai_tools_components_home_toolstable_333",style:{width:`${e.column.getSize()/_.getTotalSize()*100}%`},sortable:!1,children:(0,N.Kv)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,r.Y)("div",{ref:h,css:{flex:1,position:"relative"},children:(0,r.FD)("div",{css:{height:v.getTotalSize()+33*!!p,width:"100%",position:"relative"},children:[v.getVirtualItems().map(e=>{let t=b[e.index];return(0,r.Y)(Z,{row:t,height:e.size,offsetY:e.start,totalSize:_.getTotalSize()},`${t.original.id||e.index}`)}),p&&(0,r.Y)(z.H,{css:{position:"absolute",top:0,left:0,width:"100%",height:33,transform:`translateY(${v.getTotalSize()}px)`},children:(0,r.Y)(V.n,{children:(0,r.Y)("div",{css:{display:"flex",justifyContent:"center"},children:(0,r.Y)(O.y,{"aria-label":u.formatMessage({id:"U9m1YH",defaultMessage:"Loading more results"})})})})}),(0,r.Y)("div",{ref:I,css:{height:"1px",position:"absolute",bottom:"100px",width:"100%"}})]})})]})},Z=i.memo(e=>(0,r.Y)(z.H,{style:{position:"absolute",top:0,left:0,width:"100%",height:e.height,transform:`translateY(${e.offsetY}px)`},children:e.row.getAllCells().map(t=>(0,r.Y)(V.n,{style:{width:`${t.column.getSize()/e.totalSize*100}%`},children:(0,N.Kv)(t.column.columnDef.cell,t.getContext())},t.id))}));var ee=a(441535),et=a(141078),ea=a(660618),er=a(581716),ei=a(733337),en=a(432993);let es=(0,et.J1)`
  fragment GenaiSearchResultTitleData on SearchmidtierSearchUnifiedResult {
    name
    highlighting {
      name
    }
  }
`,el=(0,et.J1)`
  fragment GenaiSearchResultOwnerData on SearchmidtierSearchUnifiedResult {
    owner {
      id
      fullname
      email
    }
  }
`,eo=(0,et.J1)`
  fragment GenaiSearchResultDescriptionData on SearchmidtierSearchUnifiedResult {
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
`,ed=(0,et.J1)`
  fragment GenaiSearchResultPopularityData on SearchmidtierSearchUnifiedResult {
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
`,ec=(0,et.J1)`
  fragment GenaiSearchResultIconData on SearchmidtierSearchUnifiedResult {
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
`,eu=(0,et.J1)`
  fragment GenaiSearchResultRunStatusData on SearchmidtierSearchUnifiedResult {
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
`,eh=(0,et.J1)`
  fragment GenaiSearchResultCodeHighlightData on SearchmidtierSearchUnifiedResult {
    ...GenaiSearchResultUrlData
    highlighting {
      codeFragments {
        content
        childId
        id
        language
      }
    }
  }
`,em=(0,et.J1)`
  fragment GenaiSearchResultFavoriteStatusData on SearchmidtierSearchUnifiedResult {
    userActivityInfo {
      assetType
      assetId
      isFavorite
    }
  }
`,ep=(0,et.J1)`
  fragment GenaiSearchResultUpdatedAtData on SearchmidtierSearchUnifiedResult {
    updatedAt
  }
`,eg=(0,et.J1)`
  fragment GenaiSearchResultTableLocationData on SearchmidtierSearchUnifiedResult {
    ucEntityMetadata {
      catalogName
      schemaName
    }
  }
`,ef=(0,et.J1)`
  fragment GenaiSearchResultWorkspaceFullPathData on SearchmidtierSearchUnifiedResult {
    treeNode {
      fullPath
      isDeleted
      id
      parent {
        id
      }
    }
  }
`,eS=(0,et.J1)`
  fragment GenaiSearchResultTagsData on SearchmidtierSearchUnifiedResult {
    tags {
      name
      value
    }
    marketplaceEntityMetadata {
      categories
    }
  }
`,eA=(0,et.J1)`
  fragment GenaiSearchResultLastViewedAtData on SearchmidtierSearchUnifiedResult {
    userActivityInfo {
      assetType
      assetId
      lastViewedByUserAt
    }
  }
`,ey=(0,et.J1)`
  fragment GenaiSearchResultUrlData on SearchmidtierSearchUnifiedResult {
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
`,eM=(0,et.J1)`
  fragment GenaiSearchResultColumnHighlightData on SearchmidtierSearchUnifiedResult {
    resultType
    highlighting {
      textFragments {
        childId
        content
        title
      }
    }
  }
`,eT=(0,et.J1)`
  fragment GenaiSearchResultThumbnailData on SearchmidtierSearchUnifiedResult {
    id
    name
    resultType
    thumbnailUrl(uiMode: $uiMode)
  }
`,e_=(0,et.J1)`
  fragment GenaiSearchResultMarketplaceProviderData on SearchmidtierSearchUnifiedResult {
    marketplaceEntityMetadata {
      providerId
      providerName
    }
  }
`,eb=(0,et.J1)`
  fragment GenaiSearchResultData on SearchmidtierSearchUnifiedResult {
    id
    ...GenaiSearchResultTitleData
    ...GenaiSearchResultOwnerData
    ...GenaiSearchResultDescriptionData
    ...GenaiSearchResultPopularityData
    ...GenaiSearchResultIconData
    ...GenaiSearchResultRunStatusData
    ...GenaiSearchResultCodeHighlightData
    ...GenaiSearchResultFavoriteStatusData
    ...GenaiSearchResultUpdatedAtData
    ...GenaiSearchResultTableLocationData
    ...GenaiSearchResultWorkspaceFullPathData
    ...GenaiSearchResultTagsData
    ...GenaiSearchResultLastViewedAtData
    ...GenaiSearchResultUrlData
    ...GenaiSearchResultColumnHighlightData
    ...GenaiSearchResultThumbnailData
    ...GenaiSearchResultMarketplaceProviderData
  }
  ${es}
  ${el}
  ${eo}
  ${ed}
  ${ec}
  ${eu}
  ${eh}
  ${em}
  ${ep}
  ${eg}
  ${ef}
  ${eS}
  ${eA}
  ${ey}
  ${eM}
  ${eT}
  ${e_}
`;var ev=a(531407);let eI=[q.iId.FUNCTION,q.iId.DATA_ROOM,q.iId.TABLE],eR=e=>(0,Q.XJ)(e),eY=e=>e.map(e=>{let t=!1;return t="isStaticServer"in e&&!!e.isStaticServer||((0,Q.F)(e)&&e.ucConnectionState?e.ucConnectionState===er.UM.ACTIVE:(0,Q.mD)(e)&&e.databricksAppState?e.databricksAppState===ev.tV.ACTIVE:!!e.resultType&&eI.includes(e.resultType)),{...e,status:t}}),eC=e=>{let t=new Map,a=[];for(let r of e){if(!((r.resultType===q.iId.TABLE||r.resultType===q.iId.FUNCTION)&&r.ucEntityMetadata?.catalogName&&r.ucEntityMetadata?.schemaName)||!r.ucEntityMetadata){a.push({...r,id:eR(r)});continue}let e=r.ucEntityMetadata.catalogName,i=r.ucEntityMetadata.schemaName,n=`${e}.${i}:${r.resultType}`,s=`${e}.${i}`,l=t.get(n);if(l){l.items.push(r);continue}t.set(n,{id:n,name:s,description:null,resultType:r.resultType,ucEntityMetadata:{__typename:"SearchmidtierSearchUnifiedResultUcEntityMetadata",securableKind:null,catalogName:e,schemaName:i,comments:null},__typename:"SearchmidtierSearchUnifiedResult",highlighting:null,owner:r.owner,dataRoom:null,popularity:null,liveUsageInfo:null,partnerEntityMetadata:null,browseOnly:null,treeNode:null,job:null,userActivityInfo:null,updatedAt:null,tags:null,marketplaceEntityMetadata:null,thumbnailUrl:null,status:r.status,items:[r]})}return[...Array.from(t.values()),...a]};var eD=a(646139),eE=a(87832);function ex(e,t,a,r,i,n,s){try{var l=e[n](s),o=l.value}catch(e){a(e);return}l.done?t(o):Promise.resolve(o).then(r,i)}function eN(e){return function(){var t=this,a=arguments;return new Promise(function(r,i){var n=e.apply(t,a);function s(e){ex(n,r,i,s,l,"next",e)}function l(e){ex(n,r,i,s,l,"throw",e)}s(void 0)})}}let ew=(0,et.J1)`
  query ToolsSearch(
    $pageToken: String
    $query: SearchmidtierSearchUnifiedQueryInput
    $filters: SearchmidtierSearchUnifiedFiltersInput
    $sortOrder: SearchmidtierSearchUnifiedSortOrderInput
    $pageSize: Int
    $searchId: String
    $context: SearchmidtierSearchUnifiedContextInput
    $uiMode: ThumbnailsThumbnailUiMode
  ) @component(name: "Playground.Playground") {
    searchmidtierSearchUnifiedSearch(
      input: {
        pageToken: $pageToken
        query: $query
        filters: $filters
        sortOrder: $sortOrder
        pageSize: $pageSize
        searchId: $searchId
        context: $context
        sourceInfo: { sourceId: FULL_PAGE_SEARCH }
      }
    ) {
      apiError {
        message
        code
      }
      nextPageToken
      results {
        ...GenaiSearchResultData
      }
      partialFailures {
        failureType
      }
    }
  }
  ${eb}
`,eU=`${ea.bY}/connections`,ek=e=>{let t="true"===(e.options??{}).is_mcp_connection,a=e.connection_type===er.pu.HTTP;return t&&a},eO=e=>{let t=(0,f.tz)(),{theme:a}=(0,n.wn)();return(0,r.Y)(s.N,{css:{boxSizing:"border-box",height:"100%"},icon:(0,r.Y)(l.A,{css:{fontSize:14}}),title:(0,r.Y)("div",{css:{display:"flex",alignItems:"center",gap:a.spacing.sm},children:(0,r.Y)(o.o.Title,{level:5,withoutMargins:!0,css:{"&&":{fontWeight:500}},children:e.name})}),"aria-label":t.formatMessage({id:"+wZGqq",defaultMessage:"{toolName} card"},{toolName:e.name}),endActions:e.endActions,componentId:"codegen_no_dynamic_webapp_web_js_genai_tools_components_home_toolshome_61",children:(0,r.FD)("div",{css:{display:"flex",flexDirection:"column",gap:a.spacing.sm},children:[(0,r.Y)(o.o.Hint,{children:e.description}),(0,r.Y)("div",{css:{display:"flex",gap:a.spacing.xs,flexWrap:"wrap"},children:e.tags.map((t,a)=>(0,r.Y)(d.v,{componentId:"tools.home.cards.tag",css:{marginRight:0},children:t},`${e.id}-${a}`))})]})})},e$=({headerActions:e})=>{let t=(0,f.tz)(),{theme:a}=(0,n.wn)(),[s,l]=(0,i.useState)(""),[d,M]=(0,i.useState)("all"),{loading:T,error:_,results:R,hasMore:Y,fetchMore:D,networkStatus:x}=((e,t="all")=>{let{theme:a}=(0,n.wn)(),r=(0,i.useMemo)(()=>{let r=en.n.generateUuidV4(),i=[],n=[];if(("all"===t||"vector-search"===t)&&(i.push(q.iId.TABLE),n.push("TABLE_ONLINE_VECTOR_INDEX_REPLICA","TABLE_ONLINE_VECTOR_INDEX_DIRECT")),("all"===t||"uc-function"===t)&&(i.push(q.iId.FUNCTION),n.push("FUNCTION_STANDARD")),0===i.length)return null;return{pageSize:25,query:{query:e,searchMode:q.YD3.HYBRID,enableCrossRanking:!!(0,ee.W)("databricks.fe.search.enableCrossRanking",!1)},filters:{resultTypes:i,securableKinds:n},searchId:r,context:{url:void 0},uiMode:a.isDarkMode?q.Jic.UI_MODE_DARK:q.Jic.UI_MODE_DEFAULT}},[e,a.isDarkMode,t]),s=(0,i.useMemo)(()=>{if("all"!==t&&"genie-space"!==t)return null;let r=en.n.generateUuidV4();return{pageSize:25,query:{query:e,searchMode:q.YD3.HYBRID,enableCrossRanking:!!(0,ee.W)("databricks.fe.search.enableCrossRanking",!1)},filters:{resultTypes:[q.iId.DATA_ROOM]},searchId:r,context:{url:void 0},uiMode:a.isDarkMode?q.Jic.UI_MODE_DARK:q.Jic.UI_MODE_DEFAULT}},[e,a.isDarkMode,t]),{data:l,fetchMore:o,loading:d,error:c,networkStatus:u}=(0,et.IT)(ew,{variables:r,notifyOnNetworkStatusChange:!0,fetchPolicy:"network-only",skip:!r}),{data:h,fetchMore:m,loading:p,error:g,networkStatus:f}=(0,et.IT)(ew,{variables:s,notifyOnNetworkStatusChange:!0,fetchPolicy:"network-only",skip:!s}),[S,A]=(0,i.useState)([]),[y,M]=(0,i.useState)(!1);(0,i.useEffect)(()=>{eN(function*(){M(!0);try{let e=(yield(0,ei.Ky)(eU,e=>e.connections)).filter(ek);A(e)}catch(e){A([])}finally{M(!1)}})()},[]);let T=(0,i.useMemo)(()=>{if("all"!==t&&"external-api"!==t)return[];if(!e)return S;return S.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()))},[S,e,t]),{data:_,isLoading:b}=(0,eE.A)(),{data:v,isLoading:I}=(0,eD.T)(),R=(0,i.useMemo)(()=>{if("all"!==t&&"databricks-app"!==t)return[];let a=[..._??[],...v??[]];if(!e)return a;return a.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()))},[_,v,e,t]),Y=l?.searchmidtierSearchUnifiedSearch?.apiError||h?.searchmidtierSearchUnifiedSearch?.apiError||c||g,C=!!Y,D=l?.searchmidtierSearchUnifiedSearch?.nextPageToken,E=h?.searchmidtierSearchUnifiedSearch?.nextPageToken,x=r&&d||s&&p||y||b||I,N=!r||void 0!==l||!s||void 0!==h,w=x||!N,U=!!((D||E)&&!C),k=!x&&N,[O,$]=(0,i.useState)(!1),P=(0,i.useCallback)(()=>eN(function*(){if(O||!U)return;let e=[];if(!D||C||d||e.push(o({variables:{pageToken:D},updateQuery:(e,{fetchMoreResult:t})=>{if(!t)return e;let a=e.searchmidtierSearchUnifiedSearch?.results||[],r=t.searchmidtierSearchUnifiedSearch?.results||[];return{...e,searchmidtierSearchUnifiedSearch:{...t.searchmidtierSearchUnifiedSearch,results:[...a,...r]}}}})),!E||C||p||e.push(m({variables:{pageToken:E},updateQuery:(e,{fetchMoreResult:t})=>{if(!t)return e;let a=e.searchmidtierSearchUnifiedSearch?.results||[],r=t.searchmidtierSearchUnifiedSearch?.results||[];return{...e,searchmidtierSearchUnifiedSearch:{...t.searchmidtierSearchUnifiedSearch,results:[...a,...r]}}}})),0===e.length)return;$(!0);try{yield Promise.all(e)}finally{$(!1)}})(),[O,U,D,E,C,d,p,o,m]),L=(0,i.useMemo)(()=>{if(!r)return[];return(l?.searchmidtierSearchUnifiedSearch?.results??[]).filter(e=>{let t=e.ucEntityMetadata?.securableKind;if(e.resultType===q.iId.TABLE)return"TABLE_ONLINE_VECTOR_INDEX_REPLICA"===t||"TABLE_ONLINE_VECTOR_INDEX_DIRECT"===t;if(e.resultType===q.iId.FUNCTION)return"FUNCTION_STANDARD"===t;return!1})},[r,l?.searchmidtierSearchUnifiedSearch?.results]),F=(0,i.useMemo)(()=>{if(!s)return[];return h?.searchmidtierSearchUnifiedSearch?.results??[]},[s,h?.searchmidtierSearchUnifiedSearch?.results]),G=[...l?.searchmidtierSearchUnifiedSearch?.partialFailures||[],...h?.searchmidtierSearchUnifiedSearch?.partialFailures||[]],B=(0,i.useMemo)(()=>{if("all"!==t&&"dbsql"!==t)return null;let a="DBSQL MCP Server";if(e&&!a.toLowerCase().includes(e.toLowerCase()))return null;return{id:"dbsql:DBSQL",name:a,description:null,resultType:null,ucEntityMetadata:null,__typename:"SearchmidtierSearchUnifiedResult",highlighting:null,owner:{__typename:"RichUser",id:null,fullname:"Databricks",email:null},dataRoom:null,popularity:null,liveUsageInfo:null,partnerEntityMetadata:null,browseOnly:null,treeNode:null,job:null,userActivityInfo:null,updatedAt:null,tags:null,marketplaceEntityMetadata:null,thumbnailUrl:null,status:!0,isStaticServer:!0}},[e,t]),H=(0,i.useMemo)(()=>T.map(e=>({id:e.name,name:e.name,description:null,resultType:null,ucEntityMetadata:{__typename:"SearchmidtierSearchUnifiedResultUcEntityMetadata",securableKind:e.securable_kind||`CONNECTION_${e.connection_type}`,catalogName:null,schemaName:null,comments:null},__typename:"SearchmidtierSearchUnifiedResult",highlighting:null,owner:e.created_by?{__typename:"RichUser",id:null,displayName:e.created_by,userName:e.created_by,fullname:e.created_by,email:null}:null,dataRoom:null,popularity:null,liveUsageInfo:null,partnerEntityMetadata:null,browseOnly:null,treeNode:null,job:null,userActivityInfo:null,updatedAt:null,tags:null,marketplaceEntityMetadata:null,thumbnailUrl:null,ucConnectionState:e.provisioning_info?.state})),[T]),W=(0,i.useMemo)(()=>R.map(e=>({id:e.name,name:e.name,description:e.description??null,resultType:null,ucEntityMetadata:{__typename:"SearchmidtierSearchUnifiedResultUcEntityMetadata",securableKind:"DATABRICKS_APP",catalogName:null,schemaName:null,comments:null},__typename:"SearchmidtierSearchUnifiedResult",highlighting:null,owner:e.creator?{__typename:"RichUser",id:null,displayName:e.creator,userName:e.creator,fullname:e.creator,email:null}:null,dataRoom:null,popularity:null,liveUsageInfo:null,partnerEntityMetadata:null,browseOnly:null,treeNode:null,job:null,userActivityInfo:null,updatedAt:e.update_time??null,tags:null,marketplaceEntityMetadata:null,thumbnailUrl:null,databricksAppState:e.compute_status?.state})),[R]),[z,K]=(0,i.useState)([]),V=(0,i.useRef)({sk:0,dr:0,conn:0,databricksApp:0}),J=(0,i.useRef)(!1),Q=(0,i.useRef)([]);(0,i.useEffect)(()=>{Q.current=z},[z]);let X=(0,i.useRef)(e),Z=(0,i.useRef)(t);return(0,i.useEffect)(()=>{if((X.current!==e||Z.current!==t)&&(K([]),V.current={sk:0,dr:0,conn:0,databricksApp:0},J.current=!1,Q.current=[],X.current=e,Z.current=t),!k)return;let a={sk:L.length,dr:F.length,conn:H.length,databricksApp:W.length},r=V.current,i=0===r.sk&&0===r.dr&&0===r.conn&&0===r.databricksApp,n=null!==B,s=n!==J.current;if(!(a.sk!==r.sk||a.dr!==r.dr||a.conn!==r.conn||a.databricksApp!==r.databricksApp||s)&&!i)return;if(i)K(eC(eY((e=>{let t=new Set,a=[];for(let r of e)for(let e of r)e.id&&!t.has(e.id)&&(t.add(e.id),a.push(e));return a})([H,W,...B?[[B]]:[],L,F])))),V.current=a,J.current=n;else{let e=L.slice(r.sk),t=F.slice(r.dr),i=H.slice(r.conn),s=W.slice(r.databricksApp),l=new Set;Q.current.forEach(e=>{"items"in e&&Array.isArray(e.items)?e.items.forEach(e=>e.id&&l.add(e.id)):e.id&&l.add(e.id)});let o=[...i,...s,...e,...t].filter(e=>e.id&&!l.has(e.id));if(o.length>0){let e=eC(eY(o));K(t=>{let a=[...t],r=new Map(a.map(e=>[e.id,e]));for(let t of e){let e=r.get(t.id);if(e&&"items"in e&&Array.isArray(e.items)&&"items"in t&&Array.isArray(t.items)){let a=e.items;e.items=[...a,...t.items]}else"items"in t&&Array.isArray(t.items)&&t.items.length>0?(a.push(t),r.set(t.id,t)):"items"in t||(a.push(t),r.set(t.id,t))}return a})}V.current=a,J.current=n}},[e,t,k,L,F,H,W,B]),{fetchMore:P,hasMore:U,results:(0,i.useMemo)(()=>z.filter(e=>{if("items"in e){let t=e.items;return Array.isArray(t)&&t.length>0}return!0}),[z]),error:Y||void 0,partialFailures:G,loading:w,networkStatus:u||f||j.pT.ready,loadingMore:O}})(s,d),{data:N,isLoading:w,isError:U}=(0,v.V)(b.U),k=(0,C.H)(),O=w||!U&&N&&N.length>0,$=(0,i.useMemo)(()=>[{id:"uc-functions",name:t.formatMessage({id:"sjL6Oi",defaultMessage:"UC Functions"}),description:t.formatMessage({id:"FK4dSV",defaultMessage:"Create Unity Catalog function tools for predefined structured data lookups via SQL"}),path:S.R.getDbGuideUrl(A.Ay.AGENT_FRAMEWORK_UC_FUNCTIONS_CREATE),endActions:(0,r.Y)(c.$n,{href:S.R.getDbGuideUrl(A.Ay.AGENT_FRAMEWORK_UC_FUNCTIONS_CREATE),target:"_blank",rel:"noreferrer",size:"small",endIcon:(0,r.Y)(u.A,{}),componentId:"tools.home.link.uc-functions.docs",children:(0,r.Y)(f.sA,{id:"87g+al",defaultMessage:"Learn more"})}),openInNewTab:!0,tags:[(0,r.Y)(f.sA,{id:"SHeTYm",defaultMessage:"Data Processing"},"data-processing"),(0,r.Y)(f.sA,{id:"/270a6",defaultMessage:"SQL"},"sql"),(0,r.Y)(f.sA,{id:"qjo1bQ",defaultMessage:"Python"},"python")]},{id:"vector-search",name:t.formatMessage({id:"RmHCxj",defaultMessage:"Vector Search"}),description:t.formatMessage({id:"DDf3YA",defaultMessage:"Create vector indexes to provide semantic search tools over unstructured data"}),path:S.R.getDbGuideUrl(A.Ay.VECTOR_SEARCH_URL),endActions:(0,r.Y)(c.$n,{href:S.R.getDbGuideUrl(A.Ay.VECTOR_SEARCH_URL),target:"_blank",rel:"noreferrer",size:"small",endIcon:(0,r.Y)(u.A,{}),componentId:"tools.home.link.vector-search.docs",children:(0,r.Y)(f.sA,{id:"R4H5Km",defaultMessage:"Learn more"})}),openInNewTab:!0,tags:[(0,r.Y)(f.sA,{id:"zyqAYV",defaultMessage:"RAG"},"rag"),(0,r.Y)(f.sA,{id:"VBHtJO",defaultMessage:"Embeddings"},"embeddings"),(0,r.Y)(f.sA,{id:"QUpe5U",defaultMessage:"Semantic Search"},"semantic-search")]},{id:"genie",name:t.formatMessage({id:"P6v3Wt",defaultMessage:"Genie"}),description:t.formatMessage({id:"D3C8kN",defaultMessage:"Create tools for flexible, AI-powered structured data retrieval across tables"}),path:S.R.getDbGuideUrl(A.Ay.GENIE_SPACE_CREATE),endActions:(0,r.Y)(c.$n,{href:S.R.getDbGuideUrl(A.Ay.GENIE_SPACE_CREATE),target:"_blank",rel:"noreferrer",size:"small",endIcon:(0,r.Y)(u.A,{}),componentId:"tools.home.link.genie.docs",children:(0,r.Y)(f.sA,{id:"RBLlxT",defaultMessage:"Learn more"})}),openInNewTab:!0,tags:[(0,r.Y)(f.sA,{id:"MYbG9N",defaultMessage:"Text-to-SQL"},"text-to-sql"),(0,r.Y)(f.sA,{id:"W3KzxP",defaultMessage:"Analytics"},"analytics"),(0,r.Y)(f.sA,{id:"54UOv+",defaultMessage:"Conversational AI"},"conversational-ai")]},{id:"external-mcp-servers",name:t.formatMessage({id:"y+atv8",defaultMessage:"External MCP Servers"}),description:t.formatMessage({id:"yeJIui",defaultMessage:"Use tools from external Model Context Protocol servers"}),path:S.R.getDbGuideUrl(A.Ay.AGENT_FRAMEWORK_EXTERNAL_MCP),endActions:(0,r.Y)(c.$n,{href:S.R.getDbGuideUrl(A.Ay.AGENT_FRAMEWORK_EXTERNAL_MCP),target:"_blank",rel:"noreferrer",size:"small",endIcon:(0,r.Y)(u.A,{}),componentId:"tools.home.link.external-mcp.docs",children:(0,r.Y)(f.sA,{id:"TPjKls",defaultMessage:"Learn more"})}),openInNewTab:!0,tags:[(0,r.Y)(f.sA,{id:"oWkW92",defaultMessage:"MCP"},"mcp"),(0,r.Y)(f.sA,{id:"cWl/01",defaultMessage:"External Tools"},"external-tools"),(0,r.Y)(f.sA,{id:"aJFHOc",defaultMessage:"Integration"},"integration")]}],[t]);return(0,r.FD)("div",{css:{display:"flex",flexDirection:"column",gap:k?a.spacing.lg:a.spacing.xs,minHeight:0,overflow:"hidden"},children:[(0,y.uY)()?null:k?(0,r.Y)(E,{}):(0,r.FD)(r.FK,{children:[(0,r.FD)(h.n,{componentId:"tools.home.accordion",defaultActiveKey:["create-new","discover"],alignContentToEdge:!0,children:[(0,r.Y)(h.n.Panel,{header:(0,r.Y)(o.o.Title,{level:4,css:{margin:0},children:(0,r.Y)(f.sA,{id:"cGCgXp",defaultMessage:"Create tools"})}),children:(0,r.Y)("div",{css:{display:"flex",gap:a.spacing.sm,flexWrap:"nowrap",overflowX:"auto",paddingBottom:a.spacing.sm},children:$.map(e=>(0,r.Y)("div",{css:{width:320,flex:"0 0 auto"},children:(0,r.Y)(eO,{...e})},e.id))})},"create-new"),O&&(0,r.FD)(r.FK,{children:[(0,r.Y)("hr",{css:{height:0,border:0,borderTop:`1px solid ${a.colors.border}`,margin:`${a.spacing.sm}px 0`}}),(0,r.Y)(h.n.Panel,{header:(0,r.Y)(o.o.Title,{level:4,css:{margin:0},children:(0,r.Y)(f.sA,{id:"Op+4no",defaultMessage:"Discover"})}),children:(0,r.Y)(I,{})},"discover")]})]}),(0,r.Y)("hr",{css:{height:0,border:0,borderTop:`1px solid ${a.colors.border}`,margin:`${a.spacing.sm}px 0`}})]}),(0,r.FD)("div",{css:{display:"flex",flexDirection:"column",gap:a.spacing.sm,flex:1,overflow:"hidden"},children:[(0,r.FD)("div",{css:{display:"flex",gap:a.spacing.sm,alignItems:"center"},children:[(0,r.Y)(m.p,{componentId:"tools.home.search",prefix:(0,r.Y)(p.A,{}),placeholder:t.formatMessage({id:"ZgXacc",defaultMessage:"Search Servers"}),value:s,onChange:e=>l(e.target.value),allowClear:!0,css:{maxWidth:400}}),(0,r.FD)(g.XA,{componentId:"tools.home.tool-type-filter",id:"tools.home.tool-type-filter",label:t.formatMessage({id:"NqYT46",defaultMessage:"Filter by type"}),value:d,onChange:e=>M(e.target.value),css:{width:"220px"},contentProps:{style:{minWidth:"220px"}},children:[(0,r.Y)(g.wS,{value:"all",children:(0,r.Y)(f.sA,{id:"NjDVGF",defaultMessage:"All Server Types"})}),(0,r.Y)(g.wS,{value:"external-api",children:(0,r.Y)(f.sA,{id:"TrRmTp",defaultMessage:"External API"})}),(0,r.Y)(g.wS,{value:"databricks-app",children:(0,r.Y)(f.sA,{id:"qNk+Dm",defaultMessage:"Databricks App"})}),(0,r.Y)(g.wS,{value:"vector-search",children:(0,r.Y)(f.sA,{id:"UBFErO",defaultMessage:"Vector Search Index"})}),(0,r.Y)(g.wS,{value:"genie-space",children:(0,r.Y)(f.sA,{id:"40fz0B",defaultMessage:"Genie Space"})}),(0,r.Y)(g.wS,{value:"uc-function",children:(0,r.Y)(f.sA,{id:"d3YQ4M",defaultMessage:"UC Function"})}),(0,r.Y)(g.wS,{value:"dbsql",children:(0,r.Y)(f.sA,{id:"uVRoOq",defaultMessage:"DBSQL MCP Server"})})]}),e&&(0,r.Y)("div",{css:{marginLeft:"auto"},children:e})]}),(0,r.Y)(X,{results:R,loading:T,error:_,fetchMore:D,canFetchMore:Y,networkStatus:x})]})]})}},465376:(e,t,a)=>{a.d(t,{F:()=>d,Hq:()=>h,XJ:()=>p,fY:()=>g,mD:()=>c,ol:()=>o,z4:()=>l,z8:()=>m});var r,i,n=a(497459),s=a(993533),l=((r={}).FUNCTION="FUNCTION",r.TABLE="TABLE",r.CONNECTION="CONNECTION",r.DATA_ROOM="DATA_ROOM",r.DBSQL="DBSQL",r.DATABRICKS_APP="DATABRICKS_APP",r),o=((i={}).SCHEMA_TOOLS="SCHEMA_TOOLS",i.SEARCH_API="SEARCH_API",i.UC_CONNECTIONS_API="UC_CONNECTIONS_API",i.STATIC="STATIC",i.DATABRICKS_APPS_API="DATABRICKS_APPS_API",i);let d=e=>e.ucEntityMetadata?.securableKind?.startsWith("CONNECTION_")??!1,c=e=>e.ucEntityMetadata?.securableKind==="DATABRICKS_APP",u={FUNCTION:{encodedType:"FUNCTION",isSchemaBasedTool:!0,dataSource:"SCHEMA_TOOLS",generateMcpUrl:({catalogName:e,schemaName:t},a)=>{if(!e||!t)return"";return`https://${a}/api/2.0/mcp/functions/${e}/${t}`},getLabel:e=>e.formatMessage({id:"Rji1pS",defaultMessage:"UC Functions"}),matches:e=>e.resultType===s.iId.FUNCTION&&!!(e.ucEntityMetadata?.catalogName&&e.ucEntityMetadata?.schemaName)},TABLE:{encodedType:"TABLE",isSchemaBasedTool:!0,dataSource:"SCHEMA_TOOLS",generateMcpUrl:({catalogName:e,schemaName:t},a)=>{if(!e||!t)return"";return`https://${a}/api/2.0/mcp/vector-search/${e}/${t}`},getLabel:e=>e.formatMessage({id:"C3lbSa",defaultMessage:"Vector Search Indexes"}),matches:e=>e.resultType===s.iId.TABLE&&!!(e.ucEntityMetadata?.catalogName&&e.ucEntityMetadata?.schemaName)},CONNECTION:{encodedType:"CONNECTION",isSchemaBasedTool:!1,dataSource:"UC_CONNECTIONS_API",generateMcpUrl:({id:e},t)=>(0,n.$)()?`https://${t}/api/2.0/ai-gateway/connections/${e}`:`https://${t}/api/2.0/mcp/external/${e}`,getLabel:e=>e.formatMessage({id:"h83xSH",defaultMessage:"External API"}),matches:e=>d(e)},DATA_ROOM:{encodedType:"DATA_ROOM",isSchemaBasedTool:!1,dataSource:"SEARCH_API",generateMcpUrl:({id:e},t)=>`https://${t}/api/2.0/mcp/genie/${e}`,getLabel:e=>e.formatMessage({id:"PgUdOZ",defaultMessage:"Genie Space"}),matches:e=>e.resultType===s.iId.DATA_ROOM},DBSQL:{encodedType:"DBSQL",isSchemaBasedTool:!1,dataSource:"STATIC",generateMcpUrl:(e,t)=>`https://${t}/api/2.0/mcp/sql`,getLabel:e=>e.formatMessage({id:"M/Lq6f",defaultMessage:"DBSQL MCP Server"}),matches:()=>!1,staticMetadata:{displayName:"DBSQL MCP Server",owner:"Databricks"}},DATABRICKS_APP:{encodedType:"DATABRICKS_APP",isSchemaBasedTool:!1,dataSource:"DATABRICKS_APPS_API",generateMcpUrl:()=>"",getLabel:e=>e.formatMessage({id:"Dr7j8/",defaultMessage:"Databricks App Server"}),matches:e=>c(e)}},h=e=>{if(!e||!(e in u))return null;return u[e]},m=e=>{let t,a;if(!e)return{actualId:"",encodedType:null,isSchemaBasedTool:!1};let r=e.lastIndexOf(":"),i=e.substring(0,r),n=e.substring(r+1),s=h(n),l=s?.isSchemaBasedTool??!1;if(l){let e=i.split(".");2===e.length&&(t=e[0],a=e[1])}return{actualId:i,encodedType:n,isSchemaBasedTool:l,catalogName:t,schemaName:a}},p=e=>{let t=(e=>{for(let t of Object.values(u))if(t.matches(e))return t;return null})(e);if(!t)return e.id??"";if(t.isSchemaBasedTool&&e.ucEntityMetadata?.catalogName&&e.ucEntityMetadata?.schemaName)return`${e.ucEntityMetadata.catalogName}.${e.ucEntityMetadata.schemaName}:${t.encodedType}`;return`${e.id??""}:${t.encodedType}`},g=(e,t,a,r)=>{let i=h(e.encodedType);if(!i||!t)return"";if("DATABRICKS_APP"===e.encodedType&&r)return`${r.replace(/\/$/,"")}/mcp`;let n="CONNECTION"===e.encodedType&&a?a:e.actualId;return i.generateMcpUrl({id:n,catalogName:e.catalogName,schemaName:e.schemaName},t)}},605107:(e,t,a)=>{a.d(t,{X:()=>n});var r=a(610435),i=a(497895);let n=({children:e,...t})=>{let{theme:a}=(0,i.wn)();return(0,r.Y)("div",{...t,css:{display:"flex",flexDirection:"row",alignItems:"flex-start",padding:`${a.spacing.xs}px ${a.spacing.lg/2}px`,alignSelf:"stretch",fontWeight:400,color:a.colors.textSecondary},children:e})}},646139:(e,t,a)=>{a.d(t,{T:()=>l});var r=a(692738),i=a(441535),n=a(913546);let s=e=>{if(!(0,i.W)("databricks.fe.genai.apps-prefix-list-filter",!0))return!1;return e.name.startsWith("agent-")},l=({enabled:e=!0}={})=>{let{data:t,isLoading:a,error:i}=(0,n.Pv)({options:{refetchOnWindowFocus:!1,enabled:e}});return{data:(0,r.useMemo)(()=>t?.filter(s),[t]),isLoading:a,error:i??void 0}}},681642:(e,t,a)=>{a.d(t,{Item:()=>f,List:()=>g,Root:()=>u});var r=a(610435),i=a(271223),n=a(91958),s=a.n(n),l=a(692738),o=a(497895),d=a(325048),c=a(639712);let u=l.forwardRef((e,t)=>(0,r.Y)(i.bL,{...e,ref:t})),h=s()(e=>({...(0,d.c)(e),marginTop:0,padding:0,overflow:"auto hidden",listStyle:"none"})),m=s()((e,t)=>({...(0,d.s)(e),height:e.general.heightSm,minWidth:e.spacing.lg,justifyContent:"center",...t&&{boxShadow:`inset 0 -4px 0 ${e.colors.actionPrimaryBackgroundDefault}`}}),(e,t)=>`${(0,c.H6)(e)}|${t}`),p=s()((e,t)=>({padding:`${e.spacing.xs}px 0 ${e.spacing.sm}px 0`,"&:focus":{outline:`2px auto ${e.colors.actionDefaultBorderFocus}`,outlineOffset:"-1px"},"&&":{color:t?e.colors.textPrimary:e.colors.textSecondary,textDecoration:"none","&:hover":{color:t?e.colors.textPrimary:e.colors.actionDefaultTextHover,textDecoration:"none"},"&:focus":{textDecoration:"none"},"&:active":{color:t?e.colors.textPrimary:e.colors.actionDefaultTextPress}}}),(e,t)=>`${(0,c.H6)(e)}|${t}`),g=l.forwardRef((e,t)=>{let{theme:a}=(0,o.wn)();return(0,r.Y)(i.B8,{css:h(a),...e,ref:t})}),f=l.forwardRef(({children:e,active:t,...a},n)=>{let{theme:s}=(0,o.wn)();return(0,r.Y)(i.q7,{css:m(s,!!t),...a,ref:n,children:(0,r.Y)(i.N_,{asChild:!0,active:t,css:p(s,!!t),children:e})})})},939578:(e,t,a)=>{a.d(t,{y:()=>s});var r=a(610435),i=a(545251),n=a(605107);let s=({children:e,...t})=>{let{isInsideDialogCombobox:a}=(0,i.w)();if(!a)throw Error("`DialogComboboxSectionHeader` must be used within `DialogCombobox`");return(0,r.Y)(n.X,{...t,children:e})}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/56439.c471aad7ab.chunk.js.map