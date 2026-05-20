"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[11798,58752,62874],{40293:(e,t,a)=>{a.d(t,{o:()=>u,s:()=>d});var n=a(692738),r=a(141078),i=a(235250),o=a(261557),s=a(595615);function l(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}let d=e=>["get_external_metadata",e];function u(e,t){let a=(0,r.mK)(),u=(0,n.useCallback)(()=>({queryKey:d(e),queryFn:()=>{var t;return(t=function*(){let t=yield i.u.getExternalMetadata(a,e);if(!t)throw Error("External metadata not found");return(0,o.je)(t)},function(){var e=this,a=arguments;return new Promise(function(n,r){var i=t.apply(e,a);function o(e){l(i,n,r,o,s,"next",e)}function s(e){l(i,n,r,o,s,"throw",e)}o(void 0)})})()}}),[e,a]);return(0,s.AO)({...u(),...t})}},75725:(e,t,a)=>{a.d(t,{L:()=>P,z:()=>b});var n,r=a(999561),i=a(416913),o=a(594682),s=a(84824),l=a(273365),d=a(477694),u=a(134824),c=a(964932),p=a(452882);let g="domain_with_zero",R=`${g}_primary`,E=`${g}_secondary`,A="ratios",m=`${A}_primary`,T=`${A}_secondary`,S="max_ratios",_="ideal_ratios",f="scale_numerators",N=`${f}_primary`,I=`${f}_secondary`,y="scale_denominator",h=`${y}_primary`,O=`${y}_secondary`,C="new_domain",v=`${C}_primary`,L=`${C}_secondary`;function P({spec:e}){let{encodings:t,mark:a,widgetType:n,legacy:r}=e;if(!(0,i.mv)(t.y)&&!(0,i.UN)(t.y)||!(0,p.F)(t.y))return[];let s=[],l=t.y,d=(0,c.j)({encodings:t,mark:a,visual:n,legacy:r,channel:"y"}),u=(0,o.Ee)(n,l,"primary"),g=(0,o.Ee)(n,l,"secondary"),A=a?.layout;return s.push({name:R,expr:M({dualAxisType:"primary",axisEncoding:l.primary,percentTransformed:d,visual:u,layout:A})}),s.push({name:E,expr:M({dualAxisType:"secondary",axisEncoding:l.secondary,percentTransformed:d,visual:g,layout:A})}),s.push({name:m,expr:$("primary")}),s.push({name:T,expr:$("secondary")}),s.push({name:S,expr:`[min(${m}[0], ${T}[0]), max(${m}[1], ${T}[1])]`}),s.push({name:_,expr:`[${S}[0] / span(${S}), ${S}[1] / span(${S})]`}),s.push({name:N,expr:D("primary")}),s.push({name:I,expr:D("secondary")}),s.push({name:h,expr:x("primary")}),s.push({name:O,expr:x("secondary")}),s.push({name:v,expr:U("primary")}),s.push({name:L,expr:U("secondary")}),s}var b=((n={})[n.DomainWithZeroPrimary=R]="DomainWithZeroPrimary",n[n.DomainWithZeroSecondary=E]="DomainWithZeroSecondary",n[n.NewDomainPrimary=v]="NewDomainPrimary",n[n.NewDomainSecondary=L]="NewDomainSecondary",n);function M({dualAxisType:e,axisEncoding:t,percentTransformed:a,visual:n,layout:i}){let o=[];if(a||(0,s.B)(t).forEach(({fieldEncoding:t},a)=>{let{error:n}=t;if(!n)return;let i=[e,a],{upper:s,lower:l}=(0,u.wy)(i);if("absolute"===n.type)for(let{errorKey:e}of(0,r.Up)(n))o.push("upper"===e?s:l);else n.offset&&o.push(s,l)}),"stack"===i){let t;if("bar"===n?t=(0,d.WF)({dualAxisType:e}):"area"===n&&(t=(0,d.oC)({dualAxisType:e})),t){var c,p;let e,a;return o.length>0?(c=t,e=(p=o).map(e=>`isValid(${e}[0]) ? ${e}[0] : MAX_VALUE`),a=p.map(e=>`isValid(${e}[1]) ? ${e}[1] : -MAX_VALUE`),`[min(${c}[0], ${e.join(", ")}), max(${c}[1], ${a.join(", ")})]`):t}}return(0,d.p3)({axisGroupType:e,fields:(0,l.N)(t).map(e=>e.fieldName),percentTransformed:a,errorBoundExtentParamNames:o})}function $(e){return`span(${g}_${e}) > 0 ? [${g}_${e}[0] / span(${g}_${e}), ${g}_${e}[1] / span(${g}_${e})] : [1, 1]`}function D(e){return`[${_}[0] / ${A}_${e}[0], ${_}[1] / ${A}_${e}[1]]`}function x(e){return`min(1, ${f}_${e}[0], ${f}_${e}[1])`}function U(e){return`${A}_${e}[0] === 0 ? [${g}_${e}[1] * ${_}[0] / ${_}[1], ${g}_${e}[1]] : ${A}_${e}[1] === 0 ? [${g}_${e}[0], ${g}_${e}[0] * ${_}[1] / ${_}[0]] : [${g}_${e}[0] * ${f}_${e}[0] / ${y}_${e}, ${g}_${e}[1] * ${f}_${e}[1] / ${y}_${e}]`}},121339:(e,t,a)=>{a.d(t,{t:()=>h});var n=a(359419),r=a.n(n),i=a(536717),o=a.n(i),s=a(608983),l=a(720097),d=a.n(l),u=a(377063),c=a.n(u),p=a(22191),g=a(626152),R=a(977286),E=a(106049),A=a(595720),m=a(952067),T=a(75725);function S({vlDomain:e,valueAlias:t,columnSchema:a}){return function({domain:e,columnSchema:t}){let{type:a,timezone:n}=t??{};if(!(0,E.L9)(a)||!n)return e;return e.map(e=>{if(!d()(e))return e;let t=(0,R.gC)(c().utc(e),n);return(0,R.EJ)(t,"UTC").valueOf()})}({domain:function({vlDomain:e,valueAlias:t}){if(!t)return e;let a=new Map(t.map(({originalValue:e,alias:t})=>[e,t]));return e.map(e=>a.get(e)??e)}({vlDomain:e,valueAlias:t}),columnSchema:a})}function _({channel:e,domainSignalMap:t,isFacetSubChart:a}){if(!a||"x"!==e&&"y"!==e||!t)return;let n=t.get(e);if(!n)return;return{domain:n.signalDef}}var f=a(41375),N=a(200165),I=a(859773),y=a(270527);function h({channel:e,scale:t,colors:a,colorRamp:n,shapes:i,strokeDashes:l,extraVLScaleSpec:d,continuousScalePadding:u,hiddenGroupOffsetValues:c,valueAlias:R,zoomable:E,dualAxisMetadata:C,percent:v,mark:L,domainProfiler:P,isLegacyRedashViz:b,fieldName:M,domainSignalMap:$,columnSchema:D,visual:x,isFacetSubChart:U}){let G=function(e){switch(e.type){case"quantitative":if(e.fn?.type==="log")return{...e.fn,type:"symlog"};return e.fn;case"temporal":return{type:"utc"};case"categorical":return}}(t),z=function({channel:e,zoomable:t,scale:a,hiddenGroupOffsetValues:n,valueAlias:r,dualAxisMetadata:i,domainProfiler:o,isLegacyRedashViz:l,fieldName:d,domainSignalMap:u,columnSchema:c,isFacetSubChart:R}){let{type:E}=a;switch(E){case"quantitative":return function({channel:e,scale:t,dualAxisMetadata:a,domainSignalMap:n,isFacetSubChart:r}){let{domain:i}=t;if(i)return{...void 0!==i.min?{domainMin:i.min}:{},...void 0!==i.mid?{domainMid:i.mid,domain:{unionWith:[i.mid]}}:{},...void 0!==i.max?{domainMax:i.max}:{}};if("y"===e&&a?.alignAxesAtZero)return{domain:{expr:"primary"===a.axisType?`span(${T.z.DomainWithZeroPrimary}) === 0 ? ${T.z.NewDomainSecondary} : ${T.z.NewDomainPrimary}`:`span(${T.z.DomainWithZeroSecondary}) === 0 ? ${T.z.NewDomainPrimary} : ${T.z.NewDomainSecondary}`},zero:!0};let o=_({channel:e,domainSignalMap:n,isFacetSubChart:r});if(o)return o;if("color"===e&&n){let t=n.get(e);if(t)return{domain:t.signalDef}}}({channel:e,scale:a,dualAxisMetadata:i,domainSignalMap:u,isFacetSubChart:R});case"categorical":return function({channel:e,scale:t,columnSchema:a,hiddenGroupOffsetValues:n,valueAlias:r,domainProfiler:i,isLegacyRedashViz:o,fieldName:l,domainSignalMap:d,zoomable:u}){let c=(0,s.U)({channel:e,domainSignalMap:d,zoomable:u});if(c)return c;let{sort:p}=t;if((0,m.Z2)(t))return function({channel:e,mappings:t,valueAlias:a,hiddenGroupOffsetValues:n,columnSchema:r}){let i=S({vlDomain:t.map(({value:e})=>e),valueAlias:a,columnSchema:r});if(0===i.length)return;if("xOffset"===e||"yOffset"===e)return{domain:i.filter(e=>!n.includes("string"==typeof e?e:String(e)))};return{domain:i}}({channel:e,mappings:t.mappings,valueAlias:r,hiddenGroupOffsetValues:n,columnSchema:a});if((0,m.fg)(t))return function({mappings:e,valueAlias:t,columnSchema:a}){let n=S({vlDomain:e.map(({value:e})=>e),valueAlias:t,columnSchema:a});if(0===n.length)return;return{domain:n}}({mappings:t.mappings,valueAlias:r,columnSchema:a});if((0,A.zT)(p)&&l)return function({channel:e,sort:t,excludeNull:a,valueAlias:n,domainProfiler:r,isLegacyRedashViz:i,fieldName:o,columnSchema:s}){let l=r.getProfiler({resultsetFieldName:o}),d=l?.getCategoricalDomain({sort:t,nullHandling:{convertNullToNullStringForStringColumn:!!(i&&"color"===e),excludeNull:a,orderNullStringLikeNullForNaturalOrder:!1,showNullLastForNaturalOrder:!1,applyJSDefaultForNonTemporalColumn:!1}})?.values??[];if(0===d.length)return;return{domain:S({vlDomain:d,valueAlias:n,columnSchema:s})}}({channel:e,fieldName:l,columnSchema:a,isLegacyRedashViz:o,sort:p,excludeNull:t._excludeNull??!1,valueAlias:r,domainProfiler:i})}({channel:e,scale:a,columnSchema:c,hiddenGroupOffsetValues:n,valueAlias:r,domainProfiler:o,isLegacyRedashViz:l,fieldName:d,domainSignalMap:u,zoomable:t});case"temporal":return _({channel:e,domainSignalMap:u,isFacetSubChart:R});default:(0,g.K)(E,p.Es.Visualizations)}}({channel:e,scale:t,hiddenGroupOffsetValues:c??[],valueAlias:R,dualAxisMetadata:C,domainProfiler:P,isLegacyRedashViz:b,fieldName:M,domainSignalMap:$,columnSchema:D,zoomable:E,isFacetSubChart:U}),k=function({colors:e,colorRamp:t,shapes:a,strokeDashes:n,channel:r,mark:i,visual:s}){if(t)return o()(t)?{scheme:t,clamp:!0}:{range:t,interpolate:"rgb",clamp:!0};if("size"===r){let e=i?.size??0;if("line"===s)return{rangeMax:(0,I.z)({sizeCoefficient:e,defaultWidthFraction:N.fo})};return{rangeMax:(0,N.YQ)({sizeCoefficient:e,defaultRadius:N.EP})}}if("shape"===r&&a&&a.length>0)return{range:a};if("strokeDash"===r&&n&&n.length>0)return{range:n};return e?{range:e}:{}}({colors:a,colorRamp:n,shapes:i,strokeDashes:l,channel:e,mark:L,visual:x}),B=function({continuousScalePadding:e,channel:t,scale:a,mark:n,dualAxisMetadata:r,zoomable:i,percent:o}){if(e){let s="x"===t?"x":"y"===t?r?`layer_${r.axisType}_y`:"y":void 0,l=i&&s?{domainRaw:{expr:(0,y.OD)(s)}}:{};if(!(0,m.xj)(a)||a.domain||n._dependentAxis!==t||r){if((0,m.GC)(a))return{...O(t,e),...l,nice:!1}}else{let a="x"===t?"width":"height";return{...O(t,e),...l,...!o?{nice:{expr:`(${a}/tickEvery) <= 2 ? true : ceil(${a}/tickEvery)`}}:{}}}}return{}}({continuousScalePadding:u,channel:e,scale:t,mark:L,dualAxisMetadata:C,zoomable:E,percent:v}),w=!!(0,s.U)({channel:e,domainSignalMap:$,zoomable:E}),Y=(0,m.xS)(t)&&(0,A.Ds)(t.sort)&&"color"!==e&&!w||(0,m.wF)(t)&&t.reverse,F="_center-stack"===L.layout&&L._dependentAxis===e,V={...G,...z,...(0,f.qm)(e)&&(0,m.wF)(t)&&z?{clamp:!0}:{},...k,...Y?{reverse:!0}:{},...B,...F?{zero:!1}:{},...d};return r()(V)?void 0:V}function O(e,t){if("x"===e)return{range:[t,{expr:`width-${t}`}]};return{range:[{expr:`height-${t}`},t]}}},252956:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(783772),i=a.n(r);a(692738);var o=a(382908);function s({className:e,children:t,...a}){return(0,n.Y)("section",{className:i()("visualization-editor-section",e),...a,children:t})}s.Title=function({className:e,children:t,...a}){if(!t)return null;return(0,n.Y)(o.o.Title,{level:4,className:i()("visualization-editor-section-title",e),...a,children:t})};let l=s},258671:(e,t,a)=>{a.d(t,{Me:()=>p,e7:()=>d,sr:()=>u});var n=a(62108),r=a(752428),i=a(416913),o=a(843811),s=a(684228),l=a(361424);function d({spec:e,columnSchemaMap:t}){if("histogram"===e.widgetType&&e.isLegacyRedashViz)return[];for(let a of(0,o.H)(c)){let n=e.encodings[a];if((0,i.UR)(n)&&"quantitative"===n.scale.type){let{fieldName:e}=n,i=t.get(e),o=(0,l.v)(n,i);if((0,r.Kj)(o))return[{calculate:`${(0,s.N)(e)} === null ? null : ${(0,s.N)(e)} + ${o.binWidth}`,as:u({channel:a})}]}}return[]}function u({channel:e}){return(0,n.SY)({channel:e,dependentAxisSubPath:void 0,transform:"bin_end"})}let c={x:"x2"};function p(e){if(!e)return;return"x"===e||"y"===e?c[e]:void 0}},325048:(e,t,a)=>{a.d(t,{c:()=>n,s:()=>r});let n=e=>({display:"flex",borderBottom:`1px solid ${e.colors.actionDefaultBorderDefault}`,marginBottom:e.spacing.md,height:e.general.heightSm,boxSizing:"border-box"}),r=e=>({display:"flex",fontWeight:e.typography.typographyBoldFontWeight,fontSize:e.typography.fontSizeMd,backgroundColor:"transparent",marginRight:e.spacing.md})},345005:(e,t,a)=>{a.d(t,{FF:()=>l,Ss:()=>s,iO:()=>u,o$:()=>d});var n,r,i,o,s=((n={}).UI="UI",n.TEXT="TEXT",n),l=((r={}).UPSTREAM="UPSTREAM",r.DOWNSTREAM="DOWNSTREAM",r),d=((i={}).TABLE="TABLE",i.PATH="PATH",i.MODEL="MODEL",i.EXTERNAL="EXTERNAL",i),u=((o={}).SOURCE="source",o.TARGET="target",o)},390258:(e,t,a)=>{a.d(t,{$:()=>s,w:()=>l});var n=a(507624),r=a(752428),i=a(258671);let o={avg:"average",median:"median",percentile:"median",approx_percentile:"median",countdistinct:"distinct",sum:"sum",count:"count",max:"max",min:"min",variance:"variance",stddev:"stdev",measure:"values"};function s(e){return"object"==typeof e&&"function"==typeof e.alias}function l({transform:e,scaleType:t,vlFieldEncodingMode:a,encodingPath:s,domainSignalMap:d}){let u=e?.fn;if("transform"===a&&(0,n.rS)(u))return{aggregate:o[u]};if("quantitative"===t&&(0,r.Kj)(e)&&(0,i.Me)(s?.channel)){if(d?.get("xBin"))return{bin:{binned:!0,step:{signal:`calculateTickStep(${e.binWidth}, xBinDomain[0], xBinDomain[1], tickEvery, width)`},anchor:0}};return{bin:{binned:!0,step:e.binWidth,anchor:0}}}return{}}},450275:(e,t,a)=>{a.d(t,{d:()=>s,v:()=>r});var n,r=((n={}).Bytes="Bytes",n.KiloBytes="KiloBytes",n.MegaBytes="MegaBytes",n.GigaBytes="GigaBytes",n.TeraBytes="TeraBytes",n.PetaBytes="PetaBytes",n.ExaBytes="ExaBytes",n.ZettaBytes="ZettaBytes",n.YottaBytes="YottaBytes",n);let i={Bytes:0,KiloBytes:1,MegaBytes:2,GigaBytes:3,TeraBytes:4,PetaBytes:5,ExaBytes:6,ZettaBytes:7,YottaBytes:8},o=["Bytes","KiloBytes","MegaBytes","GigaBytes","TeraBytes","PetaBytes","ExaBytes","ZettaBytes","YottaBytes"];function s(e,t="Bytes"){if(e<0)return{size:e,sizeUnit:t};let a=e*Math.pow(1024,i[t]),n=Math.floor(Math.log(a)/Math.log(1024));return{size:a/Math.pow(1024,n=Math.min(Math.max(n,0),o.length-1)),sizeUnit:o[n]}}},469193:(e,t,a)=>{a.d(t,{Hm:()=>c,Hz:()=>r,K7:()=>p,Qn:()=>R,Th:()=>d,_W:()=>u,cH:()=>o,dJ:()=>s,g_:()=>i,gn:()=>g,qx:()=>E,zh:()=>l});var n=a(345005);let r=300,i="100%",o="/explore/external-metadata",s=e=>({externalMetadata:{name:e}});function l(e,t){if(e.table?.name)return{type:n.o$.TABLE,table:{name:e.table.name}};if(e.modelVersion?.name)return{type:n.o$.MODEL,modelVersion:{name:e.modelVersion.name,version:e.modelVersion.version??void 0}};if(e.path?.url)return{type:n.o$.PATH,path:{url:e.path.url}};if(e.externalMetadata?.name)return{type:n.o$.EXTERNAL,externalMetadata:{name:e.externalMetadata.name,systemType:t}}}function d(e){if(!e)return null;let t=e.filter(e=>e.key&&e.value);return t.length?t.reduce((e,t)=>(t.key&&t.value&&(e[t.key]=t.value),e),{}):null}function u(e){try{let t=JSON.parse(e);return Object.entries(t).map(([e,t])=>({key:e.trim(),value:"number"==typeof t?String(t):t.trim()}))}catch(e){return null}}function c(e){if(!e)return null;return e?e.split(",").map(e=>({name:e.trim()})):[]}function p(e){let{type:t,...a}=e,r={};return t===n.o$.TABLE?r.table=a.table:t===n.o$.MODEL?r.modelVersion=a.modelVersion:t===n.o$.EXTERNAL?r.externalMetadata={name:a.externalMetadata?.name}:t===n.o$.PATH&&(r.path=a.path),r}function g(e){let t=e?.columns&&e?.columns?.length>20?n.Ss.TEXT:n.Ss.UI,a=e?.properties&&e?.properties.length>20?n.Ss.TEXT:n.Ss.UI,r={name:e.name,systemType:e.systemType,entityType:e.entityType,url:e.url,comment:e.comment||"",columns_view:t,properties_view:a};if(t===n.Ss.TEXT){let t=d(e.properties);r.properties_string=t?JSON.stringify(t,null,2):""}else r.properties=[...e.properties||[],{key:"",value:""}];return a===n.Ss.TEXT?r.columns_string=(e.columns||[]).join(","):r.columns=[...e.columns?.map(e=>({name:e}))||[],{name:""}],r}function R(e){return e?.reduce((e,t)=>(t.key&&t.value&&(e[t.key]=t.value),e),{})||{}}function E(e){try{return JSON.parse(e)}catch(e){return}}},533244:(e,t,a)=>{a.d(t,{u:()=>i,z:()=>r});var n=a(610435);let r=(0,a(692738).createContext)({progress:0}),i=({children:e,value:t})=>(0,n.Y)(r.Provider,{value:t,children:e})},611798:(e,t,a)=>{a.d(t,{WS:()=>l,vB:()=>u,wM:()=>d});var n=a(778529),r=a.n(n),i=a(342411),o=a(819524);let s={BASE:[()=>"/",(0,i.zR)({id:"ov9+20",defaultMessage:"Databricks documentation"})],HOME:[()=>o.Ay.SQL_HOME,(0,i.zR)({id:"ue07Mv",defaultMessage:"Help"})],VALUE_SOURCE_OPTIONS:[()=>o.Ay.SQL_QUERY_PARAMS_MAPPING,(0,i.zR)({id:"DcWaq1",defaultMessage:"Guide: Value source options"})],ALERT_SETUP:[()=>o.Ay.SQL_ALERTS_CREATE,(0,i.zR)({id:"q7LDA/",defaultMessage:"Guide: Set up an alert"})],ALERT_NOTIF_TEMPLATE_GUIDE:[()=>o.Ay.SQL_ALERTS_CREATE,(0,i.zR)({id:"kolV98",defaultMessage:"Guide: Custom alert notifications"})],FAVORITES:[()=>o.Ay.SQL_FAVORITES,(0,i.zR)({id:"thZUgG",defaultMessage:"Guide: Favorites"})],NUMBER_FORMAT_SPECS:[()=>o.Ay.VISUALIZATIONS_FORMAT,(0,i.zR)({id:"LMTVoL",defaultMessage:"Guide: Format numeric types"})],GETTING_STARTED:[()=>o.Ay.SQL_GET_STARTED,(0,i.zR)({id:"7YtPJk",defaultMessage:"Guide: Get Started with Databricks SQL"})],DASHBOARDS:[()=>o.Ay.SQL_DASHBOARDS,(0,i.zR)({id:"qc8prl",defaultMessage:"Guide: Dashboards"})],QUERIES:[()=>o.Ay.SQL_QUERIES,(0,i.zR)({id:"LgWjpC",defaultMessage:"Guide: Queries"})],DATA_EXPLORER:[()=>o.Ay.SQL_DATA_EXPLORER,(0,i.zR)({id:"MYDPHJ",defaultMessage:"Guide: Catalog Explorer"})],ALERTS:[()=>o.Ay.SQL_ALERTS,(0,i.zR)({id:"7wIv+k",defaultMessage:"Guide: Alerts"})],HISTORY:[()=>o.Ay.SQL_QUERY_HISTORY,(0,i.zR)({id:"7JnOM5",defaultMessage:"Guide: Query history"})],QUERY_SNIPPETS:[()=>o.Ay.SQL_QUERY_SNIPPETS,(0,i.zR)({id:"AYvA8o",defaultMessage:"Guide: Query snippets"})],DESTINATIONS:[()=>o.Ay.SQL_ALERT_DESTINATIONS,(0,i.zR)({id:"doRqwe",defaultMessage:"Guide: Notification destinations"})],USER_GUIDE:[()=>o.Ay.SQL_USER_GUIDE,(0,i.zR)({id:"94r7iU",defaultMessage:"Databricks SQL user guide"})],ADMIN_GUIDE:[()=>o.Ay.SQL_ADMIN_GUIDE,(0,i.zR)({id:"U00160",defaultMessage:"Databricks SQL admin guide"})],PERSONAL_ACCESS_TOKENS:[()=>o.Ay.SQL_PERSONAL_TOKENS,(0,i.zR)({id:"A+npEB",defaultMessage:"Guide: Personal access tokens"})],GENERAL_SETTINGS:[()=>o.Ay.SQL_GENERAL_SETTINGS,(0,i.zR)({id:"2P87YO",defaultMessage:"Guide: General settings"})],INTEGRATIONS:[()=>o.Ay.INTEGRATIONS,(0,i.zR)({id:"zRmKp2",defaultMessage:"Guide: Databricks integrations"})],BI_TOOLS:[()=>o.Ay.INTEGRATIONS_BI_TOOLS,(0,i.zR)({id:"zLlRrz",defaultMessage:"Guide: Business intelligence tools"})],POWER_BI_INTEGRATION:[()=>o.Ay.PARTNERS_BI_POWER_BI,(0,i.zR)({id:"NMpwdG",defaultMessage:"Guide: Power BI integration"})],TABLEAU_INTEGRATION:[()=>o.Ay.PARTNERS_BI_TABLEAU,(0,i.zR)({id:"WEAoR8",defaultMessage:"Guide: Tableau integration"})],LAKEHOUSES:[()=>o.Ay.SQL_ADMIN_SQL_ENDPOINTS,(0,i.zR)({id:"J7HNBu",defaultMessage:"Guide: SQL endpoints"})],LAKEHOUSES_MONITOR:[()=>o.Ay.SQL_ADMIN_SQL_ENDPOINTS_MONITOR,(0,i.zR)({id:"E4MWA/",defaultMessage:"Guide: SQL endpoints monitor"})],WAREHOUSE_TYPE:[()=>o.Ay.SQL_ADMIN_WAREHOUSE_TYPE,(0,i.zR)({id:"lI+eGE",defaultMessage:"Guide: Warehouse type"})],DATA_ACCESS_CONFIGURATION:[()=>o.Ay.SQL_ADMIN_DATA_ACCESS_CONFIGURATION,(0,i.zR)({id:"hDMlp9",defaultMessage:"Guide: Data access configuration"})],DATA_ACCESS_CONTROL:[()=>o.Ay.SQL_USER_SECURITY_ACCESS_CONTROL_DATA_ACL,(0,i.zR)({id:"q9TDkJ",defaultMessage:"Data access control"})],DATA_ACCESS_CONTROL_MANAGE_PERMISSIONS:[()=>o.Ay.SQL_USER_SECURITY_ACCESS_CONTROL_DATA_ACL_MANAGE_PERMISSIONS,(0,i.zR)({id:"4ZsTLX",defaultMessage:"Manage data object permissions"})],QUERY_ACCESS_CONTROL:[()=>o.Ay.SQL_USER_SECURITY_ACCESS_CONTROL_QUERY_ACL,(0,i.zR)({id:"a+kic9",defaultMessage:"Query access control"})],QUERY_ACCESS_CONTROL_SHARE_ALL_QUERIES:[()=>o.Ay.SQL_USER_SECURITY_ACCESS_CONTROL_QUERY_ACL_SHARE_ALL_QUERIES,(0,i.zR)({id:"xkv7zn",defaultMessage:"Query access control: Share all queries"})],DASHBOARD_ACCESS_CONTROL:[()=>o.Ay.SQL_USER_SECURITY_ACCESS_CONTROL_DASHBOARD_ACL,(0,i.zR)({id:"GlSARy",defaultMessage:"Dashboard access control"})],DASHBOARD_ACCESS_CONTROL_SHARE_ALL_QUERIES:[()=>o.Ay.SQL_USER_SECURITY_ACCESS_CONTROL_DASHBOARD_ACL_SHARE_ALL_QUERIES,(0,i.zR)({id:"bFqKnH",defaultMessage:"Dashboard access control: Share all queries"})],ALERT_ACCESS_CONTROL:[()=>o.Ay.SQL_USER_SECURITY_ACCESS_CONTROL_ALERT_ACL,(0,i.zR)({id:"axs8Sg",defaultMessage:"Alert access control"})],SQL_ENDPOINT_ACCESS_CONTROL:[()=>o.Ay.SQL_USER_SECURITY_ACCESS_CONTROL_SQL_ENDPOINT_ACL,(0,i.zR)({id:"8iaLhh",defaultMessage:"SQL endpoint access control"})],RELEASE_NOTES:[()=>o.Ay.SQL_RELEASE_NOTES,(0,i.zR)({id:"J2dDYM",defaultMessage:"Release notes"})],RUNTIME_RELEASE_NOTES:[()=>o.Ay.RELEASE_NOTES_RUNTIME,(0,i.zR)({id:"5RhHC0",defaultMessage:"Runtime Release notes"})],PRODUCT_RELEASE_NOTES:[()=>o.Ay.RELEASE_NOTES_PRODUCT,(0,i.zR)({id:"fluU6U",defaultMessage:"Product Release notes"})],GIT_SUPPORTED_ASSETS:[()=>o.Ay.REPOS_SUPPORTED_ARTIFACT_TYPES,(0,i.zR)({id:"/jbzSE",defaultMessage:"Git supported assets documentation"})],GIT_HOW_TO_COMMIT:[()=>o.Ay.REPOS_GIT_OPERATIONS_WITH_REPOS_COMMIT,(0,i.zR)({id:"qr/WK7",defaultMessage:"How to commit to Git"})],SERVERLESS_SQL_ENDPOINTS:[()=>o.Ay.SERVERLESS_COMPUTE,(0,i.zR)({id:"jHvSXg",defaultMessage:"Serverless SQL Endpoints"})],SERVERLESS_SQL_ADMIN:[()=>o.Ay.SQL_ADMIN_SERVERLESS,(0,i.zR)({id:"bknNEM",defaultMessage:"Serverless SQL Admin page"})],DATA_ACCESS_OVERVIEW:[()=>o.Ay.SQL_USER_SECURITY_DATA_ACCESS_OVERVIEW,(0,i.zR)({id:"nvuff/",defaultMessage:"Data Access Overview"})],USER_AND_GROUPS_OVERVIEW:[()=>o.Ay.SQL_USER_SECURITY_DATA_ACCESS_OVERVIEW_USERS_GROUPS,(0,i.zR)({id:"6lZpDF",defaultMessage:"User and Groups Overview"})],CLOUD_STORAGE_ACCESS:[()=>o.Ay.SQL_USER_SECURITY_CLOUD_STORAGE_ACCESS,(0,i.zR)({id:"uFumft",defaultMessage:"Cloud Storage Access"})],MANAGED_AND_UNMANAGED_TABLES:[()=>o.Ay.DATA_TABLES_MANAGED_UNMANAGED,(0,i.zR)({id:"4ZVhae",defaultMessage:"Managed and unmanaged tables"})],PARTNER_INTEGRATIONS:[()=>o.Ay.INTEGRATIONS_PARTNERS_PARTNER_CONNECT,(0,i.zR)({id:"ltivfN",defaultMessage:"Partner integrations"})],PARTNER_INTEGRATIONS_TABLEAU:[()=>o.Ay.INTEGRATIONS_BI_TABLEAU,(0,i.zR)({id:"dQwsOE",defaultMessage:"Partner integrations: Tableau"})],PARTNER_INTEGRATIONS_POWER_BI:[()=>o.Ay.INTEGRATIONS_BI_POWER_BI,(0,i.zR)({id:"h6y3I+",defaultMessage:"Partner integrations: Power BI"})],PARTNER_INTEGRATIONS_ERWIN:[()=>o.Ay.PARTNERS_DATA_GOVERNANCE_ERWIN,(0,i.zR)({id:"H0iT2A",defaultMessage:"Partner integrations: erwin Data Modeler"})],PARTNER_INTEGRATIONS_FIVETRAN:[()=>o.Ay.PARTNERS_INGESTION_FIVETRAN,(0,i.zR)({id:"/+STGV",defaultMessage:"Partner integrations: Fivetran"})],PARTNER_INTEGRATIONS_HEVO:[()=>o.Ay.PARTNERS_INGESTION_HEVO,(0,i.zR)({id:"ZBzyFR",defaultMessage:"Partner integrations: Hevo"})],PARTNER_INTEGRATIONS_INFORMATICA_CLOUD_DATA_INTEGRATION:[()=>o.Ay.PARTNERS_INGESTION_INFORMATICA_CLOUD_DATA_INTEGRATION,(0,i.zR)({id:"DqQKv5",defaultMessage:"Partner integrations: Informatica Cloud Data Integration"})],PARTNER_INTEGRATIONS_RIVERY:[()=>o.Ay.PARTNERS_INGESTION_RIVERY,(0,i.zR)({id:"bNxvHQ",defaultMessage:"Partner integrations: Rivery"})],PARTNER_INTEGRATIONS_RUDDERSTACK:[()=>o.Ay.PARTNERS_INGESTION_RUDDERSTACK,(0,i.zR)({id:"TmAr83",defaultMessage:"Partner integrations: Rudderstack"})],PARTNER_INTEGRATIONS_SNOWPLOW:[()=>o.Ay.PARTNERS_INGESTION_SNOWPLOW,(0,i.zR)({id:"7hHm3c",defaultMessage:"Partner integrations: Snowplow"})],PARTNER_INTEGRATIONS_DBT_CLOUD:[()=>o.Ay.PARTNERS_PREP_DBT_CLOUD,(0,i.zR)({id:"MdxB8u",defaultMessage:"Partner integrations: dbt Cloud"})],PARTNER_INTEGRATIONS_MATILLION:[()=>o.Ay.PARTNERS_PREP_MATILLION,(0,i.zR)({id:"sjYB1U",defaultMessage:"Partner integrations: Matillion"})],PARTNER_INTEGRATIONS_PROPHECY:[()=>o.Ay.PARTNERS_PREP_PROPHECY,(0,i.zR)({id:"AnqWJw",defaultMessage:"Partner integrations: Prophecy"})],PARTNER_INTEGRATIONS_ALTERYX_DESIGNER_CLOUD:[()=>o.Ay.PARTNERS_PREP_ALTERYX_DESIGNER_CLOUD,(0,i.zR)({id:"g54AiS",defaultMessage:"Partner integrations: Alteryx One"})],PARTNER_INTEGRATIONS_DATAIKU:[()=>o.Ay.PARTNERS_ML_DATAIKU,(0,i.zR)({id:"6wSbaX",defaultMessage:"Partner integrations: Dataiku"})],PARTNER_INTEGRATIONS_JOHN_SNOW_LABS:[()=>o.Ay.PARTNERS_ML_JOHN_SNOW_LABS,(0,i.zR)({id:"OMQVwN",defaultMessage:"Partner integrations: John Snow Labs"})],PARTNER_INTEGRATIONS_LABELBOX:[()=>o.Ay.PARTNERS_ML_LABELBOX,(0,i.zR)({id:"jYL99V",defaultMessage:"Partner integrations: Labelbox"})],PARTNER_INTEGRATIONS_SUPERANNOTATE:[()=>o.Ay.PARTNERS_ML_SUPERANNOTATE,(0,i.zR)({id:"/mPXtG",defaultMessage:"Partner integrations: SuperAnnotate"})],PARTNER_INTEGRATIONS_HEX:[()=>o.Ay.PARTNERS_BI_HEX,(0,i.zR)({id:"9gxYx2",defaultMessage:"Partner integrations: Hex"})],PARTNER_INTEGRATIONS_PRESET:[()=>o.Ay.PARTNERS_BI_PRESET,(0,i.zR)({id:"I/7Zro",defaultMessage:"Partner integrations: Preset"})],PARTNER_INTEGRATIONS_QLIK_SENSE:[()=>o.Ay.PARTNERS_BI_QLIK_SENSE,(0,i.zR)({id:"FS+k1u",defaultMessage:"Partner integrations: Qlik Sense"})],PARTNER_INTEGRATIONS_SIGMA:[()=>o.Ay.PARTNERS_BI_SIGMA,(0,i.zR)({id:"5F3scq",defaultMessage:"Partner integrations: Sigma"})],PARTNER_INTEGRATIONS_THOUGHTSPOT:[()=>o.Ay.PARTNERS_BI_THOUGHTSPOT,(0,i.zR)({id:"e7J+dE",defaultMessage:"Partner integrations: ThoughtSpot"})],PARTNER_INTEGRATIONS_CENSUS:[()=>o.Ay.PARTNERS_REVERSE_ETL_CENSUS,(0,i.zR)({id:"O115kH",defaultMessage:"Partner integrations: Census"})],PARTNER_INTEGRATIONS_HIGHTOUCH:[()=>o.Ay.PARTNERS_REVERSE_ETL_HIGHTOUCH,(0,i.zR)({id:"2JTCj7",defaultMessage:"Partner integrations: Hightouch"})],PARTNER_INTEGRATIONS_HUNTERS:[()=>o.Ay.PARTNERS_DATA_SECURITY_HUNTERS,(0,i.zR)({id:"BOUCoz",defaultMessage:"Partner integrations: Hunters"})],PARTNER_INTEGRATIONS_PRIVACERA:[()=>o.Ay.PARTNERS_DATA_SECURITY_PRIVACERA,(0,i.zR)({id:"yinWUE",defaultMessage:"Partner integrations: Privacera"})],PARTNER_INTEGRATIONS_ALATION:[()=>o.Ay.PARTNERS_DATA_GOVERNANCE_ALATION,(0,i.zR)({id:"mD0e5j",defaultMessage:"Partner integrations: Alation"})],PARTNER_INTEGRATIONS_ANOMALO:[()=>o.Ay.PARTNERS_DATA_GOVERNANCE_ANOMALO,(0,i.zR)({id:"633c6l",defaultMessage:"Partner integrations: Anomalo"})],PARTNER_INTEGRATIONS_LIGHTUP:[()=>o.Ay.PARTNERS_DATA_GOVERNANCE_LIGHTUP,(0,i.zR)({id:"g4DKXY",defaultMessage:"Partner integrations: Lightup"})],PARTNER_INTEGRATIONS_MONTE_CARLO:[()=>o.Ay.PARTNERS_DATA_GOVERNANCE_MONTE_CARLO,(0,i.zR)({id:"TaXv12",defaultMessage:"Partner integrations: Monte Carlo"})],PARTNER_INTEGRATIONS_PRECISELY:[()=>o.Ay.PARTNERS_DATA_GOVERNANCE_PRECISELY,(0,i.zR)({id:"di2nSC",defaultMessage:"Partner integrations: Precisely"})],PARTNER_INTEGRATIONS_ATSCALE:[()=>o.Ay.PARTNERS_SEMANTIC_LAYER_ATSCALE,(0,i.zR)({id:"ZQdK7A",defaultMessage:"Partner integrations: AtScale"})],PARTNER_INTEGRATIONS_STARDOG:[()=>o.Ay.PARTNERS_SEMANTIC_LAYER_STARDOG,(0,i.zR)({id:"6AHDTR",defaultMessage:"Partner integrations: Stardog"})],PARTNER_CONNECT_PAT_DISABLED:[()=>o.Ay.PARTNER_CONNECT_TROUBLESHOOT_PERSONAL_ACCESS_TOKEN,(0,i.zR)({id:"41JfVA",defaultMessage:"Partner Connect requires Personal Access Tokens"})],PARTNER_CONNECT_PAT_USER_CONNECTION:[()=>o.Ay.DEV_TOOLS_AUTH_DATABRICKS_PERSONAL_ACCESS_TOKENS,(0,i.zR)({id:"0DfP6F",defaultMessage:"Partner Connect requires Personal Access Tokens for user connections"})],SERVICE_PRINCIPAL_AND_PERSONAL_ACCESS_TOKEN:[()=>o.Ay.INTEGRATIONS_PARTNER_CONNECT_ADMIN_SERVICE_PRINCIPAL_PAT,(0,i.zR)({id:"cf4fe1",defaultMessage:"Service principal and personal access token"})],SERVICE_PRINCIPAL_AND_SECRET:[()=>o.Ay.INTEGRATIONS_PARTNER_CONNECT_ADMIN,(0,i.zR)({id:"1ySEgk",defaultMessage:"Service principal and OAuth secret"})],PARTNER_CONNECT_OAUTH_APP_CONNECTION:[()=>o.Ay.INTEGRATIONS_PARTNER_CONNECT_ADMIN,(0,i.zR)({id:"GevqSz",defaultMessage:"OAuth app connection"})],PHOTON_ADVANTAGES:[()=>o.Ay.RUNTIME_PHOTON_ADVANTAGES,(0,i.zR)({id:"1pCs/T",defaultMessage:"Photon advantages"})],SQL_REFERENCE:[()=>o.Ay.SQL_LANGUAGE_MANUAL,(0,i.zR)({id:"/IWWEc",defaultMessage:"SQL reference for Databricks SQL"})],ANSI_SQL_MODE:[()=>o.Ay.SQL_LANGUAGE_MANUAL_PARAMETERS_ANSI_MODE,(0,i.zR)({id:"91ow6H",defaultMessage:"ANSI SQL mode parameter"})],DOWNLOAD_QUERY_RESULT:[()=>o.Ay.SQL_USER_QUERIES_QUERIES_DOWNLOAD,(0,i.zR)({id:"JuG6uq",defaultMessage:"Guide: Download a query result"})],DELTA_SHARING_PARTITION:[()=>o.Ay.DATA_SHARING_CREATE_SHARE_SPECIFY_TABLE_PARTITIONS,(0,i.zR)({id:"bKQDBO",defaultMessage:"Delta sharing partition"})],UNITY_CATALOG_PRIVILEGE_INHERITANCE:[()=>o.Ay.DATA_GOVERNANCE_UNITY_CATALOG_MANAGE_PRIVILEGES_PRIVILEGE_INHERITANCE,(0,i.zR)({id:"uxBHhL",defaultMessage:"Privilege inheritance"})],UNITY_CATALOG_MANAGED_STORAGE:[()=>o.Ay.DATA_GOVERNANCE_UNITY_CATALOG_MANAGED_STORAGE,(0,i.zR)({id:"dSpT2D",defaultMessage:"Managed storage"})],TABLE_ACL_OBJECT_PRIVILEGE:[()=>o.Ay.DATA_GOVERNANCE_TABLE_ACLS_OBJECT_PRIVILEGES,(0,i.zR)({id:"KkSBiK",defaultMessage:"Object Privilege"})]};function l(e){if(r()(e))return;return s[e]?.[0]()}function d({type:e,href:t,title:a,showTooltip:n=!0}){let o=(0,i.tz)(),l=r()(e)?void 0:s[e],u=l?.[0]()??t,c=l?.[1]?o.formatMessage(l[1]):a;if(r()(u))return{};return{title:n?c:void 0,href:u}}function u(e){return d({...e})}},638160:(e,t,a)=>{a.d(t,{p:()=>d});var n=a(610435);a(692738);var r=a(497895),i=a(814510),o=a(201513),s=a(342411),l=a(217985);function d({backUrl:e="/explore/external-metadata"}){let{theme:t}=(0,r.wn)();return(0,n.Y)(i.Q,{includeTrailingCaret:!1,children:(0,n.Y)(i.Q.Item,{children:(0,n.FD)(l.N,{componentId:"external-metadata-creation-page-breadcrumb_back",to:e,style:{display:"flex",gap:t.spacing.sm,alignItems:"center"},asTypographyLink:!0,children:[(0,n.Y)(o.A,{}),(0,n.Y)(s.sA,{id:"4LgtuX",defaultMessage:"Back"})]})})})}},647660:(e,t,a)=>{a.d(t,{Content:()=>P,List:()=>v,Root:()=>C,Trigger:()=>L});var n=a(610435),r=a(644091),i=a(747589),o=a(659276),s=a(514503),l=a.n(s),d=a(91958),u=a.n(d),c=a(692738),p=a(79128),g=a(224098),R=a(497895),E=a(369291),A=a(7754),m=a(325048),T=a(639712),S=a(661748),_=a(53333);let f=[g.s7.OnValueChange,g.s7.OnView],N=[g.s7.OnValueChange],I=[g.s7.OnClick],y={"& > div":{display:"inline-block !important"}},h=c.createContext({activeValue:void 0,dataComponentProps:{"data-component-id":"design_system.tabs.default_component_id","data-component-type":g.v_.Tabs}}),O=c.createContext({viewportRef:{current:null}}),C=c.forwardRef(({value:e,defaultValue:t,onValueChange:a,componentId:i,analyticsEvents:s,valueHasNoPii:l,...d},u)=>{let p=(0,S.W)("databricks.fe.observability.defaultComponentView.tabs",!1),R=void 0!==e,[E,A]=c.useState(t),m=(0,c.useMemo)(()=>s??(p?f:N),[s,p]),T=(0,g.ei)({componentType:g.v_.Tabs,componentId:i,analyticsEvents:m,valueHasNoPii:l,shouldStartInteraction:!0}),{elementRef:I}=(0,_.z)({onView:T.onView,value:e??t}),y=(0,r.SV)([u,I]),O=(0,c.useCallback)(e=>{T.onValueChange(e),a&&a(e),R||A(e)},[T,a,R]),C=R?e:E,v=(0,c.useMemo)(()=>({activeValue:C,dataComponentProps:T.dataComponentProps}),[C,T.dataComponentProps]);return(0,n.Y)(h.Provider,{value:v,children:(0,n.Y)(o.bL,{value:e,defaultValue:t,onValueChange:O,...d,ref:y})})}),v=c.forwardRef(({addButtonProps:e,scrollAreaViewportCss:t,tabListCss:a,children:r,dangerouslyAppendEmotionCSS:s,shadowScrollStylesBackgroundColor:l,scrollbarHeight:d,getScrollAreaViewportRef:u,...g},A)=>{let m=c.useRef(null),{theme:T}=(0,R.wn)(),{dataComponentProps:S}=c.useContext(h),_=x(T,l,d);c.useEffect(()=>{u&&u(m.current)},[u]);let f=(0,c.useMemo)(()=>({viewportRef:m}),[]);return(0,n.Y)(O.Provider,{value:f,children:(0,n.FD)("div",{css:[_.container,s],children:[(0,n.FD)(i.bL,{type:"hover",css:_.root,children:[(0,n.Y)(i.LM,{css:[_.viewport,t,y],ref:m,children:(0,n.Y)(o.B8,{css:[_.list,a],...g,ref:A,...S,children:r})}),(0,n.Y)(i.Ze,{orientation:"horizontal",css:_.scrollbar,children:(0,n.Y)(i.zi,{css:_.thumb})})]}),e&&(0,n.Y)("div",{css:[_.addButtonContainer,e.dangerouslyAppendEmotionCSS],children:(0,n.Y)(p.$n,{icon:(0,n.Y)(E.A,{}),size:"small","aria-label":"Add tab",css:_.addButton,onClick:e.onClick,componentId:`${S["data-component-id"]}.add_tab`,className:e.className})})]})})}),L=c.forwardRef(({onClose:e,suppressDeleteClose:t,customizedCloseAriaLabel:a,value:i,disabled:s,children:d,...u},p)=>{let{theme:E}=(0,R.wn)(),m=c.useRef(null),T=(0,r.SV)([p,m]),{activeValue:S,dataComponentProps:_}=c.useContext(h),f=_["data-component-id"],{viewportRef:N}=c.useContext(O),y=void 0!==e&&!s,C=U(E,y),v=(0,g.ei)({componentType:g.v_.Button,componentId:`${f}.close_tab`,analyticsEvents:I}),L=c.useCallback(()=>{if(!m.current||!N.current||S!==i)return;let e=N.current,t=m.current,a=e.getBoundingClientRect(),n=t.getBoundingClientRect();n.left<a.left?e.scrollLeft-=a.left-n.left:n.right>a.right&&(e.scrollLeft+=n.right-a.right)},[N,S,i]);(0,c.useEffect)(()=>{L()},[L]);let P=c.useMemo(()=>l()(L,10),[L]);return(0,c.useEffect)(()=>{if(!N.current||!m.current)return;let e=new ResizeObserver(P);return e.observe(N.current),e.observe(m.current),()=>{e.disconnect(),P.cancel()}},[P,N]),(0,n.FD)(o.l9,{css:C.trigger,value:i,disabled:s,onKeyDown:a=>{y&&!t&&"Delete"===a.key&&(v.onClick(a),a.stopPropagation(),a.preventDefault(),e(i))},onMouseDown:t=>{y&&1===t.button&&(v.onClick(t),t.stopPropagation(),t.preventDefault(),e(i))},...u,ref:T,children:[d,y&&(0,n.Y)(A.A,{onMouseDown:t=>{s||0!==t.button||!1!==t.ctrlKey||(v.onClick(t),t.stopPropagation(),t.preventDefault(),e(i))},css:C.closeSmallIcon,"aria-hidden":"false","aria-label":t?a:"Press delete to close the tab"})]})}),P=c.forwardRef(({mountMode:e="active",children:t,...a},r)=>{let{theme:i}=(0,R.wn)(),s=G(i),{activeValue:l}=c.useContext(h),d=a.value===l,[u,p]=c.useState(d);return d&&!u&&p(!0),(0,n.Y)(o.UC,{css:s,...a,ref:r,forceMount:"force"===e||"preserve"===e||void 0,children:"preserve"!==e||u?t:void 0})}),b={overflow:"hidden"},M={display:"flex",alignItems:"center"},$={flex:1},D={margin:"2px 0 6px 0"},x=u()((e,t,a)=>({container:{...(0,m.c)(e),contain:"layout paint"},root:b,viewport:{...(0,T.ye)(e,{backgroundColor:t})},list:M,scrollbar:{display:"flex",flexDirection:"column",userSelect:"none",touchAction:"none",height:a??3},thumb:{flex:1,background:e.isDarkMode?"rgba(255, 255, 255, 0.2)":"rgba(17, 23, 28, 0.2)","&:hover":{background:e.isDarkMode?"rgba(255, 255, 255, 0.3)":"rgba(17, 23, 28, 0.3)"},borderRadius:e.borders.borderRadiusSm,position:"relative"},addButtonContainer:$,addButton:D}),(e,t,a)=>`${(0,T.H6)(e)}|${t??""}|${a??""}`),U=u()((e,t)=>({trigger:{...(0,m.s)(e),alignItems:"center",justifyContent:t?"space-between":"center",minWidth:t?e.spacing.lg+e.spacing.md:e.spacing.lg,color:e.colors.textSecondary,lineHeight:e.typography.lineHeightBase,whiteSpace:"nowrap",border:"none",padding:`${e.spacing.xs}px 0 ${e.spacing.sm}px 0`,"& > .anticon:last-of-type":{visibility:"hidden"},"&:hover":{cursor:"pointer",color:e.colors.actionDefaultTextHover,"& > .anticon:last-of-type":{visibility:"visible"}},"&:active":{color:e.colors.actionDefaultTextPress},outlineStyle:"none",outlineColor:e.colors.actionDefaultBorderFocus,"&:focus-visible":{outlineStyle:"auto"},'&[data-state="active"]':{color:e.colors.textPrimary,boxShadow:`inset 0 -4px 0 ${e.colors.actionPrimaryBackgroundDefault}`,"& > .anticon:last-of-type":{visibility:"visible"}},"&[data-disabled]":{color:e.colors.actionDisabledText,"&:hover":{cursor:"not-allowed"}}},closeSmallIcon:{marginLeft:e.spacing.xs,color:e.colors.textSecondary,"&:hover":{color:e.colors.actionDefaultTextHover},"&:active":{color:e.colors.actionDefaultTextPress}}}),(e,t)=>`${(0,T.H6)(e)}|${t}`),G=u()(e=>({color:e.colors.textPrimary,'&[data-state="inactive"]':{display:"none"}}))},747206:(e,t,a)=>{a.d(t,{E3:()=>c,Hp:()=>n,IM:()=>u,QT:()=>S,Th:()=>p,U3:()=>A,V6:()=>d,db:()=>r,ff:()=>o,n5:()=>E,ps:()=>i,sI:()=>m,sZ:()=>T,xU:()=>g,xh:()=>l,yX:()=>R});let n=e=>{let t=e.replaceAll(".","/");return`/explore/data/${t}`},r=e=>`/explore/data/${encodeURIComponent(e||"")}`,i=(e,t)=>`/explore/data/${encodeURIComponent(t||"")}/${encodeURIComponent(e)}`,o=(e,t,a)=>`/explore/data/${encodeURIComponent(a||"")}/${encodeURIComponent(t||"")}/${encodeURIComponent(e)}`;var s,l=((s=l||{}).OVERVIEW="overview",s.COLUMNS="columns",s.SAMPLE="sample",s.DETAILS="details",s.PERMISSIONS="permissions",s.POLICIES="policies",s.HISTORY="history",s.LINEAGE="lineage",s.INSIGHTS="insights",s.QUALITY="quality",s.VOLUMES="volumes",s.MODELS="models",s.FUNCTIONS="functions",s.SCHEMAS="schemas",s.ASSETS="assets",s.WORKSPACES="workspaces",s.REFRESH="refresh",s.LIBRARY_ALLOWLIST="library_allowlist",s.USAGE="usage",s.SECURITY="security",s.TASKS="tasks",s.COLLABORATORS="collaborators",s.PREVIEW="preview",s.RUNS="runs",s.FILES="files",s);let d=(e,t,a,n)=>`/explore/data/${encodeURIComponent(n||"")}/${encodeURIComponent(a||"")}/${encodeURIComponent(e)}?activeTab=${t}`,u=(e,t,a)=>`/explore/data/volumes/${encodeURIComponent(a||"")}/${encodeURIComponent(t||"")}/${encodeURIComponent(e)}`,c=(e,t,a)=>`/explore/data/functions/${encodeURIComponent(a||"")}/${encodeURIComponent(t||"")}/${encodeURIComponent(e)}`,p=(e,t,a)=>`/explore/data/models/${encodeURIComponent(a||"")}/${encodeURIComponent(t||"")}/${encodeURIComponent(e)}`,g=(e,t,a,n)=>`/explore/data/models/${encodeURIComponent(n||"")}/${encodeURIComponent(a||"")}/${encodeURIComponent(e)}/version/${t}`,R=(e,t)=>`/explore/data/notebooks/${encodeURIComponent(t||"")}/${encodeURIComponent(e)}`,E=e=>`/explore/locations/${encodeURIComponent(e)}`,A=e=>`/explore/connections/${encodeURIComponent(e)}`,m=e=>`/explore/external-metadata/${encodeURIComponent(e)}`,T=()=>"/governance/metastore",S=(e,t,a)=>`/explore/data/secrets/${encodeURIComponent(a||"")}/${encodeURIComponent(t||"")}/${encodeURIComponent(e)}`},753254:(e,t,a)=>{a.d(t,{Indicator:()=>E,Root:()=>g});var n=a(610435),r=a(956935),i=a(69011),o=a(91958),s=a.n(o),l=a(692738),d=a(533244),u=a(497895),c=a(639712);let p=s()((e,t,a)=>{let n={position:"relative",overflow:"hidden",backgroundColor:e.colors.progressTrack,height:e.spacing.sm,width:"100%",borderRadius:e.borders.borderRadiusFull,...t&&{minWidth:t},...a&&{maxWidth:a},transform:"translateZ(0)"};return(0,r.AH)((0,c.dg)(n))},(e,t,a)=>`${(0,c.H6)(e)}|${t??""}|${a??""}`),g=e=>{let{children:t,value:a,minWidth:r,maxWidth:o,...s}=e,{theme:c}=(0,u.wn)(),g=(0,l.useMemo)(()=>({progress:a}),[a]);return(0,n.Y)(d.u,{value:g,children:(0,n.Y)(i.bL,{value:a,...s,css:p(c,r,o),children:t})})},R=s()(e=>{let t={backgroundColor:e.colors.progressFill,height:"100%",width:"100%",transition:"transform 300ms linear",borderRadius:e.borders.borderRadiusFull};return(0,r.AH)((0,c.dg)(t))}),E=e=>{let{progress:t}=l.useContext(d.z),{theme:a}=(0,u.wn)();return(0,n.Y)(i.C1,{css:R(a),style:{transform:`translateX(-${100-(t??100)}%)`},...e})}},762017:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(610435),r=a(250705),i=a(762706);a(692738);var o=a(611798),s=a(557845);function l({icon:e,children:t,...a}){return(0,n.Y)(i.A,{...a,content:t,children:(0,n.Y)("span",{children:e||l.defaultIcon})})}l.defaultProps={icon:null,children:null},l.defaultIcon=(0,n.Y)(r.A,{className:"context-help-default-icon"}),l.NumberFormatSpecs=function(){let e=(0,o.vB)({type:"NUMBER_FORMAT_SPECS"}).href??"https://redash.io/help/user-guide/visualizations/formatting-numbers";return(0,n.Y)(s.x,{type:"NUMBER_FORMAT_SPECS",title:"Formatting numbers",href:e,className:"visualization-editor-context-help",renderAsLink:!0,children:l.defaultIcon})},l.DateTimeFormatSpecs=function(){return(0,n.Y)(s.x,{title:"Formatting dates and times",href:"https://momentjs.com/docs/#/displaying/format/",className:"visualization-editor-context-help",renderAsLink:!0,children:l.defaultIcon})},l.ColorPaletteSpecs=function(){return(0,n.Y)(s.x,{title:"Dashboard color palettes",href:"https://docs.databricks.com/sql/admin/colors.html",className:"visualization-editor-context-help",renderAsLink:!0,children:l.defaultIcon})}},766786:(e,t,a)=>{a.d(t,{U:()=>m});var n=a(610435),r=a(692738),i=a(561587),o=a(497895),s=a(964133),l=a(433858),d=a(764236),u=a(407374),c=a(79128),p=a(793480),g=a(174568),R=a(342411),E=a(345005),A=a(469193);function m(){let{theme:e}=(0,o.wn)(),t=(0,R.tz)(),a=(0,i.xW)(),{fields:m,append:T,remove:S}=(0,i.jz)({control:a.control,name:"properties"}),_=a.watch("properties"),f=a.watch("properties_view")||E.Ss.UI,N=(e,t,a)=>{a(e);let n=t===m.length-1,r=_?.[t]?.key??"",i=_?.[t]?.value??"";n&&""!==r.trim()&&""!==i.trim()&&T({key:"",value:""},{shouldFocus:!1})};(0,r.useEffect)(()=>{_?.length||T({key:"",value:""})},[T,_]);let I=t.formatMessage({id:"vDFlgq",defaultMessage:"Invalid JSON format"}),{errors:y}=a.formState;return(0,n.FD)(n.FK,{children:[(0,n.FD)("div",{css:{display:"flex",justifyContent:"space-between",gap:`${e.spacing.xs}px`},children:[(0,n.FD)("div",{css:{flex:1},children:[(0,n.Y)(s.D.Label,{htmlFor:"properties",children:(0,n.Y)(R.sA,{id:"Xn4bKV",defaultMessage:"Properties"})}),(0,n.Y)(s.D.Hint,{children:(0,n.Y)(R.sA,{id:"Mq24gC",defaultMessage:"Generic JSON object to specify any additional metadata for this entity"})})]}),(0,n.FD)(l.d,{name:"size-story",value:f,onChange:e=>{(e=>{if(a.clearErrors("properties_string"),e===E.Ss.TEXT){let e=(0,A.Th)(_),t=e?JSON.stringify(e,null,2):"";a.setValue("properties_string",t)}else{let n=a.watch("properties_string");if(!n){a.setValue("properties",[]),a.setValue("properties_view",e);return}try{let e=JSON.parse(n);if(Object.values(e).some(e=>"object"==typeof e&&null!==e))return void a.setError("properties_string",{message:t.formatMessage({id:"PONgbW",defaultMessage:"Nested properties are not supported"})});let r=(0,A._W)(n);if(!r)return void a.setError("properties_string",{message:I});r.push({key:"",value:""}),a.setValue("properties",r)}catch{a.setError("properties_string",{message:I});return}}a.setValue("properties_view",e)})(e.target.value)},size:"small",componentId:"YOUR_TRACKING_ID",children:[(0,n.Y)(l.E,{value:E.Ss.UI,children:(0,n.Y)(R.sA,{id:"HQ3Jpu",defaultMessage:"UI"})}),(0,n.Y)(l.E,{value:E.Ss.TEXT,children:(0,n.Y)(R.sA,{id:"dORDgd",defaultMessage:"JSON"})})]})]}),(0,n.Y)(d.h,{size:"md"}),(0,n.Y)("div",{children:f===E.Ss.UI?(0,n.FD)(n.FK,{children:[(0,n.FD)("div",{css:{display:"grid",gridTemplateColumns:"1fr 1fr min-content",gap:`${e.spacing.sm}px`,marginBottom:`${e.spacing.sm}px`},children:[(0,n.Y)(s.D.Label,{htmlFor:"properties_key",children:(0,n.Y)(R.sA,{id:"Z3Knog",defaultMessage:"Key"})}),(0,n.Y)(s.D.Label,{htmlFor:"properties_value",children:(0,n.Y)(R.sA,{id:"DS1sM8",defaultMessage:"Value"})}),(0,n.Y)("span",{css:{width:e.general.heightSm}})]}),(0,n.Y)("div",{css:{display:"flex",flexDirection:"column",gap:`${e.spacing.md}px`},children:m.map((r,o)=>{let s=o===m.length-1,l=m.length>1&&!s,d=_?.[o]?.key??"";return(0,n.FD)("div",{css:{display:"grid",gridTemplateColumns:"1fr 1fr min-content",gap:`${e.spacing.sm}px`},children:[(0,n.Y)(i.xI,{name:`properties.${o}.key`,control:a.control,render:({field:e})=>(0,n.Y)(u.p,{componentId:"external-metadata-creation-page-properties_key_input","data-testid":`properties.${o}.key`,...e,placeholder:t.formatMessage({id:"JVunU/",defaultMessage:"Enter property key"}),onChange:t=>N(t.target.value,o,e.onChange)})}),(0,n.Y)(i.xI,{name:`properties.${o}.value`,control:a.control,render:({field:e})=>(0,n.Y)(u.p,{componentId:"external-metadata-creation-page-properties_value_input","data-testid":`properties.${o}.value`,...e,placeholder:t.formatMessage({id:"0DpoW0",defaultMessage:"Enter property value"}),disabled:""===d.trim(),onChange:t=>N(t.target.value,o,e.onChange)})}),l?(0,n.Y)(c.$n,{componentId:"external-metadata-creation-page-remove_relationship_column",icon:(0,n.Y)(p.A,{}),onClick:()=>S(o),"aria-label":t.formatMessage({id:"FA7B03",defaultMessage:"Remove property"})}):(0,n.Y)("span",{css:{width:e.general.heightSm}})]},r.id)})})]}):(0,n.FD)("div",{children:[(0,n.Y)(g.t.TextArea,{componentId:"external-metadata-creation-page-properties_textarea",id:"properties_string",name:"properties_string",control:a.control,placeholder:'{"param1": "value1", "param2": "value2"}',style:{height:200},rules:{validate:e=>(function(e,t){if(!e)return!0;try{let a=JSON.parse(e);if(Object.values(a).some(e=>"object"==typeof e&&null!==e))return t.formatMessage({id:"PONgbW",defaultMessage:"Nested properties are not supported"});return!0}catch{return t.formatMessage({id:"vDFlgq",defaultMessage:"Invalid JSON format"})}})(e,t)},validationState:y.properties_string?"error":void 0}),y.properties_string&&(0,n.Y)(s.D.Message,{type:"error",message:y.properties_string.message})]})})]})}},830690:(e,t,a)=>{a.d(t,{dK:()=>I,mB:()=>f,vI:()=>y});var n=a(610435),r=a(956935),i=a(644091),o=a(759794),s=a(91958),l=a.n(s),d=a(692738),u=a(79128),c=a(224098),p=a(429608),g=a(497895),R=a(217247),E=a(955210),A=a(74438),m=a(53333),T=a(639712),S=a(123252),_=a(661748);function f(e,t){let a=`.${e}-pagination`,n=`.${e}-pagination-item`,i=`.${e}-pagination-item-link`,o=`.${e}-pagination-item-active`,s=`.${e}-pagination-item-ellipsis`,l=`.${e}-pagination-next`,d=`.${e}-pagination-prev`,u=`.${e}-pagination-jump-next`,c=`.${e}-pagination-jump-prev`,p=`.${e}-pagination-options-quick-jumper`,g=`.${e}-pagination-options-size-changer`,R=`.${e}-pagination-options`,E=`.${e}-pagination-disabled`,A=`.${e}-select-selector`,m=`.${e}-select-dropdown`,S={"span[role=img]":{color:t.colors.textSecondary,"> *":{color:"inherit"}},[n]:{backgroundColor:"none",border:"none",color:t.colors.textSecondary,"&:focus-visible":{outline:"auto"},"> a":{color:t.colors.textSecondary,textDecoration:"none","&:hover":{color:t.colors.actionDefaultTextHover},"&:active":{color:t.colors.actionDefaultTextPress}},"&:hover":{backgroundColor:t.colors.actionDefaultBackgroundHover},"&:active":{backgroundColor:t.colors.actionDefaultBackgroundPress}},[o]:{backgroundColor:t.colors.actionDefaultBackgroundPress,color:t.colors.actionDefaultTextPress,border:"none","> a":{color:t.colors.actionDefaultTextPress},"&:focus-visible":{outline:"auto"},"&:hover":{backgroundColor:t.colors.actionDefaultBackgroundPress,color:t.colors.actionDefaultTextPress}},[i]:{border:"none",color:t.colors.textSecondary,"&[disabled]":{display:"none"},"&:hover":{backgroundColor:t.colors.actionDefaultBackgroundHover},"&:active":{backgroundColor:t.colors.actionDefaultBackgroundPress},"&:focus-visible":{outline:"auto"}},[s]:{color:"inherit"},[`${l}, ${d}, ${u}, ${c}`]:{color:t.colors.textSecondary,"&:hover":{backgroundColor:t.colors.actionDefaultBackgroundHover},"&:active":{backgroundColor:t.colors.actionDefaultBackgroundPress},"&:focus-visible":{outline:"auto"},[`&${E}`]:{pointerEvents:"none"}},[`&${a}.mini, ${a}.mini`]:{[`${n}, ${l}, ${d}, ${u}, ${c}`]:{height:"32px",minWidth:"32px",width:"auto",lineHeight:"32px"},[g]:{marginLeft:4},[`input,  ${R}`]:{height:"32px"},[`${A}`]:{boxShadow:t.shadows.xs,borderColor:t.colors.actionDefaultBorderDefault}},[`${p} > input`]:{borderColor:t.colors.actionDefaultBorderDefault},[`${m}`]:{borderColor:t.colors.actionDefaultBorderDefault}},_=(0,T.dg)(S);return(0,r.AH)(_)}let N=l()((e,t)=>f(e,t),(e,t)=>`${(0,T.H6)(t)}|${e}`),I=function({currentPageIndex:e,pageSize:t=10,numTotal:a,onChange:r,style:s,hideOnSinglePage:l,dangerouslySetAntdProps:u,componentId:R,analyticsEvents:E}){let A=(0,_.W)("databricks.fe.observability.defaultComponentView.pagination",!1),{classNamePrefix:T,theme:f}=(0,g.wn)(),{pageSizeSelectAriaLabel:I,pageQuickJumperAriaLabel:y,...h}=u??{},O=(0,d.useRef)(null),C=(0,d.useMemo)(()=>E??(A?[c.s7.OnValueChange,c.s7.OnView]:[c.s7.OnValueChange]),[E,A]),v=(0,c.ei)({componentType:c.v_.Pagination,componentId:R,analyticsEvents:C,valueHasNoPii:!0}),L=(0,d.useCallback)((e,t)=>{v.onValueChange(e),r(e,t)},[v,r]),{elementRef:P}=(0,m.z)({onView:v.onView}),b=(0,i.SV)([O,P]);return(0,d.useEffect)(()=>{if(O&&O.current){let e=O.current.querySelector(`.${T}-select-selection-search-input`);e&&e.setAttribute("aria-label",I??"Select page size");let t=O.current.querySelector(`.${T}-pagination-options-quick-jumper > input`);t&&t.setAttribute("aria-label",y??"Go to page")}},[y,I,T]),(0,n.Y)(p.wC,{children:(0,n.Y)("div",{ref:b,children:(0,n.Y)(o.A,{...(0,S.VG)(),css:N(T,f),current:e,pageSize:t,responsive:!1,total:a,onChange:L,showSizeChanger:!1,showQuickJumper:!1,size:"small",style:s,hideOnSinglePage:l,...h,...v.dataComponentProps})})})},y=function({onNextPage:e,onPreviousPage:t,hasNextPage:a,hasPreviousPage:r,nextPageText:i="Next",previousPageText:o="Previous",pageSizeSelect:{options:s,default:l,getOptionText:p,onChange:m,ariaLabel:T="Select page size"}={},componentId:S="design_system.cursor_pagination",analyticsEvents:_=[c.s7.OnValueChange],valueHasNoPii:f}){let{theme:N,classNamePrefix:I}=(0,g.wn)(),[y,h]=(0,d.useState)(l),O=(0,d.useMemo)(()=>_,[_]),C=`${S}.page_size`,v=(0,c.ei)({componentType:c.v_.LegacySelect,componentId:C,analyticsEvents:O,valueHasNoPii:f});return(0,n.FD)("div",{css:{display:"flex",flexDirection:"row",gap:N.spacing.sm,[`.${I}-select-selector::after`]:{content:"none"}},...v.dataComponentProps,children:[(0,n.Y)(u.$n,{componentId:`${S}.previous_page`,icon:(0,n.Y)(R.A,{}),disabled:!r,onClick:t,type:"tertiary",children:o}),(0,n.Y)(u.$n,{componentId:`${S}.next_page`,endIcon:(0,n.Y)(E.A,{}),disabled:!a,onClick:e,type:"tertiary",children:i}),s&&(0,n.Y)(A._v,{"aria-label":T,value:String(y),css:{width:120},onChange:e=>{let t=Number(e);m?.(t),h(t),v.onValueChange(e)},children:s.map(e=>(0,n.Y)(A._v.Option,{value:String(e),children:(p||(e=>`${e} / page`))(e)},e))})]})}},840924:(e,t,a)=>{a.d(t,{v:()=>m});var n=a(483588),r=a(441535),i=a(141078);let o=(0,i.J1)`
  fragment LineageSecurableRelationshipInfoFragment on MetadatalineageapiserverLineageInfo {
    tableInfo {
      name
      schemaName
      catalogName
      hasPermission
      tableType
      lineageTimestamp
    }
    modelInfo {
      modelName
      version
      lineageTimestamp
      mlflowModelId
    }
    functionInfo {
      functionName
      lineageTimestamp
    }
    functionInfos {
      functionId
      functionName
      lineageTimestamp
    }
    fileInfo {
      path
      hasPermission
      storageLocation
      securableName
      securableType
      lineageTimestamp
    }
    pipelineInfos {
      pipelineId
      updateId
      workspaceId
      lineageTimestamp
    }
    jobInfos {
      jobId
      workspaceId
      lineageTimestamp
    }
    notebookInfos {
      notebookId
      workspaceId
      lineageTimestamp
    }
    dashboardInfos {
      dashboardId
      dashboardType
      internalName
      workspaceId
      lineageTimestamp
    }
    dashboardV3Infos {
      dashboardId
      dashboardType
      internalName
      workspaceId
      lineageTimestamp
    }
    queryInfos {
      queryId
      workspaceId
      lineageTimestamp
    }
    servingEndpointInfos {
      servingEndpointId
      servedEntityId
      workspaceId
      lineageTimestamp
    }
    alertInfos {
      alertId
      workspaceId
      lineageTimestamp
    }
    genieSpaceInfos {
      genieSpaceId
      workspaceId
      lineageTimestamp
    }
    lineageTimestamp
  }
