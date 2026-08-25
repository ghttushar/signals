import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RightPanel } from "@/components/layout/RightPanel";
import { PeopleList } from "@/components/workspace/PeopleList";
import { MeetingPrepPanel, MeetingFollowupPanel } from "@/components/workspace/MeetingPanels";
import { WorkspaceSearch } from "@/components/workspace/WorkspaceSearch";
import { mockPeople, mockConversations, mockMeetings, mockDecisions, mockCommitments, mockDocuments } from "@/lib/mock";
import type { Person, Conversation, Meeting, Decision, Commitment, DocumentItem } from "@/lib/types";

const tabs = ["home", "people", "conversations", "meetings", "decisions", "commitments", "documents", "search"] as const;
type Tab = (typeof tabs)[number];

export default function WorkspacePage() {
  const [params, setParams] = useSearchParams();
  const tab = (params.get("tab") as Tab) || "home";
  const setTab = (t: Tab) => setParams({ tab: t });

  const [person, setPerson] = useState<Person | null>(null);
  const [conv, setConv] = useState<Conversation | null>(null);
  const [meeting, setMeeting] = useState<Meeting | null>(null);
  const [prepMeeting, setPrepMeeting] = useState<Meeting | null>(null);
  const [followMeeting, setFollowMeeting] = useState<Meeting | null>(null);
  const [decision, setDecision] = useState<Decision | null>(null);
  const [commitment, setCommitment] = useState<Commitment | null>(null);
  const [doc, setDoc] = useState<DocumentItem | null>(null);

  return (
    <div className="space-y-4">
      <div className="border-b border-border flex gap-1 overflow-x-auto">
        {tabs.map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`px-3 py-2 text-sm font-medium border-b-2 whitespace-nowrap capitalize ${tab === t ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
            {t}
          </button>
        ))}
        <span className="ml-auto text-[11px] text-muted-foreground hidden sm:inline self-center">Workspace as action surface — access ≠ authority</span>
      </div>

      {tab === "home" && (
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-8 space-y-4">
            <Card>
              <CardTitle>Workspace Home — Accounts/clients · Recent activity</CardTitle>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                <div className="rounded-md border border-border p-3">
                  <div className="text-xs font-semibold">Acme</div>
                  <div className="text-[11px] text-muted-foreground">3 people · 2 meetings · 1 overdue commitment</div>
                  <Button size="sm" variant="outline" className="mt-2" onClick={() => setTab("meetings")}>
                    Open client workspace
                  </Button>
                </div>
                <div className="rounded-md border border-border p-3">
                  <div className="text-xs font-semibold">Recent activity</div>
                  <div className="text-xs text-muted-foreground mt-1">Slack #acme — Request → Commitment · Meet transcript · Doc updated</div>
                  <div className="text-[11px] text-muted-foreground mt-1">Source chips: Slack 2m ago · Meet 12m ago · Drive 2d ago</div>
                </div>
                <div className="rounded-md border border-border p-3">
                  <div className="text-xs font-semibold">Decisions / Commitments</div>
                  <div className="text-xs mt-1">2 pending decisions · 2 open commitments (1 overdue)</div>
                  <div className="text-[11px] text-muted-foreground">Open in Operate → verify</div>
                </div>
              </div>
            </Card>
            <Card>
              <CardTitle>Conversations → operational state</CardTitle>
              <p className="text-xs text-muted-foreground mt-2">Message → Request → Decision/pending → Commitment → Task → Outcome — not disposable. Connect to business: Acme Hero SKU.</p>
              <div className="mt-3 rounded-md border border-border p-3 text-xs">Slack #acme: “Can we increase spend next week?” → <Badge className="mx-1 bg-warning/10 text-warning border-warning/20">Request</Badge> → Business: Hero SKU ROAS 4.2 · Inventory 6 days → Decision pending</div>
            </Card>
          </div>
          <div className="col-span-12 lg:col-span-4 space-y-4">
            <Card>
              <CardTitle>People — 7</CardTitle>
              <div className="mt-2 text-xs text-muted-foreground">Inline brief + link: Team → Account → Product → Signal → Decision → Action</div>
              <div className="mt-3 flex -space-x-2">
                {mockPeople.slice(0, 5).map((p) => (
                  <span key={p.id} className="size-7 rounded-full bg-primary text-white grid place-items-center text-[11px] font-semibold border-2 border-card">
                    {p.avatar}
                  </span>
                ))}
              </div>
            </Card>
            <Card>
              <CardTitle>Documents</CardTitle>
              <div className="text-xs text-muted-foreground mt-2">SOPs · Reports · Sheets — use as evidence for decisions</div>
            </Card>
          </div>
        </div>
      )}

      {tab === "people" && (
        <Card>
          <CardTitle>People — directory (permitted scope)</CardTitle>
          <p className="text-xs text-muted-foreground mt-1">Role/context · associated accounts · meetings · conversations · commitments — filtered by Organization → Team → User → Account Access</p>
          <div className="mt-4">
            <PeopleList onSelect={setPerson} />
          </div>
        </Card>
      )}

      {tab === "conversations" && (
        <Card>
          <CardTitle>Conversations — Slack / Teams / Email</CardTitle>
          <p className="text-xs text-muted-foreground">Search · inspect threads · identify requests/commitments · connect to business context</p>
          <div className="space-y-2 mt-3">
            {mockConversations.map((c) => (
              <button key={c.id} onClick={() => setConv(c)} className="w-full text-left rounded-md border border-border p-3 hover:bg-muted/40">
                <div className="text-sm font-medium">{c.channel}</div>
                <div className="text-xs text-muted-foreground">{c.lastMessage} · {c.updatedAt} · {c.source}</div>
                {c.request && <div className="text-[11px] mt-1">Request: {c.request} → Business: Acme · <span className="text-primary">Open in Explore</span></div>}
                {c.commitment && <div className="text-[11px]">Commitment: {c.commitment}</div>}
              </button>
            ))}
          </div>
        </Card>
      )}

      {tab === "meetings" && (
        <Card>
          <CardTitle>Meetings — Upcoming / Past / Needs Prep</CardTitle>
          <div className="space-y-2 mt-3">
            {mockMeetings.map((m) => (
              <div key={m.id} className="rounded-md border border-border p-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="text-sm font-medium">{m.title}</div>
                    <div className="text-xs text-muted-foreground">{m.when} · {m.source} · {m.participants.join(", ")}</div>
                  </div>
                  <Badge className={m.status === "needs_prep" ? "bg-warning/10 text-warning" : m.status === "upcoming" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}>{m.status}</Badge>
                </div>
                <div className="flex gap-2 mt-2">
                  <Button size="sm" variant="outline" onClick={() => setPrepMeeting(m)}>
                    Prepare
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => setFollowMeeting(m)}>
                    Summary / Follow-up
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => setMeeting(m)}>
                    Detail
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {tab === "decisions" && (
        <Card>
          <CardTitle>Decisions — history + owner + related meeting</CardTitle>
          <div className="space-y-2 mt-3">
            {mockDecisions.map((d) => (
              <button key={d.id} onClick={() => setDecision(d)} className="w-full text-left rounded-md border border-border p-3 hover:bg-muted/40">
                <div className="text-sm font-medium">{d.title}</div>
                <div className="text-xs text-muted-foreground">{d.owner} · {d.createdAt} · {d.accountId} · {d.status}</div>
                <div className="text-xs mt-1">{d.rationale}</div>
              </button>
            ))}
          </div>
        </Card>
      )}

      {tab === "commitments" && (
        <Card>
          <CardTitle>Commitments — owner / promise / due / status</CardTitle>
          <div className="space-y-2 mt-3">
            {mockCommitments.map((c) => (
              <button key={c.id} onClick={() => setCommitment(c)} className="w-full text-left rounded-md border border-border p-3 hover:bg-muted/40">
                <div className="text-sm font-medium">{c.owner}: {c.promise}</div>
                <div className="text-xs text-muted-foreground">Due {c.due} · {c.accountId} · {c.status} · {c.source}</div>
              </button>
            ))}
          </div>
        </Card>
      )}

      {tab === "documents" && (
        <Card>
          <CardTitle>Documents — find · inspect · connect to decisions</CardTitle>
          <div className="space-y-2 mt-3">
            {mockDocuments.map((d) => (
              <button key={d.id} onClick={() => setDoc(d)} className="w-full text-left rounded-md border border-border p-3 hover:bg-muted/40">
                <div className="text-sm font-medium">{d.name}</div>
                <div className="text-xs text-muted-foreground">{d.type} · {d.accountId} · {d.updatedAt} · {d.source}</div>
              </button>
            ))}
          </div>
        </Card>
      )}

      {tab === "search" && (
        <div className="space-y-4">
          <WorkspaceSearch />
          <Card>
            <CardTitle>Workspace AI — structured actions, not chat</CardTitle>
            <p className="text-xs text-muted-foreground mt-2">Find decisions/commitments · prepare meetings · draft follow-ups · connect conversations to business. Returns structured panels with provenance.</p>
            <div className="flex gap-2 mt-3">
              <Button size="sm" onClick={() => setPrepMeeting(mockMeetings[0])}>
                Prepare next meeting
              </Button>
              <Button size="sm" variant="outline">
                Find unresolved
              </Button>
            </div>
          </Card>
        </div>
      )}

      <RightPanel open={!!person} onClose={() => setPerson(null)} title={person?.name ?? "Person"}>
        {person && (
          <div className="space-y-3 text-sm">
            <div className="text-xs text-muted-foreground">{person.role} · {person.team} · Accounts {person.accountIds.join(", ")}</div>
            <div className="rounded-md border border-border p-3">
              <div className="text-xs font-semibold">Context brief inline</div>
              <div className="text-xs text-muted-foreground mt-1">Conversations: 2 · Meetings: 2 · Commitments: 1 · Tasks: 1 — link to Explore business context: Acme Hero SKU → Campaign → Inventory 6 days</div>
            </div>
            <div className="flex gap-2">
              <Button size="sm">View in Explore</Button>
              <Button size="sm" variant="outline">
                Message
              </Button>
            </div>
          </div>
        )}
      </RightPanel>

      <RightPanel open={!!conv} onClose={() => setConv(null)} title={conv?.channel ?? "Conversation"}>
        {conv && (
          <div className="text-sm space-y-2">
            <div className="text-xs text-muted-foreground">{conv.source} · {conv.updatedAt} · {conv.participants.join(", ")}</div>
            <div>{conv.lastMessage}</div>
            <div className="text-xs p-2 rounded bg-muted">Request → Decision pending → Commitment → Task · Provenance: {conv.source}</div>
            <Button size="sm">Create reminder</Button>
            <Button size="sm" variant="outline" className="ml-2">
              Send approved message
            </Button>
            <div className="text-[11px] text-muted-foreground">Send requires elevated approval — access ≠ authority</div>
          </div>
        )}
      </RightPanel>

      <RightPanel open={!!meeting} onClose={() => setMeeting(null)} title={meeting?.title ?? "Meeting"}>
        {meeting && (
          <div className="text-sm space-y-2">
            <div className="text-xs text-muted-foreground">{meeting.when} · {meeting.source}</div>
            <div>Participants: {meeting.participants.join(", ")}</div>
            {meeting.transcriptWarning && <div className="text-[11px] text-warning bg-warning/10 border border-warning/20 rounded px-2 py-1">{meeting.transcriptWarning}</div>}
            <div className="text-xs">Before: outstanding commitments · Recent: Buy Box lost · Signals 2 · After: decisions/commitments → Operate tasks</div>
          </div>
        )}
      </RightPanel>

      <MeetingPrepPanel meeting={prepMeeting} open={!!prepMeeting} onClose={() => setPrepMeeting(null)} onCreateTask={() => setPrepMeeting(null)} />
      <MeetingFollowupPanel meeting={followMeeting} open={!!followMeeting} onClose={() => setFollowMeeting(null)} />

      <RightPanel open={!!decision} onClose={() => setDecision(null)} title={decision?.title ?? "Decision"}>
        {decision && (
          <div className="text-sm space-y-2">
            <div className="text-xs text-muted-foreground">{decision.owner} · {decision.createdAt} · {decision.status}</div>
            <div>{decision.rationale}</div>
            <div className="text-xs p-2 rounded border border-border bg-muted/30">Memory: attributable, timestamped, source-aware — will inform future recommendations</div>
          </div>
        )}
      </RightPanel>

      <RightPanel open={!!commitment} onClose={() => setCommitment(null)} title={commitment?.promise ?? "Commitment"}>
        {commitment && (
          <div className="text-sm space-y-2">
            <div className="text-xs text-muted-foreground">{commitment.owner} · Due {commitment.due} · {commitment.status} · {commitment.source}</div>
            <div>{commitment.promise}</div>
            <div className="text-xs">Follow-up creates Operate task · Monitor until verified</div>
          </div>
        )}
      </RightPanel>

      <RightPanel open={!!doc} onClose={() => setDoc(null)} title={doc?.name ?? "Document"}>
        {doc && <div className="text-sm text-muted-foreground">{doc.type} · {doc.accountId} · {doc.updatedAt} · {doc.source} · Connect to decisions as evidence</div>}
      </RightPanel>
    </div>
  );
}
