# INFORMATION / OBJECT MODEL

**Product:** AI-Powered Ecommerce Workspace\
**Document Type:** Foundational Product / Domain Model\
**Status:** Proposed source of truth\
**Version:** 1.0\
**Primary Test Case:** Ecommerce account management

------------------------------------------------------------------------

## 1. Purpose

This document defines the information and object model for the product.

The model translates the product thesis and User Experience Model into a
coherent set of persistent objects, relationships, states, and
lifecycles.

The product is intended to turn fragmented commerce, workspace, meeting,
communication, analytics, finance, and operational information into one
continuously understood business context.

The model therefore treats the product as a **connected business context
and operational system**, not as a collection of dashboards or an AI
chat interface.

The core principle is:

> **The AI observes and understands the business. The human directs,
> judges, approves, and takes control when needed.**

The model must support the full loop:

``` text
OBSERVE
  ↓
UNDERSTAND
  ↓
CONNECT
  ↓
PRIORITIZE
  ↓
SURFACE
  ↓
DECIDE
  ↓
AUTHORIZE
  ↓
EXECUTE
  ↓
VERIFY
  ↓
REMEMBER
  ↓
CONTINUE OBSERVING
```

------------------------------------------------------------------------

# 2. Model Principles

## 2.1 Context is the primary primitive

Objects should not exist as isolated records.

Every important object should connect to its surrounding business
context.

Example:

``` text
CAMPAIGN
 ├── performance
 ├── products
 ├── inventory
 ├── related signals
 ├── meetings
 ├── conversations
 ├── decisions
 ├── actions
 └── history
```

A meeting similarly connects to:

``` text
MEETING
 ├── account
 ├── participants
 ├── recent performance
 ├── open issues
 ├── previous meetings
 ├── commitments
 ├── decisions
 └── follow-up actions
```

An object is therefore an entry point into its surrounding context.

------------------------------------------------------------------------

## 2.2 The model is a graph, not a tree

The business cannot be represented as one rigid hierarchy.

A product can relate simultaneously to:

-   an account;
-   multiple marketplaces;
-   multiple listings;
-   inventory;
-   campaigns;
-   people;
-   meetings;
-   conversations;
-   signals;
-   decisions;
-   actions;
-   outcomes.

Therefore the canonical model is a **connected graph of entities,
observations, intelligence, work, and execution**.

------------------------------------------------------------------------

## 2.3 AI outputs structured objects

The fundamental product object is not an AI message.

AI may create, update, connect, enrich, and execute structured objects
such as:

-   Signal
-   Investigation
-   Insight
-   Recommendation
-   Request
-   Decision
-   Approval
-   Action
-   Watch
-   Task
-   Commitment
-   Meeting
-   Briefing
-   Follow-up
-   Outcome

These objects persist as operational state.

------------------------------------------------------------------------

## 2.4 Observation is not the same as surfacing

The AI continuously observes authorized information.

Most observations should remain quiet.

A useful conceptual progression is:

``` text
OBSERVED
   ↓
RELEVANT
   ↓
IMPORTANT
   ↓
URGENT
```

Only appropriate states should create visible work.

The system should be able to observe many changes without turning every
change into a notification.

------------------------------------------------------------------------

## 2.5 Human control remains explicit

The AI may reason and prepare work, but consequential decisions remain
governed by human authority and organizational policy.

The model therefore distinguishes:

``` text
RECOMMENDATION
      ↓
DECISION
      ↓
APPROVAL
      ↓
ACTION
```

Recommendation is not authorization.

Execution is not verification.

Verification is not merely API success.

------------------------------------------------------------------------

## 2.6 Evidence must remain traceable

Important conclusions must connect back to:

-   source records;
-   metrics;
-   events;
-   calculations;
-   historical context;
-   relevant conversations;
-   decisions;
-   business rules.

The system should be able to explain both:

> **What it believes**

and

> **Why it believes it.**

------------------------------------------------------------------------

# 3. High-Level Object Architecture

``` text
┌─────────────────────────────────────────────────────┐
│                  BUSINESS CONTEXT                   │
│ Organization · Account · Product · Market · People  │
└──────────────────────────┬──────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────┐
│                    SOURCES                          │
│ Connections · Source Records · Documents · Messages │
│ Meetings · Workspace Systems · Commerce Systems     │
└──────────────────────────┬──────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────┐
│                   OBSERVATION                        │
│ Metrics · Events · Changes · States · History       │
└──────────────────────────┬──────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────┐
│                   INTELLIGENCE                      │
│ Signals · Investigations · Insights · Recommendations│
└──────────────────────────┬──────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────┐
│                 HUMAN ORCHESTRATION                 │
│ Requests · Decisions · Approvals · Watches · Work   │
└──────────────────────────┬──────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────┐
│                    EXECUTION                        │
│ Actions · Runs · Waiting · Verification · Outcomes  │
└──────────────────────────┬──────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────┐
│                    MEMORY                           │
│ Decisions · Commitments · Outcomes · Context · History│
└─────────────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 4. Object Taxonomy

## 4.1 Business Objects

Stable or slowly changing entities that define the business.

  -----------------------------------------------------------------------
  Object                              Definition
  ----------------------------------- -----------------------------------
  Organization                        The customer/company using the
                                      product

  Account                             A business/client context managed
                                      by the organization

  Brand                               A commercial brand associated with
                                      an account

  Product                             The canonical business product

  Marketplace Resource                A platform-specific representation
                                      of a product

  Listing                             A product's sellable marketplace
                                      representation

  Campaign                            An advertising or promotional
                                      campaign

  Market                              Geographic or commercial market
                                      context

  Person                              A human participant in business
                                      activity

  Team                                A group responsible for business or
                                      operational work

  Connection                          An authorized connection to an
                                      external system
  -----------------------------------------------------------------------

------------------------------------------------------------------------

# 5. Organization

The top-level organizational boundary.

## Purpose

Defines ownership, access, policies, connected systems, and the scope
within which business context exists.

## Contains

``` text
Organization
 ├── Users
 ├── Teams
 ├── Accounts
 ├── Connections
 ├── Policies
 └── Access Rules
