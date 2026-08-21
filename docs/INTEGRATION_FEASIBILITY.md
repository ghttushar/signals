# Integration & Prototype Feasibility
## Ecommerce-first organizational intelligence product

**Status:** Foundational implementation constraint document  
**Prototype type:** Frontend-only product prototype  
**Backend:** None  
**Live API connections:** None  
**Purpose:** Prevent the prototype from depicting capabilities that could not realistically be implemented with currently documented external APIs or agreed platform capabilities.

---

## 1. Non-negotiable prototype constraint

This is a **frontend product prototype**, not a production integration.

The prototype must therefore:

- use realistic mocked data;
- model realistic API-backed states;
- model realistic permissions and approval states;
- model realistic asynchronous behavior;
- avoid inventing imaginary endpoints or actions;
- avoid implying an integration can perform an operation unless a plausible documented API/tool path exists;
- distinguish clearly between **read**, **analyze**, **recommend**, **prepare**, and **execute**;
- simulate external-system responses rather than pretending that the browser is directly connected to Amazon, Walmart, QuickBooks, Slack, etc.

The prototype may demonstrate the experience of future production integrations, but its behavior and screens must remain consistent with what those systems can actually expose.

---

## 2. Current collaboration / assumed foundational capabilities

The product is being built in collaboration with:

### Anarix
Assume access to Anarix's relevant ecommerce intelligence and action capabilities as a product foundation.

Publicly documented capabilities include:
- Amazon and Walmart advertising;
- unified reporting;
- retail, advertising, inventory and order data;
- Jiva AI Copilot;
- AI/rule-based bidding;
- smart keyword automation;
- impact analysis;
- dayparting;
- targeting actions;
- real-time smart alerts;
- AI suggestions;
- bulk actions;
- Walmart listing setup and optimization;
- Walmart inventory tracking;
- profitability insights.

Anarix states that it is an Amazon Ads verified partner and Walmart Connect partner and uses secure APIs for authorized Amazon/Walmart data. It also documents AMC querying, audience creation and analysis. These claims should be treated as vendor capability references, not as permission for the prototype to invent arbitrary Amazon/Walmart operations.

### 7thGear
Assume access to relevant meeting/customer intelligence capabilities.

Publicly documented capabilities include:
- unified client view;
- auto-ingested interactions;
- real-time health scoring;
- proactive risk flags;
- searchable interaction history;
- execution tracking;
- pre-meeting briefs;
- post-meeting summaries;
- extracted action items;
- key signals;
- issue/theme monitoring;
- trend analysis across accounts;
- escalation routing;
- stakeholder notifications;
- customer timelines;
- playbook/domain terminology personalization.

### Viktor-like workspace intelligence
Assume the product has a Viktor-like intelligence layer that can understand connected workspace context and use connected tools. The prototype may therefore demonstrate unified workspace reasoning, but it must not invent unsupported operations for a specific external service.

### Amazon + Walmart
For the ecommerce prototype, assume broad Amazon and Walmart account data is available to the product's intelligence layer.

---

# 3. Amazon: what is realistically possible

Amazon Selling Partner API (SP-API) is a collection of REST APIs used by sellers/vendors and approved solution providers. Amazon documents individual, batch and bulk operations, reports, feeds, notifications and sandboxes. Production access requires developer registration, roles/permissions and authorization. Amazon also imposes usage plans/rate limits. 

Relevant documented API families include:

### Read / intelligence
- Catalog Items
- Listings Items
- Listings Restrictions
- Product Pricing
- Product Fees
- Orders
- Sales
- FBA Inventory
- Reports
- Finances
- Sellers
- Replenishment
- Notifications
- Data Kiosk

### Write / action
Depending on role, marketplace and API:
- listing operations;
- price operations;
- inventory updates;
- feeds/bulk updates;
- order/fulfillment operations;
- shipping/fulfillment workflows;
- messaging in supported cases;
- other domain-specific operations.

Amazon specifically documents feeds for bulk listing/price/inventory updates and reports for bulk data retrieval. Amazon Notifications can deliver events such as listing status changes and inventory quantity changes without constant polling.

Important limitations:
- not every API is available to every seller/vendor/application role;
- access depends on authorization and roles;
- some operations are sandbox-supported only or have specific sandbox behavior;
- API rate limits apply;
- some data is report-based rather than instant;
- some notifications provide event triggers but require a follow-up API call to obtain full details.

### Prototype rule

Do not represent:
> “Amazon can do anything.”

