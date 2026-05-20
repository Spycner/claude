"""Local thread store for OAuth-mode threads."""

from pathlib import Path

from thread_store import ThreadStore, Thread


def test_create_and_get_thread(tmp_path):
    store = ThreadStore(root=tmp_path)
    t = store.create(agent="LakeAgent", context_id=None, title="hi")
    assert t.thread_id
    fetched = store.get(t.thread_id)
    assert fetched.agent == "LakeAgent"
    assert fetched.title == "hi"


def test_list_threads_filters_by_agent(tmp_path):
    store = ThreadStore(root=tmp_path)
    store.create(agent="LakeAgent", context_id=None, title="a")
    store.create(agent="dashboardAuthoringAgent", context_id="d1", title="b")
    store.create(agent="dashboardAuthoringAgent", context_id="d2", title="c")
    lake = store.list(agent="LakeAgent")
    dash = store.list(agent="dashboardAuthoringAgent")
    dash_d1 = store.list(agent="dashboardAuthoringAgent", context_id="d1")
    assert len(lake) == 1
    assert len(dash) == 2
    assert len(dash_d1) == 1
    assert dash_d1[0].title == "b"


def test_append_message(tmp_path):
    store = ThreadStore(root=tmp_path)
    t = store.create(agent="LakeAgent", context_id=None, title="hi")
    store.append_message(t.thread_id, {"role": "user", "content": "ping"})
    store.append_message(t.thread_id, {"role": "assistant", "content": "pong"})
    fetched = store.get(t.thread_id)
    assert len(fetched.messages) == 2
    assert fetched.messages[0]["content"] == "ping"