```

## Key attributes

-   organization_id
-   name
-   status
-   timezone
-   default currency
-   created_at
-   updated_at

------------------------------------------------------------------------

# 6. Account

## Definition

The **Account is the central business context**.

It represents the continuously evolving business/client context that the
user is responsible for understanding and managing.

An Account may contain:

-   business performance;
-   products;
-   SKUs;
-   ASINs;
-   campaigns;
-   inventory;
-   advertising;
-   listings;
-   people;
-   relationships;
-   meetings;
-   conversations;
-   decisions;
-   commitments;
-   tasks;
-   issues;
-   opportunities;
-   reports;
-   history;
-   processes;
-   financial context;
-   operational context.

## Account relationship model

``` text
ACCOUNT
 ├── Brands
 ├── Products
 ├── Markets
 ├── Campaigns
 ├── Listings
 ├── Inventory
 ├── People
 ├── Teams
 ├── Connections
 ├── Signals
 ├── Investigations
 ├── Recommendations
 ├── Requests
 ├── Decisions
 ├── Approvals
 ├── Tasks
 ├── Commitments
 ├── Meetings
 ├── Conversations
 ├── Documents
 ├── Actions
 └── Outcomes
```

## Key attributes

-   account_id
-   organization_id
-   name
-   status
-   owner
-   account type
-   markets
-   business profile
-   access scope
-   health state
-   created_at
-   updated_at

------------------------------------------------------------------------

# 7. Brand

A commercial identity associated with an Account.

A Brand may contain:

-   products;
-   marketplace identities;
-   campaigns;
-   positioning/context;
-   business priorities;
-   strategic status.

Brand should remain distinct from Account because one Account may
potentially contain multiple brands.

------------------------------------------------------------------------

# 8. Product

## Definition

The canonical business representation of something the organization
sells or manages.

A Product is not synonymous with ASIN or SKU.

Those are platform-specific identifiers/resources associated with the
Product.

## Relationship

``` text
PRODUCT
 ├── Account
 ├── Brand
 ├── Market
 ├── Marketplace Resources
 ├── Listings
 ├── Inventory
 ├── Pricing
 ├── Campaigns
 ├── Profitability
 ├── Signals
 ├── Meetings
 ├── Conversations
 ├── Decisions
 ├── Actions
 └── History
```

## Key attributes

-   product_id
-   account_id
-   brand_id
-   canonical name
-   product category
-   strategic/hero status
-   identifiers
-   lifecycle state
-   created_at
-   updated_at

------------------------------------------------------------------------

# 9. Marketplace Resource

Represents the platform-specific identity of a Product.

Examples:

-   ASIN
-   SKU
-   Walmart item ID
-   Shopify product ID
-   other platform identifiers

``` text
PRODUCT
   │
   ├── Amazon Resource
   │     ├── ASIN
   │     └── SKU
   │
   ├── Walmart Resource
   │     └── Item ID
   │
   └── Shopify Resource
         └── Product ID
```

This abstraction prevents the canonical business model from being
hard-coded around one marketplace.

------------------------------------------------------------------------

# 10. Listing

A sellable marketplace representation of a Product.

A Listing can have:

-   status;
-   title;
-   attributes;
-   images;
-   content;
-   price;
-   inventory availability;
-   Buy Box state;
-   suppression state;
-   compliance state;
-   advertising eligibility.

A listing can therefore be the target of signals and actions.

------------------------------------------------------------------------

# 11. Campaign

Represents an advertising or promotional campaign.

## Context

A Campaign may connect to:

-   account;
-   marketplace;
-   products;
-   listings;
-   ad groups;
-   targets;
-   spend;
-   revenue;
-   performance metrics;
-   signals;
-   recommendations;
-   actions;
-   decisions;
-   meetings.

The model should allow campaign-specific resources without forcing every
platform-specific concept into the universal domain model.

------------------------------------------------------------------------

# 12. Market

A market represents geographic or commercial context.

Examples:

-   Amazon US
-   Amazon CA
-   Walmart US

Market should generally behave as a **contextual dimension**, not as a
rigid parent in the business hierarchy.

------------------------------------------------------------------------

# 13. Person

Represents a human participant.

A Person may be:

-   client;
-   account manager;
-   specialist;
-   operator;
-   vendor;
-   stakeholder;
-   meeting participant.

People connect to:

-   accounts;
-   teams;
-   conversations;
-   meetings;
-   requests;
-   decisions;
-   commitments;
-   tasks.

------------------------------------------------------------------------

# 14. Team

Represents an internal or external group responsible for work.

Teams connect to:

-   accounts;
-   users;
-   tasks;
-   commitments;
-   approvals;
-   actions;
-   ownership rules.

------------------------------------------------------------------------

# 15. Connection

A Connection represents an authorized relationship between the product
and an external system.

Examples:

-   Amazon Selling Partner API
-   Amazon Ads
-   Walmart Marketplace
-   Walmart Advertising
-   Shopify
-   Slack
-   Microsoft Teams
-   Gmail
-   Calendar
-   7thGear
-   Power BI
-   finance systems
-   internal systems

## Connection contains

``` text
CONNECTION
 ├── provider
 ├── authenticated identity
 ├── scopes
 ├── accessible resources
 ├── capabilities
 ├── sync state
 ├── health
 └── last successful sync
