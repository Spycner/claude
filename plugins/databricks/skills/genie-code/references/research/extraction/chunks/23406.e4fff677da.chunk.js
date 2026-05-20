"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[23406],{206717:(e,a,t)=>{t.d(a,{G$:()=>i,x$:()=>l});var n=t(141078),r=t(491438);function o(e,a,t,n,r,o,l){try{var i=e[o](l),s=i.value}catch(e){t(e);return}i.done?a(s):Promise.resolve(s).then(n,r)}let l=(0,n.J1)`
  query GetUcTablesQuery($schemaFullName: String!, $maxResults: Int = 100, $pageToken: String)
  @component(name: "DBSQLX.FileBrowser") {
    unityCatalogSchemaNameReference(fullName: $schemaFullName) {
      schema {
        fullName
        tables(maxResults: $maxResults, pageToken: $pageToken) {
          nodes {
            managedCatalogTableInfo {
              tableId
              tableType
              name
              owner
              createdAt
              securableKind
              securableType
              browseOnly
            }
          }
          nextPageToken
        }
      }
    }
  }
`;function i(e,a,t){var n;return(n=function*(e,a,{maxResults:t=100,pageToken:n,metastoreScope:o}={},i){let{data:s}=yield e.query({query:l,variables:{schemaFullName:a,maxResults:t,pageToken:n},context:(0,r.Xe)(o),fetchPolicy:i});return s.unityCatalogSchemaNameReference?.schema?.tables??null},function(){var e=this,a=arguments;return new Promise(function(t,r){var l=n.apply(e,a);function i(e){o(l,t,r,i,s,"next",e)}function s(e){o(l,t,r,i,s,"throw",e)}i(void 0)})}).apply(this,arguments)}},215911:(e,a,t)=>{t.d(a,{BC:()=>l,Bp:()=>i,gU:()=>o});var n=t(441535),r=t(686560);function o(){let e=(0,n.W)("uc_secrets",!1);return(0,n.W)("databricks.fe.discovery.enableUCSecrets",!1)&&e}function l(){let e=(0,n.W)("uc_secrets",!1);return(0,n.W)("databricks.fe.discovery.enableUCSecrets",!1)&&e}function i(){let e=(0,r.d)("cloud","AWS");return l()&&(0,n.W)("databricks.fe.discovery.enableUCSecretsExternalAws",!1)&&"AWS"===e}},223952:(e,a,t)=>{t.d(a,{b:()=>f});var n=t(610435),r=t(692738),o=t(181440),l=t(43680),i=t(694762),s=t(382908),u=t(342411),c=t(686560),m=t(850723),d=t(672297),g=t(29824);let f=()=>{let e=(0,c.d)("isAdmin",!1),a=(0,r.useRef)(),[t,f]=(0,r.useState)(),p=(0,u.tz)(),{DEPRECATED_dataSource:y}=(0,o.useDataExplorerDataSourceContext)(),h=(0,m.O)({fallback:!0}),T=h.data?.privilege_model_version||d.x.V0,b=(0,l.bI)(T),C=()=>{f(void 0),b.reset(),a.current=void 0};return{showGrantUseCatalogModal:(e,t)=>{f(e),a.current=t},GrantUseCatalogModal:(0,n.Y)(i.aF,{componentId:"delta_sharing-grant_use_catalog_modal",visible:!!t,title:p.formatMessage({id:"PkGJwH",defaultMessage:"Additional Permissions Required"}),onCancel:C,cancelText:p.formatMessage({id:"ga3d5P",defaultMessage:"Cancel"}),confirmLoading:b.isLoading,onOk:()=>{t&&b.mutate({objectType:g.an.CATALOG,catalog:t?.catalog,permissionChanges:[{ActionTypes:t.actionTypes,ObjectKey:t.catalog,ObjectType:g.an.CATALOG,Principal:t.user}],updateType:"add",dataSource:y},{onSuccess:()=>{a.current?.(),C()}})},okText:e?p.formatMessage({id:"rQfIlq",defaultMessage:"Confirm"}):null,children:e?(0,n.FD)(n.FK,{children:[(0,n.Y)(s.o.Paragraph,{children:p.formatMessage({id:"DjmWh/",defaultMessage:"To share assets from the catalog {catalog}, you must first grant yourself the USE CATALOG and USE SCHEMA permissions"},{catalog:(0,n.Y)("b",{children:t?.catalog})})}),(0,n.Y)(s.o.Paragraph,{children:p.formatMessage({id:"wO9jLn",defaultMessage:"Click ‘Confirm’ to grant the required permissions to your user account and save the share."})})]}):(0,n.Y)(s.o.Paragraph,{children:p.formatMessage({id:"8LCj0C",defaultMessage:"To share assets from the catalog {catalog}, you must first ask your workspace admins to grant you the USE CATALOG and USE SCHEMA permissions."},{catalog:(0,n.Y)("b",{children:t?.catalog})})})})}}},340632:(e,a,t)=>{t.d(a,{P:()=>r,y:()=>o});var n=t(141078);function r({catalog:e,schema:a,skip:t=!1,withSecrets:l=!1,onCompleted:i}){let s=[e,a].join(".");return(0,n.IT)(o,{variables:{schemaFullName:s,withSecrets:l},skip:t,onCompleted:i})}let o=(0,n.J1)`
  query GetUcSchemaInfoQuery($schemaFullName: String!, $withSecrets: Boolean! = false)
  @component(name: "DBSQLX.CatalogExplorer") {
    unityCatalogSchemaNameReference(fullName: $schemaFullName) {
      schema {
        managedCatalogSchemaInfo {
          schemaId
          name
          catalogName
          catalogType
          securableKind
          browseOnly
          owner
          comment
          createdAt
          createdBy
          updatedAt
          updatedBy
          storageRoot
          storageLocation
          propertiesKvpairs {
            _json
          }
          provisioningInfo {
            state
            details
          }
          deltaSharingValidThroughTimestamp
          secretStorage @include(if: $withSecrets) {
            connectionName
            storageType
          }
        }
        tables(maxResults: 20) {
          nodes {
            managedCatalogTableInfo {
              tableId
              tableType
              name
              comment
              owner
              createdAt
            }
          }
          nextPageToken
        }
        volumes(maxResults: 20) {
          nodes {
            managedCatalogVolumeInfo {
              name
              owner
              createdAt
            }
          }
          nextPageToken
        }
        functions(maxResults: 20) {
          nodes {
            managedCatalogFunctionInfo {
              name
              owner
              createdAt
            }
          }
          nextPageToken
        }
        models(maxResults: 20) {
          nodes {
            managedCatalogRegisteredModelInfo {
              name
              owner
              createdAt
            }
          }
          nextPageToken
        }
        secrets(maxResults: 20) @include(if: $withSecrets) {
          nodes {
            managedCatalogSecretInfo {
              name
              effectiveOwner
              createTime
            }
          }
          nextPageToken
        }
      }
    }
  }
