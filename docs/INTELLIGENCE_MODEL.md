# INTELLIGENCE MODEL

**Product:** AI-Powered Ecommerce Workspace\
**Document Type:** Foundational Intelligence / Reasoning Model\
**Status:** Proposed source of truth\
**Version:** 1.0\
**Primary Test Case:** Ecommerce account management

------------------------------------------------------------------------

# 1. Purpose

The Information / Object Model defines **what exists** in the system.

This document defines **how intelligent the system should behave**.

The central question is not:

> Can the AI answer questions?

It is:

> **Can the AI understand what is happening in the business, recognize
> what is about to matter, determine what should happen next, and
> smoothly coordinate the work required to make it happen?**

The intended product should feel less like a chatbot and more like an
exceptionally capable coworker who:

-   already knows the business;
-   notices important changes without being asked;
-   understands timing and business context;
-   connects information across systems;
-   recognizes problems before they become emergencies;
-   identifies opportunities before the user thinks to ask;
-   explains why something matters;
-   proposes a sensible course of action;
-   coordinates the people and systems required;
-   asks for judgment only when judgment is actually required;
-   executes authorized work;
-   follows up automatically;
-   verifies the result;
-   remembers what happened.

The intelligence model therefore extends the basic loop:

``` text
OBSERVE
  ↓
UNDERSTAND
  ↓
CONNECT
  ↓
PRIORITIZE
  ↓
RECOMMEND
  ↓
ACT
  ↓
VERIFY
  ↓
REMEMBER
```

into a more capable operating loop:

``` text
OBSERVE
   ↓
UNDERSTAND
   ↓
ANTICIPATE
   ↓
IDENTIFY OPPORTUNITY / RISK
   ↓
FORM A PLAN
   ↓
ORCHESTRATE WORK
   ↓
ASK FOR JUDGMENT WHERE NEEDED
   ↓
EXECUTE
   ↓
FOLLOW UP
   ↓
VERIFY OUTCOME
   ↓
LEARN / REMEMBER
   ↓
CONTINUE OBSERVING
```

This is the difference between **AI that reports reality** and **AI that
helps run the business**.

------------------------------------------------------------------------

# 2. Intelligence Thesis

The product should make the user feel:

> **"It already knows what I should be thinking about."**

Not:

> "I have to ask it the right question."

Research strongly supports this direction. Users repeatedly spend more
time gathering context than making decisions, and they want a system
that already knows what happened before they ask.
fileciteturn8file0L23-L49

The system should therefore evolve from:

``` text
QUESTION → ANSWER
```

to:

``` text
BUSINESS STATE
     ↓
UNDERSTANDING
     ↓
WHAT MATTERS
     ↓
WHAT SHOULD HAPPEN
     ↓
HOW TO MAKE IT HAPPEN
```

The product research explicitly describes the desired system as a
Workspace Intelligence Platform rather than another chatbot, combining
contextual search, proactive monitoring, root-cause reasoning,
reporting, and workflow assistance. fileciteturn8file0L23-L30

------------------------------------------------------------------------

# 3. What "Intelligent" Means

Intelligence is not the number of models, tools, or APIs the system can
call.

A user should experience intelligence through six observable behaviors:

### 1. Awareness

The AI knows what is happening.

### 2. Understanding

The AI knows what those changes mean.

### 3. Anticipation

The AI knows what is likely to matter next.

### 4. Judgment

The AI can determine what deserves attention and what does not.

### 5. Orchestration

The AI can turn a recommendation into coordinated work.

### 6. Follow-through

The AI remembers, checks, verifies, and closes the loop.

------------------------------------------------------------------------

# 4. Intelligence Spectrum

The product should deliberately move through five levels.

``` text
LEVEL 0
Reactive Answering
"What is my revenue?"

        ↓

LEVEL 1
Awareness
"Revenue dropped 11%."

        ↓

LEVEL 2
Understanding
"Revenue dropped because SKU A went out of stock."

        ↓

LEVEL 3
Recommendation
"Refill SKU A first; campaigns should remain unchanged
until inventory recovers."

        ↓

LEVEL 4
Anticipatory Intelligence
"Labor Day is approaching. Based on your historical
performance, inventory, promotion patterns and current
calendar, this account has an opportunity to run a sale."

        ↓

LEVEL 5
Operational Intelligence
"I recommend a Labor Day promotion. I can coordinate the
work: create the promotion brief, assign the banner to
Design, ask Sales to confirm the coupon, schedule a
planning meeting, and monitor launch readiness."
```

The target experience is **Level 4--5**.

The system should not stop at explaining the present.

It should help the user manage what comes next.

------------------------------------------------------------------------

# 5. The AI Should Think in Time

A major intelligence requirement is temporal reasoning.

The AI should understand:

``` text
PAST
What happened?

PRESENT
What is happening?

NEAR FUTURE
What is likely to matter?

FUTURE
What should we prepare for?
```

This means the AI should reason across:

