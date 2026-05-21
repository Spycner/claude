# Dashboard tool: `updateDashboardTheme`

Verbatim function-calling tool definition shipped by the **Dashboard Authoring Agent** on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA, opening a dashboard draft canvas, and triggering a single `hi` chat message. See [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md) for the agent's identity, system prompt outline, and skill registry; and [`../../overview/payload.md`](../../overview/payload.md) for the request envelope shared with the other Genie Code agents.

Position in tools array: **2 of 34**.

## What this tool does

> Set the dashboard's visual theme (color tokens + typography).

## Description (verbatim from wire body)

> Customize the dashboard's visual appearance and theme settings.
> 
> - Use this to change colors, fonts, and styling.
> - Colors support separate light/dark mode values. Specify only the mode(s) you want to change.
> 

## Parameters (JSON Schema)

```json
{
  "type": "object",
  "properties": {
    "canvasBackgroundColor": {
      "type": "object",
      "properties": {
        "light": {
          "type": "string",
          "description": "Color value for light mode (hex, e.g., \"#FFFFFF\")"
        },
        "dark": {
          "type": "string",
          "description": "Color value for dark mode (hex, e.g., \"#1F272D\")"
        }
      },
      "required": [],
      "additionalProperties": false,
      "description": "Background color of the dashboard canvas"
    },
    "widgetBackgroundColor": {
      "type": "object",
      "properties": {
        "light": {
          "type": "string",
          "description": "Color value for light mode (hex, e.g., \"#FFFFFF\")"
        },
        "dark": {
          "type": "string",
          "description": "Color value for dark mode (hex, e.g., \"#1F272D\")"
        }
      },
      "required": [],
      "additionalProperties": false,
      "description": "Background color of widgets"
    },
    "widgetBorderColor": {
      "type": "object",
      "properties": {
        "light": {
          "type": "string",
          "description": "Color value for light mode (hex, e.g., \"#FFFFFF\")"
        },
        "dark": {
          "type": "string",
          "description": "Color value for dark mode (hex, e.g., \"#1F272D\")"
        }
      },
      "required": [],
      "additionalProperties": false,
      "description": "Border color of widgets"
    },
    "fontColor": {
      "type": "object",
      "properties": {
        "light": {
          "type": "string",
          "description": "Color value for light mode (hex, e.g., \"#FFFFFF\")"
        },
        "dark": {
          "type": "string",
          "description": "Color value for dark mode (hex, e.g., \"#1F272D\")"
        }
      },
      "required": [],
      "additionalProperties": false,
      "description": "Primary font color for text"
    },
    "selectionColor": {
      "type": "object",
      "properties": {
        "light": {
          "type": "string",
          "description": "Color value for light mode (hex, e.g., \"#FFFFFF\")"
        },
        "dark": {
          "type": "string",
          "description": "Color value for dark mode (hex, e.g., \"#1F272D\")"
        }
      },
      "required": [],
      "additionalProperties": false,
      "description": "Accent color for selections and highlights"
    },
    "visualizationColors": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Color palette for chart series (array of hex colors). Replaces the entire palette."
    },
    "fontFamily": {
      "type": "string",
      "enum": [
        "Arial",
        "Brush Script MT",
        "Courier New",
        "Georgia",
        "Impact",
        "Tahoma",
        "Times New Roman",
        "Trebuchet MS",
        "Verdana"
      ],
      "description": "Font family for dashboard text"
    },
    "widgetHeaderAlignment": {
      "type": "string",
      "enum": [
        "left",
        "center"
      ],
      "description": "Alignment of widget header titles"
    }
  },
  "required": [],
  "additionalProperties": false
}
```

## Required parameters

None — the tool can be invoked with an empty object.

## All properties

### `canvasBackgroundColor`

Type: `object`.

> Background color of the dashboard canvas

Nested properties:
* `light` (string) — Color value for light mode (hex, e.g., "#FFFFFF")
* `dark` (string) — Color value for dark mode (hex, e.g., "#1F272D")

