"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[40429],{12642:(e,a,t)=>{t.d(a,{e:()=>d});var r=t(610435);t(692738);var n=t(225842),i=t(350487),o=t(79570),l=t(483588),p=t(635828);let s={sm:16,md:32,lg:40},d=({systemType:e,showToolTip:a,size:t="sm",isAvatar:d})=>{let u=(0,p.MY)(e),m=e!==l.hWH.OTHER&&u.icon?(0,r.Y)("img",{src:u.icon,alt:u.name,height:s[t]}):d?(0,r.Y)(n.eu,{type:"entity",size:t,label:u.name,icon:(0,r.Y)(i.A,{})}):(0,r.Y)(i.A,{});if(a)return(0,r.Y)(o.m,{componentId:"external-metadata-list_system-type-icon-tooltip",content:u.name,children:m});return m}},235250:(e,a,t)=>{t.d(a,{u:()=>M});var r=t(441535),n=t(840924),i=t(141078);let o=(0,i.J1)`
  fragment ApiError on ApiError {
    code
    message
  }
`,l=(0,i.J1)`
  fragment ExternalMetadataInfoFragment on MetadatalineageapiserverExternalMetadata {
    columns
    createTime
    createdBy
    description
    entityType
    id
    properties {
      key
      value
    }
    metastoreId
    name
    owner
    securableKind
    securableType
    systemType
    updateTime
    updatedBy
    url
  }
`,p=(0,i.J1)`
  query ListExternalMetadata($pageSize: Int, $pageToken: String) @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverListExternalMetadataV2(input: { pageSize: $pageSize, pageToken: $pageToken }) {
      apiError {
        ...ApiError
      }
      externalMetadata {
        ...ExternalMetadataInfoFragment
      }
      nextPageToken
    }
  }
  ${l}
  ${o}
`,s=(0,i.J1)`
  query GetExternalMetadata($nameArg: String!) @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverGetExternalMetadataV2(input: { name: $nameArg }) {
      apiError {
        ...ApiError
      }
      ...ExternalMetadataInfoFragment
    }
  }
  ${l}
  ${o}
`,d=(0,i.J1)`
  mutation CreateExternalMetadata($input: MetadatalineageapiserverCreateExternalMetadataRequestInput!)
  @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverCreateExternalMetadataV2(input: $input) {
      apiError {
        ...ApiError
      }
      ...ExternalMetadataInfoFragment
    }
  }

  ${l}
  ${o}
`,u=(0,i.J1)`
  mutation CreateLineageRelationship($input: MetadatalineageapiserverCreateExternalLineageRelationshipRequestInput!)
  @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverCreateExternalLineageRelationship(input: $input) {
      apiError {
        ...ApiError
      }
    }
  }
  ${o}
`,m=(0,i.J1)`
  mutation UpdateExternalMetadata($input: MetadatalineageapiserverUpdateExternalMetadataRequestInput!)
  @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverUpdateExternalMetadataV2(input: $input) {
      apiError {
        ...ApiError
      }
      ...ExternalMetadataInfoFragment
    }
  }

  ${l}
  ${o}
`,c=(0,i.J1)`
  mutation DeleteExternalMetadata($input: MetadatalineageapiserverDeleteExternalMetadataRequestInput!)
  @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverDeleteExternalMetadataV2(input: $input) {
      apiError {
        ...ApiError
      }
    }
  }
  ${o}
`,g=(0,i.J1)`
  mutation DeleteLineageRelationship($input: MetadatalineageapiserverDeleteExternalLineageRelationshipRequestInput!)
  @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverDeleteExternalLineageRelationship(input: $input) {
      apiError {
        ...ApiError
      }
    }
  }
  ${o}
`,E=(0,i.J1)`
  mutation UpdateLineageRelationship($input: MetadatalineageapiserverUpdateExternalLineageRelationshipRequestInput!)
  @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverUpdateExternalLineageRelationship(input: $input) {
      apiError {
        ...ApiError
      }
    }
  }
  ${o}