`},344918:(e,a,t)=>{t.d(a,{$:()=>l,X:()=>o});var n=t(483588),r=t(617293);function o(e){return e.toSorted((e,a)=>{let t=e.catalogType===n._E1.USER_HOME_CATALOG;if(t!==(a.catalogType===n._E1.USER_HOME_CATALOG))return t?-1:1;let o=!!e.isDefault;if(!!a.isDefault!==o)return o?-1:1;let l=e.name===r.oD;if(l!==(a.name===r.oD))return l?-1:1;let i=!!e.browse_only;if(!!a.browse_only!==i)return i?1:-1;return e.name.localeCompare(a.name)})}function l(e){return e.toSorted((e,a)=>{let t=e.name===r.Ef;if(t!==(a.name===r.Ef))return t?-1:1;return e.name.localeCompare(a.name)})}},357548:(e,a,t)=>{t.d(a,{A:()=>o,Su:()=>l,eJ:()=>i});var n=t(342411),r=t(641760);let o=(0,n.zR)({id:"cWOjzx",defaultMessage:"My Data"}),l=(0,n.zR)({id:"wfEfNF",defaultMessage:"My Files"});function i(e,a,t,n){if((0,r.Sg)(a,t,n))return e.formatMessage(l)}},428296:(e,a,t)=>{t.d(a,{DI:()=>l,WO:()=>r,mk:()=>s,nW:()=>o,pJ:()=>i});var n=t(141078);function r({catalog:e,schema:a,table:t,skip:o=!1,onCompleted:i}){let s=[e,a,t].join(".");return(0,n.IT)(l,{variables:{tableFullName:s},skip:o,onCompleted:i})}let o=(0,n.J1)`
  fragment TableColumnDetails on ManagedcatalogColumnInfo {
    name
    comment
    typeText
    typeName
    typeJson
    partitionIndex
    typePrecision
    typeScale
    typeIntervalType
    position
    nullable
    mask {
      functionName
      usingColumnNames
    }
    metadata {
      displayName
      synonyms
      format {
        numberPlain {
          decimalPlaces {
            type
            places
          }
          hideGroupSeparator
          abbreviation
        }
        numberCurrency {
          decimalPlaces {
            type
            places
          }
          hideGroupSeparator
          abbreviation
          currencyCode
        }
        numberPercent {
          decimalPlaces {
            type
            places
          }
          hideGroupSeparator
        }
        numberBytes {
          decimalPlaces {
            type
            places
          }
          hideGroupSeparator
        }
        date {
          dateFormat
          leadingZeros
        }
        dateTime {
          dateFormat
          timeFormat
          leadingZeros
        }
      }
    }
  }