Instead represent:
> “The production integration can perform this operation if the account/application has the relevant role, authorization and endpoint access.”

For UI:
- show source;
- show last updated;
- show whether data is live/synced;
- show whether an action is executable;
- show pending/processing states where the real API would be asynchronous.

---

# 4. Amazon Ads: realistic capability boundary

Amazon Ads has separate APIs and partner requirements from SP-API.

For prototype purposes, treat advertising operations as a separate integration domain:
- campaigns;
- ad groups;
- targeting;
- bids;
- budgets;
- reporting;
- optimization;
- measurement.

Do not silently assume every Seller Central API permission provides access to Amazon Ads.

Anarix already has relevant Amazon Ads intelligence and action capabilities, so the product can present richer ecommerce advertising experiences through the collaboration assumption. The prototype should still distinguish:
- Amazon marketplace data;
- Amazon Ads data;
- Anarix-derived intelligence;
- an action that would require Amazon Ads authorization.

---

# 5. Walmart Marketplace: what is realistically possible

Walmart Marketplace APIs officially expose seller functionality across:
- item/catalog management;
- feeds;
- inventory;
- orders;
- shipping;
- returns;
- disputes;
- pricing;
- promotions;
- reporting/analytics;
- WFS;
- account/profile;
- some advertising/analytics scopes.

Walmart uses OAuth 2.0 and requires approved seller / solution-provider access and appropriate scopes.

Walmart also provides a Marketplace API Sandbox. Sandbox calls use test data and simulate API behavior rather than operating real seller accounts.

### Prototype rule

When depicting a Walmart action, model it using a real API-backed operation such as:
- update inventory;
- update price;
- create/update promotional price;
- manage item content where supported;
- acknowledge or update order/fulfillment status where supported;
- retrieve reports;
- retrieve item/catalog data.

Do not fabricate an action such as:
> “Fix anything in Seller Center.”

Instead:
> “Update price”
> “Update inventory”
> “Submit item feed”
> “Create promotional price”
> “Acknowledge order”

where the corresponding API exists.

---

# 6. Walmart Connect Advertising

Walmart Connect provides advertising APIs for campaign management, optimization and reporting, but access is restricted: the current documentation states that the APIs are available to Walmart Connect Partner Network (WCPN) partners.

### Prototype rule

We can show Walmart advertising intelligence and actions because of the Anarix collaboration assumption, but the prototype must not imply that any arbitrary third-party Walmart application can call every Walmart Connect operation.

Use realistic states:
- connected;
- authorized;
- action available;
- approval required;
- action processing;
- completed;
- failed;
- unavailable because of permissions.

---

# 7. Slack

Slack has:
- Web API;
- Events API;
- granular OAuth scopes;
- official MCP server.

The Web API supports conversation history, replies, users, files and write actions such as posting messages. The Events API lets an app receive selected workspace events. Slack's official MCP server supports searching channels/content and actions such as sending messages, retrieving information and managing users.

Important current limitation:
- private-channel and DM access is governed by authorization and membership;
- Slack MCP use requires a registered app and admin approval/appropriate distribution status;
- the connected application receives only data the authorized user/app is permitted to access.

### Prototype rule

We can realistically prototype:
- search Slack;
- retrieve messages;
- inspect threads;
- identify people;
- cite the source;
- draft a response;
- send/act only in a future authorized integration.

In the prototype, the send action should be simulated with an explicit approval state.

---

# 8. Microsoft Teams

Microsoft Graph exposes Teams functionality including:
- teams;
- groups;
- channels;
- chats;
- chat messages;
- memberships;
- tabs/apps;
- files through Microsoft 365/SharePoint;
- related Microsoft 365 resources.

The Microsoft Graph documentation also makes clear that Teams is integrated with calendars, files, OneNote, Planner, Shifts and other Microsoft 365 resources.

### Prototype rule

We can realistically demonstrate:
- finding a Teams conversation;
- retrieving channel/chat context;
- identifying participants;
- connecting conversation context to an account;
- preparing a message or task.

Actual message sending / team mutation should be represented as a future authorized Graph operation, not a magical internal capability.

Do not assume beta APIs are production-stable. Microsoft explicitly states that Graph beta APIs are subject to change and not supported for production use.

---

# 9. Google Workspace

Google Workspace exposes official APIs for:
- Gmail;
- Calendar;
- Drive;
- Docs;
- Sheets;
- Slides;
- Chat;
- Admin SDK;
- Meet;
- Drive Activity;
- Cloud Search;
- Forms;
- others.

