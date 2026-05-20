"""Dashboard tool handlers: 10 implemented, rest stub-failed."""

import pytest

from handlers.dashboard import DASHBOARD_HANDLERS, dispatch


def test_seven_ported_handlers_exist():
    for name in (
        "renameDashboard", "getDashboardConfig", "editPages", "editWidgetsV2",
        "createDatasetFromSQL", "executeSql", "fetchWidgetRenderData",
    ):
        assert name in DASHBOARD_HANDLERS, f"missing handler: {name}"


def test_three_additional_handlers_present():
    from handlers.dashboard import ADDITIONAL_HANDLERS
    assert isinstance(ADDITIONAL_HANDLERS, (list, tuple)), (
        "ADDITIONAL_HANDLERS must be a list/tuple of tool names"
    )
    assert len(ADDITIONAL_HANDLERS) == 3, (
        f"expected exactly 3 additional handlers, got {len(ADDITIONAL_HANDLERS)}"
    )
    for n in ADDITIONAL_HANDLERS:
        assert n in DASHBOARD_HANDLERS, f"ADDITIONAL_HANDLERS lists {n} but it's not registered"
    ported = {"renameDashboard", "getDashboardConfig", "editPages", "editWidgetsV2",
              "createDatasetFromSQL", "executeSql", "fetchWidgetRenderData"}
    assert not (set(ADDITIONAL_HANDLERS) & ported), (
        f"ADDITIONAL_HANDLERS overlaps with ported handlers: {set(ADDITIONAL_HANDLERS) & ported}"
    )


def test_dispatch_unknown_returns_not_implemented():
    result = dispatch("totallyMadeUpTool", {"foo": "bar"}, state={})
    assert result["status"] == "not_implemented"
    assert "totallyMadeUpTool" in result["message"]


def test_dispatch_rename_returns_success_shape(monkeypatch):
    """renameDashboard handler returns the documented shape."""
    state = {"dashboard_id": "abc"}
    monkeypatch.setattr("handlers.dashboard._patch_dashboard_name", lambda dashboard_id, name: None)
    result = dispatch("renameDashboard", {"newName": "My New Name"}, state=state)
    assert result["status"] == "success"
    assert "My New Name" in result.get("message", "")
