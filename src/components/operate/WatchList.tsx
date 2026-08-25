import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockWatches } from "@/lib/mock";

export function WatchList() {
  return (
    <div className="space-y-3">
      {mockWatches.map((w) => (
        <Card key={w.id}>
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-sm">{w.scope}</CardTitle>
            <Badge className={w.status === "active" ? "bg-success/10 text-success border-success/20" : "bg-muted text-muted-foreground"}>{w.status}</Badge>
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            {w.condition} · {w.cadence} · owner {w.owner}
          </div>
          <div className="text-[11px] text-muted-foreground mt-2 space-y-1">
            {w.history.map((h) => (
              <div key={h.at}>
                {h.at} — {h.result}
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
