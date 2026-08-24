# Anarix --- Interaction Design

## Product-wide philosophy, principles, rules, and production standards

**Status:** Product-wide source of truth\
**Applies to:** authenticated Anarix surfaces, workflows, AI
interactions, integrations, workspaces, panels, modals, tables, forms,
notifications, and responsive states.

------------------------------------------------------------------------

## 1. Interaction North Star

Anarix should feel **calm, intelligent, fast, precise, and in control**.

Every interaction must make it obvious:

1.  what the user is looking at;
2.  what changed;
3.  what they can do next;
4.  what Anarix is doing;
5.  whether the action succeeded;
6.  how to recover if it did not.

The target experience is:

> **High information density with low interaction friction.**

Anarix is a business intelligence and execution product. Users should
spend time making decisions, not operating the interface.

------------------------------------------------------------------------

## 2. Core Principles

### 2.1 Context before controls

Show the relevant entity and state before exposing actions.

The user should never need to remember what an action applies to.

### 2.2 Preserve context

Nested work should preserve account, marketplace, product, campaign,
filters, scroll position, and relevant selection wherever practical.

Closing a panel should return the user to the same state.

### 2.3 Prefer the smallest useful surface

Use the least disruptive surface that can complete the task:

1.  inline interaction;
2.  popover;
3.  right-side panel;
4.  modal;
5.  full-page workflow.

Do not use a full page for a contextual edit.

### 2.4 Progressive disclosure

Show only what is needed for the next decision. Reveal advanced
configuration when it becomes relevant.

### 2.5 One primary action

Each screen or surface should have one clearly dominant next action.
Secondary actions must not compete with it.

### 2.6 Immediate feedback

Every meaningful action needs visible feedback: loading, validation,
status, toast, progress, or completion.

### 2.7 Never hide system state

Clearly expose connected/disconnected, syncing/synced, draft/published,
pending/completed, live/paused, running/failed, and AI thinking/approval
states.

### 2.8 Reversibility

Prefer reversible actions. Provide undo where practical. Irreversible
actions require explicit consequence and confirmation.

### 2.9 Do not make users babysit the system

Long-running work must show progress rather than freeze the interface.

------------------------------------------------------------------------

## 3. Global Navigation

The design system defines an expanded **W-56 sidebar**, collapsed
icon-only navigation, hover popups, breadcrumbs, marketplace/account
selection, and a Floating Action Island.

Rules:

-   navigation semantics remain stable across the product;
-   the active location is always obvious;
-   collapsed navigation retains discoverable labels;
-   breadcrumbs represent actual hierarchy;
-   account and marketplace context must never become ambiguous;
-   changing account or marketplace must not display stale data as
    current.

------------------------------------------------------------------------

## 4. AppTaskbar

Use the established universal two-row sticky taskbar.

**Row 1:** breadcrumb, account/marketplace, sync state, contextual
utilities.

**Row 2:** filters, date range, contextual actions.

When a right-side panel opens, row-two actions may collapse to icon-only
controls.

The taskbar must remain stable and predictable.

------------------------------------------------------------------------

## 5. Right-Side Panels

Right-side panels are the default surface for contextual configuration
and inspection.

The design system specifies:

-   fixed viewport;
-   independent scroll area;
-   auto-close on outside click;
-   exception for Aan/Create flows.

Use panels for:

-   create/edit forms;
-   product details;
-   campaign settings;
-   period breakdowns;
-   contextual configuration;
-   contextual inspection.

Opening a panel must not navigate away or reset the underlying page.

Closing it must return the user to the same context.

For unsaved changes:

-   show an unsaved state;
-   protect entered work;
-   confirm before accidental dismissal.

------------------------------------------------------------------------

## 6. Modals

Use modals only for focused decisions.

Existing standard:

-   maximum width: **520px**;
-   focus trapped;
-   ESC closes ordinary dialogs;
-   destructive confirmation requires deliberate interaction.

Structure:

1.  title;
2.  concise explanation;
3.  content/input;
4.  secondary action;
5.  primary action.

Destructive dialogs must state what changes, what is affected, and
whether it can be undone.

------------------------------------------------------------------------

## 7. Tables

Tables are a primary work surface.

