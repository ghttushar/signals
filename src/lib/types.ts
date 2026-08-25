export type ConnectionStatus = "connected" | "syncing" | "error" | "disconnected";

export interface Account {
  id: string;
  name: string;
  marketplace: "Amazon" | "Walmart" | "Shopify";
  health: "healthy" | "at risk" | "needs attention";
  revenue: string;
}

export type AutonomyLevel = "recommend" | "ask_me_first" | "limited" | "broader" | "full";

export interface Guardrail {
  key: string;
  label: string;
  threshold: string;
  state: "Passed" | "Held" | "Blocked";
  reason?: string;
  checkedAt: string;
}

export interface Trace {
  saw: string;
  constraints: string[];
  decided: string;
  expected: string;
  rollbackId: string;
  priorState: string;
}

export interface Run {
  id: string;
  startedAt: string;
  api: string;
  result: string;
  status: "success" | "failed";
}

export interface Signal {
  id: string;
  accountId: string;
  title: string;
  impact: string;
  confidence: number;
  severity: "critical" | "high" | "medium" | "low";
  status: "new" | "investigating" | "awaiting_approval" | "approved" | "executing" | "verified" | "dismissed" | "in_progress";
  source: string;
  updatedAt: string;
  guardrails: Guardrail[];
  trace: Trace;
  agentId: string;
  autonomyLevel: AutonomyLevel;
  runs?: Run[];
}

export interface Watch {
  id: string;
  scope: string;
  condition: string;
  cadence: string;
  severity: "low" | "medium" | "high";
  owner: string;
  status: "active" | "paused" | "completed";
  history: { at: string; result: string }[];
}

export interface Integration {
  name: string;
  status: ConnectionStatus;
  lastSync: string;
}
