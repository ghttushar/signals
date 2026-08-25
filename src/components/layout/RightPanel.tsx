import { X } from "lucide-react";

export function RightPanel({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-30 flex justify-end">
      <div className="absolute inset-0 bg-black/20" onClick={onClose} />
      <div className="relative w-[420px] bg-card border-l border-border flex flex-col">
        <div className="h-14 flex items-center justify-between px-4 border-b border-border">
          <span className="font-heading font-semibold text-sm">{title}</span>
          <button onClick={onClose} className="size-8 grid place-items-center rounded-md hover:bg-muted">
            <X className="size-4" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
      </div>
    </div>
  );
}
