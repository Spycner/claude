"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[63414],{95685:(e,t,n)=>{n.d(t,{X:()=>i,c:()=>a});var r=n(141078);let i=(0,r.J1)`
  query CdpInstanceQuery @component(name: "BryantPark.Core") {
    cdp_getCdpInstance {
      cdpId
      defaultDataModelId
      catalogName
      defaultWarehouseId
    }
  }
`,a=e=>(0,r.IT)(i,e)},135221:(e,t,n)=>{let r;n.d(t,{f:()=>h,$:()=>v});var i=n(610435),a=n(692738),d=n(829478);let o=new Set,l=()=>r,s=e=>{e!==r&&(r=e,o.forEach(e=>e()))},c=e=>(o.add(e),()=>o.delete(e));var p=n(388541),u=n(141078);let f=(0,u.J1)`
  query CdpDataModelsQuery($cdpId: String!, $pageSize: Int, $pageToken: String) @component(name: "BryantPark.Core") {
    cdp_dataModels(cdpId: $cdpId, pageSize: $pageSize, pageToken: $pageToken) {
      dataModels {
        id
        name
        defaultProfileEntity
        metadata {
          updateTimeMillis
        }
      }
      nextPageToken
    }
  }
`;var g=n(95685);let m=(0,a.createContext)(void 0);function h({children:e}){let t,{data:n,loading:r,error:o}=(0,g.c)(),v=n?.cdp_getCdpInstance?.cdpId??"",y=n?.cdp_getCdpInstance?.defaultDataModelId??"",I=n?.cdp_getCdpInstance?.catalogName??void 0,E=n?.cdp_getCdpInstance?.defaultWarehouseId??void 0,C=(0,d.useSyncExternalStore)(c,l);(0,a.useEffect)(()=>{y&&void 0===l()&&s(y)},[y]);let P=(0,a.useCallback)(e=>{s(e)},[]),k=C??y,{data:M,loading:T,error:b}=(0,u.IT)(f,{...t,variables:{cdpId:v,pageSize:200},skip:!v||t?.skip}),x=(0,a.useMemo)(()=>{let e=M?.cdp_dataModels?.dataModels;if(!e)return[];return e.filter(e=>null!==e.id&&void 0!==e.id).map(e=>({id:e.id,name:e.name??null,defaultProfileEntity:e.defaultProfileEntity}))},[M]),{data:w,loading:$,error:S}=(0,p.O)(k,v),_=w?.cdp_dataModel??void 0,D=(0,a.useMemo)(()=>{if(!_?.defaultProfileEntity||!_.profileEntities)return;let e=_.profileEntities.find(e=>e.tablePath===_.defaultProfileEntity);if(!e?.tablePath)return;return function(e){let t=e.split(".");if(3!==t.length)return;let[n,r,i]=t;return{fullName:e,catalog:n,schema:r,table:i}}(e.tablePath)},[_]),B=r||T||$,Y=o??b??S,L=(0,a.useMemo)(()=>({cdpId:v||void 0,dataModelId:k,catalogName:I,defaultWarehouseId:E,dataModel:_,profileEntity:D,instanceLoading:r,isLoading:B,error:Y,availableDataModels:x,setSelectedDataModelId:P}),[v,k,I,E,_,D,r,B,Y,x,P]);return(0,i.Y)(m.Provider,{value:L,children:e})}function v(){let e=(0,a.useContext)(m);if(void 0===e)throw Error("useCdp must be used within a CdpProvider");return e}},388541:(e,t,n)=>{n.d(t,{O:()=>a});var r=n(141078);let i=(0,r.J1)`
  query CdpDataModelQuery($id: String!, $cdpId: String!) @component(name: "BryantPark.Core") {
    cdp_dataModel(id: $id, cdpId: $cdpId) {
      id
      name
      cdpId
      version
      defaultProfileEntity
      profileEntities {
        tablePath
        idColumn
        displayName
      }
      nodes {
        tablePath
      }
      edges {
        fromTablePath
        toTablePath
        fromTableColumn
        toTableColumn
        cardinality
      }
      metadata {
        version
        createTimeMillis
        updateTimeMillis
        createdBy {
          userId
        }
        updatedBy {
          userId
        }
      }
    }
  }
`,a=(e,t,n)=>(0,r.IT)(i,{...n,variables:{id:e,cdpId:t},skip:!e||!t||n?.skip})},583166:(e,t,n)=>{n.r(t),n.d(t,{RouteComponent:()=>r.p});var r=n(288494)},701755:(e,t,n)=>{n.d(t,{M:()=>o});var r=n(610435),i=n(497895),a=n(52430),d=n(382908);function o({title:e,subtitle:t,actionButton:n,backLink:l,tabs:s,children:c}){let{theme:p}=(0,i.wn)();return(0,r.FD)("div",{css:{display:"flex",flexDirection:"column",flexGrow:1,minHeight:0,overflow:"hidden"},children:[(0,r.Y)("div",{css:{flexShrink:0},children:(0,r.FD)(a.f,{css:{paddingLeft:p.spacing.lg,paddingRight:p.spacing.lg,paddingTop:p.spacing.lg,paddingBottom:p.spacing.md},children:[l&&(0,r.Y)("div",{css:{marginBottom:p.spacing.sm},children:l}),(e||n)&&(0,r.FD)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",minHeight:32},children:[(0,r.Y)(d.o.Title,{withoutMargins:!0,level:2,children:e}),n]}),t&&(0,r.Y)("div",{css:{marginTop:p.spacing.xs},children:(0,r.Y)(d.o.Text,{color:"secondary",children:t})}),s&&(0,r.Y)("div",{css:{marginTop:p.spacing.md},children:s})]})}),c&&(0,r.Y)("div",{css:{display:"flex",flexDirection:"column",flexGrow:1,minHeight:0,overflow:"auto",paddingLeft:p.spacing.lg,paddingRight:p.spacing.lg},children:c})]})}},999043:(e,t,n)=>{n.d(t,{Le:()=>l,PE:()=>o,Pl:()=>d,wB:()=>a});var r=n(88277);function i(e,t,n,r,i,a,d){try{var o=e[a](d),l=o.value}catch(e){n(e);return}o.done?t(l):Promise.resolve(l).then(r,i)}function a(e){r.y.addNotification({...e,level:"success",autoDismiss:5})}function d(e){if(e instanceof Error&&"graphQLErrors"in e){let t=e.graphQLErrors;return t?.[0]?.extensions?.apiError?.code}}function o(e){if(e instanceof Error&&"graphQLErrors"in e){let t=e.graphQLErrors,n=t?.[0]?.extensions?.apiError?.message;if(n)return n;let r=t?.[0]?.message;if(r&&"Backend service returned an exception"!==r)return r}return e instanceof Error?e.message:"An unknown error occurred."}function l(e){var t;return(t=function*({mutationFn:e,successMessage:t,errorMessage:n,onSuccess:i,onSettled:d}){try{let n=yield e(),r="function"==typeof t?t(n):t;return a({message:r}),i?.(n),n}catch(e){r.y.addNotification({message:`${n}: ${o(e)}`,level:"error"});return}finally{d?.()}},function(){var e=this,n=arguments;return new Promise(function(r,a){var d=t.apply(e,n);function o(e){i(d,r,a,o,l,"next",e)}function l(e){i(d,r,a,o,l,"throw",e)}o(void 0)})}).apply(this,arguments)}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/63414.483c3e3754.chunk.js.map