```

A Connection is not merely a login.

It defines:

> **What the system can observe and what it can potentially do.**

------------------------------------------------------------------------

# 16. Source Record

A Source Record represents information retrieved from an external
system.

Examples:

-   Amazon API record;
-   Slack message;
-   Gmail email;
-   meeting transcript;
-   spreadsheet row;
-   report;
-   Power BI data point.

Source Records provide evidence and provenance.

``` text
SOURCE RECORD
 ├── connection
 ├── provider
 ├── external_id
 ├── source_type
 ├── retrieved_at
 ├── original payload/reference
 └── normalized entities
```

------------------------------------------------------------------------

# 17. Metric

A Metric is a measured value over an entity and time period.

Examples:

-   revenue;
-   units;
-   spend;
-   ROAS;
-   ACOS;
-   margin;
-   inventory;
-   conversion rate.

## Metric structure

``` text
METRIC
 ├── entity
 ├── metric type
 ├── value
 ├── unit
 ├── timestamp
 ├── period
 ├── market
 ├── source
 └── data quality
```

Metrics are evidence.

They are not automatically intelligence.

------------------------------------------------------------------------

# 18. Event

An Event represents something that happened.

Examples:

-   product went out of stock;
-   listing became suppressed;
-   Buy Box was lost;
-   campaign budget changed;
-   client sent a message;
-   meeting occurred;
-   price changed.

``` text
EVENT
 ├── type
 ├── timestamp
 ├── actor/source
 ├── target entity
 ├── previous state
 ├── new state
 └── evidence
```

------------------------------------------------------------------------

# 19. Change

A Change represents a meaningful difference between states.

Examples:

``` text
ACOS
24% → 31%

Inventory
18 days → 7 days

Buy Box
Won → Lost

Revenue
₹12,000/day → ₹8,000/day
```

A Change may be derived from multiple Metrics and Events.

Not every Change should become a Signal.

------------------------------------------------------------------------

# 20. Conversation / Message

A Message is an observed communication record.

It contains:

-   sender;
-   recipients;
-   timestamp;
-   channel;
-   conversation;
-   account;
-   referenced products;
-   attachments;
-   extracted business context.

A communication may create business objects.

``` text
CONVERSATION
    ↓
REQUEST
    ↓
DECISION / PENDING DECISION
    ↓
COMMITMENT
    ↓
TASK / FUTURE ACTION
    ↓
OUTCOME
```

------------------------------------------------------------------------

# 21. Meeting

A Meeting is both a source of information and a work object.

## Lifecycle

``` text
BEFORE
  ↓
Prepare context
  ↓
DURING
  ↓
Capture relevant information
  ↓
AFTER
  ↓
Extract decisions
  ↓
Extract commitments
  ↓
Create actions
  ↓
Monitor follow-up
```

## Meeting relationships

``` text
MEETING
 ├── Account
 ├── Participants
 ├── Products
 ├── Campaigns
 ├── Signals
 ├── Conversations
 ├── Decisions
 ├── Commitments
 ├── Tasks
 └── Follow-ups
```

------------------------------------------------------------------------

# 22. Document

A Document is a persistent source of business information.

Examples:

-   report;
-   policy;
-   contract;
-   planning document;
-   spreadsheet;
-   presentation;
-   product documentation;
-   internal knowledge.

Documents can provide evidence and context for intelligence and
decisions.

------------------------------------------------------------------------

# 23. Context

Context is not a single source.

It is a **resolved relationship between relevant objects**.

For example:

``` text
PRODUCT
 ↓
Inventory
 ↓
Sales decline
 ↓
Advertising impact
 ↓
Client conversation
 ↓
Meeting discussion
 ↓
Commitment
 ↓
Resolution
```

Context is what allows the system to interpret isolated information as
part of a business situation.

------------------------------------------------------------------------

# 24. Signal

## Definition

A Signal is an observed situation that the system determines is
meaningful enough to surface or potentially act upon.

A Signal is **not the same thing as an Event**.

``` text
EVENT / CHANGE
      ↓
CONTEXT
      ↓
SIGNAL
```

Example:

``` text
Listing became suppressed
          +
7-day sales > 0
          +
active campaigns
          +
revenue at risk
          ↓
Revenue-generating listing suppression
```

## Signal structure

``` text
SIGNAL
 ├── identity
 ├── type
 ├── scope
 ├── trigger
 ├── severity
 ├── priority
 ├── confidence
 ├── business impact
 ├── root cause
 ├── evidence
 ├── related entities
 ├── recommendation
 ├── work
 └── lifecycle
```

## Business impact may include

-   revenue at risk;
-   lost revenue;
-   profit impact;
-   wasted advertising spend;
-   inventory exposure;
-   affected campaigns;
-   affected products;
-   opportunity cost.

------------------------------------------------------------------------

# 25. Signal Lifecycle

``` text
OBSERVED
   ↓
EVALUATED
   ↓
RELEVANT
   ↓
SURFACED
   ↓
INSPECTED
   ↓
RESOLVED
      or
DISMISSED
      or
DEFERRED
      or
ESCALATED
```

A Signal may create:

-   Investigation;
-   Recommendation;
-   Task;
-   Approval request;
-   Action.

A Signal does not automatically create all of them.

------------------------------------------------------------------------

# 26. Investigation

An Investigation is structured work performed to understand a business
situation.

Example:

``` text
SIGNAL
Sales declined 14%
      ↓
