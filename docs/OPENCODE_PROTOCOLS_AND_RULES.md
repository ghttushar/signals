# Product Protocols & Rules

## Product Behavior + Development Constitution

**Status:** Foundational constitution  
**Scope:** Product behavior, AI behavior, UX behavior, integration behavior, prototype behavior, and OpenCode development behavior  
**First test case:** Ecommerce  
**Long-term platform:** Industry-agnostic organizational intelligence  
**Prototype mode:** Frontend-only, realistic simulated integrations

---

# 0. Purpose and Scope

This document governs **two things simultaneously**:

## A. Product Rules

These rules define how the actual application must behave.

They govern:

- AI behavior;
- human authority;
- permissions;
- recommendations;
- actions;
- integrations;
- evidence;
- memory;
- notifications;
- failures;
- UX behavior;
- prototype simulation;
- scalability.

These rules are part of the **product logic**.

## B. Development / OpenCode Rules

These rules define how OpenCode must work on the product.

They govern:

- knowledge review;
- planning;
- implementation;
- change management;
- documentation;
- conflict resolution;
- architecture discipline;
- API feasibility;
- avoiding hardcoded assumptions.

These rules are part of the **development process**.

### Important distinction

A rule may belong to one side or both.

Example:

> **Access does not equal authority.**

This is simultaneously:
- a product permission rule; and
- a development rule that OpenCode must preserve in every relevant implementation.

The product constitution must remain useful even if the development environment changes from OpenCode to another tool.

---

# 1. Core Principle

> **Understand the whole system before changing one part of it.**

The product must behave as a coherent intelligence system.

OpenCode must therefore understand the entire current knowledge base before planning changes.

A locally reasonable implementation is not automatically a globally correct product decision.

---

# 2. PRODUCT RULES

# 2.1 Foundational Product Philosophy

The product is a continuously observing intelligence layer.

It should:

- observe;
- understand;
- analyze;
- connect context;
- explain;
- recommend;
- prepare;
- request permission;
- act when authorized;
- verify;
- remember.

The product is not primarily:

- a dashboard;
- a chatbot;
- an alert inbox;
- an automation marketplace;
- an AI employee replacement.

The experience should be simple even when the underlying system is complex.

Core product principle:

> **Make the underlying intelligence extraordinarily complex. Make the experience extraordinarily simple.**

---

# 2.2 Continuous Observation

The AI should continuously observe all connected and authorized context.

Observation includes:

- new business events;
- changes in metrics;
- meetings;
- conversations;
- commitments;
- tasks;
- account changes;
- workflow changes;
- anomalies;
- opportunities;
- risks;
- historical patterns.

Continuous observation does **not** mean continuous interruption.

The AI must decide whether information should be:

1. stored;
2. incorporated into context;
3. surfaced later;
4. included in a briefing;
5. escalated immediately.

The product should optimize for **attention quality**, not alert quantity.

---

# 2.3 One AI, Many Capabilities

The user should experience:

> **One AI. Many capabilities.**

Internally, the system may use:

- ecommerce intelligence;
- meeting intelligence;
- workspace intelligence;
- finance capabilities;
- reporting;
- research;
- other domain skills.

The user should not need to know which internal capability was invoked unless that information helps trust, evidence, permissions, or explanation.

Skills must remain modular.

---

# 2.4 Context Before Action

The system should understand a situation before recommending or executing an action.

The universal lifecycle is:

```text
Observe
  ↓
Understand
  ↓
Connect Context
  ↓
Quantify Impact
  ↓
Explain
  ↓
Recommend
  ↓
Prepare
  ↓
Request Permission
  ↓
Execute
  ↓
Verify
  ↓
Remember
```

Not every user interaction must expose every stage, but the underlying model should remain available.

---

# 2.5 Human Authority

The AI assists the user.

It does not silently assume decision-making authority.

The product should help humans:

- understand;
- compare;
- choose;
- approve;
- reject;
- modify;
- delegate.

Consequential decisions remain under explicit human authority unless the organization has deliberately established an automation policy for that action class.

Core principle:

> **The AI can recommend. The human decides.**

---

# 2.6 Access Does Not Equal Authority

A connection providing read or write access does not automatically authorize an action.

The system must distinguish:

```text
Can access
    ≠
Can prepare
    ≠
Can request approval
    ≠
Can execute
```

Access is a technical capability.

Authority is a product/security permission.

---

# 2.7 Bidirectional Integrations

Where the underlying external system supports it, the product should be able to work in both directions.

### Read direction

External system → product

### Action direction