-   historical performance;
-   current state;
-   upcoming events;
-   deadlines;
-   meetings;
-   campaigns;
-   promotions;
-   seasonal periods;
-   inventory lead times;
-   commitments;
-   planned launches;
-   known business cycles.

The system should not simply detect:

> "Labor Day exists."

It should reason:

> "Labor Day is approaching, this brand has historically run promotions
> during this period, the relevant products have sufficient inventory,
> margins can support a discount, the Shopify store is active, and there
> is enough time to create the required creative."

That is intelligence.

------------------------------------------------------------------------

# 6. Event Intelligence

The Event Detection Engine should transform raw information into
meaningful business events.

The existing research identifies events such as:

-   inventory out of stock;
-   promotion failure;
-   sales increase;
-   sales drop;
-   campaign budget exhaustion;
-   campaign pause;
-   Buy Box loss;
-   listing suppression;
-   listing publication;
-   critical Slack mention;
-   new client email;
-   pending action item;
-   upcoming meeting;
-   unresolved escalation;
-   action item due today. fileciteturn8file9L1198-L1224

But event detection is only the first intelligence layer.

``` text
RAW EVENT
   ↓
WHAT DOES IT MEAN?
   ↓
DOES IT MATTER?
   ↓
WHY?
   ↓
WHAT SHOULD HAPPEN?
```

------------------------------------------------------------------------

# 7. Context Correlation

The AI must correlate information across domains.

A single event should not be interpreted in isolation.

For example:

``` text
HOLIDAY APPROACHING
       +
HISTORICAL HOLIDAY SALES
       +
CURRENT INVENTORY
       +
CURRENT MARGINS
       +
PROMOTION HISTORY
       +
SHOPIFY STATUS
       +
ACTIVE CAMPAIGNS
       +
DESIGN CAPACITY
       +
SALES TEAM AVAILABILITY
       +
CLIENT COMMITMENTS
       +
UPCOMING MEETINGS
       ↓
CAMPAIGN OPPORTUNITY
```

The product architecture already defines context collection across
ecommerce, workspace, meetings, email, and calendar, followed by context
correlation, root-cause analysis, business-impact analysis, and
recommendation generation. fileciteturn8file9L1165-L1224

The Intelligence Model makes that correlation a behavioral requirement,
not merely a technical pipeline.

------------------------------------------------------------------------

# 8. Business Understanding

The AI should reason in **business language**, not raw platform
language.

Bad:

> "Campaign 2189 has a 19.4% decrease in attributed sales."

Better:

> "Your top-selling desk accessories campaign is losing momentum."

Better still:

> "Your desk accessories campaign is losing momentum because two of its
> highest-converting products are running low on inventory. Increasing
> ad spend now would likely amplify the problem."

The system should translate:

``` text
DATA
 ↓
MEANING
 ↓
BUSINESS CONSEQUENCE
```

------------------------------------------------------------------------

# 9. Business Impact Reasoning

The AI should quantify why something matters whenever the evidence
supports it.

Possible dimensions:

-   revenue at risk;
-   revenue opportunity;
-   margin impact;
-   wasted spend;
-   units affected;
-   customers affected;
-   campaign impact;
-   inventory exposure;
-   opportunity window;
-   time sensitivity.

The research already requires AI-generated business insights such as
estimated wasted advertising spend, revenue at risk, percentage of
advertising budget affected, campaign impact, opportunity cost, and
suggested priority. fileciteturn8file6L722-L745

The same principle should apply to proactive opportunities.

For example:

``` text
Labor Day opportunity

Expected sales uplift:
+18–27%

Potential incremental revenue:
$42K–$61K

Inventory coverage:
Healthy

Promotion margin:
Acceptable

Preparation window:
12 days

Confidence:
78%
```

The numbers are illustrative; the model should only present quantified
estimates when sufficient evidence exists.

------------------------------------------------------------------------

# 10. Risk Intelligence

The AI should recognize emerging problems before they become explicit
failures.

Examples:

``` text
Inventory
30 days coverage
   ↓
17 days
   ↓
8 days
   ↓
Promotion scheduled next week
   ↓
RISK
Promotion may accelerate stockout
```

The AI should not wait for:

> OUT OF STOCK

before becoming useful.

It should identify:

> **"If we run the planned promotion at the current inventory level,
> this product is likely to stock out during the promotion window."**

------------------------------------------------------------------------

# 11. Opportunity Intelligence

Opportunity detection is equally important.

The AI should ask:

> **"What could this business be doing right now that it is not
> doing?"**

Opportunity signals may include:

-   seasonal events;
-   upcoming holidays;
-   strong historical periods;
-   rising demand;
-   high-performing products;
-   unused inventory;
-   underfunded campaigns;
-   cross-sell opportunities;
-   promotional windows;
-   competitor changes;
-   unused marketing channels;
-   customer interest;
-   upcoming launches.

This creates a second intelligence stream:

``` text
RISK INTELLIGENCE
"What could go wrong?"

        +

OPPORTUNITY INTELLIGENCE
"What could go better?"
```

