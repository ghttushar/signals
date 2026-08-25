import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockSignals, mockAccounts } from "@/lib/mock";
import { AanMascot } from "@/components/aan/AanMascot";

export default function OperatePage() {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-border bg-card p-4 flex items-start justify-between">
        <div>
          <div className="font-heading font-semibold text-lg">Good morning. 3 things changed.</div>
          <div className="text-sm text-muted-foreground mt-1">Bruno flagged stock risk → Marko paused spend · 12 min ago · Acme</div>
          <div className="text-xs text-muted-foreground mt-2">Ask me first · live board updates without refresh</div>
        </div>
        <AanMascot size={48} state="listening" />
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-8 space-y-4">
          <div className="grid grid-cols-4 gap-2 text-xs">
            {["In Progress", "Awaiting Approval", "Approved", "Done"].map((c) => (
              <div key={c} className="rounded-md border border-border bg-card px-3 py-2 font-medium text-center">
                {c}
              </div>
            ))}
          </div>

          {mockSignals.map((s) => (
            <Card key={s.id}>
              <CardHeader>
                <CardTitle>{s.title}</CardTitle>
                <span className="text-xs px-2 py-1 rounded-full bg-primary text-white font-medium">{s.confidence}%</span>
              </CardHeader>
              <div className="text-sm text-muted-foreground">{s.impact} · {s.source}</div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {s.guardrails.map((g) => (
                  <Badge key={g.label} className={g.state === "Passed" ? "bg-success/10 text-success border-success/20" : g.state === "Held" ? "bg-warning/10 text-warning border-warning/20" : "bg-destructive/10 text-destructive border-destructive/20"}>
                    {g.label} · {g.state}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2 mt-4">
                <Button size="sm">Approve</Button>
                <Button size="sm" variant="outline">
                  Reject
                </Button>
                <Button size="sm" variant="ghost">
                  View trace ↗
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-4">
          <Card>
            <CardTitle className="mb-3">Accounts</CardTitle>
            <div className="space-y-2">
              {mockAccounts.map((a) => (
                <div key={a.id} className="flex items-center justify-between rounded-md border border-border p-3">
                  <div>
                    <div className="text-sm font-medium">{a.name}</div>
                    <div className="text-xs text-muted-foreground">{a.marketplace} · {a.health}</div>
                  </div>
                  <div className="text-sm font-semibold">{a.revenue}</div>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <CardTitle className="mb-2">Coordination story</CardTitle>
            <p className="text-xs text-muted-foreground">Bruno flagged 3 SKUs at 6-day cover + promotion in 5 days → Marko paused 2 campaigns → Oracle held price → Claudia briefed.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
