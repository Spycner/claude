"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[68664],{2382:(e,t,n)=>{n.d(t,{z:()=>s});var i=n(297768),a=n(886100),r=n(22191),o=n(747129);let s=(e,t,n)=>{if(!t)return new Set;let s=new Set([t.IDENTIFIER,t.BACKQUOTED_IDENTIFIER,t.STRING,t.DOUBLEQUOTED_STRING,t.INTEGER_VALUE,t.DECIMAL_VALUE,t.RIGHT_PAREN,t.RIGHT_BRACKET,t.BIGINT_LITERAL,t.SMALLINT_LITERAL,t.TINYINT_LITERAL,t.FLOAT_LITERAL,t.DOUBLE_LITERAL,t.BIGDECIMAL_LITERAL]);try{let l=e?.trim();if(!l)return new Set;let u=i.Zo.fromString(l),c=new t(u);c.removeErrorListeners(),c.addErrorListener({syntaxError:()=>{},reportAttemptingFullContext:()=>{},reportContextSensitivity:()=>{},reportAmbiguity:()=>{}});let d=new i.jB(c);d.fill();let m=new Set,p=t.WS,h=t.WS;for(let e=0;d.get(e).type!==i.ou.EOF;e++){let i=d.get(e);if(i.type===t.SIMPLE_COMMENT||i.type===t.BRACKETED_COMMENT)continue;let a=e>=2&&n(d.get(e-2));if(!s.has(p)&&!a&&h===t.COLON&&i.text){if(i.type===t.IDENTIFIER||n(i))m.add(i.text);else if(i.type===t.BACKQUOTED_IDENTIFIER){let e=i.text,t=e.substring(1,e.length-1);t.trim().length>0&&m.add(t)}}p=h,h=i.type}return a.iT.sev2BurnRate(r.Es.Lakeview,"Lexing query text for SEA parameter markers",o.i1.P99,o.Ip.Min10,!0),m}catch(n){return a.iT.sev2BurnRate(r.Es.Lakeview,"Lexing query text for SEA parameter markers",o.i1.P99,o.Ip.Min10,!1,{error:n,lexer:t?.name,queryText:e}),new Set}}},2769:(e,t,n)=>{n.d(t,{NF:()=>r,NL:()=>s,Nq:()=>o,iI:()=>a,ms:()=>l,n7:()=>i});let i='"Menlo", "Monaco", "Consolas", "Ubuntu Mono", "Source Code Pro", monospace',a=13,r=22,o=16,s=13,l=12},38054:(e,t,n)=>{n.d(t,{Pj:()=>o,nR:()=>s,y$:()=>r});var i=n(371964),a=n(881551);let r=n(353345).y,o=i.Pj,s=a.n},40984:(e,t,n)=>{n.d(t,{S:()=>o,a:()=>r});let i=e=>e.filter(e=>void 0!==e).join(",").toLowerCase(),a=e=>{let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n)|0;return t},r=({query:e,location:t,source:n})=>a(i([e,t?.first_line,t?.first_column,n])),o=({query:e,location:t,catalog:n,schema:r,precedingCreatedIdentifiers:o})=>a(i([e,t?.first_line,t?.first_column,n,r,...o]))},55749:(e,t,n)=>{n.d(t,{F:()=>i,X:()=>a});class i extends Error{constructor(e,t){super(e),this.name="SqlQueryError",this.cause=t}}let a=1e6},134763:(e,t,n)=>{n.d(t,{DY:()=>c,LS:()=>u,sE:()=>l});var i=n(610435),a=n(692738),r=n(394917),o=n(886100),s=n(22191);let l=a.createContext(void 0);function u({children:e}){let t=(0,r.f)();return(0,i.Y)(l.Provider,{value:t,children:e})}function c(){let e=a.useContext(l);if(void 0===e)return o.iT.sev2(s.Es.Editor,"AutoInlineSuggestionContextProvider","useAutoInlineSuggestionEnabled must be used within a AutoInlineSuggestionContextProvider",!0),(0,r.W)();return e}},157817:(e,t,n)=>{n.d(t,{C7:()=>d,Df:()=>r.Df0,N4:()=>r.N4A,Ot:()=>g,R7:()=>h,SA:()=>E,UD:()=>m,Wx:()=>u,_K:()=>y,aR:()=>r.aRi,h2:()=>l,iH:()=>f,ll:()=>s,nG:()=>o,wz:()=>p,zh:()=>c});var i,a=n(551984),r=n(483588);let o=["user","system","assistant","toolInput","toolOutput","reasoning"],s=["cellEdit2","summary","compactionMarker","error"],l=[...o,...s];var u=((i={}).OFF="off",i.USER="user",i.GHOST_TEXT="ghost_text",i.INLINE_QUICK_FIX="inline_quick_fix",i.CELL_MAGIC="cell_magic",i.INLINE_ASSISTANT="inline_assistant",i.CHAT_WINDOW_INSERT="chat_window_insert",i.CHAT_WINDOW_PASTE="chat_window_paste",i.CHAT_WINDOW="chat_window",i.AUTOCOMPLETE="autocomplete",i.ASSISTANT_EDIT="assistant_edit",i.NEXT_EDIT_SUGGESTION="next_edit_suggestion",i.NEXT_EDIT_SUGGESTION_GHOST_TEXT="next_edit_suggestion_ghost_text",i.ASSISTANT_ADD="assistant_add",i.ASSISTANT_DELETE="assistant_delete",i.ASSISTANT_FILE_EDIT="assistant_file_edit",i.UNKNOWN="unknown",i.ASSISTANT_AGENT_EDIT="assistant_agent_edit",i.ASSISTANT_AGENT_ADD="assistant_agent_add",i.ASSISTANT_AGENT_DELETE="assistant_agent_delete",i.AUTOFORMAT="autoformat",i);let c={ghost_text:"#808000",next_edit_suggestion_ghost_text:"#808000",user:"#ff4500",inline_quick_fix:"#c71585",cell_magic:"#00ff00",inline_assistant:"#00ff00",chat_window:"#00ffff",autocomplete:"#0000ff",assistant_edit:"#1e90ff",assistant_agent_edit:"#1e90ff",assistant_add:"#9370db",assistant_agent_add:"#9370db",autoformat:"#ffa500",next_edit_suggestion:"#8b008b"},d=Object.values(u).filter(e=>e.includes("assistant")),m=["assistant_delete","assistant_agent_delete","assistant_add","assistant_agent_add"],p=["Chat","Agent","Planner"],h={CHAT:"Chat",AGENT:"Agent",PLANNER:"Planner"},f=(0,a.Ik)({source:(0,a.gl)().oneOf(Object.values(u)).required(),agent:(0,a.gl)().required(),model:(0,a.gl)().required(),promptId:(0,a.gl)().required(),isPending:(0,a.zM)().notRequired(),isPaste:(0,a.zM)().notRequired(),isExternalPaste:(0,a.zM)().notRequired()}),g=(0,a.Ik)({start:(0,a.ai)().required(),endExclusive:(0,a.ai)().required(),type:(0,a.Yj)().required()}),E=["notebook","dashboard","file","query","app","job"];function y(e){return`inline-assistant:${e.assetType}:${e.assetId}${"notebook"===e.assetType?`:${e.cellNuid}`:""}`}},158555:(e,t,n)=>{n.d(t,{W9:()=>c,h8:()=>s,k4:()=>u,ly:()=>l});var i,a,r,o=n(483588),s=((i={}).CATALOG="CATALOG",i.SCHEMA="SCHEMA",i.TABLE="TABLE",i.FUNCTION="FUNCTION",i.MODEL="MODEL",i.VOLUME="VOLUME",i.VOLUME_DIRECTORY="VOLUME_DIRECTORY",i.VOLUME_FILE="VOLUME_FILE",i.METRIC_VIEW="METRIC_VIEW",i),l=((a={}).SCHEMA="SCHEMA",a.VOLUME="VOLUME",a.VOLUME_DIRECTORY="VOLUME_DIRECTORY",a),u=((r={}).ChildAssets="ChildAssets",r.ParentAsset="ParentAsset",r);let c={all:[],metric_views:[o.T_5.TABLE_METRIC_VIEW]}},162539:(e,t,n)=>{n.d(t,{o:()=>s});var i=n(483588),a=n(441535),r=n(29824);function o(e,t,n,i,a,r,o){try{var s=e[r](o),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(i,a)}let s=(e,t)=>{var n;return(n=function*(){let n=t.query.trim(),{data:o}=yield e.query({query:t.queryDocument,variables:{query:n,filters:{resultTypes:[i.iId.VOLUME],...t.excludeBrowseOnly&&{aclFilter:{allowUcBrowseOnly:!1}}},sortOrder:{criteria:i.noI.NAME,ascending:!0},enableCrossRanking:!!(0,a.W)("databricks.fe.assetSelectors.enableCrossRanking",!1),pageSize:t.pageSize,pageToken:t.pageToken},fetchPolicy:t.fetchPolicy}),s=o?.searchmidtierSearchUnifiedSearch,l=s?.apiError;return{results:(s?.results??[]).flatMap(e=>{let t=(e=>{if(!e)return null;let{name:t,description:n,ucEntityMetadata:i,browseOnly:a}=e,o=i?.catalogName,s=i?.schemaName;if(!t||!o||!s)return null;return{name:t,full_name:[o,s,t].join("."),catalog_name:o,schema_name:s,comment:n??void 0,securable_type:r.an.VOLUME,browse_only:a??!1}})(e);return t?[t]:[]}),nextPageToken:s?.nextPageToken??void 0,apiError:l?{message:l.message??"",code:l.code??""}:null}},function(){var e=this,t=arguments;return new Promise(function(i,a){var r=n.apply(e,t);function s(e){o(r,i,a,s,l,"next",e)}function l(e){o(r,i,a,s,l,"throw",e)}s(void 0)})})()}},204892:(e,t,n)=>{n.d(t,{O:()=>o,P:()=>s});var i=n(278983),a=n(689017),r=n(711489);class o extends Error{status;code;source;data;constructor(e,t,n,i){super(t),this.status=e,this.code=t,this.source=n,this.data=i}}let s=(e,t,n,o,s,l,u)=>{(0,a.wi)({lakesense_log:{event_type:l??r.J5.LakesenseEventType_Type.TYPE_UNSPECIFIED,event_name:`${e}: ${t}`,lakesense_trace_id:s,lakesense_client_id:n,model_type:u}}),(0,i.y)("clientsideEvent",{eventType:"InlineAssistantError",eventName:`${e}: ${t}`,lakesenseTraceId:s,lakesenseClientId:n,modelType:u},o)}},234969:(e,t,n)=>{n.d(t,{C:()=>l});var i=n(141078),a=n(483588),r=n(158555);let o=[r.h8.TABLE,r.h8.FUNCTION,r.h8.MODEL,r.h8.VOLUME,r.h8.METRIC_VIEW],s=(0,i.J1)`
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
`;function l({numRecents:e=5,selectableTypes:t,skip:n=!1}){var c;let m,p,{data:h,error:f,...g}=(0,i.IT)(s,{notifyOnNetworkStatusChange:!0,skip:n,variables:{numRecents:e,assetTypes:(m=(c=t).map(e=>d[e]).filter(e=>void 0!==e),p=1===c.length&&o.includes(c[0]),m.includes(a.z$1.UC_SCHEMA)||1!==c.length||c.includes(r.h8.CATALOG)||p||m.push(a.z$1.UC_SCHEMA),m.includes(a.z$1.UC_CATALOG)||p||m.push(a.z$1.UC_CATALOG),!m.includes(a.z$1.UC_VOLUME)&&(c.includes(r.h8.VOLUME_DIRECTORY)||c.includes(r.h8.VOLUME_FILE))&&m.push(a.z$1.UC_VOLUME),m)}}),E=1===t.length&&o.includes(t[0]),{data:y,...T}=(0,i.IT)(s,{notifyOnNetworkStatusChange:!0,skip:!E,variables:{numRecents:e,assetTypes:[a.z$1.UC_SCHEMA,a.z$1.UC_CATALOG]}});return{error:h?.useractivityListRecentAssets?.apiError||f,recents:[...h?.useractivityListRecentAssets?.assets?.map(u).filter(e=>!!e)??[],...y?.useractivityListRecentAssets?.assets?.map(u).filter(e=>!!e)??[]],loading:g.loading||T.loading}}function u({asset:e}){if(!e||!e?.name||!e?.type)return null;if(e.type===a.z$1.UC_CATALOG)return{full_name:e.name,name:e.name,securable_type:r.h8.CATALOG,securable_kind:e.unityCatalogSecurable?.securableKind};if(e.type===a.z$1.UC_SCHEMA){let[t,n]=e.name.split(".");return{name:n,catalog_name:t,full_name:e.name,securable_type:r.h8.SCHEMA}}let t=c[e.type];if(t){let[n,i,a]=e.name.split(".");return{full_name:e.name,name:a,catalog_name:n,schema_name:i,securable_kind:e.unityCatalogSecurable?.securableKind,securable_type:t}}return null}let c={[a.z$1.UC_CATALOG]:r.h8.CATALOG,[a.z$1.UC_SCHEMA]:r.h8.SCHEMA,[a.z$1.UC_TABLE]:r.h8.TABLE,[a.z$1.UC_FUNCTION]:r.h8.FUNCTION,[a.z$1.UC_MODEL]:r.h8.MODEL,[a.z$1.UC_VOLUME]:r.h8.VOLUME},d={[r.h8.CATALOG]:a.z$1.UC_CATALOG,[r.h8.SCHEMA]:a.z$1.UC_SCHEMA,[r.h8.TABLE]:a.z$1.UC_TABLE,[r.h8.FUNCTION]:a.z$1.UC_FUNCTION,[r.h8.MODEL]:a.z$1.UC_MODEL,[r.h8.VOLUME]:a.z$1.UC_VOLUME,[r.h8.METRIC_VIEW]:void 0,[r.h8.VOLUME_DIRECTORY]:a.z$1.UC_VOLUME,[r.h8.VOLUME_FILE]:a.z$1.UC_VOLUME}},273185:(e,t,n)=>{n.a(e,async(e,i)=>{try{n.d(t,{l:()=>s});var a=n(692738),r=n(645696),o=e([r]);function s({editorInstance:e,autoCompleteProps:t}){let n=t?.callback,i=t?.triggers,o=i?.join("\0")??"";(0,a.useEffect)(()=>{if(!e||!n)return;let t=(0,r.getMonacoApi)(),i=e.getModel();if(!i)return;let a=i.id,s=o?o.split("\0"):[],l=t.registerCompletionItemProvider("sql",{triggerCharacters:s,provideCompletionItems(e,t){if(e.id!==a)return{suggestions:[]};let i=e.getWordUntilPosition(t);return{suggestions:n({model:e,position:t,word:i})}}});return()=>l.dispose()},[e,n,o])}r=(o.then?(await o)():o)[0],i()}catch(e){i(e)}})},329427:(e,t,n)=>{n.d(t,{J:()=>i});function i(e){if(e)return`## Image Upload
You can receive images from the user. The user can share images with you by:
* Dragging and dropping an image into the chat input
* Copying an image and pasting it from their clipboard
* Clicking the attach files button in the chat input`;return`## Image Upload
Image upload is not supported. If the user asks about sharing images, let them know that this feature is not available in the current mode.`}},356579:(e,t,n)=>{n.d(t,{O4:()=>T,om:()=>y});var i=n(610435),a=n(247066),r=n(692738),o=n(886100),s=n(22191),l=n(748592),u=n(759458),c=n(40984),d=n(221095),m=n(105026);let p={max:1e3,ttl:18e6},h=()=>({max:1e3,ttl:18e6,maxSize:(0,m._Z)(),sizeCalculation:d.$}),f=(e={})=>(0,u.Ay)((t,n)=>({module:"default",syntaxParseResultCache:new a.q((0,m.GF)()?h():p),getSyntaxParseResultFromCache:({query:e,location:t,source:i})=>{let a=(0,c.a)({query:e,location:t,source:i}),{syntaxParseResultCache:r}=n(),o=r.get(a);if(!1===o)return null;return o},setSyntaxParseResultInCache:({query:e,location:t,source:i,syntaxError:a})=>{let r=(0,c.a)({query:e,location:t,source:i}),{syntaxParseResultCache:o}=n();o.set(r,a??!1)},tokenParseResultCache:new a.q((0,m.GF)()?h():p),getTokenParseResultFromCache:({query:e,location:t,catalog:i,schema:a,precedingCreatedIdentifiers:r})=>{let o=(0,c.S)({query:e,location:t,catalog:i,schema:a,precedingCreatedIdentifiers:r}),{tokenParseResultCache:s}=n();return s.get(o)},setTokenParseResultInCache:({query:e,location:t,catalog:i,schema:a,tokens:r,precedingCreatedIdentifiers:o})=>{let s=(0,c.S)({query:e,location:t,catalog:i,schema:a,precedingCreatedIdentifiers:o}),{tokenParseResultCache:l}=n();l.set(s,r)},clearTokenParseResultCache:()=>{let{tokenParseResultCache:e}=n();e.clear()},...e})),g=(0,l.W)(()=>f(),!0),E=(0,r.createContext)(null),y=({module:e,children:t})=>{let[n]=(0,r.useState)(()=>f({module:e}));return(0,i.Y)(E.Provider,{value:n,children:t})};function T(e,t){let n,i=(n=(0,r.useContext)(E)??g.getActiveValue(),(0,r.useEffect)(()=>{if("default"===n.getState().module){let e=Error();o.iT.sev3(s.Es.Editor,"EditorSqlGlobalContextStoreProvider not found in the component tree",e.stack)}},[n]),n);return(0,u.Pj)(i,e,t)}},385123:(e,t,n)=>{n.d(t,{Jf:()=>o,o_:()=>r});var i=n(806932);let a=new(n.n(i)()),r=e=>{let t=a.parse(e,{});return(t.find(e=>"fence"===e.type&&"code"===e.tag)?.content??"").trimEnd()},o=(e,t,n)=>{let i=e.trim().match(/^\s*%([\w-]+)(\s|$)/);if(i&&i.length>=2&&["scala","python","r","sql","py","md","markdown","md-sandbox"].includes(i[1])&&!t.includes(`%${i[1]}`)&&!n.includes(`%${i[1]}`))return`%${i[1]}
${t}`;return t}},394917:(e,t,n)=>{n.d(t,{W:()=>o,f:()=>s});var i=n(141078),a=n(441535),r=n(956963);let o=()=>(0,a.W)("databricks.editor.ghostTextWorkspaceEnable",!1)&&(0,a.W)("databricks.conversation.conf.enableGhostText",!0);function s(){let e=o(),t="ghosttext-code-completion",{data:n}=(0,i.IT)(r.Y,{variables:{input:{modelNames:[t],clientId:"inline-completion"}},skip:!e||!(0,a.W)("databricks.fe.enableAssistantModelAvailabilityCheck",!1),fetchPolicy:"cache-first"}),s=(n?.conversationGetModelStatus?.modelStatuses??[]).find(e=>e.name===t);if(!s)return!1;return e&&!!s.isAvailable}},459528:(e,t,n)=>{n.d(t,{E:()=>a,v:()=>r});var i=n(696514);let a=(0,i.fH)("Clusters::ExecuteSql"),r=(0,i.fH)("Clusters::CancelSql")},502451:(e,t,n)=>{n.d(t,{N:()=>a});var i=n(441535);function a(){return(0,i.W)("databricks.fe.unifiedTagging.enableGetTagApiForEditorStrikethrough",!1)}},520640:(e,t,n)=>{n.d(t,{C4:()=>E,fQ:()=>T,wL:()=>y});var i=n(452137),a=n.n(i),r=n(269789),o=n.n(r),s=n(692738),l=n(342411),u=n(595615),c=n(988512),d=n(103341),m=n(710343),p=n(641760);function h(e,t,n,i,a,r,o){try{var s=e[r](o),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(i,a)}function f(){let e=(0,l.tz)();return(0,s.useCallback)(({dataSource:t,catalog:n,schema:i,table:r})=>({queryKey:["describe_detail",n,i,r,(0,m.pl)(t),!!t?.status.isReady],queryFn:()=>{var o;return(o=function*(){if(a()(void 0!==n,"'catalog' must be set"),a()(void 0!==i,"'schema' must be set"),a()(void 0!==r,"'table' must be set"),!(0,p.jN)({catalog:n}))return null;if(t?.status.isReady)try{return yield(0,d.M)({dataSource:t,queryString:(0,c.y)(t).generateDescribeDetailSQL(i,r,n),queryName:"describe_detail"})}catch(e){if(g(e))return null;throw e}if(!t)throw new m.Lx(t,`Data source is required to fetch columns from ${n}.${i}.${r}`);throw new m.Lx(t,e.formatMessage({id:"gUwluy",defaultMessage:"Listing columns requires an active compute resource"}))},function(){var e=this,t=arguments;return new Promise(function(n,i){var a=o.apply(e,t);function r(e){h(a,n,i,r,s,"next",e)}function s(e){h(a,n,i,r,s,"throw",e)}r(void 0)})})()}}),[e])}let g=e=>e?.name==="SqlQueryError"&&e?.message?.includes?.("EXPECT_TABLE_NOT_VIEW.NO_ALTERNATIVE");function E(e,t){let n=f();return(0,u.AO)({...n(e),...t})}function y(){return(0,u.Ox)({queryFn:f})}function T(e){function t(e){let t=Number(e);if(!Number.isFinite(t))return;if(t>Number.MAX_SAFE_INTEGER)return"> 9.0PiB";return o()(t).format("0[.]0ib")}if(e?.sizeInBytes||e?.numFiles)return{bytes:e.sizeInBytes?t(e.sizeInBytes):void 0,files:"number"==typeof e.numFiles?String(e.numFiles):e.numFiles??void 0};if(e?.statistics){let n;if("string"==typeof e.statistics?n=e.statistics.match(/(\d+) bytes/):e.statistics.length>0&&(n=e.statistics.map(e=>e?.[1]?.match?.(/(\d+) bytes/)).find(e=>null!==e)),n)return{bytes:t(n[1])}}return{}}},526147:(e,t,n)=>{n.d(t,{O4:()=>i.O4,g2:()=>a.g,kh:()=>a.k,om:()=>i.om});var i=n(356579),a=n(886493)},538160:(e,t,n)=>{n.d(t,{f:()=>S});var i=n(610435),a=n(956935),r=n(91958),o=n.n(r),s=n(692738),l=n(600295),u=n(464953),c=n(660488),d=n(783772),m=n.n(d),p=n(79128),h=n(687828),f=n(227195),g=n(497895),E=n(943844);let y=u.A.Group,T=e=>{let{theme:t}=(0,g.wn)(),{getPopupContainer:n,getPrefixCls:a}=(0,f.G)(),{type:r,danger:o,disabled:u,loading:d,onClick:T,htmlType:_,children:b,className:A,overlay:I,trigger:v,align:S,open:C,onOpenChange:L,placement:O,getPopupContainer:R,href:w,icon:N=(0,i.Y)(l.A,{}),title:x,buttonsRender:k=e=>e,mouseEnterDelay:D,mouseLeaveDelay:M,overlayClassName:$,overlayStyle:P,destroyPopupOnHide:U,menuButtonLabel:z="Open dropdown",menu:F,leftButtonIcon:q,dropdownMenuRootProps:B,"aria-label":G,componentId:W,analyticsEvents:V,form:j,...Q}=e,H=a("dropdown-button"),Y={align:S,overlay:I,disabled:u,trigger:u?[]:v,onOpenChange:L,getPopupContainer:R||n,mouseEnterDelay:D,mouseLeaveDelay:M,overlayClassName:$,overlayStyle:P,destroyPopupOnHide:U};"open"in e&&(Y.open=C),"placement"in e?Y.placement=O:Y.placement="bottomRight";let[K,J]=k([(0,i.FD)(p.$n,{componentId:W?`${W}.primary_button`:"codegen_design-system_src_design-system_splitbutton_dropdown_dropdownbutton.tsx_148",type:r,form:j,danger:o,disabled:u,loading:d,onClick:T,htmlType:_,href:w,title:x,icon:b&&q?q:void 0,"aria-label":G,size:e.size,css:{borderTopRightRadius:"0 !important",borderBottomRightRadius:"0 !important"},children:[q&&!b?q:void 0,b]}),(0,i.Y)(p.$n,{componentId:W?`${W}.dropdown_button`:"codegen_design-system_src_design-system_splitbutton_dropdown_dropdownbutton.tsx_166",type:r,danger:o,disabled:u,"aria-label":z,size:e.size,css:{borderTopLeftRadius:"0 !important",borderBottomLeftRadius:"0 !important",..."small"===e.size?{"&&&":{paddingLeft:`${t.spacing.xs}px !important`,paddingRight:`${t.spacing.xs}px !important`,width:"24px !important"}}:{}},children:N||(0,i.Y)(E.A,{})})]);return(0,i.FD)(y,{...Q,className:m()(H,A),children:[K,void 0!==I?(0,i.Y)(c.A,{...Y,overlay:I,children:J}):(0,i.FD)(h.Root,{...B,itemHtmlType:"submit"===_?"submit":void 0,children:[(0,i.Y)(h.Trigger,{disabled:u,asChild:!0,children:J}),F&&s.cloneElement(F,{align:F.props.align||"end"})]})]})};var _=n(817262),b=n(429608),A=n(639712);let I={display:"inline-flex",position:"relative",verticalAlign:"middle"},v=o()(function(e,t,n){let i=`.${e}-btn`,r=`.${e}-btn-primary`,o=`.${e}-dropdown-trigger`,s=`.${e}-btn-group-sm`,l={[i]:{...(0,_.o8)(t),boxShadow:t.shadows.xs,height:"small"===n?t.general.iconSize:t.general.heightSm,padding:"4px 12px","&:focus-visible":{outlineStyle:"solid",outlineWidth:"2px",outlineOffset:"-2px",outlineColor:t.colors.actionDefaultBorderFocus},".anticon, &:focus-visible .anticon":{color:t.colors.textSecondary},"&:hover .anticon":{color:t.colors.actionDefaultIconHover},"&:active .anticon":{color:t.colors.actionDefaultIconPress}},[`${i}:first-of-type`]:{borderTopRightRadius:"0px !important",borderBottomRightRadius:"0px !important"},[r]:{...(0,_.p_)(t),boxShadow:t.shadows.xs,"&:first-of-type":{borderRight:`1px solid ${t.colors.actionPrimaryTextDefault}`,marginRight:1},[o]:{borderLeft:`1px solid ${t.colors.actionPrimaryTextDefault}`},"&:focus-visible":{outlineStyle:"solid",outlineWidth:"1px",outlineOffset:"-3px",outlineColor:t.colors.white},".anticon, &:hover .anticon, &:active .anticon, &:focus-visible .anticon":{color:t.colors.actionPrimaryIcon}},[o]:{padding:3,borderLeftColor:"transparent",width:t.general.heightSm},[`&${s}`]:{[o]:{padding:5}},"&&":{[`[disabled], ${r}[disabled]`]:{...(0,_.J5)(t),boxShadow:"none","&:first-of-type":{borderRight:`1px solid ${t.colors.actionPrimaryIcon}`,marginRight:1},[o]:{borderLeft:`1px solid ${t.colors.actionPrimaryIcon}`},".anticon, &:hover .anticon, &:active .anticon, &:focus-visible .anticon":{color:t.colors.actionDisabledText}},[`${r}[disabled]`]:{...(0,_.LM)(t),".anticon, &:hover .anticon, &:active .anticon, &:focus-visible .anticon":{color:t.colors.actionPrimaryTextDefault}}},[`${i}:not(:first-of-type)`]:{width:t.general.heightSm,padding:"3px !important",borderTopLeftRadius:"0px !important",borderBottomLeftRadius:"0px !important"},...(0,b.Cx)(t.options.enableAnimation)},u=(0,A.dg)(l);return(0,a.AH)(u)},(e,t,n)=>`${(0,A.H6)(t)}|${e}|${n??""}|${!!t.options.enableAnimation}`),S=e=>{let{theme:t,classNamePrefix:n}=(0,g.wn)(),{children:a,icon:r,deprecatedMenu:o,type:l,loading:u,loadingButtonStyles:c,placement:d,dangerouslySetAntdProps:m,size:h,...f}=e,y=t.general.iconFontSize+24+2*t.general.borderWidth,[_,A]=(0,s.useState)(y),S=(0,s.useCallback)(e=>{if(void 0===u)return;e&&!u&&A(e.getBoundingClientRect().width)},[u]),L=(0,s.useMemo)(()=>({width:_,fontSize:t.general.iconFontSize,...c}),[_,t.general.iconFontSize,c]),O=(0,s.useMemo)(()=>({fontSize:t.general.iconFontSize}),[t.general.iconFontSize]);return(0,i.Y)(b.wC,{children:(0,i.Y)("div",{ref:S,css:I,children:u?(0,i.Y)(p.$n,{componentId:"codegen_design-system_src_design-system_splitbutton_splitbutton.tsx_163",type:"default"===l?void 0:l,style:L,loading:!0,htmlType:e.htmlType,title:e.title,className:e.className,size:e.size,children:a}):(0,i.Y)(T,{...f,size:e.size,overlay:o,trigger:C,css:v(n,t,h),icon:(0,i.Y)(E.A,{css:O,"aria-hidden":"true"}),placement:d||"bottomRight",type:"default"===l?void 0:l,leftButtonIcon:r,...m,children:a})})})},C=["click"]},569885:(e,t,n)=>{n.d(t,{EY:()=>I,Qw:()=>A,ZP:()=>b,bA:()=>v,ns:()=>_});var i=n(692738),a=n(141078),r=n(837213),o=n(441535),s=n(169750),l=n(21994),u=n(667936),c=n(880797),d=n(267647),m=n(222006),p=n(570512),h=n(935963),f=n(607030),g=n(511022),E=n(629033);function y(e,t,n,i,a,r,o){try{var s=e[r](o),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(i,a)}function T(e){return function(){var t=this,n=arguments;return new Promise(function(i,a){var r=e.apply(t,n);function o(e){y(r,i,a,o,s,"next",e)}function s(e){y(r,i,a,o,s,"throw",e)}o(void 0)})}}let _="/optimize",b="Optimize my code",A=`You are an SQL Analyst and performance expert in Databricks SQL. Your job is first to find some of the following optimizations, then propose a new SQL query in a code block with the optimizations applied.

