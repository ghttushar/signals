# UI / FEATURE / SCREEN ARCHITECTURE

## Purpose

This document defines the functional purpose, capabilities, features, tasks, and screen inventory of the product UI.

It intentionally does **not** prescribe layouts, visual hierarchy, component placement, spacing, visual styling, or specific UI compositions.

The UI should remain scalable so visual and interaction design can evolve without conflicting with the product's functional architecture.

---

# 1. PRODUCT UI MODEL

> **Naming note:** Formerly COMMAND/BUSINESS. Renamed to OPERATE/EXPLORE per product decision. OPERATE = decision/action environment (formerly Command), EXPLORE = business intelligence & operational control environment (formerly Business).

The product has three primary working environments:

1. **OPERATE**
2. **EXPLORE**
3. **Workspace**

Alongside them:

4. **Connections**
5. **Settings**

There is also a contextual **Intelligence** experience, but it is **not a primary navigation destination**.

Intelligence is invoked from relevant contexts within OPERATE, EXPLORE, and Workspace.

---

# 2. PRIMARY NAVIGATION

```text
OPERATE
EXPLORE
WORKSPACE

CONNECTIONS
SETTINGS
```

The account/platform/market context is a persistent workspace scope rather than a primary navigation destination.

The exact hierarchy must remain configurable because different integrations can expose different account, marketplace, region, store, or organizational structures.

---

# 3. OPERATE

## Purpose

OPERATE is the user's **decision and action environment**.

It answers:

> **What needs my attention?**

The system continuously monitors connected business and workspace information and surfaces items requiring attention, review, decision, approval, action, follow-up, or awareness.

OPERATE is not the complete EXPLORE-data environment. It is where the user processes important work surfaced by the system.

## Features

### Signals
Meaningful detected events, including:

- Issues
- Risks
- Opportunities
- Changes
- Performance changes
- Inventory problems
- Advertising problems
- Catalog problems
- Pricing problems
- Profitability problems
- Marketplace problems
- Workspace events
- Meeting-derived events
- Commitments
- Deadlines
- Conflicts
- Positive developments

The signal system must remain extensible.

### Signal prioritization

Signals can be prioritized by:

- severity
- financial impact
- urgency
- confidence
- affected account
- affected products
- affected campaigns
- deadline
- user responsibility
- business importance
- dependency
- potential opportunity

### Signal states

```text
Detected
Understood
Presented
Viewed
Investigating
Waiting for decision
Waiting for approval
Approved
Rejected
Executing
Verifying
Resolved
Dismissed
Escalated
Waiting
```

### Signal investigation

Users can inspect:

- what happened
- when it happened
- affected entities
- probable causes
- supporting evidence
- business impact
- historical context
- related signals
- related campaigns
- related products
- related meetings
- related workspace conversations
- previous decisions
- available actions

Investigation can open the contextual Intelligence experience.

### Signal actions

Depending on the signal, users can:

- approve
- reject
- dismiss
- investigate
- assign
- delegate
- create a task
- create a watch
- request information
- execute an available action
- modify an AI recommendation
- escalate
- communicate with a person/team
- open EXPLORE context
- open Workspace context

### Decisions

OPERATE surfaces items requiring human decisions, including:

- campaign budget changes
- bid changes
- listing changes
- promotional changes
- client communication
- workspace messages
- high-impact financial actions

### Approvals — Confidence-Gated + Live Guardrails + Trace

Approvals represent prepared actions requiring authorized human approval. Inspired by Profasee Mission Control: every pending card is confidence-gated with live guardrail evaluation.

Approval information includes:

- action
- affected scope
- proposed change
- current value
- proposed value
- expected impact
- reason
- evidence
- authority requirement
- approval status
- **confidence score** (per-task, e.g., 96% clean kill, 78% reprice, 54% budget hike)
- **live guardrail checks** (Max bid, Min price, Daily movement %, ACOS target, Approval-above-impact, Emergency brake, No-fly zones, Anomaly pause, Fresh-data check, Double-check) — each shows `Passed / Held / Blocked`
- **trace** — `What employee saw → Constraints applied → What they decided → Expected outcome → Can it be rolled back?` + `View trace ↗` link
- **view trace + rollback point** preserved before live write

Low confidence or stale data narrows authority and keeps card in Awaiting Approval with `Weak signal → Action path narrowed → Rollback preserved` explanation. Rejecting teaches account memory, not generic playbook.

### Graduated Autonomy (Per-Agent)

