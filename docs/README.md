# Product Knowledge Pack

This folder contains foundational product context intended to be supplied to OpenCode.

## Mandatory OpenCode knowledge protocol

**Before proposing any plan, architecture, implementation approach, UI change, UX change, refactor, feature, or other modification, OpenCode MUST read and understand ALL available `.md` files in this knowledge pack.**

This is a hard requirement.

For **every change**, the workflow is:

1. Read every available `.md` file in the knowledge pack.
2. Treat the combined documents as the current product source of truth.
3. Identify any relevant constraints, decisions, principles, dependencies, and previously agreed direction.
4. Check the requested change against those documents.
5. Only then present the proposed plan to the user.
6. Wait for the user's approval before making the change unless the user explicitly instructed OpenCode to implement immediately.
7. After implementation, re-check the relevant `.md` files before proposing the next change.

OpenCode must **not**:
- read only the file that appears relevant;
- rely on memory of previous instructions instead of rereading the knowledge files;
- propose a UI or engineering solution that contradicts a later product decision;
- silently override product principles because a local implementation is easier;
- start changing code before presenting the plan when plan approval is expected.

### Pre-plan response requirement

Before every planned change, OpenCode's response to the user should briefly state:

> **Knowledge reviewed:** [number] Markdown files  
> **Relevant constraints:** [brief summary]  
> **Proposed change:** [brief summary]  
> **Plan:** [clear implementation/design plan]  
> **Awaiting approval:** Yes

For very small changes where a formal plan would be excessive, OpenCode must still review all `.md` files and summarize the relevant constraints before changing anything.

## Source-of-truth hierarchy

When multiple knowledge files contain relevant guidance, use this order:

1. Product thesis
2. Product / UX principles
3. Intelligence and domain models
4. User flows
5. Information architecture
6. UI architecture
7. Visual design
8. Technical implementation details
9. Local code convenience

A lower-level implementation convenience must never silently override a higher-level product decision.

## Source-of-truth file

- `PRODUCT_THESIS.md` — foundational product thesis, principles, users, experience, intelligence model, and implementation boundaries.

## Additional foundational files

- `INTEGRATION_FEASIBILITY.md` — realistic API/integration constraints, capability boundaries, mock-data requirements, and prototype feasibility rules.
- `OPENCODE_PROTOCOLS_AND_RULES.md` — product behavior constitution and OpenCode development rules. Governs AI behavior, human authority, permissions, evidence, memory, failures, UX behavior, prototype simulation, and all development processes.
- `USER_EXPERIENCE_MODEL.md` — intelligence-first, human-orchestrated experience model. Defines dual loops (continuous AI watching vs human operating), white-box AI, structured work objects, and attention model.
- `INFORMATION_OBJECT_MODEL.md` — information/object model. Defines persistent objects, relationships, states, and lifecycles (Business, Observation, Intelligence, Orchestration, Execution, Memory).
- `INTELLIGENCE_MODEL.md` — intelligence/reasoning model. Defines how the AI observes, anticipates, prioritizes, orchestrates work, and learns (Level 4–5 anticipatory & operational intelligence).
- `ANARIX_USER_FLOWS_PRODUCT_ARCHITECTURE.md` — customer-survey-derived product blueprint. Defines 5 core jobs, 5 pillars, product architecture, IA (HOME/ACCOUNTS/INSIGHTS/WORK/MEETINGS/REPORTS/CATALOG/CAMPAIGNS/PROMOTIONS), investigation, meeting prep, and phased MVP.
- `ANARIX_VISUAL_DESIGN.md` — visual design system. Defines Anarix Periwinkle tokens (light/dark), typography (Satoshi/Noto Sans/Allura), 4px spacing, component dimensions, layout hierarchy, and production checklist.
- `ANARIX_INTERACTION_DESIGN.md` — interaction design system. Defines calm/intelligent/fast principles, context preservation, smallest useful surface, progressive disclosure, AI/Aan states, panels/modals/tables/forms, and responsive behavior.
- `UI_FEATURE_SCREEN_ARCHITECTURE.md` — UI/feature/screen architecture (renamed OPERATE/EXPLORE). Defines 3 environments Operate/Explore/Workspace + Intelligence/Connections/Settings, 38 sections of capabilities/tasks.
- `SCREEN_INVENTORY.md` — 126-screen inventory (Onboarding 01-08, Operate 09-17, Explore 18-63, Workspace 64-80, Intelligence 81-88, Connections 89-99, Settings 100-114, Global 115-126) with A/B/C categories.
- `AAN_MASCOT_SPEC.md` — Aan mascot spec. Coral `#f46d76` identity, 4 states (diamond/circle/cube/bar), sizes, tracking/hover, static vs full interactive.

## Planned follow-up knowledge files

1. `ECOMMERCE_UX_BLUEPRINT.md`
2. `AI_INTERACTION_PRINCIPLES.md`
3. `DESIGN_PRINCIPLES.md`
4. `MVP_SCOPE.md`
5. `TECHNICAL_ARCHITECTURE.md`
6. `OPENCODE_BUILD_RULES.md`

Do not jump directly to polished UI before the product and UX foundations are defined.