The system defines DataTableToolbar, sortable table heads, pin states,
sorting states, pagination, and underline tabs.

Rules:

-   keep rows consistent;
-   align values by data type;
-   keep labels concise;
-   use semantic status badges;
-   do not overload rows with actions;
-   make row behavior predictable;
-   show selection count before bulk actions.

Sorting must visibly communicate neutral, ascending, and descending
states.

------------------------------------------------------------------------

## 8. Forms

Complex workflows should feel short.

Group fields by decision. Validate near the field. Preserve values after
recoverable errors. Use sensible defaults.

Complex execution workflows should generally follow:

> **Select → Configure → Review → Confirm → Execute → Verify**

Do not expose consequential execution before review.

------------------------------------------------------------------------

## 9. Search and Filters

Search is for locating. Filters are for narrowing.

Search must:

-   respond quickly;
-   preserve query context;
-   show searched scope;
-   provide a useful empty result.

Filters must:

-   show active state;
-   provide clear/reset behavior;
-   persist while the user remains in the workflow.

------------------------------------------------------------------------

## 10. Data Exploration

Use a fluid analytical path:

> **KPI → chart → metric selector → table → detail panel**

The design system supports selectable chart metrics with a
maximum-metric cap.

Rules:

-   KPI interactions may focus related visualizations;
-   chart interactions update immediately;
-   precise values are available on hover;
-   changing one metric does not reset unrelated filters;
-   comparison periods remain obvious.

------------------------------------------------------------------------

## 11. Loading, Empty, and Error States

### Loading

Use the smallest useful loading surface:

-   button loading for a local action;
-   skeleton for local content;
-   panel skeleton for panels;
-   page skeleton for pages;
-   progress state for long-running work;
-   Aan state for AI processing.

Do not use a generic spinner when progress information is useful.

### Empty

Every empty state answers:

1.  why is it empty?
2.  what can the user do?
3.  what is the primary next action?

### Error

Errors must explain cause when known, impact, and recovery.

Avoid generic:

> Something went wrong.

Prefer:

> Shopify connection expired. Reconnect Shopify to resume catalog sync.

------------------------------------------------------------------------

## 12. Notifications

Toasts are transient confirmations.

Use the established success, error, warning, and info patterns.

Critical information must not exist only in a toast.

------------------------------------------------------------------------

# 13. AI / Aan Interaction Model

Aan is not a generic chatbot. It is the intelligence layer on top of
work.

The brand system defines Aan as:

-   watchful at rest;
-   precise in motion;
-   useful in context;
-   serious, calm, and helpful.

Aan appears in:

-   chat dock and prompt entry;
-   copilot panels;
-   split views;
-   action island;
-   insight notices;
-   generated artifacts.

Aan stays absent from static decoration, repeated branding, and filler
motion.

------------------------------------------------------------------------

## 14. Contextual AI

When Aan is invoked from a campaign, account, product, report, meeting,
or inventory issue, it should inherit that context.

The active context should be visible whenever ambiguity is possible.

The user should not have to repeat context that Anarix already knows.

------------------------------------------------------------------------

## 15. AI Response Structure

For analytical questions prefer:

1.  answer;
2.  evidence;
3.  explanation;
4.  recommendation;
5.  action.

Example:

> **Sales dropped 14% this week.**\
> Traffic fell 19%. Conversion remained stable.\
> **Recommended:** Increase budget on the three campaigns losing
> impression share.\
> **\[Review changes\]**

Avoid long conversational essays when a decision structure is enough.

------------------------------------------------------------------------

## 16. AI Action States

AI must distinguish:

### Inform

States a fact. No confirmation.

### Recommend

Suggests an action. Does not execute.

### Prepare

Creates a draft or proposed change for review.

### Execute

Performs the change according to workspace permissions.

### Verify

Reports the actual result.

This distinction is mandatory for trust.

------------------------------------------------------------------------

## 17. Proactive Intelligence

Anarix should proactively surface relevant opportunities without
becoming noisy.

Example:

> **Labor Day is approaching.**\
> Your Shopify store has no Labor Day promotion planned.

Then:

> **Recommended** - Create Labor Day coupon - Update Shopify banner -
> Assign banner design to Design - Ask Sales to confirm the offer -
> Schedule campaign review

