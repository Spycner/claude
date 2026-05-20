"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[61284],{46505:(e,t,r)=>{r.d(t,{Nx:()=>l,jp:()=>d});var i=r(141078),s=r(949957),o=r(653481);let n=(0,i.J1)`
  fragment BudgetPolicyEnforcementStatusFragment on BudgetpolicyBudgetPolicy {
    currentLimitEnforcementActivation {
      state
    }
  }
`,a=(0,i.J1)`
  query BudgetPolicyGetQuery($input: BudgetpolicyGetBudgetPolicyRequestInput!)
  @component(name: "MoneyInfra.CostManagement") {
    serverlesspolicyGetBudgetPolicy(input: $input) {
      ...BudgetPolicyFragment
      ...BudgetPolicyEnforcementStatusFragment
      creatorUserName
      apiError {
        ...ApiErrorFragment
      }
    }
  }
  ${o.u7}
  ${n}
  ${s.Lu}
`,l=(e,t=!1,r,s)=>(0,i._l)(a,{...r,variables:{input:{policyId:e,requireStrongConsistency:t,impersonatedIdentity:s}}}),d=(e,t=!1,r,s)=>(0,i.IT)(a,{...r,variables:{input:{policyId:e,requireStrongConsistency:t,impersonatedIdentity:s}}})},64946:(e,t,r)=>{r.d(t,{$:()=>u,C:()=>c});var i=r(692738),s=r(846947),o=r(141078);let n=(0,o.J1)`
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
`;var a=r(889885),l=r(221628),d=r(842776);let c=(e=!1)=>p(d.i.MANAGE_BUDGET_POLICY,e),u=()=>p(d.i.CREATE_BUDGET_POLICY,!(0,s.ok)()||!(0,s.JF)()),p=(e,t=!1)=>{let r=(0,a.FI)("accountId")??"",s=(0,a.FI)("userId"),[{getEncodedEtag:d},{setEtagQuiet:c}]=(0,l.e3)("is-billing-admin"),u=(0,o.IT)(n,{variables:{accountId:r,permission:e,principalType:"",principalId:"",consistencyToken:d()},skip:!r||!s||t}),p=u.data?.isPermitted?.consistencyToken;return(0,i.useEffect)(()=>{p&&c(p)},[p,c]),u}},87537:(e,t,r)=>{r.d(t,{E:()=>u});var i,s=r(610435);r(692738);var o=r(876726),n=r(140078),a=r(79128),l=r(342411),d=r(217985),c=((i=c||{}).INVALID_POLICY_ID="INVALID_POLICY_ID",i.NOT_FOUND="NOT_FOUND",i.PERMISSION_DENIED="PERMISSION_DENIED",i.OTHER="OTHER",i);let u=({errorCode:e,errorMessage:t,goToBudgetPolicyList:r})=>{let i=null,c=null;switch(((e,t)=>{if("INVALID_PARAMETER_VALUE"===e&&t?.includes("Invalid policyId"))return"INVALID_POLICY_ID";if("NOT_FOUND"===e)return"NOT_FOUND";if("PERMISSION_DENIED"===e)return"PERMISSION_DENIED";return"OTHER"})(e,t)){case"INVALID_POLICY_ID":i=(0,s.Y)(l.sA,{id:"wNYpSS",defaultMessage:"Invalid serverless budget policy ID"}),c=(0,s.Y)(l.sA,{id:"MwCKNH",defaultMessage:"Your serverless budget policy ID is not correctly formatted. Check your serverless budget policy ID."});break;case"NOT_FOUND":i=(0,s.Y)(l.sA,{id:"L03vGv",defaultMessage:"Serverless budget policy not found"}),c=(0,s.Y)(l.sA,{id:"0VUPUF",defaultMessage:"The serverless budget policy you are looking for may have been deleted."});break;case"PERMISSION_DENIED":i=(0,s.Y)(l.sA,{id:"kfxLUU",defaultMessage:"Permission denied"}),c=(0,s.Y)(l.sA,{id:"6PH6mF",defaultMessage:"You do not have the required permission to view this serverless budget policy"});break;case"OTHER":i=(0,s.Y)(l.sA,{id:"2Lf7Pb",defaultMessage:"Unable to load serverless budget policy"}),c=(0,s.Y)(l.sA,{id:"caBX2U",defaultMessage:"Check that the serverless budget policy exists or try again later."})}return(0,s.Y)("div",{children:(0,s.Y)(o.S,{image:(0,s.Y)(n.A,{}),title:i,description:c,button:(0,s.Y)(d.N,{asChild:!0,to:r(),componentId:"budget-policies.error-page.not-found-cta-link",children:(0,s.Y)(a.$n,{componentId:"budget-policies.error-page.not-found-cta-button",children:(0,s.Y)(l.sA,{id:"YpedSC",defaultMessage:"Go to serverless budget policies list"})})})})})}},109758:(e,t,r)=>{r.d(t,{YS:()=>c,hh:()=>d,oU:()=>l});var i=r(692738),s=r(846947),o=r(488655),n=r(653481),a=r(64946);let l=()=>{let{data:e}=(0,a.C)((0,s.ok)());u(e?.isPermitted?.isPermitted===!1)},d=e=>{let{data:t}=(0,n.Ef)(e);u(t?.isPermitted?.isPermitted===!1)},c=()=>{let{data:e}=(0,a.$)();u(e?.isPermitted?.isPermitted===!1&&(0,s.JF)())},u=e=>{let t=(0,o.Zp)();(0,i.useEffect)(()=>{e&&t("/")},[e,t])}},222572:(e,t,r)=>{r.d(t,{A:()=>l});var i=r(610435),s=r(692738),o=r(375214);function n(e){return(0,i.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,i.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1 8a7 7 0 0 1 11.85-5.047l.65.594V2H15v4h-4V4.5h1.32l-.496-.453-.007-.007a5.5 5.5 0 1 0 .083 7.839l1.063 1.058A7 7 0 0 1 1 8",clipRule:"evenodd"})})}let a=(0,s.forwardRef)((e,t)=>(0,i.Y)(o.I,{ref:t,...e,component:n}));a.displayName="RefreshIcon";let l=a},482989:(e,t,r)=>{r.r(t),r.d(t,{RouteComponent:()=>V});var i=r(610435),s=r(692738),o=r(814510),n=r(342411),a=r(441535),l=r(648782),d=r(217985),c=r(866941),u=r(657970),p=r.n(u),g=r(721854),y=r(846947),m=r(778529),I=r.n(m),v=r(318589),f=r(87537);function b(e,t,r,i,s,o,n){try{var a=e[o](n),l=a.value}catch(e){r(e);return}a.done?t(l):Promise.resolve(l).then(i,s)}function P({initialState:e,onSubmitHandler:t,onSubmissionFailure:r,onSubmissionSuccess:s,validationSchema:o,isMutationInProgress:a,getRequestLoading:l,hasError:d,errorMessage:c,errorCode:u,goToBudgetPolicyList:p}){if(l)return(0,i.Y)(v.f,{});if(d)return(0,i.Y)(f.E,{goToBudgetPolicyList:p,errorCode:u,errorMessage:c});return(0,i.Y)(v.Y,{isLimitTypeReadOnly:h(e[g.u2.LIMIT_AMOUNT]),onSubmit:e=>{var i;return(i=function*(){let{policyId:i,error:o}=yield t(e);o&&r(o),s&&i&&s(i)},function(){var e=this,t=arguments;return new Promise(function(r,s){var o=i.apply(e,t);function n(e){b(o,r,s,n,a,"next",e)}function a(e){b(o,r,s,n,a,"throw",e)}n(void 0)})})()},submitButtonId:"budget-policies.edit-page.primary-action-button",submitButtonLabel:(0,i.Y)(n.sA,{id:"z7Pc5U",defaultMessage:"Save"}),initialState:e,validationSchema:o,isSubmitInProgress:a,readOnly:!1})}let h=e=>!I()(e)&&Number.isFinite(e);var E=r(141078),Y=r(488655),T=r(993533),M=r(88277),S=r(46505),_=r(949957),A=r(653481);let N=(0,E.J1)`
  mutation serverlesspolicyUpdateBudgetPolicy($input: BudgetpolicyUpdateBudgetPolicyRequestInput!)
  @component(name: "MoneyInfra.CostManagement") {
    serverlesspolicyUpdateBudgetPolicy(input: $input) {
      ...BudgetPolicyFragment
      apiError {
        ...ApiErrorFragment
      }
    }
  }
  ${A.u7}
  ${_.Lu}
