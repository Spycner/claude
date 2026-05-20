"""Dashboard tool handlers for the Genie Code MCP server.

Ports the seven MVP handlers from `.workbench/genie-code-driver/driver.py` to the
new MCP signature ``(args: dict, state: dict) -> dict`` plus three additional
handlers chosen from the captured dashboard tool surface.

Additional handlers (and why):

- ``getVizTypeDefinition`` — Mandatory pre-step the agent runs before
  ``editWidgetsV2`` to fetch the JSON Schema for a widget type. Already had a
  working implementation in the driver (canned schemas), so porting is cheap
  and unblocks correct widget authoring without needing live HTTP.
- ``deleteDataset`` — The natural counterpart to ``createDatasetFromSQL``; the
  agent emits it during automatic cleanup when widget mutations leave orphaned
  datasets. Mutates serialized_dashboard locally, same shape as the create
  helper, so it's almost free to add.
- ``updateDashboardTheme`` — A top-level dashboard mutator with a small, fixed
  parameter surface. Lets a user say "make the dashboard dark" without
  falling back to ``not_implemented`` for a single field patch.

V1 helper bodies that would require live HTTP raise NotImplementedError so the
tests can monkeypatch them (the rename test uses exactly this pattern).
"""

from __future__ import annotations

import re
from typing import Any, Callable

# ----- private helpers (test patches them by exact name) -----


def _patch_dashboard_name(dashboard_id: str, name: str) -> None:
    """PATCH /api/2.0/lakeview/dashboards/<id> with display_name=name.

    V1 stub: wire via httpx + OAuth bearer in V1.1. Tests monkeypatch.
    """
    raise NotImplementedError("wire via httpx + OAuth in V1.1")


def _get_dashboard(dashboard_id: str) -> dict:
    """GET /api/2.0/lakeview/dashboards/<id> -> full dashboard resource."""
    raise NotImplementedError("wire via httpx + OAuth in V1.1")


def _patch_dashboard(dashboard_id: str, payload: dict) -> None:
    """PATCH /api/2.0/lakeview/dashboards/<id> with arbitrary payload fields."""
    raise NotImplementedError("wire via httpx + OAuth in V1.1")


def _execute_sql_warehouse(statement: str, warehouse_id: str) -> list[dict]:
    """POST /api/2.0/sql/statements -> wait, return rows as list of dicts."""
    raise NotImplementedError("wire via httpx + OAuth in V1.1")


def _fetch_widget_render_data(widget_id: str) -> dict:
    """V1 stub returning {} (rendering verification deferred)."""
    return {}


# ----- canonical-spec helpers (ported verbatim from driver.py) -----

TEMPORAL_HINTS = {
    "date", "day", "ts", "time", "timestamp", "datetime", "dt", "month",
    "year", "week", "hour", "pickup_datetime", "dropoff_datetime",
}
DIM_HINTS = {
    "product", "category", "name", "country", "continent", "city", "state",
    "region", "type", "method", "payment_method", "franchise", "theme",
    "color", "zip", "borough", "neighborhood", "hour_of_day", "dow",
    "day_of_week",
}
MONEY_HINTS = {
    "revenue", "price", "fare", "amount", "total", "sales", "spend", "cost",
    "value",
}


def _field_kind(name: str) -> str:
    low = name.lower()
    if any(h in low for h in TEMPORAL_HINTS):
        return "temporal"
    if any(h in low for h in DIM_HINTS):
        return "nominal"
    return "quantitative"


def _is_money(name: str) -> bool:
    low = name.lower()
    return any(h in low for h in MONEY_HINTS)


def _display(name: str) -> str:
    parts = re.split(r"[_\s]+", name)
    return " ".join(p.capitalize() for p in parts if p)


def _money_format() -> dict:
    return {"type": "number-currency", "currencyCode": "USD", "abbreviateMode": "compact"}