Google requires APIs to be enabled in a Google Cloud project and uses OAuth/authorization based on the API.

Google has also introduced a standardized model for agent tools and APIs, including a Google Workspace MCP server.

### Prototype rule

The product can realistically model:
- Gmail search/read/draft/send;
- Drive search/read;
- Calendar events;
- Docs/Sheets/Slides content;
- Google Meet records;
- organization context.

But the prototype should make the authorization boundary visible when appropriate.

---

# 10. Google Meet

The Google Meet REST API currently exposes:
- conference records;
- participants;
- participant sessions;
- recordings;
- transcripts;
- transcript entries;
- smart notes;
- meeting spaces.

The API can fetch artifacts after a conference, including recordings and transcripts.

Important limitation:
- Meet transcript entries are retained for 30 days through the Meet API;
- recordings/transcripts are saved to Drive;
- artifacts need to be enabled/configured appropriately;
- access is subject to the authenticated user's permissions.

### Prototype rule

A meeting experience can realistically include:
- meeting metadata;
- attendees;
- transcript-derived summary;
- topics;
- commitments;
- actions;
- recording/transcript references;
- account timeline.

Do not imply that every historical Meet transcript is permanently available through the API.

---

# 11. QuickBooks Online

QuickBooks Online provides a REST-based Accounting API and also supports GraphQL for certain areas.

Publicly documented capabilities include:
- customers;
- invoices;
- transactions/entities;
- reports including Profit and Loss;
- queries;
- CRUD operations on supported entities;
- webhooks/asynchronous events;
- OAuth-based authorization.

### Prototype rule

We can realistically model:
- revenue/expense context;
- unpaid invoices;
- customer balances;
- P&L;
- customer/vendor information;
- financial trend explanation;
- draft financial follow-up;
- supported entity creation/update flows.

However, do not assume a first-party QuickBooks MCP server exists unless separately verified. The current research confirms APIs, OAuth and webhooks, but did not establish a first-party Intuit MCP server.

Therefore:
> **QuickBooks should be modeled as API-backed context/action capability, not as an assumed MCP integration.**

---

# 12. Tableau

Tableau currently has a particularly strong agent-integration story.

Tableau provides:
- REST APIs;
- metadata capabilities;
- Tableau Cloud/Server access;
- an official Tableau MCP server.

The official Tableau MCP server can:
- connect agents to Tableau;
- query trusted/curated data;
- explore workbook/content metadata;
- use OAuth 2.1;
- preserve per-user permissions.

Tableau hosts MCP at `mcp.tableau.com` for Tableau Cloud, and also provides self-hosted deployment options for Tableau Server.

### Prototype rule

We can realistically show:
- “ask Tableau”;
- explain a metric using Tableau data;
- identify a workbook/view/data source;
- connect a Tableau insight with ecommerce and workspace context.

Do not invent write actions merely because Tableau has an MCP server. The prototype should only represent operations exposed by the documented server/API capabilities.

---

# 13. Salesforce

Salesforce has:
- REST/data APIs;
- event-driven Pub/Sub API;
- change data capture;
- hosted MCP servers;
- custom MCP servers exposing business logic, Flow and Apex.

Salesforce's hosted MCP servers are now production-ready for eligible Enterprise+ orgs according to current Salesforce documentation.

### Prototype rule

Salesforce can be represented as a particularly strong future integration:
- account/company context;
- contacts;
- opportunities;
- activities;
- tickets/cases;
- changes/events;
- AI-accessible business logic;
- approved actions.

---

# 14. HubSpot

HubSpot has:
- CRM object APIs;
- associations;
- properties;
- search;
- pipelines;
- webhooks;
- OAuth;
- hosted remote MCP server.

HubSpot's CRM models companies, contacts, deals, activities, meetings, notes, tasks, tickets and other business objects, with associations between records.

HubSpot's current remote MCP server can provide read/write CRM access through an MCP client with OAuth/PKCE.

### Prototype rule

HubSpot should be treated as a strong future workspace/CRM connector.

---

# 15. Shopify

Shopify's Admin APIs provide product, order, customer, inventory and operational commerce data.

For the prototype:
- products;
- orders;
- customers;
- inventory;
- fulfillment;
- pricing/content where supported

can be modeled as API-backed data domains.

Do not assume every Shopify administrative operation is automatically available to every app; access depends on app scopes and Shopify authorization.

---

# 16. Integration reality matrix