`;var f=t(483588);function h(e,a,t,r,n,i,o){try{var l=e[i](o),p=l.value}catch(e){t(e);return}l.done?a(p):Promise.resolve(p).then(r,n)}var v=t(261557);function x(e,a,t,r,n,i,o){try{var l=e[i](o),p=l.value}catch(e){t(e);return}l.done?a(p):Promise.resolve(p).then(r,n)}function y(e){return function(){var a=this,t=arguments;return new Promise(function(r,n){var i=e.apply(a,t);function o(e){x(i,r,n,o,l,"next",e)}function l(e){x(i,r,n,o,l,"throw",e)}o(void 0)})}}let M={listExternalMetadata:(e,a)=>y(function*(){let{defaultPaginationSize:t,maxResults:n}={defaultPaginationSize:(0,r.W)("databricks.fe.data.defaultLineagePaginationSize",100),maxResults:(0,r.W)("databricks.fe.data.defaultExternalMetadataMaxResults",1e3)};return a.pageSize=t,function(e){var a;return(a=function*({query:e,client:a,extractResponse:t,extractToken:r,extractContinueFetching:n,extractMetadata:i,extractApiError:o,variables:l,maxResults:p,fetchPolicy:s="network-only"}){let d=[],u=l.pageToken??null,m=0,c=null,g=l.pageSize??100,E=p??1e3,f=!0;do try{let{data:p}=yield a.query({query:e,variables:{...l,pageSize:g,pageToken:u},fetchPolicy:s});if(!p)break;let E=o?o(p):null;if(E)throw Error(E);let h=t(p);h&&d.push(...h),u=r(p),m=d.length,f=!n||n(p),c=i?i(c,p):c}catch(e){throw e}while(u&&m<E&&f);return{response:d,pageToken:u,metadata:c}},function(){var e=this,t=arguments;return new Promise(function(r,n){var i=a.apply(e,t);function o(e){h(i,r,n,o,l,"next",e)}function l(e){h(i,r,n,o,l,"throw",e)}o(void 0)})}).apply(this,arguments)}({client:e,query:p,variables:a,maxResults:n,extractResponse:e=>e.metadatalineageapiserverListExternalMetadataV2?.externalMetadata??[],extractToken:e=>e.metadatalineageapiserverListExternalMetadataV2?.nextPageToken??null,extractApiError:e=>e.metadatalineageapiserverListExternalMetadataV2?.apiError?e.metadatalineageapiserverListExternalMetadataV2.apiError.message||e.metadatalineageapiserverListExternalMetadataV2.apiError.code:null})})(),getExternalMetadata:(e,a)=>y(function*(){let{data:t}=yield e.query({query:s,variables:{nameArg:a},fetchPolicy:"network-only"});if(t.metadatalineageapiserverGetExternalMetadataV2?.apiError)throw Error(t.metadatalineageapiserverGetExternalMetadataV2.apiError.message||"Failed to get external metadata");return t.metadatalineageapiserverGetExternalMetadataV2})(),createExternalMetadata:(e,a)=>y(function*(){try{let t=yield e.mutate({mutation:d,variables:{input:{externalMetadata:a}},fetchPolicy:"network-only"});if(t.errors)throw Error("Failed to create external metadata",{cause:t.errors});let{data:r}=t;if(r.metadatalineageapiserverCreateExternalMetadataV2?.apiError)throw Error(r.metadatalineageapiserverCreateExternalMetadataV2.apiError.message);return r.metadatalineageapiserverCreateExternalMetadataV2}catch(e){throw e}})(),createLineageRelationship:(e,a)=>y(function*(){let t=yield e.mutate({mutation:u,variables:{input:{externalLineageRelationship:a}},fetchPolicy:"network-only"});if(t.errors)throw Error("Failed to create external metadata",{cause:t.errors});let{data:r}=t;if(r.metadatalineageapiserverCreateExternalLineageRelationship?.apiError)throw Error(r.metadatalineageapiserverCreateExternalLineageRelationship.apiError.message);return r.metadatalineageapiserverCreateExternalLineageRelationship})(),updateExternalMetadata:(e,a,t)=>y(function*(){try{if(!a)throw Error("External metadata is undefined");let r=yield e.mutate({mutation:m,variables:{input:{externalMetadata:a,updateMask:t}},fetchPolicy:"network-only"});if(r.errors)throw Error("Failed to update external metadata",{cause:r.errors});let{data:n}=r;if(n.metadatalineageapiserverUpdateExternalMetadataV2?.apiError)throw Error(n.metadatalineageapiserverUpdateExternalMetadataV2.apiError.message);return n.metadatalineageapiserverUpdateExternalMetadataV2}catch(e){throw e}})(),deleteExternalMetadata:(e,a)=>y(function*(){try{let t=yield e.mutate({mutation:c,variables:{input:{name:a}},fetchPolicy:"network-only"});if(t.errors)throw Error("Failed to delete external metadata",{cause:t.errors});let{data:r}=t;if(r.metadatalineageapiserverDeleteExternalMetadataV2?.apiError)throw Error(r.metadatalineageapiserverDeleteExternalMetadataV2.apiError.message);return a}catch(e){throw e}})(),getLineageRelationship:(e,a,t)=>y(function*(){let[r,i]=yield Promise.all([n.v.listExternalLineage(e,{objectInfo:a,lineageDirection:f.HWc.UPSTREAM}),n.v.listExternalLineage(e,{objectInfo:a,lineageDirection:f.HWc.DOWNSTREAM})]),o=r.response.find(e=>e.externalLineageInfo?.id===t);if(o)return(0,v.F2)(o,a,f.HWc.UPSTREAM);let l=i.response.find(e=>e.externalLineageInfo?.id===t);if(l)return(0,v.F2)(l,a,f.HWc.DOWNSTREAM);throw Error("External lineage relationship not found")})(),updateLineageRelationship:(e,a,t)=>y(function*(){let r=yield e.mutate({mutation:E,variables:{input:{externalLineageRelationship:a,updateMask:t}},fetchPolicy:"network-only"});if(r.errors)throw Error("Failed to update external lineage relationship",{cause:r.errors});let{data:n}=r;if(n.metadatalineageapiserverUpdateExternalLineageRelationship?.apiError)throw Error(n.metadatalineageapiserverUpdateExternalLineageRelationship.apiError.message)})(),deleteLineageRelationship:(e,a)=>y(function*(){let t=yield e.mutate({mutation:g,variables:{input:{externalLineageRelationship:a}},fetchPolicy:"network-only"});if(t.errors)throw Error("Failed to delete external lineage relationship",{cause:t.errors});let{data:r}=t;if(r.metadatalineageapiserverDeleteExternalLineageRelationship?.apiError)throw Error(r.metadatalineageapiserverDeleteExternalLineageRelationship.apiError.message)})()}},261557:(e,a,t)=>{t.d(a,{F2:()=>o,Uf:()=>p,je:()=>l});var r=t(22191),n=t(483588),i=t(886100);function o(e,a,t){let o=e.externalLineageInfo;if(!o?.id)throw Error("External lineage relationship response is missing id");let l=function(e){if(e.tableInfo?.name&&e.tableInfo.schemaName&&e.tableInfo.catalogName)return{table:{name:`${e.tableInfo.catalogName}.${e.tableInfo.schemaName}.${e.tableInfo.name}`}};if(e.modelInfo?.modelName&&e.modelInfo.version)return{modelVersion:{name:e.modelInfo.modelName,version:e.modelInfo.version}};if(e.fileInfo?.path)return{path:{url:e.fileInfo.path}};if(e.externalMetadataInfo?.name)return{externalMetadata:{name:e.externalMetadataInfo.name}};throw i.iT.sev2(r.Es.MetadataIntelligenceUI,"External lineage relationship fragment missing peer info",{externalLineageId:e.externalLineageInfo?.id}),Error("External lineage relationship fragment is missing peer info")}(e),p=t===n.HWc.UPSTREAM;return{id:o.id,query:o.query??void 0,source:p?l:a,target:p?a:l,columns:(o.columns??[]).flatMap(e=>null!=e.source&&null!=e.target?[{source:e.source,target:e.target}]:[]),properties:(o.properties??[]).flatMap(e=>null!=e.key&&null!=e.value?[{key:e.key,value:e.value}]:[])}}function l(e){return{id:e.id||"",name:e.name||"",owner:e.owner??void 0,systemType:e.systemType||n.hWH.OTHER,entityType:e.entityType||"",url:e.url??void 0,columns:e.columns??void 0,properties:e.properties?e.properties.map(e=>({key:null===e.key?void 0:e.key,value:null===e.value?void 0:e.value})):void 0,comment:e.description??void 0,created_at:e.createTime?new Date(e.createTime).getTime():void 0,created_by:e.createdBy??void 0,updated_at:e.updateTime?new Date(e.updateTime).getTime():void 0,updated_by:e.updatedBy??void 0,securable_kind:e.securableKind??void 0,securable_type:e.securableType??void 0}}function p(e){let a=e.properties?.reduce((e,a)=>(a.key&&a.value&&e.push({key:a.key,value:a.value}),e),[]);return Object.fromEntries(Object.entries({name:e.name,systemType:e.systemType,entityType:e.entityType,description:e.comment,url:e.url,columns:e.columns,properties:a,owner:e.owner}).filter(([e,a])=>void 0!==a))}},635828:(e,a,t)=>{t.d(a,{MJ:()=>A,Jz:()=>T,nq:()=>b,MY:()=>w});var r=t(194556),n=t(302999);t(692738);let i=t.p+"static/media/confluent.a892d381e7d65b37c9bf47bfd0b9c9dc.svg";var o=t(150788),l=t(630100),p=t(475621);let s=t.p+"static/media/looker.e948c216dec74f11acf4e01556da6cf9.svg";var d=t(848833),u=t(5654),m=t(587012),c=t(237534),g=t(749298),E=t(123577),f=t(732941),h=t(359911);let v=t.p+"static/media/sap.ff8b092f04cb72376f66eb939a79405d.svg";var x=t(587987),y=t(478848);let M=t.p+"static/media/tableau.be3c51045e321802db1185ec063fa7bd.svg";var I=t(469030),R=t(341231),L=t(483588);let A={[L.hWH.OTHER]:{name:"Other"},[L.hWH.AMAZON_REDSHIFT]:{name:"Amazon Redshift",icon:r},[L.hWH.AZURE_SYNAPSE]:{name:"Azure Synapse",icon:n},[L.hWH.CONFLUENT]:{name:"Confluent",icon:i},[L.hWH.DATABRICKS]:{name:"Databricks",icon:o},[L.hWH.GOOGLE_BIGQUERY]:{name:"Google BigQuery",icon:l},[L.hWH.KAFKA]:{name:"Kafka",icon:p.A},[L.hWH.LOOKER]:{name:"Looker",icon:s},[L.hWH.MICROSOFT_FABRIC]:{name:"OneLake",icon:d.A},[L.hWH.MICROSOFT_SQL_SERVER]:{name:"Microsoft SQL Server",icon:u},[L.hWH.MONGODB]:{name:"MongoDB",icon:m},[L.hWH.MYSQL]:{name:"MySQL",icon:c.A},[L.hWH.ORACLE]:{name:"Oracle",icon:g},[L.hWH.POSTGRESQL]:{name:"PostgreSQL",icon:E.A},[L.hWH.POWER_BI]:{name:"Power BI",icon:f.A},[L.hWH.SALESFORCE]:{name:"Salesforce",icon:h},[L.hWH.SAP]:{name:"SAP",icon:v},[L.hWH.SERVICENOW]:{name:"ServiceNow",icon:x},[L.hWH.SNOWFLAKE]:{name:"Snowflake",icon:y},[L.hWH.TABLEAU]:{name:"Tableau",icon:M},[L.hWH.TERADATA]:{name:"Teradata",icon:I},[L.hWH.WORKDAY]:{name:"Workday",icon:R}};function w(e){return A[e]||{name:e}}function T(e){return`/governance/external-metadata/${encodeURIComponent(e)}/create-relationship`}function b(e,a){return`/governance/external-metadata/${encodeURIComponent(e)}/edit-relationship/${encodeURIComponent(a)}`}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/40429.bd4c25b3fa.chunk.js.map