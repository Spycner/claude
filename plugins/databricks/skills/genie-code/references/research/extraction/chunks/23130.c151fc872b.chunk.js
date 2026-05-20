"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[23130],{2769:(e,t,n)=>{n.d(t,{NF:()=>o,NL:()=>s,Nq:()=>a,iI:()=>i,ms:()=>l,n7:()=>r});let r='"Menlo", "Monaco", "Consolas", "Ubuntu Mono", "Source Code Pro", monospace',i=13,o=22,a=16,s=13,l=12},55749:(e,t,n)=>{n.d(t,{F:()=>r,X:()=>i});class r extends Error{constructor(e,t){super(e),this.name="SqlQueryError",this.cause=t}}let i=1e6},93041:(e,t,n)=>{n.a(e,async(e,r)=>{try{n.d(t,{Ab:()=>v,FR:()=>b,jW:()=>A});var i=n(692738),o=n(731392),a=n(2769),s=n(748896),l=n(641163),u=n(940912),c=n(8698),d=n(411424),m=n(511724),p=n(787387),h=n(681512),f=n(262550),g=n(123229),E=n(16515),y=e([o,m]);[o,m]=y.then?(await y)():y;let T={scrollBeyondLastLine:!1,fontFamily:a.n7,minimap:{enabled:!1},fixedOverflowWidgets:!0,folding:!0,cursorSurroundingLines:m.BUFFER_LINES,dragAndDrop:!1,automaticLayout:!0},b=(e,t)=>{let n,r=!t&&(0,c.ml)(d.p.EnableLineWrap);return{...T,fontSize:(0,s.i)(),lineHeight:(0,s.f)(),cursorBlinking:(0,c.ml)(d.p.EnableCursorBlink)?"blink":"solid",wordWrap:r?"on":"off",scrollbar:(0,o.getScrollbarOption)(!!e,e||!r),...{autoClosingBrackets:(n=!!(0,c.ml)(d.p.EnableSmartQuotes))?"languageDefined":"never",autoClosingDelete:n?"always":"never",autoClosingOvertype:"auto",autoClosingQuotes:n?"languageDefined":"never",matchBrackets:n?"always":"never"},multiCursorModifier:(0,c.ml)(d.p.EnableMonacoMultiCursor)===h.Yj?h.Yj:h.z4,automaticLayout:!0}},A=({isVerticallyScrollable:e})=>({...b(e),wordBasedSuggestions:"off",quickSuggestions:(0,E.Pd)(),suggestOnTriggerCharacters:(0,E.Pd)(),acceptSuggestionOnEnter:(0,E.gf)()?"on":"off",hover:{enabled:(0,p.E)()}}),v=({editorInstance:e})=>((0,i.useEffect)(()=>{let t=(0,u.yB)().wrap(()=>{e?.updateOptions(A({isVerticallyScrollable:!0}))}),n=(0,g.$)(),r=(0,c.QZ)(t);return n.on(f.u,t),()=>{try{r?.(),n.off(f.u,t)}catch(e){}}},[e]),{defaultOptions:(0,l.D)(()=>A({isVerticallyScrollable:!0}))});r()}catch(e){r(e)}})},158555:(e,t,n)=>{n.d(t,{W9:()=>c,h8:()=>s,k4:()=>u,ly:()=>l});var r,i,o,a=n(483588),s=((r={}).CATALOG="CATALOG",r.SCHEMA="SCHEMA",r.TABLE="TABLE",r.FUNCTION="FUNCTION",r.MODEL="MODEL",r.VOLUME="VOLUME",r.VOLUME_DIRECTORY="VOLUME_DIRECTORY",r.VOLUME_FILE="VOLUME_FILE",r.METRIC_VIEW="METRIC_VIEW",r),l=((i={}).SCHEMA="SCHEMA",i.VOLUME="VOLUME",i.VOLUME_DIRECTORY="VOLUME_DIRECTORY",i),u=((o={}).ChildAssets="ChildAssets",o.ParentAsset="ParentAsset",o);let c={all:[],metric_views:[a.T_5.TABLE_METRIC_VIEW]}},162539:(e,t,n)=>{n.d(t,{o:()=>s});var r=n(483588),i=n(441535),o=n(29824);function a(e,t,n,r,i,o,a){try{var s=e[o](a),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(r,i)}let s=(e,t)=>{var n;return(n=function*(){let n=t.query.trim(),{data:a}=yield e.query({query:t.queryDocument,variables:{query:n,filters:{resultTypes:[r.iId.VOLUME],...t.excludeBrowseOnly&&{aclFilter:{allowUcBrowseOnly:!1}}},sortOrder:{criteria:r.noI.NAME,ascending:!0},enableCrossRanking:!!(0,i.W)("databricks.fe.assetSelectors.enableCrossRanking",!1),pageSize:t.pageSize,pageToken:t.pageToken},fetchPolicy:t.fetchPolicy}),s=a?.searchmidtierSearchUnifiedSearch,l=s?.apiError;return{results:(s?.results??[]).flatMap(e=>{let t=(e=>{if(!e)return null;let{name:t,description:n,ucEntityMetadata:r,browseOnly:i}=e,a=r?.catalogName,s=r?.schemaName;if(!t||!a||!s)return null;return{name:t,full_name:[a,s,t].join("."),catalog_name:a,schema_name:s,comment:n??void 0,securable_type:o.an.VOLUME,browse_only:i??!1}})(e);return t?[t]:[]}),nextPageToken:s?.nextPageToken??void 0,apiError:l?{message:l.message??"",code:l.code??""}:null}},function(){var e=this,t=arguments;return new Promise(function(r,i){var o=n.apply(e,t);function s(e){a(o,r,i,s,l,"next",e)}function l(e){a(o,r,i,s,l,"throw",e)}s(void 0)})})()}},204892:(e,t,n)=>{n.d(t,{O:()=>a,P:()=>s});var r=n(278983),i=n(689017),o=n(711489);class a extends Error{status;code;source;data;constructor(e,t,n,r){super(t),this.status=e,this.code=t,this.source=n,this.data=r}}let s=(e,t,n,a,s,l,u)=>{(0,i.wi)({lakesense_log:{event_type:l??o.J5.LakesenseEventType_Type.TYPE_UNSPECIFIED,event_name:`${e}: ${t}`,lakesense_trace_id:s,lakesense_client_id:n,model_type:u}}),(0,r.y)("clientsideEvent",{eventType:"InlineAssistantError",eventName:`${e}: ${t}`,lakesenseTraceId:s,lakesenseClientId:n,modelType:u},a)}},234969:(e,t,n)=>{n.d(t,{C:()=>l});var r=n(141078),i=n(483588),o=n(158555);let a=[o.h8.TABLE,o.h8.FUNCTION,o.h8.MODEL,o.h8.VOLUME,o.h8.METRIC_VIEW],s=(0,r.J1)`
  query ListRecentUCAssets($numRecents: Int!, $assetTypes: [UseractivityAssetType!])
  @component(name: "Lakeview.DatabricksOne") {
    useractivityListRecentAssets(input: { numResults: $numRecents, filter: { types: $assetTypes } }) {
      assets {
        asset {
          name
          id
          type
          unityCatalogSecurable {
            securableKind
          }
        }
      }
      apiError {
        message
        code
      }
    }
  }
