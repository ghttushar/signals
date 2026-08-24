# ANARIX — USER FLOWS, PRODUCT ARCHITECTURE & INFORMATION ARCHITECTURE
## Customer-survey-derived product blueprint

**Source:** `User Questions.pdf` — 41-page customer survey  
**Purpose:** Convert observed customer workflows, pain points, information needs, and desired assistant behavior into a coherent product architecture, user-flow system, information architecture, intelligence pipeline, feature architecture, and solution map.

---

# 0. HOW TO READ THIS DOCUMENT

This blueprint separates three things:

### A. Observed
Directly supported by customer survey responses.

### B. Product solution
A proposed product response to the observed problem.

### C. Intelligence behavior
How the AI should reason and act on top of that product capability.

The survey is not treated as a generic UX inspiration document. It is treated as the source of truth for the workflow problems.

---

# 1. EXECUTIVE PRODUCT THESIS

The customers are not asking for another ecommerce dashboard.

They already have:

- Amazon Seller Central
- Walmart Seller / Connect
- Shopify
- Power BI
- Anarix
- Excel / Google Sheets
- Gmail / Outlook
- Slack
- 7thGear / meeting systems
- Google Drive / Dropbox
- ChatGPT / Claude
- Helium 10 / SmartScout / other research tools

The recurring problem is that **the work is distributed across these systems**.

The customer repeatedly performs:

```text
OPEN SYSTEM
   ↓
FIND DATA
   ↓
DOWNLOAD REPORT
   ↓
COMBINE DATA
   ↓
ANALYZE
   ↓
FIND ISSUE
   ↓
ASK SOMEONE
   ↓
MAKE REPORT
   ↓
TELL CLIENT
   ↓
CREATE FOLLOW-UP
   ↓
CHECK AGAIN
```

The product should transform this into:

```text
BUSINESS STATE
      ↓
ANARIX UNDERSTANDS
      ↓
WHAT MATTERS
      ↓
WHY IT MATTERS
      ↓
WHAT SHOULD HAPPEN
      ↓
WORK PLAN
      ↓
PEOPLE + SYSTEMS
      ↓
EXECUTION
      ↓
VERIFICATION
      ↓
FOLLOW-UP
```

The core product is therefore:

> **A business operating layer for ecommerce teams, with AI sitting above commerce data, organizational knowledge, communication, meetings, and operational workflows.**

---

# 2. RESEARCH SIGNALS

## 2.1 The dominant pain

Across responses, reporting, manual analysis, information gathering, meeting preparation, and multi-system workflows repeatedly appear as major time sinks.

Examples:

- compiling reports and identifying issues;
- downloading vendor / account data;
- preparing weekly presentations;
- manually investigating sales drops;
- checking inventory and shipment issues;
- creating campaigns;
- creating listings;
- image upload and naming;
- promotion uploads;
- following up through email;
- tracking Slack conversations;
- finding historical decisions;
- locating SOPs and documentation.

The VP of Sales describes a workflow involving multiple portals, Shopify, inventory transfers, Logicbroker, Walmart orders, warehouse coordination, campaign creation, listing creation, forecasting, and coordination with reps. fileciteturn11file3L153-L179

An Account Manager describes opening Walmart Connect, Seller Center, GPT, Claude, Gmail, Anarix, Power BI, Excel, and Slack, with reporting identified as the disliked task. fileciteturn11file6L289-L303

An Operations Manager reports Gmail, Google Sheets, Excel, ChatGPT, and Seller Central as daily tools, with shipment issue identification being particularly manual. fileciteturn11file7L331-L353

---

# 3. THE FIVE CORE JOBS

The survey can be consolidated into five major customer jobs.

```text
1. KNOW WHAT IS HAPPENING
        ↓
2. UNDERSTAND WHY
        ↓
3. PREPARE / COMMUNICATE
        ↓
4. CHANGE SOMETHING
        ↓
5. MAKE SURE IT WORKED
```

These become the five primary product systems.

---

# 4. PRODUCT PILLARS

## Pillar 1 — BUSINESS INTELLIGENCE

Answer:

> What is happening across all accounts and channels?

Capabilities:

- account health;
- sales;
- GMV;
- ROAS;
- TACOS;
- ACOS;
- ad spend;
- ad sales;
- inventory;
- Buy Box;
- pricing;
- listing status;
- eligibility;
- campaign status;
- promotion status;
- reviews / ratings;
- shipments;
- catalog health.

---

## Pillar 2 — INVESTIGATION

Answer:

> Why is this happening?

Capabilities:

- performance investigation;
- root-cause analysis;
- impact analysis;
- SKU-level drilldown;
- campaign-level analysis;
- inventory correlation;
- pricing correlation;
- listing / eligibility correlation;
- historical comparison;
- seasonality;
- competitor signals;
- campaign diagnostics.

A recurring customer workflow is:

```text
SALES DROP
   ↓
WHICH ITEM?
   ↓
PRICE?
   ↓
OUT OF STOCK?
   ↓
ELIGIBILITY?
   ↓
CAMPAIGN?
   ↓
CAMPAIGN PAUSED?
   ↓
CPC / SPEND?
   ↓
ROOT CAUSE
```

This exact reasoning pattern appears in multiple responses. fileciteturn11file16L680-L703

---

## Pillar 3 — WORK & COLLABORATION

Answer:

> What needs to happen, and who needs to do it?

Capabilities:

- tasks;
- assignments;
- approvals;
- Slack / email actions;
- meetings;
- action items;
- client follow-ups;
- dependencies;
- project plans;
- escalation;
- internal tickets;
- work status.

---

## Pillar 4 — EXECUTION

Answer:

> Can Anarix actually make the change?

Capabilities:

