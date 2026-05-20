"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[43518],{1558:(e,t,r)=>{r.d(t,{u:()=>s});var n=r(692738),a=r(523318),i=r(337706);function s({codecMap:e}){let[t,r]=(0,i.ok)(e=>new URLSearchParams(Array.from(e.entries())).toString()),o=(0,n.useMemo)(()=>new a.u(e,new URLSearchParams(t)),[e,t]),l=(0,n.useCallback)((e,t)=>r((()=>{if("function"!=typeof e)return e;return new URLSearchParams(e(o).all.toString())})(),t),[r,o]);return[o,l]}},1859:(e,t,r)=>{r.d(t,{N3:()=>E,XE:()=>p,_p:()=>f,a5:()=>g,gf:()=>d,kV:()=>h,o8:()=>m,z6:()=>i});var n=r(978679);let a=e=>e;class i extends Error{constructor(e){super(e),this.name="URLParamCodecError"}}function s(e){let t=(0,n.PD)(e);return e=>{if(t(e))return e;throw new i(`Invalid enum value: "${e}"`)}}let o=e=>{if("true"===e.toLowerCase())return!0;if("false"===e.toLowerCase())return!1;throw new i(`Invalid boolean value: "${e}"`)},l=e=>JSON.stringify(e),u=e=>{let t=Number(e);if(!isNaN(t))return t;throw new i(`Invalid number value: "${e}"`)},c=e=>e.toString(),d={identity:a,genStringToEnum:s,stringToBoolean:o,booleanToString:l,stringToNumber:u,numberToString:c},f={serialize:a,deserialize:a},p={serialize:l,deserialize:o},m={serialize:c,deserialize:u},g=e=>({serialize:a,deserialize:s(e)}),E=e=>({serialize:t=>{try{return JSON.stringify(e.validateSync(t))}catch(e){throw new i(`Setting to invalid param value: "${t}": ${e instanceof Error?e.message:"Unknown error"}`)}},deserialize:t=>{let r;try{r=""===t?void 0:JSON.parse(t)}catch(e){throw new i(`Invalid JSON value: "${t}": ${e instanceof Error?e.message:"Unknown error"}`)}try{return e.validateSync(r)}catch(e){throw new i(`Invalid param: "${t}": ${e instanceof Error?e.message:"Unknown error"}`)}}}),h={stringCodec:f,booleanCodec:p,numberCodec:m,genEnumCodec:g,genJsonCodec:E}},26446:(e,t,r)=>{r.d(t,{HT:()=>c,M8:()=>d,Pf:()=>o,bp:()=>l,gb:()=>n,iN:()=>u,pP:()=>a,xB:()=>f});let n=1e3,a={enableAccountGroups:!1,enableAccountServicePrincipals:!1,enableAccountUsers:!1,enableWorkspaceGroups:!1,enableWorkspaceServicePrincipals:!1,enableWorkspaceUsers:!1},i=/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,s={admins:"Admins",users:"All workspace users","account users":"All account users"},o=e=>{if(!e)return e;return s[e]??e},l=e=>{let t=new Map;return e.forEach(e=>{let r=c(e)||e.name;t.has(r)||t.set(r,[]),t.get(r)?.push(e)}),t},u=e=>{switch(e.kind){case"user":return e.fullName;case"serviceprincipal":return e.name;case"group":return e.displayName;default:return""}},c=e=>{switch(e.kind){case"user":case"group":return e.name||"";case"serviceprincipal":return e.applicationId||"";default:return""}},d=({uniqueName:e,id:t,kind:r,displayName:n})=>{switch(r){case"user":return{id:t||"",optionId:`user.${t}`,kind:r,name:e||"",fullName:n||"",title:""};case"serviceprincipal":return{id:t||"",optionId:`serviceprincipal.${t}`,kind:r,name:n||"",applicationId:e||"",title:""};case"group":return{id:t||"",optionId:`group.${t}`,kind:r,name:e||"",displayName:o(e||""),title:""};default:return}};function f(e){return e?i.test(e)?"serviceprincipal":"user":void 0}},38301:(e,t,r)=>{r.d(t,{$:()=>T,V:()=>b});var n=r(610435);r(692738);var a=r(497895),i=r(382908),s=r(964133),o=r(332702),l=r(339518),u=r(407374),c=r(126927),d=r(342411),f=r(817148),p=r(115957),m=r(819524),g=r(441535),E=r(657825),h=r(217985),S=r(850723),_=r(641760),A=r(633203),v=r(759838);function T({form:e,onChange:t,securableType:r,renderDatabricksManagedStorageUI:y,showHint:C=!0,description:I}){let R=(0,d.tz)(),{theme:O}=(0,a.wn)(),{databricksManagedStorage:M,storage_root:P,storage_sub_path:N}=e.watch(),w=(0,S.O)().data?.region??"",k=!(0,_.sJ)()||(0,E.fo)()===E.hQ.ServerlessOnly,L=b(w)&&((0,g.W)("enable_arclight",null)??(0,g.W)("databricks.fe.accountsui.enableDatabricksManagedStorageUIInCatalogCreation",!1))&&(0,p.zl)(f.g3.CATALOG_DEFAULT_STORAGE)&&k,U=(0,v.Hi)("/explore/locations/create","/"),D=(0,n.Y)(d.sA,{id:"ZqI9g7",defaultMessage:"Catalogs that use default storage are only accessible from this workspace by default. You can grant other workspaces access, but they must use serverless compute to access data in the catalog. <linkText>Learn more.</linkText>",values:{linkText:e=>(0,n.Y)(i.o.Link,{href:m.Ay.DEFAULT_STORAGE,target:"_blank",componentId:"uc_entity.storage_location.default_storage_binding_alert.learn_more_link",children:e})}});return(0,n.FD)("div",{children:[(0,n.Y)(s.D.Label,{htmlFor:"storage_root",children:R.formatMessage({id:"zlkkH+",defaultMessage:"Storage location"})}),(0,n.FD)("div",{css:{display:"flex",flexDirection:"column",gap:O.spacing.md},children:[I&&(0,n.Y)(s.D.Hint,{children:I}),L&&y&&(0,n.Y)(o.Sc,{componentId:"codegen_web-shared_src_metastore_uc_components_storagelocation.tsx_59",isChecked:M,onChange:e=>{t("databricksManagedStorage",e)},children:(0,n.Y)(d.sA,{id:"y/NQmc",defaultMessage:"Use default storage "})}),(0,_.mC)()&&M&&(0,n.Y)(l.F,{componentId:"uc_entity.storage_location.default_storage_binding_alert",message:D,type:"info"}),(!L||!M)&&(0,n.FD)(n.FK,{children:[C&&(0,n.Y)(s.D.Hint,{children:R.formatMessage({id:"yzS8mp",defaultMessage:"Cloud storage location used for managed tables and volumes in this catalog. If not specified, it defaults to the metastore root location."})}),(0,n.FD)("section",{css:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:O.spacing.xs,marginBottom:O.spacing.sm},children:[(0,n.Y)(A.Y,{value:P?.name,onChange:e=>{t("storage_root",e)}}),(0,n.Y)(u.p,{componentId:"codegen_web-shared_src_metastore_uc_components_storagelocation.tsx_104",type:"text",placeholder:R.formatMessage({id:"3vZbc1",defaultMessage:"sub/path"}),value:N,onChange:({target:{value:e}})=>{t("storage_sub_path",e)},"aria-label":R.formatMessage({id:"yVOx68",defaultMessage:"Subpath"})}),(0,n.FD)(h.N,{componentId:"create-external-location-link",target:"_blank",to:U,asTypographyLink:!0,children:[R.formatMessage({id:"tvzOlX",defaultMessage:"Create a new external location"})," ",(0,n.Y)(c.A,{})]})]}),P&&(0,n.Y)("section",{css:{padding:`${O.spacing.sm}px ${O.spacing.md}px`,margin:`${O.spacing.sm}px 0`,background:O.colors.backgroundSecondary,borderRadius:O.legacyBorders.borderRadiusMd},children:(0,n.Y)(i.o.Text,{children:(0,v.xT)(P?.url,N)})})]})]})]})}function b(e){if((0,g.W)("databricks.objectstoragelm.skipArclightAvailableRegionsCheck",!1))return!0;let t=JSON.parse((0,g.W)("databricks.objectstoragelm.arclightAvailableRegions",null));if(null===t)return!0;return t.includes(e)}},42289:(e,t,r)=>{r.d(t,{GL:()=>o,cc:()=>u,iw:()=>c,k2:()=>s,ub:()=>d});var n,a,i=r(864833),s=((n={}).TRANSACTIONS_PER_SECOND="TransactionsPerSecond",n.OPEN_CONNECTIONS="OpenConnections",n.DEADLOCKS="Deadlocks",n.CPU_UTILIZATION_PERCENT="CPUUtilizationPercent",n.ROWS_FETCHED_PER_SECOND="RowsFetchedPerSecond",n.ROWS_RETURNED_PER_SECOND="RowsReturnedPerSecond",n.ROWS_INSERTED_PER_SECOND="RowsInsertedPerSecond",n.ROWS_UPDATED_PER_SECOND="RowsUpdatedPerSecond",n.ROWS_DELETED_PER_SECOND="RowsDeletedPerSecond",n.STORAGE_UTILIZATION_BYTES="StorageUtilizationBytes",n.STORAGE_THROUGHPUT_UTILIZATION_PERCENT="StorageThroughputUtilizationPercent",n.BUFFER_CACHE_HIT_RATE_PERCENT="BufferCacheHitRatePercent",n.LOCAL_SSD_CACHE_HIT_RATE_PERCENT="LocalSSDCacheHitRatePercent",n),o=((a={}).ROWS_PER_SECOND_METRICS="RowsPerSecondMetrics",a);let l=`${i.W.LIST_PAGE}/online-stores`,u={LIST:l,VIEW:`${l}/:storeName`},c={Min:2,Max:35},d=3e3},55267:(e,t,r)=>{r.d(t,{w:()=>l});var n=r(576391),a=r.n(n),i=r(979551),s=r(595615),o=r(710343);function l({fetchArgs:e,getQueryObject:t,checkQualifiedResponse:r,dataReconciliation:n,reconcileKey:u}){let c=[],d=e.reduce((e,{args:{isForeignData:r,...n},useQueryOptions:a})=>{function i(e){return{...t({...n,isForeignData:e}),...a}}return e.push(i(!1)),c.push(!1),r&&(e.push(i(!0)),c.push(!0)),e},[]),f=(0,s.uV)({queries:d}),p=[];for(let e=0;e<f.length;e++){let t=f[e];c[e]?p.at(-1)?.push(t):p.push([t])}let m=p.map(e=>{let t,n=!(e.length>1)||!e.find(({data:e})=>r(e)),i=e.some(({isLoading:e})=>e)&&n,l=e.some(({isFetching:e})=>e)&&n;if(e.length>1){let[n,a]=e;t=a.error instanceof o.jo?n.isError||!r(n.data):a.isError}else t=e[0].isError;let c=a()(e,({data:e})=>e)?.data,d=e.filter(({data:e})=>e&&r(e)).map(({data:e})=>e);if(d.length>1&&u){let[e,...t]=d,r=new Map;e.forEach((e,t)=>r.set(e?.[u],t)),t?.forEach(t=>{t?.forEach(t=>{let n=r.get(t?.[u]);void 0===n?(r.set(t?.[u],e.length),e.push(t)):e[n]={...e[n],...t}})}),c=e}let f=(0,s.RK)(e);return{isIdle:f,isLoading:i,isFetching:l,isFetched:!f&&!l,isError:t,isSuccess:!i&&!t,data:c,error:a()(e,({error:e})=>e)?.error}});return(0,i.L)(m)}},55749:(e,t,r)=>{r.d(t,{F:()=>n,X:()=>a});class n extends Error{constructor(e,t){super(e),this.name="SqlQueryError",this.cause=t}}let a=1e6},56579:(e,t,r)=>{r.d(t,{e:()=>a});var n=r(837077);function a(e){return!!(e&&(0,n.A)(e))}},57776:(e,t,r)=>{r.d(t,{M:()=>l});var n=r(610435),a=r(964133),i=r(174568),s=r(342411),o=r(759838);function l({form:e,label:t,emptyHint:r,allowClear:u,disabled:c}){let d=(0,s.tz)(),f=e.formState.errors,{ref:p,...m}=e.register("name",{required:!0,pattern:{value:o.QX,message:d.formatMessage({id:"D89XTn",defaultMessage:"Name cannot include period, space, or forward-slash"})}});return(0,n.FD)("div",{children:[(0,n.Y)(a.D.Label,{htmlFor:"name",required:!0,children:t}),(0,n.Y)(i.t.Input,{id:"name",componentId:"codegen_web-shared_src_metastore_uc_components_ucsecurablename.tsx_45",control:e.control,validationState:f?.name?"error":void 0,spellCheck:"false",allowClear:u,disabled:c,...m}),f?.name?.type==="required"&&(0,n.Y)(a.D.Message,{type:"error",message:r}),f?.name?.type==="pattern"&&(0,n.Y)(a.D.Message,{type:"error",message:d.formatMessage({id:"D89XTn",defaultMessage:"Name cannot include period, space, or forward-slash"})}),f?.name?.type==="unique"&&(0,n.Y)(a.D.Message,{type:"error",message:f?.name?.message||d.formatMessage({id:"swwzzf",defaultMessage:"Name is taken, select a unique name"})})]})}},66018:(e,t,r)=>{r.d(t,{o:()=>s});var n=r(692738),a=r(488655),i=r(720263);function s(){let e=(0,a.Zp)(),t=(0,n.useCallback)((t,r={})=>{e(t,r)},[e]),r=(0,n.useCallback)((e,r)=>{t(i.hk.getPipelineListRoute(e),r)},[t]),s=(0,n.useCallback)(e=>{t(i.hk.getPipelineCreateRoute(),e)},[t]),o=(0,n.useCallback)((e,r)=>{let n="/editor/pipelines/new",a=new URLSearchParams({contextId:"workspace",...e?{pathName:e}:{}}).toString();t(a?`${n}?${a}`:n,r)},[t]),l=(0,n.useCallback)((e,r,n,{showSourceCodePopover:a,preserveSearchParams:s,...o}={})=>{t(i.hk.getPipelineDetailsRoute(e,r,n,{showSourceCodePopover:a,preserveSearchParams:s}),o)},[t]);return{navigateToPipelineList:r,navigateToPipelineCreate:s,navigateToPipelineEditorCreate:o,navigateToPipelineDetails:l,navigateToPipelineSettings:(0,n.useCallback)((e,{lastUpdateId:r,...n}={})=>{t(i.hk.getPipelineSettingsRoute(e,{lastUpdateId:r}),n)},[t]),navigateToPipelineCreateFromSampleData:(0,n.useCallback)(e=>{t(i.hk.getPipelineCreateFromSampleDataRoute(),e)},[t])}}},137773:(e,t,r)=>{r.d(t,{Jz:()=>l,V7:()=>u,gj:()=>c});var n=r(686560),a=r(141078),i=r(184123),s=r(730543),o=r(604753);let l=(0,a.J1)`
  query CanCreateCluster($clusterPurpose: ClusterPurpose) @component(name: "Clusters.UI") {
    currentUser {
      permissions {
        clusters {
          canCreateCluster(clusterPurpose: $clusterPurpose)
          hasCreateClusterEntitlement
        }
      }
    }
  }
`;function u(){let e=o.O.isTrialExpired((0,n.d)("trialExpirationTime",""));return(0,i.q)()||e?{loading:!1,canCreateCluster:!1,hasCreateClusterEntitlement:!1,clusterAclsEnabled:!0,noPermissionMessage:e?o.O.getTrialExpiredFeatureLockMessage():null}:null}function c(e,t={}){let r=u(),n=s.O.useQuery(l,{fetchPolicy:"cache-and-network",...t,skip:t.skip||null!==r,variables:e});if(null!==r)return r;let a=n.data?.currentUser?.permissions?.clusters;return{loading:n.loading,error:n.error,canCreateCluster:a?.canCreateCluster??null,hasCreateClusterEntitlement:a?.hasCreateClusterEntitlement??null,clusterAclsEnabled:!0,noPermissionMessage:null}}},140718:(e,t,r)=>{r.d(t,{XA:()=>_,lQ:()=>T,wS:()=>v});var n=r(610435),a=r(692738),i=r(46e3),s=r(806773),o=r(370427),l=r(907046),u=r(99442),c=r(224098),d=r(545251),f=r(53333),p=r(661748);let m=(0,a.createContext)(void 0),g=[c.s7.OnValueChange,c.s7.OnView],E=[c.s7.OnValueChange],h=(e,t)=>{for(let r of a.Children.toArray(e))if(a.isValidElement(r)){if(r.type===v&&r.props.value===t)return r;if(r.props.children){let e=h(r.props.children,t);if(e)return e}}},S=(e,t)=>{let r=h(e,t);if(a.isValidElement(r))return r.props.children;return""},_=(0,a.forwardRef)(({defaultValue:e,name:t,placeholder:r,children:o,contentProps:l,onChange:d,onOpenChange:h,id:_,label:v,value:T,validationState:b,forceCloseOnEscape:y,componentId:C,analyticsEvents:I,valueHasNoPii:R,...O},M)=>{let P=(0,p.W)("databricks.fe.observability.defaultComponentView.simpleSelect",!1),[N]=(0,a.useState)(()=>{if(T)return S(o,T);return""}),w=(0,a.useRef)(null);(0,a.useImperativeHandle)(M,()=>w.current,[]);let k=(0,a.useRef)(T),[L,U]=(0,a.useState)(T),[D,x]=(0,a.useState)(N),W=void 0!==T,F=(0,a.useMemo)(()=>I??(P?g:E),[I,P]),Y=(0,c.ei)({componentType:c.v_.SimpleSelect,componentId:C,analyticsEvents:F,valueHasNoPii:R}),{elementRef:G}=(0,f.z)({onView:Y.onView,value:T??e});(0,a.useEffect)(()=>{void 0!==T&&T!==k.current&&(U(T),k.current=T)},[T]),(0,a.useEffect)(()=>{if(W)return;let t=w.current,r=e||t?.value||"";U(r),k.current=r},[W,e,T]),(0,a.useEffect)(()=>{x(S(o,L||""))},[L,o]);let $=(0,a.useCallback)(e=>{Y.onValueChange(e),w.current?.setAttribute("value",e||""),U(e),x(S(o,e)),d&&d({target:{name:t,type:"select",value:e},type:"change"})},[Y,o,d,t]),H=(0,a.useMemo)(()=>({value:L,onChange:$}),[L,$]),B=(0,a.useCallback)(()=>{$("")},[$]);return(0,n.Y)(m.Provider,{value:H,children:(0,n.Y)(i.l,{componentId:void 0,value:L,placeholder:r,label:v??O["aria-label"],id:_,children:(0,n.FD)(A,{onOpenChange:h,children:[(0,n.Y)(u.b,{ref:G,...O,validationState:b,onClear:B,id:_,value:L,...Y.dataComponentProps,children:D||r}),(0,n.Y)("input",{type:"hidden",ref:w}),(0,n.Y)(s.g,{forceCloseOnEscape:y,...l,children:o})]})})})}),A=({children:e,onOpenChange:t})=>{let{isOpen:r}=(0,d.w)();return(0,a.useEffect)(()=>{t&&t(!!r)},[r,t]),(0,n.Y)(n.FK,{children:e})},v=(0,a.forwardRef)(({value:e,children:t,...r},i)=>{let s=(0,a.useContext)(m);if(!s)throw Error("SimpleSelectOption must be used within a SimpleSelect");let{onChange:l}=s,u=(0,a.useCallback)(({value:e})=>{l(e)},[l]);return(0,n.Y)(o.O,{...r,ref:i,value:e,onChange:u,children:t})}),T=({children:e,label:t,...r})=>{if(!(0,a.useContext)(m))throw Error("SimpleSelectOptionGroup must be used within a SimpleSelect");return(0,n.Y)(l.n,{...r,name:t,children:e})}},150190:(e,t,r)=>{r.d(t,{H:()=>o});var n=r(160603),a=r(733845),i=r(302118);function s(e,t,r,n,a,i,s){try{var o=e[i](s),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(n,a)}function o(e){let t=(0,a.O)();return(0,n.useQuery)(["get_user_info"],()=>{var e;return(e=function*(){if(t)return yield i.k.getUserInfo();return{is_metastore_admin:!1}},function(){var t=this,r=arguments;return new Promise(function(n,a){var i=e.apply(t,r);function o(e){s(i,n,a,o,l,"next",e)}function l(e){s(i,n,a,o,l,"throw",e)}o(void 0)})})()},e)}},150924:(e,t,r)=>{r.d(t,{D:()=>i,x:()=>s});var n,a,i=((n={}).UNKNOWN_ROUTINE_BODY="UNKNOWN_ROUTINE_BODY",n.SQL="SQL",n.EXTERNAL="EXTERNAL",n),s=((a={}).FUNCTION="FUNCTION_STANDARD",a.FUNCTION_FEATURE_SPEC="FUNCTION_FEATURE_SPEC",a.FUNCTION_FEATURE_SPEC_DELTASHARING="FUNCTION_FEATURE_SPEC_DELTASHARING",a.FUNCTION_PROCEDURE="FUNCTION_PROCEDURE",a)},154968:(e,t,r)=>{r.d(t,{n:()=>a});var n=r(141078);let a=(0,n.J1)`
  fragment PipelineApiErrorFields on ApiError {
    code
    message
    helpUrl
    traceId
    errorDetails {
      ... on ErrorDetailErrorInfo {
        reason
        domain
        metadata
      }
      ... on ErrorDetailRequestInfo {
        requestId
        servingData
      }
    }
  }