The system should actively look for both.

------------------------------------------------------------------------

# 12. Anticipatory Intelligence

Anticipation means reasoning about something that has **not happened
yet**.

The AI should identify:

``` text
KNOWN FUTURE EVENT
        ↓
EXPECTED BUSINESS EFFECT
        ↓
REQUIRED PREPARATION
        ↓
WORK REQUIRED
        ↓
OWNER
        ↓
DEADLINE
```

Examples:

### Holiday

> Labor Day is approaching.

### Product launch

> Your new product launch is 10 days away.

### Meeting

> You have a client review tomorrow and there are three unresolved
> commitments.

### Inventory

> Current inventory will likely fall below your safety threshold before
> the next shipment.

### Campaign

> Your campaign budget is likely to exhaust before the weekend based on
> current pacing.

The intelligence is not merely prediction.

It is:

> **Prediction + preparation.**

------------------------------------------------------------------------

# 13. The Labor Day Example --- Target Experience

This is the prime example for how intelligent the AI should feel.

Assume the system knows:

-   the account;
-   Shopify store;
-   products;
-   historical Labor Day performance;
-   previous promotions;
-   inventory;
-   margin;
-   campaigns;
-   website;
-   design team;
-   sales team;
-   calendar;
-   workspace conversations;
-   current commitments.

The AI notices:

``` text
LABOR DAY APPROACHING
        ↓
Historical promotion performance
        ↓
Current product demand
        ↓
Healthy inventory
        ↓
Acceptable margin
        ↓
Shopify store active
        ↓
No conflicting campaign
        ↓
Sufficient preparation time
        ↓
OPPORTUNITY DETECTED
```

The AI should surface:

> **Labor Day is coming up. This looks like a good promotion window for
> the account.**

Then explain:

> Last Labor Day, these three products generated 31% more revenue during
> the promotional period. Inventory is currently healthy and the margins
> can support a 15% discount.

Then recommend:

> **I recommend a Labor Day promotion across these 3 products.**

Then convert the recommendation into a coordinated plan:

``` text
LABOR DAY SALE
│
├── Promotion
│   └── Create 15% coupon
│
├── Website
│   └── Create homepage banner
│
├── Design
│   └── Create promotional creative
│
├── Sales
│   └── Confirm coupon / offer
│
├── Account Management
│   └── Coordinate launch
│
└── Monitoring
    └── Track promotion performance
```

Then:

> **I can coordinate the setup for you.**

And present the proposed work:

``` text
CREATE LABOR DAY PROMOTION

✓ Create promotion brief
✓ Assign banner to Sarah — Design
✓ Ask Sales to confirm coupon
✓ Schedule 20-min planning meeting
✓ Prepare launch checklist
✓ Monitor promotion after launch
```

The user should not have to separately say:

> "Create a task."

> "Assign it."

> "Message Sales."

> "Book a meeting."

> "Set a reminder."

The AI understands that these are **sub-actions required to fulfill the
recommendation**.

------------------------------------------------------------------------

# 14. Orchestration Is Intelligence

This is one of the most important principles in the model.

A recommendation is not intelligent enough if the user still has to
manually translate it into work.

Bad:

> "You should run a Labor Day sale."

Better:

> "You should run a Labor Day sale. Here is why."

Best:

> "You should run a Labor Day sale. Here is why, here is the plan, here
> is who needs to do what, and I can coordinate it."

Therefore:

``` text
INSIGHT
   ↓
RECOMMENDATION
   ↓
PLAN
   ↓
WORK GRAPH
   ↓
COORDINATION
   ↓
EXECUTION
```

------------------------------------------------------------------------

# 15. Plan Generation

When a recommendation requires multiple activities, the AI should create
a **Plan**.

A Plan is a temporary orchestration layer connecting multiple Work
objects.

Example:

``` text
PLAN
Labor Day Campaign
│
├── Task
│   Design homepage banner
│
├── Task
│   Confirm coupon structure
│
├── Task
│   Prepare promotion copy
│
├── Meeting
│   Labor Day launch review
│
├── Action
│   Publish Shopify banner
│
├── Action
│   Activate coupon
│
└── Watch
    Monitor campaign performance
```

The Plan is not a replacement for the underlying Task, Meeting, Action,
or Watch objects.

It coordinates them.

------------------------------------------------------------------------

# 16. Dependency Reasoning

The AI should understand that work has dependencies.

Example:

``` text
COUPON CONFIRMED
        ↓
PROMOTION CONFIGURED
        ↓
CREATIVE APPROVED
        ↓
SHOPIFY BANNER PUBLISHED
        ↓
CAMPAIGN LAUNCHED
        ↓
MONITOR PERFORMANCE
```

If the coupon is not confirmed, the AI should not falsely represent the
promotion as ready.

It should say:

> **Waiting on Sales to confirm the coupon. Everything else is ready.**

------------------------------------------------------------------------

# 17. Ownership Reasoning

The AI should understand who is responsible for what.

It should infer ownership from:

