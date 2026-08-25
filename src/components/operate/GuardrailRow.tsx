import type { Guardrail } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

export function GuardrailRow({ guardrails }: { guardrails: Guardrail[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {guardrails.map((g) => (
        <Badge
          key={g.key}
          className={
            g.state === "Passed"
              ? "bg-success/10 text-success border-success/20"
              : g.state === "Held"
                ? "bg-warning/10 text-warning border-warning/20"
                : "bg-destructive/10 text-destructive border-destructive/20"
          }
          title={`${g.reason} · ${g.checkedAt}`}
        >
          {g.label} · {g.state}
        </Badge>
      ))}
    </div>
  );
}
