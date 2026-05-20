"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[18408],{4377:(e,s,t)=>{t.d(s,{A:()=>o});var a=t(610435),n=t(783772),r=t.n(n);let o=(0,t(692738).forwardRef)(function({className:e,type:s,...t},n){return(0,a.Y)("button",{ref:n,className:r()("dbsql-plain-button",{"dbsql-plain-button-link":"link"===s},e),type:"button",...t})})},104096:(e,s,t)=>{function a(e=[],s){if(e?.length!==s?.length)return!0;for(let t of e)if(!s.find(e=>t.destinationId&&t.destinationId===e.destinationId||t.userName&&t.userName===e.userName))return!0;return!1}function n(e){return`${window.location.origin}/#job/${e}`}t.d(s,{AA:()=>r,Ih:()=>o,Jm:()=>n,s_:()=>i,yH:()=>a});let r=1009,o=({isFromRedash:e,canEditJob:s,canManageEntity:t,entityType:a,isRedashV2SubscribeUnsubscribeEnabled:n})=>e&&n&&!s&&t&&"query"!==a;function i(e){return`refresh-${e}`}},145034:(e,s,t)=>{t.d(s,{A:()=>R});var a=t(610435),n=t(559527),r=t(956935),o=t(856415),i=t(31916),d=t(740752),l=t(783772),u=t.n(l),c=t(680519),h=t.n(c),p=t(692738),m=t(994393),b=t(466213),g=t(200356),f=t(4377),_=t(533397),I=t(65061),v=t(141078);let S=(0,v.J1)`
  fragment RedashApiErrorFragment on ApiError {
    code
    message
    helpUrl
    traceId
  }
`,y=(0,v.J1)`
  fragment RichUserInfo on RichUser {
    id
    fullname
    email
  }
`,Y=(0,v.J1)`
  query SearchWorkspaceQuery($input: SearchmidtierSearchWorkspaceInput!)
  @component(name: "ServingInfra.DBSQLUIService") {
    searchmidtierSearchWorkspace(input: $input) {
      nextPageKey
      results {
        query {
          queryId
          name
          owner {
            ...RichUserInfo
            __typename
          }
          queryFragment
          descriptionFragment
          lastEditedAt
          __typename
        }
      }
      apiError {
        ...RedashApiErrorFragment
      }
    }
  }
  ${S}
  ${y}
`;var A=t(624704),D=t(881601),M=t(993722),C=t(74438),N=t(342411),T=t(16589),E=t(483588);let{Option:k}=C._v,F=(0,r.AH)("&:not(.inactive){cursor:pointer;}");function R(e){var s,t;let r,[l,c]=(0,p.useState)(""),[v,S]=(0,p.useState)(e.selectedQuery??null),y=(0,N.tz)(),{isLoading:R}=(0,m.useQuery)(["query-preselect",e.preSelectedQueryId],()=>D.c.get({id:e.preSelectedQueryId}),{enabled:!!(e.preSelectedQueryId&&!e.selectedQuery&&!v),onSuccess:s=>{c(""),S(s),e.onChange(s)}}),w=!v&&!!e.preSelectedQueryId||R,q=function(e){let[s,t]=(0,p.useState)(e),a=(0,b.YQ)(e=>{t(e)},200);return(0,p.useEffect)(()=>{a(e)},[e,a]),s}(l),{data:U,isLoading:x}=(0,T.IA)(10,[E.z$1.QUERY]),{data:j,loading:J}=(s={filters:{resultTypes:[g.iId.QUERY]},maxResults:25,targetResults:25,query:q},t={skip:!q},r={input:{...s??{}}},(0,I.IT)(Y,{variables:r,...t,onCompleted:void 0})),P=q?(j?.searchmidtierSearchWorkspace?.results||[]).map(e=>({id:e.query?.queryId,name:e.query?.name?.replaceAll("<dbtag1>","")})).slice(0,25):U,L=P?.filter(s=>s?.id&&!e.excludedQueryIds.includes(s?.id)),$=q?J:x;function z(s){let t=null;s&&((t=h()(L,{id:s}))||A.A.error(y.formatMessage({id:"apxyel",defaultMessage:"Something went wrong..."}),y.formatMessage({id:"9RW9Z5",defaultMessage:"Couldn't select query"}))),c(""),S(t??null),e.onChange(t)}(0,p.useEffect)(()=>{e.selectedQuery&&S(e.selectedQuery)},[e.selectedQuery]);let Q=y.formatMessage({id:"8WXRsg",defaultMessage:"Search a query by name"}),B=(0,a.Y)(f.A,{onClick:()=>z(null),children:(0,a.Y)("i",{className:"fa fa-times hide-in-percy","aria-hidden":"true"})}),K=(0,a.Y)("i",{className:u()("fa fa-spinner fa-pulse hide-in-percy",{hidden:!$&&!w}),"aria-hidden":"true"}),O=y.formatMessage({id:"Ewvr1h",defaultMessage:"Select a query"});if(e.disabled)return(0,a.Y)(o.A,{id:e.id,value:v?v.name:"","aria-label":O,placeholder:Q,disabled:!0});if("select"===e.type){let s=v?v.name:l;return(0,a.Y)(C._v,{id:e.id,dangerouslySetAntdProps:{showSearch:!0,dropdownMatchSelectWidth:!1,suffixIcon:K},loading:$||e.loading||w,placeholder:Q,value:s??void 0,onSearch:c,onChange:z,notFoundContent:null,filterOption:!1,defaultActiveFirstOption:!1,className:e.className,"data-testid":"QuerySelector","aria-label":O,disabled:w,mode:w?"tags":void 0,css:{width:"100%"},children:L&&L.map(e=>{let s=e.is_draft??!1;return(0,a.FD)(k,{value:e.id,disabled:s,className:"query-selector-result",css:F,"data-testid":`QueryId${e.id}`,children:[e.name," ",(0,a.Y)(_.zu,{isArchived:e.is_archived??!1,isDraft:e.is_draft??!1,tags:e.tags,className:u()("inline-tags-control",{disabled:s})})]},e.id)})})}return(0,a.FD)("span",{"data-testid":"QuerySelector",children:[v?(0,a.FD)(a.FK,{children:[(0,a.Y)(o.A,{id:e.id,css:{border:e.warningMessage?`1px solid ${M.vU}`:""},value:v.name,"aria-label":O,suffix:B,readOnly:!0}),e.warningMessage&&(0,a.FD)("div",{css:{marginTop:8,color:M.vU},children:[(0,a.Y)(n.A,{css:{marginRight:4}}),(0,a.Y)(N.sA,{id:"i39DQU",defaultMessage:"{queryWarning}.",values:{queryWarning:e.warningMessage}})]})]}):(0,a.Y)(o.A,{id:e.id,placeholder:Q,value:l,"aria-label":O,onChange:e=>c(e.target.value),suffix:K,disabled:w}),(0,a.FD)("div",{className:"scrollbox",style:{maxHeight:"50vh",marginTop:15},children:[!v&&!L?.length&&$&&(0,a.FD)(i.A,{direction:"vertical",size:7,className:"w-100",children:[(0,a.Y)(d.A.Input,{active:!0,className:"w-100"}),(0,a.Y)(d.A.Input,{active:!0,className:"w-100"}),(0,a.Y)(d.A.Input,{active:!0,className:"w-100"}),(0,a.Y)(d.A.Input,{active:!0,className:"w-100"})]}),!v&&(L?.length??0)>0&&function(){if(!L?.length)return(0,a.Y)("div",{className:"text-muted",children:(0,a.Y)(N.sA,{id:"y7FCWo",defaultMessage:"No results matching search term."})});return(0,a.Y)("div",{className:"list-group",children:L.map(e=>(0,a.FD)("a",{className:u()("query-selector-result","list-group-item",{inactive:e.is_draft}),css:F,onClick:()=>z(e.id),"data-testid":`QueryId${e.id}`,children:[e.name," ",(0,a.Y)(_.zu,{isArchived:e.is_archived??!1,isDraft:e.is_draft??!1,tags:e.tags,className:"inline-tags-control"})]},e.id))})}()]})]})}R.defaultProps={selectedQuery:null,type:"default",className:null,disabled:!1,loading:!1,excludedQueryIds:[],warningMessage:""}},420287:(e,s,t)=>{t.d(s,{a:()=>c});var a=t(692738),n=t(65061),r=t(141078);function o(e,s,t,a,n,r,o){try{var i=e[r](o),d=i.value}catch(e){t(e);return}i.done?s(d):Promise.resolve(d).then(a,n)}let i=(0,r.J1)`
  fragment DbsqlScheduleRunInfoFragment on RunConnection {
    edges {
      node {
        status
        startTime
        durationMillis
        active
      }
    }
  }