-   organizational roles;
-   previous assignments;
-   teams;
-   account ownership;
-   expertise;
-   workload where available;
-   previous similar work;
-   permissions.

Example:

``` text
Homepage banner
      ↓
Design team

Coupon confirmation
      ↓
Sales / Promotions

Shopify implementation
      ↓
Ecommerce / Web owner

Campaign launch
      ↓
Account Manager

Performance monitoring
      ↓
AI + Account Manager
```

The AI should not blindly assign work.

It should explain uncertainty when ownership is unclear.

------------------------------------------------------------------------

# 18. Communication Intelligence

The AI should understand that communication is part of execution.

Instead of:

> "Sales needs to create a coupon."

The system should be capable of:

> "Sales needs to confirm the coupon structure before Friday. I can send
> them the context and request confirmation."

Potential action:

``` text
MESSAGE SALES

Context:
Labor Day promotion
Products:
3 SKUs
Proposed discount:
15%
Required by:
Friday
Reason:
Historical Labor Day opportunity
```

The AI should preserve context when communicating.

It should not merely send:

> "Hey, can you make a coupon?"

------------------------------------------------------------------------

# 19. Meeting Intelligence as Coordination

The AI should recognize when a meeting is actually useful.

It should not create meetings for every task.

For the Labor Day example:

If the work is simple:

> No meeting required. I can coordinate the tasks asynchronously.

If multiple teams need alignment:

> Design and Sales need to confirm the promotion structure. I recommend
> a 20-minute launch review.

The intelligence is therefore:

``` text
MEETING NEEDED?
       ↓
DEPENDENCIES
       ↓
NUMBER OF OWNERS
       ↓
AMBIGUITY
       ↓
TIME SENSITIVITY
       ↓
DECISION COMPLEXITY
```

Only create a meeting when synchronous coordination adds value.

------------------------------------------------------------------------

# 20. Bundled Approval

The AI should avoid approval fatigue.

It should not ask:

> Approve task?

> Approve message?

> Approve meeting?

> Approve reminder?

> Approve watch?

Instead, it should bundle related low-risk work into one understandable
proposal.

Example:

> **I recommend preparing the Labor Day promotion.**
>
> I'll assign Design the banner, ask Sales to confirm the coupon,
> schedule a short launch review, and monitor readiness.
>
> **Approve plan**

The user can expand the plan before approval.

------------------------------------------------------------------------

# 21. Approval Granularity

Not every sub-action needs the same authority.

``` text
LOW RISK
Create draft
Prepare task
Prepare message
Prepare meeting proposal

        ↓

NORMAL
Send internal message
Assign task
Create meeting
Create watch

        ↓

HIGH IMPACT
Change pricing
Increase spend
Launch promotion
Publish customer-facing change

        ↓

RESTRICTED
Actions outside policy
Actions without permission
Actions with unacceptable risk
```

The AI should group actions intelligently according to policy.

------------------------------------------------------------------------

# 22. User Control

The user should always be able to:

``` text
APPROVE
MODIFY
REJECT
ASSIGN DIFFERENTLY
CHANGE SCOPE
CHANGE OWNER
CHANGE DEADLINE
TAKE OVER
STOP
UNDO WHERE SUPPORTED
```

The AI should behave like an orchestrator, not an authority above the
user.

------------------------------------------------------------------------

# 23. Confidence

Every important AI conclusion should have an internal confidence
assessment.

Confidence should consider:

-   data completeness;
-   evidence quality;
-   historical support;
-   agreement between sources;
-   ambiguity;
-   prediction uncertainty;
-   action risk.

User-facing confidence should be shown when it helps decision making.

Example:

> **Good opportunity --- 82% confidence**

Not:

> "The AI is 82% confident because model X..."

The user needs the business confidence, not model internals.

------------------------------------------------------------------------

# 24. Evidence Before Confidence

Confidence must be grounded in evidence.

Example:

``` text
RECOMMENDATION
Run Labor Day promotion

WHY
├── Labor Day historically +31% revenue
├── 3 products have sufficient inventory
├── Current gross margin supports 15% discount
├── Shopify store is active
├── No conflicting promotion
└── 12 days available for preparation

CONFIDENCE
High
```

The AI should never use confidence as a substitute for evidence.

------------------------------------------------------------------------

# 25. Counterfactual Reasoning

The AI should reason about alternatives.

Example:

``` text
OPTION A
15% discount
Expected:
Higher volume
Lower margin

OPTION B
10% discount
Expected:
Lower volume uplift
Higher margin

OPTION C
No discount
Expected:
Baseline performance
```

The AI can then say:

> **I recommend 15% because inventory is healthy and last year's
> response suggests the additional volume outweighs the margin
> reduction.**

This is more useful than simply producing a single answer.

------------------------------------------------------------------------

# 26. Constraint Awareness

The AI must reason within constraints.

Potential constraints:

-   margin;
-   inventory;
-   budget;
-   permissions;
-   deadlines;
-   team capacity;
-   campaign state;
-   platform restrictions;
-   client commitments;
-   existing promotions;
-   brand strategy.

