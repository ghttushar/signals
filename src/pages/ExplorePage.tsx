import { useState } from "react";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { KpiStrip } from "@/components/explore/KpiStrip";
import { ExploreChart } from "@/components/explore/ExploreChart";
import { ExploreCommand } from "@/components/explore/ExploreCommand";
import { ChangeReview } from "@/components/explore/ChangeReview";
import { DetailPanel } from "@/components/explore/DetailPanel";
import { mockMetrics, mockCampaigns, mockKeywords, mockSearchTerms, mockProducts, mockInventory } from "@/lib/mock";
import type { Campaign, Keyword, Product } from "@/lib/types";

export default function ExplorePage() {
  const [activeTab, setActiveTab] = useState<"campaigns" | "products" | "inventory" | "keywords" | "search">("campaigns");
  const [selectedMetric, setSelectedMetric] = useState(mockMetrics[0]);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedKeyword, setSelectedKeyword] = useState<Keyword | null>(null);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [reviewData, setReviewData] = useState<{ title: string; current: string; proposed: string; impact: string; risk: "standard" | "elevated" } | null>(null);
  const [selected, setSelected] = useState<string[]>([]);

  const openReview = (title: string, current: string, proposed: string, impact: string, risk: "standard" | "elevated" = "elevated") => {
    setReviewData({ title, current, proposed, impact, risk });
    setReviewOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* KPI Strip */}
      <KpiStrip metrics={mockMetrics} onSelect={setSelectedMetric} />

      {/* Chart */}
      <ExploreChart metricLabel={selectedMetric.label} />

      {/* Moby-like white-box command */}
      <ExploreCommand />

      {/* Underline Tabs + Toolbar */}
      <div className="border-b border-border flex items-center gap-1 overflow-x-auto">
        {[
          ["campaigns", "Campaigns"],
          ["keywords", "Keywords"],
          ["search", "Search Terms"],
          ["products", "Products"],
          ["inventory", "Inventory"],
        ].map(([k, l]) => (
          <button
            key={k}
            onClick={() => setActiveTab(k as never)}
            className={`px-3 py-2 text-sm font-medium border-b-2 whitespace-nowrap ${activeTab === k ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}
          >
            {l}
          </button>
        ))}
        <span className="ml-auto text-[11px] text-muted-foreground hidden sm:inline">Bulk via single Change Review · 90-95% neutral</span>
      </div>

      {/* Campaigns */}
      {activeTab === "campaigns" && (
        <Card>
          <div className="flex items-center justify-between">
            <CardTitle>Advertising — Campaigns · 20-22</CardTitle>
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
                  <span className="font-medium">{c.name}</span>
                  <Badge className="bg-muted text-muted-foreground text-[10px]">{c.intent}</Badge>
                </div>
                <span>{c.spend}</span>
                <span>{c.roas}</span>
                <span className="text-[11px] text-muted-foreground truncate">{c.source} · {c.updatedAt}</span>
                <Badge className={c.status === "Live" ? "bg-success/10 text-success border-success/20" : "bg-muted text-muted-foreground"}>{c.status}</Badge>
              </div>
            ))}
          </div>
          <div className="text-[11px] text-muted-foreground mt-2">44px rows · high density · DataTableToolbar · provenance chips on every cell</div>
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
          <div className="text-[11px] text-muted-foreground mt-2">Convert to keyword / add negative — visible structured operation, not long prompt</div>
        </Card>
      )}

      {activeTab === "products" && (
        <Card>
          <CardTitle>Products / Catalog · 38-39</CardTitle>
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
        </Card>
      )}

      {activeTab === "inventory" && (
        <Card>
          <CardTitle>Inventory Overview · 44</CardTitle>
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
          <div className="text-[11px] text-muted-foreground mt-2">Inventory Intelligence: 6 days + promo in 5 days → High risk · Bruno flagged → coordination story on Operate</div>
        </Card>
      )}

      {/* Detail panels */}
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

      <ChangeReview open={reviewOpen} onClose={() => setReviewOpen(false)} title={reviewData?.title ?? ""} current={reviewData?.current ?? ""} proposed={reviewData?.proposed ?? ""} impact={reviewData?.impact ?? ""} risk={reviewData?.risk ?? "elevated"} />
    </div>
  );
}
