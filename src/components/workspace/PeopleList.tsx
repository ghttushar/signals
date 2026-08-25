import { mockPeople } from "@/lib/mock";
import type { Person } from "@/lib/types";

export function PeopleList({ onSelect }: { onSelect: (p: Person) => void }) {
  return (
    <div className="space-y-2">
      {mockPeople.map((p) => (
        <button key={p.id} onClick={() => onSelect(p)} className="w-full text-left rounded-md border border-border p-3 hover:bg-muted/40 flex gap-3">
          <span className="size-8 rounded-full bg-primary text-white grid place-items-center text-xs font-semibold shrink-0">{p.avatar}</span>
          <div className="min-w-0">
            <div className="text-sm font-medium">{p.name}</div>
            <div className="text-xs text-muted-foreground">{p.role} · {p.team} · {p.accountIds.join(", ")}</div>
          </div>
          <span className={`ml-auto size-2 rounded-full shrink-0 mt-2 ${p.status === "active" ? "bg-success" : "bg-muted-foreground"}`} />
        </button>
      ))}
    </div>
  );
}