Example:

> "A promotion is attractive, but I would not run it on SKU X because
> current inventory is only 6 days."

This demonstrates business judgment.

------------------------------------------------------------------------

# 27. Priority Reasoning

The AI should rank work based on more than severity.

Priority can combine:

``` text
BUSINESS IMPACT
×
TIME SENSITIVITY
×
CONFIDENCE
×
REVERSIBILITY
×
DEPENDENCIES
×
STRATEGIC IMPORTANCE
×
USER / ACCOUNT PRIORITY
```

The exact mathematical scoring model can evolve.

The behavioral requirement is:

> **The AI should understand what matters most now.**

------------------------------------------------------------------------

# 28. "What Can Wait?" Intelligence

Good intelligence includes knowing what does not require action.

The system should be able to say:

> "I found 17 changes. Three need attention. The rest can wait."

This follows the core product principle that intelligence is knowing
what does not need to be shown. fileciteturn6file2L428-L459

The AI should actively suppress low-value work.

------------------------------------------------------------------------

# 29. Silence Is a Successful Outcome

The AI should sometimes do nothing.

If:

-   nothing is urgent;
-   no opportunity is meaningful;
-   no action is required;
-   no decision is pending;

then:

> **Nothing needs your attention right now.**

The AI should not generate work simply to appear active.

------------------------------------------------------------------------

# 30. Memory and Learning

After an action, the AI should remember:

-   what was recommended;
-   what the user decided;
-   what was executed;
-   what actually happened;
-   whether the recommendation worked;
-   who owned the work;
-   how long it took;
-   what dependencies caused delay.

Example:

``` text
Labor Day 2025
   ↓
15% promotion
   ↓
+24% revenue
   ↓
Inventory constraint
   ↓
Promotion ended early
   ↓
MEMORY
```

Next year:

> "Last Labor Day, the 15% promotion increased revenue 24%, but
> inventory ran low after day three. I recommend a smaller discount or
> additional inventory this year."

That is genuine organizational intelligence.

------------------------------------------------------------------------

# 31. Learning From User Behavior

The AI should also learn from decisions.

If the user repeatedly:

-   rejects certain recommendations;
-   prefers certain discount ranges;
-   avoids certain campaign types;
-   assigns work to specific people;
-   prefers asynchronous coordination;
-   prioritizes margin over revenue;

the system can use this history to improve future recommendations.

However:

> **Learning preference is not permission.**

A learned preference should never silently override explicit policy or
approval requirements.

------------------------------------------------------------------------

# 32. Intelligence Across Roles

The same business situation may produce different intelligence for
different users.

### Account Manager

> "Labor Day is a good opportunity. I can coordinate the launch across
> Design and Sales."

### Brand Owner

> "Labor Day could be a strong sales opportunity. Three products have
> enough inventory for a 15% promotion."

### Designer

> "The Labor Day campaign needs a homepage banner by Thursday. Here is
> the brief and the product set."

### Sales

> "Please confirm the Labor Day coupon: 15% off these three products by
> Friday."

### Leadership

> "Labor Day campaign opportunity: estimated +18--27% revenue uplift
> with healthy inventory."

Same context.

Different intelligence surface.

------------------------------------------------------------------------

# 33. Intelligence Should Preserve Context When Handing Off Work

A major failure mode is:

``` text
AI
 ↓
Create task
 ↓
"Make banner"
```

The human then has to reconstruct everything.

Instead:

``` text
TASK
Labor Day Homepage Banner

WHY
Upcoming Labor Day promotion

PRODUCTS
3 selected products

OFFER
15% discount

TARGET
Shopify homepage

DEADLINE
Thursday

REFERENCE
Historical Labor Day campaign

DEPENDENCY
Coupon confirmation

EXPECTED OUTCOME
Launch-ready promotional banner
```

The AI should transfer context, not merely transfer work.

------------------------------------------------------------------------

# 34. Multi-Step Reasoning

The AI should be able to reason across multiple steps.

Example:

``` text
Labor Day approaching
        ↓
Promotion opportunity detected
        ↓
Products selected
        ↓
Inventory checked
        ↓
Margin checked
        ↓
Historical performance checked
        ↓
Offer recommended
        ↓
Creative required
        ↓
Sales confirmation required
        ↓
Website update required
        ↓
Launch date calculated
        ↓
Owners identified
        ↓
Tasks created
        ↓
Dependencies monitored
        ↓
Launch verified
        ↓
Performance monitored
```

This is the minimum conceptual behavior for an AI that feels like a
business coworker.

------------------------------------------------------------------------

# 35. The AI Should Not Overreach

Anticipatory intelligence must have boundaries.

The AI should not:

-   invent business priorities;
-   make strategic decisions without authority;
-   contact clients without permission;
-   launch promotions silently;
-   change pricing without authorization;
-   assign sensitive work without access;
-   create unnecessary meetings;
-   overwhelm users with speculative opportunities.