`,l=(0,n.J1)`
  ${o}
  query GetUcTableInfoQuery($tableFullName: String!) @component(name: "DBSQLX.CatalogExplorer") {
    unityCatalogTableNameReference(fullName: $tableFullName) {
      table {
        managedCatalogTableInfo {
          name
          catalogName
          schemaName
          comment
          owner
          tableType
          tableId
          pipelineId
          securableKind
          securableType
          dataSourceFormat
          columnInfos {
            columns {
              ...TableColumnDetails
            }
          }
          tableConstraints {
            primaryKeyConstraint {
              childColumns
              timeseriesColumns
              name
            }
            foreignKeyConstraint {
              childColumns
              name
              parentColumns
              parentTable
            }
            namedTableConstraint {
              name
            }
          }
          browseOnly
          viewDefinition
          sqlPath
          storageCredentialName
          storageLocation
          deltaSharingValidThroughTimestamp
          createdAt
          createdBy
          updatedAt
          updatedBy
          effectiveAutoMaintenanceFlag {
            value
            inheritedFromType
            inheritedFromName
          }
          effectiveAutoMaintenanceFlag {
            value
            inheritedFromType
            inheritedFromName
          }
          propertiesPairs {
            _json
          }
          deltaRuntimePropertiesKvpairs {
            _json
          }
          deltaUniformIceberg {
            metadataLocation
            convertedDeltaVersion
            convertedDeltaTimestamp
            baseConvertedDeltaVersion
          }
          provisioningInfo {
            state
            details
          }
          rowFilter {
            functionName
            inputColumnNames
          }
        }
      }
    }
  }
`;function i({catalog:e,schema:a,table:t,skip:r=!1,onCompleted:o}){let l=[e,a,t].join(".");return(0,n.IT)(s,{variables:{tableFullName:l},skip:r,onCompleted:o})}let s=(0,n.J1)`
  ${o}
  query GetUcTableJoinTagsQuery($tableFullName: String!) @component(name: "DBSQLX.CatalogExplorer") {
    unityCatalogTableNameReference(fullName: $tableFullName) {
      table {
        managedCatalogTableInfo {
          name
          catalogName
          schemaName
          comment
          owner
          tableType
          tableId
          pipelineId
          securableKind
          securableType
          dataSourceFormat
          columnInfos {
            firstPage: paginatedColumns(pageSize: 20, offset: 0) {
              ...TableColumnDetails
              tags {
                tagKey
                tagValue
                updateTime
                updatedBy
                sourceType
              }
            }
            followingPages: paginatedColumns(pageSize: 40000, offset: 20) {
              ...TableColumnDetails
            }
          }
          tableConstraints {
            primaryKeyConstraint {
              childColumns
              timeseriesColumns
              name
            }
            foreignKeyConstraint {
              childColumns
              name
              parentColumns
              parentTable
            }
            namedTableConstraint {
              name
            }
          }
          browseOnly
          viewDefinition
          sqlPath
          storageCredentialName
          storageLocation
          deltaSharingValidThroughTimestamp
          createdAt
          createdBy
          updatedAt
          updatedBy
          effectiveAutoMaintenanceFlag {
            value
            inheritedFromType
            inheritedFromName
          }
          effectiveAutoMaintenanceFlag {
            value
            inheritedFromType
            inheritedFromName
          }
          propertiesPairs {
            _json
          }
          deltaRuntimePropertiesKvpairs {
            _json
          }
          deltaUniformIceberg {
            metadataLocation
            convertedDeltaVersion
            convertedDeltaTimestamp
            baseConvertedDeltaVersion
          }
          provisioningInfo {
            state
            details
          }
          rowFilter {
            functionName
            inputColumnNames
          }
        }
      }
    }
  }