`,d=(0,r.J1)`
  fragment DbsqlScheduleFragment on JobsJob {
    jobId
    settings {
      tasks {
        task {
          sqlTask {
            dashboard {
              dashboardId
              customSubject
              subscriptions {
                destinationId
                userName
              }
              pauseSubscriptions
            }
            query {
              queryId
            }
            alert {
              alertId
              subscriptions {
                destinationId
                userName
              }
              pauseSubscriptions
            }
            parameters {
              key
              value
            }
            warehouseId
          }
        }
      }
      name
      schedule {
        quartzCronExpression
        pauseStatus
        timezoneId
      }
    }
    activeRuns(first: 1) {
      ...DbsqlScheduleRunInfoFragment
    }
    completedRuns(first: 1) {
      ...DbsqlScheduleRunInfoFragment
    }
  }
  ${i}
`,l={dashboard:(0,r.J1)`
  query DbsqlDashboardSchedules($id: String, $isFromRedash: Boolean) @component(name: "DBSQLX.RedashCoreUI") {
    jobsQueryJobs(
      input: {
        filterBy: { isFromRedash: $isFromRedash, task: { sqlTask: { dashboard: { dashboardId: $id } } } }
        expandTasks: true
      }
    ) {
      jobs {
        ...DbsqlScheduleFragment
      }
    }
  }
  ${d}
`,query:(0,r.J1)`
  query DbsqlQuerySchedules($id: String, $isFromRedash: Boolean) @component(name: "DBSQLX.RedashCoreUI") {
    jobsQueryJobs(
      input: {
        filterBy: { isFromRedash: $isFromRedash, task: { sqlTask: { query: { queryId: $id } } } }
        expandTasks: true
      }
    ) {
      jobs {
        ...DbsqlScheduleFragment
      }
    }
  }
  ${d}
`,alert:(0,r.J1)`
  query DbsqlAlertSchedules($id: String, $isFromRedash: Boolean) @component(name: "DBSQLX.RedashCoreUI") {
    jobsQueryJobs(
      input: {
        filterBy: { isFromRedash: $isFromRedash, task: { sqlTask: { alert: { alertId: $id } } } }
        expandTasks: true
      }
    ) {
      jobs {
        ...DbsqlScheduleFragment
      }
    }
  }
  ${d}
`};function u(e,s,t,{skip:a}={skip:!1}){let r=l[e];return(0,n.IT)(r,{skip:a,variables:{id:s,isFromRedash:t},fetchPolicy:"cache-and-network"})}function c(e,s,{skip:t}={skip:!1}){let{data:n,loading:r,refetch:i}=u(e,s,!0,{skip:t}),{data:d,loading:l,refetch:h}=u(e,s,!1,{skip:t}),p=(0,a.useCallback)(()=>{var e;return(e=function*(){return yield Promise.all([i(),h()])},function(){var s=this,t=arguments;return new Promise(function(a,n){var r=e.apply(s,t);function i(e){o(r,a,n,i,d,"next",e)}function d(e){o(r,a,n,i,d,"throw",e)}i(void 0)})})()},[i,h]),m=n?.jobsQueryJobs?.jobs,b=d?.jobsQueryJobs?.jobs;return{jobsTuples:[...m?.map(e=>[e,!0])??[],...b?.map(e=>[e,!1])??[]],numTotalJobs:(m?.length??0)+(b?.length||0),loading:r||l,refetch:p}}},500476:(e,s,t)=>{t.d(s,{H:()=>o,c:()=>r});var a,n=t(696514),r=((a={}).DONE="done",a);let o=(0,n.fH)("Jaws::EditJobPermissions")},533397:(e,s,t)=>{t.d(s,{VN:()=>k,zu:()=>E,FH:()=>T});var a=t(610435),n=t(692738),r=t(733052),o=t(521198),i=t(128572),d=t(369291),l=t(79128),u=t(465946),c=t(342411),h=t(623576),p=t.n(h),m=t(250912),b=t.n(m),g=t(359525),f=t.n(g),_=t(446835),I=t.n(_),v=t(173991),S=t.n(v),y=t(694762),Y=t(382908),A=t(664093),D=t(74438);function M({tags:e=[],getAvailableTags:s,onClose:t,...r}){let i=(0,c.tz)(),[d,u]=(0,n.useState)([]),[h,m]=(0,n.useState)(!0),g=(0,n.useMemo)(()=>f()(p()(e,b())),[e]),[_,v]=(0,n.useState)(g),C=g.length!==_.length||0!==S()(_,g).length;(0,n.useEffect)(()=>{let e=!1;return s().then(s=>{e||(u(f()(I()(p()(s,b())))),m(!1))}),()=>{e=!0}},[s]);let{closeDialog:N}=(0,o.Ww)();return(0,a.Y)(y.aF,{...r,title:(0,a.Y)(c.sA,{id:"Xb5xHn",defaultMessage:"Add/Edit tags"}),className:"shortModal",dangerouslySetAntdProps:{wrapProps:{"data-testid":"EditTagsDialog"}},footer:C?(0,a.FD)("div",{css:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,a.FD)(Y.o.Text,{color:"warning",css:{flex:"1 1 auto",textAlign:"left",marginRight:15},children:[(0,a.Y)(A.A,{css:{marginRight:5}}),(0,a.Y)(c.sA,{id:"ObsfZg",defaultMessage:"There are unsaved changes"})]}),(0,a.FD)("div",{css:{whiteSpace:"nowrap"},children:[(0,a.Y)(l.$n,{componentId:"redash_components_tags_control_edit_dialog_cancel_button",onClick:()=>N(),children:(0,a.Y)(c.sA,{id:"R/XuaU",defaultMessage:"Cancel"})}),(0,a.Y)(l.$n,{componentId:"redash_components_tags_control_edit_dialog_save_button",type:"primary",onClick:()=>{N(),t(_)},children:(0,a.Y)(c.sA,{id:"smJbZ+",defaultMessage:"Save"})})]})]}):(0,a.Y)(l.$n,{componentId:"redash_components_tags_control_edit_dialog_close_button",onClick:()=>N(),children:(0,a.Y)(c.sA,{id:"FMgMSe",defaultMessage:"Close"})}),children:(0,a.Y)(D._v,{autoFocus:!0,mode:"tags",css:{width:"100%"},placeholder:i.formatMessage({id:"HPiary",defaultMessage:"Add some tags..."}),defaultValue:_,onChange:e=>v(I()(p()(e,b()))),loading:h,virtual:!1,"data-testid":"EditTagsDialogSelect",children:p()(d,e=>(0,a.Y)(D._v.Option,{value:e,children:e},e))})})}function C({tags:e,canEdit:s,getAvailableTags:t=()=>new Promise(e=>e([])),onEdit:r=e=>{},className:h,tagsExtra:p,tagSeparator:m,children:b}){let g,f,_,I=(0,c.tz)(),v=e?.map(e=>e.trim()).filter(Boolean)??[],{openDialog:S,dialogNode:y}=(0,o.sp)(M,{tags:v,getAvailableTags:t,onClose:r});return(0,a.FD)("div",{className:`tags-control hidden-in-snapshot ${h??""}`,"data-testid":"TagsControl",children:[b,y,v.map((e,s)=>(0,a.FD)(n.Fragment,{children:[m&&s>0&&(0,a.Y)("span",{className:"tag-separator",children:m}),(0,a.Y)(u.v,{componentId:"codegen_redash_app_src_app_components_tags-control_tagscontrol.tsx_68",title:e,"data-testid":"TagLabel",children:e})]},e)),s&&(f=(g=v.length>0)?(0,a.Y)(i.A,{}):(0,a.Y)(d.A,{}),_=I.formatMessage({id:"p0a4UN",defaultMessage:"Edit"}),(0,a.Y)(l.$n,{componentId:"codegen_redash_app_src_app_components_tags-control_tagscontrol.tsx_45",icon:f,size:"small",onClick:()=>S(),"aria-label":g?_:void 0,"data-testid":"EditTagsButton",children:!g&&(0,a.Y)(c.sA,{id:"efCo2f",defaultMessage:"Add tag"})})),p]})}function N({archivedTooltip:e,archivedTooltipInAdminView:s}){return function({isDraft:t,isArchived:n,isAdminPage:o,...i}){return(0,a.FD)(C,{...i,children:[!n&&t&&(0,a.Y)(u.v,{componentId:"codegen_redash_app_src_app_components_tags-control_tagscontrol.tsx_99",color:"charcoal",children:(0,a.Y)(c.sA,{id:"UpjXhz",defaultMessage:"Unpublished"})}),n&&(0,a.Y)(r.A,{placement:"right",title:o?s:e,children:(0,a.Y)(u.v,{componentId:"codegen_redash_app_src_app_components_tags-control_tagscontrol.tsx_108",color:"charcoal",children:(0,a.Y)(c.sA,{id:"tpBtWX",defaultMessage:"Trash"})})})]})}}let T=(0,a.Y)(c.sA,{id:"LQaVic",defaultMessage:"This query has been moved to trash. It can't be used in dashboards, or appear in search results."}),E=N({archivedTooltip:T,archivedTooltipInAdminView:(0,a.Y)(c.sA,{id:"9CknJn",defaultMessage:"This query has been moved to trash."})}),k=N({archivedTooltip:(0,a.Y)(c.sA,{id:"6aKJiJ",defaultMessage:"This dashboard has been moved to trash. It won't be listed in dashboards nor search results."}),archivedTooltipInAdminView:(0,a.Y)(c.sA,{id:"TgSwsI",defaultMessage:"This dashboard has been moved to trash."})})},554914:(e,s,t)=>{t.d(s,{T:()=>o});var a=t(65061),n=t(141078);let r=(0,n.J1)`
  mutation DbsqlUpdateJob($input: JobUpdateInput!) @component(name: "DBSQLX.RedashCoreUI") {
    jobUpdate(input: $input) {
      job {
        id
      }
      errors {
        message
      }
    }
  }
