import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ExplorePage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardTitle>KPI Strip — Explore Overview</CardTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          {[
            { k: "Revenue", v: "$124,230", d: "+4.2%" },
            { k: "ROAS", v: "3.8", d: "-0.2" },
            { k: "TACOS", v: "12.4%", d: "+1.1%" },
            { k: "Inventory Health", v: "78%", d: "stable" },
          ].map((x) => (
            <div key={x.k} className="rounded-md border border-border p-3 bg-background">
              <div className="text-[11px] text-muted-foreground uppercase tracking-wide">{x.k}</div>
              <div className="text-lg font-heading font-semibold">{x.v}</div>
              <div className="text-xs text-muted-foreground">{x.d}</div>
            </div>
          ))}
        </div>
        <div className="h-32 rounded-md border border-dashed border-border mt-4 grid place-items-center text-xs text-muted-foreground">
          Chart placeholder — selectable metrics (max cap) per Interaction §10
        </div>
      </Card>

      <Card>
        <div className="flex items-center justify-between">
          <CardTitle>Table — 44px rows, high density</CardTitle>
          <Badge className="bg-muted text-muted-foreground border-border">DataTableToolbar</Badge>
        </div>
        <div className="mt-3 border border-border rounded-md overflow-hidden">
          <div className="grid grid-cols-4 bg-muted text-[11px] font-semibold px-3 py-2">
            <span>Campaign</span>
            <span>Spend</span>
            <span>ROAS</span>
            <span>Status</span>
          </div>
          {[
            ["Summer — Exact", "$500/day", "4.2", "Live"],
            ["Hero SKU Defense", "$320/day", "2.1", "Live"],
            ["Discovery", "$120/day", "1.4", "Paused"],
          ].map((r) => (
            <div key={r[0]} className="grid grid-cols-4 px-3 h-11 items-center border-t border-border text-sm">
              <span>{r[0]}</span>
              <span>{r[1]}</span>
              <span>{r[2]}</span>
              <Badge className={r[3] === "Live" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}>{r[3]}</Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
