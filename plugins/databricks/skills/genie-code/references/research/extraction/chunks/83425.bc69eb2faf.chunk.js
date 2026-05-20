"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[83425],{118389:(e,a,n)=>{n.d(a,{P:()=>t});var o=n(441535);function t(){return(0,o.W)("discover_page",!1)&&(0,o.W)("domains",!1)}},231223:(e,a,n)=>{n.d(a,{J:()=>i,S:()=>t});var o=n(141078);let t=(0,o.J1)`
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
`;function i(e,a={}){return(0,o.IT)(t,{variables:e,...a})}},397382:(e,a,n)=>{n.d(a,{N:()=>t});var o=n(441535);function t(){return(0,o.W)("databricks.fe.discover.domainsRecommendations",!1)}},823910:(e,a,n)=>{n.d(a,{S:()=>i,_:()=>t});var o=n(141078);let t=(0,o.J1)`
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
`;function i(e,a={}){return(0,o.IT)(t,{variables:e,...a})}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/83425.bc69eb2faf.chunk.js.map