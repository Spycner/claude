"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[58871],{9965:(e,i,r)=>{r.d(i,{p:()=>l});var t=r(141078),a=r(186694),o=r(488690);let n=(0,t.J1)`
  query MarketplaceGetProvider($input: MarketplaceGetProviderInput!)
  @component(name: "LakehouseCollaboration.Marketplace") {
    marketplaceGetProvider(input: $input) {
      provider {
        businessContactEmail
        description
        iconFilePath
        darkModeIconFilePath
        id
        isFeatured
        name
        publishedBy
        supportContactEmail
        companyWebsiteLink
        termOfServiceLink
        privacyPolicyLink
        iconFileId
        darkModeIconFileId
      }
      apiError {
        ...ApiErrorFragment
      }
    }
  }
  ${o.vi}
`;function l(e,i){return(0,a.T)(n,{variables:{input:{id:e}},skip:!e,...i})}},758871:(e,i,r)=>{r.r(i),r.d(i,{EditProfile:()=>E,RouteComponent:()=>L});var t=r(610435),a=r(692738),o=r(561587),n=r(811747),l=r(509695),d=r(52430),s=r(764236),c=r(90710),u=r(342411),p=r(886100),f=r(22191),m=r(648782),k=r(772106),h=r(588041),v=r(748436),g=r(891655),F=r(9965),P=r(896388),b=r(725025),y=r(776541);function I(e,i,r,t,a,o,n){try{var l=e[o](n),d=l.value}catch(e){r(e);return}l.done?i(d):Promise.resolve(d).then(t,a)}function E({profileId:e}){let[i,r]=(0,a.useState)(0),[n,m]=(0,a.useState)(!1),g=(0,u.tz)(),L=(0,l.h)(),{navigateToProviderProfiles:C}=(0,v.Re)(),Y=(0,o.mN)({shouldFocusError:!0,mode:"onTouched"}),[O]=(0,b.D)({onCompleted:()=>{L.success({message:g.formatMessage({id:"LF7fEh",defaultMessage:"Provider profile updated"})}),C()},onError:e=>{L.error({message:g.formatMessage({id:"NZOxXO",defaultMessage:"Error updating provider profile"}),description:e?.message}),p.iT.log(f.Es.Marketplace,"marketplaceEditProfileError",e)}}),{data:S,loading:w}=(0,F.p)(e),R=(0,a.useMemo)(()=>(function(e){let{marketplaceGetProvider:i}=e||{},{name:r,businessContactEmail:t,termOfServiceLink:a,privacyPolicyLink:o,supportContactEmail:n,description:l,iconFilePath:d,darkModeIconFilePath:s,companyWebsiteLink:c,iconFileId:u,darkModeIconFileId:p}=i?.provider||{};return{name:r??"",businessContactEmail:t??"",termOfServiceLink:a??"",privacyPolicyLink:o??"",supportContactEmail:n??"",description:l??"",iconFilePath:d??"",darkIconFilePath:s??"",companyWebsiteLink:c??"",iconFileId:u??"",darkIconFileId:p??""}})(S),[S]),{createLogoFiles:W,uploadLogosToS3:z}=(0,y.o)(),G=e=>{let i=e||33;r(e=>e+i)};return(0,a.useEffect)(()=>{R&&Y.reset(R)},[Y,R]),(0,t.FD)(d.f,{children:[(0,t.Y)(s.h,{}),(0,t.Y)(c.Y,{title:g.formatMessage({id:"GLd3Uo",defaultMessage:"Edit Profile"}),breadcrumbs:(0,t.Y)(k.M,{})}),(0,t.Y)(s.h,{}),(0,t.Y)(o.Op,{...Y,children:(0,t.Y)(h.PO,{handleSubmit:Y.handleSubmit,onSubmit:i=>{var t;return(t=function*(){try{m(!0);let{logoFile:r,darkModeLogoFile:t,...a}=i,o=R.iconFileId,n=R.darkIconFileId;if(r||t){let[i,a]=yield W({logoFile:r,darkLogoFile:t,parentId:e});G(),yield z({logoFile:r,darkLogoFile:t,logoFileCreated:i,darkLogoFileCreated:a}),G(),o=i?.data?.marketplaceCreateFile?.fileInfo?.id,n=a?.data?.marketplaceCreateFile?.fileInfo?.id}else G(66);yield O({variables:{input:{id:e,provider:{name:a.name,businessContactEmail:a.businessContactEmail,termOfServiceLink:a.termOfServiceLink,privacyPolicyLink:a.privacyPolicyLink,supportContactEmail:a.supportContactEmail,description:a.description,companyWebsiteLink:a.companyWebsiteLink,iconFileId:o??R.iconFileId,darkModeIconFileId:n||void 0}}},refetchQueries:[{query:P.f}],awaitRefetchQueries:!0})}catch{r(0)}finally{m(!1)}},function(){var e=this,i=arguments;return new Promise(function(r,a){var o=t.apply(e,i);function n(e){I(o,r,a,n,l,"next",e)}function l(e){I(o,r,a,n,l,"throw",e)}n(void 0)})})()},loading:w||n,savingProgress:i,providerId:e,logoFilePath:R.iconFilePath,darkLogoFilePath:R.darkIconFilePath,savingProgressMessage:M[i/33]})})]})}let M=[(0,u.zR)({id:"OwcEce",defaultMessage:"Creating file"}),(0,u.zR)({id:"Tbkuvc",defaultMessage:"Uploading file"}),(0,u.zR)({id:"7Wbfej",defaultMessage:"Updating profile"})];function L(){let{profileId:e=""}=(0,m.g)();return(0,t.Y)(n.g,{children:(0,t.Y)(g.y,{children:(0,t.Y)(E,{profileId:e})})})}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/58871.0eef6a20be.chunk.js.map