INVESTIGATION
 ├── inventory
 ├── pricing
 ├── advertising
 ├── Buy Box
 ├── conversion
 ├── traffic
 ├── promotions
 ├── competition
 └── historical patterns
      ↓
CONCLUSION
```

Investigation should capture:

-   question;
-   scope;
-   hypotheses;
-   evidence examined;
-   findings;
-   confidence;
-   unresolved uncertainty;
-   conclusion;
-   next step.

------------------------------------------------------------------------

# 27. Insight

An Insight is a meaningful conclusion derived from connected
information.

Example:

> 82% of the campaign's performance deterioration came from three
> campaigns after conversion fell 23%.

An Insight does not necessarily require action.

This distinction prevents the product from treating every observation as
an alert.

------------------------------------------------------------------------

# 28. Recommendation

A Recommendation expresses what the system believes should happen.

## Structure

``` text
RECOMMENDATION
 ├── problem
 ├── reasoning
 ├── proposed action
 ├── alternatives
 ├── expected outcome
 ├── estimated impact
 ├── confidence
 ├── required authority
 └── supporting evidence
```

Recommendation is advisory.

It is not authorization.

------------------------------------------------------------------------

# 29. Request

A Request represents an explicit or inferred request from a person or
system.

Examples:

> "Can we increase spend next week?"

> "Prepare me for tomorrow's client meeting."

> "Watch this campaign."

A Request can lead to:

``` text
REQUEST
   ↓
DECISION REQUIRED
   ↓
RECOMMENDATION
   ↓
APPROVAL
   ↓
ACTION
```

------------------------------------------------------------------------

# 30. Decision

A Decision represents a human or authorized organizational choice.

Examples:

-   increase campaign budget;
-   replace listing image;
-   assign issue to catalog team;
-   escalate to Amazon;
-   defer action.

## Decision contains

-   decision maker;
-   decision;
-   timestamp;
-   scope;
-   rationale;
-   alternatives considered;
-   related recommendation;
-   related request;
-   resulting work.

Decision becomes part of organizational memory.

------------------------------------------------------------------------

# 31. Approval

Approval represents explicit authorization to execute a consequential
action.

``` text
DECISION
"Increase campaign budget"

      ↓

APPROVAL
"Authorize budget change
for these campaigns"

      ↓

ACTION
"Update budgets through API"
```

Approval should capture:

-   approver;
-   authority;
-   scope;
-   exact change;
-   timestamp;
-   policy basis;
-   expiration where relevant.

------------------------------------------------------------------------

# 32. Watch

A Watch represents intentional, persistent monitoring requested by a
user or policy.

Examples:

-   Watch this ASIN.
-   Watch this campaign.
-   Alert when ACOS exceeds 30%.
-   Watch inventory.
-   Monitor Walmart Buy Box.

## Watch structure

``` text
WATCH
 ├── scope
 ├── condition
 ├── cadence
 ├── severity
 ├── owner
 ├── trigger behavior
 ├── permissions
 └── status
```

Ambient monitoring is automatic.

A Watch is explicit user intent.

A Watch should create work only when appropriate.

Possible outcomes:

``` text
WATCH EVALUATION
 ├── no action
 ├── information
 ├── signal
 ├── task
 ├── recommendation
 ├── approval request
 └── authorized action
```

------------------------------------------------------------------------

# 33. Work

Work represents operational responsibility that requires progress.

Work may originate from:

-   Signal;
-   Meeting;
-   client Request;
-   workspace Message;
-   Recommendation;
-   user;
-   scheduled process.

Work should capture:

-   owner;
-   source;
-   account;
-   due date;
-   priority;
-   status;
-   dependency;
-   context;
-   next action.

Work should not become a generic container that hides the underlying
object type.

------------------------------------------------------------------------

# 34. Task

A Task is a concrete unit of work.

Examples:

-   Contact warehouse.
-   Update listing attribute.
-   Review Amazon case.
-   Send forecast.
-   Follow up with client.

## Task structure

``` text
TASK
 ├── owner
 ├── source
 ├── account
 ├── related entities
 ├── due date
 ├── priority
 ├── status
 ├── dependency
 └── next action
```

------------------------------------------------------------------------

# 35. Commitment

A Commitment represents a promise or obligation made by a person or
team.

Example:

> "We'll send the updated forecast Friday."

Structure:

``` text
COMMITMENT
 ├── owner
 ├── recipient
 ├── promise
 ├── due date
 ├── source
 ├── account
 ├── status
 └── related task
```

Commitments may originate from meetings, messages, or other
communications.

------------------------------------------------------------------------

# 36. Waiting

Waiting is a first-class operational state.

Examples:

-   waiting on Amazon;
-   waiting on client;
-   waiting on vendor;
-   waiting on internal user;
-   waiting for API processing;
-   waiting for recheck.

Waiting should not require the user to remember to return.

The system monitors the waiting state and surfaces it when it changes or
reaches a meaningful threshold.

------------------------------------------------------------------------

# 37. Action

An Action represents a concrete executable operation.

Examples:

-   update campaign budget;
-   upload image;
-   update listing attribute;
-   create support case;
-   notify team;
-   assign task;
-   send message.

## Action structure

``` text
ACTION
 ├── target
 ├── operation
 ├── proposed state
 ├── current state
 ├── authorization
 ├── actor
 ├── integration
 ├── execution state
 ├── runs
 ├── verification
 └── outcome
```

Recommendation and Action must remain separate.

``` text
RECOMMENDATION
"Replace primary image"

        ↓