Not binary. 5 levels, per-agent mix:

1. Recommend only — observes/suggests, no action
2. Ask me first (default) — proposes, waits for approval, every card shows confidence+trace
3. Limited handling — routine auto-ships inside guardrails, edge escalates
4. Broader handling — most decisions inside guardrails
5. Full autonomy — trusted, acts inside boundaries

Mix per agent (e.g., Marko PPC = Handling it, new Catalog Auditor = Ask me first). Wires to Intelligence Model §40 OBSERVE→RECOMMEND→PREPARE→COORDINATE→EXECUTE→AUTOPILOT + board. Bad outcomes → auto-downgrade to Ask me first.

### Agent Memory Flywheel

Workspace-isolated (per brand, not reused across brands), append-only audit timeline, rollback window, export. Every decision saved, result measured, bad price test → account memory (e.g., Bruno flags stock risk → Marko pauses spend coordination story). Audit any day forever.

### Coordination Stories

Concrete cross-agent stories on Operate Home morning brief make orchestration visceral (e.g., `Bruno flagged 3 SKUs at 6-day cover + promotion in 5 days → Marko paused 2 campaigns → Oracle held price → Claudia briefed`), per Intelligence Model §14.

### Waiting items

OPERATE surfaces things waiting for:

- user input
- another user
- client response
- workspace response
- external platform response
- API/process completion
- scheduled time
- verification

### Positive signals

OPERATE can surface:

- sales growth
- profitability improvements
- campaign improvements
- inventory recovery
- successful actions
- resolved issues
- opportunities discovered
- goals achieved

### Filtering

Users can filter by:

- account
- platform
- brand
- market
- signal type
- severity
- status
- owner
- date

---

# 4. EXPLORE

## Purpose

EXPLORE is the complete **EXPLORE intelligence and operational control environment**.

It answers:

> **What's happening in my business, and what can I do about it?**

Unlike OPERATE, EXPLORE intentionally provides deeper access to business information.

Users can:

- inspect
- compare
- analyze
- create
- edit
- delete
- configure
- manage
- execute supported actions

AI is available throughout EXPLORE to help find information, analyze it, and perform supported actions.

---

# 5. EXPLORE OVERVIEW

Capabilities:

- revenue
- sales
- orders
- units
- profit
- margin
- advertising spend
- advertising revenue
- ROAS
- ACOS
- TACOS
- conversion
- traffic
- inventory
- returns
- promotions
- marketplace performance

Tasks:

- change time range
- compare periods
- change business scope
- investigate metrics
- open related entities
- identify recommendations
- access deeper business sections

---

# 6. ADVERTISING

## Advertising Overview

Capabilities:

- advertising performance
- spend
- sales
- ROAS
- ACOS
- TACOS
- conversion
- CPC
- CTR
- campaign health
- marketplace performance
- period comparisons

## Campaigns

Tasks:

- view
- search
- filter
- sort
- compare
- inspect
- create where supported
- edit
- pause
- enable
- archive/delete where supported
- change budgets
- change bidding strategies
- change bids
- bulk actions

## Ad Groups

Tasks:

- view
- inspect
- create where supported
- edit
- enable
- pause
- manage targeting

## Keywords

Tasks:

- search
- inspect
- add
- edit
- pause
- enable
- remove
- change bids
- analyze performance
- bulk actions

## Targets

Tasks:

- inspect
- add
- edit
- pause
- enable
- remove
- change bids
- analyze performance

## Search Terms

Tasks:

- analyze
- identify opportunities
- identify waste
- convert search terms into keywords where supported
- add negative keywords
- inspect associated campaigns
- compare performance

## Budgets

Tasks:

- inspect
- identify underutilized budgets
- identify constraints
- recommend changes
- prepare changes
- approve changes
- execute supported changes

## Day Parting

Tasks:

- inspect performance by time period
- identify high-performing periods
- identify inefficient periods
- create schedules
- edit schedules
- remove schedules
- apply supported scheduling changes

## Advertising Rules

Tasks:

- create
- edit
- enable
- disable
- delete
- inspect rule history
- inspect conditions
- inspect actions
- define approval requirements

Rules can use:

```text
metric
operator
threshold
duration
scope
```

and actions such as:

```text
prepare change
request approval
execute permitted action
create signal
create task
notify user
```

---

# 7. PRODUCTS / CATALOG

Capabilities:

