"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[79134],{64946:(e,r,t)=>{t.d(r,{$:()=>u,C:()=>d});var i=t(692738),n=t(846947),s=t(141078);let o=(0,s.J1)`
  query IsBudgetAdminQuery(
    $accountId: ID!
    $principalType: String!
    $principalId: ID!
    $permission: String!
    $consistencyToken: String!
  ) {
    isPermitted(
      accountId: $accountId
      principalType: $principalType
      principalId: $principalId
      permission: $permission
      consistencyToken: $consistencyToken
    )
      @rest(
        type: "IsPermittedResponse"
        path: "/preview/accounts/access-control/is-permitted?resource=accounts/{args.accountId}&permission={args.permission}&consistency_token={args.consistencyToken}"
        method: "GET"
      ) {
      errors @type(name: "ApiError") {
        code
        message
        helpUrl
        traceId
      }
      isPermitted
      consistencyToken
    }
  }
`;var a=t(889885),l=t(221628),c=t(842776);let d=(e=!1)=>p(c.i.MANAGE_BUDGET_POLICY,e),u=()=>p(c.i.CREATE_BUDGET_POLICY,!(0,n.ok)()||!(0,n.JF)()),p=(e,r=!1)=>{let t=(0,a.FI)("accountId")??"",n=(0,a.FI)("userId"),[{getEncodedEtag:c},{setEtagQuiet:d}]=(0,l.e3)("is-billing-admin"),u=(0,s.IT)(o,{variables:{accountId:t,permission:e,principalType:"",principalId:"",consistencyToken:c()},skip:!t||!n||r}),p=u.data?.isPermitted?.consistencyToken;return(0,i.useEffect)(()=>{p&&d(p)},[p,d]),u}},109758:(e,r,t)=>{t.d(r,{YS:()=>d,hh:()=>c,oU:()=>l});var i=t(692738),n=t(846947),s=t(488655),o=t(653481),a=t(64946);let l=()=>{let{data:e}=(0,a.C)((0,n.ok)());u(e?.isPermitted?.isPermitted===!1)},c=e=>{let{data:r}=(0,o.Ef)(e);u(r?.isPermitted?.isPermitted===!1)},d=()=>{let{data:e}=(0,a.$)();u(e?.isPermitted?.isPermitted===!1&&(0,n.JF)())},u=e=>{let r=(0,s.Zp)();(0,i.useEffect)(()=>{e&&r("/")},[e,r])}},222572:(e,r,t)=>{t.d(r,{A:()=>l});var i=t(610435),n=t(692738),s=t(375214);function o(e){return(0,i.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,i.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1 8a7 7 0 0 1 11.85-5.047l.65.594V2H15v4h-4V4.5h1.32l-.496-.453-.007-.007a5.5 5.5 0 1 0 .083 7.839l1.063 1.058A7 7 0 0 1 1 8",clipRule:"evenodd"})})}let a=(0,n.forwardRef)((e,r)=>(0,i.Y)(s.I,{ref:r,...e,component:o}));a.displayName="RefreshIcon";let l=a},883069:(e,r,t)=>{t.r(r),t.d(r,{RouteComponent:()=>O});var i=t(610435),n=t(692738),s=t(814510),o=t(382908),a=t(342411),l=t(441535),c=t(217985),d=t(866941),u=t(721854),p=t(318589),m=t(483588),g=t(846947);function y(e,r,t,i,n,s,o){try{var a=e[s](o),l=a.value}catch(e){t(e);return}a.done?r(l):Promise.resolve(l).then(i,n)}function I({onSubmitHandler:e,onSubmissionFailure:r,onSubmissionSuccess:t,validationSchema:s,isCreateInProgress:o}){let l=(0,g.q)(),c=(0,g.CN)(),d=(0,n.useMemo)(()=>({[u.u2.GOVERNED_TAGS]:c?[]:void 0,[u.u2.CUSTOM_TAGS]:[],[u.u2.LIMIT_TYPE]:l?m.xoq.LIMIT_TYPE_MONTHLY:m.xoq.LIMIT_TYPE_DAILY,[u.u2.RATE_LIMIT_CONFIG]:m.XRW.RATE_LIMIT_CONFIG_MEDIUM}),[l,c]);return(0,i.Y)(p.Y,{onSubmit:i=>{var n;return(n=function*(){let{policyId:n,error:s}=yield e(i);s&&r(s),t&&n&&t(n)},function(){var e=this,r=arguments;return new Promise(function(t,i){var s=n.apply(e,r);function o(e){y(s,t,i,o,a,"next",e)}function a(e){y(s,t,i,o,a,"throw",e)}o(void 0)})})()},submitButtonId:"budget-policies.create-page.primary-action-button",submitButtonLabel:(0,i.Y)(a.sA,{id:"XoTsQz",defaultMessage:"Create"}),initialState:d,validationSchema:s,isSubmitInProgress:o,readOnly:!1})}var f=t(141078),v=t(488655),h=t(88277),b=t(949957),T=t(653481);let P=(0,f.J1)`
  mutation serverlesspolicyCreateBudgetPolicy($input: BudgetpolicyCreateBudgetPolicyRequestInput!)
  @component(name: "MoneyInfra.CostManagement") {
    serverlesspolicyCreateBudgetPolicy(input: $input) {
      ...BudgetPolicyFragment
      apiError {
        ...ApiErrorFragment
      }
    }
  }
  ${T.u7}
  ${b.Lu}
