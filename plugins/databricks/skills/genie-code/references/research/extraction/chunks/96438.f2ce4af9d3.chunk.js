(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[96438],{77414:(e,n,a)=>{"use strict";function i({accountId:e,isAccountLevelPermission:n,tagId:a}){let t=`accounts/${e}`;return!n&&a?`${t}/tagPolicies/${a}`:t}a.d(n,{o:()=>i})},253245:e=>{var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetGovernedTagRuleSetQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"accountId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"name"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"etag"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getRuleSet"},arguments:[{kind:"Argument",name:{kind:"Name",value:"accountId"},value:{kind:"Variable",name:{kind:"Name",value:"accountId"}}},{kind:"Argument",name:{kind:"Name",value:"name"},value:{kind:"Variable",name:{kind:"Name",value:"name"}}},{kind:"Argument",name:{kind:"Name",value:"etag"},value:{kind:"Variable",name:{kind:"Name",value:"etag"}}}],directives:[{kind:"Directive",name:{kind:"Name",value:"rest"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"StringValue",value:"RuleSet",block:!1}},{kind:"Argument",name:{kind:"Name",value:"path"},value:{kind:"StringValue",value:"/preview/accounts/{args.accountId}/access-control/rule-sets?etag={args.etag}&name={args.name}",block:!1}},{kind:"Argument",name:{kind:"Name",value:"method"},value:{kind:"StringValue",value:"GET",block:!1}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"etag"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"grantRules"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"type"},arguments:[{kind:"Argument",name:{kind:"Name",value:"name"},value:{kind:"StringValue",value:"GrantRule",block:!1}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"principals"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"role"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:415}};n.loc.source={body:'query GetGovernedTagRuleSetQuery($accountId: ID!, $name: String!, $etag: String!) {\n  getRuleSet(accountId: $accountId, name: $name, etag: $etag)\n    @rest(\n      type: "RuleSet"\n      path: "/preview/accounts/{args.accountId}/access-control/rule-sets?etag={args.etag}&name={args.name}"\n      method: "GET"\n    ) {\n    name\n    etag\n    grantRules @type(name: "GrantRule") {\n      principals\n      role\n    }\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};function i(e,n){for(var a=0;a<e.definitions.length;a++){var i=e.definitions[a];if(i.name&&i.name.value==n)return i}}n.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,a){if("FragmentSpread"===n.kind)a.add(n.name.value);else if("VariableDefinition"===n.kind){var i=n.type;"NamedType"===i.kind&&a.add(i.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,a)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,a)}),n.definitions&&n.definitions.forEach(function(n){e(n,a)})}(e,n),a[e.name.value]=n}}),e.exports=n,e.exports.GetGovernedTagRuleSetQuery=function(e,n){var t={kind:e.kind,definitions:[i(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=a[n]||new Set,l=new Set,s=new Set;for(r.forEach(function(e){s.add(e)});s.size>0;){var o=s;s=new Set,o.forEach(function(e){l.has(e)||(l.add(e),(a[e]||new Set).forEach(function(e){s.add(e)}))})}return l.forEach(function(n){var a=i(e,n);a&&t.definitions.push(a)}),t}(n,"GetGovernedTagRuleSetQuery")},302299:(e,n,a)=>{"use strict";a.d(n,{v:()=>o});var i=a(342411),t=a(968131),r=a(173625),l=a(427222),s=a(318252);function o({isAccountLevelPermission:e,isSystemTag:n,tagId:a,existingPermissions:c,etag:u}){let d=(0,i.tz)(),[m,p]=(0,s.W)({isAccountLevelPermission:e,tagId:a,etag:u}),v=p.error?.graphQLErrors?.map(e=>e.extensions?.apiError?.message).join("\n")||p.error?.message;return(0,t.v)({isAccountLevelPermission:e,isSystemTag:n,isLoading:p.loading,error:p.error?v:void 0,onOpen:()=>{},onClose:()=>{p.reset()},onSubmit:({permissions:e},n)=>{m((0,r.TQ)({grantedPermissions:e,existingPermissions:c}),{onCompleted:()=>{n(),(0,l.R)({componentId:"accounts_ui.governance_hub.governed_tags.tag_permission_updated_success_notification",title:d.formatMessage({id:"qHLyyt",defaultMessage:"Successful!"}),description:d.formatMessage({id:"I0wtUd",defaultMessage:"Governed tag permissions have been updated. This change might take a few minutes to take effect"})})}})}})}},318252:(e,n,a)=>{"use strict";a.d(n,{W:()=>u});var i=a(332098),t=a(141078),r=a(253245),l=a.n(r),s=a(579105),o=a.n(s),c=a(77414);function u({isAccountLevelPermission:e,tagId:n,etag:a}){let{accountId:r}=(0,i.C6)().getLoadedSessionData(),s=(0,c.o)({accountId:r,isAccountLevelPermission:e,tagId:n}),d=`${s}/ruleSets/default`,[m,p]=(0,t.n_)(o(),{awaitRefetchQueries:!0});return[(e,n)=>m({variables:{accountId:r,input:{name:d,ruleSet:{name:d,etag:a,grantRules:e}}},refetchQueries:e=>[{query:l(),variables:{accountId:r,name:d,etag:e.data?.updateRuleSet?.etag??""}}],awaitRefetchQueries:!0,...n}),p]}},400136:(e,n,a)=>{"use strict";a.d(n,{A:()=>S});var i=a(513384),t=a(657709),r=a(378003),l=a(692738),s=a(783772),o=a.n(s);let c=function(e){var n=e.prefixCls,a=e.className,i=e.width,r=e.style;return l.createElement("h3",{className:o()(n,a),style:(0,t.A)({width:i},r)})};var u=a(535881);let d=function(e){var n=function(n){var a=e.width,i=e.rows;if(Array.isArray(a))return a[n];if((void 0===i?2:i)-1===n)return a},a=e.prefixCls,i=e.className,t=e.style,r=e.rows,s=(0,u.A)(Array(r)).map(function(e,a){return l.createElement("li",{key:a,style:{width:n(a)}})});return l.createElement("ul",{className:o()(a,i),style:t},s)};var m=a(513266);let p=function(e){var n,a,r=e.prefixCls,s=e.className,c=e.style,u=e.size,d=e.shape,m=o()((n={},(0,i.A)(n,"".concat(r,"-lg"),"large"===u),(0,i.A)(n,"".concat(r,"-sm"),"small"===u),n)),p=o()((a={},(0,i.A)(a,"".concat(r,"-circle"),"circle"===d),(0,i.A)(a,"".concat(r,"-square"),"square"===d),(0,i.A)(a,"".concat(r,"-round"),"round"===d),a));return l.createElement("span",{className:o()(r,m,p,s),style:(0,t.A)((0,t.A)({},"number"==typeof u?{width:u,height:u,lineHeight:"".concat(u,"px")}:{}),c)})};var v=a(97787),g=function(e){return l.createElement(m.TG,null,function(n){var a=n.getPrefixCls,r=e.prefixCls,s=e.className,c=e.active,u=a("skeleton",r),d=(0,v.A)(e,["prefixCls"]),m=o()(u,"".concat(u,"-element"),(0,i.A)({},"".concat(u,"-active"),c),s);return l.createElement("div",{className:m},l.createElement(p,(0,t.A)({prefixCls:"".concat(u,"-avatar")},d)))})};g.defaultProps={size:"default",shape:"circle"};var k=function(e){return l.createElement(m.TG,null,function(n){var a=n.getPrefixCls,r=e.prefixCls,s=e.className,c=e.active,u=a("skeleton",r),d=(0,v.A)(e,["prefixCls"]),m=o()(u,"".concat(u,"-element"),(0,i.A)({},"".concat(u,"-active"),c),s);return l.createElement("div",{className:m},l.createElement(p,(0,t.A)({prefixCls:"".concat(u,"-button")},d)))})};k.defaultProps={size:"default"};var f=function(e){return l.createElement(m.TG,null,function(n){var a=n.getPrefixCls,r=e.prefixCls,s=e.className,c=e.active,u=a("skeleton",r),d=(0,v.A)(e,["prefixCls"]),m=o()(u,"".concat(u,"-element"),(0,i.A)({},"".concat(u,"-active"),c),s);return l.createElement("div",{className:m},l.createElement(p,(0,t.A)({prefixCls:"".concat(u,"-input")},d)))})};function y(e){if(e&&"object"===(0,r.A)(e))return e;return{}}f.defaultProps={size:"default"};var N=function(e){return l.createElement(m.TG,null,function(n){var a=n.getPrefixCls,r=n.direction,s=e.prefixCls,u=e.loading,m=e.className,v=e.children,g=e.avatar,k=e.title,f=e.paragraph,N=e.active,S=e.round,I=a("skeleton",s);if(u||!("loading"in e)){var h=!!g,A=!!k,b=!!f;if(h){var $=(0,t.A)((0,t.A)({prefixCls:"".concat(I,"-avatar")},function(e,n){if(e&&!n)return{size:"large",shape:"square"};return{size:"large",shape:"circle"}}(A,b)),y(g));G=l.createElement("div",{className:"".concat(I,"-header")},l.createElement(p,$))}if(A||b){if(A){var E,G,T,w,P,C=(0,t.A)((0,t.A)({prefixCls:"".concat(I,"-title")},function(e,n){if(!e&&n)return{width:"38%"};if(e&&n)return{width:"50%"};return{}}(h,b)),y(k));w=l.createElement(c,C)}if(b){var x,D=(0,t.A)((0,t.A)({prefixCls:"".concat(I,"-paragraph")},(x={},h&&A||(x.width="61%"),!h&&A?x.rows=3:x.rows=2,x)),y(f));P=l.createElement(d,D)}T=l.createElement("div",{className:"".concat(I,"-content")},w,P)}var R=o()(I,(E={},(0,i.A)(E,"".concat(I,"-with-avatar"),h),(0,i.A)(E,"".concat(I,"-active"),N),(0,i.A)(E,"".concat(I,"-rtl"),"rtl"===r),(0,i.A)(E,"".concat(I,"-round"),S),E),m);return l.createElement("div",{className:R},G,T)}return v})};N.defaultProps={avatar:!1,title:!0,paragraph:!0},N.Button=k,N.Avatar=g,N.Input=f,N.Image=function(e){return l.createElement(m.TG,null,function(n){var a=n.getPrefixCls,i=e.prefixCls,t=e.className,r=e.style,s=a("skeleton",i),c=o()(s,"".concat(s,"-element"),t);return l.createElement("div",{className:c},l.createElement("div",{className:o()("".concat(s,"-image"),t),style:r},l.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(s,"-image-svg")},l.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(s,"-image-path")}))))})};let S=N},402720:(e,n,a)=>{"use strict";let i;a.d(n,{P:()=>c});var t=a(610435),r=a(400136),l=a(591333),s=a(429608),o=a(866370);let c=((i=({dangerouslySetAntdProps:e,label:n,loadingDescription:a="LegacySkeleton",...i})=>{let c=i.loading??!0;return(0,t.Y)(s.wC,{children:(0,t.FD)(l.U,{label:n,children:[c&&(0,t.Y)(o.G,{description:a}),(0,t.Y)(r.A,{...i,...e})]})})}).Button=r.A.Button,i.Image=r.A.Image,i.Input=r.A.Input,i)},427222:(e,n,a)=>{"use strict";a.d(n,{R:()=>t});var i=a(697453);function t({componentId:e,title:n,description:a}){i.ds.call({title:{value:n},description:{value:a},isCloseable:!0,root:{componentId:e,severity:"success"}})}},569211:e=>{var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GovernedTagsIsPermittedQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"account_id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"permission"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"resource"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"consistency_token"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"accountConsoleIsPermitted"},arguments:[{kind:"Argument",name:{kind:"Name",value:"account_id"},value:{kind:"Variable",name:{kind:"Name",value:"account_id"}}},{kind:"Argument",name:{kind:"Name",value:"permission"},value:{kind:"Variable",name:{kind:"Name",value:"permission"}}},{kind:"Argument",name:{kind:"Name",value:"resource"},value:{kind:"Variable",name:{kind:"Name",value:"resource"}}},{kind:"Argument",name:{kind:"Name",value:"consistency_token"},value:{kind:"Variable",name:{kind:"Name",value:"consistency_token"}}}],directives:[{kind:"Directive",name:{kind:"Name",value:"rest"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"StringValue",value:"IsPermittedResponse",block:!1}},{kind:"Argument",name:{kind:"Name",value:"path"},value:{kind:"StringValue",value:"/preview/accounts/{args.account_id}/access-control/is-permitted/?{args}",block:!1}},{kind:"Argument",name:{kind:"Name",value:"method"},value:{kind:"StringValue",value:"GET",block:!1}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isPermitted"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"errors"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"type"},arguments:[{kind:"Argument",name:{kind:"Name",value:"name"},value:{kind:"StringValue",value:"ApiError",block:!1}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"code"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"helpUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"traceId"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:565}};n.loc.source={body:'query GovernedTagsIsPermittedQuery(\n  $account_id: ID!\n  $permission: String!\n  $resource: String!\n  $consistency_token: String!\n) {\n  accountConsoleIsPermitted(\n    account_id: $account_id\n    permission: $permission\n    resource: $resource\n    consistency_token: $consistency_token\n  )\n    @rest(\n      type: "IsPermittedResponse"\n      path: "/preview/accounts/{args.account_id}/access-control/is-permitted/?{args}"\n      method: "GET"\n    ) {\n    isPermitted\n    errors @type(name: "ApiError") {\n      code\n      message\n      helpUrl\n      traceId\n    }\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};function i(e,n){for(var a=0;a<e.definitions.length;a++){var i=e.definitions[a];if(i.name&&i.name.value==n)return i}}n.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,a){if("FragmentSpread"===n.kind)a.add(n.name.value);else if("VariableDefinition"===n.kind){var i=n.type;"NamedType"===i.kind&&a.add(i.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,a)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,a)}),n.definitions&&n.definitions.forEach(function(n){e(n,a)})}(e,n),a[e.name.value]=n}}),e.exports=n,e.exports.GovernedTagsIsPermittedQuery=function(e,n){var t={kind:e.kind,definitions:[i(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=a[n]||new Set,l=new Set,s=new Set;for(r.forEach(function(e){s.add(e)});s.size>0;){var o=s;s=new Set,o.forEach(function(e){l.has(e)||(l.add(e),(a[e]||new Set).forEach(function(e){s.add(e)}))})}return l.forEach(function(n){var a=i(e,n);a&&t.definitions.push(a)}),t}(n,"GovernedTagsIsPermittedQuery")},570127:(e,n,a)=>{"use strict";a.d(n,{r:()=>c});var i=a(692738),t=a(342411),r=a(808251),l=a(173625),s=a(427222),o=a(318252);function c({isAccountLevelPermission:e,tagId:n,existingPermissions:a,uniqueNameToSubjectsMap:u,etag:d}){let m=(0,t.tz)(),[p,v]=(0,i.useState)(""),[g,k]=(0,i.useState)(),[f,y]=(0,o.W)({isAccountLevelPermission:e,tagId:n,etag:d}),N=y.error?.graphQLErrors?.map(e=>e.extensions?.apiError?.message).join("\n")||y.error?.message,{showTagRemoveAccessModal:S,TagRemoveAccessModal:I}=(0,r.r)({principal:p,roleToRemove:g,uniqueNameToSubjectsMap:u,isLoading:y.loading,error:y.error?N:void 0,onOpen:()=>{},onClose:()=>{y.reset()},onConfirm:e=>{if(void 0===g)return;let n=(0,l.Cs)({existingPermissions:a,roleToRemove:g,principalToRemove:p}),i=(0,l.Mn)(p,u);f(n,{onCompleted:()=>{e(),(0,s.R)({componentId:"accounts_ui.governance_hub.governed_tags.tag_permission_removed_success_notification",title:m.formatMessage({id:"v1ud7q",defaultMessage:"Successful!"}),description:m.formatMessage({id:"uGsq2u",defaultMessage:"Permissions for {displayPrincipalName} have been removed"},{displayPrincipalName:i})})}})}});return{showTagRemoveAccessModal:({selectedPrincipal:e,selectedRole:n})=>{v(e),k(n),S()},TagRemoveAccessModal:I}}},579105:e=>{var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"UpdateGovernedTagRuleSetMutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"accountId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"UpdateRuleSetInput"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"updateRuleSet"},arguments:[{kind:"Argument",name:{kind:"Name",value:"accountId"},value:{kind:"Variable",name:{kind:"Name",value:"accountId"}}},{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[{kind:"Directive",name:{kind:"Name",value:"rest"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"StringValue",value:"RuleSet",block:!1}},{kind:"Argument",name:{kind:"Name",value:"path"},value:{kind:"StringValue",value:"/preview/accounts/{args.accountId}/access-control/rule-sets",block:!1}},{kind:"Argument",name:{kind:"Name",value:"method"},value:{kind:"StringValue",value:"PUT",block:!1}},{kind:"Argument",name:{kind:"Name",value:"bodyKey"},value:{kind:"StringValue",value:"input",block:!1}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"etag"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"grantRules"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"type"},arguments:[{kind:"Argument",name:{kind:"Name",value:"name"},value:{kind:"StringValue",value:"GrantRule",block:!1}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"principals"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"role"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:402}};n.loc.source={body:'mutation UpdateGovernedTagRuleSetMutation($accountId: ID!, $input: UpdateRuleSetInput!) {\n  updateRuleSet(accountId: $accountId, input: $input)\n    @rest(\n      type: "RuleSet"\n      path: "/preview/accounts/{args.accountId}/access-control/rule-sets"\n      method: "PUT"\n      bodyKey: "input"\n    ) {\n    name\n    etag\n    grantRules @type(name: "GrantRule") {\n      principals\n      role\n    }\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};function i(e,n){for(var a=0;a<e.definitions.length;a++){var i=e.definitions[a];if(i.name&&i.name.value==n)return i}}n.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,a){if("FragmentSpread"===n.kind)a.add(n.name.value);else if("VariableDefinition"===n.kind){var i=n.type;"NamedType"===i.kind&&a.add(i.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,a)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,a)}),n.definitions&&n.definitions.forEach(function(n){e(n,a)})}(e,n),a[e.name.value]=n}}),e.exports=n,e.exports.UpdateGovernedTagRuleSetMutation=function(e,n){var t={kind:e.kind,definitions:[i(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=a[n]||new Set,l=new Set,s=new Set;for(r.forEach(function(e){s.add(e)});s.size>0;){var o=s;s=new Set,o.forEach(function(e){l.has(e)||(l.add(e),(a[e]||new Set).forEach(function(e){s.add(e)}))})}return l.forEach(function(n){var a=i(e,n);a&&t.definitions.push(a)}),t}(n,"UpdateGovernedTagRuleSetMutation")},655841:(e,n,a)=>{"use strict";a.d(n,{GX:()=>d,HA:()=>r,Ij:()=>u,U8:()=>t,_:()=>l,e:()=>o,fq:()=>m,n$:()=>c,r4:()=>s});var i=a(141078);let t=(0,i.J1)`
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
`,r=(0,i.J1)`
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
  ${t}
`,l=(0,i.J1)`
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
  ${t}
`,s=(0,i.J1)`
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
  ${t}
`,o=(0,i.J1)`
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
  ${t}
`,c=(0,i.J1)`
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
  ${t}
`,u=(0,i.J1)`
  mutation GetOrCreateIdpUser($input: AclmanagerIdentityapiGetOrCreateUserRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateUser(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,d=(0,i.J1)`
  mutation GetOrCreateIdpGroup($input: AclmanagerIdentityapiGetOrCreateGroupRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateGroup(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,m=(0,i.J1)`
  mutation GetOrCreateIdpServicePrincipal($input: AclmanagerIdentityapiGetOrCreateServicePrincipalRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateServicePrincipal(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`},699904:(e,n,a)=>{"use strict";a.d(n,{O:()=>o});var i=a(332098),t=a(351293),r=a(141078),l=a(569211),s=a.n(l);function o({isAccountLevelPermission:e,permission:n,tagId:a,skip:l}){let{accountId:c}=(0,i.C6)().getLoadedSessionData(),u=function({isAccountLevelPermission:e,accountId:n,tagId:a}){let i=`accounts/${n}`;return!e&&a?`${i}/tagPolicies/${a}`:i}({isAccountLevelPermission:e,accountId:c,tagId:a}),[{getEtag:d}]=(0,t.e3)(t.oq.IS_PERMITTED);return(0,r.IT)(s(),{variables:{account_id:c,permission:n,resource:u,consistency_token:d()},skip:l})}},974688:(e,n,a)=>{"use strict";a.d(n,{K:()=>o});var i=a(332098),t=a(141078),r=a(253245),l=a.n(r),s=a(77414);function o({isAccountLevelPermission:e,tagId:n,skip:a}){let{accountId:r}=(0,i.C6)().getLoadedSessionData(),c=(0,s.o)({accountId:r,isAccountLevelPermission:e,tagId:n}),u=`${c}/ruleSets/default`;return(0,t.IT)(l(),{variables:{accountId:r,name:u,etag:""},skip:a})}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/96438.f2ce4af9d3.chunk.js.map