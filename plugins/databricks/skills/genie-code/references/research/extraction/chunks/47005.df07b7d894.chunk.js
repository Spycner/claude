"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[47005],{45125:(e,n,t)=>{t.d(n,{J:()=>b});var i=t(610435),s=t(692738),a=t(497895),r=t(53333),o=t(382908),d=t(81659),l=t(810152),c=t(342411),p=t(524013),g=t(967166),u=t(87221),m=t(403192),h=t(754275),f=t(112837);function b({componentId:e,actions:n,as:t,label:d,moreInfo:l,value:m}){let{theme:h}=(0,a.wn)(),y=(0,p.df)(),k=(0,g.hG)(),Y=(0,s.useCallback)(()=>{if(!e)return;(0,u.tT)(y,k,{eventType:"component_view",eventEntity:{entityType:"component",entitySubType:"div",entityId:e},eventPayload:{interactionSubject:!0}})},[e,y,k]),{elementRef:v}=(0,r.z)({onView:Y}),A="SettingCell",w="__SettingCell__",I=`${w}-value`;return(0,i.Y)("div",{ref:v,css:{containerName:A,containerType:"inline-size"},children:(0,i.FD)(t??"div",{className:w,css:{alignItems:"center",borderBlockEnd:`1px solid ${h.colors.border}`,columnGap:h.spacing.lg,display:"grid",gridTemplate:`
            "label value"
            "actions actions"
            "more-info more-info" / 1fr fit-content(50%)
          `,margin:0,paddingBlock:h.spacing.lg,...(0,f.u)(A,w,"(width < 480px)",{gridTemplate:'"label" "actions" "more-info" "value" / 100%'})},children:[(0,i.Y)("div",{css:{gridArea:"label"},children:d}),n?(0,i.Y)("div",{css:{gridArea:"actions",marginBlockStart:h.spacing.xs},children:"function"==typeof n?n():n}):null,l?(0,i.Y)(o.o.Hint,{css:{gridArea:"more-info"},children:(0,i.FD)("details",{children:[(0,i.Y)("summary",{css:{cursor:"pointer",marginBlock:h.spacing.xs,paddingBlock:h.spacing.xs,paddingInlineEnd:h.spacing.xs,width:"max-content"},children:(0,i.Y)(c.sA,{id:"C77Bb3",defaultMessage:"More info"})}),(0,i.Y)("div",{css:{display:"flex",flexDirection:"column",gap:h.spacing.sm,"& p":{margin:0}},children:l})]})}):null,(0,i.Y)("div",{className:I,css:{gridArea:"value",minWidth:0,...(0,f.u)(A,I,"(width < 480px)",{marginBlockStart:h.spacing.sm})},children:m})]})})}function y({as:e,children:n,decorations:t}){let{theme:r}=(0,a.wn)(),d=(0,i.Y)(o.o.Text,{bold:!0,children:n});return(0,i.FD)(o.o.Paragraph,{css:{alignItems:"center",columnGap:r.spacing.sm,display:"flex",flexWrap:"wrap"},withoutMargins:!0,children:[e?s.cloneElement(e,{children:d}):d,t]})}b.Control=function({componentId:e,renderActions:n,useUpdatedLabelingSetup:t,children:s,decorations:a,description:r,label:d,moreInfo:l}){let c=(0,h.B)(),p=(0,h.B)(),g=(0,h.B)();return(0,i.Y)(b,{componentId:e,actions:"function"==typeof n?n(t?{labelId:p,descriptionId:g}:{controlId:c,descriptionId:g}):n,label:(0,i.FD)(i.FK,{children:[(0,i.Y)(y,{as:(0,i.Y)("label",{htmlFor:t?void 0:c,id:t?p:void 0}),decorations:a,children:d}),r&&(0,i.Y)(o.o.Hint,{id:g,children:r})]}),moreInfo:"function"==typeof l?l(t?{labelId:p,descriptionId:g}:{controlId:c,descriptionId:g}):l,value:s(t?{labelId:p,descriptionId:g}:{controlId:c,descriptionId:g})})},b.Link=function({actions:e,children:n,decorations:t,description:s,label:a,moreInfo:r}){let o=(0,h.B)();return(0,i.Y)(b.Static,{actions:"function"==typeof e?({descriptionId:n,labelId:t})=>e({descriptionId:n,labelId:t}):e,decorations:t,description:s,label:a,moreInfo:r,children:e=>n({...e,linkLabelId:o})})},b.Static=function({actions:e,children:n,decorations:t,description:s,label:a,moreInfo:r}){let d=(0,h.B)(),l=(0,h.B)();return(0,i.Y)(b,{actions:"function"==typeof e?e({descriptionId:d,labelId:l}):e,as:"section",label:(0,i.FD)(i.FK,{children:[(0,i.Y)(y,{as:(0,i.Y)("dfn",{css:{fontStyle:"unset"},id:l}),decorations:t,children:a}),s&&(0,i.Y)(o.o.Hint,{id:d,children:s})]}),moreInfo:r,value:n({descriptionId:d,labelId:l})})},b.Skeleton=function({label:e,withoutDescription:n}){return(0,i.Y)(b,{label:(0,i.FD)("div",{children:[(0,i.Y)(d.o,{style:{width:"50%"}}),!n&&(0,i.Y)(l.I,{style:{width:"75%"}})]}),value:(0,i.Y)(m.w,{label:e})})},b.InlineSeparator=function(){let{theme:e}=(0,a.wn)();return(0,i.Y)("span",{css:{borderInlineEnd:`1px solid ${e.colors.border}`,display:"inline-block",lineHeight:"normal",marginInline:"1ch",verticalAlign:"middle",width:0},children:"\xa0"})}},50799:(e,n,t)=>{t.d(n,{c:()=>o});var i=t(610435);t(692738);var s=t(342411),a=t(829339),r=t(528366);function o({title:e,...n}){let t=(0,s.tz)().formatMessage({id:"EKXooY",defaultMessage:"Settings"});return(0,a.r)({title:`${e} - ${t}`}),(0,i.Y)(r.c,{...n,id:"content",title:t})}},90710:(e,n,t)=>{t.d(n,{Y:()=>p});var i=t(610435),s=t(956935),a=t(692738),r=t(497895),o=t(861166),d=t(997791),l=t(639712),c=t(123252);let p=({breadcrumbs:e,title:n,titleAddOns:t,dangerouslyAppendEmotionCSS:p,buttons:g,children:u,titleElementLevel:m,allowTitleWrap:h=!0,...f})=>{let b,{classNamePrefix:y,theme:k}=(0,r.wn)(),Y=Array.isArray(g)?g:g?[g]:[],v={titleWrapper:(0,s.AH)({display:"flex",alignItems:"flex-start",justifyContent:"space-between",flexWrap:h?"wrap":"nowrap",rowGap:k.spacing.sm,...0===Y.length&&{paddingTop:e?0:k.spacing.xs/2,paddingBottom:k.spacing.xs/2}}),breadcrumbWrapper:(0,s.AH)({lineHeight:k.typography.lineHeightBase,marginBottom:k.spacing.xs}),title:(0,s.AH)({marginTop:0,marginBottom:"0 !important",alignSelf:"stretch",...!h&&{flex:1,minWidth:0}}),titleIfOtherElementsPresent:(0,s.AH)({marginTop:2}),buttonContainer:(0,s.AH)({marginLeft:8}),titleAddOnsWrapper:(0,s.AH)({display:"inline-flex",verticalAlign:"middle",alignItems:"center",flexWrap:"wrap",marginLeft:k.spacing.sm,gap:k.spacing.xs})};return(0,i.FD)("div",{...(0,c.VG)(),css:[(b={[`.${y}-breadcrumb`]:{lineHeight:k.typography.lineHeightBase}},(0,s.AH)((0,l.dg)(b))),p],...f,children:[e&&(0,i.Y)("div",{css:v.breadcrumbWrapper,children:e}),(0,i.FD)("div",{css:v.titleWrapper,children:[(0,i.FD)(d.h,{level:2,elementLevel:m,css:[v.title,(g||e)&&v.titleIfOtherElementsPresent],children:[n,t&&(0,i.Y)("span",{css:v.titleAddOnsWrapper,children:t})]}),g&&(0,i.Y)("div",{css:v.buttonContainer,children:(0,i.Y)(o.$,{dangerouslySetAntdProps:{wrap:!0},size:8,children:Y.filter(Boolean).map((e,n)=>{let t=`dubois-header-button-${n}`;return a.isValidElement(e)?a.cloneElement(e,{key:e.key||t}):(0,i.Y)(a.Fragment,{children:e},t)})})})]})]})}},112837:(e,n,t)=>{t.d(n,{u:()=>i});function i(e,n,t,i){return{[`@container ${e} ${t}`]:{[`&.${n}`]:i},"@supports not (container-type: size)":{[`@media ${t}`]:i}}}},173060:(e,n,t)=>{t.d(n,{w:()=>r});var i=t(610435);t(692738);var s=t(497895),a=t(382908);function r({children:e,id:n,level:t=3}){let{theme:o}=(0,s.wn)();return(0,i.Y)(a.o.Title,{css:{scrollMarginBlockStart:o.spacing.md},id:n,level:t,withoutMargins:!0,children:e})}},213113:(e,n,t)=>{t.d(n,{Q:()=>i});let i={User:{Preferences:{General:"general-settings",Appearance:"appearance-settings"},Developer:{AccessTokens:"access-token-settings",QuerySnippets:"query-snippet-settings",EditorSettings:"editor-settings",Editor:{General:"editor-settings-general",Code:"editor-settings-code",Experimental:"editor-settings-experimental"}},LinkedAccounts:{GitIntegration:"git-integration-settings"}},Workspace:{Appearance:{Sql:"sql-settings",Workspace:"workspace-settings",WorkspaceLabel:"workspace-label-settings",AiBi:"ai-bi-settings",DatabricksOne:"databricks-one-settings"},Usage:{UsageDashboard:"usage-dashboard"},IdentityAndAccess:{ConsumerDefaultAccess:"consumer-default-access-tool",ManagementAndPermissionsSettings:"management-and-permissions-settings",ManagementAndPermissions:{Users:"user-settings",Groups:"group-settings",ServicePrincipals:"service-principal-settings"},SsoAndSync:"sso-and-sync-settings",Users:{Entitlements:"entitlement-settings"}},Security:{DataSecurity:"data-security-settings",ExternalAccess:"external-access-settings",EgressAndIngress:"egress-and-ingress-settings"},Compute:{ClustersSettings:"clusters-settings",EnvironmentsSettings:"environments-settings",Policies:"policies",ServerlessInteractive:"serverless-interactive-settings"},Development:{Repos:"repos-settings",Apps:"apps-settings"},Notifications:{Email:"email-settings",Promotional:"promotional-settings"},Advanced:{AccessControls:"access-controls",AdiServicesIntegration:"adi-services-integration",ExternalIntegrations:"external-integrations",Other:"other",Storage:"storage"}}}},247280:(e,n,t)=>{t.d(n,{I8:()=>r,Ln:()=>m,Qp:()=>b,Wz:()=>h,Zn:()=>l,dk:()=>c,hW:()=>f,iM:()=>d,tH:()=>a,xN:()=>o});var i=t(141078),s=t(887047);(0,i.J1)`
  query WorkspaceWebhookDestinations @component(name: "UIPlatform.UIObservability") {
    sqlDestinationList
      @rest(type: "[SqlDestination]", path: "/destinations", endpoint: "webhooksPreviewApi", method: "GET") {
      id
      name
      type
      icon
    }
  }
