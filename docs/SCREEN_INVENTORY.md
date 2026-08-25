# SCREEN INVENTORY

> **Naming note:** Formerly COMMAND/BUSINESS. Renamed to OPERATE/EXPLORE. OPERATE = decision/action environment (formerly Command), EXPLORE = business intelligence & operational control environment (formerly Business).

Individual buildable screens — concrete screen inventory rather than treating every feature as a page.

I would structure it like this:

---

## 0. Onboarding

**01 — Welcome / Login**

* Sign in
* Create account
* SSO
* Forgot password

**02 — Organization Setup**

* Organization name
* Basic company information
* Initial workspace setup

**03 — Connect Data Sources**

* Amazon
* Walmart
* Shopify
* Anarix
* Other supported commerce/advertising connections

**04 — Connect Workspace**

* Slack
* Teams
* Google Workspace
* Email

**05 — Connect Meetings**

* Google Calendar
* Google Meet
* Microsoft Calendar / Teams

**06 — Configure Access & Permissions**

* Users
* Roles
* Account access
* Platform access
* Action permissions

**07 — Initial Sync / Setup Progress**

* Connection status
* Data synchronization
* Workspace indexing
* Initial intelligence preparation
* Errors / missing permissions

**08 — Setup Complete**

* Connected systems
* Accounts detected
* Markets detected
* Ready to enter product

---

## 1. OPERATE

This is the **Signals replacement / decision environment**.

It should NOT become an Anarix dashboard.

**09 — Operate Home — Mission Control Board**

Primary operational surface — live Kanban inspired by Profasee Mission Control. Default mode: **Ask me first** (nothing executes without approval). Real-time movement.

Columns:

* In Progress (agent working)
* Awaiting Approval (confidence-gated, human decision)
* Approved
* Done (with verification + rollback ready)

Each pending card shows:

* Confidence score (e.g., 96% clean kill → one-tap approve, 78% reprice → read trace, 54% budget hike → ask follow-up)
* Proposed change (e.g., `Pause 6 zero-conversion campaigns — $28.50/day → $0 — 14 days — 0 sales`)
* Evidence / reasoning trace
* Guardrail checks (see expanded guardrails below)
* Owner (Aan agent / human), account, impacted entities
* Actions: Approve / Reject / View trace ↗ / Ask follow-up / Delegate / Snooze
* Live movement — card animates In Progress → Awaiting Approval → Done without refresh

Header: `1 pending • 9 active • Handling it 100% • 3 open • 1 done this week` + per-agent autonomy mode chip (`Ask me first` / `Handling it`) + `Drop task` (in-app + Slack-style) + morning brief strip.

Also includes Needs attention / Risks / Opportunities / Waiting as filtered views of same board. No separate queue page.

**10 — Signal Detail**

Individual signal context:

* What happened
* Impact
* Why
* Evidence
* Related entities
* Recommendation
* Available actions
* Status

**11 — Investigation**

Deep investigation launched from a signal.

* Root cause
* Evidence
* Timeline
* Related business data
* Related workspace context
* Previous decisions
* Recommendations

**12 — Decision Review**

For situations requiring a human decision.

* Situation
* Options
* Recommendation
* Expected impact
* Consequences
* Decision controls

**13 — Approval Review — Confidence + Guardrail + Trace**

For actions requiring approval. Every card is confidence-gated.

* Confidence score (per-task, not per-agent: same agent can post 96 and 54 same hour)
* Exact proposed change with trace: `What employee saw → Constraints applied → What they decided → Expected outcome → Can it be rolled back?`
* Current state → New state + scope + impact + reason
* **Live guardrail evaluation** (visible on card): Max bid / Min price / Daily movement % / ACOS target / Approval-above-impact / Emergency brake / No-fly zones / Anomaly pause / Fresh-data check / Double-check verified — each shows `Passed / Held / Blocked` with reason
* Permission level + `Ask me first` vs `Handling it` mode at time of proposal
* Actions: Approve / Reject / Ask follow-up / View full trace / Modify / Delegate — rejecting teaches account memory (not generic playbook)

If confidence low or data stale: authority narrows, card stays in Awaiting Approval with `Weak signal detected → Action path narrowed → Rollback preserved` explanation.

**14 — Action Execution — Live Trace + Rollback**

Visible execution state with full trace:

* Preparing → Awaiting approval → Executing → Platform response (e.g., `Wrote pause to Ads API · 6/6 OK`) → Verifying → Completed / Failed / Escalated
* For each run: checks, API calls, rollback point (`prior state preserved`) remain visible after move
* Verification result + audit trail `ID 4f2a` + `Logged to audit trail` + one-click rollback ready
* If failed: `Blocked by emergency brake` or `Held for human review` with reason, not generic error

**15 — Action Result / Verification**

* What changed
* Before / after
* Platform confirmation
* Verification result
* Related signal
* Follow-up monitoring

**16 — Watches**

User-created monitoring requests.