### `widgetBackgroundColor`

Type: `object`.

> Background color of widgets

Nested properties:
* `light` (string) — Color value for light mode (hex, e.g., "#FFFFFF")
* `dark` (string) — Color value for dark mode (hex, e.g., "#1F272D")

### `widgetBorderColor`

Type: `object`.

> Border color of widgets

Nested properties:
* `light` (string) — Color value for light mode (hex, e.g., "#FFFFFF")
* `dark` (string) — Color value for dark mode (hex, e.g., "#1F272D")

### `fontColor`

Type: `object`.

> Primary font color for text

Nested properties:
* `light` (string) — Color value for light mode (hex, e.g., "#FFFFFF")
* `dark` (string) — Color value for dark mode (hex, e.g., "#1F272D")

### `selectionColor`

Type: `object`.

> Accent color for selections and highlights

Nested properties:
* `light` (string) — Color value for light mode (hex, e.g., "#FFFFFF")
* `dark` (string) — Color value for dark mode (hex, e.g., "#1F272D")

### `visualizationColors`

Type: `array`.

> Color palette for chart series (array of hex colors). Replaces the entire palette.

### `fontFamily`

Type: `string`. enum: 'Arial', 'Brush Script MT', 'Courier New', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Trebuchet MS', 'Verdana'

> Font family for dashboard text

### `widgetHeaderAlignment`

Type: `string`. enum: 'left', 'center'

> Alignment of widget header titles

## Handler notes

Extracted from SPA chunk `40961.110e90c1b8.chunk.js` (module `229581` — `DashboardAuthoringAgentContext`). The Dashboard Authoring Agent registers each tool via a `(0,az.z6)({...})` factory call inside the agent context's `useMemo`, with the actual handler defined in a sibling `useCallback`. The wrapper below is verbatim minified JavaScript.

**Handler binding**: the `execute:` arrow points at the local variable `s`, defined in the same factory by a `(0,i.useCallback)((args,signal,context) => …)`.

**Surrounding `useCallback` body** (verbatim, minified — 1033 bytes):

```javascript
((t,i,s)=>rR(function*(){return a6({toolName:rv,abortSignal:s,context:i,validate:()=>{if(!n)return a0("Invalid arguments: Dashboard name is undefined.")}},()=>rR(function*(){let i=yield e("Update Dashboard Theme",()=>a(e=>{var a;let r,i,n,s,o,l=e.uiSettings,d=(a=l?.theme,r=rw(a?.canvasBackgroundColor,t.canvasBackgroundColor),i=rw(a?.widgetBackgroundColor,t.widgetBackgroundColor),n=rw(a?.widgetBorderColor,t.widgetBorderColor),s=rw(a?.fontColor,t.fontColor),o=rw(a?.selectionColor,t.selectionColor),{...a,...void 0!==r&&{canvasBackgroundColor:r},...void 0!==i&&{widgetBackgroundColor:i},...void 0!==n&&{widgetBorderColor:n},...void 0!==s&&{fontColor:s},...void 0!==o&&{selectionColor:o},...void 0!==t.visualizationColors&&{visualizationColors:t.visualizationColors},...void 0!==t.fontFamily&&{fontFamily:t.fontFamily},...void 0!==t.widgetHeaderAlignment&&{widgetHeaderAlignment:t.widgetHeaderAlignment}}),c={...l,theme:d};return{...e,uiSettings:c}})),n=yield r();return i.success?aK(i.message,n):aX(i.message,n)})())})(),[n,r,a,e])
```

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in the wrapper. The execute body delegates to imported helpers — see the Helpers list below to trace network calls one hop deeper.


## Verified network behaviour

_(Live wire trace not yet captured for this tool. To collect: open a dashboard draft canvas in chrome-devtools-mcp, install the `window.fetch` capture from [`../../traces/`](../../traces/), then trigger this tool from the UI or via a directed prompt. Save the resulting request log as `../../traces/updateDashboardTheme.json`.)_
