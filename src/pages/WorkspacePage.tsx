import { Card, CardTitle } from "@/components/ui/card";

export default function WorkspacePage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardTitle>Workspace Home — Viktor + 7th Gear</CardTitle>
        <p className="text-sm text-muted-foreground mt-2">Clients, recent activity, people, conversations, meetings, decisions, commitments — workspace context around business.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
          <div className="rounded-md border border-border p-3">
            <div className="text-xs font-semibold">Meetings — Needs Preparation</div>
            <div className="text-xs text-muted-foreground mt-1">Staples Review — tomorrow · outstanding commitments + recent business changes</div>
          </div>
          <div className="rounded-md border border-border p-3">
            <div className="text-xs font-semibold">Conversations</div>
            <div className="text-xs text-muted-foreground mt-1">Slack #acme — “Can we increase spend next week?” → Request → Decision pending</div>
          </div>
        </div>
      </Card>
    </div>
  );
}
