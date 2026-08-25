import type { Account, Signal, Integration, Watch, Metric, Campaign, Keyword, SearchTerm, Product, InventoryItem } from "./types";

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
    agentId: "marko-ppc",
    autonomyLevel: "ask_me_first",
    guardrails: [
      { key: "min_price", label: "Min price $14.99", threshold: "$14.99", state: "Passed", reason: "New price $23.40 > floor", checkedAt: "12 min ago" },
      { key: "daily_move", label: "Daily movement 2.4%", threshold: "2.4%", state: "Passed", reason: "+1.8% inside ceiling", checkedAt: "12 min ago" },
      { key: "approval_impact", label: "Approval > $150", threshold: "$150", state: "Held", reason: "Impact below threshold, needs review", checkedAt: "12 min ago" },
      { key: "emergency", label: "Emergency $500/0 conv", threshold: "$500", state: "Passed", reason: "Not triggered", checkedAt: "12 min ago" },
    ],
    trace: {
      saw: "Keyword 'hepa filter replacement' generated 0 sales on $84 spend over 14 days",
      constraints: ["Minimum 3% conversion rate threshold", "Budget cap $500/day for this campaign"],
      decided: "Pause 6 zero-conversion campaigns — $28.50/day → $0 · 14 days idle",
      expected: "Save $84/14 days · Redistribute to proven keywords · 96% confidence",
      rollbackId: "4f2a",
      priorState: "$28.50/day across 6 campaigns",
    },
    runs: [{ id: "run-1", startedAt: "2:14am", api: "Wrote pause to Ads API · 6/6 OK", result: "Logged to audit trail · ID 4f2a", status: "success" }],
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
    agentId: "claudia-coo",
    autonomyLevel: "recommend",
    guardrails: [
      { key: "inventory", label: "Inventory 12 days", threshold: "7 days", state: "Passed", reason: "Healthy for promo", checkedAt: "1 hr ago" },
      { key: "margin", label: "Margin supports 15%", threshold: "15%", state: "Passed", reason: "Gross margin 34% → can discount", checkedAt: "1 hr ago" },
      { key: "fresh_data", label: "Fresh-data check", threshold: "30 min", state: "Passed", reason: "Shopify synced 8 min ago", checkedAt: "1 hr ago" },
    ],
    trace: {
      saw: "Labor Day approaching · 3 products historically +31% during promo period",
      constraints: ["12 days preparation window", "Shopify store active", "No conflicting promotion"],
      decided: "Create 15% coupon + homepage banner + assign Design + ask Sales confirm",
      expected: "+18–27% revenue · 78% confidence · Inventory supports discount",
      rollbackId: "lab3",
      priorState: "No Labor Day promotion active",
    },
  },
  {
    id: "sig-3",
    accountId: "pf",
    title: "Raise daily budget on Sponsored Brand",
    impact: "$180/day — ROAS 4.2",
    confidence: 54,
    severity: "medium",
    status: "in_progress",
    source: "Amazon Ads · 2 hr ago",
    updatedAt: "2 hr ago",
    agentId: "oracle-pricing",
    autonomyLevel: "limited",
    guardrails: [
      { key: "acos", label: "ACOS target 22%", threshold: "22%", state: "Passed", reason: "Campaign below target", checkedAt: "2 hr ago" },
      { key: "budget_ceiling", label: "Budget ceiling $500", threshold: "$500", state: "Passed", reason: "Stays inside daily cap after +$180", checkedAt: "2 hr ago" },
      { key: "autopilot", label: "Auto-pilot $150", threshold: "$150", state: "Held", reason: "+$180 above autopilot limit → Held for review", checkedAt: "2 hr ago" },
      { key: "no_fly", label: "No-fly window", threshold: "none", state: "Passed", reason: "Not locked", checkedAt: "2 hr ago" },
    ],
    trace: {
      saw: "High conversion velocity on Hero SKU · 2-day inventory dip ahead",
      constraints: ["Daily budget cap $500", "Autopilot threshold $150", "No-fly zones: 12 locked ASINs"],
      decided: "Increase Hero Campaign budget +$180 — high velocity opened room",
      expected: "ROAS holding 4.2, but inventory dip → monitor, 54% confidence",
      rollbackId: "b180",
      priorState: "$320/day → $500/day proposed",
    },
  },
  {
    id: "sig-4",
    accountId: "acme",
    title: "Stock risk — 3 SKUs at 6-day cover",
    impact: "Promo in 5 days — 2.1× demand",
    confidence: 88,
    severity: "critical",
    status: "in_progress",
    source: "Bruno · Inventory · 30 min ago",
    updatedAt: "30 min ago",
    agentId: "bruno-inventory",
    autonomyLevel: "broader",
    guardrails: [
      { key: "cover", label: "Cover 7 days", threshold: "7 days", state: "Blocked", reason: "6 days < threshold", checkedAt: "30 min ago" },
      { key: "promo_exposure", label: "Promo exposure", threshold: "5 days", state: "Held", reason: "Promo starts before replenishment", checkedAt: "30 min ago" },
    ],
    trace: {
      saw: "3 SKUs at 6-day cover, promo scheduled in 5 days, historical promo demand 2.1× baseline",
      constraints: ["Inbound 500 units ETA 8 days", "Warehouse transfer possible"],
      decided: "Recommend transfer 500 units or reduce promo exposure — coordination needed",
      expected: "Avoid stockout during Labor Day promo window",
      rollbackId: "inv9",
      priorState: "6 days cover",
    },
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

export const mockWatches: Watch[] = [
  { id: "w1", scope: "B0CH3HSSLZ", condition: "Inventory < 14 days", cadence: "hourly", severity: "high", owner: "You", status: "active", history: [{ at: "2 hr ago", result: "9 days — no trigger" }] },
  { id: "w2", scope: "Hero Campaign", condition: "ACOS > 30%", cadence: "daily", severity: "medium", owner: "Marko", status: "active", history: [{ at: "1 day ago", result: "22% — no trigger" }] },
];

export const mockMetrics: Metric[] = [
  { id: "m1", label: "Revenue", value: "$124,230", delta: "+4.2%", deltaPositive: true, source: "Amazon · Anarix", updatedAt: "12 min ago" },
  { id: "m2", label: "ROAS", value: "3.8", delta: "-0.2", deltaPositive: false, source: "Amazon Ads", updatedAt: "12 min ago" },
  { id: "m3", label: "TACOS", value: "12.4%", delta: "+1.1%", deltaPositive: false, source: "Amazon Ads", updatedAt: "12 min ago" },
  { id: "m4", label: "Inventory Health", value: "78%", delta: "stable", deltaPositive: true, source: "FBA · Bruno", updatedAt: "30 min ago" },
  { id: "m5", label: "Buy Box", value: "94%", delta: "-53%", deltaPositive: false, source: "Amazon SP-API", updatedAt: "12 min ago" },
  { id: "m6", label: "Orders", value: "1,240", delta: "+2.1%", deltaPositive: true, source: "Amazon Reports", updatedAt: "1 hr ago" },
];

export const mockCampaigns: Campaign[] = [
  { id: "c1", name: "Summer — Exact", status: "Live", spend: "$500/day", roas: "4.2", acos: "18.4%", source: "Amazon Ads", updatedAt: "12 min ago", intent: "HARVEST" },
  { id: "c2", name: "Hero SKU Defense", status: "Live", spend: "$320/day", roas: "2.1", acos: "28.3%", source: "Amazon Ads", updatedAt: "12 min ago", intent: "DEFENSE" },
  { id: "c3", name: "Discovery", status: "Paused", spend: "$120/day", roas: "1.4", acos: "42.1%", source: "Amazon Ads", updatedAt: "2 hr ago", intent: "DISCOVERY" },
  { id: "c4", name: "Labor Day Promo", status: "Live", spend: "$400/day", roas: "3.1", acos: "21.0%", source: "Amazon Ads · Walmart Connect syncing", updatedAt: "30 min ago", intent: "SEASONAL" },
];

export const mockKeywords: Keyword[] = [
  { id: "k1", text: "desk organizer", bid: "$1.20", acos: "22.1%", campaignId: "c1", status: "Enabled" },
  { id: "k2", text: "hepa filter replacement", bid: "$1.45", acos: "58.3%", campaignId: "c1", status: "Enabled" },
  { id: "k3", text: "acme hero sku", bid: "$2.10", acos: "18.4%", campaignId: "c2", status: "Enabled" },
];

export const mockSearchTerms: SearchTerm[] = [
  { id: "s1", term: "hepa filter for acme", campaign: "Summer — Exact", spend: "$84", orders: 0, action: "Negative" },
  { id: "s2", term: "desk mount", campaign: "Discovery", spend: "$42", orders: 3, action: "Promote" },
  { id: "s3", term: "office organizer wood", campaign: "Summer — Exact", spend: "$28", orders: 1, action: "Ignore" },
];

export const mockProducts: Product[] = [
  { id: "p1", name: "Acme Hero Desk Mount", sku: "ACM-001", marketplace: "Amazon US", revenue: "$48,200", margin: "32%", buyBox: "94% → 41%", source: "SP-API 12 min ago" },
  { id: "p2", name: "Acme Filter Pack", sku: "ACM-002", marketplace: "Walmart US", revenue: "$12,400", margin: "18% low", buyBox: "88%", source: "Walmart 8 min ago · syncing" },
  { id: "p3", name: "Acme Organizer Wood", sku: "ACM-003", marketplace: "Amazon US", revenue: "$22,100", margin: "34%", buyBox: "92%", source: "SP-API 1 hr ago" },
];

export const mockInventory: InventoryItem[] = [
  { id: "i1", product: "Acme Hero Desk Mount", cover: "6 days", inbound: "500 ETA 8 days", risk: "High", source: "FBA · Bruno" },
  { id: "i2", product: "Acme Filter Pack", cover: "22 days", inbound: "—", risk: "Healthy", source: "WFS" },
  { id: "i3", product: "Acme Organizer Wood", cover: "12 days", inbound: "200 ETA 5 days", risk: "Low", source: "FBA" },
];