`},159150:(e,t,r)=>{r.d(t,{w:()=>n});function n(e){let t=new Map;return e.forEach(({column_name:e,data_type:r})=>{t.set(e,{name:e,type:r?.toLowerCase(),partition:!1,fields:[],comment:void 0,originalColumnData:{name:e,type_text:r?.toLowerCase(),comment:""}})}),e.forEach(({column_name:e,parent_column:r})=>{if(r&&""!==r){let n=t.get(r),a=t.get(e);n&&a&&n?.fields?.push(a)}}),{columns:Array.from(t.values()).filter(t=>!e.some(e=>e.column_name===t.name&&""!==e.parent_column)),metadata:{}}}},161330:(e,t,r)=>{r.d(t,{I:()=>c});var n=r(610435),a=r(91958),i=r.n(a),s=r(79570),o=r(497895),l=r(201828);let u=i()(e=>({color:e.colors.textSecondary})),c=({content:e,iconTitle:t="More information",...r})=>{let{theme:a}=(0,o.wn)();return(0,n.Y)(s.m,{content:e,...r,children:(0,n.Y)(l.A,{tabIndex:0,"aria-hidden":"false","aria-label":t,alt:t,css:u(a)})})}},186094:(e,t,r)=>{r.d(t,{XZ:()=>p,oP:()=>d,vd:()=>c,wK:()=>f});var n=r(958115),a=r.n(n),i=r(359525),s=r.n(i),o=r(441535);let l="runAsSelectSelectedSPs",u="runAsSelectSelectedGroups";function c(){let e=window.prefs?.get(l),t=(0,o.W)("databricks.fe.jaws.RunAsSelect.maxSavedSPs",5);if(a()(e))return e.slice(0,t);return[]}function d(e){let t=(0,o.W)("databricks.fe.jaws.RunAsSelect.maxSavedSPs",5),r=c();r.unshift(e);let n=s()(r).slice(0,t);window.prefs?.set(l,n)}function f(){let e=window.prefs?.get(u),t=(0,o.W)("databricks.fe.jaws.RunAsSelect.maxSavedGroups",5);if(a()(e))return e.slice(0,t);return[]}function p(e){let t=(0,o.W)("databricks.fe.jaws.RunAsSelect.maxSavedGroups",5),r=f();r.unshift(e);let n=s()(r).slice(0,t);window.prefs?.set(u,n)}},186381:(e,t,r)=>{r.d(t,{BY:()=>u,F:()=>s,KI:()=>l,Rb:()=>i,Rl:()=>o,eu:()=>d,qi:()=>a,r1:()=>c});var n=r(337706);let a="pipelineId",i="autoConnectPipeline",s="initiallyOpenRootFolders",o="ensureOpenPanels",l="configureRootFolder",u="agentCreatedPipeline",c="redirectToSourceFile";function d(){let[e]=(0,n.ok)(),t=e.get(a);return{pipelineIdQueryParam:t,pipelineNameQueryParam:e.get("pipelineName"),autoConnectPipelineQueryParam:e.get(i)}}},187826:(e,t,r)=>{r.d(t,{Lw:()=>i,ij:()=>a,pf:()=>s});var n=r(692738);let a=(0,n.createContext)(null);function i(){let e=(0,n.useContext)(a);if(!e)throw Error("usePipelineContextWithStatus can only be used inside a <PipelineContext.Provider/>");return e}function s(){let{data:e}=i();if(!e)throw Error("`usePipelineContextUnsafe` can only be used if the pipeline has been successfully loaded. Use `usePipelineContextWithStatus` to handle the other cases.");return e}},191431:(e,t,r)=>{r.d(t,{Q:()=>a});var n=r(441535);function a(){return(0,n.W)("databricks.deltapipelines.enableUnifiedIncludesForCreateEdit",!1)}},192464:(e,t,r)=>{r.d(t,{Os:()=>c,TT:()=>d,T_:()=>f,mr:()=>u});var n=r(159150),a=r(988512),i=r(55749),s=r(103341);function o(e,t,r,n,a,i,s){try{var o=e[i](s),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(n,a)}function l(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var i=e.apply(t,r);function s(e){o(i,n,a,s,l,"next",e)}function l(e){o(i,n,a,s,l,"throw",e)}s(void 0)})}}function u(e){return l(function*(e,t=i.X){let r=(0,a.y)(e).generateGetPostgresDatabasesSql();return(0,s.M)({dataSource:e,queryString:r,queryName:"get_postgres_databases",options:{limit:t}})}).apply(this,arguments)}function c(e,t,r){return l(function*(){let n=(0,a.y)(t).generateGetPostgresSchemasSql(e),o={limit:r||i.X,catalog:e};if(t?.disableSystemQueries)return[];return yield(0,s.M)({dataSource:t,queryString:n,queryName:"get_postgres_schemas",options:o})})()}function d(e,t,r,n,o,u){return l(function*(){let l=(0,a.y)(r).generateGetPostgresTablesSql(e,t),c={limit:n||i.X,errorFilters:o,ignoreError:u,catalog:e};if(r?.disableSystemQueries)return[];return yield(0,s.M)({dataSource:r,queryString:l,queryName:"get_postgres_tables",options:c})})()}function f(e){return l(function*({dataSource:e,catalog:t,schema:r,table:i,errorFilters:o,ignoreError:l,ignoreTableNotFound:u=!1}){try{let u=(0,a.y)(e).generateGetPostgresCompositeTypeSql(r,i),c=yield(0,s.M)({dataSource:e,queryString:u,queryName:"get_postgres_columns",options:{errorFilters:o,ignoreError:l,catalog:t}});return(0,n.w)(c)}catch(t){let e=t?.message??"";if(u&&[/TABLE_OR_VIEW_NOT_FOUND/].some(t=>t.test(e)))return{metadata:{},columns:[]};throw t}}).apply(this,arguments)}},200616:(e,t,r)=>{r.d(t,{K:()=>l});var n=r(692738),a=r(342411),i=r(794876),s=r(354852);function o(e,t,r,n,a,i,s){try{var o=e[i](s),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(n,a)}function l(){let e=(0,a.tz)(),[t]=(0,i.eq)();return{validatePipelineNameIsUnique:(0,n.useCallback)(r=>{var n;return(n=function*(){let{data:n}=yield t({variables:{input:{filter:(0,s.Hj)({name:`LIKE '${r.replace(/'/g,"''")}'`}),maxResults:1}},fetchPolicy:"network-only"});if(0===(n?.deltapipelinesList?.statuses??[]).length)return!0;return e.formatMessage({id:"mEpkEX",defaultMessage:"Pipeline with this name already exists"})},function(){var e=this,t=arguments;return new Promise(function(r,a){var i=n.apply(e,t);function s(e){o(i,r,a,s,l,"next",e)}function l(e){o(i,r,a,s,l,"throw",e)}s(void 0)})})()},[e,t])}}},204487:(e,t,r)=>{r.d(t,{F:()=>m,d:()=>g});var n=r(536717),a=r.n(n),i=r(561587),s=r(342411),o=r(724283),l=r(889515);let u=(0,s.YK)({resetRunAsSuccess:{id:"zf2XNh",defaultMessage:"Successfully updated the run-as of pipeline {pipelineName} and the owner of the published assets."},cantBindSP:{id:"HfsNB2",defaultMessage:"You cannot set the pipeline's identity to {nextIdentity} because you do not have the required permissions. Please contact the user who manages this service principal or the account administrator.{newline}Users with the Service Principal Manager role do not inherit the Service Principal User role. If you want the user to use the service principal to execute jobs, you will need to explicitly assign the Service Principal User role."},cantBindSPGeneric:{id:"v4OGYk",defaultMessage:"Updating run-as of the pipeline failed. Error message: {errorMessage}"}});var c=r(56579),d=r(186094),f=r(187826),p=r(838524);let m=e=>{if(!e)return null;if((0,c.e)(e))return{service_principal_name:e};return{user_name:e}},g=({onSuccess:e})=>{let{pipeline:{pipelineId:t,ownerPrincipal:r,spec:n,name:g,runAsUserName:E}}=(0,f.pf)(),{handleSubmit:h,reset:S,formState:{isDirty:_,isSubmitting:A,errors:v},control:T,setError:b}=(0,i.mN)({mode:"onChange",defaultValues:{uniqueName:r?.uniqueName??E??null,kind:r?.kind?.toLowerCase()??null}}),y=(0,i.FH)({control:T}),C=JSON.parse(n?._json??"{}"),I=y.uniqueName===E?null:y.uniqueName??"",[R]=(({nextIdentity:e,setError:t,pipelineName:r,successCallback:n})=>{let a=(0,s.tz)();return(0,l.q)(o.z.usePipelineEdit,{successMessage:a.formatMessage(u.resetRunAsSuccess,{pipelineName:r}),errorCallback:r=>{if(!r)return;let{pipelineEdit:n}=r;n?.errors?.[0]?.code==="PERMISSION_DENIED"&&n?.errors?.[0]?.message?.startsWith("Cannot bind the service principal provided in 'run_as' field")?t("uniqueName",{type:"manual",message:a.formatMessage(u.cantBindSP,{nextIdentity:e,newline:"\n\n"})}):r.pipelineEdit?.errors?.[0]?.message&&t("uniqueName",{type:"manual",message:a.formatMessage(u.cantBindSPGeneric,{errorMessage:r.pipelineEdit.errors[0]?.message})})},successCallback:n})})({nextIdentity:I,pipelineName:g,setError:b,successCallback:()=>{a()(I)&&(0,c.e)(I)&&(0,d.oP)(I),S({uniqueName:I}),e?.()}});return{control:T,errors:v,isDirty:_,isSubmitting:A,handleSubmit:h(e=>{if(e.uniqueName)return R({variables:{pipelineId:t,spec:{...C,run_as:m(e.uniqueName)}},refetchQueries:(0,p.k)(t),awaitRefetchQueries:!0});return Promise.resolve()}),resetForm:S,nextIdentity:I,ownerPrincipal:r}}},210556:(e,t,r)=>{r.d(t,{f:()=>s});var n=r(610435),a=r(906169),i=r(429608);let s=({dangerouslySetAntdProps:e,...t})=>(0,n.Y)(i.wC,{children:(0,n.Y)(a.A,{...t,...e})})},212536:(e,t,r)=>{r.d(t,{_:()=>T});var n=r(610435),a=r(956935),i=r(813342),s=r.n(i),o=r(692738),l=r(284260),u=r(497895),c=r(996648),d=r(927802),f=r(684944),p=r(461815),m=r(768622),g=r(639712),E=r(382908),h=r(804723),S=r(79128),_=r(194901),A=r(217985);function v(e,t){return e.name.includes(t)}function T({id:e="uc-selector",componentId:t="web-shared_uc-selector",placeholder:r,allItems:i,loading:S,value:_,onChange:y,icon:C,disabled:I,emptyText:R,width:O=240,getFooter:M,matchTriggerWidth:P=!1,validationState:N,getItemState:w,optionHintContentField:k,filterFn:L,optionAddon:U,maxHeight:D,selectAllLabel:x,overflowEllipsis:W=!1,getOpenInNewTabURL:F}){let[Y,G]=o.useState(i),$=(0,o.useRef)(),{theme:H}=(0,u.wn)();(0,o.useEffect)(()=>{S||G(i)},[i,S]);let B=(0,o.useMemo)(()=>x&&_===x?{name:x}:i.find(e=>e.name===_),[i,x,_]),V=(0,c.SY)({componentId:t,allItems:i,items:Y,setItems:G,itemToString:e=>e.name,matcher:L||v,initialInputValue:_,formValue:B,onStateChange({selectedItem:e,type:t}){switch(t){case c.HM.ItemClick:case c.HM.InputKeyDownEnter:e?.name&&y(e.name);break;case c.HM.FunctionReset:y(void 0)}}}),q=M?.({hideMenuOnClick:V.closeMenu,onAddItem:V.selectItem}),z=x?(0,n.Y)(b,{componentId:"uc-selector-select-all-entity-button",isChecked:B?.name===x,onClick:()=>{V.selectItem({name:x}),V.closeMenu(),y(x)},children:x}):void 0,j=(0,l.z)({size:Y.length,parentRef:$,estimateSize:(0,o.useCallback)(()=>k?48:H.general.heightSm,[k,H.general.heightSm]),overscan:30});return(0,n.FD)(d.h,{comboboxState:V,style:{width:O},children:[(0,n.Y)(f.$,{id:e,placeholder:r,comboboxState:V,clearInputValueOnFocus:!0,prefix:C,disabled:I,"data-testid":`uc-selector-${e}`,validationState:N,allowClear:!x||B?.name!==x,dangerouslyAppendEmotionCSS:W?(0,a.AH)({input:{textOverflow:"ellipsis !important",whiteSpace:"nowrap"}}):void 0}),(0,n.FD)(p.i,{loading:S,comboboxState:V,width:P?void 0:240,maxHeight:D??5.5*H.general.heightSm,virtualizerRef:$,listWrapperHeight:j.totalSize,emptyText:R,matchTriggerWidth:P,children:[j.virtualItems.map(e=>{let t=Y[e.index],{disableReason:r}=w?.(t)??{};return(0,n.Y)(m.bb,{item:t,index:e.index,comboboxState:V,isDisabled:void 0!==r,disabledReason:r,style:(0,g.D7)(e),hintContent:k&&t[k],title:t.name,css:{label:{textOverflow:"ellipsis",whiteSpace:"nowrap",width:"100%"},'[data-component-id="uc-selector.open-in-new-tab.link"]':{opacity:0},'&:hover [data-component-id="uc-selector.open-in-new-tab.link"]':{opacity:1}},children:(0,n.FD)("div",{css:{display:"flex",alignItems:"center",flexWrap:"nowrap"},children:[U&&U(t),(0,n.Y)(E.o.Text,{ellipsis:!0,css:{marginBottom:void 0!==r?H.spacing.xs:void 0,color:void 0!==r?H.colors.actionDisabledText+"!important":void 0},children:t.name}),F&&void 0===r&&(0,n.Y)(A.N,{asTypographyLink:!0,to:F(t),openInNewTab:!0,componentId:"uc-selector.open-in-new-tab.link",css:{marginLeft:"auto"}})]})},`item-${t.name}`)}),(!s()(q)||!s()(z))&&(0,n.FD)(h.S,{children:[!s()(z)&&z,!s()(q)&&q]})]})]})}let b=({isChecked:e,children:t,...r})=>{let{theme:i}=(0,u.wn)(),s={...(0,a.AH)((0,g.dg)({border:"none",width:"100%","span:not(.anticon)":{marginLeft:i.spacing.xs},span:{color:`${i.colors.textPrimary} !important`}}))};return(0,n.Y)(S.$n,{...r,type:"tertiary",className:"combobox-footer-add-button all-entity-button",icon:e?(0,n.Y)(_.A,{}):(0,n.Y)("div",{style:{width:i.general.iconFontSize}}),css:s,children:t})}},217985:(e,t,r)=>{r.d(t,{N:()=>g});var n=r(610435),a=r(901478),i=r(452137),s=r.n(i),o=r(692738),l=r(648782),u=r(382908),c=r(157633),d=r(846007),f=r(268204);let p=o.forwardRef(({asChild:e=!1,asAnchorTag:t=!1,asTypographyLink:r=!1,to:i,target:l,componentId:p,onClick:m,children:g,openInNewTab:E,linkContext:h,isInsideContext:S,isInsideContextHref:_,...A},v)=>{let T=S?_:(0,a.AO)((0,d.Gh)(i,h));(0,c.k)(T);let b=(0,f.G)(T,{target:l,onClick:m,componentId:p,shouldEmitAnalyticsEvent:!e&&!r&&t}),{linkEl:y,children:C}=function({asChild:e,asAnchorTag:t,asTypographyLink:r,children:a,componentId:i}){if(e)if(o.isValidElement(a))return{linkEl:a,children:a.props.children};else t=!0;if(r)return{linkEl:(0,n.Y)(u.o.Link,{componentId:i}),children:a};if(t)return{linkEl:(0,n.Y)("a",{}),children:a};s()(!1,"One of asTypographyLink, asAnchor or asChild must be specified")}({asChild:e,asAnchorTag:t,asTypographyLink:r,children:g,componentId:p});return o.cloneElement(y,{...y.props,...A,...!t?{openInNewTab:E}:{},href:T,ref:v,target:l,onClick:b,children:C})}),m=o.forwardRef(({to:e,...t},r)=>{let a=(0,l.$P)((0,d.Gh)(e,t.linkContext));return(0,n.Y)(p,{...t,to:e,ref:r,isInsideContext:!0,isInsideContextHref:a})}),g=o.forwardRef((e,t)=>{let r=(0,l.Ri)(),a=e.openInNewTab?{...e,target:"_blank",rel:"noopener noreferrer"}:{...e};if(r)return(0,n.Y)(m,{...a,ref:t});return(0,n.Y)(p,{...a,ref:t,isInsideContext:!1})})},227666:(e,t,r)=>{r.d(t,{a:()=>o});var n=r(610435),a=r(964133),i=r(174568),s=r(342411);function o({form:e}){let t=(0,s.tz)();return(0,n.FD)("div",{children:[(0,n.Y)(a.D.Label,{htmlFor:"comment",children:t.formatMessage({id:"TKvESV",defaultMessage:"Comment"})}),(0,n.Y)(i.t.TextArea,{componentId:"codegen_web-shared_src_metastore_uc_components_ucsecurablecomment.tsx_20",id:"comment",control:e.control,name:"comment",rules:{required:!1}})]})}},261515:(e,t,r)=>{r.d(t,{Gt:()=>s,r$:()=>o,s1:()=>i});var n=r(441535);let a=["3","4"];function i(){let e=(0,n.W)("databricks.fe.lakeflow.sdpEnvironmentVersions","");if(!e)return a;return e.split(",").map(e=>e.trim()).filter(e=>""!==e&&/^\d+$/.test(e))}function s(){return String((0,n.W)("databricks.fe.lakeflow.sdpDefaultEnvironmentVersion",4))}function o(){return(0,n.W)("databricks.fe.lakeflow.sdpPrefillEnvironmentVersion",!1)}},262989:(e,t,r)=>{r.d(t,{h:()=>o});var n=r(692738),a=r(53333),i=r(87008),s=r(87221);function o(e,t){let r=(0,s.ki)(),o=(0,i.e)(),l=(0,n.useCallback)(()=>{r({eventType:"component_view",eventEntity:{entityType:"component",entitySubType:e,entityId:t,entityViewId:o},eventPayload:{interactionSubject:!0}})},[t,e,r,o]);return(0,a.z)({onView:l,resetKey:`${e}:${t}`})}},268204:(e,t,r)=>{r.d(t,{G:()=>d});var n=r(692738),a=r(172335),i=r(524013),s=r(12221),o=r(967166),l=r(681695),u=r(87221),c=r(568827);function d(e,{target:t,onClick:r,componentId:f,shouldEmitAnalyticsEvent:p}){let m=(0,i.df)(),g=(0,o.hG)();return(0,n.useCallback)(function(n){if(r?.(n),n.defaultPrevented)return;let i=n.metaKey||n.altKey||n.ctrlKey||n.shiftKey;p&&f&&(0,u.s_)(g,{eventType:"component_click",eventClientSource:"unified_router",eventEntity:{entityType:"component",entitySubType:"link",entityId:f},eventPayload:{interactionSubject:!0}}),m("clientsideEvent",{eventType:"linkClicked",linkModifierKeyPressed:i,linkTargetAttrSet:!!t,referrerControlId:f});let o=(0,s.qu)(n);if(t||i)return void function(e,t,r){if(!t&&!r||!e.href)return;try{let n=e.href,a=new URL(e.href,window.location.origin);t&&a.searchParams.set(c.Ms,t),r&&a.searchParams.set(c.Gt,r);let i=a.toString();e.href=i,setTimeout(()=>{e.href===i&&(e.href=n)},0)}catch{}}(n.currentTarget,f,o?.rootInteractionId);if(l.GZ.isAvailable()){n.preventDefault(),o&&o.complete();let t=(0,a.q)(o,f);l.GZ.call({href:e,trackingContext:t})}},[r,p,f,m,t,g,e])}},272850:(e,t,r)=>{r.d(t,{d:()=>x});var n=r(610435),a=r(692738),i=r(561587),s=r(497895),o=r(79128),l=r(201513),u=r(382908),c=r(694762),d=r(339518),f=r(342411),p=r(819524),m=r(686560),g=r(697453),E=r(217985),h=r(483588),S=r(537975),_=r(102575),A=r(766905),v=r(681134),T=r(595615),b=r(787473),y=r(975137),C=r(641760),I=r(964133),R=r(12414),O=r(887047);function M({isLoading:e,destinations:t,currentUserEmail:r}){let{theme:i}=(0,s.wn)(),{data:o}=(0,O.zF)(!1),{firstDestinationName:l,firstDestinationUrl:c,otherCount:d}=function(e,t,r){if(!e||0===e.length)return{firstDestinationName:r,totalCount:1,otherCount:0};let n=e[0];return{firstDestinationName:function(e,t,r){if(!e)return"";if(t===h.Ld1.SLACK||t===h.Ld1.GENERIC_WEBHOOK||t===h.Ld1.MICROSOFT_TEAMS)return r.get(e)??e;if(t===h.Ld1.URL)try{let t=new URL(e),r=t.host,n=t.pathname.split("/").filter(e=>e.length>0);if(0===n.length)return r;return`${r}/${n[0]}`}catch{;}return e}(n?.destinationId,n?.destinationType,t),firstDestinationUrl:n?.destinationType===h.Ld1.URL?n.destinationId??void 0:void 0,totalCount:e.length,otherCount:e.length-1}}(t,(0,a.useMemo)(()=>{let e=new Map;return o?.sqlDestinationList?.forEach(t=>{t.id&&t.name&&e.set(t.id,t.name)}),e},[o]),r),p=c?(0,n.Y)(u.o.Link,{href:c,openInNewTab:!0,componentId:"uc.access-requests-section.destination-link",children:l}):l;return(0,n.FD)("div",{children:[(0,n.Y)(u.o.Text,{bold:!0,children:(0,n.Y)(f.sA,{id:"cx8YUg",defaultMessage:"Access requests"})}),(0,n.Y)(I.D.Hint,{css:{marginTop:i.spacing.xs},children:e?(0,n.FD)("span",{css:{display:"flex",alignItems:"center",gap:i.spacing.xs},children:[(0,n.Y)(R.y,{size:"small"}),(0,n.Y)(f.sA,{id:"pvizRi",defaultMessage:"Loading destination..."})]}):(0,n.Y)(f.sA,{id:"qc1R4I",defaultMessage:"Requests will be sent to {destination}{otherCount, plural, =0 {} =1 { and {otherCount} other} other { and {otherCount} others}}. This can be configured after creation.",values:{destination:p,otherCount:d}})})]})}var P=r(38301),N=r(227666),w=r(57776),k=r(861403),L=r(759838),U=r(613319);function D(e,t,r,n,a,i,s){try{var o=e[i](s),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(n,a)}let x=({onOpen:e,onClose:t,onSaveAttempted:r,onSaveSuccess:I,onSaveFailure:R,showStorageLocationFields:O=!0,backButtonOptions:x,catalog:W})=>{let F=(0,f.tz)(),{theme:Y}=(0,s.wn)(),G=(0,i.mN)(),[$,H]=(0,a.useState)(W),{invalidate:B}=(0,T.rA)(),[V,q]=(0,a.useState)(!1),z=(0,y.i)(),j=(0,k.b)(z.error),K=p.Ay.SCHEMA_GUIDE,Q=(0,C.SP)(),J=(0,m.d)("user",""),X=(0,A.g)(),{isLoading:Z,destinations:ee,error:et}=(0,_.w)({fullName:$??"",type:h.$FW.CATALOG,skip:!Q||!$}),er=et?void 0:ee,[en]=(0,v.A)(),ea=(0,a.useCallback)(e=>{let t=function(e,t){if(e&&e.length>0)return e.filter(e=>null!=e.destinationId&&null!=e.destinationType).map(e=>({destinationId:e.destinationId,destinationType:e.destinationType}));if(t)return[{destinationId:t,destinationType:h.Ld1.EMAIL}];return[]}(er,J);t.length>0&&en({variables:{fullName:e,type:h.$FW.SCHEMA,destinations:t}}).then(()=>{(0,S.RM)(t,h.$FW.SCHEMA,X)}).catch(()=>{g.ds.call({root:{componentId:"schema-creation.rfa-destination-error",severity:"warning"},title:{value:F.formatMessage({id:"E4fnYR",defaultMessage:"Access request configuration failed"})},description:{value:F.formatMessage({id:"EKrMba",defaultMessage:"Schema was created successfully, but access request destinations could not be configured. You can configure them in schema settings."})}})})},[er,J,en,F,X]),ei=(0,a.useCallback)(({catalog:t})=>{q(!0),e?.(),H(t)},[e]),es=()=>{G.reset(),t?.(),q(!1)},eo=()=>{var e;return(e=function*(){G.handleSubmit(()=>{r?.();let{name:e,comment:t,storage_root:a,storage_sub_path:i}=G.getValues(),s={catalog_name:$,name:e,comment:t};if(a?.url){let e=(0,L.xT)(a?.url,i)||void 0;s={...s,storage_root:e}}z.mutate(s,{onSuccess:t=>{I?.(t),Q&&t?.name&&$&&ea(`${$}.${t.name}`),B(),es(),g.ds.call({root:{componentId:"codegen_web-shared_src_metastore_uc_schema_useschemacreationmodal.tsx_79",severity:"success",duration:4500},title:{value:F.formatMessage({id:"dPTug0",defaultMessage:"Schema created"})},description:{value:F.formatMessage({id:"ctUTr5",defaultMessage:"Your schema {databaseName} has been added to the Catalog {catalogName}. {link}"},{databaseName:e,link:(0,n.Y)(E.N,{asTypographyLink:!0,openInNewTab:!0,componentId:"schema-creation.success.view-link",to:`/explore/data/${$}/${e}`,children:F.formatMessage({id:"J02E5m",defaultMessage:"View schema"})}),catalogName:$})},isCloseable:!0}),(0,U.R)({itemId:$})},onError:()=>{R?.()}})})()},function(){var t=this,r=arguments;return new Promise(function(n,a){var i=e.apply(t,r);function s(e){D(i,n,a,s,o,"next",e)}function o(e){D(i,n,a,s,o,"throw",e)}s(void 0)})})()};function el(){x?.onClick(),es()}let eu=(0,n.FD)("div",{children:[x&&(0,n.FD)("div",{css:{display:"flex",alignItems:"center",marginBottom:Y.spacing.sm},children:[(0,n.Y)(o.$n,{componentId:"schema-creation-modal.back-button",icon:(0,n.Y)(l.A,{}),onClick:el}),(0,n.Y)(o.$n,{componentId:"schema-creation-modal.back-button",type:"link",onClick:el,children:x.text})]}),F.formatMessage({id:"sgekCA",defaultMessage:"Create a new schema"}),(0,n.FD)(u.o.Paragraph,{withoutMargins:!0,children:[(0,n.Y)(u.o.Text,{color:"secondary",children:F.formatMessage({id:"PCDZee",defaultMessage:"A schema is the second layer of Unity Catalog’s three-level namespace and is used to organize tables, views, volumes and other objects."})}),K&&(0,n.Y)(b.o,{style:{paddingLeft:Y.spacing.xs},href:K})]})]});return{showSchemaCreationModal:ei,SchemaCreationModal:(0,n.Y)(c.aF,{componentId:"codegen_web-shared_src_metastore_uc_schema_useschemacreationmodal.tsx_108",visible:V,title:eu,onCancel:es,onOk:eo,confirmLoading:z.isLoading,okText:F.formatMessage({id:"8zV7hM",defaultMessage:"Create"}),cancelText:F.formatMessage({id:"DTFy0w",defaultMessage:"Cancel"}),dangerouslySetAntdProps:{bodyStyle:{paddingTop:0}},children:(0,n.FD)("form",{name:"schema_creation_form",css:{display:"flex",flexDirection:"column",gap:Y.spacing.md},onChange:()=>{z.reset()},onSubmit:e=>{e.preventDefault(),eo()},children:[(0,n.Y)(w.M,{form:G,label:F.formatMessage({id:"mB9Q7/",defaultMessage:"Schema name"}),emptyHint:F.formatMessage({id:"ZjtboK",defaultMessage:"A schema name is required"})}),O&&(0,n.Y)(P.$,{form:G,onChange:G.setValue,securableType:"SCHEMA"}),Q&&$&&(0,n.Y)(M,{isLoading:Z,destinations:er,currentUserEmail:J}),(0,n.Y)(N.a,{form:G}),z.isError&&(0,n.Y)(d.F,{componentId:"codegen_web-shared_src_metastore_uc_schema_useschemacreationmodal.tsx_181",role:"alert",message:j,type:"error",closable:!1})]})},"schema-creation-modal")}}},302136:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(692738),a=r(967166);function i(){let e=(0,a.hG)();return(0,n.useCallback)(t=>e({uc_api_ui_log:t}),[e])}},308879:(e,t,r)=>{r.d(t,{L:()=>l,u:()=>u});var n=r(689262),a=r(686560),i=r(441535),s=r(709262),o=r(805287);let l=()=>({isEnabled:u()}),u=()=>(0,o.gz)({cloud:"AWS",userCanUseDatabricksWorkspace:(0,a.d)("userCanUseDatabricksWorkspace_new",!1),userCanUseSqlService:(0,a.d)("userCanUseSqlService_new",!1),enableSqlService:(0,n.b)("enableSqlService",(0,a.d)("enableSqlService",!1),()=>(0,a.d)("dbSqlEnabled_new",!1)),centralizedLoginEnabled:(0,n.b)("centralizedLoginEnabled",(0,a.d)("centralizedLoginEnabled",!1),()=>(0,i.W)("databricks.fe.centralizedLoginEnabled",!1))})[s.EU].allowed},342145:(e,t,r)=>{r.d(t,{$y:()=>d,B_:()=>v,FQ:()=>g,OD:()=>o,T4:()=>s,U1:()=>E,UX:()=>p,Yu:()=>S,bB:()=>i,cC:()=>m,k0:()=>a,nU:()=>u,sO:()=>A,sh:()=>c,wp:()=>l,xY:()=>f,xe:()=>_,zD:()=>h});var n=r(141078);let a=(0,n.J1)`
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
`,i=(0,n.J1)`
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
`,s=(0,n.J1)`
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
`,o=(0,n.J1)`
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
`,l=(0,n.J1)`
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
`,u=(0,n.J1)`
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
`,c=(0,n.J1)`
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
`,d=(0,n.J1)`
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
`,f=(0,n.J1)`
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
`,p=(0,n.J1)`
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
`,m=(0,n.J1)`
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
`,g=(0,n.J1)`
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
`,E=(0,n.J1)`
  query getAccountUsersCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountUsersCount {
      totalCount
    }
  }
`,h=(0,n.J1)`
  query getAccountServicePrincipalsCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountServicePrincipalsCount {
      totalCount
    }
  }
`,S=(0,n.J1)`
  query getAccountGroupsCount @component(name: "IdentityMgmt.UserGroup") {
    getAccountGroupsCount {
      totalCount
    }
  }
`,_=(0,n.J1)`
  query getWorkspaceUsersCount($shouldGetDirectlyAssignedOnly: Boolean) @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceUsersCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`,A=(0,n.J1)`
  query getWorkspaceServicePrincipalsCount($shouldGetDirectlyAssignedOnly: Boolean)
  @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceServicePrincipalsCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`,v=(0,n.J1)`
  query getWorkspaceGroupsCount($shouldGetDirectlyAssignedOnly: Boolean) @component(name: "IdentityMgmt.UserGroup") {
    getWorkspaceGroupsCount(shouldGetDirectlyAssignedOnly: $shouldGetDirectlyAssignedOnly) {
      totalCount
    }
  }
