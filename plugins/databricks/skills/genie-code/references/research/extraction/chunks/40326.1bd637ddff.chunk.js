"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[40326],{95685:(e,t,a)=>{a.d(t,{X:()=>r,c:()=>i});var d=a(141078);let r=(0,d.J1)`
  query CdpInstanceQuery @component(name: "BryantPark.Core") {
    cdp_getCdpInstance {
      cdpId
      defaultDataModelId
      catalogName
      defaultWarehouseId
    }
  }
`,i=e=>(0,d.IT)(r,e)},135221:(e,t,a)=>{let d;a.d(t,{f:()=>g,$:()=>v});var r=a(610435),i=a(692738),n=a(829478);let l=new Set,o=()=>d,p=e=>{e!==d&&(d=e,l.forEach(e=>e()))},u=e=>(l.add(e),()=>l.delete(e));var c=a(388541),s=a(141078);let f=(0,s.J1)`
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
`;var m=a(95685);let I=(0,i.createContext)(void 0);function g({children:e}){let{data:t,loading:a,error:d}=(0,m.c)(),l=t?.cdp_getCdpInstance?.cdpId??"",v=t?.cdp_getCdpInstance?.defaultDataModelId??"",C=t?.cdp_getCdpInstance?.catalogName??void 0,y=t?.cdp_getCdpInstance?.defaultWarehouseId??void 0,b=(0,n.useSyncExternalStore)(u,o);(0,i.useEffect)(()=>{v&&void 0===o()&&p(v)},[v]);let h=(0,i.useCallback)(e=>{p(e)},[]),P=b??v,{data:k,loading:M,error:E}=(0,s.IT)(f,{...void 0,variables:{cdpId:l,pageSize:200},skip:!l||void 0}),T=(0,i.useMemo)(()=>{let e=k?.cdp_dataModels?.dataModels;if(!e)return[];return e.filter(e=>null!==e.id&&void 0!==e.id).map(e=>({id:e.id,name:e.name??null,defaultProfileEntity:e.defaultProfileEntity}))},[k]),{data:S,loading:$,error:_}=(0,c.O)(P,l),w=S?.cdp_dataModel??void 0,z=(0,i.useMemo)(()=>{if(!w?.defaultProfileEntity||!w.profileEntities)return;let e=w.profileEntities.find(e=>e.tablePath===w.defaultProfileEntity);if(!e?.tablePath)return;return function(e){let t=e.split(".");if(3!==t.length)return;let[a,d,r]=t;return{fullName:e,catalog:a,schema:d,table:r}}(e.tablePath)},[w]),B=a||M||$,x=d??E??_,D=(0,i.useMemo)(()=>({cdpId:l||void 0,dataModelId:P,catalogName:C,defaultWarehouseId:y,dataModel:w,profileEntity:z,instanceLoading:a,isLoading:B,error:x,availableDataModels:T,setSelectedDataModelId:h}),[l,P,C,y,w,z,a,B,x,T,h]);return(0,r.Y)(I.Provider,{value:D,children:e})}function v(){let e=(0,i.useContext)(I);if(void 0===e)throw Error("useCdp must be used within a CdpProvider");return e}},388541:(e,t,a)=>{a.d(t,{O:()=>i});var d=a(141078);let r=(0,d.J1)`
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
`,i=(e,t,a)=>(0,d.IT)(r,{...a,variables:{id:e,cdpId:t},skip:!e||!t||a?.skip})},840326:(e,t,a)=>{a.r(t),a.d(t,{RouteComponent:()=>c});var d=a(610435),r=a(692738),i=a(488655),n=a(268334),l=a(648782),o=a(441535),p=a(708360),u=a(135221);let c=()=>{let{instanceLoading:e,catalogName:t,defaultWarehouseId:a,availableDataModels:c,isLoading:s}=(0,u.$)(),f=(0,o.W)("databricks.fe.cdp.onboardingEnabled",!1),m=(0,i.Zp)(),I=(c??[]).length>0,g=!!(t&&a),v=g&&I,C=f&&!e&&!s&&!v;if((0,r.useEffect)(()=>{if(!C)return;g&&!I?m(`${p.zS.setup}?step=data`,{replace:!0}):m(p.zS.welcome,{replace:!0})},[C,g,I,m]),e||s||C)return(0,d.Y)(n.WL,{});return(0,d.Y)(l.sv,{})}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/40326.1bd637ddff.chunk.js.map