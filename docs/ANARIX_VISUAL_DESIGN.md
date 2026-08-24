# Anarix --- Visual Design

## Visual philosophy, design direction, rules, and production standards

**Status:** Product-wide source of truth\
**Foundation:** Anarix Periwinkle System 01 and the Aan brand system.

------------------------------------------------------------------------

# 1. Visual North Star

Anarix should look:

**Modern. Sleek. Premium. Intelligent. Calm. Precise.**

It should communicate serious business intelligence with an intelligent
execution layer.

It must not look like:

-   a playful SaaS product;
-   a generic AI wrapper;
-   an overly futuristic interface;
-   a dashboard template;
-   a mascot-driven product;
-   a decoration-heavy product.

The target feeling is:

> **Quiet confidence with visible intelligence.**

Premium quality comes from consistency, typography, spacing, hierarchy,
restraint, and motion --- not from adding visual effects.

------------------------------------------------------------------------

# 2. Source-of-Truth Hierarchy

When designing any screen:

1.  use Anarix design-system tokens;
2.  reuse the existing component library;
3.  reuse established page patterns;
4.  use Aan rules for AI surfaces;
5.  satisfy task-specific requirements;
6.  only then introduce a genuinely new pattern.

Do not create one-off visual treatments when an existing component
solves the problem.

If the system does not define a value, do not invent a competing visual
language.

------------------------------------------------------------------------

# 3. Visual Character

## Quiet surfaces

The system explicitly targets **90--95% neutral UI and 5--10% color
maximum**.

Color is therefore a controlled signal.

Do not turn every card, metric, tab, or section into a colored object.

## Color is semantic

Brand color communicates product interaction.

Data colors communicate data meaning.

Aan gradient communicates intelligence.

Never blur these roles.

------------------------------------------------------------------------

# 4. Light Mode Tokens

### Background

`--background` --- `#F5F6FA`

Application background.

### Surface / Card

`--card` --- `#FFFFFF`

Cards and panels.

### Primary text

`--foreground` --- `#0F1020`

### Muted text

`--muted-foreground` --- `#555D78`

### Secondary / Ink Blue

`--secondary` --- `#2A2D4F`

Dividers and outlines.

### Brand Primary

`--primary` --- `#4A62D9`

Primary actions and links.

### Brand Accent / Lilac

`--accent` --- `#A7AEF2`

Highlights only.

### Border

`--border` --- `#E0E3EE`

Borders and dividers.

------------------------------------------------------------------------

# 5. Dark Mode Tokens

### Background

`#0E1020`

### Surface / Card

`#171A2E`

### Primary text

`#ECEEFF`

### Muted text

`#8590B5`

### Secondary

`#2F3470`

### Brand Primary

`#6E82F5`

### Brand Accent

`#B8BEFF`

Dark mode retains the same hierarchy. It is not a simple inversion of
light mode.

------------------------------------------------------------------------

# 6. Reserved Data Colors

These are strictly semantic.

### Success / Positive

`#1E9E4F`

Profit and positive deltas.

### Destructive / Negative

`#C93535`

Loss, negative deltas, and errors.

### Warning / Neutral

`#C98A14`

Caution and thresholds.

Never reuse these colors for branding, decoration, or unrelated UI.

------------------------------------------------------------------------

# 7. Aan AI Gradient

The system defines:

`linear-gradient(135deg, #8B5CF6, #6366F1, #3B82F6)`

It is used **exclusively in the Aan workspace**.

Allowed:

-   AI headers;
-   AI entry points;
-   AI highlight outlines.

Not allowed:

-   core analytics;
-   ordinary tables;
-   KPI decoration;
-   ordinary navigation;
-   reports;
-   general page backgrounds.

If everything has the AI gradient, nothing feels intelligent.

------------------------------------------------------------------------

# 8. Typography

### Headings

**Satoshi Variable**

### Body / UI

**Noto Sans**

### Aan accent

**Allura**

Allura is only for the Aan workspace.

------------------------------------------------------------------------