`},498250:(e,a,t)=>{t.d(a,{aQ:()=>l,xS:()=>o});var n=t(141078);function r(e,a,t,n,r,o,l){try{var i=e[o](l),s=i.value}catch(e){t(e);return}i.done?a(s):Promise.resolve(s).then(n,r)}let o=(0,n.J1)`
  query GetUcFunctionsQuery($schemaFullName: String!, $maxResults: Int = 100, $pageToken: String)
  @component(name: "DBSQLX.FileBrowser") {
    unityCatalogSchemaNameReference(fullName: $schemaFullName) {
      schema {
        fullName
        functions(maxResults: $maxResults, pageToken: $pageToken) {
          nodes {
            managedCatalogFunctionInfo {
              name
              owner
              createdAt
              securableKind
              securableType
              browseOnly
              functionId
            }
          }
          nextPageToken
        }
      }
    }
  }
`;function l(e,a,t){var n;return(n=function*(e,a,{maxResults:t=100,pageToken:n}={},r){let{data:l}=yield e.query({query:o,variables:{schemaFullName:a,maxResults:t,pageToken:n},fetchPolicy:r});return l.unityCatalogSchemaNameReference?.schema?.functions??null},function(){var e=this,a=arguments;return new Promise(function(t,o){var l=n.apply(e,a);function i(e){r(l,t,o,i,s,"next",e)}function s(e){r(l,t,o,i,s,"throw",e)}i(void 0)})}).apply(this,arguments)}},556215:(e,a,t)=>{t.d(a,{L4:()=>i,l3:()=>l,nb:()=>s});var n,r=t(342411),o=t(357548),l=((n={}).MY_ORGANIZATION="My organization",n.DELTA_SHARES_RECEIVED="Delta Shares received",n.LEGACY="Legacy",n.OUTSIDE_WORKSPACE="Outside this workspace",n.HOME_VOLUME="Home volume",n);let i={"My organization":(0,r.zR)({id:"EiZa9Z",defaultMessage:"My organization"}),"Delta Shares received":(0,r.zR)({id:"Mfcnof",defaultMessage:"Delta Shares received"}),Legacy:(0,r.zR)({id:"WWW5DS",defaultMessage:"Legacy"}),"Outside this workspace":(0,r.zR)({id:"9JBqq2",defaultMessage:"Outside this workspace"}),"Home volume":o.A};function s(e,a,t,n,r){let o=[];for(let[l,i]of e){let e=a(l);o.push({id:t(e),data:e,children:i.map(e=>({id:t(e),data:e})),metadata:n(l),defaultExpanded:r?.(l)})}return o}},572538:(e,a,t)=>{t.d(a,{Vl:()=>o,ih:()=>l});var n=t(141078);function r(e,a,t,n,r,o,l){try{var i=e[o](l),s=i.value}catch(e){t(e);return}i.done?a(s):Promise.resolve(s).then(n,r)}let o=(0,n.J1)`
  query GetUcVolumesQuery($schemaFullName: String!, $maxResults: Int = 100, $pageToken: String)
  @component(name: "DBSQLX.FileBrowser") {
    unityCatalogSchemaNameReference(fullName: $schemaFullName) {
      schema {
        fullName
        volumes(maxResults: $maxResults, pageToken: $pageToken) {
          nodes {
            managedCatalogVolumeInfo {
              name
              owner
              createdAt
              securableKind
              securableType
              browseOnly
              volumeId
            }
          }
          nextPageToken
        }
      }
    }
  }
