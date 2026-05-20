"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[31190],{30293:(e,t,a)=>{a.d(t,{D:()=>v,Y:()=>b});var n=a(610435),r=a(883678),i=a(692738),o=a(79128),l=a(876726),s=a(405706),c=a(339518),d=a(870426),u=a(342411),m=a(409989),p=a(114437),f=a(749565);function g(e,t,a,n,r,i,o){try{var l=e[i](o),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(n,r)}function h(){f.useGlobalChatStore.setState({threadId:""}),f.useGlobalChatStore.getState().createnewThread()}function y({componentId:e}){return(0,n.Y)(o.$n,{componentId:e,onClick:h,children:(0,n.Y)(u.sA,{id:"nRIBvE",defaultMessage:"New thread"})})}function v(){let e=(0,u.tz)(),t=(0,f.useGlobalChatStore)(e=>e.failedThreadId),[a,r]=(0,i.useState)(!1),[d,p]=(0,i.useState)(!1),[h,v]=(0,i.useState)(!1),b=(0,i.useCallback)(()=>{var e;return(e=function*(){if(!t)return;let e=(0,m.TC)("/ajax-api/2.0/tree/request-access");r(!0),v(!1);try{yield e.post("",{id:t}),p(!0)}catch{v(!0)}finally{r(!1)}},function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){g(i,n,r,o,l,"next",e)}function l(e){g(i,n,r,o,l,"throw",e)}o(void 0)})})()},[t]);if(d)return(0,n.Y)("div",{css:A,children:(0,n.Y)(l.S,{title:e.formatMessage(w.requestSentTitle),description:e.formatMessage(w.requestSentDescription),button:(0,n.Y)(y,{componentId:"global_assistant.request_access.new_thread_after_request"})})});return(0,n.Y)("div",{css:A,children:(0,n.Y)(l.S,{title:e.formatMessage(w.title),description:e.formatMessage(w.description),image:(0,n.Y)(s.A,{}),button:(0,n.FD)("div",{css:{display:"flex",flexDirection:"column",gap:8,alignItems:"center"},children:[(0,n.Y)(o.$n,{componentId:"global_assistant.request_access.request_permission",type:"primary",onClick:b,loading:a,children:(0,n.Y)(u.sA,{id:"RQwaKb",defaultMessage:"Request permission"})}),(0,n.Y)(y,{componentId:"global_assistant.request_access.new_thread"}),h&&(0,n.Y)(c.F,{componentId:"global_assistant.request_access.request_failed",type:"error",closable:!1,message:e.formatMessage(w.requestFailed)})]})})})}let b=(0,r.PA)(function(){return(0,n.Y)(d.Bx.Panel,{panelId:p.Zk.REQUEST_ACCESS,children:(0,n.Y)(d.Bx.PanelBody,{children:(0,n.Y)(v,{})})})}),A={height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},w=(0,u.YK)({title:{id:"dk8aio",defaultMessage:"You need permission to view this Genie Code conversation"},description:{id:"v8VXP0",defaultMessage:"You can reach out to your workspace administrator or owner of the conversation, or request access below."},requestSentTitle:{id:"NWTiNi",defaultMessage:"Access request sent"},requestSentDescription:{id:"7o7sD+",defaultMessage:"The owner has been notified. You will be able to view this conversation once they grant access."},requestFailed:{id:"uqzazd",defaultMessage:"Request failed. Please try again."}})},40211:(e,t,a)=>{a.d(t,{A:()=>u,h:()=>d});var n,r,i,o,l,s=a(692738);function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(null,arguments)}let d=(0,s.forwardRef)(({title:e,titleId:t,...a},d)=>s.createElement("svg",c({width:14,height:14,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:d,"aria-labelledby":t},a),e?s.createElement("title",{id:t},e):null,n||(n=s.createElement("path",{d:"M4.667 0H8.81l-4.3 12.742a.66.66 0 0 1-.626.45H.66a.66.66 0 0 1-.625-.871L4.04.449A.66.66 0 0 1 4.667 0Z",fill:"url(#a)"})),r||(r=s.createElement("path",{d:"M10.687 8.546h-6.57a.304.304 0 0 0-.207.527l4.222 3.94a.663.663 0 0 0 .452.178h3.72l-1.617-4.645Z",fill:"#0078D4"})),i||(i=s.createElement("path",{d:"M4.667 0a.655.655 0 0 0-.627.458l-4 11.852a.659.659 0 0 0 .622.881h3.307a.707.707 0 0 0 .542-.461l.798-2.351 2.85 2.658c.119.098.269.153.424.154h3.706l-1.626-4.645-4.738.002L8.825 0H4.667Z",fill:"url(#b)"})),o||(o=s.createElement("path",{d:"M9.959.449A.66.66 0 0 0 9.334 0H4.717a.66.66 0 0 1 .625.449L9.349 12.32a.66.66 0 0 1-.625.87h4.617a.66.66 0 0 0 .625-.87L9.959.449Z",fill:"url(#c)"})),l||(l=s.createElement("defs",null,s.createElement("linearGradient",{id:"a",x1:6.177,y1:.977,x2:1.875,y2:13.688,gradientUnits:"userSpaceOnUse"},s.createElement("stop",{stopColor:"#114A8B"}),s.createElement("stop",{offset:1,stopColor:"#0669BC"})),s.createElement("linearGradient",{id:"b",x1:7.521,y1:6.901,x2:6.526,y2:7.237,gradientUnits:"userSpaceOnUse"},s.createElement("stop",{stopOpacity:.3}),s.createElement("stop",{offset:.071,stopOpacity:.2}),s.createElement("stop",{offset:.321,stopOpacity:.1}),s.createElement("stop",{offset:.623,stopOpacity:.05}),s.createElement("stop",{offset:1,stopOpacity:0})),s.createElement("linearGradient",{id:"c",x1:6.974,y1:.607,x2:11.697,y2:13.189,gradientUnits:"userSpaceOnUse"},s.createElement("stop",{stopColor:"#3CCBF4"}),s.createElement("stop",{offset:1,stopColor:"#2892DF"})))))),u=a.p+"static/media/azure.789515373ae562cc8c8885ced55f8a06.svg"},48405:(e,t,a)=>{a.a(e,async(e,n)=>{try{a.d(t,{$n:()=>B,d:()=>G,wG:()=>z});var r=a(610435),i=a(692738),o=a(497895),l=a(382908),s=a(764236),c=a(1459),d=a(79128),u=a(395295),m=a(79570),p=a(126927),f=a(407374),g=a(687828),h=a(870426),y=a(342411),v=a(863708),b=a(22191),A=a(726977),w=a(87221),T=a(488655),C=a(844760),E=a(227937),I=a(513313),S=a(263379),_=a(173753),x=a(520842),M=a(114437),R=a(749565),Y=a(227858),k=a(322997),D=a(727315),O=e([D,x]);function N(e,t,a,n,r,i,o){try{var l=e[i](o),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(n,r)}function P(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){N(i,n,r,o,l,"next",e)}function l(e){N(i,n,r,o,l,"throw",e)}o(void 0)})}}function $({fullPath:e,folderId:t}){let{theme:a}=(0,o.wn)(),n=(0,y.tz)();if(!e&&!t)return null;let i=n.formatMessage({id:"YytTxj",defaultMessage:"View folder"}),f=n.formatMessage({id:"WzV4DO",defaultMessage:"Open folder"});return(0,r.FD)("div",{children:[(0,r.Y)(l.o.Title,{level:4,children:(0,r.Y)(y.sA,{id:"dQN6H4",defaultMessage:"Folder"})}),(0,r.Y)(l.o.Paragraph,{color:"secondary",children:(0,r.Y)(y.sA,{id:"PaHmxb",defaultMessage:"This space is backed by a workspace folder. Files here are available to every conversation in the space."})}),(0,r.Y)(s.h,{size:"xs"}),(0,r.FD)("div",{css:{display:"flex",alignItems:"center",gap:a.spacing.sm,padding:a.spacing.sm,border:`1px solid ${a.colors.border}`,borderRadius:a.borders.borderRadiusMd,background:a.colors.backgroundPrimary},children:[(0,r.Y)(c.A,{css:{color:a.colors.textSecondary,flexShrink:0}}),(0,r.Y)(l.o.Text,{title:e,css:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e??(0,r.Y)(y.sA,{id:"bkwvRm",defaultMessage:"(path unavailable)"})}),t&&(0,r.Y)(d.$n,{componentId:"global_assistant.space_detail.view_folder",size:"small",icon:(0,r.Y)(u.A,{}),onClick:()=>(0,D.kL)(t),children:i}),(0,r.Y)(m.m,{componentId:"global_assistant.space_detail.open_folder.tooltip",content:f,children:(0,r.Y)(d.$n,{componentId:"global_assistant.space_detail.open_folder",size:"small",icon:(0,r.Y)(p.A,{}),"aria-label":f,onClick:()=>(function(e){return P(function*({folderId:e,fullPath:t}){if((0,E.WS)()){let a=e;if(!a&&t)try{a=yield P(function*(){let e=new URLSearchParams({path:t}),a=yield(0,C.S)(`/ajax-api/2.0/workspace/get-status?${e}`,{method:"GET"});if(!a.ok)throw Error(`Failed to resolve path: ${a.statusText}`);let n=yield a.json();return String(n.object_id)})()}catch{}if(a)return void(0,T.oo)(`/editor/browse/folders/${a}`)}t&&(0,T.oo)(`/#workspace${t}`)}).apply(this,arguments)})({folderId:t,fullPath:e})})})]})]})}function B({spaceId:e,spaceName:t}){let{theme:a}=(0,o.wn)(),n=(0,y.tz)(),l=(0,i.useCallback)(t=>{if(!e)return;(0,_.gL)(e,{name:t})},[e]);return(0,r.Y)("div",{css:{padding:a.spacing.sm,display:"flex",alignItems:"center",gap:a.spacing.xs},children:(0,r.Y)("div",{css:{flex:1,minWidth:0},children:(0,r.Y)(Y.s,{value:t,onSave:l,disabled:!e,componentId:"global_assistant.space_detail.title.input",ariaLabelDisplay:e=>n.formatMessage({id:"+xcI2d",defaultMessage:"Click to rename space ({value})"},{value:e}),ariaLabelEdit:e=>n.formatMessage({id:"0QNiVq",defaultMessage:"Rename space ({value})"},{value:e})})})})}function L({entry:e}){let t=(0,w.ki)(),a=(0,i.useCallback)(a=>{a!==e.spaceColorIndex&&t({eventType:"component_click",eventEntity:{entityType:"component",entitySubType:"button",entityId:"global_assistant.space_detail.space-color"},eventPayload:{interactionSubject:!0,spaceColorIndex:a}}),(0,_.gL)(e.id,{spaceColorIndex:a})},[e.id,e.spaceColorIndex,t]);return(0,r.FD)("div",{children:[(0,r.Y)(l.o.Title,{level:4,children:(0,r.Y)(y.sA,{id:"UX9VMu",defaultMessage:"Color"})}),(0,r.Y)(l.o.Paragraph,{color:"secondary",children:(0,r.Y)(y.sA,{id:"3vadF9",defaultMessage:"Pick an accent color used by the space icon throughout the assistant."})}),(0,r.Y)(s.h,{size:"xs"}),(0,r.Y)(S.I,{value:e.spaceColorIndex,onChange:a,justify:"flex-start"})]})}function F({spaceId:e}){let t=(0,y.tz)(),[a,n]=(0,i.useState)(()=>(0,I.ub)(e)??""),o=i.useRef(null),c=(0,i.useCallback)(t=>{let a=t.target.value;n(a),o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{(0,I.K3)(e,a)},500)},[e]);return(0,r.FD)("div",{children:[(0,r.Y)(l.o.Title,{level:4,children:(0,r.Y)(y.sA,{id:"Scb9Iz",defaultMessage:"Custom instructions"})}),(0,r.Y)(l.o.Paragraph,{color:"secondary",children:(0,r.Y)(y.sA,{id:"bv+svT",defaultMessage:"Instructions are included in every conversation within this space. Use them to share context, preferences, or coding conventions with the assistant."})}),(0,r.Y)(s.h,{size:"xs"}),(0,r.Y)(f.p.TextArea,{componentId:"global_assistant.space_detail.instructions","aria-label":t.formatMessage({id:"KZXWCG",defaultMessage:"Custom instructions"}),value:a,onChange:c,rows:8,placeholder:t.formatMessage({id:"dXGtkA",defaultMessage:"e.g. Always use PySpark instead of pandas. Prefer Delta tables."})})]})}function U({title:e,description:t}){let{theme:a}=(0,o.wn)();return(0,r.FD)("div",{css:{opacity:.6},children:[(0,r.Y)(l.o.Title,{level:4,children:e}),(0,r.Y)(l.o.Paragraph,{color:"secondary",children:t}),(0,r.Y)("div",{css:{padding:a.spacing.md,borderRadius:a.borders.borderRadiusMd,border:`1px dashed ${a.colors.border}`,textAlign:"center"},children:(0,r.Y)(l.o.Text,{color:"secondary",size:"sm",children:(0,r.Y)(y.sA,{id:"v1qptP",defaultMessage:"Coming soon"})})})]})}function G(){let{theme:e}=(0,o.wn)(),t=(0,R.useGlobalChatStore)(e=>e.activeSpaceId),a=(0,_.Iz)(),n=(0,i.useMemo)(()=>t?a.find(e=>e.id===t):void 0,[t,a]);if(!t||!n)return(0,r.Y)("div",{css:{padding:e.spacing.md,textAlign:"center"},children:(0,r.Y)(l.o.Text,{color:"secondary",children:(0,r.Y)(y.sA,{id:"HUS/oe",defaultMessage:"No space selected"})})});let s=!(0,x.W)(n);return(0,r.FD)("div",{css:{padding:`0 ${e.spacing.sm}px`,display:"flex",flexDirection:"column",gap:e.spacing.md},children:[s?(0,r.FD)(r.FK,{children:[(0,r.Y)(L,{entry:n}),(0,r.Y)(g.Separator,{})]}):null,(0,r.Y)($,{fullPath:n.fullPath,folderId:n.folderId}),(0,r.Y)(g.Separator,{}),(0,r.Y)(F,{spaceId:t},t),(0,r.Y)(g.Separator,{}),(0,r.Y)(U,{title:(0,r.Y)(y.sA,{id:"nH3HjR",defaultMessage:"Auto memory"}),description:(0,r.Y)(y.sA,{id:"n8aepv",defaultMessage:"Learnings captured by the assistant during conversations in this space. Automatically referenced in future chats."})}),(0,r.Y)(g.Separator,{}),(0,r.Y)(U,{title:(0,r.Y)(y.sA,{id:"mdqH9l",defaultMessage:"Scheduled tasks"}),description:(0,r.Y)(y.sA,{id:"vyGztN",defaultMessage:"Schedule periodic agent tasks within this space, such as recurring data checks or report generation."})})]})}[D,x]=O.then?(await O)():O;let z=(0,v.hx)(b.Es.Assistant,A.s.AssistantSettingsPanel,function(){let e=(0,R.useGlobalChatStore)(e=>e.activeSpaceId),t=(0,_.Iz)(),a=(0,i.useMemo)(()=>e?t.find(t=>t.id===e):void 0,[e,t]);return(0,r.FD)(h.Bx.Panel,{panelId:M.Zk.SPACE_DETAIL,children:[(0,r.Y)(B,{spaceId:e||null,spaceName:a?.name??"Workspace"}),(0,r.Y)(h.Bx.PanelBody,{children:(0,r.Y)(G,{})})]})},k.N);n()}catch(e){n(e)}})},56356:(e,t,a)=>{a.d(t,{b:()=>h,c:()=>g});var n=a(610435),r=a(883678);a(692738);var i=a(876726),o=a(140078),l=a(79128),s=a(764236),c=a(870426),d=a(342411),u=a(714953),m=a(114437),p=a(749565);function f(){p.useGlobalChatStore.setState({threadId:""}),p.useGlobalChatStore.getState().createnewThread()}function g({onClose:e}){let t=(0,d.tz)(),a=(0,p.useGlobalChatStore)(e=>e.panelErrorMessage);if(a===m.vR)return(0,n.Y)("div",{css:{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.Y)(i.S,{title:t.formatMessage(y.threadNotFoundTitle),description:t.formatMessage(y.threadNotFoundDescription),image:(0,n.Y)(o.A,{}),button:(0,n.Y)(l.$n,{componentId:"global_assistant.error_panel.new_thread",onClick:f,children:(0,n.Y)(d.sA,{id:"K14a9X",defaultMessage:"New thread"})})})});return(0,n.Y)("div",{css:{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.Y)(i.S,{title:t.formatMessage(y.title),description:a||t.formatMessage(y.description),image:(0,n.Y)(o.A,{}),button:(0,n.FD)("div",{css:{display:"flex",gap:4},children:[(0,n.Y)(l.$n,{componentId:"global_assistant.error_panel.refresh",onClick:f,children:(0,n.Y)(d.sA,{id:"s2vDk7",defaultMessage:"Refresh"})}),(0,n.Y)(l.$n,{componentId:"global_assistant.error_panel.new_thread_generic",onClick:f,children:(0,n.Y)(d.sA,{id:"cWtHqK",defaultMessage:"New thread"})}),e&&(0,n.FD)(n.FK,{children:[(0,n.Y)(s.h,{size:"md"}),(0,n.Y)(l.$n,{componentId:"global_assistant.error_panel.close",onClick:e,children:(0,n.Y)(d.sA,{id:"WGA4JT",defaultMessage:"Close"})})]})]})})})}let h=(0,r.PA)(function(){let e=(0,u.ht)(e=>e.setVisibility);return(0,n.Y)(c.Bx.Panel,{panelId:m.Zk.ERROR,children:(0,n.Y)(c.Bx.PanelBody,{children:(0,n.Y)(g,{onClose:()=>e(!1)})})})}),y=(0,d.YK)({title:{id:"dID+SV",defaultMessage:"Error"},description:{id:"BCf2+O",defaultMessage:"An unexpected error has occurred. Please wait a bit and refresh the page or contact support."},threadNotFoundTitle:{id:"+8WdPc",defaultMessage:"Thread not found"},threadNotFoundDescription:{id:"uYDuTs",defaultMessage:"This thread was not found. Please ensure it exists and you have permission to access it."}})},77898:(e,t,a)=>{a.d(t,{CD:()=>m,W7:()=>u,oO:()=>d});var n=a(692738),r=a(722381),i=a(441535);let o={v:1,expandedByRoot:{},selectedByRoot:{},recentRoots:[]},l=[],s=e=>(0,r.eo)({key:`unified-uc-tree:${e}:bundle`,version:1});function c(e,t){if(e===t||e.startsWith(`${t}.`))return!0;let a=e.indexOf(":/");if(-1!==a){let n=e.slice(a+2);return n===t||n.startsWith(`${t}.`)||n.startsWith(`${t}/`)}return!1}function d(e){let t;if("u"<typeof window||!(0,i.W)("databricks.fe.schemabrowser.newTree",!1))return;let a=s("all-files");try{let e=window.sessionStorage.getItem(a);if(!e)return;let n=JSON.parse(e);if(!n||1!==n.v)return;t=n}catch{return}let n=t=>(t??[]).filter(t=>!c(t,e)),r={...t,expandedByRoot:Object.fromEntries(Object.entries(t.expandedByRoot??{}).filter(([t])=>!c(t,e)).map(([e,t])=>[e,n(t)])),selectedByRoot:Object.fromEntries(Object.entries(t.selectedByRoot??{}).filter(([t])=>!c(t,e)).map(([e,t])=>[e,n(t)])),recentRoots:(t.recentRoots??[]).filter(t=>!c(t,e))};try{window.sessionStorage.setItem(a,JSON.stringify(r))}catch{}}function u(e,t){let a;if("u"<typeof window||!(0,i.W)("databricks.fe.schemabrowser.newTree",!1))return;let n=s("all-files");try{let e=window.sessionStorage.getItem(n);if(!e)return;let t=JSON.parse(e);if(!t||1!==t.v)return;a=t}catch{return}let r=a=>{if(a===e)return t;if(a.startsWith(`${e}.`))return t+a.slice(e.length);let n=a.indexOf(":/");if(-1!==n){let r=a.slice(0,n+2),i=a.slice(n+2);if(i===e)return r+t;if(i.startsWith(`${e}.`)||i.startsWith(`${e}/`))return r+t+i.slice(e.length)}return a},o=e=>Object.entries(e??{}).reduce((e,[t,a])=>{let n=r(t),i=(a??[]).map(r);return e[n]=Array.from(new Set([...e[n]??[],...i])),e},{}),l={...a,expandedByRoot:o(a.expandedByRoot),selectedByRoot:o(a.selectedByRoot),recentRoots:Array.from(new Set((a.recentRoots??[]).map(r)))};try{window.sessionStorage.setItem(n,JSON.stringify(l))}catch{}}function m(e,t="all-files",{maxRoots:a=5}={}){let[r,i]=function(e,t){let[a,r]=(0,n.useState)(()=>{if("u"<typeof window)return t;try{let a=window.sessionStorage.getItem(e);if(!a)return t;let n=JSON.parse(a);if(n&&1===n.v){let e=n.expandedByRoot??{};if(Object.keys(e).some(t=>(e[t]?.length??0)>20)){let t={};for(let a of Object.keys(e))t[a]=e[a]?.length>20?[]:e[a];return{...n,expandedByRoot:t}}return n}}catch{}return t});return(0,n.useEffect)(()=>{if("u"<typeof window)return;try{window.sessionStorage.setItem(e,JSON.stringify(a))}catch{}},[e,a]),[a,(0,n.useCallback)(a=>{if("function"!=typeof a)return void r(a);r(a(function(e,t){if("u"<typeof window)return t;try{let a=window.sessionStorage.getItem(e);if(!a)return t;let n=JSON.parse(a);if(n?.v===1)return n}catch{}return t}(e,t)))},[e,t])]}(s(t),o),c=e||"-",d=(0,n.useCallback)(e=>{if(e.expandedByRoot[c])return;for(let t of e.recentRoots||[]){let a=e.expandedByRoot[t];if(a?.includes(c))return a}},[c]),u=(0,n.useMemo)(()=>d(r),[d,r]),p=r.expandedByRoot[c]??u??l,f=r.selectedByRoot[c]??l,g=(0,n.useCallback)((e,t)=>{i(n=>{var r;let i,o=c in n[e],l=n[e][c]??[];if(!o&&"expandedByRoot"===e){let e=d(n);e&&(l=e)}let s="function"==typeof t?t(l):t;if((i=l).length===s.length&&i.every((e,t)=>e===s[t]))return n;let u=(r=n.recentRoots,[c,...(r??[]).filter(e=>e!==c)].slice(0,a)),m={},p={};for(let t of u)m[t]="expandedByRoot"===e&&t===c?s:n.expandedByRoot[t]??[],p[t]="selectedByRoot"===e&&t===c?s:n.selectedByRoot[t]??[];return{v:1,recentRoots:u,expandedByRoot:m,selectedByRoot:p}})},[c,i,a,d]),h=(0,n.useCallback)(e=>g("expandedByRoot",e),[g]);return{expandedItems:p,setExpandedItems:h,selectedItems:f,setSelectedItems:(0,n.useCallback)(e=>g("selectedByRoot",e),[g]),clearAll:(0,n.useCallback)(()=>{i(o)},[i])}}},88144:(e,t,a)=>{a.d(t,{S:()=>o});var n=a(141078),r=a(715370);let i=(0,n.J1)`
  mutation CreateFolderMutation($input: CreateFolderInput!) @component(name: "Notebook.Notebooks") {
    createFolder(input: $input) @rest(type: "CreateFolderResponse", path: "/workspace/mkdirs", method: "POST") {
      errors @type(name: "ApiError") {
        code
        message
        helpUrl
        traceId
      }
    }
  }
`,o=e=>r.R.useMutation(i,e)},187441:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 17",...e,children:(0,n.Y)("path",{fill:"currentColor",d:"M3.75 2A2.75 2.75 0 0 0 1 4.75v6.5A2.75 2.75 0 0 0 3.75 14H5.5v-1.5H3.75c-.69 0-1.25-.56-1.25-1.25v-6.5c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v6.5c0 .69-.56 1.25-1.25 1.25H9.81l.97-.97-1.06-1.06-2.78 2.78 2.78 2.78 1.06-1.06-.97-.97h2.44A2.75 2.75 0 0 0 15 11.25v-6.5A2.75 2.75 0 0 0 12.25 2z"})})}let l=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));l.displayName="LoopIcon";let s=l},191736:(e,t,a)=>{a.d(t,{$:()=>o});var n=a(610435),r=a(692738),i=a(79570);function o({children:e,tooltipTitle:t,truncateFromStart:a}){let l=(0,r.useRef)(null),[s,c]=(0,r.useState)(!1);(0,r.useEffect)(()=>{if(!l.current)return;let{offsetWidth:e,scrollWidth:t}=l.current;c(t>e)},[e,l]);let d=(0,n.Y)("span",{ref:l,css:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflowX:"hidden",...s&&a&&{direction:"rtl"},"&:before, &:after":{content:'"‎"'}},children:e});return s?(0,n.Y)(i.m,{content:t??e,componentId:"ellipsis-text-tooltip",children:d}):d}},206717:(e,t,a)=>{a.d(t,{G$:()=>l,x$:()=>o});var n=a(141078),r=a(491438);function i(e,t,a,n,r,i,o){try{var l=e[i](o),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(n,r)}let o=(0,n.J1)`
  query GetUcTablesQuery($schemaFullName: String!, $maxResults: Int = 100, $pageToken: String)
  @component(name: "DBSQLX.FileBrowser") {
    unityCatalogSchemaNameReference(fullName: $schemaFullName) {
      schema {
        fullName
        tables(maxResults: $maxResults, pageToken: $pageToken) {
          nodes {
            managedCatalogTableInfo {
              tableId
              tableType
              name
              owner
              createdAt
              securableKind
              securableType
              browseOnly
            }
          }
          nextPageToken
        }
      }
    }
  }
`;function l(e,t,a){var n;return(n=function*(e,t,{maxResults:a=100,pageToken:n,metastoreScope:i}={},l){let{data:s}=yield e.query({query:o,variables:{schemaFullName:t,maxResults:a,pageToken:n},context:(0,r.Xe)(i),fetchPolicy:l});return s.unityCatalogSchemaNameReference?.schema?.tables??null},function(){var e=this,t=arguments;return new Promise(function(a,r){var o=n.apply(e,t);function l(e){i(o,a,r,l,s,"next",e)}function s(e){i(o,a,r,l,s,"throw",e)}l(void 0)})}).apply(this,arguments)}},214369:(e,t,a)=>{a.d(t,{K:()=>r,h:()=>n});let n="=";class r{tagKey;tagValue;value;tagKeySearchResult;constructor(e,t,a=!1){this.tagKey=e,this.tagValue=t,this.value=`${this.tagKey}${this.tagValue?`${n}${this.tagValue}`:""}`,this.tagKeySearchResult=a}canHaveChildren(){return!this.tagValue}getValue(){return this.value}getDisplayValue(){return this.tagValue?`${this.tagKey}:${this.tagValue}`:this.tagKey}isChild(){return!!this.tagValue}getParent(){return new r(this.tagKey,void 0)}isChildOf(e){return e instanceof r&&e.tagKey===this.tagKey&&!!this.tagValue}isLoading(){return!1}getTagName(){return this.tagKey}getTagValue(){return this.tagValue}isTagKeySearchResult(){return this.tagKeySearchResult}}},215911:(e,t,a)=>{a.d(t,{BC:()=>o,Bp:()=>l,gU:()=>i});var n=a(441535),r=a(686560);function i(){let e=(0,n.W)("uc_secrets",!1);return(0,n.W)("databricks.fe.discovery.enableUCSecrets",!1)&&e}function o(){let e=(0,n.W)("uc_secrets",!1);return(0,n.W)("databricks.fe.discovery.enableUCSecrets",!1)&&e}function l(){let e=(0,r.d)("cloud","AWS");return o()&&(0,n.W)("databricks.fe.discovery.enableUCSecretsExternalAws",!1)&&"AWS"===e}},245514:(e,t,a)=>{a.d(t,{m:()=>w});var n,r=a(610435),i=a(692738),o=a(342411),l=a(993075),s=a(641760),c=a(660618),d=a(524013),u=a(707076),m=a(217930),p=a(540890),f=a(305939),g=a(278983),h=a(227029),y=a(360900),v=a(842082),b=((n=b||{}).UC="UC",n);function A({isFavorite:e}){return e?(0,r.Y)(o.sA,{id:"G0IxML",defaultMessage:"Remove from favorites"}):(0,r.Y)(o.sA,{id:"3GvfOq",defaultMessage:"Add to favorites"})}function w(){let e=function(){let e=(0,i.useMemo)(()=>(0,h.hI)(),[]),t=s.jN,[a]=(0,f.V)();return(0,i.useCallback)((n,r,i)=>{if(e&&i&&t({catalog:n.catalog})){let e={id:i,type:r};(0,g.y)("clientsideEvent",{eventType:"unifiedFavorites",eventName:`removeFavoriteAsset-${e.type}`,source:m.ek.SchemaBrowser}),a({variables:{input:{asset:e}},update:m.NV})}},[a,t,e])}(),t=function(){let e=(0,i.useMemo)(()=>(0,h.hI)(),[]),t=s.jN,[a]=(0,p.s)();return(0,i.useCallback)((n,r,i)=>{if(e&&i&&t({catalog:n.catalog})){let e={id:i,type:r};(0,g.y)("clientsideEvent",{eventType:"unifiedFavorites",eventName:`addFavoriteAsset-${e.type}`,source:m.ek.SchemaBrowser}),a({variables:{input:{asset:e}},update:m.NV})}},[a,t,e])}(),{data:a}=(0,y.z)(),n=(0,d.df)(),o=(0,i.useRef)(()=>!1);o.current=e=>!!a?.find(t=>(0,v.N1)(t,e));let b=(0,i.useRef)(()=>void 0);return b.current=e=>(0,s.jN)({catalog:e.catalog})?a?.find(t=>(0,v.N1)(t,e))?.securable_id:void 0,(0,i.useMemo)(()=>(0,l.ct)({actionId:l.fN.TOGGLE_FAVORITE_ASSET,label:({dataEntity:e})=>(0,r.Y)(A,{isFavorite:o.current(e)}),shouldDisplayAction:({dataEntity:e,securable_id:t})=>{if(e.catalog===c.lx)return!1;return void 0!==e.securable_id||void 0!==t},onSelected:({dataEntity:a,securable_id:r})=>{n("clientsideEvent",{eventName:o.current(a)?"schemaBrowserUnfavoriteDataEntity":"schemaBrowserFavoriteDataEntity",schemaBrowserObjectType:a.objectType,schemaBrowserFavoriteCatalogType:"UC"});let i=(0,u.Om)(a.objectType);o.current(a)?e(a,i,r||(a?.securable_id?b.current(a):"")):t(a,i,r||a?.securable_id)}}),[t,e,n])}},253842:(e,t,a)=>{a.d(t,{c:()=>m});var n=a(610435),r=a(919489),i=a.n(r),o=a(692738),l=a(79570),s=a(465946),c=a(342411);let d=({tagStyle:e})=>{let t=(0,c.tz)();return(0,n.Y)(l.m,{componentId:"web-shared.scheduling.dst-tag.tooltip",content:(0,n.Y)("span",{children:t.formatMessage({id:"EqQzs1",defaultMessage:"If you select a time zone that observes daylight saving time, an hourly schedule will be skipped or might appear to be delayed by an hour or two when daylight saving time begins or ends. To run at every hour (absolute time), choose UTC."})}),children:(0,n.Y)(s.v,{componentId:"codegen_web-shared_src_scheduling_dsttag.tsx_24","data-testid":"DSTTag",css:e,children:"DST"})})},u={wrapper:{display:"flex",width:"100%",gap:2},text:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",flex:1},tag:{marginRight:0}},m=({timezoneValue:e,timezoneLabel:t,disabledTag:a,customStyles:r})=>{let l=(0,o.useMemo)(()=>{try{if(!i().tz.zone(e))return!1;let t=i()().tz(e).year();return i()([t,6,21]).tz(e).isDST()||i()([t,12,21]).tz(e).isDST()}catch(e){return!1}},[e]),s={...u,...r};return(0,n.FD)("div",{css:s.wrapper,children:[(0,n.Y)("div",{css:s.text,title:t,children:t}),!a&&l&&(0,n.Y)(d,{tagStyle:s.tag})]})}},271512:(e,t,a)=>{a.a(e,async(e,n)=>{try{a.d(t,{X:()=>E,a:()=>C});var r=a(610435),i=a(883678),o=a(692738),l=a(497895),s=a(870426),c=a(382908),d=a(342411),u=a(441535),m=a(863708),p=a(22191),f=a(726977),g=a(148537),h=a(114437),y=a(749565),v=a(301091),b=a(322997),A=a(736417),w=e([g]);g=(w.then?(await w)():w)[0];let T=()=>{let{theme:e}=(0,l.wn)();return(0,r.FD)(s.Bx.Panel,{panelId:h.Zk.THREADS_LIST,children:[(0,r.Y)(C,{}),(0,r.Y)(s.Bx.PanelBody,{children:(0,r.Y)("div",{css:{height:"100%",paddingLeft:`${e.spacing.sm}px`,paddingRight:`${e.spacing.sm}px`},children:(0,r.Y)(g.ThreadListContent,{componentIdPrefix:"global_assistant.thread_list"})})})]})},C=(0,i.PA)(()=>{let e=(0,d.tz)(),t=(0,y.useGlobalChatStore)(e=>e.isLoadingPanel),a=(0,y.useGlobalChatStore)(e=>e.dispatch),n=(0,o.useMemo)(()=>(0,v.XR)({disabled:t,intl:e,dispatch:a}),[a,e,t]),i=(0,o.useMemo)(()=>(0,v.Se)(e),[e]),l=(0,o.useMemo)(()=>[(0,v.Gv)(e)],[e]),s=(0,o.useMemo)(()=>[n,i],[n,i]),u=(0,r.Y)(c.o.Title,{level:4,css:{justifySelf:"center",margin:"0px !important"},children:e.formatMessage({id:"U7oH0v",defaultMessage:"History"})});return(0,r.Y)(A.y,{title:u,leftButtons:l,rightButtons:s})}),E=(0,m.hx)(p.Es.Assistant,f.s.AssistantThreadListPanel,()=>((0,u.W)("databricks.fe.assistant.enableModernizedChatPanel",!1),(0,r.Y)(T,{})),b.N);n()}catch(e){n(e)}})},331472:(e,t,a)=>{a.d(t,{I:()=>d});var n=a(610435),r=a(692738),i=a(74438),o=a(342411),l=a(253842),s=a(655997);function c({category:e}){switch(e){case s.u$.RECOMMENDED:return(0,n.Y)(o.sA,{id:"G06KV2",defaultMessage:"Recommended"});case s.u$.STANDARD:return(0,n.Y)(o.sA,{id:"JIS89t",defaultMessage:"Standard"});case s.u$.SYSTEM:return(0,n.Y)(o.sA,{id:"2uxAIE",defaultMessage:"System"});case s.u$.OTHER:return(0,n.Y)(o.sA,{id:"wPUeDn",defaultMessage:"Other"});default:return(0,n.Y)(n.FK,{children:e})}}function d({onChange:e,disabled:t,value:a,displayDSTScheduleTag:u=!0,useNewTimezoneExperience:m=!1,...p}){let f=(0,o.tz)(),[g,h]=(0,r.useState)(""),y=(0,r.useMemo)(()=>{if(m)return(0,s.ST)();return null},[m]),v=(0,r.useMemo)(()=>{if(y){if(!g)return[...y];return y.map(e=>({...e,options:e.options.filter(e=>((e,t)=>{let a=t.toLowerCase();if(/^[0-9+-]|^utc/i.test(t))return e.label.toLowerCase().includes(a);return e.value.toLowerCase().includes(a)})(e,g))})).filter(e=>e.options.length>0)}return null},[y,g]),b=(0,r.useMemo)(()=>{if(!m){let e=(0,s.ZR)();if(a&&!e.find(e=>e.value===a))return[...e,{value:a,label:a,data:25}];return e}return[]},[m,a]),A=(0,r.useMemo)(()=>{if(!m){if(!g)return b;let e=g.toLowerCase();return b.filter(t=>t.label.toLowerCase().includes(e))}return[]},[b,g,m]),w=!m&&g.length>0,T=(e,a)=>(0,n.Y)(i._v.Option,{value:e.value,label:u?(0,n.Y)(l.c,{timezoneValue:e.value,timezoneLabel:e.label,disabledTag:t}):void 0,children:e.label},a?`${a}-${e.value}`:e.value);return(0,n.Y)(i._v,{"data-testid":"TimezoneSelector",onChange:e,value:a,disabled:t,onSearch:e=>h(e),"aria-label":f.formatMessage({id:"hTZBXB",defaultMessage:"Schedule timezone"}),searchValue:g,virtual:!1,dangerouslySetAntdProps:{showSearch:!0},optionLabelProp:u?"label":void 0,...p,children:m?(()=>{if(!v)return null;return v.map(e=>(0,n.Y)(i._v.OptGroup,{label:(0,n.Y)(c,{category:e.category}),children:e.options.map(t=>T(t,e.category===s.u$.RECOMMENDED?"recommended":void 0))},e.category))})():[...A.map(e=>T(e)),...w?[(0,n.Y)(i._v.Option,{value:g,children:f.formatMessage({id:"yGf5U6",defaultMessage:'Use Java TimeZone ID "{tzId}"'},{tzId:g})},"new")]:[]]})}},344918:(e,t,a)=>{a.d(t,{$:()=>o,X:()=>i});var n=a(483588),r=a(617293);function i(e){return e.toSorted((e,t)=>{let a=e.catalogType===n._E1.USER_HOME_CATALOG;if(a!==(t.catalogType===n._E1.USER_HOME_CATALOG))return a?-1:1;let i=!!e.isDefault;if(!!t.isDefault!==i)return i?-1:1;let o=e.name===r.oD;if(o!==(t.name===r.oD))return o?-1:1;let l=!!e.browse_only;if(!!t.browse_only!==l)return l?1:-1;return e.name.localeCompare(t.name)})}function o(e){return e.toSorted((e,t)=>{let a=e.name===r.Ef;if(a!==(t.name===r.Ef))return a?-1:1;return e.name.localeCompare(t.name)})}},356964:(e,t,a)=>{a.d(t,{M:()=>r,x:()=>i});var n=a(141078);let r=(0,n.J1)`
  mutation CreateDomain($input: domains_CreateDomainRequestInput!)
  @component(name: "LakehouseCollaboration.DiscoveryAndRecommendation")
  @throwOnFieldError {
    domains_create(input: $input) {
      domainId
      tagKey
      tagMetadata {
        description
      }
      icon {
        name
        color
      }
      subtitle
      description
    }
  }
`;function i(e){return(0,n.n_)(r,{errorPolicy:"all",...e})}},408174:(e,t,a)=>{a.d(t,{Hc:()=>m,kT:()=>p});var n=a(692738),r=a(886100),i=a(989266),o=a(22191),l=a(141078),s=a(930908);function c(e,t,a,n,r,i,o){try{var l=e[i](o),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(n,r)}function d(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){c(i,n,r,o,l,"next",e)}function l(e){c(i,n,r,o,l,"throw",e)}o(void 0)})}}let u=(0,l.J1)`
  query ListBudgetPoliciesQuery($input: BudgetpolicyListBudgetPoliciesRequestInput!)
  @component(name: "MoneyInfra.CostManagement") {
    serverlesspolicyListBudgetPolicies(input: $input) {
      policies {
        policyId
        policyName
        creatorUserId
        customTags {
          key
          value
        }
        rateLimitConfig
        isEditable
          @includeSafex(
            name: "databricks.fe.clustercontrols.enableBudgetPolicyAdminUiPublicPreview"
            defaultValue: false
          )
        isDeletable
          @includeSafex(
            name: "databricks.fe.clustercontrols.enableBudgetPolicyAdminUiPublicPreview"
            defaultValue: false
          )
      }
      apiError {
        code
        message
        helpUrl
        traceId
      }
      previousPageToken
      nextPageToken
    }
  }
`,m=e=>(0,l.IT)(u,e);function p(){let{doListBudgetPolicies:e}=(()=>{let[e,{data:t,loading:a,error:r}]=(0,l._l)(u),i=t?.serverlesspolicyListBudgetPolicies?.apiError?.message??r?.message??null,o=t?.serverlesspolicyListBudgetPolicies?.nextPageToken??null,s=t?.serverlesspolicyListBudgetPolicies?.previousPageToken??null,c=t?.serverlesspolicyListBudgetPolicies?.policies??[];return{doListBudgetPolicies:(0,n.useCallback)(t=>e(t),[e]),listBudgetPoliciesQueryState:{loading:a,apiError:t?.serverlesspolicyListBudgetPolicies?.apiError??null,errorMessage:i,data:t?{policies:c,nextPageToken:o,previousPageToken:s}:null}}})();return(0,n.useCallback)(()=>d(function*(){return r.iT.sev2IfThrows(o.Es.MoneyInfraCostManagement,"Failed to get first alphebetical budget policy id",()=>d(function*(){let t=yield e({variables:{input:{...(0,s.Ku)(),sortSpec:{field:i.t7.POLICY_NAME}}}});return t.data?.serverlesspolicyListBudgetPolicies?.policies?.[0]?.policyId})()).value})(),[e])}},428296:(e,t,a)=>{a.d(t,{DI:()=>o,WO:()=>r,mk:()=>s,nW:()=>i,pJ:()=>l});var n=a(141078);function r({catalog:e,schema:t,table:a,skip:i=!1,onCompleted:l}){let s=[e,t,a].join(".");return(0,n.IT)(o,{variables:{tableFullName:s},skip:i,onCompleted:l})}let i=(0,n.J1)`
  fragment TableColumnDetails on ManagedcatalogColumnInfo {
    name
    comment
    typeText
    typeName
    typeJson
    partitionIndex
    typePrecision
    typeScale
    typeIntervalType
    position
    nullable
    mask {
      functionName
      usingColumnNames
    }
    metadata {
      displayName
      synonyms
      format {
        numberPlain {
          decimalPlaces {
            type
            places
          }
          hideGroupSeparator
          abbreviation
        }
        numberCurrency {
          decimalPlaces {
            type
            places
          }
          hideGroupSeparator
          abbreviation
          currencyCode
        }
        numberPercent {
          decimalPlaces {
            type
            places
          }
          hideGroupSeparator
        }
        numberBytes {
          decimalPlaces {
            type
            places
          }
          hideGroupSeparator
        }
        date {
          dateFormat
          leadingZeros
        }
        dateTime {
          dateFormat
          timeFormat
          leadingZeros
        }
      }
    }
  }
`,o=(0,n.J1)`
  ${i}
  query GetUcTableInfoQuery($tableFullName: String!) @component(name: "DBSQLX.CatalogExplorer") {
    unityCatalogTableNameReference(fullName: $tableFullName) {
      table {
        managedCatalogTableInfo {
          name
          catalogName
          schemaName
          comment
          owner
          tableType
          tableId
          pipelineId
          securableKind
          securableType
          dataSourceFormat
          columnInfos {
            columns {
              ...TableColumnDetails
            }
          }
          tableConstraints {
            primaryKeyConstraint {
              childColumns
              timeseriesColumns
              name
            }
            foreignKeyConstraint {
              childColumns
              name
              parentColumns
              parentTable
            }
            namedTableConstraint {
              name
            }
          }
          browseOnly
          viewDefinition
          sqlPath
          storageCredentialName
          storageLocation
          deltaSharingValidThroughTimestamp
          createdAt
          createdBy
          updatedAt
          updatedBy
          effectiveAutoMaintenanceFlag {
            value
            inheritedFromType
            inheritedFromName
          }
          effectiveAutoMaintenanceFlag {
            value
            inheritedFromType
            inheritedFromName
          }
          propertiesPairs {
            _json
          }
          deltaRuntimePropertiesKvpairs {
            _json
          }
          deltaUniformIceberg {
            metadataLocation
            convertedDeltaVersion
            convertedDeltaTimestamp
            baseConvertedDeltaVersion
          }
          provisioningInfo {
            state
            details
          }
          rowFilter {
            functionName
            inputColumnNames
          }
        }
      }
    }
  }
`;function l({catalog:e,schema:t,table:a,skip:r=!1,onCompleted:i}){let o=[e,t,a].join(".");return(0,n.IT)(s,{variables:{tableFullName:o},skip:r,onCompleted:i})}let s=(0,n.J1)`
  ${i}
  query GetUcTableJoinTagsQuery($tableFullName: String!) @component(name: "DBSQLX.CatalogExplorer") {
    unityCatalogTableNameReference(fullName: $tableFullName) {
      table {
        managedCatalogTableInfo {
          name
          catalogName
          schemaName
          comment
          owner
          tableType
          tableId
          pipelineId
          securableKind
          securableType
          dataSourceFormat
          columnInfos {
            firstPage: paginatedColumns(pageSize: 20, offset: 0) {
              ...TableColumnDetails
              tags {
                tagKey
                tagValue
                updateTime
                updatedBy
                sourceType
              }
            }
            followingPages: paginatedColumns(pageSize: 40000, offset: 20) {
              ...TableColumnDetails
            }
          }
          tableConstraints {
            primaryKeyConstraint {
              childColumns
              timeseriesColumns
              name
            }
            foreignKeyConstraint {
              childColumns
              name
              parentColumns
              parentTable
            }
            namedTableConstraint {
              name
            }
          }
          browseOnly
          viewDefinition
          sqlPath
          storageCredentialName
          storageLocation
          deltaSharingValidThroughTimestamp
          createdAt
          createdBy
          updatedAt
          updatedBy
          effectiveAutoMaintenanceFlag {
            value
            inheritedFromType
            inheritedFromName
          }
          effectiveAutoMaintenanceFlag {
            value
            inheritedFromType
            inheritedFromName
          }
          propertiesPairs {
            _json
          }
          deltaRuntimePropertiesKvpairs {
            _json
          }
          deltaUniformIceberg {
            metadataLocation
            convertedDeltaVersion
            convertedDeltaTimestamp
            baseConvertedDeltaVersion
          }
          provisioningInfo {
            state
            details
          }
          rowFilter {
            functionName
            inputColumnNames
          }
        }
      }
    }
  }
`},434433:(e,t,a)=>{a.d(t,{H:()=>n});let n={"Pacific/Midway":"Midway Island, Samoa","Pacific/Honolulu":"Hawaii","America/Juneau":"Alaska","America/Los_Angeles":"Pacific Time (US and Canada); Tijuana","America/Boise":"Mountain Time (US and Canada)","America/Chihuahua":"Chihuahua, La Paz, Mazatlan","America/Phoenix":"Arizona","America/Chicago":"Central Time (US and Canada)","America/Regina":"Saskatchewan","America/Mexico_City":"Guadalajara, Mexico City, Monterrey","America/Belize":"Central America","America/New_York":"Eastern Time (US and Canada)","America/Indianapolis":"Indiana (East)","America/Bogota":"Bogota, Lima, Quito","America/Glace_Bay":"Atlantic Time (Canada)","America/Caracas":"Caracas, La Paz","America/Santiago":"Santiago","America/St_Johns":"Newfoundland and Labrador","America/Sao_Paulo":"Brasilia","America/Buenos_Aires":"Buenos Aires, Georgetown","America/Godthab":"Greenland","Etc/GMT+2":"Mid-Atlantic","Atlantic/Azores":"Azores","Atlantic/Cape_Verde":"Cape Verde Islands",UTC:"UTC","Europe/London":"Dublin, Edinburgh, Lisbon, London","Africa/Casablanca":"Casablanca, Monrovia","Atlantic/Canary":"Canary Islands","Europe/Belgrade":"Belgrade, Bratislava, Budapest, Ljubljana, Prague","Europe/Sarajevo":"Sarajevo, Skopje, Warsaw, Zagreb","Europe/Brussels":"Brussels, Copenhagen, Madrid, Paris","Europe/Amsterdam":"Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna","Africa/Algiers":"West Central Africa","Europe/Bucharest":"Bucharest","Africa/Cairo":"Cairo","Europe/Kiev":"Helsinki, Kiev, Riga, Sofia, Tallinn, Vilnius","Europe/Athens":"Athens, Minsk","Europe/Istanbul":"Istanbul","Asia/Jerusalem":"Jerusalem","Africa/Harare":"Harare, Pretoria","Europe/Moscow":"Moscow, St. Petersburg, Volgograd","Asia/Kuwait":"Kuwait, Riyadh","Africa/Nairobi":"Nairobi","Asia/Baghdad":"Baghdad","Asia/Tehran":"Tehran","Asia/Dubai":"Abu Dhabi, Muscat","Asia/Baku":"Baku, Tbilisi, Yerevan","Asia/Kabul":"Kabul","Asia/Yekaterinburg":"Yekaterinburg","Asia/Karachi":"Islamabad, Karachi, Tashkent","Asia/Kolkata":"Chennai, Kolkata, Mumbai, New Delhi","Asia/Kathmandu":"Kathmandu","Asia/Dhaka":"Astana, Dhaka","Asia/Colombo":"Sri Jayawardenepura","Asia/Almaty":"Almaty, Novosibirsk","Asia/Yangon":"Yangon Rangoon","Asia/Bangkok":"Bangkok, Hanoi, Jakarta","Asia/Krasnoyarsk":"Krasnoyarsk","Asia/Shanghai":"Beijing, Chongqing, Hong Kong SAR, Urumqi","Asia/Kuala_Lumpur":"Kuala Lumpur, Singapore","Asia/Taipei":"Taipei","Australia/Perth":"Perth","Asia/Irkutsk":"Irkutsk, Ulaanbaatar","Asia/Seoul":"Seoul","Asia/Tokyo":"Osaka, Sapporo, Tokyo","Asia/Yakutsk":"Yakutsk","Australia/Darwin":"Darwin","Australia/Adelaide":"Adelaide","Australia/Sydney":"Canberra, Melbourne, Sydney","Australia/Brisbane":"Brisbane","Australia/Hobart":"Hobart","Asia/Vladivostok":"Vladivostok","Pacific/Guam":"Guam, Port Moresby","Asia/Magadan":"Magadan, Solomon Islands, New Caledonia","Pacific/Fiji":"Fiji Islands, Kamchatka, Marshall Islands","Pacific/Auckland":"Auckland, Wellington","Pacific/Tongatapu":"Nuku'alofa"}},465082:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a3.25 3.25 0 1 0 0 6.5A3.25 3.25 0 0 0 8 1M6.25 4.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M8 9a8.74 8.74 0 0 0-6.836 3.287.75.75 0 0 0-.164.469v1.494c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75v-1.494a.75.75 0 0 0-.164-.469A8.74 8.74 0 0 0 8 9m-5.5 4.5v-.474A7.23 7.23 0 0 1 8 10.5c2.2 0 4.17.978 5.5 2.526v.474z",clipRule:"evenodd"})})}let l=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));l.displayName="UserIcon";let s=l},488332:(e,t,a)=>{a.d(t,{T:()=>c});var n=a(610435),r=a(692738),i=a(957211);let o=(e,t,a=0,n=null)=>e.reduce((e,r)=>(e.push({...r,depth:a,parentId:n}),r.children&&t[r.id]&&e.push(...o(r.children,t,a+1,r.id)),e),[]),l=(e,t)=>{let a=e.cells[t];return a?.querySelector("[tabindex], button, a, input, select, textarea")||null},s=(e,t,a,n)=>{let r=Array.from(e.cells),i="next"===n?1:-1,o="next"===n?r.length:-1;for(let n=a+i;n!==o;n+=i){let a=r[n],i=t[n],o=l(e,n),s=a?.textContent?.trim();if(o||!i.contentFocusable&&s)return n}return -1},c=({data:e,columns:t,renderCell:a,renderRow:c,renderTable:d,renderHeader:u,onRowKeyboardSelect:m,onCellKeyboardSelect:p,includeHeader:f=!1,state:g})=>{let h=(0,i.s)({initialState:g&&"initialState"in g?g.initialState:void 0}),{expandedRows:y,activeRowId:v,toggleRowExpanded:b,setActiveRowId:A}=!g||"initialState"in g?h:g,w=(0,r.useRef)(null),T=(0,r.useMemo)(()=>o(e,y),[e,y]),C=(0,r.useCallback)(({rowId:e,rowIndex:t})=>{let a=w.current?.querySelector(`tbody tr:nth-child(${t+1})`);a?.focus(),A(e)},[A]),E=(0,r.useCallback)((e,t)=>{e&&(e.focus(),A(T[t].id))},[A,T]),I=(0,r.useCallback)((e,a)=>{let{key:n}=e,r=a,i=e.target.closest("td");if(!w.current||!w.current.contains(document.activeElement))return;let o=n=>{if(i){let a=i.cellIndex,r=i.closest("tr")?.[`${n}ElementSibling`],o=n=>{let r=l(n,a),i=n.cells[a]?.textContent?.trim();if(r||!t[a].contentFocusable&&i)return e.preventDefault(),E(r||n.cells[a],T.findIndex(e=>e.id===n.dataset.id)),!0;return!1};for(;r;){if(o(r))return;r=r[`${n}ElementSibling`]}}else document.activeElement instanceof HTMLTableRowElement&&(r="next"===n?Math.min(a+1,T.length-1):Math.max(a-1,0))},c=n=>{if(i){let r=i.closest("tr"),o=i.cellIndex;if(-1!==(o=s(r,t,o,n))){e.preventDefault();let t=r.cells[o];E(l(r,o)||t,a);return}if("previous"===n&&-1===o){e.preventDefault(),r.focus();return}}if(document.activeElement instanceof HTMLTableRowElement){let e=document.activeElement;if("next"===n)if(T[a].children)y[T[a].id]?E(e.cells[0],a):b(T[a].id);else{let n=s(e,t,-1,"next");-1!==n&&E(e.cells[n],a)}else y[T[a].id]?b(T[a].id):T[a].depth&&T[a].depth>0&&(r=T.findIndex(e=>e.id===T[a].parentId));return}"next"===n?T[a].children&&!y[T[a].id]&&b(T[a].id):y[T[a].id]?b(T[a].id):T[a].depth&&T[a].depth>0&&(r=T.findIndex(e=>e.id===T[a].parentId))};switch(n){case"ArrowUp":o("previous");break;case"ArrowDown":o("next");break;case"ArrowLeft":c("previous");break;case"ArrowRight":c("next");break;case"Enter":i?p?.(T[a].id,t[i.cellIndex].id):document.activeElement instanceof HTMLTableRowElement&&m?.(T[a].id);break;default:return}r!==a&&(e.preventDefault(),C({rowId:T[r].id,rowIndex:r}))},[y,t,T,b,m,p,C,E]),S=(0,r.useCallback)(({rowProps:e,children:t})=>(0,n.Y)("tr",{...e,children:t}),[]),_=(0,r.useCallback)(({tableProps:e,children:t})=>(0,n.Y)("table",{...e,children:t}),[]),x=(0,r.useCallback)(({columns:e,headerProps:t})=>(0,n.Y)("thead",{...t,children:(0,n.Y)("tr",{children:e.map(e=>(0,n.Y)("th",{role:"columnheader",children:e.header},e.id))})}),[]),M=(0,r.useCallback)((e,n)=>{let r=y[e.id],i=e.id===(v??T[0].id),o={key:e.id,"data-id":e.id,role:"row","aria-selected":!1,"aria-level":(e.depth||0)+1,"aria-expanded":e.children?r?"true":"false":void 0,tabIndex:i?0:-1,onKeyDown:e=>I(e,n)},l=t.map((t,o)=>{let l={key:`${e.id}-${t.id}`,role:t.isRowHeader?"rowheader":"gridcell",tabIndex:t.contentFocusable?void 0:i?0:-1};return a({row:e,column:t,rowDepth:e.depth||0,rowIndex:n,colIndex:o,rowIsKeyboardActive:i,rowIsExpanded:r,toggleRowExpanded:b,cellProps:l})});return(c||S)({row:e,rowIndex:n,isExpanded:r,isKeyboardActive:i,rowProps:o,children:l})},[v,T,y,I,a,c,S,b,t]);return(d||_)({tableProps:{role:"treegrid",ref:w},children:(0,n.FD)(n.FK,{children:[f&&(u||x)({columns:t,headerProps:{}}),(0,n.Y)("tbody",{children:T.map((e,t)=>M(e,t))})]})})}},489897:(e,t,a)=>{a.d(t,{r:()=>v});var n,r=a(692738),i=a(29824),o=a(707076),l=a(245514),s=a(610435),c=a(342411),d=a(993075),u=a(641760),m=a(524013),p=a(51770),f=a(842082),g=((n=g||{}).UC="UC",n.LEGACY="LEGACY",n);function h({isFavorite:e}){return e?(0,s.Y)(c.sA,{id:"OAiE6E",defaultMessage:"Remove table from favorites"}):(0,s.Y)(c.sA,{id:"TIOUp3",defaultMessage:"Add table to favorites"})}var y=a(227029);let v=e=>{let t=(0,r.useMemo)(()=>(0,y.hI)(),[]),a=(0,r.useMemo)(()=>(0,o.MH)(),[]),n=function(){let e=(0,p.Ej)(),t=(0,p.zV)(),{data:a}=(0,p.t1)(),n=(0,m.df)(),i=(0,r.useRef)(()=>!1);i.current=e=>!!a?.find(t=>(0,f.N1)(t,e));let o=(0,r.useRef)(()=>void 0);return o.current=e=>(0,u.jN)({catalog:e.catalog})?a?.find(t=>(0,f.N1)(t,e))?.securable_id:void 0,(0,r.useMemo)(()=>(0,d.ct)({actionId:d.fN.TOGGLE_FAVORITE_TABLE,label:({dataEntity:e})=>(0,s.Y)(h,{isFavorite:i.current(e)}),onSelected:({dataEntity:a,securable_id:r})=>{n("clientsideEvent",{eventName:i.current(a)?"schemaBrowserUnfavoriteDataEntity":"schemaBrowserFavoriteDataEntity",schemaBrowserObjectType:a.objectType,schemaBrowserFavoriteCatalogType:(0,u.jN)({catalog:a.catalog})?"UC":"LEGACY"}),i.current(a)?e(a,r??o.current(a)):t(a,r)}}),[t,e,n])}(),c=(0,l.m)();return(0,r.useMemo)(()=>{if(!e)return e;let r={...e};return t&&e&&[i.an.CATALOG,i.an.DATABASE,i.an.TABLE,i.an.VOLUME,i.an.FUNCTION,i.an.REGISTERED_MODEL].forEach(t=>{e[t]&&(r[t]=[...e[t]||[],c])}),!t&&a&&e&&(e[i.an.TABLE]?r[i.an.TABLE]=[...e[i.an.TABLE]||[],n]:r[i.an.TABLE]=[n]),r},[e,t,c,n,a])}},498250:(e,t,a)=>{a.d(t,{aQ:()=>o,xS:()=>i});var n=a(141078);function r(e,t,a,n,r,i,o){try{var l=e[i](o),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(n,r)}let i=(0,n.J1)`
  query GetUcFunctionsQuery($schemaFullName: String!, $maxResults: Int = 100, $pageToken: String)
  @component(name: "DBSQLX.FileBrowser") {
    unityCatalogSchemaNameReference(fullName: $schemaFullName) {
      schema {
        fullName
        functions(maxResults: $maxResults, pageToken: $pageToken) {
          nodes {
            managedCatalogFunctionInfo {
              name
              owner
              createdAt
              securableKind
              securableType
              browseOnly
              functionId
            }
          }
          nextPageToken
        }
      }
    }
  }
`;function o(e,t,a){var n;return(n=function*(e,t,{maxResults:a=100,pageToken:n}={},r){let{data:o}=yield e.query({query:i,variables:{schemaFullName:t,maxResults:a,pageToken:n},fetchPolicy:r});return o.unityCatalogSchemaNameReference?.schema?.functions??null},function(){var e=this,t=arguments;return new Promise(function(a,i){var o=n.apply(e,t);function l(e){r(o,a,i,l,s,"next",e)}function s(e){r(o,a,i,l,s,"throw",e)}l(void 0)})}).apply(this,arguments)}},537272:(e,t,a)=>{a.d(t,{A:()=>d,h:()=>c});var n,r,i,o,l=a(692738);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(null,arguments)}let c=(0,l.forwardRef)(({title:e,titleId:t,...a},c)=>l.createElement("svg",s({width:14,height:12,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:c,"aria-labelledby":t},a),e?l.createElement("title",{id:t},e):null,n||(n=l.createElement("path",{d:"M8.884 3.179h.427l1.217-1.247.06-.53A5.423 5.423 0 0 0 8.138.13a5.344 5.344 0 0 0-2.743.106A5.448 5.448 0 0 0 3.05 1.694a5.64 5.64 0 0 0-1.36 2.443.647.647 0 0 1 .426-.027L4.55 3.7s.124-.21.188-.198a3.01 3.01 0 0 1 2.015-1.007 2.987 2.987 0 0 1 2.14.684h-.008Z",fill:"#EA4335"})),r||(r=l.createElement("path",{d:"M12.26 4.137a5.639 5.639 0 0 0-1.652-2.73L8.9 3.157c.356.298.642.675.835 1.102.193.427.289.894.28 1.365v.31a1.489 1.489 0 0 1 1.075.457 1.562 1.562 0 0 1 .445 1.101 1.59 1.59 0 0 1-.445 1.101 1.489 1.489 0 0 1-1.075.456h-3.04l-.304.315v1.868l.304.31h3.04a3.89 3.89 0 0 0 2.363-.779 4.049 4.049 0 0 0 1.444-2.069 4.146 4.146 0 0 0-.045-2.543 4.04 4.04 0 0 0-1.516-2.014Z",fill:"#4285F4"})),i||(i=l.createElement("path",{d:"M3.93 11.525h3.04V9.032H3.93c-.216 0-.43-.048-.627-.14l-.427.135-1.226 1.247-.107.437a3.871 3.871 0 0 0 2.387.814Z",fill:"#34A853"})),o||(o=l.createElement("path",{d:"M3.93 3.437a3.891 3.891 0 0 0-2.293.768 4.046 4.046 0 0 0-1.43 1.99A4.145 4.145 0 0 0 .17 8.666c.24.807.72 1.518 1.373 2.033l1.763-1.807a1.526 1.526 0 0 1-.572-.46 1.594 1.594 0 0 1-.253-1.423c.073-.24.202-.46.376-.638s.387-.31.622-.385a1.485 1.485 0 0 1 1.39.26c.193.155.347.356.448.585l1.764-1.806a3.972 3.972 0 0 0-1.394-1.173 3.872 3.872 0 0 0-1.758-.415Z",fill:"#FBBC05"})))),d=a.p+"static/media/gcp.ce232897b364930c830b2b4ca693af25.svg"},556215:(e,t,a)=>{a.d(t,{L4:()=>l,l3:()=>o,nb:()=>s});var n,r=a(342411),i=a(357548),o=((n={}).MY_ORGANIZATION="My organization",n.DELTA_SHARES_RECEIVED="Delta Shares received",n.LEGACY="Legacy",n.OUTSIDE_WORKSPACE="Outside this workspace",n.HOME_VOLUME="Home volume",n);let l={"My organization":(0,r.zR)({id:"EiZa9Z",defaultMessage:"My organization"}),"Delta Shares received":(0,r.zR)({id:"Mfcnof",defaultMessage:"Delta Shares received"}),Legacy:(0,r.zR)({id:"WWW5DS",defaultMessage:"Legacy"}),"Outside this workspace":(0,r.zR)({id:"9JBqq2",defaultMessage:"Outside this workspace"}),"Home volume":i.A};function s(e,t,a,n,r){let i=[];for(let[o,l]of e){let e=t(o);i.push({id:a(e),data:e,children:l.map(e=>({id:a(e),data:e})),metadata:n(o),defaultExpanded:r?.(o)})}return i}},558248:(e,t,a)=>{a.d(t,{h:()=>d,l:()=>c});var n=a(610435),r=a(342411),i=a(22191),o=a(863708),l=a(134256);let s=(0,n.Y)(l.T,{message:(0,n.Y)(r.sA,{id:"NuT0jY",defaultMessage:"Unable to load the schema browser"})});function c({errorBoundaryId:e,fallback:t=s,children:a}){return(0,n.Y)(o.JR,{esComponent:i.Es.FileBrowser,errorBoundaryId:e,fallback:t,children:(0,n.Y)(n.FK,{children:a})})}function d(e,t,a=s){return function(r){return(0,n.Y)(c,{errorBoundaryId:e,fallback:a,children:(0,n.Y)(t,{...r})})}}},572538:(e,t,a)=>{a.d(t,{Vl:()=>i,ih:()=>o});var n=a(141078);function r(e,t,a,n,r,i,o){try{var l=e[i](o),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(n,r)}let i=(0,n.J1)`
  query GetUcVolumesQuery($schemaFullName: String!, $maxResults: Int = 100, $pageToken: String)
  @component(name: "DBSQLX.FileBrowser") {
    unityCatalogSchemaNameReference(fullName: $schemaFullName) {
      schema {
        fullName
        volumes(maxResults: $maxResults, pageToken: $pageToken) {
          nodes {
            managedCatalogVolumeInfo {
              name
              owner
              createdAt
              securableKind
              securableType
              browseOnly
              volumeId
            }
          }
          nextPageToken
        }
      }
    }
  }
`;function o(e,t,a){var n;return(n=function*(e,t,{maxResults:a=100,pageToken:n}={},r){let{data:o}=yield e.query({query:i,variables:{schemaFullName:t,maxResults:a,pageToken:n},fetchPolicy:r});return o.unityCatalogSchemaNameReference?.schema?.volumes??null},function(){var e=this,t=arguments;return new Promise(function(a,i){var o=n.apply(e,t);function l(e){r(o,a,i,l,s,"next",e)}function s(e){r(o,a,i,l,s,"throw",e)}l(void 0)})}).apply(this,arguments)}},585497:(e,t,a)=>{a.d(t,{v:()=>p});var n=a(610435),r=a(901478),i=a(692738),o=a(648782),l=a(79128),s=a(157633),c=a(846007),d=a(268204);let u=i.forwardRef(({to:e,target:t,componentId:a,onClick:i,children:o,...u},m)=>{let p=(0,c.t4)(e),f=(0,r.AO)(p);(0,s.k)(f);let g=(0,d.G)(f,{onClick:i,target:t,componentId:a,shouldEmitAnalyticsEvent:!1});return(0,n.Y)(l.$n,{...u,target:t,componentId:a,href:f,ref:m,onClick:g,children:o})}),m=i.forwardRef(({to:e,...t},a)=>{let r=(0,c.t4)(e),i=(0,o.$P)(r);return(0,n.Y)(u,{...t,to:i,ref:a})}),p=i.forwardRef((e,t)=>(0,o.Ri)()?(0,n.Y)(m,{...e,ref:t}):(0,n.Y)(u,{...e,ref:t}))},585577:(e,t,a)=>{a.d(t,{O:()=>m});var n=a(610435),r=a(342411),i=a(993075),o=a(29824),l=a(22191),s=a(278983),c=a(762494),d=a(842082);let u="Schema browser copy action",m=(0,i.ct)({actionId:i.fN.COPY_TO_CLIPBOARD,label:({dataEntity:{objectType:e}})=>(0,n.Y)(r.sA,{id:"8Hdyij",defaultMessage:"Copy {objectType} path",values:{objectType:o.si[e]}}),onSelected:({dataEntity:e})=>{if((0,s.y)("clientsideEvent",{eventName:"schemaBrowserActionMenuCopyToClipboardClick"}),e.objectType===o.an.VOLUME&&"entity"in e){let{catalog:t,schema:a,entity:n}=e;(0,c.e)({content:`/Volumes/${t}/${a}/${n}`,alertConfig:{es:l.Es.FileBrowser,eventId:u}})}else e.objectType===o.an.VOLUME_FILE||e.objectType===o.an.VOLUME_FOLDER?navigator.clipboard.writeText(e.url):(0,c.e)({content:(0,d.w_)(e),alertConfig:{es:l.Es.FileBrowser,eventId:u}})}})},609378:(e,t,a)=>{a.d(t,{Kr:()=>l,Wz:()=>s,ZY:()=>o});var n=a(141078),r=a(491438);function i(e,t,a,n,r,i,o){try{var l=e[i](o),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(n,r)}function o({catalog:e,metastoreScope:t,skip:a=!1,onCompleted:i}){return(0,n.IT)(l,{variables:{catalogName:e??""},context:(0,r.Xe)(t),skip:a,onCompleted:i})}let l=(0,n.J1)`
  query GetUcCatalogInfoQuery($catalogName: String!, $schemasMaxResults: Int = 20, $schemasPageToken: String)
  @component(name: "DBSQLX.CatalogExplorer") {
    unityCatalogCatalogNameReference(fullName: $catalogName) {
      catalog {
        managedCatalogCatalogInfo {
          id
          metastoreId
          name
          browseOnly
          securableKind
          catalogType
          comment
          isolationMode
          connectionName
          deltaSharingValidThroughTimestamp
          owner
          shareName
          providerName
          storageRoot
          storageLocation
          createdAt
          createdBy
          updatedAt
          updatedBy
          optionsKvpairs {
            _json
          }
          propertiesKvpairs {
            _json
          }
          provisioningInfo {
            state
            details
          }
          queryFederationAttributes {
            lastRefreshedTimestamp
          }
          managedEncryptionSettings {
            customerManagedKeyId
            azureKeyVaultKeyId
            azureEncryptionSettings {
              azureTenantId
              azureCmkAccessConnectorId
              azureCmkManagedIdentityId
            }
          }
        }
        schemas(maxResults: $schemasMaxResults, pageToken: $schemasPageToken) {
          nodes {
            managedCatalogSchemaInfo {
              name
              owner
              createdAt
              securableKind
              securableType
              browseOnly
              schemaId
            }
          }
          nextPageToken
        }
      }
    }
  }
`;function s(e,t,a){var n;return(n=function*(e,t,{maxResults:a=20,pageToken:n,metastoreScope:i}={},o){let{data:s}=yield e.query({query:l,variables:{catalogName:t,schemasMaxResults:a,schemasPageToken:n},context:(0,r.Xe)(i),fetchPolicy:o}),c=s.unityCatalogCatalogNameReference?.catalog?.schemas;return{ucSchemas:c?.nodes??[],nextPageToken:c?.nextPageToken??null}},function(){var e=this,t=arguments;return new Promise(function(a,r){var o=n.apply(e,t);function l(e){i(o,a,r,l,s,"next",e)}function s(e){i(o,a,r,l,s,"throw",e)}l(void 0)})}).apply(this,arguments)}},616402:(e,t,a)=>{a.d(t,{Of:()=>d,is:()=>f,yH:()=>p});var n=a(610435),r=a(692738),i=a(441535),o=a(411424),l=a(8698),s=a(517625);let c=new Set([s.aF.NOTEBOOK,s.aF.SQLE,s.aF.LAKEVIEW,s.aF.LAKEWATCH,s.aF.DATA_EXPLORER]);function d(e,t){if(!(0,i.W)("databricks.fe.schemabrowser.newTree",!1)||!c.has(e)||t)return!1;return!0}let u=[!1,()=>void 0],m=(0,r.createContext)(null);function p({children:e,schemaBrowserLocation:t,isPostgres:a}){let[i,s]=(0,l.Fg)(o.p.EnableUnifiedSchemaBrowserTreeExplorer),c=d(t,a),f=(0,r.useMemo)(()=>c?[i,s]:u,[c,i,s]);return(0,n.Y)(m.Provider,{value:f,children:e})}function f(){return(0,r.useContext)(m)??u}},642280:(e,t,a)=>{a.d(t,{H:()=>l,f:()=>o});var n=a(610435),r=a(692738),i=a(455843);function o({children:e,contextId:t,searchId:a}){let l=(0,r.useCallback)(e=>{if(!e.entry?.observability_log)return{};return{entry:{observability_log:{custom_context:{search_context:{search_id:a}}}}}},[a]);return(0,n.Y)(i.r,{id:t,tags:{searchId:a},context:l,children:e})}function l({children:e,listIndex:t,hasContentHighlight:a,isLazyLoaded:o,groupIndex:s,groupLocalIndex:c,contextId:d,resultType:u,resultId:m}){let p=(0,r.useCallback)(e=>{if(!e.entry?.observability_log)return{};return{entry:{observability_log:{custom_context:{search_result_context:{list_index:t,search_is_lazy_loaded:o,has_content_highlight:a,group_index:s,group_local_index:c,result_type:u??void 0,result_asset_id:m??void 0}}}}}},[t,a,o,s,c,u,m]);return(0,n.Y)(i.r,{id:d,tags:{},context:p,children:e})}},655841:(e,t,a)=>{a.d(t,{GX:()=>u,HA:()=>i,Ij:()=>d,U8:()=>r,_:()=>o,e:()=>s,fq:()=>m,n$:()=>c,r4:()=>l});var n=a(141078);let r=(0,n.J1)`
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
`,i=(0,n.J1)`
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
  ${r}
`,o=(0,n.J1)`
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
  ${r}
`,l=(0,n.J1)`
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
  ${r}
`,s=(0,n.J1)`
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
  ${r}
`,c=(0,n.J1)`
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
  ${r}
`,d=(0,n.J1)`
  mutation GetOrCreateIdpUser($input: AclmanagerIdentityapiGetOrCreateUserRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateUser(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,u=(0,n.J1)`
  mutation GetOrCreateIdpGroup($input: AclmanagerIdentityapiGetOrCreateGroupRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateGroup(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`,m=(0,n.J1)`
  mutation GetOrCreateIdpServicePrincipal($input: AclmanagerIdentityapiGetOrCreateServicePrincipalRequestInput!)
  @component(name: "IdentityMgmt.UserGroup") {
    aclmanagerIdentityapiGetOrCreateServicePrincipal(input: $input) {
      apiError {
        message
      }
      name
    }
  }
`},655997:(e,t,a)=>{a.d(t,{ST:()=>m,VF:()=>p,ZR:()=>u,Zz:()=>f,u$:()=>l});var n,r=a(919489),i=a.n(r),o=a(434433),l=((n={}).RECOMMENDED="RECOMMENDED",n.STANDARD="STANDARD",n.SYSTEM="SYSTEM",n.OTHER="OTHER",n);let s=["RECOMMENDED","STANDARD","SYSTEM","OTHER"],c=null,d=null,u=()=>(c||(c=Object.entries(o.H).map(([e,t])=>{let a=i().tz(e);return{value:e,label:`(UTC${a.format("Z")}) ${t}`,data:a.utcOffset()}}).sort((e,t)=>e.data-t.data)),c),m=()=>(d||(d=(()=>{let e=i().tz.guess()||"UTC",t=new Map(s.map(e=>[e,[]]));for(let e of i().tz.names()){let a=i().tz(e),n=function(e){if("UTC"===e)return"RECOMMENDED";if(e.startsWith("Etc/"))return"SYSTEM";if(e.includes("/"))return"STANDARD";return"OTHER"}(e);t.get(n)?.push({value:e,label:`(UTC${a.format("Z")}) ${e}`,data:a.utcOffset()})}let a=i().tz("UTC"),n=[{value:"UTC",label:`(UTC${a.format("Z")}) UTC`,data:a.utcOffset()}];if("UTC"!==e){let t=i().tz(e);n.push({value:e,label:`(UTC${t.format("Z")}) ${e}`,data:t.utcOffset()})}return t.set("RECOMMENDED",(t.get("RECOMMENDED")||[]).filter(e=>"UTC"!==e.value)),s.map(e=>({category:e,label:e,options:"RECOMMENDED"===e?n:[...t.get(e)||[]].sort((e,t)=>{if(e.data!==t.data)return e.data-t.data;return e.value.localeCompare(t.value)})}))})()),d);function p(){let e=i().tz.guess();return e in o.H?e:"UTC"}function f(){return i().tz.guess()||"UTC"}},673298:(e,t,a)=>{a.d(t,{Rf:()=>h,Ys:()=>y,fx:()=>b});var n=a(483588),r=a(617293),i=a(680479),o=a(29824),l=a(491438),s=a(556215),c=a(311642),d=a(344918);function u(e,t,a,n,r,i,o){try{var l=e[i](o),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(n,r)}function m(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){u(i,n,r,o,l,"next",e)}function l(e){u(i,n,r,o,l,"throw",e)}o(void 0)})}}let p=(e,t,a,n,r)=>({key:e,filter:(Array.isArray(t)?t:[t]).map(e=>`type=${e}`).join(" OR "),includeBrowse:n,includeUnbound:r,targetGroup:a}),{MY_ORGANIZATION:f,DELTA_SHARES_RECEIVED:g}=s.l3;function h({includeBrowse:e,includeUnbound:t}){return[p("my_org_managed","MANAGED_CATALOG",f,e,t),p("my_org_managed_online","MANAGED_ONLINE_CATALOG",f,e,t),p("my_org_foreign","FOREIGN_CATALOG",f,e,t),p("my_org_internal_system",["INTERNAL_CATALOG","SYSTEM_CATALOG"],f,e,t),p("delta_sharing","DELTASHARING_CATALOG",g,e,t)]}function y(e,t,a,n){return m(function*(){let r=a.map(a=>()=>m(function*(){let r,o=[];do{let s=yield function(e,t,a,n){return m(function*(){let{data:r}=yield e.query({query:i.I,variables:{maxResults:c.WX,pageToken:a??null,omitAuthorizedPaths:!0,filter:n?.filter,includeBrowse:n?.includeBrowse,includeUnbound:n?.includeUnbound},fetchPolicy:t,context:(0,l.Xe)(n?.metastoreScope),canonizeResults:!1});return{items:r?.unityCatalogCatalogs?.nodes??[],nextPageToken:r?.unityCatalogCatalogs?.nextPageToken??null}})()}(e,t,r,{filter:a.filter,includeBrowse:a.includeBrowse,includeUnbound:a.includeUnbound,metastoreScope:n});o.push(...s.items),r=s.nextPageToken??void 0}while(r);return o})()),o=yield m(function*(){let e=Array(r.length),t=0;return yield Promise.all(Array.from({length:Math.min(10,r.length)},()=>m(function*(){for(;t<r.length;){let a=t++;try{e[a]={status:"fulfilled",value:yield r[a]()}}catch(t){e[a]={status:"rejected",reason:t}}}})())),e})(),s=new Map;return o.forEach((e,t)=>{let n=a[t];"fulfilled"===e.status?s.set(n.key,{streamKey:n.key,config:n,items:e.value}):s.set(n.key,{streamKey:n.key,config:n,items:[],failed:!0,error:e.reason})}),s})()}let v=()=>{let e=globalThis.scheduler;if(e?.yield)return e.yield();return new Promise(e=>setTimeout(e,0))};function b(e,t){return m(function*(){let a=new Map;for(let[,n]of e)for(let e of n.items){if(null==e||null==e.name)continue;let r=e.managedCatalogCatalogInfo?.accessibleInCurrentWorkspace===!1,i=r?s.l3.OUTSIDE_WORKSPACE:n.config.targetGroup,l=function(e,t){let a=e.name??"",n={objectType:o.an.CATALOG,catalog:a,securable_id:e.id,securableKind:e.securableKind??void 0};return(0,c.hf)({name:a,type:c.Hl.CATALOG,fullName:a,browse_only:e.managedCatalogCatalogInfo?.browseOnly??!1,accessible:t.accessible,securableKind:e.securableKind??void 0,catalogType:e.managedCatalogCatalogInfo?.catalogType??void 0,isDefault:!!(t.defaultCatalogName&&e.name===t.defaultCatalogName),dataEntity:n,needsCompute:t.isForeignDataRequireCompute?.(e.securableKind??void 0)})}(e,{defaultCatalogName:t.defaultCatalogName,isForeignDataRequireCompute:t.isForeignDataRequireCompute,accessible:!r&&void 0}),d=a.get(i)??[];d.push(l),a.set(i,d)}return yield v(),function(e){let t=e.get(s.l3.MY_ORGANIZATION);if(!t)return;let a=[],i=[];for(let e of t)e.name===r.Ef||e.securableKind===n.T_5.CATALOG_DELTASHARING?a.push(e):i.push(e);if(0===a.length)return;e.set(s.l3.MY_ORGANIZATION,i);let o=e.get(s.l3.DELTA_SHARES_RECEIVED)??[];o.push(...a),e.set(s.l3.DELTA_SHARES_RECEIVED,o)}(a),yield v(),function(e){for(let[t,a]of e){let n=new Set;e.set(t,a.filter(e=>{let t=function(e){if(e.dataEntity?.securable_id)return`id:${e.dataEntity.securable_id}`;return`name:${e.name}|kind:${e.securableKind}|browse:${e.browse_only}|accessible:${e.accessible}`}(e);if(n.has(t))return!1;return n.add(t),!0}))}}(a),yield v(),function(e){let t={[s.l3.MY_ORGANIZATION]:d.X,[s.l3.DELTA_SHARES_RECEIVED]:d.$,[s.l3.OUTSIDE_WORKSPACE]:e=>e.toSorted((e,t)=>e.name.localeCompare(t.name))};for(let[a,n]of e){let r=t[a];r&&e.set(a,r(n))}}(a),a})()}},680479:(e,t,a)=>{a.d(t,{I:()=>r});var n=a(141078);let r=(0,n.J1)`
  query GetUcCatalogsQuery(
    $maxResults: Int!
    $pageToken: String
    $includeBrowse: Boolean
    $includeUnbound: Boolean
    $omitAuthorizedPaths: Boolean
    $filter: String
  ) @component(name: "DBSQLX.CatalogExplorer") {
    unityCatalogCatalogs(
      maxResults: $maxResults
      pageToken: $pageToken
      includeBrowse: $includeBrowse
      includeUnbound: $includeUnbound
      omitAuthorizedPaths: $omitAuthorizedPaths
      filter: $filter
    ) {
      nodes {
        id
        name
        securableKind
        managedCatalogCatalogInfo {
          accessibleInCurrentWorkspace
          catalogType
          browseOnly
        }
      }
      nextPageToken
    }
  }
`},682972:(e,t,a)=>{a.d(t,{E:()=>f,b:()=>g});var n=a(610435);a(692738);var r=a(497895),i=a(295169),o=a(382908),l=a(79570),s=a(465946),c=a(577780),d=a(342411),u=a(874976),m=a(846947);let p=({tagCount:e=3})=>{let{theme:t}=(0,r.wn)(),a=[60,120,80,90];return(0,n.Y)("div",{css:{display:"flex",flexWrap:"wrap",gap:t.spacing.sm,rowGap:t.spacing.sm},children:Array.from({length:e}).map((e,t)=>(0,n.Y)(i.x,{css:{height:20,width:a[t%a.length]},loading:!0},t))})},f=({budgetPolicy:e,loading:t,visibleTagsCount:a,...i})=>{let{theme:f}=(0,r.wn)(),g=[...e?.customTags||[]].sort();if(t)return(0,n.Y)(p,{});let h=(0,n.Y)(o.o.Text,{color:"secondary",children:(0,n.Y)(d.sA,{id:"DqWWVE",defaultMessage:"Selected policy has no tags"})});if((0,m.CN)())return(0,n.Y)("div",{css:{display:"flex",flexWrap:"wrap",rowGap:f.spacing.sm},...i,children:(0,n.Y)(u.N,{componentIdPrefix:"budget-policies",hideLabel:!0,tags:g.map(e=>({tag_key:e.key??"",tag_value:e.value??""})),isEditable:!1,isTagsLoading:!1,emptyComponent:h,showInOverflow:void 0!==a&&g.length>a,visibleTagsCount:void 0!==a?a:void 0})});if(0===g.length)return h;let y=f.spacing.xs,v={marginBottom:-f.spacing.xs/2,marginTop:-f.spacing.xs/2},b={marginBottom:f.spacing.xs/2,marginTop:f.spacing.xs/2},A=g.map(e=>(0,n.Y)(l.m,{componentId:"budget-policy-details_tags_tooltip",content:`${e.key}: ${e.value}`,children:(0,n.Y)("div",{css:b,children:(0,n.Y)(s.v,{componentId:"BudgetPolicyTags_Tag",style:{maxWidth:"100%"},children:(0,n.Y)(o.o.Text,{ellipsis:!0,style:{maxWidth:"100%"},children:e.value?e.value:e.key})})})},e.key));if(void 0!==a&&g.length>a)return(0,n.Y)("div",{css:{display:"flex",flexWrap:"wrap",rowGap:y,...v},...i,children:(0,n.Y)(c.n,{css:{flexWrap:"wrap",maxHeight:300,overflowY:"auto"},visibleItemsCount:a,children:A})});return(0,n.Y)("div",{css:{display:"flex",flexWrap:"wrap",rowGap:y,...v},...i,children:A})},g=({budgetPolicy:e})=>{let{theme:t}=(0,r.wn)(),a=(0,d.tz)(),i=!!e?.customTags?.length,l={textAlign:"center",marginLeft:t.spacing.md,marginRight:t.spacing.md};return(0,n.FD)(n.FK,{children:[(0,n.Y)(o.o.Text,{bold:!0,children:a.formatMessage({id:"7SSpi1",defaultMessage:"Tags"})}),(0,n.Y)(f,{css:[i?{maxWidth:"95%","div div":{maxWidth:"100%"}}:l,{marginTop:t.spacing.sm}],budgetPolicy:e})]})}},697010:(e,t,a)=>{a.d(t,{FZ:()=>s,I4:()=>l,fl:()=>o});var n,r=a(842082),i=a(29824);let o="application/x-databricks-schema-browser-entity";var l=((n={}).SCHEMA_BROWSER="schema browser",n);function s(e,t){let a=e.dataTransfer?.getData(o)||"";if(a&&(e=>{try{return JSON.parse(e),!0}catch(e){return!1}})(a)){let e=JSON.parse(a),n=(0,r.$o)(e);return e.objectType===i.an.TABLE&&t&&(n=`select * from ${n} limit 100`),n}return""}},698600:(e,t,a)=>{a.d(t,{a:()=>v});var n=a(610435),r=a(692738),i=a(46e3),o=a(99442),l=a(806773),s=a(370427),c=a(407374),d=a(332702),u=a(79128),m=a(497895),p=a(342411),f=a(733940);let g=[f.Bw.SUNDAY,f.Bw.MONDAY,f.Bw.TUESDAY,f.Bw.WEDNESDAY,f.Bw.THURSDAY,f.Bw.FRIDAY,f.Bw.SATURDAY],h=()=>{let e=new Date(Date.now());return{unit:f.yr.DAY,interval:1,weekday:g[e.getDay()],day:e.getDate(),hours:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds()}};class y extends r.Component{resetScheduleValue;constructor(e){super(e),this.state={showCronSyntax:!(0,f.nP)(e.value)},this.resetScheduleValue=e.value}onCompose=(e,t)=>{if(!e||!t)return;let a={...h(),...e,...t};this.props.onChange?.((0,f.RE)(a)??"")};render(){let{showCronSyntax:e}=this.state,{onChange:t,value:a,isValid:r=!0,disabled:m=!1,intl:g,htmlForId:y,excludeMinutes:v,includeWorkday:A=!1,stretch:w=!0,hideCronSyntaxToggle:T=!1,...C}=this.props,E=(0,f.nP)(a),{unit:I,interval:S,day:_,weekday:x,hours:M,minutes:R}=E??h(),Y=(0,f.Ih)(g,S,v,A),k=I===f.yr.HOUR&&M<S?S:24,D=I===f.yr.MINUTE&&R<S?S:60,O=[f.yr.MONTH,f.yr.WEEK,f.yr.WORKDAY,f.yr.DAY].includes(I),N=I===f.yr.MINUTE||I===f.yr.HOUR&&1===S,P=N?(0,f.sc)(D).map(e=>({...e,label:g.formatMessage({id:"ZRkGnZ",defaultMessage:"{minutes, plural, =1 {# minute} other {# minutes}} past the hour"},{minutes:e.data})})):(0,f.sc)(D);return(0,n.FD)("div",{css:{display:"flex",flexDirection:"column"},style:w?{width:"100%"}:{},children:[E&&(T||!e)?(0,n.FD)("div",{"data-testid":"schedule-composer",css:{display:"flex",width:"100%",minWidth:300,justifyContent:"spaceBetween",alignItems:"center",verticalAlign:"center","& > p":{marginBottom:5,marginTop:5,textWrap:"nowrap"},"& > p:not(:first-child)":{marginRight:-6,marginLeft:6},"& > div":{flexGrow:1},"& > div:not(:first-child)":{marginLeft:12}},children:[O?(0,n.Y)("p",{"data-testid":"composer-interval",children:(0,n.Y)(p.sA,{id:"GJiEPy",defaultMessage:"Every"})}):(0,n.Y)("div",{style:{flexGrow:2},children:(0,n.FD)(i.l,{componentId:"codegen_web-shared_src_scheduling_quartzcroninput.tsx_181",value:`${S}`,label:g.formatMessage({id:"xkyGn0",defaultMessage:"Every"}),children:[(0,n.Y)(o.b,{id:y,width:"100%","data-testid":"composer-interval",children:g.formatMessage(f.GN.every,{frequency:S})}),(0,n.Y)(l.g,{width:"100%",children:(0,f.Ft)(this.props.intl,I).map(e=>(0,n.Y)(s.O,{value:e.value,disabled:[f.yr.MONTH,f.yr.WEEK,f.yr.DAY].includes(I)||m,onChange:({value:e})=>this.onCompose(E,{interval:parseInt(e,10)}),children:e.label},e.value))})]})}),(0,n.Y)("div",{style:{flexGrow:3},children:(0,n.FD)(i.l,{componentId:"codegen_web-shared_src_scheduling_quartzcroninput.tsx_207",value:I,label:(0,n.Y)(p.sA,{id:"gKyiHZ",defaultMessage:"Unit"}),children:[(0,n.Y)(o.b,{id:y,"data-testid":"composer-timeunit",width:"100%",children:g.formatMessage(f.Ic[I],{count:S})}),(0,n.Y)(l.g,{children:Y.map(e=>(0,n.Y)(s.O,{value:e.value,disabled:m,onChange:({value:e})=>{this.onCompose(E,{unit:e,interval:1})},children:e.label},e.value))})]})}),I===f.yr.WEEK&&(0,n.FD)("p",{children:[" ",(0,n.Y)(p.sA,{id:"5yR8DM",defaultMessage:"on"})]}),I===f.yr.MONTH&&(0,n.FD)("p",{children:[" ",(0,n.Y)(p.sA,{id:"jgmflB",defaultMessage:"on the"})]}),I===f.yr.MONTH&&(0,n.Y)("div",{children:(0,n.FD)(i.l,{componentId:"codegen_web-shared_src_scheduling_quartzcroninput.tsx_255",value:`${_}`,label:g.formatMessage({id:"XVXqUc",defaultMessage:"Day"}),children:[(0,n.Y)(o.b,{"data-testid":"composer-day",width:"100%",children:_}),(0,n.Y)(l.g,{children:(0,f.sc)(32,1).map(e=>(0,n.Y)(s.O,{value:e.value,disabled:m,onChange:({value:e})=>this.onCompose(E,{day:parseInt(e,10)}),children:e.label},e.value))})]})}),I===f.yr.WEEK&&(0,n.Y)("div",{style:{flexGrow:4},children:(0,n.FD)(i.l,{componentId:"codegen_web-shared_src_scheduling_quartzcroninput.tsx_282",value:x,label:g.formatMessage({id:"wMDFNc",defaultMessage:"Weekday"}),children:[(0,n.Y)(o.b,{"data-testid":"composer-weekday",width:"100%",children:f.z3[x]?(0,n.Y)(p.sA,{...f.z3[x]}):(0,n.Y)(p.sA,{id:"GQTXhV",defaultMessage:"Select a day"})}),(0,n.Y)(l.g,{children:(0,f.PH)(this.props.intl).map(e=>(0,n.Y)(s.O,{value:e.value,disabled:m,onChange:({value:e})=>this.onCompose(E,{weekday:e}),children:e.label},e.value))})]})}),1===S&&I!==f.yr.MINUTE&&(0,n.Y)("p",{children:(0,n.Y)(p.sA,{id:"VDn/nr",defaultMessage:"at"})}),S>1&&(0,n.Y)("p",{children:(0,n.Y)(p.sA,{id:"992qWA",defaultMessage:"from"})}),I!==f.yr.MINUTE&&(I!==f.yr.HOUR||1!==S)&&(0,n.FD)(n.FK,{children:[(0,n.Y)("div",{children:(0,n.FD)(i.l,{componentId:"codegen_web-shared_src_scheduling_quartzcroninput.tsx_330",value:`${Math.min(M,k-1)}`,label:g.formatMessage({id:"vC2Pjw",defaultMessage:"Hours"}),children:[(0,n.Y)(o.b,{"data-testid":"composer-hours",width:"100%",children:M<10?`0${M}`:M}),(0,n.Y)(l.g,{children:(0,f.sc)(k).map(e=>(0,n.Y)(s.O,{disabled:m,value:e.value,onChange:({value:e})=>this.onCompose(E,{hours:parseInt(e,10)}),children:e.label},e.value))})]})}),(0,n.Y)("p",{children:":"})]}),(I!==f.yr.MINUTE||S>1)&&(0,n.Y)("div",{style:N?{flexGrow:3}:{},children:(0,n.FD)(i.l,{componentId:"codegen_web-shared_src_scheduling_quartzcroninput.tsx_359",value:`${Math.min(R,D-1)}`,label:g.formatMessage({id:"PY27hW",defaultMessage:"Minutes"}),children:[(0,n.Y)(o.b,{"data-testid":"composer-minutes",width:"100%",children:P[R].label}),(0,n.Y)(l.g,{children:P.map(e=>(0,n.Y)(s.O,{disabled:m,onChange:({value:e})=>this.onCompose(E,{minutes:parseInt(e,10)}),value:e.value,"data-testid":"composer-minutes-option",children:e.label},e.value))})]})})]}):(0,n.Y)(c.p,{"data-testid":"quartz-text-input",value:a,onChange:e=>t?.(e.target.value),disabled:m,readOnly:m,...C,css:{width:"100%"},id:y}),!T&&(0,n.FD)("div",{css:{display:"flex",marginTop:this.props.designSystemThemeApi.theme.spacing.sm},children:[(0,n.Y)(d.Sc,{componentId:"codegen_web-shared_src_scheduling_quartzcroninput.tsx_399",isChecked:this.state.showCronSyntax,onChange:e=>{e&&(this.resetScheduleValue=a),this.setState({showCronSyntax:e})},isDisabled:!E||m,"data-testid":"show-cron-syntax",children:b.showCronSchedule}),!r&&(0,n.Y)(u.$n,{componentId:"codegen_web-shared_src_scheduling_quartzcroninput.tsx_314","data-testid":"revert-cron-btn",type:"link",onClick:()=>this.props.onChange?.(this.resetScheduleValue??""),children:(0,n.Y)(p.sA,{id:"ZaDJ33",defaultMessage:"(revert)"})})]})]})}}let v=(0,p.j4)((0,m.l1)(y)),b={showCronSchedule:(0,n.Y)(p.sA,{id:"8Pvk+3",defaultMessage:"Show cron syntax"})}},730642:(e,t,a)=>{function n(e,t){e.evict({id:"ROOT_QUERY",fieldName:"unityCatalogSchemaNameReference",args:{fullName:t}}),e.gc()}function r(e){e.evict({id:"ROOT_QUERY",fieldName:"unityCatalogSchemaNameReference"}),e.evict({id:"ROOT_QUERY",fieldName:"unityCatalogCatalogNameReference"}),e.gc()}a.d(t,{L:()=>n,X:()=>r})},777517:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(610435),r=a(692738),i=a(375214);function o(e){return(0,n.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,n.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 0a.75.75 0 0 1 .75.75V3h5.5a.75.75 0 0 1 .75.75V6h.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75H15v2.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V12H.75a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 .75 6H1V3.75A.75.75 0 0 1 1.75 3h5.5V.75A.75.75 0 0 1 8 0M2.5 4.5v9h11v-9zM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6.25 2.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"})})}let l=(0,r.forwardRef)((e,t)=>(0,n.Y)(i.I,{ref:t,...e,component:o}));l.displayName="RobotIcon";let s=l},846312:(e,t,a)=>{a.d(t,{Qp:()=>i,xH:()=>o});var n=a(141078);function r(e,t,a,n,r,i,o){try{var l=e[i](o),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(n,r)}let i=(0,n.J1)`
  query GetUcModelsQuery($schemaFullName: String!, $maxResults: Int = 100, $pageToken: String)
  @component(name: "DBSQLX.FileBrowser") {
    unityCatalogSchemaNameReference(fullName: $schemaFullName) {
      schema {
        fullName
        models(maxResults: $maxResults, pageToken: $pageToken) {
          nodes {
            managedCatalogRegisteredModelInfo {
              name
              owner
              createdAt
              securableKind
              securableType
              browseOnly
              id
            }
          }
          nextPageToken
        }
      }
    }
  }
`;function o(e,t,a){var n;return(n=function*(e,t,{maxResults:a=100,pageToken:n}={},r){let{data:o}=yield e.query({query:i,variables:{schemaFullName:t,maxResults:a,pageToken:n},fetchPolicy:r});return o.unityCatalogSchemaNameReference?.schema?.models??null},function(){var e=this,t=arguments;return new Promise(function(a,i){var o=n.apply(e,t);function l(e){r(o,a,i,l,s,"next",e)}function s(e){r(o,a,i,l,s,"throw",e)}l(void 0)})}).apply(this,arguments)}},882309:(e,t,a)=>{a.d(t,{A:()=>c,h:()=>s});var n,r,i,o=a(692738);function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(null,arguments)}let s=(0,o.forwardRef)(({title:e,titleId:t,...a},s)=>o.createElement("svg",l({width:16,height:10,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:s,"aria-labelledby":t},a),e?o.createElement("title",{id:t},e):null,n||(n=o.createElement("path",{d:"M4.531 3.541c0 .201.021.364.058.483.043.12.095.249.17.39a.238.238 0 0 1 .036.125c0 .054-.032.108-.1.162l-.334.228a.25.25 0 0 1-.137.049c-.053 0-.106-.027-.158-.076a1.694 1.694 0 0 1-.19-.255 4.269 4.269 0 0 1-.165-.32c-.412.499-.93.748-1.554.748-.444 0-.798-.13-1.058-.39-.259-.26-.391-.608-.391-1.041 0-.461.158-.835.481-1.118.324-.282.752-.422 1.296-.422.18 0 .365.016.56.044.196.027.397.07.608.119V1.87c0-.412-.084-.699-.248-.867-.17-.169-.455-.25-.862-.25-.185 0-.375.022-.571.071a4.091 4.091 0 0 0-.571.185c-.085.037-.149.059-.185.07a.308.308 0 0 1-.085.016c-.074 0-.111-.054-.111-.168V.663c0-.087.01-.152.037-.19a.404.404 0 0 1 .148-.114C1.39.26 1.612.18 1.87.115a3.13 3.13 0 0 1 .825-.103c.63 0 1.09.146 1.385.439.291.292.44.737.44 1.333v1.757h.01Zm-2.147.825c.174 0 .354-.033.544-.098.19-.065.36-.185.503-.347a.872.872 0 0 0 .18-.347c.032-.13.053-.288.053-.472v-.227a4.308 4.308 0 0 0-.487-.092 3.92 3.92 0 0 0-.497-.033c-.355 0-.613.07-.788.217-.175.146-.26.353-.26.624 0 .255.064.445.197.574.127.135.312.2.555.2Zm4.246.585c-.095 0-.158-.016-.2-.054-.044-.032-.08-.108-.112-.211L5.076.494a.962.962 0 0 1-.048-.217c0-.087.043-.135.127-.135h.518c.1 0 .169.016.206.054.043.032.074.108.105.211l.889 3.59.825-3.59c.027-.108.058-.179.1-.211A.358.358 0 0 1 8.01.142h.423c.1 0 .17.016.212.054.043.032.08.108.1.211l.836 3.633.915-3.633A.472.472 0 0 1 10.6.196a.34.34 0 0 1 .206-.054h.492c.085 0 .132.043.132.135 0 .028-.005.054-.01.087a.788.788 0 0 1-.037.136L10.109 4.69c-.032.108-.069.179-.111.211a.333.333 0 0 1-.201.054h-.454c-.1 0-.17-.016-.212-.054-.043-.037-.08-.108-.1-.217l-.82-3.497-.815 3.492c-.026.108-.057.179-.1.217-.043.038-.116.054-.212.054H6.63Zm6.795.146c-.274 0-.55-.032-.814-.097-.264-.066-.47-.136-.608-.218a.389.389 0 0 1-.164-.152.395.395 0 0 1-.032-.152v-.276c0-.114.043-.168.122-.168.032 0 .063.005.095.016s.08.033.133.054c.18.082.375.146.581.19.212.044.418.065.63.065.333 0 .592-.06.772-.179a.587.587 0 0 0 .274-.515.537.537 0 0 0-.142-.38c-.095-.102-.275-.194-.534-.281l-.767-.244c-.386-.125-.672-.31-.846-.553a1.315 1.315 0 0 1-.265-.787c0-.227.048-.428.143-.602.094-.173.222-.325.38-.444.159-.125.339-.217.55-.282A2.25 2.25 0 0 1 13.6 0c.117 0 .238.005.354.022.122.016.233.037.344.059.106.027.206.054.301.087.096.032.17.065.222.097a.459.459 0 0 1 .159.136.298.298 0 0 1 .047.179v.255c0 .115-.042.174-.121.174a.533.533 0 0 1-.201-.065A2.369 2.369 0 0 0 13.69.732c-.301 0-.54.05-.704.152-.164.103-.248.26-.248.483 0 .152.053.282.158.385.106.103.302.206.582.298l.751.244c.381.124.656.298.82.52.164.222.243.477.243.76 0 .232-.048.444-.137.628a1.453 1.453 0 0 1-.386.477c-.165.136-.36.233-.587.304a2.449 2.449 0 0 1-.757.114Z",fill:"#232F3E"})),r||(r=o.createElement("path",{d:"M14.457 7.667c-1.75 1.28-4.292 1.961-6.477 1.961-3.064 0-5.824-1.123-7.91-2.99-.164-.147-.015-.348.182-.232C2.507 7.703 5.288 8.49 8.166 8.49c1.941 0 4.073-.4 6.036-1.223.292-.132.542.19.255.4Z",fill:"#F90"})),i||(i=o.createElement("path",{d:"M15.202 6.745c-.222-.289-1.467-.139-2.032-.07-.17.022-.196-.128-.043-.24.992-.707 2.623-.504 2.813-.268.19.24-.053 1.896-.982 2.69-.142.122-.28.058-.216-.103.211-.53.681-1.725.46-2.009Z",fill:"#F90"})))),c=a.p+"static/media/aws.bb56480692458ff44961443e7a61a3bb.svg"},923509:(e,t,a)=>{a.d(t,{kX:()=>o,vV:()=>s,vZ:()=>l});var n,r,i,o=((n={}).String="String",n.Integer="Integer",n.Decimal="Decimal",n.Date="Date",n.Timestamp="Timestamp",n.Range="Range",n),l=((r={}).Text="Text",r.Dropdown="Dropdown",r.Range="Range",r.Dynamic="Dynamic",r),s=((i={}).Range="Range",i.Array="Array",i)},946114:(e,t,a)=>{a.d(t,{Zx:()=>u,dl:()=>p,tp:()=>f});var n=a(452137),r=a.n(n),i=a(692738),o=a(595615),l=a(302118),s=a(641760),c=a(594390);function d(e,t,a,n,r,i,o){try{var l=e[i](o),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(n,r)}let u=(e,t,a=!0)=>["data_explorer_secrets",e,t,a];function m(){return(0,i.useCallback)(({catalog:e,schema:t,includeBrowse:a=!0})=>({queryKey:u(e??"",t??"",a),queryFn:()=>{var n;return(n=function*(){return r()(void 0!==e,"'catalog' must be set"),r()(void 0!==t,"'schema' must be set"),r()(l.k.isUnityCatalog(e)||(0,s.rA)(e),`'catalog' must represent a unity catalog, but it was '${e}'`),(yield l.k.getSecrets(e,t,a))??[]},function(){var e=this,t=arguments;return new Promise(function(a,r){var i=n.apply(e,t);function o(e){d(i,a,r,o,l,"next",e)}function l(e){d(i,a,r,o,l,"throw",e)}o(void 0)})})()}}),[])}function p(e,t){let a=m();return(0,o.AO)({...a(e),...t})}function f(e){let t=m();return(0,c.V)({queries:e.map(({args:e,options:a})=>({...a,...t(e)}))})}},957211:(e,t,a)=>{a.d(t,{s:()=>i});var n=a(692738);function r(e,t){switch(t.type){case"TOGGLE_ROW_EXPANDED":return{...e,expandedRows:{...e.expandedRows,[t.rowId]:!e.expandedRows[t.rowId]}};case"SET_ACTIVE_ROW_ID":return{...e,activeRowId:t.rowId};default:return e}}function i({initialState:e={expandedRows:{}}}){let[t,a]=(0,n.useReducer)(r,{...e,activeRowId:null}),o=(0,n.useCallback)(e=>{a({type:"TOGGLE_ROW_EXPANDED",rowId:e})},[]),l=(0,n.useCallback)(e=>{a({type:"SET_ACTIVE_ROW_ID",rowId:e})},[]);return{...t,toggleRowExpanded:o,setActiveRowId:l}}},964942:(e,t,a)=>{a.d(t,{Ku:()=>o,L3:()=>i});var n=a(141078);function r(e,t,a,n,r,i,o){try{var l=e[i](o),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(n,r)}let i=(0,n.J1)`
  query GetUcSecretsQuery($schemaFullName: String!, $maxResults: Int = 100, $pageToken: String)
  @component(name: "DBSQLX.FileBrowser") {
    unityCatalogSchemaNameReference(fullName: $schemaFullName) {
      schema {
        fullName
        secrets(maxResults: $maxResults, pageToken: $pageToken) {
          nodes {
            managedCatalogSecretInfo {
              name
              effectiveOwner
              securableKind
              securableType
              browseOnly
              id
              createTime
            }
          }
          nextPageToken
        }
      }
    }
  }
`;function o(e,t,a){var n;return(n=function*(e,t,{maxResults:a=100,pageToken:n,enabled:r=!0}={},o){if(!r)return null;let{data:l}=yield e.query({query:i,variables:{schemaFullName:t,maxResults:a,pageToken:n},fetchPolicy:o});return l.unityCatalogSchemaNameReference?.schema?.secrets??null},function(){var e=this,t=arguments;return new Promise(function(a,i){var o=n.apply(e,t);function l(e){r(o,a,i,l,s,"next",e)}function s(e){r(o,a,i,l,s,"throw",e)}l(void 0)})}).apply(this,arguments)}},965545:(e,t,a)=>{a.d(t,{I:()=>o,j:()=>i});var n,r,i=((n={}).MANAGER="roles/discovery.manager",n),o=((r={}).VIEW="domain/view",r.CREATE="account/createDomain",r.DELETE="domain/delete",r.ACCOUNT_GET_RULESET="account.ruleSet/get",r.ACCOUNT_UPDATE_RULESET="account.ruleSet/update",r)},993075:(e,t,a)=>{a.d(t,{N3:()=>C,ct:()=>b,fN:()=>f,gr:()=>w,ug:()=>y});var n,r,i=a(610435),o=a(692738),l=a(802582),s=a(79128),c=a(87221),d=a(509901),u=a(524013),m=a(217985),p=a(842082),f=((n={}).ADD_COLUMN_AS_DIMENSION="add-column-as-dimension",n.COPY_TO_CLIPBOARD="copy-to-clipboard",n.CREATE_SCHEMA="create-schema",n.CREATE_VOLUME="create-volume",n.CREATE_VOLUME_DIRECTORY="create-volume-directory",n.DELETE_VOLUME_DIRECTORY="delete-volume-directory",n.DELETE_VOLUME_FILE="delete-volume-file",n.DOWNLOAD_VOLUME_DIRECTORY="download-volume-directory",n.DOWNLOAD_VOLUME_FILE="download-volume-file",n.INSERT_OBJECT_NAME="insert-object-name",n.OPEN_IN_DATA_EXPLORER="open-in-data-explorer",n.PREVIEW_DATA="preview-data",n.PREVIEW_FILE="preview-file",n.PREVIEW_QUERY_IN_NEW_TAB="preview-query-in-new-tab",n.REPLACE_SOURCE_TABLE="replace-source-table",n.TOGGLE_FAVORITE_ASSET="toggle-favorite-asset",n.TOGGLE_FAVORITE_TABLE="toggle-favorite-table",n.UPLOAD_TO_VOLUME="upload-to-volume",n.VIEW_SAMPLE_DATA="view-sample-data",n);function g(e,t,a,n){e("clientsideEvent",{eventName:"schemaBrowserActionSelected",schemaBrowserActionIds:a,schemaBrowserObjectType:n}),t&&"function"==typeof t&&t({eventType:"component_click",eventEntity:{entityType:"component",entitySubType:"div",entityId:`web_shared.schema_browser.${a}`},eventPayload:{interactionSubject:!0},customContext:{changeType:n},customContextProto:{schema_browser_context:{change_type:n}}})}function h(e,t){return"function"==typeof e?e(t):e}var y=((r={})[r.Menu=0]="Menu",r[r.Toolbar=1]="Toolbar",r);function v({actionId:e,label:t,authzAction:a,disabledReasonLabel:n,onSelected:r,context:l,disabled:s}){let m=(0,u.df)(),f=(0,c.ki)(),y=(0,p.jt)(l.dataEntity),{data:b}=(0,d.ok)({key:[y,e],actions:a?{action:a(y)}:{}},{enabled:!!a}),A=(0,o.useCallback)(()=>{g(m,f,e,l.dataEntity.objectType),r?.(l)},[r,e,l,m,f]),w=b?.actions.action.authorized===!1||s;return(0,i.Y)(l.itemWrapperElement,{componentId:"codegen_web-shared_src_schema-browser_menu-actions_action.tsx_88",onSelect:A,disabled:w,disabledReason:w&&n,children:h(t,l)},e)}function b({actionId:e,shouldDisplayAction:t=()=>!0,...a}){return{render:n=>({actionId:e,element:t?.(n)?(0,i.Y)(v,{actionId:e,...a,context:n},e):null}),location:0,shouldDisplayAction:t}}function A({actionId:e,label:t,to:a,target:n,context:r}){let o=(0,u.df)(),l=(0,c.ki)();return(0,i.Y)(r.itemWrapperElement,{componentId:"codegen_web-shared_src_schema-browser_menu-actions_action.tsx_144",asChild:!0,onSelect:()=>g(o,l,e,r.dataEntity.objectType),children:(0,i.Y)(m.N,{componentId:"codegen_web-shared_src_schema-browser_menu-actions_action.tsx_136",to:h(a,r),target:n,asTypographyLink:!0,children:h(t,r)})},e)}function w({actionId:e,...t}){return{render:a=>({actionId:e,element:(0,i.Y)(A,{actionId:e,...t,context:a},e)}),location:0}}function T({actionId:e,icon:t,onSelected:a,tooltipContent:n,context:r}){let d=(0,u.df)(),m=(0,c.ki)(),p=(0,o.useCallback)(()=>{g(d,m,e,r.dataEntity.objectType),a?.(r)},[a,e,r,d,m]);return(0,i.Y)(l.p,{title:h(n,r),children:(0,i.Y)(s.$n,{componentId:"codegen_web-shared_src_schema-browser_menu-actions_action.tsx_175",size:"small","data-testid":`SchemaBrowserNodeToolbarAction-${e}`,onClick:p,icon:h(t,r)},e)})}function C({actionId:e,...t}){return{render:a=>({actionId:e,element:(0,i.Y)(T,{actionId:e,...t,context:a},e)}),location:1}}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/31190.10314b958d.chunk.js.map