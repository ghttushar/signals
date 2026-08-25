import { mockIntegrations } from "@/lib/mock";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SetupProgressPage() {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="font-heading text-2xl font-semibold">Setup Progress</h1>
      <p className="text-sm text-muted-foreground">Connection status · data synchronization · workspace indexing · initial intelligence preparation</p>
      <div className="grid gap-3">
        {mockIntegrations.map((i) => (
          <Card key={i.name} className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">{i.name}</div>
              <div className="text-xs text-muted-foreground">Last sync: {i.lastSync}</div>
            </div>
            <Badge className={i.status === "connected" ? "bg-success/10 text-success border-success/20" : i.status === "syncing" ? "bg-warning/10 text-warning border-warning/20" : i.status === "error" ? "bg-destructive/10 text-destructive border-destructive/20" : "bg-muted text-muted-foreground"}>{i.status}</Badge>
          </Card>
        ))}
      </div>
      <Card>
        <CardTitle>Initial intelligence preparation</CardTitle>
        <p className="text-xs text-muted-foreground mt-2">Mock domain layer: Organization → Account → Signal → Action with integration states. No real APIs.</p>
      </Card>
    </div>
  );
}
