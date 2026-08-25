import { Search, Bell, Command } from "lucide-react";
import { useLocation } from "react-router-dom";

const titles: Record<string, string> = {
  "/operate": "Operate — Mission Control",
  "/explore": "Explore — Business",
  "/workspace": "Workspace — People & Meetings",
  "/connections": "Connections",
  "/settings": "Settings",
  "/setup": "Setup Progress",
};

export function AppTaskbar() {
  const { pathname } = useLocation();
  const title = titles[pathname] ?? "Signals";

  return (
    <div className="sticky top-0 z-10 bg-card/80 backdrop-blur border-b border-border">
      <div className="h-14 flex items-center gap-3 px-6">
        <div className="min-w-0">
          <div className="text-sm font-heading font-semibold leading-none">{title}</div>
          <div className="text-[11px] text-muted-foreground">Acme · Amazon US · Synced 12 min ago · All systems connected</div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="hidden md:flex items-center gap-1.5 text-[11px] text-muted-foreground border border-border rounded-md px-2.5 py-1.5 bg-background">
            <Command className="size-3.5" />
            <span>K to search</span>
          </div>
          <button className="size-8 grid place-items-center rounded-md border border-border bg-background hover:bg-muted">
            <Search className="size-4" />
          </button>
          <button className="size-8 grid place-items-center rounded-md border border-border bg-background hover:bg-muted relative">
            <Bell className="size-4" />
            <span className="absolute -top-1 -right-1 size-2.5 bg-destructive rounded-full border-2 border-card" />
          </button>
        </div>
      </div>
      <div className="h-10 flex items-center gap-2 px-6 border-t border-border bg-background/60">
        <div className="flex items-center gap-1 text-xs">
          <button className="px-2.5 py-1 rounded-md bg-primary text-white text-xs font-medium">All</button>
          <button className="px-2.5 py-1 rounded-md hover:bg-muted text-muted-foreground">Risks</button>
          <button className="px-2.5 py-1 rounded-md hover:bg-muted text-muted-foreground">Opportunities</button>
          <button className="px-2.5 py-1 rounded-md hover:bg-muted text-muted-foreground">Waiting</button>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="text-[11px] text-muted-foreground hidden sm:inline">Last 7 days</span>
          <span className="h-4 w-px bg-border hidden sm:block" />
          <span className="text-[11px] px-2 py-1 rounded bg-success/10 text-success font-medium">Ask me first</span>
        </div>
      </div>
    </div>
  );
}