ACTION
"Upload image X to listing Y"
```

------------------------------------------------------------------------

# 38. Execution Run

An Execution Run represents one attempt to execute an Action.

This allows:

``` text
ACTION
 ↓
RUN #1 → failed
 ↓
RUN #2 → succeeded
```

A Run records:

-   start time;
-   end time;
-   integration;
-   request;
-   response;
-   failure;
-   retry;
-   execution actor;
-   result.

This is important for reliable integrations and auditability.

------------------------------------------------------------------------

# 39. Verification

Verification determines whether the intended business outcome actually
occurred.

``` text
ACTION SUBMITTED
      ↓
WAITING FOR EXTERNAL SYSTEM
      ↓
RECHECK
      ↓
SUCCESS
   OR
NOT RESOLVED
      ↓
ESCALATE / ASK USER / TRY NEXT SUPPORTED PATH
```

API acceptance is not automatically completion.

A task should only become complete when:

-   execution succeeded;
-   outcome was verified where possible;
-   or the user is explicitly told that verification is unavailable.

------------------------------------------------------------------------

# 40. Outcome

An Outcome represents what actually resulted from a Decision or Action.

Examples:

``` text
Action
Increase campaign budget
      ↓
Outcome
ROAS improved 12%
```

or:

``` text
Action
Replace listing image
      ↓
Outcome
Suppression removed
Revenue risk recovered
```

Outcome is important because the system should remember consequences,
not just operations.

------------------------------------------------------------------------

# 41. Memory

Memory is persistent business context that can be reused later.

Memory may include:

-   decisions;
-   commitments;
-   outcomes;
-   historical events;
-   preferences;
-   resolved issues;
-   strategic context;
-   relationship context.

Memory is not a single undifferentiated AI memory store at the product
level.

It is the persistent representation of business history and learned
context.

------------------------------------------------------------------------

# 42. Briefing

A Briefing is a synthesized orientation object.

It is not the underlying source of truth.

It is a temporary/presentational synthesis of persistent objects.

A Briefing may contain:

``` text
BRIEFING
 ├── since last visit
 ├── critical signals
 ├── pending work
 ├── waiting work
 ├── today's commitments
 ├── meetings
 ├── opportunities
 └── worth knowing
```

The Briefing should reference the underlying objects rather than
duplicate them as independent truth.

------------------------------------------------------------------------

# 43. Meeting Preparation

Meeting Preparation is a derived work object.

It can synthesize:

-   account health;
-   recent changes;
-   open signals;
-   previous meeting;
-   commitments;
-   decisions;
-   client conversations;
-   recommended discussion points.

It should connect back to the underlying evidence.

------------------------------------------------------------------------

# 44. Report

A Report is a generated or assembled presentation of information.

A Report should not become the canonical business object.

It should reference:

-   metrics;
-   objects;
-   signals;
-   insights;
-   decisions;
-   source data.

The underlying objects remain the source of truth.

------------------------------------------------------------------------

# 45. Follow-up

A Follow-up represents a future interaction or action required after an
event, meeting, communication, or decision.

It may result in:

-   Task;
-   Message;
-   Reminder;
-   Meeting;
-   Commitment;
-   Action.

------------------------------------------------------------------------

# 46. Core Relationship Model

The central intelligence relationship is:

``` text
SOURCE
  ↓
OBSERVATION
  ↓
EVENT / CHANGE
  ↓
CONTEXT
  ↓
SIGNAL
  ↓
INVESTIGATION
  ↓
INSIGHT
  ↓
RECOMMENDATION
```

The human orchestration relationship is:

``` text
REQUEST
  ↓
DECISION
  ↓
APPROVAL
  ↓
ACTION
```

The execution relationship is:

``` text
ACTION
  ↓
RUN
  ↓
WAITING
  ↓
VERIFICATION
  ↓
OUTCOME
```

The organizational-memory relationship is:

``` text
OUTCOME
  ↓
MEMORY
  ↓
FUTURE CONTEXT
```

------------------------------------------------------------------------

# 47. Communication-to-Work Relationship

``` text
MESSAGE / CONVERSATION
        ↓
      REQUEST
        ↓
 DECISION / PENDING DECISION
        ↓
    COMMITMENT
        ↓
       TASK
        ↓
   FOLLOW-UP
        ↓
      OUTCOME
```

This makes workspace intelligence operational rather than merely
searchable.

------------------------------------------------------------------------

# 48. Meeting-to-Work Relationship

``` text
MEETING
   ↓
CONTEXT
   ↓
DECISIONS
   ↓
COMMITMENTS
   ↓
TASKS / ACTIONS
   ↓
FOLLOW-UP
   ↓
OUTCOME
```

Meetings therefore remain connected to business activity after they end.

------------------------------------------------------------------------

# 49. Signal-to-Resolution Relationship

``` text
EVENT / CHANGE
      ↓
    SIGNAL
      ↓
 INVESTIGATION
      ↓
   INSIGHT
      ↓
RECOMMENDATION
      ↓
   DECISION
      ↓
   APPROVAL
      ↓
    ACTION
      ↓
      RUN
      ↓
    WAITING
      ↓
  VERIFICATION
      ↓
    OUTCOME
      ↓
    RESOLVED
```

Not every signal needs to follow the entire chain.

For example:

``` text
SIGNAL
 ↓
DISMISSED
```

or:

``` text
SIGNAL
 ↓
INFORMATION ONLY
```

or:

``` text
SIGNAL
 ↓