`;function l({numRecents:e=5,selectableTypes:t,skip:n=!1}){var c;let m,p,{data:h,error:f,...g}=(0,r.IT)(s,{notifyOnNetworkStatusChange:!0,skip:n,variables:{numRecents:e,assetTypes:(m=(c=t).map(e=>d[e]).filter(e=>void 0!==e),p=1===c.length&&a.includes(c[0]),m.includes(i.z$1.UC_SCHEMA)||1!==c.length||c.includes(o.h8.CATALOG)||p||m.push(i.z$1.UC_SCHEMA),m.includes(i.z$1.UC_CATALOG)||p||m.push(i.z$1.UC_CATALOG),!m.includes(i.z$1.UC_VOLUME)&&(c.includes(o.h8.VOLUME_DIRECTORY)||c.includes(o.h8.VOLUME_FILE))&&m.push(i.z$1.UC_VOLUME),m)}}),E=1===t.length&&a.includes(t[0]),{data:y,...T}=(0,r.IT)(s,{notifyOnNetworkStatusChange:!0,skip:!E,variables:{numRecents:e,assetTypes:[i.z$1.UC_SCHEMA,i.z$1.UC_CATALOG]}});return{error:h?.useractivityListRecentAssets?.apiError||f,recents:[...h?.useractivityListRecentAssets?.assets?.map(u).filter(e=>!!e)??[],...y?.useractivityListRecentAssets?.assets?.map(u).filter(e=>!!e)??[]],loading:g.loading||T.loading}}function u({asset:e}){if(!e||!e?.name||!e?.type)return null;if(e.type===i.z$1.UC_CATALOG)return{full_name:e.name,name:e.name,securable_type:o.h8.CATALOG,securable_kind:e.unityCatalogSecurable?.securableKind};if(e.type===i.z$1.UC_SCHEMA){let[t,n]=e.name.split(".");return{name:n,catalog_name:t,full_name:e.name,securable_type:o.h8.SCHEMA}}let t=c[e.type];if(t){let[n,r,i]=e.name.split(".");return{full_name:e.name,name:i,catalog_name:n,schema_name:r,securable_kind:e.unityCatalogSecurable?.securableKind,securable_type:t}}return null}let c={[i.z$1.UC_CATALOG]:o.h8.CATALOG,[i.z$1.UC_SCHEMA]:o.h8.SCHEMA,[i.z$1.UC_TABLE]:o.h8.TABLE,[i.z$1.UC_FUNCTION]:o.h8.FUNCTION,[i.z$1.UC_MODEL]:o.h8.MODEL,[i.z$1.UC_VOLUME]:o.h8.VOLUME},d={[o.h8.CATALOG]:i.z$1.UC_CATALOG,[o.h8.SCHEMA]:i.z$1.UC_SCHEMA,[o.h8.TABLE]:i.z$1.UC_TABLE,[o.h8.FUNCTION]:i.z$1.UC_FUNCTION,[o.h8.MODEL]:i.z$1.UC_MODEL,[o.h8.VOLUME]:i.z$1.UC_VOLUME,[o.h8.METRIC_VIEW]:void 0,[o.h8.VOLUME_DIRECTORY]:i.z$1.UC_VOLUME,[o.h8.VOLUME_FILE]:i.z$1.UC_VOLUME}},329427:(e,t,n)=>{n.d(t,{J:()=>r});function r(e){if(e)return`## Image Upload
You can receive images from the user. The user can share images with you by:
* Dragging and dropping an image into the chat input
* Copying an image and pasting it from their clipboard
* Clicking the attach files button in the chat input`;return`## Image Upload
Image upload is not supported. If the user asks about sharing images, let them know that this feature is not available in the current mode.`}},385123:(e,t,n)=>{n.d(t,{Jf:()=>a,o_:()=>o});var r=n(806932);let i=new(n.n(r)()),o=e=>{let t=i.parse(e,{});return(t.find(e=>"fence"===e.type&&"code"===e.tag)?.content??"").trimEnd()},a=(e,t,n)=>{let r=e.trim().match(/^\s*%([\w-]+)(\s|$)/);if(r&&r.length>=2&&["scala","python","r","sql","py","md","markdown","md-sandbox"].includes(r[1])&&!t.includes(`%${r[1]}`)&&!n.includes(`%${r[1]}`))return`%${r[1]}
${t}`;return t}},394917:(e,t,n)=>{n.d(t,{W:()=>a,f:()=>s});var r=n(141078),i=n(441535),o=n(956963);let a=()=>(0,i.W)("databricks.editor.ghostTextWorkspaceEnable",!1)&&(0,i.W)("databricks.conversation.conf.enableGhostText",!0);function s(){let e=a(),t="ghosttext-code-completion",{data:n}=(0,r.IT)(o.Y,{variables:{input:{modelNames:[t],clientId:"inline-completion"}},skip:!e||!(0,i.W)("databricks.fe.enableAssistantModelAvailabilityCheck",!1),fetchPolicy:"cache-first"}),s=(n?.conversationGetModelStatus?.modelStatuses??[]).find(e=>e.name===t);if(!s)return!1;return e&&!!s.isAvailable}},412192:(e,t,n)=>{n.a(e,async(e,r)=>{try{n.d(t,{v:()=>u});var i=n(410268),o=n(93041),a=n(681512),s=n(852504),l=e([o]);function u(e,t){let n=(0,s.Am)();return{getOptions:()=>({...(0,o.FR)(e,t),theme:n!==a.SS&&(0,s.yl)()&&i.sm.isWasmLoaded?n:void 0})}}o=(l.then?(await l)():l)[0],r()}catch(e){r(e)}})},502451:(e,t,n)=>{n.d(t,{N:()=>i});var r=n(441535);function i(){return(0,r.W)("databricks.fe.unifiedTagging.enableGetTagApiForEditorStrikethrough",!1)}},511724:(e,t,n)=>{n.a(e,async(e,r)=>{try{n.r(t),n.d(t,{BUFFER_LINES:()=>A,DragScrollOperation:()=>v,ScrollIntoViewV2:()=>E,_scrollNotebookContainer:()=>p,scrollIntoViewWithRelativeOffset:()=>b,scrollToLine:()=>T,scrollToLineV2:()=>g});var i=n(944464),o=n.n(i),a=n(645696),s=n(748896),l=n(278983),u=n(634685),c=e([a]);a=(c.then?(await c)():c)[0];let A=2;function d(e){return!e.getDomNode}function m(e){if(!e)return null;return e.closest(`.${u.Ay.SCROLL_CONTAINER_CLASS_NAME}`)}function p(e){let t=m(e),n=t?.getBoundingClientRect();if(!n)return;let r=e.closest("[data-notebook-cell=true]")?.querySelector('[data-notebook-cell-toolbar-sticky="true"]'),i=e.closest("[data-notebook-cell=true]")?.querySelector("[data-cell-magic-inline-input]"),o=e.getBoundingClientRect(),a=r?.getBoundingClientRect();if(r&&a&&o.top<a.bottom){let e=a.top<n.top,r=Math.round(e?a.height:a.bottom-o.top);t?.scrollBy?.(0,Math.min(-(0,s.f)(),-r))}if(i){let e=i.getBoundingClientRect();if(0===e.height)return;let r=a?a.bottom:n.top;if(e.top<r){let n=Math.round(r-e.top);t?.scrollBy?.(0,-n)}}if(o.bottom>=n.bottom){let e=Math.round(o.bottom-n.bottom);t?.scrollBy?.(0,Math.min((0,s.f)(),e))}}class v{clientX;clientY;scrollContainerRect;editorRect;getStickyToolbarRect;constructor(e,t,n,r,i){this.scrollContainerRect=n,this.editorRect=r,this.clientX=e,this.clientY=t,this.getStickyToolbarRect=i}shouldTopScroll(){return this.clientY<this.scrollContainerRect.top&&this.editorRect.top<this.scrollContainerRect.top}shouldBottomScroll(){let e=.5*(0,s.f)();return this.clientY>this.scrollContainerRect.bottom-e&&this.editorRect.bottom>this.scrollContainerRect.bottom}getScrollSpeedInLines(){let e=(0,s.f)(),t=this.scrollContainerRect.height/e,n=(this.scrollContainerRect.top-this.clientY)/e;if(n<=1.5)return Math.max(30,t*(1+n));if(n<=3)return Math.max(60,t*(2+n));return Math.max(200,t*(7+n))}getTopScrollAmount(){let e=this.getScrollSpeedInLines(),t=this.getStickyToolbarRect(),n=this.scrollContainerRect.top-e,r=t?t.height:0;if(n<this.editorRect.top+r)return-(this.scrollContainerRect.top-this.editorRect.top+r);if(n<this.editorRect.top)return-(e+r);return-e}getBottomScrollAmount(){return this.getScrollSpeedInLines()}getAdjustedTopHitPosition(){return Math.round(this.scrollContainerRect.y+2*(0,s.f)()+1)}getAdjustedBottomHitPosition(){return Math.round(this.scrollContainerRect.y+this.scrollContainerRect.height-1)}}function h(e,t,n){let r=e.getSelection();if(!r)return;let i=Math.abs(r.startLineNumber-n),o=Math.abs(r.endLineNumber-n);if(i<o){let i=r.setStartPosition(n,t);e.setSelection(i)}else if(o<i){let i=r.setEndPosition(n,t);e.setSelection(i)}}function f(e){return e.getDomNode()?.querySelectorAll("textarea.monaco-mouse-cursor-text")}function g(e,t){if(e.revealLine(t,(0,a.getMonacoApi)().ScrollType.Immediate),d(e))return;e.render();let n=f(e);n&&n?.length>0&&(n[n.length-1].scrollIntoView({behavior:"auto",block:"nearest"}),p(n[n.length-1]))}function E(){let e,t=[],n=null,r=null,i=!1,a=0,s=!1,l=null,u=null;function c(e){u=Math.round(e.clientX),l=Math.round(e.clientY)}function d(){i=!0,document.addEventListener("mousemove",c),s=!0,function t(){if(!i)return;let n=e.getSelection()?.isEmpty();u&&l&&(n?a++:function(e,t,n){let r=e.getDomNode(),i=m(r);if(!r||!i)return;let o=r.getBoundingClientRect(),a=i.getBoundingClientRect(),s=new v(t,n,a,o,()=>{var e;return e=r,e?.closest("[data-notebook-cell=true]")?.querySelector('[data-notebook-cell-toolbar-sticky="true"]')?.getBoundingClientRect()});if(s.shouldTopScroll()){let n=s.getTopScrollAmount();i.scrollBy(0,n);let r=s.getAdjustedTopHitPosition(),o=e.getTargetAtClientPoint(t,r),a=o?.position;a&&h(e,a.column,a.lineNumber)}if(s.shouldBottomScroll()){let n=s.getBottomScrollAmount();i.scrollBy(0,n);let r=s.getAdjustedBottomHitPosition(),o=e.getTargetAtClientPoint(t,r),a=o?.position;a&&h(e,a.column,a.lineNumber)}}(e,u,l)),requestAnimationFrame(t)}()}return{setup:({editorInstance:m})=>{e=m;let p=o()(g,100);t.push(m.onDidChangeCursorPosition(e=>{if(i)return;let t=e.position;if(n===t.lineNumber)return;if(n=t.lineNumber,!m.hasTextFocus()&&3!==e.reason)return;let{lineNumber:r}=t;e.source,p(m,r)})),t.push(m.onMouseDown(e=>{r=setTimeout(d,100)}),m.onMouseUp(e=>{r&&(clearTimeout(r),r=null),i&&(i=!1,u=null,l=null,document.removeEventListener("mousemove",c),s=!1),s&&(document.removeEventListener("mousemove",c),s=!1,y("MouseUpNotDragging",a)),a=0}),m.onDidBlurEditorText(()=>{r&&(clearTimeout(r),r=null),i&&(i=!1,u=null,l=null,document.removeEventListener("mousemove",c),s=!1,y("onBlurDragging",a)),s&&(document.removeEventListener("mousemove",c),s=!1,y("onBlurNotDragging",a)),a=0}))},tearDown:()=>{t.forEach(e=>e.dispose()),t=[],r&&(clearTimeout(r),r=null),i&&(i=!1,document.removeEventListener("mousemove",c),s=!1),s&&(document.removeEventListener("mousemove",c),s=!1,y("TearDownNonDragging",a)),a=0}}}function y(e,t){let n=Math.min(Math.floor(Math.log10(t)),9);(0,l.y)("clientsideEvent",{eventName:`DragScrollHandlerCleanupScenario${e}${0===t?"":`StopCountE${n}`}`,eventType:"DragScrollHandlerCleanup"})}function T(e,t){e.revealLine(t,(0,a.getMonacoApi)().ScrollType.Immediate),setTimeout(function(){if(d(e))return;let t=e.getDomNode()?.getElementsByTagName("textarea");t&&t?.length>0&&t[t.length-1].scrollIntoView({behavior:"auto",block:"nearest"})},100)}function b(e,t=20){let n=f(e);if(!n)return;let r=n[n.length-1],i=m(r),o=r.getBoundingClientRect();if(!i)return;let a=i.getBoundingClientRect(),s=o.top<a.top+t,l=o.bottom>a.bottom-t;s?i.scrollTop-=Math.round(a.top-o.top+t):l&&(i.scrollTop+=Math.round(o.bottom-a.bottom+t))}r()}catch(e){r(e)}})},520640:(e,t,n)=>{n.d(t,{C4:()=>E,fQ:()=>T,wL:()=>y});var r=n(452137),i=n.n(r),o=n(269789),a=n.n(o),s=n(692738),l=n(342411),u=n(595615),c=n(988512),d=n(103341),m=n(710343),p=n(641760);function h(e,t,n,r,i,o,a){try{var s=e[o](a),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(r,i)}function f(){let e=(0,l.tz)();return(0,s.useCallback)(({dataSource:t,catalog:n,schema:r,table:o})=>({queryKey:["describe_detail",n,r,o,(0,m.pl)(t),!!t?.status.isReady],queryFn:()=>{var a;return(a=function*(){if(i()(void 0!==n,"'catalog' must be set"),i()(void 0!==r,"'schema' must be set"),i()(void 0!==o,"'table' must be set"),!(0,p.jN)({catalog:n}))return null;if(t?.status.isReady)try{return yield(0,d.M)({dataSource:t,queryString:(0,c.y)(t).generateDescribeDetailSQL(r,o,n),queryName:"describe_detail"})}catch(e){if(g(e))return null;throw e}if(!t)throw new m.Lx(t,`Data source is required to fetch columns from ${n}.${r}.${o}`);throw new m.Lx(t,e.formatMessage({id:"gUwluy",defaultMessage:"Listing columns requires an active compute resource"}))},function(){var e=this,t=arguments;return new Promise(function(n,r){var i=a.apply(e,t);function o(e){h(i,n,r,o,s,"next",e)}function s(e){h(i,n,r,o,s,"throw",e)}o(void 0)})})()}}),[e])}let g=e=>e?.name==="SqlQueryError"&&e?.message?.includes?.("EXPECT_TABLE_NOT_VIEW.NO_ALTERNATIVE");function E(e,t){let n=f();return(0,u.AO)({...n(e),...t})}function y(){return(0,u.Ox)({queryFn:f})}function T(e){function t(e){let t=Number(e);if(!Number.isFinite(t))return;if(t>Number.MAX_SAFE_INTEGER)return"> 9.0PiB";return a()(t).format("0[.]0ib")}if(e?.sizeInBytes||e?.numFiles)return{bytes:e.sizeInBytes?t(e.sizeInBytes):void 0,files:"number"==typeof e.numFiles?String(e.numFiles):e.numFiles??void 0};if(e?.statistics){let n;if("string"==typeof e.statistics?n=e.statistics.match(/(\d+) bytes/):e.statistics.length>0&&(n=e.statistics.map(e=>e?.[1]?.match?.(/(\d+) bytes/)).find(e=>null!==e)),n)return{bytes:t(n[1])}}return{}}},595615:(e,t,n)=>{n.d(t,{AO:()=>d,Ox:()=>p,RK:()=>f,ic:()=>g,rA:()=>h,uV:()=>m});var r=n(692738),i=n(160603),o=n(441535),a=n(412836),s=n(425373);function l(e,t,n,r,i,o,a){try{var s=e[o](a),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(r,i)}(0,i.setLogger)({log:console.log,warn:console.warn,error:()=>{}});let u={retry:!1,refetchOnWindowFocus:!1,staleTime:3e5},c=new Map;function d(e){let t=(0,o.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),n={...u,...e,enabled:e?.enabled!==!1&&t},r={...u,...e,enabled:e?.enabled!==!1&&!t};c.set(JSON.stringify(e.queryKey),e.queryKey);let s=(0,a.IT)(n),l=(0,i.useQuery)(r);return t?s:l}function m({queries:e}){let t=(0,o.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),n=e.map(e=>({...u,...e,enabled:e?.enabled!==!1&&t})),r=e.map(e=>({...u,...e,enabled:e?.enabled!==!1&&!t}));e.forEach(e=>c.set(JSON.stringify(e.queryKey),e.queryKey));let a=(0,s.E)({queries:n}),l=(0,i.useQueries)(r);return t?a:l}function p({queryFn:e}){let t=(0,o.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),n=(0,i.useQueryClient)(),s=e();return(0,r.useCallback)((e,r={})=>t?a.aH.getActiveValue().fetchQuery({...r,...s(e)},u):n.fetchQuery({...r,...s(e)},u),[s,t,n])}function h(){let[e,t]=(0,r.useState)(0),n=(0,i.useQueryClient)(),s=(0,o.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1);return{invalidate:(e,r)=>{var i;return(i=function*(){t(e=>e+1);try{if(e)yield s?a.aH.getActiveValue().invalidateQueries(e):n.invalidateQueries(e),c.delete(JSON.stringify(e));else{let e=Array.from(c.values()).filter(e=>{if(!Array.isArray(e))return!1;if(!r)return!0;return e.some(e=>"string"==typeof e&&e.includes(r))}).filter(e=>void 0!==e).map(e=>s?a.aH.getActiveValue().invalidateQueries(e):n.invalidateQueries(e));yield Promise.allSettled(e),c=new Map}}finally{t(e=>e-1)}},function(){var e=this,t=arguments;return new Promise(function(n,r){var o=i.apply(e,t);function a(e){l(o,n,r,a,s,"next",e)}function s(e){l(o,n,r,a,s,"throw",e)}a(void 0)})})()},isLoadingInvalidation:e>0}}function f(e){for(let t of e){let e=t.isIdle??void 0;if(!g({isIdle:e,status:t.status??void 0,fetchStatus:t.fetchStatus??void 0}))return!1}return!0}function g(e){let t=(0,o.W)("databricks.fe.schemabrowser.enableSharedMetastoreQuery",!1),n=e.isIdle??!1;if(t)return"fetchStatus"in e&&"loading"===e.status&&"idle"===e.fetchStatus;return n}},596185:(e,t,n)=>{n.d(t,{I:()=>r,d:()=>i});let r=e=>({name:e,signature:e+"()",arguments:[],returnTypes:[],draggable:e+"()",examples:[]}),i=e=>({name:e.name,signature:`${e.name}(${e.input_params?.parameters.map(e=>e.name).join(", ")??""})`,arguments:e.input_params?.parameters.map(e=>[{name:e.name,type:e.type_name}])??[],altArguments:[],description:e.comment,body:e.routine_definition,returnTypes:e.data_type?[e.data_type]:[],returnDoc:"",draggable:`${e.name}()`,described:!1,isWindow:!1,isAggregate:!1,needsDescriptionFetched:!1,examples:[]})},598296:(e,t,n)=>{n.d(t,{an:()=>a,cf:()=>s,yh:()=>l});var r,i,o,a=((r={}).METASTORE="METASTORE",r.CATALOG="CATALOG$",r.DATABASE="DATABASE",r.TABLE="TABLE",r.VIEW="VIEW",r.STORAGE_CREDENTIAL="STORAGE_CREDENTIAL",r.EXTERNAL_LOCATION="EXTERNAL_LOCATION",r.FUNCTION="FUNCTION",r.REGISTERED_MODEL="REGISTERED_MODEL",r.VOLUME="VOLUME",r.CONNECTION="CONNECTION",r.EXTERNAL_METADATA="EXTERNAL_METADATA",r),s=((i={}).ALL="ALL",i.USAGE="USAGE",i.SELECT="SELECT",i.CREATE="CREATE",i.MODIFY="MODIFY",i.READ_METADATA="READ_METADATA",i.READ_FILES="READ_FILES",i.WRITE_FILES="WRITE_FILES",i.CREATE_TABLE="CREATE_TABLE",i.CREATE_MOUNT="CREATE_MOUNT",i.USE_CATALOG="USE_CATALOG",i.USE_SCHEMA="USE_SCHEMA",i.CREATE_SCHEMA="CREATE_SCHEMA",i.CREATE_VIEW="CREATE_VIEW",i.CREATE_FUNCTION="CREATE_FUNCTION",i.CREATE_EXTERNAL_TABLE="CREATE_EXTERNAL_TABLE",i.CREATE_MODEL="CREATE_MODEL",i.EXECUTE="EXECUTE",i.ALL_PRIVILEGES="ALL_PRIVILEGES",i),l=((o={}).NOT_OWNER="NOT_OWNER",o.REQUIRES_ANY_PRIVILEGE="REQUIRES_ANY_PRIVILEGE",o.REQUIRES_ANY_NON_BROWSE_PRIVILEGE="REQUIRES_ANY_NON_BROWSE_PRIVILEGE",o.REQUIRES_PRIVILEGES="REQUIRES_PRIVILEGES",o.NOT_UPDATABLE_IN_CURRENT_WORKSPACE="NOT_UPDATABLE_IN_CURRENT_WORKSPACE",o.DOES_NOT_EXIST="DOES_NOT_EXIST",o)},662237:(e,t,n)=>{n.d(t,{c:()=>o,r:()=>a});var r=n(141078),i=n(707076);let o=(0,r.J1)`
  query listFavoriteAssets($numFavorites: Int!, $assetTypes: [UseractivityAssetType!])
  @component(name: "Lakeview.DatabricksOne")
  @latencyBurnRateAlert(sloTarget: P99, threshold: 2000, minFailures: MIN100, alertSeverity: SEV2) {
    useractivityListFavoriteAssets(
      input: { pageSize: $numFavorites, orderBy: "favorite_time desc", filter: { types: $assetTypes } }
    ) {
      apiError {
        code
      }
      assets {
        asset {
          id
          name
          type
          treeNode {
            fullPath
          }
          unityCatalogSecurable {
            securableKind
          }
        }
        favoriteTime
      }
      recommendationTraceId
    }
  }
