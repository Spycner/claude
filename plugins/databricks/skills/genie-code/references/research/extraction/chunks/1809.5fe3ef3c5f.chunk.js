"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[1809],{159705:(e,t,i)=>{i.d(t,{Nw:()=>r,hG:()=>o,iU:()=>a,vi:()=>s});var n=i(141078);let o=(0,n.J1)`
  fragment BooleanSettingFragment on SettingspolicySetting {
    isMutable
    ref
    value {
      boolVal {
        value
      }
    }
  }
`,r=(0,n.J1)`
  fragment BooleanSettingV2Fragment on SettingspolicySettingsv2SettingValue {
    isSetByUser
    value {
      boolVal
    }
  }
`,a=(0,n.J1)`
  fragment StringSettingFragment on SettingspolicySetting {
    isMutable
    ref
    value {
      stringVal {
        value
      }
    }
  }
`,s=(0,n.J1)`
  fragment SettingsApiErrorFragment on ApiError {
    code
    message
    helpUrl
    traceId
  }
`},524191:(e,t,i)=>{i.d(t,{j:()=>p});var n=i(610435);i(692738);var o=i(497895),r=i(79128),a=i(538160),s=i(687828),l=i(161330),c=i(342411),d=i(411695);function p({loading:e,disabled:t,onClickCreateWithoutDeployment:i,componentId:u,form:g,hideCreateWithoutDeploymentOption:m}){let{theme:f}=(0,o.wn)(),h=u||"dabs-authoring.create-resource-definition-form.create-button",S={css:{marginLeft:f.spacing.sm},componentId:h,loading:e,disabled:t,type:"primary",htmlType:"submit",form:g};if(!(0,d.ER)())return(0,n.Y)(r.$n,{...S,children:(0,n.Y)(c.sA,{id:"/aCCsS",defaultMessage:"Add"})});let y=(0,n.Y)(c.sA,{id:"0s+E1k",defaultMessage:"Add and deploy"});if(m)return(0,n.Y)(r.$n,{...S,children:y});return(0,n.Y)(a.f,{...S,menu:(0,n.Y)(s.Content,{align:"end",children:(0,n.FD)(s.Item,{componentId:`${h}.create-without-deployment`,onClick:i,children:[(0,n.Y)(c.sA,{id:"KN2c63",defaultMessage:"Only add, deploy later"}),(0,n.Y)("span",{css:{marginLeft:f.spacing.xs},children:(0,n.Y)(l.I,{componentId:`${h}.create-without-deployment-tooltip`,content:(0,n.Y)(c.sA,{id:"TCpx8I",defaultMessage:"Add resource without deploying it to the workspace"})})})]})}),children:y})}},538160:(e,t,i)=>{i.d(t,{f:()=>w});var n=i(610435),o=i(956935),r=i(91958),a=i.n(r),s=i(692738),l=i(600295),c=i(464953),d=i(660488),p=i(783772),u=i.n(p),g=i(79128),m=i(687828),f=i(227195),h=i(497895),S=i(943844);let y=c.A.Group,v=e=>{let{theme:t}=(0,h.wn)(),{getPopupContainer:i,getPrefixCls:o}=(0,f.G)(),{type:r,danger:a,disabled:c,loading:p,onClick:v,htmlType:b,children:R,className:_,overlay:I,trigger:E,align:w,open:x,onOpenChange:T,placement:$,getPopupContainer:C,href:N,icon:A=(0,n.Y)(l.A,{}),title:F,buttonsRender:k=e=>e,mouseEnterDelay:D,mouseLeaveDelay:O,overlayClassName:z,overlayStyle:Y,destroyPopupOnHide:L,menuButtonLabel:P="Open dropdown",menu:U,leftButtonIcon:M,dropdownMenuRootProps:W,"aria-label":B,componentId:J,analyticsEvents:G,form:V,...Q}=e,j=o("dropdown-button"),H={align:w,overlay:I,disabled:c,trigger:c?[]:E,onOpenChange:T,getPopupContainer:C||i,mouseEnterDelay:D,mouseLeaveDelay:O,overlayClassName:z,overlayStyle:Y,destroyPopupOnHide:L};"open"in e&&(H.open=x),"placement"in e?H.placement=$:H.placement="bottomRight";let[X,q]=k([(0,n.FD)(g.$n,{componentId:J?`${J}.primary_button`:"codegen_design-system_src_design-system_splitbutton_dropdown_dropdownbutton.tsx_148",type:r,form:V,danger:a,disabled:c,loading:p,onClick:v,htmlType:b,href:N,title:F,icon:R&&M?M:void 0,"aria-label":B,size:e.size,css:{borderTopRightRadius:"0 !important",borderBottomRightRadius:"0 !important"},children:[M&&!R?M:void 0,R]}),(0,n.Y)(g.$n,{componentId:J?`${J}.dropdown_button`:"codegen_design-system_src_design-system_splitbutton_dropdown_dropdownbutton.tsx_166",type:r,danger:a,disabled:c,"aria-label":P,size:e.size,css:{borderTopLeftRadius:"0 !important",borderBottomLeftRadius:"0 !important",..."small"===e.size?{"&&&":{paddingLeft:`${t.spacing.xs}px !important`,paddingRight:`${t.spacing.xs}px !important`,width:"24px !important"}}:{}},children:A||(0,n.Y)(S.A,{})})]);return(0,n.FD)(y,{...Q,className:u()(j,_),children:[X,void 0!==I?(0,n.Y)(d.A,{...H,overlay:I,children:q}):(0,n.FD)(m.Root,{...W,itemHtmlType:"submit"===b?"submit":void 0,children:[(0,n.Y)(m.Trigger,{disabled:c,asChild:!0,children:q}),U&&s.cloneElement(U,{align:U.props.align||"end"})]})]})};var b=i(817262),R=i(429608),_=i(639712);let I={display:"inline-flex",position:"relative",verticalAlign:"middle"},E=a()(function(e,t,i){let n=`.${e}-btn`,r=`.${e}-btn-primary`,a=`.${e}-dropdown-trigger`,s=`.${e}-btn-group-sm`,l={[n]:{...(0,b.o8)(t),boxShadow:t.shadows.xs,height:"small"===i?t.general.iconSize:t.general.heightSm,padding:"4px 12px","&:focus-visible":{outlineStyle:"solid",outlineWidth:"2px",outlineOffset:"-2px",outlineColor:t.colors.actionDefaultBorderFocus},".anticon, &:focus-visible .anticon":{color:t.colors.textSecondary},"&:hover .anticon":{color:t.colors.actionDefaultIconHover},"&:active .anticon":{color:t.colors.actionDefaultIconPress}},[`${n}:first-of-type`]:{borderTopRightRadius:"0px !important",borderBottomRightRadius:"0px !important"},[r]:{...(0,b.p_)(t),boxShadow:t.shadows.xs,"&:first-of-type":{borderRight:`1px solid ${t.colors.actionPrimaryTextDefault}`,marginRight:1},[a]:{borderLeft:`1px solid ${t.colors.actionPrimaryTextDefault}`},"&:focus-visible":{outlineStyle:"solid",outlineWidth:"1px",outlineOffset:"-3px",outlineColor:t.colors.white},".anticon, &:hover .anticon, &:active .anticon, &:focus-visible .anticon":{color:t.colors.actionPrimaryIcon}},[a]:{padding:3,borderLeftColor:"transparent",width:t.general.heightSm},[`&${s}`]:{[a]:{padding:5}},"&&":{[`[disabled], ${r}[disabled]`]:{...(0,b.J5)(t),boxShadow:"none","&:first-of-type":{borderRight:`1px solid ${t.colors.actionPrimaryIcon}`,marginRight:1},[a]:{borderLeft:`1px solid ${t.colors.actionPrimaryIcon}`},".anticon, &:hover .anticon, &:active .anticon, &:focus-visible .anticon":{color:t.colors.actionDisabledText}},[`${r}[disabled]`]:{...(0,b.LM)(t),".anticon, &:hover .anticon, &:active .anticon, &:focus-visible .anticon":{color:t.colors.actionPrimaryTextDefault}}},[`${n}:not(:first-of-type)`]:{width:t.general.heightSm,padding:"3px !important",borderTopLeftRadius:"0px !important",borderBottomLeftRadius:"0px !important"},...(0,R.Cx)(t.options.enableAnimation)},c=(0,_.dg)(l);return(0,o.AH)(c)},(e,t,i)=>`${(0,_.H6)(t)}|${e}|${i??""}|${!!t.options.enableAnimation}`),w=e=>{let{theme:t,classNamePrefix:i}=(0,h.wn)(),{children:o,icon:r,deprecatedMenu:a,type:l,loading:c,loadingButtonStyles:d,placement:p,dangerouslySetAntdProps:u,size:m,...f}=e,y=t.general.iconFontSize+24+2*t.general.borderWidth,[b,_]=(0,s.useState)(y),w=(0,s.useCallback)(e=>{if(void 0===c)return;e&&!c&&_(e.getBoundingClientRect().width)},[c]),T=(0,s.useMemo)(()=>({width:b,fontSize:t.general.iconFontSize,...d}),[b,t.general.iconFontSize,d]),$=(0,s.useMemo)(()=>({fontSize:t.general.iconFontSize}),[t.general.iconFontSize]);return(0,n.Y)(R.wC,{children:(0,n.Y)("div",{ref:w,css:I,children:c?(0,n.Y)(g.$n,{componentId:"codegen_design-system_src_design-system_splitbutton_splitbutton.tsx_163",type:"default"===l?void 0:l,style:T,loading:!0,htmlType:e.htmlType,title:e.title,className:e.className,size:e.size,children:o}):(0,n.Y)(v,{...f,size:e.size,overlay:a,trigger:x,css:E(i,t,m),icon:(0,n.Y)(S.A,{css:$,"aria-hidden":"true"}),placement:p||"bottomRight",type:"default"===l?void 0:l,leftButtonIcon:r,...u,children:o})})})},x=["click"]},701200:(e,t,i)=>{i.a(e,async(e,n)=>{try{i.d(t,{E:()=>d,v:()=>c});var o=i(610435),r=i(692738),a=i(580500),s=i(954879),l=i(419180);function c({children:t}){let{deploymentModal:i}=function(){let t=(0,s.I)(e=>e.isDabsProject),i=(0,s.I)(e=>e.projectRootFolderNode),[n,o]=(0,l.iQ)();return(0,r.useEffect)(()=>{if(!t||!i)return;let n=(0,a.Uk)(i.name);sessionStorage.getItem(e)===n&&(sessionStorage.removeItem(e),o())},[i,o,t]),{deploymentModal:n}}();return(0,o.FD)(o.FK,{children:[t,i]})}function d(t){sessionStorage.setItem(e,t)}let e="dabs_authoring.auto_open_deploy_modal";n()}catch(e){n(e)}})},729591:(e,t,i)=>{i.d(t,{Xe:()=>d,aP:()=>u});var n=i(342411),o=i(141078),r=i(159705),a=i(715370);if(13057==i.j)var s=i(807633);function l(e,t,i,n,o,r,a){try{var s=e[r](a),l=s.value}catch(e){i(e);return}s.done?t(l):Promise.resolve(l).then(n,o)}let c=(0,o.J1)`
  query GetWorkspaceDefaultCatalogQuery($input: SettingspolicyserviceGetSettingWithoutSettingNameRestRequestInput!)
  @component(name: "IdentityMgmt.InternalServices") {
    settingspolicyserviceGetSettingRestWithoutSettingName(input: $input) {
      apiError {
        ...SettingsApiErrorFragment
      }
      sessionToken
      setting {
        ...StringSettingFragment
      }
    }
  }
  ${r.vi}
  ${r.iU}
