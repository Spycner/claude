"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[61149],{26446:(e,t,s)=>{s.d(t,{HT:()=>c,M8:()=>d,Pf:()=>o,bp:()=>l,gb:()=>r,iN:()=>u,pP:()=>a,xB:()=>g});let r=1e3,a={enableAccountGroups:!1,enableAccountServicePrincipals:!1,enableAccountUsers:!1,enableWorkspaceGroups:!1,enableWorkspaceServicePrincipals:!1,enableWorkspaceUsers:!1},i=/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,n={admins:"Admins",users:"All workspace users","account users":"All account users"},o=e=>{if(!e)return e;return n[e]??e},l=e=>{let t=new Map;return e.forEach(e=>{let s=c(e)||e.name;t.has(s)||t.set(s,[]),t.get(s)?.push(e)}),t},u=e=>{switch(e.kind){case"user":return e.fullName;case"serviceprincipal":return e.name;case"group":return e.displayName;default:return""}},c=e=>{switch(e.kind){case"user":case"group":return e.name||"";case"serviceprincipal":return e.applicationId||"";default:return""}},d=({uniqueName:e,id:t,kind:s,displayName:r})=>{switch(s){case"user":return{id:t||"",optionId:`user.${t}`,kind:s,name:e||"",fullName:r||"",title:""};case"serviceprincipal":return{id:t||"",optionId:`serviceprincipal.${t}`,kind:s,name:r||"",applicationId:e||"",title:""};case"group":return{id:t||"",optionId:`group.${t}`,kind:s,name:e||"",displayName:o(e||""),title:""};default:return}};function g(e){return e?i.test(e)?"serviceprincipal":"user":void 0}},140718:(e,t,s)=>{s.d(t,{XA:()=>b,lQ:()=>y,wS:()=>A});var r=s(610435),a=s(692738),i=s(46e3),n=s(806773),o=s(370427),l=s(907046),u=s(99442),c=s(224098),d=s(545251),g=s(53333),f=s(661748);let m=(0,a.createContext)(void 0),p=[c.s7.OnValueChange,c.s7.OnView],h=[c.s7.OnValueChange],v=(e,t)=>{for(let s of a.Children.toArray(e))if(a.isValidElement(s)){if(s.type===A&&s.props.value===t)return s;if(s.props.children){let e=v(s.props.children,t);if(e)return e}}},M=(e,t)=>{let s=v(e,t);if(a.isValidElement(s))return s.props.children;return""},b=(0,a.forwardRef)(({defaultValue:e,name:t,placeholder:s,children:o,contentProps:l,onChange:d,onOpenChange:v,id:b,label:A,value:y,validationState:k,forceCloseOnEscape:x,componentId:P,analyticsEvents:C,valueHasNoPii:F,...S},N)=>{let L=(0,f.W)("databricks.fe.observability.defaultComponentView.simpleSelect",!1),[Y]=(0,a.useState)(()=>{if(y)return M(o,y);return""}),I=(0,a.useRef)(null);(0,a.useImperativeHandle)(N,()=>I.current,[]);let $=(0,a.useRef)(y),[T,V]=(0,a.useState)(y),[j,B]=(0,a.useState)(Y),H=void 0!==y,D=(0,a.useMemo)(()=>C??(L?p:h),[C,L]),E=(0,c.ei)({componentType:c.v_.SimpleSelect,componentId:P,analyticsEvents:D,valueHasNoPii:F}),{elementRef:O}=(0,g.z)({onView:E.onView,value:y??e});(0,a.useEffect)(()=>{void 0!==y&&y!==$.current&&(V(y),$.current=y)},[y]),(0,a.useEffect)(()=>{if(H)return;let t=I.current,s=e||t?.value||"";V(s),$.current=s},[H,e,y]),(0,a.useEffect)(()=>{B(M(o,T||""))},[T,o]);let _=(0,a.useCallback)(e=>{E.onValueChange(e),I.current?.setAttribute("value",e||""),V(e),B(M(o,e)),d&&d({target:{name:t,type:"select",value:e},type:"change"})},[E,o,d,t]),z=(0,a.useMemo)(()=>({value:T,onChange:_}),[T,_]),R=(0,a.useCallback)(()=>{_("")},[_]);return(0,r.Y)(m.Provider,{value:z,children:(0,r.Y)(i.l,{componentId:void 0,value:T,placeholder:s,label:A??S["aria-label"],id:b,children:(0,r.FD)(w,{onOpenChange:v,children:[(0,r.Y)(u.b,{ref:O,...S,validationState:k,onClear:R,id:b,value:T,...E.dataComponentProps,children:j||s}),(0,r.Y)("input",{type:"hidden",ref:I}),(0,r.Y)(n.g,{forceCloseOnEscape:x,...l,children:o})]})})})}),w=({children:e,onOpenChange:t})=>{let{isOpen:s}=(0,d.w)();return(0,a.useEffect)(()=>{t&&t(!!s)},[s,t]),(0,r.Y)(r.FK,{children:e})},A=(0,a.forwardRef)(({value:e,children:t,...s},i)=>{let n=(0,a.useContext)(m);if(!n)throw Error("SimpleSelectOption must be used within a SimpleSelect");let{onChange:l}=n,u=(0,a.useCallback)(({value:e})=>{l(e)},[l]);return(0,r.Y)(o.O,{...s,ref:i,value:e,onChange:u,children:t})}),y=({children:e,label:t,...s})=>{if(!(0,a.useContext)(m))throw Error("SimpleSelectOptionGroup must be used within a SimpleSelect");return(0,r.Y)(l.n,{...s,name:t,children:e})}},142744:(e,t,s)=>{s.d(t,{V:()=>a});var r=s(190656);function a(e,t){if(!(0,r.f)())return!0;if(e&&e.permissions)return e.permissions.includes(t)}},241393:(e,t,s)=>{s.d(t,{A:()=>l});var r=s(610435),a=s(692738),i=s(375214);function n(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",d:"M8 1a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 8 1M8 6.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M8 11.5A1.75 1.75 0 1 0 8 15a1.75 1.75 0 0 0 0-3.5"})})}let o=(0,a.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:n}));o.displayName="OverflowIcon";let l=o},295423:(e,t,s)=>{s.d(t,{f:()=>u});var r=s(692738),a=s(671244),i=s(653542),n=s(49586),o=s(209908);let l=50,u=({enableAccountGroups:e=!1,enableAccountServicePrincipals:t=!1,enableAccountUsers:s=!1,enableWorkspaceGroups:u=!0,enableWorkspaceServicePrincipals:c=!0,enableWorkspaceUsers:d=!0,filterText:g="",principalIdsForFiltering:f=[],principalUniqueNamesForFiltering:m=[],limit:p=l,useLite:h,skip:v=!1,isCache:M=!1}={})=>{let b=(0,o.VM)({ids:f,uniqueNames:m}),w=(0,o.L5)({ids:f,uniqueNames:m}),{subjects:A,isLoading:y,error:k,hasNextPage:x}=(0,n.zo)({source:"account",filter:g,filterPredicate:b,first:p,skip:!s||v,useLite:h,isCache:M}),{subjects:P,isLoading:C,error:F,hasNextPage:S}=(0,a.Bi)({source:"account",filter:g,filterPredicate:w,first:p,skip:!e||v,useLite:h,isCache:M}),{subjects:N,isLoading:L,error:Y,hasNextPage:I}=(0,i.Q_)({source:"account",filter:g,filterPredicate:b,first:p,skip:!t||v,useLite:h,isCache:M}),{subjects:$,isLoading:T,error:V,hasNextPage:j}=(0,n.zo)({source:"workspace",filter:g,filterPredicate:b,first:p,skip:!d||v,useLite:h,isCache:M}),{subjects:B,isLoading:H,error:D,hasNextPage:E}=(0,a.Bi)({source:"workspace",filter:g,filterPredicate:w,first:p,skip:!u||v,useLite:h,isCache:M}),{subjects:O,isLoading:_,error:z,hasNextPage:R}=(0,i.Q_)({source:"workspace",filter:g,filterPredicate:b,first:p,skip:!c||v,useLite:h,isCache:M}),U=(0,r.useMemo)(()=>{let t=[...B,...P];if(e&&u)return t.filter((e,t,s)=>t===s.findIndex(t=>t.id===e.id));return t},[P,e,u,B]),J=(0,r.useMemo)(()=>{let e=[...O,...N];if(t&&c)return e.filter((e,t,s)=>t===s.findIndex(t=>t.id===e.id));return e},[N,t,c,O]),W=(0,r.useMemo)(()=>{let e=[...$,...A];if(s&&d)return e.filter((e,t,s)=>t===s.findIndex(t=>t.id===e.id));return e},[A,s,d,$]),{subjects:G,hasNextPage:q}=(0,r.useMemo)(()=>(0,o.GF)(g,p,U,J,W),[g,p,U,J,W]),K=(0,r.useMemo)(()=>({accountGroups:C,accountServicePrincipals:L,accountUsers:y,groups:H,servicePrincipals:_,users:T,some:C||L||y||H||_||T}),[C,L,y,H,_,T]),Q=(0,r.useMemo)(()=>({accountGroups:F??null,accountServicePrincipals:Y??null,accountUsers:k??null,groups:D??null,servicePrincipals:z??null,users:V??null}),[F,Y,k,D,z,V]);return{allSubjectsMap:(0,r.useMemo)(()=>(0,o.ne)(U,J,W),[U,J,W]),errors:Q,hasNextPage:!!(G.length===p&&(x||S||I||j||E||R)||q),isLoading:K,subjects:G}}},338308:(e,t,s)=>{s.d(t,{P:()=>p,t:()=>h});var r=s(610435);s(692738);var a=s(497895),i=s(382908),n=s(77959),o=s(79570),l=s(802582),u=s(295169),c=s(342411),d=s(742259),g=s(26446),f=s(929117),m=s(691069);let p=({subject:e,defaultLabel:t,showIcon:s=!0,tooltipPlacement:u="top",showTooltip:d=!0,customTooltipContent:f,textProps:p,disableLegacy:h=!1,tooltipSide:M="top",defaultIconKind:b,...w})=>{let{theme:A}=(0,a.wn)(),y=(0,c.tz)(),k={color:A.colors.textSecondary,alignItems:"center",display:"flex",justifyContent:"center"},x=e?(0,g.iN)(e):t||"",P=e&&(0,g.HT)(e),C=f??(e&&P&&(0,r.Y)(v,{kind:e.kind,displayName:x,uniqueName:P})),F=(0,r.Y)(i.o.Text,{...p,children:x||P}),S=!f&&(!e||"group"===e.kind||!d),N=e?.kind||b,L=(0,r.FD)("div",{css:{display:"flex",gap:A.spacing.xs,alignItems:"center",alignSelf:"center",maxWidth:"fit-content",...!S&&{"&:hover":{cursor:"pointer"}}},...w,children:[s&&t?N?(0,r.Y)(m.C,{kind:N,style:k}):(0,r.Y)(n.A,{title:y.formatMessage({id:"XJ8Qku",defaultMessage:"Generic Principal"}),css:k}):null,F]});if(S)return(0,r.Y)(r.FK,{children:L});return h?(0,r.Y)(o.m,{componentId:"codegen_web-shared_src_subject-label_principallabel.tsx_97",side:M,content:C,children:L}):(0,r.Y)(l.p,{placement:u,title:C,children:L})},h=({uniqueName:e,showIcon:t=!0,tooltipPlacement:s="top",accountPrincipalOnly:a=!1,onNameCollision:i,loadingElement:n,useCache:o,disableLegacyPrincipleLabelTooltip:l=!1,loadingStateOnlyForUuidName:g=!1,defaultIconKind:m})=>{let{isLoading:h,uniqueNameToSubjectsMap:v}=(0,d.v)({enableAccountUsers:a,enableAccountServicePrincipals:a,enableAccountGroups:!0,enableWorkspaceUsers:!a,enableWorkspaceServicePrincipals:!a,enableWorkspaceGroups:!a,useLite:!0,principalUniqueNamesForFiltering:[e],isCache:o}),M=!RegExp("^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$").test(e)&&g,b=!Object.values(h).every(e=>!1===e);if(!v.has(e)&&!M&&b)return n??(0,r.Y)(u.x,{loadingDescription:f.z.RICH_SERVICE_PRINCIPAL});{let a=v.get(e),n=a?.length===1?a?.[0]:void 0;return a&&a.length>1&&i?.(),(0,r.Y)(p,{subject:n,defaultLabel:e,showIcon:t,tooltipPlacement:s,customTooltipContent:M&&b?(0,r.Y)(c.sA,{id:"uUqfrP",defaultMessage:"Loading subject display name ..."}):void 0,disableLegacy:l,defaultIconKind:m})}},v=({kind:e,displayName:t,uniqueName:s})=>{if("group"===e)return null;let a="serviceprincipal"===e;return t?(0,r.Y)(c.sA,{id:"suqEOj",defaultMessage:"{isSP, select, true {Service principal's UUID} other {User's email}}: {username}",values:{isSP:a,username:s}}):a?(0,r.Y)(c.sA,{id:"Au1O0S",defaultMessage:"This service principal doesn't have a display name"}):(0,r.Y)(c.sA,{id:"Ie1iLy",defaultMessage:"This user did not configure their full name"})}},375046:(e,t,s)=>{s.d(t,{z:()=>r});function r(e){return!!e}},577780:(e,t,s)=>{s.d(t,{n:()=>m});var r=s(610435),a=s(956935),i=s(91958),n=s.n(i),o=s(692738),l=s(630169),u=s(497895),c=s(465946),d=s(639712);let g=n()(e=>{let t;return t={marginRight:0,color:e.colors.actionTertiaryTextDefault,cursor:"pointer","&:focus":{color:e.colors.actionTertiaryTextDefault},"&:hover":{color:e.colors.actionTertiaryTextHover},"&:active":{color:e.colors.actionTertiaryTextPress}},(0,a.AH)(t)}),f=n()((e,t)=>({display:"inline-flex",alignItems:"center",gap:t?0:e.spacing.sm,maxWidth:"100%"}),(e,t)=>`${(0,d.H6)(e)}|${t}`),m=({children:e,noMargin:t=!1,visibleItemsCount:s=1,...a})=>{let{theme:i}=(0,u.wn)(),n=e&&o.Children.toArray(e);if(!n||0===n.length)return(0,r.Y)(r.FK,{children:e});let d=n.slice(0,s),m=n.slice(s);return 0===m.length?(0,r.Y)(r.FK,{children:d}):(0,r.FD)("div",{...a,css:f(i,t),children:[d,m.length>0&&(0,r.Y)(l.c,{items:m,renderLabel:e=>(0,r.Y)(c.v,{componentId:"codegen_design-system_src_design-system_overflow_overflow.tsx_28",css:g(i),children:e}),...a})]})}},605107:(e,t,s)=>{s.d(t,{X:()=>i});var r=s(610435),a=s(497895);let i=({children:e,...t})=>{let{theme:s}=(0,a.wn)();return(0,r.Y)("div",{...t,css:{display:"flex",flexDirection:"row",alignItems:"flex-start",padding:`${s.spacing.xs}px ${s.spacing.lg/2}px`,alignSelf:"stretch",fontWeight:400,color:s.colors.textSecondary},children:e})}},691069:(e,t,s)=>{s.d(t,{C:()=>u});var r=s(610435);s(692738);var a=s(497895),i=s(465082),n=s(26971),o=s(777517),l=s(342411);let u=({kind:e,disabled:t,style:s})=>{let{theme:u}=(0,a.wn)(),c=(0,l.tz)(),d={alignItems:"center",background:t?void 0:u.colors.backgroundSecondary,borderRadius:30,color:t?u.colors.actionDisabledText:u.colors.textSecondary,display:"flex",fontSize:20,height:30,justifyContent:"center",width:30};switch(e){case"user":return(0,r.Y)(i.A,{title:c.formatMessage({id:"9vv8Gs",defaultMessage:"User"}),css:s||d});case"group":return(0,r.Y)(n.A,{title:c.formatMessage({id:"Qzw3C/",defaultMessage:"Group"}),css:s||d});case"serviceprincipal":return(0,r.Y)(o.A,{title:c.formatMessage({id:"QrVB43",defaultMessage:"Service Principal"}),css:s||d});default:return null}}},691902:(e,t,s)=>{s.d(t,{c:()=>i,f:()=>n});var r=s(610435),a=s(497895);function i({size:e="lg"}){let{theme:t}=(0,a.wn)();return(0,r.Y)("div",{role:"separator",css:{display:"flex",clear:"both",width:"100%",minWidth:"100%","&::before, &::after":{position:"relative",width:"50%",borderBlockStart:"1px solid transparent",borderBlockStartColor:t.colors.border,borderBlockEnd:0,transform:"translateY(50%)",content:"''"},marginTop:"number"==typeof e?`${e}px`:t.spacing[e],marginBottom:"number"==typeof e?`${e}px`:t.spacing[e]}})}function n(){return(0,r.Y)(i,{size:10})}},712520:(e,t,s)=>{s.d(t,{A:()=>i,k:()=>a});var r=s(956935);let a=10,i={pageHeader:(0,r.AH)("display:flex;padding:12px 0;align-items:center;"),pageButtons:(0,r.AH)("> *:not(:last-child){margin-right:",a,"px;}margin-left:auto;display:flex;"),pageWrapper:(0,r.AH)("display:flex;flex-direction:column;height:100%;width:100%;"),contentWithSidebarContainer:(0,r.AH)(`
    display: flex;
    flex: 1;
    overflow-y: auto;
    height: 100%;
  `),fullHeightContentWrapper:(0,r.AH)("background:white;height:100%;"),sidebar:(e,t=25)=>(0,r.AH)("flex-basis:",t,"vw;overflow-y:auto;padding:12px;border-",e,":1px solid #efefef;"),content:(0,r.AH)("overflow-y:auto;overflow-x:auto;padding:12px;height:100%;"),fullHeightTabs:(0,r.AH)("height:100%;> .ant-tabs-content-holder{height:100%;> .ant-tabs-content{height:100%;}}")}},733052:(e,t,s)=>{s.d(t,{A:()=>i});var r=s(610435);s(692738);var a=s(802582);function i({primary:e=!1,srSilent:t=!1,children:s,placement:n,title:o,dataTestId:l,arrowPointAtCenter:u,...c}){return(0,r.Y)(a.p,{silenceScreenReader:t,useAsLabel:e,placement:n,title:o,dataTestId:l,arrowPointAtCenter:u,...c,children:s})}},742259:(e,t,s)=>{s.d(t,{v:()=>n});var r=s(692738),a=s(26446),i=s(295423);let n=(e={})=>{let t=e.principalUniqueNamesForFiltering?.length??0,s=(0,i.f)(0===t||t>a.gb?{...e,limit:t,...a.pP}:{...e,limit:t}),{subjects:n}=s,o=(0,r.useMemo)(()=>(0,a.bp)(n),[n]);return{...s,uniqueNameToSubjectsMap:o}}},777517:(e,t,s)=>{s.d(t,{A:()=>l});var r=s(610435),a=s(692738),i=s(375214);function n(e){return(0,r.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 0a.75.75 0 0 1 .75.75V3h5.5a.75.75 0 0 1 .75.75V6h.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75H15v2.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V12H.75a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 .75 6H1V3.75A.75.75 0 0 1 1.75 3h5.5V.75A.75.75 0 0 1 8 0M2.5 4.5v9h11v-9zM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6.25 2.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"})})}let o=(0,a.forwardRef)((e,t)=>(0,r.Y)(i.I,{ref:t,...e,component:n}));o.displayName="RobotIcon";let l=o},853762:(e,t,s)=>{s.d(t,{Z:()=>l,f:()=>u});var r=s(610435);s(692738);var a=s(79570),i=s(342411),n=s(834405);let o={noPrefix:e=>({intervals:[{seconds:31536e3,timeAgoMessage:t=>e.formatMessage({id:"NF6ePS",defaultMessage:"{count, plural, =1 {1 year} other {# years}} ago"},{count:t})},{seconds:2592e3,timeAgoMessage:t=>e.formatMessage({id:"N79Rdb",defaultMessage:"{count, plural, =1 {1 month} other {# months}} ago"},{count:t})},{seconds:86400,timeAgoMessage:t=>e.formatMessage({id:"XwD3hV",defaultMessage:"{count, plural, =1 {1 day} other {# days}} ago"},{count:t})},{seconds:3600,timeAgoMessage:t=>e.formatMessage({id:"i1Hj20",defaultMessage:"{count, plural, =1 {1 hour} other {# hours}} ago"},{count:t})},{seconds:60,timeAgoMessage:t=>e.formatMessage({id:"ZO8PZt",defaultMessage:"{count, plural, =1 {1 minute} other {# minutes}} ago"},{count:t})},{seconds:1,timeAgoMessage:t=>e.formatMessage({id:"gQB+Vs",defaultMessage:"{count, plural, =1 {1 second} other {# seconds}} ago"},{count:t})}],justNowMessage:e.formatMessage({id:"ZOsiNc",defaultMessage:"just now"})}),viewed:e=>({intervals:[{seconds:31536e3,timeAgoMessage:t=>e.formatMessage({id:"zu9xi3",defaultMessage:"Viewed {count, plural, =1 {1 year} other {# years}} ago"},{count:t})},{seconds:2592e3,timeAgoMessage:t=>e.formatMessage({id:"FOzgxE",defaultMessage:"Viewed {count, plural, =1 {1 month} other {# months}} ago"},{count:t})},{seconds:86400,timeAgoMessage:t=>e.formatMessage({id:"IwEVOL",defaultMessage:"Viewed {count, plural, =1 {1 day} other {# days}} ago"},{count:t})},{seconds:3600,timeAgoMessage:t=>e.formatMessage({id:"S9xuJ2",defaultMessage:"Viewed {count, plural, =1 {1 hour} other {# hours}} ago"},{count:t})},{seconds:60,timeAgoMessage:t=>e.formatMessage({id:"zcf18B",defaultMessage:"Viewed {count, plural, =1 {1 minute} other {# minutes}} ago"},{count:t})},{seconds:1,timeAgoMessage:t=>e.formatMessage({id:"McIjuI",defaultMessage:"Viewed {count, plural, =1 {1 second} other {# seconds}} ago"},{count:t})}],justNowMessage:e.formatMessage({id:"k0JWck",defaultMessage:"Viewed just now"})}),modified:e=>({intervals:[{seconds:31536e3,timeAgoMessage:t=>e.formatMessage({id:"iSKhoe",defaultMessage:"Modified {count, plural, =1 {1 year} other {# years}} ago"},{count:t})},{seconds:2592e3,timeAgoMessage:t=>e.formatMessage({id:"PbUKAJ",defaultMessage:"Modified {count, plural, =1 {1 month} other {# months}} ago"},{count:t})},{seconds:86400,timeAgoMessage:t=>e.formatMessage({id:"C7JdMh",defaultMessage:"Modified {count, plural, =1 {1 day} other {# days}} ago"},{count:t})},{seconds:3600,timeAgoMessage:t=>e.formatMessage({id:"7XNU4O",defaultMessage:"Modified {count, plural, =1 {1 hour} other {# hours}} ago"},{count:t})},{seconds:60,timeAgoMessage:t=>e.formatMessage({id:"EZ/c8g",defaultMessage:"Modified {count, plural, =1 {1 minute} other {# minutes}} ago"},{count:t})},{seconds:1,timeAgoMessage:t=>e.formatMessage({id:"NGVQnA",defaultMessage:"Modified {count, plural, =1 {1 second} other {# seconds}} ago"},{count:t})}],justNowMessage:e.formatMessage({id:"K7/6Pt",defaultMessage:"Modified just now"})})},l=({date:e,intl:t,tooltipFormatOptions:s,prefix:r="noPrefix"})=>{let a=Math.round((new Date().getTime()-e.getTime())/1e3),i="";try{i=(0,n.r6)(e,t,s)}catch(e){}let l=o[r](t);for(let e of l.intervals){let t=Math.floor(a/e.seconds);if(t>=1)return{displayText:e.timeAgoMessage(t),tooltipTitle:i}}return{displayText:l.justNowMessage,tooltipTitle:i}},u=({date:e,tooltipFormatOptions:t,prefix:s})=>{let{displayText:n,tooltipTitle:o}=l({date:e,intl:(0,i.tz)(),tooltipFormatOptions:t,prefix:s});return(0,r.Y)(a.m,{componentId:"web-shared.time-ago",content:o,children:(0,r.Y)("span",{children:n})})}},907046:(e,t,s)=>{s.d(t,{n:()=>i});var r=s(610435),a=s(939578);let i=e=>{let{name:t,children:s,...i}=e;return(0,r.FD)(r.FK,{children:[(0,r.Y)(a.y,{...i,children:t}),s]})}},936036:(e,t,s)=>{s.d(t,{DJ:()=>u,Tj:()=>l});var r=s(65061),a=s(960718),i=s(141078),n=s(108437);let o=(0,i.J1)`
  query LakehouseDetailsForRedash(
    $id: ID!
    $withPermissions: Boolean!
    $withActiveClusters: Boolean!
    $withBudgetPolicy: Boolean = false
  ) @component(name: "DBSQLX.WareHouseUI") {
    lakehouse(id: $id) {
      ...FullLakehouseFragment
    }
  }
  ${a.vP}
`,l=()=>{let e=(0,n.A)();return t=>({query:o,variables:{...e,...t}})},u=e=>{let{query:t,variables:s}=l()(e.variables);return(0,r.IT)(t,{...e,variables:s})}},939578:(e,t,s)=>{s.d(t,{y:()=>n});var r=s(610435),a=s(545251),i=s(605107);let n=({children:e,...t})=>{let{isInsideDialogCombobox:s}=(0,a.w)();if(!s)throw Error("`DialogComboboxSectionHeader` must be used within `DialogCombobox`");return(0,r.Y)(i.X,{...t,children:e})}},960718:(e,t,s)=>{s.d(t,{MS:()=>d,SN:()=>g,vP:()=>c,xz:()=>f});var r=s(141078);let a=(0,r.J1)`
  fragment PrincipalNameFragment on PrincipalName {
    __typename
    ... on UserName {
      userName
    }
    ... on GroupName {
      groupName
    }
    ... on ServicePrincipalName {
      servicePrincipalName
    }
  }
`,i=(0,r.J1)`
  fragment PermissionFragment on Permission {
    inheritedFromObject
    permissionLevel
    inherited
  }
`,n=(0,r.J1)`
  fragment AccessControlFragment on AccessControl {
    principalName {
      ...PrincipalNameFragment
    }
    allPermissions {
      ...PermissionFragment
    }
  }
  ${a}
  ${i}
`,o=(0,r.J1)`
  fragment LakehousePermissionsFragment on Lakehouse {
    permissions @include(if: $withPermissions)
    effectivePermissions @include(if: $withPermissions) {
      objectId
      objectType
      accessControlList {
        ...AccessControlFragment
      }
    }
  }
  ${n}
`,l=(0,r.J1)`
  fragment LakehouseBasicAttributesFragment on Lakehouse {
    id
    name
    size
    state
    # TODO(LF-940) use enableServerlessCompute instead
    enableDatabricksCompute
    warehouseType
    numClusters
    numActiveClusters @include(if: $withActiveClusters)
    maxNumClusters
    creator {
      name
    }
    aclPrincipal {
      id
      displayName
      uniqueName
      kind
    }
    health {
      status
      summary
      details
    }
  }
`,u=(0,r.J1)`
  fragment LakehouseAdvancedAttributesFragment on Lakehouse {
    minNumClusters
    numActiveSessions
    autoStopMins
    instanceProfileArn
    spotInstancePolicy
    disableUnityCatalog
    enablePhoton
    jdbcUrl
    odbcParams {
      hostname
      path
      port
      protocol
    }
    tags {
      customTags {
        key
        value
      }
    }
  }
`,c=(0,r.J1)`
  fragment FullLakehouseFragment on Lakehouse {
    ...LakehouseBasicAttributesFragment
    ...LakehouseAdvancedAttributesFragment
    ...LakehousePermissionsFragment
    channel {
      dbsqlVersion
      name
    }
    budgetPolicy @include(if: $withBudgetPolicy) {
      id
    }
    effectiveBudgetPolicy @include(if: $withBudgetPolicy) {
      id
    }
  }
  ${l}
  ${u}
  ${o}
`,d=(0,r.J1)`
  fragment LakehouseListFragment on Lakehouse {
    ...LakehouseBasicAttributesFragment
    permissions @include(if: $withPermissions)
  }
  ${l}
`,g=(0,r.J1)`
  fragment LakehouseForMutationFragment on Lakehouse {
    ...LakehouseBasicAttributesFragment
    ...LakehouseAdvancedAttributesFragment
    permissions @include(if: $withPermissions)
  }
  ${l}
  ${u}
`,f=(0,r.J1)`
  fragment LakehouseListStateFragment on Lakehouse {
    id
    name
    size
    state
    enableDatabricksCompute
    warehouseType
    health {
      status
      summary
      details
    }
  }
`}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/61149.cc71cc1488.chunk.js.map