`;var Y=t(582179),E=t(569138);function k(e,r,t,i,n,s,o){try{var a=e[s](o),l=a.value}catch(e){t(e);return}a.done?r(l):Promise.resolve(l).then(i,n)}function C(){let e,[r,t]=(0,f.n_)(P,e),n=(0,v.Zp)();return(0,i.Y)(I,{validationSchema:(0,Y.e)(),isCreateInProgress:t.loading,onSubmitHandler:e=>{var t;return(t=function*(){try{let t=yield r({variables:{input:{policy:{...(0,u.fQ)(e)}}}}),i=t.data?.serverlesspolicyCreateBudgetPolicy?.apiError;return{hasError:!!(i||(t.errors||[]).length>0),error:i?.message??t.errors?.[0]?.message,policyId:t.data?.serverlesspolicyCreateBudgetPolicy?.policyId??void 0}}catch(e){if((0,f.Mn)(e))return{hasError:!0,error:e.message};throw e}},function(){var e=this,r=arguments;return new Promise(function(i,n){var s=t.apply(e,r);function o(e){k(s,i,n,o,a,"next",e)}function a(e){k(s,i,n,o,a,"throw",e)}o(void 0)})})()},onSubmissionFailure:e=>{throw h.y.addErrorNotification({title:(0,i.Y)(a.sA,{id:"QKmVP7",defaultMessage:"Could not create budget policy"}),message:e??(0,i.Y)(a.sA,{id:"vg3gOi",defaultMessage:"Unknown error"})}),Error("create budget policy api error")},onSubmissionSuccess:e=>{n(E.R.view(e))}})}var M=t(109758),_=t(620839),S=t(67656),w=t(221628),A=t(156443),R=t(50799),L=t(624912);let $=(0,a.zR)({id:"d+zmqe",defaultMessage:"Create usage policy"}),B=(0,a.zR)({id:"ZhXetL",defaultMessage:"Create serverless usage policy"}),G=()=>{let e=(0,a.tz)();return(0,M.oU)(),(0,M.YS)(),(0,i.Y)(R.c,{renderHeader:F,title:e.formatMessage((0,l.W)("databricks.fe.budget_policy.renameServerlessPolicy",!1)?B:$),size:"full",children:(0,i.Y)(C,{})})};function F(e){return(0,i.Y)(d.r,{breadcrumbs:(0,i.Y)(A.z,{breadcrumbIds:["WORKSPACE_SETTINGS","COMPUTE"],originId:"workspace_settings.compute.budget-policies.new",additionalBreadcrumbs:[(0,i.Y)(s.Q.Item,{children:(0,i.Y)(c.N,{asTypographyLink:!0,to:E.R.list(),componentId:"budget-policies.edit-page.breadcrumb.list-page-link",children:(0,l.W)("databricks.fe.budget_policy.renameServerlessPolicy",!1)?(0,i.Y)(a.sA,{id:"vfwlFx",defaultMessage:"Serverless usage policies"}):(0,i.Y)(a.sA,{id:"u8nUVV",defaultMessage:"Serverless budget policies"})})},"budget-policies.edit-page.breadcrumb.list-page-link")]}),heading:(0,i.FD)("span",{id:e,children:[(0,i.Y)(a.sA,{...$}),(0,i.Y)(o.o.Hint,{children:(0,i.Y)(o.o.Link,{componentId:"budget-policies.create-page.title.learn-more-link",href:S.R.getDbGuideUrl(_.A.BUDGET_POLICY),openInNewTab:!0,children:(0,i.Y)(a.sA,{id:"8GjW2F",defaultMessage:"Learn more"})})})]})})}let O=n.memo((0,L.l)("settings.workspace./compute./budget-policies",()=>(0,i.Y)(w.Kl,{children:(0,i.Y)(G,{})})))}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/79134.b9ee8ecc5f.chunk.js.map