* Active watches
* Paused watches
* Completed watches
* Create watch
* Edit watch
* Delete watch
* Watch history

**17 — Watch Detail**

* What is being monitored
* Scope
* Conditions
* Frequency
* Trigger
* Result history
* Actions on trigger

---

## 2. EXPLORE

This is where the user deliberately goes to **inspect and operate the business**.

Unlike Operate, this is allowed to contain dashboards, tables, KPIs, charts and detailed controls.

---

### Explore Core

**18 — Explore Overview**

* Revenue
* Sales
* Profit
* Advertising
* Inventory
* Performance
* Recommendations
* Trends

**19 — Explore Analytics**

* Metric analysis
* Comparisons
* Trends
* Segmentation
* Filters
* Saved analyses

---

### Advertising

**20 — Advertising Overview**

**21 — Campaigns**

**22 — Campaign Detail**

**23 — Create Campaign**

**24 — Edit Campaign**

**25 — Ad Groups**

**26 — Ad Group Detail**

**27 — Keywords**

**28 — Keyword Detail**

**29 — Targets**

**30 — Target Detail**

**31 — Search Terms**

**32 — Budgets**

**33 — Day Parting**

**34 — Advertising Rules**

**35 — Create / Edit Advertising Rule**

**36 — Advertising Change Review**

**37 — Advertising Bulk Action Review**

---

### Products / Catalog

**38 — Products / Catalog**

**39 — Product Detail**

**40 — Product Performance**

**41 — Product Listing / Catalog Management**

**42 — Listing Issue Detail**

**43 — Product Change Review**

---

### Inventory

**44 — Inventory Overview**

**45 — Inventory Detail**

**46 — Inventory Risk Detail**

**47 — Replenishment / Inventory Action Review**

**48 — Inventory Rules**

---

### Profitability

**49 — Profitability Overview**

**50 — Profitability Detail**

**51 — Product Profitability**

**52 — Profitability Investigation**

---

### Pricing

**53 — Pricing Overview**

**54 — Pricing Detail**

**55 — Price Change Review**

---

### Promotions

**56 — Promotions Overview**

**57 — Promotion Detail**

**58 — Create / Edit Promotion**

**59 — Promotion Change Review**

---

### Reports

**60 — Reports**

**61 — Report Detail**

**62 — Report Builder**

**63 — Scheduled Reports**

---

## 3. WORKSPACE

This is the **Viktor + 7th Gear-style organizational context environment**.

It is not another ecommerce dashboard.

---

**64 — Workspace Home**

* Accounts/clients
* Recent activity
* People
* Conversations
* Meetings
* Decisions
* Commitments

**65 — Client / Account Workspace**

* Client context
* People
* Conversations
* Meetings
* Decisions
* Commitments
* Documents
* Activity

**66 — People**

**67 — Person Detail**

* Conversations
* Meetings
* Commitments
* Tasks
* Related accounts

**68 — Conversations**

**69 — Conversation Detail**

**70 — Meetings**

**71 — Meeting Detail**

**72 — Meeting Preparation**

**73 — Meeting Summary / Follow-up**

**74 — Decisions**

**75 — Decision Detail**

**76 — Commitments**

**77 — Commitment Detail**

**78 — Documents**

**79 — Document Detail**

**80 — Workspace Search / Context**

---

## 4. INTELLIGENCE

Again, **Intelligence is not a navigation item**.

These screens are invoked contextually.

**81 — Intelligence Canvas**

General investigation environment.

Can be opened from:

* Operate
* Explore
* Workspace

**82 — Root Cause Investigation**

**83 — Comparison / Analysis**

**84 — What-If Analysis**

**85 — Recommendation Detail**

**86 — Evidence / Source Detail**

**87 — Intelligence Action Preparation**

**88 — Intelligence Action Review**

---

## 5. CONNECTIONS

**89 — Connections Home**

All connected systems.

**90 — Commerce Connections**

* Amazon
* Walmart
* Shopify
* Other commerce systems

**91 — Advertising Connections**

* Amazon Ads
* Meta
* Google
* TikTok
* etc.

**92 — Workspace Connections**

* Slack
* Teams
* Google Workspace
* Email

**93 — Meeting Connections**

* Google Calendar
* Google Meet
* Microsoft Calendar / Teams

**94 — Finance Connections**

* QuickBooks
* Other finance systems

**95 — Analytics Connections**

* Tableau
* Other BI systems

**96 — Integration Detail**

Generic integration management screen.

**97 — Account / Resource Mapping**

Map external resources to internal:

* Brand
* Client
* Account
* Market
* Region
* Store

**98 — Connection Permissions**

* Read access
* Write access
* Action scopes
* Workspace scopes

**99 — Sync / Connection Status**

* Sync status
* Last sync
* Errors
* Missing permissions
* Reconnect

---

## 6. SETTINGS

**100 — Settings Home**

**101 — Organization**

**102 — Users**