def _canonical_spec(widget_type: str, title: str, fields: list[str]) -> dict:
    """Build a known-good renderSpec from widgetType + field names."""
    if widget_type == "counter":
        if not fields:
            return {"version": 2, "frame": {"title": title, "showTitle": True}, "widgetType": "counter"}
        f = fields[0]
        value = {"fieldName": f, "displayName": _display(f)}
        if _is_money(f):
            value["format"] = _money_format()
        return {
            "version": 2,
            "frame": {"title": title, "showTitle": True},
            "widgetType": "counter",
            "encodings": {"value": value},
        }
    if widget_type == "line":
        if len(fields) < 2:
            return {"version": 3, "frame": {"title": title, "showTitle": True}, "widgetType": "line"}
        x = next((f for f in fields if _field_kind(f) in ("temporal", "quantitative")), fields[0])
        y_candidates = [f for f in fields if f != x]
        y = next((f for f in y_candidates if _field_kind(f) == "quantitative"), y_candidates[0])
        y_enc = {"fieldName": y, "axis": {"title": _display(y)}, "displayName": _display(y),
                 "scale": {"type": "quantitative"}}
        if _is_money(y):
            y_enc["format"] = _money_format()
        return {
            "version": 3,
            "frame": {"showTitle": True, "title": title},
            "widgetType": "line",
            "encodings": {
                "x": {"fieldName": x, "axis": {"title": _display(x)},
                      "scale": {"type": _field_kind(x)}},
                "y": y_enc,
            },
        }
    if widget_type == "bar":
        if len(fields) < 2:
            return {"version": 3, "frame": {"title": title, "showTitle": True}, "widgetType": "bar"}
        dim = next((f for f in fields if _field_kind(f) == "nominal"), None)
        measure = next((f for f in fields if _field_kind(f) == "quantitative"), None)
        if not dim or not measure:
            dim, measure = fields[0], fields[1]
        x_enc = {"fieldName": measure, "axis": {"title": _display(measure)},
                 "scale": {"type": "quantitative"}}
        if _is_money(measure):
            x_enc["format"] = _money_format()
        return {
            "version": 3,
            "frame": {"showTitle": True, "title": title},
            "widgetType": "bar",
            "encodings": {
                "x": x_enc,
                "y": {"fieldName": dim, "axis": {"title": _display(dim)},
                      "scale": {"type": "categorical", "sort": {"by": "x", "order": "desc"}}},
            },
        }
    if widget_type == "pie":
        if len(fields) < 2:
            return {"version": 3, "frame": {"title": title, "showTitle": True}, "widgetType": "pie"}
        dim = next((f for f in fields if _field_kind(f) == "nominal"), fields[0])
        measure = next((f for f in fields if _field_kind(f) == "quantitative"), fields[-1])
        return {
            "version": 3,
            "frame": {"showTitle": True, "title": title},
            "widgetType": "pie",
            "encodings": {
                "angle": {"fieldName": measure, "displayName": _display(measure),
                          "scale": {"type": "quantitative"}},
                "color": {"fieldName": dim, "displayName": _display(dim),
                          "scale": {"type": "categorical"}},
            },
        }
    if widget_type == "table":
        cols = []
        for f in fields:
            col = {"fieldName": f, "displayName": _display(f)}
            if _is_money(f):
                col["format"] = _money_format()
            cols.append(col)
        return {
            "version": 2,
            "frame": {"showTitle": True, "title": title},
            "widgetType": "table",
            "encodings": {"columns": cols},
        }
    return {"version": 2, "frame": {"title": title, "showTitle": True}, "widgetType": widget_type or "table"}


# ----- ported handlers (new signature: args, state) -----


def handle_rename_dashboard(args: dict, state: dict) -> dict:
    """Rename the dashboard via _patch_dashboard_name helper.

    Wire name: ``renameDashboard``.
    Args: ``{"newName": str}`` (also accepts legacy ``displayName``).
    """
    new_name = args.get("newName") or args.get("displayName")
    if not new_name:
        return {"status": "error", "message": "missing newName"}
    dashboard_id = state.get("dashboard_id")
    if not dashboard_id:
        return {"status": "error", "message": "state.dashboard_id is required"}
    try:
        _patch_dashboard_name(dashboard_id, new_name)
    except Exception as e:
        return {"status": "error", "message": f"{type(e).__name__}: {e}"}
    return {"status": "success", "message": f"renamed dashboard to {new_name}"}


def handle_get_dashboard_config(args: dict, state: dict) -> dict:
    """Return the live dashboard config (displayName + pages).

    Wire name: ``getDashboardConfig``. Args: ``{}``.
    """
    dashboard_id = state.get("dashboard_id")
    if not dashboard_id:
        return {"status": "error", "message": "state.dashboard_id is required"}
    try:
        dash = _get_dashboard(dashboard_id)
    except Exception as e:
        return {"status": "error", "message": f"{type(e).__name__}: {e}"}
    return {
        "status": "success",
        "message": "fetched dashboard config",
        "displayName": dash.get("display_name") or dash.get("displayName"),
        "pages": dash.get("pages", []),
    }