TASK
```

The model should support multiple valid paths.

------------------------------------------------------------------------

# 50. Canonical Context Anchors

The graph should commonly resolve around four major anchors:

``` text
ACCOUNT
PRODUCT
PERSON
TIME
```

Additional contextual dimensions include:

-   market;
-   platform;
-   campaign;
-   team;
-   source;
-   connection.

These anchors allow the system to reconstruct context regardless of
where the user enters.

Example:

``` text
Slack Message
      ↓
Person
      ↓
Account
      ↓
Product
      ↓
Signal
      ↓
Decision
      ↓
Action
```

------------------------------------------------------------------------

# 51. Universal Object Envelope

All major persistent objects should share a common conceptual envelope.

``` text
OBJECT
 ├── id
 ├── type
 ├── status
 ├── created_at
 ├── updated_at
 ├── created_by
 ├── owner
 ├── account_context
 ├── related_entities
 ├── source
 ├── evidence
 ├── permissions
 └── history
```

Individual objects may use only a subset.

The underlying state model should remain coherent.

------------------------------------------------------------------------

# 52. State Model

Every operational object should have explicit state.

Generic state vocabulary:

``` text
DRAFT
 ↓
READY
 ↓
ACTIVE
 ↓
WAITING
 ↓
BLOCKED
 ↓
COMPLETED
```

Alternative terminal or control states:

``` text
DISMISSED
CANCELLED
EXPIRED
FAILED
ESCALATED
ARCHIVED
```

Not every object uses every state.

------------------------------------------------------------------------

# 53. Permission Model

Access should be resolved through:

``` text
ORGANIZATION
   ↓
TEAM
   ↓
USER
   ↓
ACCOUNT ACCESS
   ↓
PLATFORM ACCESS
   ↓
DATA ACCESS
   ↓
ACTION AUTHORITY
```

Permission should be evaluated for both:

1.  what the user can see;
2.  what the user can authorize or execute.

Workspace and meeting information must obey the same access boundaries
as commerce information.

------------------------------------------------------------------------

# 54. Action Authority

Actions should have an authority class.

Conceptually:

``` text
LOW RISK
AI may prepare automatically

NORMAL
One clear approval

HIGH IMPACT
Explicit elevated approval

RESTRICTED
Cannot execute
```

The exact policy matrix belongs in the permissions/action-policy
documentation, but the Object Model must support authority as a
first-class property.

------------------------------------------------------------------------

# 55. Evidence Model

Important intelligence should be traceable through an evidence graph.

``` text
CONCLUSION
   ↓
EVIDENCE
 ├── Metric
 ├── Event
 ├── Source Record
 ├── Message
 ├── Meeting
 ├── Historical Record
 └── Calculation
```

This supports:

-   explainability;
-   inspection;
-   audit;
-   debugging;
-   user trust.

------------------------------------------------------------------------

# 56. Provenance

Every derived object should retain provenance where applicable.

Example:

``` text
SIGNAL
 ├── generated_from
 │    ├── Event
 │    ├── Metric
 │    └── Source Record
 │
 ├── enriched_by
 │    ├── business context
 │    └── historical context
 │
 └── interpreted_as
      └── root cause
```

AI conclusions should not become disconnected from the information that
produced them.

------------------------------------------------------------------------

# 57. Object Lifecycle Categories

Objects can be grouped by how they behave over time.

### Persistent business objects

-   Organization
-   Account
-   Brand
-   Product
-   Person
-   Team
-   Campaign
-   Listing

### Persistent context objects

-   Connection
-   Document
-   Conversation
-   Meeting
-   Decision
-   Commitment
-   Watch

### Observational objects

-   Metric
-   Event
-   Change
-   Source Record

### Derived intelligence objects

-   Signal
-   Investigation
-   Insight
-   Recommendation

### Operational objects

-   Request
-   Task
-   Approval
-   Action
-   Run
-   Verification
-   Follow-up

### Derived presentation objects

-   Briefing
-   Meeting Preparation
-   Report

### Historical objects

-   Outcome
-   Memory
-   Audit history

------------------------------------------------------------------------

# 58. What Is NOT a Core Object

The following should not become foundational domain objects merely
because they exist as UI concepts:

-   dashboard;
-   sidebar;
-   page;
-   card;
-   notification;
-   AI message;
-   chart;
-   table;
-   tab.

These are interface representations of underlying information.

For example:

``` text
Dashboard
   ↓
Briefing
   ↓
Signals
Tasks
Meetings
Commitments
```

The dashboard is not the source of truth.

------------------------------------------------------------------------

# 59. What the User Actually Experiences

The Object Model should support the user's core questions:

### What happened?

Event / Change / Signal

### Why does it matter?

Impact / Insight

### What should I know?

Context / Evidence / History

### What can I do?

Recommendation / Options

### What happens if I approve?

Decision / Approval / Action Preview

### Did it actually work?

Execution / Verification / Outcome

This should remain consistent across every domain.

------------------------------------------------------------------------

# 60. Example: Listing Suppression

``` text
SOURCE
Amazon Selling Partner API
      ↓
SOURCE RECORD
Suppressed listing
      ↓
EVENT
Listing became suppressed
      ↓
CONTEXT
7-day sales > 0
Active campaigns
Buy Box state
Revenue history
      ↓
SIGNAL
Revenue-generating listing suppression
      ↓
INVESTIGATION
Suppression reason
      ↓
INSIGHT
Primary image is non-compliant
      ↓
RECOMMENDATION
Replace primary image
      ↓
DECISION
User chooses replacement
      ↓
APPROVAL
User authorizes update
      ↓
ACTION
Upload image
      ↓
RUN
Amazon API execution
      ↓
