import { useState, useEffect } from "react";
import { Search } from "lucide-react";

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-40 flex items-start justify-center pt-[20vh]">
      <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
      <div className="relative w-[560px] bg-card rounded-lg border border-border shadow-xl overflow-hidden">
        <div className="flex items-center gap-3 px-4 h-12 border-b border-border">
          <Search className="size-4 text-muted-foreground" />
          <input autoFocus placeholder="Find account, product, campaign, signal, meeting, person…" className="flex-1 bg-transparent outline-none text-sm" />
        </div>
        <div className="p-4 text-xs text-muted-foreground">Try “Campaigns with ACOS above 35%” or “Create a rule for low inventory” — structured results appear here.</div>
      </div>
    </div>
  );
}