- create campaigns;
- configure campaigns;
- keyword actions;
- update catalog;
- update prices;
- update content;
- create listings;
- upload images;
- create templates;
- create promotions;
- publish channel changes;
- inventory operations;
- ticket creation;
- notification;
- report generation.

Customers explicitly want campaign creation in one click, including generating multiple campaign structures from a catalog / ASIN set. fileciteturn12file1L418-L431

---

## Pillar 5 — MEMORY & KNOWLEDGE

Answer:

> What did we decide, why, and what happened afterward?

Capabilities:

- meeting memory;
- decisions;
- action items;
- historical reports;
- client context;
- SOPs;
- documentation;
- account history;
- previous recommendations;
- previous outcomes;
- searchable organizational knowledge.

---

# 5. PRODUCT ARCHITECTURE

## High-level architecture

```text
┌───────────────────────────────────────────────────────────────┐
│                         USER EXPERIENCE                       │
│                                                               │
│  Home / Morning Brief / Accounts / Insights / Work / Search  │
│  Meetings / Reports / Catalog / Campaigns / Promotions       │
└───────────────────────────────┬───────────────────────────────┘
                                │
                                ▼
┌───────────────────────────────────────────────────────────────┐
│                    INTELLIGENCE EXPERIENCE                    │
│                                                               │
│  Conversational AI                                           │
│  Proactive Insights                                           │
│  Recommendations                                              │
│  Investigation                                                │
│  Meeting Preparation                                          │
│  Planning                                                     │
│  Workflow Orchestration                                       │
└───────────────────────────────┬───────────────────────────────┘
                                │
                                ▼
┌───────────────────────────────────────────────────────────────┐
│                    INTELLIGENCE ENGINE                        │
│                                                               │
│  Context Engine                                               │
│  Event Detection                                              │
│  Correlation                                                  │
│  Root Cause Analysis                                          │
│  Impact Analysis                                               │
│  Risk Detection                                                │
│  Opportunity Detection                                        │
│  Recommendation Engine                                         │
│  Planning Engine                                               │
│  Action / Tool Selection                                       │
│  Verification Engine                                           │
│  Memory / Learning                                             │
└───────────────────────────────┬───────────────────────────────┘
                                │
                                ▼
┌───────────────────────────────────────────────────────────────┐
│                       WORK SYSTEM                              │
│                                                               │
│  Tasks | Projects | Meetings | Messages | Tickets            │
│  Approvals | Dependencies | Notifications | Watches          │
└───────────────────────────────┬───────────────────────────────┘
                                │
                                ▼
┌───────────────────────────────────────────────────────────────┐
│                    UNIFIED CONTEXT LAYER                       │
│                                                               │
│  Account | Brand | Marketplace | Product | SKU | Campaign     │
│  Promotion | Inventory | Order | Listing | Person | Client   │
│  Meeting | Decision | Document | Task | Message | Event       │
└───────────────────────────────┬───────────────────────────────┘
                                │
                                ▼
┌───────────────────────────────────────────────────────────────┐
│                       CONNECTORS                              │
│                                                               │
│ Amazon | Walmart | Shopify | Ads | Gmail | Outlook | Slack   │
│ Calendar | Meetings | Google Drive | Dropbox | Power BI      │
│ Internal systems | Knowledge sources                          │
└───────────────────────────────────────────────────────────────┘
```

---

# 6. INFORMATION ARCHITECTURE

The navigation should not mirror the underlying integrations.

Users should navigate according to **work**, not systems.

## Primary navigation

```text
HOME
ACCOUNTS
INSIGHTS
WORK
MEETINGS
REPORTS
CATALOG
CAMPAIGNS
PROMOTIONS
KNOWLEDGE
SEARCH
```

### Secondary / administration

```text
INTEGRATIONS
AUTOMATIONS
TEAM
SETTINGS
AUDIT LOG
```

---

# 7. HOME — "WHAT NEEDS MY ATTENTION?"

Home should not be a generic dashboard.

It should be an intelligence surface.

```text
TODAY
│
├── 3 things need attention
│
├── 2 risks
│
├── 1 opportunity
│
├── 4 work items waiting on others
│
├── Upcoming meetings
│
└── Business snapshot
```

Example:

> **Your biggest issue today is Acme's Hero SKU.**
>
> Sales are down 18% WoW. Inventory is healthy, but the listing lost Buy Box yesterday and the campaign spend also dropped 32%.
>
> I recommend investigating the Buy Box first.

---

# 8. ACCOUNTS

## Accounts overview

```text
Accounts
│
├── All Accounts
├── At Risk
├── Growing
├── Needs Attention
├── Recently Changed
└── My Accounts
```

Each account has:

```text
ACCOUNT
│
├── Overview
├── Performance
├── Products
├── Inventory
├── Advertising
├── Promotions
├── Catalog
├── Listings
├── Issues
├── Meetings
├── Work
├── Knowledge
└── History
```

---

# 9. ACCOUNT OVERVIEW

The account page should answer:

> "How is this account doing, and what should I care about?"

Structure:

```text
ACCOUNT HEADER

Health
Revenue
GMV
ROAS
TACOS
Inventory
Ad Health
Catalog Health

──────────────────────

AI SUMMARY

What changed
Why
Business impact
Recommended actions

──────────────────────

RISKS

──────────────────────

OPPORTUNITIES

──────────────────────

ACTIVE WORK

──────────────────────

UPCOMING

Meetings
Promotions
Launches
Deadlines
```

---

# 10. INSIGHTS

Insights becomes the proactive intelligence center.

## Categories

```text
ALL
RISKS
OPPORTUNITIES
PERFORMANCE
INVENTORY
ADVERTISING
CATALOG
LISTINGS
PROMOTIONS
SHIPMENTS
CLIENT
```

Each insight should contain:

