# Genie Code recipes

Worked examples by intent. Each shows the MCP call shape and the expected interaction pattern.

## Create a dashboard

User: "Build me a sales dashboard showing weekly revenue and customer count from `growth.orders`."

1. Create the dashboard scaffold:

   ```bash
   databricks lakeview create --display-name "Sales overview"
   # capture the returned dashboard_id
   ```

2. Hand off to Genie Code:

   ```python
   chat(
     prompt="Build a sales dashboard from growth.orders showing weekly revenue and customer count.",
     agent="dashboardAuthoringAgent",
     context_id="<dashboard_id>",
     options={"mode": "cookie"},
   )
   ```

3. Review visually with chrome-devtools-mcp.

## Edit an existing dashboard

User: "On my last sales dashboard, the KPI tile colors are wrong. Make them match the brand palette."

1. Find the most recent thread for that dashboard:

   ```python
   list_threads(agent="dashboardAuthoringAgent", context_id="<dashboard_id>", limit=5)
   ```

2. Resume:

   ```python
   resume_chat(thread_id="<recent_thread>", prompt="Update KPI tile colors to brand palette (#0E5C8F, #F19847, #5A8A4F).")
   ```

## Ask LakeAgent a workspace question

User: "What tables do I have in the bronze schema?"

```python
chat(
  prompt="What tables are in my bronze schema?",
  agent="LakeAgent",
  context_id=None,
  options={"mode": "oauth"},
)
```

## Continue from a past session

```python
list_threads(limit=20)               # find the right thread
get_thread(thread_id="<id>")          # review full history
resume_chat(thread_id="<id>", prompt="...")
```
