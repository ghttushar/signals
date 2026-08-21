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

## Additional foundational file

- `INTEGRATION_FEASIBILITY.md` — realistic API/integration constraints, capability boundaries, mock-data requirements, and prototype feasibility rules.

## Planned follow-up knowledge files

1. `ECOMMERCE_UX_BLUEPRINT.md`
2. `PRODUCT_OBJECT_MODEL.md`
3. `INTELLIGENCE_MODEL.md`
4. `INFORMATION_ARCHITECTURE.md`
5. `CORE_USER_FLOWS.md`
6. `AI_INTERACTION_PRINCIPLES.md`
7. `DESIGN_PRINCIPLES.md`
8. `MVP_SCOPE.md`
9. `TECHNICAL_ARCHITECTURE.md`
10. `OPENCODE_BUILD_RULES.md`

Do not jump directly to polished UI before the product and UX foundations are defined.