| System | Read data | Write/action | Event/webhook | Official MCP verified | Prototype status |
|---|---|---|---|---|---|
| Amazon SP-API | Yes | Yes, scoped | Yes | Not assumed | Mock realistic |
| Amazon Ads | Yes | Yes, partner/scoped | Depends | Not assumed | Mock realistic |
| Walmart Marketplace | Yes | Yes, scoped | Feeds/events vary | Not assumed | Mock realistic |
| Walmart Connect | Yes | Yes, partner-only APIs | API-dependent | Not assumed | Mock realistic |
| Anarix | Assumed via collaboration | Assumed relevant actions | Platform dependent | Not required | Treat as foundation |
| 7thGear | Assumed via collaboration | Assumed workflow capability | Platform dependent | Not required | Treat as foundation |
| Slack | Yes | Yes | Yes | **Yes** | Mock realistic |
| Teams / Graph | Yes | Yes, scoped | Yes / Graph mechanisms | Not assumed | Mock realistic |
| Gmail | Yes | Yes | Yes | Google Workspace MCP ecosystem | Mock realistic |
| Drive | Yes | Yes | Drive activity | Google Workspace MCP ecosystem | Mock realistic |
| Calendar | Yes | Yes | Calendar notifications | Google Workspace MCP ecosystem | Mock realistic |
| Google Meet | Yes | Limited meeting management / artifacts | Events | Google Workspace MCP ecosystem | Mock realistic |
| QuickBooks | Yes | Yes | Webhooks | **Not verified first-party** | Mock API-realistic |
| Tableau | Yes | API/tool-dependent | API-dependent | **Yes** | Mock realistic |
| Salesforce | Yes | Yes | **Yes** | **Yes** | Mock realistic |
| HubSpot | Yes | Yes | Yes | **Yes** | Mock realistic |
| Shopify | Yes | Yes, scoped | Webhooks | MCP not required | Mock realistic |

---

# 17. What the prototype must NOT do

Never prototype the product as if:

- every system exposes every field;
- every connector has full read/write access;
- every API is real-time;
- every API supports webhooks;
- every external platform has an MCP server;
- MCP magically bypasses OAuth/permissions;
- a natural-language instruction can execute arbitrary work;
- an AI can change marketplace data without authorization;
- every historical record is permanently available;
- every report can be generated instantly;
- every write action is synchronous;
- every API is available in every seller/account role.

These are fantasy behaviors and should be excluded.

---

# 18. What the prototype SHOULD simulate

Because this is a frontend-only prototype, simulation is expected.

We should create a **realistic mock integration layer** inside the frontend.

It should behave as though the external systems exist.

For example:

```text
User asks:
"Why did Mount-It sales drop?"

Mock orchestration:
Amazon data
+
Walmart data
+
Anarix intelligence
+
7thGear conversation context
+
Workspace context
+
mock Tableau data

→ reasoning result
→ citations/source chips
→ recommendation
→ human approval
→ simulated action
→ simulated external response
→ updated state
```

The user should see the **experience of the future product**, without the browser actually calling the external services.

---

# 19. Every mocked integration should have a capability contract

Each mock connector should define:

```text
SOURCE
What the system can provide.

READ
What data can be retrieved.

WRITE
What actions can be performed.

EVENTS
What changes can trigger new information.

PERMISSIONS
What access is required.

LATENCY
Whether actions/data are immediate or asynchronous.

FAILURE MODES
What can go wrong.

SOURCES / EVIDENCE
How the product cites the original system.

LAST UPDATED
When the external data was last synchronized.
```

This gives OpenCode a realistic simulation boundary.

---

# 20. Every AI action should expose its capability boundary

Example:

### Suggested action

**Update Walmart price to $29.99**

Show:

> **Supported production capability:** Walmart Pricing API  
> **Requires:** authorized seller/solution-provider scope  
> **Expected behavior:** asynchronous/propagated update depending on API path  
> **Prototype:** simulated

Then the user approves it.

The prototype should never display:

> “Done.”

before showing a realistic progression such as:

> Submitting...

> Walmart accepted the update.

> Verifying...

> Price now reflects $29.99.

If the underlying real operation is asynchronous, the prototype must model that.

---

# 21. The AI should never invent a source

When the AI says:

> “The client discussed inventory concerns in Tuesday's meeting.”

the UI should indicate:

**7thGear / Google Meet / Tuesday**

When it says:

> “Revenue fell 11%.”

show:

**Anarix / Amazon / last 7 days**

When it says:

> “Invoice #1042 is overdue.”

show:

**QuickBooks / Invoice #1042**

