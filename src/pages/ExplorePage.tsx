import { useState } from "react";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { KpiStrip } from "@/components/explore/KpiStrip";
import { ExploreChart } from "@/components/explore/ExploreChart";
import { ChangeReview } from "@/components/explore/ChangeReview";
import { DetailPanel } from "@/components/explore/DetailPanel";
import { mockMetrics, mockCampaigns, mockKeywords, mockSearchTerms, mockProducts, mockInventory, mockAdGroups, mockTargets, mockBudgets, mockDayParts, mockRules, mockListingIssues, mockProfitRows, mockPricing, mockPromotions } from "@/lib/mock";
import type { Campaign, Keyword, Product, AdGroup, Target, Rule } from "@/lib/types";
import { Sparkles, ChevronDown, Search } from "lucide-react";

type Tab = "campaigns" | "adgroups" | "targets" | "keywords" | "search" | "budgets" | "daypart" | "rules" | "products" | "inventory" | "profit" | "pricing" | "promotions";

export default function ExplorePage() {
  const [activeTab, setActiveTab] = useState<Tab>("campaigns");
  const [selectedMetric, setSelectedMetric] = useState(mockMetrics[0]);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedKeyword, setSelectedKeyword] = useState<Keyword | null>(null);
  const [selectedTarget, setSelectedTarget] = useState<Target | null>(null);
  const [selectedAdGroup, setSelectedAdGroup] = useState<AdGroup | null>(null);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [reviewData, setReviewData] = useState<{ title: string; current: string; proposed: string; impact: string; risk: "standard" | "elevated" } | null>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [aiQuery, setAiQuery] = useState("");
  const [aiInterpreted, setAiInterpreted] = useState<string | null>(null);

  const openReview = (title: string, current: string, proposed: string, impact: string, risk: "standard" | "elevated" = "elevated") => {
    setReviewData({ title, current, proposed, impact, risk });
    setReviewOpen(true);
  };

  const handleAiInterpret = () => {
    const q = aiQuery.toLowerCase();
    let target: Tab | null = null;
    if (q.includes("pricing") || q.includes("price")) target = "pricing";
    else if (q.includes("promotion") || q.includes("coupon")) target = "promotions";
    else if (q.includes("profit")) target = "profit";
    else if (q.includes("inventory") || q.includes("stock")) target = "inventory";
    else if (q.includes("keyword")) target = "keywords";
    else if (q.includes("ad group") || q.includes("adgroup")) target = "adgroups";
    else if (q.includes("target")) target = "targets";
    else if (q.includes("budget")) target = "budgets";
    else if (q.includes("daypart") || q.includes("day part")) target = "daypart";
    else if (q.includes("rule")) target = "rules";
    else if (q.includes("campaign")) target = "campaigns";
    else if (q.includes("product") || q.includes("catalog")) target = "products";
    if (target) {
      setActiveTab(target);
      setShowAll(true);
      setAiInterpreted(`Interpreted: show ${target} · ${q.includes("acos") ? "ACOS>30% · 7d" : "all"} · Prepare · Requires approval`);
    } else {
      setAiInterpreted("Interpreted: 8 campaigns · ACOS>35% · Spend>$100 · 7d · Reduce budget 15% · Prepare · Requires approval");
    }
  };

  const coreTabs: [Tab, string][] = [
    ["campaigns", "Campaigns"],
    ["products", "Products"],
    ["inventory", "Inventory"],
    ["profit", "Profitability"],
    ["promotions", "Promotions"],
  ];
  const advancedTabs: [Tab, string][] = [
    ["adgroups", "Ad Groups"],
    ["targets", "Targets"],
    ["keywords", "Keywords"],
    ["search", "Search Terms"],
    ["budgets", "Budgets"],
    ["daypart", "Day Parting"],
    ["rules", "Rules"],
    ["pricing", "Pricing"],
  ];

  return (
    <div className="space-y-6">
      <KpiStrip metrics={mockMetrics} onSelect={setSelectedMetric} />
      <ExploreChart metricLabel={selectedMetric.label} />

      {/* Triple Whale-inspired AI command — on request */}
      <Card className="border-primary/20">
        <div className="flex items-center gap-2 text-xs font-semibold">
          <Sparkles className="size-4 text-primary" />
          Ask Explore — on request, AI assisted
          <Badge className="ml-2 bg-primary/10 text-primary border-primary/20">Moby-like</Badge>
          <span className="ml-auto text-[11px] font-normal text-muted-foreground hidden sm:inline">Try: “show pricing with anomalies” or “products with margin down &gt;10%”</span>
        </div>
        <div className="flex gap-2 mt-3">
          <div className="flex-1 flex items-center gap-2 rounded-md border border-border bg-background px-3 h-9">
            <Search className="size-4 text-muted-foreground" />
            <input value={aiQuery} onChange={(e) => setAiQuery(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleAiInterpret()} placeholder="Find • Inspect • Create • Change — e.g., show ad groups for Summer campaign" className="flex-1 bg-transparent outline-none text-sm" />
          </div>
          <Button size="sm" onClick={handleAiInterpret}>
            Interpret
          </Button>
          <Button size="sm" variant="outline" onClick={() => setShowAll((v) => !v)}>
            {showAll ? "Hide advanced" : "Show all Anarix functions"} <ChevronDown className={`size-4 ml-1 transition ${showAll ? "rotate-180" : ""}`} />
          </Button>
        </div>
        {aiInterpreted && (
          <div className="mt-3 rounded-md border border-border bg-muted/30 p-3">
            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">White-box interpreted scope</div>
            <div className="text-xs mt-1">{aiInterpreted}</div>
            <div className="text-[11px] text-muted-foreground mt-1">Modify scope before Prepare — no long prompt chain. Presets: High Spend Scale · New Creative Testing</div>
          </div>
        )}
        {!aiInterpreted && <div className="text-[11px] text-muted-foreground mt-2">Triple Whale pattern: presets, segments, presets save filters/metrics/group-by. All Anarix functions are hidden until you ask — reduces noise, keeps 90-95% neutral.</div>}
      </Card>

      <div className="border-b border-border flex items-center gap-1 overflow-x-auto">
        {coreTabs.map(([k, l]) => (
          <button key={k} onClick={() => setActiveTab(k)} className={`px-3 py-2 text-sm font-medium border-b-2 whitespace-nowrap ${activeTab === k ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
            {l}
          </button>
        ))}
        {showAll &&
          advancedTabs.map(([k, l]) => (
            <button key={k} onClick={() => setActiveTab(k)} className={`px-3 py-2 text-sm font-medium border-b-2 whitespace-nowrap ${activeTab === k ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
              {l}
            </button>
          ))}
        <span className="ml-auto text-[11px] text-muted-foreground hidden lg:inline whitespace-nowrap">On request · Single Change Review · Provenance on every cell</span>
      </div>

      {activeTab === "campaigns" && (
        <Card>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <CardTitle>Campaigns · 20-22 · Advertising Overview</CardTitle>
            <div className="flex items-center gap-2">
              <Badge className="bg-muted text-muted-foreground border-border">{selected.length} selected</Badge>
              <Button size="sm" variant="outline" disabled={selected.length === 0} onClick={() => openReview(`Bulk change ${selected.length} campaigns`, "$500/day avg", "$650/day proposed", `Bulk modify ${selected.length} budgets · Elevated approval`)}>
                Bulk Review
              </Button>
              <Button size="sm" onClick={() => openReview("Create Campaign — Harvest", "—", "New campaign — 10 ASINs · Intent HARVEST", "Prepares campaign, requires approval")}>
                Create Campaign
              </Button>
            </div>
          </div>
          <div className="mt-3 border border-border rounded-md overflow-hidden">
            <div className="grid grid-cols-6 bg-muted text-[11px] font-semibold px-3 py-2">
              <span className="col-span-2">Campaign · Intent</span>
              <span>Spend</span>
              <span>ROAS</span>
              <span>Source</span>
              <span>Status</span>
            </div>
            {mockCampaigns.map((c) => (
              <div key={c.id} className="grid grid-cols-6 px-3 h-11 items-center border-t border-border text-sm hover:bg-muted/40 cursor-pointer" onClick={() => setSelectedCampaign(c)}>
                <div className="col-span-2 flex items-center gap-2">
                  <input type="checkbox" checked={selected.includes(c.id)} onChange={(e) => setSelected((prev) => (e.target.checked ? [...prev, c.id] : prev.filter((x) => x !== c.id)))} onClick={(e) => e.stopPropagation()} />
                  <span className="font-medium truncate">{c.name}</span>
                  <Badge className="bg-muted text-muted-foreground text-[10px]">{c.intent}</Badge>
                </div>
                <span>{c.spend}</span>
                <span>{c.roas}</span>
                <span className="text-[11px] text-muted-foreground truncate">{c.source} · {c.updatedAt}</span>
                <Badge className={c.status === "Live" ? "bg-success/10 text-success border-success/20" : "bg-muted text-muted-foreground"}>{c.status}</Badge>
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-3">
            <Button size="sm" variant="outline" onClick={() => setActiveTab("adgroups")}>
              View Ad Groups →
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setActiveTab("budgets")}>
              Budgets
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setActiveTab("rules")}>
              Rules
            </Button>
          </div>
        </Card>
      )}

      {activeTab === "adgroups" && (
        <Card>
          <div className="flex items-center justify-between">
            <CardTitle>Ad Groups · 25-26</CardTitle>
            <Button size="sm" onClick={() => openReview("Create Ad Group", "—", "New AG — Broad Discovery · $0.90 bid", "Low risk — bundled")}>
              Create Ad Group
            </Button>
          </div>
          <div className="mt-3 border border-border rounded-md overflow-hidden">
            <div className="grid grid-cols-5 bg-muted text-[11px] font-semibold px-3 py-2">
              <span className="col-span-2">Ad Group</span>
              <span>Campaign</span>
              <span>Spend</span>
              <span>Status</span>
            </div>
            {mockAdGroups.map((a) => (
              <div key={a.id} className="grid grid-cols-5 px-3 h-11 items-center border-t border-border text-sm hover:bg-muted/40 cursor-pointer" onClick={() => setSelectedAdGroup(a)}>
                <span className="col-span-2 font-medium">{a.name}</span>
                <span className="text-xs text-muted-foreground">{a.campaignId}</span>
                <span>{a.spend}</span>
                <Badge className={a.status === "Enabled" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}>{a.status}</Badge>
              </div>
            ))}
          </div>
          <div className="text-[11px] text-muted-foreground mt-2">Campaign → Ad Groups → Keywords/Targets · Context graph preserved</div>
        </Card>
      )}

      {activeTab === "targets" && (
        <Card>
          <CardTitle>Targets · 29-30</CardTitle>
          <div className="mt-3 border border-border rounded-md overflow-hidden">
            <div className="grid grid-cols-5 bg-muted text-[11px] font-semibold px-3 py-2">
              <span>Value</span>
              <span>Type</span>
              <span>Bid</span>
              <span>ACOS</span>
              <span>Ad Group</span>
            </div>
            {mockTargets.map((t) => (
              <div key={t.id} className="grid grid-cols-5 px-3 h-11 items-center border-t border-border text-sm hover:bg-muted/40 cursor-pointer" onClick={() => setSelectedTarget(t)}>
                <span className="truncate">{t.value}</span>
                <Badge className="bg-muted text-muted-foreground w-fit">{t.type}</Badge>
                <span>{t.bid}</span>
                <span>{t.acos}</span>
                <span className="text-xs text-muted-foreground">{t.adGroupId}</span>
              </div>
            ))}
          </div>
        </Card>
      )}

      {activeTab === "keywords" && (
        <Card>
          <div className="flex items-center justify-between">
            <CardTitle>Keywords · 27</CardTitle>
            <Button size="sm" variant="outline" onClick={() => openReview("Bulk bid change", "$1.40 avg", "$1.65 proposed", "High-impact — ACOS 58% → needs review", "elevated")}>
              Change bids
            </Button>
          </div>
          <div className="mt-3 border border-border rounded-md overflow-hidden">
            <div className="grid grid-cols-4 bg-muted text-[11px] font-semibold px-3 py-2">
              <span>Keyword</span>
              <span>Bid</span>
              <span>ACOS</span>
              <span>Status</span>
            </div>
            {mockKeywords.map((k) => (
              <div key={k.id} className="grid grid-cols-4 px-3 h-11 items-center border-t border-border text-sm hover:bg-muted/40 cursor-pointer" onClick={() => setSelectedKeyword(k)}>
                <span>{k.text}</span>
                <span>{k.bid}</span>
                <span>{k.acos}</span>
                <Badge className="bg-success/10 text-success">{k.status}</Badge>
              </div>
            ))}
          </div>
        </Card>
      )}

      {activeTab === "search" && (
        <Card>
          <CardTitle>Search Terms · 31 — opportunities & waste</CardTitle>
          <div className="mt-3 border border-border rounded-md overflow-hidden">
            <div className="grid grid-cols-5 bg-muted text-[11px] font-semibold px-3 py-2">
              <span>Term</span>
              <span>Campaign</span>
              <span>Spend</span>
              <span>Orders</span>
              <span>Action</span>
            </div>
            {mockSearchTerms.map((s) => (
              <div key={s.id} className="grid grid-cols-5 px-3 h-11 items-center border-t border-border text-sm">
                <span>{s.term}</span>
                <span className="text-xs text-muted-foreground truncate">{s.campaign}</span>
                <span>{s.spend}</span>
                <span>{s.orders}</span>
                <Badge className={s.action === "Negative" ? "bg-destructive/10 text-destructive border-destructive/20" : s.action === "Promote" ? "bg-primary/10 text-primary border-primary/20" : "bg-muted text-muted-foreground"}>{s.action}</Badge>
              </div>
            ))}
          </div>
        </Card>
      )}

      {activeTab === "budgets" && (
        <Card>
          <CardTitle>Budgets · 32</CardTitle>
          <div className="mt-3 border border-border rounded-md overflow-hidden">
            <div className="grid grid-cols-4 bg-muted text-[11px] font-semibold px-3 py-2">
              <span>Campaign</span>
              <span>Daily</span>
              <span>Utilized</span>
              <span>Status</span>
            </div>
            {mockBudgets.map((b) => (
              <div key={b.campaignId} className="grid grid-cols-4 px-3 h-11 items-center border-t border-border text-sm">
                <span>{b.campaignId}</span>
                <span>{b.daily}</span>
                <span>{b.utilized}</span>
                <Badge className={b.status === "Constrained" ? "bg-warning/10 text-warning" : b.status === "Healthy" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}>{b.status}</Badge>
              </div>
            ))}
          </div>
          <Button size="sm" className="mt-3" onClick={() => openReview("Budget +30% c1", "$500/day", "$650/day", "Underutilized 22% → Constrained 88% — elevated")}>
            Prepare budget change
          </Button>
        </Card>
      )}

      {activeTab === "daypart" && (
        <Card>
          <CardTitle>Day Parting · 33 — performance by time</CardTitle>
          <div className="mt-3 border border-border rounded-md overflow-hidden">
            <div className="grid grid-cols-4 bg-muted text-[11px] font-semibold px-3 py-2">
              <span>Window</span>
              <span>Campaign</span>
              <span>ROAS</span>
              <span>Enabled</span>
            </div>
            {mockDayParts.map((d) => (
              <div key={d.id} className="grid grid-cols-4 px-3 h-11 items-center border-t border-border text-sm">
                <span>{d.window}</span>
                <span className="text-xs text-muted-foreground">{d.campaignId}</span>
                <span>{d.roas}</span>
                <Badge className={d.enabled ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}>{d.enabled ? "On" : "Off"}</Badge>
              </div>
            ))}
          </div>
          <Button size="sm" variant="outline" className="mt-3" onClick={() => openReview("Day Part schedule", "Off 00–06", "Enable 10–14 ROAS 4.8", "Create schedule — standard")}>
            Create schedule
          </Button>
        </Card>
      )}

      {activeTab === "rules" && (
        <Card>
          <CardTitle>Advertising Rules · 34-37 — metric operator threshold</CardTitle>
          <div className="mt-3 border border-border rounded-md overflow-hidden">
            <div className="grid grid-cols-6 bg-muted text-[11px] font-semibold px-3 py-2">
              <span className="col-span-2">Scope · Metric</span>
              <span>Condition</span>
              <span>Action</span>
              <span>Last triggered</span>
              <span>Enabled</span>
            </div>
            {mockRules.map((r) => (
              <div key={r.id} className="grid grid-cols-6 px-3 h-11 items-center border-t border-border text-sm">
                <div className="col-span-2">
                  <div className="font-medium text-xs">{r.scope}</div>
                  <div className="text-[11px] text-muted-foreground">{r.metric}</div>
                </div>
                <span>
                  {r.operator} {r.threshold} · {r.duration}
                </span>
                <span className="text-xs truncate">{r.action}</span>
                <span className="text-xs text-muted-foreground">{r.lastTriggered}</span>
                <Badge className={r.enabled ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}>{r.enabled ? "On" : "Off"}</Badge>
              </div>
            ))}
          </div>
          <Button size="sm" className="mt-3" onClick={() => openReview("Create Rule — ACOS", "—", "ACOS >30% 7d → prepare change", "Rule: prepare change · low risk bundled")}>
            Create Rule
          </Button>
        </Card>
      )}

      {activeTab === "products" && (
        <Card>
          <CardTitle>Products / Catalog · 38-39 + Listing Issues 42</CardTitle>
          <div className="mt-3 border border-border rounded-md overflow-hidden">
            <div className="grid grid-cols-6 bg-muted text-[11px] font-semibold px-3 py-2">
              <span className="col-span-2">Product · SKU</span>
              <span>Revenue</span>
              <span>Margin</span>
              <span>Buy Box</span>
              <span>Source</span>
            </div>
            {mockProducts.map((p) => (
              <div key={p.id} className="grid grid-cols-6 px-3 h-11 items-center border-t border-border text-sm hover:bg-muted/40 cursor-pointer" onClick={() => setSelectedProduct(p)}>
                <div className="col-span-2">
                  <div className="font-medium">{p.name}</div>
                  <div className="text-[11px] text-muted-foreground">{p.sku} · {p.marketplace}</div>
                </div>
                <span>{p.revenue}</span>
                <span className={p.margin.includes("low") ? "text-destructive" : ""}>{p.margin}</span>
                <span>{p.buyBox}</span>
                <span className="text-[11px] text-muted-foreground truncate">{p.source}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-md border border-border p-3 bg-muted/30">
            <div className="text-xs font-semibold">Listing Issues · 42</div>
            <div className="space-y-1 mt-2">
              {mockListingIssues.map((li) => (
                <div key={li.id} className="flex justify-between text-xs border border-border rounded p-2 bg-card">
                  <span>
                    {li.type} — {li.detail}
                  </span>
                  <span className="text-[11px] text-muted-foreground">{li.source}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      )}

      {activeTab === "inventory" && (
        <Card>
          <CardTitle>Inventory Overview · 44 + Detail 45-48</CardTitle>
          <div className="mt-3 border border-border rounded-md overflow-hidden">
            <div className="grid grid-cols-4 bg-muted text-[11px] font-semibold px-3 py-2">
              <span>Product</span>
              <span>Cover</span>
              <span>Inbound</span>
              <span>Risk</span>
            </div>
            {mockInventory.map((r) => (
              <div key={r.id} className="grid grid-cols-4 px-3 h-11 items-center border-t border-border text-sm">
                <span>{r.product}</span>
                <span>{r.cover}</span>
                <span className="text-xs text-muted-foreground">{r.inbound}</span>
                <Badge className={r.risk === "High" ? "bg-destructive/10 text-destructive border-destructive/20" : r.risk === "Healthy" ? "bg-success/10 text-success border-success/20" : "bg-warning/10 text-warning"}>{r.risk}</Badge>
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-3">
            <Button size="sm" onClick={() => openReview("Replenishment — Acme Hero", "6 days", "Transfer 500 ETA 8 days", "Stockout + promo exposure — Bruno→Marko coordination on Operate")}>
              Replenishment Review
            </Button>
            <Badge className="bg-muted text-muted-foreground border-border">Rules: Cover &lt;7 days → create signal</Badge>
          </div>
        </Card>
      )}

      {activeTab === "profit" && (
        <Card>
          <CardTitle>Profitability · 49-52</CardTitle>
          <div className="mt-3 border border-border rounded-md overflow-hidden">
            <div className="grid grid-cols-6 bg-muted text-[11px] font-semibold px-3 py-2">
              <span className="col-span-2">Product</span>
              <span>Revenue</span>
              <span>COGS+Fees+Ad</span>
              <span>Margin</span>
              <span>Source</span>
            </div>
            {mockProfitRows.map((r) => (
              <div key={r.id} className="grid grid-cols-6 px-3 h-11 items-center border-t border-border text-sm">
                <span className="col-span-2 text-xs">{r.product}</span>
                <span>{r.revenue}</span>
                <span className="text-xs text-muted-foreground">
                  {r.cogs} + {r.fees} + {r.adCost}
                </span>
                <span className={r.margin.includes("13%") ? "text-destructive" : "text-success"}>{r.margin}</span>
                <span className="text-[11px] text-muted-foreground truncate">{r.source}</span>
              </div>
            ))}
          </div>
          <Button size="sm" variant="outline" className="mt-3" onClick={() => openReview("Profit investigation 52", "Margin 13% low", "Analyze cost drivers: COGS 55% + ad 17%", "Investigation canvas — root cause inventory/pricing/Buy Box")}>
            Investigate margin
          </Button>
        </Card>
      )}

      {activeTab === "pricing" && (
        <Card>
          <CardTitle>Pricing · 53-55 — competitor + anomaly</CardTitle>
          <div className="mt-3 border border-border rounded-md overflow-hidden">
            <div className="grid grid-cols-5 bg-muted text-[11px] font-semibold px-3 py-2">
              <span>Product</span>
              <span>Current</span>
              <span>History</span>
              <span>Competitor</span>
              <span>Anomaly</span>
            </div>
            {mockPricing.map((p) => (
              <div key={p.id} className="grid grid-cols-5 px-3 h-11 items-center border-t border-border text-sm">
                <span className="text-xs">{p.product}</span>
                <span className="font-medium">{p.current}</span>
                <span className="text-xs text-muted-foreground">{p.history}</span>
                <span className="text-xs">{p.competitor}</span>
                <span className={p.anomaly.includes("−") ? "text-warning" : "text-muted-foreground"}>{p.anomaly}</span>
              </div>
            ))}
          </div>
          <Button size="sm" className="mt-3" onClick={() => openReview("Price change — Hero", "$29.99", "$32.99", "Anomaly −4.8% · Min $14.99 Passed · Daily 2.4% Passed")}>
            Prepare price change
          </Button>
        </Card>
      )}

      {activeTab === "promotions" && (
        <Card>
          <CardTitle>Promotions · 56-59</CardTitle>
          <div className="mt-3 border border-border rounded-md overflow-hidden">
            <div className="grid grid-cols-5 bg-muted text-[11px] font-semibold px-3 py-2">
              <span className="col-span-2">Promotion</span>
              <span>Discount</span>
              <span>Status</span>
              <span>Performance</span>
            </div>
            {mockPromotions.map((pr) => (
              <div key={pr.id} className="grid grid-cols-5 px-3 h-11 items-center border-t border-border text-sm">
                <span className="col-span-2 font-medium">{pr.name}</span>
                <span>{pr.discount}</span>
                <Badge className={pr.status === "active" ? "bg-success/10 text-success" : pr.status === "scheduled" ? "bg-warning/10 text-warning" : "bg-muted text-muted-foreground"}>{pr.status}</Badge>
                <span className="text-xs text-muted-foreground truncate">{pr.performance}</span>
              </div>
            ))}
          </div>
          <Button size="sm" className="mt-3" onClick={() => openReview("Create Promotion — 15% Labor Day", "—", "3 SKUs · 15% · 12 days window", "Checks: inventory healthy, margin supports, no conflict")}>
            Create Promotion
          </Button>
        </Card>
      )}

      <DetailPanel open={!!selectedCampaign} onClose={() => setSelectedCampaign(null)} title={selectedCampaign?.name ?? ""}>
        {selectedCampaign && (
          <div className="space-y-3 text-sm">
            <div className="text-xs text-muted-foreground">{selectedCampaign.spend} · ROAS {selectedCampaign.roas} · {selectedCampaign.source} · {selectedCampaign.updatedAt} · Intent {selectedCampaign.intent}</div>
            <div className="rounded-md border border-border p-3">
              <div className="text-xs font-semibold">Context graph</div>
              <div className="text-xs text-muted-foreground mt-1">Campaign → 3 products → Inventory 6 days → 2 signals → 1 meeting · Related signals + decisions + history</div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" onClick={() => openReview(`Edit ${selectedCampaign.name}`, selectedCampaign.spend, "$650/day", "Budget +30% — elevated, needs approval")}>
                Edit budget
              </Button>
              <Button size="sm" variant="outline" onClick={() => setSelectedCampaign(null)}>
                Close
              </Button>
            </div>
          </div>
        )}
      </DetailPanel>

      <DetailPanel open={!!selectedKeyword} onClose={() => setSelectedKeyword(null)} title={selectedKeyword?.text ?? ""}>
        {selectedKeyword && (
          <div className="text-sm">
            <div className="text-xs text-muted-foreground">Bid {selectedKeyword.bid} · ACOS {selectedKeyword.acos}</div>
            <Button size="sm" className="mt-3" onClick={() => openReview(`Change bid ${selectedKeyword.text}`, selectedKeyword.bid, "$1.65", "High-impact bid change — verify ROAS")}>
              Change bid
            </Button>
          </div>
        )}
      </DetailPanel>

      <DetailPanel open={!!selectedProduct} onClose={() => setSelectedProduct(null)} title={selectedProduct?.name ?? ""}>
        {selectedProduct && (
          <div className="text-sm space-y-3">
            <div className="text-xs text-muted-foreground">{selectedProduct.sku} · Revenue {selectedProduct.revenue} · Margin {selectedProduct.margin} · Buy Box {selectedProduct.buyBox}</div>
            <div className="rounded-md border border-border p-3 text-xs">Performance · Advertising · Inventory · Profitability · Listing · Signals · Recommendations · Activity · History</div>
            <Button size="sm" onClick={() => openReview(`Price change ${selectedProduct.name}`, "$29.99", "$32.99", "Pricing anomaly — guardrails: Min price $14.99 Passed, Daily 2.4% Passed")}>
              Prepare price change
            </Button>
          </div>
        )}
      </DetailPanel>

      <DetailPanel open={!!selectedAdGroup} onClose={() => setSelectedAdGroup(null)} title={selectedAdGroup?.name ?? ""}>
        {selectedAdGroup && (
          <div className="text-sm">
            <div className="text-xs text-muted-foreground">{selectedAdGroup.spend} · Bid {selectedAdGroup.bid} · {selectedAdGroup.source}</div>
            <Button size="sm" className="mt-3" onClick={() => openReview(`Edit ${selectedAdGroup.name}`, selectedAdGroup.bid, "$1.60", "Ad group bid +14%")}>
              Edit bid
            </Button>
          </div>
        )}
      </DetailPanel>

      <DetailPanel open={!!selectedTarget} onClose={() => setSelectedTarget(null)} title={selectedTarget?.value ?? ""}>
        {selectedTarget && (
          <div className="text-sm">
            <div className="text-xs text-muted-foreground">{selectedTarget.type} · Bid {selectedTarget.bid} · ACOS {selectedTarget.acos}</div>
            <Button size="sm" className="mt-3" onClick={() => openReview(`Pause target ${selectedTarget.value}`, selectedTarget.bid, "Paused", "Low conversion — prepare change")}>
              Pause target
            </Button>
          </div>
        )}
      </DetailPanel>

      <ChangeReview open={reviewOpen} onClose={() => setReviewOpen(false)} title={reviewData?.title ?? ""} current={reviewData?.current ?? ""} proposed={reviewData?.proposed ?? ""} impact={reviewData?.impact ?? ""} risk={reviewData?.risk ?? "elevated"} />
    </div>
  );
}