def handle_edit_pages(args: dict, state: dict) -> dict:
    """Apply create / rename / delete page mutations.

    Wire name: ``editPages``. Args: ``{"changes": {"pageMutations": [...]}}``.
    The dashboard's serialized pages live in ``state["serialized"]["pages"]``;
    we mutate that in place and rely on the caller to persist.
    """
    dashboard_id = state.get("dashboard_id")
    if not dashboard_id:
        return {"status": "error", "message": "state.dashboard_id is required"}
    serialized = state.setdefault("serialized", {})
    pages = serialized.setdefault("pages", [])
    mutations = args.get("changes", {}).get("pageMutations", [])
    for m in mutations:
        action = m.get("action")
        ref = m.get("pageRefName", "")
        page_id = ref.split("/", 1)[1] if "/" in ref else ref
        if action == "create":
            pages.append({
                "name": page_id,
                "displayName": m.get("displayName", page_id),
                "pageType": "PAGE_TYPE_CANVAS",
                "layout": [],
            })
        elif action == "rename":
            for pg in pages:
                if pg["name"] == page_id:
                    pg["displayName"] = m["displayName"]
        elif action == "delete":
            serialized["pages"] = [p for p in pages if p["name"] != page_id]
            pages = serialized["pages"]
    try:
        _patch_dashboard(dashboard_id, {"serialized_dashboard": serialized})
    except Exception as e:
        return {"status": "error", "message": f"{type(e).__name__}: {e}"}
    return {
        "status": "success",
        "message": f"applied {len(mutations)} page mutation(s)",
        "pages": [p["name"] for p in serialized["pages"]],
    }


def handle_edit_widgets_v2(args: dict, state: dict) -> dict:
    """Apply widget mutations using canonical renderSpec.

    Wire name: ``editWidgetsV2``. We replace the agent's renderSpec with a
    canonical spec built from widgetType + query field names (the agent's spec
    is unreliable; see driver.py for the rationale).
    """
    dashboard_id = state.get("dashboard_id")
    if not dashboard_id:
        return {"status": "error", "message": "state.dashboard_id is required"}
    serialized = state.setdefault("serialized", {})
    pages = serialized.setdefault("pages", [])
    mutations = args.get("changes", {}).get("widgetMutations", [])
    applied = []
    for m in mutations:
        action = m.get("action")
        ref = m.get("widgetRefName", "")
        try:
            _, page_id, _, widget_id = ref.split("/", 3)
        except ValueError:
            applied.append({"action": action, "ref": ref, "error": "invalid widgetRefName"})
            continue
        page = next((p for p in pages if p["name"] == page_id), None)
        if not page:
            applied.append({"action": action, "ref": ref, "error": "page not found"})
            continue
        page.setdefault("layout", [])
        if action == "delete":
            page["layout"] = [w for w in page["layout"] if w.get("widget", {}).get("name") != widget_id]
            applied.append({"action": "delete", "ref": ref})
            continue
        position = m.get("position") or {"x": 0, "y": 0, "width": 6, "height": 6}
        pos = {
            "x": position.get("x", position.get("column", 0)),
            "y": position.get("y", position.get("row", 0)),
            "width": position.get("width", 6),
            "height": position.get("height", 6),
        }
        render = m.get("render", {})
        queries_in = render.get("queries", [])
        dash_queries = []
        all_field_names: list[str] = []
        for q in queries_in:
            qspec = q.get("query") or {}
            ds_name = qspec.get("datasetName", "")
            if ds_name.startswith("datasets/"):
                ds_name = ds_name.split("/", 1)[1]
            fields_in = qspec.get("fields", [])
            fields_out = []
            for f in fields_in:
                name = f.get("name") or f.get("fieldName")
                expr = f.get("expression") or (f"`{name}`" if name else None)
                if name:
                    fields_out.append({"name": name, "expression": expr})
                    all_field_names.append(name)
            dash_queries.append({
                "name": q.get("queryName", q.get("name", "main_query")),
                "query": {
                    "datasetName": ds_name,
                    "fields": fields_out,
                    "disaggregated": qspec.get("disaggregated", qspec.get("disaggregatedData", True)),
                },
            })
        agent_spec = render.get("renderSpec") or render.get("spec") or {}
        widget_type = agent_spec.get("widgetType") or render.get("widgetType") or "counter"
        title = (agent_spec.get("frame", {}) or {}).get("title") or render.get("name") or _display(widget_id)
        spec = _canonical_spec(widget_type, title, all_field_names)
        if render.get("type") == "markdown":
            widget_payload = {"name": widget_id, "textbox_spec": render.get("text"), "spec": spec}
        else:
            widget_payload = {"name": widget_id, "queries": dash_queries or None, "spec": spec}
        widget_payload = {k: v for k, v in widget_payload.items() if v is not None}
        layout_item = {"widget": widget_payload, "position": pos}
        existing_idx = next((i for i, w in enumerate(page["layout"]) if w.get("widget", {}).get("name") == widget_id), None)
        if existing_idx is not None and action != "create":
            page["layout"][existing_idx] = layout_item
        else:
            page["layout"].append(layout_item)
        applied.append({"action": action or "create", "ref": ref, "title": title, "type": widget_type})
    try:
        _patch_dashboard(dashboard_id, {"serialized_dashboard": serialized})
    except Exception as e:
        return {"status": "error", "message": f"{type(e).__name__}: {e}"}
    return {"status": "success", "message": f"applied {len(applied)} widget mutation(s)", "applied": applied}