The system should distinguish:

``` text
I noticed
I think
I recommend
I prepared
I need your decision
I am authorized to do this
I did this
I verified this
```

Those are different states.

------------------------------------------------------------------------

# 36. Intelligence State Language

The UI should expose the AI's reasoning state in simple business
language.

### Observation

> "I noticed..."

### Interpretation

> "This appears to be because..."

### Opportunity

> "This may be an opportunity because..."

### Recommendation

> "I recommend..."

### Preparation

> "I've prepared..."

### Approval

> "I need your approval to..."

### Execution

> "I'm doing..."

### Waiting

> "I'm waiting on..."

### Verification

> "I'm checking whether..."

### Completion

> "It's done. I verified..."

### Failure

> "That didn't work because..."

This makes the AI understandable without turning the product into a
chatbot.

------------------------------------------------------------------------

# 37. The Intelligence Pipeline

The complete intelligence pipeline should be:

``` text
1. CONTEXT COLLECTION
        ↓
2. EVENT DETECTION
        ↓
3. STATE UNDERSTANDING
        ↓
4. CONTEXT CORRELATION
        ↓
5. TEMPORAL REASONING
        ↓
6. IMPACT ANALYSIS
        ↓
7. RISK / OPPORTUNITY DETECTION
        ↓
8. PRIORITIZATION
        ↓
9. INVESTIGATION
        ↓
10. RECOMMENDATION
        ↓
11. PLAN GENERATION
        ↓
12. WORK ORCHESTRATION
        ↓
13. APPROVAL / AUTHORIZATION
        ↓
14. EXECUTION
        ↓
15. FOLLOW-UP
        ↓
16. VERIFICATION
        ↓
17. OUTCOME ANALYSIS
        ↓
18. MEMORY / LEARNING
```

The existing research architecture already establishes Context
Collection → Event Detection → AI Reasoning → Recommendation Generation
→ Narrative / Automation. fileciteturn8file9L1035-L1051

This model extends that pipeline to include anticipation, planning,
orchestration, follow-through, and learning.

------------------------------------------------------------------------

# 38. Intelligence Graph

The AI should operate over a graph like:

``` text
                    BUSINESS
                       │
       ┌───────────────┼────────────────┐
       ↓               ↓                ↓
    COMMERCE        PEOPLE          WORKSPACE
       │               │                │
       └───────────────┼────────────────┘
                       ↓
                    CONTEXT
                       ↓
              CURRENT BUSINESS STATE
                       ↓
            ┌──────────┴──────────┐
            ↓                     ↓
          RISKS              OPPORTUNITIES
            │                     │
            └──────────┬──────────┘
                       ↓
                  PRIORITIZATION
                       ↓
                  RECOMMENDATION
                       ↓
                      PLAN
                       ↓
                  WORK GRAPH
             ┌─────────┼─────────┐
             ↓         ↓         ↓
           TASK      MEETING    ACTION
             │         │         │
             └─────────┼─────────┘
                       ↓
                  DEPENDENCIES
                       ↓
                   EXECUTION
                       ↓
                  VERIFICATION
                       ↓
                    OUTCOME
                       ↓
                    MEMORY
```

------------------------------------------------------------------------

# 39. Work Graph

The AI should think of a recommendation as a graph of dependent work
rather than a single action.

Example:

``` text
                LABOR DAY SALE
                      │
          ┌───────────┼───────────┐
          ↓           ↓           ↓
       COUPON      CREATIVE    PLANNING
          │           │           │
          ↓           ↓           ↓
        SALES       DESIGN      MEETING
          │           │           │
          └───────────┼───────────┘
                      ↓
                 SHOPIFY SETUP
                      ↓
                 LAUNCH CHECK
                      ↓
                   PUBLISH
                      ↓
                  MONITOR
```

The AI should understand dependencies and blockers within this graph.

------------------------------------------------------------------------

# 40. Autonomous vs Assisted Intelligence

The system should have different operating modes.

## Mode 1 --- Observe

AI monitors but does not create work.

## Mode 2 --- Recommend

AI identifies what should happen.

## Mode 3 --- Prepare

AI creates drafts, tasks, plans, meeting proposals, messages, etc.

## Mode 4 --- Coordinate

AI assigns, communicates, schedules, and tracks authorized work.

## Mode 5 --- Execute

AI performs authorized actions.

## Mode 6 --- Autopilot

AI executes predefined low-risk workflows under explicit automation
policies.

``` text
OBSERVE
   ↓
RECOMMEND
   ↓
PREPARE
   ↓
COORDINATE
   ↓
EXECUTE
   ↓
AUTOPILOT
```

The system should never silently jump between these modes.

------------------------------------------------------------------------

# 41. Policy-Aware Intelligence

Intelligence must be constrained by:

-   permissions;
-   organizational policy;
-   action authority;
-   account access;
-   platform access;
-   data access;
-   user role;
-   risk class.

The AI should understand:

> "I know what should happen, but I am not authorized to do it."

This is a critical distinction.

