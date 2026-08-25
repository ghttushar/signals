import type { Signal } from "@/lib/types";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GuardrailRow } from "./GuardrailRow";

function confidenceColor(c: number) {
  if (c >= 85) return "bg-primary text-white";
  if (c >= 65) return "bg-warning text-white";
  return "bg-destructive text-white";
}

function autonomyLabel(l: string) {
  const m: Record<string, string> = {
    recommend: "Recommend",
    ask_me_first: "Ask me first",
    limited: "Limited handling",
    broader: "Broader handling",
    full: "Full autonomy",
  };
  return m[l] ?? l;
}

export function SignalCard({
  signal,
  onViewTrace,
  onApprove,
  onReject,
  onInvestigate,
}: {
  signal: Signal;
  onViewTrace: () => void;
  onApprove: () => void;
  onReject: () => void;
  onInvestigate: () => void;
}) {
  const isLow = signal.confidence < 70;
  return (
    <Card className="p-4">
      <CardHeader className="p-0 mb-2">
        <div className="min-w-0">
          <CardTitle className="text-sm leading-tight">{signal.title}</CardTitle>
          <div className="text-xs text-muted-foreground mt-1">
            {signal.impact} · {signal.source} · {signal.agentId}
          </div>
        </div>
        <span className={`shrink-0 text-xs px-2 py-1 rounded-full font-semibold ${confidenceColor(signal.confidence)}`}>
          {signal.confidence}%
        </span>
      </CardHeader>

      <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground mb-2">
        <span className="px-1.5 py-0.5 rounded bg-muted border border-border">{autonomyLabel(signal.autonomyLevel)}</span>
        <span className="capitalize">· {signal.severity}</span>
        <span>· {signal.status.replace("_", " ")}</span>
      </div>

      {isLow && <div className="text-[11px] text-warning bg-warning/10 border border-warning/20 rounded px-2 py-1 mb-2">Weak signal → Action path narrowed → Rollback preserved. Ask follow-up before approving.</div>}

      <GuardrailRow guardrails={signal.guardrails} />

      <div className="flex flex-wrap gap-2 mt-4">
        <Button size="sm" onClick={onApprove}>
          Approve
        </Button>
        <Button size="sm" variant="outline" onClick={onReject}>
          Reject
        </Button>
        <Button size="sm" variant="ghost" onClick={onViewTrace}>
          View trace ↗
        </Button>
        <Button size="sm" variant="ghost" onClick={onInvestigate}>
          Investigate
        </Button>
      </div>
    </Card>
  );
}
