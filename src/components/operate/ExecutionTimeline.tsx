import type { Signal } from "@/lib/types";

export function ExecutionTimeline({ signal }: { signal: Signal }) {
  const steps = [
    "Preparing",
    "Awaiting approval",
    "Executing",
    `Platform response — ${signal.runs?.[0]?.api ?? "—"}`,
    "Verifying",
    "Completed — rollback ready",
  ];
  return (
    <div className="space-y-2">
      {steps.map((s, i) => (
        <div key={s} className="flex gap-3">
          <div className="flex flex-col items-center">
            <span className={`size-2 rounded-full ${i < 2 ? "bg-success" : i === 2 ? "bg-warning animate-pulse" : "bg-border"}`} />
            {i < steps.length - 1 && <span className="w-px h-5 bg-border mt-1" />}
          </div>
          <div className={`text-xs ${i === 2 ? "font-medium" : "text-muted-foreground"}`}>{s}</div>
        </div>
      ))}
      <div className="text-[11px] text-muted-foreground pt-2 border-t border-border">Prior state preserved · Rollback ID {signal.trace.rollbackId}</div>
    </div>
  );
}