# 9. Type Scale

  Level   Size / Weight   Use
  ------- --------------- ------------------------------
  H1      32px / 600      Page title, one per page
  H2      24px / 600      Section title
  H3      18px / 500      Subsection / card title
  Body    14px / 400      Primary text
  Small   13px / 400      Table cells / secondary info
  Meta    12px / 400      Labels / hints / captions

Typography hierarchy should come from size, weight, spacing, placement,
and limited color.

------------------------------------------------------------------------

# 10. Typography Rules

Mandatory:

-   no center-aligned body text;
-   no decorative typography in analytics;
-   active voice in UI copy;
-   sentences should be 16 words or fewer;
-   one H1 per page;
-   concise labels;
-   no oversized marketing typography inside the application.

------------------------------------------------------------------------

# 11. Spacing System

The product uses a **4px base unit**.

  Token     Size Use
  ------- ------ -------------------------------
  0.5        2px Micro gaps
  1          4px Tight padding
  1.5        6px Badge padding / icon gaps
  2          8px Small gaps / table padding
  3         12px Compact cards / toolbar gaps
  4         16px Standard cards / section gaps
  5         20px Larger padding
  6         24px Section spacing
  8         32px Page-level spacing

Do not introduce arbitrary spacing values.

------------------------------------------------------------------------

# 12. Component Dimensions

Existing standards:

-   Button: `px-4 py-2`, approximately 40px high.
-   Input: `px-3 py-2`, approximately 40px high.
-   Table row: 44px.
-   Card: 16px padding.
-   Page content: 24px vertical spacing.
-   Toolbar gaps: 8px.

------------------------------------------------------------------------

# 13. Layout

The established page hierarchy is:

1.  PageHeader;
2.  AppTaskbar;
3.  KPI Strip / Hero Cards;
4.  Performance Chart;
5.  Underline Tabs;
6.  DataTableToolbar;
7.  Data Table + Pagination.

Do not place every section inside a card.

Use cards only when they group a meaningful object, metric, task, or
configuration group.

Whitespace should establish hierarchy before borders do.

------------------------------------------------------------------------

# 14. Sidebar

The existing system defines:

-   expanded sidebar: W-56;
-   collapsed icon-only sidebar;
-   hover popup.

The sidebar is structural chrome.

It should be:

-   quiet;
-   compact;
-   stable;
-   highly legible.

The active item must be clear without becoming a huge colored pill.

------------------------------------------------------------------------

# 15. AppTaskbar

Use the established two-row structure.

**Row 1:** breadcrumbs, marketplace/account context, sync state.

**Row 2:** filters, date range, contextual actions.

It is a utility surface, not a decorative header.

------------------------------------------------------------------------

# 16. Icons

Use the established Lucide-style icon set.

The system defines:

-   16px icons for tables;
-   20px icons for buttons;
-   24px icons for headers.

Icons inherit `currentColor`.

Rules:

-   one consistent icon family;
-   simple;
-   functional;
-   optically balanced;
-   never decorative.

------------------------------------------------------------------------

# 17. Buttons

The system defines:

-   Default;
-   Secondary;
-   Destructive;
-   Ghost;
-   Outline;
-   Link.

Use the smallest emphasis level that communicates the action.

Only the primary action should dominate.

Destructive actions must remain visually distinct.

------------------------------------------------------------------------

# 18. Form Controls

Inputs, selects, checkboxes, switches, radios, and sliders must use the
existing component language.

Every control needs appropriate visual states:

-   default;
-   focus;
-   disabled;
-   error;
-   invalid;
-   checked;
-   unchecked;
-   loading where relevant.

Never rely on color alone to communicate state.

------------------------------------------------------------------------

# 19. Badges and Status

Use badges for semantic state.

Existing examples:

-   Live;
-   Paused;
-   Archived;
-   Scheduled;
-   Out of Budget.

Do not use badges as decorative pills.

Do not create a new visual badge language for each feature.

------------------------------------------------------------------------

# 20. KPI and Card Design

KPI hierarchy:

1.  metric name;
2.  value;
3.  comparison;
4.  context.

The system provides:

-   KPICard;
-   KPICardsRow;
-   InlineKPIStrip;
-   ProfitabilityHeroCard.