`;var k=r(582179),D=r(569138);function O(e,t,r,i,s,o,n){try{var a=e[o](n),l=a.value}catch(e){r(e);return}a.done?t(l):Promise.resolve(l).then(i,s)}function L({policyId:e}){let t,{data:r,loading:o,error:a}=(0,S.jp)(e,!0,{fetchPolicy:"network-only"}),[l,d]=(0,E.n_)(N,t),c=(0,Y.Zp)(),u=a??r?.serverlesspolicyGetBudgetPolicy?.apiError,m=(0,y.q)(),I=(0,s.useMemo)(()=>p()({[g.u2.LIMIT_TYPE]:m?T.xoq.LIMIT_TYPE_MONTHLY:T.xoq.LIMIT_TYPE_DAILY},(0,g.pt)(r?.serverlesspolicyGetBudgetPolicy)),[r?.serverlesspolicyGetBudgetPolicy,m]);return(0,i.Y)(P,{onSubmitHandler:t=>{var r;return(r=function*(){try{let r=yield l({variables:{input:{policy:{...(0,g.fQ)(t),policyId:e}}}}),i=r.data?.serverlesspolicyUpdateBudgetPolicy?.apiError;return{hasError:!!(i||(r.errors||[]).length>0),error:i?.message??r.errors?.[0]?.message,policyId:r.data?.serverlesspolicyUpdateBudgetPolicy?.policyId??void 0}}catch(e){if((0,E.Mn)(e))return{hasError:!0,error:e.message};throw e}},function(){var e=this,t=arguments;return new Promise(function(i,s){var o=r.apply(e,t);function n(e){O(o,i,s,n,a,"next",e)}function a(e){O(o,i,s,n,a,"throw",e)}n(void 0)})})()},getRequestLoading:o,hasError:!!u,goToBudgetPolicyList:D.R.list,errorCode:a?null:r?.serverlesspolicyGetBudgetPolicy?.apiError?.code,errorMessage:u?.message,initialState:I,validationSchema:(0,k.e)(),isMutationInProgress:d.loading,onSubmissionFailure:e=>{throw M.y.addErrorNotification({title:(0,i.Y)(n.sA,{id:"+9Aq1R",defaultMessage:"Could not save budget policy"}),message:e??(0,i.Y)(n.sA,{id:"vg3gOi",defaultMessage:"Unknown error"})}),Error("update budget policy api error")},onSubmissionSuccess:e=>{c(D.R.view(e))}})}var B=r(109758),R=r(221628),U=r(156443),w=r(50799),C=r(624912);let $=(0,n.zR)({id:"Lf/9il",defaultMessage:"Edit budget policy"}),F=(0,n.zR)({id:"ssoxFd",defaultMessage:"Edit serverless usage policy"}),G=()=>{let e=(0,n.tz)(),{id:t}=(0,l.g)();return(0,B.oU)(),(0,B.hh)(t??""),(0,i.Y)(w.c,{renderHeader:x,title:e.formatMessage((0,a.W)("databricks.fe.budget_policy.renameServerlessPolicy",!1)?F:$),size:"full",children:(0,i.Y)(L,{policyId:t??""})})};function x(e){return(0,i.Y)(c.r,{breadcrumbs:(0,i.Y)(U.z,{breadcrumbIds:["WORKSPACE_SETTINGS","COMPUTE"],originId:"workspace_settings.compute.budget-policies.edit.$id",additionalBreadcrumbs:[(0,i.Y)(o.Q.Item,{children:(0,i.Y)(d.N,{asTypographyLink:!0,to:D.R.list(),componentId:"budget-policies.edit-page.breadcrumb.list-page-link",children:(0,a.W)("databricks.fe.budget_policy.renameServerlessPolicy",!1)?(0,i.Y)(n.sA,{id:"vfwlFx",defaultMessage:"Serverless usage policies"}):(0,i.Y)(n.sA,{id:"u8nUVV",defaultMessage:"Serverless budget policies"})})},"budget-policies.edit-page.breadcrumb.list-page-link")]}),heading:(0,i.Y)("span",{id:e,children:(0,i.Y)(n.sA,{...(0,a.W)("databricks.fe.budget_policy.renameServerlessPolicy",!1)?F:$})})})}let V=s.memo((0,C.l)("settings.workspace./compute./budget-policies",()=>(0,i.Y)(R.Kl,{children:(0,i.Y)(G,{})})))}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/61284.e9ce1ae2f3.chunk.js.map