`;let a=(0,i.J1)`
  query GetAlertDestination($webhookId: String!) @component(name: "UIPlatform.UIObservability") {
    getAlertDestination(webhookId: $webhookId)
      @rest(
        type: "AlertDestination"
        path: "/destinations/{args.webhookId}"
        endpoint: "webhooksPreviewApi"
        method: "GET"
      ) {
      id
      name
      type
      icon
      options
      config
    }
  }
`,r=(0,i.J1)`
  query GetWNSDestination($webhookId: String!) @component(name: "DBSQLX.RedashCore") {
    webhooknotificationsGetWebhook(input: { id: $webhookId }) {
      webhook {
        id
        name
        type
        options {
          addresses
          apiToken
          channel
          description
          iconUrl
          integrationKey
          messageTemplate
          password
          roomId
          subjectTemplate
          url
          username
        }
        # NOTE TO FUTURE DEVELOPERS: If front-porting additional webhook types,
        # you'll need to add the destination type to the config object.
        config {
          microsoftTeams {
            url
            appId
            authSecret
            channelUrl
            tenantId
          }
        }
      }
    }
  }
`,o=(0,i.J1)`
  query NPSGetNotificationDestination(
    $destinationId: String!
    $scopeId: String!
    $scopeType: notificationsservice_ScopeType!
  ) @component(name: "EnduserExp.CustomerEngagementPlatform") {
    notifications_destination(destinationId: $destinationId, scope: { id: $scopeId, scopeType: $scopeType }) {
      destinationId
      destinationName
      destinationType
      destinationConfig {
        slack {
          urlSet
          oauthTokenSet
          channelIdSet
        }
        email {
          addresses
        }
        genericWebhook {
          urlSet
          usernameSet
          passwordSet
        }
        pagerduty {
          integrationKeySet
          description
        }
        microsoftTeams {
          urlSet
          appIdSet
          authSecretSet
          channelUrlSet
          tenantIdSet
        }
      }
    }
  }