`;function o(){return(0,a.n_)(r)}},601403:(e,s,t)=>{t.d(s,{A:()=>h});var a=t(610435),n=t(778529),r=t.n(n),o=t(377063),i=t.n(o),d=t(692738),l=t(79570),u=t(342411),c=t(853762);function h({date:e,placeholder:s="",autoUpdate:t=!0,renderTooltip:n=e=>e,variation:o,onlyShowPastText:p}){let m=(0,d.useMemo)(()=>{let s;return(s=r()(e)?null:i()(e))&&s.isValid()?s:null},[e]),b=(0,u.tz)(),[g,f]=(0,d.useState)((0,c.Z)({date:m?.toDate()||new Date(s),intl:b}));if((0,d.useEffect)(()=>{function e(){let e=p&&m&&m.isAfter(i()())?new Date:m?.toDate()||new Date(s);f((0,c.Z)({date:e,intl:b}))}if(e(),t){let s=setInterval(e,3e4);return()=>clearInterval(s)}},[t,m,s,b,p]),"timeAgoInTooltip"===o)return(0,a.Y)(l.m,{componentId:"codegen_redash_app_src_app_components_timeago.tsx_53",content:g.displayText,children:(0,a.Y)("span",{"data-testid":"TimeAgo",children:g.tooltipTitle})});return(0,a.Y)(l.m,{componentId:"codegen_redash_app_src_app_components_timeago.tsx_59",content:n(g.tooltipTitle),children:(0,a.Y)("span",{"data-testid":"TimeAgo",children:g.displayText})})}},650710:(e,s,t)=>{t.d(s,{z:()=>V,a:()=>W});var a=t(610435),n=t(778529),r=t.n(n),o=t(692738),i=t(200356),d=t(385120),l=t(913573),u=t(572382),c=t(497895),h=t(566512),p=t(802582),m=t(79128),b=t(424489),g=t(687828),f=t(241393),_=t(342411),I=t(441535),v=t(524013),S=t(500476),y=t(521198),Y=t(694762),A=t(764236),D=t(599352),M=t(126927),C=t(104096);function N({jobId:e,...s}){return(0,a.FD)(l.A,{href:(0,C.Jm)(e),target:"_blank",...s,children:[(0,a.Y)(_.sA,{id:"gR4Gv/",defaultMessage:"View job details"})," ",(0,a.Y)(M.A,{})]})}var T=t(752803),E=t(65061),k=t(141078);let F=(0,k.J1)`
  mutation DbsqlDeleteJob($input: JobsDeleteJobInput!) @component(name: "DBSQLX.RedashCoreUI") {
    jobsDeleteJob(input: $input) {
      apiError {
        message
        helpUrl
      }
    }
  }
`;function R(e,s,t,a,n,r,o){try{var i=e[r](o),d=i.value}catch(e){t(e);return}i.done?s(d):Promise.resolve(d).then(a,n)}function w({job:e,entityId:s,entityType:t,onJobDeleted:n,visible:r}){let{closeDialog:o}=(0,y.Ww)(),[i,d]=(0,E.n_)(F),l=`${e?.settings?.name}`;if(!e||null===e.jobId)return null;let u=e.jobId;return(0,a.FD)(Y.ZF,{componentId:"codegen_redash_app_src_app_components_scheduler_deletejobconfirmationdialog.tsx_46",visible:r,title:(0,a.Y)(_.sA,{id:"yP0+j1",defaultMessage:"Delete {jobName}",values:{jobName:l}}),onCancel:o,okButtonProps:{loading:d.loading},onOk:()=>{var e;return(e=function*(){let{data:e}=yield i({variables:{input:{jobId:u}}});n({errorMessage:e?.jobsDeleteJob?.apiError?.message??void 0,helpUrl:e?.jobsDeleteJob?.apiError?.helpUrl??void 0,jobName:l}),o()},function(){var s=this,t=arguments;return new Promise(function(a,n){var r=e.apply(s,t);function o(e){R(r,a,n,o,i,"next",e)}function i(e){R(r,a,n,o,i,"throw",e)}o(void 0)})})()},children:[(0,I.W)("databricks.elasticspark.jobsAsRedashSchedulerMigrationPhase3",!1)?(0,a.Y)(_.sA,{id:"r4Qj1Z",defaultMessage:'Are you sure you want to delete "{jobName}" (<jobLink></jobLink>)? This action cannot be undone.',values:{jobLink:()=>(0,a.Y)(N,{componentId:"codegen_redash_app_src_app_components_scheduler_deletejobconfirmationdialog.tsx_86",jobId:u}),jobName:l}}):(0,a.Y)(_.sA,{id:"yE3dM2",defaultMessage:'Are you sure you want to delete "{jobName}"? This action cannot be undone.',values:{jobName:l}}),e&&s&&t&&(0,a.FD)(a.FK,{children:[(0,a.Y)(A.h,{}),(0,a.Y)(D.Z,{componentId:"codegen_redash_app_src_app_components_scheduler_deletejobconfirmationdialog.tsx_107",css:{width:"100%"},children:(0,a.Y)(T.W,{job:e,entityId:s,entityType:t})})]})]})}let q=(0,k.J1)`
  query DbsqlJobPermission($jobId: ID!) @component(name: "DBSQLX.RedashCoreUI") {
    job(id: $jobId) {
      permission
    }
  }
`;var U=t(393257),x=t(720227),j=t(651985),J=t(554914);function P(e,s,t,a,n,r,o){try{var i=e[r](o),d=i.value}catch(e){t(e);return}i.done?s(d):Promise.resolve(d).then(a,n)}function L(e){return function(){var s=this,t=arguments;return new Promise(function(a,n){var r=e.apply(s,t);function o(e){P(r,a,n,o,i,"next",e)}function i(e){P(r,a,n,o,i,"throw",e)}o(void 0)})}}function $(e,s,t){var a;let n=e?.settings?.tasks?.[0]?.task?.sqlTask,r={name:s,tasks:[{taskKey:t,task:{sqlTask:{alert:n?.alert&&{alertId:n?.alert?.alertId,pauseSubscriptions:n?.alert?.pauseSubscriptions,subscriptions:n?.alert?.subscriptions?.map(u.U1)},dashboard:n?.dashboard&&{dashboardId:n?.dashboard?.dashboardId,pauseSubscriptions:n?.dashboard?.pauseSubscriptions,subscriptions:n?.dashboard?.subscriptions?.map(u.U1),customSubject:n?.dashboard?.customSubject},query:n?.query&&{queryId:n?.query?.queryId},parameters:(a=n?.parameters)&&a.map(e=>({key:e.key??"",value:e.value})),warehouseId:n?.warehouseId}}}]};return e?.settings?.schedule&&e.settings.schedule.quartzCronExpression&&e.settings.schedule.timezoneId&&(r.schedule={quartzCronExpression:e.settings.schedule.quartzCronExpression,timezoneId:e.settings.schedule.timezoneId,pauseStatus:e.settings.schedule.pauseStatus===i.usk.PAUSED?i.wB8.PAUSED:i.wB8.UNPAUSED}),{settings:r,isFromRedash:!0}}function z(){return(0,I.W)("databricks.fe.redashv2_subscribe_unsubscribe_enabled",!1)}let Q=(0,k.J1)`
  mutation DbsqlRunNowJob($input: JobRunNowInput!) @component(name: "DBSQLX.RedashCoreUI") {
    jobRunNow(input: $input) {
      entity {
        runId
        idInJob
      }
      errors {
        message
      }
    }
  }