- product search
- product filtering
- product performance
- product status
- product revenue
- product units
- product margin
- advertising relationship
- inventory
- pricing
- listing information
- marketplace availability

Tasks:

- inspect products
- edit supported information
- manage supported listing information
- identify listing problems
- investigate performance
- open related campaigns
- open inventory
- open profitability
- open related signals

---

# 8. PRODUCT DETAIL

A product detail context can include:

- performance
- advertising
- inventory
- profitability
- pricing
- listing/catalog
- marketplace status
- related signals
- recommendations
- activity
- historical changes

Available sections depend on connected platform capabilities.

---

# 9. INVENTORY

Capabilities:

- current inventory
- inbound inventory
- days of supply
- inventory velocity
- stockout risk
- excess inventory
- aged inventory
- stranded inventory
- unfulfillable inventory
- lost/damaged inventory
- removal orders
- capacity information where available
- marketplace inventory comparison

Tasks:

- inspect inventory
- filter inventory
- investigate risks
- view recommendations
- create inventory watches
- create rules
- perform supported inventory actions

---

# 10. PROFITABILITY

Capabilities:

- revenue
- COGS
- marketplace fees
- advertising costs
- refunds
- returns
- promotions
- other supported costs
- gross profit
- net profit
- margin
- profitability by product
- profitability by campaign
- profitability by marketplace
- profitability by brand
- profitability by period

Tasks:

- compare profitability
- investigate changes
- identify loss-making products
- identify margin opportunities
- analyze cost drivers
- open related actions

---

# 11. PRICING

Capabilities:

- current price
- price history
- marketplace pricing
- competitor pricing where supported
- price changes
- pricing anomalies
- pricing recommendations
- supported price updates

Tasks:

- inspect
- compare
- investigate
- prepare price changes
- approve changes
- execute supported changes

---

# 12. PROMOTIONS

Capabilities:

- active promotions
- scheduled promotions
- promotion performance
- coupon information
- discount information
- promotion history

Tasks:

- create supported promotions
- edit
- pause
- remove
- analyze
- prepare promotional actions

---

# 13. ANALYTICS

Purpose: deeper business analysis.

Capabilities:

- metric analysis
- comparisons
- trends
- segmentation
- filtering
- historical analysis
- custom views
- saved analyses
- recommendations
- supported data exploration

Users can create analytical views without changing underlying source data.

---

# 14. REPORTS

Capabilities:

- account reports
- performance reports
- advertising reports
- inventory reports
- profitability reports
- client reports
- internal reports
- scheduled reports
- saved reports
- exports

Tasks:

- create
- edit
- duplicate
- save
- share
- export
- schedule
- delete

---

# 15. EXPLORE AI / OPERATE INTERACTION

EXPLORE AI helps users:

- find data
- analyze data
- compare data
- create filters
- identify patterns
- create campaigns
- edit campaigns
- create rules
- modify supported objects
- perform bulk operations
- prepare actions
- execute approved actions

User intent should become **visible structured business operations**.

The experience must not depend on long prompts.

---

# 16. EXPLORE ACTION SYSTEM

Supported action types may include:

- create
- edit
- delete
- enable
- disable
- pause
- resume
- adjust
- bulk modify
- create rule
- create watch
- generate report
- export
- assign
- communicate

Availability depends on connected platform capabilities.

---

# 17. WORKSPACE

## Purpose

Workspace is the **people, communication, meeting and organizational-context environment**.

It answers:

> **What's happening around the business?**

It brings together information from connected collaboration and productivity systems.

---

# 18. WORKSPACE CLIENTS / ACCOUNTS

Capabilities:

- people
- conversations
- meetings
- decisions
- commitments
- documents
- activity
- history
- related business context

---

# 19. PEOPLE

Capabilities:

- people directory within permitted workspace scope
- role/context information where available
- associated accounts
- meetings
- conversations
- commitments
- tasks
- activity

Users can inspect relevant work context subject to permissions.

---

# 20. CONVERSATIONS

Potential sources:

- Slack
- Microsoft Teams
- Google Workspace
- email
- other supported workspace systems

Tasks:

- search conversations
- inspect conversation history
- open threads
- identify decisions
- identify commitments
- identify requests
- identify unresolved issues
- connect conversations to business context

---

# 21. MEETINGS

Capabilities:

- upcoming meetings
- past meetings
- meeting search
- meeting participants
- meeting context
- meeting history
- transcripts where available
- summaries where available
- decisions
- commitments
- follow-ups
- related EXPLORE information

---