`;function l(e,a,t){var n;return(n=function*(e,a,{maxResults:t=100,pageToken:n}={},r){let{data:l}=yield e.query({query:o,variables:{schemaFullName:a,maxResults:t,pageToken:n},fetchPolicy:r});return l.unityCatalogSchemaNameReference?.schema?.volumes??null},function(){var e=this,a=arguments;return new Promise(function(t,o){var l=n.apply(e,a);function i(e){r(l,t,o,i,s,"next",e)}function s(e){r(l,t,o,i,s,"throw",e)}i(void 0)})}).apply(this,arguments)}},609378:(e,a,t)=>{t.d(a,{Kr:()=>i,Wz:()=>s,ZY:()=>l});var n=t(141078),r=t(491438);function o(e,a,t,n,r,o,l){try{var i=e[o](l),s=i.value}catch(e){t(e);return}i.done?a(s):Promise.resolve(s).then(n,r)}function l({catalog:e,metastoreScope:a,skip:t=!1,onCompleted:o}){return(0,n.IT)(i,{variables:{catalogName:e??""},context:(0,r.Xe)(a),skip:t,onCompleted:o})}let i=(0,n.J1)`
  query GetUcCatalogInfoQuery($catalogName: String!, $schemasMaxResults: Int = 20, $schemasPageToken: String)
  @component(name: "DBSQLX.CatalogExplorer") {
    unityCatalogCatalogNameReference(fullName: $catalogName) {
      catalog {
        managedCatalogCatalogInfo {
          id
          metastoreId
          name
          browseOnly
          securableKind
          catalogType
          comment
          isolationMode
          connectionName
          deltaSharingValidThroughTimestamp
          owner
          shareName
          providerName
          storageRoot
          storageLocation
          createdAt
          createdBy
          updatedAt
          updatedBy
          optionsKvpairs {
            _json
          }
          propertiesKvpairs {
            _json
          }
          provisioningInfo {
            state
            details
          }
          queryFederationAttributes {
            lastRefreshedTimestamp
          }
          managedEncryptionSettings {
            customerManagedKeyId
            azureKeyVaultKeyId
            azureEncryptionSettings {
              azureTenantId
              azureCmkAccessConnectorId
              azureCmkManagedIdentityId
            }
          }
        }
        schemas(maxResults: $schemasMaxResults, pageToken: $schemasPageToken) {
          nodes {
            managedCatalogSchemaInfo {
              name
              owner
              createdAt
              securableKind
              securableType
              browseOnly
              schemaId
            }
          }
          nextPageToken
        }
      }
    }
  }