------------------------------------------------------------------------

# 42. Opportunity Quality

The AI should not surface every theoretical opportunity.

An opportunity should generally pass:

``` text
RELEVANCE
   +
EVIDENCE
   +
FEASIBILITY
   +
TIMING
   +
EXPECTED VALUE
   +
CONFIDENCE
   ↓
WORTH SURFACING?
```

Example:

> "You could theoretically sell more during Labor Day."

Too generic.

Better:

> "Labor Day has historically been one of this account's strongest
> promotional periods, and three products currently have healthy
> inventory and sufficient margin."

That is worth surfacing.

------------------------------------------------------------------------

# 43. Opportunity → Action Threshold

The AI should determine how far to take an opportunity.

``` text
LOW VALUE
Mention only

MEDIUM VALUE
Recommend

HIGH VALUE
Recommend + prepare

HIGH VALUE + CLEAR PLAN
Recommend + prepare + coordinate

LOW RISK + AUTHORIZED
Execute automatically

HIGH IMPACT
Prepare + ask for approval
```

This prevents both under-automation and over-automation.

------------------------------------------------------------------------

# 44. Proactive Intelligence Should Feel Natural

The user should not feel:

> "The AI is interrupting me."

They should feel:

> **"The AI happened to notice something useful."**

The interaction should therefore be concise.

Example:

> **Labor Day is coming up.**
>
> This looks like a strong promotion opportunity for Acme.
>
> Last year, these products performed 31% better during the holiday
> period. Inventory is healthy and a 15% discount stays within the
> current margin target.
>
> **I recommend preparing a 3-product Labor Day sale.**
>
> I can coordinate the banner with Design, get the coupon confirmed by
> Sales, and schedule a short launch review.
>
> **Prepare the launch plan**

This is the desired conversational density.

------------------------------------------------------------------------

# 45. What Makes the AI Feel Smart

The user should notice that the AI:

### Remembers

> "Last time..."

### Connects

> "This is related to..."

### Anticipates

> "Next week..."

### Notices

> "I spotted..."

### Prioritizes

> "This matters more because..."

### Understands ownership

> "Design should handle..."

### Understands dependencies

> "We can't launch until..."

### Coordinates

> "I've prepared..."

### Follows up

> "I'm waiting on..."

### Verifies

> "I checked and..."

### Learns

> "Last time this happened..."

These are the actual UX signals of intelligence.

------------------------------------------------------------------------

# 46. What Makes the AI Feel Dumb

The system should explicitly avoid:

### 1. Restating data

> "Labor Day is coming."

without business reasoning.

### 2. Asking obvious questions

> "Would you like to prepare for Labor Day?"

when the opportunity is clearly actionable.

### 3. Fragmenting work

> "Create a task for Design."

then waiting.

### 4. Losing context

> "Design task: Make banner."

### 5. False certainty

> "This will increase revenue by 27%."

without evidence.

### 6. Alert spam

> 17 separate notifications.

### 7. Premature execution

Launching a promotion without authorization.

### 8. False completion

> "Done."

when the external system has not been verified.

### 9. Generic recommendations

> "Consider increasing marketing."

### 10. Chat dependency

Making the user prompt every next step.

------------------------------------------------------------------------

# 47. Intelligence Quality Standard

Every proactive intelligence item should ideally answer:

``` text
WHAT DID YOU NOTICE?
        ↓
WHY DOES IT MATTER?
        ↓
WHAT EVIDENCE SUPPORTS IT?
        ↓
WHAT DO YOU THINK WE SHOULD DO?
        ↓
WHY THIS ACTION?
        ↓
WHAT NEEDS TO HAPPEN?
        ↓
WHO NEEDS TO BE INVOLVED?
        ↓
WHAT DO YOU NEED FROM ME?
        ↓
WHAT WILL YOU DO AFTER THAT?
```

This should become the internal quality checklist for proactive AI
behavior.

------------------------------------------------------------------------

# 48. Intelligence Acceptance Criteria

A proactive intelligence capability is not complete unless it can:

1.  detect the relevant signal;
2.  reconstruct surrounding business context;
3.  distinguish meaningful information from noise;
4.  identify risk or opportunity;
5.  explain why it matters;
6.  quantify impact where possible;
7.  consider timing;
8.  identify constraints;
9.  determine a sensible next step;
10. identify required people and systems;
11. create a coherent plan;
12. preserve dependencies;
13. ask for approval only where needed;
14. execute authorized work;
15. monitor pending work;
16. verify outcomes;
17. record what happened;
18. use the outcome in future reasoning.

------------------------------------------------------------------------

# 49. Intelligence Metrics

The intelligence layer should be measured by outcomes, not model
activity.

### Awareness

-   time to detect important event;
-   percentage of important events detected;
-   missed-event rate.

### Understanding

-   explanation usefulness;
-   root-cause accuracy;
-   evidence coverage.

### Prioritization

-   critical-event precision;
-   irrelevant alert rate;
-   user attention saved.

### Recommendation