def handle_create_dataset_from_sql(args: dict, state: dict) -> dict:
    """Add a raw-SQL dataset to the dashboard.

    Wire name: ``createDatasetFromSQL``.
    Args: ``{"datasetRefName": str, "displayName": str?, "sqlQuery": str, "parameters": [...]?}``.
    """
    dashboard_id = state.get("dashboard_id")
    if not dashboard_id:
        return {"status": "error", "message": "state.dashboard_id is required"}
    ref = args.get("datasetRefName")
    sql = args.get("sqlQuery")
    if not ref or not sql:
        return {"status": "error", "message": "datasetRefName and sqlQuery are required"}
    ds_name = ref.split("/", 1)[1] if "/" in ref else ref
    serialized = state.setdefault("serialized", {})
    datasets = serialized.setdefault("datasets", [])
    datasets = [d for d in datasets if d.get("name") != ds_name]
    datasets.append({
        "name": ds_name,
        "displayName": args.get("displayName", ds_name),
        "queryLines": [sql],
        "parameters": args.get("parameters", []),
    })
    serialized["datasets"] = datasets
    try:
        _patch_dashboard(dashboard_id, {"serialized_dashboard": serialized})
    except Exception as e:
        return {"status": "error", "message": f"{type(e).__name__}: {e}"}
    return {"status": "success", "message": f"created dataset {ref}", "datasetRefName": ref}


def handle_execute_sql(args: dict, state: dict) -> dict:
    """Run an ad-hoc SQL statement against the dashboard's warehouse.

    Wire name: ``executeSql``. Args: ``{"sql": str, "summary": str?}``.
    """
    sql = args.get("sql")
    if not sql:
        return {"status": "error", "message": "sql is required"}
    warehouse_id = state.get("warehouse_id")
    if not warehouse_id:
        return {"status": "error", "message": "state.warehouse_id is required"}
    try:
        rows = _execute_sql_warehouse(sql, warehouse_id)
    except Exception as e:
        return {"status": "error", "message": f"{type(e).__name__}: {e}", "summary": args.get("summary")}
    return {
        "status": "success",
        "message": args.get("summary") or "executed SQL",
        "rows": rows[:50],
        "row_count": len(rows),
    }


def handle_fetch_widget_render_data(args: dict, state: dict) -> dict:
    """Fetch render data for one widget. V1: stubbed.

    Wire name: ``fetchWidgetRenderData``. Args: ``{"widgetRefName": str}``.
    """
    ref = args.get("widgetRefName", "")
    widget_id = ref.rsplit("/", 1)[-1] if ref else ""
    try:
        data = _fetch_widget_render_data(widget_id)
    except Exception as e:
        return {"status": "error", "message": f"{type(e).__name__}: {e}"}
    return {
        "status": "success",
        "message": "render verification stubbed in V1; widget assumed to render successfully",
        "widgetRefName": ref,
        "data": data,
    }


# ----- additional handlers -----

VIZ_SCHEMAS = {
    "counter": {
        "widgetType": "counter",
        "encodings": {"value": {"fieldName": "<col>", "displayName": "<label>"}},
        "frame": {"title": "<title>", "showTitle": True},
        "version": 2,
        "note": "Field <col> must be a single aggregated value from the dataset.",
    },
    "line": {
        "widgetType": "line",
        "encodings": {
            "x": {"fieldName": "<x_col>", "axis": {"title": "X"}, "scale": {"type": "temporal"}},
            "y": {"fieldName": "<y_col>", "axis": {"title": "Y"}, "scale": {"type": "quantitative"}},
        },
        "frame": {"title": "<title>", "showTitle": True},
        "version": 3,
    },
    "bar": {
        "widgetType": "bar",
        "encodings": {
            "x": {"fieldName": "<x_col>", "axis": {"title": "X"}, "scale": {"type": "categorical"}},
            "y": {"fieldName": "<y_col>", "axis": {"title": "Y"}, "scale": {"type": "quantitative"}},
        },
        "frame": {"title": "<title>", "showTitle": True},
        "version": 3,
    },
    "pie": {
        "widgetType": "pie",
        "encodings": {
            "angle": {"fieldName": "<value_col>"},
            "color": {"fieldName": "<category_col>"},
        },
        "frame": {"title": "<title>", "showTitle": True},
        "version": 3,
    },
    "table": {
        "widgetType": "table",
        "encodings": {"columns": [{"fieldName": "<col>", "displayName": "<label>"}]},
        "frame": {"title": "<title>", "showTitle": True},
        "version": 2,
    },
}