`;function B(e,s,t,a,n,r,o){try{var i=e[r](o),d=i.value}catch(e){t(e);return}i.done?s(d):Promise.resolve(d).then(a,n)}function K(e){return function(){var s=this,t=arguments;return new Promise(function(a,n){var r=e.apply(s,t);function o(e){B(r,a,n,o,i,"next",e)}function i(e){B(r,a,n,o,i,"throw",e)}o(void 0)})}}function O(e,s){let t="disabled";return s?t="alreadySubscribed":e&&(t="enabled"),t}function W({job:e,onEdit:s,onJobUpdated:t,isFromRedash:n,hideRunNowButton:Y,canManageEntity:A,...D}){let{theme:M}=(0,c.wn)(),T=(0,_.tz)(),k=(0,v.df)(),{entityType:F,entityId:R}=D,P=z(),{canEdit:B,canRun:V,canManageNonDbsqlJob:G,loading:H}=function(e,s){var t;let a=e.settings?.tasks?.length===1,{data:n,loading:r}=(t=e.jobId,(0,E.IT)(q,{skip:null===t,variables:{jobId:t}})),o=n?.job?.permission,d=o===i.VPW.MANAGE||o===i.VPW.IS_OWNER;return{loading:r,canEdit:a&&d&&s,canRun:(d||o===i.VPW.MANAGE_RUN)&&s&&a,canManageNonDbsqlJob:d&&(!a||!s)}}(e,n),X=(0,C.Ih)({isFromRedash:n,canEditJob:B,canManageEntity:A,entityType:F,isRedashV2SubscribeUnsubscribeEnabled:P}),Z=(0,o.useRef)(!1),{canTogglePauseStatus:ee,toggleJobSchedulePaused:es}=function(e){let[s,t]=(0,J.T)(),a=e.settings?.schedule;return{canTogglePauseStatus:a&&a.quartzCronExpression&&a.timezoneId,toggleJobSchedulePaused:()=>K(function*(){let t=a?.pauseStatus,n=r()(t)?i.wB8.PAUSED:t===i.usk.PAUSED?i.wB8.UNPAUSED:i.wB8.PAUSED;return yield s({variables:{input:{id:`${e.jobId}`,isFromRedash:!0,newSettings:{schedule:{...(0,u.U1)(a??{}),pauseStatus:n}}}}})})(),result:t}}(e),[et,ea]=(0,h.o)(),{runNowJob:en,runNowMutationResult:er}=function(e,s){let[t,n]=(0,E.n_)(Q);return{runNowJob:()=>K(function*(){let{data:n}=yield t({variables:{input:{id:`${e.jobId}`}}}),r=n?.jobRunNow?.errors?.[0]?.message??void 0;if(r)s.error({message:(0,a.Y)("div",{children:r})});else{let t=`${(0,C.Jm)(e.jobId)}/run/${n?.jobRunNow?.entity?.idInJob}`;s.success({message:(0,a.Y)(_.sA,{id:"GZ0LMr",defaultMessage:"Triggered run successfully"}),description:(0,I.W)("databricks.elasticspark.jobsAsRedashSchedulerMigrationPhase3",!1)?(0,a.Y)(l.A,{componentId:"codegen_redash_app_src_app_components_scheduler_components_jobsscheduleactions.tsx_101",href:t,target:"_blank",children:(0,a.Y)(_.sA,{id:"72hvNU",defaultMessage:"View run"})}):null})}})(),runNowMutationResult:n}}(e,et),eo=(0,o.useCallback)(({errorMessage:s,jobName:n,helpUrl:r})=>{s?et.error({message:(0,a.FD)("div",{children:[s,r&&(0,a.FD)(a.FK,{children:[(0,a.Y)("br",{}),(0,a.Y)(d.G,{componentId:"codegen_redash_app_src_app_components_scheduler_components_jobsscheduleactions.tsx_185",href:r,children:(0,a.Y)(_.sA,{id:"J+tlO1",defaultMessage:"Learn more"})})]})]})}):(et.success({message:(0,a.Y)(_.sA,{id:"csW2g/",defaultMessage:"Successfully deleted {jobName}",values:{jobName:n}})}),k("clientsideEvent",{eventName:"dbsqlJobScheduleDeleted",folderNodeId:R,folderNodeType:F,opTarget:e.jobId}),t())},[et,t,F,R,k,e.jobId]),[ei]=function(e,s){let t=(0,_.tz)(),[a,n]=(0,x.o)();return[()=>L(function*(){return a({variables:{input:$(e,t.formatMessage({id:"YsLJvg",defaultMessage:"{jobName} - (Clone)"},{jobName:e?.settings?.name??"Job"}),(0,C.s_)(s))}})})(),n]}(e,F),{toggleCurrentUserSubscribed:ed,isCurrentUserInJobSubscriptions:el,loading:eu,checkForErrorResponse:ec}=function(e,s,t){let a=(0,_.tz)(),n=z(),r=e?.settings?.tasks?.[0]?.task?.sqlTask?.alert?.subscriptions??e?.settings?.tasks?.[0]?.task?.sqlTask?.dashboard?.subscriptions??[],o=e.jobId?.toString(),i=r.some(e=>e.userName===U.N.email),[d,{loading:l}]=(0,J.T)(),[u,{loading:c}]=(0,j.tr)(),[h,{loading:p}]=(0,j._T)(),[m,{loading:b}]=(0,j.PR)(),[g,{loading:f}]=(0,j.gN)();return{toggleCurrentUserSubscribed:()=>L(function*(){if(!n){let t,a,n;return d({variables:{input:(t=$(e,"",(0,C.s_)(s)).settings?.tasks?.[0]?.task?.sqlTask,(a=t?.alert?.subscriptions??t?.dashboard?.subscriptions??[]).push({userName:U.N.email,destinationId:null}),n={id:`${e.jobId}`,newSettings:{task:{sqlTask:{...t??{}}}},isFromRedash:!0},"dashboard"===s?n.newSettings.task.sqlTask.dashboard={...t?.dashboard??{},subscriptions:a}:n.newSettings.task.sqlTask.alert={...t?.alert??{},subscriptions:a},n)}})}if(i)return"dashboard"===s?g({variables:{input:{dashboardId:t,jobId:o}}}):h({variables:{input:{alertId:t,jobId:o}}});return"dashboard"===s?m({variables:{input:{dashboardId:t,jobId:o}}}):u({variables:{input:{alertId:t,jobId:o}}})})(),isCurrentUserInJobSubscriptions:i,checkForErrorResponse:e=>{let{data:s}=e;if(!s)return a.formatMessage({id:"LunTHh",defaultMessage:"An unknown error occurred"});if("redashv2SubscribeToAlert"in s)return s.redashv2SubscribeToAlert?.apiError?.message;if("redashv2UnsubscribeFromAlert"in s)return s.redashv2UnsubscribeFromAlert?.apiError?.message;if("redashv2SubscribeToDashboard"in s)return s.redashv2SubscribeToDashboard?.apiError?.message;if("redashv2UnsubscribeFromDashboard"in s)return s.redashv2UnsubscribeFromDashboard?.apiError?.message;return s.jobUpdate?.errors?.[0]?.message},loading:l||c||p||b||f}}(e,F,R),{openDialog:eh,dialogNode:ep}=function({onJobDeleted:e,entityId:s,entityType:t}){return(0,y.sp)(w,{onJobDeleted:e,entityId:s,entityType:t})}({onJobDeleted:eo,...D}),em=(0,o.useCallback)(()=>{eh({job:e})},[eh,e]),eb=n&&V&&!Y,eg=(0,I.W)("databricks.elasticspark.jobsAsRedashSchedulerMigrationPhase3",!1),ef=B||G,e_=P&&n||B,eI=eb||ef||e_||eg;if((0,o.useEffect)(()=>{!n||H||!1!==Z.current||"query"===F||P||k("clientsideEvent",{eventName:"dbsqlJobsScheduleActionsCanSubscribeSelf",eventType:"render",folderNodeType:F,folderNodeId:R,displayType:O(e_,el)})},[H,k,R,F,e_,el,n,P]),!e.jobId||!eI)return{runOnceButton:null,overflowDropdown:null};let ev=T.formatMessage({id:"F9ecZQ",defaultMessage:"Run once"});return{runOnceButton:eb?(0,a.Y)(p.p,{title:ev,useAsLabel:!0,children:(0,a.Y)(m.$n,{title:ev,componentId:"dbsql.alerts.run_now_button",css:{marginRight:M.spacing.sm},onClick:()=>K(function*(){yield en(),t()})(),disabled:er.loading,icon:(0,a.Y)(b.A,{})})}):null,overflowDropdown:ef||e_||eg?(0,a.FD)(g.Root,{modal:!1,onOpenChange:e=>{e&&"query"!==F&&!P&&k("clientsideEvent",{eventName:"dbsqlJobsScheduleActionsCanSubscribeSelf",eventType:"actionsOverflowOpened",folderNodeType:F,folderNodeId:R,displayType:O(e_,el)})},children:[(0,a.Y)(g.Trigger,{asChild:!0,children:(0,a.Y)(m.$n,{title:T.formatMessage({id:"bWljdc",defaultMessage:"More actions"}),componentId:"dbsql_jobs_schedule_actions_overflow_button",type:"tertiary",loading:eu||er.loading,icon:(0,a.Y)(f.A,{})})}),(0,a.FD)(g.Content,{align:"end",children:[X?(0,a.Y)(g.Item,{componentId:"codegen_redash_app_src_app_components_scheduler_components_jobsscheduleactions.tsx_365",onClick:()=>s(e,X),children:"alert"===F?(0,a.Y)(_.sA,{id:"3VmFen",defaultMessage:"Edit destinations"}):(0,a.Y)(_.sA,{id:"1p6p5+",defaultMessage:"Edit subscriptions"})}):(0,a.Y)(g.Item,{componentId:"codegen_redash_app_src_app_components_scheduler_components_jobsscheduleactions.tsx_379",onClick:()=>s(e),disabled:!B,children:(0,a.Y)(_.sA,{id:"Vi7RMr",defaultMessage:"Edit"})}),(0,a.Y)(g.Item,{componentId:"codegen_redash_app_src_app_components_scheduler_components_jobsscheduleactions.tsx_386",disabled:!B,onClick:()=>K(function*(){yield ei(),t()})(),children:(0,a.Y)(_.sA,{id:"iOct0S",defaultMessage:"Clone"})}),n&&(0,a.Y)(g.Item,{componentId:"codegen_redash_app_src_app_components_scheduler_components_jobsscheduleactions.tsx_399",onClick:()=>{S.H.call({id:`${e?.jobId}`,name:e?.settings?.name??""})},disabled:!B||!S.H.isAvailable(),children:(0,a.Y)(_.sA,{id:"e54gc6",defaultMessage:"Edit schedule permissions"})}),(G||eg)&&(0,a.Y)(g.Item,{componentId:"codegen_redash_app_src_app_components_scheduler_components_jobsscheduleactions.tsx_415",css:{padding:0},children:(0,a.Y)(N,{componentId:"codegen_redash_app_src_app_components_scheduler_components_jobsscheduleactions.tsx_347",jobId:e.jobId,css:{width:"100%",padding:"6px 8px"}})}),(0,a.Y)(g.Item,{componentId:"codegen_redash_app_src_app_components_scheduler_components_jobsscheduleactions.tsx_423",onClick:()=>K(function*(){yield es(),t()})(),disabled:!B||!ee,children:e?.settings?.schedule?.pauseStatus===i.usk.PAUSED?(0,a.Y)(_.sA,{id:"qfJZU9",defaultMessage:"Unpause"}):(0,a.Y)(_.sA,{id:"YToyLm",defaultMessage:"Pause"})}),("alert"===F||"dashboard"===F)&&(0,a.Y)(g.Item,{componentId:"codegen_redash_app_src_app_components_scheduler_components_jobsscheduleactions.tsx_443",onClick:()=>K(function*(){let e=ec((yield ed()));if(e)return void et.error({message:"alert"===F?T.formatMessage({id:"y/jq9O",defaultMessage:"Failed to add to alert destinations"}):T.formatMessage({id:"wBwcm4",defaultMessage:"Failed to subscribe to dashboard"}),description:e});k("clientsideEvent",{eventName:P?el?"dbsqlRemoveCurrentUserFromSubscriptionsWithRedash":"dbsqlAddCurrentUserToSubscriptionsWithRedash":"dbsqlAddCurrentUserToSubscriptions",folderNodeType:F,folderNodeId:R}),t()})(),disabled:!e_||!P&&el||eu,children:"alert"===F?el?(0,a.Y)(_.sA,{id:"VRy6OM",defaultMessage:"Remove myself from destinations"}):(0,a.Y)(_.sA,{id:"GXqMKa",defaultMessage:"Add myself to destinations"}):el?(0,a.Y)(_.sA,{id:"RGVzu4",defaultMessage:"Unsubscribe"}):(0,a.Y)(_.sA,{id:"RRVklN",defaultMessage:"Subscribe"})}),(0,a.Y)(g.Item,{componentId:"codegen_redash_app_src_app_components_scheduler_components_jobsscheduleactions.tsx_520",onClick:()=>em(),disabled:!B,danger:!0,children:(0,a.Y)(_.sA,{id:"ft1IXO",defaultMessage:"Delete"})})]})]}):null,notificationContextHolder:ea,dialogNode:ep}}function V(e){let{runOnceButton:s,overflowDropdown:t,notificationContextHolder:n,dialogNode:r}=W(e);if(!s&&!t)return null;return(0,a.FD)("div",{style:{display:"flex"},children:[s,t,n,r]})}},651985:(e,s,t)=>{t.d(s,{HM:()=>m,PR:()=>h,Xx:()=>b,_T:()=>c,gN:()=>p,tr:()=>u});var a=t(141078);let n=(0,a.J1)`
  mutation DbsqlSubscribeSelfToAlert($input: Redashv2SubscribeToAlertRequestInput!)
  @component(name: "DBSQLX.RedashCoreUI") {
    redashv2SubscribeToAlert(input: $input) {
      apiError {
        message
      }
    }
  }
