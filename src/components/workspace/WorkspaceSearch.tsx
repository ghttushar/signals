import { useState } from "react";
import { mockPeople, mockMeetings, mockDecisions, mockDocuments } from "@/lib/mock";

export function WorkspaceSearch() {
  const [q, setQ] = useState("");
  const results = q
    ? [...mockPeople.map((p) => `Person: ${p.name} · ${p.role}`), ...mockMeetings.map((m) => `Meeting: ${m.title} · ${m.when}`), ...mockDecisions.map((d) => `Decision: ${d.title}`), ...mockDocuments.map((d) => `Document: ${d.name}`)].filter((s) => s.toLowerCase().includes(q.toLowerCase()))
    : [];
  return (
    <div className="rounded-lg border border-border bg-card p-3">
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Semantic search — why did sales drop last week? What did we decide about Walmart promo?" className="w-full h-9 rounded-md border border-border bg-background px-3 text-sm outline-none" />
      <div className="mt-3 space-y-1 text-xs">
        {q && (results.length ? results.slice(0, 6).map((r) => <div key={r} className="rounded border border-border p-2">{r} · <span className="text-muted-foreground">evidence: Slack/Meet/Doc source · 2 days ago</span></div>) : <div className="text-muted-foreground">No results — try “Acme Buy Box”.</div>)}
        {!q && <div className="text-muted-foreground">Search Business/Accounts/Products/People/Work/Meetings/Documents/Messages/Decisions/Reports — structured evidence, not keyword list.</div>}
      </div>
    </div>
  );
}
