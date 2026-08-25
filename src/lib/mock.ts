import type { Account, Signal, Integration, Watch, Metric, Campaign, Keyword, SearchTerm, Product, InventoryItem, Person, Team, Conversation, Meeting, Decision, Commitment, DocumentItem } from "./types";

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

export const mockPeople: Person[] = [
  { id: "p1", name: "Aarav Mehta", role: "Account Manager", team: "AM", accountIds: ["acme", "pf"], avatar: "AM", status: "active" },
  { id: "p2", name: "Sara Khan", role: "Designer", team: "Design", accountIds: ["acme"], avatar: "SK", status: "active" },
  { id: "p3", name: "Marko", role: "PPC Manager (Aan)", team: "Aan", accountIds: ["acme", "pf"], avatar: "MK", status: "active" },
  { id: "p4", name: "Bruno", role: "Demand Planner (Aan)", team: "Aan", accountIds: ["acme"], avatar: "BR", status: "active" },
  { id: "p5", name: "Claudia", role: "COO (Aan)", team: "Aan", accountIds: ["acme", "mess"], avatar: "CL", status: "active" },
  { id: "p6", name: "Priya Desai", role: "Sales", team: "Sales", accountIds: ["acme"], avatar: "PD", status: "active" },
  { id: "p7", name: "John Rhinehart", role: "Client — PF Harris", team: "Client", accountIds: ["pf"], avatar: "JR", status: "offline" },
];

export const mockTeams: Team[] = [
  { id: "t1", name: "Account Management", memberIds: ["p1", "p6"] },
  { id: "t2", name: "Aan Agents", memberIds: ["p3", "p4", "p5"] },
  { id: "t3", name: "Design", memberIds: ["p2"] },
];

export const mockConversations: Conversation[] = [
  { id: "c1", channel: "#acme — Slack", participants: ["p1", "p7"], lastMessage: "Can we increase spend next week?", updatedAt: "2 hr ago", source: "Slack · #acme", request: "Increase advertising spend", accountId: "acme" },
  { id: "c2", channel: "Teams — Acme Ops", participants: ["p1", "p2", "p6"], lastMessage: "Banner draft ready for review", updatedAt: "5 hr ago", source: "Teams", commitment: "Send forecast Friday", accountId: "acme" },
  { id: "c3", channel: "Email — John Rhinehart", participants: ["p7", "p1"], lastMessage: "QBR deck looks good, confirm coupon?", updatedAt: "1 day ago", source: "Gmail", request: "Confirm coupon 15%", accountId: "pf" },
];

export const mockMeetings: Meeting[] = [
  { id: "m1", title: "Staples Review — Acme", accountId: "acme", when: "Tomorrow 10am", participants: ["p1", "p2", "p6"], status: "upcoming", prep: ["Outstanding: Send forecast Friday", "Recent: Buy Box lost 2 SKUs", "Risk: Inventory 6 days + promo in 5 days"], source: "Google Meet · Calendar" },
  { id: "m2", title: "PF Harris QBR", accountId: "pf", when: "Yesterday 2pm", participants: ["p1", "p7"], status: "past", summary: "Discussed hero SKU Buy Box + promo plan", decisions: ["Increase hero budget $180 (pending approval)", "Lock PF Harris hero ASIN from auto-price"], transcriptWarning: "Transcript retained 30 days", source: "Meet · Transcript 12 min ago" },
  { id: "m3", title: "Labor Day Planning", accountId: "acme", when: "Fri 3pm", participants: ["p1", "p2", "p6"], status: "needs_prep", prep: ["Labor Day opportunity +18–27% · 3 SKUs healthy · No conflicting promo"], source: "Google Calendar" },
];

export const mockDecisions: Decision[] = [
  { id: "d1", title: "Increase hero budget $180", owner: "Aarav Mehta", accountId: "pf", meetingId: "m2", status: "pending", createdAt: "Yesterday", rationale: "High conversion velocity, ROAS 4.2 holding, but inventory dip ahead · 54% confidence" },
  { id: "d2", title: "Lock PF Harris hero ASIN", owner: "Aarav Mehta", accountId: "pf", status: "approved", createdAt: "Yesterday", rationale: "Protect from auto-price — no-fly zone" },
];

export const mockCommitments: Commitment[] = [
  { id: "cm1", owner: "Aarav Mehta", promise: "Send updated forecast Friday", due: "Fri", accountId: "acme", meetingId: "m1", status: "open", source: "Meeting m1 · Slack #acme" },
  { id: "cm2", owner: "Sales", promise: "Confirm Labor Day coupon 15% by Fri", due: "Fri", accountId: "acme", meetingId: "m3", status: "open", source: "Labor Day plan" },
];

export const mockDocuments: DocumentItem[] = [
  { id: "doc1", name: "Acme SOP — Campaign Setup", type: "SOP", accountId: "acme", updatedAt: "2 days ago", source: "Google Drive" },
  { id: "doc2", name: "PF Harris QBR Deck 2026-05", type: "Report", accountId: "pf", updatedAt: "1 day ago", source: "Drive · Meet" },
  { id: "doc3", name: "Labor Day Brief", type: "Sheet", accountId: "acme", updatedAt: "3 hr ago", source: "Sheets" },
];
