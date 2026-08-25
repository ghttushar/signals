import { RightPanel } from "@/components/layout/RightPanel";
import type { Signal } from "@/lib/types";
import { GuardrailRow } from "./GuardrailRow";

export function TracePanel({ signal, open, onClose }: { signal: Signal | null; open: boolean; onClose: () => void }) {
  if (!signal) return null;
  const t = signal.trace;
  return (
    <RightPanel open={open} onClose={onClose} title="Trace — View trace ↗">
      <div className="space-y-4 text-sm">
        <div>
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">What employee saw</div>
          <p className="mt-1">{t.saw}</p>
          <div className="text-xs text-muted-foreground mt-1">{signal.source} · Confidence {signal.confidence}% · {signal.agentId}</div>
        </div>
        <div>
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Constraints applied</div>
          <ul className="list-disc pl-5 mt-1 space-y-1 text-xs">
            {t.constraints.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">What they decided</div>
          <p className="mt-1">{t.decided}</p>
        </div>
        <div>
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Expected outcome</div>
          <p className="mt-1">{t.expected}</p>
        </div>
        <div className="rounded-md border border-border p-3 bg-muted/30">
          <div className="text-xs font-semibold">Can it be rolled back?</div>
          <div className="text-xs mt-1">Yes. Prior state preserved: {t.priorState}. Rollback ID {t.rollbackId} · one click within window.</div>
        </div>
        <div>
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Guardrails checked</div>
          <div className="mt-2">
            <GuardrailRow guardrails={signal.guardrails} />
          </div>
        </div>
        {signal.runs && signal.runs.length > 0 && (
          <div className="text-xs border-t border-border pt-3 space-y-1">
            {signal.runs.map((r) => (
              <div key={r.id}>
                {r.startedAt} · {r.api} · {r.result}
              </div>
            ))}
          </div>
        )}
      </div>
    </RightPanel>
  );
}