```text
WHAT HAPPENED
WHY IT MATTERS
EVIDENCE
IMPACT
RECOMMENDATION
NEXT ACTION
OWNER
STATUS
```

---

# 11. INSIGHT CARD

Example:

### Sales decline

> **Sales dropped 14% yesterday**
>
> The decline is concentrated in 3 Hero SKUs.
>
> 2 SKUs lost Buy Box.
> 1 SKU is low on inventory.
> Ad spend is unchanged.
>
> **Estimated revenue at risk:** $2,400/day
>
> **Recommended:** restore Buy Box on the two affected SKUs and rebalance inventory.
>
> **[Investigate] [Create plan] [Dismiss]**

---

# 12. INVESTIGATION EXPERIENCE

Investigation is one of the most important product surfaces.

When the user clicks:

> **Investigate sales drop**

the system should automatically construct the investigation.

```text
SALES DROP
      ↓
ACCOUNT
      ↓
MARKETPLACE
      ↓
PRODUCT
      ↓
SKU
      ↓
TRAFFIC
      ↓
CONVERSION
      ↓
PRICE
      ↓
INVENTORY
      ↓
BUY BOX
      ↓
LISTING
      ↓
ELIGIBILITY
      ↓
ADVERTISING
      ↓
CAMPAIGN
      ↓
COMPETITOR / SEASONALITY
```

The AI should stop drilling when it has sufficient evidence.

The user should not manually navigate each system.

---

# 13. INVESTIGATION OUTPUT

```text
ROOT CAUSE

Primary:
Buy Box lost on 2 Hero SKUs

Secondary:
Inventory delay on SKU C

Impact:
$2,400/day estimated revenue at risk

Evidence:
• Buy Box fell from 94% → 41%
• Sales fell 18%
• Traffic remained stable
• Inventory on SKU C fell below threshold

Recommended Actions:
1. Resolve Buy Box
2. Reallocate inventory
3. Monitor recovery

Confidence:
High
```

---

# 14. WORK

The Work system becomes the operational layer.

```text
WORK
│
├── My Work
├── Team Work
├── Waiting
├── Approvals
├── Projects
├── Tasks
├── Tickets
└── Completed
```

Work should be linked to:

- account;
- product;
- insight;
- meeting;
- client;
- campaign;
- promotion;
- message;
- document.

---

# 15. WORK GRAPH

A task should not be an isolated object.

```text
INSIGHT
   ↓
RECOMMENDATION
   ↓
PLAN
   ├── TASK
   ├── MESSAGE
   ├── MEETING
   ├── APPROVAL
   └── WATCH
```

Example:

```text
Labor Day Opportunity
        ↓
Promotion Plan
        ├── Confirm discount
        ├── Create banner
        ├── Create Shopify update
        ├── Schedule launch review
        ├── Activate promotion
        └── Monitor results
```

---

# 16. MEETINGS

Meetings should become an intelligence workflow, not a calendar list.

```text
MEETINGS
│
├── Upcoming
├── Today
├── Needs Preparation
├── Completed
├── Follow-ups
└── Decisions
```

Every meeting should have:

```text
OBJECTIVE
CONTEXT
PREVIOUS DECISIONS
ACCOUNT PERFORMANCE
POSITIVE CHANGES
NEGATIVE CHANGES
RISKS
OPPORTUNITIES
QUESTIONS
RECOMMENDATIONS
OPEN ACTIONS
```

---

# 17. "PREPARE ME FOR THIS MEETING"

This should be a flagship feature.

One click:

> **Prepare meeting**

produces:

```text
CLIENT / ACCOUNT

EXECUTIVE SUMMARY

1. POSITIVE GROWTH
2. PERFORMANCE DECLINES
3. WHY THEY HAPPENED
4. INVENTORY
5. ADVERTISING
6. CATALOG / LISTINGS
7. PROMOTIONS
8. SEASONALITY
9. OPEN ACTIONS
10. RECOMMENDATIONS
11. QUESTIONS TO ASK
12. NEXT STEPS
```

Customers explicitly requested performance, positive growth, negatives, and next steps, with alerts for sudden declines. fileciteturn12file0L46-L53

Another customer specifically wants the document to start with positives. fileciteturn12file0L79-L86

---

# 18. MEETING GENERATION

The output should be editable.

```text
AI PREPARED

✓ Data
✓ Analysis
✓ Narrative
✓ Charts
✓ Recommendations
✓ Questions

USER

Edit
Approve
Export
Share
Present
```

The system should support:

- PPT;
- PDF;
- document;
- email summary;
- client-facing MOM;
- internal action plan.

---

# 19. AFTER-MEETING FLOW

Current:

```text
MEETING
 ↓
EMAIL
 ↓
TRY TO REMEMBER
 ↓
FOLLOW UP MANUALLY
```

Proposed:

```text
MEETING ENDS
      ↓
AI EXTRACTS
      ↓
DECISIONS
      ↓
COMMITMENTS
      ↓
ACTION ITEMS
      ↓
OWNERS
      ↓
DEADLINES
      ↓
CLIENT PROMISES
      ↓
CREATE WORK
      ↓
SEND FOLLOW-UP
      ↓
MONITOR
```

The survey repeatedly mentions action tracking through email, Slack, 7thGear, or meeting summaries, with people worrying that follow-ups may be forgotten. fileciteturn11file5L243-L267

---

# 20. REPORTS

Reports should shift from:

> manually creating reports

to:

> reusable intelligent report products.

```text
REPORTS
│
├── My Reports
├── Scheduled
├── Client Reports
├── Performance
├── Advertising
├── Inventory
├── Catalog
├── Promotions
└── Custom
```

Each report can be:

```text
DATA
+
ANALYSIS
+
NARRATIVE
+
RECOMMENDATIONS
```