`},354852:(e,t,r)=>{r.d(t,{Hj:()=>f,NA:()=>c,U4:()=>u,Zh:()=>d,mA:()=>l});var n=r(853453),a=r(962200);if(/^(13057|85670)$/.test(r.j))var i=r(74360);let s=["level","updateId"],o={keywords:s};function l(e,t=o){let r=(0,n.parse)(e,t);if("string"==typeof r)return{text:r};return r}function u(e,t){let r=e[t];if("string"==typeof r)return r;if(Array.isArray(r)&&r.length>0)return String(r[0])}function c(e,t=s){let r={},n="text";return[...t,n].forEach(t=>{let n=u(e,t);if(void 0!==n){if("level"===t&&n.toUpperCase()===a.L2.ALL)return;r[t]=n}}),Object.keys(r).map(e=>{let t=r[e];if(e===n)return t;let a=t.includes(" ");return`${e}:${a?`"${t}"`:t}`}).join(" ")}let d=({filterByOwner:e,username:t,trimmedNameFilter:r,userPipelineTypeFilter:n})=>f({owner_user_name:e?`= '${t}'`:void 0,name:""===r?void 0:`LIKE '%${r.replace(/'/g,"''")}%'`,pipeline_type:`IN (${Object.entries(i.MP).filter(([e,t])=>n?t===n:!!t).map(([e])=>`'${e}'`).join(", ")})`}),f=e=>{let t=Object.keys(e).filter(t=>void 0!==e[t]).map(t=>`${t} ${e[t]}`).join(" AND ");return""===t?void 0:t}},363855:(e,t,r)=>{r.d(t,{Un:()=>a,pH:()=>s,si:()=>i});var n=r(441535);function a(){return(0,n.W)("direct_publishing",null)??!0}function i(){return a()&&(0,n.W)("databricks.fe.deltapipelines.dpmPublicPreview",!1)}function s(){return(0,n.W)("databricks.deltapipelines.supportChangeCatalogAndSchemaForDPMPipeline",!1)}},367190:(e,t,r)=>{r.d(t,{P:()=>n});function n(){console.log("\n%cDo not copy-paste anything here. This can be used to compromise your account.","font-family:helvetica; font-size:20px; font-size:50px; font-weight:bold; color:red; -webkit-text-stroke:1px black;")}},369291:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(610435),a=r(692738),i=r(375214);function s(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.25 7.25V1h1.5v6.25H15v1.5H8.75V15h-1.5V8.75H1v-1.5z",clipRule:"evenodd"})})}let o=(0,a.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:s}));o.displayName="PlusIcon";let l=o},380549:(e,t,r)=>{r.r(t),r.d(t,{CreateBasicPipelineModal:()=>U});var n=r(610435),a=r(692738),i=r(561587),s=r(497895),o=r(694762),l=r(964133),u=r(174568),c=r(219830),d=r(342411),f=r(396063),p=r(863708),m=r(22191),g=r(726977),E=r(66018),h=r(720263),S=r(217985),_=r(227937),A=r(300428),v=r(389590),T=r(200616),b=r(753454),y=r(993533),C=r(781510),I=r(568057),R=r(77216),O=r(386106),M=r(363855),P=r(589830);function N(e,t,r,n,a,i,s){try{var o=e[i](s),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(n,a)}function w(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var i=e.apply(t,r);function s(e){N(i,n,a,s,o,"next",e)}function o(e){N(i,n,a,s,o,"throw",e)}s(void 0)})}}function k({onClose:e,pathName:t,defaultCatalogName:r}){let f=(0,d.tz)(),{navigateToPipelineCreate:p}=(0,E.o)(),[m,g]=(0,a.useState)(!1),{createBasicPipeline:A}=(0,v.m)({pathName:t}),{validatePipelineNameIsUnique:C}=(0,T.K)(),{theme:N}=(0,s.wn)(),L=(0,a.useRef)(null),{handleSubmit:U,control:D,watch:x,trigger:W,formState:{errors:F}}=(0,i.mN)({mode:"onBlur",defaultValues:{name:(0,O.T1)({intl:f}),catalog:r?{name:r}:null,schema:void 0,target:void 0,language:y.KVK.PYTHON}}),Y=x("catalog"),G=(0,M.Un)(),$=(0,a.useCallback)(t=>w(function*(){(yield A({name:t.name,language:t.language,catalog:t.catalog?.name??"",schema:G?t.schema||R.my:void 0,target:G?void 0:t.target||R.my}))&&e()})(),[A,e,G]);return(0,a.useEffect)(()=>{(0,_.vy)()||(p(),e())},[p,e]),(0,a.useEffect)(()=>{L.current?.focus()},[]),(0,a.useEffect)(()=>{W("name")},[W]),(0,n.Y)(o.aF,{componentId:"create-basic-pipeline.modal",title:(0,n.Y)(d.sA,{...b.D.modalTitle}),cancelText:(0,n.Y)(d.sA,{...b.D.cancelButtonText}),okText:(0,n.Y)(d.sA,{...b.D.createButtonText}),onOk:()=>w(function*(){g(!0);try{yield U($)()}finally{g(!1)}})(),onCancel:e,confirmLoading:m,visible:!0,children:(0,n.FD)("div",{css:{display:"flex",flexDirection:"column",gap:N.spacing.md},children:[(0,n.FD)("div",{children:[(0,n.Y)(l.D.Label,{htmlFor:O.qF.PIPELINE_NAME,children:(0,n.Y)(d.sA,{...b.D.pipelineNameLabel})}),(0,n.Y)(u.t.Input,{componentId:"pipeline-name-input",id:O.qF.PIPELINE_NAME,control:D,name:"name",rules:{required:!0,validate:{nameIsUnique:e=>C(e)}},validationState:F.name?"error":void 0,disabled:m,inputRef:L}),F.name?.message&&(0,n.Y)(l.D.Message,{type:"error",message:F.name.message})]}),(0,n.FD)("div",{css:{display:"flex",flexDirection:"row",gap:N.spacing.md},children:[(0,n.FD)("div",{css:{flex:1,width:"50%"},children:[(0,n.Y)("div",{css:{marginBottom:N.spacing.sm},children:(0,n.Y)(l.D.Label,{htmlFor:O.qF.CATALOG,children:(0,n.Y)(d.sA,{...b.D.catalogLabel})})}),(0,n.Y)(i.xI,{name:"catalog",control:D,rules:{required:!0},render:({field:{onChange:e,value:t}})=>(0,n.Y)(I.Q,{onChange:e,value:t,isServerlessEnabled:(0,P.N)(),disabled:m})})]}),(0,n.FD)("div",{css:{flex:1,width:"50%"},children:[(0,n.Y)("div",{css:{marginBottom:N.spacing.sm},children:(0,n.Y)(l.D.Label,{htmlFor:O.qF.TARGET_OR_SCHEMA,children:G?(0,n.Y)(d.sA,{...b.D.schemaLabel}):(0,n.Y)(d.sA,{...b.D.targetLabel})})}),(0,n.Y)(i.xI,{name:G?"schema":"target",control:D,render:({field:{onChange:e,value:t}})=>(0,n.Y)(R.dC,{catalogName:Y?.name,value:t??"",isDirectPublishingModeChecked:G,onChange:t=>{queueMicrotask(()=>e(t??""))},disabled:m,disableEditingDirectPublishingMode:!1,useDefault:!0})})]})]}),(0,n.FD)("div",{children:[(0,n.Y)(l.D.Label,{htmlFor:O.qF.NOTEBOOK_LANGUAGE,children:(0,n.Y)(d.sA,{...b.D.languageLabel})}),(0,n.FD)(u.t.RadioGroup,{componentId:"pipeline-name-input",id:O.qF.NOTEBOOK_LANGUAGE,control:D,name:"language",rules:{required:!0},disabled:m,layout:"horizontal",children:[(0,n.Y)(c.sx,{value:y.KVK.PYTHON,children:(0,n.Y)(d.sA,{...O.yi[y.KVK.PYTHON]})}),(0,n.Y)(c.sx,{value:y.KVK.SQL,children:(0,n.Y)(d.sA,{...O.yi[y.KVK.SQL]})})]})]}),(0,n.Y)("div",{css:{marginTop:N.spacing.sm},children:(0,n.Y)(S.N,{componentId:"create-basic-pipeline.modal.legacy-create-link",to:{pathname:h.hk.getPipelineCreateRoute()},onClick:e,asTypographyLink:!0,children:(0,n.Y)(d.sA,{id:"x7x9TJ",defaultMessage:"Create advanced pipeline"})})})]})})}function L({onClose:e,pathName:t}){let{data:r,isLoading:a}=(0,f.S)();return a?(0,n.Y)(A.t,{onClose:e}):(0,n.Y)(k,{onClose:e,defaultCatalogName:r,pathName:t})}function U(e){return(0,n.Y)(p.JR,{fallbackRender:({error:e})=>(0,n.Y)(C.A,{message:e?.message,refresh:!0}),esComponent:m.Es.WorkflowsAuthoring,errorBoundaryId:g.s.PipelinesCreateBasicPipelineModal,children:(0,n.Y)(L,{...e})})}},389590:(e,t,r)=>{r.d(t,{m:()=>E});var n=r(692738),a=r(886100),i=r(22191),s=r(747129),o=r(488655),l=r(741638),u=r(504730),c=r(954261),d=r(724283),f=r(410297),p=r(995198);function m(e,t,r,n,a,i,s){try{var o=e[i](s),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(n,a)}let g=a.iT.sev2BurnRateLogger({esComponent:i.Es.WorkflowsAuthoring,eventId:"lakeflow.pipelines.editor.create-scaffolding",sloTarget:s.i1.P95,minFailures:s.Ip.Min10});function E({pathName:e}={}){let t=(0,o.Zp)(),{createInitialPipelineFiles:r}=(0,c.nt)({pathName:e}),[a]=d.z.usePipelineAction(d.z.usePipelineCreateGraphQL,{});return{createBasicPipeline:(0,n.useCallback)(({onSuccess:e,...n})=>{var i;return(i=function*(){let i,s;try{let e=yield r({pipelineName:n.name,language:n.language,catalog:n.catalog,schema:n.schema??n.target??"default"});i=e.libraries,s=e.rootPath,g.success()}catch(e){return g.failure(e),!1}let o=yield a((0,p.g)({inputData:n,libraries:i,rootPath:s})),c=o.data?.jobsCreatePipeline?.pipelineId;if(!c||f.jD.hasError(o))return!1;return e?.({pipelineId:c}),(0,l.VC)(c),t((0,u.P)({pipelineId:c,pipelineName:n.name,objectId:c,objectType:u.n,initialOpenRootFolders:!0})),!0},function(){var e=this,t=arguments;return new Promise(function(r,n){var a=i.apply(e,t);function s(e){m(a,r,n,s,o,"next",e)}function o(e){m(a,r,n,s,o,"throw",e)}s(void 0)})})()},[a,r,t])}}},396063:(e,t,r)=>{r.d(t,{S:()=>o});var n=r(595615),a=r(302118),i=r(641760);function s(e,t,r,n,a,i,s){try{var o=e[i](s),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(n,a)}function o(e){return(0,n.AO)({queryKey:["get_default_catalog_query"],queryFn:function(){var e;return(e=function*(){let e=yield a.k.getCurrentMetastoreAssignment();return e?.default_catalog_name||""},function(){var t=this,r=arguments;return new Promise(function(n,a){var i=e.apply(t,r);function o(e){s(i,n,a,o,l,"next",e)}function l(e){s(i,n,a,o,l,"throw",e)}o(void 0)})})()},refetchOnWindowFocus:!1,enabled:(0,i.ei)(),...e})}},402720:(e,t,r)=>{let n;r.d(t,{P:()=>u});var a=r(610435),i=r(400136),s=r(591333),o=r(429608),l=r(866370);let u=((n=({dangerouslySetAntdProps:e,label:t,loadingDescription:r="LegacySkeleton",...n})=>{let u=n.loading??!0;return(0,a.Y)(o.wC,{children:(0,a.FD)(s.U,{label:t,children:[u&&(0,a.Y)(l.G,{description:r}),(0,a.Y)(i.A,{...n,...e})]})})}).Button=i.A.Button,n.Image=i.A.Image,n.Input=i.A.Input,n)},411695:(e,t,r)=>{r.d(t,{RG:()=>b,Co:()=>T,i2:()=>_,bc:()=>g,ER:()=>I,UO:()=>C,RD:()=>A,hC:()=>y});var n=r(483588),a=r(441535),i=r(22191),s=r(886100),o=r(747129),l=r(412836),u=r(844760),c=r(657825),d=r(686560),f=r(469114);function p(e,t,r,n,a,i,s){try{var o=e[i](s),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(n,a)}function m(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var i=e.apply(t,r);function s(e){p(i,n,a,s,o,"next",e)}function o(e){p(i,n,a,s,o,"throw",e)}s(void 0)})}}function g(){return C()&&(0,a.W)("serverless_compute",!1)&&(0,a.W)("databricks.notebook.enableServerlessComputeCostControl",!1)}let E=["ENABLED_WITHOUT_COST_CONTROL","ENABLED_WITH_COST_CONTROL"],h={queryKey:["serverlessComputePermission"],staleTime:6e5,queryFn:()=>m(function*(){try{let e=yield(0,u.S)("/ajax-api/2.0/serverless-compute?compute_type=INTERACTIVE&page_size=1"),t=yield e.json();return s.iT.sev2BurnRate(i.Es.Notebooks,"serverless-compute-permission-check-failure",o.i1.P99,o.Ip.Min10,!0),(t?.serverless_computes??[]).length>0?"ENABLED_WITH_COST_CONTROL":"NO_PERMS_FOR_USER"}catch(e){return s.iT.sev2BurnRate(i.Es.Notebooks,"serverless-compute-permission-check-failure",o.i1.P99,o.Ip.Min10,!1,e),"NO_PERMS_FOR_USER"}})()};function S(){let e=C()&&g(),{data:t,error:r}=(0,l.IT)({...h,enabled:e});if(!C())return{access:"DISABLED_FOR_ACCOUNT"};if(!g())return{access:"ENABLED_WITHOUT_COST_CONTROL"};return{access:t??"LOADING_USER_PERMS",error:r}}function _(){return m(function*(){let e=yield m(function*(){if(!C())return"DISABLED_FOR_ACCOUNT";if(!g())return"ENABLED_WITHOUT_COST_CONTROL";try{return yield l.aH.getActiveValue().fetchQuery(h)}catch{return"NO_PERMS_FOR_USER"}})();return E.includes(e)})()}function A(){let{access:e}=S();if(E.includes(e))return!0;if("LOADING_USER_PERMS"===e)return;return!1}function v(){return(0,a.W)("databricks.serverless_job_nb.account_ga.enabled",!1)}function T(){return v()&&(0,a.W)("databricks.fe.accountsui.isServerlessNotebooksAndJobsSettingUiEnabled",!1)}function b(){if(C())return n.WMm.ENABLED;if(v())return(0,a.W)("serverless_jobs_ws_nb_enable","STATUS_UNSPECIFIED");return n.WMm.STATUS_UNSPECIFIED}function y(){let{access:e,error:t}=S(),r=b();return g()&&(r=(0,d.d)("isAdmin",!1)?f.x.admin[e]:f.x.user[e]),{value:E.includes(e),reason:r,loading:"LOADING_USER_PERMS"===e,error:t}}function C(){return((0,a.W)("serverless_job_nb",null)??(0,a.W)("databricks.serverless_job_nb.preview.default.enabled",!1))||(0,c.fo)()===c.hQ.ServerlessOnly&&(0,a.W)("databricks.fe.eda.enableInteractiveServerlessForLighthouse",!1)||v()&&(0,a.W)("serverless_jobs_ws_nb_enable","STATUS_UNSPECIFIED")===n.WMm.ENABLED}function I(){return C()}},430939:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(610435),a=r(692738),i=r(375214);function s(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.394 5.586a4.752 4.752 0 0 1 9.351.946A3.75 3.75 0 0 1 15.787 9H14.12a2.25 2.25 0 0 0-1.871-1H12a.75.75 0 0 1-.75-.75v-.5a3.25 3.25 0 0 0-6.475-.402.75.75 0 0 1-.698.657A2.75 2.75 0 0 0 4 12.49V14a.8.8 0 0 1-.179-.021 4.25 4.25 0 0 1-.427-8.393M15.25 10.5h-4.291a3 3 0 1 0-.13 1.5H12v2h1.5v-2h1v2H16v-2.75a.75.75 0 0 0-.75-.75M8 9.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3",clipRule:"evenodd"})})}let o=(0,a.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:s}));o.displayName="CloudKeyIcon";let l=o},459528:(e,t,r)=>{r.d(t,{E:()=>a,v:()=>i});var n=r(696514);let a=(0,n.fH)("Clusters::ExecuteSql"),i=(0,n.fH)("Clusters::CancelSql")},465082:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(610435),a=r(692738),i=r(375214);function s(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a3.25 3.25 0 1 0 0 6.5A3.25 3.25 0 0 0 8 1M6.25 4.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M8 9a8.74 8.74 0 0 0-6.836 3.287.75.75 0 0 0-.164.469v1.494c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75v-1.494a.75.75 0 0 0-.164-.469A8.74 8.74 0 0 0 8 9m-5.5 4.5v-.474A7.23 7.23 0 0 1 8 10.5c2.2 0 4.17.978 5.5 2.526v.474z",clipRule:"evenodd"})})}let o=(0,a.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:s}));o.displayName="UserIcon";let l=o},469114:(e,t,r)=>{r.d(t,{F:()=>u,x:()=>l});var n=r(610435);r(692738);var a=r(342411),i=r(483588),s=r(686560);let o={admin:{[i.WMm.ENABLED]:null,[i.WMm.STATUS_UNSPECIFIED]:null,[i.WMm.INELIGIBLE_REGION_UNSUPPORTED]:(0,n.Y)(a.sA,{id:"WrSE4L",defaultMessage:"Serverless compute is not yet available in your region."}),[i.WMm.INELIGIBLE_CSP_ENABLED]:(0,n.Y)(a.sA,{id:"0aGsDQ",defaultMessage:"Serverless compute is not available when using Compliance Security Profile"}),[i.WMm.INELIGIBLE_UC_NOT_ENABLED]:(0,n.Y)(a.sA,{id:"375E1x",defaultMessage:"Enable Unity Catalog for this workspace to use Serverless compute."}),[i.WMm.ACCOUNT_NOT_ENABLED]:(0,n.Y)(a.sA,{id:"681x7W",defaultMessage:"Serverless compute is now available. Enable serverless in the account console."}),[i.WMm.ACCOUNT_NOT_ENABLED_AND_INELIGIBLE]:null,default:null},user:{[i.WMm.ENABLED]:null,[i.WMm.STATUS_UNSPECIFIED]:null,[i.WMm.INELIGIBLE_REGION_UNSUPPORTED]:null,[i.WMm.INELIGIBLE_CSP_ENABLED]:null,[i.WMm.INELIGIBLE_UC_NOT_ENABLED]:(0,n.Y)(a.sA,{id:"VT/XeT",defaultMessage:"Serverless compute is now available. To use it, your administrator must enable Unity Catalog for this workspace."}),[i.WMm.ACCOUNT_NOT_ENABLED]:(0,n.Y)(a.sA,{id:"1go8X5",defaultMessage:"Serverless compute is now available in your region. Contact your account administrator to enable it."}),[i.WMm.ACCOUNT_NOT_ENABLED_AND_INELIGIBLE]:null,default:null}},l={admin:{ENABLED_WITH_COST_CONTROL:(0,n.Y)(a.sA,{id:"1Wsgl7",defaultMessage:"Serverless compute is available in your region."}),ENABLED_WITHOUT_COST_CONTROL:(0,n.Y)(a.sA,{id:"1Wsgl7",defaultMessage:"Serverless compute is available in your region."}),DISABLED_FOR_ACCOUNT:(0,n.Y)(a.sA,{id:"k9zpS3",defaultMessage:"Serverless compute is now available. Enable serverless in the account console."}),NO_PERMS_FOR_USER:(0,n.Y)(a.sA,{id:"k9zpS3",defaultMessage:"Serverless compute is now available. Enable serverless in the account console."}),LOADING_USER_PERMS:(0,n.Y)(a.sA,{id:"k/Fv2h",defaultMessage:"Serverless compute is now available. Loading..."})},user:{ENABLED_WITH_COST_CONTROL:(0,n.Y)(a.sA,{id:"1Wsgl7",defaultMessage:"Serverless compute is available in your region."}),ENABLED_WITHOUT_COST_CONTROL:(0,n.Y)(a.sA,{id:"1Wsgl7",defaultMessage:"Serverless compute is available in your region."}),DISABLED_FOR_ACCOUNT:(0,n.Y)(a.sA,{id:"TIrrKx",defaultMessage:"Serverless compute is now available. Contact your account administrator to enable it."}),NO_PERMS_FOR_USER:(0,n.Y)(a.sA,{id:"WCJYTW",defaultMessage:"Serverless compute is now available, but you don't have permissions. Contact your account administrator to enable it."}),LOADING_USER_PERMS:(0,n.Y)(a.sA,{id:"MgW/uA",defaultMessage:"Serverless compute is now available. Loading access..."})}};function u(e){if((0,s.d)("isAdmin",!1))return o.admin[e]||o.admin.default;return o.user[e]||o.user.default}},482921:(e,t,r)=>{r.d(t,{G:()=>i,M:()=>a});var n,a=((n={}).ONLY_CLUSTER="ONLY_CLUSTER",n.ONLY_WAREHOUSE="ONLY_WAREHOUSE",n.WAREHOUSE_AND_CLUSTER="WAREHOUSE_AND_CLUSTER",n);let i=(e,t)=>{if(!t&&e)return"ONLY_CLUSTER";if(!e)return"ONLY_WAREHOUSE";return"WAREHOUSE_AND_CLUSTER"}},504730:(e,t,r)=>{r.d(t,{P:()=>u,n:()=>l});var n=r(675263),a=r(889620),i=r(485669),s=r(255844),o=r(186381);let l="LANDING_PAGE";function u({objectId:e,objectType:t,pipelineId:r,pipelineName:c,initialOpenRootFolders:d=!1,configureRootFolder:f=!1,agentCreatedPipeline:p=!1,lineNumber:m,columnNumber:g}){return{pathname:(({objectId:e,objectType:t,pipelineId:r})=>{switch(t){case"FILE":return(0,i.ZZ)({id:e});case"NOTEBOOK":return(0,i.f_)({id:e});case"DIRECTORY":return(0,s.zs)()?`/editor/pipelines/${r}`:`/browse/folders/${e}`;case l:return`/editor/pipelines/${r}`;default:return""}})({objectId:e,objectType:t,pipelineId:r}),search:new URLSearchParams({...(0,s.zs)()?{[n.b]:a.H.fromPipeline(r)}:{pipelineId:r,[o.Rb]:"false",pipelineName:c},...d?{[o.F]:"true"}:{},...f?{[o.KI]:"true"}:{},...p?{[o.BY]:"true"}:{},...t===l?{[o.Rl]:"true"}:{},...t===l?{[o.r1]:"true"}:{},..."FILE"===t&&"number"==typeof m?{L:String(m+1)}:{},..."FILE"===t&&"number"==typeof g?{C:String(g+1)}:{}}).toString()}}},509901:(e,t,r)=>{r.d(t,{Yf:()=>f,gf:()=>m,ok:()=>d,s5:()=>p});var n=r(413063),a=r.n(n),i=r(692738),s=r(412836),o=r(425373),l=r(302118);function u(e,t,r,n,a,i,s){try{var o=e[i](s),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(n,a)}function c(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var i=e.apply(t,r);function s(e){u(i,n,a,s,o,"next",e)}function o(e){u(i,n,a,s,o,"throw",e)}s(void 0)})}}function d(e,t,r){let n=(0,i.useCallback)(({key:e,...t})=>({queryKey:["authz_eval",...e],queryFn:({signal:e})=>c(function*(){return yield l.k.authzEval(t,r?{signal:e}:void 0)})()}),[r]);return(0,s.IT)({...n(e),...t})}function f(e,t,r){var n,i,s;let u,d=(0,o.E)({queries:(n=e,i=t,s=r,u=["authz_eval"].concat(n),a()(Object.entries(i.actions),p).map((e,t)=>{let r=e.reduce((e,t)=>(e[t[0]]=t[1],e),{});return{queryKey:[...u,t],queryFn:()=>{var e;return e={actions:r,include_argument_metadata:i.include_argument_metadata},c(function*(){return yield l.k.authzEval(e)})()},enabled:s?.enabled,refetchOnWindowFocus:s?.refetchOnWindowFocus==="always"||!!s?.refetchOnWindowFocus,staleTime:s?.staleTime}}))}),f=d.some(e=>e.isLoading);if(f)return{isLoading:f,data:null,isError:!1,errors:[]};let m=d.reduce((e,t)=>(t.error&&e.push(t.error),e),[]);if(m.length>0)return{isLoading:f,data:null,isError:!0,errors:m};return{isLoading:f,data:d.reduce((e,t)=>{if(t.data&&t.data?.actions)return{actions:{...e.actions,...t.data.actions}};return e},{actions:{}}),isError:!1,errors:[]}}let p=100;function m(e){e.invalidateQueries(["authz_eval"])}},521200:(e,t,r)=>{r.d(t,{$5:()=>X,An:()=>H,D$:()=>M,EA:()=>G,EH:()=>es,EP:()=>el,EZ:()=>S,Eh:()=>ed,GZ:()=>Y,KR:()=>v,Md:()=>E,Pn:()=>B,Qb:()=>m,Qc:()=>eo,R$:()=>I,RQ:()=>N,RZ:()=>ec,Rq:()=>P,SI:()=>j,T5:()=>V,T9:()=>Z,TX:()=>R,Te:()=>O,Tl:()=>K,VF:()=>er,Vo:()=>T,WA:()=>p,XX:()=>C,YB:()=>y,Ze:()=>k,_3:()=>_,_r:()=>$,aQ:()=>J,dQ:()=>ee,eG:()=>Q,hD:()=>q,kC:()=>W,ku:()=>g,l5:()=>L,lR:()=>h,mP:()=>eu,mT:()=>U,nG:()=>x,p$:()=>z,tA:()=>w,u0:()=>b,u7:()=>en,uv:()=>f,v:()=>F,xh:()=>A,yY:()=>et,z9:()=>D,zS:()=>ea});var n=r(115957),a=r(817148),i=r(441535),s=r(686560),o=r(657825),l=r(707076),u=r(411695),c=r(371303),d=r(889885);function f(){return(0,d.CV)().enableSqlService}function p(){return!(0,i.W)("databricks.fe.dbsql.disableProSku",!1)}function m(){return(0,i.W)("com.databricks.elasticspark.JobsSharedConf.enableServerlessUI",!1)||(0,u.ER)()}function g(){return(0,o.fo)()===o.hQ.ServerlessOnly}function E(){return(0,i.W)("com.databricks.backend.cluster.ComputeKindCommonConf.defaultSparkVersionForServerlessReplVmJobCompute","14.0.x-snapshot-scala2.12")}function h(){return(0,c.sT)("databricks.fe.enableServerlessSparkUI",!1)||(0,i.W)("databricks.fe.enableServerlessSparkUI-safe",!1)}function S(){return(0,l.MH)()}function _(){return(0,i.W)("databricks.fe.jaws.enableAIPFilteringSyntax",!1)}function A(){return(0,i.W)("databricks.fe.jaws.enableJobFilterInRunsList",!1)}function v(){return(0,i.W)("databricks.fe.jaws.enableRunAsJobListFilter",!1)}function T(){return(0,i.W)("databricks.elasticspark.environments.jobEnvironmentsMaxLength",10)}function b(){return(0,i.W)("databricks.fe.jaws.enableText2Schedule",!1)}function y(){return(0,s.d)("userCanUseSqlService_new",!1)}function C(){return(0,i.W)("databricks.graphql.graphqlJobListPollInterval",1e4)}function I(){return(0,i.W)("databricks.graphql.graphqlJobRunsMatrixPollInterval",5e3)}function R(){return(0,i.W)("databricks.graphql.graphqlJobScheduleListPollInterval",2e4)}function O(){return(0,i.W)("databricks.elasticspark.environments.enableEnvironmentVersionField",!1)}function M(){return(0,i.W)("databricks.elasticspark.environments.enableNotebookTaskEnvironmentsImprovements",!1)}function P(){return(0,i.W)("databricks.elasticspark.environments.forceManualEnvironmentCreationForWheelJarTasks",!1)}function N(){return(0,i.W)("databricks.fe.jaws.enableInteractiveClusterLibrariesMigration",!1)}function w(){return(0,i.W)("databricks.fe.jaws.enableJumboJobsRunsMatrixListViewTaskRunsPlaceholder",!1)}function k(){return(0,i.W)("databricks.fe.jaws.enableJumboJobsFailedMatrixViewRunsRefetch",!0)}function L(){return(0,i.W)("databricks.fe.jaws.tasksLimitInRunsMatrixView",500)}function U(){return(0,i.W)("databricks.fe.jaws.enableJobDetailsPreloadersSingleFetch",!0)}function D(){return(0,n.zl)(a.g3.WORKFLOWS_COST_OPTIMIZATION)&&m()}function x(){return(0,i.W)("databricks.elasticspark.enableLinksUI",!1)}function W(){return!!(0,i.W)("air_interactive",!1)&&(0,i.W)("databricks.elasticspark.serverless.enableAiRuntimeScheduling",!1)}function F(){return(0,i.W)("databricks.fe.pipelines.createPipelineInWorkspace",!1)}function Y(){return(0,i.W)("databricks.fe.jaws.enableMultipleNotebookMetadataFetching",!1)}function G(){return(0,i.W)("databricks.fe.jaws.enablePerformanceTargetTaskFiltering",!1)}function $(){return(0,i.W)("databricks.fe.jaws.enableCustomBaseEnvironments",!1)}function H(){return(0,i.W)("databricks.fe.jaws.enableImprovedIsOptimizeableJob",!1)}function B(){return(0,i.W)("databricks.fe.jaws.enablePipelineMetadataFetching",!1)}function V(){return(0,i.W)("databricks.fe.jaws.enableAggregatedServerlessClusterFetching",!1)}function q(){return(0,i.W)("databricks.fe.jaws.enableJobDetailsPageOptimization",!1)}function z(){return(0,i.W)("databricks.fe.jaws.enableRouteLevelPrefetchingJobDetails",!1)}function j(){return(0,i.W)("databricks.fe.jaws.maxPipelinesForMetadataFetch",50)}function K(){return(0,i.W)("databricks.fe.jaws.maxNotebooksForMetadataFetch",1e3)}function Q(){return(0,i.W)("databricks.fe.jaws.enablePermanentServerlessGPUDropdownOption",!1)&&(0,i.W)("databricks.elasticspark.serverless.enableHighMemoryOverrideForTaskLevelGpu",!1)&&W()}function J(){return(0,i.W)("databricks.fe.jaws.showServerlessClustersOnTaskCards",!1)&&Q()}function X(){return(0,i.W)("databricks.fe.jaws.enablePencilChangeAcceleratorInJobs",!1)&&Q()}function Z(){return(0,i.W)("databricks.fe.jaws.enableServerlessGpuAcceleratorSeparation",!1)&&Q()}function ee(){return(0,i.W)("databricks.elasticspark.fe.enableServerlessJarJobPuPr",!1)}function et(){return(0,i.W)("databricks.fe.jaws.enableConfigureAcceleratorSidePanel",!1)&&Z()}function er(){return(0,i.W)("databricks.fe.jaws.enableServerlessGpuEnvironmentVersionFilter",!1)}function en(){return(0,i.W)("databricks.fe.jaws.enableServerlessGpuSidePanelSwap",!1)&&Q()}function ea(){return(0,i.W)("databricks.fe.jaws.enableServerlessVariantsInJobsPipelinesOverview",!1)}function ei(){return(0,i.W)("jobs_serverless_managed_base_environments",!1)}function es(){return(0,i.W)("databricks.elasticspark.environments.enableBaseEnvironmentTypeCompatibilityCheck",!1)&&ei()}function eo(){return(0,i.W)("databricks.fe.jaws.enableManagedBaseEnvironmentsInSidePanel",!1)&&ei()}function el(){return(0,i.W)("databricks.fe.jaws.enableUnifiedBaseEnvironmentFieldInJobEnvModal",!1)&&ei()}function eu(){return(0,i.W)("databricks.fe.jaws.includeAcceleratorInJobEnvModalTitle",!1)}function ec(){return(0,i.W)("databricks.elasticspark.environments.environmentsRHFSync.enabled",!1)}function ed(){return(0,i.W)("databricks.fe.jaws.enableTreeNodeByPathForClusterSpec",!0)}},523318:(e,t,r)=>{r.d(t,{b:()=>u,u:()=>l});var n=r(778529),a=r.n(n),i=r(1859),s=r(978679);function o(e,t){try{return e(t)}catch(e){if(!(e instanceof i.z6))throw e}return null}class l{allSearchParams;filteredSearchParams;codecMap;constructor(e,t=new URLSearchParams){this.codecMap=e,this.allSearchParams=t,this.filteredSearchParams=new URLSearchParams(Array.from(this.allSearchParams.entries()).filter(([t])=>(0,s.tf)(e,t)))}get all(){let e=this.allSearchParams;return{entries:(...t)=>e.entries(...t),forEach:(...t)=>e.forEach(...t),get:(...t)=>e.get(...t),getAll:(...t)=>e.getAll(...t),has:(...t)=>e.has(...t),keys:(...t)=>e.keys(...t),get size(){let t=e.size;if(void 0!==t)return t;return[...e.entries()].length},toString:(...t)=>e.toString(...t),values:(...t)=>e.values(...t)}}getUntyped(){return new URLSearchParams(this.allSearchParams)}append(e,t){let{serialize:r}=this.codecMap[e],n=r(t);this.allSearchParams.append(String(e),n),this.filteredSearchParams.append(String(e),n)}delete(e){this.allSearchParams.delete(String(e)),this.filteredSearchParams.delete(String(e))}*entries(){for(let[e,t]of this.filteredSearchParams.entries()){if(!(0,s.tf)(this.codecMap,e))continue;let{deserialize:r}=this.codecMap[e],n=o(r,t);yield[e,n]}}forEach(e){this.filteredSearchParams.forEach((t,r)=>{let{deserialize:n}=this.codecMap[r],i=o(n,t);a()(i)||e(i,r,this)},this)}get(e){let t=this.filteredSearchParams.get(String(e));if(a()(t))return null;let{deserialize:r}=this.codecMap[e];return o(r,t)}getAll(e){return this.filteredSearchParams.getAll(String(e)).map(t=>{let{deserialize:r}=this.codecMap[e];return o(r,t)})}has(e){return this.filteredSearchParams.has(String(e))}keys(){return this.filteredSearchParams.keys()}get size(){let e=this.filteredSearchParams.size;if(void 0!==e)return e;return[...this.entries()].length}set(e,t){let{serialize:r}=this.codecMap[e],n=r(t);this.allSearchParams.set(String(e),n),this.filteredSearchParams.set(String(e),n)}sort(){this.filteredSearchParams.sort()}toString(){return this.filteredSearchParams.toString()}*values(){for(let[e,t]of this.filteredSearchParams.entries()){let{deserialize:r}=this.codecMap[e],n=o(r,t);yield n}}}function u(e){return class extends l{constructor(t){const r=new URLSearchParams((Array.isArray(t)?t:Object.entries(t||{})).map(([t,r])=>{let{serialize:n}=e[t],a=n(r);return[String(t),a]}));super(e,r)}static fromUntyped(t){return new l(e,"string"==typeof t?new URLSearchParams(t):t)}}}},529129:(e,t,r)=>{r.d(t,{e_:()=>i,en:()=>a,fc:()=>n});let n="**",a=`/${n}`;function i(e){let t=e.include;if(!t)return null;if(t.endsWith(a))return{type:"folder",path:t.slice(0,-n.length)};return{type:"file",path:t}}},537287:(e,t,r)=>{r.d(t,{XI:()=>c,ZN:()=>u,cd:()=>a,wL:()=>l});var n=r(993533);function a(e){return!!e&&e!==n.ezR.NONE&&e!==n.ezR.UNSPECIFIED}let i={[n.ezR.GPU_1xA10]:"A10",[n.ezR.GPU_1xH100]:"1xH100",[n.ezR.GPU_8xH100]:"H100"},s={[n.ezR.GPU_1xA10]:"GPU 1xA10",[n.ezR.GPU_1xH100]:"GPU 1xH100",[n.ezR.GPU_8xH100]:"GPU 8xH100"},o=Object.fromEntries(Object.entries(i).map(([e,t])=>[t,e]));function l(e){if(!a(e))return null;return s[e]??null}function u(e){if(!e)return null;return o[e]??null}function c(e){return null!=e&&e in i?e:u(e)}},574132:(e,t,r)=>{r.d(t,{y:()=>i});var n=r(610435);r(692738);var a=r(497895);let i=({disabled:e,children:t})=>{let{theme:r}=(0,a.wn)();return(0,n.Y)("div",{css:{color:r.colors.textSecondary,fontSize:r.typography.fontSizeSm,...e&&{color:r.colors.actionDisabledText}},children:t})}},581716:(e,t,r)=>{r.d(t,{UM:()=>c,hs:()=>f,pu:()=>d,rs:()=>g,tn:()=>m,w$:()=>u,xf:()=>p});var n,a,i,s,o,l,u=((n={}).USERNAME_PASSWORD="USERNAME_PASSWORD",n.OAUTH_GOOGLE_SERVICE_ACCOUNT="OAUTH_GOOGLE_SERVICE_ACCOUNT",n.OAUTH_U2M="OAUTH_U2M",n.OAUTH_M2M="OAUTH_M2M",n.OAUTH_U2M_MAPPING="OAUTH_U2M_MAPPING",n.OAUTH_ACCESS_TOKEN="OAUTH_ACCESS_TOKEN",n.OAUTH_REFRESH_TOKEN="OAUTH_REFRESH_TOKEN",n.OAUTH_RESOURCE_OWNER_PASSWORD="OAUTH_RESOURCE_OWNER_PASSWORD",n.BEARER_TOKEN="BEARER_TOKEN",n.PEM_PRIVATE_KEY="PEM_PRIVATE_KEY",n.SERVICE_CREDENTIAL="SERVICE_CREDENTIAL",n.OAUTH_MTLS="OAUTH_MTLS",n.ANY_STATIC_CREDENTIAL="ANY_STATIC_CREDENTIAL",n.SSWS_TOKEN="SSWS_TOKEN",n.OAUTH_DCR="OAUTH_DCR",n),c=((a={}).ACTIVE="ACTIVE",a.FAILED="FAILED",a.PROVISIONING="PROVISIONING",a),d=((i={}).MYSQL="MYSQL",i.MONGODB="MONGODB",i.POSTGRESQL="POSTGRESQL",i.MANAGED_POSTGRESQL="MANAGED_POSTGRESQL",i.SNOWFLAKE="SNOWFLAKE",i.REDSHIFT="REDSHIFT",i.SQLDW="SQLDW",i.SQLSERVER="SQLSERVER",i.DATABRICKS="DATABRICKS",i.SALESFORCE="SALESFORCE",i.SALESFORCE_DATA_CLOUD="SALESFORCE_DATA_CLOUD",i.SALESFORCE_DATA_CLOUD_FILE_SHARING="SALESFORCE_DATA_CLOUD_FILE_SHARING",i.TERADATA="TERADATA",i.ORACLE="ORACLE",i.BIGQUERY="BIGQUERY",i.NETSUITE="NETSUITE",i.WORKDAY_RAAS="WORKDAY_RAAS",i.WORKDAY_ACTIVITY_LOGGING="WORKDAY_ACTIVITY_LOGGING",i.WORKDAY_HCM="WORKDAY_HCM",i.SERVICENOW="SERVICENOW",i.VECTOR_INDEX="VECTOR_INDEX",i.FABRIC="FABRIC",i.ONELAKE="ONELAKE",i.HIVE_METASTORE="HIVE_METASTORE",i.GLUE="GLUE",i.GA4_RAW_DATA="GA4_RAW_DATA",i.GOOGLE_DRIVE="GOOGLE_DRIVE",i.SHAREPOINT="SHAREPOINT",i.ONEDRIVE="ONEDRIVE",i.HTTP="HTTP",i.POWER_BI="POWER_BI",i.SFTP="SFTP",i.DYNAMICS365="DYNAMICS365",i.DBT_PLATFORM="DBT_PLATFORM",i.JIRA="JIRA",i.CONFLUENCE="CONFLUENCE",i.GITHUB="GITHUB",i.HUBSPOT="HUBSPOT",i.ZENDESK="ZENDESK",i.SLACK_AUDIT_LOGS="SLACK_AUDIT_LOGS",i.SLACK_ACCESS_AND_INTEGRATION_LOGS="SLACK_ACCESS_AND_INTEGRATION_LOGS",i.META_MARKETING="META_MARKETING",i.SALESFORCE_MARKETING_CLOUD="SALESFORCE_MARKETING_CLOUD",i.JDBC="JDBC",i.GENERIC_LAKEFLOW_CONNECT="GENERIC_LAKEFLOW_CONNECT",i.SLACK="SLACK",i.KAFKA="KAFKA",i.RABBITMQ="RABBITMQ",i.GOOGLE_ADS="GOOGLE_ADS",i.OUTLOOK="OUTLOOK",i.PALANTIR="PALANTIR",i.BIGLAKE="BIGLAKE",i.GOOGLE_CLOUD_LAKEHOUSE="GOOGLE_CLOUD_LAKEHOUSE",i.TIKTOK_ADS="TIKTOK_ADS",i.CROWDSTRIKE_EVENT_STREAM="CROWDSTRIKE_EVENT_STREAM",i.ONE_PASSWORD_EVENT_LOGS="ONE_PASSWORD_EVENT_LOGS",i.OKTA_SYSTEM_LOGS="OKTA_SYSTEM_LOGS",i.AKAMAI_WAF="AKAMAI_WAF",i.M365_AUDIT_LOGS="M365_AUDIT_LOGS",i.SMARTSHEET="SMARTSHEET",i.AWS_SECRETS_MANAGER="AWS_SECRETS_MANAGER",i.VEEVA_VAULT="VEEVA_VAULT",i),f=((s={}).BUILTIN="BUILTIN",s.EXTERNAL="EXTERNAL",s.GLUE="GLUE",s.NONE="NONE",s),p=((o={}).USES_USERNAME_PASSWORD="USES_USERNAME_PASSWORD",o.USES_OAUTH_GOOGLE_SERVICE_ACCOUNT="USES_OAUTH_GOOGLE_SERVICE_ACCOUNT",o.USES_OAUTH_USER_AUTHORIZATION="USES_OAUTH_USER_AUTHORIZATION",o.USES_OAUTH_ACCESS_TOKEN="USES_OAUTH_ACCESS_TOKEN",o.USES_OAUTH_REFRESH_TOKEN="USES_OAUTH_REFRESH_TOKEN",o.USES_OAUTH_RESOURCE_OWNER_PASSWORD="USES_OAUTH_RESOURCE_OWNER_PASSWORD",o.USES_BEARER_TOKEN="USES_BEARER_TOKEN",o.USES_PEM_PRIVATE_KEY="USES_PEM_PRIVATE_KEY",o.USES_OAUTH_M2M="USES_OAUTH_M2M",o.USES_OAUTH_U2M_SHARED="USES_OAUTH_U2M_SHARED",o.USES_OAUTH_U2M_CUSTOM_APP="USES_OAUTH_U2M_CUSTOM_APP",o.USES_OAUTH_U2M_MAPPING="USES_OAUTH_U2M_MAPPING",o.USES_SERVICE_CREDENTIAL="USES_SERVICE_CREDENTIAL",o.USES_OAUTH_MTLS="USES_OAUTH_MTLS",o.USES_ANY_STATIC_CREDENTIAL="USES_ANY_STATIC_CREDENTIAL",o.USES_SSWS_TOKEN="USES_SSWS_TOKEN",o.USES_DCR="USES_DCR",o),m=((l={}).BEFORE_ACCESS_TOKEN="BEFORE_ACCESS_TOKEN",l.BEFORE_AUTHORIZATION_CODE="BEFORE_AUTHORIZATION_CODE",l);let g={OAUTH_ACCESS_TOKEN:"USES_OAUTH_ACCESS_TOKEN",OAUTH_U2M:"USES_OAUTH_USER_AUTHORIZATION",USERNAME_PASSWORD:"USES_USERNAME_PASSWORD",OAUTH_GOOGLE_SERVICE_ACCOUNT:"USES_OAUTH_GOOGLE_SERVICE_ACCOUNT",OAUTH_REFRESH_TOKEN:"USES_OAUTH_REFRESH_TOKEN",OAUTH_RESOURCE_OWNER_PASSWORD:"USES_OAUTH_RESOURCE_OWNER_PASSWORD",BEARER_TOKEN:"USES_BEARER_TOKEN",PEM_PRIVATE_KEY:"USES_PEM_PRIVATE_KEY",OAUTH_M2M:"USES_OAUTH_M2M",OAUTH_U2M_MAPPING:"USES_OAUTH_U2M_MAPPING",SERVICE_CREDENTIAL:"USES_SERVICE_CREDENTIAL",OAUTH_MTLS:"USES_OAUTH_MTLS",ANY_STATIC_CREDENTIAL:"USES_ANY_STATIC_CREDENTIAL",SSWS_TOKEN:"USES_SSWS_TOKEN",OAUTH_DCR:"USES_DCR"}},583971:(e,t,r)=>{r.d(t,{Ri:()=>d});var n=r(733337),a=r(641760),i=r(278983);function s(e,t,r,n,a,i,s){try{var o=e[i](s),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(n,a)}function o(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var i=e.apply(t,r);function o(e){s(i,n,a,o,l,"next",e)}function l(e){s(i,n,a,o,l,"throw",e)}o(void 0)})}}let l=[1,1,2,3,5,8,13,21],u=l.length;function c(e){return e instanceof a.XD}function d(e,t){return o(function*(e,t,r=1e3){let a=0,s=null;for(;a<u;)try{return yield(0,n.nr)(e,t)}catch(e){if(s=e,c(e)&&function(e){if(!c(e))return!1;return 429===e.response.status}(e))(0,i.y)("clientsideEvent",{eventType:"ApiFetchRetry",eventName:"RetryAttempt",retryCount:a}),yield function(e){return o(function*(e,t=1e3){let r=function(e,t=1e3){let r=Math.min(e,l.length-1);return l[r]*t}(e,t);return new Promise(e=>setTimeout(e,r))}).apply(this,arguments)}(a,r),a++;else break}throw c(s)&&a===u&&(0,i.y)("clientsideEvent",{eventType:"ApiFetchRetry",eventName:"MaxRetryAttemptReached",errorCode:s?.response?.status,retryCount:a}),s}).apply(this,arguments)}},589830:(e,t,r)=>{r.d(t,{N:()=>s,U:()=>o});var n=r(441535),a=r(657825),i=r(411695);function s(){let e=(0,i.ER)(),t=(0,a.fo)()===a.hQ.ServerlessOnly,r=(0,n.W)("serverless_dlt",null)??((0,n.W)("databricks.fe.pipelines.enablePipelinesServerlessUI",!1)&&(0,n.W)("databricks.deltapipelines.safe.isServerlessEnabled",!1));return e||t||r}function o(){return s()&&(0,n.W)("databricks.fe.pipelines.enablePipelinesServerlessUIForSamplePipeline",!0)}},594390:(e,t,r)=>{r.d(t,{V:()=>i}),r(160603);var n=r(979551),a=r(595615);let i=(...e)=>{let t=(0,a.uV)(...e);return(0,n.L)(t)}},595615:(e,t,r)=>{r.d(t,{AO:()=>d,Ox:()=>p,RK:()=>g,ic:()=>E,rA:()=>m,uV:()=>f});var n=r(692738),a=r(160603),i=r(441535),s=r(412836),o=r(425373);function l(e,t,r,n,a,i,s){try{var o=e[i](s),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(n,a)}(0,a.setLogger)({log:console.log,warn:console.warn,error:()=>{}});let u={retry:!1,refetchOnWindowFocus:!1,staleTime:3e5},c=new Map;function d(e){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),r={...u,...e,enabled:e?.enabled!==!1&&t},n={...u,...e,enabled:e?.enabled!==!1&&!t};c.set(JSON.stringify(e.queryKey),e.queryKey);let o=(0,s.IT)(r),l=(0,a.useQuery)(n);return t?o:l}function f({queries:e}){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),r=e.map(e=>({...u,...e,enabled:e?.enabled!==!1&&t})),n=e.map(e=>({...u,...e,enabled:e?.enabled!==!1&&!t}));e.forEach(e=>c.set(JSON.stringify(e.queryKey),e.queryKey));let s=(0,o.E)({queries:r}),l=(0,a.useQueries)(n);return t?s:l}function p({queryFn:e}){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),r=(0,a.useQueryClient)(),o=e();return(0,n.useCallback)((e,n={})=>t?s.aH.getActiveValue().fetchQuery({...n,...o(e)},u):r.fetchQuery({...n,...o(e)},u),[o,t,r])}function m(){let[e,t]=(0,n.useState)(0),r=(0,a.useQueryClient)(),o=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1);return{invalidate:(e,n)=>{var a;return(a=function*(){t(e=>e+1);try{if(e)yield o?s.aH.getActiveValue().invalidateQueries(e):r.invalidateQueries(e),c.delete(JSON.stringify(e));else{let e=Array.from(c.values()).filter(e=>{if(!Array.isArray(e))return!1;if(!n)return!0;return e.some(e=>"string"==typeof e&&e.includes(n))}).filter(e=>void 0!==e).map(e=>o?s.aH.getActiveValue().invalidateQueries(e):r.invalidateQueries(e));yield Promise.allSettled(e),c=new Map}}finally{t(e=>e-1)}},function(){var e=this,t=arguments;return new Promise(function(r,n){var i=a.apply(e,t);function s(e){l(i,r,n,s,o,"next",e)}function o(e){l(i,r,n,s,o,"throw",e)}s(void 0)})})()},isLoadingInvalidation:e>0}}function g(e){for(let t of e){let e=t.isIdle??void 0;if(!E({isIdle:e,status:t.status??void 0,fetchStatus:t.fetchStatus??void 0}))return!1}return!0}function E(e){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),r=e.isIdle??!1;if(t)return"fetchStatus"in e&&"loading"===e.status&&"idle"===e.fetchStatus;return r}},598296:(e,t,r)=>{r.d(t,{an:()=>s,cf:()=>o,yh:()=>l});var n,a,i,s=((n={}).METASTORE="METASTORE",n.CATALOG="CATALOG$",n.DATABASE="DATABASE",n.TABLE="TABLE",n.VIEW="VIEW",n.STORAGE_CREDENTIAL="STORAGE_CREDENTIAL",n.EXTERNAL_LOCATION="EXTERNAL_LOCATION",n.FUNCTION="FUNCTION",n.REGISTERED_MODEL="REGISTERED_MODEL",n.VOLUME="VOLUME",n.CONNECTION="CONNECTION",n.EXTERNAL_METADATA="EXTERNAL_METADATA",n),o=((a={}).ALL="ALL",a.USAGE="USAGE",a.SELECT="SELECT",a.CREATE="CREATE",a.MODIFY="MODIFY",a.READ_METADATA="READ_METADATA",a.READ_FILES="READ_FILES",a.WRITE_FILES="WRITE_FILES",a.CREATE_TABLE="CREATE_TABLE",a.CREATE_MOUNT="CREATE_MOUNT",a.USE_CATALOG="USE_CATALOG",a.USE_SCHEMA="USE_SCHEMA",a.CREATE_SCHEMA="CREATE_SCHEMA",a.CREATE_VIEW="CREATE_VIEW",a.CREATE_FUNCTION="CREATE_FUNCTION",a.CREATE_EXTERNAL_TABLE="CREATE_EXTERNAL_TABLE",a.CREATE_MODEL="CREATE_MODEL",a.EXECUTE="EXECUTE",a.ALL_PRIVILEGES="ALL_PRIVILEGES",a),l=((i={}).NOT_OWNER="NOT_OWNER",i.REQUIRES_ANY_PRIVILEGE="REQUIRES_ANY_PRIVILEGE",i.REQUIRES_ANY_NON_BROWSE_PRIVILEGE="REQUIRES_ANY_NON_BROWSE_PRIVILEGE",i.REQUIRES_PRIVILEGES="REQUIRES_PRIVILEGES",i.NOT_UPDATABLE_IN_CURRENT_WORKSPACE="NOT_UPDATABLE_IN_CURRENT_WORKSPACE",i.DOES_NOT_EXIST="DOES_NOT_EXIST",i)},599349:(e,t,r)=>{r.d(t,{M:()=>f});var n=r(610435),a=r(956935),i=r(692738),s=r(5421),o=r(79128),l=r(497895),u=r(369291),c=r(174541),d=r(639712);let f=(0,i.forwardRef)(({children:e,...t},r)=>{let{theme:i}=(0,l.wn)(),{isInsideTypeaheadCombobox:f,componentId:p}=(0,s.T)();if(!f)throw Error("`TypeaheadComboboxAddButton` must be used within `TypeaheadCombobox`");return(0,n.Y)(o.$n,{...t,componentId:`${p}.add_option`,type:"tertiary",onClick:e=>{e.stopPropagation(),t.onClick?.(e)},onMouseUp:e=>{e.stopPropagation(),t.onMouseUp?.(e)},className:"combobox-footer-add-button",css:{...(0,c.RB)(i),...(0,a.AH)((0,d.dg)({width:"100%",padding:0,display:"flex",alignItems:"center",borderRadius:0,"&:focus":{background:i.colors.actionTertiaryBackgroundHover,outline:"none"}}))},icon:(0,n.Y)(u.A,{}),ref:r,children:e})})},605107:(e,t,r)=>{r.d(t,{X:()=>i});var n=r(610435),a=r(497895);let i=({children:e,...t})=>{let{theme:r}=(0,a.wn)();return(0,n.Y)("div",{...t,css:{display:"flex",flexDirection:"row",alignItems:"flex-start",padding:`${r.spacing.xs}px ${r.spacing.lg/2}px`,alignSelf:"stretch",fontWeight:400,color:r.colors.textSecondary},children:e})}},613319:(e,t,r)=>{r.d(t,{R:()=>s});var n=r(751777),a=r(235257),i=r(441535);function s({itemId:e,invalidateAssetData:t=!1}={}){if(!(0,i.W)("databricks.fe.schemabrowser.newTree",!1))return;if(!e)return void(0,n.Pv)({treeEventIdentifier:a.M.UC_SCHEMA_BROWSER,invalidationEventType:a.Zk.INVALIDATE_ALL});if(t)return void(0,n.Pv)({treeEventIdentifier:a.M.UC_SCHEMA_BROWSER,invalidationEventType:a.Zk.INVALIDATE_ASSET_AND_CHILDREN,itemId:e});(0,n.Pv)({treeEventIdentifier:a.M.UC_SCHEMA_BROWSER,invalidationEventType:a.Zk.INVALIDATE_ASSET_CHILDREN,itemId:e})}},618519:(e,t,r)=>{r.d(t,{Y:()=>I,q:()=>R});var n=r(692738),a=r(927239),i=r(758396),s=r(711489),o=r(657825),l=r(886100),u=r(22191),c=r(747129),d=r(595615),f=r(77240),p=r(710343),m=r(302118),g=r(733337),E=r(660618),h=r(641760),S=r(192464),_=r(862294),A=r(302136);function v(e,t,r,n,a,i,s){try{var o=e[i](s),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(n,a)}function T(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var i=e.apply(t,r);function s(e){v(i,n,a,s,o,"next",e)}function o(e){v(i,n,a,s,o,"throw",e)}s(void 0)})}}let b=[/^Fetch request failed due to expired CSRF token/,/^Fetch request failed due expired user session/];function y(){let e=(0,A.A)(),t="http://go/dduipd/list_catalogs";return(0,n.useCallback)(({withWorkspaceBindings:r,includeBrowse:n})=>({queryKey:[a.xQ,!0===r,!0===n],queryFn:()=>T(function*(){try{let a=yield T(function*(){return e({rpc:s.Uz.UcApiRpcName.LIST_CATALOGS}),m.k.getCatalogs(n,r)})();return l.iT.sev2BurnRate(u.Es.DataExplorer,t,c.i1.P99,c.Ip.Min10,!0),a.catalogs??[]}catch(e){return(0,g.Ur)(e)||e instanceof h.XD&&404===e.response.status&&"FEATURE_DISABLED"===e.response.data.error_code&&e.response.data.message.includes("STANDARD_TIER")||e?.errorType===i.pB.EXPIRED_CSRF_TOKEN||e?.errorType===i.pB.EXPIRED_SESSION||b.some(t=>e?.message?.match(t))||l.iT.sev2BurnRate(u.Es.DataExplorer,t,c.i1.P99,c.Ip.Min10,!1,e),[]}})()}),[e])}function C(){let e=(0,h.ei)()&&(0,h.n_)()&&!(0,o.gK)(),t=(0,_.zx)({enabled:e}),r=(0,d.Ox)({queryFn:y}),i=!!e&&t.data?.settingspolicyserviceGetSettingRestWithoutSettingName?.setting?.value?.boolVal?.value,s=t.isLoading,l=!e||!1===i&&!1===s;return(0,n.useCallback)(({showNonUCCatalogs:e,sampleCatalogEnabled:t,withWorkspaceBindings:n,includeBrowse:i,dataSource:s,isPostgres:u=!1})=>({queryKey:[a.xQ,!0===e,!0===t,!0===n,!0===i,!0===l,u?(0,p.ud)(s):""],queryFn:()=>T(function*(){let a=(0,h.ei)(),c=(0,o.gK)(),d=[];if(u&&s?.type===f.ol.DATABASE_INSTANCE)return(0,S.mr)(s);if(a){let e=yield r({withWorkspaceBindings:n,includeBrowse:i});d.push(...e)}return e&&(!c&&l&&d.push({name:E.UQ}),t&&!d.some(({name:e})=>e===E.lx)&&d.push({name:E.lx})),d.sort((e,t)=>e.name.localeCompare(t.name))})()}),[l,r])}function I(e,t){let r=C();return(0,d.AO)({...r(e),keepPreviousData:!0,...t})}function R(){return(0,d.Ox)({queryFn:C})}},633203:(e,t,r)=>{r.d(t,{Y:()=>T});var n=r(610435),a=r(692738),i=r(430939),s=r(599349),o=r(342411),l=r(737358),u=r(971384),c=r(846007),d=r(212536),f=r(649934),p=r(786504),m=r(160603),g=r(670757),E=r(302118);function h(e,t,r,n,a,i,s){try{var o=e[i](s),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(n,a)}var S=r(733845),_=r(150190),A=r(694205),v=r(850723);function T({value:e,onChange:t,disabled:r,validationState:s,componentId:l="web-shared_external-location-selector",matchTriggerWidth:u,externalLocationQueryOptions:c,externalLocationOptionHintContentField:y,filterFn:C,optionAddon:I,recentlyUsedExternalLocation:R,maxHeight:O}){let M,P,N,w,k,L,U,D=(0,o.tz)(),x=(0,v.O)(),W=(0,A.v)(c),F=(0,a.useMemo)(()=>(function(e,t){if(!t)return e;if(e){let r=e?.findIndex(e=>e.name===t?.name);if(r>=0){let n=[...e];return n.splice(r,1),n.unshift(t),n}}return e})(W.data?.external_locations,R),[W.data?.external_locations,R]),Y=(M=(0,_.H)(),P=(0,S.O)(),N=(0,p.Pu)().authorize(f.E.CreateStorageCredential()),w=function(e,t){let{includeUnbound:r,purpose:n=g._7.STORAGE}=t||{};return(0,m.useQuery)(["list_storage_credentials",r,n],()=>{var e;return(e=function*(){return yield E.k.listCredentials({includeUnbound:r,purpose:n})},function(){var t=this,r=arguments;return new Promise(function(n,a){var i=e.apply(t,r);function s(e){h(i,n,a,s,o,"next",e)}function o(e){h(i,n,a,s,o,"throw",e)}s(void 0)})})()},e)}({enabled:P},{purpose:g._7.STORAGE}),k=N.response?.authorized===!0,L=!!M.data?.is_metastore_admin,U=!!w.data?.credentials?.length,L||k||U);return(0,n.Y)(d._,{id:"external-location-selector",componentId:l,icon:(0,n.Y)(i.A,{}),value:e,onChange:e=>t(F?.find(({name:t})=>t===e)),allItems:F??[],loading:W.isLoading||x.isLoading,disabled:r,validationState:s,placeholder:D.formatMessage({id:"+dNT3n",defaultMessage:"Select external location"}),width:"100%",matchTriggerWidth:u,getItemState:e=>({disableReason:e.url===x.data?.storage_root?D.formatMessage({id:"m2FYsa",defaultMessage:"Metastore default external location cannot be used here"}):void 0}),optionHintContentField:y,getFooter:Y?b:void 0,filterFn:C,optionAddon:I,maxHeight:O})}function b({hideMenuOnClick:e}){let t=(0,o.tz)();return(0,n.Y)(s.M,{componentId:"external-location-selector-v2_create-new-button",onClick:function(){(0,u.Lz)((0,l.AO)((0,c.t4)("/explore/locations/create")),{openInNewTab:!0}),e()},children:t.formatMessage({id:"hYd46j",defaultMessage:"Create new external location"})})}},655841:(e,t,r)=>{r.d(t,{GX:()=>d,HA:()=>i,Ij:()=>c,U8:()=>a,_:()=>s,e:()=>l,fq:()=>f,n$:()=>u,r4:()=>o});var n=r(141078);let a=(0,n.J1)`
  fragment IdentityIdapi2PrincipalFragment on IdentityIdapi2Principal {
    displayName
    externalId
    status
    legacyUserId
    accountId
    sourceIdp
    accountBoundaryCheckState
    exclusivityType
      @includeSafex(name: "databricks.fe.accountsui.queryGroupExclusivityTypeForSeamlessAccounts", defaultValue: false)
  }