`,s=(0,i.J1)`
  fragment LineageEntityRelationshipInfoFragment on MetadatalineageapiserverEntityInfoPaginated {
    dashboardInfo {
      dashboardId
      dashboardType
      internalName
      workspaceId
      lineageTimestamp
    }
    jobInfo {
      jobId
      workspaceId
      lineageTimestamp
    }
    notebookInfo {
      notebookId
      workspaceId
      lineageTimestamp
    }
    queryInfo {
      queryId
      workspaceId
      lineageTimestamp
    }
    pipelineInfo {
      pipelineId
      updateId
      lineageId
      workspaceId
      lineageTimestamp
    }
    servingEndpointInfo {
      servingEndpointId
      servedEntityId
      workspaceId
      lineageTimestamp
    }
    genieSpaceInfo {
      genieSpaceId
      workspaceId
      lineageTimestamp
    }
    alertInfo {
      alertId
      workspaceId
      lineageTimestamp
    }
  }
`,l=(0,i.J1)`
  fragment ExternalLineageRelationshipObjectFragment on MetadatalineageapiserverExternalLineageRelationshipObject {
    externalMetadata {
      name
    }
    modelVersion {
      name
      version
    }
    path {
      url
    }
    table {
      name
    }
  }
`,d=(0,i.J1)`
  fragment ExternalLineageRelationshipInfoFragment on MetadatalineageapiserverExternalLineageInfo {
    tableInfo {
      name
      schemaName
      catalogName
      eventTime
    }
    modelInfo {
      modelName
      version
      eventTime
    }
    fileInfo {
      path
      storageLocation
      securableName
      securableType
      eventTime
    }
    externalLineageInfo {
      id
      query
      source {
        ...ExternalLineageRelationshipObjectFragment
      }
      target {
        ...ExternalLineageRelationshipObjectFragment
      }
      properties {
        key
        value
      }
      columns {
        source
        target
      }
    }
    externalMetadataInfo {
      entityType
      systemType
      eventTime
      name
    }
  }
  ${l}