Reuse these patterns.

Do not turn every metric into a giant colorful tile.

------------------------------------------------------------------------

# 21. Data Visualization

Analytics must remain visually neutral.

Brand colors are forbidden in tables and charts unless explicitly
specified by the data-visualization system.

Data colors communicate meaning.

Charts should prioritize:

-   readable axes;
-   useful comparisons;
-   precise values;
-   clear legends;
-   useful interaction.

Avoid decorative 3D, ornamental fills, excessive gradients, and visual
noise.

------------------------------------------------------------------------

# 22. Tables

Tables should be dense but not cramped.

Target:

> **High information density without visual fatigue.**

Use:

-   44px rows;
-   restrained borders;
-   strong column hierarchy;
-   concise labels;
-   semantic status;
-   clear sorting;
-   controlled whitespace.

Avoid giant table rows, card-like cells, excessive rounded containers,
and colored backgrounds for every state.

------------------------------------------------------------------------

# 23. Panels and Modals

Panels should feel attached to the page.

They use:

-   strong hierarchy;
-   compact spacing;
-   independent scroll;
-   clear title;
-   clear close;
-   clear footer actions.

Modals use the established maximum width of **520px**.

A modal should be focused, not a second application.

------------------------------------------------------------------------

# 24. Aan Visual Language

The brand system defines Aan as:

-   composed;
-   intelligent;
-   steady under pressure;
-   watchful at rest;
-   precise in motion;
-   useful in context.

Aan is the active intelligence layer across Anarix.

It must never become generic mascot decoration.

------------------------------------------------------------------------

# 25. Aan Presence

Aan appears in:

-   chat dock;
-   prompt entry;
-   copilot panels;
-   split view;
-   action island;
-   insight notices;
-   generated artifacts.

Aan stays absent from:

-   static decorative chrome;
-   repeated branding;
-   filler states;
-   noisy mascot moments.

Do not recolor the supplied mascot.

------------------------------------------------------------------------

# 26. Aan States

Use the inherited states:

### Diamond --- idle

Calm and ready.

### Circle --- listening

Receiving human intent and context.

### Bar --- loading

Bridging prompt and output.

### Cube --- thinking

Focused analytical reasoning.

These are functional states, not decorative animations.

------------------------------------------------------------------------

# 27. AI Workspace

The Aan workspace can be visually distinct while remaining recognizably
Anarix.

Allowed:

-   Aan gradient;
-   AI-specific headers;
-   AI artifact emphasis;
-   AI conversation patterns;
-   intelligent motion.

Not allowed:

-   an entirely separate design system;
-   unrelated typography;
-   unrelated iconography;
-   AI gradient leaking into ordinary product surfaces.

The visual relationship is:

> **Same product, intelligence mode.**

------------------------------------------------------------------------

# 28. Floating Action Island

The system defines a Floating Action Island around **Ask Aan**.

It should be:

-   compact;
-   available;
-   visually distinct;
-   non-intrusive;
-   expandable only when useful.

It must never block important content.

------------------------------------------------------------------------

# 29. Motion

Motion should reinforce spatial continuity and state.

Use subtle motion for:

-   panels;
-   dropdowns;
-   tabs;
-   selection;
-   loading;
-   AI states;
-   completion.

Avoid:

-   bounce;
-   excessive spring;
-   page movement;
-   particle effects;
-   constant mascot animation.

Do not add artificial delay.

------------------------------------------------------------------------

# 30. Depth and Elevation

Premium visual quality comes from:

-   surface hierarchy;
-   border contrast;
-   spacing;
-   typography;
-   controlled elevation.

Do not add heavy shadows to every card.

Do not default to glassmorphism.

Do not add gradients to ordinary surfaces.

If an elevation token is not defined, reuse the existing implementation
token rather than inventing a competing shadow system.

------------------------------------------------------------------------

# 31. Borders

The light-mode border token is:

`#E0E3EE`

Use borders to establish structure, not to draw attention.

Use whitespace first and borders second.

Do not outline every nested element.

------------------------------------------------------------------------

# 32. Density

