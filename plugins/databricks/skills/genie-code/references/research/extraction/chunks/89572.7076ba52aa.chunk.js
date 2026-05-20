"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[30355,89572],{26446:(e,t,r)=>{r.d(t,{HT:()=>c,M8:()=>u,Pf:()=>l,bp:()=>o,gb:()=>a,iN:()=>d,pP:()=>i,xB:()=>p});let a=1e3,i={enableAccountGroups:!1,enableAccountServicePrincipals:!1,enableAccountUsers:!1,enableWorkspaceGroups:!1,enableWorkspaceServicePrincipals:!1,enableWorkspaceUsers:!1},s=/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,n={admins:"Admins",users:"All workspace users","account users":"All account users"},l=e=>{if(!e)return e;return n[e]??e},o=e=>{let t=new Map;return e.forEach(e=>{let r=c(e)||e.name;t.has(r)||t.set(r,[]),t.get(r)?.push(e)}),t},d=e=>{switch(e.kind){case"user":return e.fullName;case"serviceprincipal":return e.name;case"group":return e.displayName;default:return""}},c=e=>{switch(e.kind){case"user":case"group":return e.name||"";case"serviceprincipal":return e.applicationId||"";default:return""}},u=({uniqueName:e,id:t,kind:r,displayName:a})=>{switch(r){case"user":return{id:t||"",optionId:`user.${t}`,kind:r,name:e||"",fullName:a||"",title:""};case"serviceprincipal":return{id:t||"",optionId:`serviceprincipal.${t}`,kind:r,name:a||"",applicationId:e||"",title:""};case"group":return{id:t||"",optionId:`group.${t}`,kind:r,name:e||"",displayName:l(e||""),title:""};default:return}};function p(e){return e?s.test(e)?"serviceprincipal":"user":void 0}},109239:(e,t,r)=>{r.r(t),r.d(t,{QueriesListPage:()=>em,QueryPageViewType:()=>ea.v9,RouteComponent:()=>ey,queriesPageMessages:()=>ea.yo,queryPageUrls:()=>ea.yd});var a=r(610435),i=r(200356),s=r(499348),n=r(811747),l=r(506245),o=r(397161),d=r(162441),c=r(128835),u=r(784216),p=r(393257),f=r(605321),g=r(732735),m=r(881601),h=r(441535),v=r(820628),y=r(720022);r(692738);var _=r(913573),A=r(553559),b=r(555040),I=r(426495),w=r(348773),Y=r(514116),x=r(232207),C=r(226646),S=r(596859),M=r(533397),P=r(688789),k=r(924636),$=r(79570),T=r(325056),R=r(293418),D=r(314775),q=r(59723),F=r(84008),L=r(262786),U=r(52430),z=r(764236),E=r(90710),N=r(804584),G=r(433858),W=r(342411),V=r(562777),H=r(217930),B=r(960369),Q=r(5697),O=r(109581),j=r(483588),J=r(585497),K=r(488655),X=r(338308),Z=r(26446),ee=r(419847),et=r(702067),er=r(637468),ea=r(355148),ei=r(142462);let es=({type:e})=>(0,a.Y)(J.v,{componentId:"codegen_redash_app_src_app_pages_queries-list_querieslist.tsx_64",to:ee.G0.landingPage(),type:e,children:(0,a.Y)(W.sA,{id:"Qewv3J",defaultMessage:"Open editor"})}),en={filterInputPlaceholder:(0,W.zR)({id:"fCFZeZ",defaultMessage:"Filter queries"})},el=({controller:e,currentPage:t})=>{let r=new Set([ea.v9.all,ea.v9.admin]),{migrateBatchSelectColumn:i,someRowsSelected:s,migrateButton:n,pageItems:l,workspaceBatchMigrateContext:o}=(0,S.O)({pageItems:e.pageItems,nodeType:Q.Z6.Query}),d=(0,W.tz)(),c="admin"===e.params.currentPage,u=e.isLoaded&&0===l.length,f=!e.isLoaded,g=(0,K.Zp)(),m=r.has(t),v=!!(e.selectedTags.length>0||e.searchTerm),J=l.length+(e.page-1)*e.itemsPerPage,el=[{id:"favorites",header:"",cell:({row:e})=>e.original.result_from_search||(0,ei.P_)(e.original)?(0,a.Y)(V.k,{source:H.ek.QueryListTable,asset:{id:e.original.id,type:j.z$1.QUERY},showLoadingIndicator:!0,preloadedAssetFavoriteStatus:e.original.is_favorite}):null,meta:{styles:{maxWidth:"fit-content",minWidth:40}}},{id:"name",header:()=>(0,a.Y)(W.sA,{id:"ChCdht",defaultMessage:"Name"}),accessorFn:e=>e.name,cell:({row:{original:e}})=>e.result_from_search||(0,ei.P_)(e)?(0,a.Y)(_.A,{componentId:"codegen_redash_app_src_app_pages_queries-list_querieslist.tsx_124",href:ee.G0.queryEditor({queryUuid:e.id}),noBasePath:!0,"data-testid":`QueryId${e.id}`,children:e.name}):(0,a.Y)($.m,{componentId:"redash.queries.notMigrated.tooltip",content:(0,a.Y)("span",{children:d.formatMessage({id:"bMNSjK",defaultMessage:"This query is not migrated to workspace, please contact Databricks support. Query ID: {id}"},{id:e.id})}),children:(0,a.Y)("span",{children:e.name})}),meta:{styles:{flexGrow:4,minWidth:A.i.name},sortable:!0}},{id:"tags",header:()=>(0,a.Y)(W.sA,{id:"5/zoDD",defaultMessage:"Tags"}),accessorFn:e=>e.tags,cell:({row:{original:e}})=>(0,a.Y)(x.C,{tags:e.tags??[],children:(0,a.Y)(M.zu,{tags:e.tags,isDraft:e.is_draft,isArchived:e.is_archived,isAdminPage:c})}),meta:{styles:{flexGrow:1,minWidth:A.i.tags},ellipsis:!1}},{id:"user",header:()=>(0,a.Y)(W.sA,{id:"XXkmK+",defaultMessage:"Created by"}),accessorFn:e=>e.user?.name,cell:({row:{original:e}})=>(0,a.Y)(X.P,{subject:(0,Z.M8)({uniqueName:e.user?.email,id:e.user?.id.toString(),kind:(0,Z.xB)(e.user?.email),displayName:e.user?.name}),defaultLabel:e.user?.email}),meta:{styles:{flexGrow:1,minWidth:A.i.user},sortable:!1}},{id:"created_at",header:()=>(0,a.Y)(W.sA,{id:"KFCZa0",defaultMessage:"Created at"}),accessorFn:e=>e.created_at,cell:({row:{original:e}})=>(0,P.r6)(e.created_at,d),meta:{styles:{flexGrow:1,minWidth:A.i.date},sortable:!0}}];i&&el.unshift({...i,meta:{styles:{flexGrow:0,flexShrink:0,minWidth:A.i.checkbox}}});let eo=(0,O.Lb)("redash/managed_redash/packages/app/src/app/pages/queries-list/QueriesList.tsx",{data:l||[],columns:el,getCoreRowModel:(0,y.HT)(),autoResetPageIndex:!1});function ed(e){return e?.styles||{}}let ec=[n,(0,a.Y)(es,{},"open_editor_button"),(0,a.Y)(et.f,{type:"primary"},"create_query_button")],eu=k.M3;return(0,a.FD)(U.f,{css:{height:"100%"},children:[o,(0,a.FD)("div",{css:{display:"flex",flexDirection:"column",height:"100%"},"data-testid":e.isLoaded?"LoadedQueryLayoutContent":"LoadingQueryLayoutContent",children:[(0,a.Y)(z.h,{shrinks:!1},"spacer_1"),(0,a.Y)(E.Y,{title:d.formatMessage(ea.yo.queries),buttons:ec}),(0,a.Y)(z.h,{shrinks:!1},"spacer_2"),(0,a.FD)(N.R,{children:[(0,a.Y)(I.l,{componentId:"redash.queries_list.filter_input",placeholder:d.formatMessage(en.filterInputPlaceholder),searchTerm:e.searchTerm,updateSearch:e.updateSearch,"aria-label":d.formatMessage(en.filterInputPlaceholder)}),(0,a.FD)(G.d,{componentId:"codegen_redash_app_src_app_pages_queries-list_querieslist.tsx_321",name:"query-page-view-type",value:t,onChange:e=>{let t=e.target.value;g(ea.yd[t])},children:[(0,a.Y)(G.E,{value:ea.v9.my,children:(0,a.Y)(W.sA,{id:"2o/x1T",defaultMessage:"My queries"})}),(0,a.Y)(G.E,{value:ea.v9.favorites,children:(0,a.Y)(W.sA,{id:"ACfgf7",defaultMessage:"Favorites"})}),(0,a.Y)(G.E,{value:ea.v9.all,children:(0,a.Y)(W.sA,{id:"wpc02Y",defaultMessage:"All queries"})}),!(0,h.W)("databricks.fe.redash.removeAdminView",!1)&&p.N.isAdmin&&(0,a.Y)(G.E,{value:ea.v9.admin,children:(0,a.Y)(W.sA,{id:"hYg3gq",defaultMessage:"Admin view"})})]}),m&&(0,a.Y)(C.G,{apiUrl:eu,onChange:e.updateSelectedTags,values:e.selectedTags}),v&&(0,a.FD)(a.FK,{children:[e.isLoaded&&(0,a.Y)(w.Y,{count:J,hasNextPage:e.hasNextPage||!1}),(0,a.Y)(Y.$,{onClick:function(){e.updateSelectedTags([]),e.updateSearch(""),g(ea.yd[ea.v9.all])}})]})]}),(0,a.Y)("div",{css:{minHeight:"0%",width:"100%",minWidth:"100%"},children:(0,a.FD)(T.X,{pagination:(0,a.Y)(b.D,{controller:e}),empty:u&&(0,a.Y)(er.i,{canCreate:!0,hasFilters:!!e.searchTerm||e.selectedTags?.length>0,pageType:t}),someRowsSelected:s,scrollable:!0,children:[(0,a.Y)(R.H,{isHeader:!0,children:eo.getFlatHeaders().map(t=>{let r=t.column.columnDef.meta;return(0,a.Y)(D.A,{componentId:"codegen_redash_app_src_app_pages_queries-list_querieslist.tsx_259",sortable:r?.sortable,ellipsis:r?.ellipsis!==!1,style:ed(r),sortDirection:r?.sortable?function(t){if(e.orderByField===t)return e.orderByReverse?"desc":"asc";return"none"}(t.id):void 0,onToggleSort:r?.sortable?()=>e.toggleSorting(t.id):void 0,children:t.column.columnDef.header instanceof Function&&t.column.columnDef.header(t.getContext())},t.id)})}),!f&&eo.getRowModel().rows.map(e=>(0,a.Y)(R.H,{"data-testid":`QueryRow${e.original.id}`,css:{[`&:not(:hover) .${B.pK}`]:q.Q,minHeight:37},children:e.getAllCells().map(e=>{let t=e.column.columnDef.meta;return(0,a.Y)(F.n,{ellipsis:t?.ellipsis!==!1,style:ed(t),children:(0,A.T)(e)},e.id)})},e.id)),f&&(0,a.Y)(L.B,{table:eo})]})})]})]})};var eo=r(141078);let ed=(0,eo.J1)`
  query SearchQueries(
    $query: SearchmidtierSearchUnifiedQueryInput
    $filters: SearchmidtierSearchUnifiedFiltersInput
    $sortOrder: SearchmidtierSearchUnifiedSortOrderInput
    $pageSize: Int
    $pageToken: String
    $isFavoritesEnabled: Boolean = false
    $searchId: String
  ) @component(name: "ServingInfra.DBSQLUIService") {
    searchmidtierSearchUnifiedSearch(
      input: {
        query: $query
        filters: $filters
        sortOrder: $sortOrder
        pageSize: $pageSize
        pageToken: $pageToken
        searchId: $searchId
        sourceInfo: { sourceId: QUERY_LISTING_PAGE }
      }
    ) {
      apiError {
        code
        message
      }
      nextPageToken
      results {
        id
        name
        updatedAt
        createdAt
        resultType
        owner {
          id
          fullname
          email
        }
        userActivityInfo @include(if: $isFavoritesEnabled) {
          assetType
          assetId
          isFavorite
        }
        tags {
          name
          value
        }
      }
    }
  }
