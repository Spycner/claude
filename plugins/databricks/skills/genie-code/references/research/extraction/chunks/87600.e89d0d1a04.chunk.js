"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[87600],{26446:(e,t,s)=>{s.d(t,{HT:()=>d,M8:()=>u,Pf:()=>o,bp:()=>l,gb:()=>i,iN:()=>c,pP:()=>n,xB:()=>p});let i=1e3,n={enableAccountGroups:!1,enableAccountServicePrincipals:!1,enableAccountUsers:!1,enableWorkspaceGroups:!1,enableWorkspaceServicePrincipals:!1,enableWorkspaceUsers:!1},r=/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,a={admins:"Admins",users:"All workspace users","account users":"All account users"},o=e=>{if(!e)return e;return a[e]??e},l=e=>{let t=new Map;return e.forEach(e=>{let s=d(e)||e.name;t.has(s)||t.set(s,[]),t.get(s)?.push(e)}),t},c=e=>{switch(e.kind){case"user":return e.fullName;case"serviceprincipal":return e.name;case"group":return e.displayName;default:return""}},d=e=>{switch(e.kind){case"user":case"group":return e.name||"";case"serviceprincipal":return e.applicationId||"";default:return""}},u=({uniqueName:e,id:t,kind:s,displayName:i})=>{switch(s){case"user":return{id:t||"",optionId:`user.${t}`,kind:s,name:e||"",fullName:i||"",title:""};case"serviceprincipal":return{id:t||"",optionId:`serviceprincipal.${t}`,kind:s,name:i||"",applicationId:e||"",title:""};case"group":return{id:t||"",optionId:`group.${t}`,kind:s,name:e||"",displayName:o(e||""),title:""};default:return}};function p(e){return e?r.test(e)?"serviceprincipal":"user":void 0}},68565:(e,t,s)=>{s.r(t),s.d(t,{RouteComponent:()=>er});var i,n=s(610435),r=s(692738),a=s(342411),o=s(648782),l=s(866941),c=s(402720),d=s(278983),u=s(844760),p=s(107888),m=s(157698),h=s.n(m),f=s(497895),g=s(79128),A=s(128572),I=s(793480),v=s(419374),P=s(709004),y=s(691238),M=s(483588),N=s(62947),b=s(161330),R=s(826474),E=s(88673),S=s(889885),C=s(620839),w=s(67656);class T extends r.Component{static propTypes={principalName:h().string,nodeType:h().string,inheritedPermission:h().string,inheritedSourceIds:h().array,currentPermission:h().string.isRequired,onChange:h().func.isRequired,disabled:h().bool,showPermissionDescriptions:h().bool,hideNoPermissionsOption:h().bool,intl:h().object};static defaultProps={inheritedPermission:E.i.NONE,inheritedSourceIds:[]};static displayName="PermissionSelection";state={value:this.props.currentPermission};UNSAFE_componentWillReceiveProps(e){this.setState({value:e.currentPermission})}onChange=e=>{let t=e.target.value;this.setState({value:t}),this.props.onChange(t)};getAllPermissions=()=>{if(this.props.nodeType===E.i.CLUSTER_TYPE)return E.i.ALL_CLUSTER_PERMISSIONS;if(this.props.nodeType===E.i.IAM_ROLE_TYPE)return E.i.ALL_IAM_ROLE_PERMISSIONS;if(this.props.nodeType===E.i.JOB_TYPE_V2)return(0,S.FI)("enableJobCanManagePermissionLevel")?E.i.ALL_JOB_V2_PERMISSIONS_WITH_CAN_MANAGE:E.i.ALL_JOB_V2_PERMISSIONS;return E.i.ALL_WORKSPACE_PERMISSIONS};getAllPermissionsWithoutNone=()=>y.Ay.filter(this.getAllPermissions(),function(e){return e!==E.i.NONE});getPermissionOptions=()=>{let e=this.props.intl,t=y.Ay.clone(this.getAllPermissions());if(this.props.hideNoPermissionsOption&&(t=y.Ay.clone(this.getAllPermissionsWithoutNone())),this.props.inheritedPermission!==E.i.NONE)for(;t.length>0&&t[0]!==this.props.inheritedPermission;)t.shift();return y.Ay.map(t,function(t){return(0,n.Y)("option",{value:t,children:(0,R.jN)(e,t)},t)})};render(){let e=[],t=this.getAllPermissionsWithoutNone();if(t.length<=1)return(0,n.Y)("div",{});if(this.props.showPermissionDescriptions){for(let s in t){if(!t.hasOwnProperty(s))continue;let i=t[s];e.push((0,n.FD)("span",{className:"permission-tooltip",children:[(0,R.p2)(i)," -"," ",(0,R.Zn)(i,this.props.nodeType,this.props.principalName),(0,n.FD)("span",{children:[(0,n.Y)("br",{}),(0,n.Y)("br",{})]},s)]},i))}let s=w.R.getDbGuideUrl(C.A.ACL_WORKSPACE_URL);e.push((0,n.FD)("span",{children:[(0,n.Y)(a.sA,{id:"d21VAP",defaultMessage:"See the <a>Databricks Guide</a> to learn more.",values:{a:e=>(0,n.Y)("a",{target:"_blank",rel:"noopener noreferrer",href:s,children:e})}})," "]},"link"))}let s=y.Ay.filter(this.props.inheritedSourceIds,function(e){return e.type!==E.i.CLUSTER_ROOT_TYPE});if(s.length>0){let t=y.Ay.map(s,e=>{let t=E.i.getDisplayNameForAclObjectid(e,this.props.intl);return(0,n.Y)("i",{children:t},t)});t.length>1&&(t=y.Ay.flatten(y.Ay.map(t,function(e){return[e,", "]})));let i=(0,n.Y)(a.sA,{id:"N62Ags",defaultMessage:"To remove these permissions, change the permissions of these folders first."});this.props.disabled?e.push((0,n.FD)("span",{children:[(0,n.Y)(a.sA,{id:"0wWhtv",defaultMessage:"Some permissions are inherited from:"}),(0,n.Y)("br",{}),t,(0,n.Y)("br",{}),i]},"disabled:"+t)):e.push((0,n.FD)("span",{children:[(0,n.Y)(a.sA,{id:"WXoB51",defaultMessage:"Some permissions cannot be removed because they are inherited from:"}),(0,n.Y)("br",{}),t,(0,n.Y)("br",{}),i]},"inherited:"+t))}let i=null;return e.length>0&&(i=(0,n.Y)(b.I,{componentId:"acl.permission-selection.tooltip",content:e})),(0,n.FD)("div",{className:"permission-selection",children:[(0,n.Y)("select",{ref:"selector",value:this.state.value,onChange:this.onChange,disabled:!!this.props.disabled||null,children:this.getPermissionOptions()}),i]})}}let _=(0,a.j4)(T,{forwardRef:!0});var Y=s(550438);class k extends r.Component{state={permissionToAdd:E.i.getInitialPermissionToAdd(this.props.nodeType),selectedUserPerm:null};handlePermissionChange=e=>this.setState({permissionToAdd:e});handleUserChange=e=>{this.setState({selectedUserPerm:e})};submit=()=>{let e=this.state.selectedUserPerm,t=this.state.permissionToAdd;if(!e)return;this.props.setPermission(e.user.id,E.i.toActions(t,this.props.nodeType)),this.setState({selectedUserPerm:null,selectedSubject:void 0}),this.props.onAddPermission(e)};isEntityDisabled=e=>{if(this.props.currentPermissionIds.includes(e.id))return{disabled:!0,disabledReason:"already has permission"};return{disabled:!1}};handleClearSubjectSelect=()=>{this.setState({selectedSubject:void 0})};handleUpdateSubjectSelect=e=>{e&&!Array.isArray(e)&&(this.setState({selectedSubject:e.optionId}),this.handleUserChange({user:{id:e.id,fullName:e.fullName||"",username:e.name,kind:e.kind},changed:!1,permission:[]}))};render(){let e=this.state.selectedUserPerm?(0,n.Y)("a",{className:"btn btn-primary","data-action":"add",onClick:this.submit,children:(0,n.Y)(a.sA,{id:"tui9/V",defaultMessage:"Add"})}):(0,n.Y)("a",{className:"btn","data-action":"add",disabled:!0,children:(0,n.Y)(a.sA,{id:"tui9/V",defaultMessage:"Add"})}),t=(0,Y.a)()?(0,n.Y)(a.sA,{id:"IQidzj",defaultMessage:"Select user, group or service principal..."}):(0,n.Y)(a.sA,{id:"pw4cBm",defaultMessage:"Select user or group..."}),s=this.props.nodeType===E.i.IAM_ROLE_TYPE?M.cMI.PROVISION_SOURCE_WORKSPACE_SETTINGS:void 0;return(0,n.FD)("div",{className:"add-user",children:[(0,n.Y)(N.T,{css:{flex:1,input:{boxShadow:"none !important"}},onClear:this.handleClearSubjectSelect,onUpdate:this.handleUpdateSubjectSelect,disabledFn:this.isEntityDisabled,value:this.state.selectedSubject,placeholder:t,provisionSource:s}),(0,n.Y)(_,{principalName:"Users",nodeType:this.props.nodeType,currentPermission:this.state.permissionToAdd,onChange:this.handlePermissionChange,showPermissionDescriptions:!0,hideNoPermissionsOption:!0}),e]})}}let O=(0,a.j4)(k,{forwardRef:!0});var U=s(524178),D=s(441535),G=s(237792),z=s(934858),F=s(829642),$=s(556298);let j=(0,r.forwardRef)(function({permissions:e,node:t,setPermission:s=()=>{},viewOnly:i=!1},o){let l=(0,a.tz)(),c=(e,i)=>{s(e,E.i.toActions(i,t.getAclObjectType()))},d=y.Ay.sortBy(e,function(e){let t=e.user.fullName.trim();return e.affected?t.toUpperCase():t.toLowerCase()}),u=(0,r.useRef)({});return(0,r.useImperativeHandle)(o,()=>({scrollIntoView(e){let t=u.current[e];t&&t.scrollIntoView(!1)}}),[u]),(0,n.Y)("div",{className:"acl-user-list",children:d.map(e=>{let r=(0,z._d)(e.user.kind),[a,o]=(0,z.Xd)(e.user.kind,e.user.fullName,e.user.username,l),d=(0,U.A)({"acl-user":!0,changed:e.changed||e.affected}),p=E.i.getInheritedPermission(e,t),m=p!==E.i.NONE,h=0===t.id&&"group"===e.user.kind&&"admins"===e.user.username,f=G.Ay.isHomeFolderForUser(t,e.user.id),g=(0,D.W)("databricks.fe.config.wexp.broadenedEditPermission",!1)?h||i:h||f||i,A=m||g?null:(0,n.Y)("div",{className:"acl-user-control",children:(0,n.Y)("a",{"data-action":"remove",onClick:()=>s(e.user.id,[]),children:(0,n.Y)(F.I,{name:$.A.times})})});return(0,n.FD)("div",{className:d,"data-user":e.user.username,ref:t=>{u.current[e.user.id]=t},children:[(0,n.FD)("div",{className:"acl-user-name ellipsis",title:e.user.username,children:[r," ",a,(0,n.Y)("span",{className:"user-email",children:o?`(${o})`:""})]}),(0,n.Y)("div",{className:"acl-user-permission",children:(0,n.Y)(_,{principalName:e.user.fullName,nodeType:E.i.getNodeType(t),currentPermission:E.i.getCurrentPermission(e,t.getAclObjectType()),inheritedPermission:p,inheritedSourceIds:E.i.getInheritedSourceIds(e,t),onChange:y.Ay.partial(c,e.user.id),disabled:g})}),A]},e.user.id)})})});var L=s(181554);class x extends r.Component{static propTypes={workspaceAcl:h().instanceOf(L.A).isRequired,viewOnly:h().bool};constructor(e){super(e),this.permissionListController=r.createRef(),this.state={},this.props.viewOnly||(this.state={allPrincipalsLoading:!0})}onAddPermission=e=>{this.onAddPermissionDeferId=y.Ay.defer(()=>{this.permissionListController.current?.scrollIntoView(e.user.id)})};componentWillUnmount(){this.onAddPermissionDeferId&&(clearTimeout(this.onAddPermissionDeferId),this.onAddPermissionDeferId=void 0)}_getUsersWithoutAccess=e=>{let t=y.Ay.map(e,function(e){return e.user.id.toString()});return y.Ay.filter(this.state.allPrincipals,function(e){return!y.Ay.includes(t,e.user.id)})};render(){let{workspaceAcl:e,viewOnly:t}=this.props,s=e.get("model"),i=e.hasChanges(),r=e.currentPermissions(),o=y.Ay.filter(r,function(e){return!y.Ay.isEmpty(e.permission)}),l=i?(0,n.Y)("span",{className:"save-changes-hint",children:(0,n.Y)(a.sA,{id:"wEdLGb",defaultMessage:"You have made changes that you need to confirm"})}):null,c=e.setPermission.bind(e),d=(0,n.Y)(a.sA,{id:"oyyQL2",defaultMessage:"Add users, groups, and service principals:"}),u=(0,n.Y)(a.sA,{id:"zYYH4u",defaultMessage:"Add users and groups:"}),p=(0,Y.a)()?d:u,m=(o||[]).map(e=>String(e.user?.id));return(0,n.FD)("div",{children:[(0,n.Y)("p",{className:"user-list-title",children:(0,n.Y)(a.sA,{id:"17nbVx",defaultMessage:"Who has access: {hint}",values:{hint:l}})}),(0,n.Y)(j,{ref:this.permissionListController,permissions:o,setPermission:c,node:s,viewOnly:t}),!this.props.viewOnly&&(0,n.FD)("div",{children:[(0,n.Y)("p",{className:"add-user-title",children:p}),(0,n.Y)(O,{currentPermissionIds:m,setPermission:c,onAddPermission:this.onAddPermission,nodeType:E.i.getNodeType(s)})]})]})}}var V=s(702868);function B({instanceProfile:e,workspaceAcl:t,deleteInstanceProfileFunc:s,renderAclChangeHeader:i,onConfirmAcl:r,onCancelAcl:o}){let{navigateToEdit:l}=(0,V.G)(),c=v.p.metaInstanceProfilesEnabled(),d=c?(0,n.Y)("label",{children:"Type"}):null,u=c?(0,n.FD)("p",{children:[e?.is_meta_instance_profile?"Meta":"Regular"," instance profile"]}):null,{theme:p}=(0,f.wn)(),m=(0,a.tz)();return(0,n.Y)("uses-legacy-bootstrap",{children:(0,n.FD)("div",{className:"instance-profile-view instance-profile-details-view",children:[(0,n.FD)("h2",{className:"admin-form-header",css:{display:"flex",gap:p.spacing.sm},children:[P.RS.parseInstanceProfileName(e.instance_profile_arn),i?(0,n.Y)(W,{onConfirm:r,onCancel:o}):null,(0,n.Y)(g.$n,{componentId:"instanceProfileDetailsView.editButton",onClick:()=>l(e.instance_profile_arn),icon:(0,n.Y)(A.A,{}),"aria-label":m.formatMessage({id:"T2oaqJ",defaultMessage:"Edit"})}),(0,n.Y)(g.$n,{componentId:"instanceProfileDetailsView.deleteButton",onClick:s,icon:(0,n.Y)(I.A,{}),"aria-label":m.formatMessage({id:"8E+cRq",defaultMessage:"Delete"})})]}),(0,n.FD)("label",{children:["Instance Profile ARN ",(0,n.Y)(P.$9,{})]}),(0,n.Y)("p",{children:e.instance_profile_arn}),e?.iam_role_arn&&(0,n.FD)(n.FK,{children:[(0,n.FD)("label",{children:["IAM role ARN ",(0,n.Y)(P.zw,{})]}),(0,n.Y)("p",{children:e.iam_role_arn})]}),(0,n.Y)("label",{children:"Name"}),(0,n.Y)("p",{children:P.RS.parseInstanceProfileName(e.instance_profile_arn)}),d,u,(0,n.Y)("div",{className:"workspace-acl",children:(0,n.Y)(x,{workspaceAcl:t})})]})})}function W({onConfirm:e,onCancel:t}){return(0,n.FD)("span",{className:"change-buttons",children:[(0,n.Y)("button",{className:"btn btn-primary confirm-btn",onClick:e,children:"Confirm"}),(0,n.Y)("button",{className:"btn btn-default concel-btn",onClick:t,children:"Cancel"})]})}W.propTypes={onConfirm:h().func.isRequired,onCancel:h().func.isRequired};var J=s(573431),q=s(289298),H=s(500499),Q=s(869580),X=s(162210);function K(e,t,s,i,n,r,a){try{var o=e[r](a),l=o.value}catch(e){s(e);return}o.done?t(l):Promise.resolve(l).then(i,n)}function Z(e){return function(){var t=this,s=arguments;return new Promise(function(i,n){var r=e.apply(t,s);function a(e){K(r,i,n,a,o,"next",e)}function o(e){K(r,i,n,a,o,"throw",e)}a(void 0)})}}let ee=(i=class extends r.Component{workspaceAcl;isMounted=!0;constructor(e){super(e),this.fetchInstanceProfile=this.fetchInstanceProfile.bind(this),this.deleteInstanceProfile=this.deleteInstanceProfile.bind(this),this.confirmAclChanges=this.confirmAclChanges.bind(this),this.cancelAclChanges=this.cancelAclChanges.bind(this),this.workspaceAcl=new L.A({model:{getName:()=>P.RS.parseInstanceProfileName(this.state?.instanceProfile?.instance_profile_arn??""),getAclObjectType:()=>E.i.IAM_ROLE_TYPE,getAclObjectId:()=>encodeURIComponent(this.props.arn)}}),this.state={showDeleteModal:!1,instanceProfile:null}}fetchInstanceProfile(){return Z(function*(){let e=(yield(0,J.f)()).find(({instance_profile_arn:e})=>e===this.props.arn);if(!this.isMounted)return;if(e||this.props.routes.navigateToList(),!P.RS.parseInstanceProfileName(e?.instance_profile_arn??"")){let e=X.BrowserUtils.getMeasurementTags({eventName:"renderingError",eventType:"InvalidInstanceProfile",source:"InstanceProfileViewPage"});(0,d.y)("clientsideEvent",e,"invalid-arn"),Q.A.alert("Invalid Instance Profile arn",!1,null,()=>this.props.routes.navigateToList());return}if("boolean"!=typeof e?.is_meta_instance_profile){let e=X.BrowserUtils.getMeasurementTags({eventName:"renderingError",eventType:"InvalidInstanceProfileType",source:"InstanceProfileViewPage"});(0,d.y)("clientsideEvent",e,"Invalid instance profile type"),Q.A.alert("Invalid Instance Profile Type",!1,null,()=>this.props.routes.navigateToList());return}this.setState({instanceProfile:e})}).call(this)}componentDidMount(){return Z(function*(){this.workspaceAcl.on("change",this.forceUpdate.bind(this,()=>null),this),this.workspaceAcl.fetch(),yield this.fetchInstanceProfile()}).call(this)}componentWillUnmount(){this.workspaceAcl.off("change"),this.isMounted=!1}getFuncToDeleteRole(){let e=()=>this.props.routes.navigateToList();return()=>{let t=X.BrowserUtils.getMeasurementTags({eventName:"delete",source:"InstanceProfileDetails"});return window.recordEvent("instanceProfile",t),et(this.props.arn).then(e).catch(e=>{(0,q.i)().addErrorNotification({title:(0,n.Y)(a.sA,{id:"xPugIP",defaultMessage:"Error while deleting instance profile"}),message:e.message,autoDismiss:5,position:"tr",level:"error"}),this.setState({showDeleteModal:!1})})}}deleteInstanceProfile(){this.setState({showDeleteModal:!0})}confirmAclChanges(){Q.A.confirm({message:`You are changing who has access to this ${(0,H.J8)()}. Are you sure you want to continue?`,confirm:()=>{this.workspaceAcl.commit({sync:!0})}})}cancelAclChanges(){this.workspaceAcl.resetAllChanges()}render(){return this.state.instanceProfile?(0,n.FD)(n.FK,{children:[(0,n.Y)(p.p,{onDeleteClick:this.getFuncToDeleteRole(),onCancelClick:()=>this.setState({showDeleteModal:!1}),instanceProfileArn:this.props.arn,showDeleteModal:this.state.showDeleteModal}),(0,n.Y)(B,{instanceProfile:this.state.instanceProfile,renderAclChangeHeader:this.workspaceAcl.hasChanges(),onConfirmAcl:this.confirmAclChanges,onCancelAcl:this.cancelAclChanges,deleteInstanceProfileFunc:this.deleteInstanceProfile,workspaceAcl:this.workspaceAcl})]}):(0,n.Y)(c.P,{})}},function(e){return(0,n.Y)(i,{...e,routes:(0,V.G)()})}),et=e=>(0,u.S)("/ajax-api/2.0/instance-profiles/remove",{method:"POST",body:JSON.stringify({instance_profile_arn:e})});var es=s(156443),ei=s(50799),en=s(624912);let er=r.memo((0,en.l)("settings.workspace./security./instance-profiles",function(){let e=(0,a.tz)(),{arn:t}=(0,o.g)();if(!t)throw Error('An "arn" param is required — usually this comes from a route param');let s=e.formatMessage({id:"3Mm47K",defaultMessage:"View instance profile"});return(0,n.Y)(ei.c,{renderHeader:e=>(0,n.Y)(l.r,{breadcrumbs:(0,n.Y)(es.z,{breadcrumbIds:["WORKSPACE_SETTINGS","SECURITY","INSTANCE_PROFILES"],originId:"workspace_settings.instance_profiles.$arn"}),heading:(0,n.Y)("span",{id:e,children:s})}),size:"full",title:s,children:(0,n.Y)(ee,{arn:t})})}))},465082:(e,t,s)=>{s.d(t,{A:()=>l});var i=s(610435),n=s(692738),r=s(375214);function a(e){return(0,i.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,i.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a3.25 3.25 0 1 0 0 6.5A3.25 3.25 0 0 0 8 1M6.25 4.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M8 9a8.74 8.74 0 0 0-6.836 3.287.75.75 0 0 0-.164.469v1.494c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75v-1.494a.75.75 0 0 0-.164-.469A8.74 8.74 0 0 0 8 9m-5.5 4.5v-.474A7.23 7.23 0 0 1 8 10.5c2.2 0 4.17.978 5.5 2.526v.474z",clipRule:"evenodd"})})}let o=(0,n.forwardRef)((e,t)=>(0,i.Y)(r.I,{ref:t,...e,component:a}));o.displayName="UserIcon";let l=o},550438:(e,t,s)=>{s.d(t,{a:()=>a});var i=s(686560),n=s(783487);let r=["DEDICATED_TIER","ENTERPRISE_HIPAA_TIER","ENTERPRISE_TIER","ENTERPRISE_TIER_V2","LEGACY_PROFESSIONAL_TIER","STANDARD_W_SEC_TIER"];function a(){let e,t=n.T.getCloudProvider();return"Azure"===t||"GCP"===t||"AWS"===t&&(e=(0,i.d)("workspaceFeatureTier","UNKNOWN_TIER"),r.includes(e))}},655841:(e,t,s)=>{s.d(t,{GX:()=>u,HA:()=>r,Ij:()=>d,U8:()=>n,_:()=>a,e:()=>l,fq:()=>p,n$:()=>c,r4:()=>o});var i=s(141078);let n=(0,i.J1)`
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
  ${n}
`,a=(0,i.J1)`
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
  ${n}
`,o=(0,i.J1)`
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
  ${n}
`,l=(0,i.J1)`
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
  ${n}
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
  ${n}
`,d=(0,i.J1)`
  mutation GetOrCreateIdpUser($input: AclmanagerIdentityapiGetOrCreateUserRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateUser(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,u=(0,i.J1)`
  mutation GetOrCreateIdpGroup($input: AclmanagerIdentityapiGetOrCreateGroupRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateGroup(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,p=(0,i.J1)`
  mutation GetOrCreateIdpServicePrincipal($input: AclmanagerIdentityapiGetOrCreateServicePrincipalRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateServicePrincipal(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`},691069:(e,t,s)=>{s.d(t,{C:()=>c});var i=s(610435);s(692738);var n=s(497895),r=s(465082),a=s(26971),o=s(777517),l=s(342411);let c=({kind:e,disabled:t,style:s})=>{let{theme:c}=(0,n.wn)(),d=(0,l.tz)(),u={alignItems:"center",background:t?void 0:c.colors.backgroundSecondary,borderRadius:30,color:t?c.colors.actionDisabledText:c.colors.textSecondary,display:"flex",fontSize:20,height:30,justifyContent:"center",width:30};switch(e){case"user":return(0,i.Y)(r.A,{title:d.formatMessage({id:"9vv8Gs",defaultMessage:"User"}),css:s||u});case"group":return(0,i.Y)(a.A,{title:d.formatMessage({id:"Qzw3C/",defaultMessage:"Group"}),css:s||u});case"serviceprincipal":return(0,i.Y)(o.A,{title:d.formatMessage({id:"QrVB43",defaultMessage:"Service Principal"}),css:s||u});default:return null}}},777517:(e,t,s)=>{s.d(t,{A:()=>l});var i=s(610435),n=s(692738),r=s(375214);function a(e){return(0,i.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,i.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 0a.75.75 0 0 1 .75.75V3h5.5a.75.75 0 0 1 .75.75V6h.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75H15v2.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V12H.75a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 .75 6H1V3.75A.75.75 0 0 1 1.75 3h5.5V.75A.75.75 0 0 1 8 0M2.5 4.5v9h11v-9zM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6.25 2.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"})})}let o=(0,n.forwardRef)((e,t)=>(0,i.Y)(r.I,{ref:t,...e,component:a}));o.displayName="RobotIcon";let l=o},826474:(e,t,s)=>{s.d(t,{Zn:()=>g,Zx:()=>A,jN:()=>v,p2:()=>I});var i=s(610435);s(692738);var n=s(342411),r=s(88673),a=s(889885);let o={[r.A.NONE]:(0,n.zR)({id:"EiXPak",defaultMessage:"{subject} has no permissions."}),[r.A.VIEW]:(0,n.zR)({id:"jt+g/u",defaultMessage:"{subject} can view and comment on the notebook."}),[r.A.RUN]:(0,n.zR)({id:"Y49l8c",defaultMessage:"{subject} can view, comment, attach/detach, and run commands in the notebook."}),[r.A.EDIT]:(0,n.zR)({id:"ltB+zS",defaultMessage:"{subject} can view, comment, attach/detach, run commands, and edit the notebook."}),[r.A.MANAGE]:(0,n.zR)({id:"9rgiGR",defaultMessage:"{subject} can view, comment, attach/detach, run commands, edit, and change permissions of the notebook."})},l={[r.A.VIEW]:(0,n.zR)({id:"SiGmFL",defaultMessage:"{subject} can view the experiment and associated runs."}),[r.A.RUN]:(0,n.zR)({id:"OQQu9j",defaultMessage:"{subject} can view the experiment and associated runs, create and delete runs, and log runs."}),[r.A.EDIT]:(0,n.zR)({id:"lAuzT8",defaultMessage:"{subject} can view the experiment and associated runs, create and delete runs, and log runs."}),[r.A.MANAGE]:(0,n.zR)({id:"sq3yXk",defaultMessage:"{subject} can view the experiment and associated runs, create and delete runs, log runs, delete the experiment, and change permissions of the experiment."})},c={[r.A.VIEW]:(0,n.zR)({id:"sxr8WJ",defaultMessage:"{subject} can view and comment on notebooks in the folder."}),[r.A.RUN]:(0,n.zR)({id:"mmz5sD",defaultMessage:"{subject} can view, comment, attach/detach, and run commands in notebooks in the folder."}),[r.A.EDIT]:(0,n.zR)({id:"rb44AT",defaultMessage:"{subject} can view, comment, attach/detach, run commands, and edit notebooks in the folder."}),[r.A.MANAGE]:(0,n.zR)({id:"GGznlG",defaultMessage:"{subject} can view, comment, attach/detach, run commands, and edit notebooks in the folder, and can create, delete, and change permissions of items in the folder."})},d={[r.A.NONE]:(0,n.zR)({id:"ijrw+t",defaultMessage:"{subject} has no permissions."}),[r.A.ATTACH]:(0,n.zR)({id:"pwg6m6",defaultMessage:"{subject} can attach to cluster."}),[r.A.RESTART]:(0,n.zR)({id:"J/+ipI",defaultMessage:"{subject} can attach to, terminate, start, and restart cluster."}),[r.A.MANAGE]:(0,n.zR)({id:"ODW5QV",defaultMessage:"{subject} can attach to, terminate, start, restart, and resize cluster."})},u={[r.A.JOBS_V2_VIEW]:(0,n.zR)({id:"P2qFiS",defaultMessage:"{subject} can view job run results."}),[r.A.JOBS_V2_MANAGE_RUN]:(0,n.zR)({id:"eSNSS+",defaultMessage:"{subject} can trigger and cancel run."}),[r.A.JOBS_V2_IS_OWNER]:(0,n.zR)({id:"VbvJwE",defaultMessage:"{subject} owns the job. Jobs will run assuming the owner's permissions. There can only be one owner."})},p={...u,[r.A.JOBS_V2_MANAGE]:(0,n.zR)({id:"MHfyqG",defaultMessage:"{subject} can view jobs run results, can trigger and cancel run and also could modify the run."})},m={shell:o,folder:c,cluster:d,job_v2:u,mlflowExperiment:l},h={[r.A.NONE]:(0,n.zR)({id:"IGyd4Y",defaultMessage:"No Permissions"}),[r.A.VIEW]:(0,n.zR)({id:"4iuuAp",defaultMessage:"Can Read"}),[r.A.RUN]:(0,n.zR)({id:"RxFeOE",defaultMessage:"Can Run"}),[r.A.EDIT]:(0,n.zR)({id:"7HjBEy",defaultMessage:"Can Edit"}),[r.A.ATTACH]:(0,n.zR)({id:"fu8GQv",defaultMessage:"Can Attach To"}),[r.A.RESTART]:(0,n.zR)({id:"oZPrLK",defaultMessage:"Can Restart"}),[r.A.CREATE_CLUSTERS]:(0,n.zR)({id:"zaS1YU",defaultMessage:"Can Create Clusters"}),[r.A.CREATE_JOBS]:(0,n.zR)({id:"gR3BBW",defaultMessage:"Can Create Jobs"}),[r.A.JOBS_V2_VIEW]:(0,n.zR)({id:"lFxLji",defaultMessage:"Can View"}),[r.A.JOBS_V2_MANAGE_RUN]:(0,n.zR)({id:"RhPphA",defaultMessage:"Can Manage Run"}),[r.A.JOBS_V2_IS_OWNER]:(0,n.zR)({id:"DOVaJr",defaultMessage:"Is Owner"}),[r.A.USE_ROLE]:(0,n.zR)({id:"4i7QA+",defaultMessage:"Can Use IAM Role"}),[r.A.MANAGE]:(0,n.zR)({id:"ybFclN",defaultMessage:"Can Manage"})};function f({message:e,values:t}){let s=(0,n.tz)();return(0,i.Y)(i.FK,{children:s.formatMessage(e,t)})}function g(e,t,s){s=void 0===s?(0,i.Y)(n.sA,{id:"8LLUNw",defaultMessage:"Users"}):s;let o=(0,a.FI)("enableJobCanManagePermissionLevel")&&t===r.A.JOB_TYPE_V2?p:m[t];if(o&&o[e])return(0,i.Y)(f,{message:o[e],values:{subject:s}})}function A(){return(0,i.Y)(n.sA,{id:"PXlnIj",defaultMessage:"You do not have permissions to view this. Please contact your administrator."})}function I(e){if(h[e])return(0,i.Y)(f,{message:h[e],values:{}});return(0,i.Y)(i.FK,{children:e})}function v(e,t){if(h[t])return e.formatMessage(h[t]);return t}},934858:(e,t,s)=>{s.d(t,{$W:()=>p,Ow:()=>m,XP:()=>u,Xd:()=>f,Xh:()=>d,_d:()=>h,ep:()=>g});var i=s(610435);s(139259);var n=s(915862),r=s.n(n);s(692738);var a=s(26971),o=s(777517),l=s(465082),c=s(229386);function d(e){return e.reduce((e,t)=>{let s=(0,c.gX)(t)?{name:t.groupName,kind:"group"}:(0,c.A6)(t)?{name:t.servicePrincipalName,kind:"serviceprincipal",displayName:t.displayName}:{name:t.userName,kind:"user",displayName:t.displayName};return[...e,...t.allPermissions.map(e=>({subject:s,permission:e}))]},[])}function u(e,t){let s=[];return e.forEach(e=>{let i=(0,c.gX)(e)?{name:e.groupName,kind:"group"}:(0,c.A6)(e)?{name:e.servicePrincipalName,kind:"serviceprincipal",displayName:e.displayName}:{name:e.userName,kind:"user",displayName:e.displayName},n=[],r=[],a=new Map;if(t.forEach((e,t)=>{a.set(e.permissionLevel,t)}),e.allPermissions.forEach(e=>{e.inherited?r.push(e):n.push(e)}),n.length>0&&0===r.length)s.push({subject:i,permission:n[0]});else{let o=0,l=0,c=r.length>0&&0===n.length;e.allPermissions.forEach((e,t)=>{let s=a.get(e.permissionLevel);s>o&&(o=s,l=t)}),s.push({subject:i,permission:{permissionLevel:e.allPermissions[l].permissionLevel,inherited:c,inheritedFromObjects:[]},permissionLevels:t.slice(o)})}}),s}function p(e){let{permission:{permissionLevel:t},subject:{kind:s,name:i}}=e;switch(s){case"group":return{groupName:i,permissionLevel:t};case"user":return{userName:i,permissionLevel:t};case"serviceprincipal":return{servicePrincipalName:i,permissionLevel:t};default:throw Error(`Unknown subject kind ${s}`)}}function m(e,t){switch(e){case"CAN_ATTACH_TO":return t.formatMessage({id:"vjuZq/",defaultMessage:"Can Attach To"});case"CAN_CREATE_APP":return t.formatMessage({id:"TDBxFQ",defaultMessage:"Can Create App"});case"CAN_EDIT":return t.formatMessage({id:"Lg7PRA",defaultMessage:"Can Edit"});case"CAN_MANAGE":return t.formatMessage({id:"fFJrOa",defaultMessage:"Can Manage"});case"CAN_QUERY":return t.formatMessage({id:"fvsFnS",defaultMessage:"Can Query"});case"CAN_READ":return t.formatMessage({id:"zofAD/",defaultMessage:"Can Read"});case"CAN_RESTART":return t.formatMessage({id:"46XEms",defaultMessage:"Can Restart"});case"CAN_USE":return t.formatMessage({id:"2CuuGP",defaultMessage:"Can Use"});case"CAN_RUN":return t.formatMessage({id:"3gBDEy",defaultMessage:"Can Run"});case"IS_OWNER":return t.formatMessage({id:"DFsGfJ",defaultMessage:"Is Owner"});case"UNSPECIFIED":return"Unspecified";default:return r()(e.toLowerCase())}}function h(e){if("group"===e)return(0,i.Y)(a.A,{name:e});if("serviceprincipal"===e)return(0,i.Y)(o.A,{name:e});return(0,i.Y)(l.A,{name:e})}function f(e,t,s,i){if("group"===e){let e=t||s,n={accountUsers:i.formatMessage({id:"0pBn8k",defaultMessage:"All account users"}),allUsers:i.formatMessage({id:"VzinD6",defaultMessage:"All workspace users"})};if("users"===e||"all workspace users"===e)return[n.allUsers,""];if("account users"===e||"all account users"===e)return[n.accountUsers,""];return[e,""]}if(t&&s!==t)return[t,s??""];return[s??"",""]}function g(e,t){return e.name===t.name&&e.kind===t.kind}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/87600.e89d0d1a04.chunk.js.map