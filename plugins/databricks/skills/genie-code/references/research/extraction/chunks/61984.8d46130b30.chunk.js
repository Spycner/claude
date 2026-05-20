"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[61984],{95685:(e,t,r)=>{r.d(t,{X:()=>a,c:()=>o});var n=r(141078);let a=(0,n.J1)`
  query CdpInstanceQuery @component(name: "BryantPark.Core") {
    cdp_getCdpInstance {
      cdpId
      defaultDataModelId
      catalogName
      defaultWarehouseId
    }
  }
`,o=e=>(0,n.IT)(a,e)},135221:(e,t,r)=>{let n;r.d(t,{f:()=>m,$:()=>b});var a=r(610435),o=r(692738),i=r(829478);let d=new Set,l=()=>n,s=e=>{e!==n&&(n=e,d.forEach(e=>e()))},c=e=>(d.add(e),()=>d.delete(e));var u=r(388541),p=r(141078);let f=(0,p.J1)`
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
`;var g=r(95685);let h=(0,o.createContext)(void 0);function m({children:e}){let t,{data:r,loading:n,error:d}=(0,g.c)(),b=r?.cdp_getCdpInstance?.cdpId??"",y=r?.cdp_getCdpInstance?.defaultDataModelId??"",v=r?.cdp_getCdpInstance?.catalogName??void 0,M=r?.cdp_getCdpInstance?.defaultWarehouseId??void 0,C=(0,i.useSyncExternalStore)(c,l);(0,o.useEffect)(()=>{y&&void 0===l()&&s(y)},[y]);let k=(0,o.useCallback)(e=>{s(e)},[]),x=C??y,{data:I,loading:Y,error:S}=(0,p.IT)(f,{...t,variables:{cdpId:b,pageSize:200},skip:!b||t?.skip}),w=(0,o.useMemo)(()=>{let e=I?.cdp_dataModels?.dataModels;if(!e)return[];return e.filter(e=>null!==e.id&&void 0!==e.id).map(e=>({id:e.id,name:e.name??null,defaultProfileEntity:e.defaultProfileEntity}))},[I]),{data:P,loading:z,error:$}=(0,u.O)(x,b),T=P?.cdp_dataModel??void 0,D=(0,o.useMemo)(()=>{if(!T?.defaultProfileEntity||!T.profileEntities)return;let e=T.profileEntities.find(e=>e.tablePath===T.defaultProfileEntity);if(!e?.tablePath)return;return function(e){let t=e.split(".");if(3!==t.length)return;let[r,n,a]=t;return{fullName:e,catalog:r,schema:n,table:a}}(e.tablePath)},[T]),_=n||Y||z,E=d??S??$,R=(0,o.useMemo)(()=>({cdpId:b||void 0,dataModelId:x,catalogName:v,defaultWarehouseId:M,dataModel:T,profileEntity:D,instanceLoading:n,isLoading:_,error:E,availableDataModels:w,setSelectedDataModelId:k}),[b,x,v,M,T,D,n,_,E,w,k]);return(0,a.Y)(h.Provider,{value:R,children:e})}function b(){let e=(0,o.useContext)(h);if(void 0===e)throw Error("useCdp must be used within a CdpProvider");return e}},388541:(e,t,r)=>{r.d(t,{O:()=>o});var n=r(141078);let a=(0,n.J1)`
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
`,o=(e,t,r)=>(0,n.IT)(a,{...r,variables:{id:e,cdpId:t},skip:!e||!t||r?.skip})},547330:(e,t,r)=>{r.d(t,{K:()=>o});var n=r(692738),a=r(686560);function o(){let[e]=(0,n.useState)(()=>{let e;if(window.Cypress)return!1;if("development"===(e=(0,a.d)("deploymentMode","unknown"))||"staging"===e)return!0;return"true"===window.localStorage.getItem("forceCdpInternalTools")});return e}},761984:(e,t,r)=>{r.r(t),r.d(t,{RouteComponent:()=>W});var n=r(610435),a=r(692738),o=r(12414),i=r(959240),d=r(706274),l=r(268334),s=r(648782),c=r(858383),u=r(708360),p=r(497895),f=r(79570),g=r(126927),h=r(768583),m=r(990272),b=r(722651),y=r(505544),v=r(298734),M=r(908712),C=r(342411),k=r(822566),x=r(878723),I=r(48153),Y=r(224687),S=r(733427),w=r(612459),P=r(81547);function z(){let e=(0,C.tz)(),{theme:t}=(0,p.wn)(),r=(0,k.E)(),o=(0,a.useMemo)(()=>({isExpanded:!r,isNavMenuOpen:!1,menuMode:r?x.zF.Collapsed:x.zF.Expanded,onPanelClick:()=>{},onMenuModeChange:()=>{},onNavMenuOpenChange:()=>{},onNavMenuSelect:()=>{}}),[r]),i=(0,a.useMemo)(()=>({borderRadius:t.borders.borderRadiusSm,boxSizing:"border-box",height:t.spacing.xl+t.spacing.xs,padding:r?0:`0 ${t.spacing.md}px`,justifyContent:r?"center":void 0,textDecoration:"none",color:`${t.colors.textPrimary} !important`,"& .nav-item-icon":{color:`${t.colors.textPrimary} !important`},"& > span:last-of-type":{fontWeight:t.typography.typographyRegularFontWeight,color:`${t.colors.textPrimary} !important`},'&[aria-current="true"] > span:last-of-type':{fontWeight:t.typography.typographyBoldFontWeight},'&&:hover, &&:focus-visible, &&[aria-current="true"]':{backgroundColor:t.isDarkMode?"rgba(255, 255, 255, 0.05)":"rgba(22, 22, 22, 0.05)"},"& a, & a:hover, & a:visited":{textDecoration:"none"}}),[t,r]),d=(e,t,a,o)=>{let d=(0,n.Y)(P.j,{id:e,icon:t,name:a,to:o,customStyles:i});if(!r)return d;return(0,n.Y)(f.m,{componentId:`cdp.configure-sub-sidebar.${e}.tooltip`,content:a,side:"right",children:(0,n.Y)("span",{css:{display:"block"},children:d})})};return(0,n.Y)(I.I.Provider,{value:o,children:(0,n.FD)("nav",{"data-testid":"configure-sub-sidebar",css:{width:r?60:220,flexShrink:0,height:"100%",borderRight:`1px solid ${t.colors.borderDecorative}`,backgroundColor:t.colors.backgroundPrimary,paddingTop:t.spacing.lg,paddingBottom:t.spacing.lg,paddingLeft:r?t.spacing.sm:t.spacing.lg,paddingRight:r?t.spacing.sm:t.spacing.md,display:"flex",flexDirection:"column",gap:0,overflowY:"auto",transition:"width 150ms ease, padding 150ms ease"},children:[d(Y.B.CdpConnectors,(0,n.Y)(h.A,{}),e.formatMessage({id:"iWuEHt",defaultMessage:"Connectors"}),u.zS.connectors),(0,w.r)()&&d(Y.B.CdpConnectorRules,(0,n.Y)(m.A,{}),e.formatMessage({id:"oGKRwg",defaultMessage:"Connector Rules"}),u.zS.connectorRules),d(Y.B.CdpAttributes,(0,n.Y)(b.A,{}),e.formatMessage({id:"y7PGFH",defaultMessage:"Attributes"}),u.zS.attributes),d(Y.B.CdpDataModel,(0,n.Y)(y.A,{}),e.formatMessage({id:"Db0HOF",defaultMessage:"Data Model"}),u.zS.dataModel),(0,n.Y)(S.w,{}),d(Y.B.CdpSettings,(0,n.Y)(v.A,{}),e.formatMessage({id:"S0OslE",defaultMessage:"Settings"}),u.zS.settings),((e,a,o)=>{let d=(0,n.FD)("a",{href:o,target:"_blank",rel:"noopener noreferrer",css:{...i,display:"flex",alignItems:"center",gap:t.spacing.sm},children:[(0,n.Y)("span",{css:{display:"flex",flexShrink:0},children:e}),!r&&(0,n.Y)("span",{css:{flex:1},children:a}),!r&&(0,n.Y)(g.A,{css:{flexShrink:0,opacity:.6,width:14,height:14}})]});if(!r)return d;return(0,n.Y)(f.m,{componentId:"cdp.configure-sub-sidebar.view-docs.tooltip",content:a,side:"right",children:(0,n.Y)("span",{css:{display:"block"},children:d})})})((0,n.Y)(M.A,{}),e.formatMessage({id:"3DpHf/",defaultMessage:"View docs"}),"https://docs.google.com/document/d/16GzMcTg3KmsLAotlE6paZAUFLi1R62qFNMLIT0J9yrU/edit?usp=sharing")]})})}var $=r(135221),T=r(894362),D=r(547330);function _(e,t,r,n,a,o,i){try{var d=e[o](i),l=d.value}catch(e){r(e);return}d.done?t(l):Promise.resolve(l).then(n,a)}function E(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function i(e){_(o,n,a,i,d,"next",e)}function d(e){_(o,n,a,i,d,"throw",e)}i(void 0)})}}let R=a.lazy(()=>E(function*(){return{default:(yield(()=>{let e=()=>Promise.all([r.e(62280),r.e(62394),r.e(32305),r.e(67590),r.e(51545),r.e(6932),r.e(18294),r.e(5033),r.e(1291),r.e(97768),r.e(24685),r.e(99406),r.e(78580),r.e(55616),r.e(3330),r.e(59316),r.e(37797),r.e(11184),r.e(52426),r.e(12514),r.e(22886),r.e(45854),r.e(72263),r.e(86412),r.e(35747),r.e(6198),r.e(77265),r.e(82600),r.e(42797),r.e(68775),r.e(11022),r.e(49029),r.e(10133),r.e(43927),r.e(18650),r.e(87122),r.e(12674),r.e(4828),r.e(84283),r.e(98317),r.e(43587),r.e(35711),r.e(23197),r.e(10095),r.e(62621),r.e(45738),r.e(19604),r.e(356),r.e(17292),r.e(34607),r.e(54694),r.e(65484),r.e(54894),r.e(79331),r.e(45524),r.e(55851),r.e(70231),r.e(23145),r.e(14528),r.e(59498),r.e(13691),r.e(35094),r.e(97091),r.e(56129),r.e(63511),r.e(26537),r.e(35684),r.e(71329)]).then(r.bind(r,421803));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(421803,"../agent/CdpPageContext","lazy",e);return e()})()).CdpPageContext}})()),F=a.lazy(()=>E(function*(){return{default:(yield(()=>{let e=()=>Promise.all([r.e(62280),r.e(62394),r.e(6932),r.e(20022),r.e(1291),r.e(97768),r.e(24685),r.e(59276),r.e(99406),r.e(21234),r.e(92170),r.e(1990),r.e(44004),r.e(78632),r.e(39676),r.e(31813),r.e(51362),r.e(26881),r.e(60675),r.e(25733),r.e(68775),r.e(11022),r.e(43927),r.e(18650),r.e(87122),r.e(12674),r.e(4828),r.e(90489),r.e(64666),r.e(30259),r.e(13962),r.e(22831),r.e(80086),r.e(51818),r.e(87385),r.e(58415),r.e(19767),r.e(11170),r.e(24399),r.e(79579),r.e(794),r.e(70547)]).then(r.bind(r,219040));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(219040,"../internal_tools/CdpInternalTools","lazy",e);return e()})()).CdpInternalTools}})());function A(){let e,t,r,a,o,i=(e=(0,d.K)(`${u.zS.connectors}/*`),t=(0,d.K)(`${u.zS.connectorRules}/*`),r=(0,d.K)(`${u.zS.attributes}/*`),a=(0,d.K)(`${u.zS.dataModel}/*`),o=(0,d.K)(`${u.zS.settings}/*`),e||t||r||a||o),{instanceLoading:c}=(0,$.$)();if(c)return(0,n.Y)(l.WL,{});return(0,n.FD)("div",{style:{height:"100%",display:"flex",flexDirection:"row"},children:[i&&(0,n.Y)(z,{}),(0,n.Y)("div",{style:{flex:1,display:"flex",flexDirection:"column",minWidth:0},children:(0,n.Y)(s.sv,{})})]})}function B(){let{isLoading:e}=(0,$.$)();if((0,c.zy)(e=>e.pathname).startsWith(u.zS.setup))return(0,n.Y)(s.sv,{});if(e)return(0,n.Y)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:(0,n.Y)(o.y,{})});return(0,n.Y)(A,{})}function K(){let{cdpId:e,isLoading:t}=(0,$.$)(),r=(0,D.K)(),a=!t&&!!e;return(0,n.FD)(n.FK,{children:[a&&(0,n.Y)(i.t,{fallback:null,children:(0,n.Y)(R,{})}),a&&r&&(0,n.Y)(i.t,{fallback:null,children:(0,n.Y)(F,{})}),(0,n.Y)(B,{})]})}let W=()=>(0,n.Y)(T.b,{children:(0,n.Y)($.f,{children:(0,n.Y)(K,{})})})},768583:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(610435),a=r(692738),o=r(375214);function i(e){return(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,n.Y)("path",{fill:"currentColor",d:"M4.5 2.5h9v11h-9V11H3v3.25c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75V1.75a.75.75 0 0 0-.75-.75H3.75a.75.75 0 0 0-.75.75V5h1.5z"}),(0,n.Y)("path",{fill:"currentColor",d:"M12.06 8 8.03 3.97 6.97 5.03l2.22 2.22H1v1.5h8.19l-2.22 2.22 1.06 1.06z"})]})}let d=(0,a.forwardRef)((e,t)=>(0,n.Y)(o.I,{ref:t,...e,component:i}));d.displayName="ArrowInIcon";let l=d},894362:(e,t,r)=>{r.d(t,{b:()=>l});var n=r(610435),a=r(529070),o=r(956935),i=r(692738),d=r(497895);let l=({children:e})=>{let{theme:t}=(0,d.wn)(),r=(0,i.useMemo)(()=>({...t,colors:{...t.colors},borders:{...t.borders,borderRadiusSm:8,borderRadiusMd:12,borderRadiusLg:16}}),[t]);return(0,n.FD)(a.a,{theme:r,children:[(0,n.Y)(o.mL,{styles:[(0,o.AH)(".du-bois-light-input-affix-wrapper{border-radius:",r.borders.borderRadiusSm,"px !important;}.du-bois-light-checkbox-inner.du-bois-light-checkbox-inner.du-bois-light-checkbox-inner,.du-bois-dark-checkbox-inner.du-bois-dark-checkbox-inner.du-bois-dark-checkbox-inner{border-radius:4px !important;}")]}),e]})}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/61984.8d46130b30.chunk.js.map