`;function a(e,t,n=!1){let s=(0,i.MH)(),{loading:l,data:u,error:c,refetch:d}=(0,r.IT)(o,{notifyOnNetworkStatusChange:!0,skip:n||!s,variables:{numFavorites:e,assetTypes:t}});return{loading:l,favorites:u?.useractivityListFavoriteAssets?.assets?.map(e=>{if(!e?.favoriteTime||!e?.asset?.id||!e?.asset?.name||!e?.asset?.type)return null;return{...e.asset,favoriteTime:e.favoriteTime,id:e.asset.id,name:e.asset.name,type:e.asset.type}}).filter(e=>!!e),error:u?.useractivityListFavoriteAssets?.apiError||c?.networkError,refetch:d,recommendationTraceId:u?.useractivityListFavoriteAssets?.recommendationTraceId??""}}},670874:(e,t,n)=>{n.d(t,{CJ:()=>p,F6:()=>g,Fl:()=>f,RG:()=>d,XD:()=>m,dy:()=>h,lP:()=>c});var r,i,o,a,s,l,u,c=((r={}).Empty="empty",r.Generating="generating",r.Deciding="deciding",r),d=((i={}).ChangeSuggested="Change-Suggested",i.PromptSubmitted="Prompt-Submitted",i.PromptResult="Prompt-Result",i),m=((o={}).AutoRename="autoRename",o.Generate="generate",o.Edit="edit",o.Fix="fix",o.AddComments="addComments",o.Explain="explain",o.Prettify="prettify",o.Optimize="optimize",o),p=((a={}).NoCodeResponse="NoCodeResponse",a.NaturalLanguageResponse="NaturalLanguageResponse",a),h=((s={}).Empty="empty",s.Input="input",s.Modifying="modifying",s.Generating="generating",s.Deciding="deciding",s.Error="error",s.NaturalLanguageResponse="NaturalLanguageResponse",s),f=((l={}).Inline="inline",l.Header="header",l),g=((u={}).PlaceholderLink="placeholderLink",u.LineHintLink="lineHintLink",u.SelectionWidget="selectionWidget",u.KeyboardShortcut="keyboardShortcut",u.KeyboardShortcutInline="keyboardShortcutInline",u.HeaderButton="headerButton",u.ContextMenu="contextMenu",u.EditorCommand="editorCommand",u.CellDivider="cellDivider",u)},761543:(e,t,n)=>{n.d(t,{gc:()=>l,wS:()=>u});var r=n(267647),i=n(169750),o=n(907140),a=n(797500);function s(e,t,n,r,i,o,a){try{var s=e[o](a),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(r,i)}let l=e=>{let{UserReferencedObjects:t=[]}=e;return t.length>0?`Here are details about objects the user referenced in the question: 
${t.map(e=>{var t,n,r,i;switch(e.type){case"table":return(0,o.P)(e.object);case"variable":return(0,a.ui)("python",[e.object]);case"skill":return`Referenced Skill: skill:${e.object.name}:${e.object.path}${e.object.description?` (${e.object.description})`:""}`;case"mlflowEvaluationRun":return t=e.object,[`The user referenced an MLflow Evaluation Run (use readAssetById with assetType="mlflowEvaluationRun", assetId="${t.runId}" to read it).`,`Name: ${t.name}`,`Run ID: ${t.runId}`,t.experimentId&&`Experiment ID: ${t.experimentId}`,t.status&&`Status: ${t.status}`,null!=t.startTime&&`Start Time: ${t.startTime}`,null!=t.endTime&&`End Time: ${t.endTime}`,!!t.metrics?.length&&`Metrics: ${JSON.stringify(t.metrics)}`,t.tags?.length&&`Tags: ${JSON.stringify(t.tags)}`].filter(Boolean).join("\n");case"mlflowDataset":return n=e.object,[`The user referenced an MLflow Dataset (use readAssetById with assetType="mlflowDataset", assetId="${n.datasetId}" to read it).`,`Name: ${n.name}`,`Dataset ID: ${n.datasetId}`,n.experimentId&&`Experiment ID: ${n.experimentId}`,n.description&&`Description: ${n.description}`,n.sourceType&&`Source Type: ${n.sourceType}`].filter(Boolean).join("\n");case"mlflowJudge":return r=e.object,[`The user referenced an MLflow Judge/Scorer (use readAssetById with assetType="mlflowJudge", assetId="${r.experimentId}:${r.scorerId}" to read it).`,`Name: ${r.name}`,`Scorer ID: ${r.scorerId}`,`Experiment ID: ${r.experimentId}`,r.scorerType&&`Scorer Type: ${r.scorerType}`,r.description&&`Description: ${r.description}`].filter(Boolean).join("\n");case"mlflowLabelingSchema":return i=e.object,[`The user referenced an MLflow Labeling Schema (use readAssetById with assetType="mlflowLabelingSchema", assetId="${i.experimentId}:${i.name}" to read it).`,`Name: ${i.name}`,`Type: ${i.type}`,`Experiment ID: ${i.experimentId}`,i.dataType&&`Data Type: ${i.dataType}`,i.instruction&&`Instruction: ${i.instruction}`,!!i.options?.length&&`Options: ${i.options.join(", ")}`,!!i.overrides?.length&&`Overrides: ${JSON.stringify(i.overrides)}`].filter(Boolean).join("\n");default:return"id"in e?`Referenced ${e.type}: ${e.type}:${e.id}:${e.label}`:""}}).join("\n")}
`:""},u=(0,r.N)(i.E.REFERENCE_OBJECT,e=>{var t;return(t=function*(){return(e=>{let{contextObject:t}=e;return{UserReferencedObjects:t.userReferencedObjects}})(e)},function(){var e=this,n=arguments;return new Promise(function(r,i){var o=t.apply(e,n);function a(e){s(o,r,i,a,l,"next",e)}function l(e){s(o,r,i,a,l,"throw",e)}a(void 0)})})()},e=>({includeReferenceObject:!!e.UserReferencedObjects?.length}),l)},777229:(e,t,n)=>{n.d(t,{F:()=>i});var r=n(886100);function i(e,{eventId:t,failExplicitly:n=!1,esComponent:o}){if(!n)return r.iT.sev2(o,"jaws:unreachable-code-path",{unexpectedValue:e,eventId:t}),e;throw Error(`Exhaustive check failed: ${JSON.stringify(e)} is unexpected or it was not exhaustively checked.`)}},780092:(e,t,n)=>{n.d(t,{r:()=>m});var r=n(692738),i=n(483588),o=n(234969),a=n(158555),s=n(662237),l=n(660618),u=n(641760),c=n(927811);let d=["recents","favorites","home"];function m({enabled:e=!1,dedupPriority:t=d}={}){let n=!e,{recents:p,loading:h}=(0,o.C)({selectableTypes:[a.h8.VOLUME],skip:n}),{favorites:f,loading:g}=(0,s.r)(5,[i.z$1.UC_VOLUME],n),E=(0,u.pC)(),{data:y,isLoading:T}=(0,c.Y)({enabled:e&&E}),b=(0,r.useMemo)(()=>{if(!y?.name)return;let e=y.name;return{full_name:`${e}.${l.E2}.${l.$3}`,name:l.$3,catalog_name:e,schema_name:l.E2,securable_type:a.h8.VOLUME,securable_kind:i.T_5.VOLUME_STANDARD}},[y]),A=(0,r.useMemo)(()=>(f??[]).map(e=>{let[t,n,r]=e.name.split(".");return{full_name:e.name,name:r,catalog_name:t,schema_name:n,securable_type:a.h8.VOLUME,securable_kind:i.T_5.VOLUME_STANDARD}}),[f]),v=(0,r.useMemo)(()=>(p??[]).filter(e=>"VOLUME"===e.securable_type),[p]),{home:S,recents:C,favorites:I}=(0,r.useMemo)(()=>{let e=new Set,n={home:[],recents:[],favorites:[]},r={home:b?[b]:[],recents:v,favorites:A};for(let i of t){let t=r[i].filter(t=>!e.has(t.full_name??""));for(let n of t)n.full_name&&e.add(n.full_name);n[i]=t}return n},[b,v,A,t]);return{homeVolume:S[0],favoriteVolumes:I,recentVolumes:C,isLoading:h||g||e&&E&&T,recentsLoading:h,favoritesLoading:g,homeCatalogLoading:T}}},787387:(e,t,n)=>{n.d(t,{E:()=>o});var r=n(774605),i=n(16515);let o=e=>(0,r.IX)({behavior:r.Z4.ipykernelDocstring,sparkVersion:e??""})&&(0,i.CT)()&&(0,i.RP)()},797500:(e,t,n)=>{function r(e){return e.filter(e=>!e.value?.includes("DataFrame")).map(e=>`- Pandas DataFrame '${e.name}', columns = ${e.schema}`)}function i(e){return e.filter(e=>e.value?.includes("DataFrame")).map(e=>`- Spark DataFrame '${e.name}', columns = ${e.value}`)}function o(e,t){if("python"!==e)return"";let n=r(t).join("\n"),o=i(t).join("\n");if(0===n.length&&0===o.length)return"";return`Here are the DataFrames in the session:
${o}
${n}
`}n.d(t,{Mm:()=>r,qG:()=>i,ui:()=>o})},837213:(e,t,n)=>{n.d(t,{Eq:()=>b,Hr:()=>A,Lx:()=>v,nA:()=>y,u4:()=>T});var r=n(692738),i=n(141078),o=n(327152),a=n(441535),s=n(169750),l=n(761543),u=n(267647),c=n(149264),d=n(360217),m=n(570512),p=n(608135),h=n(935963),f=n(329427);function g(e,t,n,r,i,o,a){try{var s=e[o](a),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(r,i)}let E=`You are the Databricks AI Assistant. Your job is to answer user help questions about the Databricks product. Do NOT make assumptions on or discuss the implementation of yourself (the assistant). Today is ${new Date().toDateString()}.`,y=`You may be given document passages that are marked between BEGIN_RELATED_PASSAGES and END_RELATED_PASSAGES.
- Each passage starts with a PASSAGE_START and finishes by PASSAGE_END.
- A passage contains an ID between SOURCE_START: and SOURCE_END.
- A passage contains knowledge between CONTENT_START: and CONTENT_END.