# 22. MEETING PREPARATION

The system can assemble:

- previous meeting context
- outstanding commitments
- recent business changes
- current risks
- relevant signals
- recent conversations
- relevant documents
- important decisions
- participant context

The result becomes a structured meeting preparation context.

---

# 23. MEETING FOLLOW-UP

The system can identify:

- decisions
- tasks
- commitments
- owners
- deadlines
- unresolved questions
- follow-up messages
- related business actions

Users can review and approve resulting work.

---

# 24. DECISIONS

Capabilities:

- decision history
- decision owner
- participants
- date
- related meeting
- related conversation
- related business entity
- current status
- resulting actions

---

# 25. COMMITMENTS

Capabilities:

- owner
- commitment
- deadline
- related account
- related meeting
- related conversation
- status
- follow-up

---

# 26. DOCUMENTS

Where supported:

- find documents
- inspect documents
- identify relevant documents
- connect documents to accounts
- connect documents to meetings
- connect documents to decisions
- use documents as context

---

# 27. WORKSPACE ACTIONS

Where integrations support write access, users can:

- send messages
- create messages
- create reminders
- assign tasks
- create follow-ups
- schedule meetings
- create calendar events
- prepare communications
- send approved communications

All actions remain subject to permissions and approval rules.

---

# 28. WORKSPACE AI

Workspace intelligence can:

- summarize
- find decisions
- find commitments
- prepare meetings
- find conversations
- connect conversations to business activity
- draft follow-ups
- identify unresolved issues
- identify relevant people
- find historical context

The AI should return **structured context and actions**, rather than forcing users into an open-ended chat workflow.

---

# 29. INTELLIGENCE EXPERIENCE

## Purpose

Intelligence is a **contextual investigation and reasoning experience**, not a primary navigation destination.

It can be invoked from:

- OPERATE
- EXPLORE
- Workspace

It answers:

> **Why?**

> **What happened?**

> **What are my options?**

> **What happens if I do this?**

## Investigation

- root-cause investigation
- related-event analysis
- historical comparison
- affected entities
- evidence
- confidence
- impact

## Analysis

- metric analysis
- trend analysis
- segmentation
- comparison
- correlation
- performance investigation

## What-if

Where sufficient data supports it:

- compare potential strategies
- estimate impact
- compare alternatives
- show assumptions
- show expected consequences

## Evidence

Users can inspect:

- source data
- related signals
- historical events
- campaign data
- product data
- workspace context
- meeting context
- decisions
- documents

## Actions

From Intelligence users can:

- create an action
- modify an action
- approve
- reject
- create a task
- create a watch
- open EXPLORE
- open Workspace
- return to OPERATE

---

# 30. CONNECTIONS

## Purpose

Connections manages all external systems connected to the product.

## Commerce

Potential integrations:

- Amazon
- Walmart
- Shopify
- other supported commerce platforms

## Advertising

Potential integrations:

- Amazon Ads
- Meta
- Google
- TikTok
- other supported advertising systems

## Workspace

Potential integrations:

- Slack
- Microsoft Teams
- Google Workspace
- email systems
- document systems

## Meetings

Potential integrations:

- Google Calendar
- Google Meet
- Microsoft Calendar
- Microsoft Teams
- other supported meeting systems

## Finance

Potential integrations:

- QuickBooks
- other supported finance systems

## Analytics / BI

Potential integrations:

- Tableau
- other supported analytics systems

---

# 31. CONNECTION MANAGEMENT

Each integration must expose only capabilities actually available through that integration.

Capabilities may include:

- connect
- authorize
- select accounts
- select scopes
- configure permissions
- inspect connection status
- inspect synchronization status
- manage account mappings
- manage access
- reconnect
- disconnect

The UI must not expose an action that the underlying integration cannot support.

---

# 32. SETTINGS

## Organization

- organization information
- account structure
- business configuration
- organizational preferences

## Users & Teams

- users
- invitations
- teams
- roles
- ownership
- assignments

## Roles & Permissions

- data access
- account access
- platform access
- workspace access
- action permissions
- approval permissions

## Approval Policies — Graduated Autonomy + Guardrails

Users can configure:

- actions requiring approval
- high-impact actions
- financial thresholds
- advertising thresholds
- account-specific restrictions
- role-specific approvals
- **per-agent autonomy** (5 levels: Recommend → Ask me first → Limited handling → Broader handling → Full autonomy, per-agent mix, bad outcomes auto-downgrade)
- **guardrails** (Max bid, Min price, Daily movement %, ACOS target, Approval-above-impact, Emergency brake, No-fly zones, Anomaly pause, Fresh-data check, Double-check) — visible on Operate cards as live evaluation
- **agent memory** (workspace-isolated, append-only audit, rollback window, export, coordination stories)