Then expose controlled actions:

> **\[Create tasks\] \[Draft promotion\] \[Ask Aan\]**

The AI coordinates work. It does not silently perform consequential
actions.

------------------------------------------------------------------------

## 18. AI Confirmation

Confirmation is required when an AI action:

-   sends an external message;
-   changes budget;
-   publishes a promotion;
-   publishes a listing;
-   deletes or changes data destructively;
-   changes permissions;
-   performs another irreversible operation.

The user must understand:

-   proposed action;
-   affected objects;
-   reason;
-   expected impact;
-   approval requirement.

------------------------------------------------------------------------

## 19. AI Tool Execution

When Aan performs work:

1.  show intent;
2.  show action/tool;
3.  show progress;
4.  show result;
5.  expose failure;
6.  provide recovery.

Example:

> Preparing campaign changes\
> ✓ Selected 10 products\
> ✓ Generated targeting\
> ✓ Checked inventory\
> ✓ Checked budget\
> **Waiting for approval**

This is more trustworthy than a generic "thinking" animation.

------------------------------------------------------------------------

## 20. Aan States

Use the inherited states exactly:

-   **Diamond --- idle:** calm and ready.
-   **Circle --- listening:** receiving intent/context.
-   **Bar --- loading:** bridging prompt and output.
-   **Cube --- thinking:** focused analytical reasoning.

Aan assets must remain unchanged. Do not recolor the mascot.

------------------------------------------------------------------------

## 21. Motion

Motion should communicate state, continuity, hierarchy, or cause/effect.

Use it for:

-   panels;
-   dropdowns;
-   tabs;
-   selection;
-   loading;
-   AI state changes;
-   completion.

Avoid:

-   bounce;
-   excessive spring;
-   large page movement;
-   decorative particles;
-   constant mascot animation;
-   artificial delays.

Premium means responsive, not slow.

------------------------------------------------------------------------

## 22. Keyboard and Focus

All interactive elements must be keyboard accessible.

Rules:

-   visible focus;
-   logical tab order;
-   ESC for dismissible overlays;
-   Enter where appropriate;
-   focus moves into newly opened dialogs/panels;
-   focus returns to the trigger when they close.

------------------------------------------------------------------------

## 23. Responsive Interaction

Desktop is the primary Anarix workspace.

As width decreases:

1.  collapse secondary navigation;
2.  collapse secondary actions;
3.  preserve primary actions;
4.  move contextual controls into menus/panels;
5.  allow tables to scroll rather than destroy information hierarchy.

Do not simply shrink the desktop layout.

------------------------------------------------------------------------

## 24. Interaction Anti-Patterns

Never:

-   hide critical actions behind unexplained icons;
-   use multiple competing primary actions;
-   reset filters unexpectedly;
-   lose unsaved work;
-   navigate away for trivial edits;
-   hide AI actions;
-   auto-execute high-risk AI actions without permission;
-   use decorative AI elements without intelligence;
-   use loading animation without useful state;
-   show stale data as current;
-   make errors unrecoverable;
-   create unnecessary confirmations;
-   interrupt users with low-value notifications.

------------------------------------------------------------------------

## 25. Production Approval Checklist

-   [ ] Entry point is clear.
-   [ ] Context is visible.
-   [ ] Primary action is unambiguous.
-   [ ] Loading state exists.
-   [ ] Empty state exists.
-   [ ] Error state exists.
-   [ ] Permission state exists where required.
-   [ ] Unsaved changes are protected.
-   [ ] Destructive actions are explicit.
-   [ ] Success is visible.
-   [ ] Failure is actionable.
-   [ ] Back/close preserves context.
-   [ ] Keyboard navigation works.
-   [ ] Focus behavior works.
-   [ ] Responsive behavior is defined.
-   [ ] AI actions show intent and result.
-   [ ] Stale data is never presented as current.
-   [ ] No interaction adds friction without a reason.

------------------------------------------------------------------------

## Final Principle

> **Anarix should feel like a highly capable operator sitting beside the
> user, not a complicated dashboard the user has to operate.**

The interface should disappear when the user understands what matters
and what to do next.