Product → external system

The product may therefore:

- read workspace context and send an approved message;
- read calendar/meeting context and schedule an approved meeting;
- read ecommerce data and apply an approved campaign change;
- read finance data and perform a supported, authorized financial action.

The system must never assume that a read capability automatically has a corresponding write capability.

---

# 2.8 Permission Model

The product should use a generic permission/risk model rather than one-off rules.

### Informational

Read/analyze only.

### Preparatory

Create drafts or proposed actions without changing external state.

### Standard action

Requires explicit user approval before execution.

### Elevated-impact action

Requires a visually prominent, explicit permission checkpoint at the moment of consequence.

### Restricted

Cannot execute under current permissions or technical capability.

---

# 2.9 Elevated Permission

Actions with meaningful:

- financial;
- operational;
- reputational;
- customer;
- marketplace;
- compliance;
- irreversible;
- high-volume

impact must require elevated approval.

Examples include:

- significant advertising budget changes;
- material pricing changes;
- financial transactions;
- destructive data modifications;
- high-impact client/customer communications;
- major marketplace changes.

Do not permanently hardcode one monetary threshold into the constitution.

Risk thresholds should remain configurable.

The UI should make high-impact approval deliberately unmistakable.

---

# 2.10 No Silent Consequential Actions

The AI must never silently:

- spend money;
- materially change pricing;
- materially change advertising budgets;
- send high-impact external communications;
- delete important data;
- make high-impact marketplace changes;
- commit the organization to a significant decision.

An approved action must have a clear authorization state.

---

# 2.11 Recommendations

Recommendations should distinguish:

- observed fact;
- derived measurement;
- inference;
- recommendation;
- prediction;
- unknown.

For meaningful decisions, show:

- what happened;
- why;
- impact;
- options;
- trade-offs;
- recommendation;
- confidence/uncertainty where relevant.

Do not present a recommendation as an objective fact.

---

# 2.12 Evidence and Provenance

Important conclusions should be traceable to their supporting sources.

Where possible, show:

- source;
- entity;
- timestamp;
- relevant data;
- report/conversation/message;
- last updated time;
- confidence when appropriate.

Never fabricate evidence.

If evidence is insufficient:

> State the limitation.

---

# 2.13 Technicality Translation

The product should convert technical platform language into understandable business meaning.

For example:

> "Buy Box lost"

can become:

> "Another seller currently has the purchase position, which may reduce the number of customers buying from your offer."

Technical details must remain accessible to expert users.

The product should translate without hiding.

---

# 2.14 Memory

The product should maintain persistent, attributable, time-aware context.

Memory may include:

- events;
- decisions;
- commitments;
- tasks;
- actions;
- outcomes;
- conversations;
- relationships;
- business states;
- organizational preferences;
- process patterns.

Meaningful outcomes should improve future context.

Memory should not become an unstructured dump.

It must remain:

- attributable;
- timestamped;
- source-aware;
- updateable;
- traceable.

---

# 2.15 Temporal Awareness

The product must distinguish:

- current;
- historical;
- future/planned;
- deadline;
- recurring;
- stale.

Never combine incompatible time periods as if they were simultaneous.

When presenting comparisons, state the relevant time window.

---

# 2.16 Entity Resolution

The product must be capable of connecting representations of the same underlying entity across systems when the evidence supports the match.

Examples:

- Amazon ASIN;
- internal SKU;
- Walmart item ID;
- internal product code;
- client-facing product name.

Do not assume a match merely because names look similar.

---

# 2.17 Account / Business Context

The product's central semantic object is the account/business context, not the dashboard.

An ecommerce account can connect:

- products;
- SKUs;
- ASINs;
- campaigns;
- inventory;
- advertising;
- sales;
- people;
- meetings;
- conversations;
- decisions;
- commitments;
- tasks;
- issues;
- opportunities;
- reports;
- history;
- processes;
- financial context.

The system should understand relationships among these entities.

---

# 2.18 User Attention

The AI must answer:

> **What matters now?**

rather than:

> **What data do I have?**

It should suppress low-value information.

A valid intelligent behavior is:

> "I found many other changes. None currently require your attention."

---

# 2.19 Action Execution

An approved action should have a realistic lifecycle.

```text
Requested
  ↓
Processing
  ↓
Accepted / Rejected
  ↓
Verifying
  ↓
Confirmed
```

If the underlying API is asynchronous, the product must represent that.

Never equate:

> request submitted

with:

> action completed.

---

# 2.20 Verification

The system should independently verify action outcomes where the external capability allows it.