`,i=(0,n.J1)`
  query BatchIdentityApiGetPrincipalsQuery($input: AclmanagerIdentityapiBatchGetPrincipalsRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiBatchGetPrincipals(input: $input) {
      apiError {
        message
      }
      responses {
        principal {
          ...IdentityIdapi2PrincipalFragment
        }
        isDirectlyAssigned
        isAccountAdmin
        memberCount
        lastActiveTime
      }
    }
  }
  ${a}
`,s=(0,n.J1)`
  query seamlessListUsers($first: Int!, $after: String, $filter: String, $onlyAccountAdmins: Boolean)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiListUsers(
      input: { filter: $filter, pageSize: $first, pageToken: $after, onlyAccountAdmins: $onlyAccountAdmins }
    ) {
      apiError {
        message
      }
      tooManyResults
      nextPageToken
      entities {
        userName
        principal {
          ...IdentityIdapi2PrincipalFragment
        }
      }
    }
  }
  ${a}
`,o=(0,n.J1)`
  query seamlessListServicePrincipals($first: Int!, $after: String, $filter: String, $onlyAccountAdmins: Boolean)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiListServicePrincipals(
      input: { filter: $filter, pageSize: $first, pageToken: $after, onlyAccountAdmins: $onlyAccountAdmins }
    ) {
      apiError {
        message
      }
      tooManyResults
      nextPageToken
      entities {
        applicationId
        principal {
          ...IdentityIdapi2PrincipalFragment
        }
      }
    }
  }
  ${a}