`,d=(0,i.J1)`
  mutation NPSCreateNotificationDestination($input: notifications_CreateNotificationDestinationRequestInput!)
  @component(name: "EnduserExp.CustomerEngagementPlatform") {
    notifications_createDestination(input: $input) {
      destinationId
      destinationName
      destinationType
    }
  }
`,l=(0,i.J1)`
  mutation NPSUpdateNotificationDestination($input: notifications_UpdateNotificationDestinationRequestInput!)
  @component(name: "EnduserExp.CustomerEngagementPlatform") {
    notifications_updateDestination(input: $input) {
      destinationId
      destinationName
      destinationType
    }
  }
`,c=(0,i.J1)`
  mutation NPSDeleteNotificationDestination(
    $destinationId: String!
    $scopeId: String!
    $scopeType: notificationsservice_ScopeType!
  ) @component(name: "EnduserExp.CustomerEngagementPlatform") {
    notifications_deleteDestination(
      input: { destinationId: $destinationId, scope: { id: $scopeId, scopeType: $scopeType } }
    ) {
      success
    }
  }
`,p=(0,i.J1)`
  query GetUnifiedLogin @component(name: "IdentityMgmt.InternalServices") {
    settings {
      isUnifiedLoginEnabled
    }
  }
`,g=(0,i.J1)`
  query GetIsE2Account @component(name: "IdentityMgmt.InternalServices") {
    settings {
      isE2Account
    }
  }
