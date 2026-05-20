"""LakeAgent tool handlers: safe subset implemented, dangerous tools stub-failed."""

from handlers.lake_agent import LAKE_HANDLERS, dispatch


def test_safe_handlers_exist():
    for name in ("executeSql", "fetchAsset", "openAsset", "readSkillFile", "manageTodoList"):
        assert name in LAKE_HANDLERS, f"missing safe handler: {name}"


def test_dangerous_handlers_stub_fail_with_cli_safety_message():
    for name in ("executeCode", "runDatabricksCli"):
        result = dispatch(name, {"foo": "bar"}, state={})
        assert result["status"] == "not_implemented"
        assert "CliSafetyAgent" in result["message"], (
            f"{name} stub should point to CliSafetyAgent followup; got: {result['message']}"
        )


def test_unknown_tool_generic_stub():
    result = dispatch("renderChart", {}, state={})
    assert result["status"] == "not_implemented"
    assert "renderChart" in result["message"]
