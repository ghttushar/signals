export type ConnectionStatus = "connected" | "syncing" | "error" | "disconnected";

export interface Account {
  id: string;
  name: string;
  marketplace: "Amazon" | "Walmart" | "Shopify";
  health: "healthy" | "at risk" | "needs attention";
  revenue: string;
}

export interface Signal {
  id: string;
  accountId: string;
  title: string;
  impact: string;
  confidence: number;
  severity: "critical" | "high" | "medium" | "low";
  status: "new" | "investigating" | "awaiting_approval" | "approved" | "executing" | "verified" | "dismissed";
  source: string;
  updatedAt: string;
  guardrails: { label: string; state: "Passed" | "Held" | "Blocked" }[];
}

export interface Integration {
  name: string;
  status: ConnectionStatus;
  lastSync: string;
}