`,r=(0,a.J1)`
  mutation DbsqlUnsubscribeSelfFromAlert($input: Redashv2UnsubscribeFromAlertRequestInput!)
  @component(name: "DBSQLX.RedashCoreUI") {
    redashv2UnsubscribeFromAlert(input: $input) {
      apiError {
        message
      }
    }
  }
`,o=(0,a.J1)`
  mutation DbsqlSubscribeSelfToDashboard($input: Redashv2SubscribeToDashboardRequestInput!)
  @component(name: "DBSQLX.RedashCoreUI") {
    redashv2SubscribeToDashboard(input: $input) {
      apiError {
        message
      }
    }
  }
`,i=(0,a.J1)`
  mutation DbsqlUnsubscribeSelfFromDashboard($input: Redashv2UnsubscribeFromDashboardRequestInput!)
  @component(name: "DBSQLX.RedashCoreUI") {
    redashv2UnsubscribeFromDashboard(input: $input) {
      apiError {
        message
      }
    }
  }
`,d=(0,a.J1)`
  mutation DbsqlSetDashboardSubscriptions($input: Redashv2ResetDashboardSubscriptionsRequestInput!)
  @component(name: "DBSQLX.RedashCoreUI") {
    redashv2ResetDashboardSubscriptions(input: $input) {
      apiError {
        message
      }
    }
  }
`,l=(0,a.J1)`
  mutation DbsqlSetAlertSubscriptions($input: Redashv2ResetAlertSubscriptionsRequestInput!)
  @component(name: "DBSQLX.RedashCoreUI") {
    redashv2ResetAlertSubscriptions(input: $input) {
      apiError {
        message
      }
    }
  }
`;function u(){return(0,a.n_)(n)}function c(){return(0,a.n_)(r)}function h(){return(0,a.n_)(o)}function p(){return(0,a.n_)(i)}function m(){return(0,a.n_)(l)}function b(){return(0,a.n_)(d)}},720227:(e,s,t)=>{t.d(s,{o:()=>o});var a=t(65061),n=t(141078);let r=(0,n.J1)`
  mutation DbsqlCreateJob($input: JobCreateInput!) @component(name: "DBSQLX.RedashCoreUI") {
    jobCreate(input: $input) {
      entity {
        id
      }
    }
  }