---

# 21. REPORT GENERATION FLOW

```text
SELECT ACCOUNT
      ↓
SELECT PERIOD
      ↓
SELECT REPORT TYPE
      ↓
AI COLLECTS DATA
      ↓
AI ANALYZES
      ↓
AI IDENTIFIES ANOMALIES
      ↓
AI WRITES NARRATIVE
      ↓
USER REVIEWS
      ↓
EXPORT / SHARE
```

The customer should not need to download reports from multiple portals first.

---

# 22. CATALOG

Catalog should become an operational command center.

```text
CATALOG
│
├── Products
├── SKUs
├── Listings
├── Content
├── Images
├── Attributes
├── Pricing
├── Syndication
├── New Item Ingestion
└── Issues
```

---

# 23. LISTING CREATION

The current workflow often requires:

- templates;
- image upload;
- image naming;
- different channel formats;
- content;
- SEO;
- attributes;
- channel-specific upload.

The proposed flow:

```text
SOURCE PRODUCT
      ↓
AI BUILDS MASTER PRODUCT
      ↓
VALIDATE ATTRIBUTES
      ↓
GENERATE CONTENT
      ↓
GENERATE / ASSIGN IMAGES
      ↓
GENERATE CHANNEL TEMPLATES
      ↓
VALIDATE
      ↓
SHOW EXCEPTIONS
      ↓
APPROVE
      ↓
PUBLISH TO CHANNELS
      ↓
VERIFY
```

---

# 24. TEMPLATE ENGINE

The survey identifies different channel templates as a major manual burden.

Create:

> **Universal Product → Channel Template Engine**

```text
MASTER PRODUCT
      ↓
CHANNEL RULES
      ↓
AMAZON TEMPLATE
WALMART TEMPLATE
SHOPIFY STRUCTURE
OTHER CHANNEL
      ↓
VALIDATION
      ↓
EXPORT / PUBLISH
```

The user should manage the product once.

The system should adapt it to each channel.

---

# 25. IMAGE OPERATIONS

Customer pain:

- image upload;
- image naming;
- large number of listing creations.

Solution:

```text
IMAGE LIBRARY
│
├── Upload
├── AI naming
├── Product matching
├── Channel validation
├── Compliance
├── Resize / format
├── Primary image selection
└── Publish
```

---

# 26. CAMPAIGNS

Campaigns should support both:

### Assisted

> "Create 10 campaigns for these ASINs."

### Intelligent

> "These 10 products have strong organic demand but weak ad coverage. I recommend these campaign structures."

Campaign architecture:

```text
CAMPAIGNS
│
├── Overview
├── Campaign Builder
├── Templates
├── Goals
├── Keywords
├── Search Terms
├── Budget
├── Performance
├── Optimization
└── Experiments
```

---

# 27. ONE-CLICK CAMPAIGN CREATION

Target flow:

```text
SELECT CATALOG / ASINS
      ↓
SELECT GOAL
      ↓
AI RECOMMENDS STRUCTURE
      ↓
CAMPAIGN PREVIEW
      ↓
BUDGET
      ↓
KEYWORDS
      ↓
TARGETING
      ↓
VALIDATION
      ↓
APPROVE
      ↓
CREATE
      ↓
VERIFY
```

The customer specifically describes wanting a catalog/ASIN input that can produce multiple campaign structures from keyword-type reports. fileciteturn12file1L418-L431

---

# 28. CAMPAIGN INTELLIGENCE

The system should understand campaign intent.

Examples:

```text
DEFENSE
RETARGETING
DISCOVERY
HARVEST
PRODUCT LAUNCH
SEASONAL
CLEARANCE
BRAND
CATEGORY
```

The survey also identifies difficulty remembering campaign approaches such as SB, SD, retargeting, defense mechanisms, and goal-based bidding. fileciteturn12file1L331-L345

Therefore campaigns should include:

> **Why this campaign exists**

not just configuration.

---

# 29. PROMOTIONS

Promotions become a strategic workflow.

```text
PROMOTIONS
│
├── Active
├── Upcoming
├── Opportunities
├── Drafts
├── History
└── Performance
```

AI should detect:

- upcoming seasonality;
- historical promotion performance;
- inventory readiness;
- margin readiness;
- product eligibility;
- channel availability;
- creative requirements.

---

# 30. PRIME INTELLIGENCE FLOW — LABOR DAY

```text
LABOR DAY APPROACHING
        ↓
CHECK HISTORICAL PERFORMANCE
        ↓
CHECK CURRENT INVENTORY
        ↓
CHECK MARGIN
        ↓
CHECK PRODUCT PERFORMANCE
        ↓
CHECK CURRENT PROMOTIONS
        ↓
CHECK SHOPIFY
        ↓
CHECK TEAM / WORKLOAD
        ↓
OPPORTUNITY DETECTED
        ↓
"WE SHOULD PREPARE A LABOR DAY SALE"
        ↓
BUILD PLAN
        ├── Coupon
        ├── Banner
        ├── Promotion
        ├── Client approval
        ├── Sales coordination
        └── Monitoring
        ↓
USER APPROVES
        ↓
EXECUTE
        ↓
VERIFY
        ↓
MONITOR
```

This is the benchmark for the product's intelligence.

---

# 31. INVENTORY

Inventory should not be a static number.

It should answer:

> What inventory situation requires attention?

Capabilities:

- current stock;
- days of coverage;
- inbound;
- transfer;
- warehouse;
- WFS;
- Amazon logistics;
- stockout risk;
- promotion exposure;
- campaign exposure;
- demand forecast.

---

# 32. INVENTORY INTELLIGENCE

Example:

> SKU A has 8 days of inventory remaining. A promotion is scheduled in 5 days and historical promotional demand is 2.1× baseline.