def handle_get_viz_type_definition(args: dict, state: dict) -> dict:
    """Return the canonical JSON-Schema fragment for a widget type.

    Wire name: ``getVizTypeDefinition``. Args: ``{"typeName": str}``.
    """
    name = args.get("typeName") or args.get("widgetType") or ""
    if name in VIZ_SCHEMAS:
        return {"status": "success", "message": f"schema for {name}", "schema": VIZ_SCHEMAS[name]}
    return {
        "status": "error",
        "message": f"unknown viz type {name!r}",
        "available": sorted(VIZ_SCHEMAS),
    }


def handle_delete_dataset(args: dict, state: dict) -> dict:
    """Drop a dataset from the dashboard.

    Wire name: ``deleteDataset``. Args: ``{"datasetRefName": str}``.
    """
    dashboard_id = state.get("dashboard_id")
    if not dashboard_id:
        return {"status": "error", "message": "state.dashboard_id is required"}
    ref = args.get("datasetRefName")
    if not ref:
        return {"status": "error", "message": "datasetRefName is required"}
    ds_name = ref.split("/", 1)[1] if "/" in ref else ref
    serialized = state.setdefault("serialized", {})
    datasets = serialized.get("datasets", [])
    before = len(datasets)
    serialized["datasets"] = [d for d in datasets if d.get("name") != ds_name]
    after = len(serialized["datasets"])
    if before == after:
        return {"status": "error", "message": f"dataset {ref} not found"}
    try:
        _patch_dashboard(dashboard_id, {"serialized_dashboard": serialized})
    except Exception as e:
        return {"status": "error", "message": f"{type(e).__name__}: {e}"}
    return {"status": "success", "message": f"deleted dataset {ref}"}


def handle_update_dashboard_theme(args: dict, state: dict) -> dict:
    """Set color tokens / typography on the dashboard's theme.

    Wire name: ``updateDashboardTheme``. Args mirror the wire schema (a flat
    dict of optional theme tokens). We merge into ``serialized.theme`` and
    persist.
    """
    dashboard_id = state.get("dashboard_id")
    if not dashboard_id:
        return {"status": "error", "message": "state.dashboard_id is required"}
    if not args:
        return {"status": "error", "message": "at least one theme field is required"}
    serialized = state.setdefault("serialized", {})
    theme = serialized.setdefault("theme", {})
    theme.update(args)
    try:
        _patch_dashboard(dashboard_id, {"serialized_dashboard": serialized})
    except Exception as e:
        return {"status": "error", "message": f"{type(e).__name__}: {e}"}
    return {"status": "success", "message": f"updated {len(args)} theme field(s)"}


# ----- registry + dispatch -----

ADDITIONAL_HANDLERS: tuple[str, ...] = (
    "getVizTypeDefinition",
    "deleteDataset",
    "updateDashboardTheme",
)

DASHBOARD_HANDLERS: dict[str, Callable[[dict, dict], dict]] = {
    # 7 ported from driver.py
    "renameDashboard": handle_rename_dashboard,
    "getDashboardConfig": handle_get_dashboard_config,
    "editPages": handle_edit_pages,
    "editWidgetsV2": handle_edit_widgets_v2,
    "createDatasetFromSQL": handle_create_dataset_from_sql,
    "executeSql": handle_execute_sql,
    "fetchWidgetRenderData": handle_fetch_widget_render_data,
    # 3 additional
    "getVizTypeDefinition": handle_get_viz_type_definition,
    "deleteDataset": handle_delete_dataset,
    "updateDashboardTheme": handle_update_dashboard_theme,
}


def dispatch(tool_name: str, args: dict, state: dict) -> dict:
    """Route a tool call to the matching dashboard handler.

    Unknown tools return ``{"status": "not_implemented", "message": ...}`` so
    the agent can rephrase or break the task into supported operations.
    """
    handler = DASHBOARD_HANDLERS.get(tool_name)
    if handler is None:
        return {
            "status": "not_implemented",
            "message": (
                f"{tool_name} is not yet supported in this MCP build. "
                "Please rephrase or break the task into supported operations."
            ),
        }
    return handler(args, state)
