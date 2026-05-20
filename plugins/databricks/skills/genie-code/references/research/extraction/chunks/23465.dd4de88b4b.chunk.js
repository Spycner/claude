"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[23465],{26446:(e,t,r)=>{r.d(t,{HT:()=>d,M8:()=>u,Pf:()=>s,bp:()=>l,gb:()=>a,iN:()=>c,pP:()=>n,xB:()=>p});let a=1e3,n={enableAccountGroups:!1,enableAccountServicePrincipals:!1,enableAccountUsers:!1,enableWorkspaceGroups:!1,enableWorkspaceServicePrincipals:!1,enableWorkspaceUsers:!1},i=/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,o={admins:"Admins",users:"All workspace users","account users":"All account users"},s=e=>{if(!e)return e;return o[e]??e},l=e=>{let t=new Map;return e.forEach(e=>{let r=d(e)||e.name;t.has(r)||t.set(r,[]),t.get(r)?.push(e)}),t},c=e=>{switch(e.kind){case"user":return e.fullName;case"serviceprincipal":return e.name;case"group":return e.displayName;default:return""}},d=e=>{switch(e.kind){case"user":case"group":return e.name||"";case"serviceprincipal":return e.applicationId||"";default:return""}},u=({uniqueName:e,id:t,kind:r,displayName:a})=>{switch(r){case"user":return{id:t||"",optionId:`user.${t}`,kind:r,name:e||"",fullName:a||"",title:""};case"serviceprincipal":return{id:t||"",optionId:`serviceprincipal.${t}`,kind:r,name:a||"",applicationId:e||"",title:""};case"group":return{id:t||"",optionId:`group.${t}`,kind:r,name:e||"",displayName:s(e||""),title:""};default:return}};function p(e){return e?i.test(e)?"serviceprincipal":"user":void 0}},210556:(e,t,r)=>{r.d(t,{f:()=>o});var a=r(610435),n=r(906169),i=r(429608);let o=({dangerouslySetAntdProps:e,...t})=>(0,a.Y)(i.wC,{children:(0,a.Y)(n.A,{...t,...e})})},285678:(e,t,r)=>{r.d(t,{EI:()=>s,PF:()=>l,i4:()=>i});var a=r(141078);let n=(0,a.J1)`
  mutation DefaultDestinationMutation(
    $scope: RequestforaccessDefaultDestinationScope
    $defaultStatus: RequestforaccessDefaultDestinationStatus
  ) @component(name: "LakehouseCollaboration.RequestForAccess") {
    requestforaccessUpdateDefaultDestinationStatus(input: { scope: $scope, defaultStatus: $defaultStatus }) {
      overallStatus
      metastoreStatus
      workspaceStatus
      apiError {
        code
        message
      }
    }
  }
`;function i(){return(0,a.n_)(n,{refetchQueries:[o]})}let o=(0,a.J1)`
  query DefaultDestinationQuery @component(name: "LakehouseCollaboration.RequestForAccess") {
    requestforaccessGetDefaultDestinationStatus(input: {}) {
      overallStatus
      metastoreStatus
      workspaceStatus
      apiError {
        code
        message
      }
    }
  }