Recommendation:

> Increase inventory before launch or reduce promotional exposure.

The user should see:

```text
INVENTORY
8 days

PROMOTION
Starts in 5 days

RISK
HIGH

RECOMMENDATION
Transfer 500 units
```

---

# 33. SHIPMENT INTELLIGENCE

The Operations Manager specifically identifies shipment issue investigation as very manual and describes Amazon Global Logistics cost investigation as involving excessive Seller Central information, external search, guides, and manual calculation. fileciteturn11file7L341-L361

Solution:

```text
SHIPMENTS
│
├── In Transit
├── Delayed
├── At Risk
├── Delivered
├── Cost
└── Exceptions
```

AI should detect:

- delay;
- missing scan;
- unexpected cost;
- inventory impact;
- fulfillment risk;
- client impact.

---

# 34. KNOWLEDGE

The knowledge system should unify:

```text
DOCUMENTS
SOPs
MEETING NOTES
DECISIONS
EMAILS
SLACK
REPORTS
CLIENT CONTEXT
ACCOUNT HISTORY
CAMPAIGN STRATEGY
PROMOTION HISTORY
```

The user should be able to ask:

> "Why are we running this campaign?"

and receive:

```text
Reason
Decision date
Who decided
Evidence
Previous discussion
Expected outcome
Current status
```

---

# 35. SEARCH

Search should be semantic and cross-system.

```text
SEARCH
│
├── Business
├── Accounts
├── Products
├── People
├── Work
├── Meetings
├── Documents
├── Messages
├── Decisions
└── Reports
```

Example:

> "What did we decide about the Walmart promotion last month?"

Results should combine:

- meeting;
- Slack;
- email;
- task;
- promotion;
- report.

---

# 36. KNOWLEDGE GRAPH

```text
CLIENT
  │
  ├── ACCOUNT
  │     ├── PRODUCTS
  │     ├── CAMPAIGNS
  │     ├── PROMOTIONS
  │     ├── ISSUES
  │     └── REPORTS
  │
  ├── MEETINGS
  │     ├── DECISIONS
  │     └── ACTIONS
  │
  ├── PEOPLE
  │     └── OWNERS
  │
  └── DOCUMENTS
        └── KNOWLEDGE
```

This graph is what allows the AI to connect business state to organizational context.

---

# 37. ALERTS

The survey strongly indicates that customers do not simply need more notifications.

They need **fewer, more useful alerts**.

Examples requested include:

- out of stock;
- changed variants;
- sales drop;
- campaign budget;
- campaign live percentage;
- ad eligibility;
- price changes;
- promotions not kicking in;
- SKUs not live;
- reviews / ratings;
- WFS shipment;
- sudden drops;
- priority ASIN problems.

The customer explicitly notes that too many notifications can result in clients not noticing important ones. fileciteturn11file0L29-L40

Therefore:

> **Alert intelligence > notification volume.**

---

# 38. SIGNAL ENGINE

The signal engine should combine:

```text
EVENT
+
SEVERITY
+
BUSINESS IMPACT
+
ACCOUNT IMPORTANCE
+
TREND
+
TIME
+
USER ROLE
+
CURRENT WORK
+
PREVIOUS EVENTS
```

to produce:

```text
IGNORE
WATCH
INFORM
RECOMMEND
ESCALATE
ACT
```

---

# 39. ALERT PRIORITY

Example:

```text
Hero ASIN
Sales impact: 10%
Inventory: healthy
Campaign: active
Eligibility: lost

→ HIGH PRIORITY
```

But:

```text
Low-volume ASIN
Sales impact: <0.5%
No campaign
No client relevance

→ SUPPRESS
```

The system should actively remove noise.

---

# 40. USER FLOWS — ROLE MODEL

## Role A — VP / Sales Leadership

Primary job:

> Understand business performance and decide where to intervene.

Flow:

```text
LOGIN
 ↓
EXECUTIVE BRIEF
 ↓
ACCOUNT / MARKETPLACE HEALTH
 ↓
TOP RISKS
 ↓
TOP OPPORTUNITIES
 ↓
REVENUE IMPACT
 ↓
ASK AI
 ↓
DECISION
 ↓
DELEGATE / APPROVE
 ↓
VERIFY
```

Key features:

- executive brief;
- portfolio health;
- opportunity detection;
- risk detection;
- forecasts;
- promotions;
- inventory;
- strategic recommendations.

---

# 41. USER FLOW — ACCOUNT MANAGER

Primary job:

> Keep accounts healthy, explain performance, communicate with clients, and coordinate action.

```text
MORNING
 ↓
ACCOUNT BRIEF
 ↓
PRIORITIZED ISSUES
 ↓
INVESTIGATE
 ↓
AI EXPLAINS
 ↓
PREPARE CLIENT UPDATE
 ↓
PREPARE MEETING
 ↓
MEETING
 ↓
AI EXTRACTS ACTIONS
 ↓
CREATE / ASSIGN WORK
 ↓
FOLLOW UP
 ↓
MONITOR
```

The survey repeatedly describes AM workflows centered around account snapshots, emails, client requests, meeting preparation, reporting, escalations, and monitoring account performance. fileciteturn11file6L289-L303

---

# 42. USER FLOW — OPERATIONS MANAGER

Primary job:

> Keep catalog, inventory, shipments, and operational systems healthy.

```text
MORNING
 ↓
OPS BRIEF
 ↓
SHIPMENT EXCEPTIONS
 ↓
INVENTORY ISSUES
 ↓
CATALOG ISSUES
 ↓
LISTING ISSUES
 ↓
AI DIAGNOSIS
 ↓
CREATE / EXECUTE FIX
 ↓
VERIFY
 ↓
CLOSE
```

---