`;function s(e,a,t){var n;return(n=function*(e,a,{maxResults:t=20,pageToken:n,metastoreScope:o}={},l){let{data:s}=yield e.query({query:i,variables:{catalogName:a,schemasMaxResults:t,schemasPageToken:n},context:(0,r.Xe)(o),fetchPolicy:l}),u=s.unityCatalogCatalogNameReference?.catalog?.schemas;return{ucSchemas:u?.nodes??[],nextPageToken:u?.nextPageToken??null}},function(){var e=this,a=arguments;return new Promise(function(t,r){var l=n.apply(e,a);function i(e){o(l,t,r,i,s,"next",e)}function s(e){o(l,t,r,i,s,"throw",e)}i(void 0)})}).apply(this,arguments)}},673298:(e,a,t)=>{t.d(a,{Rf:()=>y,Ys:()=>h,fx:()=>b});var n=t(483588),r=t(617293),o=t(680479),l=t(29824),i=t(491438),s=t(556215),u=t(311642),c=t(344918);function m(e,a,t,n,r,o,l){try{var i=e[o](l),s=i.value}catch(e){t(e);return}i.done?a(s):Promise.resolve(s).then(n,r)}function d(e){return function(){var a=this,t=arguments;return new Promise(function(n,r){var o=e.apply(a,t);function l(e){m(o,n,r,l,i,"next",e)}function i(e){m(o,n,r,l,i,"throw",e)}l(void 0)})}}let g=(e,a,t,n,r)=>({key:e,filter:(Array.isArray(a)?a:[a]).map(e=>`type=${e}`).join(" OR "),includeBrowse:n,includeUnbound:r,targetGroup:t}),{MY_ORGANIZATION:f,DELTA_SHARES_RECEIVED:p}=s.l3;function y({includeBrowse:e,includeUnbound:a}){return[g("my_org_managed","MANAGED_CATALOG",f,e,a),g("my_org_managed_online","MANAGED_ONLINE_CATALOG",f,e,a),g("my_org_foreign","FOREIGN_CATALOG",f,e,a),g("my_org_internal_system",["INTERNAL_CATALOG","SYSTEM_CATALOG"],f,e,a),g("delta_sharing","DELTASHARING_CATALOG",p,e,a)]}function h(e,a,t,n){return d(function*(){let r=t.map(t=>()=>d(function*(){let r,l=[];do{let s=yield function(e,a,t,n){return d(function*(){let{data:r}=yield e.query({query:o.I,variables:{maxResults:u.WX,pageToken:t??null,omitAuthorizedPaths:!0,filter:n?.filter,includeBrowse:n?.includeBrowse,includeUnbound:n?.includeUnbound},fetchPolicy:a,context:(0,i.Xe)(n?.metastoreScope),canonizeResults:!1});return{items:r?.unityCatalogCatalogs?.nodes??[],nextPageToken:r?.unityCatalogCatalogs?.nextPageToken??null}})()}(e,a,r,{filter:t.filter,includeBrowse:t.includeBrowse,includeUnbound:t.includeUnbound,metastoreScope:n});l.push(...s.items),r=s.nextPageToken??void 0}while(r);return l})()),l=yield d(function*(){let e=Array(r.length),a=0;return yield Promise.all(Array.from({length:Math.min(10,r.length)},()=>d(function*(){for(;a<r.length;){let t=a++;try{e[t]={status:"fulfilled",value:yield r[t]()}}catch(a){e[t]={status:"rejected",reason:a}}}})())),e})(),s=new Map;return l.forEach((e,a)=>{let n=t[a];"fulfilled"===e.status?s.set(n.key,{streamKey:n.key,config:n,items:e.value}):s.set(n.key,{streamKey:n.key,config:n,items:[],failed:!0,error:e.reason})}),s})()}let T=()=>{let e=globalThis.scheduler;if(e?.yield)return e.yield();return new Promise(e=>setTimeout(e,0))};function b(e,a){return d(function*(){let t=new Map;for(let[,n]of e)for(let e of n.items){if(null==e||null==e.name)continue;let r=e.managedCatalogCatalogInfo?.accessibleInCurrentWorkspace===!1,o=r?s.l3.OUTSIDE_WORKSPACE:n.config.targetGroup,i=function(e,a){let t=e.name??"",n={objectType:l.an.CATALOG,catalog:t,securable_id:e.id,securableKind:e.securableKind??void 0};return(0,u.hf)({name:t,type:u.Hl.CATALOG,fullName:t,browse_only:e.managedCatalogCatalogInfo?.browseOnly??!1,accessible:a.accessible,securableKind:e.securableKind??void 0,catalogType:e.managedCatalogCatalogInfo?.catalogType??void 0,isDefault:!!(a.defaultCatalogName&&e.name===a.defaultCatalogName),dataEntity:n,needsCompute:a.isForeignDataRequireCompute?.(e.securableKind??void 0)})}(e,{defaultCatalogName:a.defaultCatalogName,isForeignDataRequireCompute:a.isForeignDataRequireCompute,accessible:!r&&void 0}),c=t.get(o)??[];c.push(i),t.set(o,c)}return yield T(),function(e){let a=e.get(s.l3.MY_ORGANIZATION);if(!a)return;let t=[],o=[];for(let e of a)e.name===r.Ef||e.securableKind===n.T_5.CATALOG_DELTASHARING?t.push(e):o.push(e);if(0===t.length)return;e.set(s.l3.MY_ORGANIZATION,o);let l=e.get(s.l3.DELTA_SHARES_RECEIVED)??[];l.push(...t),e.set(s.l3.DELTA_SHARES_RECEIVED,l)}(t),yield T(),function(e){for(let[a,t]of e){let n=new Set;e.set(a,t.filter(e=>{let a=function(e){if(e.dataEntity?.securable_id)return`id:${e.dataEntity.securable_id}`;return`name:${e.name}|kind:${e.securableKind}|browse:${e.browse_only}|accessible:${e.accessible}`}(e);if(n.has(a))return!1;return n.add(a),!0}))}}(t),yield T(),function(e){let a={[s.l3.MY_ORGANIZATION]:c.X,[s.l3.DELTA_SHARES_RECEIVED]:c.$,[s.l3.OUTSIDE_WORKSPACE]:e=>e.toSorted((e,a)=>e.name.localeCompare(a.name))};for(let[t,n]of e){let r=a[t];r&&e.set(t,r(n))}}(t),t})()}},680479:(e,a,t)=>{t.d(a,{I:()=>r});var n=t(141078);let r=(0,n.J1)`
  query GetUcCatalogsQuery(
    $maxResults: Int!
    $pageToken: String
    $includeBrowse: Boolean
    $includeUnbound: Boolean
    $omitAuthorizedPaths: Boolean
    $filter: String
  ) @component(name: "DBSQLX.CatalogExplorer") {
    unityCatalogCatalogs(
      maxResults: $maxResults
      pageToken: $pageToken
      includeBrowse: $includeBrowse
      includeUnbound: $includeUnbound
      omitAuthorizedPaths: $omitAuthorizedPaths
      filter: $filter
    ) {
      nodes {
        id
        name
        securableKind
        managedCatalogCatalogInfo {
          accessibleInCurrentWorkspace
          catalogType
          browseOnly
        }
      }
      nextPageToken
    }
  }