Anarix is a professional work application.

It should support dense working sessions through:

-   compact controls;
-   14px body text;
-   13px table text;
-   12px metadata;
-   44px table rows;
-   16px card padding;
-   24px section spacing.

Do not make the application artificially spacious like a marketing site.

------------------------------------------------------------------------

# 33. Premium Design Rules

Premium means:

-   fewer visual decisions;
-   better hierarchy;
-   precise alignment;
-   excellent typography;
-   restrained color;
-   consistent components;
-   fast feedback;
-   coherent motion.

Premium does not mean:

-   more gradients;
-   more shadows;
-   more glass;
-   larger type;
-   more animation;
-   more rounded cards;
-   more illustrations.

------------------------------------------------------------------------

# 34. Intelligent Design Rules

Visual intelligence comes from:

-   contextual recommendations;
-   evidence;
-   prioritization;
-   progressive disclosure;
-   meaningful state;
-   AI artifacts;
-   action previews;
-   confidence/impact where relevant.

Never try to make the product look intelligent through futuristic
decoration alone.

------------------------------------------------------------------------

# 35. Proactive AI Visual Pattern

When Aan surfaces an opportunity, use this hierarchy:

**Observation**\
Labor Day is approaching.

**Implication**\
Your Shopify store has no promotion planned.

**Recommendation**\
Create a Labor Day coupon and update the store banner.

**Actions**\
\[Create coupon\] \[Assign banner task\] \[Ask Sales\]

The recommendation should be stronger than explanatory copy. The action
must remain controlled.

------------------------------------------------------------------------

# 36. Responsive Visual Rules

Desktop is the primary workspace.

At smaller widths:

-   collapse navigation;
-   reduce secondary controls;
-   preserve primary action;
-   move contextual controls into menus/panels;
-   allow data tables to scroll;
-   retain readable typography.

Do not shrink everything until the desktop layout technically fits.

------------------------------------------------------------------------

# 37. Accessibility

Visual design must remain usable without color alone.

Ensure:

-   readable contrast;
-   visible focus;
-   semantic state indicators;
-   clear disabled states;
-   explicit error messaging;
-   accessible labels.

Low contrast is not premium.

Legibility is part of the visual system.

------------------------------------------------------------------------

# 38. Visual Anti-Patterns

Never:

-   use random gradients;
-   use brand blue everywhere;
-   use success green decoratively;
-   use destructive red decoratively;
-   use Aan gradient outside Aan;
-   recolor Aan;
-   use Allura outside Aan;
-   center-align body copy;
-   use decorative analytics typography;
-   mix icon families;
-   invent arbitrary spacing;
-   create one-off button styles;
-   turn every element into a card;
-   overload the interface with badges;
-   add heavy shadows everywhere;
-   default to glassmorphism;
-   use AI visuals without AI functionality;
-   animate static UI for attention.

------------------------------------------------------------------------

# 39. Production Approval Checklist

-   [ ] Approved color tokens only.
-   [ ] 90--95% neutral visual balance maintained.
-   [ ] Satoshi used for headings.
-   [ ] Noto Sans used for body/UI.
-   [ ] Allura used only for Aan.
-   [ ] Approved type scale used.
-   [ ] 4px spacing system used.
-   [ ] Existing components reused.
-   [ ] Correct icon sizing used.
-   [ ] Data colors remain semantic.
-   [ ] Brand color is not decorative in analytics.
-   [ ] Aan gradient is confined to AI.
-   [ ] Aan is not recolored.
-   [ ] Established page hierarchy is maintained.
-   [ ] Unnecessary cards are avoided.
-   [ ] Excessive shadows/gradients are avoided.
-   [ ] Density remains professional and readable.
-   [ ] Focus/disabled/error states exist.
-   [ ] Motion is purposeful and restrained.
-   [ ] Responsive behavior is intentional.

------------------------------------------------------------------------

## Final Principle

> **Clarity over decoration.\
> Hierarchy over noise.\
> Intelligence over spectacle.\
> Precision over complexity.\
> Confidence over visual excess.**

The product should feel premium because nothing is accidental.