# 43. USER FLOW — MARKETPLACE MANAGER

Primary job:

> Manage marketplace growth, launches, catalog, and sales.

```text
PORTFOLIO SNAPSHOT
 ↓
SALES
 ↓
NEW SKUs
 ↓
LAUNCH STATUS
 ↓
CATALOG
 ↓
PROMOTIONS
 ↓
MARKETPLACE OPPORTUNITIES
 ↓
SHORTLIST PRODUCTS
 ↓
RECOMMEND TO SALES
 ↓
EXECUTE
```

The survey identifies marketplace management, client / merchant calls, SKU shortlisting, sales, new SKU monitoring, launches, and catalog management as core work. fileciteturn11file12L547-L576

---

# 44. USER FLOW — ACCOUNT SPECIALIST

Primary job:

> Execute ads, reports, catalog support, strategy, and client-facing analysis.

```text
PACING
 ↓
AD PERFORMANCE
 ↓
CAMPAIGN
 ↓
PRODUCT
 ↓
KEYWORD
 ↓
ISSUE
 ↓
ANALYSIS
 ↓
RECOMMENDATION
 ↓
CLIENT INSIGHT
 ↓
ACTION
```

The survey specifically describes campaign creation, product issues, strategy, reports, and account insights as core responsibilities. fileciteturn12file1L347-L366

---

# 45. CROSS-ROLE FLOW — PERFORMANCE DROP

```text
SIGNAL
Sales down 15%
      ↓
AI DETECTS
      ↓
IMPACT ANALYSIS
      ↓
ROOT CAUSE
      ↓
Inventory?
Price?
Buy Box?
Listing?
Eligibility?
Campaign?
Traffic?
Conversion?
      ↓
EXPLANATION
      ↓
RECOMMENDATION
      ↓
ASSIGN
      ↓
EXECUTE
      ↓
VERIFY
      ↓
CLIENT UPDATE
      ↓
MONITOR
```

This replaces the recurring manual workflow described across multiple customer responses. fileciteturn11file2L117-L133

---

# 46. CROSS-ROLE FLOW — NEW SKU LAUNCH

```text
NEW SKU
 ↓
PRODUCT MASTER
 ↓
ATTRIBUTE VALIDATION
 ↓
CONTENT
 ↓
IMAGE
 ↓
CHANNEL TEMPLATES
 ↓
CATALOG VALIDATION
 ↓
PERMISSIONS
 ↓
PUBLISH
 ↓
LIVE CHECK
 ↓
AD ELIGIBILITY
 ↓
CAMPAIGN
 ↓
INVENTORY
 ↓
LAUNCH MONITOR
```

The key is that the user should not manually check whether the SKU successfully became live.

---

# 47. CROSS-ROLE FLOW — PROMOTION

```text
UPCOMING EVENT
 ↓
AI DETECTS OPPORTUNITY
 ↓
HISTORICAL PERFORMANCE
 ↓
PRODUCT SELECTION
 ↓
INVENTORY CHECK
 ↓
MARGIN CHECK
 ↓
OFFER RECOMMENDATION
 ↓
PROMOTION PLAN
 ↓
SALES
 ↓
DESIGN
 ↓
SHOPIFY / MARKETPLACE
 ↓
APPROVAL
 ↓
PUBLISH
 ↓
VERIFY
 ↓
MONITOR
```

---

# 48. CROSS-ROLE FLOW — CLIENT REQUEST

```text
CLIENT EMAIL / SLACK
        ↓
AI CLASSIFIES REQUEST
        ↓
IDENTIFIES ACCOUNT
        ↓
IDENTIFIES INTENT
        ↓
COLLECTS CONTEXT
        ↓
ANSWERS IF POSSIBLE
        ↓
OR CREATES WORK
        ↓
ASSIGNS OWNER
        ↓
TRACKS SLA
        ↓
DRAFTS RESPONSE
        ↓
SEND
        ↓
VERIFY
```

The user should not need to manually convert every email into a task.

---

# 49. CROSS-ROLE FLOW — CLIENT MEETING

```text
CALENDAR EVENT
      ↓
IDENTIFY ACCOUNT
      ↓
UNDERSTAND MEETING TYPE
      ↓
LOAD ACCOUNT CONTEXT
      ↓
COMPARE PERIOD
      ↓
IDENTIFY POSITIVES
      ↓
IDENTIFY NEGATIVES
      ↓
ROOT CAUSE
      ↓
OPPORTUNITIES
      ↓
OPEN ACTIONS
      ↓
QUESTIONS
      ↓
RECOMMENDATIONS
      ↓
GENERATE REPORT / PPT
      ↓
MEETING
      ↓
CAPTURE DECISIONS
      ↓
CREATE TASKS
      ↓
SEND MOM
      ↓
FOLLOW UP
```

---

# 50. INTELLIGENCE PIPELINE

This is the central technical/product pipeline.

```text
1. INGEST
   ↓
2. NORMALIZE
   ↓
3. BUILD CONTEXT
   ↓
4. DETECT EVENTS
   ↓
5. BUILD BUSINESS STATE
   ↓
6. CORRELATE SIGNALS
   ↓
7. DETECT RISK / OPPORTUNITY
   ↓
8. INVESTIGATE
   ↓
9. ESTIMATE IMPACT
   ↓
10. PRIORITIZE
   ↓
11. RECOMMEND
   ↓
12. BUILD PLAN
   ↓
13. SELECT ACTIONS
   ↓
14. REQUEST APPROVAL IF REQUIRED
   ↓
15. EXECUTE
   ↓
16. VERIFY
   ↓
17. FOLLOW UP
   ↓
18. MEASURE OUTCOME
   ↓
19. STORE MEMORY
```

---

# 51. FEATURE ARCHITECTURE