Focus deeply and reply to the original user question based on your native knowledge and the knowledge passages that you think are helpful.
If you use any of these passages for answering the user question, remember their exact ID, as we will use them as references.

Only return the final answer to the user's question and the most relevant references if any below.

Here is the format of the response:
<Add your answer to the question without refering to any document passages>

<Add a maximum of 3 links of the best references. Prioritize SQL queries and Notebook references to be half of them if they are good. Use the Markdown format exactly like below, with \\[\\"\\] as-is as for the name of the link and ID as the actual link value. ID must come from a document passage and might be a URL or path, just keep it exactly the same as you found it. All reference links are on the same line without "References" as prefix. Output nothing if no references>
[\\[\\"\\]](ID) [\\[\\"\\]](ID) [\\[\\"\\]](ID)
`,T=`You MUST cite the most relevant contexts that answer the question. Do not mention any irrelevant contexts. You MUST ADHERE to the following instructions for citing contexts:
- to cite a context, enclose its index located above the summary with curly brackets at the end of the corresponding sentence, for example "Ice is less dense than water{1}{2}." or "Paris is the capital of France{1}{4}{5}."
- NO SPACE between the last word and the citation, and ALWAYS use curly brackets. Only use this format to cite context. NEVER include a References section at the end of your answer.
- to cite a context for a code block, ALWAYS put the citation at the end of the code block with a new line, for example, "\`\`\`python
print('Hello, World!')
\`\`\`
{1}".
- If you don't know the answer or the premise is incorrect, explain why.
If the contexts are empty or unhelpful, DO NOT cite but answer the query as well as you can with existing knowledge.`,b=`
ADD up to 3 follow-ups questions proposing actionable examples not already asked before. Be concise with a maximum of 10 words/70 characters and use imperative form with no question mark. Output nothing if no follow-up questions or in doubt. Use the markdown format like below and do not forget the #followup link. Do not add any sort of section header for this.
[<Add your follow-up>](#followup) [<Add your follow-up>](#followup) [<Add your follow-up>](#followup)
`,A="generalAgent",v=()=>{let e=(0,i.mK)(),t=(0,o.a)(),{canCreate:n}=(0,p.n)({enabled:!0});return(0,r.useMemo)(()=>({agent:{name:A,makeContext:(0,u.x)({makeContext:({context:r,contextConfig:i,userMessage:o,promptId:u})=>{var p;return(p=function*(){let p={index:1,sourceMap:{}},h={contextObject:{...r??{},merlinSupportInfo:{canCreateCase:n}},apolloClient:e,agentName:A,lakesenseTraceId:u??"",userMessage:o,promptBuilderOptions:{isCompletion:(0,a.W)("databricks.fe.editor.enableCitationV2",!1)},citations:p},f={...S,[s.E.ASSISTANT_INSTRUCTIONS]:{enabled:!0},[s.E.MERLIN_SUPPORT]:{enabled:!0},...i},g={[s.E.REFERENCE_OBJECT]:()=>(0,l.wS)({...h}),[s.E.ASSISTANT_INSTRUCTIONS]:()=>(0,c.lx)({...h}),[s.E.MERLIN_SUPPORT]:()=>(0,d.yn)({...h})},E=Object.keys(g).filter(e=>f[e]?.enabled),y=yield Promise.all(E.map(e=>g[e]?.()).filter(e=>void 0!==e)),T=(0,m.Qn)(y);return{...T,citations:p,rawContext:{...T.rawContext,pageId:t?.pageId}}},function(){var e=this,t=arguments;return new Promise(function(n,r){var i=p.apply(e,t);function o(e){g(i,n,r,o,a,"next",e)}function a(e){g(i,n,r,o,a,"throw",e)}o(void 0)})})()},agentName:A}),instructions:e=>E+(e.includes("gpt-4")?(0,a.W)("databricks.fe.editor.enableCitationV2",!1)?`

${T}`:`

${y}`:"")+"\n\n"+(0,f.J)(!1)+(e.includes("gpt-4")?`
${b}`:""),userMessageMatchesAgent:()=>!1,extractHistory:e=>e,get model(){return(0,h.f)()}}}),[e,t?.pageId,n])},S={[s.E.REFERENCE_OBJECT]:{enabled:!0}}},888708:(e,t,n)=>{n.d(t,{s:()=>p});var r=n(250912),i=n.n(r),o=n(441535),a=n(689017),s=n(886100),l=n(22191),u=n(711489),c=n(587122),d=n(44772);let m=/AS\s+\$\$(.*?)\$\$/gis;function p(e){let t=(0,o.W)("databricks.fe.editor.formatter.enableNewSqlFormatter",!1),n="{{"+(0,d.A)()+"}}",r=i()(e),a=[],u=m.exec(r);if(!t){for(;u;)a.push(u[1]),u=m.exec(r);r=r.replace(m,n)}if(r=(0,c.G)(r),t||!a)return h(!1),r;if(!t){let t=0;for(;r.match(n)&&t<a.length;){let e=a[t];r=r.replace(n,t=>"AS $$"+e+"$$"),t++}if(t!==a.length){var p;return p="FormatEmbeddedLangaugeError",s.iT.log(l.Es.Editor,"SqlFormatter",p),e}}return h(!0),r}function h(e){(0,a.wi)({editor_event_log:{editor_formatter_format_sql_log:{event_name:e?u.J5.EditorFormatterFormatSqlEventName.EDITOR_FORMATTER_FORMAT_SQL_EVENT_NAME_FORMAT_SQL_WITH_EMBEDDED_CODE:u.J5.EditorFormatterFormatSqlEventName.EDITOR_FORMATTER_FORMAT_SQL_EVENT_NAME_FORMAT_SQL_NO_EMBEDDED_CODE}}})}},956963:(e,t,n)=>{n.d(t,{Y:()=>i});var r=n(141078);let i=(0,r.J1)`
  query ConversationModelStatus($input: ConversationGetModelStatusRequestInput!)
  @component(name: "Workspace.Assistant") {
    conversationGetModelStatus(input: $input) {
      modelStatuses {
        isAvailable
        name
      }
      apiError {
        code
        message
      }
    }
  }
`},976477:(e,t,n)=>{n.d(t,{$e:()=>A,Cc:()=>b,JE:()=>y,_S:()=>E,fh:()=>v,vd:()=>T});var r=n(692738),i=n(141078),o=n(278983),a=n(837213),s=n(441535),l=n(169750),u=n(21994),c=n(267647),d=n(667936),m=n(222006),p=n(570512),h=n(377936),f=n(935963);function g(e,t,n,r,i,o,a){try{var s=e[o](a),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(r,i)}let E="optimizeProfileAgent",y="/analyze",T="Analyze my profile",b=`You are a Databricks experienced data engineer who is debugging Databricks SQL queries and Python Spark DataFrames to find possible speed optimizations.

<<<Guidelines for Optimizations>>
You have access to the Query Profile top level metrics.

The top level metrics to size the query are:
- "rowsReadCount", "readBytes" (in general 10GB or less is not much data worth mentioning), "readPartitionsCount", "readFilesCount"
- If "totalTimeMs" is under 10000, we can still find optimizations but keep in mind the query is not that big
- If present, the "Costliest Query Operators" will tell in percentage which operations are taking the most time, memory or number of rows (more than 70% is worth mentioning)

The Optimization opportunities we are looking for are in priority:
1. Only related to scans and by modifying the query to read less data:
- Partitions skipped ("readPartitionsCount", "totalPartitionsCount") - do we still read too many partitions?
- Files skipped ("readFilesCount", "totalFilesCount", "prunedFilesCount") - are we still reading too many files?
- Bytes pruned ("readBytes", "prunedBytes") - are still reading too much data?
2. If the first "Costliest Query Operators" are not all "Scan Table", we can suggest optimizations on them
4. Focuses in particular on the WHERE clauses.
3. Never recommend to create indexes, materialized views, or any other database objects

<<<Guidelines for reply message>>
Explain if you see bad scan patterns and suggest optimizations.
- If the query is reading from cache, JUST SAY SO and say you cannot suggest optimizations (otherwise say nothing about it).
- Do not cite any of the Query Profile "metric names" or "Costliest Query Operators", just explain them in human terms (but CITE them as Query Profile relevant contexts).
- Be concise and only talk about optimization opportunities that you have data to back up.
- Use the higher up KB, MB, GB, TB instead of bytes to make it easier to read for humans.
- Have at least one Query Profile citation.

Please use your own judgment as to whether or not you should suggest a new SQL optimized query. In particular, you must follow these guiding principles:
1. Leverage the schema of the active tables, it contains their columns names, types and if they are partitioned or not
2. You might see some examples of SQL queries, especially use their WHERE clauses as inspiration
3. Do not change existing logic that would produce different results
4. Do not change code comments, text case, formatting that are not related to the optimizations

If asked for some follow-up questions and you need inspiration:
1. Recommend more aggressive filters if possible, especially on the partition columns, dates, or other columns with high cardinality
2. For metrics sometimes without a value (e.g. totalPartitionsCount is null), explain the user how to find them
3. Manually inspect more metrics in the query profile panel
`,A=`
You are a Databricks-experienced data engineer specializing in query performance optimization for Databricks SQL and Spark DataFrame workloads.

Your goal: analyze the provided Query Profile and Query Insights to find concrete optimization opportunities focused on reducing data scanned, avoiding expensive operators, and improving WHERE clauses — without changing query logic.

---

<<<Guidelines for Optimization Reasoning>>>

You have access to:
- Query Profile top-level metrics:
  - rowsReadCount, readBytes, readPartitionsCount, readFilesCount
  - Queries under 10 GB read or 10 s runtime are small but can still be optimized.
- Costliest Query Operators:
  - If one operator takes >70% of total time or memory, mention it.
- Query Insights:
  - Automated Databricks recommendations. Always address these first.

Optimization priorities:
1) Query Insights (system recommendations)
   - Each insight includes a suggested action — restate it clearly.
   - Merge any metric-based evidence that supports the same recommendation.
   - Always cite as Query Insight with the provided citation format.
2) Scan-related metrics
   - Look for unskipped partitions, files, or bytes.
   - Discuss whether pruning can be improved via WHERE clause filters.
3) Non-scan operators (e.g., join, aggregation)
   - Only mention if they dominate total runtime.
4) WHERE clause review
   - Suggest tighter filters using existing columns, especially partition columns.
5) Never suggest indexes, materialized views, or any other database objects.

---

<<<Guidelines for Reply Message>>>

Overall structure:
- Output must be in structured bullet points only (no paragraphs). Each bullet must be short, specific, and human-readable.
- Follow the outline below. If no findings exist for a section, omit that section entirely.
- If no Query Insights available, skip the first section and start with Metrics & Scan Patterns.

Output template:
## Query Insights
- Each insight must have its **own bullet point** and a short recommended action.
- Write in the format:
  Observation. → Recommendation.
  Example:
  Partition key unfiltered on birthDate. → Add a filter on birthDate to enable partition pruning and reduce scanned data.
  Optimizer statistics are partial. → Allow predictive optimization to collect stats or trigger manual ANALYZE if needed.
- If metrics support the same insight, merge the metric evidence into the corresponding insight bullet point (e.g., "supported by metrics showing 80% of data read unnecessarily").

## Metrics & Scan Patterns
- [Metric-based findings not already merged with insights, written as: Observation. → Recommendation.]

## Other Observations
- [Optional notes on join, aggregation, or filter logic, written in the same format.]

Merging rules (critical):
- Before generating output, compare all metric findings against the Query Insights.
- If both point to the same optimization (e.g., pruning partitions, filtering dates, skipping small files):
  - Merge them into the Query Insights section only.
- Do not repeat similar content in Metrics & Scan Patterns.

Tone and precision:
- Use human-readable units (KB, MB, GB, TB).
- Avoid using negative terms towards the systems, like "bad", "poor", "limitation" or "inefficient".
- Include at least one Query Profile citation.
- If the query reads from cache, state that and stop — do not continue.
- Do not mention metric or operator names literally; describe them in plain terms.
- Maintain consistent “Observation. → Recommendation.” phrasing in every bullet point.

---

<<<New SQL Optimized Query>>>

If you identified any optimization opportunity that can be safely expressed as a SQL rewrite, you need to output an optimized query. If not, skip this section.

Rules:
- Preserve identical logic and final output (no semantic change).
- You may tighten WHERE clauses, modify function parameter, replace functions, add missing partition filters, or apply safe join/order hints.
  - For partition filters, look at column names and types to be more specific. Do not suggest things like "IS NOT NULL"
- Keep all comments, casing, and formatting.

---

<<<Follow-up Questions (if asked)>>>

- Suggest stronger filters on partitions or dates.
- Explain how to check missing metrics (e.g., totalPartitionsCount).
- Guide the user to manually inspect Query Profile panels.

---

<<<Goal>>>

Deliver concise, sectioned, bullet-pointed recommendations that are:
- Grounded in Query Insights and Profile data.
- Merged intelligently to avoid duplication.
- Include a New SQL Optimized Query when applicable.
`,v=({getTablesInAllCodeBlocks:e,source:t,userId:T,...v})=>{let S=(0,i.mK)();return(0,r.useMemo)(()=>({name:E,makeContext:(0,c.x)({makeContext:({context:t={},userMessage:r,promptId:i})=>{var a;return(a=function*(){let{currentCodeBlock:a={language:"",code:""}}=t??{},{language:c,code:f}=a,g={index:1,sourceMap:{}},{getQueryProfileContext:y,getQueryInsightsContext:b}=yield(()=>{let e=()=>Promise.all([n.e(62280),n.e(62394),n.e(62621),n.e(25230),n.e(84904),n.e(66537)]).then(n.bind(n,731261));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(731261,"../context/configurableContext","lazy",e);return e()})(),A=/^\/analyze Query [0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(r||""),C=[];A&&(C=r?.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i)||[],(0,o.y)("clientsideEvent",{eventType:"optimize-profile",eventName:`analyze-${C.slice(0,1).join(",")}`,lakesenseTraceId:i,source:c}));let I={contextObject:t,apolloClient:S,agentName:E,userMessage:r,lakesenseTraceId:i,statementIds:C,getTablesInAllCodeBlocks:e,citations:g,promptBuilderOptions:{isCompletion:(0,s.W)("databricks.fe.editor.enableCitationV2",!1)},...v},_={[l.E.RELEVANT_TABLE]:()=>(0,u.TN)({...I}),[l.E.QUERY_PROFILE]:()=>y({...I}),[l.E.USER_QUERIES]:()=>(0,d.$O)({...I,userId:T}),[l.E.NOTEBOOK_CELLS]:()=>(0,m.Bc)({...I,userId:T})};(0,h.Yg)()&&(_[l.E.QUERY_INSIGHTS]=()=>b({...I}));let R=yield Promise.all(Object.values(_).map(e=>e())),O=R.filter(e=>""!==e.prompt).map(e=>e.prompt.slice(0,6e3)).join("\n");return{prompt:`Here is the code to optimize: 
\`\`\`${c}
${f}
\`\`\`
${O}`,citations:g,...(0,p.Az)(R)}},function(){var e=this,t=arguments;return new Promise(function(n,r){var i=a.apply(e,t);function o(e){g(i,n,r,o,s,"next",e)}function s(e){g(i,n,r,o,s,"throw",e)}o(void 0)})})()},agentName:E}),userMessageMatchesAgent:e=>e.startsWith(y),extractHistory:()=>[],get model(){return(0,f.f)()},instructions:e=>((0,h.Yg)()?A:b)+(e.includes("gpt-4")?(0,s.W)("databricks.fe.editor.enableCitationV2",!1)?`

${a.u4}`:`

${a.nA}`:"")+(e.includes("gpt-4")?`
${a.Eq}`:"")}),[S,e,v,T])}}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/23130.c151fc872b.chunk.js.map