## AI Preferences

Potential controls:

- notification preferences
- proactive behavior
- recommendation preferences
- action authority
- approval behavior
- monitoring preferences

## Notifications

- OPERATE notifications
- workspace notifications
- meeting notifications
- action notifications
- approval notifications
- escalation notifications

## Security

- authentication
- sessions
- access controls
- audit information
- security configuration

## Billing

Where applicable:

- plan
- usage
- billing information
- invoices

---

# 33. UNIVERSAL SEARCH / COMMAND

A global interaction surface should be available throughout the product.

It allows users to:

- find an account
- find a product
- find a campaign
- find a signal
- find a meeting
- find a person
- find a conversation
- find a decision
- find a document
- inspect business data
- initiate supported actions

It supports:

### Direct navigation

```text
Brand X
```

### Structured intent

```text
Campaigns with ACOS above 35%
```

### Action intent

```text
Create a rule for low inventory
```

The result should become a **visible structured state**, not require prolonged conversational prompting.

---

# 34. CROSS-PRODUCT CONTEXT

The same object can be accessed from different environments without creating duplicate objects.

Example:

```text
Signal
 â†“
business campaign
 â†“
Workspace conversation
 â†“
Meeting decision
 â†“
Task
 â†“
Action
 â†“
Verification
```

Users should be able to move between related contexts.

---

# 35. ACCOUNT / PLATFORM / MARKET CONTEXT

The product must support contextual scoping across:

- organization
- client/brand
- platform
- account
- marketplace
- region
- store
- advertising profile
- other platform-specific scopes

The selector should dynamically reflect the hierarchy supported by the connected platform.

The architecture must **not hardcode Amazon's hierarchy as the universal model**.

---

# 36. CROSS-SCREEN FEATURE MAPPING

| Feature | OPERATE | EXPLORE | Workspace | Intelligence |
|---|---|---|---|---|
| Signals | Primary | Source/context | Source/context | Investigate |
| KPIs | Limited | Primary | Contextual | Supporting |
| Campaigns | Action context | Primary | Related | Analyze |
| Products | Action context | Primary | Related | Analyze |
| Inventory | Action context | Primary | Related | Analyze |
| Profitability | Signal context | Primary | Related | Analyze |
| Rules | Trigger/action | Primary | â€” | Create/analyze |
| Meetings | Related | Related | Primary | Prepare/analyze |
| Conversations | Related | Related | Primary | Analyze |
| Decisions | Primary | Related | Primary | Context |
| Tasks | Primary | Related | Primary | Create/manage |
| Reports | Related | Primary | Related | Generate |
| Recommendations | Primary | Primary | Contextual | Generate |
| Approvals | Primary | Action context | Action context | Action context |
| Workspace actions | Possible | Possible | Primary | Prepare |
| EXPLORE actions | Primary | Primary | Possible | Prepare |
| Monitoring | Result | Configure | Context | Analyze |
| Search | Global | Primary | Primary | Contextual |

---

# 37. FUNDAMENTAL UI RULE

The product must not make every capability a permanent navigation item.

Navigation represents **major user environments**, not every feature.

```text
OPERATE
â†’ decisions, signals, approvals, priority

EXPLORE
â†’ data, analysis, management, creation, editing, operational control

WORKSPACE
â†’ people, meetings, conversations, organizational context

INTELLIGENCE
â†’ investigation, reasoning, evidence, what-if, contextual action

CONNECTIONS
â†’ integrations and access

SETTINGS
â†’ configuration and administration
```

---

# 38. PRODUCT EXPERIENCE DISTINCTION

The environments have intentionally different jobs:

### OPERATE

**Process what matters.**

### EXPLORE

**Understand and manage the business.**

### WORKSPACE

**Understand and manage the human/work context around the business.**

### INTELLIGENCE

**Investigate and reason about a specific problem or opportunity.**

### CONNECTIONS

**Manage connected systems.**

### SETTINGS

**Configure the product.**

This is the functional foundation.

Visual layout, component selection, interaction styling, density, responsive behavior, and final screen composition remain open for the later:

**Wireframe â†’ Interaction Design â†’ Visual Design**

phases.