**103 — User Detail**

**104 — Teams**

**105 — Roles**

**106 — Role Detail**

**107 — Permissions**

**108 — Approval Policies — Graduated Autonomy (Per-Agent)**

Per-agent 5-level autonomy (scalable, not binary):

* 1 Recommend only — observes, suggests, no action
* 2 Ask me first (default) — proposes, waits for approval, every card shows confidence + trace, reject teaches account
* 3 Limited handling — routine tasks auto-ship inside guardrails, edge cases escalate
* 4 Broader handling — most decisions inside guardrails
* 5 Full autonomy — trusted, acts inside boundaries

Mix per agent (e.g., Marko PPC = Handling it, new Catalog Auditor = Ask me first). Controls: per-agent budget caps, stop conditions, cost tracking (`$42/$60`), auto-pause, bad outcomes → auto-downgrade to Ask me first. Wires to Intelligence Model §40 OBSERVE→RECOMMEND→PREPARE→COORDINATE→EXECUTE→AUTOPILOT + board.

**108b — Guardrails (Visible Product)**

Hard ceilings (Max bid, Min price $14.99, Daily movement 2.4%, ACOS 22%), Approval-above-impact ($150), Emergency brake ($500/0 conv), No-fly zones (ASINs/keywords/time windows), Anomaly pause, Double-check before write, Fresh-data check. Shown live on approval card as `Passed / Held / Blocked`, not hidden settings. Also global Safety dashboard.

**108c — Agent Memory Flywheel**

Workspace-isolated (per brand, not reused across brands), append-only audit timeline, rollback window, export. Every decision saved, result measured, bad price test → account memory. Audit any day forever.

**109 — AI Preferences**

**110 — Monitoring Preferences**

**111 — Notification Preferences**

**112 — Security**

**113 — Audit Log — Agent Memory Timeline**

Append-only history: recommendations, approvals, pauses, reversals, outcomes with timestamps, reasons, exact rule that allowed/blocked change, rollback IDs, workspace scope. Filter by agent / account / decision / outcome. Exportable. Powers memory flywheel + coordination stories (e.g., `Bruno flags stock risk → Marko pauses spend`).

**113b — Coordination Stories (Operate Brief)**

Concrete cross-agent story strip on Operate Home morning brief: e.g., `Bruno flagged 3 SKUs at 6-day cover + promotion in 5 days → Marko paused 2 campaigns → Oracle held price → Claudia briefed`. Makes Intelligence Model §14 orchestration visceral.

**114 — Billing / Plan**

---

## 7. GLOBAL / SYSTEM SCREENS

These are not primary navigation destinations but are necessary product screens.

**115 — Global Search**

**116 — Search Results**

**117 — Command / Quick Action**

This is the structured universal action surface, **not a ChatGPT clone**.

**118 — Create Task**

**119 — Task Detail**

**120 — Task / Work History**

**121 — Notification Center**

**122 — Error / Failed Action**

**123 — Permission Required**

**124 — Empty State / No Data**

**125 — Integration Error**

**126 — API / Sync Error**

---

## TOTAL

That gives us approximately:

### **126 individual screens**

But I would **not tell OpenCode to blindly build 126 screens independently.**

There are three categories:

### A. Core screens

These define the product experience:

**Operate**

* Operate Home
* Signal Detail
* Investigation
* Decision Review
* Approval Review
* Action Execution
* Action Result
* Watches

**Explore**

* Explore Overview
* Advertising
* Products
* Inventory
* Profitability
* Pricing
* Promotions
* Analytics
* Reports

**Workspace**

* Workspace Home
* Client Workspace
* People
* Conversations
* Meetings
* Decisions
* Commitments
* Documents

**Connections**

* Connections Home
* Integration Detail
* Resource Mapping
* Permissions

**Settings**

* Settings
* Users
* Roles
* Approval Policies
* AI Preferences

### B. Entity/detail screens

These are variations of reusable patterns:

* Campaign Detail
* Product Detail
* Meeting Detail
* Person Detail
* Decision Detail
* Commitment Detail
* etc.

### C. State/action screens

These are reusable system patterns:

* Review
* Approval
* Execution
* Verification
* Error
* Permission
* Empty
* Sync

---

### One important correction to our previous architecture

I would **not make "Explore Overview → Advertising → Campaigns → Ad Groups → Keywords..." behave like the old Anarix navigation**.

Those are **functional screens inside Explore**, but the user should be able to reach them contextually through:

> product → campaign → targeting

or

> signal → campaign → investigation

or

> search → campaign

without having to walk through a rigid module tree every time.

The detailed Explore environment can still expose them for power users.

That preserves the thing you explicitly want:

> **Signals = AI monitors and tells me what matters.**

> **Explore = I can inspect and control everything when I want to.**

> **Workspace = I can understand the human/business context around it.**

> **Intelligence = I can investigate a specific thing deeply.**

And **none of those should collapse into the same-looking screen.**