`;function s(e){return e?.requestforaccessGetDefaultDestinationStatus?.workspaceStatus}function l(e){return(0,a.IT)(o,{...e})}},465082:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a3.25 3.25 0 1 0 0 6.5A3.25 3.25 0 0 0 8 1M6.25 4.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M8 9a8.74 8.74 0 0 0-6.836 3.287.75.75 0 0 0-.164.469v1.494c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75v-1.494a.75.75 0 0 0-.164-.469A8.74 8.74 0 0 0 8 9m-5.5 4.5v-.474A7.23 7.23 0 0 1 8 10.5c2.2 0 4.17.978 5.5 2.526v.474z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="UserIcon";let l=s},546568:(e,t,r)=>{r.r(t),r.d(t,{MetastoreDetails:()=>ei,RouteComponent:()=>eo});var a=r(610435),n=r(692738),i=r(497895),o=r(295169),s=r(382908),l=r(126927),c=r(342411),d=r(786504),u=r(649934),p=r(419374),f=r(441535),m=r(850723),g=r(641760),h=r(672628),y=r(488655),v=r(465946),b=r(79128),_=r(128572),A=r(483588),I=r(598296),x=r(285678),M=r(102575),w=r(839977);function S({className:e,children:t}){let{theme:r}=(0,i.wn)();return(0,a.Y)("table",{className:e,css:{border:`1px solid ${r.colors.border}`,borderCollapse:"collapse"},children:(0,a.Y)("tbody",{children:t})})}function k({data:e}){let t=(0,c.tz)(),{theme:r}=(0,i.wn)(),n=(0,d.Pu)().authorize(u.E.SetMetastorePermission()).response?.authorized??!1,{data:o}=(0,x.PF)(),l=o?.requestforaccessGetDefaultDestinationStatus?.metastoreStatus===A.scG.ENABLED,{destinations:p}=(0,M.w)({type:A.$FW.METASTORE,fullName:e.name??"",skip:!l}),f=(p?.length??0)>0,{setRequestAccessDestinationModal:m,showSetRequestAccessDestinationModal:g}=(0,w.l)({objectName:e.name??"",objectType:I.an.METASTORE});return(0,a.FD)(a.FK,{children:[(0,a.Y)(S.Item,{label:t.formatMessage({id:"K+LQFQ",defaultMessage:"Access requests"}),children:(0,a.FD)("div",{"data-testid":"metastore-access-requests-status",css:{display:"inline-flex",alignItems:"center",gap:r.spacing.xs},children:[l?(0,a.FD)(a.FK,{children:[(0,a.Y)(s.o.Text,{children:t.formatMessage({id:"JjnuHH",defaultMessage:"Enabled"})}),!f&&(0,a.Y)(v.v,{componentId:"governance_metastore_access_requests_no_recipient_tag",color:"lemon",children:t.formatMessage({id:"xQDFcX",defaultMessage:"No recipient set"})})]}):(0,a.Y)(v.v,{componentId:"governance_metastore_access_requests_disabled_tag",color:"coral",children:t.formatMessage({id:"peHPbJ",defaultMessage:"Disabled"})}),n&&(0,a.Y)(b.$n,{componentId:"governance_metastore_access_requests_edit_button",size:"small",icon:(0,a.Y)(_.A,{}),onClick:g,"aria-label":t.formatMessage({id:"RM2Nu3",defaultMessage:"Edit access requests configuration"})})]})}),m]})}S.Item=function({label:e,className:t,children:r}){let{theme:n}=(0,i.wn)();return(0,a.FD)("tr",{"data-testid":`descriptions-key-${e}`,className:t,children:[(0,a.Y)("th",{css:{fontWeight:n.typography.typographyBoldFontWeight,backgroundColor:n.colors.backgroundSecondary,border:`1px solid ${n.colors.borderDecorative}`,padding:`${n.spacing.sm}px ${n.spacing.md}px`,verticalAlign:"top",textAlign:"left"},children:e}),(0,a.Y)("td",{css:{border:`1px solid ${n.colors.border}`,padding:`${n.spacing.sm}px ${n.spacing.md}px`},children:r})]})};var Y=r(79570),$=r(819524);function E(){return(0,a.Y)(Y.m,{componentId:"metastore_external_data_access_label_tooltip",disableHoverableContent:!1,content:(0,a.Y)(c.sA,{id:"pqZ6vm",defaultMessage:"Grant users the ability to utilize external tools to access cloud storage secured by Unity Catalog. <link>Learn more.</link>",values:{link:e=>(0,a.Y)(s.o.Link,{componentId:"metastore_external_data_access_label_tooltip_learn_more_link",href:$.Ay.UC_ACCESS_OPEN_API,rel:"noopener noreferrer",target:"_blank",children:e})}}),children:(0,a.Y)("span",{children:(0,a.Y)(c.sA,{id:"Ui206g",defaultMessage:"External data access"})})})}var P=r(339518),C=r(12414),T=r(944552),D=r(929117),F=r(595338),O=r(711489),R=r(160603),G=r(733337),z=r(660618);function q(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}let N="external_data_access_toggle";function L(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}function U(e){var t;return(t=function*({metastoreId:e,enabled:t}){return(yield(0,G.nr)(`${z.bY}/metastores/${e}`,{method:"PATCH",body:{external_access_enabled:t}})).external_access_enabled},function(){var e=this,r=arguments;return new Promise(function(a,n){var i=t.apply(e,r);function o(e){L(i,a,n,o,s,"next",e)}function s(e){L(i,a,n,o,s,"throw",e)}o(void 0)})}).apply(this,arguments)}var H=r(282399);function B(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}let Q=O.Uz.OperationStatusEnum_OperationStatus;function j({data:e}){var t;let r,[s,l]=(0,n.useState)(null),d=(0,n.useRef)(!0),u=(0,H.t)(),{theme:p}=(0,i.wn)(),f=function({metastoreId:e,options:t}){return(0,R.useQuery)([N,e],()=>{var t;return(t=function*(){return(yield(0,G.nr)(`${z.bY}/metastores/${e}`,{method:"GET"})).external_access_enabled},function(){var e=this,r=arguments;return new Promise(function(a,n){var i=t.apply(e,r);function o(e){q(i,a,n,o,s,"next",e)}function s(e){q(i,a,n,o,s,"throw",e)}o(void 0)})})()},t)}({metastoreId:e.metastore_id,options:{onSettled(){d.current=!1},enabled:d.current}}),{mutateAsync:m,error:g,isLoading:h}=(t=e.metastore_id,r=(0,R.useQueryClient)(),(0,R.useMutation)(U,{onSuccess:()=>{r.invalidateQueries({queryKey:[N,t]})}})),y=s??f.data??!1;if(f.isLoading)return(0,a.Y)(o.x,{style:{width:75,height:20},"data-testid":"external-data-access-toggle-loading",loadingDescription:D.z.METASTORE_EXTERNAL_DATA_ACCESS_TOGGLE});if(f.error){let e=(0,F.F0)(f.error)?f.error.response?.data?.message||f.error.message:"";return(0,a.Y)(P.F,{type:"warning",componentId:"metastore_external_data_access_toggle_error",message:(0,a.Y)(c.sA,{id:"M1BPRs",defaultMessage:"Failed to fetch external data access status."}),description:e})}if(g){let e=(0,F.F0)(g)?g.response?.data?.message||g.message:"";return(0,a.Y)(P.F,{type:"warning",componentId:"metastore_external_data_access_toggle_error",message:(0,a.Y)(c.sA,{id:"Qdj4qU",defaultMessage:"Failed to update external data access status."}),description:e})}return(0,a.Y)("div",{css:{display:"flex",alignItems:"center"},children:f.isLoading?(0,a.Y)(C.y,{css:{marginRight:p.spacing.sm}}):(0,a.Y)(Y.m,{componentId:"metastore_external_data_access_toggle_tooltip",content:(0,a.Y)(c.sA,{id:"84lEgp",defaultMessage:"Grant users the ability to utilize external tools to access cloud storage secured by Unity Catalog."}),children:(0,a.FD)("div",{css:{display:"flex",alignItems:"center"},children:[(0,a.Y)(T.d,{componentId:"metastore_external_data_access_toggle_switch",checked:y,disabled:h,onClick:function(){var t;return(t=function*(){u("update_metastore_external_data_access",{operation_status:Q.ATTEMPTED});let t=!y;l(t);try{yield m({metastoreId:e.metastore_id,enabled:t}),u("update_metastore_external_data_access",{operation_status:Q.SUCCEEDED})}catch(e){u("update_metastore_external_data_access",{operation_status:Q.FAILED}),l(null)}},function(){var e=this,r=arguments;return new Promise(function(a,n){var i=t.apply(e,r);function o(e){B(i,a,n,o,s,"next",e)}function s(e){B(i,a,n,o,s,"throw",e)}o(void 0)})})()}}),(0,a.Y)("label",{css:{marginBottom:0},children:y?(0,a.Y)(c.sA,{id:"tYgpcq",defaultMessage:"Enabled"}):(0,a.Y)(c.sA,{id:"jEb/lc",defaultMessage:"Disabled"})})]})})})}var W=r(190645);let V=()=>(0,a.FD)(a.FK,{children:[(0,a.Y)(c.sA,{id:"6gZ0Qp",defaultMessage:"Predictive optimization"}),(0,a.Y)(Y.m,{componentId:"metastore_predictive_optimization_label_tooltip",disableHoverableContent:!1,content:(0,a.Y)(c.sA,{id:"8i6pjh",defaultMessage:"Databricks intelligently optimizes your Unity Catalog managed tables for performance and cost effectiveness. <link>Learn more.</link>",values:{link:e=>(0,a.Y)(s.o.Link,{componentId:"metastore_predictive_optimization_label_tooltip_learn_more_link",href:$.Ay.PREDICTIVE_OPTIMIZATION,rel:"noopener noreferrer",target:"_blank",children:e})}}),children:(0,a.Y)("div",{css:{display:"inline-block"},children:(0,a.Y)(W.W,{})})})]});var J=r(956935);function K(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}let Z="predictive_optimization_state";function X(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}let ee=({metastoreId:e,enable:t})=>{var r;return(r=function*(){return yield(0,G.nr)("/ajax-api/2.0/predictive-optimization/service",{method:"PATCH",body:{metastore_id:e,enable:t}})},function(){var e=this,t=arguments;return new Promise(function(a,n){var i=r.apply(e,t);function o(e){X(i,a,n,o,s,"next",e)}function s(e){X(i,a,n,o,s,"throw",e)}o(void 0)})})()};function et(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}let er=O.Uz.OperationStatusEnum_OperationStatus,ea=({data:e})=>{var t;let r,{theme:n}=(0,i.wn)(),s=(0,H.t)(),{data:l,isLoading:d,error:u,refetch:p}=function({metastoreId:e}){return(0,R.useQuery)([Z,e],()=>{var t;return(t=function*(){return!!(yield(0,G.nr)(`${z.bY}/metastores/${e}`,{method:"GET"})).auto_maintenance_user_id},function(){var e=this,r=arguments;return new Promise(function(a,n){var i=t.apply(e,r);function o(e){K(i,a,n,o,s,"next",e)}function s(e){K(i,a,n,o,s,"throw",e)}o(void 0)})})()})}({metastoreId:e.metastore_id}),{mutateAsync:f,error:m,isLoading:g}=(t=e.metastore_id,r=(0,R.useQueryClient)(),(0,R.useMutation)(ee,{onSuccess:()=>{r.invalidateQueries({queryKey:[Z,t]})}}));if(d)return(0,a.Y)(o.x,{style:{width:75,height:20},loadingDescription:D.z.METASTORE_PREDICTIVE_OPTIMIZATION_TOGGLE});if(u)return(0,a.Y)(P.F,{componentId:"metastore_predictive_optimization_toggle_error",closable:!1,message:(0,a.Y)(c.sA,{id:"g36rFi",defaultMessage:"Error loading predictive optimization status."}),description:String(u),type:"warning"});if(m)return(0,a.Y)(P.F,{componentId:"metastore_predictive_optimization_toggle_error",closable:!1,message:(0,a.Y)(c.sA,{id:"qP0nrV",defaultMessage:"Error updating predictive optimization status."}),description:String(m),type:"warning"});return(0,a.FD)("div",{css:(0,J.AH)({display:"flex",alignItems:"center"}),children:[g?(0,a.Y)(C.y,{css:(0,J.AH)({marginRight:n.spacing.sm})}):(0,a.Y)(T.d,{componentId:"metastore_predictive_optimization_toggle",checked:l,disabled:g,onClick:t=>{var r;(r=function*(){s("update_metastore_predictive_optimization",{operation_status:er.ATTEMPTED});try{yield f({metastoreId:e.metastore_id,enable:t}).then(()=>p()),s("update_metastore_predictive_optimization",{operation_status:er.SUCCEEDED})}catch(e){s("update_metastore_predictive_optimization",{operation_status:er.FAILED})}},function(){var e=this,t=arguments;return new Promise(function(a,n){var i=r.apply(e,t);function o(e){et(i,a,n,o,s,"next",e)}function s(e){et(i,a,n,o,s,"throw",e)}o(void 0)})})()}}),(0,a.Y)("label",{css:(0,J.AH)({marginBottom:"0px"}),children:l?(0,a.Y)(c.sA,{id:"L5aGzZ",defaultMessage:"Enabled"}):(0,a.Y)(c.sA,{id:"ReuNKm",defaultMessage:"Disabled"})})]})};var en=r(584024);let ei=()=>{let e=(0,c.tz)(),{theme:t}=(0,i.wn)(),{data:r,isLoading:n}=(0,m.O)(),{response:v,isLoading:b}=(0,d.Pu)().authorize(u.E.GetMetastore()),_=(0,en.jm)(r?.cloud),A=(0,en.wf)(r?.delta_sharing_recipient_token_lifetime_in_seconds||0),I=p.p.domainSuffix(),x=(0,y.Zp)(),M=(0,f.W)("databricks.fe.lakestore.mac_ui",!1)&&v?.authorized&&void 0!==r,w=(0,f.W)("databricks.unitycatalog.enableExternalAccessForMetastore",!1)&&v?.authorized&&void 0!==r,Y=(0,g.ph)()&&void 0!==r;return(0,a.Y)(a.FK,{children:n||b?(0,a.Y)(o.x,{"data-testid":"metastore-details-loading"}):(0,a.FD)(a.FK,{children:[(0,a.Y)(s.o.Paragraph,{color:"secondary",children:e.formatMessage({id:"VcnJLC",defaultMessage:"Account administrators can go to <linkText>Account console</linkText> to edit metastore details."},{linkText:e=>(0,a.Y)(s.o.Link,{componentId:"metastore_details_link_to_account_admin_console",href:`https://accounts.${I}`,children:e})})}),(0,a.FD)(S,{children:[(0,a.Y)(S.Item,{label:e.formatMessage({id:"EKb6xd",defaultMessage:"Metastore ID"}),children:r?.metastore_id}),_&&(0,a.FD)(S.Item,{label:e.formatMessage({id:"A9PW8y",defaultMessage:"Region"}),children:[(0,a.Y)("img",{css:{marginRight:t.spacing.xs},src:_,alt:e.formatMessage({id:"RByKMc",defaultMessage:"Metastore cloud tag"})}),r?.region]}),r?.storage_root_credential_id&&(0,a.Y)(S.Item,{label:e.formatMessage({id:"ViiBsc",defaultMessage:"Storage root credential ID"}),children:r.storage_root_credential_id}),r?.storage_root_credential_name&&(0,a.Y)(S.Item,{label:e.formatMessage({id:"O3HCkX",defaultMessage:"Storage root credential name"}),children:(0,a.FD)(a.FK,{children:[r.storage_root_credential_name,(0,a.Y)(l.A,{"aria-label":e.formatMessage({id:"TxBk/m",defaultMessage:"Link to storage credential"}),style:{color:t.colors.actionPrimaryBackgroundDefault,marginLeft:t.spacing.xs},onClick:()=>x(`/explore/credentials/${r.storage_root_credential_name}`)})]})}),(0,a.Y)(S.Item,{label:e.formatMessage({id:"rjf/gs",defaultMessage:"External delta sharing"}),children:(0,a.Y)("div",{"data-testid":"metastore-external-delta-sharing",children:r?.delta_sharing_scope===h.Z.INTERNAL_AND_EXTERNAL?e.formatMessage({id:"WABXcO",defaultMessage:"Enabled"}):e.formatMessage({id:"gxUvaf",defaultMessage:"Disabled"})})}),r?.delta_sharing_recipient_token_lifetime_in_seconds!==void 0&&(0,a.Y)(S.Item,{label:e.formatMessage({id:"f16iZM",defaultMessage:"External recipient token lifetime"}),children:0===r.delta_sharing_recipient_token_lifetime_in_seconds?e.formatMessage({id:"IFFwvO",defaultMessage:"Forever"}):e.formatMessage({id:"ZzHYCb",defaultMessage:"{lifetime} seconds ({duration})"},{lifetime:r.delta_sharing_recipient_token_lifetime_in_seconds,duration:A})}),r?.delta_sharing_organization_name&&(0,a.Y)(S.Item,{label:e.formatMessage({id:"mqQYex",defaultMessage:"Delta sharing organization name"}),children:r.delta_sharing_organization_name}),M&&(0,a.Y)(S.Item,{label:(0,a.Y)(V,{}),children:(0,a.Y)(ea,{data:r})}),w&&(0,a.Y)(S.Item,{label:(0,a.Y)(E,{}),children:(0,a.Y)(j,{data:r})}),Y&&(0,a.Y)(k,{data:r})]})]})})};function eo(){return(0,a.Y)(ei,{})}},569089:(e,t,r)=>{r.d(t,{A:()=>y});var a=r(657709),n=r(513384),i=r(378003),o=r(324399),s=r(692738),l=r(783772),c=r.n(l),d=r(513266),u=r(706090),p=r(340644),f=r(887716),m=r(337502),g=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)0>t.indexOf(a[n])&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};(0,p.P)("top","middle","bottom","stretch"),(0,p.P)("start","end","center","space-around","space-between");var h=s.forwardRef(function(e,t){var r,l,p=e.prefixCls,h=e.justify,y=e.align,v=e.className,b=e.style,_=e.children,A=e.gutter,I=void 0===A?0:A,x=e.wrap,M=g(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),w=s.useContext(d.QO),S=w.getPrefixCls,k=w.direction,Y=s.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),$=(0,o.A)(Y,2),E=$[0],P=$[1],C=(0,m.A)(),T=s.useRef(I);s.useEffect(function(){var e=f.Ay.subscribe(function(e){var t=T.current||0;(!Array.isArray(t)&&"object"===(0,i.A)(t)||Array.isArray(t)&&("object"===(0,i.A)(t[0])||"object"===(0,i.A)(t[1])))&&P(e)});return function(){return f.Ay.unsubscribe(e)}},[]);var D=S("row",p),F=(r=[0,0],(Array.isArray(I)?I:[I,0]).forEach(function(e,t){if("object"===(0,i.A)(e))for(var a=0;a<f.ye.length;a++){var n=f.ye[a];if(E[n]&&void 0!==e[n]){r[t]=e[n];break}}else r[t]=e||0}),r),O=c()(D,(l={},(0,n.A)(l,"".concat(D,"-no-wrap"),!1===x),(0,n.A)(l,"".concat(D,"-").concat(h),h),(0,n.A)(l,"".concat(D,"-").concat(y),y),(0,n.A)(l,"".concat(D,"-rtl"),"rtl"===k),l),v),R={},G=F[0]>0?-(F[0]/2):void 0,z=F[1]>0?-(F[1]/2):void 0;G&&(R.marginLeft=G,R.marginRight=G),C?R.rowGap=(0,o.A)(F,2)[1]:z&&(R.marginTop=z,R.marginBottom=z);var q=s.useMemo(function(){return{gutter:F,wrap:x,supportFlexGap:C}},[F,x,C]);return s.createElement(u.A.Provider,{value:q},s.createElement("div",(0,a.A)({},M,{className:O,style:(0,a.A)((0,a.A)({},R),b),ref:t}),_))});h.displayName="Row";let y=h},574132:(e,t,r)=>{r.d(t,{y:()=>i});var a=r(610435);r(692738);var n=r(497895);let i=({disabled:e,children:t})=>{let{theme:r}=(0,n.wn)();return(0,a.Y)("div",{css:{color:r.colors.textSecondary,fontSize:r.typography.fontSizeSm,...e&&{color:r.colors.actionDisabledText}},children:t})}},595615:(e,t,r)=>{r.d(t,{AO:()=>u,Ox:()=>f,RK:()=>g,ic:()=>h,rA:()=>m,uV:()=>p});var a=r(692738),n=r(160603),i=r(441535),o=r(412836),s=r(425373);function l(e,t,r,a,n,i,o){try{var s=e[i](o),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(a,n)}(0,n.setLogger)({log:console.log,warn:console.warn,error:()=>{}});let c={retry:!1,refetchOnWindowFocus:!1,staleTime:3e5},d=new Map;function u(e){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),r={...c,...e,enabled:e?.enabled!==!1&&t},a={...c,...e,enabled:e?.enabled!==!1&&!t};d.set(JSON.stringify(e.queryKey),e.queryKey);let s=(0,o.IT)(r),l=(0,n.useQuery)(a);return t?s:l}function p({queries:e}){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),r=e.map(e=>({...c,...e,enabled:e?.enabled!==!1&&t})),a=e.map(e=>({...c,...e,enabled:e?.enabled!==!1&&!t}));e.forEach(e=>d.set(JSON.stringify(e.queryKey),e.queryKey));let o=(0,s.E)({queries:r}),l=(0,n.useQueries)(a);return t?o:l}function f({queryFn:e}){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),r=(0,n.useQueryClient)(),s=e();return(0,a.useCallback)((e,a={})=>t?o.aH.getActiveValue().fetchQuery({...a,...s(e)},c):r.fetchQuery({...a,...s(e)},c),[s,t,r])}function m(){let[e,t]=(0,a.useState)(0),r=(0,n.useQueryClient)(),s=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1);return{invalidate:(e,a)=>{var n;return(n=function*(){t(e=>e+1);try{if(e)yield s?o.aH.getActiveValue().invalidateQueries(e):r.invalidateQueries(e),d.delete(JSON.stringify(e));else{let e=Array.from(d.values()).filter(e=>{if(!Array.isArray(e))return!1;if(!a)return!0;return e.some(e=>"string"==typeof e&&e.includes(a))}).filter(e=>void 0!==e).map(e=>s?o.aH.getActiveValue().invalidateQueries(e):r.invalidateQueries(e));yield Promise.allSettled(e),d=new Map}}finally{t(e=>e-1)}},function(){var e=this,t=arguments;return new Promise(function(r,a){var i=n.apply(e,t);function o(e){l(i,r,a,o,s,"next",e)}function s(e){l(i,r,a,o,s,"throw",e)}o(void 0)})})()},isLoadingInvalidation:e>0}}function g(e){for(let t of e){let e=t.isIdle??void 0;if(!h({isIdle:e,status:t.status??void 0,fetchStatus:t.fetchStatus??void 0}))return!1}return!0}function h(e){let t=(0,i.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),r=e.isIdle??!1;if(t)return"fetchStatus"in e&&"loading"===e.status&&"idle"===e.fetchStatus;return r}},599349:(e,t,r)=>{r.d(t,{M:()=>p});var a=r(610435),n=r(956935),i=r(692738),o=r(5421),s=r(79128),l=r(497895),c=r(369291),d=r(174541),u=r(639712);let p=(0,i.forwardRef)(({children:e,...t},r)=>{let{theme:i}=(0,l.wn)(),{isInsideTypeaheadCombobox:p,componentId:f}=(0,o.T)();if(!p)throw Error("`TypeaheadComboboxAddButton` must be used within `TypeaheadCombobox`");return(0,a.Y)(s.$n,{...t,componentId:`${f}.add_option`,type:"tertiary",onClick:e=>{e.stopPropagation(),t.onClick?.(e)},onMouseUp:e=>{e.stopPropagation(),t.onMouseUp?.(e)},className:"combobox-footer-add-button",css:{...(0,d.RB)(i),...(0,n.AH)((0,u.dg)({width:"100%",padding:0,display:"flex",alignItems:"center",borderRadius:0,"&:focus":{background:i.colors.actionTertiaryBackgroundHover,outline:"none"}}))},icon:(0,a.Y)(c.A,{}),ref:r,children:e})})},655841:(e,t,r)=>{r.d(t,{GX:()=>u,HA:()=>i,Ij:()=>d,U8:()=>n,_:()=>o,e:()=>l,fq:()=>p,n$:()=>c,r4:()=>s});var a=r(141078);let n=(0,a.J1)`
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
`,i=(0,a.J1)`
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
  ${n}
