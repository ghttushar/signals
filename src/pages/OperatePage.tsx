import { useState, useMemo } from "react";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockSignals, mockAccounts } from "@/lib/mock";
import type { Signal } from "@/lib/types";
import { AanMascot } from "@/components/aan/AanMascot";
import { SignalCard } from "@/components/operate/SignalCard";
import { TracePanel } from "@/components/operate/TracePanel";
import { ExecutionTimeline } from "@/components/operate/ExecutionTimeline";
import { WatchList } from "@/components/operate/WatchList";
import { RightPanel } from "@/components/layout/RightPanel";

type ColumnKey = "in_progress" | "awaiting_approval" | "approved" | "done";

function columnFor(s: Signal): ColumnKey {
  if (s.status === "in_progress") return "in_progress";
  if (s.status === "awaiting_approval" || s.status === "new") return "awaiting_approval";
  if (s.status === "approved") return "approved";
  if (s.status === "verified" || s.status === "dismissed") return "done";
  if (s.status === "executing") return "approved";
  return "awaiting_approval";
}

const columns: { key: ColumnKey; label: string }[] = [
  { key: "in_progress", label: "In Progress" },
  { key: "awaiting_approval", label: "Awaiting Approval" },
  { key: "approved", label: "Approved" },
  { key: "done", label: "Done" },
];

export default function OperatePage() {
  const [signals, setSignals] = useState<Signal[]>(mockSignals);
  const [traceSignal, setTraceSignal] = useState<Signal | null>(null);
  const [detailSignal, setDetailSignal] = useState<Signal | null>(null);
  const [showWatches, setShowWatches] = useState(false);

  const grouped = useMemo(() => {
    const g: Record<ColumnKey, Signal[]> = { in_progress: [], awaiting_approval: [], approved: [], done: [] };
    signals.forEach((s) => g[columnFor(s)].push(s));
    return g;
  }, [signals]);

  const approve = (id: string) => setSignals((prev) => prev.map((s) => (s.id === id ? { ...s, status: "approved" as const } : s)));
  const reject = (id: string) => setSignals((prev) => prev.map((s) => (s.id === id ? { ...s, status: "dismissed" as const } : s)));

  // simulate live movement: after mount, move first new to awaiting_approval
  // deterministic mock orchestration per FEASIBILITY §18

  return (
    <div className="space-y-6">
      {/* Morning brief + coordination strip */}
      <div className="rounded-lg border border-border bg-card p-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="font-heading font-semibold">Good morning. 3 things changed. 1 needs you.</div>
          <div className="text-xs text-muted-foreground mt-1">
            <span className="font-medium text-foreground">Bruno flagged 3 SKUs at 6-day cover → Marko paused spend</span> · Acme · 30 min ago
          </div>
          <div className="flex flex-wrap gap-1.5 mt-2">
            <Badge className="bg-success/10 text-success border-success/20">Ask me first</Badge>
            <span className="text-xs text-muted-foreground">1 pending • 9 active • Handling it 100% • 1 done this week</span>
          </div>
          <div className="text-[11px] text-muted-foreground mt-2">Intelligence state: I noticed Buy Box slip · I recommend pausing waste · Waiting on you to approve</div>
        </div>
        <div className="shrink-0 flex flex-col items-center gap-2">
          <AanMascot size={48} state="listening" />
          <Button size="sm" variant="outline" onClick={() => setShowWatches((v) => !v)}>
            {showWatches ? "Hide watches" : "Watches"}
          </Button>
        </div>
      </div>

      {/* Kanban */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {columns.map((col) => (
          <div key={col.key} className="rounded-lg border border-border bg-muted/30 p-3 min-h-[320px]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wide">{col.label}</span>
              <Badge className="bg-card text-muted-foreground border-border">{grouped[col.key].length}</Badge>
            </div>
            <div className="space-y-3">
              {grouped[col.key].length === 0 && <div className="text-xs text-muted-foreground border border-dashed border-border rounded p-3 bg-card">Nothing here — quietly monitoring.</div>}
              {grouped[col.key].map((s) => (
                <SignalCard
                  key={s.id}
                  signal={s}
                  onViewTrace={() => setTraceSignal(s)}
                  onApprove={() => approve(s.id)}
                  onReject={() => reject(s.id)}
                  onInvestigate={() => setDetailSignal(s)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-8">
          <Card>
            <CardTitle>Drop task — in-app + Slack-style</CardTitle>
            <p className="text-xs text-muted-foreground mt-2">Example: “Pause every campaign with $20+ spend and zero sales over 14 days.” → Routes to Marko, gathers context inside guardrails.</p>
            <div className="flex gap-2 mt-3">
              <input placeholder="Tell your agent what to handle…" className="flex-1 h-9 rounded-md border border-border bg-background px-3 text-sm outline-none focus:ring-1 focus:ring-ring" />
              <Button size="sm">Send to board</Button>
            </div>
          </Card>
        </div>
        <div className="col-span-12 lg:col-span-4 space-y-4">
          <Card>
            <CardTitle className="mb-3">Accounts · 3</CardTitle>
            <div className="space-y-2">
              {mockAccounts.map((a) => (
                <div key={a.id} className="flex items-center justify-between rounded-md border border-border p-3 bg-background">
                  <div>
                    <div className="text-sm font-medium">{a.name}</div>
                    <div className="text-xs text-muted-foreground">{a.marketplace} · {a.health}</div>
                  </div>
                  <div className="text-sm font-semibold">{a.revenue}</div>
                </div>
              ))}
            </div>
          </Card>
          {showWatches && (
            <Card>
              <CardTitle className="mb-3">Watches — active</CardTitle>
              <WatchList />
            </Card>
          )}
        </div>
      </div>

      <TracePanel signal={traceSignal} open={!!traceSignal} onClose={() => setTraceSignal(null)} />

      <RightPanel open={!!detailSignal} onClose={() => setDetailSignal(null)} title={detailSignal?.title ?? "Detail"}>
        {detailSignal && (
          <div className="space-y-4 text-sm">
            <div className="text-xs text-muted-foreground">{detailSignal.impact} · {detailSignal.source}</div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Why it matters</div>
              <p className="mt-1">{detailSignal.trace.saw}</p>
              <p className="text-xs text-muted-foreground mt-1">This appears to be because conversion fell while spend held — evidence in guardrails.</p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Options</div>
              <ul className="list-disc pl-5 mt-1 text-xs space-y-1">
                <li>Protect margin — keep price, may sacrifice volume</li>
                <li>Recover volume — match competitor, reduces margin</li>
                <li>Investigate fulfillment/seller conditions</li>
              </ul>
              <div className="text-xs mt-2 p-2 rounded bg-primary/10 border border-primary/20">I recommend protecting margin — contribution below target. Confidence {detailSignal.confidence}%.</div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Execution preview</div>
              <div className="mt-2">
                <ExecutionTimeline signal={detailSignal} />
              </div>
            </div>
            <div className="flex gap-2 pt-2">
              <Button size="sm" onClick={() => detailSignal && approve(detailSignal.id)}>
                Approve
              </Button>
              <Button size="sm" variant="outline" onClick={() => setDetailSignal(null)}>
                Close
              </Button>
            </div>
          </div>
        )}
      </RightPanel>
    </div>
  );
}
