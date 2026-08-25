import type { Account, Signal, Integration } from "./types";

export const mockAccounts: Account[] = [
  { id: "acme", name: "Acme · Hero SKU", marketplace: "Amazon", health: "at risk", revenue: "$124,230" },
  { id: "mess", name: "MESS Brands", marketplace: "Walmart", health: "healthy", revenue: "$89,120" },
  { id: "pf", name: "PF Harris", marketplace: "Amazon", health: "needs attention", revenue: "$42,500" },
];

export const mockSignals: Signal[] = [
  {
    id: "sig-1",
    accountId: "acme",
    title: "Buy Box lost — 2 Hero SKUs",
    impact: "$2,400/day at risk",
    confidence: 96,
    severity: "critical",
    status: "awaiting_approval",
    source: "Amazon SP-API · 12 min ago",
    updatedAt: "12 min ago",
    guardrails: [
      { label: "Min price $14.99", state: "Passed" },
      { label: "Daily movement 2.4%", state: "Passed" },
      { label: "Approval > $150", state: "Held" },
    ],
  },
  {
    id: "sig-2",
    accountId: "acme",
    title: "Labor Day — promotion opportunity",
    impact: "+18–27% uplift · $42K–$61K",
    confidence: 78,
    severity: "high",
    status: "new",
    source: "Anarix · Shopify + inventory healthy",
    updatedAt: "1 hr ago",
    guardrails: [
      { label: "Inventory 12 days", state: "Passed" },
      { label: "Margin supports 15%", state: "Passed" },
    ],
  },
  {
    id: "sig-3",
    accountId: "pf",
    title: "Raise daily budget on Sponsored Brand",
    impact: "$180/day — ROAS 4.2",
    confidence: 54,
    severity: "medium",
    status: "new",
    source: "Amazon Ads · 2 hr ago",
    updatedAt: "2 hr ago",
    guardrails: [
      { label: "ACOS target 22%", state: "Passed" },
      { label: "Budget ceiling $500", state: "Passed" },
      { label: "Auto-pilot $150", state: "Held" },
    ],
  },
];

export const mockIntegrations: Integration[] = [
  { name: "Amazon SP-API", status: "connected", lastSync: "12 min ago" },
  { name: "Amazon Ads", status: "connected", lastSync: "12 min ago" },
  { name: "Walmart Marketplace", status: "syncing", lastSync: "8 min ago" },
  { name: "Slack", status: "connected", lastSync: "2 min ago" },
  { name: "Google Meet", status: "connected", lastSync: "1 hr ago" },
  { name: "QuickBooks", status: "disconnected", lastSync: "—" },
];