`,o=(0,a.J1)`
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
  ${n}
`,s=(0,a.J1)`
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
  ${n}
`,l=(0,a.J1)`
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
  ${n}
`,c=(0,a.J1)`
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
  ${n}
`,d=(0,a.J1)`
  mutation GetOrCreateIdpUser($input: AclmanagerIdentityapiGetOrCreateUserRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateUser(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,u=(0,a.J1)`
  mutation GetOrCreateIdpGroup($input: AclmanagerIdentityapiGetOrCreateGroupRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateGroup(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,p=(0,a.J1)`
  mutation GetOrCreateIdpServicePrincipal($input: AclmanagerIdentityapiGetOrCreateServicePrincipalRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateServicePrincipal(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`},673655:(e,t,r)=>{r.d(t,{A:()=>a});let a=r(569089).A},681134:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(141078);let n=(0,a.J1)`
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
`;function i(){return(0,a.n_)(n)}},691069:(e,t,r)=>{r.d(t,{C:()=>c});var a=r(610435);r(692738);var n=r(497895),i=r(465082),o=r(26971),s=r(777517),l=r(342411);let c=({kind:e,disabled:t,style:r})=>{let{theme:c}=(0,n.wn)(),d=(0,l.tz)(),u={alignItems:"center",background:t?void 0:c.colors.backgroundSecondary,borderRadius:30,color:t?c.colors.actionDisabledText:c.colors.textSecondary,display:"flex",fontSize:20,height:30,justifyContent:"center",width:30};switch(e){case"user":return(0,a.Y)(i.A,{title:d.formatMessage({id:"9vv8Gs",defaultMessage:"User"}),css:r||u});case"group":return(0,a.Y)(o.A,{title:d.formatMessage({id:"Qzw3C/",defaultMessage:"Group"}),css:r||u});case"serviceprincipal":return(0,a.Y)(s.A,{title:d.formatMessage({id:"QrVB43",defaultMessage:"Service Principal"}),css:r||u});default:return null}}},706090:(e,t,r)=>{r.d(t,{A:()=>a});let a=(0,r(692738).createContext)({})},712975:(e,t,r)=>{r.d(t,{A:()=>m});var a=r(513384),n=r(657709),i=r(378003),o=r(692738),s=r(783772),l=r.n(s),c=r(706090),d=r(513266),u=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)0>t.indexOf(a[n])&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},p=["xs","sm","md","lg","xl","xxl"],f=o.forwardRef(function(e,t){var r,s=o.useContext(d.QO),f=s.getPrefixCls,m=s.direction,g=o.useContext(c.A),h=g.gutter,y=g.wrap,v=g.supportFlexGap,b=e.prefixCls,_=e.span,A=e.order,I=e.offset,x=e.push,M=e.pull,w=e.className,S=e.children,k=e.flex,Y=e.style,$=u(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),E=f("col",b),P={};p.forEach(function(t){var r,o={},s=e[t];"number"==typeof s?o.span=s:"object"===(0,i.A)(s)&&(o=s||{}),delete $[t],P=(0,n.A)((0,n.A)({},P),(r={},(0,a.A)(r,"".concat(E,"-").concat(t,"-").concat(o.span),void 0!==o.span),(0,a.A)(r,"".concat(E,"-").concat(t,"-order-").concat(o.order),o.order||0===o.order),(0,a.A)(r,"".concat(E,"-").concat(t,"-offset-").concat(o.offset),o.offset||0===o.offset),(0,a.A)(r,"".concat(E,"-").concat(t,"-push-").concat(o.push),o.push||0===o.push),(0,a.A)(r,"".concat(E,"-").concat(t,"-pull-").concat(o.pull),o.pull||0===o.pull),(0,a.A)(r,"".concat(E,"-rtl"),"rtl"===m),r))});var C=l()(E,(r={},(0,a.A)(r,"".concat(E,"-").concat(_),void 0!==_),(0,a.A)(r,"".concat(E,"-order-").concat(A),A),(0,a.A)(r,"".concat(E,"-offset-").concat(I),I),(0,a.A)(r,"".concat(E,"-push-").concat(x),x),(0,a.A)(r,"".concat(E,"-pull-").concat(M),M),r),w,P),T={};if(h&&h[0]>0){var D=h[0]/2;T.paddingLeft=D,T.paddingRight=D}if(h&&h[1]>0&&!v){var F=h[1]/2;T.paddingTop=F,T.paddingBottom=F}return k&&(T.flex=function(e){if("number"==typeof e)return"".concat(e," ").concat(e," auto");if(/^\d+(\.\d+)?(px|em|rem|%)$/.test(e))return"0 0 ".concat(e);return e}(k),"auto"!==k||!1!==y||T.minWidth||(T.minWidth=0)),o.createElement("div",(0,n.A)({},$,{style:(0,n.A)((0,n.A)({},T),Y),className:C,ref:t}),S)});f.displayName="Col";let m=f},752634:(e,t,r)=>{r.d(t,{f:()=>s});var a=r(610435),n=r(673655),i=r(429608);let o=8,s=({gutter:e=o,...t})=>(0,a.Y)(i.wC,{children:(0,a.Y)(n.A,{gutter:e,...t})})},768622:(e,t,r)=>{r.d(t,{Jq:()=>b,bb:()=>A});var a=r(610435),n=r(956935),i=r(802558),o=r.n(i),s=r(91958),l=r.n(s),c=r(692738),d=r(497895),u=r(194901),p=r(161330),f=r(174541),m=r(574132),g=r(639712);let h={paddingTop:2},y={width:16,flexShrink:0},v={display:"flex"},b=l()((e,t,r)=>(0,n.AH)({...r&&{pointerEvents:"none",color:e.colors.actionDisabledText},...t&&{background:e.colors.actionTertiaryBackgroundHover}}),(e,t,r)=>`${(0,g.H6)(e)}|${t}|${!!r}`),_=l()((e,t)=>(0,n.AH)({marginLeft:e.spacing.sm,fontSize:e.typography.fontSizeBase,fontStyle:"normal",fontWeight:400,cursor:"pointer",overflow:"hidden",wordBreak:"break-word",..."ellipsis"===t&&{textOverflow:"ellipsis",whiteSpace:"nowrap"}}),(e,t)=>`${(0,g.H6)(e)}|${t}`),A=(0,c.forwardRef)(({item:e,index:t,comboboxState:r,textOverflowMode:n="multiline",isDisabled:i,disabledReason:s,hintContent:l,onClick:g,children:A,...I},x)=>{let{selectedItem:M,highlightedIndex:w,getItemProps:S,isOpen:k}=r,Y=o()(M,e),$=w===t,{theme:E}=(0,d.wn)(),P=(0,c.useRef)(null);(0,c.useImperativeHandle)(x,()=>P.current);let{onClick:C,...T}=S({item:e,index:t,disabled:i,onMouseUp:e=>{e.stopPropagation(),I.onMouseUp?.(e)},ref:P});return(0,c.useEffect)(()=>{if(k&&w===t&&P.current){let e=P.current.closest("ul");if(!e)return;let t=e.scrollTop,r=e.scrollTop+e.clientHeight,a=P.current.offsetTop,n=P.current.offsetTop+P.current.clientHeight;(a<t||n>r)&&P.current?.scrollIntoView({block:"nearest"})}},[w,t,k,P]),(0,a.FD)("li",{role:"option","aria-selected":Y,"aria-disabled":i,onClick:e=>{g?.(e),C?.(e)},css:[(0,f.RB)(E),b(E,$,i)],...T,...I,children:[Y?(0,a.Y)(u.A,{css:h}):(0,a.Y)("div",{style:y}),(0,a.FD)("label",{css:_(E,n),children:[i&&s?(0,a.FD)("div",{css:v,children:[(0,a.Y)("div",{children:A}),(0,a.Y)("div",{css:(0,f.eO)(E),children:(0,a.Y)(p.I,{componentId:"typeahead-combobox-menu-item-disabled-reason-info-tooltip",side:"right",content:s})})]}):A,(0,a.Y)(m.y,{disabled:i,children:l})]})]})});A.defaultProps={_type:"TypeaheadComboboxMenuItem"}},777517:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(610435),n=r(692738),i=r(375214);function o(e){return(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,a.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 0a.75.75 0 0 1 .75.75V3h5.5a.75.75 0 0 1 .75.75V6h.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75H15v2.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V12H.75a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 .75 6H1V3.75A.75.75 0 0 1 1.75 3h5.5V.75A.75.75 0 0 1 8 0M2.5 4.5v9h11v-9zM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6.25 2.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"})})}let s=(0,n.forwardRef)((e,t)=>(0,a.Y)(i.I,{ref:t,...e,component:o}));s.displayName="RobotIcon";let l=s},804723:(e,t,r)=>{r.d(t,{S:()=>l});var a=r(610435),n=r(5421),i=r(497895),o=r(174541);let s=({children:e,...t})=>{let{theme:r}=(0,i.wn)(),{isInsideTypeaheadCombobox:s}=(0,n.T)();if(!s)throw Error("`TypeaheadComboboxFooter` must be used within `TypeaheadComboboxMenu`");return(0,a.Y)("div",{...t,css:(0,o.UA)(r),children:e})};s.defaultProps={_type:"TypeaheadComboboxFooter"};let l=s},814954:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(715908);function n(e){return e===Object(e)&&0!==Object.keys(e).length}let i=function(e,t){var r,i,o,s=!e.ownerDocument.documentElement.contains(e);if(n(t)&&"function"==typeof t.behavior)return t.behavior(s?[]:(0,a.A)(e,t));if(s)return;var l=function(e){if(!1===e)return{block:"end",inline:"nearest"};if(n(e))return e;return{block:"start",inline:"nearest"}}(t);return r=(0,a.A)(e,l),void 0===(i=l.behavior)&&(i="auto"),o="scrollBehavior"in document.body.style,void r.forEach(function(e){var t=e.el,r=e.top,a=e.left;t.scroll&&o?t.scroll({top:r,left:a,behavior:i}):(t.scrollTop=r,t.scrollLeft=a)})}},845766:(e,t,r)=>{r.d(t,{SQ:()=>h});var a=r(610435),n=r(956935),i=r(251545),o=r(91958),s=r.n(o),l=r(692738),c=r(532111),d=r(429608),u=r(497895),p=r(639712),f=r(123252);let m=s()(({theme:e,clsPrefix:t})=>(({theme:e,clsPrefix:t})=>{let r=`.${t}-form-item-label`,a=`.${t}-form-item-control-input`,i=`.${t}-form-item-explain`,o=`.${t}-form-item-has-error`;return(0,n.AH)({[r]:{fontWeight:e.typography.typographyBoldFontWeight,lineHeight:e.typography.lineHeightBase,".anticon":{fontSize:e.general.iconFontSize}},[i]:{fontSize:e.typography.fontSizeSm,margin:0,[`&${i}-success`]:{color:e.colors.textValidationSuccess},[`&${i}-warning`]:{color:e.colors.textValidationDanger},[`&${i}-error`]:{color:e.colors.textValidationDanger},[`&${i}-validating`]:{color:e.colors.textSecondary}},[a]:{minHeight:e.general.heightSm},[`${a} input[disabled]`]:{border:"none"},[`&${o} input:focus`]:(0,p.dg)({boxShadow:"none"}),...(0,d.Cx)(e.options.enableAnimation)})})({theme:e,clsPrefix:t}),({theme:e,clsPrefix:t})=>`${(0,p.H6)(e)}|${t}`);function g(e,t){if(!("object"==typeof e&&null!==e&&"validator"in e&&"function"==typeof e.validator))return e;let r=t.wrap(e.validator);if(r===e.validator)return e;return{...e,validator:r}}let h=Object.assign((0,l.forwardRef)(function({dangerouslySetAntdProps:e,children:t,...r},n){let o={...r,layout:r.layout||"vertical",requiredMark:r.requiredMark||!1};return(0,a.Y)(d.wC,{children:(0,a.Y)(i.A,{...(0,f.VG)(),...o,colon:!1,ref:n,...e,children:(0,a.Y)(d.dg,{children:t})})})}),{Item:({dangerouslySetAntdProps:e,children:t,...r})=>{let{theme:n,classNamePrefix:o}=(0,u.wn)(),s=(0,c.HY)(),p=(0,l.useMemo)(()=>(function(e,t){if(!e||0===e.length)return e;let r=!1,a=e.map(e=>{let a=function(e,t){if("function"==typeof e)return r=>g(e(r),t);return g(e,t)}(e,t);return r||=a!==e,a});return r?a:e})(r.rules,s),[s,r.rules]);return(0,a.Y)(d.wC,{children:(0,a.Y)(i.A.Item,{...(0,f.VG)(),...r,rules:p,css:m({theme:n,clsPrefix:o}),...e,children:t})})},List:i.A.List,useForm:i.A.useForm})},906169:(e,t,r)=>{r.d(t,{A:()=>a});let a=r(712975).A},936743:(e,t,r)=>{r.d(t,{G:()=>s,l:()=>o});var a=r(610435),n=r(692738),i=r(62947);let o=e=>{switch(e.kind){case"group":return{group_name:e.name,group_id:e.id};case"user":return{user_name:e.name,user_id:e.id};case"serviceprincipal":return{service_principal_display_name:e.displayName,service_principal_id:e.id,service_principal_name:e.applicationId}}},s=({onUpdate:e,onUpdateSubject:t,showAccountLevelEntities:r,...s})=>{let l=(0,n.useCallback)(r=>{let a;Array.isArray(r)?a=r.map(e=>o(e)):void 0!==r&&(a=o(r)),e&&e(a),t&&t(r)},[e,t]);return(0,a.Y)(i.T,{enableAccountGroups:!!r,enableAccountServicePrincipals:!!r,enableAccountUsers:!!r,enableWorkspaceGroups:!r,enableWorkspaceServicePrincipals:!r,enableWorkspaceUsers:!r,onUpdate:e||t?l:void 0,...s})}},974323:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(554390),n=r(692738);let i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"};var o=r(271177),s=function(e,t){return n.createElement(o.A,(0,a.A)((0,a.A)({},e),{},{ref:t,icon:i}))};s.displayName="RightOutlined";let l=n.forwardRef(s)}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/23465.dd4de88b4b.chunk.js.map