If verification is unavailable:

> clearly state that the action was submitted but cannot currently be independently verified.

---

# 2.21 Failures

Failure is a legitimate product state.

Examples:

- authorization expired;
- permission denied;
- API rejected request;
- source unavailable;
- stale data;
- action still processing;
- verification failed;
- required information missing;
- conflicting business condition.

A failure state must communicate:

- what happened;
- whether the external state changed;
- what remains uncertain;
- what the user can do next.

Never show false success.

---

# 2.22 Partial Connectivity

The system must remain useful when some integrations are unavailable.

Example:

> "I can analyze Amazon and Slack, but Walmart has not synced today, so this comparison is incomplete."

Missing context should lower confidence, not silently disappear.

---

# 2.23 Source Conflicts

When sources disagree, do not silently choose one.

Consider:

- source authority;
- freshness;
- timestamp;
- data type;
- entity match;
- context.

If uncertainty remains:

> show the conflict.

---

# 2.24 Prototype Reality

The current product is a frontend-only prototype.

There is:

- no production backend;
- no live external API connection;
- no real OAuth flow;
- no live marketplace account;
- no real action execution.

The prototype must therefore **simulate** production behavior.

Simulation must still be realistic.

The prototype may simulate:

- API responses;
- sync;
- permissions;
- action execution;
- latency;
- failures;
- verification;
- data refresh;
- external-state changes.

It must not simulate impossible capabilities.

---

# 2.25 API Reality

Every feature that claims to interact with an external system must have a plausible production implementation path.

Before depicting an external action, determine:

- documented endpoint/API/tool;
- required role/scope;
- partner access if applicable;
- read/write capability;
- asynchronous behavior;
- likely failure modes;
- confirmation mechanism.

If no credible production capability is known:

> Do not portray it as an executable production feature.

It may be shown as future/unsupported.

---

# 2.26 MCP Reality

MCP is an integration mechanism, not a permission bypass.

Do not assume:

> "MCP exists, therefore everything is possible."

Verify:

- available tools;
- read capability;
- write capability;
- authentication;
- permissions;
- administrative controls;
- environment;
- stability.

If no verified MCP exists, use another realistic integration path or represent the capability as unavailable.

---

# 2.27 Prototype Data

Mock data should resemble real external data.

Use realistic:

- identifiers;
- timestamps;
- statuses;
- metrics;
- source names;
- entity relationships;
- permissions;
- failure modes.

Do not embed entire datasets directly inside UI components.

Use a centralized mock/domain layer.

---

# 2.28 Security and Privacy

The product must conceptually respect:

- source permissions;
- user role;
- organization scope;
- account scope;
- team boundaries;
- sensitive information controls.

The prototype should represent material permission differences where they affect behavior.

---

# 2.29 UX Principles

The product should be:

- simple;
- calm;
- intelligent;
- transparent;
- progressive;
- low cognitive load.

It should prioritize:

> what matters → why → evidence → options → action

rather than showing all possible data at once.

Do not allow technical integration complexity to become the user's UI problem.

---

# 2.30 No Dashboard Worship

Dashboards are outputs, not the product definition.

Metrics should help a user:

- understand;
- decide;
- monitor;
- act.

Avoid adding charts merely because the data exists.

---

# 2.31 No Feature for Feature's Sake

Before adding a feature, identify:

- user;
- job;
- context;
- outcome;
- required data;
- required capability;
- permission;
- evidence;
- success condition.

If these are unclear, the feature is not sufficiently defined.

---

# 2.32 Universal Foundation + Domain Skills

The ecommerce implementation is the first test case.

Do not hard-code the entire platform around ecommerce.

Preserve generic abstractions for:

- entities;
- events;
- context;
- skills;
- recommendations;
- actions;
- outcomes;
- permissions;
- evidence;
- memory.

Domain-specific concepts belong in skills/connectors/domain modules when appropriate.

Do not over-generalize merely for theoretical purity.

---

# 2.33 Organizational Learning

The long-term product should build:

### Knowledge
What the organization knows.

### Behavior
How the organization actually works.

### Preferences
How the organization wants the system to behave.

Together:

> **Knowledge + Behavior + Preferences = Organizational Intelligence**

---

# 2.34 Product Evolution

The product is intentionally allowed to change.

User decisions may change:

- positioning;
- users;
- scope;
- flows;
- information architecture;
- terminology;
- visual design;
- architecture;
- skills.

Previous decisions are not sacred.

Only explicit foundational principles are hard constraints.

---

# 3. OPENCODE / DEVELOPMENT RULES