`,u=(0,i.J1)`
  query GetTokenTtl @component(name: "IdentityMgmt.InternalServices") {
    settings {
      tokenTtl
    }
  }
`;function m(){let{data:e}=(0,i.IT)(p);return e?.settings?.isUnifiedLoginEnabled??!0}function h(e){return(0,i.IT)(g,{...e})}function f(e){let{data:n}=(0,i.IT)(u,{...e});return{data:n}}function b(){return(0,s.zF)(!1,6e4)}},403192:(e,n,t)=>{t.d(n,{w:()=>a});var i=t(610435);t(692738);var s=t(295169);function a(e){return(0,i.Y)(s.x,{...e,style:{height:20,width:64}})}},528366:(e,n,t)=>{t.d(n,{c:()=>l});var i=t(610435);t(692738);var s=t(497895),a=t(764236);function r({"aria-labelledby":e,children:n,height:t,id:s,role:a="region"}){return(0,i.Y)("div",{"aria-labelledby":e,css:{overflow:"auto","@media (prefers-reduced-motion: no-preference)":{scrollBehavior:"smooth"},"&:focus:not(:focus-visible)":{outline:"none"}},id:s,role:a,style:{height:t},tabIndex:0,children:n})}var o=t(754275);let d={full:void 0,slim:"80ch"};function l({children:e,renderHeader:n,id:t,size:c="slim",title:p,showSpacingUnderHeader:g=!0}){let{theme:u}=(0,s.wn)(),m=(0,o.B)(),h=(0,o.B)();return(0,i.FD)(r,{"aria-labelledby":`${m} ${h}`,height:"100%",id:t,children:[(0,i.Y)("span",{hidden:!0,id:m,children:p}),(0,i.FD)("div",{css:{boxSizing:"content-box",maxWidth:d[c],marginInline:"auto",padding:u.spacing.lg},children:[n(h),g&&(0,i.FD)(i.FK,{children:[(0,i.Y)(a.h,{}),(0,i.Y)(a.h,{})]}),(0,i.Y)("div",{css:{display:"flex",flexDirection:"column",gap:3*u.spacing.md},children:e})]})]})}},624912:(e,n,t)=>{t.d(n,{l:()=>o});var i,s=t(610435),a=t(692738),r=t(488655);let o=(i=t(550385).T_,function(e,n){return function(t){let o=(0,r.Zp)(),d=i.canView(e);return a.useEffect(()=>{d||o("/")},[d,o]),d?(0,s.Y)(n,{...t}):null}})},747005:(e,n,t)=>{t.r(n),t.d(n,{RouteComponent:()=>E});var i=t(610435),s=t(692738),a=t(79128),r=t(764236),o=t(382908),d=t(342411),l=t(441535),c=t(686560),p=t(147403),g=t(217985),u=t(866941),m=t(45125),h=t(173060),f=t(550385),b=t(213113),y=t(889885),k=t(820594),Y=t(247280),v=t(50799),A=t(624912);let w=(0,d.YK)({screenTitle:{id:"ioVKvC",defaultMessage:"Identity and access"}});function I(){let e=(0,d.tz)();return(0,i.Y)("section",{"aria-label":e.formatMessage({id:"0BvdVV",defaultMessage:"Users"}),id:b.Q.Workspace.IdentityAndAccess.ManagementAndPermissions.Users,children:(0,i.Y)(m.J.Link,{label:(0,i.Y)(d.sA,{id:"r68lFy",defaultMessage:"Users"}),description:(0,i.Y)(d.sA,{id:"poUZPW",defaultMessage:"Manage users and entitlements"}),children:({descriptionId:e,labelId:n,linkLabelId:t})=>(0,i.Y)(g.N,{asChild:!0,to:"/settings/workspace/identity-and-access/users/",componentId:"workspace_settings.identity_and_access.users",children:(0,i.Y)(a.$n,{componentId:"codegen_webapp_js_settings_routes_settings.workspace.identity-and-access.index.tsx_73","aria-describedby":e,"aria-labelledby":`${t} ${n}`,children:(0,i.Y)("span",{id:t,children:(0,i.Y)(d.sA,{id:"KNux1o",defaultMessage:"Manage"})})})})})})}function S(){let e=(0,d.tz)();return(0,i.Y)("section",{"aria-label":e.formatMessage({id:"rPz8NX",defaultMessage:"Groups"}),id:b.Q.Workspace.IdentityAndAccess.ManagementAndPermissions.Groups,children:(0,i.Y)(m.J.Link,{label:(0,i.Y)(d.sA,{id:"EhFcYZ",defaultMessage:"Groups"}),description:(0,i.Y)(d.sA,{id:"vTOm0Y",defaultMessage:"Manage groups and entitlements"}),children:({descriptionId:e,labelId:n,linkLabelId:t})=>(0,i.Y)(g.N,{asChild:!0,to:"/settings/workspace/identity-and-access/groups/",componentId:"workspace_settings.identity_and_access.groups",children:(0,i.Y)(a.$n,{componentId:"codegen_webapp_js_settings_routes_settings.workspace.identity-and-access.index.tsx_120","aria-describedby":e,"aria-labelledby":`${t} ${n}`,children:(0,i.Y)("span",{id:t,children:(0,i.Y)(d.sA,{id:"/WceiN",defaultMessage:"Manage"})})})})})})}function _(){let e=(0,d.tz)(),n=(0,l.W)("databricks.fe.enableSpTabForNonIdFed",!1),t=(0,Y.Wz)({skip:!n}),s=t.data?.settings?.isE2Account??!1;if(!(0,y.Nm)("identityFederationEnabled",()=>(0,c.d)("identityFederationEnabled",!1))&&(t.loading||!s||!n))return null;return(0,i.Y)("section",{"aria-label":e.formatMessage({id:"HgtUz4",defaultMessage:"Service principals"}),id:b.Q.Workspace.IdentityAndAccess.ManagementAndPermissions.ServicePrincipals,children:(0,i.Y)(m.J.Link,{label:(0,i.Y)(d.sA,{id:"Glp/c6",defaultMessage:"Service principals"}),description:(0,i.Y)(d.sA,{id:"dLKuDt",defaultMessage:"Manage service principals and entitlements"}),children:({descriptionId:e,labelId:n,linkLabelId:t})=>(0,i.Y)(g.N,{asChild:!0,to:"/settings/workspace/identity-and-access/service-principals/",componentId:"workspace_settings.identity_and_access.service_principals",children:(0,i.Y)(a.$n,{componentId:"codegen_webapp_js_settings_routes_settings.workspace.identity-and-access.index.tsx_175","aria-describedby":e,"aria-labelledby":`${t} ${n}`,children:(0,i.Y)("span",{id:t,children:(0,i.Y)(d.sA,{id:"WkecI/",defaultMessage:"Manage"})})})})})})}function T(){return(0,i.FD)("section",{"aria-labelledby":b.Q.Workspace.IdentityAndAccess.ManagementAndPermissionsSettings,children:[(0,i.Y)(h.w,{id:b.Q.Workspace.IdentityAndAccess.ManagementAndPermissionsSettings,children:(0,i.Y)(d.sA,{id:"2P4FHG",defaultMessage:"Management and permissions"})}),f.T_.canView("settings.workspace./identity-and-access.#management-and-permissions.users")&&(0,i.Y)(I,{}),f.T_.canView("settings.workspace./identity-and-access.#management-and-permissions.groups")&&(0,i.Y)(S,{}),f.T_.canView("settings.workspace./identity-and-access.#management-and-permissions.service-principals")&&(0,i.Y)(_,{})]})}function M(){if(!(0,l.W)("databricks.webapp.tierFlags.enableSingleSignOnByTier",!0))return(0,i.FD)(i.FK,{children:[(0,i.Y)(r.h,{}),(0,i.Y)(o.o.Paragraph,{withoutMargins:!0,children:k.z.getUpgradeElement("Single sign-on",!1)})]});return(0,i.Y)(m.J.Link,{label:(0,i.Y)(d.sA,{id:"Ch6X4A",defaultMessage:"SSO settings"}),children:({descriptionId:e,labelId:n,linkLabelId:t})=>(0,i.Y)(g.N,{asChild:!0,to:"/settings/workspace/identity-and-access/sso/",componentId:"workspace_settings.identity_and_access.sso",children:(0,i.Y)(a.$n,{componentId:"codegen_webapp_js_settings_routes_settings.workspace.identity-and-access.index.tsx_235","aria-describedby":e,"aria-labelledby":`${t} ${n}`,children:(0,i.Y)("span",{id:t,children:(0,i.Y)(d.sA,{id:"KRAN+d",defaultMessage:"Manage"})})})})})}function D(){let e=(0,Y.Ln)(),n=(0,p.ED)("ssoFedType",""),t=(0,p.ED)("userEnabledSingleSignOn",!1);if(!e||e&&""===n&&t)return(0,i.FD)("section",{"aria-labelledby":b.Q.Workspace.IdentityAndAccess.SsoAndSync,children:[(0,i.Y)(h.w,{id:b.Q.Workspace.IdentityAndAccess.SsoAndSync,children:(0,i.Y)(d.sA,{id:"Kapb/p",defaultMessage:"SSO and sync"})}),f.T_.canView("settings.workspace./identity-and-access.#sso-and-sync.sso")&&(0,i.Y)(M,{})]});return null}let E=s.memo((0,A.l)("settings.workspace./identity-and-access",function(){let e=(0,d.tz)().formatMessage(w.screenTitle);return(0,i.FD)(v.c,{renderHeader:n=>(0,i.Y)(u.r,{heading:(0,i.Y)("span",{id:n,children:e})}),title:e,children:[f.T_.canView("settings.workspace./identity-and-access.#management-and-permissions")&&(0,i.Y)(T,{}),f.T_.canView("settings.workspace./identity-and-access.#sso-and-sync")&&(0,i.Y)(D,{})]})}))},820594:(e,n,t)=>{t.d(n,{z:()=>g});var i=t(610435);t(692738);var s=t(382908),a=t(342411),r=t(441535),o=t(889885),d=t(783487),l=t(620839),c=t(67656);let p=e=>(0,i.Y)(s.o.Link,{componentId:"codegen_webapp_js_settings_utils_upgrade-messages.tsx_11",openInNewTab:!0,href:"https://databricks.com/product/pricing",children:e});class g{static getClusterConfigOptionsUpgradeMessage(){return(0,i.Y)(a.sA,{id:"Ac4uio",defaultMessage:"For <link>more configuration options</link>, please <upgradeLink>upgrade your Databricks subscription.</upgradeLink>",values:{link:e=>(0,i.Y)(s.o.Link,{componentId:"codegen_webapp_js_settings_utils_upgrade-messages.tsx_27",openInNewTab:!0,href:c.R.getDbGuideUrl(l.A.CLUSTERS_URL),children:e}),upgradeLink:p}})}static getToEnableFeatureUpgradeMessage(){return(0,i.Y)(a.sA,{id:"fnlNiA",defaultMessage:"To enable this feature, please <upgradeLink>upgrade your Databricks subscription.</upgradeLink>",values:{upgradeLink:p}})}static getToEnableJobsUpgradeMessage(){return(0,i.Y)(a.sA,{id:"iYd6co",defaultMessage:"For access to <jobsLink>Jobs</jobsLink>, please <upgradeLink>upgrade your Databricks subscription.</upgradeLink>",values:{jobsLink:e=>(0,i.Y)("a",{href:c.R.getDbGuideUrl(l.A.JOBS_URL),children:e}),upgradeLink:p}})}static getToEnableMoreUsersUpgradeMessage(){return(0,i.Y)(a.sA,{id:"BvAaeS",defaultMessage:"To add more users, please <upgradeLink>upgrade your Databricks subscription.</upgradeLink>",values:{upgradeLink:p}})}static getUpsellUrl(){return this.getUpsellInfo().upsellLink}static getUpsellCTA(){return(0,r.W)("databricks.webapp.tierFlags.useStandardTierTooltips",!1)?(0,i.Y)(a.sA,{id:"egUZCp",defaultMessage:"Learn more"}):(0,i.Y)(a.sA,{id:"FT4mMP",defaultMessage:"Upgrade now"})}static getUpsellInfo(){let e={default:{upsellLink:"https://databricks.com/product/pricing",upsellText:(0,i.Y)(a.sA,{id:"guNnrC",defaultMessage:"Only available with the Databricks Premium plan and plus."})},[d.L.Azure]:{upsellLink:"",upsellText:(0,i.Y)(a.sA,{id:"NNeX67",defaultMessage:"Only available with the Premium SKU."})}};return(0,o.FI)("cloud")===d.L.Azure?e[d.L.Azure]:e.default}static getUpsellName(){return this.getUpsellInfo().upsellText}static getUpgradeElement(e,n){let t=(0,o.FI)("cloud")===d.L.Azure?"Premium SKU":"Databricks Premium plan and plus",s=[`${e} ${n?"are":"is"} available only in ${t}. `],a=g.getUpsellUrl();return(0,i.FD)("span",{children:[s,a&&(0,i.Y)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:g.getUpsellCTA()},"upsell-link")]})}}},866941:(e,n,t)=>{t.d(n,{r:()=>o});var i=t(610435);t(692738);var s=t(497895),a=t(90710),r=t(382908);function o({breadcrumbs:e,heading:n,subheading:t,showBorderUnderHeader:d=!0}){let{theme:l}=(0,s.wn)();return(0,i.FD)("header",{css:d?{borderBlockEnd:`1px solid ${l.colors.border}`,paddingBlockEnd:l.spacing.md}:{},children:[(0,i.Y)(a.Y,{breadcrumbs:e,title:n}),t&&(0,i.Y)(r.o.Paragraph,{color:"secondary",withoutMargins:!0,children:t})]})}},887047:(e,n,t)=>{t.d(n,{A9:()=>a,_o:()=>o,zF:()=>d});var i=t(692738),s=t(141078);(0,s.J1)`
  query WebhookDestinations @component(name: "Workflows.Observability.Notifications") {
    sqlDestinationList
      @rest(type: "[SqlDestination]", path: "/destinations", endpoint: "webhooksPreviewApi", method: "GET") {
      id
      name
      type
      icon
    }
  }
`;let a=(0,s.J1)`
  query WorkspaceListNotificationDestinations @component(name: "DBSQLX.RedashCoreUI") {
    webhooknotificationsListWebhooks(input: {}) {
      webhooks {
        id
        name
        type
      }
    }
  }
`,r={email:"fa-envelope",slack:"fa-slack",webhook:"fa-bolt",chatwork:"fa-comment",pagerduty:"creative-commons-pd-alt",mattermost:"fa-bolt",hangouts_chat:"fa-bolt",microsoft_teams:"fa-bolt"};function o(e){return e&&e in r?r[e]:"fa-bullseye"}function d(e,n){let t=(0,s.IT)(a,{skip:e,pollInterval:n??5e3}),r=(0,i.useMemo)(()=>{if(t.data)return{sqlDestinationList:(t.data?.webhooknotificationsListWebhooks?.webhooks||[]).map(e=>({...e,__typename:"SqlDestination",icon:o(e.type)}))};return null},[t.data]);return{...t,data:r}}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/47005.df07b7d894.chunk.js.map