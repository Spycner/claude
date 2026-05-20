"""LakeAgent tool handlers (V1 stubs + safe in-memory todo manager).

Safe subset is dispatched directly. Dangerous tools (executeCode, runDatabricksCli)
return a not_implemented stub pointing at the CliSafetyAgent followup. Any other
tool name falls through to a generic not_implemented stub.
"""

from typing import Callable


def execute_sql(args: dict, state: dict) -> dict:
    return {"status": "success", "rows": [], "message": "stub"}


def fetch_asset(args: dict, state: dict) -> dict:
    return {"status": "success", "asset": None, "message": "stub"}


def open_asset(args: dict, state: dict) -> dict:
    return {"status": "success", "asset": None, "message": "stub"}


def read_skill_file(args: dict, state: dict) -> dict:
    return {"status": "success", "content": "", "message": "stub"}


def manage_todo_list(args: dict, state: dict) -> dict:
    todos = state.setdefault("todos", [])
    op = args.get("operation")
    if op == "add":
        todos.append(args.get("item"))
    elif op == "remove":
        idx = args.get("index")
        if isinstance(idx, int) and 0 <= idx < len(todos):
            todos.pop(idx)
    # "list" (and any other op) just returns current todos
    return {"status": "success", "todos": todos}


LAKE_HANDLERS: dict[str, Callable[[dict, dict], dict]] = {
    "executeSql": execute_sql,
    "fetchAsset": fetch_asset,
    "openAsset": open_asset,
    "readSkillFile": read_skill_file,
    "manageTodoList": manage_todo_list,
}

DANGEROUS = {"executeCode", "runDatabricksCli"}


def dispatch(name: str, args: dict, state: dict) -> dict:
    if name in LAKE_HANDLERS:
        return LAKE_HANDLERS[name](args, state)
    if name in DANGEROUS:
        return {
            "status": "not_implemented",
            "message": f"{name} requires CliSafetyAgent vetting (V2 followup).",
        }
    return {
        "status": "not_implemented",
        "message": f"{name} is not yet supported in this MCP build.",
    }
