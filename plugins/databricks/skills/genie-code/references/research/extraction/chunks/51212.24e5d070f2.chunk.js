"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[51212,83425],{118389:(e,n,A)=>{A.d(n,{P:()=>t});var r=A(441535);function t(){return(0,r.W)("discover_page",!1)&&(0,r.W)("domains",!1)}},231223:(e,n,A)=>{A.d(n,{J:()=>a,S:()=>t});var r=A(141078);let t=(0,r.J1)`
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
`;function a(e,n={}){return(0,r.IT)(t,{variables:e,...n})}},309073:(e,n,A)=>{A.d(n,{BC:()=>i,JH:()=>E,is:()=>R,yQ:()=>I});var r=A(483588),t=A(583812),a=A(771994);let i=[a.An.DASHBOARD,a.An.DATA_ROOM],E=[r.z$1.DASHBOARD_V3,r.z$1.DATA_ROOM],I=50,o={[r.z$1.DASHBOARD_V3]:a.If.DBSQL_DASHBOARD,[r.z$1.DATA_ROOM]:a.If.DATA_ROOM,[r.z$1.APP]:a.If.APP},d={[r.iId.DASHBOARD_LAKEVIEW]:a.If.DBSQL_DASHBOARD,[r.iId.DATA_ROOM]:a.If.DATA_ROOM,[r.iId.APP]:a.If.APP},O={[r.iId.DASHBOARD_LAKEVIEW]:r.z$1.DASHBOARD_V3,[r.iId.DATA_ROOM]:r.z$1.DATA_ROOM,[r.iId.APP]:r.z$1.APP},R=(e,n)=>e?.map(e=>{let A,i,E=n.getAssetType(e),I=n.getAssetId(e),R=n.getName(e),c=n.getAppUrl?n.getAppUrl(e):void 0;if(!E||!I||!R)return null;if(E in o?(A=o[E],i=E):E in d&&(A=d[E],i=O[E]),!A)return null;let s=A===a.If.APP?c??"":(0,t.p4)({type:i||r.z$1.ASSET_TYPE_UNSPECIFIED,name:R,id:I,source:"account",workspaceFqdn:n.getWorkspaceFqdn(e),workspaceId:n.getWorkspaceId(e)}),u={searchResultType:A,id:I,name:R,searchId:n.searchId,href:s,navigationalSearchType:n.navigationalSearchType,useractivityAssetType:i};return u.subtitle=n.getSubtitle?.(e),n.getViewTime&&(u.viewTime=n.getViewTime?.(e)),u}).filter(e=>null!=e)??[]},397382:(e,n,A)=>{A.d(n,{N:()=>t});var r=A(441535);function t(){return(0,r.W)("databricks.fe.discover.domainsRecommendations",!1)}},823910:(e,n,A)=>{A.d(n,{S:()=>a,_:()=>t});var r=A(141078);let t=(0,r.J1)`
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
`;function a(e,n={}){return(0,r.IT)(t,{variables:e,...n})}},848001:(e,n,A)=>{A.d(n,{K:()=>y,LI:()=>C,Lg:()=>Y,kn:()=>g,lU:()=>v,sj:()=>S});var r=A(610435),t=A(615693),a=A(325382),i=A(397136),E=A(126001),I=A(323935),o=A(485065),d=A(452233),O=A(563521),R=A(1459),c=A(319241),s=A(753427),u=A(401160),T=A(161926),D=A(24027),L=A(617933),l=A(823825),P=A(873393),m=A(815367),f=A(350487),F=A(918071),N=A(946590),_=A(889187),M=A(483588),p=A(707076),B=A(771994);let g={[M.FKF.ALERT]:B.An.ALERT,[M.FKF.DASHBOARD]:B.An.DASHBOARD,[M.FKF.DASHBOARD_V3]:B.An.DASHBOARD,[M.FKF.FILE]:B.An.FILE,[M.FKF.FOLDER]:B.An.FOLDER,[M.FKF.JOB]:B.An.JOB,[M.FKF.PIPELINE]:B.An.PIPELINE,[M.FKF.LIBRARY]:B.An.LIBRARY,[M.FKF.MARKETPLACE_LISTING]:B.An.MARKETPLACE,[M.FKF.ENDPOINT_CENTRIC_ENDPOINT]:B.An.ENDPOINT,[M.FKF.UC_MODEL]:B.An.MODEL,[M.FKF.UC_FUNCTION]:B.An.FUNCTION,[M.FKF.EXPERIMENT]:B.An.EXPERIMENT,[M.FKF.NOTEBOOK]:B.An.NOTEBOOK,[M.FKF.PROJECT]:B.An.REPO,[M.FKF.QUERY]:B.An.QUERY,[M.FKF.UC_TABLE]:B.An.TABLE,[M.FKF.UC_VOLUME]:B.An.VOLUME,[M.FKF.DATA_ROOM]:B.An.DATA_ROOM},S={[B.If.ALERT]:B.An.ALERT,[B.If.ALERT_V2]:B.An.ALERT_V2,[B.If.APP]:B.An.APP,[B.If.DBSQL_DASHBOARD]:B.An.DASHBOARD,[B.If.FILE]:B.An.FILE,[B.If.FOLDER]:B.An.FOLDER,[B.If.JOB]:B.An.JOB,[B.If.PIPELINE]:B.An.PIPELINE,[B.If.LIBRARY]:B.An.LIBRARY,[B.If.MARKETPLACE]:B.An.MARKETPLACE,[B.If.ML_ENDPOINT]:B.An.ENDPOINT,[B.If.ML_MODEL]:B.An.MODEL,[B.If.FUNCTION]:B.An.FUNCTION,[B.If.MLFLOW_EXPERIMENT]:B.An.EXPERIMENT,[B.If.NOTEBOOK]:B.An.NOTEBOOK,[B.If.DESIGNER_FILE]:B.An.DESIGNER_FILE,[B.If.PARTNER]:B.An.PARTNER,[B.If.PROJECT]:B.An.REPO,[B.If.QUERY]:B.An.QUERY,[B.If.TABLE]:B.An.TABLE,[B.If.VOLUME]:B.An.VOLUME,[B.If.DATA_ROOM]:B.An.DATA_ROOM,[B.If.METRIC_VIEW]:B.An.METRIC_VIEW},K={[M.iId.ALERT]:B.An.ALERT,[M.iId.ALERT_V2]:B.An.ALERT_V2,[M.iId.DASHBOARD_LAKEVIEW]:B.An.DASHBOARD,[M.iId.DASHBOARD_REDASH]:B.An.DASHBOARD,[M.iId.FILE]:B.An.FILE,[M.iId.FOLDER]:B.An.FOLDER,[M.iId.JOB]:B.An.JOB,[M.iId.PIPELINE]:B.An.PIPELINE,[M.iId.LIBRARY]:B.An.LIBRARY,[M.iId.MARKETPLACE]:B.An.MARKETPLACE,[M.iId.ML_ENDPOINT]:B.An.ENDPOINT,[M.iId.ML_MODEL]:B.An.MODEL,[M.iId.FUNCTION]:B.An.FUNCTION,[M.iId.MLFLOW_EXPERIMENT]:B.An.EXPERIMENT,[M.iId.NOTEBOOK]:B.An.NOTEBOOK,[M.iId.DESIGNER_FILE]:B.An.DESIGNER_FILE,[M.iId.PARTNER]:B.An.PARTNER,[M.iId.PROJECT]:B.An.REPO,[M.iId.QUERY]:B.An.QUERY,[M.iId.TABLE]:B.An.TABLE,[M.iId.VOLUME]:B.An.VOLUME,[M.iId.DATA_ROOM]:B.An.DATA_ROOM,[M.iId.APP]:B.An.APP};function C(e,n){if(!e)return null;let A=e.toUpperCase();if(B.im[A])return B.im[A];if((n??Y()).includes(A))return A;return null}let Y=(e=!1)=>(0,p.bz)(!0,e).flatMap(e=>{let n=S[e];return n?[n]:[]}),v=e=>Object.values(M.iId).filter(n=>{if(n===M.iId.DASHBOARD_REDASH)return!1;let A=K[n];return void 0!==A&&e.includes(A)}),y=e=>{switch(e){case B.An.TABLE:return(0,r.Y)(t.A,{});case B.An.VOLUME:return(0,r.Y)(a.A,{});case B.An.NOTEBOOK:return(0,r.Y)(i.A,{});case B.An.DESIGNER_FILE:return(0,r.Y)(E.A,{});case B.An.JOB:return(0,r.Y)(I.A,{});case B.An.PIPELINE:return(0,r.Y)(o.A,{});case B.An.QUERY:return(0,r.Y)(d.A,{});case B.An.DASHBOARD:return(0,r.Y)(O.A,{});case B.An.FOLDER:return(0,r.Y)(R.A,{});case B.An.FILE:return(0,r.Y)(c.A,{});case B.An.REPO:return(0,r.Y)(s.A,{});case B.An.LIBRARY:return(0,r.Y)(u.A,{});case B.An.ALERT:case B.An.ALERT_V2:return(0,r.Y)(T.A,{});case B.An.APP:return(0,r.Y)(D.A,{});case B.An.EXPERIMENT:return(0,r.Y)(L.A,{});case B.An.MODEL:return(0,r.Y)(l.A,{});case B.An.ENDPOINT:return(0,r.Y)(P.A,{});case B.An.FUNCTION:return(0,r.Y)(m.A,{});case B.An.PARTNER:return(0,r.Y)(f.A,{});case B.An.MARKETPLACE:return(0,r.Y)(F.A,{});case B.An.DATA_ROOM:return(0,r.Y)(N.A,{});case B.An.METRIC_VIEW:return(0,r.Y)(_.A,{});default:return(0,r.Y)(c.A,{})}}},866440:(e,n,A)=>{A.d(n,{Q:()=>D});var r=A(692738),t=A(107774),a=A(175291),i=A(60701),E=A(595615),I=A(141078),o=A(758666),d=A(231223),O=A(965545),R=A(671039),c=A(397382),s=A(823910);function u(e,n,A,r,t,a,i){try{var E=e[a](i),I=E.value}catch(e){A(e);return}E.done?n(I):Promise.resolve(I).then(r,t)}function T(e,n,A,r,t,a,i){try{var E=e[a](i),I=E.value}catch(e){A(e);return}E.done?n(I):Promise.resolve(I).then(r,t)}function D(e="workspace"){let n=(0,t.X)(),A=function(e="workspace"){let n=(0,I.mK)(),A=(0,o.Qr)({permission:O.I.CREATE}),t=(0,E.Ox)({queryFn:()=>A});return(0,r.useCallback)(()=>{var A;return(A=function*(){if("account"===e){let{data:e}=yield n.query({query:R.C});return[...e?.unifiedTaggingCentralDomains_listDomains?.domains??[]].sort((e,n)=>e.tagKey&&n.tagKey?e.tagKey.localeCompare(n.tagKey):0)}if((0,c.N)()){let[{data:e},A]=yield Promise.all([n.query({query:s._}),t()]);return e?.recommendationGetDomainRecommendations?.domainRecommendations?.filter(({domain:e})=>e&&(A||!e?.effectiveDraft))?.map(({domain:e})=>e)??[]}let[{data:A},r]=yield Promise.all([n.query({query:(0,c.N)()?s._:d.S,variables:{includeTagMetadata:!0}}),t()]);return(0,i.P)(A?.domainsListDomains?.domains??[],r)},function(){var e=this,n=arguments;return new Promise(function(r,t){var a=A.apply(e,n);function i(e){u(a,r,t,i,E,"next",e)}function E(e){u(a,r,t,i,E,"throw",e)}i(void 0)})})()},[n,t,e])}(e);return(0,r.useCallback)(e=>{var r;return(r=function*(){if(!n||!e?.length)return[];try{let n=yield A(),{domainHierarchy:r}=(0,a.N)(n);return e.flatMap(e=>(r[e]??[]).map(e=>e.tagKey).filter(e=>void 0!==e))}catch{return[]}},function(){var e=this,n=arguments;return new Promise(function(A,t){var a=r.apply(e,n);function i(e){T(a,A,t,i,E,"next",e)}function E(e){T(a,A,t,i,E,"throw",e)}i(void 0)})})()},[n,A])}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/51212.24e5d070f2.chunk.js.map