## Layer 1 — Data

```text
Commerce
Advertising
Inventory
Catalog
Orders
Promotions
Listings
Reviews
Shipments
```

## Layer 2 — Context

```text
Accounts
Products
People
Clients
Meetings
Messages
Documents
Decisions
Tasks
```

## Layer 3 — Intelligence

```text
Monitoring
Signals
Investigation
Root Cause
Impact
Forecast
Opportunity
Recommendation
```

## Layer 4 — Work

```text
Task
Project
Meeting
Message
Ticket
Approval
Automation
Watch
```

## Layer 5 — Execution

```text
Publish
Update
Create
Assign
Notify
Schedule
Export
```

---

# 52. DOMAIN MODEL

The minimum product object model should include:

```text
ORGANIZATION
CLIENT
ACCOUNT
MARKETPLACE
CHANNEL
BRAND
PRODUCT
SKU
LISTING
CATALOG
INVENTORY
WAREHOUSE
SHIPMENT
ORDER

CAMPAIGN
AD GROUP
KEYWORD
SEARCH TERM
PROMOTION
COUPON

REPORT
METRIC
EVENT
SIGNAL
INSIGHT
RECOMMENDATION
PLAN

TASK
PROJECT
TICKET
MEETING
MESSAGE
DECISION
ACTION ITEM
APPROVAL
WATCH

DOCUMENT
SOP
KNOWLEDGE
CLIENT NOTE
ACCOUNT MEMORY
```

---

# 53. RELATIONSHIP MODEL

```text
CLIENT
 └── ACCOUNT
      ├── MARKETPLACE
      ├── PRODUCT
      │    └── SKU
      │         ├── LISTING
      │         ├── INVENTORY
      │         ├── CAMPAIGN
      │         └── PROMOTION
      │
      ├── EVENTS
      │    └── INSIGHTS
      │         └── RECOMMENDATIONS
      │              └── PLANS
      │
      ├── MEETINGS
      │    ├── DECISIONS
      │    └── ACTION ITEMS
      │
      └── KNOWLEDGE
```

---

# 54. ACTION MODEL

Every AI-generated action should have:

```text
ACTION
├── Type
├── Target
├── Owner
├── Reason
├── Source
├── Dependencies
├── Required Permission
├── Approval State
├── Execution State
├── Verification State
└── Outcome
```

This is required to prevent the AI from simply saying:

> "Done."

without knowing whether the external action actually succeeded.

---

# 55. AI RECOMMENDATION MODEL

Every recommendation should have:

```text
RECOMMENDATION
│
├── What
├── Why
├── Evidence
├── Impact
├── Confidence
├── Alternatives
├── Constraints
├── Required Work
├── Owners
├── Dependencies
├── Approval
└── Expected Outcome
```

---

# 56. AUTOMATION MODEL

Automation should be policy-driven.

```text
TRIGGER
 ↓
CONDITION
 ↓
CONTEXT
 ↓
DECISION
 ↓
ACTION
 ↓
VERIFICATION
 ↓
ESCALATION
```

Example:

```text
IF
Hero SKU inventory < 7 days

AND
Promotion starts < 10 days

AND
Expected demand > current supply

THEN
Create inventory risk

RECOMMEND
Transfer inventory

IF approved
Execute transfer

THEN
Verify
```

---

# 57. NOTIFICATION MODEL

Do not expose every event.

Use:

```text
EVENT
 ↓
SEVERITY
 ↓
BUSINESS IMPACT
 ↓
RELEVANCE
 ↓
DEDUPLICATION
 ↓
NOTIFICATION
```

Notification levels:

```text
INFORM
WATCH
IMPORTANT
URGENT
CRITICAL
```

---

# 58. CLIENT-FACING LAYER

Customers repeatedly need transparent updates.

The client-facing experience should include:

```text
CLIENT VIEW
│
├── Performance
├── What changed
├── Why
├── What we're doing
├── Open issues
├── Promotions
├── Inventory
├── Recommendations
├── Tasks
└── Updates
```

Internal details should remain permission controlled.

---

# 59. INTERNAL TICKETING

One survey response explicitly describes a desire for internal ticketing inside Anarix that clients can also see, similar to a structured service workflow.

Therefore:

```text
ISSUE
 ↓
TICKET
 ↓
OWNER
 ↓
STATUS
 ↓
CLIENT VISIBILITY
 ↓
COMMENTS
 ↓
RESOLUTION
 ↓
VERIFICATION
```

Ticketing should be connected to the underlying insight and business object.

---

# 60. DATA TRUST MODEL

A major product requirement is data freshness and trust.

One respondent explicitly states they do not trust certain profitability information when it is not up to date. fileciteturn11file3L467-L474

Therefore every important data point should have:

```text
VALUE
SOURCE
LAST UPDATED
DATA STATUS
CONFIDENCE
```

Example:

> Sales: $124,230  
> Source: Amazon  
> Updated: 12 min ago  
> Status: Current

This is essential for AI-generated recommendations.

---

# 61. SOURCE TRANSPARENCY

When AI makes a recommendation:

> "Inventory is the primary cause."

The user should be able to inspect:

```text
Evidence
Amazon inventory
Updated 8 min ago

Sales
Last 7 days

Listing status
Updated 14 min ago

Campaign
Updated 11 min ago
```

The AI should make reasoning inspectable.

---

# 62. WHAT SHOULD BE AUTOMATIC

### Automatically prepare

- morning brief;
- account health;
- meeting preparation;
- recurring reports;
- performance anomaly detection;
- action-item extraction;
- follow-up drafts;
- client MOM drafts;
- campaign recommendations;
- promotion opportunities;
- inventory risk;
- shipment risk.

### Automatically execute only when authorized