`,l=(0,n.J1)`
  query seamlessListGroups(
    $first: Int!
    $after: String
    $filter: String
    $onlyAccountAdmins: Boolean
    $onlyExclusiveGroups: Boolean
  ) @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiListGroups(
      input: {
        filter: $filter
        pageSize: $first
        pageToken: $after
        onlyAccountAdmins: $onlyAccountAdmins
        onlyExclusiveGroups: $onlyExclusiveGroups
      }
    ) {
      apiError {
        message
      }
      tooManyResults
      nextPageToken
      entities {
        groupName
        principal {
          ...IdentityIdapi2PrincipalFragment
        }
      }
    }
  }
  ${a}
`,u=(0,n.J1)`
  query seamlessListDirectGroupMembers(
    $first: Int!
    $after: String
    $groupId: LongString
    $externalId: String
    $filter: String
  ) @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiListDirectGroupMembers(
      input: { pageSize: $first, pageToken: $after, groupId: $groupId, externalId: $externalId, filter: $filter }
    ) {
      apiError {
        message
      }
      nextPageToken
      entities {
        group {
          groupName
          principal {
            ...IdentityIdapi2PrincipalFragment
          }
        }
        user {
          userName
          principal {
            ...IdentityIdapi2PrincipalFragment
          }
        }
        servicePrincipal {
          applicationId
          principal {
            ...IdentityIdapi2PrincipalFragment
          }
        }
      }
    }
  }
  ${a}