`,d=(e,t,i)=>a.R.useQuery(c,{variables:{input:{key:{typeName:"workspace",name:e},setting:{typeName:"default_namespace_ws",name:""},...t&&{sessionToken:t}}},fetchPolicy:"cache-and-network",...i}),p=(0,o.J1)`
  mutation UpdateWorkspaceDefaultCatalogMutation(
    $input: SettingspolicyserviceSetSettingWithoutSettingNameRestRequestInput!
  ) @component(name: "IdentityMgmt.InternalServices") {
    settingspolicyserviceSetSettingsRestWithoutSettingName(input: $input) {
      apiError {
        ...SettingsApiErrorFragment
      }
      sessionToken
      setting {
        ...StringSettingFragment
      }
    }
  }
  ${r.vi}
  ${r.iU}
`,u=(e,t)=>{let i=(0,n.tz)(),[r,c]=a.R.useMutation(p,t);return[(t,n)=>{var a;return(a=function*(){let a={settingPayload:{storedValue:{stringVal:{value:t}}}},l=yield r({variables:g(e,n,a),refetchQueries:[(0,o.n4)(p)||""]}),c=l.data?.settingspolicyserviceSetSettingsRestWithoutSettingName?.apiError;if(c&&c.code===s.O.RESOURCE_CONFLICT)try{let t=c.message?JSON.parse(c.message):{};if(t.serializedCT)return yield r({variables:g(e,t.serializedCT,a)})}catch(e){throw Error(i.formatMessage({id:"QO8mzC",defaultMessage:"Failed to parse session token from conflict error"}))}return l},function(){var e=this,t=arguments;return new Promise(function(i,n){var o=a.apply(e,t);function r(e){l(o,i,n,r,s,"next",e)}function s(e){l(o,i,n,r,s,"throw",e)}r(void 0)})})()},c]},g=(e,t,i)=>({input:{key:{typeName:"workspace",name:e},setting:{typeName:"default_namespace_ws",name:""},...t&&{sessionToken:t},...i}})},807633:(e,t,i)=>{i.d(t,{O:()=>o,W:()=>r});var n,o=((n={}).INTERNAL_ERROR="INTERNAL_ERROR",n.BAD_REQUEST="BAD_REQUEST",n.PERMISSION_DENIED="PERMISSION_DENIED",n.UNAUTHENTICATED="UNAUTHENTICATED",n.NOT_FOUND="NOT_FOUND",n.ALREADY_EXISTS="ALREADY_EXISTS",n.RESOURCE_CONFLICT="RESOURCE_CONFLICT",n);let r=e=>Object.values(o).includes(e)},884532:(e,t,i)=>{i.d(t,{Gk:()=>c,J3:()=>r,Pc:()=>s,ob:()=>a});var n=i(889885),o=i(729591);let r=()=>(0,n.FI)("user")??"",a=()=>s(r().split("@")[0]),s=e=>{let t=e.toLowerCase().split("").map(l).join("");return(t=t.replace(/_+/g,"_")).replace(/^_+|_+$/g,"")},l=e=>/[a-z0-9]/i.test(e)?e:"_",c=()=>{let e=(0,n.FI)("currentWorkspaceId"),{data:t,loading:i}=(0,o.Xe)(e);return{defaultCatalog:t?.settingspolicyserviceGetSettingRestWithoutSettingName?.setting?.value?.stringVal?.value||"hive_metastore",loading:i}}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/1809.5fe3ef3c5f.chunk.js.map