`},846312:(e,a,t)=>{t.d(a,{Qp:()=>o,xH:()=>l});var n=t(141078);function r(e,a,t,n,r,o,l){try{var i=e[o](l),s=i.value}catch(e){t(e);return}i.done?a(s):Promise.resolve(s).then(n,r)}let o=(0,n.J1)`
  query GetUcModelsQuery($schemaFullName: String!, $maxResults: Int = 100, $pageToken: String)
  @component(name: "DBSQLX.FileBrowser") {
    unityCatalogSchemaNameReference(fullName: $schemaFullName) {
      schema {
        fullName
        models(maxResults: $maxResults, pageToken: $pageToken) {
          nodes {
            managedCatalogRegisteredModelInfo {
              name
              owner
              createdAt
              securableKind
              securableType
              browseOnly
              id
            }
          }
          nextPageToken
        }
      }
    }
  }
`;function l(e,a,t){var n;return(n=function*(e,a,{maxResults:t=100,pageToken:n}={},r){let{data:l}=yield e.query({query:o,variables:{schemaFullName:a,maxResults:t,pageToken:n},fetchPolicy:r});return l.unityCatalogSchemaNameReference?.schema?.models??null},function(){var e=this,a=arguments;return new Promise(function(t,o){var l=n.apply(e,a);function i(e){r(l,t,o,i,s,"next",e)}function s(e){r(l,t,o,i,s,"throw",e)}i(void 0)})}).apply(this,arguments)}},948555:(e,a,t)=>{t.d(a,{s:()=>r});var n=t(141078);let r=(0,n.J1)`
  query UserRecents__deduped($count: Int!, $filter: UseractivityListRecentAssetsRequestFilterInput)
  @component(name: "Lakeview.DatabricksOne") {
    useractivityListRecentAssets(input: { numResults: $count, filter: $filter }) {
      assets {
        asset {
          name
          id
          type
          unityCatalogSecurable {
            securableKind
          }
        }
        viewTime
      }
      nextPageToken
    }
  }
`},964942:(e,a,t)=>{t.d(a,{Ku:()=>l,L3:()=>o});var n=t(141078);function r(e,a,t,n,r,o,l){try{var i=e[o](l),s=i.value}catch(e){t(e);return}i.done?a(s):Promise.resolve(s).then(n,r)}let o=(0,n.J1)`
  query GetUcSecretsQuery($schemaFullName: String!, $maxResults: Int = 100, $pageToken: String)
  @component(name: "DBSQLX.FileBrowser") {
    unityCatalogSchemaNameReference(fullName: $schemaFullName) {
      schema {
        fullName
        secrets(maxResults: $maxResults, pageToken: $pageToken) {
          nodes {
            managedCatalogSecretInfo {
              name
              effectiveOwner
              securableKind
              securableType
              browseOnly
              id
              createTime
            }
          }
          nextPageToken
        }
      }
    }
  }
`;function l(e,a,t){var n;return(n=function*(e,a,{maxResults:t=100,pageToken:n,enabled:r=!0}={},l){if(!r)return null;let{data:i}=yield e.query({query:o,variables:{schemaFullName:a,maxResults:t,pageToken:n},fetchPolicy:l});return i.unityCatalogSchemaNameReference?.schema?.secrets??null},function(){var e=this,a=arguments;return new Promise(function(t,o){var l=n.apply(e,a);function i(e){r(l,t,o,i,s,"next",e)}function s(e){r(l,t,o,i,s,"throw",e)}i(void 0)})}).apply(this,arguments)}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/23406.e4fff677da.chunk.js.map