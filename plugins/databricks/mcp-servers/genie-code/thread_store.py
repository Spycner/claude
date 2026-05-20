"""Local JSON thread store for OAuth-mode threads."""

from __future__ import annotations

import json
import os
from dataclasses import dataclass, field, asdict
from datetime import datetime, timezone
from pathlib import Path
from uuid import uuid4


@dataclass
class Thread:
    thread_id: str
    agent: str
    context_id: str | None
    title: str
    created_at: str
    updated_at: str
    messages: list[dict] = field(default_factory=list)


class ThreadStore:
    def __init__(self, root: Path | None = None) -> None:
        if root is None:
            base = os.environ.get("XDG_STATE_HOME") or str(Path.home() / ".local" / "state")
            root = Path(base) / "genie-code" / "threads"
        self.root = Path(root)
        self.root.mkdir(parents=True, exist_ok=True)

    def create(self, agent: str, context_id: str | None, title: str) -> Thread:
        now = datetime.now(timezone.utc).isoformat()
        thread = Thread(
            thread_id=uuid4().hex,
            agent=agent,
            context_id=context_id,
            title=title,
            created_at=now,
            updated_at=now,
            messages=[],
        )
        self._write(thread)
        return thread

    def get(self, thread_id: str) -> Thread:
        path = self.root / f"{thread_id}.json"
        if not path.is_file():
            raise KeyError(thread_id)
        with path.open("r", encoding="utf-8") as fh:
            data = json.load(fh)
        return Thread(**data)

    def list(
        self,
        agent: str | None = None,
        context_id: str | None = None,
        limit: int = 20,
    ) -> list[Thread]:
        threads: list[Thread] = []
        for path in self.root.glob("*.json"):
            with path.open("r", encoding="utf-8") as fh:
                data = json.load(fh)
            t = Thread(**data)
            if agent is not None and t.agent != agent:
                continue
            if context_id is not None and t.context_id != context_id:
                continue
            threads.append(t)
        threads.sort(key=lambda t: t.updated_at, reverse=True)
        return threads[:limit]

    def append_message(self, thread_id: str, message: dict) -> None:
        thread = self.get(thread_id)
        thread.messages.append(message)
        thread.updated_at = datetime.now(timezone.utc).isoformat()
        self._write(thread)

    def _write(self, thread: Thread) -> None:
        path = self.root / f"{thread.thread_id}.json"
        with path.open("w", encoding="utf-8") as fh:
            json.dump(asdict(thread), fh, indent=2)
