import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ExploreCommand() {
  const [q, setQ] = useState("products with margin down >10% this week");
  const [show, setShow] = useState(true);
  return (
    <Card>
      <div className="flex items-center gap-2">
        <Search className="size-4 text-muted-foreground" />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Find • Inspect • Create • Change — e.g., campaigns with ACOS above 35%" className="flex-1 bg-transparent outline-none text-sm" />
        <Button size="sm" onClick={() => setShow(true)}>
          Interpret
        </Button>
      </div>
      {show && (
        <div className="mt-4 rounded-md border border-border bg-muted/30 p-3">
          <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Interpreted scope — white-box</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2 text-xs">
            <div>
              <div className="text-muted-foreground">Scope</div>
              <div className="font-medium">8 campaigns</div>
            </div>
            <div>
              <div className="text-muted-foreground">Conditions</div>
              <div className="font-medium">ACOS &gt; 35% · Spend &gt; $100 · 7 days</div>
            </div>
            <div>
              <div className="text-muted-foreground">Proposed action</div>
              <div className="font-medium">Reduce budget 15%</div>
            </div>
            <div>
              <div className="text-muted-foreground">Mode</div>
              <div className="font-medium">Prepare · Requires approval</div>
            </div>
          </div>
          <div className="text-[11px] text-muted-foreground mt-2">You can modify scope before prepare — no long prompt chain.</div>
        </div>
      )}
    </Card>
  );
}