The prototype needs source provenance because this product is fundamentally about trusted cross-system context.

---

# 22. Mock data architecture

The frontend should have normalized mock entities that resemble real systems.

Suggested entities:

```text
Organization
User
Team
Account
Brand
Marketplace
Product
SKU
ASIN
Campaign
AdGroup
Keyword
InventorySnapshot
SalesMetric
AdvertisingMetric
Order
Invoice
Meeting
MeetingTranscript
Conversation
Message
Decision
Commitment
Task
Signal
Issue
Opportunity
Recommendation
Action
ActionExecution
Report
DataSource
SourceReference
Integration
Permission
Event
AccountTimelineEntry
```

Do not store mock data as arbitrary strings embedded inside components.

Keep the semantic model centralized so the UI can behave like a real application.

---

# 23. Mock integration states

Every connector should support realistic states such as:

- disconnected;
- connecting;
- authorization required;
- connected;
- syncing;
- partially synced;
- sync delayed;
- permission restricted;
- degraded;
- error;
- reconnect required.

This allows the UI to demonstrate real-world enterprise integration behavior rather than a fantasy “everything is always connected” environment.

---

# 24. Realistic asynchronous behavior

Some real integrations are not instantaneous.

Examples:
- Amazon reports;
- Amazon feeds;
- marketplace propagation;
- Walmart feeds;
- advertising updates;
- meeting artifact generation;
- financial synchronization.

Therefore mock actions should sometimes move through:

```text
Requested
   ↓
Processing
   ↓
External system accepted
   ↓
Verifying
   ↓
Completed
```

and sometimes:

```text
Requested
   ↓
Processing
   ↓
External system rejected
   ↓
User needs to intervene
```

---

# 25. Current prototype implication

Because the application has **no real backend**, we are not implementing integrations.

We are implementing:

### A credible simulation of an integration-native product.

This means:

- realistic entity models;
- realistic API boundaries;
- realistic source attribution;
- realistic permissions;
- realistic statuses;
- realistic loading;
- realistic errors;
- realistic action confirmations;
- realistic data freshness;
- realistic recommendations;
- realistic human approvals.

That is the standard for the prototype.

---

# 26. What we should design first

Now that the external capability landscape has been checked, the planning order becomes:

### Product thesis
Already established.

↓

### Integration / capability reality
This document.

↓

### Ecommerce UX blueprint

↓

### Product object model

↓

### Intelligence model

↓

### Core flows

↓

### Information architecture

↓

### Wireflows

↓

### UI

The purpose of this order is to prevent the UI from promising impossible behavior.

---

# 27. Important distinction: production architecture vs prototype architecture

### Production

Would require:

```text
Frontend
↓
Backend / orchestration
↓
Connector services
↓
OAuth / permissions
↓
APIs / MCP
↓
Event ingestion
↓
Data normalization
↓
AI reasoning
↓
Action execution
↓
Audit / monitoring
```

### Prototype

Can be:

```text
Frontend
↓
Mock orchestration layer
↓
Normalized mock data
↓
Deterministic simulated AI responses
↓
Simulated API actions
↓
Simulated status transitions
```

The prototype can *look* like the production system while remaining entirely frontend-based.

---

# 28. Prototype success criterion

The prototype succeeds when a user cannot tell from the **experience** that the connections are mocked, while a technical reviewer can clearly see that:

- every feature has a plausible real-world integration path;
- unsupported actions are not presented as supported;
- permissions are represented;
- asynchronous behavior is represented;
- source provenance is represented;
- the AI only acts inside realistic capability boundaries.

The goal is not fake functionality.

The goal is a **credible production vision** implemented as a frontend simulation.

---

## Official-source research basis

Primary documentation reviewed for this feasibility pass includes:

- Amazon Selling Partner API developer documentation;
- Walmart Marketplace developer documentation;
- Walmart Connect API documentation;
- Slack Developer documentation and Slack MCP documentation;
- Microsoft Graph / Teams documentation;
- Google Workspace and Google Meet API documentation;
- Intuit QuickBooks Online API documentation;
- Tableau MCP documentation;
- Salesforce developer documentation for APIs, Pub/Sub and Hosted MCP;
- HubSpot CRM API and MCP documentation;
- Anarix public product/API-related capability documentation;
- 7thGear public product and feature documentation.

This document should be treated as a **feasibility guardrail**, not as a substitute for production integration engineering. External APIs, scopes, partner programs, quotas and product capabilities can change, so production implementation must re-validate the current official documentation before development.