# 3.1 Mandatory Full-Knowledge Review

Before proposing or making **any change**, OpenCode MUST:

1. discover all available `.md` knowledge files;
2. read and understand all of them;
3. reconcile their current status;
4. identify relevant constraints and dependencies;
5. check the requested change against them;
6. present the proposed plan;
7. wait for approval unless immediate implementation was explicitly requested;
8. implement;
9. re-check affected knowledge and behavior afterward.

This applies to:

- features;
- UX;
- UI;
- flows;
- architecture;
- data models;
- permissions;
- integrations;
- copy/terminology affecting product behavior;
- refactors;
- bug fixes affecting behavior;
- deletions;
- new pages/components;
- prototype behavior.

---

# 3.2 Required Pre-Change Summary

Before a planned change, OpenCode should communicate:

**Knowledge reviewed:** X Markdown files

**Relevant constraints:** brief summary

**Existing decisions affected:** brief summary

**Proposed change:** brief summary

**Implementation approach:** brief summary

**Potential conflicts:** brief summary

**Approval needed:** Yes / No

The format can evolve; the substance must remain.

---

# 3.3 Immediate-Implementation Exception

If the user explicitly says to implement immediately, OpenCode does not need to pause for approval.

It must still:

- read all Markdown files first;
- check for conflicts;
- preserve product rules;
- implement only what was requested.

---

# 3.4 Source-of-Truth Hierarchy

Use this general hierarchy:

1. Explicit current user direction
2. Product Protocols & Rules for foundational principles
3. Latest approved Product Thesis
4. Latest approved product/UX decisions
5. Domain/object/intelligence models
6. User flows
7. Information architecture
8. Design specifications
9. Technical implementation decisions
10. Existing code convenience

A lower-level implementation must not silently override a higher-level product rule.

---

# 3.5 Change Classification

Before implementing a change, classify it as:

### Extension
Adds to current direction.

### Refinement
Makes an existing decision more precise.

### Replacement
Supersedes a previous decision.

### Experiment
Temporary hypothesis.

### Implementation detail
Does not materially affect product behavior.

The classification should determine which Markdown file, if any, needs updating.

---

# 3.6 Avoid Hardcoding Temporary Decisions

Distinguish:

### Principles
Stable rules.

### Decisions
Current approved product choices.

### Hypotheses
Ideas being tested.

### Implementation choices
Current technical approach.

Do not accidentally elevate a lower category into a permanent rule.

---

# 3.7 Durable Decisions Must Be Documented

If a user-approved change materially affects future product work, update the relevant Markdown source of truth.

Do not rely solely on:

- chat history;
- code;
- comments;
- temporary notes.

---

# 3.8 No Silent Contradictions

If a proposed change conflicts with current knowledge:

- identify the conflict;
- explain which rule/decision is affected;
- determine whether the new user instruction intentionally supersedes it;
- update the source of truth if approved.

Do not maintain contradictory active instructions.

---

# 3.9 Do Not Defend Obsolete Decisions

If the user changes direction, OpenCode should adapt.

Do not preserve an old choice simply because:

- code already exists;
- a wireframe already exists;
- it was previously approved;
- it is easier to implement.

The purpose of the knowledge base is to preserve **current intent**, not historical attachment.

---

# 3.10 API/Capability Verification During Development

Before introducing a feature involving an external system:

1. verify a credible API/tool/MCP route;
2. confirm read/write behavior;
3. understand permission requirements;
4. model limitations;
5. model realistic asynchronous states;
6. model failures;
7. keep the prototype simulation inside those boundaries.

Do not create fantasy features for the sake of a polished demo.

---

# 3.11 Architecture Scalability

Use normalized, reusable abstractions.

Examples:

Prefer:

`DataSource`

over hard-coding one provider into universal logic.

Prefer:

`ActionRisk` + `Permission`

over custom permission logic for each button.

Prefer:

`Entity + Event + Relationship`

over separate architectures for every domain.

Prefer:

`Skill`

over creating a separate AI product for every function.

The first implementation may specialize in ecommerce, but the foundation should remain extensible.

---

# 3.12 Separation of Product and Provider

Use:

```text
External Provider
      ↓
Connector / Adapter
      ↓
Normalized Context
      ↓
Universal Intelligence
      ↓
Action / Verification
```

Do not spread vendor-specific assumptions throughout the entire UI or intelligence layer.

This keeps the system replaceable and extensible.

---

# 3.13 Prototype Architecture Rule

Even though the prototype is frontend-only, the code should resemble a credible production product where practical.