-   recommendation adoption;
-   recommendation success rate;
-   recommendation modification rate;
-   estimated vs actual impact.

### Anticipation

-   opportunities identified before user request;
-   risks identified before failure;
-   lead time created.

### Orchestration

-   percentage of recommendations converted into work;
-   percentage of work correctly assigned;
-   dependency resolution rate;
-   coordination time saved.

### Execution

-   execution success;
-   verification success;
-   recovery time;
-   manual effort eliminated.

### Learning

-   repeated issue reduction;
-   recommendation improvement;
-   user preference adaptation;
-   outcome-informed recommendations.

The research already identifies recommendation adoption, time to
identify critical issues, AI explanation usefulness, and reduction in
preparation time as important success metrics.
fileciteturn7file3L403-L435

------------------------------------------------------------------------

# 50. The Core Intelligence Loop

The final behavioral loop should be:

``` text
              ┌──────────────────┐
              │     OBSERVE      │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │    UNDERSTAND    │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │     CONNECT      │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │    ANTICIPATE    │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │  PRIORITIZE      │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │   RECOMMEND      │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │      PLAN        │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │   ORCHESTRATE    │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │ HUMAN JUDGMENT   │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │     EXECUTE      │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │    FOLLOW UP     │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │    VERIFY        │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │    OUTCOME       │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │ MEMORY / LEARNING│
              └────────┬─────────┘
                       ↓
                 OBSERVE AGAIN
```

------------------------------------------------------------------------

# 51. The Prime Example in One Flow

The entire intelligence model can be summarized by this behavior:

``` text
LABOR DAY APPROACHING
        ↓
AI notices
        ↓
Checks historical performance
        ↓
Checks current inventory
        ↓
Checks margin
        ↓
Checks current promotions
        ↓
Checks Shopify
        ↓
Checks campaign calendar
        ↓
Checks team / workspace context
        ↓
Determines:
"Strong promotion opportunity"
        ↓
Explains why
        ↓
Recommends:
"15% Labor Day promotion across 3 products"
        ↓
Builds plan
        ↓
Identifies required work
        ↓
Assigns Design task
        ↓
Requests Sales coupon confirmation
        ↓
Schedules launch review if needed
        ↓
Prepares Shopify banner work
        ↓
Creates launch checklist
        ↓
Creates monitoring Watch
        ↓
User approves plan
        ↓
AI coordinates
        ↓
AI monitors dependencies
        ↓
AI says:
"Design is complete.
Sales has confirmed the coupon.
Shopify banner is ready.
Launch is ready for tomorrow."
        ↓
AI launches authorized actions
        ↓
AI verifies
        ↓
AI monitors performance
        ↓
AI reports:
"Labor Day promotion generated +22%
revenue vs baseline."
        ↓
MEMORY
        ↓
Future Labor Day reasoning improves
```

**This is the target feeling.**

The user did not operate the systems.

The user did not reconstruct the context.

The user did not manually create five separate pieces of work.

The user made one meaningful judgment:

> **"Yes, let's do it."**

The AI handled the complexity.

------------------------------------------------------------------------

# 52. The Intelligence Contract

The product should effectively promise the user:

> **I will pay attention.**

> **I will understand what matters.**

> **I will tell you when something deserves your attention.**

> **I will look ahead, not just behind.**

> **I will connect the dots across your business.**

> **I will recommend what I think should happen.**

> **I will prepare the work required to make it happen.**

> **I will involve the right people.**

> **I will ask you when your judgment matters.**

> **I will execute what I am authorized to execute.**

> **I will not claim something is done until I verify it.**

> **I will remember what happened and use it next time.**

------------------------------------------------------------------------

# 53. Final Principle

The intelligence model should make the AI feel like:

> **A coworker who is always paying attention, understands the business,
> thinks ahead, and quietly coordinates the work around you.**

Not:

> **A chatbot that waits for instructions.**

The product should therefore evolve from:

> **"Ask me anything."**

to:

> **"I already know what is happening, what matters, what is coming
> next, and what we could do about it."**

And ultimately:

> **"You make the important decisions. I'll handle the complexity
> required to make them happen."**

------------------------------------------------------------------------

# 54. Boundary With the Next Documents

This document defines **how the AI should reason and behave**.

It does not yet define:

-   exact model architecture;
-   prompt architecture;
-   agent architecture;
-   tool-selection architecture;
-   memory implementation;
-   confidence algorithms;
-   ranking formulas;
-   event-detection implementation;
-   exact automation policies;
-   final UI presentation;
-   exact conversational copy;
-   domain-specific prediction models.

Those should be derived from this intelligence model.

## Next logical artifacts

1.  **Ecommerce UX Blueprint**
2.  **Core User Flows**
3.  **Information Architecture**
4.  **Intelligence / Signal Taxonomy**
5.  **AI Decision & Recommendation Framework**
6.  **Automation & Approval Policy Model**
7.  **AI Interaction / Conversation Model**
8.  **Detailed Ecommerce Domain Model**
