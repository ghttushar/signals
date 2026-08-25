import { RightPanel } from "@/components/layout/RightPanel";

export function DetailPanel({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  return (
    <RightPanel open={open} onClose={onClose} title={title}>
      {children}
    </RightPanel>
  );
}