`;function o(){return(0,a.n_)(r)}},736930:(e,s,t)=>{t.d(s,{J:()=>G,b:()=>H});var a=t(610435),n=t(680519),r=t.n(n),o=t(359419),i=t.n(o),d=t(692738),l=t(561587),u=t(200356),c=t(572382),h=t(688789),p=t(36377),m=t(627714),b=t(382908),g=t(79128),f=t(497895),_=t(647660),I=t(339518),v=t(342411),S=t(524013),y=t(500476),Y=t(655997),A=t(956935),D=t(764236),M=t(499918),C=t(379045),N=t(140078),T=t(407374),E=t(698600),k=t(331472),F=t(662874),R=t(59576);function w({dataSources:e,...s}){return(0,a.Y)(F.t2,{children:(0,a.Y)(R.E,{dataSources:e,...s})})}var q=t(733052);function U({control:e,dataSources:s,dataSourcesLoaded:t,errors:n,saving:r}){let o=(0,v.tz)(),{theme:i,classNamePrefix:d}=(0,f.wn)();return(0,a.FD)(a.FK,{children:[(0,a.Y)(l.xI,{name:"quartzCronExpression",control:e,render:({field:e})=>(0,a.FD)(a.FK,{children:[(0,a.Y)("label",{className:"legacy-label",htmlFor:"refresh-schedules-quartz",children:(0,a.Y)(v.sA,{id:"q7ukyk",defaultMessage:"Schedule"})}),(0,a.Y)(E.a,{componentId:"codegen_redash_app_src_app_components_scheduler_refreshscheduleeditform_scheduletab.tsx_48",...e})]})}),(0,a.Y)(D.h,{}),(0,a.Y)(l.xI,{name:"timezoneId",control:e,render:({field:e})=>(0,a.FD)(a.FK,{children:[(0,a.Y)("label",{className:"legacy-label",htmlFor:"refresh-schedules-quartz",children:(0,a.Y)(v.sA,{id:"vGb0ZS",defaultMessage:"Timezone"})}),(0,a.Y)(k.I,{...e,css:{width:"100%"}})]})}),(0,a.Y)(D.h,{}),(0,a.Y)(M.n,{componentId:"codegen_redash_app_src_app_components_scheduler_refreshscheduleeditform_scheduletab.tsx_81",children:(0,a.FD)(M.v,{header:(0,a.FD)(a.FK,{children:[(0,a.Y)(v.sA,{id:"MTyTjg",defaultMessage:"More options"}),!t&&(0,a.Y)(C.A,{css:{marginLeft:i.spacing.sm},spin:!0}),t&&(n.warehouseId||n.name)&&(0,a.Y)(q.A,{title:(0,a.Y)(v.sA,{id:"VDaQ0H",defaultMessage:"Expand to see error"}),children:(0,a.Y)(N.A,{css:{marginLeft:i.spacing.sm},color:"danger","data-testid":"ErrorInCollapsedAccordionDangerIcon"})})]}),dangerouslyAppendEmotionCSS:(0,A.AH)(".",d,"-collapse-content-box,[data-radix-accordion-content-inner]{padding-left:0;padding-right:0;}"),children:[(0,a.Y)(l.xI,{name:"name",control:e,rules:{required:o.formatMessage({id:"cvJdrC",defaultMessage:"Schedule name is required"})},render:({field:e})=>(0,a.FD)(a.FK,{children:[(0,a.Y)("label",{className:"legacy-label",htmlFor:"refresh-schedules-schedule-name",children:(0,a.Y)(v.sA,{id:"Om9roC",defaultMessage:"Schedule name"})}),(0,a.Y)(T.p,{componentId:"codegen_redash_app_src_app_components_scheduler_refreshscheduleeditform_scheduletab.tsx_130",id:"refresh-schedules-schedule-name",...e,"data-testid":"RefreshSchedulesEditFormScheduleNameInput"}),n.name&&(0,a.Y)(b.o.Paragraph,{color:"error",children:(0,a.Y)("p",{className:"dbsql-legacy-p",role:"alert",children:n.name.message})})]})}),(0,a.Y)(D.h,{}),(0,a.Y)(l.xI,{name:"warehouseId",control:e,render:({field:e})=>(0,a.FD)(a.FK,{children:[(0,a.Y)("label",{className:"legacy-label",children:(0,a.Y)(v.sA,{id:"P4JqO8",defaultMessage:"SQL Warehouse"})}),(0,a.Y)(w,{dataSources:s,loading:!t,disabled:!t||r,...e,placeholder:o.formatMessage({id:"mSTaNb",defaultMessage:"Choose warehouse..."}),ariaLabel:o.formatMessage({id:"wBS2gZ",defaultMessage:"Choose warehouse"}),allowClear:!0}),n.warehouseId&&(0,a.Y)(b.o.Paragraph,{color:"error",children:(0,a.Y)("p",{className:"dbsql-legacy-p",role:"alert",children:n.warehouseId.message})})]})})]},"more")})]})}var x=t(404323),j=t(944552),J=t(437962),P=t(793480);function L(e){return e.filter(e=>"email"===e.type)}function $({entityType:e,control:s,subscribersOnlyMode:t}){let n=(0,v.tz)(),[r,o]=(0,d.useState)(""),{allDestinations:i,destinations:u,loading:c}=(0,x.gU)({showCurrentUser:!0,destinationsFilter:"dashboard"===e?L:void 0,userFilterText:r}),{fields:h,remove:p,append:m}=(0,l.jz)({name:"subscriptions",control:s}),b=(0,d.useMemo)(()=>(h||[]).map(e=>{let s=e.destinationId?u.find(s=>s.id===e.destinationId):void 0;if(s)return s;if(e.userName)return(0,x.oV)(e.userName)}).filter(e=>!!e),[u,h]),f=(0,d.useMemo)(()=>u.filter(e=>!h.some(s=>e.isUser?s.userName===e.username:s.destinationId===e.id)),[h,u]),_=(0,d.useMemo)(()=>r?f?.filter(e=>e.name.toLowerCase().includes(r.toLowerCase())):f,[f,r]),I=(0,d.useCallback)(e=>{p(h.findIndex(s=>s.destinationId===e.id||s.userName===e.name))},[h,p]),S=(0,l.FH)({name:"sendSubscriptions",control:s}),y=h?.length>=50||!S;return(0,a.FD)(a.FK,{children:[!t&&(0,a.FD)(a.FK,{children:[(0,a.Y)(l.xI,{name:"sendSubscriptions",control:s,render:({field:s})=>(0,a.Y)(j.d,{componentId:"codegen_redash_app_src_app_components_scheduler_refreshscheduleeditform_subscriberstab.tsx_133",label:"alert"===e?n.formatMessage({id:"cyWriX",defaultMessage:"Notify destinations when the alert is triggered"}):n.formatMessage({id:"iWQ0xl",defaultMessage:"Send dashboard snapshot to subscribers"}),checked:s.value,onChange:s.onChange})}),(0,a.Y)(D.h,{size:"sm"})]}),(0,a.Y)(x.z8,{destinations:_,disabled:y,loading:c,onChange:e=>{o(""),(e=>{let s=i.get(e);if(!s)return;m(s.isUser?{userName:s.name}:{destinationId:s.id})})(e)},onSearch:o,value:null}),(0,a.Y)(D.h,{size:"sm"}),(0,a.Y)(J.q,{"data-testid":"ScheduleDestinations.Table",columns:[{title:"alert"===e?n.formatMessage({id:"aCB2r/",defaultMessage:"Destination"}):n.formatMessage({id:"d8MU7B",defaultMessage:"Subscriber"}),key:"id",render:e=>(0,a.FD)("div",{css:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,a.Y)("div",{children:(0,a.Y)(x.Oh,{item:e})}),(0,a.Y)(g.$n,{componentId:"codegen_redash_app_src_app_components_scheduler_refreshscheduleeditform.tsx_462",icon:(0,a.Y)(P.A,{}),disabled:!S||c,onClick:()=>I(e),"aria-label":n.formatMessage({id:"eyKOVC",defaultMessage:"Remove"})})]})}],dataSource:b,loading:c&&!r,size:"small",rowKey:"id",pagination:!1,scrollableInFlexibleContainer:!0,scroll:{x:"max-content",y:220}}),"dashboard"===e&&!t&&(0,a.FD)(a.FK,{children:[(0,a.Y)(D.h,{}),(0,a.Y)(l.xI,{name:"customEmailSubject",control:s,render:({field:e})=>(0,a.FD)(a.FK,{children:[(0,a.Y)("label",{className:"legacy-label",children:(0,a.Y)(v.sA,{id:"Dzwcg/",defaultMessage:"Email subject"})}),(0,a.Y)(T.p,{componentId:"codegen_redash_app_src_app_components_scheduler_refreshscheduleeditform_subscriberstab.tsx_255",placeholder:n.formatMessage({id:"c+9OHf",defaultMessage:"Use default email subject"}),...e,disabled:!S})]})})]})]})}var z=t(651985),Q=t(818380),B=t(720227),K=t(554914),O=t(104096);function W(e,s,t,a,n,r,o){try{var i=e[r](o),d=i.value}catch(e){t(e);return}i.done?s(d):Promise.resolve(d).then(a,n)}function V(e){return function(){var s=this,t=arguments;return new Promise(function(a,n){var r=e.apply(s,t);function o(e){W(r,a,n,o,i,"next",e)}function i(e){W(r,a,n,o,i,"throw",e)}o(void 0)})}}function G(e){let{editFormNode:s,cancelButtonProps:t,saveButtonProps:n,titleText:r,saveButtonText:o}=H(e);return(0,a.FD)("div",{children:[(0,a.Y)(b.o.Title,{level:3,children:r}),s,(0,a.FD)(Q.d,{children:[(0,a.Y)(g.$n,{componentId:"codegen_redash_app_src_app_components_scheduler_refreshscheduleeditform.tsx_521",type:"tertiary",...t,children:(0,a.Y)(v.sA,{id:"F6dIuL",defaultMessage:"Cancel"})}),(0,a.Y)(g.$n,{componentId:"codegen_redash_app_src_app_components_scheduler_refreshscheduleeditform.tsx_524",type:"primary",...n,children:o})]})]})}function H({job:e,entityId:s,entityType:t,entityName:n,entityWarehouseId:o,onFinished:b,notificationAPI:A,subscribersOnlyMode:D}){let M=(0,h.Tw)(3600),C=null===e,{theme:N}=(0,f.wn)(),T=(0,S.df)(),E=(0,v.tz)(),k="query"!==t&&("dashboard"!==t||(0,m.iF)().allowSubscriptions),{formState:{errors:F,isValid:R,touchedFields:w,dirtyFields:q},control:x,watch:j,setValue:J,handleSubmit:P,trigger:L,register:Q}=(0,l.mN)({defaultValues:{name:e?.settings?.name??void 0,quartzCronExpression:e?.settings?.schedule?.quartzCronExpression??M,timezoneId:e?.settings?.schedule?.timezoneId??(0,Y.VF)(),...function(e,s){switch(s){case"alert":let t=e?.settings?.tasks?.[0]?.task?.sqlTask?.alert;return{subscriptions:t?.subscriptions?.map(c.U1)??[],sendSubscriptions:!t?.pauseSubscriptions};case"dashboard":let a=e?.settings?.tasks?.[0]?.task?.sqlTask?.dashboard;return{subscriptions:a?.subscriptions?.map(c.U1)??[],sendSubscriptions:!a?.pauseSubscriptions,customEmailSubject:a?.customSubject??void 0};default:return{subscriptions:[]}}}(e,t)},mode:"onChange"}),[W,{loading:G}]=(0,B.o)(),[X,{loading:Z}]=(0,K.T)(),{saveSubscriptions:ee,loading:es,errorMessage:et,checkIfSaveError:ea}=function(e,s,t){let a=(0,v.tz)(),[n,{loading:r}]=(0,z.HM)(),[o,{loading:i}]=(0,z.Xx)(),[l,u]=(0,d.useState)();return{saveSubscriptions:(0,d.useCallback)(a=>{if("alert"===t)return n({variables:{input:{alertId:s,jobId:e,subscriptions:a}}});return o({variables:{input:{dashboardId:s,jobId:e,subscriptions:a}}})},[t,s,e,n,o]),loading:r||i,errorMessage:l,checkIfSaveError:e=>{let{data:s}=e;if(!s)return u(a.formatMessage({id:"dNjJJs",defaultMessage:"An unknown error occurred while updating the list of subscribers. Please try again."})),!0;if("redashv2ResetAlertSubscriptions"in s)return u(s.redashv2ResetAlertSubscriptions?.apiError?.message),!!s.redashv2ResetAlertSubscriptions?.apiError;return u(s.redashv2ResetDashboardSubscriptions?.apiError?.message),!!s.redashv2ResetDashboardSubscriptions?.apiError}}}(`${e?.jobId}`,s,t),en=G||Z||es,{dataSources:er,dataSourcesLoaded:eo}=(0,p.A)({isEnabled:!D});(0,d.useEffect)(()=>{Q("warehouseId",{validate:s=>{let t=e?.settings?.tasks?.[0]?.task?.sqlTask?.warehouseId,a=!e&&null!=t;return void 0===s&&a?E.formatMessage({id:"MGXJ5H",defaultMessage:"A valid SQL warehouse selection is required. Your schedule currently contains an invalid warehouse"}):void 0}})},[Q,E,e]),(0,d.useEffect)(()=>{if(eo&&!w.warehouseId){let s=e?.settings?.tasks?.[0]?.task?.sqlTask?.warehouseId,t=r()(er,{[s?"endpoint_id":"id"]:e?.settings?.tasks?.[0]?.task?.sqlTask?.warehouseId??o}),a=t?.id,n=C?!!a:s!==t?.endpoint_id;J("warehouseId",a,{shouldValidate:!0,shouldTouch:!0,shouldDirty:n}),L("warehouseId")}},[eo,er,o,J,L,e?.settings?.tasks,w.warehouseId,e,C]);let ei=j("quartzCronExpression");return(0,d.useEffect)(()=>{w.name||e?.settings?.name||J("name",E.formatMessage({id:"JTXHRv",defaultMessage:"{entityName} - {humanizedCron}"},{entityName:n,humanizedCron:(0,h.nr)(ei,E)}),{shouldTouch:!1})},[w.name,E,J,e?.settings?.name,ei,n]),{titleText:C?E.formatMessage({id:"XgMfiK",defaultMessage:"Add schedule"}):E.formatMessage({id:"ugwT4x",defaultMessage:"Edit schedule"}),editFormNode:(0,a.FD)(a.FK,{children:[(0,a.FD)(_.Root,{componentId:"refresh-schedule-edit-form-tabs",defaultValue:D?"2":"1",children:[(0,a.FD)(_.List,{children:[!D&&(0,a.Y)(_.Trigger,{value:"1",children:(0,a.Y)(v.sA,{id:"JIRIGy",defaultMessage:"Settings"})}),k&&(0,a.Y)(_.Trigger,{value:"2",children:"alert"===t?(0,a.Y)(v.sA,{id:"OvnUJ3",defaultMessage:"Destinations"}):(0,a.Y)(v.sA,{id:"zgVBRB",defaultMessage:"Subscribers"})})]}),!D&&(0,a.Y)(_.Content,{value:"1",children:(0,a.Y)(U,{control:x,dataSources:er,dataSourcesLoaded:eo,saving:en,errors:F})}),k&&(0,a.Y)(_.Content,{value:"2",children:(0,a.Y)($,{entityType:t,control:x,subscribersOnlyMode:D})})]}),C&&(0,a.Y)(I.F,{componentId:"codegen_redash_app_src_app_components_scheduler_refreshscheduleeditform_index.tsx_461",type:"info",closable:!1,message:(0,a.Y)(v.sA,{id:"VbCoa+",defaultMessage:"Collaborators may have schedules which are not visible to you. Consult with them to avoid creating duplicate schedules."}),style:{marginTop:N.spacing.md}}),et&&(0,a.Y)(I.F,{componentId:"codegen_redash_app_src_app_components_scheduler_refreshscheduleeditform_index.tsx_476",type:"error",message:et,style:{marginTop:N.spacing.md}})]}),cancelButtonProps:{onClick:()=>{b({doRefetch:!1})},disabled:en},saveButtonProps:{disabled:!R||!C&&i()(q),loading:en,onClick:()=>V(function*(){yield P(n=>V(function*(){if(D){if(ea((yield ee(n.subscriptions))))return;return A.success({message:E.formatMessage({id:"fh96VG",defaultMessage:"Subscribers updated."}),placement:"bottomRight"}),b({doRefetch:!0})}let{warehouseId:o}=n,i=r()(er,{id:o})?.endpoint_id;if(F.warehouseId&&!i)return void A.error({message:E.formatMessage({id:"tA+Z8/",defaultMessage:"Could not find selected warehouse. Please select another warehouse."}),placement:"bottomRight"});let{data:d}=C?yield W({variables:{input:function(e,s,{warehouseId:t,subscriptions:a,sendSubscriptions:n,customEmailSubject:r,name:o,quartzCronExpression:i,timezoneId:d}){let l={warehouseId:t,[e]:function(e,s,{subscriptions:t,sendSubscriptions:a,customEmailSubject:n}={}){let r=!a;switch(e){case"alert":return{alertId:s,subscriptions:t,pauseSubscriptions:r};case"dashboard":return{dashboardId:s,subscriptions:t,customSubject:n,pauseSubscriptions:r};default:return{queryId:s}}}(e,s,{subscriptions:a,sendSubscriptions:n,customEmailSubject:r})};return{isFromRedash:!0,settings:{name:o,tasks:[{taskKey:(0,O.s_)(e),task:{sqlTask:l}}],schedule:{quartzCronExpression:i,timezoneId:d,pauseStatus:u.wB8.UNPAUSED}}}}(t,s,{...n,warehouseId:i})}}):yield X({variables:{input:function(e,{jobId:s,settings:t},{name:a,quartzCronExpression:n,subscriptions:r,sendSubscriptions:o,customEmailSubject:i,warehouseId:d,timezoneId:l}){let u=!o,h={};t?.name!==a&&(h.name=a),t?.schedule?.quartzCronExpression!==n&&(h.schedule={quartzCronExpression:n,timezoneId:l??t?.schedule?.timezoneId});let p=t?.tasks?.[0]?.task?.sqlTask,m={warehouseId:d},b=!1;return p?.alert?.alertId?(m.alert={subscriptions:r,pauseSubscriptions:u,alertId:p?.alert.alertId},b=b||p.alert.pauseSubscriptions!==m.alert.pauseSubscriptions,(0,O.yH)(p.alert.subscriptions,r)&&(b=!0)):m.alert=p?.alert&&(0,c.U1)(p.alert),p?.dashboard?.dashboardId?(m.dashboard={dashboardId:p?.dashboard.dashboardId,subscriptions:r,pauseSubscriptions:u,customSubject:i},b=(b=b||p.dashboard.pauseSubscriptions!==m.dashboard.pauseSubscriptions)||p.dashboard.customSubject!==i,(0,O.yH)(p.dashboard.subscriptions,r)&&(b=!0)):m.dashboard=p?.dashboard&&(0,c.U1)(p.dashboard),m.query=p?.query&&(0,c.U1)(p.query),p&&p.parameters&&(m.parameters=p.parameters.map(({key:e,value:s})=>({key:e,value:s}))),(b=b||p?.warehouseId!==d)&&(h.tasks=[{taskKey:(0,O.s_)(e),task:{sqlTask:m}}]),{id:`${s}`,newSettings:h,isFromRedash:!0}}(t,e,{...n,warehouseId:i})}}),l=!function(e){if(!e)return!1;return"jobCreate"in e}(d)?e?.jobId:d.jobCreate?.entity?.id;C&&T("clientsideEvent",{eventName:"dbsqlJobScheduleCreated",folderNodeType:t,folderNodeId:s,opTarget:l});let h=l&&q.subscriptions?{description:E.formatMessage({id:"g6HY0H",defaultMessage:"You may want to update schedule permissions so collaborators can see this schedule."}),btn:(0,a.Y)(g.$n,{componentId:"codegen_redash_app_src_app_components_scheduler_refreshscheduleeditform.tsx_912",onClick:()=>{y.H.call({id:`${e?.jobId??l}`,name:n.name??e?.settings?.name??""})},disabled:!l||!y.H.isAvailable(),children:(0,a.Y)(v.sA,{id:"lDCIVS",defaultMessage:"Update schedule permissions"})}),duration:10}:{};A.success({message:E.formatMessage({id:"CkMGaF",defaultMessage:"Schedule {isCreateMode,select, true {created} other {saved}}."},{isCreateMode:C}),placement:"bottomRight",...h}),b({doRefetch:!0})})())()})()},saveButtonText:C?E.formatMessage({id:"eOTC50",defaultMessage:"Create"}):E.formatMessage({id:"lKi0Qz",defaultMessage:"Save"})}}},752803:(e,s,t)=>{t.d(s,{W:()=>D});var a,n=t(610435);t(692738);var r=t(200356),o=t(688789),i=t(627714),d=t(497895),l=t(742557),u=t(68925),c=t(623749),h=t(513378),p=t(21255),m=t(833218),b=t(191283),g=t(498928),f=t(382908),_=t(802582),I=t(764236),v=t(342411);function S(){return(0,n.Y)(v.sA,{id:"r8HUXq",defaultMessage:" • "})}var y=((a=y||{}).SUCCESS="SUCCESS",a.FAILURE="FAILURE",a.RUNNING="RUNNING",a.CANCELLING="CANCELLING",a.CANCELLED="CANCELLED",a.SKIPPED="SKIPPED",a.TIMEDOUT="TIMEDOUT",a.PENDING="PENDING",a.BLOCKED="BLOCKED",a.WAITING="WAITING",a.TERMINATED="TERMINATED",a.UNKNOWN="UNKNOWN",a);let Y={"Internal Error":"FAILURE",Running:"RUNNING",Failed:"FAILURE",Pending:"PENDING",Skipped:"SKIPPED",SkippedByCustomerCode:"SKIPPED",Succeeded:"SUCCESS",Terminated:"TERMINATED",Terminating:"SUCCESS",Blocked:"BLOCKED","Timed Out":"TIMEDOUT",Cancelled:"CANCELLED",Cancelling:"CANCELLING","Waiting for Retry":"WAITING",Unknown:"UNKNOWN"};function A({status:e,...s}){let t=function(e){let{theme:s}=(0,d.wn)();return({SUCCESS:s.colors.lime,FAILURE:s.colors.coral,RUNNING:s.colors.textValidationInfo,CANCELLING:s.colors.textValidationInfo,CANCELLED:s.colors.textValidationInfo,SKIPPED:s.colors.lemon,TIMEDOUT:s.colors.textValidationInfo,PENDING:s.colors.textValidationInfo,BLOCKED:s.colors.textValidationInfo,WAITING:s.colors.textValidationInfo,TERMINATED:s.colors.textValidationInfo,UNKNOWN:s.colors.textValidationInfo})[e]}(e);switch(e){case"SUCCESS":return(0,n.Y)(l.A,{css:{color:t},...s});case"FAILURE":return(0,n.Y)(u.A,{css:{color:t},...s});case"CANCELLED":return(0,n.Y)(c.A,{css:{color:t},...s});case"CANCELLING":return(0,n.Y)(c.A,{css:{color:t},...s,spin:!0});case"RUNNING":return(0,n.Y)(h.A,{css:{color:t},...s,spin:!0});case"TERMINATED":return(0,n.Y)(p.A,{css:{color:t},...s});case"BLOCKED":case"SKIPPED":return(0,n.Y)(m.A,{css:{color:t},...s});case"PENDING":case"TIMEDOUT":case"WAITING":return(0,n.Y)(b.A,{css:{color:t},...s});default:return(0,n.Y)(g.A,{css:{color:t},...s})}}function D({job:e,entityId:s,entityType:t}){let a=(0,v.tz)(),d=e?.settings?.tasks?.find(e=>{switch(t){case"alert":return e.task?.sqlTask?.alert?.alertId===s;case"dashboard":return e.task?.sqlTask?.dashboard?.dashboardId===s;default:return e.task?.sqlTask?.query?.queryId===s}})?.task?.sqlTask,l=d?.parameters,u=[...e.activeRuns?.edges??[],...e.completedRuns?.edges??[]][0]?.node,c=Y[u?.active?"Running":u?.status]??"UNKNOWN",h="dashboard"===t?d?.dashboard?.subscriptions:null,p=!1!==(0,i.iF)().allowSubscriptions&&!!h?.length,m=!!e?.settings?.schedule?.quartzCronExpression,b=!!l?.length;return(0,n.FD)("div",{children:[(0,n.FD)("div",{children:[(0,n.Y)(f.o.Text,{bold:!0,children:e.settings?.name}),e.settings?.schedule?.pauseStatus===r.usk.PAUSED&&(0,n.FD)(n.FK,{children:[" ",(0,n.Y)(f.o.Text,{color:"secondary",children:(0,n.Y)(v.sA,{id:"NtHEAO",defaultMessage:"(Paused)"})})]})]}),(0,n.Y)("div",{children:(0,n.FD)(f.o.Text,{color:"info",children:[e.settings?.schedule?.quartzCronExpression&&(0,o.nr)(e.settings.schedule.quartzCronExpression,a,{capitalize:!0},e.settings?.schedule?.timezoneId||void 0),b&&(0,n.FD)(n.FK,{children:[m&&(0,n.Y)(S,{}),(0,n.Y)(_.p,{title:(0,n.FD)("div",{children:[(0,n.Y)("b",{children:(0,n.Y)(v.sA,{id:"frpLiL",defaultMessage:"Edit in Job"})}),(0,n.Y)(I.h,{size:"sm"}),l?.map(({key:e,value:s})=>(0,n.Y)("p",{className:"dbsql-legacy-p",children:(0,n.Y)(v.sA,{id:"f8sHtT",defaultMessage:"{key} = {value}",values:{key:e,value:s}})},e))]}),children:(0,n.Y)("span",{children:(0,n.Y)(v.sA,{id:"rjdemU",defaultMessage:"{numCustomParameters, plural, =1 {1 parameter} other {# parameters}}",values:{numCustomParameters:l?.length}})})})]}),p&&(0,n.FD)(n.FK,{children:[(b||m)&&(0,n.Y)(S,{}),(0,n.Y)(_.p,{title:(0,n.FD)("div",{children:[h?.filter(({userName:e})=>e).map(({userName:e})=>(0,n.Y)("p",{className:"dbsql-legacy-p",children:e},e)),h?.some(e=>e.destinationId)&&(0,n.Y)(v.sA,{id:"GZelhP",defaultMessage:"{numDestinations, plural, =1 {1 Destination} other {# Destinations}}",values:{numDestinations:h.reduce((e,{destinationId:s})=>s?e+1:e,0)}})]}),children:(0,n.Y)("span",{children:(0,n.Y)(v.sA,{id:"si/HQM",defaultMessage:"{numSubscribers, plural, =1 {1 subscriber} other {# subscribers}}",values:{numSubscribers:h?.length??0}})})})]})]})}),(0,n.Y)("div",{children:(0,n.Y)(f.o.Text,{color:"info",children:u?(0,n.FD)(n.FK,{children:[(0,n.Y)(_.p,{title:u.status,placement:"bottom",children:(0,n.Y)(A,{"aria-hidden":"false",status:c})})," ",u.startTime&&(u.active?(0,n.Y)(v.sA,{id:"P33bdC",defaultMessage:"Since {since}",values:{since:(0,o.r6)(u.startTime,a)}}):(0,o.r6)(u.startTime+(u.durationMillis??0),a))]}):(0,n.Y)(v.sA,{id:"AjfEOu",defaultMessage:"No runs"})})})]})}},818380:(e,s,t)=>{t.d(s,{d:()=>o});var a=t(610435);t(692738);var n=t(497895),r=t(764236);function o({children:e}){let{theme:s}=(0,n.wn)();return(0,a.FD)(a.FK,{children:[(0,a.Y)(r.h,{}),(0,a.Y)("footer",{style:{display:"flex",justifyContent:"end",gap:s.spacing.md},children:e})]})}},948555:(e,s,t)=>{t.d(s,{s:()=>n});var a=t(141078);let n=(0,a.J1)`
  query UserRecents__deduped($count: Int!, $filter: UseractivityListRecentAssetsRequestFilterInput)
  @component(name: "Lakeview.DatabricksOne") {
    useractivityListRecentAssets(input: { numResults: $count, filter: $filter }) {
      assets {
        asset {
          name
          id
          type
          unityCatalogSecurable {
            securableKind
          }
        }
        viewTime
      }
      nextPageToken
    }
  }
`}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/18408.0872768608.chunk.js.map