`,u=(0,i.J1)`
  query ListSecurableLineagesBySecurable(
    $securableType: MetadatalineageapiserverSecurableType!
    $securableFullName: String!
    $subsecurableId: String
    $lineageDirection: MetadatalineageapiserverLineageDirection!
    $startTimestamp: String
    $pageSize: Int
    $pageToken: String
    $securableResponseFilter: MetadatalineageapiserverSecurableType
  ) @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverListSecurableLineagesBySecurable(
      input: {
        securableType: $securableType
        securableFullName: $securableFullName
        subsecurableId: $subsecurableId
        lineageDirection: $lineageDirection
        startTimestamp: $startTimestamp
        pageSize: $pageSize
        pageToken: $pageToken
        securableResponseFilter: $securableResponseFilter
      }
    ) {
      lineages {
        ...LineageSecurableRelationshipInfoFragment
      }
      nextPageToken
      areEntitiesTruncated
    }
  }
  ${o}
`,c=(0,i.J1)`
  query ListEntityLineagesBySecurable(
    $securableType: MetadatalineageapiserverSecurableType!
    $securableFullName: String!
    $subsecurableId: String
    $lineageDirection: MetadatalineageapiserverLineageDirection!
    $startTimestamp: String
    $pageSize: Int
    $pageToken: String
    $entityResponseFilter: MetadatalineageapiserverEntityType
  ) @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverListEntityLineagesBySecurable(
      input: {
        securableType: $securableType
        securableFullName: $securableFullName
        subsecurableId: $subsecurableId
        lineageDirection: $lineageDirection
        startTimestamp: $startTimestamp
        pageSize: $pageSize
        pageToken: $pageToken
        entityResponseFilter: $entityResponseFilter
      }
    ) {
      lineages {
        ...LineageEntityRelationshipInfoFragment
      }
      nextPageToken
    }
  }
  ${s}
