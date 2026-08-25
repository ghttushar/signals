import { RightPanel } from "@/components/layout/RightPanel";
import type { Meeting } from "@/lib/types";
import { mockDecisions, mockCommitments } from "@/lib/mock";

export function MeetingPrepPanel({ meeting, open, onClose, onCreateTask }: { meeting: Meeting | null; open: boolean; onClose: () => void; onCreateTask: () => void }) {
  if (!meeting) return null;
  return (
    <RightPanel open={open} onClose={onClose} title={`Prep — ${meeting.title}`}>
      <div className="space-y-3 text-sm">
        <div className="text-xs text-muted-foreground">{meeting.when} · {meeting.source} · {meeting.participants.join(", ")}</div>
        <div className="rounded-md border border-border p-3">
          <div className="text-xs font-semibold">Outstanding commitments</div>
          <ul className="list-disc pl-5 mt-1 text-xs space-y-1">{(meeting.prep ?? []).map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
        <div className="rounded-md border border-border p-3 bg-muted/30">
          <div className="text-xs font-semibold">Recent business changes</div>
          <div className="text-xs text-muted-foreground mt-1">Buy Box lost 2 SKUs · Inventory 6 days + promo in 5 days · Labor Day opportunity +18%</div>
        </div>
        <button onClick={onCreateTask} className="w-full h-9 rounded-md bg-primary text-white text-sm font-medium">
          Generate prep → create Operate tasks
        </button>
      </div>
    </RightPanel>
  );
}

export function MeetingFollowupPanel({ meeting, open, onClose }: { meeting: Meeting | null; open: boolean; onClose: () => void }) {
  if (!meeting) return null;
  const decisions = mockDecisions.filter((d) => d.meetingId === meeting.id);
  const commitments = mockCommitments.filter((c) => c.meetingId === meeting.id);
  return (
    <RightPanel open={open} onClose={onClose} title={`Follow-up — ${meeting.title}`}>
      <div className="space-y-3 text-sm">
        {meeting.summary && <div className="text-xs">{meeting.summary}</div>}
        {meeting.transcriptWarning && <div className="text-[11px] text-warning bg-warning/10 border border-warning/20 rounded px-2 py-1">{meeting.transcriptWarning}</div>}
        <div>
          <div className="text-xs font-semibold">Decisions extracted</div>
          <ul className="mt-1 space-y-1 text-xs">{decisions.length ? decisions.map((d) => <li key={d.id} className="border border-border rounded p-2">{d.title} — {d.rationale}</li>) : <li className="text-muted-foreground">No decisions yet.</li>}</ul>
        </div>
        <div>
          <div className="text-xs font-semibold">Commitments</div>
          <ul className="mt-1 space-y-1 text-xs">{commitments.length ? commitments.map((c) => <li key={c.id} className="border border-border rounded p-2">{c.owner}: {c.promise} — due {c.due}</li>) : <li className="text-muted-foreground">No commitments.</li>}</ul>
        </div>
        <div className="text-[11px] text-muted-foreground">Follow-up creates Operate tasks · Monitor until verified.</div>
      </div>
    </RightPanel>
  );
}
