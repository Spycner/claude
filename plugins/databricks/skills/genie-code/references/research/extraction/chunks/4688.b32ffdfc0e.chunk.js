"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[4688],{14704:(e,t,n)=>{n.d(t,{A:()=>r});let r="/* this gets exported as style.css and can be used for the default theming */\n/* these are the necessary styles for React/Svelte Flow, they get used by base.css and style.css */\n.react-flow {\n  direction: ltr;\n\n  --xy-edge-stroke-default: #b1b1b7;\n  --xy-edge-stroke-width-default: 1;\n  --xy-edge-stroke-selected-default: #555;\n\n  --xy-connectionline-stroke-default: #b1b1b7;\n  --xy-connectionline-stroke-width-default: 1;\n\n  --xy-attribution-background-color-default: rgba(255, 255, 255, 0.5);\n\n  --xy-minimap-background-color-default: #fff;\n  --xy-minimap-mask-background-color-default: rgba(240, 240, 240, 0.6);\n  --xy-minimap-mask-stroke-color-default: transparent;\n  --xy-minimap-mask-stroke-width-default: 1;\n  --xy-minimap-node-background-color-default: #e2e2e2;\n  --xy-minimap-node-stroke-color-default: transparent;\n  --xy-minimap-node-stroke-width-default: 2;\n\n  --xy-background-color-default: transparent;\n  --xy-background-pattern-dots-color-default: #91919a;\n  --xy-background-pattern-lines-color-default: #eee;\n  --xy-background-pattern-cross-color-default: #e2e2e2;\n  background-color: var(--xy-background-color, var(--xy-background-color-default));\n  --xy-node-color-default: inherit;\n  --xy-node-border-default: 1px solid #1a192b;\n  --xy-node-background-color-default: #fff;\n  --xy-node-group-background-color-default: rgba(240, 240, 240, 0.25);\n  --xy-node-boxshadow-hover-default: 0 1px 4px 1px rgba(0, 0, 0, 0.08);\n  --xy-node-boxshadow-selected-default: 0 0 0 0.5px #1a192b;\n  --xy-node-border-radius-default: 3px;\n\n  --xy-handle-background-color-default: #1a192b;\n  --xy-handle-border-color-default: #fff;\n\n  --xy-selection-background-color-default: rgba(0, 89, 220, 0.08);\n  --xy-selection-border-default: 1px dotted rgba(0, 89, 220, 0.8);\n\n  --xy-controls-button-background-color-default: #fefefe;\n  --xy-controls-button-background-color-hover-default: #f4f4f4;\n  --xy-controls-button-color-default: inherit;\n  --xy-controls-button-color-hover-default: inherit;\n  --xy-controls-button-border-color-default: #eee;\n  --xy-controls-box-shadow-default: 0 0 2px 1px rgba(0, 0, 0, 0.08);\n\n  --xy-edge-label-background-color-default: #ffffff;\n  --xy-edge-label-color-default: inherit;\n  --xy-resize-background-color-default: #3367d9;\n}\n.react-flow.dark {\n  --xy-edge-stroke-default: #3e3e3e;\n  --xy-edge-stroke-width-default: 1;\n  --xy-edge-stroke-selected-default: #727272;\n\n  --xy-connectionline-stroke-default: #b1b1b7;\n  --xy-connectionline-stroke-width-default: 1;\n\n  --xy-attribution-background-color-default: rgba(150, 150, 150, 0.25);\n\n  --xy-minimap-background-color-default: #141414;\n  --xy-minimap-mask-background-color-default: rgba(60, 60, 60, 0.6);\n  --xy-minimap-mask-stroke-color-default: transparent;\n  --xy-minimap-mask-stroke-width-default: 1;\n  --xy-minimap-node-background-color-default: #2b2b2b;\n  --xy-minimap-node-stroke-color-default: transparent;\n  --xy-minimap-node-stroke-width-default: 2;\n\n  --xy-background-color-default: #141414;\n  --xy-background-pattern-dots-color-default: #777;\n  --xy-background-pattern-lines-color-default: #777;\n  --xy-background-pattern-cross-color-default: #777;\n  --xy-node-color-default: #f8f8f8;\n  --xy-node-border-default: 1px solid #3c3c3c;\n  --xy-node-background-color-default: #1e1e1e;\n  --xy-node-group-background-color-default: rgba(240, 240, 240, 0.25);\n  --xy-node-boxshadow-hover-default: 0 1px 4px 1px rgba(255, 255, 255, 0.08);\n  --xy-node-boxshadow-selected-default: 0 0 0 0.5px #999;\n\n  --xy-handle-background-color-default: #bebebe;\n  --xy-handle-border-color-default: #1e1e1e;\n\n  --xy-selection-background-color-default: rgba(200, 200, 220, 0.08);\n  --xy-selection-border-default: 1px dotted rgba(200, 200, 220, 0.8);\n\n  --xy-controls-button-background-color-default: #2b2b2b;\n  --xy-controls-button-background-color-hover-default: #3e3e3e;\n  --xy-controls-button-color-default: #f8f8f8;\n  --xy-controls-button-color-hover-default: #fff;\n  --xy-controls-button-border-color-default: #5b5b5b;\n  --xy-controls-box-shadow-default: 0 0 2px 1px rgba(0, 0, 0, 0.08);\n\n  --xy-edge-label-background-color-default: #141414;\n  --xy-edge-label-color-default: #f8f8f8;\n}\n.react-flow__background {\n  background-color: var(--xy-background-color, var(--xy-background-color-props, var(--xy-background-color-default)));\n  pointer-events: none;\n  z-index: -1;\n}\n.react-flow__container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.react-flow__pane {\n  z-index: 1;\n}\n.react-flow__pane.draggable {\n    cursor: grab;\n  }\n.react-flow__pane.dragging {\n    cursor: grabbing;\n  }\n.react-flow__pane.selection {\n    cursor: pointer;\n  }\n.react-flow__viewport {\n  transform-origin: 0 0;\n  z-index: 2;\n  pointer-events: none;\n}\n.react-flow__renderer {\n  z-index: 4;\n}\n.react-flow__selection {\n  z-index: 6;\n}\n.react-flow__nodesselection-rect:focus,\n.react-flow__nodesselection-rect:focus-visible {\n  outline: none;\n}\n.react-flow__edge-path {\n  stroke: var(--xy-edge-stroke, var(--xy-edge-stroke-default));\n  stroke-width: var(--xy-edge-stroke-width, var(--xy-edge-stroke-width-default));\n  fill: none;\n}\n.react-flow__connection-path {\n  stroke: var(--xy-connectionline-stroke, var(--xy-connectionline-stroke-default));\n  stroke-width: var(--xy-connectionline-stroke-width, var(--xy-connectionline-stroke-width-default));\n  fill: none;\n}\n.react-flow .react-flow__edges {\n  position: absolute;\n}\n.react-flow .react-flow__edges svg {\n    overflow: visible;\n    position: absolute;\n    pointer-events: none;\n  }\n.react-flow__edge {\n  pointer-events: visibleStroke;\n}\n.react-flow__edge.selectable {\n    cursor: pointer;\n  }\n.react-flow__edge.animated path {\n    stroke-dasharray: 5;\n    animation: dashdraw 0.5s linear infinite;\n  }\n.react-flow__edge.animated path.react-flow__edge-interaction {\n    stroke-dasharray: none;\n    animation: none;\n  }\n.react-flow__edge.inactive {\n    pointer-events: none;\n  }\n.react-flow__edge.selected,\n  .react-flow__edge:focus,\n  .react-flow__edge:focus-visible {\n    outline: none;\n  }\n.react-flow__edge.selected .react-flow__edge-path,\n  .react-flow__edge.selectable:focus .react-flow__edge-path,\n  .react-flow__edge.selectable:focus-visible .react-flow__edge-path {\n    stroke: var(--xy-edge-stroke-selected, var(--xy-edge-stroke-selected-default));\n  }\n.react-flow__edge-textwrapper {\n    pointer-events: all;\n  }\n.react-flow__edge .react-flow__edge-text {\n    pointer-events: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n  }\n.react-flow__connection {\n  pointer-events: none;\n}\n.react-flow__connection .animated {\n    stroke-dasharray: 5;\n    animation: dashdraw 0.5s linear infinite;\n  }\nsvg.react-flow__connectionline {\n  z-index: 1001;\n  overflow: visible;\n  position: absolute;\n}\n.react-flow__nodes {\n  pointer-events: none;\n  transform-origin: 0 0;\n}\n.react-flow__node {\n  position: absolute;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  pointer-events: all;\n  transform-origin: 0 0;\n  box-sizing: border-box;\n  cursor: default;\n}\n.react-flow__node.selectable {\n    cursor: pointer;\n  }\n.react-flow__node.draggable {\n    cursor: grab;\n    pointer-events: all;\n  }\n.react-flow__node.draggable.dragging {\n      cursor: grabbing;\n    }\n.react-flow__nodesselection {\n  z-index: 3;\n  transform-origin: left top;\n  pointer-events: none;\n}\n.react-flow__nodesselection-rect {\n    position: absolute;\n    pointer-events: all;\n    cursor: grab;\n  }\n.react-flow__handle {\n  position: absolute;\n  pointer-events: none;\n  min-width: 5px;\n  min-height: 5px;\n  width: 6px;\n  height: 6px;\n  background-color: var(--xy-handle-background-color, var(--xy-handle-background-color-default));\n  border: 1px solid var(--xy-handle-border-color, var(--xy-handle-border-color-default));\n  border-radius: 100%;\n}\n.react-flow__handle.connectingfrom {\n    pointer-events: all;\n  }\n.react-flow__handle.connectionindicator {\n    pointer-events: all;\n    cursor: crosshair;\n  }\n.react-flow__handle-bottom {\n    top: auto;\n    left: 50%;\n    bottom: 0;\n    transform: translate(-50%, 50%);\n  }\n.react-flow__handle-top {\n    top: 0;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n.react-flow__handle-left {\n    top: 50%;\n    left: 0;\n    transform: translate(-50%, -50%);\n  }\n.react-flow__handle-right {\n    top: 50%;\n    right: 0;\n    transform: translate(50%, -50%);\n  }\n.react-flow__edgeupdater {\n  cursor: move;\n  pointer-events: all;\n}\n.react-flow__panel {\n  position: absolute;\n  z-index: 5;\n  margin: 15px;\n}\n.react-flow__panel.top {\n    top: 0;\n  }\n.react-flow__panel.bottom {\n    bottom: 0;\n  }\n.react-flow__panel.top.center, .react-flow__panel.bottom.center {\n      left: 50%;\n      transform: translateX(-50%);\n    }\n.react-flow__panel.left {\n    left: 0;\n  }\n.react-flow__panel.right {\n    right: 0;\n  }\n.react-flow__panel.left.center, .react-flow__panel.right.center {\n      top: 50%;\n      transform: translateY(-50%);\n    }\n.react-flow__attribution {\n  font-size: 10px;\n  background: var(--xy-attribution-background-color, var(--xy-attribution-background-color-default));\n  padding: 2px 3px;\n  margin: 0;\n}\n.react-flow__attribution a {\n    text-decoration: none;\n    color: #999;\n  }\n@keyframes dashdraw {\n  from {\n    stroke-dashoffset: 10;\n  }\n}\n.react-flow__edgelabel-renderer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  left: 0;\n  top: 0;\n}\n.react-flow__viewport-portal {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.react-flow__minimap {\n  background: var(\n    --xy-minimap-background-color-props,\n    var(--xy-minimap-background-color, var(--xy-minimap-background-color-default))\n  );\n}\n.react-flow__minimap-svg {\n    display: block;\n  }\n.react-flow__minimap-mask {\n    fill: var(\n      --xy-minimap-mask-background-color-props,\n      var(--xy-minimap-mask-background-color, var(--xy-minimap-mask-background-color-default))\n    );\n    stroke: var(\n      --xy-minimap-mask-stroke-color-props,\n      var(--xy-minimap-mask-stroke-color, var(--xy-minimap-mask-stroke-color-default))\n    );\n    stroke-width: var(\n      --xy-minimap-mask-stroke-width-props,\n      var(--xy-minimap-mask-stroke-width, var(--xy-minimap-mask-stroke-width-default))\n    );\n  }\n.react-flow__minimap-node {\n    fill: var(\n      --xy-minimap-node-background-color-props,\n      var(--xy-minimap-node-background-color, var(--xy-minimap-node-background-color-default))\n    );\n    stroke: var(\n      --xy-minimap-node-stroke-color-props,\n      var(--xy-minimap-node-stroke-color, var(--xy-minimap-node-stroke-color-default))\n    );\n    stroke-width: var(\n      --xy-minimap-node-stroke-width-props,\n      var(--xy-minimap-node-stroke-width, var(--xy-minimap-node-stroke-width-default))\n    );\n  }\n.react-flow__background-pattern.dots {\n    fill: var(\n      --xy-background-pattern-color-props,\n      var(--xy-background-pattern-color, var(--xy-background-pattern-dots-color-default))\n    );\n  }\n.react-flow__background-pattern.lines {\n    stroke: var(\n      --xy-background-pattern-color-props,\n      var(--xy-background-pattern-color, var(--xy-background-pattern-lines-color-default))\n    );\n  }\n.react-flow__background-pattern.cross {\n    stroke: var(\n      --xy-background-pattern-color-props,\n      var(--xy-background-pattern-color, var(--xy-background-pattern-cross-color-default))\n    );\n  }\n.react-flow__controls {\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--xy-controls-box-shadow, var(--xy-controls-box-shadow-default));\n}\n.react-flow__controls.horizontal {\n    flex-direction: row;\n  }\n.react-flow__controls-button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 26px;\n    width: 26px;\n    padding: 4px;\n    border: none;\n    background: var(--xy-controls-button-background-color, var(--xy-controls-button-background-color-default));\n    border-bottom: 1px solid\n      var(\n        --xy-controls-button-border-color-props,\n        var(--xy-controls-button-border-color, var(--xy-controls-button-border-color-default))\n      );\n    color: var(\n      --xy-controls-button-color-props,\n      var(--xy-controls-button-color, var(--xy-controls-button-color-default))\n    );\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n  }\n.react-flow__controls-button svg {\n      width: 100%;\n      max-width: 12px;\n      max-height: 12px;\n      fill: currentColor;\n    }\n.react-flow__edge.updating .react-flow__edge-path {\n      stroke: #777;\n    }\n.react-flow__edge-text {\n    font-size: 10px;\n  }\n.react-flow__node.selectable:focus,\n  .react-flow__node.selectable:focus-visible {\n    outline: none;\n  }\n.react-flow__node-input,\n.react-flow__node-default,\n.react-flow__node-output,\n.react-flow__node-group {\n  padding: 10px;\n  border-radius: var(--xy-node-border-radius, var(--xy-node-border-radius-default));\n  width: 150px;\n  font-size: 12px;\n  color: var(--xy-node-color, var(--xy-node-color-default));\n  text-align: center;\n  border: var(--xy-node-border, var(--xy-node-border-default));\n  background-color: var(--xy-node-background-color, var(--xy-node-background-color-default));\n}\n.react-flow__node-input.selectable:hover, .react-flow__node-default.selectable:hover, .react-flow__node-output.selectable:hover, .react-flow__node-group.selectable:hover {\n      box-shadow: var(--xy-node-boxshadow-hover, var(--xy-node-boxshadow-hover-default));\n    }\n.react-flow__node-input.selectable.selected,\n    .react-flow__node-input.selectable:focus,\n    .react-flow__node-input.selectable:focus-visible,\n    .react-flow__node-default.selectable.selected,\n    .react-flow__node-default.selectable:focus,\n    .react-flow__node-default.selectable:focus-visible,\n    .react-flow__node-output.selectable.selected,\n    .react-flow__node-output.selectable:focus,\n    .react-flow__node-output.selectable:focus-visible,\n    .react-flow__node-group.selectable.selected,\n    .react-flow__node-group.selectable:focus,\n    .react-flow__node-group.selectable:focus-visible {\n      box-shadow: var(--xy-node-boxshadow-selected, var(--xy-node-boxshadow-selected-default));\n    }\n.react-flow__node-group {\n  background-color: var(--xy-node-group-background-color, var(--xy-node-group-background-color-default));\n}\n.react-flow__nodesselection-rect,\n.react-flow__selection {\n  background: var(--xy-selection-background-color, var(--xy-selection-background-color-default));\n  border: var(--xy-selection-border, var(--xy-selection-border-default));\n}\n.react-flow__nodesselection-rect:focus,\n  .react-flow__nodesselection-rect:focus-visible,\n  .react-flow__selection:focus,\n  .react-flow__selection:focus-visible {\n    outline: none;\n  }\n.react-flow__controls-button:hover {\n      background: var(\n        --xy-controls-button-background-color-hover-props,\n        var(--xy-controls-button-background-color-hover, var(--xy-controls-button-background-color-hover-default))\n      );\n      color: var(\n        --xy-controls-button-color-hover-props,\n        var(--xy-controls-button-color-hover, var(--xy-controls-button-color-hover-default))\n      );\n    }\n.react-flow__controls-button:disabled {\n      pointer-events: none;\n    }\n.react-flow__controls-button:disabled svg {\n        fill-opacity: 0.4;\n      }\n.react-flow__controls-button:last-child {\n    border-bottom: none;\n  }\n.react-flow__controls.horizontal .react-flow__controls-button {\n    border-bottom: none;\n    border-right: 1px solid\n      var(\n        --xy-controls-button-border-color-props,\n        var(--xy-controls-button-border-color, var(--xy-controls-button-border-color-default))\n      );\n  }\n.react-flow__controls.horizontal .react-flow__controls-button:last-child {\n    border-right: none;\n  }\n.react-flow__resize-control {\n  position: absolute;\n}\n.react-flow__resize-control.left,\n.react-flow__resize-control.right {\n  cursor: ew-resize;\n}\n.react-flow__resize-control.top,\n.react-flow__resize-control.bottom {\n  cursor: ns-resize;\n}\n.react-flow__resize-control.top.left,\n.react-flow__resize-control.bottom.right {\n  cursor: nwse-resize;\n}\n.react-flow__resize-control.bottom.left,\n.react-flow__resize-control.top.right {\n  cursor: nesw-resize;\n}\n/* handle styles */\n.react-flow__resize-control.handle {\n  width: 4px;\n  height: 4px;\n  border: 1px solid #fff;\n  border-radius: 1px;\n  background-color: var(--xy-resize-background-color, var(--xy-resize-background-color-default));\n  transform: translate(-50%, -50%);\n}\n.react-flow__resize-control.handle.left {\n  left: 0;\n  top: 50%;\n}\n.react-flow__resize-control.handle.right {\n  left: 100%;\n  top: 50%;\n}\n.react-flow__resize-control.handle.top {\n  left: 50%;\n  top: 0;\n}\n.react-flow__resize-control.handle.bottom {\n  left: 50%;\n  top: 100%;\n}\n.react-flow__resize-control.handle.top.left {\n  left: 0;\n}\n.react-flow__resize-control.handle.bottom.left {\n  left: 0;\n}\n.react-flow__resize-control.handle.top.right {\n  left: 100%;\n}\n.react-flow__resize-control.handle.bottom.right {\n  left: 100%;\n}\n/* line styles */\n.react-flow__resize-control.line {\n  border-color: var(--xy-resize-background-color, var(--xy-resize-background-color-default));\n  border-width: 0;\n  border-style: solid;\n}\n.react-flow__resize-control.line.left,\n.react-flow__resize-control.line.right {\n  width: 1px;\n  transform: translate(-50%, 0);\n  top: 0;\n  height: 100%;\n}\n.react-flow__resize-control.line.left {\n  left: 0;\n  border-left-width: 1px;\n}\n.react-flow__resize-control.line.right {\n  left: 100%;\n  border-right-width: 1px;\n}\n.react-flow__resize-control.line.top,\n.react-flow__resize-control.line.bottom {\n  height: 1px;\n  transform: translate(0, -50%);\n  left: 0;\n  width: 100%;\n}\n.react-flow__resize-control.line.top {\n  top: 0;\n  border-top-width: 1px;\n}\n.react-flow__resize-control.line.bottom {\n  border-bottom-width: 1px;\n  top: 100%;\n}\n.react-flow__edge-textbg {\n  fill: var(--xy-edge-label-background-color, var(--xy-edge-label-background-color-default));\n}\n.react-flow__edge-text {\n  fill: var(--xy-edge-label-color, var(--xy-edge-label-color-default));\n}\n"},25602:(e,t,n)=>{if(n.d(t,{Es:()=>x,Rg:()=>k,Wy:()=>M,rO:()=>I}),13057==n.j)var r,o=n(610435);var a=n(359419),l=n.n(a),i=n(189219),s=n.n(i),d=n(90114),c=n.n(d),u=n(692738),p=n(412514);if(13057==n.j)var f=n(30472);if(13057==n.j)var g=n(886100);if(13057==n.j)var h=n(22191);if(13057==n.j)var m=n(412836);if(13057==n.j)var b=n(844760);if(13057==n.j)var _=n(205827);var w=n(361772);if(13057==n.j)var v=n(993533);if(13057==n.j)var E=n(206419);function y(e,t,n,r,o,a,l){try{var i=e[a](l),s=i.value}catch(e){n(e);return}i.done?t(s):Promise.resolve(s).then(r,o)}var x=((r={}).BREAKGLASS="breakglass",r.YAML_SYNC="yaml_sync",r.REDEPLOYMENT_REQUIRED="redeployment_required",r.NONE="none",r);let A=u.createContext({data:null,loading:!1,isJobDABControlled:!1,deploymentUiMode:"none"});function I({job:e,children:t}){let n=(0,f.Su)(),r=e.settings?.editMode===v.Do2.UI_LOCKED,a=e.settings?.deployment?.metadataFilePath,l=(0,m.IT)({queryKey:["deploymentMetadata",e.id,a],queryFn:()=>(0,b.S)(`/ajax-api/2.0/workspace/export?path=${encodeURIComponent(a)}&direct_download=true`).then(e=>e.json()).then(S),enabled:!!a&&(r||n)&&a?.startsWith("/"),refetchOnWindowFocus:!1}),i=(0,E.x)(e)&&r,s=n&&(0,E.x)(e)&&(0,_.M6)(l.data)&&(0,_.D5)(l.data)&&!!a,d=l.isLoading?"none":s?r?"redeployment_required":"yaml_sync":"breakglass";return(0,o.Y)(A.Provider,{value:{data:l.data?.config??null,loading:l.isLoading&&"idle"!==l.fetchStatus,isJobDABControlled:i,deploymentUiMode:n?d:"breakglass"},children:t})}function k(){let e=u.useContext(A),t=!l()(e?.data?.bundle?.git),n=e?.data?.bundle?.git?.origin_url?.startsWith("https://")&&(0,w.NK)(e?.data?.workspace?.file_path);return{...e,canOpenGitFolder:n,bundleHasGitSettings:t}}function S(e){var t;return(t=function*(){if(!s()(e)||s()(e)&&!("version"in e))return null;try{if(1===e.version)return yield T.validate(e,{strict:!0});return g.iT.sev2(h.Es.WorkflowsAuthoringDABs,"jaws:dab_deployment_metadata:unknown_version",`Unknown DAB deployment metadata file version: ${e.version}`),null}catch(e){return null}},function(){var e=this,n=arguments;return new Promise(function(r,o){var a=t.apply(e,n);function l(e){y(a,r,o,l,i,"next",e)}function i(e){y(a,r,o,l,i,"throw",e)}l(void 0)})})()}function M(e,t){let n=Object.values(t?.resources?.jobs??{}).find(({id:t})=>t===String(e));return n?.relative_path??""}let T=p.Ik().shape({version:p.ai().oneOf([1]).required(),config:p.Ik().shape({bundle:p.Ik().shape({git:p.Ik().shape({branch:p.Yj().notRequired(),origin_url:p.Yj().notRequired(),commit:p.Yj().notRequired(),bundle_root_path:p.Yj().notRequired()}).required()}).required(),workspace:p.Ik().shape({file_path:p.Yj().required()}),resources:p.Ik().shape({jobs:p.RZ(e=>p.Ik(c()(e,()=>p.Ik().shape({id:p.Yj(),relative_path:p.Yj().required()}))))})}).required(),extra:p.Ik().shape({git_folder_path:p.Yj().notRequired()}).notRequired()})},64222:(e,t,n)=>{n.d(t,{Vr:()=>m,CJ:()=>_,yj:()=>E,$m:()=>y,Qv:()=>w,iD:()=>b,KA:()=>v,Fp:()=>k,oU:()=>x});var r,o=n(932273),a=n(784141),l=n(610435),i=n(692738),s=n(375214);function d(e){return(0,l.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,l.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m-.75 4.31 1.72 1.72 1.06-1.06-1.28-1.28V9.5h-1.5z",clipRule:"evenodd"}),(0,l.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.327 1.004A.75.75 0 0 1 15 1.75V7H6.5v8H1.75a.75.75 0 0 1-.75-.75V1.75l.004-.077A.75.75 0 0 1 1.75 1h12.5zM2.5 13.5H5V7H2.5zm0-8h11v-3h-11z",clipRule:"evenodd"})]})}let c=(0,i.forwardRef)((e,t)=>(0,l.Y)(s.I,{ref:t,...e,component:d}));c.displayName="TableClockIcon";var u=n(236018),p=n(814761),f=n(342411),g=n(443071),h=n(993533),m=((r={}).MATERIALIZED_VIEW="MATERIALIZED_VIEW",r.STREAMING_TABLE="STREAMING_TABLE",r.TEMPORARY_VIEW="TEMPORARY_VIEW",r.PERSISTED_VIEW="PERSISTED_VIEW",r.SINK="SINK",r);let b={MATERIALIZED_VIEW:{name:(0,f.zR)({id:"b2LFzV",defaultMessage:"Materialized view"}),description:(0,f.zR)({id:"aEuNxc",defaultMessage:"Persist query results with incremental refresh"}),icon:o.A},STREAMING_TABLE:{name:(0,f.zR)({id:"BSb0s9",defaultMessage:"Streaming table"}),description:(0,f.zR)({id:"tfQN8U",defaultMessage:"Ingest data from a streaming source"}),icon:a.A},TEMPORARY_VIEW:{name:(0,f.zR)({id:"rUXhL+",defaultMessage:"Temporary view"}),description:(0,f.zR)({id:"y71J/U",defaultMessage:"Hold intermediate results within a pipeline run"}),icon:c},PERSISTED_VIEW:{name:(0,f.zR)({id:"+1DZ1V",defaultMessage:"Persisted view"}),description:(0,f.zR)({id:"zccyeD",defaultMessage:"Register a query as a virtual view in the catalog"}),icon:u.A},SINK:{name:(0,f.zR)({id:"SyIigY",defaultMessage:"Sink"}),description:(0,f.zR)({id:"7/2oQa",defaultMessage:"Stream records to external targets"}),icon:p.A}},_=b.MATERIALIZED_VIEW.icon,w=b.STREAMING_TABLE.icon,v=b.TEMPORARY_VIEW.icon,E=b.PERSISTED_VIEW.icon,y=b.SINK.icon,x=({pythonPipelinesDecoratorModule:e,pythonPipelinesImportStatement:t}=(0,g.D)())=>({MATERIALIZED_VIEW:{[h.KVK.PYTHON]:`
${t}


# Please edit the sample below


@${e}.table
def <NAME>():
    return spark.read.table("samples.wanderbricks.users")
`.trim(),[h.KVK.SQL]:`
-- Please edit the sample below

CREATE MATERIALIZED VIEW <NAME> AS
SELECT
    user_id,
    email,
    name,
    user_type
FROM samples.wanderbricks.users;
`.trim()},STREAMING_TABLE:{[h.KVK.PYTHON]:`
${t}
from pyspark.sql.functions import col


# Please edit the sample below


@${e}.table
def <NAME>():
    """
    Reads the raw sample orders JSON data as a streaming source.
    """
    path = "/databricks-datasets/retail-org/sales_orders/"

    schema = """
        customer_name STRING,
        order_number STRING
    """

    return (
        spark.readStream.schema(schema)
            .format("json")
            .option("header", "true")
            .load(path)
            .select(
                col("customer_name"),
                col("order_number"),
            )
    )
`.trim(),[h.KVK.SQL]:`
-- Please edit the sample below

CREATE STREAMING TABLE
    <NAME>
AS SELECT
    customer_name,
    order_number
FROM STREAM READ_FILES(
    "/databricks-datasets/retail-org/sales_orders/",
    format => "json",
    header => true
);`.trim()},TEMPORARY_VIEW:{[h.KVK.PYTHON]:`
${t}


# Please edit the sample below


@${e}.view
def <NAME>():
    return spark.read.table("samples.wanderbricks.users")
`.trim(),[h.KVK.SQL]:`
-- Please edit the sample below

CREATE TEMPORARY VIEW <NAME> AS
SELECT
    user_id,
    email,
    name,
    user_type
FROM samples.wanderbricks.users;`},PERSISTED_VIEW:{[h.KVK.PYTHON]:null,[h.KVK.SQL]:`
-- Please edit the sample below

CREATE VIEW <NAME> AS
SELECT
    user_id,
    email,
    name,
    user_type
FROM samples.wanderbricks.users;`},SINK:{[h.KVK.PYTHON]:`
${t}


# Please edit the sample below


dp.create_sink(
    name="<NAME>",
    format="delta",
    options={"tableName": "<PIPELINE_CATALOG>.<PIPELINE_SCHEMA>.<NAME>"}
)


@${e}.append_flow(target="<NAME>")
def append_to_<NAME>():
    return spark.readStream.table("samples.wanderbricks.users")
`.trim(),[h.KVK.SQL]:null}}),A=({pythonPipelinesDecoratorModule:e,pythonPipelinesImportStatement:t})=>({MATERIALIZED_VIEW:{[h.KVK.PYTHON]:`
${t}


@${e}.table
def <NAME>():
    return spark.read.table("<FROM_TABLE_NAME>")
`.trim(),[h.KVK.SQL]:`
CREATE MATERIALIZED VIEW <NAME> AS
SELECT
    *
FROM <FROM_TABLE_NAME>;
`.trim()},STREAMING_TABLE:{[h.KVK.PYTHON]:`
${t}


@${e}.table
def <NAME>():
    return spark.readStream.table("<FROM_TABLE_NAME>")
    `.trim(),[h.KVK.SQL]:`
CREATE STREAMING TABLE <NAME> AS
SELECT
    *
FROM STREAM <FROM_TABLE_NAME>;
`.trim()},TEMPORARY_VIEW:{[h.KVK.PYTHON]:`
${t}


@${e}.view
def <NAME>():
    return spark.read.table("<FROM_TABLE_NAME>")
    `.trim(),[h.KVK.SQL]:`
CREATE TEMPORARY VIEW <NAME> AS
SELECT
    *
FROM <FROM_TABLE_NAME>;
`.trim()},PERSISTED_VIEW:{[h.KVK.PYTHON]:null,[h.KVK.SQL]:`
CREATE VIEW <NAME> AS
SELECT
    *
FROM <FROM_TABLE_NAME>;
    `.trim()},SINK:{[h.KVK.PYTHON]:`
${t}


dp.create_sink(
    name="<NAME>",
    format="delta",
    options={"tableName": "<PIPELINE_CATALOG>.<PIPELINE_SCHEMA>.<NAME>"}
)


@${e}.append_flow(target="<NAME>")
def append_to_<NAME>():
    return spark.readStream.table("<FROM_TABLE_NAME>")
`.trim(),[h.KVK.SQL]:null}}),I=({pythonPipelinesDecoratorModule:e,pythonPipelinesImportStatement:t})=>({MATERIALIZED_VIEW:{[h.KVK.PYTHON]:`
${t}


@${e}.table
def <NAME>():
    return spark.read.table("<FROM_TABLE_NAME>")
`.trim(),[h.KVK.SQL]:`
CREATE MATERIALIZED VIEW <NAME> AS
SELECT
    *
FROM <FROM_TABLE_NAME>;
    `.trim()},STREAMING_TABLE:null,TEMPORARY_VIEW:{[h.KVK.PYTHON]:`
${t}


@${e}.view
def <NAME>():
    return spark.read.table("<FROM_TABLE_NAME>")
`.trim(),[h.KVK.SQL]:`
CREATE TEMPORARY VIEW <NAME> AS
SELECT
    *
FROM <FROM_TABLE_NAME>;
`.trim()},PERSISTED_VIEW:null,SINK:null}),k=(e=(0,g.D)())=>({MATERIALIZED_VIEW:A(e),STREAMING_TABLE:(({pythonPipelinesDecoratorModule:e,pythonPipelinesImportStatement:t})=>({MATERIALIZED_VIEW:{[h.KVK.PYTHON]:`
${t}


@${e}.table
def <NAME>():
    return spark.read.table("<FROM_TABLE_NAME>")
`.trim(),[h.KVK.SQL]:`
CREATE MATERIALIZED VIEW <NAME> AS
SELECT
    *
FROM <FROM_TABLE_NAME>;
`.trim()},STREAMING_TABLE:{[h.KVK.PYTHON]:`
${t}


@${e}.table
def <NAME>():
    return spark.readStream.table("<FROM_TABLE_NAME>")
`.trim(),[h.KVK.SQL]:`
CREATE STREAMING TABLE <NAME> AS
SELECT
    *
FROM STREAM <FROM_TABLE_NAME>;
    `.trim()},TEMPORARY_VIEW:{[h.KVK.PYTHON]:`
${t}


@${e}.view
def <NAME>():
    return spark.readStream.table("<FROM_TABLE_NAME>")
`.trim(),[h.KVK.SQL]:`
CREATE TEMPORARY VIEW <NAME> AS
SELECT
    *
FROM STREAM <FROM_TABLE_NAME>;
`.trim()},PERSISTED_VIEW:{[h.KVK.PYTHON]:null,[h.KVK.SQL]:`
CREATE VIEW <NAME> AS
SELECT
    *
FROM <FROM_TABLE_NAME>;
    `.trim()},SINK:{[h.KVK.PYTHON]:`
${t}


dp.create_sink(
    name="<NAME>",
    format="delta",
    options={"tableName": "<PIPELINE_CATALOG>.<PIPELINE_SCHEMA>.<NAME>"}
)


@${e}.append_flow(target="<NAME>")
def append_to_<NAME>():
    return spark.readStream.table("<FROM_TABLE_NAME>")
`.trim(),[h.KVK.SQL]:null}}))(e),TABLE:A(e),VIEW:I(e),DATASET_TYPE_UNKNOWN:I(e),DATASET_TYPE_UNSPECIFIED:I(e),SINK:null})},66580:(e,t,n)=>{n.d(t,{Q:()=>u});var r=n(610435),o=n(692738),a=n(550670),l=n(497895),i=n(79570),s=n(532411),d=n(860711),c=n(569481);let u=(0,o.memo)(e=>{let{id:t,sourceX:n,sourceY:o,targetX:u,targetY:p,sourcePosition:f,targetPosition:g,data:h,arrowHeadType:m,markerEndId:b}=e,{theme:_}=(0,l.wn)(),w=function(e){function t(e){return e===c.g8.DISABLED?"default":"pointer"}return{selectionFix:e=>({fill:"none",stroke:"transparent",strokeWidth:20,cursor:t(e)}),edge:n=>({strokeWidth:function(e){if(e===c.g8.IDENTIFIED)return 3;return 1.5}(n),stroke:function(t){if(t===c.g8.IDENTIFIED)return e.colors.textPrimary;if(t===c.g8.SELECTED)return(0,s.Hz)(e);if(t===c.g8.HOVERED)return(0,s.Vu)(e);if(t===c.g8.NONE)return e.colors.grey400}(n),cursor:t(n)})}}(_),v=(0,a.Fp)({sourceX:n,sourceY:o,sourcePosition:f,targetX:u,targetY:p,targetPosition:g}),E=h?.interactionState??c.g8.NONE,y=e.markerEnd??(0,d.H)(E,m,b),x=(0,r.Y)("path",{style:w.selectionFix(E),d:v}),A=h?.name===void 0?x:(0,r.Y)(i.m,{componentId:"pipeline-graph-edge-tooltip",content:h.name,side:"top",children:x});return(0,r.FD)(r.FK,{children:[(0,r.Y)(d.D,{}),A,(0,r.Y)("path",{id:t,className:"react-flow__edge-path",d:v,markerEnd:y,style:w.edge(E)})]})})},85122:(e,t,n)=>{n.d(t,{i:()=>r});function r(e){return null!==e&&"object"==typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}},106562:(e,t,n)=>{n.a(e,async(e,r)=>{try{n.r(t),n.d(t,{EmbeddablePipelineGraph:()=>I});var o=n(610435),a=n(692738),l=n(465946),i=n(12414),s=n(497895),d=n(382908),c=n(79128),u=n(126927),p=n(342411),f=n(929117),g=n(959240),h=n(217985),m=n(330942),b=n(475048),_=n(677276),w=n(823634),v=n(394859),E=n(202626),y=n(187826),x=n(935301),A=e([E]);E=(A.then?(await A)():A)[0];let I=(0,a.memo)(function({pipelineId:e,updateId:t}){let{loading:n,error:r,pipeline:a,refetch:i}=(0,v.GX)({pipelineId:e}),s=t??a?.latestUpdateId??null,d=`/pipelines/${e}${s?`/updates/${s}`:""}`;if(n)return(0,o.Y)(w.u,{componentId:"pipeline-graph",title:(0,o.Y)(p.sA,{id:"SWz/tD",defaultMessage:"Pipeline"}),fullPageUrl:d,fullPageLabel:(0,o.Y)(p.sA,{id:"yxLb5A",defaultMessage:"Open Pipeline"}),isLoading:!0,testIdPrefix:"pipeline-graph-widget",children:(0,o.Y)("div",{})});if(r)return(0,o.Y)(w.u,{componentId:"pipeline-graph",title:(0,o.Y)(p.sA,{id:"SWz/tD",defaultMessage:"Pipeline"}),fullPageUrl:d,fullPageLabel:(0,o.Y)(p.sA,{id:"yxLb5A",defaultMessage:"Open Pipeline"}),error:r,onRetry:i,testIdPrefix:"pipeline-graph-widget",children:(0,o.Y)("div",{})});let c=a&&(0,o.Y)("span",{children:(0,o.Y)(l.v,{componentId:"pipeline-state-tag",color:(0,v.Uz)(a.latestUpdateState),children:(0,v.Ss)(a.latestUpdateState)})});return(0,o.Y)(w.B,{componentId:"pipeline-graph",children:(0,o.Y)(w.u,{componentId:"pipeline-graph",title:a?.name??`Pipeline ${e}`,subtitle:c,fullPageUrl:d,fullPageLabel:(0,o.Y)(p.sA,{id:"yxLb5A",defaultMessage:"Open Pipeline"}),onRetry:i,contentHeight:400,testIdPrefix:"pipeline-graph-widget",children:(0,o.Y)(k,{pipelineId:e,updateId:s})})})}),k=(0,a.memo)(function({pipelineId:e,updateId:t}){let[n,r]=(0,a.useState)(t),l=(0,a.useCallback)(e=>{r(e)},[]);return(0,o.Y)("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column"},children:(0,o.Y)(b.hi,{pipelineUpdateIds:{[e]:n??""},surface:"details",children:(0,o.Y)(_.a,{selectedUpdateId:n,setSelectedUpdateId:l,children:(0,o.Y)(m.Z,{pipelineId:e,showSourceCodePopover:!1,children:(0,o.Y)("div",{style:{flex:1,width:"100%",height:"100%",position:"relative",minHeight:350},children:(0,o.Y)(g.t,{description:f.z.GENERIC_SUSPENSE,fallback:(0,o.Y)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:(0,o.Y)(i.y,{})}),children:(0,o.Y)(S,{pipelineId:e,updateId:n})})})})})})})}),S=(0,a.memo)(function({pipelineId:e,updateId:t}){let{theme:n}=(0,s.wn)(),r=(0,y.Lw)(),{loading:a,error:l,data:c}=(0,x.d)({variables:{input:{pipelineId:e,updateId:t}},additionalSkipConditions:"success"!==r.status}),u=c?.deltapipelinesGetUpdateDetails?.details;if("loading"===r.status||a)return(0,o.Y)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:(0,o.Y)(i.y,{})});if("error"===r.status)return(0,o.Y)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",padding:n.spacing.lg,textAlign:"center"},children:(0,o.Y)(d.o.Text,{color:"secondary",children:r.apiError?.message??"Failed to load pipeline"})});if(l)return(0,o.Y)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",padding:n.spacing.lg,textAlign:"center"},children:(0,o.Y)(d.o.Text,{color:"secondary",children:l.message})});if("success"!==r.status||!u||!((u.datasets?.length??0)>0||(u.flows?.length??0)>0))return(0,o.Y)(M,{pipelineId:e});return(0,o.Y)("div",{css:{width:"100%",height:"100%",position:"relative",minHeight:350,overflow:"hidden",".info-section-content":{display:"flex",height:"100%"},".pipeline-graph-panel":{padding:0},".react-flow":{height:"100%",width:"100%"},".react-flow-renderer":{height:"100%",width:"100%"}},"data-testid":"embeddable-pipeline-dag",children:(0,o.Y)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0},children:(0,o.Y)(E.c_,{updateDetails:u,updateDetailsInitialLoading:!1,isLogPanelVisible:!1,viewMode:"graph-only",removeAllButtonInteractions:!0})})})}),M=(0,a.memo)(function({pipelineId:e}){let{theme:t}=(0,s.wn)();return(0,o.FD)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",padding:t.spacing.lg,textAlign:"center",gap:t.spacing.md},children:[(0,o.Y)(d.o.Text,{color:"secondary",children:(0,o.Y)(p.sA,{id:"CX8bOZ",defaultMessage:"No DAG data available yet. Run the pipeline to see the graph."})}),(0,o.Y)(h.N,{to:`/pipelines/${e}`,componentId:"pipeline-graph-placeholder-link",asChild:!0,children:(0,o.Y)(c.$n,{componentId:"pipeline-graph-placeholder-btn",type:"tertiary",icon:(0,o.Y)(u.A,{}),children:(0,o.Y)(p.sA,{id:"FzAcrT",defaultMessage:"Open Pipeline"})})})]})});r()}catch(e){r(e)}})},112087:(e,t,n)=>{n.d(t,{b:()=>r});function r(e,t,n,r){let o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;let a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;let i=Object.prototype.hasOwnProperty.bind(t);for(let l=0;l<a.length;l++){let s=a[l];if(!i(s))return!1;let d=e[s],c=t[s];if(!1===(o=n?n.call(r,d,c,s):void 0)||void 0===o&&d!==c)return!1}return!0}},149863:(e,t,n)=>{n.d(t,{F:()=>l});var r=n(629231),o=n(692738),a=n(457196);function l(e,t,n){let[l,i]=(0,o.useState)(()=>t(e)),s=(0,o.useCallback)(()=>{let o=t(e);!r(l,o)&&(i(o),n&&n())},[l,e,n]);return(0,a.E)(s),[l,s]}},151539:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(610435),o=n(692738),a=n(375214);function l(e){return(0,r.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 17",...e,children:[(0,r.Y)("path",{fill:"currentColor",d:"M8.75 7.25H11v1.5H8.75V11h-1.5V8.75H5v-1.5h2.25V5h1.5z"}),(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a7 7 0 1 0 4.39 12.453l2.55 2.55 1.06-1.06-2.55-2.55A7 7 0 0 0 8 1M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0",clipRule:"evenodd"})]})}let i=(0,o.forwardRef)((e,t)=>(0,r.Y)(a.I,{ref:t,...e,component:l}));i.displayName="ZoomInIcon";let s=i},159705:(e,t,n)=>{n.d(t,{Nw:()=>a,hG:()=>o,iU:()=>l,vi:()=>i});var r=n(141078);let o=(0,r.J1)`
  fragment BooleanSettingFragment on SettingspolicySetting {
    isMutable
    ref
    value {
      boolVal {
        value
      }
    }
  }
`,a=(0,r.J1)`
  fragment BooleanSettingV2Fragment on SettingspolicySettingsv2SettingValue {
    isSetByUser
    value {
      boolVal
    }
  }
`,l=(0,r.J1)`
  fragment StringSettingFragment on SettingspolicySetting {
    isMutable
    ref
    value {
      stringVal {
        value
      }
    }
  }
`,i=(0,r.J1)`
  fragment SettingsApiErrorFragment on ApiError {
    code
    message
    helpUrl
    traceId
  }
`},163624:(e,t,n)=>{n.d(t,{_:()=>o});var r,o=((r={}).ERROR="error",r.WARNING="warning",r.INSIGHT="insight",r)},188454:(e,t,n)=>{n.d(t,{Z:()=>d,h:()=>s});var r=n(610435),o=n(692738),a=n(295169),l=n(866370);let i=[48,24,0],s=({lines:e=1,style:t})=>{let n=(0,o.useMemo)(()=>{let t=Math.floor(Math.random()*i.length);return[...Array(e)].map((e,n)=>{let o=i[(n+t)%i.length];return(0,r.Y)(a.x,{css:{height:16,width:`calc(100% - ${o}px)`}},n)})},[e]);return(0,r.Y)("div",{"aria-busy":!0,role:"status",style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:12,...t},children:n})},d=({children:e,loadingDescription:t})=>(0,r.FD)(r.FK,{children:[(0,r.Y)(l.B.Provider,{value:null,children:e}),(0,r.Y)(l.G,{description:t})]})},205827:(e,t,n)=>{function r(e){let t=e?.extra?.git_folder_path;if(!t)return!1;return t.startsWith("/Workspace")}function o(e){return e?.config?.bundle?.target}function a(e){return e?.config?.bundle?.name}function l(e){return e?.config?.bundle?.mode==="development"}n.d(t,{D5:()=>l,M6:()=>r,V7:()=>o,WF:()=>a})},206419:(e,t,n)=>{n.d(t,{A:()=>a,x:()=>o});var r=n(993533);function o(e){return e?.settings?.deployment?.kind===r.k0f.BUNDLE}function a(e){return e?.jobType===r.YxN.SYSTEM_MANAGED}},222812:(e,t,n)=>{let r;function o(){return r||((r=new Image).src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),r}n.d(t,{n:()=>o})},236018:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(610435),o=n(692738),a=n(375214);function l(e){return(0,r.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,r.FD)("g",{fill:"currentColor",fillRule:"evenodd",clipPath:"url(#TableViewIcon_svg__a)",clipRule:"evenodd",children:[(0,r.Y)("path",{d:"M1.75 1a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75H4v-1.5H2.5V7H5v2h1.5V7h3v2H11V7h2.5v2H15V1.75a.75.75 0 0 0-.75-.75zM13.5 5.5v-3h-11v3z"}),(0,r.Y)("path",{d:"M11.75 10a.75.75 0 0 0-.707.5H9.957a.75.75 0 0 0-.707-.5h-3.5a.75.75 0 0 0-.75.75v1.75a2.5 2.5 0 0 0 5 0V12h1v.5a2.5 2.5 0 0 0 5 0v-1.75a.75.75 0 0 0-.75-.75zm.75 2.5v-1h2v1a1 1 0 1 1-2 0m-6-1v1a1 1 0 1 0 2 0v-1z"})]}),(0,r.Y)("defs",{children:(0,r.Y)("clipPath",{children:(0,r.Y)("path",{fill:"#fff",d:"M0 0h16v16H0z"})})})]})}let i=(0,o.forwardRef)((e,t)=>(0,r.Y)(a.I,{ref:t,...e,component:l}));i.displayName="TableViewIcon";let s=i},292436:(e,t,n)=>{n.d(t,{Y:()=>o});var r=n(441535);function o(){if((0,r.W)("excl_data_access",!1))return!0;return(0,r.W)("databricks.fe.wexp.enableRoleSwitcherInWorkspaceSelector",!1)}},342526:(e,t,n)=>{n.d(t,{Ci:()=>i,lW:()=>o,o_:()=>s,oi:()=>a,u8:()=>l});var r,o=((r={}).LeftToRight="LR",r.TopToBottom="TB",r);let a=1,l={minZoom:.25,maxZoom:1},i=32,s={onlyRenderVisibleElements:!0,selectionKeyCode:"",multiSelectionKeyCode:"",maxZoom:2.5,minZoom:.05,panOnScroll:!0,nodesDraggable:!1,nodesConnectable:!1,snapGrid:[15,15],defaultPosition:[0,0]}},366795:(e,t,n)=>{n.d(t,{S:()=>r});function r(e,t,n){if(null==t||"string"!=typeof t)return n;for(let n in e)if(e[n]===t)return e[n];return n}},394859:(e,t,n)=>{n.d(t,{GX:()=>l,Ss:()=>i,Uz:()=>s});var r=n(692738),o=n(141078);let a=(0,o.J1)`
  query WidgetPipelineInfoQuery($pipelineId: String!) @component(name: "Workspace.Assistant") {
    deltapipelinesGet: jobsGetPipeline(input: { pipelineId: $pipelineId }) {
      status {
        pipelineId
        name
        health
        clusterId
        lastModified
        permissionLevel
        creatorUserName
        latestUpdates {
          updateId
          state
          creationTime
        }
        spec {
          target
          catalog
          continuous
          serverless
          photon
          pipelineType
        }
      }
    }
  }
`;function l({pipelineId:e,skip:t}){let{loading:n,error:i,data:s,refetch:d}=(0,o.IT)(a,{variables:{pipelineId:e},skip:t||!e});return{loading:n,error:i,pipeline:(0,r.useMemo)(()=>{let e=s?.deltapipelinesGet?.status;if(!e)return null;let t=e.latestUpdates?.[0];return{pipelineId:e.pipelineId,name:e.name,health:e.health,clusterId:e.clusterId,lastModified:e.lastModified,permissionLevel:e.permissionLevel,creatorUserName:e.creatorUserName,latestUpdateId:t?.updateId??null,latestUpdateState:t?.state??null,datasetCount:null,isContinuous:e.spec?.continuous??!1,isServerless:e.spec?.serverless??!1,catalog:e.spec?.catalog??null,target:e.spec?.target??null,pipelineType:e.spec?.pipelineType??null}},[s]),refetch:d}}function i(e){if(!e)return"Unknown";return e.toLowerCase().split("_").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}function s(e){if(!e)return"charcoal";switch(e.toUpperCase()){case"COMPLETED":case"IDLE":return"lime";case"FAILED":case"CANCELED":return"coral";case"RUNNING":case"STARTING":case"STOPPING":case"QUEUED":case"INITIALIZING":case"RESETTING":case"WAITING_FOR_RESOURCES":return"lemon";default:return"charcoal"}}},429968:(e,t,n)=>{n.d(t,{u:()=>l});var r=n(692738),o=n(815289),a=n(540433);function l(){let{dragDropManager:e}=(0,r.useContext)(a.M);return(0,o.V)(null!=e,"Expected drag drop context"),e}},457196:(e,t,n)=>{n.d(t,{E:()=>o});var r=n(692738);let o="u">typeof window?r.useLayoutEffect:r.useEffect},497275:(e,t,n)=>{n.d(t,{oA:()=>Y,Jd:()=>D,fN:()=>O,CW:()=>C});var r=n(610435),o=n(692738),a=n(79570),l=n(342411),i=n(295169),s=n(382908),d=n(126927),c=n(79128),u=n(694762),p=n(339518),f=n(225352),g=n(615693),h=n(217985),m=n(737358);let b=(e,t)=>{if(e.catalogName!==t.catalogName)return t.catalogName?e.catalogName?.localeCompare(t.catalogName)??1:-1;if(e.schemaName!==t.schemaName)return t.schemaName?e.schemaName?.localeCompare(t.schemaName)??1:-1;if(e.name!==t.name)return t.name?e.name?.localeCompare(t.name)??1:-1;return 0},_=e=>{let t=[...e];return t.sort(b),t},w=({data:e})=>{let t=(0,l.tz)(),n=(0,o.useMemo)(()=>{let n=[];return e.upstreamTables?.length&&n.push(v({tables:_(e.upstreamTables.filter(e=>null!==e)),title:t.formatMessage(E.upstreamTitle,{tablesCount:e.upstreamTables.length,isSingleTable:1===e.upstreamTables.length}),key:"upstream"})),e.downstreamTables?.length&&n.push(v({tables:_(e.downstreamTables.filter(e=>null!==e)),title:t.formatMessage(E.downstreamTitle,{tablesCount:e.downstreamTables.length,isSingleTable:1===e.downstreamTables.length}),key:"downstream"})),n},[e,t]);return(0,r.Y)(f.P,{defaultExpandedKeys:["upstream","downstream"],mode:"default",treeData:n,"data-testid":"jobs-lineage-table-tree"})},v=({tables:e,title:t,key:n})=>({key:n,title:t,children:e.map((e,t)=>({key:`${n}-${t}`,title:(({table:e,testId:t})=>{let n=e?.hasPermission??!0?(0,r.Y)(a.m,{content:y.viewInTheDataExplorer,componentId:"lineage-table-row-data-explorer-link-tooltip",children:(0,r.Y)(h.N,{componentId:"codegen_webapp_js_jaws_jobs_side_panel_lineagetabletree.tsx_111",to:(0,m.tW)("/explore/data/:catalogName/:schemaName/:name",{catalogName:e.catalogName??"",schemaName:e.schemaName??"",name:e.name??""}),asChild:!0,children:(0,r.FD)(s.o.Link,{componentId:"codegen_webapp_js_jaws_jobs_side_panel_lineagetabletree.tsx_122",ellipsis:!0,"data-testid":t,title:`${e.catalogName}.${e.schemaName}.${e.name}`,children:[e.catalogName,".",e.schemaName,".",e.name]})})}):(0,r.Y)(a.m,{content:y.insufficientPrivileges,componentId:"lineage-table-row-insufficient-privileges-tooltip",children:(0,r.Y)("span",{children:(0,r.Y)(s.o.Text,{color:"secondary","data-testid":t,children:y.masked})})});return(0,r.FD)("div",{css:e=>({display:"flex",gap:e.spacing.sm,alignItems:"center"}),children:[(0,r.Y)(g.A,{}),n]})})({table:e,testId:`jobs-lineage-${n}-${t}`})}))}),E={upstreamTitle:(0,l.zR)({id:"LEwgKt",defaultMessage:"Upstream {isSingleTable, select, true {table} other {tables}} read by this job ({tablesCount})"}),downstreamTitle:(0,l.zR)({id:"yLov8W",defaultMessage:"Downstream {isSingleTable, select, true {table} other {tables}} written to by this job ({tablesCount})"})},y={masked:(0,r.Y)(l.sA,{id:"Yuo1zW",defaultMessage:"Masked"}),insufficientPrivileges:(0,r.Y)(l.sA,{id:"1r+OJH",defaultMessage:"Insufficient privileges to view this table"}),viewInTheDataExplorer:(0,r.Y)(l.sA,{id:"+eeVie",defaultMessage:"View in the Catalog Explorer"})},x=({data:e,isModalVisible:t,handleCancel:n})=>(0,r.FD)(u.aF,{componentId:"codegen_webapp_js_jaws_jobs_side_panel_modals_lineagemodal.tsx_21",title:(0,r.Y)(s.o.Text,{size:"xl",ellipsis:!0,children:A.modalTitle}),cancelText:(0,r.Y)(l.sA,{id:"vzEllG",defaultMessage:"Close"}),visible:t,onCancel:n,"aria-label":"Lineage","data-testid":"jobs-lineage-modal",cancelButtonProps:{"data-testid":"jobs-lineage-modal-cancel-button"},children:[(0,r.Y)(p.F,{componentId:"codegen_webapp_js_jaws_jobs_side_panel_modals_lineagemodal.tsx_36",type:"info",message:A.lineageInfoWarning,closable:!1,"data-testid":"jobs-lineage-modal-alert",css:e=>({marginBottom:e.spacing.lg})}),(0,r.Y)(w,{data:e})]}),A={lineageInfoWarning:(0,r.Y)(l.sA,{id:"MAui1F",defaultMessage:"The following is the combined lineage data from runs of this job in the past 30 days."}),modalTitle:(0,r.Y)(l.sA,{id:"wK/S2D",defaultMessage:"Tables related to this job"})};var I=n(620839),k=n(67656);let S=({data:e,loading:t})=>{let[n,a]=(0,o.useState)(!1);if(t)return(0,r.Y)(i.x,{"data-testid":"jobs-lineage-value-loading-skeleton",style:{width:130,height:20}});if(0===(e.downstreamTables?.length??0)+(e.upstreamTables?.length??0)){let e=k.R.getDbGuideUrl(I.A.LINEAGE_DOCS);return(0,r.FD)(r.FK,{children:[(0,r.Y)(s.o.Text,{color:"secondary","data-testid":"jobs-lineage-value-field",css:{display:"flex",alignItems:"center"},children:M.noLineage(e.length)}),e.length>0&&(0,r.FD)(s.o.Link,{componentId:"codegen_webapp_js_jaws_jobs_side_panel_lineagevaluefield.tsx_50","data-testid":"jobs-lineage-info-button",href:e,target:"_blank",children:[M.learnMore," ",(0,r.Y)(d.A,{})]})]})}let u=e.upstreamTables?.length??0,p=e.downstreamTables?.length??0,f=e.hasMoreUpstream&&u>0?`${u}+`:u,g=e.hasMoreDownstream&&p>0?`${p}+`:p;return(0,r.FD)(r.FK,{children:[(0,r.Y)(c.$n,{componentId:"codegen_webapp_js_jaws_jobs_side_panel_lineagevaluefield.tsx_67",type:"link",onClick:()=>{a(!0)},"data-testid":"jobs-lineage-modal-button",css:{whiteSpace:"normal",textAlign:"left"},children:(0,r.Y)(l.sA,{id:"+yaZ1c",defaultMessage:"{upstreamTablesCount} upstream {isSingleUpstreamTable, select, true {table} other {tables}}, {downstreamTablesCount} downstream {isSingleDownstreamTable, select, true {table} other {tables}}",values:{upstreamTablesCount:f,downstreamTablesCount:g,isSingleUpstreamTable:1===u,isSingleDownstreamTable:1===p}})}),(0,r.Y)(x,{data:e,isModalVisible:n,handleCancel:()=>{a(!1)}})]})},M={noLineage:e=>(0,r.Y)(l.sA,{id:"AU13An",defaultMessage:"No lineage information for this job{docLinkNum, plural, =0 {} other {. }}",values:{docLinkNum:e}}),learnMore:(0,r.Y)(l.sA,{id:"mOaW/9",defaultMessage:"Learn more"})};var T=n(663415),R=n(558709),N=n(921625);let D={upstreamTables:[],downstreamTables:[],hasMoreDownstream:!1,hasMoreUpstream:!1},C=()=>(0,T.Hx)(),Y=({tooltipDescriptor:e,data:t,loading:n})=>(0,r.Y)(N.K,{keyField:(0,r.FD)("span",{style:{display:"inline-flex",alignItems:"center"},children:[L.lineage," ",(0,r.Y)(P,{tooltipDescriptor:e})]}),valueField:(0,r.Y)(S,{data:t,loading:n}),testId:"jobs-lineage",compact:!0}),P=({tooltipDescriptor:e})=>(0,r.Y)(a.m,{side:"left",content:e,componentId:"lineage-key-value-info-tooltip",children:(0,r.Y)(R.K,{})}),L={lineage:(0,r.Y)(l.sA,{id:"PFP5pg",defaultMessage:"Lineage"})},O={jobDetails:(0,r.Y)(l.sA,{id:"GEhcGr",defaultMessage:"<p>Aggregated lineage information of the job.</p><p>Lineage includes all the tables this job reads from (upstream) as well as all the tables this job writes into (downstream). This feature is only available for Unity Catalog tables.</p>",values:{p:e=>(0,r.Y)("p",{children:e})}}),jobRunDetails:(0,r.Y)(l.sA,{id:"RIIt1E",defaultMessage:"<p>Aggregated lineage information of the job. May not be accurate for this particular job run.</p><p>Lineage includes all the tables this job reads from (upstream) as well as all the tables this job writes into (downstream). This feature is only available for Unity Catalog tables.</p>",values:{p:e=>(0,r.Y)("p",{children:e})}}),taskRunDetails:(0,r.Y)(l.sA,{id:"XnYp3a",defaultMessage:"<p>Aggregated lineage information of the job. May not be related to this particular task run.</p><p>Lineage includes all the tables this job reads from (upstream) as well as all the tables this job writes into (downstream). This feature is only available for Unity Catalog tables.</p>",values:{p:e=>(0,r.Y)("p",{children:e})}})}},532411:(e,t,n)=>{n.d(t,{H6:()=>o,Hz:()=>s,LK:()=>d,Us:()=>c,Vu:()=>i,_1:()=>l,tk:()=>a});var r=n(956935);let o=5,a=.75,l=8,i=e=>e.colors.blue400,s=e=>e.colors.blue600,d=e=>e.colors.blue600;function c(e){let t=e.isDarkMode?e.colors.actionDefaultBackgroundHover:e.colors.blue100;return{handleRight:(0,r.AH)({background:"transparent",borderColor:"transparent",right:0,top:28}),handleLeft:(0,r.AH)({background:"transparent",borderColor:"transparent",left:-3,top:28}),titleText:(0,r.AH)({width:"230px",lineHeight:`${e.typography.lineHeightSm} !important`}),backgroundHack:(0,r.AH)({"&:hover":{backgroundColor:t},borderRadius:"4px",width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:0})}}},540433:(e,t,n)=>{n.d(t,{M:()=>r});let r=(0,n(692738).createContext)({dragDropManager:void 0})},560529:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(610435),o=n(692738),a=n(375214);function l(e){return(0,r.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,r.Y)("path",{fill:"currentColor",d:"M11.25 8a.75.75 0 0 1-.375.65l-3.75 2.165A.75.75 0 0 1 6 10.165v-4.33a.75.75 0 0 1 1.125-.65l3.75 2.165a.75.75 0 0 1 .375.65"}),(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0",clipRule:"evenodd"})]})}let i=(0,o.forwardRef)((e,t)=>(0,r.Y)(a.I,{ref:t,...e,component:l}));i.displayName="PlayCircleIcon";let s=i},569481:(e,t,n)=>{n.d(t,{C5:()=>i,IY:()=>u,LJ:()=>s,QR:()=>c,Zp:()=>f,_$:()=>h,g8:()=>g,ge:()=>d,jS:()=>b,sW:()=>m,uP:()=>p,wU:()=>_});var r,o,a,l=n(342526);let i={Table:"PipelineGraphTableNode",View:"PipelineGraphViewNode",External:"PipelineGraphExternalNode",Sink:"PipelineGraphSinkNode"},s=100,d=l.lW.LeftToRight,c=100,u=50;function p({isNewDesign:e}){return e?{width:250,height:100}:{width:280,height:136}}var f=((r={}).DEFAULT="PipelineGraphNode",r.DETAILS_PAGE="PipelineDetailsNode",r.REFRESH_SELECTION="RefreshSelectionNode",r.SELECTION="PipelineSelectionNode",r),g=((o={}).SELECTED="SELECTED",o.HOVERED="HOVERED",o.DISABLED="DISABLED",o.IDENTIFIED="IDENTIFIED",o.RELATED_TO_CURRENT_FILE="RELATED_TO_CURRENT_FILE",o.NONE="NONE",o),h=((a={}).HIGHLIGHTED="HIGHLIGHTED",a.FADED="FADED",a.NONE="NONE",a);let m=600,b=20,_=50},570942:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(610435),o=n(692738),a=n(375214);function l(e){return(0,r.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,r.Y)("path",{fill:"currentColor",d:"M8 1c1.878 0 3.583.74 4.84 1.943l.66.596V2H15v4h-4V4.5h1.326l-.491-.443-.009-.008-.01-.009a5.5 5.5 0 1 0 .083 7.839l1.064 1.057A7 7 0 1 1 8 1"}),(0,r.Y)("path",{fill:"currentColor",d:"M6.375 5.186a.75.75 0 0 1 .75 0l3.75 2.165.083.055a.75.75 0 0 1-.083 1.243l-3.75 2.166A.75.75 0 0 1 6 10.165v-4.33a.75.75 0 0 1 .375-.65"})]})}let i=(0,o.forwardRef)((e,t)=>(0,r.Y)(a.I,{ref:t,...e,component:l}));i.displayName="RefreshPlayIcon";let s=i},572411:(e,t,n)=>{n.d(t,{i:()=>l});var r=n(610435);n(692738);var o=n(487404),a=n(59723);let l=({children:e})=>(0,r.Y)(o.f,{children:(0,r.Y)("span",{css:a.Q,children:e})})},587694:(e,t,n)=>{n.d(t,{$:()=>o});var r=n(441535);function o(){return(0,r.W)("databricks.fe.lakeflow.isIssuesPanelInsightsEnabled",!1)}},669555:(e,t,n)=>{n.d(t,{j:()=>a});var r=n(457196),o=n(149863);function a(e,t,n){return function(e,t,n){let[a,l]=(0,o.F)(e,t,n);return(0,r.E)(function(){let t=e.getHandlerId();if(null==t)return;return e.subscribeToStateChange(l,{handlerIds:[t]})},[e,l]),a}(t,e||(()=>({})),()=>n.reconnect())}},702868:(e,t,n)=>{if(n.d(t,{G:()=>o,J:()=>l}),13057==n.j)var r=n(488655);function o(){let e=(0,r.Zp)();return{navigateToList(){e(l.getListUrl())},navigateToCreate(){e(l.getCreateUrl())},navigateToDetails(t,n){e(l.getDetailsUrl(t,n))},navigateToEdit(t){e(l.getEditUrl(t))}}}let a="/settings/workspace/security/instance-profiles";class l{static getListUrl(){return a}static getCreateUrl(){return`${a}/new`}static getDetailsUrl(e,t){let n=encodeURIComponent(e),r=t?`/${encodeURIComponent(t)}`:"";return`${a}/${n}${r}`}static getEditUrl(e){let t=encodeURIComponent(e);return`${a}/edit/${t}`}static deprecatedNavigate(e){window.location.assign(e)}static deprecatedNavigateToList(){let e=l.getListUrl();l.deprecatedNavigate(e)}static deprecatedNavigateToCreate(){let e=l.getCreateUrl();l.deprecatedNavigate(e)}static deprecatedNavigateToDetails(e,t){let n=l.getDetailsUrl(e,t);l.deprecatedNavigate(n)}}},760727:(e,t,n)=>{n.d(t,{i:()=>_});var r=n(878920),o=n(457196),a=n(692738);class l{beginDrag(){let e=this.spec,t=this.monitor,n=null;return null!=(n="object"==typeof e.item?e.item:"function"==typeof e.item?e.item(t):{})?n:null}canDrag(){let e=this.spec,t=this.monitor;if("boolean"==typeof e.canDrag)return e.canDrag;if("function"==typeof e.canDrag)return e.canDrag(t);return!0}isDragging(e,t){let n=this.spec,r=this.monitor,{isDragging:o}=n;return o?o(r):t===e.getSourceId()}endDrag(){let e=this.spec,t=this.monitor,n=this.connector,{end:r}=e;r&&r(t.getItem(),t),n.reconnect()}constructor(e,t,n){this.spec=e,this.monitor=t,this.connector=n}}var i=n(429968),s=n(815289),d=n(925636);let c=!1,u=!1;class p{receiveHandlerId(e){this.sourceId=e}getHandlerId(){return this.sourceId}canDrag(){(0,s.V)(!c,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return c=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{c=!1}}isDragging(){if(!this.sourceId)return!1;(0,s.V)(!u,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return u=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{u=!1}}subscribeToStateChange(e,t){return this.internalMonitor.subscribeToStateChange(e,t)}isDraggingSource(e){return this.internalMonitor.isDraggingSource(e)}isOverTarget(e,t){return this.internalMonitor.isOverTarget(e,t)}getTargetIds(){return this.internalMonitor.getTargetIds()}isSourcePublic(){return this.internalMonitor.isSourcePublic()}getSourceId(){return this.internalMonitor.getSourceId()}subscribeToOffsetChange(e){return this.internalMonitor.subscribeToOffsetChange(e)}canDragSource(e){return this.internalMonitor.canDragSource(e)}canDropOnTarget(e){return this.internalMonitor.canDropOnTarget(e)}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(e){this.sourceId=null,this.internalMonitor=e.getMonitor()}}var f=n(785888),g=n(85122),h=n(112087);class m{receiveHandlerId(e){if(this.handlerId===e)return;this.handlerId=e,this.reconnect()}get connectTarget(){return this.dragSource}get dragSourceOptions(){return this.dragSourceOptionsInternal}set dragSourceOptions(e){this.dragSourceOptionsInternal=e}get dragPreviewOptions(){return this.dragPreviewOptionsInternal}set dragPreviewOptions(e){this.dragPreviewOptionsInternal=e}reconnect(){let e=this.reconnectDragSource();this.reconnectDragPreview(e)}reconnectDragSource(){let e=this.dragSource,t=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();if(t&&this.disconnectDragSource(),!this.handlerId)return t;if(!e)return this.lastConnectedDragSource=e,t;return t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=e,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,e,this.dragSourceOptions)),t}reconnectDragPreview(e=!1){let t=this.dragPreview,n=e||this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();if(n&&this.disconnectDragPreview(),!this.handlerId)return;if(!t){this.lastConnectedDragPreview=t;return}n&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=t,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,t,this.dragPreviewOptions))}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didConnectedDragSourceChange(){return this.lastConnectedDragSource!==this.dragSource}didConnectedDragPreviewChange(){return this.lastConnectedDragPreview!==this.dragPreview}didDragSourceOptionsChange(){return!(0,h.b)(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}didDragPreviewOptionsChange(){return!(0,h.b)(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}disconnectDragSource(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}disconnectDragPreview(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}get dragSource(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}get dragPreview(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}clearDragSource(){this.dragSourceNode=null,this.dragSourceRef=null}clearDragPreview(){this.dragPreviewNode=null,this.dragPreviewRef=null}constructor(e){this.hooks=(0,f.i)({dragSource:(e,t)=>{this.clearDragSource(),this.dragSourceOptions=t||null,(0,g.i)(e)?this.dragSourceRef=e:this.dragSourceNode=e,this.reconnectDragSource()},dragPreview:(e,t)=>{this.clearDragPreview(),this.dragPreviewOptions=t||null,(0,g.i)(e)?this.dragPreviewRef=e:this.dragPreviewNode=e,this.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=e}}var b=n(669555);function _(e,t){var n,c;let u,f,g,h,_,w,v,E=(0,d.I)(e,t);(0,s.V)(!E.begin,"useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");let y=(u=(0,i.u)(),(0,a.useMemo)(()=>new p(u),[u])),x=(n=E.options,c=E.previewOptions,f=(0,i.u)(),g=(0,a.useMemo)(()=>new m(f.getBackend()),[f]),(0,o.E)(()=>(g.dragSourceOptions=n||null,g.reconnect(),()=>g.disconnectDragSource()),[g,n]),(0,o.E)(()=>(g.dragPreviewOptions=c||null,g.reconnect(),()=>g.disconnectDragPreview()),[g,c]),g);return h=(0,i.u)(),_=(0,a.useMemo)(()=>new l(E,y,x),[y,x]),(0,a.useEffect)(()=>{_.spec=E},[E]),w=_,v=(0,a.useMemo)(()=>{let e=E.type;return(0,s.V)(null!=e,"spec.type must be defined"),e},[E]),(0,o.E)(function(){if(null!=v){let[e,t]=(0,r.V)(v,w,h);return y.receiveHandlerId(e),x.receiveHandlerId(e),t}},[h,y,x,w,v]),[(0,b.j)(E.collect,y,x),(0,a.useMemo)(()=>x.hooks.dragSource(),[x]),(0,a.useMemo)(()=>x.hooks.dragPreview(),[x])]}},785888:(e,t,n)=>{n.d(t,{i:()=>a});var r=n(815289),o=n(692738);function a(e){let t={};return Object.keys(e).forEach(n=>{let a=e[n];if(n.endsWith("Ref"))t[n]=e[n];else{let e=(e=null,t=null)=>{if(!(0,o.isValidElement)(e))return a(e,t),e;return!function(e){if("string"==typeof e.type)return;let t=e.type.displayName||e.type.name||"the component";throw Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${t} into a <div>, or turn it into a drag source or a drop target itself.`)}(e),function(e,t){let n=e.ref;if((0,r.V)("string"!=typeof n,"Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),!n)return(0,o.cloneElement)(e,{ref:t});return(0,o.cloneElement)(e,{ref:e=>{l(n,e),l(t,e)}})}(e,t?e=>a(e,t):a)};t[n]=()=>e}}),t}function l(e,t){"function"==typeof e?e(t):e.current=t}},796775:(e,t,n)=>{n.d(t,{d:()=>a,m:()=>o});var r=n(988759);let o=(0,n(696514).fH)("PersonaNav::ActivePersona"),a=(0,r.g)("Nav::openAppSwitcher")},814761:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(610435),o=n(692738),a=n(375214);function l(e){return(0,r.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",...e,children:[(0,r.Y)("path",{fill:"currentColor",d:"M3.394 4.586a4.752 4.752 0 0 1 9.351.946A3.75 3.75 0 0 1 15.787 8H14.12a2.25 2.25 0 0 0-1.871-1H12a.75.75 0 0 1-.75-.75v-.5a3.25 3.25 0 0 0-6.475-.402.75.75 0 0 1-.698.657A2.75 2.75 0 0 0 4 11.49V13a.8.8 0 0 1-.179-.021 4.25 4.25 0 0 1-.427-8.393"}),(0,r.Y)("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.25 10.5c0-.851.67-1.42 1.293-1.731C8.211 8.435 9.08 8.25 10 8.25s1.79.185 2.457.519c.622.31 1.293.88 1.293 1.731v2.277c-.014.836-.677 1.397-1.293 1.705-.668.333-1.537.518-2.457.518s-1.79-.185-2.457-.518c-.616-.308-1.279-.869-1.293-1.705V10.5m1.964 2.64c.418.209 1.049.36 1.786.36s1.368-.151 1.786-.36c.209-.105.337-.21.406-.29a.3.3 0 0 0 .057-.096l.001-.004v-.423c-.636.273-1.423.423-2.25.423s-1.614-.15-2.25-.423v.427l.005.014a.3.3 0 0 0 .053.082c.069.08.197.185.406.29M7.75 10.5v-.004l.005-.014a.3.3 0 0 1 .053-.082c.069-.08.197-.185.406-.29.418-.209 1.049-.36 1.786-.36s1.368.151 1.786.36c.209.105.337.21.406.29a.3.3 0 0 1 .057.096l.001.004v.004l-.005.014a.3.3 0 0 1-.053.082c-.069.08-.197.185-.406.29-.418.209-1.049.36-1.786.36s-1.368-.151-1.786-.36a1.3 1.3 0 0 1-.406-.29.3.3 0 0 1-.058-.096z",clipRule:"evenodd"})]})}let i=(0,o.forwardRef)((e,t)=>(0,r.Y)(a.I,{ref:t,...e,component:l}));i.displayName="CloudDatabaseIcon";let s=i},815289:(e,t,n)=>{n.d(t,{V:()=>o});var r=n(173564);function o(e,t,...n){if(void 0!==r&&void 0===t)throw Error("invariant requires an error message argument");if(!e){let e;if(void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let r=0;(e=Error(t.replace(/%s/g,function(){return n[r++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}},823634:(e,t,n)=>{n.d(t,{B:()=>w,u:()=>b});var r=n(610435),o=n(692738),a=n(497895),l=n(599352),i=n(382908),s=n(79128),d=n(222572),c=n(126927),u=n(12414),p=n(140078),f=n(342411),g=n(929117),h=n(959240),m=n(217985);let b=(0,o.memo)(function({componentId:e,title:t,subtitle:n,fullPageUrl:o,fullPageLabel:u,isLoading:p,error:g,onRetry:h,contentHeight:b=400,children:w,headerActions:v,testIdPrefix:E="widget"}){let{theme:y}=(0,a.wn)();return(0,r.FD)(l.Z,{componentId:"widget-container","data-testid":`${E}-container-${e}`,css:{width:"100%",marginTop:y.spacing.sm,marginBottom:y.spacing.sm,overflow:"hidden"},children:[(0,r.FD)("div",{css:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",padding:y.spacing.md,borderBottom:`1px solid ${y.colors.border}`},children:[(0,r.FD)("div",{css:{flex:1,minWidth:0},children:[(0,r.Y)(i.o.Title,{level:4,css:{margin:0,marginBottom:n?y.spacing.xs:0},children:t}),n&&(0,r.Y)(i.o.Text,{color:"secondary",css:{fontSize:12},children:n})]}),(0,r.FD)("div",{css:{display:"flex",gap:y.spacing.sm,alignItems:"center",flexShrink:0},children:[v,h&&(0,r.Y)(s.$n,{componentId:"widget-retry-btn",type:"tertiary",size:"small",icon:(0,r.Y)(d.A,{}),onClick:h,"aria-label":"Refresh"}),o&&(0,r.Y)(m.N,{to:o,componentId:"widget-open-full-link",asChild:!0,children:(0,r.Y)(s.$n,{componentId:"widget-open-full-btn",type:"tertiary",size:"small",icon:(0,r.Y)(c.A,{}),children:u??(0,r.Y)(f.sA,{id:"V/gaal",defaultMessage:"Open Full"})})})]})]}),(0,r.Y)("div",{css:{width:"100%",height:b,overflow:"hidden",position:"relative"},children:(0,r.Y)("div",{css:{position:"absolute",top:0,left:0,right:0,bottom:0},children:(0,r.Y)(_,{isLoading:p,error:g,onRetry:h,componentId:e,children:w})})})]})}),_=(0,o.memo)(function({isLoading:e,error:t,onRetry:n,componentId:o,children:l}){let{theme:d}=(0,a.wn)();if(e)return(0,r.FD)("div",{"data-testid":`widget-loading-${o}`,css:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",flexDirection:"column",gap:d.spacing.md},children:[(0,r.Y)(u.y,{}),(0,r.Y)(i.o.Text,{color:"secondary",children:(0,r.Y)(f.sA,{id:"dP6xZ0",defaultMessage:"Loading..."})})]});if(t){let e="string"==typeof t?t:t.message;return(0,r.FD)("div",{"data-testid":`widget-error-${o}`,css:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",flexDirection:"column",gap:d.spacing.md,padding:d.spacing.lg,textAlign:"center"},children:[(0,r.Y)(p.A,{css:{color:d.colors.textValidationDanger,fontSize:32}}),(0,r.Y)(i.o.Text,{color:"secondary",children:e}),n&&(0,r.Y)(s.$n,{componentId:"widget-retry-content-btn",type:"tertiary",onClick:n,children:(0,r.Y)(f.sA,{id:"tJEkkV",defaultMessage:"Try Again"})})]})}return(0,r.Y)(h.t,{description:g.z.GENERIC_SUSPENSE,fallback:(0,r.Y)("div",{css:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:(0,r.Y)(u.y,{})}),children:(0,r.Y)("div",{css:{width:"100%",height:"100%"},children:l})})});class w extends o.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e){this.props.onError?.(e)}render(){if(this.state.hasError)return(0,r.Y)(v,{error:this.state.error,onRetry:()=>this.setState({hasError:!1,error:null})});return this.props.children}}let v=(0,o.memo)(function({error:e,onRetry:t}){let{theme:n}=(0,a.wn)();return(0,r.FD)("div",{"data-testid":"widget-error-boundary",css:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",flexDirection:"column",gap:n.spacing.md,padding:n.spacing.lg,textAlign:"center"},children:[(0,r.Y)(p.A,{css:{color:n.colors.textValidationDanger,fontSize:32}}),(0,r.Y)(i.o.Title,{level:4,children:(0,r.Y)(f.sA,{id:"o3Scy/",defaultMessage:"Something went wrong"})}),(0,r.Y)(i.o.Text,{color:"secondary",children:e?.message??"An unexpected error occurred"}),t&&(0,r.Y)(s.$n,{componentId:"widget-error-boundary-retry-btn",type:"tertiary",onClick:t,children:(0,r.Y)(f.sA,{id:"tJEkkV",defaultMessage:"Try Again"})})]})})},860711:(e,t,n)=>{n.d(t,{D:()=>p,H:()=>s});var r=n(610435);n(692738);var o=n(550670),a=n(497895),l=n(532411),i=n(569481);function s(e,t,n){if(!t)return(0,o.yP)(t,n);if(e===i.g8.IDENTIFIED)return`url(#react-flow__${t}_identified)`;if(e===i.g8.SELECTED)return`url(#react-flow__${t}_select)`;if(e===i.g8.HOVERED)return`url(#react-flow__${t}_hover)`;if(e===i.g8.NONE)return`url(#react-flow__${t}_default)`;return(0,o.yP)(t,n)}let d=({id:e,children:t})=>(0,r.Y)("marker",{className:"react-flow__arrowhead",id:e,markerWidth:"12.5",markerHeight:"12.5",viewBox:"-10 -10 20 20",orient:"auto",refX:"0",refY:"0",children:t}),c=({id:e,color:t})=>(0,r.Y)(d,{id:e,children:(0,r.Y)("polyline",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1",fill:t,points:"-5,-4 0,0 -5,4 -5,-4"})}),u=({id:e,color:t})=>(0,r.Y)(d,{id:e,children:(0,r.Y)("polyline",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",fill:"none",points:"-5,-4 0,0 -5,4"})}),p=()=>{let{theme:e}=(0,a.wn)();return(0,r.FD)("defs",{children:[(0,r.Y)(u,{id:"react-flow__arrow_identified",color:e.colors.textPrimary}),(0,r.Y)(u,{id:"react-flow__arrow_hover",color:(0,l.Vu)(e)}),(0,r.Y)(u,{id:"react-flow__arrow_select",color:(0,l.Hz)(e)}),(0,r.Y)(u,{id:"react-flow__arrow_default",color:e.colors.grey400}),(0,r.Y)(c,{id:"react-flow__arrowclosed_identified",color:e.colors.textPrimary}),(0,r.Y)(c,{id:"react-flow__arrowclosed_hover",color:(0,l.Vu)(e)}),(0,r.Y)(c,{id:"react-flow__arrowclosed_select",color:(0,l.Hz)(e)}),(0,r.Y)(c,{id:"react-flow__arrowclosed_default",color:e.colors.grey400})]})}},878920:(e,t,n)=>{function r(e,t,n){let r=n.getRegistry(),o=r.addTarget(e,t);return[o,()=>r.removeTarget(o)]}function o(e,t,n){let r=n.getRegistry(),o=r.addSource(e,t);return[o,()=>r.removeSource(o)]}n.d(t,{V:()=>o,l:()=>r})},882079:(e,t,n)=>{n.d(t,{_:()=>i});var r=n(719256),o=n(993533),a=n(443071),l=n(64222);function i({pipelineAssetType:e,language:t,template:n,templateValues:s,fromDataset:d}){let c,u;if("tests"===e)return`"""
The 'tests' folder contains pytest test files.
Use these tests to validate your pipeline transformations and utilities.
"""


def test_example():
    """Example test function. Replace with your own tests."""
    assert True
`;if("utilities"===e)return(({pythonPipelinesImportStatement:e,pythonPipelinesDecoratorModule:t}=(0,a.D)())=>`"""
The 'utilities' folder contains Python modules.
Keeping them separate provides a clear overview
of utilities you can reuse across your transformations.
"""
from pyspark.sql.functions import udf
from pyspark.sql.types import BooleanType
import re

@udf(returnType=BooleanType())
def is_valid_email(email):
    """
    This function checks if the given email address has a valid format using regex.
    Returns True if valid, False otherwise.

    Example usage:

    ${e}
    from pyspark.sql.functions import col
    from utilities import new_utils

    @${t}.table
    def my_table():
        return (
            spark.read.table("samples.wanderbricks.users")
            .withColumn("valid_email", new_utils.is_valid_email(col("email")))
    """
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
    if email is None:
        return False
    return re.match(pattern, email) is not None`)();if("transformations"===e){let e="";if(n&&d){let r=d.isSink?"SINK":d.datasetType,o=(0,l.Fp)()[r]?.[n]?.[t];if(!o)return"";e=o}else{let r=n&&(0,l.oU)()[n][t];if(!r)return"";e=r}let{tableName:o,pipelineCatalog:a,pipelineSchema:i}=s,c=d&&d.catalog&&d.schema&&d.name&&(d.catalog!==a||d.schema!==i)?`${(0,r.U0)(d.catalog)}.${(0,r.U0)(d.schema)}.${d.name}`:d?.name;return e.replaceAll("<NAME>",o).replaceAll("<PIPELINE_CATALOG>",(0,r.U0)(a)).replaceAll("<PIPELINE_SCHEMA>",(0,r.U0)(i)).replaceAll("<FROM_TABLE_NAME>",c??"")}if(t===o.KVK.PYTHON){let e,t;return e=s.pipelineCatalog,t=s.pipelineSchema,`# Databricks notebook source
# MAGIC %md
# MAGIC ### Example Exploratory Notebook
# MAGIC
# MAGIC Use this notebook to explore the data generated by the pipeline in your preferred programming language.
# MAGIC
# MAGIC **Note**: This notebook is not executed as part of the pipeline.

# COMMAND ----------

spark.sql("USE CATALOG ${(0,r.U0)(e)}")
spark.sql("USE SCHEMA ${(0,r.U0)(t)}")

# COMMAND ----------

display(spark.sql("SELECT * FROM samples.wanderbricks.users"))`}return c=s.pipelineCatalog,u=s.pipelineSchema,`-- Databricks notebook source
-- MAGIC %md
-- MAGIC ### Example Exploratory Notebook
-- MAGIC
-- MAGIC Use this notebook to explore the data generated by the pipeline in your preferred programming language.
-- MAGIC
-- MAGIC **Note**: This notebook is not executed as part of the pipeline.

-- COMMAND ----------

USE CATALOG ${(0,r.U0)(c)};
USE SCHEMA ${(0,r.U0)(u)};

-- COMMAND ----------

SELECT * from samples.wanderbricks.users`}},908664:(e,t,n)=>{n.d(t,{f:()=>a});var r=n(16778),o=n.n(r);class a{static capitalizeAllNames(e){return e.split(" ").map(e=>{if(e.indexOf("@")>=0)return e;return o()(e)}).join(" ")}}},925636:(e,t,n)=>{n.d(t,{I:()=>o});var r=n(692738);function o(e,t){let n=[...t||[]];return null==t&&"function"!=typeof e&&n.push(e),(0,r.useMemo)(()=>"function"==typeof e?e():e,n)}},929530:(e,t,n)=>{n.d(t,{Bd:()=>u,hL:()=>c,sy:()=>s});var r=n(34116),o=n.n(r),a=n(371964),l=n(30472),i=n(953902);let s=(0,a.vt)()(e=>({unsyncedResourceIds:{},scheduleSync:(t,n)=>e(e=>({unsyncedResourceIds:{...e.unsyncedResourceIds,[t]:{status:"scheduled",shouldReconnectRunner:n}}})),runSync:t=>e(e=>({unsyncedResourceIds:{...e.unsyncedResourceIds,[t]:{status:"in-progress"}}})),completeSync:t=>e(e=>{if(e.unsyncedResourceIds[t]?.status!=="in-progress")return e;let{[t]:n,...r}=e.unsyncedResourceIds;return{unsyncedResourceIds:r}}),failSync:(t,n,r)=>e(e=>({unsyncedResourceIds:{...e.unsyncedResourceIds,[t]:{status:"error",error:n,yamlFileURL:r}}}))})),d={unsyncedResourceIds:{},scheduleSync:o(),runSync:o(),completeSync:o(),failSync:o()},c=(0,i.j7)(l.Su,{newHook:function(e){return u(t=>t.unsyncedResourceIds[e]?.status==="error")},oldHook:()=>!1}),u=(0,i.j7)(l.Su,{newHook:function(e){return s(e)},oldHook:e=>e(d)})},984519:(e,t,n)=>{n.d(t,{c:()=>r});let r=(0,n(696514).fH)("Jaws::CloneJob")}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/4688.b32ffdfc0e.chunk.js.map