`,p=(0,i.J1)`
  query ListExternalLineagesBySecurable(
    $lineageDirection: MetadatalineageapiserverDirectionLineageDirection!
    $pageSize: Int
    $pageToken: String
    $securableResponseFilter: MetadatalineageapiserverListExternalLineageRelationshipsRequestExternalLineageType
    $objectInfo: MetadatalineageapiserverExternalLineageRelationshipObjectInput!
  ) @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverListExternalLineageRelationships(
      input: {
        objectInfo: $objectInfo
        lineageDirection: $lineageDirection
        pageToken: $pageToken
        pageSize: $pageSize
        securableResponseFilter: $securableResponseFilter
      }
    ) {
      externalLineageRelationships {
        ...ExternalLineageRelationshipInfoFragment
      }
      apiError {
        code
        message
      }
      nextPageToken
    }
  }
  ${d}
`,g=(0,i.J1)`
  query ListColumnLineagesByColumn(
    $tableName: String!
    $acceptedTables: [String!]!
    $lineageDirection: MetadatalineageapiserverLineageDirection!
    $columnName: String!
    $startTimestamp: String
  ) @component(name: "UC.MetadataIntelligenceUI") {
    metadatalineageapiserverListColumnLineages(
      input: {
        acceptedTables: $acceptedTables
        lineageDirection: $lineageDirection
        tableName: $tableName
        startTimestamp: $startTimestamp
        columnName: $columnName
      }
    ) {
      lineages {
        catalogName
        schemaName
        tableName
        tableType
        workspaceId
        path
        name
        lineageTimestamp
        hasPermission
      }
    }
  }