`,c=(0,n.J1)`
  mutation GetOrCreateIdpUser($input: AclmanagerIdentityapiGetOrCreateUserRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateUser(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,d=(0,n.J1)`
  mutation GetOrCreateIdpGroup($input: AclmanagerIdentityapiGetOrCreateGroupRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateGroup(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,f=(0,n.J1)`
  mutation GetOrCreateIdpServicePrincipal($input: AclmanagerIdentityapiGetOrCreateServicePrincipalRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateServicePrincipal(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`},661152:(e,t,r)=>{r.d(t,{I2:()=>u,TE:()=>s,cR:()=>l,oA:()=>o});var n=r(141078),a=r(154968);let i=(0,n.J1)`
  fragment PipelineGetFragment on DeltapipelinesGetPipelineResponse {
    status {
      cause
      clusterId
      health
      lastModified
      latestUpdates {
        creationTime
        state
        updateId
      }
      name
      permissionLevel
      pipelineId
      creatorUserName
      runAsUserName
      runAs {
        servicePrincipalName
        userName
      }
      effectiveBudgetPolicyId
        @includeSafex(name: "databricks.fe.pipelines.enableEffectiveBudgetPolicyIdInPipelineGet", defaultValue: false)
      ownerPrincipal @includeSafex(name: "databricks.fe.enrichPrincipalUi", defaultValue: false) {
        id
        uniqueName
        kind
        displayName
      }
      effectivePublishingMode
      effectiveEnvironmentVersion
      spec {
        _json
        name
        budgetPolicyId
        usagePolicyId @includeSafex(name: "databricks.fe.budget_policy.renameServerlessPolicy", defaultValue: false)
        configuration {
          key
          value
        }
        tags {
          key
          value
        }
        continuous
        libraries {
          notebook {
            path
          }
          file {
            path
          }
          glob {
            include
          }
        }
        rootPath
        channel
        clusters {
          label
          spec {
            attrs {
              policyId
              nodeTypeId
              driverNodeTypeId
              runtimeEngine
              customTags {
                key
                value
              }
              awsAttributes {
                instanceProfileArn
              }
            }
            size {
              numWorkers
              autoscale {
                minWorkers
                maxWorkers
                mode
              }
            }
          }
        }
        environment {
          client
          dependencies
          environmentVersion
        }
        edition
        photon
        serverless
        development
        deployment {
          kind
          metadataFilePath
        }
        storage
        catalog
        target
        schema
        eventLog {
          name
          catalog
          schema
        }
        pipelineType
        ingestionDefinition {
          connectionName
          ingestionGatewayId
          ingestFromUcForeignCatalog
            @includeSafex(name: "databricks.fe.ingestion.enableForeignCatalogIngestion", defaultValue: false)
          sourceType
          netsuiteJarPath
          objects {
            catalog {
              sourceCatalog
              destinationCatalog
              tableConfiguration {
                scdType
                primaryKeys
                salesforceIncludeFormulaFields
                includeColumns
                excludeColumns
              }
            }
            schema {
              sourceCatalog
              sourceSchema
              destinationCatalog
              destinationSchema
              tableConfiguration {
                scdType
                primaryKeys
                salesforceIncludeFormulaFields
                includeColumns
                excludeColumns
              }
              connectorOptions {
                sharepointOptions {
                  entityType
                  url
                  fileIngestionOptions
                    @includeSafex(name: "databricks.fe.ingestion.connector.sharepoint.enabled", defaultValue: false) {
                    format
                    fileFilters {
                      pathFilter
                      modifiedBefore
                      modifiedAfter
                    }
                    inferColumnTypes
                    schemaEvolutionMode
                    schemaHints
                    ignoreCorruptFiles
                    corruptRecordColumn
                    rescuedDataColumn
                    singleVariantColumn
                    readerCaseSensitive
                    formatOptions {
                      key
                      value
                    }
                  }
                }
                gdriveOptions {
                  entityType
                  url
                }
              }
            }
            table {
              sourceCatalog
              sourceSchema
              sourceTable
              destinationCatalog
              destinationSchema
              destinationTable
              tableConfiguration {
                scdType
                primaryKeys
                salesforceIncludeFormulaFields
                includeColumns
                excludeColumns
                sequenceBy
                queryBasedConnectorConfig {
                  cursorColumns
                }
                autoFullRefreshPolicy {
                  enabled
                }
              }
              connectorOptions {
                sharepointOptions {
                  entityType
                  url
                  fileIngestionOptions
                    @includeSafex(name: "databricks.fe.ingestion.connector.sharepoint.enabled", defaultValue: false) {
                    format
                    fileFilters {
                      pathFilter
                      modifiedBefore
                      modifiedAfter
                    }
                    inferColumnTypes
                    schemaEvolutionMode
                    schemaHints
                    ignoreCorruptFiles
                    corruptRecordColumn
                    rescuedDataColumn
                    singleVariantColumn
                    readerCaseSensitive
                    formatOptions {
                      key
                      value
                    }
                  }
                }
                gdriveOptions {
                  entityType
                  url
                }
                outlookOptions
                  @includeSafex(name: "databricks.fe.ingestion.connector.outlook.enabled", defaultValue: false) {
                  startDate
                  bodyFormat
                  attachmentMode
                  includeMailboxes
                  includeFolders
                  includeSenders
                  includeSubjects
                }
                metaAdsOptions {
                  level
                  breakdowns
                  actionBreakdowns
                  actionReportTime
                  actionAttributionWindows
                  startDate
                  customInsightsLookbackWindow
                  timeIncrement
                }
                smartsheetOptions {
                  enforceSchema
                }
              }
              jiraOptions
                @includeSafex(name: "databricks.fe.ingestion.enableJiraConfluenceSpacesCell", defaultValue: false) {
                includeJiraSpaces
              }
              confluenceOptions
                @includeSafex(name: "databricks.fe.ingestion.enableJiraConfluenceSpacesCell", defaultValue: false) {
                includeConfluenceSpaces
              }
            }
            report {
              sourceUrl
              destinationCatalog
              destinationSchema
              destinationTable
              tableConfiguration {
                scdType
                primaryKeys
                sequenceBy
                includeColumns
                excludeColumns
              }
            }
          }
          tableConfiguration {
            scdType
            primaryKeys
            salesforceIncludeFormulaFields
            includeColumns
            excludeColumns
            autoFullRefreshPolicy {
              enabled
            }
          }
          sourceConfigurations {
            catalog {
              sourceCatalog
              postgres {
                slotConfig {
                  slotName
                  publicationName
                }
              }
            }
          }
        }
        managedDefinition {
          databaseTableSync {
            sinks {
              destTableUcName
              destTable
            }
          }
          metricView @includeSafex(name: "databricks.fe.pipelines.enableMetricViewBacklink", defaultValue: false) {
            ucTableId
          }
        }
        gatewayDefinition {
          connectionName
          gatewayStorageCatalog
          gatewayStorageSchema
          connectionParameters {
            sourceCatalog
          }
        }
        notifications {
          emailRecipients
          alerts
        }
      }
      parameters @includeSafex(name: "pipeline_parameters", defaultValue: false) {
        key
        value
      }
      state
    }
  }
`,s=(0,n.J1)`
  query PipelineGetQuery($input: DeltapipelinesGetPipelineInput!) @component(name: "Workflows.Authoring.UI") {
    deltapipelinesGet: jobsGetPipeline(input: $input) {
      ...PipelineGetFragment
      apiError {
        ...PipelineApiErrorFields
      }
    }
  }
  ${i}
  ${a.n}
`;function o({variables:e,...t}={}){return(0,n.IT)(s,{variables:e,...t})}function l(e){return(0,n._l)(s,e)}function u({variables:e,...t}={}){let r=(0,n.IT)(s,{variables:e,...t,fetchPolicy:"cache-and-network"});if(!t.skip&&void 0===r.data&&!r.error)throw new Promise(e=>{r.observable.subscribe({next(t){t.loading||e(t)}})});return r}},681134:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(141078);let a=(0,n.J1)`
  mutation UpdateAccessRequestDestinationsMutation(
    $fullName: String!
    $type: ManagedcatalogSecurableType!
    $destinations: [RequestforaccessNotificationDestinationInput!]
  ) @component(name: "LakehouseCollaboration.RequestForAccess") {
    requestforaccessUpdateAccessRequestDestinations(
      input: {
        accessRequestDestinations: { securable: { fullName: $fullName, type: $type }, destinations: $destinations }
        updateMask: "destinations"
      }
    ) {
      destinations {
        destinationId
        specialDestination
        destinationType
      }
      securable {
        fullName
        type
      }
      apiError {
        code
        message
      }
    }
  }
`;function i(){return(0,n.n_)(a)}},691069:(e,t,r)=>{r.d(t,{C:()=>u});var n=r(610435);r(692738);var a=r(497895),i=r(465082),s=r(26971),o=r(777517),l=r(342411);let u=({kind:e,disabled:t,style:r})=>{let{theme:u}=(0,a.wn)(),c=(0,l.tz)(),d={alignItems:"center",background:t?void 0:u.colors.backgroundSecondary,borderRadius:30,color:t?u.colors.actionDisabledText:u.colors.textSecondary,display:"flex",fontSize:20,height:30,justifyContent:"center",width:30};switch(e){case"user":return(0,n.Y)(i.A,{title:c.formatMessage({id:"9vv8Gs",defaultMessage:"User"}),css:r||d});case"group":return(0,n.Y)(s.A,{title:c.formatMessage({id:"Qzw3C/",defaultMessage:"Group"}),css:r||d});case"serviceprincipal":return(0,n.Y)(o.A,{title:c.formatMessage({id:"QrVB43",defaultMessage:"Service Principal"}),css:r||d});default:return null}}},694205:(e,t,r)=>{r.d(t,{v:()=>s});var n=r(160603),a=r(302118);function i(e,t,r,n,a,i,s){try{var o=e[i](s),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(n,a)}function s(e,t){return(0,n.useQuery)(["list_external_locations",t],()=>{var e;return(e=function*(){return yield a.k.getExternalLocations(t)},function(){var t=this,r=arguments;return new Promise(function(n,a){var s=e.apply(t,r);function o(e){i(s,n,a,o,l,"next",e)}function l(e){i(s,n,a,o,l,"throw",e)}o(void 0)})})()},e)}},703140:(e,t,r)=>{r.d(t,{C:()=>s});var n=r(759901),a=r.n(n);r(649917);var i=r(834405);class s{static getTimeZone(){return a().tz.guess()}static formatTimeZone(e){let t=a().tz.zone(s.getTimeZone());if(t){let r=e instanceof Date?e.getTime():Date.now();return t.abbr(r)||""}return""}static formatDate(e,t={omitSeconds:!1}){let r=t.omitSeconds?"YYYY-MM-DD HH:mm":"YYYY-MM-DD HH:mm:ss";return a()(e).format(r)}static formatDurationAgo(e){return a()(e).fromNow()}static formatTimestamp(e,t,r){if(!e)return"";if(t)return(0,i.r6)(e,t,r);let n=new Date(e);return s.formatDate(n)+" "+s.formatTimeZone(n)}static formatTimestampNicely(e,t,r){if(!e)return"";if(t)return(0,i.r6)(e,t,r);let n=new Date(e);return a().tz(n,s.getTimeZone()).format("MMM D YYYY, HH:mm A")+" "+s.formatTimeZone(n)}static formatTimestampShort(e,t){if(!e)return"";if(t)return t.formatDate(e,{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"});let r=new Date(e);return a().tz(r,s.getTimeZone()).format("MMM DD, HH:mm")}static formatDateFromTimestamp(e,t){if(!e)return"";if(t)return t.formatDate(e,{month:"short",day:"2-digit"});let r=new Date(e);return a().tz(r,s.getTimeZone()).format("MMM DD")}static formatDuration(e,t){return(e<0?"-":"")+a().duration(e,"seconds").format(t||"h[h] m[m] s[s]")}static factorMs(e){if(e%36e5==0)return{time:e/36e5,unit:36e5,label:"hour"};if(e%6e4==0)return{time:e/6e4,unit:6e4,label:"min"};if(e%1e3==0)return{time:e/1e3,unit:1e3,label:"sec"};return{time:e,unit:1,label:"ms"}}}},720263:(e,t,r)=>{r.d(t,{AP:()=>E,X2:()=>p,hk:()=>g,nT:()=>d,uv:()=>m});var n,a=r(763835),i=r(726583),s=r(255844),o=r(737358),l=r(337706),u=r(488655);let c="joblist/pipelines",d={LIST:c,CREATE:`${c}/create(?*query)`,LIST_WITH_SEARCH:`${c}/search(/:search)`,DETAILS:`${c}/:id`,DETAILS_WITH_UPDATE:`${c}/:id/updates(/:updateId)`,DETAILS_WITH_UPDATE_AND_EVENT:`${c}/:id/updates/:updateId/events(/:eventId)`,CREATE_PIPELINE_FROM_SAMPLE_DATA:`${c}/create/template/from-sample-data`,PIPELINE_DETAILS_SETTINGS:`${c}/:id/settings`};var f=((n=f||{}).SETTINGS="settings",n);let p={showSourceCodePopover:"showSourceCodePopover"},m=new class{mode;constructor(e){this.mode=e}getPipelineListRoute(e){if((0,i.ZW)()){let t=(0,a.Uc)().jobsList,r=new URLSearchParams({asset_type:"pipelines"});return e&&r.set("query",e),this.applyMode(`${t}?${r.toString()}`)}return this.applyMode(e?d.LIST_WITH_SEARCH.replace("(/:search)",`/${encodeURIComponent(e)}`):d.LIST)}getPipelineCreateRoute(){return this.applyMode(d.CREATE.replace("(?*query)",""))}getLakeflowAuthoringCreateRoute(){return this.applyMode(d.CREATE.replace("(?*query)",""))}getPipelineCreateFromSampleDataRoute(){return this.applyMode(d.CREATE_PIPELINE_FROM_SAMPLE_DATA)}getPipelineDetailsRoute(e,t,r){if(t&&r)return this.applyMode(d.DETAILS_WITH_UPDATE_AND_EVENT.replace(":id",e).replace(":updateId",t).replace("(/:eventId)",`/${r}`));if(t)return this.applyMode(d.DETAILS_WITH_UPDATE.replace(":id",e).replace("(/:updateId)",`/${t}`));return this.applyMode(d.DETAILS.replace(":id",e))}getPipelineSettingsRoute(e){return this.applyMode(d.PIPELINE_DETAILS_SETTINGS.replace(":id",e))}applyMode(e){switch(this.mode){case 0:return e;case 1:return`#${e}`;default:return`/#${e}`}}navigateToPipelineDetails(e,t,r,n){(0,u.oo)(m.getPipelineDetailsRoute(e,t,r),n)}navigateToPipelineList(e,t){(0,u.oo)(m.getPipelineListRoute(e),t)}navigateToPipelineCreatePipelineFromSampleData(e){(0,u.oo)(m.getPipelineCreateFromSampleDataRoute(),e)}navigateToPipelineSettings(e,t){(0,u.oo)(m.getPipelineSettingsRoute(e),t)}}(0),g=new class{getPipelineListRoute(e){if((0,i.ZW)())return(0,o.AO)({pathname:(0,a.Uc)().jobsList,search:(0,l.XZ)({search:e,asset_type:"pipelines"})});return(0,o.AO)({pathname:"/pipelines",search:(0,l.XZ)({search:e})})}getPipelineCreateRoute(){return"/pipelines/create"}getLakeflowAuthoringCreateRoute(){return(0,s.zs)()?"/editor/pipelines/new":this.getPipelineCreateRoute()}getPipelineDetailsRoute(e,t,r,{showSourceCodePopover:n,view:a,preserveSearchParams:i}={}){let s=t?(0,o.tW)("/pipelines/:id/updates/:updateId",{id:e,updateId:t}):(0,o.tW)("/pipelines/:id",{id:e}),l=new URLSearchParams(i?window.location.search:void 0);r?l.set("event",r):l.delete("event"),n?l.set("showSourceCodePopover",""):l.delete("showSourceCodePopover"),a?l.set("view",a):l.delete("view");let u=l.toString();return(0,o.AO)({pathname:s,search:u||void 0})}getPipelineSettingsRoute(e,t={}){if((0,s.zs)()&&!t.forceLegacy)return this.getPipelineDetailsRoute(e,t.lastUpdateId,null,{view:"settings"});return(0,o.tW)("/pipelines/:id/settings",{id:e})}getPipelineCreateFromSampleDataRoute(){return"/pipelines/create/sample-data"}};function E(){return g}},726583:(e,t,r)=>{r.d(t,{O6:()=>m,OP:()=>l,Pz:()=>p,SX:()=>g,Yk:()=>f,ZW:()=>c,iQ:()=>o,kf:()=>E,q3:()=>h,ue:()=>s,zM:()=>d});var n=r(441535),a=r(686560),i=r(419374);let s=()=>!!(0,a.d)("centralizedLoginEnabled",!1),o=()=>i.p.enableJobsListPaginatedView()||u(),l=()=>o()&&(0,n.W)("databricks.fe.jaws.enableSegmentedControlOnJobsList",!1),u=()=>(0,n.W)("lakeflow_list",null)??(0,n.W)("databricks.fe.jaws.enableLakeflowUnifiedList",!1),c=()=>o()&&l()&&u(),d=()=>(0,n.W)("databricks.fe.jaws.enableNewLakeflowHomePage",!1),f=()=>(0,n.W)("databricks.elasticspark.pinning.pinningOnBreakingChangesEnabled",!1),p=()=>(0,n.W)("databricks.elasticspark.pinning.jobsBreakingChangesAlertPolling",!0),m=()=>1e3*(0,n.W)("databricks.elasticspark.pinning.jobsBreakingChangesSparkConfPinsPollingIntervalSeconds",30),g=()=>!!((0,n.W)("jobs_disabled_tasks",!1)&&(0,n.W)("databricks.fe.jobs.disabled_tasks.schema.enabled",!1)),E=()=>g()&&(0,n.W)("databricks.fe.jobs.disabled_tasks.enableDisablementPropagation",!1)&&(0,n.W)("databricks.elasticspark.jobs_disabled_tasks.enableDisablementPropagation",!1),h=()=>!!(0,n.W)("databricks.fe.jobs.missingTaskReferenceWarningIconsInPartialRuns.enabled",!1)},733337:(e,t,r)=>{r.d(t,{Ky:()=>c,Ur:()=>d,nr:()=>u});var n=r(583971),a=r(641760),i=r(441535),s=r(19123);function o(e,t,r,n,a,i,s){try{var o=e[i](s),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(n,a)}function l(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var i=e.apply(t,r);function s(e){o(i,n,a,s,l,"next",e)}function l(e){o(i,n,a,s,l,"throw",e)}s(void 0)})}}function u(e,t){return l(function*(){let r=yield(0,s.h)(e,t);if(!r.ok){let t;try{t=yield r.json()}catch(e){}throw new a.XD(e,r,t)}return yield r.json()})()}function c(e,t,r,a,s){return l(function*(){let o,l={response:[],next_page_token:void 0},u=(0,i.W)("databricks.fe.uc.defaultPaginationWindowSize",0),c=void 0!==a?a:u;do{let a=r?.useCentralPagination?{"pagination_context.max_results":c,...r?.queryParameters}:{[s??"max_results"]:c,...r?.queryParameters};o&&(r?.useCentralPagination?a["pagination_context.page_token"]=o:a.page_token=o);let i=new URLSearchParams(a),u=`${e}?${i}`;try{let e=yield(0,n.Ri)(u,r);if(!e)break;let a=yield t(e);a&&l.response.push(...a),r?.useCentralPagination?(l.next_page_token=e.pagination?.next_page_token,o=e.pagination?.next_page_token):(l.next_page_token=e.next_page_token,o=e.next_page_token)}catch(e){throw e}}while(o);return l.response})()}function d(e){return e instanceof a.XD&&404===e.response.status&&"METASTORE_DOES_NOT_EXIST"===e.response.data.error_code}},733845:(e,t,r)=>{r.d(t,{O:()=>s});var n=r(686560),a=r(689262),i=r(441535);function s(){let e=(0,a.b)("unityCatalogServiceEnabled",(0,n.d)("unityCatalogServiceEnabled",!1),()=>(0,i.W)("databricks.unitycatalog.enableUnityCatalogService",!1)),t=(0,n.d)("isMetastoreInstalled_new",!1);return e&&t}},735919:(e,t,r)=>{r.d(t,{k:()=>m});var n=r(610435),a=r(692738),i=r(561587),s=r(694762),o=r(174568),l=r(964133),u=r(342411),c=r(589365);let d=({title:e,child:t,okText:r,onOk:a,zIndex:i,onCancel:o})=>(0,n.Y)(s.aF,{componentId:"codegen_webapp_js_ui_building_blocks_dialogs_duboisdialogbox.tsx_19",title:e,okText:r||(0,n.Y)(u.sA,{id:"PP0+JS",defaultMessage:"OK"}),onOk:()=>{c.h.destroyModal(),a&&a()},onCancel:()=>{c.h.destroyModal(),o&&o()},autoFocusButton:"ok",visible:!0,okButtonProps:{"data-testid":"du-bois-modal-confirm-button"},cancelButtonProps:{"data-testid":"du-bois-modal-cancel-button"},zIndex:i,children:t}),f=({title:e,cancelText:t,okText:r,onCancel:d,onOk:f,defaultValue:p,validate:m})=>{let{handleSubmit:g,control:E,setFocus:h,formState:{errors:S}}=(0,i.mN)({defaultValues:{mainInput:p||""}});(0,a.useEffect)(()=>{h("mainInput")},[h]);let _=e=>{f(e.mainInput),c.h.destroyModal()};return(0,n.FD)(s.aF,{componentId:"codegen_webapp_js_ui_building_blocks_dialogs_duboisdialogbox.tsx_94",title:e,cancelText:t||(0,n.Y)(u.sA,{id:"it1I1G",defaultMessage:"Cancel"}),okText:r||(0,n.Y)(u.sA,{id:"PUv3Te",defaultMessage:"Confirm"}),onCancel:()=>{c.h.destroyModal(),d?.()},onOk:g(_),visible:!0,okButtonProps:{disabled:!!S.mainInput},children:[(0,n.Y)(o.t.Input,{componentId:"codegen_webapp_js_ui_building_blocks_dialogs_duboisdialogbox.tsx_123",id:"mainInput",control:E,name:"mainInput",rules:{required:!0,validate:m},onKeyDown:e=>{13===e.which&&(g(_)(),e.stopPropagation())},validationState:S.mainInput?"error":void 0}),S.mainInput?.message&&(0,n.Y)(l.D.Message,{message:S.mainInput.message,type:"error"})]})},p=({title:e,child:t,cancelText:r,okText:a,onCancel:i,onOk:o,isDanger:l=!1})=>{let d=l?s.ZF:s.aF;return(0,n.Y)(d,{componentId:"codegen_webapp_js_ui_building_blocks_dialogs_duboisdialogbox.tsx_144",title:e,cancelText:r||(0,n.Y)(u.sA,{id:"it1I1G",defaultMessage:"Cancel"}),okText:a||(0,n.Y)(u.sA,{id:"PUv3Te",defaultMessage:"Confirm"}),onCancel:()=>{c.h.destroyModal(),i&&i()},onOk:e=>{c.h.destroyModal(),o&&o(e)},autoFocusButton:"ok",visible:!0,okButtonProps:{"data-testid":"du-bois-modal-confirm-button",className:"btn-primary confirm-button"},cancelButtonProps:{"data-testid":"du-bois-modal-cancel-button",className:"cancel-button"},className:"modal",children:t})},m={alert({title:e,body:t,buttonText:r,callback:a,onCancel:i,zIndex:s}){let o=(0,n.Y)(d,{title:e,child:t,okText:r,onOk:a,zIndex:s,onCancel:i});return c.h.createModal(o),o},confirm({title:e,body:t,cancelText:r,okText:a,onCancel:i,onOk:s,isDanger:o}){let l=(0,n.Y)(p,{title:e,child:t,cancelText:r,okText:a,onCancel:i,onOk:s,isDanger:o});return c.h.createModal(l),l},prompt({title:e,cancelText:t,okText:r,onCancel:a,onOk:i,defaultValue:s,validate:o}){let l=(0,n.Y)(f,{title:e,cancelText:t,okText:r,onCancel:a,onOk:i,defaultValue:s,validate:o});return c.h.createModal(l),l}}},741638:(e,t,r)=>{r.d(t,{LJ:()=>g,VC:()=>m});var n=r(610435),a=r(692738),i=r(497895),s=r(286342),o=r(382908),l=r(79128),u=r(342411),c=r(819524),d=r(845690),f=r(261515);let p="sdpEnvVersionNudgePipelineId";function m(e){(0,f.r$)()&&((0,d._S)(p,1,!0,"")||(0,d.AP)(p,1,!0,e))}function g({children:e,pipelineId:t,onConfigure:r}){let{theme:m}=(0,i.wn)(),E=(0,f.Gt)(),[h,S]=(0,d.Mj)({key:p,version:1,initialValue:""}),[_,A]=(0,a.useState)(()=>!!E&&h===t);if(!_)return(0,n.Y)(n.FK,{children:e});let v=()=>{S("dismissed"),A(!1)};return(0,n.FD)(s.Root,{open:!0,componentId:"lakeflow.pipeline-env-version-nudge",children:[(0,n.Y)(s.Trigger,{asChild:!0,children:(0,n.Y)("div",{children:e})}),(0,n.FD)(s.Content,{align:"end",side:"bottom",maxWidth:320,onOpenAutoFocus:e=>e.preventDefault(),children:[(0,n.Y)(o.o.Text,{bold:!0,children:(0,n.Y)(u.sA,{id:"W9/iCd",defaultMessage:"Environment Version {version} is now your default",values:{version:E}})}),(0,n.Y)(o.o.Paragraph,{css:{paddingTop:m.spacing.sm,paddingBottom:m.spacing.sm},children:(0,n.Y)(u.sA,{id:"Vj9sik",defaultMessage:"New pipelines now use environment version by default. You can change the environment version in Settings. <a>View release notes</a>",values:{a:e=>(0,n.Y)("a",{href:c.Ay.STANDARD_BASE_ENVIRONMENT,target:"_blank",rel:"noopener noreferrer",children:e})}})}),(0,n.Y)(l.$n,{componentId:"lakeflow.pipeline-env-version-nudge.configure",size:"small",onClick:e=>{r(),v(),e.stopPropagation()},children:(0,n.Y)(u.sA,{id:"S5Da2f",defaultMessage:"Configure"})}),(0,n.Y)(l.$n,{componentId:"lakeflow.pipeline-env-version-nudge.got-it",type:"primary",size:"small",css:{marginLeft:m.spacing.sm},onClick:e=>{v(),e.stopPropagation()},children:(0,n.Y)(u.sA,{id:"TNw0aH",defaultMessage:"Got it"})}),(0,n.Y)(s.Arrow,{})]})]})}},752634:(e,t,r)=>{r.d(t,{f:()=>o});var n=r(610435),a=r(673655),i=r(429608);let s=8,o=({gutter:e=s,...t})=>(0,n.Y)(i.wC,{children:(0,n.Y)(a.A,{gutter:e,...t})})},759838:(e,t,r)=>{r.d(t,{Hi:()=>i,QX:()=>s,xT:()=>o});var n=r(250912),a=r.n(n);function i(e,t="/sql"){var r;if(/^(https?:\/\/|blob:|mailto:)/.test(e))return e;return(r=function(...e){return e.map(e=>a()(e,"/")).join("/")}(t,e)).startsWith("/")?r:`/${r}`}let s=/^(?!.*(\.| |\/)).*/;function o(e,t){if(!e)return"";let r=e.endsWith("/");return e+(t?r?t:`/${t}`:"")}},768622:(e,t,r)=>{r.d(t,{Jq:()=>_,bb:()=>v});var n=r(610435),a=r(956935),i=r(802558),s=r.n(i),o=r(91958),l=r.n(o),u=r(692738),c=r(497895),d=r(194901),f=r(161330),p=r(174541),m=r(574132),g=r(639712);let E={paddingTop:2},h={width:16,flexShrink:0},S={display:"flex"},_=l()((e,t,r)=>(0,a.AH)({...r&&{pointerEvents:"none",color:e.colors.actionDisabledText},...t&&{background:e.colors.actionTertiaryBackgroundHover}}),(e,t,r)=>`${(0,g.H6)(e)}|${t}|${!!r}`),A=l()((e,t)=>(0,a.AH)({marginLeft:e.spacing.sm,fontSize:e.typography.fontSizeBase,fontStyle:"normal",fontWeight:400,cursor:"pointer",overflow:"hidden",wordBreak:"break-word",..."ellipsis"===t&&{textOverflow:"ellipsis",whiteSpace:"nowrap"}}),(e,t)=>`${(0,g.H6)(e)}|${t}`),v=(0,u.forwardRef)(({item:e,index:t,comboboxState:r,textOverflowMode:a="multiline",isDisabled:i,disabledReason:o,hintContent:l,onClick:g,children:v,...T},b)=>{let{selectedItem:y,highlightedIndex:C,getItemProps:I,isOpen:R}=r,O=s()(y,e),M=C===t,{theme:P}=(0,c.wn)(),N=(0,u.useRef)(null);(0,u.useImperativeHandle)(b,()=>N.current);let{onClick:w,...k}=I({item:e,index:t,disabled:i,onMouseUp:e=>{e.stopPropagation(),T.onMouseUp?.(e)},ref:N});return(0,u.useEffect)(()=>{if(R&&C===t&&N.current){let e=N.current.closest("ul");if(!e)return;let t=e.scrollTop,r=e.scrollTop+e.clientHeight,n=N.current.offsetTop,a=N.current.offsetTop+N.current.clientHeight;(n<t||a>r)&&N.current?.scrollIntoView({block:"nearest"})}},[C,t,R,N]),(0,n.FD)("li",{role:"option","aria-selected":O,"aria-disabled":i,onClick:e=>{g?.(e),w?.(e)},css:[(0,p.RB)(P),_(P,M,i)],...k,...T,children:[O?(0,n.Y)(d.A,{css:E}):(0,n.Y)("div",{style:h}),(0,n.FD)("label",{css:A(P,a),children:[i&&o?(0,n.FD)("div",{css:S,children:[(0,n.Y)("div",{children:v}),(0,n.Y)("div",{css:(0,p.eO)(P),children:(0,n.Y)(f.I,{componentId:"typeahead-combobox-menu-item-disabled-reason-info-tooltip",side:"right",content:o})})]}):v,(0,n.Y)(m.y,{disabled:i,children:l})]})]})});v.defaultProps={_type:"TypeaheadComboboxMenuItem"}},775041:(e,t,r)=>{r.d(t,{Jq:()=>E,OI:()=>I,wW:()=>h});var n=r(692738),a=r(342411),i=r(302409),s=r(77240),o=r(581716);let l="18.0",u=["13.3","14.3"],c="16.1",d="16.1",f="16.3.1",p="18.0",m="18.2",g="18.2";function E(e){return e?.match(/(?:\d+\.)+x(?=-)/)?.[0]||""}function h(e,t){return e.localeCompare(t,void 0,{numeric:!0})>=0}function S(e){return e?.includes("FABRIC")}function _(e){return e?.includes("HIVE_METASTORE")}function A(e,t){return e?.includes("ORACLE")||t===o.pu.ORACLE}function v(e,t){return e?.includes("TERADATA")||t===o.pu.TERADATA}function T(e,t){return e?.includes("SFTP")||t===o.pu.SFTP}function b(e,t){return e?.includes("PALANTIR")||t===o.pu.PALANTIR}function y(e,t){return e?.includes("BIGLAKE")||t===o.pu.BIGLAKE}function C(e,t){return e?.includes("GOOGLE_CLOUD_LAKEHOUSE")||t===o.pu.GOOGLE_CLOUD_LAKEHOUSE}function I(){let e=(0,a.tz)(),t=(0,n.useCallback)(({computeResource:e,requiredVersion:t,securableKind:r,connectionType:n})=>{if(function(e){let{clusterId:t,preferInteractiveServerless:r}=e;if(r)return!0;return!!t&&null!==t.toLowerCase().match(/[0-9a-fA-F]{16}/)}(e))return!0;if(e.type===s.ol.CLUSTER){let{sparkVersion:a,accessMode:s}=e;if(!(0,i.QC)({access_mode:s??void 0},!0))return!1;let o=E(a);if(S(r))return h(o,l);if(_(r))return u.some(e=>o.startsWith(e))||h(o,"15.0");if(A(r,n))return h(o,c);else if(v(r,n))return h(o,d);else if(T(r,n))return h(o,f);else if(b(r,n))return h(o,p);else if(y(r,n))return h(o,m);else if(C(r,n))return h(o,g);return h(o,t??"13.1")}if(e.type===s.ol.REDASH_SQL_WAREHOUSE)return"PRO"===e.warehouseType;return!1},[]),r=(0,n.useCallback)(e=>{if(e.type===s.ol.REDASH_SQL_WAREHOUSE)return"PRO"===e.warehouseType&&!0===e.enableDatabricksCompute;return!1},[]),o=(0,n.useCallback)(({isBrickstoreOnlineView:e,dataSource:t})=>e&&t?.status.isReady&&!r(t),[r]),I=(0,n.useCallback)(({isForeignData:e,securableKind:r,dataSource:n})=>e&&n?.status.isReady&&!t({computeResource:n,securableKind:r}),[t]),R=e.formatMessage({id:"FOz8nd",defaultMessage:"Data may be out of date"}),O=e.formatMessage({id:"8rFek8",defaultMessage:"Please use cluster with DBR version 13.1 and above or Pro/Serverless warehouse to refresh the data"}),M=e.formatMessage({id:"Ole8Yw",defaultMessage:"Please use cluster with DBR version 13.3, 14.3, or 15.0 and above or Pro/Serverless warehouse to refresh the data"}),P=(0,n.useCallback)(t=>e.formatMessage({id:"Q5K+Zr",defaultMessage:"Please use cluster with DBR version {minVersion} and above or Pro/Serverless warehouse to refresh the data"},{minVersion:t}),[e]),N=e.formatMessage({id:"PNwB4O",defaultMessage:"Foreign data requires compute. Please use cluster with DBR version 13.1 and above or Pro/Serverless warehouse"}),w=e.formatMessage({id:"GphsgR",defaultMessage:"Please use cluster with DBR version 13.1 and above or Pro/Serverless warehouse"}),k=e.formatMessage({id:"2JadI/",defaultMessage:"Please use cluster with DBR version 13.3, 14.3, or 15.0 and above or Pro/Serverless warehouse"}),L=e.formatMessage({id:"u6wa/l",defaultMessage:"Foreign data requires compute. Please use cluster with DBR version 13.3, 14.3, or 15.0 and above or Pro/Serverless warehouse"}),U=(0,n.useCallback)(t=>e.formatMessage({id:"zVN9+v",defaultMessage:"Foreign data requires compute. Please use cluster with DBR version {minVersion} and above or Pro/Serverless warehouse"},{minVersion:t}),[e]),D=(0,n.useCallback)((e,t)=>{if(S(e))return U(l);if(_(e))return L;if(A(e,t))return U(c);if(v(e,t))return U(d);if(T(e,t))return U(f);else if(b(e,t))return U(p);else if(y(e,t))return U(m);else if(C(e,t))return U(g);return N},[U,N,L]);return{isComputeMeetQueryFedRequirements:t,showUnqualifiedComputeWarning:I,showOnlineViewUnqualifiedComputeWarning:o,ucCacheNonEmptyWarning:R,getUcCacheNonEmptyWarningDescription:(0,n.useCallback)(e=>{if(S(e))return"";if(_(e))return M;if(A(e))return P(c);if(v(e))return P(d);if(T(e))return P(f);else if(b(e))return P(p);else if(y(e))return P(m);else if(C(e))return P(g);return O},[P,O,M]),unqualifiedMessage:w,unqualifiedMessageForHMS:k,getUnqualifiedComputeWarning:D}}},777517:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(610435),a=r(692738),i=r(375214);function s(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 0a.75.75 0 0 1 .75.75V3h5.5a.75.75 0 0 1 .75.75V6h.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75H15v2.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V12H.75a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 .75 6H1V3.75A.75.75 0 0 1 1.75 3h5.5V.75A.75.75 0 0 1 8 0M2.5 4.5v9h11v-9zM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6.25 2.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"})})}let o=(0,a.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:s}));o.displayName="RobotIcon";let l=o},781510:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(610435),a=r(692738),i=r(79128),s=r(694762),o=r(342411),l=r(124235),u=r(947170);let c=({message:e,refresh:t,errorCode:r})=>{let[c,d]=(0,a.useState)(!0),f=()=>window.location.reload(),p=()=>d(!1),m=!1;(0,l.H8)()&&(m=91>(0,l.Z5)());let g=(0,n.FD)("div",{children:[t?(0,n.FD)("div",{children:[(0,n.FD)("p",{children:[(0,n.Y)(o.sA,{id:"KO7d+1",defaultMessage:"Reload the page and try again. If the error persists, contact support."}),r&&[" ",(0,n.Y)(o.sA,{id:"4wbDAR",defaultMessage:"Reference error code: {errorCode}",values:{errorCode:r}},"1")]]}),(0,n.Y)("p",{children:(0,n.Y)(o.sA,{id:"xy+Cnu",defaultMessage:"Details:"})}),(0,n.Y)("p",{children:e})]}):(0,n.Y)(n.FK,{children:e}),(0,l.lT)()&&(0,n.Y)(u._p,{}),m&&(0,n.Y)(u.nE,{})]}),E=[(0,n.Y)(i.$n,{componentId:"codegen_webapp_js_metrics_errormodal.tsx_77",onClick:p,children:(0,n.Y)(o.sA,{id:"vlaNQp",defaultMessage:"Close"})},"close")];return t&&E.push((0,n.Y)(i.$n,{componentId:"codegen_webapp_js_metrics_errormodal.tsx_83",onClick:f,type:"primary",children:(0,n.Y)(o.sA,{id:"gflyaq",defaultMessage:"Reload page"})},"reload")),(0,n.Y)(s.aF,{componentId:"codegen_webapp_js_metrics_errormodal.tsx_111",destroyOnClose:!0,title:(0,n.Y)(o.sA,{id:"aU/6pV",defaultMessage:"Error"}),children:g,visible:c,onOk:f,onCancel:p,footer:E})}},786504:(e,t,r)=>{r.d(t,{Pu:()=>l,gc:()=>s,se:()=>o});var n=r(610435),a=r(692738);class i{data;constructor(e){this.data=e}authorize(e){if(this.data.isLoading)return{isLoading:!0,response:void 0};if(this.data.error)return{isLoading:!1,response:{authorized:!1},error:this.data.error};if("string"==typeof e)return{isLoading:!1,response:this.data.data?.actions[e]};if("evaluate"in e)return e.evaluate(this);return{isLoading:!1,response:this.data.data?.actions[JSON.stringify(e)]}}}let s=(0,a.createContext)({authorize:e=>({isLoading:!0,response:void 0})});function o({children:e,response:t}){return(0,n.Y)(s.Provider,{value:new i(t),children:e})}function l(){return(0,a.useContext)(s)}},787473:(e,t,r)=>{r.d(t,{o:()=>l});var n=r(610435);r(692738);var a=r(497895),i=r(382908),s=r(126927),o=r(342411);function l({href:e,style:t,componentId:r}){let u=(0,o.tz)(),{theme:c}=(0,a.wn)();return(0,n.FD)(i.o.Link,{style:{paddingLeft:c.spacing.xs,fontWeight:c.typography.typographyRegularFontWeight,...t},href:e,target:"_blank",componentId:r??"codegen_web-shared_src_metastore_components_learnmorelink.tsx_22",children:[u.formatMessage({id:"ag6OMp",defaultMessage:"Learn more"}),(0,n.Y)(s.A,{style:{marginLeft:c.spacing.xs,verticalAlign:"text-top"}})]})}},791229:(e,t,r)=>{r.d(t,{U:()=>o,a:()=>s});var n=r(537287),a=r(993533),i=r(521200);let s=e=>{if(!e)return!1;{let{kind:t,enableServerlessCompute:r,enable_serverless_compute:n}=e;if(t===a.ch$.SERVERLESS_PREVIEW||t===a.ch$.SERVERLESS_REPL_VM)return!0;if(void 0!==r)return r;if(void 0!==n)return n}if("attrs"in e){let{kind:t,enableServerlessCompute:r}=e.attrs??{};return t===a.ch$.SERVERLESS_PREVIEW||t===a.ch$.SERVERLESS_REPL_VM||r}if("attributes"in e){let{kind:t,enableServerlessCompute:r}=e.attributes??{};return t===a.ch$.SERVERLESS_PREVIEW||t===a.ch$.SERVERLESS_REPL_VM||r}};function o(e,t){return(0,i.Qb)()&&!!s(e)&&(0,n.cd)(t)}},797246:(e,t,r)=>{r.d(t,{DN:()=>u,Ix:()=>c,Jk:()=>d,OF:()=>o,nX:()=>f,nw:()=>l});var n=r(342411),a=r(641760),i=r(29824),s=r(150924);let o=(0,a.zt)()?(0,n.zR)({id:"oUyUvJ",defaultMessage:"You are only permitted to see metadata for this asset. Request additional permissions from the object's page"}):(0,n.zR)({id:"m+UfjI",defaultMessage:"You are only permitted to see metadata for this asset. Please contact the owner for additional permission"}),l=(0,n.zR)({id:"H1i5CS",defaultMessage:"Online store catalog"}),u={[i.an.CATALOG]:(0,n.zR)({id:"gST/Fz",defaultMessage:"catalog"}),[i.an.DATABASE]:(0,n.zR)({id:"Q2CEcK",defaultMessage:"schema"}),[i.an.TABLE]:(0,n.zR)({id:"MnQokr",defaultMessage:"table"}),[i.an.VIEW]:(0,n.zR)({id:"1/D8JH",defaultMessage:"view"}),[i.an.MATERIALIZED_VIEW]:(0,n.zR)({id:"F9towg",defaultMessage:"materialized view"}),[i.an.STREAMING_TABLE]:(0,n.zR)({id:"c71VXl",defaultMessage:"streaming table"}),[i.an.VOLUME]:(0,n.zR)({id:"upmcHZ",defaultMessage:"volume"}),[i.an.FUNCTION]:(0,n.zR)({id:"aP8Sqb",defaultMessage:"function"}),[i.an.FUNCTION_FEATURE_SPEC]:(0,n.zR)({id:"7qdK7+",defaultMessage:"function feature spec"}),[i.an.REGISTERED_MODEL]:(0,n.zR)({id:"3Y7acL",defaultMessage:"model"}),[i.an.REGISTERED_MODEL_VERSION]:(0,n.zR)({id:"vo02Jv",defaultMessage:"model version"}),[i.an.STORAGE_CREDENTIAL]:(0,n.zR)({id:"XkdeUT",defaultMessage:"storage credential"}),[i.an.CREDENTIAL]:(0,n.zR)({id:"XXi9AE",defaultMessage:"credential"}),[i.an.EXTERNAL_LOCATION]:(0,n.zR)({id:"gpTkYX",defaultMessage:"external location"}),[i.an.INBOUND_SHARED_NOTEBOOK_FILE]:(0,n.zR)({id:"2QTgI/",defaultMessage:"shared notebook file"}),[i.an.CONNECTION]:(0,n.zR)({id:"L+HZOe",defaultMessage:"connection"}),[i.an.SHARE]:(0,n.zR)({id:"HQxjso",defaultMessage:"share"}),[i.an.RECIPIENT]:(0,n.zR)({id:"M7UQAS",defaultMessage:"recipient"}),[i.an.PROVIDER]:(0,n.zR)({id:"PvVChz",defaultMessage:"provider"}),[i.an.METASTORE]:(0,n.zR)({id:"2irW3W",defaultMessage:"metastore"}),[i.an.COLUMN]:(0,n.zR)({id:"fwB/LS",defaultMessage:"column"}),[i.an.VOLUME_FILE]:(0,n.zR)({id:"5Cy++b",defaultMessage:"volume file"}),[i.an.VOLUME_FOLDER]:(0,n.zR)({id:"dOa8bp",defaultMessage:"volume folder"}),[i.an.CLEAN_ROOM]:(0,n.zR)({id:"OZVVYP",defaultMessage:"clean room"}),[i.an.VECTOR_INDEX]:(0,n.zR)({id:"w5dYYn",defaultMessage:"vector search index"}),[i.an.ONLINE_VIEW]:(0,n.zR)({id:"mbZFpH",defaultMessage:"online table"}),[i.an.METRIC_VIEW]:(0,n.zR)({id:"q71GSt",defaultMessage:"metric view"}),[i.an.EXTERNAL_METADATA]:(0,n.zR)({id:"gqNYH3",defaultMessage:"external metadata"}),[i.an.SECRET]:(0,n.zR)({id:"Y8FCE6",defaultMessage:"secret"})},c=(0,n.YK)({[i.an.CATALOG]:{id:"9Q4FT5",defaultMessage:"Catalog"},[i.an.DATABASE]:{id:"FWxl06",defaultMessage:"Schema"},[i.an.TABLE]:{id:"6soA0k",defaultMessage:"Table"},[i.an.VIEW]:{id:"Rw416Q",defaultMessage:"View"},[i.an.MATERIALIZED_VIEW]:{id:"WUAUbP",defaultMessage:"Materialized view"},[i.an.STREAMING_TABLE]:{id:"Zi/bxb",defaultMessage:"Streaming table"},[i.an.VOLUME]:{id:"1dS20z",defaultMessage:"Volume"},[i.an.FUNCTION]:{id:"VI+Sr3",defaultMessage:"Function"},[i.an.FUNCTION_FEATURE_SPEC]:{id:"sqDlGe",defaultMessage:"Function feature spec"},[i.an.REGISTERED_MODEL]:{id:"I01Ad4",defaultMessage:"Model"},[i.an.REGISTERED_MODEL_VERSION]:{id:"LRV0mb",defaultMessage:"Model version"},[i.an.STORAGE_CREDENTIAL]:{id:"bDEJaI",defaultMessage:"Storage credential"},[i.an.CREDENTIAL]:{id:"8m1U4P",defaultMessage:"Credential"},[i.an.EXTERNAL_LOCATION]:{id:"u7bRXy",defaultMessage:"External location"},[i.an.INBOUND_SHARED_NOTEBOOK_FILE]:{id:"pK4mvH",defaultMessage:"Shared notebook file"},[i.an.CONNECTION]:{id:"rR5RDl",defaultMessage:"Connection"},[i.an.SHARE]:{id:"bH4BVe",defaultMessage:"Share"},[i.an.RECIPIENT]:{id:"NfAkZZ",defaultMessage:"Recipient"},[i.an.PROVIDER]:{id:"5G2SGs",defaultMessage:"Provider"},[i.an.METASTORE]:{id:"lTi56H",defaultMessage:"Metastore"},[i.an.COLUMN]:{id:"ZUOQQ7",defaultMessage:"Column"},[i.an.VOLUME_FILE]:{id:"X/RWP6",defaultMessage:"Volume file"},[i.an.VOLUME_FOLDER]:{id:"B0vUyp",defaultMessage:"Volume folder"},[i.an.CLEAN_ROOM]:{id:"nEeSuH",defaultMessage:"Clean Room"},[i.an.VECTOR_INDEX]:{id:"d57N3p",defaultMessage:"Vector search index"},[i.an.ONLINE_VIEW]:{id:"p2r9Bh",defaultMessage:"Synced table"},[i.an.METRIC_VIEW]:{id:"tjJpp8",defaultMessage:"Metric view"},[i.an.EXTERNAL_METADATA]:{id:"RySBlN",defaultMessage:"External metadata"},[i.an.SECRET]:{id:"QLRlWq",defaultMessage:"Secret"}}),d={[i.an.FUNCTION]:(0,n.YK)({[s.x.FUNCTION_PROCEDURE]:{id:"3ramAO",defaultMessage:"Procedure"},[s.x.FUNCTION]:{id:"qCivWh",defaultMessage:"Function"},[s.x.FUNCTION_FEATURE_SPEC]:{id:"NMoL5P",defaultMessage:"Function feature spec"}})},f=(0,n.YK)({[i.an.CATALOG]:{id:"MFr8uI",defaultMessage:"Database"},[i.an.DATABASE]:{id:"8dUzvc",defaultMessage:"Schema"},[i.an.TABLE]:{id:"bqMEiN",defaultMessage:"Table"},[i.an.VIEW]:{id:"bAdJFD",defaultMessage:"View"},[i.an.FUNCTION]:{id:"OMHm4k",defaultMessage:"Function"},[i.an.COLUMN]:{id:"sFXezj",defaultMessage:"Column"}})},802582:(e,t,r)=>{r.d(t,{p:()=>_});var n=r(610435),a=r(956935),i=r(889486),s=r(778529),o=r.n(s),l=r(91958),u=r.n(l),c=r(692738),d=r(429608),f=r(497895),p=r(639712),m=r(863802);let g=["hover","focus"],E=u()(e=>({backgroundColor:"#2F3941",lineHeight:"22px",padding:"4px 8px",boxShadow:e.general.shadowLow,...(0,p.WO)(e)})),h=u()(e=>({zIndex:e.options.zIndexBase+70}),e=>String(e.options.zIndexBase)),S=u()(e=>(0,a.AH)({...(0,d.Cx)(e)})),_=({children:e,title:t,placement:r="top",dataTestId:a,dangerouslySetAntdProps:s,silenceScreenReader:l=!1,useAsLabel:u=!1,..._})=>{let{theme:A}=(0,f.wn)(),v=(0,c.useRef)(null),T=(0,m.Y)("dubois-tooltip-component-"),b=s?.id?s?.id:T;if(!t)return(0,n.Y)(c.Fragment,{children:e});let y=l?{}:{"aria-live":"polite","aria-relevant":"additions"};a&&(y["data-testid"]=a);let C=t&&c.isValidElement(t)?c.cloneElement(t,y):(0,n.Y)("span",{...y,children:t}),I={"aria-hidden":!1},R=e=>{if(!v.current||e.currentTarget.hasAttribute("aria-describedby")||e.currentTarget.hasAttribute("aria-labelledby"))return;b&&(e.currentTarget.setAttribute("aria-live","polite"),u?e.currentTarget.setAttribute("aria-labelledby",b):e.currentTarget.setAttribute("aria-describedby",b))},O=e=>{if(!v||!e.currentTarget.hasAttribute("aria-describedby")&&!e.currentTarget.hasAttribute("aria-labelledby"))return;u?e.currentTarget.removeAttribute("aria-labelledby"):e.currentTarget.removeAttribute("aria-describedby"),e.currentTarget.removeAttribute("aria-live")},M={onMouseEnter:e=>{R(e)},onMouseLeave:e=>{O(e)},onFocus:e=>{R(e)},onBlur:e=>{O(e)}},P=c.isValidElement(e)?c.cloneElement(e,{...I,...M,...e.props}):o()(e)?e:(0,n.Y)("span",{...I,...M,children:e}),{overlayInnerStyle:N,overlayStyle:w,...k}=s||{},L=N?{backgroundColor:"#2F3941",lineHeight:"22px",padding:"4px 8px",boxShadow:A.general.shadowLow,...N,...(0,p.WO)(A)}:E(A),U=w?{zIndex:A.options.zIndexBase+70,...w}:h(A);return(0,n.Y)(d.wC,{children:(0,n.Y)(i.A,{id:b,ref:v,title:C,placement:r,trigger:g,overlayInnerStyle:L,overlayStyle:U,css:S(A.options.enableAnimation),...k,..._,children:P})})}},804723:(e,t,r)=>{r.d(t,{S:()=>l});var n=r(610435),a=r(5421),i=r(497895),s=r(174541);let o=({children:e,...t})=>{let{theme:r}=(0,i.wn)(),{isInsideTypeaheadCombobox:o}=(0,a.T)();if(!o)throw Error("`TypeaheadComboboxFooter` must be used within `TypeaheadComboboxMenu`");return(0,n.Y)("div",{...t,css:(0,s.UA)(r),children:e})};o.defaultProps={_type:"TypeaheadComboboxFooter"};let l=o},807091:(e,t,r)=>{r.d(t,{QW:()=>l,dx:()=>o});var n=r(686560);if(/^(13057|85670)$/.test(r.j))var a=r(641760);if(/^(13057|85670)$/.test(r.j))var i=r(371303);var s=r(889885);function o(){return(0,s.Nm)("enablePipelinesUi",!1,()=>(0,n.d)("enablePipelinesUi",!1))}function l(){return(0,i.sT)("databricks.fe.enablePipelinesUnityCatalogSelection",!1)||(0,i.sT)("databricks.deltapipelines.isUCCatalogEnabled",!1)||(0,a.ei)()}},834343:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(610435),a=r(692738),i=r(375214);function s(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("g",{clipPath:"url(#SearchIcon_svg__a)",children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a7 7 0 1 0 4.39 12.453l2.55 2.55 1.06-1.06-2.55-2.55A7 7 0 0 0 8 1M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0",clipRule:"evenodd"})}),(0,n.Y)("defs",{children:(0,n.Y)("clipPath",{children:(0,n.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let o=(0,a.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:s}));o.displayName="SearchIcon";let l=o},834405:(e,t,r)=>{function n(e,t,r){if(!e)return"";return t.formatDate(e,{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",...r})}function a(e,t,r){if(!e)return"";return t.formatDate(e,{year:"numeric",month:"short",day:"2-digit",...r})}function i(e,t,r){if(!e)return"";return t.formatDate(e,{hour:"2-digit",minute:"2-digit",second:"2-digit",...r})}r.d(t,{Yq:()=>a,fU:()=>i,r6:()=>n}),r(342411)},838524:(e,t,r)=>{r.d(t,{k:()=>a});var n=r(661152);function a(e){return[{query:n.TE,variables:{input:{pipelineId:e}}},{query:n.TE,variables:{input:{pipelineId:e,includePermissionLevels:!0}}}]}},845766:(e,t,r)=>{r.d(t,{SQ:()=>E});var n=r(610435),a=r(956935),i=r(251545),s=r(91958),o=r.n(s),l=r(692738),u=r(532111),c=r(429608),d=r(497895),f=r(639712),p=r(123252);let m=o()(({theme:e,clsPrefix:t})=>(({theme:e,clsPrefix:t})=>{let r=`.${t}-form-item-label`,n=`.${t}-form-item-control-input`,i=`.${t}-form-item-explain`,s=`.${t}-form-item-has-error`;return(0,a.AH)({[r]:{fontWeight:e.typography.typographyBoldFontWeight,lineHeight:e.typography.lineHeightBase,".anticon":{fontSize:e.general.iconFontSize}},[i]:{fontSize:e.typography.fontSizeSm,margin:0,[`&${i}-success`]:{color:e.colors.textValidationSuccess},[`&${i}-warning`]:{color:e.colors.textValidationDanger},[`&${i}-error`]:{color:e.colors.textValidationDanger},[`&${i}-validating`]:{color:e.colors.textSecondary}},[n]:{minHeight:e.general.heightSm},[`${n} input[disabled]`]:{border:"none"},[`&${s} input:focus`]:(0,f.dg)({boxShadow:"none"}),...(0,c.Cx)(e.options.enableAnimation)})})({theme:e,clsPrefix:t}),({theme:e,clsPrefix:t})=>`${(0,f.H6)(e)}|${t}`);function g(e,t){if(!("object"==typeof e&&null!==e&&"validator"in e&&"function"==typeof e.validator))return e;let r=t.wrap(e.validator);if(r===e.validator)return e;return{...e,validator:r}}let E=Object.assign((0,l.forwardRef)(function({dangerouslySetAntdProps:e,children:t,...r},a){let s={...r,layout:r.layout||"vertical",requiredMark:r.requiredMark||!1};return(0,n.Y)(c.wC,{children:(0,n.Y)(i.A,{...(0,p.VG)(),...s,colon:!1,ref:a,...e,children:(0,n.Y)(c.dg,{children:t})})})}),{Item:({dangerouslySetAntdProps:e,children:t,...r})=>{let{theme:a,classNamePrefix:s}=(0,d.wn)(),o=(0,u.HY)(),f=(0,l.useMemo)(()=>(function(e,t){if(!e||0===e.length)return e;let r=!1,n=e.map(e=>{let n=function(e,t){if("function"==typeof e)return r=>g(e(r),t);return g(e,t)}(e,t);return r||=n!==e,n});return r?n:e})(r.rules,o),[o,r.rules]);return(0,n.Y)(c.wC,{children:(0,n.Y)(i.A.Item,{...(0,p.VG)(),...r,rules:f,css:m({theme:a,clsPrefix:s}),...e,children:t})})},List:i.A.List,useForm:i.A.useForm})},848737:(e,t,r)=>{r.d(t,{d:()=>m});var n=r(610435),a=r(692738),i=r(545251),s=r(305404),o=r(994796),l=r(497895),u=r(834343),c=r(407374),d=r(469490),f=r(569546);let p=e=>{if("string"==typeof e||"number"==typeof e)return e.toString();if(a.isValidElement(e)&&e.props.children)return a.Children.toArray(e.props.children).map(p).join(" ");return""},m=(0,a.forwardRef)(({onChange:e,onSearch:t,virtualized:r,children:m,hasWrapper:g,controlledValue:E,setControlledValue:h,rightSearchControls:S,..._},A)=>{let{theme:v}=(0,l.wn)(),{componentId:T}=(0,i.w)(),{isInsideDialogComboboxOptionList:b}=(0,s.r)(),y=`no-result-${(0,f.B)()}`,C=(0,a.useRef)(null);(0,a.useImperativeHandle)(A,()=>C.current);let[I,R]=a.useState();if(!b)throw Error("`DialogComboboxOptionListSearch` must be used within `DialogComboboxOptionList`");let O=m;if(I&&!r&&void 0===E){var M;let e;M=g?m.props.children:m,e=I.toLowerCase(),O=a.Children.map(M,t=>{if(a.isValidElement(t)){let r=t.props.__EMOTION_TYPE_PLEASE_DO_NOT_USE__?.defaultProps._TYPE??t.props._TYPE;if("DialogComboboxOptionListSelectItem"===r||"DialogComboboxOptionListCheckboxItem"===r){let r=p(t).toLowerCase(),n=t.props.value?.toLowerCase()??"";return r.includes(e)||n.includes(e)?t:null}}return t})?.filter(e=>e),g&&(O=a.cloneElement(m,{},O))}let P=(0,a.useRef)(null);(0,a.useEffect)(()=>{if(!P.current)return;let e=(0,o.aV)(P.current);if(e){let t=(0,o.kQ)(e),r=e?.[0];r&&(0,o.ed)(r,t,!1)}},[I]);let N=a.Children.toArray(g?m.props.children:m).some(e=>a.isValidElement(e)),w=g&&O?.props.children?.length||!g&&O?.length;return(0,a.useEffect)(()=>{w||C.current?.input?.setAttribute("aria-activedescendant",y)},[w,y,C.current?.input?.value]),(0,n.FD)(n.FK,{children:[(0,n.Y)("div",{ref:P,css:{padding:`${v.spacing.sm}px ${v.spacing.lg/2}px ${v.spacing.sm}px`,width:"100%",boxSizing:"border-box",position:"sticky",top:0,background:v.colors.backgroundPrimary,zIndex:v.options.zIndexBase+1},children:(0,n.FD)("div",{css:{display:"flex",flexDirection:"row",gap:v.spacing.sm},children:[(0,n.Y)(c.p,{componentId:T?`${T}.search`:"codegen_design_system_src_design_system_dialogcombobox_dialogcomboboxoptionlistsearch.tsx_173",type:"search",name:"search",ref:C,prefix:(0,n.Y)(u.A,{}),placeholder:"Search",onChange:e=>{r||R(e.target.value),h?.(e.target.value),t?.(e.target.value)},onKeyDown:e=>{(e=>{if("ArrowDown"!==e.key&&"ArrowUp"!==e.key&&"Enter"!==e.key)return;e.preventDefault();let t=(0,o.aV)(e.target);if(!t)return;let r=(0,o.kQ)(t);if("ArrowDown"===e.key||"ArrowUp"===e.key)if(r){let n=(0,o.oS)(r,"ArrowDown"===e.key?"next":"previous");if(n)(0,o.ed)(n,r,!1);else if("ArrowDown"===e.key){let e=t[0];(0,o.ed)(e,r,!1)}else if("ArrowUp"===e.key){let e=t[t.length-1];(0,o.ed)(e,r,!1)}}else{let r="ArrowDown"===e.key?t[0]:t[t.length-1];r&&(0,o.ed)(r,void 0,!1)}else"Enter"===e.key&&r&&r.click()})(e),_.onKeyDown?.(e)},value:E??I,shouldPreventFormSubmission:!0,..._}),S]})}),r?m:w&&N?(0,n.Y)("div",{"aria-live":"polite",css:{width:"100%"},children:O}):(0,n.Y)(d.i,{id:y})]})})},850723:(e,t,r)=>{r.d(t,{J:()=>s,O:()=>o});var n=r(160603),a=r(302118);function i(e,t,r,n,a,i,s){try{var o=e[i](s),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(n,a)}let s=["get_metastore_summary"];function o({fallback:e,useQueryOptions:t}={}){return(0,n.useQuery)({queryKey:s,queryFn:()=>{var t;return(t=function*(){return e?yield a.k.getMetastoreSummaryWithFallBack():yield a.k.getMetastoreSummary()},function(){var e=this,r=arguments;return new Promise(function(n,a){var s=t.apply(e,r);function o(e){i(s,n,a,o,l,"next",e)}function l(e){i(s,n,a,o,l,"throw",e)}o(void 0)})})()},...t})}},861403:(e,t,r)=>{r.d(t,{b:()=>p});var n=r(778529),a=r.n(n),i=r(536717),s=r.n(i),o=r(692738),l=r(342411),u=r(595338);let c=/summary:\s*(.*?)(?=,\s*data:)/s;var d=r(482921),f=r(308879);function p(e,t=!0,r=!1){let n=(0,l.tz)(),{isEnabled:i}=(0,f.L)();return(0,o.useMemo)(()=>{let o=e;if(a()(o))return;if((0,u.F0)(e)?o=function(e,t){if(t.response?.status===429)return e.formatMessage({id:"O57kaK",defaultMessage:"Error 429: Too many requests. Please wait a moment and try again. If the issue persists, consider adjusting your request frequency or reaching out to support for assistance."});{let e=t.response?.data;return e?.message??e}}(n,e):e instanceof Error&&(o=function(e,t){if(t&&e.cause&&"string"==typeof e.cause)return e.cause;if("SqlQueryError"!==e.name)return e.message;var r=e.message;let n=r.match(/Details:\s*([^,]*)/);if(n&&n.length>=0)return n[0];return r}(e,r)),s()(o)){var l=o,f=n,p=t,m=i;if(l.includes("Catalog namespace is not supported")||l.includes("Unity catalog is not enabled"))switch((0,d.G)(p,m)){case d.M.ONLY_CLUSTER:return f.formatMessage({id:"Z2EuPV",defaultMessage:"This cluster is incompatible with sample data for Unity Catalog tables. Please use Databricks Runtime 11.1 or higher or contact Databricks for assistance."});case d.M.ONLY_WAREHOUSE:return f.formatMessage({id:"Uvfp1K",defaultMessage:"This warehouse is incompatible with sample data for Unity Catalog tables. Please use Databricks Runtime 11.1 or higher or contact Databricks for assistance."});case d.M.WAREHOUSE_AND_CLUSTER:return f.formatMessage({id:"u0m7LZ",defaultMessage:"This warehouse or cluster is incompatible with sample data for Unity Catalog tables. Please use Databricks Runtime 11.1 or higher or contact Databricks for assistance."});default:return""}let e=l.match(c);if(e)return e[0].trim();return l}return JSON.stringify(o)},[e,n,r,t,i])||""}},862294:(e,t,r)=>{r.d(t,{GF:()=>g,dD:()=>m,zx:()=>p});var n=r(692738),a=r(686560),i=r(141078),s=r(595615),o=r(641760);function l(e,t,r,n,a,i,s){try{var o=e[i](s),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(n,a)}let u=(0,i.J1)`
  fragment SettingsApiErrorFragment on ApiError {
    code
    message
    helpUrl
    traceId
  }
`,c=(0,i.J1)`
  fragment BooleanSettingFragment on SettingspolicySetting {
    isMutable
    ref
    value {
      boolVal {
        value
      }
    }
  }
`,d=(0,i.J1)`
  query DisableLegacyAccessSettingQuery($input: SettingspolicyserviceGetSettingWithoutSettingNameRestRequestInput!)
  @component(name: "DBSQLX.CatalogExplorer") {
    settingspolicyserviceGetSettingRestWithoutSettingName(input: $input) {
      apiError {
        ...SettingsApiErrorFragment
      }
      sessionToken
      setting {
        ...BooleanSettingFragment
      }
    }
  }
  ${u}
  ${c}
`,f=(e,t,r)=>({input:{key:{typeName:"workspace",name:e},setting:{typeName:"disable_legacy_access",name:""},...t&&{sessionToken:t},...r}});function p(e){let t=(()=>{let e=(0,a.d)("currentWorkspaceId",""),[t]=(0,i._l)(d,{variables:f(e),fetchPolicy:"cache-and-network"});return(0,n.useCallback)(()=>({queryKey:["DISABLE_LEGACY_ACCESS_SETTING_QUERY"],queryFn:()=>{var e;return(e=function*(){let{data:e}=yield t();return e},function(){var t=this,r=arguments;return new Promise(function(n,a){var i=e.apply(t,r);function s(e){l(i,n,a,s,o,"next",e)}function o(e){l(i,n,a,s,o,"throw",e)}s(void 0)})})()}}),[t])})();return(0,s.AO)({queryKey:t().queryKey,queryFn:t().queryFn,keepPreviousData:!0,...e,enabled:(0,o.n_)()})}function m(e){return!!(0,o.n_)()&&!!e?.settingspolicyserviceGetSettingRestWithoutSettingName?.setting?.value?.boolVal?.value}function g(){var e;let t,r=(0,o.n_)(),n=(e={skip:!r},t=(0,a.d)("currentWorkspaceId",""),(0,i.IT)(d,{variables:f(t),fetchPolicy:"cache-and-network",skip:e?.skip}));return{data:!!r&&!!n.data?.settingspolicyserviceGetSettingRestWithoutSettingName?.setting?.value?.boolVal?.value,loading:n.loading,error:n.error}}},863081:(e,t,r)=>{r.d(t,{Jc:()=>M,Mn:()=>U,Q1:()=>L,c7:()=>O,oX:()=>k,w$:()=>N,w5:()=>w});var n=r(452137),a=r.n(n),i=r(359419),s=r.n(i),o=r(692738),l=r(342411),u=r(927239),c=r(77240),d=r(441535),f=r(595615),p=r(710343),m=r(55749),g=r(988512),E=r(719256),h=r(103341),S=r(302118),_=r(641760),A=r(660618),v=r(192464),T=r(509901),b=r(55267),y=r(775041),C=r(594390);function I(e,t,r,n,a,i,s){try{var o=e[i](s),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(n,a)}function R(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var i=e.apply(t,r);function s(e){I(i,n,a,s,o,"next",e)}function o(e){I(i,n,a,s,o,"throw",e)}s(void 0)})}}function O(e,t,r){return R(function*(){let n=(0,g.y)(e).generateGetSchemasSql(t),a={limit:r||m.X};if(e.disableSystemQueries)return[];return(yield(0,h.M)({dataSource:e,queryString:n,queryName:"show_databases",options:a})).map(({databaseName:e})=>(0,E.Py)(e)).map(e=>({name:e,full_name:`${t}.${e}`,catalog_name:t}))})()}function M(){let{invalidate:e}=(0,f.rA)();return t=>{e(t?[u.pu,t]:[u.pu])}}function P(){let e=(0,l.tz)(),{isComputeMeetQueryFedRequirements:t,getUnqualifiedComputeWarning:r}=(0,y.OI)();return(0,o.useCallback)(({catalog:n,isForeignData:i,securableKind:s,dataSource:o,rowLimit:l,includeBrowse:d,debugString:f,provisioningInfo:m,isCurrentCatalogUCSamples:g,isPostgres:E=!1})=>{let h=!!(!(0,_.jN)({catalog:n})||i),T="CATALOG_MANAGED_POSTGRESQL"===s&&m?.state==="PROVISIONING",b=h&&!!o?.status?.isReady;return{queryKey:[u.pu,n,b&&(0,p.pl)(o),!0===d,g,E?(0,p.ud)(o):""],queryFn:()=>R(function*(){if(a()(void 0!==n,"'catalog' must be set"),E&&o?.type===c.ol.DATABASE_INSTANCE)return(0,v.Os)(n,o);if(!h||g&&n===A.lx)return(yield S.k.getDatabases(n,d)).schemas||[];if(T)throw new U("Schemas are not available while database catalog is provisioning");if(o?.status.isReady){if(i&&!t({computeResource:o,securableKind:s}))throw new p.jo(o,r(s));return O(o,n,l)}if(!o)throw new p.Lx(o,`Data source is required to fetch schemas from ${n} catalog`);throw new p.Lx(o,e.formatMessage({id:"ljpxWr",defaultMessage:"Listing schemas requires an active compute resource"}))})()}},[r,e,t])}function N(e,t){let r=P(),n=(0,d.W)("databricks.fe.uc.enableBackupFetchForeignData",!1),[a]=(0,b.w)({fetchArgs:[{args:e,useQueryOptions:{...t,enabled:!!n&&t?.enabled}}],getQueryObject:r,checkQualifiedResponse:e=>e?.length>0,reconcileKey:"name"}),i=(0,f.AO)({...r(e),...t,enabled:!n&&t?.enabled});return n?a:i}function w(e){let t=(0,d.W)("databricks.fe.uc.enableBackupFetchForeignData",!1),r=P(),n=(0,b.w)({fetchArgs:e.map(({args:e,options:r})=>({args:e,useQueryOptions:{...r,enabled:!!t&&r?.enabled}})),getQueryObject:r,checkQualifiedResponse:e=>e?.length>0,reconcileKey:"name"}),a=(0,C.V)({queries:e.map(({args:e,options:n})=>({...n,...r(e),enabled:!t&&n?.enabled}))});return t?n:a}function k({schemasRequest:e,catalog:t,authzAction:r,doAuthCheck:n}){let a=n?e?.data?.reduce((e,n)=>(e[`${n.name}`]=r(`${t}.${n.name}`),e),{}):{},i=(0,T.Yf)([`catalog-${t}-schemas`],{actions:a},{enabled:n&&!s()(a),refetchOnWindowFocus:!1});if(!n||i.isError)return{isLoading:!1,schemas:[]};if(e?.data&&(s()(a)||i.data))return{isLoading:!1,schemas:(e.data??[]).filter(e=>i?.data?.actions[`${e.name}`]?.authorized??!1)};return{isLoading:e.isLoading||i.isLoading,schemas:[]}}function L(){return(0,f.Ox)({queryFn:P})}class U extends Error{}},869580:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(610435),a=r(735919);let i={alert(e,t,r,i){let s=e;return t&&(console.warn("HTML strings are no longer supported."),s=(0,n.Y)("div",{dangerouslySetInnerHTML:{__html:e}})),a.k.alert({body:s,buttonText:r,callback:i})},confirm(e){let t=e.message;if(e.messageHTML&&(console.warn("HTML strings are no longer supported."),t=(0,n.Y)("div",{dangerouslySetInnerHTML:{__html:e.messageHTML}})),!1===e.showCancel)return a.k.alert({title:e.title,body:t,buttonText:e.confirmButton,callback:e.confirm,onCancel:e.cancel});return a.k.confirm({title:e.title,body:t,okText:e.confirmButton,cancelText:e.cancelButton,onOk:e.confirm,onCancel:e.cancel})},prompt:e=>a.k.prompt({title:e.message,okText:e.confirmButton,cancelText:e.cancelButton,onOk:e.confirm,onCancel:e.cancel,defaultValue:e.defaultValue,validate:e.validate})}},907046:(e,t,r)=>{r.d(t,{n:()=>i});var n=r(610435),a=r(939578);let i=e=>{let{name:t,children:r,...i}=e;return(0,n.FD)(n.FK,{children:[(0,n.Y)(a.y,{...i,children:t}),r]})}},927239:(e,t,r)=>{r.d(t,{Fj:()=>l,OS:()=>n,U_:()=>o,Xq:()=>d,Zl:()=>u,a:()=>c,c_:()=>a,ie:()=>f,pu:()=>s,xQ:()=>i});let n="data_explorer_tables",a="data_explorer_table_details",i="metadata_catalogs",s="metadata_databases",o="data_explorer_volumes",l="volume_files",u="all_volume_files",c=["list_connections"],d="get_connection",f="user_credentials"},934858:(e,t,r)=>{r.d(t,{$W:()=>f,Ow:()=>p,XP:()=>d,Xd:()=>g,Xh:()=>c,_d:()=>m,ep:()=>E});var n=r(610435);r(139259);var a=r(915862),i=r.n(a);r(692738);var s=r(26971),o=r(777517),l=r(465082),u=r(229386);function c(e){return e.reduce((e,t)=>{let r=(0,u.gX)(t)?{name:t.groupName,kind:"group"}:(0,u.A6)(t)?{name:t.servicePrincipalName,kind:"serviceprincipal",displayName:t.displayName}:{name:t.userName,kind:"user",displayName:t.displayName};return[...e,...t.allPermissions.map(e=>({subject:r,permission:e}))]},[])}function d(e,t){let r=[];return e.forEach(e=>{let n=(0,u.gX)(e)?{name:e.groupName,kind:"group"}:(0,u.A6)(e)?{name:e.servicePrincipalName,kind:"serviceprincipal",displayName:e.displayName}:{name:e.userName,kind:"user",displayName:e.displayName},a=[],i=[],s=new Map;if(t.forEach((e,t)=>{s.set(e.permissionLevel,t)}),e.allPermissions.forEach(e=>{e.inherited?i.push(e):a.push(e)}),a.length>0&&0===i.length)r.push({subject:n,permission:a[0]});else{let o=0,l=0,u=i.length>0&&0===a.length;e.allPermissions.forEach((e,t)=>{let r=s.get(e.permissionLevel);r>o&&(o=r,l=t)}),r.push({subject:n,permission:{permissionLevel:e.allPermissions[l].permissionLevel,inherited:u,inheritedFromObjects:[]},permissionLevels:t.slice(o)})}}),r}function f(e){let{permission:{permissionLevel:t},subject:{kind:r,name:n}}=e;switch(r){case"group":return{groupName:n,permissionLevel:t};case"user":return{userName:n,permissionLevel:t};case"serviceprincipal":return{servicePrincipalName:n,permissionLevel:t};default:throw Error(`Unknown subject kind ${r}`)}}function p(e,t){switch(e){case"CAN_ATTACH_TO":return t.formatMessage({id:"vjuZq/",defaultMessage:"Can Attach To"});case"CAN_CREATE_APP":return t.formatMessage({id:"TDBxFQ",defaultMessage:"Can Create App"});case"CAN_EDIT":return t.formatMessage({id:"Lg7PRA",defaultMessage:"Can Edit"});case"CAN_MANAGE":return t.formatMessage({id:"fFJrOa",defaultMessage:"Can Manage"});case"CAN_QUERY":return t.formatMessage({id:"fvsFnS",defaultMessage:"Can Query"});case"CAN_READ":return t.formatMessage({id:"zofAD/",defaultMessage:"Can Read"});case"CAN_RESTART":return t.formatMessage({id:"46XEms",defaultMessage:"Can Restart"});case"CAN_USE":return t.formatMessage({id:"2CuuGP",defaultMessage:"Can Use"});case"CAN_RUN":return t.formatMessage({id:"3gBDEy",defaultMessage:"Can Run"});case"IS_OWNER":return t.formatMessage({id:"DFsGfJ",defaultMessage:"Is Owner"});case"UNSPECIFIED":return"Unspecified";default:return i()(e.toLowerCase())}}function m(e){if("group"===e)return(0,n.Y)(s.A,{name:e});if("serviceprincipal"===e)return(0,n.Y)(o.A,{name:e});return(0,n.Y)(l.A,{name:e})}function g(e,t,r,n){if("group"===e){let e=t||r,a={accountUsers:n.formatMessage({id:"0pBn8k",defaultMessage:"All account users"}),allUsers:n.formatMessage({id:"VzinD6",defaultMessage:"All workspace users"})};if("users"===e||"all workspace users"===e)return[a.allUsers,""];if("account users"===e||"all account users"===e)return[a.accountUsers,""];return[e,""]}if(t&&r!==t)return[t,r??""];return[r??"",""]}function E(e,t){return e.name===t.name&&e.kind===t.kind}},936743:(e,t,r)=>{r.d(t,{G:()=>o,l:()=>s});var n=r(610435),a=r(692738),i=r(62947);let s=e=>{switch(e.kind){case"group":return{group_name:e.name,group_id:e.id};case"user":return{user_name:e.name,user_id:e.id};case"serviceprincipal":return{service_principal_display_name:e.displayName,service_principal_id:e.id,service_principal_name:e.applicationId}}},o=({onUpdate:e,onUpdateSubject:t,showAccountLevelEntities:r,...o})=>{let l=(0,a.useCallback)(r=>{let n;Array.isArray(r)?n=r.map(e=>s(e)):void 0!==r&&(n=s(r)),e&&e(n),t&&t(r)},[e,t]);return(0,n.Y)(i.T,{enableAccountGroups:!!r,enableAccountServicePrincipals:!!r,enableAccountUsers:!!r,enableWorkspaceGroups:!r,enableWorkspaceServicePrincipals:!r,enableWorkspaceUsers:!r,onUpdate:e||t?l:void 0,...o})}},939578:(e,t,r)=>{r.d(t,{y:()=>s});var n=r(610435),a=r(545251),i=r(605107);let s=({children:e,...t})=>{let{isInsideDialogCombobox:r}=(0,a.w)();if(!r)throw Error("`DialogComboboxSectionHeader` must be used within `DialogCombobox`");return(0,n.Y)(i.X,{...t,children:e})}},947170:(e,t,r)=>{r.d(t,{Sj:()=>q,_p:()=>U,by:()=>z,nE:()=>D,su:()=>W,uz:()=>B,xW:()=>K});var n=r(610435),a=r(621058),i=r.n(a),s=r(802558),o=r.n(s);if(r(692738),/^(13057|85670)$/.test(r.j))var l=r(339518);var u=r(342411);if(/^(13057|85670)$/.test(r.j))var c=r(582503);if(/^(13057|85670)$/.test(r.j))var d=r(836049);if(/^(13057|85670)$/.test(r.j))var f=r(441535);var p=r(185728);if(/^(13057|85670)$/.test(r.j))var m=r(549761);if(/^(13057|85670)$/.test(r.j))var g=r(886100);if(/^(13057|85670)$/.test(r.j))var E=r(22191);if(/^(13057|85670)$/.test(r.j))var h=r(181105);if(/^(13057|85670)$/.test(r.j))var S=r(278983);if(/^(13057|85670)$/.test(r.j))var _=r(297105);if(/^(13057|85670)$/.test(r.j))var A=r(644178);if(/^(13057|85670)$/.test(r.j))var v=r(354809);if(/^(13057|85670)$/.test(r.j))var T=r(900603);if(/^(13057|85670)$/.test(r.j))var b=r(913975);if(/^(13057|85670)$/.test(r.j))var y=r(124235);var C=r(172826);if(/^(13057|85670)$/.test(r.j))var I=r(367190);var R=r(781510);if(/^(13057|85670)$/.test(r.j))var O=r(984022);var M=r(516362);if(/^(13057|85670)$/.test(r.j))var P=r(869580);var N=r(620839),w=r(67656);if(/^(13057|85670)$/.test(r.j))var k=r(162210);if(/^(13057|85670)$/.test(r.j))var L=r(976988);let U=()=>(0,n.Y)("span",{children:(0,n.Y)(u.sA,{id:"+SM0TC",defaultMessage:"We no longer support Internet Explorer. Please refer to our <link>list of supported browsers</link>.",values:{link:e=>(0,n.Y)("a",{target:"_blank",rel:"noopener noreferrer",href:w.R.getDbGuideUrl(N.A.SUPPORTED_BROWSERS_URL),children:e})}})}),D=()=>(0,n.Y)("span",{children:(0,n.Y)(u.sA,{id:"oTy1WK",defaultMessage:"You are using an old version of Chrome. Upgrading your browser to the latest version may fix this error. Please refer to our <link>list of supported browsers</link>.",values:{link:e=>(0,n.Y)("a",{target:"_blank",rel:"noopener noreferrer",href:w.R.getDbGuideUrl(N.A.SUPPORTED_BROWSERS_URL),children:e})}})}),x=!1;function W(e,t,r){let a=(0,p.r)({id:"webapp.metrics.ErrorUtils.duboisWindowOops"}),i="error-modal-container",s=document.getElementsByClassName(i),o=s.length>0?s[0]:null;o||((o=document.createElement("div")).classList.add(i),document.body.appendChild(o)),(0,C.r8)((0,n.Y)(a,{children:(0,n.Y)(u.Mm,{children:(0,n.Y)(M.Y,{children:(0,n.Y)(R.A,{message:e,refresh:t,errorCode:r},Number(x))})})}),o,{legacySync:!0}),x=!x}function F(e,t,r){let a=!1;(0,y.H8)()&&(a=107>(0,y.Z5)());let i=(0,n.FD)("div",{children:[(0,n.Y)("div",{children:e}),t&&(0,n.FD)("div",{children:[(0,n.Y)("br",{}),(0,n.FD)("p",{children:[(0,n.Y)(u.sA,{id:"KO7d+1",defaultMessage:"Reload the page and try again. If the error persists, contact support."}),r&&[" ",(0,n.Y)(u.sA,{id:"4wbDAR",defaultMessage:"Reference error code: {errorCode}",values:{errorCode:r}},"1")]]})]}),(0,y.lT)()&&(0,n.Y)(l.F,{componentId:"codegen_webapp_js_metrics_errorutils.tsx_159",message:(0,n.Y)(U,{}),type:"info"}),a&&(0,n.Y)(l.F,{componentId:"codegen_webapp_js_metrics_errorutils.tsx_160",message:(0,n.Y)(D,{}),type:"info"})]});t?P.A.confirm({message:i,confirmButton:(0,n.Y)(u.sA,{id:"gflyaq",defaultMessage:"Reload page"}),cancelButton:(0,n.Y)(u.sA,{id:"vlaNQp",defaultMessage:"Close"}),confirm(){window.location.reload()}}):P.A.alert(i,!1,(0,n.Y)(u.sA,{id:"vlaNQp",defaultMessage:"Close"}))}function Y({message:e,error:t,source:r,lineno:n,colno:a,uiDeployable:i=m.Yz}){let s,o,l;if(t instanceof Error)s=t.toString(),o=null===t.stack?"error is an Error but error.stack is not a string":t.stack;else if(null===t)s="error is null",o="error is null so error.stack is not available";else if(void 0===t)s="error is undefined",o="error is undefined so error.stack is not available";else if("string"==typeof t)s=t,o="error is a string so error.stack is not available";else if($(t))s=g.iT.jsonStringifyWithJavaScriptTypes(t),o=t.stack;else{if(!G(t))return void g.iT.sev2(E.Es.UiInfra,"windowOnError: unexpected error type",{error:t});s=g.iT.jsonStringifyWithJavaScriptTypes(t),o="error is an object without a stack property so error.stack is not available"}t instanceof h.ZR&&(l=t.isUserError);let u=(0,m.r8)(e,i);(0,S.y)("uncaughtJsException",{commitHash:(0,O.Dt)()[i.uiVersionId],errorBoundaryId:null,esComponent:i.esComponent,known:u,source:m.gf.WindowOnerror,uiDeployable:i.uiDeployableId,isSupportedBrowser:(0,c.hl)(o),isUserError:l,...(0,_.v)()},g.iT.jsonStringifyWithJavaScriptTypes({WARNING:"!!! YOU WILL NEED TO FOLLOW http://go/runbook-UnknownJsException TO DE-MINIFY THIS ERROR !!!",colno:a,known:u,lineno:n,message:e,source:r,error:s,stack:o,rawError:t,systemVersion:3})),t?(g.iT.log(E.Es.UiInfra,"[windowOnError] - about to logErrorToLumberjack"),(0,m.G6)(t,A.jM.WindowOnerror,v.X.WINDOW_ON_ERROR,"window_on_error_complete")):g.iT.log(E.Es.UiInfra,"[windowOnError] - error falsy")}function G(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function $(e){if(!G(e))return!1;return"stack"in e&&"string"==typeof e.stack}function H(e){if("string"==typeof e){let t=e.replace(/\s/g,"");return"{isTrusted:false}"===t||"{isTrusted:true}"===t||'{"isTrusted":false}'===t||'{"isTrusted":true}'===t}return o()(e,{isTrusted:!1})||o()(e,{isTrusted:!0})}function B(e,t,r,n,a){g.iT.sev2IfThrows(E.Es.UiInfra,"windowOnError",()=>{if(H(e)||H(a))return;let s="string"==typeof e&&"string"==typeof t&&"number"==typeof r&&"number"==typeof n&&"function"==typeof t.includes,o=g.iT.isError(a)||"string"==typeof a||G(a)||null==a;if(!s||!o){let i={message:e,source:t,lineno:r,colno:n,error:a,typeofMessage:typeof e,typeofSource:typeof t,typeofLineno:typeof r,typeofColno:typeof n,typeofError:typeof a,errorKeys:G(a)?Object.keys(a):"error not an object",errorIsArray:Array.isArray(a)};g.iT.sev2(E.Es.UiInfra,"windowOnError: parameter is of unexpected type",i);return}if(arguments.length>5)return void g.iT.sev2(E.Es.UiInfra,"windowOnError: called with too many arguments");let l=i()(".tb-status").hasClass("error"),u=t.includes(document.location?.origin??""),c=m.Yz,d=null;if($(a)&&(d=a.stack),null!==d){let e=m.yJ.find(e=>d.includes(e.stackTraceIdentifier));void 0!==e&&(c=e.uiDeployable)}!l&&u&&(0,m.jD)(e,c)&&(g.iT.getResult(()=>{F(e,!0),i()(".tb-status").addClass("error"),i()(".tb-status-msg-error").html("Internal error: <a href=#>report</a>"),i()(".tb-status-msg-error a").on("click",t=>{t&&t.preventDefault(),F(e,!0)})}),!(0,m.$0)(e,d,null,a)&&(0,m.lT)(t)&&(console.error(e,a),Y({error:a,message:e,lineno:r,colno:n,uiDeployable:c,source:t})))},!0)}let V=!1;function q(e=!0){V=e}function z(e,t,r,n,a,s={showErrorToUser:!0}){let o,l,u,c,d,f=s.showErrorToUser&&(l=i()(".tb-status").hasClass("error"),u=a&&a.isMlflowUiError,c=!t||0===t.indexOf(document.location?.origin??""),d="ERROR_BOUNDARY_SOURCE"===t,!l&&!u&&!d&&c),p=!0,g=e,E=i()(".tb-status").hasClass("error"),h=s.jsExceptionService??[{pathnamePattern:/^\/sql($|\/.*)/,hashPattern:/.*/,service:"dbsql"},{pathnamePattern:/^\/external-shares($|\/.*)/,hashPattern:/^\/#job.*/,service:"dbsql"},{pathnamePattern:/.*/,hashPattern:/^#?job.*/,service:"jaws"}].find(({pathnamePattern:e,hashPattern:t})=>e.test(window.location.pathname)&&t.test(window.location.hash))?.service??"unknown";if("string"==typeof t&&t.indexOf("omfmacehcmpchjchafjnpidjbhmednfp")>=0)p=!1,g="The chrome extension 'dbNav' has crashed.",f=!1;else if("string"==typeof e&&e.indexOf("ResizeObserver")>=0||"string"==typeof e&&"Script error."===e||"string"==typeof e&&"Uncaught TypeError: Cannot redefine property: googletag"===e)p=!0,f=!1;else if("string"==typeof a?.stack&&1===a.stack.split("\n").length)return;if(!E&&(f&&(o=function(e){e&&e.preventDefault(),W(g,!0)},i()(".tb-status").addClass("error"),i()(".tb-status-msg-error").html("Internal error: <a href=#>report</a>"),i()(".tb-status-msg-error a").on("click",o)),p)){(0,T.v)(e,a,{jsExceptionSource:t,jsExceptionLineno:r,jsExceptionColno:n,jsExceptionShown:f,jsExceptionService:h,mfeId:void 0});let i=null;$(a)&&(i=a.stack),V&&"string"==typeof e&&(0,m.jD)(e,m.Yz)&&!(0,m.$0)(e,i,null,a)&&(void 0===t||(0,m.lT)(t))&&Y({error:a,source:t,colno:n,lineno:r,message:e})}o&&o()}function j(e){var t;let r=e.reason;if(null==r||""===r||Array.isArray(r)&&0===r.length||o()(r,{isTrusted:!1})||o()(r,{isTrusted:!0}))return;(0,T.v)(r,void 0,{mfeId:void 0,jsExceptionRejectedPromise:!0}),(0,f.W)("databricks.fe.infra.reportUnhandledPromiseRejection",!1)&&(t=r,g.iT.sev2IfThrows(E.Es.UiInfra,"unhandledPromiseRejection",()=>{let e,r;if("string"==typeof t)e=t,r=null;else if(t instanceof Error)e=t.message,r=t;else{if(!G(t))return void g.iT.sev2(E.Es.UiInfra,"Experimental: unhandledPromiseRejection: unexpected rejection type",t);e="Unhandled promise rejection with an object-like rejection type",r=t}if((0,b.z)()||!(0,m.jD)(e,m.Yz))return;!(0,m.$0)(e,null,null,r)&&(0,m.lT)(document.location?.origin??"")&&Y({message:e,error:r})},!0))}function K(e){if(window.addEventListener("unhandledrejection",j),(0,L.yz)()||(0,d.v)()||(0,L.R9)())return;(0,I.P)(),window.console&&!0!==e.get("consoleDebug")&&(window.console.log=()=>{},window.console.info=()=>{},window.console.debug=()=>{},window.console.warn=()=>{});let t=console.warn;console.warn=(...e)=>{let r=Error().stack;if(e[0]&&"function"==typeof e[0].match&&e[0].match("JQMIGRATE")){let t=k.BrowserUtils.getMeasurementTags({eventType:"jqueryMigrateWarning",jqueryMigrateMessage:e[0]});(0,S.y)("clientsideEvent",t,r)}t(...e)}}},975137:(e,t,r)=>{r.d(t,{i:()=>u});var n=r(412836),a=r(927239),i=r(595615),s=r(660618),o=r(733337);function l(e,t,r,n,a,i,s){try{var o=e[i](s),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(n,a)}function u(){let{invalidate:e}=(0,i.rA)();return(0,n.n_)(e=>{var t;return(t=function*(){return yield(0,o.nr)(`${s.bY}/schemas`,{method:"POST",body:JSON.stringify({...e,storage_root:e.storage_root?encodeURI(e.storage_root):void 0})})},function(){var e=this,r=arguments;return new Promise(function(n,a){var i=t.apply(e,r);function s(e){l(i,n,a,s,o,"next",e)}function o(e){l(i,n,a,s,o,"throw",e)}s(void 0)})})()},{onSuccess:()=>{e([a.pu])}})}},978679:(e,t,r)=>{function n(e){return Object.entries(e)}function a(e){return t=>Object.values(e).includes(t)}function i(e,t){return t in e}r.d(t,{PD:()=>a,WP:()=>n,tf:()=>i,zz:()=>s});let s=e=>!!e},984741:(e,t,r)=>{r.d(t,{Aj:()=>c,DT:()=>o,Eq:()=>s,e0:()=>f,to:()=>l,zf:()=>u});var n=r(250912),a=r.n(n),i=r(173564);let s=e=>/^(https?:\/\/|blob:|mailto:)/.test(e);function o(){return i.env.BASE_PATH??""}function l(e,t=o()){var r;if(s(e))return e;return(r=function(...e){return e.map(e=>a()(e,"/")).join("/")}(t,"static",e)).startsWith("/")?r:`/${r}`}function u(e,t){let r=t.endsWith("/")?t:t+"/";return e.startsWith(r)}let c=(e,t,r="/")=>{if(!t||!e.startsWith(t))return e;let n=e.slice(t.length).replace(RegExp(`^${r}+`),""),a=e.split(r),i=a.length>0?a[a.length-1]:"";return n&&n!==i?n:null},d="/Workspace";function f(e){if(e&&e.startsWith("/")&&!e.startsWith(`${d}/`)&&!e.startsWith("/Repos/"))return`${d}${e}`;return e}},995198:(e,t,r)=>{r.d(t,{g:()=>o});var n=r(261515),a=r(589830),i=r(993533),s=r(521200);function o({inputData:e,libraries:t,rootPath:r}){let l=(0,a.N)()&&e.catalog?{serverless:!0,photon:!0}:{serverless:!1,photon:!1},u=(0,s.v)()?{parentPath:r}:{},c=(0,n.r$)()&&e.catalog?{environment:{environmentVersion:(0,n.Gt)()}}:{};return{variables:{input:{spec:{continuous:!1,development:!1,...l,name:e.name,channel:e.channel??i.NpR.CURRENT,catalog:e.catalog,schema:e.schema,storage:e.storage,target:e.target,libraries:t,rootPath:r,...u,...c}}}}}},998258:(e,t,r)=>{r.d(t,{Gl:()=>f,d5:()=>m,oN:()=>p,s8:()=>d,te:()=>g});var n=r(610435),a=r(79570),i=r(497895),s=r(382908),o=r(445929),l=r(342411),u=r(598296),c=r(797246);function d({children:e,tooltip:t,authorization:r,disabled:i}){let s=g({disabled:i,overrideDisabledTitle:t?.overrideDisabledTitle,defaultTitle:t?.defaultTitle,authorization:r,authzFailureHint:t?.authzFailureHint});if(!s)return(0,n.Y)(n.FK,{children:e});return(0,n.Y)(a.m,{componentId:"authzTooltip",content:s,maxWidth:500,...t,children:e})}function f({authorization:e,hint:t}){let r=(0,l.tz)(),{theme:a}=(0,i.wn)(),u=e?.response?.unmet_conditions||[];if(e?.error)return(0,n.FD)(s.o.Text,{style:{color:a.colors.red400},children:[(0,n.Y)(o.A,{})," ",r.formatMessage({id:"jkpBdL",defaultMessage:"Permission check error:"})," ",e?.error]});if(u.length>0)return(0,n.FD)("div",{css:{display:"flex",flexDirection:"column"},children:[u.map((e,t)=>(0,n.Y)("span",{children:m(r,e)},`unmet-${t}`)),!!t&&(0,n.Y)("span",{children:t})]});return null}function p(e,t){let r=e.formatMessage({id:"jkpBdL",defaultMessage:"Permission check error:"});return`${r} ${t}`}function m(e,t){"CATALOG"===t.securable_type&&(t.securable_type=u.an.CATALOG);let r=t.securable_type;if(t.securable_type){let n=c.DN[t.securable_type];n&&(r=e.formatMessage(n))}switch(t.code){case u.yh.NOT_OWNER:if(t.securable_type)return e.formatMessage({id:"53QS3i",defaultMessage:"Requires ownership of {obType} ‘{name}’"},{obType:r,name:t.securable_full_name});return e.formatMessage({id:"mmc4fF",defaultMessage:"Requires account admin permissions"});case u.yh.REQUIRES_ANY_PRIVILEGE:if(t.securable_type)return e.formatMessage({id:"YFPGhm",defaultMessage:"Requires any permission on {obType} ‘{name}’"},{obType:r,name:t.securable_full_name});return e.formatMessage({id:"g3YHkW",defaultMessage:"Requires any account-level permission"});case u.yh.REQUIRES_ANY_NON_BROWSE_PRIVILEGE:if(t.securable_type)return e.formatMessage({id:"idfXaI",defaultMessage:"Requires any non-BROWSE permission on {obType} ‘{name}’"},{obType:r,name:t.securable_full_name});return e.formatMessage({id:"gxhMir",defaultMessage:"Requires any non-BROWSE permission on this account"});case u.yh.REQUIRES_PRIVILEGES:if(t.securable_type)return e.formatMessage({id:"TCUAHW",defaultMessage:"Requires {numPermissions, plural, one {permission} other {permissions}} {permissions} on {obType} ‘{name}’"},{obType:r,name:t.securable_full_name,numPermissions:t.requires?.length||1,permissions:t.requires?.join(", ")});return e.formatMessage({id:"kOMPWb",defaultMessage:"Requires {numPermissions, plural, one {permission} other {permissions}} {permissions} on this account"},{numPermissions:t.requires?.length||1,permissions:t.requires?.join(", ")});case u.yh.NOT_UPDATABLE_IN_CURRENT_WORKSPACE:return e.formatMessage({id:"RxQ8eY",defaultMessage:"Catalog is designated as read only in this workspace"});default:return e.formatMessage({id:"nk1HDP",defaultMessage:"Authorization failure: {code}"},{code:t.code})}}function g({disabled:e,overrideDisabledTitle:t,defaultTitle:r,authorization:a,authzFailureHint:i}){if(e&&t)return t;if(e)return;if(a?.error)return;if(a?.response?.unmet_conditions)return(0,n.Y)(f,{authorization:a,hint:i});return r}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/43518.ff4d559960.chunk.js.map