import { NavLink } from "react-router-dom";
import { LayoutDashboard, Search, Users, Plug, Settings, Sparkles, ClipboardList } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/operate", label: "Operate", icon: ClipboardList },
  { to: "/explore", label: "Explore", icon: LayoutDashboard },
  { to: "/workspace", label: "Workspace", icon: Users },
];

const secondary = [
  { to: "/connections", label: "Connections", icon: Plug },
  { to: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="w-56 shrink-0 fixed inset-y-0 left-0 z-20 bg-card border-r border-border flex flex-col">
      <div className="h-14 flex items-center gap-2 px-4 border-b border-border">
        <div className="size-7 rounded-md bg-primary flex items-center justify-center">
          <Sparkles className="size-4 text-white" />
        </div>
        <span className="font-heading font-semibold text-sm">Signals</span>
        <span className="ml-auto text-[10px] leading-none px-1.5 py-1 rounded bg-muted text-muted-foreground font-medium">
          P1
        </span>
      </div>

      <nav className="flex-1 p-3 space-y-6 overflow-y-auto">
        <div className="space-y-1">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-2.5 px-2.5 py-2 rounded-md text-[13px] font-medium transition-colors",
                  isActive ? "bg-primary text-white" : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )
              }
            >
              <item.icon className="size-4 shrink-0" />
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="space-y-1">
          <div className="px-2.5 py-1 text-[11px] font-semibold tracking-wide text-muted-foreground">SYSTEM</div>
          {secondary.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-2.5 px-2.5 py-2 rounded-md text-[13px] font-medium transition-colors",
                  isActive ? "bg-primary text-white" : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )
              }
            >
              <item.icon className="size-4 shrink-0" />
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/setup"
            className={({ isActive }) =>
              cn(
                "flex items-center gap-2.5 px-2.5 py-2 rounded-md text-[13px] font-medium transition-colors",
                isActive ? "bg-primary text-white" : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )
            }
          >
            <Search className="size-4 shrink-0" />
            Setup
          </NavLink>
        </div>
      </nav>

      <div className="p-3 border-t border-border">
        <div className="rounded-md bg-muted p-3">
          <p className="text-xs font-medium">Mission Control</p>
          <p className="text-[11px] text-muted-foreground mt-1">Ask me first · 3 signals</p>
        </div>
      </div>
    </aside>
  );
}