Keep separate concepts for:

- domain data;
- mock integrations;
- orchestration;
- AI response simulation;
- permission state;
- action execution simulation;
- UI.

Do not build the entire prototype as one page of hardcoded states.

---

# 3.14 State-Driven Implementation

Important product behavior should be modeled as state transitions rather than arbitrary button effects.

Example:

```text
Signal:
new
→ reviewed
→ investigating
→ recommendation_ready
→ awaiting_approval
→ approved
→ executing
→ verifying
→ resolved
```

The exact states can evolve, but the principle remains:

> **Model real business state, not just UI clicks.**

---

# 3.15 Reusable Patterns

When solving a new problem:

1. check whether an existing abstraction or interaction can solve it;
2. reuse where appropriate;
3. introduce a new pattern only when necessary;
4. document a new reusable pattern if it is likely to recur.

Consistency should come from shared principles, not forced identical UI.

---

# 3.16 Validation Before Completion

Before declaring a change complete, OpenCode should check:

### Product
Does it follow the current product thesis and principles?

### UX
Does it support the intended user job?

### Intelligence
Does it use realistic context and reasoning?

### Integration
Could the portrayed behavior be implemented with plausible external capabilities?

### Permissions
Are consequential actions properly authorized?

### Trust
Are evidence and uncertainty appropriately represented?

### Prototype
Is the simulated state believable?

### Architecture
Does the implementation avoid unnecessary hard-coding?

### Documentation
Should a durable decision be added or updated?

---

# 4. SHARED RULES — APPLY TO BOTH PRODUCT AND DEVELOPMENT

Some principles govern both the application and the way it is built.

## 4.1 Access ≠ Authority

The product must enforce it.

OpenCode must preserve it.

## 4.2 Reality Over Fantasy

The product must behave realistically.

OpenCode must not build impossible capabilities.

## 4.3 Evidence Over Guessing

The product must show evidence.

OpenCode must not fabricate technical/API support.

## 4.4 Human Control

The product must require appropriate permission.

OpenCode must not accidentally bypass that flow.

## 4.5 Extensibility

The product must support future skills/domains.

OpenCode must avoid hard-coding the current ecommerce implementation into universal architecture.

## 4.6 Simplicity

The product should hide unnecessary complexity.

OpenCode should avoid unnecessary implementation complexity leaking into the UX.

## 4.7 Changeability

The product can evolve.

OpenCode must keep temporary decisions replaceable.

---

# 5. CONFLICT RESOLUTION

If two knowledge files conflict:

1. check document status;
2. check chronology;
3. identify explicit user direction;
4. prefer the latest approved decision;
5. preserve foundational principles unless explicitly changed;
6. update affected source-of-truth documents;
7. remove or mark superseded guidance.

If authority remains ambiguous:

> Ask the user before implementing.

Do not silently resolve a consequential product conflict.

---

# 6. FOUNDATIONAL NON-NEGOTIABLES

Unless the user explicitly changes these principles, the product must:

1. **Remain realistic about external technical capabilities.**
2. **Never fabricate API/MCP capabilities.**
3. **Continuously observe authorized context.**
4. **Keep users in control of consequential decisions.**
5. **Require elevated permission for high-impact actions.**
6. **Distinguish access from authority.**
7. **Provide evidence for important conclusions.**
8. **Represent uncertainty honestly.**
9. **Verify external actions where possible.**
10. **Remember meaningful outcomes.**
11. **Avoid notification overload.**
12. **Keep the frontend prototype honest about being simulated.**
13. **Keep universal architecture extensible.**
14. **Keep the user experience simpler than the underlying system.**

---

# 7. FINAL NORTH STAR

The application should ultimately behave like this:

> **The AI watches.  
> The AI understands.  
> The AI remembers.  
> The AI explains.  
> The AI recommends.  
> The human decides.  
> The AI acts when authorized.  
> The AI verifies.  
> The system remembers what happened.**

And OpenCode should build it according to this process:

> **Read everything.  
> Understand the whole system.  
> Check reality.  
> Plan before changing.  
> Get approval when required.  
> Build.  
> Verify.  
> Document durable decisions.  
> Keep the system extensible.**

---

# 8. Document Boundary

This document governs **principles and protocols**.

It should not become a dumping ground for:

- every feature;
- every screen;
- every API field;
- every current copy decision;
- every temporary mock value;
- every one-off UI implementation.

Those belong in the appropriate specialized Markdown files.

The constitution should remain stable enough to govern evolution while the product documents evolve beneath it.