`;function R(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function E(e,t,a,n,r,i,o){try{var s=e[i](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,r)}function A(e){var t;return(t=function*({query:e,client:t,extractResponse:a,extractToken:n,extractContinueFetching:i,extractMetadata:o,variables:s,maxResults:l,maxPages:d}){let u=[],c=s.pageToken??null,p=0,g=null,R=(0,r.W)("databricks.fe.data.defaultLineagePaginationSize",100),E=s.pageSize??R,A=l??1e3,m=d&&d>0&&Number.isFinite(d)?d:1/0,T=!0,S=0;do try{let{data:r}=yield t.query({query:e,variables:{...s,pageSize:E,pageToken:c},fetchPolicy:"network-only"});if(!r)break;let l=a(r);l&&u.push(...l),c=n(r),p=u.length,T=!i||i(r),g=o?o(g,r):g,S++}catch(e){throw e}while(c&&p<A&&S<m&&T);return{response:u,pageToken:c,metadata:g}},function(){var e=this,a=arguments;return new Promise(function(n,r){var i=t.apply(e,a);function o(e){E(i,n,r,o,s,"next",e)}function s(e){E(i,n,r,o,s,"throw",e)}o(void 0)})}).apply(this,arguments)}let m={listSecurableBySecurable:(e,t,a)=>{let i=Math.max((0,r.W)("databricks.fe.discovery.pagesToFetchAllAssets",2),1),o=t.securableResponseFilter===n.osA.ALL_ASSETS_FLATTENED?i:void 0;return A({client:e,query:u,variables:t,extractResponse:e=>e.metadatalineageapiserverListSecurableLineagesBySecurable?.lineages??[],extractToken:e=>e.metadatalineageapiserverListSecurableLineagesBySecurable?.nextPageToken??null,maxResults:o?1/0:a,maxPages:o})},listEntityBySecurable:(e,t,a)=>A({client:e,query:c,variables:t,extractResponse:e=>e.metadatalineageapiserverListEntityLineagesBySecurable?.lineages??[],extractToken:e=>e.metadatalineageapiserverListEntityLineagesBySecurable?.nextPageToken??null,maxResults:a}),listColumnLineage:(e,t)=>(function(e){var t;return(t=function*({query:e,client:t,variables:a,extractResponse:n}){try{let{data:r}=yield t.query({query:e,variables:a,fetchPolicy:"network-only"});return n(r)}catch(e){throw e}},function(){var e=this,a=arguments;return new Promise(function(n,r){var i=t.apply(e,a);function o(e){R(i,n,r,o,s,"next",e)}function s(e){R(i,n,r,o,s,"throw",e)}o(void 0)})}).apply(this,arguments)})({client:e,query:g,variables:t,extractResponse:e=>e?.metadatalineageapiserverListColumnLineages?.lineages??[]}),listExternalLineage:(e,t,a)=>A({client:e,query:p,variables:t,extractResponse:e=>e?.metadatalineageapiserverListExternalLineageRelationships?.externalLineageRelationships??[],extractToken:e=>e.metadatalineageapiserverListExternalLineageRelationships?.nextPageToken??null,maxResults:a})}},862715:(e,t,a)=>{a.d(t,{W:()=>c});var n=a(926518),r=a(624513),i=a(361424),o=a(106049),s=a(184991),l=a(328762),d=a(133742),u=a(684228);function c({field:e,format:t,legacyFormat:a,columnSchema:p,locale:g,formatTemplate:R}){let E=(0,u.N)(e.fieldName),A=p?.type;if((0,o.gW)(A)||!A&&"quantitative"===e.scale.type){if((0,n.F)(t))return`${d.sf}(${E}, ${JSON.stringify({format:t,locale:g,formatTemplate:R})})`;if(a?.numberFormat?.format&&a?.numberFormat?.formatType){let e=a.numberFormat;return`${e.formatType}(${E}, '${e.format}')`}let e=(0,l.kz)(A);return`${d.sf}(${E}, ${JSON.stringify({format:e,locale:g,formatTemplate:R})})`}if((0,o.L9)(A)||!A&&"temporal"===e.scale.type){let n=(0,s.OU)((0,i.v)(e,p));if((0,r.o)(t))return`${d.oj}(${E}, ${JSON.stringify({format:t,columnType:A,binFunction:n,locale:g,formatTemplate:R})})`;if(a?.timeFormat?.format&&a?.timeFormat?.formatType){let e=a.timeFormat;return`${e.formatType}(${E}, '${e.format}')`}let o=(0,l.xb)(A);return`${d.oj}(${E}, ${JSON.stringify({format:o,columnType:A,binFunction:n,locale:g,formatTemplate:R})})`}if("boolean"===A&&(t||R))return`${d.TT}(${E}, ${JSON.stringify({format:t,formatTemplate:R})})`;if(R)return`${d.Z3}(${E}, ${JSON.stringify({formatTemplate:R})})`;return E}},931645:(e,t,a)=>{a.d(t,{xP:()=>c,yo:()=>p});let n=()=>{},r=[],i=[],o=!1,s=n;function l(e){e.forEach(e=>{try{e.fn(),e.resolve()}catch(t){e.reject(t)}})}function d(){o=!1;let[e,t]=[r,i];r=[],i=[];let a=s;try{let a=performance.now();l(e),performance.measure("fastdom-measure",{start:a,end:performance.now(),detail:{tasks:e.length}}),a=performance.now(),l(t),performance.measure("fastdom-update",{start:a,end:performance.now(),detail:{tasks:t.length}})}finally{a()}}function u(e,t){let a,l=new Promise((r,i)=>{a={fn:e,resolve:r,reject:i},t.push(a),o||(o=!0,s=globalThis.__perfHooks?.rit?.blockActiveInteractions?.("wait-for-fastdom")??n,requestAnimationFrame(d))});return l.cancel=()=>{r=r.filter(e=>e!==a),i=i.filter(e=>e!==a)},l}function c(e){return u(e,r)}function p(e){return u(e,i)}},988651:(e,t,a)=>{a.d(t,{A:()=>R,m:()=>g});var n=a(610435),r=a(794778),i=a(988744),o=a(783772),s=a.n(o),l=a(913640),d=a.n(l),u=a(692738),c=a(382908);let p={Row:r.A,Col:i.A};function g({layout:e="vertical",label:t,labelProps:a,disabled:r=!1,children:i,addonAfter:o}){if("vertical"===e&&t)return(0,n.FD)("div",{className:"visualization-editor-control-label visualization-editor-control-label-vertical",children:[(0,n.Y)(p.Row,{children:(0,n.FD)(p.Col,{flex:"auto",children:[(0,n.Y)("label",{...a,children:(0,n.Y)(c.o.Text,{disabled:r,children:t})}),o]})}),i]});if("horizontal"===e&&t)return(0,n.FD)(p.Row,{className:"visualization-editor-control-label visualization-editor-control-label-horizontal",align:"middle",gutter:15,children:[(0,n.FD)(p.Col,{span:12,children:[(0,n.Y)("label",{...a,children:(0,n.Y)(c.o.Text,{disabled:r,children:t})}),o]}),(0,n.Y)(p.Col,{flex:"auto",children:i})]});return(0,n.Y)(n.FK,{children:i})}function R(e){return d()(function({className:t,id:a,layout:r,label:i,labelProps:o,disabled:l,...d}){let c=(0,u.useMemo)(()=>`visualization-editor-control-${Math.random().toString(36).substr(2,10)}`,[]);o={...o,htmlFor:a||c};let p={className:s()("visualization-editor-input",t),id:o.htmlFor,disabled:l,...d};return(0,n.Y)(g,{layout:r,label:i,labelProps:o,disabled:l,children:(0,n.Y)(e,{...p})})},e)}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/62874.95f710cb37.chunk.js.map