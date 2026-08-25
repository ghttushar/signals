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

export interface Metric {
  id: string;
  label: string;
  value: string;
  delta: string;
  deltaPositive: boolean;
  source: string;
  updatedAt: string;
}

export interface Campaign {
  id: string;
  name: string;
  status: "Live" | "Paused" | "Archived";
  spend: string;
  roas: string;
  acos: string;
  source: string;
  updatedAt: string;
  intent?: string;
}

export interface Keyword {
  id: string;
  text: string;
  bid: string;
  acos: string;
  campaignId: string;
  status: "Enabled" | "Paused";
}

export interface SearchTerm {
  id: string;
  term: string;
  campaign: string;
  spend: string;
  orders: number;
  action: "Promote" | "Negative" | "Ignore";
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  marketplace: string;
  revenue: string;
  margin: string;
  buyBox: string;
  source: string;
}

export interface InventoryItem {
  id: string;
  product: string;
  cover: string;
  inbound: string;
  risk: "High" | "Healthy" | "Low";
  source: string;
}

export interface Person {
  id: string;
  name: string;
  role: string;
  team: string;
  accountIds: string[];
  avatar: string;
  status: "active" | "offline";
}

export interface Team {
  id: string;
  name: string;
  memberIds: string[];
}

export interface Conversation {
  id: string;
  channel: string;
  participants: string[];
  lastMessage: string;
  updatedAt: string;
  source: string;
  request?: string;
  commitment?: string;
  accountId?: string;
}

export interface Meeting {
  id: string;
  title: string;
  accountId: string;
  when: string;
  participants: string[];
  status: "upcoming" | "past" | "needs_prep";
  prep?: string[];
  summary?: string;
  decisions?: string[];
  transcriptWarning?: string;
  source: string;
}

export interface Decision {
  id: string;
  title: string;
  owner: string;
  accountId: string;
  meetingId?: string;
  status: "pending" | "approved" | "dismissed";
  createdAt: string;
  rationale: string;
}

export interface Commitment {
  id: string;
  owner: string;
  promise: string;
  due: string;
  accountId: string;
  meetingId?: string;
  status: "open" | "done" | "overdue";
  source: string;
}

export interface DocumentItem {
  id: string;
  name: string;
  type: "SOP" | "Report" | "Contract" | "Sheet";
  accountId: string;
  updatedAt: string;
  source: string;
}

export interface AdGroup {
  id: string;
  campaignId: string;
  name: string;
  status: "Enabled" | "Paused";
  bid: string;
  spend: string;
  source: string;
}

export interface Target {
  id: string;
  adGroupId: string;
  type: "Keyword" | "Product" | "Audience";
  value: string;
  bid: string;
  acos: string;
}

export interface Budget {
  campaignId: string;
  daily: string;
  utilized: string;
  status: "Healthy" | "Constrained" | "Underutilized";
}

export interface DayPart {
  id: string;
  campaignId: string;
  window: string;
  roas: string;
  enabled: boolean;
}

export interface Rule {
  id: string;
  scope: string;
  metric: string;
  operator: ">" | "<" | "=" | ">=" | "<=";
  threshold: string;
  duration: string;
  action: string;
  enabled: boolean;
  lastTriggered: string;
}

export interface ListingIssue {
  id: string;
  productId: string;
  type: "suppression" | "missing attr" | "image" | "policy" | "eligibility";
  detail: string;
  source: string;
}

export interface ProfitRow {
  id: string;
  product: string;
  revenue: string;
  cogs: string;
  fees: string;
  adCost: string;
  margin: string;
  source: string;
}

export interface PricingRow {
  id: string;
  product: string;
  current: string;
  history: string;
  competitor: string;
  anomaly: string;
  source: string;
}

export interface Promotion {
  id: string;
  name: string;
  discount: string;
  status: "active" | "scheduled" | "draft";
  performance: string;
  products: string;
}