`;var ec=r(403286),eu=r(753480);function ep(e){return{id:e.id??"",name:e.name??"",description:"",query:"",options:{},is_dirty:!1,is_draft:!1,is_archived:!1,is_favorite:e.userActivityInfo?.isFavorite??!1,is_safe:!0,can_edit:!1,tags:e.tags?.map(e=>e.name??"").filter(Boolean)??[],created_at:Number(e.createdAt??0),updated_at:Number(e.updatedAt??0),user:{id:Number(e.owner?.id??0),name:e.owner?.fullname??"",email:e.owner?.email??""},result_from_search:!0}}let ef=(0,d.L)(el,()=>new c.d({getResource({params:e}){let t=e.currentPage;return({all:m.c.queryV2.bind(m.c),admin:m.c.adminQueriesV2.bind(m.c),my:m.c.myQueriesV2.bind(m.c),favorites:m.c.favoritesV2.bind(m.c)})[t]},getItemProcessor:()=>e=>new g.X(e)}),()=>new u.Aq({orderByField:"created_at",orderByReverse:!0})),eg=(0,d.L)(el,()=>new c.d({isCursorPagination:!0,getResource({params:e}){let t=e.currentPage;return e=>{let r=(0,f.H4)(),a={query:{query:e.q||"",searchFields:["name"]},filters:{resultTypes:[i.iId.QUERY],...t===ea.v9.my&&null!=p.N.id&&{ownerIds:[p.N.id.toString()]},...t===ea.v9.favorites&&{isFavorite:!0},...e.tags?.length>0&&{tagsFilter:{booleanExpression:{operands:e.tags.map(e=>({tag:{tagName:e}})),operator:i.a69.AND}}}},sortOrder:(0,eu.b)(e.order_by),pageSize:e.page_size,pageToken:e.page_token||void 0,isFavoritesEnabled:!0};return r.query({query:ed,variables:a,fetchPolicy:"no-cache"}).then(e=>{let t=e.data?.searchmidtierSearchUnifiedSearch;return{results:t?.results?.map(ep)??[],next_page_token:t?.nextPageToken??null}})}}}),()=>new u.Aq({orderByField:"created_at",orderByReverse:!0})),em=e=>{let t=e.currentPage;if((0,h.W)("databricks.fe.redash.removeAdminView",!1)&&t===ea.v9.admin)return(0,a.Y)(o.r,{to:ec.Qf[ec.x6.QUERIES_LIST_ALL]});if((0,h.W)("databricks.fe.redash.queriesListSearchEnabled",!1))return(0,a.Y)(eg,{...e},t);return(0,a.Y)(ef,{...e},t)},eh={[ec.x6.QUERIES_LIST]:ea.v9.my,[ec.x6.QUERIES_LIST_MY]:ea.v9.my,[ec.x6.QUERIES_LIST_ALL]:ea.v9.all,[ec.x6.QUERIES_LIST_FAVORITES]:ea.v9.favorites,[ec.x6.QUERIES_LIST_ADMIN]:ea.v9.admin},ev={[ea.v9.all]:ea.yo.queries,[ea.v9.my]:ea.yo.myQueries,[ea.v9.favorites]:ea.yo.favoriteQueries,[ea.v9.admin]:ea.yo.adminView};function ey(){let e=(0,v.UA)(),t=eh[e?.[0].pageId]??ea.v9.my;return(0,l.n)(ev[t]),(0,a.Y)(n.g,{children:(0,a.Y)(s.A,{children:(0,a.Y)(em,{currentPage:t})})})}},161926:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(610435),i=r(692738),s=r(375214);function n(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a5 5 0 0 0-5 5v1.99c0 .674-.2 1.332-.573 1.892l-1.301 1.952A.75.75 0 0 0 1.75 13h3.5v.25a2.75 2.75 0 1 0 5.5 0V13h3.5a.75.75 0 0 0 .624-1.166l-1.301-1.952A3.4 3.4 0 0 1 13 7.99V6a5 5 0 0 0-5-5m1.25 12h-2.5v.25a1.25 1.25 0 1 0 2.5 0zM4.5 6a3.5 3.5 0 1 1 7 0v1.99c0 .97.287 1.918.825 2.724l.524.786H3.15l.524-.786A4.9 4.9 0 0 0 4.5 7.99z",clipRule:"evenodd"})})}let l=(0,i.forwardRef)((e,t)=>(0,a.Y)(s.I,{ref:t,...e,component:n}));l.displayName="NotificationIcon";let o=l},226646:(e,t,r)=>{r.d(t,{G:()=>f});var a=r(610435);r(692738);var i=r(994393),s=r(882102),n=r(236574),l=r(932284),o=r(382831),d=r(999785),c=r(848737),u=r(930355),p=r(342411);let f=({apiUrl:e,onChange:t,values:r})=>{let f=(0,p.tz)(),{data:g}=(({url:e})=>(0,i.useQuery)({queryKey:["tags_list",e],queryFn:()=>(0,s.A)(e),staleTime:3e5}))({url:e}),m=f.formatMessage({id:"YEbMDW",defaultMessage:"Tags"});function h(e){r.includes(e)?t(r.filter(t=>t!==e)):t([...r,e])}return(0,a.FD)(n.A,{componentId:"codegen_redash_app_src_app_components_table_tagsfilter.tsx_44",label:m,value:r,multiSelect:!0,children:[(0,a.Y)(l.g,{onClear:()=>{t(Array.from(new Set))}}),(0,a.Y)(o.d,{maxHeight:300,loading:void 0===g,children:(0,a.Y)(d.H,{children:(0,a.Y)(c.d,{children:(g||[]).map(e=>(0,a.FD)(u.j,{value:e.name,onChange:h,checked:r.includes(e.name),children:[e.name," ",!!e.count&&`(${e.count})`]},e.name))})})})]})}},232207:(e,t,r)=>{r.d(t,{C:()=>l});var a=r(610435),i=r(956935),s=r(802582);let n=(0,i.AH)({".tags-control":{flexWrap:"nowrap"}}),l=({children:e,tags:t})=>{if(t.length>1)return(0,a.Y)(s.p,{title:t.join(", "),placement:"topLeft",children:(0,a.Y)("div",{css:n,children:e})});return(0,a.Y)("div",{css:n,children:e})}},295423:(e,t,r)=>{r.d(t,{f:()=>d});var a=r(692738),i=r(671244),s=r(653542),n=r(49586),l=r(209908);let o=50,d=({enableAccountGroups:e=!1,enableAccountServicePrincipals:t=!1,enableAccountUsers:r=!1,enableWorkspaceGroups:d=!0,enableWorkspaceServicePrincipals:c=!0,enableWorkspaceUsers:u=!0,filterText:p="",principalIdsForFiltering:f=[],principalUniqueNamesForFiltering:g=[],limit:m=o,useLite:h,skip:v=!1,isCache:y=!1}={})=>{let _=(0,l.VM)({ids:f,uniqueNames:g}),A=(0,l.L5)({ids:f,uniqueNames:g}),{subjects:b,isLoading:I,error:w,hasNextPage:Y}=(0,n.zo)({source:"account",filter:p,filterPredicate:_,first:m,skip:!r||v,useLite:h,isCache:y}),{subjects:x,isLoading:C,error:S,hasNextPage:M}=(0,i.Bi)({source:"account",filter:p,filterPredicate:A,first:m,skip:!e||v,useLite:h,isCache:y}),{subjects:P,isLoading:k,error:$,hasNextPage:T}=(0,s.Q_)({source:"account",filter:p,filterPredicate:_,first:m,skip:!t||v,useLite:h,isCache:y}),{subjects:R,isLoading:D,error:q,hasNextPage:F}=(0,n.zo)({source:"workspace",filter:p,filterPredicate:_,first:m,skip:!u||v,useLite:h,isCache:y}),{subjects:L,isLoading:U,error:z,hasNextPage:E}=(0,i.Bi)({source:"workspace",filter:p,filterPredicate:A,first:m,skip:!d||v,useLite:h,isCache:y}),{subjects:N,isLoading:G,error:W,hasNextPage:V}=(0,s.Q_)({source:"workspace",filter:p,filterPredicate:_,first:m,skip:!c||v,useLite:h,isCache:y}),H=(0,a.useMemo)(()=>{let t=[...L,...x];if(e&&d)return t.filter((e,t,r)=>t===r.findIndex(t=>t.id===e.id));return t},[x,e,d,L]),B=(0,a.useMemo)(()=>{let e=[...N,...P];if(t&&c)return e.filter((e,t,r)=>t===r.findIndex(t=>t.id===e.id));return e},[P,t,c,N]),Q=(0,a.useMemo)(()=>{let e=[...R,...b];if(r&&u)return e.filter((e,t,r)=>t===r.findIndex(t=>t.id===e.id));return e},[b,r,u,R]),{subjects:O,hasNextPage:j}=(0,a.useMemo)(()=>(0,l.GF)(p,m,H,B,Q),[p,m,H,B,Q]),J=(0,a.useMemo)(()=>({accountGroups:C,accountServicePrincipals:k,accountUsers:I,groups:U,servicePrincipals:G,users:D,some:C||k||I||U||G||D}),[C,k,I,U,G,D]),K=(0,a.useMemo)(()=>({accountGroups:S??null,accountServicePrincipals:$??null,accountUsers:w??null,groups:z??null,servicePrincipals:W??null,users:q??null}),[S,$,w,z,W,q]);return{allSubjectsMap:(0,a.useMemo)(()=>(0,l.ne)(H,B,Q),[H,B,Q]),errors:K,hasNextPage:!!(O.length===m&&(Y||M||T||F||E||V)||j),isLoading:J,subjects:O}}},319241:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(610435),i=r(692738),s=r(375214);function n(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M2 1.75A.75.75 0 0 1 2.75 1h6a.75.75 0 0 1 .53.22l4.5 4.5c.141.14.22.331.22.53v9a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1-.75-.75zm1.5.75v12h9V7H8.75A.75.75 0 0 1 8 6.25V2.5zm6 1.06 1.94 1.94H9.5z",clipRule:"evenodd"})})}let l=(0,i.forwardRef)((e,t)=>(0,a.Y)(s.I,{ref:t,...e,component:n}));l.displayName="FileIcon";let o=l},338308:(e,t,r)=>{r.d(t,{P:()=>m,t:()=>h});var a=r(610435);r(692738);var i=r(497895),s=r(382908),n=r(77959),l=r(79570),o=r(802582),d=r(295169),c=r(342411),u=r(742259),p=r(26446),f=r(929117),g=r(691069);let m=({subject:e,defaultLabel:t,showIcon:r=!0,tooltipPlacement:d="top",showTooltip:u=!0,customTooltipContent:f,textProps:m,disableLegacy:h=!1,tooltipSide:y="top",defaultIconKind:_,...A})=>{let{theme:b}=(0,i.wn)(),I=(0,c.tz)(),w={color:b.colors.textSecondary,alignItems:"center",display:"flex",justifyContent:"center"},Y=e?(0,p.iN)(e):t||"",x=e&&(0,p.HT)(e),C=f??(e&&x&&(0,a.Y)(v,{kind:e.kind,displayName:Y,uniqueName:x})),S=(0,a.Y)(s.o.Text,{...m,children:Y||x}),M=!f&&(!e||"group"===e.kind||!u),P=e?.kind||_,k=(0,a.FD)("div",{css:{display:"flex",gap:b.spacing.xs,alignItems:"center",alignSelf:"center",maxWidth:"fit-content",...!M&&{"&:hover":{cursor:"pointer"}}},...A,children:[r&&t?P?(0,a.Y)(g.C,{kind:P,style:w}):(0,a.Y)(n.A,{title:I.formatMessage({id:"XJ8Qku",defaultMessage:"Generic Principal"}),css:w}):null,S]});if(M)return(0,a.Y)(a.FK,{children:k});return h?(0,a.Y)(l.m,{componentId:"codegen_web-shared_src_subject-label_principallabel.tsx_97",side:y,content:C,children:k}):(0,a.Y)(o.p,{placement:d,title:C,children:k})},h=({uniqueName:e,showIcon:t=!0,tooltipPlacement:r="top",accountPrincipalOnly:i=!1,onNameCollision:s,loadingElement:n,useCache:l,disableLegacyPrincipleLabelTooltip:o=!1,loadingStateOnlyForUuidName:p=!1,defaultIconKind:g})=>{let{isLoading:h,uniqueNameToSubjectsMap:v}=(0,u.v)({enableAccountUsers:i,enableAccountServicePrincipals:i,enableAccountGroups:!0,enableWorkspaceUsers:!i,enableWorkspaceServicePrincipals:!i,enableWorkspaceGroups:!i,useLite:!0,principalUniqueNamesForFiltering:[e],isCache:l}),y=!RegExp("^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$").test(e)&&p,_=!Object.values(h).every(e=>!1===e);if(!v.has(e)&&!y&&_)return n??(0,a.Y)(d.x,{loadingDescription:f.z.RICH_SERVICE_PRINCIPAL});{let i=v.get(e),n=i?.length===1?i?.[0]:void 0;return i&&i.length>1&&s?.(),(0,a.Y)(m,{subject:n,defaultLabel:e,showIcon:t,tooltipPlacement:r,customTooltipContent:y&&_?(0,a.Y)(c.sA,{id:"uUqfrP",defaultMessage:"Loading subject display name ..."}):void 0,disableLegacy:o,defaultIconKind:g})}},v=({kind:e,displayName:t,uniqueName:r})=>{if("group"===e)return null;let i="serviceprincipal"===e;return t?(0,a.Y)(c.sA,{id:"suqEOj",defaultMessage:"{isSP, select, true {Service principal's UUID} other {User's email}}: {username}",values:{isSP:i,username:r}}):i?(0,a.Y)(c.sA,{id:"Au1O0S",defaultMessage:"This service principal doesn't have a display name"}):(0,a.Y)(c.sA,{id:"Ie1iLy",defaultMessage:"This user did not configure their full name"})}},342145:(e,t,r)=>{r.d(t,{$y:()=>u,B_:()=>b,FQ:()=>m,OD:()=>l,T4:()=>n,U1:()=>h,UX:()=>f,Yu:()=>y,bB:()=>s,cC:()=>g,k0:()=>i,nU:()=>d,sO:()=>A,sh:()=>c,wp:()=>o,xY:()=>p,xe:()=>_,zD:()=>v});var a=r(141078);let i=(0,a.J1)`
  query allWorkspaceUsers__deduped($first: Int!, $after: String, $filter: String)
  @component(name: "IdentityMgmt.UserGroup") {
    allWorkspaceUsers(first: $first, after: $after, filter: $filter) {
      users {
        email
        fullname
        id
        isIndirect
        isServicePrincipal
        isWorkspaceAdmin
        status
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,s=(0,a.J1)`
  query allWorkspaceUsersLite($first: Int!, $after: String, $filter: String)
  @component(name: "IdentityMgmt.UserGroup") {
    allWorkspaceUsers(first: $first, after: $after, filter: $filter) {
      users {
        email
        fullname
        id
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,n=(0,a.J1)`
  query allWorkspaceServicePrincipals__deduped($first: Int!, $after: String, $filter: String)
  @component(name: "IdentityMgmt.UserGroup") {
    allWorkspaceServicePrincipals(first: $first, after: $after, filter: $filter) {
      users {
        applicationId: email
        fullname
        id
        isIndirect
        isServicePrincipal
        isWorkspaceAdmin
        status
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,l=(0,a.J1)`
  query allWorkspaceServicePrincipalsLite($first: Int!, $after: String, $filter: String)
  @component(name: "IdentityMgmt.UserGroup") {
    allWorkspaceServicePrincipals(first: $first, after: $after, filter: $filter) {
      users {
        applicationId: email
        fullname
        id
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,o=(0,a.J1)`
  query allWorkspaceGroups($first: Int!, $after: String, $filter: String) @component(name: "IdentityMgmt.UserGroup") {
    allWorkspaceGroups(first: $first, after: $after, filter: $filter) {
      groups {
        id
        groupname
        isWorkspaceLocal
        membersCount
        isExternal
        isIndirect
        exclusivityType
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,d=(0,a.J1)`
  query allWorkspaceGroupsLite($first: Int!, $after: String, $filter: String)
  @component(name: "IdentityMgmt.UserGroup") {
    allWorkspaceGroups(first: $first, after: $after, filter: $filter) {
      groups {
        id
        groupname
        isWorkspaceLocal
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,c=(0,a.J1)`
  query allAccountUsers($first: Int!, $after: String, $filter: String, $filterAdmin: Boolean)
  @component(name: "IdentityMgmt.UserGroup") {
    allAccountUsers(first: $first, after: $after, filter: $filter, filterAdmin: $filterAdmin) {
      users {
        email
        fullname
        id
        isAccountAdmin
        isServicePrincipal
        status
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,u=(0,a.J1)`
  query allAccountUsersLite($first: Int!, $after: String, $filter: String) @component(name: "IdentityMgmt.UserGroup") {
    allAccountUsers(first: $first, after: $after, filter: $filter) {
      users {
        email
        fullname
        id
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,p=(0,a.J1)`
  query allAccountServicePrincipals($first: Int!, $after: String, $filter: String, $filterAdmin: Boolean)
  @component(name: "IdentityMgmt.UserGroup") {
    allAccountServicePrincipals(first: $first, after: $after, filter: $filter, filterAdmin: $filterAdmin) {
      users {
        applicationId: email
        fullname
        id
        isAccountAdmin
        isServicePrincipal
        status
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,f=(0,a.J1)`
  query allAccountServicePrincipalsLite($first: Int!, $after: String, $filter: String)
  @component(name: "IdentityMgmt.UserGroup") {
    allAccountServicePrincipals(first: $first, after: $after, filter: $filter) {
      users {
        applicationId: email
        fullname
        id
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,g=(0,a.J1)`
  query allAccountGroups($first: Int!, $after: String, $filter: String) @component(name: "IdentityMgmt.UserGroup") {
    allAccountGroups(first: $first, after: $after, filter: $filter) {
      groups {
        id
        groupname
        membersCount
        isExternal
        externalId
        exclusivityType
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,m=(0,a.J1)`
  query allAccountGroupsLite($first: Int!, $after: String, $filter: String) @component(name: "IdentityMgmt.UserGroup") {
    allAccountGroups(first: $first, after: $after, filter: $filter) {
      groups {
        id
        groupname
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        numItemsTotal
        startCursor
      }
    }
  }
`,h=(0,a.J1)`
  query getAccountUsersCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountUsersCount {
      totalCount
    }
  }
`,v=(0,a.J1)`
  query getAccountServicePrincipalsCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountServicePrincipalsCount {
      totalCount
    }
  }
`,y=(0,a.J1)`
  query getAccountGroupsCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountGroupsCount {
      totalCount
    }
  }
`,_=(0,a.J1)`
  query getWorkspaceUsersCount($shouldGetDirectlyAssignedOnly: Boolean) @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceUsersCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`,A=(0,a.J1)`
  query getWorkspaceServicePrincipalsCount($shouldGetDirectlyAssignedOnly: Boolean)
  @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceServicePrincipalsCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`,b=(0,a.J1)`
  query getWorkspaceGroupsCount($shouldGetDirectlyAssignedOnly: Boolean) @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceGroupsCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`},348773:(e,t,r)=>{r.d(t,{Y:()=>n});var a=r(610435),i=r(382908),s=r(342411);let n=({count:e,hasNextPage:t})=>(0,a.Y)(i.o.Text,{"aria-live":"polite","aria-relevant":"all","aria-atomic":"true",children:function(){if(!t)return(0,a.Y)(s.sA,{id:"yPSrE/",defaultMessage:"{count, plural, =1 {1 match} other {# matches}}",values:{count:e}});return(0,a.Y)(s.sA,{id:"Bhk5fv",defaultMessage:"{count}+ matches",values:{count:e}})}()})},355148:(e,t,r)=>{r.d(t,{v9:()=>n,yd:()=>o,yo:()=>l});var a,i=r(923305),s=r(342411),n=((a={}).all="all",a.admin="admin",a.my="my",a.favorites="favorites",a);let l={queries:(0,s.zR)({id:"5zG/LT",defaultMessage:"Queries"}),favoriteQueries:(0,s.zR)({id:"nyKn0p",defaultMessage:"Favorite queries"}),myQueries:(0,s.zR)({id:"uPoyBK",defaultMessage:"My queries"}),adminView:(0,s.zR)({id:"Dl/ALi",defaultMessage:"Admin view"})},o={all:(0,i.Hi)("/queries/all"),my:(0,i.Hi)("/queries"),favorites:(0,i.Hi)("/queries/favorites"),admin:(0,i.Hi)("/queries/admin")}},397136:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(610435),i=r(692738),s=r(375214);function n(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M3 1.75A.75.75 0 0 1 3.75 1h10.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V12.5H1V11h2V8.75H1v-1.5h2V5H1V3.5h2zm1.5.75v11H6v-11zm3 0v11h6v-11z",clipRule:"evenodd"})})}let l=(0,i.forwardRef)((e,t)=>(0,a.Y)(s.I,{ref:t,...e,component:n}));l.displayName="NotebookIcon";let o=l},401160:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(610435),i=r(692738),s=r(375214);function n(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.75 1a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75V1.75a.75.75 0 0 0-.75-.75zM7.5 2.5h-4v6.055l1.495-1.36a.75.75 0 0 1 1.01 0L7.5 8.555zm-4 8.082 2-1.818 2.246 2.041A.75.75 0 0 0 9 10.25V2.5h3.5v12h-9z",clipRule:"evenodd"})})}let l=(0,i.forwardRef)((e,t)=>(0,a.Y)(s.I,{ref:t,...e,component:n}));l.displayName="BookIcon";let o=l},452233:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(610435),i=r(692738),s=r(375214);function n(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.FD)("g",{fill:"currentColor",clipPath:"url(#QueryIcon_svg__a)",children:[(0,a.Y)("path",{fillRule:"evenodd",d:"M2 1.75A.75.75 0 0 1 2.75 1h6a.75.75 0 0 1 .53.22l4.5 4.5c.141.14.22.331.22.53V10h-1.5V7H8.75A.75.75 0 0 1 8 6.25V2.5H3.5V16h-.75a.75.75 0 0 1-.75-.75zm7.5 1.81 1.94 1.94H9.5z",clipRule:"evenodd"}),(0,a.Y)("path",{d:"M5.53 9.97 8.56 13l-3.03 3.03-1.06-1.06L6.44 13l-1.97-1.97zM14 14.5H9V16h5z"})]}),(0,a.Y)("defs",{children:(0,a.Y)("clipPath",{children:(0,a.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let l=(0,i.forwardRef)((e,t)=>(0,a.Y)(s.I,{ref:t,...e,component:n}));l.displayName="QueryIcon";let o=l},514116:(e,t,r)=>{r.d(t,{$:()=>n});var a=r(610435),i=r(79128),s=r(342411);let n=({onClick:e})=>(0,a.Y)(i.$n,{componentId:"codegen_redash_app_src_app_components_table_resetfiltersbutton.tsx_10",type:"tertiary",onClick:e,children:(0,a.Y)(s.sA,{id:"co49Kp",defaultMessage:"Reset filters"})})},533397:(e,t,r)=>{r.d(t,{VN:()=>$,zu:()=>k,FH:()=>P});var a=r(610435),i=r(692738),s=r(733052),n=r(521198),l=r(128572),o=r(369291),d=r(79128),c=r(465946),u=r(342411),p=r(623576),f=r.n(p),g=r(250912),m=r.n(g),h=r(359525),v=r.n(h),y=r(446835),_=r.n(y),A=r(173991),b=r.n(A),I=r(694762),w=r(382908),Y=r(664093),x=r(74438);function C({tags:e=[],getAvailableTags:t,onClose:r,...s}){let l=(0,u.tz)(),[o,c]=(0,i.useState)([]),[p,g]=(0,i.useState)(!0),h=(0,i.useMemo)(()=>v()(f()(e,m())),[e]),[y,A]=(0,i.useState)(h),S=h.length!==y.length||0!==b()(y,h).length;(0,i.useEffect)(()=>{let e=!1;return t().then(t=>{e||(c(v()(_()(f()(t,m())))),g(!1))}),()=>{e=!0}},[t]);let{closeDialog:M}=(0,n.Ww)();return(0,a.Y)(I.aF,{...s,title:(0,a.Y)(u.sA,{id:"Xb5xHn",defaultMessage:"Add/Edit tags"}),className:"shortModal",dangerouslySetAntdProps:{wrapProps:{"data-testid":"EditTagsDialog"}},footer:S?(0,a.FD)("div",{css:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,a.FD)(w.o.Text,{color:"warning",css:{flex:"1 1 auto",textAlign:"left",marginRight:15},children:[(0,a.Y)(Y.A,{css:{marginRight:5}}),(0,a.Y)(u.sA,{id:"ObsfZg",defaultMessage:"There are unsaved changes"})]}),(0,a.FD)("div",{css:{whiteSpace:"nowrap"},children:[(0,a.Y)(d.$n,{componentId:"redash_components_tags_control_edit_dialog_cancel_button",onClick:()=>M(),children:(0,a.Y)(u.sA,{id:"R/XuaU",defaultMessage:"Cancel"})}),(0,a.Y)(d.$n,{componentId:"redash_components_tags_control_edit_dialog_save_button",type:"primary",onClick:()=>{M(),r(y)},children:(0,a.Y)(u.sA,{id:"smJbZ+",defaultMessage:"Save"})})]})]}):(0,a.Y)(d.$n,{componentId:"redash_components_tags_control_edit_dialog_close_button",onClick:()=>M(),children:(0,a.Y)(u.sA,{id:"FMgMSe",defaultMessage:"Close"})}),children:(0,a.Y)(x._v,{autoFocus:!0,mode:"tags",css:{width:"100%"},placeholder:l.formatMessage({id:"HPiary",defaultMessage:"Add some tags..."}),defaultValue:y,onChange:e=>A(_()(f()(e,m()))),loading:p,virtual:!1,"data-testid":"EditTagsDialogSelect",children:f()(o,e=>(0,a.Y)(x._v.Option,{value:e,children:e},e))})})}function S({tags:e,canEdit:t,getAvailableTags:r=()=>new Promise(e=>e([])),onEdit:s=e=>{},className:p,tagsExtra:f,tagSeparator:g,children:m}){let h,v,y,_=(0,u.tz)(),A=e?.map(e=>e.trim()).filter(Boolean)??[],{openDialog:b,dialogNode:I}=(0,n.sp)(C,{tags:A,getAvailableTags:r,onClose:s});return(0,a.FD)("div",{className:`tags-control hidden-in-snapshot ${p??""}`,"data-testid":"TagsControl",children:[m,I,A.map((e,t)=>(0,a.FD)(i.Fragment,{children:[g&&t>0&&(0,a.Y)("span",{className:"tag-separator",children:g}),(0,a.Y)(c.v,{componentId:"codegen_redash_app_src_app_components_tags-control_tagscontrol.tsx_68",title:e,"data-testid":"TagLabel",children:e})]},e)),t&&(v=(h=A.length>0)?(0,a.Y)(l.A,{}):(0,a.Y)(o.A,{}),y=_.formatMessage({id:"p0a4UN",defaultMessage:"Edit"}),(0,a.Y)(d.$n,{componentId:"codegen_redash_app_src_app_components_tags-control_tagscontrol.tsx_45",icon:v,size:"small",onClick:()=>b(),"aria-label":h?y:void 0,"data-testid":"EditTagsButton",children:!h&&(0,a.Y)(u.sA,{id:"efCo2f",defaultMessage:"Add tag"})})),f]})}function M({archivedTooltip:e,archivedTooltipInAdminView:t}){return function({isDraft:r,isArchived:i,isAdminPage:n,...l}){return(0,a.FD)(S,{...l,children:[!i&&r&&(0,a.Y)(c.v,{componentId:"codegen_redash_app_src_app_components_tags-control_tagscontrol.tsx_99",color:"charcoal",children:(0,a.Y)(u.sA,{id:"UpjXhz",defaultMessage:"Unpublished"})}),i&&(0,a.Y)(s.A,{placement:"right",title:n?t:e,children:(0,a.Y)(c.v,{componentId:"codegen_redash_app_src_app_components_tags-control_tagscontrol.tsx_108",color:"charcoal",children:(0,a.Y)(u.sA,{id:"tpBtWX",defaultMessage:"Trash"})})})]})}}let P=(0,a.Y)(u.sA,{id:"LQaVic",defaultMessage:"This query has been moved to trash. It can't be used in dashboards, or appear in search results."}),k=M({archivedTooltip:P,archivedTooltipInAdminView:(0,a.Y)(u.sA,{id:"9CknJn",defaultMessage:"This query has been moved to trash."})}),$=M({archivedTooltip:(0,a.Y)(u.sA,{id:"6aKJiJ",defaultMessage:"This dashboard has been moved to trash. It won't be listed in dashboards nor search results."}),archivedTooltipInAdminView:(0,a.Y)(u.sA,{id:"TgSwsI",defaultMessage:"This dashboard has been moved to trash."})})},563521:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(610435),i=r(692738),s=r(375214);function n(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1 1.75A.75.75 0 0 1 1.75 1h12.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75zm1.5 8.75v3h4.75v-3zm0-1.5h4.75V2.5H2.5zm6.25-6.5v3h4.75v-3zm0 11V7h4.75v6.5z",clipRule:"evenodd"})})}let l=(0,i.forwardRef)((e,t)=>(0,a.Y)(s.I,{ref:t,...e,component:n}));l.displayName="DashboardIcon";let o=l},617933:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(610435),i=r(692738),s=r(375214);function n(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.75 1a.75.75 0 0 0-.75.75v6.089c0 .38-.173.739-.47.976l-2.678 2.143A2.27 2.27 0 0 0 3.27 15h9.46a2.27 2.27 0 0 0 1.418-4.042L11.47 8.815A1.25 1.25 0 0 1 11 7.839V1.75a.75.75 0 0 0-.75-.75zm.75 6.839V2.5h3v5.339c0 .606.2 1.188.559 1.661H5.942A2.75 2.75 0 0 0 6.5 7.839M4.2 11 2.79 12.13a.77.77 0 0 0 .48 1.37h9.461a.77.77 0 0 0 .481-1.37L11.8 11z",clipRule:"evenodd"})})}let l=(0,i.forwardRef)((e,t)=>(0,a.Y)(s.I,{ref:t,...e,component:n}));l.displayName="BeakerIcon";let o=l},637468:(e,t,r)=>{r.d(t,{i:()=>u});var a=r(610435),i=r(834343),s=r(452233),n=r(876726),l=r(342411),o=r(702067),d=r(355148);let c={nothingInSearch:{title:(0,l.zR)({id:"M3Yl2d",defaultMessage:"No queries matched your search"}),description:(0,l.zR)({id:"YkbEOR",defaultMessage:"Try using a different keyword or adjusting your filters"})},noFavoritesYet:{title:(0,l.zR)({id:"wbuCeF",defaultMessage:"No favorites yet"}),description:(0,l.zR)({id:"3MKvtA",defaultMessage:"Mark queries as favorites to list them here"})},nonCreatedYet:{title:(0,l.zR)({id:"UBp0L2",defaultMessage:"Create your first query"}),description:(0,l.zR)({id:"yCjjc6",defaultMessage:"Use the SQL editor to query your data. View your saved queries here."})},nonCreatedYetAskAdmin:{title:(0,l.zR)({id:"9hn7QR",defaultMessage:"Ask your administrator to create a SQL query"}),description:(0,l.zR)({id:"GSoiRz",defaultMessage:"Please create a query to be able to use this feature"})}},u=({hasFilters:e,canCreate:t,pageType:r})=>{let u=(0,l.tz)(),p=function(){if(e)return c.nothingInSearch;if(r===d.v9.favorites)return c.noFavoritesYet;if(t)return c.nonCreatedYet;return c.nonCreatedYetAskAdmin}(),f=!e&&t&&r!==d.v9.favorites,g=e?(0,a.Y)(i.A,{}):(0,a.Y)(s.A,{});return(0,a.Y)(n.S,{image:g,description:u.formatMessage(p.description),title:p.title&&u.formatMessage(p.title),button:f&&(0,a.Y)(o.f,{})})}},691069:(e,t,r)=>{r.d(t,{C:()=>d});var a=r(610435);r(692738);var i=r(497895),s=r(465082),n=r(26971),l=r(777517),o=r(342411);let d=({kind:e,disabled:t,style:r})=>{let{theme:d}=(0,i.wn)(),c=(0,o.tz)(),u={alignItems:"center",background:t?void 0:d.colors.backgroundSecondary,borderRadius:30,color:t?d.colors.actionDisabledText:d.colors.textSecondary,display:"flex",fontSize:20,height:30,justifyContent:"center",width:30};switch(e){case"user":return(0,a.Y)(s.A,{title:c.formatMessage({id:"9vv8Gs",defaultMessage:"User"}),css:r||u});case"group":return(0,a.Y)(n.A,{title:c.formatMessage({id:"Qzw3C/",defaultMessage:"Group"}),css:r||u});case"serviceprincipal":return(0,a.Y)(l.A,{title:c.formatMessage({id:"QrVB43",defaultMessage:"Service Principal"}),css:r||u});default:return null}}},702067:(e,t,r)=>{r.d(t,{f:()=>l});var a=r(610435),i=r(79128),s=r(342411),n=r(419847);let l=({type:e})=>(0,a.Y)(i.$n,{componentId:"codegen_redash_app_src_app_pages_queries-list_createquerybutton.tsx_6",type:e,href:n.G0.newQuery(),children:(0,a.Y)(s.sA,{id:"jWDCSO",defaultMessage:"Create query"})})},732735:(e,t,r)=>{r.d(t,{D:()=>s.D,X:()=>s.X});var a=r(866984),i=r.n(a),s=r(211122),n=r(881601);i()(s.X,n.c)},733052:(e,t,r)=>{r.d(t,{A:()=>s});var a=r(610435);r(692738);var i=r(802582);function s({primary:e=!1,srSilent:t=!1,children:r,placement:n,title:l,dataTestId:o,arrowPointAtCenter:d,...c}){return(0,a.Y)(i.p,{silenceScreenReader:t,useAsLabel:e,placement:n,title:l,dataTestId:o,arrowPointAtCenter:d,...c,children:r})}},742259:(e,t,r)=>{r.d(t,{v:()=>n});var a=r(692738),i=r(26446),s=r(295423);let n=(e={})=>{let t=e.principalUniqueNamesForFiltering?.length??0,r=(0,s.f)(0===t||t>i.gb?{...e,limit:t,...i.pP}:{...e,limit:t}),{subjects:n}=r,l=(0,a.useMemo)(()=>(0,i.bp)(n),[n]);return{...r,uniqueNameToSubjectsMap:l}}},753480:(e,t,r)=>{r.d(t,{b:()=>s});var a=r(200356);let i={created_at:a.GLR.CREATED_AT,updated_at:a.GLR.UPDATED_AT,name:a.GLR.NAME};function s(e){if(!e)return;let t=e.split(" "),r=i[t[0]];if(!r)return;return{criteria:r,ascending:"desc"!==t[1]}}},777517:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(610435),i=r(692738),s=r(375214);function n(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 0a.75.75 0 0 1 .75.75V3h5.5a.75.75 0 0 1 .75.75V6h.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75H15v2.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V12H.75a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 .75 6H1V3.75A.75.75 0 0 1 1.75 3h5.5V.75A.75.75 0 0 1 8 0M2.5 4.5v9h11v-9zM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6.25 2.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"})})}let l=(0,i.forwardRef)((e,t)=>(0,a.Y)(s.I,{ref:t,...e,component:n}));l.displayName="RobotIcon";let o=l},802582:(e,t,r)=>{r.d(t,{p:()=>_});var a=r(610435),i=r(956935),s=r(889486),n=r(778529),l=r.n(n),o=r(91958),d=r.n(o),c=r(692738),u=r(429608),p=r(497895),f=r(639712),g=r(863802);let m=["hover","focus"],h=d()(e=>({backgroundColor:"#2F3941",lineHeight:"22px",padding:"4px 8px",boxShadow:e.general.shadowLow,...(0,f.WO)(e)})),v=d()(e=>({zIndex:e.options.zIndexBase+70}),e=>String(e.options.zIndexBase)),y=d()(e=>(0,i.AH)({...(0,u.Cx)(e)})),_=({children:e,title:t,placement:r="top",dataTestId:i,dangerouslySetAntdProps:n,silenceScreenReader:o=!1,useAsLabel:d=!1,..._})=>{let{theme:A}=(0,p.wn)(),b=(0,c.useRef)(null),I=(0,g.Y)("dubois-tooltip-component-"),w=n?.id?n?.id:I;if(!t)return(0,a.Y)(c.Fragment,{children:e});let Y=o?{}:{"aria-live":"polite","aria-relevant":"additions"};i&&(Y["data-testid"]=i);let x=t&&c.isValidElement(t)?c.cloneElement(t,Y):(0,a.Y)("span",{...Y,children:t}),C={"aria-hidden":!1},S=e=>{if(!b.current||e.currentTarget.hasAttribute("aria-describedby")||e.currentTarget.hasAttribute("aria-labelledby"))return;w&&(e.currentTarget.setAttribute("aria-live","polite"),d?e.currentTarget.setAttribute("aria-labelledby",w):e.currentTarget.setAttribute("aria-describedby",w))},M=e=>{if(!b||!e.currentTarget.hasAttribute("aria-describedby")&&!e.currentTarget.hasAttribute("aria-labelledby"))return;d?e.currentTarget.removeAttribute("aria-labelledby"):e.currentTarget.removeAttribute("aria-describedby"),e.currentTarget.removeAttribute("aria-live")},P={onMouseEnter:e=>{S(e)},onMouseLeave:e=>{M(e)},onFocus:e=>{S(e)},onBlur:e=>{M(e)}},k=c.isValidElement(e)?c.cloneElement(e,{...C,...P,...e.props}):l()(e)?e:(0,a.Y)("span",{...C,...P,children:e}),{overlayInnerStyle:$,overlayStyle:T,...R}=n||{},D=$?{backgroundColor:"#2F3941",lineHeight:"22px",padding:"4px 8px",boxShadow:A.general.shadowLow,...$,...(0,f.WO)(A)}:h(A),q=T?{zIndex:A.options.zIndexBase+70,...T}:v(A);return(0,a.Y)(u.wC,{children:(0,a.Y)(s.A,{id:w,ref:b,title:x,placement:r,trigger:m,overlayInnerStyle:D,overlayStyle:q,css:y(A.options.enableAnimation),...R,..._,children:k})})}},804584:(e,t,r)=>{r.d(t,{R:()=>l});var a=r(610435),i=r(956935),s=r(692738),n=r(497895);let l=(0,s.forwardRef)(function({children:e,style:t,className:r,actions:s,...l},o){let{theme:d}=(0,n.wn)(),c={layout:(0,i.AH)({display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:"var(--table-filter-layout-group-margin)",columnGap:"var(--table-filter-layout-group-margin)",rowGap:"var(--table-filter-layout-item-gap)",flexWrap:"wrap"}),filters:(0,i.AH)({display:"flex",flexWrap:"wrap",flexDirection:"row",alignItems:"center",gap:"var(--table-filter-layout-item-gap)",marginRight:"var(--table-filter-layout-group-margin)",flex:1}),filterActions:(0,i.AH)({display:"flex",flexWrap:"wrap",gap:"var(--table-filter-layout-item-gap)",alignSelf:"flex-start"})};return(0,a.FD)("div",{...l,ref:o,style:{"--table-filter-layout-item-gap":`${d.spacing.sm}px`,"--table-filter-layout-group-margin":`${d.spacing.md}px`,...t},css:c.layout,className:r,children:[(0,a.Y)("div",{css:c.filters,children:e}),s&&(0,a.Y)("div",{css:c.filterActions,children:s})]})})},834343:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(610435),i=r(692738),s=r(375214);function n(e){return(0,a.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,a.Y)("g",{clipPath:"url(#SearchIcon_svg__a)",children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a7 7 0 1 0 4.39 12.453l2.55 2.55 1.06-1.06-2.55-2.55A7 7 0 0 0 8 1M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0",clipRule:"evenodd"})}),(0,a.Y)("defs",{children:(0,a.Y)("clipPath",{children:(0,a.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let l=(0,i.forwardRef)((e,t)=>(0,a.Y)(s.I,{ref:t,...e,component:n}));l.displayName="SearchIcon";let o=l},848737:(e,t,r)=>{r.d(t,{d:()=>g});var a=r(610435),i=r(692738),s=r(545251),n=r(305404),l=r(994796),o=r(497895),d=r(834343),c=r(407374),u=r(469490),p=r(569546);let f=e=>{if("string"==typeof e||"number"==typeof e)return e.toString();if(i.isValidElement(e)&&e.props.children)return i.Children.toArray(e.props.children).map(f).join(" ");return""},g=(0,i.forwardRef)(({onChange:e,onSearch:t,virtualized:r,children:g,hasWrapper:m,controlledValue:h,setControlledValue:v,rightSearchControls:y,..._},A)=>{let{theme:b}=(0,o.wn)(),{componentId:I}=(0,s.w)(),{isInsideDialogComboboxOptionList:w}=(0,n.r)(),Y=`no-result-${(0,p.B)()}`,x=(0,i.useRef)(null);(0,i.useImperativeHandle)(A,()=>x.current);let[C,S]=i.useState();if(!w)throw Error("`DialogComboboxOptionListSearch` must be used within `DialogComboboxOptionList`");let M=g;if(C&&!r&&void 0===h){var P;let e;P=m?g.props.children:g,e=C.toLowerCase(),M=i.Children.map(P,t=>{if(i.isValidElement(t)){let r=t.props.__EMOTION_TYPE_PLEASE_DO_NOT_USE__?.defaultProps._TYPE??t.props._TYPE;if("DialogComboboxOptionListSelectItem"===r||"DialogComboboxOptionListCheckboxItem"===r){let r=f(t).toLowerCase(),a=t.props.value?.toLowerCase()??"";return r.includes(e)||a.includes(e)?t:null}}return t})?.filter(e=>e),m&&(M=i.cloneElement(g,{},M))}let k=(0,i.useRef)(null);(0,i.useEffect)(()=>{if(!k.current)return;let e=(0,l.aV)(k.current);if(e){let t=(0,l.kQ)(e),r=e?.[0];r&&(0,l.ed)(r,t,!1)}},[C]);let $=i.Children.toArray(m?g.props.children:g).some(e=>i.isValidElement(e)),T=m&&M?.props.children?.length||!m&&M?.length;return(0,i.useEffect)(()=>{T||x.current?.input?.setAttribute("aria-activedescendant",Y)},[T,Y,x.current?.input?.value]),(0,a.FD)(a.FK,{children:[(0,a.Y)("div",{ref:k,css:{padding:`${b.spacing.sm}px ${b.spacing.lg/2}px ${b.spacing.sm}px`,width:"100%",boxSizing:"border-box",position:"sticky",top:0,background:b.colors.backgroundPrimary,zIndex:b.options.zIndexBase+1},children:(0,a.FD)("div",{css:{display:"flex",flexDirection:"row",gap:b.spacing.sm},children:[(0,a.Y)(c.p,{componentId:I?`${I}.search`:"codegen_design_system_src_design_system_dialogcombobox_dialogcomboboxoptionlistsearch.tsx_173",type:"search",name:"search",ref:x,prefix:(0,a.Y)(d.A,{}),placeholder:"Search",onChange:e=>{r||S(e.target.value),v?.(e.target.value),t?.(e.target.value)},onKeyDown:e=>{(e=>{if("ArrowDown"!==e.key&&"ArrowUp"!==e.key&&"Enter"!==e.key)return;e.preventDefault();let t=(0,l.aV)(e.target);if(!t)return;let r=(0,l.kQ)(t);if("ArrowDown"===e.key||"ArrowUp"===e.key)if(r){let a=(0,l.oS)(r,"ArrowDown"===e.key?"next":"previous");if(a)(0,l.ed)(a,r,!1);else if("ArrowDown"===e.key){let e=t[0];(0,l.ed)(e,r,!1)}else if("ArrowUp"===e.key){let e=t[t.length-1];(0,l.ed)(e,r,!1)}}else{let r="ArrowDown"===e.key?t[0]:t[t.length-1];r&&(0,l.ed)(r,void 0,!1)}else"Enter"===e.key&&r&&r.click()})(e),_.onKeyDown?.(e)},value:h??C,shouldPreventFormSubmission:!0,..._}),y]})}),r?g:T&&$?(0,a.Y)("div",{"aria-live":"polite",css:{width:"100%"},children:M}):(0,a.Y)(u.i,{id:Y})]})})},882102:(e,t,r)=>{r.d(t,{A:()=>s});var a=r(651139);function i(e){return e.tags||[]}function s(e){return a.pY.get(e).then(i)}},930355:(e,t,r)=>{r.d(t,{j:()=>g});var a=r(610435),i=r(692738),s=r(545251),n=r(305404),l=r(994796),o=r(332702),d=r(497895),c=r(201828),u=r(79570),p=r(174541);let f=(0,i.forwardRef)(({value:e,checked:t,indeterminate:r,onChange:i,children:f,disabledReason:g,_TYPE:m,...h},v)=>{let{theme:y}=(0,d.wn)(),{textOverflowMode:_,contentWidth:A,disableMouseOver:b,setDisableMouseOver:I}=(0,s.w)(),{isInsideDialogComboboxOptionList:w,setLookAhead:Y,lookAhead:x}=(0,n.r)();if(!w)throw Error("`DialogComboboxOptionListCheckboxItem` must be used within `DialogComboboxOptionList`");let C=t=>{i&&i(e,t)},S=f??e;return h.disabled&&g&&(S=(0,a.FD)("div",{css:{display:"flex"},children:[(0,a.Y)("div",{children:S}),(0,a.Y)("div",{css:{display:"flex"},children:(0,a.Y)(u.m,{componentId:"dialog-combobox-option-list-checkbox-item-disabled-reason-tooltip",content:g,side:"right",children:(0,a.Y)("span",{css:[(0,p.eO)(y),{display:"flex",alignItems:"center",alignSelf:"flex-start",marginTop:y.spacing.xs/2}],children:(0,a.Y)(c.A,{"aria-label":"Disabled status information","aria-hidden":"false"})})})})]})),(0,a.Y)("div",{ref:v,role:"option","aria-selected":!r&&t,css:[(0,p.RB)(y)],...h,onClick:e=>{h.disabled?e.preventDefault():C(e)},tabIndex:-1,...(0,l.Js)(C,{onKeyDown:h.onKeyDown,onMouseEnter:h.onMouseEnter,onDefaultKeyDown:e=>(0,l.pY)(e,Y,x),disableMouseOver:b,setDisableMouseOver:I}),children:(0,a.Y)(o.Sc,{componentId:"codegen_design-system_src_design-system_dialogcombobox_dialogcomboboxoptionlistcheckboxitem.tsx_86",disabled:h.disabled,isChecked:r?null:t,css:[(0,p.WS)(y,_),A?{"& > span:last-of-type":{width:(0,l.x9)(y,A)}}:{}],tabIndex:-1,onClick:e=>{e.stopPropagation(),C(e)},children:(0,a.Y)("div",{css:{maxWidth:"100%"},children:S})})})});f.defaultProps={_TYPE:"DialogComboboxOptionListCheckboxItem"};let g=f}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/89572.7076ba52aa.chunk.js.map