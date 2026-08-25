import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ChangeReview({
  open,
  onClose,
  title,
  current,
  proposed,
  impact,
  risk,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  current: string;
  proposed: string;
  impact: string;
  risk: "standard" | "elevated";
}) {
  if (!open) return null;
  const isElevated = risk === "elevated";
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative w-full max-w-[520px] bg-card rounded-lg border border-border p-5">
        {isElevated && <div className="mb-3 rounded bg-destructive/10 border border-destructive/20 px-3 py-2 text-xs font-semibold text-destructive">You are authorizing a high-impact change.</div>}
        <CardTitle>{title}</CardTitle>
        <div className="grid grid-cols-2 gap-3 mt-3 text-sm">
          <div>
            <div className="text-xs text-muted-foreground">Current</div>
            <div className="font-medium">{current}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Proposed</div>
            <div className="font-medium">{proposed}</div>
          </div>
        </div>
        <div className="text-xs text-muted-foreground mt-3">{impact}</div>
        <div className="flex gap-1.5 mt-3 flex-wrap">
          <Badge className="bg-success/10 text-success border-success/20">Max bid Passed</Badge>
          <Badge className="bg-warning/10 text-warning border-warning/20">Approval &gt; $150 Held</Badge>
          <Badge className="bg-muted text-muted-foreground">Source: Amazon Ads · 12 min ago</Badge>
        </div>
        <div className="text-[11px] text-muted-foreground mt-3">Select → Configure → Review → Confirm → Execute → Verify. Rollback preserved.</div>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onClose}>Approve change</Button>
        </div>
      </div>
    </div>
  );
}