WAITING
Awaiting Amazon validation
      ↓
VERIFICATION
Listing status rechecked
      ↓
OUTCOME
Suppression removed
      ↓
MEMORY
Resolution recorded
```

This matches the intended Input → Value → Action → Execution →
Fulfillment model.

------------------------------------------------------------------------

# 61. Example: Advertising Ineligibility

``` text
SOURCE
Amazon Ads eligibility data
      ↓
EVENT
ASIN becomes ineligible
      ↓
CONTEXT
7-day spend
Active campaigns
Ad sales
Revenue risk
Product importance
      ↓
SIGNAL
Advertising ineligibility with active spend
      ↓
INVESTIGATION
Eligibility reason
      ↓
INSIGHT
Missing compliant primary image
      ↓
RECOMMENDATION
Update image and resubmit
      ↓
DECISION
Approve
      ↓
ACTION
Update product image
      ↓
VERIFICATION
Eligibility refresh
      ↓
OUTCOME
Campaign delivery restored
```

------------------------------------------------------------------------

# 62. Example: Client Conversation

``` text
CLIENT MESSAGE
"Can we increase spend on the new product next week?"
      ↓
REQUEST
Increase advertising spend
      ↓
CONTEXT
Product
Campaign
Current performance
Launch status
Budget
      ↓
RECOMMENDATION
Increase budget by X%
      ↓
DECISION
Approved
      ↓
COMMITMENT
Team will implement before Monday
      ↓
TASK
Update campaign budget
      ↓
ACTION
Change campaign budget
      ↓
VERIFICATION
Budget updated
      ↓
OUTCOME
Performance monitored
```

The communication has therefore become part of operational business
state.

------------------------------------------------------------------------

# 63. Example: Meeting

``` text
MEETING
"Staples Review"
      ↓
PREPARATION
 ├── account health
 ├── revenue decline
 ├── inventory
 ├── promotions
 └── open commitments
      ↓
MEETING
      ↓
EXTRACT
 ├── Decision
 ├── Commitment
 ├── Task
 └── Follow-up
      ↓
MONITOR
      ↓
OUTCOME
```

The meeting remains connected to the account after it ends.

------------------------------------------------------------------------

# 64. Example: Watch

``` text
WATCH
Product X
Condition:
Inventory < 14 days
      ↓
AI CONTINUOUSLY EVALUATES
      ↓
Condition false
      ↓
No user interruption
```

Later:

``` text
Inventory = 9 days
      ↓
Condition true
      ↓
SIGNAL
Inventory risk
      ↓
RECOMMENDATION
Replenish
      ↓
TASK / ACTION
```

A Watch therefore represents persistent user intent, not a stream of
notifications.

------------------------------------------------------------------------

# 65. Object Graph --- Canonical View

``` text
                         ORGANIZATION
                              │
              ┌───────────────┼───────────────┐
              ↓               ↓               ↓
           ACCOUNT           USERS          TEAMS
              │
      ┌───────┼────────┬──────────┐
      ↓       ↓        ↓          ↓
   PRODUCT  MARKET  CAMPAIGN   PEOPLE
      │       │        │
      │       │        └──────────────┐
      ↓       ↓                       ↓
   LISTING  PLATFORM              PERFORMANCE
      │                               │
      └──────────────┬────────────────┘
                     ↓
              EVENT / CHANGE
                     ↓
                  SIGNAL
                     ↓
              INVESTIGATION
                     ↓
                  INSIGHT
                     ↓
             RECOMMENDATION
                     ↓
                  DECISION
                     ↓
                  APPROVAL
                     ↓
                   ACTION
                     ↓
                    RUN
                     ↓
                  WAITING
                     ↓
                VERIFICATION
                     ↓
                  OUTCOME
                     ↓
                  MEMORY
```

Workspace and meeting information connect horizontally across this
graph:

``` text
MESSAGE ─────────────┐
MEETING ─────────────┤
DOCUMENT ────────────┤
                     ↓
                  CONTEXT
                     ↓
          REQUEST / DECISION /
          COMMITMENT / SIGNAL
```

------------------------------------------------------------------------

# 66. Canonical Product Intelligence Loop

``` text
                  ┌───────────────┐
                  │   SOURCES     │
                  └───────┬───────┘
                          ↓
                  ┌───────────────┐
                  │   OBSERVE     │
                  └───────┬───────┘
                          ↓
                  ┌───────────────┐
                  │  UNDERSTAND   │
                  └───────┬───────┘
                          ↓
                  ┌───────────────┐
                  │    CONNECT    │
                  └───────┬───────┘
                          ↓
                  ┌───────────────┐
                  │   PRIORITIZE  │
                  └───────┬───────┘
                          ↓
                  ┌───────────────┐
                  │    SURFACE    │
                  └───────┬───────┘
                          ↓
                    HUMAN JUDGMENT
                          ↓
                ┌─────────┴─────────┐
                ↓                   ↓
             IGNORE              ACT
                                    ↓
                              APPROVE / MODIFY
                                    ↓
                                  ACTION
                                    ↓
                               VERIFICATION
                                    ↓
                                  OUTCOME
                                    ↓
                                  MEMORY
                                    ↓
                            CONTINUE OBSERVING
