import type { Metric } from "@/lib/types";

export function KpiStrip({ metrics, onSelect }: { metrics: Metric[]; onSelect?: (m: Metric) => void }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
      {metrics.map((m) => (
        <button
          key={m.id}
          onClick={() => onSelect?.(m)}
          className="text-left rounded-lg border border-border bg-card p-3 hover:bg-muted/40 transition-colors"
        >
          <div className="text-[11px] tracking-wide uppercase text-muted-foreground">{m.label}</div>
          <div className="text-lg font-heading font-semibold mt-1">{m.value}</div>
          <div className={`text-xs ${m.deltaPositive ? "text-success" : m.delta === "stable" ? "text-muted-foreground" : "text-destructive"}`}>{m.delta}</div>
          <div className="text-[11px] text-muted-foreground mt-1 truncate">{m.source} · {m.updatedAt}</div>
        </button>
      ))}
    </div>
  );
}