Please use your own judgment as to whether or not you should suggest the optimizations. In particular, you must follow these guiding principles:
1. Leverage the schema of the active tables, it contains their columns names, types and if they are partitioned or not
2. You might see some examples of SQL queries, especially use their WHERE clauses and SELECT columns as inspiration
3. Check missing WHERE clause on at least one partition column, e.g. "some_partition_column = 'some_value_in_column'"
4. Check missing WHERE clause on at least one date/time column, e.g. not having "some_date_column >= date_sub(current_date(), 30)"
5. If it is a "SELECT *", propose a "SELECT" with a subset of 3-6 popular/useful columns
6. If there is no "LIMIT" propose "LIMIT 1000" to avoid returning too many rows
7. Use Common Table Expressions (CTE) on statement of more than 50 lines or doing sub queries.

Those are the guidelines when rewriting the query if you found some optimizations:
1. EDIT the SQL code with the optimizations, do not just add them as comments
2. Say you could not find optimizations if you can't find any
3. Do not change existing logic that would produce different results
4. Do not change code comments, text case, formatting that are not related to the optimizations
5. "GROUP BY ALL" is a valid SQL syntax shortcut representing all the columns in the SELECT clause
6. DO NOT list or talk about the optimization rules you did not apply in the new code

If asked for some follow-up questions here is some inspiration:
1. Propose to look at more documentation
2. Ask to analyse the query profile
3. Show how to check the query plans with the "EXPLAIN" command
`,I="optimizeCodeAgent",v=({getTablesInAllCodeBlocks:e,source:t,userId:n,...y})=>{let b=(0,a.mK)();return(0,i.useMemo)(()=>({name:I,makeContext:(0,d.x)({makeContext:({context:t={},userMessage:i,promptId:a})=>T(function*(){let{currentCodeBlock:r={language:"",code:""}}=t??{},{language:d,code:_}=r,A={index:1,sourceMap:{}},v={contextObject:t,apolloClient:b,agentName:I,userMessage:i,lakesenseTraceId:a,getTablesInAllCodeBlocks:e,citations:A,promptBuilderOptions:{isCompletion:(0,o.W)("databricks.fe.editor.enableCitationV2",!1)},...y},S={[s.E.RELEVANT_TABLE]:()=>(0,l.TN)({...v}),[s.E.USER_QUERIES]:()=>(0,u.$O)({...v,userId:n}),[s.E.NOTEBOOK_CELLS]:()=>(0,m.Bc)({...v,userId:n}),[s.E.DOCS_SEARCH]:()=>T(function*(){let e=yield(0,g.kA)({model:(0,h.f)(),messageHistory:[],newUserMessage:{role:f.oW.user,content:`The Databricks SQL query is:
\`\`\`sql
${_}
\`\`\`

In two steps:

1. Find 1 to 3 SQL query optimization areas for this particular query:

<possible optimization area 1>
<possible optimization area 2>
<possible optimization area 3>

2. Recommend a Web search query I could use to find documentations for each of those optimization areas.

Reply with only the search queries in this exact format:

<possible search query 1>
<possible search query 2>
<possible search query 3>
`},metadata:{clientId:E.O.EditorAssistant,traceId:a??"",agentName:I},stream:!1}),t=e[0].message.content?.toLowerCase().split("\n").filter(e=>""!==e.trim()).map(e=>`"${e}"`).join(" OR ")??"/optimizer optimize SQL";return(0,c.ar)({...v,query:t})})()},C=yield Promise.all(Object.values(S).map(e=>e())),L=C.filter(e=>""!==e.prompt).map(e=>e.prompt.slice(0,6e3)).join("\n");return{prompt:`Here is the sql code to optimize: 
\`\`\`${d}
${_}
\`\`\`
${L}`,citations:A,...(0,p.Az)(C)}})(),agentName:I}),userMessageMatchesAgent:e=>e.startsWith(_),extractHistory:()=>[],get model(){return(0,h.f)()},instructions:e=>A+(e.includes("gpt-4")?(0,o.W)("databricks.fe.editor.enableCitationV2",!1)?`

${r.u4}`:`

${r.nA}`:"")+(e.includes("gpt-4")?`
${r.Eq}`:""),responseFormat:(0,o.W)("databricks.fe.editor.streamingStructureOutput",!1)?S:void 0}),[b,e,y,n])},S={type:"json_schema",json_schema:{strict:!0,name:"response",schema:{type:"object",properties:{response:{type:"string",description:"Optimized code"},citations:{type:"array",items:{type:"object",properties:{url:{type:"string",description:"Url of the citation, link of the citation"},text:{type:"string",description:"Name of a citation, it can be several words that describe the citation"},type:{type:"string",description:"Type of a citation, it can be a doc, notebook, query ..."}},description:"If you cite anything in the context BEGIN_RELATED_PASSAGES part to generate the optimize code, please provide the citation here",required:["url","text","type"],additionalProperties:!1}}},required:["response","citations"],additionalProperties:!1}}}},586852:(e,t,n)=>{n.d(t,{A:()=>l});var i=n(610435),a=n(692738),r=n(375214);function o(e){return(0,i.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:(0,i.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"m15.06 8.03-7.03 7.03L6.97 14l5.22-5.22H1v-1.5h11.19L6.97 2.06 8.03 1z",clipRule:"evenodd"})})}let s=(0,a.forwardRef)((e,t)=>(0,i.Y)(r.I,{ref:t,...e,component:o}));s.displayName="ArrowRightIcon";let l=s},596185:(e,t,n)=>{n.d(t,{I:()=>i,d:()=>a});let i=e=>({name:e,signature:e+"()",arguments:[],returnTypes:[],draggable:e+"()",examples:[]}),a=e=>({name:e.name,signature:`${e.name}(${e.input_params?.parameters.map(e=>e.name).join(", ")??""})`,arguments:e.input_params?.parameters.map(e=>[{name:e.name,type:e.type_name}])??[],altArguments:[],description:e.comment,body:e.routine_definition,returnTypes:e.data_type?[e.data_type]:[],returnDoc:"",draggable:`${e.name}()`,described:!1,isWindow:!1,isAggregate:!1,needsDescriptionFetched:!1,examples:[]})},598296:(e,t,n)=>{n.d(t,{an:()=>o,cf:()=>s,yh:()=>l});var i,a,r,o=((i={}).METASTORE="METASTORE",i.CATALOG="CATALOG$",i.DATABASE="DATABASE",i.TABLE="TABLE",i.VIEW="VIEW",i.STORAGE_CREDENTIAL="STORAGE_CREDENTIAL",i.EXTERNAL_LOCATION="EXTERNAL_LOCATION",i.FUNCTION="FUNCTION",i.REGISTERED_MODEL="REGISTERED_MODEL",i.VOLUME="VOLUME",i.CONNECTION="CONNECTION",i.EXTERNAL_METADATA="EXTERNAL_METADATA",i),s=((a={}).ALL="ALL",a.USAGE="USAGE",a.SELECT="SELECT",a.CREATE="CREATE",a.MODIFY="MODIFY",a.READ_METADATA="READ_METADATA",a.READ_FILES="READ_FILES",a.WRITE_FILES="WRITE_FILES",a.CREATE_TABLE="CREATE_TABLE",a.CREATE_MOUNT="CREATE_MOUNT",a.USE_CATALOG="USE_CATALOG",a.USE_SCHEMA="USE_SCHEMA",a.CREATE_SCHEMA="CREATE_SCHEMA",a.CREATE_VIEW="CREATE_VIEW",a.CREATE_FUNCTION="CREATE_FUNCTION",a.CREATE_EXTERNAL_TABLE="CREATE_EXTERNAL_TABLE",a.CREATE_MODEL="CREATE_MODEL",a.EXECUTE="EXECUTE",a.ALL_PRIVILEGES="ALL_PRIVILEGES",a),l=((r={}).NOT_OWNER="NOT_OWNER",r.REQUIRES_ANY_PRIVILEGE="REQUIRES_ANY_PRIVILEGE",r.REQUIRES_ANY_NON_BROWSE_PRIVILEGE="REQUIRES_ANY_NON_BROWSE_PRIVILEGE",r.REQUIRES_PRIVILEGES="REQUIRES_PRIVILEGES",r.NOT_UPDATABLE_IN_CURRENT_WORKSPACE="NOT_UPDATABLE_IN_CURRENT_WORKSPACE",r.DOES_NOT_EXIST="DOES_NOT_EXIST",r)},608135:(e,t,n)=>{n.d(t,{n:()=>s});var i=n(692738),a=n(441535),r=n(845690),o=n(844760);let s=({enabled:e})=>{let t=(0,a.W)("databricks.conversation.support.isMerlinEnabled",!1)&&!(0,a.W)("databricks.fe.support.isKillSwitchEnabled",!1),n=(0,a.W)("databricks.fe.support.canCreateCaseCacheDurationSeconds",3600),s=(0,a.W)("databricks.fe.support.overrideHavingMerlinSupportEnabled",!1),l=(0,a.W)("databricks.fe.support.useNewInProductSupportService",!1),[u,c]=(0,r.Mj)({key:"can-create-case",version:1,initialValue:!1}),[d,m]=(0,r.Mj)({key:"account-support-tier",version:1,initialValue:""}),[p,h]=(0,r.Mj)({key:"preferred-time-of-engagement",version:1,initialValue:""}),[f,g]=(0,r.Mj)({key:"can-create-case_last-fetch-time",version:1,initialValue:0}),E=e&&t&&!s;if((0,i.useEffect)(()=>{if(!E)return;let e=new Date().getTime();e-f>=1e3*n&&(0,o.S)(l?"/ajax-api/2.0/in-product-support/user-info":"/ajax-api/2.0/support/case/can-create").then(e=>e.ok?e.json():Promise.reject()).then(t=>{c(t.can_create_support_case),m(t.account_support_tier??""),h(t.preferred_time_of_engagement??""),g(e)}).catch(()=>c(!1))},[g,c,m,h,n,f,E,l]),s)return{canCreate:!0,accountSupportTier:"Production",preferredTimeOfEngagement:"US - Pacific Time",setPreferredTimeOfEngagement:h,isLoading:!1,isOverriden:!0};return{canCreate:u,accountSupportTier:d,preferredTimeOfEngagement:p,setPreferredTimeOfEngagement:h,isLoading:!1,isOverriden:!1}}},662237:(e,t,n)=>{n.d(t,{c:()=>r,r:()=>o});var i=n(141078),a=n(707076);let r=(0,i.J1)`
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
`;function o(e,t,n=!1){let s=(0,a.MH)(),{loading:l,data:u,error:c,refetch:d}=(0,i.IT)(r,{notifyOnNetworkStatusChange:!0,skip:n||!s,variables:{numFavorites:e,assetTypes:t}});return{loading:l,favorites:u?.useractivityListFavoriteAssets?.assets?.map(e=>{if(!e?.favoriteTime||!e?.asset?.id||!e?.asset?.name||!e?.asset?.type)return null;return{...e.asset,favoriteTime:e.favoriteTime,id:e.asset.id,name:e.asset.name,type:e.asset.type}}).filter(e=>!!e),error:u?.useractivityListFavoriteAssets?.apiError||c?.networkError,refetch:d,recommendationTraceId:u?.useractivityListFavoriteAssets?.recommendationTraceId??""}}},670874:(e,t,n)=>{n.d(t,{CJ:()=>p,F6:()=>g,Fl:()=>f,RG:()=>d,XD:()=>m,dy:()=>h,lP:()=>c});var i,a,r,o,s,l,u,c=((i={}).Empty="empty",i.Generating="generating",i.Deciding="deciding",i),d=((a={}).ChangeSuggested="Change-Suggested",a.PromptSubmitted="Prompt-Submitted",a.PromptResult="Prompt-Result",a),m=((r={}).AutoRename="autoRename",r.Generate="generate",r.Edit="edit",r.Fix="fix",r.AddComments="addComments",r.Explain="explain",r.Prettify="prettify",r.Optimize="optimize",r),p=((o={}).NoCodeResponse="NoCodeResponse",o.NaturalLanguageResponse="NaturalLanguageResponse",o),h=((s={}).Empty="empty",s.Input="input",s.Modifying="modifying",s.Generating="generating",s.Deciding="deciding",s.Error="error",s.NaturalLanguageResponse="NaturalLanguageResponse",s),f=((l={}).Inline="inline",l.Header="header",l),g=((u={}).PlaceholderLink="placeholderLink",u.LineHintLink="lineHintLink",u.SelectionWidget="selectionWidget",u.KeyboardShortcut="keyboardShortcut",u.KeyboardShortcutInline="keyboardShortcutInline",u.HeaderButton="headerButton",u.ContextMenu="contextMenu",u.EditorCommand="editorCommand",u.CellDivider="cellDivider",u)},743603:(e,t,n)=>{n.a(e,async(e,i)=>{try{n.d(t,{O:()=>l});var a=n(692738),r=n(698744),o=n(214056),s=e([o]);o=(s.then?(await s)():s)[0];let l=({editorInstance:e,placeholder:t,isEnabled:n,showOnlyWhenFocused:i})=>{let s=(0,a.useRef)(null),l=(0,a.useCallback)(e=>{if(!s.current){let n=document.createElement("div");n.setAttribute("style",e),n.setAttribute("class","monaco-placeholder"),(0,r.render)(t,n),s.current=n}let n=s.current;return{getId:()=>"placeholder",suppressMouseDown:!0,getDomNode:()=>n,getPosition:()=>({position:{column:1,lineNumber:1},positionAffinity:4,preference:[0]})}},[t]),u=(0,a.useRef)(null);return(0,a.useEffect)(()=>{if(e&&n){let t=()=>{u.current&&e.removeContentWidget(u.current),u.current=null},n=()=>{if(!e.getValue()&&(!i||e.hasTextFocus()))if(u.current)e.layoutContentWidget(u.current);else{let t=l(`width: max-content;
color: var(--vscode-input-placeholderForeground);
line-height: ${e.getOption((0,o.Q)().EditorOption.lineHeight)}px;
font-size: ${e.getOption((0,o.Q)().EditorOption.fontSize)}px;
font-family: ${e.getOption((0,o.Q)().EditorOption.fontFamily)};
`);e.addContentWidget(t),u.current=t}else t()};(!i||e.hasTextFocus())&&n();let a=[];return a.push(e.onDidFocusEditorText(()=>n())),a.push(e.onDidBlurEditorText(()=>n())),a.push(e.onDidChangeModelContent(()=>{n()})),()=>{a.forEach(e=>e.dispose()),t(),s.current&&((0,r.unmountComponentAtNode)(s.current),s.current=null)}}},[e,n,l,i]),{placeholderWidgetRef:u}};i()}catch(e){i(e)}})},761543:(e,t,n)=>{n.d(t,{gc:()=>l,wS:()=>u});var i=n(267647),a=n(169750),r=n(907140),o=n(797500);function s(e,t,n,i,a,r,o){try{var s=e[r](o),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(i,a)}let l=e=>{let{UserReferencedObjects:t=[]}=e;return t.length>0?`Here are details about objects the user referenced in the question: 
${t.map(e=>{var t,n,i,a;switch(e.type){case"table":return(0,r.P)(e.object);case"variable":return(0,o.ui)("python",[e.object]);case"skill":return`Referenced Skill: skill:${e.object.name}:${e.object.path}${e.object.description?` (${e.object.description})`:""}`;case"mlflowEvaluationRun":return t=e.object,[`The user referenced an MLflow Evaluation Run (use readAssetById with assetType="mlflowEvaluationRun", assetId="${t.runId}" to read it).`,`Name: ${t.name}`,`Run ID: ${t.runId}`,t.experimentId&&`Experiment ID: ${t.experimentId}`,t.status&&`Status: ${t.status}`,null!=t.startTime&&`Start Time: ${t.startTime}`,null!=t.endTime&&`End Time: ${t.endTime}`,!!t.metrics?.length&&`Metrics: ${JSON.stringify(t.metrics)}`,t.tags?.length&&`Tags: ${JSON.stringify(t.tags)}`].filter(Boolean).join("\n");case"mlflowDataset":return n=e.object,[`The user referenced an MLflow Dataset (use readAssetById with assetType="mlflowDataset", assetId="${n.datasetId}" to read it).`,`Name: ${n.name}`,`Dataset ID: ${n.datasetId}`,n.experimentId&&`Experiment ID: ${n.experimentId}`,n.description&&`Description: ${n.description}`,n.sourceType&&`Source Type: ${n.sourceType}`].filter(Boolean).join("\n");case"mlflowJudge":return i=e.object,[`The user referenced an MLflow Judge/Scorer (use readAssetById with assetType="mlflowJudge", assetId="${i.experimentId}:${i.scorerId}" to read it).`,`Name: ${i.name}`,`Scorer ID: ${i.scorerId}`,`Experiment ID: ${i.experimentId}`,i.scorerType&&`Scorer Type: ${i.scorerType}`,i.description&&`Description: ${i.description}`].filter(Boolean).join("\n");case"mlflowLabelingSchema":return a=e.object,[`The user referenced an MLflow Labeling Schema (use readAssetById with assetType="mlflowLabelingSchema", assetId="${a.experimentId}:${a.name}" to read it).`,`Name: ${a.name}`,`Type: ${a.type}`,`Experiment ID: ${a.experimentId}`,a.dataType&&`Data Type: ${a.dataType}`,a.instruction&&`Instruction: ${a.instruction}`,!!a.options?.length&&`Options: ${a.options.join(", ")}`,!!a.overrides?.length&&`Overrides: ${JSON.stringify(a.overrides)}`].filter(Boolean).join("\n");default:return"id"in e?`Referenced ${e.type}: ${e.type}:${e.id}:${e.label}`:""}}).join("\n")}
`:""},u=(0,i.N)(a.E.REFERENCE_OBJECT,e=>{var t;return(t=function*(){return(e=>{let{contextObject:t}=e;return{UserReferencedObjects:t.userReferencedObjects}})(e)},function(){var e=this,n=arguments;return new Promise(function(i,a){var r=t.apply(e,n);function o(e){s(r,i,a,o,l,"next",e)}function l(e){s(r,i,a,o,l,"throw",e)}o(void 0)})})()},e=>({includeReferenceObject:!!e.UserReferencedObjects?.length}),l)},777229:(e,t,n)=>{n.d(t,{F:()=>a});var i=n(886100);function a(e,{eventId:t,failExplicitly:n=!1,esComponent:r}){if(!n)return i.iT.sev2(r,"jaws:unreachable-code-path",{unexpectedValue:e,eventId:t}),e;throw Error(`Exhaustive check failed: ${JSON.stringify(e)} is unexpected or it was not exhaustively checked.`)}},780092:(e,t,n)=>{n.d(t,{r:()=>m});var i=n(692738),a=n(483588),r=n(234969),o=n(158555),s=n(662237),l=n(660618),u=n(641760),c=n(927811);let d=["recents","favorites","home"];function m({enabled:e=!1,dedupPriority:t=d}={}){let n=!e,{recents:p,loading:h}=(0,r.C)({selectableTypes:[o.h8.VOLUME],skip:n}),{favorites:f,loading:g}=(0,s.r)(5,[a.z$1.UC_VOLUME],n),E=(0,u.pC)(),{data:y,isLoading:T}=(0,c.Y)({enabled:e&&E}),_=(0,i.useMemo)(()=>{if(!y?.name)return;let e=y.name;return{full_name:`${e}.${l.E2}.${l.$3}`,name:l.$3,catalog_name:e,schema_name:l.E2,securable_type:o.h8.VOLUME,securable_kind:a.T_5.VOLUME_STANDARD}},[y]),b=(0,i.useMemo)(()=>(f??[]).map(e=>{let[t,n,i]=e.name.split(".");return{full_name:e.name,name:i,catalog_name:t,schema_name:n,securable_type:o.h8.VOLUME,securable_kind:a.T_5.VOLUME_STANDARD}}),[f]),A=(0,i.useMemo)(()=>(p??[]).filter(e=>"VOLUME"===e.securable_type),[p]),{home:I,recents:v,favorites:S}=(0,i.useMemo)(()=>{let e=new Set,n={home:[],recents:[],favorites:[]},i={home:_?[_]:[],recents:A,favorites:b};for(let a of t){let t=i[a].filter(t=>!e.has(t.full_name??""));for(let n of t)n.full_name&&e.add(n.full_name);n[a]=t}return n},[_,A,b,t]);return{homeVolume:I[0],favoriteVolumes:S,recentVolumes:v,isLoading:h||g||e&&E&&T,recentsLoading:h,favoritesLoading:g,homeCatalogLoading:T}}},797500:(e,t,n)=>{function i(e){return e.filter(e=>!e.value?.includes("DataFrame")).map(e=>`- Pandas DataFrame '${e.name}', columns = ${e.schema}`)}function a(e){return e.filter(e=>e.value?.includes("DataFrame")).map(e=>`- Spark DataFrame '${e.name}', columns = ${e.value}`)}function r(e,t){if("python"!==e)return"";let n=i(t).join("\n"),r=a(t).join("\n");if(0===n.length&&0===r.length)return"";return`Here are the DataFrames in the session:
${r}
${n}
`}n.d(t,{Mm:()=>i,qG:()=>a,ui:()=>r})},804806:(e,t,n)=>{n.a(e,async(e,i)=>{try{n.r(t),n.d(t,{ExpressionEditor:()=>h});var a=n(610435),r=n(692738),o=n(497895),s=n(382908),l=n(731392),u=n(645696),c=n(342411),d=n(449532),m=n(273185),p=e([l,u,m]);[l,u,m]=p.then?(await p)():p;let f="lakeviewCustomCalcExpressionEditor";function h({value:e,onValueChange:t,ariaLabel:n,canEdit:i,overrideStyles:p,onFocus:g,placeholderExpression:E="COUNT(*)",autoCompleteProps:y}){let T=(0,r.useRef)(e),_=(0,r.useCallback)(()=>({getOptions:()=>({language:"sql",ariaLabel:n,value:T.current})}),[n]),[b,A]=(0,r.useState)(),I=(0,r.useCallback)(e=>{t(e)},[t]);(0,l.useTrackChangesPlugin)({editorInstance:b,value:e,onValueChange:I}),(0,l.useRemoveCommandPalettePlugin)({editorInstance:b}),(0,m.l)({editorInstance:b,autoCompleteProps:y}),(0,r.useEffect)(()=>{if(!b||!g)return;let e=b.onDidFocusEditorText(g);return()=>e.dispose()},[b,g]),(0,l.useLogMonacoFindActionsPlugin)({editorInstance:b,findKeybindingsEnabled:!0,module:f}),(0,l.useFixDefaultKeybindingsWithMultipleEditorsPlugin)(f,b);let v=(0,a.Y)("div",{className:"monaco-placeholder",style:{fontSize:"12px",lineHeight:"18px"},children:E});(0,l.usePlaceholderPlugin)({editorInstance:b,placeholder:v,isEnabled:i});let{theme:S}=(0,o.wn)(),C=(0,r.useMemo)(()=>[_(),(0,l.DarkModePlugin)(S.isDarkMode),(0,l.ErrorHandlerPlugin)(f),(0,l.GlobalSearchPlugin)(),(0,l.ReadOnlyPlugin)(!i),(0,l.FormatSQLCodePlugin)({moduleName:f}),(0,l.CustomSQLSyntaxPlugin)()],[_,i,S.isDarkMode]),L=(0,u.getEditor)().UnifiedEditor;return(0,a.FD)(a.FK,{children:[(0,a.Y)(s.o.Text,{size:"sm",color:"secondary",children:(0,a.Y)(c.sA,{id:"CC3JDT",defaultMessage:"Write a SQL expression to define your custom calculation."})}),(0,a.Y)(d.v,{css:{...p},children:(0,a.Y)(L,{onEditorInstanceChange:A,type:"codeEditor",plugins:C,defaultOptions:{lineNumbers:"off",lineDecorationsWidth:S.spacing.sm,glyphMargin:!1,overviewRulerLanes:0,scrollbar:{verticalScrollbarSize:S.spacing.xs,horizontalScrollbarSize:S.spacing.xs}}})})]})}i()}catch(e){i(e)}})},837213:(e,t,n)=>{n.d(t,{Eq:()=>_,Hr:()=>b,Lx:()=>A,nA:()=>y,u4:()=>T});var i=n(692738),a=n(141078),r=n(327152),o=n(441535),s=n(169750),l=n(761543),u=n(267647),c=n(149264),d=n(360217),m=n(570512),p=n(608135),h=n(935963),f=n(329427);function g(e,t,n,i,a,r,o){try{var s=e[r](o),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(i,a)}let E=`You are the Databricks AI Assistant. Your job is to answer user help questions about the Databricks product. Do NOT make assumptions on or discuss the implementation of yourself (the assistant). Today is ${new Date().toDateString()}.`,y=`You may be given document passages that are marked between BEGIN_RELATED_PASSAGES and END_RELATED_PASSAGES.
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
If the contexts are empty or unhelpful, DO NOT cite but answer the query as well as you can with existing knowledge.`,_=`
ADD up to 3 follow-ups questions proposing actionable examples not already asked before. Be concise with a maximum of 10 words/70 characters and use imperative form with no question mark. Output nothing if no follow-up questions or in doubt. Use the markdown format like below and do not forget the #followup link. Do not add any sort of section header for this.
[<Add your follow-up>](#followup) [<Add your follow-up>](#followup) [<Add your follow-up>](#followup)
`,b="generalAgent",A=()=>{let e=(0,a.mK)(),t=(0,r.a)(),{canCreate:n}=(0,p.n)({enabled:!0});return(0,i.useMemo)(()=>({agent:{name:b,makeContext:(0,u.x)({makeContext:({context:i,contextConfig:a,userMessage:r,promptId:u})=>{var p;return(p=function*(){let p={index:1,sourceMap:{}},h={contextObject:{...i??{},merlinSupportInfo:{canCreateCase:n}},apolloClient:e,agentName:b,lakesenseTraceId:u??"",userMessage:r,promptBuilderOptions:{isCompletion:(0,o.W)("databricks.fe.editor.enableCitationV2",!1)},citations:p},f={...I,[s.E.ASSISTANT_INSTRUCTIONS]:{enabled:!0},[s.E.MERLIN_SUPPORT]:{enabled:!0},...a},g={[s.E.REFERENCE_OBJECT]:()=>(0,l.wS)({...h}),[s.E.ASSISTANT_INSTRUCTIONS]:()=>(0,c.lx)({...h}),[s.E.MERLIN_SUPPORT]:()=>(0,d.yn)({...h})},E=Object.keys(g).filter(e=>f[e]?.enabled),y=yield Promise.all(E.map(e=>g[e]?.()).filter(e=>void 0!==e)),T=(0,m.Qn)(y);return{...T,citations:p,rawContext:{...T.rawContext,pageId:t?.pageId}}},function(){var e=this,t=arguments;return new Promise(function(n,i){var a=p.apply(e,t);function r(e){g(a,n,i,r,o,"next",e)}function o(e){g(a,n,i,r,o,"throw",e)}r(void 0)})})()},agentName:b}),instructions:e=>E+(e.includes("gpt-4")?(0,o.W)("databricks.fe.editor.enableCitationV2",!1)?`

${T}`:`

${y}`:"")+"\n\n"+(0,f.J)(!1)+(e.includes("gpt-4")?`
${_}`:""),userMessageMatchesAgent:()=>!1,extractHistory:e=>e,get model(){return(0,h.f)()}}}),[e,t?.pageId,n])},I={[s.E.REFERENCE_OBJECT]:{enabled:!0}}},866153:(e,t,n)=>{n.d(t,{I:()=>a,w:()=>i});let i=(e,t)=>e.type>=t.ACCESS&&e.type<=t.ZONE,a=(e,t)=>e.type>=t.ADD&&e.type<=t.ZONE},886493:(e,t,n)=>{n.d(t,{g:()=>r,k:()=>o});var i=n(102876),a=n(356579);let r=()=>{let[e,t]=(0,a.O4)(e=>[e.getSyntaxParseResultFromCache,e.setSyntaxParseResultInCache],i.x);return[e,t]},o=()=>{let[e,t]=(0,a.O4)(e=>[e.getTokenParseResultFromCache,e.setTokenParseResultInCache],i.x);return[e,t]}},923509:(e,t,n)=>{n.d(t,{kX:()=>o,vV:()=>l,vZ:()=>s});var i,a,r,o=((i={}).String="String",i.Integer="Integer",i.Decimal="Decimal",i.Date="Date",i.Timestamp="Timestamp",i.Range="Range",i),s=((a={}).Text="Text",a.Dropdown="Dropdown",a.Range="Range",a.Dynamic="Dynamic",a),l=((r={}).Range="Range",r.Array="Array",r)},927811:(e,t,n)=>{n.d(t,{Y:()=>l});var i=n(686560),a=n(595615),r=n(302118),o=n(641760);function s(e,t,n,i,a,r,o){try{var s=e[r](o),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(i,a)}function l(e){let t=(0,i.d)("currentWorkspaceId","");return(0,a.AO)({queryKey:["get_or_create_user_home_catalog",t],queryFn:function(){var e;return(e=function*(){let e=yield r.k.getOrCreateUserHomeCatalog(Number(t));return e?.catalog_info},function(){var t=this,n=arguments;return new Promise(function(i,a){var r=e.apply(t,n);function o(e){s(r,i,a,o,l,"next",e)}function l(e){s(r,i,a,o,l,"throw",e)}o(void 0)})})()},refetchOnWindowFocus:!1,enabled:(0,o.ei)()&&!!t,...e})}},956963:(e,t,n)=>{n.d(t,{Y:()=>a});var i=n(141078);let a=(0,i.J1)`
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
`},976477:(e,t,n)=>{n.d(t,{$e:()=>b,Cc:()=>_,JE:()=>y,_S:()=>E,fh:()=>A,vd:()=>T});var i=n(692738),a=n(141078),r=n(278983),o=n(837213),s=n(441535),l=n(169750),u=n(21994),c=n(267647),d=n(667936),m=n(222006),p=n(570512),h=n(377936),f=n(935963);function g(e,t,n,i,a,r,o){try{var s=e[r](o),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(i,a)}let E="optimizeProfileAgent",y="/analyze",T="Analyze my profile",_=`You are a Databricks experienced data engineer who is debugging Databricks SQL queries and Python Spark DataFrames to find possible speed optimizations.

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
`,b=`
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
`,A=({getTablesInAllCodeBlocks:e,source:t,userId:T,...A})=>{let I=(0,a.mK)();return(0,i.useMemo)(()=>({name:E,makeContext:(0,c.x)({makeContext:({context:t={},userMessage:i,promptId:a})=>{var o;return(o=function*(){let{currentCodeBlock:o={language:"",code:""}}=t??{},{language:c,code:f}=o,g={index:1,sourceMap:{}},{getQueryProfileContext:y,getQueryInsightsContext:_}=yield(()=>{let e=()=>Promise.all([n.e(62280),n.e(62394),n.e(62621),n.e(25230),n.e(84904),n.e(66537)]).then(n.bind(n,731261));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(731261,"../context/configurableContext","lazy",e);return e()})(),b=/^\/analyze Query [0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(i||""),v=[];b&&(v=i?.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i)||[],(0,r.y)("clientsideEvent",{eventType:"optimize-profile",eventName:`analyze-${v.slice(0,1).join(",")}`,lakesenseTraceId:a,source:c}));let S={contextObject:t,apolloClient:I,agentName:E,userMessage:i,lakesenseTraceId:a,statementIds:v,getTablesInAllCodeBlocks:e,citations:g,promptBuilderOptions:{isCompletion:(0,s.W)("databricks.fe.editor.enableCitationV2",!1)},...A},C={[l.E.RELEVANT_TABLE]:()=>(0,u.TN)({...S}),[l.E.QUERY_PROFILE]:()=>y({...S}),[l.E.USER_QUERIES]:()=>(0,d.$O)({...S,userId:T}),[l.E.NOTEBOOK_CELLS]:()=>(0,m.Bc)({...S,userId:T})};(0,h.Yg)()&&(C[l.E.QUERY_INSIGHTS]=()=>_({...S}));let L=yield Promise.all(Object.values(C).map(e=>e())),O=L.filter(e=>""!==e.prompt).map(e=>e.prompt.slice(0,6e3)).join("\n");return{prompt:`Here is the code to optimize: 
\`\`\`${c}
${f}
\`\`\`
${O}`,citations:g,...(0,p.Az)(L)}},function(){var e=this,t=arguments;return new Promise(function(n,i){var a=o.apply(e,t);function r(e){g(a,n,i,r,s,"next",e)}function s(e){g(a,n,i,r,s,"throw",e)}r(void 0)})})()},agentName:E}),userMessageMatchesAgent:e=>e.startsWith(y),extractHistory:()=>[],get model(){return(0,f.f)()},instructions:e=>((0,h.Yg)()?b:_)+(e.includes("gpt-4")?(0,s.W)("databricks.fe.editor.enableCitationV2",!1)?`

${o.u4}`:`

${o.nA}`:"")+(e.includes("gpt-4")?`
${o.Eq}`:"")}),[I,e,A,T])}},977532:(e,t,n)=>{n.a(e,async(e,i)=>{try{n.d(t,{o:()=>s});var a=n(124235),r=n(83722),o=e([r]);function s(){let e=null;return{setup:({editorInstance:t})=>{let n,i=t._standaloneKeybindingService,o=(n=!(0,a.f8)(),(0,r.d)().flatMap(({command:e,keybindings:t,keybindingsOnWindows:i})=>(i&&n?i:t??[]).map(t=>({keybinding:t,command:"-"+e})))).filter(e=>(function(e,t){if(t?._dynamicKeybindings?.some?.(t=>t.command===e.command))return!1;return!0})(e,i));o.length>0&&(e=i.addDynamicKeybindings(o))},tearDown:()=>e?.dispose?.()}}r=(o.then?(await o)():o)[0],i()}catch(e){i(e)}})}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/68664.0a6d85ceb1.chunk.js.map