```

------------------------------------------------------------------------

# 67. Design Constraints Derived From the Model

## Constraint 1 --- Do not make everything an alert

Signals are a subset of observations.

## Constraint 2 --- Do not make everything a task

Only unresolved work should become operational work.

## Constraint 3 --- Do not make recommendations executable by default

Recommendation → Decision → Approval → Action.

## Constraint 4 --- Do not treat API success as business success

Action → Waiting → Verification → Outcome.

## Constraint 5 --- Do not make conversations disposable

Messages and meetings can create persistent business objects.

## Constraint 6 --- Do not make the account a folder

The Account is an evolving business brain connecting many object types.

## Constraint 7 --- Do not hard-code the model around Amazon

Amazon is the first domain, not the universal abstraction.

## Constraint 8 --- Do not make the UI the data model

Cards, pages, dashboards, notifications, and chat are representations.

## Constraint 9 --- Preserve evidence

Derived intelligence must remain traceable.

## Constraint 10 --- Preserve user authority

The system can automate complexity without silently taking consequential
decisions away from the user.

------------------------------------------------------------------------

# 68. Object Priority

The following objects are foundational to the first product version.

### Tier 1 --- Core

1.  Account
2.  Product
3.  Listing
4.  Campaign
5.  Connection
6.  Metric
7.  Event
8.  Signal
9.  Recommendation
10. Decision
11. Approval
12. Action
13. Task
14. Meeting
15. Commitment

### Tier 2 --- Intelligence and operational depth

16. Investigation
17. Insight
18. Request
19. Watch
20. Verification
21. Outcome
22. Person
23. Team
24. Conversation
25. Source Record

### Tier 3 --- Supporting / derived

26. Brand
27. Market
28. Document
29. Briefing
30. Meeting Preparation
31. Report
32. Follow-up
33. Memory

This priority does not imply that Tier 3 objects are unimportant. It
indicates that the first implementation should establish the core
business → intelligence → action loop before expanding every supporting
object.

------------------------------------------------------------------------

# 69. Source of Truth Rules

For implementation, the following hierarchy should be preserved:

``` text
RAW SOURCE
    ↓
NORMALIZED DATA
    ↓
BUSINESS ENTITY
    ↓
OBSERVATION
    ↓
INTELLIGENCE
    ↓
WORK / DECISION
    ↓
EXECUTION
    ↓
OUTCOME
```

A generated briefing, report, or AI response should not silently become
a new source of truth.

------------------------------------------------------------------------

# 70. Relationship Rules

Every meaningful object should support relationships to:

-   Account;
-   relevant Product;
-   relevant Person;
-   relevant Team;
-   relevant Market;
-   relevant Platform;
-   relevant Source;
-   related Signals;
-   related Work;
-   related Decisions;
-   related Actions;
-   related History.

Not every object needs every relationship.

The goal is to preserve enough graph connectivity to reconstruct context
from any valid entry point.

------------------------------------------------------------------------

# 71. Information Model Summary

The product can ultimately be understood as five connected layers:

``` text
1. BUSINESS
   What exists?

   Organization
   Account
   Brand
   Product
   Listing
   Campaign
   Market
   People
   Teams


2. OBSERVATION
   What happened?

   Source Records
   Metrics
   Events
   Changes
   States
   Communications
   Meetings


3. INTELLIGENCE
   What does it mean?

   Signals
   Investigations
   Insights
   Recommendations


4. ORCHESTRATION
   What should happen?

   Requests
   Decisions
   Approvals
   Watches
   Tasks
   Commitments


5. EXECUTION
   What actually happened?

   Actions
   Runs
   Waiting
   Verification
   Outcomes
   Memory
```

------------------------------------------------------------------------

# 72. Final Model

The product's information model is ultimately:

``` text
                 BUSINESS CONTEXT
                        │
          ┌─────────────┼─────────────┐
          ↓             ↓             ↓
       COMMERCE      WORKSPACE     MEETINGS
          │             │             │
          └─────────────┼─────────────┘
                        ↓
                  OBSERVED REALITY
                        ↓
                   UNDERSTANDING
                        ↓
                     SIGNAL
                        ↓
                  RECOMMENDATION
                        ↓
                     DECISION
                        ↓
                    APPROVAL
                        ↓
                     ACTION
                        ↓
                   VERIFICATION
                        ↓
                     OUTCOME
                        ↓
                      MEMORY
                        ↓
                CONTINUOUS OBSERVATION
```

The central product abstraction is therefore not a dashboard, chat,
alert, report, or individual marketplace entity.

It is:

> **A continuously evolving business context containing what exists,
> what happened, what it means, what requires attention, what has been
> decided, what is being done, and what resulted.**

The object model exists to make that context structured, inspectable,
actionable, and persistent.

------------------------------------------------------------------------

# 73. Boundary With Next Documents

This document defines the information/object model.

It does **not** yet define:

-   final navigation;
-   final page hierarchy;
-   screen layouts;
-   component design;
-   exact visual hierarchy;
-   complete ecommerce schema;
-   connector implementation;
-   detailed permission matrix;
-   exact signal taxonomy;
-   notification mechanics;
-   technical database schema.

Those should be derived from this model.

## Next logical artifacts

1.  **Ecommerce UX Blueprint**
2.  **Core User Flows**
3.  **Information Architecture**
4.  **Detailed Signal Taxonomy**
5.  **Permissions & Action Policy Model**
6.  **Detailed Ecommerce Domain Model**
7.  **UI Architecture**

------------------------------------------------------------------------

# 74. Final Principle

> **Do not make the user operate the AI. Make the AI operate the
> complexity.**

> **Do not make the user monitor the business. Make the AI monitor it.**

> **Do not make every observation a notification.**

> **Do not make every recommendation an action.**

> **Do not hide what the AI understood, what it will do, or whether it
> actually worked.**

> **Turn fragmented information into connected business context.**

> **Turn business context into useful judgment.**

> **Turn approved judgment into verified action.**
