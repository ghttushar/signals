# Phased Build Plan — Signals

**Status:** Active plan, scalable per-agent architecture  
**Stack:** React + Vite + Tailwind (Periwinkle #F5F6FA bg/#4A62D9 primary, coral Aan), frontend-only mock, `ghttushar/signals` `main` only  
**Naming:** OPERATE (decision/action, formerly Command) / EXPLORE (business intelligence & operational control, formerly Business) / WORKSPACE (Viktor/7th Gear context) / INTELLIGENCE contextual / CONNECTIONS / SETTINGS

---

## 0. How Phasing Works

- `A Core / B Entity / C State` categories from `SCREEN_INVENTORY.md` — don't build 126 pages independently; build patterns.
- Each phase is a **vertical slice** with mock data, verifiable via `npm run build` + Vercel preview.
- Profasee-inspired features are **woven across phases**, not a separate phase: Mission Control board, confidence, graduated autonomy, guardrails, memory flywheel, coordination stories.

## New Feature Set (Profasee-inspired, scalable)

1. **Mission Control board** — Operate Home 09 is live Kanban: `In Progress → Awaiting Approval → Approved → Done`. Default `Ask me first`, real-time movement, `Drop task` (in-app + Slack-style). Every pending card has confidence chip + `View trace ↗`.
2. **Graduated autonomy (per-agent, 5 levels)** — `Recommend → Ask me first → Limited handling → Broader handling → Full autonomy`. Per-agent mix (Marko=Handling it, new agent=Ask me first). Bad outcomes auto-downgrade. Wires to `INTELLIGENCE_MODEL §40` OBSERVE→AUTOPILOT + Settings → Approval Policies.
3. **Guardrails as visible product** — Hard ceilings (Max bid, Min price, Daily movement %, ACOS), Approval-above-impact, Emergency brake, No-fly zones, Anomaly pause, Double-check, Fresh-data check. Live `Passed / Held / Blocked` on each approval card.
4. **Agent Memory flywheel** — Workspace-isolated (per brand, not cross-brand), append-only audit, rollback window, export. `Bad price test → account memory`. Timeline on Operate + Audit Log.
5. **Coordination stories** — Morning brief strip: `Bruno flagged stock risk → Marko paused spend` style cross-agent narrative, per `INTELLIGENCE_MODEL §14`.

---

## Phase 0 — Docs & Foundation Spec (current)

**Goal:** Lock source of truth before code.

**Includes:** All `docs/*.md` (thesis through `SCREEN_INVENTORY.md` 126), `UI_FEATURE_SCREEN_ARCHITECTURE.md` with OPERATE/EXPLORE rename, `AAN_MASCOT_SPEC.md` coral, `PHASED_BUILD_PLAN.md` (this), `AanMascot.tsx` with 4 states (idle/listening/thinking/working, cursor + hover) + `src/lib/utils.ts`.

**Done when:** `docs/README.md` + repo `README.md` updated, commit `main` pushed.

## Phase 1 — React Foundation & Design System

**Goal:** App shell that feels Anarix premium, not generic AI wrapper.

**Screens:** 07 Setup Progress skeleton, Operate/Explore/Workspace nav (W-56 expanded/collapsed, AppTaskbar 2-row, right-side panels).

**Features:**
- Vite React + Tailwind tokens (`--background #F5F6FA`, `--card #FFFFFF`, `--primary #4A62D9`, `--border #E0E3EE`, Satoshi/Noto Sans, 4px spacing, 44px table rows per `ANARIX_VISUAL_DESIGN`).
- Mock domain layer per `INFORMATION_OBJECT_MODEL` & `INTEGRATION_FEASIBILITY §22` entities (Organization→Account→Signal→Action) + integration states (connected/syncing/error).
- AanMascot interactive in chat dock vs static in lists (`VISUAL §25`).
- Global Search / Command palette shell.

**Done when:** `npm run build` passes, nav switches, mock signals render.

## Phase 2 — OPERATE: Mission Control Board (MVP Core)

**Goal:** Prove `AI monitors, human decides` — not Anarix+chatbot.

**Screens:** 09 Operate Home (Mission Control board), 10 Signal Detail, 11 Investigation, 12 Decision, 13 Approval (confidence+guardrails+trace), 14 Execution (live trace + rollback), 15 Verification, 16-17 Watches, 115-117 Global Search/Command.

**Features:**
- Mission Control Kanban with confidence scores (96/78/54), live trace, `Ask me first` default.
- Graduated autonomy UI: per-agent chips, approval queue with `View trace ↗`, reject teaches memory.
- Guardrails live evaluation on cards.
- Morning brief + coordination story strip + overnight wins.

**Done when:** User sees `3 things changed, 1 needs you`, opens signal, sees why + options + trace, approves, sees verifying→rollback ready.

## Phase 3 — EXPLORE Core: Inspect & Operate Business

**Goal:** Triple Whale/Moby-like depth but via structured AI, not manual nav.

**Screens:** 18 Explore Overview, 19 Analytics, 20-22 Campaigns/Campaign Detail, 27 Keywords, 31 Search Terms, 38-39 Products, 44 Inventory Overview, 49 Profitability Overview, 60 Reports.

**Features:**
- KPI strip → chart → table → detail panel (`INTERACTION §10`), presets/segments reuse.
- Explore AI: `Find/Inspect/Create/Change` structured actions per `USER_EXPERIENCE_MODEL §31`, white-box `INTERPRETED SCOPE` (not long chat).
- Bulk actions use single Change Review pattern.

**Done when:** From Operate signal can `Open Explore context` and create/edit campaign via AI with Review→Approve→Verify.

## Phase 4 — WORKSPACE: Viktor + 7th Gear Context

**Goal:** People/meetings become operational state, not separate silo.

**Screens:** 64 Workspace Home, 65 Client Workspace, 66-73 People/Conversations/Meetings + 72 Prep/73 Follow-up, 74-77 Decisions/Commitments, 78-80 Documents/Search.

**Features:**
- Meeting lifecycle: `Prepare context → Capture → Extract decisions/commitments → Create actions → Monitor`.
- Workspace AI: find decisions/commitments, draft follow-ups, connect to business (message→request→commitment chain).
- Context anchors: Account/Product/Person/Time.

**Done when:** Meeting prep generates structured context, follow-up creates Operate tasks.

## Phase 5 — Detailed Business Depth (Power Users)

**Goal:** Full 126 coverage via patterns, not 126 pages.

**Screens:** 23-37 Campaign create/edit/bulk/rules, 42-48 Inventory detail/risks, 51-59 Pricing/Promotions, etc. — implemented as tabbed detail panels + bulk review reuse.

**Features:**
- Single Detail Panel pattern, single Change Review component with `riskLevel` elevated UI.
- Inventory/shipment risk coordination: `Bruno flags → Marko pauses` story visible on Operate.

**Done when:** All Explore entities support create/edit/pause/enable/bulk with mock verification.

## Phase 6 — Connections, Settings & Polish

**Goal:** Enterprise-ready controls & trust.

**Screens:** 89-99 Connections (commerce/ads/workspace/finance/analytics) with capability exposure + sync status, 100-114 Settings (org/users/roles/permissions), 108 Approval Policies (graduated autonomy + guardrails), 113 Audit Log (memory timeline, append-only, export), 108c Memory, 113b Coordination stories, 121-126 empty/error/permission/integration errors.

**Features:**
- Per-agent autonomy toggles, per-agent budget caps + cost tracking, no-fly zones editor.
- Guardrails dashboard + live evaluation.
- Memory flywheel: per-workspace isolation, append-only history, rollback window.
- Uniform Provenance chips (`source/timestamp/last-updated` per `FEASIBILITY §21`), async states (`Requested→Processing→Accepted→Verifying→Completed`).

**Done when:** `INTEGRATION_FEASIBILITY §23` degraded/permission-restricted states demo, provenance on every insight, no fantasy capabilities.

---

## Build Order

`P0 Docs (done) → P1 Foundation → P2 Operate → P3 Explore Core → P4 Workspace → P5 Explore Depth → P6 Connections/Settings` — each phase preserves prior phase behavior per Constitution `§3.11` normalized abstractions + `§3.14` state-driven.

## Verification

Each phase: `npm run build` + manual `Operate Home` smoke (3 signals → investigation → approval with confidence/guardrails → execution→ verification) + `git log --oneline` on `main`.

## Risk

Mission Control adds real-time complexity to mock — mitigate via deterministic mock orchestration per `INTEGRATION_FEASIBILITY §18`. Graduated autonomy adds per-agent state — mitigate via single `autonomyLevel` enum + shared `Guardrail` model, not per-agent custom logic.

---

## Next Logical Artifacts (after P0)

`Ecommerce UX Blueprint`, `Detailed Signal Taxonomy`, `Permissions & Action Policy Model`, `Detailed Ecommerce Domain Model`, `UI Architecture` — per `INFORMATION_OBJECT_MODEL §73`, derived from this plan, not before.