- low-risk updates;
- report generation;
- internal task creation;
- notifications;
- recurring workflows.

### Require approval

- customer-facing changes;
- pricing;
- promotions;
- campaign launches;
- high-impact budget changes;
- external communication when policy requires it.

---

# 63. MVP FEATURE SET

The strongest first product should NOT attempt to build every execution surface immediately.

## Phase 1 — Intelligence Foundation

```text
1. Unified Account Context
2. Home / Morning Brief
3. Proactive Signals
4. Performance Investigation
5. AI Search
6. Meeting Preparation
7. Meeting Memory
8. Action Items
9. Report Generation
10. Work / Tasks
```

This directly addresses the highest-frequency survey pain.

---

# 64. PHASE 2 — OPERATIONAL INTELLIGENCE

```text
11. Catalog Intelligence
12. Inventory Intelligence
13. Shipment Intelligence
14. Campaign Builder
15. Keyword Optimization
16. Promotion Intelligence
17. Client Updates
18. Ticketing
19. Automated Follow-ups
20. Workflow Plans
```

---

# 65. PHASE 3 — EXECUTION

```text
21. One-click Campaign Creation
22. Catalog Publishing
23. Listing Creation
24. Promotion Creation
25. Shopify Actions
26. Inventory Actions
27. Cross-channel Templates
28. Automated Verification
29. Autonomous Watches
30. Policy-controlled Autopilot
```

---

# 66. WHY THIS ORDER

The survey shows that the highest recurring pain is not simply lack of functionality.

It is:

```text
TOO MUCH INFORMATION
+
TOO MANY SYSTEMS
+
MANUAL ANALYSIS
+
REACTIVE WORK
+
REPORTING BURDEN
+
FOLLOW-UP FAILURE
```

Therefore the first product advantage should be:

> **Understand everything before asking the user to operate anything.**

Once that context layer is trusted, execution becomes much more valuable.

---

# 67. PRODUCT HOME — FINAL CONCEPT

The product should open with:

```text
GOOD MORNING

Here's what matters today.

━━━━━━━━━━━━━━━━━━━━

3 THINGS TO KNOW

01
Acme sales are down 14%.
Buy Box loss is the likely cause.

[Investigate]

02
Labor Day is approaching.
Three products have a strong promotion opportunity.

[Prepare plan]

03
Your client meeting with Acme is tomorrow.
I've prepared the performance review.

[Review meeting]

━━━━━━━━━━━━━━━━━━━━

WAITING ON YOU

2 approvals
1 decision

━━━━━━━━━━━━━━━━━━━━

BUSINESS

Revenue
GMV
ROAS
TACOS
Inventory Health

━━━━━━━━━━━━━━━━━━━━

UPCOMING

Meetings
Promotions
Launches
Deadlines
```

This is much closer to the "intelligent coworker" behavior described in the Intelligence Model.

---

# 68. THE CORE USER EXPERIENCE LOOP

Every important product journey should follow:

```text
NOTICE
 ↓
UNDERSTAND
 ↓
DECIDE
 ↓
ACT
 ↓
VERIFY
```

AI should collapse unnecessary manual steps.

---

# 69. THE CORE PRODUCT LOOP

At the platform level:

```text
COLLECT
 ↓
UNDERSTAND
 ↓
ANTICIPATE
 ↓
RECOMMEND
 ↓
ORCHESTRATE
 ↓
EXECUTE
 ↓
VERIFY
 ↓
LEARN
```

---

# 70. THE FINAL PRODUCT ARCHITECTURE

```text
                         ANARIX
                           │
             ┌─────────────┴─────────────┐
             │                           │
        BUSINESS STATE              WORK STATE
             │                           │
      ┌──────┼──────┐              ┌─────┼─────┐
      │      │      │              │     │     │
    Sales  Ads   Inventory        Tasks Meetings Messages
      │      │      │              │     │     │
      └──────┼──────┘              └─────┼─────┘
             │                           │
             └─────────────┬─────────────┘
                           ↓
                    CONTEXT GRAPH
                           ↓
                    AI INTELLIGENCE
                           │
          ┌────────────────┼────────────────┐
          ↓                ↓                ↓
       INSIGHTS        INVESTIGATION     OPPORTUNITY
          │                │                │
          └────────────────┼────────────────┘
                           ↓
                     RECOMMENDATION
                           ↓
                         PLAN
                           ↓
                     WORK GRAPH
                           ↓
              PEOPLE + SYSTEMS + ACTIONS
                           ↓
                       EXECUTION
                           ↓
                      VERIFICATION
                           ↓
                        OUTCOME
                           ↓
                         MEMORY
```

---

# 71. FINAL DESIGN PRINCIPLES

## 1. Organize around work, not integrations.

Users should not have to think:

> "I need to open Amazon."

They should think:

> "Why did sales drop?"

---

## 2. AI should surface context before the user asks.

---

## 3. Every important insight should have an explanation.

---

## 4. Every recommendation should have a next action.

---

## 5. Every multi-step recommendation should become a plan.

---

## 6. Every plan should preserve dependencies and ownership.

---

## 7. Every executed action should be verified.

---

## 8. Every important outcome should become memory.

---

## 9. Notifications should be selective.

---

## 10. The system should reduce tool switching, not create another tool to switch to.

---

# 72. THE PRODUCT PROMISE

The survey shows that customers currently spend significant effort moving between portals, reports, spreadsheets, communication tools, meetings, and knowledge sources.

The product should ultimately make the experience:

> **"I open Anarix and it already understands my business."**

Not:

> "I open Anarix and start searching for reports."

And the mature experience should be:

> **"Anarix noticed something important, understood why it matters, prepared what needs to happen, involved the right people, and is tracking it until it is actually resolved."**

That is the product architecture required to support the Intelligence Model.
